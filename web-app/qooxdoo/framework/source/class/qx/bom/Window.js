/* ************************************************************************

   qooxdoo - the new era of web development

   http://qooxdoo.org

   Copyright:
     2004-2008 1&1 Internet AG, Germany, http://www.1und1.de

   License:
     LGPL: http://www.gnu.org/licenses/lgpl.html
     EPL: http://www.eclipse.org/org/documents/epl-v10.php
     See the LICENSE file in the project's top-level directory for details.

   Authors:
     * Alexander Steitz (aback)

************************************************************************ */

/**
 * Includes library functions to work with browser windows
 */
qx.Class.define("qx.bom.Window",
{
  statics :
  {
    /** Internal blocker instance for all browsers which need an additional
     * blocker for modal windows because they do not support it natively.
     */
    __blocker : null,

    /** Window handle which is currently blocked. */
    __blockerWindow : null,

    /** Timer instance to poll for unblocking if the modale window was closed */
    __timer : null,

    /** Supported options and their mapping to window options */
    __modalOptions :
    {
      "top"      : "dialogTop",
      left       : "dialogLeft",
      width      : "dialogWidth",
      height     : "dialogHeight",
      scrollbars : "scroll",
      resizable  : "resizable"
    },

    /** Supported options for modeless windows */
    __modelessOptions :
    {
      "top"      : 1,
      left       : 1,
      width      : 1,
      height     : 1,
      dependent  : 1,
      resizable  : 1,
      status     : 1,
      location   : 1,
      menubar    : 1,
      scrollbars : 1,
      toolbar    : 1
    },


    /**
     * Whether the browser can open native modal window.
     *
     * @return {Boolean} Capability of open modal windows
     */
    __isCapableToOpenModalWindows : function() {
      return window.showModalDialog != null;
    },


    /**
     * Opens a native window with the given options.
     *
     * Modal windows can have the following options:
     *   - top
     *   - left
     *   - width
     *   - height
     *   - scrollbars
     *   - resizable
     *
     * Modeless windows have the following options:
     *   - top
     *   - left
     *   - width
     *   - height
     *   - dependent
     *   - resizable
     *   - status
     *   - location
     *   - menubar
     *   - scrollbars
     *   - toolbar
     *
     * Except of dimension and location options all other options are boolean
     * values.
     *
     * @param url {String} URL of the window
     * @param name {String} Name of the window
     * @param options {Map} Window options
     * @param modal {Boolean} Whether the window should be opened modal
     * @return {win} native window object
     */
    open : function(url, name, options, modal)
    {
      if (url == null) {
        url = "javascript:/";
      }

      if (name == null) {
        name = "qxNativeWindow" + new Date().getTime();
      }

      var configurationString = this.__generateConfigurationString(options, modal);

      if (modal)
      {
        if (this.__isCapableToOpenModalWindows()) {
          return window.showModalDialog(url, null, configurationString);
        }
        else
        {
          if (this.__blocker == null) {
            this.__blocker = new qx.bom.Blocker;
          }
          this.__blocker.block();

          if (this.__timer == null)
          {
            this.__timer = new qx.event.Timer(200);
            this.__timer.addListener("interval", this.__checkForUnblocking, this);
            this.__timer.start();
          } else {
            this.__timer.restart();
          }

          this.__blockerWindow = window.open(url, name, configurationString);
          return this.__blockerWindow;
        }
      } else {
        return window.open(url, name, configurationString);
      }
    },


    /**
     * Returns the given config as string for direct use for the "window.open" method
     *
     * @param options {Array} Array with all configuration options
     * @param modal {Boolean} whether the config should be for a modal window
     *
     * @return {String} configuration as string representation
     */
    __generateConfigurationString : function(options, modal)
    {
      var configurationString;
      var value;
      var configuration = [];

      if (modal && this.__isCapableToOpenModalWindows())
      {
        for (var key in options)
        {
          if (qx.bom.Window.__modalOptions[key])
          {
            var suffix = "";
            if (key != "scrollbars" && key != "resizable") {
              suffix = "px";
            }

            value = qx.bom.Window.__modalOptions[key] + ":" + options[key] + suffix;
            configuration.push(value);
          }
          else {
            qx.log.Logger.warn("Option '" + key + "' is not supported for modal windows.");
          }
        }

        configurationString = configuration.join(";");
      }
      else
      {
        for (var key in options)
        {
          if (qx.bom.Window.__modelessOptions[key])
          {
            if (qx.lang.Type.isBoolean(options[key])) {
              value = key + "=" + options[key] ? "yes" : "no";
            }
            else {
              value = key + "=" + options[key];
            }
            configuration.push(value);
          }
          else {
            qx.log.Logger.warn("Option '" + key + "' is not supported for native windows.");
          }
        }

        configurationString = configuration.join(",");
      }

      return configurationString;
    },


    /**
     * Interval method which checks if the native window was closed to also
     * stop the associated timer.
     */
    __checkForUnblocking : function()
    {
      if (this.isClosed(this.__blockerWindow))
      {
        this.__blocker.unblock();
        this.__timer.stop();
      }
    },


    /**
     * Closes the given window
     *
     * @param win {Window} Native window object
     * @return {void}
     */
    close : function(win)
    {
      if (win) {
        return win.close();
      }
    },


    /**
     * Checks if the window is closed
     *
     * @param win {Window} Native window object
     * @return {Boolean} Closed state
     */
    isClosed : function(win)
    {
      var closed = true;

      if (win)
      {
        try {
          closed = win.closed;
        } catch(ex) {}
      }

      return closed;
    },


    /**
     * Moving an opened window is not allowed in the most browsers anymore.
     *
     * @param win {Window} Native window object
     * @param top {Integer} Y-coordinate
     * @param left {Integer} X-coordinate
     * @return {void}
     */
    moveTo : function(win, top, left)
    {
      /*
        http://www.microsoft.com/technet/prodtechnol/winxppro/maintain/sp2brows.mspx
        Changes to Functionality in Microsoft Windows XP Service Pack 2
        Part 5: Enhanced Browsing Security
        URLACTION_FEATURE_WINDOW_RESTRICTIONS
        Allow script-initiated windows without size or position constraints
        Code: 2102
      */

      if (!qx.bom.Window.isClosed(win))
      {
        try {
          win.moveTo(left, top);
        } catch(ex) {
          qx.log.Logger.error("Cross-Domain Scripting problem: Could not move window!", ex);
        }
      }
    },


    /**
     * Resizing an opened window is not allowed in the most browsers anymore.
     *
     * @param win {Window} Native window object
     * @param width {Integer} New width
     * @param height {Integer} New height
     * @return {void}
     */
    resizeTo : function(win, width, height)
    {
      /*
        http://www.microsoft.com/technet/prodtechnol/winxppro/maintain/sp2brows.mspx
        Changes to Functionality in Microsoft Windows XP Service Pack 2
        Part 5: Enhanced Browsing Security
        URLACTION_FEATURE_WINDOW_RESTRICTIONS
        Allow script-initiated windows without size or position constraints
        Code: 2102
      */

      if (!qx.bom.Window.isClosed(win))
      {
        try {
          win.resizeTo(width, height);
        } catch(ex) {
          qx.log.Logger.error("Cross-Domain Scripting problem: Could not resize window!", ex);
        }
      }
    }
  }
});
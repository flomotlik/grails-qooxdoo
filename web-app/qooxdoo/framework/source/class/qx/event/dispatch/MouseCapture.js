 /* ************************************************************************

   qooxdoo - the new era of web development

   http://qooxdoo.org

   Copyright:
     2007-2008 1&1 Internet AG, Germany, http://www.1und1.de

   License:
     LGPL: http://www.gnu.org/licenses/lgpl.html
     EPL: http://www.eclipse.org/org/documents/epl-v10.php
     See the LICENSE file in the project's top-level directory for details.

   Authors:
     * Fabian Jakobs (fjakobs)

************************************************************************ */

/* ************************************************************************

#use(qx.event.handler.Focus)
#use(qx.event.handler.Window)
#use(qx.event.handler.Capture)

************************************************************************ */

/**
 * Implementation of the Internet Explorer specific event capturing mode for
 * mouse events http://msdn2.microsoft.com/en-us/library/ms536742.aspx.
 *
 * This class is used internally by {@link qx.event.Manager} to do mouse event
 * capturing.
 */
qx.Class.define("qx.event.dispatch.MouseCapture",
{
  extend : qx.event.dispatch.AbstractBubbling,


  /**
   * @param manager {qx.event.Manager} Event manager for the window to use
   * @param registration {qx.event.Registration} The event registration to use
   */
  construct : function(manager, registration)
  {
    this.base(arguments, manager);
    this.__window = manager.getWindow();
    this.__registration = registration;

    manager.addListener(this.__window, "blur", this.releaseCapture, this);
    manager.addListener(this.__window, "focus", this.releaseCapture, this);
    manager.addListener(this.__window, "scroll", this.releaseCapture, this);
  },


  statics :
  {
    /** {Integer} Priority of this dispatcher */
    PRIORITY : qx.event.Registration.PRIORITY_FIRST
  },


  members:
  {
    __registration : null,
    __captureElement : null,
    __containerCapture : true,
    __window : null,


    // overridden
    _getParent : function(target) {
      return target.parentNode;
    },


    /*
    ---------------------------------------------------------------------------
      EVENT DISPATCHER INTERFACE
    ---------------------------------------------------------------------------
    */

    // overridden
    canDispatchEvent : function(target, event, type)
    {
      return (
        this.__captureElement &&
        this.__captureEvents[type]
      );
    },


    // overridden
    dispatchEvent : function(target, event, type)
    {
      // Conforming to the MS implementation a mouse click will stop mouse
      // capturing. The event is "eaten" by the capturing handler.
      if (type == "click")
      {
        event.stopPropagation();

        this.releaseCapture();
        return;
      }

      if (
        this.__containerCapture ||
        !qx.dom.Hierarchy.contains(this.__captureElement, target)
      ) {
        target = this.__captureElement;
      }

      this.base(arguments, target, event, type);
    },


    /*
    ---------------------------------------------------------------------------
      HELPER
    ---------------------------------------------------------------------------
    */

    /**
     * @lint ignoreReferenceField(__captureEvents)
     */
    __captureEvents :
    {
      "mouseup": 1,
      "mousedown": 1,
      "click": 1,
      "dblclick": 1,
      "mousemove": 1,
      "mouseout": 1,
      "mouseover": 1
    },


    /*
    ---------------------------------------------------------------------------
      USER ACCESS
    ---------------------------------------------------------------------------
    */

    /**
     * Set the given element as target for event
     *
     * @param element {Element} The element which should capture the mouse events.
     * @param containerCapture {Boolean?true} If true all events originating in
     *   the container are captured. IF false events originating in the container
     *   are not captured.
     */
    activateCapture : function(element, containerCapture)
    {
      var containerCapture = containerCapture !== false;

      if (
        this.__captureElement === element &&
        this.__containerCapture == containerCapture
      ) {
        return;
      }


      if (this.__captureElement) {
        this.releaseCapture();
      }

      // turn on native mouse capturing if the browser supports it
      this.nativeSetCapture(element, containerCapture);
      if (this.hasNativeCapture)
      {
        var self = this;
        qx.bom.Event.addNativeListener(element, "losecapture", function()
        {
          qx.bom.Event.removeNativeListener(element, "losecapture", arguments.callee);
          self.releaseCapture();
        });
      }

      this.__containerCapture = containerCapture;
      this.__captureElement = element;
      this.__registration.fireEvent(element, "capture", qx.event.type.Event, [true, false]);
    },


    /**
     * Get the element currently capturing events.
     *
     * @return {Element|null} The current capture element. This value may be
     *    null.
     */
    getCaptureElement : function() {
      return this.__captureElement;
    },


    /**
     * Stop capturing of mouse events.
     */
    releaseCapture : function()
    {
      var element = this.__captureElement;

      if (!element) {
        return;
      }

      this.__captureElement = null;
      this.__registration.fireEvent(element, "losecapture", qx.event.type.Event, [true, false]);

      // turn off native mouse capturing if the browser supports it
      this.nativeReleaseCapture(element);
    },


    /** Whether the browser has native mouse capture support */
    hasNativeCapture : qx.bom.client.Engine.MSHTML,


    /**
     * If the browser supports native mouse capturing, sets the mouse capture to
     * the object that belongs to the current document.
     *
     * @param element {Element} The capture DOM element
     * @param containerCapture {Boolean?true} If true all events originating in
     *   the container are captured. If false events originating in the container
     *   are not captured.
     * @signature function(element, containerCapture)
     */
    nativeSetCapture : qx.core.Variant.select("qx.client",
    {
      "mshtml" : function(element, containerCapture) {
        element.setCapture(containerCapture !== false);
      },

      "default" : qx.lang.Function.empty
    }),


    /**
     * If the browser supports native mouse capturing, removes mouse capture
     * from the object in the current document.
     *
     * @param element {Element} The DOM element to release the capture for
     * @signature function(element)
     */
    nativeReleaseCapture : qx.core.Variant.select("qx.client",
    {
      "mshtml" : function(element) {
        element.releaseCapture();
      },

      "default" : qx.lang.Function.empty
    })
  },


  destruct : function() {
    this.__captureElement = this.__window = this.__registration = null;
  },


  defer : function(statics) {
    qx.event.Registration.addDispatcher(statics);
  }
});
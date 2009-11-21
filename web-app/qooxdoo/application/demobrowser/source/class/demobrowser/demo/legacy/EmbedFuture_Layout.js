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
     * Sebastian Werner (wpbasti)
     * Fabian Jakobs (fjakobs)

************************************************************************ */

/* ************************************************************************

#use(qx.legacy.theme.ClassicRoyale)

************************************************************************ */

/**
 * This example embeds a 0.8 ui widget into a legacy qooxdoo layout.
 */
qx.Class.define("demobrowser.demo.legacy.EmbedFuture_Layout",
{
  extend : qx.legacy.application.Gui,

  members :
  {
    main: function()
    {
      this.base(arguments);
      qx.theme.manager.Meta.getInstance().initialize();

      // Create button
      var button1 = new qx.legacy.ui.form.Button("Resize HBox");

      var future = new qx.legacy.ui.embed.Future().set({
        width : "auto",
        height : "100%",
        content : this.getGrid()
      });

      var hbox = new qx.legacy.ui.layout.HorizontalBoxLayout();
      hbox.set({
        top: 10,
        left: 10,
        height: "auto",
        width: "auto",
        backgroundColor: "gray",
        border: "black",
        spacing: 10,
        padding: 5
      });
      hbox.add(button1, future);
      hbox.addToDocument();

      // Add an event listener
      var grow = true;
      button1.addListener("execute", function(e)
      {
        hbox.setHeight(grow ? 300 : "auto");
        grow = !grow;
      }, this);

    },


    getGrid : function() {
      return new qx.ui.control.DateChooser();
    }
  }
});

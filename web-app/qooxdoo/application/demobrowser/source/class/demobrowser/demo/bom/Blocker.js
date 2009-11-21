/* ************************************************************************

   qooxdoo - the new era of web development

   http://qooxdoo.org

   Copyright:
     2004-2009 1&1 Internet AG, Germany, http://www.1und1.de

   License:
     LGPL: http://www.gnu.org/licenses/lgpl.html
     EPL: http://www.eclipse.org/org/documents/epl-v10.php
     See the LICENSE file in the project's top-level directory for details.

   Authors:
     * Alexander Back (aback)

************************************************************************ */

qx.Class.define("demobrowser.demo.bom.Blocker",
{
  extend : qx.application.Native,

  members :
  {
    main : function()
    {
      this.base(arguments);

      var input = qx.bom.Input.create("button", { value: "Block Document for 5s" });
      qx.bom.element.Style.setStyles(input, { position: "absolute",
                                              left: "100px",
                                              top: "100px" });

      var blocker = new qx.bom.Blocker;
      blocker.setBlockerOpacity(0.5);

      qx.event.Registration.addListener(input, "click", function(e){
        blocker.setBlockerColor("red");

        blocker.block();

        qx.event.Timer.once(function(e){
         blocker.unblock();
        }, window, 5000);
      });

      qx.dom.Element.insertEnd(input, document.body);




      var input2 = qx.bom.Input.create("button", { value: "Block Element for 5s" });
      qx.bom.element.Style.setStyles(input2, { position: "absolute",
                                              left: "300px",
                                              top: "100px" });

      var elementToBlock = qx.bom.Element.create("div");
      qx.bom.element.Style.setStyles(elementToBlock, { position: "absolute",
                                                       left: "300px",
                                                       top: "150px",
                                                       width: "300px",
                                                       height: "200px",
                                                       backgroundColor: "orange",
                                                       zIndex: 500 });
      qx.dom.Element.insertBegin(elementToBlock, document.body);

      qx.event.Registration.addListener(input2, "click", function(e){
        blocker.block(elementToBlock);

        qx.event.Timer.once(function(e){
         blocker.unblock();
        }, window, 5000);
      });

      qx.dom.Element.insertEnd(input2, document.body);
    }
  }
});

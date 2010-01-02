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
   * Alexander Steitz (aback)

************************************************************************ */

/* ************************************************************************
#asset(qx/icon/Tango/48/places/folder.png)
#asset(qx/static/blank.gif)
************************************************************************ */


qx.Class.define("qx.test.ui.basic.Image",
{
  extend : qx.test.ui.LayoutTestCase,

  members :
  {
    testSwitchScaling : function()
    {
      this.__image = new qx.ui.basic.Image;
      this.__image.set({ source: "qx/icon/Tango/48/places/folder.png", scale: false });
      this.getRoot().add(this.__image);
      this.flush();

      var tagName = this.__image.getContentElement().getNodeName();
      this.assertTrue(tagName == "div");

      this.__image.setScale(true);
      this.flush();

      var tagNameAfter = this.__image.getContentElement().getNodeName();
      if (qx.bom.element.Decoration.isAlphaImageLoaderEnabled()) {
        this.assertTrue(tagNameAfter == "div");
      } else {
        this.assertTrue(tagNameAfter == "img");
      }
    },

    testSwitchPngToGif : function()
    {
      var image = new qx.ui.basic.Image("qx/icon/Tango/48/places/folder.png");
      this.getRoot().add(image);
      this.flush();


      var tagName = image.getContentElement().getNodeName();
      this.assertTrue(tagName == "div");

      image.setSource("qx/static/blank.gif");
      this.flush();

      var tagNameAfter = image.getContentElement().getNodeName();
      this.assertTrue(tagNameAfter == "div");
    },

    testSwitchGifToPng : function()
    {
      var image = new qx.ui.basic.Image("qx/static/blank.gif");
      image.setScale(true);
      this.getRoot().add(image);
      this.flush();

      var tagName = image.getContentElement().getNodeName();
      this.assertTrue(tagName == "img");

      image.setSource("qx/icon/Tango/48/places/folder.png");
      this.flush();

      var tagNameAfter = image.getContentElement().getNodeName();
      if (qx.bom.element.Decoration.isAlphaImageLoaderEnabled()) {
        this.assertTrue(tagNameAfter == "div");
      } else {
        this.assertTrue(tagNameAfter == "img");
      }
    },

    testSwitchDimension : function()
    {
      var image = new qx.ui.basic.Image("qx/icon/Tango/48/places/folder.png");
      this.getRoot().add(image);

      image.set({ width: 100, height: 100 });
      this.flush();

      var width = image.getContentElement().getStyle("width");
      var height = image.getContentElement().getStyle("height");

      image.setScale(true);
      this.flush();

      this.assertEquals(image.getContentElement().getStyle("width"), width);
      this.assertEquals(image.getContentElement().getStyle("height"), height);
    },

    testSwitchWithDecorator : function()
    {
      var image = new qx.ui.basic.Image("qx/icon/Tango/48/places/folder.png");
      this.getRoot().add(image);

      image.setDecorator("main");
      this.flush();

      var decorator = image.getContainerElement().getChild(2);

      image.setScale(true);
      this.flush();

      this.assertEquals(image.getContainerElement().getChild(2), decorator);
    },

    testSwitchWithSelectable : function()
    {
      var image = new qx.ui.basic.Image("qx/icon/Tango/48/places/folder.png");
      this.getRoot().add(image);

      image.setSelectable(true);
      this.flush();

      var selectable = image.getContentElement().getAttribute("qxselectable");

      image.setScale(true);
      this.flush();

      var selectableAfter = image.getContentElement().getAttribute("qxselectable");

      this.assertEquals(selectable, selectableAfter);
    }
  }
});

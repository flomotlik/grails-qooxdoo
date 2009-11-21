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

qx.Class.define("qx.test.bom.Element",
{
  extend : qx.dev.unit.TestCase,

  members :
  {

    setUp : function()
    {
      var div = document.createElement("div");
      div.id = "el";

      this._el = div;
      document.body.appendChild(div);
    },


    tearDown : function() {
      document.body.removeChild(this._el);
    },


    testCreate : function()
    {
      var el = qx.bom.Element.create("div", {name: "juhu"}, window);
      this.assertElement(el);
    },

    testEmpty : function()
    {
      this._el.innerHTML = "Juhu";
      qx.bom.Element.empty(this._el);
      this.assertEquals("", this._el.innerHTML);
    },

    testAddListener : function()
    {
      var listener = function() {};
      qx.bom.Element.addListener(this._el, "click", listener, this, false);
      this.assertTrue(qx.bom.Element.hasListener(this._el, "click", false));
      qx.bom.Element.removeListener(this._el, "click", listener, this, false);
      this.assertFalse(qx.bom.Element.hasListener(this._el, "click", false));
    },


    testRemoveListenerById : function()
    {
      var id = qx.bom.Element.addListener(this._el, "click", function() {}, this, false);
      this.assertTrue(qx.bom.Element.hasListener(this._el, "click", false));
      qx.bom.Element.removeListenerById(this._el, id);
      this.assertFalse(qx.bom.Element.hasListener(this._el, "click", false));
    },


    testFocus : function()
    {
      qx.bom.Element.focus(this._el);
      this.warn("needs better test!");
    },

    testBlur : function()
    {
      qx.bom.Element.blur(this._el);
      this.warn("needs better test!");
    },

    testActivate : function()
    {
      qx.bom.Element.activate(this._el);
      this.warn("needs better test!");
    },

    testDeactivate : function()
    {
      qx.bom.Element.deactivate(this._el);
      this.warn("needs better test!");
    },

    testCapture : function()
    {
      qx.bom.Element.capture(this._el);
      this.warn("needs better test!");
    },

    testReleaseCapture : function()
    {
      qx.bom.Element.releaseCapture(this._el);
      this.warn("needs better test!");
    },

    testGetCommonParent : function()
    {
      if (qx.core.Variant.isSet("qx.client", "opera")) {
        this.assertNull(qx.dom.Hierarchy.getCommonParent(this._el, document));
      } else if (qx.core.Variant.isSet("qx.client", "mshtml")) {
        this.assertIdentical(document.body, qx.dom.Hierarchy.getCommonParent(this._el, document.body));
      } else {
        this.assertIdentical(document, qx.dom.Hierarchy.getCommonParent(this._el, document));
      }
    }

  }

});

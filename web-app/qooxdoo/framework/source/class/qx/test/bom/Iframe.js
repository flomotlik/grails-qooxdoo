/* ************************************************************************

   qooxdoo - the new era of web development

   http://qooxdoo.org

   Copyright:
     2007-2009 1&1 Internet AG, Germany, http://www.1und1.de

   License:
     LGPL: http://www.gnu.org/licenses/lgpl.html
     EPL: http://www.eclipse.org/org/documents/epl-v10.php
     See the LICENSE file in the project's top-level directory for details.

   Authors:
     * Christian Schmidt (chris_schmidt)

************************************************************************ */

qx.Class.define("qx.test.bom.Iframe",
{
  extend : qx.dev.unit.TestCase,

  members :
  {
    __iframe: null,

    tearDown : function() {
      this.__iframe = null;
    },

    testCreate : function()
    {
      this.__iframe = qx.bom.Iframe.create();
      this.__testAttributes(qx.bom.Iframe.DEFAULT_ATTRIBUTES);
    },

    testCreateWithAttributes : function()
    {
      var attributes = qx.lang.Object.clone(qx.bom.Iframe.DEFAULT_ATTRIBUTES);
      attributes.allowTransparency = false;

      this.__iframe = qx.bom.Iframe.create(attributes);

      this.__testAttributes(attributes);
    },

    __testAttributes : function(attributes)
    {
      // do not test 'onload' on IE, this returns always 'undefined'
      // http://tobielangel.com/2007/1/11/attribute-nightmare-in-ie/
      if(qx.bom.client.Engine.MSHTML) {
        delete attributes["onload"];
      }

      for(var key in attributes) {
        this.assertEquals(attributes[key],
          qx.bom.element.Attribute.get(this.__iframe, key),
          "Wrong value on attribute '" + key + "'");
      }
    }
  }
});

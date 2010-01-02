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
     * Alexander Steitz (aback)

************************************************************************ */

/*
#use(qx.event.handler.ElementResize)
*/


/**
 * This classes could be used to insert qooxdoo islands into existing
 * web pages. You can use the isles to place any qooxdoo powered widgets
 * inside a layout made using traditional HTML markup and CSS.
 *
 * The size of the widget in each dimension can either be determined by the
 * size hint of the inline's children or by the size of the root DOM element. If
 * <code>dynamicX</code>/<code>dynamicY</code> is true the width/height of the DOM
 * element is used.
 *
 * This class uses {@link qx.ui.layout.Basic} as default layout. The layout
 * can be changed using the {@link #setLayout} method.
 *
 * To position popups and tooltips please have a look at {@link qx.ui.root.Page}.
 */
qx.Class.define("qx.ui.root.Inline",
{
  extend : qx.ui.root.Abstract,
  include : [qx.ui.core.MLayoutHandling],


  /*
  *****************************************************************************
     CONSTRUCTOR
  *****************************************************************************
  */

  /**
   * @param el {Element} DOM element to use as isle for qooxdoo content. Please
   *    note that existing content gets removed on the first layout flush.
   * @param dynamicX {Boolean} If <code>true</code> the widget's width is
   *    determined by the DOM element's width. Otherwise the children's size hint
   *    is used.
   * @param dynamicY {Boolean} If <code>true</code> the widget's height is
   *    determined by the DOM element's height. Otherwise the children's size hint
   *    is used.
   */
  construct : function(el, dynamicX, dynamicY)
  {
    // Temporary storage of element to use
    this.__elem = el;

    // Avoid any problems with dynamic resizing
    el.style.overflow = "hidden";

    // Avoid any problems with broken layout
    el.style.textAlign = "left";

    this.__dynX = dynamicX || false;
    this.__dynY = dynamicY || false;
    this.__initDynamicMode();

    this.base(arguments);

    // Use static layout
    this._setLayout(new qx.ui.layout.Basic());

    // Directly schedule layout for root element
    qx.ui.core.queue.Layout.add(this);

    // Register as root
    qx.ui.core.FocusHandler.getInstance().connectTo(this);
  },



  /*
  *****************************************************************************
     MEMBERS
  *****************************************************************************
  */

  members :
  {
    __dynX : false,
    __dynY : false,
    __elem : null,


    /**
     * Performs several checks for dynamic mode and adds the "resize" listener
     */
    __initDynamicMode : function()
    {
      if (this.__dynX || this.__dynY)
      {
        // Check the DOM element for a usable width and height
        var elementDimensions = qx.bom.element.Dimension.getSize(this.__elem);

        if (this.__dynX && elementDimensions.width < 1) {
          throw new Error("The root element " + this.__elem + " of " + this +
            " needs a width when its width size should be used!");
        }

        if (this.__dynY)
        {
          if (elementDimensions.height < 1) {
            throw new Error("The root element " + this.__elem + " of " + this +
            " needs a height when its height size should be used!");
          }

          // check for implicit height. Set the height explicit to prevent that
          // the element grows indefinetely
          if (elementDimensions.height >= 1 &&
              qx.bom.element.Style.get(this.__elem, "height", 3) == "") {
            qx.bom.element.Style.set(this.__elem, "height", elementDimensions.height + "px");
          }
        }

        qx.event.Registration.addListener(this.__elem, "resize", this._onResize, this);
      }
    },


    // overridden
    _createContainerElement : function()
    {
      var el = this.__elem;

      if (this.__dynX || this.__dynY)
      {
        var rootEl = document.createElement("div");
        el.appendChild(rootEl);

        // If any of the ancestor elements has a position "relative" it is
        // necessary for IE6 to apply this style also to the root element to
        // avoid any problems when resizing the browser window (see Bug #2035)
        if (qx.core.Variant.isSet("qx.client", "mshtml") &&
            qx.bom.client.Engine.VERSION == 6)
        {
          var bodyElement = qx.dom.Node.getBodyElement(el);
          var ancestorElement;
          var position;
          var isPositionRelative = false;

          var ancestors = qx.dom.Hierarchy.getAncestors(el);
          for (var i=0, j=ancestors.length; i<j; i++)
          {
            ancestorElement = ancestors[i];
            if (ancestorElement != bodyElement)
            {
              position = qx.bom.element.Style.get(ancestorElement, "position");
              if (position == "relative")
              {
                isPositionRelative = true;
                break;
              }
            } else {
              break;
            }
          }

          if (isPositionRelative) {
            el.style.position = "relative";
          }
        }
      } else {
        rootEl = el;
      }

      var root = new qx.html.Root(rootEl);

      // Make relative
      rootEl.style.position = "relative";

      // Store "weak" reference to the widget in the DOM element.
      root.setAttribute("$$widget", this.toHashCode());

      return root;
    },


    /**
     * Listener for the element's resize event
     *
     * @param e {qx.event.type.Event} Event object
     */
    _onResize : function(e)
    {
      var data = e.getData();
      if (
        (data.oldWidth !== data.width) && this.__dynX ||
        (data.oldHeight !== data.height) && this.__dynY
      ) {
        qx.ui.core.queue.Layout.add(this);
      }
    },


    // overridden
    _computeSizeHint : function()
    {
      var dynX = this.__dynX;
      var dynY = this.__dynY;

      if (!dynX || !dynY) {
        var hint = this.base(arguments);
      } else {
        hint = {};
      }

      var Dimension = qx.bom.element.Dimension;

      if (dynX)
      {
        var width = Dimension.getContentWidth(this.__elem);
        hint.width = width;
        hint.minWidth = width;
        hint.maxWidth = width;
      }

      if (dynY)
      {
        var height = Dimension.getContentHeight(this.__elem);
        hint.height = height;
        hint.minHeight = height;
        hint.maxHeight = height;
      }

      return hint;
    }
  },





  /*
  *****************************************************************************
     DEFER
  *****************************************************************************
  */

  defer : function(statics, members) {
    qx.ui.core.MLayoutHandling.remap(members);
  },


  /*
  *****************************************************************************
     DESTRUCT
  *****************************************************************************
  */

  destruct : function()
  {
    qx.event.Registration.removeListener(this.__elem, "resize", this._onResize, this);
    this.__elem = null;
  }
});

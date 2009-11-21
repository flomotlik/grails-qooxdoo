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
   * Fabian Jakobs (fjakobs)

************************************************************************ */

/* ************************************************************************

#asset(qx/icon/${qx.icontheme}/16/places/*)
#asset(qx/icon/${qx.icontheme}/22/places/*)
#asset(qx/icon/${qx.icontheme}/32/places/*)
#asset(qx/icon/${qx.icontheme}/48/places/*)
#asset(qx/icon/${qx.icontheme}/64/places/*)
#asset(qx/icon/${qx.icontheme}/128/places/*)

************************************************************************ */

qx.Class.define("demobrowser.demo.virtual.Gallery",
{
  extend : qx.application.Standalone,



  /*
  *****************************************************************************
     MEMBERS
  *****************************************************************************
  */

  members :
  {
    main : function()
    {
      this.base(arguments);

      // widget window
      var widgetWin = new demo.WidgetGallery("Gallery (widgets)");

      // html window
      var htmlWin = new demo.HtmlGallery("Gallery (HTML - divs)");
      htmlWin.moveTo(400, 50);
    }
  }
});

/*
*****************************************************************************
   ABSTRACT GALLERY
*****************************************************************************
*/


qx.Class.define("demo.AbstractGallery",
{
  extend : qx.ui.window.Window,
  type : "abstract",

  construct : function(title)
  {
    this.base(arguments, title);

    this.set({
      contentPadding: 0,
      showClose: false,
      showMinimize: false,
      width: 300,
      height: 400
    });
    this.setLayout(new qx.ui.layout.Grow());
    this.moveTo(30, 50);
    this.open();

    this.itemHeight = 60;
    this.itemWidth = 60;
    this.itemCount = 431;
    this.itemPerLine = 1;
    this.items = this._generateItems(this.itemCount);

    var scroller = this._createScroller();
    scroller.set({
      scrollbarX: "off",
      scrollbarY: "auto"
    });
    scroller.getPane().addListener("resize", this._onPaneResize, this);
    this.add(scroller);

    this.manager = new qx.ui.virtual.selection.CellRectangle(scroller.getPane(), this).set({
      mode: "multi",
      drag: true
    });
    this.manager.attachMouseEvents();
    this.manager.attachKeyEvents(scroller);
  },


  members :
  {
    getItemData : function(row, column) {
      return this.items[row * this.itemPerLine + column];
    },

    _createScroller : function() {
      // abstract method
    },

    isItemSelectable : function(item) {
      return !!this.getItemData(item.row, item.column)
    },

    styleSelectable : function(item, type, wasAdded) {
      // abstract method
    },

    _onPaneResize : function(e)
    {
      var pane = e.getTarget();
      var width = e.getData().width;

      var colCount = Math.floor(width/this.itemWidth);
      if (colCount == this.itemsPerLine) {
        return;
      }
      this.itemPerLine = colCount;
      var rowCount = Math.ceil(this.itemCount/colCount);

      pane.getColumnConfig().setItemCount(colCount);
      pane.getRowConfig().setItemCount(rowCount);
    },


    _generateItems : function(count)
    {
      var items = [];
      var iconImages = [
        "folder.png",
        "user-trash.png",
        "network-server.png",
        "network-workgroup.png",
        "user-desktop.png"
      ];

      var aliasManager = qx.util.AliasManager.getInstance();
      var resourceManager = qx.util.ResourceManager.getInstance();

      for (var i=0; i<count; i++)
      {
        var icon = "icon/32/places/" + iconImages[Math.floor(Math.random() * iconImages.length)];
        resolved = aliasManager.resolve(icon);
        url = resourceManager.toUri(resolved);

        items[i] = {
          label: "Icon #" + (i+1),
          icon: icon,
          resolvedIcon: url
        };
      }

      return items;
    }
  },

  destruct : function()
  {
    this._disposeFields("items");
    this._disposeObjects("manager");
  }
});

/*
*****************************************************************************
   WIDGET GALLERY
*****************************************************************************
*/

qx.Class.define("gallery.GalleryCell",
{
  extend : qx.ui.virtual.cell.AbstractWidget,

  members :
  {
    _createWidget : function()
    {
      var widget = new qx.ui.basic.Atom().set({
        iconPosition: "top"
      });
      widget.getChildControl("label").set({
        padding : [0, 4]
      });
      widget.getChildControl("icon").set({
        padding : 4
      });
      return widget;
    },


    updateData : function(widget, data)
    {
      widget.set({
        icon: data.icon,
        label: data.label
      });
    },


    updateStates : function(widget, states)
    {
      var label = widget.getChildControl("label");
      var icon = widget.getChildControl("icon");

      if (states.selected)
      {
        label.setDecorator("selected");
        label.setTextColor("text-selected");
        icon.setDecorator("group");
      }
      else
      {
        label.resetDecorator();
        label.resetTextColor();
        icon.resetDecorator();
      }
    }
  }
});


qx.Class.define("demo.WidgetGallery",
{
  extend : demo.AbstractGallery,

  construct : function(title)
  {
    this.base(arguments, title);
    this.__cell = new gallery.GalleryCell();
  },

  members :
  {
    _createScroller : function()
    {
      var scroller = new qx.ui.virtual.core.Scroller(
        1, this.itemPerLine,
        this.itemHeight, this.itemWidth
      );
      this.layer = new qx.ui.virtual.layer.WidgetCell(this);
      scroller.getPane().addLayer(this.layer);

      var prefetch = new qx.ui.virtual.behavior.Prefetch(
        scroller,
        0, 0, 0, 0,
        200, 300, 600, 800
      ).set({
        interval: 500
      });

      return scroller;
    },


    styleSelectable : function(item, type, wasAdded)
    {
      if (type !== "selected") {
        return;
      }

      var widgets = this.layer.getChildren();
      for (var i=0; i<widgets.length; i++)
      {
        var widget = widgets[i];
        var cell = widget.getUserData("cell");

        if (item.row !== cell.row || item.column !== cell.column) {
          continue;
        }

        if (wasAdded) {
          this.__cell.updateStates(widget, {selected: 1});
        } else {
          this.__cell.updateStates(widget, {});
        }
      }
    },


    getCellWidget : function(row, column)
    {
      var itemData = this.getItemData(row, column);

      if (!itemData) {
        return null;
      }

      var cell = {row: row, column: column};
      var states = {};
      if (this.manager.isItemSelected(cell)) {
        states.selected = true;
      }

      var widget = this.__cell.getCellWidget(itemData, states);
      widget.setUserData("cell", cell);

      return widget;
    },

    poolCellWidget : function(widget) {
      this.__cell.pool(widget);
    }
  },

  /*
   *****************************************************************************
      DESTRUCT
   *****************************************************************************
   */

  destruct : function()
  {
    this._disposeObjects("__cell", "layer");
  }
});

/*
*****************************************************************************
   HTML GALLERY
*****************************************************************************
*/


qx.Class.define("demo.HtmlGallery",
{
  extend : demo.AbstractGallery,

  construct : function(title)
  {
    this.base(arguments, title);

    var fontStyles = qx.theme.manager.Font.getInstance().resolve("default").getStyles();
    this._fontCss = qx.bom.element.Style.compile(fontStyles);
  },

  members :
  {
    _createScroller : function()
    {
      var scroller = new qx.ui.virtual.core.Scroller(
        1, this.itemPerLine,
        this.itemHeight, this.itemWidth
      );
      this.layer = new qx.ui.virtual.layer.HtmlCell(this);
      scroller.getPane().addLayer(this.layer);

      var lines = new qx.ui.virtual.layer.GridLines("horizontal", "#f3f3f3");
      scroller.getPane().addLayer(lines);

      var lines = new qx.ui.virtual.layer.GridLines("vertical", "#f3f3f3");
      scroller.getPane().addLayer(lines);

      return scroller;
    },

    _onPaneResize : function(e)
    {
      this.base(arguments, e);
      this.manager.clearSelection();
    },

    styleSelectable : function(item, type, wasAdded) {
      this.layer.updateLayerData();
    },

    getCellProperties : function(row, column)
    {
      var itemData = this.getItemData(row, column);

      if (!itemData) {
        return "";
      }

      var isSelected = this.manager.isItemSelected({row: row, column: column});
      var color = isSelected ? "color: white; background-color: #00398D;" : "";

      return {
        style: [
          "position: absolute;",
          "text-align: center;",
          this._fontCss,
          color
        ].join(""),

        content: [
          "<img src='", itemData.resolvedIcon, "'></img>",
          "<br>",
          itemData.label
        ].join("")
      };
    }
  },

  /*
   *****************************************************************************
      DESTRUCT
   *****************************************************************************
   */

  destruct : function()
  {
    this._disposeObjects("layer");
  }
});

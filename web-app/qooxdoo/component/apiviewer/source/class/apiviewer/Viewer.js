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
     * Til Schneider (til132)
     * Sebastian Werner (wpbasti)
     * Andreas Ecker (ecker)
     * Fabian Jakobs (fjakobs)
     * Jonathan Weiß (jonathan_rass)

************************************************************************ */

/* ************************************************************************

#asset(qx/icon/Tango/22/apps/utilities-dictionary.png)
#asset(qx/icon/Tango/22/actions/edit-find.png)
#asset(qx/icon/Tango/22/apps/utilities-help.png)
#asset(qx/icon/Tango/22/apps/utilities-graphics-viewer.png)

************************************************************************ */

/**
 * The GUI definition of the API viewer.
 *
 * The connections between the GUI components are established in
 * the {@link Controller}.
 */
qx.Class.define("apiviewer.Viewer",
{
  extend : qx.ui.container.Composite,




  /*
  *****************************************************************************
     CONSTRUCTOR
  *****************************************************************************
  */
  construct : function()
  {
    this.base(arguments);

    var layout = new qx.ui.layout.VBox;
    layout.setSeparator("separator-vertical");

    this.setLayout(layout);

    this.add(this.__createHeader());

    this.add(this.__createToolbar());

    var tree = new apiviewer.ui.PackageTree();
    tree.setId("tree");

    this._searchView = new apiviewer.ui.SearchView();

    var legend = new apiviewer.ui.LegendView();
    var toggleView = this.__createToggleView(tree, this._searchView, legend);
    var mainFrame = this.__createDetailFrame();

    this.add(this.__createSplitPane(toggleView, mainFrame), {flex:1});
  },


  /*
  *****************************************************************************
     MEMBERS
  *****************************************************************************
  */

  members :
  {

    __toggleGroup : null,

    /**
     * Creates the button view widget on the left
     *
     * @param treeWidget {qx.ui.core.Widget} The widget for the "tree" pane
     * @param infoWidget {qx.ui.core.Widget} The widget for the "legend" pane
     * @return {qx.ui.tabview.TabView} The configured button view widget
     */
    __createToggleView : function(treeWidget, searchWidget, infoWidget)
    {
      var stack = new qx.ui.container.Stack;
      stack.setAppearance("toggleview");
      stack.add(treeWidget);
      stack.add(searchWidget);
      stack.add(infoWidget);

      this.__toggleGroup.addListener("changeSelection", function(e)
      {
        var selected = e.getData()[0];
        var show = selected != null ? selected.getUserData("value") : null;
        switch(show)
        {
          case "packages":
            stack.setSelection([treeWidget]);
            stack.show();
            break;

          case "search":
            stack.setSelection([searchWidget]);
            stack.show();

            /**
             * Delay focussing the text field in case it's html element
             * has no been added to the DOM yet.
             */
            qx.lang.Function.delay(this._onShowSearch, 100, this);
            break;

          case "legend":
            stack.setSelection([infoWidget]);
            stack.show();
            break;

          default:
            stack.exclude();
        }
      },
      this);

      return stack;
    },


   /**
     * Creates the tool bar
     *
     * @return {qx.ui.toolbar.ToolBar} The configured tool bar
     */
    __createToolbar : function()
    {
      var toolbar = new qx.ui.toolbar.ToolBar;

      var part = new qx.ui.toolbar.Part;
      toolbar.add(part);

      var showPackages = new qx.ui.toolbar.RadioButton(this.tr("Content"), "icon/22/apps/utilities-dictionary.png");
      showPackages.setUserData("value", "packages");
      showPackages.setValue(true);
      showPackages.setToolTipText(this.tr("Show/hide the packages."));
      part.add(showPackages);

      var showSearch = new qx.ui.toolbar.RadioButton(this.tr("Search"), "icon/22/actions/edit-find.png");
      showSearch.setUserData("value", "search");
      showSearch.setToolTipText(this.tr("Search for packages, classes and members."));
      part.add(showSearch);

      var showLegend = new qx.ui.toolbar.RadioButton(this.tr("Legend"), "icon/22/apps/utilities-help.png");
      showLegend.setUserData("value", "legend");
      showLegend.setToolTipText(this.tr("Show/hide the legend."));
      part.add(showLegend);

      var group = new qx.ui.form.RadioGroup(showPackages, showSearch, showLegend);
      group.setAllowEmptySelection(true);
      this.__toggleGroup = group;



      toolbar.addSpacer();

      var part = new qx.ui.toolbar.Part;
      toolbar.add(part);

      var expandBtn = new qx.ui.toolbar.RadioButton(this.tr("Properties"), "apiviewer/image/property18.gif");
      expandBtn.setId("btn_expand");
      expandBtn.setValue(true);
      expandBtn.setToolTipText(this.tr("Show/hide all generated property methods."));
      part.add(expandBtn);

      var inheritBtn = new qx.ui.toolbar.RadioButton(this.tr("Inherited"), "apiviewer/image/method_public_inherited18.gif");
      inheritBtn.setId("btn_inherited");
      inheritBtn.setToolTipText(this.tr("Show/hide inherited members of the current class."));
      part.add(inheritBtn);

      var protectedBtn = new qx.ui.toolbar.RadioButton(this.tr("Protected"), "apiviewer/image/method_protected18.gif");
      protectedBtn.setId("btn_protected");
      protectedBtn.setToolTipText(this.tr("Show/hide protected members of the current class."));
      part.add(protectedBtn);

      var privateBtn = new qx.ui.toolbar.RadioButton(this.tr("Private"), "apiviewer/image/method_private18.gif");
      privateBtn.setId("btn_private");
      privateBtn.setToolTipText(this.tr("Show/hide private members of the current class."));
      part.add(privateBtn);

      return toolbar;
    },


    /**
     * Create the detail Frame and adds the Class-, Package and Loader-views to it.
     *
     * @return {qx.ui.layout.CanvasLayout} The detail Frame
     */
    __createDetailFrame : function()
    {
      var detailFrame = new qx.ui.container.Composite(new qx.ui.layout.Canvas);

      detailFrame.getContentElement().setAttribute("id", "content");

      this._detailLoader = new qx.ui.embed.Html('<div style="padding:10px;"><h1><small>please wait</small>Loading data...</h1></div>');
      this._detailLoader.getContentElement().setAttribute("id", "SplashScreen");
      this._detailLoader.setAppearance("detailviewer");

      this._detailLoader.setId("detail_loader");
      detailFrame.add(this._detailLoader, {edge : 0});

      this._classViewer = new apiviewer.ui.ClassViewer;
      this._classViewer.setId("class_viewer");
      detailFrame.add(this._classViewer, {edge : 0});

      this._packageViewer = new apiviewer.ui.PackageViewer;
      this._packageViewer.setId("package_viewer");
      detailFrame.add(this._packageViewer, {edge : 0});

      return detailFrame;
    },


    /**
     * Creates the main frame at the right
     *
     * @param toolbar {qx.ui.toolbar.ToolBar} Toolbar of the main frame
     * @param detailFrame {qx.ui.core.Widget} the detail widget
     * @return {qx.ui.layout.VBox} the main frame
     */
    __createMainFrame : function(toolbar, detailFrame)
    {
      var mainFrame = new qx.ui.container.Composite;
      mainFrame.setLayout(new qx.ui.layout.VBox);

      mainFrame.add(toolbar);
      mainFrame.add(detailFrame, {flex:1});

      return mainFrame;
    },


    /**
     * Creates the vertical splitter and populates the split panes
     *
     * @param leftWidget {qx.ui.core.Widget} the widget on the left of the splitter
     * @param rightWidget {qx.ui.core.Widget} the widget on the right of the splitter
     * @return {qx.ui.splitpane.SplitPane} the split pane
     */
    __createSplitPane : function(leftWidget, rightWidget)
    {
      var mainSplitPane = new qx.ui.splitpane.Pane("horizontal");
      mainSplitPane.add(leftWidget, 0);
      mainSplitPane.add(rightWidget, 1);
      return mainSplitPane;
    },

    /**
     * Creates the application header.
     */
    __createHeader : function()
    {
      var layout = new qx.ui.layout.HBox();
      var header = new qx.ui.container.Composite(layout);
      header.setAppearance("app-header");

      var title = new qx.ui.basic.Label("API Documentation");
      var version = new qx.ui.basic.Label("qooxdoo " + qx.core.Setting.get("qx.version"));

      header.add(title);
      header.add(new qx.ui.core.Spacer, {flex : 1});
      header.add(version);

      return header;
    },

    /**
     * Focusses the search view's text field.
     */
    _onShowSearch : function() {
      this._searchView.sinput.focus();
    }
  },




  /*
  *****************************************************************************
     SETTINGS
  *****************************************************************************
  */

  settings :
  {
    "apiviewer.title"            : "qooxdoo",
    "apiviewer.initialTreeDepth" : 1
  },




  /*
  *****************************************************************************
     DESTRUCTOR
  *****************************************************************************
  */

  destruct : function()
  {
    this._classTreeNodeHash = this.__toggleGroup = null;
    this._disposeObjects("_tree", "_detailLoader", "_classViewer", "_packageViewer", "_searchView");
  }
});

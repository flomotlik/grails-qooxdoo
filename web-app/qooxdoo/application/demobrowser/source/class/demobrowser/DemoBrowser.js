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
     * Thomas Herchenroeder (thron7)
     * Fabian Jakobs (fjakobs)
     * Martin Wittemann (martinwittemann)
     * Jonathan Weiß (jonathan_rass)

************************************************************************ */

/* ************************************************************************

#asset(qx/icon/Tango/22/actions/media-playback-start.png)
#asset(qx/icon/Tango/22/actions/media-playback-stop.png)
#asset(qx/icon/Tango/22/actions/go-previous.png)
#asset(qx/icon/Tango/22/actions/go-next.png)
#asset(qx/icon/Tango/22/actions/edit-redo.png)
#asset(qx/icon/Tango/22/actions/edit-clear.png)

#asset(qx/icon/Tango/22/apps/utilities-color-chooser.png)
#asset(qx/icon/Tango/22/apps/office-spreadsheet.png)

#asset(qx/icon/Tango/22/apps/utilities-log-viewer.png)
#asset(qx/icon/Tango/22/apps/internet-web-browser.png)
#asset(qx/icon/Tango/22/mimetypes/executable.png)

************************************************************************ */

/**
 * The GUI definition of the qooxdoo unit test runner.
 */
qx.Class.define("demobrowser.DemoBrowser",
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

    // Configure layout
    var layout = new qx.ui.layout.VBox;
    layout.setSeparator("separator-vertical");
    this.setLayout(layout);

    // Header
    this.add(this.__createHeader());

    // Data
    this.widgets = {};
    this.tests = {};
    this.__currentTheme = "qx.theme.Modern";


    // Commands & Menu Bar
    this.__makeCommands();
    this.add(this.__makeToolBar());


    // Main Split Pane
    var mainsplit = new qx.ui.splitpane.Pane("horizontal");
    this.mainsplit = mainsplit;

    var infosplit = new qx.ui.splitpane.Pane("horizontal");
    infosplit.setDecorator(null);
    this.infosplit = infosplit;

    this.add(mainsplit, {flex : 1});

    mainsplit.add(this.__makeTree(), 0);
    mainsplit.add(infosplit, 1);

    var demoView = this.__makeDemoView();
    infosplit.add(demoView, 2);


    var htmlView = this.__makeHtmlCodeView();
    var jsView = this.__makeJsCodeView();
    var logView = this.__makeLogView();

    var stack = new qx.ui.container.Stack;
    stack.setDecorator("main");
    stack.add(htmlView);
    stack.add(jsView);
    stack.add(logView);

    this.viewGroup.addListener("changeSelection", function(e)
    {
      var selected = e.getData()[0];
      var show = selected != null ? selected.getUserData("value") : "";
      switch(show)
      {
        case "html":
          this.setSelection([htmlView]);
          stack.show();
          break;

        case "js":
          this.setSelection([jsView]);
          stack.show();
          break;

        case "log":
          this.setSelection([logView]);
          stack.show();
          break;

        default:
          this.resetSelection();
          stack.exclude();
      }
    }, stack);

    infosplit.add(stack, 1);
    stack.resetSelection();
    stack.exclude();



    // Back button and bookmark support
    this._history = qx.bom.History.getInstance();
    this._history.addListener("request", function(e)
    {
      var newSample = e.getData().replace("~", "/");

      if (this._currentSample != newSample) {
        this.setCurrentSample(newSample);
      }
    },
    this);


    this.__logSync = new qx.event.Timer(250);
    this.__logSync.addListener("interval", this.__onLogInterval, this);
    this.__logSync.start();
  },


  /*
   * ****************************************************************************
   * PROPERTIES
   * ****************************************************************************
   */

  properties : {
    playDemos : {
      check : [ "all", "category", "current" ],
      init :"current"
    }
  },


  /*
  *****************************************************************************
     MEMBERS
  *****************************************************************************
  */

  members :
  {
    // ------------------------------------------------------------------------
    //   CONSTRUCTOR HELPERS
    // ------------------------------------------------------------------------

    __iframe : null,
    __currentTheme : null,
    __logSync : null,
    __logDone : null,

    __makeCommands : function()
    {
      this._cmdObjectSummary = new qx.event.Command("Ctrl+O");
      this._cmdObjectSummary.addListener("execute", this.__getObjectSummary, this);

      this._cmdRunSample = new qx.event.Command("F5");
      this._cmdRunSample.addListener("execute", this.runSample, this);

      this._cmdPrevSample = new qx.event.Command("Ctrl+Left");
      this._cmdPrevSample.addListener("execute", this.playPrev, this);

      this._cmdNextSample = new qx.event.Command("Ctrl+Right");
      this._cmdNextSample.addListener("execute", this.playNext, this);

      this._cmdSampleInOwnWindow = new qx.event.Command("Ctrl+N");
      this._cmdSampleInOwnWindow.addListener("execute", this.__openWindow, this);

      this._cmdDisposeSample = new qx.event.Command("Ctrl+D");
      this._cmdDisposeSample.addListener("execute", this.__disposeSample, this);

      this._cmdNamespacePollution = new qx.event.Command("Ctrl+P");
      this._cmdNamespacePollution.addListener("execute", this.__showPollution, this);
    },



    /**
     * TODOC
     *
     * @lint ignoreDeprecated(alert)
     */
    __getObjectSummary : function()
    {
      var cw = this.__iframe.getWindow();
      if (cw && cw.qx) {
        alert(cw.qx.dev.ObjectSummary.getInfo());
      } else {
        alert("Unable to access namespace. Maybe no demo loaded.");
      }
    },

    __openWindow : function()
    {
      var sampUrl = this.__iframe.getWindow().location.href;
      window.open(sampUrl, "_blank");
    },

    /**
     * TODOC
     * @param e {Event} TODOC
     * @lint ignoreDeprecated(alert)
     */
    __disposeSample : function(e)
    {
      var cw = this.__iframe.getWindow();
      if (cw && cw.qx)
      {
        cw.qx.core.ObjectRegistry.shutdown();
        alert("Done!");
      }
      else
      {
        alert("Unable to access application.");
      }
    },

    /**
     * TODOC
     * @param e {Event} TODOC
     * @lint ignoreDeprecated(alert)
     */
    __showPollution : function(e)
    {
      var cw = this.__iframe.getWindow();
      if (cw && cw.qx) {
        alert(cw.qx.dev.Pollution.getInfo());
      } else {
        alert("Unable to access application.");
      }
    },

    __makeToolBar : function()
    {
      var bar = new qx.ui.toolbar.ToolBar();



      // NAVIGATION BUTTONS
      // -----------------------------------------------------

      this._navPart = new qx.ui.toolbar.Part();
      bar.add(this._navPart);

      // -- run button
      this._runbutton = new qx.ui.toolbar.Button(this.tr("Run"), "icon/22/actions/media-playback-start.png");
      this._runbutton.addListener("execute", this.runSample, this);
      this._runbutton.setToolTipText("Run the selected demo(s)");
      this._navPart.add(this._runbutton);

      // -- stop button
      this._stopbutton = new qx.ui.toolbar.Button(this.tr("Stop"),
          "icon/22/actions/media-playback-stop.png");
      this._stopbutton.addListener("execute", this.stopSample, this);
      this._stopbutton.setToolTipText("Stop playback after current demo");
      this._navPart.add(this._stopbutton);
      this._stopbutton.setVisibility("excluded");

      // -- previous navigation
      var prevbutt = new qx.ui.toolbar.Button(this.tr("Previous"), "icon/22/actions/go-previous.png");
      prevbutt.addListener("execute", this.playPrev, this);
      prevbutt.setToolTipText("Run previous demo");
      this._navPart.add(prevbutt);

      // -- next navigation
      var nextbutt = new qx.ui.toolbar.Button(this.tr("Next"), "icon/22/actions/go-next.png");
      nextbutt.addListener("execute", this.playNext, this);
      nextbutt.setToolTipText("Run next demo");
      this._navPart.add(nextbutt);

      // -- spin-out sample
      var sobutt = new qx.ui.toolbar.Button(this.tr("Own Window"), "icon/22/actions/edit-redo.png");
      sobutt.addListener("execute", this.__openWindow, this);
      sobutt.setToolTipText("Open demo in new window");
      this._navPart.add(sobutt);



      // THEME MENU
      // -----------------------------------------------------

      var menuPart = new qx.ui.toolbar.Part;
      bar.add(menuPart);

      var themeMenu = new qx.ui.menu.Menu;

      var t1 = new qx.ui.menu.RadioButton("Modern Theme");
      var t2 = new qx.ui.menu.RadioButton("Classic Theme");

      t1.setUserData("value", "qx.theme.Modern");
      t1.setValue(true);
      t2.setUserData("value", "qx.theme.Classic");

      var group = new qx.ui.form.RadioGroup(t1, t2);
      group.addListener("changeSelection", this.__onChangeTheme, this);

      themeMenu.add(t1);
      themeMenu.add(t2);

      var themeButton = new qx.ui.toolbar.MenuButton(this.tr("Theme"), "icon/22/apps/utilities-color-chooser.png", themeMenu);
      themeButton.setToolTipText("Choose theme");
      menuPart.add(themeButton);



      // DEBUG MENU
      // -----------------------------------------------------

      var menu = new qx.ui.menu.Menu;

      var summaryBtn = new qx.ui.menu.Button(this.tr("Object Summary"));
      summaryBtn.setCommand(this._cmdObjectSummary);
      menu.add(summaryBtn);

      var namespaceBtn = new qx.ui.menu.Button(this.tr("Global Namespace Pollution"));
      namespaceBtn.setCommand(this._cmdNamespacePollution);
      menu.add(namespaceBtn);

      var disposeBtn = new qx.ui.menu.Button(this.tr("Dispose Demo"));
      disposeBtn.setCommand(this._cmdDisposeSample);
      menu.add(disposeBtn);

      var debugButton = new qx.ui.toolbar.MenuButton(this.tr("Debug"), "icon/22/apps/office-spreadsheet.png", menu);
      debugButton.setToolTipText("Debugging options");
      menuPart.add(debugButton);



      // VIEWS
      // -----------------------------------------------------

      var viewPart = new qx.ui.toolbar.Part;
      bar.addSpacer();
      bar.add(viewPart);

      var htmlView = new qx.ui.toolbar.RadioButton("HTML Code", "icon/22/apps/internet-web-browser.png");
      htmlView.setToolTipText("Display HTML source");
      var jsView = new qx.ui.toolbar.RadioButton("JS Code", "icon/22/mimetypes/executable.png");
      jsView.setToolTipText("Display JavaScript source");
      var logView = new qx.ui.toolbar.RadioButton("Log File", "icon/22/apps/utilities-log-viewer.png");
      logView.setToolTipText("Display log file");

      htmlView.setUserData("value", "html");
      jsView.setUserData("value", "js");
      logView.setUserData("value", "log");

      viewPart.add(htmlView);
      viewPart.add(jsView);
      viewPart.add(logView);

      var viewGroup = this.viewGroup = new qx.ui.form.RadioGroup;
      viewGroup.setAllowEmptySelection(true);
      viewGroup.add(htmlView, jsView, logView);





      // DONE
      // -----------------------------------------------------

      return bar;
    },


    __makeDemoView : function()
    {
      var iframe = new qx.ui.embed.Iframe();
      iframe.addListener("load", this.__ehIframeLoaded, this);
      this.__iframe = iframe;

      return iframe;
    },

    __makeLogView : function()
    {
      var logBox = new qx.ui.layout.VBox(0, "middle", "main");
      logBox.setAlignX("right");

      var logContainer = new qx.ui.container.Composite(logBox);
      var deco = new qx.ui.decoration.Background().set({
        backgroundColor : "background-medium"
      });
      logContainer.setDecorator(deco);

      var clearBtn = new qx.ui.form.Button(this.tr("Clear log"), "icon/22/actions/edit-clear.png");
      clearBtn.setAllowGrowX(false);
      clearBtn.setMargin(5);
      clearBtn.addListener("execute", function() {
        this.logappender.clear();
      }, this);

      logContainer.add(clearBtn, {flex : 0});

      this.f2 = new qx.ui.embed.Html();
      this.f2.setOverflow("auto", "auto");
      this.f2.setFont("monospace");
      this.f2.setBackgroundColor("white");

      // Create appender and unregister from this logger
      // (we are interested in demo messages only)
      this.logappender = new qx.log.appender.Element();
      qx.log.Logger.unregister(this.logappender);

      // Directly create DOM element to use
      var wrap = document.createElement("div");
      this.logelem = document.createElement("div");
      this.logelem.style.padding="8px";
      this.logappender.setElement(this.logelem);
      wrap.appendChild(this.logelem);

      this.f2.getContentElement().useElement(wrap);

      logContainer.add(this.f2, {flex : 1});
      //return this.f2;
      return logContainer;
    },

    __makeHtmlCodeView : function()
    {
      var f3 = new qx.ui.embed.Html("<div class='script'>The sample source will be displayed here.</div>");
      f3.setOverflow("auto", "auto");
      f3.setFont("monospace");
      f3.setBackgroundColor("white");
      this.widgets["outputviews.sourcepage.html.page"] = f3;

      f3.getContentElement().setAttribute("id", "qx_srcview");

      return f3;
    },

    __makeJsCodeView : function()
    {
      var f4 = new qx.ui.embed.Html("<div class='script'>The sample JS source will be displayed here.</div>");
      f4.setOverflow("auto", "auto");
      f4.setFont("monospace");
      f4.setBackgroundColor("white");
      this.widgets["outputviews.sourcepage.js.page"] = f4;

      f4.getContentElement().setAttribute("id", "qx_srcview");

      return f4;
    },


    /**
     * Tree View in Left Pane
     * - only make root node; rest will befilled when iframe has loaded (with
     *   leftReloadTree)
     *
     * @return {var} TODOC
     */
    __makeTree : function()
    {
      var tree1 = new qx.ui.tree.Tree();
      var root = new qx.ui.tree.TreeFolder("Demos");
      tree1.setAppearance("demo-tree");
      tree1.setRoot(root);
      tree1.setSelection([root]);

      this.tree = this.widgets["treeview.flat"] = tree1;

      tree1.addListener("changeSelection", this.treeGetSelection, this);
      tree1.addListener("dblclick", function(e){
        qx.event.Timer.once(this.runSample, this, 50);
      }, this);

      return tree1;
    },




    // ------------------------------------------------------------------------
    //   EVENT HANDLER
    // ------------------------------------------------------------------------

    treeGetSelection : function(e)
    {
      var treeNode = this.tree.getSelection()[0];
      var modelNode = treeNode.getUserData("modelLink");
      this.tests.selected = this.tests.handler.getFullName(modelNode);
    },


    /**
     * TODOC
     *
     * @param e {Event} TODOC
     * @return {void}
     */
    leftReloadTree : function(e)
    {
      this._sampleToTreeNodeMap = {};
      var _sampleToTreeNodeMap = this._sampleToTreeNodeMap;
      var _initialSection = null;
      var _initialNode = null;

      // check for autorun parameter
      var autorun = /\?autorun=true/.test(location.href);

      // set a section to open initially
      var state = this._history.getState();

      var section =  state.match(/([^~]+)~/);
      if (section) {
        // demo preselected, e.g. #bom~Clip.html
        _initialSection = section[1];
      } else {
        var category = state.match(/([^~][\w]*)/);
        if (category) {
          // category preselected, e.g. #widget
          _initialSection = category[1];
          if (autorun) {
            this.setPlayDemos("category");
          }
        }
        else {
          // nothing preselected
          _initialSection = "animation";
          if (autorun) {
            this.setPlayDemos("all");
          }

        }
      }

      // use tree struct
      /**
       * create widget tree from model
       *
       * @param widgetR {qx.ui.tree.Tree}    [In/Out]
       *        widget root under which the widget tree will be built
       * @param modelR  {demobrowser.Tree} [In]
       *        model root for the tree from which the widgets representation
       *        will be built
       */
      function buildSubTree(widgetR, modelR)
      {
        var children = modelR.getChildren();
        var t;

        for (var i=0; i<children.length; i++)
        {
          var currNode = children[i];

          if (currNode.hasChildren())
          {
            t = new qx.ui.tree.TreeFolder(that.polish(currNode.label));
            t.setUserData("filled", false);
            t.setUserData("node", currNode);

            buildSubTree(t, t.getUserData("node"));

            if (currNode.label == _initialSection)
            {
              _initialNode = t;
              t.setOpen(true);
            }
          }
          else
          {
            t = new qx.ui.tree.TreeFile(that.polish(currNode.label));
            var fullName = currNode.pwd().slice(1).join("/") + "/" + currNode.label;
            _sampleToTreeNodeMap[fullName] = t;
          }

          // make connections
          widgetR.add(t);
          t.setUserData("modelLink", currNode);
          currNode.widgetLinkFull = t;
        }
      }

      // -- Main --------------------------------
      var ttree = this.tests.handler.ttree;
      var that = this;

      // Handle current Tree Selection and Content
      this.tree.setUserData("modelLink", ttree);  // link top level widgets and model

      this.tree.getRoot().setOpen(true)
      buildSubTree(this.tree.getRoot(), ttree);

      if (_initialNode != null) {
        this.tree.setSelection([_initialNode]);
      }

    },


    /**
     * event handler for the Run Test button - performs the tests
     *
     * @param e {Event} TODOC
     * @return {void}
     */
    runSample : function(e)
    {
      // If the button was clicked, decide what to play based on tree selection
      if (e && e.getType() === "execute") {
        if (this.tests.selected === "") {
          this.setPlayDemos("all");
        } else if (this.tests.selected.indexOf("html") > 0) {
          this.setPlayDemos("current");
        } else {
          this.setPlayDemos("category");
        }
      }

      this._runbutton.setVisibility("excluded");
      this._stopbutton.setVisibility("visible");

      if (this.tests.selected != "") {
        var file = this.tests.selected.replace(".", "/");
        this.setCurrentSample(file);
      } else {
        this.playNext();
      }
    },


    /**
     * event handler for the Stop Test button - stops execution
     *
     * @param e {Event} TODOC
     * @return {void}
     */
    stopSample : function(e) {
      this.setPlayDemos("current");
      this._stopbutton.setVisibility("excluded");
      this._runbutton.setVisibility("visible");
    },


    /**
     * TODOC
     *
     * @param value {var} TODOC
     * @return {void}
     */
    setCurrentSample : function(value)
    {
      if (!value) {
        return;
      }

      if (!this._sampleToTreeNodeMap) {
        return;
      }

      var url;
      var treeNode = this._sampleToTreeNodeMap[value];
      if (treeNode)
      {
        treeNode.getTree().setSelection([treeNode]);
        url = 'demo/' + value + "?qx.theme=" + this.__currentTheme;
      }
      else
      {
        url = this.defaultUrl;
      }

      if (this.__iframe.getSource() == url)
      {
        this.__iframe.reload();
      }
      else
      {
        this.__logDone = false;
        this.__iframe.setSource(url);
      }

      this._currentSample = value;
      this._currentSampleUrl = url;
    },


    __ehIframeLoaded : function()
    {
      var fwindow = this.__iframe.getWindow();

      var fpath = fwindow.location.pathname + "";
      var splitIndex = fpath.indexOf("?");
      if (splitIndex != -1) {
        fpath = fpath.substring(0, splitIndex + 1);
      }

      var furl = this.__iframe.getSource();
      if (furl != null && furl != this.defaultUrl)
      {
        var url = fwindow.location.href;
        var posHtml = url.indexOf("/demo/") + 6;
        var posSearch = url.indexOf("?");
        posSearch = posSearch == -1 ? url.length : posSearch;
        var split = url.substring(posHtml, posSearch).split("/");
        var div = String.fromCharCode(187);

        if (split.length == 2)
        {
          var category = split[0];
          category = category.charAt(0).toUpperCase() + category.substring(1);
          var pagename = split[1].replace(".html", "").replace("_", " ");
          pagename = pagename.charAt(0).toUpperCase() + pagename.substring(1);
          var title = "qooxdoo " + div + " Demo Browser " + div + " " + category + " " + div + " " + pagename;
        }
        else
        {
          var title = "qooxdoo " + div + " Demo Browser " + div + " Start";
        }

        document.title = title;
      }

      // Play the next sample after five seconds
      if (this.getPlayDemos() != "current") {
        if (!pagename) {
          this.playNext();
        } else {
          var self = this;
          qx.event.Timer.once(this.playNext, self, 5000);
        }
      } else {
        // Remove stop button, display run button
        this._stopbutton.setVisibility("excluded");
        this._runbutton.setVisibility("visible");
      }

    },


    __onLogInterval : function(e)
    {
      var fwindow = this.__iframe.getWindow();
      if (fwindow && fwindow.qx && fwindow.qx.log && fwindow.qx.log.appender)
      {
        if (!this.__logDone)
        {
          this.__logDone = true;

          this.debug("Demo loaded: " + this._currentSample);

          // Register to logger
          this.logappender.$$id = null;
          this.logappender.clear();
          fwindow.qx.log.Logger.register(this.logappender);

          // update state on example change
          this._history.addToHistory(this._currentSample.replace("/", "~"), document.title);

          // load sample source code
          if (this._currentSampleUrl != this.defaultUrl) {
            this.__getPageSource(this._currentSampleUrl);
          }
        }
      }
      else
      {
        this.__logDone = false;
      }
    },




    // ------------------------------------------------------------------------
    //   MISC HELPERS
    // ------------------------------------------------------------------------

    /**
     * This method re-gets (through XHR) the HTML page of the current demo.  The page is
     * then scanned (in the request callback) for the second "<script>" tag, which
     * supposedly loads the demo application .js.  The 'src' uri of this script tag is
     * then used to construct the uri of the corresponding Javascript source file, which
     * is then loaded into the source tab (through another XHR).
     *
     * TODO: This method needs a rewrite
     *
     * @param url {var} TODOC
     * @return {String} TODOC
     */
    __getPageSource : function(url)
    {
      if( typeof(url) != "string" ){
        return;
      }

      // create a and config request to the given url
      var req = new qx.io.remote.Request(url);
      req.setTimeout(180000);
      req.setProhibitCaching(false);

      req.addListener("completed", function(evt)
      {
        // get the content of the request
        var content = evt.getContent();
        // if there is a content
        if (content) {
          // extract the name of the js file
          var secondSrcTagPosition = content.indexOf("<script", content.indexOf("<script")+7);
          var srcAttributeStart = content.indexOf("src", secondSrcTagPosition);
          var srcAttributeEnd = content.indexOf("\"", srcAttributeStart + 5);
          var jsFileName = content.substring(srcAttributeStart + 5, srcAttributeEnd);
          var jsSourceFileName = jsFileName.substring(4, jsFileName.length - 3) + ".src.js";


          // construct url to demo script source
          var u = "script/demobrowser.demo";
          var parts = url.split('/');
          var cat = parts[1];
          var base = parts[2];
          base = base.substr(0, base.indexOf('.html'))
          u += "." + cat + "." + base + ".src.js";
          jsSourceFileName = u;

          // get the javascript code
          var reqJSFile = new qx.io.remote.Request(jsSourceFileName);
          reqJSFile.setTimeout(180000);
          reqJSFile.setProhibitCaching(false);
          reqJSFile.addListener("completed", function(evt2) {
            var jsCode = evt2.getContent();
            if (jsCode) {
              // set the javascript code to the javascript page
              this.widgets["outputviews.sourcepage.js.page"].setHtml(this.__beautySource(jsCode, "javascript"));
            }
          }, this);
          // add a listener which handles the failure of the request
          reqJSFile.addListener("failed", function(evt) {
            this.error("Couldn't load file: " + url);
          }, this);
          // send the request for the javascript code
          reqJSFile.send();

          // write the html code to the html page
          this.widgets["outputviews.sourcepage.html.page"].setHtml(this.__beautySource(content));
        }
      }, this);
      // add a listener which handles the failure of the request
      req.addListener("failed", function(evt) {
        this.error("Couldn't load file: " + url);
      }, this);
      // send the request for the html file

      req.send();
    },


    /**
     * TODOC
     *
     * @param url {var} TODOC
     * @return {void}
     */
    dataLoader : function(url)
    {
      var req = new qx.io.remote.Request(url);

      req.setTimeout(180000);
      req.setProhibitCaching(false);

      /**
       * TODOC
       *
       * @param evt {var} TODOC
       * @lint ignoreDeprecated(eval)
       */
      req.addListener("completed", function(evt)
      {
        var content = evt.getContent();

        var treeData = eval(content);

        // give the browser a chance to update its UI before doing more
        qx.event.Timer.once(function()
        {
          this.tests.handler = new demobrowser.TreeDataHandler(treeData);
          this.leftReloadTree();

          // read initial state
          var state = this._history.getState();

          if (state) {
            this.setCurrentSample(state.replace("~", "/"));
          } else {
            this.setCurrentSample(this.defaultUrl);
          }
        },
        this, 0);
      },
      this);

      req.addListener("failed", function(evt) {
        this.error("Couldn't load file: " + url);
      }, this);

      req.send();
    },


    /**
     * TODOC
     *
     * @param e {Event} TODOC
     * @return {void}
     */
    playPrev : function(e)
    {
      this.setPlayDemos("current");
      var currSamp = this.tree.getSelection()[0];  // widget

      if (currSamp)
      {
        if (currSamp.getUserData('modelLink').getPrevSibling()) {
          var otherSamp = currSamp.getUserData('modelLink').getPrevSibling().widgetLinkFull;

          if (otherSamp) {
            this.tree.setSelection([otherSamp]);
            this.runSample();
          }
        }
      }
    },


    /**
     * TODOC
     *
     * @param e {Event} TODOC
     * @return {void}
     *
     * @lint ignoreUndefined(getChildren)
     */
    playNext : function(e)
    {
      var currSamp = this.tree.getSelection()[0];  // widget

      if (currSamp)
      {
        try {
          // If a folder is selected, get its first child
          var otherSamp = currSamp.getUserData('modelLink').getChildren()[0].widgetLinkFull;
        } catch (ex) {
          try {
            // If a sample is selected, get its following sibling
            var otherSamp = currSamp.getUserData('modelLink').getNextSibling().widgetLinkFull;
          } catch (ex) {
            if (this.getPlayDemos() !== "category") {

              try {
                // Get the following folder's first child
                var tree = currSamp.getTree();

                var nextFolder = tree.getNextSiblingOf(currSamp);
                nextFolder.setOpen(true);

                var otherSamp = nextFolder.getChildren()[0];
              } catch (ex) {
                this.debug(ex)
              }

            }
          }

        }

        if (otherSamp)
        {
          this.tree.setSelection([otherSamp]);
          this.runSample();
        } else {
          // Remove stop button, display run button
          this._stopbutton.setVisibility("excluded");
          this._runbutton.setVisibility("visible");
        }
      }
    },


    __beautySource : function (src, type)
    {
      var bsrc = new qx.util.StringBuilder("<pre class='script'>");
      var lines = [];
      var currBlock = new qx.util.StringBuilder();
      var PScriptStart = /^\s*<script\b[^>]*?(?!\bsrc\s*=)[^>]*?>\s*$/i;
      var PScriptEnd = /^\s*<\/script>\s*$/i;


      src = src.replace(/\r\n/g, "\n").replace(/\r/g, "\n");
      var lines = src.split('\n');

      // if the source is a javascript file
      if (type == "javascript") {
        return "<pre ><div class='script'>" +
                     qx.dev.Tokenizer.javaScriptToHtml(src) +
                     "</div></pre>";
      }

      for (var i=0; i<lines.length; i++)
      {
          if (PScriptStart.exec(lines[i])) // start of inline script
          {
            // add this line to 'normal' code
            bsrc.add(this.__beautyHtml(qx.bom.String.escape(currBlock.get() + lines[i])));
            currBlock.clear();  // start new block
          }
          else if (PScriptEnd.exec(lines[i])) // end of inline script
          {
            // pass script block to tokenizer
            var s1 = qx.dev.Tokenizer.javaScriptToHtml(currBlock.get());
            bsrc.add('<div class="script">', s1, '</div>');
            currBlock.clear(); // start new block
            currBlock.add(lines[i], '\n');
          }
          else // no border line
          {
            currBlock.add(lines[i], '\n');
          }
      }


      // collect rest of page
      bsrc.add(this.__beautyHtml(qx.bom.String.escape(currBlock.get())), "</pre>");

      return bsrc.get();
    },


    __beautyHtml : function (str)
    {
      var res = str;

      // This match function might be a bit of overkill right now, but provides
      // for later extensions (cf. Flanagan(5th), 703)
      function matchfunc (vargs)
      {
        var s = new qx.util.StringBuilder(arguments[1],
          '<span class="html-tag-name">', arguments[2], '</span>');
        var curr;
        var endT = false;

        // handle rest of submatches
        if (arguments.length -2 > 3) {
          for (var i=3; i<arguments.length-2; i++)
          {
            curr = arguments[i];
            if (curr == "/")
            {
              endT = true;
              break;
            }
            else // handle tag attributes
            {
              var m = /\s*([^=]+?)\s*=\s*((?!&quot;)\S+|&quot;.*?&quot;)\s*/g;
              var r;

              while ((r = m.exec(curr)) != null) {
                s.add(' <span class="keyword">', r[1],
                  '</span>=<span class="string">', r[2].replace(/\s*$/,""), '</span>');
              }
            }
          }
          s.add((endT?"/":""));
        }
        s.add('&gt;');

        return s.get();

      } //matchfunc()

      //res = res.replace(/(&lt;\/?)([a-zA-Z]+)\b/g, matchfunc);  // only tag start
      res = res.replace(/(&lt;\/?)([a-zA-Z]+)(.*?)(\/?)&gt;/g, matchfunc); // whole tag

      return res;
    },


    /**
     * 'Atom_1.html' -> 'Atom 1'
     *
     * @param str {String} TODOC
     * @return {var} TODOC
     */
    polish : function(str) {
      return str.replace(".html", "").replace("_", " ");
    },


    __fetchLog : function()
    {
      var w = this.__iframe.getWindow();
      var logger;
      if (w.qx && w.qx.log && w.qx.log.Logger)
      {
        logger = w.qx.log.Logger;

        // Register to flush the log queue into the appender.
        logger.register(this.logappender)

        // Clear buffer
        logger.clear();

        // Unregister again, so that the logger can flush again the next time the tab is clicked.
        logger.unregister(this.logappender);
      }
    },

    __onChangeTheme : function(e)
    {
      this.__currentTheme = e.getData()[0].getUserData("value");
      this.runSample();
    },


    /**
     * Creates the application header.
     */
    __createHeader : function()
    {
      var layout = new qx.ui.layout.HBox();
      var header = new qx.ui.container.Composite(layout);
      header.setAppearance("app-header");

      var title = new qx.ui.basic.Label("Demo Browser");
      var version = new qx.ui.basic.Label("qooxdoo " + qx.core.Setting.get("qx.version"));

      header.add(title);
      header.add(new qx.ui.core.Spacer, {flex : 1});
      header.add(version);

      return header;
    },


    defaultUrl : "demo/welcome.html"
  },




  /*
  *****************************************************************************
     DESTRUCTOR
  *****************************************************************************
  */

  destruct : function()
  {
    this._disposeFields("widgets", "tests", "_sampleToTreeNodeMap", "tree", "logelem");
    this._disposeObjects("mainsplit", "tree1", "left", "runbutton", "toolbar", "f1", "f2", "_history", "logappender", '_cmdObjectSummary', '_cmdRunSample', '_cmdPrevSample', '_cmdNextSample', '_cmdSampleInOwnWindow', '_cmdDisposeSample', '_cmdNamespacePollution');
  }
});

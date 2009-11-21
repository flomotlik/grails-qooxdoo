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
     * Martin Wittemann (martinwittemann)

************************************************************************ */
qx.Class.define("demobrowser.demo.data.Flickr",
{
  extend : qx.application.Standalone,

  members :
  {
    main: function()
    {
      this.base(arguments);

      // fetch some data from Flickr
      var store = new demobrowser.demo.data.store.Flickr("qooxdoo");


      /* ***********************************************
       * CONTROLS
       * ********************************************* */
      var search = new qx.ui.form.TextField("qooxdoo");
      this.getRoot().add(search, {left: 30, top: 50});
      var searchGo = new qx.ui.form.Button("Search");
      this.getRoot().add(searchGo, {left: 140, top: 49});
      searchGo.addListener("execute", function() {
        store.searchForTag(search.getValue());
      }, this);
      search.addListener("keydown", function(e) {
        if (e.getKeyIdentifier() == "Enter") {
          store.searchForTag(search.getValue());
        }
      }, this);


      /* ***********************************************
       * STATUS
       * ********************************************* */
      var status = new qx.ui.basic.Label("loading");
      this.getRoot().add(status, {left: 210, top: 52});
      store.bind("state", status, "value");


      /* ***********************************************
       * LIST OF PHOTOS
       * ********************************************* */
      var list = new qx.ui.form.List();
      list.setWidth(700);
      list.setHeight(110);
      list.setOrientation("horizontal");
      this.getRoot().add(list, {left: 30, right: 30, top: 80});

      var controller = new qx.data.controller.List(null, list);
      controller.setLabelPath("title");

      controller.setDelegate({configureItem : function(item) {
        item.setShow("icon");
      }});

      var iconOptions = {converter : function(data, model) {
        return ("http://farm" + model.getFarm() + ".static.flickr.com/" + model.getServer() + "/"
         + data + "_" + model.getSecret() + "_s.jpg");
      }};
      controller.setIconOptions(iconOptions);
      controller.setIconPath("id");

      store.bind("model.photos.photo", controller, "model");



      /* ***********************************************
       * DETAIL VIEW
       * ********************************************* */
      var image = new qx.ui.basic.Image();
      this.getRoot().add(image, {left: 30, top: 200});
      var detailOptions = {converter : function(data) {
        if (data) {
          return ("http://farm" + data.getFarm() + ".static.flickr.com/" + data.getServer() + "/"
            + data.getId() + "_" + data.getSecret() + ".jpg");
        }
        return "";
      }};
      controller.bind("selection[0]", image, "source", detailOptions);


      /* ***********************************************
       * HEADLINE
       * ********************************************* */
      var headline = new qx.ui.basic.Label();
      headline.setRich(true);
      headline.setWidth(260);
      headline.setValue(
        "<span style='font-size: 20px'>Flickr</span>"
      );
      this.getRoot().add(headline, {left: 10, top: 10});
    }
  }
});





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
     * Martin Wittemann (martinwittemann)

************************************************************************ */
qx.Class.define("demobrowser.demo.data.store.Flickr",
{
  extend : qx.data.store.Json,

  statics : {
    RESULT : null
  },

  /**
   * @lint ignoreUndefined(jsonFlickrApi)
   */
  construct : function(tag)
  {
    // store a global function
    jsonFlickrApi = function(data) {
      demobrowser.demo.data.store.Flickr.RESULT = data;
    }

    var url = "http://api.flickr.com/services/rest/?tags=" + tag;
    this.base(arguments, url);
  },

  members :
  {

    searchForTag: function(tag) {
      if (tag != "") {
        this.setUrl("http://api.flickr.com/services/rest/?tags=" + tag);
      }
    },

    _createRequest: function(url) {
      var loader = new qx.io2.ScriptLoader();
      this.setState("receiving");
      url += "&method=flickr.photos.search&api_key=63a8042eead205f7e0040f488c02afd9&format=json";
      loader.load(url, function(data) {
        this.__loaded();
      }, this);
    },


    __loaded: function() {
      this.setState("completed");
      var data = demobrowser.demo.data.store.Flickr.RESULT;

      if (data == undefined) {
        this.setState("failed");
        return;
      }

      // create the class
      this._marshaler.toClass(data);
      // set the initial data
      this.setModel(this._marshaler.toModel(data));

      // fire complete event
      this.fireDataEvent("loaded", this.getModel());
    }
  }
});



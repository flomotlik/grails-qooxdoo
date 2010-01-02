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

qx.Class.define("qx.test.core.Object",
{
  extend : qx.dev.unit.TestCase,

  events :
  {
    "test" : "qx.event.type.Event"
  },

  members :
  {
    testAddListener : function()
    {
      var listener = function() {};
      this.addListener("test", listener, this, false);
      this.assertTrue(this.hasListener("test", false));
      this.removeListener("test", listener, this, false);
      this.assertFalse(this.hasListener("test", false));
    },


    testRemoveListenerById : function()
    {
      var id = this.addListener("test", function() {}, this, false);
      this.assertTrue(this.hasListener("test", false));
      this.removeListenerById(id);
      this.assertFalse(this.hasListener("test", false));
    },


    testUserData : function()
    {
      var o = new qx.core.Object();

      this.assertNull(o.getUserData("foo"));

      o.setUserData("foo", "bar");
      this.assertEquals("bar", o.getUserData("foo"));

      this.assertNull(o.getUserData("bar"));

      o.dispose();
    },


    testRemoveListenerByIdAsync: function() {
      var executed = false;
      var id = this.addListener("test", function() {
        executed = true;
      }, this);
      this.removeListenerById(id);

      this.fireEvent("test");

      var self = this;
      window.setTimeout(function() {
        self.resume(function() {
          this.assertFalse(executed, "Event has been executed.");
        }, self);
      }, 3000);

      this.wait();
    },


    testFireDataEvent: function()
    {
      var self = this;
      var data = [];
      data.push({value: "a", old: "b"});
      data.push({value: "a", old: ""});
      data.push({value: 1, old: 0});
      data.push({value: 12, old: -123});
      data.push({value: true, old: false});
      data.push({value: false, old: true});
      data.push({value: /^a/, old: null});
      data.push({value: ["a"], old: []});

      var emitter = new qx.test.core.EventEmitterDummy();

      for (var i = 0; i < data.length; i++) {
        this.assertEventFired(emitter, "eventName", function() {
          emitter.fireDataEvent("eventName", data[i].value, data[i].old);
        }, function(e) {
          self.assertEquals(data[i].value, e.getData());
          self.assertEquals(data[i].old, e.getOldData());
        });
      }
    },


    testFireEventTypeCheck : function()
    {
      if (!this.isDebugOn()) {
        return;
      }

      var emitter = new qx.test.core.EventEmitterDummy();
      emitter.addListener("plain", qx.lang.Function.empty);
      emitter.addListener("error", qx.lang.Function.empty);
      emitter.addListener("data", qx.lang.Function.empty);

      // store error logger
      var oldError = qx.log.Logger.error;
      var called = 0;
      qx.log.Logger.error = function(arguments) {
        called += 1;
      }

      emitter.fireEvent("plain", qx.event.type.Event);
      this.assertEquals(0, called);

      emitter.fireEvent("error", qx.event.type.Event);
      this.assertEquals(1, called);

      emitter.fireEvent("data", qx.event.type.Event);
      this.assertEquals(2, called);

      emitter.fireEvent("data", qx.event.type.Data);
      this.assertEquals(2, called);

      qx.log.Logger.error = oldError;
    }
  }
});
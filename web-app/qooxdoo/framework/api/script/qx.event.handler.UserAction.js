{type:"class",attributes:{"name":"UserAction","interfaces":"qx.event.IEventHandler","superClass":"qx.core.Object","fullName":"qx.event.handler.UserAction","type":"class","packageName":"qx.event.handler"},children:[{type:"desc",attributes:{"text":"<p>This handler accepts the useraction event fired by the keyboard and\nand mouse handlers after a user triggered action has occured.</p>"}},{type:"constructor",children:[{type:"method",attributes:{"overriddenFrom":"qx.core.Object","isCtor":"true","name":"ctor"},children:[{type:"params",children:[{type:"param",attributes:{"name":"manager"},children:[{type:"desc",attributes:{"text":"<p>Event manager for the window to use</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"qx.event.Manager"}}]}]}]},{type:"desc",attributes:{"text":"<p>Create a new instance</p>"}}]}]},{type:"constants",children:[{type:"constant",attributes:{"name":"PRIORITY"},children:[{type:"desc",attributes:{"text":"<p>Priority of this handler</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Integer"}}]}]},{type:"constant",attributes:{"name":"TARGET_CHECK"},children:[{type:"desc",attributes:{"text":"<p>Which target check to use</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Integer"}}]}]},{type:"constant",attributes:{"type":"Boolean","name":"IGNORE_CAN_HANDLE","value":"true"},children:[{type:"desc",attributes:{"text":"<p>Whether the method &#8220;canHandleEvent&#8221; must be called</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Integer"}}]}]},{type:"constant",attributes:{"name":"SUPPORTED_TYPES"},children:[{type:"desc",attributes:{"text":"<p>Supported event types</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Map"}}]}]}]},{type:"methods",children:[{type:"method",attributes:{"docFrom":"qx.event.IEventHandler","name":"canHandleEvent"},children:[{type:"params",children:[{type:"param",attributes:{"name":"target"}},{type:"param",attributes:{"name":"type"}}]}]},{type:"method",attributes:{"docFrom":"qx.event.IEventHandler","name":"registerEvent"},children:[{type:"params",children:[{type:"param",attributes:{"name":"target"}},{type:"param",attributes:{"name":"type"}},{type:"param",attributes:{"name":"capture"}}]}]},{type:"method",attributes:{"docFrom":"qx.event.IEventHandler","name":"unregisterEvent"},children:[{type:"params",children:[{type:"param",attributes:{"name":"target"}},{type:"param",attributes:{"name":"type"}},{type:"param",attributes:{"name":"capture"}}]}]}]}]}
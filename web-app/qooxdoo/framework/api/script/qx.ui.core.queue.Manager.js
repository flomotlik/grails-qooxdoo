{type:"class",attributes:{"isStatic":"true","name":"Manager","packageName":"qx.ui.core.queue","fullName":"qx.ui.core.queue.Manager","type":"class"},children:[{type:"desc",attributes:{"text":"<p>This class performs the auto flush of all layout relevant queues.</p>"}},{type:"methods-static",children:[{type:"method",attributes:{"isStatic":"true","name":"flush"},children:[{type:"desc",attributes:{"text":"<p>Flush all layout queues in the correct order. This function is called\ndeferred if {@link scheduleFlush} is called.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"isStatic":"true","name":"scheduleFlush"},children:[{type:"params",children:[{type:"param",attributes:{"name":"job"},children:[{type:"desc",attributes:{"text":"<p>The job, which should be performed. Valid values are\n    <code>layout</code>, <code>decoration</code> and <code>element</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]}]},{type:"desc",attributes:{"text":"<p>Schedule a deferred flush of all queues.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]}]}]}
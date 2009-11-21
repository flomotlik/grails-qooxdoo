{type:"class",attributes:{"isStatic":"true","name":"Profile","packageName":"qx.dev","fullName":"qx.dev.Profile","type":"bootstrap"},children:[{type:"desc",attributes:{"text":"<p>qooxdoo profiler.</p>\n\n<p>All functions of qooxdoo classes (constructors, members, statics) can be profiled\nusing this class.</p>\n\n<p>To enable profiling this class must be loaded <b>before</b> <code>qx.Class</code> is\nloaded. This can be achieved by making <code>qx.core.Aspect</code> and\n<code>qx.dev.Profile</code> a load time dependency of <code>qx.Class</code>.\nFurther more the variant <code>qx.aspects</code> must be set to <code>on</code>.</p>"}},{type:"methods-static",children:[{type:"method",attributes:{"access":"private","isStatic":"true","name":"__calibrate"},children:[{type:"params",children:[{type:"param",attributes:{"name":"count"},children:[{type:"desc",attributes:{"text":"<p>Number of iterations to measure.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Integer"}}]}]}]},{type:"desc",attributes:{"text":"<p>Measure the overhead of calling a wrapped function vs. calling an\nunwrapped function.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>Overhead of a wrapped function call in milliseconds.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Number"}}]}]}]},{type:"method",attributes:{"access":"private","isStatic":"true","name":"__calibrateHelper"},children:[{type:"desc",attributes:{"text":"<p>Helper to measure overhead.</p>"}}]},{type:"method",attributes:{"isStatic":"true","name":"getProfileData"},children:[{type:"desc",attributes:{"text":"<p>Return the profiling data as <span class=\"caps\">JSON</span> data structure.</p>\n\n<p>Example:</p>\n\n<pre class=\"javascript\">\n{\n  \"qx.core.ObjectRegistry.toHashCode (static)\":{\n    *     \"totalTime\":3,\n    \"ownTime\":3,\n    \"callCount\":218,\n    \"subRoutineCalls\":0,\n    \"name\":\"qx.core.ObjectRegistry.toHashCode\",\n    \"type\":\"static\"\n  },\n  \"qx.core.Object.addListener (member)\":{\n    \"totalTime\":19,\n    \"ownTime\":12,\n    \"callCount\":59,\n    \"subRoutineCalls\":251,\n    \"name\":\"qx.core.Object.addListener\",\n    \"type\":\"member\"\n  },\n  \"qx.ui.table.cellrenderer.Default (constructor)\":{\n    \"totalTime\":2,\n    \"ownTime\":1,\n    \"callCount\":1,\n    \"subRoutineCalls\":4,\n    \"name\":\"qx.ui.table.cellrenderer.Default\",\n    \"type\":\"constructor\"\n  }\n}\n</pre>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>The current profiling data.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Map"}}]}]}]},{type:"method",attributes:{"isStatic":"true","name":"normalizeProfileData"},children:[{type:"desc",attributes:{"text":"<p>Normalize profiling data by subtracting the overhead of wrapping from the\nfunction&#8217;s own time.</p>"}}]},{type:"method",attributes:{"isStatic":"true","name":"profileAfter"},children:[{type:"params",children:[{type:"param",attributes:{"name":"fullName"},children:[{type:"desc",attributes:{"text":"<p>Full name of the function including the class name.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]},{type:"param",attributes:{"name":"fcn"},children:[{type:"desc",attributes:{"text":"<p>Function to time.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Function"}}]}]},{type:"param",attributes:{"name":"type"},children:[{type:"desc",attributes:{"text":"<p>Function type as in parameter with same name to\n                     {@link qx.core.Aspect#addAdvice}</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]},{type:"param",attributes:{"name":"args"},children:[{type:"desc",attributes:{"text":"<p>The arguments passed to the wrapped function</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Arguments"}}]}]},{type:"param",attributes:{"name":"returnValue"},children:[{type:"desc",attributes:{"text":"<p>return value of the wrapped function.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>This function will be called after each function call. (Stop timing)</p>"}}]},{type:"method",attributes:{"isStatic":"true","name":"profileBefore"},children:[{type:"params",children:[{type:"param",attributes:{"name":"fullName"},children:[{type:"desc",attributes:{"text":"<p>Full name of the function including the class name.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]},{type:"param",attributes:{"name":"fcn"},children:[{type:"desc",attributes:{"text":"<p>Function to time.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Function"}}]}]},{type:"param",attributes:{"name":"type"},children:[{type:"desc",attributes:{"text":"<p>Function type as in parameter with same name to\n                     {@link qx.core.Aspect#addAdvice}</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]},{type:"param",attributes:{"name":"args"},children:[{type:"desc",attributes:{"text":"<p>The arguments passed to the wrapped function</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Arguments"}}]}]}]},{type:"desc",attributes:{"text":"<p>This function will be called before each function call. (Start timing)</p>"}}]},{type:"method",attributes:{"isStatic":"true","name":"showResults"},children:[{type:"params",children:[{type:"param",attributes:{"defaultValue":"100","name":"maxLength"},children:[{type:"desc",attributes:{"text":"<p>maximum number of entries to display.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Integer"}}]}]}]},{type:"desc",attributes:{"text":"<p>Show profiling results in a popup window. The results are sorted by the\nfunction&#8217;s own time.</p>"}}]},{type:"method",attributes:{"isStatic":"true","name":"start"},children:[{type:"desc",attributes:{"text":"<p>Clear profiling data and start profiling.</p>"}}]},{type:"method",attributes:{"isStatic":"true","name":"stop"},children:[{type:"desc",attributes:{"text":"<p>Stop profiling.</p>"}}]}]}]}
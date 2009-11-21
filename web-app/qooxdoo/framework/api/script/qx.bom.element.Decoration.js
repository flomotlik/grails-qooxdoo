{type:"class",attributes:{"isStatic":"true","name":"Decoration","packageName":"qx.bom.element","fullName":"qx.bom.element.Decoration","type":"class"},children:[{type:"desc",attributes:{"text":"<p>Powerful creation and update features for images used for decoration\nproposes like for rounded borders, icons, etc.</p>\n\n<p>Includes support for image clipping, <span class=\"caps\">PNG</span> alpha channel support, additional\nrepeat options like <code>scale-x</code> or <code>scale-y</code>.</p>"}},{type:"methods-static",children:[{type:"method",attributes:{"isStatic":"true","name":"create"},children:[{type:"params",children:[{type:"param",attributes:{"name":"source"},children:[{type:"desc",attributes:{"text":"<p>Any valid <span class=\"caps\">URI</span></p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]},{type:"param",attributes:{"name":"repeat"},children:[{type:"desc",attributes:{"text":"<p>One of <code>scale-x</code>, <code>scale-y</code>,\n  <code>scale</code>, <code>repeat</code>, <code>repeat-x</code>,\n  <code>repeat-y</code>, <code>repeat</code></p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]},{type:"param",attributes:{"name":"style"},children:[{type:"desc",attributes:{"text":"<p>Additional styles to apply</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Map"}}]}]}]},{type:"desc",attributes:{"text":"<p>Creates a decorator image element with the given options.</p>"}}]},{type:"method",attributes:{"isStatic":"true","name":"getAttributes"},children:[{type:"params",children:[{type:"param",attributes:{"name":"source"},children:[{type:"desc",attributes:{"text":"<p>Image source</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]},{type:"param",attributes:{"name":"repeat"},children:[{type:"desc",attributes:{"text":"<p>Repeat mode of the image</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]},{type:"param",attributes:{"name":"style"},children:[{type:"desc",attributes:{"text":"<p>Additional styles to apply</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Map"}}]}]}]},{type:"desc",attributes:{"text":"<p>This method is used to collect all needed attributes for\nthe tag name detected by {@link #getTagName}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>Markup for image</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]}]},{type:"method",attributes:{"isStatic":"true","name":"getTagName"},children:[{type:"params",children:[{type:"param",attributes:{"name":"repeat"},children:[{type:"desc",attributes:{"text":"<p>One of <code>scale-x</code>, <code>scale-y</code>,\n  <code>scale</code>, <code>repeat</code>, <code>repeat-x</code>,\n  <code>repeat-y</code>, <code>repeat</code></p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]},{type:"param",attributes:{"defaultValue":"null","name":"source"},children:[{type:"desc",attributes:{"text":"<p>Source used to identify the image format</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]}]},{type:"desc",attributes:{"text":"<p>Translates the given repeat option to a tag name. Useful\nfor systems which depends on early information of the tag\nname to prepare element like {@link qx.html.Image}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>The tag name: <code>div</code> or <code>img</code></p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]}]},{type:"method",attributes:{"isStatic":"true","name":"update"},children:[{type:"params",children:[{type:"param",attributes:{"name":"element"},children:[{type:"desc",attributes:{"text":"<p><span class=\"caps\">DOM</span> element to update</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Element"}}]}]},{type:"param",attributes:{"name":"source"},children:[{type:"desc",attributes:{"text":"<p>Any valid <span class=\"caps\">URI</span></p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]},{type:"param",attributes:{"name":"repeat"},children:[{type:"desc",attributes:{"text":"<p>One of <code>scale-x</code>, <code>scale-y</code>,\n  <code>scale</code>, <code>repeat</code>, <code>repeat-x</code>,\n  <code>repeat-y</code>, <code>repeat</code></p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]},{type:"param",attributes:{"name":"style"},children:[{type:"desc",attributes:{"text":"<p>Additional styles to apply</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Map"}}]}]}]},{type:"desc",attributes:{"text":"<p>Updates the element to display the given source\nwith the repeat option.</p>"}}]}]},{type:"constants",children:[{type:"constant",attributes:{"type":"Boolean","name":"DEBUG","value":"false"},children:[{type:"desc",attributes:{"text":"<p>Whether clipping hints should be logged</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Boolean"}}]}]}]}]}
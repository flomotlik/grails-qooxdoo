{type:"class",attributes:{"isStatic":"true","name":"Selection","packageName":"qx.bom","fullName":"qx.bom.Selection","type":"class"},children:[{type:"desc",attributes:{"text":"<p>Low-level selection <span class=\"caps\">API</span> to select elements like input and textarea elements\nas well as text nodes or elements which their child nodes.</p>"}},{type:"methods-static",children:[{type:"method",attributes:{"isStatic":"true","name":"get"},children:[{type:"params",children:[{type:"param",attributes:{"name":"node"},children:[{type:"desc",attributes:{"text":"<p>node to retrieve the selection for</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Node"}}]}]}]},{type:"desc",attributes:{"text":"<p>Returns the current selected text.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>{String?null) selected text as string</p>"}}]}]},{type:"method",attributes:{"isStatic":"true","name":"getLength"},children:[{type:"params",children:[{type:"param",attributes:{"name":"node"},children:[{type:"desc",attributes:{"text":"<p>Form node or document/window to check.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"node"}}]}]}]},{type:"desc",attributes:{"text":"<p>Returns the length of the selection</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>length of the selection or null</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Integer"}},{type:"entry",attributes:{"type":"null"}}]}]}]},{type:"method",attributes:{"isStatic":"true","name":"set"},children:[{type:"params",children:[{type:"param",attributes:{"name":"node"},children:[{type:"desc",attributes:{"text":"<p>node to set the selection at</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Node"}}]}]},{type:"param",attributes:{"name":"start"},children:[{type:"desc",attributes:{"text":"<p>start of the selection</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Integer"}}]}]},{type:"param",attributes:{"name":"end"},children:[{type:"desc",attributes:{"text":"<p>end of the selection</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Integer"}}]}]}]},{type:"desc",attributes:{"text":"<p>Sets a selection at the given node with the given start and end.\nFor text nodes, input and textarea elements the start and end parameters\nset the boundaries at the text.\nFor element nodes the start and end parameters are used to select the\nchildNodes of the given element.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>whether a selection is drawn</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Boolean"}}]}]}]},{type:"method",attributes:{"isStatic":"true","name":"setAll"},children:[{type:"params",children:[{type:"param",attributes:{"name":"node"},children:[{type:"desc",attributes:{"text":"<p>text, element or document node</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Node"}}]}]}]},{type:"desc",attributes:{"text":"<p>Selects all content/childNodes of the given node</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>whether a selection is drawn</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Boolean"}}]}]}]}]}]}
{type:"class",attributes:{"isStatic":"true","name":"Hierarchy","packageName":"qx.dom","fullName":"qx.dom.Hierarchy","type":"class"},children:[{type:"desc",attributes:{"text":"<p>Methods to operate on nodes and elements on a <span class=\"caps\">DOM</span> tree. This contains\nspecial getters to query for child nodes, siblings, etc. This class also\nsupports to operate on one element and reorganize the content with\nthe insertion of new <span class=\"caps\">HTML</span> or nodes.</p>"}},{type:"methods-static",children:[{type:"method",attributes:{"access":"protected","isStatic":"true","name":"_recursivelyCollect"},children:[{type:"params",children:[{type:"param",attributes:{"name":"element"},children:[{type:"desc",attributes:{"text":"<p><span class=\"caps\">DOM</span> element to start with</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Element"}}]}]},{type:"param",attributes:{"name":"property"},children:[{type:"desc",attributes:{"text":"<p>property to look for</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]}]},{type:"desc",attributes:{"text":"<p>Recursively collects elements whose relationship is specified by\nproperty.  <code>property</code> has to be a property (a method won&#8217;t\ndo!) of element that points to a single <span class=\"caps\">DOM</span> node. Returns an array of\nelements.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>result list</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Array"}}]}]}]},{type:"method",attributes:{"isStatic":"true","name":"cleanWhitespace"},children:[{type:"params",children:[{type:"param",attributes:{"name":"element"},children:[{type:"desc",attributes:{"text":"<p>Element to cleanup</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Element"}}]}]}]},{type:"desc",attributes:{"text":"<p>Removes all of element&#8217;s text nodes which contain only whitespace</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"isStatic":"true","name":"contains"},children:[{type:"params",children:[{type:"param",attributes:{"name":"element"},children:[{type:"desc",attributes:{"text":"<p>Parent element</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Element"}}]}]},{type:"param",attributes:{"name":"target"},children:[{type:"desc",attributes:{"text":"<p>Child node</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Node"}}]}]}]},{type:"desc",attributes:{"text":"<p>Whether the first element contains the second one</p>\n\n<p>Uses native non-standard contains() in Internet Explorer,\nOpera and Webkit (supported since Safari 3.0 beta)</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"Boolean"}}]}]}]},{type:"method",attributes:{"isStatic":"true","name":"getAncestors"},children:[{type:"params",children:[{type:"param",attributes:{"name":"element"},children:[{type:"desc",attributes:{"text":"<p><span class=\"caps\">DOM</span> element to query for ancestors</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Element"}}]}]}]},{type:"desc",attributes:{"text":"<p>Collects all of element&#8217;s ancestors and returns them as an array of\nelements.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>list of all parents</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Array"}}]}]}]},{type:"method",attributes:{"isStatic":"true","name":"getChildElements"},children:[{type:"params",children:[{type:"param",attributes:{"name":"element"},children:[{type:"desc",attributes:{"text":"<p><span class=\"caps\">DOM</span> element to query for child elements</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Element"}}]}]}]},{type:"desc",attributes:{"text":"<p>Returns element&#8217;s children.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>list of all child elements</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Array"}}]}]}]},{type:"method",attributes:{"isStatic":"true","name":"getCommonParent"},children:[{type:"params",children:[{type:"param",attributes:{"name":"element1"},children:[{type:"desc",attributes:{"text":"<p>First element</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Element"}}]}]},{type:"param",attributes:{"name":"element2"},children:[{type:"desc",attributes:{"text":"<p>Second element</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Element"}}]}]}]},{type:"desc",attributes:{"text":"<p>Get the common parent element of two given elements. Returns\n<code>null</code> when no common element has been found.</p>\n\n<p>Uses native non-standard contains() in Opera and Internet Explorer</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>the found parent, if none was found <code>null</code></p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Element"}}]}]}]},{type:"method",attributes:{"isStatic":"true","name":"getDescendants"},children:[{type:"params",children:[{type:"param",attributes:{"name":"element"},children:[{type:"desc",attributes:{"text":"<p><span class=\"caps\">DOM</span> element to query for child elements</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Element"}}]}]}]},{type:"desc",attributes:{"text":"<p>Collects all of element&#8217;s descendants (deep) and returns them as an array\nof elements.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>list of all found elements</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Array"}}]}]}]},{type:"method",attributes:{"isStatic":"true","name":"getElementIndex"},children:[{type:"params",children:[{type:"param",attributes:{"name":"element"},children:[{type:"desc",attributes:{"text":"<p>Element to look for</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Element"}}]}]}]},{type:"desc",attributes:{"text":"<p>Returns the <span class=\"caps\">DOM</span> index of the given element (ignoring non-elements)</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>The <span class=\"caps\">DOM</span> index</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Integer"}}]}]}]},{type:"method",attributes:{"isStatic":"true","name":"getFirstDescendant"},children:[{type:"params",children:[{type:"param",attributes:{"name":"element"},children:[{type:"desc",attributes:{"text":"<p><span class=\"caps\">DOM</span> element to query for first descendant</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Element"}}]}]}]},{type:"desc",attributes:{"text":"<p>Returns the first child that is an element. This is opposed to firstChild <span class=\"caps\">DOM</span>\nproperty which will return any node (whitespace in most usual cases).</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>the first descendant</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Element"}}]}]}]},{type:"method",attributes:{"isStatic":"true","name":"getLastDescendant"},children:[{type:"params",children:[{type:"param",attributes:{"name":"element"},children:[{type:"desc",attributes:{"text":"<p><span class=\"caps\">DOM</span> element to query for last descendant</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Element"}}]}]}]},{type:"desc",attributes:{"text":"<p>Returns the last child that is an element. This is opposed to lastChild <span class=\"caps\">DOM</span>\nproperty which will return any node (whitespace in most usual cases).</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>the last descendant</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Element"}}]}]}]},{type:"method",attributes:{"isStatic":"true","name":"getNextElementSibling"},children:[{type:"params",children:[{type:"param",attributes:{"name":"element"},children:[{type:"desc",attributes:{"text":"<p>Starting element node</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Element"}}]}]}]},{type:"desc",attributes:{"text":"<p>Return the next element to the supplied element</p>\n\n<p>&#8220;nextSibling&#8221; is not good enough as it might return a text or comment element</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>Next element node</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Element"}},{type:"entry",attributes:{"type":"null"}}]}]}]},{type:"method",attributes:{"isStatic":"true","name":"getNextSiblings"},children:[{type:"params",children:[{type:"param",attributes:{"name":"element"},children:[{type:"desc",attributes:{"text":"<p><span class=\"caps\">DOM</span> element to query for next siblings</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Element"}}]}]}]},{type:"desc",attributes:{"text":"<p>Collects all of element&#8217;s next siblings and returns them as an array of\nelements.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>list of found <span class=\"caps\">DOM</span> elements</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Array"}}]}]}]},{type:"method",attributes:{"isStatic":"true","name":"getNodeIndex"},children:[{type:"params",children:[{type:"param",attributes:{"name":"node"},children:[{type:"desc",attributes:{"text":"<p>Node to look for</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Node"}}]}]}]},{type:"desc",attributes:{"text":"<p>Returns the <span class=\"caps\">DOM</span> index of the given node</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>The <span class=\"caps\">DOM</span> index</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Integer"}}]}]}]},{type:"method",attributes:{"isStatic":"true","name":"getPreviousElementSibling"},children:[{type:"params",children:[{type:"param",attributes:{"name":"element"},children:[{type:"desc",attributes:{"text":"<p>Starting element node</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Element"}}]}]}]},{type:"desc",attributes:{"text":"<p>Return the previous element to the supplied element</p>\n\n<p>&#8220;previousSibling&#8221; is not good enough as it might return a text or comment element</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>Previous element node</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Element"}},{type:"entry",attributes:{"type":"null"}}]}]}]},{type:"method",attributes:{"isStatic":"true","name":"getPreviousSiblings"},children:[{type:"params",children:[{type:"param",attributes:{"name":"element"},children:[{type:"desc",attributes:{"text":"<p><span class=\"caps\">DOM</span> element to query for previous siblings</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Element"}}]}]}]},{type:"desc",attributes:{"text":"<p>Collects all of element&#8217;s previous siblings and returns them as an array of elements.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>list of found <span class=\"caps\">DOM</span> elements</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Array"}}]}]}]},{type:"method",attributes:{"isStatic":"true","name":"getSiblings"},children:[{type:"params",children:[{type:"param",attributes:{"name":"element"},children:[{type:"desc",attributes:{"text":"<p><span class=\"caps\">DOM</span> element to start with</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Collects all of element&#8217;s siblings and returns them as an array of elements.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>list of all found siblings</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Array"}}]}]}]},{type:"method",attributes:{"isStatic":"true","name":"isDescendantOf"},children:[{type:"params",children:[{type:"param",attributes:{"name":"element"},children:[{type:"desc",attributes:{"text":"<p>first element</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Element"}}]}]},{type:"param",attributes:{"name":"ancestor"},children:[{type:"desc",attributes:{"text":"<p>second element</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Element"}}]}]}]},{type:"desc",attributes:{"text":"<p>Checks if <code>element</code> is a descendant of <code>ancestor</code>.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>Element is a descendant of ancestor</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Boolean"}}]}]}]},{type:"method",attributes:{"isStatic":"true","name":"isEmpty"},children:[{type:"params",children:[{type:"param",attributes:{"name":"element"},children:[{type:"desc",attributes:{"text":"<p>The element to check</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Element"}}]}]}]},{type:"desc",attributes:{"text":"<p>Whether the given element is empty.\nInspired by Base2 (Dean Edwards)</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>true when the element is empty</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Boolean"}}]}]}]},{type:"method",attributes:{"isStatic":"true","name":"isRendered"},children:[{type:"params",children:[{type:"param",attributes:{"name":"element"},children:[{type:"desc",attributes:{"text":"<p><span class=\"caps\">DOM</span> element to check</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Element"}}]}]}]},{type:"desc",attributes:{"text":"<p>Whether the element is inserted into the document\nfor which it was created.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<code>true</code> when the element is inserted\n   into the document."}},{type:"types",children:[{type:"entry",attributes:{"type":"Boolean"}}]}]}]}]}]}
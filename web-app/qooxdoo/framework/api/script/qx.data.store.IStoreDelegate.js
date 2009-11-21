{type:"class",attributes:{"packageName":"qx.data.store","fullName":"qx.data.store.IStoreDelegate","type":"interface","name":"IStoreDelegate"},children:[{type:"desc",attributes:{"text":"<p><span class=\"caps\">EXPERIMENTAL</span>!</p>\n\n<p>Objects, which are used as delegates for a data binding store may\nimplement any of the methods described in this interface. The delegate does\nnot need implement all of the methods of this interface. If a method is not\nimplemented the store provides a default implementation.</p>\n\n<p>Note: This interface is meant to document the delegate but should not be\nlisted in the <code>implement</code> key of a class unless all methods are\nreally implemented.</p>"}},{type:"methods",children:[{type:"method",attributes:{"name":"getModelClass"},children:[{type:"params",children:[{type:"param",attributes:{"name":"properties"},children:[{type:"desc",attributes:{"text":"<p>A sorted order of propertynames\n  separated by &#8221;.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]}]},{type:"desc",attributes:{"text":"<p>Determinates the user defined class for the given properties string.\nThis class could contain additional methods but needs to have the\nproperties with the given names. Also every property needs to have a\nchange event.</p>\n\n<p>If this method is implemented, you have to add the superclass and mixins\nyourself to the returned class. This means that the methods\n{@link #getModelSuperClass} and {@link #getModelMixins} will not be\ncalled for the corresponding class.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>Returns the class containing the properties\n  corresponding to the given hash of the properties. If <code>null</code>\n  will be returned, the store will create a class.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Class"}},{type:"entry",attributes:{"type":"null"}}]}]}]},{type:"method",attributes:{"name":"getModelMixins"},children:[{type:"params",children:[{type:"param",attributes:{"name":"properties"},children:[{type:"desc",attributes:{"text":"<p>A sorted order of propertynames\n  separated by &#8221;.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]}]},{type:"desc",attributes:{"text":"<p>Returns the mixins which should be included to the class, created by the\nstore and identified by the given properties string.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>Returns an array of mixins or a single mixin which\n  will be included into the given class identified by the properties\n  given in the parameter. If <code>null</code> will be returned, no mixin\n  will be included.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Array"}},{type:"entry",attributes:{"type":"Mixin"}},{type:"entry",attributes:{"type":"null"}}]}]}]},{type:"method",attributes:{"name":"getModelSuperClass"},children:[{type:"params",children:[{type:"param",attributes:{"name":"properties"},children:[{type:"desc",attributes:{"text":"<p>A sorted order of propertynames\n  separated by &#8221;.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]}]},{type:"desc",attributes:{"text":"<p>Returns the class which the created model class uses as superclass.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>Returns the class which should be used as superclass\n  corresponding to the given hash of the properties. If <code>null</code>\n  will be returned, {@link qx.core.Object} will be used as superclass.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Class"}},{type:"entry",attributes:{"type":"null"}}]}]}]}]}]}
{type:"class",attributes:{"isAbstract":"true","name":"AbstractScrollArea","packageName":"qx.ui.core","superClass":"qx.ui.core.Widget","childClasses":"qx.ui.container.Scroll,qx.ui.form.List,qx.ui.tree.Tree,qx.ui.virtual.core.Scroller","fullName":"qx.ui.core.AbstractScrollArea","type":"class"},children:[{type:"desc",attributes:{"text":"<p>The ScrollArea provides a container widget with on demand scroll bars\nif the content size exceeds the size of the container.</p>"}},{type:"constructor",children:[{type:"method",attributes:{"docFrom":"qx.core.Object","overriddenFrom":"qx.ui.core.Widget","isCtor":"true","name":"ctor"}}]},{type:"properties",children:[{type:"property",attributes:{"name":"appearance","docFrom":"qx.ui.core.Widget","defaultValue":"\"scrollarea\"","refine":"true","propertyType":"new","overriddenFrom":"qx.ui.core.Widget"}},{type:"property",attributes:{"name":"height","docFrom":"qx.ui.core.LayoutItem","defaultValue":"200","refine":"true","propertyType":"new","overriddenFrom":"qx.ui.core.LayoutItem"}},{type:"property",attributes:{"group":"\"scrollbarX\",\"scrollbarY\"","name":"scrollbar","propertyType":"group"},children:[{type:"desc",attributes:{"text":"<p>Group property, to set the overflow of both scroll bars.</p>"}}]},{type:"property",attributes:{"possibleValues":"\"auto\",\"on\",\"off\"","name":"scrollbarX","defaultValue":"\"auto\"","propertyType":"new","apply":"_computeScrollbars","themeable":"true"},children:[{type:"desc",attributes:{"text":"<p>The policy, when the horizontal scrollbar should be shown.\n<ul>\n  <li><b>auto</b>: Show scrollbar on demand</li>\n  <li><b>on</b>: Always show the scrollbar</li>\n  <li><b>off</b>: Never show the scrollbar</li>\n</ul></p>"}}]},{type:"property",attributes:{"possibleValues":"\"auto\",\"on\",\"off\"","name":"scrollbarY","defaultValue":"\"auto\"","propertyType":"new","apply":"_computeScrollbars","themeable":"true"},children:[{type:"desc",attributes:{"text":"<p>The policy, when the horizontal scrollbar should be shown.\n<ul>\n  <li><b>auto</b>: Show scrollbar on demand</li>\n  <li><b>on</b>: Always show the scrollbar</li>\n  <li><b>off</b>: Never show the scrollbar</li>\n</ul></p>"}}]},{type:"property",attributes:{"name":"width","docFrom":"qx.ui.core.LayoutItem","defaultValue":"100","refine":"true","propertyType":"new","overriddenFrom":"qx.ui.core.LayoutItem"}}]},{type:"methods",children:[{type:"method",attributes:{"access":"protected","apply":"qx.ui.core.AbstractScrollArea#scrollbarY","name":"_computeScrollbars"},children:[{type:"desc",attributes:{"text":"<p>Computes the visibility state for scrollbars.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"access":"protected","docFrom":"qx.ui.core.Widget","overriddenFrom":"qx.ui.core.Widget","name":"_createChildControlImpl"},children:[{type:"params",children:[{type:"param",attributes:{"name":"id"}}]}]},{type:"method",attributes:{"access":"protected","name":"_onChangeScrollbarXVisibility"},children:[{type:"params",children:[{type:"param",attributes:{"name":"e"},children:[{type:"desc",attributes:{"text":"<p>Property change event</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"qx.event.type.Event"}}]}]}]},{type:"desc",attributes:{"text":"<p>Event handler for visibility changes of horizontal scrollbar.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"access":"protected","name":"_onChangeScrollbarYVisibility"},children:[{type:"params",children:[{type:"param",attributes:{"name":"e"},children:[{type:"desc",attributes:{"text":"<p>Property change event</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"qx.event.type.Event"}}]}]}]},{type:"desc",attributes:{"text":"<p>Event handler for visibility changes of horizontal scrollbar.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"access":"protected","name":"_onMouseWheel"},children:[{type:"params",children:[{type:"param",attributes:{"name":"e"},children:[{type:"desc",attributes:{"text":"<p>The mouse wheel event</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"qx.event.type.Mouse"}}]}]}]},{type:"desc",attributes:{"text":"<p>Event handler for the mouse wheel</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"access":"protected","name":"_onScrollBarX"},children:[{type:"params",children:[{type:"param",attributes:{"name":"e"},children:[{type:"desc",attributes:{"text":"<p>The scroll event object</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"qx.event.type.Data"}}]}]}]},{type:"desc",attributes:{"text":"<p>Event handler for the scroll event of the horizontal scrollbar</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"access":"protected","name":"_onScrollBarY"},children:[{type:"params",children:[{type:"param",attributes:{"name":"e"},children:[{type:"desc",attributes:{"text":"<p>The scroll event object</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"qx.event.type.Data"}}]}]}]},{type:"desc",attributes:{"text":"<p>Event handler for the scroll event of the vertical scrollbar</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"access":"protected","name":"_onScrollPaneX"},children:[{type:"params",children:[{type:"param",attributes:{"name":"e"},children:[{type:"desc",attributes:{"text":"<p>The scroll event object</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"qx.event.type.Data"}}]}]}]},{type:"desc",attributes:{"text":"<p>Event handler for the horizontal scroll event of the pane</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"access":"protected","name":"_onScrollPaneY"},children:[{type:"params",children:[{type:"param",attributes:{"name":"e"},children:[{type:"desc",attributes:{"text":"<p>The scroll event object</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"qx.event.type.Data"}}]}]}]},{type:"desc",attributes:{"text":"<p>Event handler for the vertical scroll event of the pane</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"name":"getItemBottom"},children:[{type:"params",children:[{type:"param",attributes:{"name":"item"},children:[{type:"desc",attributes:{"text":"<p>Item to query</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"qx.ui.core.Widget"}}]}]}]},{type:"desc",attributes:{"text":"<p>Returns the top offset of the end of the given item in relation to the\ninner height of this widget.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>Top offset</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Integer"}}]}]}]},{type:"method",attributes:{"name":"getItemLeft"},children:[{type:"params",children:[{type:"param",attributes:{"name":"item"},children:[{type:"desc",attributes:{"text":"<p>Item to query</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"qx.ui.core.Widget"}}]}]}]},{type:"desc",attributes:{"text":"<p>Returns the left offset of the given item in relation to the\ninner width of this widget.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>Top offset</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Integer"}}]}]}]},{type:"method",attributes:{"name":"getItemRight"},children:[{type:"params",children:[{type:"param",attributes:{"name":"item"},children:[{type:"desc",attributes:{"text":"<p>Item to query</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"qx.ui.core.Widget"}}]}]}]},{type:"desc",attributes:{"text":"<p>Returns the left offset of the end of the given item in relation to the\ninner width of this widget.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>Right offset</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Integer"}}]}]}]},{type:"method",attributes:{"name":"getItemTop"},children:[{type:"params",children:[{type:"param",attributes:{"name":"item"},children:[{type:"desc",attributes:{"text":"<p>Item to query</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"qx.ui.core.Widget"}}]}]}]},{type:"desc",attributes:{"text":"<p>Returns the top offset of the given item in relation to the\ninner height of this widget.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>Top offset</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Integer"}}]}]}]},{type:"method",attributes:{"name":"getPaneSize"},children:[{type:"desc",attributes:{"text":"<p>Returns the boundaries of the pane.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>The pane boundaries.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Map"}}]}]}]},{type:"method",attributes:{"name":"getScrollbarX","fromProperty":"scrollbarX"},children:[{type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>scrollbarX</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #scrollbarX}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>(Computed) value of <code>scrollbarX</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"getScrollbarY","fromProperty":"scrollbarY"},children:[{type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>scrollbarY</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #scrollbarY}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>(Computed) value of <code>scrollbarY</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"getScrollX"},children:[{type:"desc",attributes:{"text":"<p>Returns the scroll left position of the content</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>Horizontal scroll position</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Integer"}}]}]}]},{type:"method",attributes:{"name":"getScrollY"},children:[{type:"desc",attributes:{"text":"<p>Returns the scroll top position of the content</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>Vertical scroll position</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Integer"}}]}]}]},{type:"method",attributes:{"access":"protected","name":"initScrollbarX","fromProperty":"scrollbarX"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>Initial value for property <code>scrollbarX</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>scrollbarX</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #scrollbarX}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>the default value</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"access":"protected","name":"initScrollbarY","fromProperty":"scrollbarY"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>Initial value for property <code>scrollbarY</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>scrollbarY</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #scrollbarY}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>the default value</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"resetScrollbar","fromProperty":"scrollbar"},children:[{type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>scrollbar</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #scrollbar}.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"name":"resetScrollbarX","fromProperty":"scrollbarX"},children:[{type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>scrollbarX</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #scrollbarX}.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"name":"resetScrollbarY","fromProperty":"scrollbarY"},children:[{type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>scrollbarY</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #scrollbarY}.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"name":"scrollByX"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>The vertical position to scroll to.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Integer"}}]}]}]},{type:"desc",attributes:{"text":"<p>Scrolls the element&#8217;s content by the given left offset</p>"}}]},{type:"method",attributes:{"name":"scrollByY"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>The horizontal position to scroll to.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Integer"}}]}]}]},{type:"desc",attributes:{"text":"<p>Scrolls the element&#8217;s content by the given top offset</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"name":"scrollToX"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>The vertical position to scroll to.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Integer"}}]}]}]},{type:"desc",attributes:{"text":"<p>Scrolls the element&#8217;s content to the given left coordinate</p>"}}]},{type:"method",attributes:{"name":"scrollToY"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>The horizontal position to scroll to.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Integer"}}]}]}]},{type:"desc",attributes:{"text":"<p>Scrolls the element&#8217;s content to the given top coordinate</p>"}}]},{type:"method",attributes:{"name":"setScrollbar","fromProperty":"scrollbar"},children:[{type:"params",children:[{type:"param",attributes:{"name":"scrollbarX"},children:[{type:"desc",attributes:{"text":"<p>Sets the value of the property {@link #scrollbarX}.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]},{type:"param",attributes:{"name":"scrollbarY"},children:[{type:"desc",attributes:{"text":"<p>Sets the value of the property {@link #scrollbarY}.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Sets the values of the property group <code>scrollbar</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #scrollbar}.</p>"}}]},{type:"method",attributes:{"name":"setScrollbarX","fromProperty":"scrollbarX"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>New value for property <code>scrollbarX</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>scrollbarX</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #scrollbarX}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"setScrollbarY","fromProperty":"scrollbarY"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>New value for property <code>scrollbarY</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>scrollbarY</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #scrollbarY}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]}]}]}
{type:"class",attributes:{"name":"RadioGroup","interfaces":"qx.ui.form.IFormElement,qx.ui.core.ISingleSelection,qx.ui.form.IForm,qx.ui.form.IModelSelection","mixins":"qx.ui.core.MSingleSelectionHandling,qx.ui.form.MFormElement,qx.ui.form.MModelSelection","superClass":"qx.core.Object","fullName":"qx.ui.form.RadioGroup","type":"class","packageName":"qx.ui.form"},children:[{type:"desc",attributes:{"text":"<p>The radio group handles a collection of items from which only one item\ncan be selected. Selection another item will deselect the previously selected\nitem.</p>\n\n<p>This class is e.g. used to create radio groups or {@link qx.ui.form.RadioButton}\nor {@link qx.ui.toolbar.RadioButton} instances.</p>\n\n<p>We also offer a widget for the same purpose which uses this class. So if\nyou like to act with a widget instad of a pure logic coupling of the\nwidgets, take a look at the {@link qx.ui.form.RadioButtonGroup} widget.</p>"}},{type:"constructor",children:[{type:"method",attributes:{"overriddenFrom":"qx.core.Object","isCtor":"true","name":"ctor"},children:[{type:"params",children:[{type:"param",attributes:{"name":"varargs"},children:[{type:"desc",attributes:{"text":"<p>A variable number of items, which are\n    initially added to the radio group, the first item will be selected.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"qx.core.Object"}}]}]}]}]}]},{type:"events",children:[{type:"event",attributes:{"name":"changeEnabled"},children:[{type:"desc",attributes:{"text":"Fired on change of the property {@link #enabled}."}},{type:"types",children:[{type:"entry",attributes:{"type":"qx.event.type.Data"}}]}]},{type:"event",attributes:{"name":"changeInvalidMessage"},children:[{type:"desc",attributes:{"text":"Fired on change of the property {@link #invalidMessage}."}},{type:"types",children:[{type:"entry",attributes:{"type":"qx.event.type.Data"}}]}]},{type:"event",attributes:{"name":"changeRequired"},children:[{type:"desc",attributes:{"text":"Fired on change of the property {@link #required}."}},{type:"types",children:[{type:"entry",attributes:{"type":"qx.event.type.Data"}}]}]},{type:"event",attributes:{"name":"changeSelected"},children:[{type:"desc",attributes:{"text":"<p>Fires after the selection was modified</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"qx.event.type.Data"}}]},{type:"deprecated",children:[{type:"desc",attributes:{"text":"<p>Use &#8216;changeSelection&#8217; instead!</p>"}}]}]},{type:"event",attributes:{"name":"changeValid"},children:[{type:"desc",attributes:{"text":"Fired on change of the property {@link #valid}."}},{type:"types",children:[{type:"entry",attributes:{"type":"qx.event.type.Data"}}]}]},{type:"event",attributes:{"name":"changeValue"},children:[{type:"desc",attributes:{"text":"<p>Fired when the value was modified (after selection change)</p>\n\n<p>Event data: The new value. As defined in {@link qx.ui.menu.RadioButton#value}</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"qx.event.type.Data"}}]},{type:"deprecated"}]}]},{type:"methods",children:[{type:"method",attributes:{"access":"private","name":"__getValue"},children:[{type:"params",children:[{type:"param",attributes:{"name":"item"},children:[{type:"desc",attributes:{"text":"<p>The item.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"qx.ui.form.IRadioItem"}}]}]}]},{type:"deprecated"},{type:"desc",attributes:{"text":"<p>Return the value from the item.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>Value from the item.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}},{type:"entry",attributes:{"type":"null"}}]}]}]},{type:"method",attributes:{"access":"private","name":"__onChangeSelection"},children:[{type:"params",children:[{type:"param",attributes:{"name":"e"},children:[{type:"desc",attributes:{"text":"<p>Data event.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"qx.event.type.Data"}}]}]}]},{type:"desc",attributes:{"text":"<p>Event handler for <code>changeSelection</code>.</p>"}}]},{type:"method",attributes:{"access":"protected","apply":"qx.ui.form.RadioGroup#allowEmptySelection","name":"_applyAllowEmptySelection"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>new value of the property</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Boolean"}}]}]},{type:"param",attributes:{"name":"old"},children:[{type:"desc",attributes:{"text":"<p>previous value of the property (null if it was not yet set).</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Boolean"}}]}]}]},{type:"desc",attributes:{"text":"<p>Applies changes of the property value of the property <code>allowEmptySelection</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #_applyAllowEmptySelection}.</p>"}}]},{type:"method",attributes:{"access":"protected","apply":"qx.ui.form.RadioGroup#enabled","name":"_applyEnabled"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>new value of the property</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Boolean"}}]}]},{type:"param",attributes:{"name":"old"},children:[{type:"desc",attributes:{"text":"<p>previous value of the property (null if it was not yet set).</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Boolean"}}]}]}]},{type:"desc",attributes:{"text":"<p>Applies changes of the property value of the property <code>enabled</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #_applyEnabled}.</p>"}}]},{type:"method",attributes:{"access":"protected","apply":"qx.ui.form.RadioGroup#invalidMessage","name":"_applyInvalidMessage"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>new value of the property</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]},{type:"param",attributes:{"name":"old"},children:[{type:"desc",attributes:{"text":"<p>previous value of the property (null if it was not yet set).</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]}]},{type:"desc",attributes:{"text":"<p>Applies changes of the property value of the property <code>invalidMessage</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #_applyInvalidMessage}.</p>"}}]},{type:"method",attributes:{"access":"protected","apply":"qx.ui.form.RadioGroup#valid","name":"_applyValid"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>new value of the property</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Boolean"}}]}]},{type:"param",attributes:{"name":"old"},children:[{type:"desc",attributes:{"text":"<p>previous value of the property (null if it was not yet set).</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Boolean"}}]}]}]},{type:"desc",attributes:{"text":"<p>Applies changes of the property value of the property <code>valid</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #_applyValid}.</p>"}}]},{type:"method",attributes:{"access":"protected","name":"_getItems"},children:[{type:"desc",attributes:{"text":"<p>Returns the items for the selection.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>Items to select.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"qx.ui.form.IRadioItem","dimensions":"1"}}]}]}]},{type:"method",attributes:{"access":"protected","name":"_isAllowEmptySelection"},children:[{type:"desc",attributes:{"text":"<p>Returns if the selection could be empty or not.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<code>true</code> If selection could be empty,\n   <code>false</code> otherwise."}},{type:"types",children:[{type:"entry",attributes:{"type":"Boolean"}}]}]}]},{type:"method",attributes:{"access":"protected","name":"_onItemChangeChecked"},children:[{type:"params",children:[{type:"param",attributes:{"name":"e"},children:[{type:"desc",attributes:{"text":"<p>Data event</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"qx.event.type.Data"}}]}]}]},{type:"desc",attributes:{"text":"<p>Event listener for <code>changeValue</code> event of every managed item.</p>"}}]},{type:"method",attributes:{"name":"add"},children:[{type:"params",children:[{type:"param",attributes:{"name":"varargs"},children:[{type:"desc",attributes:{"text":"<p>A variable number of items to add.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"qx.ui.form.IRadioItem"}}]}]}]},{type:"desc",attributes:{"text":"<p>Add the passed items to the radio group.</p>"}}]},{type:"method",attributes:{"docFrom":"qx.core.Object","overriddenFrom":"qx.core.Object","name":"addListener"},children:[{type:"params",children:[{type:"param",attributes:{"name":"type"}},{type:"param",attributes:{"name":"listener"}},{type:"param",attributes:{"name":"self"}},{type:"param",attributes:{"name":"capture"}}]}]},{type:"method",attributes:{"name":"getAllowEmptySelection","fromProperty":"allowEmptySelection"},children:[{type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>allowEmptySelection</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #allowEmptySelection}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>(Computed) value of <code>allowEmptySelection</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"getChildren"},children:[{type:"desc",attributes:{"text":"<p>Returns an array containing the group&#8217;s items.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>The item array</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"qx.ui.form.IRadioItem","dimensions":"1"}}]}]}]},{type:"method",attributes:{"name":"getEnabled","fromProperty":"enabled"},children:[{type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>enabled</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #enabled}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>(Computed) value of <code>enabled</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"getInvalidMessage","fromProperty":"invalidMessage"},children:[{type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>invalidMessage</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #invalidMessage}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>(Computed) value of <code>invalidMessage</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"getItems"},children:[{type:"desc",attributes:{"text":"<p>Get all managed items</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>All managed items.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"qx.ui.form.IRadioItem","dimensions":"1"}}]}]}]},{type:"method",attributes:{"name":"getRequired","fromProperty":"required"},children:[{type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>required</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #required}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>(Computed) value of <code>required</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"getSelected"},children:[{type:"deprecated",children:[{type:"desc",attributes:{"text":"<p>Use &#8216;getSelection&#8217; instead!</p>"}}]},{type:"desc",attributes:{"text":"<p>Returns the selected item in the list.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>Selected item.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"qx.ui.form.IRadioItem"}}]}]}]},{type:"method",attributes:{"name":"getValid","fromProperty":"valid"},children:[{type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>valid</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #valid}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>(Computed) value of <code>valid</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"getValue"},children:[{type:"deprecated"},{type:"desc",attributes:{"text":"<p>Get the value of the selected radio item</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>The value of the selected radio item. Returns\n    <code>null</code> if no item is selected.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}},{type:"entry",attributes:{"type":"null"}}]}]}]},{type:"method",attributes:{"name":"getWrap","fromProperty":"wrap"},children:[{type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>wrap</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #wrap}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>(Computed) value of <code>wrap</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"access":"protected","name":"initAllowEmptySelection","fromProperty":"allowEmptySelection"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>Initial value for property <code>allowEmptySelection</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>allowEmptySelection</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #allowEmptySelection}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>the default value</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"access":"protected","name":"initEnabled","fromProperty":"enabled"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>Initial value for property <code>enabled</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>enabled</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #enabled}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>the default value</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"access":"protected","name":"initInvalidMessage","fromProperty":"invalidMessage"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>Initial value for property <code>invalidMessage</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>invalidMessage</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #invalidMessage}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>the default value</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"access":"protected","name":"initRequired","fromProperty":"required"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>Initial value for property <code>required</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>required</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #required}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>the default value</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"access":"protected","name":"initValid","fromProperty":"valid"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>Initial value for property <code>valid</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>valid</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #valid}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>the default value</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"access":"protected","name":"initWrap","fromProperty":"wrap"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>Initial value for property <code>wrap</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>wrap</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #wrap}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>the default value</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"isAllowEmptySelection","fromProperty":"allowEmptySelection"},children:[{type:"desc",attributes:{"text":"<p>Check whether the (computed) value of the boolean property <code>allowEmptySelection</code> equals <code>true</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #allowEmptySelection}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>Whether the property equals <code>true</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Boolean"}}]}]}]},{type:"method",attributes:{"name":"isEnabled","fromProperty":"enabled"},children:[{type:"desc",attributes:{"text":"<p>Check whether the (computed) value of the boolean property <code>enabled</code> equals <code>true</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #enabled}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>Whether the property equals <code>true</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Boolean"}}]}]}]},{type:"method",attributes:{"name":"isRequired","fromProperty":"required"},children:[{type:"desc",attributes:{"text":"<p>Check whether the (computed) value of the boolean property <code>required</code> equals <code>true</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #required}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>Whether the property equals <code>true</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Boolean"}}]}]}]},{type:"method",attributes:{"name":"isValid","fromProperty":"valid"},children:[{type:"desc",attributes:{"text":"<p>Check whether the (computed) value of the boolean property <code>valid</code> equals <code>true</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #valid}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>Whether the property equals <code>true</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Boolean"}}]}]}]},{type:"method",attributes:{"name":"isWrap","fromProperty":"wrap"},children:[{type:"desc",attributes:{"text":"<p>Check whether the (computed) value of the boolean property <code>wrap</code> equals <code>true</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #wrap}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>Whether the property equals <code>true</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Boolean"}}]}]}]},{type:"method",attributes:{"name":"remove"},children:[{type:"params",children:[{type:"param",attributes:{"name":"item"},children:[{type:"desc",attributes:{"text":"<p>The item to remove.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"qx.ui.form.IRadioItem"}}]}]}]},{type:"desc",attributes:{"text":"<p>Remove an item from the radio group.</p>"}}]},{type:"method",attributes:{"name":"resetAllowEmptySelection","fromProperty":"allowEmptySelection"},children:[{type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>allowEmptySelection</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #allowEmptySelection}.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"name":"resetEnabled","fromProperty":"enabled"},children:[{type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>enabled</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #enabled}.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"name":"resetInvalidMessage","fromProperty":"invalidMessage"},children:[{type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>invalidMessage</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #invalidMessage}.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"name":"resetRequired","fromProperty":"required"},children:[{type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>required</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #required}.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"name":"resetSelected"},children:[{type:"deprecated",children:[{type:"desc",attributes:{"text":"<p>Use &#8216;resetSelection&#8217; instead!</p>"}}]},{type:"desc",attributes:{"text":"<p>Reset the current selection.</p>"}}]},{type:"method",attributes:{"name":"resetValid","fromProperty":"valid"},children:[{type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>valid</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #valid}.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"name":"resetWrap","fromProperty":"wrap"},children:[{type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>wrap</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #wrap}.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"name":"select"},children:[{type:"params",children:[{type:"param",attributes:{"name":"item"},children:[{type:"desc",attributes:{"text":"<p>The item to select.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"qx.ui.form.IRadioItem"}}]}]}]},{type:"deprecated",children:[{type:"desc",attributes:{"text":"<p>Use &#8216;setSelection&#8217; instead!</p>"}}]},{type:"desc",attributes:{"text":"<p>Set the checked state of a given item.</p>"}}]},{type:"method",attributes:{"name":"selectNext"},children:[{type:"desc",attributes:{"text":"<p>Select the item following the given item.</p>"}}]},{type:"method",attributes:{"name":"selectPrevious"},children:[{type:"desc",attributes:{"text":"<p>Select the item previous the given item.</p>"}}]},{type:"method",attributes:{"name":"setAllowEmptySelection","fromProperty":"allowEmptySelection"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>New value for property <code>allowEmptySelection</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>allowEmptySelection</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #allowEmptySelection}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"setEnabled","fromProperty":"enabled"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>New value for property <code>enabled</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>enabled</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #enabled}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"setInvalidMessage","fromProperty":"invalidMessage"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>New value for property <code>invalidMessage</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>invalidMessage</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #invalidMessage}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"setRequired","fromProperty":"required"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>New value for property <code>required</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>required</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #required}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"setSelected"},children:[{type:"params",children:[{type:"param",attributes:{"name":"item"},children:[{type:"desc",attributes:{"text":"<p>Item to select.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"qx.ui.form.IRadioItem"}}]}]}]},{type:"deprecated",children:[{type:"desc",attributes:{"text":"<p>Use &#8216;setSelection&#8217; instead!</p>"}}]},{type:"desc",attributes:{"text":"<p>Select the item in the list.</p>"}}]},{type:"method",attributes:{"name":"setValid","fromProperty":"valid"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>New value for property <code>valid</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>valid</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #valid}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"setValue"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>Value of the radio item to select.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]}]},{type:"deprecated"},{type:"desc",attributes:{"text":"<p>Select the radio item, with the given value.</p>"}}]},{type:"method",attributes:{"name":"setWrap","fromProperty":"wrap"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>New value for property <code>wrap</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>wrap</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #wrap}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"toggleAllowEmptySelection","fromProperty":"allowEmptySelection"},children:[{type:"desc",attributes:{"text":"<p>Toggles the (computed) value of the boolean property <code>allowEmptySelection</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #allowEmptySelection}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>the new value</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Boolean"}}]}]}]},{type:"method",attributes:{"name":"toggleEnabled","fromProperty":"enabled"},children:[{type:"desc",attributes:{"text":"<p>Toggles the (computed) value of the boolean property <code>enabled</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #enabled}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>the new value</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Boolean"}}]}]}]},{type:"method",attributes:{"name":"toggleRequired","fromProperty":"required"},children:[{type:"desc",attributes:{"text":"<p>Toggles the (computed) value of the boolean property <code>required</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #required}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>the new value</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Boolean"}}]}]}]},{type:"method",attributes:{"name":"toggleValid","fromProperty":"valid"},children:[{type:"desc",attributes:{"text":"<p>Toggles the (computed) value of the boolean property <code>valid</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #valid}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>the new value</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Boolean"}}]}]}]},{type:"method",attributes:{"name":"toggleWrap","fromProperty":"wrap"},children:[{type:"desc",attributes:{"text":"<p>Toggles the (computed) value of the boolean property <code>wrap</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #wrap}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>the new value</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Boolean"}}]}]}]}]},{type:"properties",children:[{type:"property",attributes:{"apply":"_applyAllowEmptySelection","defaultValue":"false","propertyType":"new","name":"allowEmptySelection","check":"Boolean"},children:[{type:"desc",attributes:{"text":"<p>If is set to <code>true</code> the selection could be empty,\notherwise is always one <code>RadioButton</code> selected.</p>"}}]},{type:"property",attributes:{"check":"Boolean","apply":"_applyEnabled","propertyType":"new","name":"enabled","event":"changeEnabled"},children:[{type:"desc",attributes:{"text":"<p>Whether the radio group is enabled</p>"}}]},{type:"property",attributes:{"name":"invalidMessage","defaultValue":"\"\"","event":"changeInvalidMessage","propertyType":"new","apply":"_applyInvalidMessage","check":"String"},children:[{type:"desc",attributes:{"text":"<p>Message which is shown in an invalid tooltip.</p>"}}]},{type:"property",attributes:{"check":"Boolean","defaultValue":"false","propertyType":"new","name":"required","event":"changeRequired"},children:[{type:"desc",attributes:{"text":"<p>Flag signaling if the group is required.</p>"}}]},{type:"property",attributes:{"name":"valid","defaultValue":"true","event":"changeValid","propertyType":"new","apply":"_applyValid","check":"Boolean"},children:[{type:"desc",attributes:{"text":"<p>Flag signaling if the group at all is valid. All children will have the\nsame state.</p>"}}]},{type:"property",attributes:{"defaultValue":"true","propertyType":"new","name":"wrap","check":"Boolean"},children:[{type:"desc",attributes:{"text":"<p>Whether the selection should wrap around. This means that the successor of\nthe last item is the first item.</p>"}}]}]}]}
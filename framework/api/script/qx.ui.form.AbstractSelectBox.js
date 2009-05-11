{type:"class",attributes:{"isAbstract":"true","name":"AbstractSelectBox","packageName":"qx.ui.form","mixins":"qx.ui.core.MRemoteChildrenHandling","superClass":"qx.ui.core.Widget","childClasses":"qx.ui.form.ComboBox,qx.ui.form.SelectBox","fullName":"qx.ui.form.AbstractSelectBox","type":"class"},children:[{type:"desc",attributes:{"text":"<p>Basic class for a selectbox like lists. Basically supports a popup\nwith a list and the whole children managment.</p>"}},{type:"constructor",children:[{type:"method",attributes:{"docFrom":"qx.core.Object","overriddenFrom":"qx.ui.core.Widget","isCtor":"true","name":"ctor"}}]},{type:"properties",children:[{type:"property",attributes:{"name":"focusable","docFrom":"qx.ui.core.Widget","defaultValue":"true","refine":"true","propertyType":"new","overriddenFrom":"qx.ui.core.Widget"}},{type:"property",attributes:{"name":"maxListHeight","defaultValue":"200","allowNull":"true","propertyType":"new","apply":"_applyMaxListHeight","check":"Number"},children:[{type:"desc",attributes:{"text":"<p>The maximum height of the list popup. Setting this value to\n<code>null</code> will set cause the list to be auto-sized.</p>"}}]},{type:"property",attributes:{"event":"changeName","allowNull":"true","check":"String","name":"name","propertyType":"new"},children:[{type:"desc",attributes:{"text":"<p>The name of the widget. Mainly used for serialization proposes.</p>"}}]},{type:"property",attributes:{"name":"width","docFrom":"qx.ui.core.LayoutItem","defaultValue":"120","refine":"true","propertyType":"new","overriddenFrom":"qx.ui.core.LayoutItem"}}]},{type:"events",children:[{type:"event",attributes:{"name":"changeName"},children:[{type:"desc",attributes:{"text":"Fired on change of the property {@link #name}."}},{type:"types",children:[{type:"entry",attributes:{"type":"qx.event.type.Data"}}]}]},{type:"event",attributes:{"name":"changeValue"},children:[{type:"desc",attributes:{"text":"<p>Fired everytime the selection has been modified and this way the value</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"qx.event.type.Data"}}]}]}]},{type:"methods",children:[{type:"method",attributes:{"access":"protected","apply":"qx.ui.form.AbstractSelectBox#maxListHeight","name":"_applyMaxListHeight"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>new value of the property</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Number"}}]}]},{type:"param",attributes:{"name":"old"},children:[{type:"desc",attributes:{"text":"<p>previous value of the property (null if it was not yet set).</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Number"}}]}]}]},{type:"desc",attributes:{"text":"<p>Applies changes of the property value of the property <code>maxListHeight</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #_applyMaxListHeight}.</p>"}}]},{type:"method",attributes:{"access":"protected","docFrom":"qx.ui.core.Widget","overriddenFrom":"qx.ui.core.Widget","name":"_createChildControlImpl"},children:[{type:"params",children:[{type:"param",attributes:{"name":"id"}}]}]},{type:"method",attributes:{"access":"protected","name":"_onKeyPress"},children:[{type:"params",children:[{type:"param",attributes:{"name":"e"},children:[{type:"desc",attributes:{"text":"<p>Keypress event</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"qx.event.type.KeyEvent"}}]}]}]},{type:"desc",attributes:{"text":"<p>Reacts on special keys and forwards other key events to the list widget.</p>"}}]},{type:"method",attributes:{"access":"protected","name":"_onListChangeSelection"},children:[{type:"params",children:[{type:"param",attributes:{"name":"e"},children:[{type:"desc",attributes:{"text":"<p>Data Event</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"qx.event.type.Data"}}]}]}]},{type:"desc",attributes:{"text":"<p>Syncs the own property from the list change</p>"}}]},{type:"method",attributes:{"access":"protected","name":"_onListMouseDown"},children:[{type:"params",children:[{type:"param",attributes:{"name":"e"},children:[{type:"desc",attributes:{"text":"<p>Mouse Event</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"qx.event.type.Mouse"}}]}]}]},{type:"desc",attributes:{"text":"<p>Redirects mousedown event from the list to this widget.</p>"}}]},{type:"method",attributes:{"access":"protected","name":"_onMousewheel"},children:[{type:"params",children:[{type:"param",attributes:{"name":"e"},children:[{type:"desc",attributes:{"text":"<p>Mousewheel event.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"qx.event.type.Mouse"}}]}]}]},{type:"desc",attributes:{"text":"<p>Close the pop-up if the mousewheel event isn&#8217;t on the pup-up window.</p>"}}]},{type:"method",attributes:{"access":"protected","name":"_onPopupChangeVisibility"},children:[{type:"params",children:[{type:"param",attributes:{"name":"e"},children:[{type:"desc",attributes:{"text":"<p>Property change event</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"qx.event.type.Data"}}]}]}]},{type:"desc",attributes:{"text":"<p>Redirects changeVisibility event from the list to this widget.</p>"}}]},{type:"method",attributes:{"access":"protected","name":"_onResize"},children:[{type:"params",children:[{type:"param",attributes:{"name":"e"},children:[{type:"desc",attributes:{"text":"<p>Data event</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"qx.event.type.Data"}}]}]}]},{type:"desc",attributes:{"text":"<p>Updates list minimum size.</p>"}}]},{type:"method",attributes:{"name":"close"},children:[{type:"desc",attributes:{"text":"<p>Hides the list popup.</p>"}}]},{type:"method",attributes:{"overriddenFrom":"qx.ui.core.Widget","name":"getChildrenContainer"},children:[{type:"desc",attributes:{"text":"<p>Returns the list widget.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>the list</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"qx.ui.form.List"}}]}]}]},{type:"method",attributes:{"name":"getMaxListHeight","fromProperty":"maxListHeight"},children:[{type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>maxListHeight</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #maxListHeight}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>(Computed) value of <code>maxListHeight</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"getName","fromProperty":"name"},children:[{type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>name</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #name}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>(Computed) value of <code>name</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"access":"protected","name":"initMaxListHeight","fromProperty":"maxListHeight"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>Initial value for property <code>maxListHeight</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>maxListHeight</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #maxListHeight}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>the default value</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"access":"protected","name":"initName","fromProperty":"name"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>Initial value for property <code>name</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>name</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #name}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>the default value</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"open"},children:[{type:"desc",attributes:{"text":"<p>Shows the list popup.</p>"}}]},{type:"method",attributes:{"name":"resetMaxListHeight","fromProperty":"maxListHeight"},children:[{type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>maxListHeight</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #maxListHeight}.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"name":"resetName","fromProperty":"name"},children:[{type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>name</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #name}.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"name":"setMaxListHeight","fromProperty":"maxListHeight"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>New value for property <code>maxListHeight</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>maxListHeight</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #maxListHeight}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"setName","fromProperty":"name"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>New value for property <code>name</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>name</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #name}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"toggle"},children:[{type:"desc",attributes:{"text":"<p>Toggles the popup&#8217;s visibility.</p>"}}]}]}]}
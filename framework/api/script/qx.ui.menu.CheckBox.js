{type:"class",attributes:{"name":"CheckBox","packageName":"qx.ui.menu","superClass":"qx.ui.menu.AbstractButton","childClasses":"qx.ui.table.columnmenu.MenuItem","fullName":"qx.ui.menu.CheckBox","type":"class","interfaces":"qx.ui.form.IFormElement"},children:[{type:"desc",attributes:{"text":"<p>Renders a special checkbox button inside a menu. The button behaves like\na normal {@link qx.ui.form.CheckBox} and shows a check icon when\nchecked; normally shows no icon when not checked (depends on the theme).</p>"}},{type:"constructor",children:[{type:"method",attributes:{"overriddenFrom":"qx.ui.menu.AbstractButton","isCtor":"true","name":"ctor"},children:[{type:"params",children:[{type:"param",attributes:{"name":"label"},children:[{type:"desc",attributes:{"text":"<p>Initial label</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]},{type:"param",attributes:{"name":"menu"},children:[{type:"desc",attributes:{"text":"<p>Initial sub menu</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"qx.ui.menu.Menu"}}]}]}]}]}]},{type:"events",children:[{type:"event",attributes:{"name":"changeChecked"},children:[{type:"desc",attributes:{"text":"Fired on change of the property {@link #checked}."}},{type:"types",children:[{type:"entry",attributes:{"type":"qx.event.type.Data"}}]}]},{type:"event",attributes:{"name":"changeName"},children:[{type:"desc",attributes:{"text":"Fired on change of the property {@link #name}."}},{type:"types",children:[{type:"entry",attributes:{"type":"qx.event.type.Data"}}]}]},{type:"event",attributes:{"name":"changeValue"},children:[{type:"desc",attributes:{"text":"Fired on change of the property {@link #value}."}},{type:"types",children:[{type:"entry",attributes:{"type":"qx.event.type.Data"}}]}]}]},{type:"methods",children:[{type:"method",attributes:{"access":"protected","apply":"qx.ui.menu.CheckBox#checked","name":"_applyChecked"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>new value of the property</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Boolean"}}]}]},{type:"param",attributes:{"name":"old"},children:[{type:"desc",attributes:{"text":"<p>previous value of the property (null if it was not yet set).</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Boolean"}}]}]}]},{type:"desc",attributes:{"text":"<p>Applies changes of the property value of the property <code>checked</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #_applyChecked}.</p>"}}]},{type:"method",attributes:{"access":"protected","docFrom":"qx.ui.menu.AbstractButton","overriddenFrom":"qx.ui.menu.AbstractButton","name":"_onKeyPress"},children:[{type:"params",children:[{type:"param",attributes:{"name":"e"}}]}]},{type:"method",attributes:{"access":"protected","docFrom":"qx.ui.menu.AbstractButton","overriddenFrom":"qx.ui.menu.AbstractButton","name":"_onMouseUp"},children:[{type:"params",children:[{type:"param",attributes:{"name":"e"}}]}]},{type:"method",attributes:{"name":"getChecked","fromProperty":"checked"},children:[{type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>checked</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #checked}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>(Computed) value of <code>checked</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"getName","fromProperty":"name"},children:[{type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>name</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #name}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>(Computed) value of <code>name</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"getValue","fromProperty":"value"},children:[{type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>value</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #value}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>(Computed) value of <code>value</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"access":"protected","name":"initChecked","fromProperty":"checked"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>Initial value for property <code>checked</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>checked</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #checked}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>the default value</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"access":"protected","name":"initName","fromProperty":"name"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>Initial value for property <code>name</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>name</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #name}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>the default value</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"access":"protected","name":"initValue","fromProperty":"value"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>Initial value for property <code>value</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>value</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #value}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>the default value</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"isChecked","fromProperty":"checked"},children:[{type:"desc",attributes:{"text":"<p>Check whether the (computed) value of the boolean property <code>checked</code> equals <code>true</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #checked}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>Whether the property equals <code>true</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Boolean"}}]}]}]},{type:"method",attributes:{"name":"resetChecked","fromProperty":"checked"},children:[{type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>checked</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #checked}.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"name":"resetName","fromProperty":"name"},children:[{type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>name</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #name}.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"name":"resetValue","fromProperty":"value"},children:[{type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>value</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #value}.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"name":"setChecked","fromProperty":"checked"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>New value for property <code>checked</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>checked</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #checked}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"setName","fromProperty":"name"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>New value for property <code>name</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>name</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #name}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"setValue","fromProperty":"value"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>New value for property <code>value</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>value</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #value}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"toggleChecked","fromProperty":"checked"},children:[{type:"desc",attributes:{"text":"<p>Toggles the (computed) value of the boolean property <code>checked</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #checked}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>the new value</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Boolean"}}]}]}]}]},{type:"properties",children:[{type:"property",attributes:{"name":"appearance","docFrom":"qx.ui.core.Widget","defaultValue":"\"menu-checkbox\"","refine":"true","propertyType":"new","overriddenFrom":"qx.ui.core.Widget"}},{type:"property",attributes:{"name":"checked","defaultValue":"false","event":"changeChecked","propertyType":"new","apply":"_applyChecked","check":"Boolean"},children:[{type:"desc",attributes:{"text":"<p>Whether the button is checked</p>"}}]},{type:"property",attributes:{"event":"changeName","allowNull":"true","check":"String","name":"name","propertyType":"new"},children:[{type:"desc",attributes:{"text":"<p>The name of the widget. Mainly used for serialization proposes.</p>"}}]},{type:"property",attributes:{"event":"changeValue","allowNull":"true","check":"String","name":"value","propertyType":"new"},children:[{type:"desc",attributes:{"text":"<p>The value of the widget. Mainly used for serialization proposes.</p>"}}]}]}]}
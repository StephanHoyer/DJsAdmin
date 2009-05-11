{type:"class",attributes:{"name":"Button","packageName":"qx.ui.form","mixins":"qx.ui.core.MExecutable","superClass":"qx.ui.basic.Atom","childClasses":"qx.ui.form.MenuButton,qx.ui.form.RadioButton,qx.ui.form.RepeatButton,qx.ui.toolbar.Button","fullName":"qx.ui.form.Button","type":"class","interfaces":"qx.ui.form.IFormElement"},children:[{type:"desc",attributes:{"text":"<p>A Button widget which supports various states and allows it to be used\nvia the mouse and the keyboard.</p>\n\n<p>If the user presses the button by clicking on ito pressing the <code>Enter</code> or\n<code>Space</code> key, the button fires an {@link qx.ui.core.MExecutable#execute} event.</p>\n\n<p>If the {@link qx.ui.core.MExecutable#command} property is set, the\ncommand is executed as well.</p>\n\n<p><strong>Example</strong></p>\n\n<p>Here is a little example of how to use the widget.</p>\n\n<pre class=\"javascript\">\n  var button = new qx.ui.form.Button(\"Hello World\");\n\n  button.addListener(\"execute\", function(e) {\n    alert(\"Button was clicked\");\n  }, this);\n\n  this.getRoot.add(button);\n</pre>\n\n<p>This example creates a button with the label &#8220;Hello World&#8221; and atached an\nevent listener to the {@link #execute} event.</p>\n\n<p><strong>External Documentation</strong></p>\n\n<a href=\"http://qooxdoo.org/documentation/0.8/widget/button\" target=\"_blank\">\nDocumentation of this widget in the qooxdoo wiki.</a>"}},{type:"constructor",children:[{type:"method",attributes:{"overriddenFrom":"qx.ui.basic.Atom","isCtor":"true","name":"ctor"},children:[{type:"params",children:[{type:"param",attributes:{"name":"label"},children:[{type:"desc",attributes:{"text":"<p>label of the atom</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]},{type:"param",attributes:{"defaultValue":"null","name":"icon"},children:[{type:"desc",attributes:{"text":"<p>Icon <span class=\"caps\">URL</span> of the atom</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]},{type:"param",attributes:{"name":"command"},children:[{type:"desc",attributes:{"text":"<p>Command instance to connect with</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"qx.event.Command"}}]}]}]}]}]},{type:"properties",children:[{type:"property",attributes:{"name":"appearance","docFrom":"qx.ui.core.Widget","defaultValue":"\"button\"","refine":"true","propertyType":"new","overriddenFrom":"qx.ui.basic.Atom"}},{type:"property",attributes:{"name":"focusable","docFrom":"qx.ui.core.Widget","defaultValue":"true","refine":"true","propertyType":"new","overriddenFrom":"qx.ui.core.Widget"}},{type:"property",attributes:{"event":"changeName","allowNull":"true","check":"String","name":"name","propertyType":"new"},children:[{type:"desc",attributes:{"text":"<p>The name of the widget. Mainly used for serialization proposes.</p>"}}]},{type:"property",attributes:{"event":"changeValue","allowNull":"true","check":"String","name":"value","propertyType":"new"},children:[{type:"desc",attributes:{"text":"<p>The value of the widget. Mainly used for serialization proposes.</p>"}}]}]},{type:"events",children:[{type:"event",attributes:{"name":"changeName"},children:[{type:"desc",attributes:{"text":"Fired on change of the property {@link #name}."}},{type:"types",children:[{type:"entry",attributes:{"type":"qx.event.type.Data"}}]}]},{type:"event",attributes:{"name":"changeValue"},children:[{type:"desc",attributes:{"text":"Fired on change of the property {@link #value}."}},{type:"types",children:[{type:"entry",attributes:{"type":"qx.event.type.Data"}}]}]}]},{type:"methods",children:[{type:"method",attributes:{"access":"protected","name":"_onKeyDown"},children:[{type:"params",children:[{type:"param",attributes:{"name":"e"},children:[{type:"desc",attributes:{"text":"<p>Key event</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Event"}}]}]}]},{type:"desc",attributes:{"text":"<p>Listener method for &#8220;keydown&#8221; event.</p>\n\n<p>Removes &#8220;abandoned&#8221; and adds &#8220;pressed&#8221; state\nfor the keys &#8220;Enter&#8221; or &#8220;Space&#8221;</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"access":"protected","name":"_onKeyUp"},children:[{type:"params",children:[{type:"param",attributes:{"name":"e"},children:[{type:"desc",attributes:{"text":"<p>Key event</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Event"}}]}]}]},{type:"desc",attributes:{"text":"<p>Listener method for &#8220;keyup&#8221; event.</p>\n\n<p>Removes &#8220;abandoned&#8221; and &#8220;pressed&#8221; state (if &#8220;pressed&#8221; state is set)\nfor the keys &#8220;Enter&#8221; or &#8220;Space&#8221;</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"access":"protected","name":"_onMouseDown"},children:[{type:"params",children:[{type:"param",attributes:{"name":"e"},children:[{type:"desc",attributes:{"text":"<p>Mouse event</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Event"}}]}]}]},{type:"desc",attributes:{"text":"<p>Listener method for &#8220;mousedown&#8221; event\n<ul>\n<li>Removes &#8220;abandoned&#8221; state</li>\n<li>Adds &#8220;pressed&#8221; state</li>\n</ul></p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"access":"protected","name":"_onMouseOut"},children:[{type:"params",children:[{type:"param",attributes:{"name":"e"},children:[{type:"desc",attributes:{"text":"<p>Mouse event</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Event"}}]}]}]},{type:"desc",attributes:{"text":"<p>Listener method for &#8220;mouseout&#8221; event\n<ul>\n<li>Removes &#8220;hovered&#8221; state</li>\n<li>Adds &#8220;abandoned&#8221; and removes &#8220;pressed&#8221; state (if &#8220;pressed&#8221; state is set)</li>\n</ul></p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"access":"protected","name":"_onMouseOver"},children:[{type:"params",children:[{type:"param",attributes:{"name":"e"},children:[{type:"desc",attributes:{"text":"<p>Mouse event</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Event"}}]}]}]},{type:"desc",attributes:{"text":"<p>Listener method for &#8220;mouseover&#8221; event\n<ul>\n<li>Adds state &#8220;hovered&#8221;</li>\n<li>Removes &#8220;abandoned&#8221; and adds &#8220;pressed&#8221; state (if &#8220;abandoned&#8221; state is set)</li>\n</ul></p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"access":"protected","name":"_onMouseUp"},children:[{type:"params",children:[{type:"param",attributes:{"name":"e"},children:[{type:"desc",attributes:{"text":"<p>Mouse event</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Event"}}]}]}]},{type:"desc",attributes:{"text":"<p>Listener method for &#8220;mouseup&#8221; event\n <ul>\n <li>Removes &#8220;pressed&#8221; state (if set)</li>\n <li>Removes &#8220;abandoned&#8221; state (if set)</li>\n <li>Adds &#8220;hovered&#8221; state (if &#8220;abandoned&#8221; state is not set)</li>\n</ul></p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"name":"getName","fromProperty":"name"},children:[{type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>name</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #name}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>(Computed) value of <code>name</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"getValue","fromProperty":"value"},children:[{type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>value</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #value}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>(Computed) value of <code>value</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"access":"protected","name":"initName","fromProperty":"name"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>Initial value for property <code>name</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>name</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #name}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>the default value</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"access":"protected","name":"initValue","fromProperty":"value"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>Initial value for property <code>value</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>value</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #value}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>the default value</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"press"},children:[{type:"desc",attributes:{"text":"<p>Manually press the button</p>"}}]},{type:"method",attributes:{"name":"release"},children:[{type:"desc",attributes:{"text":"<p>Manually release the button</p>"}}]},{type:"method",attributes:{"overriddenFrom":"qx.core.Object","name":"reset"},children:[{type:"desc",attributes:{"text":"<p>Completely reset the button (remove all states)</p>"}}]},{type:"method",attributes:{"name":"resetName","fromProperty":"name"},children:[{type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>name</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #name}.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"name":"resetValue","fromProperty":"value"},children:[{type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>value</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #value}.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"name":"setName","fromProperty":"name"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>New value for property <code>name</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>name</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #name}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"setValue","fromProperty":"value"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>New value for property <code>value</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>value</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #value}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]}]}]}
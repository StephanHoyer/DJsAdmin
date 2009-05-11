{type:"class",attributes:{"name":"Scroll","packageName":"qx.fx.effect.core","superClass":"qx.fx.Base","fullName":"qx.fx.effect.core.Scroll","type":"class"},children:[{type:"desc",attributes:{"text":"<p>Core effect &#8220;Scroll&#8221;</p>\n\n<p>Scrolls to specified coordinates on given element.</p>"}},{type:"methods",children:[{type:"method",attributes:{"access":"protected","name":"_atEndPosition"},children:[{type:"params",children:[{type:"param",attributes:{"name":"left"},children:[{type:"desc",attributes:{"text":"<p>Element&#8217;s current offsetLeft</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Number"}}]}]},{type:"param",attributes:{"name":"top"},children:[{type:"desc",attributes:{"text":"<p>Element&#8217;s current offsetTop</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Number"}}]}]}]},{type:"desc",attributes:{"text":"<p>Helper function verifying if scroll action can\nbe performed or if scroll properties are at a limit.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>true, if scroll properties are\n at a limit, otherwise false: scrolling can be\n performed.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Boolean"}}]}]}]},{type:"method",attributes:{"name":"getMode","fromProperty":"mode"},children:[{type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>mode</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #mode}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>(Computed) value of <code>mode</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"getX","fromProperty":"x"},children:[{type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>x</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #x}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>(Computed) value of <code>x</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"getY","fromProperty":"y"},children:[{type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>y</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #y}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>(Computed) value of <code>y</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"access":"protected","name":"initMode","fromProperty":"mode"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>Initial value for property <code>mode</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>mode</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #mode}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>the default value</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"access":"protected","name":"initX","fromProperty":"x"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>Initial value for property <code>x</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>x</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #x}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>the default value</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"access":"protected","name":"initY","fromProperty":"y"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>Initial value for property <code>y</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>y</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #y}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>the default value</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"resetMode","fromProperty":"mode"},children:[{type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>mode</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #mode}.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"name":"resetX","fromProperty":"x"},children:[{type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>x</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #x}.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"name":"resetY","fromProperty":"y"},children:[{type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>y</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #y}.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"name":"setMode","fromProperty":"mode"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>New value for property <code>mode</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>mode</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #mode}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"setX","fromProperty":"x"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>New value for property <code>x</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>x</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #x}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"setY","fromProperty":"y"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>New value for property <code>y</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>y</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #y}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"docFrom":"qx.fx.Base","overriddenFrom":"qx.fx.Base","name":"start"}},{type:"method",attributes:{"docFrom":"qx.fx.Base","overriddenFrom":"qx.fx.Base","name":"update"},children:[{type:"params",children:[{type:"param",attributes:{"name":"position"}}]}]}]},{type:"properties",children:[{type:"property",attributes:{"possibleValues":"\"relative\",\"absolute\"","defaultValue":"\"relative\"","name":"mode","propertyType":"new"},children:[{type:"desc",attributes:{"text":"<p>String indicating if the coordinates are relative or absolute.</p>"}}]},{type:"property",attributes:{"check":"Number","defaultValue":"0","name":"x","propertyType":"new"},children:[{type:"desc",attributes:{"text":"<p>X coordinate the element should be scroll to.</p>"}}]},{type:"property",attributes:{"check":"Number","defaultValue":"0","name":"y","propertyType":"new"},children:[{type:"desc",attributes:{"text":"<p>Y coordinate the element should be scroll to.</p>"}}]}]}]}
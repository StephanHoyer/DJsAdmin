{type:"class",attributes:{"name":"Grid","packageName":"qx.ui.decoration","superClass":"qx.core.Object","fullName":"qx.ui.decoration.Grid","type":"class","interfaces":"qx.ui.decoration.IDecorator"},children:[{type:"desc",attributes:{"text":"<p>A very complex decoration using two, partly combined and clipped images\nto render a graphically impressive borders with gradients.</p>\n\n<p>The decoration supports all forms of vertical gradients. The gradients must\nbe stretchable to support different heights.</p>\n\n<p>The edges could use different styles of rounded borders. Even different\nedge sizes are supported. The sizes are automatically detected by\nthe build system using the image meta data.</p>\n\n<p>The decoration uses clipped images to reduce the number of external\nresources to load.</p>"}},{type:"constructor",children:[{type:"method",attributes:{"overriddenFrom":"qx.core.Object","isCtor":"true","name":"ctor"},children:[{type:"params",children:[{type:"param",attributes:{"name":"baseImage"},children:[{type:"desc",attributes:{"text":"<p>Base image to use</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]},{type:"param",attributes:{"name":"insets"},children:[{type:"desc",attributes:{"text":"<p>Insets for the grid</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Integer"}},{type:"entry",attributes:{"type":"Array"}}]}]}]}]}]},{type:"methods",children:[{type:"method",attributes:{"access":"protected","apply":"qx.ui.decoration.Grid#baseImage","name":"_applyBaseImage"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>new value of the property</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]},{type:"param",attributes:{"name":"old"},children:[{type:"desc",attributes:{"text":"<p>previous value of the property (null if it was not yet set).</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]}]},{type:"desc",attributes:{"text":"<p>Applies changes of the property value of the property <code>baseImage</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #_applyBaseImage}.</p>"}}]},{type:"method",attributes:{"access":"protected","apply":"qx.ui.decoration.Grid#insetRight","name":"_applyInsets"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>new value of the property</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Number"}}]}]},{type:"param",attributes:{"name":"old"},children:[{type:"desc",attributes:{"text":"<p>previous value of the property (null if it was not yet set).</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Number"}}]}]}]},{type:"desc",attributes:{"text":"<p>Applies changes of the property value of the property <code>insetBottom</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #_applyInsets}.</p>"}}]},{type:"method",attributes:{"name":"getBaseImage","fromProperty":"baseImage"},children:[{type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>baseImage</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #baseImage}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>(Computed) value of <code>baseImage</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"getInsetBottom","fromProperty":"insetBottom"},children:[{type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>insetBottom</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #insetBottom}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>(Computed) value of <code>insetBottom</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"getInsetLeft","fromProperty":"insetLeft"},children:[{type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>insetLeft</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #insetLeft}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>(Computed) value of <code>insetLeft</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"getInsetRight","fromProperty":"insetRight"},children:[{type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>insetRight</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #insetRight}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>(Computed) value of <code>insetRight</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"docFrom":"qx.ui.decoration.IDecorator","name":"getInsets"}},{type:"method",attributes:{"name":"getInsetTop","fromProperty":"insetTop"},children:[{type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>insetTop</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #insetTop}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>(Computed) value of <code>insetTop</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"docFrom":"qx.ui.decoration.IDecorator","name":"getMarkup"}},{type:"method",attributes:{"access":"protected","name":"initBaseImage","fromProperty":"baseImage"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>Initial value for property <code>baseImage</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>baseImage</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #baseImage}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>the default value</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"access":"protected","name":"initInsetBottom","fromProperty":"insetBottom"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>Initial value for property <code>insetBottom</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>insetBottom</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #insetBottom}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>the default value</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"access":"protected","name":"initInsetLeft","fromProperty":"insetLeft"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>Initial value for property <code>insetLeft</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>insetLeft</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #insetLeft}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>the default value</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"access":"protected","name":"initInsetRight","fromProperty":"insetRight"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>Initial value for property <code>insetRight</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>insetRight</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #insetRight}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>the default value</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"access":"protected","name":"initInsetTop","fromProperty":"insetTop"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>Initial value for property <code>insetTop</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>insetTop</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #insetTop}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>the default value</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"resetBaseImage","fromProperty":"baseImage"},children:[{type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>baseImage</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #baseImage}.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"name":"resetInsetBottom","fromProperty":"insetBottom"},children:[{type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>insetBottom</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #insetBottom}.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"name":"resetInsetLeft","fromProperty":"insetLeft"},children:[{type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>insetLeft</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #insetLeft}.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"name":"resetInsetRight","fromProperty":"insetRight"},children:[{type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>insetRight</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #insetRight}.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"name":"resetInsets","fromProperty":"insets"},children:[{type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>insets</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #insets}.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"name":"resetInsetTop","fromProperty":"insetTop"},children:[{type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>insetTop</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #insetTop}.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"docFrom":"qx.ui.decoration.IDecorator","name":"resize"},children:[{type:"params",children:[{type:"param",attributes:{"name":"element"}},{type:"param",attributes:{"name":"width"}},{type:"param",attributes:{"name":"height"}}]}]},{type:"method",attributes:{"name":"setBaseImage","fromProperty":"baseImage"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>New value for property <code>baseImage</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>baseImage</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #baseImage}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"setInsetBottom","fromProperty":"insetBottom"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>New value for property <code>insetBottom</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>insetBottom</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #insetBottom}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"setInsetLeft","fromProperty":"insetLeft"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>New value for property <code>insetLeft</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>insetLeft</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #insetLeft}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"setInsetRight","fromProperty":"insetRight"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>New value for property <code>insetRight</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>insetRight</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #insetRight}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"setInsets","fromProperty":"insets"},children:[{type:"params",children:[{type:"param",attributes:{"name":"insetTop"},children:[{type:"desc",attributes:{"text":"<p>Sets the value of the property {@link #insetTop}.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]},{type:"param",attributes:{"name":"insetRight"},children:[{type:"desc",attributes:{"text":"<p>Sets the value of the property {@link #insetRight}.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]},{type:"param",attributes:{"name":"insetBottom"},children:[{type:"desc",attributes:{"text":"<p>Sets the value of the property {@link #insetBottom}.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]},{type:"param",attributes:{"name":"insetLeft"},children:[{type:"desc",attributes:{"text":"<p>Sets the value of the property {@link #insetLeft}.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Sets the values of the property group <code>insets</code>.</p>\n\n<p>This setter supports a shorthand mode compatible with the way margins and paddins are set in <span class=\"caps\">CSS</span>.</p>\n\n<p>For further details take a look at the property definition: {@link #insets}.</p>"}}]},{type:"method",attributes:{"name":"setInsetTop","fromProperty":"insetTop"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>New value for property <code>insetTop</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>insetTop</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #insetTop}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"docFrom":"qx.ui.decoration.IDecorator","name":"tint"},children:[{type:"params",children:[{type:"param",attributes:{"name":"element"}},{type:"param",attributes:{"name":"bgcolor"}}]}]}]},{type:"properties",children:[{type:"property",attributes:{"allowNull":"true","apply":"_applyBaseImage","check":"String","name":"baseImage","propertyType":"new"},children:[{type:"desc",attributes:{"text":"<p>Base image <span class=\"caps\">URL</span>. All the different images needed are named by the default\nnaming scheme:</p>\n\n<p>${baseImageWithoutExtension}-${imageName}.${baseImageExtension}</p>\n\n<p>These image names are used:</p>\n\n<ul>\n<li>tl (top-left edge)</li>\n<li>t (top side)</li>\n<li>tr (top-right edge)</li>\n</ul>\n\n<ul>\n<li>bl (bottom-left edge)</li>\n<li>b (bottom side)</li>\n<li>br (bottom-right edge)</li>\n</ul>\n\n<ul>\n<li>l (left side)</li>\n<li>c (center image)</li>\n<li>r (right side)</li>\n</ul>"}}]},{type:"property",attributes:{"check":"Number","apply":"_applyInsets","defaultValue":"0","name":"insetBottom","propertyType":"new"},children:[{type:"desc",attributes:{"text":"<p>Width of the bottom inset (keep this margin to the outer box)</p>"}}]},{type:"property",attributes:{"check":"Number","apply":"_applyInsets","defaultValue":"0","name":"insetLeft","propertyType":"new"},children:[{type:"desc",attributes:{"text":"<p>Width of the left inset (keep this margin to the outer box)</p>"}}]},{type:"property",attributes:{"check":"Number","apply":"_applyInsets","defaultValue":"0","name":"insetRight","propertyType":"new"},children:[{type:"desc",attributes:{"text":"<p>Width of the right inset (keep this margin to the outer box)</p>"}}]},{type:"property",attributes:{"mode":"shorthand","group":"\"insetTop\",\"insetRight\",\"insetBottom\",\"insetLeft\"","name":"insets","propertyType":"group"},children:[{type:"desc",attributes:{"text":"<p>Property group for insets</p>"}}]},{type:"property",attributes:{"check":"Number","apply":"_applyInsets","defaultValue":"0","name":"insetTop","propertyType":"new"},children:[{type:"desc",attributes:{"text":"<p>Width of the top inset (keep this margin to the outer box)</p>"}}]}]}]}
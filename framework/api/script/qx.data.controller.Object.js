{type:"class",attributes:{"name":"Object","packageName":"qx.data.controller","superClass":"qx.core.Object","fullName":"qx.data.controller.Object","type":"class"},children:[{type:"desc",attributes:{"text":"<p><span class=\"caps\">EXPERIMENTAL</span>!</p>\n\n<h2>Object Controller</h2>\n\n<p><strong>General idea</strong></p>\n\n<p>The idea of the object controller is to make the binding of one model object\ncontaining one or more properties as easy as possible. Therefore the \ncontroller can take a model as property. Every property in that model can be \nbound to one ore more targets properties. The binding will be for \natomic types only like Numbers, Strings, ...</p>\n\n<p><strong>Features</strong></p>\n\n<ul>\n<li>Manages the bindings between the model properties and the different targets</li>\n<li>No need for the user to take care of the binding ids</li>\n<li>Can create an bidirectional binding (read- / write-binding)</li>\n<li>Handles the change of the model which means adding the old targets</li>\n</ul>\n\n<p><strong>Usage</strong></p>\n\n<p>The controller only can work if a model is set. If the model property is\nnull, the controller ist not working. But it can be null on any time.</p>\n\n<p><strong>Cross reference</strong></p>\n\n<ul>\n<li>If you want to bind a list like widget, use {@link qx.data.controller.List}</li>\n<li>If you want to bind a tree widget, use {@link qx.data.controller.Tree}</li>\n</ul>"}},{type:"constructor",children:[{type:"method",attributes:{"overriddenFrom":"qx.core.Object","isCtor":"true","name":"ctor"},children:[{type:"params",children:[{type:"param",attributes:{"defaultValue":"null","name":"model"},children:[{type:"desc",attributes:{"text":"<p>The model for the model property.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"qx.core.Object"}}]}]}]}]}]},{type:"events",children:[{type:"event",attributes:{"name":"changeModel"},children:[{type:"desc",attributes:{"text":"Fired on change of the property {@link #model}."}},{type:"types",children:[{type:"entry",attributes:{"type":"qx.event.type.Data"}}]}]}]},{type:"methods",children:[{type:"method",attributes:{"access":"private","name":"__addTarget"},children:[{type:"params",children:[{type:"param",attributes:{"name":"targetObject"},children:[{type:"desc",attributes:{"text":"<p>The object on which the property \n  should be bound.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"qx.core.Object"}}]}]},{type:"param",attributes:{"name":"targetProperty"},children:[{type:"desc",attributes:{"text":"<p>The property to which the binding should \n  go.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]},{type:"param",attributes:{"name":"sourceProperty"},children:[{type:"desc",attributes:{"text":"<p>The name of the property in the model.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]},{type:"param",attributes:{"defaultValue":"false","name":"bidirectional"},children:[{type:"desc",attributes:{"text":"<p>Signals if the binding should also work\n  in the reverse direction, from the target to source.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Boolean"}}]}]},{type:"param",attributes:{"defaultValue":"null","name":"options"},children:[{type:"desc",attributes:{"text":"<p>The options Map used by the binding from source\n  to target. The possible options can be found in the \n  {@link qx.data.SingleValueBinding} class.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Map"}}]}]},{type:"param",attributes:{"defaultValue":"null","name":"reverseOptions"},children:[{type:"desc",attributes:{"text":"<p>The options used by the binding in the \n  reverse direction. The possible options can be found in the \n  {@link qx.data.SingleValueBinding} class.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Map"}}]}]}]},{type:"desc",attributes:{"text":"<p>Does the work for {@link #addTarget} but without saving the target\nto the internal target registry.</p>"}}]},{type:"method",attributes:{"access":"private","name":"__removeTargetFrom"},children:[{type:"params",children:[{type:"param",attributes:{"name":"targetObject"},children:[{type:"desc",attributes:{"text":"<p>The target object on which the \n  binding exist.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"qx.core.Object"}}]}]},{type:"param",attributes:{"name":"targetProperty"},children:[{type:"desc",attributes:{"text":"<p>The targets property name used by the \n  adding of the target.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]},{type:"param",attributes:{"name":"sourceProperty"},children:[{type:"desc",attributes:{"text":"<p>The name of the property of the model.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]},{type:"param",attributes:{"name":"sourceObject"},children:[{type:"desc",attributes:{"text":"<p>The source object from which the binding \n  comes.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]}]},{type:"desc",attributes:{"text":"<p>Does the work for {@link #removeTarget} but without removing the target\nfrom the internal registry.</p>"}}]},{type:"method",attributes:{"access":"protected","apply":"qx.data.controller.Object#model","name":"_applyModel"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>The new model.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"qx.core.Object"}},{type:"entry",attributes:{"type":"null"}}]}]},{type:"param",attributes:{"name":"old"},children:[{type:"desc",attributes:{"text":"<p>The old model.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"qx.core.Object"}},{type:"entry",attributes:{"type":"null"}}]}]}]},{type:"desc",attributes:{"text":"<p>Apply-method which will be called if a new model has been set.\nAll bindings will be moved to the new model.</p>"}}]},{type:"method",attributes:{"name":"addTarget"},children:[{type:"params",children:[{type:"param",attributes:{"name":"targetObject"},children:[{type:"desc",attributes:{"text":"<p>The object on which the property \n  should be bound.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"qx.core.Object"}}]}]},{type:"param",attributes:{"name":"targetProperty"},children:[{type:"desc",attributes:{"text":"<p>The property to which the binding should \n  go.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]},{type:"param",attributes:{"name":"sourceProperty"},children:[{type:"desc",attributes:{"text":"<p>The name of the property in the model.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]},{type:"param",attributes:{"defaultValue":"false","name":"bidirectional"},children:[{type:"desc",attributes:{"text":"<p>Signals if the binding should also work\n  in the reverse direction, from the target to source.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Boolean"}}]}]},{type:"param",attributes:{"defaultValue":"null","name":"options"},children:[{type:"desc",attributes:{"text":"<p>The options Map used by the binding from source\n  to target. The possible options can be found in the \n  {@link qx.data.SingleValueBinding} class.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Map"}}]}]},{type:"param",attributes:{"defaultValue":"null","name":"reverseOptions"},children:[{type:"desc",attributes:{"text":"<p>The options used by the binding in the \n  reverse direction. The possible options can be found in the \n  {@link qx.data.SingleValueBinding} class.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Map"}}]}]}]},{type:"desc",attributes:{"text":"<p>Adds a new target to the controller. After adding the target, the given\nproperty of the model will be bound to the targets property.</p>"}}]},{type:"method",attributes:{"name":"getModel","fromProperty":"model"},children:[{type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>model</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #model}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>(Computed) value of <code>model</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"access":"protected","name":"initModel","fromProperty":"model"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>Initial value for property <code>model</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>model</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #model}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>the default value</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"removeTarget"},children:[{type:"params",children:[{type:"param",attributes:{"name":"targetObject"},children:[{type:"desc",attributes:{"text":"<p>The target object on which the \n  binding exist.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"qx.core.Object"}}]}]},{type:"param",attributes:{"name":"targetProperty"},children:[{type:"desc",attributes:{"text":"<p>The targets property name used by the \n  adding of the target.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]},{type:"param",attributes:{"name":"sourceProperty"},children:[{type:"desc",attributes:{"text":"<p>The name of the property of the model.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]}]},{type:"desc",attributes:{"text":"<p>Removes the target identified by the three properties.</p>"}}]},{type:"method",attributes:{"name":"resetModel","fromProperty":"model"},children:[{type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>model</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #model}.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"name":"setModel","fromProperty":"model"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>New value for property <code>model</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>model</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #model}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]}]},{type:"properties",children:[{type:"property",attributes:{"name":"model","check":"qx.core.Object","allowNull":"true","propertyType":"new","apply":"_applyModel","event":"changeModel"},children:[{type:"desc",attributes:{"text":"<p>The model object which does have the properties for the binding.</p>"}}]}]}]}
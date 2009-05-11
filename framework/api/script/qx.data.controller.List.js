{type:"class",attributes:{"name":"List","packageName":"qx.data.controller","mixins":"qx.data.controller.MSelection","superClass":"qx.core.Object","fullName":"qx.data.controller.List","type":"class"},children:[{type:"desc",attributes:{"text":"<p><span class=\"caps\">EXPERIMENTAL</span>!</p>\n\n<h2>List Controller</h2>\n\n<p><strong>General idea</strong>\nThe list controller is responsible for synchronizing every list like widget\nwith a data array. It does not matter if the array contains atomic values \nlike strings of complete objects where one property holds the value for\nthe label and another property holds the icon url. You can even use converts\nthe make the label show a text corresponding to the icon by binding both,\nlabel and icon to the same model property and converting one.</p>\n\n<p><strong>Features</strong></p>\n\n<ul>\n<li>Synchronize the model and the target</li>\n<li>Label and icon are bindable</li>\n<li>Takes care of the selection</li>\n<li>Passes on the options used by the bindings</li>\n</ul>\n\n<p><strong>Usage</strong></p>\n\n<p>As model, only {@link qx.data.Array}s do work. The currently supported \ntargets are</p>\n\n<ul>\n<li>{@link qx.ui.form.SelectBox}</li>\n<li>{@link qx.ui.form.List}</li>\n<li>{@link qx.ui.form.ComboBox}</li>\n</ul>\n\n<p>All the properties like model, target or any property path is bindable. \nEspecially the model is nice to bind to another selection for example.\nThe controller itself can only work if it has a model and a target set. The\nrest of the properties may be empty.</p>\n\n<p><strong>Cross reference</strong></p>\n\n<ul>\n<li>If you want to bind single values, use {@link qx.data.controller.Object}</li>\n<li>If you want to bind a tree widget, use {@link qx.data.controller.Tree}</li>\n</ul>"}},{type:"constructor",children:[{type:"method",attributes:{"overriddenFrom":"qx.core.Object","isCtor":"true","name":"ctor"},children:[{type:"params",children:[{type:"param",attributes:{"defaultValue":"null","name":"model"},children:[{type:"desc",attributes:{"text":"<p>The array containing the data.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"qx.data.Array"}}]}]},{type:"param",attributes:{"defaultValue":"null","name":"target"},children:[{type:"desc",attributes:{"text":"<p>The widget which should show the \n  ListItems.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"qx.ui.core.Widget"}}]}]},{type:"param",attributes:{"defaultValue":"null","name":"labelPath"},children:[{type:"desc",attributes:{"text":"<p>If the model contains objects, the labelPath\n  is the path reference to the property in these objects which should be \n  shown as label.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]}]}]}]},{type:"events",children:[{type:"event",attributes:{"name":"changeDelegate"},children:[{type:"desc",attributes:{"text":"Fired on change of the property {@link #delegate}."}},{type:"types",children:[{type:"entry",attributes:{"type":"qx.event.type.Data"}}]}]},{type:"event",attributes:{"name":"changeModel"},children:[{type:"desc",attributes:{"text":"Fired on change of the property {@link #model}."}},{type:"types",children:[{type:"entry",attributes:{"type":"qx.event.type.Data"}}]}]},{type:"event",attributes:{"name":"changeTarget"},children:[{type:"desc",attributes:{"text":"Fired on change of the property {@link #target}."}},{type:"types",children:[{type:"entry",attributes:{"type":"qx.event.type.Data"}}]}]}]},{type:"methods",children:[{type:"method",attributes:{"access":"private","name":"__addItem"},children:[{type:"params",children:[{type:"param",attributes:{"name":"index"},children:[{type:"desc",attributes:{"text":"<p>The index of the item to add.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Number"}}]}]}]},{type:"desc",attributes:{"text":"<p>Internal helper to add ListItems to the target including the creation \nof the binding.</p>"}}]},{type:"method",attributes:{"access":"private","name":"__buildUpLookupTable"},children:[{type:"desc",attributes:{"text":"<p>Helper-Method which builds up the index lookup for the filter feature. \nIf no filter is set, the lookup table will be a 1:1 mapping.</p>"}}]},{type:"method",attributes:{"access":"private","name":"__changeModel"},children:[{type:"desc",attributes:{"text":"<p>Event handler for the change event of the model. If the model changes, \nOnly the selection needs to be changed. The change of the data will\nbe done by the binding.</p>"}}]},{type:"method",attributes:{"access":"private","name":"__changeModelLength"},children:[{type:"desc",attributes:{"text":"<p>Event handler for the changeLength of the model. If the length changes\nof the model, either ListItems need to be removed or added to the target.</p>"}}]},{type:"method",attributes:{"access":"private","name":"__lookup"},children:[{type:"params",children:[{type:"param",attributes:{"name":"index"},children:[{type:"desc",attributes:{"text":"<p>The index of the lookup table.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Integer"}}]}]}]},{type:"desc",attributes:{"text":"<p>Function for accessing the lookup table.</p>"}}]},{type:"method",attributes:{"access":"private","name":"__removeItem"},children:[{type:"desc",attributes:{"text":"<p>Internal helper to remove ListItems from the target. Also the bidning \nwill be removed properly.</p>"}}]},{type:"method",attributes:{"access":"private","name":"__renewBindings"},children:[{type:"desc",attributes:{"text":"<p>Internal helper method to renew all set bindings.</p>"}}]},{type:"method",attributes:{"access":"protected","apply":"qx.data.controller.List#delegate","name":"_applyDelegate"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>The new delegate.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"qx.core.Object"}},{type:"entry",attributes:{"type":"null"}}]}]},{type:"param",attributes:{"name":"old"},children:[{type:"desc",attributes:{"text":"<p>The old delegate.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"qx.core.Object"}},{type:"entry",attributes:{"type":"null"}}]}]}]},{type:"desc",attributes:{"text":"<p>If a new delegate is set, it applies the stored configuration for the\nlist items to the already created list items once.</p>"}}]},{type:"method",attributes:{"access":"protected","apply":"qx.data.controller.List#iconOptions","name":"_applyIconOptions"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>The new icon options.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Map"}},{type:"entry",attributes:{"type":"null"}}]}]},{type:"param",attributes:{"name":"old"},children:[{type:"desc",attributes:{"text":"<p>The old icon options.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Map"}},{type:"entry",attributes:{"type":"null"}}]}]}]},{type:"desc",attributes:{"text":"<p>Apply-method which will be called if the icon options has been changed.\nIt invokes a renewing of all set bindings.</p>"}}]},{type:"method",attributes:{"access":"protected","apply":"qx.data.controller.List#iconPath","name":"_applyIconPath"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>The new icon path.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}},{type:"entry",attributes:{"type":"null"}}]}]},{type:"param",attributes:{"name":"old"},children:[{type:"desc",attributes:{"text":"<p>The old icon path.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}},{type:"entry",attributes:{"type":"null"}}]}]}]},{type:"desc",attributes:{"text":"<p>Apply-method which will be called if the icon path has been changed.\nIt invokes a renewing of all set bindings.</p>"}}]},{type:"method",attributes:{"access":"protected","apply":"qx.data.controller.List#labelOptions","name":"_applyLabelOptions"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>The new label options.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Map"}},{type:"entry",attributes:{"type":"null"}}]}]},{type:"param",attributes:{"name":"old"},children:[{type:"desc",attributes:{"text":"<p>The old label options.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Map"}},{type:"entry",attributes:{"type":"null"}}]}]}]},{type:"desc",attributes:{"text":"<p>Apply-method which will be called if the label options has been changed.\nIt invokes a renewing of all set bindings.</p>"}}]},{type:"method",attributes:{"access":"protected","apply":"qx.data.controller.List#labelPath","name":"_applyLabelPath"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>The new label path.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}},{type:"entry",attributes:{"type":"null"}}]}]},{type:"param",attributes:{"name":"old"},children:[{type:"desc",attributes:{"text":"<p>The old label path.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}},{type:"entry",attributes:{"type":"null"}}]}]}]},{type:"desc",attributes:{"text":"<p>Apply-method which will be called if the label path has been changed.\nIt invokes a renewing of all set bindings.</p>"}}]},{type:"method",attributes:{"access":"protected","apply":"qx.data.controller.List#model","name":"_applyModel"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>The new model array.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"qx.data.Array"}},{type:"entry",attributes:{"type":"null"}}]}]},{type:"param",attributes:{"name":"old"},children:[{type:"desc",attributes:{"text":"<p>The old model array.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"qx.data.Array"}},{type:"entry",attributes:{"type":"null"}}]}]}]},{type:"desc",attributes:{"text":"<p>Apply-method which will be called if the model has been changed. It\nremoves all the listeners from the old model and adds the needed \nlisteners to the new model. It also invokes the initial filling of the\ntarget widgets if there is a target set.</p>"}}]},{type:"method",attributes:{"access":"protected","apply":"qx.data.controller.List#target","name":"_applyTarget"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>The new target.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"qx.ui.core.Widget"}},{type:"entry",attributes:{"type":"null"}}]}]},{type:"param",attributes:{"name":"old"},children:[{type:"desc",attributes:{"text":"<p>The old target.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"qx.ui.core.Widget"}},{type:"entry",attributes:{"type":"null"}}]}]}]},{type:"desc",attributes:{"text":"<p>Apply-method which will be called if the target has been changed. \nWhen the target changes, every binding needs to be reseted and the old \ntarget needs to be cleaned up. If there is a model, the target will be \nfilled with the data of the model.</p>"}}]},{type:"method",attributes:{"access":"protected","name":"_bindListItem"},children:[{type:"params",children:[{type:"param",attributes:{"name":"item"},children:[{type:"desc",attributes:{"text":"<p>The internally created and used \n  ListItem.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"qx.ui.form.ListItem"}}]}]},{type:"param",attributes:{"name":"index"},children:[{type:"desc",attributes:{"text":"<p>The index of the ListItem.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"number"}}]}]}]},{type:"desc",attributes:{"text":"<p>Sets up the binding for the given ListItem and index.</p>"}}]},{type:"method",attributes:{"access":"protected","name":"_createItem"},children:[{type:"desc",attributes:{"text":"<p>Creates a ListItem and delegates the configure method if a delegate is \nset and the needed function (configureItem) is available.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>The created and configured ListItem.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"qx.ui.form.ListItem"}}]}]}]},{type:"method",attributes:{"access":"protected","name":"_onBindingSet"},children:[{type:"params",children:[{type:"param",attributes:{"name":"index"},children:[{type:"desc",attributes:{"text":"<p>The index of the current binding.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"number"}}]}]},{type:"param",attributes:{"name":"sourceObject"},children:[{type:"desc",attributes:{"text":"<p>The source object of the binding.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"qx.core.Object"}}]}]},{type:"param",attributes:{"name":"targetObject"},children:[{type:"desc",attributes:{"text":"<p>The target object of the binding.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"qx.core.Object"}}]}]}]},{type:"desc",attributes:{"text":"<p>Method which will be called on the invoke of every binding. It takes \ncare of the selection on the change of the binding.</p>"}}]},{type:"method",attributes:{"access":"protected","name":"_removeBindingsFrom"},children:[{type:"params",children:[{type:"param",attributes:{"name":"item"},children:[{type:"desc",attributes:{"text":"<p>The itemof which the binding which should \n  be removed.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Number"}}]}]}]},{type:"desc",attributes:{"text":"<p>Internal helper method to remove the binding of the given item.</p>"}}]},{type:"method",attributes:{"access":"protected","name":"_setBindItem"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>The new delegate.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Object"}}]}]},{type:"param",attributes:{"name":"old"},children:[{type:"desc",attributes:{"text":"<p>The old delegate.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Object"}}]}]}]},{type:"desc",attributes:{"text":"<p>Helper method for applying the delegate It checks if a bindItem \nis set end invokes the initial process to apply the the given function.</p>"}}]},{type:"method",attributes:{"access":"protected","name":"_setConfigureItem"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>The new delegate.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Object"}}]}]},{type:"param",attributes:{"name":"old"},children:[{type:"desc",attributes:{"text":"<p>The old delegate.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Object"}}]}]}]},{type:"desc",attributes:{"text":"<p>Helper method for applying the delegate It checks if a configureItem \nis set end invokes the initial process to apply the the given function.</p>"}}]},{type:"method",attributes:{"access":"protected","name":"_setCreateItem"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>The new delegate.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Object"}}]}]},{type:"param",attributes:{"name":"old"},children:[{type:"desc",attributes:{"text":"<p>The old delegate.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Object"}}]}]}]},{type:"desc",attributes:{"text":"<p>Helper method for applying the delegate It checks if a createItem \nis set end invokes the initial process to apply the the given function.</p>"}}]},{type:"method",attributes:{"access":"protected","name":"_setFilter"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>The new filter function.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Function"}},{type:"entry",attributes:{"type":"null"}}]}]},{type:"param",attributes:{"name":"old"},children:[{type:"desc",attributes:{"text":"<p>The old filter function.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Function"}},{type:"entry",attributes:{"type":"null"}}]}]}]},{type:"desc",attributes:{"text":"<p>Apply-Method for setting the filter. It removes all bindings,\ncheck if the length has changed and adds or removes the items in the \ntarget. After that, the bindings will be set up again and the selection\nwill be updated.</p>"}}]},{type:"method",attributes:{"name":"bindProperty"},children:[{type:"params",children:[{type:"param",attributes:{"name":"sourcePath"},children:[{type:"desc",attributes:{"text":"<p>The path to the propety in the model.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}},{type:"entry",attributes:{"type":"null"}}]}]},{type:"param",attributes:{"name":"targetProperty"},children:[{type:"desc",attributes:{"text":"<p>The name of the property in the target \n  widget.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]},{type:"param",attributes:{"name":"options"},children:[{type:"desc",attributes:{"text":"<p>The options to use for the binding.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Map"}},{type:"entry",attributes:{"type":"null"}}]}]},{type:"param",attributes:{"name":"targetWidget"},children:[{type:"desc",attributes:{"text":"<p>The target widget.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"qx.ui.core.Widget"}}]}]},{type:"param",attributes:{"name":"index"},children:[{type:"desc",attributes:{"text":"<p>The index of the current binding.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Number"}}]}]}]},{type:"desc",attributes:{"text":"<p>Helper-Method for binding a given property from the model to the target\nwidget.\nThis method should only be called in the \n{@link qx.data.controller.IControllerDelegate#bindItem} function \nimplemented by the {@link #delegate} property.</p>"}}]},{type:"method",attributes:{"name":"getDelegate","fromProperty":"delegate"},children:[{type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>delegate</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #delegate}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>(Computed) value of <code>delegate</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"getIconOptions","fromProperty":"iconOptions"},children:[{type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>iconOptions</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #iconOptions}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>(Computed) value of <code>iconOptions</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"getIconPath","fromProperty":"iconPath"},children:[{type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>iconPath</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #iconPath}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>(Computed) value of <code>iconPath</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"getLabelOptions","fromProperty":"labelOptions"},children:[{type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>labelOptions</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #labelOptions}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>(Computed) value of <code>labelOptions</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"getLabelPath","fromProperty":"labelPath"},children:[{type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>labelPath</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #labelPath}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>(Computed) value of <code>labelPath</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"getModel","fromProperty":"model"},children:[{type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>model</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #model}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>(Computed) value of <code>model</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"getTarget","fromProperty":"target"},children:[{type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>target</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #target}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>(Computed) value of <code>target</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"access":"protected","name":"initDelegate","fromProperty":"delegate"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>Initial value for property <code>delegate</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>delegate</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #delegate}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>the default value</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"access":"protected","name":"initIconOptions","fromProperty":"iconOptions"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>Initial value for property <code>iconOptions</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>iconOptions</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #iconOptions}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>the default value</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"access":"protected","name":"initIconPath","fromProperty":"iconPath"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>Initial value for property <code>iconPath</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>iconPath</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #iconPath}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>the default value</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"access":"protected","name":"initLabelOptions","fromProperty":"labelOptions"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>Initial value for property <code>labelOptions</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>labelOptions</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #labelOptions}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>the default value</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"access":"protected","name":"initLabelPath","fromProperty":"labelPath"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>Initial value for property <code>labelPath</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>labelPath</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #labelPath}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>the default value</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"access":"protected","name":"initModel","fromProperty":"model"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>Initial value for property <code>model</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>model</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #model}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>the default value</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"access":"protected","name":"initTarget","fromProperty":"target"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>Initial value for property <code>target</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>target</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #target}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>the default value</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"resetDelegate","fromProperty":"delegate"},children:[{type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>delegate</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #delegate}.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"name":"resetIconOptions","fromProperty":"iconOptions"},children:[{type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>iconOptions</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #iconOptions}.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"name":"resetIconPath","fromProperty":"iconPath"},children:[{type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>iconPath</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #iconPath}.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"name":"resetLabelOptions","fromProperty":"labelOptions"},children:[{type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>labelOptions</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #labelOptions}.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"name":"resetLabelPath","fromProperty":"labelPath"},children:[{type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>labelPath</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #labelPath}.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"name":"resetModel","fromProperty":"model"},children:[{type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>model</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #model}.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"name":"resetTarget","fromProperty":"target"},children:[{type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>target</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #target}.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"name":"setDelegate","fromProperty":"delegate"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>New value for property <code>delegate</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>delegate</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #delegate}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"setIconOptions","fromProperty":"iconOptions"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>New value for property <code>iconOptions</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>iconOptions</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #iconOptions}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"setIconPath","fromProperty":"iconPath"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>New value for property <code>iconPath</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>iconPath</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #iconPath}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"setLabelOptions","fromProperty":"labelOptions"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>New value for property <code>labelOptions</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>labelOptions</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #labelOptions}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"setLabelPath","fromProperty":"labelPath"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>New value for property <code>labelPath</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>labelPath</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #labelPath}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"setModel","fromProperty":"model"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>New value for property <code>model</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>model</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #model}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"setTarget","fromProperty":"target"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>New value for property <code>target</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>target</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #target}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"update"},children:[{type:"desc",attributes:{"text":"<p>Updates the filter and the target. This could be used if the filter \nuses an additional parameter which changes the filter result.</p>"}}]}]},{type:"properties",children:[{type:"property",attributes:{"name":"delegate","defaultValue":"null","allowNull":"true","propertyType":"new","apply":"_applyDelegate","event":"changeDelegate"},children:[{type:"desc",attributes:{"text":"<p>Delegation object, which can have one ore more functionf defined by the\n{@link #IControllerDelegate} Interface.</p>"}}]},{type:"property",attributes:{"allowNull":"true","apply":"_applyIconOptions","name":"iconOptions","propertyType":"new"},children:[{type:"desc",attributes:{"text":"<p>A map containing the options for the icon binding. The possible keys \ncan be found in the {@link qx.data.SingleValueBinding} documentation.</p>"}}]},{type:"property",attributes:{"allowNull":"true","apply":"_applyIconPath","check":"String","name":"iconPath","propertyType":"new"},children:[{type:"desc",attributes:{"text":"<p>The path to the property which holds the information that should be \nshown as a icon. This is only needed if objects are stored in the model \nand if the icon should be shown.</p>"}}]},{type:"property",attributes:{"allowNull":"true","apply":"_applyLabelOptions","name":"labelOptions","propertyType":"new"},children:[{type:"desc",attributes:{"text":"<p>A map containing the options for the label binding. The possible keys \ncan be found in the {@link qx.data.SingleValueBinding} documentation.</p>"}}]},{type:"property",attributes:{"allowNull":"true","apply":"_applyLabelPath","check":"String","name":"labelPath","propertyType":"new"},children:[{type:"desc",attributes:{"text":"<p>The path to the property which holds the information that should be \nshown as a label. This is only needed if objects are stored in the model.</p>"}}]},{type:"property",attributes:{"name":"model","check":"qx.data.IListData","allowNull":"true","propertyType":"new","apply":"_applyModel","event":"changeModel"},children:[{type:"desc",attributes:{"text":"<p>Data array containing the data which should be shown in the list.</p>"}}]},{type:"property",attributes:{"name":"target","defaultValue":"null","allowNull":"true","propertyType":"new","apply":"_applyTarget","event":"changeTarget"},children:[{type:"desc",attributes:{"text":"<p>The target widget which should show the data.</p>"}}]}]}]}
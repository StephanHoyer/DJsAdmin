{type:"class",attributes:{"name":"Json","packageName":"qx.data.store","superClass":"qx.core.Object","fullName":"qx.data.store.Json","type":"class"},children:[{type:"desc",attributes:{"text":"<p><span class=\"caps\">EXPERIMENTAL</span>!</p>\n\n<p>The json data store is responsible for fetching data from a url. The type\nof the data has to be json.</p>\n\n<p>The loaded data will be parsed and saved in qooxdoo objects. Every value\nof the loaded data will be stored in a qooxdoo property. The model classes\nfor the data will be created automatically.</p>\n\n<p>For the fetching itself it uses the {@link qx.io.remote.Request} class and \nfor parsing the loaded javascript objects into qooxdoo objects, the \n{@link qx.data.marshal.Json} class will be used.</p>"}},{type:"constructor",children:[{type:"method",attributes:{"overriddenFrom":"qx.core.Object","isCtor":"true","name":"ctor"},children:[{type:"params",children:[{type:"param",attributes:{"name":"url"},children:[{type:"desc",attributes:{"text":"<p>The url where to find the data.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}},{type:"entry",attributes:{"type":"null"}}]}]},{type:"param",attributes:{"name":"delegate"},children:[{type:"desc",attributes:{"text":"<p>The delegate containing one of the methods \n  specified in {@link qx.data.store.IStoreDelegate}.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Object"}}]}]}]}]}]},{type:"events",children:[{type:"event",attributes:{"name":"changeModel"},children:[{type:"desc",attributes:{"text":"Fired on change of the property {@link #model}."}},{type:"types",children:[{type:"entry",attributes:{"type":"qx.event.type.Data"}}]}]},{type:"event",attributes:{"name":"changeState"},children:[{type:"desc",attributes:{"text":"Fired on change of the property {@link #state}."}},{type:"types",children:[{type:"entry",attributes:{"type":"qx.event.type.Data"}}]}]},{type:"event",attributes:{"name":"changeUrl"},children:[{type:"desc",attributes:{"text":"Fired on change of the property {@link #url}."}},{type:"types",children:[{type:"entry",attributes:{"type":"qx.event.type.Data"}}]}]},{type:"event",attributes:{"name":"loaded"},children:[{type:"desc",attributes:{"text":"<p>Data event fired after the model has been created. The data will be the \ncreated model.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"qx.event.type.Data"}}]}]}]},{type:"methods",children:[{type:"method",attributes:{"access":"private","name":"__requestCompleteHandler"},children:[{type:"params",children:[{type:"param",attributes:{"name":"ev"},children:[{type:"desc",attributes:{"text":"<p>The event fired by the request.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"qx.io.remote.Response"}}]}]}]},{type:"desc",attributes:{"text":"<p>Handler for the completion of the requests. It invokes the creation of \nthe needed classes and instances for the fetched data using \n{@link qx.data.marshal.Json}.</p>"}}]},{type:"method",attributes:{"access":"protected","apply":"qx.data.store.Json#url","name":"_applyUrl"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>new value of the property</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]},{type:"param",attributes:{"name":"old"},children:[{type:"desc",attributes:{"text":"<p>previous value of the property (null if it was not yet set).</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]}]},{type:"desc",attributes:{"text":"<p>Applies changes of the property value of the property <code>url</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #_applyUrl}.</p>"}}]},{type:"method",attributes:{"access":"protected","name":"_createRequest"},children:[{type:"params",children:[{type:"param",attributes:{"name":"url"},children:[{type:"desc",attributes:{"text":"<p>The url for the request.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]}]},{type:"desc",attributes:{"text":"<p>Creates and sends a <span class=\"caps\">GET</span> request with the given url. Additionally two\nlisteners will be added for the state and the completed event of the \nrequest.</p>"}}]},{type:"method",attributes:{"name":"getModel","fromProperty":"model"},children:[{type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>model</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #model}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>(Computed) value of <code>model</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"getState","fromProperty":"state"},children:[{type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>state</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #state}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>(Computed) value of <code>state</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"getUrl","fromProperty":"url"},children:[{type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>url</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #url}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>(Computed) value of <code>url</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"access":"protected","name":"initModel","fromProperty":"model"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>Initial value for property <code>model</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>model</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #model}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>the default value</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"access":"protected","name":"initState","fromProperty":"state"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>Initial value for property <code>state</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>state</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #state}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>the default value</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"access":"protected","name":"initUrl","fromProperty":"url"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>Initial value for property <code>url</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>url</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #url}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>the default value</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"reload"},children:[{type:"desc",attributes:{"text":"<p>Reloads the data with the url set in the {@link #url} property.</p>"}}]},{type:"method",attributes:{"name":"resetModel","fromProperty":"model"},children:[{type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>model</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #model}.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"name":"resetState","fromProperty":"state"},children:[{type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>state</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #state}.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"name":"resetUrl","fromProperty":"url"},children:[{type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>url</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #url}.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"name":"setModel","fromProperty":"model"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>New value for property <code>model</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>model</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #model}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"setState","fromProperty":"state"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>New value for property <code>state</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>state</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #state}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"setUrl","fromProperty":"url"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>New value for property <code>url</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>url</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #url}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]}]},{type:"properties",children:[{type:"property",attributes:{"event":"changeModel","allowNull":"true","name":"model","propertyType":"new"},children:[{type:"desc",attributes:{"text":"<p>Property for holding the loaded model instance.</p>"}}]},{type:"property",attributes:{"event":"changeState","possibleValues":"\"configured\",\"queued\",\"sending\",\"receiving\",\"completed\",\"aborted\",\"timeout\",\"failed\"","defaultValue":"\"configured\"","name":"state","propertyType":"new"},children:[{type:"desc",attributes:{"text":"<p>The state of the request as an url. If you want to check if the request \ndid his job, use, the {@link #changeState} event and check for one of the\nlisted values.</p>"}}]},{type:"property",attributes:{"event":"changeUrl","apply":"_applyUrl","check":"String","name":"url","propertyType":"new"},children:[{type:"desc",attributes:{"text":"<p>The url where the request should go to.</p>"}}]}]}]}
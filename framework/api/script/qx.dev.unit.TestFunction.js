{type:"class",attributes:{"name":"TestFunction","packageName":"qx.dev.unit","superClass":"qx.core.Object","fullName":"qx.dev.unit.TestFunction","type":"class"},children:[{type:"desc",attributes:{"text":"<p>Wrapper object for a method containing unit test code.</p>"}},{type:"constructor",children:[{type:"method",attributes:{"overriddenFrom":"qx.core.Object","isCtor":"true","name":"ctor"},children:[{type:"params",children:[{type:"param",attributes:{"defaultValue":"null","name":"clazz"},children:[{type:"desc",attributes:{"text":"<p>The test class, which contains the test method</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Class"}}]}]},{type:"param",attributes:{"defaultValue":"null","name":"methodName"},children:[{type:"desc",attributes:{"text":"<p>The name of the method</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]},{type:"param",attributes:{"defaultValue":"null","name":"testFunction"},children:[{type:"desc",attributes:{"text":"<p>A reference to a test function. If this\n   parameter is set the other parameters are ignored.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Function"}}]}]}]},{type:"desc",attributes:{"text":"<p>There are two ways to define a test function. First by passing a class\nand a method name to the contructor or second by giving a the method\ndirectly.</p>"}}]}]},{type:"methods",children:[{type:"method",attributes:{"access":"protected","apply":"qx.dev.unit.TestFunction#testClass","name":"_applyTestClass"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>new value of the property</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Class"}}]}]},{type:"param",attributes:{"name":"old"},children:[{type:"desc",attributes:{"text":"<p>previous value of the property (null if it was not yet set).</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Class"}}]}]}]},{type:"desc",attributes:{"text":"<p>Applies changes of the property value of the property <code>testClass</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #_applyTestClass}.</p>"}}]},{type:"method",attributes:{"name":"getClassName","fromProperty":"className"},children:[{type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>className</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #className}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>(Computed) value of <code>className</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"getFullName"},children:[{type:"desc",attributes:{"text":"<p>Get the full name of the test.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>The test&#8217;s full name</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]}]},{type:"method",attributes:{"name":"getName","fromProperty":"name"},children:[{type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>name</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #name}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>(Computed) value of <code>name</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"getTestClass","fromProperty":"testClass"},children:[{type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>testClass</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #testClass}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>(Computed) value of <code>testClass</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"getTestFunction","fromProperty":"testFunction"},children:[{type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>testFunction</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #testFunction}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>(Computed) value of <code>testFunction</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"access":"protected","name":"initClassName","fromProperty":"className"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>Initial value for property <code>className</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>className</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #className}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>the default value</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"access":"protected","name":"initName","fromProperty":"name"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>Initial value for property <code>name</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>name</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #name}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>the default value</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"access":"protected","name":"initTestClass","fromProperty":"testClass"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>Initial value for property <code>testClass</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>testClass</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #testClass}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>the default value</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"access":"protected","name":"initTestFunction","fromProperty":"testFunction"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>Initial value for property <code>testFunction</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>testFunction</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #testFunction}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>the default value</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"resetClassName","fromProperty":"className"},children:[{type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>className</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #className}.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"name":"resetName","fromProperty":"name"},children:[{type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>name</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #name}.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"name":"resetTestClass","fromProperty":"testClass"},children:[{type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>testClass</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #testClass}.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"name":"resetTestFunction","fromProperty":"testFunction"},children:[{type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>testFunction</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #testFunction}.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"name":"run"},children:[{type:"params",children:[{type:"param",attributes:{"name":"testResult"},children:[{type:"desc",attributes:{"text":"<p>The class used to log the test result.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"TestResult"}}]}]}]},{type:"desc",attributes:{"text":"<p>Runs the test and logs the test result to a {@link TestResult} instance,</p>"}}]},{type:"method",attributes:{"name":"setClassName","fromProperty":"className"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>New value for property <code>className</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>className</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #className}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"setName","fromProperty":"name"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>New value for property <code>name</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>name</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #name}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"setTestClass","fromProperty":"testClass"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>New value for property <code>testClass</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>testClass</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #testClass}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"setTestFunction","fromProperty":"testFunction"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>New value for property <code>testFunction</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>testFunction</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #testFunction}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"setUp"},children:[{type:"desc",attributes:{"text":"<p>Call the test class&#8217; <code>setUp</code> method.</p>"}}]},{type:"method",attributes:{"name":"tearDown"},children:[{type:"desc",attributes:{"text":"<p>Call the test class&#8217; <code>tearDown</code> method.</p>"}}]}]},{type:"properties",children:[{type:"property",attributes:{"check":"String","defaultValue":"\"\"","name":"className","propertyType":"new"},children:[{type:"desc",attributes:{"text":"<p>Name of the class containing the test</p>"}}]},{type:"property",attributes:{"check":"String","name":"name","propertyType":"new"},children:[{type:"desc",attributes:{"text":"<p>Name of the test</p>"}}]},{type:"property",attributes:{"check":"Class","apply":"_applyTestClass","defaultValue":"null","name":"testClass","propertyType":"new"},children:[{type:"desc",attributes:{"text":"<p>The test class</p>"}}]},{type:"property",attributes:{"check":"Function","name":"testFunction","propertyType":"new"},children:[{type:"desc",attributes:{"text":"<p>The test function</p>"}}]}]}]}
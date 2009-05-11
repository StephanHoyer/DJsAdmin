{type:"class",attributes:{"isStatic":"true","name":"EditDistance","packageName":"qx.util","fullName":"qx.util.EditDistance","type":"class"},children:[{type:"desc",attributes:{"text":"<p>Class to implement different edit distance ideas.</p>\n\n<p>{@link <a href=\"http://en.wikipedia.org/wiki/Edit_distance\">http://en.wikipedia.org/wiki/Edit_distance</a>}\n{@link <a href=\"http://en.wikipedia.org/wiki/Levenshtein_distance\">http://en.wikipedia.org/wiki/Levenshtein_distance</a>}\n{@link <a href=\"http://ad.informatik.uni-freiburg.de/lehre/ws9900/algorithmentheorie/vorlesung/folien/dynamische-programmierung-2/dynamische-programmierung-2.pdf\">http://ad.informatik.uni-freiburg.de/lehre/ws9900/algorithmentheorie/vorlesung/folien/dynamische-programmierung-2/dynamische-programmierung-2.pdf</a>}</p>"}},{type:"methods-static",children:[{type:"method",attributes:{"access":"private","isStatic":"true","name":"__computeEditOperations"},children:[{type:"params",children:[{type:"param",attributes:{"name":"distance"},children:[{type:"desc",attributes:{"text":"<p>Precomputed matrix for the data fields</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Integer","dimensions":"2"}}]}]},{type:"param",attributes:{"name":"dataA"},children:[{type:"desc",attributes:{"text":"<p>incoming source data</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Array"}}]}]},{type:"param",attributes:{"name":"dataB"},children:[{type:"desc",attributes:{"text":"<p>incoming target data</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Array"}}]}]}]},{type:"desc",attributes:{"text":"<p>Computes the operations needed to transform dataA to dataB.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>Array of maps describing the operations needed</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Map","dimensions":"1"}}]}]}]},{type:"method",attributes:{"access":"private","isStatic":"true","name":"__computeLevenshteinDistance"},children:[{type:"params",children:[{type:"param",attributes:{"name":"dataA"},children:[{type:"desc",attributes:{"text":"<p>incoming source data</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Array"}}]}]},{type:"param",attributes:{"name":"dataB"},children:[{type:"desc",attributes:{"text":"<p>incoming target data</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Array"}}]}]}]},{type:"desc",attributes:{"text":"<p>Returns a distant matrix following a concept\nnamed Levenshtein distance for two data structures</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>outgoing matrix</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Integer","dimensions":"2"}}]}]}]},{type:"method",attributes:{"isStatic":"true","name":"getEditOperations"},children:[{type:"params",children:[{type:"param",attributes:{"name":"dataA"},children:[{type:"desc",attributes:{"text":"<p>incoming source data</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Array"}}]}]},{type:"param",attributes:{"name":"dataB"},children:[{type:"desc",attributes:{"text":"<p>incoming target data</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Array"}}]}]}]},{type:"desc",attributes:{"text":"<p>Returns the operations needed to transform dataA to dataB.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>Array of maps describing the operations needed</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Map","dimensions":"1"}}]}]}]}]},{type:"constants",children:[{type:"constant",attributes:{"type":"Number","name":"OPERATION_REPLACE","value":"3"}},{type:"constant",attributes:{"type":"Number","name":"OPERATION_DELETE","value":"1"}},{type:"constant",attributes:{"type":"Number","name":"OPERATION_INSERT","value":"2"}}]}]}
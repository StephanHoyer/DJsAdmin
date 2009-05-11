{type:"class",attributes:{"name":"BaseArray","packageName":"qx.type","childClasses":"qx.bom.Collection,qx.type.Array,qx.util.StringBuilder","fullName":"qx.type.BaseArray","type":"class"},children:[{type:"desc",attributes:{"text":"<p>This class is the common superclass for all array classes in\nqooxdoo. It supports all of the shiny 1.6 JavaScript array features\nlike <code>forEach</code> and <code>map</code>.</p>\n\n<p>This class may be instantiated instead of the native Array if\none wants to work with a feature-unified Array instead of the native\none. This class uses native features whereever possible but fills\nall missing implementations with custom ones.</p>\n\n<p>Through the ability to extend from this class one could add even \nmore utility features on top of it.</p>"}},{type:"constructor",children:[{type:"method",attributes:{"isCtor":"true","name":"ctor"},children:[{type:"params",children:[{type:"param",attributes:{"name":"length"},children:[{type:"desc",attributes:{"text":"<p>The length of the array</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Integer"}}]}]}]},{type:"desc",attributes:{"text":"<p>Creates a new Array with the given length or the listed elements.</p>\n\n<pre class=\"javascript\">\nvar arr1 = new qx.type.BaseArray(arrayLength);\nvar arr2 = new qx.type.BaseArray(element0, element1, ..., elementN);\n</pre>\n\n<ul>\n<li><code>arrayLength</code>: The initial length of the array. You can access <br />\nthis value using the length property. If the value specified is not a <br />\nnumber, an array of length 1 is created, with the first element having <br />\nthe specified value. The maximum length allowed for an <br />\narray is 4,294,967,295. </li>\n<li><code>elementN</code>:  A value for the element in that position in the <br />\narray. When this formis used, the array is initialized with the specified <br />\nvalues as its elements, and the array&#8217;s length property is set to the <br />\nnumber of arguments.</li>\n</ul>"}}]}]},{type:"methods",children:[{type:"method",attributes:{"name":"concat"},children:[{type:"params",children:[{type:"param",attributes:{"name":"varargs"},children:[{type:"desc",attributes:{"text":"<p>Arrays and/or values to concatenate to the resulting array.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Array"}},{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Returns a new array comprised of this array joined with other array(s) and/or value(s).</p>\n\n<p>This method do not modify the array and return a modified copy of the original.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>New array built of the given arrays or values.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Array"}}]}]}]},{type:"method",attributes:{"name":"every"},children:[{type:"params",children:[{type:"param",attributes:{"name":"callback"},children:[{type:"desc",attributes:{"text":"<p>Function to test for each element.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Function"}}]}]},{type:"param",attributes:{"name":"obj"},children:[{type:"desc",attributes:{"text":"<p>Object to use as <code>this</code> when executing <code>callback</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Object"}}]}]}]},{type:"desc",attributes:{"text":"<p>Tests whether all elements in the array pass the test implemented by the provided function.</p>\n\n<code>every</code> executes the provided <code>callback</code> function once for each element\npresent in the array until it finds one where <code>callback</code> returns a false value. If\nsuch an element is found, the <code>every</code> method immediately returns <code>false</code>.\nOtherwise, if <code>callback</code> returned a true value for all elements, <code>every</code>\nwill return <code>true</code>.  <code>callback</code> is invoked only for indexes of the array\nwhich have assigned values; it is not invoked for indexes which have been deleted or which have\nnever been assigned values.\n\n<code>callback</code> is invoked with three arguments: the value of the element, the index of\nthe element, and the Array object being traversed.\n\n<p>If a <code>obj</code> parameter is provided to <code>every</code>, it will be used as\nthe <code>this</code> for each invocation of the <code>callback</code>. If it is not provided,\nor is <code>null</code>, the global object associated with <code>callback</code> is used instead.</p>\n\n<code>every</code> does not mutate the array on which it is called. The range of elements processed\nby <code>every</code> is set before the first invocation of <code>callback</code>. Elements which\nare appended to the array after the call to <code>every</code> begins will not be visited by\n<code>callback</code>.  If existing elements of the array are changed, their value as passed\nto <code>callback</code> will be the value at the time <code>every</code> visits them; elements\nthat are deleted are not visited."}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>Whether all elements passed the test</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Boolean"}}]}]}]},{type:"method",attributes:{"name":"filter"},children:[{type:"params",children:[{type:"param",attributes:{"name":"callback"},children:[{type:"desc",attributes:{"text":"<p>Function to test each element of the array.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Function"}}]}]},{type:"param",attributes:{"name":"obj"},children:[{type:"desc",attributes:{"text":"<p>Object to use as <code>this</code> when executing <code>callback</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Object"}}]}]}]},{type:"desc",attributes:{"text":"<p>Creates a new array with all elements that pass the test implemented by the provided\nfunction.</p>\n\n<code>filter</code> calls a provided <code>callback</code> function once for each\nelement in an array, and constructs a new array of all the values for which\n<code>callback</code> returns a true value.  <code>callback</code> is invoked only\nfor indexes of the array which have assigned values; it is not invoked for indexes\nwhich have been deleted or which have never been assigned values.  Array elements which\ndo not pass the <code>callback</code> test are simply skipped, and are not included\nin the new array.\n\n<code>callback</code> is invoked with three arguments: the value of the element, the\nindex of the element, and the Array object being traversed.\n\n<p>If a <code>obj</code> parameter is provided to <code>filter</code>, it will\nbe used as the <code>this</code> for each invocation of the <code>callback</code>.\nIf it is not provided, or is <code>null</code>, the global object associated with\n<code>callback</code> is used instead.</p>\n\n<code>filter</code> does not mutate the array on which it is called. The range of\nelements processed by <code>filter</code> is set before the first invocation of\n<code>callback</code>. Elements which are appended to the array after the call to\n<code>filter</code> begins will not be visited by <code>callback</code>. If existing\nelements of the array are changed, or deleted, their value as passed to <code>callback</code>\nwill be the value at the time <code>filter</code> visits them; elements that are deleted\nare not visited."}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>The newly created array with all matching elements</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"BaseArray"}}]}]}]},{type:"method",attributes:{"name":"forEach"},children:[{type:"params",children:[{type:"param",attributes:{"name":"callback"},children:[{type:"desc",attributes:{"text":"<p>Function to execute for each element.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Function"}}]}]},{type:"param",attributes:{"name":"obj"},children:[{type:"desc",attributes:{"text":"<p>Object to use as this when executing callback.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Object"}}]}]}]},{type:"desc",attributes:{"text":"<p>Executes a provided function once per array element.</p>\n\n<code>forEach</code> executes the provided function (<code>callback</code>) once for each\nelement present in the array.  <code>callback</code> is invoked only for indexes of the array\nwhich have assigned values; it is not invoked for indexes which have been deleted or which\nhave never been assigned values.\n\n<code>callback</code> is invoked with three arguments: the value of the element, the index\nof the element, and the Array object being traversed.\n\n<p>If a <code>obj</code> parameter is provided to <code>forEach</code>, it will be used\nas the <code>this</code> for each invocation of the <code>callback</code>.  If it is not\nprovided, or is <code>null</code>, the global object associated with <code>callback</code>\nis used instead.</p>\n\n<code>forEach</code> does not mutate the array on which it is called.\n\n<p>The range of elements processed by <code>forEach</code> is set before the first invocation of\n<code>callback</code>.  Elements which are appended to the array after the call to\n<code>forEach</code> begins will not be visited by <code>callback</code>. If existing elements\nof the array are changed, or deleted, their value as passed to <code>callback</code> will be\nthe value at the time <code>forEach</code> visits them; elements that are deleted are not visited.</p>"}}]},{type:"method",attributes:{"name":"indexOf"},children:[{type:"params",children:[{type:"param",attributes:{"name":"searchElement"},children:[{type:"desc",attributes:{"text":"<p>Element to locate in the array.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]},{type:"param",attributes:{"defaultValue":"0","name":"fromIndex"},children:[{type:"desc",attributes:{"text":"<p>The index at which to begin the search. Defaults to 0, i.e. the \n  whole array will be searched. If the index is greater than or equal to the length of the \n  array, -1 is returned, i.e. the array will not be searched. If negative, it is taken as \n  the offset from the end of the array. Note that even when the index is negative, the array \n  is still searched from front to back. If the calculated index is less than 0, the whole \n  array will be searched.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Integer"}}]}]}]},{type:"desc",attributes:{"text":"<p>Returns the first (least) index of an element within the array equal to the specified value, or -1 if none is found.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>The index of the given element</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Integer"}}]}]}]},{type:"method",attributes:{"name":"join"},children:[{type:"params",children:[{type:"param",attributes:{"name":"separator"},children:[{type:"desc",attributes:{"text":"<p>Specifies a string to separate each element of the array. The separator is \n  converted to a string if necessary. If omitted, the array elements are separated with a comma.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]}]},{type:"desc",attributes:{"text":"<p>Joins all elements of an array into a string.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>The stringified values of all elements divided by the given separator.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]}]},{type:"method",attributes:{"name":"lastIndexOf"},children:[{type:"params",children:[{type:"param",attributes:{"name":"searchElement"},children:[{type:"desc",attributes:{"text":"<p>Element to locate in the array.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]},{type:"param",attributes:{"defaultValue":"length","name":"fromIndex"},children:[{type:"desc",attributes:{"text":"<p>The index at which to start searching backwards. Defaults to \n  the array&#8217;s length, i.e. the whole array will be searched. If the index is greater than \n  or equal to the length of the array, the whole array will be searched. If negative, it \n  is taken as the offset from the end of the array. Note that even when the index is \n  negative, the array is still searched from back to front. If the calculated index is \n  less than 0, -1 is returned, i.e. the array will not be searched.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Integer"}}]}]}]},{type:"desc",attributes:{"text":"<p>Returns the last (greatest) index of an element within the array equal to the specified value, or -1 if none is found.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>The index of the given element</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Integer"}}]}]}]},{type:"method",attributes:{"name":"map"},children:[{type:"params",children:[{type:"param",attributes:{"name":"callback"},children:[{type:"desc",attributes:{"text":"<p>Function produce an element of the new Array from an element of the current one.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Function"}}]}]},{type:"param",attributes:{"name":"obj"},children:[{type:"desc",attributes:{"text":"<p>Object to use as <code>this</code> when executing <code>callback</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Object"}}]}]}]},{type:"desc",attributes:{"text":"<p>Creates a new array with the results of calling a provided function on every element in this array.</p>\n\n<code>map</code> calls a provided <code>callback</code> function once for each element in an array,\nin order, and constructs a new array from the results.  <code>callback</code> is invoked only for\nindexes of the array which have assigned values; it is not invoked for indexes which have been\ndeleted or which have never been assigned values.\n\n<code>callback</code> is invoked with three arguments: the value of the element, the index of the\nelement, and the Array object being traversed.\n\n<p>If a <code>obj</code> parameter is provided to <code>map</code>, it will be used as the\n<code>this</code> for each invocation of the <code>callback</code>. If it is not provided, or is\n<code>null</code>, the global object associated with <code>callback</code> is used instead.</p>\n\n<code>map</code> does not mutate the array on which it is called.\n\n<p>The range of elements processed by <code>map</code> is set before the first invocation of\n<code>callback</code>. Elements which are appended to the array after the call to <code>map</code>\nbegins will not be visited by <code>callback</code>.  If existing elements of the array are changed,\nor deleted, their value as passed to <code>callback</code> will be the value at the time\n<code>map</code> visits them; elements that are deleted are not visited.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>A new array which contains the return values of every item executed through the given function</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"BaseArray"}}]}]}]},{type:"method",attributes:{"name":"pop"},children:[{type:"desc",attributes:{"text":"<p>Removes the last element from an array and returns that element.</p>\n\n<p>This method modifies the array.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>The last element of the array.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"push"},children:[{type:"params",children:[{type:"param",attributes:{"name":"varargs"},children:[{type:"desc",attributes:{"text":"<p>The elements to add to the end of the array.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Adds one or more elements to the end of an array and returns the new length of the array.</p>\n\n<p>This method modifies the array.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>The new array&#8217;s length</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Integer"}}]}]}]},{type:"method",attributes:{"name":"reverse"},children:[{type:"desc",attributes:{"text":"<p>Reverses the order of the elements of an array&#8212;the first becomes the last, and the last becomes the first.</p>\n\n<p>This method modifies the array.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>Returns the modified array (works in place)</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Array"}}]}]}]},{type:"method",attributes:{"name":"shift"},children:[{type:"desc",attributes:{"text":"<p>Removes the first element from an array and returns that element.</p>\n\n<p>This method modifies the array.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>The first element of the array.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"slice"},children:[{type:"params",children:[{type:"param",attributes:{"name":"begin"},children:[{type:"desc",attributes:{"text":"<p>Zero-based index at which to begin extraction. As a negative index, start indicates \n  an offset from the end of the sequence. slice(-2) extracts the second-to-last element and the last element \n  in the sequence.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Integer"}}]}]},{type:"param",attributes:{"defaultValue":"length","name":"end"},children:[{type:"desc",attributes:{"text":"<p>Zero-based index at which to end extraction. slice extracts up to but not including end. \n  <code>slice(1,4)</code> extracts the second element through the fourth element (elements indexed 1, 2, and 3). \n  As a negative index, end indicates an offset from the end of the sequence. slice(2,-1) extracts the third element through the second-to-last element in the sequence. \n  If end is omitted, slice extracts to the end of the sequence.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Integer"}}]}]}]},{type:"desc",attributes:{"text":"<p>Extracts a section of an array and returns a new array.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>An new array which contains a copy of the given region.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"BaseArray"}}]}]}]},{type:"method",attributes:{"name":"some"},children:[{type:"params",children:[{type:"param",attributes:{"name":"callback"},children:[{type:"desc",attributes:{"text":"<p>Function to test for each element.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Function"}}]}]},{type:"param",attributes:{"name":"obj"},children:[{type:"desc",attributes:{"text":"<p>Object to use as <code>this</code> when executing <code>callback</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Object"}}]}]}]},{type:"desc",attributes:{"text":"<p>Tests whether some element in the array passes the test implemented by the provided function.</p>\n\n<code>some</code> executes the <code>callback</code> function once for each element present in\nthe array until it finds one where <code>callback</code> returns a true value. If such an element\nis found, <code>some</code> immediately returns <code>true</code>. Otherwise, <code>some</code>\nreturns <code>false</code>. <code>callback</code> is invoked only for indexes of the array which\nhave assigned values; it is not invoked for indexes which have been deleted or which have never\nbeen assigned values.\n\n<code>callback</code> is invoked with three arguments: the value of the element, the index of the\nelement, and the Array object being traversed.\n\n<p>If a <code>obj</code> parameter is provided to <code>some</code>, it will be used as the\n<code>this</code> for each invocation of the <code>callback</code>. If it is not provided, or is\n<code>null</code>, the global object associated with <code>callback</code> is used instead.</p>\n\n<code>some</code> does not mutate the array on which it is called.\n\n<p>The range of elements processed by <code>some</code> is set before the first invocation of\n<code>callback</code>.  Elements that are appended to the array after the call to <code>some</code>\nbegins will not be visited by <code>callback</code>. If an existing, unvisited element of the array\nis changed by <code>callback</code>, its value passed to the visiting <code>callback</code> will\nbe the value at the time that <code>some</code> visits that element&#8217;s index; elements that are\ndeleted are not visited.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>Whether at least one elements passed the test</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Boolean"}}]}]}]},{type:"method",attributes:{"name":"sort"},children:[{type:"params",children:[{type:"param",attributes:{"defaultValue":"null","name":"compareFunction"},children:[{type:"desc",attributes:{"text":"<p>Specifies a function that defines the sort order. If omitted, \n  the array is sorted lexicographically (in dictionary order) according to the string conversion of each element.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Function"}}]}]}]},{type:"desc",attributes:{"text":"<p>Sorts the elements of an array.</p>\n\n<p>This method modifies the array.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>Returns the modified array (works in place)</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Array"}}]}]}]},{type:"method",attributes:{"name":"splice"},children:[{type:"params",children:[{type:"param",attributes:{"name":"index"},children:[{type:"desc",attributes:{"text":"<p>Index at which to start changing the array. If negative, will begin \n  that many elements from the end.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Integer"}}]}]},{type:"param",attributes:{"name":"howMany"},children:[{type:"desc",attributes:{"text":"<p>An integer indicating the number of old array elements to remove. \n  If <code>howMany</code> is 0, no elements are removed. In this case, you should specify \n  at least one new element.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Integer"}}]}]},{type:"param",attributes:{"defaultValue":"null","name":"varargs"},children:[{type:"desc",attributes:{"text":"<p>The elements to add to the array. If you don&#8217;t specify any elements, \n  splice simply removes elements from the array.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Adds and/or removes elements from an array.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>New array with the removed elements.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"BaseArray"}}]}]}]},{type:"method",attributes:{"name":"toArray"},children:[{type:"desc",attributes:{"text":"<p>Converts a base array to a native Array</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>The native array</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Array"}}]}]}]},{type:"method",attributes:{"name":"toString"},children:[{type:"desc",attributes:{"text":"<p>Returns a string representing the array and its elements. Overrides the Object.prototype.toString method.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>The string representation of the array.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]}]},{type:"method",attributes:{"name":"unshift"},children:[{type:"params",children:[{type:"param",attributes:{"name":"varargs"},children:[{type:"desc",attributes:{"text":"<p>The elements to add to the front of the array.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Adds one or more elements to the front of an array and returns the new length of the array.</p>\n\n<p>This method modifies the array.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>The new array&#8217;s length</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Integer"}}]}]}]},{type:"method",attributes:{"name":"valueOf"},children:[{type:"desc",attributes:{"text":"<p>Returns the current number of items stored in the Array</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>number of items</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Integer"}}]}]}]}]}]}
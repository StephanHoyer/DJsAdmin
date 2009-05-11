{type:"class",attributes:{"name":"Axis","packageName":"qx.ui.virtual.core","superClass":"qx.core.Object","fullName":"qx.ui.virtual.core.Axis","type":"class"},children:[{type:"desc",attributes:{"text":"<p><span class=\"caps\">EXPERIMENTAL</span>!</p>\n\n<p>The axis maps virtual screen coordinates to item indexes. By default all\nitems have the same size but it is also possible to give specific items\na different size.</p>"}},{type:"constructor",children:[{type:"method",attributes:{"overriddenFrom":"qx.core.Object","isCtor":"true","name":"ctor"},children:[{type:"params",children:[{type:"param",attributes:{"name":"defaultItemSize"},children:[{type:"desc",attributes:{"text":"<p>The default size of the items</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Integer"}}]}]},{type:"param",attributes:{"name":"itemCount"},children:[{type:"desc",attributes:{"text":"<p>the number of item on the axis</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Integer"}}]}]}]}]}]},{type:"events",children:[{type:"event",attributes:{"name":"change"},children:[{type:"desc",attributes:{"text":"<p>Every change to the axis configuration triggers this event</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"qx.event.type.Event"}}]}]}]},{type:"methods",children:[{type:"method",attributes:{"access":"private","name":"__findRangeByIndex"},children:[{type:"params",children:[{type:"param",attributes:{"name":"index"},children:[{type:"desc",attributes:{"text":"<p>The index of the item to get the range for.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Integer"}}]}]}]},{type:"desc",attributes:{"text":"<p>Returns the range, which contains the position</p>\n\n<p>Complexity: O(log n) (n = number of custom sized cells)</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>The range for the index.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Map"}}]}]}]},{type:"method",attributes:{"access":"private","name":"__findRangeByPosition"},children:[{type:"params",children:[{type:"param",attributes:{"name":"position"},children:[{type:"desc",attributes:{"text":"<p>the position</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Integer"}}]}]}]},{type:"desc",attributes:{"text":"<p>Returns the range, which contains the position</p>\n\n<p>Complexity: O(log n) (n = number of custom sized cells)</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>The range, which contains the given position.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Map"}}]}]}]},{type:"method",attributes:{"access":"private","name":"__getRanges"},children:[{type:"desc",attributes:{"text":"<p>Split the the position range into disjunct intervals. Each interval starts\nwith a custom sized cell. Each position is contained in exactly one range.\nThe ranges are sorted according to their start position.</p>\n\n<p>Complexity: O(n log n) (n = number of custom sized cells)</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>the sorted list of ranges.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Map","dimensions":"1"}}]}]}]},{type:"method",attributes:{"name":"getDefaultItemSize"},children:[{type:"desc",attributes:{"text":"<p>Get the default size of the items</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>the default item size</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Integer"}}]}]}]},{type:"method",attributes:{"name":"getItemAtPosition"},children:[{type:"params",children:[{type:"param",attributes:{"name":"position"},children:[{type:"desc",attributes:{"text":"<p>The position to get the item for</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Integer"}}]}]}]},{type:"desc",attributes:{"text":"<p>Get the item and the offset into the item at the given position</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>A map with the keys <code>index</code> and \n   <code>offset</code>. The index is the index of the item containing the\n   position and offsets specifies offset into this item. If the position\n   is outside of the range both have the value <code>null</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Map"}}]}]}]},{type:"method",attributes:{"name":"getItemCount"},children:[{type:"desc",attributes:{"text":"<p>Get the number of items in the axis</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>The number of items</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Integer"}}]}]}]},{type:"method",attributes:{"name":"getItemPosition"},children:[{type:"params",children:[{type:"param",attributes:{"name":"index"},children:[{type:"desc",attributes:{"text":"<p>The item&#8217;s index</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Integer"}}]}]}]},{type:"desc",attributes:{"text":"<p>Get the start position of the item with the given index.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>The start position of the item. If the index is outside\n   of the axis range <code>null</code> is returned.&#8218;</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Integer"}},{type:"entry",attributes:{"type":"null"}}]}]}]},{type:"method",attributes:{"name":"getItemSize"},children:[{type:"params",children:[{type:"param",attributes:{"name":"index"},children:[{type:"desc",attributes:{"text":"<p>index of the item to get the size for</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Integer"}}]}]}]},{type:"desc",attributes:{"text":"<p>Get the size of the item at the given index</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>Size of the item</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Integer"}}]}]}]},{type:"method",attributes:{"name":"getItemSizes"},children:[{type:"params",children:[{type:"param",attributes:{"name":"startIndex"},children:[{type:"desc",attributes:{"text":"<p>The index of the first item</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Integer"}}]}]},{type:"param",attributes:{"name":"minSizeSum"},children:[{type:"desc",attributes:{"text":"<p>The minimum sum of the item sizes</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Integer"}}]}]}]},{type:"desc",attributes:{"text":"<p>Get an array of item sizes starting with the item at &#8220;startIndex&#8221;. The\nsum of all sizes in the returned array is at least &#8220;minSizeSum&#8221;.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>List of item sizes starting with the size of the item\n   at index <code>startIndex</code>. The sum of the item sizes is at least\n   <code>minSizeSum</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Integer","dimensions":"1"}}]}]}]},{type:"method",attributes:{"name":"getTotalSize"},children:[{type:"desc",attributes:{"text":"<p>Returns the sum of all cell sizes</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>The sum of all item sizes</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Integer"}}]}]}]},{type:"method",attributes:{"name":"resetItemSizes"},children:[{type:"desc",attributes:{"text":"<p>Reset all custom sizes set with {@link #setItemSize}.</p>"}}]},{type:"method",attributes:{"name":"setDefaultItemSize"},children:[{type:"params",children:[{type:"param",attributes:{"name":"defaultItemSize"},children:[{type:"desc",attributes:{"text":"<p>The default size of the items</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Integer"}}]}]}]},{type:"desc",attributes:{"text":"<p>Set the default size the items</p>"}}]},{type:"method",attributes:{"name":"setItemCount"},children:[{type:"params",children:[{type:"param",attributes:{"name":"itemCount"},children:[{type:"desc",attributes:{"text":"<p>The new item count</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Integer"}}]}]}]},{type:"desc",attributes:{"text":"<p>Set the number of items in the axis.</p>"}}]},{type:"method",attributes:{"name":"setItemSize"},children:[{type:"params",children:[{type:"param",attributes:{"name":"index"},children:[{type:"desc",attributes:{"text":"<p>index of the item to change</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Integer"}}]}]},{type:"param",attributes:{"name":"size"},children:[{type:"desc",attributes:{"text":"<p>New size of the item</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Integer"}}]}]}]},{type:"desc",attributes:{"text":"<p>Sets the size of a specific item. This allow item, which have a size \ndifferent from the default size.</p>"}}]}]}]}
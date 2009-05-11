{type:"class",attributes:{"isStatic":"true","name":"Selector","packageName":"qx.bom","fullName":"qx.bom.Selector","type":"bootstrap"},children:[{type:"desc",attributes:{"text":"<p>The selector engine supports virtually all <span class=\"caps\">CSS</span> 3 Selectors &#8211; this \neven includes some parts that are infrequently implemented such as \nescaped selectors (<code>.foo\\+bar</code>), Unicode selectors, and results \nreturned in document order. There are a few notable exceptions to \nthe <span class=\"caps\">CSS</span> 3 selector support:</p>\n\n<ul>\n<li><code>:root</code></li>\n<li><code>:target</code></li>\n<li><code>:nth-last-child</code></li>\n<li><code>:nth-of-type</code></li>\n<li><code>:nth-last-of-type</code></li>\n<li><code>:first-of-type</code></li>\n<li><code>:last-of-type</code></li>\n<li><code>:only-of-type</code></li>\n<li><code>:lang()</code></li>\n</ul>\n\n<p>In addition to the <span class=\"caps\">CSS</span> 3 Selectors the engine supports the following \nadditional selectors or conventions.</p>\n\n<p><strong>Changes</strong></p>\n\n<ul>\n<li><code>:not(a.b)</code>: Supports non-simple selectors in :not() (most browsers only support :not(a), for example).</li>\n<li><code>:not(div > p)</code>: Supports full selectors in :not().</li>\n<li><code>:not(div, p)</code>: Supports multiple selectors in :not().</li>\n<li><code>[NAME=VALUE]</code>: Doesn&#8217;t require quotes around the specified value in an attribute selector.</li>\n</ul>\n\n<p><strong>Additions</strong></p>\n\n<ul>\n<li><code>[NAME!=VALUE]</code>: Finds all elements whose <span class=\"caps\">NAME</span> attribute doesn&#8217;t match the specified value. Is equivalent to doing :not([NAME=VALUE]).</li>\n<li><code>:contains(TEXT)</code>: Finds all elements whose textual context contains the word &#8216;TEXT&#8217; (case sensitive).</li>\n<li><code>:header</code>: Finds all elements that are a header element (h1, h2, h3, h4, h5, h6).</li>\n<li><code>:parent</code>: Finds all elements that contains another element.</li>\n</ul>\n\n<p><strong>Positional Selector Additions</strong></p>\n\n<ul>\n<li><code>:first</code>/</code>:last</code>: Finds the first or last matching element on the page. (e.g. &#8220;div:first&#8221; would find the first div on the page, in document order)</li>\n<li><code>:even</code>/<code>:odd</code>: Finds every other element on the page (counting begins at 0, so :even would match the first element).</li>\n<li><code>:eq</code>/<code>:nth</code>: Finds the Nth element on the page (e.g. :eq(5) finds the 6th element on the page).</li>\n<li><code>:lt</code>/<code>:gt</code>: Finds all elements at positions less than or greater than the specified positions.</li>\n</ul>\n\n<p><strong>Form Selector Additions</strong></p>\n\n<ul>\n<li><code>:input</code>: Finds all input elements (includes textareas, selects, and buttons).</li>\n<li><code>:text</code>, <code>:checkbox</code>, <code>:file</code>, <code>:password</code>, <code>:submit</code>, <code>:image</code>, <code>:reset</code>, <code>:button</code>: Finds the input element with the specified input type (<code>:button</code> also finds button elements).</li>\n</ul>\n\n<p>Based on Sizzle by John Resig, see also:</p>\n\n<ul>\n<li><a href=\"http://sizzlejs.com/\">http://sizzlejs.com/</a></li>\n</ul>\n\n<p>For further usage details, also have a look at the Wiki page under:</p>\n\n<ul>\n<li><a href=\"http://wiki.github.com/jeresig/sizzle\">http://wiki.github.com/jeresig/sizzle</a></li>\n</ul>"}},{type:"methods-static",children:[{type:"method",attributes:{"isStatic":"true","name":"matches"},children:[{type:"params",children:[{type:"param",attributes:{"name":"selector"},children:[{type:"desc",attributes:{"text":"<p>Selector to filter given set</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]},{type:"param",attributes:{"name":"set"},children:[{type:"desc",attributes:{"text":"<p>List to filter according to given selector</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Array"}}]}]}]},{type:"desc",attributes:{"text":"<p>Returns an reduced array which only contains the elements from the given\narray which matches the given selector</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>New array containing matching elements</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Array"}}]}]}]},{type:"method",attributes:{"isStatic":"true","name":"query"},children:[{type:"params",children:[{type:"param",attributes:{"name":"selector"},children:[{type:"desc",attributes:{"text":"<p>Valid selector (CSS3 + extensions)</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]},{type:"param",attributes:{"name":"context"},children:[{type:"desc",attributes:{"text":"<p>Context element (result elements must be children of this element)</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Element"}}]}]}]},{type:"desc",attributes:{"text":"<p>Queries the document for the given selector. Supports all CSS3 selectors \nplus some extensions as mentioned in the class description.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>Matching elements</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Array"}}]}]}]}]}]}
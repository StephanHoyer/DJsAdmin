{type:"class",attributes:{"isAbstract":"true","name":"Abstract","packageName":"qx.ui.progressive.renderer.table.cell","superClass":"qx.core.Object","childClasses":"qx.ui.progressive.renderer.table.cell.Conditional,qx.ui.progressive.renderer.table.cell.Default,qx.ui.progressive.renderer.table.cell.Html,qx.ui.progressive.renderer.table.cell.Icon,qx.ui.progressive.renderer.table.cell.String","fullName":"qx.ui.progressive.renderer.table.cell.Abstract","type":"class"},children:[{type:"desc",attributes:{"text":"<p>Cell Renderer for Progressive&#8217;s Table.  <span class=\"caps\">EXPERIMENTAL</span>!  <span class=\"caps\">INTERFACE</span> <span class=\"caps\">MAY</span> <span class=\"caps\">CHANGE</span>.</p>\n\n<p>Many of the methods in this class accept a parameter called cellInfo.  This\nparameter is an object with the following members:</p>\n\n<dl>\n  <dt>\n    state\n  </dt>\n  <dd>\n    The {@link qx.ui.progressive.State} object pertaining to this rendering\n    session.\n  </dd>\n\n<dt>\n    rowDiv\n  </dt>\n  <dd>\n    The \"div\" DOM element of the row in which this cell is to be added.\n  </dd>\n\n<dt>\n    element\n  </dt>\n  <dd>\n    The entire element object returned by the data model.\n  </dd>\n\n<dt>\n    dataIndex\n  </dt>\n  <dd>\n    The index into the data element provided by the data model.\n    Effectively, this is the column number.\n  </dd>\n\n<dt>\n    cellData\n  </dt>\n  <dd>\n    The data from the data model, to be rendered.  This the specific column\n    data for the column being rendered, and is a shorthand for\n    element.data[element.dataIndex].\n  </dd>\n\n<dt>\n    height <span>Input/Output parameter!</span>\n  </dt>\n  <dd>\n    On input to a cell renderer, this contains the height, as determined to\n    date, for the current row.  The first column being rendered will\n    receive a height of zero.  Upon return, it may leave the height at\n    zero, meaning that it will accept any minimum height, or may specify a\n    minimum height by setting this member.  Subsequent column cell renderers\n    will receive the maximum height specified by any previous cell\n    renderer.  Upon completion of calling each of the cell renderers for a\n    row, the row height will be set to the value found in this member.\n  </dd>\n</dl>"}},{type:"methods",children:[{type:"method",attributes:{"access":"protected","name":"_getCellExtras"},children:[{type:"params",children:[{type:"param",attributes:{"name":"cellInfo"},children:[{type:"desc",attributes:{"text":"<p>See {@link qx.ui.progressive.renderer.table.cell.Abstract} class\n  description for details</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Object"}}]}]}]},{type:"desc",attributes:{"text":"<p>Retreve any extra attributes the cell renderer wants applied to this\ncell.  Extra attributes could be such things as\n&#8220;onclick=&#8216;handleClick()&#8217;;&#8221;</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>The extra attributes to be applied to this cell.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]}]},{type:"method",attributes:{"access":"protected","name":"_getCellStyle"},children:[{type:"params",children:[{type:"param",attributes:{"name":"cellInfo"},children:[{type:"desc",attributes:{"text":"<p>See {@link qx.ui.progressive.renderer.table.cell.Abstract} class\n  description for details</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Object"}}]}]}]},{type:"desc",attributes:{"text":"<p>Retrieve any style characteristics the cell renderer wants applied to\nthis cell.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>The style characteristics to be applied to this cell.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]}]},{type:"method",attributes:{"access":"protected","name":"_getContentHtml"},children:[{type:"params",children:[{type:"param",attributes:{"name":"cellInfo"},children:[{type:"desc",attributes:{"text":"<p>See {@link qx.ui.progressive.renderer.table.cell.Abstract} class\n  description for details</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Object"}}]}]}]},{type:"desc",attributes:{"text":"<p>Retreve the <span class=\"caps\">HTML</span> content to be added to the cell div.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>The <span class=\"caps\">HTML</span> content to be added to the cell div.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]}]},{type:"method",attributes:{"name":"render"},children:[{type:"params",children:[{type:"param",attributes:{"name":"cellInfo"},children:[{type:"desc",attributes:{"text":"<p>See {@link qx.ui.progressive.renderer.table.cell.Abstract} class\n  description for details</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Object"}}]}]}]},{type:"desc",attributes:{"text":"<p>Given the provided cell information, generate the <span class=\"caps\">HTML</span> for this\ncell.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>The <span class=\"caps\">HTML</span> required to create this cell.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]}]}]}]}
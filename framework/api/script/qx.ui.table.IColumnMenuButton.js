{type:"class",attributes:{"name":"IColumnMenuButton","packageName":"qx.ui.table","implementations":"qx.ui.table.columnmenu.Button","fullName":"qx.ui.table.IColumnMenuButton","type":"interface"},children:[{type:"desc",attributes:{"text":"<p>Interface for creating the column visibility menu</p>"}},{type:"methods",children:[{type:"method",attributes:{"name":"empty"},children:[{type:"desc",attributes:{"text":"<p>Empty the menu of all items, in preparation for building a new column\nvisibility menu.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"Void"}}]}]}]},{type:"method",attributes:{"name":"factory"},children:[{type:"params",children:[{type:"param",attributes:{"name":"item"},children:[{type:"desc",attributes:{"text":"<p>One of the following strings, indicating what type of\n  column-menu-specific object to instantiate:\n  <dl>\n    <dt>menu</dt>\n    <dd>\n      Instantiate a menu which will appear when the column visibility\n      button is pressed. No options are provided in this case. \n    </dd>\n    <dt>menu-button</dt>\n    <dd>\n      Instantiate a button to correspond to a column within the\n      table. The options are a map containing <i>text</i>, the name of\n      the column; <i>column</i>, the column number; and\n      <i>bVisible</i>, a boolean indicating whether this column is\n      currently visible. The instantiated return object must implement\n      interface {@link qx.ui.table.IColumnMenuItem}\n    </dd>\n    <dt>user-button</dt>\n    <dd>\n      Instantiate a button for other than a column name. This is used,\n      for example, to add the &#8220;Reset column widths&#8221; button when the\n      Resize column model is requested. The options is a map containing\n      <i>text</i>, the text to present in the button.\n    </dd>\n    <dt>separator</dt>\n    <dd>\n      Instantiate a separator object to added to the menu. This is\n      used, for example, to separate the table column name list from\n      the &#8220;Reset column widths&#8221; button when the Resize column model is\n      requested. No options are provided in this case.\n    </dd>\n  </dl></p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]},{type:"param",attributes:{"name":"options"},children:[{type:"desc",attributes:{"text":"<p>Options specific to the <i>item</i> being requested.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Map"}}]}]}]},{type:"desc",attributes:{"text":"<p>Instantiate a sub-widget.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>The instantiated object as specified by <i>item</i>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"qx.ui.core.Widget"}}]}]}]},{type:"method",attributes:{"name":"getMenu","fromProperty":"menu"},children:[{type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>menu</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #menu}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>(Computed) value of <code>menu</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"access":"protected","name":"initMenu","fromProperty":"menu"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>Initial value for property <code>menu</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>menu</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #menu}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>the default value</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"resetMenu","fromProperty":"menu"},children:[{type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>menu</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #menu}.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"name":"setMenu","fromProperty":"menu"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>New value for property <code>menu</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>menu</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #menu}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]}]},{type:"properties",children:[{type:"property",attributes:{"name":"menu","propertyType":"new"},children:[{type:"desc",attributes:{"text":"<p>The menu which is displayed when this button is pressed.</p>"}}]}]}]}
/* ************************************************************************

   qooxdoo - the new era of web development

   http://qooxdoo.org

   Copyright:
     2004-2009 1&1 Internet AG, Germany, http://www.1und1.de

   License:
     LGPL: http://www.gnu.org/licenses/lgpl.html
     EPL: http://www.eclipse.org/org/documents/epl-v10.php
     See the LICENSE file in the project's top-level directory for details.

   Authors:
   * Jonathan Weiß (jonathan_rass)
   * Fabian Jakobs (fjakobs)

************************************************************************ */

qx.Class.define("qx.test.ui.virtual.layer.HtmlCell",
{
  extend : qx.test.ui.virtual.layer.LayerTestCase,

  members :
  { 
    _createLayer : function() 
    {
      this.__cellRenderer = new qx.ui.virtual.cell.Cell();
      return new qx.ui.virtual.layer.HtmlCell(this);
    },
    
    
    getCellProperties : function(row, column) {
      return this.__cellRenderer.getCellProperties(row + " / " + column);
    },
    
    _assertCells : function(firstRow, lastRow, firstColumn, lastColumn, msg) 
    {
      var rowCount = lastRow - firstRow + 1;
      var columnCount = lastColumn - firstColumn + 1;
      var children = this.layer.getContentElement().getDomElement().childNodes;
      
      this.assertEquals(rowCount * columnCount, children.length);
      
      for (var y=0; y<rowCount; y++)
      {
        for (var x=0; x<columnCount; x++)
        {
          var row = firstRow + y;
          var column = firstColumn + x;
          
          var cellEl = children[y*columnCount + x];
          this.assertEquals(row + " / " + column, cellEl.innerHTML);
        }
      }
    }
  }
});

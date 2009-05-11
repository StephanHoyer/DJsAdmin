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
     * Fabian Jakobs (fjakobs)
     * Jonathan Weiß (jonathan_rass)

************************************************************************ */


/**
 * EXPERIMENTAL!
 * 
 * An extended WidgetCell layer, which adds the possibility to specify row and
 * column spans for specific cells. 
 */
qx.Class.define("qx.ui.virtual.layer.WidgetCellSpan",
{
  extend : qx.ui.virtual.layer.Abstract,
  
  implement : [
    qx.ui.virtual.core.IWidgetCellProvider
  ],
  
  include : [
    qx.ui.core.MChildrenHandling
  ],
  
  
  /**
   * @param htmlCellProvider {qx.ui.virtual.core.IHtmlCellProvider} This class
   *    provides the HTML markup for each cell.
   * @param rowConfig {qx.ui.virtual.core.Axis} The row configuration of the pane 
   *    in which the cells will be rendered
   * @param columnConfig {qx.ui.virtual.core.Axis} The column configuration of the pane 
   *    in which the cells will be rendered
   */    
  construct : function(htmlCellProvider, rowConfig, columnConfig)
  {
    this.base(arguments);
    this.setZIndex(2);
    
    this._spanManager = new qx.ui.virtual.layer.CellSpanManager(rowConfig, columnConfig);
    this._cellProvider = htmlCellProvider;
    this.__spacerPool = [];
    
    this._cellLayer = new qx.ui.virtual.layer.WidgetCell(this);
    this._setLayout(new qx.ui.layout.Grow());
    this._add(this._cellLayer);
  },
  
  
  /*
  *****************************************************************************
     PROPERTIES
  *****************************************************************************
  */

  properties :
  {
    // overridden
    anonymous :
    {
      refine: true,
      init: false
    }    
  },  
  
   
  /*
  *****************************************************************************
     MEMBERS
  *****************************************************************************
  */
 
  members :
  {    
    /**
     * Set the row and column span for a specific cell
     * 
     * @param row {PositiveInteger} The cell's row
     * @param column {PositiveInteger} The cell's column
     * @param rowSpan {PositiveInteger} The number of rows the cells spans
     * @param columnSpan {PositiveInteger} The number of columns the cells spans
     */
    setCellSpan : function(row, column, rowSpan, columnSpan)
    {
      var id = row + "x" + column;
      this._spanManager.removeCell(id);
      if (rowSpan > 1 || columnSpan > 1) {        
        this._spanManager.addCell(id, row, column, rowSpan, columnSpan);
      }
      qx.ui.core.queue.Widget.add(this);
    },
    
    
    // interface implementation
    getCellWidget : function(row, column)
    {
      if (!this._spanMap[row][column])
      {
        var widget = this._cellProvider.getCellWidget(row, column)
      }
      else
      {
        var widget = this.__spacerPool.pop();
        if (!widget) 
        {
          widget = new qx.ui.core.Spacer();
          widget.setUserData("spannedcell", 1);
        }
      }
      return widget;
    },
    
    
    // interface implementation
    poolCellWidget : function(widget)
    {
      if (widget.getUserData("spannedcell")) {
        this.__spacerPool.push(widget);
      } else {
        this._cellProvider.poolCellWidget(widget);
      }
    },      
    

    /**
     * Updates the fields <code>_cells</code>, <code>_bounds</code> and
     * <code>_spanMap</code> according to the given grid window.
     * 
     * @param firstRow {PositiveInteger} first visible row
     * @param lastRow {PositiveInteger} last visible row
     * @param firstColumn {PositiveInteger} first visible column
     * @param lastColumn {PositiveInteger} last visible column
     */
    __updateCellSpanData : function(firstRow, lastRow, firstColumn, lastColumn)
    {
      this._cells = this._spanManager.findCellsInWindow(
        firstRow, lastRow,
        firstColumn, lastColumn
      );      
      
      if (this._cells.length > 0)
      {
        this._bounds = this._spanManager.getCellBounds(
          this._cells, 
          firstRow, firstColumn
        );
        this._spanMap = this._spanManager.computeCellSpanMap(
          this._cells,
          firstRow, lastRow,
          firstColumn, lastColumn
        );
      }
      else
      {
        this._bounds = [];
        // create empty dummy map
        this._spanMap = [];
        for (var i=firstRow; i<= lastRow; i++) {
          this._spanMap[i] = [];
        }
      }      
    },
    
    
    /**
     * Updates the widget in spanned cells. 
     * 
     * Note: The method {@link #__updateCellSpanData} must be called before
     * this method is called:
     */
    __updateCellSpanWidgets : function()
    {
      // remove and pool existing cells
      var children = this.getChildren();
      for (var i=children.length-1; i>=0; i--)
      {
        var child = children[i];
        if (child !== this._cellLayer)
        {
          this._cellProvider.poolCellWidget(child);
          this._remove(child);
        }        
      }

      for (var i=0, l=this._cells.length; i<l; i++)
      {
        var cell = this._cells[i];
        var cellBounds = this._bounds[i];
        var cellWidget = this._cellProvider.getCellWidget(cell.firstRow, cell.firstColumn);
        if (cellWidget) 
        {
          cellWidget.setUserBounds(
            cellBounds.left, cellBounds.top,
            cellBounds.width, cellBounds.height
          );
          this._add(cellWidget);
        }
      }
    },
    
    
    // overridden
    _fullUpdate : function(
      firstRow, lastRow, 
      firstColumn, lastColumn, 
      rowSizes, columnSizes    
    )
    {
      this.__updateCellSpanData(firstRow, lastRow, firstColumn, lastColumn);
      this.__updateCellSpanWidgets();
      
      this._cellLayer.fullUpdate(
        firstRow, lastRow, 
        firstColumn, lastColumn, 
        rowSizes, columnSizes        
      );            
    },
    
    
    // overridden
    _updateLayerWindow : function(
      firstRow, lastRow, 
      firstColumn, lastColumn, 
      rowSizes, columnSizes
    ) 
    {
      this.__updateCellSpanData(firstRow, lastRow, firstColumn, lastColumn);
      this.__updateCellSpanWidgets();
      
      this._cellLayer.updateLayerWindow(
        firstRow, lastRow, 
        firstColumn, lastColumn, 
        rowSizes, columnSizes            
      );
    }                 
  },
  
  
  destruct : function()
  {   
    var children = this._getChildren();
    for (var i=0; i<children.length; i++) {
      children[i].dispose();
    }
  }
});

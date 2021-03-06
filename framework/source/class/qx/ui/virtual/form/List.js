qx.Class.define("qx.ui.virtual.form.List", 
{
  extend : qx.ui.virtual.core.Scroller,


  construct : function(useHtmlCells)
  {
    this.base(arguments, 0, 1, 20, 100);
    this._useHtmlCells = useHtmlCells;

    qx.ui.core.queue.Widget.add(this);
    
    this.getPane().addListener("resize", this._onResize, this); 
    this._initSelectionManager();  
    
    this.initRowHeight();
    this.initDelegate();
  },

  
  events: 
  {
    "changeSelection": "qx.event.type.Data"
  },

  
  properties :
  {
    appearance :
    {
      refine : true,
      init : "virtual-list"
    },
    
    rowCount :
    {
      check : "Integer",
      event : "changeRowCount",
      init : 0,
      apply : "_applyRowCount"
    },
    
    rowHeight :
    {
      check : "Integer",
      event : "changeRowHeight",
      init : 20,
      apply : "_applyRowHeight",
      themeable : true
    },
    
    showGridLines :
    {
      check : "Booelean",
      event : "changeShowGridLines",
      init : false,
      apply : "_changeShowGridLines",
      themeable : true
    },
    
    useWidgetCells :
    {
      check : "Boolean",
      init : false,
      apply : "_applyUseWidgetCells",
      themeable : true
    },
    
    cellRenderer :
    {
      event : "changeCellRenderer",
      apply : "_applyCellRenderer",
      themeable : true
    },

    delegate : 
    {
      check : "Object",
      event: "changeDelegate",
      init: null,
      nullable: true,
      apply : "_applyDelegate"
    }
  },

  
  members :
  {
    __defaultCellRenderer : null,
    
    _initWidgetLayer : function()
    {
      var self = this;
      var widgetCellDelegate = 
      {
        getCellWidget : function(row, column)
        {     
          var data = self._getCellData(row);

          if (!data) {
            return null;
          }
                     
          var states = {};
          if (self.__manager.isItemSelected(row)) {
            states.selected = true;
          }
          
          var cell = self._getCellRenderer(row);      
          var widget = cell.getCellWidget(data, states);
          widget.setUserData("cell.row", row);
          widget.setUserData("cell.renderer", cell);

          return widget;
        },
        
        
        poolCellWidget : function(widget)
        {
          var cellRenderer = widget.getUserData("cell.renderer");
          cellRenderer.pool(widget);
        }           
      };
      
      this._showChildControl("row-layer");
      this.__cellLayer = new qx.ui.virtual.layer.WidgetCell(widgetCellDelegate);
      this.getPane().addLayer(this.__cellLayer); 
      
      if (!this.__defaultCellRenderer) {
        this.setCellRenderer(qx.ui.virtual.form.ListItemCell.getInstance());
      }
    },
    
    
    _initHtmlLayer : function() 
    {
      var self = this;
      var htmlLayerDelegate = 
      {
        getCellProperties : function(row, column)
        {
          var states = {};
          if (self.__manager.isItemSelected(row)) {
            states.selected = true;
          }      
          return self._getCellRenderer(row).getCellProperties(
            self._getCellData(row), states
          );
        } 
      };
      
      this._showChildControl("row-layer");
      this.__cellLayer = new qx.ui.virtual.layer.HtmlCell(htmlLayerDelegate);
      this.getPane().addLayer(this.__cellLayer);   

      if (!this.__defaultCellRenderer) {
        this.setCellRenderer(new qx.ui.virtual.cell.Cell());
      }
    },
    
    
    _initSelectionManager : function()
    {
      var self = this;
      var selectionDelegate = {
        isItemSelectable : function(item)
        {
          return self._delegate.isRowSelectable ?
            self._delegate.isRowSelectable(item) :
            true;
        },
        styleSelectable : function(item, type, wasAdded) 
        {
          if (self.__useWidgetCells) {  
            self._styleWidgetSelectable(item, type, wasAdded);
          } else {
            self._styleHtmlSelectable(item, type, wasAdded);
          }
        }        
      }
      
      this.__manager = new qx.ui.virtual.selection.Row(
        this.getPane(), selectionDelegate
      );
      this.__manager.attachMouseEvents(this.getPane());
      this.__manager.attachKeyEvents(this);

      this.__manager.addListener("changeSelection", function(e) {
        this.fireDataEvent("changeSelection", e.getData());
      }, this);
    },

    
    getSelectionManager : function() {
      return this.__manager;
    },
    
    
    // overridden
    _createChildControlImpl : function(id)
    {
      var control;

      switch(id)
      {
        case "row-layer" :
          control = new qx.ui.virtual.layer.Row(null, null);
          this.getPane().addLayer(control);
          break;
          
        case "grid-lines" :
          control = new qx.ui.virtual.layer.GridLines("horizontal");
          this.getPane().addLayer(control);
          break;
          
      }  
      return control || this.base(arguments, id);
    },
    
    
    update : function() {
      this.__cellLayer.updateLayerData();
    },


    _applyRowCount : function(value, old) {
      this.getPane().getRowConfig().setItemCount(value);
    },
    
    
    _applyRowHeight : function(value, old) {
      this.getPane().getRowConfig().setDefaultItemSize(value);
    },
    
    
    _changeShowGridLines : function(value, old)
    {
      if (value) {
        this._showChildControl("grid-lines");
      } else {
        this._excludeChildControl("grid-lines");
      }
    },
    
    
    _applyDelegate : function(value, old) {
      this._delegate = value || {};
    },
    
    
    _applyUseWidgetCells : function(value, old) 
    {
      if (this.__useWidgetCells !== undefined) 
      {
        throw new Error(
          "The property 'useWidgetCells' cannot be set after the list has " +
          "been rendered."
        );
      }
    },
    
    
    _applyCellRenderer : function(value, old)
    {
      this.__defaultCellRenderer = value;
      if (this.__cellLayer) {       
        this.__cellLayer.fullUpdate();
      }
    },
    
    
    _getCellData : function(row) {
      return this._delegate.getCellData ? this._delegate.getCellData(row) : null;
    },
    
    
    _getCellRenderer : function(row)
    {
      return this._delegate.getCellRenderer ?
        this._delegate.getCellRenderer(row) : 
        this.__defaultCellRenderer;
    },
    

    _styleHtmlSelectable : function(item, type, wasAdded)
    {
      if (type !== "selected") {
        return;
      }
      var rowLayer = this.getChildControl("row-layer"); 
      if (wasAdded) {
        rowLayer.setDecorator(item, "selected");
      } else {
        rowLayer.setDecorator(item, null);
      }
      this.__cellLayer.updateLayerData();
    },
    
    
    _styleWidgetSelectable : function(item, type, wasAdded) 
    {
      if (type !== "selected") {
        return;
      }

      var widgets = this.__cellLayer.getChildren();
      for (var i=0; i<widgets.length; i++)
      {
        var widget = widgets[i];
        var cellRow = widget.getUserData("cell.row");
        
        if (item !== cellRow) {
          continue;
        }
        
        var cell = this._getCellRenderer(item);
        
        if (wasAdded) {
          cell.updateStates(widget, {selected: 1});
        } else {
          cell.updateStates(widget, {});
        }        
      }
    },      
    

    syncWidget : function()
    {
      if (this.__useWidgetCells !== undefined) {
        return;
      }
      
      this.__useWidgetCells = this.getUseWidgetCells();
      
      if (this.__useWidgetCells) {
        this._initWidgetLayer();
      } else {
        this._initHtmlLayer();
      }
    },

    
    _onResize : function(e) {
      this.getPane().getColumnConfig().setItemSize(0, e.getData().width);
    }
  }
});
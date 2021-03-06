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
     * Martin Wittemann (martinwittemann)

************************************************************************ */

/**
 * EXPERIMENTAL!
 *
 * <h2>Tree Controller</h2>
 * 
 * *General idea*
 * 
 * The tree controller is the controller made for the {@link qx.ui.tree.Tree}
 * widget in qooxdoo. Therefore, it is responsible for creating and adding the 
 * tree folders to the tree given as target.
 * 
 * *Features*
 * 
 * * Synchronize the model and the target
 * * Label and icon are bindable
 * * Takes care of the selection
 * * Passes on the options used by the bindings
 * 
 * *Usage*
 * 
 * As model, you can use every qooxdoo widget structure having one property, 
 * which is a data array holding the children of the current node. There can 
 * be as many additional as you like.
 * You need to specify a model, a target, a child path and a label path to 
 * make the controller work. 
 * 
 * *Cross reference*
 * 
 * * If you want to bind single values, use {@link qx.data.controller.Object}
 * * If you want to bind a list like widget, use {@link qx.data.controller.List}
 */
qx.Class.define("qx.data.controller.Tree", 
{
  extend : qx.core.Object,
  include: qx.data.controller.MSelection,


  /*
  *****************************************************************************
     CONSTRUCTOR
  *****************************************************************************
  */
  
  /**
   * @param model {qx.core.Object?null} The root element of the model, which holds 
   *   the data.
   * 
   * @param target {qx.ui.tree.Tree?null} The target widgets which should be a tree.
   * 
   * @param childPath {String?null} The name of the property in the model, which 
   *   holds the data array containing the children.
   * 
   * @param labelPath {String?null} The name of the property in the model, 
   *   which holds the value to be displayed as the label of the tree items.
   */
  construct : function(model, target, childPath, labelPath)  {
    this.base(arguments);
    
    // internal bindings reference
    this.__bindings = {};
    this.__boundProperties = [];

    // reference to the child
    this.__childrenRef = {};
    
    if (childPath != null) {
      this.setChildPath(childPath);      
    }
    if (labelPath != null) {
      this.setLabelPath(labelPath);      
    }
    if (model != null) {
      this.setModel(model);      
    }
    if (target != null) {
      this.setTarget(target);
    }
  },



  /*
  *****************************************************************************
     PROPERTIES
  *****************************************************************************
  */  
  
  properties : 
  {
    /** The root element of the data. */
    model : 
    {
      check: "qx.core.Object",
      apply: "_applyModel",
      event: "changeModel",
      nullable: true
    },
    
    
    /** The tree to bind the data to. */
    target : 
    {
      apply: "_applyTarget",
      event: "changeTarget",
      init: null
    },
    
    
    /** The name of the property, where the children are stored in the model. */
    childPath : 
    {
      check: "String",
      apply: "_applyChildPath",
      nullable: true
    },
    
    
    /** 
     * The name of the property, where the value for the tree folders label 
     * is stored in the model classes.
     */
    labelPath : 
    {
      check: "String",
      apply: "_applyLabelPath",
      nullable: true
    },
    
    
    /** 
     * The name of the property, where the source for the tree folders icon 
     * is stored in the model classes.
     */
    iconPath : 
    {
      check: "String",
      apply: "_applyIconPath",
      nullable: true
    },
    
    
    /** 
     * A map containing the options for the label binding. The possible keys 
     * can be found in the {@link qx.data.SingleValueBinding} documentation.
     */
    labelOptions : 
    {
      apply: "_applyLabelOptions",
      nullable: true
    },
    
    
    /** 
     * A map containing the options for the icon binding. The possible keys 
     * can be found in the {@link qx.data.SingleValueBinding} documentation.
     */    
    iconOptions :
    {
      apply: "_applyIconOptions",
      nullable: true
    },
    
    
    /**
     * Delegation object, which can have one ore more functionf defined by the
     * {@link #IControllerDelegate} Interface.  
     */
    delegate : 
    {
      apply: "_applyDelegate",
      init: null,
      nullable: true
    }    
  },



  /*
  *****************************************************************************
     MEMBERS
  *****************************************************************************
  */
  
  members :
  {
    /*
    ---------------------------------------------------------------------------
       APPLY METHODS
    ---------------------------------------------------------------------------
    */   
    /**
     * If a new delegate is set, it applies the stored configuration for the
     * tree folder to the already created folders once.
     * 
     * @param value {qx.core.Object|null} The new delegate.
     * @param old {qx.core.Object|null} The old delegate.
     */
    _applyDelegate: function(value, old) {
      this._setConfigureItem(value, old);
      this._setCreateItem(value, old);
      this._setBindItem(value, old);
    },
    
         
    /**
     * Apply-method which will be called after the icon options had been 
     * changed. This method will invoke a renewing of all bindings.
     * 
     * @param value {Map|null} The new options map.
     * @param old {Map|null} The old options map.
     */
    _applyIconOptions: function(value, old) {
      this.__renewBindings();
    },
    
    
    /**
     * Apply-method which will be called after the label options had been 
     * changed. This method will invoke a renewing of all bindings.
     * 
     * @param value {Map|null} The new options map.
     * @param old {Map|null} The old options map.
     */    
    _applyLabelOptions: function(value, old) {
      this.__renewBindings();
    },
    
    
    /**
     * Apply-method which will be called after the target had been 
     * changed. This method will clean up the old tree and will initially 
     * build up the new tree containing the data from the model.
     * 
     * @param value {qx.ui.tree.Tree|null} The new tree.
     * @param old {qx.ui.tree.Tree|null} The old tree.
     */    
    _applyTarget: function(value, old) {
      // if there was an old target
      if (old != undefined) {
        // get rid of the old stuff
        var oldRoot = old.getRoot();
        old.setRoot(null);
        oldRoot.destroy();
      }
      
      // if a model is set
      if (this.getModel() != null) {
        // build up the tree
        this.__buildTree();        
      }
      
      // add a listener for the target change
      this._addChangeTargetListener(value, old);      
    },
    
    
    /**
     * Apply-method which will be called after the model had been 
     * changed. This method invoke a new building of the tree.
     * 
     * @param value {qx.core.Object|null} The new tree.
     * @param old {qx.core.Object|null} The old tree.
     */    
    _applyModel: function(value, old) {
      this.__buildTree(); 
    },
    
    
    /**
     * Apply-method which will be called after the child path had been 
     * changed. This method invoke a new building of the tree.
     * 
     * @param value {String|null} The new path to the children property.
     * @param old {String|null} The old path to the children property.
     */    
    _applyChildPath: function(value, old) {
      this.__buildTree();      
    },
    
    
    /**
     * Apply-method which will be called after the icon path had been 
     * changed. This method invoke a new building of the tree.
     * 
     * @param value {String|null} The new path to the icon property.
     * @param old {String|null} The old path ot the icon property.
     */    
    _applyIconPath: function(value, old) {
      this.__renewBindings();      
    },
    
    
    /**
     * Apply-method which will be called after the label path had been 
     * changed. This method invoke a new building of the tree.
     * 
     * @param value {String|null} The new path to the label property.
     * @param old {String|null} The old path of the label property.
     */    
    _applyLabelPath: function(value, old) {
      this.__renewBindings();        
    },
    

    /*
    ---------------------------------------------------------------------------
       EVENT HANDLER
    ---------------------------------------------------------------------------
    */
    /**
     * Handler function handling the change of a length of a children array. 
     * This method invokes a rebuild of the corresponding subtree.
     * 
     * @param ev {qx.event.type.Event} The changeLength event of a data array.
     */
    __changeModelChildren: function(ev) {
      // get the stored data
      var children =  ev.getTarget();
      var treeNode = this.__childrenRef[children.toHashCode()].treeNode;
      var modelNode = this.__childrenRef[children.toHashCode()].modelNode;
      // update the subtree
      this.__updateTreeChildren(treeNode, modelNode);
      
      // update the selection in case a selected element has been removed
      this._updateSelection();
    },
    
    
    /*
    ---------------------------------------------------------------------------
       ITEM HANDLING
    ---------------------------------------------------------------------------
    */   
    /**
     * Creates a TreeFolder and delegates the configure method if a delegate is 
     * set and the needed function (configureItem) is available.
     * 
     * @return {qx.ui.tree.AbstractTreeItem} The created and configured TreeFolder. 
     */
    _createItem: function() {
      var delegate = this.getDelegate();
      // check if a delegate and a create method is set
      if (delegate != null && delegate.createItem != null) {
        var item = delegate.createItem();     
      } else {
        var item = new qx.ui.tree.TreeFolder();     
      }

      // check if a delegate is set and if the configure function is available
      if (delegate != null && delegate.configureItem != null) {
        delegate.configureItem(item);
      }
      return item;
    },
        
    
    /**
     * Internal helper function to build up the tree corresponding to the data 
     * stored in the model. This function creates the root node and hands the
     * recursive creation of all subtrees to the {#__updateTreeChildren} 
     * function.
     */ 
    __buildTree: function() {
      // only fill the target if there is a target, its known how to 
      // access the children and what needs to be desplayed as label 
      if (this.getTarget() == null || this.getChildPath() == null) {
        return;
      }
      // check for the binding knowledge
      if (
        (this.getLabelPath() == null && this.getDelegate() == null)
        || (this.getLabelPath() == null && this.getDelegate() != null && this.getDelegate().bindItem == null)
      ) {
        return;
      }
      
      // check for the old root node
      var oldRoot = this.getTarget().getRoot();
      if (oldRoot != null) {
        oldRoot.destroy();
      }
      
      // add a new root node
      var rootNode = this._createItem();
      rootNode.setUserData("model", this.getModel());
      this.getTarget().setRoot(rootNode);
      // bind the root node
      this.__addBinding(this.getModel(), rootNode);
      this.__updateTreeChildren(rootNode, this.getModel());
    },
    
    
    /**
     * Main method building up the tree folders corresponding to the given 
     * model node. The new created subtree will be added to the given tree node.
     * 
     * @param rootNode {qx.ui.tree.TreeFolder} The tree folder to add the new 
     *   created subtree.
     * 
     * @param modelNode {qx.core.Object} The model nodes which represent the 
     *   data in the current subtree.
     */
    __updateTreeChildren: function(rootNode, modelNode) {
      // ignore items which dont have children
      if (modelNode["get" + qx.lang.String.firstUp(this.getChildPath())] == undefined) {
        return;
      }
      // get all children of the current model node
      var children = 
        modelNode["get" + qx.lang.String.firstUp(this.getChildPath())]();
      
      // store the children reference
      if (this.__childrenRef[children.toHashCode()] == undefined) {
        // add the listener for the change
        var changeListenerId = children.addListener(
          "change", this.__changeModelChildren, this
        );
        this.__childrenRef[children.toHashCode()] = 
          {modelNode: modelNode, treeNode: rootNode, changeListenerId: changeListenerId};        
      }
          
      // go threw all children in the model
      for (var i = 0; i < children.length; i++) {
        // if there is no node in the tree or the current node does not fit
        if (rootNode.getChildren()[i] == null || children.getItem(i) != rootNode.getChildren()[i].getUserData("model"))
        {
          //chech if the node was just moved
          for (var j = i; j < rootNode.getChildren().length; j++) {
            if (rootNode.getChildren()[j].getUserData("model") === children.getItem(i)) {
              var oldIndex = j;
              break;
            }
          }
          // if it is in the tree
          if (oldIndex != undefined) {
            // get the coresponding node
            var currentNode = rootNode.getChildren()[oldIndex];
            // check if it is selected
            if (this.getTarget().isSelected(currentNode)) {
              var wasSelected = true;
            }        
            // remove the item at its old place (will remove the selection)
            rootNode.removeAt(oldIndex);
            // add the node at the current position
            rootNode.addAt(currentNode, i);
            // select it again if it was selected
            if (wasSelected) {
              this.getTarget().addToSelection(currentNode);
            }
            
          // if the node is new 
          } else {
            // add the child node
            var treeNode = this._createItem();
            treeNode.setUserData("model", children.getItem(i));
            rootNode.addAt(treeNode, i);
            this.__addBinding(children.getItem(i), treeNode);

            // add all children recursive        
            this.__updateTreeChildren(treeNode, children.getItem(i));            
          }
        }
      }
      // remove the rest of the tree items if they exist
      for (var i = rootNode.getChildren().length -1; i >= children.length; i--) {
        var treeFolder = rootNode.getChildren()[i];
        this.__removeFolder(treeFolder, rootNode);
      }
    },
    
    
    /**
     * Removes all folders and bindings for the current set target.
     */
    __emptyTarget: function() {
      // only do something if a tree is set
      if (this.getTarget() == null) {
        return;
      }
      // remove the root node
      var root = this.getTarget().getRoot();
      if (root != null) {
        this.getTarget().setRoot(null);
        this.__removeAllFolders(root);
        this.__removeBinding(root.getUserData("model"));
        root.destroy();        
      }
    },
    
    
    /**
     * Removes all child forlders of the given tree node. Also removes all 
     * bindings for the removed folders.
     * 
     * @param node {qx.ui.tree.AbstractTreeItem} The used tree folder. 
     */
    __removeAllFolders: function(node) {
      var children = node.getChildren();
      // remove all subchildren
      for (var i = children.length - 1; i >= 0; i--) {
        if (children[i].getChildren().length > 0) {
          this.__removeAllFolders(children[i]);          
        }
        this.__removeFolder(children[i], node);
      }
    },

    
    /**
     * Internal helper method removing the given folder form the given root 
     * node. All set bindings will be removed and the old tree folder will be 
     * destroyed.
     * 
     * @param treeFolder {qx.ui.tree.AbstractTreeItem} The folder to remove.
     * @param rootNode {qx.ui.tree.AbstractTreeItem} The folder holding the
     *   treeFolder. 
     */
    __removeFolder: function(treeFolder, rootNode) {
      // get the model
      var model = treeFolder.getUserData("model");
      
      // if the model does have a child path
      if (
        model["get" + qx.lang.String.firstUp(this.getChildPath())] != undefined
      )
      {
        // delete the model reference
        delete this.__childrenRef[
          model["get" + qx.lang.String.firstUp(this.getChildPath())]().toHashCode()
        ];        
      }
      // get the binding and remove it
      this.__removeBinding(model);
      // remove the folder from the tree
      rootNode.remove(treeFolder);
      // get rid of the old tree folder
      treeFolder.destroy();
    },
    

    /*
    ---------------------------------------------------------------------------
       BINDING STUFF
    ---------------------------------------------------------------------------
    */
    /**
     * Helper-Method for binding a given property from the model to the target
     * widget.
     * This method should only be called in the 
     * {@link qx.data.controller.IControllerDelegate#bindItem} function 
     * implemented by the {@link #delegate} property. 
     * 
     * @param sourcePath {String | null} The path to the propety in the model.
     * @param targetPath {String} The name of the property in the target 
     *   widget.
     * @param options {Map | null} The options to use for the binding.
     * @param targetWidget {qx.ui.tree.AbstractTreeItem} The target widget.
     * @param modelNode {var} The model node which should be bound to the target.
     */
    bindProperty: function(sourcePath, targetPath, options, targetWidget, modelNode) {
      // set up the binding
      var id = modelNode.bind(sourcePath, targetWidget, targetPath, options);
      // check for the storeage for the references
      if (this.__bindings[targetPath] == null) {
        this.__bindings[targetPath] = {};
      }
      // store the binding reference
      this.__bindings[targetPath][modelNode.toHashCode()] = {id: id, treeNode: targetWidget};
      
      // save the bound property
      if (!qx.lang.Array.contains(this.__boundProperties, targetPath)) {
        this.__boundProperties.push(targetPath);        
      }      
    },
    
    
    /**
     * Helper method renewing all bindings with the currently saved options and
     * paths.
     */
    __renewBindings: function() {
      // get the first bound property
      var firstProp;
      for (var key in this.__bindings) {
        firstProp = key;
        break;
      }
      // go through all stored bindings for that property
      // (should have all the same amount of entrys and tree nodes)
      for (var hash in this.__bindings[firstProp]) {
        // get the data 
        var treeNode = this.__bindings[firstProp][hash].treeNode;
        var modelNode = qx.core.ObjectRegistry.fromHashCode(hash);
        // remove the old bindings
        this.__removeBinding(modelNode);
        // add the new bindings
        this.__addBinding(modelNode, treeNode);
      }
    },
    
    
    /**
     * Internal helper method adding the right bindings from the given 
     * modelNode to the given treeNode.
     * 
     * @param modelNode {qx.core.Object} The model node holding the data.
     * @param treeNode {qx.ui.tree.TreeFolder} The corresponding tree folder 
     *   to the model node.
     */
    __addBinding: function(modelNode, treeNode) {
      var delegate = this.getDelegate();
      // if a delegate for creating the binding is given, use it
      if (delegate != null && delegate.bindItem != null) {
        delegate.bindItem(this, treeNode, modelNode);
        
      // otherwise, try to bind the listItem by default
      } else {
        // label binding
        this.bindProperty(this.getLabelPath(), "label", this.getLabelOptions(), treeNode, modelNode);

        // icon binding
        if (this.getIconPath() != null) {
          this.bindProperty(this.getIconPath(), "icon", this.getIconOptions(), treeNode, modelNode);
        }
      }
    },
    
    
    /**
     * Internal helper method for removing bindings for a given model node.
     * 
     * @param modelNode {qx.core.Object} the model node for which the bindings
     *   should be removed.
     */
    __removeBinding: function(modelNode) {
      for (var i = 0; i < this.__boundProperties.length; i++) {
        var property = this.__boundProperties[i];
        var bindingsMap = this.__bindings[property][modelNode.toHashCode()];
        if (bindingsMap != null) {
          modelNode.removeBinding(bindingsMap.id);
          delete this.__bindings[property][modelNode.toHashCode()];          
        }
      }
    },
    
    
    /*
    ---------------------------------------------------------------------------
       DELEGATE HELPER
    ---------------------------------------------------------------------------
    */
    /**
     * Helper method for applying the delegate It checks if a configureItem 
     * is set end invokes the initial process to apply the the given function.
     * 
     * @param value {Object} The new delegate.
     * @param old {Object} The old delegate.
     */
    _setConfigureItem: function(value, old) {
      if (value != null && value.configureItem != null && this.getTarget() != null) {
        var children = this.getTarget().getRoot().getItems(true, true, false);
        for (var i = 0; i < children.length; i++) {
          value.configureItem(children[i]);
        }
      }    
    },
    
    
    /**
     * Helper method for applying the delegate It checks if a createItem 
     * is set end invokes the initial process to apply the the given function.
     * 
     * @param value {Object} The new delegate.
     * @param old {Object} The old delegate.
     */
    _setCreateItem: function(value, old) {
      if (this.getTarget() == null || this.getModel() == null) {
        return;
      }
      if (old && old.createItem && value && value.createItem && old.createItem == value.createTtem) {
        return;
      }
      this._startSelectionModification();
      
      this.__emptyTarget();
      this.__buildTree();
      
      this._endSelectionModification();
      this._updateSelection();            
    },
    
    
    /**
     * Helper method for applying the delegate It checks if a bindItem 
     * is set end invokes the initial process to apply the the given function.
     * 
     * @param value {Object} The new delegate.
     * @param old {Object} The old delegate.
     */
    _setBindItem: function(value, old) {
      // if a new bindItem function is set
      if (value != null && value.bindItem != null) {
        // do nothing if the bindItem function did not change
        if (old != null && old.bindItem != null && value.bindItem == old.bindItem) {
          return;
        }
        this.__renewBindings();
      }
    }      
  }
});
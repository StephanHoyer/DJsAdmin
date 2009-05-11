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
 * This class is responsible for converting json data to class instances 
 * including the creation of the classes. 
 */
qx.Class.define("qx.data.marshal.Json", 
{
  extend : qx.core.Object,

  /**
   * @param delegate {Object} An object containing one of the mehtods described 
   *   in {@link qx.data.store.IStoreDelegate}.
   */
  construct : function(delegate)
  {
    this.base(arguments);
    
    this.__delegate = delegate;
  },


  members :
  {
    /**
     * Converts a given object into a hash which will be used to identify the 
     * classes under the namespace <code>qx.data.model</code>.
     * 
     * @param data {Object} The JavaScript object from which the hash is 
     *   requeired.
     * @return {String} The hash representation of the given JavaScript object.
     */
    __jsonToHash: function(data) {
      var properties = [];
      for (var key in data) {
        properties.push(key);
      }
      return properties.sort().join(" ");
    },
    
    
    /**
     * Creates for the given data the needed classes. The classes contain for 
     * every key in the data a property. The classname is always the prefix
     * <code>qx.data.model</code> and the hash of the data created by
     * {@link #__jsonToHash}. Two objects containing the same keys will not 
     * create two different classes. The class creation process also supports 
     * the functions provided by its delegate. 
     * 
     * @see qx.data.store.IStoreDelegate
     * 
     * @param data {Object} The object for which classes should be created.
     * @param includeBubbleEvents {Boolean} Whether the model should support
     *   the bubbling of change events or not.
     */
    jsonToClass: function(data, includeBubbleEvents) {
      // get the proper type
      var type = Object.prototype.toString.call(data).slice(8, -1);
      // break on all primitive json types
      if (
        type == "String" 
        || type == "Number" 
        || type == "Boolean" 
        || data == null
      ) {
        return;
      }
      
      var hash = this.__jsonToHash(data);
      // class is defined by the delegate
      if (
        this.__delegate 
        && this.__delegate.getModelClass 
        && this.__delegate.getModelClass(hash) != null
      ) {
        return;
      }
      // class already exists
      if (qx.Class.isDefined("qx.data.model." + hash)) {
        return;
      }
      
      var properties = {};
      for (var key in data) {
        if (data[key] instanceof Array) {
          for (var i = 0; i < data[key].length; i++) {
            this.jsonToClass(data[key][i], includeBubbleEvents);
          }
        } else if (data[key] instanceof Object) {
          this.jsonToClass(data[key], includeBubbleEvents);
        }
        
        properties[key] = {};
        properties[key].nullable = true;
        properties[key].event = "change" + qx.lang.String.firstUp(key);
        if (includeBubbleEvents) {
          properties[key].apply = "_applyEventPropagation";          
        }
      }
      
      // try to get the superclass, qx.core.Object as default
      if (this.__delegate && this.__delegate.getModelSuperClass) {
        var superClass = 
          this.__delegate.getModelSuperClass(hash) || qx.core.Object;
      } else {
        var superClass = qx.core.Object;        
      }
      
      // try to get the mixins
      var mixins = [];
      if (this.__delegate && this.__delegate.getModelMixins) {
        var delegateMixins = this.__delegate.getModelMixins(hash);
        // check if its an array
        if (Object.prototype.toString.call(delegateMixins).slice(8, -1) != "Array") {
          if (delegateMixins != null) {
            mixins = [delegateMixins];            
          }
        }
      }
      
      // include the mixin for the event bubbling
      if (includeBubbleEvents) {
        mixins.push(qx.data.marshal.MEventBubbling);        
      }
      
      // create the map for the class
      var newClass = {
        extend : superClass,
        include : mixins,
        properties : properties
      };
      
      qx.Class.define("qx.data.model." + hash, newClass);
    },

    
    /**
     * Creates an instance for the given data hash.
     * 
     * @param hash {String} The hash of the data for which an instance should 
     *   be created.
     * @return {var} An instance of the corresponding class.
     */
    __createInstance: function(hash) {
      var delegateClass;
      // get the class from the delegate
      if (this.__delegate && this.__delegate.getModelClass) {
        delegateClass = this.__delegate.getModelClass(hash);        
      }
      if (delegateClass != null) {
        return (new delegateClass());
      } else {
        var clazz = qx.Class.getByName("qx.data.model." + hash);
        return (new clazz());        
      }
    },


    /**
     * Creates for the given data the needed models. Be sure to have the classes
     * created with {@link #jsonToClass} before calling this method. The creation 
     * of the class itself is delegated to the {@link #__createInstance} method,
     * which could use the {@link qx.data.store.IStoreDelegate} methods, if 
     * given.
     * 
     * @param data {Object} The object for which models should be created.
     */
    jsonToModel: function(data) {   
      var type = Object.prototype.toString.call(data).slice(8, -1);
      if (
        type == "Number" 
        || type == "String" 
        || type == "Boolean" 
        || data == null
      ) {
        return data;
        
      } else if (type == "Array") {
        var array = new qx.data.Array();
        for (var i = 0; i < data.length; i++) {
          array.push(this.jsonToModel(data[i]));
        }
        return array;
        
      } else if (type == "Object") {
        // create an instance for the object
        var hash = this.__jsonToHash(data);
        var model = this.__createInstance(hash);
        
        // go threw all element in the data
        for (var key in data) {
          model["set" + qx.lang.String.firstUp(key)](this.jsonToModel(data[key]));
        }
        return model;
      }
      
      throw new Error("Unsupported type!");
    }    
  }
});

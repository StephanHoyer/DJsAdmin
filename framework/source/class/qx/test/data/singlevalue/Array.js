/* ************************************************************************

   qooxdoo - the new era of web development

   http://qooxdoo.org

   Copyright:
     2007-2008 1&1 Internet AG, Germany, http://www.1und1.de

   License:
     LGPL: http://www.gnu.org/licenses/lgpl.html
     EPL: http://www.eclipse.org/org/documents/epl-v10.php
     See the LICENSE file in the project's top-level directory for details.

   Authors:
     * Martin Wittemann (martinwittemann)

************************************************************************ */
/**
 * Test-Class for testing the single value binding
 */
qx.Class.define("qx.test.data.singlevalue.Array",
{
  extend : qx.dev.unit.TestCase,

  construct : function() {
    this.base(arguments);

    // define a test class
    qx.Class.define("qx.test.data.singlevalue.Array_MultiBinding",
    {
      extend : qx.core.Object,
      
      construct : function() {
        this.setArray(new qx.data.Array(["one", "two", "three"]));
      },

      properties :
      {
        child : {
          check : "qx.test.data.singlevalue.Array_MultiBinding",
          event : "changeChild",
          nullable : true
        },

        children : {
          check : "qx.data.Array",
          event : "changeChildren",
          nullable: true,
          init : null
        },

        name : {
          check : "String",
          init : "Juhu",
          event : "changeName"
        },

        array : {
          init : null,
          event: "changeArray"
        }
      }
    });
  },


  members :
  {

    setUp : function()
    {
      this.__a = new qx.test.data.singlevalue.Array_MultiBinding().set({
        name: "a",
        children: new qx.data.Array()
      });
      this.__b1 = new qx.test.data.singlevalue.Array_MultiBinding().set({
        name: "b1",
        children: new qx.data.Array()
      });
      this.__b2 = new qx.test.data.singlevalue.Array_MultiBinding().set({
        name: "b2",
        children: new qx.data.Array()
      });
      this.__label = new qx.ui.basic.Label();

      // remove all bindings
      qx.data.SingleValueBinding.removeAllBindings();
    },


    tearDown : function()
    {
      this.__b1.dispose();
      this.__b2.dispose();
      this.__a.dispose();
      this.__label.dispose();
    },


    testChangeItem : function() {
      // bind the first element of the array
      qx.data.SingleValueBinding.bind(this.__a, "array[0]", this.__label, "content");

      // check the binding
      this.assertEquals("one", this.__label.getContent(), "Array[0] binding does not work!");
      // change the value
      this.__a.getArray().setItem(0, "ONE");
      this.assertEquals("ONE", this.__label.getContent(), "Array[0] binding does not work!");
    },


    testChangeArray: function() {
      // bind the first element of the array
      qx.data.SingleValueBinding.bind(this.__a, "array[0]", this.__label, "content");

      // change the array itself
      this.__a.setArray(new qx.data.Array(1, 2, 3));
      qx.log.Logger.debug(this.__a.getArray().getItem(0));
      // check the binding
      this.assertEquals("1", this.__label.getContent(), "Changing the array does not work!");
    },


    testLast: function() {
      // bind the last element
      qx.data.SingleValueBinding.bind(this.__a, "array[last]", this.__label, "content");
      // check the binding
      this.assertEquals("three", this.__label.getContent(), "Array[last] binding does not work!");

      // change the value
      this.__a.getArray().setItem(2,"THREE");
      this.assertEquals("THREE", this.__label.getContent(), "Array[last] binding does not work!");
    },


    testPushPop: function() {
      // bind the last element
      qx.data.SingleValueBinding.bind(this.__a, "array[last]", this.__label, "content");
      // check the binding
      this.assertEquals("three", this.__label.getContent(), "Array[last] binding does not work!");

      // pop the last element
      this.__a.getArray().pop();
      // check the binding
      this.assertEquals("two", this.__label.getContent(), "Array[last] binding does not work!");

      // push a new element to the end
      this.__a.getArray().push("new");
      // check the binding
      this.assertEquals("new", this.__label.getContent(), "Array[last] binding does not work!");
    },


    testShiftUnshift: function() {
      // bind the last element
      qx.data.SingleValueBinding.bind(this.__a, "array[0]", this.__label, "content");
      // check the binding
      this.assertEquals("one", this.__label.getContent(), "Array[last] binding does not work!");

      // pop the last element
      this.__a.getArray().shift();
      // check the binding
      this.assertEquals("two", this.__label.getContent(), "Array[last] binding does not work!");

      // push a new element to the end
      this.__a.getArray().unshift("new");
      // check the binding
      this.assertEquals("new", this.__label.getContent(), "Array[last] binding does not work!");
    },


    testChildArray: function() {
      // create the objects
      this.__a.setChild(this.__b1);
      this.__b1.setArray(new qx.data.Array("eins", "zwei", "drei"));
      this.__b2.setArray(new qx.data.Array("1", "2", "3"));

      // bind the last element
      qx.data.SingleValueBinding.bind(this.__a, "child.array[0]", this.__label, "content");
      // check the binding
      this.assertEquals("eins", this.__label.getContent(), "child.array[0] binding does not work!");

      // change the child
      this.__a.setChild(this.__b2);
      // check the binding
      this.assertEquals("1", this.__label.getContent(), "child.array[0] binding does not work!");
    },


    testChildren: function() {
      // create the objects
      this.__a.getChildren().push(this.__b1);
      this.__a.getChildren().push(this.__b2);

      // bind the element
      qx.data.SingleValueBinding.bind(this.__a, "children[0].name", this.__label, "content");
      // check the binding
      this.assertEquals("b1", this.__label.getContent(), "children[0].name binding does not work!");

      // remove the first element
      this.__a.getChildren().shift();
      // check the binding
      this.assertEquals("b2", this.__label.getContent(), "children[0].name binding does not work!");

      // change the name of b2
      this.__b2.setName("AFFE");
      // check the binding
      this.assertEquals("AFFE", this.__label.getContent(), "children[0].name binding does not work!");
    },
    
    
    test2Arrays: function() {
      // create the objects
      this.__a.getChildren().push(this.__b1);
      this.__b1.getChildren().push(this.__b2);
      
      // bind the element
      qx.data.SingleValueBinding.bind(this.__a, "children[0].children[0].name", this.__label, "content"); 
      // check the binding
      this.assertEquals("b2", this.__label.getContent(), "children[0].children[0].name binding does not work!");
      
      // rename the last element
      this.__b2.setName("OHJE");
      // check the binding
      this.assertEquals("OHJE", this.__label.getContent(), "children[0].name binding does not work!");      
    },
    
    
    testSplice: function() {
      // bind the first element
      qx.data.SingleValueBinding.bind(this.__a, "array[0]", this.__label, "content"); 
      
      // remove the first and add "eins" at popsition 0
      this.__a.getArray().splice(0, 1, "eins");
      
      // check the binding
      this.assertEquals("eins", this.__label.getContent(), "Array[last] binding does not work!");
    },
    
    
    testWrongInput: function() {
      var a = this.__a;
      var label = this.__label;
            
      // bind a senseless value
      this.assertException(function() {
        qx.data.SingleValueBinding.bind(a, "array[affe]", label, "content");        
      }, Error, null, "Affe not an array value.");
      
      // bind empty array
      this.assertException(function() {
        qx.data.SingleValueBinding.bind(a, "array[]", label, "content");
      }, Error, null, "'' not an array value.");
      
      // bind 2 arrays
      this.assertException(function() {
        qx.data.SingleValueBinding.bind(a, "array[0][0]", label, "content");
      }, Error, null, "array[][] not an array value.");    
      
      // bind an float    
      this.assertException(function() {
        qx.data.SingleValueBinding.bind(a, "array[1.5]", label, "content");
      }, Error, null, "1.5 not an array value.");
      
      // bind strange value   
      this.assertException(function() {
        qx.data.SingleValueBinding.bind(a, "array[[affe]]", label, "content");
      }, Error, null, "'[[affe]]' not an array value.");
      
      // test map in array   
      this.assertException(function() {
        qx.data.SingleValueBinding.bind(a, "array[{name: 'a'}]", label, "content");
      }, Error, null, "'[affe]' not an array value.");
      
      // test null in the array
      this.assertException(function() {
        qx.data.SingleValueBinding.bind(a, "array[null]", label, "content");
      }, Error, null, "'null' not an array value.");      
    },
    
    
    testLateBinding: function() {
      // create the precondition
      this.__a.setArray(new qx.data.Array());
      // bind the last element
      qx.data.SingleValueBinding.bind(this.__a, "array[last]", this.__label, "content");
      
      // check the binding
      this.assertNull(this.__label.getContent(), "Late binding does not work!");
      
      // set a value and check it
      this.__a.getArray().push("1");
      this.assertEquals("1", this.__label.getContent(), "Late binding does not work!");
      
      // set another value and check it
      this.__a.getArray().push("2");
      this.assertEquals("2", this.__label.getContent(), "Late binding does not work!"); 
    },
    
    
    testRemoveArrayItem: function() {
      // bind the last element
      qx.data.SingleValueBinding.bind(this.__a, "array[last]", this.__label, "content");
      // check the binding
      this.assertEquals("three", this.__label.getContent(), "Array[last] binding does not work!");

      // pop all 3 elements
      this.__a.getArray().pop();
      this.__a.getArray().pop();
      this.__a.getArray().pop();
      
      // check the binding
      this.assertNull(this.__label.getContent(), "Array[last] binding does not work!");
    }

  }
});

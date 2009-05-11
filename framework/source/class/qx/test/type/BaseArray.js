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
     * Fabian Jakobs (fjakobs)

************************************************************************ */

qx.Class.define("qx.test.type.BaseArray",
{
  extend : qx.dev.unit.TestCase,

  construct : function()
  {
    this.base(arguments);    
    qx.Class.define("qx.test.type.TestArray", {
      extend : qx.type.BaseArray
    });
  },
  
  
  members :
  {    
    testListConstruct : function()
    {           
      var list = new qx.test.type.TestArray(10);
      this.assertEquals(10, list.length);
    
      list = new qx.test.type.TestArray(1, 2, 3);
      this.assertArrayEquals([1, 2, 3], list);      
    },
    
    testArrayLength : function()
    {            
      var list = new qx.test.type.TestArray(1, 2, 3);
      this.assertEquals(3, list.length);
    },
    
    testClear : function()
    {
      var list = new qx.test.type.TestArray(1, 2, 3);
      list.length = 0;
      this.assertArrayEquals([], list)
    },
      
    testArrayJoin : function()
    {
      var list = new qx.test.type.TestArray(1, 2, 3);
      this.assertEquals("1, 2, 3", list.join(", "));
    },
    
    testArrayConcat : function()
    {
      var list = new qx.test.type.TestArray(1, 2, 3);
      this.assertArrayEquals([1, 2, 3, 4, 5], list.concat(4, 5));     
    },
    
    testArrayPop : function()
    {
      var list = new qx.test.type.TestArray(1, 2, 3);
      var popped = list.pop();
      this.assertEquals(3, popped);
      this.assertArrayEquals([1, 2], list);
    },
    
    testArrayPush : function()
    {
      var list = new qx.test.type.TestArray(1, 2);
      var length = list.push(3);
      this.assertEquals(3, length);
      this.assertArrayEquals([1, 2, 3], list);

      var length = list.push(4, 5);
      this.assertEquals(5, length);
      this.assertArrayEquals([1, 2, 3, 4, 5], list);
    },
    
    testArrayReverse : function()
    {
      var list = new qx.test.type.TestArray(1, 2, 3, 4, 5);
      list.reverse();
      this.assertArrayEquals([5, 4, 3, 2, 1], list);
      list.reverse();
      this.assertArrayEquals([1, 2, 3, 4, 5], list);
    },
    
    testArrayShift : function()
    {
      var list = new qx.test.type.TestArray(1, 2, 3, 4, 5);
      var shifted = list.shift();
      this.assertEquals(1, shifted);
      this.assertArrayEquals([2, 3, 4, 5], list);
    },
    
    testArrayUnshift : function()
    {
      var list = new qx.test.type.TestArray(2, 3, 4, 5);
      var length = list.unshift(1);
      this.assertArrayEquals([1, 2, 3, 4, 5], list);
    },
    
    testArraySlice : function()
    {
      var list = new qx.test.type.TestArray(1, 2, 3, 4, 5);
      this.assertArrayEquals([3, 4], list.slice(2, 4));
      this.assertArrayEquals([2, 3, 4, 5], list.slice(1));
      this.assertArrayEquals([3, 4], list.slice(2, -1));
    },
    
    testArraySort : function()
    {
      var list = new qx.test.type.TestArray(3, 5, 1, -1);
      var sorted = list.sort();
      this.assertArrayEquals([-1, 1, 3, 5], list);

      var list = new qx.test.type.TestArray(3, 5, 1, -1);
      var sorted = list.sort(function(a, b) {
        return a > b ? -1 : 1;
      });
      this.assertArrayEquals([5, 3, 1, -1], list);
    },
    
    testArraySplice : function()
    {
      var list = new qx.test.type.TestArray(1, 2, 3, 4, 5);
      var removed = list.splice(1, 2, 22, 33);
      this.assertArrayEquals([2, 3], removed);
      this.assertArrayEquals([1, 22, 33, 4, 5], list);
    },
    
    testArrayToString : function()
    {
      var list = new qx.test.type.TestArray(1, 2, 3);
      this.assertEquals(list.join(), list.toString());
    },
    
    testArrayToLocaleString : function()
    {
      var list = new qx.test.type.TestArray(1, 2, 3);
      this.assertEquals([1, 2, 3].toLocaleString(), list.toLocaleString());      
    }
  }
});

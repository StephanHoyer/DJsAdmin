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

************************************************************************ */

qx.Class.define("qx.test.ui.virtual.performance.HtmlTableCssCell", 
{
  extend : qx.test.ui.virtual.performance.AbstractLayerTest,

  members :
  {
    getLayer : function() {
      return new qx.test.ui.virtual.performance.layer.HtmlTableCssCell(this);
    },
    

    getCellHtml : function(row, column, left, top, width, height)
    {
      var html = [
        "<td>",
        row,
        " / ",
        column,
        "</td>"                  
      ];
      return html.join("");
    }    
    
  }

});

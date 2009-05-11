/* ************************************************************************

   qooxdoo - the new era of web development

   http://qooxdoo.org

   Copyright:
     2004-2008 1&1 Internet AG, Germany, http://www.1und1.de

   License:
     LGPL: http://www.gnu.org/licenses/lgpl.html
     EPL: http://www.eclipse.org/org/documents/epl-v10.php
     See the LICENSE file in the project's top-level directory for details.

   Authors:
     * Sebastian Werner (wpbasti)
     * Fabian Jakobs (fjakobs)

************************************************************************ */

qx.Class.define("demobrowser.demo.bom.Flash",
{
  extend : qx.application.Native,

  members :
  {
    main: function()
    {
      this.base(arguments);

      var domElement = new qx.bom.Element.create("div");
      qx.bom.element.Style.set(domElement, "width", "300px");
      qx.bom.element.Style.set(domElement, "height", "120px");
      document.body.appendChild(domElement);

      qx.bom.Flash.create(domElement, "Flash.swf", "flashMovie");
    }
  }
});

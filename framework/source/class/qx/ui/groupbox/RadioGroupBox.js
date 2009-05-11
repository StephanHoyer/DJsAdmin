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
     * Andreas Ecker (ecker)
     * Martin Wittemann (martinwittemann)

************************************************************************ */

/**
 * A group box, which has a radio button near the legend.
 */
qx.Class.define("qx.ui.groupbox.RadioGroupBox",
{
  extend : qx.ui.groupbox.GroupBox,
  implement : qx.ui.form.IRadioItem,



  /*
  *****************************************************************************
     PROPERTIES
  *****************************************************************************
  */

  properties :
  {
    // overridden
    appearance :
    {
      refine : true,
      init   : "radio-groupbox"
    }
  },



  /*
  *****************************************************************************
     EVENTS
  *****************************************************************************
  */

  events :
  {
    /** Fired when the included radiobutton changed its status */
    "changeChecked" : "qx.event.type.Data",

    /** Fired when the included radiobutton changed its name */
    "changeName" : "qx.event.type.Data",

    /** Fired when the included radiobutton changed its value */
    "changeValue" : "qx.event.type.Data"
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
      WIDGET API
    ---------------------------------------------------------------------------
    */

    // overridden
    _createChildControlImpl : function(id)
    {
      var control;

      switch(id)
      {
        case "legend":
          control = new qx.ui.form.RadioButton;
          control.setChecked(true);
          control.addListener("changeChecked", this._onRadioChangeChecked, this);
          control.addListener("changeName", this._onRadioChangeName, this);
          control.addListener("changeValue", this._onRadioChangeValue, this);
          control.addListener("resize", this._repositionFrame, this);

          this._add(control);
      }

      return control || this.base(arguments, id);
    },





    /*
    ---------------------------------------------------------------------------
      EVENT LISTENERS
    ---------------------------------------------------------------------------
    */

    /**
     * Event listener for changeChecked event of radio button
     *
     * @param e {qx.event.type.Data} Data event which holds the current status
     */
    _onRadioChangeChecked : function(e)
    {
      var checked = e.getData();

      // Disable content
      this.getChildrenContainer().setEnabled(checked);

      // Fire event to the outside
      this.fireDataEvent("changeChecked", checked);
    },


    /**
     * Event listener for changeName event of radio button
     *
     * @param e {qx.event.type.Data} Data event which holds the current status
     */
    _onRadioChangeName : function(e)
    {
      // Fire event to the outside
      this.fireDataEvent("changeName", e.getData());
    },


    /**
     * Event listener for changeValue event of radio button
     *
     * @param e {qx.event.type.Data} Data event which holds the current status
     */
    _onRadioChangeValue : function(e)
    {
      // Fire event to the outside
      this.fireDataEvent("changeValue", e.getData());
    },




    /*
    ---------------------------------------------------------------------------
      REDIRECTIONS TO LEGEND (FOR RADIO GROUP SUPPORT)
    ---------------------------------------------------------------------------
    */

    /**
     * Returns the radio group
     *
     * @return {qx.ui.form.RadioGroup} The radio manager
     */
    getGroup : function() {
      return this.getChildControl("legend").getGroup();
    },


    /**
     * Sets the radio group to use
     *
     * @param value {qx.ui.form.RadioGroup} The radio group to use
     */
    setGroup : function(value)
    {
      var legend = this.getChildControl("legend");
      return value ? legend.setGroup(value) : legend.resetGroup();
    },


    /**
     * The name of the groupbox. Mainly used for serialization proposes.
     *
     * @return {String} The name
     */
    getName : function() {
      return this.getChildControl("legend").getName();
    },


    /**
     * Configures the name of the groupbox. Mainly used for serialization proposes.
     *
     * @param value {String} the name to use
     * @return {String} the incoming value
     */
    setName : function(value)
    {
      var legend = this.getChildControl("legend");
      return value ? legend.setName(value) : legend.resetName();
    },


    /**
     * The value of the groupbox. Mainly used for serialization proposes.
     *
     * @return {String} the value
     */
    getValue : function() {
      return this.getChildControl("legend").getValue();
    },


    /**
     * Configures the value of the groupbox. Mainly used for serialization proposes.
     *
     * @param value {String} the value to use
     * @return {String} the incoming value
     */
    setValue : function(value)
    {
      var legend = this.getChildControl("legend");
      return value ? legend.setValue(value) : legend.resetValue();
    },


    /**
     * Whether the groupbox is enabled
     *
     * @return {Boolean} <code>true</code> when enabled
     */
    getChecked : function() {
      return this.getChildControl("legend").getChecked();
    },


    /**
     * Configures whether the groupbox should be enabled
     *
     * @param value {String} whether the groupbox should be checked
     * @return {Boolean} the incoming value
     */
    setChecked : function(value)
    {
      var legend = this.getChildControl("legend");
      return value ? legend.setChecked(value) : legend.resetChecked();
    },


    /**
     * Returns the configured legend. Only used for RadioManager compatibility.
     *
     * @return {String} The configured legend.
     */
    getLabel : function() {
      return this.getChildControl("legend").getLabel();
    }
  }
});

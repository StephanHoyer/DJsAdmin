/* ************************************************************************

   qooxdoo - the new era of web development

   http://qooxdoo.org

   Copyright:
     2004-2008 1&1 Internet AG, Germany, http://www.1und1.de
     2006 STZ-IDA, Germany, http://www.stz-ida.de
     2006 Derrell Lipman

   License:
     LGPL: http://www.gnu.org/licenses/lgpl.html
     EPL: http://www.eclipse.org/org/documents/epl-v10.php
     See the LICENSE file in the project's top-level directory for details.

   Authors:
     * Sebastian Werner (wpbasti)
     * Andreas Ecker (ecker)
     * Andreas Junghans (lucidcake)
     * Derrell Lipman (derrell)
   ________________________________________________________________________

   This class contains code based on the following work:

     JSON (JavaScript Object Notation) is a lightweight data-interchange format.
     http://json.org

     Copyright:
       2005 JSON.org

     License:
       Permission is hereby granted, free of charge, to any person obtaining a copy
       of this software and associated documentation files (the "Software"), to deal
       in the Software without restriction, including without limitation the rights
       to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
       copies of the Software, and to permit persons to whom the Software is
       furnished to do so, subject to the following conditions:

       The Software shall be used for Good, not Evil.

       THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
       IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
       FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
       AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
       LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
       OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
       SOFTWARE.

************************************************************************ */

/**
 * JSON (JavaScript Object Notation) for qooxdoo
 */
qx.Class.define("qx.util.Json",
{
  statics :
  {
    /** indent string for JSON pretty printing */
    BEAUTIFYING_INDENT : "  ",

    /** new line string for JSON pretty printing */
    BEAUTIFYING_LINE_END : "\n",

    __map :
    {
      "function"  : "__convertFunction",
      "boolean"   : "__convertBoolean",
      "number"    : "__convertNumber",
      "string"    : "__convertString",
      "object"    : "__convertObject",
      "undefined" : "__convertUndefined"
    },


    /**
     * Converts the incoming value from Function to String.
     *
     * @param incoming {function} The incoming value
     * @return {String} value converted to a JSON string
     */
    __convertFunction : function(incoming) {
      return String(incoming);
    },


    /**
     * Converts the incoming value from Boolean to String.
     *
     * @param incoming {Boolean} The incoming value
     * @return {String} value converted to a JSON string
     */
    __convertBoolean : function(incoming) {
      return String(incoming);
    },


    /**
     * Converts the incoming value from Number to String.
     *
     * @param incoming {Number} The incoming value
     * @return {String} value converted to a JSON string
     */
    __convertNumber : function(incoming) {
      return isFinite(incoming) ? String(incoming) : "null";
    },


    /**
     * Converts the incoming value from String to JSON String.
     *
     * @param incoming {String} The incoming value
     * @return {String} value converted to a JSON string
     */
    __convertString : function(incoming)
    {
      var result;

      if (/["\\\x00-\x1f]/.test(incoming)) {
        result = incoming.replace(/([\x00-\x1f\\"])/g, qx.util.Json.__convertStringHelper);
      } else {
        result = incoming;
      }

      return '"' + result + '"';
    },

    __convertStringEscape :
    {
      '\b' : '\\b',
      '\t' : '\\t',
      '\n' : '\\n',
      '\f' : '\\f',
      '\r' : '\\r',
      '"'  : '\\"',
      '\\' : '\\\\'
    },


    /**
     * callback for JavaScript string escaping
     *
     * @param a {Array} incoming array
     * @param b {String} character to convert
     * @return {String} converted character
     */
    __convertStringHelper : function(a, b)
    {
      var result = qx.util.Json.__convertStringEscape[b];

      if (result) {
        return result;
      }

      result = b.charCodeAt();
      return '\\u00' + Math.floor(result / 16).toString(16) + (result % 16).toString(16);
    },


    /**
     * Converts the incoming value from Array to String.
     *
     * @param incoming {Array} The incoming value
     * @return {String} value converted to a JSON string
     */
    __convertArray : function(incoming)
    {
      var stringBuilder = [], first = true, func, obj;

      var beautify = qx.util.Json.__beautify;
      stringBuilder.push("[");

      if (beautify)
      {
        qx.util.Json.__indent += qx.util.Json.BEAUTIFYING_INDENT;
        stringBuilder.push(qx.util.Json.__indent);
      }

      for (var i=0, l=incoming.length; i<l; i++)
      {
        obj = incoming[i];
        func = this.__map[typeof obj];

        if (func)
        {
          obj = this[func](obj);

          if (typeof obj == "string")
          {
            if (!first)
            {
              stringBuilder.push(",");

              if (beautify) {
                stringBuilder.push(qx.util.Json.__indent);
              }
            }

            stringBuilder.push(obj);
            first = false;
          }
        }
      }

      if (beautify)
      {
        qx.util.Json.__indent = qx.util.Json.__indent.substring(0, qx.util.Json.__indent.length - qx.util.Json.BEAUTIFYING_INDENT.length);
        stringBuilder.push(qx.util.Json.__indent);
      }

      stringBuilder.push("]");

      return stringBuilder.join("");
    },


    /**
     * Implemented by Derrell L. and Andreas J.
     *
     * The Date object is a primitive type in Javascript,
     * but the Javascript specification neglects to provide
     * a literal form for it.  The only way to generate a
     * Date object is with "new Date()".  For fast
     * processing by Javascript, we want to be able to
     * eval() a JSON response.  If Date objects are to be
     * passed to the client using JSON, about the only
     * reasonable way to do it is to have "new Date()"
     * in the JSON message.  See this page for a proposal to
     * add a Date literal syntax to Javascript which,
     * if/when implemented in Javascript, would eliminate
     * the need to pass "new Date() in JSON":
     *
     *   http://www.nikhilk.net/DateSyntaxForJSON.aspx
     *
     * Sending a JSON message from client to server, we have
     * no idea what language the server will be written in,
     * what size integers it supports, etc.  We do want to
     * be able to represent as large a range of dates as
     * possible, though.  If we were to send the number of
     * milliseconds since the beginning of the epoch, the
     * value would exceed, in many cases, what can fit in a
     * 32-bit integer.  Even if one were to simply strip off
     * the last three digits (milliseconds), the number of
     * seconds could exceed a 32-bit signed integer's range
     * with very distant past or distant future dates.  To
     * make it easier for any generic server to handle a
     * date without risk of loss of precision due to
     * automatic type casting, we'll send a UTC date with
     * separated fields, in the form:
     *
     *  new Date(Date.UTC(year,month,day,hour,min,sec,ms))
     *
     * The server can fairly easily parse this in its JSON
     * implementation by stripping off "new Date(Date.UTC("
     * from the beginning of the string, and "))" from the
     * end of the string.  What remains is the set of
     * comma-separated date components, which are also very
     * easy to parse.
     *
     * The server should send this same format to the
     * client, which can simply eval() it just as with the
     * remainder of JSON.
     *
     * A requirement of the implementation of the server is
     * that after a date has been sent from the client to
     * the server, converted by the server into whatever
     * native type the date will be stored or manipulated
     * in, convered back to JSON, and received back at the
     * client, a comparison of the sent and received Date
     * object should yield identity.  This means that even
     * if the server does not natively operate on
     * milliseconds, it must maintain milliseconds in dates
     * sent to it by the client.
     *
     * @param incoming {Date} incoming value
     * @return {String} value converted to a JSON string
     */
    __convertDate : function(incoming)
    {
      var dateParams = incoming.getUTCFullYear() + "," + incoming.getUTCMonth() + "," + incoming.getUTCDate() + "," + incoming.getUTCHours() + "," + incoming.getUTCMinutes() + "," + incoming.getUTCSeconds() + "," + incoming.getUTCMilliseconds();
      return "new Date(Date.UTC(" + dateParams + "))";
    },


    /**
     * Converts the incoming value from Map to String.
     *
     * @param incoming {Map} The incoming value
     * @return {String} value converted to a JSON string
     */
    __convertMap : function(incoming)
    {
      var stringBuilder = [], first = true, func, obj;

      var beautify = qx.util.Json.__beautify;
      stringBuilder.push("{");

      if (beautify)
      {
        qx.util.Json.__indent += qx.util.Json.BEAUTIFYING_INDENT;
        stringBuilder.push(qx.util.Json.__indent);
      }

      for (var key in incoming)
      {
        obj = incoming[key];
        func = this.__map[typeof obj];

        if (func)
        {
          obj = this[func](obj);

          if (typeof obj == "string")
          {
            if (!first)
            {
              stringBuilder.push(",");

              if (beautify) {
                stringBuilder.push(qx.util.Json.__indent);
              }
            }

            stringBuilder.push(this.__convertString(key), ":", obj);
            first = false;
          }
        }
      }

      if (beautify)
      {
        qx.util.Json.__indent = qx.util.Json.__indent.substring(0, qx.util.Json.__indent.length - qx.util.Json.BEAUTIFYING_INDENT.length);
        stringBuilder.push(qx.util.Json.__indent);
      }

      stringBuilder.push("}");

      return stringBuilder.join("");
    },


    /**
     * Converts the incoming value from Object to String.
     *
     * @param incoming {Object} The incoming value
     * @return {String} value converted to a JSON string
     */
    __convertObject : function(incoming)
    {
      if (incoming)
      {
        // for objects defined in other frames the instanceof check failes.
        var constructorName = incoming.constructor.name;
        if (incoming instanceof Array || constructorName == "Array") {
          return this.__convertArray(incoming);
        } else if (incoming instanceof Date || constructorName == "Date") {
          return this.__convertDate(incoming);
        } else if (incoming instanceof Object || constructorName == "Object") {
          return this.__convertMap(incoming);
        }

        return "";
      }

      return "null";
    },


    /**
     * Converts the incoming value from undefined to String.
     *
     * @param incoming {undefined} The incoming value
     * @return {String} value converted to a JSON string
     */
    __convertUndefined : function(incoming)
    {
      if (qx.core.Setting.get("qx.jsonEncodeUndefined")) {
        return "null";
      }
    },


    /**
     * Stringify a JavaScript value, producing a JSON text.
     *
     * @param obj {var} the object to serialize.
     * @param beautify {Boolean ? false} whether to beautify the serialized string
     *          by adding some white space that indents objects and arrays.
     * @return {String} the serialized object.
     */
    stringify : function(obj, beautify)
    {
      // Hints for converter process
      this.__beautify = beautify;
      this.__indent = this.BEAUTIFYING_LINE_END;

      // Start convertion
      var result = this[this.__map[typeof obj]](obj);
      if (typeof result != "string") {
        result = null;
      }

      // Debugging support
      if (qx.core.Setting.get("qx.jsonDebugging")) {
        qx.log.Logger.debug(this, "JSON request: " + result);
      }

      return result;
    },


    /**
     * Parse a JSON text, producing a JavaScript value.
     * It returns false if there is a syntax error.
     *
     * @param text {String} JSON string
     * @return {Object} Returns the object
     * @throws an error if the text could not be parsed or evaluated
     */
    parse : function(text)
    {
      if (/[^,:{}\[\]0-9.\-+Eaeflnr-u \n\r\t]/.test(text.replace(/"(\\.|[^"\\])*"/g, ""))) {
        throw new Error("Could not parse JSON string!");
      }

      try {
        return eval("(" + text + ")");
      } catch(ex) {
        throw new Error("Could not evaluate JSON string: " + ex.message);
      }
    },

    // /*
    //  * Recursively descend through an object looking for any class hints.  Right
    //  * now, the only class hint we support is 'Date' which can not be easily sent
    //  * from javascript to an arbitrary (e.g. PHP) JSON-RPC server and back again
    //  * without truncation or modification.
    //  */
    // _fixObj : function(obj) {
    //   /* If there's a class hint... */
    //   if (obj.__jsonclass__)
    //   {
    //   /* ... then check for supported classes.  We support only Date. */
    //   if (obj.__jsonclass__ == "Date" && obj.secSinceEpoch && obj.msAdditional)
    //   {
    //     /* Found a Date.  Replace class hint object with a Date object. */
    //     obj = new Date((obj.secSinceEpoch * 1000) + obj.msAdditional);
    //     return obj;
    //   }
    //   }
    //
    //   /*
    //    * It wasn't something with a supported class hint, so recursively descend
    //    */
    //   for (var member in obj) {
    //   thisObj = obj[member];
    //   if (typeof thisObj == 'object' && thisObj !== null) {
    //     obj[member] = qx.util.Json._fixObj(thisObj);
    //   }
    //   }
    //
    //   return obj;
    // }

    /**
     * Parse a JSON text, producing a JavaScript value.
     * It triggers an exception if there is a syntax error.
     *
     * @param text {String} JSON string
     * @return {var} evaluated JSON string.
     */
    parseQx : function(text)
    {
      /* Convert the result text into a result primitive or object */

      if (qx.core.Setting.get("qx.jsonDebugging")) {
        qx.log.Logger.debug(this, "JSON response: " + text);
      }

      var obj = (text && text.length > 0) ? eval('(' + text + ')') : null;

      // /*
      //  * Something like this fixObj() call may be used later when we want to
      //  * support class hints.  For now, ignore that code
      //  */
      //
      // /* If it's an object, not null, and contains a "result" field.. */
      // if (typeof obj == 'object' && obj !== null && obj.result) {
      // /* ... then 'fix' the result by handling any supported class hints */
      // obj.result = qx.util.Json._fixObj(obj.result);
      // }

      return obj;
    }
  },




  /*
  *****************************************************************************
     SETTINGS
  *****************************************************************************
  */

  settings :
  {
    "qx.jsonEncodeUndefined" : true,
    "qx.jsonDebugging"       : false
  }
});

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
     * Sebastian Werner (wpbasti)
     * Christian Schmidt (chris_schmidt)

************************************************************************ */

/**
 * This class has been moved to {@link qx.io.ScriptLoader}
 *
 * @deprecated This class has been moved to 'qx.io.ScriptLoader'
 */
qx.Class.define("qx.io2.ScriptLoader",
{
  extend : qx.io.ScriptLoader,

  /**
   * @deprecated Use 'qx.io.ScriptLoader' instead.
   */
  construct : function()
  {
    this.base(arguments);
    qx.log.Logger.deprecatedClassWarning(
      qx.io2.ScriptLoader,
      "This class has been moved to 'qx.io.ScriptLoader'"
    );
  }
});

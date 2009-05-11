#!/usr/bin/env python
################################################################################
#
#  qooxdoo - the new era of web development
#
#  http://qooxdoo.org
#
#  Copyright:
#    2006-2009 1&1 Internet AG, Germany, http://www.1und1.de
#
#  License:
#    LGPL: http://www.gnu.org/licenses/lgpl.html
#    EPL: http://www.eclipse.org/org/documents/epl-v10.php
#    See the LICENSE file in the project's top-level directory for details.
#
#  Authors:
#    * Thomas Herchenroeder (thron7)
#    * Sebastian Werner (wpbasti)
#
################################################################################

import sys, os, re, types

from ecmascript.frontend.Script import Script
from ecmascript.frontend import lang, treeutil

counter = 0

# Create a blacklist of words to leave untouched
reservedWords = set(())
reservedWords.update(lang.GLOBALS)
reservedWords.update(lang.RESERVED.keys())


def convert(current):
    table = u"abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"

    res = u""
    length = len(table) - 1

    if current / length > 0:
        res += convert(current / length)

    res += table[current % length]

    return res


def mapper(name, checkset):
    global counter
    repl = convert(counter)
    counter += 1
    while repl in checkset or repl in reservedWords:   # checkset is not updated, since we never generate the same repl twice
        repl = convert(counter)
        counter += 1
    return repl


def update(node, newname):

    if node.type == "identifier":
        name = node.get("name", False)

        if name != None:
            node.set("name", newname)

    # Handle variable definition
    elif node.type == "definition":
        name = node.get("identifier", False)

        if name != None:
            node.set("identifier", newname)

    # Handle function definition
    elif node.type == "function":
        name = node.get("name", False)

        if name != None:
            node.set("name", newname)


# -- Interface function --------------------------------------------------------

def search(node):

    def updateOccurences(var, newname):
        # Replace variable definition
        for node in var.nodes:
            update(node, newname)

        # Replace variable references
        for varUse in var.uses:  # varUse is a VariableUse object
            update(varUse.node, newname)

    global counter
    counter = 0 # reset repl name generation

    # Collect the set of all used variables
    script = Script(node)
    varset = set([])

    for scope in script.iterScopes():
        varset.update((x.name for x in scope.uses))

    # loop through declared vars of scopes
    for scope in script.iterScopes():
        allvars = scope.arguments + scope.variables
        for var in allvars:

            if var.name in reservedWords or len(var.name)<2:
                continue

            # get replacement name
            newname = mapper(var.name, varset)

            # update all occurrences in scope
            updateOccurences(var, newname)

            # if var is param, patch local vars of same name in one go
            if (var in scope.arguments):
                # get declared vars of same name
                lvars = [x for x in scope.variables if x.name == var.name]
                for lvar in lvars:
                    updateOccurences(lvar, newname)
                    # don't re-process
                    allvars.remove(lvar)



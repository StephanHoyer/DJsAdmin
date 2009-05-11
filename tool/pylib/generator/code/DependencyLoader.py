#!/usr/bin/env python
################################################################################
#
#  qooxdoo - the new era of web development
#
#  http://qooxdoo.org
#
#  Copyright:
#    2006-2008 1&1 Internet AG, Germany, http://www.1und1.de
#
#  License:
#    LGPL: http://www.gnu.org/licenses/lgpl.html
#    EPL: http://www.eclipse.org/org/documents/epl-v10.php
#    See the LICENSE file in the project's top-level directory for details.
#
#  Authors:
#    * Sebastian Werner (wpbasti)
#
################################################################################

##
# NAME
#  DependencyLoader
#
# SYNTAX
#  from DependencyLoader import DependencyLoader
#  mydl = DependencyLoader(...)
#
# DESCRIPTION
#
# ENTRY POINTS (for generator)
#  - DependencyLoader.__init__()
#  - DependencyLoader.getClassList()
#  - DependencyLoader.getMeta()
#
##

import sys, re

from ecmascript.frontend import treeutil, lang
from ecmascript.frontend.Script import Script
from misc import filetool, idlist


class DependencyLoader:
    def __init__(self, classes, cache, console, treeLoader, require, use):
        self._classes = classes
        self._cache = cache
        self._console = console
        self._treeLoader = treeLoader
        self._require = require
        self._use = use


    def getClassList(self, include, block, explicitInclude, explicitExclude, variants):
        # Resolve intelli include depdendencies
        if len(include) == 0 and len(explicitInclude) > 0:
            if len(block) > 0:
                self._console.error("Blocking is not supported when only explicit includes are defined!");
                sys.exit(1)

            result = []
        else:
            result = self.resolveDependencies(include, block, variants)


        # Explicit include/exclude
        if len(explicitInclude) > 0 or len(explicitExclude) > 0:
            self._console.info("Processing explicitely configured includes/excludes...")
            for entry in explicitInclude:
                if not entry in result:
                    result.append(entry)

            for entry in explicitExclude:
                if entry in result:
                    result.remove(entry)


        # Sort classes
        self._console.info("Sorting %s classes..." % len(result))
        result = self.sortClasses(result, variants)


        # Return list
        return result



    def resolveDependencies(self, include, block, variants):
        if len(include) == 0:
            self._console.info("Including all known classes")
            result = self._classes.keys()

            # In this case the block works like an explicit exclude
            # because all classes are included like an explicit include.
            for classId in block:
                result.remove(classId)

        else:
            result = []
            for item in include:
                try:
                    self._resolveDependenciesRecurser(item, block, variants, result)

                except NameError, detail:
                    self._console.error("Dependencies resolving failed for %s with: \n%s" % (item, detail))
                    sys.exit(1)

        return result



    def _resolveDependenciesRecurser(self, item, block, variants, result):
        # support blocking
        if item in block:
            return

        # check if already in
        if item in result:
            return

        # add self
        result.append(item)

        # reading dependencies
        try:
            deps = self.getCombinedDeps(item, variants)
        except NameError, detail:
            raise NameError("Could not resolve dependencies of class: %s\n%s" % (item, detail))

        # process lists
        try:
          for subitem in deps["load"]:
              if not subitem in result and not subitem in block:
                  self._resolveDependenciesRecurser(subitem, block, variants, result)

          for subitem in deps["run"]:
              if not subitem in result and not subitem in block:
                  self._resolveDependenciesRecurser(subitem, block, variants, result)

        except NameError, detail:
            raise NameError("Could not resolve dependencies of class: %s \n%s" % (item, detail))

        if deps['undef']:
            self._console.indent()
            for id in deps['undef']:
                self._console.warn("! Unknown class referenced: %s (in: %s)" % (id, item))
            self._console.outdent()



    def getCombinedDeps(self, fileId, variants):
        # print "Get combined deps: %s" % fileId

        # init lists
        loadFinal = []
        runFinal = []

        # add static dependencies
        static = self.getDeps(fileId, variants)
        loadFinal.extend(static["load"])
        runFinal.extend(static["run"])

        # add dynamic dependencies
        if self._require.has_key(fileId):
            loadFinal.extend(self._require[fileId])

        if self._use.has_key(fileId):
            runFinal.extend(self._use[fileId])

        # return dict
        return {
            "load" : loadFinal,
            "run"  : runFinal,
            'undef' : static['undef']
        }



    def getDeps(self, fileId, variants):
        if not self._classes.has_key(fileId):
            raise NameError("Could not find class to fulfil dependency: %s" % fileId)

        filePath = self._classes[fileId]["path"]
        cacheId = "deps-%s-%s" % (fileId, idlist.toString(variants))

        # print "Read from cache: %s" % fileId
        
        deps = self._cache.readmulti(cacheId, filePath)
        if deps != None:
            return deps

        # Notes:
        # load time = before class = require
        # runtime = after class = use

        load = []
        run = []

        self._console.debug("Gathering dependencies: %s" % fileId)
        self._console.indent()

        # Read meta data
        meta = self.getMeta(fileId)
        metaLoad = self._readDictKey(meta, "loadtimeDeps", [])
        metaRun = self._readDictKey(meta, "runtimeDeps", [])
        metaOptional = self._readDictKey(meta, "optionalDeps", [])
        metaIgnore = self._readDictKey(meta, "ignoreDeps", [])

        # Process meta data
        load.extend(metaLoad)
        run.extend(metaRun)

        # Read content data
        (autoLoad, autoRun, autoWarn) = self._analyzeClassDeps(fileId, variants)
        
        # Process content data
        if not "auto-require" in metaIgnore:
            for item in autoLoad:
                if item in metaOptional:
                    pass
                elif item in load:
                    self._console.warn("%s: #require(%s) is auto-detected" % (fileId, item))
                else:
                    load.append(item)

        if not "auto-use" in metaIgnore:
            for item in autoRun:
                if item in metaOptional:
                    pass
                elif item in load:
                    pass
                elif item in run:
                    self._console.warn("%s: #use(%s) is auto-detected" % (fileId, item))
                else:
                    run.append(item)

        self._console.outdent()

        # Build data structure
        deps = {
            "load" : load,
            "run"  : run,
            'undef' : autoWarn
        }
        
        self._cache.writemulti(cacheId, deps)
        return deps



    def _readDictKey(self, data, key, default=None):
        if data.has_key(key):
            return data[key]

        return default



    def _analyzeClassDeps(self, fileId, variants):
        loadtimeDeps = []
        runtimeDeps  = []
        undefDeps    = []

        tree = self._treeLoader.getTree(fileId, variants)
        self._analyzeClassDepsNode(fileId, tree, loadtimeDeps, runtimeDeps, undefDeps, False)

        return loadtimeDeps, runtimeDeps, undefDeps



    def _analyzeClassDepsNode(self, fileId, node, loadtime, runtime, warn, inFunction):
        if node.type == "variable":
            assembled = (treeutil.assembleVariable(node))[0]

            # treat dependencies in defer as requires
            if assembled == "qx.Class.define" or assembled == "qx.Bootstrap.define" or assembled == "qx.List.define":
                if node.parent.type == "operand" and node.parent.parent.type == "call":
                    deferNode = treeutil.selectNode(node, "../../params/2/keyvalue[@key='defer']/value/function/body/block")
                    if deferNode != None:
                        self._analyzeClassDepsNode(fileId, deferNode, loadtime, runtime, warn, False)


            # try to reduce to a class name
            assembledId = None
            if self._classes.has_key(assembled):
                assembledId = assembled

            elif "." in assembled:
                for entryId in self._classes:
                    if assembled.startswith(entryId) and re.match("%s\W" % entryId, assembled):
                        assembledId = entryId
                        break

            # warn about instantiations of unknown classes
            ##if not assembledId:
            ##    print assembled
            if ((not assembledId
                and 'parent' in node.__dict__
                and 'parent' in node.parent.__dict__
                and 'parent' in node.parent.parent.__dict__
                and 'parent' in node.parent.parent.parent.__dict__
                and node.parent.parent.parent.parent.type == 'instantiation'  # we're inside a 'new' expression
                and node.parent.type == 'operand' # and it's the class name
                ) or
                (not assembledId
                and 'parent' in node.__dict__
                and 'parent' in node.parent.__dict__
                and node.parent.parent.type == 'keyvalue'
                and node.parent.parent.get('key') == 'extend'        # it's the value of an 'extend' key
                )
               ):
                # skip built-in classes (Error, document, RegExp, ...)
                if (assembled in lang.BUILTIN + ['clazz']
                    or re.match(r'this\b', assembled)
                   ):
                   pass
                else:
                    #if assembled == "this.configureTreeItem" and False:
                    #    import pydb
                    #    pydb.debugger()
                    # skip scoped vars
                    isScopedVar = self._isScopedVar(assembled, node, fileId)
                    if isScopedVar:
                        pass
                    else:
                        warn.append(assembled)

            if assembledId and assembledId != fileId:
                if self._classes.has_key(assembledId):
                    if inFunction:
                        target = runtime
                    else:
                        target = loadtime

                    if not assembledId in target:
                        target.append(assembledId)

        elif node.type == "body" and node.parent.type == "function":
            inFunction = True

        if node.hasChildren():
            for child in node.children:
                self._analyzeClassDepsNode(fileId, child, loadtime, runtime, warn, inFunction)


    def _isScopedVar(self, idString, node, fileId):

        def findScopeNodeAndRoot(node):
            node1 = node
            sNode = None
            rNode = None
            while True:
                if not sNode and node1.type in ["function", "catch"]:
                    sNode = node1
                if node1.hasParent():
                    node1 = node1.parent
                else:  # we're at the root
                    if not sNode:
                        sNode = node1
                    rNode = node1
                    break
            return sNode, rNode

        # check composite id a.b.c, check only first part
        dotIdx = idString.find('.')
        if dotIdx > -1:
            idString = idString[:dotIdx]
        scopeNode, rootNode  = findScopeNodeAndRoot(node)  # find the node of the enclosing scope (function - catch - global)
        script = Script(rootNode, fileId)
        if scopeNode == rootNode:
            fcnScope = script.getGlobalScope()
        else:
            fcnScope = script.getScope(scopeNode)
        varDef = script.getVariableDefinition(idString, fcnScope)
        if varDef:
            return True
        return False



    ######################################################################
    #  CLASS SORT SUPPORT
    ######################################################################

    def sortClasses(self, include, variants):
        result = []
        path = []

        for classId in include:
            self._sortClassesRecurser(classId, include, variants, result, path)

        return result



    def _sortClassesRecurser(self, classId, available, variants, result, path):
        if classId in result:
            return

        # reading dependencies
        deps = self.getCombinedDeps(classId, variants)

        # path is needed for recursion detection
        if not classId in path:
            path.append(classId)

        # process loadtime requirements
        for item in deps["load"]:
            if item in available and not item in result:
                if item in path:
                    other = self.getCombinedDeps(item, variants)
                    self._console.warn("Detected circular dependency between: %s and %s" % (classId, item))
                    self._console.indent()
                    self._console.debug("%s depends on: %s" % (classId, ", ".join(deps["load"])))
                    self._console.debug("%s depends on: %s" % (item, ", ".join(other["load"])))
                    self._console.outdent()
                    sys.exit(1)

                self._sortClassesRecurser(item, available, variants, result, path)

        if not classId in result:
            # remove element from path
            path.remove(classId)

            # print "Add: %s" % classId
            result.append(classId)







    ######################################################################
    #  META DATA SUPPORT
    ######################################################################

    def getMeta(self, fileId):
        fileEntry = self._classes[fileId]
        filePath = fileEntry["path"]
        cacheId = "meta-%s" % fileId

        meta = self._cache.readmulti(cacheId, filePath)
        if meta != None:
            return meta

        meta = {}

        self._console.indent()

        content = filetool.read(filePath, fileEntry["encoding"])

        meta["loadtimeDeps"] = self._extractLoadtimeDeps(content, fileId)
        meta["runtimeDeps"]  = self._extractRuntimeDeps(content, fileId)
        meta["optionalDeps"] = self._extractOptionalDeps(content)
        meta["ignoreDeps"]   = self._extractIgnoreDeps(content)
        meta["assetDeps"]    = self._extractAssetDeps(content)

        self._console.outdent()

        self._cache.writemulti(cacheId, meta)
        return meta


    def getOptionals(self, include):
        result = []

        for classId in include:
            try:
                for optional in self.getMeta(classId)["optionalDeps"]:
                    if not optional in include and not optional in result:
                        result.append(optional)

            # Not all meta data contains optional infos
            except KeyError:
                continue

        return result


    HEAD = {
        "require" : re.compile("^#require\(\s*([\.a-zA-Z0-9_-]+?)\s*\)", re.M),
        "use" : re.compile("^#use\(\s*([\.a-zA-Z0-9_-]+?)\s*\)", re.M),
        "optional" : re.compile("^#optional\(\s*([\.a-zA-Z0-9_-]+?)\s*\)", re.M),
        "ignore" : re.compile("^#ignore\(\s*([\.a-zA-Z0-9_-]+?)\s*\)", re.M),
        "embed" : re.compile("^#embed\(\s*([\.\*a-zA-Z0-9/_-]+?)\s*\)", re.M),
        "asset" : re.compile("^#asset\(\s*([^)]+?)\s*\)", re.M)
    }


    def _extractLoadtimeDeps(self, data, fileId):
        deps = []

        for item in self.HEAD["require"].findall(data):
            if item == fileId:
                raise NameError("Self-referring load dependency: %s" % item)
            else:
                deps.append(item)

        return deps



    def _extractRuntimeDeps(self, data, fileId):
        deps = []

        for item in self.HEAD["use"].findall(data):
            if item == fileId:
                self._console.error("Self-referring runtime dependency: %s" % item)
            else:
                deps.append(item)

        return deps



    def _extractOptionalDeps(self, data):
        deps = []

        # Adding explicit requirements
        for item in self.HEAD["optional"].findall(data):
            if not item in deps:
                deps.append(item)

        return deps



    def _extractIgnoreDeps(self, data):
        ignores = []

        # Adding explicit requirements
        for item in self.HEAD["ignore"].findall(data):
            if not item in ignores:
                ignores.append(item)

        return ignores


    def _extractAssetDeps(self, data):
        deps = []
        asset_reg = re.compile("^[\$\.\*a-zA-Z0-9/{}_-]+$")
        
        for item in self.HEAD["asset"].findall(data):
            if not asset_reg.match(item):
                raise ValueError, "Illegal asset declaration: %" % item
            if not item in deps:
                deps.append(item)
        
        return deps

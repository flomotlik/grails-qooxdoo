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
#
################################################################################

import os, sys, re, types, string, copy

##
# Map class with path-like accessor
##

class ExtMap(object):
    "Map class with path-like accessor"

    def __init__(self, data=None):
        if data:
            assert isinstance(data, types.DictType)
        else:
            data = {}

        self._data = data

    def get(self, key, default=None, confmap=None):
        """Returns a (possibly nested) data element from dict
        """
        
        if confmap:
            data = confmap
        else:
            data = self._data
            
        if data.has_key(key):
            return data[key]

        splits = key.split('/')
        for part in splits:
            if part == "." or part == "":
                pass
            elif isinstance(data, types.DictType) and data.has_key(part):
                data = data[part]
            else:
                return default

        return data
    
    ##
    # set a (possibly nested) data element in the dict
    
    def set(self, key, value):
        
        data = self._data
        if key in data:
            data[key] = value
            
        else:
            splits    = key.split('/')
            splitslen =  len(splits)
            for i in range(splitslen):
                part =  splits[i]
                if part == "." or part == "":
                    pass
                elif isinstance(data, types.DictionaryType):
                    if i == splitslen-1:  # it's the last
                        data[part] = value
                    else:
                        if part not in data:
                            data[part] = {}
                        data = data[part]
                else:  # leaf type map value
                    raise ValueError("Cannot insert entry in non-dict data value: %r" % data)

        return



    def extract(self, key):
        return ExtMap(self.get(key, {}))

    def getData(self):
        return self._data



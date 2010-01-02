#!/usr/bin/env python
# -*- coding: utf-8 -*-

##
# gendata.py -- go through all the demos (i.e. their HTML files) and generate an 
#               index file, to be used in Demobrowser's tree navigation pane.
#
# usage: gendata.py <dest> <source>
#
#   <dest>    output file
#   <source>  root directory for the scan
##

import sys, os, optparse, codecs, re

basic = u"""[%s]"""

def fileCheck(fname):
    fileH = open(fname,"rU")
    selected = False
    for line in fileH:
        #if re.search(r'demobrowser\.demo',line):
        if re.search(r'src="\.\./helper.js"',line):
            selected = True
            break
    fileH.close()

    return selected
    
    
# get the tags from the javascript source file
def getTagsFromJsFile(fname):
    fileH = open(fname,"rU")

    tags = [] 
    for line in fileH:
        reg = re.compile('^#tag\((.*)\)');
        match = reg.search(line);
        if match:
          if match.group(1):
            tags.append(match.group(1));
    fileH.close()

    return tags    
 
                                                                                 
def main(dist, scan):
  res = ""
  structurize = False

  firstCategory = True
  for category in os.listdir(scan):
    if category in [".svn", ".DS_Store"]:
      continue

    ext = os.path.splitext(category)[1]
    if ext == ".html" or ext == ".js":
      continue

    if not firstCategory:
      res += "},"

    res += "{"
    res += "\"classname\":\""+category+"\",\"tests\":[\n"

    firstItem = True
    lastbasename = None

    for item in os.listdir(os.path.join(scan, category)):
      if item == ".svn":
        continue

      if os.path.splitext(item)[1] != ".html":
        continue

      htmlfile = os.path.join(scan, category, item)
      if not fileCheck(htmlfile):
        print "  - Skipping HTML file: %s" % (htmlfile,)
        continue
        
      # get the tags
      jsitem = item[0:item.find("html")] + "js"
      jsfile = os.path.join(scan, "..", "class", "demobrowser", "demo", category, jsitem)
      tags = getTagsFromJsFile(jsfile);
      
      title = item[:item.find(".")]

      if "_" in title:
        nr = title[title.find("_")+1:]
        basename = title[:title.find("_")]
      else:
        nr = 0
        basename = title

      title = title.replace("_", " ")

      if structurize:
        if lastbasename != basename:
          firstItem = True

          if lastbasename != None:
            res += "\n]},\n"

          res += "{"
          res += "\"classname\":\""+basename+"\",\"desc\":\"Folder %s\",\"tests\":[\n" % basename

      if not firstItem:
        res += ",\n"

      res += '{\"nr\":"%s",\"title\":"%s",\"name\":"%s", \"tags\":%s}' % (nr, title, item, repr(tags))
      lastbasename = basename
      firstItem = False

    if structurize:
      if lastbasename != None:
        res += "\n]}\n"

    res += "\n]\n"
    firstCategory = False

  res += "}"

  distdir = os.path.dirname(dist)

  if not os.path.exists(distdir):
    os.makedirs(distdir)

  content = basic % res

  outputFile = codecs.open(dist, encoding="utf-8", mode="w", errors="replace")
  outputFile.write(content)
  outputFile.flush()
  outputFile.close()



if __name__ == '__main__':
  try:
    parser = optparse.OptionParser()

    (options, args) = parser.parse_args()

    main(args[0], args[1])

  except KeyboardInterrupt:
    print
    print "  * Keyboard Interrupt"
    sys.exit(1)

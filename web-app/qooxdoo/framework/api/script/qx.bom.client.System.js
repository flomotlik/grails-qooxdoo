{type:"class",attributes:{"isStatic":"true","name":"System","packageName":"qx.bom.client","fullName":"qx.bom.client.System","type":"bootstrap"},children:[{type:"desc",attributes:{"text":"<p>This class comes with all relevant information regarding\nthe client&#8217;s operating system. This class is examining the userAgent of\nthe browser&#8217;s build-in navigator object. Currently there are more than\n<b>4000</b> (in words: four thousand) different userAgent strings, so this class\naims to target only the relevant ones. However this list is not meant to be\ncomplete.</p>\n\n<p>The listed constants are automatically filled on the initialization\nphase of the class. The defaults listed in the <span class=\"caps\">API</span> viewer need not\nto be identical to the values at runtime.</p>"}},{type:"constants",children:[{type:"constant",attributes:{"type":"Boolean","name":"WIN95","value":"false"},children:[{type:"desc",attributes:{"text":"<p>Flag to detect if the client system is Windows 95</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Boolean"}}]}]},{type:"constant",attributes:{"type":"Boolean","name":"WIN2003","value":"false"},children:[{type:"desc",attributes:{"text":"<p>Flag to detect if the client system is Windows 2003 (Server)</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Boolean"}}]}]},{type:"constant",attributes:{"type":"Boolean","name":"WIN2000","value":"false"},children:[{type:"desc",attributes:{"text":"<p>Flag to detect if the client system is Windows 2000</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Boolean"}}]}]},{type:"constant",attributes:{"type":"Boolean","name":"FREEBSD","value":"false"},children:[{type:"desc",attributes:{"text":"<p>Flag to detect if the client system is FreeBSD</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Boolean"}}]}]},{type:"constant",attributes:{"type":"Boolean","name":"NETBSD","value":"false"},children:[{type:"desc",attributes:{"text":"<p>Flag to detect if the client system is NetBSD</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Boolean"}}]}]},{type:"constant",attributes:{"type":"Boolean","name":"OSX","value":"false"},children:[{type:"desc",attributes:{"text":"<p>Flag to detect if the client system is Mac OS X</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Boolean"}}]}]},{type:"constant",attributes:{"type":"Boolean","name":"SYMBIAN","value":"false"},children:[{type:"desc",attributes:{"text":"<p>Flag to detect if the client system is Symbian</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Boolean"}}]}]},{type:"constant",attributes:{"type":"Boolean","name":"IPHONE","value":"false"},children:[{type:"desc",attributes:{"text":"<p>Flag to detect if the client system is an iPhone or iPod touch</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Boolean"}}]}]},{type:"constant",attributes:{"type":"Boolean","name":"WINNT4","value":"false"},children:[{type:"desc",attributes:{"text":"<p>Flag to detect if the client system is Windows NT4</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Boolean"}}]}]},{type:"constant",attributes:{"type":"Boolean","name":"OS9","value":"false"},children:[{type:"desc",attributes:{"text":"<p>Flag to detect if the client system is Mac OS 9</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Boolean"}}]}]},{type:"constant",attributes:{"type":"Boolean","name":"UNKNOWN_SYSTEM","value":"false"},children:[{type:"desc",attributes:{"text":"<p>Flag to detect if the client system is assumed</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Boolean"}}]}]},{type:"constant",attributes:{"type":"Boolean","name":"SP1","value":"false"},children:[{type:"desc",attributes:{"text":"<p>Flag to detect if the client system has an installed Service Pack 1</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Boolean"}}]}]},{type:"constant",attributes:{"type":"Boolean","name":"SP2","value":"false"},children:[{type:"desc",attributes:{"text":"<p>Flag to detect if the client system has an installed Service Pack 2 (only available in IE)</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Boolean"}}]}]},{type:"constant",attributes:{"type":"Boolean","name":"WINCE","value":"false"},children:[{type:"desc",attributes:{"text":"<p>Flag to detect if the client system is Windows CE</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Boolean"}}]}]},{type:"constant",attributes:{"type":"Boolean","name":"NINTENDODS","value":"false"},children:[{type:"desc",attributes:{"text":"<p>Flag to detect if the client system is Nintendo DS</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Boolean"}}]}]},{type:"constant",attributes:{"type":"Boolean","name":"WINME","value":"false"},children:[{type:"desc",attributes:{"text":"<p>Flag to detect if the client system is Windows ME</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Boolean"}}]}]},{type:"constant",attributes:{"type":"Boolean","name":"SUNOS","value":"false"},children:[{type:"desc",attributes:{"text":"<p>Flag to detect if the client system is SunOS</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Boolean"}}]}]},{type:"constant",attributes:{"type":"Boolean","name":"OPENBSD","value":"false"},children:[{type:"desc",attributes:{"text":"<p>Flag to detect if the client system is OpenBSD</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Boolean"}}]}]},{type:"constant",attributes:{"type":"String","name":"NAME","value":""},children:[{type:"desc",attributes:{"text":"<p>The name of the operating system</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]},{type:"constant",attributes:{"type":"Boolean","name":"WINXP","value":"false"},children:[{type:"desc",attributes:{"text":"<p>Flag to detect if the client system is Windows XP</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Boolean"}}]}]},{type:"constant",attributes:{"type":"Boolean","name":"WIN98","value":"false"},children:[{type:"desc",attributes:{"text":"<p>Flag to detect if the client system is Windows 98</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Boolean"}}]}]},{type:"constant",attributes:{"type":"Boolean","name":"WINVISTA","value":"false"},children:[{type:"desc",attributes:{"text":"<p>Flag to detect if the client system is Windows Vista</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Boolean"}}]}]},{type:"constant",attributes:{"type":"Boolean","name":"LINUX","value":"false"},children:[{type:"desc",attributes:{"text":"<p>Flag to detect if the client system is Linux</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Boolean"}}]}]},{type:"constant",attributes:{"type":"Boolean","name":"PSP","value":"false"},children:[{type:"desc",attributes:{"text":"<p>Flag to detect if the client system is Playstation Portable</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Boolean"}}]}]}]},{type:"methods-static",children:[{type:"method",attributes:{"access":"private","isStatic":"true","name":"__init"},children:[{type:"desc",attributes:{"text":"<p>Internal initialize helper</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]}]}]}
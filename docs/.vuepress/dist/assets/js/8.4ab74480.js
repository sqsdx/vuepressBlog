(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{365:function(t,s,a){"use strict";a.r(s);var n=a(44),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"node-学习笔记"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#node-学习笔记"}},[t._v("#")]),t._v(" Node 学习笔记")]),t._v(" "),a("h2",{attrs:{id:"node-基础知识"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#node-基础知识"}},[t._v("#")]),t._v(" Node 基础知识")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("浏览器中的JavaScript是没有文件操做的能力的 但是在NodeJs中的JavaScript具有文件操作能力")])]),t._v(" "),a("li",[a("p",[t._v("fs是file-system的简写，就是文件系统的意思")])]),t._v(" "),a("li",[a("p",[t._v("在Node中如果想要进行文件操作，就必须引入fs这个核心模块， 在fs这个核心模块中，就提供了所有的文件操作相关的API")])])]),t._v(" "),a("h3",{attrs:{id:"核心模块-fs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#核心模块-fs"}},[t._v("#")]),t._v(" 核心模块（fs）")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 使用require方法加载fs核心模块")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" fs  "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'fs'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 读取文件")]),t._v("\nfs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("readFile")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./hello.txt'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("err"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("data")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("toString")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 文件中存储的其实都是二进制")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 可以通过toString()方法转为我们能认识的字符")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 写文件")]),t._v("\nfs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("writeFile")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./hello.txt'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'你好好我给你显示文件写入操作'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("err"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("data")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'文件读写成功'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h3",{attrs:{id:"核心的模块-http"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#核心的模块-http"}},[t._v("#")]),t._v(" 核心的模块(http)")]),t._v(" "),a("ul",[a("li",[t._v("http这个模快的职责就是帮你创建编写服务器的")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 1、加载HTTP核心模块")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" http "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 使用一个http.cerateServer()方法创建一个web服务器")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 返回一个server实例")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" server"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" http"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createServer")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 服务器要干什么")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 提供服务 对数据的服务")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 发请求")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 接收请求")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 处理请求")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 给个反馈（发送响应）")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 注册request请求事件")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 当客户端发送请求过来，就会自懂触发服务器端的request请求事件，然后执行第二个参数")]),t._v("\n\n "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// request请求事件处理函数，需要接收两个参数：")]),t._v("\n \t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Request请求对象")]),t._v("\n \t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 请求对象可以用来获取看客户端的一些请求参数，例如请求路径")]),t._v("\n \t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Resonse响应对象")]),t._v("\n \t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 响应对象可以用来用给客户端发送响应消息")]),t._v("\n server"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("on")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'request'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("request"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("response")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n \t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" url "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" req"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("url\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("url "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        fs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("readFile")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'C:/hainan/app/www/index.html'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("err"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("data")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("err"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// return 有两个作用")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 1、返回结果")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 2、阻止代码继续往后执行")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" res"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("end")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'not font page'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" \n            res"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("end")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        res"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("end")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("' not font page'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 4、绑定端口号，启动服务器")]),t._v("\n server"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("listen")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n \tconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'服务器启动成功了，可以通过http://172.0.0.1:3000,可以进行访问'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n\n")])])]),a("h3",{attrs:{id:"art-template模板引擎"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#art-template模板引擎"}},[t._v("#")]),t._v(" art-template模板引擎")]),t._v(" "),a("ul",[a("li",[t._v("art-template不仅可以在浏览器中使用，也可以在node中使用")])]),t._v(" "),a("h4",{attrs:{id:"nodejs中使用art-template模板引擎"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nodejs中使用art-template模板引擎"}},[t._v("#")]),t._v(" NodeJs中使用art-template模板引擎")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 安装")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// npm install art-template")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 该命令在那执行就会把包下载到哪里，默认会下载到node_modules目录中、")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// node_modules 不要改 也不支持")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 模板引擎 最早就是诞生于服务领域，后来才应用到前端")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 1、安装 npm install art-template")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 2、在需要使用的文件模板中加载 art-tempalte")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 只需要require方法加载就行了 require('art-template')")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 参数中的art-tempalte 就是你下载包的名字")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 也是就是你install的名字是什么,则你的require中的就是什么")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 3、查文档 使用模板引擎的api")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" fs "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'fs'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v("  template "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'art-template'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nfs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("readFile")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./tpl.html'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("err"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("data")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("err"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'读取失败'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 默认读取到的data是二进制")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 二而模板引擎render方法需要接收的是字符串")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 所以我们在这里需要把data 二进制数据转为字符串 才可以给模板字符串使用")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" ret "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" template"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("render")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("toString")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        name"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Jack'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        age"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'18'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        province"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'吉林'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        hobbies"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'羽毛球'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'乒乓球'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ret"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n")])])]),a("h3",{attrs:{id:"客户端渲染"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#客户端渲染"}},[t._v("#")]),t._v(" 客户端渲染")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("1、收到服务端响应的字符串")])]),t._v(" "),a("li",[a("p",[t._v("2、从上倒下解析 ，在解析过程中,如果发现ajax请求,则再发起新的请求")])]),t._v(" "),a("li",[a("p",[t._v("3、发请求")])]),t._v(" "),a("li",[a("p",[t._v("4、拿到ajax响应的数据")])]),t._v(" "),a("li",[a("p",[t._v("5、模板引擎渲染")])]),t._v(" "),a("li",[a("p",[t._v("客户端到服务端正常会发送两次请求")])]),t._v(" "),a("li",[a("p",[t._v("第一次请求拿到的是页面")])]),t._v(" "),a("li",[a("p",[t._v("第二次拿到的是动数据")])])]),t._v(" "),a("h3",{attrs:{id:"服务端渲染"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#服务端渲染"}},[t._v("#")]),t._v(" 服务端渲染")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("页面加数据")])]),t._v(" "),a("li",[a("p",[t._v("服务端渲染 就是一步成功")])]),t._v(" "),a("li",[a("p",[t._v("客户端渲染不利于 SEO 搜索引擎优化")])]),t._v(" "),a("li",[a("p",[t._v("服务端渲染是可以被爬虫抓取到的,客户端异步渲染是很难被爬虫抓到的")])]),t._v(" "),a("li",[a("p",[t._v("所以你会发现 真正的网站既不会是纯异步也不是纯服务端渲染出来的")])]),t._v(" "),a("li",[a("p",[t._v("而是两者的结合")])]),t._v(" "),a("li",[a("p",[t._v("例如京东的商品列表就是采用服务端渲染,目的是为了ESO搜索引擎优化")])]),t._v(" "),a("li",[a("p",[t._v("而他的产品评价列表为了用户体验,而且不需要ESO优化吗,所以采用的是客户端渲染")])])]),t._v(" "),a("h3",{attrs:{id:"模块原理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#模块原理"}},[t._v("#")]),t._v(" 模块原理")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("在Node中，每一个模块都有一个自己的module对象，该module对象中，有一个成员叫：exports 也是一个对象")])]),t._v(" "),a("li",[a("p",[t._v("我们发现，每次导出接口成员的时候都通过modules")])])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" module "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  exports"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        foo"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'bar'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("add")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 2、也就是说该模块中还有这么一句代码")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// var exports = module.exports")]),t._v("\n\n module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("foo "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'bar'")]),t._v("\n module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("add")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" x "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" y\n "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 1、两者一致，那就说明，我们可以使用任意一方来导出")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// console.log(exports == module.exports)")]),t._v("\n\nexports"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("foo "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'bar'")]),t._v("\nexports"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("add")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" x "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" y\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 给exports赋值会断开，module、exports之间的引用")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 同理给module.exports 重新赋值也会断开")]),t._v("\nmodule"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'hello'")]),t._v("\nexports"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("foo "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'foo'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//没用  ")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 谁来require我谁就得到module.exports")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 默认在代码的最后一句：")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 一定记住，最后return的是 module.exports")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 暴露的不是exports")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 所以你给 exports 重新重新赋值不管用")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// return module.exports ")]),t._v("\n\n")])])]),a("h4",{attrs:{id:"exports和module-exports的区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#exports和module-exports的区别"}},[t._v("#")]),t._v(" exports和module.exports的区别？")]),t._v(" "),a("p",[a("em",[t._v("每个模块中都有一个module对象\nmodule对象中都有一个exports对象\n我们可以把需要的导出的成员都挂再到module.exports接口对象中\n也就是：'module.exports.xxx =xxx'\n但是每次都‘module.exports.xxx = xxx' 很麻烦，点太多了\n所以Node为了你方便，同时在某一个模块中都提供了一个成员叫 ’exports‘\n'expports == module.exports' 结果为true\n所以对于:'module.exports.xxx= xxx' 的方式完全可以 'exports=xxx'\n当一个模块需要打导出单个成员的时候，这个时候必须使用：'module.exports = xxxx' 的方式\n不要使用 ’exports ='xxx'不管用\n因为每一个模块最终向外 'return' 的是 'module.exports'\n而 'export' 只是 ’module.exports的一个引用\n所以即使你为 ‘exports= 'xxxx' 重新赋值，也不会影响'module.exports'\n但是有一种赋值方式比较特殊：exports = module.exports 这个用来重新建立引用关系的")])]),t._v(" "),a("h3",{attrs:{id:"标识分析"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#标识分析"}},[t._v("#")]),t._v(" 标识分析")]),t._v(" "),a("p",[t._v("// 如果是非路径形式的模块标识")]),t._v(" "),a("h4",{attrs:{id:"路径形式的模块"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#路径形式的模块"}},[t._v("#")]),t._v(" 路径形式的模块")]),t._v(" "),a("ul",[a("li",[t._v("./ 当前目录不可以省略")]),t._v(" "),a("li",[t._v("../ 上一级目录不可以省略")]),t._v(" "),a("li",[t._v("/xxx 几乎不用")]),t._v(" "),a("li",[t._v("d:/a/foo.js  几乎不用")]),t._v(" "),a("li",[t._v("首位的 / 在这里表示的是当前文件模块所属磁盘根路径")]),t._v(" "),a("li",[t._v(".js文件")]),t._v(" "),a("li",[t._v("require('./foo.js')")])]),t._v(" "),a("h4",{attrs:{id:"核心模块-本质也是文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#核心模块-本质也是文件"}},[t._v("#")]),t._v(" 核心模块（本质也是文件）")]),t._v(" "),a("ul",[a("li",[t._v("核心模块文件已经被编译到二进制文件中了，我们只需要按照名字来加载就可以了")]),t._v(" "),a("li",[t._v("require('fs')")]),t._v(" "),a("li",[t._v("require('http')")])]),t._v(" "),a("h4",{attrs:{id:"第三方模块"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#第三方模块"}},[t._v("#")]),t._v(" 第三方模块")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("凡是第三方你模块都必须通过npm 来下载")])]),t._v(" "),a("li",[a("p",[t._v("使用的时候可以通过 require（'包名'）的方式来进行加载才可以使用")])]),t._v(" "),a("li",[a("p",[t._v("不可能有任何一个第三方包和核心模块的名字是一样的")])]),t._v(" "),a("li",[a("p",[t._v("既不是核心模块，也不是路径形式的模块")])]),t._v(" "),a("li",[a("p",[t._v("先找到当前文件所处目录中的node_modules目录")])]),t._v(" "),a("li",[a("p",[t._v("node_modules/art-template")])]),t._v(" "),a("li",[a("p",[t._v("node_modules/art-template/package.json文件")])]),t._v(" "),a("li",[a("p",[t._v("node_modules/art-template/package.json文件中的main属性")])]),t._v(" "),a("li",[a("p",[t._v("main属性中就记录了art-tamplate的入口文件")])]),t._v(" "),a("li",[a("p",[t._v("然后加载使用这个第三方文件")])]),t._v(" "),a("li",[a("p",[t._v("实际上最终加载的还是文件")])]),t._v(" "),a("li",[a("p",[t._v("如果package.json文件不存在或者mian指定的人口模块也是没有")])]),t._v(" "),a("li",[a("p",[t._v("则node会自动找到该目录下的index.js")])]),t._v(" "),a("li",[a("p",[t._v("也就是说index.js会作为一个默认的备选项")])]),t._v(" "),a("li",[a("p",[t._v("如果以上所有的任意一个条件都不成立，则会进入上一级目录中的node_modules目录")])]),t._v(" "),a("li",[a("p",[t._v("如果上一级目录，上级目录.....直到根目录，就会报错")])]),t._v(" "),a("li",[a("p",[t._v("注意我们的一个项目有且只有一个node_modules,放在项目根目录中，这样的话项目中就会所有的子目录中的代码都可以加载到第三包\nvar template = require('art-template')\nrequire('a')")])])]),t._v(" "),a("h4",{attrs:{id:"模块查找机制"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#模块查找机制"}},[t._v("#")]),t._v(" 模块查找机制")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("优先冲缓存加载")])]),t._v(" "),a("li",[a("p",[t._v("核心模块")])]),t._v(" "),a("li",[a("p",[t._v("路径形式的文件模块")])]),t._v(" "),a("li",[a("p",[t._v("第三方模块")])]),t._v(" "),a("li",[a("p",[t._v("推荐书籍《深入浅出Node.js》中的模块系统章节")])])]),t._v(" "),a("h3",{attrs:{id:"第三方命令行工具-nodemon"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#第三方命令行工具-nodemon"}},[t._v("#")]),t._v(" 第三方命令行工具 nodemon")]),t._v(" "),a("ul",[a("li",[t._v("nodemon 是一个基于NodeJs 开发的已发个第三方命令行工具，哦我们使用需要独立安装、")])]),t._v(" "),a("p",[t._v("npm install --global nodemon")]),t._v(" "),a("p",[t._v("node app.js")]),t._v(" "),a("p",[t._v("nodemon app.js")]),t._v(" "),a("p",[t._v("只要是通过nodemon启动的服务则会监视你的文件变化，当文件变化的时候，会自动帮你启动服务器")]),t._v(" "),a("h3",{attrs:{id:"知识点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#知识点"}},[t._v("#")]),t._v(" 知识点")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("301永久重定向 浏览器会记住")])]),t._v(" "),a("li",[a("p",[t._v("直接去跳到 b 了")])]),t._v(" "),a("li",[a("p",[t._v("302临时重定向")])]),t._v(" "),a("li",[a("p",[t._v("a.com b.com")])]),t._v(" "),a("li",[a("p",[t._v("a.com 还会请求a")])]),t._v(" "),a("li",[a("p",[t._v("a 告诉浏览器你去b")])]),t._v(" "),a("li",[a("p",[t._v("所有的文件操作api都是异步的")])]),t._v(" "),a("li",[a("p",[t._v("文件操作中的路径可以省略")])])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("fs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("readFile")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'data/a.txt'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("err"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("data")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("err"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'读取失败哦'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n")])])]),a("ul",[a("li",[t._v("在模快加载中，相对路径中的 ./不能省略")]),t._v(" "),a("li",[t._v("require('data/foo.js')  报错")]),t._v(" "),a("li",[t._v("require('./data/foo.js')")]),t._v(" "),a("li",[t._v("在文件操作的相对路径中、")]),t._v(" "),a("li",[t._v("./data/a.txt 相当于当前目录")]),t._v(" "),a("li",[t._v("data/a.txt 先对于当前目录")]),t._v(" "),a("li",[t._v("/data/a.txt 绝对路径 当前文件模块所处磁盘根目录")]),t._v(" "),a("li",[t._v("c:/xx/xx 绝对路径")])])])}),[],!1,null,null,null);s.default=e.exports}}]);
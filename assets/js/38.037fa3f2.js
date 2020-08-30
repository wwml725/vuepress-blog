(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{386:function(t,n,s){"use strict";s.r(n);var a=s(25),o=Object(a.a)({},(function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"执行环境"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#执行环境"}},[t._v("#")]),t._v(" 执行环境")]),t._v(" "),s("p",[t._v("每一个执行环境都有一个与之关联的变量对象，环境中定义的所有变量和函数都保存在这个对象中。")]),t._v(" "),s("h2",{attrs:{id:"全局执行环境"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#全局执行环境"}},[t._v("#")]),t._v(" 全局执行环境")]),t._v(" "),s("p",[t._v("全局执行环境是最外层的一个执行环境，在浏览器中全局执行环境被认为是window对象，因此所有全局变量和函数都是作为window对象的属性和方法创建的。")]),t._v(" "),s("ul",[s("li",[t._v("当一个执行环境中的所有代码执行完毕后，该环境被销毁，保存在其中的所有变量和函数定义也随之被销毁。")]),t._v(" "),s("li",[t._v("全局执行环境直到退出应用程序时才会被销毁。")]),t._v(" "),s("li",[t._v("每一个函数都有自己的执行环境。")])]),t._v(" "),s("h2",{attrs:{id:"作用域链"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#作用域链"}},[t._v("#")]),t._v(" 作用域链")]),t._v(" "),s("p",[t._v("代码在环境中执行的时候，会创建一个变量对象的作用域链。")]),t._v(" "),s("ol",[s("li"),t._v(" "),s("li",[t._v("作用域链的前端，始终都是当前执行的代码所在环境的变量对象。")]),t._v(" "),s("li",[t._v("如果这个环境是“函数”，“变量对象”是他的“活动对象”。活动对象在最开始时，只包含一个变量，就是arguments对象。（这个对象在全局环境中是不存在的）")]),t._v(" "),s("li",[t._v("作用域中的下一个变量对象来自包含环境，在下一个变量对象来自下一个包含环境 ，一直延续到全局执行环境。")]),t._v(" "),s("li",[t._v("全局执行环境的变量对象始终都是作用域链中的最后一个对象。")])]),t._v(" "),s("p",[t._v("【标识符解析】：沿着“作用域链”一级一级的搜索“标识符”的过程。")]),t._v(" "),s("ol",[s("li",[t._v("搜索过程始终从作用域链的前段开始，然后逐级的向后回溯，直到找到标识符为止（如果找不到标识符通常会报错）")]),t._v(" "),s("li",[t._v("问：标识符指的是什么？")])]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//具体问题具体分析：")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//1、")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('/*var color = "blue";\nfunction changeColor(){\n    if(color = "blue"){\n        color = "red"\n    }else{\n        color="blue"\n    }\n}\nchangeColor();\nconsole.log("Color is now " + color);*/')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*\n就上面的问题而言：\n    1、函数changeColor()的作用域链包含两个对象：一个是他自己的变量对象arguments对象，另一个是全局环境的变量对象。\n    2、可以在函数内部访问变量color，就因为可以在这个作用域链中找到它、\n* */")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//2、局部作用域中定义的变量可以在局部环境中与全局变量互换使用。")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" color "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"blue"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("changeColor")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" anotherColor "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"red"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("swapColors")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" tempColor "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" anotherColor"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        anotherColor"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("color"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        color"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("tempColor"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//在这里可以访问tempColor、anotherColor、color")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//在这里可以访问anotherColor、color但不能访问tempColor")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("swapColors")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//这里只能访问color")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("changeColor")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*\n*   以上代码涉及到三个执行环境：\n*       1、全局环境\n*       2、changeColor()局部环境\n*       3、swapColor()局部环境\n* 总结一句话：子执行环境可以访问它的父执行环境，调用或者修改父执行环境中的变量或者函数；父执行环境不能访问子执行环境。\n*\n* 也就是说：\n* 1、内部环境可以通过作用域链访问所有的外部环境，但外部环境不能访问内部环境中的任何变量和函数。\n* 2、内部环境一开始会先在自己的变量对象中搜索变量和函数名，如果搜索不到在搜索上一级作用域链。\n*\n*\n* */")]),t._v("\n")])])])])}),[],!1,null,null,null);n.default=o.exports}}]);
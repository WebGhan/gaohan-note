(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{380:function(t,e,s){"use strict";s.r(e);var a=s(25),n=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"风格指南"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#风格指南"}},[t._v("#")]),t._v(" 风格指南")]),t._v(" "),s("p",[t._v("本项目的风格指南主要是参照 Vue 官方的"),s("a",{attrs:{href:"https://cn.vuejs.org/v2/style-guide/",target:"_blank",rel:"noopener noreferrer"}},[t._v("《风格指南》"),s("OutboundLink")],1),t._v("。在真正开始使用该项目之前建议先阅读一遍指南，这能帮助你写出更规范和统一的代码。其中大部分规则也都配置在了 "),s("a",{attrs:{href:"https://github.com/vuejs/eslint-plugin-vue",target:"_blank",rel:"noopener noreferrer"}},[t._v("eslint-plugin-vue"),s("OutboundLink")],1),t._v("之中，当没有遵循规则的时候会报错，详细内容见 "),s("a",{attrs:{href:"https://panjiachen.github.io/vue-element-admin-site/zh/guide/advanced/eslint.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("eslint"),s("OutboundLink")],1),t._v("章节。")]),t._v(" "),s("p",[t._v("当然也有一些特殊的规范，是不能被 eslint 校验的。需要人为注意并遵循，最主要的就是文件的命名规则。")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("没有特别说明的，均遵循横线连接 (kebab-case) 的方式命名。")])]),t._v(" "),s("h2",{attrs:{id:"component"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#component"}},[t._v("#")]),t._v(" Component")]),t._v(" "),s("p",[t._v("代表 "),s("code",[t._v("Component")]),t._v(" 的文件都是以大写开头 (PascalCase)，但除了 "),s("code",[t._v("index.vue")]),t._v(" 。")]),t._v(" "),s("p",[t._v("例子：")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("@/components/BackToTop/index.vue")])]),t._v(" "),s("li",[s("code",[t._v("@/components/Charts/Line.vue")])]),t._v(" "),s("li",[s("code",[t._v("@/views/example/components/Button.vue")])])]),t._v(" "),s("h3",{attrs:{id:"嵌套子组件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#嵌套子组件"}},[t._v("#")]),t._v(" 嵌套子组件")]),t._v(" "),s("p",[t._v("嵌套子组件的写法，请参考 "),s("a",{attrs:{href:"https://cn.vuejs.org/v2/style-guide/#%E7%B4%A7%E5%AF%86%E8%80%A6%E5%90%88%E7%9A%84%E7%BB%84%E4%BB%B6%E5%90%8D%E5%BC%BA%E7%83%88%E6%8E%A8%E8%8D%90",target:"_blank",rel:"noopener noreferrer"}},[t._v("紧密耦合的组件名"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("好的例子：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("components/\n|- TodoList/\n   |- Item.vue\n   |- Button.vue\n   |- index.vue\n")])])]),s("p",[t._v("组件只应当嵌套一层，以保证可维护性，反例：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("components/\n|- TodoList/\n   |- Item/\n      |- index.vue\n      |- Button.vue\n   |- index.vue\n")])])]),s("h3",{attrs:{id:"统一导出组件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#统一导出组件"}},[t._v("#")]),t._v(" 统一导出组件")]),t._v(" "),s("p",[t._v("当组件较多时，用 "),s("code",[t._v("index.js")]),t._v(" 统一导出，可以有效减少 "),s("code",[t._v("import")]),t._v(" 的代码行数，并提升项目可维护性。")]),t._v(" "),s("p",[s("strong",[t._v("实际项目中，不管几个组件，均采用该方式导出导入组件。")])]),t._v(" "),s("p",[t._v("例子：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("components/\n|- Item.vue\n|- Button.vue\n|- TodoList.vue\n|- index.js\n")])])]),s("p",[s("code",[t._v("index.js")]),t._v(" 文件内容：")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" Item "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./Item'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" Button "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./Button'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" TodoList "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./TodoList'")]),t._v("\n")])])]),s("p",[t._v("导入方法：")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" Item"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Button"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" TodoList "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./components'")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 或")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" AllComponents "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./components'")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  components"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("AllComponents\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h2",{attrs:{id:"views"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#views"}},[t._v("#")]),t._v(" Views")]),t._v(" "),s("p",[t._v("在 "),s("code",[t._v("views")]),t._v(" 文件下，代表路由的 "),s("code",[t._v(".vue")]),t._v(" 文件都使用横线连接 (kebab-case)，代表路由的文件夹也是使用同样的规则。")]),t._v(" "),s("p",[t._v("例子：")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("@/views/svg-icons/index.vue")])]),t._v(" "),s("li",[s("code",[t._v("@/views/svg-icons/require-icons.js")])])]),t._v(" "),s("p",[t._v("使用横线连接 (kebab-case)来命名views主要是出于以下几个考虑。")]),t._v(" "),s("ul",[s("li",[t._v("横线连接 (kebab-case) 也是官方推荐的命名规范之一。")]),t._v(" "),s("li",[s("code",[t._v("views")]),t._v(" 下的 "),s("code",[t._v(".vue")]),t._v(" 文件代表的是一个路由，所以它需要和 "),s("code",[t._v("component")]),t._v(" 进行区分。")]),t._v(" "),s("li",[t._v("页面的 "),s("code",[t._v("url")]),t._v(" 也都是横线连接的，比如 "),s("code",[t._v("https://www.xxx.admin/export-excel")]),t._v(" ，所以路由对应的 "),s("code",[t._v("view")]),t._v(" 应该要保持统一。")]),t._v(" "),s("li",[t._v("没有大小写敏感问题。")])]),t._v(" "),s("h2",{attrs:{id:"js-文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#js-文件"}},[t._v("#")]),t._v(" JS 文件")]),t._v(" "),s("p",[t._v("所有的 "),s("code",[t._v(".js")]),t._v(" 文件都遵循横线连接 (kebab-case)。")]),t._v(" "),s("p",[t._v("例子：")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("@/utils/open-window.js")])]),t._v(" "),s("li",[s("code",[t._v("@/views/svg-icons/require-icons.js")])]),t._v(" "),s("li",[s("code",[t._v("@/components/MarkdownEditor/default-options.js")])])]),t._v(" "),s("br"),t._v(" "),s("br"),t._v(" "),s("blockquote",[s("p",[s("em",[t._v("参考文档：")])]),t._v(" "),s("p",[t._v("[1] vue-element-admin"),s("a",{attrs:{href:"https://panjiachen.github.io/vue-element-admin-site/zh/guide/advanced/style-guide.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("《风格指南》"),s("OutboundLink")],1)])])])}),[],!1,null,null,null);e.default=n.exports}}]);
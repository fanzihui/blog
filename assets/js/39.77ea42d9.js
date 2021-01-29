(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{484:function(s,t,a){"use strict";a.r(t);var e=a(2),n=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"nuxt-生命周期"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nuxt-生命周期"}},[s._v("#")]),s._v(" Nuxt 生命周期")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://segmentfault.com/img/remote/1460000022742269",alt:"Alt text"}}),s._v(" "),a("img",{attrs:{src:"https://img-blog.csdnimg.cn/20200930160933602.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQxMjkzNTcz,size_16,color_FFFFFF,t_70#pic_center",alt:"Alt text"}})]),s._v(" "),a("h3",{attrs:{id:"重要的点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#重要的点"}},[s._v("#")]),s._v(" 重要的点")]),s._v(" "),a("ol",[a("li",[s._v("获取数据 asyncData() && Fetch()")]),s._v(" "),a("li",[s._v("中间件  middleware")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("\n// 列如在middleware目录中创建baseurl.js文件来定义中间件函数\n\nimport axios from 'axios'\nexport default function ({ route, store, redirect }) {\n    if (store.state) {\n        alert('抱歉您没有token，请先登录')\n        return redirect('/search')\n    }\n}\n\n\n// 之后在nuxt-config.js中配置，之后就可以在每一个页面中使用\n\nrouter: {\n    middleware: 'baseurl'    // 是js文件名字\n}\n\n\n\n// 但是如果不想在每一个页面中使用，可以在需要的页面中指定\n\n// 指定中间件函数\nmiddleware: 'baseurl',\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br")])]),a("ol",{attrs:{start:"3"}},[a("li",[s._v("store 持久化数据(vuex-persistedstate)")]),s._v(" "),a("li",[s._v("validate 动态路由检查数据")]),s._v(" "),a("li",[s._v("vuex 状态树")])]),s._v(" "),a("p",[s._v("actions  dispatch   异步\nmutations  commit   同步")]),s._v(" "),a("ol",{attrs:{start:"6"}},[a("li",[s._v("全局与局部的 css")]),s._v(" "),a("li",[s._v("auth 鉴权")]),s._v(" "),a("li",[s._v("路由自动生成")]),s._v(" "),a("li",[s._v("head 设置")]),s._v(" "),a("li",[s._v("插件系统")]),s._v(" "),a("li",[s._v("路由传参")]),s._v(" "),a("li",[s._v("nuxtServerInit 首屏获取服务端数据")])]),s._v(" "),a("h3",{attrs:{id:"tips"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tips"}},[s._v("#")]),s._v(" tips")]),s._v(" "),a("ol",[a("li",[s._v("修改 默认启动端口")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('"server":{\n "host":"127.0.0.1",\n "port":"3304"\n}\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("ol",{attrs:{start:"2"}},[a("li",[s._v("middleware中的文件抛出错误")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("export default function({ store, error, redirect }) {\n  if (!store.state.user.userInfo.auth) {\n      error({\n       message: '没有权限哦！',\n      statusCode: 403\n     })\n  }\n}\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("ol",{attrs:{start:"3"}},[a("li",[a("p",[s._v("asyncData 挂载时没有 this 对象")])]),s._v(" "),a("li",[a("p",[s._v("修改成后缀为 html 的页面")])])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("<a @click=\"$router.push(`/strA-${'参数id'}.html`)\">去到页面A</a>\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("ol",{attrs:{start:"5"}},[a("li",[s._v("获取当前路由名称和路径")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("获取当前路由名称\n\n$nuxt.$route.path\n获取当前路由路径\n\n$nuxt.$route.name\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("ol",{attrs:{start:"6"}},[a("li",[s._v("在子组件中不要再根元素上使用 v-if 而应该使用 v-show")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('// bad\n<div v-if="isVip">\n\n</div>\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("//good\n<div>\n\n</div>\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("ol",{attrs:{start:"7"}},[a("li",[s._v("遇到 Vue 错误时候"),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v(" [Vue warn]: The client-side rendered virtual DOM tree is not matching server-rendered content ( Nuxt / Vue / lerna monorepo )\n``\n服务端与客户端渲染不一致的问题, 这个问题解决方法有两种\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])])]),s._v(" "),a("li",[s._v("使用 "),a("clinet-only"),s._v(" 标签进行包裹,使其只在客户端加载")],1),s._v(" "),a("li",[s._v("查找代码,用 v-if 切换成 v-show 进行解决")]),s._v(" "),a("li",[s._v("在 nuxt.config.js 中的 使用(未尝试)")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("extend (config, ctx) {\n    config.resolve.symlinks = false\n  }\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("ol",{attrs:{start:"8"}},[a("li",[s._v("nuxt项目"),a("code",[s._v("Failed to execute 'appendChild' on 'Node'")]),s._v("，有没有什么好办法？")])]),s._v(" "),a("p",[s._v("nuxt项目，刷新页面之后报错"),a("code",[s._v("Error while initializing app DOMException: Failed to execute 'appendChild' on 'Node': This node type does not support this method")]),s._v(".有没有什么好的解决办法？")]),s._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.")]),s._v("\n一般在开发环境下，日志会有warning"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("The client"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("side rendered virtual "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("DOM")]),s._v(" tree is not matching server"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("rendered content"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v(" This is likely caused by incorrect "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("HTML")]),s._v(" markup"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" example nesting block"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("level elements inside "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("p"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" or missing "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("tbody"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v(" Bailing hydration and performing full client"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("side render"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("\n\n但是不影响使用，而且一般都是在刷新当前页面的时候才会报这个警告。但是一旦build发布到线上就会发生DOMException"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" Failed to execute "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'appendChild'")]),s._v(" on "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Node'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" This node type does not support "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),s._v(" method的问题。\n\n我的解决方案是，直接在疑似产生The client"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("side rendered virtual "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("DOM")]),s._v(" tree is not matching server"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("rendered content问题的代码上包裹一层"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("client"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("only"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("标签，直接不让后台渲染这部分代码就解决这个问题了\n\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2.")]),s._v(" 使用 v"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" 切换成 v"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("show\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("ol",{attrs:{start:"9"}},[a("li",[a("p",[s._v("nuxt 项目 "),a("code",[s._v("TypeError: [nuxt] Error while mounting app: Cannot read property 'indexOf' of undefined")]),s._v("\n同 第 8 问题 解决方法一致")])]),s._v(" "),a("li",[a("p",[s._v("网站根目录其实就是平常可见的 /static 目录")])]),s._v(" "),a("li",[a("p",[s._v("nuxt.js 关于页面中css 提取到 link的方法")])])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("那就是在nuxt.config.js下的build里添加 extractCSS: { allChunks: true }这句话\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"相关插件地址"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#相关插件地址"}},[s._v("#")]),s._v(" 相关插件地址")]),s._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/microcipcip/cookie-universal/tree/master/packages/cookie-universal-nuxt",target:"_blank",rel:"noopener noreferrer"}},[s._v("cookie-universal-nuxt"),a("OutboundLink")],1)])])}),[],!1,null,null,null);t.default=n.exports}}]);
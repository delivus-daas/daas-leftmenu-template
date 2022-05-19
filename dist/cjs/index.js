"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("react"),t=require("antd"),n=require("react-router-dom");function a(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var r=a(e),u=t.Menu.SubMenu,l=function(a){var l=a.data,c=a.t,i=a.defaultOpenKeys,o=n.useHistory(),s=e.useState("home"),d=s[0],m=s[1];function f(e){m(null==e?void 0:e.pathname)}e.useEffect((function(){f(window.location);var e=o.listen(f);return function(){e()}}),[]);var p=function(e,t){return r.default.createElement(u,{"data-cy":"customMenuSelect",key:e.title,title:c(e.title)},e.list&&e.list.map((function(e,t){return e.list?p(e):v(e)})))},v=function(e,n){return r.default.createElement(t.Menu.Item,{key:e.path,"data-cy":"customMenuSelectNode"},r.default.createElement("div",{className:"row"},r.default.createElement("span",{className:"flex"},c(e.title)),r.default.createElement("span",{className:"medium menu-count"},e.count)))};return r.default.createElement(t.Menu,{onClick:function(e){e.key?o.push(e.key):o.push("/home")},inlineIndent:0,selectedKeys:[d],className:"menu-container",theme:"dark",mode:"inline",defaultOpenKeys:i},l.map((function(e,t){return e.list?p(e):v(e)})))},c=function(a){var u=a.t,l=a.rightButton,c=n.useHistory(),i=e.useState("home"),o=i[0],s=i[1];function d(e){s(null==e?void 0:e.pathname)}e.useEffect((function(){d(window.location);var e=c.listen(d);return function(){e()}}),[]);var m=e.useMemo((function(){for(var e=[],t=o.split("/").filter((function(e){return e.length>0})),n=0;n<t.length;n++){for(var a=t[n],r=0;r<n;r++)a=t[r]+"."+a;e.push(a)}return e}),[o]);return console.log("custombread",m),r.default.createElement("div",{className:"breadcrumb-container"},r.default.createElement(t.Breadcrumb,{separator:">"},m&&m.map((function(e,n){return r.default.createElement(t.Breadcrumb.Item,{"data-cy":"customBreadCrumbItem",key:"breaditem"+n},u(e))}))),!!l&&r.default.createElement(t.Button,{type:"text",className:"body primary breadcrumb-btn-left",onClick:null==l?void 0:l.onClick},null==l?void 0:l.title))};exports.CustomBreadcrumb=c,exports.CustomMenu=l,exports.MenuTemplate=function(t){var a=t.children,u=t.showBreadTitle,i=void 0===u||u,o=t.menuData,s=t.header,d=t.defaultOpenKeys,m=t.t;n.useHistory();var f=function(){document.documentElement.style.setProperty("--app-height","".concat(window.innerHeight,"px"))};return e.useEffect((function(){return window.addEventListener("resize",f),f(),function(){window.removeEventListener("resize",f)}}),[]),r.default.createElement("div",{className:"container"},r.default.createElement("div",{className:"menu-header"},s),r.default.createElement(l,{data:o,t:m,defaultOpenKeys:d}),r.default.createElement("div",{className:"menu-temp-content"},i&&r.default.createElement(c,{t:m}),r.default.createElement("div",{className:"menu-child"},a)))};
//# sourceMappingURL=index.js.map

import e,{useState as t,useEffect as n,useMemo as a}from"react";import{Menu as r,Breadcrumb as i,Button as c}from"antd";import{useHistory as o}from"react-router-dom";var l=r.SubMenu,u=function(a){var i=a.data,c=a.t,u=a.defaultOpenKeys,m=o(),s=t("home"),d=s[0],f=s[1];function p(e){f(null==e?void 0:e.pathname)}n((function(){p(window.location);var e=m.listen(p);return function(){e()}}),[]);var v=function(t,n){return e.createElement(l,{"data-cy":"customMenuSelect",key:t.title,title:c(t.title)},t.list&&t.list.map((function(e,t){return e.list?v(e):h(e)})))},h=function(t,n){return e.createElement(r.Item,{key:t.path,"data-cy":"customMenuSelectNode"},e.createElement("div",{className:"row"},e.createElement("span",{className:"flex"},c(t.title)),e.createElement("span",{className:"medium menu-count"},t.count)))};return e.createElement(r,{onClick:function(e){e.key?m.push(e.key):m.push("/home")},inlineIndent:0,selectedKeys:[d],className:"menu-container",theme:"dark",mode:"inline",defaultOpenKeys:u},i.map((function(e,t){return e.list?v(e):h(e)})))},m=function(r){var l=r.t,u=r.rightButton,m=r.paths,s=r.onClickLink,d=o(),f=t("home"),p=f[0],v=f[1];function h(e){v(null==e?void 0:e.pathname)}n((function(){h(window.location);var e=d.listen(h);return function(){e()}}),[]);var E=a((function(){var e=[];if(m)e=m;else for(var t=p.split("/").filter((function(e){return e.length>0})),n=0;n<t.length;n++){for(var a=t[n],r=0;r<n;r++)a=t[r]+"."+a;e.push(a)}return e}),[p,m]);function y(e){return function(){s&&s(e)}}return e.createElement("div",{className:"breadcrumb-container"},e.createElement(i,{separator:">"},E&&E.map((function(t,n){return e.createElement(i.Item,{"data-cy":"customBreadCrumbItem",key:"breaditem"+n,className:s?"link":"",onClick:s?y(t):void 0},l(t))}))),!!u&&e.createElement(c,{type:"text",className:"body primary breadcrumb-btn-left",onClick:null==u?void 0:u.onClick},null==u?void 0:u.title))},s=function(t){var a=t.children,r=t.showBreadTitle,i=void 0===r||r,c=t.menuData,l=t.header,s=t.defaultOpenKeys,d=t.t;o();var f=function(){document.documentElement.style.setProperty("--app-height","".concat(window.innerHeight,"px"))};return n((function(){return window.addEventListener("resize",f),f(),function(){window.removeEventListener("resize",f)}}),[]),e.createElement("div",{className:"container"},e.createElement("div",{className:"menu-header"},l),e.createElement(u,{data:c,t:d,defaultOpenKeys:s}),e.createElement("div",{className:"menu-temp-content"},i&&e.createElement(m,{t:d}),e.createElement("div",{className:"menu-child"},a)))};export{m as CustomBreadcrumb,u as CustomMenu,s as MenuTemplate};
//# sourceMappingURL=index.js.map

(this.webpackJsonpeditorjs=this.webpackJsonpeditorjs||[]).push([[0],{23:function(t,e,n){},24:function(t,e,n){},32:function(t,e,n){},34:function(t,e,n){},35:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),o=n(4),i=n.n(o),r=(n(23),n(24),n(3)),s=n(8),u=n(11),l=n.n(u),d=n(12),h=n.n(d),j=n(13),b=n.n(j),v=n(14),f=n.n(v),O=n(15),g=n.n(O),m=n(16),p=n.n(m),x=n(2),S=n(17),k=n(18),w=n(5),y=(n(32),n(0)),C=function(t){var e=t.data,n=t.onDataChange,c=Object(a.useState)(e||{text:"",author:"",color:"#000000"}),o=Object(r.a)(c,2),i=o[0],s=o[1];Object(a.useEffect)((function(){n(i)}),[i]);var u=function(t){var e=t.target;s(Object(x.a)(Object(x.a)({},i),{},Object(w.a)({},e.name,e.value)))};return Object(y.jsxs)("div",{className:"block",children:[Object(y.jsx)("div",{className:"block__title",children:"Custom block"}),Object(y.jsxs)("div",{className:"block__form",children:[Object(y.jsx)("input",{onChange:u,value:i.text,name:"text"}),Object(y.jsx)("input",{onChange:u,value:i.author,name:"author"}),Object(y.jsx)("input",{onChange:u,value:i.color,name:"color",type:"color"})]})]})},N=function(){function t(e){var n=e.data,a=(e.config,e.api),c=e.readOnly;Object(S.a)(this,t),this.api=a,this.readOnly=c,this.data=n||void 0,this.CSS={wrapper:"walkthrough-timeline"},this.nodes={holder:null}}return Object(k.a)(t,[{key:"render",value:function(){var t=this,e=document.createElement("div");e.setAttribute("class",this.CSS.wrapper),this.nodes.holder=e;return i.a.render(Object(y.jsx)(C,{onDataChange:function(e){t.data=Object(x.a)({},e)},data:this.data}),e),this.nodes.holder}},{key:"save",value:function(){return this.data}}],[{key:"toolbox",get:function(){return{icon:'<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M19 15v4H5v-4h14m1-2H4c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h16c.55 0 1-.45 1-1v-6c0-.55-.45-1-1-1zM7 18.5c-.82 0-1.5-.67-1.5-1.5s.68-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM19 5v4H5V5h14m1-2H4c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h16c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zM7 8.5c-.82 0-1.5-.67-1.5-1.5S6.18 5.5 7 5.5s1.5.68 1.5 1.5S7.83 8.5 7 8.5z"/></svg>',title:"MyBlock"}}},{key:"isReadOnlySupported",get:function(){return!0}}]),t}(),M={header:{class:b.a,config:{placeholder:"Enter a header",levels:[1,2,3]}},list:h.a,underline:p.a,image:g.a,delimiter:f.a,embed:l.a,myBlock:N},z=(n(34),"editor"),B=function(){var t=Object(a.useState)(!1),e=Object(r.a)(t,2),n=e[0],c=e[1],o=Object(a.useState)(function(){var t=window.localStorage.getItem(z);return t?JSON.parse(t):{blocks:[]}}()),i=Object(r.a)(o,1)[0],u=Object(a.useRef)(),l=function(t){console.log("SAVED",JSON.stringify(t,null,2)),window.localStorage.setItem(z,JSON.stringify(t))};return Object(y.jsxs)("div",{children:[Object(y.jsx)(s.a,{autofocus:!0,onReady:function(){return c(!0)},tools:M,data:i,instanceRef:function(t){return u.current=t}}),n&&Object(y.jsx)("button",{className:"button",onClick:function(){var t;return null===(t=u.current)||void 0===t?void 0:t.save().then(l)},children:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"})]})};var E=function(){return Object(y.jsx)("div",{className:"app",children:Object(y.jsx)(B,{})})},H=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,36)).then((function(e){var n=e.getCLS,a=e.getFID,c=e.getFCP,o=e.getLCP,i=e.getTTFB;n(t),a(t),c(t),o(t),i(t)}))};i.a.render(Object(y.jsx)(c.a.StrictMode,{children:Object(y.jsx)(E,{})}),document.getElementById("root")),H()}},[[35,1,2]]]);
//# sourceMappingURL=main.6ccb2140.chunk.js.map
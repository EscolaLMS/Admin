(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"4EEj":function(F,D,a){"use strict";a.d(D,"a",function(){return h});var f=a("+L6B"),y=a("2/Rp"),M=a("q1tI"),i=a.n(M),d=a("55Ip"),K=a("tMyG"),C=a("CNgu"),E=a.n(C),v=a("nKUr"),j=a.n(v),h=function(T){var m,u,P=T.id,b=T.onSubmit,B=Object(M.useContext)(C.EditorContext),U=B.state,J="cid-".concat(P),A=U.value==="loaded"&&((m=U.settings)===null||m===void 0?void 0:m.contents)&&((u=U.settings)===null||u===void 0?void 0:u.contents[J]),p=A?A.title:P?"Loading Content...":"New Content";return Object(v.jsx)(K.a,{title:"H5P. HTML5 Content ".concat(p),extra:[P&&Object(v.jsx)(y.a,{type:"primary",children:Object(v.jsx)(d.a,{to:"/h5ps/preview/".concat(P),children:"Preview"})})],header:{breadcrumb:{routes:[{path:"h5ps",breadcrumbName:"HP5s"},{path:p,breadcrumbName:"Form"}]}},children:Object(v.jsx)(C.Editor,{id:P,onSubmit:function(V){return b(V.id)}})})},z=h},"55Ip":function(F,D,a){"use strict";a.d(D,"a",function(){return B});var f=a("Ty5D"),y=a("dI71"),M=a("q1tI"),i=a.n(M),d=a("YS25"),K=a("17x9"),C=a.n(K),E=a("wx14"),v=a("zLVn"),j=a("9R94"),h=function(t){Object(y.a)(e,t);function e(){for(var r,s=arguments.length,c=new Array(s),o=0;o<s;o++)c[o]=arguments[o];return r=t.call.apply(t,[this].concat(c))||this,r.history=Object(d.a)(r.props),r}var n=e.prototype;return n.render=function(){return i.a.createElement(f.c,{history:this.history,children:this.props.children})},e}(i.a.Component),z=function(t){Object(y.a)(e,t);function e(){for(var r,s=arguments.length,c=new Array(s),o=0;o<s;o++)c[o]=arguments[o];return r=t.call.apply(t,[this].concat(c))||this,r.history=Object(d.b)(r.props),r}var n=e.prototype;return n.render=function(){return i.a.createElement(f.c,{history:this.history,children:this.props.children})},e}(i.a.Component),R=function(e,n){return typeof e=="function"?e(n):e},T=function(e,n){return typeof e=="string"?Object(d.c)(e,null,null,n):e},m=function(e){return e},u=i.a.forwardRef;typeof u=="undefined"&&(u=m);function P(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}var b=u(function(t,e){var n=t.innerRef,r=t.navigate,s=t.onClick,c=Object(v.a)(t,["innerRef","navigate","onClick"]),o=c.target,_=Object(E.a)({},c,{onClick:function(l){try{s&&s(l)}catch(L){throw l.preventDefault(),L}!l.defaultPrevented&&l.button===0&&(!o||o==="_self")&&!P(l)&&(l.preventDefault(),r())}});return m!==u?_.ref=e||n:_.ref=n,i.a.createElement("a",_)}),B=u(function(t,e){var n=t.component,r=n===void 0?b:n,s=t.replace,c=t.to,o=t.innerRef,_=Object(v.a)(t,["component","replace","to","innerRef"]);return i.a.createElement(f.e.Consumer,null,function(O){O||Object(j.a)(!1);var l=O.history,L=T(R(c,O.location),O.location),x=L?l.createHref(L):"",I=Object(E.a)({},_,{href:x,navigate:function(){var S=R(c,O.location),W=s?l.replace:l.push;W(S)}});return m!==u?I.ref=e||o:I.innerRef=o,i.a.createElement(r,I)})});if(!1)var U,J;var A=function(e){return e},p=i.a.forwardRef;typeof p=="undefined"&&(p=A);function G(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return e.filter(function(r){return r}).join(" ")}var V=p(function(t,e){var n=t["aria-current"],r=n===void 0?"page":n,s=t.activeClassName,c=s===void 0?"active":s,o=t.activeStyle,_=t.className,O=t.exact,l=t.isActive,L=t.location,x=t.sensitive,I=t.strict,N=t.style,S=t.to,W=t.innerRef,q=Object(v.a)(t,["aria-current","activeClassName","activeStyle","className","exact","isActive","location","sensitive","strict","style","to","innerRef"]);return i.a.createElement(f.e.Consumer,null,function(Y){Y||Object(j.a)(!1);var g=L||Y.location,Q=T(R(S,g),g),X=Q.pathname,Z=X&&X.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1"),w=Z?Object(f.f)(g.pathname,{path:Z,exact:O,sensitive:x,strict:I}):null,H=!!(l?l(w,g):w),k=H?G(_,c):_,tt=H?Object(E.a)({},N,{},o):N,$=Object(E.a)({"aria-current":H&&r||null,className:k,style:tt,to:Q},q);return A!==p?$.ref=e||W:$.innerRef=W,i.a.createElement(B,$)})});if(!1)var at},pj0m:function(F,D,a){"use strict";a.r(D);var f=a("q1tI"),y=a.n(f),M=a("Ty5D"),i=a("9kvl"),d=a("CNgu"),K=a.n(d),C=a("4EEj"),E=a("nKUr"),v=a.n(E);D.default=function(){var j=Object(M.g)(),h=j.h5p;return Object(E.jsx)(d.EditorContextProvider,{url:"".concat("https://escola-lms-api.stage.etd24.pl","/api/hh5p"),children:Object(E.jsx)(C.a,{onSubmit:function(R){return h==="new"&&i.c.push("/h5ps/".concat(R))},id:h==="new"?void 0:h})})}}}]);

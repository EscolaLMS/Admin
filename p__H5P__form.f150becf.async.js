(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"4EEj":function(I,E,t){"use strict";t.d(E,"a",function(){return O});var l=t("+L6B"),v=t("2/Rp"),s=t("q1tI"),D=t.n(s),e=t("55Ip"),u=t("tMyG"),a=t("CNgu"),o=t.n(a),d=t("9kvl"),n=t("nKUr"),r=t.n(n),O=function(m){var i,P,_=m.id,K=m.onSubmit,j=Object(d.i)(),L=Object(s.useContext)(a.EditorContext),M=L.state,U="cid-".concat(_),C=M.value==="loaded"&&((i=M.settings)===null||i===void 0?void 0:i.contents)&&((P=M.settings)===null||P===void 0?void 0:P.contents[U]),h=C?C.title:_?"Loading Content...":"New Content";return Object(n.jsx)(u.a,{title:Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(d.a,{id:"H5P_new_content_title"})," ".concat(h)]}),extra:[_&&Object(n.jsx)(v.a,{type:"primary",children:Object(n.jsx)(e.a,{to:"/h5ps/preview/".concat(_),children:Object(n.jsx)(d.a,{id:"preview"})})})],header:{breadcrumb:{routes:[{path:"h5ps",breadcrumbName:j.formatMessage({id:"H5P"})},{path:h,breadcrumbName:j.formatMessage({id:"form"})}]}},children:Object(n.jsx)(a.Editor,{id:_,onSubmit:function(B){return K(B.id)}})})},c=O},pj0m:function(I,E,t){"use strict";t.r(E);var l=t("q1tI"),v=t.n(l),s=t("Ty5D"),D=t("9kvl"),e=t("CNgu"),u=t.n(e),a=t("4EEj"),o=t("nKUr"),d=t.n(o);E.default=function(){var n=Object(s.g)(),r=n.h5p;return Object(o.jsx)(e.EditorContextProvider,{url:"".concat("https://escola-lms-api.stage.etd24.pl","/api/hh5p"),children:Object(o.jsx)(a.a,{onSubmit:function(c){return r==="new"&&D.d.push("/h5ps/".concat(c))},id:r==="new"?void 0:r})})}}}]);

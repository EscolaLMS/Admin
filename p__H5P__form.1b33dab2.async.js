(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{"3CzR":function(N,m,t){"use strict";var o=t("nhC9"),i=t("9kvl"),b=t("jCWc"),j=t("kPKH"),g=t("14J3"),T=t("BMrR"),U=t("T2oS"),l=t("W9HT"),W=t("fOrg"),y=t("+KLJ"),A=t("miYZ"),d=t("tsqr"),C=t("tJVT"),c=t("q1tI"),u=t.n(c),v=t("nzng"),a=t("pDTe"),e=t("nKUr"),s=function(P){var f=P.id,x=P.onSubmitted,_=P.onLoaded,L=Object(c.useState)(),M=Object(C.a)(L,2),S=M[0],V=M[1],H=Object(c.useState)(!1),B=Object(C.a)(H,2),Y=B[0],K=B[1],J=Object(c.useState)(),G=Object(C.a)(J,2),I=G[0],R=G[1],X=Object(i.l)(),z=X.locale.split("-")[0];Object(c.useEffect)(function(){f&&(K(!0),Object(v.c)(f==="new"?void 0:f,z).then(function(E){E.success?(_&&_(E.data),V(E.data)):R(E.message)}).catch(function(E){return E&&R(E.toString())}).finally(function(){return K(!1)}))},[f]);var Z=Object(c.useCallback)(function(E){K(!0),Object(v.f)(E,f==="new"?void 0:f).then(function(h){h.success?(x(h.data.id),d.b.success(Object(e.jsx)(i.a,{id:"h5p_edited",defaultMessage:"H5P Element edited and saved successfully"}))):R(h.message)}).catch(function(h){return h&&R(h.toString())}).finally(function(){return K(!1)})},[]);return S?Object(e.jsxs)(u.a.Fragment,{children:[I&&Object(e.jsx)(y.a,{message:I,type:"error"}),S&&Object(e.jsx)(a.ContextlessEditor,{onError:function(h){return console.error(h)},state:S,allowSameOrigin:!0,onSubmit:Z,loading:Y,lang:z})]}):Object(e.jsx)(j.a,{children:Object(e.jsxs)(T.a,{justify:"center",align:"middle",children:[I&&Object(e.jsx)(y.a,{message:I,type:"error"}),Object(e.jsx)(l.a,{})]})})},r=s,n=t("sN0a"),p=function(P){var f=P.defaultCard,x=f===void 0?"edit":f,_=P.id,L=P.onSubmit,M=P.onLoaded;return Object(e.jsxs)(o.a,{tabs:{type:"card",defaultActiveKey:x},children:[Object(e.jsx)(o.a.TabPane,{disabled:!_,tab:Object(e.jsx)(i.a,{id:"edit"}),children:Object(e.jsx)(r,{id:_,onSubmitted:L,onLoaded:M},_)},"edit"),_!=="new"&&Object(e.jsx)(o.a.TabPane,{disabled:!_,tab:Object(e.jsx)(i.a,{id:"preview"}),children:Object(e.jsx)(n.a,{id:_,onLoaded:M})},"preview")]})},O=m.a=p},nzng:function(N,m,t){"use strict";t.d(m,"d",function(){return g}),t.d(m,"c",function(){return W}),t.d(m,"b",function(){return y}),t.d(m,"f",function(){return A}),t.d(m,"e",function(){return C}),t.d(m,"a",function(){return u});var o=t("qLMh"),i=t("k1fw"),b=t("9og8"),j=t("9kvl");function g(a,e){return T.apply(this,arguments)}function T(){return T=Object(b.a)(Object(o.a)().mark(function a(e,s){return Object(o.a)().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",Object(j.i)("/api/admin/hh5p/content",Object(i.a)({method:"GET",params:e},s||{})));case 1:case"end":return n.stop()}},a)})),T.apply(this,arguments)}function U(a,e){return l.apply(this,arguments)}function l(){return l=Object(b.a)(Object(o.a)().mark(function a(e,s){return Object(o.a)().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",Object(j.i)("/api/admin/hh5p/content/".concat(e),Object(i.a)({method:"GET"},s||{})));case 1:case"end":return n.stop()}},a)})),l.apply(this,arguments)}var W=function(e){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"en",r=arguments.length>2?arguments[2]:void 0,n=e?"/api/admin/hh5p/editor/".concat(e):"/api/admin/hh5p/editor";return n=s?"".concat(n,"?lang=").concat(s):n,Object(j.i)(n,Object(i.a)({method:"GET"},r||{}))},y=function(e){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"en",r=arguments.length>2?arguments[2]:void 0,n="/api/admin/hh5p/content/".concat(e);return n=s?"".concat(n,"?lang=").concat(s):n,Object(j.i)(n,Object(i.a)({method:"GET"},r||{}))};function A(a,e,s){return d.apply(this,arguments)}function d(){return d=Object(b.a)(Object(o.a)().mark(function a(e,s,r){return Object(o.a)().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return p.abrupt("return",Object(j.i)(s?"/api/admin/hh5p/content/".concat(s):"/api/admin/hh5p/content",Object(i.a)({method:"POST",headers:{"Content-Type":"application/json"},data:e},r||{})));case 1:case"end":return p.stop()}},a)})),d.apply(this,arguments)}function C(a){return c.apply(this,arguments)}function c(){return c=Object(b.a)(Object(o.a)().mark(function a(e){return Object(o.a)().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",Object(j.i)("/api/admin/hh5p/content/".concat(e),{method:"DELETE"}));case 1:case"end":return r.stop()}},a)})),c.apply(this,arguments)}function u(a){return v.apply(this,arguments)}function v(){return v=Object(b.a)(Object(o.a)().mark(function a(e){return Object(o.a)().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",Object(j.i)("/api/admin/hh5p/content?per_page=0",Object(i.a)({method:"GET"},e||{})));case 1:case"end":return r.stop()}},a)})),v.apply(this,arguments)}},pj0m:function(N,m,t){"use strict";t.r(m);var o=t("tJVT"),i=t("q1tI"),b=t.n(i),j=t("Ty5D"),g=t("9kvl"),T=t("3CzR"),U=t("tMyG"),l=t("nKUr"),W=t.n(l);m.default=function(){var y=Object(j.l)(),A=Object(g.l)(),d=y.h5p,C=Object(i.useState)(""),c=Object(o.a)(C,2),u=c[0],v=c[1];return Object(l.jsx)(U.a,{title:Object(l.jsxs)(l.Fragment,{children:[u?Object(l.jsx)(g.a,{id:"H5P_edit_content_title"}):Object(l.jsx)(g.a,{id:"H5P_new_content_title"})," ".concat(u)]}),header:{breadcrumb:{routes:[{path:"h5ps",breadcrumbName:A.formatMessage({id:"H5P"})},{path:u,breadcrumbName:A.formatMessage({id:"form"})}]}},children:Object(l.jsx)(T.a,{onLoaded:function(e){var s=e.contents&&e.contents["cid-".concat(d)];s&&s.title&&v(s.title)},onSubmit:function(e){return d==="new"&&g.f.push("/courses/h5ps/".concat(e))},id:d==="new"||!d?"new":Number(d)})})}},sN0a:function(N,m,t){"use strict";var o=t("/zsF"),i=t("PArb"),b=t("oBTY"),j=t("jCWc"),g=t("kPKH"),T=t("14J3"),U=t("BMrR"),l=t("T2oS"),W=t("W9HT"),y=t("fOrg"),A=t("+KLJ"),d=t("tJVT"),C=t("tU7J"),c=t("wFql"),u=t("q1tI"),v=t.n(u),a=t("nzng"),e=t("pDTe"),s=t.n(e),r=t("9kvl"),n=t("ovOe"),p=t.n(n),O=t("nKUr"),Q=t.n(O),P=c.a.Title,f=function(_){var L=_.id,M=_.onXAPI,S=_.onLoaded,V=Object(u.useState)(),H=Object(d.a)(V,2),B=H[0],Y=H[1],K=Object(u.useState)(!1),J=Object(d.a)(K,2),G=J[0],I=J[1],R=Object(u.useState)([]),X=Object(d.a)(R,2),z=X[0],Z=X[1],E=Object(u.useState)(),h=Object(d.a)(E,2),F=h[0],w=h[1],k=Object(r.l)(),q=k.locale.split("-")[0];return Object(u.useEffect)(function(){L&&(I(!0),Object(a.b)(L,q).then(function(D){D.success?(S&&S(D.data),Y(D.data)):w(D.message)}).catch(function(D){return D&&w(D.toString())}).finally(function(){return I(!1)}))},[L]),B?Object(O.jsxs)(v.a.Fragment,{children:[F&&Object(O.jsx)(A.a,{message:F,type:"error"}),Object(O.jsx)(e.ContextlessPlayer,{contentId:L,onError:function($){return console.error($)},state:B,allowSameOrigin:!0,loading:G,onXAPI:function($){M?M($):Z(function(tt){return[].concat(Object(b.a)(tt),[$])})}}),!M&&Object(O.jsxs)(v.a.Fragment,{children:[Object(O.jsx)(i.a,{}),Object(O.jsxs)("div",{style:{overflow:"auto",maxHeight:"400px"},children:[Object(O.jsx)(P,{level:5,children:"XAPI Events"}),Object(O.jsx)(p.a,{src:z})]})]})]}):Object(O.jsx)(g.a,{children:Object(O.jsxs)(U.a,{justify:"center",align:"middle",children:[F&&Object(O.jsx)(A.a,{message:F,type:"error"}),Object(O.jsx)(W.a,{})]})})};m.a=f}}]);

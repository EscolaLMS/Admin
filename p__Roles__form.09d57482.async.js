(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{"G/Ub":function(U,i,e){"use strict";e.d(i,"d",function(){return C}),e.d(i,"a",function(){return R}),e.d(i,"b",function(){return T}),e.d(i,"c",function(){return P}),e.d(i,"e",function(){return g});var r=e("qLMh"),j=e("k1fw"),O=e("9og8"),b=e("9kvl");function C(t){return p.apply(this,arguments)}function p(){return p=Object(O.a)(Object(r.a)().mark(function t(a){return Object(r.a)().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.abrupt("return",Object(b.g)("/api/admin/roles",Object(j.a)({method:"GET",useCache:!1},a||{})));case 1:case"end":return u.stop()}},t)})),p.apply(this,arguments)}function R(t,a){return A.apply(this,arguments)}function A(){return A=Object(O.a)(Object(r.a)().mark(function t(a,l){return Object(r.a)().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.abrupt("return",Object(b.g)("/api/admin/roles",Object(j.a)({method:"POST",headers:{"Content-Type":"application/json"},data:a},l||{})));case 1:case"end":return s.stop()}},t)})),A.apply(this,arguments)}function T(t,a){return h.apply(this,arguments)}function h(){return h=Object(O.a)(Object(r.a)().mark(function t(a,l){return Object(r.a)().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.abrupt("return",Object(b.g)("/api/admin/roles/".concat(a),Object(j.a)({method:"DELETE",headers:{"Content-Type":"application/json"}},l||{})));case 1:case"end":return s.stop()}},t)})),h.apply(this,arguments)}function P(t,a){return v.apply(this,arguments)}function v(){return v=Object(O.a)(Object(r.a)().mark(function t(a,l){return Object(r.a)().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.abrupt("return",Object(b.g)("/api/admin/roles/".concat(a),Object(j.a)({method:"GET",useCache:!1},l||{})));case 1:case"end":return s.stop()}},t)})),v.apply(this,arguments)}function g(t,a,l){return D.apply(this,arguments)}function D(){return D=Object(O.a)(Object(r.a)().mark(function t(a,l,u){return Object(r.a)().wrap(function(E){for(;;)switch(E.prev=E.next){case 0:return E.abrupt("return",Object(b.g)("/api/admin/roles/".concat(a),Object(j.a)({method:"PATCH",headers:{"Content-Type":"application/json"},data:l},u||{})));case 1:case"end":return E.stop()}},t)})),D.apply(this,arguments)}},O867:function(U,i,e){},Rg7m:function(U,i,e){"use strict";e.r(i);var r=e("k1fw"),j=e("/zsF"),O=e("PArb"),b=e("sRBo"),C=e("kaz8"),p=e("T2oS"),R=e("W9HT"),A=e("miYZ"),T=e("tsqr"),h=e("oBTY"),P=e("qLMh"),v=e("9og8"),g=e("y8nQ"),D=e("Vl3Y"),t=e("tJVT"),a=e("q1tI"),l=e.n(a),u=e("VMEa"),s=e("nhC9"),E=e("G/Ub"),y=e("tMyG"),S=e("Ty5D"),F=e("9kvl"),G=e("O867"),w=e.n(G),m=e("nKUr"),k=e.n(m);i.default=function(){var $=Object(S.l)(),f=$.name,V=Object(a.useState)([]),B=Object(t.a)(V,2),d=B[0],J=B[1],Y=Object(a.useState)([]),I=Object(t.a)(Y,2),K=I[0],z=I[1],H=D.a.useForm(),x=Object(t.a)(H,1),N=x[0],W=Object(a.useCallback)(Object(v.a)(Object(P.a)().mark(function o(){var n;return Object(P.a)().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,Object(E.c)(f);case 2:n=c.sent,n.success&&J(n.data);case 4:case"end":return c.stop()}},o)})),[f]);Object(a.useEffect)(function(){W()},[f,W]);var Q=Object(a.useMemo)(function(){return{onFinish:function(){var o=Object(v.a)(Object(P.a)().mark(function M(){var c,L;return Object(P.a)().wrap(function(_){for(;;)switch(_.prev=_.next){case 0:return _.prev=0,_.next=3,Object(E.e)(f,{permissions:Object(h.a)(K)});case 3:return c=_.sent,_.next=6,c;case 6:L=_.sent,L.success&&T.b.success(L.message),_.next=13;break;case 10:_.prev=10,_.t0=_.catch(0),T.b.error(_.t0.data.message);case 13:case"end":return _.stop()}},M,null,[[0,10]])}));function n(){return o.apply(this,arguments)}return n}(),initialValues:d}},[d,f,K]),Z=Object(a.useCallback)(function(o){z(o)},[f]);if(!d)return Object(m.jsx)(R.a,{});var X=Object(a.useMemo)(function(){return d.reduce(function(o,n){var M=n==null?void 0:n.name.split("_")[0];return M&&!o.includes(M)?[].concat(Object(h.a)(o),[M]):o},[]).sort()},[d]);return Object(m.jsx)(y.a,{title:Object(m.jsx)(F.a,{id:"permissions"}),children:Object(m.jsx)(s.a,{children:Object(m.jsx)(u.a,Object(r.a)(Object(r.a)({},Q),{},{form:N,children:X.map(function(o){return Object(m.jsxs)(u.a.Group,{title:o,children:[!!d.length&&Object(m.jsx)(C.a.Group,{name:"checkbox",defaultValue:d.filter(function(n){return n==null?void 0:n.assigned}).map(function(n){return n==null?void 0:n.name}),onChange:Z,options:d&&d.filter(function(n){return n&&n.name.split("_")[0]===o}).map(function(n){return{value:n==null?void 0:n.name,label:n==null?void 0:n.name}})}),Object(m.jsx)(O.a,{})]})})}))})})}}}]);
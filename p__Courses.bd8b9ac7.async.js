(window.webpackJsonp=window.webpackJsonp||[]).push([[15,2],{CEpB:function(H,o,e){"use strict";var m=e("nRaC"),d=e("5RzL"),x=e("tJVT"),n=e("q1tI"),_=e.n(n),I=e("JifO"),y=e("9kvl"),j=e("nKUr"),L=e.n(j),S=function $(E){return E.subcategories&&E.subcategories.length?{title:E.name,value:E.id,children:E.subcategories.map(function(C){return $(C)})}:{title:E.name,value:E.id}},b=function(E){var C=E.value,K=E.onChange,R=E.multiple,U=R===void 0?!1:R,h=Object(n.useState)([]),f=Object(x.a)(h,2),O=f[0],c=f[1];Object(n.useEffect)(function(){Object(I.c)().then(function(g){return c(g.data)})},[]);var P=Object(n.useMemo)(function(){return O.map(function(g){return S(g)})},[O]);return Object(j.jsx)(d.a,{loading:O.length===0,multiple:U,showSearch:!0,style:{width:"100%",minWidth:"310px"},value:C,dropdownStyle:{maxHeight:400,overflow:"auto"},placeholder:Object(j.jsx)(y.a,{id:"select",defaultMessage:"Please select"}),allowClear:!0,treeDefaultExpandAll:!0,onChange:K,treeData:P,disabled:O.length===0})};o.a=b},H6aw:function(H,o,e){"use strict";e.d(o,"e",function(){return I}),e.d(o,"k",function(){return j}),e.d(o,"t",function(){return S}),e.d(o,"f",function(){return $}),e.d(o,"m",function(){return C}),e.d(o,"g",function(){return R}),e.d(o,"l",function(){return h}),e.d(o,"u",function(){return O}),e.d(o,"h",function(){return P}),e.d(o,"v",function(){return X}),e.d(o,"s",function(){return k}),e.d(o,"n",function(){return q}),e.d(o,"o",function(){return ee}),e.d(o,"p",function(){return ne}),e.d(o,"a",function(){return te}),e.d(o,"r",function(){return N}),e.d(o,"q",function(){return B}),e.d(o,"i",function(){return J}),e.d(o,"j",function(){return V}),e.d(o,"c",function(){return ae}),e.d(o,"d",function(){return v}),e.d(o,"b",function(){return D});var m=e("k1fw"),d=e("9og8"),x=e("WmNS"),n=e.n(x),_=e("9kvl");function I(a,t){return y.apply(this,arguments)}function y(){return y=Object(d.a)(n.a.mark(function a(t,r){return n.a.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.abrupt("return",Object(_.f)("/api/admin/courses",Object(m.a)({method:"GET",useCache:!1,params:Object(m.a)(Object(m.a)({},t),{},{per_page:t.pageSize,page:t.current})},r||{})));case 1:case"end":return u.stop()}},a)})),y.apply(this,arguments)}function j(a,t,r){return L.apply(this,arguments)}function L(){return L=Object(d.a)(n.a.mark(function a(t,r,s){return n.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.abrupt("return",Object(_.f)("/api/admin/courses/".concat(t),Object(m.a)({method:"GET",useCache:s!==void 0?s:!0},r||{})));case 1:case"end":return l.stop()}},a)})),L.apply(this,arguments)}function S(a,t,r){return b.apply(this,arguments)}function b(){return b=Object(d.a)(n.a.mark(function a(t,r,s){return n.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.abrupt("return",Object(_.f)("/api/admin/courses/".concat(t),Object(m.a)({method:"POST",headers:{"Content-Type":"application/json"},data:r},s||{})));case 1:case"end":return l.stop()}},a)})),b.apply(this,arguments)}function $(a,t){return E.apply(this,arguments)}function E(){return E=Object(d.a)(n.a.mark(function a(t,r){return n.a.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.abrupt("return",Object(_.f)("/api/admin/courses",Object(m.a)({method:"POST",headers:{"Content-Type":"application/json"},data:t},r||{})));case 1:case"end":return u.stop()}},a)})),E.apply(this,arguments)}function C(a,t,r){return K.apply(this,arguments)}function K(){return K=Object(d.a)(n.a.mark(function a(t,r,s){return n.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.abrupt("return",Object(_.f)("/api/admin/courses/".concat(t,"/program"),Object(m.a)({method:"GET",useCache:!1,headers:{"Content-Type":"application/json"},data:r},s||{})));case 1:case"end":return l.stop()}},a)})),K.apply(this,arguments)}function R(a,t){return U.apply(this,arguments)}function U(){return U=Object(d.a)(n.a.mark(function a(t,r){return n.a.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.abrupt("return",Object(_.f)("/api/admin/lessons",Object(m.a)({method:"POST",data:t},r||{})));case 1:case"end":return u.stop()}},a)})),U.apply(this,arguments)}function h(a,t,r){return f.apply(this,arguments)}function f(){return f=Object(d.a)(n.a.mark(function a(t,r,s){return n.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.abrupt("return",Object(_.f)("/api/admin/stats/course/".concat(t),Object(m.a)({method:"GET",data:r},s||{})));case 1:case"end":return l.stop()}},a)})),f.apply(this,arguments)}function O(a,t,r){return c.apply(this,arguments)}function c(){return c=Object(d.a)(n.a.mark(function a(t,r,s){return n.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.abrupt("return",Object(_.f)("/api/admin/lessons/".concat(t,"?_method=PUT"),Object(m.a)({method:"POST",data:r},s||{})));case 1:case"end":return l.stop()}},a)})),c.apply(this,arguments)}function P(a,t){return g.apply(this,arguments)}function g(){return g=Object(d.a)(n.a.mark(function a(t,r){return n.a.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.abrupt("return",Object(_.f)("/api/admin/topics",Object(m.a)({method:"POST",data:t},r||{})));case 1:case"end":return u.stop()}},a)})),g.apply(this,arguments)}function X(a,t,r){return G.apply(this,arguments)}function G(){return G=Object(d.a)(n.a.mark(function a(t,r,s){return n.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.abrupt("return",Object(_.f)("/api/admin/topics/".concat(t,"?_method=PUT"),Object(m.a)({method:"POST",data:r},s||{})));case 1:case"end":return l.stop()}},a)})),G.apply(this,arguments)}function k(a,t){return Q.apply(this,arguments)}function Q(){return Q=Object(d.a)(n.a.mark(function a(t,r){return n.a.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.abrupt("return",Object(_.f)("/api/admin/courses/sort",Object(m.a)({method:"POST",headers:{"Content-Type":"application/json"},data:t},r||{})));case 1:case"end":return u.stop()}},a)})),Q.apply(this,arguments)}function q(a){return Y.apply(this,arguments)}function Y(){return Y=Object(d.a)(n.a.mark(function a(t){return n.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.abrupt("return",Object(_.f)("/api/admin/courses/".concat(t),{method:"DELETE"}));case 1:case"end":return s.stop()}},a)})),Y.apply(this,arguments)}function ee(a){return i.apply(this,arguments)}function i(){return i=Object(d.a)(n.a.mark(function a(t){return n.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.abrupt("return",Object(_.f)("/api/admin/lessons/".concat(t),{method:"DELETE"}));case 1:case"end":return s.stop()}},a)})),i.apply(this,arguments)}function ne(a){return z.apply(this,arguments)}function z(){return z=Object(d.a)(n.a.mark(function a(t){return n.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.abrupt("return",Object(_.f)("/api/admin/topics/".concat(t),{method:"DELETE"}));case 1:case"end":return s.stop()}},a)})),z.apply(this,arguments)}function te(a,t,r){return F.apply(this,arguments)}function F(){return F=Object(d.a)(n.a.mark(function a(t,r,s){return n.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.abrupt("return",Object(_.f)("/api/admin/courses/".concat(t,"/access"),Object(m.a)({method:"GET",useCache:!1,headers:{"Content-Type":"application/json"},data:r},s||{})));case 1:case"end":return l.stop()}},a)})),F.apply(this,arguments)}function N(a,t,r){return T.apply(this,arguments)}function T(){return T=Object(d.a)(n.a.mark(function a(t,r,s){return n.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.abrupt("return",Object(_.f)("/api/admin/courses/".concat(t,"/access/set"),Object(m.a)({method:"POST",headers:{"Content-Type":"application/json"},data:r},s||{})));case 1:case"end":return l.stop()}},a)})),T.apply(this,arguments)}function B(a,t){return p.apply(this,arguments)}function p(){return p=Object(d.a)(n.a.mark(function a(t,r){return n.a.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.abrupt("return",Object(_.f)("/api/admin/topics/".concat(t,"/resources"),Object(m.a)({method:"GET",useCache:!1,headers:{"Content-Type":"application/json"}},r||{})));case 1:case"end":return u.stop()}},a)})),p.apply(this,arguments)}function J(a,t,r){return w.apply(this,arguments)}function w(){return w=Object(d.a)(n.a.mark(function a(t,r,s){return n.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.abrupt("return",Object(_.f)("/api/admin/topics/".concat(t,"/resources/").concat(r),Object(m.a)({method:"DELETE",headers:{"Content-Type":"application/json"}},s||{})));case 1:case"end":return l.stop()}},a)})),w.apply(this,arguments)}function V(a,t){return Z.apply(this,arguments)}function Z(){return Z=Object(d.a)(n.a.mark(function a(t,r){return n.a.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.abrupt("return",Object(_.f)("/api/admin/courses/".concat(t,"/export"),Object(m.a)({method:"GET",useCache:!1},r||{})));case 1:case"end":return u.stop()}},a)})),Z.apply(this,arguments)}function ae(a,t){return W.apply(this,arguments)}function W(){return W=Object(d.a)(n.a.mark(function a(t,r){return n.a.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.abrupt("return",Object(_.f)("/api/admin/lessons/".concat(t,"/clone"),Object(m.a)({method:"POST",headers:{"Content-Type":"application/json"}},r||{})));case 1:case"end":return u.stop()}},a)})),W.apply(this,arguments)}function v(a,t){return M.apply(this,arguments)}function M(){return M=Object(d.a)(n.a.mark(function a(t,r){return n.a.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.abrupt("return",Object(_.f)("/api/admin/topics/".concat(t,"/clone"),Object(m.a)({method:"POST",headers:{"Content-Type":"application/json"}},r||{})));case 1:case"end":return u.stop()}},a)})),M.apply(this,arguments)}function D(a,t){return A.apply(this,arguments)}function A(){return A=Object(d.a)(n.a.mark(function a(t,r){return n.a.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.abrupt("return",Object(_.f)("/api/admin/courses/".concat(t,"/clone"),Object(m.a)({method:"GET",headers:{"Content-Type":"application/json"}},r||{})));case 1:case"end":return u.stop()}},a)})),A.apply(this,arguments)}},IDBP:function(H,o,e){"use strict";e.r(o),e.d(o,"TableColumns",function(){return z});var m=e("P2fV"),d=e("NJEC"),x=e("5Dmo"),n=e("3S7+"),_=e("+L6B"),I=e("2/Rp"),y=e("miYZ"),j=e("tsqr"),L=e("9og8"),S=e("tJVT"),b=e("k1fw"),$=e("PpiC"),E=e("+BJd"),C=e("mr32"),K=e("WmNS"),R=e.n(K),U=e("xvlK"),h=e("lfch"),f=e("q1tI"),O=e.n(f),c=e("9kvl"),P=e("55Ip"),g=e("tMyG"),X=e("Qiat"),G=e("H6aw"),k=e("CEpB"),Q=e("Pqh/"),q=e("G3dp"),Y=e("/MfK"),ee=e("4KAj"),i=e("nKUr"),ne=e.n(i),z=[{title:Object(i.jsx)(c.a,{id:"ID",defaultMessage:"ID"}),dataIndex:"id",sorter:!0,search:!1},{title:Object(i.jsx)(c.a,{id:"title",defaultMessage:"title"}),dataIndex:"title",sorter:!0},{title:Object(i.jsx)(c.a,{id:"status",defaultMessage:"status"}),dataIndex:"status",sorter:!1,valueEnum:{draft:{text:Object(i.jsx)(C.a,{children:Object(i.jsx)(c.a,{id:"draft",defaultMessage:"draft"})}),status:"draft"},archived:{text:Object(i.jsx)(C.a,{color:"error",children:Object(i.jsx)(c.a,{id:"archived",defaultMessage:"archived"})}),status:"archived"},published:{text:Object(i.jsx)(C.a,{color:"success",children:Object(i.jsx)(c.a,{id:"published",defaultMessage:"published"})}),status:"published"}}},{title:Object(i.jsx)(c.a,{id:"base_price",defaultMessage:"base_price"}),dataIndex:"base_price",sorter:!0,valueType:"textarea",search:!1},{title:Object(i.jsx)(c.a,{id:"duration",defaultMessage:"Duration"}),dataIndex:"duration",sorter:!0,valueType:"textarea",search:!1},{title:Object(i.jsx)(c.a,{id:"categories",defaultMessage:"Categories"}),dataIndex:"category_id",key:"category_id",sorter:!1,renderFormItem:function(N,T,B){var p=T.type,J=T.defaultRender,w=Object($.a)(T,["type","defaultRender"]);if(p==="form")return null;var V=B.getFieldValue("state");return Object(i.jsx)(k.a,Object(b.a)(Object(b.a)({},w),{},{state:{type:V}}))},render:function(N,T){var B;return Object(i.jsx)(O.a.Fragment,{children:(B=T.categories)===null||B===void 0?void 0:B.map(function(p){return typeof p=="object"?Object(i.jsx)(C.a,{children:p.name},p.name):Object(i.jsx)(C.a,{children:p},p)})})}},{title:Object(i.jsx)(c.a,{id:"tags",defaultMessage:"Tags"}),dataIndex:"tag",key:"tag",sorter:!1,renderFormItem:function(N,T,B){var p=T.type,J=T.defaultRender,w=Object($.a)(T,["type","defaultRender"]);if(p==="form")return null;var V=B.getFieldValue("state");return Object(i.jsx)(Q.a,Object(b.a)(Object(b.a)({},w),{},{state:{type:V}}))},render:function(N,T){var B;return Object(i.jsx)(O.a.Fragment,{children:(B=T.tags)===null||B===void 0?void 0:B.map(function(p){return typeof p=="object"?Object(i.jsx)(C.a,{children:p.title},p.title):Object(i.jsx)(C.a,{children:p},p)})})}}],te=function(){var N=Object(f.useState)(!1),T=Object(S.a)(N,2),B=T[0],p=T[1],J=Object(f.useRef)(),w=Object(c.i)(),V=Object(f.useCallback)(function(){var W=Object(L.a)(R.a.mark(function v(M){var D,A;return R.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return p(!0),D=j.default.loading(Object(i.jsx)(c.a,{id:"loading",defaultMessage:"loading"})),t.prev=2,t.next=5,Object(G.n)(M).then(function(r){p(!1),r.success&&j.default.success(r.message)});case 5:return D(),p(!1),(A=J.current)===null||A===void 0||A.reload(),t.abrupt("return",!0);case 11:return t.prev=11,t.t0=t.catch(2),D(),j.default.error(Object(i.jsx)(c.a,{id:"error",defaultMessage:"error"})),p(!1),t.abrupt("return",!1);case 17:case"end":return t.stop()}},v,null,[[2,11]])}));return function(v){return W.apply(this,arguments)}}(),[J]),Z=Object(f.useCallback)(function(){var W=Object(L.a)(R.a.mark(function v(M){var D,A,a,t;return R.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return p(!0),D=j.default.loading(Object(i.jsx)(c.a,{id:"loading",defaultMessage:"loading"})),s.prev=2,s.next=5,Object(G.j)(M);case 5:return A=s.sent,s.next=8,A;case 8:a=s.sent,a.success&&(t=a.data,window.open(t,"_blank")),s.next=15;break;case 12:s.prev=12,s.t0=s.catch(2),j.default.error(Object(i.jsx)(c.a,{id:"error",defaultMessage:"error"}));case 15:return s.prev=15,D(),p(!1),s.finish(15);case 19:case"end":return s.stop()}},v,null,[[2,12,15,19]])}));return function(v){return W.apply(this,arguments)}}(),[]),ae=Object(f.useCallback)(function(){var W=Object(L.a)(R.a.mark(function v(M){var D,A,a;return R.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return p(!0),D=j.default.loading(Object(i.jsx)(c.a,{id:"loading",defaultMessage:"loading"})),r.prev=2,r.next=5,Object(G.b)(M);case 5:return A=r.sent,A.success&&(j.default.success(A.message),D(),p(!1),(a=J.current)===null||a===void 0||a.reload()),r.abrupt("return",!0);case 10:return r.prev=10,r.t0=r.catch(2),D(),p(!1),r.abrupt("return",!1);case 15:case"end":return r.stop()}},v,null,[[2,10]])}));return function(v){return W.apply(this,arguments)}}(),[]);return Object(i.jsx)(g.a,{children:Object(i.jsx)(X.a,{loading:B,headerTitle:w.formatMessage({id:"menu.Courses",defaultMessage:"Courses List"}),actionRef:J,rowKey:"id",search:{labelWidth:120},toolBarRender:function(){return[Object(i.jsx)(P.a,{to:"/courses/new",children:Object(i.jsxs)(I.a,{type:"primary",children:[Object(i.jsx)(U.a,{})," ",Object(i.jsx)(c.a,{id:"new",defaultMessage:"new"})]},"primary")})]},request:function(v,M){var D=v.pageSize,A=v.current,a=v.title,t=v.active,r=v.category_id,s=v.tag,u=v.status,l=M&&Object.entries(M)[0];return p(!0),Object(G.e)({title:a,status:u,pageSize:D,current:A,category_id:r,tag:s,active:t&&t,order_by:l&&l[0],order:l?l[1]==="ascend"?"ASC":"DESC":void 0}).then(function(re){return p(!1),re.success?{data:re.data,success:!0}:[]})},columns:[].concat(z,[{title:Object(i.jsx)(c.a,{id:"options",defaultMessage:"options"}),dataIndex:"option",valueType:"option",render:function(v,M){return[Object(i.jsx)(P.a,{to:"/courses/".concat(M.id),children:Object(i.jsx)(n.a,{title:Object(i.jsx)(c.a,{id:"edit",defaultMessage:"edit"}),children:Object(i.jsx)(I.a,{type:"primary",icon:Object(i.jsx)(q.a,{})})})}),Object(i.jsx)(d.a,{title:Object(i.jsx)(c.a,{id:"deleteQuestion",defaultMessage:"Are you sure to delete this record?"}),onConfirm:function(){return M.id&&V(M.id)},okText:Object(i.jsx)(c.a,{id:"yes",defaultMessage:"Yes"}),cancelText:Object(i.jsx)(c.a,{id:"no",defaultMessage:"No"}),children:Object(i.jsx)(n.a,{title:Object(i.jsx)(c.a,{id:"delete",defaultMessage:"delete"}),children:Object(i.jsx)(I.a,{type:"primary",icon:Object(i.jsx)(Y.a,{}),danger:!0})})}),Object(i.jsx)(n.a,{title:Object(i.jsx)(c.a,{id:"export",defaultMessage:"export"}),children:Object(i.jsx)(I.a,{onClick:function(){return Z(Number(M.id))},icon:Object(i.jsx)(ee.a,{})})}),Object(i.jsx)(n.a,{title:Object(i.jsx)(c.a,{id:"clone",defaultMessage:"clone"}),children:Object(i.jsx)(I.a,{onClick:function(){return M.id&&ae(M.id)},icon:Object(i.jsx)(h.a,{})})})]}}])})})};o.default=te},JifO:function(H,o,e){"use strict";e.d(o,"c",function(){return I}),e.d(o,"a",function(){return j}),e.d(o,"b",function(){return S}),e.d(o,"d",function(){return $}),e.d(o,"f",function(){return C}),e.d(o,"e",function(){return R});var m=e("k1fw"),d=e("9og8"),x=e("WmNS"),n=e.n(x),_=e("9kvl");function I(h){return y.apply(this,arguments)}function y(){return y=Object(d.a)(n.a.mark(function h(f){return n.a.wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.abrupt("return",Object(_.f)("/api/admin/categories/tree",Object(m.a)({method:"GET",useCache:!1},f||{})));case 1:case"end":return c.stop()}},h)})),y.apply(this,arguments)}function j(h){return L.apply(this,arguments)}function L(){return L=Object(d.a)(n.a.mark(function h(f){return n.a.wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.abrupt("return",Object(_.f)("/api/admin/categories",Object(m.a)({method:"GET",useCache:!1},f||{})));case 1:case"end":return c.stop()}},h)})),L.apply(this,arguments)}function S(h,f){return b.apply(this,arguments)}function b(){return b=Object(d.a)(n.a.mark(function h(f,O){return n.a.wrap(function(P){for(;;)switch(P.prev=P.next){case 0:return P.abrupt("return",Object(_.f)("/api/admin/categories/".concat(f),Object(m.a)({method:"GET",useCache:!1},O||{})));case 1:case"end":return P.stop()}},h)})),b.apply(this,arguments)}function $(h,f){return E.apply(this,arguments)}function E(){return E=Object(d.a)(n.a.mark(function h(f,O){return n.a.wrap(function(P){for(;;)switch(P.prev=P.next){case 0:return P.abrupt("return",Object(_.f)("/api/admin/categories",Object(m.a)({method:"POST",headers:{"Content-Type":"application/json"},data:f},O||{})));case 1:case"end":return P.stop()}},h)})),E.apply(this,arguments)}function C(h,f,O){return K.apply(this,arguments)}function K(){return K=Object(d.a)(n.a.mark(function h(f,O,c){return n.a.wrap(function(g){for(;;)switch(g.prev=g.next){case 0:return g.abrupt("return",Object(_.f)("/api/admin/categories/".concat(f),Object(m.a)({method:"PUT",headers:{"Content-Type":"application/json"},data:O},c||{})));case 1:case"end":return g.stop()}},h)})),K.apply(this,arguments)}function R(h,f,O){return U.apply(this,arguments)}function U(){return U=Object(d.a)(n.a.mark(function h(f,O,c){return n.a.wrap(function(g){for(;;)switch(g.prev=g.next){case 0:return g.abrupt("return",Object(_.f)("/api/admin/categories/".concat(f),Object(m.a)({method:"DELETE",headers:{"Content-Type":"application/json"},data:O},c||{})));case 1:case"end":return g.stop()}},h)})),U.apply(this,arguments)}},"Pqh/":function(H,o,e){"use strict";var m=e("tJVT"),d=e("OaEy"),x=e("2fM7"),n=e("q1tI"),_=e.n(n),I=e("kMBS"),y=e("9kvl"),j=e("nKUr"),L=e.n(j),S=x.a.Option,b=function(E){var C=E.value,K=E.onChange,R=Object(n.useState)([]),U=Object(m.a)(R,2),h=U[0],f=U[1];return Object(n.useEffect)(function(){Object(I.a)().then(function(O){return f(O.data)})},[]),Object(j.jsx)(x.a,{loading:h.length===0,showSearch:!0,style:{width:200},placeholder:Object(j.jsx)(y.a,{id:"select_tags",defaultMessage:"Select tags"}),optionFilterProp:"children",onChange:K,value:C,children:h.map(function(O){return Object(j.jsx)(S,{value:O.title,children:O.title},O.title)})})};o.a=b},kMBS:function(H,o,e){"use strict";e.d(o,"a",function(){return I});var m=e("k1fw"),d=e("9og8"),x=e("WmNS"),n=e.n(x),_=e("9kvl");function I(j){return y.apply(this,arguments)}function y(){return y=Object(d.a)(n.a.mark(function j(L){return n.a.wrap(function(b){for(;;)switch(b.prev=b.next){case 0:return b.abrupt("return",Object(_.f)("/api/tags/unique",Object(m.a)({method:"GET",useCache:!1},L||{})));case 1:case"end":return b.stop()}},j)})),y.apply(this,arguments)}}}]);

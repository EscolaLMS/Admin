(window.webpackJsonp=window.webpackJsonp||[]).push([[14,3],{CEpB:function(Q,l,e){"use strict";var m=e("nRaC"),d=e("5RzL"),W=e("tJVT"),a=e("q1tI"),_=e.n(a),C=e("JifO"),A=e("9kvl"),h=e("nKUr"),R=e.n(h),B=function U(E){return E.subcategories&&E.subcategories.length?{title:E.name,value:E.id,children:E.subcategories.map(function(g){return U(g)})}:{title:E.name,value:E.id}},b=function(E){var g=E.value,x=E.onChange,D=E.multiple,K=D===void 0?!1:D,p=Object(a.useState)([]),O=Object(W.a)(p,2),i=O[0],j=O[1];Object(a.useEffect)(function(){Object(C.c)().then(function(P){return j(P.data)})},[]);var v=Object(a.useMemo)(function(){return i.map(function(P){return B(P)})},[i]);return Object(h.jsx)(d.a,{loading:i.length===0,multiple:K,showSearch:!0,style:{width:"100%"},value:g,dropdownStyle:{maxHeight:400,overflow:"auto"},placeholder:Object(h.jsx)(A.a,{id:"select",defaultMessage:"Please select"}),allowClear:!0,treeDefaultExpandAll:!0,onChange:x,treeData:v,disabled:i.length===0})};l.a=b},H6aw:function(Q,l,e){"use strict";e.d(l,"a",function(){return C}),e.d(l,"e",function(){return A}),e.d(l,"k",function(){return R}),e.d(l,"t",function(){return b}),e.d(l,"f",function(){return E}),e.d(l,"m",function(){return x}),e.d(l,"g",function(){return K}),e.d(l,"l",function(){return O}),e.d(l,"u",function(){return j}),e.d(l,"h",function(){return P}),e.d(l,"v",function(){return k}),e.d(l,"s",function(){return q}),e.d(l,"n",function(){return ee}),e.d(l,"o",function(){return ae}),e.d(l,"p",function(){return te}),e.d(l,"b",function(){return V}),e.d(l,"r",function(){return y}),e.d(l,"q",function(){return N}),e.d(l,"i",function(){return z}),e.d(l,"j",function(){return F}),e.d(l,"c",function(){return I}),e.d(l,"d",function(){return S});var m=e("k1fw"),d=e("9og8"),W=e("WmNS"),a=e.n(W),_=e("9kvl"),C;(function(t){t.Unselected="",t.RichText="EscolaLms\\TopicTypes\\Models\\TopicContent\\RichText",t.OEmbed="EscolaLms\\TopicTypes\\Models\\TopicContent\\OEmbed",t.Audio="EscolaLms\\TopicTypes\\Models\\TopicContent\\Audio",t.Video="EscolaLms\\TopicTypes\\Models\\TopicContent\\Video",t.H5P="EscolaLms\\TopicTypes\\Models\\TopicContent\\H5P",t.Image="EscolaLms\\TopicTypes\\Models\\TopicContent\\Image",t.PDF="EscolaLms\\TopicTypes\\Models\\TopicContent\\PDF",t.SCORM="EscolaLms\\TopicTypes\\Models\\TopicContent\\ScormSco"})(C||(C={}));function A(t,n){return h.apply(this,arguments)}function h(){return h=Object(d.a)(a.a.mark(function t(n,r){return a.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.abrupt("return",Object(_.f)("/api/admin/courses",Object(m.a)({method:"GET",useCache:!1,params:Object(m.a)(Object(m.a)({},n),{},{per_page:n.pageSize,page:n.current})},r||{})));case 1:case"end":return s.stop()}},t)})),h.apply(this,arguments)}function R(t,n,r){return B.apply(this,arguments)}function B(){return B=Object(d.a)(a.a.mark(function t(n,r,c){return a.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.abrupt("return",Object(_.f)("/api/admin/courses/".concat(n),Object(m.a)({method:"GET",useCache:c!==void 0?c:!0},r||{})));case 1:case"end":return o.stop()}},t)})),B.apply(this,arguments)}function b(t,n,r){return U.apply(this,arguments)}function U(){return U=Object(d.a)(a.a.mark(function t(n,r,c){return a.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.abrupt("return",Object(_.f)("/api/admin/courses/".concat(n),Object(m.a)({method:"POST",headers:{"Content-Type":"application/json"},data:r},c||{})));case 1:case"end":return o.stop()}},t)})),U.apply(this,arguments)}function E(t,n){return g.apply(this,arguments)}function g(){return g=Object(d.a)(a.a.mark(function t(n,r){return a.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.abrupt("return",Object(_.f)("/api/admin/courses",Object(m.a)({method:"POST",headers:{"Content-Type":"application/json"},data:n},r||{})));case 1:case"end":return s.stop()}},t)})),g.apply(this,arguments)}function x(t,n,r){return D.apply(this,arguments)}function D(){return D=Object(d.a)(a.a.mark(function t(n,r,c){return a.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.abrupt("return",Object(_.f)("/api/admin/courses/".concat(n,"/program"),Object(m.a)({method:"GET",useCache:!1,headers:{"Content-Type":"application/json"},data:r},c||{})));case 1:case"end":return o.stop()}},t)})),D.apply(this,arguments)}function K(t,n){return p.apply(this,arguments)}function p(){return p=Object(d.a)(a.a.mark(function t(n,r){return a.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.abrupt("return",Object(_.f)("/api/admin/lessons",Object(m.a)({method:"POST",data:n},r||{})));case 1:case"end":return s.stop()}},t)})),p.apply(this,arguments)}function O(t,n,r){return i.apply(this,arguments)}function i(){return i=Object(d.a)(a.a.mark(function t(n,r,c){return a.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.abrupt("return",Object(_.f)("/api/admin/stats/course/".concat(n),Object(m.a)({method:"GET",data:r},c||{})));case 1:case"end":return o.stop()}},t)})),i.apply(this,arguments)}function j(t,n,r){return v.apply(this,arguments)}function v(){return v=Object(d.a)(a.a.mark(function t(n,r,c){return a.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.abrupt("return",Object(_.f)("/api/admin/lessons/".concat(n,"?_method=PUT"),Object(m.a)({method:"POST",data:r},c||{})));case 1:case"end":return o.stop()}},t)})),v.apply(this,arguments)}function P(t,n){return J.apply(this,arguments)}function J(){return J=Object(d.a)(a.a.mark(function t(n,r){return a.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.abrupt("return",Object(_.f)("/api/admin/topics",Object(m.a)({method:"POST",data:n},r||{})));case 1:case"end":return s.stop()}},t)})),J.apply(this,arguments)}function k(t,n,r){return Y.apply(this,arguments)}function Y(){return Y=Object(d.a)(a.a.mark(function t(n,r,c){return a.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.abrupt("return",Object(_.f)("/api/admin/topics/".concat(n,"?_method=PUT"),Object(m.a)({method:"POST",data:r},c||{})));case 1:case"end":return o.stop()}},t)})),Y.apply(this,arguments)}function q(t,n){return Z.apply(this,arguments)}function Z(){return Z=Object(d.a)(a.a.mark(function t(n,r){return a.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.abrupt("return",Object(_.f)("/api/admin/courses/sort",Object(m.a)({method:"POST",headers:{"Content-Type":"application/json"},data:n},r||{})));case 1:case"end":return s.stop()}},t)})),Z.apply(this,arguments)}function ee(t){return u.apply(this,arguments)}function u(){return u=Object(d.a)(a.a.mark(function t(n){return a.a.wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.abrupt("return",Object(_.f)("/api/admin/courses/".concat(n),{method:"DELETE"}));case 1:case"end":return c.stop()}},t)})),u.apply(this,arguments)}function ae(t){return H.apply(this,arguments)}function H(){return H=Object(d.a)(a.a.mark(function t(n){return a.a.wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.abrupt("return",Object(_.f)("/api/admin/lessons/".concat(n),{method:"DELETE"}));case 1:case"end":return c.stop()}},t)})),H.apply(this,arguments)}function te(t){return G.apply(this,arguments)}function G(){return G=Object(d.a)(a.a.mark(function t(n){return a.a.wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.abrupt("return",Object(_.f)("/api/admin/topics/".concat(n),{method:"DELETE"}));case 1:case"end":return c.stop()}},t)})),G.apply(this,arguments)}function V(t,n,r){return M.apply(this,arguments)}function M(){return M=Object(d.a)(a.a.mark(function t(n,r,c){return a.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.abrupt("return",Object(_.f)("/api/admin/courses/".concat(n,"/access"),Object(m.a)({method:"GET",useCache:!1,headers:{"Content-Type":"application/json"},data:r},c||{})));case 1:case"end":return o.stop()}},t)})),M.apply(this,arguments)}function y(t,n,r){return f.apply(this,arguments)}function f(){return f=Object(d.a)(a.a.mark(function t(n,r,c){return a.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.abrupt("return",Object(_.f)("/api/admin/courses/".concat(n,"/access/set"),Object(m.a)({method:"POST",headers:{"Content-Type":"application/json"},data:r},c||{})));case 1:case"end":return o.stop()}},t)})),f.apply(this,arguments)}function N(t,n){return w.apply(this,arguments)}function w(){return w=Object(d.a)(a.a.mark(function t(n,r){return a.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.abrupt("return",Object(_.f)("/api/admin/topics/".concat(n,"/resources"),Object(m.a)({method:"GET",useCache:!1,headers:{"Content-Type":"application/json"}},r||{})));case 1:case"end":return s.stop()}},t)})),w.apply(this,arguments)}function z(t,n,r){return X.apply(this,arguments)}function X(){return X=Object(d.a)(a.a.mark(function t(n,r,c){return a.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.abrupt("return",Object(_.f)("/api/admin/topics/".concat(n,"/resources/").concat(r),Object(m.a)({method:"DELETE",headers:{"Content-Type":"application/json"}},c||{})));case 1:case"end":return o.stop()}},t)})),X.apply(this,arguments)}function F(t,n){return T.apply(this,arguments)}function T(){return T=Object(d.a)(a.a.mark(function t(n,r){return a.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.abrupt("return",Object(_.f)("/api/admin/courses/".concat(n,"/export"),Object(m.a)({method:"GET",useCache:!1},r||{})));case 1:case"end":return s.stop()}},t)})),T.apply(this,arguments)}function I(t,n){return L.apply(this,arguments)}function L(){return L=Object(d.a)(a.a.mark(function t(n,r){return a.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.abrupt("return",Object(_.f)("/api/admin/lessons/".concat(n,"/clone"),Object(m.a)({method:"POST",headers:{"Content-Type":"application/json"}},r||{})));case 1:case"end":return s.stop()}},t)})),L.apply(this,arguments)}function S(t,n){return $.apply(this,arguments)}function $(){return $=Object(d.a)(a.a.mark(function t(n,r){return a.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.abrupt("return",Object(_.f)("/api/admin/topics/".concat(n,"/clone"),Object(m.a)({method:"POST",headers:{"Content-Type":"application/json"}},r||{})));case 1:case"end":return s.stop()}},t)})),$.apply(this,arguments)}},IDBP:function(Q,l,e){"use strict";e.r(l),e.d(l,"TableColumns",function(){return H});var m=e("P2fV"),d=e("NJEC"),W=e("5Dmo"),a=e("3S7+"),_=e("+L6B"),C=e("2/Rp"),A=e("miYZ"),h=e("tsqr"),R=e("9og8"),B=e("tJVT"),b=e("k1fw"),U=e("PpiC"),E=e("+BJd"),g=e("mr32"),x=e("WmNS"),D=e.n(x),K=e("xvlK"),p=e("q1tI"),O=e.n(p),i=e("9kvl"),j=e("55Ip"),v=e("tMyG"),P=e("Qiat"),J=e("H6aw"),k=e("CEpB"),Y=e("Pqh/"),q=e("G3dp"),Z=e("/MfK"),ee=e("4KAj"),u=e("nKUr"),ae=e.n(u),H=[{title:Object(u.jsx)(i.a,{id:"ID",defaultMessage:"ID"}),dataIndex:"id",sorter:!0,search:!1},{title:Object(u.jsx)(i.a,{id:"title",defaultMessage:"title"}),dataIndex:"title",sorter:!0},{title:Object(u.jsx)(i.a,{id:"status",defaultMessage:"status"}),dataIndex:"status",sorter:!1,valueEnum:{draft:{text:Object(u.jsx)(g.a,{children:Object(u.jsx)(i.a,{id:"draft",defaultMessage:"draft"})}),status:"draft"},archived:{text:Object(u.jsx)(g.a,{color:"error",children:Object(u.jsx)(i.a,{id:"archived",defaultMessage:"archived"})}),status:"archived"},published:{text:Object(u.jsx)(g.a,{color:"success",children:Object(u.jsx)(i.a,{id:"published",defaultMessage:"published"})}),status:"published"}}},{title:Object(u.jsx)(i.a,{id:"base_price",defaultMessage:"base_price"}),dataIndex:"base_price",sorter:!0,valueType:"textarea",search:!1},{title:Object(u.jsx)(i.a,{id:"duration",defaultMessage:"Duration"}),dataIndex:"duration",sorter:!0,valueType:"textarea",search:!1},{title:Object(u.jsx)(i.a,{id:"categories",defaultMessage:"Categories"}),dataIndex:"category_id",key:"category_id",sorter:!1,renderFormItem:function(V,M,y){var f=M.type,N=M.defaultRender,w=Object(U.a)(M,["type","defaultRender"]);if(f==="form")return null;var z=y.getFieldValue("state");return Object(u.jsx)(k.a,Object(b.a)(Object(b.a)({},w),{},{state:{type:z}}))},render:function(V,M){var y;return Object(u.jsx)(O.a.Fragment,{children:(y=M.categories)===null||y===void 0?void 0:y.map(function(f){return typeof f=="object"?Object(u.jsx)(g.a,{children:f.name},f.name):Object(u.jsx)(g.a,{children:f},f)})})}},{title:Object(u.jsx)(i.a,{id:"tags",defaultMessage:"Tags"}),dataIndex:"tag",key:"tag",sorter:!1,renderFormItem:function(V,M,y){var f=M.type,N=M.defaultRender,w=Object(U.a)(M,["type","defaultRender"]);if(f==="form")return null;var z=y.getFieldValue("state");return Object(u.jsx)(Y.a,Object(b.a)(Object(b.a)({},w),{},{state:{type:z}}))},render:function(V,M){var y;return Object(u.jsx)(O.a.Fragment,{children:(y=M.tags)===null||y===void 0?void 0:y.map(function(f){return typeof f=="object"?Object(u.jsx)(g.a,{children:f.title},f.title):Object(u.jsx)(g.a,{children:f},f)})})}}],te=function(){var V=Object(p.useState)(!1),M=Object(B.a)(V,2),y=M[0],f=M[1],N=Object(p.useRef)(),w=Object(i.i)(),z=Object(p.useCallback)(function(){var F=Object(R.a)(D.a.mark(function T(I){var L,S;return D.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return f(!0),L=h.default.loading(Object(u.jsx)(i.a,{id:"loading",defaultMessage:"loading"})),t.prev=2,t.next=5,Object(J.n)(I).then(function(n){f(!1),n.success&&h.default.success(n.message)});case 5:return L(),f(!1),(S=N.current)===null||S===void 0||S.reload(),t.abrupt("return",!0);case 11:return t.prev=11,t.t0=t.catch(2),L(),h.default.error(Object(u.jsx)(i.a,{id:"error",defaultMessage:"error"})),f(!1),t.abrupt("return",!1);case 17:case"end":return t.stop()}},T,null,[[2,11]])}));return function(T){return F.apply(this,arguments)}}(),[N]),X=Object(p.useCallback)(function(){var F=Object(R.a)(D.a.mark(function T(I){var L,S,$,t;return D.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return f(!0),L=h.default.loading(Object(u.jsx)(i.a,{id:"loading",defaultMessage:"loading"})),r.prev=2,r.next=5,Object(J.j)(I);case 5:return S=r.sent,r.next=8,S;case 8:$=r.sent,$.success&&(t=$.data,window.open(t,"_blank")),r.next=15;break;case 12:r.prev=12,r.t0=r.catch(2),h.default.error(Object(u.jsx)(i.a,{id:"error",defaultMessage:"error"}));case 15:return r.prev=15,L(),f(!1),r.finish(15);case 19:case"end":return r.stop()}},T,null,[[2,12,15,19]])}));return function(T){return F.apply(this,arguments)}}(),[]);return Object(u.jsx)(v.a,{children:Object(u.jsx)(P.a,{loading:y,headerTitle:w.formatMessage({id:"menu.Courses",defaultMessage:"Courses List"}),actionRef:N,rowKey:"id",search:{labelWidth:120},toolBarRender:function(){return[Object(u.jsx)(j.a,{to:"/courses/new",children:Object(u.jsxs)(C.a,{type:"primary",children:[Object(u.jsx)(K.a,{})," ",Object(u.jsx)(i.a,{id:"new",defaultMessage:"new"})]},"primary")})]},request:function(T,I){var L=T.pageSize,S=T.current,$=T.title,t=T.active,n=T.category_id,r=T.tag,c=T.status,s=I&&Object.entries(I)[0];return f(!0),Object(J.e)({title:$,status:c,pageSize:L,current:S,category_id:n,tag:r,active:t&&t,order_by:s&&s[0],order:s?s[1]==="ascend"?"ASC":"DESC":void 0}).then(function(o){return f(!1),o.success?{data:o.data,success:!0}:[]})},columns:[].concat(H,[{title:Object(u.jsx)(i.a,{id:"options",defaultMessage:"options"}),dataIndex:"option",valueType:"option",render:function(T,I){return[Object(u.jsx)(j.a,{to:"/courses/".concat(I.id),children:Object(u.jsx)(a.a,{title:Object(u.jsx)(i.a,{id:"edit",defaultMessage:"edit"}),children:Object(u.jsx)(C.a,{type:"primary",icon:Object(u.jsx)(q.a,{})})})}),Object(u.jsx)(d.a,{title:Object(u.jsx)(i.a,{id:"deleteQuestion",defaultMessage:"Are you sure to delete this record?"}),onConfirm:function(){return I.id&&z(I.id)},okText:Object(u.jsx)(i.a,{id:"yes",defaultMessage:"Yes"}),cancelText:Object(u.jsx)(i.a,{id:"no",defaultMessage:"No"}),children:Object(u.jsx)(a.a,{title:Object(u.jsx)(i.a,{id:"delete",defaultMessage:"delete"}),children:Object(u.jsx)(C.a,{type:"primary",icon:Object(u.jsx)(Z.a,{}),danger:!0})})}),Object(u.jsx)(a.a,{title:Object(u.jsx)(i.a,{id:"export",defaultMessage:"export"}),children:Object(u.jsx)(C.a,{onClick:function(){return X(Number(I.id))},icon:Object(u.jsx)(ee.a,{})})})]}}])})})};l.default=te},JifO:function(Q,l,e){"use strict";e.d(l,"c",function(){return C}),e.d(l,"a",function(){return h}),e.d(l,"b",function(){return B}),e.d(l,"d",function(){return U}),e.d(l,"f",function(){return g}),e.d(l,"e",function(){return D});var m=e("k1fw"),d=e("9og8"),W=e("WmNS"),a=e.n(W),_=e("9kvl");function C(p){return A.apply(this,arguments)}function A(){return A=Object(d.a)(a.a.mark(function p(O){return a.a.wrap(function(j){for(;;)switch(j.prev=j.next){case 0:return j.abrupt("return",Object(_.f)("/api/admin/categories/tree",Object(m.a)({method:"GET",useCache:!1},O||{})));case 1:case"end":return j.stop()}},p)})),A.apply(this,arguments)}function h(p){return R.apply(this,arguments)}function R(){return R=Object(d.a)(a.a.mark(function p(O){return a.a.wrap(function(j){for(;;)switch(j.prev=j.next){case 0:return j.abrupt("return",Object(_.f)("/api/admin/categories",Object(m.a)({method:"GET",useCache:!1},O||{})));case 1:case"end":return j.stop()}},p)})),R.apply(this,arguments)}function B(p,O){return b.apply(this,arguments)}function b(){return b=Object(d.a)(a.a.mark(function p(O,i){return a.a.wrap(function(v){for(;;)switch(v.prev=v.next){case 0:return v.abrupt("return",Object(_.f)("/api/admin/categories/".concat(O),Object(m.a)({method:"GET",useCache:!1},i||{})));case 1:case"end":return v.stop()}},p)})),b.apply(this,arguments)}function U(p,O){return E.apply(this,arguments)}function E(){return E=Object(d.a)(a.a.mark(function p(O,i){return a.a.wrap(function(v){for(;;)switch(v.prev=v.next){case 0:return v.abrupt("return",Object(_.f)("/api/admin/categories",Object(m.a)({method:"POST",headers:{"Content-Type":"application/json"},data:O},i||{})));case 1:case"end":return v.stop()}},p)})),E.apply(this,arguments)}function g(p,O,i){return x.apply(this,arguments)}function x(){return x=Object(d.a)(a.a.mark(function p(O,i,j){return a.a.wrap(function(P){for(;;)switch(P.prev=P.next){case 0:return P.abrupt("return",Object(_.f)("/api/admin/categories/".concat(O),Object(m.a)({method:"PUT",headers:{"Content-Type":"application/json"},data:i},j||{})));case 1:case"end":return P.stop()}},p)})),x.apply(this,arguments)}function D(p,O,i){return K.apply(this,arguments)}function K(){return K=Object(d.a)(a.a.mark(function p(O,i,j){return a.a.wrap(function(P){for(;;)switch(P.prev=P.next){case 0:return P.abrupt("return",Object(_.f)("/api/admin/categories/".concat(O),Object(m.a)({method:"DELETE",headers:{"Content-Type":"application/json"},data:i},j||{})));case 1:case"end":return P.stop()}},p)})),K.apply(this,arguments)}},"Pqh/":function(Q,l,e){"use strict";var m=e("tJVT"),d=e("OaEy"),W=e("2fM7"),a=e("q1tI"),_=e.n(a),C=e("kMBS"),A=e("9kvl"),h=e("nKUr"),R=e.n(h),B=W.a.Option,b=function(E){var g=E.value,x=E.onChange,D=Object(a.useState)([]),K=Object(m.a)(D,2),p=K[0],O=K[1];return Object(a.useEffect)(function(){Object(C.a)().then(function(i){return O(i.data)})},[]),Object(h.jsx)(W.a,{loading:p.length===0,showSearch:!0,style:{width:200},placeholder:Object(h.jsx)(A.a,{id:"select_tags",defaultMessage:"Select tags"}),optionFilterProp:"children",onChange:x,value:g,children:p.map(function(i){return Object(h.jsx)(B,{value:i.title,children:i.title})})})};l.a=b},kMBS:function(Q,l,e){"use strict";e.d(l,"a",function(){return C});var m=e("k1fw"),d=e("9og8"),W=e("WmNS"),a=e.n(W),_=e("9kvl");function C(h){return A.apply(this,arguments)}function A(){return A=Object(d.a)(a.a.mark(function h(R){return a.a.wrap(function(b){for(;;)switch(b.prev=b.next){case 0:return b.abrupt("return",Object(_.f)("/api/tags/unique",Object(m.a)({method:"GET",useCache:!1},R||{})));case 1:case"end":return b.stop()}},h)})),A.apply(this,arguments)}}}]);

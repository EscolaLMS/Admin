(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{CEpB:function(H,o,e){"use strict";var m=e("nRaC"),d=e("5RzL"),S=e("tJVT"),n=e("q1tI"),_=e.n(n),P=e("JifO"),R=e("9kvl"),j=e("nKUr"),U=e.n(j),K=function W(E){return E.subcategories&&E.subcategories.length?{title:E.name,value:E.id,children:E.subcategories.map(function(M){return W(M)})}:{title:E.name,value:E.id}},v=function(E){var M=E.value,$=E.onChange,C=E.multiple,x=C===void 0?!1:C,p=Object(n.useState)([]),f=Object(S.a)(p,2),O=f[0],c=f[1];Object(n.useEffect)(function(){Object(P.c)().then(function(D){return c(D.data)})},[]);var g=Object(n.useMemo)(function(){return O.map(function(D){return K(D)})},[O]);return Object(j.jsx)(d.a,{loading:O.length===0,multiple:x,showSearch:!0,style:{width:"100%"},value:M,dropdownStyle:{maxHeight:400,overflow:"auto"},placeholder:Object(j.jsx)(R.a,{id:"select",defaultMessage:"Please select"}),allowClear:!0,treeDefaultExpandAll:!0,onChange:$,treeData:g,disabled:O.length===0})};o.a=v},H6aw:function(H,o,e){"use strict";e.d(o,"a",function(){return P}),e.d(o,"f",function(){return R}),e.d(o,"l",function(){return U}),e.d(o,"u",function(){return v}),e.d(o,"g",function(){return E}),e.d(o,"n",function(){return $}),e.d(o,"h",function(){return x}),e.d(o,"m",function(){return f}),e.d(o,"v",function(){return c}),e.d(o,"i",function(){return D}),e.d(o,"w",function(){return N}),e.d(o,"t",function(){return ae}),e.d(o,"o",function(){return ne}),e.d(o,"p",function(){return u}),e.d(o,"q",function(){return te}),e.d(o,"b",function(){return z}),e.d(o,"s",function(){return L}),e.d(o,"r",function(){return h}),e.d(o,"j",function(){return V}),e.d(o,"k",function(){return re}),e.d(o,"d",function(){return G}),e.d(o,"e",function(){return A}),e.d(o,"c",function(){return I});var m=e("k1fw"),d=e("9og8"),S=e("WmNS"),n=e.n(S),_=e("9kvl"),P;(function(t){t.Unselected="",t.RichText="EscolaLms\\TopicTypes\\Models\\TopicContent\\RichText",t.OEmbed="EscolaLms\\TopicTypes\\Models\\TopicContent\\OEmbed",t.Audio="EscolaLms\\TopicTypes\\Models\\TopicContent\\Audio",t.Video="EscolaLms\\TopicTypes\\Models\\TopicContent\\Video",t.H5P="EscolaLms\\TopicTypes\\Models\\TopicContent\\H5P",t.Image="EscolaLms\\TopicTypes\\Models\\TopicContent\\Image",t.PDF="EscolaLms\\TopicTypes\\Models\\TopicContent\\PDF",t.SCORM="EscolaLms\\TopicTypes\\Models\\TopicContent\\ScormSco"})(P||(P={}));function R(t,a){return j.apply(this,arguments)}function j(){return j=Object(d.a)(n.a.mark(function t(a,r){return n.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.abrupt("return",Object(_.f)("/api/admin/courses",Object(m.a)({method:"GET",useCache:!1,params:Object(m.a)(Object(m.a)({},a),{},{per_page:a.pageSize,page:a.current})},r||{})));case 1:case"end":return s.stop()}},t)})),j.apply(this,arguments)}function U(t,a,r){return K.apply(this,arguments)}function K(){return K=Object(d.a)(n.a.mark(function t(a,r,l){return n.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.abrupt("return",Object(_.f)("/api/admin/courses/".concat(a),Object(m.a)({method:"GET",useCache:l!==void 0?l:!0},r||{})));case 1:case"end":return i.stop()}},t)})),K.apply(this,arguments)}function v(t,a,r){return W.apply(this,arguments)}function W(){return W=Object(d.a)(n.a.mark(function t(a,r,l){return n.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.abrupt("return",Object(_.f)("/api/admin/courses/".concat(a),Object(m.a)({method:"POST",headers:{"Content-Type":"application/json"},data:r},l||{})));case 1:case"end":return i.stop()}},t)})),W.apply(this,arguments)}function E(t,a){return M.apply(this,arguments)}function M(){return M=Object(d.a)(n.a.mark(function t(a,r){return n.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.abrupt("return",Object(_.f)("/api/admin/courses",Object(m.a)({method:"POST",headers:{"Content-Type":"application/json"},data:a},r||{})));case 1:case"end":return s.stop()}},t)})),M.apply(this,arguments)}function $(t,a,r){return C.apply(this,arguments)}function C(){return C=Object(d.a)(n.a.mark(function t(a,r,l){return n.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.abrupt("return",Object(_.f)("/api/admin/courses/".concat(a,"/program"),Object(m.a)({method:"GET",useCache:!1,headers:{"Content-Type":"application/json"},data:r},l||{})));case 1:case"end":return i.stop()}},t)})),C.apply(this,arguments)}function x(t,a){return p.apply(this,arguments)}function p(){return p=Object(d.a)(n.a.mark(function t(a,r){return n.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.abrupt("return",Object(_.f)("/api/admin/lessons",Object(m.a)({method:"POST",data:a},r||{})));case 1:case"end":return s.stop()}},t)})),p.apply(this,arguments)}function f(t,a,r){return O.apply(this,arguments)}function O(){return O=Object(d.a)(n.a.mark(function t(a,r,l){return n.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.abrupt("return",Object(_.f)("/api/admin/stats/course/".concat(a),Object(m.a)({method:"GET",data:r},l||{})));case 1:case"end":return i.stop()}},t)})),O.apply(this,arguments)}function c(t,a,r){return g.apply(this,arguments)}function g(){return g=Object(d.a)(n.a.mark(function t(a,r,l){return n.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.abrupt("return",Object(_.f)("/api/admin/lessons/".concat(a,"?_method=PUT"),Object(m.a)({method:"POST",data:r},l||{})));case 1:case"end":return i.stop()}},t)})),g.apply(this,arguments)}function D(t,a){return Q.apply(this,arguments)}function Q(){return Q=Object(d.a)(n.a.mark(function t(a,r){return n.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.abrupt("return",Object(_.f)("/api/admin/topics",Object(m.a)({method:"POST",data:a},r||{})));case 1:case"end":return s.stop()}},t)})),Q.apply(this,arguments)}function N(t,a,r){return Y.apply(this,arguments)}function Y(){return Y=Object(d.a)(n.a.mark(function t(a,r,l){return n.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.abrupt("return",Object(_.f)("/api/admin/topics/".concat(a,"?_method=PUT"),Object(m.a)({method:"POST",data:r},l||{})));case 1:case"end":return i.stop()}},t)})),Y.apply(this,arguments)}function ae(t,a){return Z.apply(this,arguments)}function Z(){return Z=Object(d.a)(n.a.mark(function t(a,r){return n.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.abrupt("return",Object(_.f)("/api/admin/courses/sort",Object(m.a)({method:"POST",headers:{"Content-Type":"application/json"},data:a},r||{})));case 1:case"end":return s.stop()}},t)})),Z.apply(this,arguments)}function ne(t){return X.apply(this,arguments)}function X(){return X=Object(d.a)(n.a.mark(function t(a){return n.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.abrupt("return",Object(_.f)("/api/admin/courses/".concat(a),{method:"DELETE"}));case 1:case"end":return l.stop()}},t)})),X.apply(this,arguments)}function u(t){return ee.apply(this,arguments)}function ee(){return ee=Object(d.a)(n.a.mark(function t(a){return n.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.abrupt("return",Object(_.f)("/api/admin/lessons/".concat(a),{method:"DELETE"}));case 1:case"end":return l.stop()}},t)})),ee.apply(this,arguments)}function te(t){return k.apply(this,arguments)}function k(){return k=Object(d.a)(n.a.mark(function t(a){return n.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.abrupt("return",Object(_.f)("/api/admin/topics/".concat(a),{method:"DELETE"}));case 1:case"end":return l.stop()}},t)})),k.apply(this,arguments)}function z(t,a,r){return F.apply(this,arguments)}function F(){return F=Object(d.a)(n.a.mark(function t(a,r,l){return n.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.abrupt("return",Object(_.f)("/api/admin/courses/".concat(a,"/access"),Object(m.a)({method:"GET",useCache:!1,headers:{"Content-Type":"application/json"},data:r},l||{})));case 1:case"end":return i.stop()}},t)})),F.apply(this,arguments)}function L(t,a,r){return y.apply(this,arguments)}function y(){return y=Object(d.a)(n.a.mark(function t(a,r,l){return n.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.abrupt("return",Object(_.f)("/api/admin/courses/".concat(a,"/access/set"),Object(m.a)({method:"POST",headers:{"Content-Type":"application/json"},data:r},l||{})));case 1:case"end":return i.stop()}},t)})),y.apply(this,arguments)}function h(t,a){return w.apply(this,arguments)}function w(){return w=Object(d.a)(n.a.mark(function t(a,r){return n.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.abrupt("return",Object(_.f)("/api/admin/topics/".concat(a,"/resources"),Object(m.a)({method:"GET",useCache:!1,headers:{"Content-Type":"application/json"}},r||{})));case 1:case"end":return s.stop()}},t)})),w.apply(this,arguments)}function V(t,a,r){return J.apply(this,arguments)}function J(){return J=Object(d.a)(n.a.mark(function t(a,r,l){return n.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.abrupt("return",Object(_.f)("/api/admin/topics/".concat(a,"/resources/").concat(r),Object(m.a)({method:"DELETE",headers:{"Content-Type":"application/json"}},l||{})));case 1:case"end":return i.stop()}},t)})),J.apply(this,arguments)}function re(t,a){return q.apply(this,arguments)}function q(){return q=Object(d.a)(n.a.mark(function t(a,r){return n.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.abrupt("return",Object(_.f)("/api/admin/courses/".concat(a,"/export"),Object(m.a)({method:"GET",useCache:!1},r||{})));case 1:case"end":return s.stop()}},t)})),q.apply(this,arguments)}function G(t,a){return b.apply(this,arguments)}function b(){return b=Object(d.a)(n.a.mark(function t(a,r){return n.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.abrupt("return",Object(_.f)("/api/admin/lessons/".concat(a,"/clone"),Object(m.a)({method:"POST",headers:{"Content-Type":"application/json"}},r||{})));case 1:case"end":return s.stop()}},t)})),b.apply(this,arguments)}function A(t,a){return T.apply(this,arguments)}function T(){return T=Object(d.a)(n.a.mark(function t(a,r){return n.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.abrupt("return",Object(_.f)("/api/admin/topics/".concat(a,"/clone"),Object(m.a)({method:"POST",headers:{"Content-Type":"application/json"}},r||{})));case 1:case"end":return s.stop()}},t)})),T.apply(this,arguments)}function I(t,a){return B.apply(this,arguments)}function B(){return B=Object(d.a)(n.a.mark(function t(a,r){return n.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.abrupt("return",Object(_.f)("/api/admin/courses/".concat(a,"/clone"),Object(m.a)({method:"GET",headers:{"Content-Type":"application/json"}},r||{})));case 1:case"end":return s.stop()}},t)})),B.apply(this,arguments)}},IDBP:function(H,o,e){"use strict";e.r(o),e.d(o,"TableColumns",function(){return te});var m=e("P2fV"),d=e("NJEC"),S=e("5Dmo"),n=e("3S7+"),_=e("+L6B"),P=e("2/Rp"),R=e("miYZ"),j=e("tsqr"),U=e("9og8"),K=e("tJVT"),v=e("k1fw"),W=e("PpiC"),E=e("+BJd"),M=e("mr32"),$=e("WmNS"),C=e.n($),x=e("xvlK"),p=e("lfch"),f=e("q1tI"),O=e.n(f),c=e("9kvl"),g=e("55Ip"),D=e("tMyG"),Q=e("Qiat"),N=e("H6aw"),Y=e("CEpB"),ae=e("Pqh/"),Z=e("G3dp"),ne=e("/MfK"),X=e("4KAj"),u=e("nKUr"),ee=e.n(u),te=[{title:Object(u.jsx)(c.a,{id:"ID",defaultMessage:"ID"}),dataIndex:"id",sorter:!0,search:!1},{title:Object(u.jsx)(c.a,{id:"title",defaultMessage:"title"}),dataIndex:"title",sorter:!0},{title:Object(u.jsx)(c.a,{id:"status",defaultMessage:"status"}),dataIndex:"status",sorter:!1,valueEnum:{draft:{text:Object(u.jsx)(M.a,{children:Object(u.jsx)(c.a,{id:"draft",defaultMessage:"draft"})}),status:"draft"},archived:{text:Object(u.jsx)(M.a,{color:"error",children:Object(u.jsx)(c.a,{id:"archived",defaultMessage:"archived"})}),status:"archived"},published:{text:Object(u.jsx)(M.a,{color:"success",children:Object(u.jsx)(c.a,{id:"published",defaultMessage:"published"})}),status:"published"}}},{title:Object(u.jsx)(c.a,{id:"base_price",defaultMessage:"base_price"}),dataIndex:"base_price",sorter:!0,valueType:"textarea",search:!1},{title:Object(u.jsx)(c.a,{id:"duration",defaultMessage:"Duration"}),dataIndex:"duration",sorter:!0,valueType:"textarea",search:!1},{title:Object(u.jsx)(c.a,{id:"categories",defaultMessage:"Categories"}),dataIndex:"category_id",key:"category_id",sorter:!1,renderFormItem:function(F,L,y){var h=L.type,w=L.defaultRender,V=Object(W.a)(L,["type","defaultRender"]);if(h==="form")return null;var J=y.getFieldValue("state");return Object(u.jsx)(Y.a,Object(v.a)(Object(v.a)({},V),{},{state:{type:J}}))},render:function(F,L){var y;return Object(u.jsx)(O.a.Fragment,{children:(y=L.categories)===null||y===void 0?void 0:y.map(function(h){return typeof h=="object"?Object(u.jsx)(M.a,{children:h.name},h.name):Object(u.jsx)(M.a,{children:h},h)})})}},{title:Object(u.jsx)(c.a,{id:"tags",defaultMessage:"Tags"}),dataIndex:"tag",key:"tag",sorter:!1,renderFormItem:function(F,L,y){var h=L.type,w=L.defaultRender,V=Object(W.a)(L,["type","defaultRender"]);if(h==="form")return null;var J=y.getFieldValue("state");return Object(u.jsx)(ae.a,Object(v.a)(Object(v.a)({},V),{},{state:{type:J}}))},render:function(F,L){var y;return Object(u.jsx)(O.a.Fragment,{children:(y=L.tags)===null||y===void 0?void 0:y.map(function(h){return typeof h=="object"?Object(u.jsx)(M.a,{children:h.title},h.title):Object(u.jsx)(M.a,{children:h},h)})})}}],k=function(){var F=Object(f.useState)(!1),L=Object(K.a)(F,2),y=L[0],h=L[1],w=Object(f.useRef)(),V=Object(c.i)(),J=Object(f.useCallback)(function(){var G=Object(U.a)(C.a.mark(function b(A){var T,I;return C.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return h(!0),T=j.default.loading(Object(u.jsx)(c.a,{id:"loading",defaultMessage:"loading"})),t.prev=2,t.next=5,Object(N.o)(A).then(function(a){h(!1),a.success&&j.default.success(a.message)});case 5:return T(),h(!1),(I=w.current)===null||I===void 0||I.reload(),t.abrupt("return",!0);case 11:return t.prev=11,t.t0=t.catch(2),T(),j.default.error(Object(u.jsx)(c.a,{id:"error",defaultMessage:"error"})),h(!1),t.abrupt("return",!1);case 17:case"end":return t.stop()}},b,null,[[2,11]])}));return function(b){return G.apply(this,arguments)}}(),[w]),re=Object(f.useCallback)(function(){var G=Object(U.a)(C.a.mark(function b(A){var T,I,B,t;return C.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return h(!0),T=j.default.loading(Object(u.jsx)(c.a,{id:"loading",defaultMessage:"loading"})),r.prev=2,r.next=5,Object(N.k)(A);case 5:return I=r.sent,r.next=8,I;case 8:B=r.sent,B.success&&(t=B.data,window.open(t,"_blank")),r.next=15;break;case 12:r.prev=12,r.t0=r.catch(2),j.default.error(Object(u.jsx)(c.a,{id:"error",defaultMessage:"error"}));case 15:return r.prev=15,T(),h(!1),r.finish(15);case 19:case"end":return r.stop()}},b,null,[[2,12,15,19]])}));return function(b){return G.apply(this,arguments)}}(),[]),q=Object(f.useCallback)(function(){var G=Object(U.a)(C.a.mark(function b(A){var T,I,B;return C.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return h(!0),T=j.default.loading(Object(u.jsx)(c.a,{id:"loading",defaultMessage:"loading"})),a.prev=2,a.next=5,Object(N.c)(A);case 5:return I=a.sent,I.success&&(j.default.success(I.message),(B=w.current)===null||B===void 0||B.reload(),T()),a.abrupt("return",!0);case 10:return a.prev=10,a.t0=a.catch(2),T(),h(!1),a.abrupt("return",!1);case 15:case"end":return a.stop()}},b,null,[[2,10]])}));return function(b){return G.apply(this,arguments)}}(),[]);return Object(u.jsx)(D.a,{children:Object(u.jsx)(Q.a,{loading:y,headerTitle:V.formatMessage({id:"menu.Courses",defaultMessage:"Courses List"}),actionRef:w,rowKey:"id",search:{labelWidth:120},toolBarRender:function(){return[Object(u.jsx)(g.a,{to:"/courses/new",children:Object(u.jsxs)(P.a,{type:"primary",children:[Object(u.jsx)(x.a,{})," ",Object(u.jsx)(c.a,{id:"new",defaultMessage:"new"})]},"primary")})]},request:function(b,A){var T=b.pageSize,I=b.current,B=b.title,t=b.active,a=b.category_id,r=b.tag,l=b.status,s=A&&Object.entries(A)[0];return h(!0),Object(N.f)({title:B,status:l,pageSize:T,current:I,category_id:a,tag:r,active:t&&t,order_by:s&&s[0],order:s?s[1]==="ascend"?"ASC":"DESC":void 0}).then(function(i){return h(!1),i.success?{data:i.data,success:!0}:[]})},columns:[].concat(te,[{title:Object(u.jsx)(c.a,{id:"options",defaultMessage:"options"}),dataIndex:"option",valueType:"option",render:function(b,A){return[Object(u.jsx)(g.a,{to:"/courses/".concat(A.id),children:Object(u.jsx)(n.a,{title:Object(u.jsx)(c.a,{id:"edit",defaultMessage:"edit"}),children:Object(u.jsx)(P.a,{type:"primary",icon:Object(u.jsx)(Z.a,{})})})}),Object(u.jsx)(d.a,{title:Object(u.jsx)(c.a,{id:"deleteQuestion",defaultMessage:"Are you sure to delete this record?"}),onConfirm:function(){return A.id&&J(A.id)},okText:Object(u.jsx)(c.a,{id:"yes",defaultMessage:"Yes"}),cancelText:Object(u.jsx)(c.a,{id:"no",defaultMessage:"No"}),children:Object(u.jsx)(n.a,{title:Object(u.jsx)(c.a,{id:"delete",defaultMessage:"delete"}),children:Object(u.jsx)(P.a,{type:"primary",icon:Object(u.jsx)(ne.a,{}),danger:!0})})}),Object(u.jsx)(n.a,{title:Object(u.jsx)(c.a,{id:"export",defaultMessage:"export"}),children:Object(u.jsx)(P.a,{onClick:function(){return re(Number(A.id))},icon:Object(u.jsx)(X.a,{})})}),Object(u.jsx)(n.a,{title:Object(u.jsx)(c.a,{id:"clone",defaultMessage:"clone"}),children:Object(u.jsx)(P.a,{onClick:function(){return A.id&&q(A.id)},icon:Object(u.jsx)(p.a,{})})})]}}])})})};o.default=k},JifO:function(H,o,e){"use strict";e.d(o,"c",function(){return P}),e.d(o,"a",function(){return j}),e.d(o,"b",function(){return K}),e.d(o,"d",function(){return W}),e.d(o,"f",function(){return M}),e.d(o,"e",function(){return C});var m=e("k1fw"),d=e("9og8"),S=e("WmNS"),n=e.n(S),_=e("9kvl");function P(p){return R.apply(this,arguments)}function R(){return R=Object(d.a)(n.a.mark(function p(f){return n.a.wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.abrupt("return",Object(_.f)("/api/admin/categories/tree",Object(m.a)({method:"GET",useCache:!1},f||{})));case 1:case"end":return c.stop()}},p)})),R.apply(this,arguments)}function j(p){return U.apply(this,arguments)}function U(){return U=Object(d.a)(n.a.mark(function p(f){return n.a.wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.abrupt("return",Object(_.f)("/api/admin/categories",Object(m.a)({method:"GET",useCache:!1},f||{})));case 1:case"end":return c.stop()}},p)})),U.apply(this,arguments)}function K(p,f){return v.apply(this,arguments)}function v(){return v=Object(d.a)(n.a.mark(function p(f,O){return n.a.wrap(function(g){for(;;)switch(g.prev=g.next){case 0:return g.abrupt("return",Object(_.f)("/api/admin/categories/".concat(f),Object(m.a)({method:"GET",useCache:!1},O||{})));case 1:case"end":return g.stop()}},p)})),v.apply(this,arguments)}function W(p,f){return E.apply(this,arguments)}function E(){return E=Object(d.a)(n.a.mark(function p(f,O){return n.a.wrap(function(g){for(;;)switch(g.prev=g.next){case 0:return g.abrupt("return",Object(_.f)("/api/admin/categories",Object(m.a)({method:"POST",headers:{"Content-Type":"application/json"},data:f},O||{})));case 1:case"end":return g.stop()}},p)})),E.apply(this,arguments)}function M(p,f,O){return $.apply(this,arguments)}function $(){return $=Object(d.a)(n.a.mark(function p(f,O,c){return n.a.wrap(function(D){for(;;)switch(D.prev=D.next){case 0:return D.abrupt("return",Object(_.f)("/api/admin/categories/".concat(f),Object(m.a)({method:"PUT",headers:{"Content-Type":"application/json"},data:O},c||{})));case 1:case"end":return D.stop()}},p)})),$.apply(this,arguments)}function C(p,f,O){return x.apply(this,arguments)}function x(){return x=Object(d.a)(n.a.mark(function p(f,O,c){return n.a.wrap(function(D){for(;;)switch(D.prev=D.next){case 0:return D.abrupt("return",Object(_.f)("/api/admin/categories/".concat(f),Object(m.a)({method:"DELETE",headers:{"Content-Type":"application/json"},data:O},c||{})));case 1:case"end":return D.stop()}},p)})),x.apply(this,arguments)}},"Pqh/":function(H,o,e){"use strict";var m=e("tJVT"),d=e("OaEy"),S=e("2fM7"),n=e("q1tI"),_=e.n(n),P=e("kMBS"),R=e("9kvl"),j=e("nKUr"),U=e.n(j),K=S.a.Option,v=function(E){var M=E.value,$=E.onChange,C=Object(n.useState)([]),x=Object(m.a)(C,2),p=x[0],f=x[1];return Object(n.useEffect)(function(){Object(P.a)().then(function(O){return f(O.data)})},[]),Object(j.jsx)(S.a,{loading:p.length===0,showSearch:!0,style:{width:200},placeholder:Object(j.jsx)(R.a,{id:"select_tags",defaultMessage:"Select tags"}),optionFilterProp:"children",onChange:$,value:M,children:p.map(function(O){return Object(j.jsx)(K,{value:O.title,children:O.title})})})};o.a=v},kMBS:function(H,o,e){"use strict";e.d(o,"a",function(){return P});var m=e("k1fw"),d=e("9og8"),S=e("WmNS"),n=e.n(S),_=e("9kvl");function P(j){return R.apply(this,arguments)}function R(){return R=Object(d.a)(n.a.mark(function j(U){return n.a.wrap(function(v){for(;;)switch(v.prev=v.next){case 0:return v.abrupt("return",Object(_.f)("/api/tags/unique",Object(m.a)({method:"GET",useCache:!1},U||{})));case 1:case"end":return v.stop()}},j)})),R.apply(this,arguments)}}}]);

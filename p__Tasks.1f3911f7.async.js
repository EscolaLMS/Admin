(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{GuVI:function(z,_,t){"use strict";t.d(_,"h",function(){return G}),t.d(_,"d",function(){return N}),t.d(_,"f",function(){return b}),t.d(_,"b",function(){return M}),t.d(_,"i",function(){return W}),t.d(_,"a",function(){return x}),t.d(_,"g",function(){return S}),t.d(_,"c",function(){return F}),t.d(_,"j",function(){return L}),t.d(_,"e",function(){return $});var u=t("qLMh"),E=t("k1fw"),j=t("9og8"),m=t("9kvl");function G(a,n){return f.apply(this,arguments)}function f(){return f=Object(j.a)(Object(u.a)().mark(function a(n,i){return Object(u.a)().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(m.i)("/api/admin/tasks",Object(E.a)({method:"GET",params:Object(E.a)(Object(E.a)({},n),{},{per_page:n.pageSize,page:n.current})},i||{})));case 1:case"end":return e.stop()}},a)})),f.apply(this,arguments)}function N(a,n){return y.apply(this,arguments)}function y(){return y=Object(j.a)(Object(u.a)().mark(function a(n,i){return Object(u.a)().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(m.i)("/api/admin/tasks/".concat(n),Object(E.a)({method:"DELETE"},i||{})));case 1:case"end":return e.stop()}},a)})),y.apply(this,arguments)}function b(a,n){return h.apply(this,arguments)}function h(){return h=Object(j.a)(Object(u.a)().mark(function a(n,i){return Object(u.a)().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(m.i)("/api/admin/tasks/".concat(n),Object(E.a)({method:"GET"},i||{})));case 1:case"end":return e.stop()}},a)})),h.apply(this,arguments)}function M(a){return C.apply(this,arguments)}function C(){return C=Object(j.a)(Object(u.a)().mark(function a(n){return Object(u.a)().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",Object(m.i)("/api/admin/tasks",{method:"POST",data:n}));case 1:case"end":return r.stop()}},a)})),C.apply(this,arguments)}function W(a,n,i){return v.apply(this,arguments)}function v(){return v=Object(j.a)(Object(u.a)().mark(function a(n,i,r){return Object(u.a)().wrap(function(I){for(;;)switch(I.prev=I.next){case 0:return I.abrupt("return",Object(m.i)("/api/admin/tasks/".concat(n),Object(E.a)({method:"PATCH",data:i},r||{})));case 1:case"end":return I.stop()}},a)})),v.apply(this,arguments)}function x(a,n){return g.apply(this,arguments)}function g(){return g=Object(j.a)(Object(u.a)().mark(function a(n,i){return Object(u.a)().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(m.i)("/api/admin/tasks/complete/".concat(n),Object(E.a)({method:"POST"},i||{})));case 1:case"end":return e.stop()}},a)})),g.apply(this,arguments)}function S(a,n){return D.apply(this,arguments)}function D(){return D=Object(j.a)(Object(u.a)().mark(function a(n,i){return Object(u.a)().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(m.i)("/api/admin/tasks/incomplete/".concat(n),Object(E.a)({method:"POST"},i||{})));case 1:case"end":return e.stop()}},a)})),D.apply(this,arguments)}function F(a){return d.apply(this,arguments)}function d(){return d=Object(j.a)(Object(u.a)().mark(function a(n){return Object(u.a)().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",Object(m.i)("/api/admin/tasks/notes",{method:"POST",data:n}));case 1:case"end":return r.stop()}},a)})),d.apply(this,arguments)}function L(a,n){return A.apply(this,arguments)}function A(){return A=Object(j.a)(Object(u.a)().mark(function a(n,i){return Object(u.a)().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(m.i)("/api/admin/tasks/notes/".concat(n),{method:"PATCH",data:i}));case 1:case"end":return e.stop()}},a)})),A.apply(this,arguments)}function $(a){return P.apply(this,arguments)}function P(){return P=Object(j.a)(Object(u.a)().mark(function a(n){return Object(u.a)().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",Object(m.i)("/api/admin/tasks/notes/".concat(n),{method:"DELETE"}));case 1:case"end":return r.stop()}},a)})),P.apply(this,arguments)}},yYzA:function(z,_,t){"use strict";t.r(_);var u=t("P2fV"),E=t("NJEC"),j=t("5Dmo"),m=t("3S7+"),G=t("+L6B"),f=t("2/Rp"),N=t("+BJd"),y=t("mr32"),b=t("k1fw"),h=t("PpiC"),M=t("qLMh"),C=t("miYZ"),W=t("tsqr"),v=t("9og8"),x=t("G3dp"),g=t("/MfK"),S=t("xvlK"),D=t("q1tI"),F=t.n(D),d=t("9kvl"),L=t("55Ip"),A=t("tMyG"),$=t("Qiat"),P=t("0WSk"),a=t("sWYD"),n=t("mGZj"),i=t("GuVI"),r=t("Vpfc"),e=t("nKUr"),I=t.n(e),J=["type","defaultRender"],Y=["type","defaultRender"],H=function(){var V=Object(v.a)(Object(M.a)().mark(function T(B){return Object(M.a)().wrap(function(O){for(;;)switch(O.prev=O.next){case 0:return O.abrupt("return",Object(i.d)(B).then(function(o){return o.success&&W.b.success(o.message),!0}));case 1:case"end":return O.stop()}},T)}));return function(B){return V.apply(this,arguments)}}(),Q=function(){var T=Object(D.useRef)(),B=Object(d.l)(),w=[{title:Object(e.jsx)(d.a,{id:"ID",defaultMessage:"ID"}),dataIndex:"id",hideInSearch:!0,sorter:!0},{title:Object(e.jsx)(d.a,{id:"title",defaultMessage:"title"}),dataIndex:"title",sorter:!0},{title:Object(e.jsx)(d.a,{id:"type",defaultMessage:"type"}),dataIndex:"type",sorter:!0},{title:Object(e.jsx)(d.a,{id:"author",defaultMessage:"author"}),dataIndex:"created_by_id",renderFormItem:function(o,s,l){var c=s.type,K=s.defaultRender,p=Object(h.a)(s,J);if(c==="form")return null;var R=l.getFieldValue("state");return Object(e.jsx)(P.a,Object(b.a)(Object(b.a)({},p),{},{state:{type:R}}))},render:function(o,s){var l,c;return((l=s.created_by)===null||l===void 0?void 0:l.id)&&Object(e.jsx)(r.a,{type:"EscolaLms\\Core\\Models\\User",type_id:(c=s.created_by)===null||c===void 0?void 0:c.id},"user")}},{title:Object(e.jsx)(d.a,{id:"assigned",defaultMessage:"assigned"}),dataIndex:"user_id",renderFormItem:function(o,s,l){var c=s.type,K=s.defaultRender,p=Object(h.a)(s,Y);if(c==="form")return null;var R=l.getFieldValue("state");return Object(e.jsx)(P.a,Object(b.a)(Object(b.a)({},p),{},{state:{type:R}}))},render:function(o,s){var l,c;return((l=s.user)===null||l===void 0?void 0:l.id)&&Object(e.jsx)(r.a,{type:"EscolaLms\\Core\\Models\\User",type_id:(c=s.user)===null||c===void 0?void 0:c.id},"user")}},{title:Object(e.jsx)(d.a,{id:"completed_at",defaultMessage:"Completed at"}),dataIndex:"completed_at",hideInSearch:!0,sorter:!0,render:function(o,s){return s.completed_at?Object(a.a)(new Date(s.completed_at),n.a):Object(e.jsx)(y.a,{children:Object(e.jsx)(d.a,{id:"uncompleted",defaultMessage:"uncompleted"})})}},{hideInSearch:!0,title:Object(e.jsx)(d.a,{id:"pages.searchTable.titleOption",defaultMessage:"option"}),dataIndex:"option",valueType:"option",render:function(o,s){return[Object(e.jsx)(L.a,{to:"/other/tasks/".concat(s.id),children:Object(e.jsx)(m.a,{title:Object(e.jsx)(d.a,{id:"edit",defaultMessage:"edit"}),children:Object(e.jsx)(f.a,{type:"primary",icon:Object(e.jsx)(x.a,{})})})},"edit"),Object(e.jsx)(E.a,{title:Object(e.jsx)(d.a,{id:"deleteQuestion",defaultMessage:"Are you sure to delete this record?"}),onConfirm:Object(v.a)(Object(M.a)().mark(function l(){var c;return Object(M.a)().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return p.next=2,H(s.id);case 2:c=p.sent,c&&T.current&&T.current.reload();case 4:case"end":return p.stop()}},l)})),okText:Object(e.jsx)(d.a,{id:"yes"}),cancelText:Object(e.jsx)(d.a,{id:"no"}),children:Object(e.jsx)(m.a,{title:Object(e.jsx)(d.a,{id:"delete",defaultMessage:"delete"}),children:Object(e.jsx)(f.a,{type:"primary",icon:Object(e.jsx)(g.a,{}),danger:!0})})},"delete")]}}];return Object(e.jsx)(A.a,{children:Object(e.jsx)($.a,{headerTitle:B.formatMessage({id:"tasks",defaultMessage:"tasks"}),actionRef:T,rowKey:"id",search:{layout:"vertical"},toolBarRender:function(){return[Object(e.jsx)(L.a,{to:"/other/tasks/new",children:Object(e.jsxs)(f.a,{type:"primary",children:[Object(e.jsx)(S.a,{})," ",Object(e.jsx)(d.a,{id:"new",defaultMessage:"new"})]},"primary")},"new")]},request:function(o,s){var l=o.pageSize,c=o.current,K=o.title,p=o.user_id,R=o.created_by_id,U=s&&Object.entries(s)[0];return Object(i.h)({pageSize:l,current:c,title:K,created_by_id:R,user_id:p,order_by:U&&U[0],order:U?U[1]==="ascend"?"ASC":"DESC":void 0}).then(function(k){return k.success?{data:k.data,total:k.meta.total,success:!0}:[]})},columns:w})})};_.default=Q}}]);

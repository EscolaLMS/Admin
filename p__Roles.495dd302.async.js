(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{"63za":function(L,d,e){"use strict";e.r(d),e.d(d,"TableColumns",function(){return V});var i=e("P2fV"),j=e("NJEC"),O=e("5Dmo"),P=e("3S7+"),p=e("qLMh"),g=e("9og8"),D=e("+L6B"),c=e("2/Rp"),x=e("tJVT"),y=e("q1tI"),s=e("9kvl"),T=e("55Ip"),m=e("Qiat"),h=e("tMyG"),r=e("xvlK"),n=e("G3dp"),l=e("/MfK"),v=e("G/Ub"),a=e("y8nQ"),C=e("Vl3Y"),W=e("rmhi"),G=e("VMEa"),$=e("Qurx"),t=e("nKUr"),z=function(f){var S=Object(s.l)(),A=f.visible,K=f.onVisibleChange,R=f.onFinish,I=f.id,E=C.a.useForm(),u=Object(x.a)(E,1),b=u[0];return Object(t.jsx)(W.a,{form:b,title:S.formatMessage({id:I?"editSetting":"newSetting",defaultMessage:I?"editSetting":"newSetting"}),width:"30vw",visible:A,onVisibleChange:K,onFinish:R,children:Object(t.jsxs)(G.a.Group,{children:[Object(t.jsx)($.a,{label:Object(t.jsx)(s.a,{id:"name",defaultMessage:"name"}),rules:[{required:!0}],width:"md",name:"name"})," "]})})},J=z,V=[{width:"10%",title:Object(t.jsx)(s.a,{id:"ID",defaultMessage:"ID"}),dataIndex:"id",hideInSearch:!0,sorter:!0},{width:"80%",title:Object(t.jsx)(s.a,{id:"name",defaultMessage:"name"}),dataIndex:"name",hideInSearch:!1,sorter:!0}],Q=function(){var f=Object(y.useRef)(),S=Object(y.useState)(!1),A=Object(x.a)(S,2),K=A[0],R=A[1],I=Object(s.l)();return Object(t.jsxs)(h.a,{children:[Object(t.jsx)(m.a,{headerTitle:I.formatMessage({id:"menu.Users.Roles",defaultMessage:"roles"}),actionRef:f,rowKey:"id",search:{},toolBarRender:function(){return[Object(t.jsxs)(c.a,{type:"primary",onClick:function(){return R(!0)},children:[Object(t.jsx)(r.a,{})," ",Object(t.jsx)(s.a,{id:"new",defaultMessage:"new"})]},"primary")]},request:function(u,b){var F=u.pageSize,M=u.current,U=u.name,o=b&&Object.entries(b)[0];return Object(v.d)({pageSize:F,current:M,name:U,order_by:o&&o[0],order:o?o[1]==="ascend"?"ASC":"DESC":void 0}).then(function(B){return B.success?{data:B.data,total:B.meta.total,success:!0}:[]})},columns:[].concat(V,[{hideInSearch:!0,title:Object(t.jsx)(s.a,{id:"pages.searchTable.titleOption"}),dataIndex:"option",valueType:"option",render:function(u,b){return[Object(t.jsx)(T.a,{to:"/users/roles/".concat(b.name),children:Object(t.jsx)(c.a,{type:"primary",icon:Object(t.jsx)(n.a,{})})},"new"),Object(t.jsx)(j.a,{title:Object(t.jsx)(s.a,{id:"deleteQuestion",defaultMessage:"Are you sure to delete this record?"}),onConfirm:Object(g.a)(Object(p.a)().mark(function F(){var M;return Object(p.a)().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,Object(v.b)(b.name);case 2:M=o.sent,M&&(R(!1),f.current&&f.current.reload());case 4:case"end":return o.stop()}},F)})),okText:Object(t.jsx)(s.a,{id:"yes"}),cancelText:Object(t.jsx)(s.a,{id:"no"}),children:Object(t.jsx)(P.a,{title:Object(t.jsx)(s.a,{id:"delete",defaultMessage:"delete"}),children:Object(t.jsx)(c.a,{type:"primary",icon:Object(t.jsx)(l.a,{}),danger:!0})})},"delete")]}}])}),Object(t.jsx)(J,{visible:K,onVisibleChange:function(u){return u===!1&&R(!1)},onFinish:function(){var E=Object(g.a)(Object(p.a)().mark(function u(b){var F,M;return Object(p.a)().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,Object(v.a)(b);case 2:return F=o.sent,o.next=5,F;case 5:M=o.sent,M.success&&(R(!1),f.current&&(f.current.reload(),s.f.push("/users/roles/".concat(M.data.name))));case 7:case"end":return o.stop()}},u)}));return function(u){return E.apply(this,arguments)}}()})]})},N=d.default=Q},"G/Ub":function(L,d,e){"use strict";e.d(d,"d",function(){return p}),e.d(d,"a",function(){return D}),e.d(d,"b",function(){return x}),e.d(d,"c",function(){return s}),e.d(d,"e",function(){return m});var i=e("qLMh"),j=e("k1fw"),O=e("9og8"),P=e("9kvl");function p(r,n){return g.apply(this,arguments)}function g(){return g=Object(O.a)(Object(i.a)().mark(function r(n,l){return Object(i.a)().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",Object(P.i)("/api/admin/roles",Object(j.a)({method:"GET",useCache:!1,params:n},l||{})));case 1:case"end":return a.stop()}},r)})),g.apply(this,arguments)}function D(r,n){return c.apply(this,arguments)}function c(){return c=Object(O.a)(Object(i.a)().mark(function r(n,l){return Object(i.a)().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",Object(P.i)("/api/admin/roles",Object(j.a)({method:"POST",headers:{"Content-Type":"application/json"},data:n},l||{})));case 1:case"end":return a.stop()}},r)})),c.apply(this,arguments)}function x(r,n){return y.apply(this,arguments)}function y(){return y=Object(O.a)(Object(i.a)().mark(function r(n,l){return Object(i.a)().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",Object(P.i)("/api/admin/roles/".concat(n),Object(j.a)({method:"DELETE",headers:{"Content-Type":"application/json"}},l||{})));case 1:case"end":return a.stop()}},r)})),y.apply(this,arguments)}function s(r,n){return T.apply(this,arguments)}function T(){return T=Object(O.a)(Object(i.a)().mark(function r(n,l){return Object(i.a)().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",Object(P.i)("/api/admin/roles/".concat(n),Object(j.a)({method:"GET",useCache:!1},l||{})));case 1:case"end":return a.stop()}},r)})),T.apply(this,arguments)}function m(r,n,l){return h.apply(this,arguments)}function h(){return h=Object(O.a)(Object(i.a)().mark(function r(n,l,v){return Object(i.a)().wrap(function(C){for(;;)switch(C.prev=C.next){case 0:return C.abrupt("return",Object(P.i)("/api/admin/roles/".concat(n),Object(j.a)({method:"PATCH",headers:{"Content-Type":"application/json"},data:l},v||{})));case 1:case"end":return C.stop()}},r)})),h.apply(this,arguments)}},Qurx:function(L,d,e){"use strict";var i=e("VTBJ"),j=e("Ff2n"),O=e("nKUr"),P=e.n(O),p=e("adzw"),g=["fieldProps","proFieldProps"],D=["fieldProps","proFieldProps"],c="text",x=function(m){var h=m.fieldProps,r=m.proFieldProps,n=Object(j.a)(m,g);return Object(O.jsx)(p.a,Object(i.a)({valueType:c,fieldProps:h,filedConfig:{valueType:c},proFieldProps:r},n))},y=function(m){var h=m.fieldProps,r=m.proFieldProps,n=Object(j.a)(m,D);return Object(O.jsx)(p.a,Object(i.a)({valueType:"password",fieldProps:h,proFieldProps:r,filedConfig:{valueType:c}},n))},s=x;s.Password=y,s.displayName="ProFormComponent",d.a=s}}]);
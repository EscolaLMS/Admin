(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{EmS3:function(G,i,e){"use strict";e.d(i,"e",function(){return h}),e.d(i,"a",function(){return u}),e.d(i,"c",function(){return R}),e.d(i,"d",function(){return K}),e.d(i,"b",function(){return g});var c=e("k1fw"),j=e("9og8"),A=e("WmNS"),_=e.n(A),b=e("9kvl");function h(r,s){return E.apply(this,arguments)}function E(){return E=Object(j.a)(_.a.mark(function r(s,d){return _.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",Object(b.f)("/api/admin/webinars",Object(c.a)({method:"GET",useCache:!1,params:Object(c.a)(Object(c.a)({},s),{},{per_page:s&&s.pageSize,page:s&&s.current})},d||{})));case 1:case"end":return n.stop()}},r)})),E.apply(this,arguments)}function u(r,s){return D.apply(this,arguments)}function D(){return D=Object(j.a)(_.a.mark(function r(s,d){return _.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",Object(b.f)("/api/admin/webinars",Object(c.a)({method:"POST",headers:{"Content-Type":"application/json"},data:s},d||{})));case 1:case"end":return n.stop()}},r)})),D.apply(this,arguments)}function R(r,s){return l.apply(this,arguments)}function l(){return l=Object(j.a)(_.a.mark(function r(s,d){return _.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",Object(b.f)("/api/admin/webinars/".concat(s),Object(c.a)({method:"GET",useCache:!1},d||{})));case 1:case"end":return n.stop()}},r)})),l.apply(this,arguments)}function K(r,s,d){return T.apply(this,arguments)}function T(){return T=Object(j.a)(_.a.mark(function r(s,d,m){return _.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",Object(b.f)("/api/admin/webinars/".concat(s,"?method=PUT"),Object(c.a)({method:"POST",headers:{"Content-Type":"application/json"},data:d},m||{})));case 1:case"end":return a.stop()}},r)})),T.apply(this,arguments)}function g(r,s){return C.apply(this,arguments)}function C(){return C=Object(j.a)(_.a.mark(function r(s,d){return _.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",Object(b.f)("/api/admin/webinars/".concat(s),Object(c.a)({method:"DELETE",useCache:!1},d||{})));case 1:case"end":return n.stop()}},r)})),C.apply(this,arguments)}},"Pqh/":function(G,i,e){"use strict";var c=e("tJVT"),j=e("OaEy"),A=e("2fM7"),_=e("q1tI"),b=e.n(_),h=e("kMBS"),E=e("9kvl"),u=e("nKUr"),D=e.n(u),R=A.a.Option,l=function(T){var g=T.value,C=T.onChange,r=Object(_.useState)([]),s=Object(c.a)(r,2),d=s[0],m=s[1];return Object(_.useEffect)(function(){Object(h.a)().then(function(n){return m(n.data)})},[]),Object(u.jsx)(A.a,{loading:d.length===0,showSearch:!0,style:{width:200},placeholder:Object(u.jsx)(E.a,{id:"select_tags",defaultMessage:"Select tags"}),optionFilterProp:"children",onChange:C,value:g,children:d.map(function(n){return Object(u.jsx)(R,{value:n.title,children:n.title},n.title)})})};i.a=l},kMBS:function(G,i,e){"use strict";e.d(i,"a",function(){return h});var c=e("k1fw"),j=e("9og8"),A=e("WmNS"),_=e.n(A),b=e("9kvl");function h(u){return E.apply(this,arguments)}function E(){return E=Object(j.a)(_.a.mark(function u(D){return _.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.abrupt("return",Object(b.f)("/api/tags/unique",Object(c.a)({method:"GET",useCache:!1},D||{})));case 1:case"end":return l.stop()}},u)})),E.apply(this,arguments)}},vhuB:function(G,i,e){"use strict";e.r(i),e.d(i,"TableColumns",function(){return z});var c=e("P2fV"),j=e("NJEC"),A=e("5Dmo"),_=e("3S7+"),b=e("+L6B"),h=e("2/Rp"),E=e("miYZ"),u=e("tsqr"),D=e("9og8"),R=e("tJVT"),l=e("k1fw"),K=e("PpiC"),T=e("OaEy"),g=e("2fM7"),C=e("+BJd"),r=e("mr32"),s=e("WmNS"),d=e.n(s),m=e("q1tI"),n=e.n(m),a=e("9kvl"),J=e("55Ip"),Y=e("Qiat"),Q=e("tMyG"),Z=e("xvlK"),H=e("G3dp"),X=e("/MfK"),U=e("sWYD"),N=e("EmS3"),L=e("mGZj"),k=e("Pqh/"),t=e("nKUr"),te=e.n(t),z=[{title:Object(t.jsx)(a.a,{id:"id",defaultMessage:"id"}),dataIndex:"id",hideInSearch:!0},{title:Object(t.jsx)(a.a,{id:"dateRange",defaultMessage:"Date Range"}),dataIndex:"dateRange",hideInSearch:!1,hideInForm:!0,hideInTable:!0,valueType:"dateRange",fieldProps:{allowEmpty:[!0,!0]}},{title:Object(t.jsx)(a.a,{id:"name",defaultMessage:"name"}),dataIndex:"name"},{title:Object(t.jsx)(a.a,{id:"status",defaultMessage:"status"}),dataIndex:"status",hideInSearch:!0,renderFormItem:function(M){var o=M.type;return o==="form"?null:Object(t.jsxs)(g.a,{mode:"multiple",children:[Object(t.jsx)(g.a.Option,{value:"draft",children:Object(t.jsx)(r.a,{children:Object(t.jsx)(a.a,{id:"draft",defaultMessage:"draft"})})}),Object(t.jsx)(g.a.Option,{value:"archived",children:Object(t.jsx)(r.a,{color:"error",children:Object(t.jsx)(a.a,{id:"archived",defaultMessage:"archived"})})}),Object(t.jsx)(g.a.Option,{value:"published",children:Object(t.jsx)(r.a,{color:"success",children:Object(t.jsx)(a.a,{id:"published",defaultMessage:"published"})})})]})},valueEnum:{draft:{text:Object(t.jsx)(r.a,{children:Object(t.jsx)(a.a,{id:"draft",defaultMessage:"draft"})}),status:"draft"},archived:{text:Object(t.jsx)(r.a,{color:"error",children:Object(t.jsx)(a.a,{id:"archived",defaultMessage:"archived"})}),status:"archived"},published:{text:Object(t.jsx)(r.a,{color:"success",children:Object(t.jsx)(a.a,{id:"published",defaultMessage:"published"})}),status:"published"}}},{title:Object(t.jsx)(a.a,{id:"base_price",defaultMessage:"base_price"}),dataIndex:"base_price",hideInSearch:!0},{title:Object(t.jsx)(a.a,{id:"duration",defaultMessage:"duration"}),dataIndex:"duration",hideInSearch:!0},{title:Object(t.jsx)(a.a,{id:"active_from",defaultMessage:"active_from"}),dataIndex:"active_from",hideInSearch:!0,render:function(M,o){return Object(U.a)(new Date(o.active_from),L.b)}},{title:Object(t.jsx)(a.a,{id:"active_to",defaultMessage:"active_to"}),dataIndex:"active_to",hideInSearch:!0,render:function(M,o){return Object(U.a)(new Date(o.active_to),L.b)}},{title:Object(t.jsx)(a.a,{id:"tags",defaultMessage:"Tags"}),dataIndex:"tag",key:"tag",sorter:!1,renderFormItem:function(M,o,p){var v=o.type,I=o.defaultRender,$=Object(K.a)(o,["type","defaultRender"]);if(v==="form")return null;var F=p.getFieldValue("state");return Object(t.jsx)(k.a,Object(l.a)(Object(l.a)({},$),{},{state:{type:F}}))},render:function(M,o){var p;return Object(t.jsx)(n.a.Fragment,{children:(p=o.tags)===null||p===void 0?void 0:p.map(function(v){return typeof v=="object"?Object(t.jsx)(r.a,{children:v.title},v.title):Object(t.jsx)(r.a,{children:v},v)})})}}],q=function(){var M=Object(m.useRef)(),o=Object(m.useState)(!1),p=Object(R.a)(o,2),v=p[0],I=p[1],$=Object(a.i)(),F=Object(m.useCallback)(function(){var y=Object(D.a)(d.a.mark(function P(W){var x,f;return d.a.wrap(function(O){for(;;)switch(O.prev=O.next){case 0:return I(!0),x=u.default.loading(Object(t.jsx)(a.a,{id:"loading",defaultMessage:"loading"})),O.prev=2,O.next=5,Object(N.b)(W).then(function(S){I(!1),S.success&&u.default.success(S.message)});case 5:return x(),I(!1),(f=M.current)===null||f===void 0||f.reload(),O.abrupt("return",!0);case 11:return O.prev=11,O.t0=O.catch(2),x(),u.default.error(Object(t.jsx)(a.a,{id:"error",defaultMessage:"error"})),I(!1),O.abrupt("return",!1);case 17:case"end":return O.stop()}},P,null,[[2,11]])}));return function(P){return y.apply(this,arguments)}}(),[M]);return Object(t.jsx)(Q.a,{children:Object(t.jsx)(Y.a,{headerTitle:$.formatMessage({id:"Webinars",defaultMessage:"Webinars"}),loading:v,actionRef:M,rowKey:"id",search:{labelWidth:120},toolBarRender:function(){return[Object(t.jsx)(J.a,{to:"/webinars/new",children:Object(t.jsxs)(h.a,{type:"primary",children:[Object(t.jsx)(Z.a,{})," ",Object(t.jsx)(a.a,{id:"new",defaultMessage:"new"})]},"primary")},"addnew")]},request:function(P){var W=P.name,x=P.status,f=P.dateRange,V=P.pageSize,O=P.current;I(!0);var S=f&&f[0]?Object(U.a)(new Date(f[0]),L.a):void 0,ee=f&&f[1]?Object(U.a)(new Date(f[1]),L.a):void 0;return Object(N.e)({name:W,pageSize:V,current:O,date_from:S,date_to:ee,status:x}).then(function(w){return I(!1),w.success?{data:w.data,total:w.meta.total,success:!0}:[]})},columns:[].concat(z,[{title:Object(t.jsx)(a.a,{id:"options",defaultMessage:"options"}),dataIndex:"option",valueType:"option",width:"10%",render:function(P,W){return[Object(t.jsx)(J.a,{to:"/webinars/".concat(W.id),children:Object(t.jsx)(_.a,{title:Object(t.jsx)(a.a,{id:"edit",defaultMessage:"edit"}),children:Object(t.jsx)(h.a,{type:"primary",icon:Object(t.jsx)(H.a,{})})})},"edit"),Object(t.jsx)(j.a,{title:Object(t.jsx)(a.a,{id:"deleteQuestion",defaultMessage:"Are you sure to delete this record?"}),onConfirm:function(){return W.id&&F(W.id)},okText:Object(t.jsx)(a.a,{id:"yes",defaultMessage:"Yes"}),cancelText:Object(t.jsx)(a.a,{id:"no",defaultMessage:"No"}),children:Object(t.jsx)(_.a,{title:Object(t.jsx)(a.a,{id:"delete",defaultMessage:"delete"}),children:Object(t.jsx)(h.a,{type:"primary",icon:Object(t.jsx)(X.a,{}),danger:!0})})},"delete")]}}])})})};i.default=q}}]);

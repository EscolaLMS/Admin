(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{"9A0E":function(Z,d,t){"use strict";t.r(d),t.d(d,"channelType",function(){return c});var i=t("q1tI"),o=t("Ty5D"),a=t("9kvl"),j=t("tMyG"),O=t("nhC9"),I=t("P2fV"),K=t("NJEC"),D=t("5Dmo"),A=t("3S7+"),L=t("+L6B"),x=t("2/Rp"),h=t("qLMh"),Q=t("miYZ"),f=t("tsqr"),B=t("9og8"),E=t("tJVT"),U=t("xvlK"),M=t("G3dp"),W=t("/MfK"),b=t("55Ip"),z=t("sWYD"),C=t("Qiat"),s=t("rWUb"),n=t("mGZj"),e=t("nKUr"),l=function(R){var $=R.templateType,J=R.channel,G=Object(i.useRef)(),F=Object(a.l)(),H=Object(i.useState)(!1),V=Object(E.a)(H,2),N=V[0],v=V[1],X=[{title:Object(e.jsx)(a.a,{id:"ID",defaultMessage:"ID"}),dataIndex:"id",hideInSearch:!0,sorter:!0},{title:Object(e.jsx)(a.a,{id:"created_at",defaultMessage:"created_at"}),dataIndex:"created_at",hideInSearch:!0,sorter:!0,render:function(p,m){return m.created_at&&Object(z.a)(new Date(m.created_at),n.a)}},{title:Object(e.jsx)(a.a,{id:"name",defaultMessage:"name"}),dataIndex:"name",hideInSearch:!1,sorter:!0},{title:Object(e.jsx)(a.a,{id:"event",defaultMessage:"event"}),dataIndex:"event",hideInSearch:!0,sorter:!0},{title:Object(e.jsx)(a.a,{id:"templates.is_default"}),dataIndex:"default",hideInSearch:!0,render:function(p,m){return m.default&&Object(e.jsx)(a.a,{id:"yes"})}}],k=Object(i.useCallback)(function(){var g=Object(B.a)(Object(h.a)().mark(function p(m){var y,S;return Object(h.a)().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return v(!0),y=f.b.loading(Object(e.jsx)(a.a,{id:"loading",defaultMessage:"loading"})),u.prev=2,u.next=5,Object(s.b)(m).then(function(T){v(!1),T.success&&f.b.success(T.message)});case 5:return y(),v(!1),(S=G.current)===null||S===void 0||S.reload(),u.abrupt("return",!0);case 11:return u.prev=11,u.t0=u.catch(2),y(),f.b.error(Object(e.jsx)(a.a,{id:"error",defaultMessage:"error"})),v(!1),u.abrupt("return",!1);case 17:case"end":return u.stop()}},p,null,[[2,11]])}));return function(p){return g.apply(this,arguments)}}(),[G]);return Object(e.jsx)(C.a,{headerTitle:F.formatMessage({id:"templates",defaultMessage:"templates"}),loading:N,actionRef:G,rowKey:"id",search:{layout:"vertical"},toolBarRender:function(){return[Object(e.jsx)(b.a,{to:"/configuration/templates/".concat($,"/new"),children:Object(e.jsxs)(x.a,{type:"primary",children:[Object(e.jsx)(U.a,{})," ",Object(e.jsx)(a.a,{id:"new",defaultMessage:"new"})]},"primary")},"new")]},request:function(p,m){var y=p.pageSize,S=p.current,Y=p.name;v(!0);var u=m&&Object.entries(m)[0];return Object(s.e)({pageSize:y,current:S,channel:J,name:Y||void 0,order_by:u&&u[0],order:u?u[1]==="ascend"?"ASC":"DESC":void 0}).then(function(T){return T.success?(v(!1),{data:T.data,total:T.meta.total,success:!0}):[]})},columns:[].concat(X,[{hideInSearch:!0,title:Object(e.jsx)(a.a,{id:"pages.searchTable.titleOption",defaultMessage:"option"}),dataIndex:"option",valueType:"option",render:function(p,m){return[Object(e.jsx)(b.a,{to:"/configuration/templates/".concat($,"/").concat(m.id),children:Object(e.jsx)(A.a,{title:Object(e.jsx)(a.a,{id:"edit",defaultMessage:"edit"}),children:Object(e.jsx)(x.a,{type:"primary",icon:Object(e.jsx)(M.a,{})})})},"edit"),Object(e.jsx)(K.a,{title:Object(e.jsx)(a.a,{id:"deleteQuestion",defaultMessage:"Are you sure to delete this record?"}),onConfirm:function(){return k(m.id)},okText:Object(e.jsx)(a.a,{id:"yes"}),cancelText:Object(e.jsx)(a.a,{id:"no"}),children:Object(e.jsx)(A.a,{title:Object(e.jsx)(a.a,{id:"delete",defaultMessage:"delete"}),children:Object(e.jsx)(x.a,{type:"primary",icon:Object(e.jsx)(W.a,{}),danger:!0})})},"delete")]}}])})},r=l,c;(function(P){P.email="EscolaLms\\TemplatesEmail\\Core\\EmailChannel",P.pdf="EscolaLms\\TemplatesPdf\\Core\\PdfChannel",P.sms="EscolaLms\\TemplatesSms\\Core\\SmsChannel"})(c||(c={}));var w=function(){var R=Object(o.l)(),$=R.template,J=Object(a.k)();return Object(e.jsx)(j.a,{children:Object(e.jsxs)(O.a,{tabs:{type:"card",activeKey:$,onChange:function(F){return a.f.push("/configuration/templates/".concat(F))}},children:[Object(e.jsx)(O.a.TabPane,{tab:Object(e.jsx)(a.a,{id:"email"}),children:Object(e.jsx)(r,{templateType:"email",channel:c.email})},"email"),J.certificatesPermission&&Object(e.jsx)(O.a.TabPane,{tab:Object(e.jsx)(a.a,{id:"PDF"}),children:Object(e.jsx)(r,{templateType:"pdf",channel:c.pdf})},"pdf"),Object(e.jsx)(O.a.TabPane,{disabled:!0,tab:Object(e.jsx)("span",{children:Object(e.jsx)(a.a,{id:"Push"})}),children:"Push"},"Push"),Object(e.jsx)(O.a.TabPane,{tab:Object(e.jsx)("span",{children:Object(e.jsx)(a.a,{id:"SMS"})}),children:Object(e.jsx)(r,{templateType:"sms",channel:c.sms})},"sms")]})})},q=d.default=w},rWUb:function(Z,d,t){"use strict";t.d(d,"e",function(){return O}),t.d(d,"d",function(){return K}),t.d(d,"a",function(){return A}),t.d(d,"h",function(){return x}),t.d(d,"b",function(){return Q}),t.d(d,"i",function(){return B}),t.d(d,"c",function(){return U}),t.d(d,"f",function(){return W}),t.d(d,"g",function(){return z});var i=t("qLMh"),o=t("k1fw"),a=t("9og8"),j=t("9kvl");function O(s,n){return I.apply(this,arguments)}function I(){return I=Object(a.a)(Object(i.a)().mark(function s(n,e){return Object(i.a)().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",Object(j.i)("/api/admin/templates",Object(o.a)({method:"GET",useCache:!1,params:Object(o.a)(Object(o.a)({},n),{},{per_page:n&&n.pageSize,page:n&&n.current})},e||{})));case 1:case"end":return r.stop()}},s)})),I.apply(this,arguments)}function K(s,n){return D.apply(this,arguments)}function D(){return D=Object(a.a)(Object(i.a)().mark(function s(n,e){return Object(i.a)().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",Object(j.i)("/api/admin/templates/".concat(n),Object(o.a)({method:"GET"},e||{})));case 1:case"end":return r.stop()}},s)})),D.apply(this,arguments)}function A(s,n){return L.apply(this,arguments)}function L(){return L=Object(a.a)(Object(i.a)().mark(function s(n,e){return Object(i.a)().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",Object(j.i)("/api/admin/templates",Object(o.a)({method:"POST",headers:{"Content-Type":"application/json"},data:n},e||{})));case 1:case"end":return r.stop()}},s)})),L.apply(this,arguments)}function x(s,n,e){return h.apply(this,arguments)}function h(){return h=Object(a.a)(Object(i.a)().mark(function s(n,e,l){return Object(i.a)().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.abrupt("return",Object(j.i)("/api/admin/templates/".concat(n),Object(o.a)({method:"PATCH",headers:{"Content-Type":"application/json"},data:e},l||{})));case 1:case"end":return c.stop()}},s)})),h.apply(this,arguments)}function Q(s,n){return f.apply(this,arguments)}function f(){return f=Object(a.a)(Object(i.a)().mark(function s(n,e){return Object(i.a)().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",Object(j.i)("/api/admin/templates/".concat(n),Object(o.a)({method:"DELETE",headers:{"Content-Type":"application/json"}},e||{})));case 1:case"end":return r.stop()}},s)})),f.apply(this,arguments)}function B(s){return E.apply(this,arguments)}function E(){return E=Object(a.a)(Object(i.a)().mark(function s(n){return Object(i.a)().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.abrupt("return",Object(j.i)("/api/admin/templates/variables",Object(o.a)({method:"GET"},n||{})));case 1:case"end":return l.stop()}},s)})),E.apply(this,arguments)}function U(s,n){return M.apply(this,arguments)}function M(){return M=Object(a.a)(Object(i.a)().mark(function s(n,e){return Object(i.a)().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",Object(j.i)("/api/admin/templates/".concat(n,"/preview"),Object(o.a)({method:"GET"},e||{})));case 1:case"end":return r.stop()}},s)})),M.apply(this,arguments)}function W(s,n,e){return b.apply(this,arguments)}function b(){return b=Object(a.a)(Object(i.a)().mark(function s(n,e,l){return Object(i.a)().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.abrupt("return",Object(j.i)("/api/admin/events/trigger-manually/".concat(n),Object(o.a)({method:"POST",headers:{"Content-Type":"application/json"},data:{users:e}},l||{})));case 1:case"end":return c.stop()}},s)})),b.apply(this,arguments)}function z(s,n,e){return C.apply(this,arguments)}function C(){return C=Object(a.a)(Object(i.a)().mark(function s(n,e,l){return Object(i.a)().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.abrupt("return",Object(j.i)("/api/admin/products/".concat(e,"/trigger-event-manually/").concat(n),Object(o.a)({method:"POST",headers:{"Content-Type":"application/json"}},l||{})));case 1:case"end":return c.stop()}},s)})),C.apply(this,arguments)}}}]);

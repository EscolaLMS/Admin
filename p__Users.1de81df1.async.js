(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{"DBJ/":function(w,O,e){"use strict";var R=e("y8nQ"),E=e("Vl3Y"),G=e("etVw"),m=e("q1tI"),A=e.n(m),g=e("9kvl"),L=e("qFDU"),v=e("nKUr"),C=e.n(v),T=function(p){var y=p.onChange,D=p.url,M=p.name,r=p.extra,u=p.accept,j=p.data,n=p.wrapInForm,a=n===void 0?!0:n,x=p.title,N=Object(g.i)();return j&&j[M]&&delete j[M],Object(v.jsx)(L.a,{condition:a,wrap:function(Q){return Object(v.jsx)(E.a,{children:Q})},children:Object(v.jsx)(G.a,{title:x||Object(v.jsx)(g.a,{id:"upload_click_here"}),placeholder:N.formatMessage({id:"upload_click_here"}),onChange:y,label:Object(v.jsx)(g.a,{id:"upload"}),max:2,fieldProps:{data:j,accept:u,name:M,headers:{Authorization:"Bearer ".concat(localStorage.getItem("TOKEN"))}},action:"".concat("https://api-stage.escolalms.com").concat(D),extra:r})})};O.a=T},"G/Ub":function(w,O,e){"use strict";e.d(O,"d",function(){return g}),e.d(O,"a",function(){return v}),e.d(O,"b",function(){return T}),e.d(O,"c",function(){return p}),e.d(O,"e",function(){return D});var R=e("k1fw"),E=e("9og8"),G=e("WmNS"),m=e.n(G),A=e("9kvl");function g(r){return L.apply(this,arguments)}function L(){return L=Object(E.a)(m.a.mark(function r(u){return m.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",Object(A.f)("/api/admin/roles",Object(R.a)({method:"GET",useCache:!1},u||{})));case 1:case"end":return n.stop()}},r)})),L.apply(this,arguments)}function v(r,u){return C.apply(this,arguments)}function C(){return C=Object(E.a)(m.a.mark(function r(u,j){return m.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",Object(A.f)("/api/admin/roles",Object(R.a)({method:"POST",headers:{"Content-Type":"application/json"},data:u},j||{})));case 1:case"end":return a.stop()}},r)})),C.apply(this,arguments)}function T(r,u){return B.apply(this,arguments)}function B(){return B=Object(E.a)(m.a.mark(function r(u,j){return m.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",Object(A.f)("/api/admin/roles/".concat(u),Object(R.a)({method:"DELETE",headers:{"Content-Type":"application/json"}},j||{})));case 1:case"end":return a.stop()}},r)})),B.apply(this,arguments)}function p(r,u){return y.apply(this,arguments)}function y(){return y=Object(E.a)(m.a.mark(function r(u,j){return m.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",Object(A.f)("/api/admin/roles/".concat(u),Object(R.a)({method:"GET",useCache:!1},j||{})));case 1:case"end":return a.stop()}},r)})),y.apply(this,arguments)}function D(r,u,j){return M.apply(this,arguments)}function M(){return M=Object(E.a)(m.a.mark(function r(u,j,n){return m.a.wrap(function(x){for(;;)switch(x.prev=x.next){case 0:return x.abrupt("return",Object(A.f)("/api/admin/roles/".concat(u),Object(R.a)({method:"PATCH",headers:{"Content-Type":"application/json"},data:j},n||{})));case 1:case"end":return x.stop()}},r)})),M.apply(this,arguments)}},n6PA:function(w,O,e){},u7Dd:function(w,O,e){"use strict";e.r(O),e.d(O,"TableColumns",function(){return te});var R=e("P2fV"),E=e("NJEC"),G=e("5Dmo"),m=e("3S7+"),A=e("+L6B"),g=e("2/Rp"),L=e("miYZ"),v=e("tsqr"),C=e("tJVT"),T=e("k1fw"),B=e("PpiC"),p=e("+BJd"),y=e("mr32"),D=e("9og8"),M=e("WmNS"),r=e.n(M),u=e("4KAj"),j=e("xvlK"),n=e("q1tI"),a=e("9kvl"),x=e("55Ip"),N=e("tMyG"),q=e("Qiat"),Q=e("sWYD"),_=e("VK58");function ae(b,i){return Y.apply(this,arguments)}function Y(){return Y=Object(D.a)(r.a.mark(function b(i,s){return r.a.wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.abrupt("return",Object(a.f)("/api/admin/csv/users",Object(T.a)({params:Object(T.a)(Object(T.a)({},i),{},{per_page:i&&i.pageSize,page:i&&i.current}),method:"GET",headers:{accept:"application/csv"},useCache:!1},s||{})));case 1:case"end":return d.stop()}},b)})),Y.apply(this,arguments)}var re=e("G3dp"),ne=e("/MfK"),se=e("mGZj"),le=e("DBJ/"),me=e("OaEy"),ee=e("2fM7"),fe=e("T2oS"),ie=e("W9HT"),ce=e("G/Ub"),t=e("nKUr"),ue=function(i){var s=i.value,I=i.onChange,d=i.multiple,W=d===void 0?!1:d,Z=Object(n.useState)(),$=Object(C.a)(Z,2),U=$[0],X=$[1],z=Object(n.useState)(!1),J=Object(C.a)(z,2),K=J[0],c=J[1],o=Object(n.useRef)(),f=Object(n.useRef)(),S=Object(n.useCallback)(function(h){X(h)},[]);Object(n.useEffect)(function(){o.current=U},[U]);var l=Object(n.useCallback)(function(h){c(!0),f.current&&f.current.abort(),f.current=new AbortController,Object(ce.d)({search:h}).then(function(V){V.success&&S(V.data),c(!1)}).catch(function(){return c(!1)})},[S]),P=Object(n.useCallback)(function(h){l(h)},[l]);return Object(t.jsx)(ee.a,{onFocus:function(){return l()},allowClear:!0,style:{width:"100%"},value:s,onChange:I,mode:W?"multiple":void 0,showSearch:!0,onSearch:P,placeholder:Object(t.jsx)(a.a,{id:"select_user_role",defaultMessage:"Select role"}),optionFilterProp:"children",filterOption:function(V,F){if(F&&F.children){var k;return(F==null||(k=F.children)===null||k===void 0?void 0:k.toString().toLowerCase().indexOf(V.toLowerCase()))>=0}return!0},notFoundContent:K?Object(t.jsx)(ie.a,{size:"small"}):null,children:U&&U.map(function(h){return Object(t.jsx)(ee.a.Option,{value:h.name,children:h.name},h.id)})})},de=ue,H=e("nhC9"),he=e("n6PA"),oe=function(){var b=Object(D.a)(r.a.mark(function i(s){return r.a.wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,Object(_.b)(s);case 2:return d.abrupt("return",!0);case 3:case"end":return d.stop()}},i)}));return function(s){return b.apply(this,arguments)}}(),te=[{title:Object(t.jsx)(a.a,{id:"ID",defaultMessage:"ID"}),dataIndex:"id",hideInSearch:!0},{title:Object(t.jsx)(a.a,{id:"created_at",defaultMessage:"created_at"}),dataIndex:"created_at",hideInSearch:!0,render:function(i,s){return s.created_at&&Object(Q.a)(new Date(s.created_at),se.a)}},{title:Object(t.jsx)(a.a,{id:"first_name",defaultMessage:"first_name"}),dataIndex:"first_name",hideInSearch:!0},{title:Object(t.jsx)(a.a,{id:"last_name",defaultMessage:"last_name"}),dataIndex:"last_name",hideInSearch:!0},{title:Object(t.jsx)(a.a,{id:"email",defaultMessage:"email"}),dataIndex:"email",hideInSearch:!0},{title:Object(t.jsx)(a.a,{id:"search",defaultMessage:"search"}),dataIndex:"search",hideInSearch:!1,hideInTable:!0,hideInDescriptions:!0,tooltip:Object(t.jsx)(a.a,{id:"search_tooltip_1"})},{title:Object(t.jsx)(a.a,{id:"is_active"}),dataIndex:"is_active",hideInSearch:!0,render:function(i,s){return[Object(t.jsx)(y.a,{color:s.is_active?"green":"red",children:s.is_active?Object(t.jsx)(a.a,{id:"Active"}):Object(t.jsx)(a.a,{id:"Inactive"})})]}},{title:Object(t.jsx)(a.a,{id:"email_verified",defaultMessage:"email_verified"}),dataIndex:"email_verified",hideInSearch:!0,render:function(i,s){return[Object(t.jsx)(y.a,{color:s.email_verified?"green":"red",children:s.email_verified?Object(t.jsx)(a.a,{id:"verified"}):Object(t.jsx)(a.a,{id:"unverified"})})]}},{title:Object(t.jsx)(a.a,{id:"roles",defaultMessage:"roles"}),dataIndex:"roles",hideInSearch:!0,render:function(i,s){return s.roles.map(function(I){return Object(t.jsx)(y.a,{children:I},I)})}},{hideInSearch:!1,title:Object(t.jsx)(a.a,{id:"role",defaultMessage:"role"}),dataIndex:"role",renderFormItem:function(i,s){var I=s.type,d=s.defaultRender,W=Object(B.a)(s,["type","defaultRender"]);return Object(t.jsx)(de,Object(T.a)({},W))}}],je=function(){var i=Object(n.useRef)(),s=Object(a.i)(),I=Object(n.useState)({}),d=Object(C.a)(I,2),W=d[0],Z=d[1],$=Object(n.useState)(!1),U=Object(C.a)($,2),X=U[0],z=U[1],J=Object(n.useCallback)(Object(D.a)(r.a.mark(function K(){var c,o,f;return r.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return z(!0),l.prev=1,l.next=4,ae(W);case 4:c=l.sent,c&&(o="data:text/csv;charset=utf-8,"+c,f=document.createElement("a"),f.href=o,f.download="users.csv",document.body.appendChild(f),f.click(),document.body.removeChild(f)),l.next=11;break;case 8:l.prev=8,l.t0=l.catch(1),console.error(l.t0);case 11:return l.prev=11,z(!1),l.finish(11);case 14:case"end":return l.stop()}},K,null,[[1,8,11,14]])})),[W]);return Object(t.jsx)(N.a,{children:Object(t.jsxs)(H.a,{tabs:{type:"card",activeKey:"list",onChange:function(c){switch(c){case"list":return a.d.push("/users");case"fields":return a.d.push("/users/fields");default:return a.d.push("/users/".concat(c))}}},children:[Object(t.jsx)(H.a.TabPane,{tab:Object(t.jsx)(a.a,{id:"list"}),children:Object(t.jsx)(q.a,{headerTitle:s.formatMessage({id:"users",defaultMessage:"users"}),actionRef:i,rowKey:"key",search:{labelWidth:120},toolBarRender:function(){return[Object(t.jsx)(le.a,{title:s.formatMessage({id:"import_users"}),url:"/api/admin/csv/users",name:"file",accept:".csv",data:{return_url:"".concat(window.location.origin,"/#/user/reset-password")},onChange:function(o){o.file.status==="done"&&o.file.response.success&&v.default.success(o.file.response.message),o.file.status==="error"&&(v.default.error(o.file.response.message),console.error(o.file.response))}}),Object(t.jsxs)(g.a,{loading:X,type:"primary",onClick:function(){return J()},children:[Object(t.jsx)(u.a,{})," ",Object(t.jsx)(a.a,{id:"export",defaultMessage:"export"})]},"primary"),Object(t.jsx)(x.a,{to:"/users/new",children:Object(t.jsxs)(g.a,{type:"primary",children:[Object(t.jsx)(j.a,{})," ",Object(t.jsx)(a.a,{id:"new",defaultMessage:"new"})]},"primary")})]},request:function(c){var o=c.pageSize,f=c.current,S=c.search,l=c.role;Z({pageSize:o,current:f,search:S,role:l});var P=l&&l.toString()==="all"?void 0:l;return Object(_.m)({pageSize:o,current:f,search:S,role:P}).then(function(h){return h.success?{data:h.data,total:h.meta.total,success:!0}:[]})},columns:[].concat(te,[{hideInSearch:!0,title:Object(t.jsx)(a.a,{id:"pages.searchTable.titleOption"}),dataIndex:"option",valueType:"option",render:function(c,o){return[Object(t.jsx)(x.a,{to:"/users/".concat(o.id,"/user_info"),children:Object(t.jsx)(m.a,{title:Object(t.jsx)(a.a,{id:"edit",defaultMessage:"edit"}),children:Object(t.jsx)(g.a,{type:"primary",icon:Object(t.jsx)(re.a,{})})})},"edit"),Object(t.jsx)(E.a,{title:Object(t.jsx)(a.a,{id:"deleteQuestion",defaultMessage:"Are you sure to delete this record?"}),onConfirm:Object(D.a)(r.a.mark(function f(){var S;return r.a.wrap(function(P){for(;;)switch(P.prev=P.next){case 0:return P.next=2,oe(o.id);case 2:S=P.sent,S&&i.current&&i.current.reload();case 4:case"end":return P.stop()}},f)})),okText:Object(t.jsx)(a.a,{id:"yes"}),cancelText:Object(t.jsx)(a.a,{id:"no"}),children:Object(t.jsx)(m.a,{title:Object(t.jsx)(a.a,{id:"delete",defaultMessage:"delete"}),children:Object(t.jsx)(g.a,{type:"primary",icon:Object(t.jsx)(ne.a,{}),danger:!0})})},"delete")]}}])})},"list"),Object(t.jsx)(H.a.TabPane,{tab:Object(t.jsx)(a.a,{id:"ModelFields"})},"fields")]})})},Oe=O.default=je}}]);

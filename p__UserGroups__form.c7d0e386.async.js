"use strict";(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[8711],{82061:function(X,B,e){var I=e(1413),n=e(67294),K=e(47046),l=e(84089),w=function(C,h){return n.createElement(l.Z,(0,I.Z)((0,I.Z)({},C),{},{ref:h,icon:K.Z}))},p=n.forwardRef(w);B.Z=p},52688:function(X,B,e){var I=e(1413),n=e(45987),K=e(67294),l=e(11547),w=e(85893),p=["fieldProps","unCheckedChildren","checkedChildren","proFieldProps"],i=K.forwardRef(function(C,h){var g=C.fieldProps,b=C.unCheckedChildren,x=C.checkedChildren,D=C.proFieldProps,y=(0,n.Z)(C,p);return(0,w.jsx)(l.Z,(0,I.Z)({valueType:"switch",fieldProps:(0,I.Z)({unCheckedChildren:b,checkedChildren:x},g),ref:h,valuePropName:"checked",proFieldProps:D,filedConfig:{valuePropName:"checked",ignoreWidth:!0,customLightMode:!0}},y))});B.Z=i},5966:function(X,B,e){var I=e(97685),n=e(1413),K=e(45987),l=e(21770),w=e(75842),p=e(55241),i=e(97435),C=e(67294),h=e(11547),g=e(85893),b=["fieldProps","proFieldProps"],x=["fieldProps","proFieldProps"],D="text",y=function(v){var E=v.fieldProps,M=v.proFieldProps,O=(0,K.Z)(v,b);return(0,g.jsx)(h.Z,(0,n.Z)({valueType:D,fieldProps:E,filedConfig:{valueType:D},proFieldProps:M},O))},T=function(v){var E=(0,l.Z)(v.open||!1,{value:v.open,onChange:v.onOpenChange}),M=(0,I.Z)(E,2),O=M[0],W=M[1];return(0,g.jsx)(w.Z.Item,{shouldUpdate:!0,noStyle:!0,children:function(m){var s,A=m.getFieldValue(v.name||[]);return(0,g.jsx)(p.Z,(0,n.Z)((0,n.Z)({getPopupContainer:function(_){return _&&_.parentNode?_.parentNode:_},onOpenChange:function(_){return W(_)},content:(0,g.jsxs)("div",{style:{padding:"4px 0"},children:[(s=v.statusRender)===null||s===void 0?void 0:s.call(v,A),v.strengthText?(0,g.jsx)("div",{style:{marginTop:10},children:(0,g.jsx)("span",{children:v.strengthText})}):null]}),overlayStyle:{width:240},placement:"rightTop"},v.popoverProps),{},{open:O,children:v.children}))}})},S=function(v){var E=v.fieldProps,M=v.proFieldProps,O=(0,K.Z)(v,x),W=(0,C.useState)(!1),f=(0,I.Z)(W,2),m=f[0],s=f[1];return E!=null&&E.statusRender&&O.name?(0,g.jsx)(T,{name:O.name,statusRender:E==null?void 0:E.statusRender,popoverProps:E==null?void 0:E.popoverProps,strengthText:E==null?void 0:E.strengthText,open:m,onOpenChange:s,children:(0,g.jsx)("div",{children:(0,g.jsx)(h.Z,(0,n.Z)({valueType:"password",fieldProps:(0,n.Z)((0,n.Z)({},(0,i.Z)(E,["statusRender","popoverProps","strengthText"])),{},{onBlur:function(d){var _;E==null||(_=E.onBlur)===null||_===void 0||_.call(E,d),s(!1)},onClick:function(d){var _;E==null||(_=E.onClick)===null||_===void 0||_.call(E,d),s(!0)}}),proFieldProps:M,filedConfig:{valueType:D}},O))})}):(0,g.jsx)(h.Z,(0,n.Z)({valueType:"password",fieldProps:E,proFieldProps:M,filedConfig:{valueType:D}},O))},j=y;j.Password=S,j.displayName="ProFormComponent",B.Z=j},76560:function(X,B,e){var I=e(19632),n=e.n(I),K=e(5574),l=e.n(K),w=e(74656),p=e(74330),i=e(67294),C=e(94542),h=e(80854),g=e(85893),b=function(D){var y=D.value,T=D.onChange,S=D.onSelect,j=D.onDeselect,Z=D.onClear,v=D.loading,E=D.disabled,M=D.multiple,O=M===void 0?!1:M,W=(0,i.useState)([]),f=l()(W,2),m=f[0],s=f[1],A=(0,i.useState)(!1),d=l()(A,2),_=d[0],k=d[1],z=(0,i.useRef)(),$=(0,i.useRef)(),U=(0,i.useCallback)(function(t){s(function(a){return[].concat(n()(a),n()(t)).filter(function(o,u,r){return r.findIndex(function(c){return c.id===o.id})===u})})},[]);(0,i.useEffect)(function(){z.current=m},[m]);var F=(0,i.useCallback)(function(t){k(!0),$.current&&$.current.abort(),$.current=new AbortController,(0,C.sM)({search:t,per_page:30},{signal:$.current.signal}).then(function(a){a.success&&U(a.data),k(!1)}).catch(function(){return k(!1)})},[U]),N=(0,i.useCallback)(function(t){F(t)},[F]);return(0,i.useEffect)(function(){var t=new AbortController;if(y){var a=Array.isArray(y)?y:[y];a.filter(function(o){var u;return!((u=z.current)!==null&&u!==void 0&&u.find(function(r){return r.id===o}))}).forEach(function(o){(0,C.o)(Number(o),{signal:t.signal}).then(function(u){u&&u.success&&U([u.data])})})}return function(){t.abort()}},[y,U]),(0,g.jsx)(w.default,{onSelect:S,onDeselect:j,onClear:Z,loading:v,disabled:E,onFocus:function(){return F()},allowClear:!0,style:{width:"100%"},value:y,onChange:T,mode:O?"multiple":void 0,showSearch:!0,onSearch:N,placeholder:(0,g.jsx)(h.FormattedMessage,{id:"select_user_group",defaultMessage:"Select user group"}),optionFilterProp:"children",filterOption:function(a,o){if(o&&o.children){var u;return(o==null||(u=o.children)===null||u===void 0?void 0:u.toString().toLowerCase().indexOf(a.toLowerCase()))>=0}return!0},notFoundContent:_?(0,g.jsx)(p.Z,{size:"small"}):null,children:m.map(function(t){return(0,g.jsx)(w.default.Option,{value:t.id,children:t.name_with_breadcrumbs},t.id)})})};B.Z=b},44167:function(X,B,e){var I=e(52677),n=e.n(I),K=e(19632),l=e.n(K),w=e(5574),p=e.n(w),i=e(74656),C=e(74330),h=e(67294),g=e(30869),b=e(80854),x=e(85893),D=function(T){var S=T.value,j=T.onChange,Z=T.multiple,v=Z===void 0?!1:Z,E=T.role,M=T.showEmail,O=T.disabled,W=(0,h.useState)([]),f=p()(W,2),m=f[0],s=f[1],A=(0,h.useState)(!1),d=p()(A,2),_=d[0],k=d[1],z=(0,h.useState)([]),$=p()(z,2),U=$[0],F=$[1],N=(0,h.useRef)(),t=(0,h.useRef)(),a=(0,h.useCallback)(function(P){s(function(L){return[].concat(l()(L),l()(P)).filter(function(G,V,R){return R.findIndex(function(J){return M?J.email===G.email:J.id===G.id})===V})})},[]);(0,h.useEffect)(function(){N.current=m},[m]);var o=(0,h.useCallback)(function(P){k(!0),t.current&&t.current.abort(),t.current=new AbortController,(0,g.rC)({search:P,role:E},{signal:t.current.signal}).then(function(L){L&&L.success&&(a(L.data),k(!1))}).catch(function(){return k(!1)})},[]),u=(0,h.useCallback)(function(P){o(P)},[o]),r=(0,h.useCallback)(function(){F([])},[]);(0,h.useEffect)(function(){var P=new AbortController;if(S){var L=Array.isArray(S)?S:[S],G=L.map(function(V){return n()(V)==="object"?Number(V.id):Number(V)});F(G),G.filter(function(V){var R;return!((R=N.current)!==null&&R!==void 0&&R.find(function(J){return J.id===V}))}).forEach(function(V){(0,g.EA)(Number(V),{signal:P.signal},!1).then(function(R){R&&R.success&&a([R.data])})})}return function(){P.abort()}},[S]);var c=(0,h.useCallback)(function(P,L){P||r(),j&&j(P,L)},[j,r]);return(0,x.jsx)(i.default,{disabled:O,onFocus:function(){return o()},allowClear:!0,style:{width:"100%",minWidth:"150px"},value:U,onChange:c,mode:v?"multiple":void 0,showSearch:!0,onSearch:u,onDeselect:r,placeholder:(0,x.jsx)(b.FormattedMessage,{id:"select_person",defaultMessage:"Select a person"}),optionFilterProp:"children",filterOption:function(L,G){return G&&G.children?String("".concat(G.user.name," ").concat(G.user.email)).toLowerCase().indexOf(L&&L.toLowerCase()||"")>=0:!0},notFoundContent:_?(0,x.jsx)(C.Z,{size:"small"}):null,children:m.map(function(P){return(0,x.jsxs)(i.default.Option,{value:P.id,user:P,children:[P.name," ",M&&" - ".concat(P.email)]},P.id)})})};B.Z=D},58705:function(X,B,e){e.r(B);var I=e(15009),n=e.n(I),K=e(97857),l=e.n(K),w=e(99289),p=e.n(w),i=e(5574),C=e.n(i),h=e(94542),g=e(78715),b=e(952),x=e(5966),D=e(52688),y=e(74453),T=e(2453),S=e(74330),j=e(71471),Z=e(96074),v=e(2487),E=e(14726),M=e(67294),O=e(80854),W=e(44167),f=e(82061),m=e(76560),s=e(85893);B.default=function(){var A=(0,O.useIntl)(),d=(0,O.useParams)(),_=d.group,k=_==="new",z=(0,M.useState)(),$=C()(z,2),U=$[0],F=$[1],N=(0,M.useCallback)(p()(n()().mark(function u(){var r;return n()().wrap(function(P){for(;;)switch(P.prev=P.next){case 0:return P.next=2,(0,h.o)(Number(_));case 2:r=P.sent,r.success&&F(l()({},r.data));case 4:case"end":return P.stop()}},u)})),[_]),t=(0,M.useCallback)(function(u){F(function(r){var c;return l()(l()({},r),{},{users:r?r==null||(c=r.users)===null||c===void 0?void 0:c.filter(function(P){return P.id!==u}):[]})}),(0,h.gh)(Number(_),u).then(function(r){r.success&&F(function(c){return l()(l()({},c),{},{users:r.data})})})},[_]),a=(0,M.useCallback)(function(u){var r;!u||U!=null&&(r=U.users)!==null&&r!==void 0&&r.find(function(c){return c.id===u})||(0,h.o$)(Number(_),u).then(function(c){c.success&&F(function(P){return l()(l()({},P),{},{users:c.data})})})},[U,_]);(0,M.useEffect)(function(){if(_==="new"){F({});return}N()},[_,N]);var o=(0,M.useMemo)(function(){return{onFinish:function(){var u=p()(n()().mark(function c(P){var L,G;return n()().wrap(function(R){for(;;)switch(R.prev=R.next){case 0:if(G=l()({},P),_!=="new"){R.next=8;break}return R.next=4,(0,h.wZ)(G);case 4:L=R.sent,L.success&&O.history.push("/users/groups/".concat(L.data.id)),R.next=11;break;case 8:return R.next=10,(0,h.GX)(Number(_),G);case 10:L=R.sent;case 11:T.ZP.success(L.message);case 12:case"end":return R.stop()}},c)}));function r(c){return u.apply(this,arguments)}return r}(),initialValues:U}},[U,_]);return U?(0,s.jsx)(y._z,{title:k?(0,s.jsx)(O.FormattedMessage,{id:"new_user_group"}):(0,s.jsx)(O.FormattedMessage,{id:"edit_user_group"}),children:(0,s.jsx)(g.ZP,{children:(0,s.jsxs)(b.ZP,l()(l()({},o),{},{children:[(0,s.jsxs)(b.ZP.Group,{children:[(0,s.jsx)(x.Z,{width:"md",name:"name",label:(0,s.jsx)(O.FormattedMessage,{id:"name"}),tooltip:(0,s.jsx)(O.FormattedMessage,{id:"name"}),placeholder:A.formatMessage({id:"name"}),required:!0}),(0,s.jsx)(b.ZP.Item,{style:{minWidth:"300px"},name:"parent_id",label:(0,s.jsx)(O.FormattedMessage,{id:"parent_id_group",defaultMessage:"parent_id_group"}),valuePropName:"value",children:(0,s.jsx)(m.Z,{})}),(0,s.jsx)(D.Z,{name:"registerable",label:(0,s.jsx)(O.FormattedMessage,{id:"registerable"})})]}),_!=="new"&&(0,s.jsxs)(M.Fragment,{children:[(0,s.jsxs)(b.ZP.Group,{children:[(0,s.jsx)(j.Z,{children:(0,s.jsx)(O.FormattedMessage,{id:"add_person_to_group",defaultMessage:"Add User to group"})}),(0,s.jsx)(W.Z,{onChange:function(r){return a(Number(r))}})]}),(0,s.jsx)(Z.Z,{}),(0,s.jsx)(v.Z,{size:"small",itemLayout:"horizontal",dataSource:U.users,renderItem:function(r){return(0,s.jsxs)(v.Z.Item,{actions:[(0,s.jsxs)(E.ZP,{onClick:function(){return t(r.id)},type:"primary",icon:(0,s.jsx)(f.Z,{}),size:"small",danger:!0,children:[" ",(0,s.jsx)(O.FormattedMessage,{id:"delete"})]},"delete")],children:[r.first_name," ",r.last_name," ",(0,s.jsx)("small",{children:r.email})]})}})]}),(0,s.jsx)(Z.Z,{})]}))})}):(0,s.jsx)(S.Z,{})}},30869:function(X,B,e){e.d(B,{EA:function(){return g},Je:function(){return S},LS:function(){return F},N5:function(){return x},Nq:function(){return Z},VB:function(){return k},WC:function(){return f},ck:function(){return y},h8:function(){return O},m9:function(){return d},nS:function(){return s},r4:function(){return E},rC:function(){return C},yi:function(){return $}});var I=e(15009),n=e.n(I),K=e(97857),l=e.n(K),w=e(99289),p=e.n(w),i=e(80854);function C(t,a){return h.apply(this,arguments)}function h(){return h=p()(n()().mark(function t(a,o){return n()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",(0,i.request)("/api/admin/users",l()({params:a,method:"GET",useCache:!1},o||{})));case 1:case"end":return r.stop()}},t)})),h.apply(this,arguments)}function g(t,a,o){return b.apply(this,arguments)}function b(){return b=p()(n()().mark(function t(a,o,u){return n()().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.abrupt("return",(0,i.request)("/api/admin/users/".concat(a),l()({method:"GET",useCache:u!==void 0?u:!0},o||{})));case 1:case"end":return c.stop()}},t)})),b.apply(this,arguments)}function x(t){return D.apply(this,arguments)}function D(){return D=p()(n()().mark(function t(a){return n()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.abrupt("return",(0,i.request)("/api/profile/me",l()({method:"GET",useCache:!1},a||{})));case 1:case"end":return u.stop()}},t)})),D.apply(this,arguments)}function y(t,a){return T.apply(this,arguments)}function T(){return T=p()(n()().mark(function t(a,o){return n()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",(0,i.request)("/api/profile/me",l()({data:a,method:"PUT"},o||{})));case 1:case"end":return r.stop()}},t)})),T.apply(this,arguments)}function S(t,a){return j.apply(this,arguments)}function j(){return j=p()(n()().mark(function t(a,o){return n()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",(0,i.request)("/api/profile/password",l()({data:a,method:"PUT"},o||{})));case 1:case"end":return r.stop()}},t)})),j.apply(this,arguments)}function Z(t,a,o){return v.apply(this,arguments)}function v(){return v=p()(n()().mark(function t(a,o,u){return n()().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.abrupt("return",(0,i.request)("/api/admin/users/".concat(a),l()({data:o,method:"PUT"},u||{})));case 1:case"end":return c.stop()}},t)})),v.apply(this,arguments)}function E(t,a){return M.apply(this,arguments)}function M(){return M=p()(n()().mark(function t(a,o){return n()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",(0,i.request)("/api/admin/users",l()({data:a,method:"POST"},o||{})));case 1:case"end":return r.stop()}},t)})),M.apply(this,arguments)}function O(t,a){return W.apply(this,arguments)}function W(){return W=p()(n()().mark(function t(a,o){return n()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",(0,i.request)("/api/admin/users/".concat(a),l()({method:"DELETE"},o||{})));case 1:case"end":return r.stop()}},t)})),W.apply(this,arguments)}function f(t,a,o){return m.apply(this,arguments)}function m(){return m=p()(n()().mark(function t(a,o,u){return n()().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.abrupt("return",(0,i.request)("/api/auth/email/resend",l()({method:"POST",data:{email:a,return_url:o}},u||{})));case 1:case"end":return c.stop()}},t)})),m.apply(this,arguments)}function s(t,a){return A.apply(this,arguments)}function A(){return A=p()(n()().mark(function t(a,o){return n()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",(0,i.request)("/api/admin/users/".concat(a,"/settings"),l()({method:"GET",useCache:!1},o||{})));case 1:case"end":return r.stop()}},t)})),A.apply(this,arguments)}function d(t,a,o,u){return _.apply(this,arguments)}function _(){return _=p()(n()().mark(function t(a,o,u,r){return n()().wrap(function(P){for(;;)switch(P.prev=P.next){case 0:return P.abrupt("return",(0,i.request)("/api/admin/users/".concat(a,"/settings"),l()({method:o,data:{settings:[u]},useCache:!1},r||{})));case 1:case"end":return P.stop()}},t)})),_.apply(this,arguments)}function k(t,a){return z.apply(this,arguments)}function z(){return z=p()(n()().mark(function t(a,o){return n()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",(0,i.request)("/api/admin/users/".concat(a,"/avatar"),l()({method:"DELETE"},o||{})));case 1:case"end":return r.stop()}},t)})),z.apply(this,arguments)}function $(t,a,o){return U.apply(this,arguments)}function U(){return U=p()(n()().mark(function t(a,o,u){return n()().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.abrupt("return",(0,i.request)("/api/admin/users/".concat(a,"/interests"),l()({data:o,method:"PUT"},u||{})));case 1:case"end":return c.stop()}},t)})),U.apply(this,arguments)}function F(t,a){return N.apply(this,arguments)}function N(){return N=p()(n()().mark(function t(a,o){return n()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",(0,i.request)("/api/admin/stats/date-range",l()({params:a,method:"GET"},o||{})));case 1:case"end":return r.stop()}},t)})),N.apply(this,arguments)}},94542:function(X,B,e){e.d(B,{FU:function(){return S},GX:function(){return x},cZ:function(){return O},gh:function(){return E},o:function(){return g},o$:function(){return Z},sM:function(){return C},wZ:function(){return y}});var I=e(15009),n=e.n(I),K=e(97857),l=e.n(K),w=e(99289),p=e.n(w),i=e(80854);function C(f,m){return h.apply(this,arguments)}function h(){return h=p()(n()().mark(function f(m,s){return n()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.abrupt("return",(0,i.request)("/api/admin/user-groups",l()({params:m,method:"GET",useCache:!1},s||{})));case 1:case"end":return d.stop()}},f)})),h.apply(this,arguments)}function g(f,m){return b.apply(this,arguments)}function b(){return b=p()(n()().mark(function f(m,s){return n()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.abrupt("return",(0,i.request)("/api/admin/user-groups/".concat(m),l()({method:"GET",useCache:!1},s||{})));case 1:case"end":return d.stop()}},f)})),b.apply(this,arguments)}function x(f,m,s){return D.apply(this,arguments)}function D(){return D=p()(n()().mark(function f(m,s,A){return n()().wrap(function(_){for(;;)switch(_.prev=_.next){case 0:return _.abrupt("return",(0,i.request)("/api/admin/user-groups/".concat(m),l()({data:s,method:"PUT"},A||{})));case 1:case"end":return _.stop()}},f)})),D.apply(this,arguments)}function y(f,m){return T.apply(this,arguments)}function T(){return T=p()(n()().mark(function f(m,s){return n()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.abrupt("return",(0,i.request)("/api/admin/user-groups",l()({data:m,method:"POST"},s||{})));case 1:case"end":return d.stop()}},f)})),T.apply(this,arguments)}function S(f,m){return j.apply(this,arguments)}function j(){return j=p()(n()().mark(function f(m,s){return n()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.abrupt("return",(0,i.request)("/api/admin/user-groups/".concat(m),l()({method:"DELETE"},s||{})));case 1:case"end":return d.stop()}},f)})),j.apply(this,arguments)}function Z(f,m,s){return v.apply(this,arguments)}function v(){return v=p()(n()().mark(function f(m,s,A){return n()().wrap(function(_){for(;;)switch(_.prev=_.next){case 0:return _.abrupt("return",(0,i.request)("/api/admin/user-groups/".concat(m,"/members"),l()({data:{user_id:s},method:"POST"},A||{})));case 1:case"end":return _.stop()}},f)})),v.apply(this,arguments)}function E(f,m,s){return M.apply(this,arguments)}function M(){return M=p()(n()().mark(function f(m,s,A){return n()().wrap(function(_){for(;;)switch(_.prev=_.next){case 0:return _.abrupt("return",(0,i.request)("/api/admin/user-groups/".concat(m,"/members/").concat(s),l()({method:"DELETE"},A||{})));case 1:case"end":return _.stop()}},f)})),M.apply(this,arguments)}function O(f,m){return W.apply(this,arguments)}function W(){return W=p()(n()().mark(function f(m,s){return n()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.abrupt("return",(0,i.request)("/api/admin/user-groups/tree",l()({params:m,method:"GET"},s||{})));case 1:case"end":return d.stop()}},f)})),W.apply(this,arguments)}}}]);

//# sourceMappingURL=p__UserGroups__form.c7d0e386.async.js.map
"use strict";(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[2144,2803,8047],{23901:function(le,H,e){e.d(H,{Z:function(){return de}});var Y=e(97857),s=e.n(Y),k=e(13769),c=e.n(k),q=e(5574),g=e.n(q),b=e(62235),_=e(44167),S=e(45919),ae=e(15009),r=e.n(ae),J=e(99289),K=e.n(J),M=e(80854);function w(se,$){return z.apply(this,arguments)}function z(){return z=K()(r()().mark(function se($,ee){return r()().wrap(function(Q){for(;;)switch(Q.prev=Q.next){case 0:return Q.abrupt("return",(0,M.request)("/api/admin/tracks/routes",s()({method:"GET",useCache:!1,params:s()(s()({},$),{},{per_page:$.pageSize,page:$.current})},ee||{})));case 1:case"end":return Q.stop()}},se)})),z.apply(this,arguments)}var T=e(16894),u=e(60943),t=e(67294),n=e(85893),W=["type","defaultRender"],i=[{title:(0,n.jsx)(M.FormattedMessage,{id:"ID",defaultMessage:"ID"}),dataIndex:"id",hideInSearch:!0,sorter:!0,width:"80px"},{title:(0,n.jsx)(M.FormattedMessage,{id:"dateRange",defaultMessage:"Date Range"}),dataIndex:"dateRange",hideInSearch:!1,hideInForm:!0,hideInTable:!0,valueType:"dateRange",fieldProps:{allowEmpty:[!0,!0]}},{title:(0,n.jsx)(M.FormattedMessage,{id:"http_method",defaultMessage:"http_method"}),dataIndex:"method",hideInSearch:!1,sorter:!0,valueEnum:{GET:"GET",POST:"POST",PUT:"PUT",DELETE:"DELETE",PATCH:"PATCH"}},{title:(0,n.jsx)(M.FormattedMessage,{id:"path",defaultMessage:"path"}),dataIndex:"path",sorter:!0,hideInSearch:!1}],D=function($){var ee=$.useAsWidget,ie=$.userID,Q=(0,t.useRef)(),me=(0,t.useState)(!1),h=g()(me,2),ce=h[0],a=h[1],pe=(0,M.useIntl)();return(0,n.jsx)(T.ZP,{headerTitle:pe.formatMessage({id:"menu.Analytics.Logs",defaultMessage:"menu.Analytics.Logs"}),loading:ce,actionRef:Q,rowKey:"id",search:{layout:"vertical"},request:function(B,L){var te=B.user_id,ne=B.method,N=B.dateRange,ue=B.path,f=B.pageSize,C=B.current,p=L&&Object.entries(L)[0];a(!0);var j=N&&N[0]?(0,u.WU)(new Date(N[0]),S.Cu):void 0,E=N&&N[1]?(0,u.WU)(new Date(N[1]),S.Cu):void 0;return w({user_id:ee?ie:te,method:ne,pageSize:f,current:C,path:ue,date_from:j,date_to:E,order_by:p&&p[0],order:p?p[1]==="ascend"?"ASC":"DESC":void 0}).then(function(m){return a(!1),m.success?{data:m.data,total:m.meta.total,success:!0}:[]})},columns:[].concat(i,[{title:(0,n.jsx)(M.FormattedMessage,{id:"user",defaultMessage:"user"}),dataIndex:"user_id",key:"user_id",hideInSearch:ee,sorter:!0,renderFormItem:function(B,L,te){var ne=L.type,N=L.defaultRender,ue=c()(L,W);if(ne==="form")return null;var f=te.getFieldValue("state");return(0,n.jsx)(_.Z,s()(s()({},ue),{},{state:{type:f}}))},render:function(B,L){return L.user&&(0,n.jsx)(b.Z,{type:"App\\Models\\User",type_id:L.user.id})}}])})},de=D},26674:function(le,H,e){var Y=e(97857),s=e.n(Y),k=e(13769),c=e.n(k),q=e(95830),g=e(67294),b=e(85893),_=["path","size","srcSizes","alt"],S=function(r){var J=r.path,K=r.size,M=r.srcSizes,w=r.alt,z=w===void 0?"LMS Image":w,T=c()(r,_),u="".concat(window.REACT_APP_API_URL||"https://api-stage.escolalms.com","/api/images/img?path=").concat(J,"&w=").concat(M?M[0]:K),t=M&&M.map(function(n){return"".concat(window.REACT_APP_API_URL||"https://api-stage.escolalms.com","/api/images/img?path=").concat(J,"&w=").concat(n," ").concat(n,"w")});return(0,b.jsx)("div",{className:"escolalms-image",children:(0,b.jsx)(q.Z,s()({src:u,srcSet:t&&t.join(","),alt:z},T))})};H.Z=S},8882:function(le,H,e){e.r(H),e.d(H,{default:function(){return ue}});var Y=e(15009),s=e.n(Y),k=e(97857),c=e.n(k),q=e(99289),g=e.n(q),b=e(5574),_=e.n(b),S=e(78715),ae=e(74453),r=e(80854),J=e(26674),K=e(82238),M=e(76560),w=e(28808),z=e(91680),T=e(30869),u=e(94542),t=e(952),n=e(5966),W=e(52688),i=e(63434),D=e(2453),de=e(74330),se=e(78957),$=e(75842),ee=e(14726),ie=e(71471),Q=e(71230),me=e(96074),h=e(67294),ce=e(18025),a=e(85893);function pe(f){var C=(0,h.useState)([]),p=_()(C,2),j=p[0],E=p[1],m=(0,h.useState)(!1),O=_()(m,2),P=O[0],o=O[1],l=(0,h.useCallback)(g()(s()().mark(function G(){var d;return s()().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return y.prev=0,o(!0),y.next=4,(0,u.cZ)({user_id:f});case 4:d=y.sent,d.success&&E(d.data.map(function(v){var he=v.id;return he}));case 6:return y.prev=6,o(!1),y.finish(6);case 9:case"end":return y.stop()}},G,null,[[0,,6,9]])})),[f]),X=(0,h.useCallback)(function(){var G=g()(s()().mark(function d(F){return s()().wrap(function(v){for(;;)switch(v.prev=v.next){case 0:if(typeof F!="string"){v.next=2;break}return v.abrupt("return");case 2:return o(!0),v.next=5,(0,u.o$)(F,f);case 5:return v.next=7,l();case 7:o(!1);case 8:case"end":return v.stop()}},d)}));return function(d){return G.apply(this,arguments)}}(),[f]),Z=(0,h.useCallback)(function(){var G=g()(s()().mark(function d(F){return s()().wrap(function(v){for(;;)switch(v.prev=v.next){case 0:if(typeof F!="string"){v.next=2;break}return v.abrupt("return");case 2:return o(!0),v.next=5,(0,u.gh)(F,f);case 5:return v.next=7,l();case 7:o(!1);case 8:case"end":return v.stop()}},d)}));return function(d){return G.apply(this,arguments)}}(),[f]),I=(0,h.useCallback)(g()(s()().mark(function G(){return s()().wrap(function(F){for(;;)switch(F.prev=F.next){case 0:return o(!0),F.next=3,Promise.all(j.map(function(y){return(0,u.gh)(y,f)}));case 3:return F.next=5,l();case 5:o(!1);case 6:case"end":return F.stop()}},G)})),[j]);return(0,h.useEffect)(function(){l()},[l]),{userGroups:j,userGroupsLoading:P,handleAddToGroup:X,handleRemoveFromGroup:Z,handleClearAllGroups:I}}var oe=function(f){var C,p,j,E=f.isNew,m=f.data,O=f.setData,P=(0,r.useIntl)(),o=(0,r.useParams)(),l=o.user,X=(0,w.Z)("EscolaLms\\Auth\\Models\\User"),Z=(0,r.useModel)("@@initialState"),I=Z.initialState,G=I==null||(C=I.config)===null||C===void 0||(C=C.filter(function(x){return x.key==="frontURL"})[0])===null||C===void 0?void 0:C.data,d=pe((p=m==null?void 0:m.id)!==null&&p!==void 0?p:0),F=d.userGroups,y=d.userGroupsLoading,v=d.handleAddToGroup,he=d.handleRemoveFromGroup,Pe=d.handleClearAllGroups,Me=(0,h.useState)(),ve=_()(Me,2),ge=ve[0],xe=ve[1],Ae=t.ZP.useForm(),Ee=_()(Ae,1),fe=Ee[0],ye=(0,h.useCallback)(g()(s()().mark(function x(){var U,A;return s()().wrap(function(R){for(;;)switch(R.prev=R.next){case 0:return R.next=2,(0,z.uJ)();case 2:return U=R.sent,R.next=5,U;case 5:A=R.sent,A.success&&xe(A.data);case 7:case"end":return R.stop()}},x)})),[l]),Te=function(){(0,T.VB)(Number(l)).then(function(U){U.success&&(D.ZP.success(U.message),O(function(A){return c()(c()({},A),{},{avatar:"",path_avatar:""})}))}).catch(function(U){D.ZP.error(U.data.message)})};(0,h.useEffect)(function(){ye()},[l]);var Ce=(0,h.useMemo)(function(){return{form:fe,onFinish:function(){var x=g()(s()().mark(function A(je){var R,re;return s()().wrap(function(V){for(;;)switch(V.prev=V.next){case 0:if(re=c()({},je),(!re.password||re.password==="")&&delete re.password,!E){V.next=9;break}return V.next=5,(0,T.r4)(re);case 5:R=V.sent,R.success&&r.history.push("/users/".concat(R.data.id,"/user_info")),V.next=12;break;case 9:return V.next=11,(0,T.Nq)(Number(l),re);case 11:R=V.sent;case 12:D.ZP.success(R.message);case 13:case"end":return V.stop()}},A)}));function U(A){return x.apply(this,arguments)}return U}(),initialValues:m}},[m,l]);return m?(0,a.jsxs)(t.ZP,c()(c()({},Ce),{},{children:[(0,a.jsxs)(t.ZP.Group,{children:[(0,a.jsx)(n.Z,{width:"md",name:"first_name",label:(0,a.jsx)(r.FormattedMessage,{id:"first_name"}),tooltip:(0,a.jsx)(r.FormattedMessage,{id:"first_name"}),placeholder:P.formatMessage({id:"first_name"}),required:!0,rules:[{required:!0,message:P.formatMessage({id:"field_required"})}]}),(0,a.jsx)(n.Z,{width:"md",name:"last_name",label:(0,a.jsx)(r.FormattedMessage,{id:"last_name"}),tooltip:(0,a.jsx)(r.FormattedMessage,{id:"last_name"}),placeholder:P.formatMessage({id:"last_name"}),required:!0,rules:[{required:!0,message:P.formatMessage({id:"field_required"})}]}),(0,a.jsx)(n.Z,{width:"md",name:"email",label:(0,a.jsx)(r.FormattedMessage,{id:"email"}),tooltip:(0,a.jsx)(r.FormattedMessage,{id:"email"}),placeholder:P.formatMessage({id:"email"}),required:!0,rules:[{required:!0,message:P.formatMessage({id:"field_required"})}]}),(0,a.jsx)(n.Z.Password,{shouldUpdate:!0,width:"md",name:"password",label:(0,a.jsx)(r.FormattedMessage,{id:"password"}),tooltip:(0,a.jsx)(r.FormattedMessage,{id:"password"}),placeholder:P.formatMessage({id:"password"}),required:E,rules:[{validator:function(U,A){return A&&!/(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/i.test(A)?Promise.reject(new Error(P.formatMessage({id:"badPassword"}))):Promise.resolve()}},{required:E,message:(0,a.jsx)(r.FormattedMessage,{id:"field_required"})}]}),X.state==="loaded"&&X.list.map(function(x){return(0,a.jsx)(ce.Z,{field:x},x.id)})]}),(0,a.jsxs)(t.ZP.Group,{children:[!E&&(0,a.jsxs)(se.Z,{direction:"vertical",children:[!((j=m.roles)!==null&&j!==void 0&&j.includes("admin"))&&(0,a.jsx)(W.Z,{initialValue:m.is_active,name:"email_verified",label:(0,a.jsx)(r.FormattedMessage,{id:"is_email_verified"})}),(0,a.jsx)($.Z.Item,{noStyle:!0,shouldUpdate:!0,children:function(){return fe.getFieldValue("email_verified")?(0,a.jsx)(h.Fragment,{}):(0,a.jsxs)(a.Fragment,{children:[!G&&(0,a.jsxs)("p",{children:[(0,a.jsx)(r.FormattedMessage,{id:"no_base_url"}),(0,a.jsx)(r.Link,{to:"/configuration/settings/escola_auth",children:"Settings"})]}),(0,a.jsx)(ee.ZP,{disabled:!G,size:"small",onClick:function(){(0,T.WC)(fe.getFieldValue("email"),"".concat(G,"email-verify")).then(function(){D.ZP.success(P.formatMessage({id:"email_resend"}))})},children:(0,a.jsx)(r.FormattedMessage,{id:"resend"})})]})}})]}),(0,a.jsx)(W.Z,{name:"is_active",label:(0,a.jsx)(r.FormattedMessage,{id:"is_active"})}),ge&&(0,a.jsx)(i.Z.Group,{name:"roles",layout:"horizontal",label:(0,a.jsx)(r.FormattedMessage,{id:"roles"}),options:ge.filter(function(x){return x.guard_name!=="web"}).map(function(x){return x.name})})]}),!E&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(t.ZP.Group,{children:[(0,a.jsx)(t.ZP.Item,{name:"avatar",label:(0,a.jsx)(r.FormattedMessage,{id:"avatar"}),children:m.path_avatar?(0,a.jsx)(J.Z,{path:m.path_avatar,size:600,width:200}):(0,a.jsx)(ie.Z,{children:(0,a.jsx)(r.FormattedMessage,{id:"avatar_placeholder"})})}),(0,a.jsx)($.Z.Item,{noStyle:!0,shouldUpdate:!0,children:function(){return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(K.Z,{folder:"avatars/".concat(l),wrapInForm:!1,url:"/api/admin/users/".concat(l,"/avatar"),name:"avatar",accept:"image/*",onChange:function(A){A.file.status==="done"&&A.file.response&&A.file.response.success&&O(A.file.response.data)}}),(0,a.jsx)(ee.ZP,{danger:!0,onClick:Te,children:(0,a.jsx)(r.FormattedMessage,{id:"delete"})})]})}})]}),(0,a.jsxs)(Q.Z,{children:[(0,a.jsx)(me.Z,{}),(0,a.jsx)(t.ZP.Item,{style:{width:"100%"},label:(0,a.jsx)(r.FormattedMessage,{id:"groups",defaultMessage:"Groups"}),children:(0,a.jsx)(M.Z,{multiple:!0,loading:y,disabled:y,value:F,onSelect:v,onDeselect:he,onClear:Pe})})]})]})]})):(0,a.jsx)(de.Z,{})},B=e(23901),L=e(66419),te=e(7418),ne=function(C){var p=C.data,j=(0,h.useMemo)(function(){return{onFinish:function(){var E=g()(s()().mark(function O(P){var o,l;return s()().wrap(function(Z){for(;;)switch(Z.prev=Z.next){case 0:return o=c()({},P),Z.next=3,(0,T.yi)(Number(p==null?void 0:p.id),o);case 3:l=Z.sent,D.ZP.success(l.message);case 5:case"end":return Z.stop()}},O)}));function m(O){return E.apply(this,arguments)}return m}(),initialValues:p}},[p]);return(0,a.jsx)(t.ZP,c()(c()({},j),{},{children:(0,a.jsx)(t.ZP.Item,{label:(0,a.jsx)(r.FormattedMessage,{id:"categories"}),name:"interests",valuePropName:"value",children:(0,a.jsx)(te.Z,{})})}))},N=ne,ue=function(){var f=(0,r.useParams)(),C=(0,h.useState)(),p=_()(C,2),j=p[0],E=p[1],m=(0,r.useIntl)(),O=f.tab,P=O===void 0?"user_info":O,o=f.user,l=typeof o=="undefined",X=(0,h.useCallback)(g()(s()().mark(function Z(){var I;return s()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,(0,T.EA)(Number(o));case 2:I=d.sent,I.success&&E(c()(c()({},I.data),{},{interests:I.data.interests.map(L.i4)}));case 4:case"end":return d.stop()}},Z)})),[o]);return(0,h.useEffect)(function(){if(l){E({});return}X()},[o,X]),(0,a.jsx)(ae._z,{title:(0,a.jsx)(r.FormattedMessage,{id:"menu.Settings"}),header:{breadcrumb:{routes:[{path:"/users/".concat(o,"/user_info"),breadcrumbName:m.formatMessage({id:"menu.Settings"})},{path:String(P),breadcrumbName:m.formatMessage({id:String(P)})}]}},children:(0,a.jsxs)(S.ZP,{tabs:{type:"card",activeKey:P,onChange:function(I){return r.history.push("/users/".concat(o,"/").concat(I))}},children:[(0,a.jsx)(S.ZP.TabPane,{tab:l?(0,a.jsx)(r.FormattedMessage,{id:"new_user"}):(0,a.jsx)(r.FormattedMessage,{id:"edit_user"}),children:(0,a.jsx)(oe,{isNew:l,data:j,setData:E})},"user_info"),!l&&(0,a.jsx)(S.ZP.TabPane,{tab:(0,a.jsx)("span",{children:(0,a.jsx)(r.FormattedMessage,{id:"categories"})}),children:(j==null?void 0:j.id)&&(0,a.jsx)(N,{data:j})},"categories"),!l&&(0,a.jsx)(S.ZP.TabPane,{tab:(0,a.jsx)("span",{children:(0,a.jsx)(r.FormattedMessage,{id:"user_logs"})}),children:o&&(0,a.jsx)(B.Z,{useAsWidget:!0,userID:Number(o)})},"logs")]})})}},91680:function(le,H,e){e.d(H,{Cv:function(){return z},Rd:function(){return J},fA:function(){return ae},iy:function(){return M},uJ:function(){return _}});var Y=e(15009),s=e.n(Y),k=e(97857),c=e.n(k),q=e(99289),g=e.n(q),b=e(80854);function _(u,t){return S.apply(this,arguments)}function S(){return S=g()(s()().mark(function u(t,n){return s()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.abrupt("return",(0,b.request)("/api/admin/roles",c()({method:"GET",useCache:!1,params:t},n||{})));case 1:case"end":return i.stop()}},u)})),S.apply(this,arguments)}function ae(u,t){return r.apply(this,arguments)}function r(){return r=g()(s()().mark(function u(t,n){return s()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.abrupt("return",(0,b.request)("/api/admin/roles",c()({method:"POST",headers:{"Content-Type":"application/json"},data:t},n||{})));case 1:case"end":return i.stop()}},u)})),r.apply(this,arguments)}function J(u,t){return K.apply(this,arguments)}function K(){return K=g()(s()().mark(function u(t,n){return s()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.abrupt("return",(0,b.request)("/api/admin/roles/".concat(t),c()({method:"DELETE",headers:{"Content-Type":"application/json"}},n||{})));case 1:case"end":return i.stop()}},u)})),K.apply(this,arguments)}function M(u,t){return w.apply(this,arguments)}function w(){return w=g()(s()().mark(function u(t,n){return s()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.abrupt("return",(0,b.request)("/api/admin/roles/".concat(t),c()({method:"GET",useCache:!1},n||{})));case 1:case"end":return i.stop()}},u)})),w.apply(this,arguments)}function z(u,t,n){return T.apply(this,arguments)}function T(){return T=g()(s()().mark(function u(t,n,W){return s()().wrap(function(D){for(;;)switch(D.prev=D.next){case 0:return D.abrupt("return",(0,b.request)("/api/admin/roles/".concat(t),c()({method:"PATCH",headers:{"Content-Type":"application/json"},data:n},W||{})));case 1:case"end":return D.stop()}},u)})),T.apply(this,arguments)}}}]);

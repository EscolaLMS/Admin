"use strict";(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[4884],{82061:function(q,b,e){var i=e(1413),a=e(67294),T=e(47046),g=e(84089),x=function(I,p){return a.createElement(g.Z,(0,i.Z)((0,i.Z)({},I),{},{ref:p,icon:T.Z}))},v=a.forwardRef(x);b.Z=v},47389:function(q,b,e){var i=e(1413),a=e(67294),T=e(27363),g=e(84089),x=function(I,p){return a.createElement(g.Z,(0,i.Z)((0,i.Z)({},I),{},{ref:p,icon:T.Z}))},v=a.forwardRef(x);b.Z=v},51042:function(q,b,e){var i=e(1413),a=e(67294),T=e(42110),g=e(84089),x=function(I,p){return a.createElement(g.Z,(0,i.Z)((0,i.Z)({},I),{},{ref:p,icon:T.Z}))},v=a.forwardRef(x);b.Z=v},5966:function(q,b,e){var i=e(97685),a=e(1413),T=e(45987),g=e(21770),x=e(75842),v=e(55241),P=e(97435),I=e(67294),p=e(11547),C=e(85893),K=["fieldProps","proFieldProps"],ee=["fieldProps","proFieldProps"],j="text",L=function(m){var r=m.fieldProps,u=m.proFieldProps,_=(0,T.Z)(m,K);return(0,C.jsx)(p.Z,(0,a.Z)({valueType:j,fieldProps:r,filedConfig:{valueType:j},proFieldProps:u},_))},Z=function(m){var r=(0,g.Z)(m.open||!1,{value:m.open,onChange:m.onOpenChange}),u=(0,i.Z)(r,2),_=u[0],F=u[1];return(0,C.jsx)(x.Z.Item,{shouldUpdate:!0,noStyle:!0,children:function(f){var M,Y=f.getFieldValue(m.name||[]);return(0,C.jsx)(v.Z,(0,a.Z)((0,a.Z)({getPopupContainer:function(D){return D&&D.parentNode?D.parentNode:D},onOpenChange:function(D){return F(D)},content:(0,C.jsxs)("div",{style:{padding:"4px 0"},children:[(M=m.statusRender)===null||M===void 0?void 0:M.call(m,Y),m.strengthText?(0,C.jsx)("div",{style:{marginTop:10},children:(0,C.jsx)("span",{children:m.strengthText})}):null]}),overlayStyle:{width:240},placement:"rightTop"},m.popoverProps),{},{open:_,children:m.children}))}})},s=function(m){var r=m.fieldProps,u=m.proFieldProps,_=(0,T.Z)(m,ee),F=(0,I.useState)(!1),o=(0,i.Z)(F,2),f=o[0],M=o[1];return r!=null&&r.statusRender&&_.name?(0,C.jsx)(Z,{name:_.name,statusRender:r==null?void 0:r.statusRender,popoverProps:r==null?void 0:r.popoverProps,strengthText:r==null?void 0:r.strengthText,open:f,onOpenChange:M,children:(0,C.jsx)("div",{children:(0,C.jsx)(p.Z,(0,a.Z)({valueType:"password",fieldProps:(0,a.Z)((0,a.Z)({},(0,P.Z)(r,["statusRender","popoverProps","strengthText"])),{},{onBlur:function(V){var D;r==null||(D=r.onBlur)===null||D===void 0||D.call(r,V),M(!1)},onClick:function(V){var D;r==null||(D=r.onClick)===null||D===void 0||D.call(r,V),M(!0)}}),proFieldProps:u,filedConfig:{valueType:j}},_))})}):(0,C.jsx)(p.Z,(0,a.Z)({valueType:"password",fieldProps:r,proFieldProps:u,filedConfig:{valueType:j}},_))},A=L;A.Password=s,A.displayName="ProFormComponent",b.Z=A},16894:function(q,b,e){var i=e(7807);b.ZP=i.Z},50838:function(q,b,e){var i=e(52677),a=e.n(i),T=e(5574),g=e.n(T),x=e(64532),v=e(74656),P=e(67294),I=e(80854),p=e(85893),C=v.default.Option,K=function(j){var L=j.value,Z=j.onChange,s=j.multiple,A=(0,P.useState)([]),z=g()(A,2),m=z[0],r=z[1],u=(0,P.useState)([]),_=g()(u,2),F=_[0],o=_[1];return(0,P.useEffect)(function(){(0,x.a)().then(function(f){return r(f.data)})},[]),(0,P.useEffect)(function(){if(L){var f=Array.isArray(L)?L:[L],M=f.map(function(Y){return a()(Y)==="object"?Y.title:Y});o(M)}},[L]),(0,p.jsx)(v.default,{loading:m.length===0,showSearch:!0,allowClear:!0,placeholder:(0,p.jsx)(I.FormattedMessage,{id:"select_tags",defaultMessage:"Select tags"}),optionFilterProp:"children",mode:s?"multiple":void 0,onChange:function(M){M||o([]),Z&&Z(M)},value:F,children:m.map(function(f){return(0,p.jsx)(C,{value:f.title,children:f.title},f.title)})})};b.Z=K},56936:function(q,b,e){e.r(b),e.d(b,{TableColumns:function(){return se},default:function(){return le}});var i=e(15009),a=e.n(i),T=e(99289),g=e.n(T),x=e(5574),v=e.n(x),P=e(52677),I=e.n(P),p=e(97857),C=e.n(p),K=e(13769),ee=e.n(K),j=e(74453),L=e(16894),Z=e(67294),s=e(80854),A=e(32283),z=e(66419),m=e(4795),r=e(1832),u=e(51042),_=e(47389),F=e(82061),o=e(74656),f=e(66309),M=e(14726),Y=e(5154),V=e(2453),D=e(83062),ge=e(86738),ce=e(60943),t=e(50838),d=e(45919),E=e(37476),l=e(5966),c=e(75842),n=e(85893),R=function(B){var h=(0,s.useIntl)(),y=B.visible,S=B.onVisibleChange,X=B.onFinish,ie=c.Z.useForm(),ne=v()(ie,1),me=ne[0];return(0,n.jsx)(E.Y,{form:me,title:h.formatMessage({id:"generate_token",defaultMessage:"generate_token"}),width:"400px",visible:y,onVisibleChange:S,onFinish:X,children:(0,n.jsx)(l.Z,{label:(0,n.jsx)(s.FormattedMessage,{id:"email",defaultMessage:"email"}),rules:[{required:!0}],width:"md",name:"email"})})},te=R,Q=["type","defaultRender"],se=[{title:(0,n.jsx)(s.FormattedMessage,{id:"ID",defaultMessage:"ID"}),dataIndex:"id",hideInSearch:!0,sorter:!0,width:"80px"},{title:(0,n.jsx)(s.FormattedMessage,{id:"dateRange",defaultMessage:"Date Range"}),dataIndex:"dateRange",hideInSearch:!1,hideInForm:!0,hideInTable:!0,valueType:"dateRange",fieldProps:{allowEmpty:[!0,!0]}},{title:(0,n.jsx)(s.FormattedMessage,{id:"name",defaultMessage:"name"}),dataIndex:"name",sorter:!0},{title:(0,n.jsx)(s.FormattedMessage,{id:"status",defaultMessage:"status"}),dataIndex:"status",hideInSearch:!0,sorter:!0,renderFormItem:function(B){var h=B.type;return h==="form"?null:(0,n.jsxs)(o.default,{mode:"multiple",children:[(0,n.jsx)(o.default.Option,{value:"draft",children:(0,n.jsx)(f.Z,{children:(0,n.jsx)(s.FormattedMessage,{id:"draft",defaultMessage:"draft"})})}),(0,n.jsx)(o.default.Option,{value:"archived",children:(0,n.jsx)(f.Z,{color:"error",children:(0,n.jsx)(s.FormattedMessage,{id:"archived",defaultMessage:"archived"})})}),(0,n.jsx)(o.default.Option,{value:"published",children:(0,n.jsx)(f.Z,{color:"success",children:(0,n.jsx)(s.FormattedMessage,{id:"published",defaultMessage:"published"})})})]})},valueEnum:{draft:{text:(0,n.jsx)(f.Z,{children:(0,n.jsx)(s.FormattedMessage,{id:"draft",defaultMessage:"draft"})}),status:"draft"},archived:{text:(0,n.jsx)(f.Z,{color:"error",children:(0,n.jsx)(s.FormattedMessage,{id:"archived",defaultMessage:"archived"})}),status:"archived"},published:{text:(0,n.jsx)(f.Z,{color:"success",children:(0,n.jsx)(s.FormattedMessage,{id:"published",defaultMessage:"published"})}),status:"published"}}},{title:(0,n.jsx)(s.FormattedMessage,{id:"product",defaultMessage:"base_price"}),dataIndex:"product",sorter:!1,valueType:"textarea",search:!1,render:function(B,h){return h.product&&h.product.price?(0,n.jsx)(s.Link,{to:"/courses/webinars/".concat(h.id,"/product"),children:(0,n.jsx)(M.ZP,{type:"primary",icon:(0,n.jsx)(m.Z,{}),children:(0,n.jsx)("span",{children:(0,z.RW)(h.product.price,2,100)})})}):(0,n.jsxs)(Y.Z,{children:[(0,n.jsx)(r.Z,{})," ",(0,n.jsx)(s.FormattedMessage,{id:"no_pricing",defaultMessage:"no pricing"})]})}},{title:(0,n.jsx)(s.FormattedMessage,{id:"duration",defaultMessage:"duration"}),dataIndex:"duration",hideInSearch:!0,sorter:!0},{title:(0,n.jsx)(s.FormattedMessage,{id:"active_from",defaultMessage:"active_from"}),dataIndex:"active_from",hideInSearch:!0,sorter:!0,render:function(B,h){return(0,ce.WU)(new Date(h.active_from),d.GC)}},{title:(0,n.jsx)(s.FormattedMessage,{id:"active_to",defaultMessage:"active_to"}),dataIndex:"active_to",hideInSearch:!0,sorter:!0,render:function(B,h){return(0,ce.WU)(new Date(h.active_to),d.GC)}},{title:(0,n.jsx)(s.FormattedMessage,{id:"tags",defaultMessage:"Tags"}),dataIndex:"tag",key:"tag",sorter:!1,renderFormItem:function(B,h,y){var S=h.type,X=h.defaultRender,ie=ee()(h,Q);if(S==="form")return null;var ne=y.getFieldValue("state");return(0,n.jsx)(t.Z,C()(C()({},ie),{},{state:{type:ne},multiple:!0}))},render:function(B,h){var y;return(0,n.jsx)(Z.Fragment,{children:(y=h.tags)===null||y===void 0?void 0:y.map(function(S){return I()(S)==="object"?(0,n.jsx)(f.Z,{children:S.title},S.title):(0,n.jsx)(f.Z,{children:S},S)})})}}],J=function(){var B=(0,Z.useState)(!1),h=v()(B,2),y=h[0],S=h[1],X=(0,Z.useRef)(),ie=(0,Z.useState)(!1),ne=v()(ie,2),me=ne[0],k=ne[1],he=(0,s.useIntl)(),N=(0,Z.useCallback)(function(){var re=g()(a()().mark(function W(G){var H,ae;return a()().wrap(function($){for(;;)switch($.prev=$.next){case 0:return k(!0),H=V.ZP.loading((0,n.jsx)(s.FormattedMessage,{id:"loading",defaultMessage:"loading"})),$.prev=2,$.next=5,(0,A.NA)(G).then(function(de){k(!1),de.success&&V.ZP.success(de.message)});case 5:return H(),k(!1),(ae=X.current)===null||ae===void 0||ae.reload(),$.abrupt("return",!0);case 11:return $.prev=11,$.t0=$.catch(2),H(),V.ZP.error((0,n.jsx)(s.FormattedMessage,{id:"error",defaultMessage:"error"})),k(!1),$.abrupt("return",!1);case 17:case"end":return $.stop()}},W,null,[[2,11]])}));return function(W){return re.apply(this,arguments)}}(),[X]);return(0,n.jsxs)(j._z,{children:[(0,n.jsx)(L.ZP,{headerTitle:he.formatMessage({id:"menu.Courses.Webinars",defaultMessage:"Webinars"}),loading:me,actionRef:X,rowKey:"id",search:{layout:"vertical"},toolBarRender:function(){return[(0,n.jsx)(s.Link,{to:"/courses/webinars/new",children:(0,n.jsxs)(M.ZP,{type:"primary",children:[(0,n.jsx)(u.Z,{})," ",(0,n.jsx)(s.FormattedMessage,{id:"new",defaultMessage:"new"})]},"primary")},"addnew")]},request:function(W,G){var H=W.name,ae=W.status,O=W.dateRange,$=W.pageSize,de=W.current,Ce=W.tag;k(!0);var ue=G&&Object.entries(G)[0],oe=O&&O[0]?(0,ce.WU)(new Date(O[0]),d.Cu):void 0,Ee=O&&O[1]?(0,ce.WU)(new Date(O[1]),d.Cu):void 0;return(0,A.i5)({name:H,per_page:$,page:de,date_from:oe,date_to:Ee,status:ae,tags:Ce,order_by:ue&&ue[0],order:ue?ue[1]==="ascend"?"ASC":"DESC":void 0}).then(function(w){return w.success?{data:w.data,total:w.meta.total,success:!0}:[]}).catch(function(){var w=g()(a()().mark(function fe(ve){var pe;return a()().wrap(function(_e){for(;;)switch(_e.prev=_e.next){case 0:return _e.next=2,ve.response.json();case 2:return pe=_e.sent,console.log(pe),pe.data.code===400&&pe.data.message.includes("Youtube")&&(V.ZP.error(pe.data.message),S(!0)),_e.abrupt("return",[]);case 6:case"end":return _e.stop()}},fe)}));return function(fe){return w.apply(this,arguments)}}()).finally(function(){k(!1)})},columns:[].concat(se,[{title:(0,n.jsx)(s.FormattedMessage,{id:"options",defaultMessage:"options"}),dataIndex:"option",valueType:"option",width:"10%",render:function(W,G){return[(0,n.jsx)(s.Link,{to:"/courses/webinars/".concat(G.id),children:(0,n.jsx)(D.Z,{title:(0,n.jsx)(s.FormattedMessage,{id:"edit",defaultMessage:"edit"}),children:(0,n.jsx)(M.ZP,{type:"primary",icon:(0,n.jsx)(_.Z,{})})})},"edit"),(0,n.jsx)(ge.Z,{title:(0,n.jsx)(s.FormattedMessage,{id:"deleteQuestion",defaultMessage:"Are you sure to delete this record?"}),onConfirm:function(){return G.id&&N(G.id)},okText:(0,n.jsx)(s.FormattedMessage,{id:"yes",defaultMessage:"Yes"}),cancelText:(0,n.jsx)(s.FormattedMessage,{id:"no",defaultMessage:"No"}),children:(0,n.jsx)(D.Z,{title:(0,n.jsx)(s.FormattedMessage,{id:"delete",defaultMessage:"delete"}),children:(0,n.jsx)(M.ZP,{type:"primary",icon:(0,n.jsx)(F.Z,{}),danger:!0})})},"delete")]}}])}),(0,n.jsx)(te,{visible:y,onVisibleChange:function(W){return W===!1&&S(!1)},onFinish:function(){var re=g()(a()().mark(function W(G){var H;return a()().wrap(function(O){for(;;)switch(O.prev=O.next){case 0:return O.prev=0,O.next=3,(0,A.VY)({email:G.email});case 3:H=O.sent,H.url&&(window.open(H.url,"_blank"),S(!1)),O.next=10;break;case 7:O.prev=7,O.t0=O.catch(0),console.log(O.t0);case 10:case"end":return O.stop()}},W,null,[[0,7]])}));return function(W){return re.apply(this,arguments)}}()})]})},le=J},64532:function(q,b,e){e.d(b,{a:function(){return I}});var i=e(15009),a=e.n(i),T=e(97857),g=e.n(T),x=e(99289),v=e.n(x),P=e(80854);function I(C){return p.apply(this,arguments)}function p(){return p=v()(a()().mark(function C(K){return a()().wrap(function(j){for(;;)switch(j.prev=j.next){case 0:return j.abrupt("return",(0,P.request)("/api/tags/unique",g()({method:"GET",useCache:!1},K||{})));case 1:case"end":return j.stop()}},C)})),p.apply(this,arguments)}},32283:function(q,b,e){e.d(b,{NA:function(){return s},VY:function(){return z},i5:function(){return I},ml:function(){return C},tz:function(){return ee},z5:function(){return L}});var i=e(15009),a=e.n(i),T=e(97857),g=e.n(T),x=e(99289),v=e.n(x),P=e(80854);function I(r,u){return p.apply(this,arguments)}function p(){return p=v()(a()().mark(function r(u,_){return a()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.abrupt("return",(0,P.request)("/api/admin/webinars",g()({method:"GET",useCache:!1,params:u},_||{})));case 1:case"end":return o.stop()}},r)})),p.apply(this,arguments)}function C(r,u){return K.apply(this,arguments)}function K(){return K=v()(a()().mark(function r(u,_){return a()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.abrupt("return",(0,P.request)("/api/admin/webinars",g()({method:"POST",headers:{"Content-Type":"application/json"},data:u},_||{})));case 1:case"end":return o.stop()}},r)})),K.apply(this,arguments)}function ee(r,u){return j.apply(this,arguments)}function j(){return j=v()(a()().mark(function r(u,_){return a()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.abrupt("return",(0,P.request)("/api/admin/webinars/".concat(u),g()({method:"GET",useCache:!1},_||{})));case 1:case"end":return o.stop()}},r)})),j.apply(this,arguments)}function L(r,u,_){return Z.apply(this,arguments)}function Z(){return Z=v()(a()().mark(function r(u,_,F){return a()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.abrupt("return",(0,P.request)("/api/admin/webinars/".concat(u,"?method=PUT"),g()({method:"POST",headers:{"Content-Type":"application/json"},data:_},F||{})));case 1:case"end":return f.stop()}},r)})),Z.apply(this,arguments)}function s(r,u){return A.apply(this,arguments)}function A(){return A=v()(a()().mark(function r(u,_){return a()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.abrupt("return",(0,P.request)("/api/admin/webinars/".concat(u),g()({method:"DELETE",useCache:!1},_||{})));case 1:case"end":return o.stop()}},r)})),A.apply(this,arguments)}function z(r,u){return m.apply(this,arguments)}function m(){return m=v()(a()().mark(function r(u,_){return a()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.abrupt("return",(0,P.request)("/api/admin/g-token/generate",g()({method:"POST",headers:{"Content-Type":"application/json"},data:u},_||{})));case 1:case"end":return o.stop()}},r)})),m.apply(this,arguments)}},66309:function(q,b,e){e.d(b,{Z:function(){return ce}});var i=e(67294),a=e(93967),T=e.n(a),g=e(98423),x=e(98787),v=e(69760),P=e(96159),I=e(45353),p=e(53124),C=e(85982),K=e(10274),ee=e(14747),j=e(83262),L=e(83559);const Z=t=>{const{paddingXXS:d,lineWidth:E,tagPaddingHorizontal:l,componentCls:c,calc:n}=t,R=n(l).sub(E).equal(),te=n(d).sub(E).equal();return{[c]:Object.assign(Object.assign({},(0,ee.Wf)(t)),{display:"inline-block",height:"auto",marginInlineEnd:t.marginXS,paddingInline:R,fontSize:t.tagFontSize,lineHeight:t.tagLineHeight,whiteSpace:"nowrap",background:t.defaultBg,border:`${(0,C.unit)(t.lineWidth)} ${t.lineType} ${t.colorBorder}`,borderRadius:t.borderRadiusSM,opacity:1,transition:`all ${t.motionDurationMid}`,textAlign:"start",position:"relative",[`&${c}-rtl`]:{direction:"rtl"},"&, a, a:hover":{color:t.defaultColor},[`${c}-close-icon`]:{marginInlineStart:te,fontSize:t.tagIconSize,color:t.colorTextDescription,cursor:"pointer",transition:`all ${t.motionDurationMid}`,"&:hover":{color:t.colorTextHeading}},[`&${c}-has-color`]:{borderColor:"transparent",[`&, a, a:hover, ${t.iconCls}-close, ${t.iconCls}-close:hover`]:{color:t.colorTextLightSolid}},"&-checkable":{backgroundColor:"transparent",borderColor:"transparent",cursor:"pointer",[`&:not(${c}-checkable-checked):hover`]:{color:t.colorPrimary,backgroundColor:t.colorFillSecondary},"&:active, &-checked":{color:t.colorTextLightSolid},"&-checked":{backgroundColor:t.colorPrimary,"&:hover":{backgroundColor:t.colorPrimaryHover}},"&:active":{backgroundColor:t.colorPrimaryActive}},"&-hidden":{display:"none"},[`> ${t.iconCls} + span, > span + ${t.iconCls}`]:{marginInlineStart:R}}),[`${c}-borderless`]:{borderColor:"transparent",background:t.tagBorderlessBg}}},s=t=>{const{lineWidth:d,fontSizeIcon:E,calc:l}=t,c=t.fontSizeSM;return(0,j.mergeToken)(t,{tagFontSize:c,tagLineHeight:(0,C.unit)(l(t.lineHeightSM).mul(c).equal()),tagIconSize:l(E).sub(l(d).mul(2)).equal(),tagPaddingHorizontal:8,tagBorderlessBg:t.defaultBg})},A=t=>({defaultBg:new K.C(t.colorFillQuaternary).onBackground(t.colorBgContainer).toHexString(),defaultColor:t.colorText});var z=(0,L.I$)("Tag",t=>{const d=s(t);return Z(d)},A),m=function(t,d){var E={};for(var l in t)Object.prototype.hasOwnProperty.call(t,l)&&d.indexOf(l)<0&&(E[l]=t[l]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var c=0,l=Object.getOwnPropertySymbols(t);c<l.length;c++)d.indexOf(l[c])<0&&Object.prototype.propertyIsEnumerable.call(t,l[c])&&(E[l[c]]=t[l[c]]);return E},u=i.forwardRef((t,d)=>{const{prefixCls:E,style:l,className:c,checked:n,onChange:R,onClick:te}=t,Q=m(t,["prefixCls","style","className","checked","onChange","onClick"]),{getPrefixCls:se,tag:J}=i.useContext(p.E_),le=X=>{R==null||R(!n),te==null||te(X)},U=se("tag",E),[B,h,y]=z(U),S=T()(U,`${U}-checkable`,{[`${U}-checkable-checked`]:n},J==null?void 0:J.className,c,h,y);return B(i.createElement("span",Object.assign({},Q,{ref:d,style:Object.assign(Object.assign({},l),J==null?void 0:J.style),className:S,onClick:le})))}),_=e(98719);const F=t=>(0,_.Z)(t,(d,E)=>{let{textColor:l,lightBorderColor:c,lightColor:n,darkColor:R}=E;return{[`${t.componentCls}${t.componentCls}-${d}`]:{color:l,background:n,borderColor:c,"&-inverse":{color:t.colorTextLightSolid,background:R,borderColor:R},[`&${t.componentCls}-borderless`]:{borderColor:"transparent"}}}});var o=(0,L.bk)(["Tag","preset"],t=>{const d=s(t);return F(d)},A);function f(t){return typeof t!="string"?t:t.charAt(0).toUpperCase()+t.slice(1)}const M=(t,d,E)=>{const l=f(E);return{[`${t.componentCls}${t.componentCls}-${d}`]:{color:t[`color${E}`],background:t[`color${l}Bg`],borderColor:t[`color${l}Border`],[`&${t.componentCls}-borderless`]:{borderColor:"transparent"}}}};var Y=(0,L.bk)(["Tag","status"],t=>{const d=s(t);return[M(d,"success","Success"),M(d,"processing","Info"),M(d,"error","Error"),M(d,"warning","Warning")]},A),V=function(t,d){var E={};for(var l in t)Object.prototype.hasOwnProperty.call(t,l)&&d.indexOf(l)<0&&(E[l]=t[l]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var c=0,l=Object.getOwnPropertySymbols(t);c<l.length;c++)d.indexOf(l[c])<0&&Object.prototype.propertyIsEnumerable.call(t,l[c])&&(E[l[c]]=t[l[c]]);return E};const ge=i.forwardRef((t,d)=>{const{prefixCls:E,className:l,rootClassName:c,style:n,children:R,icon:te,color:Q,onClose:se,bordered:J=!0,visible:le}=t,U=V(t,["prefixCls","className","rootClassName","style","children","icon","color","onClose","bordered","visible"]),{getPrefixCls:B,direction:h,tag:y}=i.useContext(p.E_),[S,X]=i.useState(!0),ie=(0,g.Z)(U,["closeIcon","closable"]);i.useEffect(()=>{le!==void 0&&X(le)},[le]);const ne=(0,x.o2)(Q),me=(0,x.yT)(Q),k=ne||me,he=Object.assign(Object.assign({backgroundColor:Q&&!k?Q:void 0},y==null?void 0:y.style),n),N=B("tag",E),[re,W,G]=z(N),H=T()(N,y==null?void 0:y.className,{[`${N}-${Q}`]:k,[`${N}-has-color`]:Q&&!k,[`${N}-hidden`]:!S,[`${N}-rtl`]:h==="rtl",[`${N}-borderless`]:!J},l,c,W,G),ae=oe=>{oe.stopPropagation(),se==null||se(oe),!oe.defaultPrevented&&X(!1)},[,O]=(0,v.Z)((0,v.w)(t),(0,v.w)(y),{closable:!1,closeIconRender:oe=>{const Ee=i.createElement("span",{className:`${N}-close-icon`,onClick:ae},oe);return(0,P.wm)(oe,Ee,w=>({onClick:fe=>{var ve;(ve=w==null?void 0:w.onClick)===null||ve===void 0||ve.call(w,fe),ae(fe)},className:T()(w==null?void 0:w.className,`${N}-close-icon`)}))}}),$=typeof U.onClick=="function"||R&&R.type==="a",de=te||null,Ce=de?i.createElement(i.Fragment,null,de,R&&i.createElement("span",null,R)):R,ue=i.createElement("span",Object.assign({},ie,{ref:d,className:H,style:he}),Ce,O,ne&&i.createElement(o,{key:"preset",prefixCls:N}),me&&i.createElement(Y,{key:"status",prefixCls:N}));return re($?i.createElement(I.Z,{component:"Tag"},ue):ue)});ge.CheckableTag=u;var ce=ge}}]);

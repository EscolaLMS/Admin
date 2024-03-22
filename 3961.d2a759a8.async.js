"use strict";(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[3961],{48959:function(q,S,e){var R=e(28248),n=e(80854),h=e(85893),s=function(l){var M=l.open,v=l.onOk,i=l.onCancel,a=l.title,g=l.content,L=l.okText,T=l.loading;return(0,h.jsx)(R.Z,{width:"600px",title:a!=null?a:(0,h.jsx)(n.FormattedMessage,{id:"confirmModal.title"}),open:M,onOk:v,onCancel:i,okText:L!=null?L:(0,h.jsx)(n.FormattedMessage,{id:"save"}),cancelText:(0,h.jsx)(n.FormattedMessage,{id:"cancel"}),confirmLoading:T,children:g!=null?g:(0,h.jsx)("p",{children:(0,h.jsx)(n.FormattedMessage,{id:"confirmModal.content"})})})};S.Z=s},28225:function(q,S,e){var R=e(28248),n=e(80854),h=e(85893),s=function(l){var M=l.visible,v=l.setManage;return(0,h.jsx)(R.Z,{width:"600px",title:(0,h.jsx)(n.FormattedMessage,{id:"course.validate_edit.header",defaultMessage:"course.validate_edit.header"}),visible:M,onOk:function(){return v({showModal:!1,disableEdit:!1,clicked:!0})},onCancel:function(){return v({showModal:!1,disableEdit:!0,clicked:!1})},okText:"OK",cancelText:"Cancel",children:(0,h.jsx)("p",{children:(0,h.jsx)(n.FormattedMessage,{id:"course.validate_edit.content",defaultMessage:"course.validate_edit.content"})})})};S.Z=s},95486:function(q,S,e){var R=e(5574),n=e.n(R),h=e(14726),s=e(28248),O=e(55742),l=e(94315),M=e(45823),v=e(67294),i=e(80854),a=e(85893),g=function(T){var p=T.value,E=T.onChange,w=(0,v.useState)(!1),V=n()(w,2),o=V[0],N=V[1],Q=(0,v.useCallback)(function(){N(!1)},[]),d=(0,v.useState)("code"),c=n()(d,2),j=c[0],Z=c[1];return(0,a.jsxs)("div",{children:[(0,a.jsx)(h.ZP,{type:"primary",onClick:function(){return N(!0)},size:"small",children:(0,a.jsx)(i.FormattedMessage,{id:"json_editor"})}),(0,a.jsxs)(s.Z,{title:"JSON",open:o,onOk:Q,onCancel:Q,destroyOnClose:!0,children:[(0,a.jsxs)(O.ZP.Group,{onChange:function(m){return Z(m.target.value)},value:j,children:[(0,a.jsx)(O.ZP,{value:"tree",children:"tree"}),(0,a.jsx)(O.ZP,{value:"view",children:"view"}),(0,a.jsx)(O.ZP,{value:"form",children:"form"}),(0,a.jsx)(O.ZP,{value:"code",children:"code"}),(0,a.jsx)(O.ZP,{value:"text",children:"text"})]}),(0,a.jsx)(l.A,{mode:j,value:p,onChange:E},j)]})]})};S.Z=g},53957:function(q,S,e){var R=e(5574),n=e.n(R),h=e(50082),s=e(67294),O=e(85893),l=function(v){var i=v.productable,a=v.type,g=a===void 0?"card":a,L=(0,s.useState)("attributes"),T=n()(L,2),p=T[0],E=T[1];return(0,O.jsx)(h.Z,{productable:i,tab:p,onTabChange:function(V){return E(V)},type:g})};S.C=l},28808:function(q,S,e){var R=e(5574),n=e.n(R),h=e(67294),s=e(36309),O=function(M){var v=(0,h.useState)({state:"initial"}),i=n()(v,2),a=i[0],g=i[1];return(0,h.useEffect)(function(){g({state:"loading"}),(0,s.XU)({class_type:M}).then(function(L){L.success&&g({state:"loaded",list:L.data})})},[M]),a};S.Z=O},14408:function(q,S,e){e.d(S,{Z:function(){return M}});var R=e(97857),n=e.n(R),h=e(5574),s=e.n(h),O=e(2254),l=e(67294);function M(){var v=(0,l.useState)({showModal:!1,disableEdit:!1,clicked:!1}),i=s()(v,2),a=i[0],g=i[1],L=function(p){(p==null?void 0:p.status)==="published"&&p!==null&&p!==void 0&&p.active_from&&(0,O.C)(new Date(p==null?void 0:p.active_from))&&!a.clicked?g(n()(n()({},a),{},{showModal:!1,disableEdit:!0,clicked:!1})):g(n()(n()({},a),{},{showModal:!1,disableEdit:!1,clicked:!1}))};return{manageCourseEdit:a,setManageCourseEdit:g,validateCourseEdit:L}}},23961:function(q,S,e){e.r(S),e.d(S,{TabNames:function(){return te},default:function(){return Le}});var R=e(15009),n=e.n(R),h=e(97857),s=e.n(h),O=e(99289),l=e.n(O),M=e(5574),v=e.n(M),i=e(26271),a=e(952),g=e(5966),L=e(64317),T=e(50335),p=e(31199),E=e(2453),w=e(75081),V=e(38925),o=e(14726),N=e(71230),Q=e(15746),d=e(67294),c=e(19411),j=e(74453),Z=e(7418),Y=e(48959),m=e(28225),z=e(19632),he=e.n(z),ve=e(66309),pe=e(83863),le=e(41606),ge=e(27484),ee=e.n(ge),t=e(85893),ue=function(f){return ee().isMoment(f)?f.valueOf():f},Me=function(f){var F=f.value,u=F===void 0?[]:F,G=f.onChange,U=f.format,W=U===void 0?"DD-MM-YYYY HH:mm":U,ae=f.selectProps,ne=ae===void 0?{}:ae,P=(0,d.useState)(!1),H=v()(P,2),se=H[0],_=H[1],K=(0,d.useCallback)(function(x){var D=ue(x),b=u.indexOf(D),$=he()(u);b>-1?$.splice(b,1):$.push(D),G($)},[u]),C=(0,d.useCallback)(function(x){var D=u.indexOf(ue(x))>-1;return(0,t.jsx)("div",{className:"ant-picker-cell-inner",style:D?{position:"relative",zIndex:2,display:"inlineBlock",width:"24px",height:"22px",lineHeight:"22px",backgroundColor:"#1890ff",color:"#fff",margin:"auto",borderRadius:"2px",transition:"background 0.3s, border 0.3s"}:{},children:ee().isMoment(x)?x.date():x})},[u]),B=(0,d.useCallback)(function(x){var D=x.value,b=x.onClose,$=function(){b(),G(u.filter(function(A){return A!==D}))};return(0,t.jsx)(ve.Z,{onClose:$,closable:!0,children:ee()(D).format(W)})},[u]),J=function(){return{disabledMinutes:function(){return Array.from({length:59},function(b,$){return $+1})}}};return(0,t.jsx)(pe.default,s()(s()({},ne),{},{allowClear:!0,mode:"multiple",value:u,onClear:function(){return G&&G([])},tagRender:B,open:se,onClick:function(){return _(!0)},onBlur:function(){return _(!1)},popupMatchSelectWidth:!1,popupClassName:"multipleDropdownClassName",dropdownStyle:{height:"310px",width:"335px",minWidth:"0"},dropdownRender:function(){return(0,t.jsx)(le.default,{disabledDate:function(b){var $=new Date;return b.valueOf()<=$.setDate($.getDate()-1)},showTime:{format:"HH"},disabledTime:J,onChange:function(b){b&&K(b)},open:!0,cellRender:C,getPopupContainer:function(b){return b.parentNode},defaultValue:ee()("00:00","HH")})}}))},Ee=Me,me=e(23535),je=e(53957),Pe=e(44167),xe=e(54434),Ce=function(y){return y.draft="draft",y.published="published",y.archived="archived",y}({}),be=e(28808),De=e(14408),Oe=e(18025),ie=e(51490),de=e(66419),r=e(80854),Ae=e(49677),Te=e.n(Ae),_e=e(40411),ye=e(83062),Fe=e(31156),Ie=e(16894),Se=function(f){var F=f.data,u=f.onChange,G=(0,d.useState)(!1),U=v()(G,2),W=U[0],ae=U[1],ne=(0,d.useState)(ee()(F.date)),P=v()(ne,2),H=P[0],se=P[1],_=(0,d.useCallback)(function(K){se(ee()(K)),ae(!0),(0,ie.YG)(F.consultation_term_id,K).then(function(C){C.success?(E.ZP.success(C.message),u(H)):E.ZP.error(C.message)}).catch(function(C){return E.ZP.error(C.toString())}).finally(function(){return ae(!1)})},[H]);return(0,t.jsx)(d.Fragment,{children:(0,t.jsx)(le.default,{disabledDate:function(C){var B=new Date;return C&&C.valueOf()<=B.setDate(B.getDate()-1)},disabled:W,value:H,showTime:{format:"HH"},onChange:function(C){C&&_(C.toISOString())}})})},ce={reported:"warning",reject:"error",approved:"success"},Re=[{title:(0,t.jsx)(r.FormattedMessage,{id:"ID",defaultMessage:"ID"}),dataIndex:"consultation_term_id",hideInSearch:!0,sorter:!0,width:"80px"},{title:(0,t.jsx)(r.FormattedMessage,{id:"user",defaultMessage:"user"}),dataIndex:"user",render:function(f,F){var u,G,U;return"".concat((u=F.user)===null||u===void 0?void 0:u.first_name," ").concat((G=F.user)===null||G===void 0?void 0:G.last_name," ").concat((U=F.user)===null||U===void 0?void 0:U.email)},sorter:!0},{title:(0,t.jsx)(r.FormattedMessage,{id:"date",defaultMessage:"date"}),dataIndex:"date",sorter:!0,render:function(f,F){return ee()(F.date).format("yyyy-MM-DD HH:mm")}},{title:(0,t.jsx)(r.FormattedMessage,{id:"status",defaultMessage:"status"}),dataIndex:"status",sorter:!0,render:function(f,F){return(0,t.jsx)(_e.Z,{status:ce[F.status],text:(0,t.jsx)(r.FormattedMessage,{id:F.status})})}}],Ze=function(f){var F=f.consultation,u=(0,d.useState)(!1),G=v()(u,2),U=G[0],W=G[1],ae=(0,d.useState)([]),ne=v()(ae,2),P=ne[0],H=ne[1],se=(0,r.useIntl)(),_=(0,d.useCallback)(function(){W(!0),(0,ie.MP)(F).then(function(C){C.success&&H(C.data)}).catch(function(){E.ZP.error((0,t.jsx)(r.FormattedMessage,{id:"error",defaultMessage:"error"}))}).finally(function(){return W(!1)})},[F]);(0,d.useEffect)(function(){_()},[F]);var K=(0,d.useCallback)(function(C){return(0,t.jsx)("ul",{className:"events",children:P.map(function(B){if(C.format("yyyy-MM-DD")===ee()(B.date).format("yyyy-MM-DD")){var J,x,D,b;return(0,t.jsx)("li",{children:(0,t.jsx)(_e.Z,{status:ce[B.status],text:(0,t.jsx)(d.Fragment,{children:(0,t.jsxs)(ye.Z,{title:"".concat((J=B.user)===null||J===void 0?void 0:J.first_name," ").concat((x=B.user)===null||x===void 0?void 0:x.last_name," ").concat((D=B.user)===null||D===void 0?void 0:D.email),children:[(0,t.jsx)("small",{children:ee()(B.date).format("HH:mm")})," ",(b=B.user)===null||b===void 0?void 0:b.email]})})})},B.consultation_term_id)}return null})})},[P]);return(0,t.jsxs)(d.Fragment,{children:[U&&(0,t.jsx)(w.Z,{}),(0,t.jsx)(Fe.Z,{dateCellRender:K}),U?(0,t.jsx)(w.Z,{}):(0,t.jsx)(Ie.ZP,{headerTitle:se.formatMessage({id:"Consultations",defaultMessage:"Consultations"}),loading:U,rowKey:"consultation_term_id",search:!1,request:function(){var C=l()(n()().mark(function B(J,x){var D,b;return n()().wrap(function(I){for(;;)switch(I.prev=I.next){case 0:return Te()(J),D=x&&Object.entries(x)[0],b=P,D&&(b=(0,de.Pf)(b,D[0],D[1]!=="ascend")),I.abrupt("return",{data:b,total:b.length,success:!0});case 5:case"end":return I.stop()}},B)}));return function(B,J){return C.apply(this,arguments)}}(),columns:[].concat(Re,[{title:(0,t.jsx)(r.FormattedMessage,{id:"options",defaultMessage:"options"}),dataIndex:"option",valueType:"option",width:"20%",render:function(B,J){return[(0,t.jsx)(Se,{data:J,onChange:function(){return _()}},"change_date")]}}])})]})},Ue=Ze,te=function(y){return y.ATTRIBUTES="attributes",y.PRODUCT="product",y.MEDIA="media",y.CATEGORIES="categories",y.BRANDING="branding",y.USER_SUBMISSION="user_submission",y.CALENDAR="calendar",y}({}),Be=function(){var f=(0,r.useIntl)(),F=(0,r.useParams)(),u=F.consultation,G=F.tab,U=G===void 0?"attributes":G,W=u==="new",ae=(0,d.useState)(),ne=v()(ae,2),P=ne[0],H=ne[1],se=(0,De.Z)(),_=se.manageCourseEdit,K=se.setManageCourseEdit,C=se.validateCourseEdit,B=a.ZP.useForm(),J=v()(B,1),x=J[0],D=(0,be.Z)("EscolaLms\\Consultations\\Models\\Consultation"),b=(0,d.useCallback)(l()(n()().mark(function I(){var A,k;return n()().wrap(function(re){for(;;)switch(re.prev=re.next){case 0:return re.next=2,(0,ie.hW)(Number(u));case 2:A=re.sent,A.success&&(U==="attributes"&&C(A.data),H(s()(s()({},A.data),{},{author_id:A.data.author&&A.data.author.id,categories:(k=A.data.categories)===null||k===void 0?void 0:k.map(de.i4)})));case 4:case"end":return re.stop()}},I)})),[u]);(0,d.useEffect)(function(){if(W){H({name:"new"});return}b()},[u]);var $=(0,d.useMemo)(function(){return{onValuesChange:function(){K(s()(s()({},_),{},{valuesChanged:!0}))},onFinish:function(){var I=l()(n()().mark(function k(fe){var re,oe;return n()().wrap(function(X){for(;;)switch(X.prev=X.next){case 0:if(!_.disableEdit){X.next=3;break}return K({showModal:!0,disableEdit:!0,clicked:!1}),X.abrupt("return");case 3:if(re=s()(s()({},fe),{},{image_url:P&&P.image_url,image_path:P&&P.image_url&&(0,de.Ox)(P.image_url),logotype_url:P&&P.logotype_url,logotype_path:P&&P.logotype_path&&(0,de.Ox)(P.logotype_path)}),!W){X.next=11;break}return X.next=7,(0,ie.YS)(re);case 7:oe=X.sent,oe.success&&r.history.push("/other/consultations/".concat(oe.data.id)),X.next=15;break;case 11:return X.next=13,(0,ie.hR)(Number(u),re);case 13:oe=X.sent,oe.success&&(C(oe.data),r.history.push("/other/consultations/".concat(oe.data.id,"/").concat(U)));case 15:E.ZP.success(oe.message),K(s()(s()({},_),{},{showConfirmModal:!1,loading:!1,valuesChanged:!1}));case 17:case"end":return X.stop()}},k)}));function A(k){return I.apply(this,arguments)}return A}(),initialValues:P}},[P,u,U,_]);return P?(0,t.jsxs)(j._z,{title:W?(0,t.jsx)(r.FormattedMessage,{id:"consultation"}):(0,t.jsx)(r.FormattedMessage,{id:"consultations.edit"}),header:{breadcrumb:{routes:[{path:"other/consultations",breadcrumbName:f.formatMessage({id:"menu.Other activities.Consultations"})},{path:String(u),breadcrumbName:f.formatMessage({id:"form"})},{path:"/",breadcrumbName:String(P.name)},{path:String(U),breadcrumbName:String(P.name)}]}},children:[(0,t.jsxs)(i.ZP,{tabs:{type:"card",activeKey:U,onChange:function(A){A!==te.ATTRIBUTES&&_.valuesChanged?K(s()(s()({},_),{},{showConfirmModal:!0})):r.history.push("/other/consultations/".concat(u,"/").concat(A))}},children:[(0,t.jsxs)(i.ZP.TabPane,{tab:(0,t.jsx)(r.FormattedMessage,{id:"attributes"}),children:[_.disableEdit&&(0,t.jsx)(V.Z,{closable:!0,style:{marginBottom:"20px"},type:"warning",message:(0,t.jsx)(r.FormattedMessage,{id:"course_edit_warning_message",defaultMessage:"course_edit_warning_message"}),action:(0,t.jsx)(o.ZP,{onClick:function(){return K({showModal:!0,disableEdit:!0,clicked:!0})},type:"primary",children:(0,t.jsx)(r.FormattedMessage,{id:"questionnaire.submit",defaultMessage:"questionnaire.submit"})})}),(0,t.jsx)(m.Z,{visible:_.showModal,setManage:K}),(0,t.jsxs)(a.ZP,s()(s()({},$),{},{form:x,children:[(0,t.jsxs)(a.ZP.Group,{children:[(0,t.jsx)(g.Z,{width:"md",name:"name",label:(0,t.jsx)(r.FormattedMessage,{id:"name"}),tooltip:(0,t.jsx)(r.FormattedMessage,{id:"name"}),placeholder:f.formatMessage({id:"name",defaultMessage:"name"}),required:!0,disabled:_.disableEdit}),(0,t.jsx)(g.Z,{width:"sm",name:"duration",label:(0,t.jsx)(r.FormattedMessage,{id:"duration"}),tooltip:(0,t.jsx)(r.FormattedMessage,{id:"consultations.duration_tooltip"}),placeholder:f.formatMessage({id:"duration",defaultMessage:"duration"}),disabled:_.disableEdit}),(0,t.jsx)(L.Z,{name:"status",width:"sm",label:(0,t.jsx)(r.FormattedMessage,{id:"status"}),tooltip:(0,t.jsx)(r.FormattedMessage,{id:"status_consultation_tooltip"}),valueEnum:{draft:f.formatMessage({id:"draft",defaultMessage:"draft"}),published:f.formatMessage({id:"published",defaultMessage:"published"}),archived:f.formatMessage({id:"archived",defaultMessage:"archived"})},initialValue:Ce.draft,placeholder:f.formatMessage({id:"status"}),rules:[{required:!0,message:(0,t.jsx)(r.FormattedMessage,{id:"select"})}],disabled:_.disableEdit})]}),(0,t.jsxs)(a.ZP.Group,{children:[(0,t.jsx)(T.Z,{width:"sm",name:"active_from",label:(0,t.jsx)(r.FormattedMessage,{id:"active_from"}),tooltip:(0,t.jsx)(r.FormattedMessage,{id:"active_from"}),placeholder:f.formatMessage({id:"active_from",defaultMessage:"active_from"}),disabled:_.disableEdit}),(0,t.jsx)(T.Z,{width:"sm",name:"active_to",label:(0,t.jsx)(r.FormattedMessage,{id:"active_to"}),tooltip:(0,t.jsx)(r.FormattedMessage,{id:"active_to"}),placeholder:f.formatMessage({id:"active_to",defaultMessage:"active_to"}),disabled:_.disableEdit}),(0,t.jsx)(a.ZP.Item,{name:"author_id",label:(0,t.jsx)(r.FormattedMessage,{id:"tutor"}),tooltip:(0,t.jsx)(r.FormattedMessage,{id:"tutor_consultation_tooltip"}),valuePropName:"value",required:!0,children:(0,t.jsx)(Pe.Z,{})}),(0,t.jsx)(p.Z,{initialValue:W?null:void 0,width:"sm",name:"max_session_students",label:(0,t.jsx)(r.FormattedMessage,{id:"max_session_students"}),tooltip:(0,t.jsx)(r.FormattedMessage,{id:"max_session_students_tooltip"}),placeholder:f.formatMessage({id:"max_session_students",defaultMessage:"max_session_students"}),min:1,max:99,fieldProps:{step:1}})]}),(0,t.jsx)(a.ZP.Group,{children:(0,t.jsx)(a.ZP.Item,{name:"description",label:(0,t.jsx)(r.FormattedMessage,{id:"description"}),tooltip:(0,t.jsx)(r.FormattedMessage,{id:"description_tooltip"}),valuePropName:"value",style:{width:440},required:!0,children:(0,t.jsx)(c.ZP,{directory:"consultation/".concat(u,"/wysiwyg")})})}),(0,t.jsx)(a.ZP.Group,{children:(0,t.jsx)(a.ZP.Item,{valuePropName:"value",name:"proposed_terms",tooltip:(0,t.jsx)(r.FormattedMessage,{id:"proposed_terms_tooltip"}),label:(0,t.jsx)(r.FormattedMessage,{id:"consultations.proposed_terms"}),children:(0,t.jsx)(Ee,{})})}),(0,t.jsx)(a.ZP.Group,{children:D.state==="loaded"&&D.list.map(function(I){return(0,t.jsx)(Oe.Z,{field:I},I.id)})})]}))]},te.ATTRIBUTES),!W&&(0,t.jsx)(i.ZP.TabPane,{tab:(0,t.jsx)(r.FormattedMessage,{id:"product"}),disabled:_.disableEdit,children:u&&(0,t.jsx)(je.C,{type:"line",productable:{class_type:"App\\Models\\Consultation",class_id:u,name:String(P.name),quantity:1}})},te.PRODUCT),!W&&(0,t.jsx)(i.ZP.TabPane,{tab:(0,t.jsx)(r.FormattedMessage,{id:"media"}),disabled:_.disableEdit,children:(0,t.jsx)(a.ZP,s()(s()({},$),{},{children:(0,t.jsx)(me.Z,{folder:"consultation/".concat(u),title:"image",action:"/api/admin/consultations/".concat(u),src_name:"image_url",form_name:"image",getUploadedSrcField:function(A){return A.file.response.data.image_url},setPath:function(A){return H(function(k){return s()(s()({},k),A)})}})}))},te.MEDIA),!W&&(0,t.jsx)(i.ZP.TabPane,{tab:(0,t.jsx)(r.FormattedMessage,{id:"categories"}),disabled:_.disableEdit,children:(0,t.jsx)(N.Z,{children:(0,t.jsx)(Q.Z,{span:12,children:(0,t.jsx)(a.ZP,s()(s()({},$),{},{children:(0,t.jsx)(a.ZP.Item,{label:(0,t.jsx)(r.FormattedMessage,{id:"categories"}),name:"categories",valuePropName:"value",children:(0,t.jsx)(Z.Z,{})})}))})})},te.CATEGORIES)," ",!W&&(0,t.jsx)(i.ZP.TabPane,{tab:(0,t.jsx)(r.FormattedMessage,{id:"branding"}),disabled:_.disableEdit,children:(0,t.jsx)(a.ZP,s()(s()({},$),{},{children:(0,t.jsx)(me.Z,{folder:"consultation/".concat(u),title:f.formatMessage({id:"logotype"}),action:"/api/admin/consultations/".concat(u),src_name:"logotype_url",form_name:"logotype",getUploadedSrcField:function(A){return A.file.response.data.logotype_url},setPath:function(A){return H(function(k){return s()(s()({},k),A)})}})}))},te.BRANDING)," ",!W&&(0,t.jsx)(i.ZP.TabPane,{tab:(0,t.jsx)(r.FormattedMessage,{id:"user_submission"}),disabled:_.disableEdit,children:(0,t.jsx)(N.Z,{children:(0,t.jsx)(Q.Z,{span:12,children:u&&(0,t.jsx)(xe.ZP,{id:Number(u),type:"App\\Models\\Consultation"})})})},te.USER_SUBMISSION),!W&&(0,t.jsx)(i.ZP.TabPane,{tab:(0,t.jsx)(r.FormattedMessage,{id:"consultations.calendar"}),children:(0,t.jsx)(Ue,{consultation:Number(u)})},te.CALENDAR)]}),(0,t.jsx)(Y.Z,{open:!!_.showConfirmModal,onOk:function(){K(s()(s()({},_),{},{loading:!0})),x.submit()},onCancel:function(){K(s()(s()({},_),{},{showConfirmModal:!1}))},loading:!!_.loading})]}):(0,t.jsx)(w.Z,{})},Le=Be},18025:function(q,S,e){var R=e(95486),n=e(31472),h=e(31199),s=e(63434),O=e(5966),l=e(952),M=e(90672),v=e(67294),i=e(80854),a=e(85893),g=function(T){var p=T.field,E=(0,i.useIntl)(),w=function(o){var N,Q=(0,i.getLocale)(),d=o==null||(N=o.extra)===null||N===void 0||(N=N.find(function(c){return c==null?void 0:c[Q]}))===null||N===void 0?void 0:N[Q];switch(o.type){case n.fS.Number:return(0,a.jsx)(h.Z,{width:"md",name:o.name,label:d!=null?d:(0,a.jsx)(i.FormattedMessage,{id:o.name}),tooltip:(0,a.jsx)(i.FormattedMessage,{id:o.name}),placeholder:E.formatMessage({id:o.name,defaultMessage:o.name}),min:1,max:1024,fieldProps:{step:1}});case n.fS.Boolean:return(0,a.jsx)(s.Z,{name:o.name,children:d!=null?d:(0,a.jsx)(i.FormattedMessage,{id:o.name})});case n.fS.Varchar:return(0,a.jsx)(O.Z,{width:"md",name:o.name,label:d!=null?d:(0,a.jsx)(i.FormattedMessage,{id:o.name}),tooltip:(0,a.jsx)(i.FormattedMessage,{id:o.name}),placeholder:E.formatMessage({id:o.name})});case n.fS.Json:return(0,a.jsx)(l.ZP.Item,{name:o.name,label:d!=null?d:(0,a.jsx)(i.FormattedMessage,{id:o.name}),tooltip:(0,a.jsx)(i.FormattedMessage,{id:o.name}),valuePropName:"value",children:(0,a.jsx)(R.Z,{})});case n.fS.Text:default:return(0,a.jsx)(M.Z,{width:"md",name:o.name,label:d!=null?d:(0,a.jsx)(i.FormattedMessage,{id:o.name}),tooltip:(0,a.jsx)(i.FormattedMessage,{id:o.name}),placeholder:E.formatMessage({id:o.name})})}};return(0,a.jsx)(a.Fragment,{children:w(p)})};S.Z=g},51490:function(q,S,e){e.d(S,{MP:function(){return o},SQ:function(){return w},YG:function(){return Q},YS:function(){return a},hR:function(){return p},hW:function(){return L},sL:function(){return v}});var R=e(15009),n=e.n(R),h=e(97857),s=e.n(h),O=e(99289),l=e.n(O),M=e(80854);function v(c,j){return i.apply(this,arguments)}function i(){return i=l()(n()().mark(function c(j,Z){return n()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.abrupt("return",(0,M.request)("/api/admin/consultations",s()({method:"GET",useCache:!1,params:j},Z||{})));case 1:case"end":return m.stop()}},c)})),i.apply(this,arguments)}function a(c,j){return g.apply(this,arguments)}function g(){return g=l()(n()().mark(function c(j,Z){return n()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.abrupt("return",(0,M.request)("/api/admin/consultations",s()({method:"POST",headers:{"Content-Type":"application/json"},data:j},Z||{})));case 1:case"end":return m.stop()}},c)})),g.apply(this,arguments)}function L(c,j){return T.apply(this,arguments)}function T(){return T=l()(n()().mark(function c(j,Z){return n()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.abrupt("return",(0,M.request)("/api/admin/consultations/".concat(j),s()({method:"GET",useCache:!1},Z||{})));case 1:case"end":return m.stop()}},c)})),T.apply(this,arguments)}function p(c,j,Z){return E.apply(this,arguments)}function E(){return E=l()(n()().mark(function c(j,Z,Y){return n()().wrap(function(z){for(;;)switch(z.prev=z.next){case 0:return z.abrupt("return",(0,M.request)("/api/admin/consultations/".concat(j),s()({method:"PUT",headers:{"Content-Type":"application/json"},data:Z},Y||{})));case 1:case"end":return z.stop()}},c)})),E.apply(this,arguments)}function w(c,j){return V.apply(this,arguments)}function V(){return V=l()(n()().mark(function c(j,Z){return n()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.abrupt("return",(0,M.request)("/api/admin/consultations/".concat(j),s()({method:"DELETE",useCache:!1},Z||{})));case 1:case"end":return m.stop()}},c)})),V.apply(this,arguments)}function o(c,j){return N.apply(this,arguments)}function N(){return N=l()(n()().mark(function c(j,Z){return n()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.abrupt("return",(0,M.request)("/api/admin/consultations/".concat(j,"/schedule"),s()({method:"GET",useCache:!1},Z||{})));case 1:case"end":return m.stop()}},c)})),N.apply(this,arguments)}function Q(c,j,Z){return d.apply(this,arguments)}function d(){return d=l()(n()().mark(function c(j,Z,Y){return n()().wrap(function(z){for(;;)switch(z.prev=z.next){case 0:return z.abrupt("return",(0,M.request)("/api/admin/consultations/change-term/".concat(j),s()({method:"POST",headers:{"Content-Type":"application/json"},data:{executed_at:Z}},Y||{})));case 1:case"end":return z.stop()}},c)})),d.apply(this,arguments)}},36309:function(q,S,e){e.d(S,{AK:function(){return L},XU:function(){return v},kB:function(){return a}});var R=e(15009),n=e.n(R),h=e(97857),s=e.n(h),O=e(99289),l=e.n(O),M=e(80854);function v(p,E){return i.apply(this,arguments)}function i(){return i=l()(n()().mark(function p(E,w){return n()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.abrupt("return",(0,M.request)("/api/model-fields",s()({method:"GET",params:E},w||{})));case 1:case"end":return o.stop()}},p)})),i.apply(this,arguments)}function a(p,E){return g.apply(this,arguments)}function g(){return g=l()(n()().mark(function p(E,w){return n()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.abrupt("return",(0,M.request)("/api/admin/model-fields",s()({method:"POST",data:E},w||{})));case 1:case"end":return o.stop()}},p)})),g.apply(this,arguments)}function L(p,E){return T.apply(this,arguments)}function T(){return T=l()(n()().mark(function p(E,w){return n()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.abrupt("return",(0,M.request)("/api/admin/model-fields",s()({method:"DELETE",data:E},w||{})));case 1:case"end":return o.stop()}},p)})),T.apply(this,arguments)}}}]);

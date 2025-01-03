"use strict";(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[7036],{48959:function(re,B,e){var L=e(28248),o=e(80854),E=e(85893),m=function(a){var C=a.open,A=a.onOk,l=a.onCancel,n=a.title,c=a.content,v=a.okText,R=a.loading;return(0,E.jsx)(L.Z,{width:"600px",title:n!=null?n:(0,E.jsx)(o.FormattedMessage,{id:"confirmModal.title"}),open:C,onOk:A,onCancel:l,okText:v!=null?v:(0,E.jsx)(o.FormattedMessage,{id:"save"}),cancelText:(0,E.jsx)(o.FormattedMessage,{id:"cancel"}),confirmLoading:R,children:c!=null?c:(0,E.jsx)("p",{children:(0,E.jsx)(o.FormattedMessage,{id:"confirmModal.content"})})})};B.Z=m},28225:function(re,B,e){var L=e(28248),o=e(80854),E=e(85893),m=function(a){var C=a.visible,A=a.setManage;return(0,E.jsx)(L.Z,{width:"600px",title:(0,E.jsx)(o.FormattedMessage,{id:"course.validate_edit.header",defaultMessage:"course.validate_edit.header"}),visible:C,onOk:function(){return A({showModal:!1,disableEdit:!1,clicked:!0})},onCancel:function(){return A({showModal:!1,disableEdit:!0,clicked:!1})},okText:"OK",cancelText:"Cancel",children:(0,E.jsx)("p",{children:(0,E.jsx)(o.FormattedMessage,{id:"course.validate_edit.content",defaultMessage:"course.validate_edit.content"})})})};B.Z=m},95486:function(re,B,e){var L=e(5574),o=e.n(L),E=e(14726),m=e(28248),Z=e(55742),a=e(94315),C=e(45823),A=e(67294),l=e(80854),n=e(85893),c=function(R){var j=R.value,y=R.onChange,z=(0,A.useState)(!1),W=o()(z,2),i=W[0],V=W[1],oe=(0,A.useCallback)(function(){V(!1)},[]),S=(0,A.useState)("code"),h=o()(S,2),r=h[0],K=h[1];return(0,n.jsxs)("div",{children:[(0,n.jsx)(E.ZP,{type:"primary",onClick:function(){return V(!0)},size:"small",children:(0,n.jsx)(l.FormattedMessage,{id:"json_editor"})}),(0,n.jsxs)(m.Z,{title:"JSON",open:i,onOk:oe,onCancel:oe,destroyOnClose:!0,children:[(0,n.jsxs)(Z.ZP.Group,{onChange:function(p){return K(p.target.value)},value:r,children:[(0,n.jsx)(Z.ZP,{value:"tree",children:"tree"}),(0,n.jsx)(Z.ZP,{value:"view",children:"view"}),(0,n.jsx)(Z.ZP,{value:"form",children:"form"}),(0,n.jsx)(Z.ZP,{value:"code",children:"code"}),(0,n.jsx)(Z.ZP,{value:"text",children:"text"})]}),(0,n.jsx)(a.A,{mode:r,value:j,onChange:y},r)]})]})};B.Z=c},53957:function(re,B,e){var L=e(5574),o=e.n(L),E=e(50082),m=e(67294),Z=e(85893),a=function(A){var l=A.productable,n=A.type,c=n===void 0?"card":n,v=(0,m.useState)("attributes"),R=o()(v,2),j=R[0],y=R[1];return(0,Z.jsx)(E.Z,{productable:l,tab:j,onTabChange:function(W){return y(W)},type:c})};B.C=a},28808:function(re,B,e){var L=e(5574),o=e.n(L),E=e(67294),m=e(36309),Z=function(C){var A=(0,E.useState)({state:"initial"}),l=o()(A,2),n=l[0],c=l[1];return(0,E.useEffect)(function(){c({state:"loading"}),(0,m.XU)({class_type:C}).then(function(v){v.success&&c({state:"loaded",list:v.data})})},[C]),n};B.Z=Z},14408:function(re,B,e){e.d(B,{Z:function(){return C}});var L=e(97857),o=e.n(L),E=e(5574),m=e.n(E),Z=e(2254),a=e(67294);function C(){var A=(0,a.useState)({showModal:!1,disableEdit:!1,clicked:!1}),l=m()(A,2),n=l[0],c=l[1],v=function(j){(j==null?void 0:j.status)==="published"&&j!==null&&j!==void 0&&j.active_from&&(0,Z.C)(new Date(j==null?void 0:j.active_from))&&!n.clicked?c(o()(o()({},n),{},{showModal:!1,disableEdit:!0,clicked:!1})):c(o()(o()({},n),{},{showModal:!1,disableEdit:!1,clicked:!1}))};return{manageCourseEdit:n,setManageCourseEdit:c,validateCourseEdit:v}}},67036:function(re,B,e){e.r(B),e.d(B,{TabNames:function(){return ne},default:function(){return ke}});var L=e(52677),o=e.n(L),E=e(15009),m=e.n(E),Z=e(97857),a=e.n(Z),C=e(99289),A=e.n(C),l=e(5574),n=e.n(l),c=e(78715),v=e(952),R=e(5966),j=e(64317),y=e(50335),z=e(31199),W=e(2453),i=e(74330),V=e(38925),oe=e(14726),S=e(71230),h=e(15746),r=e(67294),K=e(19411),J=e(74453),p=e(7418),k=e(48959),Pe=e(28225),Ce=e(19632),be=e.n(Ce),De=e(66309),Ae=e(74656),he=e(26693),Oe=e(27484),ae=e.n(Oe),t=e(85893),pe=function(_){return ae().isMoment(_)?_.valueOf():_},Te=function(_){var u=_.value,d=u===void 0?[]:u,F=_.onChange,D=_.format,U=D===void 0?"DD-MM-YYYY HH:mm":D,q=_.selectProps,X=q===void 0?{}:q,P=(0,r.useState)(!1),Y=n()(P,2),ee=Y[0],f=Y[1],I=(0,r.useCallback)(function(g){var M=pe(g),T=d.indexOf(M),N=be()(d);T>-1?N.splice(T,1):N.push(M),F(N)},[d]),x=(0,r.useCallback)(function(g){var M=d.indexOf(pe(g))>-1;return(0,t.jsx)("div",{className:"ant-picker-cell-inner",style:M?{position:"relative",zIndex:2,display:"inlineBlock",width:"24px",height:"22px",lineHeight:"22px",backgroundColor:"#1890ff",color:"#fff",margin:"auto",borderRadius:"2px",transition:"background 0.3s, border 0.3s"}:{},children:ae().isMoment(g)?g.date():g})},[d]),O=(0,r.useCallback)(function(g){var M=g.value,T=g.onClose,N=function(){T(),F(d.filter(function(fe){return fe!==M}))};return(0,t.jsx)(De.Z,{onClose:N,closable:!0,children:ae()(M).format(U)})},[d]),w=function(){return{disabledMinutes:function(){return Array.from({length:59},function(T,N){return N+1})}}};return(0,t.jsx)(Ae.default,a()(a()({},X),{},{allowClear:!0,mode:"multiple",value:d,onClear:function(){return F&&F([])},tagRender:O,open:ee,onClick:function(){return f(!0)},onBlur:function(){return f(!1)},popupMatchSelectWidth:!1,popupClassName:"multipleDropdownClassName",dropdownStyle:{height:"310px",width:"335px",minWidth:"0"},dropdownRender:function(){return(0,t.jsx)(he.default,{disabledDate:function(T){var N=new Date;return T.valueOf()<=N.setDate(N.getDate()-1)},showTime:{format:"HH"},disabledTime:w,onChange:function(T){T&&I(T)},open:!0,cellRender:x,getPopupContainer:function(T){return T.parentNode},defaultValue:ae()("00:00","HH")})}}))},Se=Te,ge=e(23535),ye=e(53957),Fe=e(44167),Ie=e(54434),Ze=function(b){return b.draft="draft",b.published="published",b.archived="archived",b}({}),Re=e(28808),Ue=e(14408),Be=e(49677),Me=e.n(Be),le=e(51490),_e=e(40411),s=e(80854),Le=e(20568),ue=e(66419),Ee=e(16894),We={reported:"warning",reject:"error",approved:"success"},Ke=[{title:(0,t.jsx)(s.FormattedMessage,{id:"ID",defaultMessage:"ID"}),dataIndex:"consultation_term_id",hideInSearch:!0,sorter:!0,width:"80px"},{title:(0,t.jsx)(s.FormattedMessage,{id:"user",defaultMessage:"user"}),dataIndex:"user",render:function(_,u){var d,F,D;return"".concat((d=u.user)===null||d===void 0?void 0:d.first_name," ").concat((F=u.user)===null||F===void 0?void 0:F.last_name," ").concat((D=u.user)===null||D===void 0?void 0:D.email)},sorter:!0},{title:(0,t.jsx)(s.FormattedMessage,{id:"date",defaultMessage:"date"}),dataIndex:"date",sorter:!0,render:function(_,u){return ae()(u.date).format("YYYY-MM-DD HH:mm")}},{title:(0,t.jsx)(s.FormattedMessage,{id:"status",defaultMessage:"status"}),dataIndex:"status",sorter:!0,render:function(_,u){return(0,t.jsx)(_e.Z,{status:We[u.status],text:(0,t.jsx)(s.FormattedMessage,{id:u.status})})}}],we=function(_){var u=_.consultation,d=(0,r.useState)(!1),F=n()(d,2),D=F[0],U=F[1],q=(0,r.useState)([]),X=n()(q,2),P=X[0],Y=X[1],ee=(0,s.useIntl)(),f=(0,r.useCallback)(function(){U(!0),(0,le.MP)(u).then(function(I){I.success&&Y(I.data)}).catch(function(){W.ZP.error((0,t.jsx)(s.FormattedMessage,{id:"error",defaultMessage:"error"}))}).finally(function(){return U(!1)})},[u]);return(0,r.useEffect)(function(){f()},[u]),(0,t.jsx)(r.Fragment,{children:D?(0,t.jsx)(i.Z,{}):(0,t.jsx)(Ee.ZP,{headerTitle:ee.formatMessage({id:"Consultations",defaultMessage:"Consultations"}),loading:D,rowKey:"consultation_term_id",search:!1,request:function(){var I=A()(m()().mark(function x(O,w){var g,M;return m()().wrap(function(N){for(;;)switch(N.prev=N.next){case 0:return Me()(O),g=w&&Object.entries(w)[0],M=P.filter(function(ie){return ie.status==="approved"}),g&&(M=(0,ue.Pf)(M,g[0],g[1]!=="ascend")),N.abrupt("return",{data:M,total:M.length,success:!0});case 5:case"end":return N.stop()}},x)}));return function(x,O){return I.apply(this,arguments)}}(),columns:[].concat(Ke,[{title:"Analiza obrazu",dataIndex:"status",sorter:!0,render:function(x,O){var w;return(0,t.jsx)("div",{children:(0,t.jsx)(Le.Z,{defaultDirectory:"/consultation/".concat(u,"/").concat(new Date(O.date).getTime()/1e3,"/").concat((w=O.user)===null||w===void 0?void 0:w.id),hideDeleteBtn:!0,hideAddBtn:!0})})}}])})})},Ne=we,$e=e(18025),Ge=e(43564),Ve=e(83062),Ye=e(65876),He=function(_){var u=_.data,d=_.onChange,F=(0,r.useState)(!1),D=n()(F,2),U=D[0],q=D[1],X=(0,r.useState)(ae()(u.date)),P=n()(X,2),Y=P[0],ee=P[1],f=(0,r.useCallback)(function(I){ee(ae()(I)),q(!0),(0,le.YG)(u.consultation_term_id,I).then(function(x){x.success?(W.ZP.success(x.message),d(Y)):W.ZP.error(x.message)}).catch(function(x){return W.ZP.error(x.toString())}).finally(function(){return q(!1)})},[Y]);return(0,t.jsx)(r.Fragment,{children:(0,t.jsx)(he.default,{disabledDate:function(x){var O=new Date;return x&&x.valueOf()<=O.setDate(O.getDate()-1)},disabled:U,value:Y,showTime:{format:"HH"},onChange:function(x){x&&f(x.toISOString())}})})},je={reported:"warning",reject:"error",approved:"success"},ze=[{title:(0,t.jsx)(s.FormattedMessage,{id:"ID",defaultMessage:"ID"}),dataIndex:"consultation_term_id",hideInSearch:!0,sorter:!0,width:"80px"},{title:(0,t.jsx)(s.FormattedMessage,{id:"user",defaultMessage:"user"}),dataIndex:"user",render:function(_,u){var d,F,D;return"".concat((d=u.user)===null||d===void 0?void 0:d.first_name," ").concat((F=u.user)===null||F===void 0?void 0:F.last_name," ").concat((D=u.user)===null||D===void 0?void 0:D.email)},sorter:!0},{title:(0,t.jsx)(s.FormattedMessage,{id:"date",defaultMessage:"date"}),dataIndex:"date",sorter:!0,render:function(_,u){return ae()(u.date).format("YYYY-MM-DD HH:mm")}},{title:(0,t.jsx)(s.FormattedMessage,{id:"status",defaultMessage:"status"}),dataIndex:"status",sorter:!0,render:function(_,u){return(0,t.jsx)(_e.Z,{status:je[u.status],text:(0,t.jsx)(s.FormattedMessage,{id:u.status})})}}],Je=function(_){var u=_.consultation,d=(0,r.useState)(!1),F=n()(d,2),D=F[0],U=F[1],q=(0,r.useState)([]),X=n()(q,2),P=X[0],Y=X[1],ee=(0,s.useIntl)(),f=(0,r.useCallback)(function(){U(!0),(0,le.MP)(u).then(function(x){x.success&&Y(x.data)}).catch(function(){W.ZP.error((0,t.jsx)(s.FormattedMessage,{id:"error",defaultMessage:"error"}))}).finally(function(){return U(!1)})},[u]);(0,r.useEffect)(function(){f()},[u]);var I=(0,r.useCallback)(function(x){return(0,t.jsx)("ul",{className:"events",children:P.map(function(O){if(x.format("yyyy-MM-DD")===ae()(O.date).format("yyyy-MM-DD")){var w,g,M,T;return(0,t.jsx)("li",{children:(0,t.jsx)(_e.Z,{status:je[O.status],text:(0,t.jsx)(r.Fragment,{children:(0,t.jsxs)(Ve.Z,{title:"".concat((w=O.user)===null||w===void 0?void 0:w.first_name," ").concat((g=O.user)===null||g===void 0?void 0:g.last_name," ").concat((M=O.user)===null||M===void 0?void 0:M.email),children:[(0,t.jsx)("small",{children:ae()(O.date).format("HH:mm")})," ",(T=O.user)===null||T===void 0?void 0:T.email]})})})},O.consultation_term_id)}return null})})},[P]);return(0,t.jsxs)(r.Fragment,{children:[D&&(0,t.jsx)(i.Z,{}),(0,t.jsx)(Ye.Z,{dateCellRender:I}),D?(0,t.jsx)(i.Z,{}):(0,t.jsx)(Ee.ZP,{headerTitle:ee.formatMessage({id:"Consultations",defaultMessage:"Consultations"}),loading:D,rowKey:"consultation_term_id",search:!1,request:function(){var x=A()(m()().mark(function O(w,g){var M,T;return m()().wrap(function(ie){for(;;)switch(ie.prev=ie.next){case 0:return Me()(w),M=g&&Object.entries(g)[0],T=P,M&&(T=(0,ue.Pf)(T,M[0],M[1]!=="ascend")),ie.abrupt("return",{data:T,total:T.length,success:!0});case 5:case"end":return ie.stop()}},O)}));return function(O,w){return x.apply(this,arguments)}}(),columns:[].concat(ze,[{title:(0,t.jsx)(s.FormattedMessage,{id:"options",defaultMessage:"options"}),dataIndex:"option",valueType:"option",width:"20%",render:function(O,w){return[(0,t.jsx)(He,{data:w,onChange:function(){return f()}},"change_date")]}}])})]})},Xe=Je,ne=function(b){return b.ATTRIBUTES="attributes",b.PRODUCT="product",b.MEDIA="media",b.CATEGORIES="categories",b.BRANDING="branding",b.USER_SUBMISSION="user_submission",b.CALENDAR="calendar",b.SCREENSAVES="screensaves",b}({}),Qe=function(){var _=(0,s.useIntl)(),u=(0,s.useParams)(),d=u.consultation,F=u.tab,D=F===void 0?"attributes":F,U=d==="new",q=(0,r.useState)(),X=n()(q,2),P=X[0],Y=X[1],ee=(0,Ue.Z)(),f=ee.manageCourseEdit,I=ee.setManageCourseEdit,x=ee.validateCourseEdit,O=v.ZP.useForm(),w=n()(O,1),g=w[0],M=(0,Re.Z)("EscolaLms\\Consultations\\Models\\Consultation"),T=(0,r.useState)(!1),N=n()(T,2),ie=N[0],fe=N[1],qe=(0,r.useCallback)(A()(m()().mark(function H(){var $,se,Q,de;return m()().wrap(function(G){for(;;)switch(G.prev=G.next){case 0:return G.next=2,(0,Ge.Xd)({per_page:-1});case 2:return $=G.sent,"data"in $&&fe(((se=$.data.find(function(xe){return xe.key==="show_screen_saves"}))===null||se===void 0?void 0:se.value)==="1"),G.next=6,(0,le.hW)(Number(d));case 6:Q=G.sent,Q.success&&(D==="attributes"&&x(Q.data),Y(a()(a()({},Q.data),{},{author_id:Q.data.author&&Q.data.author.id,categories:(de=Q.data.categories)===null||de===void 0?void 0:de.map(ue.i4)})));case 8:case"end":return G.stop()}},H)})),[d]);(0,r.useEffect)(function(){if(U){Y({name:"new"});return}qe()},[d]);var me=(0,r.useMemo)(function(){return{onValuesChange:function(){I(a()(a()({},f),{},{valuesChanged:!0}))},onFinish:function(){var H=A()(m()().mark(function se(Q){var de,ce,G;return m()().wrap(function(te){for(;;)switch(te.prev=te.next){case 0:if(!f.disableEdit){te.next=3;break}return I({showModal:!0,disableEdit:!0,clicked:!1}),te.abrupt("return");case 3:if(ce=a()(a()({},Q),{},{teachers:Q==null||(de=Q.teachers)===null||de===void 0?void 0:de.map(function(ve){return o()(ve)==="object"?ve.id:ve}),image_url:P&&P.image_url,image_path:P&&P.image_url&&(0,ue.Ox)(P.image_url),logotype_url:P&&P.logotype_url,logotype_path:P&&P.logotype_path&&(0,ue.Ox)(P.logotype_path)}),!U){te.next=11;break}return te.next=7,(0,le.YS)(ce);case 7:G=te.sent,G.success&&s.history.push("/other/consultations/".concat(G.data.id)),te.next=15;break;case 11:return te.next=13,(0,le.hR)(Number(d),ce);case 13:G=te.sent,G.success&&(x(G.data),s.history.push("/other/consultations/".concat(G.data.id,"/").concat(D)));case 15:W.ZP.success(G.message),I(a()(a()({},f),{},{showConfirmModal:!1,loading:!1,valuesChanged:!1}));case 17:case"end":return te.stop()}},se)}));function $(se){return H.apply(this,arguments)}return $}(),initialValues:P}},[P,d,D,f]);return P?(0,t.jsxs)(J._z,{title:U?(0,t.jsx)(s.FormattedMessage,{id:"consultation"}):(0,t.jsx)(s.FormattedMessage,{id:"consultations.edit"}),header:{breadcrumb:{routes:[{path:"other/consultations",breadcrumbName:_.formatMessage({id:"menu.Other activities.Consultations"})},{path:String(d),breadcrumbName:_.formatMessage({id:"form"})},{path:"/",breadcrumbName:String(P.name)},{path:String(D),breadcrumbName:String(P.name)}]}},children:[(0,t.jsxs)(c.ZP,{tabs:{type:"card",activeKey:D,onChange:function($){$!==ne.ATTRIBUTES&&f.valuesChanged?I(a()(a()({},f),{},{showConfirmModal:!0})):s.history.push("/other/consultations/".concat(d,"/").concat($))}},children:[(0,t.jsxs)(c.ZP.TabPane,{tab:(0,t.jsx)(s.FormattedMessage,{id:"attributes"}),children:[f.disableEdit&&(0,t.jsx)(V.Z,{closable:!0,style:{marginBottom:"20px"},type:"warning",message:(0,t.jsx)(s.FormattedMessage,{id:"course_edit_warning_message",defaultMessage:"course_edit_warning_message"}),action:(0,t.jsx)(oe.ZP,{onClick:function(){return I({showModal:!0,disableEdit:!0,clicked:!0})},type:"primary",children:(0,t.jsx)(s.FormattedMessage,{id:"questionnaire.submit",defaultMessage:"questionnaire.submit"})})}),(0,t.jsx)(Pe.Z,{visible:f.showModal,setManage:I}),(0,t.jsxs)(v.ZP,a()(a()({},me),{},{form:g,children:[(0,t.jsxs)(v.ZP.Group,{children:[(0,t.jsx)(R.Z,{width:"md",name:"name",label:(0,t.jsx)(s.FormattedMessage,{id:"name"}),tooltip:(0,t.jsx)(s.FormattedMessage,{id:"name"}),placeholder:_.formatMessage({id:"name",defaultMessage:"name"}),required:!0,disabled:f.disableEdit}),(0,t.jsx)(R.Z,{width:"sm",name:"duration",label:(0,t.jsx)(s.FormattedMessage,{id:"duration"}),tooltip:(0,t.jsx)(s.FormattedMessage,{id:"consultations.duration_tooltip"}),placeholder:_.formatMessage({id:"duration",defaultMessage:"duration"}),disabled:f.disableEdit}),(0,t.jsx)(j.Z,{name:"status",width:"sm",label:(0,t.jsx)(s.FormattedMessage,{id:"status"}),tooltip:(0,t.jsx)(s.FormattedMessage,{id:"status_consultation_tooltip"}),valueEnum:{draft:_.formatMessage({id:"draft",defaultMessage:"draft"}),published:_.formatMessage({id:"published",defaultMessage:"published"}),archived:_.formatMessage({id:"archived",defaultMessage:"archived"})},initialValue:Ze.draft,placeholder:_.formatMessage({id:"status"}),rules:[{required:!0,message:(0,t.jsx)(s.FormattedMessage,{id:"select"})}],disabled:f.disableEdit})]}),(0,t.jsxs)(v.ZP.Group,{children:[(0,t.jsx)(y.Z,{width:"sm",name:"active_from",label:(0,t.jsx)(s.FormattedMessage,{id:"active_from"}),tooltip:(0,t.jsx)(s.FormattedMessage,{id:"active_from"}),placeholder:_.formatMessage({id:"active_from",defaultMessage:"active_from"}),disabled:f.disableEdit}),(0,t.jsx)(y.Z,{width:"sm",name:"active_to",label:(0,t.jsx)(s.FormattedMessage,{id:"active_to"}),tooltip:(0,t.jsx)(s.FormattedMessage,{id:"active_to"}),placeholder:_.formatMessage({id:"active_to",defaultMessage:"active_to"}),disabled:f.disableEdit}),(0,t.jsx)(v.ZP.Item,{name:"teachers",label:(0,t.jsx)(s.FormattedMessage,{id:"tutors"}),tooltip:(0,t.jsx)(s.FormattedMessage,{id:"tutor_consultation_tooltip"}),valuePropName:"value",required:!0,children:(0,t.jsx)(Fe.Z,{multiple:!0})}),(0,t.jsx)(z.Z,{initialValue:U?null:void 0,width:"sm",name:"max_session_students",label:(0,t.jsx)(s.FormattedMessage,{id:"max_session_students"}),tooltip:(0,t.jsx)(s.FormattedMessage,{id:"max_session_students_tooltip"}),placeholder:_.formatMessage({id:"max_session_students",defaultMessage:"max_session_students"}),min:1,max:99,fieldProps:{step:1}})]}),(0,t.jsx)(v.ZP.Group,{children:(0,t.jsx)(v.ZP.Item,{name:"description",label:(0,t.jsx)(s.FormattedMessage,{id:"description"}),tooltip:(0,t.jsx)(s.FormattedMessage,{id:"description_tooltip"}),valuePropName:"value",style:{width:440},required:!0,children:(0,t.jsx)(K.ZP,{directory:"consultation/".concat(d,"/wysiwyg")})})}),(0,t.jsx)(v.ZP.Group,{children:(0,t.jsx)(v.ZP.Item,{valuePropName:"value",name:"proposed_terms",tooltip:(0,t.jsx)(s.FormattedMessage,{id:"proposed_terms_tooltip"}),label:(0,t.jsx)(s.FormattedMessage,{id:"consultations.proposed_terms"}),children:(0,t.jsx)(Se,{})})}),(0,t.jsx)(v.ZP.Group,{children:M.state==="loaded"&&M.list.map(function(H){return(0,t.jsx)($e.Z,{field:H},H.id)})})]}))]},ne.ATTRIBUTES),!U&&(0,t.jsx)(c.ZP.TabPane,{tab:(0,t.jsx)(s.FormattedMessage,{id:"product"}),disabled:f.disableEdit,children:d&&(0,t.jsx)(ye.C,{type:"line",productable:{class_type:"App\\Models\\Consultation",class_id:d,name:String(P.name),quantity:1}})},ne.PRODUCT),!U&&(0,t.jsx)(c.ZP.TabPane,{tab:(0,t.jsx)(s.FormattedMessage,{id:"media"}),disabled:f.disableEdit,children:(0,t.jsx)(v.ZP,a()(a()({},me),{},{children:(0,t.jsx)(ge.Z,{folder:"consultation/".concat(d),title:"image",action:"/api/admin/consultations/".concat(d),src_name:"image_url",form_name:"image",getUploadedSrcField:function($){return $.file.response.data.image_url},setPath:function($){return Y(function(se){return a()(a()({},se),$)})}})}))},ne.MEDIA),!U&&(0,t.jsx)(c.ZP.TabPane,{tab:(0,t.jsx)(s.FormattedMessage,{id:"categories"}),disabled:f.disableEdit,children:(0,t.jsx)(S.Z,{children:(0,t.jsx)(h.Z,{span:12,children:(0,t.jsx)(v.ZP,a()(a()({},me),{},{children:(0,t.jsx)(v.ZP.Item,{label:(0,t.jsx)(s.FormattedMessage,{id:"categories"}),name:"categories",valuePropName:"value",children:(0,t.jsx)(p.Z,{})})}))})})},ne.CATEGORIES),!U&&(0,t.jsx)(c.ZP.TabPane,{tab:(0,t.jsx)(s.FormattedMessage,{id:"branding"}),disabled:f.disableEdit,children:(0,t.jsx)(v.ZP,a()(a()({},me),{},{children:(0,t.jsx)(ge.Z,{folder:"consultation/".concat(d),title:_.formatMessage({id:"logotype"}),action:"/api/admin/consultations/".concat(d),src_name:"logotype_url",form_name:"logotype",getUploadedSrcField:function($){return $.file.response.data.logotype_url},setPath:function($){return Y(function(se){return a()(a()({},se),$)})}})}))},ne.BRANDING)," ",!U&&(0,t.jsx)(c.ZP.TabPane,{tab:(0,t.jsx)(s.FormattedMessage,{id:"user_submission"}),disabled:f.disableEdit,children:(0,t.jsx)(S.Z,{children:(0,t.jsx)(h.Z,{span:12,children:d&&(0,t.jsx)(Ie.ZP,{id:Number(d),type:"App\\Models\\Consultation"})})})},ne.USER_SUBMISSION),!U&&(0,t.jsx)(c.ZP.TabPane,{tab:(0,t.jsx)(s.FormattedMessage,{id:"consultations.calendar"}),children:(0,t.jsx)(Xe,{consultation:Number(d)})},ne.CALENDAR),!U&&ie&&(0,t.jsx)(c.ZP.TabPane,{tab:(0,t.jsx)(s.FormattedMessage,{id:"consultations.screenSaves"}),children:(0,t.jsx)(Ne,{consultation:Number(d)})},ne.SCREENSAVES)]}),(0,t.jsx)(k.Z,{open:!!f.showConfirmModal,onOk:function(){I(a()(a()({},f),{},{loading:!0})),g.submit()},onCancel:function(){I(a()(a()({},f),{},{showConfirmModal:!1}))},loading:!!f.loading})]}):(0,t.jsx)(i.Z,{})},ke=Qe},18025:function(re,B,e){var L=e(95486),o=e(31472),E=e(31199),m=e(63434),Z=e(5966),a=e(952),C=e(90672),A=e(67294),l=e(80854),n=e(85893),c=function(R){var j=R.field,y=(0,l.useIntl)(),z=function(i){var V,oe=(0,l.getLocale)(),S=i==null||(V=i.extra)===null||V===void 0||(V=V.find(function(h){return h==null?void 0:h[oe]}))===null||V===void 0?void 0:V[oe];switch(i.type){case o.fS.Number:return(0,n.jsx)(E.Z,{width:"md",name:i.name,label:S!=null?S:(0,n.jsx)(l.FormattedMessage,{id:i.name}),tooltip:(0,n.jsx)(l.FormattedMessage,{id:i.name}),placeholder:y.formatMessage({id:i.name,defaultMessage:i.name}),min:1,max:1024,fieldProps:{step:1}});case o.fS.Boolean:return(0,n.jsx)(m.Z,{name:i.name,children:S!=null?S:(0,n.jsx)(l.FormattedMessage,{id:i.name})});case o.fS.Varchar:return(0,n.jsx)(Z.Z,{width:"md",name:i.name,label:S!=null?S:(0,n.jsx)(l.FormattedMessage,{id:i.name}),tooltip:(0,n.jsx)(l.FormattedMessage,{id:i.name}),placeholder:y.formatMessage({id:i.name})});case o.fS.Json:return(0,n.jsx)(a.ZP.Item,{name:i.name,label:S!=null?S:(0,n.jsx)(l.FormattedMessage,{id:i.name}),tooltip:(0,n.jsx)(l.FormattedMessage,{id:i.name}),valuePropName:"value",children:(0,n.jsx)(L.Z,{})});case o.fS.Text:default:return(0,n.jsx)(C.Z,{width:"md",name:i.name,label:S!=null?S:(0,n.jsx)(l.FormattedMessage,{id:i.name}),tooltip:(0,n.jsx)(l.FormattedMessage,{id:i.name}),placeholder:y.formatMessage({id:i.name})})}};return(0,n.jsx)(n.Fragment,{children:z(j)})};B.Z=c},51490:function(re,B,e){e.d(B,{MP:function(){return i},SQ:function(){return z},YG:function(){return oe},YS:function(){return n},hR:function(){return j},hW:function(){return v},sL:function(){return A}});var L=e(15009),o=e.n(L),E=e(97857),m=e.n(E),Z=e(99289),a=e.n(Z),C=e(80854);function A(h,r){return l.apply(this,arguments)}function l(){return l=a()(o()().mark(function h(r,K){return o()().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return p.abrupt("return",(0,C.request)("/api/admin/consultations",m()({method:"GET",useCache:!1,params:r},K||{})));case 1:case"end":return p.stop()}},h)})),l.apply(this,arguments)}function n(h,r){return c.apply(this,arguments)}function c(){return c=a()(o()().mark(function h(r,K){return o()().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return p.abrupt("return",(0,C.request)("/api/admin/consultations",m()({method:"POST",headers:{"Content-Type":"application/json"},data:r},K||{})));case 1:case"end":return p.stop()}},h)})),c.apply(this,arguments)}function v(h,r){return R.apply(this,arguments)}function R(){return R=a()(o()().mark(function h(r,K){return o()().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return p.abrupt("return",(0,C.request)("/api/admin/consultations/".concat(r),m()({method:"GET",useCache:!1},K||{})));case 1:case"end":return p.stop()}},h)})),R.apply(this,arguments)}function j(h,r,K){return y.apply(this,arguments)}function y(){return y=a()(o()().mark(function h(r,K,J){return o()().wrap(function(k){for(;;)switch(k.prev=k.next){case 0:return k.abrupt("return",(0,C.request)("/api/admin/consultations/".concat(r),m()({method:"PUT",headers:{"Content-Type":"application/json"},data:K},J||{})));case 1:case"end":return k.stop()}},h)})),y.apply(this,arguments)}function z(h,r){return W.apply(this,arguments)}function W(){return W=a()(o()().mark(function h(r,K){return o()().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return p.abrupt("return",(0,C.request)("/api/admin/consultations/".concat(r),m()({method:"DELETE",useCache:!1},K||{})));case 1:case"end":return p.stop()}},h)})),W.apply(this,arguments)}function i(h,r){return V.apply(this,arguments)}function V(){return V=a()(o()().mark(function h(r,K){return o()().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return p.abrupt("return",(0,C.request)("/api/admin/consultations/".concat(r,"/schedule"),m()({method:"GET",useCache:!1},K||{})));case 1:case"end":return p.stop()}},h)})),V.apply(this,arguments)}function oe(h,r,K){return S.apply(this,arguments)}function S(){return S=a()(o()().mark(function h(r,K,J){return o()().wrap(function(k){for(;;)switch(k.prev=k.next){case 0:return k.abrupt("return",(0,C.request)("/api/admin/consultations/change-term/".concat(r),m()({method:"POST",headers:{"Content-Type":"application/json"},data:{executed_at:K}},J||{})));case 1:case"end":return k.stop()}},h)})),S.apply(this,arguments)}},36309:function(re,B,e){e.d(B,{AK:function(){return v},XU:function(){return A},kB:function(){return n}});var L=e(15009),o=e.n(L),E=e(97857),m=e.n(E),Z=e(99289),a=e.n(Z),C=e(80854);function A(j,y){return l.apply(this,arguments)}function l(){return l=a()(o()().mark(function j(y,z){return o()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.abrupt("return",(0,C.request)("/api/model-fields",m()({method:"GET",params:y},z||{})));case 1:case"end":return i.stop()}},j)})),l.apply(this,arguments)}function n(j,y){return c.apply(this,arguments)}function c(){return c=a()(o()().mark(function j(y,z){return o()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.abrupt("return",(0,C.request)("/api/admin/model-fields",m()({method:"POST",data:y},z||{})));case 1:case"end":return i.stop()}},j)})),c.apply(this,arguments)}function v(j,y){return R.apply(this,arguments)}function R(){return R=a()(o()().mark(function j(y,z){return o()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.abrupt("return",(0,C.request)("/api/admin/model-fields",m()({method:"DELETE",data:y},z||{})));case 1:case"end":return i.stop()}},j)})),R.apply(this,arguments)}}}]);

//# sourceMappingURL=7036.fbe03ab3.async.js.map
"use strict";(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[9825],{51042:function(W,g,e){var p=e(1413),s=e(67294),o=e(42110),d=e(84089),C=function(M,P){return s.createElement(d.Z,(0,p.Z)((0,p.Z)({},M),{},{ref:P,icon:o.Z}))},t=s.forwardRef(C);g.Z=t},31199:function(W,g,e){var p=e(1413),s=e(45987),o=e(67294),d=e(41550),C=e(85893),t=["fieldProps","min","proFieldProps","max"],h=function(l,b){var O=l.fieldProps,T=l.min,j=l.proFieldProps,I=l.max,K=(0,s.Z)(l,t);return(0,C.jsx)(d.Z,(0,p.Z)({valueType:"digit",fieldProps:(0,p.Z)({min:T,max:I},O),ref:b,filedConfig:{defaultProps:{width:"100%"}},proFieldProps:j},K))},M=o.forwardRef(h);g.Z=M},16894:function(W,g,e){var p=e(72717);g.ZP=p.Z},48959:function(W,g,e){var p=e(28248),s=e(80854),o=e(85893),d=function(t){var h=t.open,M=t.onOk,P=t.onCancel,l=t.title,b=t.content,O=t.okText,T=t.loading;return(0,o.jsx)(p.Z,{width:"600px",title:l!=null?l:(0,o.jsx)(s.FormattedMessage,{id:"confirmModal.title"}),open:h,onOk:M,onCancel:P,okText:O!=null?O:(0,o.jsx)(s.FormattedMessage,{id:"save"}),cancelText:(0,o.jsx)(s.FormattedMessage,{id:"cancel"}),confirmLoading:T,children:b!=null?b:(0,o.jsx)("p",{children:(0,o.jsx)(s.FormattedMessage,{id:"confirmModal.content"})})})};g.Z=d},28225:function(W,g,e){var p=e(28248),s=e(80854),o=e(85893),d=function(t){var h=t.visible,M=t.setManage;return(0,o.jsx)(p.Z,{width:"600px",title:(0,o.jsx)(s.FormattedMessage,{id:"course.validate_edit.header",defaultMessage:"course.validate_edit.header"}),visible:h,onOk:function(){return M({showModal:!1,disableEdit:!1,clicked:!0})},onCancel:function(){return M({showModal:!1,disableEdit:!0,clicked:!1})},okText:"OK",cancelText:"Cancel",children:(0,o.jsx)("p",{children:(0,o.jsx)(s.FormattedMessage,{id:"course.validate_edit.content",defaultMessage:"course.validate_edit.content"})})})};g.Z=d},53957:function(W,g,e){var p=e(5574),s=e.n(p),o=e(50082),d=e(67294),C=e(85893),t=function(M){var P=M.productable,l=M.type,b=l===void 0?"card":l,O=(0,d.useState)("attributes"),T=s()(O,2),j=T[0],I=T[1];return(0,C.jsx)(o.Z,{productable:P,tab:j,onTabChange:function(L){return I(L)},type:b})};g.C=t},14408:function(W,g,e){e.d(g,{Z:function(){return h}});var p=e(97857),s=e.n(p),o=e(5574),d=e.n(o),C=e(2254),t=e(67294);function h(){var M=(0,t.useState)({showModal:!1,disableEdit:!1,clicked:!1}),P=d()(M,2),l=P[0],b=P[1],O=function(j){(j==null?void 0:j.status)==="published"&&j!==null&&j!==void 0&&j.active_from&&(0,C.C)(new Date(j==null?void 0:j.active_from))&&!l.clicked?b(s()(s()({},l),{},{showModal:!1,disableEdit:!0,clicked:!1})):b(s()(s()({},l),{},{showModal:!1,disableEdit:!1,clicked:!1}))};return{manageCourseEdit:l,setManageCourseEdit:b,validateCourseEdit:O}}},65482:function(W,g,e){e.r(g),e.d(g,{default:function(){return Me}});var p=e(52677),s=e.n(p),o=e(15009),d=e.n(o),C=e(97857),t=e.n(C),h=e(99289),M=e.n(h),P=e(5574),l=e.n(P),b=e(48959),O=e(28225),T=e(23535),j=e(53957),I=e(39470),K=e(44167),L=e(54434),z=e(19411),V=e(14408),m=e(32283),c=e(66419),_=e(26271),v=e(952),n=e(5966),N=e(64317),ee=e(1413),ne=e(45987),$=e(67294),ie=e(66758),oe=e(41550),a=e(85893),de=["fieldProps","proFieldProps"],ae="dateTime",le=$.forwardRef(function(A,x){var Y=A.fieldProps,f=A.proFieldProps,H=(0,ne.Z)(A,de),U=(0,$.useContext)(ie.Z);return(0,a.jsx)(oe.Z,(0,ee.Z)({ref:x,fieldProps:(0,ee.Z)({getPopupContainer:U.getPopupContainer},Y),valueType:ae,proFieldProps:f,filedConfig:{valueType:ae,customLightMode:!0}},H))}),te=le,ue=e(90672),me=e(74453),ce=e(2453),_e=e(75081),fe=e(38925),pe=e(14726),ve=e(71230),ge=e(15746),r=e(80854),y=function(A){return A.ATTRIBUTES="attributes",A.PRODUCT="product",A.MEDIA="media",A.TAGS="tags",A.BRANDING="branding",A.USER_SUBMISSION="user_submission",A}(y||{}),he=function(){var x=(0,r.useIntl)(),Y=(0,r.useParams)(),f=Y.webinar,H=Y.tab,U=H===void 0?y.ATTRIBUTES:H,S=f==="new",Ee=(0,$.useState)(),se=l()(Ee,2),i=se[0],J=se[1],X=(0,V.Z)(),u=X.manageCourseEdit,B=X.setManageCourseEdit,re=X.validateCourseEdit,Pe=v.ZP.useForm(),be=l()(Pe,1),k=be[0],je=(0,$.useCallback)(M()(d()().mark(function D(){var E,Z;return d()().wrap(function(R){for(;;)switch(R.prev=R.next){case 0:return R.next=2,(0,m.tz)(Number(f));case 2:E=R.sent,E.success&&(U===y.ATTRIBUTES&&re(E.data),J(t()(t()({},E.data),{},{tags:(Z=E.data.tags)===null||Z===void 0?void 0:Z.map(c.ZR)})));case 4:case"end":return R.stop()}},D)})),[f]);(0,$.useEffect)(function(){if(S){J({name:"new"});return}je()},[f]);var Q=(0,$.useMemo)(function(){return{onValuesChange:function(){B(t()(t()({},u),{},{valuesChanged:!0}))},onFinish:function(){var D=M()(d()().mark(function Z(G){var R,w;return d()().wrap(function(F){for(;;)switch(F.prev=F.next){case 0:if(!u.disableEdit){F.next=3;break}return B({showModal:!0,disableEdit:!0,clicked:!1}),F.abrupt("return");case 3:if(R=t()(t()({},G),{},{active_from:new Date(String(G.active_from))||(i==null?void 0:i.active_from)||null,active_to:new Date(String(G.active_to))||(i==null?void 0:i.active_to)||null,image_url:i==null?void 0:i.image_url,image_path:(i==null?void 0:i.image_url)&&(0,c.Ox)(i.image_url),logotype_url:i==null?void 0:i.logotype_url,logotype_path:(i==null?void 0:i.logotype_path)&&(0,c.Ox)(i.logotype_path),trainers:G.trainers&&G.trainers.map(function(q){return s()(q)==="object"?q.id:q})}),!S){F.next=11;break}return F.next=7,(0,m.ml)(R);case 7:w=F.sent,w.success&&r.history.push("/courses/webinars/".concat(w.data.id)),F.next=15;break;case 11:return F.next=13,(0,m.z5)(Number(f),R);case 13:w=F.sent,w.success&&(re(w.data),r.history.push("/courses/webinars/".concat(w.data.id,"/").concat(U)));case 15:ce.ZP.success(w.message),B(t()(t()({},u),{},{showConfirmModal:!1,loading:!1,valuesChanged:!1}));case 17:case"end":return F.stop()}},Z)}));function E(Z){return D.apply(this,arguments)}return E}(),initialValues:i,form:k}},[i,f,U,u,k]);return i?(0,a.jsxs)(me._z,{title:S?(0,a.jsx)(r.FormattedMessage,{id:"menu.Webinars"}):(0,a.jsx)(r.FormattedMessage,{id:"webinar.edit"}),header:{breadcrumb:{routes:[{path:"webinars",breadcrumbName:x.formatMessage({id:"menu.Webinars"})},{path:String(f),breadcrumbName:x.formatMessage({id:"form"})},{path:"/",breadcrumbName:x.formatMessage({id:String(i.name)})},{path:String(U),breadcrumbName:x.formatMessage({id:String(U)})}]}},children:[(0,a.jsxs)(_.ZP,{tabs:{type:"card",activeKey:U,onChange:function(E){E!==y.ATTRIBUTES&&u.valuesChanged?B(t()(t()({},u),{},{showConfirmModal:!0})):r.history.push("/courses/webinars/".concat(f,"/").concat(E))}},children:[(0,a.jsxs)(_.ZP.TabPane,{tab:(0,a.jsx)(r.FormattedMessage,{id:"attributes"}),children:[u.disableEdit&&(0,a.jsx)(fe.Z,{closable:!0,style:{marginBottom:"20px"},type:"warning",message:(0,a.jsx)(r.FormattedMessage,{id:"course_edit_warning_message",defaultMessage:"course_edit_warning_message"}),action:(0,a.jsx)(pe.ZP,{onClick:function(){return B({showModal:!0,disableEdit:!0,clicked:!0})},type:"primary",children:(0,a.jsx)(r.FormattedMessage,{id:"questionnaire.submit",defaultMessage:"questionnaire.submit"})})}),(0,a.jsx)(O.Z,{visible:u.showModal,setManage:B}),(0,a.jsxs)(v.ZP,t()(t()({},Q),{},{children:[(0,a.jsxs)(v.ZP.Group,{children:[(0,a.jsx)(n.Z,{width:"md",name:"name",label:(0,a.jsx)(r.FormattedMessage,{id:"name"}),tooltip:(0,a.jsx)(r.FormattedMessage,{id:"name"}),placeholder:x.formatMessage({id:"name",defaultMessage:"name"}),required:!0,disabled:u.disableEdit}),(0,a.jsx)(n.Z,{width:"sm",name:"duration",label:(0,a.jsx)(r.FormattedMessage,{id:"duration_freemode"}),tooltip:(0,a.jsx)(r.FormattedMessage,{id:"duration_freemode_description"}),placeholder:x.formatMessage({id:"duration_freemode",defaultMessage:"duration_freemode"}),disabled:u.disableEdit}),(0,a.jsx)(N.Z,{name:"status",width:"sm",label:(0,a.jsx)(r.FormattedMessage,{id:"status"}),valueEnum:{draft:x.formatMessage({id:"draft",defaultMessage:"draft"}),published:x.formatMessage({id:"published",defaultMessage:"published"}),archived:x.formatMessage({id:"archived",defaultMessage:"archived"})},initialValue:{draft:x.formatMessage({id:"draft",defaultMessage:"draft"})},placeholder:x.formatMessage({id:"status"}),rules:[{required:!0,message:(0,a.jsx)(r.FormattedMessage,{id:"select"})}],disabled:u.disableEdit})]}),(0,a.jsxs)(v.ZP.Group,{children:[(0,a.jsx)(te,{width:"sm",name:"active_from",label:(0,a.jsx)(r.FormattedMessage,{id:"active_from"}),tooltip:(0,a.jsx)(r.FormattedMessage,{id:"active_from"}),placeholder:x.formatMessage({id:"active_from",defaultMessage:"active_from"}),disabled:u.disableEdit}),(0,a.jsx)(te,{width:"sm",name:"active_to",label:(0,a.jsx)(r.FormattedMessage,{id:"active_to"}),tooltip:(0,a.jsx)(r.FormattedMessage,{id:"active_to"}),placeholder:x.formatMessage({id:"active_to",defaultMessage:"active_to"}),disabled:u.disableEdit}),(0,a.jsx)(v.ZP.Item,{name:"trainers",label:(0,a.jsx)(r.FormattedMessage,{id:"tutor"}),valuePropName:"value",children:(0,a.jsx)(K.Z,{multiple:!0})})]}),(0,a.jsx)(v.ZP.Group,{children:(0,a.jsx)(ue.Z,{name:"short_desc",label:(0,a.jsx)(r.FormattedMessage,{id:"short_description"}),tooltip:(0,a.jsx)(r.FormattedMessage,{id:"short_description"}),width:"lg"})}),(0,a.jsx)(v.ZP.Item,{name:"agenda",label:(0,a.jsx)(r.FormattedMessage,{id:"program"}),tooltip:(0,a.jsx)(r.FormattedMessage,{id:"program"}),valuePropName:"value",children:(0,a.jsx)(z.ZP,{directory:"webinars/".concat(f,"/wysiwyg")})}),(0,a.jsx)(v.ZP.Item,{name:"description",label:(0,a.jsx)(r.FormattedMessage,{id:"description"}),tooltip:(0,a.jsx)(r.FormattedMessage,{id:"description_tooltip"}),valuePropName:"value",children:(0,a.jsx)(z.ZP,{directory:"webinars/".concat(f,"/wysiwyg")})})]}))]},y.ATTRIBUTES)," ",!S&&(0,a.jsx)(_.ZP.TabPane,{tab:(0,a.jsx)(r.FormattedMessage,{id:"product"}),disabled:u.disableEdit,children:f&&(0,a.jsx)(j.C,{productable:{class_type:"App\\Models\\Webinar",class_id:f,name:String(i.name),quantity:1}})},y.PRODUCT),!S&&(0,a.jsx)(_.ZP.TabPane,{tab:(0,a.jsx)(r.FormattedMessage,{id:"media"}),disabled:u.disableEdit,children:(0,a.jsx)(v.ZP,t()(t()({},Q),{},{children:(0,a.jsx)(T.Z,{folder:"webinar/".concat(f),title:"image",action:"/api/admin/webinars/".concat(f),src_name:"image_url",form_name:"image",getUploadedSrcField:function(E){return E.file.response.data.image_url},setPath:function(E){return J(function(Z){return t()(t()({},Z),E)})}})}))},y.MEDIA),!S&&(0,a.jsx)(_.ZP.TabPane,{tab:(0,a.jsx)(r.FormattedMessage,{id:"tags"}),disabled:u.disableEdit,children:(0,a.jsx)(ve.Z,{children:(0,a.jsx)(ge.Z,{span:12,children:(0,a.jsx)(v.ZP,t()(t()({},Q),{},{children:(0,a.jsx)(v.ZP.Item,{label:(0,a.jsx)(r.FormattedMessage,{id:"tags"}),name:"tags",valuePropName:"value",children:(0,a.jsx)(I.Z,{})})}))})})},y.TAGS)," ",!S&&(0,a.jsx)(_.ZP.TabPane,{tab:(0,a.jsx)(r.FormattedMessage,{id:"branding"}),disabled:u.disableEdit,children:(0,a.jsx)(v.ZP,t()(t()({},Q),{},{children:(0,a.jsx)(T.Z,{folder:"webinar/".concat(f),title:"logotype",action:"/api/admin/webinars/".concat(f),src_name:"logotype_url",form_name:"logotype",getUploadedSrcField:function(E){return E.file.response.data.logotype_url},setPath:function(E){return J(function(Z){return t()(t()({},Z),E)})}})}))},y.BRANDING)," ",!S&&(0,a.jsx)(_.ZP.TabPane,{tab:(0,a.jsx)(r.FormattedMessage,{id:"user_submission"}),disabled:u.disableEdit,children:f&&(0,a.jsx)(L.ZP,{id:Number(f),type:"App\\Models\\Webinar"})},y.USER_SUBMISSION)]}),(0,a.jsx)(b.Z,{open:!!u.showConfirmModal,onOk:function(){B(t()(t()({},u),{},{loading:!0})),k.submit()},onCancel:function(){B(t()(t()({},u),{},{showConfirmModal:!1}))},loading:!!u.loading})]}):(0,a.jsx)(_e.Z,{})},Me=he},32283:function(W,g,e){e.d(g,{NA:function(){return K},VY:function(){return z},i5:function(){return M},ml:function(){return l},tz:function(){return O},z5:function(){return j}});var p=e(15009),s=e.n(p),o=e(97857),d=e.n(o),C=e(99289),t=e.n(C),h=e(80854);function M(m,c){return P.apply(this,arguments)}function P(){return P=t()(s()().mark(function m(c,_){return s()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",(0,h.request)("/api/admin/webinars",d()({method:"GET",useCache:!1,params:c},_||{})));case 1:case"end":return n.stop()}},m)})),P.apply(this,arguments)}function l(m,c){return b.apply(this,arguments)}function b(){return b=t()(s()().mark(function m(c,_){return s()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",(0,h.request)("/api/admin/webinars",d()({method:"POST",headers:{"Content-Type":"application/json"},data:c},_||{})));case 1:case"end":return n.stop()}},m)})),b.apply(this,arguments)}function O(m,c){return T.apply(this,arguments)}function T(){return T=t()(s()().mark(function m(c,_){return s()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",(0,h.request)("/api/admin/webinars/".concat(c),d()({method:"GET",useCache:!1},_||{})));case 1:case"end":return n.stop()}},m)})),T.apply(this,arguments)}function j(m,c,_){return I.apply(this,arguments)}function I(){return I=t()(s()().mark(function m(c,_,v){return s()().wrap(function(N){for(;;)switch(N.prev=N.next){case 0:return N.abrupt("return",(0,h.request)("/api/admin/webinars/".concat(c,"?method=PUT"),d()({method:"POST",headers:{"Content-Type":"application/json"},data:_},v||{})));case 1:case"end":return N.stop()}},m)})),I.apply(this,arguments)}function K(m,c){return L.apply(this,arguments)}function L(){return L=t()(s()().mark(function m(c,_){return s()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",(0,h.request)("/api/admin/webinars/".concat(c),d()({method:"DELETE",useCache:!1},_||{})));case 1:case"end":return n.stop()}},m)})),L.apply(this,arguments)}function z(m,c){return V.apply(this,arguments)}function V(){return V=t()(s()().mark(function m(c,_){return s()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",(0,h.request)("/api/admin/g-token/generate",d()({method:"POST",headers:{"Content-Type":"application/json"},data:c},_||{})));case 1:case"end":return n.stop()}},m)})),V.apply(this,arguments)}}}]);

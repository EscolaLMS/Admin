(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{"4f6N":function(V,p,e){"use strict";var l=e("2qtc"),v=e("kLXV"),i=e("9kvl"),f=e("nKUr"),E=e.n(f),M=function(O){var m=O.visible,P=O.setManage;return Object(f.jsx)(v.a,{width:"600px",title:Object(f.jsx)(i.a,{id:"course.validate_edit.header",defaultMessage:"course.validate_edit.header"}),visible:m,onOk:function(){return P({showModal:!1,disableEdit:!1,clicked:!0})},onCancel:function(){return P({showModal:!1,disableEdit:!0,clicked:!1})},okText:"OK",cancelText:"Cancel",children:Object(f.jsx)("p",{children:Object(f.jsx)(i.a,{id:"course.validate_edit.content",defaultMessage:"course.validate_edit.content"})})})};p.a=M},"5qq5":function(V,p,e){"use strict";var l=e("7Kak"),v=e("9yH6"),i=e("VTBJ"),f=e("Ff2n"),E=e("nKUr"),M=e.n(E),x=e("uX+g"),O=e("q1tI"),m=e.n(O),P=e("WFLz"),n=e("adzw"),C=["fieldProps","options","radioType","layout","proFieldProps","valueEnum"],g=m.a.forwardRef(function(r,U){var j=r.fieldProps,A=r.options,N=r.radioType,K=r.layout,J=r.proFieldProps,a=r.valueEnum,G=Object(f.a)(r,C);return Object(E.jsx)(n.a,Object(i.a)(Object(i.a)({valueType:N==="button"?"radioButton":"radio",ref:U,valueEnum:Object(x.a)(a,void 0)},G),{},{fieldProps:Object(i.a)({options:A,layout:K},j),proFieldProps:J,filedConfig:{customLightMode:!0}}))}),t=m.a.forwardRef(function(r,U){var j=r.fieldProps,A=r.children;return Object(E.jsx)(v.a,Object(i.a)(Object(i.a)({},j),{},{ref:U,children:A}))}),T=Object(P.a)(t,{valuePropName:"checked",ignoreWidth:!0}),h=T;h.Group=g,h.Button=v.a.Button,h.displayName="ProFormComponent",p.a=h},BiO0:function(V,p,e){"use strict";var l=e("VTBJ"),v=e("Ff2n"),i=e("nKUr"),f=e.n(i),E=e("q1tI"),M=e.n(E),x=e("adzw"),O=["fieldProps","proFieldProps"],m=function(n,C){var g=n.fieldProps,t=n.proFieldProps,T=Object(v.a)(n,O);return Object(i.jsx)(x.a,Object(l.a)({ref:C,valueType:"textarea",fieldProps:g,proFieldProps:t},T))};p.a=M.a.forwardRef(m)},FJDo:function(V,p,e){"use strict";var l=e("VTBJ"),v=e("Ff2n"),i=e("nKUr"),f=e.n(i),E=e("q1tI"),M=e.n(E),x=e("adzw"),O=["fieldProps","min","proFieldProps","max"],m=function(n,C){var g=n.fieldProps,t=n.min,T=n.proFieldProps,h=n.max,r=Object(v.a)(n,O);return Object(i.jsx)(x.a,Object(l.a)({valueType:"digit",fieldProps:Object(l.a)({min:t,max:h},g),ref:C,filedConfig:{defaultProps:{width:"100%"}},proFieldProps:T},r))};p.a=M.a.forwardRef(m)},eFHa:function(V,p,e){"use strict";e.d(p,"a",function(){return x});var l=e("k1fw"),v=e("tJVT"),i=e("q1tI"),f=e("/Tr7"),E=e("jIYg");function M(O){return Object(E.a)(1,arguments),Object(f.a)(O).getTime()<Date.now()}function x(){var O=Object(i.useState)({showModal:!1,disableEdit:!1,clicked:!1}),m=Object(v.a)(O,2),P=m[0],n=m[1],C=function(t){(t==null?void 0:t.status)==="published"&&t!==null&&t!==void 0&&t.active_from&&M(new Date(t==null?void 0:t.active_from))&&!P.clicked?n(Object(l.a)(Object(l.a)({},P),{},{showModal:!1,disableEdit:!0,clicked:!1})):n(Object(l.a)(Object(l.a)({},P),{},{showModal:!1,disableEdit:!1,clicked:!1}))};return{manageCourseEdit:P,setManageCourseEdit:n,validateCourseEdit:C}}},q34N:function(V,p,e){"use strict";var l=e("tJVT"),v=e("0eZe"),i=e("q1tI"),f=e.n(i),E=e("nKUr"),M=e.n(E),x=function(m){var P=m.productable,n=m.type,C=n===void 0?"card":n,g=Object(i.useState)("attributes"),t=Object(l.a)(g,2),T=t[0],h=t[1];return Object(E.jsx)(v.a,{productable:P,tab:T,onTabChange:function(U){return h(U)},type:C})};p.a=x},tixb:function(V,p,e){"use strict";e.r(p);var l=e("14J3"),v=e("BMrR"),i=e("jCWc"),f=e("kPKH"),E=e("fOrg"),M=e("+KLJ"),x=e("+L6B"),O=e("2/Rp"),m=e("T2oS"),P=e("W9HT"),n=e("miYZ"),C=e("tsqr"),g=e("qLMh"),t=e("k1fw"),T=e("9og8"),h=e("tJVT"),r=e("q1tI"),U=e.n(r),j=e("VMEa"),A=e("Qurx"),N=e("yj/a"),K=e("VTBJ"),J=e("Ff2n"),a=e("nKUr"),G=e("lS/g"),Z=e("adzw"),Q=["fieldProps","proFieldProps"],z="dateTime",w=U.a.forwardRef(function(D,d){var H=D.fieldProps,c=D.proFieldProps,X=Object(J.a)(D,Q),F=Object(r.useContext)(G.b);return Object(a.jsx)(Z.a,Object(K.a)({ref:d,fieldProps:Object(K.a)({getPopupContainer:F.getPopupContainer},H),valueType:z,proFieldProps:c,filedConfig:{valueType:z,customLightMode:!0}},X))}),ne=w,ue=e("BiO0"),$=e("nhC9"),de=e("hd5d"),je=e("tMyG"),o=e("9kvl"),Oe=e("Ty5D"),te=e("EmS3"),me=e("0WSk"),le=e("Gn8c"),re=e("c+yx"),be=e("rnuo"),ve=e("eFHa"),Ee=e("4f6N"),Pe=e("q34N"),pe=e("5RzD"),De=e("2qtc"),fe=e("kLXV"),Me=function(d){var H=d.open,c=d.onOk,X=d.onCancel,F=d.title,I=d.content,k=d.okText,q=d.loading;return Object(a.jsx)(fe.a,{width:"600px",title:F!=null?F:Object(a.jsx)(o.a,{id:"confirmModal.title"}),open:H,onOk:c,onCancel:X,okText:k!=null?k:Object(a.jsx)(o.a,{id:"save"}),cancelText:Object(a.jsx)(o.a,{id:"cancel"}),confirmLoading:q,children:I!=null?I:Object(a.jsx)("p",{children:Object(a.jsx)(o.a,{id:"confirmModal.content"})})})},ge=Me,W;(function(D){D.ATTRIBUTES="attributes",D.PRODUCT="product",D.MEDIA="media",D.TAGS="tags",D.BRANDING="branding",D.USER_SUBMISSION="user_submission"})(W||(W={}));var he=function(){var d=Object(o.l)(),H=Object(Oe.l)(),c=H.webinar,X=H.tab,F=X===void 0?W.ATTRIBUTES:X,I=c==="new",k=Object(r.useState)(),q=Object(h.a)(k,2),s=q[0],ee=q[1],oe=Object(ve.a)(),u=oe.manageCourseEdit,L=oe.setManageCourseEdit,ce=oe.validateCourseEdit,xe=j.a.useForm(),Ce=Object(h.a)(xe,1),se=Ce[0],Te=Object(r.useCallback)(Object(T.a)(Object(g.a)().mark(function R(){var b,B;return Object(g.a)().wrap(function(S){for(;;)switch(S.prev=S.next){case 0:return S.next=2,Object(te.d)(Number(c));case 2:b=S.sent,b.success&&(F===W.ATTRIBUTES&&ce(b.data),ee(Object(t.a)(Object(t.a)({},b.data),{},{tags:(B=b.data.tags)===null||B===void 0?void 0:B.map(re.k)})));case 4:case"end":return S.stop()}},R)})),[c]);Object(r.useEffect)(function(){if(I){ee({name:"new"});return}Te()},[c]);var ae=Object(r.useMemo)(function(){return{onValuesChange:function(){L(Object(t.a)(Object(t.a)({},u),{},{valuesChanged:!0}))},onFinish:function(){var R=Object(T.a)(Object(g.a)().mark(function B(Y){var S,_;return Object(g.a)().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:if(!u.disableEdit){y.next=3;break}return L({showModal:!0,disableEdit:!0,clicked:!1}),y.abrupt("return");case 3:if(S=Object(t.a)(Object(t.a)({},Y),{},{active_from:new Date(String(Y.active_from))||(s==null?void 0:s.active_from)||null,active_to:new Date(String(Y.active_to))||(s==null?void 0:s.active_to)||null,image_url:s==null?void 0:s.image_url,image_path:(s==null?void 0:s.image_url)&&Object(re.j)(s.image_url),logotype_url:s==null?void 0:s.logotype_url,logotype_path:(s==null?void 0:s.logotype_path)&&Object(re.j)(s.logotype_path),trainers:Y.trainers&&Y.trainers.map(function(ie){return typeof ie=="object"?ie.id:ie})}),!I){y.next=11;break}return y.next=7,Object(te.a)(S);case 7:_=y.sent,_.success&&o.f.push("/courses/webinars/".concat(_.data.id)),y.next=15;break;case 11:return y.next=13,Object(te.e)(Number(c),S);case 13:_=y.sent,_.success&&(ce(_.data),o.f.push("/courses/webinars/".concat(_.data.id,"/").concat(F)));case 15:C.b.success(_.message),L(Object(t.a)(Object(t.a)({},u),{},{showConfirmModal:!1,loading:!1}));case 17:case"end":return y.stop()}},B)}));function b(B){return R.apply(this,arguments)}return b}(),initialValues:s,form:se}},[s,c,F,u,se]);return s?Object(a.jsxs)(je.a,{title:I?Object(a.jsx)(o.a,{id:"menu.Webinars"}):Object(a.jsx)(o.a,{id:"webinar.edit"}),header:{breadcrumb:{routes:[{path:"webinars",breadcrumbName:d.formatMessage({id:"menu.Webinars"})},{path:String(c),breadcrumbName:d.formatMessage({id:"form"})},{path:"/",breadcrumbName:d.formatMessage({id:String(s.name)})},{path:String(F),breadcrumbName:d.formatMessage({id:String(F)})}]}},children:[Object(a.jsxs)($.a,{tabs:{type:"card",activeKey:F,onChange:function(b){b===W.PRODUCT&&u.valuesChanged?L(Object(t.a)(Object(t.a)({},u),{},{showConfirmModal:!0})):o.f.push("/courses/webinars/".concat(c,"/").concat(b))}},children:[Object(a.jsxs)($.a.TabPane,{tab:Object(a.jsx)(o.a,{id:"attributes"}),children:[u.disableEdit&&Object(a.jsx)(M.a,{closable:!0,style:{marginBottom:"20px"},type:"warning",message:Object(a.jsx)(o.a,{id:"course_edit_warning_message",defaultMessage:"course_edit_warning_message"}),action:Object(a.jsx)(O.a,{onClick:function(){return L({showModal:!0,disableEdit:!0,clicked:!0})},type:"primary",children:Object(a.jsx)(o.a,{id:"questionnaire.submit",defaultMessage:"questionnaire.submit"})})}),Object(a.jsx)(Ee.a,{visible:u.showModal,setManage:L}),Object(a.jsxs)(j.a,Object(t.a)(Object(t.a)({},ae),{},{children:[Object(a.jsxs)(j.a.Group,{children:[Object(a.jsx)(A.a,{width:"md",name:"name",label:Object(a.jsx)(o.a,{id:"name"}),tooltip:Object(a.jsx)(o.a,{id:"name"}),placeholder:d.formatMessage({id:"name",defaultMessage:"name"}),required:!0,disabled:u.disableEdit}),Object(a.jsx)(A.a,{width:"sm",name:"duration",label:Object(a.jsx)(o.a,{id:"duration_freemode"}),tooltip:Object(a.jsx)(o.a,{id:"duration_freemode_description"}),placeholder:d.formatMessage({id:"duration_freemode",defaultMessage:"duration_freemode"}),disabled:u.disableEdit}),Object(a.jsx)(N.a,{name:"status",width:"sm",label:Object(a.jsx)(o.a,{id:"status"}),valueEnum:{draft:d.formatMessage({id:"draft",defaultMessage:"draft"}),published:d.formatMessage({id:"published",defaultMessage:"published"}),archived:d.formatMessage({id:"archived",defaultMessage:"archived"})},initialValue:{draft:d.formatMessage({id:"draft",defaultMessage:"draft"})},placeholder:d.formatMessage({id:"status"}),rules:[{required:!0,message:Object(a.jsx)(o.a,{id:"select"})}],disabled:u.disableEdit})]}),Object(a.jsxs)(j.a.Group,{children:[Object(a.jsx)(ne,{width:"sm",name:"active_from",label:Object(a.jsx)(o.a,{id:"active_from"}),tooltip:Object(a.jsx)(o.a,{id:"active_from"}),placeholder:d.formatMessage({id:"active_from",defaultMessage:"active_from"}),disabled:u.disableEdit}),Object(a.jsx)(ne,{width:"sm",name:"active_to",label:Object(a.jsx)(o.a,{id:"active_to"}),tooltip:Object(a.jsx)(o.a,{id:"active_to"}),placeholder:d.formatMessage({id:"active_to",defaultMessage:"active_to"}),disabled:u.disableEdit}),Object(a.jsx)(j.a.Item,{name:"trainers",label:Object(a.jsx)(o.a,{id:"tutor"}),valuePropName:"value",children:Object(a.jsx)(me.a,{multiple:!0})})]}),Object(a.jsx)(j.a.Group,{children:Object(a.jsx)(ue.a,{name:"short_desc",label:Object(a.jsx)(o.a,{id:"short_description"}),tooltip:Object(a.jsx)(o.a,{id:"short_description"}),width:"lg"})}),Object(a.jsx)(j.a.Item,{name:"agenda",label:Object(a.jsx)(o.a,{id:"program"}),tooltip:Object(a.jsx)(o.a,{id:"program"}),valuePropName:"value",children:Object(a.jsx)(de.a,{directory:"webinars/".concat(c,"/wysiwyg")})}),Object(a.jsx)(j.a.Item,{name:"description",label:Object(a.jsx)(o.a,{id:"description"}),tooltip:Object(a.jsx)(o.a,{id:"description_tooltip"}),valuePropName:"value",children:Object(a.jsx)(de.a,{directory:"webinars/".concat(c,"/wysiwyg")})})]}))]},W.ATTRIBUTES)," ",!I&&Object(a.jsx)($.a.TabPane,{tab:Object(a.jsx)(o.a,{id:"product"}),disabled:u.disableEdit,children:c&&Object(a.jsx)(Pe.a,{productable:{class_type:"App\\Models\\Webinar",class_id:c,name:String(s.name),quantity:1}})},W.PRODUCT),!I&&Object(a.jsx)($.a.TabPane,{tab:Object(a.jsx)(o.a,{id:"media"}),disabled:u.disableEdit,children:Object(a.jsx)(j.a,Object(t.a)(Object(t.a)({},ae),{},{children:Object(a.jsx)(le.a,{folder:"webinar/".concat(c),title:"image",action:"/api/admin/webinars/".concat(c),src_name:"image_url",form_name:"image",getUploadedSrcField:function(b){return b.file.response.data.image_url},setPath:function(b){return ee(function(B){return Object(t.a)(Object(t.a)({},B),b)})}})}))},W.MEDIA),!I&&Object(a.jsx)($.a.TabPane,{tab:Object(a.jsx)(o.a,{id:"tags"}),disabled:u.disableEdit,children:Object(a.jsx)(v.a,{children:Object(a.jsx)(f.a,{span:12,children:Object(a.jsx)(j.a,Object(t.a)(Object(t.a)({},ae),{},{children:Object(a.jsx)(j.a.Item,{label:Object(a.jsx)(o.a,{id:"tags"}),name:"tags",valuePropName:"value",children:Object(a.jsx)(be.a,{})})}))})})},W.TAGS)," ",!I&&Object(a.jsx)($.a.TabPane,{tab:Object(a.jsx)(o.a,{id:"branding"}),disabled:u.disableEdit,children:Object(a.jsx)(j.a,Object(t.a)(Object(t.a)({},ae),{},{children:Object(a.jsx)(le.a,{folder:"webinar/".concat(c),title:"logotype",action:"/api/admin/webinars/".concat(c),src_name:"logotype_url",form_name:"logotype",getUploadedSrcField:function(b){return b.file.response.data.logotype_url},setPath:function(b){return ee(function(B){return Object(t.a)(Object(t.a)({},B),b)})}})}))},W.BRANDING)," ",!I&&Object(a.jsx)($.a.TabPane,{tab:Object(a.jsx)(o.a,{id:"user_submission"}),disabled:u.disableEdit,children:c&&Object(a.jsx)(pe.a,{id:Number(c),type:"App\\Models\\Webinar"})},W.USER_SUBMISSION)]}),Object(a.jsx)(ge,{open:!!u.showConfirmModal,onOk:function(){L(Object(t.a)(Object(t.a)({},u),{},{loading:!0})),se.submit()},onCancel:function(){L(Object(t.a)(Object(t.a)({},u),{},{showConfirmModal:!1}))},loading:!!u.loading})]}):Object(a.jsx)(P.a,{})},Fe=p.default=he},"yj/a":function(V,p,e){"use strict";var l=e("VTBJ"),v=e("Ff2n"),i=e("nKUr"),f=e.n(i),E=e("uX+g"),M=e("q1tI"),x=e.n(M),O=e("lS/g"),m=e("adzw"),P=["fieldProps","children","params","proFieldProps","mode","valueEnum","request","showSearch","options"],n=["fieldProps","children","params","proFieldProps","mode","valueEnum","request","options"],C=x.a.forwardRef(function(r,U){var j=r.fieldProps,A=r.children,N=r.params,K=r.proFieldProps,J=r.mode,a=r.valueEnum,G=r.request,Z=r.showSearch,Q=r.options,z=Object(v.a)(r,P),w=Object(M.useContext)(O.b);return Object(i.jsx)(m.a,Object(l.a)(Object(l.a)({valueEnum:Object(E.a)(a),request:G,params:N,valueType:"select",filedConfig:{customLightMode:!0},fieldProps:Object(l.a)({options:Q,mode:J,showSearch:Z,getPopupContainer:w.getPopupContainer},j),ref:U,proFieldProps:K},z),{},{children:A}))}),g=x.a.forwardRef(function(r,U){var j=r.fieldProps,A=r.children,N=r.params,K=r.proFieldProps,J=r.mode,a=r.valueEnum,G=r.request,Z=r.options,Q=Object(v.a)(r,n),z=Object(l.a)({options:Z,mode:J||"multiple",labelInValue:!0,showSearch:!0,showArrow:!1,autoClearSearchValue:!0,optionLabelProp:"label"},j),w=Object(M.useContext)(O.b);return Object(i.jsx)(m.a,Object(l.a)(Object(l.a)({valueEnum:Object(E.a)(a),request:G,params:N,valueType:"select",filedConfig:{customLightMode:!0},fieldProps:Object(l.a)({getPopupContainer:w.getPopupContainer},z),ref:U,proFieldProps:K},Q),{},{children:A}))}),t=C,T=g,h=t;h.SearchSelect=T,h.displayName="ProFormComponent",p.a=h}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{"4f6N":function(y,l,e){"use strict";var d=e("2qtc"),_=e("kLXV"),f=e("9kvl"),i=e("nKUr"),M=e.n(i),W=function(v){var O=v.visible,g=v.setManage;return Object(i.jsx)(_.a,{width:"600px",title:Object(i.jsx)(f.a,{id:"course.validate_edit.header",defaultMessage:"course.validate_edit.header"}),visible:O,onOk:function(){return g({showModal:!1,disableEdit:!1,clicked:!0})},onCancel:function(){return g({showModal:!1,disableEdit:!0,clicked:!1})},okText:"OK",cancelText:"Cancel",children:Object(i.jsx)("p",{children:Object(i.jsx)(f.a,{id:"course.validate_edit.content",defaultMessage:"course.validate_edit.content"})})})};l.a=W},EmS3:function(y,l,e){"use strict";e.d(l,"e",function(){return W}),e.d(l,"a",function(){return v}),e.d(l,"c",function(){return g}),e.d(l,"d",function(){return b}),e.d(l,"b",function(){return K});var d=e("k1fw"),_=e("9og8"),f=e("WmNS"),i=e.n(f),M=e("9kvl");function W(c,r){return P.apply(this,arguments)}function P(){return P=Object(_.a)(i.a.mark(function c(r,o){return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",Object(M.f)("/api/admin/webinars",Object(d.a)({method:"GET",useCache:!1,params:Object(d.a)(Object(d.a)({},r),{},{per_page:r&&r.pageSize,page:r&&r.current})},o||{})));case 1:case"end":return t.stop()}},c)})),P.apply(this,arguments)}function v(c,r){return O.apply(this,arguments)}function O(){return O=Object(_.a)(i.a.mark(function c(r,o){return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",Object(M.f)("/api/admin/webinars",Object(d.a)({method:"POST",headers:{"Content-Type":"application/json"},data:r},o||{})));case 1:case"end":return t.stop()}},c)})),O.apply(this,arguments)}function g(c,r){return C.apply(this,arguments)}function C(){return C=Object(_.a)(i.a.mark(function c(r,o){return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",Object(M.f)("/api/admin/webinars/".concat(r),Object(d.a)({method:"GET",useCache:!1},o||{})));case 1:case"end":return t.stop()}},c)})),C.apply(this,arguments)}function b(c,r,o){return s.apply(this,arguments)}function s(){return s=Object(_.a)(i.a.mark(function c(r,o,S){return i.a.wrap(function(L){for(;;)switch(L.prev=L.next){case 0:return L.abrupt("return",Object(M.f)("/api/admin/webinars/".concat(r,"?method=PUT"),Object(d.a)({method:"POST",headers:{"Content-Type":"application/json"},data:o},S||{})));case 1:case"end":return L.stop()}},c)})),s.apply(this,arguments)}function K(c,r){return x.apply(this,arguments)}function x(){return x=Object(_.a)(i.a.mark(function c(r,o){return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",Object(M.f)("/api/admin/webinars/".concat(r),Object(d.a)({method:"DELETE",useCache:!1},o||{})));case 1:case"end":return t.stop()}},c)})),x.apply(this,arguments)}},VlvL:function(y,l,e){"use strict";var d=e("9kvl"),_=e("Ty5D"),f=e("nKUr"),i=e.n(f),M=function(P){var v=P.show,O=Object(d.i)();return Object(f.jsx)(_.a,{when:v,message:O.formatMessage({id:"unsaved_changes"})})};l.a=M},eFHa:function(y,l,e){"use strict";e.d(l,"a",function(){return M});var d=e("tJVT"),_=e("q1tI"),f=e.n(_),i=e("HZtn");function M(){var W=Object(_.useState)({showModal:!1,disableEdit:!1,clicked:!1}),P=Object(d.a)(W,2),v=P[0],O=P[1],g=function(b){(b==null?void 0:b.status)==="published"&&b!==null&&b!==void 0&&b.active_from&&Object(i.a)(new Date(b==null?void 0:b.active_from))&&!v.clicked?O({showModal:!1,disableEdit:!0,clicked:!1}):O({showModal:!1,disableEdit:!1,clicked:!1})};return{manageCourseEdit:v,setManageCourseEdit:O,validateCourseEdit:g}}},q34N:function(y,l,e){"use strict";var d=e("tJVT"),_=e("0eZe"),f=e("q1tI"),i=e.n(f),M=e("nKUr"),W=e.n(M),P=function(O){var g=O.productable,C=O.type,b=C===void 0?"card":C,s=Object(f.useState)("attributes"),K=Object(d.a)(s,2),x=K[0],c=K[1];return Object(M.jsx)(_.a,{productable:g,tab:x,onTabChange:function(o){return c(o)},type:b})};l.a=P},tixb:function(y,l,e){"use strict";e.r(l);var d=e("14J3"),_=e("BMrR"),f=e("jCWc"),i=e("kPKH"),M=e("fOrg"),W=e("+KLJ"),P=e("+L6B"),v=e("2/Rp"),O=e("T2oS"),g=e("W9HT"),C=e("miYZ"),b=e("tsqr"),s=e("k1fw"),K=e("9og8"),x=e("tJVT"),c=e("WmNS"),r=e.n(c),o=e("q1tI"),S=e.n(o),t=e("VMEa"),L=e("Qurx"),ne=e("FJDo"),se=e("yj/a"),Z=e("CnWR"),re=e("BiO0"),B=e("nhC9"),z=e("hd5d"),ie=e("tMyG"),n=e("9kvl"),_e=e("Ty5D"),N=e("EmS3"),de=e("0WSk"),Q=e("Gn8c"),X=e("c+yx"),oe=e("rnuo"),le=e("VlvL"),Y=e("viv7"),ce=e("eFHa"),ue=e("4f6N"),me=e("q34N"),Oe=e("5RzD"),a=e("nKUr"),pe=e.n(a),be=function(){var T=Object(n.i)(),k=Object(_e.h)(),u=k.webinar,q=k.tab,h=q===void 0?"attributes":q,U=u==="new",je=Object(o.useState)(!1),ee=Object(x.a)(je,2),Ee=ee[0],V=ee[1],Me=Object(o.useState)(),ae=Object(x.a)(Me,2),j=ae[0],w=ae[1],G=Object(ce.a)(),E=G.manageCourseEdit,$=G.setManageCourseEdit,te=G.validateCourseEdit,fe=t.a.useForm(),Pe=Object(x.a)(fe,1),ve=Pe[0],he=Object(o.useCallback)(Object(K.a)(r.a.mark(function A(){var m;return r.a.wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return p.next=2,Object(N.c)(Number(u));case 2:m=p.sent,m.success&&(h==="attributes"&&te(m.data),w(Object(s.a)({},m.data)));case 4:case"end":return p.stop()}},A)})),[u]);Object(o.useEffect)(function(){if(U){w({name:"new"});return}he()},[u]);var F=Object(o.useMemo)(function(){return{onFinish:function(){var A=Object(K.a)(r.a.mark(function R(p){var J,I;return r.a.wrap(function(D){for(;;)switch(D.prev=D.next){case 0:if(!E.disableEdit){D.next=3;break}return $({showModal:!0,disableEdit:!0,clicked:!1}),D.abrupt("return");case 3:if(J=Object(s.a)(Object(s.a)(Object(s.a)(Object(s.a)(Object(s.a)(Object(s.a)(Object(s.a)(Object(s.a)({},p),h==="attributes"&&{active_from:new Date(String(p.active_from))}),h==="attributes"&&{active_to:new Date(String(p.active_to))}),h==="media"&&{image_url:j&&j.image_url}),h==="media"&&{image_path:j&&j.image_url&&Object(X.e)(j.image_url)}),h==="branding"&&{logotype_url:j&&j.logotype_url}),h==="branding"&&{logotype_path:j&&j.logotype_path&&Object(X.e)(j.logotype_path)}),{},{trainers:p.trainers&&p.trainers.map(function(H){return typeof H=="object"?H.id:H})}),!U){D.next=11;break}return D.next=7,Object(N.a)(J);case 7:I=D.sent,I.success&&(V(!1),n.d.push("/webinars/".concat(I.data.id))),D.next=15;break;case 11:return D.next=13,Object(N.d)(Number(u),J);case 13:I=D.sent,I.success&&(V(!1),te(I.data),n.d.push("/webinars/".concat(I.data.id,"/").concat(h)));case 15:b.default.success(I.message);case 16:case"end":return D.stop()}},R)}));function m(R){return A.apply(this,arguments)}return m}(),initialValues:j}},[j,u,h,E]);return j?Object(a.jsx)(ie.a,{title:U?Object(a.jsx)(n.a,{id:"menu.webinars"}):Object(a.jsx)(n.a,{id:"webinar.edit"}),header:{breadcrumb:{routes:[{path:"webinars",breadcrumbName:T.formatMessage({id:"menu.Webinars"})},{path:String(u),breadcrumbName:T.formatMessage({id:"form"})},{path:"/",breadcrumbName:T.formatMessage({id:String(j.name)})},{path:String(h),breadcrumbName:T.formatMessage({id:String(h)})}]}},children:Object(a.jsxs)(B.a,{tabs:{type:"card",activeKey:h,onChange:function(m){return n.d.push("/webinars/".concat(u,"/").concat(m))}},children:[Object(a.jsxs)(B.a.TabPane,{tab:Object(a.jsx)(n.a,{id:"attributes"}),children:[E.disableEdit&&Object(a.jsx)(W.a,{closable:!0,style:{marginBottom:"20px"},type:"warning",message:Object(a.jsx)(n.a,{id:"course_edit_warning_message",defaultMessage:"course_edit_warning_message"}),action:Object(a.jsx)(v.a,{onClick:function(){return $({showModal:!0,disableEdit:!0,clicked:!0})},type:"primary",children:Object(a.jsx)(n.a,{id:"questionnaire.submit",defaultMessage:"questionnaire.submit"})})}),Object(a.jsx)(le.a,{show:Ee}),Object(a.jsx)(ue.a,{visible:E.showModal,setManage:$}),Object(a.jsxs)(t.a,Object(s.a)(Object(s.a)({},F),{},{form:ve,onValuesChange:function(){V(!0)},children:[Object(a.jsxs)(t.a.Group,{children:[Object(a.jsx)(L.a,{width:"md",name:"name",label:Object(a.jsx)(n.a,{id:"name"}),tooltip:Object(a.jsx)(n.a,{id:"name"}),placeholder:T.formatMessage({id:"name",defaultMessage:"name"}),required:!0,disabled:E.disableEdit}),Object(a.jsx)(ne.a,{width:"md",name:"base_price",label:Object(a.jsx)(n.a,{id:"base_price"}),tooltip:Object(a.jsx)(n.a,{id:"base_price_tooltip"}),placeholder:T.formatMessage({id:"base_price",defaultMessage:"base_price"}),min:0,max:9999,fieldProps:{step:1},disabled:E.disableEdit}),Object(a.jsx)(L.a,{width:"sm",name:"duration",label:Object(a.jsx)(n.a,{id:"duration"}),tooltip:Object(a.jsx)(n.a,{id:"duration"}),placeholder:T.formatMessage({id:"duration",defaultMessage:"duration"}),disabled:E.disableEdit}),Object(a.jsx)(se.a,{name:"status",width:"xs",label:Object(a.jsx)(n.a,{id:"status"}),valueEnum:Y.a,initialValue:Y.a.draft,placeholder:T.formatMessage({id:"status"}),rules:[{required:!0,message:Object(a.jsx)(n.a,{id:"select"})}],disabled:E.disableEdit})]}),Object(a.jsxs)(t.a.Group,{children:[Object(a.jsx)(Z.a,{width:"sm",name:"active_from",label:Object(a.jsx)(n.a,{id:"active_from"}),tooltip:Object(a.jsx)(n.a,{id:"active_from"}),placeholder:T.formatMessage({id:"active_from",defaultMessage:"active_from"}),disabled:E.disableEdit}),Object(a.jsx)(Z.a,{width:"sm",name:"active_to",label:Object(a.jsx)(n.a,{id:"active_to"}),tooltip:Object(a.jsx)(n.a,{id:"active_to"}),placeholder:T.formatMessage({id:"active_to",defaultMessage:"active_to"}),disabled:E.disableEdit}),Object(a.jsx)(t.a.Item,{name:"trainers",label:Object(a.jsx)(n.a,{id:"tutor"}),valuePropName:"value",children:Object(a.jsx)(de.a,{multiple:!0,role:"tutor"})})]}),Object(a.jsx)(t.a.Group,{children:Object(a.jsx)(re.a,{width:"lg",name:"short_desc",label:Object(a.jsx)(n.a,{id:"short_description"}),tooltip:Object(a.jsx)(n.a,{id:"short_description"})})}),Object(a.jsx)(t.a.Group,{children:Object(a.jsx)(t.a.Item,{name:"agenda",label:Object(a.jsx)(n.a,{id:"program"}),tooltip:Object(a.jsx)(n.a,{id:"program"}),valuePropName:"value",children:Object(a.jsx)(z.a,{directory:"webinars/".concat(u,"/wysiwyg")})})}),Object(a.jsx)(t.a.Group,{children:Object(a.jsx)(t.a.Item,{name:"description",label:Object(a.jsx)(n.a,{id:"description"}),tooltip:Object(a.jsx)(n.a,{id:"description_tooltip"}),valuePropName:"value",children:Object(a.jsx)(z.a,{directory:"webinars/".concat(u,"/wysiwyg")})})})]}))]},"attributes")," ",!U&&Object(a.jsx)(B.a.TabPane,{tab:Object(a.jsx)(n.a,{id:"product"}),disabled:E.disableEdit,children:u&&Object(a.jsx)(me.a,{productable:{class_type:"App\\Models\\Webinar",class_id:u,name:String(j.name)}})},"product"),!U&&Object(a.jsx)(B.a.TabPane,{tab:Object(a.jsx)(n.a,{id:"media"}),disabled:E.disableEdit,children:Object(a.jsx)(t.a,Object(s.a)(Object(s.a)({},F),{},{children:Object(a.jsx)(Q.a,{folder:"webinar/".concat(u),title:"image",action:"/api/admin/webinar/".concat(u),src_name:"image_url",form_name:"image",getUploadedSrcField:function(m){return m.file.response.data.image_url},setPath:function(m){return w(function(R){return Object(s.a)(Object(s.a)({},R),m)})}})}))},"media"),!U&&Object(a.jsx)(B.a.TabPane,{tab:Object(a.jsx)(n.a,{id:"tags"}),disabled:E.disableEdit,children:Object(a.jsx)(_.a,{children:Object(a.jsx)(i.a,{span:12,children:Object(a.jsx)(t.a,Object(s.a)(Object(s.a)({},F),{},{children:Object(a.jsx)(t.a.Item,{label:Object(a.jsx)(n.a,{id:"tags"}),name:"tags",valuePropName:"value",children:Object(a.jsx)(oe.a,{})})}))})})},"tags")," ",!U&&Object(a.jsx)(B.a.TabPane,{tab:Object(a.jsx)(n.a,{id:"branding"}),disabled:E.disableEdit,children:Object(a.jsx)(t.a,Object(s.a)(Object(s.a)({},F),{},{children:Object(a.jsx)(Q.a,{folder:"webinar/".concat(u),title:"logotype",action:"/api/admin/webinars/".concat(u),src_name:"logotype_url",form_name:"logotype",getUploadedSrcField:function(m){return m.file.response.data.logotype_url},setPath:function(m){return w(function(R){return Object(s.a)(Object(s.a)({},R),m)})}})}))},"branding")," ",!U&&Object(a.jsx)(B.a.TabPane,{tab:Object(a.jsx)(n.a,{id:"user_submission"}),disabled:E.disableEdit,children:Object(a.jsx)(_.a,{children:Object(a.jsx)(i.a,{span:12,children:u&&Object(a.jsx)(Oe.a,{id:Number(u),type:"App\\Models\\Webinar"})})})},"user_submission")]})}):Object(a.jsx)(g.a,{})};l.default=be},viv7:function(y,l,e){"use strict";e.d(l,"a",function(){return d});var d;(function(_){_.draft="draft",_.published="published",_.archived="archived"})(d||(d={}))}}]);

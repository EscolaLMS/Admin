(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{"4f6N":function(B,l,e){"use strict";var _=e("2qtc"),i=e("kLXV"),j=e("9kvl"),r=e("nKUr"),b=e.n(r),T=function(P){var u=P.visible,D=P.setManage;return Object(r.jsx)(i.a,{width:"600px",title:Object(r.jsx)(j.a,{id:"course.validate_edit.header",defaultMessage:"course.validate_edit.header"}),visible:u,onOk:function(){return D({showModal:!1,disableEdit:!1,clicked:!0})},onCancel:function(){return D({showModal:!1,disableEdit:!0,clicked:!1})},okText:"OK",cancelText:"Cancel",children:Object(r.jsx)("p",{children:Object(r.jsx)(j.a,{id:"course.validate_edit.content",defaultMessage:"course.validate_edit.content"})})})};l.a=T},EmS3:function(B,l,e){"use strict";e.d(l,"e",function(){return T}),e.d(l,"a",function(){return P}),e.d(l,"c",function(){return D}),e.d(l,"d",function(){return m}),e.d(l,"b",function(){return I});var _=e("k1fw"),i=e("9og8"),j=e("WmNS"),r=e.n(j),b=e("9kvl");function T(c,n){return M.apply(this,arguments)}function M(){return M=Object(i.a)(r.a.mark(function c(n,o){return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",Object(b.f)("/api/admin/webinars",Object(_.a)({method:"GET",useCache:!1,params:Object(_.a)(Object(_.a)({},n),{},{per_page:n&&n.pageSize,page:n&&n.current})},o||{})));case 1:case"end":return t.stop()}},c)})),M.apply(this,arguments)}function P(c,n){return u.apply(this,arguments)}function u(){return u=Object(i.a)(r.a.mark(function c(n,o){return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",Object(b.f)("/api/admin/webinars",Object(_.a)({method:"POST",headers:{"Content-Type":"application/json"},data:n},o||{})));case 1:case"end":return t.stop()}},c)})),u.apply(this,arguments)}function D(c,n){return p.apply(this,arguments)}function p(){return p=Object(i.a)(r.a.mark(function c(n,o){return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",Object(b.f)("/api/admin/webinars/".concat(n),Object(_.a)({method:"GET",useCache:!1},o||{})));case 1:case"end":return t.stop()}},c)})),p.apply(this,arguments)}function m(c,n,o){return d.apply(this,arguments)}function d(){return d=Object(i.a)(r.a.mark(function c(n,o,R){return r.a.wrap(function(K){for(;;)switch(K.prev=K.next){case 0:return K.abrupt("return",Object(b.f)("/api/admin/webinars/".concat(n,"?method=PUT"),Object(_.a)({method:"POST",headers:{"Content-Type":"application/json"},data:o},R||{})));case 1:case"end":return K.stop()}},c)})),d.apply(this,arguments)}function I(c,n){return A.apply(this,arguments)}function A(){return A=Object(i.a)(r.a.mark(function c(n,o){return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",Object(b.f)("/api/admin/webinars/".concat(n),Object(_.a)({method:"DELETE",useCache:!1},o||{})));case 1:case"end":return t.stop()}},c)})),A.apply(this,arguments)}},VlvL:function(B,l,e){"use strict";var _=e("9kvl"),i=e("Ty5D"),j=e("nKUr"),r=e.n(j),b=function(M){var P=M.show,u=Object(_.i)();return Object(j.jsx)(i.a,{when:P,message:u.formatMessage({id:"unsaved_changes"})})};l.a=b},eFHa:function(B,l,e){"use strict";e.d(l,"a",function(){return b});var _=e("tJVT"),i=e("q1tI"),j=e.n(i),r=e("HZtn");function b(){var T=Object(i.useState)({showModal:!1,disableEdit:!1,clicked:!1}),M=Object(_.a)(T,2),P=M[0],u=M[1],D=function(m){(m==null?void 0:m.status)==="published"&&m!==null&&m!==void 0&&m.active_from&&Object(r.a)(new Date(m==null?void 0:m.active_from))&&!P.clicked?u({showModal:!1,disableEdit:!0,clicked:!1}):u({showModal:!1,disableEdit:!1,clicked:!1})};return{manageCourseEdit:P,setManageCourseEdit:u,validateCourseEdit:D}}},q34N:function(B,l,e){"use strict";var _=e("tJVT"),i=e("0eZe"),j=e("q1tI"),r=e.n(j),b=e("nKUr"),T=e.n(b),M=function(u){var D=u.productable,p=u.type,m=p===void 0?"card":p,d=Object(j.useState)("attributes"),I=Object(_.a)(d,2),A=I[0],c=I[1];return Object(b.jsx)(i.a,{productable:D,tab:A,onTabChange:function(o){return c(o)},type:m})};l.a=M},tixb:function(B,l,e){"use strict";e.r(l);var _=e("14J3"),i=e("BMrR"),j=e("jCWc"),r=e("kPKH"),b=e("fOrg"),T=e("+KLJ"),M=e("+L6B"),P=e("2/Rp"),u=e("T2oS"),D=e("W9HT"),p=e("miYZ"),m=e("tsqr"),d=e("k1fw"),I=e("9og8"),A=e("tJVT"),c=e("WmNS"),n=e.n(c),o=e("q1tI"),R=e.n(o),t=e("VMEa"),K=e("Qurx"),ae=e("FJDo"),te=e("yj/a"),Z=e("CnWR"),se=e("BiO0"),y=e("nhC9"),z=e("hd5d"),ne=e("tMyG"),s=e("9kvl"),re=e("Ty5D"),w=e("EmS3"),ie=e("0WSk"),_e=e("Gn8c"),de=e("c+yx"),oe=e("rnuo"),le=e("VlvL"),Q=e("viv7"),ce=e("eFHa"),ue=e("4f6N"),me=e("q34N"),Oe=e("5RzD"),a=e("nKUr"),De=e.n(a),be=function(){var g=Object(s.i)(),X=Object(re.h)(),O=X.webinar,Y=X.tab,W=Y===void 0?"attributes":Y,L=O==="new",Ee=Object(o.useState)(!1),k=Object(A.a)(Ee,2),je=k[0],F=k[1],Me=Object(o.useState)(),q=Object(A.a)(Me,2),C=q[0],N=q[1],V=Object(ce.a)(),E=V.manageCourseEdit,G=V.setManageCourseEdit,ee=V.validateCourseEdit,Pe=t.a.useForm(),ve=Object(A.a)(Pe,1),fe=ve[0],he=Object(o.useCallback)(Object(I.a)(n.a.mark(function x(){var v;return n.a.wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.next=2,Object(w.c)(Number(O));case 2:v=f.sent,v.success&&(W==="attributes"&&ee(v.data),N(Object(d.a)({},v.data)));case 4:case"end":return f.stop()}},x)})),[O]);Object(o.useEffect)(function(){if(L){N({name:"new"});return}he()},[O]);var $=Object(o.useMemo)(function(){return{onFinish:function(){var x=Object(I.a)(n.a.mark(function S(f){var J,U;return n.a.wrap(function(h){for(;;)switch(h.prev=h.next){case 0:if(!E.disableEdit){h.next=3;break}return G({showModal:!0,disableEdit:!0,clicked:!1}),h.abrupt("return");case 3:if(J=Object(d.a)(Object(d.a)(Object(d.a)(Object(d.a)({},f),W==="attributes"&&{active_from:new Date(String(f.active_from))}),W==="attributes"&&{active_to:new Date(String(f.active_to))}),{},{image_url:C&&C.image_url,image_path:C&&C.image_url&&Object(de.e)(C.image_url),trainers:f.trainers&&f.trainers.map(function(H){return typeof H=="object"?H.id:H})}),!L){h.next=11;break}return h.next=7,Object(w.a)(J);case 7:U=h.sent,U.success&&(F(!1),s.d.push("/webinars/".concat(U.data.id))),h.next=15;break;case 11:return h.next=13,Object(w.d)(Number(O),J);case 13:U=h.sent,U.success&&(F(!1),ee(U.data),s.d.push("/webinars/".concat(U.data.id,"/").concat(W)));case 15:m.default.success(U.message);case 16:case"end":return h.stop()}},S)}));function v(S){return x.apply(this,arguments)}return v}(),initialValues:C}},[C,O,W,E]);return C?Object(a.jsx)(ne.a,{title:L?Object(a.jsx)(s.a,{id:"menu.webinars"}):Object(a.jsx)(s.a,{id:"webinar.edit"}),header:{breadcrumb:{routes:[{path:"webinars",breadcrumbName:g.formatMessage({id:"menu.Webinars"})},{path:String(O),breadcrumbName:g.formatMessage({id:"form"})},{path:"/",breadcrumbName:g.formatMessage({id:String(C.name)})},{path:String(W),breadcrumbName:g.formatMessage({id:String(W)})}]}},children:Object(a.jsxs)(y.a,{tabs:{type:"card",activeKey:W,onChange:function(v){return s.d.push("/webinars/".concat(O,"/").concat(v))}},children:[Object(a.jsxs)(y.a.TabPane,{tab:Object(a.jsx)(s.a,{id:"attributes"}),children:[E.disableEdit&&Object(a.jsx)(T.a,{closable:!0,style:{marginBottom:"20px"},type:"warning",message:Object(a.jsx)(s.a,{id:"course_edit_warning_message",defaultMessage:"course_edit_warning_message"}),action:Object(a.jsx)(P.a,{onClick:function(){return G({showModal:!0,disableEdit:!0,clicked:!0})},type:"primary",children:Object(a.jsx)(s.a,{id:"questionnaire.submit",defaultMessage:"questionnaire.submit"})})}),Object(a.jsx)(le.a,{show:je}),Object(a.jsx)(ue.a,{visible:E.showModal,setManage:G}),Object(a.jsxs)(t.a,Object(d.a)(Object(d.a)({},$),{},{form:fe,onValuesChange:function(){F(!0)},children:[Object(a.jsxs)(t.a.Group,{children:[Object(a.jsx)(K.a,{width:"md",name:"name",label:Object(a.jsx)(s.a,{id:"name"}),tooltip:Object(a.jsx)(s.a,{id:"name"}),placeholder:g.formatMessage({id:"name",defaultMessage:"name"}),required:!0,disabled:E.disableEdit}),Object(a.jsx)(ae.a,{width:"md",name:"base_price",label:Object(a.jsx)(s.a,{id:"base_price"}),tooltip:Object(a.jsx)(s.a,{id:"base_price_tooltip"}),placeholder:g.formatMessage({id:"base_price",defaultMessage:"base_price"}),min:0,max:9999,fieldProps:{step:1},disabled:E.disableEdit}),Object(a.jsx)(K.a,{width:"sm",name:"duration",label:Object(a.jsx)(s.a,{id:"duration"}),tooltip:Object(a.jsx)(s.a,{id:"duration"}),placeholder:g.formatMessage({id:"duration",defaultMessage:"duration"}),disabled:E.disableEdit}),Object(a.jsx)(te.a,{name:"status",width:"xs",label:Object(a.jsx)(s.a,{id:"status"}),valueEnum:Q.a,initialValue:Q.a.draft,placeholder:g.formatMessage({id:"status"}),rules:[{required:!0,message:Object(a.jsx)(s.a,{id:"select"})}],disabled:E.disableEdit})]}),Object(a.jsxs)(t.a.Group,{children:[Object(a.jsx)(Z.a,{width:"sm",name:"active_from",label:Object(a.jsx)(s.a,{id:"active_from"}),tooltip:Object(a.jsx)(s.a,{id:"active_from"}),placeholder:g.formatMessage({id:"active_from",defaultMessage:"active_from"}),disabled:E.disableEdit}),Object(a.jsx)(Z.a,{width:"sm",name:"active_to",label:Object(a.jsx)(s.a,{id:"active_to"}),tooltip:Object(a.jsx)(s.a,{id:"active_to"}),placeholder:g.formatMessage({id:"active_to",defaultMessage:"active_to"}),disabled:E.disableEdit}),Object(a.jsx)(t.a.Item,{name:"trainers",label:Object(a.jsx)(s.a,{id:"tutor"}),valuePropName:"value",children:Object(a.jsx)(ie.a,{multiple:!0,role:"tutor"})})]}),Object(a.jsx)(t.a.Group,{children:Object(a.jsx)(se.a,{width:"lg",name:"short_desc",label:Object(a.jsx)(s.a,{id:"short_description"}),tooltip:Object(a.jsx)(s.a,{id:"short_description"})})}),Object(a.jsx)(t.a.Group,{children:Object(a.jsx)(t.a.Item,{name:"agenda",label:Object(a.jsx)(s.a,{id:"program"}),tooltip:Object(a.jsx)(s.a,{id:"program"}),valuePropName:"value",children:Object(a.jsx)(z.a,{directory:"webinars/".concat(O,"/wysiwyg")})})}),Object(a.jsx)(t.a.Group,{children:Object(a.jsx)(t.a.Item,{name:"description",label:Object(a.jsx)(s.a,{id:"description"}),tooltip:Object(a.jsx)(s.a,{id:"description_tooltip"}),valuePropName:"value",children:Object(a.jsx)(z.a,{directory:"webinars/".concat(O,"/wysiwyg")})})})]}))]},"attributes")," ",!L&&Object(a.jsx)(y.a.TabPane,{tab:Object(a.jsx)(s.a,{id:"prices"}),disabled:E.disableEdit,children:O&&Object(a.jsx)(me.a,{productable:{class_type:"App\\Models\\Webinar",class_id:O,name:String(C.name)}})},"prices"),!L&&Object(a.jsx)(y.a.TabPane,{tab:Object(a.jsx)(s.a,{id:"media"}),disabled:E.disableEdit,children:Object(a.jsx)(t.a,Object(d.a)(Object(d.a)({},$),{},{children:Object(a.jsx)(_e.a,{title:"image",action:"/api/admin/webinars/".concat(O),src_name:"image_url",form_name:"image",getUploadedSrcField:function(v){return v.file.response.data.image_url},setPath:function(v){return N(function(S){return Object(d.a)(Object(d.a)({},S),v)})}})}))},"media"),!L&&Object(a.jsx)(y.a.TabPane,{tab:Object(a.jsx)(s.a,{id:"tags"}),disabled:E.disableEdit,children:Object(a.jsx)(i.a,{children:Object(a.jsx)(r.a,{span:12,children:Object(a.jsx)(t.a,Object(d.a)(Object(d.a)({},$),{},{children:Object(a.jsx)(t.a.Item,{label:Object(a.jsx)(s.a,{id:"tags"}),name:"tags",valuePropName:"value",children:Object(a.jsx)(oe.a,{})})}))})})},"tags")," ",!L&&Object(a.jsx)(y.a.TabPane,{tab:Object(a.jsx)(s.a,{id:"user_submission"}),disabled:E.disableEdit,children:Object(a.jsx)(i.a,{children:Object(a.jsx)(r.a,{span:12,children:O&&Object(a.jsx)(Oe.a,{id:Number(O),type:"App\\Models\\Webinar"})})})},"user_submission")]})}):Object(a.jsx)(D.a,{})};l.default=be},viv7:function(B,l,e){"use strict";e.d(l,"a",function(){return _});var _;(function(i){i.draft="draft",i.published="published",i.archived="archived"})(_||(_={}))}}]);

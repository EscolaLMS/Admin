(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{"4f6N":function(K,d,e){"use strict";var _=e("2qtc"),i=e("kLXV"),j=e("9kvl"),n=e("nKUr"),O=e.n(n),g=function(P){var E=P.visible,h=P.setManage;return Object(n.jsx)(i.a,{width:"600px",title:Object(n.jsx)(j.a,{id:"course.validate_edit.header",defaultMessage:"course.validate_edit.header"}),visible:E,onOk:function(){return h({showModal:!1,disableEdit:!1,clicked:!0})},onCancel:function(){return h({showModal:!1,disableEdit:!0,clicked:!1})},okText:"OK",cancelText:"Cancel",children:Object(n.jsx)("p",{children:Object(n.jsx)(j.a,{id:"course.validate_edit.content",defaultMessage:"course.validate_edit.content"})})})};d.a=g},EmS3:function(K,d,e){"use strict";e.d(d,"e",function(){return g}),e.d(d,"a",function(){return P}),e.d(d,"c",function(){return h}),e.d(d,"d",function(){return u}),e.d(d,"b",function(){return L});var _=e("k1fw"),i=e("9og8"),j=e("WmNS"),n=e.n(j),O=e("9kvl");function g(o,r){return M.apply(this,arguments)}function M(){return M=Object(i.a)(n.a.mark(function o(r,c){return n.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",Object(O.f)("/api/admin/webinars",Object(_.a)({method:"GET",useCache:!1,params:Object(_.a)(Object(_.a)({},r),{},{per_page:r&&r.pageSize,page:r&&r.current})},c||{})));case 1:case"end":return t.stop()}},o)})),M.apply(this,arguments)}function P(o,r){return E.apply(this,arguments)}function E(){return E=Object(i.a)(n.a.mark(function o(r,c){return n.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",Object(O.f)("/api/admin/webinars",Object(_.a)({method:"POST",headers:{"Content-Type":"application/json"},data:r},c||{})));case 1:case"end":return t.stop()}},o)})),E.apply(this,arguments)}function h(o,r){return C.apply(this,arguments)}function C(){return C=Object(i.a)(n.a.mark(function o(r,c){return n.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",Object(O.f)("/api/admin/webinars/".concat(r),Object(_.a)({method:"GET",useCache:!1},c||{})));case 1:case"end":return t.stop()}},o)})),C.apply(this,arguments)}function u(o,r,c){return l.apply(this,arguments)}function l(){return l=Object(i.a)(n.a.mark(function o(r,c,B){return n.a.wrap(function(U){for(;;)switch(U.prev=U.next){case 0:return U.abrupt("return",Object(O.f)("/api/admin/webinars/".concat(r,"?method=PUT"),Object(_.a)({method:"POST",headers:{"Content-Type":"application/json"},data:c},B||{})));case 1:case"end":return U.stop()}},o)})),l.apply(this,arguments)}function L(o,r){return A.apply(this,arguments)}function A(){return A=Object(i.a)(n.a.mark(function o(r,c){return n.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",Object(O.f)("/api/admin/webinars/".concat(r),Object(_.a)({method:"DELETE",useCache:!1},c||{})));case 1:case"end":return t.stop()}},o)})),A.apply(this,arguments)}},VlvL:function(K,d,e){"use strict";var _=e("9kvl"),i=e("Ty5D"),j=e("nKUr"),n=e.n(j),O=function(M){var P=M.show,E=Object(_.i)();return Object(j.jsx)(i.a,{when:P,message:E.formatMessage({id:"unsaved_changes"})})};d.a=O},eFHa:function(K,d,e){"use strict";e.d(d,"a",function(){return O});var _=e("tJVT"),i=e("q1tI"),j=e.n(i),n=e("HZtn");function O(){var g=Object(i.useState)({showModal:!1,disableEdit:!1,clicked:!1}),M=Object(_.a)(g,2),P=M[0],E=M[1],h=function(u){(u==null?void 0:u.status)==="published"&&u!==null&&u!==void 0&&u.active_from&&Object(n.a)(new Date(u==null?void 0:u.active_from))&&!P.clicked?E({showModal:!1,disableEdit:!0,clicked:!1}):E({showModal:!1,disableEdit:!1,clicked:!1})};return{manageCourseEdit:P,setManageCourseEdit:E,validateCourseEdit:h}}},q34N:function(K,d,e){"use strict";var _=e("tJVT"),i=e("0eZe"),j=e("q1tI"),n=e.n(j),O=e("nKUr"),g=e.n(O),M=function(E){var h=E.productable,C=Object(j.useState)("attributes"),u=Object(_.a)(C,2),l=u[0],L=u[1];return Object(O.jsx)(i.a,{productable:h,tab:l,onTabChange:function(o){return L(o)}})};d.a=M},tixb:function(K,d,e){"use strict";e.r(d);var _=e("14J3"),i=e("BMrR"),j=e("jCWc"),n=e("kPKH"),O=e("fOrg"),g=e("+KLJ"),M=e("+L6B"),P=e("2/Rp"),E=e("T2oS"),h=e("W9HT"),C=e("miYZ"),u=e("tsqr"),l=e("k1fw"),L=e("9og8"),A=e("tJVT"),o=e("WmNS"),r=e.n(o),c=e("q1tI"),B=e.n(c),t=e("VMEa"),U=e("Qurx"),ae=e("FJDo"),te=e("yj/a"),Z=e("lR9U"),se=e("BiO0"),R=e("nhC9"),z=e("hd5d"),ne=e("tMyG"),s=e("9kvl"),re=e("Ty5D"),w=e("EmS3"),ie=e("0WSk"),_e=e("Gn8c"),de=e("c+yx"),oe=e("rnuo"),le=e("VlvL"),Q=e("viv7"),ce=e("eFHa"),ue=e("4f6N"),me=e("q34N"),Oe=e("5RzD"),a=e("nKUr"),De=e.n(a),Ee=function(){var D=Object(s.i)(),X=Object(re.h)(),m=X.webinar,Y=X.tab,y=Y===void 0?"attributes":Y,I=m==="new",be=Object(c.useState)(!1),k=Object(A.a)(be,2),je=k[0],F=k[1],Me=Object(c.useState)(),q=Object(A.a)(Me,2),p=q[0],N=q[1],V=Object(ce.a)(),b=V.manageCourseEdit,G=V.setManageCourseEdit,ee=V.validateCourseEdit,Pe=t.a.useForm(),ve=Object(A.a)(Pe,1),fe=ve[0],he=Object(c.useCallback)(Object(L.a)(r.a.mark(function W(){var v;return r.a.wrap(function(T){for(;;)switch(T.prev=T.next){case 0:return T.next=2,Object(w.c)(Number(m));case 2:v=T.sent,v.success&&(ee(v.data),N(Object(l.a)({},v.data)));case 4:case"end":return T.stop()}},W)})),[m]);Object(c.useEffect)(function(){if(I){N({name:"new"});return}he()},[m]);var $=Object(c.useMemo)(function(){return{onFinish:function(){var W=Object(L.a)(r.a.mark(function S(T){var J,x;return r.a.wrap(function(f){for(;;)switch(f.prev=f.next){case 0:if(!b.disableEdit){f.next=3;break}return G({showModal:!0,disableEdit:!0,clicked:!1}),f.abrupt("return");case 3:if(J=Object(l.a)(Object(l.a)({},T),{},{image_url:p&&p.image_url,image_path:p&&p.image_url&&Object(de.c)(p.image_url),trainers:T.trainers&&T.trainers.map(function(H){return typeof H=="object"?H.id:H})}),!I){f.next=11;break}return f.next=7,Object(w.a)(J);case 7:x=f.sent,x.success&&(F(!1),s.d.push("/webinars/".concat(x.data.id))),f.next=15;break;case 11:return f.next=13,Object(w.d)(Number(m),J);case 13:x=f.sent,x.success&&(F(!1),ee(x.data),s.d.push("/webinars/".concat(x.data.id,"/").concat(y)));case 15:u.default.success(x.message);case 16:case"end":return f.stop()}},S)}));function v(S){return W.apply(this,arguments)}return v}(),initialValues:p}},[p,m,y,b]);return p?Object(a.jsx)(ne.a,{title:I?Object(a.jsx)(s.a,{id:"menu.webinars"}):Object(a.jsx)(s.a,{id:"webinar.edit"}),header:{breadcrumb:{routes:[{path:"webinars",breadcrumbName:D.formatMessage({id:"menu.Webinars"})},{path:String(m),breadcrumbName:D.formatMessage({id:"form"})},{path:"/",breadcrumbName:D.formatMessage({id:String(p.name)})},{path:String(y),breadcrumbName:D.formatMessage({id:String(y)})}]}},children:Object(a.jsxs)(R.a,{tabs:{type:"card",activeKey:y,onChange:function(v){return s.d.push("/webinars/".concat(m,"/").concat(v))}},children:[Object(a.jsxs)(R.a.TabPane,{tab:Object(a.jsx)(s.a,{id:"attributes"}),children:[b.disableEdit&&Object(a.jsx)(g.a,{closable:!0,style:{marginBottom:"20px"},type:"warning",message:Object(a.jsx)(s.a,{id:"course_edit_warning_message",defaultMessage:"course_edit_warning_message"}),action:Object(a.jsx)(P.a,{onClick:function(){return G({showModal:!0,disableEdit:!0,clicked:!0})},type:"primary",children:Object(a.jsx)(s.a,{id:"questionnaire.submit",defaultMessage:"questionnaire.submit"})})}),Object(a.jsx)(le.a,{show:je}),Object(a.jsx)(ue.a,{visible:b.showModal,setManage:G}),Object(a.jsxs)(t.a,Object(l.a)(Object(l.a)({},$),{},{form:fe,onValuesChange:function(){F(!0)},children:[Object(a.jsxs)(t.a.Group,{children:[Object(a.jsx)(U.a,{width:"md",name:"name",label:Object(a.jsx)(s.a,{id:"name"}),tooltip:Object(a.jsx)(s.a,{id:"name"}),placeholder:D.formatMessage({id:"name",defaultMessage:"name"}),required:!0,disabled:b.disableEdit}),Object(a.jsx)(ae.a,{width:"md",name:"base_price",label:Object(a.jsx)(s.a,{id:"base_price"}),tooltip:Object(a.jsx)(s.a,{id:"base_price_tooltip"}),placeholder:D.formatMessage({id:"base_price",defaultMessage:"base_price"}),min:0,max:9999,fieldProps:{step:1},disabled:b.disableEdit}),Object(a.jsx)(U.a,{width:"sm",name:"duration",label:Object(a.jsx)(s.a,{id:"duration"}),tooltip:Object(a.jsx)(s.a,{id:"duration"}),placeholder:D.formatMessage({id:"duration",defaultMessage:"duration"}),disabled:b.disableEdit}),Object(a.jsx)(te.a,{name:"status",width:"xs",label:Object(a.jsx)(s.a,{id:"status"}),valueEnum:Q.a,initialValue:Q.a.draft,placeholder:D.formatMessage({id:"status"}),rules:[{required:!0,message:Object(a.jsx)(s.a,{id:"select"})}],disabled:b.disableEdit})]}),Object(a.jsxs)(t.a.Group,{children:[Object(a.jsx)(Z.a,{width:"sm",name:"active_from",label:Object(a.jsx)(s.a,{id:"active_from"}),tooltip:Object(a.jsx)(s.a,{id:"active_from"}),placeholder:D.formatMessage({id:"active_from",defaultMessage:"active_from"}),disabled:b.disableEdit}),Object(a.jsx)(Z.a,{width:"sm",name:"active_to",label:Object(a.jsx)(s.a,{id:"active_to"}),tooltip:Object(a.jsx)(s.a,{id:"active_to"}),placeholder:D.formatMessage({id:"active_to",defaultMessage:"active_to"}),disabled:b.disableEdit}),Object(a.jsx)(t.a.Item,{name:"trainers",label:Object(a.jsx)(s.a,{id:"tutor"}),valuePropName:"value",children:Object(a.jsx)(ie.a,{multiple:!0})})]}),Object(a.jsx)(t.a.Group,{children:Object(a.jsx)(se.a,{width:"lg",name:"short_desc",label:Object(a.jsx)(s.a,{id:"short_description"}),tooltip:Object(a.jsx)(s.a,{id:"short_description"})})}),Object(a.jsx)(t.a.Group,{children:Object(a.jsx)(t.a.Item,{name:"agenda",label:Object(a.jsx)(s.a,{id:"program"}),tooltip:Object(a.jsx)(s.a,{id:"program"}),valuePropName:"value",children:Object(a.jsx)(z.a,{directory:"webinars/".concat(m,"/wysiwyg")})})}),Object(a.jsx)(t.a.Group,{children:Object(a.jsx)(t.a.Item,{name:"description",label:Object(a.jsx)(s.a,{id:"description"}),tooltip:Object(a.jsx)(s.a,{id:"description_tooltip"}),valuePropName:"value",children:Object(a.jsx)(z.a,{directory:"webinars/".concat(m,"/wysiwyg")})})})]}))]},"attributes")," ",!I&&Object(a.jsx)(R.a.TabPane,{tab:Object(a.jsx)(s.a,{id:"prices"}),disabled:b.disableEdit,children:m&&Object(a.jsx)(me.a,{productable:{class_type:"App\\Models\\Webinar",class_id:m,name:String(p.name)}})},"prices"),!I&&Object(a.jsx)(R.a.TabPane,{tab:Object(a.jsx)(s.a,{id:"media"}),disabled:b.disableEdit,children:Object(a.jsx)(t.a,Object(l.a)(Object(l.a)({},$),{},{children:Object(a.jsx)(_e.a,{title:"image",action:"/api/admin/webinars/".concat(m),src_name:"image_url",form_name:"image",getUploadedSrcField:function(v){return v.file.response.data.image_url},setPath:function(v){return N(function(S){return Object(l.a)(Object(l.a)({},S),v)})}})}))},"media"),!I&&Object(a.jsx)(R.a.TabPane,{tab:Object(a.jsx)(s.a,{id:"tags"}),disabled:b.disableEdit,children:Object(a.jsx)(i.a,{children:Object(a.jsx)(n.a,{span:12,children:Object(a.jsx)(t.a,Object(l.a)(Object(l.a)({},$),{},{children:Object(a.jsx)(t.a.Item,{label:Object(a.jsx)(s.a,{id:"tags"}),name:"tags",valuePropName:"value",children:Object(a.jsx)(oe.a,{})})}))})})},"tags")," ",!I&&Object(a.jsx)(R.a.TabPane,{tab:Object(a.jsx)(s.a,{id:"user_submission"}),disabled:b.disableEdit,children:Object(a.jsx)(i.a,{children:Object(a.jsx)(n.a,{span:12,children:m&&Object(a.jsx)(Oe.a,{id:Number(m),type:"App\\Models\\Webinar"})})})},"user_submission")]})}):Object(a.jsx)(h.a,{})};d.default=Ee},viv7:function(K,d,e){"use strict";e.d(d,"a",function(){return _});var _;(function(i){i.draft="draft",i.published="published",i.archived="archived"})(_||(_={}))}}]);

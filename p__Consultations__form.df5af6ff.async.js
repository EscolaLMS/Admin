(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"4f6N":function(X,E,t){"use strict";var R=t("2qtc"),C=t("kLXV"),j=t("9kvl"),D=t("nKUr"),S=t.n(D),N=function(y){var T=y.visible,x=y.setManage;return Object(D.jsx)(C.a,{width:"600px",title:Object(D.jsx)(j.a,{id:"course.validate_edit.header",defaultMessage:"course.validate_edit.header"}),visible:T,onOk:function(){return x({showModal:!1,disableEdit:!1,clicked:!0})},onCancel:function(){return x({showModal:!1,disableEdit:!0,clicked:!1})},okText:"OK",cancelText:"Cancel",children:Object(D.jsx)("p",{children:Object(D.jsx)(j.a,{id:"course.validate_edit.content",defaultMessage:"course.validate_edit.content"})})})};E.a=N},"5qq5":function(X,E,t){"use strict";var R=t("7Kak"),C=t("9yH6"),j=t("VTBJ"),D=t("Ff2n"),S=t("nKUr"),N=t.n(S),W=t("uX+g"),y=t("q1tI"),T=t.n(y),x=t("WFLz"),h=t("adzw"),U=["fieldProps","options","radioType","layout","proFieldProps","valueEnum"],B=T.a.forwardRef(function(r,$){var p=r.fieldProps,q=r.options,st=r.radioType,et=r.layout,V=r.proFieldProps,nt=r.valueEnum,rt=Object(D.a)(r,U);return Object(S.jsx)(h.a,Object(j.a)(Object(j.a)({valueType:st==="button"?"radioButton":"radio",ref:$,valueEnum:Object(W.a)(nt,void 0)},rt),{},{fieldProps:Object(j.a)({options:q,layout:et},p),proFieldProps:V,filedConfig:{customLightMode:!0}}))}),s=T.a.forwardRef(function(r,$){var p=r.fieldProps,q=r.children;return Object(S.jsx)(C.a,Object(j.a)(Object(j.a)({},p),{},{ref:$,children:q}))}),Y=Object(x.a)(s,{valuePropName:"checked",ignoreWidth:!0}),g=Y;g.Group=B,g.Button=C.a.Button,g.displayName="ProFormComponent",E.a=g},FJDo:function(X,E,t){"use strict";var R=t("VTBJ"),C=t("Ff2n"),j=t("nKUr"),D=t.n(j),S=t("q1tI"),N=t.n(S),W=t("adzw"),y=["fieldProps","min","proFieldProps","max"],T=function(h,U){var B=h.fieldProps,s=h.min,Y=h.proFieldProps,g=h.max,r=Object(C.a)(h,y);return Object(j.jsx)(W.a,Object(R.a)({valueType:"digit",fieldProps:Object(R.a)({min:s,max:g},B),ref:U,filedConfig:{defaultProps:{width:"100%"}},proFieldProps:Y},r))};E.a=N.a.forwardRef(T)},GZq3:function(X,E,t){},"J+hL":function(X,E,t){},VlvL:function(X,E,t){"use strict";var R=t("9kvl"),C=t("Ty5D"),j=t("nKUr"),D=t.n(j),S=function(W){var y=W.show,T=Object(R.l)();return Object(j.jsx)(C.b,{when:y,message:T.formatMessage({id:"unsaved_changes"})})};E.a=S},eFHa:function(X,E,t){"use strict";t.d(E,"a",function(){return W});var R=t("k1fw"),C=t("tJVT"),j=t("q1tI"),D=t("/Tr7"),S=t("jIYg");function N(y){return Object(S.a)(1,arguments),Object(D.a)(y).getTime()<Date.now()}function W(){var y=Object(j.useState)({showModal:!1,disableEdit:!1,clicked:!1}),T=Object(C.a)(y,2),x=T[0],h=T[1],U=function(s){(s==null?void 0:s.status)==="published"&&s!==null&&s!==void 0&&s.active_from&&N(new Date(s==null?void 0:s.active_from))&&!x.clicked?h(Object(R.a)(Object(R.a)({},x),{},{showModal:!1,disableEdit:!0,clicked:!1})):h(Object(R.a)(Object(R.a)({},x),{},{showModal:!1,disableEdit:!1,clicked:!1}))};return{manageCourseEdit:x,setManageCourseEdit:h,validateCourseEdit:U}}},q34N:function(X,E,t){"use strict";var R=t("tJVT"),C=t("0eZe"),j=t("q1tI"),D=t.n(j),S=t("nKUr"),N=t.n(S),W=function(T){var x=T.productable,h=T.type,U=h===void 0?"card":h,B=Object(j.useState)("attributes"),s=Object(R.a)(B,2),Y=s[0],g=s[1];return Object(S.jsx)(C.a,{productable:x,tab:Y,onTabChange:function($){return g($)},type:U})};E.a=W},rh3J:function(X,E,t){"use strict";t.r(E);var R=t("14J3"),C=t("BMrR"),j=t("jCWc"),D=t("kPKH"),S=t("fOrg"),N=t("+KLJ"),W=t("+L6B"),y=t("2/Rp"),T=t("T2oS"),x=t("W9HT"),h=t("miYZ"),U=t("tsqr"),B=t("qLMh"),s=t("k1fw"),Y=t("9og8"),g=t("tJVT"),r=t("q1tI"),$=t.n(r),p=t("VMEa"),q=t("Qurx"),st=t("yj/a"),et=t("lR9U"),V=t("nhC9"),nt=t("hd5d"),rt=t("tMyG"),a=t("9kvl"),mt=t("Ty5D"),ft=t("0WSk"),ht=t("TWax"),tt=t("Gb5Y"),Lt=t("OaEy"),gt=t("2fM7"),Nt=t("iQDF"),lt=t("+eQT"),Vt=t("+BJd"),pt=t("mr32"),Et=t("oBTY"),xt=t("wd/R"),_=t.n(xt),Ht=t("GZq3"),e=t("nKUr"),ct=function(i){return i.local().valueOf()},Mt=function(i){var c=i.value,n=c===void 0?[]:c,M=i.onChange,b=i.format,P=b===void 0?"DD-MM-YYYY HH:mm":b,z=i.selectProps,Q=z===void 0?{}:z,K=Object(r.useState)(!1),F=Object(g.a)(K,2),k=F[0],H=F[1],l=Object(r.useCallback)(function(u){var f=ct(u),v=n.indexOf(f),I=Object(Et.a)(n);v>-1?I.splice(v,1):I.push(f),M(I)},[n]),d=Object(r.useCallback)(function(u){var f=n.indexOf(ct(u))>-1;return Object(e.jsx)("div",{className:"ant-picker-cell-inner",style:f?{position:"relative",zIndex:2,display:"inlineBlock",width:"24px",height:"22px",lineHeight:"22px",backgroundColor:"#1890ff",color:"#fff",margin:"auto",borderRadius:"2px",transition:"background 0.3s, border 0.3s"}:{},children:u.date()})},[n]),O=Object(r.useCallback)(function(u){var f=u.value,v=u.onClose,I=function(){v(),M(n.filter(function(dt){return dt!==f}))};return Object(e.jsx)(pt.a,{onClose:I,closable:!0,children:_()(f).format(P)})},[n]),o=function(){return{disabledMinutes:function(){return Array.from({length:59},function(v,I){return I+1})}}};return Object(e.jsx)(gt.a,Object(s.a)(Object(s.a)({},Q),{},{allowClear:!0,mode:"multiple",value:n,onClear:function(){return M&&M([])},tagRender:O,open:k,onFocus:function(){return H(!0)},onBlur:function(){return H(!1)},dropdownMatchSelectWidth:!1,dropdownClassName:"multipleDropdownClassName",dropdownStyle:{height:"310px",width:"335px",minWidth:"0"},dropdownRender:function(){return Object(e.jsx)(lt.a,{disabledDate:function(v){var I=new Date;return v&&v.valueOf()<=I.setDate(I.getDate()-1)},showTime:{format:"HH"},disabledTime:o,onChange:function(v){return v&&l(v)},open:!0,dateRender:d,style:{visibility:"hidden"},getPopupContainer:function(v){var I=v.parentNode;return I},defaultValue:_()("00:00","HH")})}}))},Pt=Mt,ot=t("c+yx"),ut=t("Gn8c"),Ct=t("VlvL"),it;(function(A){A.draft="draft",A.published="published",A.archived="archived"})(it||(it={}));var Dt=t("eFHa"),yt=t("4f6N"),Jt=t("qbNl"),Tt=t("JBPa"),Gt=t("5Dmo"),Rt=t("3S7+"),Yt=t("Awhp"),jt=t("KrTs"),St=t("Qiat"),It=function(i){var c=i.data,n=i.onChange,M=Object(r.useState)(!1),b=Object(g.a)(M,2),P=b[0],z=b[1],Q=Object(r.useState)(_()(c.date)),K=Object(g.a)(Q,2),F=K[0],k=K[1],H=Object(r.useCallback)(function(l){k(_()(l)),z(!0),Object(tt.a)(c.consultation_term_id,l).then(function(d){d.success?(U.b.success(d.message),n(F)):U.b.error(d.message)}).catch(function(d){return U.b.error(d.toString())}).finally(function(){return z(!1)})},[F]);return Object(e.jsx)($.a.Fragment,{children:Object(e.jsx)(lt.a,{disabledDate:function(d){var O=new Date;return d&&d.valueOf()<=O.setDate(O.getDate()-1)},disabled:P,value:F,showTime:{format:"HH"},onChange:function(d){d&&H(d.toISOString())}})})},bt={reported:"warning",reject:"error",approved:"success"},Ut=[{title:Object(e.jsx)(a.a,{id:"id",defaultMessage:"id"}),dataIndex:"consultation_term_id",hideInSearch:!0},{title:Object(e.jsx)(a.a,{id:"user",defaultMessage:"user"}),dataIndex:"user",render:function(i,c){var n,M,b;return"".concat((n=c.user)===null||n===void 0?void 0:n.first_name," ").concat((M=c.user)===null||M===void 0?void 0:M.last_name," ").concat((b=c.user)===null||b===void 0?void 0:b.email)}},{title:Object(e.jsx)(a.a,{id:"date",defaultMessage:"date"}),dataIndex:"date",render:function(i,c){return _()(c.date).format("yyyy-MM-DD HH:mm")}},{title:Object(e.jsx)(a.a,{id:"status",defaultMessage:"status"}),dataIndex:"status",render:function(i,c){return Object(e.jsx)(jt.a,{status:bt[c.status],text:Object(e.jsx)(a.a,{id:c.status})})}}],Bt=function(i){var c=i.consultation,n=Object(r.useState)(!1),M=Object(g.a)(n,2),b=M[0],P=M[1],z=Object(r.useState)([]),Q=Object(g.a)(z,2),K=Q[0],F=Q[1],k=Object(a.l)(),H=Object(r.useCallback)(function(){P(!0),Object(tt.f)(c).then(function(d){d.success&&F(d.data)}).catch(function(){U.b.error(Object(e.jsx)(a.a,{id:"error",defaultMessage:"error"}))}).finally(function(){return P(!1)})},[c]);Object(r.useEffect)(function(){H()},[c]);var l=Object(r.useCallback)(function(d){return Object(e.jsx)("ul",{className:"events",children:K.map(function(O){if(d.format("yyyy-MM-DD")===_()(O.date).format("yyyy-MM-DD")){var o,u,f,v;return Object(e.jsx)("li",{children:Object(e.jsx)(jt.a,{status:bt[O.status],text:Object(e.jsx)($.a.Fragment,{children:Object(e.jsxs)(Rt.a,{title:"".concat((o=O.user)===null||o===void 0?void 0:o.first_name," ").concat((u=O.user)===null||u===void 0?void 0:u.last_name," ").concat((f=O.user)===null||f===void 0?void 0:f.email),children:[Object(e.jsx)("small",{children:_()(O.date).format("HH:mm")})," ",(v=O.user)===null||v===void 0?void 0:v.email]})})})},O.consultation_term_id)}return null})})},[K]);return Object(e.jsxs)($.a.Fragment,{children:[b&&Object(e.jsx)(x.a,{}),Object(e.jsx)(Tt.a,{dateCellRender:l}),b?Object(e.jsx)(x.a,{}):Object(e.jsx)(St.a,{headerTitle:k.formatMessage({id:"Consultations",defaultMessage:"Consultations"}),loading:b,rowKey:"consultation_term_id",search:!1,request:Object(Y.a)(Object(B.a)().mark(function d(){return Object(B.a)().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.abrupt("return",{data:K,total:K.length,success:!0});case 1:case"end":return o.stop()}},d)})),columns:[].concat(Ut,[{title:Object(e.jsx)(a.a,{id:"options",defaultMessage:"options"}),dataIndex:"option",valueType:"option",width:"20%",render:function(O,o){return[Object(e.jsx)(It,{data:o,onChange:function(){return H()}},"change_date")]}}])})]})},Ft=Bt,$t=t("J+hL"),Wt=t("q34N"),At=t("5RzD"),Kt=function(){var i=Object(a.l)(),c=Object(mt.l)(),n=c.consultation,M=c.tab,b=M===void 0?"attributes":M,P=n==="new",z=Object(r.useState)(!1),Q=Object(g.a)(z,2),K=Q[0],F=Q[1],k=Object(r.useState)(),H=Object(g.a)(k,2),l=H[0],d=H[1],O=Object(Dt.a)(),o=O.manageCourseEdit,u=O.setManageCourseEdit,f=O.validateCourseEdit,v=p.a.useForm(),I=Object(g.a)(v,1),Ot=I[0],dt=Object(r.useCallback)(Object(Y.a)(Object(B.a)().mark(function J(){var m,G;return Object(B.a)().wrap(function(Z){for(;;)switch(Z.prev=Z.next){case 0:return Z.next=2,Object(tt.e)(Number(n));case 2:m=Z.sent,m.success&&(b==="attributes"&&f(m.data),d(Object(s.a)(Object(s.a)({},m.data),{},{author_id:m.data.author&&m.data.author.id,categories:(G=m.data.categories)===null||G===void 0?void 0:G.map(ot.a)})));case 4:case"end":return Z.stop()}},J)})),[n]);Object(r.useEffect)(function(){if(P){d({name:"new"});return}dt()},[n]);var at=Object(r.useMemo)(function(){return{onFinish:function(){var J=Object(Y.a)(Object(B.a)().mark(function G(vt){var Z,w;return Object(B.a)().wrap(function(L){for(;;)switch(L.prev=L.next){case 0:if(!o.disableEdit){L.next=3;break}return u({showModal:!0,disableEdit:!0,clicked:!1}),L.abrupt("return");case 3:if(Z=Object(s.a)(Object(s.a)({},vt),{},{image_url:l&&l.image_url,image_path:l&&l.image_url&&Object(ot.j)(l.image_url),logotype_url:l&&l.logotype_url,logotype_path:l&&l.logotype_path&&Object(ot.j)(l.logotype_path)}),!P){L.next=11;break}return L.next=7,Object(tt.c)(Z);case 7:w=L.sent,w.success&&(F(!1),a.f.push("/other/consultations/".concat(w.data.id))),L.next=15;break;case 11:return L.next=13,Object(tt.g)(Number(n),Z);case 13:w=L.sent,w.success&&(F(!1),f(w.data),a.f.push("/other/consultations/".concat(w.data.id,"/").concat(b)));case 15:U.b.success(w.message);case 16:case"end":return L.stop()}},G)}));function m(G){return J.apply(this,arguments)}return m}(),initialValues:l}},[l,n,b,o]);return l?Object(e.jsx)(rt.a,{title:P?Object(e.jsx)(a.a,{id:"consultation"}):Object(e.jsx)(a.a,{id:"consultations.edit"}),header:{breadcrumb:{routes:[{path:"other/consultations",breadcrumbName:i.formatMessage({id:"menu.Other activities.Consultations"})},{path:String(n),breadcrumbName:i.formatMessage({id:"form"})},{path:"/",breadcrumbName:String(l.name)},{path:String(b),breadcrumbName:String(l.name)}]}},children:Object(e.jsxs)(V.a,{tabs:{type:"card",activeKey:b,onChange:function(m){return a.f.push("/other/consultations/".concat(n,"/").concat(m))}},children:[Object(e.jsxs)(V.a.TabPane,{tab:Object(e.jsx)(a.a,{id:"attributes"}),children:[o.disableEdit&&Object(e.jsx)(N.a,{closable:!0,style:{marginBottom:"20px"},type:"warning",message:Object(e.jsx)(a.a,{id:"course_edit_warning_message",defaultMessage:"course_edit_warning_message"}),action:Object(e.jsx)(y.a,{onClick:function(){return u({showModal:!0,disableEdit:!0,clicked:!0})},type:"primary",children:Object(e.jsx)(a.a,{id:"questionnaire.submit",defaultMessage:"questionnaire.submit"})})}),Object(e.jsx)(Ct.a,{show:K})," ",Object(e.jsx)(yt.a,{visible:o.showModal,setManage:u}),Object(e.jsxs)(p.a,Object(s.a)(Object(s.a)({},at),{},{form:Ot,onValuesChange:function(){F(!0)},children:[Object(e.jsxs)(p.a.Group,{children:[Object(e.jsx)(q.a,{width:"md",name:"name",label:Object(e.jsx)(a.a,{id:"name"}),tooltip:Object(e.jsx)(a.a,{id:"name"}),placeholder:i.formatMessage({id:"name",defaultMessage:"name"}),required:!0,disabled:o.disableEdit}),Object(e.jsx)(q.a,{width:"sm",name:"duration",label:Object(e.jsx)(a.a,{id:"duration"}),tooltip:Object(e.jsx)(a.a,{id:"duration"}),placeholder:i.formatMessage({id:"duration",defaultMessage:"duration"}),disabled:o.disableEdit}),Object(e.jsx)(st.a,{name:"status",width:"sm",label:Object(e.jsx)(a.a,{id:"status"}),tooltip:Object(e.jsx)(a.a,{id:"status_consultation_tooltip"}),valueEnum:{draft:i.formatMessage({id:"draft",defaultMessage:"draft"}),published:i.formatMessage({id:"published",defaultMessage:"published"}),archived:i.formatMessage({id:"archived",defaultMessage:"archived"})},initialValue:it.draft,placeholder:i.formatMessage({id:"status"}),rules:[{required:!0,message:Object(e.jsx)(a.a,{id:"select"})}],disabled:o.disableEdit})]}),Object(e.jsxs)(p.a.Group,{children:[Object(e.jsx)(et.a,{width:"sm",name:"active_from",label:Object(e.jsx)(a.a,{id:"active_from"}),tooltip:Object(e.jsx)(a.a,{id:"active_from"}),placeholder:i.formatMessage({id:"active_from",defaultMessage:"active_from"}),disabled:o.disableEdit}),Object(e.jsx)(et.a,{width:"sm",name:"active_to",label:Object(e.jsx)(a.a,{id:"active_to"}),tooltip:Object(e.jsx)(a.a,{id:"active_to"}),placeholder:i.formatMessage({id:"active_to",defaultMessage:"active_to"}),disabled:o.disableEdit}),Object(e.jsx)(p.a.Item,{name:"author_id",label:Object(e.jsx)(a.a,{id:"tutor"}),tooltip:Object(e.jsx)(a.a,{id:"tutor_consultation_tooltip"}),valuePropName:"value",required:!0,children:Object(e.jsx)(ft.a,{})})]}),Object(e.jsx)(p.a.Group,{children:Object(e.jsx)(p.a.Item,{name:"description",label:Object(e.jsx)(a.a,{id:"description"}),tooltip:Object(e.jsx)(a.a,{id:"description_tooltip"}),valuePropName:"value",required:!0,children:Object(e.jsx)(nt.a,{directory:"consultation/".concat(n,"/wysiwyg")})})}),Object(e.jsx)(p.a.Group,{children:Object(e.jsx)(p.a.Item,{valuePropName:"value",name:"proposed_terms",tooltip:Object(e.jsx)(a.a,{id:"proposed_terms_tooltip"}),label:Object(e.jsx)(a.a,{id:"consultations.proposed_terms"}),children:Object(e.jsx)(Pt,{})})})]}))]},"attributes"),!P&&Object(e.jsx)(V.a.TabPane,{tab:Object(e.jsx)(a.a,{id:"product"}),disabled:o.disableEdit,children:n&&Object(e.jsx)(Wt.a,{type:"line",productable:{class_type:"App\\Models\\Consultation",class_id:n,name:String(l.name),quantity:1}})},"product"),!P&&Object(e.jsx)(V.a.TabPane,{tab:Object(e.jsx)(a.a,{id:"media"}),disabled:o.disableEdit,children:Object(e.jsx)(p.a,Object(s.a)(Object(s.a)({},at),{},{children:Object(e.jsx)(ut.a,{folder:"consultation/".concat(n),title:"image",action:"/api/admin/consultations/".concat(n),src_name:"image_url",form_name:"image",getUploadedSrcField:function(m){return m.file.response.data.image_url},setPath:function(m){return d(function(G){return Object(s.a)(Object(s.a)({},G),m)})}})}))},"media"),!P&&Object(e.jsx)(V.a.TabPane,{tab:Object(e.jsx)(a.a,{id:"categories"}),disabled:o.disableEdit,children:Object(e.jsx)(C.a,{children:Object(e.jsx)(D.a,{span:12,children:Object(e.jsx)(p.a,Object(s.a)(Object(s.a)({},at),{},{children:Object(e.jsx)(p.a.Item,{label:Object(e.jsx)(a.a,{id:"categories"}),name:"categories",valuePropName:"value",children:Object(e.jsx)(ht.a,{})})}))})})},"categories")," ",!P&&Object(e.jsx)(V.a.TabPane,{tab:Object(e.jsx)(a.a,{id:"branding"}),disabled:o.disableEdit,children:Object(e.jsx)(p.a,Object(s.a)(Object(s.a)({},at),{},{children:Object(e.jsx)(ut.a,{folder:"consultation/".concat(n),title:i.formatMessage({id:"logotype"}),action:"/api/admin/consultations/".concat(n),src_name:"logotype_url",form_name:"logotype",getUploadedSrcField:function(m){return m.file.response.data.logotype_url},setPath:function(m){return d(function(G){return Object(s.a)(Object(s.a)({},G),m)})}})}))},"branding")," ",!P&&Object(e.jsx)(V.a.TabPane,{tab:Object(e.jsx)(a.a,{id:"user_submission"}),disabled:o.disableEdit,children:Object(e.jsx)(C.a,{children:Object(e.jsx)(D.a,{span:12,children:n&&Object(e.jsx)(At.a,{id:Number(n),type:"App\\Models\\Consultation"})})})},"user_submission"),!P&&Object(e.jsx)(V.a.TabPane,{tab:Object(e.jsx)(a.a,{id:"consultations.calendar"}),children:Object(e.jsx)(Ft,{consultation:Number(n)})},"calendar")]})}):Object(e.jsx)(x.a,{})},zt=E.default=Kt}}]);

(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"/y+f":function(re,f,e){"use strict";e.d(f,"c",function(){return u}),e.d(f,"a",function(){return O}),e.d(f,"b",function(){return B});var u;(function(i){i.Unselected="",i.RichText="EscolaLms\\TopicTypes\\Models\\TopicContent\\RichText",i.OEmbed="EscolaLms\\TopicTypes\\Models\\TopicContent\\OEmbed",i.Audio="EscolaLms\\TopicTypes\\Models\\TopicContent\\Audio",i.Video="EscolaLms\\TopicTypes\\Models\\TopicContent\\Video",i.H5P="EscolaLms\\TopicTypes\\Models\\TopicContent\\H5P",i.Image="EscolaLms\\TopicTypes\\Models\\TopicContent\\Image",i.PDF="EscolaLms\\TopicTypes\\Models\\TopicContent\\PDF",i.SCORM="EscolaLms\\TopicTypes\\Models\\TopicContent\\ScormSco",i.Project="EscolaLms\\TopicTypeProject\\Models\\Project"})(u||(u={}));var o;(function(i){i.OrderPaid="EscolaLms\\Cart\\Events\\OrderPaid",i.UserLogged="EscolaLms\\Auth\\Events\\UserLogged"})(o||(o={}));var p;(function(i){i.draft="draft",i.published="published",i.archived="archived"})(p||(p={}));var O;(function(i){i.email="EscolaLms\\TemplatesEmail\\Core\\EmailChannel",i.pdf="EscolaLms\\TemplatesPdf\\Core\\PdfChannel",i.sms="EscolaLms\\TemplatesSms\\Core\\SmsChannel"})(O||(O={}));var B;(function(i){i.ManuallyTriggeredEvent="EscolaLms\\Templates\\Events\\ManuallyTriggeredEvent"})(B||(B={}));var g;(function(i){i.cart_fixed="cart_fixed",i.cart_percent="cart_percent",i.product_fixed="product_fixed",i.product_percent="product_percent"})(g||(g={}))},"0eZe":function(re,f,e){"use strict";var u=e("14J3"),o=e("BMrR"),p=e("jCWc"),O=e("kPKH"),B=e("+BJd"),g=e("mr32"),i=e("oBTY"),T=e("5NDa"),V=e("5rEg"),h=e("T2oS"),K=e("W9HT"),x=e("miYZ"),W=e("tsqr"),b=e("qLMh"),c=e("k1fw"),C=e("9og8"),E=e("tJVT"),l=e("q1tI"),d=e("VMEa"),A=e("Qurx"),w=e("5qq5"),I=e("F/zT"),s=e("FJDo"),r=e("nhC9"),a=e("9kvl"),m=e("vzes"),n=e("DVQu"),v=e("Gn8c"),P=e("TWax"),Pe=e("90Xc"),Te=e("5Dmo"),le=e("3S7+"),Ce=e("+L6B"),N=e("2/Rp"),ne=e("0WSk"),F=e("Qiat"),_=e("/MfK"),t=e("nKUr"),$=[{title:Object(t.jsx)(a.a,{id:"name",defaultMessage:"name"}),dataIndex:"name"},{title:Object(t.jsx)(a.a,{id:"email",defaultMessage:"email"}),dataIndex:"email"}],y=function(S){var U=S.id,pe=Object(a.j)(),z=Object(l.useRef)(),xe=Object(l.useState)(!1),L=Object(E.a)(xe,2),de=L[0],k=L[1],te=d.a.useForm(),G=Object(E.a)(te,1),Ee=G[0],he=Object(l.useCallback)(function(){var Q=Object(C.a)(Object(b.a)().mark(function me(H){var R;return Object(b.a)().wrap(function(D){for(;;)switch(D.prev=D.next){case 0:return k(!0),D.next=3,Object(n.d)(Number(U),{user_id:H.user_id});case 3:Ee.resetFields(),(R=z.current)===null||R===void 0||R.reload(),k(!1);case 6:case"end":return D.stop()}},me)}));return function(me){return Q.apply(this,arguments)}}(),[U]),M=Object(l.useCallback)(function(){var Q=Object(C.a)(Object(b.a)().mark(function me(H){var R;return Object(b.a)().wrap(function(D){for(;;)switch(D.prev=D.next){case 0:return k(!0),D.next=3,Object(n.e)(Number(U),{user_id:H});case 3:(R=z.current)===null||R===void 0||R.reload(),k(!1);case 5:case"end":return D.stop()}},me)}));return function(me){return Q.apply(this,arguments)}}(),[U]);return Object(t.jsxs)(l.Fragment,{children:[Object(t.jsx)(d.a,{layout:"inline",onFinish:he,form:Ee,labelWrap:!0,children:Object(t.jsx)(d.a.Group,{children:Object(t.jsx)(d.a.Item,{name:"user_id",label:Object(t.jsx)(a.a,{id:"users"}),valuePropName:"value",children:Object(t.jsx)(ne.a,{})})})}),Object(t.jsx)(F.a,{defaultSize:"small",loading:de,search:!1,headerTitle:pe.formatMessage({id:"users",defaultMessage:"Users"}),actionRef:z,rowKey:"id",request:Object(C.a)(Object(b.a)().mark(function Q(){return Object(b.a)().wrap(function(H){for(;;)switch(H.prev=H.next){case 0:return k(!0),H.abrupt("return",Object(n.c)(Number(U)).then(function(R){return k(!1),R.success&&R.data.users?{data:R.data.users,total:R.data.users.length,success:!0}:R.success?[]:{data:[],total:0,success:!1}}));case 2:case"end":return H.stop()}},Q)})),columns:[].concat($,[{title:Object(t.jsx)(a.a,{id:"options",defaultMessage:"options"}),dataIndex:"option",valueType:"option",width:"10%",render:function(me,H){return[Object(t.jsx)(le.a,{title:Object(t.jsx)(a.a,{id:"delete",defaultMessage:"delete"}),children:Object(t.jsx)(N.a,{type:"primary",icon:Object(t.jsx)(_.a,{}),danger:!0,onClick:function(){return M(H.id)}})},"delete")]}}])})]})},X=y,q=e("5RzD"),De=e("rnuo"),Se=e("c+yx"),ce=e("hd5d"),Ne=e("DYRE"),Be=e("zeV3"),We=e("rWUb"),Ge=e("OaEy"),Re=e("2fM7"),Fe=function(S){var U=S.value,pe=S.onChange,z=S.multiple,xe=z===void 0?!1:z,L=S.params,de=Object(l.useState)([]),k=Object(E.a)(de,2),te=k[0],G=k[1],Ee=Object(l.useState)(!1),he=Object(E.a)(Ee,2),M=he[0],Q=he[1],me=Object(l.useState)([]),H=Object(E.a)(me,2),R=H[0],Me=H[1],D=Object(l.useRef)(),Ve=Object(l.useCallback)(function(){Q(!0),D.current&&D.current.abort(),D.current=new AbortController,Object(We.e)(L,{signal:D.current.signal}).then(function(Y){Y.success&&G(Y.data),Q(!1)}).catch(function(){return Q(!1)})},[]);return Object(l.useEffect)(function(){var Y=new AbortController;if(U){var Ae=Array.isArray(U)?U:[U],ve=Ae.map(function(ge){return typeof ge=="object"?Number(ge.id):Number(ge)});Me(ve)}return function(){Y.abort()}},[U]),Object(t.jsx)(Re.a,{onFocus:function(){return Ve()},allowClear:!0,style:{width:"100%",minWidth:"400px"},value:R,onChange:pe,mode:xe?"multiple":void 0,showSearch:!0,placeholder:Object(t.jsx)(a.a,{id:"select_template",defaultMessage:"Select a template"}),optionFilterProp:"children",filterOption:function(Ae,ve){if(ve&&ve.children){var ge;return(ve==null||(ge=ve.children)===null||ge===void 0?void 0:ge.toString().toLowerCase().indexOf(Ae&&Ae.toLowerCase()||""))>=0}return!1},notFoundContent:M?Object(t.jsx)(K.a,{size:"small"}):null,children:te.map(function(Y){return Object(t.jsxs)(Re.a.Option,{value:Y.id,children:[Y.name," ",Object(t.jsxs)("small",{children:[Object(t.jsx)(a.a,{id:Y.channel.split("\\").pop()}),":",Y.event&&Object(t.jsx)(a.a,{id:Y.event.split("\\").pop()})]})]},Y.id)})})},Ke=Fe,$e=e("/y+f"),je=function(S){var U=S.productId,pe=Object(l.useState)(!1),z=Object(E.a)(pe,2),xe=z[0],L=z[1],de=Object(l.useState)(),k=Object(E.a)(de,2),te=k[0],G=k[1],Ee=Object(a.j)(),he=Object(l.useCallback)(function(){L(!0),typeof te=="number"&&Object(We.g)(Number(te),U).then(function(M){M.success?W.b.success(M.message):W.b.error(M.message)}).catch(function(M){return W.b.error(M.toString())}).finally(function(){return L(!1)})},[te,U]);return Object(t.jsxs)(Be.b,{children:[Object(t.jsx)(Fe,{params:{event:$e.b.ManuallyTriggeredEvent},multiple:!1,value:te,onChange:function(Q){return G(Q)}}),Object(t.jsx)(le.a,{title:Ee.formatMessage({id:"generate_pdf_for_products_tooltip"}),children:Object(t.jsx)(N.a,{loading:xe,onClick:function(){return he()},disabled:!te,children:Object(t.jsx)(a.a,{id:"generate"})})})]})},ee=je,oe=e("qSko"),se=function(S){return S.map(function(U){return{class:U.productable_type,id:Number(U.productable_id),name:U.name,quantity:U.quantity}})},Oe=function(S){var U=Array.isArray(S)?S:[S],pe=U.map(function(z){return typeof z=="object"?z:{id:parseInt(z.split(":")[1]),class:z.split(":")[0],name:z.split(":")[2]}});return pe},be=function(S){var U=S.tab,pe=U===void 0?"attributes":U,z=S.onTabChange,xe=S.id,L=S.productable,de=S.onProductSaved,k=S.type,te=k===void 0?"card":k,G=Object(a.j)(),Ee=Object(l.useState)(xe),he=Object(E.a)(Ee,2),M=he[0],Q=he[1],me=Object(l.useState)([]),H=Object(E.a)(me,2),R=H[0],Me=H[1],D=Object(l.useMemo)(function(){return M==="new"},[M]),Ve=Object(l.useState)(!0),Y=Object(E.a)(Ve,2),Ae=Y[0],ve=Y[1],ge=Object(l.useState)(null),ze=Object(E.a)(ge,2),Je=ze[0],Xe=ze[1],ke=Object(l.useState)({}),qe=Object(E.a)(ke,2),et=qe[1],tt=Object(l.useCallback)(function(){return et({})},[]),at=d.a.useForm(),rt=Object(E.a)(at,1),ye=rt[0],nt=Object(l.useState)(!1),Qe=Object(E.a)(nt,2),He=Qe[0],Ye=Qe[1];Object(l.useEffect)(function(){L&&L.class_id&&L.class_type&&(Object(n.f)({productable_id:Number(L.class_id),productable_type:L.class_type}).then(function(J){J.success&&Q(J.data.id)}).catch(function(){console.log("err"),Q("new")}),Me([{class:L.class_type,id:Number(L.class_id),name:L.name}]),ye.setFieldsValue({productables:[{class:L.class_type,id:L.class_id,name:L.name}]}))},[L]);var st=Object(l.useCallback)(Object(C.a)(Object(b.a)().mark(function J(){var j,ie,Ie,_e,ae,Ue,Z;return Object(b.a)().wrap(function(Le){for(;;)switch(Le.prev=Le.next){case 0:if(!(M&&M!=="new")){Le.next=5;break}return Le.next=3,Object(n.c)(Number(M));case 3:j=Le.sent,j.success&&(ae=Object(c.a)(Object(c.a)({},j.data),{},{categories:(ie=j.data.categories)===null||ie===void 0?void 0:ie.map(Se.a),tags:(Ie=j.data.tags)===null||Ie===void 0?void 0:Ie.map(function(lt){return Object(Se.g)(lt)}),productables:j.data.productables?se(j.data.productables):[]}),j.data&&j!==null&&j!==void 0&&(_e=j.data)!==null&&_e!==void 0&&_e.productables&&Xe(j==null||(Ue=j.data)===null||Ue===void 0||(Z=Ue.productables[0])===null||Z===void 0?void 0:Z.productable_type),Me(se(j.data.productables)),ye.setFieldsValue(ae),Ye(j.data.type==="bundle"));case 5:ve(!1);case 6:case"end":return Le.stop()}},J)})),[M]);Object(l.useEffect)(function(){M&&st()},[M]);var we=Object(l.useMemo)(function(){return{onValuesChange:function(j){j.type&&Ye(j.type==="bundle")},onFinish:function(){var J=Object(C.a)(Object(b.a)().mark(function ie(Ie){var _e,ae;return Object(b.a)().wrap(function(Z){for(;;)switch(Z.prev=Z.next){case 0:if(_e=Object(c.a)(Object(c.a)({},Ie),{},{productables:R?Oe(R):void 0}),!D){Z.next=8;break}return Z.next=4,Object(n.a)(_e);case 4:ae=Z.sent,ae.success&&(de&&de(ae.data),Q(ae.data.id),ye.setFieldsValue(ae.data)),Z.next=12;break;case 8:return Z.next=10,Object(n.i)(Number(M),_e);case 10:ae=Z.sent,ae.success&&de&&de(ae.data);case 12:W.b.success(ae.message);case 13:case"end":return Z.stop()}},ie)}));function j(ie){return J.apply(this,arguments)}return j}()}},[M,de,R]);return Ae?Object(t.jsx)(K.a,{}):Object(t.jsxs)(r.a,{title:te==="line"?Object(t.jsx)(a.a,{id:"product_widget_title",defaultMessage:"Product Attibutes"}):null,tooltip:te==="line"?Object(t.jsx)(a.a,{id:"product_widget_tooltip",defaultMessage:"All attributes below are related only to product"}):null,subTitle:te==="line"?Object(t.jsx)(a.a,{id:"product_widget_tooltip",defaultMessage:"All attributes below are related only to product"}):null,tabs:{type:te,activeKey:pe,onChange:function(j){return z(j)}},children:[Object(t.jsxs)(r.a.TabPane,{tab:Object(t.jsx)(a.a,{id:"attributes"}),children:[Object(t.jsxs)(d.a,Object(c.a)(Object(c.a)({},we),{},{form:ye,children:[Object(t.jsxs)(d.a.Group,{children:[Object(t.jsx)(A.a,{width:"md",name:"name",initialValue:D&&L?L.name:void 0,label:Object(t.jsx)(a.a,{id:"name"}),tooltip:Object(t.jsx)(a.a,{id:"name_tooltip"}),placeholder:G.formatMessage({id:"name",defaultMessage:"name"}),required:!0}),Object(t.jsx)(d.a.Item,{shouldUpdate:!0,style:{minWidth:104*3},name:"productables",tooltip:Object(t.jsx)(a.a,{id:"productables_tooltip"}),label:Object(t.jsx)(a.a,{id:"productables"}),valuePropName:"value",children:Object(t.jsx)(m.a,{multiple:He,disabled:L!==void 0,onChange:function(j){return Me(Oe(j))}})})]}),Object(t.jsxs)(d.a.Group,{children:[Object(t.jsx)(w.a.Group,{disabled:L!==void 0,initialValue:M&&M!=="new"?void 0:"single",rules:[{required:!0}],name:"type",label:Object(t.jsx)(a.a,{id:"type"}),options:[{label:G.formatMessage({id:"single",defaultMessage:"single"}),value:"single"},{label:G.formatMessage({id:"bundle",defaultMessage:"bundle"}),value:"bundle"}]}),Object(t.jsx)(I.a,{name:"purchasable",label:Object(t.jsx)(a.a,{id:"purchasable"}),tooltip:Object(t.jsx)(a.a,{id:"purchasable_tooltip"})})]}),Object(t.jsxs)(d.a.Group,{title:Object(t.jsx)(a.a,{id:"prices"}),children:[Object(t.jsx)(s.a,{rules:[{required:!0}],width:"xs",name:"price",label:Object(t.jsx)(a.a,{id:"price"}),tooltip:Object(t.jsx)(a.a,{id:"price_tooltip"}),placeholder:G.formatMessage({id:"price",defaultMessage:"price"}),min:0,max:99999,fieldProps:{step:1}}),Object(t.jsx)(s.a,{rules:[{required:!0}],width:"xs",name:"tax_rate",label:Object(t.jsx)(a.a,{id:"tax_rate"}),tooltip:Object(t.jsx)(a.a,{id:"tax_rate_tooltip"}),placeholder:G.formatMessage({id:"tax_rate",defaultMessage:"tax_rate"}),initialValue:D?23:void 0,min:0,max:100,fieldProps:{step:1,formatter:function(j){return"".concat(j,"%")},parser:function(j){return j?j.replace("%",""):""}}}),Object(t.jsx)(d.a.Item,{shouldUpdate:!0,label:Object(t.jsx)(a.a,{id:"price_brutto"}),tooltip:Object(t.jsx)(a.a,{id:"price_brutto_tooltip"}),style:{width:104},children:function(j){return Object(t.jsx)(V.a,{disabled:!0,readOnly:!0,value:j.getFieldValue("price")?Math.round(parseInt(j.getFieldValue("price"))*(1+parseInt(j.getFieldValue("tax_rate"))/100)):void 0})}}),Object(t.jsx)(d.a.Item,{shouldUpdate:!0,label:Object(t.jsx)(a.a,{id:"tax_value"}),tooltip:Object(t.jsx)(a.a,{id:"tax_value_tooltip"}),children:function(j){return Object(t.jsx)(V.a,{disabled:!0,readOnly:!0,value:j.getFieldValue("price")?Math.round(parseInt(j.getFieldValue("price"))*(parseInt(j.getFieldValue("tax_rate"))/100)):void 0})}}),Object(t.jsx)(s.a,{width:"xs",name:"price_old",label:Object(t.jsx)(a.a,{id:"price_old"}),tooltip:Object(t.jsx)(a.a,{id:"price_old_tooltip"}),placeholder:G.formatMessage({id:"price",defaultMessage:"price"}),min:0,max:99999,fieldProps:{step:1}}),Object(t.jsx)(s.a,{initialValue:D?null:void 0,width:"xs",name:"extra_fees",label:Object(t.jsx)(a.a,{id:"extra_fees"}),tooltip:Object(t.jsx)(a.a,{id:"extra_fees_tooltip"}),placeholder:G.formatMessage({id:"extra_fees",defaultMessage:"extra_fees"}),min:0,max:99999,fieldProps:{step:1}})]}),Object(t.jsxs)(d.a.Group,{title:Object(t.jsx)(a.a,{id:"additional_fields"}),children:[Object(t.jsx)(A.a,{width:"md",name:"duration",label:Object(t.jsx)(a.a,{id:"duration"}),tooltip:Object(t.jsx)(a.a,{id:"duration_tooltip"}),placeholder:G.formatMessage({id:"duration",defaultMessage:"duration"})}),Object(t.jsx)(s.a,{initialValue:D?null:void 0,width:"xs",name:"limit_per_user",label:Object(t.jsx)(a.a,{id:"limit_per_user"}),tooltip:Object(t.jsx)(a.a,{id:"limit_per_user_tooltip"}),placeholder:G.formatMessage({id:"limit_per_user",defaultMessage:"limit_per_user"}),min:0,max:99999,fieldProps:{step:1}}),Object(t.jsx)(s.a,{initialValue:D?null:void 0,width:"xs",name:"limit_total",label:Object(t.jsx)(a.a,{id:"limit_total"}),tooltip:Object(t.jsx)(a.a,{id:"limit_total_tooltip"}),placeholder:G.formatMessage({id:"limit_total",defaultMessage:"limit_total"}),min:0,max:99999,fieldProps:{step:1}}),Object(t.jsx)(A.a,{width:"md",name:"teaser_url",label:Object(t.jsx)(a.a,{id:"teaser_url"}),tooltip:Object(t.jsx)(a.a,{id:"teaser_url_tooltip"}),placeholder:G.formatMessage({id:"teaser_url",defaultMessage:"teaser_url"})})]})," ",Object(t.jsx)(d.a.Item,{shouldUpdate:!0,name:"related_products",label:Object(t.jsx)(a.a,{id:"related_products"}),valuePropName:"value",children:Je&&Object(t.jsx)(oe.a,{type:Je,multiple:!0})}),!D&&Object(t.jsx)(d.a.Item,{style:{width:"100%"},name:"description",label:Object(t.jsx)(a.a,{id:"description"}),tooltip:Object(t.jsx)(a.a,{id:"description_tooltip"}),valuePropName:"value",children:Object(t.jsx)(ce.a,{directory:"products/".concat(M,"/wysiwyg")})}),R.length>0&&He&&Object(t.jsx)(F.a,{headerTitle:G.formatMessage({id:"selected_products",defaultMessage:"Selected Products"}),pagination:!1,search:!1,dataSource:Object(i.a)(R),rowKey:"id",columns:[{title:Object(t.jsx)(a.a,{id:"id",defaultMessage:"id"}),dataIndex:"id",width:"10%"},{title:Object(t.jsx)(a.a,{id:"name",defaultMessage:"name"}),dataIndex:"name"},{title:Object(t.jsx)(a.a,{id:"type",defaultMessage:"type"}),dataIndex:"class",render:function(j,ie){return Object(t.jsx)(g.a,{children:Object(t.jsx)(a.a,{id:ie.class.split("\\").pop(),defaultMessage:ie.class.split("\\").pop()})})}},{title:Object(t.jsx)(a.a,{id:"quantity",defaultMessage:"quantity"}),dataIndex:"quantity",width:"10%",render:function(j,ie){return Object(t.jsx)(V.a,{min:1,type:"number",value:ie.quantity||1,onChange:function(_e){var ae=_e.target.value,Ue=R.findIndex(function(Ze){return Ze.id===ie.id}),Z=R;Z[Ue].quantity=Number(ae),Me(Z),tt()}})}}]})]}))," "]},"attributes"),!D&&Object(t.jsx)(r.a.TabPane,{tab:Object(t.jsx)(a.a,{id:"cart_media",defaultMessage:"Cart Media"}),children:Object(t.jsx)(d.a,Object(c.a)(Object(c.a)({},we),{},{form:ye,children:Object(t.jsx)(v.a,{folder:"products/".concat(M),wrapInForm:!1,title:"image",action:"/api/admin/products/".concat(M,"/?_method=PUT"),src_name:"poster_url",form_name:"poster",getUploadedSrcField:function(j){return j.file.response.data.poster_url},setPath:function(j){return ye.setFieldsValue(j)}})}))},"media"),!D&&Object(t.jsx)(r.a.TabPane,{tab:Object(t.jsx)(a.a,{id:"product_categories_and_tags",defaultMessage:"Product Categories & Tags"}),children:Object(t.jsx)(d.a,Object(c.a)(Object(c.a)({},we),{},{form:ye,children:Object(t.jsxs)(o.a,{children:[Object(t.jsx)(O.a,{span:12,children:Object(t.jsx)(d.a.Item,{label:Object(t.jsx)(a.a,{id:"categories"}),name:"categories",valuePropName:"value",children:Object(t.jsx)(P.a,{})})}),Object(t.jsx)(O.a,{span:12,children:Object(t.jsx)(d.a.Item,{label:Object(t.jsx)(a.a,{id:"tags"}),name:"tags",valuePropName:"value",children:Object(t.jsx)(De.a,{})})})]})}))},"categories"),!D&&Object(t.jsx)(r.a.TabPane,{tab:Object(t.jsx)(a.a,{id:"users_attached",defaultMessage:"Users Attached"}),children:Object(t.jsx)(o.a,{children:Object(t.jsx)(O.a,{span:24,children:M&&Object(t.jsx)(X,{id:M})})})},"users")," ",!D&&Object(t.jsx)(r.a.TabPane,{tab:Object(t.jsx)(a.a,{id:"user_submission",defaultMessage:"Users Attached without Account"}),children:Object(t.jsx)(o.a,{children:Object(t.jsx)(O.a,{span:12,children:M&&Object(t.jsx)(q.a,{id:Number(M),type:"EscolaLms\\Cart\\Models\\Product"})})})},"user_submission"),!D&&M&&Object(t.jsx)(r.a.TabPane,{tab:Object(t.jsx)(a.a,{id:"template"}),children:Object(t.jsx)(o.a,{children:Object(t.jsx)(O.a,{span:12,children:Object(t.jsx)(ee,{productId:Number(M)})})})},"template")]})},ue=f.a=be},"5RzD":function(re,f,e){"use strict";var u=e("miYZ"),o=e("tsqr"),p=e("k1fw"),O=e("P2fV"),B=e("NJEC"),g=e("5Dmo"),i=e("3S7+"),T=e("+L6B"),V=e("2/Rp"),h=e("qLMh"),K=e("9og8"),x=e("tJVT"),W=e("q1tI"),b=e("VMEa"),c=e("9kvl"),C=e("Qiat"),E=e("xvlK"),l=e("/MfK");function d(F,_){return A.apply(this,arguments)}function A(){return A=Object(K.a)(Object(h.a)().mark(function F(_,t){return Object(h.a)().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return y.abrupt("return",Object(c.g)("/api/admin/user-submissions",Object(p.a)({method:"GET",params:Object(p.a)(Object(p.a)({},_),{},{per_page:_&&_.pageSize,page:_&&_.current})},t||{})));case 1:case"end":return y.stop()}},F)})),A.apply(this,arguments)}function w(F,_){return I.apply(this,arguments)}function I(){return I=Object(K.a)(Object(h.a)().mark(function F(_,t){return Object(h.a)().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return y.abrupt("return",Object(c.g)("/api/admin/user-submissions",Object(p.a)({method:"POST",headers:{"Content-Type":"application/json"},data:_},t||{})));case 1:case"end":return y.stop()}},F)})),I.apply(this,arguments)}function s(F,_){return r.apply(this,arguments)}function r(){return r=Object(K.a)(Object(h.a)().mark(function F(_,t){return Object(h.a)().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return y.abrupt("return",Object(c.g)("/api/admin/user-submissions/".concat(_),Object(p.a)({method:"DELETE",headers:{"Content-Type":"application/json"}},t||{})));case 1:case"end":return y.stop()}},F)})),r.apply(this,arguments)}var a=e("y8nQ"),m=e("Vl3Y"),n=e("rmhi"),v=e("Qurx"),P=e("nKUr"),Pe=function(_){var t=Object(c.j)(),$=_.visible,y=_.onVisibleChange,X=_.onFinish,q=_.id,De=m.a.useForm(),Se=Object(x.a)(De,1),ce=Se[0];return Object(P.jsx)(n.a,{form:ce,title:t.formatMessage({id:"email",defaultMessage:"email"}),width:"30vw",visible:$,onVisibleChange:y,onFinish:X,children:Object(P.jsx)(b.a.Group,{children:Object(P.jsx)(v.a,{width:"md",name:"email",label:Object(P.jsx)(c.a,{id:"email"}),tooltip:Object(P.jsx)(c.a,{id:"email_tooltip"}),placeholder:t.formatMessage({id:"email",defaultMessage:"email"}),required:!0})})})},Te=Pe,le=e("MvUh"),Ce=[{title:Object(P.jsx)(c.a,{id:"id",defaultMessage:"id"}),dataIndex:"id",hideInSearch:!0},{title:Object(P.jsx)(c.a,{id:"email",defaultMessage:"email"}),dataIndex:"email",hideInSearch:!1,width:"70%"},{title:Object(P.jsx)(c.a,{id:"status",defaultMessage:"status"}),dataIndex:"status",hideInSearch:!0}],N=function(_){var t=_.id,$=_.type,y=Object(c.j)(),X=Object(W.useRef)(),q=Object(W.useState)(!1),De=Object(x.a)(q,2),Se=De[0],ce=De[1],Ne=b.a.useForm(),Be=Object(x.a)(Ne,1),We=Be[0],Ge=Object(W.useState)(!1),Re=Object(x.a)(Ge,2),Fe=Re[0],Ke=Re[1],$e=Object(W.useCallback)(function(){var je=Object(K.a)(Object(h.a)().mark(function ee(oe){var se;return Object(h.a)().wrap(function(be){for(;;)switch(be.prev=be.next){case 0:return ce(!0),be.next=3,s(Number(oe));case 3:(se=X.current)===null||se===void 0||se.reload(),ce(!1);case 5:case"end":return be.stop()}},ee)}));return function(ee){return je.apply(this,arguments)}}(),[t,$]);return Object(P.jsxs)(W.Fragment,{children:[Object(P.jsx)(C.a,{defaultSize:"small",loading:Se,search:{},headerTitle:y.formatMessage({id:"user_submission",defaultMessage:"user_submission"}),actionRef:X,toolBarRender:function(){return[Object(P.jsxs)(V.a,{type:"primary",onClick:function(){return Ke(!0)},children:[Object(P.jsx)(E.a,{})," ",Object(P.jsx)(c.a,{id:"email_to_add",defaultMessage:"email_to_add"})]},"primary")]},rowKey:"id",request:function(){var je=Object(K.a)(Object(h.a)().mark(function ee(oe){var se,Oe,be;return Object(h.a)().wrap(function(fe){for(;;)switch(fe.prev=fe.next){case 0:return se=oe.email,Oe=oe.pageSize,be=oe.current,ce(!0),fe.abrupt("return",d({email:se,pageSize:Oe,current:be,morphable_type:$,morphable_id:t}).then(function(S){return ce(!1),S.success?{data:S.data,total:S.data.length,success:!0}:S.success?[]:{data:[],total:0,success:!1}}));case 3:case"end":return fe.stop()}},ee)}));return function(ee){return je.apply(this,arguments)}}(),columns:[].concat(Ce,[{title:Object(P.jsx)(c.a,{id:"options",defaultMessage:"options"}),dataIndex:"option",valueType:"option",width:"10%",render:function(ee,oe){return[Object(P.jsx)(B.a,{title:Object(P.jsx)(c.a,{id:"deleteQuestion",defaultMessage:"Are you sure to delete this record?"}),onConfirm:function(){return $e(oe.id)},okText:Object(P.jsx)(c.a,{id:"yes"}),cancelText:Object(P.jsx)(c.a,{id:"no"}),children:Object(P.jsx)(i.a,{title:Object(P.jsx)(c.a,{id:"delete",defaultMessage:"delete"}),children:Object(P.jsx)(V.a,{type:"primary",icon:Object(P.jsx)(l.a,{}),danger:!0})})},"delete")]}}])})," ",Object(P.jsx)(Te,{visible:Fe,onVisibleChange:function(ee){return ee===!1&&Ke(!1)},onFinish:function(){var je=Object(K.a)(Object(h.a)().mark(function ee(oe){var se,Oe;return Object(h.a)().wrap(function(ue){for(;;)switch(ue.prev=ue.next){case 0:return ce(!0),ue.prev=1,ue.next=4,w(Object(p.a)(Object(p.a)({},oe),{},{morphable_id:t,morphable_type:$}));case 4:se=ue.sent,se.success&&(We.resetFields(),(Oe=X.current)===null||Oe===void 0||Oe.reload(),ce(!1),Ke(!1)),ue.next=13;break;case 8:ue.prev=8,ue.t0=ue.catch(1),Ke(!1),o.b.error(Object(P.jsx)(c.a,{id:"error",defaultMessage:"error"})),ce(!1);case 13:case"end":return ue.stop()}},ee,null,[[1,8]])}));return function(ee){return je.apply(this,arguments)}}()})]})},ne=f.a=N},"90Xc":function(re,f,e){},DVQu:function(re,f,e){"use strict";e.d(f,"h",function(){return B}),e.d(f,"a",function(){return i}),e.d(f,"c",function(){return V}),e.d(f,"i",function(){return K}),e.d(f,"b",function(){return W}),e.d(f,"g",function(){return c}),e.d(f,"f",function(){return E}),e.d(f,"d",function(){return d}),e.d(f,"e",function(){return w});var u=e("qLMh"),o=e("k1fw"),p=e("9og8"),O=e("9kvl");function B(s,r){return g.apply(this,arguments)}function g(){return g=Object(p.a)(Object(u.a)().mark(function s(r,a){return Object(u.a)().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",Object(O.g)("/api/admin/products",Object(o.a)({method:"GET",params:Object(o.a)(Object(o.a)({},r),{},{free:typeof r.free!="undefined"?r.free==="true"?1:0:void 0,per_page:r.pageSize,page:r.current})},a||{})));case 1:case"end":return n.stop()}},s)})),g.apply(this,arguments)}function i(s,r){return T.apply(this,arguments)}function T(){return T=Object(p.a)(Object(u.a)().mark(function s(r,a){return Object(u.a)().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",Object(O.g)("/api/admin/products",Object(o.a)({method:"POST",data:r},a||{})));case 1:case"end":return n.stop()}},s)})),T.apply(this,arguments)}function V(s,r){return h.apply(this,arguments)}function h(){return h=Object(p.a)(Object(u.a)().mark(function s(r,a){return Object(u.a)().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",Object(O.g)("/api/admin/products/".concat(r),Object(o.a)({method:"GET"},a||{})));case 1:case"end":return n.stop()}},s)})),h.apply(this,arguments)}function K(s,r,a){return x.apply(this,arguments)}function x(){return x=Object(p.a)(Object(u.a)().mark(function s(r,a,m){return Object(u.a)().wrap(function(v){for(;;)switch(v.prev=v.next){case 0:return v.abrupt("return",Object(O.g)("/api/admin/products/".concat(r,"?_method=PUT"),Object(o.a)({method:"POST",data:a},m||{})));case 1:case"end":return v.stop()}},s)})),x.apply(this,arguments)}function W(s,r){return b.apply(this,arguments)}function b(){return b=Object(p.a)(Object(u.a)().mark(function s(r,a){return Object(u.a)().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",Object(O.g)("/api/admin/products/".concat(r),Object(o.a)({method:"DELETE"},a||{})));case 1:case"end":return n.stop()}},s)})),b.apply(this,arguments)}function c(s){return C.apply(this,arguments)}function C(){return C=Object(p.a)(Object(u.a)().mark(function s(r){return Object(u.a)().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.abrupt("return",Object(O.g)("/api/admin/productables",Object(o.a)({method:"GET"},r||{})));case 1:case"end":return m.stop()}},s)})),C.apply(this,arguments)}function E(s,r){return l.apply(this,arguments)}function l(){return l=Object(p.a)(Object(u.a)().mark(function s(r,a){return Object(u.a)().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",Object(O.g)("/api/admin/productables/product",Object(o.a)({method:"GET",params:r},a||{})));case 1:case"end":return n.stop()}},s)})),l.apply(this,arguments)}function d(s,r,a){return A.apply(this,arguments)}function A(){return A=Object(p.a)(Object(u.a)().mark(function s(r,a,m){return Object(u.a)().wrap(function(v){for(;;)switch(v.prev=v.next){case 0:return v.abrupt("return",Object(O.g)("/api/admin/products/".concat(r,"/attach"),Object(o.a)({method:"POST",data:a},m||{})));case 1:case"end":return v.stop()}},s)})),A.apply(this,arguments)}function w(s,r,a){return I.apply(this,arguments)}function I(){return I=Object(p.a)(Object(u.a)().mark(function s(r,a,m){return Object(u.a)().wrap(function(v){for(;;)switch(v.prev=v.next){case 0:return v.abrupt("return",Object(O.g)("/api/admin/products/".concat(r,"/detach"),Object(o.a)({method:"POST",data:a},m||{})));case 1:case"end":return v.stop()}},s)})),I.apply(this,arguments)}},MvUh:function(re,f,e){},TWax:function(re,f,e){"use strict";var u=e("ozfa"),o=e("MJZm"),p=e("T2oS"),O=e("W9HT"),B=e("tJVT"),g=e("q1tI"),i=e.n(g),T=e("JifO"),V=e("nKUr"),h=e.n(V),K=function W(b){return b.subcategories&&b.subcategories.length?{title:b.name,key:b.id,children:b.subcategories.map(function(c){return W(c)})}:{title:b.name,key:b.id}},x=function(b){var c=b.value,C=b.onChange,E=b.multiple,l=E===void 0?!0:E,d=Object(g.useState)([]),A=Object(B.a)(d,2),w=A[0],I=A[1];Object(g.useEffect)(function(){Object(T.c)().then(function(r){return I(r.data)})},[]);var s=Object(g.useMemo)(function(){return w.map(function(r){return K(r)})},[w]);return w.length===0?Object(V.jsx)(O.a,{}):Object(V.jsx)(o.a,{multiple:l,checkable:!0,checkStrictly:!0,defaultExpandAll:!0,style:{width:"100%"},checkedKeys:c,onCheck:function(a){if(typeof a=="object"&&!Array.isArray(a)&&a.checked){var m=a.checked;return C&&Array.isArray(m)&&C(m)}},treeData:s,disabled:w.length===0})};f.a=x},hd5d:function(re,f,e){"use strict";var u=e("qLMh"),o=e("9og8"),p=e("q1tI"),O=e.n(p),B=e("3Ef1"),g=e.n(B),i=e("BAh9"),T=e("vtG9"),V=e.n(T),h=e("9kvl"),K=e("nKUr"),x=e.n(K),W=function(c){var C=c.value,E=c.onChange,l=c.directory,d=l===void 0?"/wysiwyg":l,A=Object(h.j)();return Object(K.jsx)("div",{className:"form-wysiwyg-markdown",children:Object(K.jsx)(g.a,{uploadImage:function(){var w=Object(o.a)(Object(u.a)().mark(function I(s){var r,a;return Object(u.a)().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(i.e)(s,d);case 2:if(r=n.sent,!r.success){n.next=6;break}return a=r.data[0].name.includes("/")?r.data[0].name:"".concat(d).concat(r.data[0].name),n.abrupt("return",Object(i.d)(a,1e3));case 6:throw new Error("Error while uploading");case 7:case"end":return n.stop()}},I)}));return function(I){return w.apply(this,arguments)}}(),defaultValue:C||"",onChange:function(I){return E&&E(I())},placeholder:A.formatMessage({id:"wysiwyg_placeholder"})})})};f.a=W},kMBS:function(re,f,e){"use strict";e.d(f,"a",function(){return B});var u=e("qLMh"),o=e("k1fw"),p=e("9og8"),O=e("9kvl");function B(i){return g.apply(this,arguments)}function g(){return g=Object(p.a)(Object(u.a)().mark(function i(T){return Object(u.a)().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.abrupt("return",Object(O.g)("/api/tags/unique",Object(o.a)({method:"GET",useCache:!1},T||{})));case 1:case"end":return h.stop()}},i)})),g.apply(this,arguments)}},qSko:function(re,f,e){"use strict";var u=e("OaEy"),o=e("2fM7"),p=e("T2oS"),O=e("W9HT"),B=e("tJVT"),g=e("q1tI"),i=e.n(g),T=e("DVQu"),V=e("9kvl"),h=e("nKUr"),K=e.n(h),x=function(b){var c=b.value,C=b.onChange,E=b.multiple,l=E===void 0?!1:E,d=b.type,A=Object(g.useState)([]),w=Object(B.a)(A,2),I=w[0],s=w[1],r=Object(g.useState)(!1),a=Object(B.a)(r,2),m=a[0],n=a[1],v=Object(g.useState)([]),P=Object(B.a)(v,2),Pe=P[0],Te=P[1],le=Object(g.useRef)(),Ce=Object(g.useCallback)(function(){n(!0),le.current&&le.current.abort(),le.current=new AbortController,Object(T.h)({productable_type:d},{signal:le.current.signal}).then(function(N){N.success&&s(d?N.data.filter(function(ne){return ne.type==="single"&&ne.productables&&ne.productables[0].id}):N.data),n(!1)}).catch(function(){return n(!1)})},[]);return Object(g.useEffect)(function(){var N=new AbortController;if(c){var ne=Array.isArray(c)?c:[c],F=ne.map(function(_){return typeof _=="object"?Number(_.id):Number(_)});Te(F)}return function(){N.abort()}},[c]),Object(h.jsx)(o.a,{onFocus:function(){return Ce()},allowClear:!0,style:{width:"100%",minWidth:"150px"},value:Pe,onChange:C,mode:l?"multiple":void 0,showSearch:!0,placeholder:Object(h.jsx)(V.a,{id:"select_product",defaultMessage:"Select a product"}),optionFilterProp:"children",filterOption:function(ne,F){if(F&&F.children){var _;return(F==null||(_=F.children)===null||_===void 0?void 0:_.toString().toLowerCase().indexOf(ne&&ne.toLowerCase()||""))>=0}return!1},notFoundContent:m?Object(h.jsx)(O.a,{size:"small"}):null,children:I.map(function(N){return Object(h.jsx)(o.a.Option,{value:N.id,children:N.name},N.id)})})};f.a=x},rWUb:function(re,f,e){"use strict";e.d(f,"e",function(){return B}),e.d(f,"d",function(){return i}),e.d(f,"a",function(){return V}),e.d(f,"h",function(){return K}),e.d(f,"b",function(){return W}),e.d(f,"i",function(){return c}),e.d(f,"c",function(){return E}),e.d(f,"f",function(){return d}),e.d(f,"g",function(){return w});var u=e("qLMh"),o=e("k1fw"),p=e("9og8"),O=e("9kvl");function B(s,r){return g.apply(this,arguments)}function g(){return g=Object(p.a)(Object(u.a)().mark(function s(r,a){return Object(u.a)().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",Object(O.g)("/api/admin/templates",Object(o.a)({method:"GET",useCache:!1,params:Object(o.a)(Object(o.a)({},r),{},{per_page:r&&r.pageSize,page:r&&r.current})},a||{})));case 1:case"end":return n.stop()}},s)})),g.apply(this,arguments)}function i(s,r){return T.apply(this,arguments)}function T(){return T=Object(p.a)(Object(u.a)().mark(function s(r,a){return Object(u.a)().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",Object(O.g)("/api/admin/templates/".concat(r),Object(o.a)({method:"GET"},a||{})));case 1:case"end":return n.stop()}},s)})),T.apply(this,arguments)}function V(s,r){return h.apply(this,arguments)}function h(){return h=Object(p.a)(Object(u.a)().mark(function s(r,a){return Object(u.a)().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",Object(O.g)("/api/admin/templates",Object(o.a)({method:"POST",headers:{"Content-Type":"application/json"},data:r},a||{})));case 1:case"end":return n.stop()}},s)})),h.apply(this,arguments)}function K(s,r,a){return x.apply(this,arguments)}function x(){return x=Object(p.a)(Object(u.a)().mark(function s(r,a,m){return Object(u.a)().wrap(function(v){for(;;)switch(v.prev=v.next){case 0:return v.abrupt("return",Object(O.g)("/api/admin/templates/".concat(r),Object(o.a)({method:"PATCH",headers:{"Content-Type":"application/json"},data:a},m||{})));case 1:case"end":return v.stop()}},s)})),x.apply(this,arguments)}function W(s,r){return b.apply(this,arguments)}function b(){return b=Object(p.a)(Object(u.a)().mark(function s(r,a){return Object(u.a)().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",Object(O.g)("/api/admin/templates/".concat(r),Object(o.a)({method:"DELETE",headers:{"Content-Type":"application/json"}},a||{})));case 1:case"end":return n.stop()}},s)})),b.apply(this,arguments)}function c(s){return C.apply(this,arguments)}function C(){return C=Object(p.a)(Object(u.a)().mark(function s(r){return Object(u.a)().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.abrupt("return",Object(O.g)("/api/admin/templates/variables",Object(o.a)({method:"GET"},r||{})));case 1:case"end":return m.stop()}},s)})),C.apply(this,arguments)}function E(s,r){return l.apply(this,arguments)}function l(){return l=Object(p.a)(Object(u.a)().mark(function s(r,a){return Object(u.a)().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",Object(O.g)("/api/admin/templates/".concat(r,"/preview"),Object(o.a)({method:"GET"},a||{})));case 1:case"end":return n.stop()}},s)})),l.apply(this,arguments)}function d(s,r,a){return A.apply(this,arguments)}function A(){return A=Object(p.a)(Object(u.a)().mark(function s(r,a,m){return Object(u.a)().wrap(function(v){for(;;)switch(v.prev=v.next){case 0:return v.abrupt("return",Object(O.g)("/api/admin/events/trigger-manually/".concat(r),Object(o.a)({method:"POST",headers:{"Content-Type":"application/json"},data:{users:a}},m||{})));case 1:case"end":return v.stop()}},s)})),A.apply(this,arguments)}function w(s,r,a){return I.apply(this,arguments)}function I(){return I=Object(p.a)(Object(u.a)().mark(function s(r,a,m){return Object(u.a)().wrap(function(v){for(;;)switch(v.prev=v.next){case 0:return v.abrupt("return",Object(O.g)("/api/admin/products/".concat(a,"/trigger-event-manually/").concat(r),Object(o.a)({method:"POST",headers:{"Content-Type":"application/json"}},m||{})));case 1:case"end":return v.stop()}},s)})),I.apply(this,arguments)}},rnuo:function(re,f,e){"use strict";var u=e("tJVT"),o=e("OaEy"),p=e("2fM7"),O=e("q1tI"),B=e.n(O),g=e("kMBS"),i=e("nKUr"),T=e.n(i),V=p.a.Option,h=function(x){var W=x.value,b=x.onChange,c=Object(O.useState)([]),C=Object(u.a)(c,2),E=C[0],l=C[1];return Object(O.useEffect)(function(){Object(g.a)().then(function(d){return l(d.data)})},[]),Object(i.jsx)(p.a,{mode:"tags",showSearch:!0,style:{width:"100%"},placeholder:"Select a Tag",optionFilterProp:"children",onChange:b,value:W,children:E.map(function(d){return Object(i.jsx)(V,{value:d.title,children:d.title},d.title)})})};f.a=h},vtG9:function(re,f,e){},vzes:function(re,f,e){"use strict";var u=e("OaEy"),o=e("2fM7"),p=e("+BJd"),O=e("mr32"),B=e("T2oS"),g=e("W9HT"),i=e("tJVT"),T=e("q1tI"),V=e.n(T),h=e("9kvl"),K=e("DVQu"),x=e("nKUr"),W=e.n(x),b=function(l){return"".concat(l.productable_type,":").concat(l.productable_id,":").concat(l.name)},c=function(l){return"".concat(l.class,":").concat(l.id,":").concat(l.name)},C=function(l){var d=l.value,A=l.onChange,w=l.multiple,I=w===void 0?!1:w,s=l.disabled,r=s===void 0?!1:s,a=Object(T.useState)([]),m=Object(i.a)(a,2),n=m[0],v=m[1],P=Object(T.useState)(!1),Pe=Object(i.a)(P,2),Te=Pe[0],le=Pe[1],Ce=Object(T.useState)([]),N=Object(i.a)(Ce,2),ne=N[0],F=N[1],_=Object(T.useRef)(),t=Object(T.useCallback)(function(){le(!0),_.current&&_.current.abort(),_.current=new AbortController,Object(K.g)({signal:_.current.signal}).then(function($){$.success&&v($.data),le(!1)}).catch(function(){return le(!1)})},[]);return Object(T.useEffect)(function(){t()},[]),Object(T.useEffect)(function(){var $=new AbortController;if(d){var y=Array.isArray(d)?d:[d],X=y.map(function(q){return typeof q=="object"?c(q):String(q)});F(X)}return function(){$.abort()}},[d]),Object(x.jsx)(o.a,{disabled:r,allowClear:!0,style:{width:"100%",minWidth:"150px"},value:ne,onChange:A,mode:I?"multiple":void 0,showSearch:!0,placeholder:Object(x.jsx)(h.a,{id:"select_product",defaultMessage:"Select a product"}),optionFilterProp:"children",filterOption:function(y,X){if(X&&X.children){var q;return(X==null||(q=X.children)===null||q===void 0?void 0:q.toString().toLowerCase().indexOf(y&&y.toLowerCase()||""))>=0}return!1},notFoundContent:Te?Object(x.jsx)(g.a,{size:"small"}):null,children:n.map(function($){var y=b($);return Object(x.jsxs)(o.a.Option,{value:y,children:[Object(x.jsx)(O.a,{children:Object(x.jsx)(h.a,{id:$.productable_type.split("\\").pop(),defaultMessage:$.productable_type.split("\\").pop()})})," ",$.name," ",Object(x.jsxs)("small",{children:["id:",$.productable_id]})," "]},y)})})};f.a=C}}]);

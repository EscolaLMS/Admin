(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{"/y+f":function(ce,E,e){"use strict";e.d(E,"f",function(){return T}),e.d(E,"d",function(){return L}),e.d(E,"e",function(){return h}),e.d(E,"c",function(){return S}),e.d(E,"a",function(){return P}),e.d(E,"b",function(){return M});var T;(function(t){t.Unselected="",t.RichText="EscolaLms\\TopicTypes\\Models\\TopicContent\\RichText",t.OEmbed="EscolaLms\\TopicTypes\\Models\\TopicContent\\OEmbed",t.Audio="EscolaLms\\TopicTypes\\Models\\TopicContent\\Audio",t.Video="EscolaLms\\TopicTypes\\Models\\TopicContent\\Video",t.H5P="EscolaLms\\TopicTypes\\Models\\TopicContent\\H5P",t.Image="EscolaLms\\TopicTypes\\Models\\TopicContent\\Image",t.PDF="EscolaLms\\TopicTypes\\Models\\TopicContent\\PDF",t.SCORM="EscolaLms\\TopicTypes\\Models\\TopicContent\\ScormSco",t.Project="EscolaLms\\TopicTypeProject\\Models\\Project",t.GiftQuiz="EscolaLms\\TopicTypeGift\\Models\\GiftQuiz"})(T||(T={}));var B;(function(t){t.OrderPaid="EscolaLms\\Cart\\Events\\OrderPaid",t.UserLogged="EscolaLms\\Auth\\Events\\UserLogged"})(B||(B={}));var g;(function(t){t.draft="draft",t.published="published",t.archived="archived"})(g||(g={}));var L;(function(t){t.email="EscolaLms\\TemplatesEmail\\Core\\EmailChannel",t.pdf="EscolaLms\\TemplatesPdf\\Core\\PdfChannel",t.sms="EscolaLms\\TemplatesSms\\Core\\SmsChannel"})(L||(L={}));var h;(function(t){t.ManuallyTriggeredEvent="EscolaLms\\Templates\\Events\\ManuallyTriggeredEvent"})(h||(h={}));var O;(function(t){t.cart_fixed="cart_fixed",t.cart_percent="cart_percent",t.product_fixed="product_fixed",t.product_percent="product_percent"})(O||(O={}));var S;(function(t){t.MULTIPLE_CHOICE="multiple_choice",t.MULTIPLE_CHOICE_WITH_MULTIPLE_RIGHT_ANSWERS="multiple_choice_with_multiple_right_answers",t.TRUE_FALSE="true_false",t.SHORT_ANSWERS="short_answers",t.MATCHING="matching",t.NUMERICAL_QUESTION="numerical_question",t.ESSAY="essay",t.DESCRIPTION="description"})(S||(S={}));var P;(function(t){t.PRESENT="present",t.ABSENT="absent"})(P||(P={}));var M;(function(t){t.Manual="manual",t.TeamsForms="teams_forms",t.TeamsLecture="teams_lecture",t.TestPortal="test_portal"})(M||(M={}))},"3fxf":function(ce,E,e){"use strict";var T=e("DjyN"),B=e("NUBc"),g=e("Mwp2"),L=e("VXEj"),h=e("+L6B"),O=e("2/Rp"),S=e("5NDa"),P=e("5rEg"),M=e("oBTY"),t=e("k1fw"),r=e("tJVT"),z=e("DYRE"),d=e("zeV3"),b=e("tU7J"),p=e("wFql"),o=e("q1tI"),f=e.n(o),s=e("BAh9"),H=e("/MfK"),y=e("mAF4"),te=e("dF/Y"),I=e("9kvl"),V=e("DBJ/"),fe=e("lLVY"),X=e.n(fe),n=e("nKUr"),Pe=e.n(n),F=function(ne){var a=ne.directory,de=ne.onUploaded;return Object(n.jsxs)(d.b,{align:"start",children:[Object(n.jsxs)(p.a.Text,{children:[Object(n.jsx)(I.a,{id:"pages.files.filesBrowser"}),Object(n.jsx)(p.a.Text,{code:!0,children:a})]}),Object(n.jsx)(V.a,{url:"/api/admin/file/upload",name:"file[]",data:{target:a},onUpload:function(Oe){Oe.success&&de(a,Oe.data)}})]})},ye=function(ne){var a=ne.defaultDirectory,de=a===void 0?"/":a,q=ne.onFile,Oe=ne.hideDeleteBtn,le=Oe===void 0?!1:Oe,G=ne.forceLoading,R=G===void 0?!1:G,$=Object(I.l)(),ee=Object(o.useState)({loading:!1,name:"",directory:de,current_page:1,data:void 0,per_page:1,last_page:1,total:0}),Z=Object(r.a)(ee,2),C=Z[0],J=Z[1],l=Object(o.useRef)(),K=Object(o.useCallback)(function(m){J(function(i){return Object(t.a)(Object(t.a)({},i),{},{loading:m})})},[]),ae=Object(o.useCallback)(function(m,i){m.success&&J(function(u){return Object(t.a)(Object(t.a)(Object(t.a)({},u),m.data),{},{data:[{url:i.split("/").slice(0,-1).join("/"),name:"..",created_at:"",mime:"directory"}].concat(Object(M.a)(m.data.data.map(function(D){return Object(t.a)(Object(t.a)({},D),{},{url:D.mime==="directory"?"".concat(i,"/").concat(D.name):D.url})}))).filter(function(D){return i==="/"||i===de?D.name!=="..":!0}),directory:i,loading:!1})})},[K]),ie=Object(o.useCallback)(function(m){var i,u=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1,D=function(){return l.current&&l.current.abort()};return D(),l.current=new AbortController,K(!0),Object(s.a)({directory:m,page:u},{signal:(i=l.current)===null||i===void 0?void 0:i.signal}).then(function(A){A.success&&ae(A,m)}).catch(function(){return K(!1)}),function(){D()}},[K]);Object(o.useEffect)(function(){return ie(de)},[de,ie]);var _e=Object(o.useCallback)(function(m){K(!0),Object(s.c)(m).then(function(){ie(C.directory)}).catch(function(){K(!1)})},[ie,K,C.directory]),W=Object(o.useCallback)(function(m,i){var u,D=arguments.length>2&&arguments[2]!==void 0?arguments[2]:1,A=function(){return l.current&&l.current.abort()};return A(),l.current=new AbortController,K(!0),Object(s.b)({directory:m,name:i,page:D},{signal:(u=l.current)===null||u===void 0?void 0:u.signal}).then(function(x){x.success&&ae(x,m)}).catch(function(){return K(!1)}),function(){A()}},[K]);return Object(n.jsxs)("div",{className:"file-browser",children:[Object(n.jsxs)("div",{className:"file-browser__header",children:[Object(n.jsx)(P.a,{placeholder:$.formatMessage({id:"search_file"}),className:"file-browser__input",onChange:function(i){return J(function(u){return Object(t.a)(Object(t.a)({},u),{},{name:i.target.value})})},value:C.name}),Object(n.jsxs)("div",{children:[Object(n.jsx)(O.a,{className:"file-browser__button",onClick:function(){return ie(C.directory)},children:Object(n.jsx)(I.a,{id:"reset"})}),Object(n.jsx)(O.a,{className:"file-browser__button",type:"primary",onClick:function(){return W(C.directory,C.name)},children:Object(n.jsx)(I.a,{id:"query"})})]})]}),Object(n.jsx)(L.b,{loading:C.loading||R,size:"small",itemLayout:"horizontal",dataSource:C.data,header:Object(n.jsx)(F,{directory:C.directory,onUploaded:function(i,u){u&&(ie(i),q&&q(u,i))}}),footer:Object(n.jsx)(F,{directory:C.directory,onUploaded:function(i,u){ie(i),u&&q&&q(u,i)}}),renderItem:function(i){return Object(n.jsx)(L.b.Item,{actions:i.mime!=="directory"&&!le?[Object(n.jsx)(O.a,{type:"default",danger:!0,icon:Object(n.jsx)(H.a,{}),size:"small",onClick:function(){return _e(i.url)}},"dir")]:[],children:Object(n.jsx)(L.b.Item.Meta,{avatar:i.mime==="directory"?Object(n.jsx)(O.a,{type:"primary",icon:Object(n.jsx)(y.a,{}),size:"small",onClick:function(){return ie(i.url)}}):Object(n.jsx)("a",{href:i.url,target:"_blank",rel:"noreferrer",children:Object(n.jsx)(O.a,{type:"default",icon:Object(n.jsx)(te.a,{}),size:"small"})}),description:Object(n.jsx)(f.a.Fragment,{children:Object(n.jsx)(O.a,{type:"text",size:"small",onClick:function(){return i.mime==="directory"?ie(i.url):q&&q(i,C.directory)},children:i.name})})})})}}),Object(n.jsx)(B.a,{pageSizeOptions:[],current:C.current_page,total:C.total,pageSize:C.per_page,onChange:function(i){return ie(C.directory,i)}})]})};E.a=ye},"5qq5":function(ce,E,e){"use strict";var T=e("7Kak"),B=e("9yH6"),g=e("VTBJ"),L=e("Ff2n"),h=e("nKUr"),O=e.n(h),S=e("uX+g"),P=e("q1tI"),M=e.n(P),t=e("WFLz"),r=e("adzw"),z=["fieldProps","options","radioType","layout","proFieldProps","valueEnum"],d=M.a.forwardRef(function(f,s){var H=f.fieldProps,y=f.options,te=f.radioType,I=f.layout,V=f.proFieldProps,fe=f.valueEnum,X=Object(L.a)(f,z);return Object(h.jsx)(r.a,Object(g.a)(Object(g.a)({valueType:te==="button"?"radioButton":"radio",ref:s,valueEnum:Object(S.a)(fe,void 0)},X),{},{fieldProps:Object(g.a)({options:y,layout:I},H),proFieldProps:V,filedConfig:{customLightMode:!0}}))}),b=M.a.forwardRef(function(f,s){var H=f.fieldProps,y=f.children;return Object(h.jsx)(B.a,Object(g.a)(Object(g.a)({},H),{},{ref:s,children:y}))}),p=Object(t.a)(b,{valuePropName:"checked",ignoreWidth:!0}),o=p;o.Group=d,o.Button=B.a.Button,o.displayName="ProFormComponent",E.a=o},BAh9:function(ce,E,e){"use strict";e.d(E,"a",function(){return h}),e.d(E,"b",function(){return S}),e.d(E,"e",function(){return M}),e.d(E,"d",function(){return r}),e.d(E,"c",function(){return z});var T=e("qLMh"),B=e("k1fw"),g=e("9og8"),L=e("9kvl");function h(b,p){return O.apply(this,arguments)}function O(){return O=Object(g.a)(Object(T.a)().mark(function b(p,o){return Object(T.a)().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.abrupt("return",Object(L.i)("/api/admin/file/list",Object(B.a)({method:"GET",params:p},o||{})));case 1:case"end":return s.stop()}},b)})),O.apply(this,arguments)}function S(b,p){return P.apply(this,arguments)}function P(){return P=Object(g.a)(Object(T.a)().mark(function b(p,o){return Object(T.a)().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.abrupt("return",Object(L.i)("/api/admin/file/find",Object(B.a)({method:"GET",params:p},o||{})));case 1:case"end":return s.stop()}},b)})),P.apply(this,arguments)}function M(b,p,o){return t.apply(this,arguments)}function t(){return t=Object(g.a)(Object(T.a)().mark(function b(p,o,f){var s;return Object(T.a)().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return s=new FormData,s.append("file[]",p),s.append("target",o),y.abrupt("return",Object(L.i)("/api/admin/file/upload",Object(B.a)({method:"POST",data:s},f||{})));case 4:case"end":return y.stop()}},b)})),t.apply(this,arguments)}var r=function(p){var o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1e3;return"".concat(window.REACT_APP_API_URL||"https://api-stage.escolalms.com","/api/images/img?path=").concat(p,"&w=").concat(o)};function z(b,p){return d.apply(this,arguments)}function d(){return d=Object(g.a)(Object(T.a)().mark(function b(p,o){return Object(T.a)().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.abrupt("return",Object(L.i)("/api/admin/file/delete",Object(B.a)({method:"DELETE",data:{url:p}},o||{})));case 1:case"end":return s.stop()}},b)})),d.apply(this,arguments)}},BiO0:function(ce,E,e){"use strict";var T=e("VTBJ"),B=e("Ff2n"),g=e("nKUr"),L=e.n(g),h=e("q1tI"),O=e.n(h),S=e("adzw"),P=["fieldProps","proFieldProps"],M=function(r,z){var d=r.fieldProps,b=r.proFieldProps,p=Object(B.a)(r,P);return Object(g.jsx)(S.a,Object(T.a)({ref:z,valueType:"textarea",fieldProps:d,proFieldProps:b},p))};E.a=O.a.forwardRef(M)},"DBJ/":function(ce,E,e){"use strict";var T=e("k1fw"),B=e("y8nQ"),g=e("Vl3Y"),L=e("tJVT"),h=e("etVw"),O=e("q1tI"),S=e.n(O),P=e("9kvl"),M=e("qFDU"),t=e("nKUr"),r=e.n(t);function z(d){var b=d.onChange,p=d.onUpload,o=d.url,f=d.name,s=d.extra,H=d.accept,y=d.data,te=d.wrapInForm,I=te===void 0?!0:te,V=d.title,fe=d.formProps,X=d.maxFiles,n=d.clearListAfterUpload,Pe=d.hideLabel,F=Object(O.useState)(),ye=Object(L.a)(F,2),ve=ye[0],ne=ye[1],a=Object(P.l)();return y&&y[f]&&delete y[f],Object(t.jsx)(M.a,{condition:I,wrap:function(q){return Object(t.jsx)(g.a,Object(T.a)(Object(T.a)({},fe),{},{children:q}))},children:Object(t.jsx)(h.a,{title:V||" ".concat(a.formatMessage({id:"upload_click_here"})),placeholder:a.formatMessage({id:"upload_click_here"}),onChange:function(q){ne(q),b&&b(q),q.file.status==="done"&&(p&&p(q.file.response),n&&ne(void 0))},label:!Pe&&Object(t.jsx)(P.a,{id:"upload"}),max:X!=null?X:2,fieldProps:{data:y,accept:H,name:f,headers:{Authorization:"Bearer ".concat(localStorage.getItem("TOKEN"))}},action:"".concat(window.REACT_APP_API_URL||"https://api-stage.escolalms.com").concat(o),extra:s,fileList:ve==null?void 0:ve.fileList})})}E.a=z},FJDo:function(ce,E,e){"use strict";var T=e("VTBJ"),B=e("Ff2n"),g=e("nKUr"),L=e.n(g),h=e("q1tI"),O=e.n(h),S=e("adzw"),P=["fieldProps","min","proFieldProps","max"],M=function(r,z){var d=r.fieldProps,b=r.min,p=r.proFieldProps,o=r.max,f=Object(B.a)(r,P);return Object(g.jsx)(S.a,Object(T.a)({valueType:"digit",fieldProps:Object(T.a)({min:b,max:o},d),ref:z,filedConfig:{defaultProps:{width:"100%"}},proFieldProps:p},f))};E.a=O.a.forwardRef(M)},HEzf:function(ce,E,e){"use strict";var T=e("EFp3"),B=e("O/iA"),g=e("OaEy"),L=e("wx14"),h=e("U8pU"),O=e("ODXe"),S=e("TSYQ"),P=e.n(S),M=e("Zm9Q"),t=e("bT9E"),r=e("q1tI"),z=e.n(r),d=e("H84U"),b=e("2fM7"),p=e("0n0R"),o=b.a.Option;function f(_e){return _e&&_e.type&&(_e.type.isSelectOption||_e.type.isSelectOptGroup)}var s=function(W,m){var i=W.prefixCls,u=W.className,D=W.popupClassName,A=W.dropdownClassName,x=W.children,he=W.dataSource,re=Object(M.a)(x),De;if(re.length===1&&Object(p.c)(re[0])&&!f(re[0])){var be=Object(O.a)(re,1);De=be[0]}var Le=De?function(){return De}:void 0,Re;return re.length&&f(re[0])?Re=x:Re=he?he.map(function(me){if(Object(p.c)(me))return me;switch(Object(h.a)(me)){case"string":return r.createElement(o,{key:me,value:me},me);case"object":{var oe=me.value;return r.createElement(o,{key:oe,value:oe},me.text)}default:return}}):[],r.createElement(d.a,null,function(me){var oe=me.getPrefixCls,Ce=oe("select",i);return r.createElement(b.a,Object(L.a)({ref:m},Object(t.a)(W,["dataSource"]),{prefixCls:Ce,popupClassName:D||A,className:P()("".concat(Ce,"-auto-complete"),u),mode:b.a.SECRET_COMBOBOX_MODE_DO_NOT_USE},{getInputElement:Le}),Re)})},H=r.forwardRef(s);H.Option=o;var y=H,te=e("y8nQ"),I=e("Vl3Y"),V=e("+L6B"),fe=e("2/Rp"),X=e("5NDa"),n=e("5rEg"),Pe=e("tJVT"),F=e("VMEa"),ye=e("rmhi"),ve=e("Qurx"),ne=e("F/zT"),a=e("5qq5"),de=e("BiO0"),q=e("tneF"),Oe=e("FJDo"),le=e("9kvl"),G=e("+up7"),R=e("hd5d"),$=e("3fxf"),ee=e("ovOe"),Z=e.n(ee),C=e("bRQS"),J=e("4i/N"),l=e("nKUr"),K=function(W){var m=W.value,i=W.onChange,u=W.type,D=u===void 0?"file":u,A=Object(r.useState)(!1),x=Object(Pe.a)(A,2),he=x[0],re=x[1];return Object(l.jsxs)(z.a.Fragment,{children:[Object(l.jsxs)(F.a.Group,{children:[Object(l.jsx)(n.a,{value:m,readOnly:!0}),Object(l.jsxs)(fe.a,{size:"small",type:"primary",onClick:function(){return re(!he)},children:["toggle ",D," browser"]})]}),he&&Object(l.jsx)($.a,{onFile:function(be,Le){return i&&i("".concat(Le,"/").concat(be.name))}})]})},ae=function(W){var m=Object(le.l)(),i=W.visible,u=W.onVisibleChange,D=W.onFinish,A=W.id,x=W.initialData,he=W.groups,re=I.a.useForm(),De=Object(Pe.a)(re,1),be=De[0],Le=!A||A===-1,Re=Object(r.useState)("text"),me=Object(Pe.a)(Re,2),oe=me[0],Ce=me[1],Y=Object(r.useCallback)(function(){return!!(be.getFieldValue("group")==="global"||x)},[be,x]),v=Object(r.useState)(""),c=Object(Pe.a)(v,2),_=c[0],N=c[1];Object(r.useEffect)(function(){if(typeof A=="object"){var j;be.setFieldsValue(A),Ce((j=A.type)!==null&&j!==void 0?j:"text")}else A&&A!==-1?Object(G.d)(Number(A)).then(function(U){U.success&&(be.setFieldsValue(U.data),Ce(U.data.type),N(U.data.group))}):(be.resetFields(),Ce("text"))},[A,be,x]);var se=Object(r.useCallback)(function(j){j.type&&j.type!==oe&&Ce(j.type)},[oe]);return Object(l.jsxs)(ye.a,{form:be,title:m.formatMessage({id:A?"editSetting":"newSetting",defaultMessage:A?"editSetting":"newSetting"}),width:"60vw",visible:!!i,onVisibleChange:u,onFinish:D,onValuesChange:se,children:[Object(l.jsxs)(F.a.Group,{children:[x?Object(l.jsx)(ve.a,{label:Object(l.jsx)(le.a,{id:"group",defaultMessage:"group"}),rules:[{required:!0}],width:"md",name:"group",disabled:Y()}):Object(l.jsx)(F.a.Item,{label:Object(l.jsx)(le.a,{id:"group",defaultMessage:"group"}),name:"group",children:Object(l.jsx)(y,{style:{width:"300px"},autoFocus:!0,value:_,onChange:function(U){return N(U)},filterOption:function(U,Ee){var w;return(Ee==null||(w=Ee.children)===null||w===void 0?void 0:w.toString().toLowerCase().indexOf(U.toLowerCase()))!==-1},children:he.map(function(j){return Object(l.jsx)(y.Option,{value:j,children:j},j)})})}),Object(l.jsx)(ve.a,{label:Object(l.jsx)(le.a,{id:"key",defaultMessage:"key"}),rules:[{required:!0}],width:"md",name:"key",disabled:Y()})]}),Object(l.jsxs)(F.a.Group,{children:[Object(l.jsx)(ne.a,{name:"enumerable",disabled:Y(),label:Object(l.jsx)(le.a,{id:"enumerable",defaultMessage:"enumerable"})}),Object(l.jsx)(ne.a,{name:"public",disabled:Y(),label:Object(l.jsx)(le.a,{id:"public",defaultMessage:"public"})})]}),Object(l.jsx)(F.a.Group,{children:Object(l.jsx)(a.a.Group,{disabled:!!(!Le||x),name:"type",label:Object(l.jsx)(le.a,{id:"type"}),options:[{label:"text",value:"text"},{label:"markdown",value:"markdown"},{label:"json",value:"json"},{label:"file",value:"file"},{label:"image",value:"image"},{label:"boolean",value:"boolean"},{label:"number",value:"number"}]})}),Object(l.jsxs)("div",{children:[oe==="text"&&Object(l.jsx)(ve.a,{width:"lg",name:"value",label:Object(l.jsx)(le.a,{id:"value"})}),oe==="json"&&Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(de.a,{width:"lg",name:"value",label:Object(l.jsx)(le.a,{id:"value"}),tooltip:"".concat(m.formatMessage({id:"example_json"}),': {"name":"John", "age":30, "city":["New York","Warsaw"]}')}),Object(l.jsx)(F.a.Item,{noStyle:!0,shouldUpdate:!0,children:function(){try{return Object(l.jsx)(Z.a,{src:JSON.parse(be.getFieldValue("value"))})}catch(U){return Object(l.jsx)(Z.a,{src:JSON.parse('{ "error": "cannot parse this json" }')})}}})]}),(oe==="file"||oe==="image")&&Object(l.jsx)(F.a.Item,{name:"value",label:"value",tooltip:"select file from current repository or upload new one",valuePropName:"value",children:Object(l.jsx)(K,{type:oe})}),oe==="markdown"&&Object(l.jsx)(F.a.Item,{name:"value",label:"value",tooltip:"The editor is WYSIWYG and includes formatting tools whilst retaining the ability to write markdown shortcuts inline and output plain Markdown.",valuePropName:"value",children:Object(l.jsx)(R.a,{directory:"settings/wysiwyg"})}),oe==="boolean"?Object(l.jsx)(ne.a,{name:"data",label:Object(l.jsx)(le.a,{id:"value"}),checkedChildren:Object(l.jsx)(C.a,{}),unCheckedChildren:Object(l.jsx)(J.a,{})}):Object(l.jsx)(F.a.Item,{noStyle:!0,hidden:!0,children:Object(l.jsx)(q.a,{name:"data",valuePropName:"data"})}),oe==="number"&&Object(l.jsx)(Oe.a,{name:"data",label:Object(l.jsx)(le.a,{id:"value"})})]})]})},ie=E.a=ae},"O/iA":function(ce,E,e){},Qurx:function(ce,E,e){"use strict";var T=e("VTBJ"),B=e("Ff2n"),g=e("nKUr"),L=e.n(g),h=e("adzw"),O=["fieldProps","proFieldProps"],S=["fieldProps","proFieldProps"],P="text",M=function(d){var b=d.fieldProps,p=d.proFieldProps,o=Object(B.a)(d,O);return Object(g.jsx)(h.a,Object(T.a)({valueType:P,fieldProps:b,filedConfig:{valueType:P},proFieldProps:p},o))},t=function(d){var b=d.fieldProps,p=d.proFieldProps,o=Object(B.a)(d,S);return Object(g.jsx)(h.a,Object(T.a)({valueType:"password",fieldProps:b,proFieldProps:p,filedConfig:{valueType:P}},o))},r=M;r.Password=t,r.displayName="ProFormComponent",E.a=r},YjuE:function(ce,E,e){"use strict";e.r(E);var T=e("fOrg"),B=e("+KLJ"),g=e("T2oS"),L=e("W9HT"),h=e("tJVT"),O=e("q1tI"),S=e.n(O),P=e("nhC9"),M=e("Ty5D"),t=e("9kvl"),r=e("tMyG"),z=e("+up7"),d=e("P2fV"),b=e("NJEC"),p=e("5Dmo"),o=e("3S7+"),f=e("+L6B"),s=e("2/Rp"),H=e("+BJd"),y=e("mr32"),te=e("jrin"),I=e("qLMh"),V=e("k1fw"),fe=e("miYZ"),X=e("tsqr"),n=e("9og8"),Pe=e("xvlK"),F=e("Qiat"),ye=e("HEzf"),ve=e("G3dp"),ne=e("/MfK"),a=e("nKUr"),de=function(){var Y=Object(n.a)(Object(I.a)().mark(function v(c,_,N){var se;return Object(I.a)().wrap(function(U){for(;;)switch(U.prev=U.next){case 0:return se=X.b.loading(c.formatMessage({id:"loading"})),U.prev=1,U.next=4,N&&N!==-1?Object(z.h)(N,Object(V.a)({},_)):Object(z.b)(Object(V.a)({},_));case 4:return se(),X.b.success(c.formatMessage({id:"success"})),U.abrupt("return",!0);case 9:return U.prev=9,U.t0=U.catch(1),se(),X.b.error(c.formatMessage({id:"error"})),U.abrupt("return",!1);case 14:case"end":return U.stop()}},v,null,[[1,9]])}));return function(c,_,N){return Y.apply(this,arguments)}}(),q=function(){var Y=Object(n.a)(Object(I.a)().mark(function v(c,_){var N;return Object(I.a)().wrap(function(j){for(;;)switch(j.prev=j.next){case 0:return N=X.b.loading(c.formatMessage({id:"loading"})),j.prev=1,j.next=4,Object(z.c)(_);case 4:return N(),X.b.success(c.formatMessage({id:"success"})),j.abrupt("return",!0);case 9:return j.prev=9,j.t0=j.catch(1),N(),X.b.error(c.formatMessage({id:"error"})),j.abrupt("return",!1);case 14:case"end":return j.stop()}},v,null,[[1,9]])}));return function(c,_){return Y.apply(this,arguments)}}(),Oe=function(){var v=Object(O.useState)(!1),c=Object(h.a)(v,2),_=c[0],N=c[1],se=Object(O.useState)([]),j=Object(h.a)(se,2),U=j[0],Ee=j[1],w=Object(O.useRef)(),je=Object(t.l)(),ge=Object(t.m)("@@initialState"),Q=ge.setInitialState;Object(O.useEffect)(function(){Object(z.e)().then(function(k){k.success&&Ee(k.data.filter(function(ue){return ue!=="global"}))})},[]);var Me=[{title:Object(a.jsx)(t.a,{id:"group",defaultMessage:"group"}),dataIndex:"group",hideInSearch:!1,key:"group",valueType:"select",width:100,valueEnum:U.sort().reduce(function(k,ue){return Object(V.a)(Object(V.a)({},k),{},Object(te.a)({},ue,ue))},{})},{title:Object(a.jsx)(t.a,{id:"key",defaultMessage:"key"}),dataIndex:"key",hideInSearch:!0},{title:Object(a.jsx)(t.a,{id:"type",defaultMessage:"type"}),dataIndex:"type",hideInSearch:!0},{title:Object(a.jsx)(t.a,{id:"enumerable",defaultMessage:"enumerable"}),dataIndex:"enumerable",hideInForm:!0,hideInSearch:!0,render:function(ue,pe){return Object(a.jsx)(y.a,{color:pe.enumerable?"success":"error",children:Object(a.jsx)(t.a,{id:pe.enumerable?"true":"false",defaultMessage:pe.enumerable?"true":"false"})})}},{title:Object(a.jsx)(t.a,{id:"public",defaultMessage:"public"}),dataIndex:"public",hideInForm:!0,hideInSearch:!0,render:function(ue,pe){return Object(a.jsx)(y.a,{color:pe.public?"success":"error",children:Object(a.jsx)(t.a,{id:pe.public?"true":"false",defaultMessage:pe.public?"true":"false"})})}},{hideInSearch:!0,title:Object(a.jsx)(t.a,{id:"pages.searchTable.titleOption",defaultMessage:"\u64CD\u4F5C"}),dataIndex:"option",valueType:"option",render:function(ue,pe){return[Object(a.jsx)(o.a,{title:Object(a.jsx)(t.a,{id:"edit",defaultMessage:"edit"}),children:Object(a.jsx)(s.a,{type:"primary",icon:Object(a.jsx)(ve.a,{}),onClick:function(){return N(pe.id)}})},"edit"),Object(a.jsx)(b.a,{title:Object(a.jsx)(t.a,{id:"deleteQuestion",defaultMessage:"Are you sure to delete this record?"}),onConfirm:Object(n.a)(Object(I.a)().mark(function Te(){var Ue;return Object(I.a)().wrap(function(Ae){for(;;)switch(Ae.prev=Ae.next){case 0:return Ae.next=2,q(je,pe.id);case 2:Ue=Ae.sent,Ue&&(N(!1),w.current&&w.current.reload());case 4:case"end":return Ae.stop()}},Te)})),okText:Object(a.jsx)(t.a,{id:"yes",defaultMessage:"Yes"}),cancelText:Object(a.jsx)(t.a,{id:"no",defaultMessage:"No"}),children:Object(a.jsx)(o.a,{title:Object(a.jsx)(t.a,{id:"delete",defaultMessage:"delete"}),children:Object(a.jsx)(s.a,{type:"primary",icon:Object(a.jsx)(ne.a,{}),danger:!0})})},"delete")]}}];return Object(a.jsxs)(S.a.Fragment,{children:[Object(a.jsx)(F.a,{headerTitle:je.formatMessage({id:"menu.settings"}),actionRef:w,rowKey:"id",search:{layout:"vertical"},toolBarRender:function(){return[Object(a.jsxs)(s.a,{type:"primary",onClick:function(){N(-1)},children:[Object(a.jsx)(Pe.a,{})," ",Object(a.jsx)(t.a,{id:"pages.searchTable.new"})]},"primary")]},request:function(ue){var pe=ue.pageSize,Te=ue.current,Ue=ue.group;return Object(z.f)({pageSize:pe,current:Te,group:Ue}).then(function(Ie){return Ie.success?{data:Ie.data.filter(function(Ae){return Ae.group!=="global"}),total:Ie.meta.total,success:!0}:[]})},columns:Me}),Object(a.jsx)(ye.a,{groups:U,id:_,visible:Number.isInteger(_),onVisibleChange:function(ue){return!ue&&N(!1)},onFinish:function(){var k=Object(n.a)(Object(I.a)().mark(function ue(pe){var Te,Ue,Ie;return Object(I.a)().wrap(function(xe){for(;;)switch(xe.prev=xe.next){case 0:return Te=pe,xe.next=3,de(je,Te,Number(_));case 3:if(Ue=xe.sent,!Ue){xe.next=12;break}if(N(!1),w.current&&w.current.reload(),Te.group!=="global"){xe.next=12;break}return xe.next=10,Object(z.f)({current:1,pageSize:100,group:"global"});case 10:Ie=xe.sent,Q(function(Be){return Object(V.a)(Object(V.a)({},Be),{},{config:Ie.success?Ie.data:Be==null?void 0:Be.config})});case 12:case"end":return xe.stop()}},ue)}));return function(ue){return k.apply(this,arguments)}}()})]})},le=Oe,G=e("y8nQ"),R=e("Vl3Y"),$=e("tU7J"),ee=e("wFql"),Z=e("rmhi"),C=e("VMEa"),J=e("F/zT"),l=e("BiO0"),K=e("ovOe"),ae=e.n(K),ie=e("Fghh"),_e=e("Qurx"),W=function(v){var c=v.field,_=v.name;return c!=null&&c.includes("boolean")?Object(a.jsx)(J.a,{name:_,checkedChildren:Object(a.jsx)(ie.a,{id:"true"}),unCheckedChildren:Object(a.jsx)(ie.a,{id:"false"})}):Object(a.jsx)(_e.a,{width:"lg",name:_})},m=W,i=ee.a.Text,u;(function(Y){Y.Array="array",Y.String="string"})(u||(u={}));var D=function(v,c){return c===u.Array?v&&Array.isArray(v)?JSON.stringify(v):"[]":v},A=function(){var v=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",c=arguments.length>1?arguments[1]:void 0;if(c===u.Array){var _=JSON.parse(v);return _&&Array.isArray(_)?_:[]}return v},x=function(v){var c=Object(ie.k)(),_=v.visible,N=v.onVisibleChange,se=v.onFinish,j=v.value,U=R.a.useForm(),Ee=Object(h.a)(U,1),w=Ee[0],je=Object(O.useMemo)(function(){return(j.rules||[]).includes(u.Array)?u.Array:u.String},[j.rules]);return Object(O.useEffect)(function(){w.setFieldsValue(Object(V.a)(Object(V.a)({},j),{},{value:D(j.value,je)}))},[je,j,w]),Object(a.jsxs)(Z.a,{form:w,title:j.full_key,width:"60vw",visible:_,onVisibleChange:N,onFinish:Object(n.a)(Object(I.a)().mark(function ge(){var Q;return Object(I.a)().wrap(function(k){for(;;)switch(k.prev=k.next){case 0:return k.next=2,Object(z.g)({key:j.full_key,value:A(w.getFieldsValue().value,je)});case 2:if(Q=k.sent,!Q.success){k.next=6;break}return se(Q.success===!0),k.abrupt("return",Q.success);case 6:return k.abrupt("return");case 7:case"end":return k.stop()}},ge)})),children:[Object(a.jsxs)(C.a.Group,{children:[Object(a.jsx)(J.a,{disabled:!0,name:"public",label:Object(a.jsx)(t.a,{id:"public",defaultMessage:"public"})}),Object(a.jsx)(J.a,{disabled:!0,name:"readonly",label:Object(a.jsx)(t.a,{id:"readonly",defaultMessage:"readonly"})}),Object(a.jsx)(C.a.Item,{shouldUpdate:!0,label:Object(a.jsx)(t.a,{id:"rules",defaultMessage:"rules"}),children:function(){return Object(a.jsx)(i,{code:!0,children:JSON.stringify(w.getFieldValue("rules"))})}})]}),je===u.Array?Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(l.a,{width:"lg",name:"value",label:Object(a.jsx)(t.a,{id:"value"}),tooltip:"".concat(c.formatMessage({id:"example_json"}),': ["first_field_name", "second_field_name"]')}),Object(a.jsx)(C.a.Item,{noStyle:!0,shouldUpdate:!0,children:function(){try{return Object(a.jsx)(ae.a,{src:JSON.parse(w.getFieldValue("value"))})}catch(Q){return Object(a.jsx)(ae.a,{src:JSON.parse('{ "error": "cannot parse this array" }')})}}})]}):Object(a.jsx)(a.Fragment,{children:Object(a.jsx)(C.a.Item,{shouldUpdate:!0,label:Object(a.jsx)(t.a,{id:"value"}),children:function(){return Object(a.jsx)(m,{field:w.getFieldValue("rules"),name:"value"})}})})]})},he=x,re=[{title:Object(a.jsx)(t.a,{id:"key",defaultMessage:"key"}),dataIndex:"key",hideInSearch:!0},{title:Object(a.jsx)(t.a,{id:"readonly",defaultMessage:"readonly"}),dataIndex:"readonly",hideInForm:!0,hideInSearch:!0,render:function(v,c){return Object(a.jsx)(y.a,{color:c.readonly?"success":"error",children:Object(a.jsx)(t.a,{id:c.readonly?"true":"false",defaultMessage:c.readonly?"true":"false"})})}},{title:Object(a.jsx)(t.a,{id:"public",defaultMessage:"public"}),dataIndex:"public",hideInForm:!0,hideInSearch:!0,render:function(v,c){return Object(a.jsx)(y.a,{color:c.public?"success":"error",children:Object(a.jsx)(t.a,{id:c.public?"true":"false",defaultMessage:c.public?"true":"false"})})}},{title:Object(a.jsx)(t.a,{id:"value",defaultMessage:"value"}),dataIndex:"value",hideInForm:!0,hideInSearch:!0,render:function(v,c){return typeof c.value=="boolean"?Object(a.jsx)(y.a,{color:c.value?"success":"error",children:Object(a.jsx)(t.a,{id:c.value?"true":"false",defaultMessage:c.value?"true":"false"})}):Array.isArray(c.value)?c.value.map(function(_){return typeof _=="object"?S.a.Children.toArray(Object(a.jsx)("p",{children:Object.keys(_).map(function(N){return"".concat(N,": ").concat(_[N])}).join(", ")})):_}):c.value}}],De=function Y(v,c){var _=arguments.length>2&&arguments[2]!==void 0?arguments[2]:[];return!v||typeof v!="object"?!1:(Object.keys(v).forEach(function(N){var se=v[N];N===c?_.push(v):typeof se=="object"&&Y(se,c,_)}),_)},be=function(v){var c=v.packageName,_=v.values,N=v.onValueUpdated,se=Object(t.l)(),j=Object(O.useState)(),U=Object(h.a)(j,2),Ee=U[0],w=U[1],je=Object(O.useMemo)(function(){var ge=_[c];return De(ge,"rules")},[_,c]);return Object(a.jsxs)(S.a.Fragment,{children:[Object(a.jsx)(F.a,{headerTitle:se.formatMessage({id:"menu.settings"}),rowKey:"key",search:{layout:"vertical"},dataSource:je,columns:[].concat(re,[{hideInSearch:!0,title:Object(a.jsx)(t.a,{id:"pages.searchTable.titleOption",defaultMessage:"\u64CD\u4F5C"}),dataIndex:"option",valueType:"option",render:function(Q,Me){return[Object(a.jsx)(o.a,{title:Object(a.jsx)(t.a,{id:"edit",defaultMessage:"edit"}),children:Object(a.jsx)(s.a,{type:"primary",icon:Object(a.jsx)(ve.a,{}),onClick:function(){return w(Me)}})},"edit")]}}])}),Ee&&Object(a.jsx)(he,{value:Ee,visible:Ee!==void 0,onVisibleChange:function(Q){return Q===!1&&w(void 0)},onFinish:Object(n.a)(Object(I.a)().mark(function ge(){return Object(I.a)().wrap(function(Me){for(;;)switch(Me.prev=Me.next){case 0:N();case 1:case"end":return Me.stop()}},ge)}))})]})},Le=be,Re=e("t4ZK"),me=e("I5X1"),oe=function(v){return v.replaceAll("escolalms","").split("_").join("")},Ce=E.default=function(){var Y=Object(M.l)(),v=Object(t.l)(),c=Y.tab,_=c===void 0?"user_settings":c,N=Object(O.useState)(),se=Object(h.a)(N,2),j=se[0],U=se[1],Ee=Object(O.useCallback)(function(){Object(z.a)().then(function(Q){Q.success&&U(Q.data)})},[]),w=Object(me.a)("@@initialState"),je=w.initialState,ge=Object(O.useCallback)(function(){var Q;return(je==null||(Q=je.config)===null||Q===void 0?void 0:Q.length)!==0},[je]);return Object(O.useEffect)(function(){Ee()},[]),j?Object(a.jsxs)(r.a,{title:Object(a.jsx)(t.a,{id:"settings"}),header:{breadcrumb:{routes:[{path:"settings",breadcrumbName:v.formatMessage({id:"menu.Configuration.settings"})},{path:String(_),breadcrumbName:String(_)}]}},children:[!ge()&&Object(a.jsx)(B.a,{message:Object(a.jsx)(t.a,{id:"global_settings_alert_title",defaultMessage:"Add global settings"}),description:Object(a.jsx)(t.a,{id:"global_settings_alert_description",defaultMessage:"Global settings are used to configure the entire LMS. You can add global settings by clicking the button below."}),type:"warning",showIcon:!0,style:{marginBottom:"20px"}}),Object(a.jsxs)(P.a,{tabs:{type:"card",activeKey:_,onChange:function(Me){return t.f.push("/configuration/settings/".concat(Me))}},children:[Object(a.jsx)(P.a.TabPane,{tab:Object(a.jsx)(t.a,{id:"user.settings"}),children:Object(a.jsx)(le,{})},"user_settings"),Object(a.jsx)(P.a.TabPane,{tab:Object(a.jsx)(t.a,{id:"global_settings"}),children:Object(a.jsx)(Re.a,{})},"global_settings"),Object.keys(j).map(function(Q){return Object(a.jsxs)(P.a.TabPane,{tab:Object(a.jsxs)("span",{children:[Object(a.jsx)(t.a,{id:"package"})," ",oe(Q)]}),children:[Object(a.jsx)(Le,{values:j,packageName:Q,onValueUpdated:function(){return Ee()}}),Q]},Q)})]})]}):Object(a.jsx)(L.a,{})}},hd5d:function(ce,E,e){"use strict";var T=e("qLMh"),B=e("9og8"),g=e("q1tI"),L=e.n(g),h=e("acco"),O=e.n(h),S=e("BAh9"),P=e("vtG9"),M=e.n(P),t=e("9kvl"),r=e("nKUr"),z=e.n(r),d=function(o){var f=o.attrs,s=f.href,H=s.split("/").pop();return Object(r.jsx)("p",{children:Object(r.jsx)("a",{rel:"noreferrer",href:s,target:"_blank",children:H})})},b=function(o){var f=o.value,s=o.onChange,H=o.directory,y=H===void 0?"/wysiwyg":H,te=Object(t.l)();return Object(r.jsx)("div",{className:"form-wysiwyg-markdown",children:Object(r.jsx)(O.a,{excludeBlockMenuItems:["Sketch"],embeds:[{matcher:function(V){return!0},component:d}],uploadImage:function(){var I=Object(B.a)(Object(T.a)().mark(function V(fe){var X,n;return Object(T.a)().wrap(function(F){for(;;)switch(F.prev=F.next){case 0:return F.next=2,Object(S.e)(fe,y);case 2:if(X=F.sent,!X.success){F.next=8;break}if(!fe.type.includes("image/")){F.next=7;break}return n=X.data[0].name.includes("/")?X.data[0].name:"".concat(y).concat(X.data[0].name),F.abrupt("return",Object(S.d)(n,1e3));case 7:return F.abrupt("return",X.data[0].url);case 8:throw new Error("Error while uploading");case 9:case"end":return F.stop()}},V)}));return function(V){return I.apply(this,arguments)}}(),defaultValue:f||"",onChange:function(V){return s&&s(V())},placeholder:te.formatMessage({id:"wysiwyg_placeholder"})})})};E.a=b},lLVY:function(ce,E,e){},t4ZK:function(ce,E,e){"use strict";e.d(E,"b",function(){return de});var T=e("P2fV"),B=e("NJEC"),g=e("5Dmo"),L=e("3S7+"),h=e("+L6B"),O=e("2/Rp"),S=e("tJVT"),P=e("jrin"),M=e("oBTY"),t=e("qLMh"),r=e("k1fw"),z=e("miYZ"),d=e("tsqr"),b=e("9og8"),p=e("xvlK"),o=e("q1tI"),f=e.n(o),s=e("9kvl"),H=e("Qiat"),y=e("/y+f"),te=e("+up7"),I=e("HEzf"),V=e("G3dp"),fe=e("/MfK"),X=e("ujla"),n=e("nKUr"),Pe=e.n(n),F=function(){var G=Object(b.a)(Object(t.a)().mark(function R($,ee,Z){var C,J;return Object(t.a)().wrap(function(K){for(;;)switch(K.prev=K.next){case 0:return C=d.b.loading($.formatMessage({id:"loading"})),K.prev=1,K.next=4,Z&&Z!==-1?Object(te.h)(Z,Object(r.a)({},ee)):Object(te.b)(Object(r.a)({},ee));case 4:return J=K.sent,C(),d.b.success($.formatMessage({id:"success"})),K.abrupt("return",{success:!0,updatedSettings:J});case 10:return K.prev=10,K.t0=K.catch(1),C(),d.b.error($.formatMessage({id:"error"})),K.abrupt("return",{success:!1,updateSettings:null});case 15:case"end":return K.stop()}},R,null,[[1,10]])}));return function($,ee,Z){return G.apply(this,arguments)}}(),ye=function(){var G=Object(b.a)(Object(t.a)().mark(function R($,ee){var Z;return Object(t.a)().wrap(function(J){for(;;)switch(J.prev=J.next){case 0:return Z=d.b.loading($.formatMessage({id:"loading"})),J.prev=1,J.next=4,Object(te.c)(ee);case 4:return Z(),d.b.success($.formatMessage({id:"success"})),J.abrupt("return",!0);case 9:return J.prev=9,J.t0=J.catch(1),Z(),d.b.error($.formatMessage({id:"error"})),J.abrupt("return",!1);case 14:case"end":return J.stop()}},R,null,[[1,9]])}));return function($,ee){return G.apply(this,arguments)}}(),ve=function(R){return R.toLowerCase().replace(/(_\w)/g,function($){return $.toUpperCase().substr(1)})},ne=function G(R){return R.reduce(function($,ee){return[].concat(Object(M.a)($),Object(M.a)(ee.routes?G(ee.routes):[]),[ee])},[]).filter(function($){return $.layout!==!1&&$.hideInMenu!==!0})},a=function(R){return"hideInMenu-".concat(ve(R.split("/").join("_")))},de=function(R){return"disableTopicType-".concat(R)},q=[].concat(Object(M.a)(Object.keys(y.f).map(function(G,R){return{id:-1*(R+200),key:de(G),group:"global",value:"false",public:!0,enumerable:!0,sort:1,type:"boolean",data:!1}})),Object(M.a)(ne(Object(X.a)()).filter(function(G){return G.path&&G.path!=="/"}).map(function(G,R){return{id:-1*(R+100),path:G.path,key:a(G.path),group:"global",value:"false",public:!0,enumerable:!0,sort:1,type:"boolean",data:!1}})),Object(M.a)(["ECommerce","Certificates"].map(function(G,R){return{id:-1*(R+100),key:"disable-".concat(G),group:"global",value:"false",public:!0,enumerable:!0,sort:1,type:"boolean",data:!1}}))).reduce(function(G,R,$){return Object(r.a)(Object(r.a)({},G),{},Object(P.a)({},R.key,Object(r.a)(Object(r.a)({},R),{},{id:-1*$})))},{}),Oe=Object(r.a)({logo:{id:-1,key:"logo",group:"global",value:"",public:!0,enumerable:!0,sort:0,type:"image",data:"EscolaLMS"},frontURL:{id:-2,key:"frontURL",group:"global",value:"",public:!0,enumerable:!0,sort:0,type:"text",data:"EscolaLMS"},maxLessonsNestingInProgram:{id:-4,key:"maxLessonsNestingInProgram",group:"global",value:"0",public:!0,enumerable:!0,sort:1,type:"number",data:0},minTopicNestingInProgram:{id:-5,key:"minTopicNestingInProgram",group:"global",value:"0",public:!0,enumerable:!0,sort:1,type:"number",data:0}},q),le=function(){var R=Object(o.useState)(!1),$=Object(S.a)(R,2),ee=$[0],Z=$[1],C=Object(o.useRef)(),J=Object(s.l)(),l=Object(s.m)("@@initialState"),K=l.setInitialState,ae=l.initialState,ie=[{title:Object(n.jsx)(s.a,{id:"key",defaultMessage:"key"}),dataIndex:"key",hideInSearch:!0},{title:Object(n.jsx)(s.a,{id:"type",defaultMessage:"type"}),dataIndex:"type",hideInSearch:!0},{title:Object(n.jsx)(s.a,{id:"value",defaultMessage:"value"}),dataIndex:"value",hideInForm:!0,hideInSearch:!0,render:function(m,i){return i.value}},{hideInSearch:!0,title:Object(n.jsx)(s.a,{id:"pages.searchTable.titleOption",defaultMessage:"\u64CD\u4F5C"}),dataIndex:"option",valueType:"option",render:function(m,i){return[i.id>0?Object(n.jsx)(L.a,{title:Object(n.jsx)(s.a,{id:"edit",defaultMessage:"edit"}),children:Object(n.jsx)(O.a,{type:"primary",icon:Object(n.jsx)(V.a,{}),onClick:function(){return Z(i.id)}})},"edit"):Object(n.jsx)(L.a,{title:Object(n.jsx)(s.a,{id:"create",defaultMessage:"create"}),children:Object(n.jsx)(O.a,{type:"primary",icon:Object(n.jsx)(p.a,{}),onClick:function(){Z(Oe[i.key]||-1)}})},"create"),Object(n.jsx)(B.a,{title:Object(n.jsx)(s.a,{id:"deleteQuestion",defaultMessage:"Are you sure to delete this record?"}),onConfirm:Object(b.a)(Object(t.a)().mark(function u(){var D;return Object(t.a)().wrap(function(x){for(;;)switch(x.prev=x.next){case 0:return x.next=2,ye(J,i.id);case 2:D=x.sent,D&&(Z(!1),C.current&&C.current.reload());case 4:case"end":return x.stop()}},u)})),okText:Object(n.jsx)(s.a,{id:"yes",defaultMessage:"Yes"}),cancelText:Object(n.jsx)(s.a,{id:"no",defaultMessage:"No"}),children:i.id>0?Object(n.jsx)(L.a,{title:Object(n.jsx)(s.a,{id:"delete",defaultMessage:"delete"}),children:Object(n.jsx)(O.a,{type:"primary",icon:Object(n.jsx)(fe.a,{}),danger:!0})}):null},"delete")]}}],_e=function(m){var i;if(!!m&&(!(ae!=null&&(i=ae.config)!==null&&i!==void 0&&i.length)&&m&&K(Object(r.a)(Object(r.a)({},ae),{},{config:[m]})),!!(ae!=null&&ae.config))){var u=ae==null?void 0:ae.config.map(function(D){return D.key===m.key?Object(r.a)(Object(r.a)({},D),m):D});K(Object(r.a)(Object(r.a)({},ae),{},{config:u}))}};return Object(n.jsxs)(f.a.Fragment,{children:[Object(n.jsx)(H.a,{headerTitle:J.formatMessage({id:"menu.settings"}),search:!1,toolBarRender:!1,actionRef:C,rowKey:"id",request:function(m){var i=m.pageSize,u=m.current;return Object(te.f)({pageSize:i,current:u,group:"global"}).then(function(D){if(D.success){var A=[].concat(Object(M.a)(Object.keys(Oe).map(function(x){return D.data.find(function(he){return he.key===x})||Oe[x]})),Object(M.a)(D.data.filter(function(x){return!Object.keys(Oe).includes(x.key)})));return{data:A,total:A.length,success:!0}}return[]})},columns:ie}),Object(n.jsx)(I.a,{groups:[],id:ee,visible:ee,initialData:Oe,onVisibleChange:function(m){return!m&&Z(!1)},onFinish:function(){var W=Object(b.a)(Object(t.a)().mark(function m(i){var u,D,A,x;return Object(t.a)().wrap(function(re){for(;;)switch(re.prev=re.next){case 0:return u=i,u.type==="number"&&(u=Object(r.a)(Object(r.a)({},u),{},{value:String(u.data)})),u.type==="boolean"&&(u=Object(r.a)(Object(r.a)({},u),{},{value:u.data})),re.next=5,F(J,u,Number(ee));case 5:D=re.sent,A=D.success,x=D.updatedSettings,A&&(x!=null&&x.success&&_e(x.data),Z(!1),C.current&&C.current.reload());case 9:case"end":return re.stop()}},m)}));return function(m){return W.apply(this,arguments)}}()})]})};E.a=le},tneF:function(ce,E,e){"use strict";var T=e("sRBo"),B=e("kaz8"),g=e("VTBJ"),L=e("Ff2n"),h=e("nKUr"),O=e.n(h),S=e("uX+g"),P=e("q1tI"),M=e.n(P),t=e("WFLz"),r=e("adzw"),z=["options","fieldProps","proFieldProps","valueEnum"],d=M.a.forwardRef(function(f,s){var H=f.options,y=f.fieldProps,te=f.proFieldProps,I=f.valueEnum,V=Object(L.a)(f,z);return Object(h.jsx)(r.a,Object(g.a)({ref:s,valueType:"checkbox",valueEnum:Object(S.a)(I,void 0),fieldProps:Object(g.a)({options:H},y),lightProps:Object(g.a)({labelFormatter:function(){return Object(h.jsx)(r.a,Object(g.a)({ref:s,valueType:"checkbox",mode:"read",valueEnum:Object(S.a)(I,void 0),filedConfig:{customLightMode:!0},fieldProps:Object(g.a)({options:H},y),proFieldProps:te},V))}},V.lightProps),proFieldProps:te},V))}),b=M.a.forwardRef(function(f,s){var H=f.fieldProps,y=f.children;return Object(h.jsx)(B.a,Object(g.a)(Object(g.a)({ref:s},H),{},{children:y}))}),p=Object(t.a)(b,{valuePropName:"checked"}),o=p;o.Group=d,E.a=o},vtG9:function(ce,E,e){}}]);

(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{"/y+f":function(fe,p,e){"use strict";e.d(p,"f",function(){return W}),e.d(p,"d",function(){return F}),e.d(p,"e",function(){return A}),e.d(p,"c",function(){return N}),e.d(p,"a",function(){return g}),e.d(p,"b",function(){return T});var W;(function(t){t.Unselected="",t.RichText="EscolaLms\\TopicTypes\\Models\\TopicContent\\RichText",t.OEmbed="EscolaLms\\TopicTypes\\Models\\TopicContent\\OEmbed",t.Audio="EscolaLms\\TopicTypes\\Models\\TopicContent\\Audio",t.Video="EscolaLms\\TopicTypes\\Models\\TopicContent\\Video",t.H5P="EscolaLms\\TopicTypes\\Models\\TopicContent\\H5P",t.Image="EscolaLms\\TopicTypes\\Models\\TopicContent\\Image",t.PDF="EscolaLms\\TopicTypes\\Models\\TopicContent\\PDF",t.SCORM="EscolaLms\\TopicTypes\\Models\\TopicContent\\ScormSco",t.Project="EscolaLms\\TopicTypeProject\\Models\\Project",t.GiftQuiz="EscolaLms\\TopicTypeGift\\Models\\GiftQuiz"})(W||(W={}));var G;(function(t){t.OrderPaid="EscolaLms\\Cart\\Events\\OrderPaid",t.UserLogged="EscolaLms\\Auth\\Events\\UserLogged"})(G||(G={}));var P;(function(t){t.draft="draft",t.published="published",t.archived="archived"})(P||(P={}));var F;(function(t){t.email="EscolaLms\\TemplatesEmail\\Core\\EmailChannel",t.pdf="EscolaLms\\TemplatesPdf\\Core\\PdfChannel",t.sms="EscolaLms\\TemplatesSms\\Core\\SmsChannel"})(F||(F={}));var A;(function(t){t.ManuallyTriggeredEvent="EscolaLms\\Templates\\Events\\ManuallyTriggeredEvent"})(A||(A={}));var j;(function(t){t.cart_fixed="cart_fixed",t.cart_percent="cart_percent",t.product_fixed="product_fixed",t.product_percent="product_percent"})(j||(j={}));var N;(function(t){t.MULTIPLE_CHOICE="multiple_choice",t.MULTIPLE_CHOICE_WITH_MULTIPLE_RIGHT_ANSWERS="multiple_choice_with_multiple_right_answers",t.TRUE_FALSE="true_false",t.SHORT_ANSWERS="short_answers",t.MATCHING="matching",t.NUMERICAL_QUESTION="numerical_question",t.ESSAY="essay",t.DESCRIPTION="description"})(N||(N={}));var g;(function(t){t.PRESENT="present",t.ABSENT="absent"})(g||(g={}));var T;(function(t){t.Manual="manual",t.TeamsForms="teams_forms",t.TeamsLecture="teams_lecture",t.TestPortal="test_portal"})(T||(T={}))},"3fxf":function(fe,p,e){"use strict";var W=e("DjyN"),G=e("NUBc"),P=e("Mwp2"),F=e("VXEj"),A=e("+L6B"),j=e("2/Rp"),N=e("5NDa"),g=e("5rEg"),T=e("oBTY"),t=e("k1fw"),b=e("tJVT"),R=e("DYRE"),w=e("zeV3"),I=e("tU7J"),E=e("wFql"),o=e("q1tI"),s=e.n(o),i=e("BAh9"),q=e("/MfK"),x=e("mAF4"),be=e("dF/Y"),L=e("9kvl"),J=e("DBJ/"),pe=e("lLVY"),te=e.n(pe),r=e("nKUr"),ye=e.n(r),U=function(ce){var a=ce.directory,ve=ce.onUploaded;return Object(r.jsxs)(w.b,{align:"start",children:[Object(r.jsxs)(E.a.Text,{children:[Object(r.jsx)(L.a,{id:"pages.files.filesBrowser"}),Object(r.jsx)(E.a.Text,{code:!0,children:a})]}),Object(r.jsx)(J.a,{url:"/api/admin/file/upload",name:"file[]",data:{target:a},onUpload:function(Ee){Ee.success&&ve(a,Ee.data)}})]})},Le=function(ce){var a=ce.defaultDirectory,ve=a===void 0?"/":a,ge=ce.onFile,Ee=ce.hideDeleteBtn,ae=Ee===void 0?!1:Ee,Te=ce.forceLoading,_e=Te===void 0?!1:Te,Re=Object(L.l)(),y=Object(o.useState)({loading:!1,name:"",directory:ve,current_page:1,data:void 0,per_page:1,last_page:1,total:0}),S=Object(b.a)(y,2),f=S[0],$=S[1],n=Object(o.useRef)(),Y=Object(o.useCallback)(function(C){$(function(u){return Object(t.a)(Object(t.a)({},u),{},{loading:C})})},[]),Q=Object(o.useCallback)(function(C,u){C.success&&$(function(M){return Object(t.a)(Object(t.a)(Object(t.a)({},M),C.data),{},{data:[{url:u.split("/").slice(0,-1).join("/"),name:"..",created_at:"",mime:"directory"}].concat(Object(T.a)(C.data.data.map(function(c){return Object(t.a)(Object(t.a)({},c),{},{url:c.mime==="directory"?"".concat(u,"/").concat(c.name):c.url})}))).filter(function(c){return u==="/"||u===ve?c.name!=="..":!0}),directory:u,loading:!1})})},[Y]),re=Object(o.useCallback)(function(C){var u,M=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1,c=function(){return n.current&&n.current.abort()};return c(),n.current=new AbortController,Y(!0),Object(i.a)({directory:C,page:M},{signal:(u=n.current)===null||u===void 0?void 0:u.signal}).then(function(d){d.success&&Q(d,C)}).catch(function(){return Y(!1)}),function(){c()}},[Y]);Object(o.useEffect)(function(){return re(ve)},[ve,re]);var B=Object(o.useCallback)(function(C){Y(!0),Object(i.c)(C).then(function(){re(f.directory)}).catch(function(){Y(!1)})},[re,Y,f.directory]),_=Object(o.useCallback)(function(C,u){var M,c=arguments.length>2&&arguments[2]!==void 0?arguments[2]:1,d=function(){return n.current&&n.current.abort()};return d(),n.current=new AbortController,Y(!0),Object(i.b)({directory:C,name:u,page:c},{signal:(M=n.current)===null||M===void 0?void 0:M.signal}).then(function(v){v.success&&Q(v,C)}).catch(function(){return Y(!1)}),function(){d()}},[Y]);return Object(r.jsxs)("div",{className:"file-browser",children:[Object(r.jsxs)("div",{className:"file-browser__header",children:[Object(r.jsx)(g.a,{placeholder:Re.formatMessage({id:"search_file"}),className:"file-browser__input",onChange:function(u){return $(function(M){return Object(t.a)(Object(t.a)({},M),{},{name:u.target.value})})},value:f.name}),Object(r.jsxs)("div",{children:[Object(r.jsx)(j.a,{className:"file-browser__button",onClick:function(){return re(f.directory)},children:Object(r.jsx)(L.a,{id:"reset"})}),Object(r.jsx)(j.a,{className:"file-browser__button",type:"primary",onClick:function(){return _(f.directory,f.name)},children:Object(r.jsx)(L.a,{id:"query"})})]})]}),Object(r.jsx)(F.b,{loading:f.loading||_e,size:"small",itemLayout:"horizontal",dataSource:f.data,header:Object(r.jsx)(U,{directory:f.directory,onUploaded:function(u,M){M&&(re(u),ge&&ge(M,u))}}),footer:Object(r.jsx)(U,{directory:f.directory,onUploaded:function(u,M){re(u),M&&ge&&ge(M,u)}}),renderItem:function(u){return Object(r.jsx)(F.b.Item,{actions:u.mime!=="directory"&&!ae?[Object(r.jsx)(j.a,{type:"default",danger:!0,icon:Object(r.jsx)(q.a,{}),size:"small",onClick:function(){return B(u.url)}},"dir")]:[],children:Object(r.jsx)(F.b.Item.Meta,{avatar:u.mime==="directory"?Object(r.jsx)(j.a,{type:"primary",icon:Object(r.jsx)(x.a,{}),size:"small",onClick:function(){return re(u.url)}}):Object(r.jsx)("a",{href:u.url,target:"_blank",rel:"noreferrer",children:Object(r.jsx)(j.a,{type:"default",icon:Object(r.jsx)(be.a,{}),size:"small"})}),description:Object(r.jsx)(s.a.Fragment,{children:Object(r.jsx)(j.a,{type:"text",size:"small",onClick:function(){return u.mime==="directory"?re(u.url):ge&&ge(u,f.directory)},children:u.name})})})})}}),Object(r.jsx)(G.a,{pageSizeOptions:[],current:f.current_page,total:f.total,pageSize:f.per_page,onChange:function(u){return re(f.directory,u)}})]})};p.a=Le},"5qq5":function(fe,p,e){"use strict";var W=e("7Kak"),G=e("9yH6"),P=e("VTBJ"),F=e("Ff2n"),A=e("nKUr"),j=e.n(A),N=e("uX+g"),g=e("q1tI"),T=e.n(g),t=e("WFLz"),b=e("adzw"),R=["fieldProps","options","radioType","layout","proFieldProps","valueEnum"],w=T.a.forwardRef(function(s,i){var q=s.fieldProps,x=s.options,be=s.radioType,L=s.layout,J=s.proFieldProps,pe=s.valueEnum,te=Object(F.a)(s,R);return Object(A.jsx)(b.a,Object(P.a)(Object(P.a)({valueType:be==="button"?"radioButton":"radio",ref:i,valueEnum:Object(N.a)(pe,void 0)},te),{},{fieldProps:Object(P.a)({options:x,layout:L},q),proFieldProps:J,filedConfig:{customLightMode:!0}}))}),I=T.a.forwardRef(function(s,i){var q=s.fieldProps,x=s.children;return Object(A.jsx)(G.a,Object(P.a)(Object(P.a)({},q),{},{ref:i,children:x}))}),E=Object(t.a)(I,{valuePropName:"checked",ignoreWidth:!0}),o=E;o.Group=w,o.Button=G.a.Button,o.displayName="ProFormComponent",p.a=o},BAh9:function(fe,p,e){"use strict";e.d(p,"a",function(){return A}),e.d(p,"b",function(){return N}),e.d(p,"e",function(){return T}),e.d(p,"d",function(){return b}),e.d(p,"c",function(){return R});var W=e("qLMh"),G=e("k1fw"),P=e("9og8"),F=e("9kvl");function A(I,E){return j.apply(this,arguments)}function j(){return j=Object(P.a)(Object(W.a)().mark(function I(E,o){return Object(W.a)().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.abrupt("return",Object(F.i)("/api/admin/file/list",Object(G.a)({method:"GET",params:E},o||{})));case 1:case"end":return i.stop()}},I)})),j.apply(this,arguments)}function N(I,E){return g.apply(this,arguments)}function g(){return g=Object(P.a)(Object(W.a)().mark(function I(E,o){return Object(W.a)().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.abrupt("return",Object(F.i)("/api/admin/file/find",Object(G.a)({method:"GET",params:E},o||{})));case 1:case"end":return i.stop()}},I)})),g.apply(this,arguments)}function T(I,E,o){return t.apply(this,arguments)}function t(){return t=Object(P.a)(Object(W.a)().mark(function I(E,o,s){var i;return Object(W.a)().wrap(function(x){for(;;)switch(x.prev=x.next){case 0:return i=new FormData,i.append("file[]",E),i.append("target",o),x.abrupt("return",Object(F.i)("/api/admin/file/upload",Object(G.a)({method:"POST",data:i},s||{})));case 4:case"end":return x.stop()}},I)})),t.apply(this,arguments)}var b=function(E){var o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1e3;return"".concat(window.REACT_APP_API_URL||"https://api-stage.escolalms.com","/api/images/img?path=").concat(E,"&w=").concat(o)};function R(I,E){return w.apply(this,arguments)}function w(){return w=Object(P.a)(Object(W.a)().mark(function I(E,o){return Object(W.a)().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.abrupt("return",Object(F.i)("/api/admin/file/delete",Object(G.a)({method:"DELETE",data:{url:E}},o||{})));case 1:case"end":return i.stop()}},I)})),w.apply(this,arguments)}},BiO0:function(fe,p,e){"use strict";var W=e("VTBJ"),G=e("Ff2n"),P=e("nKUr"),F=e.n(P),A=e("q1tI"),j=e.n(A),N=e("adzw"),g=["fieldProps","proFieldProps"],T=function(b,R){var w=b.fieldProps,I=b.proFieldProps,E=Object(G.a)(b,g);return Object(P.jsx)(N.a,Object(W.a)({ref:R,valueType:"textarea",fieldProps:w,proFieldProps:I},E))};p.a=j.a.forwardRef(T)},FJDo:function(fe,p,e){"use strict";var W=e("VTBJ"),G=e("Ff2n"),P=e("nKUr"),F=e.n(P),A=e("q1tI"),j=e.n(A),N=e("adzw"),g=["fieldProps","min","proFieldProps","max"],T=function(b,R){var w=b.fieldProps,I=b.min,E=b.proFieldProps,o=b.max,s=Object(G.a)(b,g);return Object(P.jsx)(N.a,Object(W.a)({valueType:"digit",fieldProps:Object(W.a)({min:I,max:o},w),ref:R,filedConfig:{defaultProps:{width:"100%"}},proFieldProps:E},s))};p.a=j.a.forwardRef(T)},HEzf:function(fe,p,e){"use strict";var W=e("EFp3"),G=e("O/iA"),P=e("OaEy"),F=e("wx14"),A=e("U8pU"),j=e("ODXe"),N=e("TSYQ"),g=e.n(N),T=e("Zm9Q"),t=e("bT9E"),b=e("q1tI"),R=e.n(b),w=e("H84U"),I=e("2fM7"),E=e("0n0R"),o=I.a.Option;function s(B){return B&&B.type&&(B.type.isSelectOption||B.type.isSelectOptGroup)}var i=function(_,C){var u=_.prefixCls,M=_.className,c=_.popupClassName,d=_.dropdownClassName,v=_.children,X=_.dataSource,ne=Object(T.a)(v),V;if(ne.length===1&&Object(E.c)(ne[0])&&!s(ne[0])){var se=Object(j.a)(ne,1);V=se[0]}var he=V?function(){return V}:void 0,Ue;return ne.length&&s(ne[0])?Ue=v:Ue=X?X.map(function(de){if(Object(E.c)(de))return de;switch(Object(A.a)(de)){case"string":return b.createElement(o,{key:de,value:de},de);case"object":{var le=de.value;return b.createElement(o,{key:le,value:le},de.text)}default:return}}):[],b.createElement(w.a,null,function(de){var le=de.getPrefixCls,xe=le("select",u);return b.createElement(I.a,Object(F.a)({ref:C},Object(t.a)(_,["dataSource"]),{prefixCls:xe,popupClassName:c||d,className:g()("".concat(xe,"-auto-complete"),M),mode:I.a.SECRET_COMBOBOX_MODE_DO_NOT_USE},{getInputElement:he}),Ue)})},q=b.forwardRef(i);q.Option=o;var x=q,be=e("y8nQ"),L=e("Vl3Y"),J=e("+L6B"),pe=e("2/Rp"),te=e("5NDa"),r=e("5rEg"),ye=e("tJVT"),U=e("VMEa"),Le=e("rmhi"),Me=e("Qurx"),ce=e("F/zT"),a=e("5qq5"),ve=e("BiO0"),ge=e("tneF"),Ee=e("FJDo"),ae=e("9kvl"),Te=e("+up7"),_e=e("hd5d"),Re=e("3fxf"),y=e("ovOe"),S=e.n(y),f=e("bRQS"),$=e("4i/N"),n=e("nKUr"),Y=function(_){var C=_.value,u=_.onChange,M=_.type,c=M===void 0?"file":M,d=Object(b.useState)(!1),v=Object(ye.a)(d,2),X=v[0],ne=v[1];return Object(n.jsxs)(R.a.Fragment,{children:[Object(n.jsxs)(U.a.Group,{children:[Object(n.jsx)(r.a,{value:C,readOnly:!0}),Object(n.jsxs)(pe.a,{size:"small",type:"primary",onClick:function(){return ne(!X)},children:["toggle ",c," browser"]})]}),X&&Object(n.jsx)(Re.a,{onFile:function(se,he){return u&&u("".concat(he,"/").concat(se.name))}})]})},Q=function(_){var C=Object(ae.l)(),u=_.visible,M=_.onVisibleChange,c=_.onFinish,d=_.id,v=_.initialData,X=_.groups,ne=L.a.useForm(),V=Object(ye.a)(ne,1),se=V[0],he=!d||d===-1,Ue=Object(b.useState)("text"),de=Object(ye.a)(Ue,2),le=de[0],xe=de[1],Se=Object(b.useCallback)(function(){return!!(se.getFieldValue("group")==="global"||v)},[se,v]),Fe=Object(b.useState)(""),k=Object(ye.a)(Fe,2),O=k[0],l=k[1];Object(b.useEffect)(function(){if(typeof d=="object"){var m;se.setFieldsValue(d),xe((m=d.type)!==null&&m!==void 0?m:"text")}else d&&d!==-1?Object(Te.d)(Number(d)).then(function(K){K.success&&(se.setFieldsValue(K.data),xe(K.data.type),l(K.data.group))}):(se.resetFields(),xe("text"))},[d,se,v]);var h=Object(b.useCallback)(function(m){m.type&&m.type!==le&&xe(m.type)},[le]);return Object(n.jsxs)(Le.a,{form:se,title:C.formatMessage({id:d?"editSetting":"newSetting",defaultMessage:d?"editSetting":"newSetting"}),width:"60vw",visible:!!u,onVisibleChange:M,onFinish:c,onValuesChange:h,children:[Object(n.jsxs)(U.a.Group,{children:[v?Object(n.jsx)(Me.a,{label:Object(n.jsx)(ae.a,{id:"group",defaultMessage:"group"}),rules:[{required:!0}],width:"md",name:"group",disabled:Se()}):Object(n.jsx)(U.a.Item,{label:Object(n.jsx)(ae.a,{id:"group",defaultMessage:"group"}),name:"group",children:Object(n.jsx)(x,{style:{width:"300px"},autoFocus:!0,value:O,onChange:function(K){return l(K)},filterOption:function(K,D){var Z;return(D==null||(Z=D.children)===null||Z===void 0?void 0:Z.toString().toLowerCase().indexOf(K.toLowerCase()))!==-1},children:X.map(function(m){return Object(n.jsx)(x.Option,{value:m,children:m},m)})})}),Object(n.jsx)(Me.a,{label:Object(n.jsx)(ae.a,{id:"key",defaultMessage:"key"}),rules:[{required:!0}],width:"md",name:"key",disabled:Se()})]}),Object(n.jsxs)(U.a.Group,{children:[Object(n.jsx)(ce.a,{name:"enumerable",disabled:Se(),label:Object(n.jsx)(ae.a,{id:"enumerable",defaultMessage:"enumerable"})}),Object(n.jsx)(ce.a,{name:"public",disabled:Se(),label:Object(n.jsx)(ae.a,{id:"public",defaultMessage:"public"})})]}),Object(n.jsx)(U.a.Group,{children:Object(n.jsx)(a.a.Group,{disabled:!!(!he||v),name:"type",label:Object(n.jsx)(ae.a,{id:"type"}),options:[{label:"text",value:"text"},{label:"markdown",value:"markdown"},{label:"json",value:"json"},{label:"file",value:"file"},{label:"image",value:"image"},{label:"boolean",value:"boolean"},{label:"number",value:"number"},{label:"array",value:"array"}]})}),Object(n.jsxs)("div",{children:[le==="text"&&Object(n.jsx)(Me.a,{width:"lg",name:"value",label:Object(n.jsx)(ae.a,{id:"value"})}),le==="json"&&Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(ve.a,{width:"lg",name:"value",label:Object(n.jsx)(ae.a,{id:"value"}),tooltip:"".concat(C.formatMessage({id:"example_json"}),': {"name":"John", "age":30, "city":["New York","Warsaw"]}')}),Object(n.jsx)(U.a.Item,{noStyle:!0,shouldUpdate:!0,children:function(){try{return Object(n.jsx)(S.a,{src:JSON.parse(se.getFieldValue("value"))})}catch(K){return Object(n.jsx)(S.a,{src:JSON.parse('{ "error": "cannot parse this json" }')})}}})]}),(le==="file"||le==="image")&&Object(n.jsx)(U.a.Item,{name:"value",label:"value",tooltip:"select file from current repository or upload new one",valuePropName:"value",children:Object(n.jsx)(Y,{type:le})}),le==="markdown"&&Object(n.jsx)(U.a.Item,{name:"value",label:"value",tooltip:"The editor is WYSIWYG and includes formatting tools whilst retaining the ability to write markdown shortcuts inline and output plain Markdown.",valuePropName:"value",children:Object(n.jsx)(_e.a,{directory:"settings/wysiwyg"})}),le==="boolean"?Object(n.jsx)(ce.a,{name:"data",label:Object(n.jsx)(ae.a,{id:"value"}),checkedChildren:Object(n.jsx)(f.a,{}),unCheckedChildren:Object(n.jsx)($.a,{})}):Object(n.jsx)(U.a.Item,{noStyle:!0,hidden:!0,children:Object(n.jsx)(ge.a,{name:"data",valuePropName:"data"})}),le==="number"&&Object(n.jsx)(Ee.a,{name:"data",label:Object(n.jsx)(ae.a,{id:"value"})}),le==="array"&&Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(ve.a,{width:"lg",name:"value",label:Object(n.jsx)(ae.a,{id:"value"}),tooltip:"".concat(C.formatMessage({id:"example_json"}),": ['tutor', 'student']")}),Object(n.jsx)(U.a.Item,{noStyle:!0,shouldUpdate:!0,children:function(){try{return Object(n.jsx)(S.a,{src:JSON.parse(se.getFieldValue("value"))})}catch(K){return Object(n.jsx)(S.a,{src:JSON.parse('{ "error": "cannot parse this json" }')})}}})]})]})]})},re=p.a=Q},"O/iA":function(fe,p,e){},YjuE:function(fe,p,e){"use strict";e.r(p);var W=e("fOrg"),G=e("+KLJ"),P=e("T2oS"),F=e("W9HT"),A=e("tJVT"),j=e("q1tI"),N=e.n(j),g=e("nhC9"),T=e("Ty5D"),t=e("9kvl"),b=e("tMyG"),R=e("+up7"),w=e("P2fV"),I=e("NJEC"),E=e("5Dmo"),o=e("3S7+"),s=e("+L6B"),i=e("2/Rp"),q=e("+BJd"),x=e("mr32"),be=e("jrin"),L=e("qLMh"),J=e("k1fw"),pe=e("miYZ"),te=e("tsqr"),r=e("9og8"),ye=e("xvlK"),U=e("Qiat"),Le=e("HEzf"),Me=e("G3dp"),ce=e("/MfK"),a=e("nKUr"),ve=function(){var k=Object(r.a)(Object(L.a)().mark(function O(l,h,m){var K;return Object(L.a)().wrap(function(Z){for(;;)switch(Z.prev=Z.next){case 0:return K=te.b.loading(l.formatMessage({id:"loading"})),Z.prev=1,Z.next=4,m&&m!==-1?Object(R.h)(m,Object(J.a)({},h)):Object(R.b)(Object(J.a)({},h));case 4:return K(),te.b.success(l.formatMessage({id:"success"})),Z.abrupt("return",!0);case 9:return Z.prev=9,Z.t0=Z.catch(1),K(),te.b.error(l.formatMessage({id:"error"})),Z.abrupt("return",!1);case 14:case"end":return Z.stop()}},O,null,[[1,9]])}));return function(l,h,m){return k.apply(this,arguments)}}(),ge=function(){var k=Object(r.a)(Object(L.a)().mark(function O(l,h){var m;return Object(L.a)().wrap(function(D){for(;;)switch(D.prev=D.next){case 0:return m=te.b.loading(l.formatMessage({id:"loading"})),D.prev=1,D.next=4,Object(R.c)(h);case 4:return m(),te.b.success(l.formatMessage({id:"success"})),D.abrupt("return",!0);case 9:return D.prev=9,D.t0=D.catch(1),m(),te.b.error(l.formatMessage({id:"error"})),D.abrupt("return",!1);case 14:case"end":return D.stop()}},O,null,[[1,9]])}));return function(l,h){return k.apply(this,arguments)}}(),Ee=function(){var O=Object(j.useState)(!1),l=Object(A.a)(O,2),h=l[0],m=l[1],K=Object(j.useState)([]),D=Object(A.a)(K,2),Z=D[0],Pe=D[1],ie=Object(j.useRef)(),oe=Object(t.l)(),je=Object(t.m)("@@initialState"),z=je.setInitialState;Object(j.useEffect)(function(){Object(R.e)().then(function(H){H.success&&Pe(H.data.filter(function(ee){return ee!=="global"}))})},[]);var me=[{title:Object(a.jsx)(t.a,{id:"group",defaultMessage:"group"}),dataIndex:"group",hideInSearch:!1,key:"group",valueType:"select",width:100,valueEnum:Z.sort().reduce(function(H,ee){return Object(J.a)(Object(J.a)({},H),{},Object(be.a)({},ee,ee))},{})},{title:Object(a.jsx)(t.a,{id:"key",defaultMessage:"key"}),dataIndex:"key",hideInSearch:!0},{title:Object(a.jsx)(t.a,{id:"type",defaultMessage:"type"}),dataIndex:"type",hideInSearch:!0},{title:Object(a.jsx)(t.a,{id:"enumerable",defaultMessage:"enumerable"}),dataIndex:"enumerable",hideInForm:!0,hideInSearch:!0,render:function(ee,ue){return Object(a.jsx)(x.a,{color:ue.enumerable?"success":"error",children:Object(a.jsx)(t.a,{id:ue.enumerable?"true":"false",defaultMessage:ue.enumerable?"true":"false"})})}},{title:Object(a.jsx)(t.a,{id:"public",defaultMessage:"public"}),dataIndex:"public",hideInForm:!0,hideInSearch:!0,render:function(ee,ue){return Object(a.jsx)(x.a,{color:ue.public?"success":"error",children:Object(a.jsx)(t.a,{id:ue.public?"true":"false",defaultMessage:ue.public?"true":"false"})})}},{hideInSearch:!0,title:Object(a.jsx)(t.a,{id:"pages.searchTable.titleOption",defaultMessage:"\u64CD\u4F5C"}),dataIndex:"option",valueType:"option",render:function(ee,ue){return[Object(a.jsx)(o.a,{title:Object(a.jsx)(t.a,{id:"edit",defaultMessage:"edit"}),children:Object(a.jsx)(i.a,{type:"primary",icon:Object(a.jsx)(Me.a,{}),onClick:function(){return m(ue.id)}})},"edit"),Object(a.jsx)(I.a,{title:Object(a.jsx)(t.a,{id:"deleteQuestion",defaultMessage:"Are you sure to delete this record?"}),onConfirm:Object(r.a)(Object(L.a)().mark(function Oe(){var Ce;return Object(L.a)().wrap(function(Ae){for(;;)switch(Ae.prev=Ae.next){case 0:return Ae.next=2,ge(oe,ue.id);case 2:Ce=Ae.sent,Ce&&(m(!1),ie.current&&ie.current.reload());case 4:case"end":return Ae.stop()}},Oe)})),okText:Object(a.jsx)(t.a,{id:"yes",defaultMessage:"Yes"}),cancelText:Object(a.jsx)(t.a,{id:"no",defaultMessage:"No"}),children:Object(a.jsx)(o.a,{title:Object(a.jsx)(t.a,{id:"delete",defaultMessage:"delete"}),children:Object(a.jsx)(i.a,{type:"primary",icon:Object(a.jsx)(ce.a,{}),danger:!0})})},"delete")]}}];return Object(a.jsxs)(N.a.Fragment,{children:[Object(a.jsx)(U.a,{headerTitle:oe.formatMessage({id:"menu.settings"}),actionRef:ie,rowKey:"id",search:{layout:"vertical"},toolBarRender:function(){return[Object(a.jsxs)(i.a,{type:"primary",onClick:function(){m(-1)},children:[Object(a.jsx)(ye.a,{})," ",Object(a.jsx)(t.a,{id:"pages.searchTable.new"})]},"primary")]},request:function(ee){var ue=ee.pageSize,Oe=ee.current,Ce=ee.group;return Object(R.f)({per_page:ue,current:Oe,group:Ce}).then(function(Ie){return Ie.success?{data:Ie.data.filter(function(Ae){return Ae.group!=="global"}),total:Ie.meta.total,success:!0}:[]})},columns:me}),Object(a.jsx)(Le.a,{groups:Z,id:h,visible:Number.isInteger(h),onVisibleChange:function(ee){return!ee&&m(!1)},onFinish:function(){var H=Object(r.a)(Object(L.a)().mark(function ee(ue){var Oe,Ce,Ie;return Object(L.a)().wrap(function(De){for(;;)switch(De.prev=De.next){case 0:return Oe=ue,De.next=3,ve(oe,Oe,Number(h));case 3:if(Ce=De.sent,!Ce){De.next=12;break}if(m(!1),ie.current&&ie.current.reload(),Oe.group!=="global"){De.next=12;break}return De.next=10,Object(R.f)({current:1,per_page:100,group:"global"});case 10:Ie=De.sent,z(function(Be){return Object(J.a)(Object(J.a)({},Be),{},{config:Ie.success?Ie.data:Be==null?void 0:Be.config})});case 12:case"end":return De.stop()}},ee)}));return function(ee){return H.apply(this,arguments)}}()})]})},ae=Ee,Te=e("oBTY"),_e=e("y8nQ"),Re=e("Vl3Y"),y=e("tU7J"),S=e("wFql"),f=e("rmhi"),$=e("VMEa"),n=e("F/zT"),Y=e("BiO0"),Q=e("ovOe"),re=e.n(Q),B=e("Fghh"),_=e("Qurx"),C=function(O){var l=O.field,h=O.name;return l!=null&&l.includes("boolean")?Object(a.jsx)(n.a,{name:h,checkedChildren:Object(a.jsx)(B.a,{id:"true"}),unCheckedChildren:Object(a.jsx)(B.a,{id:"false"})}):Object(a.jsx)(_.a,{width:"lg",name:h})},u=C,M=S.a.Text,c;(function(k){k.Array="array",k.String="string"})(c||(c={}));var d=function(O,l){return l===c.Array?O&&Array.isArray(O)?JSON.stringify(O):"[]":O},v=function(){var O=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",l=arguments.length>1?arguments[1]:void 0;if(l===c.Array){var h=JSON.parse(O);return h&&Array.isArray(h)?h:[]}return O},X=function(O){var l=Object(B.k)(),h=O.visible,m=O.onVisibleChange,K=O.onFinish,D=O.value,Z=Re.a.useForm(),Pe=Object(A.a)(Z,1),ie=Pe[0],oe=Object(j.useMemo)(function(){return(D.rules||[]).includes(c.Array)?c.Array:c.String},[D.rules]);return Object(j.useEffect)(function(){ie.setFieldsValue(Object(J.a)(Object(J.a)({},D),{},{value:d(D.value,oe)}))},[oe,D,ie]),Object(a.jsxs)(f.a,{form:ie,title:D.full_key,width:"60vw",visible:h,onVisibleChange:m,onFinish:Object(r.a)(Object(L.a)().mark(function je(){var z;return Object(L.a)().wrap(function(H){for(;;)switch(H.prev=H.next){case 0:return H.next=2,Object(R.g)({key:D.full_key,value:v(ie.getFieldsValue().value,oe)});case 2:if(z=H.sent,!z.success){H.next=6;break}return K(z.success===!0),H.abrupt("return",z.success);case 6:return H.abrupt("return");case 7:case"end":return H.stop()}},je)})),children:[Object(a.jsxs)($.a.Group,{children:[Object(a.jsx)(n.a,{disabled:!0,name:"public",label:Object(a.jsx)(t.a,{id:"public",defaultMessage:"public"})}),Object(a.jsx)(n.a,{disabled:!0,name:"readonly",label:Object(a.jsx)(t.a,{id:"readonly",defaultMessage:"readonly"})}),Object(a.jsx)($.a.Item,{shouldUpdate:!0,label:Object(a.jsx)(t.a,{id:"rules",defaultMessage:"rules"}),children:function(){return Object(a.jsx)(M,{code:!0,children:JSON.stringify(ie.getFieldValue("rules"))})}})]}),oe===c.Array?Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(Y.a,{width:"lg",name:"value",label:Object(a.jsx)(t.a,{id:"value"}),tooltip:"".concat(l.formatMessage({id:"example_json"}),': ["first_field_name", "second_field_name"]')}),Object(a.jsx)($.a.Item,{noStyle:!0,shouldUpdate:!0,children:function(){try{return Object(a.jsx)(re.a,{src:JSON.parse(ie.getFieldValue("value"))})}catch(z){return Object(a.jsx)(re.a,{src:JSON.parse('{ "error": "cannot parse this array" }')})}}})]}):Object(a.jsx)(a.Fragment,{children:Object(a.jsx)($.a.Item,{shouldUpdate:!0,label:Object(a.jsx)(t.a,{id:"value"}),children:function(){return Object(a.jsx)(u,{field:ie.getFieldValue("rules"),name:"value"})}})})]})},ne=X,V=e("c+yx"),se=[{title:Object(a.jsx)(t.a,{id:"key",defaultMessage:"key"}),dataIndex:"key",hideInSearch:!1,sorter:!0},{title:Object(a.jsx)(t.a,{id:"readonly",defaultMessage:"readonly"}),dataIndex:"readonly",hideInForm:!0,hideInSearch:!0,sorter:!0,render:function(O,l){return Object(a.jsx)(x.a,{color:l.readonly?"success":"error",children:Object(a.jsx)(t.a,{id:l.readonly?"true":"false",defaultMessage:l.readonly?"true":"false"})})}},{title:Object(a.jsx)(t.a,{id:"public",defaultMessage:"public"}),dataIndex:"public",hideInForm:!0,hideInSearch:!0,sorter:!0,render:function(O,l){return Object(a.jsx)(x.a,{color:l.public?"success":"error",children:Object(a.jsx)(t.a,{id:l.public?"true":"false",defaultMessage:l.public?"true":"false"})})}},{title:Object(a.jsx)(t.a,{id:"value",defaultMessage:"value"}),dataIndex:"value",hideInForm:!0,hideInSearch:!0,render:function(O,l){return typeof l.value=="boolean"?Object(a.jsx)(x.a,{color:l.value?"success":"error",children:Object(a.jsx)(t.a,{id:l.value?"true":"false",defaultMessage:l.value?"true":"false"})}):Array.isArray(l.value)?l.value.map(function(h){return typeof h=="object"?N.a.Children.toArray(Object(a.jsx)("p",{children:Object.keys(h).map(function(m){return"".concat(m,": ").concat(h[m])}).join(", ")})):h}):l.value}}],he=function k(O,l){var h=arguments.length>2&&arguments[2]!==void 0?arguments[2]:[];return!O||typeof O!="object"?!1:(Object.keys(O).forEach(function(m){var K=O[m];m===l?h.push(O):typeof K=="object"&&k(K,l,h)}),h)},Ue=function(O){var l=O.packageName,h=O.values,m=O.onValueUpdated,K=Object(t.l)(),D=Object(j.useState)(),Z=Object(A.a)(D,2),Pe=Z[0],ie=Z[1],oe=Object(j.useMemo)(function(){var je=h[l];return he(je,"rules")},[h,l]);return Object(a.jsxs)(N.a.Fragment,{children:[Object(a.jsx)(U.a,{headerTitle:K.formatMessage({id:"menu.settings"}),rowKey:"key",search:{layout:"vertical"},columns:[].concat(se,[{hideInSearch:!0,title:Object(a.jsx)(t.a,{id:"pages.searchTable.titleOption",defaultMessage:"\u64CD\u4F5C"}),dataIndex:"option",valueType:"option",render:function(z,me){return[Object(a.jsx)(o.a,{title:Object(a.jsx)(t.a,{id:"edit",defaultMessage:"edit"}),children:Object(a.jsx)(i.a,{type:"primary",icon:Object(a.jsx)(Me.a,{}),onClick:function(){return ie(me)}})},"edit")]}}]),request:function(z,me){var H=z.key,ee=me&&Object.entries(me)[0];return new Promise(function(ue){var Oe=oe?Object(Te.a)(oe):[];H&&(Oe=Oe.filter(function(Ce){return Ce.key.toLowerCase().includes(H.toLowerCase())})),ee&&(Oe=Object(V.h)(Oe,ee[0],ee[1]!=="ascend")),ue({data:Oe,success:!0,total:Oe.length})})}}),Pe&&Object(a.jsx)(ne,{value:Pe,visible:Pe!==void 0,onVisibleChange:function(z){return z===!1&&ie(void 0)},onFinish:Object(r.a)(Object(L.a)().mark(function je(){return Object(L.a)().wrap(function(me){for(;;)switch(me.prev=me.next){case 0:m();case 1:case"end":return me.stop()}},je)}))})]})},de=Ue,le=e("t4ZK"),xe=e("I5X1"),Se=function(O){return O.replaceAll("escolalms","").split("_").join("")},Fe=p.default=function(){var k=Object(T.l)(),O=Object(t.l)(),l=k.tab,h=l===void 0?"user_settings":l,m=Object(j.useState)(),K=Object(A.a)(m,2),D=K[0],Z=K[1],Pe=Object(j.useCallback)(function(){Object(R.a)().then(function(z){z.success&&Z(z.data)})},[]),ie=Object(xe.a)("@@initialState"),oe=ie.initialState,je=Object(j.useCallback)(function(){var z;return(oe==null||(z=oe.config)===null||z===void 0?void 0:z.length)!==0},[oe]);return Object(j.useEffect)(function(){Pe()},[]),D?Object(a.jsxs)(b.a,{title:Object(a.jsx)(t.a,{id:"settings"}),header:{breadcrumb:{routes:[{path:"settings",breadcrumbName:O.formatMessage({id:"menu.Configuration.settings"})},{path:String(h),breadcrumbName:String(h)}]}},children:[!je()&&Object(a.jsx)(G.a,{message:Object(a.jsx)(t.a,{id:"global_settings_alert_title",defaultMessage:"Add global settings"}),description:Object(a.jsx)(t.a,{id:"global_settings_alert_description",defaultMessage:"Global settings are used to configure the entire LMS. You can add global settings by clicking the button below."}),type:"warning",showIcon:!0,style:{marginBottom:"20px"}}),Object(a.jsxs)(g.a,{tabs:{type:"card",activeKey:h,onChange:function(me){return t.f.push("/configuration/settings/".concat(me))}},children:[Object(a.jsx)(g.a.TabPane,{tab:Object(a.jsx)(t.a,{id:"user.settings"}),children:Object(a.jsx)(ae,{})},"user_settings"),Object(a.jsx)(g.a.TabPane,{tab:Object(a.jsx)(t.a,{id:"global_settings"}),children:Object(a.jsx)(le.a,{})},"global_settings"),Object.keys(D).map(function(z){return Object(a.jsxs)(g.a.TabPane,{tab:Object(a.jsxs)("span",{children:[Object(a.jsx)(t.a,{id:"package"})," ",Se(z)]}),children:[Object(a.jsx)(de,{values:D,packageName:z,onValueUpdated:function(){return Pe()}}),z]},z)})]})]}):Object(a.jsx)(F.a,{})}},hd5d:function(fe,p,e){"use strict";var W=e("qLMh"),G=e("9og8"),P=e("q1tI"),F=e.n(P),A=e("acco"),j=e.n(A),N=e("BAh9"),g=e("vtG9"),T=e.n(g),t=e("9kvl"),b=e("nKUr"),R=e.n(b),w=function(o){var s=o.attrs,i=s.href,q=i.split("/").pop();return Object(b.jsx)("p",{children:Object(b.jsx)("a",{rel:"noreferrer",href:i,target:"_blank",children:q})})},I=function(o){var s=o.value,i=o.onChange,q=o.directory,x=q===void 0?"/wysiwyg":q,be=Object(t.l)();return Object(b.jsx)("div",{className:"form-wysiwyg-markdown",children:Object(b.jsx)(j.a,{excludeBlockMenuItems:["Sketch"],embeds:[{matcher:function(J){return!0},component:w}],uploadImage:function(){var L=Object(G.a)(Object(W.a)().mark(function J(pe){var te,r;return Object(W.a)().wrap(function(U){for(;;)switch(U.prev=U.next){case 0:return U.next=2,Object(N.e)(pe,x);case 2:if(te=U.sent,!te.success){U.next=8;break}if(!pe.type.includes("image/")){U.next=7;break}return r=te.data[0].name.includes("/")?te.data[0].name:"".concat(x).concat(te.data[0].name),U.abrupt("return",Object(N.d)(r,1e3));case 7:return U.abrupt("return",te.data[0].url);case 8:throw new Error("Error while uploading");case 9:case"end":return U.stop()}},J)}));return function(J){return L.apply(this,arguments)}}(),defaultValue:s||"",onChange:function(J){return i&&i(J())},placeholder:be.formatMessage({id:"wysiwyg_placeholder"})})})};p.a=I},lLVY:function(fe,p,e){},t4ZK:function(fe,p,e){"use strict";e.d(p,"b",function(){return ae});var W=e("P2fV"),G=e("NJEC"),P=e("+L6B"),F=e("2/Rp"),A=e("5Dmo"),j=e("3S7+"),N=e("tJVT"),g=e("oBTY"),T=e("qLMh"),t=e("k1fw"),b=e("miYZ"),R=e("tsqr"),w=e("9og8"),I=e("xvlK"),E=e("q1tI"),o=e.n(E),s=e("9kvl"),i=e("Qiat"),q=e("/y+f"),x=e("+up7"),be=e("HEzf"),L=e("+YFz"),J=e("G3dp"),pe=e("/MfK"),te=e("ujla"),r=e("nKUr"),ye=e.n(r),U=function(){var y=Object(w.a)(Object(T.a)().mark(function S(f,$,n){var Y,Q;return Object(T.a)().wrap(function(B){for(;;)switch(B.prev=B.next){case 0:return Y=R.b.loading(f.formatMessage({id:"loading"})),B.prev=1,B.next=4,n&&n!==-1?Object(x.h)(n,Object(t.a)({},$)):Object(x.b)(Object(t.a)({},$));case 4:return Q=B.sent,Y(),R.b.success(f.formatMessage({id:"success"})),B.abrupt("return",{success:!0,updatedSettings:Q});case 10:return B.prev=10,B.t0=B.catch(1),Y(),R.b.error(f.formatMessage({id:"error"})),B.abrupt("return",{success:!1,updateSettings:null});case 15:case"end":return B.stop()}},S,null,[[1,10]])}));return function(f,$,n){return y.apply(this,arguments)}}(),Le=function(){var y=Object(w.a)(Object(T.a)().mark(function S(f,$){var n;return Object(T.a)().wrap(function(Q){for(;;)switch(Q.prev=Q.next){case 0:return n=R.b.loading(f.formatMessage({id:"loading"})),Q.prev=1,Q.next=4,Object(x.c)($);case 4:return n(),R.b.success(f.formatMessage({id:"success"})),Q.abrupt("return",!0);case 9:return Q.prev=9,Q.t0=Q.catch(1),n(),R.b.error(f.formatMessage({id:"error"})),Q.abrupt("return",!1);case 14:case"end":return Q.stop()}},S,null,[[1,9]])}));return function(f,$){return y.apply(this,arguments)}}(),Me=function(S){return S.toLowerCase().replace(/(_\w)/g,function(f){return f.toUpperCase().substr(1)})},ce=function y(S){return S.reduce(function(f,$){return[].concat(Object(g.a)(f),Object(g.a)($.routes?y($.routes):[]),[$])},[]).filter(function(f){return f.layout!==!1&&f.hideInMenu!==!0})},a=["statistics","user_submission","user_projects"],ve=["public"],ge=["email","sms"],Ee=function(S){return"hideInMenu-".concat(Me(S.split("/").join("_")))},ae=function(S){return"disableTopicType-".concat(S)},Te=[].concat(Object(g.a)(Object.keys(q.f).map(function(y){return{key:ae(y),group:"global",value:"false",public:!0,enumerable:!0,sort:1,type:"boolean",data:!1}})),Object(g.a)(ce(Object(te.a)()).filter(function(y){return y.path&&y.path!=="/"}).map(function(y){return{path:y.path,key:Ee(y.path),group:"global",value:"false",public:!0,enumerable:!0,sort:1,type:"boolean",data:!1}})),Object(g.a)(["ECommerce","Certificates"].map(function(y){return{key:"disable-".concat(y),group:"global",value:"false",public:!0,enumerable:!0,sort:1,type:"boolean",data:!1}})),Object(g.a)(ve.map(function(y){return{key:"showInCourseAdditionalSettings-".concat(y),group:"global",value:"false",public:!0,enumerable:!0,sort:1,type:"boolean",data:!1}})),Object(g.a)(a.map(function(y){return{key:"hideInCourseTabs-".concat(y),group:"global",value:"false",public:!0,enumerable:!0,sort:1,type:"boolean",data:!1}})),Object(g.a)(ge.map(function(y){return{key:"hideTemplateTab-".concat(y),group:"global",value:"false",public:!0,enumerable:!0,sort:1,type:"boolean",data:!1}}))).reduce(function(y,S,f){return y[S.key]=Object(t.a)(Object(t.a)({},S),{},{id:-100*f}),y},{}),_e=Object(t.a)({logo:{id:-1,key:"logo",group:"global",value:"",public:!0,enumerable:!0,sort:0,type:"image",data:"EscolaLMS"},frontURL:{id:-2,key:"frontURL",group:"global",value:"",public:!0,enumerable:!0,sort:0,type:"text",data:"EscolaLMS"},maxLessonsNestingInProgram:{id:-4,key:"maxLessonsNestingInProgram",group:"global",value:"0",public:!0,enumerable:!0,sort:1,type:"number",data:0},minTopicNestingInProgram:{id:-5,key:"minTopicNestingInProgram",group:"global",value:"0",public:!0,enumerable:!0,sort:1,type:"number",data:0},companyName:{id:-6,key:"companyName",group:"global",value:"Wellms",public:!0,enumerable:!0,sort:0,type:"text",data:"Wellms"},companyURL:{id:-7,key:"companyURL",group:"global",value:"https://www.wellms.io/",public:!0,enumerable:!0,sort:0,type:"text",data:"https://www.wellms.io/"}},Te),Re=function(){var S=Object(E.useState)(!1),f=Object(N.a)(S,2),$=f[0],n=f[1],Y=Object(E.useRef)(),Q=Object(s.l)(),re=Object(s.m)("@@initialState"),B=re.setInitialState,_=re.initialState,C=[{title:Object(r.jsx)(s.a,{id:"key",defaultMessage:"key"}),dataIndex:"key",hideInSearch:!0,render:function(c,d){return Object(r.jsx)(E.Fragment,{children:Object(r.jsxs)(j.a,{title:Object(r.jsx)(s.a,{id:"Settings.tooltip.".concat(d.key)}),children:[d.key," ",Object(r.jsx)(L.a,{})]})})}},{title:Object(r.jsx)(s.a,{id:"type",defaultMessage:"type"}),dataIndex:"type",hideInSearch:!0},{title:Object(r.jsx)(s.a,{id:"value",defaultMessage:"value"}),dataIndex:"value",hideInForm:!0,hideInSearch:!0,render:function(c,d){return d.value}},{hideInSearch:!0,title:Object(r.jsx)(s.a,{id:"pages.searchTable.titleOption",defaultMessage:"\u64CD\u4F5C"}),dataIndex:"option",valueType:"option",render:function(c,d){return[d.id>0?Object(r.jsx)(j.a,{title:Object(r.jsx)(s.a,{id:"edit",defaultMessage:"edit"}),children:Object(r.jsx)(F.a,{type:"primary",icon:Object(r.jsx)(J.a,{}),onClick:function(){return n(d.id)}})},"edit"):Object(r.jsx)(j.a,{title:Object(r.jsx)(s.a,{id:"create",defaultMessage:"create"}),children:Object(r.jsx)(F.a,{type:"primary",icon:Object(r.jsx)(I.a,{}),onClick:function(){n(_e[d.key]||-1)}})},"create"),Object(r.jsx)(G.a,{title:Object(r.jsx)(s.a,{id:"deleteQuestion",defaultMessage:"Are you sure to delete this record?"}),onConfirm:Object(w.a)(Object(T.a)().mark(function v(){var X;return Object(T.a)().wrap(function(V){for(;;)switch(V.prev=V.next){case 0:return V.next=2,Le(Q,d.id);case 2:X=V.sent,X&&(n(!1),Y.current&&Y.current.reload());case 4:case"end":return V.stop()}},v)})),okText:Object(r.jsx)(s.a,{id:"yes",defaultMessage:"Yes"}),cancelText:Object(r.jsx)(s.a,{id:"no",defaultMessage:"No"}),children:d.id>0?Object(r.jsx)(j.a,{title:Object(r.jsx)(s.a,{id:"delete",defaultMessage:"delete"}),children:Object(r.jsx)(F.a,{type:"primary",icon:Object(r.jsx)(pe.a,{}),danger:!0})}):null},"delete")]}}],u=function(c){var d;if(!!c&&(!(_!=null&&(d=_.config)!==null&&d!==void 0&&d.length)&&c&&B(Object(t.a)(Object(t.a)({},_),{},{config:[c]})),!!(_!=null&&_.config))){var v=_==null?void 0:_.config.map(function(X){return X.key===c.key?Object(t.a)(Object(t.a)({},X),c):X});B(Object(t.a)(Object(t.a)({},_),{},{config:v}))}};return Object(r.jsxs)(o.a.Fragment,{children:[Object(r.jsx)(i.a,{headerTitle:Q.formatMessage({id:"menu.settings"}),search:!1,toolBarRender:!1,actionRef:Y,rowKey:"id",request:function(c){var d=c.pageSize,v=c.current;return Object(x.f)({per_page:d,current:v,group:"global"}).then(function(X){if(X.success){var ne=[].concat(Object(g.a)(Object.keys(_e).map(function(V){return X.data.find(function(se){return se.key===V})||_e[V]})),Object(g.a)(X.data.filter(function(V){return!Object.keys(_e).includes(V.key)})));return{data:ne,total:ne.length,success:!0}}return[]})},columns:C}),Object(r.jsx)(be.a,{groups:[],id:$,visible:$,initialData:_e,onVisibleChange:function(c){return!c&&n(!1)},onFinish:function(){var M=Object(w.a)(Object(T.a)().mark(function c(d){var v,X,ne,V;return Object(T.a)().wrap(function(he){for(;;)switch(he.prev=he.next){case 0:return v=d,v.type==="number"&&(v=Object(t.a)(Object(t.a)({},v),{},{value:String(v.data)})),v.type==="boolean"&&(v=Object(t.a)(Object(t.a)({},v),{},{value:v.data})),v.type==="array"&&(v=Object(t.a)(Object(t.a)({},v),{},{value:JSON.parse(v.value)})),he.next=6,U(Q,v,Number($));case 6:X=he.sent,ne=X.success,V=X.updatedSettings,ne&&(V!=null&&V.success&&u(V.data),n(!1),Y.current&&Y.current.reload());case 10:case"end":return he.stop()}},c)}));return function(c){return M.apply(this,arguments)}}()})]})};p.a=Re},tneF:function(fe,p,e){"use strict";var W=e("sRBo"),G=e("kaz8"),P=e("VTBJ"),F=e("Ff2n"),A=e("nKUr"),j=e.n(A),N=e("uX+g"),g=e("q1tI"),T=e.n(g),t=e("WFLz"),b=e("adzw"),R=["options","fieldProps","proFieldProps","valueEnum"],w=T.a.forwardRef(function(s,i){var q=s.options,x=s.fieldProps,be=s.proFieldProps,L=s.valueEnum,J=Object(F.a)(s,R);return Object(A.jsx)(b.a,Object(P.a)({ref:i,valueType:"checkbox",valueEnum:Object(N.a)(L,void 0),fieldProps:Object(P.a)({options:q},x),lightProps:Object(P.a)({labelFormatter:function(){return Object(A.jsx)(b.a,Object(P.a)({ref:i,valueType:"checkbox",mode:"read",valueEnum:Object(N.a)(L,void 0),filedConfig:{customLightMode:!0},fieldProps:Object(P.a)({options:q},x),proFieldProps:be},J))}},J.lightProps),proFieldProps:be},J))}),I=T.a.forwardRef(function(s,i){var q=s.fieldProps,x=s.children;return Object(A.jsx)(G.a,Object(P.a)(Object(P.a)({ref:i},q),{},{children:x}))}),E=Object(t.a)(I,{valuePropName:"checked"}),o=E;o.Group=w,p.a=o},vtG9:function(fe,p,e){}}]);

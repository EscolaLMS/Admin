(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{"/y+f":function(me,p,e){"use strict";e.d(p,"g",function(){return ae}),e.d(p,"e",function(){return H}),e.d(p,"f",function(){return E}),e.d(p,"d",function(){return K}),e.d(p,"a",function(){return b}),e.d(p,"c",function(){return M}),e.d(p,"b",function(){return r});var ae;(function(a){a.Unselected="",a.RichText="EscolaLms\\TopicTypes\\Models\\TopicContent\\RichText",a.OEmbed="EscolaLms\\TopicTypes\\Models\\TopicContent\\OEmbed",a.Audio="EscolaLms\\TopicTypes\\Models\\TopicContent\\Audio",a.Video="EscolaLms\\TopicTypes\\Models\\TopicContent\\Video",a.H5P="EscolaLms\\TopicTypes\\Models\\TopicContent\\H5P",a.Image="EscolaLms\\TopicTypes\\Models\\TopicContent\\Image",a.PDF="EscolaLms\\TopicTypes\\Models\\TopicContent\\PDF",a.SCORM="EscolaLms\\TopicTypes\\Models\\TopicContent\\ScormSco",a.Project="EscolaLms\\TopicTypeProject\\Models\\Project",a.GiftQuiz="EscolaLms\\TopicTypeGift\\Models\\GiftQuiz"})(ae||(ae={}));var Y;(function(a){a.OrderPaid="EscolaLms\\Cart\\Events\\OrderPaid",a.UserLogged="EscolaLms\\Auth\\Events\\UserLogged"})(Y||(Y={}));var h;(function(a){a.draft="draft",a.published="published",a.archived="archived"})(h||(h={}));var H;(function(a){a.email="EscolaLms\\TemplatesEmail\\Core\\EmailChannel",a.pdf="EscolaLms\\TemplatesPdf\\Core\\PdfChannel",a.sms="EscolaLms\\TemplatesSms\\Core\\SmsChannel"})(H||(H={}));var E;(function(a){a.ManuallyTriggeredEvent="EscolaLms\\Templates\\Events\\ManuallyTriggeredEvent"})(E||(E={}));var f;(function(a){a.cart_fixed="cart_fixed",a.cart_percent="cart_percent",a.product_fixed="product_fixed",a.product_percent="product_percent"})(f||(f={}));var K;(function(a){a.MULTIPLE_CHOICE="multiple_choice",a.MULTIPLE_CHOICE_WITH_MULTIPLE_RIGHT_ANSWERS="multiple_choice_with_multiple_right_answers",a.TRUE_FALSE="true_false",a.SHORT_ANSWERS="short_answers",a.MATCHING="matching",a.NUMERICAL_QUESTION="numerical_question",a.ESSAY="essay",a.DESCRIPTION="description"})(K||(K={}));var b;(function(a){a.PRESENT="present",a.PRESENT_NOT_EXERCISING="present_not_exercising",a.ABSENT="absent",a.EXCUSED_ABSENCE="excused_absence"})(b||(b={}));var M;(function(a){a.Manual="manual",a.TeamsForms="teams_forms",a.TeamsLecture="teams_lecture",a.TestPortal="test_portal"})(M||(M={}));var r;(function(a){a.Simple="simple",a.Complex="complex"})(r||(r={}))},"5qq5":function(me,p,e){"use strict";var ae=e("7Kak"),Y=e("9yH6"),h=e("VTBJ"),H=e("Ff2n"),E=e("nKUr"),f=e.n(E),K=e("uX+g"),b=e("q1tI"),M=e.n(b),r=e("WFLz"),a=e("adzw"),P=["fieldProps","options","radioType","layout","proFieldProps","valueEnum"],q=M.a.forwardRef(function(l,W){var z=l.fieldProps,I=l.options,je=l.radioType,S=l.layout,_=l.proFieldProps,fe=l.valueEnum,X=Object(H.a)(l,P);return Object(E.jsx)(a.a,Object(h.a)(Object(h.a)({valueType:je==="button"?"radioButton":"radio",ref:W,valueEnum:Object(K.a)(fe,void 0)},X),{},{fieldProps:Object(h.a)({options:I,layout:S},z),proFieldProps:_,filedConfig:{customLightMode:!0}}))}),ee=M.a.forwardRef(function(l,W){var z=l.fieldProps,I=l.children;return Object(E.jsx)(Y.a,Object(h.a)(Object(h.a)({},z),{},{ref:W,children:I}))}),Q=Object(r.a)(ee,{valuePropName:"checked",ignoreWidth:!0}),D=Q;D.Group=q,D.Button=Y.a.Button,D.displayName="ProFormComponent",p.a=D},BiO0:function(me,p,e){"use strict";var ae=e("VTBJ"),Y=e("Ff2n"),h=e("nKUr"),H=e.n(h),E=e("q1tI"),f=e.n(E),K=e("adzw"),b=["fieldProps","proFieldProps"],M=function(a,P){var q=a.fieldProps,ee=a.proFieldProps,Q=Object(Y.a)(a,b);return Object(h.jsx)(K.a,Object(ae.a)({ref:P,valueType:"textarea",fieldProps:q,proFieldProps:ee},Q))};p.a=f.a.forwardRef(M)},FJDo:function(me,p,e){"use strict";var ae=e("VTBJ"),Y=e("Ff2n"),h=e("nKUr"),H=e.n(h),E=e("q1tI"),f=e.n(E),K=e("adzw"),b=["fieldProps","min","proFieldProps","max"],M=function(a,P){var q=a.fieldProps,ee=a.min,Q=a.proFieldProps,D=a.max,l=Object(Y.a)(a,b);return Object(h.jsx)(K.a,Object(ae.a)({valueType:"digit",fieldProps:Object(ae.a)({min:ee,max:D},q),ref:P,filedConfig:{defaultProps:{width:"100%"}},proFieldProps:Q},l))};p.a=f.a.forwardRef(M)},HEzf:function(me,p,e){"use strict";var ae=e("EFp3"),Y=e("O/iA"),h=e("OaEy"),H=e("wx14"),E=e("U8pU"),f=e("ODXe"),K=e("TSYQ"),b=e.n(K),M=e("Zm9Q"),r=e("bT9E"),a=e("q1tI"),P=e.n(a),q=e("H84U"),ee=e("2fM7"),Q=e("0n0R"),D=ee.a.Option;function l(x){return x&&x.type&&(x.type.isSelectOption||x.type.isSelectOptGroup)}var W=function(O,Oe){var be=O.prefixCls,re=O.className,g=O.popupClassName,d=O.dropdownClassName,j=O.children,U=O.dataSource,$=Object(M.a)(j),C;if($.length===1&&Object(Q.c)($[0])&&!l($[0])){var Z=Object(f.a)($,1);C=Z[0]}var de=C?function(){return C}:void 0,De;return $.length&&l($[0])?De=j:De=U?U.map(function(le){if(Object(Q.c)(le))return le;switch(Object(E.a)(le)){case"string":return a.createElement(D,{key:le,value:le},le);case"object":{var k=le.value;return a.createElement(D,{key:k,value:k},le.text)}default:return}}):[],a.createElement(q.a,null,function(le){var k=le.getPrefixCls,ge=k("select",be);return a.createElement(ee.a,Object(H.a)({ref:Oe},Object(r.a)(O,["dataSource"]),{prefixCls:ge,popupClassName:g||d,className:b()("".concat(ge,"-auto-complete"),re),mode:ee.a.SECRET_COMBOBOX_MODE_DO_NOT_USE},{getInputElement:de}),De)})},z=a.forwardRef(W);z.Option=D;var I=z,je=e("y8nQ"),S=e("Vl3Y"),_=e("+L6B"),fe=e("2/Rp"),X=e("5NDa"),u=e("5rEg"),Ee=e("tJVT"),L=e("VMEa"),Le=e("rmhi"),Me=e("Qurx"),Ce=e("F/zT"),t=e("5qq5"),Ie=e("BiO0"),Ae=e("tneF"),Fe=e("FJDo"),te=e("9kvl"),Re=e("+up7"),ye=e("hd5d"),Ue=e("3fxf"),v=e("ovOe"),A=e.n(v),F=e("bRQS"),V=e("4i/N"),n=e("nKUr"),ue=function(O){var Oe=O.value,be=O.onChange,re=O.type,g=re===void 0?"file":re,d=Object(a.useState)(!1),j=Object(Ee.a)(d,2),U=j[0],$=j[1];return Object(n.jsxs)(P.a.Fragment,{children:[Object(n.jsxs)(L.a.Group,{children:[Object(n.jsx)(u.a,{value:Oe,readOnly:!0}),Object(n.jsxs)(fe.a,{size:"small",type:"primary",onClick:function(){return $(!U)},children:["toggle ",g," browser"]})]}),U&&Object(n.jsx)(Ue.a,{onFile:function(Z,de){return be&&be("".concat(de,"/").concat(Z.name))}})]})},G=function(O){var Oe=Object(te.l)(),be=O.visible,re=O.onVisibleChange,g=O.onFinish,d=O.id,j=O.initialData,U=O.groups,$=S.a.useForm(),C=Object(Ee.a)($,1),Z=C[0],de=!d||d===-1,De=Object(a.useState)("text"),le=Object(Ee.a)(De,2),k=le[0],ge=le[1],Se=Object(a.useCallback)(function(){return!!(Z.getFieldValue("group")==="global"||j)},[Z,j]),Ke=Object(a.useState)(""),N=Object(Ee.a)(Ke,2),i=N[0],s=N[1];Object(a.useEffect)(function(){if(typeof d=="object"){var o;Z.setFieldsValue(d),ge((o=d.type)!==null&&o!==void 0?o:"text")}else d&&d!==-1?Object(Re.e)(Number(d)).then(function(y){y.success&&(Z.setFieldsValue(y.data),ge(y.data.type),s(y.data.group))}):(Z.resetFields(),ge("text"))},[d,Z,j]);var c=Object(a.useCallback)(function(o){o.type&&o.type!==k&&ge(o.type)},[k]);return Object(n.jsxs)(Le.a,{form:Z,title:Oe.formatMessage({id:d?"editSetting":"newSetting",defaultMessage:d?"editSetting":"newSetting"}),width:"60vw",visible:!!be,onVisibleChange:re,onFinish:g,onValuesChange:c,children:[Object(n.jsxs)(L.a.Group,{children:[j?Object(n.jsx)(Me.a,{label:Object(n.jsx)(te.a,{id:"group",defaultMessage:"group"}),rules:[{required:!0}],width:"md",name:"group",disabled:Se()}):Object(n.jsx)(L.a.Item,{label:Object(n.jsx)(te.a,{id:"group",defaultMessage:"group"}),name:"group",children:Object(n.jsx)(I,{style:{width:"300px"},autoFocus:!0,value:i,onChange:function(y){return s(y)},filterOption:function(y,m){var B;return(m==null||(B=m.children)===null||B===void 0?void 0:B.toString().toLowerCase().indexOf(y.toLowerCase()))!==-1},children:U.map(function(o){return Object(n.jsx)(I.Option,{value:o,children:o},o)})})}),Object(n.jsx)(Me.a,{label:Object(n.jsx)(te.a,{id:"key",defaultMessage:"key"}),rules:[{required:!0}],width:"md",name:"key",disabled:Se()})]}),Object(n.jsxs)(L.a.Group,{children:[Object(n.jsx)(Ce.a,{name:"enumerable",disabled:Se(),label:Object(n.jsx)(te.a,{id:"enumerable",defaultMessage:"enumerable"})}),Object(n.jsx)(Ce.a,{name:"public",disabled:Se(),label:Object(n.jsx)(te.a,{id:"public",defaultMessage:"public"})})]}),Object(n.jsx)(L.a.Group,{children:Object(n.jsx)(t.a.Group,{disabled:!!(!de||j),name:"type",label:Object(n.jsx)(te.a,{id:"type"}),options:[{label:"text",value:"text"},{label:"markdown",value:"markdown"},{label:"json",value:"json"},{label:"file",value:"file"},{label:"image",value:"image"},{label:"boolean",value:"boolean"},{label:"number",value:"number"},{label:"array",value:"array"}]})}),Object(n.jsxs)("div",{children:[k==="text"&&Object(n.jsx)(Me.a,{width:"lg",name:"value",label:Object(n.jsx)(te.a,{id:"value"})}),k==="json"&&Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(Ie.a,{width:"lg",name:"value",label:Object(n.jsx)(te.a,{id:"value"}),tooltip:"".concat(Oe.formatMessage({id:"example_json"}),': {"name":"John", "age":30, "city":["New York","Warsaw"]}')}),Object(n.jsx)(L.a.Item,{noStyle:!0,shouldUpdate:!0,children:function(){try{return Object(n.jsx)(A.a,{src:JSON.parse(Z.getFieldValue("value"))})}catch(y){return Object(n.jsx)(A.a,{src:JSON.parse('{ "error": "cannot parse this json" }')})}}})]}),(k==="file"||k==="image")&&Object(n.jsx)(L.a.Item,{name:"value",label:"value",tooltip:"select file from current repository or upload new one",valuePropName:"value",children:Object(n.jsx)(ue,{type:k})}),k==="markdown"&&Object(n.jsx)(L.a.Item,{name:"value",label:"value",tooltip:"The editor is WYSIWYG and includes formatting tools whilst retaining the ability to write markdown shortcuts inline and output plain Markdown.",valuePropName:"value",children:Object(n.jsx)(ye.a,{directory:"settings/wysiwyg"})}),k==="boolean"?Object(n.jsx)(Ce.a,{name:"data",label:Object(n.jsx)(te.a,{id:"value"}),checkedChildren:Object(n.jsx)(F.a,{}),unCheckedChildren:Object(n.jsx)(V.a,{})}):Object(n.jsx)(L.a.Item,{noStyle:!0,hidden:!0,children:Object(n.jsx)(Ae.a,{name:"data",valuePropName:"data"})}),k==="number"&&Object(n.jsx)(Fe.a,{name:"data",label:Object(n.jsx)(te.a,{id:"value"})}),k==="array"&&Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(Ie.a,{width:"lg",name:"value",label:Object(n.jsx)(te.a,{id:"value"}),tooltip:"".concat(Oe.formatMessage({id:"example_json"}),": ['tutor', 'student']")}),Object(n.jsx)(L.a.Item,{noStyle:!0,shouldUpdate:!0,children:function(){try{return Object(n.jsx)(A.a,{src:JSON.parse(Z.getFieldValue("value"))})}catch(y){return Object(n.jsx)(A.a,{src:JSON.parse('{ "error": "cannot parse this json" }')})}}})]})]})]})},Te=p.a=G},"O/iA":function(me,p,e){},YjuE:function(me,p,e){"use strict";e.r(p);var ae=e("fOrg"),Y=e("+KLJ"),h=e("T2oS"),H=e("W9HT"),E=e("tJVT"),f=e("q1tI"),K=e.n(f),b=e("nhC9"),M=e("Ty5D"),r=e("9kvl"),a=e("tMyG"),P=e("+up7"),q=e("P2fV"),ee=e("NJEC"),Q=e("5Dmo"),D=e("3S7+"),l=e("+L6B"),W=e("2/Rp"),z=e("+BJd"),I=e("mr32"),je=e("jrin"),S=e("qLMh"),_=e("k1fw"),fe=e("miYZ"),X=e("tsqr"),u=e("9og8"),Ee=e("xvlK"),L=e("Qiat"),Le=e("HEzf"),Me=e("G3dp"),Ce=e("/MfK"),t=e("nKUr"),Ie=function(){var N=Object(u.a)(Object(S.a)().mark(function i(s,c,o){var y;return Object(S.a)().wrap(function(B){for(;;)switch(B.prev=B.next){case 0:return y=X.b.loading(s.formatMessage({id:"loading"})),B.prev=1,B.next=4,o&&o!==-1?Object(P.i)(o,Object(_.a)({},c)):Object(P.b)(Object(_.a)({},c));case 4:return y(),X.b.success(s.formatMessage({id:"success"})),B.abrupt("return",!0);case 9:return B.prev=9,B.t0=B.catch(1),y(),X.b.error(s.formatMessage({id:"error"})),B.abrupt("return",!1);case 14:case"end":return B.stop()}},i,null,[[1,9]])}));return function(s,c,o){return N.apply(this,arguments)}}(),Ae=function(){var N=Object(u.a)(Object(S.a)().mark(function i(s,c){var o;return Object(S.a)().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return o=X.b.loading(s.formatMessage({id:"loading"})),m.prev=1,m.next=4,Object(P.c)(c);case 4:return o(),X.b.success(s.formatMessage({id:"success"})),m.abrupt("return",!0);case 9:return m.prev=9,m.t0=m.catch(1),o(),X.b.error(s.formatMessage({id:"error"})),m.abrupt("return",!1);case 14:case"end":return m.stop()}},i,null,[[1,9]])}));return function(s,c){return N.apply(this,arguments)}}(),Fe=function(){var i=Object(f.useState)(!1),s=Object(E.a)(i,2),c=s[0],o=s[1],y=Object(f.useState)([]),m=Object(E.a)(y,2),B=m[0],ve=m[1],w=Object(f.useRef)(),ne=Object(r.l)(),ie=Object(r.m)("@@initialState"),T=ie.setInitialState;Object(f.useEffect)(function(){Object(P.f)().then(function(R){R.success&&ve(R.data.filter(function(J){return J!=="global"}))})},[]);var ce=[{title:Object(t.jsx)(r.a,{id:"group",defaultMessage:"group"}),dataIndex:"group",hideInSearch:!1,key:"group",valueType:"select",width:100,valueEnum:B.sort().reduce(function(R,J){return Object(_.a)(Object(_.a)({},R),{},Object(je.a)({},J,J))},{})},{title:Object(t.jsx)(r.a,{id:"key",defaultMessage:"key"}),dataIndex:"key",hideInSearch:!0},{title:Object(t.jsx)(r.a,{id:"type",defaultMessage:"type"}),dataIndex:"type",hideInSearch:!0},{title:Object(t.jsx)(r.a,{id:"enumerable",defaultMessage:"enumerable"}),dataIndex:"enumerable",hideInForm:!0,hideInSearch:!0,render:function(J,se){return Object(t.jsx)(I.a,{color:se.enumerable?"success":"error",children:Object(t.jsx)(r.a,{id:se.enumerable?"true":"false",defaultMessage:se.enumerable?"true":"false"})})}},{title:Object(t.jsx)(r.a,{id:"public",defaultMessage:"public"}),dataIndex:"public",hideInForm:!0,hideInSearch:!0,render:function(J,se){return Object(t.jsx)(I.a,{color:se.public?"success":"error",children:Object(t.jsx)(r.a,{id:se.public?"true":"false",defaultMessage:se.public?"true":"false"})})}},{hideInSearch:!0,title:Object(t.jsx)(r.a,{id:"pages.searchTable.titleOption",defaultMessage:"\u64CD\u4F5C"}),dataIndex:"option",valueType:"option",render:function(J,se){return[Object(t.jsx)(D.a,{title:Object(t.jsx)(r.a,{id:"edit",defaultMessage:"edit"}),children:Object(t.jsx)(W.a,{type:"primary",icon:Object(t.jsx)(Me.a,{}),onClick:function(){return o(se.id)}})},"edit"),Object(t.jsx)(ee.a,{title:Object(t.jsx)(r.a,{id:"deleteQuestion",defaultMessage:"Are you sure to delete this record?"}),onConfirm:Object(u.a)(Object(S.a)().mark(function oe(){var pe;return Object(S.a)().wrap(function(xe){for(;;)switch(xe.prev=xe.next){case 0:return xe.next=2,Ae(ne,se.id);case 2:pe=xe.sent,pe&&(o(!1),w.current&&w.current.reload());case 4:case"end":return xe.stop()}},oe)})),okText:Object(t.jsx)(r.a,{id:"yes",defaultMessage:"Yes"}),cancelText:Object(t.jsx)(r.a,{id:"no",defaultMessage:"No"}),children:Object(t.jsx)(D.a,{title:Object(t.jsx)(r.a,{id:"delete",defaultMessage:"delete"}),children:Object(t.jsx)(W.a,{type:"primary",icon:Object(t.jsx)(Ce.a,{}),danger:!0})})},"delete")]}}];return Object(t.jsxs)(K.a.Fragment,{children:[Object(t.jsx)(L.a,{headerTitle:ne.formatMessage({id:"menu.settings"}),actionRef:w,rowKey:"id",search:{layout:"vertical"},toolBarRender:function(){return[Object(t.jsxs)(W.a,{type:"primary",onClick:function(){o(-1)},children:[Object(t.jsx)(Ee.a,{})," ",Object(t.jsx)(r.a,{id:"pages.searchTable.new"})]},"primary")]},request:function(J){var se=J.pageSize,oe=J.current,pe=J.group;return Object(P.g)({per_page:se,current:oe,group:pe}).then(function(Pe){return Pe.success?{data:Pe.data.filter(function(xe){return xe.group!=="global"}),total:Pe.meta.total,success:!0}:[]})},columns:ce}),Object(t.jsx)(Le.a,{groups:B,id:c,visible:Number.isInteger(c),onVisibleChange:function(J){return!J&&o(!1)},onFinish:function(){var R=Object(u.a)(Object(S.a)().mark(function J(se){var oe,pe,Pe;return Object(S.a)().wrap(function(he){for(;;)switch(he.prev=he.next){case 0:return oe=se,he.next=3,Ie(ne,oe,Number(c));case 3:if(pe=he.sent,!pe){he.next=12;break}if(o(!1),w.current&&w.current.reload(),oe.group!=="global"){he.next=12;break}return he.next=10,Object(P.g)({current:1,per_page:100,group:"global"});case 10:Pe=he.sent,T(function(Be){return Object(_.a)(Object(_.a)({},Be),{},{config:Pe.success?Pe.data:Be==null?void 0:Be.config})});case 12:case"end":return he.stop()}},J)}));return function(J){return R.apply(this,arguments)}}()})]})},te=Fe,Re=e("oBTY"),ye=e("y8nQ"),Ue=e("Vl3Y"),v=e("tU7J"),A=e("wFql"),F=e("rmhi"),V=e("VMEa"),n=e("F/zT"),ue=e("BiO0"),G=e("ovOe"),Te=e.n(G),x=e("Fghh"),O=e("Qurx"),Oe=function(i){var s=i.field,c=i.name;return s!=null&&s.includes("boolean")?Object(t.jsx)(n.a,{name:c,checkedChildren:Object(t.jsx)(x.a,{id:"true"}),unCheckedChildren:Object(t.jsx)(x.a,{id:"false"})}):Object(t.jsx)(O.a,{width:"lg",name:c})},be=Oe,re=A.a.Text,g;(function(N){N.Array="array",N.String="string"})(g||(g={}));var d=function(i,s){return s===g.Array?i&&Array.isArray(i)?JSON.stringify(i):"[]":i},j=function(){var i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",s=arguments.length>1?arguments[1]:void 0;if(s===g.Array){var c=JSON.parse(i);return c&&Array.isArray(c)?c:[]}return i},U=function(i){var s=Object(x.k)(),c=i.visible,o=i.onVisibleChange,y=i.onFinish,m=i.value,B=Ue.a.useForm(),ve=Object(E.a)(B,1),w=ve[0],ne=Object(f.useMemo)(function(){return(m.rules||[]).includes(g.Array)?g.Array:g.String},[m.rules]);return Object(f.useEffect)(function(){w.setFieldsValue(Object(_.a)(Object(_.a)({},m),{},{value:d(m.value,ne)}))},[ne,m,w]),Object(t.jsxs)(F.a,{form:w,title:m.full_key,width:"60vw",visible:c,onVisibleChange:o,onFinish:Object(u.a)(Object(S.a)().mark(function ie(){var T;return Object(S.a)().wrap(function(R){for(;;)switch(R.prev=R.next){case 0:return R.next=2,Object(P.h)({key:m.full_key,value:j(w.getFieldsValue().value,ne)});case 2:if(T=R.sent,!T.success){R.next=6;break}return y(T.success===!0),R.abrupt("return",T.success);case 6:return R.abrupt("return");case 7:case"end":return R.stop()}},ie)})),children:[Object(t.jsxs)(V.a.Group,{children:[Object(t.jsx)(n.a,{disabled:!0,name:"public",label:Object(t.jsx)(r.a,{id:"public",defaultMessage:"public"})}),Object(t.jsx)(n.a,{disabled:!0,name:"readonly",label:Object(t.jsx)(r.a,{id:"readonly",defaultMessage:"readonly"})}),Object(t.jsx)(V.a.Item,{shouldUpdate:!0,label:Object(t.jsx)(r.a,{id:"rules",defaultMessage:"rules"}),children:function(){return Object(t.jsx)(re,{code:!0,children:JSON.stringify(w.getFieldValue("rules"))})}})]}),ne===g.Array?Object(t.jsxs)(t.Fragment,{children:[Object(t.jsx)(ue.a,{width:"lg",name:"value",label:Object(t.jsx)(r.a,{id:"value"}),tooltip:"".concat(s.formatMessage({id:"example_json"}),': ["first_field_name", "second_field_name"]')}),Object(t.jsx)(V.a.Item,{noStyle:!0,shouldUpdate:!0,children:function(){try{return Object(t.jsx)(Te.a,{src:JSON.parse(w.getFieldValue("value"))})}catch(T){return Object(t.jsx)(Te.a,{src:JSON.parse('{ "error": "cannot parse this array" }')})}}})]}):Object(t.jsx)(t.Fragment,{children:Object(t.jsx)(V.a.Item,{shouldUpdate:!0,label:Object(t.jsx)(r.a,{id:"value"}),children:function(){return Object(t.jsx)(be,{field:w.getFieldValue("rules"),name:"value"})}})})]})},$=U,C=e("c+yx"),Z=[{title:Object(t.jsx)(r.a,{id:"key",defaultMessage:"key"}),dataIndex:"key",hideInSearch:!1,sorter:!0},{title:Object(t.jsx)(r.a,{id:"readonly",defaultMessage:"readonly"}),dataIndex:"readonly",hideInForm:!0,hideInSearch:!0,sorter:!0,render:function(i,s){return Object(t.jsx)(I.a,{color:s.readonly?"success":"error",children:Object(t.jsx)(r.a,{id:s.readonly?"true":"false",defaultMessage:s.readonly?"true":"false"})})}},{title:Object(t.jsx)(r.a,{id:"public",defaultMessage:"public"}),dataIndex:"public",hideInForm:!0,hideInSearch:!0,sorter:!0,render:function(i,s){return Object(t.jsx)(I.a,{color:s.public?"success":"error",children:Object(t.jsx)(r.a,{id:s.public?"true":"false",defaultMessage:s.public?"true":"false"})})}},{title:Object(t.jsx)(r.a,{id:"value",defaultMessage:"value"}),dataIndex:"value",hideInForm:!0,hideInSearch:!0,render:function(i,s){return typeof s.value=="boolean"?Object(t.jsx)(I.a,{color:s.value?"success":"error",children:Object(t.jsx)(r.a,{id:s.value?"true":"false",defaultMessage:s.value?"true":"false"})}):Array.isArray(s.value)?s.value.map(function(c){return typeof c=="object"?K.a.Children.toArray(Object(t.jsx)("p",{children:Object.keys(c).map(function(o){return"".concat(o,": ").concat(c[o])}).join(", ")})):c}):s.value}}],de=function N(i,s){var c=arguments.length>2&&arguments[2]!==void 0?arguments[2]:[];return!i||typeof i!="object"?!1:(Object.keys(i).forEach(function(o){var y=i[o];o===s?c.push(i):typeof y=="object"&&N(y,s,c)}),c)},De=function(i){var s=i.packageName,c=i.values,o=i.onValueUpdated,y=Object(r.l)(),m=Object(f.useState)(),B=Object(E.a)(m,2),ve=B[0],w=B[1],ne=Object(f.useMemo)(function(){var ie=c[s];return de(ie,"rules")},[c,s]);return Object(t.jsxs)(K.a.Fragment,{children:[Object(t.jsx)(L.a,{headerTitle:y.formatMessage({id:"menu.settings"}),rowKey:"key",search:{layout:"vertical"},columns:[].concat(Z,[{hideInSearch:!0,title:Object(t.jsx)(r.a,{id:"pages.searchTable.titleOption",defaultMessage:"\u64CD\u4F5C"}),dataIndex:"option",valueType:"option",render:function(T,ce){return[Object(t.jsx)(D.a,{title:Object(t.jsx)(r.a,{id:"edit",defaultMessage:"edit"}),children:Object(t.jsx)(W.a,{type:"primary",icon:Object(t.jsx)(Me.a,{}),onClick:function(){return w(ce)}})},"edit")]}}]),request:function(T,ce){var R=T.key,J=ce&&Object.entries(ce)[0];return new Promise(function(se){var oe=ne?Object(Re.a)(ne):[];R&&(oe=oe.filter(function(pe){return pe.key.toLowerCase().includes(R.toLowerCase())})),J&&(oe=Object(C.i)(oe,J[0],J[1]!=="ascend")),se({data:oe,success:!0,total:oe.length})})}}),ve&&Object(t.jsx)($,{value:ve,visible:ve!==void 0,onVisibleChange:function(T){return T===!1&&w(void 0)},onFinish:Object(u.a)(Object(S.a)().mark(function ie(){return Object(S.a)().wrap(function(ce){for(;;)switch(ce.prev=ce.next){case 0:o();case 1:case"end":return ce.stop()}},ie)}))})]})},le=De,k=e("t4ZK"),ge=e("I5X1"),Se=function(i){return i.replaceAll("escolalms","").split("_").join("")},Ke=p.default=function(){var N=Object(M.l)(),i=Object(r.l)(),s=N.tab,c=s===void 0?"user_settings":s,o=Object(f.useState)(),y=Object(E.a)(o,2),m=y[0],B=y[1],ve=Object(f.useCallback)(function(){Object(P.a)().then(function(T){T.success&&B(T.data)})},[]),w=Object(ge.a)("@@initialState"),ne=w.initialState,ie=Object(f.useCallback)(function(){var T;return(ne==null||(T=ne.config)===null||T===void 0?void 0:T.length)!==0},[ne]);return Object(f.useEffect)(function(){ve()},[]),m?Object(t.jsxs)(a.a,{title:Object(t.jsx)(r.a,{id:"settings"}),header:{breadcrumb:{routes:[{path:"settings",breadcrumbName:i.formatMessage({id:"menu.Configuration.settings"})},{path:String(c),breadcrumbName:String(c)}]}},children:[!ie()&&Object(t.jsx)(Y.a,{message:Object(t.jsx)(r.a,{id:"global_settings_alert_title",defaultMessage:"Add global settings"}),description:Object(t.jsx)(r.a,{id:"global_settings_alert_description",defaultMessage:"Global settings are used to configure the entire LMS. You can add global settings by clicking the button below."}),type:"warning",showIcon:!0,style:{marginBottom:"20px"}}),Object(t.jsxs)(b.a,{tabs:{type:"card",activeKey:c,onChange:function(ce){return r.f.push("/configuration/settings/".concat(ce))}},children:[Object(t.jsx)(b.a.TabPane,{tab:Object(t.jsx)(r.a,{id:"user.settings"}),children:Object(t.jsx)(te,{})},"user_settings"),Object(t.jsx)(b.a.TabPane,{tab:Object(t.jsx)(r.a,{id:"global_settings"}),children:Object(t.jsx)(k.a,{})},"global_settings"),Object.keys(m).map(function(T){return Object(t.jsxs)(b.a.TabPane,{tab:Object(t.jsxs)("span",{children:[Object(t.jsx)(r.a,{id:"package"})," ",Se(T)]}),children:[Object(t.jsx)(le,{values:m,packageName:T,onValueUpdated:function(){return ve()}}),T]},T)})]})]}):Object(t.jsx)(H.a,{})}},hd5d:function(me,p,e){"use strict";var ae=e("qLMh"),Y=e("9og8"),h=e("q1tI"),H=e.n(h),E=e("acco"),f=e.n(E),K=e("BAh9"),b=e("vtG9"),M=e.n(b),r=e("9kvl"),a=e("nKUr"),P=e.n(a),q=function(D){var l=D.attrs,W=l.href,z=W.split("/").pop();return Object(a.jsx)("p",{children:Object(a.jsx)("a",{rel:"noreferrer",href:W,target:"_blank",children:z})})},ee=function(D){var l=D.value,W=D.onChange,z=D.directory,I=z===void 0?"/wysiwyg":z,je=Object(r.l)();return Object(a.jsx)("div",{className:"form-wysiwyg-markdown",children:Object(a.jsx)(f.a,{excludeBlockMenuItems:["Sketch"],embeds:[{matcher:function(_){return!0},component:q}],uploadImage:function(){var S=Object(Y.a)(Object(ae.a)().mark(function _(fe){var X,u;return Object(ae.a)().wrap(function(L){for(;;)switch(L.prev=L.next){case 0:return L.next=2,Object(K.e)(fe,I);case 2:if(X=L.sent,!X.success){L.next=8;break}if(!fe.type.includes("image/")){L.next=7;break}return u=X.data[0].name.includes("/")?X.data[0].name:"".concat(I).concat(X.data[0].name),L.abrupt("return",Object(K.d)(u,1e3));case 7:return L.abrupt("return",X.data[0].url);case 8:throw new Error("Error while uploading");case 9:case"end":return L.stop()}},_)}));return function(_){return S.apply(this,arguments)}}(),defaultValue:l||"",onChange:function(_){return W&&W(_())},placeholder:je.formatMessage({id:"wysiwyg_placeholder"})})})};p.a=ee},t4ZK:function(me,p,e){"use strict";e.d(p,"b",function(){return te});var ae=e("P2fV"),Y=e("NJEC"),h=e("+L6B"),H=e("2/Rp"),E=e("5Dmo"),f=e("3S7+"),K=e("tJVT"),b=e("oBTY"),M=e("qLMh"),r=e("k1fw"),a=e("miYZ"),P=e("tsqr"),q=e("9og8"),ee=e("xvlK"),Q=e("q1tI"),D=e.n(Q),l=e("9kvl"),W=e("Qiat"),z=e("/y+f"),I=e("+up7"),je=e("HEzf"),S=e("+YFz"),_=e("G3dp"),fe=e("/MfK"),X=e("ujla"),u=e("nKUr"),Ee=e.n(u),L=function(){var v=Object(q.a)(Object(M.a)().mark(function A(F,V,n){var ue,G;return Object(M.a)().wrap(function(x){for(;;)switch(x.prev=x.next){case 0:return ue=P.b.loading(F.formatMessage({id:"loading"})),x.prev=1,x.next=4,n&&n!==-1?Object(I.i)(n,Object(r.a)({},V)):Object(I.b)(Object(r.a)({},V));case 4:return G=x.sent,ue(),P.b.success(F.formatMessage({id:"success"})),x.abrupt("return",{success:!0,updatedSettings:G});case 10:return x.prev=10,x.t0=x.catch(1),ue(),P.b.error(F.formatMessage({id:"error"})),x.abrupt("return",{success:!1,updateSettings:null});case 15:case"end":return x.stop()}},A,null,[[1,10]])}));return function(F,V,n){return v.apply(this,arguments)}}(),Le=function(){var v=Object(q.a)(Object(M.a)().mark(function A(F,V){var n;return Object(M.a)().wrap(function(G){for(;;)switch(G.prev=G.next){case 0:return n=P.b.loading(F.formatMessage({id:"loading"})),G.prev=1,G.next=4,Object(I.c)(V);case 4:return n(),P.b.success(F.formatMessage({id:"success"})),G.abrupt("return",!0);case 9:return G.prev=9,G.t0=G.catch(1),n(),P.b.error(F.formatMessage({id:"error"})),G.abrupt("return",!1);case 14:case"end":return G.stop()}},A,null,[[1,9]])}));return function(F,V){return v.apply(this,arguments)}}(),Me=function(A){return A.toLowerCase().replace(/(_\w)/g,function(F){return F.toUpperCase().substr(1)})},Ce=function v(A){return A.reduce(function(F,V){return[].concat(Object(b.a)(F),Object(b.a)(V.routes?v(V.routes):[]),[V])},[]).filter(function(F){return F.layout!==!1&&F.hideInMenu!==!0})},t=["statistics","user_submission","user_projects"],Ie=["public"],Ae=["email","sms"],Fe=function(A){return"hideInMenu-".concat(Me(A.split("/").join("_")))},te=function(A){return"disableTopicType-".concat(A)},Re=[].concat(Object(b.a)(Object.keys(z.g).map(function(v){return{key:te(v),group:"global",value:"false",public:!0,enumerable:!0,sort:1,type:"boolean",data:!1}})),Object(b.a)(Ce(Object(X.a)()).filter(function(v){return v.path&&v.path!=="/"}).map(function(v){return{path:v.path,key:Fe(v.path),group:"global",value:"false",public:!0,enumerable:!0,sort:1,type:"boolean",data:!1}})),Object(b.a)(["ECommerce","Certificates"].map(function(v){return{key:"disable-".concat(v),group:"global",value:"false",public:!0,enumerable:!0,sort:1,type:"boolean",data:!1}})),Object(b.a)(Ie.map(function(v){return{key:"showInCourseAdditionalSettings-".concat(v),group:"global",value:"false",public:!0,enumerable:!0,sort:1,type:"boolean",data:!1}})),Object(b.a)(t.map(function(v){return{key:"hideInCourseTabs-".concat(v),group:"global",value:"false",public:!0,enumerable:!0,sort:1,type:"boolean",data:!1}})),Object(b.a)(Ae.map(function(v){return{key:"hideTemplateTab-".concat(v),group:"global",value:"false",public:!0,enumerable:!0,sort:1,type:"boolean",data:!1}}))).reduce(function(v,A,F){return v[A.key]=Object(r.a)(Object(r.a)({},A),{},{id:-100*F}),v},{}),ye=Object(r.a)({logo:{id:-1,key:"logo",group:"global",value:"",public:!0,enumerable:!0,sort:0,type:"image",data:"EscolaLMS"},frontURL:{id:-2,key:"frontURL",group:"global",value:"",public:!0,enumerable:!0,sort:0,type:"text",data:"EscolaLMS"},maxLessonsNestingInProgram:{id:-4,key:"maxLessonsNestingInProgram",group:"global",value:"0",public:!0,enumerable:!0,sort:1,type:"number",data:0},minTopicNestingInProgram:{id:-5,key:"minTopicNestingInProgram",group:"global",value:"0",public:!0,enumerable:!0,sort:1,type:"number",data:0},companyName:{id:-6,key:"companyName",group:"global",value:"Wellms",public:!0,enumerable:!0,sort:0,type:"text",data:"Wellms"},companyURL:{id:-7,key:"companyURL",group:"global",value:"https://www.wellms.io/",public:!0,enumerable:!0,sort:0,type:"text",data:"https://www.wellms.io/"},logoLogin:{id:-8,key:"logoLogin",group:"global",value:"",public:!0,enumerable:!0,sort:0,type:"image",data:"EscolaLMS"},logoFooter:{id:-9,key:"logoFooter",group:"global",value:"",public:!0,enumerable:!0,sort:0,type:"image",data:"EscolaLMS"}},Re),Ue=function(){var A=Object(Q.useState)(!1),F=Object(K.a)(A,2),V=F[0],n=F[1],ue=Object(Q.useRef)(),G=Object(l.l)(),Te=Object(l.m)("@@initialState"),x=Te.setInitialState,O=Te.initialState,Oe=[{title:Object(u.jsx)(l.a,{id:"key",defaultMessage:"key"}),dataIndex:"key",hideInSearch:!0,render:function(g,d){return Object(u.jsx)(Q.Fragment,{children:Object(u.jsxs)(f.a,{title:Object(u.jsx)(l.a,{id:"Settings.tooltip.".concat(d.key)}),children:[d.key," ",Object(u.jsx)(S.a,{})]})})}},{title:Object(u.jsx)(l.a,{id:"type",defaultMessage:"type"}),dataIndex:"type",hideInSearch:!0},{title:Object(u.jsx)(l.a,{id:"value",defaultMessage:"value"}),dataIndex:"value",hideInForm:!0,hideInSearch:!0,render:function(g,d){return d.value}},{hideInSearch:!0,title:Object(u.jsx)(l.a,{id:"pages.searchTable.titleOption",defaultMessage:"\u64CD\u4F5C"}),dataIndex:"option",valueType:"option",render:function(g,d){return[d.id>0?Object(u.jsx)(f.a,{title:Object(u.jsx)(l.a,{id:"edit",defaultMessage:"edit"}),children:Object(u.jsx)(H.a,{type:"primary",icon:Object(u.jsx)(_.a,{}),onClick:function(){return n(d.id)}})},"edit"):Object(u.jsx)(f.a,{title:Object(u.jsx)(l.a,{id:"create",defaultMessage:"create"}),children:Object(u.jsx)(H.a,{type:"primary",icon:Object(u.jsx)(ee.a,{}),onClick:function(){n(ye[d.key]||-1)}})},"create"),Object(u.jsx)(Y.a,{title:Object(u.jsx)(l.a,{id:"deleteQuestion",defaultMessage:"Are you sure to delete this record?"}),onConfirm:Object(q.a)(Object(M.a)().mark(function j(){var U;return Object(M.a)().wrap(function(C){for(;;)switch(C.prev=C.next){case 0:return C.next=2,Le(G,d.id);case 2:U=C.sent,U&&(n(!1),ue.current&&ue.current.reload());case 4:case"end":return C.stop()}},j)})),okText:Object(u.jsx)(l.a,{id:"yes",defaultMessage:"Yes"}),cancelText:Object(u.jsx)(l.a,{id:"no",defaultMessage:"No"}),children:d.id>0?Object(u.jsx)(f.a,{title:Object(u.jsx)(l.a,{id:"delete",defaultMessage:"delete"}),children:Object(u.jsx)(H.a,{type:"primary",icon:Object(u.jsx)(fe.a,{}),danger:!0})}):null},"delete")]}}],be=function(g){var d;if(!!g&&(!(O!=null&&(d=O.config)!==null&&d!==void 0&&d.length)&&g&&x(Object(r.a)(Object(r.a)({},O),{},{config:[g]})),!!(O!=null&&O.config))){var j=O==null?void 0:O.config.map(function(U){return U.key===g.key?Object(r.a)(Object(r.a)({},U),g):U});x(Object(r.a)(Object(r.a)({},O),{},{config:j}))}};return Object(u.jsxs)(D.a.Fragment,{children:[Object(u.jsx)(W.a,{headerTitle:G.formatMessage({id:"menu.settings"}),search:!1,toolBarRender:!1,actionRef:ue,rowKey:"id",request:function(g){var d=g.pageSize,j=g.current;return Object(I.g)({per_page:d,current:j,group:"global"}).then(function(U){if(U.success){var $=[].concat(Object(b.a)(Object.keys(ye).map(function(C){return U.data.find(function(Z){return Z.key===C})||ye[C]})),Object(b.a)(U.data.filter(function(C){return!Object.keys(ye).includes(C.key)})));return{data:$,total:$.length,success:!0}}return[]})},columns:Oe}),Object(u.jsx)(je.a,{groups:[],id:V,visible:V,initialData:ye,onVisibleChange:function(g){return!g&&n(!1)},onFinish:function(){var re=Object(q.a)(Object(M.a)().mark(function g(d){var j,U,$,C;return Object(M.a)().wrap(function(de){for(;;)switch(de.prev=de.next){case 0:return j=d,j.type==="number"&&(j=Object(r.a)(Object(r.a)({},j),{},{value:String(j.data)})),j.type==="boolean"&&(j=Object(r.a)(Object(r.a)({},j),{},{value:j.data})),j.type==="array"&&(j=Object(r.a)(Object(r.a)({},j),{},{value:JSON.parse(j.value)})),de.next=6,L(G,j,Number(V));case 6:U=de.sent,$=U.success,C=U.updatedSettings,$&&(C!=null&&C.success&&be(C.data),n(!1),ue.current&&ue.current.reload());case 10:case"end":return de.stop()}},g)}));return function(g){return re.apply(this,arguments)}}()})]})};p.a=Ue},tneF:function(me,p,e){"use strict";var ae=e("sRBo"),Y=e("kaz8"),h=e("VTBJ"),H=e("Ff2n"),E=e("nKUr"),f=e.n(E),K=e("uX+g"),b=e("q1tI"),M=e.n(b),r=e("WFLz"),a=e("adzw"),P=["options","fieldProps","proFieldProps","valueEnum"],q=M.a.forwardRef(function(l,W){var z=l.options,I=l.fieldProps,je=l.proFieldProps,S=l.valueEnum,_=Object(H.a)(l,P);return Object(E.jsx)(a.a,Object(h.a)({ref:W,valueType:"checkbox",valueEnum:Object(K.a)(S,void 0),fieldProps:Object(h.a)({options:z},I),lightProps:Object(h.a)({labelFormatter:function(){return Object(E.jsx)(a.a,Object(h.a)({ref:W,valueType:"checkbox",mode:"read",valueEnum:Object(K.a)(S,void 0),filedConfig:{customLightMode:!0},fieldProps:Object(h.a)({options:z},I),proFieldProps:je},_))}},_.lightProps),proFieldProps:je},_))}),ee=M.a.forwardRef(function(l,W){var z=l.fieldProps,I=l.children;return Object(E.jsx)(Y.a,Object(h.a)(Object(h.a)({ref:W},z),{},{children:I}))}),Q=Object(r.a)(ee,{valuePropName:"checked"}),D=Q;D.Group=q,p.a=D},vtG9:function(me,p,e){}}]);

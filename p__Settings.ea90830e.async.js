(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{"/y+f":function(ve,M,e){"use strict";e.d(M,"g",function(){return oe}),e.d(M,"e",function(){return Z}),e.d(M,"f",function(){return x}),e.d(M,"d",function(){return _}),e.d(M,"a",function(){return g}),e.d(M,"c",function(){return P}),e.d(M,"b",function(){return n});var oe;(function(a){a.Unselected="",a.RichText="EscolaLms\\TopicTypes\\Models\\TopicContent\\RichText",a.OEmbed="EscolaLms\\TopicTypes\\Models\\TopicContent\\OEmbed",a.Audio="EscolaLms\\TopicTypes\\Models\\TopicContent\\Audio",a.Video="EscolaLms\\TopicTypes\\Models\\TopicContent\\Video",a.H5P="EscolaLms\\TopicTypes\\Models\\TopicContent\\H5P",a.Image="EscolaLms\\TopicTypes\\Models\\TopicContent\\Image",a.PDF="EscolaLms\\TopicTypes\\Models\\TopicContent\\PDF",a.SCORM="EscolaLms\\TopicTypes\\Models\\TopicContent\\ScormSco",a.Project="EscolaLms\\TopicTypeProject\\Models\\Project",a.GiftQuiz="EscolaLms\\TopicTypeGift\\Models\\GiftQuiz"})(oe||(oe={}));var w;(function(a){a.OrderPaid="EscolaLms\\Cart\\Events\\OrderPaid",a.UserLogged="EscolaLms\\Auth\\Events\\UserLogged"})(w||(w={}));var F;(function(a){a.draft="draft",a.published="published",a.archived="archived"})(F||(F={}));var Z;(function(a){a.email="EscolaLms\\TemplatesEmail\\Core\\EmailChannel",a.pdf="EscolaLms\\TemplatesPdf\\Core\\PdfChannel",a.sms="EscolaLms\\TemplatesSms\\Core\\SmsChannel"})(Z||(Z={}));var x;(function(a){a.ManuallyTriggeredEvent="EscolaLms\\Templates\\Events\\ManuallyTriggeredEvent"})(x||(x={}));var v;(function(a){a.cart_fixed="cart_fixed",a.cart_percent="cart_percent",a.product_fixed="product_fixed",a.product_percent="product_percent"})(v||(v={}));var _;(function(a){a.MULTIPLE_CHOICE="multiple_choice",a.MULTIPLE_CHOICE_WITH_MULTIPLE_RIGHT_ANSWERS="multiple_choice_with_multiple_right_answers",a.TRUE_FALSE="true_false",a.SHORT_ANSWERS="short_answers",a.MATCHING="matching",a.NUMERICAL_QUESTION="numerical_question",a.ESSAY="essay",a.DESCRIPTION="description"})(_||(_={}));var g;(function(a){a.PRESENT="present",a.PRESENT_NOT_EXERCISING="present_not_exercising",a.ABSENT="absent",a.EXCUSED_ABSENCE="excused_absence"})(g||(g={}));var P;(function(a){a.Manual="manual",a.TeamsForms="teams_forms",a.TeamsLecture="teams_lecture",a.TestPortal="test_portal"})(P||(P={}));var n;(function(a){a.Simple="simple",a.Complex="complex"})(n||(n={}))},"5qq5":function(ve,M,e){"use strict";var oe=e("7Kak"),w=e("9yH6"),F=e("VTBJ"),Z=e("Ff2n"),x=e("nKUr"),v=e.n(x),_=e("uX+g"),g=e("q1tI"),P=e.n(g),n=e("WFLz"),a=e("adzw"),R=["fieldProps","options","radioType","layout","proFieldProps","valueEnum"],re=P.a.forwardRef(function(l,K){var z=l.fieldProps,T=l.options,je=l.radioType,D=l.layout,W=l.proFieldProps,Oe=l.valueEnum,H=Object(Z.a)(l,R);return Object(x.jsx)(a.a,Object(F.a)(Object(F.a)({valueType:je==="button"?"radioButton":"radio",ref:K,valueEnum:Object(_.a)(Oe,void 0)},H),{},{fieldProps:Object(F.a)({options:T,layout:D},z),proFieldProps:W,filedConfig:{customLightMode:!0}}))}),ne=P.a.forwardRef(function(l,K){var z=l.fieldProps,T=l.children;return Object(x.jsx)(w.a,Object(F.a)(Object(F.a)({},z),{},{ref:K,children:T}))}),q=Object(n.a)(ne,{valuePropName:"checked",ignoreWidth:!0}),C=q;C.Group=re,C.Button=w.a.Button,C.displayName="ProFormComponent",M.a=C},FJDo:function(ve,M,e){"use strict";var oe=e("VTBJ"),w=e("Ff2n"),F=e("nKUr"),Z=e.n(F),x=e("q1tI"),v=e.n(x),_=e("adzw"),g=["fieldProps","min","proFieldProps","max"],P=function(a,R){var re=a.fieldProps,ne=a.min,q=a.proFieldProps,C=a.max,l=Object(w.a)(a,g);return Object(F.jsx)(_.a,Object(oe.a)({valueType:"digit",fieldProps:Object(oe.a)({min:ne,max:C},re),ref:R,filedConfig:{defaultProps:{width:"100%"}},proFieldProps:q},l))};M.a=v.a.forwardRef(P)},HEzf:function(ve,M,e){"use strict";var oe=e("EFp3"),w=e("O/iA"),F=e("OaEy"),Z=e("wx14"),x=e("U8pU"),v=e("ODXe"),_=e("TSYQ"),g=e.n(_),P=e("Zm9Q"),n=e("bT9E"),a=e("q1tI"),R=e.n(a),re=e("H84U"),ne=e("2fM7"),q=e("0n0R"),C=ne.a.Option;function l(h){return h&&h.type&&(h.type.isSelectOption||h.type.isSelectOptGroup)}var K=function(m,me){var fe=m.prefixCls,ee=m.className,b=m.popupClassName,d=m.dropdownClassName,j=m.children,U=m.dataSource,$=Object(P.a)(j),E;if($.length===1&&Object(q.c)($[0])&&!l($[0])){var Y=Object(v.a)($,1);E=Y[0]}var de=E?function(){return E}:void 0,De;return $.length&&l($[0])?De=j:De=U?U.map(function(se){if(Object(q.c)(se))return se;switch(Object(x.a)(se)){case"string":return a.createElement(C,{key:se,value:se},se);case"object":{var Q=se.value;return a.createElement(C,{key:Q,value:Q},se.text)}default:return}}):[],a.createElement(re.a,null,function(se){var Q=se.getPrefixCls,ge=Q("select",fe);return a.createElement(ne.a,Object(Z.a)({ref:me},Object(n.a)(m,["dataSource"]),{prefixCls:ge,popupClassName:b||d,className:g()("".concat(ge,"-auto-complete"),ee),mode:ne.a.SECRET_COMBOBOX_MODE_DO_NOT_USE},{getInputElement:de}),De)})},z=a.forwardRef(K);z.Option=C;var T=z,je=e("y8nQ"),D=e("Vl3Y"),W=e("+L6B"),Oe=e("2/Rp"),H=e("5NDa"),u=e("5rEg"),Ee=e("tJVT"),I=e("VMEa"),Le=e("rmhi"),ye=e("Qurx"),Ce=e("F/zT"),t=e("5qq5"),Ie=e("BiO0"),Ae=e("tneF"),Fe=e("FJDo"),k=e("9kvl"),Re=e("+up7"),Me=e("hd5d"),Ue=e("3fxf"),f=e("ovOe"),S=e.n(f),L=e("bRQS"),V=e("4i/N"),r=e("nKUr"),ue=function(m){var me=m.value,fe=m.onChange,ee=m.type,b=ee===void 0?"file":ee,d=Object(a.useState)(!1),j=Object(Ee.a)(d,2),U=j[0],$=j[1];return Object(r.jsxs)(R.a.Fragment,{children:[Object(r.jsxs)(I.a.Group,{children:[Object(r.jsx)(u.a,{value:me,readOnly:!0}),Object(r.jsxs)(Oe.a,{size:"small",type:"primary",onClick:function(){return $(!U)},children:["toggle ",b," browser"]})]}),U&&Object(r.jsx)(Ue.a,{onFile:function(Y,de){return fe&&fe("".concat(de,"/").concat(Y.name))}})]})},G=function(m){var me=Object(k.l)(),fe=m.visible,ee=m.onVisibleChange,b=m.onFinish,d=m.id,j=m.initialData,U=m.groups,$=D.a.useForm(),E=Object(Ee.a)($,1),Y=E[0],de=!d||d===-1,De=Object(a.useState)("text"),se=Object(Ee.a)(De,2),Q=se[0],ge=se[1],Se=Object(a.useCallback)(function(){return!!(Y.getFieldValue("group")==="global"||j)},[Y,j]),Ke=Object(a.useState)(""),N=Object(Ee.a)(Ke,2),i=N[0],s=N[1];Object(a.useEffect)(function(){if(typeof d=="object"){var o;Y.setFieldsValue(d),ge((o=d.type)!==null&&o!==void 0?o:"text")}else d&&d!==-1?Object(Re.e)(Number(d)).then(function(p){p.success&&(Y.setFieldsValue(p.data),ge(p.data.type),s(p.data.group))}):(Y.resetFields(),ge("text"))},[d,Y,j]);var c=Object(a.useCallback)(function(o){o.type&&o.type!==Q&&ge(o.type)},[Q]);return Object(r.jsxs)(Le.a,{form:Y,title:me.formatMessage({id:d?"editSetting":"newSetting",defaultMessage:d?"editSetting":"newSetting"}),width:"60vw",visible:!!fe,onVisibleChange:ee,onFinish:b,onValuesChange:c,children:[Object(r.jsxs)(I.a.Group,{children:[j?Object(r.jsx)(ye.a,{label:Object(r.jsx)(k.a,{id:"group",defaultMessage:"group"}),rules:[{required:!0}],width:"md",name:"group",disabled:Se()}):Object(r.jsx)(I.a.Item,{label:Object(r.jsx)(k.a,{id:"group",defaultMessage:"group"}),name:"group",children:Object(r.jsx)(T,{style:{width:"300px"},autoFocus:!0,value:i,onChange:function(p){return s(p)},filterOption:function(p,O){var B;return(O==null||(B=O.children)===null||B===void 0?void 0:B.toString().toLowerCase().indexOf(p.toLowerCase()))!==-1},children:U.map(function(o){return Object(r.jsx)(T.Option,{value:o,children:o},o)})})}),Object(r.jsx)(ye.a,{label:Object(r.jsx)(k.a,{id:"key",defaultMessage:"key"}),rules:[{required:!0}],width:"md",name:"key",disabled:Se()})]}),Object(r.jsxs)(I.a.Group,{children:[Object(r.jsx)(Ce.a,{name:"enumerable",disabled:Se(),label:Object(r.jsx)(k.a,{id:"enumerable",defaultMessage:"enumerable"})}),Object(r.jsx)(Ce.a,{name:"public",disabled:Se(),label:Object(r.jsx)(k.a,{id:"public",defaultMessage:"public"})})]}),Object(r.jsx)(I.a.Group,{children:Object(r.jsx)(t.a.Group,{disabled:!!(!de||j),name:"type",label:Object(r.jsx)(k.a,{id:"type"}),options:[{label:"text",value:"text"},{label:"markdown",value:"markdown"},{label:"json",value:"json"},{label:"file",value:"file"},{label:"image",value:"image"},{label:"boolean",value:"boolean"},{label:"number",value:"number"},{label:"array",value:"array"}]})}),Object(r.jsxs)("div",{children:[Q==="text"&&Object(r.jsx)(ye.a,{width:"lg",name:"value",label:Object(r.jsx)(k.a,{id:"value"})}),Q==="json"&&Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(Ie.a,{width:"lg",name:"value",label:Object(r.jsx)(k.a,{id:"value"}),tooltip:"".concat(me.formatMessage({id:"example_json"}),': {"name":"John", "age":30, "city":["New York","Warsaw"]}')}),Object(r.jsx)(I.a.Item,{noStyle:!0,shouldUpdate:!0,children:function(){try{return Object(r.jsx)(S.a,{src:JSON.parse(Y.getFieldValue("value"))})}catch(p){return Object(r.jsx)(S.a,{src:JSON.parse('{ "error": "cannot parse this json" }')})}}})]}),(Q==="file"||Q==="image")&&Object(r.jsx)(I.a.Item,{name:"value",label:"value",tooltip:"select file from current repository or upload new one",valuePropName:"value",children:Object(r.jsx)(ue,{type:Q})}),Q==="markdown"&&Object(r.jsx)(I.a.Item,{name:"value",label:"value",tooltip:"The editor is WYSIWYG and includes formatting tools whilst retaining the ability to write markdown shortcuts inline and output plain Markdown.",valuePropName:"value",children:Object(r.jsx)(Me.a,{directory:"settings/wysiwyg"})}),Q==="boolean"?Object(r.jsx)(Ce.a,{name:"data",label:Object(r.jsx)(k.a,{id:"value"}),checkedChildren:Object(r.jsx)(L.a,{}),unCheckedChildren:Object(r.jsx)(V.a,{})}):Object(r.jsx)(I.a.Item,{noStyle:!0,hidden:!0,children:Object(r.jsx)(Ae.a,{name:"data",valuePropName:"data"})}),Q==="number"&&Object(r.jsx)(Fe.a,{name:"data",label:Object(r.jsx)(k.a,{id:"value"})}),Q==="array"&&Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(Ie.a,{width:"lg",name:"value",label:Object(r.jsx)(k.a,{id:"value"}),tooltip:"".concat(me.formatMessage({id:"example_json"}),": ['tutor', 'student']")}),Object(r.jsx)(I.a.Item,{noStyle:!0,shouldUpdate:!0,children:function(){try{return Object(r.jsx)(S.a,{src:JSON.parse(Y.getFieldValue("value"))})}catch(p){return Object(r.jsx)(S.a,{src:JSON.parse('{ "error": "cannot parse this json" }')})}}})]})]})]})},Te=M.a=G},"O/iA":function(ve,M,e){},YjuE:function(ve,M,e){"use strict";e.r(M);var oe=e("fOrg"),w=e("+KLJ"),F=e("T2oS"),Z=e("W9HT"),x=e("tJVT"),v=e("q1tI"),_=e.n(v),g=e("nhC9"),P=e("Ty5D"),n=e("9kvl"),a=e("tMyG"),R=e("+up7"),re=e("P2fV"),ne=e("NJEC"),q=e("5Dmo"),C=e("3S7+"),l=e("+L6B"),K=e("2/Rp"),z=e("+BJd"),T=e("mr32"),je=e("jrin"),D=e("qLMh"),W=e("k1fw"),Oe=e("miYZ"),H=e("tsqr"),u=e("9og8"),Ee=e("xvlK"),I=e("Qiat"),Le=e("HEzf"),ye=e("G3dp"),Ce=e("/MfK"),t=e("nKUr"),Ie=function(){var N=Object(u.a)(Object(D.a)().mark(function i(s,c,o){var p;return Object(D.a)().wrap(function(B){for(;;)switch(B.prev=B.next){case 0:return p=H.b.loading(s.formatMessage({id:"loading"})),B.prev=1,B.next=4,o&&o!==-1?Object(R.i)(o,Object(W.a)({},c)):Object(R.b)(Object(W.a)({},c));case 4:return p(),H.b.success(s.formatMessage({id:"success"})),B.abrupt("return",!0);case 9:return B.prev=9,B.t0=B.catch(1),p(),H.b.error(s.formatMessage({id:"error"})),B.abrupt("return",!1);case 14:case"end":return B.stop()}},i,null,[[1,9]])}));return function(s,c,o){return N.apply(this,arguments)}}(),Ae=function(){var N=Object(u.a)(Object(D.a)().mark(function i(s,c){var o;return Object(D.a)().wrap(function(O){for(;;)switch(O.prev=O.next){case 0:return o=H.b.loading(s.formatMessage({id:"loading"})),O.prev=1,O.next=4,Object(R.c)(c);case 4:return o(),H.b.success(s.formatMessage({id:"success"})),O.abrupt("return",!0);case 9:return O.prev=9,O.t0=O.catch(1),o(),H.b.error(s.formatMessage({id:"error"})),O.abrupt("return",!1);case 14:case"end":return O.stop()}},i,null,[[1,9]])}));return function(s,c){return N.apply(this,arguments)}}(),Fe=function(){var i=Object(v.useState)(!1),s=Object(x.a)(i,2),c=s[0],o=s[1],p=Object(v.useState)([]),O=Object(x.a)(p,2),B=O[0],be=O[1],X=Object(v.useRef)(),te=Object(n.l)(),le=Object(n.m)("@@initialState"),y=le.setInitialState;Object(v.useEffect)(function(){Object(R.f)().then(function(A){A.success&&be(A.data.filter(function(J){return J!=="global"}))})},[]);var ce=[{title:Object(t.jsx)(n.a,{id:"group",defaultMessage:"group"}),dataIndex:"group",hideInSearch:!1,key:"group",valueType:"select",width:100,valueEnum:B.sort().reduce(function(A,J){return Object(W.a)(Object(W.a)({},A),{},Object(je.a)({},J,J))},{})},{title:Object(t.jsx)(n.a,{id:"key",defaultMessage:"key"}),dataIndex:"key",hideInSearch:!0},{title:Object(t.jsx)(n.a,{id:"type",defaultMessage:"type"}),dataIndex:"type",hideInSearch:!0},{title:Object(t.jsx)(n.a,{id:"enumerable",defaultMessage:"enumerable"}),dataIndex:"enumerable",hideInForm:!0,hideInSearch:!0,render:function(J,ae){return Object(t.jsx)(T.a,{color:ae.enumerable?"success":"error",children:Object(t.jsx)(n.a,{id:ae.enumerable?"true":"false",defaultMessage:ae.enumerable?"true":"false"})})}},{title:Object(t.jsx)(n.a,{id:"public",defaultMessage:"public"}),dataIndex:"public",hideInForm:!0,hideInSearch:!0,render:function(J,ae){return Object(t.jsx)(T.a,{color:ae.public?"success":"error",children:Object(t.jsx)(n.a,{id:ae.public?"true":"false",defaultMessage:ae.public?"true":"false"})})}},{hideInSearch:!0,title:Object(t.jsx)(n.a,{id:"pages.searchTable.titleOption",defaultMessage:"\u64CD\u4F5C"}),dataIndex:"option",valueType:"option",render:function(J,ae){return[Object(t.jsx)(C.a,{title:Object(t.jsx)(n.a,{id:"edit",defaultMessage:"edit"}),children:Object(t.jsx)(K.a,{type:"primary",icon:Object(t.jsx)(ye.a,{}),onClick:function(){return o(ae.id)}})},"edit"),Object(t.jsx)(ne.a,{title:Object(t.jsx)(n.a,{id:"deleteQuestion",defaultMessage:"Are you sure to delete this record?"}),onConfirm:Object(u.a)(Object(D.a)().mark(function ie(){var pe;return Object(D.a)().wrap(function(Pe){for(;;)switch(Pe.prev=Pe.next){case 0:return Pe.next=2,Ae(te,ae.id);case 2:pe=Pe.sent,pe&&(o(!1),X.current&&X.current.reload());case 4:case"end":return Pe.stop()}},ie)})),okText:Object(t.jsx)(n.a,{id:"yes",defaultMessage:"Yes"}),cancelText:Object(t.jsx)(n.a,{id:"no",defaultMessage:"No"}),children:Object(t.jsx)(C.a,{title:Object(t.jsx)(n.a,{id:"delete",defaultMessage:"delete"}),children:Object(t.jsx)(K.a,{type:"primary",icon:Object(t.jsx)(Ce.a,{}),danger:!0})})},"delete")]}}];return Object(t.jsxs)(_.a.Fragment,{children:[Object(t.jsx)(I.a,{headerTitle:te.formatMessage({id:"menu.settings"}),actionRef:X,rowKey:"id",search:{layout:"vertical"},toolBarRender:function(){return[Object(t.jsxs)(K.a,{type:"primary",onClick:function(){o(-1)},children:[Object(t.jsx)(Ee.a,{})," ",Object(t.jsx)(n.a,{id:"pages.searchTable.new"})]},"primary")]},request:function(J){var ae=J.pageSize,ie=J.current,pe=J.group;return Object(R.g)({per_page:ae,current:ie,group:pe}).then(function(xe){return xe.success?{data:xe.data.filter(function(Pe){return Pe.group!=="global"}),total:xe.meta.total,success:!0}:[]})},columns:ce}),Object(t.jsx)(Le.a,{groups:B,id:c,visible:Number.isInteger(c),onVisibleChange:function(J){return!J&&o(!1)},onFinish:function(){var A=Object(u.a)(Object(D.a)().mark(function J(ae){var ie,pe,xe;return Object(D.a)().wrap(function(he){for(;;)switch(he.prev=he.next){case 0:return ie=ae,he.next=3,Ie(te,ie,Number(c));case 3:if(pe=he.sent,!pe){he.next=12;break}if(o(!1),X.current&&X.current.reload(),ie.group!=="global"){he.next=12;break}return he.next=10,Object(R.g)({current:1,per_page:100,group:"global"});case 10:xe=he.sent,y(function(Be){return Object(W.a)(Object(W.a)({},Be),{},{config:xe.success?xe.data:Be==null?void 0:Be.config})});case 12:case"end":return he.stop()}},J)}));return function(J){return A.apply(this,arguments)}}()})]})},k=Fe,Re=e("oBTY"),Me=e("y8nQ"),Ue=e("Vl3Y"),f=e("tU7J"),S=e("wFql"),L=e("rmhi"),V=e("VMEa"),r=e("F/zT"),ue=e("BiO0"),G=e("ovOe"),Te=e.n(G),h=e("Fghh"),m=e("Qurx"),me=function(i){var s=i.field,c=i.name;return s!=null&&s.includes("boolean")?Object(t.jsx)(r.a,{name:c,checkedChildren:Object(t.jsx)(h.a,{id:"true"}),unCheckedChildren:Object(t.jsx)(h.a,{id:"false"})}):Object(t.jsx)(m.a,{width:"lg",name:c})},fe=me,ee=S.a.Text,b;(function(N){N.Array="array",N.String="string"})(b||(b={}));var d=function(i,s){return s===b.Array?i&&Array.isArray(i)?JSON.stringify(i):"[]":i},j=function(){var i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",s=arguments.length>1?arguments[1]:void 0;if(s===b.Array){var c=JSON.parse(i);return c&&Array.isArray(c)?c:[]}return i},U=function(i){var s=Object(h.k)(),c=i.visible,o=i.onVisibleChange,p=i.onFinish,O=i.value,B=Ue.a.useForm(),be=Object(x.a)(B,1),X=be[0],te=Object(v.useMemo)(function(){return(O.rules||[]).includes(b.Array)?b.Array:b.String},[O.rules]);return Object(v.useEffect)(function(){X.setFieldsValue(Object(W.a)(Object(W.a)({},O),{},{value:d(O.value,te)}))},[te,O,X]),Object(t.jsxs)(L.a,{form:X,title:O.full_key,width:"60vw",visible:c,onVisibleChange:o,onFinish:Object(u.a)(Object(D.a)().mark(function le(){var y;return Object(D.a)().wrap(function(A){for(;;)switch(A.prev=A.next){case 0:return A.next=2,Object(R.h)({key:O.full_key,value:j(X.getFieldsValue().value,te)});case 2:if(y=A.sent,!y.success){A.next=6;break}return p(y.success===!0),A.abrupt("return",y.success);case 6:return A.abrupt("return");case 7:case"end":return A.stop()}},le)})),children:[Object(t.jsxs)(V.a.Group,{children:[Object(t.jsx)(r.a,{disabled:!0,name:"public",label:Object(t.jsx)(n.a,{id:"public",defaultMessage:"public"})}),Object(t.jsx)(r.a,{disabled:!0,name:"readonly",label:Object(t.jsx)(n.a,{id:"readonly",defaultMessage:"readonly"})}),Object(t.jsx)(V.a.Item,{shouldUpdate:!0,label:Object(t.jsx)(n.a,{id:"rules",defaultMessage:"rules"}),children:function(){return Object(t.jsx)(ee,{code:!0,children:JSON.stringify(X.getFieldValue("rules"))})}})]}),te===b.Array?Object(t.jsxs)(t.Fragment,{children:[Object(t.jsx)(ue.a,{width:"lg",name:"value",label:Object(t.jsx)(n.a,{id:"value"}),tooltip:"".concat(s.formatMessage({id:"example_json"}),': ["first_field_name", "second_field_name"]')}),Object(t.jsx)(V.a.Item,{noStyle:!0,shouldUpdate:!0,children:function(){try{return Object(t.jsx)(Te.a,{src:JSON.parse(X.getFieldValue("value"))})}catch(y){return Object(t.jsx)(Te.a,{src:JSON.parse('{ "error": "cannot parse this array" }')})}}})]}):Object(t.jsx)(t.Fragment,{children:Object(t.jsx)(V.a.Item,{shouldUpdate:!0,label:Object(t.jsx)(n.a,{id:"value"}),children:function(){return Object(t.jsx)(fe,{field:X.getFieldValue("rules"),name:"value"})}})})]})},$=U,E=e("c+yx"),Y=[{title:Object(t.jsx)(n.a,{id:"key",defaultMessage:"key"}),dataIndex:"key",hideInSearch:!1,sorter:!0},{title:Object(t.jsx)(n.a,{id:"readonly",defaultMessage:"readonly"}),dataIndex:"readonly",hideInForm:!0,hideInSearch:!0,sorter:!0,render:function(i,s){return Object(t.jsx)(T.a,{color:s.readonly?"success":"error",children:Object(t.jsx)(n.a,{id:s.readonly?"true":"false",defaultMessage:s.readonly?"true":"false"})})}},{title:Object(t.jsx)(n.a,{id:"public",defaultMessage:"public"}),dataIndex:"public",hideInForm:!0,hideInSearch:!0,sorter:!0,render:function(i,s){return Object(t.jsx)(T.a,{color:s.public?"success":"error",children:Object(t.jsx)(n.a,{id:s.public?"true":"false",defaultMessage:s.public?"true":"false"})})}},{title:Object(t.jsx)(n.a,{id:"value",defaultMessage:"value"}),dataIndex:"value",hideInForm:!0,hideInSearch:!0,render:function(i,s){return typeof s.value=="boolean"?Object(t.jsx)(T.a,{color:s.value?"success":"error",children:Object(t.jsx)(n.a,{id:s.value?"true":"false",defaultMessage:s.value?"true":"false"})}):Array.isArray(s.value)?s.value.map(function(c){return typeof c=="object"?_.a.Children.toArray(Object(t.jsx)("p",{children:Object.keys(c).map(function(o){return"".concat(o,": ").concat(c[o])}).join(", ")})):c}):s.value}}],de=function N(i,s){var c=arguments.length>2&&arguments[2]!==void 0?arguments[2]:[];return!i||typeof i!="object"?!1:(Object.keys(i).forEach(function(o){var p=i[o];o===s?c.push(i):typeof p=="object"&&N(p,s,c)}),c)},De=function(i){var s=i.packageName,c=i.values,o=i.onValueUpdated,p=Object(n.l)(),O=Object(v.useState)(),B=Object(x.a)(O,2),be=B[0],X=B[1],te=Object(v.useMemo)(function(){var le=c[s];return de(le,"rules")},[c,s]);return Object(t.jsxs)(_.a.Fragment,{children:[Object(t.jsx)(I.a,{headerTitle:p.formatMessage({id:"menu.settings"}),rowKey:"key",search:{layout:"vertical"},columns:[].concat(Y,[{hideInSearch:!0,title:Object(t.jsx)(n.a,{id:"pages.searchTable.titleOption",defaultMessage:"\u64CD\u4F5C"}),dataIndex:"option",valueType:"option",render:function(y,ce){return[Object(t.jsx)(C.a,{title:Object(t.jsx)(n.a,{id:"edit",defaultMessage:"edit"}),children:Object(t.jsx)(K.a,{type:"primary",icon:Object(t.jsx)(ye.a,{}),onClick:function(){return X(ce)}})},"edit")]}}]),request:function(y,ce){var A=y.key,J=ce&&Object.entries(ce)[0];return new Promise(function(ae){var ie=te?Object(Re.a)(te):[];A&&(ie=ie.filter(function(pe){return pe.key.toLowerCase().includes(A.toLowerCase())})),J&&(ie=Object(E.i)(ie,J[0],J[1]!=="ascend")),ae({data:ie,success:!0,total:ie.length})})}}),be&&Object(t.jsx)($,{value:be,visible:be!==void 0,onVisibleChange:function(y){return y===!1&&X(void 0)},onFinish:Object(u.a)(Object(D.a)().mark(function le(){return Object(D.a)().wrap(function(ce){for(;;)switch(ce.prev=ce.next){case 0:o();case 1:case"end":return ce.stop()}},le)}))})]})},se=De,Q=e("t4ZK"),ge=e("I5X1"),Se=function(i){return i.replaceAll("escolalms","").split("_").join("")},Ke=M.default=function(){var N=Object(P.l)(),i=Object(n.l)(),s=N.tab,c=s===void 0?"user_settings":s,o=Object(v.useState)(),p=Object(x.a)(o,2),O=p[0],B=p[1],be=Object(v.useCallback)(function(){Object(R.a)().then(function(y){y.success&&B(y.data)})},[]),X=Object(ge.a)("@@initialState"),te=X.initialState,le=Object(v.useCallback)(function(){var y;return(te==null||(y=te.config)===null||y===void 0?void 0:y.length)!==0},[te]);return Object(v.useEffect)(function(){be()},[]),O?Object(t.jsxs)(a.a,{title:Object(t.jsx)(n.a,{id:"settings"}),header:{breadcrumb:{routes:[{path:"settings",breadcrumbName:i.formatMessage({id:"menu.Configuration.settings"})},{path:String(c),breadcrumbName:String(c)}]}},children:[!le()&&Object(t.jsx)(w.a,{message:Object(t.jsx)(n.a,{id:"global_settings_alert_title",defaultMessage:"Add global settings"}),description:Object(t.jsx)(n.a,{id:"global_settings_alert_description",defaultMessage:"Global settings are used to configure the entire LMS. You can add global settings by clicking the button below."}),type:"warning",showIcon:!0,style:{marginBottom:"20px"}}),Object(t.jsxs)(g.a,{tabs:{type:"card",activeKey:c,onChange:function(ce){return n.f.push("/configuration/settings/".concat(ce))}},children:[Object(t.jsx)(g.a.TabPane,{tab:Object(t.jsx)(n.a,{id:"user.settings"}),children:Object(t.jsx)(k,{})},"user_settings"),Object(t.jsx)(g.a.TabPane,{tab:Object(t.jsx)(n.a,{id:"global_settings"}),children:Object(t.jsx)(Q.a,{})},"global_settings"),Object.keys(O).map(function(y){return Object(t.jsxs)(g.a.TabPane,{tab:Object(t.jsxs)("span",{children:[Object(t.jsx)(n.a,{id:"package"})," ",Se(y)]}),children:[Object(t.jsx)(se,{values:O,packageName:y,onValueUpdated:function(){return be()}}),y]},y)})]})]}):Object(t.jsx)(Z.a,{})}},hd5d:function(ve,M,e){"use strict";var oe=e("qLMh"),w=e("9og8"),F=e("q1tI"),Z=e.n(F),x=e("acco"),v=e.n(x),_=e("BAh9"),g=e("vtG9"),P=e.n(g),n=e("9kvl"),a=e("nKUr"),R=e.n(a),re=function(C){var l=C.attrs,K=l.href,z=K.split("/").pop();return Object(a.jsx)("p",{children:Object(a.jsx)("a",{rel:"noreferrer",href:K,target:"_blank",children:z})})},ne=function(C){var l=C.value,K=C.onChange,z=C.directory,T=z===void 0?"/wysiwyg":z,je=Object(n.l)();return Object(a.jsx)("div",{className:"form-wysiwyg-markdown",children:Object(a.jsx)(v.a,{excludeBlockMenuItems:["Sketch"],embeds:[{matcher:function(W){return!0},component:re}],uploadImage:function(){var D=Object(w.a)(Object(oe.a)().mark(function W(Oe){var H,u;return Object(oe.a)().wrap(function(I){for(;;)switch(I.prev=I.next){case 0:return I.next=2,Object(_.e)(Oe,T);case 2:if(H=I.sent,!H.success){I.next=8;break}if(!Oe.type.includes("image/")){I.next=7;break}return u=H.data[0].name.includes("/")?H.data[0].name:"".concat(T).concat(H.data[0].name),I.abrupt("return",Object(_.d)(u,1e3));case 7:return I.abrupt("return",H.data[0].url);case 8:throw new Error("Error while uploading");case 9:case"end":return I.stop()}},W)}));return function(W){return D.apply(this,arguments)}}(),defaultValue:l||"",onChange:function(W){return K&&K(W())},placeholder:je.formatMessage({id:"wysiwyg_placeholder"})})})};M.a=ne},t4ZK:function(ve,M,e){"use strict";e.d(M,"b",function(){return k});var oe=e("P2fV"),w=e("NJEC"),F=e("+L6B"),Z=e("2/Rp"),x=e("5Dmo"),v=e("3S7+"),_=e("tJVT"),g=e("oBTY"),P=e("qLMh"),n=e("k1fw"),a=e("miYZ"),R=e("tsqr"),re=e("9og8"),ne=e("xvlK"),q=e("q1tI"),C=e.n(q),l=e("9kvl"),K=e("Qiat"),z=e("/y+f"),T=e("+up7"),je=e("HEzf"),D=e("+YFz"),W=e("G3dp"),Oe=e("/MfK"),H=e("ujla"),u=e("nKUr"),Ee=e.n(u),I=function(){var f=Object(re.a)(Object(P.a)().mark(function S(L,V,r){var ue,G;return Object(P.a)().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return ue=R.b.loading(L.formatMessage({id:"loading"})),h.prev=1,h.next=4,r&&r!==-1?Object(T.i)(r,Object(n.a)({},V)):Object(T.b)(Object(n.a)({},V));case 4:return G=h.sent,ue(),R.b.success(L.formatMessage({id:"success"})),h.abrupt("return",{success:!0,updatedSettings:G});case 10:return h.prev=10,h.t0=h.catch(1),ue(),R.b.error(L.formatMessage({id:"error"})),h.abrupt("return",{success:!1,updateSettings:null});case 15:case"end":return h.stop()}},S,null,[[1,10]])}));return function(L,V,r){return f.apply(this,arguments)}}(),Le=function(){var f=Object(re.a)(Object(P.a)().mark(function S(L,V){var r;return Object(P.a)().wrap(function(G){for(;;)switch(G.prev=G.next){case 0:return r=R.b.loading(L.formatMessage({id:"loading"})),G.prev=1,G.next=4,Object(T.c)(V);case 4:return r(),R.b.success(L.formatMessage({id:"success"})),G.abrupt("return",!0);case 9:return G.prev=9,G.t0=G.catch(1),r(),R.b.error(L.formatMessage({id:"error"})),G.abrupt("return",!1);case 14:case"end":return G.stop()}},S,null,[[1,9]])}));return function(L,V){return f.apply(this,arguments)}}(),ye=function(S){return S.toLowerCase().replace(/(_\w)/g,function(L){return L.toUpperCase().substr(1)})},Ce=function f(S){return S.reduce(function(L,V){return[].concat(Object(g.a)(L),Object(g.a)(V.routes?f(V.routes):[]),[V])},[]).filter(function(L){return L.layout!==!1&&L.hideInMenu!==!0})},t=["statistics","user_submission","user_projects"],Ie=["public"],Ae=["email","sms"],Fe=function(S){return"hideInMenu-".concat(ye(S.split("/").join("_")))},k=function(S){return"disableTopicType-".concat(S)},Re=[].concat(Object(g.a)(Object.keys(z.g).map(function(f){return{key:k(f),group:"global",value:"false",public:!0,enumerable:!0,sort:1,type:"boolean",data:!1}})),Object(g.a)(Ce(Object(H.a)()).filter(function(f){return f.path&&f.path!=="/"}).map(function(f){return{path:f.path,key:Fe(f.path),group:"global",value:"false",public:!0,enumerable:!0,sort:1,type:"boolean",data:!1}})),Object(g.a)(["ECommerce","Certificates"].map(function(f){return{key:"disable-".concat(f),group:"global",value:"false",public:!0,enumerable:!0,sort:1,type:"boolean",data:!1}})),Object(g.a)(Ie.map(function(f){return{key:"showInCourseAdditionalSettings-".concat(f),group:"global",value:"false",public:!0,enumerable:!0,sort:1,type:"boolean",data:!1}})),Object(g.a)(t.map(function(f){return{key:"hideInCourseTabs-".concat(f),group:"global",value:"false",public:!0,enumerable:!0,sort:1,type:"boolean",data:!1}})),Object(g.a)(Ae.map(function(f){return{key:"hideTemplateTab-".concat(f),group:"global",value:"false",public:!0,enumerable:!0,sort:1,type:"boolean",data:!1}}))).reduce(function(f,S,L){return f[S.key]=Object(n.a)(Object(n.a)({},S),{},{id:-100*L}),f},{}),Me=Object(n.a)({logo:{id:-1,key:"logo",group:"global",value:"",public:!0,enumerable:!0,sort:0,type:"image",data:"EscolaLMS"},frontURL:{id:-2,key:"frontURL",group:"global",value:"",public:!0,enumerable:!0,sort:0,type:"text",data:"EscolaLMS"},maxLessonsNestingInProgram:{id:-4,key:"maxLessonsNestingInProgram",group:"global",value:"0",public:!0,enumerable:!0,sort:1,type:"number",data:0},minTopicNestingInProgram:{id:-5,key:"minTopicNestingInProgram",group:"global",value:"0",public:!0,enumerable:!0,sort:1,type:"number",data:0},companyName:{id:-6,key:"companyName",group:"global",value:"Wellms",public:!0,enumerable:!0,sort:0,type:"text",data:"Wellms"},companyURL:{id:-7,key:"companyURL",group:"global",value:"https://www.wellms.io/",public:!0,enumerable:!0,sort:0,type:"text",data:"https://www.wellms.io/"},logoLogin:{id:-8,key:"logoLogin",group:"global",value:"",public:!0,enumerable:!0,sort:0,type:"image",data:"EscolaLMS"},logoFooter:{id:-9,key:"logoFooter",group:"global",value:"",public:!0,enumerable:!0,sort:0,type:"image",data:"EscolaLMS"},showLoginBackgroundImage:{id:-10,key:"showLoginBackgroundImage",group:"global",value:"true",public:!0,enumerable:!0,sort:0,type:"boolean",data:"EscolaLMS"},loginHeaderBackgroundColor:{id:-11,key:"loginHeaderBackgroundColor",group:"global",value:"#f0f2f5",public:!0,enumerable:!0,sort:0,type:"text",data:"EscolaLMS"},loginHeaderFontColor:{id:-12,key:"loginHeaderFontColor",group:"global",value:"#000000D8",public:!0,enumerable:!0,sort:0,type:"text",data:"EscolaLMS"}},Re),Ue=function(){var S=Object(q.useState)(!1),L=Object(_.a)(S,2),V=L[0],r=L[1],ue=Object(q.useRef)(),G=Object(l.l)(),Te=Object(l.m)("@@initialState"),h=Te.setInitialState,m=Te.initialState,me=[{title:Object(u.jsx)(l.a,{id:"key",defaultMessage:"key"}),dataIndex:"key",hideInSearch:!0,render:function(b,d){return Object(u.jsx)(q.Fragment,{children:Object(u.jsxs)(v.a,{title:Object(u.jsx)(l.a,{id:"Settings.tooltip.".concat(d.key)}),children:[d.key," ",Object(u.jsx)(D.a,{})]})})}},{title:Object(u.jsx)(l.a,{id:"type",defaultMessage:"type"}),dataIndex:"type",hideInSearch:!0},{title:Object(u.jsx)(l.a,{id:"value",defaultMessage:"value"}),dataIndex:"value",hideInForm:!0,hideInSearch:!0,render:function(b,d){return d.value}},{hideInSearch:!0,title:Object(u.jsx)(l.a,{id:"pages.searchTable.titleOption",defaultMessage:"\u64CD\u4F5C"}),dataIndex:"option",valueType:"option",render:function(b,d){return[d.id>0?Object(u.jsx)(v.a,{title:Object(u.jsx)(l.a,{id:"edit",defaultMessage:"edit"}),children:Object(u.jsx)(Z.a,{type:"primary",icon:Object(u.jsx)(W.a,{}),onClick:function(){return r(d.id)}})},"edit"):Object(u.jsx)(v.a,{title:Object(u.jsx)(l.a,{id:"create",defaultMessage:"create"}),children:Object(u.jsx)(Z.a,{type:"primary",icon:Object(u.jsx)(ne.a,{}),onClick:function(){r(Me[d.key]||-1)}})},"create"),Object(u.jsx)(w.a,{title:Object(u.jsx)(l.a,{id:"deleteQuestion",defaultMessage:"Are you sure to delete this record?"}),onConfirm:Object(re.a)(Object(P.a)().mark(function j(){var U;return Object(P.a)().wrap(function(E){for(;;)switch(E.prev=E.next){case 0:return E.next=2,Le(G,d.id);case 2:U=E.sent,U&&(r(!1),ue.current&&ue.current.reload());case 4:case"end":return E.stop()}},j)})),okText:Object(u.jsx)(l.a,{id:"yes",defaultMessage:"Yes"}),cancelText:Object(u.jsx)(l.a,{id:"no",defaultMessage:"No"}),children:d.id>0?Object(u.jsx)(v.a,{title:Object(u.jsx)(l.a,{id:"delete",defaultMessage:"delete"}),children:Object(u.jsx)(Z.a,{type:"primary",icon:Object(u.jsx)(Oe.a,{}),danger:!0})}):null},"delete")]}}],fe=function(b){var d;if(!!b&&(!(m!=null&&(d=m.config)!==null&&d!==void 0&&d.length)&&b&&h(Object(n.a)(Object(n.a)({},m),{},{config:[b]})),!!(m!=null&&m.config))){var j=m==null?void 0:m.config.map(function(U){return U.key===b.key?Object(n.a)(Object(n.a)({},U),b):U});h(Object(n.a)(Object(n.a)({},m),{},{config:j}))}};return Object(u.jsxs)(C.a.Fragment,{children:[Object(u.jsx)(K.a,{headerTitle:G.formatMessage({id:"menu.settings"}),search:!1,toolBarRender:!1,actionRef:ue,rowKey:"id",request:function(b){var d=b.pageSize,j=b.current;return Object(T.g)({per_page:d,current:j,group:"global"}).then(function(U){if(U.success){var $=[].concat(Object(g.a)(Object.keys(Me).map(function(E){return U.data.find(function(Y){return Y.key===E})||Me[E]})),Object(g.a)(U.data.filter(function(E){return!Object.keys(Me).includes(E.key)})));return{data:$,total:$.length,success:!0}}return[]})},columns:me}),Object(u.jsx)(je.a,{groups:[],id:V,visible:V,initialData:Me,onVisibleChange:function(b){return!b&&r(!1)},onFinish:function(){var ee=Object(re.a)(Object(P.a)().mark(function b(d){var j,U,$,E;return Object(P.a)().wrap(function(de){for(;;)switch(de.prev=de.next){case 0:return j=d,j.type==="number"&&(j=Object(n.a)(Object(n.a)({},j),{},{value:String(j.data)})),j.type==="boolean"&&(j=Object(n.a)(Object(n.a)({},j),{},{value:j.data})),j.type==="array"&&(j=Object(n.a)(Object(n.a)({},j),{},{value:JSON.parse(j.value)})),de.next=6,I(G,j,Number(V));case 6:U=de.sent,$=U.success,E=U.updatedSettings,$&&(E!=null&&E.success&&fe(E.data),r(!1),ue.current&&ue.current.reload());case 10:case"end":return de.stop()}},b)}));return function(b){return ee.apply(this,arguments)}}()})]})};M.a=Ue},tneF:function(ve,M,e){"use strict";var oe=e("sRBo"),w=e("kaz8"),F=e("VTBJ"),Z=e("Ff2n"),x=e("nKUr"),v=e.n(x),_=e("uX+g"),g=e("q1tI"),P=e.n(g),n=e("WFLz"),a=e("adzw"),R=["options","fieldProps","proFieldProps","valueEnum"],re=P.a.forwardRef(function(l,K){var z=l.options,T=l.fieldProps,je=l.proFieldProps,D=l.valueEnum,W=Object(Z.a)(l,R);return Object(x.jsx)(a.a,Object(F.a)({ref:K,valueType:"checkbox",valueEnum:Object(_.a)(D,void 0),fieldProps:Object(F.a)({options:z},T),lightProps:Object(F.a)({labelFormatter:function(){return Object(x.jsx)(a.a,Object(F.a)({ref:K,valueType:"checkbox",mode:"read",valueEnum:Object(_.a)(D,void 0),filedConfig:{customLightMode:!0},fieldProps:Object(F.a)({options:z},T),proFieldProps:je},W))}},W.lightProps),proFieldProps:je},W))}),ne=P.a.forwardRef(function(l,K){var z=l.fieldProps,T=l.children;return Object(x.jsx)(w.a,Object(F.a)(Object(F.a)({ref:K},z),{},{children:T}))}),q=Object(n.a)(ne,{valuePropName:"checked"}),C=q;C.Group=re,M.a=C},vtG9:function(ve,M,e){}}]);

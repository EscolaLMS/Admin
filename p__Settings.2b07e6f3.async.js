(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{"3fxf":function(ne,U,e){"use strict";var B=e("DjyN"),V=e("NUBc"),_=e("Mwp2"),G=e("VXEj"),P=e("+L6B"),o=e("2/Rp"),S=e("5NDa"),W=e("5rEg"),J=e("oBTY"),a=e("k1fw"),T=e("tJVT"),A=e("DYRE"),L=e("zeV3"),x=e("tU7J"),E=e("wFql"),j=e("q1tI"),p=e.n(j),c=e("BAh9"),X=e("/MfK"),R=e("mAF4"),te=e("dF/Y"),m=e("9kvl"),I=e("DBJ/"),H=e("lLVY"),Q=e.n(H),f=e("nKUr"),le=e.n(f),me=function(de){var je=de.directory,Oe=de.onUploaded;return Object(f.jsxs)(L.b,{align:"start",children:[Object(f.jsxs)(E.a.Text,{children:[Object(f.jsx)(m.a,{id:"pages.files.filesBrowser"}),Object(f.jsx)(E.a.Text,{code:!0,children:je})]}),Object(f.jsx)(I.a,{url:"/api/admin/file/upload",name:"file[]",data:{target:je},onUpload:function(be){be.success&&Oe(je,be.data)}})]})},Ue=function(de){var je=de.defaultDirectory,Oe=je===void 0?"/":je,ue=de.onFile,be=de.hideDeleteBtn,Ce=be===void 0?!1:be,Me=de.forceLoading,De=Me===void 0?!1:Me,Ie=Object(m.j)(),ge=Object(j.useState)({loading:!1,name:"",directory:Oe,current_page:1,data:void 0,per_page:1,last_page:1,total:0}),he=Object(T.a)(ge,2),Y=he[0],ve=he[1],oe=Object(j.useRef)(),ae=Object(j.useCallback)(function(z){ve(function(d){return Object(a.a)(Object(a.a)({},d),{},{loading:z})})},[]),Ee=Object(j.useCallback)(function(z,d){z.success&&ve(function($){return Object(a.a)(Object(a.a)(Object(a.a)({},$),z.data),{},{data:[{url:d.split("/").slice(0,-1).join("/"),name:"..",created_at:"",mime:"directory"}].concat(Object(J.a)(z.data.data.map(function(Z){return Object(a.a)(Object(a.a)({},Z),{},{url:Z.mime==="directory"?"".concat(d,"/").concat(Z.name):Z.url})}))).filter(function(Z){return d==="/"||d===Oe?Z.name!=="..":!0}),directory:d,loading:!1})})},[ae]),ie=Object(j.useCallback)(function(z){var d,$=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1,Z=function(){return oe.current&&oe.current.abort()};return Z(),oe.current=new AbortController,ae(!0),Object(c.a)({directory:z,page:$},{signal:(d=oe.current)===null||d===void 0?void 0:d.signal}).then(function(re){re.success&&Ee(re,z)}).catch(function(){return ae(!1)}),function(){Z()}},[ae]);Object(j.useEffect)(function(){return ie(Oe)},[Oe,ie]);var xe=Object(j.useCallback)(function(z){ae(!0),Object(c.c)(z).then(function(){ie(Y.directory)}).catch(function(){ae(!1)})},[ie,ae,Y.directory]),Be=Object(j.useCallback)(function(z,d){var $,Z=arguments.length>2&&arguments[2]!==void 0?arguments[2]:1,re=function(){return oe.current&&oe.current.abort()};return re(),oe.current=new AbortController,ae(!0),Object(c.b)({directory:z,name:d,page:Z},{signal:($=oe.current)===null||$===void 0?void 0:$.signal}).then(function(_e){_e.success&&Ee(_e,z)}).catch(function(){return ae(!1)}),function(){re()}},[ae]);return Object(f.jsxs)("div",{className:"file-browser",children:[Object(f.jsxs)("div",{className:"file-browser__header",children:[Object(f.jsx)(W.a,{placeholder:Ie.formatMessage({id:"search_file"}),className:"file-browser__input",onChange:function(d){return ve(function($){return Object(a.a)(Object(a.a)({},$),{},{name:d.target.value})})},value:Y.name}),Object(f.jsxs)("div",{children:[Object(f.jsx)(o.a,{className:"file-browser__button",onClick:function(){return ie(Y.directory)},children:Object(f.jsx)(m.a,{id:"reset"})}),Object(f.jsx)(o.a,{className:"file-browser__button",type:"primary",onClick:function(){return Be(Y.directory,Y.name)},children:Object(f.jsx)(m.a,{id:"query"})})]})]}),Object(f.jsx)(G.b,{loading:Y.loading||De,size:"small",itemLayout:"horizontal",dataSource:Y.data,header:Object(f.jsx)(me,{directory:Y.directory,onUploaded:function(d,$){$&&(ie(d),ue&&ue($,d))}}),footer:Object(f.jsx)(me,{directory:Y.directory,onUploaded:function(d,$){ie(d),$&&ue&&ue($,d)}}),renderItem:function(d){return Object(f.jsx)(G.b.Item,{actions:d.mime!=="directory"&&!Ce?[Object(f.jsx)(o.a,{type:"default",danger:!0,icon:Object(f.jsx)(X.a,{}),size:"small",onClick:function(){return xe(d.url)}},"dir")]:[],children:Object(f.jsx)(G.b.Item.Meta,{avatar:d.mime==="directory"?Object(f.jsx)(o.a,{type:"primary",icon:Object(f.jsx)(R.a,{}),size:"small",onClick:function(){return ie(d.url)}}):Object(f.jsx)("a",{href:d.url,target:"_blank",rel:"noreferrer",children:Object(f.jsx)(o.a,{type:"default",icon:Object(f.jsx)(te.a,{}),size:"small"})}),description:Object(f.jsx)(p.a.Fragment,{children:Object(f.jsx)(o.a,{type:"text",size:"small",onClick:function(){return d.mime==="directory"?ie(d.url):ue&&ue(d,Y.directory)},children:d.name})})})})}}),Object(f.jsx)(V.a,{pageSizeOptions:[],current:Y.current_page,total:Y.total,pageSize:Y.per_page,onChange:function(d){return ie(Y.directory,d)}})]})};U.a=Ue},"5qq5":function(ne,U,e){"use strict";var B=e("7Kak"),V=e("9yH6"),_=e("VTBJ"),G=e("Ff2n"),P=e("nKUr"),o=e.n(P),S=e("uX+g"),W=e("q1tI"),J=e.n(W),a=e("WFLz"),T=e("adzw"),A=["fieldProps","options","radioType","layout","proFieldProps","valueEnum"],L=J.a.forwardRef(function(p,c){var X=p.fieldProps,R=p.options,te=p.radioType,m=p.layout,I=p.proFieldProps,H=p.valueEnum,Q=Object(G.a)(p,A);return Object(P.jsx)(T.a,Object(_.a)(Object(_.a)({valueType:te==="button"?"radioButton":"radio",ref:c,valueEnum:Object(S.a)(H,void 0)},Q),{},{fieldProps:Object(_.a)({options:R,layout:m},X),proFieldProps:I,filedConfig:{customLightMode:!0}}))}),x=J.a.forwardRef(function(p,c){var X=p.fieldProps,R=p.children;return Object(P.jsx)(V.a,Object(_.a)(Object(_.a)({},X),{},{ref:c,children:R}))}),E=Object(a.a)(x,{valuePropName:"checked",ignoreWidth:!0}),j=E;j.Group=L,j.Button=V.a.Button,j.displayName="ProFormComponent",U.a=j},BAh9:function(ne,U,e){"use strict";e.d(U,"a",function(){return P}),e.d(U,"b",function(){return S}),e.d(U,"e",function(){return J}),e.d(U,"d",function(){return T}),e.d(U,"c",function(){return A});var B=e("qLMh"),V=e("k1fw"),_=e("9og8"),G=e("9kvl");function P(x,E){return o.apply(this,arguments)}function o(){return o=Object(_.a)(Object(B.a)().mark(function x(E,j){return Object(B.a)().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.abrupt("return",Object(G.g)("/api/admin/file/list",Object(V.a)({method:"GET",params:E},j||{})));case 1:case"end":return c.stop()}},x)})),o.apply(this,arguments)}function S(x,E){return W.apply(this,arguments)}function W(){return W=Object(_.a)(Object(B.a)().mark(function x(E,j){return Object(B.a)().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.abrupt("return",Object(G.g)("/api/admin/file/find",Object(V.a)({method:"GET",params:E},j||{})));case 1:case"end":return c.stop()}},x)})),W.apply(this,arguments)}function J(x,E,j){return a.apply(this,arguments)}function a(){return a=Object(_.a)(Object(B.a)().mark(function x(E,j,p){var c;return Object(B.a)().wrap(function(R){for(;;)switch(R.prev=R.next){case 0:return c=new FormData,c.append("file[]",E),c.append("target",j),R.abrupt("return",Object(G.g)("/api/admin/file/upload",Object(V.a)({method:"POST",data:c},p||{})));case 4:case"end":return R.stop()}},x)})),a.apply(this,arguments)}var T=function(E){var j=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1e3;return"".concat(window.REACT_APP_API_URL||"https://api-stage.escolalms.com","/api/images/img?path=").concat(E,"&w=").concat(j)};function A(x,E){return L.apply(this,arguments)}function L(){return L=Object(_.a)(Object(B.a)().mark(function x(E,j){return Object(B.a)().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.abrupt("return",Object(G.g)("/api/admin/file/delete",Object(V.a)({method:"DELETE",data:{url:E}},j||{})));case 1:case"end":return c.stop()}},x)})),L.apply(this,arguments)}},BiO0:function(ne,U,e){"use strict";var B=e("VTBJ"),V=e("Ff2n"),_=e("nKUr"),G=e.n(_),P=e("q1tI"),o=e.n(P),S=e("adzw"),W=["fieldProps","proFieldProps"],J=function(T,A){var L=T.fieldProps,x=T.proFieldProps,E=Object(V.a)(T,W);return Object(_.jsx)(S.a,Object(B.a)({ref:A,valueType:"textarea",fieldProps:L,proFieldProps:x},E))};U.a=o.a.forwardRef(J)},"DBJ/":function(ne,U,e){"use strict";var B=e("k1fw"),V=e("y8nQ"),_=e("Vl3Y"),G=e("etVw"),P=e("9kvl"),o=e("qFDU"),S=e("nKUr"),W=e.n(S);function J(a){var T=a.onChange,A=a.onUpload,L=a.url,x=a.name,E=a.extra,j=a.accept,p=a.data,c=a.wrapInForm,X=c===void 0?!0:c,R=a.title,te=a.formProps,m=Object(P.j)();return p&&p[x]&&delete p[x],Object(S.jsx)(o.a,{condition:X,wrap:function(H){return Object(S.jsx)(_.a,Object(B.a)(Object(B.a)({},te),{},{children:H}))},children:Object(S.jsx)(G.a,{title:R||" ".concat(m.formatMessage({id:"upload_click_here"})),placeholder:m.formatMessage({id:"upload_click_here"}),onChange:function(H){T&&T(H),H.file.status==="done"&&A&&A(H.file.response)},label:Object(S.jsx)(P.a,{id:"upload"}),max:2,fieldProps:{data:p,accept:j,name:x,headers:{Authorization:"Bearer ".concat(localStorage.getItem("TOKEN"))}},action:"".concat(window.REACT_APP_API_URL||"https://api-stage.escolalms.com").concat(L),extra:E})})}U.a=J},FJDo:function(ne,U,e){"use strict";var B=e("VTBJ"),V=e("Ff2n"),_=e("nKUr"),G=e.n(_),P=e("q1tI"),o=e.n(P),S=e("adzw"),W=["fieldProps","min","proFieldProps","max"],J=function(T,A){var L=T.fieldProps,x=T.min,E=T.proFieldProps,j=T.max,p=Object(V.a)(T,W);return Object(_.jsx)(S.a,Object(B.a)({valueType:"digit",fieldProps:Object(B.a)({min:x,max:j},L),ref:A,filedConfig:{defaultProps:{width:"100%"}},proFieldProps:E},p))};U.a=o.a.forwardRef(J)},"O/iA":function(ne,U,e){},Qurx:function(ne,U,e){"use strict";var B=e("VTBJ"),V=e("Ff2n"),_=e("nKUr"),G=e.n(_),P=e("adzw"),o=["fieldProps","proFieldProps"],S=["fieldProps","proFieldProps"],W="text",J=function(L){var x=L.fieldProps,E=L.proFieldProps,j=Object(V.a)(L,o);return Object(_.jsx)(P.a,Object(B.a)({valueType:W,fieldProps:x,filedConfig:{valueType:W},proFieldProps:E},j))},a=function(L){var x=L.fieldProps,E=L.proFieldProps,j=Object(V.a)(L,S);return Object(_.jsx)(P.a,Object(B.a)({valueType:"password",fieldProps:x,proFieldProps:E,filedConfig:{valueType:W}},j))},T=J;T.Password=a,T.displayName="ProFormComponent",U.a=T},YjuE:function(ne,U,e){"use strict";e.r(U);var B=e("fOrg"),V=e("+KLJ"),_=e("T2oS"),G=e("W9HT"),P=e("tJVT"),o=e("q1tI"),S=e.n(o),W=e("nhC9"),J=e("Ty5D"),a=e("9kvl"),T=e("tMyG"),A=e("+up7"),L=e("P2fV"),x=e("NJEC"),E=e("5Dmo"),j=e("3S7+"),p=e("+L6B"),c=e("2/Rp"),X=e("+BJd"),R=e("mr32"),te=e("jrin"),m=e("qLMh"),I=e("k1fw"),H=e("miYZ"),Q=e("tsqr"),f=e("9og8"),le=e("xvlK"),me=e("Qiat"),Ue=e("EFp3"),Se=e("O/iA"),de=e("OaEy"),je=e("wx14"),Oe=e("U8pU"),ue=e("ODXe"),be=e("TSYQ"),Ce=e.n(be),Me=e("Zm9Q"),De=e("bT9E"),Ie=e("H84U"),ge=e("2fM7"),he=e("0n0R"),Y=ge.a.Option;function ve(y){return y&&y.type&&(y.type.isSelectOption||y.type.isSelectOptGroup)}var oe=function(r,n){var u=r.prefixCls,O=r.className,C=r.popupClassName,s=r.dropdownClassName,h=r.children,D=r.dataSource,b=Object(Me.a)(h),N;if(b.length===1&&Object(he.c)(b[0])&&!ve(b[0])){var F=Object(ue.a)(b,1);N=F[0]}var v=N?function(){return N}:void 0,M;return b.length&&ve(b[0])?M=h:M=D?D.map(function(l){if(Object(he.c)(l))return l;switch(Object(Oe.a)(l)){case"string":return o.createElement(Y,{key:l,value:l},l);case"object":{var i=l.value;return o.createElement(Y,{key:i,value:i},l.text)}default:return}}):[],o.createElement(Ie.a,null,function(l){var i=l.getPrefixCls,g=i("select",u);return o.createElement(ge.a,Object(je.a)({ref:n},Object(De.a)(r,["dataSource"]),{prefixCls:g,popupClassName:C||s,className:Ce()("".concat(g,"-auto-complete"),O),mode:ge.a.SECRET_COMBOBOX_MODE_DO_NOT_USE},{getInputElement:v}),M)})},ae=o.forwardRef(oe);ae.Option=Y;var Ee=ae,ie=e("y8nQ"),xe=e("Vl3Y"),Be=e("5NDa"),z=e("5rEg"),d=e("VMEa"),$=e("rmhi"),Z=e("Qurx"),re=e("F/zT"),_e=e("5qq5"),Le=e("BiO0"),Ve=e("tneF"),ze=e("FJDo"),$e=e("hd5d"),Ge=e("3fxf"),Je=e("ovOe"),ye=e.n(Je),we=e("bRQS"),Ye=e("4i/N"),t=e("nKUr"),Qe=function(r){var n=r.value,u=r.onChange,O=r.type,C=O===void 0?"file":O,s=Object(o.useState)(!1),h=Object(P.a)(s,2),D=h[0],b=h[1];return Object(t.jsxs)(S.a.Fragment,{children:[Object(t.jsxs)(d.a.Group,{children:[Object(t.jsx)(z.a,{value:n,readOnly:!0}),Object(t.jsxs)(c.a,{size:"small",type:"primary",onClick:function(){return b(!D)},children:["toggle ",C," browser"]})]}),D&&Object(t.jsx)(Ge.a,{onFile:function(F,v){return u&&u("".concat(v,"/").concat(F.name))}})]})},Xe=function(r){var n=Object(a.j)(),u=r.visible,O=r.onVisibleChange,C=r.onFinish,s=r.id,h=r.initialData,D=r.groups,b=xe.a.useForm(),N=Object(P.a)(b,1),F=N[0],v=!s||s===-1,M=Object(o.useState)("text"),l=Object(P.a)(M,2),i=l[0],g=l[1],w=Object(o.useCallback)(function(){return!!(F.getFieldValue("group")==="global"||h)},[F,h]),K=Object(o.useState)(""),q=Object(P.a)(K,2),k=q[0],se=q[1];Object(o.useEffect)(function(){if(typeof s=="object"){var ee;F.setFieldsValue(s),g((ee=s.type)!==null&&ee!==void 0?ee:"text")}else s&&s!==-1?Object(A.d)(Number(s)).then(function(ce){ce.success&&(F.setFieldsValue(ce.data),g(ce.data.type),se(ce.data.group))}):(F.resetFields(),g("text"))},[s,F,h]);var pe=Object(o.useCallback)(function(ee){ee.type&&ee.type!==i&&g(ee.type)},[i]);return Object(t.jsxs)($.a,{form:F,title:n.formatMessage({id:s?"editSetting":"newSetting",defaultMessage:s?"editSetting":"newSetting"}),width:"60vw",visible:!!u,onVisibleChange:O,onFinish:C,onValuesChange:pe,children:[Object(t.jsxs)(d.a.Group,{children:[h?Object(t.jsx)(Z.a,{label:Object(t.jsx)(a.a,{id:"group",defaultMessage:"group"}),rules:[{required:!0}],width:"md",name:"group",disabled:w()}):Object(t.jsx)(d.a.Item,{label:Object(t.jsx)(a.a,{id:"group",defaultMessage:"group"}),name:"group",children:Object(t.jsx)(Ee,{style:{width:"300px"},autoFocus:!0,value:k,onChange:function(ce){return se(ce)},filterOption:function(ce,Fe){var Re;return(Fe==null||(Re=Fe.children)===null||Re===void 0?void 0:Re.toString().toLowerCase().indexOf(ce.toLowerCase()))!==-1},children:D.map(function(ee){return Object(t.jsx)(Ee.Option,{value:ee,children:ee},ee)})})}),Object(t.jsx)(Z.a,{label:Object(t.jsx)(a.a,{id:"key",defaultMessage:"key"}),rules:[{required:!0}],width:"md",name:"key",disabled:w()})]}),Object(t.jsxs)(d.a.Group,{children:[Object(t.jsx)(re.a,{name:"enumerable",disabled:w(),label:Object(t.jsx)(a.a,{id:"enumerable",defaultMessage:"enumerable"})}),Object(t.jsx)(re.a,{name:"public",disabled:w(),label:Object(t.jsx)(a.a,{id:"public",defaultMessage:"public"})})]}),Object(t.jsx)(d.a.Group,{children:Object(t.jsx)(_e.a.Group,{disabled:!!(!v||h),name:"type",label:Object(t.jsx)(a.a,{id:"type"}),options:[{label:"text",value:"text"},{label:"markdown",value:"markdown"},{label:"json",value:"json"},{label:"file",value:"file"},{label:"image",value:"image"},{label:"boolean",value:"boolean"},{label:"number",value:"number"}]})}),Object(t.jsxs)("div",{children:[i==="text"&&Object(t.jsx)(Z.a,{width:"lg",name:"value",label:Object(t.jsx)(a.a,{id:"value"})}),i==="json"&&Object(t.jsxs)(t.Fragment,{children:[Object(t.jsx)(Le.a,{width:"lg",name:"value",label:Object(t.jsx)(a.a,{id:"value"}),tooltip:"".concat(n.formatMessage({id:"example_json"}),': {"name":"John", "age":30, "city":["New York","Warsaw"]}')}),Object(t.jsx)(d.a.Item,{noStyle:!0,shouldUpdate:!0,children:function(){try{return Object(t.jsx)(ye.a,{src:JSON.parse(F.getFieldValue("value"))})}catch(ce){return Object(t.jsx)(ye.a,{src:JSON.parse('{ "error": "cannot parse this json" }')})}}})]}),(i==="file"||i==="image")&&Object(t.jsx)(d.a.Item,{name:"value",label:"value",tooltip:"select file from current repository or upload new one",valuePropName:"value",children:Object(t.jsx)(Qe,{type:i})}),i==="markdown"&&Object(t.jsx)(d.a.Item,{name:"value",label:"value",tooltip:"The editor is WYSIWYG and includes formatting tools whilst retaining the ability to write markdown shortcuts inline and output plain Markdown.",valuePropName:"value",children:Object(t.jsx)($e.a,{directory:"settings/wysiwyg"})}),i==="boolean"?Object(t.jsx)(re.a,{name:"data",label:Object(t.jsx)(a.a,{id:"value"}),checkedChildren:Object(t.jsx)(we.a,{}),unCheckedChildren:Object(t.jsx)(Ye.a,{})}):Object(t.jsx)(d.a.Item,{noStyle:!0,hidden:!0,children:Object(t.jsx)(Ve.a,{name:"data",valuePropName:"data"})}),i==="number"&&Object(t.jsx)(ze.a,{name:"data",label:Object(t.jsx)(a.a,{id:"value"})})]})]})},Ke=Xe,Te=e("G3dp"),We=e("/MfK"),He=function(){var y=Object(f.a)(Object(m.a)().mark(function r(n,u,O){var C;return Object(m.a)().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return C=Q.b.loading(n.formatMessage({id:"loading"})),h.prev=1,h.next=4,O&&O!==-1?Object(A.h)(O,Object(I.a)({},u)):Object(A.b)(Object(I.a)({},u));case 4:return C(),Q.b.success(n.formatMessage({id:"success"})),h.abrupt("return",!0);case 9:return h.prev=9,h.t0=h.catch(1),C(),Q.b.error(n.formatMessage({id:"error"})),h.abrupt("return",!1);case 14:case"end":return h.stop()}},r,null,[[1,9]])}));return function(n,u,O){return y.apply(this,arguments)}}(),Ze=function(){var y=Object(f.a)(Object(m.a)().mark(function r(n,u){var O;return Object(m.a)().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return O=Q.b.loading(n.formatMessage({id:"loading"})),s.prev=1,s.next=4,Object(A.c)(u);case 4:return O(),Q.b.success(n.formatMessage({id:"success"})),s.abrupt("return",!0);case 9:return s.prev=9,s.t0=s.catch(1),O(),Q.b.error(n.formatMessage({id:"error"})),s.abrupt("return",!1);case 14:case"end":return s.stop()}},r,null,[[1,9]])}));return function(n,u){return y.apply(this,arguments)}}(),ke=function(){var r=Object(o.useState)(!1),n=Object(P.a)(r,2),u=n[0],O=n[1],C=Object(o.useState)([]),s=Object(P.a)(C,2),h=s[0],D=s[1],b=Object(o.useRef)(),N=Object(a.j)(),F=Object(a.k)("@@initialState"),v=F.setInitialState;Object(o.useEffect)(function(){Object(A.e)().then(function(l){l.success&&D(l.data.filter(function(i){return i!=="global"}))})},[]);var M=[{title:Object(t.jsx)(a.a,{id:"group",defaultMessage:"group"}),dataIndex:"group",hideInSearch:!1,key:"group",valueType:"select",width:100,valueEnum:h.sort().reduce(function(l,i){return Object(I.a)(Object(I.a)({},l),{},Object(te.a)({},i,i))},{})},{title:Object(t.jsx)(a.a,{id:"key",defaultMessage:"key"}),dataIndex:"key",hideInSearch:!0},{title:Object(t.jsx)(a.a,{id:"type",defaultMessage:"type"}),dataIndex:"type",hideInSearch:!0},{title:Object(t.jsx)(a.a,{id:"enumerable",defaultMessage:"enumerable"}),dataIndex:"enumerable",hideInForm:!0,hideInSearch:!0,render:function(i,g){return Object(t.jsx)(R.a,{color:g.enumerable?"success":"error",children:Object(t.jsx)(a.a,{id:g.enumerable?"true":"false",defaultMessage:g.enumerable?"true":"false"})})}},{title:Object(t.jsx)(a.a,{id:"public",defaultMessage:"public"}),dataIndex:"public",hideInForm:!0,hideInSearch:!0,render:function(i,g){return Object(t.jsx)(R.a,{color:g.public?"success":"error",children:Object(t.jsx)(a.a,{id:g.public?"true":"false",defaultMessage:g.public?"true":"false"})})}},{hideInSearch:!0,title:Object(t.jsx)(a.a,{id:"pages.searchTable.titleOption",defaultMessage:"\u64CD\u4F5C"}),dataIndex:"option",valueType:"option",render:function(i,g){return[Object(t.jsx)(j.a,{title:Object(t.jsx)(a.a,{id:"edit",defaultMessage:"edit"}),children:Object(t.jsx)(c.a,{type:"primary",icon:Object(t.jsx)(Te.a,{}),onClick:function(){return O(g.id)}})},"edit"),Object(t.jsx)(x.a,{title:Object(t.jsx)(a.a,{id:"deleteQuestion",defaultMessage:"Are you sure to delete this record?"}),onConfirm:Object(f.a)(Object(m.a)().mark(function w(){var K;return Object(m.a)().wrap(function(k){for(;;)switch(k.prev=k.next){case 0:return k.next=2,Ze(N,g.id);case 2:K=k.sent,K&&(O(!1),b.current&&b.current.reload());case 4:case"end":return k.stop()}},w)})),okText:Object(t.jsx)(a.a,{id:"yes",defaultMessage:"Yes"}),cancelText:Object(t.jsx)(a.a,{id:"no",defaultMessage:"No"}),children:Object(t.jsx)(j.a,{title:Object(t.jsx)(a.a,{id:"delete",defaultMessage:"delete"}),children:Object(t.jsx)(c.a,{type:"primary",icon:Object(t.jsx)(We.a,{}),danger:!0})})},"delete")]}}];return Object(t.jsxs)(S.a.Fragment,{children:[Object(t.jsx)(me.a,{headerTitle:N.formatMessage({id:"menu.settings"}),actionRef:b,rowKey:"id",search:{},toolBarRender:function(){return[Object(t.jsxs)(c.a,{type:"primary",onClick:function(){O(-1)},children:[Object(t.jsx)(le.a,{})," ",Object(t.jsx)(a.a,{id:"pages.searchTable.new"})]},"primary")]},request:function(i){var g=i.pageSize,w=i.current,K=i.group;return Object(A.f)({pageSize:g,current:w,group:K}).then(function(q){return q.success?{data:q.data.filter(function(k){return k.group!=="global"}),total:q.meta.total,success:!0}:[]})},columns:M}),Object(t.jsx)(Ke,{groups:h,id:u,visible:Number.isInteger(u),onVisibleChange:function(i){return!i&&O(!1)},onFinish:function(){var l=Object(f.a)(Object(m.a)().mark(function i(g){var w,K,q;return Object(m.a)().wrap(function(se){for(;;)switch(se.prev=se.next){case 0:return w=g,se.next=3,He(N,w,Number(u));case 3:if(K=se.sent,!K){se.next=12;break}if(O(!1),b.current&&b.current.reload(),w.group!=="global"){se.next=12;break}return se.next=10,Object(A.f)({current:1,pageSize:100,group:"global"});case 10:q=se.sent,v(function(pe){return Object(I.a)(Object(I.a)({},pe),{},{config:q.success?q.data:pe==null?void 0:pe.config})});case 12:case"end":return se.stop()}},i)}));return function(i){return l.apply(this,arguments)}}()})]})},qe=ke,pt=e("tU7J"),et=e("wFql"),Ae=e("Fghh"),tt=function(r){var n=r.field,u=r.name;return n!=null&&n.includes("boolean")?Object(t.jsx)(re.a,{name:u,checkedChildren:Object(t.jsx)(Ae.a,{id:"true"}),unCheckedChildren:Object(t.jsx)(Ae.a,{id:"false"})}):Object(t.jsx)(Z.a,{width:"lg",name:u})},at=tt,rt=et.a.Text,fe;(function(y){y.Array="array",y.String="string"})(fe||(fe={}));var nt=function(r,n){return n===fe.Array?r&&Array.isArray(r)?JSON.stringify(r):"[]":r},st=function(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",n=arguments.length>1?arguments[1]:void 0;if(n===fe.Array){var u=JSON.parse(r);return u&&Array.isArray(u)?u:[]}return r},lt=function(r){var n=Object(Ae.j)(),u=r.visible,O=r.onVisibleChange,C=r.onFinish,s=r.value,h=xe.a.useForm(),D=Object(P.a)(h,1),b=D[0],N=Object(o.useMemo)(function(){return(s.rules||[]).includes(fe.Array)?fe.Array:fe.String},[s.rules]);return Object(o.useEffect)(function(){b.setFieldsValue(Object(I.a)(Object(I.a)({},s),{},{value:nt(s.value,N)}))},[N,s,b]),Object(t.jsxs)($.a,{form:b,title:s.full_key,width:"60vw",visible:u,onVisibleChange:O,onFinish:Object(f.a)(Object(m.a)().mark(function F(){var v;return Object(m.a)().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,Object(A.g)({key:s.full_key,value:st(b.getFieldsValue().value,N)});case 2:if(v=l.sent,!v.success){l.next=6;break}return C(v.success===!0),l.abrupt("return",v.success);case 6:return l.abrupt("return");case 7:case"end":return l.stop()}},F)})),children:[Object(t.jsxs)(d.a.Group,{children:[Object(t.jsx)(re.a,{disabled:!0,name:"public",label:Object(t.jsx)(a.a,{id:"public",defaultMessage:"public"})}),Object(t.jsx)(re.a,{disabled:!0,name:"readonly",label:Object(t.jsx)(a.a,{id:"readonly",defaultMessage:"readonly"})}),Object(t.jsx)(d.a.Item,{shouldUpdate:!0,label:Object(t.jsx)(a.a,{id:"rules",defaultMessage:"rules"}),children:function(){return Object(t.jsx)(rt,{code:!0,children:JSON.stringify(b.getFieldValue("rules"))})}})]}),N===fe.Array?Object(t.jsxs)(t.Fragment,{children:[Object(t.jsx)(Le.a,{width:"lg",name:"value",label:Object(t.jsx)(a.a,{id:"value"}),tooltip:"".concat(n.formatMessage({id:"example_json"}),': ["first_field_name", "second_field_name"]')}),Object(t.jsx)(d.a.Item,{noStyle:!0,shouldUpdate:!0,children:function(){try{return Object(t.jsx)(ye.a,{src:JSON.parse(b.getFieldValue("value"))})}catch(v){return Object(t.jsx)(ye.a,{src:JSON.parse('{ "error": "cannot parse this array" }')})}}})]}):Object(t.jsx)(t.Fragment,{children:Object(t.jsx)(d.a.Item,{shouldUpdate:!0,label:Object(t.jsx)(a.a,{id:"value"}),children:function(){return Object(t.jsx)(at,{field:b.getFieldValue("rules"),name:"value"})}})})]})},it=lt,ot=[{title:Object(t.jsx)(a.a,{id:"key",defaultMessage:"key"}),dataIndex:"key",hideInSearch:!0},{title:Object(t.jsx)(a.a,{id:"readonly",defaultMessage:"readonly"}),dataIndex:"readonly",hideInForm:!0,hideInSearch:!0,render:function(r,n){return Object(t.jsx)(R.a,{color:n.readonly?"success":"error",children:Object(t.jsx)(a.a,{id:n.readonly?"true":"false",defaultMessage:n.readonly?"true":"false"})})}},{title:Object(t.jsx)(a.a,{id:"public",defaultMessage:"public"}),dataIndex:"public",hideInForm:!0,hideInSearch:!0,render:function(r,n){return Object(t.jsx)(R.a,{color:n.public?"success":"error",children:Object(t.jsx)(a.a,{id:n.public?"true":"false",defaultMessage:n.public?"true":"false"})})}},{title:Object(t.jsx)(a.a,{id:"value",defaultMessage:"value"}),dataIndex:"value",hideInForm:!0,hideInSearch:!0,render:function(r,n){return typeof n.value=="boolean"?Object(t.jsx)(R.a,{color:n.value?"success":"error",children:Object(t.jsx)(a.a,{id:n.value?"true":"false",defaultMessage:n.value?"true":"false"})}):n.value}}],ut=function y(r,n){var u=arguments.length>2&&arguments[2]!==void 0?arguments[2]:[];return!r||typeof r!="object"?!1:(Object.keys(r).forEach(function(O){var C=r[O];O===n?u.push(r):typeof C=="object"&&y(C,n,u)}),u)},ct=function(r){var n=r.packageName,u=r.values,O=r.onValueUpdated,C=Object(a.j)(),s=Object(o.useState)(),h=Object(P.a)(s,2),D=h[0],b=h[1],N=Object(o.useMemo)(function(){var F=u[n];return ut(F,"rules")},[u,n]);return Object(t.jsxs)(S.a.Fragment,{children:[Object(t.jsx)(me.a,{headerTitle:C.formatMessage({id:"menu.settings"}),rowKey:"key",search:{},dataSource:N,columns:[].concat(ot,[{hideInSearch:!0,title:Object(t.jsx)(a.a,{id:"pages.searchTable.titleOption",defaultMessage:"\u64CD\u4F5C"}),dataIndex:"option",valueType:"option",render:function(v,M){return[Object(t.jsx)(j.a,{title:Object(t.jsx)(a.a,{id:"edit",defaultMessage:"edit"}),children:Object(t.jsx)(c.a,{type:"primary",icon:Object(t.jsx)(Te.a,{}),onClick:function(){return b(M)}})},"edit")]}}])}),D&&Object(t.jsx)(it,{value:D,visible:D!==void 0,onVisibleChange:function(v){return v===!1&&b(void 0)},onFinish:Object(f.a)(Object(m.a)().mark(function F(){return Object(m.a)().wrap(function(M){for(;;)switch(M.prev=M.next){case 0:O();case 1:case"end":return M.stop()}},F)}))})]})},dt=ct,Ne=e("oBTY"),jt=function(){var y=Object(f.a)(Object(m.a)().mark(function r(n,u,O){var C,s;return Object(m.a)().wrap(function(D){for(;;)switch(D.prev=D.next){case 0:return C=Q.b.loading(n.formatMessage({id:"loading"})),D.prev=1,D.next=4,O&&O!==-1?Object(A.h)(O,Object(I.a)({},u)):Object(A.b)(Object(I.a)({},u));case 4:return s=D.sent,C(),Q.b.success(n.formatMessage({id:"success"})),D.abrupt("return",{success:!0,updatedSettings:s});case 10:return D.prev=10,D.t0=D.catch(1),C(),Q.b.error(n.formatMessage({id:"error"})),D.abrupt("return",{success:!1,updateSettings:null});case 15:case"end":return D.stop()}},r,null,[[1,10]])}));return function(n,u,O){return y.apply(this,arguments)}}(),Ot=function(){var y=Object(f.a)(Object(m.a)().mark(function r(n,u){var O;return Object(m.a)().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return O=Q.b.loading(n.formatMessage({id:"loading"})),s.prev=1,s.next=4,Object(A.c)(u);case 4:return O(),Q.b.success(n.formatMessage({id:"success"})),s.abrupt("return",!0);case 9:return s.prev=9,s.t0=s.catch(1),O(),Q.b.error(n.formatMessage({id:"error"})),s.abrupt("return",!1);case 14:case"end":return s.stop()}},r,null,[[1,9]])}));return function(n,u){return y.apply(this,arguments)}}(),Pe={logo:{id:-1,key:"logo",group:"global",value:"",public:!0,enumerable:!0,sort:0,type:"image",data:"EscolaLMS"},frontURL:{id:0,key:"frontURL",group:"global",value:"",public:!0,enumerable:!0,sort:0,type:"text",data:"EscolaLMS"},showAccessRequestsInMenu:{id:0,key:"showAccessRequestsInMenu",group:"global",value:"false",public:!0,enumerable:!0,sort:1,type:"boolean",data:!1},showConsultationRequestsInMenu:{id:0,key:"showConsultationRequestsInMenu",group:"global",value:"false",public:!0,enumerable:!0,sort:1,type:"boolean",data:!1},showProjectTypeInProgram:{id:0,key:"showProjectTypeInProgram",group:"global",value:"false",public:!0,enumerable:!0,sort:1,type:"boolean",data:!1},maxLessonsNestingInProgram:{id:0,key:"maxLessonsNestingInProgram",group:"global",value:"0",public:!0,enumerable:!0,sort:1,type:"number",data:0}},ft=function(){var r=Object(o.useState)(!1),n=Object(P.a)(r,2),u=n[0],O=n[1],C=Object(o.useRef)(),s=Object(a.j)(),h=Object(a.k)("@@initialState"),D=h.setInitialState,b=h.initialState,N=[{title:Object(t.jsx)(a.a,{id:"key",defaultMessage:"key"}),dataIndex:"key",hideInSearch:!0},{title:Object(t.jsx)(a.a,{id:"type",defaultMessage:"type"}),dataIndex:"type",hideInSearch:!0},{title:Object(t.jsx)(a.a,{id:"enumerable",defaultMessage:"enumerable"}),dataIndex:"enumerable",hideInForm:!0,hideInSearch:!0,render:function(M,l){return Object(t.jsx)(R.a,{color:l.enumerable?"success":"error",children:Object(t.jsx)(a.a,{id:l.enumerable?"true":"false",defaultMessage:l.enumerable?"true":"false"})})}},{title:Object(t.jsx)(a.a,{id:"public",defaultMessage:"public"}),dataIndex:"public",hideInForm:!0,hideInSearch:!0,render:function(M,l){return Object(t.jsx)(R.a,{color:l.public?"success":"error",children:Object(t.jsx)(a.a,{id:l.public?"true":"false",defaultMessage:l.public?"true":"false"})})}},{hideInSearch:!0,title:Object(t.jsx)(a.a,{id:"pages.searchTable.titleOption",defaultMessage:"\u64CD\u4F5C"}),dataIndex:"option",valueType:"option",render:function(M,l){return[l.id>0?Object(t.jsx)(j.a,{title:Object(t.jsx)(a.a,{id:"edit",defaultMessage:"edit"}),children:Object(t.jsx)(c.a,{type:"primary",icon:Object(t.jsx)(Te.a,{}),onClick:function(){return O(l.id)}})},"edit"):Object(t.jsx)(j.a,{title:Object(t.jsx)(a.a,{id:"create",defaultMessage:"create"}),children:Object(t.jsx)(c.a,{type:"primary",icon:Object(t.jsx)(le.a,{}),onClick:function(){O(Pe[l.key]||-1)}})},"create"),Object(t.jsx)(x.a,{title:Object(t.jsx)(a.a,{id:"deleteQuestion",defaultMessage:"Are you sure to delete this record?"}),onConfirm:Object(f.a)(Object(m.a)().mark(function i(){var g;return Object(m.a)().wrap(function(K){for(;;)switch(K.prev=K.next){case 0:return K.next=2,Ot(s,l.id);case 2:g=K.sent,g&&(O(!1),C.current&&C.current.reload());case 4:case"end":return K.stop()}},i)})),okText:Object(t.jsx)(a.a,{id:"yes",defaultMessage:"Yes"}),cancelText:Object(t.jsx)(a.a,{id:"no",defaultMessage:"No"}),children:l.id>0?Object(t.jsx)(j.a,{title:Object(t.jsx)(a.a,{id:"delete",defaultMessage:"delete"}),children:Object(t.jsx)(c.a,{type:"primary",icon:Object(t.jsx)(We.a,{}),danger:!0})}):null},"delete")]}}],F=function(M){var l;if(!!M&&(!(b!=null&&(l=b.config)!==null&&l!==void 0&&l.length)&&M&&D(Object(I.a)(Object(I.a)({},b),{},{config:[M]})),!!(b!=null&&b.config))){var i=b==null?void 0:b.config.map(function(g){return g.key===M.key?Object(I.a)(Object(I.a)({},g),M):g});D(Object(I.a)(Object(I.a)({},b),{},{config:i}))}};return Object(t.jsxs)(S.a.Fragment,{children:[Object(t.jsx)(me.a,{headerTitle:s.formatMessage({id:"menu.settings"}),actionRef:C,rowKey:"id",request:function(M){var l=M.pageSize,i=M.current;return Object(A.f)({pageSize:l,current:i,group:"global"}).then(function(g){if(g.success){var w=[].concat(Object(Ne.a)(Object.keys(Pe).map(function(K){return g.data.find(function(q){return q.key===K})||Pe[K]})),Object(Ne.a)(g.data.filter(function(K){return!Object.keys(Pe).includes(K.key)})));return{data:w,total:w.length,success:!0}}return[]})},columns:N}),Object(t.jsx)(Ke,{groups:[],id:u,visible:u,initialData:Pe,onVisibleChange:function(M){return!M&&O(!1)},onFinish:function(){var v=Object(f.a)(Object(m.a)().mark(function M(l){var i,g,w,K;return Object(m.a)().wrap(function(k){for(;;)switch(k.prev=k.next){case 0:return i=l,i.type==="number"&&(i=Object(I.a)(Object(I.a)({},i),{},{value:String(i.data)})),i.type==="boolean"&&(i=Object(I.a)(Object(I.a)({},i),{},{value:i.data})),k.next=5,jt(s,i,Number(u));case 5:g=k.sent,w=g.success,K=g.updatedSettings,w&&(K!=null&&K.success&&F(K.data),O(!1),C.current&&C.current.reload());case 9:case"end":return k.stop()}},M)}));return function(M){return v.apply(this,arguments)}}()})]})},bt=ft,mt=e("I5X1"),vt=function(r){return r.replaceAll("escolalms","").split("_").join("")},gt=U.default=function(){var y=Object(J.l)(),r=Object(a.j)(),n=y.tab,u=n===void 0?"user_settings":n,O=Object(o.useState)(),C=Object(P.a)(O,2),s=C[0],h=C[1],D=Object(o.useCallback)(function(){Object(A.a)().then(function(v){v.success&&h(v.data)})},[]),b=Object(mt.a)("@@initialState"),N=b.initialState,F=Object(o.useCallback)(function(){var v;return(N==null||(v=N.config)===null||v===void 0?void 0:v.length)!==0},[N]);return Object(o.useEffect)(function(){D()},[]),s?Object(t.jsxs)(T.a,{title:Object(t.jsx)(a.a,{id:"settings"}),header:{breadcrumb:{routes:[{path:"settings",breadcrumbName:r.formatMessage({id:"menu.Configuration.settings"})},{path:String(u),breadcrumbName:String(u)}]}},children:[!F()&&Object(t.jsx)(V.a,{message:Object(t.jsx)(a.a,{id:"global_settings_alert_title",defaultMessage:"Add global settings"}),description:Object(t.jsx)(a.a,{id:"global_settings_alert_description",defaultMessage:"Global settings are used to configure the entire LMS. You can add global settings by clicking the button below."}),type:"warning",showIcon:!0,style:{marginBottom:"20px"}}),Object(t.jsxs)(W.a,{tabs:{type:"card",activeKey:u,onChange:function(M){return a.e.push("/configuration/settings/".concat(M))}},children:[Object(t.jsx)(W.a.TabPane,{tab:Object(t.jsx)(a.a,{id:"user.settings"}),children:Object(t.jsx)(qe,{})},"user_settings"),Object(t.jsx)(W.a.TabPane,{tab:Object(t.jsx)(a.a,{id:"global_settings"}),children:Object(t.jsx)(bt,{})},"global_settings"),Object.keys(s).map(function(v){return Object(t.jsxs)(W.a.TabPane,{tab:Object(t.jsxs)("span",{children:[Object(t.jsx)(a.a,{id:"package"})," ",vt(v)]}),children:[Object(t.jsx)(dt,{values:s,packageName:v,onValueUpdated:function(){return D()}}),v]},v)})]})]}):Object(t.jsx)(G.a,{})}},hd5d:function(ne,U,e){"use strict";var B=e("qLMh"),V=e("9og8"),_=e("q1tI"),G=e.n(_),P=e("3Ef1"),o=e.n(P),S=e("BAh9"),W=e("vtG9"),J=e.n(W),a=e("9kvl"),T=e("nKUr"),A=e.n(T),L=function(E){var j=E.value,p=E.onChange,c=E.directory,X=c===void 0?"/wysiwyg":c,R=Object(a.j)();return Object(T.jsx)("div",{className:"form-wysiwyg-markdown",children:Object(T.jsx)(o.a,{uploadImage:function(){var te=Object(V.a)(Object(B.a)().mark(function m(I){var H,Q;return Object(B.a)().wrap(function(le){for(;;)switch(le.prev=le.next){case 0:return le.next=2,Object(S.e)(I,X);case 2:if(H=le.sent,!H.success){le.next=6;break}return Q=H.data[0].name.includes("/")?H.data[0].name:"".concat(X).concat(H.data[0].name),le.abrupt("return",Object(S.d)(Q,1e3));case 6:throw new Error("Error while uploading");case 7:case"end":return le.stop()}},m)}));return function(m){return te.apply(this,arguments)}}(),defaultValue:j||"",onChange:function(m){return p&&p(m())},placeholder:R.formatMessage({id:"wysiwyg_placeholder"})})})};U.a=L},lLVY:function(ne,U,e){},tneF:function(ne,U,e){"use strict";var B=e("sRBo"),V=e("kaz8"),_=e("VTBJ"),G=e("Ff2n"),P=e("nKUr"),o=e.n(P),S=e("uX+g"),W=e("q1tI"),J=e.n(W),a=e("WFLz"),T=e("adzw"),A=["options","fieldProps","proFieldProps","valueEnum"],L=J.a.forwardRef(function(p,c){var X=p.options,R=p.fieldProps,te=p.proFieldProps,m=p.valueEnum,I=Object(G.a)(p,A);return Object(P.jsx)(T.a,Object(_.a)({ref:c,valueType:"checkbox",valueEnum:Object(S.a)(m,void 0),fieldProps:Object(_.a)({options:X},R),lightProps:Object(_.a)({labelFormatter:function(){return Object(P.jsx)(T.a,Object(_.a)({ref:c,valueType:"checkbox",mode:"read",valueEnum:Object(S.a)(m,void 0),filedConfig:{customLightMode:!0},fieldProps:Object(_.a)({options:X},R),proFieldProps:te},I))}},I.lightProps),proFieldProps:te},I))}),x=J.a.forwardRef(function(p,c){var X=p.fieldProps,R=p.children;return Object(P.jsx)(V.a,Object(_.a)(Object(_.a)({ref:c},X),{},{children:R}))}),E=Object(a.a)(x,{valuePropName:"checked"}),j=E;j.Group=L,U.a=j},vtG9:function(ne,U,e){}}]);

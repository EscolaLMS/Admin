(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{"3fxf":function(de,I,e){"use strict";var G=e("DjyN"),z=e("NUBc"),A=e("Mwp2"),j=e("VXEj"),L=e("+L6B"),S=e("2/Rp"),B=e("5NDa"),n=e("5rEg"),J=e("oBTY"),c=e("k1fw"),_=e("tJVT"),Y=e("DYRE"),o=e("zeV3"),V=e("tU7J"),x=e("wFql"),O=e("q1tI"),M=e.n(O),U=e("BAh9"),h=e("/MfK"),ee=e("mAF4"),W=e("dF/Y"),k=e("9kvl"),N=e("DBJ/"),Q=e("lLVY"),te=e.n(Q),m=e("nKUr"),je=e.n(m),$=function(ne){var ce=ne.directory,ae=ne.onUploaded;return Object(m.jsxs)(o.b,{align:"start",children:[Object(m.jsxs)(x.a.Text,{children:[Object(m.jsx)(k.a,{id:"pages.files.filesBrowser"}),Object(m.jsx)(x.a.Text,{code:!0,children:ce})]}),Object(m.jsx)(N.a,{url:"/api/admin/file/upload",name:"file[]",data:{target:ce},onUpload:function(H){H.success&&ae(ce,H.data)}})]})},fe=function(ne){var ce=ne.defaultDirectory,ae=ce===void 0?"/":ce,se=ne.onFile,H=ne.hideDeleteBtn,Me=H===void 0?!1:H,oe=ne.forceLoading,ye=oe===void 0?!1:oe,xe=Object(k.i)(),ie=Object(O.useState)({loading:!1,name:"",directory:ae,current_page:1,data:void 0,per_page:1,last_page:1,total:0}),he=Object(_.a)(ie,2),D=he[0],ge=he[1],X=Object(O.useRef)(),Z=Object(O.useCallback)(function(E){ge(function(d){return Object(c.a)(Object(c.a)({},d),{},{loading:E})})},[]),pe=Object(O.useCallback)(function(E,d){ge(function(C){return Object(c.a)(Object(c.a)(Object(c.a)({},C),E.data),{},{data:[{url:d.split("/").slice(0,-1).join("/"),name:"..",created_at:"",mime:"directory"}].concat(Object(J.a)(E.data.data.map(function(w){return Object(c.a)(Object(c.a)({},w),{},{url:w.mime==="directory"?"".concat(d,"/").concat(w.name):w.url})}))).filter(function(w){return d==="/"||d===ae?w.name!=="..":!0}),directory:d,loading:!1})})},[Z]),P=Object(O.useCallback)(function(E){var d,C=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1,w=function(){return X.current&&X.current.abort()};return w(),X.current=new AbortController,Z(!0),Object(U.a)({directory:E,page:C},{signal:(d=X.current)===null||d===void 0?void 0:d.signal}).then(function(le){le.success&&pe(le,E)}).catch(function(){return Z(!1)}),function(){w()}},[Z]);Object(O.useEffect)(function(){return P(ae)},[ae,P]);var ve=Object(O.useCallback)(function(E){Z(!0),Object(U.c)(E).then(function(){P(D.directory)}).catch(function(){Z(!1)})},[P,Z,D.directory]),me=Object(O.useCallback)(function(E,d){var C,w=arguments.length>2&&arguments[2]!==void 0?arguments[2]:1,le=function(){return X.current&&X.current.abort()};return le(),X.current=new AbortController,Z(!0),Object(U.b)({directory:E,name:d,page:w},{signal:(C=X.current)===null||C===void 0?void 0:C.signal}).then(function(Oe){Oe.success&&pe(Oe,E)}).catch(function(){return Z(!1)}),function(){le()}},[Z]);return Object(m.jsxs)("div",{className:"file-browser",children:[Object(m.jsxs)("div",{className:"file-browser__header",children:[Object(m.jsx)(n.a,{placeholder:xe.formatMessage({id:"search_file"}),className:"file-browser__input",onChange:function(d){return ge(function(C){return Object(c.a)(Object(c.a)({},C),{},{name:d.target.value})})},value:D.name}),Object(m.jsxs)("div",{children:[Object(m.jsx)(S.a,{className:"file-browser__button",onClick:function(){return P(D.directory)},children:Object(m.jsx)(k.a,{id:"reset"})}),Object(m.jsx)(S.a,{className:"file-browser__button",type:"primary",onClick:function(){return me(D.directory,D.name)},children:Object(m.jsx)(k.a,{id:"query"})})]})]}),Object(m.jsx)(j.b,{loading:D.loading||ye,size:"small",itemLayout:"horizontal",dataSource:D.data,header:Object(m.jsx)($,{directory:D.directory,onUploaded:function(d,C){C&&(P(d),se&&se(C,d))}}),footer:Object(m.jsx)($,{directory:D.directory,onUploaded:function(d,C){P(d),C&&se&&se(C,d)}}),renderItem:function(d){return Object(m.jsx)(j.b.Item,{actions:d.mime!=="directory"&&!Me?[Object(m.jsx)(S.a,{type:"default",danger:!0,icon:Object(m.jsx)(h.a,{}),size:"small",onClick:function(){return ve(d.url)}},"dir")]:[],children:Object(m.jsx)(j.b.Item.Meta,{avatar:d.mime==="directory"?Object(m.jsx)(S.a,{type:"primary",icon:Object(m.jsx)(ee.a,{}),size:"small",onClick:function(){return P(d.url)}}):Object(m.jsx)("a",{href:d.url,target:"_blank",rel:"noreferrer",children:Object(m.jsx)(S.a,{type:"default",icon:Object(m.jsx)(W.a,{}),size:"small"})}),description:Object(m.jsx)(M.a.Fragment,{children:Object(m.jsx)(S.a,{type:"text",size:"small",onClick:function(){return d.mime==="directory"?P(d.url):se&&se(d,D.directory)},children:d.name})})})})}}),Object(m.jsx)(z.a,{pageSizeOptions:[],current:D.current_page,total:D.total,pageSize:D.per_page,onChange:function(d){return P(D.directory,d)}})]})};I.a=fe},BAh9:function(de,I,e){"use strict";e.d(I,"a",function(){return S}),e.d(I,"b",function(){return n}),e.d(I,"e",function(){return c}),e.d(I,"d",function(){return Y}),e.d(I,"c",function(){return o});var G=e("k1fw"),z=e("9og8"),A=e("WmNS"),j=e.n(A),L=e("9kvl");function S(x,O){return B.apply(this,arguments)}function B(){return B=Object(z.a)(j.a.mark(function x(O,M){return j.a.wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.abrupt("return",Object(L.f)("/api/admin/file/list",Object(G.a)({method:"GET",params:O},M||{})));case 1:case"end":return h.stop()}},x)})),B.apply(this,arguments)}function n(x,O){return J.apply(this,arguments)}function J(){return J=Object(z.a)(j.a.mark(function x(O,M){return j.a.wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.abrupt("return",Object(L.f)("/api/admin/file/find",Object(G.a)({method:"GET",params:O},M||{})));case 1:case"end":return h.stop()}},x)})),J.apply(this,arguments)}function c(x,O,M){return _.apply(this,arguments)}function _(){return _=Object(z.a)(j.a.mark(function x(O,M,U){var h;return j.a.wrap(function(W){for(;;)switch(W.prev=W.next){case 0:return h=new FormData,h.append("file[]",O),h.append("target",M),W.abrupt("return",Object(L.f)("/api/admin/file/upload",Object(G.a)({method:"POST",data:h},U||{})));case 4:case"end":return W.stop()}},x)})),_.apply(this,arguments)}var Y=function(O){var M=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1e3;return"".concat("https://api-stage.escolalms.com","/api/images/img?path=").concat(O,"&w=").concat(M)};function o(x,O){return V.apply(this,arguments)}function V(){return V=Object(z.a)(j.a.mark(function x(O,M){return j.a.wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.abrupt("return",Object(L.f)("/api/admin/file/delete",Object(G.a)({method:"DELETE",data:{url:O}},M||{})));case 1:case"end":return h.stop()}},x)})),V.apply(this,arguments)}},"DBJ/":function(de,I,e){"use strict";var G=e("k1fw"),z=e("y8nQ"),A=e("Vl3Y"),j=e("etVw"),L=e("9kvl"),S=e("qFDU"),B=e("nKUr"),n=e.n(B);function J(c){var _=c.onChange,Y=c.onUpload,o=c.url,V=c.name,x=c.extra,O=c.accept,M=c.data,U=c.wrapInForm,h=U===void 0?!0:U,ee=c.title,W=c.formProps,k=Object(L.i)();return M&&M[V]&&delete M[V],Object(B.jsx)(S.a,{condition:h,wrap:function(Q){return Object(B.jsx)(A.a,Object(G.a)(Object(G.a)({},W),{},{children:Q}))},children:Object(B.jsx)(j.a,{title:ee||Object(B.jsx)(L.a,{id:"upload_click_here"}),placeholder:k.formatMessage({id:"upload_click_here"}),onChange:function(Q){_&&_(Q),Q.file.status==="done"&&Y&&Y(Q.file.response)},label:Object(B.jsx)(L.a,{id:"upload"}),max:2,fieldProps:{data:M,accept:O,name:V,headers:{Authorization:"Bearer ".concat(localStorage.getItem("TOKEN"))}},action:"".concat("https://api-stage.escolalms.com").concat(o),extra:x})})}I.a=J},YjuE:function(de,I,e){"use strict";e.r(I);var G=e("T2oS"),z=e("W9HT"),A=e("tJVT"),j=e("q1tI"),L=e.n(j),S=e("nhC9"),B=e("Ty5D"),n=e("9kvl"),J=e("tMyG"),c=e("k1fw"),_=e("9og8"),Y=e("WmNS"),o=e.n(Y);function V(l,a){return x.apply(this,arguments)}function x(){return x=Object(_.a)(o.a.mark(function l(a,r){return o.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.abrupt("return",Object(n.f)("/api/admin/settings",Object(c.a)({method:"GET",useCache:!1,params:Object(c.a)(Object(c.a)({},a),{},{per_page:a.pageSize,page:a.current})},r||{})));case 1:case"end":return s.stop()}},l)})),x.apply(this,arguments)}function O(l,a){return M.apply(this,arguments)}function M(){return M=Object(_.a)(o.a.mark(function l(a,r){return o.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.abrupt("return",Object(n.f)("/api/admin/settings/".concat(a),Object(c.a)({method:"GET",useCache:!1},r||{})));case 1:case"end":return s.stop()}},l)})),M.apply(this,arguments)}function U(l,a){return h.apply(this,arguments)}function h(){return h=Object(_.a)(o.a.mark(function l(a,r){return o.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.abrupt("return",Object(n.f)("/api/admin/settings",Object(c.a)({method:"POST",headers:{"Content-Type":"application/json"},data:a},r||{})));case 1:case"end":return s.stop()}},l)})),h.apply(this,arguments)}function ee(l,a,r){return W.apply(this,arguments)}function W(){return W=Object(_.a)(o.a.mark(function l(a,r,i){return o.a.wrap(function(v){for(;;)switch(v.prev=v.next){case 0:return v.abrupt("return",Object(n.f)("/api/admin/settings/".concat(a),Object(c.a)({method:"PUT",headers:{"Content-Type":"application/json"},data:r},i||{})));case 1:case"end":return v.stop()}},l)})),W.apply(this,arguments)}function k(l,a){return N.apply(this,arguments)}function N(){return N=Object(_.a)(o.a.mark(function l(a,r){return o.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.abrupt("return",Object(n.f)("/api/admin/settings/".concat(a),Object(c.a)({method:"DELETE",headers:{"Content-Type":"application/json"}},r||{})));case 1:case"end":return s.stop()}},l)})),N.apply(this,arguments)}function Q(l){return te.apply(this,arguments)}function te(){return te=Object(_.a)(o.a.mark(function l(a){return o.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.abrupt("return",Object(n.f)("/api/admin/settings/groups",Object(c.a)({method:"GET",useCache:!1},a||{})));case 1:case"end":return i.stop()}},l)})),te.apply(this,arguments)}function m(l){return je.apply(this,arguments)}function je(){return je=Object(_.a)(o.a.mark(function l(a){return o.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.abrupt("return",Object(n.f)("/api/admin/config",Object(c.a)({method:"GET",useCache:!1},a||{})));case 1:case"end":return i.stop()}},l)})),je.apply(this,arguments)}function $(l,a){return fe.apply(this,arguments)}function fe(){return fe=Object(_.a)(o.a.mark(function l(a,r){var i,s;return o.a.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return i=a.key,s=a.value,u.abrupt("return",Object(n.f)("/api/admin/config",Object(c.a)({method:"POST",data:{config:[{key:i,value:s}]}},r||{})));case 2:case"end":return u.stop()}},l)})),fe.apply(this,arguments)}var Ee=e("P2fV"),ne=e("NJEC"),ce=e("5Dmo"),ae=e("3S7+"),se=e("+L6B"),H=e("2/Rp"),Me=e("+BJd"),oe=e("mr32"),ye=e("jrin"),xe=e("miYZ"),ie=e("tsqr"),he=e("xvlK"),D=e("Qiat"),ge=e("y8nQ"),X=e("Vl3Y"),Z=e("5NDa"),pe=e("5rEg"),P=e("VMEa"),ve=e("rmhi"),me=e("Qurx"),E=e("F/zT"),d=e("5qq5"),C=e("BiO0"),w=e("hd5d"),le=e("3fxf"),Oe=e("ovOe"),_e=e.n(Oe),t=e("nKUr"),Ce=function(a){var r=a.value,i=a.onChange,s=a.type,v=s===void 0?"file":s,u=Object(j.useState)(!1),y=Object(A.a)(u,2),F=y[0],f=y[1];return Object(t.jsxs)(L.a.Fragment,{children:[Object(t.jsxs)(P.a.Group,{children:[Object(t.jsx)(pe.a,{value:r,readOnly:!0}),Object(t.jsxs)(H.a,{size:"small",type:"primary",onClick:function(){return f(!F)},children:["toggle ",v," browser"]})]}),F&&Object(t.jsx)(le.a,{onFile:function(R,p){return i&&i("".concat(p,"/").concat(R.name))}})]})},De=function(a){var r=Object(n.i)(),i=a.visible,s=a.onVisibleChange,v=a.onFinish,u=a.id,y=X.a.useForm(),F=Object(A.a)(y,1),f=F[0],T=!u||u===-1,R=Object(j.useState)("text"),p=Object(A.a)(R,2),b=p[0],g=p[1];Object(j.useEffect)(function(){u&&u!==-1?O(u).then(function(K){K.success&&(f.setFieldsValue(K.data),g(K.data.type))}):(f.resetFields(),g("text"))},[u,f]);var re=Object(j.useCallback)(function(K){K.type&&K.type!==b&&g(K.type)},[b]);return Object(t.jsxs)(ve.a,{form:f,title:r.formatMessage({id:u?"editSetting":"newSetting",defaultMessage:u?"editSetting":"newSetting"}),width:"60vw",visible:i,onVisibleChange:s,onFinish:v,onValuesChange:re,children:[Object(t.jsxs)(P.a.Group,{children:[Object(t.jsx)(me.a,{label:Object(t.jsx)(n.a,{id:"group",defaultMessage:"group"}),rules:[{required:!0}],width:"md",name:"group"})," ",Object(t.jsx)(me.a,{label:Object(t.jsx)(n.a,{id:"key",defaultMessage:"key"}),rules:[{required:!0}],width:"md",name:"key"})]}),Object(t.jsxs)(P.a.Group,{children:[Object(t.jsx)(E.a,{name:"enumerable",label:Object(t.jsx)(n.a,{id:"enumerable",defaultMessage:"enumerable"})}),Object(t.jsx)(E.a,{name:"public",label:Object(t.jsx)(n.a,{id:"public",defaultMessage:"public"})})]}),Object(t.jsx)(P.a.Group,{children:Object(t.jsx)(d.a.Group,{disabled:!T,name:"type",label:Object(t.jsx)(n.a,{id:"type"}),options:[{label:"text",value:"text"},{label:"markdown",value:"markdown"},{label:"json",value:"json"},{label:"file",value:"file"},{label:"image",value:"image"}]})}),Object(t.jsxs)("div",{children:[b==="text"&&Object(t.jsx)(me.a,{width:"lg",name:"value",label:Object(t.jsx)(n.a,{id:"value"})}),b==="json"&&Object(t.jsxs)(t.Fragment,{children:[Object(t.jsx)(C.a,{width:"lg",name:"value",label:Object(t.jsx)(n.a,{id:"value"}),tooltip:"".concat(r.formatMessage({id:"example_json"}),': {"name":"John", "age":30, "city":["New York","Warsaw"]}')}),Object(t.jsx)(P.a.Item,{noStyle:!0,shouldUpdate:!0,children:function(){try{return Object(t.jsx)(_e.a,{src:JSON.parse(f.getFieldValue("value"))})}catch(q){return Object(t.jsx)(_e.a,{src:JSON.parse('{ "error": "cannot parse this json" }')})}}})]}),(b==="file"||b==="image")&&Object(t.jsx)(P.a.Item,{name:"value",label:"value",tooltip:"select file from current repository or upload new one",valuePropName:"value",children:Object(t.jsx)(Ce,{type:b})}),b==="markdown"&&Object(t.jsx)(P.a.Item,{name:"value",label:"value",tooltip:"The editor is WYSIWYG and includes formatting tools whilst retaining the ability to write markdown shortcuts inline and output plain Markdown.",valuePropName:"value",children:Object(t.jsx)(w.a,{directory:"settings/wysiwyg"})})]})]})},Te=De,Pe=e("G3dp"),Ie=e("/MfK"),Ae=function(){var l=Object(_.a)(o.a.mark(function a(r,i,s){var v;return o.a.wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return v=ie.default.loading(r.formatMessage({id:"loading"})),y.prev=1,y.next=4,s&&s!==-1?ee(s,Object(c.a)({},i)):U(Object(c.a)({},i));case 4:return v(),ie.default.success(r.formatMessage({id:"success"})),y.abrupt("return",!0);case 9:return y.prev=9,y.t0=y.catch(1),v(),ie.default.error(r.formatMessage({id:"error"})),y.abrupt("return",!1);case 14:case"end":return y.stop()}},a,null,[[1,9]])}));return function(r,i,s){return l.apply(this,arguments)}}(),Se=function(){var l=Object(_.a)(o.a.mark(function a(r,i){var s;return o.a.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return s=ie.default.loading(r.formatMessage({id:"loading"})),u.prev=1,u.next=4,k(i);case 4:return s(),ie.default.success(r.formatMessage({id:"success"})),u.abrupt("return",!0);case 9:return u.prev=9,u.t0=u.catch(1),s(),ie.default.error(r.formatMessage({id:"error"})),u.abrupt("return",!1);case 14:case"end":return u.stop()}},a,null,[[1,9]])}));return function(r,i){return l.apply(this,arguments)}}(),Ue=function(){var a=Object(j.useState)(!1),r=Object(A.a)(a,2),i=r[0],s=r[1],v=Object(j.useState)([]),u=Object(A.a)(v,2),y=u[0],F=u[1],f=Object(j.useRef)(),T=Object(n.i)();Object(j.useEffect)(function(){Q().then(function(p){p.success&&F(p.data)})},[]);var R=[{title:Object(t.jsx)(n.a,{id:"group",defaultMessage:"group"}),dataIndex:"group",hideInSearch:!1,key:"group",valueType:"select",width:100,valueEnum:y.sort().reduce(function(p,b){return Object(c.a)(Object(c.a)({},p),{},Object(ye.a)({},b,b))},{})},{title:Object(t.jsx)(n.a,{id:"key",defaultMessage:"key"}),dataIndex:"key",hideInSearch:!0},{title:Object(t.jsx)(n.a,{id:"type",defaultMessage:"type"}),dataIndex:"type",hideInSearch:!0},{title:Object(t.jsx)(n.a,{id:"enumerable",defaultMessage:"enumerable"}),dataIndex:"enumerable",hideInForm:!0,hideInSearch:!0,render:function(b,g){return Object(t.jsx)(oe.a,{color:g.enumerable?"success":"error",children:Object(t.jsx)(n.a,{id:g.enumerable?"true":"false",defaultMessage:g.enumerable?"true":"false"})})}},{title:Object(t.jsx)(n.a,{id:"public",defaultMessage:"public"}),dataIndex:"public",hideInForm:!0,hideInSearch:!0,render:function(b,g){return Object(t.jsx)(oe.a,{color:g.public?"success":"error",children:Object(t.jsx)(n.a,{id:g.public?"true":"false",defaultMessage:g.public?"true":"false"})})}},{hideInSearch:!0,title:Object(t.jsx)(n.a,{id:"pages.searchTable.titleOption",defaultMessage:"\u64CD\u4F5C"}),dataIndex:"option",valueType:"option",render:function(b,g){return[Object(t.jsx)(ae.a,{title:Object(t.jsx)(n.a,{id:"edit",defaultMessage:"edit"}),children:Object(t.jsx)(H.a,{type:"primary",icon:Object(t.jsx)(Pe.a,{}),onClick:function(){return s(g.id)}})},"edit"),Object(t.jsx)(ne.a,{title:Object(t.jsx)(n.a,{id:"deleteQuestion",defaultMessage:"Are you sure to delete this record?"}),onConfirm:Object(_.a)(o.a.mark(function re(){var K;return o.a.wrap(function(be){for(;;)switch(be.prev=be.next){case 0:return be.next=2,Se(T,g.id);case 2:K=be.sent,K&&(s(!1),f.current&&f.current.reload());case 4:case"end":return be.stop()}},re)})),okText:Object(t.jsx)(n.a,{id:"yes",defaultMessage:"Yes"}),cancelText:Object(t.jsx)(n.a,{id:"no",defaultMessage:"No"}),children:Object(t.jsx)(ae.a,{title:Object(t.jsx)(n.a,{id:"delete",defaultMessage:"delete"}),children:Object(t.jsx)(H.a,{type:"primary",icon:Object(t.jsx)(Ie.a,{}),danger:!0})})},"delete")]}}];return Object(t.jsxs)(L.a.Fragment,{children:[Object(t.jsx)(D.a,{headerTitle:T.formatMessage({id:"menu.settings"}),actionRef:f,rowKey:"id",search:{labelWidth:120},toolBarRender:function(){return[Object(t.jsxs)(H.a,{type:"primary",onClick:function(){s(-1)},children:[Object(t.jsx)(he.a,{})," ",Object(t.jsx)(n.a,{id:"pages.searchTable.new"})]},"primary")]},request:function(b){var g=b.pageSize,re=b.current,K=b.group;return V({pageSize:g,current:re,group:K}).then(function(q){return q.success?{data:q.data,total:q.meta.total,success:!0}:[]})},columns:R}),Object(t.jsx)(Te,{groups:y,id:i,visible:Number.isInteger(i),onVisibleChange:function(b){return b===!1&&s(!1)},onFinish:function(){var p=Object(_.a)(o.a.mark(function b(g){var re;return o.a.wrap(function(q){for(;;)switch(q.prev=q.next){case 0:return q.next=2,Ae(T,g,Number(i));case 2:re=q.sent,re&&(s(!1),f.current&&f.current.reload());case 4:case"end":return q.stop()}},b)}));return function(b){return p.apply(this,arguments)}}()})]})},Be=Ue,Ye=e("tU7J"),Fe=e("wFql"),Re=e("Fghh"),Le=Fe.a.Text,ue;(function(l){l.Array="array",l.String="string"})(ue||(ue={}));var We=function(a,r){return r===ue.Array?a&&Array.isArray(a)?JSON.stringify(a):"[]":a},Ke=function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",r=arguments.length>1?arguments[1]:void 0;if(r===ue.Array){var i=JSON.parse(a);return i&&Array.isArray(i)?i:[]}return a},we=function(a){var r=Object(Re.j)(),i=a.visible,s=a.onVisibleChange,v=a.onFinish,u=a.value,y=X.a.useForm(),F=Object(A.a)(y,1),f=F[0],T=Object(j.useMemo)(function(){return(u.rules||[]).includes(ue.Array)?ue.Array:ue.String},[u.rules]);return Object(j.useEffect)(function(){f.setFieldsValue(Object(c.a)(Object(c.a)({},u),{},{value:We(u.value,T)}))},[T,u,f]),Object(t.jsxs)(ve.a,{form:f,title:u.full_key,width:"60vw",visible:i,onVisibleChange:s,onFinish:Object(_.a)(o.a.mark(function R(){var p;return o.a.wrap(function(g){for(;;)switch(g.prev=g.next){case 0:return g.next=2,$({key:u.full_key,value:Ke(f.getFieldsValue().value,T)});case 2:if(p=g.sent,!p.success){g.next=6;break}return v(p.success===!0),g.abrupt("return",p.success);case 6:return g.abrupt("return");case 7:case"end":return g.stop()}},R)})),children:[Object(t.jsxs)(P.a.Group,{children:[Object(t.jsx)(E.a,{disabled:!0,name:"public",label:Object(t.jsx)(n.a,{id:"public",defaultMessage:"public"})}),Object(t.jsx)(E.a,{disabled:!0,name:"readonly",label:Object(t.jsx)(n.a,{id:"readonly",defaultMessage:"readonly"})}),Object(t.jsx)(P.a.Item,{shouldUpdate:!0,label:Object(t.jsx)(n.a,{id:"rules",defaultMessage:"rules"}),children:function(){return Object(t.jsx)(Le,{code:!0,children:JSON.stringify(f.getFieldValue("rules"))})}})]}),T===ue.Array?Object(t.jsxs)(t.Fragment,{children:[Object(t.jsx)(C.a,{width:"lg",name:"value",label:Object(t.jsx)(n.a,{id:"value"}),tooltip:"".concat(r.formatMessage({id:"example_json"}),': ["first_field_name", "second_field_name"]')}),Object(t.jsx)(P.a.Item,{noStyle:!0,shouldUpdate:!0,children:function(){try{return Object(t.jsx)(_e.a,{src:JSON.parse(f.getFieldValue("value"))})}catch(p){return Object(t.jsx)(_e.a,{src:JSON.parse('{ "error": "cannot parse this array" }')})}}})]}):Object(t.jsx)(me.a,{width:"lg",name:"value",label:Object(t.jsx)(n.a,{id:"value"})})]})},Ve=we,Ne=[{title:Object(t.jsx)(n.a,{id:"key",defaultMessage:"key"}),dataIndex:"key",hideInSearch:!0},{title:Object(t.jsx)(n.a,{id:"readonly",defaultMessage:"readonly"}),dataIndex:"readonly",hideInForm:!0,hideInSearch:!0,render:function(a,r){return Object(t.jsx)(oe.a,{color:r.readonly?"success":"error",children:Object(t.jsx)(n.a,{id:r.readonly?"true":"false",defaultMessage:r.readonly?"true":"false"})})}},{title:Object(t.jsx)(n.a,{id:"public",defaultMessage:"public"}),dataIndex:"public",hideInForm:!0,hideInSearch:!0,render:function(a,r){return Object(t.jsx)(oe.a,{color:r.public?"success":"error",children:Object(t.jsx)(n.a,{id:r.public?"true":"false",defaultMessage:r.public?"true":"false"})})}},{title:Object(t.jsx)(n.a,{id:"value",defaultMessage:"value"}),dataIndex:"value",hideInForm:!0,hideInSearch:!0}],$e=function l(a,r){var i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:[];return!a||typeof a!="object"?!1:(Object.keys(a).forEach(function(s){var v=a[s];s===r?i.push(a):typeof v=="object"&&l(v,r,i)}),i)},Ge=function(a){var r=a.packageName,i=a.values,s=a.onValueUpdated,v=Object(n.i)(),u=Object(j.useState)(),y=Object(A.a)(u,2),F=y[0],f=y[1],T=Object(j.useMemo)(function(){var R=i[r];return $e(R,"rules")},[i,r]);return Object(t.jsxs)(L.a.Fragment,{children:[Object(t.jsx)(D.a,{headerTitle:v.formatMessage({id:"menu.settings"}),rowKey:"key",search:{labelWidth:120},dataSource:T,columns:[].concat(Ne,[{hideInSearch:!0,title:Object(t.jsx)(n.a,{id:"pages.searchTable.titleOption",defaultMessage:"\u64CD\u4F5C"}),dataIndex:"option",valueType:"option",render:function(p,b){return[Object(t.jsx)(ae.a,{title:Object(t.jsx)(n.a,{id:"edit",defaultMessage:"edit"}),children:Object(t.jsx)(H.a,{type:"primary",icon:Object(t.jsx)(Pe.a,{}),onClick:function(){return f(b)}})},"edit")]}}])}),F&&Object(t.jsx)(Ve,{value:F,visible:F!==void 0,onVisibleChange:function(p){return p===!1&&f(void 0)},onFinish:Object(_.a)(o.a.mark(function R(){return o.a.wrap(function(b){for(;;)switch(b.prev=b.next){case 0:s();case 1:case"end":return b.stop()}},R)}))})]})},ze=Ge,Je=function(a){return a.replaceAll("escolalms","").split("_").join("")},ke=I.default=function(){var l=Object(B.h)(),a=Object(n.i)(),r=l.tab,i=r===void 0?"user_settings":r,s=Object(j.useState)(),v=Object(A.a)(s,2),u=v[0],y=v[1],F=Object(j.useCallback)(function(){m().then(function(f){f.success&&y(f.data)})},[]);return Object(j.useEffect)(function(){F()},[]),u?Object(t.jsx)(J.a,{title:Object(t.jsx)(n.a,{id:"settings"}),header:{breadcrumb:{routes:[{path:"settings",breadcrumbName:a.formatMessage({id:"menu.Settings"})},{path:String(i),breadcrumbName:String(i)}]}},children:Object(t.jsxs)(S.a,{tabs:{type:"card",activeKey:i,onChange:function(T){return n.d.push("/settings/".concat(T))}},children:[Object(t.jsx)(S.a.TabPane,{tab:Object(t.jsx)(n.a,{id:"user.settings"}),children:Object(t.jsx)(Be,{})},"user_settings"),Object.keys(u).map(function(f){return Object(t.jsxs)(S.a.TabPane,{tab:Object(t.jsxs)("span",{children:[Object(t.jsx)(n.a,{id:"package"})," ",Je(f)]}),children:[Object(t.jsx)(ze,{values:u,packageName:f,onValueUpdated:function(){return F()}}),f]},f)})]})}):Object(t.jsx)(z.a,{})}},hd5d:function(de,I,e){"use strict";var G=e("9og8"),z=e("WmNS"),A=e.n(z),j=e("q1tI"),L=e.n(j),S=e("3Ef1"),B=e.n(S),n=e("BAh9"),J=e("vtG9"),c=e.n(J),_=e("9kvl"),Y=e("nKUr"),o=e.n(Y),V=function(O){var M=O.value,U=O.onChange,h=O.directory,ee=h===void 0?"/wysiwyg":h,W=Object(_.i)();return Object(Y.jsx)("div",{className:"form-wysiwyg-markdown",children:Object(Y.jsx)(B.a,{uploadImage:function(){var k=Object(G.a)(A.a.mark(function N(Q){var te,m;return A.a.wrap(function($){for(;;)switch($.prev=$.next){case 0:return $.next=2,Object(n.e)(Q,ee);case 2:if(te=$.sent,!te.success){$.next=6;break}return m=te.data[0].name.includes("/")?te.data[0].name:"".concat(ee).concat(te.data[0].name),$.abrupt("return",Object(n.d)(m,1e3));case 6:throw new Error("Error while uploading");case 7:case"end":return $.stop()}},N)}));return function(N){return k.apply(this,arguments)}}(),defaultValue:M||"",onChange:function(N){return U&&U(N())},placeholder:W.formatMessage({id:"wysiwyg_placeholder"})})})};I.a=V},lLVY:function(de,I,e){},vtG9:function(de,I,e){}}]);

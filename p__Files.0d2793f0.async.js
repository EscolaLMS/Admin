(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{"3fxf":function(W,m,e){"use strict";var E=e("DjyN"),p=e("NUBc"),g=e("Mwp2"),j=e("VXEj"),I=e("+L6B"),u=e("2/Rp"),y=e("5NDa"),P=e("5rEg"),B=e("oBTY"),a=e("k1fw"),R=e("tJVT"),F=e("DYRE"),s=e("zeV3"),c=e("tU7J"),l=e("wFql"),_=e("q1tI"),M=e.n(_),r=e("BAh9"),S=e("/MfK"),f=e("mAF4"),z=e("dF/Y"),L=e("9kvl"),$=e("DBJ/"),Y=e("lLVY"),N=e.n(Y),n=e("nKUr"),X=e.n(n),V=function(v){var A=v.directory,C=v.onUploaded;return Object(n.jsxs)(s.b,{align:"start",children:[Object(n.jsxs)(l.a.Text,{children:[Object(n.jsx)(L.a,{id:"pages.files.filesBrowser"}),Object(n.jsx)(l.a.Text,{code:!0,children:A})]}),Object(n.jsx)($.a,{url:"/api/admin/file/upload",name:"file[]",data:{target:A},onUpload:function(x){x.success&&C(A,x.data)}})]})},J=function(v){var A=v.defaultDirectory,C=A===void 0?"/":A,O=v.onFile,x=v.hideDeleteBtn,k=x===void 0?!1:x,w=v.forceLoading,q=w===void 0?!1:w,ee=Object(L.l)(),te=Object(_.useState)({loading:!1,name:"",directory:C,current_page:1,data:void 0,per_page:1,last_page:1,total:0}),H=Object(R.a)(te,2),d=H[0],G=H[1],U=Object(_.useRef)(),b=Object(_.useCallback)(function(o){G(function(t){return Object(a.a)(Object(a.a)({},t),{},{loading:o})})},[]),Z=Object(_.useCallback)(function(o,t){o.success&&G(function(i){return Object(a.a)(Object(a.a)(Object(a.a)({},i),o.data),{},{data:[{url:t.split("/").slice(0,-1).join("/"),name:"..",created_at:"",mime:"directory"}].concat(Object(B.a)(o.data.data.map(function(D){return Object(a.a)(Object(a.a)({},D),{},{url:D.mime==="directory"?"".concat(t,"/").concat(D.name):D.url})}))).filter(function(D){return t==="/"||t===C?D.name!=="..":!0}),directory:t,loading:!1})})},[b]),h=Object(_.useCallback)(function(o){var t,i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1,D=function(){return U.current&&U.current.abort()};return D(),U.current=new AbortController,b(!0),Object(r.a)({directory:o,page:i},{signal:(t=U.current)===null||t===void 0?void 0:t.signal}).then(function(T){T.success&&Z(T,o)}).catch(function(){return b(!1)}),function(){D()}},[b]);Object(_.useEffect)(function(){return h(C)},[C,h]);var ne=Object(_.useCallback)(function(o){b(!0),Object(r.c)(o).then(function(){h(d.directory)}).catch(function(){b(!1)})},[h,b,d.directory]),ae=Object(_.useCallback)(function(o,t){var i,D=arguments.length>2&&arguments[2]!==void 0?arguments[2]:1,T=function(){return U.current&&U.current.abort()};return T(),U.current=new AbortController,b(!0),Object(r.b)({directory:o,name:t,page:D},{signal:(i=U.current)===null||i===void 0?void 0:i.signal}).then(function(Q){Q.success&&Z(Q,o)}).catch(function(){return b(!1)}),function(){T()}},[b]);return Object(n.jsxs)("div",{className:"file-browser",children:[Object(n.jsxs)("div",{className:"file-browser__header",children:[Object(n.jsx)(P.a,{placeholder:ee.formatMessage({id:"search_file"}),className:"file-browser__input",onChange:function(t){return G(function(i){return Object(a.a)(Object(a.a)({},i),{},{name:t.target.value})})},value:d.name}),Object(n.jsxs)("div",{children:[Object(n.jsx)(u.a,{className:"file-browser__button",onClick:function(){return h(d.directory)},children:Object(n.jsx)(L.a,{id:"reset"})}),Object(n.jsx)(u.a,{className:"file-browser__button",type:"primary",onClick:function(){return ae(d.directory,d.name)},children:Object(n.jsx)(L.a,{id:"query"})})]})]}),Object(n.jsx)(j.b,{loading:d.loading||q,size:"small",itemLayout:"horizontal",dataSource:d.data,header:Object(n.jsx)(V,{directory:d.directory,onUploaded:function(t,i){i&&(h(t),O&&O(i,t))}}),footer:Object(n.jsx)(V,{directory:d.directory,onUploaded:function(t,i){h(t),i&&O&&O(i,t)}}),renderItem:function(t){return Object(n.jsx)(j.b.Item,{actions:t.mime!=="directory"&&!k?[Object(n.jsx)(u.a,{type:"default",danger:!0,icon:Object(n.jsx)(S.a,{}),size:"small",onClick:function(){return ne(t.url)}},"dir")]:[],children:Object(n.jsx)(j.b.Item.Meta,{avatar:t.mime==="directory"?Object(n.jsx)(u.a,{type:"primary",icon:Object(n.jsx)(f.a,{}),size:"small",onClick:function(){return h(t.url)}}):Object(n.jsx)("a",{href:t.url,target:"_blank",rel:"noreferrer",children:Object(n.jsx)(u.a,{type:"default",icon:Object(n.jsx)(z.a,{}),size:"small"})}),description:Object(n.jsx)(M.a.Fragment,{children:Object(n.jsx)(u.a,{type:"text",size:"small",onClick:function(){return t.mime==="directory"?h(t.url):O&&O(t,d.directory)},children:t.name})})})})}}),Object(n.jsx)(p.a,{pageSizeOptions:[],current:d.current_page,total:d.total,pageSize:d.per_page,onChange:function(t){return h(d.directory,t)}})]})};m.a=J},BAh9:function(W,m,e){"use strict";e.d(m,"a",function(){return I}),e.d(m,"b",function(){return y}),e.d(m,"e",function(){return B}),e.d(m,"d",function(){return R}),e.d(m,"c",function(){return F});var E=e("qLMh"),p=e("k1fw"),g=e("9og8"),j=e("9kvl");function I(c,l){return u.apply(this,arguments)}function u(){return u=Object(g.a)(Object(E.a)().mark(function c(l,_){return Object(E.a)().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",Object(j.i)("/api/admin/file/list",Object(p.a)({method:"GET",params:l},_||{})));case 1:case"end":return r.stop()}},c)})),u.apply(this,arguments)}function y(c,l){return P.apply(this,arguments)}function P(){return P=Object(g.a)(Object(E.a)().mark(function c(l,_){return Object(E.a)().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",Object(j.i)("/api/admin/file/find",Object(p.a)({method:"GET",params:l},_||{})));case 1:case"end":return r.stop()}},c)})),P.apply(this,arguments)}function B(c,l,_){return a.apply(this,arguments)}function a(){return a=Object(g.a)(Object(E.a)().mark(function c(l,_,M){var r;return Object(E.a)().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return r=new FormData,r.append("file[]",l),r.append("target",_),f.abrupt("return",Object(j.i)("/api/admin/file/upload",Object(p.a)({method:"POST",data:r},M||{})));case 4:case"end":return f.stop()}},c)})),a.apply(this,arguments)}var R=function(l){var _=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1e3;return"".concat(window.REACT_APP_API_URL||"https://api-stage.escolalms.com","/api/images/img?path=").concat(l,"&w=").concat(_)};function F(c,l){return s.apply(this,arguments)}function s(){return s=Object(g.a)(Object(E.a)().mark(function c(l,_){return Object(E.a)().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",Object(j.i)("/api/admin/file/delete",Object(p.a)({method:"DELETE",data:{url:l}},_||{})));case 1:case"end":return r.stop()}},c)})),s.apply(this,arguments)}},"DBJ/":function(W,m,e){"use strict";var E=e("k1fw"),p=e("y8nQ"),g=e("Vl3Y"),j=e("tJVT"),I=e("etVw"),u=e("q1tI"),y=e.n(u),P=e("9kvl"),B=e("qFDU"),a=e("nKUr"),R=e.n(a);function F(s){var c=s.onChange,l=s.onUpload,_=s.url,M=s.name,r=s.extra,S=s.accept,f=s.data,z=s.wrapInForm,L=z===void 0?!0:z,$=s.title,Y=s.formProps,N=s.maxFiles,n=s.clearListAfterUpload,X=s.hideLabel,V=Object(u.useState)(),J=Object(j.a)(V,2),K=J[0],v=J[1],A=Object(P.l)();return f&&f[M]&&delete f[M],Object(a.jsx)(B.a,{condition:L,wrap:function(O){return Object(a.jsx)(g.a,Object(E.a)(Object(E.a)({},Y),{},{children:O}))},children:Object(a.jsx)(I.a,{title:$||" ".concat(A.formatMessage({id:"upload_click_here"})),placeholder:A.formatMessage({id:"upload_click_here"}),onChange:function(O){v(O),c&&c(O),O.file.status==="done"&&(l&&l(O.file.response),n&&v(void 0))},label:!X&&Object(a.jsx)(P.a,{id:"upload"}),max:N!=null?N:2,fieldProps:{data:f,accept:S,name:M,headers:{Authorization:"Bearer ".concat(localStorage.getItem("TOKEN"))}},action:"".concat(window.REACT_APP_API_URL||"https://api-stage.escolalms.com").concat(_),extra:r,fileList:K==null?void 0:K.fileList})})}m.a=F},lLVY:function(W,m,e){},u4ym:function(W,m,e){"use strict";e.r(m);var E=e("IzEo"),p=e("bx4M"),g=e("tU7J"),j=e("wFql"),I=e("q1tI"),u=e.n(I),y=e("tMyG"),P=e("9kvl"),B=e("3fxf"),a=e("nKUr"),R=e.n(a);m.default=function(){return Object(a.jsx)(y.a,{children:Object(a.jsxs)(p.a,{children:[Object(a.jsx)(j.a.Text,{strong:!0,children:Object(a.jsx)(P.a,{id:"pages.files.content"})}),Object(a.jsx)(B.a,{})]})})}}}]);

(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"3fxf":function(x,u,e){"use strict";var m=e("DjyN"),D=e("NUBc"),h=e("Mwp2"),E=e("VXEj"),I=e("+L6B"),d=e("2/Rp"),L=e("5NDa"),b=e("5rEg"),B=e("oBTY"),r=e("k1fw"),R=e("tJVT"),z=e("DYRE"),U=e("zeV3"),l=e("tU7J"),c=e("wFql"),s=e("q1tI"),g=e.n(s),a=e("BAh9"),S=e("/MfK"),p=e("mAF4"),Y=e("dF/Y"),K=e("9kvl"),G=e("DBJ/"),X=e("lLVY"),ne=e.n(X),n=e("nKUr"),ae=e.n(n),$=function(P){var A=P.directory,C=P.onUploaded;return Object(n.jsxs)(U.b,{align:"start",children:[Object(n.jsxs)(c.a.Text,{children:[Object(n.jsx)(K.a,{id:"pages.files.filesBrowser"}),Object(n.jsx)(c.a.Text,{code:!0,children:A})]}),Object(n.jsx)(G.a,{url:"/api/admin/file/upload",name:"file[]",data:{target:A},onUpload:function(T){T.success&&C(A,T.data)}})]})},H=function(P){var A=P.defaultDirectory,C=A===void 0?"/":A,v=P.onFile,T=P.hideDeleteBtn,Z=T===void 0?!1:T,N=P.forceLoading,w=N===void 0?!1:N,k=Object(K.l)(),q=Object(s.useState)({loading:!1,name:"",directory:C,current_page:1,data:void 0,per_page:1,last_page:1,total:0}),J=Object(R.a)(q,2),i=J[0],W=J[1],M=Object(s.useRef)(),f=Object(s.useCallback)(function(o){W(function(t){return Object(r.a)(Object(r.a)({},t),{},{loading:o})})},[]),V=Object(s.useCallback)(function(o,t){o.success&&W(function(_){return Object(r.a)(Object(r.a)(Object(r.a)({},_),o.data),{},{data:[{url:t.split("/").slice(0,-1).join("/"),name:"..",created_at:"",mime:"directory"}].concat(Object(B.a)(o.data.data.map(function(O){return Object(r.a)(Object(r.a)({},O),{},{url:O.mime==="directory"?"".concat(t,"/").concat(O.name):O.url})}))).filter(function(O){return t==="/"||t===C?O.name!=="..":!0}),directory:t,loading:!1})})},[f]),j=Object(s.useCallback)(function(o){var t,_=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1,O=function(){return M.current&&M.current.abort()};return O(),M.current=new AbortController,f(!0),Object(a.a)({directory:o,page:_},{signal:(t=M.current)===null||t===void 0?void 0:t.signal}).then(function(y){y.success&&V(y,o)}).catch(function(){return f(!1)}),function(){O()}},[f]);Object(s.useEffect)(function(){return j(C)},[C,j]);var ee=Object(s.useCallback)(function(o){f(!0),Object(a.c)(o).then(function(){j(i.directory)}).catch(function(){f(!1)})},[j,f,i.directory]),te=Object(s.useCallback)(function(o,t){var _,O=arguments.length>2&&arguments[2]!==void 0?arguments[2]:1,y=function(){return M.current&&M.current.abort()};return y(),M.current=new AbortController,f(!0),Object(a.b)({directory:o,name:t,page:O},{signal:(_=M.current)===null||_===void 0?void 0:_.signal}).then(function(F){F.success&&V(F,o)}).catch(function(){return f(!1)}),function(){y()}},[f]);return Object(n.jsxs)("div",{className:"file-browser",children:[Object(n.jsxs)("div",{className:"file-browser__header",children:[Object(n.jsx)(b.a,{placeholder:k.formatMessage({id:"search_file"}),className:"file-browser__input",onChange:function(t){return W(function(_){return Object(r.a)(Object(r.a)({},_),{},{name:t.target.value})})},value:i.name}),Object(n.jsxs)("div",{children:[Object(n.jsx)(d.a,{className:"file-browser__button",onClick:function(){return j(i.directory)},children:Object(n.jsx)(K.a,{id:"reset"})}),Object(n.jsx)(d.a,{className:"file-browser__button",type:"primary",onClick:function(){return te(i.directory,i.name)},children:Object(n.jsx)(K.a,{id:"query"})})]})]}),Object(n.jsx)(E.b,{loading:i.loading||w,size:"small",itemLayout:"horizontal",dataSource:i.data,header:Object(n.jsx)($,{directory:i.directory,onUploaded:function(t,_){_&&(j(t),v&&v(_,t))}}),footer:Object(n.jsx)($,{directory:i.directory,onUploaded:function(t,_){j(t),_&&v&&v(_,t)}}),renderItem:function(t){return Object(n.jsx)(E.b.Item,{actions:t.mime!=="directory"&&!Z?[Object(n.jsx)(d.a,{type:"default",danger:!0,icon:Object(n.jsx)(S.a,{}),size:"small",onClick:function(){return ee(t.url)}},"dir")]:[],children:Object(n.jsx)(E.b.Item.Meta,{avatar:t.mime==="directory"?Object(n.jsx)(d.a,{type:"primary",icon:Object(n.jsx)(p.a,{}),size:"small",onClick:function(){return j(t.url)}}):Object(n.jsx)("a",{href:t.url,target:"_blank",rel:"noreferrer",children:Object(n.jsx)(d.a,{type:"default",icon:Object(n.jsx)(Y.a,{}),size:"small"})}),description:Object(n.jsx)(g.a.Fragment,{children:Object(n.jsx)(d.a,{type:"text",size:"small",onClick:function(){return t.mime==="directory"?j(t.url):v&&v(t,i.directory)},children:t.name})})})})}}),Object(n.jsx)(D.a,{pageSizeOptions:[],current:i.current_page,total:i.total,pageSize:i.per_page,onChange:function(t){return j(i.directory,t)}})]})};u.a=H},BAh9:function(x,u,e){"use strict";e.d(u,"a",function(){return I}),e.d(u,"b",function(){return L}),e.d(u,"e",function(){return B}),e.d(u,"d",function(){return R}),e.d(u,"c",function(){return z});var m=e("qLMh"),D=e("k1fw"),h=e("9og8"),E=e("9kvl");function I(l,c){return d.apply(this,arguments)}function d(){return d=Object(h.a)(Object(m.a)().mark(function l(c,s){return Object(m.a)().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",Object(E.i)("/api/admin/file/list",Object(D.a)({method:"GET",params:c},s||{})));case 1:case"end":return a.stop()}},l)})),d.apply(this,arguments)}function L(l,c){return b.apply(this,arguments)}function b(){return b=Object(h.a)(Object(m.a)().mark(function l(c,s){return Object(m.a)().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",Object(E.i)("/api/admin/file/find",Object(D.a)({method:"GET",params:c},s||{})));case 1:case"end":return a.stop()}},l)})),b.apply(this,arguments)}function B(l,c,s){return r.apply(this,arguments)}function r(){return r=Object(h.a)(Object(m.a)().mark(function l(c,s,g){var a;return Object(m.a)().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return a=new FormData,a.append("file[]",c),a.append("target",s),p.abrupt("return",Object(E.i)("/api/admin/file/upload",Object(D.a)({method:"POST",data:a},g||{})));case 4:case"end":return p.stop()}},l)})),r.apply(this,arguments)}var R=function(c){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1e3;return"".concat(window.REACT_APP_API_URL||"https://api-stage.escolalms.com","/api/images/img?path=").concat(c,"&w=").concat(s)};function z(l,c){return U.apply(this,arguments)}function U(){return U=Object(h.a)(Object(m.a)().mark(function l(c,s){return Object(m.a)().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",Object(E.i)("/api/admin/file/delete",Object(D.a)({method:"DELETE",data:{url:c}},s||{})));case 1:case"end":return a.stop()}},l)})),U.apply(this,arguments)}},lLVY:function(x,u,e){},u4ym:function(x,u,e){"use strict";e.r(u);var m=e("IzEo"),D=e("bx4M"),h=e("tU7J"),E=e("wFql"),I=e("q1tI"),d=e.n(I),L=e("tMyG"),b=e("9kvl"),B=e("3fxf"),r=e("nKUr"),R=e.n(r);u.default=function(){return Object(r.jsx)(L.a,{children:Object(r.jsxs)(D.a,{children:[Object(r.jsx)(E.a.Text,{strong:!0,children:Object(r.jsx)(b.a,{id:"pages.files.content"})}),Object(r.jsx)(B.a,{})]})})}}}]);

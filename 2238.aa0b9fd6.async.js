"use strict";(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[2238],{20568:function(Y,Z,e){e.d(Z,{Z:function(){return B}});var F=e(19632),A=e.n(F),$=e(97857),d=e.n($),z=e(5574),T=e.n(z),m=e(67294),b=e(17578),L=e(78957),g=e(5154),K=e(55102),t=e(14726),M=e(2487),S=e(72252),N=e(82061),O=e(55725),c=e(69753),_=e(80854),l=e(29477),n=e(85893),a=function(U){var I=U.directory,R=U.onUploaded;return(0,n.jsxs)(L.Z,{align:"start",children:[(0,n.jsxs)(g.Z.Text,{children:[(0,n.jsx)(_.FormattedMessage,{id:"pages.files.filesBrowser"}),(0,n.jsx)(g.Z.Text,{code:!0,children:I})]}),(0,n.jsx)(l.Z,{url:"/api/admin/file/upload",name:"file[]",data:{target:I},onUpload:function(f){f.success&&R(I,f.data)}})]})},k=function(U){var I=U.defaultDirectory,R=I===void 0?"/":I,y=U.onFile,f=U.hideDeleteBtn,u=f===void 0?!1:f,o=U.forceLoading,C=o===void 0?!1:o,h=(0,_.useIntl)(),Q=(0,m.useState)({loading:!1,name:"",directory:R,current_page:1,data:void 0,per_page:1,last_page:1,total:0}),v=T()(Q,2),p=v[0],V=v[1],x=(0,m.useRef)(),j=(0,m.useCallback)(function(s){V(function(r){return d()(d()({},r),{},{loading:s})})},[]),J=(0,m.useCallback)(function(s,r){s.success&&V(function(i){return d()(d()(d()({},i),s.data),{},{data:[{url:r.split("/").slice(0,-1).join("/"),name:"..",created_at:"",mime:"directory"}].concat(A()(s.data.data.map(function(D){return d()(d()({},D),{},{url:D.mime==="directory"?"".concat(r,"/").concat(D.name):D.url})}))).filter(function(D){return r==="/"||r===R?D.name!=="..":!0}),directory:r,loading:!1})})},[j]),P=(0,m.useCallback)(function(s){var r,i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1,D=function(){return x.current&&x.current.abort()};return D(),x.current=new AbortController,j(!0),(0,b.QZ)({directory:s,page:i},{signal:(r=x.current)===null||r===void 0?void 0:r.signal}).then(function(W){W.success&&J(W,s)}).catch(function(){return j(!1)}),function(){D()}},[j]);(0,m.useEffect)(function(){return P(R)},[R,P]);var q=(0,m.useCallback)(function(s){j(!0),(0,b.Od)(s).then(function(){P(p.directory)}).catch(function(){j(!1)})},[P,j,p.directory]),ee=(0,m.useCallback)(function(s,r){var i,D=arguments.length>2&&arguments[2]!==void 0?arguments[2]:1,W=function(){return x.current&&x.current.abort()};return W(),x.current=new AbortController,j(!0),(0,b.ht)({directory:s,name:r,page:D},{signal:(i=x.current)===null||i===void 0?void 0:i.signal}).then(function(w){w.success&&J(w,s)}).catch(function(){return j(!1)}),function(){W()}},[j]);return(0,n.jsxs)("div",{className:"file-browser",children:[(0,n.jsxs)("div",{className:"file-browser__header",children:[(0,n.jsx)(K.Z,{placeholder:h.formatMessage({id:"search_file"}),className:"file-browser__input",onChange:function(r){return V(function(i){return d()(d()({},i),{},{name:r.target.value})})},value:p.name}),(0,n.jsxs)("div",{children:[(0,n.jsx)(t.ZP,{className:"file-browser__button",onClick:function(){return P(p.directory)},children:(0,n.jsx)(_.FormattedMessage,{id:"reset"})}),(0,n.jsx)(t.ZP,{className:"file-browser__button",type:"primary",onClick:function(){return ee(p.directory,p.name)},children:(0,n.jsx)(_.FormattedMessage,{id:"query"})})]})]}),(0,n.jsx)(M.Z,{loading:p.loading||C,size:"small",itemLayout:"horizontal",dataSource:p.data,header:(0,n.jsx)(a,{directory:p.directory,onUploaded:function(r,i){i&&(P(r),y&&y(i,r))}}),footer:(0,n.jsx)(a,{directory:p.directory,onUploaded:function(r,i){P(r),i&&y&&y(i,r)}}),renderItem:function(r){return(0,n.jsx)(M.Z.Item,{actions:r.mime!=="directory"&&!u?[(0,n.jsx)(t.ZP,{type:"default",danger:!0,icon:(0,n.jsx)(N.Z,{}),size:"small",onClick:function(){return q(r.url)}},"dir")]:[],children:(0,n.jsx)(M.Z.Item.Meta,{avatar:r.mime==="directory"?(0,n.jsx)(t.ZP,{type:"primary",icon:(0,n.jsx)(O.Z,{}),size:"small",onClick:function(){return P(r.url)}}):(0,n.jsx)("a",{href:r.url,target:"_blank",rel:"noreferrer",children:(0,n.jsx)(t.ZP,{type:"default",icon:(0,n.jsx)(c.Z,{}),size:"small"})}),description:(0,n.jsx)(m.Fragment,{children:(0,n.jsx)(t.ZP,{type:"text",size:"small",onClick:function(){return r.mime==="directory"?P(r.url):y&&y(r,p.directory)},children:r.name})})})})}}),(0,n.jsx)(S.Z,{pageSizeOptions:[],current:p.current_page,total:p.total,pageSize:p.per_page,onChange:function(r){return P(p.directory,r)}})]})},B=k},82238:function(Y,Z,e){var F=e(9783),A=e.n(F),$=e(5574),d=e.n($),z=e(13769),T=e.n(z),m=e(15009),b=e.n(m),L=e(97857),g=e.n(L),K=e(99289),t=e.n(K),M=e(20568),S=e(29477),N=e(54734),O=e(2453),c=e(14726),_=e(28248),l=e(67294),n=e(80854),a=e(85893),k=["folder","onResponse","onUpload"],B=function(){var f=t()(b()().mark(function u(o,C,h){return b()().wrap(function(v){for(;;)switch(v.prev=v.next){case 0:return v.abrupt("return",(0,n.request)(o,g()({method:"POST",data:C},h||{})));case 1:case"end":return v.stop()}},u)}));return function(o,C,h){return f.apply(this,arguments)}}(),G=function(u){var o=u.split("//").join("/");return o=o[o.length-1]==="/"?o:"".concat(o,"/"),o=o[0]==="/"?o.slice(1):o,o},U=function(u){return Array.isArray(u)&&u[0]?u[0].name:u.name},I=function(u,o){var C=G(u),h=U(o);return h.includes(C)?h:"".concat(C).concat(h)},R=function(u){return{file:{status:"done",uid:"fileFromBrowser",name:"fileFromBrowser",response:u},fileList:[]}};function y(f){var u=f.folder,o=f.onResponse,C=f.onUpload,h=T()(f,k),Q=(0,l.useState)(!1),v=d()(Q,2),p=v[0],V=v[1],x=(0,l.useState)(!1),j=d()(x,2),J=j[0],P=j[1],q=h.url,ee=h.name,s=h.onChange,r=h.data,i=(0,l.useCallback)(function(){V(!1)},[]),D=(0,l.useCallback)(function(){var W=t()(b()().mark(function w(X,ne){var H;return b()().wrap(function(E){for(;;)switch(E.prev=E.next){case 0:if(ne){E.next=2;break}return E.abrupt("return");case 2:return P(!0),E.prev=3,E.next=6,B(q,g()(g()({},r),{},A()({},ee,I(ne,X))));case 6:H=E.sent,o&&o(H),H.success?(i(),s&&s(R(H))):O.ZP.error(H.message),E.next=15;break;case 11:E.prev=11,E.t0=E.catch(3),P(!1),O.ZP.error("data"in E.t0?E.t0.data.message:"Unknown Error");case 15:return E.prev=15,P(!1),E.finish(15);case 18:case"end":return E.stop()}},w,null,[[3,11,15,18]])}));return function(w,X){return W.apply(this,arguments)}}(),[]);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(c.ZP,{onClick:function(){return V(!0)},icon:(0,a.jsx)(N.Z,{}),children:[" ",(0,a.jsx)(n.FormattedMessage,{id:"browse"})]}),p&&(0,a.jsx)(_.Z,{open:p,onCancel:i,onOk:i,width:"60vw",closeIcon:!1,children:(0,a.jsx)(M.Z,{forceLoading:J,hideDeleteBtn:!0,defaultDirectory:u,onFile:function(w,X){return D(w,X)}})}),(0,a.jsx)("div",{style:{marginTop:"10px"},children:(0,a.jsx)(S.Z,g()({onUpload:C},h))})]})}Z.Z=y},29477:function(Y,Z,e){var F=e(97857),A=e.n(F),$=e(5574),d=e.n($),z=e(55523),T=e(75842),m=e(21974),b=e(67294),L=e(80854),g=e(85893);function K(t){var M=t.onChange,S=t.onUpload,N=t.url,O=t.name,c=t.extra,_=t.accept,l=t.data,n=t.wrapInForm,a=n===void 0?!0:n,k=t.title,B=t.formProps,G=t.maxFiles,U=t.clearListAfterUpload,I=t.hideLabel,R=t.disabled,y=t.showUploadList,f=(0,b.useState)(),u=d()(f,2),o=u[0],C=u[1],h=(0,L.useIntl)();return l&&l[O]&&delete l[O],(0,g.jsx)(m.Z,{condition:a,wrap:function(v){return(0,g.jsx)(T.Z,A()(A()({},B),{},{children:v}))},children:(0,g.jsx)(z.Z,{title:k||" ".concat(h.formatMessage({id:"upload_click_here"})),placeholder:h.formatMessage({id:"upload_click_here"}),label:!I&&(0,g.jsx)(L.FormattedMessage,{id:"upload"}),max:G!=null?G:2,fieldProps:{data:l,accept:_,name:O,showUploadList:y,headers:{Authorization:"Bearer ".concat(localStorage.getItem("TOKEN"))},onChange:function(v){C(v),M&&M(v),v.file.status==="done"&&(S&&S(v.file.response),U&&C(void 0))}},action:"".concat(window.REACT_APP_API_URL||"https://api-stage.escolalms.com").concat(N),extra:c,fileList:o==null?void 0:o.fileList,disabled:R})})}Z.Z=K},17578:function(Y,Z,e){e.d(Z,{Od:function(){return N},QZ:function(){return b},ht:function(){return g},pV:function(){return S},ws:function(){return t}});var F=e(15009),A=e.n(F),$=e(97857),d=e.n($),z=e(99289),T=e.n(z),m=e(80854);function b(c,_){return L.apply(this,arguments)}function L(){return L=T()(A()().mark(function c(_,l){return A()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",(0,m.request)("/api/admin/file/list",d()({method:"GET",params:_},l||{})));case 1:case"end":return a.stop()}},c)})),L.apply(this,arguments)}function g(c,_){return K.apply(this,arguments)}function K(){return K=T()(A()().mark(function c(_,l){return A()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",(0,m.request)("/api/admin/file/find",d()({method:"GET",params:_},l||{})));case 1:case"end":return a.stop()}},c)})),K.apply(this,arguments)}function t(c,_,l){return M.apply(this,arguments)}function M(){return M=T()(A()().mark(function c(_,l,n){var a;return A()().wrap(function(B){for(;;)switch(B.prev=B.next){case 0:return a=new FormData,a.append("file[]",_),a.append("target",l),B.abrupt("return",(0,m.request)("/api/admin/file/upload",d()({method:"POST",data:a},n||{})));case 4:case"end":return B.stop()}},c)})),M.apply(this,arguments)}var S=function(_){var l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1e3;return"".concat(window.REACT_APP_API_URL||"https://api-stage.escolalms.com","/api/images/img?path=").concat(_,"&w=").concat(l)};function N(c,_){return O.apply(this,arguments)}function O(){return O=T()(A()().mark(function c(_,l){return A()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",(0,m.request)("/api/admin/file/delete",d()({method:"DELETE",data:{url:_}},l||{})));case 1:case"end":return a.stop()}},c)})),O.apply(this,arguments)}}}]);

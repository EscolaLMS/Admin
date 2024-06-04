"use strict";(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[2238],{20568:function(J,Z,e){e.d(Z,{Z:function(){return B}});var F=e(19632),E=e.n(F),w=e(97857),d=e.n(w),z=e(5574),U=e.n(z),m=e(67294),T=e(17578),L=e(78957),A=e(96746),W=e(55102),a=e(14726),j=e(2487),S=e(72252),N=e(82061),O=e(55725),c=e(69753),_=e(80854),i=e(29477),n=e(85893),t=function(b){var I=b.directory,R=b.onUploaded;return(0,n.jsxs)(L.Z,{align:"start",children:[(0,n.jsxs)(A.Z.Text,{children:[(0,n.jsx)(_.FormattedMessage,{id:"pages.files.filesBrowser"}),(0,n.jsx)(A.Z.Text,{code:!0,children:I})]}),(0,n.jsx)(i.Z,{url:"/api/admin/file/upload",name:"file[]",data:{target:I},onUpload:function(p){p.success&&R(I,p.data)}})]})},$=function(b){var I=b.defaultDirectory,R=I===void 0?"/":I,C=b.onFile,p=b.hideDeleteBtn,l=p===void 0?!1:p,o=b.forceLoading,v=o===void 0?!1:o,P=(0,_.useIntl)(),k=(0,m.useState)({loading:!1,name:"",directory:R,current_page:1,data:void 0,per_page:1,last_page:1,total:0}),h=U()(k,2),f=h[0],V=h[1],x=(0,m.useRef)(),D=(0,m.useCallback)(function(s){V(function(r){return d()(d()({},r),{},{loading:s})})},[]),Q=(0,m.useCallback)(function(s,r){s.success&&V(function(u){return d()(d()(d()({},u),s.data),{},{data:[{url:r.split("/").slice(0,-1).join("/"),name:"..",created_at:"",mime:"directory"}].concat(E()(s.data.data.map(function(g){return d()(d()({},g),{},{url:g.mime==="directory"?"".concat(r,"/").concat(g.name):g.url})}))).filter(function(g){return r==="/"||r===R?g.name!=="..":!0}),directory:r,loading:!1})})},[D]),M=(0,m.useCallback)(function(s){var r,u=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1,g=function(){return x.current&&x.current.abort()};return g(),x.current=new AbortController,D(!0),(0,T.QZ)({directory:s,page:u},{signal:(r=x.current)===null||r===void 0?void 0:r.signal}).then(function(K){K.success&&Q(K,s)}).catch(function(){return D(!1)}),function(){g()}},[D]);(0,m.useEffect)(function(){return M(R)},[R,M]);var X=(0,m.useCallback)(function(s){D(!0),(0,T.Od)(s).then(function(){M(f.directory)}).catch(function(){D(!1)})},[M,D,f.directory]),H=(0,m.useCallback)(function(s,r){var u,g=arguments.length>2&&arguments[2]!==void 0?arguments[2]:1,K=function(){return x.current&&x.current.abort()};return K(),x.current=new AbortController,D(!0),(0,T.ht)({directory:s,name:r,page:g},{signal:(u=x.current)===null||u===void 0?void 0:u.signal}).then(function(y){y.success&&Q(y,s)}).catch(function(){return D(!1)}),function(){K()}},[D]);return(0,n.jsxs)("div",{className:"file-browser",children:[(0,n.jsxs)("div",{className:"file-browser__header",children:[(0,n.jsx)(W.Z,{placeholder:P.formatMessage({id:"search_file"}),className:"file-browser__input",onChange:function(r){return V(function(u){return d()(d()({},u),{},{name:r.target.value})})},value:f.name}),(0,n.jsxs)("div",{children:[(0,n.jsx)(a.ZP,{className:"file-browser__button",onClick:function(){return M(f.directory)},children:(0,n.jsx)(_.FormattedMessage,{id:"reset"})}),(0,n.jsx)(a.ZP,{className:"file-browser__button",type:"primary",onClick:function(){return H(f.directory,f.name)},children:(0,n.jsx)(_.FormattedMessage,{id:"query"})})]})]}),(0,n.jsx)(j.Z,{loading:f.loading||v,size:"small",itemLayout:"horizontal",dataSource:f.data,header:(0,n.jsx)(t,{directory:f.directory,onUploaded:function(r,u){u&&(M(r),C&&C(u,r))}}),footer:(0,n.jsx)(t,{directory:f.directory,onUploaded:function(r,u){M(r),u&&C&&C(u,r)}}),renderItem:function(r){return(0,n.jsx)(j.Z.Item,{actions:r.mime!=="directory"&&!l?[(0,n.jsx)(a.ZP,{type:"default",danger:!0,icon:(0,n.jsx)(N.Z,{}),size:"small",onClick:function(){return X(r.url)}},"dir")]:[],children:(0,n.jsx)(j.Z.Item.Meta,{avatar:r.mime==="directory"?(0,n.jsx)(a.ZP,{type:"primary",icon:(0,n.jsx)(O.Z,{}),size:"small",onClick:function(){return M(r.url)}}):(0,n.jsx)("a",{href:r.url,target:"_blank",rel:"noreferrer",children:(0,n.jsx)(a.ZP,{type:"default",icon:(0,n.jsx)(c.Z,{}),size:"small"})}),description:(0,n.jsx)(m.Fragment,{children:(0,n.jsx)(a.ZP,{type:"text",size:"small",onClick:function(){return r.mime==="directory"?M(r.url):C&&C(r,f.directory)},children:r.name})})})})}}),(0,n.jsx)(S.Z,{pageSizeOptions:[],current:f.current_page,total:f.total,pageSize:f.per_page,onChange:function(r){return M(f.directory,r)}})]})},B=$},82238:function(J,Z,e){var F=e(9783),E=e.n(F),w=e(5574),d=e.n(w),z=e(13769),U=e.n(z),m=e(15009),T=e.n(m),L=e(97857),A=e.n(L),W=e(99289),a=e.n(W),j=e(20568),S=e(29477),N=e(54734),O=e(14726),c=e(28248),_=e(2453),i=e(67294),n=e(80854),t=e(85893),$=["folder","onResponse"],B=function(){var p=a()(T()().mark(function l(o,v,P){return T()().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.abrupt("return",(0,n.request)(o,A()({method:"POST",data:v},P||{})));case 1:case"end":return h.stop()}},l)}));return function(o,v,P){return p.apply(this,arguments)}}(),G=function(l){var o=l.split("//").join("/");return o=o[o.length-1]==="/"?o:"".concat(o,"/"),o=o[0]==="/"?o.slice(1):o,o},b=function(l){return Array.isArray(l)&&l[0]?l[0].name:l.name},I=function(l,o){var v=G(l),P=b(o);return P.includes(v)?P:"".concat(v).concat(P)},R=function(l){return{file:{status:"done",uid:"fileFromBrowser",name:"fileFromBrowser",response:l},fileList:[]}};function C(p){var l=p.folder,o=p.onResponse,v=U()(p,$),P=(0,i.useState)(!1),k=d()(P,2),h=k[0],f=k[1],V=(0,i.useState)(!1),x=d()(V,2),D=x[0],Q=x[1],M=v.url,X=v.name,H=v.onChange,s=v.data,r=(0,i.useCallback)(function(){f(!1)},[]);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(O.ZP,{onClick:function(){return f(!0)},icon:(0,t.jsx)(N.Z,{}),children:[" ",(0,t.jsx)(n.FormattedMessage,{id:"browse"})]}),h&&(0,t.jsx)(c.Z,{open:h,onCancel:r,onOk:r,width:"60vw",closeIcon:!1,children:(0,t.jsx)(j.Z,{forceLoading:D,hideDeleteBtn:!0,defaultDirectory:l,onFile:function(g,K){K&&(Q(!0),B(M,A()(A()({},s),{},E()({},X,I(K,g)))).then(function(y){Q(!1),o&&o(y),y.success?(r(),H&&H(R(y))):_.ZP.error(y.message)}).catch(function(y){Q(!1),"data"in y?_.ZP.error(y.data.message):_.ZP.error("Unknown Error")}))}})}),(0,t.jsx)("div",{style:{marginTop:"10px"},children:(0,t.jsx)(S.Z,A()({},v))})]})}Z.Z=C},29477:function(J,Z,e){var F=e(97857),E=e.n(F),w=e(5574),d=e.n(w),z=e(55523),U=e(75842),m=e(21974),T=e(67294),L=e(80854),A=e(85893);function W(a){var j=a.onChange,S=a.onUpload,N=a.url,O=a.name,c=a.extra,_=a.accept,i=a.data,n=a.wrapInForm,t=n===void 0?!0:n,$=a.title,B=a.formProps,G=a.maxFiles,b=a.clearListAfterUpload,I=a.hideLabel,R=a.disabled,C=a.showUploadList,p=(0,T.useState)(),l=d()(p,2),o=l[0],v=l[1],P=(0,L.useIntl)();return i&&i[O]&&delete i[O],(0,A.jsx)(m.Z,{condition:t,wrap:function(h){return(0,A.jsx)(U.Z,E()(E()({},B),{},{children:h}))},children:(0,A.jsx)(z.Z,{title:$||" ".concat(P.formatMessage({id:"upload_click_here"})),placeholder:P.formatMessage({id:"upload_click_here"}),label:!I&&(0,A.jsx)(L.FormattedMessage,{id:"upload"}),max:G!=null?G:2,fieldProps:{data:i,accept:_,name:O,showUploadList:C,headers:{Authorization:"Bearer ".concat(localStorage.getItem("TOKEN"))},onChange:function(h){v(h),j&&j(h),h.file.status==="done"&&(S&&S(h.file.response),b&&v(void 0))}},action:"".concat(window.REACT_APP_API_URL||"https://api-stage.escolalms.com").concat(N),extra:c,fileList:o==null?void 0:o.fileList,disabled:R})})}Z.Z=W},17578:function(J,Z,e){e.d(Z,{Od:function(){return N},QZ:function(){return T},ht:function(){return A},pV:function(){return S},ws:function(){return a}});var F=e(15009),E=e.n(F),w=e(97857),d=e.n(w),z=e(99289),U=e.n(z),m=e(80854);function T(c,_){return L.apply(this,arguments)}function L(){return L=U()(E()().mark(function c(_,i){return E()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",(0,m.request)("/api/admin/file/list",d()({method:"GET",params:_},i||{})));case 1:case"end":return t.stop()}},c)})),L.apply(this,arguments)}function A(c,_){return W.apply(this,arguments)}function W(){return W=U()(E()().mark(function c(_,i){return E()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",(0,m.request)("/api/admin/file/find",d()({method:"GET",params:_},i||{})));case 1:case"end":return t.stop()}},c)})),W.apply(this,arguments)}function a(c,_,i){return j.apply(this,arguments)}function j(){return j=U()(E()().mark(function c(_,i,n){var t;return E()().wrap(function(B){for(;;)switch(B.prev=B.next){case 0:return t=new FormData,t.append("file[]",_),t.append("target",i),B.abrupt("return",(0,m.request)("/api/admin/file/upload",d()({method:"POST",data:t},n||{})));case 4:case"end":return B.stop()}},c)})),j.apply(this,arguments)}var S=function(_){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1e3;return"".concat(window.REACT_APP_API_URL||"https://api-stage.escolalms.com","/api/images/img?path=").concat(_,"&w=").concat(i)};function N(c,_){return O.apply(this,arguments)}function O(){return O=U()(E()().mark(function c(_,i){return E()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",(0,m.request)("/api/admin/file/delete",d()({method:"DELETE",data:{url:_}},i||{})));case 1:case"end":return t.stop()}},c)})),O.apply(this,arguments)}}}]);

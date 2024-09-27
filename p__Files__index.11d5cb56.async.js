"use strict";(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[5093],{85118:function(Z,f){var e={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M880 298.4H521L403.7 186.2a8.15 8.15 0 00-5.5-2.2H144c-17.7 0-32 14.3-32 32v592c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V330.4c0-17.7-14.3-32-32-32zM840 768H184V256h188.5l119.6 114.4H840V768z"}}]},name:"folder",theme:"outlined"};f.Z=e},69753:function(Z,f,e){var h=e(1413),l=e(67294),E=e(49495),s=e(84089),O=function(g,v){return l.createElement(s.Z,(0,h.Z)((0,h.Z)({},g),{},{ref:v,icon:E.Z}))},p=l.forwardRef(O);f.Z=p},55725:function(Z,f,e){var h=e(1413),l=e(67294),E=e(85118),s=e(84089),O=function(g,v){return l.createElement(s.Z,(0,h.Z)((0,h.Z)({},g),{},{ref:v,icon:E.Z}))},p=l.forwardRef(O);f.Z=p},20568:function(Z,f,e){e.d(f,{Z:function(){return U}});var h=e(19632),l=e.n(h),E=e(97857),s=e.n(E),O=e(5574),p=e.n(O),r=e(67294),g=e(17578),v=e(78957),j=e(5154),b=e(55102),a=e(14726),D=e(2487),K=e(72252),S=e(82061),C=e(55725),c=e(69753),i=e(80854),_=e(29477),n=e(85893),o=function(x){var L=x.directory,R=x.onUploaded;return(0,n.jsxs)(v.Z,{align:"start",children:[(0,n.jsxs)(j.Z.Text,{children:[(0,n.jsx)(i.FormattedMessage,{id:"pages.files.filesBrowser"}),(0,n.jsx)(j.Z.Text,{code:!0,children:L})]}),(0,n.jsx)(_.Z,{url:"/api/admin/file/upload",name:"file[]",data:{target:L},onUpload:function(B){B.success&&R(L,B.data)}})]})},w=function(x){var L=x.defaultDirectory,R=L===void 0?"/":L,y=x.onFile,B=x.hideDeleteBtn,$=B===void 0?!1:B,W=x.forceLoading,N=W===void 0?!1:W,V=(0,i.useIntl)(),G=(0,r.useState)({loading:!1,name:"",directory:R,current_page:1,data:void 0,per_page:1,last_page:1,total:0}),I=p()(G,2),m=I[0],H=I[1],T=(0,r.useRef)(),M=(0,r.useCallback)(function(d){H(function(t){return s()(s()({},t),{},{loading:d})})},[]),J=(0,r.useCallback)(function(d,t){d.success&&H(function(u){return s()(s()(s()({},u),d.data),{},{data:[{url:t.split("/").slice(0,-1).join("/"),name:"..",created_at:"",mime:"directory"}].concat(l()(d.data.data.map(function(P){return s()(s()({},P),{},{url:P.mime==="directory"?"".concat(t,"/").concat(P.name):P.url})}))).filter(function(P){return t==="/"||t===R?P.name!=="..":!0}),directory:t,loading:!1})})},[M]),A=(0,r.useCallback)(function(d){var t,u=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1,P=function(){return T.current&&T.current.abort()};return P(),T.current=new AbortController,M(!0),(0,g.QZ)({directory:d,page:u},{signal:(t=T.current)===null||t===void 0?void 0:t.signal}).then(function(F){F.success&&J(F,d)}).catch(function(){return M(!1)}),function(){P()}},[M]);(0,r.useEffect)(function(){return A(R)},[R,A]);var X=(0,r.useCallback)(function(d){M(!0),(0,g.Od)(d).then(function(){A(m.directory)}).catch(function(){M(!1)})},[A,M,m.directory]),Y=(0,r.useCallback)(function(d,t){var u,P=arguments.length>2&&arguments[2]!==void 0?arguments[2]:1,F=function(){return T.current&&T.current.abort()};return F(),T.current=new AbortController,M(!0),(0,g.ht)({directory:d,name:t,page:P},{signal:(u=T.current)===null||u===void 0?void 0:u.signal}).then(function(Q){Q.success&&J(Q,d)}).catch(function(){return M(!1)}),function(){F()}},[M]);return(0,n.jsxs)("div",{className:"file-browser",children:[(0,n.jsxs)("div",{className:"file-browser__header",children:[(0,n.jsx)(b.Z,{placeholder:V.formatMessage({id:"search_file"}),className:"file-browser__input",onChange:function(t){return H(function(u){return s()(s()({},u),{},{name:t.target.value})})},value:m.name}),(0,n.jsxs)("div",{children:[(0,n.jsx)(a.ZP,{className:"file-browser__button",onClick:function(){return A(m.directory)},children:(0,n.jsx)(i.FormattedMessage,{id:"reset"})}),(0,n.jsx)(a.ZP,{className:"file-browser__button",type:"primary",onClick:function(){return Y(m.directory,m.name)},children:(0,n.jsx)(i.FormattedMessage,{id:"query"})})]})]}),(0,n.jsx)(D.Z,{loading:m.loading||N,size:"small",itemLayout:"horizontal",dataSource:m.data,header:(0,n.jsx)(o,{directory:m.directory,onUploaded:function(t,u){u&&(A(t),y&&y(u,t))}}),footer:(0,n.jsx)(o,{directory:m.directory,onUploaded:function(t,u){A(t),u&&y&&y(u,t)}}),renderItem:function(t){return(0,n.jsx)(D.Z.Item,{actions:t.mime!=="directory"&&!$?[(0,n.jsx)(a.ZP,{type:"default",danger:!0,icon:(0,n.jsx)(S.Z,{}),size:"small",onClick:function(){return X(t.url)}},"dir")]:[],children:(0,n.jsx)(D.Z.Item.Meta,{avatar:t.mime==="directory"?(0,n.jsx)(a.ZP,{type:"primary",icon:(0,n.jsx)(C.Z,{}),size:"small",onClick:function(){return A(t.url)}}):(0,n.jsx)("a",{href:t.url,target:"_blank",rel:"noreferrer",children:(0,n.jsx)(a.ZP,{type:"default",icon:(0,n.jsx)(c.Z,{}),size:"small"})}),description:(0,n.jsx)(r.Fragment,{children:(0,n.jsx)(a.ZP,{type:"text",size:"small",onClick:function(){return t.mime==="directory"?A(t.url):y&&y(t,m.directory)},children:t.name})})})})}}),(0,n.jsx)(K.Z,{pageSizeOptions:[],current:m.current_page,total:m.total,pageSize:m.per_page,onChange:function(t){return A(m.directory,t)}})]})},U=w},29477:function(Z,f,e){var h=e(97857),l=e.n(h),E=e(5574),s=e.n(E),O=e(55523),p=e(75842),r=e(21974),g=e(67294),v=e(80854),j=e(85893);function b(a){var D=a.onChange,K=a.onUpload,S=a.url,C=a.name,c=a.extra,i=a.accept,_=a.data,n=a.wrapInForm,o=n===void 0?!0:n,w=a.title,U=a.formProps,z=a.maxFiles,x=a.clearListAfterUpload,L=a.hideLabel,R=a.disabled,y=a.showUploadList,B=(0,g.useState)(),$=s()(B,2),W=$[0],N=$[1],V=(0,v.useIntl)();return _&&_[C]&&delete _[C],(0,j.jsx)(r.Z,{condition:o,wrap:function(I){return(0,j.jsx)(p.Z,l()(l()({},U),{},{children:I}))},children:(0,j.jsx)(O.Z,{title:w||" ".concat(V.formatMessage({id:"upload_click_here"})),placeholder:V.formatMessage({id:"upload_click_here"}),label:!L&&(0,j.jsx)(v.FormattedMessage,{id:"upload"}),max:z!=null?z:2,fieldProps:{data:_,accept:i,name:C,showUploadList:y,headers:{Authorization:"Bearer ".concat(localStorage.getItem("TOKEN"))},onChange:function(I){N(I),D&&D(I),I.file.status==="done"&&(K&&K(I.file.response),x&&N(void 0))}},action:"".concat(window.REACT_APP_API_URL||"https://api-stage.escolalms.com").concat(S),extra:c,fileList:W==null?void 0:W.fileList,disabled:R})})}f.Z=b},8079:function(Z,f,e){e.r(f);var h=e(20568),l=e(74453),E=e(4393),s=e(5154),O=e(67294),p=e(80854),r=e(85893);f.default=function(){return(0,r.jsx)(l._z,{children:(0,r.jsxs)(E.Z,{children:[(0,r.jsx)(s.Z.Text,{strong:!0,children:(0,r.jsx)(p.FormattedMessage,{id:"pages.files.content"})}),(0,r.jsx)(h.Z,{})]})})}},17578:function(Z,f,e){e.d(f,{Od:function(){return S},QZ:function(){return g},ht:function(){return j},pV:function(){return K},ws:function(){return a}});var h=e(15009),l=e.n(h),E=e(97857),s=e.n(E),O=e(99289),p=e.n(O),r=e(80854);function g(c,i){return v.apply(this,arguments)}function v(){return v=p()(l()().mark(function c(i,_){return l()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.abrupt("return",(0,r.request)("/api/admin/file/list",s()({method:"GET",params:i},_||{})));case 1:case"end":return o.stop()}},c)})),v.apply(this,arguments)}function j(c,i){return b.apply(this,arguments)}function b(){return b=p()(l()().mark(function c(i,_){return l()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.abrupt("return",(0,r.request)("/api/admin/file/find",s()({method:"GET",params:i},_||{})));case 1:case"end":return o.stop()}},c)})),b.apply(this,arguments)}function a(c,i,_){return D.apply(this,arguments)}function D(){return D=p()(l()().mark(function c(i,_,n){var o;return l()().wrap(function(U){for(;;)switch(U.prev=U.next){case 0:return o=new FormData,o.append("file[]",i),o.append("target",_),U.abrupt("return",(0,r.request)("/api/admin/file/upload",s()({method:"POST",data:o},n||{})));case 4:case"end":return U.stop()}},c)})),D.apply(this,arguments)}var K=function(i){var _=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1e3;return"".concat(window.REACT_APP_API_URL||"https://api-stage.escolalms.com","/api/images/img?path=").concat(i,"&w=").concat(_)};function S(c,i){return C.apply(this,arguments)}function C(){return C=p()(l()().mark(function c(i,_){return l()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.abrupt("return",(0,r.request)("/api/admin/file/delete",s()({method:"DELETE",data:{url:i}},_||{})));case 1:case"end":return o.stop()}},c)})),C.apply(this,arguments)}}}]);

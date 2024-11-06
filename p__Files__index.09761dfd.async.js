"use strict";(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[5093],{85118:function(Z,f){var e={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M880 298.4H521L403.7 186.2a8.15 8.15 0 00-5.5-2.2H144c-17.7 0-32 14.3-32 32v592c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V330.4c0-17.7-14.3-32-32-32zM840 768H184V256h188.5l119.6 114.4H840V768z"}}]},name:"folder",theme:"outlined"};f.Z=e},69753:function(Z,f,e){var h=e(1413),l=e(67294),E=e(49495),s=e(84089),O=function(g,v){return l.createElement(s.Z,(0,h.Z)((0,h.Z)({},g),{},{ref:v,icon:E.Z}))},p=l.forwardRef(O);f.Z=p},55725:function(Z,f,e){var h=e(1413),l=e(67294),E=e(85118),s=e(84089),O=function(g,v){return l.createElement(s.Z,(0,h.Z)((0,h.Z)({},g),{},{ref:v,icon:E.Z}))},p=l.forwardRef(O);f.Z=p},20568:function(Z,f,e){e.d(f,{Z:function(){return I}});var h=e(19632),l=e.n(h),E=e(97857),s=e.n(E),O=e(5574),p=e.n(O),r=e(67294),g=e(17578),v=e(78957),C=e(71471),T=e(55102),a=e(14726),D=e(2487),K=e(72252),S=e(82061),x=e(55725),c=e(69753),i=e(80854),_=e(29477),n=e(85893),o=function(A){var U=A.directory,L=A.onUploaded;return(0,n.jsxs)(v.Z,{align:"start",children:[(0,n.jsxs)(C.Z.Text,{children:[(0,n.jsx)(i.FormattedMessage,{id:"pages.files.filesBrowser"}),(0,n.jsx)(C.Z.Text,{code:!0,children:U})]}),(0,n.jsx)(_.Z,{url:"/api/admin/file/upload",name:"file[]",data:{target:U},onUpload:function(b){b.success&&L(U,b.data)}})]})},w=function(A){var U=A.defaultDirectory,L=U===void 0?"/":U,y=A.onFile,b=A.hideDeleteBtn,N=b===void 0?!1:b,W=A.forceLoading,V=W===void 0?!1:W,$=A.hideAddBtn,G=$===void 0?!1:$,B=(0,i.useIntl)(),Y=(0,r.useState)({loading:!1,name:"",directory:L,current_page:1,data:void 0,per_page:1,last_page:1,total:0}),J=p()(Y,2),m=J[0],H=J[1],R=(0,r.useRef)(),M=(0,r.useCallback)(function(d){H(function(t){return s()(s()({},t),{},{loading:d})})},[]),X=(0,r.useCallback)(function(d,t){d.success&&H(function(u){return s()(s()(s()({},u),d.data),{},{data:[{url:t.split("/").slice(0,-1).join("/"),name:"..",created_at:"",mime:"directory"}].concat(l()(d.data.data.map(function(P){return s()(s()({},P),{},{url:P.mime==="directory"?"".concat(t,"/").concat(P.name):P.url})}))).filter(function(P){return t==="/"||t===L?P.name!=="..":!0}),directory:t,loading:!1})})},[M]),j=(0,r.useCallback)(function(d){var t,u=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1,P=function(){return R.current&&R.current.abort()};return P(),R.current=new AbortController,M(!0),(0,g.QZ)({directory:d,page:u},{signal:(t=R.current)===null||t===void 0?void 0:t.signal}).then(function(F){F.success&&X(F,d)}).catch(function(){return M(!1)}),function(){P()}},[M]);(0,r.useEffect)(function(){return j(L)},[L,j]);var k=(0,r.useCallback)(function(d){M(!0),(0,g.Od)(d).then(function(){j(m.directory)}).catch(function(){M(!1)})},[j,M,m.directory]),q=(0,r.useCallback)(function(d,t){var u,P=arguments.length>2&&arguments[2]!==void 0?arguments[2]:1,F=function(){return R.current&&R.current.abort()};return F(),R.current=new AbortController,M(!0),(0,g.ht)({directory:d,name:t,page:P},{signal:(u=R.current)===null||u===void 0?void 0:u.signal}).then(function(Q){Q.success&&X(Q,d)}).catch(function(){return M(!1)}),function(){F()}},[M]);return(0,n.jsxs)("div",{className:"file-browser",children:[(0,n.jsxs)("div",{className:"file-browser__header",children:[(0,n.jsx)(T.Z,{placeholder:B.formatMessage({id:"search_file"}),className:"file-browser__input",onChange:function(t){return H(function(u){return s()(s()({},u),{},{name:t.target.value})})},value:m.name}),(0,n.jsxs)("div",{children:[(0,n.jsx)(a.ZP,{className:"file-browser__button",onClick:function(){return j(m.directory)},children:(0,n.jsx)(i.FormattedMessage,{id:"reset"})}),(0,n.jsx)(a.ZP,{className:"file-browser__button",type:"primary",onClick:function(){return q(m.directory,m.name)},children:(0,n.jsx)(i.FormattedMessage,{id:"query"})})]})]}),(0,n.jsx)(D.Z,{loading:m.loading||V,size:"small",itemLayout:"horizontal",dataSource:m.data,header:G?null:(0,n.jsx)(o,{directory:m.directory,onUploaded:function(t,u){u&&(j(t),y&&y(u,t))}}),footer:G?null:(0,n.jsx)(o,{directory:m.directory,onUploaded:function(t,u){j(t),u&&y&&y(u,t)}}),renderItem:function(t){return(0,n.jsx)(D.Z.Item,{actions:t.mime!=="directory"&&!N?[(0,n.jsx)(a.ZP,{type:"default",danger:!0,icon:(0,n.jsx)(S.Z,{}),size:"small",onClick:function(){return k(t.url)}},"dir")]:[],children:(0,n.jsx)(D.Z.Item.Meta,{avatar:t.mime==="directory"?(0,n.jsx)(a.ZP,{type:"primary",icon:(0,n.jsx)(x.Z,{}),size:"small",onClick:function(){return j(t.url)}}):(0,n.jsx)("a",{href:t.url,target:"_blank",rel:"noreferrer",children:(0,n.jsx)(a.ZP,{type:"default",icon:(0,n.jsx)(c.Z,{}),size:"small"})}),description:(0,n.jsx)(r.Fragment,{children:(0,n.jsx)(a.ZP,{type:"text",size:"small",onClick:function(){return t.mime==="directory"?j(t.url):y&&y(t,m.directory)},children:t.name})})})})}}),(0,n.jsx)(K.Z,{pageSizeOptions:[],current:m.current_page,total:m.total,pageSize:m.per_page,onChange:function(t){return j(m.directory,t)}})]})},I=w},29477:function(Z,f,e){var h=e(97857),l=e.n(h),E=e(5574),s=e.n(E),O=e(55523),p=e(75842),r=e(21974),g=e(67294),v=e(80854),C=e(85893);function T(a){var D=a.onChange,K=a.onUpload,S=a.url,x=a.name,c=a.extra,i=a.accept,_=a.data,n=a.wrapInForm,o=n===void 0?!0:n,w=a.title,I=a.formProps,z=a.maxFiles,A=a.clearListAfterUpload,U=a.hideLabel,L=a.disabled,y=a.showUploadList,b=(0,g.useState)(),N=s()(b,2),W=N[0],V=N[1],$=(0,v.useIntl)();return _&&_[x]&&delete _[x],(0,C.jsx)(r.Z,{condition:o,wrap:function(B){return(0,C.jsx)(p.Z,l()(l()({},I),{},{children:B}))},children:(0,C.jsx)(O.Z,{title:w||" ".concat($.formatMessage({id:"upload_click_here"})),placeholder:$.formatMessage({id:"upload_click_here"}),label:!U&&(0,C.jsx)(v.FormattedMessage,{id:"upload"}),max:z!=null?z:2,fieldProps:{data:_,accept:i,name:x,showUploadList:y,headers:{Authorization:"Bearer ".concat(localStorage.getItem("TOKEN"))},onChange:function(B){V(B),D&&D(B),B.file.status==="done"&&(K&&K(B.file.response),A&&V(void 0))}},action:"".concat(window.REACT_APP_API_URL||"https://api-stage.escolalms.com").concat(S),extra:c,fileList:W==null?void 0:W.fileList,disabled:L})})}f.Z=T},8079:function(Z,f,e){e.r(f);var h=e(20568),l=e(74453),E=e(4393),s=e(71471),O=e(67294),p=e(80854),r=e(85893);f.default=function(){return(0,r.jsx)(l._z,{children:(0,r.jsxs)(E.Z,{children:[(0,r.jsx)(s.Z.Text,{strong:!0,children:(0,r.jsx)(p.FormattedMessage,{id:"pages.files.content"})}),(0,r.jsx)(h.Z,{})]})})}},17578:function(Z,f,e){e.d(f,{Od:function(){return S},QZ:function(){return g},ht:function(){return C},pV:function(){return K},ws:function(){return a}});var h=e(15009),l=e.n(h),E=e(97857),s=e.n(E),O=e(99289),p=e.n(O),r=e(80854);function g(c,i){return v.apply(this,arguments)}function v(){return v=p()(l()().mark(function c(i,_){return l()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.abrupt("return",(0,r.request)("/api/admin/file/list",s()({method:"GET",params:i},_||{})));case 1:case"end":return o.stop()}},c)})),v.apply(this,arguments)}function C(c,i){return T.apply(this,arguments)}function T(){return T=p()(l()().mark(function c(i,_){return l()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.abrupt("return",(0,r.request)("/api/admin/file/find",s()({method:"GET",params:i},_||{})));case 1:case"end":return o.stop()}},c)})),T.apply(this,arguments)}function a(c,i,_){return D.apply(this,arguments)}function D(){return D=p()(l()().mark(function c(i,_,n){var o;return l()().wrap(function(I){for(;;)switch(I.prev=I.next){case 0:return o=new FormData,o.append("file[]",i),o.append("target",_),I.abrupt("return",(0,r.request)("/api/admin/file/upload",s()({method:"POST",data:o},n||{})));case 4:case"end":return I.stop()}},c)})),D.apply(this,arguments)}var K=function(i){var _=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1e3;return"".concat(window.REACT_APP_API_URL||"https://api-stage.escolalms.com","/api/images/img?path=").concat(i,"&w=").concat(_)};function S(c,i){return x.apply(this,arguments)}function x(){return x=p()(l()().mark(function c(i,_){return l()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.abrupt("return",(0,r.request)("/api/admin/file/delete",s()({method:"DELETE",data:{url:i}},_||{})));case 1:case"end":return o.stop()}},c)})),x.apply(this,arguments)}}}]);

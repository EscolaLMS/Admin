(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"5ddx":function(K,o,e){"use strict";var d=e("9og8"),g=e("+L6B"),C=e("2/Rp"),r=e("tJVT"),h=e("WmNS"),D=e.n(h),p=e("q1tI"),b=e.n(p),v=e("9kvl"),T=e("Qiat"),m=e("VK58"),O=e("xvlK"),M=e("Xcxh"),P=e("y8nQ"),c=e("Vl3Y"),s=e("rmhi"),j=e("VMEa"),u=e("Qurx"),t=e("nKUr"),A=function(E){var I=Object(v.i)(),L=E.visible,a=E.onVisibleChange,i=E.onFinish,l=c.a.useForm(),f=Object(r.a)(l,1),n=f[0];return Object(p.useEffect)(function(){return function(){n.resetFields()}},[]),Object(t.jsx)(s.a,{form:n,title:I.formatMessage({id:"newSetting",defaultMessage:"newSetting"}),width:"30vw",visible:L,onVisibleChange:a,onFinish:i,children:Object(t.jsxs)(j.b.Group,{children:[Object(t.jsx)(u.a,{label:Object(t.jsx)(v.a,{id:"key",defaultMessage:"key"}),rules:[{required:!0}],width:"md",name:"key"}),Object(t.jsx)(u.a,{label:Object(t.jsx)(v.a,{id:"value",defaultMessage:"value"}),rules:[{required:!0}],width:"md",name:"value"})]})})},_=A,B=function(E){var I=E.user,L=E.isProfile,a=L===void 0?!1:L,i=Object(p.useRef)(),l=Object(v.i)(),f=Object(p.useState)(!1),n=Object(r.a)(f,2),y=n[0],R=n[1],G=Object(p.useState)("PATCH"),z=Object(r.a)(G,2),$=z[0],F=z[1],J=[{title:Object(t.jsx)(v.a,{id:"key",defaultMessage:"key"}),dataIndex:"key",hideInSearch:!0},{title:Object(t.jsx)(v.a,{id:"value",defaultMessage:"value"}),dataIndex:"value",hideInSearch:!0}],Q=Object(p.useCallback)(function(W){var x=W&&Object.entries(W).map(function(V){return{key:V[0],value:V[1]}});return x},[I]);return Object(t.jsxs)(b.a.Fragment,{children:[Object(t.jsx)(T.a,{headerTitle:l.formatMessage({id:"menu.settings"}),actionRef:i,rowKey:"id",search:!1,toolBarRender:a?function(){return[Object(t.jsxs)(C.a,{type:"primary",onClick:function(){R(-1),F("PATCH")},children:[Object(t.jsx)(O.a,{})," ",Object(t.jsx)(v.a,{id:"pages.searchTable.new"})]},"primary"),Object(t.jsxs)(C.a,{color:"yellow",type:"primary",onClick:function(){R(-1),F("PUT")},children:[Object(t.jsx)(M.a,{})," ",Object(t.jsx)(v.a,{id:"user.settings.overwrite"})]},"primary")]}:!1,request:function(){return Object(m.c)(Number(I)).then(function(x){return x.success?{data:Q(x.data)}:[]})},columns:J}),Object(t.jsx)(_,{id:y,visible:Number.isInteger(y),onVisibleChange:function(x){return x===!1&&R(!1)},onFinish:function(){var W=Object(d.a)(D.a.mark(function x(V){var N;return D.a.wrap(function(w){for(;;)switch(w.prev=w.next){case 0:return w.next=2,Object(m.f)(Number(I),$,V);case 2:N=w.sent,N.success&&(R(!1),i.current&&i.current.reload());case 4:case"end":return w.stop()}},x)}));return function(x){return W.apply(this,arguments)}}()})]})},U=o.a=B},BAh9:function(K,o,e){"use strict";e.d(o,"a",function(){return D}),e.d(o,"b",function(){return b}),e.d(o,"e",function(){return T}),e.d(o,"d",function(){return O}),e.d(o,"c",function(){return M});var d=e("k1fw"),g=e("9og8"),C=e("WmNS"),r=e.n(C),h=e("9kvl");function D(c,s){return p.apply(this,arguments)}function p(){return p=Object(g.a)(r.a.mark(function c(s,j){return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",Object(h.f)("/api/admin/file/list",Object(d.a)({method:"GET",params:s},j||{})));case 1:case"end":return t.stop()}},c)})),p.apply(this,arguments)}function b(c,s){return v.apply(this,arguments)}function v(){return v=Object(g.a)(r.a.mark(function c(s,j){return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",Object(h.f)("/api/admin/file/find",Object(d.a)({method:"GET",params:s},j||{})));case 1:case"end":return t.stop()}},c)})),v.apply(this,arguments)}function T(c,s,j){return m.apply(this,arguments)}function m(){return m=Object(g.a)(r.a.mark(function c(s,j,u){var t;return r.a.wrap(function(_){for(;;)switch(_.prev=_.next){case 0:return t=new FormData,t.append("file[]",s),t.append("target",j),_.abrupt("return",Object(h.f)("/api/admin/file/upload",Object(d.a)({method:"POST",data:t},u||{})));case 4:case"end":return _.stop()}},c)})),m.apply(this,arguments)}var O=function(s){var j=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1e3;return"".concat("https://api-stage.escolalms.com","/api/images/img?path=").concat(s,"&w=").concat(j)};function M(c,s){return P.apply(this,arguments)}function P(){return P=Object(g.a)(r.a.mark(function c(s,j){return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",Object(h.f)("/api/admin/file/delete",Object(d.a)({method:"DELETE",data:{url:s}},j||{})));case 1:case"end":return t.stop()}},c)})),P.apply(this,arguments)}},"DBJ/":function(K,o,e){"use strict";var d=e("y8nQ"),g=e("Vl3Y"),C=e("etVw"),r=e("q1tI"),h=e.n(r),D=e("9kvl"),p=function(m){var O=m.condition,M=m.children,P=m.wrap;return O?h.a.cloneElement(P(M)):M},b=e("nKUr"),v=function(O){var M=O.onChange,P=O.url,c=O.name,s=O.extra,j=O.accept,u=O.data,t=O.wrapInForm,A=t===void 0?!0:t,_=Object(D.i)();return u&&u[c]&&delete u[c],Object(b.jsx)(p,{condition:A,wrap:function(U){return Object(b.jsx)(g.a,{children:U})},children:Object(b.jsx)(C.a,{title:Object(b.jsx)(D.a,{id:"upload_click_here"}),placeholder:_.formatMessage({id:"upload_click_here"}),onChange:M,label:Object(b.jsx)(D.a,{id:"upload"}),max:2,fieldProps:{data:u,accept:j,name:c,headers:{Authorization:"Bearer ".concat(localStorage.getItem("TOKEN"))}},action:"".concat("https://api-stage.escolalms.com").concat(P),extra:s})})},T=o.a=v},JGo8:function(K,o,e){},Jfn2:function(K,o,e){"use strict";var d=e("k1fw"),g=e("XCrF"),C=e("1GRj"),r=e("PpiC"),h=e("q1tI"),D=e.n(h),p=e("nKUr"),b=e.n(p),v=function(m){var O=m.path,M=m.size,P=m.srcSizes,c=m.alt,s=c===void 0?"LMS Image":c,j=Object(r.a)(m,["path","size","srcSizes","alt"]),u="".concat("https://api-stage.escolalms.com","/api/images/img?path=").concat(O,"&w=").concat(P?P[0]:M),t=P&&P.map(function(A){return"".concat("https://api-stage.escolalms.com","/api/images/img?path=").concat(O,"&w=").concat(A," ").concat(A,"w")});return Object(p.jsx)("div",{className:"escolalms-image",children:Object(p.jsx)(C.a,Object(d.a)({src:u,srcSet:t&&t.join(","),alt:s},j))})};o.a=v},VK58:function(K,o,e){"use strict";e.d(o,"k",function(){return D}),e.d(o,"j",function(){return b}),e.d(o,"d",function(){return T}),e.d(o,"g",function(){return O}),e.d(o,"h",function(){return P}),e.d(o,"i",function(){return s}),e.d(o,"a",function(){return u}),e.d(o,"b",function(){return A}),e.d(o,"e",function(){return B}),e.d(o,"c",function(){return S}),e.d(o,"f",function(){return I});var d=e("k1fw"),g=e("9og8"),C=e("WmNS"),r=e.n(C),h=e("9kvl");function D(a,i){return p.apply(this,arguments)}function p(){return p=Object(g.a)(r.a.mark(function a(i,l){return r.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",Object(h.f)("/api/admin/users",Object(d.a)({params:Object(d.a)(Object(d.a)({},i),{},{per_page:i.pageSize,page:i.current}),method:"GET",useCache:!1},l||{})));case 1:case"end":return n.stop()}},a)})),p.apply(this,arguments)}function b(a,i,l){return v.apply(this,arguments)}function v(){return v=Object(g.a)(r.a.mark(function a(i,l,f){return r.a.wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return y.abrupt("return",Object(h.f)("/api/admin/users/".concat(i),Object(d.a)({method:"GET",useCache:f!==void 0?f:!0},l||{})));case 1:case"end":return y.stop()}},a)})),v.apply(this,arguments)}function T(a){return m.apply(this,arguments)}function m(){return m=Object(g.a)(r.a.mark(function a(i){return r.a.wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.abrupt("return",Object(h.f)("/api/profile/me",Object(d.a)({method:"GET",useCache:!1},i||{})));case 1:case"end":return f.stop()}},a)})),m.apply(this,arguments)}function O(a,i){return M.apply(this,arguments)}function M(){return M=Object(g.a)(r.a.mark(function a(i,l){return r.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",Object(h.f)("/api/profile/me",Object(d.a)({data:i,method:"PUT"},l||{})));case 1:case"end":return n.stop()}},a)})),M.apply(this,arguments)}function P(a,i){return c.apply(this,arguments)}function c(){return c=Object(g.a)(r.a.mark(function a(i,l){return r.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",Object(h.f)("/api/profile/password",Object(d.a)({data:i,method:"PUT"},l||{})));case 1:case"end":return n.stop()}},a)})),c.apply(this,arguments)}function s(a,i,l){return j.apply(this,arguments)}function j(){return j=Object(g.a)(r.a.mark(function a(i,l,f){return r.a.wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return y.abrupt("return",Object(h.f)("/api/admin/users/".concat(i),Object(d.a)({data:l,method:"PUT"},f||{})));case 1:case"end":return y.stop()}},a)})),j.apply(this,arguments)}function u(a,i){return t.apply(this,arguments)}function t(){return t=Object(g.a)(r.a.mark(function a(i,l){return r.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",Object(h.f)("/api/admin/users",Object(d.a)({data:i,method:"POST"},l||{})));case 1:case"end":return n.stop()}},a)})),t.apply(this,arguments)}function A(a,i){return _.apply(this,arguments)}function _(){return _=Object(g.a)(r.a.mark(function a(i,l){return r.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",Object(h.f)("/api/admin/users/".concat(i),Object(d.a)({method:"DELETE"},l||{})));case 1:case"end":return n.stop()}},a)})),_.apply(this,arguments)}function B(a,i){return U.apply(this,arguments)}function U(){return U=Object(g.a)(r.a.mark(function a(i,l){return r.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",Object(h.f)("/api/auth/email/resend",Object(d.a)({method:"POST",data:{email:i}},l||{})));case 1:case"end":return n.stop()}},a)})),U.apply(this,arguments)}function S(a,i){return E.apply(this,arguments)}function E(){return E=Object(g.a)(r.a.mark(function a(i,l){return r.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",Object(h.f)("/api/admin/users/".concat(i,"/settings"),Object(d.a)({method:"GET",useCache:!1},l||{})));case 1:case"end":return n.stop()}},a)})),E.apply(this,arguments)}function I(a,i,l,f){return L.apply(this,arguments)}function L(){return L=Object(g.a)(r.a.mark(function a(i,l,f,n){return r.a.wrap(function(R){for(;;)switch(R.prev=R.next){case 0:return R.abrupt("return",Object(h.f)("/api/admin/users/".concat(i,"/settings"),Object(d.a)({method:l,data:{settings:[f]},useCache:!1},n||{})));case 1:case"end":return R.stop()}},a)})),L.apply(this,arguments)}},etVw:function(K,o,e){"use strict";var d=e("EFp3"),g=e("JGo8"),C=e("+L6B"),r=e("MXD1"),h=e("5Dmo"),D=e("8z0m"),p=e("2/Rp"),b=e("wx14"),v=e("q1tI"),T=e.n(v),m=e("z7Xi"),O=e("WFLz"),M=function(s,j){var u=s.fieldProps,t=s.name,A=s.action,_=s.accept,B=s.listType,U=s.title,S=U===void 0?"\u5355\u51FB\u4E0A\u4F20":U,E=s.max,I=s.icon,L=I===void 0?T.a.createElement(m.a,null):I,a=s.value,i=s.buttonProps,l=s.onChange,f=s.disabled,n=s.proFieldProps,y=s.fileList,R=(E===void 0||!a||(a==null?void 0:a.length)<E)&&(n==null?void 0:n.mode)!=="read",G=(B!=null?B:u==null?void 0:u.listType)==="picture-card";return T.a.createElement(D.a,Object(b.a)({action:A,accept:_,ref:j,name:t||"file",listType:B||"picture",fileList:y!=null?y:a},u,{onChange:function($){var F;l==null||l($),u==null||(F=u.onChange)===null||F===void 0||F.call(u,$)}}),R&&(G?T.a.createElement("span",null,L," ",S):T.a.createElement(p.a,Object(b.a)({disabled:f||(u==null?void 0:u.disabled)},i),L,S)))},P=o.a=Object(O.a)(T.a.forwardRef(M),{getValueFromEvent:function(s){return s.fileList}})},hd5d:function(K,o,e){"use strict";var d=e("9og8"),g=e("WmNS"),C=e.n(g),r=e("q1tI"),h=e.n(r),D=e("3Ef1"),p=e.n(D),b=e("BAh9"),v=e("vtG9"),T=e.n(v),m=e("9kvl"),O=e("nKUr"),M=e.n(O),P=function(s){var j=s.value,u=s.onChange,t=s.directory,A=t===void 0?"/wysiwyg":t,_=Object(m.i)();return Object(O.jsx)("div",{className:"form-wysiwyg-markdown",children:Object(O.jsx)(p.a,{uploadImage:function(){var B=Object(d.a)(C.a.mark(function U(S){var E,I;return C.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,Object(b.e)(S,A);case 2:if(E=a.sent,!E.success){a.next=6;break}return I=E.data[0].name.includes("/")?E.data[0].name:"".concat(A).concat(E.data[0].name),a.abrupt("return",Object(b.d)(I,1e3));case 6:throw new Error("Error while uploading");case 7:case"end":return a.stop()}},U)}));return function(U){return B.apply(this,arguments)}}(),defaultValue:j||"",onChange:function(U){return u&&u(U())},placeholder:_.formatMessage({id:"wysiwyg_placeholder"})})})};o.a=P},vtG9:function(K,o,e){}}]);

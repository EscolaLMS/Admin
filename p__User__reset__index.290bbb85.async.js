"use strict";(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[1753],{5966:function(S,f,e){var T=e(97685),i=e(1413),E=e(45987),t=e(21770),d=e(75842),b=e(55241),U=e(97435),B=e(67294),h=e(41550),_=e(85893),p=["fieldProps","proFieldProps"],c=["fieldProps","proFieldProps"],u="text",O=function(o){var n=o.fieldProps,v=o.proFieldProps,a=(0,E.Z)(o,p);return(0,_.jsx)(h.Z,(0,i.Z)({valueType:u,fieldProps:n,filedConfig:{valueType:u},proFieldProps:v},a))},I=function(o){var n=(0,t.Z)(o.open||!1,{value:o.open,onChange:o.onOpenChange}),v=(0,T.Z)(n,2),a=v[0],g=v[1];return(0,_.jsx)(d.Z.Item,{shouldUpdate:!0,noStyle:!0,children:function(P){var M,W=P.getFieldValue(o.name||[]);return(0,_.jsx)(b.Z,(0,i.Z)((0,i.Z)({getPopupContainer:function(s){return s&&s.parentNode?s.parentNode:s},onOpenChange:function(s){return g(s)},content:(0,_.jsxs)("div",{style:{padding:"4px 0"},children:[(M=o.statusRender)===null||M===void 0?void 0:M.call(o,W),o.strengthText?(0,_.jsx)("div",{style:{marginTop:10},children:(0,_.jsx)("span",{children:o.strengthText})}):null]}),overlayStyle:{width:240},placement:"rightTop"},o.popoverProps),{},{open:a,children:o.children}))}})},r=function(o){var n=o.fieldProps,v=o.proFieldProps,a=(0,E.Z)(o,c),g=(0,B.useState)(!1),j=(0,T.Z)(g,2),P=j[0],M=j[1];return n!=null&&n.statusRender&&a.name?(0,_.jsx)(I,{name:a.name,statusRender:n==null?void 0:n.statusRender,popoverProps:n==null?void 0:n.popoverProps,strengthText:n==null?void 0:n.strengthText,open:P,onOpenChange:M,children:(0,_.jsx)("div",{children:(0,_.jsx)(h.Z,(0,i.Z)({valueType:"password",fieldProps:(0,i.Z)((0,i.Z)({},(0,U.Z)(n,["statusRender","popoverProps","strengthText"])),{},{onBlur:function(C){var s;n==null||(s=n.onBlur)===null||s===void 0||s.call(n,C),M(!1)},onClick:function(C){var s;n==null||(s=n.onClick)===null||s===void 0||s.call(n,C),M(!0)}}),proFieldProps:v,filedConfig:{valueType:u}},a))})}):(0,_.jsx)(h.Z,(0,i.Z)({valueType:"password",fieldProps:n,proFieldProps:v,filedConfig:{valueType:u}},a))},D=O;D.Password=r,D.displayName="ProFormComponent",f.Z=D},32755:function(S,f,e){var T=e(74792),i=e(67294),E=e(80854),t=e(39472),d=e(85893),b=function(B){var h,_,p,c,u,O=B.children,I=(0,E.useModel)("@@initialState"),r=I.initialState,D=(h=r==null||(_=r.publicConfig)===null||_===void 0||(_=_.global)===null||_===void 0?void 0:_.showLoginBackgroundImage)!==null&&h!==void 0?h:!0,m=r==null||(p=r.publicConfig)===null||p===void 0||(p=p.global)===null||p===void 0?void 0:p.loginHeaderFontColor,o=r==null||(c=r.publicConfig)===null||c===void 0||(c=c.global)===null||c===void 0?void 0:c.loginHeaderBackgroundColor,n=r==null||(u=r.publicConfig)===null||u===void 0||(u=u.global)===null||u===void 0?void 0:u.loginFormBackgroundColor,v=(0,i.useMemo)(function(){var a,g=r==null||(a=r.publicConfig)===null||a===void 0||(a=a.global)===null||a===void 0?void 0:a.logoLogin;return g?g.includes("http")?g:"".concat(window.REACT_APP_API_URL||"https://api-stage.escolalms.com","/storage").concat(g):""},[r==null?void 0:r.publicConfig]);return(0,d.jsxs)("div",{className:"".concat(t.Z.container," ").concat(D?t.Z["background-image"]:""),style:{backgroundColor:n},children:[(0,d.jsxs)("header",{className:t.Z.header,style:{backgroundColor:o,color:m},children:[(0,d.jsx)("div",{className:t.Z.lang,children:E.SelectLang&&(0,d.jsx)(E.SelectLang,{})}),(0,d.jsx)("div",{className:t.Z["logo-wrapper"],children:(0,d.jsx)(E.Link,{to:"/",children:(0,d.jsx)("img",{alt:"logo",className:v?t.Z["custom-logo"]:t.Z.logo,src:v||"/logo.svg"})})})]}),(0,d.jsx)("main",{className:t.Z.main,children:O}),(0,d.jsx)(T.Z,{})]})};f.Z=b},24686:function(S,f,e){e.r(f);var T=e(15009),i=e.n(T),E=e(97857),t=e.n(E),d=e(99289),b=e.n(d),U=e(5574),B=e.n(U),h=e(94149),_=e(952),p=e(5966),c=e(2453),u=e(67294),O=e(80854),I=e(40291),r=e(32755),D=e(39472),m=e(85893),o=function(){var v=(0,u.useState)(!1),a=B()(v,2),g=a[0],j=a[1],P=O.history.location,M=P&&new URLSearchParams(P.search).has("token")&&new URLSearchParams(P.search).get("token"),W=P&&new URLSearchParams(P.search).has("email")&&new URLSearchParams(P.search).get("email"),C=(0,O.useIntl)(),s=function(){var Z=b()(i()().mark(function L(R){var x,A;return i()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return j(!0),l.prev=1,l.next=4,(0,I.mc)(t()({},R));case 4:if(x=l.sent,!x.success){l.next=9;break}return c.ZP.success(x.message),O.history.push("/user/login"),l.abrupt("return");case 9:l.next=14;break;case 11:l.prev=11,l.t0=l.catch(1),c.ZP.error((l.t0===null||l.t0===void 0||(A=l.t0.data)===null||A===void 0?void 0:A.message)||"Error");case 14:return l.prev=14,j(!1),l.finish(14);case 17:case"end":return l.stop()}},L,null,[[1,11,14,17]])}));return function(R){return Z.apply(this,arguments)}}();return(0,m.jsx)(r.Z,{children:(0,m.jsx)(_.ZP,{initialValues:{autoLogin:!0},submitter:{searchConfig:{submitText:C.formatMessage({id:"reset_password",defaultMessage:"reset_password"})},render:function(L,R){return R.pop()},submitButtonProps:{loading:g,size:"large",style:{width:"100%"}}},onFinish:function(){var Z=b()(i()().mark(function L(R){return i()().wrap(function(A){for(;;)switch(A.prev=A.next){case 0:s(t()(t()({},R),{},{token:M,email:W}));case 1:case"end":return A.stop()}},L)}));return function(L){return Z.apply(this,arguments)}}(),children:(0,m.jsx)(m.Fragment,{children:(0,m.jsx)(p.Z.Password,{name:"password",fieldProps:{size:"large",prefix:(0,m.jsx)(h.Z,{className:D.Z.prefixIcon})},placeholder:C.formatMessage({id:"pages.login.password.placeholder",defaultMessage:" ant.design"}),rules:[{required:!0,message:(0,m.jsx)(O.FormattedMessage,{id:"pages.login.password.required",defaultMessage:"required"})}]})})})})};f.default=o},39472:function(S,f){f.Z={container:"container___wpV8W",lang:"lang___jOFBo","background-image":"background-image___bLMNk","logo-wrapper":"logo-wrapper___f3AYZ",header:"header___nCVSy","custom-logo":"custom-logo___eqmYW",logo:"logo___hdWsj",title:"title___irxbb",desc:"desc___lcVEF",main:"main___EJpGo",icon:"icon___Lki4L",other:"other___YPaq5",register:"register____Sz4v",prefixIcon:"prefixIcon___Zmk5Q"}}}]);

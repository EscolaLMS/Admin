(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{Z1IU:function($,C,e){"use strict";e.r(C);var N=e("miYZ"),L=e("tsqr"),r=e("qLMh"),v=e("k1fw"),n=e("9og8"),j=e("tJVT"),W=e("fOrg"),u=e("+KLJ"),b=e("q1tI"),w=e.n(b),d=e("9kvl"),S=e("VMEa"),P=e("Qurx"),I=e("tneF"),A=e("cJ7L"),M=e("FY4R"),_=e("o36P"),g=e("YRYj"),E=e("+up7"),f=e("PIu2"),p=e("twdk"),R=e("rZsG"),h=e.n(R),s=e("nZnz"),t=e("nKUr"),X=e.n(t),Z=function(B){var D=B.content;return Object(t.jsx)(u.a,{style:{marginBottom:24},message:D,type:"error",showIcon:!0})},J=function(){var B=Object(b.useState)(!1),D=Object(j.a)(B,2),U=D[0],V=D[1],re=Object(b.useState)(),q=Object(j.a)(re,2),ee=q[0],ne=q[1],ae=Object(d.m)("@@initialState"),x=ae.initialState,oe=ae.setInitialState,ie=Object(b.useState)(!1),te=Object(j.a)(ie,2),k=te[0],se=te[1],y=Object(d.l)(),le=function(){var O=Object(n.a)(Object(r.a)().mark(function o(){var l,c,i,F,a,T,K,H,Y;return Object(r.a)().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.next=2,x==null||(l=x.fetchUserInfo)===null||l===void 0?void 0:l.call(x);case 2:return c=m.sent,m.next=5,Object(E.g)({per_page:-1});case 5:return i=m.sent,m.next=8,Object(g.a)();case 8:return F=m.sent,m.next=11,Object(p.e)({per_page:1e4,page:-1,current:-1,group:"Admin"});case 11:if(a=m.sent,a.success){T={},a.data.forEach(function(Q){Object.keys(Q.text).forEach(function(z){T[z]||(T[z]={}),T[z][Q.key]=Q.text[z]})});for(K in T)Object(d.c)(K,T[K],{antd:((H=d.g[K])===null||H===void 0?void 0:H.antd)||"",momentLocale:((Y=d.g[K])===null||Y===void 0?void 0:Y.momentLocale)||K})}c&&oe(Object(v.a)(Object(v.a)({},x),{},{currentUser:c,config:i.success?i.data:[],packages:F.success?F.data:{},translations:a.success?a.data:[]}));case 14:case"end":return m.stop()}},o)}));return function(){return O.apply(this,arguments)}}(),_e=function(){var O=Object(n.a)(Object(r.a)().mark(function o(l){var c,i;return Object(r.a)().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,Object(_.b)(Object(v.a)({},l));case 3:if(c=a.sent,!c.success){a.next=12;break}return localStorage.setItem("TOKEN",c.data.token),dispatchEvent(new Event("token_change")),Object(f.a)(),a.next=10,le();case 10:return L.b.success(c.message),a.abrupt("return");case 12:ne(c),a.next=18;break;case 15:a.prev=15,a.t0=a.catch(0),L.b.error((a.t0===null||a.t0===void 0||(i=a.t0.data)===null||i===void 0?void 0:i.message)||"Error");case 18:return a.prev=18,V(!1),a.finish(18);case 21:case"end":return a.stop()}},o,null,[[0,15,18,21]])}));return function(l){return O.apply(this,arguments)}}(),ce=function(){var O=Object(n.a)(Object(r.a)().mark(function o(l){var c,i;return Object(r.a)().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,Object(_.a)(Object(v.a)({},l));case 3:if(c=a.sent,!c.success){a.next=7;break}return L.b.success(c.message),a.abrupt("return");case 7:a.next=12;break;case 9:a.prev=9,a.t0=a.catch(0),L.b.error((a.t0===null||a.t0===void 0||(i=a.t0.data)===null||i===void 0?void 0:i.message)||"Error");case 12:return a.prev=12,V(!1),a.finish(12);case 15:case"end":return a.stop()}},o,null,[[0,9,12,15]])}));return function(l){return O.apply(this,arguments)}}(),ue=function(){var O=Object(n.a)(Object(r.a)().mark(function o(l){return Object(r.a)().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:V(!0),"password"in l?_e(l):ce(Object(v.a)(Object(v.a)({},l),{},{return_url:"".concat(window.location.origin,"/#/user/reset-password")}));case 2:case"end":return i.stop()}},o)}));return function(l){return O.apply(this,arguments)}}();return Object(t.jsx)(s.a,{children:Object(t.jsxs)(S.a,{initialValues:{autoLogin:!0},submitter:{searchConfig:{submitText:k?y.formatMessage({id:"send",defaultMessage:"send"}):y.formatMessage({id:"pages.login.submit",defaultMessage:"submit"})},render:function(o,l){return l.pop()},submitButtonProps:{loading:U,size:"large",style:{width:"100%"}}},onFinish:function(){var O=Object(n.a)(Object(r.a)().mark(function o(l){return Object(r.a)().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:ue(l);case 1:case"end":return i.stop()}},o)}));return function(o){return O.apply(this,arguments)}}(),children:[ee&&!ee.success&&Object(t.jsx)(Z,{content:y.formatMessage({id:"pages.login.accountLogin.errorMessage",defaultMessage:"\uFF08admin/ant.design)"})}),Object(t.jsxs)(t.Fragment,{children:[Object(t.jsx)(P.a,{name:"email",fieldProps:{size:"large",prefix:Object(t.jsx)(A.a,{className:h.a.prefixIcon})},placeholder:y.formatMessage({id:"email_field",defaultMessage:"Please enter your email"}),rules:[{required:!0,message:Object(t.jsx)(d.a,{id:"pages.login.username.required",defaultMessage:"required!"})}]}),!k&&Object(t.jsx)(P.a.Password,{name:"password",fieldProps:{size:"large",prefix:Object(t.jsx)(M.a,{className:h.a.prefixIcon})},placeholder:y.formatMessage({id:"password_field",defaultMessage:"Please enter your password"}),rules:[{required:!0,message:Object(t.jsx)(d.a,{id:"pages.login.password.required",defaultMessage:"required"})}]})]}),Object(t.jsxs)("div",{style:{marginBottom:24},children:[k?Object(t.jsx)("a",{onClick:function(o){o.preventDefault(),se(!1)},children:Object(t.jsx)(d.a,{id:"back",defaultMessage:"back"})}):Object(t.jsx)(I.a,{noStyle:!0,name:"remember_me",children:Object(t.jsx)(d.a,{id:"pages.login.rememberMe",defaultMessage:"rememberMe"})}),!k&&Object(t.jsx)("a",{style:{float:"right"},onClick:function(o){o.preventDefault(),se(!0)},children:Object(t.jsx)(d.a,{id:"pages.login.forgotPassword",defaultMessage:"forgotPassword"})})]})]})})};C.default=J},nZnz:function($,C,e){"use strict";var N=e("q1tI"),L=e.n(N),r=e("CwrG"),v=e("rZsG"),n=e.n(v),j=e("9kvl"),W=e("55Ip"),u=e("nKUr"),b=e.n(u),w=function(S){var P,I,A,M,_,g,E,f,p,R=S.children,h=Object(j.m)("@@initialState"),s=h.initialState,t=(P=s==null||(I=s.publicConfig)===null||I===void 0||(A=I.global)===null||A===void 0?void 0:A.showLoginBackgroundImage)!==null&&P!==void 0?P:!0,X=s==null||(M=s.publicConfig)===null||M===void 0||(_=M.global)===null||_===void 0?void 0:_.loginHeaderFontColor,Z=s==null||(g=s.publicConfig)===null||g===void 0||(E=g.global)===null||E===void 0?void 0:E.loginHeaderBackgroundColor,J=s==null||(f=s.publicConfig)===null||f===void 0||(p=f.global)===null||p===void 0?void 0:p.loginFormBackgroundColor,G=Object(N.useMemo)(function(){var B,D,U=s==null||(B=s.publicConfig)===null||B===void 0||(D=B.global)===null||D===void 0?void 0:D.logoLogin;return U?U.includes("http")?U:"".concat(window.REACT_APP_API_URL||"https://api-stage.escolalms.com","/storage").concat(U):""},[s==null?void 0:s.publicConfig]);return Object(u.jsxs)("div",{className:"".concat(n.a.container," ").concat(t?n.a["background-image"]:""),style:{backgroundColor:J},children:[Object(u.jsxs)("header",{className:n.a.header,style:{backgroundColor:Z,color:X},children:[Object(u.jsx)("div",{className:n.a.lang,children:j.b&&Object(u.jsx)(j.b,{})}),Object(u.jsx)("div",{className:n.a["logo-wrapper"],children:Object(u.jsx)(W.a,{to:"/",children:Object(u.jsx)("img",{alt:"logo",className:G?n.a["custom-logo"]:n.a.logo,src:G||"/logo.svg"})})})]}),Object(u.jsx)("main",{className:n.a.main,children:R}),Object(u.jsx)(r.a,{})]})};C.a=w},rZsG:function($,C,e){$.exports={container:"container___2MqLM",lang:"lang___GQeBj","background-image":"background-image___3WSx0","logo-wrapper":"logo-wrapper___V8scu",header:"header___2LHxh","custom-logo":"custom-logo___HBLG3",logo:"logo___3MAcQ",title:"title___3Wr7O",desc:"desc___22Mec",main:"main___1ht25",icon:"icon___ki6v1",other:"other___3NR7b",register:"register___1-tB1",prefixIcon:"prefixIcon___2LycM"}},tneF:function($,C,e){"use strict";var N=e("sRBo"),L=e("kaz8"),r=e("VTBJ"),v=e("Ff2n"),n=e("nKUr"),j=e.n(n),W=e("uX+g"),u=e("q1tI"),b=e.n(u),w=e("WFLz"),d=e("adzw"),S=["options","fieldProps","proFieldProps","valueEnum"],P=b.a.forwardRef(function(_,g){var E=_.options,f=_.fieldProps,p=_.proFieldProps,R=_.valueEnum,h=Object(v.a)(_,S);return Object(n.jsx)(d.a,Object(r.a)({ref:g,valueType:"checkbox",valueEnum:Object(W.a)(R,void 0),fieldProps:Object(r.a)({options:E},f),lightProps:Object(r.a)({labelFormatter:function(){return Object(n.jsx)(d.a,Object(r.a)({ref:g,valueType:"checkbox",mode:"read",valueEnum:Object(W.a)(R,void 0),filedConfig:{customLightMode:!0},fieldProps:Object(r.a)({options:E},f),proFieldProps:p},h))}},h.lightProps),proFieldProps:p},h))}),I=b.a.forwardRef(function(_,g){var E=_.fieldProps,f=_.children;return Object(n.jsx)(L.a,Object(r.a)(Object(r.a)({ref:g},E),{},{children:f}))}),A=Object(w.a)(I,{valuePropName:"checked"}),M=A;M.Group=P,C.a=M}}]);

//# sourceMappingURL=p__User__login.dfa636c0.async.js.map
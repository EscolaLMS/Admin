(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{"G/Ub":function(T,f,e){"use strict";e.d(f,"d",function(){return A}),e.d(f,"a",function(){return H}),e.d(f,"b",function(){return re}),e.d(f,"c",function(){return Q}),e.d(f,"e",function(){return K});var b=e("k1fw"),h=e("9og8"),a=e("WmNS"),y=e.n(a),p=e("9kvl");function A(u){return o.apply(this,arguments)}function o(){return o=Object(h.a)(y.a.mark(function u(i){return y.a.wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.abrupt("return",Object(p.f)("/api/admin/roles",Object(b.a)({method:"GET",useCache:!1},i||{})));case 1:case"end":return m.stop()}},u)})),o.apply(this,arguments)}function H(u,i){return B.apply(this,arguments)}function B(){return B=Object(h.a)(y.a.mark(function u(i,C){return y.a.wrap(function(v){for(;;)switch(v.prev=v.next){case 0:return v.abrupt("return",Object(p.f)("/api/admin/roles",Object(b.a)({method:"POST",headers:{"Content-Type":"application/json"},data:i},C||{})));case 1:case"end":return v.stop()}},u)})),B.apply(this,arguments)}function re(u,i){return D.apply(this,arguments)}function D(){return D=Object(h.a)(y.a.mark(function u(i,C){return y.a.wrap(function(v){for(;;)switch(v.prev=v.next){case 0:return v.abrupt("return",Object(p.f)("/api/admin/roles/".concat(i),Object(b.a)({method:"DELETE",headers:{"Content-Type":"application/json"}},C||{})));case 1:case"end":return v.stop()}},u)})),D.apply(this,arguments)}function Q(u,i){return z.apply(this,arguments)}function z(){return z=Object(h.a)(y.a.mark(function u(i,C){return y.a.wrap(function(v){for(;;)switch(v.prev=v.next){case 0:return v.abrupt("return",Object(p.f)("/api/admin/roles/".concat(i),Object(b.a)({method:"GET",useCache:!1},C||{})));case 1:case"end":return v.stop()}},u)})),z.apply(this,arguments)}function K(u,i,C){return U.apply(this,arguments)}function U(){return U=Object(h.a)(y.a.mark(function u(i,C,m){return y.a.wrap(function(L){for(;;)switch(L.prev=L.next){case 0:return L.abrupt("return",Object(p.f)("/api/admin/roles/".concat(i),Object(b.a)({method:"PATCH",headers:{"Content-Type":"application/json"},data:C},m||{})));case 1:case"end":return L.stop()}},u)})),U.apply(this,arguments)}},O867:function(T,f,e){},Rg7m:function(T,f,e){"use strict";e.r(f);var b=e("k1fw"),h=e("/zsF"),a=e("PArb"),y=e("sRBo"),p=e("kaz8"),A=e("T2oS"),o=e("W9HT"),H=e("miYZ"),B=e("tsqr"),re=e("oBTY"),D=e("9og8"),Q=e("y8nQ"),z=e("Vl3Y"),K=e("tJVT"),U=e("WmNS"),u=e.n(U),i=e("q1tI"),C=e.n(i),m=e("VMEa"),v=e("nhC9"),L=e("G/Ub"),N=e("tMyG"),Te=e("Ty5D"),P=e("9kvl"),Ae=e("O867"),Be=e.n(Ae),j=e("nKUr"),Ze=e.n(j);f.default=function(){var me=Object(Te.h)(),I=me.name,Re=Object(i.useState)([]),le=Object(K.a)(Re,2),R=le[0],ve=le[1],X=Object(i.useState)([]),_e=Object(K.a)(X,2),oe=_e[0],fe=_e[1],Ee=z.a.useForm(),Le=Object(K.a)(Ee,1),be=Le[0],se=Object(i.useCallback)(Object(D.a)(u.a.mark(function d(){var F;return u.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(L.c)(I);case 2:F=n.sent,F.success&&ve(F.data);case 4:case"end":return n.stop()}},d)})),[I]);Object(i.useEffect)(function(){se()},[I,se]);var Oe=Object(i.useMemo)(function(){return{onFinish:function(){var d=Object(D.a)(u.a.mark(function t(){var n,r;return u.a.wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.prev=0,c.next=3,Object(L.e)(I,{permissions:Object(re.a)(oe)});case 3:return n=c.sent,c.next=6,n;case 6:r=c.sent,r.success&&B.default.success(r.message),c.next=13;break;case 10:c.prev=10,c.t0=c.catch(0),B.default.error(c.t0.data.message);case 13:case"end":return c.stop()}},t,null,[[0,10]])}));function F(){return d.apply(this,arguments)}return F}(),initialValues:R}},[R,I,oe]),W=Object(i.useCallback)(function(d){fe(d)},[I]);return R?Object(j.jsx)(N.a,{title:Object(j.jsx)(P.a,{id:"permissions"}),children:Object(j.jsx)(v.a,{children:Object(j.jsxs)(m.a,Object(b.a)(Object(b.a)({},Oe),{},{form:be,children:[Object(j.jsx)(m.a.Group,{children:!!R.length&&Object(j.jsx)(p.a.Group,{name:"checkbox",defaultValue:R.filter(function(d){return d==null?void 0:d.assigned}).map(function(d){return d==null?void 0:d.name}),onChange:W,options:R&&R.map(function(d){return{value:d==null?void 0:d.name,label:d==null?void 0:d.name}})})}),Object(j.jsx)(a.a,{})]}))})}):Object(j.jsx)(o.a,{})}},S76h:function(T,f,e){},TLLU:function(T,f,e){"use strict";var b=e("5OYt");function h(){return Object(b.a)()}f.a={useBreakpoint:h}},VzZb:function(T,f,e){},"aK+R":function(T,f,e){},df8c:function(T,f,e){},nhC9:function(T,f,e){"use strict";var b=e("wx14"),h=e("q1tI"),a=e.n(h),y=e("Znn+"),p=e("ZTPi"),A=e("VTBJ"),o=e("rePB"),H=e("U8pU"),B=e("ODXe"),re=e("GNNt"),D=e("wEI+"),Q=e("Ff2n"),z=e("1GLa"),K=e("TLLU"),U=e("UESt"),u=e("6cGi"),i=e("YSkC"),C=e("TSYQ"),m=e.n(C),v=e("BGR+"),L=e("14J3"),N=e("BMrR"),Te=e("jCWc"),P=e("kPKH"),Ae=e("aK+R"),Be=function(n){var r=n.style,s=n.prefix;return a.a.createElement("div",{className:"".concat(s,"-loading-content"),style:r},a.a.createElement(N.a,{gutter:8},a.a.createElement(P.a,{span:22},a.a.createElement("div",{className:"".concat(s,"-loading-block")}))),a.a.createElement(N.a,{gutter:8},a.a.createElement(P.a,{span:8},a.a.createElement("div",{className:"".concat(s,"-loading-block")})),a.a.createElement(P.a,{span:15},a.a.createElement("div",{className:"".concat(s,"-loading-block")}))),a.a.createElement(N.a,{gutter:8},a.a.createElement(P.a,{span:6},a.a.createElement("div",{className:"".concat(s,"-loading-block")})),a.a.createElement(P.a,{span:18},a.a.createElement("div",{className:"".concat(s,"-loading-block")}))),a.a.createElement(N.a,{gutter:8},a.a.createElement(P.a,{span:13},a.a.createElement("div",{className:"".concat(s,"-loading-block")})),a.a.createElement(P.a,{span:9},a.a.createElement("div",{className:"".concat(s,"-loading-block")}))),a.a.createElement(N.a,{gutter:8},a.a.createElement(P.a,{span:4},a.a.createElement("div",{className:"".concat(s,"-loading-block")})),a.a.createElement(P.a,{span:3},a.a.createElement("div",{className:"".concat(s,"-loading-block")})),a.a.createElement(P.a,{span:16},a.a.createElement("div",{className:"".concat(s,"-loading-block")}))))},j=Be,Ze=e("S76h"),me=function(n){var r=n.actions,s=n.prefixCls;return Array.isArray(r)&&(r==null?void 0:r.length)?a.a.createElement("ul",{className:"".concat(s,"-actions")},r.map(function(c,G){return a.a.createElement("li",{style:{width:"".concat(100/r.length,"%")},key:"action-".concat(G)},a.a.createElement("span",null,c))})):r?a.a.createElement("ul",{className:"".concat(s,"-actions")},r):null},I=me,Re=e("df8c"),le=["className","style","bodyStyle","headStyle","title","subTitle","extra","tip","wrap","layout","loading","gutter","tooltip","split","headerBordered","bordered","children","size","actions","ghost","hoverable","direction","collapsed","collapsible","defaultCollapsed","onCollapse","checked","onChecked","tabs","type"],R=K.a.useBreakpoint,ve=a.a.forwardRef(function(t,n){var r,s,c,G=t.className,V=t.style,Y=t.bodyStyle,x=Y===void 0?{}:Y,J=t.headStyle,he=J===void 0?{}:J,ce=t.title,ye=t.subTitle,w=t.extra,Ce=t.tip,ie=t.wrap,ke=ie===void 0?!1:ie,He=t.layout,q=t.loading,Ie=t.gutter,Qe=Ie===void 0?0:Ie,Xe=t.tooltip,ee=t.split,xe=t.headerBordered,we=xe===void 0?!1:xe,Se=t.bordered,qe=Se===void 0?!1:Se,Ke=t.children,Ue=t.size,ea=t.actions,Ne=t.ghost,aa=Ne===void 0?!1:Ne,We=t.hoverable,ta=We===void 0?!1:We,na=t.direction,Ge=t.collapsed,$e=t.collapsible,ra=$e===void 0?!1:$e,ze=t.defaultCollapsed,la=ze===void 0?!1:ze,oa=t.onCollapse,sa=t.checked,Pe=t.onChecked,je=t.tabs,ge=t.type,ae=Object(Q.a)(t,le),ca=Object(h.useContext)(D.default.ConfigContext),ia=ca.getPrefixCls,Fe=R(),da=Object(u.a)(la,{value:Ge,onChange:oa}),Ve=Object(B.a)(da,2),pe=Ve[0],ua=Ve[1],de=["xxl","xl","lg","md","sm","xs"],ma=function(E){var _=[0,0],g=Array.isArray(E)?E:[E,0];return g.forEach(function(M,$){if(Object(H.a)(M)==="object")for(var S=0;S<de.length;S+=1){var ne=de[S];if(Fe[ne]&&M[ne]!==void 0){_[$]=M[ne];break}}else _[$]=M||0}),_},te=function(E,_){return E?_:{}},va=function(E){var _=E;if(Object(H.a)(E)==="object")for(var g=0;g<de.length;g+=1){var M=de[g];if(Fe[M]&&E[M]!==void 0){_=E[M];break}}var $=te(typeof _=="string"&&/\d%|\dpx/i.test(_),{width:_,flexShrink:0});return{span:_,colSpanStyle:$}},l=ia("pro-card"),_a=ma(Qe),Ye=Object(B.a)(_a,2),Z=Ye[0],k=Ye[1],De=!1,Me=a.a.Children.toArray(Ke),fa=Me.map(function(O,E){var _;if(O==null||(_=O.type)===null||_===void 0?void 0:_.isProCard){var g;De=!0;var M=O.props.colSpan,$=va(M),S=$.span,ne=$.colSpanStyle,ha=m()(["".concat(l,"-col")],(g={},Object(o.a)(g,"".concat(l,"-split-vertical"),ee==="vertical"&&E!==Me.length-1),Object(o.a)(g,"".concat(l,"-split-horizontal"),ee==="horizontal"&&E!==Me.length-1),Object(o.a)(g,"".concat(l,"-col-").concat(S),typeof S=="number"&&S>=0&&S<=24),g));return a.a.createElement("div",{style:Object(A.a)(Object(A.a)(Object(A.a)({},ne),te(Z>0,{paddingRight:Z/2,paddingLeft:Z/2})),te(k>0,{paddingTop:k/2,paddingBottom:k/2})),key:"pro-card-col-".concat((O==null?void 0:O.key)||E),className:ha},a.a.cloneElement(O))}return O}),Ea=m()("".concat(l),G,(r={},Object(o.a)(r,"".concat(l,"-border"),qe),Object(o.a)(r,"".concat(l,"-contain-card"),De),Object(o.a)(r,"".concat(l,"-loading"),q),Object(o.a)(r,"".concat(l,"-split"),ee==="vertical"||ee==="horizontal"),Object(o.a)(r,"".concat(l,"-ghost"),aa),Object(o.a)(r,"".concat(l,"-hoverable"),ta),Object(o.a)(r,"".concat(l,"-size-").concat(Ue),Ue),Object(o.a)(r,"".concat(l,"-type-").concat(ge),ge),Object(o.a)(r,"".concat(l,"-collapse"),pe),Object(o.a)(r,"".concat(l,"-checked"),sa),r)),ba=m()("".concat(l,"-body"),(s={},Object(o.a)(s,"".concat(l,"-body-center"),He==="center"),Object(o.a)(s,"".concat(l,"-body-direction-column"),ee==="horizontal"||na==="column"),Object(o.a)(s,"".concat(l,"-body-wrap"),ke&&De),s)),Oa=Object(A.a)(Object(A.a)(Object(A.a)({},te(Z>0,{marginRight:-Z/2,marginLeft:-Z/2})),te(k>0,{marginTop:-k/2,marginBottom:-k/2})),x),Je=a.a.isValidElement(q)?q:a.a.createElement(j,{prefix:l,style:x.padding===0||x.padding==="0px"?{padding:24}:void 0}),ue=ra&&Ge===void 0&&a.a.createElement(U.a,{rotate:pe?void 0:90,className:"".concat(l,"-collapsible-icon")});return a.a.createElement("div",Object(b.a)({className:Ea,style:V,ref:n,onClick:function(E){var _;Pe==null||Pe(E),ae==null||(_=ae.onClick)===null||_===void 0||_.call(ae,E)}},Object(v.a)(ae,["prefixCls","colSpan"])),(ce||w||ue)&&a.a.createElement("div",{className:m()("".concat(l,"-header"),(c={},Object(o.a)(c,"".concat(l,"-header-border"),we||ge==="inner"),Object(o.a)(c,"".concat(l,"-header-collapsible"),ue),c)),style:he,onClick:function(){ue&&ua(!pe)}},a.a.createElement("div",{className:"".concat(l,"-title")},ue,a.a.createElement(i.a,{label:ce,tooltip:Xe||Ce,subTitle:ye})),w&&a.a.createElement("div",{className:"".concat(l,"-extra")},w)),je?a.a.createElement("div",{className:"".concat(l,"-tabs")},a.a.createElement(p.a,Object(b.a)({onChange:je.onChange},je),q?Je:Ke)):a.a.createElement("div",{className:ba,style:Oa},q?Je:fa),a.a.createElement(I,{actions:ea,prefixCls:l}))}),X=ve,_e=e("VzZb"),oe=["key","tab","tabKey","disabled","destroyInactiveTabPane","children","className","style","cardProps"],fe=function(n){var r=n.key,s=n.tab,c=n.tabKey,G=n.disabled,V=n.destroyInactiveTabPane,Y=n.children,x=n.className,J=n.style,he=n.cardProps,ce=Object(Q.a)(n,oe),ye=Object(h.useContext)(D.default.ConfigContext),w=ye.getPrefixCls,Ce=w("pro-card-tabpane"),ie=m()(Ce,x);return a.a.createElement(p.a.TabPane,Object(b.a)({key:r,tabKey:c,tab:s,className:ie,style:J,disabled:G,destroyInactiveTabPane:V},ce),a.a.createElement(X,he,Y))},Ee=fe,Le=e("u1OI"),be=function(n){var r=Object(h.useContext)(D.default.ConfigContext),s=r.getPrefixCls,c=s("pro-card-divider"),G=n.className,V=n.style,Y=V===void 0?{}:V,x=n.type,J=m()(c,G,Object(o.a)({},"".concat(c,"-").concat(x),x));return a.a.createElement("div",{className:J,style:Y})},se=be,Oe=function(n){return a.a.createElement(X,Object(b.a)({bodyStyle:{padding:0}},n))},W=X;W.isProCard=!0,W.Divider=se,W.TabPane=Ee,W.Group=Oe;var d=W,F=f.a=d},u1OI:function(T,f,e){}}]);

(window.webpackJsonp=window.webpackJsonp||[]).push([[35,5],{"9A0E":function(I,v,e){"use strict";e.r(v),e.d(v,"channelType",function(){return Y});var b=e("q1tI"),p=e("Ty5D"),a=e("9kvl"),j=e("tMyG"),y=e("nhC9"),S=e("P2fV"),o=e("NJEC"),ae=e("miYZ"),A=e("tsqr"),me=e("9og8"),D=e("5Dmo"),z=e("3S7+"),te=e("+L6B"),$=e("2/Rp"),R=e("WmNS"),V=e.n(R),K=e("xvlK"),ne=e("G3dp"),C=e("/MfK"),i=e("55Ip"),s=e("sWYD"),m=e("Qiat"),O=e("rWUb"),n=e("mGZj"),t=e("nKUr"),ye=function(Q){var F=Q.templateType,fe=Q.channel,N=Object(b.useRef)(),De=Object(a.i)(),ge=[{title:Object(t.jsx)(a.a,{id:"ID",defaultMessage:"ID"}),dataIndex:"id",hideInSearch:!0},{title:Object(t.jsx)(a.a,{id:"created_at",defaultMessage:"created_at"}),dataIndex:"created_at",hideInSearch:!0,render:function(U,T){return T.created_at&&Object(s.a)(new Date(T.created_at),n.a)}},{title:Object(t.jsx)(a.a,{id:"name",defaultMessage:"name"}),dataIndex:"name",hideInSearch:!0},{title:Object(t.jsx)(a.a,{id:"event",defaultMessage:"event"}),dataIndex:"event",hideInSearch:!0},{title:Object(t.jsx)(a.a,{id:"templates.is_default"}),dataIndex:"default",hideInSearch:!0,render:function(U,T){return T.default&&Object(t.jsx)(a.a,{id:"yes"})}}];return Object(t.jsx)(m.a,{headerTitle:De.formatMessage({id:"templates",defaultMessage:"templates"}),actionRef:N,rowKey:"id",search:!1,toolBarRender:function(){return[Object(t.jsx)(i.a,{to:"/templates/".concat(F,"/new"),children:Object(t.jsxs)($.a,{type:"primary",children:[Object(t.jsx)(K.a,{})," ",Object(t.jsx)(a.a,{id:"new",defaultMessage:"new"})]},"primary")})]},request:function(U){var T=U.pageSize,le=U.current;return Object(O.e)({pageSize:T,current:le}).then(function(L){return L.success?{data:L.data.filter(function(W){return W.channel===fe}),total:L.meta.total,success:!0}:[]})},columns:[].concat(ge,[{hideInSearch:!0,title:Object(t.jsx)(a.a,{id:"pages.searchTable.titleOption",defaultMessage:"option"}),dataIndex:"option",valueType:"option",render:function(U,T){return[Object(t.jsx)(i.a,{to:"/templates/".concat(F,"/").concat(T.id),children:Object(t.jsx)(z.a,{title:Object(t.jsx)(a.a,{id:"edit",defaultMessage:"edit"}),children:Object(t.jsx)($.a,{type:"primary",icon:Object(t.jsx)(ne.a,{})})})},"edit"),Object(t.jsx)(o.a,{title:Object(t.jsx)(a.a,{id:"deleteQuestion",defaultMessage:"Are you sure to delete this record?"}),onConfirm:Object(me.a)(V.a.mark(function le(){var L,W;return V.a.wrap(function(M){for(;;)switch(M.prev=M.next){case 0:return M.next=2,Object(O.b)(T.id);case 2:return L=M.sent,M.next=5,L;case 5:W=M.sent,W.success&&(A.default.success(W.message),N.current&&N.current.reload());case 7:case"end":return M.stop()}},le)})),okText:Object(t.jsx)(a.a,{id:"yes"}),cancelText:Object(t.jsx)(a.a,{id:"no"}),children:Object(t.jsx)(z.a,{title:Object(t.jsx)(a.a,{id:"delete",defaultMessage:"delete"}),children:Object(t.jsx)($.a,{type:"primary",icon:Object(t.jsx)(C.a,{}),danger:!0})})},"delete")]}}])})},ve=ye,Y;(function(re){re.email="EscolaLms\\TemplatesEmail\\Core\\EmailChannel",re.pdf="EscolaLms\\TemplatesPdf\\Core\\PdfChannel"})(Y||(Y={}));var Oe=function(){var Q=Object(p.h)(),F=Q.template;return Object(t.jsx)(j.a,{children:Object(t.jsxs)(y.a,{tabs:{type:"card",activeKey:F,onChange:function(N){return a.d.push("/templates/".concat(N))}},children:[Object(t.jsx)(y.a.TabPane,{tab:Object(t.jsx)(a.a,{id:"email"}),children:Object(t.jsx)(ve,{templateType:"email",channel:Y.email})},"email"),Object(t.jsx)(y.a.TabPane,{tab:Object(t.jsx)(a.a,{id:"PDF"}),children:Object(t.jsx)(ve,{templateType:"pdf",channel:Y.pdf})},"pdf"),Object(t.jsx)(y.a.TabPane,{disabled:!0,tab:Object(t.jsx)("span",{children:Object(t.jsx)(a.a,{id:"Push"})}),children:"Push"},"Push"),Object(t.jsx)(y.a.TabPane,{disabled:!0,tab:Object(t.jsx)("span",{children:Object(t.jsx)(a.a,{id:"SMS"})}),children:"SMS"},"SMS")]})})},Ae=v.default=Oe},S76h:function(I,v,e){},TLLU:function(I,v,e){"use strict";var b=e("5OYt");function p(){return Object(b.a)()}v.a={useBreakpoint:p}},VzZb:function(I,v,e){},"aK+R":function(I,v,e){},df8c:function(I,v,e){},nhC9:function(I,v,e){"use strict";var b=e("wx14"),p=e("q1tI"),a=e.n(p),j=e("Znn+"),y=e("ZTPi"),S=e("VTBJ"),o=e("rePB"),ae=e("U8pU"),A=e("ODXe"),me=e("GNNt"),D=e("wEI+"),z=e("Ff2n"),te=e("1GLa"),$=e("TLLU"),R=e("UESt"),V=e("6cGi"),K=e("YSkC"),ne=e("TSYQ"),C=e.n(ne),i=e("BGR+"),s=e("14J3"),m=e("BMrR"),O=e("jCWc"),n=e("kPKH"),t=e("aK+R"),ye=function(d){var c=d.style,u=d.prefix;return a.a.createElement("div",{className:"".concat(u,"-loading-content"),style:c},a.a.createElement(m.a,{gutter:8},a.a.createElement(n.a,{span:22},a.a.createElement("div",{className:"".concat(u,"-loading-block")}))),a.a.createElement(m.a,{gutter:8},a.a.createElement(n.a,{span:8},a.a.createElement("div",{className:"".concat(u,"-loading-block")})),a.a.createElement(n.a,{span:15},a.a.createElement("div",{className:"".concat(u,"-loading-block")}))),a.a.createElement(m.a,{gutter:8},a.a.createElement(n.a,{span:6},a.a.createElement("div",{className:"".concat(u,"-loading-block")})),a.a.createElement(n.a,{span:18},a.a.createElement("div",{className:"".concat(u,"-loading-block")}))),a.a.createElement(m.a,{gutter:8},a.a.createElement(n.a,{span:13},a.a.createElement("div",{className:"".concat(u,"-loading-block")})),a.a.createElement(n.a,{span:9},a.a.createElement("div",{className:"".concat(u,"-loading-block")}))),a.a.createElement(m.a,{gutter:8},a.a.createElement(n.a,{span:4},a.a.createElement("div",{className:"".concat(u,"-loading-block")})),a.a.createElement(n.a,{span:3},a.a.createElement("div",{className:"".concat(u,"-loading-block")})),a.a.createElement(n.a,{span:16},a.a.createElement("div",{className:"".concat(u,"-loading-block")}))))},ve=ye,Y=e("S76h"),Oe=function(d){var c=d.actions,u=d.prefixCls;return Array.isArray(c)&&(c==null?void 0:c.length)?a.a.createElement("ul",{className:"".concat(u,"-actions")},c.map(function(E,Z){return a.a.createElement("li",{style:{width:"".concat(100/c.length,"%")},key:"action-".concat(Z)},a.a.createElement("span",null,E))})):c?a.a.createElement("ul",{className:"".concat(u,"-actions")},c):null},Ae=Oe,re=e("df8c"),Q=["className","style","bodyStyle","headStyle","title","subTitle","extra","tip","wrap","layout","loading","gutter","tooltip","split","headerBordered","bordered","children","size","actions","ghost","hoverable","direction","collapsed","collapsible","defaultCollapsed","onCollapse","checked","onChecked","tabs","type"],F=$.a.useBreakpoint,fe=a.a.forwardRef(function(r,d){var c,u,E,Z=r.className,k=r.style,w=r.bodyStyle,B=w===void 0?{}:w,q=r.headStyle,Ce=q===void 0?{}:q,be=r.title,Ee=r.subTitle,ce=r.extra,xe=r.tip,je=r.wrap,Fe=je===void 0?!1:je,He=r.layout,se=r.loading,Le=r.gutter,Xe=Le===void 0?0:Le,ke=r.tooltip,oe=r.split,Be=r.headerBordered,we=Be===void 0?!1:Be,Ge=r.bordered,qe=Ge===void 0?!1:Ge,ze=r.children,$e=r.size,_e=r.actions,Re=r.ghost,ea=Re===void 0?!1:Re,Ke=r.hoverable,aa=Ke===void 0?!1:Ke,ta=r.direction,Ue=r.collapsed,We=r.collapsible,na=We===void 0?!1:We,Ze=r.defaultCollapsed,ra=Ze===void 0?!1:Ze,la=r.onCollapse,ca=r.checked,Te=r.onChecked,Pe=r.tabs,Se=r.type,ie=Object(z.a)(r,Q),sa=Object(p.useContext)(D.default.ConfigContext),oa=sa.getPrefixCls,Je=F(),ia=Object(V.a)(ra,{value:Ue,onChange:la}),Ve=Object(A.a)(ia,2),Ne=Ve[0],da=Ve[1],he=["xxl","xl","lg","md","sm","xs"],ua=function(h){var f=[0,0],x=Array.isArray(h)?h:[h,0];return x.forEach(function(P,J){if(Object(ae.a)(P)==="object")for(var G=0;G<he.length;G+=1){var ue=he[G];if(Je[ue]&&P[ue]!==void 0){f[J]=P[ue];break}}else f[J]=P||0}),f},de=function(h,f){return h?f:{}},ma=function(h){var f=h;if(Object(ae.a)(h)==="object")for(var x=0;x<he.length;x+=1){var P=he[x];if(Je[P]&&h[P]!==void 0){f=h[P];break}}var J=de(typeof f=="string"&&/\d%|\dpx/i.test(f),{width:f,flexShrink:0});return{span:f,colSpanStyle:J}},l=oa("pro-card"),va=ua(Xe),Ye=Object(A.a)(va,2),_=Ye[0],ee=Ye[1],Me=!1,Ie=a.a.Children.toArray(ze),fa=Ie.map(function(g,h){var f;if(g==null||(f=g.type)===null||f===void 0?void 0:f.isProCard){var x;Me=!0;var P=g.props.colSpan,J=ma(P),G=J.span,ue=J.colSpanStyle,pa=C()(["".concat(l,"-col")],(x={},Object(o.a)(x,"".concat(l,"-split-vertical"),oe==="vertical"&&h!==Ie.length-1),Object(o.a)(x,"".concat(l,"-split-horizontal"),oe==="horizontal"&&h!==Ie.length-1),Object(o.a)(x,"".concat(l,"-col-").concat(G),typeof G=="number"&&G>=0&&G<=24),x));return a.a.createElement("div",{style:Object(S.a)(Object(S.a)(Object(S.a)({},ue),de(_>0,{paddingRight:_/2,paddingLeft:_/2})),de(ee>0,{paddingTop:ee/2,paddingBottom:ee/2})),key:"pro-card-col-".concat((g==null?void 0:g.key)||h),className:pa},a.a.cloneElement(g))}return g}),ba=C()("".concat(l),Z,(c={},Object(o.a)(c,"".concat(l,"-border"),qe),Object(o.a)(c,"".concat(l,"-contain-card"),Me),Object(o.a)(c,"".concat(l,"-loading"),se),Object(o.a)(c,"".concat(l,"-split"),oe==="vertical"||oe==="horizontal"),Object(o.a)(c,"".concat(l,"-ghost"),ea),Object(o.a)(c,"".concat(l,"-hoverable"),aa),Object(o.a)(c,"".concat(l,"-size-").concat($e),$e),Object(o.a)(c,"".concat(l,"-type-").concat(Se),Se),Object(o.a)(c,"".concat(l,"-collapse"),Ne),Object(o.a)(c,"".concat(l,"-checked"),ca),c)),ja=C()("".concat(l,"-body"),(u={},Object(o.a)(u,"".concat(l,"-body-center"),He==="center"),Object(o.a)(u,"".concat(l,"-body-direction-column"),oe==="horizontal"||ta==="column"),Object(o.a)(u,"".concat(l,"-body-wrap"),Fe&&Me),u)),ha=Object(S.a)(Object(S.a)(Object(S.a)({},de(_>0,{marginRight:-_/2,marginLeft:-_/2})),de(ee>0,{marginTop:-ee/2,marginBottom:-ee/2})),B),Qe=a.a.isValidElement(se)?se:a.a.createElement(ve,{prefix:l,style:B.padding===0||B.padding==="0px"?{padding:24}:void 0}),pe=na&&Ue===void 0&&a.a.createElement(R.a,{rotate:Ne?void 0:90,className:"".concat(l,"-collapsible-icon")});return a.a.createElement("div",Object(b.a)({className:ba,style:k,ref:d,onClick:function(h){var f;Te==null||Te(h),ie==null||(f=ie.onClick)===null||f===void 0||f.call(ie,h)}},Object(i.a)(ie,["prefixCls","colSpan"])),(be||ce||pe)&&a.a.createElement("div",{className:C()("".concat(l,"-header"),(E={},Object(o.a)(E,"".concat(l,"-header-border"),we||Se==="inner"),Object(o.a)(E,"".concat(l,"-header-collapsible"),pe),E)),style:Ce,onClick:function(){pe&&da(!Ne)}},a.a.createElement("div",{className:"".concat(l,"-title")},pe,a.a.createElement(K.a,{label:be,tooltip:ke||xe,subTitle:Ee})),ce&&a.a.createElement("div",{className:"".concat(l,"-extra")},ce)),Pe?a.a.createElement("div",{className:"".concat(l,"-tabs")},a.a.createElement(y.a,Object(b.a)({onChange:Pe.onChange},Pe),se?Qe:ze)):a.a.createElement("div",{className:ja,style:ha},se?Qe:fa),a.a.createElement(Ae,{actions:_e,prefixCls:l}))}),N=fe,De=e("VzZb"),ge=["key","tab","tabKey","disabled","destroyInactiveTabPane","children","className","style","cardProps"],H=function(d){var c=d.key,u=d.tab,E=d.tabKey,Z=d.disabled,k=d.destroyInactiveTabPane,w=d.children,B=d.className,q=d.style,Ce=d.cardProps,be=Object(z.a)(d,ge),Ee=Object(p.useContext)(D.default.ConfigContext),ce=Ee.getPrefixCls,xe=ce("pro-card-tabpane"),je=C()(xe,B);return a.a.createElement(y.a.TabPane,Object(b.a)({key:c,tabKey:E,tab:u,className:je,style:q,disabled:Z,destroyInactiveTabPane:k},be),a.a.createElement(N,Ce,w))},U=H,T=e("u1OI"),le=function(d){var c=Object(p.useContext)(D.default.ConfigContext),u=c.getPrefixCls,E=u("pro-card-divider"),Z=d.className,k=d.style,w=k===void 0?{}:k,B=d.type,q=C()(E,Z,Object(o.a)({},"".concat(E,"-").concat(B),B));return a.a.createElement("div",{className:q,style:w})},L=le,W=function(d){return a.a.createElement(N,Object(b.a)({bodyStyle:{padding:0}},d))},X=N;X.isProCard=!0,X.Divider=L,X.TabPane=U,X.Group=W;var M=X,ya=v.a=M},rWUb:function(I,v,e){"use strict";e.d(v,"e",function(){return S}),e.d(v,"d",function(){return ae}),e.d(v,"a",function(){return me}),e.d(v,"f",function(){return z}),e.d(v,"b",function(){return $}),e.d(v,"g",function(){return V}),e.d(v,"c",function(){return ne});var b=e("k1fw"),p=e("9og8"),a=e("WmNS"),j=e.n(a),y=e("9kvl");function S(i,s){return o.apply(this,arguments)}function o(){return o=Object(p.a)(j.a.mark(function i(s,m){return j.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",Object(y.f)("/api/admin/templates",Object(b.a)({method:"GET",useCache:!1,params:Object(b.a)(Object(b.a)({},s),{},{per_page:s.pageSize&&s.pageSize,page:s.current&&s.current})},m||{})));case 1:case"end":return n.stop()}},i)})),o.apply(this,arguments)}function ae(i,s){return A.apply(this,arguments)}function A(){return A=Object(p.a)(j.a.mark(function i(s,m){return j.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",Object(y.f)("/api/admin/templates/".concat(s),Object(b.a)({method:"GET"},m||{})));case 1:case"end":return n.stop()}},i)})),A.apply(this,arguments)}function me(i,s){return D.apply(this,arguments)}function D(){return D=Object(p.a)(j.a.mark(function i(s,m){return j.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",Object(y.f)("/api/admin/templates",Object(b.a)({method:"POST",headers:{"Content-Type":"application/json"},data:s},m||{})));case 1:case"end":return n.stop()}},i)})),D.apply(this,arguments)}function z(i,s,m){return te.apply(this,arguments)}function te(){return te=Object(p.a)(j.a.mark(function i(s,m,O){return j.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",Object(y.f)("/api/admin/templates/".concat(s),Object(b.a)({method:"PATCH",headers:{"Content-Type":"application/json"},data:m},O||{})));case 1:case"end":return t.stop()}},i)})),te.apply(this,arguments)}function $(i,s){return R.apply(this,arguments)}function R(){return R=Object(p.a)(j.a.mark(function i(s,m){return j.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",Object(y.f)("/api/admin/templates/".concat(s),Object(b.a)({method:"DELETE",headers:{"Content-Type":"application/json"}},m||{})));case 1:case"end":return n.stop()}},i)})),R.apply(this,arguments)}function V(i){return K.apply(this,arguments)}function K(){return K=Object(p.a)(j.a.mark(function i(s){return j.a.wrap(function(O){for(;;)switch(O.prev=O.next){case 0:return O.abrupt("return",Object(y.f)("/api/admin/templates/variables",Object(b.a)({method:"GET"},s||{})));case 1:case"end":return O.stop()}},i)})),K.apply(this,arguments)}function ne(i,s){return C.apply(this,arguments)}function C(){return C=Object(p.a)(j.a.mark(function i(s,m){return j.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",Object(y.f)("/api/admin/templates/".concat(s,"/preview"),Object(b.a)({method:"GET"},m||{})));case 1:case"end":return n.stop()}},i)})),C.apply(this,arguments)}},u1OI:function(I,v,e){}}]);

(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{"9A0E":function(K,j,a){"use strict";a.r(j);var f=a("q1tI"),C=a("Ty5D"),e=a("9kvl"),p=a("tMyG"),y=a("nhC9"),L=a("P2fV"),d=a("NJEC"),ne=a("miYZ"),R=a("tsqr"),re=a("9og8"),U=a("5Dmo"),z=a("3S7+"),ce=a("+L6B"),D=a("2/Rp"),Y=a("WmNS"),W=a.n(Y),Z=a("xvlK"),w=a("G3dp"),T=a("/MfK"),l=a("55Ip"),s=a("sWYD"),m=a("Qiat"),h=a("rWUb"),n=a("mGZj"),t=a("nKUr"),he=function(Q){var A=Q.templateType,S=Object(f.useRef)(),k=Object(e.i)(),le=[{title:Object(t.jsx)(e.a,{id:"ID",defaultMessage:"ID"}),dataIndex:"id",hideInSearch:!0},{title:Object(t.jsx)(e.a,{id:"created_at",defaultMessage:"created_at"}),dataIndex:"created_at",hideInSearch:!0,render:function(P,v){return v.created_at&&Object(s.a)(new Date(v.created_at),n.a)}},{title:Object(t.jsx)(e.a,{id:"name",defaultMessage:"name"}),dataIndex:"name",hideInSearch:!0},{title:Object(t.jsx)(e.a,{id:"event",defaultMessage:"event"}),dataIndex:"event",hideInSearch:!0},{title:Object(t.jsx)(e.a,{id:"templates.is_default"}),dataIndex:"default",hideInSearch:!0,render:function(P,v){return v.default&&Object(t.jsx)(e.a,{id:"yes"})}}];return Object(t.jsx)(m.a,{headerTitle:k.formatMessage({id:"templates",defaultMessage:"templates"}),actionRef:S,rowKey:"id",search:!1,toolBarRender:function(){return[Object(t.jsx)(l.a,{to:"/templates/".concat(A,"/new"),children:Object(t.jsxs)(D.a,{type:"primary",children:[Object(t.jsx)(Z.a,{})," ",Object(t.jsx)(e.a,{id:"new",defaultMessage:"new"})]},"primary")})]},request:function(P){var v=P.pageSize,G=P.current;return Object(h.e)({pageSize:v,current:G}).then(function(x){return x.success?{data:x.data,total:x.meta.total,success:!0}:[]})},columns:[].concat(le,[{hideInSearch:!0,title:Object(t.jsx)(e.a,{id:"pages.searchTable.titleOption",defaultMessage:"option"}),dataIndex:"option",valueType:"option",render:function(P,v){return[Object(t.jsx)(l.a,{to:"/templates/".concat(A,"/").concat(v.id),children:Object(t.jsx)(z.a,{title:Object(t.jsx)(e.a,{id:"edit",defaultMessage:"edit"}),children:Object(t.jsx)(D.a,{type:"primary",icon:Object(t.jsx)(w.a,{})})})},"edit"),Object(t.jsx)(d.a,{title:Object(t.jsx)(e.a,{id:"deleteQuestion",defaultMessage:"Are you sure to delete this record?"}),onConfirm:Object(re.a)(W.a.mark(function G(){var x,$;return W.a.wrap(function(O){for(;;)switch(O.prev=O.next){case 0:return O.next=2,Object(h.b)(v.id);case 2:return x=O.sent,O.next=5,x;case 5:$=O.sent,$.success&&(R.default.success($.message),S.current&&S.current.reload());case 7:case"end":return O.stop()}},G)})),okText:Object(t.jsx)(e.a,{id:"yes"}),cancelText:Object(t.jsx)(e.a,{id:"no"}),children:Object(t.jsx)(z.a,{title:Object(t.jsx)(e.a,{id:"delete",defaultMessage:"delete"}),children:Object(t.jsx)(D.a,{type:"primary",icon:Object(t.jsx)(T.a,{}),danger:!0})})},"delete")]}}])})},Oe=he,De=function(Q){var A=Q.templateType,S=Object(f.useRef)(),k=Object(e.i)(),le=[{title:Object(t.jsx)(e.a,{id:"ID",defaultMessage:"ID"}),dataIndex:"id",hideInSearch:!0},{title:Object(t.jsx)(e.a,{id:"created_at",defaultMessage:"created_at"}),dataIndex:"created_at",hideInSearch:!0,render:function(P,v){return v.created_at&&Object(s.a)(new Date(v.created_at),n.a)}},{title:Object(t.jsx)(e.a,{id:"name",defaultMessage:"name"}),dataIndex:"name",hideInSearch:!0},{title:Object(t.jsx)(e.a,{id:"event",defaultMessage:"event"}),dataIndex:"event",hideInSearch:!0},{title:Object(t.jsx)(e.a,{id:"templates.is_default"}),dataIndex:"default",hideInSearch:!0,render:function(P,v){return v.default&&Object(t.jsx)(e.a,{id:"yes"})}}];return Object(t.jsx)(m.a,{headerTitle:k.formatMessage({id:"templates",defaultMessage:"templates"}),actionRef:S,rowKey:"id",search:!1,toolBarRender:function(){return[Object(t.jsx)(l.a,{to:"/templates/".concat(A,"/new"),children:Object(t.jsxs)(D.a,{type:"primary",children:[Object(t.jsx)(Z.a,{})," ",Object(t.jsx)(e.a,{id:"new",defaultMessage:"new"})]},"primary")})]},request:function(P){var v=P.pageSize,G=P.current;return Object(h.e)({pageSize:v,current:G}).then(function(x){return x.success?{data:x.data,total:x.meta.total,success:!0}:[]})},columns:[].concat(le,[{hideInSearch:!0,title:Object(t.jsx)(e.a,{id:"pages.searchTable.titleOption",defaultMessage:"option"}),dataIndex:"option",valueType:"option",render:function(P,v){return[Object(t.jsx)(l.a,{to:"/templates/".concat(A,"/").concat(v.id),children:Object(t.jsx)(z.a,{title:Object(t.jsx)(e.a,{id:"edit",defaultMessage:"edit"}),children:Object(t.jsx)(D.a,{type:"primary",icon:Object(t.jsx)(w.a,{})})})},"edit"),Object(t.jsx)(d.a,{title:Object(t.jsx)(e.a,{id:"deleteQuestion",defaultMessage:"Are you sure to delete this record?"}),onConfirm:Object(re.a)(W.a.mark(function G(){var x,$;return W.a.wrap(function(O){for(;;)switch(O.prev=O.next){case 0:return O.next=2,Object(h.b)(v.id);case 2:return x=O.sent,O.next=5,x;case 5:$=O.sent,$.success&&(R.default.success($.message),S.current&&S.current.reload());case 7:case"end":return O.stop()}},G)})),okText:Object(t.jsx)(e.a,{id:"yes"}),cancelText:Object(t.jsx)(e.a,{id:"no"}),children:Object(t.jsx)(z.a,{title:Object(t.jsx)(e.a,{id:"delete",defaultMessage:"delete"}),children:Object(t.jsx)(D.a,{type:"primary",icon:Object(t.jsx)(T.a,{}),danger:!0})})},"delete")]}}])})},ge=De,ye=function(){var Q=Object(C.g)(),A=Q.template;return console.log("tab",A),Object(t.jsx)(p.a,{children:Object(t.jsxs)(y.a,{tabs:{type:"card",activeKey:A,onChange:function(k){return e.d.push("/templates/".concat(k))}},children:[Object(t.jsx)(y.a.TabPane,{tab:Object(t.jsx)(e.a,{id:"email"}),children:Object(t.jsx)(Oe,{templateType:"email"})},"email"),Object(t.jsx)(y.a.TabPane,{tab:Object(t.jsx)(e.a,{id:"PDF"}),children:Object(t.jsx)(ge,{templateType:"pdf"})},"pdf"),Object(t.jsx)(y.a.TabPane,{disabled:!0,tab:Object(t.jsx)("span",{children:Object(t.jsx)(e.a,{id:"Push"})}),children:"Push"},"Push"),Object(t.jsx)(y.a.TabPane,{disabled:!0,tab:Object(t.jsx)("span",{children:Object(t.jsx)(e.a,{id:"SMS"})}),children:"SMS"},"SMS")]})})},Qe=j.default=ye},S76h:function(K,j,a){},TLLU:function(K,j,a){"use strict";var f=a("5OYt");j.a={useBreakpoint:f.a}},VzZb:function(K,j,a){},"aK+R":function(K,j,a){},df8c:function(K,j,a){},nhC9:function(K,j,a){"use strict";var f=a("wx14"),C=a("q1tI"),e=a.n(C),p=a("Znn+"),y=a("ZTPi"),L=a("VTBJ"),d=a("rePB"),ne=a("U8pU"),R=a("ODXe"),re=a("GNNt"),U=a("wEI+"),z=a("Ff2n"),ce=a("1GLa"),D=a("TLLU"),Y=a("UESt"),W=a("6cGi"),Z=a("YSkC"),w=a("TSYQ"),T=a.n(w),l=a("BGR+"),s=a("14J3"),m=a("BMrR"),h=a("jCWc"),n=a("kPKH"),t=a("aK+R"),he=function(o){var i=o.style,u=o.prefix;return e.a.createElement("div",{className:"".concat(u,"-loading-content"),style:i},e.a.createElement(m.a,{gutter:8},e.a.createElement(n.a,{span:22},e.a.createElement("div",{className:"".concat(u,"-loading-block")}))),e.a.createElement(m.a,{gutter:8},e.a.createElement(n.a,{span:8},e.a.createElement("div",{className:"".concat(u,"-loading-block")})),e.a.createElement(n.a,{span:15},e.a.createElement("div",{className:"".concat(u,"-loading-block")}))),e.a.createElement(m.a,{gutter:8},e.a.createElement(n.a,{span:6},e.a.createElement("div",{className:"".concat(u,"-loading-block")})),e.a.createElement(n.a,{span:18},e.a.createElement("div",{className:"".concat(u,"-loading-block")}))),e.a.createElement(m.a,{gutter:8},e.a.createElement(n.a,{span:13},e.a.createElement("div",{className:"".concat(u,"-loading-block")})),e.a.createElement(n.a,{span:9},e.a.createElement("div",{className:"".concat(u,"-loading-block")}))),e.a.createElement(m.a,{gutter:8},e.a.createElement(n.a,{span:4},e.a.createElement("div",{className:"".concat(u,"-loading-block")})),e.a.createElement(n.a,{span:3},e.a.createElement("div",{className:"".concat(u,"-loading-block")})),e.a.createElement(n.a,{span:16},e.a.createElement("div",{className:"".concat(u,"-loading-block")}))))},Oe=he,De=a("S76h"),ge=function(o){var i=o.actions,u=o.prefixCls;return Array.isArray(i)&&(i==null?void 0:i.length)?e.a.createElement("ul",{className:"".concat(u,"-actions")},i.map(function(M,H){return e.a.createElement("li",{style:{width:"".concat(100/i.length,"%")},key:"action-".concat(H)},e.a.createElement("span",null,M))})):i?e.a.createElement("ul",{className:"".concat(u,"-actions")},i):null},ye=ge,Qe=a("df8c"),ve=["className","style","bodyStyle","headStyle","title","subTitle","extra","tip","wrap","layout","loading","gutter","tooltip","split","headerBordered","bordered","children","size","actions","ghost","hoverable","direction","collapsed","collapsible","defaultCollapsed","onCollapse","checked","onChecked","tabs","type"],Q=D.a.useBreakpoint,A=e.a.forwardRef(function(r,o){var i,u,M,H=r.className,q=r.style,_=r.bodyStyle,J=_===void 0?{}:_,ee=r.headStyle,xe=ee===void 0?{}:ee,je=r.title,Ce=r.subTitle,se=r.extra,Ee=r.tip,fe=r.wrap,Fe=fe===void 0?!1:fe,He=r.layout,ie=r.loading,Ae=r.gutter,Xe=Ae===void 0?0:Ae,we=r.tooltip,de=r.split,Be=r.headerBordered,ke=Be===void 0?!1:Be,Le=r.bordered,qe=Le===void 0?!1:Le,Re=r.children,ze=r.size,_e=r.actions,Ge=r.ghost,ea=Ge===void 0?!1:Ge,$e=r.hoverable,aa=$e===void 0?!1:$e,ta=r.direction,Ke=r.collapsed,Ue=r.collapsible,na=Ue===void 0?!1:Ue,We=r.defaultCollapsed,ra=We===void 0?!1:We,ca=r.onCollapse,la=r.checked,Te=r.onChecked,Pe=r.tabs,Se=r.type,oe=Object(z.a)(r,ve),sa=Object(C.useContext)(U.default.ConfigContext),ia=sa.getPrefixCls,Ze=Q(),da=Object(W.a)(ra,{value:Ke,onChange:ca}),Je=Object(R.a)(da,2),Ie=Je[0],oa=Je[1],be=["xxl","xl","lg","md","sm","xs"],ua=function(g){var b=[0,0],N=Array.isArray(g)?g:[g,0];return N.forEach(function(B,X){if(Object(ne.a)(B)==="object")for(var V=0;V<be.length;V+=1){var me=be[V];if(Ze[me]&&B[me]!==void 0){b[X]=B[me];break}}else b[X]=B||0}),b},ue=function(g,b){return g?b:{}},ma=function(g){var b=g;if(Object(ne.a)(g)==="object")for(var N=0;N<be.length;N+=1){var B=be[N];if(Ze[B]&&g[B]!==void 0){b=g[B];break}}var X=ue(typeof b=="string"&&/\d%|\dpx/i.test(b),{width:b,flexShrink:0});return{span:b,colSpanStyle:X}},c=ia("pro-card"),va=ua(Xe),Ve=Object(R.a)(va,2),ae=Ve[0],te=Ve[1],Me=!1,Ne=e.a.Children.toArray(Re),ja=Ne.map(function(E,g){var b;if(E==null||(b=E.type)===null||b===void 0?void 0:b.isProCard){var N;Me=!0;var B=E.props.colSpan,X=ma(B),V=X.span,me=X.colSpanStyle,ha=T()(["".concat(c,"-col")],(N={},Object(d.a)(N,"".concat(c,"-split-vertical"),de==="vertical"&&g!==Ne.length-1),Object(d.a)(N,"".concat(c,"-split-horizontal"),de==="horizontal"&&g!==Ne.length-1),Object(d.a)(N,"".concat(c,"-col-").concat(V),typeof V=="number"&&V>=0&&V<=24),N));return e.a.createElement("div",{style:Object(L.a)(Object(L.a)(Object(L.a)({},me),ue(ae>0,{paddingRight:ae/2,paddingLeft:ae/2})),ue(te>0,{paddingTop:te/2,paddingBottom:te/2})),key:"pro-card-col-".concat((E==null?void 0:E.key)||g),className:ha},e.a.cloneElement(E))}return E}),fa=T()("".concat(c),H,(i={},Object(d.a)(i,"".concat(c,"-border"),qe),Object(d.a)(i,"".concat(c,"-contain-card"),Me),Object(d.a)(i,"".concat(c,"-loading"),ie),Object(d.a)(i,"".concat(c,"-split"),de==="vertical"||de==="horizontal"),Object(d.a)(i,"".concat(c,"-ghost"),ea),Object(d.a)(i,"".concat(c,"-hoverable"),aa),Object(d.a)(i,"".concat(c,"-size-").concat(ze),ze),Object(d.a)(i,"".concat(c,"-type-").concat(Se),Se),Object(d.a)(i,"".concat(c,"-collapse"),Ie),Object(d.a)(i,"".concat(c,"-checked"),la),i)),ba=T()("".concat(c,"-body"),(u={},Object(d.a)(u,"".concat(c,"-body-center"),He==="center"),Object(d.a)(u,"".concat(c,"-body-direction-column"),de==="horizontal"||ta==="column"),Object(d.a)(u,"".concat(c,"-body-wrap"),Fe&&Me),u)),pa=Object(L.a)(Object(L.a)(Object(L.a)({},ue(ae>0,{marginRight:-ae/2,marginLeft:-ae/2})),ue(te>0,{marginTop:-te/2,marginBottom:-te/2})),J),Ye=e.a.isValidElement(ie)?ie:e.a.createElement(Oe,{prefix:c,style:J.padding===0||J.padding==="0px"?{padding:24}:void 0}),pe=na&&Ke===void 0&&e.a.createElement(Y.a,{rotate:Ie?void 0:90,className:"".concat(c,"-collapsible-icon")});return e.a.createElement("div",Object(f.a)({className:fa,style:q,ref:o,onClick:function(g){var b;Te==null||Te(g),oe==null||(b=oe.onClick)===null||b===void 0||b.call(oe,g)}},Object(l.a)(oe,["prefixCls","colSpan"])),(je||se||pe)&&e.a.createElement("div",{className:T()("".concat(c,"-header"),(M={},Object(d.a)(M,"".concat(c,"-header-border"),ke||Se==="inner"),Object(d.a)(M,"".concat(c,"-header-collapsible"),pe),M)),style:xe,onClick:function(){pe&&oa(!Ie)}},e.a.createElement("div",{className:"".concat(c,"-title")},pe,e.a.createElement(Z.a,{label:je,tooltip:we||Ee,subTitle:Ce})),se&&e.a.createElement("div",{className:"".concat(c,"-extra")},se)),Pe?e.a.createElement("div",{className:"".concat(c,"-tabs")},e.a.createElement(y.a,Object(f.a)({onChange:Pe.onChange},Pe),ie?Ye:Re)):e.a.createElement("div",{className:ba,style:pa},ie?Ye:ja),e.a.createElement(ye,{actions:_e,prefixCls:c}))}),S=A,k=a("VzZb"),le=["key","tab","tabKey","disabled","destroyInactiveTabPane","children","className","style","cardProps"],I=function(o){var i=o.key,u=o.tab,M=o.tabKey,H=o.disabled,q=o.destroyInactiveTabPane,_=o.children,J=o.className,ee=o.style,xe=o.cardProps,je=Object(z.a)(o,le),Ce=Object(C.useContext)(U.default.ConfigContext),se=Ce.getPrefixCls,Ee=se("pro-card-tabpane"),fe=T()(Ee,J);return e.a.createElement(y.a.TabPane,Object(f.a)({key:i,tabKey:M,tab:u,className:fe,style:ee,disabled:H,destroyInactiveTabPane:q},je),e.a.createElement(S,xe,_))},P=I,v=a("u1OI"),G=function(o){var i=Object(C.useContext)(U.default.ConfigContext),u=i.getPrefixCls,M=u("pro-card-divider"),H=o.className,q=o.style,_=q===void 0?{}:q,J=o.type,ee=T()(M,H,Object(d.a)({},"".concat(M,"-").concat(J),J));return e.a.createElement("div",{className:ee,style:_})},x=G,$=function(o){return e.a.createElement(S,Object(f.a)({bodyStyle:{padding:0}},o))},F=S;F.isProCard=!0,F.Divider=x,F.TabPane=P,F.Group=$;var O=F,Oa=j.a=O},rWUb:function(K,j,a){"use strict";a.d(j,"e",function(){return L}),a.d(j,"d",function(){return ne}),a.d(j,"a",function(){return re}),a.d(j,"f",function(){return z}),a.d(j,"b",function(){return D}),a.d(j,"g",function(){return W}),a.d(j,"c",function(){return w});var f=a("k1fw"),C=a("9og8"),e=a("WmNS"),p=a.n(e),y=a("9kvl");function L(l,s){return d.apply(this,arguments)}function d(){return d=Object(C.a)(p.a.mark(function l(s,m){return p.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",Object(y.f)("/api/admin/templates",Object(f.a)({method:"GET",useCache:!1,params:Object(f.a)(Object(f.a)({},s),{},{per_page:s.pageSize&&s.pageSize,page:s.current&&s.current})},m||{})));case 1:case"end":return n.stop()}},l)})),d.apply(this,arguments)}function ne(l,s){return R.apply(this,arguments)}function R(){return R=Object(C.a)(p.a.mark(function l(s,m){return p.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",Object(y.f)("/api/admin/templates/".concat(s),Object(f.a)({method:"GET"},m||{})));case 1:case"end":return n.stop()}},l)})),R.apply(this,arguments)}function re(l,s){return U.apply(this,arguments)}function U(){return U=Object(C.a)(p.a.mark(function l(s,m){return p.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",Object(y.f)("/api/admin/templates",Object(f.a)({method:"POST",headers:{"Content-Type":"application/json"},data:s},m||{})));case 1:case"end":return n.stop()}},l)})),U.apply(this,arguments)}function z(l,s,m){return ce.apply(this,arguments)}function ce(){return ce=Object(C.a)(p.a.mark(function l(s,m,h){return p.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",Object(y.f)("/api/admin/templates/".concat(s),Object(f.a)({method:"PATCH",headers:{"Content-Type":"application/json"},data:m},h||{})));case 1:case"end":return t.stop()}},l)})),ce.apply(this,arguments)}function D(l,s){return Y.apply(this,arguments)}function Y(){return Y=Object(C.a)(p.a.mark(function l(s,m){return p.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",Object(y.f)("/api/admin/templates/".concat(s),Object(f.a)({method:"DELETE",headers:{"Content-Type":"application/json"}},m||{})));case 1:case"end":return n.stop()}},l)})),Y.apply(this,arguments)}function W(l){return Z.apply(this,arguments)}function Z(){return Z=Object(C.a)(p.a.mark(function l(s){return p.a.wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.abrupt("return",Object(y.f)("/api/admin/templates/variables",Object(f.a)({method:"GET"},s||{})));case 1:case"end":return h.stop()}},l)})),Z.apply(this,arguments)}function w(l,s){return T.apply(this,arguments)}function T(){return T=Object(C.a)(p.a.mark(function l(s,m){return p.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",Object(y.f)("/api/admin/templates/".concat(s,"/preview"),Object(f.a)({method:"GET"},m||{})));case 1:case"end":return n.stop()}},l)})),T.apply(this,arguments)}},u1OI:function(K,j,a){}}]);

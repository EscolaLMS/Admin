(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{"2ise":function(Y,_,e){"use strict";e.r(_),e.d(_,"TableColumns",function(){return c});var A=e("qLMh"),K=e("9og8"),W=e("5Dmo"),N=e("3S7+"),G=e("+L6B"),R=e("2/Rp"),L=e("tJVT"),v=e("jrin"),P=e("k1fw"),u=e("q1tI"),t=e("9kvl"),f=e("Qiat"),m=e("tMyG"),p=e("G3dp"),h=e("twdk"),y=e("y8nQ"),z=e("Vl3Y"),j=e("rmhi"),H=e("VMEa"),V=e("Qurx"),Q=e("Dmw0"),a=e("nKUr"),X=function(r){var x=r.visible,S=r.onVisibleChange,B=r.onFinish,n=r.langKey,M=r.defaultValue,g=Object(t.l)(),o=z.a.useForm(),C=Object(L.a)(o,1),D=C[0];return Object(u.useEffect)(function(){D.setFieldsValue({key:n,text:M})},[n,D]),Object(a.jsxs)(j.a,{form:D,title:g.formatMessage({id:"editTranslation",defaultMessage:"Edit Translation"}),width:"700px",visible:x,onVisibleChange:S,onFinish:function(Z){return B(Object(P.a)({},Z))},children:[Object(a.jsxs)(H.a.Group,{children:[Object(a.jsx)(V.a,{disabled:!0,label:Object(a.jsx)(t.a,{id:"group",defaultMessage:"group"}),name:"group",initialValue:"Admin"}),Object(a.jsx)(V.a,{disabled:!0,name:"key",label:Object(a.jsx)(t.a,{id:"key"}),placeholder:g.formatMessage({id:"key"}),required:!0})]}),Object(a.jsx)(H.a.Item,{name:"text",label:Object(a.jsx)(t.a,{id:"translationJsonText"}),tooltip:Object(a.jsx)(t.a,{id:"translationJsonText_tooltip"}),valuePropName:"value",children:Object(a.jsx)(Q.a,{})})]})},I=X,c=[{title:Object(a.jsx)(t.a,{id:"lang",defaultMessage:"id"}),dataIndex:"lang",valueType:"select",valueEnum:Object(t.d)().reduce(function(F,r){return Object(P.a)(Object(P.a)({},F),{},Object(v.a)({},r,r))},{})},{title:Object(a.jsx)(t.a,{id:"key",defaultMessage:"key"}),dataIndex:"key"},{title:Object(a.jsx)(t.a,{id:"value",defaultMessage:"value"}),dataIndex:"value"}],$=function(){var r=Object(u.useState)(Math.random()),x=Object(L.a)(r,2),S=x[0],B=x[1],n=Object(u.useRef)(),M=Object(u.useState)(),g=Object(L.a)(M,2),o=g[0],C=g[1],D=Object(t.l)(),J=Object(u.useMemo)(function(){for(var b=[],i=Object.keys(t.g),l=function(){var E=U[s],T=t.g[E].messages;T&&Object.keys(T).forEach(function(O){b.push({id:"".concat(E,"-").concat(O),lang:E,key:O,value:T[O]})})},s=0,U=i;s<U.length;s++)l();return b},[S]),Z=Object(u.useCallback)(function(b){var i=J.reduce(function(l,s){return s.key===b?Object(P.a)(Object(P.a)({},l),{},Object(v.a)({},s.lang,s.value)):l},{});C({key:b,defaultValue:i})},[]);return Object(a.jsxs)(m.a,{children:[Object(a.jsx)(f.a,{headerTitle:D.formatMessage({id:"menu.Configuration.Translations",defaultMessage:"Translations"}),actionRef:n,rowKey:"id",request:function(i){var l=i.lang,s=i.key,U=i.value;return new Promise(function(d){var E=J.filter(function(T){var O=!0;return O&&l&&T.lang!==l&&(O=!1),O&&s&&!T.key.includes(s)&&(O=!1),O&&U&&typeof T.value=="string"&&T.value&&!T.value.includes(U)&&(O=!1),O});d({data:E,success:!0,total:E.length})})},columns:[].concat(c,[{title:Object(a.jsx)(t.a,{id:"options",defaultMessage:"options"}),dataIndex:"option",valueType:"option",width:"10%",render:function(i,l){return[Object(a.jsx)(N.a,{title:Object(a.jsx)(t.a,{id:"edit",defaultMessage:"edit"}),children:Object(a.jsx)(R.a,{type:"primary",icon:Object(a.jsx)(p.a,{}),onClick:function(){return Z(l.key)}})},"edit"),,]}}])})," ",Object(a.jsx)(I,{langKey:o==null?void 0:o.key,defaultValue:o==null?void 0:o.defaultValue,visible:!!o,onVisibleChange:function(i){return i===!1&&C(void 0)},onFinish:function(){var b=Object(K.a)(Object(A.a)().mark(function i(l){var s;return Object(A.a)().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return Object.entries(l.text).forEach(function(E){E[1]&&Object(t.c)(E[0],Object(v.a)({},l.key,E[1]))}),n.current&&(B(Math.random()),n.current.reload()),d.next=4,Object(h.e)({group:"Admin",key:l.key});case 4:if(s=d.sent,!s.success){d.next=12;break}if(!(s.data.length>0&&s.data[0].id)){d.next=10;break}Object(h.f)(s.data[0].id,l),d.next=12;break;case 10:return d.next=12,Object(h.a)(l);case 12:return C(void 0),d.abrupt("return",!0);case 14:case"end":return d.stop()}},i)}));return function(i){return b.apply(this,arguments)}}()})]})},k=_.default=$},Dmw0:function(Y,_,e){"use strict";e.d(_,"a",function(){return Q});var A=e("+L6B"),K=e("2/Rp"),W=e("14J3"),N=e("BMrR"),G=e("jCWc"),R=e("kPKH"),L=e("5NDa"),v=e("5rEg"),P=e("tJVT"),u=e("jrin"),t=e("k1fw"),f=e("q1tI"),m=e.n(f),p=e("u95b"),h=e.n(p),y=e("9kvl"),z=e("cYEv"),j=e("nKUr"),H=e.n(j),V=function(){return Object(y.d)().reduce(function(I,c){return Object(t.a)(Object(t.a)({},I),{},Object(u.a)({},c,""))},{})},Q=function(I){var c=I.value,$=I.onChange,k=Object(f.useState)(V()),F=Object(P.a)(k,2),r=F[0],x=F[1];Object(f.useEffect)(function(){var n=typeof c=="object"?c:JSON.parse(c!=null?c:"{}");x(Object.assign(V(),n))},[c]),Object(f.useEffect)(function(){$&&JSON.stringify(r)!==JSON.stringify(c)&&$(r)},[r]);var S=Object(f.useCallback)(function(){x(function(n){return Object(t.a)(Object(t.a)({},n),{},{lang:""})})},[]),B=Object(f.useCallback)(function(n,M,g){x(function(o){return Object.entries(o).reduce(function(C,D,J){return J===n?Object(t.a)(Object(t.a)({},C),{},Object(u.a)({},M,g)):Object(t.a)(Object(t.a)({},C),{},Object(u.a)({},D[0],D[1]))},{})})},[]);return Object(j.jsxs)("div",{children:[Object.entries(r).map(function(n,M){return Object(j.jsxs)(N.a,{children:[Object(j.jsx)(R.a,{span:6,children:Object(j.jsx)(v.a,{disabled:Object(y.d)().includes(n[0]),value:n[0],maxLength:5,onChange:function(o){return B(M,o.target.value,n[1])}})}),Object(j.jsx)(R.a,{span:24-6,children:Object(j.jsx)(v.a,{value:n[1],onChange:function(o){return B(M,n[0],o.target.value)}})})]},M)}),Object(j.jsx)(K.a,{onClick:function(){return S()},icon:Object(j.jsx)(z.a,{})})]})},a=Q},Qurx:function(Y,_,e){"use strict";var A=e("VTBJ"),K=e("Ff2n"),W=e("nKUr"),N=e.n(W),G=e("adzw"),R=["fieldProps","proFieldProps"],L=["fieldProps","proFieldProps"],v="text",P=function(m){var p=m.fieldProps,h=m.proFieldProps,y=Object(K.a)(m,R);return Object(W.jsx)(G.a,Object(A.a)({valueType:v,fieldProps:p,filedConfig:{valueType:v},proFieldProps:h},y))},u=function(m){var p=m.fieldProps,h=m.proFieldProps,y=Object(K.a)(m,L);return Object(W.jsx)(G.a,Object(A.a)({valueType:"password",fieldProps:p,proFieldProps:h,filedConfig:{valueType:v}},y))},t=P;t.Password=u,t.displayName="ProFormComponent",_.a=t},u95b:function(Y,_,e){}}]);
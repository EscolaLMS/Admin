(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{"G/Ub":function(Y,p,e){"use strict";e.d(p,"d",function(){return q}),e.d(p,"a",function(){return _}),e.d(p,"b",function(){return ee}),e.d(p,"c",function(){return L}),e.d(p,"e",function(){return R});var v=e("qLMh"),f=e("k1fw"),T=e("9og8"),g=e("9kvl");function q(c,u){return F.apply(this,arguments)}function F(){return F=Object(T.a)(Object(v.a)().mark(function c(u,m){return Object(v.a)().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",Object(g.i)("/api/admin/roles",Object(f.a)({method:"GET",useCache:!1,params:u},m||{})));case 1:case"end":return a.stop()}},c)})),F.apply(this,arguments)}function _(c,u){return K.apply(this,arguments)}function K(){return K=Object(T.a)(Object(v.a)().mark(function c(u,m){return Object(v.a)().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",Object(g.i)("/api/admin/roles",Object(f.a)({method:"POST",headers:{"Content-Type":"application/json"},data:u},m||{})));case 1:case"end":return a.stop()}},c)})),K.apply(this,arguments)}function ee(c,u){return E.apply(this,arguments)}function E(){return E=Object(T.a)(Object(v.a)().mark(function c(u,m){return Object(v.a)().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",Object(g.i)("/api/admin/roles/".concat(u),Object(f.a)({method:"DELETE",headers:{"Content-Type":"application/json"}},m||{})));case 1:case"end":return a.stop()}},c)})),E.apply(this,arguments)}function L(c,u){return I.apply(this,arguments)}function I(){return I=Object(T.a)(Object(v.a)().mark(function c(u,m){return Object(v.a)().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",Object(g.i)("/api/admin/roles/".concat(u),Object(f.a)({method:"GET",useCache:!1},m||{})));case 1:case"end":return a.stop()}},c)})),I.apply(this,arguments)}function R(c,u,m){return j.apply(this,arguments)}function j(){return j=Object(T.a)(Object(v.a)().mark(function c(u,m,i){return Object(v.a)().wrap(function(S){for(;;)switch(S.prev=S.next){case 0:return S.abrupt("return",Object(g.i)("/api/admin/roles/".concat(u),Object(f.a)({method:"PATCH",headers:{"Content-Type":"application/json"},data:m},i||{})));case 1:case"end":return S.stop()}},c)})),j.apply(this,arguments)}},GwcT:function(Y,p,e){},O867:function(Y,p,e){},Rg7m:function(Y,p,e){"use strict";e.r(p);var v=e("IzEo"),f=e("bx4M"),T=e("5Dmo"),g=e("3S7+"),q=e("14J3"),F=e("BMrR"),_=e("T2oS"),K=e("W9HT"),ee=e("miYZ"),E=e("tsqr"),L=e("oBTY"),I=e("jrin"),R=e("k1fw"),j=e("qLMh"),c=e("9og8"),u=e("y8nQ"),m=e("Vl3Y"),i=e("tJVT"),a=e("q1tI"),S=e.n(a),se=e("VMEa"),le=e("nhC9"),ne=e("G/Ub"),ce=e("tMyG"),ue=e("Ty5D"),ie=e("9kvl"),Ke=e("O867"),Le=e("sRBo"),me=e("kaz8"),n=e("AJpP"),de=e("VX7R"),ve=e("zsHu"),ae=e("xvlK"),be=e("/MfK"),Oe=e("b6To"),pe=e("eFNv"),je=e("VOzN"),he=e("4KAj"),fe=e("lfch"),ge=e("mxu5"),ye=e("AzWu"),Ce=e("q9hl"),te=e("cJ7L"),Te=e("2XLT"),Ee=e("40U4"),Re=e("/1V0"),Se=e("X72a"),$e=e("f1wO"),Ie=e("GwcT"),d=e("nKUr"),U={list:{color:n.blue.primary,background:n.blue[0],component:de.a},update:{color:n.orange.primary,background:n.orange[0],component:ve.a},create:{color:n.cyan.primary,background:n.cyan[0],component:ae.a},add:{color:n.cyan.primary,background:n.cyan[0],component:ae.a},delete:{color:n.volcano.primary,background:n.volcano[0],component:be.a},read:{color:n.green.primary,background:n.green[0],component:Oe.a},manage:{color:n.gold.primary,background:n.gold[0],component:pe.a},import:{color:n.blue.primary,background:n.blue[0],component:je.a},export:{color:n.blue.primary,background:n.blue[0],component:he.a},clone:{color:n.blue.primary,background:n.blue[0],component:fe.a},access:{color:n.blue.primary,background:n.blue[0],component:ge.a},install:{color:n.gold.primary,background:n.gold[0],component:ye.a},upload:{color:n.blue.primary,background:n.blue[0],component:Ce.a},authored:{color:n.geekblue.primary,background:n.geekblue[0],component:te.a},account:{color:n.geekblue.primary,background:n.geekblue[0],component:te.a},term:{color:n.blue.primary,background:n.blue[0],component:Te.a},use:{color:n.blue.primary,background:n.blue[0],component:Ee.a},dashboard:{color:n.magenta.primary,background:n.magenta[0],component:Re.a},trigger:{color:n.blue.primary,background:n.blue[0],component:Se.a},buy:{color:n.yellow.primary,background:n.yellow[0],component:$e.a}},Pe=function(b){var G,$,h,k,B,P,A=b.name,z=b.nameKey,V=b.assigned,J=b.onChange,D=Object(a.useState)(V),M=Object(i.a)(D,2),N=M[0],H=M[1],W=A.replaceAll(/(_|-)/g," ").trim(),x=W.replace("self","").trim(),X=A!==z?A.replace(z,"").replaceAll(/(_|-)/g," "):W,y=x.split(" ").slice(-1)[0],Q=function(){H(function(o){return!o}),J(A)},Z=(G=($=U[y])===null||$===void 0?void 0:$.component)!==null&&G!==void 0?G:S.a.Fragment;return Object(a.useEffect)(function(){H(V)},[V]),Object(d.jsx)(me.a,{name:"checkbox",className:"custom-checkbox",checked:N,style:(h=U[y])!==null&&h!==void 0&&h.background&&N?{backgroundColor:(k=U[y])===null||k===void 0?void 0:k.background}:void 0,"aria-label":W,onChange:Q,children:Object(d.jsxs)("div",{className:"custom-checkbox__content",children:[X,Object(d.jsx)(Z,{style:((B=U[y])===null||B===void 0?void 0:B.color)&&{color:(P=U[y])===null||P===void 0?void 0:P.color}})]})})},Ae=Pe,De=e("twdk"),Ue=p.default=function(){var re=Object(ue.l)(),b=re.name,G=Object(a.useState)([]),$=Object(i.a)(G,2),h=$[0],k=$[1],B=Object(a.useState)({}),P=Object(i.a)(B,2),A=P[0],z=P[1],V=Object(a.useState)([]),J=Object(i.a)(V,2),D=J[0],M=J[1],N=m.a.useForm(),H=Object(i.a)(N,1),W=H[0],x=Object(a.useRef)(null),X=Object(a.useCallback)(Object(c.a)(Object(j.a)().mark(function o(){var r,s;return Object(j.a)().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,Object(ne.c)(b);case 2:r=l.sent,r.success&&(s=r.data.filter(function(C){return C.assigned}).map(function(C){return C.name}),x.current=s,k(r.data),M(s));case 4:case"end":return l.stop()}},o)})),[b]);Object(a.useEffect)(function(){var o=function(){var r=Object(c.a)(Object(j.a)().mark(function s(){var O,l;return Object(j.a)().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(De.d)("permissions");case 3:if(O=t.sent,O.success){t.next=6;break}throw new Error("Failed to download translations of the permissions!");case 6:l=O.data.reduce(function(Me,oe){var xe=oe.key,Fe=oe.value;return Object(R.a)(Object(R.a)({},Me),{},Object(I.a)({},xe.split(".")[1],Fe))},{}),z(l),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),console.error(t.t0);case 13:case"end":return t.stop()}},s,null,[[0,10]])}));return function(){return r.apply(this,arguments)}}();X(),o()},[b,X]);var y=Object(a.useMemo)(function(){return{onFinish:function(){var o=Object(c.a)(Object(j.a)().mark(function s(){var O,l;return Object(j.a)().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(ne.e)(b,{permissions:Object(L.a)(D)});case 3:return O=t.sent,t.next=6,O;case 6:l=t.sent,l.success&&(E.b.success(l.message),x.current=D),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),E.b.error(t.t0.data.message);case 13:case"end":return t.stop()}},s,null,[[0,10]])}));function r(){return o.apply(this,arguments)}return r}(),onReset:function(){return x.current&&M(x.current)},initialValues:h}},[h,b,D]),Q=Object(a.useCallback)(function(o){M(function(r){return r.includes(o)?r.filter(function(s){return s!==o}):[].concat(Object(L.a)(r),[o])})},[b]),Z=h.reduce(function(o,r){var s;return typeof r=="undefined"||(o[r.name.split("_")[0]]=[].concat(Object(L.a)((s=o[r.name.split("_")[0]])!==null&&s!==void 0?s:[]),[r])),o},{}),w=Object.entries(Z).sort(function(o,r){var s=Object(i.a)(o,2),O=s[1],l=Object(i.a)(r,2),C=l[1];return O.length-C.length});return h.length?Object(d.jsx)(ce.a,{title:Object(d.jsx)(ie.a,{id:"permissions"}),children:Object(d.jsx)(le.a,{children:Object(d.jsx)(se.a,Object(R.a)(Object(R.a)({},y),{},{form:W,className:"permissions-form",children:!!w.length&&w.map(function(o){var r=Object(i.a)(o,2),s=r[0],O=r[1];return Object(d.jsx)(f.a,{title:s,size:"small",className:"permissions-cart",children:O.map(function(l){return Object(d.jsx)(g.a,{title:A[l.name],placement:"topLeft",children:Object(d.jsx)(F.a,{children:Object(d.jsx)(Ae,{nameKey:s,name:l.name,assigned:D.includes(l.name),onChange:Q})})},l.id)})},s)})}))})}):Object(d.jsx)(K.a,{})}}}]);
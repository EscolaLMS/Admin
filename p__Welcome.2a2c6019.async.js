(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{"Ecy+":function(le,o,e){"use strict";var a=e("fOrg"),m=e("+KLJ"),s=e("g9YV"),j=e("wCAj"),ce=e("T2oS"),L=e("W9HT"),N=e("+L6B"),T=e("2/Rp"),G=e("k1fw"),Q=e("tJVT"),z=e("q1tI"),K=e.n(z),ie=e("I+Rq"),Z=e("w/VK"),U=e("9kvl"),E=e("nhC9"),de=e("Mo4S"),t=e("8j+T"),be=e.n(t),M=e("nKUr"),me=e.n(M),ne=[{title:Object(M.jsx)(U.a,{id:"label",defaultMessage:"label"}),dataIndex:"label",key:"label"},{title:Object(M.jsx)(U.a,{id:"value",defaultMessage:"value"}),dataIndex:"value",key:"value"}],ge=function(re){var F=re.metric,je=re.header,V=je===void 0?!0:je,pe=re.asDonut,oe=pe===void 0?!1:pe,fe=re.customLabelTitle,J=re.customLabelContent,ye=Object(z.useState)({mode:"init"}),ee=Object(Q.a)(ye,2),c=ee[0],u=ee[1],h=Object(U.l)(),b={appendPadding:10,angleField:"value",colorField:"label",radius:.9,label:{type:"inner",offset:"-30%",content:function(k){var w=k.percent;return w>=.01?"".concat((w*100).toFixed(0),"%"):""},style:{fontSize:14,textAlign:"center"}},interactions:[{type:"element-active"}],legend:{itemValue:{alignRight:!0,formatter:function(k,w){if(J&&"value"in c){var Oe=c.value.find(function(he){var ve=he.label;return ve===w.name});return Oe?J(Oe):k}return k}}}},l={appendPadding:20,innerRadius:.6,label:Object(G.a)(Object(G.a)({},b.label),{},{offset:"-50%"}),legend:{itemWidth:void 0,itemName:{formatter:function(k){return fe?fe(k):k}},offsetX:-24,itemValue:{formatter:function(k,w){if(J&&"value"in c){var Oe=c.value.find(function(he){var ve=he.label;return ve===w.value});return Oe?J(Oe):void 0}}}}},g=Object(G.a)(Object(G.a)({},b),oe?l:{});Object(z.useEffect)(function(){u({mode:"loading"}),Object(Z.a)({metric:F}).then(function(C){C.success?u({mode:"loaded",value:C.data}):u({mode:"error",error:C.message})}).catch(function(C){return u({mode:"error",error:C.toString()})})},[F]);var $=Object(z.useCallback)(function(){if(c.mode==="loaded"){var C={filename:F.split("\\").join("-"),fieldSeparator:",",quoteStrings:'"',decimalSeparator:".",showLabels:!0,showTitle:!0,title:h.formatMessage({id:F.split("\\").pop()}),useTextFile:!1,useBom:!0,useKeysAsHeaders:!0},k=new t.ExportToCsv(C);k.generateCsv(c.value)}},[c]);return Object(M.jsxs)(E.a,{title:V&&Object(M.jsx)(U.a,{id:F.split("\\").pop(),defaultMessage:F.split("\\").pop()}),extra:V&&Object(M.jsxs)(T.a,{icon:Object(M.jsx)(de.a,{}),size:"small",onClick:function(){return $()},children:[" ",Object(M.jsx)(U.a,{id:"download"}),"\xA0","CSV"]}),headerBordered:!0,children:[c.mode==="loading"&&Object(M.jsx)(L.a,{}),c.mode==="loaded"&&Object(M.jsxs)("div",{children:[Object(M.jsx)(ie.a,Object(G.a)(Object(G.a)({},g),{},{data:c.value})),V&&Object(M.jsx)(j.a,{pagination:!1,size:"small",dataSource:c.value,columns:ne})]}),c.mode==="error"&&Object(M.jsx)(m.a,{message:c.error,type:"error"})]})};o.a=ge},H6aw:function(le,o,e){"use strict";e.d(o,"e",function(){return ce}),e.d(o,"k",function(){return N}),e.d(o,"t",function(){return G}),e.d(o,"f",function(){return z}),e.d(o,"m",function(){return ie}),e.d(o,"g",function(){return U}),e.d(o,"l",function(){return de}),e.d(o,"u",function(){return be}),e.d(o,"h",function(){return me}),e.d(o,"v",function(){return ge}),e.d(o,"s",function(){return re}),e.d(o,"n",function(){return je}),e.d(o,"o",function(){return pe}),e.d(o,"p",function(){return fe}),e.d(o,"a",function(){return ye}),e.d(o,"r",function(){return c}),e.d(o,"q",function(){return h}),e.d(o,"i",function(){return l}),e.d(o,"j",function(){return $}),e.d(o,"c",function(){return k}),e.d(o,"d",function(){return Oe}),e.d(o,"b",function(){return ve});var a=e("qLMh"),m=e("k1fw"),s=e("9og8"),j=e("9kvl");function ce(n,r){return L.apply(this,arguments)}function L(){return L=Object(s.a)(Object(a.a)().mark(function n(r,d){return Object(a.a)().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.abrupt("return",Object(j.i)("/api/admin/courses",Object(m.a)({method:"GET",useCache:!1,params:Object(m.a)(Object(m.a)({},r),{},{per_page:r.pageSize,page:r.current})},d||{})));case 1:case"end":return i.stop()}},n)})),L.apply(this,arguments)}function N(n,r,d){return T.apply(this,arguments)}function T(){return T=Object(s.a)(Object(a.a)().mark(function n(r,d,O){return Object(a.a)().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return p.abrupt("return",Object(j.i)("/api/admin/courses/".concat(r),Object(m.a)({method:"GET",useCache:O!==void 0?O:!0},d||{})));case 1:case"end":return p.stop()}},n)})),T.apply(this,arguments)}function G(n,r,d){return Q.apply(this,arguments)}function Q(){return Q=Object(s.a)(Object(a.a)().mark(function n(r,d,O){return Object(a.a)().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return p.abrupt("return",Object(j.i)("/api/admin/courses/".concat(r),Object(m.a)({method:"POST",headers:{"Content-Type":"application/json"},data:d},O||{})));case 1:case"end":return p.stop()}},n)})),Q.apply(this,arguments)}function z(n,r){return K.apply(this,arguments)}function K(){return K=Object(s.a)(Object(a.a)().mark(function n(r,d){return Object(a.a)().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.abrupt("return",Object(j.i)("/api/admin/courses",Object(m.a)({method:"POST",headers:{"Content-Type":"application/json"},data:r},d||{})));case 1:case"end":return i.stop()}},n)})),K.apply(this,arguments)}function ie(n,r,d){return Z.apply(this,arguments)}function Z(){return Z=Object(s.a)(Object(a.a)().mark(function n(r,d,O){return Object(a.a)().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return p.abrupt("return",Object(j.i)("/api/admin/courses/".concat(r,"/program"),Object(m.a)({method:"GET",useCache:!1,headers:{"Content-Type":"application/json"},data:d},O||{})));case 1:case"end":return p.stop()}},n)})),Z.apply(this,arguments)}function U(n,r){return E.apply(this,arguments)}function E(){return E=Object(s.a)(Object(a.a)().mark(function n(r,d){return Object(a.a)().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.abrupt("return",Object(j.i)("/api/admin/lessons",Object(m.a)({method:"POST",data:r},d||{})));case 1:case"end":return i.stop()}},n)})),E.apply(this,arguments)}function de(n,r,d){return t.apply(this,arguments)}function t(){return t=Object(s.a)(Object(a.a)().mark(function n(r,d,O){return Object(a.a)().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return p.abrupt("return",Object(j.i)("/api/admin/stats/course/".concat(r),Object(m.a)({method:"GET",data:d},O||{})));case 1:case"end":return p.stop()}},n)})),t.apply(this,arguments)}function be(n,r,d){return M.apply(this,arguments)}function M(){return M=Object(s.a)(Object(a.a)().mark(function n(r,d,O){return Object(a.a)().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return p.abrupt("return",Object(j.i)("/api/admin/lessons/".concat(r,"?_method=PUT"),Object(m.a)({method:"POST",data:d},O||{})));case 1:case"end":return p.stop()}},n)})),M.apply(this,arguments)}function me(n,r){return ne.apply(this,arguments)}function ne(){return ne=Object(s.a)(Object(a.a)().mark(function n(r,d){return Object(a.a)().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.abrupt("return",Object(j.i)("/api/admin/topics",Object(m.a)({method:"POST",data:r},d||{})));case 1:case"end":return i.stop()}},n)})),ne.apply(this,arguments)}function ge(n,r,d){return ue.apply(this,arguments)}function ue(){return ue=Object(s.a)(Object(a.a)().mark(function n(r,d,O){return Object(a.a)().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return p.abrupt("return",Object(j.i)("/api/admin/topics/".concat(r,"?_method=PUT"),Object(m.a)({method:"POST",data:d},O||{})));case 1:case"end":return p.stop()}},n)})),ue.apply(this,arguments)}function re(n,r){return F.apply(this,arguments)}function F(){return F=Object(s.a)(Object(a.a)().mark(function n(r,d){return Object(a.a)().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.abrupt("return",Object(j.i)("/api/admin/courses/sort",Object(m.a)({method:"POST",headers:{"Content-Type":"application/json"},data:r},d||{})));case 1:case"end":return i.stop()}},n)})),F.apply(this,arguments)}function je(n){return V.apply(this,arguments)}function V(){return V=Object(s.a)(Object(a.a)().mark(function n(r){return Object(a.a)().wrap(function(O){for(;;)switch(O.prev=O.next){case 0:return O.abrupt("return",Object(j.i)("/api/admin/courses/".concat(r),{method:"DELETE"}));case 1:case"end":return O.stop()}},n)})),V.apply(this,arguments)}function pe(n){return oe.apply(this,arguments)}function oe(){return oe=Object(s.a)(Object(a.a)().mark(function n(r){return Object(a.a)().wrap(function(O){for(;;)switch(O.prev=O.next){case 0:return O.abrupt("return",Object(j.i)("/api/admin/lessons/".concat(r),{method:"DELETE"}));case 1:case"end":return O.stop()}},n)})),oe.apply(this,arguments)}function fe(n){return J.apply(this,arguments)}function J(){return J=Object(s.a)(Object(a.a)().mark(function n(r){return Object(a.a)().wrap(function(O){for(;;)switch(O.prev=O.next){case 0:return O.abrupt("return",Object(j.i)("/api/admin/topics/".concat(r),{method:"DELETE"}));case 1:case"end":return O.stop()}},n)})),J.apply(this,arguments)}function ye(n,r,d){return ee.apply(this,arguments)}function ee(){return ee=Object(s.a)(Object(a.a)().mark(function n(r,d,O){return Object(a.a)().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return p.abrupt("return",Object(j.i)("/api/admin/courses/".concat(r,"/access"),Object(m.a)({method:"GET",useCache:!1,headers:{"Content-Type":"application/json"},data:d},O||{})));case 1:case"end":return p.stop()}},n)})),ee.apply(this,arguments)}function c(n,r,d){return u.apply(this,arguments)}function u(){return u=Object(s.a)(Object(a.a)().mark(function n(r,d,O){return Object(a.a)().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return p.abrupt("return",Object(j.i)("/api/admin/courses/".concat(r,"/access/set"),Object(m.a)({method:"POST",headers:{"Content-Type":"application/json"},data:d},O||{})));case 1:case"end":return p.stop()}},n)})),u.apply(this,arguments)}function h(n,r){return b.apply(this,arguments)}function b(){return b=Object(s.a)(Object(a.a)().mark(function n(r,d){return Object(a.a)().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.abrupt("return",Object(j.i)("/api/admin/topics/".concat(r,"/resources"),Object(m.a)({method:"GET",useCache:!1,headers:{"Content-Type":"application/json"}},d||{})));case 1:case"end":return i.stop()}},n)})),b.apply(this,arguments)}function l(n,r,d){return g.apply(this,arguments)}function g(){return g=Object(s.a)(Object(a.a)().mark(function n(r,d,O){return Object(a.a)().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return p.abrupt("return",Object(j.i)("/api/admin/topics/".concat(r,"/resources/").concat(d),Object(m.a)({method:"DELETE",headers:{"Content-Type":"application/json"}},O||{})));case 1:case"end":return p.stop()}},n)})),g.apply(this,arguments)}function $(n,r){return C.apply(this,arguments)}function C(){return C=Object(s.a)(Object(a.a)().mark(function n(r,d){return Object(a.a)().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.abrupt("return",Object(j.i)("/api/admin/courses/".concat(r,"/export"),Object(m.a)({method:"GET",useCache:!1},d||{})));case 1:case"end":return i.stop()}},n)})),C.apply(this,arguments)}function k(n,r){return w.apply(this,arguments)}function w(){return w=Object(s.a)(Object(a.a)().mark(function n(r,d){return Object(a.a)().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.abrupt("return",Object(j.i)("/api/admin/lessons/".concat(r,"/clone"),Object(m.a)({method:"POST",headers:{"Content-Type":"application/json"}},d||{})));case 1:case"end":return i.stop()}},n)})),w.apply(this,arguments)}function Oe(n,r){return he.apply(this,arguments)}function he(){return he=Object(s.a)(Object(a.a)().mark(function n(r,d){return Object(a.a)().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.abrupt("return",Object(j.i)("/api/admin/topics/".concat(r,"/clone"),Object(m.a)({method:"POST",headers:{"Content-Type":"application/json"}},d||{})));case 1:case"end":return i.stop()}},n)})),he.apply(this,arguments)}function ve(n,r){return Se.apply(this,arguments)}function Se(){return Se=Object(s.a)(Object(a.a)().mark(function n(r,d){return Object(a.a)().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.abrupt("return",Object(j.i)("/api/admin/courses/".concat(r,"/clone"),Object(m.a)({method:"GET",headers:{"Content-Type":"application/json"}},d||{})));case 1:case"end":return i.stop()}},n)})),Se.apply(this,arguments)}},HuWs:function(le,o,e){"use strict";e.d(o,"k",function(){return ce}),e.d(o,"i",function(){return N}),e.d(o,"c",function(){return G}),e.d(o,"o",function(){return z}),e.d(o,"e",function(){return ie}),e.d(o,"a",function(){return U}),e.d(o,"f",function(){return de}),e.d(o,"g",function(){return be}),e.d(o,"d",function(){return me}),e.d(o,"j",function(){return ge}),e.d(o,"l",function(){return re}),e.d(o,"b",function(){return je}),e.d(o,"n",function(){return pe}),e.d(o,"h",function(){return fe}),e.d(o,"m",function(){return ye});var a=e("qLMh"),m=e("k1fw"),s=e("9og8"),j=e("9kvl");function ce(c,u){return L.apply(this,arguments)}function L(){return L=Object(s.a)(Object(a.a)().mark(function c(u,h){return Object(a.a)().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.abrupt("return",Object(j.i)("/api/admin/questionnaire",Object(m.a)({method:"GET",useCache:!1,params:u},h||{})));case 1:case"end":return l.stop()}},c)})),L.apply(this,arguments)}function N(c,u){return T.apply(this,arguments)}function T(){return T=Object(s.a)(Object(a.a)().mark(function c(u,h){return Object(a.a)().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.abrupt("return",Object(j.i)("/api/admin/questionnaire/".concat(u),Object(m.a)({method:"GET",useCache:!1},h||{})));case 1:case"end":return l.stop()}},c)})),T.apply(this,arguments)}function G(c,u){return Q.apply(this,arguments)}function Q(){return Q=Object(s.a)(Object(a.a)().mark(function c(u,h){return Object(a.a)().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.abrupt("return",Object(j.i)("/api/admin/questionnaire",Object(m.a)({method:"POST",headers:{"Content-Type":"application/json"},data:u},h||{})));case 1:case"end":return l.stop()}},c)})),Q.apply(this,arguments)}function z(c,u,h){return K.apply(this,arguments)}function K(){return K=Object(s.a)(Object(a.a)().mark(function c(u,h,b){return Object(a.a)().wrap(function(g){for(;;)switch(g.prev=g.next){case 0:return g.abrupt("return",Object(j.i)("/api/admin/questionnaire/".concat(u),Object(m.a)({method:"PATCH",headers:{"Content-Type":"application/json"},data:h},b||{})));case 1:case"end":return g.stop()}},c)})),K.apply(this,arguments)}function ie(c,u){return Z.apply(this,arguments)}function Z(){return Z=Object(s.a)(Object(a.a)().mark(function c(u,h){return Object(a.a)().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.abrupt("return",Object(j.i)("/api/admin/questionnaire/".concat(u),Object(m.a)({method:"DELETE",useCache:!1},h||{})));case 1:case"end":return l.stop()}},c)})),Z.apply(this,arguments)}function U(c,u){return E.apply(this,arguments)}function E(){return E=Object(s.a)(Object(a.a)().mark(function c(u,h){return Object(a.a)().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.abrupt("return",Object(j.i)("/api/admin/question",Object(m.a)({method:"POST",headers:{"Content-Type":"application/json"},data:u},h||{})));case 1:case"end":return l.stop()}},c)})),E.apply(this,arguments)}function de(c,u,h){return t.apply(this,arguments)}function t(){return t=Object(s.a)(Object(a.a)().mark(function c(u,h,b){return Object(a.a)().wrap(function(g){for(;;)switch(g.prev=g.next){case 0:return g.abrupt("return",Object(j.i)("/api/admin/question/".concat(u),Object(m.a)({method:"PATCH",headers:{"Content-Type":"application/json"},data:h},b||{})));case 1:case"end":return g.stop()}},c)})),t.apply(this,arguments)}function be(c,u){return M.apply(this,arguments)}function M(){return M=Object(s.a)(Object(a.a)().mark(function c(u,h){return Object(a.a)().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.abrupt("return",Object(j.i)("/api/admin/question/".concat(u),Object(m.a)({method:"GET",useCache:!1},h||{})));case 1:case"end":return l.stop()}},c)})),M.apply(this,arguments)}function me(c,u){return ne.apply(this,arguments)}function ne(){return ne=Object(s.a)(Object(a.a)().mark(function c(u,h){return Object(a.a)().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.abrupt("return",Object(j.i)("/api/admin/question/".concat(u),Object(m.a)({method:"DELETE",useCache:!1},h||{})));case 1:case"end":return l.stop()}},c)})),ne.apply(this,arguments)}function ge(c){return ue.apply(this,arguments)}function ue(){return ue=Object(s.a)(Object(a.a)().mark(function c(u){return Object(a.a)().wrap(function(b){for(;;)switch(b.prev=b.next){case 0:return b.abrupt("return",Object(j.i)("/api/admin/questionnaire-models",Object(m.a)({method:"GET",useCache:!1},u||{})));case 1:case"end":return b.stop()}},c)})),ue.apply(this,arguments)}function re(c,u,h,b){return F.apply(this,arguments)}function F(){return F=Object(s.a)(Object(a.a)().mark(function c(u,h,b,l){return Object(a.a)().wrap(function($){for(;;)switch($.prev=$.next){case 0:return $.abrupt("return",Object(j.i)(h?"/api/admin/questionnaire/report/".concat(u,"/").concat(h,"/").concat(b):"/api/admin/questionnaire/report/".concat(u),Object(m.a)({method:"GET",useCache:!1},l||{})));case 1:case"end":return $.stop()}},c)})),F.apply(this,arguments)}function je(c,u,h,b,l){return V.apply(this,arguments)}function V(){return V=Object(s.a)(Object(a.a)().mark(function c(u,h,b,l,g){return Object(a.a)().wrap(function(C){for(;;)switch(C.prev=C.next){case 0:return C.abrupt("return",Object(j.i)("/api/admin/questionnaire/assign/".concat(u,"/").concat(h,"/").concat(b),Object(m.a)({method:"PATCH",headers:{"Content-Type":"application/json"},data:l},g||{})));case 1:case"end":return C.stop()}},c)})),V.apply(this,arguments)}function pe(c,u,h,b,l){return oe.apply(this,arguments)}function oe(){return oe=Object(s.a)(Object(a.a)().mark(function c(u,h,b,l,g){return Object(a.a)().wrap(function(C){for(;;)switch(C.prev=C.next){case 0:return C.abrupt("return",Object(j.i)("/api/admin/questionnaire/unassign/".concat(u,"/").concat(h,"/").concat(b),Object(m.a)({method:"DELETE",headers:{"Content-Type":"application/json"},data:l},g||{})));case 1:case"end":return C.stop()}},c)})),oe.apply(this,arguments)}function fe(c,u,h){return J.apply(this,arguments)}function J(){return J=Object(s.a)(Object(a.a)().mark(function c(u,h,b){return Object(a.a)().wrap(function(g){for(;;)switch(g.prev=g.next){case 0:return g.abrupt("return",Object(j.i)("/api/admin/question-answers/".concat(u),Object(m.a)({params:Object(m.a)(Object(m.a)({},h),{},{per_page:h.pageSize,page:h.current}),method:"GET",useCache:!1},b||{})));case 1:case"end":return g.stop()}},c)})),J.apply(this,arguments)}function ye(c,u,h){return ee.apply(this,arguments)}function ee(){return ee=Object(s.a)(Object(a.a)().mark(function c(u,h,b){return Object(a.a)().wrap(function(g){for(;;)switch(g.prev=g.next){case 0:return g.abrupt("return",Object(j.i)("/api/questionnaire/stars/".concat(u,"/").concat(h),Object(m.a)({method:"GET"},b||{})));case 1:case"end":return g.stop()}},c)})),ee.apply(this,arguments)}},Jfn2:function(le,o,e){"use strict";var a=e("k1fw"),m=e("XCrF"),s=e("1GRj"),j=e("PpiC"),ce=e("q1tI"),L=e.n(ce),N=e("nKUr"),T=e.n(N),G=["path","size","srcSizes","alt"],Q=function(K){var ie=K.path,Z=K.size,U=K.srcSizes,E=K.alt,de=E===void 0?"LMS Image":E,t=Object(j.a)(K,G),be="".concat(window.REACT_APP_API_URL||"https://api-stage.escolalms.com","/api/images/img?path=").concat(ie,"&w=").concat(U?U[0]:Z),M=U&&U.map(function(me){return"".concat(window.REACT_APP_API_URL||"https://api-stage.escolalms.com","/api/images/img?path=").concat(ie,"&w=").concat(me," ").concat(me,"w")});return Object(N.jsx)("div",{className:"escolalms-image",children:Object(N.jsx)(s.a,Object(a.a)({src:be,srcSet:M&&M.join(","),alt:de},t))})};o.a=Q},MTSD:function(le,o,e){},RyC9:function(le,o,e){"use strict";e.r(o);var a=e("+L6B"),m=e("2/Rp"),s=e("q1tI"),j=e.n(s),ce=e("tMyG"),L=e("k1fw"),N=e("oBTY"),T=e("tJVT"),G=e("fOrg"),Q=e("+KLJ"),z=e("T2oS"),K=e("W9HT"),ie=e("jrin"),Z=e("LDJE"),U=e("nhC9"),E=e("9kvl"),de=e("VK58"),t=e("nKUr"),be={isGroup:!0,xField:"date",yField:"value",seriesField:"name"},M=function(v){var y=v.metric,W=Object(s.useState)({mode:"init"}),H=Object(T.a)(W,2),D=H[0],R=H[1],q=Object(E.l)();return Object(s.useEffect)(function(){R({mode:"loading"}),Object(de.b)().then(function(I){I.success?R({mode:"loaded",value:Object.entries(I.data).reduce(function(f,x){return Object(L.a)(Object(L.a)({},f),{},Object(ie.a)({},q.formatMessage({id:x[0].split("\\").pop()}),x[1]))},{})}):R({mode:"error",error:I.message})}).catch(function(I){return R({mode:"error",error:I.toString()})})},[y]),Object(t.jsxs)(U.a,{headerBordered:!0,children:[D.mode==="loading"&&Object(t.jsx)(K.a,{}),D.mode==="loaded"&&Object(t.jsx)("div",{children:Object(t.jsx)(Z.a,Object(L.a)(Object(L.a)({},be),{},{data:[].concat(Object(N.a)(Object.entries(Object(L.a)({},D.value.ActiveUsers)).map(function(I){var f=Object(T.a)(I,2),x=f[0],A=f[1];return{date:x,name:"Active users",value:A}})),Object(N.a)(Object.entries(Object(L.a)({},D.value.NewUsers)).map(function(I){var f=Object(T.a)(I,2),x=f[0],A=f[1];return{date:x,name:"New users",value:A}})))}))}),D.mode==="error"&&Object(t.jsx)(Q.a,{message:D.error,type:"error"})]})},me=M,ne=function(v){var y=v.metric;return Object(t.jsxs)("div",{className:"dashboard-draggable__component",children:[Object(t.jsx)("h3",{children:Object(t.jsx)(E.a,{id:"current_user_status",defaultMessage:"Current User Status"})}),Object(t.jsx)("article",{children:Object(t.jsx)(me,{metric:y})})]})},ge=ne,ue=function(){return Object(t.jsxs)("div",{className:"dashboard-draggable__component",children:[Object(t.jsx)("h3",{children:Object(t.jsx)(E.a,{id:"customers"})}),Object(t.jsx)("article",{children:Object(t.jsx)("div",{children:"This Dashboard component is not yet implemented. Sorry"})})]})},re=ue,F=e("aHsQ"),je=e("sGsY"),V=e("w/VK"),pe=e("QzyV"),oe=e("Ws+v"),fe=function(v){var y=v.metric,W=Object(s.useState)({mode:"init"}),H=Object(T.a)(W,2),D=H[0],R=H[1];return Object(s.useEffect)(function(){R({mode:"loading"});var q=Object(V.a)({metric:y.bestRated}),I=Object(V.a)({metric:y.bestSelling});Promise.all([q,I]).then(function(f){if(f.length){var x=Object(T.a)(f,2),A=x[0],_=x[1];if(A.success&&_.success)R({mode:"loaded",value:{bestRated:A.data,bestSelling:_.data}});else{var P;R({mode:"error",error:(P=A.message)!==null&&P!==void 0?P:_.message})}}}).catch(function(f){return R({mode:"error",error:f.toString()})})},[y]),Object(t.jsxs)(U.a,{headerBordered:!0,children:[D.mode==="loading"&&Object(t.jsx)(K.a,{}),D.mode==="loaded"&&Object(t.jsxs)("div",{className:"statistics",children:[D.value.bestSelling.slice(0,2).map(function(q,I){var f=q.label;return Object(t.jsx)(je.a,{title:"".concat(I>0?"Top":"Best"," selling course"),prefix:Object(t.jsx)(pe.a,{style:{fontSize:"45px",color:"#FAD337"}}),value:f},f)}),D.value.bestRated.length>0&&Object(t.jsx)(je.a,{title:"Best rated course",prefix:Object(t.jsx)(pe.a,{style:{fontSize:"45px",color:"#FAD337"}}),value:D.value.bestRated[0].label})]}),D.mode==="error"&&Object(t.jsx)(Q.a,{message:D.error,type:"error"})]})},J=fe,ye=function(v){var y=v.metric;return Object(t.jsxs)("div",{className:"dashboard-draggable__component",children:[Object(t.jsx)("h3",{children:Object(t.jsx)(E.a,{id:"hall_of_fame",defaultMessage:"Hall of fame"})}),Object(t.jsx)("article",{children:Object(t.jsx)("div",{children:Object(t.jsx)(J,{metric:y})})})]})},ee=ye,c=e("R9oj"),u=e("ECub"),h=e("14J3"),b=e("BMrR"),l=e("pC0b"),g=e("GzdX"),$=e("qLMh"),C=e("9og8"),k=e("tU7J"),w=e("wFql"),Oe=e("VMEa"),he=e("yj/a"),ve=e("H6aw"),Se=e("HuWs"),n=e("I5X1"),r=e("MTSD"),d=e("c+yx"),O=function(){var v=w.a.Text,y=w.a.Title,W=Object(s.useState)([]),H=Object(T.a)(W,2),D=H[0],R=H[1],q=Object(s.useState)(!0),I=Object(T.a)(q,2),f=I[0],x=I[1],A=Object(n.a)("@@initialState"),_=A.initialState,P=Object(s.useState)(void 0),Y=Object(T.a)(P,2),X=Y[0],Ee=Y[1],Ce=Object(s.useState)(void 0),Pe=Object(T.a)(Ce,2),S=Pe[0],Ie=Pe[1];Object(s.useEffect)(function(){var ae=function(){var se=Object(C.a)(Object($.a)().mark(function xe(){var Te,Ae;return Object($.a)().wrap(function(Le){for(;;)switch(Le.prev=Le.next){case 0:return Le.next=2,Object(ve.e)({author_id:_==null||(Te=_.currentUser)===null||Te===void 0?void 0:Te.id});case 2:Ae=Le.sent,Ae.success&&(R(Ae.data),x(!1));case 4:case"end":return Le.stop()}},xe)}));return function(){return se.apply(this,arguments)}}();ae()},[]),Object(s.useEffect)(function(){x(!0);var ae=function(){var se=Object(C.a)(Object($.a)().mark(function xe(){var Te;return Object($.a)().wrap(function(Me){for(;;)switch(Me.prev=Me.next){case 0:return Me.next=2,Object(Se.m)("Course",Number(X));case 2:Te=Me.sent,Te.success&&Ie(Te.data),x(!1);case 5:case"end":return Me.stop()}},xe)}));return function(){return se.apply(this,arguments)}}();X&&ae()},[X]);var et=D.map(function(ae){return{label:ae.title,value:ae.id}}),tt=Object.keys((S==null?void 0:S.rates)||{}).sort().map(function(ae){var se=S==null?void 0:S.rates[ae];return se===0?0:se/(S==null?void 0:S.sum_rates)*100});return Object(t.jsxs)("div",{className:"dashboard-draggable__component",children:[Object(t.jsx)("h3",{children:Object(t.jsx)(E.a,{id:"ratings"})}),Object(t.jsxs)("article",{children:[Object(t.jsx)(v,{children:Object(t.jsx)(E.a,{id:"ratings_description"})}),Object(t.jsx)(Oe.a,{name:"ratings",onValuesChange:function(se,xe){Ee(xe.courses)},style:{marginTop:"32px"},submitter:!1,children:Object(t.jsxs)(j.a.Fragment,{children:[Object(t.jsx)(he.a,{name:"courses",options:et,fieldProps:{loading:f}}),f&&Object(t.jsx)(K.a,{}),!f&&X&&(S!=null&&S.count_answers&&(S==null?void 0:S.count_answers)>0?Object(t.jsxs)(t.Fragment,{children:[Object(t.jsxs)(b.a,{align:"middle",children:[Object(t.jsx)(y,{level:2,style:{marginBottom:0,marginRight:"12px"},children:Number(S.avg_rate).toFixed(2)}),Object(t.jsx)(g.a,{disabled:!0,defaultValue:Number(S.avg_rate)})]}),Object(t.jsx)("ul",{className:"dashboard-ratings-list",children:Object(d.d)(tt).map(function(ae,se){return Object(t.jsxs)("li",{className:"dashboard-ratings-list-item",children:[Object(t.jsx)(y,{level:5,children:se+1}),Object(t.jsx)(g.a,{disabled:!0,defaultValue:Number(se+1)}),Object(t.jsx)(y,{level:5,className:"dashboard-ratings-list-key",children:S.rates[se+1]}),Object(t.jsxs)(y,{level:5,className:"dashboard-ratings-list-percentage",children:[ae,"%"]})]},ae)}).reverse()})]}):Object(t.jsx)("ul",{className:"dashboard-ratings-list dashboard-ratings-list--empty",children:Object(t.jsx)(u.a,{})}))]})})]})]})},i=O,p=function(){return Object(t.jsxs)("div",{className:"dashboard-draggable__component",children:[Object(t.jsx)("h3",{children:Object(t.jsx)(E.a,{id:"sales"})}),Object(t.jsx)("article",{children:Object(t.jsx)("div",{children:"This Dashboard component is not yet implemented. Sorry"})})]})},$e=p,at=e("jCWc"),Ue=e("kPKH"),we=function(){var v=w.a.Title,y=w.a.Text;return Object(t.jsxs)("div",{className:"dashboard-draggable__component",children:[Object(t.jsx)("h3",{children:Object(t.jsx)(E.a,{id:"tutorial"})}),Object(t.jsx)("article",{children:Object(t.jsxs)(b.a,{align:"middle",children:[Object(t.jsxs)(Ue.a,{span:12,children:[Object(t.jsx)(v,{level:4,children:Object(t.jsx)(E.a,{id:"tutorial_card_left_title"})}),Object(t.jsx)(y,{children:Object(t.jsx)(E.a,{id:"tutorial_card_left_description"})})]}),Object(t.jsx)(Ue.a,{span:12,children:Object(t.jsx)(U.a,{bodyStyle:{background:"#FFED8E",borderRadius:"8px"},children:Object(t.jsxs)(b.a,{align:"middle",justify:"space-evenly",children:[Object(t.jsxs)("div",{children:[Object(t.jsx)(v,{level:5,children:Object(t.jsx)(E.a,{id:"tutorial_card_right_title"})}),Object(t.jsx)(y,{children:Object(t.jsx)(E.a,{id:"tutorial_card_right_description"})})]}),Object(t.jsx)("div",{children:Object(t.jsx)(m.a,{type:"primary",href:"https://docs.wellms.io/app-guide/",target:"_blank",children:Object(t.jsx)(E.a,{id:"learn_more"})})})]})})})]})})]})},He=we,Ke=e("55Ip"),nt=e("xvAK"),Ne=e("cYEv"),Ge=e("Jfn2"),Be=function(v,y){return v.length>y?v.substring(0,y-1)+"...":v},Qe=function(){var v=Object(s.useState)([]),y=Object(T.a)(v,2),W=y[0],H=y[1],D=Object(n.a)("@@initialState"),R=D.initialState,q=Object(s.useState)(!0),I=Object(T.a)(q,2),f=I[0],x=I[1];Object(s.useEffect)(function(){var P=function(){var Y=Object(C.a)(Object($.a)().mark(function X(){var Ee,Ce;return Object($.a)().wrap(function(S){for(;;)switch(S.prev=S.next){case 0:return S.next=2,Object(ve.e)({author_id:R==null||(Ee=R.currentUser)===null||Ee===void 0?void 0:Ee.id});case 2:Ce=S.sent,Ce.success&&(H(Ce.data),x(!1));case 4:case"end":return S.stop()}},X)}));return function(){return Y.apply(this,arguments)}}();P()},[]);var A=w.a.Text,_=w.a.Title;return f?Object(t.jsx)(K.a,{}):Object(t.jsxs)("div",{className:"dashboard-draggable__component",children:[Object(t.jsx)("h3",{children:Object(t.jsx)(E.a,{id:"your_courses"})}),Object(t.jsxs)("div",{className:"dashboard__card-group",children:[Object(t.jsx)("div",{className:"dashboard__card",style:{position:"sticky",left:0,zIndex:1},children:Object(t.jsx)(U.a,{layout:"center",children:Object(t.jsxs)(Ke.a,{to:"/courses/list/new",children:[Object(t.jsx)(Ne.a,{style:{fontSize:"52px",marginBottom:"36px"}}),Object(t.jsx)(_,{level:5,children:Object(t.jsx)(E.a,{id:"new_course"})})]},"new_course")})}),W.map(function(P){return Object(t.jsxs)("div",{className:"dashboard__card",children:[P.image_path&&Object(t.jsx)(Ge.a,{path:P.image_path,size:240,width:240,alt:P.title,className:"dashboard__card-img"}),Object(t.jsxs)(U.a,{actions:[Object(t.jsx)(Ke.a,{to:"/courses/list/".concat(P.id),children:Object(t.jsx)(m.a,{children:Object(t.jsx)(E.a,{id:"manage_course"})})},P.id)],children:[P.title&&Object(t.jsx)(_,{level:5,children:Be(P.title,40)}),P.summary&&Object(t.jsx)(A,{children:Be(P.summary,60)})]})]},P.id)})]})]})},ze=Qe,Fe=e("Ecy+"),Ve=function(v){var y=v.metric,W=v.asDonut,H=W===void 0?!1:W,D=v.customLabelTitle,R=v.customLabelContent;return Object(t.jsxs)("div",{className:"dashboard-draggable__component",children:[Object(t.jsx)("h3",{children:Object(t.jsx)(E.a,{id:y.split("\\").pop(),defaultMessage:y.split("\\").pop()})}),Object(t.jsx)("article",{children:Object(t.jsx)(Fe.a,{metric:y,header:!1,asDonut:H,customLabelTitle:D,customLabelContent:R})})]})},De=Ve,Je=e("3ouR"),We=e("ChGz"),rt=e("tW4V"),st=e("oidH"),ct=e("ZETH"),_e=Object(We.WidthProvider)(We.Responsive),Ye=2,Xe=150,te=function(v){return v},Re={"current-users":te({component:ge,w:1,h:4,maxH:4,props:{metric:"EscolaLms\\Reports\\Metrics\\CoursesMoneySpentMetric"}}),customers:te({component:re,w:1,h:1,maxH:1}),"hall-of-fame":te({component:ee,w:1,h:3,maxH:3,props:{metric:{bestSelling:"EscolaLms\\Reports\\Metrics\\CoursesTopSellingMetric",bestRated:"EscolaLms\\Reports\\Metrics\\CoursesBestRatedMetric"}}}),ratings:te({component:i,w:1,h:4,maxH:4,props:{}}),sales:te({component:$e,w:1,h:1,maxH:1}),tutorial:te({component:He,w:2,h:2,maxH:2}),"your-courses":te({component:ze,w:2,h:3,maxH:3,props:{}}),"pie-chart-CoursesMoneySpentMetric":te({w:1,h:4,maxH:4,component:De,props:{metric:"EscolaLms\\Reports\\Metrics\\CoursesMoneySpentMetric",asDonut:!0,customLabelTitle:function(v){return v.slice(0,8)+(v.length>8?"...":"")},customLabelContent:function(v){return"PLN ".concat(v.value)}}}),"pie-chart-CoursesPopularityMetric":te({w:1,h:4,maxH:4,component:De,props:{metric:"EscolaLms\\Reports\\Metrics\\CoursesPopularityMetric"}}),"pie-chart-CoursesSecondsSpentMetric":te({w:1,h:4,maxH:4,component:De,props:{metric:"EscolaLms\\Reports\\Metrics\\CoursesSecondsSpentMetric",asDonut:!0}}),"pie-chart-TutorsPopularityMetric":te({w:1,h:4,maxH:4,component:De,props:{metric:"EscolaLms\\Reports\\Metrics\\TutorsPopularityMetric"}}),add:te({w:1,h:1,maxH:1,component:De})},Ze=["tutorial","hall-of-fame","ratings","current-users","your-courses","pie-chart-CoursesMoneySpentMetric","pie-chart-CoursesPopularityMetric","pie-chart-CoursesSecondsSpentMetric","pie-chart-TutorsPopularityMetric"],ke=function(){var v=Object(s.useState)(Ze),y=Object(T.a)(v,2),W=y[0],H=y[1],D=Object(s.useCallback)(function(f){H(function(x){return x.filter(function(A){return A!==f})})},[]),R=Object(s.useMemo)(function(){var f=1,x=0;if("layout"in localStorage){var A=localStorage.getItem("layout");if(A){var _=JSON.parse(A);return _.value}}var P=W.map(function(Y){var X=Re[Y];return f=(f+X.w)%Ye,{i:Y,x:f,y:x++,w:X.w,h:X.h,maxH:X.maxH}});return{lg:P,md:P,sm:P,xs:P}},[W]);function q(f,x){localStorage&&localStorage.setItem(f,JSON.stringify({value:x}))}var I=function(x){var A=x.reduce(function(P,Y){var X=Y.i,Ee=Y.x,Ce=Y.y,Pe=Y.w,S=Y.h,Ie=Y.maxH;return[].concat(Object(N.a)(P),[{i:X,x:Ee,y:Ce,w:Pe,h:S,maxH:Ie}])},[]),_={lg:A,md:A,sm:A,xs:A};q("layout",_)};return Object(t.jsx)("main",{children:Object(t.jsx)(_e,{rowHeight:Xe,autoSize:!0,cols:{lg:2,md:2,sm:2},className:"layout dashboard-draggable",layouts:R,onLayoutChange:function(x){return I(x)},children:W.filter(function(f){return f!=="add"}).map(function(f){var x=Re[f].component;return Object(t.jsxs)("div",{children:[Object(t.jsx)(x,Object(L.a)({},Re[f].props)),Object(t.jsx)(m.a,{size:"small",type:"default",icon:Object(t.jsx)(Je.a,{}),className:"dashboard-draggable__remove_btn",onClick:function(){return D(f)}})]},f)})})})},qe=e("Fghh"),it=o.default=function(){var B,v,y=Object(n.a)("@@initialState"),W=y.initialState,H=W==null||(B=W.config)===null||B===void 0||(v=B.filter(function(q){return q.key==="frontURL"})[0])===null||v===void 0?void 0:v.data,D=localStorage.getItem("TOKEN"),R="".concat(H,"#/login").concat(D?"?token=".concat(D):"");return Object(t.jsx)(ce.a,{extra:H&&Object(t.jsx)(m.a,{type:"primary",href:R,target:"_blank",children:Object(t.jsx)(qe.a,{id:"go_to_platform"})}),children:Object(t.jsx)(ke,{})})}},"Ws+v":function(le,o,e){},ZETH:function(le,o,e){},"w/VK":function(le,o,e){"use strict";e.d(o,"a",function(){return ce});var a=e("qLMh"),m=e("k1fw"),s=e("9og8"),j=e("9kvl");function ce(N,T){return L.apply(this,arguments)}function L(){return L=Object(s.a)(Object(a.a)().mark(function N(T,G){return Object(a.a)().wrap(function(z){for(;;)switch(z.prev=z.next){case 0:return z.abrupt("return",Object(j.i)("/api/admin/reports/report",Object(m.a)({params:T,method:"GET",useCache:!1},G||{})));case 1:case"end":return z.stop()}},N)})),L.apply(this,arguments)}},xvAK:function(le,o,e){}}]);

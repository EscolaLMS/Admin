(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{"0TUn":function(F,O,e){"use strict";e.d(O,"c",function(){return p}),e.d(O,"a",function(){return s}),e.d(O,"b",function(){return i});var d=e("k1fw"),f=e("9og8"),M=e("WmNS"),n=e.n(M),m=e("9kvl");function p(h,g){return v.apply(this,arguments)}function v(){return v=Object(f.a)(n.a.mark(function h(g,l){return n.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.abrupt("return",Object(m.f)("/api/model-fields",Object(d.a)({method:"GET",params:g},l||{})));case 1:case"end":return o.stop()}},h)})),v.apply(this,arguments)}function s(h,g){return r.apply(this,arguments)}function r(){return r=Object(f.a)(n.a.mark(function h(g,l){return n.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.abrupt("return",Object(m.f)("/api/admin/model-fields",Object(d.a)({method:"POST",data:g},l||{})));case 1:case"end":return o.stop()}},h)})),r.apply(this,arguments)}function i(h,g){return E.apply(this,arguments)}function E(){return E=Object(f.a)(n.a.mark(function h(g,l){return n.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.abrupt("return",Object(m.f)("/api/admin/model-fields",Object(d.a)({method:"DELETE",data:g},l||{})));case 1:case"end":return o.stop()}},h)})),E.apply(this,arguments)}},"5ddx":function(F,O,e){"use strict";var d=e("9og8"),f=e("+L6B"),M=e("2/Rp"),n=e("tJVT"),m=e("WmNS"),p=e.n(m),v=e("q1tI"),s=e.n(v),r=e("9kvl"),i=e("Qiat"),E=e("VK58"),h=e("xvlK"),g=e("Xcxh"),l=e("y8nQ"),P=e("Vl3Y"),o=e("rmhi"),b=e("VMEa"),u=e("Qurx"),t=e("nKUr"),c=function(A){var U=Object(r.i)(),H=A.visible,y=A.onVisibleChange,Z=A.onFinish,k=P.a.useForm(),X=Object(n.a)(k,1),ee=X[0];return Object(v.useEffect)(function(){return function(){ee.resetFields()}},[]),Object(t.jsx)(o.a,{form:ee,title:U.formatMessage({id:"newSetting",defaultMessage:"newSetting"}),width:"30vw",visible:H,onVisibleChange:y,onFinish:Z,children:Object(t.jsxs)(b.a.Group,{children:[Object(t.jsx)(u.a,{label:Object(t.jsx)(r.a,{id:"key",defaultMessage:"key"}),rules:[{required:!0}],width:"md",name:"key"}),Object(t.jsx)(u.a,{label:Object(t.jsx)(r.a,{id:"value",defaultMessage:"value"}),rules:[{required:!0}],width:"md",name:"value"})]})})},j=c,_=function(A){var U=A.user,H=A.isProfile,y=H===void 0?!1:H,Z=Object(v.useRef)(),k=Object(r.i)(),X=Object(v.useState)(!1),ee=Object(n.a)(X,2),se=ee[0],ae=ee[1],le=Object(v.useState)("PATCH"),a=Object(n.a)(le,2),oe=a[0],ie=a[1],ue=[{title:Object(t.jsx)(r.a,{id:"key",defaultMessage:"key"}),dataIndex:"key",hideInSearch:!0},{title:Object(t.jsx)(r.a,{id:"value",defaultMessage:"value"}),dataIndex:"value",hideInSearch:!0}],ce=Object(v.useCallback)(function(J){var V=J&&Object.entries(J).map(function(re){return{key:re[0],value:re[1]}});return V},[U]);return Object(t.jsxs)(s.a.Fragment,{children:[Object(t.jsx)(i.a,{headerTitle:k.formatMessage({id:"menu.settings"}),actionRef:Z,rowKey:"id",search:!1,toolBarRender:y?function(){return[Object(t.jsxs)(M.a,{type:"primary",onClick:function(){ae(-1),ie("PATCH")},children:[Object(t.jsx)(h.a,{})," ",Object(t.jsx)(r.a,{id:"pages.searchTable.new"})]},"primary"),Object(t.jsxs)(M.a,{color:"yellow",type:"primary",onClick:function(){ae(-1),ie("PUT")},children:[Object(t.jsx)(g.a,{})," ",Object(t.jsx)(r.a,{id:"user.settings.overwrite"})]},"primary")]}:!1,request:function(){return Object(E.d)(Number(U)).then(function(V){return V.success?{data:ce(V.data)}:[]})},columns:ue}),Object(t.jsx)(j,{id:se,visible:Number.isInteger(se),onVisibleChange:function(V){return V===!1&&ae(!1)},onFinish:function(){var J=Object(d.a)(p.a.mark(function V(re){var $;return p.a.wrap(function(D){for(;;)switch(D.prev=D.next){case 0:return D.next=2,Object(E.g)(Number(U),oe,re);case 2:$=D.sent,$.success&&(ae(!1),Z.current&&Z.current.reload());case 4:case"end":return D.stop()}},V)}));return function(V){return J.apply(this,arguments)}}()})]})},x=O.a=_},C8Qx:function(F,O,e){"use strict";var d=e("YDZB"),f=e("FJDo"),M=e("tneF"),n=e("Qurx"),m=e("BiO0"),p=e("VMEa"),v=e("q1tI"),s=e.n(v),r=e("9kvl"),i=e("nKUr"),E=e.n(i),h=function(l){var P=l.field,o=Object(r.i)(),b=function(t){switch(t.type){case"number":return Object(i.jsx)(f.a,{width:"md",name:t.name,label:Object(i.jsx)(r.a,{id:t.name}),tooltip:Object(i.jsx)(r.a,{id:t.name}),placeholder:o.formatMessage({id:t.name,defaultMessage:t.name}),min:1,max:1024,fieldProps:{step:1}});case"boolean":return Object(i.jsx)(M.a,{name:t.name,children:Object(i.jsx)(r.a,{id:t.name})});case"varchar":return Object(i.jsx)(n.a,{width:"md",name:t.name,label:Object(i.jsx)(r.a,{id:t.name}),tooltip:Object(i.jsx)(r.a,{id:t.name}),placeholder:o.formatMessage({id:t.name}),required:!0});case"text":return Object(i.jsx)(m.a,{width:"md",name:t.name,label:Object(i.jsx)(r.a,{id:t.name}),tooltip:Object(i.jsx)(r.a,{id:t.name}),placeholder:o.formatMessage({id:t.name}),required:!0});case"json":return Object(i.jsx)(p.a.Item,{name:t.name,label:Object(i.jsx)(r.a,{id:t.name}),tooltip:Object(i.jsx)(r.a,{id:t.name}),valuePropName:"value",children:Object(i.jsx)(d.a,{})})}};return Object(i.jsx)(i.Fragment,{children:b(P)})};O.a=h},"DBJ/":function(F,O,e){"use strict";var d=e("y8nQ"),f=e("Vl3Y"),M=e("etVw"),n=e("q1tI"),m=e.n(n),p=e("9kvl"),v=e("qFDU"),s=e("nKUr"),r=e.n(s),i=function(h){var g=h.onChange,l=h.url,P=h.name,o=h.extra,b=h.accept,u=h.data,t=h.wrapInForm,c=t===void 0?!0:t,j=h.title,_=Object(p.i)();return u&&u[P]&&delete u[P],Object(s.jsx)(v.a,{condition:c,wrap:function(C){return Object(s.jsx)(f.a,{children:C})},children:Object(s.jsx)(M.a,{title:j||Object(s.jsx)(p.a,{id:"upload_click_here"}),placeholder:_.formatMessage({id:"upload_click_here"}),onChange:g,label:Object(s.jsx)(p.a,{id:"upload"}),max:2,fieldProps:{data:u,accept:b,name:P,headers:{Authorization:"Bearer ".concat(localStorage.getItem("TOKEN"))}},action:"".concat("https://api-stage.escolalms.com").concat(l),extra:o})})};O.a=i},"F/zT":function(F,O,e){"use strict";var d=e("wx14"),f=e("VTBJ"),M=e("Ff2n"),n=e("q1tI"),m=e.n(n),p=e("adzw"),v=["fieldProps","unCheckedChildren","checkedChildren","proFieldProps"],s=m.a.forwardRef(function(r,i){var E=r.fieldProps,h=r.unCheckedChildren,g=r.checkedChildren,l=r.proFieldProps,P=Object(M.a)(r,v);return m.a.createElement(p.a,Object(d.a)({valueType:"switch",mode:"edit",fieldProps:Object(f.a)({unCheckedChildren:h,checkedChildren:g},E),ref:i,valuePropName:"checked",proFieldProps:l,filedConfig:{valuePropName:"checked",ignoreWidth:!0}},P))});O.a=s},"G/Ub":function(F,O,e){"use strict";e.d(O,"d",function(){return p}),e.d(O,"a",function(){return s}),e.d(O,"b",function(){return i}),e.d(O,"c",function(){return h}),e.d(O,"e",function(){return l});var d=e("k1fw"),f=e("9og8"),M=e("WmNS"),n=e.n(M),m=e("9kvl");function p(o){return v.apply(this,arguments)}function v(){return v=Object(f.a)(n.a.mark(function o(b){return n.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",Object(m.f)("/api/admin/roles",Object(d.a)({method:"GET",useCache:!1},b||{})));case 1:case"end":return t.stop()}},o)})),v.apply(this,arguments)}function s(o,b){return r.apply(this,arguments)}function r(){return r=Object(f.a)(n.a.mark(function o(b,u){return n.a.wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.abrupt("return",Object(m.f)("/api/admin/roles",Object(d.a)({method:"POST",headers:{"Content-Type":"application/json"},data:b},u||{})));case 1:case"end":return c.stop()}},o)})),r.apply(this,arguments)}function i(o,b){return E.apply(this,arguments)}function E(){return E=Object(f.a)(n.a.mark(function o(b,u){return n.a.wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.abrupt("return",Object(m.f)("/api/admin/roles/".concat(b),Object(d.a)({method:"DELETE",headers:{"Content-Type":"application/json"}},u||{})));case 1:case"end":return c.stop()}},o)})),E.apply(this,arguments)}function h(o,b){return g.apply(this,arguments)}function g(){return g=Object(f.a)(n.a.mark(function o(b,u){return n.a.wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.abrupt("return",Object(m.f)("/api/admin/roles/".concat(b),Object(d.a)({method:"GET",useCache:!1},u||{})));case 1:case"end":return c.stop()}},o)})),g.apply(this,arguments)}function l(o,b,u){return P.apply(this,arguments)}function P(){return P=Object(f.a)(n.a.mark(function o(b,u,t){return n.a.wrap(function(j){for(;;)switch(j.prev=j.next){case 0:return j.abrupt("return",Object(m.f)("/api/admin/roles/".concat(b),Object(d.a)({method:"PATCH",headers:{"Content-Type":"application/json"},data:u},t||{})));case 1:case"end":return j.stop()}},o)})),P.apply(this,arguments)}},Jfn2:function(F,O,e){"use strict";var d=e("k1fw"),f=e("XCrF"),M=e("1GRj"),n=e("PpiC"),m=e("q1tI"),p=e.n(m),v=e("nKUr"),s=e.n(v),r=function(E){var h=E.path,g=E.size,l=E.srcSizes,P=E.alt,o=P===void 0?"LMS Image":P,b=Object(n.a)(E,["path","size","srcSizes","alt"]),u="".concat("https://api-stage.escolalms.com","/api/images/img?path=").concat(h,"&w=").concat(l?l[0]:g),t=l&&l.map(function(c){return"".concat("https://api-stage.escolalms.com","/api/images/img?path=").concat(h,"&w=").concat(c," ").concat(c,"w")});return Object(v.jsx)("div",{className:"escolalms-image",children:Object(v.jsx)(M.a,Object(d.a)({src:u,srcSet:t&&t.join(","),alt:o},b))})};O.a=r},JifO:function(F,O,e){"use strict";e.d(O,"c",function(){return p}),e.d(O,"a",function(){return s}),e.d(O,"b",function(){return i}),e.d(O,"d",function(){return h}),e.d(O,"f",function(){return l}),e.d(O,"e",function(){return o});var d=e("k1fw"),f=e("9og8"),M=e("WmNS"),n=e.n(M),m=e("9kvl");function p(u){return v.apply(this,arguments)}function v(){return v=Object(f.a)(n.a.mark(function u(t){return n.a.wrap(function(j){for(;;)switch(j.prev=j.next){case 0:return j.abrupt("return",Object(m.f)("/api/admin/categories/tree",Object(d.a)({method:"GET",useCache:!1},t||{})));case 1:case"end":return j.stop()}},u)})),v.apply(this,arguments)}function s(u){return r.apply(this,arguments)}function r(){return r=Object(f.a)(n.a.mark(function u(t){return n.a.wrap(function(j){for(;;)switch(j.prev=j.next){case 0:return j.abrupt("return",Object(m.f)("/api/admin/categories",Object(d.a)({method:"GET",useCache:!1},t||{})));case 1:case"end":return j.stop()}},u)})),r.apply(this,arguments)}function i(u,t){return E.apply(this,arguments)}function E(){return E=Object(f.a)(n.a.mark(function u(t,c){return n.a.wrap(function(_){for(;;)switch(_.prev=_.next){case 0:return _.abrupt("return",Object(m.f)("/api/admin/categories/".concat(t),Object(d.a)({method:"GET",useCache:!1},c||{})));case 1:case"end":return _.stop()}},u)})),E.apply(this,arguments)}function h(u,t){return g.apply(this,arguments)}function g(){return g=Object(f.a)(n.a.mark(function u(t,c){return n.a.wrap(function(_){for(;;)switch(_.prev=_.next){case 0:return _.abrupt("return",Object(m.f)("/api/admin/categories",Object(d.a)({method:"POST",headers:{"Content-Type":"application/json"},data:t},c||{})));case 1:case"end":return _.stop()}},u)})),g.apply(this,arguments)}function l(u,t,c){return P.apply(this,arguments)}function P(){return P=Object(f.a)(n.a.mark(function u(t,c,j){return n.a.wrap(function(x){for(;;)switch(x.prev=x.next){case 0:return x.abrupt("return",Object(m.f)("/api/admin/categories/".concat(t),Object(d.a)({method:"PUT",headers:{"Content-Type":"application/json"},data:c},j||{})));case 1:case"end":return x.stop()}},u)})),P.apply(this,arguments)}function o(u,t,c){return b.apply(this,arguments)}function b(){return b=Object(f.a)(n.a.mark(function u(t,c,j){return n.a.wrap(function(x){for(;;)switch(x.prev=x.next){case 0:return x.abrupt("return",Object(m.f)("/api/admin/categories/".concat(t),Object(d.a)({method:"DELETE",headers:{"Content-Type":"application/json"},data:c},j||{})));case 1:case"end":return x.stop()}},u)})),b.apply(this,arguments)}},TWax:function(F,O,e){"use strict";var d=e("ozfa"),f=e("MJZm"),M=e("T2oS"),n=e("W9HT"),m=e("tJVT"),p=e("q1tI"),v=e.n(p),s=e("JifO"),r=e("nKUr"),i=e.n(r),E=function g(l){return l.subcategories&&l.subcategories.length?{title:l.name,key:l.id,children:l.subcategories.map(function(P){return g(P)})}:{title:l.name,key:l.id}},h=function(l){var P=l.value,o=l.onChange,b=l.multiple,u=b===void 0?!0:b,t=Object(p.useState)([]),c=Object(m.a)(t,2),j=c[0],_=c[1];Object(p.useEffect)(function(){Object(s.c)().then(function(C){return _(C.data)})},[]);var x=Object(p.useMemo)(function(){return j.map(function(C){return E(C)})},[j]);return j.length===0?Object(r.jsx)(n.a,{}):Object(r.jsx)(f.a,{multiple:u,checkable:!0,checkStrictly:!0,defaultExpandAll:!0,style:{width:"100%"},checkedKeys:P,onCheck:function(A){var U=A.checked;return o&&Array.isArray(U)&&o(U)},treeData:x,disabled:j.length===0})};O.a=h},YDZB:function(F,O,e){"use strict";var d=e("2qtc"),f=e("kLXV"),M=e("7Kak"),n=e("9yH6"),m=e("+L6B"),p=e("2/Rp"),v=e("tJVT"),s=e("q1tI"),r=e.n(s),i=e("gU/Y"),E=e("9kvl"),h=e("u95b"),g=e.n(h),l=e("nKUr"),P=e.n(l),o=function(u){var t=u.value,c=u.onChange,j=Object(s.useState)(!1),_=Object(v.a)(j,2),x=_[0],C=_[1],A=Object(s.useCallback)(function(){C(!1)},[]),U=Object(s.useState)("code"),H=Object(v.a)(U,2),y=H[0],Z=H[1];return Object(l.jsxs)("div",{children:[Object(l.jsx)(p.a,{type:"primary",onClick:function(){return C(!0)},size:"small",children:Object(l.jsx)(E.a,{id:"json_editor"})}),Object(l.jsxs)(f.a,{title:"JSON",visible:x,onOk:A,onCancel:A,children:[Object(l.jsxs)(n.a.Group,{onChange:function(X){return Z(X.target.value)},value:y,children:[Object(l.jsx)(n.a,{value:"tree",children:"tree"}),Object(l.jsx)(n.a,{value:"view",children:"view"}),Object(l.jsx)(n.a,{value:"form",children:"form"}),Object(l.jsx)(n.a,{value:"code",children:"code"}),Object(l.jsx)(n.a,{value:"text",children:"text"})]}),Object(l.jsx)(i.a,{mode:y,value:t,onChange:function(X){return c&&c(X)}},y)]})]})};O.a=o},"c+yx":function(F,O,e){"use strict";e.d(O,"b",function(){return m}),e.d(O,"a",function(){return p}),e.d(O,"d",function(){return v}),e.d(O,"c",function(){return s});var d=/(((^https?:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+(?::\d+)?|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)$/,f=function(i){return d.test(i)},M=function(){return window.location.hostname==="preview.pro.ant.design"},n=function(){var i="production";return i==="development"?!0:M()},m=function(){var i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",E=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"";return i.toLowerCase().includes(E.toLowerCase())},p=function(i){return typeof i=="object"?i.id:i},v=function(i){return typeof i=="object"?i.title:i},s=function(i){return i==null?void 0:i.split("storage")[1]}},weGn:function(F,O,e){"use strict";e.r(O);var d=e("k1fw"),f=e("9og8"),M=e("tJVT"),n=e("WmNS"),m=e.n(n),p=e("nhC9"),v=e("Ty5D"),s=e("9kvl"),r=e("tMyG"),i=e("tU7J"),E=e("wFql"),h=e("DYRE"),g=e("zeV3"),l=e("y8nQ"),P=e("Vl3Y"),o=e("+L6B"),b=e("2/Rp"),u=e("T2oS"),t=e("W9HT"),c=e("miYZ"),j=e("tsqr"),_=e("q1tI"),x=e.n(_),C=e("VMEa"),A=e("Qurx"),U=e("F/zT"),H=e("tneF"),y=e("VK58"),Z=e("DBJ/"),k=e("Jfn2"),X=e("G/Ub"),ee=e("0TUn"),se=function(N){var D=Object(_.useState)({state:"initial"}),T=Object(M.a)(D,2),z=T[0],W=T[1];return Object(_.useEffect)(function(){W({state:"loading"}),Object(ee.c)({class_type:N}).then(function(Q){Q.success&&W({state:"loaded",list:Q.data})})},[N]),z},ae=se,le=e("C8Qx"),a=e("nKUr"),oe=function($){var N,D=$.isNew,T=$.data,z=$.setData,W=Object(s.i)(),Q=Object(v.h)(),B=Q.user,I=ae("EscolaLms\\Auth\\Models\\User"),Y=Object(_.useState)(),ne=Object(M.a)(Y,2),G=ne[0],q=ne[1],me=Object(_.useCallback)(Object(f.a)(m.a.mark(function S(){var R,K;return m.a.wrap(function(L){for(;;)switch(L.prev=L.next){case 0:return L.next=2,Object(X.d)();case 2:return R=L.sent,L.next=5,R;case 5:K=L.sent,K.success&&q(K.data);case 7:case"end":return L.stop()}},S)})),[B]),te=function(){Object(y.c)(Number(B)).then(function(R){R.success&&(j.default.success(R.message),z(function(K){return Object(d.a)(Object(d.a)({},K),{},{avatar:"",path_avatar:""})}))}).catch(function(R){j.default.error(R.data.message)})};Object(_.useEffect)(function(){me()},[B]);var je=Object(_.useMemo)(function(){return{onFinish:function(){var S=Object(f.a)(m.a.mark(function K(Oe){var L,de;return m.a.wrap(function(w){for(;;)switch(w.prev=w.next){case 0:if(de=Object(d.a)({},Oe),!D){w.next=8;break}return w.next=4,Object(y.a)(de);case 4:L=w.sent,L.success&&s.d.push("/users/".concat(L.data.id,"/user_info")),w.next=11;break;case 8:return w.next=10,Object(y.j)(Number(B),de);case 10:L=w.sent;case 11:j.default.success(L.message);case 12:case"end":return w.stop()}},K)}));function R(K){return S.apply(this,arguments)}return R}(),initialValues:T}},[T,B]);return T?Object(a.jsxs)(C.a,Object(d.a)(Object(d.a)({},je),{},{children:[Object(a.jsxs)(C.a.Group,{children:[Object(a.jsx)(A.a,{width:"md",name:"first_name",label:Object(a.jsx)(s.a,{id:"first_name"}),tooltip:Object(a.jsx)(s.a,{id:"first_name"}),placeholder:W.formatMessage({id:"first_name"}),required:!0}),Object(a.jsx)(A.a,{width:"md",name:"last_name",label:Object(a.jsx)(s.a,{id:"last_name"}),tooltip:Object(a.jsx)(s.a,{id:"last_name"}),placeholder:W.formatMessage({id:"last_name"}),required:!0}),Object(a.jsx)(A.a,{width:"md",name:"email",label:Object(a.jsx)(s.a,{id:"email"}),tooltip:Object(a.jsx)(s.a,{id:"email"}),placeholder:W.formatMessage({id:"email"}),required:!0}),Object(a.jsx)(A.a.Password,{width:"md",name:"password",label:Object(a.jsx)(s.a,{id:"password"}),tooltip:Object(a.jsx)(s.a,{id:"password"}),placeholder:W.formatMessage({id:"password"}),required:D}),I.state==="loaded"&&I.list.map(function(S){return Object(a.jsx)(le.a,{field:S})})]}),Object(a.jsxs)(C.a.Group,{children:[!D&&Object(a.jsxs)(g.b,{direction:"vertical",children:[!((N=T.roles)!==null&&N!==void 0&&N.includes("admin"))&&Object(a.jsx)(U.a,{initialValue:T.is_active,name:"email_verified",label:Object(a.jsx)(s.a,{id:"is_email_verified"})}),Object(a.jsx)(P.a.Item,{noStyle:!0,shouldUpdate:!0,children:function(R){return R.getFieldValue("email_verified")?Object(a.jsx)(x.a.Fragment,{}):Object(a.jsx)(b.a,{size:"small",onClick:function(){Object(y.f)(R.getFieldValue("email")).then(function(){j.default.success(W.formatMessage({id:"email_resend"}))})},children:Object(a.jsx)(s.a,{id:"resend"})})}})]}),Object(a.jsx)(U.a,{name:"is_active",label:Object(a.jsx)(s.a,{id:"is_active"})}),G&&Object(a.jsx)(H.a.Group,{name:"roles",layout:"horizontal",label:Object(a.jsx)(s.a,{id:"roles"}),options:G.filter(function(S){return S.guard_name!=="web"}).map(function(S){return S.name})})]}),!D&&Object(a.jsxs)(C.a.Group,{children:[Object(a.jsx)(C.a.Item,{name:"avatar",label:Object(a.jsx)(s.a,{id:"avatar"}),children:T.path_avatar?Object(a.jsx)(k.a,{path:T.path_avatar,size:600,width:200}):Object(a.jsx)(E.a,{children:Object(a.jsx)(s.a,{id:"avatar_placeholder"})})}),Object(a.jsx)(P.a.Item,{noStyle:!0,shouldUpdate:!0,children:function(){return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(Z.a,{wrapInForm:!1,url:"/api/admin/users/".concat(B,"/avatar"),name:"avatar",accept:"image/*",onChange:function(K){K.file.status==="done"&&K.file.response.success&&z(K.file.response.data)}}),Object(a.jsx)(b.a,{danger:!0,onClick:te,children:Object(a.jsx)(s.a,{id:"delete"})})]})}})]})]})):Object(a.jsx)(t.a,{})},ie=e("5ddx"),ue=e("TWax"),ce=function(N){var D=N.data,T=Object(_.useMemo)(function(){return{onFinish:function(){var z=Object(f.a)(m.a.mark(function Q(B){var I,Y;return m.a.wrap(function(G){for(;;)switch(G.prev=G.next){case 0:return I=Object(d.a)({},B),G.next=3,Object(y.k)(Number(D==null?void 0:D.id),I);case 3:Y=G.sent,j.default.success(Y.message);case 5:case"end":return G.stop()}},Q)}));function W(Q){return z.apply(this,arguments)}return W}(),initialValues:D}},[D]);return Object(a.jsx)(C.a,Object(d.a)(Object(d.a)({},T),{},{children:Object(a.jsx)(C.a.Item,{label:Object(a.jsx)(s.a,{id:"categories"}),name:"interests",valuePropName:"value",children:Object(a.jsx)(ue.a,{})})}))},J=ce,V=e("c+yx"),re=O.default=function(){var $=Object(v.h)(),N=Object(_.useState)(),D=Object(M.a)(N,2),T=D[0],z=D[1],W=Object(s.i)(),Q=$.tab,B=Q===void 0?"user_info":Q,I=$.user,Y=typeof I=="undefined",ne=Object(_.useCallback)(Object(f.a)(m.a.mark(function G(){var q;return m.a.wrap(function(te){for(;;)switch(te.prev=te.next){case 0:return te.next=2,Object(y.l)(Number(I));case 2:q=te.sent,q.success&&z(Object(d.a)(Object(d.a)({},q.data),{},{interests:q.data.interests.map(V.a)}));case 4:case"end":return te.stop()}},G)})),[I]);return Object(_.useEffect)(function(){if(Y){z({});return}ne()},[I,ne]),Object(a.jsx)(r.a,{title:Object(a.jsx)(s.a,{id:"settings"}),header:{breadcrumb:{routes:[{path:"/users/".concat(I,"/user_info"),breadcrumbName:W.formatMessage({id:"menu.Settings"})},{path:String(B),breadcrumbName:String(B)}]}},children:Object(a.jsxs)(p.a,{tabs:{type:"card",activeKey:B,onChange:function(q){return s.d.push("/users/".concat(I,"/").concat(q))}},children:[Object(a.jsx)(p.a.TabPane,{tab:Y?Object(a.jsx)(s.a,{id:"new_user"}):Object(a.jsx)(s.a,{id:"edit_user"}),children:Object(a.jsx)(oe,{isNew:Y,data:T,setData:z})},"user_info"),!Y&&Object(a.jsx)(p.a.TabPane,{tab:Object(a.jsx)("span",{children:Object(a.jsx)(s.a,{id:"categories"})}),children:(T==null?void 0:T.id)&&Object(a.jsx)(J,{data:T})},"categories"),!Y&&Object(a.jsx)(p.a.TabPane,{tab:Object(a.jsx)("span",{children:Object(a.jsx)(s.a,{id:"user.settings"})}),children:I&&Object(a.jsx)(ie.a,{user:I,isProfile:!1})},"settings")]})})}}}]);

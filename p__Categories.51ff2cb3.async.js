(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{BBow:function($,m,e){"use strict";e.d(m,"a",function(){return v});var v=function(A){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"-",o=A.toString().toLowerCase().trim(),g=[{to:"a",from:"[\xC0\xC1\xC2\xC3\xC5\xC6\u0100\u0102\u0104\u1EA0\u1EA2\u1EA4\u1EA6\u1EA8\u1EAA\u1EAC\u1EAE\u1EB0\u1EB2\u1EB4\u1EB6]"},{to:"ae",from:"[\xC4]"},{to:"c",from:"[\xC7\u0106\u0108\u010C]"},{to:"d",from:"[\xD0\u010E\u0110\xDE]"},{to:"e",from:"[\xC8\xC9\xCA\xCB\u0112\u0114\u0116\u0118\u011A\u1EB8\u1EBA\u1EBC\u1EBE\u1EC0\u1EC2\u1EC4\u1EC6]"},{to:"g",from:"[\u011C\u011E\u0122\u01F4]"},{to:"h",from:"[\u0124\u1E26]"},{to:"i",from:"[\xCC\xCD\xCE\xCF\u0128\u012A\u012E\u0130\u1EC8\u1ECA]"},{to:"j",from:"[\u0134]"},{to:"ij",from:"[\u0132]"},{to:"k",from:"[\u0136]"},{to:"l",from:"[\u0139\u013B\u013D\u0141]"},{to:"m",from:"[\u1E3E]"},{to:"n",from:"[\xD1\u0143\u0145\u0147]"},{to:"o",from:"[\xD2\xD3\xD4\xD5\xD8\u014C\u014E\u0150\u1ECC\u1ECE\u1ED0\u1ED2\u1ED4\u1ED6\u1ED8\u1EDA\u1EDC\u1EDE\u1EE0\u1EE2\u01EA\u01EC\u01A0]"},{to:"oe",from:"[\u0152\xD6]"},{to:"p",from:"[\u1E55]"},{to:"r",from:"[\u0154\u0156\u0158]"},{to:"s",from:"[\u015A\u015C\u015E\u0160]"},{to:"ss",from:"[\xDF]"},{to:"t",from:"[\u0162\u0164]"},{to:"u",from:"[\xD9\xDA\xDB\u0168\u016A\u016C\u016E\u0170\u0172\u1EE4\u1EE6\u1EE8\u1EEA\u1EEC\u1EEE\u1EF0\u01AF]"},{to:"ue",from:"[\xDC]"},{to:"w",from:"[\u1E82\u0174\u1E80\u1E84]"},{to:"x",from:"[\u1E8D]"},{to:"y",from:"[\xDD\u0176\u0178\u1EF2\u1EF4\u1EF6\u1EF8]"},{to:"z",from:"[\u0179\u017B\u017D]"},{to:"-",from:"[\xB7/_,:;']"}];return g.forEach(function(P){o=o.replace(new RegExp(P.from,"gi"),P.to)}),o=o.toString().toLowerCase().replace(/\s+/g,"-").replace(/&/g,"-and-").replace(/[^\w-]+/g,"").replace(/--+/g,"-").replace(/^-+/,"").replace(/-+$/,""),typeof r!="undefined"&&r!=="-"&&(o=o.replace(/-/g,r)),o}},CEpB:function($,m,e){"use strict";var v=e("nRaC"),j=e("5RzL"),A=e("tJVT"),r=e("q1tI"),o=e.n(r),g=e("JifO"),P=e("9kvl"),C=e("nKUr"),h=e.n(C),B=function O(n){return n.subcategories&&n.subcategories.length?{title:n.name,value:n.id,children:n.subcategories.map(function(M){return O(M)})}:{title:n.name,value:n.id}},T=function(n){var M=n.value,l=n.onChange,R=n.multiple,x=R===void 0?!1:R,i=Object(r.useState)([]),a=Object(A.a)(i,2),c=a[0],u=a[1];Object(r.useEffect)(function(){Object(g.c)().then(function(E){return u(E.data)})},[]);var d=Object(r.useMemo)(function(){return c.map(function(E){return B(E)})},[c]);return Object(C.jsx)(j.a,{loading:c.length===0,multiple:x,showSearch:!0,style:{width:"100%"},value:M,dropdownStyle:{maxHeight:400,overflow:"auto"},placeholder:Object(C.jsx)(P.a,{id:"select",defaultMessage:"Please select"}),allowClear:!0,treeDefaultExpandAll:!0,onChange:l,treeData:d,disabled:c.length===0})};m.a=T},"F/zT":function($,m,e){"use strict";var v=e("wx14"),j=e("VTBJ"),A=e("Ff2n"),r=e("q1tI"),o=e.n(r),g=e("adzw"),P=["fieldProps","unCheckedChildren","checkedChildren","proFieldProps"],C=o.a.forwardRef(function(h,B){var T=h.fieldProps,O=h.unCheckedChildren,n=h.checkedChildren,M=h.proFieldProps,l=Object(A.a)(h,P);return o.a.createElement(g.a,Object(v.a)({valueType:"switch",mode:"edit",fieldProps:Object(j.a)({unCheckedChildren:O,checkedChildren:n},T),ref:B,valuePropName:"checked",proFieldProps:M,filedConfig:{valuePropName:"checked",ignoreWidth:!0}},l))});m.a=C},JifO:function($,m,e){"use strict";e.d(m,"c",function(){return g}),e.d(m,"a",function(){return C}),e.d(m,"b",function(){return B}),e.d(m,"d",function(){return O}),e.d(m,"f",function(){return M}),e.d(m,"e",function(){return R});var v=e("k1fw"),j=e("9og8"),A=e("WmNS"),r=e.n(A),o=e("9kvl");function g(i){return P.apply(this,arguments)}function P(){return P=Object(j.a)(r.a.mark(function i(a){return r.a.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.abrupt("return",Object(o.f)("/api/admin/categories/tree",Object(v.a)({method:"GET",useCache:!1},a||{})));case 1:case"end":return u.stop()}},i)})),P.apply(this,arguments)}function C(i){return h.apply(this,arguments)}function h(){return h=Object(j.a)(r.a.mark(function i(a){return r.a.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.abrupt("return",Object(o.f)("/api/admin/categories",Object(v.a)({method:"GET",useCache:!1},a||{})));case 1:case"end":return u.stop()}},i)})),h.apply(this,arguments)}function B(i,a){return T.apply(this,arguments)}function T(){return T=Object(j.a)(r.a.mark(function i(a,c){return r.a.wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.abrupt("return",Object(o.f)("/api/admin/categories/".concat(a),Object(v.a)({method:"GET",useCache:!1},c||{})));case 1:case"end":return d.stop()}},i)})),T.apply(this,arguments)}function O(i,a){return n.apply(this,arguments)}function n(){return n=Object(j.a)(r.a.mark(function i(a,c){return r.a.wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.abrupt("return",Object(o.f)("/api/admin/categories",Object(v.a)({method:"POST",headers:{"Content-Type":"application/json"},data:a},c||{})));case 1:case"end":return d.stop()}},i)})),n.apply(this,arguments)}function M(i,a,c){return l.apply(this,arguments)}function l(){return l=Object(j.a)(r.a.mark(function i(a,c,u){return r.a.wrap(function(E){for(;;)switch(E.prev=E.next){case 0:return E.abrupt("return",Object(o.f)("/api/admin/categories/".concat(a),Object(v.a)({method:"PUT",headers:{"Content-Type":"application/json"},data:c},u||{})));case 1:case"end":return E.stop()}},i)})),l.apply(this,arguments)}function R(i,a,c){return x.apply(this,arguments)}function x(){return x=Object(j.a)(r.a.mark(function i(a,c,u){return r.a.wrap(function(E){for(;;)switch(E.prev=E.next){case 0:return E.abrupt("return",Object(o.f)("/api/admin/categories/".concat(a),Object(v.a)({method:"DELETE",headers:{"Content-Type":"application/json"},data:c},u||{})));case 1:case"end":return E.stop()}},i)})),x.apply(this,arguments)}},N0Of:function($,m,e){"use strict";e.r(m);var v=e("P2fV"),j=e("NJEC"),A=e("5Dmo"),r=e("3S7+"),o=e("+L6B"),g=e("2/Rp"),P=e("+BJd"),C=e("mr32"),h=e("tJVT"),B=e("k1fw"),T=e("miYZ"),O=e("tsqr"),n=e("9og8"),M=e("WmNS"),l=e.n(M),R=e("xvlK"),x=e("q1tI"),i=e.n(x),a=e("9kvl"),c=e("tMyG"),u=e("Qiat"),d=e("JifO"),E=e("y8nQ"),Y=e("Vl3Y"),H=e("rmhi"),G=e("Qurx"),Z=e("F/zT"),X=e("VMEa"),k=e("BBow"),q=e("CEpB"),t=e("nKUr"),ee=function(D){var b=Object(a.i)(),I=D.visible,f=D.onVisibleChange,K=D.onFinish,s=D.id,p=Y.a.useForm(),z=Object(h.a)(p,1),F=z[0];return Object(x.useEffect)(function(){typeof s=="number"&&s>0?Object(d.b)(s).then(function(U){F.setFieldsValue(U.data)}):F.resetFields()},[s,F]),Object(t.jsxs)(H.a,{form:F,title:b.formatMessage({id:typeof s=="number"&&s>0?"editCategory":"newCategory",defaultMessage:typeof s=="number"&&s>0?"editCategory":"newCategory"}),width:"400px",visible:I,onVisibleChange:f,onFinish:K,onValuesChange:function(w){w.name&&F.setFieldsValue({slug:Object(k.a)(w.name)})},children:[Object(t.jsx)(G.a,{label:Object(t.jsx)(a.a,{id:"name",defaultMessage:"name"}),rules:[{required:!0}],width:"md",name:"name"}),Object(t.jsx)(G.a,{width:"md",name:"slug",label:Object(t.jsx)(a.a,{id:"slug"}),placeholder:b.formatMessage({id:"slug"}),disabled:!0,required:!0}),Object(t.jsx)(Z.a,{name:"is_active",label:Object(t.jsx)(a.a,{id:"is_active",defaultMessage:"is_active"})}),Object(t.jsx)(X.a.Item,{name:"parent_id",label:Object(t.jsx)(a.a,{id:"parent_category",defaultMessage:"parent_category"}),valuePropName:"value",children:Object(t.jsx)(q.a,{})})]})},te=ee,ae=e("G3dp"),Q=e("/MfK"),re=function(){var N=Object(n.a)(l.a.mark(function D(b,I,f){var K;return l.a.wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return K=O.default.loading(b.formatMessage({id:"loading"})),p.prev=1,p.next=4,f&&f!==-1?Object(d.f)(f,Object(B.a)({},I)):Object(d.d)(Object(B.a)({},I));case 4:return K(),O.default.success(b.formatMessage({id:"success"})),p.abrupt("return",!0);case 9:return p.prev=9,p.t0=p.catch(1),K(),O.default.error(O.default.success(b.formatMessage({id:"error"}))),p.abrupt("return",!1);case 14:case"end":return p.stop()}},D,null,[[1,9]])}));return function(b,I,f){return N.apply(this,arguments)}}(),ne=function(){var N=Object(n.a)(l.a.mark(function D(b,I){var f;return l.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return f=O.default.loading(b.formatMessage({id:"loading"})),s.prev=1,s.next=4,Object(d.e)(I);case 4:return f(),O.default.success(b.formatMessage({id:"success"})),s.abrupt("return",!0);case 9:return s.prev=9,s.t0=s.catch(1),f(),O.default.error(b.formatMessage({id:"error"})),s.abrupt("return",!1);case 14:case"end":return s.stop()}},D,null,[[1,9]])}));return function(b,I){return N.apply(this,arguments)}}(),se=function(){var D=Object(x.useState)(!1),b=Object(h.a)(D,2),I=b[0],f=b[1],K=Object(x.useState)([]),s=Object(h.a)(K,2),p=s[0],z=s[1],F=Object(x.useRef)(),U=Object(a.i)(),w=Object(x.useCallback)(function(L){return!!p.some(function(y){return y.parent_id===L})},[p]),oe=[{title:Object(t.jsx)(a.a,{id:"ID",defaultMessage:"ID"}),dataIndex:"id",hideInSearch:!0},{title:Object(t.jsx)(a.a,{id:"name",defaultMessage:"name"}),dataIndex:"name",hideInSearch:!0},{title:Object(t.jsx)(a.a,{id:"full_name",defaultMessage:"full_name"}),dataIndex:"name_with_breadcrumbs",hideInSearch:!0},{title:Object(t.jsx)(a.a,{id:"slug",defaultMessage:"slug"}),dataIndex:"slug",hideInSearch:!0},{title:Object(t.jsx)(a.a,{id:"pages.searchTable.titleStatus",defaultMessage:"\u72B6\u6001"}),dataIndex:"is_active",hideInForm:!0,hideInSearch:!0,render:function(y,W){return W.is_active?Object(t.jsx)(C.a,{color:"success",children:Object(t.jsx)(a.a,{id:"Active",defaultMessage:"Active"})}):Object(t.jsx)(C.a,{color:"error",children:Object(t.jsx)(a.a,{id:"Inactive",defaultMessage:"Inactive"})})}},{hideInSearch:!0,title:Object(t.jsx)(a.a,{id:"parent_id",defaultMessage:"parent_id"}),dataIndex:"parent_id",tip:"name key",render:function(y,W){var S=p.find(function(_){return _.id===W.parent_id});return S?Object(t.jsx)(g.a,{size:"small",onClick:function(){return f(S.id)},children:S.name}):Object(t.jsx)(i.a.Fragment,{children:Object(t.jsx)(a.a,{id:"none"})})}},{hideInSearch:!0,title:Object(t.jsx)(a.a,{id:"pages.searchTable.titleOption",defaultMessage:"\u64CD\u4F5C"}),dataIndex:"option",valueType:"option",render:function(y,W){return[Object(t.jsx)(r.a,{title:Object(t.jsx)(a.a,{id:"edit",defaultMessage:"edit"}),children:Object(t.jsx)(g.a,{type:"primary",icon:Object(t.jsx)(ae.a,{}),onClick:function(){return f(W.id)}})},"edit"),w(W.id)?Object(t.jsx)(r.a,{title:Object(t.jsx)(a.a,{id:"cantDelete",defaultMessage:"You can't delete this category because it's parent to others"}),children:Object(t.jsx)(g.a,{disabled:!0,type:"primary",icon:Object(t.jsx)(Q.a,{}),danger:!0})},"delete"):Object(t.jsx)(j.a,{title:Object(t.jsx)(a.a,{id:"deleteQuestion",defaultMessage:"Are you sure to delete this record?"}),onConfirm:Object(n.a)(l.a.mark(function S(){var _;return l.a.wrap(function(J){for(;;)switch(J.prev=J.next){case 0:return J.next=2,ne(U,W.id);case 2:_=J.sent,_&&(f(!1),F.current&&F.current.reload());case 4:case"end":return J.stop()}},S)})),okText:Object(t.jsx)(a.a,{id:"yes",defaultMessage:"Yes"}),cancelText:Object(t.jsx)(a.a,{id:"no",defaultMessage:"No"}),children:Object(t.jsx)(r.a,{title:Object(t.jsx)(a.a,{id:"delete",defaultMessage:"delete"}),children:Object(t.jsx)(g.a,{type:"primary",icon:Object(t.jsx)(Q.a,{}),danger:!0})})},"delete")]}}];return Object(t.jsxs)(c.a,{children:[Object(t.jsx)(u.a,{headerTitle:U.formatMessage({id:"categories",defaultMessage:"categories"}),actionRef:F,rowKey:"id",search:{labelWidth:120},toolBarRender:function(){return[Object(t.jsxs)(g.a,{type:"primary",onClick:function(){f(-1)},children:[Object(t.jsx)(R.a,{})," ",Object(t.jsx)(a.a,{id:"pages.searchTable.new",defaultMessage:"\u65B0\u5EFA"})]},"primary")]},request:function(){return Object(d.a)().then(function(y){return z(y.data),y})},columns:oe,pagination:{pageSize:100}}),Object(t.jsx)(te,{id:I,visible:Number.isInteger(I),onVisibleChange:function(y){return y===!1&&f(!1)},onFinish:function(){var L=Object(n.a)(l.a.mark(function y(W){var S;return l.a.wrap(function(V){for(;;)switch(V.prev=V.next){case 0:return V.next=2,re(U,W,Number(I));case 2:S=V.sent,S&&(f(!1),F.current&&F.current.reload());case 4:case"end":return V.stop()}},y)}));return function(y){return L.apply(this,arguments)}}()})]})},ie=m.default=se},Qurx:function($,m,e){"use strict";var v=e("wx14"),j=e("Ff2n"),A=e("q1tI"),r=e.n(A),o=e("adzw"),g=["fieldProps","proFieldProps"],P=["fieldProps","proFieldProps"],C="text",h=function(n){var M=n.fieldProps,l=n.proFieldProps,R=Object(j.a)(n,g);return r.a.createElement(o.a,Object(v.a)({mode:"edit",valueType:C,fieldProps:M,filedConfig:{valueType:C},proFieldProps:l},R))},B=function(n){var M=n.fieldProps,l=n.proFieldProps,R=Object(j.a)(n,P);return r.a.createElement(o.a,Object(v.a)({mode:"edit",valueType:"password",fieldProps:M,proFieldProps:l,filedConfig:{valueType:C}},R))},T=h;T.Password=B,T.displayName="ProFormComponent",m.a=T}}]);

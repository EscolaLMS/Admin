(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{"0TUn":function(z,f,e){"use strict";e.d(f,"c",function(){return E}),e.d(f,"a",function(){return g}),e.d(f,"b",function(){return T});var l=e("qLMh"),a=e("k1fw"),c=e("9og8"),d=e("9kvl");function E(n,j){return P.apply(this,arguments)}function P(){return P=Object(c.a)(Object(l.a)().mark(function n(j,o){return Object(l.a)().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.abrupt("return",Object(d.i)("/api/model-fields",Object(a.a)({method:"GET",params:j},o||{})));case 1:case"end":return s.stop()}},n)})),P.apply(this,arguments)}function g(n,j){return u.apply(this,arguments)}function u(){return u=Object(c.a)(Object(l.a)().mark(function n(j,o){return Object(l.a)().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.abrupt("return",Object(d.i)("/api/admin/model-fields",Object(a.a)({method:"POST",data:j},o||{})));case 1:case"end":return s.stop()}},n)})),u.apply(this,arguments)}function T(n,j){return O.apply(this,arguments)}function O(){return O=Object(c.a)(Object(l.a)().mark(function n(j,o){return Object(l.a)().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.abrupt("return",Object(d.i)("/api/admin/model-fields",Object(a.a)({method:"DELETE",data:j},o||{})));case 1:case"end":return s.stop()}},n)})),O.apply(this,arguments)}},"5qq5":function(z,f,e){"use strict";var l=e("7Kak"),a=e("9yH6"),c=e("VTBJ"),d=e("Ff2n"),E=e("nKUr"),P=e.n(E),g=e("uX+g"),u=e("q1tI"),T=e.n(u),O=e("WFLz"),n=e("adzw"),j=["fieldProps","options","radioType","layout","proFieldProps","valueEnum"],o=T.a.forwardRef(function(m,F){var L=m.fieldProps,h=m.options,V=m.radioType,$=m.layout,G=m.proFieldProps,J=m.valueEnum,K=Object(d.a)(m,j);return Object(E.jsx)(n.a,Object(c.a)(Object(c.a)({valueType:V==="button"?"radioButton":"radio",ref:F,valueEnum:Object(g.a)(J,void 0)},K),{},{fieldProps:Object(c.a)({options:h,layout:$},L),proFieldProps:G,filedConfig:{customLightMode:!0}}))}),r=T.a.forwardRef(function(m,F){var L=m.fieldProps,h=m.children;return Object(E.jsx)(a.a,Object(c.a)(Object(c.a)({},L),{},{ref:F,children:h}))}),s=Object(O.a)(r,{valuePropName:"checked",ignoreWidth:!0}),v=s;v.Group=o,v.Button=a.a.Button,v.displayName="ProFormComponent",f.a=v},Qurx:function(z,f,e){"use strict";var l=e("VTBJ"),a=e("Ff2n"),c=e("nKUr"),d=e.n(c),E=e("adzw"),P=["fieldProps","proFieldProps"],g=["fieldProps","proFieldProps"],u="text",T=function(o){var r=o.fieldProps,s=o.proFieldProps,v=Object(a.a)(o,P);return Object(c.jsx)(E.a,Object(l.a)({valueType:u,fieldProps:r,filedConfig:{valueType:u},proFieldProps:s},v))},O=function(o){var r=o.fieldProps,s=o.proFieldProps,v=Object(a.a)(o,g);return Object(c.jsx)(E.a,Object(l.a)({valueType:"password",fieldProps:r,proFieldProps:s,filedConfig:{valueType:u}},v))},n=T;n.Password=O,n.displayName="ProFormComponent",f.a=n},YDZB:function(z,f,e){"use strict";var l=e("2qtc"),a=e("kLXV"),c=e("7Kak"),d=e("9yH6"),E=e("+L6B"),P=e("2/Rp"),g=e("tJVT"),u=e("q1tI"),T=e.n(u),O=e("gU/Y"),n=e("9kvl"),j=e("u95b"),o=e.n(j),r=e("nKUr"),s=e.n(r),v=function(F){var L=F.value,h=F.onChange,V=Object(u.useState)(!1),$=Object(g.a)(V,2),G=$[0],J=$[1],K=Object(u.useCallback)(function(){J(!1)},[]),te=Object(u.useState)("code"),Y=Object(g.a)(te,2),Q=Y[0],H=Y[1];return Object(r.jsxs)("div",{children:[Object(r.jsx)(P.a,{type:"primary",onClick:function(){return J(!0)},size:"small",children:Object(r.jsx)(n.a,{id:"json_editor"})}),Object(r.jsxs)(a.a,{title:"JSON",visible:G,onOk:K,onCancel:K,children:[Object(r.jsxs)(d.a.Group,{onChange:function(y){return H(y.target.value)},value:Q,children:[Object(r.jsx)(d.a,{value:"tree",children:"tree"}),Object(r.jsx)(d.a,{value:"view",children:"view"}),Object(r.jsx)(d.a,{value:"form",children:"form"}),Object(r.jsx)(d.a,{value:"code",children:"code"}),Object(r.jsx)(d.a,{value:"text",children:"text"})]}),Object(r.jsx)(O.a,{mode:Q,value:L,onChange:function(y){return h&&h(y)}},Q)]})]})};f.a=v},i3PA:function(z,f,e){"use strict";e.r(f);var l=e("q1tI"),a=e("9kvl"),c=e("tMyG"),d=e("nhC9"),E=e("P2fV"),P=e("NJEC"),g=e("5Dmo"),u=e("3S7+"),T=e("+L6B"),O=e("2/Rp"),n=e("qLMh"),j=e("miYZ"),o=e("tsqr"),r=e("9og8"),s=e("tJVT"),v=e("Qiat"),m=e("xvlK"),F=e("G3dp"),L=e("/MfK"),h=e("0TUn"),V=e("k1fw"),$=e("y8nQ"),G=e("Vl3Y"),J=e("rmhi"),K=e("Qurx"),te=e("5qq5"),Y=e("VMEa"),Q=e("FJDo"),H=e("YDZB"),t=e("nKUr"),y;(function(R){R.BOOLEAN="boolean",R.NUMBER="number",R.VARCHAR="varchar",R.TEXT="text",R.JSON="json"})(y||(y={}));var oe=function(D){var A=D.visible,W=D.onVisibleChange,ae=D.onResponse,X=D.class_type,Z=D.name,b=Z===void 0?"new":Z,w=D.fields,k=w===void 0?[]:w,B=Object(a.l)(),q=G.a.useForm(),N=Object(s.a)(q,1),S=N[0],ee=Object(l.useCallback)(function(){var p=Object(r.a)(Object(n.a)().mark(function U(I){return Object(n.a)().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Object(h.a)(Object(V.a)(Object(V.a)({},I),{},{class_type:X,rules:JSON.stringify(I.rules),extra:JSON.stringify(I.extra)})).then(function(_){_.success&&ae(_.data)});case 2:return i.abrupt("return",!1);case 3:case"end":return i.stop()}},U)}));return function(U){return p.apply(this,arguments)}}(),[S]);return Object(l.useEffect)(function(){if(b!=="new"){var p=k.find(function(U){return U.name===b});p&&S.setFieldsValue(p)}else S.resetFields()},[b,S,k]),Object(t.jsxs)(J.a,{form:S,title:B.formatMessage({id:b==="new"?"newModelField":"editModelField",defaultMessage:b==="new"?"new Model Field":"edit Model Field"}),width:"800px",visible:A,onVisibleChange:W,onFinish:ee,children:[Object(t.jsx)(K.a,{required:!0,label:Object(t.jsx)(a.a,{id:"name",defaultMessage:"name"}),tooltip:Object(t.jsx)(a.a,{id:"name_tooltip",defaultMessage:"name_tooltip"}),rules:[{required:!0}],width:"md",name:"name"}),Object(t.jsx)(te.a.Group,{rules:[{required:!0}],name:"type",label:Object(t.jsx)(a.a,{id:"type",defaultMessage:"type"}),tooltip:Object(t.jsx)(a.a,{id:"type_tooltip",defaultMessage:"type_tooltip"}),options:Object.keys(y).map(function(p){return{label:B.formatMessage({id:y[p]}),value:y[p]}})}),Object(t.jsx)(K.a,{width:"md",name:"default",label:Object(t.jsx)(a.a,{id:"default",defaultMessage:"default"}),tooltip:Object(t.jsx)(a.a,{id:"default_tooltip",defaultMessage:"default_tooltip"}),placeholder:B.formatMessage({id:"default"})}),Object(t.jsx)(Y.a.Item,{name:"rules",label:Object(t.jsxs)("span",{children:[Object(t.jsx)(a.a,{id:"rules",defaultMessage:"rules"})," ",Object(t.jsx)("a",{rel:"noreferrer",href:"https://laravel.com/docs/9.x/validation#available-validation-rules",target:"_blank",children:Object(t.jsx)(a.a,{id:"available-validation-rules",defaultMessage:"available-validation-rules"})})]}),tooltip:Object(t.jsx)(a.a,{id:"available-validation-rules"}),valuePropName:"value",children:Object(t.jsx)(H.a,{})}),Object(t.jsx)(Q.a,{width:"md",name:"visibility",label:Object(t.jsx)(a.a,{id:"visibility"}),tooltip:Object(t.jsx)(a.a,{id:"visibility_tooltip"}),placeholder:B.formatMessage({id:"visibility",defaultMessage:"visibility"}),min:1,max:1024,fieldProps:{step:1},rules:[{validator:function(){var p=Object(r.a)(Object(n.a)().mark(function I(C,i){return Object(n.a)().wrap(function(M){for(;;)switch(M.prev=M.next){case 0:if(!(Math.pow(2,Math.ceil(Math.log2(i)))-i)){M.next=2;break}return M.abrupt("return",Promise.reject(new Error(B.formatMessage({id:"notPowerOfTwo",defaultMessage:"notPowerOfTwo"}))));case 2:return M.abrupt("return",Promise.resolve());case 3:case"end":return M.stop()}},I)}));function U(I,C){return p.apply(this,arguments)}return U}()}]}),Object(t.jsx)(Y.a.Item,{name:"extra",label:Object(t.jsx)(a.a,{id:"extra"}),tooltip:Object(t.jsx)(a.a,{id:"extra"}),valuePropName:"value",children:Object(t.jsx)(H.a,{})})]})},ie=oe,de=[{title:Object(t.jsx)(a.a,{id:"name",defaultMessage:"name"}),dataIndex:"name",hideInSearch:!0},{title:Object(t.jsx)(a.a,{id:"type",defaultMessage:"type"}),dataIndex:"type",sorter:!0},{title:Object(t.jsx)(a.a,{id:"default",defaultMessage:"default"}),dataIndex:"default",hideInSearch:!0}],ue=function(D){var A=D.class_type,W=Object(l.useRef)(),ae=Object(l.useState)(!1),X=Object(s.a)(ae,2),Z=X[0],b=X[1],w=Object(a.l)(),k=Object(l.useState)(!1),B=Object(s.a)(k,2),q=B[0],N=B[1],S=Object(l.useState)([]),ee=Object(s.a)(S,2),p=ee[0],U=ee[1],I=Object(l.useCallback)(function(){var C=Object(r.a)(Object(n.a)().mark(function i(_){var M,ne,se,re;return Object(n.a)().wrap(function(x){for(;;)switch(x.prev=x.next){case 0:return M=_.class_type_to_remove,ne=_.name,b(!0),se=o.b.loading(Object(t.jsx)(a.a,{id:"loading",defaultMessage:"loading"})),x.prev=3,x.next=6,Object(h.b)({class_type:M,name:ne}).then(function(le){b(!1),le.success&&o.b.success(le.message)});case 6:return se(),b(!1),(re=W.current)===null||re===void 0||re.reload(),x.abrupt("return",!0);case 12:return x.prev=12,x.t0=x.catch(3),se(),o.b.error(Object(t.jsx)(a.a,{id:"error",defaultMessage:"error"})),b(!1),x.abrupt("return",!1);case 18:case"end":return x.stop()}},i,null,[[3,12]])}));return function(i){return C.apply(this,arguments)}}(),[W]);return Object(t.jsxs)(l.Fragment,{children:[Object(t.jsx)(ie,{fields:p,onResponse:function(){N(!1),W.current&&W.current.reload()},class_type:A,name:q,visible:typeof q=="string",onVisibleChange:function(i){return i===!1&&N(!1)}}),Object(t.jsx)(v.a,{search:!1,headerTitle:w.formatMessage({id:"ModelFields",defaultMessage:"Model Fields"}),toolBarRender:function(){return[Object(t.jsxs)(O.a,{type:"primary",onClick:function(){return N("new")},children:[Object(t.jsx)(m.a,{})," ",Object(t.jsx)(a.a,{id:"new",defaultMessage:"new"})]},"new")]},loading:Z,actionRef:W,rowKey:"id",request:function(){return b(!0),Object(h.c)({class_type:A}).then(function(i){return b(!1),i.success?(U(i.data),{data:i.data,total:i.data.length,success:!0}):[]})},columns:[].concat(de,[{title:Object(t.jsx)(a.a,{id:"options",defaultMessage:"options"}),dataIndex:"option",valueType:"option",width:"10%",render:function(i,_){return[Object(t.jsx)(u.a,{title:Object(t.jsx)(a.a,{id:"edit",defaultMessage:"edit"}),children:Object(t.jsx)(O.a,{type:"primary",icon:Object(t.jsx)(F.a,{}),onClick:function(){return N(_.name)}})},"edit"),Object(t.jsx)(P.a,{title:Object(t.jsx)(a.a,{id:"deleteQuestion",defaultMessage:"Are you sure to delete this record?"}),onConfirm:function(){return _.name&&I({class_type_to_remove:A,name:_.name})},okText:Object(t.jsx)(a.a,{id:"yes",defaultMessage:"Yes"}),cancelText:Object(t.jsx)(a.a,{id:"no",defaultMessage:"No"}),children:Object(t.jsx)(u.a,{title:Object(t.jsx)(a.a,{id:"delete",defaultMessage:"delete"}),children:Object(t.jsx)(O.a,{type:"primary",icon:Object(t.jsx)(L.a,{}),danger:!0})})},"delete")]}}])})]})},ce=ue,je=function(){return Object(t.jsx)(c.a,{children:Object(t.jsxs)(d.a,{tabs:{type:"card",activeKey:"fields",onChange:function(A){switch(A){case"list":return a.f.push("/users");default:return a.f.push("/users/".concat(A))}}},children:[Object(t.jsx)(d.a.TabPane,{tab:Object(t.jsx)(a.a,{id:"list"})},"list"),Object(t.jsx)(d.a.TabPane,{tab:Object(t.jsx)(a.a,{id:"ModelFields"}),children:Object(t.jsx)(ce,{class_type:"EscolaLms\\Auth\\Models\\User"})},"fields")]})})},Oe=f.default=je}}]);

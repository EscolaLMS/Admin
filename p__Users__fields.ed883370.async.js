(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{"0TUn":function(X,b,e){"use strict";e.d(b,"c",function(){return P}),e.d(b,"a",function(){return g}),e.d(b,"b",function(){return T});var l=e("qLMh"),a=e("k1fw"),c=e("9og8"),d=e("9kvl");function P(n,j){return h.apply(this,arguments)}function h(){return h=Object(c.a)(Object(l.a)().mark(function n(j,o){return Object(l.a)().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.abrupt("return",Object(d.i)("/api/model-fields",Object(a.a)({method:"GET",params:j},o||{})));case 1:case"end":return s.stop()}},n)})),h.apply(this,arguments)}function g(n,j){return u.apply(this,arguments)}function u(){return u=Object(c.a)(Object(l.a)().mark(function n(j,o){return Object(l.a)().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.abrupt("return",Object(d.i)("/api/admin/model-fields",Object(a.a)({method:"POST",data:j},o||{})));case 1:case"end":return s.stop()}},n)})),u.apply(this,arguments)}function T(n,j){return O.apply(this,arguments)}function O(){return O=Object(c.a)(Object(l.a)().mark(function n(j,o){return Object(l.a)().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.abrupt("return",Object(d.i)("/api/admin/model-fields",Object(a.a)({method:"DELETE",data:j},o||{})));case 1:case"end":return s.stop()}},n)})),O.apply(this,arguments)}},"5qq5":function(X,b,e){"use strict";var l=e("7Kak"),a=e("9yH6"),c=e("VTBJ"),d=e("Ff2n"),P=e("nKUr"),h=e.n(P),g=e("uX+g"),u=e("q1tI"),T=e.n(u),O=e("WFLz"),n=e("adzw"),j=["fieldProps","options","radioType","layout","proFieldProps","valueEnum"],o=T.a.forwardRef(function(m,F){var W=m.fieldProps,_=m.options,N=m.radioType,z=m.layout,Y=m.proFieldProps,$=m.valueEnum,S=Object(d.a)(m,j);return Object(P.jsx)(n.a,Object(c.a)(Object(c.a)({valueType:N==="button"?"radioButton":"radio",ref:F,valueEnum:Object(g.a)($,void 0)},S),{},{fieldProps:Object(c.a)({options:_,layout:z},W),proFieldProps:Y,filedConfig:{customLightMode:!0}}))}),r=T.a.forwardRef(function(m,F){var W=m.fieldProps,_=m.children;return Object(P.jsx)(a.a,Object(c.a)(Object(c.a)({},W),{},{ref:F,children:_}))}),s=Object(O.a)(r,{valuePropName:"checked",ignoreWidth:!0}),p=s;p.Group=o,p.Button=a.a.Button,p.displayName="ProFormComponent",b.a=p},Qurx:function(X,b,e){"use strict";var l=e("VTBJ"),a=e("Ff2n"),c=e("nKUr"),d=e.n(c),P=e("adzw"),h=["fieldProps","proFieldProps"],g=["fieldProps","proFieldProps"],u="text",T=function(o){var r=o.fieldProps,s=o.proFieldProps,p=Object(a.a)(o,h);return Object(c.jsx)(P.a,Object(l.a)({valueType:u,fieldProps:r,filedConfig:{valueType:u},proFieldProps:s},p))},O=function(o){var r=o.fieldProps,s=o.proFieldProps,p=Object(a.a)(o,g);return Object(c.jsx)(P.a,Object(l.a)({valueType:"password",fieldProps:r,proFieldProps:s,filedConfig:{valueType:u}},p))},n=T;n.Password=O,n.displayName="ProFormComponent",b.a=n},YDZB:function(X,b,e){"use strict";var l=e("2qtc"),a=e("kLXV"),c=e("7Kak"),d=e("9yH6"),P=e("+L6B"),h=e("2/Rp"),g=e("tJVT"),u=e("q1tI"),T=e.n(u),O=e("gU/Y"),n=e("9kvl"),j=e("u95b"),o=e.n(j),r=e("nKUr"),s=e.n(r),p=function(F){var W=F.value,_=F.onChange,N=Object(u.useState)(!1),z=Object(g.a)(N,2),Y=z[0],$=z[1],S=Object(u.useCallback)(function(){$(!1)},[]),re=Object(u.useState)("code"),Q=Object(g.a)(re,2),H=Q[0],Z=Q[1];return Object(r.jsxs)("div",{children:[Object(r.jsx)(h.a,{type:"primary",onClick:function(){return $(!0)},size:"small",children:Object(r.jsx)(n.a,{id:"json_editor"})}),Object(r.jsxs)(a.a,{title:"JSON",visible:Y,onOk:S,onCancel:S,children:[Object(r.jsxs)(d.a.Group,{onChange:function(y){return Z(y.target.value)},value:H,children:[Object(r.jsx)(d.a,{value:"tree",children:"tree"}),Object(r.jsx)(d.a,{value:"view",children:"view"}),Object(r.jsx)(d.a,{value:"form",children:"form"}),Object(r.jsx)(d.a,{value:"code",children:"code"}),Object(r.jsx)(d.a,{value:"text",children:"text"})]}),Object(r.jsx)(O.a,{mode:H,value:W,onChange:function(y){return _&&_(y)}},H)]})]})};b.a=p},i3PA:function(X,b,e){"use strict";e.r(b);var l=e("q1tI"),a=e("9kvl"),c=e("tMyG"),d=e("nhC9"),P=e("P2fV"),h=e("NJEC"),g=e("5Dmo"),u=e("3S7+"),T=e("+L6B"),O=e("2/Rp"),n=e("qLMh"),j=e("miYZ"),o=e("tsqr"),r=e("9og8"),s=e("tJVT"),p=e("Qiat"),m=e("xvlK"),F=e("G3dp"),W=e("/MfK"),_=e("0TUn"),N=e("k1fw"),z=e("y8nQ"),Y=e("Vl3Y"),$=e("rmhi"),S=e("Qurx"),re=e("5qq5"),Q=e("VMEa"),H=e("FJDo"),Z=e("YDZB"),t=e("nKUr"),y;(function(R){R.BOOLEAN="boolean",R.NUMBER="number",R.VARCHAR="varchar",R.TEXT="text",R.JSON="json"})(y||(y={}));var oe=function(D){var A=D.visible,V=D.onVisibleChange,ne=D.onResponse,w=D.class_type,k=D.name,M=k===void 0?"new":k,q=D.fields,ee=q===void 0?[]:q,B=Object(a.l)(),te=Y.a.useForm(),G=Object(s.a)(te,1),J=G[0],ae=Object(l.useCallback)(function(){var E=Object(r.a)(Object(n.a)().mark(function U(I){return Object(n.a)().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Object(_.a)(Object(N.a)(Object(N.a)({},I),{},{class_type:w,rules:JSON.stringify(I.rules),extra:JSON.stringify(I.extra)})).then(function(f){f.success&&ne(f.data)});case 2:return i.abrupt("return",!1);case 3:case"end":return i.stop()}},U)}));return function(U){return E.apply(this,arguments)}}(),[J]);return Object(l.useEffect)(function(){if(M!=="new"){var E=ee.find(function(U){return U.name===M});E&&J.setFieldsValue(E)}else J.resetFields()},[M,J,ee]),Object(t.jsxs)($.a,{form:J,title:B.formatMessage({id:M==="new"?"newModelField":"editModelField",defaultMessage:M==="new"?"new Model Field":"edit Model Field"}),width:"800px",visible:A,onVisibleChange:V,onFinish:ae,children:[Object(t.jsx)(S.a,{required:!0,label:Object(t.jsx)(a.a,{id:"name",defaultMessage:"name"}),tooltip:Object(t.jsx)(a.a,{id:"name_tooltip",defaultMessage:"name_tooltip"}),rules:[{required:!0}],width:"md",name:"name"}),Object(t.jsx)(re.a.Group,{rules:[{required:!0}],name:"type",label:Object(t.jsx)(a.a,{id:"type",defaultMessage:"type"}),tooltip:Object(t.jsx)(a.a,{id:"type_tooltip",defaultMessage:"type_tooltip"}),options:Object.keys(y).map(function(E){return{label:B.formatMessage({id:"model.".concat(y[E])}),value:y[E]}})}),Object(t.jsx)(S.a,{width:"md",name:"default",label:Object(t.jsx)(a.a,{id:"default",defaultMessage:"default"}),tooltip:Object(t.jsx)(a.a,{id:"default_tooltip",defaultMessage:"default_tooltip"}),placeholder:B.formatMessage({id:"default"})}),Object(t.jsx)(Q.a.Item,{name:"rules",label:Object(t.jsxs)("span",{children:[Object(t.jsx)(a.a,{id:"rules",defaultMessage:"rules"})," ",Object(t.jsx)("a",{rel:"noreferrer",href:"https://laravel.com/docs/9.x/validation#available-validation-rules",target:"_blank",children:Object(t.jsx)(a.a,{id:"available-validation-rules",defaultMessage:"available-validation-rules"})})]}),tooltip:Object(t.jsx)(a.a,{id:"available-validation-rules-tooltip"}),valuePropName:"value",children:Object(t.jsx)(Z.a,{})}),Object(t.jsx)(H.a,{width:"md",name:"visibility",label:Object(t.jsx)(a.a,{id:"visibility"}),tooltip:Object(t.jsx)(a.a,{id:"visibility_tooltip"}),placeholder:B.formatMessage({id:"visibility",defaultMessage:"visibility"}),min:1,max:1024,fieldProps:{step:1},rules:[{validator:function(){var E=Object(r.a)(Object(n.a)().mark(function I(C,i){return Object(n.a)().wrap(function(v){for(;;)switch(v.prev=v.next){case 0:if(!(Math.pow(2,Math.ceil(Math.log2(i)))-i)){v.next=2;break}return v.abrupt("return",Promise.reject(new Error(B.formatMessage({id:"notPowerOfTwo",defaultMessage:"notPowerOfTwo"}))));case 2:return v.abrupt("return",Promise.resolve());case 3:case"end":return v.stop()}},I)}));function U(I,C){return E.apply(this,arguments)}return U}()}]}),Object(t.jsx)(Q.a.Item,{name:"extra",label:Object(t.jsx)(a.a,{id:"extra"}),tooltip:Object(t.jsx)(a.a,{id:"extra_tooltip"}),valuePropName:"value",children:Object(t.jsx)(Z.a,{})})]})},ie=oe,de=[{title:Object(t.jsx)(a.a,{id:"name",defaultMessage:"name"}),dataIndex:"name",hideInSearch:!0,sorter:!0},{title:Object(t.jsx)(a.a,{id:"type",defaultMessage:"type"}),dataIndex:"type",sorter:!0},{title:Object(t.jsx)(a.a,{id:"default",defaultMessage:"default"}),dataIndex:"default",hideInSearch:!0}],ue=function(D){var A=D.class_type,V=Object(l.useRef)(),ne=Object(l.useState)(!1),w=Object(s.a)(ne,2),k=w[0],M=w[1],q=Object(a.l)(),ee=Object(l.useState)(!1),B=Object(s.a)(ee,2),te=B[0],G=B[1],J=Object(l.useState)([]),ae=Object(s.a)(J,2),E=ae[0],U=ae[1],I=Object(l.useCallback)(function(){var C=Object(r.a)(Object(n.a)().mark(function i(f){var v,se,L,K;return Object(n.a)().wrap(function(x){for(;;)switch(x.prev=x.next){case 0:return v=f.class_type_to_remove,se=f.name,M(!0),L=o.b.loading(Object(t.jsx)(a.a,{id:"loading",defaultMessage:"loading"})),x.prev=3,x.next=6,Object(_.b)({class_type:v,name:se}).then(function(le){M(!1),le.success&&o.b.success(le.message)});case 6:return L(),M(!1),(K=V.current)===null||K===void 0||K.reload(),x.abrupt("return",!0);case 12:return x.prev=12,x.t0=x.catch(3),L(),o.b.error(Object(t.jsx)(a.a,{id:"error",defaultMessage:"error"})),M(!1),x.abrupt("return",!1);case 18:case"end":return x.stop()}},i,null,[[3,12]])}));return function(i){return C.apply(this,arguments)}}(),[V]);return Object(t.jsxs)(l.Fragment,{children:[Object(t.jsx)(ie,{fields:E,onResponse:function(){G(!1),V.current&&V.current.reload()},class_type:A,name:te,visible:typeof te=="string",onVisibleChange:function(i){return i===!1&&G(!1)}}),Object(t.jsx)(p.a,{search:!1,headerTitle:q.formatMessage({id:"ModelFields",defaultMessage:"Model Fields"}),toolBarRender:function(){return[Object(t.jsxs)(O.a,{type:"primary",onClick:function(){return G("new")},children:[Object(t.jsx)(m.a,{})," ",Object(t.jsx)(a.a,{id:"new",defaultMessage:"new"})]},"new")]},loading:k,actionRef:V,rowKey:"id",request:function(i,f){var v=i.pageSize,se=i.current,L=f&&Object.entries(f)[0];return M(!0),Object(_.c)({page:se,per_page:v,class_type:A,order_by:L&&L[0],order:L?L[1]==="ascend"?"ASC":"DESC":void 0}).then(function(K){return M(!1),K.success?(U(K.data),{data:K.data,total:K.data.length,success:!0}):[]})},columns:[].concat(de,[{title:Object(t.jsx)(a.a,{id:"options",defaultMessage:"options"}),dataIndex:"option",valueType:"option",width:"10%",render:function(i,f){return[Object(t.jsx)(u.a,{title:Object(t.jsx)(a.a,{id:"edit",defaultMessage:"edit"}),children:Object(t.jsx)(O.a,{type:"primary",icon:Object(t.jsx)(F.a,{}),onClick:function(){return G(f.name)}})},"edit"),Object(t.jsx)(h.a,{title:Object(t.jsx)(a.a,{id:"deleteQuestion",defaultMessage:"Are you sure to delete this record?"}),onConfirm:function(){return f.name&&I({class_type_to_remove:A,name:f.name})},okText:Object(t.jsx)(a.a,{id:"yes",defaultMessage:"Yes"}),cancelText:Object(t.jsx)(a.a,{id:"no",defaultMessage:"No"}),children:Object(t.jsx)(u.a,{title:Object(t.jsx)(a.a,{id:"delete",defaultMessage:"delete"}),children:Object(t.jsx)(O.a,{type:"primary",icon:Object(t.jsx)(W.a,{}),danger:!0})})},"delete")]}}])})]})},ce=ue,je=function(){return Object(t.jsx)(c.a,{children:Object(t.jsxs)(d.a,{tabs:{type:"card",activeKey:"fields",onChange:function(A){switch(A){case"list":return a.f.push("/users");default:return a.f.push("/users/".concat(A))}}},children:[Object(t.jsx)(d.a.TabPane,{tab:Object(t.jsx)(a.a,{id:"list"})},"list"),Object(t.jsx)(d.a.TabPane,{tab:Object(t.jsx)(a.a,{id:"ModelFields"}),children:Object(t.jsx)(ce,{class_type:"EscolaLms\\Auth\\Models\\User"})},"fields")]})})},Oe=b.default=je}}]);
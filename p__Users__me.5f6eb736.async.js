(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{"0TUn":function(J,E,e){"use strict";e.d(E,"c",function(){return v}),e.d(E,"a",function(){return m}),e.d(E,"b",function(){return r});var A=e("k1fw"),P=e("9og8"),C=e("WmNS"),i=e.n(C),O=e("9kvl");function v(s,c){return l.apply(this,arguments)}function l(){return l=Object(P.a)(i.a.mark(function s(c,_){return i.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.abrupt("return",Object(O.f)("/api/model-fields",Object(A.a)({method:"GET",params:c},_||{})));case 1:case"end":return o.stop()}},s)})),l.apply(this,arguments)}function m(s,c){return t.apply(this,arguments)}function t(){return t=Object(P.a)(i.a.mark(function s(c,_){return i.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.abrupt("return",Object(O.f)("/api/admin/model-fields",Object(A.a)({method:"POST",data:c},_||{})));case 1:case"end":return o.stop()}},s)})),t.apply(this,arguments)}function r(s,c){return j.apply(this,arguments)}function j(){return j=Object(P.a)(i.a.mark(function s(c,_){return i.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.abrupt("return",Object(O.f)("/api/admin/model-fields",Object(A.a)({method:"DELETE",data:c},_||{})));case 1:case"end":return o.stop()}},s)})),j.apply(this,arguments)}},"5ddx":function(J,E,e){"use strict";var A=e("9og8"),P=e("+L6B"),C=e("2/Rp"),i=e("tJVT"),O=e("WmNS"),v=e.n(O),l=e("q1tI"),m=e.n(l),t=e("9kvl"),r=e("Qiat"),j=e("VK58"),s=e("xvlK"),c=e("Xcxh"),_=e("y8nQ"),M=e("Vl3Y"),o=e("rmhi"),U=e("VMEa"),D=e("Qurx"),a=e("nKUr"),u=function(K){var W=Object(t.i)(),b=K.visible,R=K.onVisibleChange,T=K.onFinish,y=M.a.useForm(),S=Object(i.a)(y,1),V=S[0];return Object(l.useEffect)(function(){return function(){V.resetFields()}},[]),Object(a.jsx)(o.a,{form:V,title:W.formatMessage({id:"newSetting",defaultMessage:"newSetting"}),width:"30vw",visible:b,onVisibleChange:R,onFinish:T,children:Object(a.jsxs)(U.a.Group,{children:[Object(a.jsx)(D.a,{label:Object(a.jsx)(t.a,{id:"key",defaultMessage:"key"}),rules:[{required:!0}],width:"md",name:"key"}),Object(a.jsx)(D.a,{label:Object(a.jsx)(t.a,{id:"value",defaultMessage:"value"}),rules:[{required:!0}],width:"md",name:"value"})]})})},d=u,F=function(K){var W=K.user,b=K.isProfile,R=b===void 0?!1:b,T=Object(l.useRef)(),y=Object(t.i)(),S=Object(l.useState)(!1),V=Object(i.a)(S,2),p=V[0],G=V[1],Q=Object(l.useState)("PATCH"),z=Object(i.a)(Q,2),I=z[0],x=z[1],B=[{title:Object(a.jsx)(t.a,{id:"key",defaultMessage:"key"}),dataIndex:"key",hideInSearch:!0},{title:Object(a.jsx)(t.a,{id:"value",defaultMessage:"value"}),dataIndex:"value",hideInSearch:!0}],L=Object(l.useCallback)(function(g){var h=g&&Object.entries(g).map(function(f){return{key:f[0],value:f[1]}});return h},[W]);return Object(a.jsxs)(m.a.Fragment,{children:[Object(a.jsx)(r.a,{headerTitle:y.formatMessage({id:"menu.settings"}),actionRef:T,rowKey:"id",search:!1,toolBarRender:R?function(){return[Object(a.jsxs)(C.a,{type:"primary",onClick:function(){G(-1),x("PATCH")},children:[Object(a.jsx)(s.a,{})," ",Object(a.jsx)(t.a,{id:"pages.searchTable.new"})]},"primary"),Object(a.jsxs)(C.a,{color:"yellow",type:"primary",onClick:function(){G(-1),x("PUT")},children:[Object(a.jsx)(c.a,{})," ",Object(a.jsx)(t.a,{id:"user.settings.overwrite"})]},"primary")]}:!1,request:function(){return Object(j.d)(Number(W)).then(function(h){return h.success?{data:L(h.data)}:[]})},columns:B}),Object(a.jsx)(d,{id:p,visible:Number.isInteger(p),onVisibleChange:function(h){return h===!1&&G(!1)},onFinish:function(){var g=Object(A.a)(v.a.mark(function h(f){var Y;return v.a.wrap(function($){for(;;)switch($.prev=$.next){case 0:return $.next=2,Object(j.g)(Number(W),I,f);case 2:Y=$.sent,Y.success&&(G(!1),T.current&&T.current.reload());case 4:case"end":return $.stop()}},h)}));return function(h){return g.apply(this,arguments)}}()})]})},N=E.a=F},C8Qx:function(J,E,e){"use strict";var A=e("YDZB"),P=e("FJDo"),C=e("tneF"),i=e("Qurx"),O=e("BiO0"),v=e("VMEa"),l=e("q1tI"),m=e.n(l),t=e("9kvl"),r=e("nKUr"),j=e.n(r),s=function(_){var M=_.field,o=Object(t.i)(),U=function(a){var u=a&&a.extra&&a.extra.find(function(d){return d[Object(t.c)()]});switch(a.type){case"number":return Object(r.jsx)(P.a,{width:"md",name:a.name,label:u?u[Object(t.c)()]:Object(r.jsx)(t.a,{id:a.name}),tooltip:Object(r.jsx)(t.a,{id:a.name}),placeholder:o.formatMessage({id:a.name,defaultMessage:a.name}),min:1,max:1024,fieldProps:{step:1}});case"boolean":return Object(r.jsx)(C.a,{name:a.name,children:u?u[Object(t.c)()]:Object(r.jsx)(t.a,{id:a.name})});case"varchar":return Object(r.jsx)(i.a,{width:"md",name:a.name,label:u?u[Object(t.c)()]:Object(r.jsx)(t.a,{id:a.name}),tooltip:Object(r.jsx)(t.a,{id:a.name}),placeholder:o.formatMessage({id:a.name}),required:!0});case"text":return Object(r.jsx)(O.a,{width:"md",name:a.name,label:u?u[Object(t.c)()]:Object(r.jsx)(t.a,{id:a.name}),tooltip:Object(r.jsx)(t.a,{id:a.name}),placeholder:o.formatMessage({id:a.name}),required:!0});case"json":return Object(r.jsx)(v.a.Item,{name:a.name,label:u?u[Object(t.c)()]:Object(r.jsx)(t.a,{id:a.name}),tooltip:Object(r.jsx)(t.a,{id:a.name}),valuePropName:"value",children:Object(r.jsx)(A.a,{})})}};return Object(r.jsx)(r.Fragment,{children:U(M)})};E.a=s},"DBJ/":function(J,E,e){"use strict";var A=e("y8nQ"),P=e("Vl3Y"),C=e("etVw"),i=e("q1tI"),O=e.n(i),v=e("9kvl"),l=e("qFDU"),m=e("nKUr"),t=e.n(m),r=function(s){var c=s.onChange,_=s.url,M=s.name,o=s.extra,U=s.accept,D=s.data,a=s.wrapInForm,u=a===void 0?!0:a,d=s.title,F=Object(v.i)();return D&&D[M]&&delete D[M],Object(m.jsx)(l.a,{condition:u,wrap:function(n){return Object(m.jsx)(P.a,{children:n})},children:Object(m.jsx)(C.a,{title:d||Object(m.jsx)(v.a,{id:"upload_click_here"}),placeholder:F.formatMessage({id:"upload_click_here"}),onChange:c,label:Object(m.jsx)(v.a,{id:"upload"}),max:2,fieldProps:{data:D,accept:U,name:M,headers:{Authorization:"Bearer ".concat(localStorage.getItem("TOKEN"))}},action:"".concat("https://api-stage.escolalms.com").concat(_),extra:o})})};E.a=r},Jfn2:function(J,E,e){"use strict";var A=e("k1fw"),P=e("XCrF"),C=e("1GRj"),i=e("PpiC"),O=e("q1tI"),v=e.n(O),l=e("nKUr"),m=e.n(l),t=function(j){var s=j.path,c=j.size,_=j.srcSizes,M=j.alt,o=M===void 0?"LMS Image":M,U=Object(i.a)(j,["path","size","srcSizes","alt"]),D="".concat("https://api-stage.escolalms.com","/api/images/img?path=").concat(s,"&w=").concat(_?_[0]:c),a=_&&_.map(function(u){return"".concat("https://api-stage.escolalms.com","/api/images/img?path=").concat(s,"&w=").concat(u," ").concat(u,"w")});return Object(l.jsx)("div",{className:"escolalms-image",children:Object(l.jsx)(C.a,Object(A.a)({src:D,srcSet:a&&a.join(","),alt:o},U))})};E.a=t},TpMl:function(J,E,e){"use strict";var A=e("tJVT"),P=e("q1tI"),C=e.n(P),i=e("0TUn"),O=function(l){var m=Object(P.useState)({state:"initial"}),t=Object(A.a)(m,2),r=t[0],j=t[1];return Object(P.useEffect)(function(){j({state:"loading"}),Object(i.c)({class_type:l}).then(function(s){s.success&&j({state:"loaded",list:s.data})})},[l]),r};E.a=O},YDZB:function(J,E,e){"use strict";var A=e("2qtc"),P=e("kLXV"),C=e("7Kak"),i=e("9yH6"),O=e("+L6B"),v=e("2/Rp"),l=e("tJVT"),m=e("q1tI"),t=e.n(m),r=e("gU/Y"),j=e("9kvl"),s=e("u95b"),c=e.n(s),_=e("nKUr"),M=e.n(_),o=function(D){var a=D.value,u=D.onChange,d=Object(m.useState)(!1),F=Object(l.a)(d,2),N=F[0],n=F[1],K=Object(m.useCallback)(function(){n(!1)},[]),W=Object(m.useState)("code"),b=Object(l.a)(W,2),R=b[0],T=b[1];return Object(_.jsxs)("div",{children:[Object(_.jsx)(v.a,{type:"primary",onClick:function(){return n(!0)},size:"small",children:Object(_.jsx)(j.a,{id:"json_editor"})}),Object(_.jsxs)(P.a,{title:"JSON",visible:N,onOk:K,onCancel:K,children:[Object(_.jsxs)(i.a.Group,{onChange:function(S){return T(S.target.value)},value:R,children:[Object(_.jsx)(i.a,{value:"tree",children:"tree"}),Object(_.jsx)(i.a,{value:"view",children:"view"}),Object(_.jsx)(i.a,{value:"form",children:"form"}),Object(_.jsx)(i.a,{value:"code",children:"code"}),Object(_.jsx)(i.a,{value:"text",children:"text"})]}),Object(_.jsx)(r.a,{mode:R,value:a,onChange:function(S){return u&&u(S)}},R)]})]})};E.a=o},fWLy:function(J,E,e){"use strict";e.r(E);var A=e("T2oS"),P=e("W9HT"),C=e("miYZ"),i=e("tsqr"),O=e("k1fw"),v=e("9og8"),l=e("tJVT"),m=e("WmNS"),t=e.n(m),r=e("q1tI"),j=e.n(r),s=e("VMEa"),c=e("Qurx"),_=e("nhC9"),M=e("VK58"),o=e("TpMl"),U=e("tMyG"),D=e("DBJ/"),a=e("Jfn2"),u=e("Ty5D"),d=e("9kvl"),F=e("5ddx"),N=e("C8Qx"),n=e("nKUr"),K=e.n(n);E.default=function(){var W=Object(u.h)(),b=Object(d.i)(),R=W.tab,T=R===void 0?"general":R,y=Object(o.a)("EscolaLms\\Auth\\Models\\User"),S=Object(r.useState)(),V=Object(l.a)(S,2),p=V[0],G=V[1];Object(r.useEffect)(function(){var I=function(){var x=Object(v.a)(t.a.mark(function B(){var L;return t.a.wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.next=2,Object(M.e)();case 2:L=h.sent,L.success&&G(Object(O.a)(Object(O.a)({},L.data),{},{bio:L.data.bio||""}));case 4:case"end":return h.stop()}},B)}));return function(){return x.apply(this,arguments)}}();I()},[]);var Q=Object(r.useMemo)(function(){return{onFinish:function(){var I=Object(v.a)(t.a.mark(function B(L){var g;return t.a.wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.next=2,Object(M.h)(L);case 2:g=f.sent,i.default.success(g.message);case 4:case"end":return f.stop()}},B)}));function x(B){return I.apply(this,arguments)}return x}(),initialValues:p}},[p]),z=Object(r.useMemo)(function(){return{onFinish:function(){var I=Object(v.a)(t.a.mark(function B(L){var g;return t.a.wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.next=2,Object(M.i)(L);case 2:g=f.sent,i.default.success(g.message);case 4:case"end":return f.stop()}},B)}));function x(B){return I.apply(this,arguments)}return x}(),initialValues:p}},[p]);return p?Object(n.jsx)(U.a,{title:Object(n.jsx)(d.a,{id:"my_profile"}),header:{breadcrumb:{routes:[{path:"users",breadcrumbName:b.formatMessage({id:"menu.Users"})},{path:"me",breadcrumbName:b.formatMessage({id:"my_profile"})},{path:String(T),breadcrumbName:b.formatMessage({id:String(T)})}]}},children:Object(n.jsxs)(_.a,{tabs:{type:"card",activeKey:T,onChange:function(x){return d.d.push("/users/me/".concat(x))}},children:[Object(n.jsx)(_.a.TabPane,{tab:Object(n.jsx)(d.a,{id:"general"}),children:Object(n.jsxs)(s.a,Object(O.a)(Object(O.a)({},Q),{},{children:[Object(n.jsxs)(s.a.Group,{children:[Object(n.jsx)(c.a,{width:"md",name:"first_name",label:Object(n.jsx)(d.a,{id:"first_name"}),tooltip:Object(n.jsx)(d.a,{id:"first_name"}),placeholder:b.formatMessage({id:"first_name"}),required:!0}),Object(n.jsx)(c.a,{width:"md",name:"last_name",label:Object(n.jsx)(d.a,{id:"last_name"}),tooltip:Object(n.jsx)(d.a,{id:"last_name"}),placeholder:b.formatMessage({id:"last_name"}),required:!0})]}),Object(n.jsx)(s.a.Group,{children:y.state==="loaded"&&y.list.map(function(I){return Object(n.jsx)(N.a,{field:I})})}),Object(n.jsx)(s.a.Group,{children:Object(n.jsxs)(s.a.Item,{name:"avatar",label:Object(n.jsx)(d.a,{id:"avatar"}),children:[p.path_avatar&&Object(n.jsx)(a.a,{path:p.path_avatar,size:600,width:200}),Object(n.jsx)(D.a,{url:"/api/profile/upload-avatar",name:"avatar",accept:"image/*",onChange:function(x){x.file.status==="done"&&x.file.response.success&&G(x.file.response.data)}})]})})]}))},"general"),Object(n.jsx)(_.a.TabPane,{tab:Object(n.jsx)(d.a,{id:"change_password"}),children:Object(n.jsxs)(s.a,Object(O.a)(Object(O.a)({},z),{},{children:[Object(n.jsx)(s.a.Group,{children:Object(n.jsx)(c.a.Password,{width:"md",name:"current_password",label:Object(n.jsx)(d.a,{id:"current_password"}),placeholder:b.formatMessage({id:"current_password"}),required:!0})}),Object(n.jsxs)(s.a.Group,{children:[Object(n.jsx)(c.a.Password,{width:"md",name:"new_password",label:Object(n.jsx)(d.a,{id:"new_password"}),placeholder:b.formatMessage({id:"new_password"}),required:!0}),Object(n.jsx)(c.a.Password,{width:"md",name:"new_confirm_password",label:Object(n.jsx)(d.a,{id:"new_confirm_password"}),placeholder:b.formatMessage({id:"new_confirm_password"}),required:!0})]})]}))},"change_password"),Object(n.jsx)(_.a.TabPane,{tab:Object(n.jsx)(d.a,{id:"user.settings"}),children:Object(n.jsx)(F.a,{user:String(p.id),isProfile:!0})},"user_settings")]})}):Object(n.jsx)(P.a,{})}}}]);

(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{"5ddx":function(K,m,e){"use strict";var j=e("9og8"),h=e("+L6B"),r=e("2/Rp"),i=e("tJVT"),b=e("WmNS"),P=e.n(b),c=e("q1tI"),E=e.n(c),u=e("9kvl"),D=e("Qiat"),v=e("VK58"),O=e("xvlK"),M=e("Xcxh"),_=e("y8nQ"),l=e("Vl3Y"),n=e("rmhi"),s=e("VMEa"),o=e("Qurx"),a=e("nKUr"),d=function(g){var I=Object(u.i)(),$=g.visible,C=g.onVisibleChange,z=g.onFinish,Z=l.a.useForm(),k=Object(i.a)(Z,1),w=k[0];return Object(c.useEffect)(function(){return function(){w.resetFields()}},[]),Object(a.jsx)(n.a,{form:w,title:I.formatMessage({id:"newSetting",defaultMessage:"newSetting"}),width:"30vw",visible:$,onVisibleChange:C,onFinish:z,children:Object(a.jsxs)(s.b.Group,{children:[Object(a.jsx)(o.a,{label:Object(a.jsx)(u.a,{id:"key",defaultMessage:"key"}),rules:[{required:!0}],width:"md",name:"key"}),Object(a.jsx)(o.a,{label:Object(a.jsx)(u.a,{id:"value",defaultMessage:"value"}),rules:[{required:!0}],width:"md",name:"value"})]})})},f=d,T=function(g){var I=g.user,$=g.isProfile,C=$===void 0?!1:$,z=Object(c.useRef)(),Z=Object(u.i)(),k=Object(c.useState)(!1),w=Object(i.a)(k,2),t=w[0],H=w[1],q=Object(c.useState)("PATCH"),ee=Object(i.a)(q,2),X=ee[0],N=ee[1],W=[{title:Object(a.jsx)(u.a,{id:"key",defaultMessage:"key"}),dataIndex:"key",hideInSearch:!0},{title:Object(a.jsx)(u.a,{id:"value",defaultMessage:"value"}),dataIndex:"value",hideInSearch:!0}],R=Object(c.useCallback)(function(x){var p=x&&Object.entries(x).map(function(J){return{key:J[0],value:J[1]}});return p},[I]);return Object(a.jsxs)(E.a.Fragment,{children:[Object(a.jsx)(D.a,{headerTitle:Z.formatMessage({id:"menu.settings"}),actionRef:z,rowKey:"id",search:!1,toolBarRender:C?function(){return[Object(a.jsxs)(r.a,{type:"primary",onClick:function(){H(-1),N("PATCH")},children:[Object(a.jsx)(O.a,{})," ",Object(a.jsx)(u.a,{id:"pages.searchTable.new"})]},"primary"),Object(a.jsxs)(r.a,{color:"yellow",type:"primary",onClick:function(){H(-1),N("PUT")},children:[Object(a.jsx)(M.a,{})," ",Object(a.jsx)(u.a,{id:"user.settings.overwrite"})]},"primary")]}:!1,request:function(){return Object(v.c)(Number(I)).then(function(p){return p.success?{data:R(p.data)}:[]})},columns:W}),Object(a.jsx)(f,{id:t,visible:Number.isInteger(t),onVisibleChange:function(p){return p===!1&&H(!1)},onFinish:function(){var x=Object(j.a)(P.a.mark(function p(J){var Q;return P.a.wrap(function(G){for(;;)switch(G.prev=G.next){case 0:return G.next=2,Object(v.f)(Number(I),X,J);case 2:Q=G.sent,Q.success&&(H(!1),z.current&&z.current.reload());case 4:case"end":return G.stop()}},p)}));return function(p){return x.apply(this,arguments)}}()})]})},L=m.a=T},BAh9:function(K,m,e){"use strict";e.d(m,"a",function(){return P}),e.d(m,"b",function(){return E}),e.d(m,"e",function(){return D}),e.d(m,"d",function(){return O}),e.d(m,"c",function(){return M});var j=e("k1fw"),h=e("9og8"),r=e("WmNS"),i=e.n(r),b=e("9kvl");function P(l,n){return c.apply(this,arguments)}function c(){return c=Object(h.a)(i.a.mark(function l(n,s){return i.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",Object(b.f)("/api/admin/file/list",Object(j.a)({method:"GET",params:n},s||{})));case 1:case"end":return a.stop()}},l)})),c.apply(this,arguments)}function E(l,n){return u.apply(this,arguments)}function u(){return u=Object(h.a)(i.a.mark(function l(n,s){return i.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",Object(b.f)("/api/admin/file/find",Object(j.a)({method:"GET",params:n},s||{})));case 1:case"end":return a.stop()}},l)})),u.apply(this,arguments)}function D(l,n,s){return v.apply(this,arguments)}function v(){return v=Object(h.a)(i.a.mark(function l(n,s,o){var a;return i.a.wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return a=new FormData,a.append("file[]",n),a.append("target",s),f.abrupt("return",Object(b.f)("/api/admin/file/upload",Object(j.a)({method:"POST",data:a},o||{})));case 4:case"end":return f.stop()}},l)})),v.apply(this,arguments)}var O=function(n){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1e3;return"".concat("https://api-stage.escolalms.com","/api/images/img?path=").concat(n,"&w=").concat(s)};function M(l,n){return _.apply(this,arguments)}function _(){return _=Object(h.a)(i.a.mark(function l(n,s){return i.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",Object(b.f)("/api/admin/file/delete",Object(j.a)({method:"DELETE",data:{url:n}},s||{})));case 1:case"end":return a.stop()}},l)})),_.apply(this,arguments)}},"DBJ/":function(K,m,e){"use strict";var j=e("y8nQ"),h=e("Vl3Y"),r=e("etVw"),i=e("q1tI"),b=e.n(i),P=e("9kvl"),c=e("qFDU"),E=e("nKUr"),u=e.n(E),D=function(O){var M=O.onChange,_=O.url,l=O.name,n=O.extra,s=O.accept,o=O.data,a=O.wrapInForm,d=a===void 0?!0:a,f=Object(P.i)();return o&&o[l]&&delete o[l],Object(E.jsx)(c.a,{condition:d,wrap:function(L){return Object(E.jsx)(h.a,{children:L})},children:Object(E.jsx)(r.a,{title:Object(E.jsx)(P.a,{id:"upload_click_here"}),placeholder:f.formatMessage({id:"upload_click_here"}),onChange:M,label:Object(E.jsx)(P.a,{id:"upload"}),max:2,fieldProps:{data:o,accept:s,name:l,headers:{Authorization:"Bearer ".concat(localStorage.getItem("TOKEN"))}},action:"".concat("https://api-stage.escolalms.com").concat(_),extra:n})})};m.a=D},"F/zT":function(K,m,e){"use strict";var j=e("wx14"),h=e("VTBJ"),r=e("Ff2n"),i=e("q1tI"),b=e.n(i),P=e("adzw"),c=["fieldProps","unCheckedChildren","checkedChildren","proFieldProps"],E=b.a.forwardRef(function(u,D){var v=u.fieldProps,O=u.unCheckedChildren,M=u.checkedChildren,_=u.proFieldProps,l=Object(r.a)(u,c);return b.a.createElement(P.a,Object(j.a)({valueType:"switch",mode:"edit",fieldProps:Object(h.a)({unCheckedChildren:O,checkedChildren:M},v),ref:D,valuePropName:"checked",proFieldProps:_,filedConfig:{valuePropName:"checked",ignoreWidth:!0}},l))});m.a=E},"G/Ub":function(K,m,e){"use strict";e.d(m,"d",function(){return P}),e.d(m,"a",function(){return E}),e.d(m,"b",function(){return D}),e.d(m,"c",function(){return O}),e.d(m,"e",function(){return _});var j=e("k1fw"),h=e("9og8"),r=e("WmNS"),i=e.n(r),b=e("9kvl");function P(n){return c.apply(this,arguments)}function c(){return c=Object(h.a)(i.a.mark(function n(s){return i.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",Object(b.f)("/api/admin/roles",Object(j.a)({method:"GET",useCache:!1},s||{})));case 1:case"end":return a.stop()}},n)})),c.apply(this,arguments)}function E(n,s){return u.apply(this,arguments)}function u(){return u=Object(h.a)(i.a.mark(function n(s,o){return i.a.wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.abrupt("return",Object(b.f)("/api/admin/roles",Object(j.a)({method:"POST",headers:{"Content-Type":"application/json"},data:s},o||{})));case 1:case"end":return d.stop()}},n)})),u.apply(this,arguments)}function D(n,s){return v.apply(this,arguments)}function v(){return v=Object(h.a)(i.a.mark(function n(s,o){return i.a.wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.abrupt("return",Object(b.f)("/api/admin/roles/".concat(s),Object(j.a)({method:"DELETE",headers:{"Content-Type":"application/json"}},o||{})));case 1:case"end":return d.stop()}},n)})),v.apply(this,arguments)}function O(n,s){return M.apply(this,arguments)}function M(){return M=Object(h.a)(i.a.mark(function n(s,o){return i.a.wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.abrupt("return",Object(b.f)("/api/admin/roles/".concat(s),Object(j.a)({method:"GET",useCache:!1},o||{})));case 1:case"end":return d.stop()}},n)})),M.apply(this,arguments)}function _(n,s,o){return l.apply(this,arguments)}function l(){return l=Object(h.a)(i.a.mark(function n(s,o,a){return i.a.wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.abrupt("return",Object(b.f)("/api/admin/roles/".concat(s),Object(j.a)({method:"PATCH",headers:{"Content-Type":"application/json"},data:o},a||{})));case 1:case"end":return f.stop()}},n)})),l.apply(this,arguments)}},Jfn2:function(K,m,e){"use strict";var j=e("k1fw"),h=e("XCrF"),r=e("1GRj"),i=e("PpiC"),b=e("q1tI"),P=e.n(b),c=e("nKUr"),E=e.n(c),u=function(v){var O=v.path,M=v.size,_=v.srcSizes,l=v.alt,n=l===void 0?"LMS Image":l,s=Object(i.a)(v,["path","size","srcSizes","alt"]),o="".concat("https://api-stage.escolalms.com","/api/images/img?path=").concat(O,"&w=").concat(_?_[0]:M),a=_&&_.map(function(d){return"".concat("https://api-stage.escolalms.com","/api/images/img?path=").concat(O,"&w=").concat(d," ").concat(d,"w")});return Object(c.jsx)("div",{className:"escolalms-image",children:Object(c.jsx)(r.a,Object(j.a)({src:o,srcSet:a&&a.join(","),alt:n},s))})};m.a=u},hd5d:function(K,m,e){"use strict";var j=e("9og8"),h=e("WmNS"),r=e.n(h),i=e("q1tI"),b=e.n(i),P=e("3Ef1"),c=e.n(P),E=e("BAh9"),u=e("vtG9"),D=e.n(u),v=e("9kvl"),O=e("nKUr"),M=e.n(O),_=function(n){var s=n.value,o=n.onChange,a=n.directory,d=a===void 0?"/wysiwyg":a,f=Object(v.i)();return Object(O.jsx)("div",{className:"form-wysiwyg-markdown",children:Object(O.jsx)(c.a,{uploadImage:function(){var T=Object(j.a)(r.a.mark(function L(F){var g,I;return r.a.wrap(function(C){for(;;)switch(C.prev=C.next){case 0:return C.next=2,Object(E.e)(F,d);case 2:if(g=C.sent,!g.success){C.next=6;break}return I=g.data[0].name.includes("/")?g.data[0].name:"".concat(d).concat(g.data[0].name),C.abrupt("return",Object(E.d)(I,1e3));case 6:throw new Error("Error while uploading");case 7:case"end":return C.stop()}},L)}));return function(L){return T.apply(this,arguments)}}(),defaultValue:s||"",onChange:function(L){return o&&o(L())},placeholder:f.formatMessage({id:"wysiwyg_placeholder"})})})};m.a=_},tneF:function(K,m,e){"use strict";var j=e("sRBo"),h=e("kaz8"),r=e("wx14"),i=e("VTBJ"),b=e("Ff2n"),P=e("q1tI"),c=e.n(P),E=e("adzw"),u=e("uX+g"),D=e("WFLz"),v=["options","fieldProps","proFieldProps","valueEnum"],O=c.a.forwardRef(function(n,s){var o=n.options,a=n.fieldProps,d=n.proFieldProps,f=n.valueEnum,T=Object(b.a)(n,v);return c.a.createElement(E.a,Object(r.a)({ref:s,valueType:"checkbox",mode:"edit",valueEnum:Object(u.a)(f,void 0),fieldProps:Object(i.a)({options:o},a),proFieldProps:d},T))}),M=c.a.forwardRef(function(n,s){var o=n.fieldProps,a=n.children;return c.a.createElement(h.a,Object(r.a)({ref:s},o),a)}),_=Object(D.a)(M,{valuePropName:"checked"}),l=_;l.Group=O,m.a=l},vtG9:function(K,m,e){},weGn:function(K,m,e){"use strict";e.r(m);var j=e("nhC9"),h=e("Ty5D"),r=e("9kvl"),i=e("tMyG"),b=e("tU7J"),P=e("wFql"),c=e("DYRE"),E=e("zeV3"),u=e("y8nQ"),D=e("Vl3Y"),v=e("+L6B"),O=e("2/Rp"),M=e("T2oS"),_=e("W9HT"),l=e("miYZ"),n=e("tsqr"),s=e("k1fw"),o=e("9og8"),a=e("tJVT"),d=e("WmNS"),f=e.n(d),T=e("q1tI"),L=e.n(T),F=e("VMEa"),g=e("Qurx"),I=e("F/zT"),$=e("tneF"),C=e("VK58"),z=e("hd5d"),Z=e("DBJ/"),k=e("Jfn2"),w=e("G/Ub"),t=e("nKUr"),H=function(X){var N,W=X.isNew,R=Object(r.i)(),x=Object(h.g)(),p=x.user,J=Object(T.useState)(),Q=Object(a.a)(J,2),Y=Q[0],G=Q[1],se=Object(T.useState)(),ne=Object(a.a)(se,2),re=ne[0],ie=ne[1],ae=Object(T.useCallback)(Object(o.a)(f.a.mark(function S(){var A;return f.a.wrap(function(B){for(;;)switch(B.prev=B.next){case 0:return B.next=2,Object(C.j)(Number(p));case 2:A=B.sent,A.success&&G(Object(s.a)(Object(s.a)({},A.data),{},{bio:A.data.bio||""}));case 4:case"end":return B.stop()}},S)})),[p]),oe=Object(T.useCallback)(Object(o.a)(f.a.mark(function S(){var A,U;return f.a.wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return y.next=2,Object(w.d)();case 2:return A=y.sent,y.next=5,A;case 5:U=y.sent,U.success&&ie(U.data);case 7:case"end":return y.stop()}},S)})),[p]);Object(T.useEffect)(function(){if(W){G({});return}ae(),oe()},[p,ae]);var le=Object(T.useMemo)(function(){return{onFinish:function(){var S=Object(o.a)(f.a.mark(function U(B){var y,te;return f.a.wrap(function(V){for(;;)switch(V.prev=V.next){case 0:if(te=Object(s.a)(Object(s.a)({},B),{},{bio:B.bio?B.bio:void 0}),!W){V.next=8;break}return V.next=4,Object(C.a)(te);case 4:y=V.sent,y.success&&r.d.push("/users/".concat(y.data.id,"/user_info")),V.next=11;break;case 8:return V.next=10,Object(C.i)(Number(p),te);case 10:y=V.sent;case 11:n.default.success(y.message);case 12:case"end":return V.stop()}},U)}));function A(U){return S.apply(this,arguments)}return A}(),initialValues:Y}},[Y,p]);return Y?Object(t.jsxs)(F.b,Object(s.a)(Object(s.a)({},le),{},{children:[Object(t.jsxs)(F.b.Group,{children:[Object(t.jsx)(g.a,{width:"md",name:"first_name",label:Object(t.jsx)(r.a,{id:"first_name"}),tooltip:Object(t.jsx)(r.a,{id:"first_name"}),placeholder:R.formatMessage({id:"first_name"}),required:!0}),Object(t.jsx)(g.a,{width:"md",name:"last_name",label:Object(t.jsx)(r.a,{id:"last_name"}),tooltip:Object(t.jsx)(r.a,{id:"last_name"}),placeholder:R.formatMessage({id:"last_name"}),required:!0}),Object(t.jsx)(g.a,{width:"md",name:"email",label:Object(t.jsx)(r.a,{id:"email"}),tooltip:Object(t.jsx)(r.a,{id:"email"}),placeholder:R.formatMessage({id:"email"}),required:!0}),Object(t.jsx)(g.a.Password,{width:"md",name:"password",label:Object(t.jsx)(r.a,{id:"password"}),tooltip:Object(t.jsx)(r.a,{id:"password"}),placeholder:R.formatMessage({id:"password"}),required:W}),!W&&Object(t.jsxs)(E.b,{direction:"vertical",children:[!((N=Y.roles)!==null&&N!==void 0&&N.includes("admin"))&&Object(t.jsx)(I.a,{name:"email_verified",label:Object(t.jsx)(r.a,{id:"is_email_verified"})}),Object(t.jsx)(D.a.Item,{noStyle:!0,shouldUpdate:!0,children:function(A){return A.getFieldValue("email_verified")?Object(t.jsx)(L.a.Fragment,{}):Object(t.jsx)(O.a,{size:"small",onClick:function(){Object(C.e)(A.getFieldValue("email")).then(function(){n.default.success(R.formatMessage({id:"email_resend"}))})},children:Object(t.jsx)(r.a,{id:"resend"})})}})]}),Object(t.jsx)(I.a,{name:"is_active",label:Object(t.jsx)(r.a,{id:"is_active"})}),re&&Object(t.jsx)($.a.Group,{name:"roles",layout:"horizontal",label:Object(t.jsx)(r.a,{id:"roles"}),options:re.map(function(S){return S.name})})]}),Object(t.jsx)(F.b.Item,{name:"bio",label:Object(t.jsx)(r.a,{id:"bio"}),tooltip:Object(t.jsx)(r.a,{id:"bio_tooltip"}),valuePropName:"value",children:Object(t.jsx)(z.a,{directory:"users/".concat(p,"/wysiwyg")})}),!W&&Object(t.jsxs)(F.b.Group,{children:[Object(t.jsx)(F.b.Item,{name:"avatar",label:Object(t.jsx)(r.a,{id:"avatar"}),children:Y.path_avatar?Object(t.jsx)(k.a,{path:Y.path_avatar,size:600,width:200}):Object(t.jsx)(P.a,{children:Object(t.jsx)(r.a,{id:"avatar_placeholder"})})}),Object(t.jsx)(D.a.Item,{noStyle:!0,shouldUpdate:!0,children:function(){return Object(t.jsx)(Z.a,{wrapInForm:!1,url:"/api/admin/users/".concat(p,"/avatar"),name:"avatar",accept:"image/*",onChange:function(U){U.file.status==="done"&&U.file.response.success&&ae()}})}})]})]})):Object(t.jsx)(_.a,{})},q=e("5ddx"),ee=m.default=function(){var X=Object(h.g)(),N=Object(r.i)(),W=X.tab,R=W===void 0?"user_info":W,x=X.user,p=typeof x=="undefined";return Object(t.jsx)(i.a,{title:Object(t.jsx)(r.a,{id:"settings"}),header:{breadcrumb:{routes:[{path:"/users/".concat(x,"/user_info"),breadcrumbName:N.formatMessage({id:"menu.Settings"})},{path:String(R),breadcrumbName:String(R)}]}},children:Object(t.jsxs)(j.a,{tabs:{type:"card",activeKey:R,onChange:function(Q){return r.d.push("/users/".concat(x,"/").concat(Q))}},children:[Object(t.jsx)(j.a.TabPane,{tab:p?Object(t.jsx)(r.a,{id:"new_user"}):Object(t.jsx)(r.a,{id:"edit_user"}),children:Object(t.jsx)(H,{isNew:p})},"user_info"),!p&&Object(t.jsx)(j.a.TabPane,{tab:Object(t.jsx)("span",{children:Object(t.jsx)(r.a,{id:"user.settings"})}),children:x&&Object(t.jsx)(q.a,{user:x,isProfile:!1})},"settings")]})})}}}]);

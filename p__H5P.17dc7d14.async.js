(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"5YLw":function(W,O,e){"use strict";var P=e("DBJ/"),p=e("q1tI"),T=e.n(p),o=e("nKUr"),v=e.n(o),_=function(i){var M=i.onSuccess,b=i.onError;return Object(o.jsx)(P.a,{url:"/api/admin/hh5p/content/upload",name:"h5p_file",accept:".h5p",onChange:function(a){a.file.status==="done"&&a.file.response&&M(a.file.response),a.file.status==="error"&&b()}})};O.a=_},"DBJ/":function(W,O,e){"use strict";var P=e("y8nQ"),p=e("Vl3Y"),T=e("etVw"),o=e("q1tI"),v=e.n(o),_=e("9kvl"),E=function(j){var a=j.condition,f=j.children,n=j.wrap;return a?v.a.cloneElement(n(f)):f},i=e("nKUr"),M=function(a){var f=a.onChange,n=a.url,d=a.name,r=a.extra,l=a.accept,s=a.data,I=a.wrapInForm,C=I===void 0?!0:I,x=Object(_.i)();return s&&s[d]&&delete s[d],Object(i.jsx)(E,{condition:C,wrap:function(U){return Object(i.jsx)(p.a,{children:U})},children:Object(i.jsx)(T.a,{title:Object(i.jsx)(_.a,{id:"upload_click_here"}),placeholder:x.formatMessage({id:"upload_click_here"}),onChange:f,label:Object(i.jsx)(_.a,{id:"upload"}),max:2,fieldProps:{data:s,accept:l,name:d,headers:{Authorization:"Bearer ".concat(localStorage.getItem("TOKEN"))}},action:"".concat("https://api-stage.escolalms.com").concat(n),extra:r})})},b=O.a=M},Unir:function(W,O,e){"use strict";e.r(O);var P=e("P2fV"),p=e("NJEC"),T=e("5Dmo"),o=e("3S7+"),v=e("+L6B"),_=e("2/Rp"),E=e("miYZ"),i=e("tsqr"),M=e("9og8"),b=e("tJVT"),j=e("WmNS"),a=e.n(j),f=e("xvlK"),n=e("q1tI"),d=e.n(n),r=e("9kvl"),l=e("55Ip"),s=e("tMyG"),I=e("Qiat"),C=e("nzng"),x=e("G3dp"),B=e("/MfK"),U=e("2PG1"),A=e("4KAj"),F=e("5YLw"),t=e("nKUr"),z=e.n(t),R=function(){var H=Object(n.useState)(!1),S=Object(b.a)(H,2),$=S[0],g=S[1],h=Object(n.useRef)(),V=Object(r.i)(),J=Object(n.useCallback)(function(){var D=Object(M.a)(a.a.mark(function c(u){var L,K;return a.a.wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return g(!0),L=i.default.loading(Object(t.jsx)(r.a,{id:"loading",defaultMessage:"loading"})),m.prev=2,m.next=5,Object(C.d)(u);case 5:return L(),i.default.success(Object(t.jsx)(r.a,{id:"success",defaultMessage:"success"})),g(!1),(K=h.current)===null||K===void 0||K.reload(),m.abrupt("return",!0);case 12:return m.prev=12,m.t0=m.catch(2),L(),i.default.error(Object(t.jsx)(r.a,{id:"error",defaultMessage:"error"})),g(!1),m.abrupt("return",!1);case 18:case"end":return m.stop()}},c,null,[[2,12]])}));return function(c){return D.apply(this,arguments)}}(),[h]),N=[{title:Object(t.jsx)(r.a,{id:"ID",defaultMessage:"ID"}),dataIndex:"id",sorter:!1,search:!1},{title:Object(t.jsx)(r.a,{id:"newH5P",defaultMessage:"newH5P"}),dataIndex:"upload",hideInSearch:!1,hideInTable:!0,renderFormItem:function(){return[Object(t.jsx)(F.a,{onSuccess:function(){h.current&&h.current.reload(),i.default.success(Object(t.jsx)(r.a,{id:"H5P_uploaded",defaultMessage:"new H5P uploaded successfully"}))},onError:function(){return i.default.error(Object(t.jsx)(r.a,{id:"error",defaultMessage:"error"}))}})]}},{title:Object(t.jsx)(r.a,{id:"title",defaultMessage:"title"}),dataIndex:"title",sorter:!1,render:function(c,u){return u.title}},{title:Object(t.jsx)(r.a,{id:"library",defaultMessage:"library"}),dataIndex:"library",sorter:!1,search:!1,render:function(c,u){return u.library.title}},{title:Object(t.jsx)(r.a,{id:"library_id",defaultMessage:"library_id"}),dataIndex:"library_id",sorter:!1,render:function(c,u){return u.library.id}},{title:Object(t.jsx)(r.a,{id:"count_h5p",defaultMessage:"count_h5p"}),dataIndex:"count_h5p",sorter:!1,search:!1,render:function(c,u){return u.count_h5p}},{title:Object(t.jsx)(r.a,{id:"options",defaultMessage:"options"}),dataIndex:"option",valueType:"option",render:function(c,u){return[Object(t.jsx)(l.a,{to:"/h5ps/".concat(u.id),children:Object(t.jsx)(o.a,{title:Object(t.jsx)(r.a,{id:"edit",defaultMessage:"edit"}),children:Object(t.jsx)(_.a,{type:"primary",icon:Object(t.jsx)(x.a,{})})})}),Object(t.jsx)(p.a,{title:Object(t.jsx)(r.a,{id:"deleteQuestion",defaultMessage:"Are you sure to delete this record?"}),onConfirm:function(){return u.id&&J(u.id)},okText:Object(t.jsx)(r.a,{id:"yes",defaultMessage:"Yes"}),cancelText:Object(t.jsx)(r.a,{id:"no",defaultMessage:"No"}),children:Object(t.jsx)(o.a,{title:Object(t.jsx)(r.a,{id:"delete",defaultMessage:"delete"}),children:Object(t.jsx)(_.a,{type:"primary",icon:Object(t.jsx)(B.a,{}),danger:!0})})}),Object(t.jsx)(l.a,{to:"/h5ps/preview/".concat(u.id),children:Object(t.jsx)(o.a,{title:Object(t.jsx)(r.a,{id:"preview",defaultMessage:"preview"}),children:Object(t.jsx)(_.a,{icon:Object(t.jsx)(U.a,{})})})}),Object(t.jsx)("a",{href:"".concat("https://api-stage.escolalms.com","/api/admin/hh5p/content/").concat(u.id,"/export"),download:!0,children:Object(t.jsx)(o.a,{title:Object(t.jsx)(r.a,{id:"export",defaultMessage:"export"}),children:Object(t.jsx)(_.a,{icon:Object(t.jsx)(A.a,{})})})})]}}];return Object(t.jsx)(s.a,{children:Object(t.jsx)(I.a,{loading:$,headerTitle:V.formatMessage({id:"H5Ps",defaultMessage:"H5Ps List"}),actionRef:h,rowKey:"id",search:{labelWidth:120},toolBarRender:function(){return[Object(t.jsx)(l.a,{to:"/h5ps/new",children:Object(t.jsxs)(_.a,{type:"primary",children:[Object(t.jsx)(f.a,{})," ",Object(t.jsx)(r.a,{id:"new",defaultMessage:"new"})]},"primary")})]},request:function(c){var u=c.pageSize,L=c.current,K=c.title,G=c.library_id;return g(!0),Object(C.c)({title:K,library_id:G,pageSize:u,current:L}).then(function(m){return g(!1),m.success?{data:m.data,total:m.meta.total,success:!0}:[]})},columns:N})})};O.default=R},etVw:function(W,O,e){"use strict";var P=e("DZo9"),p=e("8z0m"),T=e("+L6B"),o=e("2/Rp"),v=e("wx14"),_=e("q1tI"),E=e.n(_),i=e("z7Xi"),M=e("WFLz"),b=function(a,f){var n=a.fieldProps,d=a.name,r=a.action,l=a.accept,s=a.listType,I=a.title,C=I===void 0?"\u5355\u51FB\u4E0A\u4F20":I,x=a.max,B=a.icon,U=B===void 0?E.a.createElement(i.a,null):B,A=a.value,F=a.buttonProps,t=a.onChange,z=a.disabled,R=a.proFieldProps,y=a.fileList,H=(x===void 0||!A||(A==null?void 0:A.length)<x)&&(R==null?void 0:R.mode)!=="read",S=(s!=null?s:n==null?void 0:n.listType)==="picture-card";return E.a.createElement(p.a,Object(v.a)({action:r,accept:l,ref:f,name:d||"file",listType:s||"picture",fileList:y!=null?y:A},n,{onChange:function(g){var h;t==null||t(g),n==null||(h=n.onChange)===null||h===void 0||h.call(n,g)}}),H&&(S?E.a.createElement("span",null,U," ",C):E.a.createElement(o.a,Object(v.a)({disabled:z||(n==null?void 0:n.disabled)},F),U,C)))};O.a=Object(M.a)(E.a.forwardRef(b),{getValueFromEvent:function(a){return a.fileList}})},nzng:function(W,O,e){"use strict";e.d(O,"c",function(){return _}),e.d(O,"b",function(){return i}),e.d(O,"d",function(){return b}),e.d(O,"a",function(){return a});var P=e("k1fw"),p=e("9og8"),T=e("WmNS"),o=e.n(T),v=e("9kvl");function _(n,d){return E.apply(this,arguments)}function E(){return E=Object(p.a)(o.a.mark(function n(d,r){return o.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.abrupt("return",Object(v.f)("/api/admin/hh5p/content",Object(P.a)({method:"GET",useCache:!1,params:Object(P.a)(Object(P.a)({},d),{},{per_page:d.pageSize,page:d.current})},r||{})));case 1:case"end":return s.stop()}},n)})),E.apply(this,arguments)}function i(n,d){return M.apply(this,arguments)}function M(){return M=Object(p.a)(o.a.mark(function n(d,r){return o.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.abrupt("return",Object(v.f)("/api/admin/hh5p/content/".concat(d),Object(P.a)({method:"GET",useCache:!1},r||{})));case 1:case"end":return s.stop()}},n)})),M.apply(this,arguments)}function b(n){return j.apply(this,arguments)}function j(){return j=Object(p.a)(o.a.mark(function n(d){return o.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.abrupt("return",Object(v.f)("/api/admin/hh5p/content/".concat(d),{method:"DELETE"}));case 1:case"end":return l.stop()}},n)})),j.apply(this,arguments)}function a(n){return f.apply(this,arguments)}function f(){return f=Object(p.a)(o.a.mark(function n(d){return o.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.abrupt("return",Object(v.f)("/api/admin/hh5p/content?per_page=0",Object(P.a)({method:"GET",useCache:!1},d||{})));case 1:case"end":return l.stop()}},n)})),f.apply(this,arguments)}}}]);

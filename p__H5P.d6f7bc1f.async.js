(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{"5YLw":function(K,E,e){"use strict";var j=e("DBJ/"),P=e("q1tI"),C=e.n(P),o=e("nKUr"),O=e.n(o),p=function(h){var v=h.onSuccess,m=h.onError;return Object(o.jsx)(j.a,{url:"/api/admin/hh5p/content/upload",name:"h5p_file",accept:".h5p",onChange:function(a){a.file.status==="done"&&a.file.response&&v(a.file.response),a.file.status==="error"&&m()}})};E.a=p},"DBJ/":function(K,E,e){"use strict";var j=e("k1fw"),P=e("y8nQ"),C=e("Vl3Y"),o=e("etVw"),O=e("9kvl"),p=e("qFDU"),c=e("nKUr"),h=e.n(c);function v(m){var b=m.onChange,a=m.onUpload,A=m.url,l=m.name,T=m.extra,n=m.accept,s=m.data,d=m.wrapInForm,_=d===void 0?!0:d,u=m.title,g=m.formProps,L=Object(O.i)();return s&&s[l]&&delete s[l],Object(c.jsx)(p.a,{condition:_,wrap:function(f){return Object(c.jsx)(C.a,Object(j.a)(Object(j.a)({},g),{},{children:f}))},children:Object(c.jsx)(o.a,{title:u||Object(c.jsx)(O.a,{id:"upload_click_here"}),placeholder:L.formatMessage({id:"upload_click_here"}),onChange:function(f){b&&b(f),f.file.status==="done"&&a&&a(f.file.response)},label:Object(c.jsx)(O.a,{id:"upload"}),max:2,fieldProps:{data:s,accept:n,name:l,headers:{Authorization:"Bearer ".concat(localStorage.getItem("TOKEN"))}},action:"".concat("https://api-stage.escolalms.com").concat(A),extra:T})})}E.a=v},Unir:function(K,E,e){"use strict";e.r(E);var j=e("P2fV"),P=e("NJEC"),C=e("5Dmo"),o=e("3S7+"),O=e("+L6B"),p=e("2/Rp"),c=e("miYZ"),h=e("tsqr"),v=e("9og8"),m=e("tJVT"),b=e("WmNS"),a=e.n(b),A=e("xvlK"),l=e("q1tI"),T=e.n(l),n=e("9kvl"),s=e("55Ip"),d=e("tMyG"),_=e("Qiat"),u=e("nzng"),g=e("G3dp"),L=e("/MfK"),B=e("2PG1"),f=e("4KAj"),F=e("5YLw"),t=e("nKUr"),$=e.n(t),x=function(){var H=Object(l.useState)(!1),S=Object(m.a)(H,2),z=S[0],U=S[1],I=Object(l.useRef)(),V=Object(n.i)(),J=Object(l.useCallback)(function(){var D=Object(v.a)(a.a.mark(function i(r){var R,W;return a.a.wrap(function(M){for(;;)switch(M.prev=M.next){case 0:return U(!0),R=h.default.loading(Object(t.jsx)(n.a,{id:"loading",defaultMessage:"loading"})),M.prev=2,M.next=5,Object(u.e)(r);case 5:return R(),h.default.success(Object(t.jsx)(n.a,{id:"success",defaultMessage:"success"})),U(!1),(W=I.current)===null||W===void 0||W.reload(),M.abrupt("return",!0);case 12:return M.prev=12,M.t0=M.catch(2),R(),h.default.error(Object(t.jsx)(n.a,{id:"error",defaultMessage:"error"})),U(!1),M.abrupt("return",!1);case 18:case"end":return M.stop()}},i,null,[[2,12]])}));return function(i){return D.apply(this,arguments)}}(),[I]),N=[{title:Object(t.jsx)(n.a,{id:"ID",defaultMessage:"ID"}),dataIndex:"id",sorter:!1,search:!1},{title:Object(t.jsx)(n.a,{id:"newH5P",defaultMessage:"newH5P"}),dataIndex:"upload",hideInSearch:!1,hideInTable:!0,renderFormItem:function(){return[Object(t.jsx)(F.a,{onSuccess:function(){I.current&&I.current.reload(),h.default.success(Object(t.jsx)(n.a,{id:"H5P_uploaded",defaultMessage:"new H5P uploaded successfully"}))},onError:function(){return h.default.error(Object(t.jsx)(n.a,{id:"error",defaultMessage:"error"}))}})]}},{title:Object(t.jsx)(n.a,{id:"title",defaultMessage:"title"}),dataIndex:"title",sorter:function(i,r){return i.title.length-r.title.length},render:function(i,r){return r.title}},{title:Object(t.jsx)(n.a,{id:"library",defaultMessage:"library"}),dataIndex:"library",sorter:function(i,r){return i.library.title.length-r.library.title.length},search:!1,render:function(i,r){return r.library.title}},{title:Object(t.jsx)(n.a,{id:"library_id",defaultMessage:"library_id"}),dataIndex:"library_id",sorter:function(i,r){return i.library.id-r.library.id},render:function(i,r){return r.library.id}},{title:Object(t.jsx)(n.a,{id:"count_h5p",defaultMessage:"count_h5p"}),dataIndex:"count_h5p",sorter:function(i,r){return i.count_h5p-r.count_h5p},search:!1,render:function(i,r){return r.count_h5p}},{title:Object(t.jsx)(n.a,{id:"options",defaultMessage:"options"}),dataIndex:"option",valueType:"option",render:function(i,r){return[Object(t.jsx)(s.a,{to:"/h5ps/".concat(r.id),children:Object(t.jsx)(o.a,{title:Object(t.jsx)(n.a,{id:"edit",defaultMessage:"edit"}),children:Object(t.jsx)(p.a,{type:"primary",icon:Object(t.jsx)(g.a,{})})})}),Object(t.jsx)(P.a,{disabled:r.count_h5p!==0,title:Object(t.jsx)(n.a,{id:"deleteQuestion",defaultMessage:"Are you sure to delete this record?"}),onConfirm:function(){return r.id&&J(r.id)},okText:Object(t.jsx)(n.a,{id:"yes",defaultMessage:"Yes"}),cancelText:Object(t.jsx)(n.a,{id:"no",defaultMessage:"No"}),children:Object(t.jsx)(o.a,{title:Object(t.jsx)(n.a,{id:"delete",defaultMessage:"delete"}),children:Object(t.jsx)(p.a,{disabled:r.count_h5p!==0,type:"primary",icon:Object(t.jsx)(L.a,{}),danger:!0})})}),Object(t.jsx)(s.a,{to:"/h5ps/preview/".concat(r.id),children:Object(t.jsx)(o.a,{title:Object(t.jsx)(n.a,{id:"preview",defaultMessage:"preview"}),children:Object(t.jsx)(p.a,{icon:Object(t.jsx)(B.a,{})})})}),Object(t.jsx)("a",{href:"".concat("https://api-stage.escolalms.com","/api/admin/hh5p/content/").concat(r.id,"/export"),download:!0,children:Object(t.jsx)(o.a,{title:Object(t.jsx)(n.a,{id:"export",defaultMessage:"export"}),children:Object(t.jsx)(p.a,{icon:Object(t.jsx)(f.a,{})})})})]}}];return Object(t.jsx)(d.a,{children:Object(t.jsx)(_.a,{loading:z,headerTitle:V.formatMessage({id:"H5Ps",defaultMessage:"H5Ps List"}),actionRef:I,rowKey:"id",search:{labelWidth:120},toolBarRender:function(){return[Object(t.jsx)(s.a,{to:"/h5ps/new",children:Object(t.jsxs)(p.a,{type:"primary",children:[Object(t.jsx)(A.a,{})," ",Object(t.jsx)(n.a,{id:"new",defaultMessage:"new"})]},"primary")})]},request:function(i){var r=i.pageSize,R=i.current,W=i.title,G=i.library_id;return U(!0),Object(u.d)({title:W,library_id:G,pageSize:r,current:R}).then(function(M){return U(!1),M.success?{data:M.data,total:M.meta.total,success:!0}:[]})},columns:N})})};E.default=x},etVw:function(K,E,e){"use strict";var j=e("DZo9"),P=e("8z0m"),C=e("+L6B"),o=e("2/Rp"),O=e("wx14"),p=e("q1tI"),c=e.n(p),h=e("z7Xi"),v=e("WFLz"),m=function(a,A){var l=a.fieldProps,T=a.name,n=a.action,s=a.accept,d=a.listType,_=a.title,u=_===void 0?"\u5355\u51FB\u4E0A\u4F20":_,g=a.max,L=a.icon,B=L===void 0?c.a.createElement(h.a,null):L,f=a.value,F=a.buttonProps,t=a.onChange,$=a.disabled,x=a.proFieldProps,y=a.fileList,H=(g===void 0||!f||(f==null?void 0:f.length)<g)&&(x==null?void 0:x.mode)!=="read",S=(d!=null?d:l==null?void 0:l.listType)==="picture-card";return c.a.createElement(P.a,Object(O.a)({action:n,accept:s,ref:A,name:T||"file",listType:d||"picture",fileList:y!=null?y:f},l,{onChange:function(U){var I;t==null||t(U),l==null||(I=l.onChange)===null||I===void 0||I.call(l,U)}}),H&&(S?c.a.createElement("span",null,B," ",u):c.a.createElement(o.a,Object(O.a)({disabled:$||(l==null?void 0:l.disabled)},F),B,u)))};E.a=Object(v.a)(c.a.forwardRef(m),{getValueFromEvent:function(a){return a.fileList}})},nzng:function(K,E,e){"use strict";e.d(E,"d",function(){return p}),e.d(E,"c",function(){return h}),e.d(E,"b",function(){return m}),e.d(E,"e",function(){return a}),e.d(E,"a",function(){return l});var j=e("k1fw"),P=e("9og8"),C=e("WmNS"),o=e.n(C),O=e("9kvl");function p(n,s){return c.apply(this,arguments)}function c(){return c=Object(P.a)(o.a.mark(function n(s,d){return o.a.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.abrupt("return",Object(O.f)("/api/admin/hh5p/content",Object(j.a)({method:"GET",useCache:!1,params:Object(j.a)(Object(j.a)({},s),{},{per_page:s.pageSize,page:s.current})},d||{})));case 1:case"end":return u.stop()}},n)})),c.apply(this,arguments)}function h(n,s){return v.apply(this,arguments)}function v(){return v=Object(P.a)(o.a.mark(function n(s,d){return o.a.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.abrupt("return",Object(O.f)("/api/admin/hh5p/content/".concat(s),Object(j.a)({method:"GET",useCache:!1},d||{})));case 1:case"end":return u.stop()}},n)})),v.apply(this,arguments)}function m(n,s,d){return b.apply(this,arguments)}function b(){return b=Object(P.a)(o.a.mark(function n(s,d,_){return o.a.wrap(function(g){for(;;)switch(g.prev=g.next){case 0:return g.abrupt("return",Object(O.f)(d?"/api/admin/hh5p/content/".concat(d):"/api/admin/hh5p/content",Object(j.a)({method:"POST",headers:{"Content-Type":"application/json"},data:s,useCache:!1},_||{})));case 1:case"end":return g.stop()}},n)})),b.apply(this,arguments)}function a(n){return A.apply(this,arguments)}function A(){return A=Object(P.a)(o.a.mark(function n(s){return o.a.wrap(function(_){for(;;)switch(_.prev=_.next){case 0:return _.abrupt("return",Object(O.f)("/api/admin/hh5p/content/".concat(s),{method:"DELETE"}));case 1:case"end":return _.stop()}},n)})),A.apply(this,arguments)}function l(n){return T.apply(this,arguments)}function T(){return T=Object(P.a)(o.a.mark(function n(s){return o.a.wrap(function(_){for(;;)switch(_.prev=_.next){case 0:return _.abrupt("return",Object(O.f)("/api/admin/hh5p/content?per_page=0",Object(j.a)({method:"GET",useCache:!1},s||{})));case 1:case"end":return _.stop()}},n)})),T.apply(this,arguments)}},qFDU:function(K,E,e){"use strict";var j=e("q1tI"),P=e.n(j);E.a=function(C){var o=C.condition,O=C.children,p=C.wrap;return o?P.a.cloneElement(p(O)):O}}}]);

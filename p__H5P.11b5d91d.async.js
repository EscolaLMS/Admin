(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"5YLw":function(W,b,t){"use strict";var j=t("DBJ/"),m=t("q1tI"),D=t.n(m),d=t("nKUr"),B=t.n(d),p=function(P){var h=P.onSuccess,L=P.onError,x=P.hideLabel;return Object(d.jsx)(j.a,{url:"/api/admin/hh5p/content/upload",name:"h5p_file",accept:".h5p",hideLabel:x,onChange:function(f){f.file.status==="done"&&f.file.response&&h(f.file.response),f.file.status==="error"&&L()}})};b.a=p},Unir:function(W,b,t){"use strict";t.r(b);var j=t("P2fV"),m=t("NJEC"),D=t("5Dmo"),d=t("3S7+"),B=t("+L6B"),p=t("2/Rp"),C=t("qLMh"),P=t("miYZ"),h=t("tsqr"),L=t("9og8"),x=t("tJVT"),I=t("xvlK"),f=t("q1tI"),K=t.n(f),a=t("9kvl"),A=t("55Ip"),u=t("tMyG"),i=t("Qiat"),l=t("nzng"),o=t("G3dp"),s=t("/MfK"),y=t("2PG1"),w=t("4KAj"),H=t("5YLw"),e=t("nKUr"),Q=t.n(e),G=function(){var $=Object(f.useState)(!1),S=Object(x.a)($,2),z=S[0],v=S[1],U=Object(f.useRef)(),J=Object(a.l)(),Y=Object(f.useCallback)(function(){var c=Object(L.a)(Object(C.a)().mark(function r(n){var E,g;return Object(C.a)().wrap(function(_){for(;;)switch(_.prev=_.next){case 0:return v(!0),E=h.b.loading(Object(e.jsx)(a.a,{id:"loading",defaultMessage:"loading"})),_.prev=2,_.next=5,Object(l.e)(n);case 5:return E(),h.b.success(Object(e.jsx)(a.a,{id:"success",defaultMessage:"success"})),v(!1),(g=U.current)===null||g===void 0||g.reload(),_.abrupt("return",!0);case 12:return _.prev=12,_.t0=_.catch(2),E(),h.b.error(Object(e.jsx)(a.a,{id:"error",defaultMessage:"error"})),v(!1),_.abrupt("return",!1);case 18:case"end":return _.stop()}},r,null,[[2,12]])}));return function(r){return c.apply(this,arguments)}}(),[U]),N=Object(f.useCallback)(function(){var c=Object(L.a)(Object(C.a)().mark(function r(n,E){var g,R,_,T,M;return Object(C.a)().wrap(function(O){for(;;)switch(O.prev=O.next){case 0:return v(!0),g=h.b.loading(Object(e.jsx)(a.a,{id:"loading",defaultMessage:"loading"})),O.prev=2,O.next=5,fetch("".concat(window.REACT_APP_API_URL||"https://api-stage.escolalms.com","/api/admin/hh5p/content/").concat(n,"/export"),{headers:{Authorization:"Bearer ".concat(localStorage.getItem("TOKEN"))}});case 5:if(R=O.sent,R.ok){O.next=8;break}throw Error("Error occured");case 8:return g(),v(!1),h.b.success(Object(e.jsx)(a.a,{id:"downloading",defaultMessage:"Downloading"})),O.next=13,R.blob();case 13:_=O.sent,T=window.URL.createObjectURL(_),M=document.createElement("a"),M.href=T,M.download="".concat(E.split(" ").join("-").toLocaleLowerCase()),M.click(),M.remove(),O.next=28;break;case 22:return O.prev=22,O.t0=O.catch(2),g(),v(!1),h.b.error(Object(e.jsx)(a.a,{id:"cant-download-file",defaultMessage:"Can't download file"})),O.abrupt("return");case 28:case"end":return O.stop()}},r,null,[[2,22]])}));return function(r,n){return c.apply(this,arguments)}}(),[]),F=[{title:Object(e.jsx)(a.a,{id:"ID",defaultMessage:"ID"}),dataIndex:"id",sorter:!0,search:!1},{title:Object(e.jsx)(a.a,{id:"newH5P",defaultMessage:"newH5P"}),dataIndex:"upload",hideInSearch:!1,hideInTable:!0,renderFormItem:function(){return[Object(e.jsx)(H.a,{hideLabel:!0,onSuccess:function(){U.current&&U.current.reload(),h.b.success(Object(e.jsx)(a.a,{id:"H5P_uploaded",defaultMessage:"new H5P uploaded successfully"}))},onError:function(){return h.b.error(Object(e.jsx)(a.a,{id:"error",defaultMessage:"error"}))}},"upload")]}},{title:Object(e.jsx)(a.a,{id:"title",defaultMessage:"title"}),dataIndex:"title",sorter:function(r,n){return r.title.length-n.title.length},render:function(r,n){return n.title}},{title:Object(e.jsx)(a.a,{id:"library",defaultMessage:"library"}),dataIndex:"library",sorter:function(r,n){return r.library.title.length-n.library.title.length},search:!1,render:function(r,n){return n.library.title}},{title:Object(e.jsx)(a.a,{id:"library_id",defaultMessage:"library_id"}),dataIndex:"library_id",sorter:function(r,n){return r.library.id-n.library.id},render:function(r,n){return n.library.id}},{title:Object(e.jsx)(a.a,{id:"count_h5p",defaultMessage:"count_h5p"}),dataIndex:"count_h5p",sorter:function(r,n){return r.count_h5p-n.count_h5p},search:!1,render:function(r,n){return n.count_h5p}},{title:Object(e.jsx)(a.a,{id:"options",defaultMessage:"options"}),dataIndex:"option",valueType:"option",render:function(r,n){return[Object(e.jsx)(A.a,{to:"/courses/h5ps/".concat(n.id),children:Object(e.jsx)(d.a,{title:Object(e.jsx)(a.a,{id:"edit",defaultMessage:"edit"}),children:Object(e.jsx)(p.a,{type:"primary",icon:Object(e.jsx)(o.a,{})})})},"edit"),Object(e.jsx)(m.a,{disabled:n.count_h5p!==0,title:Object(e.jsx)(a.a,{id:"deleteQuestion",defaultMessage:"Are you sure to delete this record?"}),onConfirm:function(){return n.id&&Y(n.id)},okText:Object(e.jsx)(a.a,{id:"yes",defaultMessage:"Yes"}),cancelText:Object(e.jsx)(a.a,{id:"no",defaultMessage:"No"}),children:Object(e.jsx)(d.a,{title:Object(e.jsx)(a.a,{id:"delete",defaultMessage:"delete"}),children:Object(e.jsx)(p.a,{disabled:n.count_h5p!==0,type:"primary",icon:Object(e.jsx)(s.a,{}),danger:!0})})},"delete"),Object(e.jsx)(A.a,{to:"/courses/h5ps/preview/".concat(n.id),children:Object(e.jsx)(d.a,{title:Object(e.jsx)(a.a,{id:"preview",defaultMessage:"preview"}),children:Object(e.jsx)(p.a,{icon:Object(e.jsx)(y.a,{})})})},"preview"),Object(e.jsx)(d.a,{title:Object(e.jsx)(a.a,{id:"export",defaultMessage:"export"}),children:Object(e.jsx)(p.a,{icon:Object(e.jsx)(w.a,{}),onClick:function(){return N(n.id,n.title)}})},"export")]}}];return Object(e.jsx)(u.a,{children:Object(e.jsx)(i.a,{loading:z,headerTitle:J.formatMessage({id:"menu.Courses.H5Ps",defaultMessage:"H5Ps List"}),actionRef:U,rowKey:"id",search:{layout:"vertical"},toolBarRender:function(){return[Object(e.jsx)(A.a,{to:"/courses/h5ps/new",children:Object(e.jsxs)(p.a,{type:"primary",children:[Object(e.jsx)(I.a,{})," ",Object(e.jsx)(a.a,{id:"new",defaultMessage:"new"})]},"primary")},"new")]},request:function(r,n){var E=r.pageSize,g=r.current,R=r.title,_=r.library_id;v(!0);var T=n&&Object.entries(n)[0];return Object(l.d)({title:R,library_id:_,pageSize:E,current:g,order_by:T&&T[0],order:T?T[1]==="ascend"?"ASC":"DESC":void 0}).then(function(M){return v(!1),M.success?{data:M.data,total:M.meta.total,success:!0}:[]})},columns:F})})};b.default=G},nzng:function(W,b,t){"use strict";t.d(b,"d",function(){return B}),t.d(b,"c",function(){return h}),t.d(b,"b",function(){return L}),t.d(b,"f",function(){return x}),t.d(b,"e",function(){return f}),t.d(b,"a",function(){return a});var j=t("qLMh"),m=t("k1fw"),D=t("9og8"),d=t("9kvl");function B(u,i){return p.apply(this,arguments)}function p(){return p=Object(D.a)(Object(j.a)().mark(function u(i,l){return Object(j.a)().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.abrupt("return",Object(d.i)("/api/admin/hh5p/content",Object(m.a)({method:"GET",params:Object(m.a)(Object(m.a)({},i),{},{per_page:i.pageSize,page:i.current})},l||{})));case 1:case"end":return s.stop()}},u)})),p.apply(this,arguments)}function C(u,i){return P.apply(this,arguments)}function P(){return P=Object(D.a)(Object(j.a)().mark(function u(i,l){return Object(j.a)().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.abrupt("return",Object(d.i)("/api/admin/hh5p/content/".concat(i),Object(m.a)({method:"GET"},l||{})));case 1:case"end":return s.stop()}},u)})),P.apply(this,arguments)}var h=function(i){var l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"en",o=arguments.length>2?arguments[2]:void 0,s=i?"/api/admin/hh5p/editor/".concat(i):"/api/admin/hh5p/editor";return s=l?"".concat(s,"?lang=").concat(l):s,Object(d.i)(s,Object(m.a)({method:"GET"},o||{}))},L=function(i){var l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"en",o=arguments.length>2?arguments[2]:void 0,s="/api/admin/hh5p/content/".concat(i);return s=l?"".concat(s,"?lang=").concat(l):s,Object(d.i)(s,Object(m.a)({method:"GET"},o||{}))};function x(u,i,l){return I.apply(this,arguments)}function I(){return I=Object(D.a)(Object(j.a)().mark(function u(i,l,o){return Object(j.a)().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return y.abrupt("return",Object(d.i)(l?"/api/admin/hh5p/content/".concat(l):"/api/admin/hh5p/content",Object(m.a)({method:"POST",headers:{"Content-Type":"application/json"},data:i},o||{})));case 1:case"end":return y.stop()}},u)})),I.apply(this,arguments)}function f(u){return K.apply(this,arguments)}function K(){return K=Object(D.a)(Object(j.a)().mark(function u(i){return Object(j.a)().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.abrupt("return",Object(d.i)("/api/admin/hh5p/content/".concat(i),{method:"DELETE"}));case 1:case"end":return o.stop()}},u)})),K.apply(this,arguments)}function a(u){return A.apply(this,arguments)}function A(){return A=Object(D.a)(Object(j.a)().mark(function u(i){return Object(j.a)().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.abrupt("return",Object(d.i)("/api/admin/hh5p/content?per_page=0",Object(m.a)({method:"GET"},i||{})));case 1:case"end":return o.stop()}},u)})),A.apply(this,arguments)}}}]);

(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{"5tKr":function(K,E,e){"use strict";e.d(E,"b",function(){return I}),e.d(E,"a",function(){return v});var m=e("qLMh"),j=e("k1fw"),_=e("9og8"),f=e("9kvl");function I(d,a){return p.apply(this,arguments)}function p(){return p=Object(_.a)(Object(m.a)().mark(function d(a,r){return Object(m.a)().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",Object(f.i)("/api/admin/scorm",Object(j.a)({params:Object(j.a)(Object(j.a)({},a),{},{per_page:a.pageSize,page:a.current}),method:"GET",useCache:!1},r||{})));case 1:case"end":return n.stop()}},d)})),p.apply(this,arguments)}function B(d,a){return h.apply(this,arguments)}function h(){return h=Object(_.a)(Object(m.a)().mark(function d(a,r){return Object(m.a)().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",Object(f.i)("/api/admin/scorm/scos",Object(j.a)({params:Object(j.a)(Object(j.a)({},a),{},{per_page:a.pageSize,page:a.current}),method:"GET",useCache:!1},r||{})));case 1:case"end":return n.stop()}},d)})),h.apply(this,arguments)}function v(d,a){return u.apply(this,arguments)}function u(){return u=Object(_.a)(Object(m.a)().mark(function d(a,r){return Object(m.a)().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",Object(f.i)("/api/admin/scorm/".concat(a),Object(j.a)({method:"DELETE"},r||{})));case 1:case"end":return n.stop()}},d)})),u.apply(this,arguments)}},"DBJ/":function(K,E,e){"use strict";var m=e("k1fw"),j=e("y8nQ"),_=e("Vl3Y"),f=e("tJVT"),I=e("etVw"),p=e("q1tI"),B=e.n(p),h=e("9kvl"),v=e("qFDU"),u=e("nKUr"),d=e.n(u);function a(r){var g=r.onChange,n=r.onUpload,T=r.url,S=r.name,P=r.extra,U=r.accept,t=r.data,A=r.wrapInForm,y=A===void 0?!0:A,C=r.title,R=r.formProps,L=r.maxFiles,x=r.clearListAfterUpload,o=r.hideLabel,b=Object(p.useState)(),M=Object(f.a)(b,2),s=M[0],O=M[1],c=Object(h.l)();return t&&t[S]&&delete t[S],Object(u.jsx)(v.a,{condition:y,wrap:function(l){return Object(u.jsx)(_.a,Object(m.a)(Object(m.a)({},R),{},{children:l}))},children:Object(u.jsx)(I.a,{title:C||" ".concat(c.formatMessage({id:"upload_click_here"})),placeholder:c.formatMessage({id:"upload_click_here"}),onChange:function(l){O(l),g&&g(l),l.file.status==="done"&&(n&&n(l.file.response),x&&O(void 0))},label:!o&&Object(u.jsx)(h.a,{id:"upload"}),max:L!=null?L:2,fieldProps:{data:t,accept:U,name:S,headers:{Authorization:"Bearer ".concat(localStorage.getItem("TOKEN"))}},action:"".concat(window.REACT_APP_API_URL||"https://api-stage.escolalms.com").concat(T),extra:P,fileList:s==null?void 0:s.fileList})})}E.a=a},"w76+":function(K,E,e){"use strict";e.r(E);var m=e("P2fV"),j=e("NJEC"),_=e("5Dmo"),f=e("3S7+"),I=e("+L6B"),p=e("2/Rp"),B=e("miYZ"),h=e("tsqr"),v=e("qLMh"),u=e("9og8"),d=e("q1tI"),a=e("9kvl"),r=e("55Ip"),g=e("tMyG"),n=e("Qiat"),T=e("Dx9A"),S=e("/MfK"),P=e("5tKr"),U=e("DBJ/"),t=e("nKUr"),A=function(o){var b=o.onSuccess,M=o.onError,s=o.hideLabel;return Object(t.jsx)(U.a,{url:"/api/admin/scorm/upload",name:"zip",accept:"application/zip",hideLabel:s,onChange:function(c){if(c.file.response){var i=c.file.response.response;i.success?b(i.data.model):M(i)}}})},y=A,C=function(){var x=Object(u.a)(Object(v.a)().mark(function o(b){return Object(v.a)().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Object(P.a)(b);case 2:return s.abrupt("return",!0);case 3:case"end":return s.stop()}},o)}));return function(b){return x.apply(this,arguments)}}(),R=function(){var o=Object(d.useRef)(),b=Object(a.l)(),M=[{title:Object(t.jsx)(a.a,{id:"ID",defaultMessage:"ID"}),dataIndex:"id",hideInSearch:!0,sorter:!0},{title:Object(t.jsx)(a.a,{id:"version",defaultMessage:"version"}),dataIndex:"version",hideInSearch:!0,sorter:!0},{title:Object(t.jsx)(a.a,{id:"newScorm",defaultMessage:"New Scorm"}),dataIndex:"upload",hideInSearch:!1,hideInTable:!0,renderFormItem:function(){return[Object(t.jsx)(y,{hideLabel:!0,onSuccess:function(){o.current&&o.current.reload(),h.b.success(Object(t.jsx)(a.a,{id:"scorm_uploaded",defaultMessage:"scorm uploaded"}))},onError:function(c){return h.b.error(c.message||c.toString())}},"upload")]}},{title:Object(t.jsx)(a.a,{id:"SCOS",defaultMessage:"Sharable Content Objects"}),dataIndex:"SCOS",hideInSearch:!0,render:function(O,c){return[c.scos.map(function(i){return Object(t.jsx)(r.a,{to:"/courses/scorms/preview/".concat(i.uuid),children:Object(t.jsxs)(f.a,{title:Object(t.jsx)(a.a,{id:"preview",defaultMessage:"preview"}),children:[Object(t.jsx)(p.a,{size:"small",icon:Object(t.jsx)(T.a,{}),type:"primary",children:i.title})," "]})},i.uuid)})]}},{hideInSearch:!0,title:Object(t.jsx)(a.a,{id:"pages.searchTable.titleOption",defaultMessage:"\u64CD\u4F5C"}),dataIndex:"option",valueType:"option",render:function(O,c){return[Object(t.jsx)(j.a,{title:Object(t.jsx)(a.a,{id:"deleteQuestion",defaultMessage:"Are you sure to delete this record?"}),onConfirm:Object(u.a)(Object(v.a)().mark(function i(){var l;return Object(v.a)().wrap(function(D){for(;;)switch(D.prev=D.next){case 0:return D.next=2,C(c.id);case 2:l=D.sent,l&&o.current&&o.current.reload();case 4:case"end":return D.stop()}},i)})),okText:Object(t.jsx)(a.a,{id:"yes",defaultMessage:"Yes"}),cancelText:Object(t.jsx)(a.a,{id:"no",defaultMessage:"No"}),children:Object(t.jsx)(f.a,{title:Object(t.jsx)(a.a,{id:"delete",defaultMessage:"delete"}),children:Object(t.jsx)(p.a,{type:"primary",icon:Object(t.jsx)(S.a,{}),danger:!0})})},"delete")]}}];return Object(t.jsx)(g.a,{children:Object(t.jsx)(n.a,{headerTitle:b.formatMessage({id:"menu.Courses.SCORMs",defaultMessage:"scorms"}),actionRef:o,rowKey:"id",search:{layout:"vertical"},request:function(O){var c=O.pageSize,i=O.current;return Object(P.b)({pageSize:c,current:i}).then(function(l){return l.success?{data:l.data.data,total:l.data.total,success:!0}:[]})},columns:M})})},L=E.default=R}}]);
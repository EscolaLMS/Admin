(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{"59P8":function(R,i,e){"use strict";var s=e("k1fw"),I=e("PpiC"),f=e("tJVT"),c=e("q1tI"),t=e("9kvl"),p=e("Qiat"),l=e("sWYD"),j=e("mGZj"),S=e("9og8"),W=e("WmNS"),x=e.n(W);function A(O,d){return m.apply(this,arguments)}function m(){return m=Object(S.a)(x.a.mark(function O(d,g){return x.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.abrupt("return",Object(t.f)("/api/admin/tracks/routes",Object(s.a)({method:"GET",useCache:!1,params:Object(s.a)(Object(s.a)({},d),{},{per_page:d.pageSize,page:d.current})},g||{})));case 1:case"end":return o.stop()}},O)})),m.apply(this,arguments)}var b=e("Vpfc"),C=e("0WSk"),a=e("nKUr"),U=[{title:Object(a.jsx)(t.a,{id:"id",defaultMessage:"id"}),dataIndex:"id",hideInSearch:!0},{title:Object(a.jsx)(t.a,{id:"dateRange",defaultMessage:"Date Range"}),dataIndex:"dateRange",hideInSearch:!1,hideInForm:!0,hideInTable:!0,valueType:"dateRange",fieldProps:{allowEmpty:[!0,!0]}},{title:Object(a.jsx)(t.a,{id:"http_method",defaultMessage:"http_method"}),dataIndex:"method",hideInSearch:!1,valueEnum:{GET:{text:"GET"},POST:{text:"POST"},PUT:{text:"PUT"},DELETE:{text:"DELETE"},PATCH:{text:"PATCH"}}},{title:Object(a.jsx)(t.a,{id:"path",defaultMessage:"path"}),dataIndex:"path",hideInSearch:!0}],K=function(d){var g=d.useAsWidget,P=d.userID,o=Object(c.useRef)(),B=Object(c.useState)(!1),D=Object(f.a)(B,2),G=D[0],M=D[1],z=Object(t.i)();return Object(a.jsx)(p.a,{headerTitle:z.formatMessage({id:"menu.Logs",defaultMessage:"menu.Logs"}),loading:G,actionRef:o,rowKey:"id",search:{labelWidth:120},request:function(u){var r=u.user_id,v=u.method,n=u.dateRange,L=u.pageSize,h=u.current;M(!0);var E=n&&n[0]?Object(l.a)(new Date(n[0]),j.a):void 0,F=n&&n[1]?Object(l.a)(new Date(n[1]),j.a):void 0;return A({user_id:g?P:r,method:v,pageSize:L,current:h,date_from:E,date_to:F}).then(function(T){return M(!1),T.success?{data:T.data,total:T.meta.total,success:!0}:[]})},columns:[].concat(U,[{title:Object(a.jsx)(t.a,{id:"user",defaultMessage:"user"}),dataIndex:"user_id",key:"user_id",hideInSearch:g,sorter:!0,renderFormItem:function(u,r,v){var n=r.type,L=r.defaultRender,h=Object(I.a)(r,["type","defaultRender"]);if(n==="form")return null;var E=v.getFieldValue("state");return Object(a.jsx)(C.a,Object(s.a)(Object(s.a)({},h),{},{state:{type:E}}))},render:function(u,r){return r.user&&Object(a.jsx)(b.a,{type:"App\\Models\\User",type_id:r.user.id})}}])})},J=i.a=K},"CA+f":function(R,i,e){"use strict";e.r(i);var s=e("q1tI"),I=e.n(s),f=e("59P8"),c=e("tMyG"),t=e("nKUr"),p=e.n(t),l=function(){return Object(t.jsx)(c.a,{children:Object(t.jsx)(f.a,{})})};i.default=l}}]);

(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{"59P8":function(S,i,e){"use strict";var s=e("k1fw"),D=e("PpiC"),O=e("tJVT"),c=e("q1tI"),t=e("9kvl"),P=e("Qiat"),l=e("sWYD"),h=e("mGZj"),y=e("qLMh"),A=e("9og8");function b(v,d){return f.apply(this,arguments)}function f(){return f=Object(A.a)(Object(y.a)().mark(function v(d,g){return Object(y.a)().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.abrupt("return",Object(t.i)("/api/admin/tracks/routes",Object(s.a)({method:"GET",useCache:!1,params:Object(s.a)(Object(s.a)({},d),{},{per_page:d.pageSize,page:d.current})},g||{})));case 1:case"end":return o.stop()}},v)})),f.apply(this,arguments)}var W=e("Vpfc"),C=e("0WSk"),r=e("nKUr"),U=["type","defaultRender"],K=[{title:Object(r.jsx)(t.a,{id:"ID",defaultMessage:"ID"}),dataIndex:"id",hideInSearch:!0,sorter:!0,width:"80px"},{title:Object(r.jsx)(t.a,{id:"dateRange",defaultMessage:"Date Range"}),dataIndex:"dateRange",hideInSearch:!1,hideInForm:!0,hideInTable:!0,valueType:"dateRange",fieldProps:{allowEmpty:[!0,!0]}},{title:Object(r.jsx)(t.a,{id:"http_method",defaultMessage:"http_method"}),dataIndex:"method",hideInSearch:!1,sorter:!0,valueEnum:{GET:"GET",POST:"POST",PUT:"PUT",DELETE:"DELETE",PATCH:"PATCH"}},{title:Object(r.jsx)(t.a,{id:"path",defaultMessage:"path"}),dataIndex:"path",sorter:!0,hideInSearch:!1}],B=function(d){var g=d.useAsWidget,M=d.userID,o=Object(c.useRef)(),G=Object(c.useState)(!1),x=Object(O.a)(G,2),z=x[0],L=x[1],F=Object(t.l)();return Object(r.jsx)(P.a,{headerTitle:F.formatMessage({id:"menu.Analytics.Logs",defaultMessage:"menu.Analytics.Logs"}),loading:z,actionRef:o,rowKey:"id",search:{layout:"vertical"},request:function(n,a){var m=n.user_id,E=n.method,u=n.dateRange,p=n.path,I=n.pageSize,J=n.current,j=a&&Object.entries(a)[0];L(!0);var V=u&&u[0]?Object(l.a)(new Date(u[0]),h.a):void 0,H=u&&u[1]?Object(l.a)(new Date(u[1]),h.a):void 0;return b({user_id:g?M:m,method:E,pageSize:I,current:J,path:p,date_from:V,date_to:H,order_by:j&&j[0],order:j?j[1]==="ascend"?"ASC":"DESC":void 0}).then(function(T){return L(!1),T.success?{data:T.data,total:T.meta.total,success:!0}:[]})},columns:[].concat(K,[{title:Object(r.jsx)(t.a,{id:"user",defaultMessage:"user"}),dataIndex:"user_id",key:"user_id",hideInSearch:g,sorter:!0,renderFormItem:function(n,a,m){var E=a.type,u=a.defaultRender,p=Object(D.a)(a,U);if(E==="form")return null;var I=m.getFieldValue("state");return Object(r.jsx)(C.a,Object(s.a)(Object(s.a)({},p),{},{state:{type:I}}))},render:function(n,a){return a.user&&Object(r.jsx)(W.a,{type:"App\\Models\\User",type_id:a.user.id})}}])})},Q=i.a=B},"CA+f":function(S,i,e){"use strict";e.r(i);var s=e("q1tI"),D=e.n(s),O=e("59P8"),c=e("tMyG"),t=e("nKUr"),P=e.n(t),l=function(){return Object(t.jsx)(c.a,{children:Object(t.jsx)(O.a,{})})};i.default=l}}]);

"use strict";(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[746,2803,8047],{23901:function(W,i,e){e.d(i,{Z:function(){return $}});var M=e(97857),n=e.n(M),f=e(13769),l=e.n(f),h=e(5574),x=e.n(h),O=e(62235),U=e(44167),D=e(45919),F=e(15009),S=e.n(F),z=e(99289),B=e.n(z),s=e(80854);function G(v,d){return m.apply(this,arguments)}function m(){return m=B()(S()().mark(function v(d,g){return S()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.abrupt("return",(0,s.request)("/api/admin/tracks/routes",n()({method:"GET",useCache:!1,params:n()(n()({},d),{},{per_page:d.pageSize,page:d.current})},g||{})));case 1:case"end":return o.stop()}},v)})),m.apply(this,arguments)}var K=e(16894),P=e(60943),R=e(67294),a=e(85893),Z=["type","defaultRender"],H=[{title:(0,a.jsx)(s.FormattedMessage,{id:"ID",defaultMessage:"ID"}),dataIndex:"id",hideInSearch:!0,sorter:!0,width:"80px"},{title:(0,a.jsx)(s.FormattedMessage,{id:"dateRange",defaultMessage:"Date Range"}),dataIndex:"dateRange",hideInSearch:!1,hideInForm:!0,hideInTable:!0,valueType:"dateRange",fieldProps:{allowEmpty:[!0,!0]}},{title:(0,a.jsx)(s.FormattedMessage,{id:"http_method",defaultMessage:"http_method"}),dataIndex:"method",hideInSearch:!1,sorter:!0,valueEnum:{GET:"GET",POST:"POST",PUT:"PUT",DELETE:"DELETE",PATCH:"PATCH"}},{title:(0,a.jsx)(s.FormattedMessage,{id:"path",defaultMessage:"path"}),dataIndex:"path",sorter:!0,hideInSearch:!1}],V=function(d){var g=d.useAsWidget,j=d.userID,o=(0,R.useRef)(),J=(0,R.useState)(!1),A=x()(J,2),N=A[0],L=A[1],Q=(0,s.useIntl)();return(0,a.jsx)(K.ZP,{headerTitle:Q.formatMessage({id:"menu.Analytics.Logs",defaultMessage:"menu.Analytics.Logs"}),loading:N,actionRef:o,rowKey:"id",search:{layout:"vertical"},request:function(r,t){var p=r.user_id,T=r.method,u=r.dateRange,E=r.path,y=r.pageSize,X=r.current,c=t&&Object.entries(t)[0];L(!0);var Y=u&&u[0]?(0,P.WU)(new Date(u[0]),D.Cu):void 0,b=u&&u[1]?(0,P.WU)(new Date(u[1]),D.Cu):void 0;return G({user_id:g?j:p,method:T,pageSize:y,current:X,path:E,date_from:Y,date_to:b,order_by:c&&c[0],order:c?c[1]==="ascend"?"ASC":"DESC":void 0}).then(function(I){return L(!1),I.success?{data:I.data,total:I.meta.total,success:!0}:[]})},columns:[].concat(H,[{title:(0,a.jsx)(s.FormattedMessage,{id:"user",defaultMessage:"user"}),dataIndex:"user_id",key:"user_id",hideInSearch:g,sorter:!0,renderFormItem:function(r,t,p){var T=t.type,u=t.defaultRender,E=l()(t,Z);if(T==="form")return null;var y=p.getFieldValue("state");return(0,a.jsx)(U.Z,n()(n()({},E),{},{state:{type:y}}))},render:function(r,t){return t.user&&(0,a.jsx)(O.Z,{type:"App\\Models\\User",type_id:t.user.id})}}])})},$=V},49006:function(W,i,e){e.r(i);var M=e(67294),n=e(23901),f=e(74453),l=e(85893),h=function(){return(0,l.jsx)(f._z,{children:(0,l.jsx)(n.Z,{})})};i.default=h}}]);

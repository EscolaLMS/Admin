"use strict";(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[3769,2803,8047],{66878:function(W,O,e){e.r(O);var T=e(97857),s=e.n(T),v=e(15009),d=e.n(v),I=e(99289),o=e.n(I),m=e(47389),C=e(82061),g=e(51042),R=e(74453),f=e(16894),b=e(2453),c=e(83062),P=e(14726),D=e(86738),L=e(67294),r=e(80854),a=e(62235),_=e(53893),u=e(66419),n=e(85893),t=function(){var B=o()(d()().mark(function E(j){return d()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.abrupt("return",(0,_.CT)(j).then(function(i){return i.success&&b.ZP.success(i.message),!0}));case 1:case"end":return l.stop()}},E)}));return function(j){return B.apply(this,arguments)}}(),h=function(){var E=(0,L.useRef)(),j=(0,r.useIntl)(),K=[{title:(0,n.jsx)(r.FormattedMessage,{id:"ID",defaultMessage:"ID"}),dataIndex:"id",hideInSearch:!0,sorter:!0,width:"80px"},{title:(0,n.jsx)(r.FormattedMessage,{id:"title",defaultMessage:"title"}),dataIndex:"title",hideInSearch:!1,sorter:!0},{title:(0,n.jsx)(r.FormattedMessage,{id:"slug",defaultMessage:"slug"}),dataIndex:"slug",hideInSearch:!1,sorter:!0},{title:(0,n.jsx)(r.FormattedMessage,{id:"author",defaultMessage:"author"}),dataIndex:"author_id",hideInSearch:!0,sorter:!0,render:function(i,M){return(0,n.jsx)(a.Z,{type:"EscolaLms\\Core\\Models\\User",type_id:M.author_id},"user")}},{hideInSearch:!0,title:(0,n.jsx)(r.FormattedMessage,{id:"pages.searchTable.titleOption",defaultMessage:"option"}),dataIndex:"option",valueType:"option",render:function(i,M){return[(0,n.jsx)(r.Link,{to:"/other/pages/".concat(M.id),children:(0,n.jsx)(c.Z,{title:(0,n.jsx)(r.FormattedMessage,{id:"edit",defaultMessage:"edit"}),children:(0,n.jsx)(P.ZP,{type:"primary",icon:(0,n.jsx)(m.Z,{})})})},"edit"),(0,n.jsx)(D.Z,{title:(0,n.jsx)(r.FormattedMessage,{id:"deleteQuestion",defaultMessage:"Are you sure to delete this record?"}),onConfirm:o()(d()().mark(function y(){var A;return d()().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return p.next=2,t(M.id);case 2:A=p.sent,A&&E.current&&E.current.reload();case 4:case"end":return p.stop()}},y)})),okText:(0,n.jsx)(r.FormattedMessage,{id:"yes"}),cancelText:(0,n.jsx)(r.FormattedMessage,{id:"no"}),children:(0,n.jsx)(c.Z,{title:(0,n.jsx)(r.FormattedMessage,{id:"delete",defaultMessage:"delete"}),children:(0,n.jsx)(P.ZP,{type:"primary",icon:(0,n.jsx)(C.Z,{}),danger:!0})})},"delete")]}}];return(0,n.jsx)(R._z,{children:(0,n.jsx)(f.ZP,{headerTitle:j.formatMessage({id:"pages",defaultMessage:"pages"}),actionRef:E,rowKey:"id",search:{layout:"vertical"},toolBarRender:function(){return[(0,n.jsx)(r.Link,{to:"/other/pages/new",children:(0,n.jsxs)(P.ZP,{type:"primary",children:[(0,n.jsx)(g.Z,{})," ",(0,n.jsx)(r.FormattedMessage,{id:"new",defaultMessage:"new"})]},"primary")},"new")]},request:function(i,M){var y=i.pageSize,A=i.current,U=i.title,p=i.slug;return(0,_.L1)(s()({per_page:y,page:A,title:U||void 0,slug:p||void 0},(0,u.di)(M,"created_at"))).then(function(x){return x.success?{data:x.data,total:x.meta.total,success:!0}:[]})},columns:K})})};O.default=h},53893:function(W,O,e){e.d(O,{CT:function(){return L},D4:function(){return b},L1:function(){return C},Md:function(){return R},T$:function(){return P}});var T=e(15009),s=e.n(T),v=e(97857),d=e.n(v),I=e(99289),o=e.n(I),m=e(80854);function C(a,_){return g.apply(this,arguments)}function g(){return g=o()(s()().mark(function a(_,u){return s()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",(0,m.request)("/api/admin/pages",d()({method:"GET",useCache:!1,params:_},u||{})));case 1:case"end":return t.stop()}},a)})),g.apply(this,arguments)}function R(a,_){return f.apply(this,arguments)}function f(){return f=o()(s()().mark(function a(_,u){return s()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",(0,m.request)("/api/admin/pages/".concat(_),d()({method:"GET"},u||{})));case 1:case"end":return t.stop()}},a)})),f.apply(this,arguments)}function b(a,_){return c.apply(this,arguments)}function c(){return c=o()(s()().mark(function a(_,u){return s()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",(0,m.request)("/api/admin/pages",d()({method:"POST",headers:{"Content-Type":"application/json"},data:_},u||{})));case 1:case"end":return t.stop()}},a)})),c.apply(this,arguments)}function P(a,_,u){return D.apply(this,arguments)}function D(){return D=o()(s()().mark(function a(_,u,n){return s()().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.abrupt("return",(0,m.request)("/api/admin/pages/".concat(_),d()({method:"PATCH",headers:{"Content-Type":"application/json"},data:u},n||{})));case 1:case"end":return h.stop()}},a)})),D.apply(this,arguments)}function L(a,_){return r.apply(this,arguments)}function r(){return r=o()(s()().mark(function a(_,u){return s()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",(0,m.request)("/api/admin/pages/".concat(_),d()({method:"DELETE",headers:{"Content-Type":"application/json"}},u||{})));case 1:case"end":return t.stop()}},a)})),r.apply(this,arguments)}}}]);

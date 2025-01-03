"use strict";(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[3507],{29477:function(oe,Z,a){var C=a(97857),j=a.n(C),R=a(5574),d=a.n(R),D=a(55523),M=a(75842),E=a(21974),l=a(67294),A=a(80854),P=a(85893);function U(s){var y=s.onChange,$=s.onUpload,Y=s.url,W=s.name,k=s.extra,_=s.accept,f=s.data,z=s.wrapInForm,G=z===void 0?!0:z,T=s.title,q=s.formProps,u=s.maxFiles,t=s.clearListAfterUpload,e=s.hideLabel,ee=s.disabled,ae=s.showUploadList,te=(0,l.useState)(),L=d()(te,2),S=L[0],b=L[1],X=(0,A.useIntl)();return f&&f[W]&&delete f[W],(0,P.jsx)(E.Z,{condition:G,wrap:function(h){return(0,P.jsx)(M.Z,j()(j()({},q),{},{children:h}))},children:(0,P.jsx)(D.Z,{title:T||" ".concat(X.formatMessage({id:"upload_click_here"})),placeholder:X.formatMessage({id:"upload_click_here"}),label:!e&&(0,P.jsx)(A.FormattedMessage,{id:"upload"}),max:u!=null?u:2,fieldProps:{data:f,accept:_,name:W,showUploadList:ae,headers:{Authorization:"Bearer ".concat(localStorage.getItem("TOKEN"))},onChange:function(h){b(h),y&&y(h),h.file.status==="done"&&($&&$(h.file.response),t&&b(void 0))}},action:"".concat(window.REACT_APP_API_URL||"https://api-stage.escolalms.com").concat(Y),extra:k,fileList:S==null?void 0:S.fileList,disabled:ee})})}Z.Z=U},54464:function(oe,Z,a){a.d(Z,{T:function(){return R}});var C=a(67294),j=a(80854),R=function(){var D,M=(0,j.useModel)("@@initialState"),E=M.initialState,l=(E==null||(D=E.currentUser)===null||D===void 0?void 0:D.permissions)||[],A=(0,C.useCallback)(function(P){return Array.isArray(l)?!!(l!=null&&l.find(function(U){return U.includes(P)})):!1},[l]);return{checkPermission:A}}},73197:function(oe,Z,a){a.r(Z),a.d(Z,{DictionaryTabNames:function(){return ne},default:function(){return ue}});var C=a(97857),j=a.n(C),R=a(15009),d=a.n(R),D=a(99289),M=a.n(D),E=a(5574),l=a.n(E),A=a(29477),P=a(91115),U=a(54464),s=a(61441),y=a(42782),$=a(66419),Y=a(47389),W=a(82061),k=a(51042),_=a(16894),f=a(2453),z=a(66309),G=a(83062),T=a(14726),q=a(86738),u=a(67294),t=a(80854),e=a(85893),ee=function(){var m=M()(d()().mark(function v(n){return d()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.abrupt("return",(0,y.FX)(n).then(function(I){return I.success&&f.ZP.success(I.message),!0}));case 1:case"end":return o.stop()}},v)}));return function(n){return m.apply(this,arguments)}}(),ae=function(){var v=(0,u.useRef)(),n=(0,t.useIntl)(),B=(0,t.useParams)(),o=B.dictionaryId,I=B.tab,Q=(0,U.T)(),K=Q.checkPermission,V=[{title:(0,e.jsx)(t.FormattedMessage,{id:"ID",defaultMessage:"ID"}),dataIndex:"id",hideInSearch:!0,sorter:!0,width:"80px"},{title:(0,e.jsx)(t.FormattedMessage,{id:"word",defaultMessage:"word"}),dataIndex:"word",sorter:!0},{title:(0,e.jsx)(t.FormattedMessage,{id:"categories",defaultMessage:"categories"}),dataIndex:"categories",sorter:!1,hideInSearch:!0,render:function(g,r){var i;return(0,e.jsx)(u.Fragment,{children:(i=r.categories)===null||i===void 0?void 0:i.map(function(p){return(0,e.jsx)(z.Z,{children:p.name},p.name)})})}},{hideInSearch:!0,title:(0,e.jsx)(t.FormattedMessage,{id:"pages.searchTable.titleOption",defaultMessage:"option"}),dataIndex:"option",valueType:"option",width:100,render:function(g,r){return[(0,e.jsx)(t.Link,{to:"/other/dictionary/".concat(o,"/").concat(I,"/").concat(r.id,"/").concat(s.DictionaryWordsTabNames.FORM),children:(0,e.jsx)(G.Z,{title:(0,e.jsx)(t.FormattedMessage,{id:"edit",defaultMessage:"edit"}),children:(0,e.jsx)(T.ZP,{type:"primary",icon:(0,e.jsx)(Y.Z,{})})})},"edit"),(0,e.jsx)(q.Z,{title:(0,e.jsx)(t.FormattedMessage,{id:"deleteQuestion",defaultMessage:"Are you sure to delete this record?"}),onConfirm:M()(d()().mark(function i(){var p;return d()().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,ee(r.id);case 2:p=c.sent,p&&v.current&&v.current.reload();case 4:case"end":return c.stop()}},i)})),okText:(0,e.jsx)(t.FormattedMessage,{id:"yes"}),cancelText:(0,e.jsx)(t.FormattedMessage,{id:"no"}),children:(0,e.jsx)(G.Z,{title:(0,e.jsx)(t.FormattedMessage,{id:"delete",defaultMessage:"delete"}),children:(0,e.jsx)(T.ZP,{type:"primary",icon:(0,e.jsx)(W.Z,{}),danger:!0})})},"delete")]}}];return(0,e.jsx)(_.ZP,{headerTitle:n.formatMessage({id:"words",defaultMessage:"Words"}),actionRef:v,rowKey:"id",search:{layout:"vertical"},toolBarRender:function(){return[(0,e.jsx)(t.Link,{to:"/other/dictionary/".concat(o,"/").concat(I,"/new/").concat(s.DictionaryWordsTabNames.FORM),children:(0,e.jsxs)(T.ZP,{type:"primary",children:[(0,e.jsx)(k.Z,{})," ",(0,e.jsx)(t.FormattedMessage,{id:"new",defaultMessage:"new"})]},"primary")},"new"),K(P.Z.DictionaryImport)?(0,e.jsx)("div",{className:"import-dictionary",children:(0,e.jsx)(A.Z,{title:n.formatMessage({id:"import_dictionary",defaultMessage:"Import dictionary"}),url:"/api/admin/dictionary-words/import",name:"file",accept:".csv, .xlsx",data:{dictionary_id:Number(o)},onChange:function(r){if(r.file.status==="done"&&r.file.response&&r.file.response.success){var i;f.ZP.success(r.file.response.message),(i=v.current)===null||i===void 0||i.reload()}r.file.response&&r.file.status==="error"&&(f.ZP.error(r.file.response.message),console.error(r.file.response))},hideLabel:!0,wrapInForm:!1,maxFiles:1,clearListAfterUpload:!0})}):void 0]},request:function(g,r){var i=g.pageSize,p=g.current,H=g.word;return(0,y.uz)(j()({per_page:i,page:p,word:H,dictionary_id:Number(o)},(0,$.di)(r,"created_at"))).then(function(c){return c.success?{data:c.data,total:c.meta.total,success:!0}:[]})},columns:V})},te=ae,L=a(78715),S=a(952),b=a(5966),X=a(31199),se=a(74453),h=a(74330),le=a(71230),re=a(15746),ne=function(m){return m.FORM="form",m.WORDS="words",m}({}),ue=function(){var m=(0,t.useIntl)(),v=(0,t.useParams)(),n=v.dictionaryId,B=v.tab,o=n==="new",I=(0,u.useState)(),Q=l()(I,2),K=Q[0],V=Q[1],w=(0,u.useState)(!1),g=l()(w,2),r=g[0],i=g[1],p=S.ZP.useForm(),H=l()(p,1),c=H[0],de=(0,u.useCallback)(M()(d()().mark(function J(){var O;return d()().wrap(function(F){for(;;)switch(F.prev=F.next){case 0:return i(!0),F.next=3,(0,y.RC)(Number(n));case 3:O=F.sent,O.success&&V(O.data),i(!1);case 6:case"end":return F.stop()}},J)})),[n]);(0,u.useEffect)(function(){if(n==="new"){V({});return}de()},[n,de]);var ce=(0,u.useMemo)(function(){return{onFinish:function(){var J=M()(d()().mark(function ie(F){var N;return d()().wrap(function(x){for(;;)switch(x.prev=x.next){case 0:if(n!=="new"){x.next=7;break}return x.next=3,(0,y.Xk)(F);case 3:N=x.sent,N.success&&t.history.push("/other/dictionary/".concat(N.data.id,"/form")),x.next=10;break;case 7:return x.next=9,(0,y.ax)(Number(n),F);case 9:N=x.sent;case 10:f.ZP.success(N.message);case 11:case"end":return x.stop()}},ie)}));function O(ie){return J.apply(this,arguments)}return O}(),initialValues:K}},[K,n]);return K?(0,e.jsx)(se._z,{title:o?(0,e.jsx)(t.FormattedMessage,{id:"new_dictionary"}):(0,e.jsx)(t.FormattedMessage,{id:"edit_dictionary"}),children:(0,e.jsxs)(L.ZP,{tabs:{type:"card",activeKey:B,onChange:function(O){t.history.push("/other/dictionary/".concat(n,"/").concat(O))}},children:[(0,e.jsx)(L.ZP.TabPane,{tab:(0,e.jsx)(t.FormattedMessage,{id:"attributes"}),children:(0,e.jsxs)(S.ZP,j()(j()({},ce),{},{form:c,children:[(0,e.jsxs)(le.Z,{gutter:[16,16],children:[(0,e.jsx)(re.Z,{xs:{span:24},md:{span:12},children:(0,e.jsx)(b.Z,{name:"name",label:(0,e.jsx)(t.FormattedMessage,{id:"name"}),tooltip:(0,e.jsx)(t.FormattedMessage,{id:"name"}),placeholder:m.formatMessage({id:"Name"}),required:!0})}),!o&&(0,e.jsx)(re.Z,{xs:{span:24},md:{span:12},children:(0,e.jsx)(b.Z,{name:"slug",label:(0,e.jsx)(t.FormattedMessage,{id:"slug"}),placeholder:m.formatMessage({id:"slug"}),disabled:!0,required:!0})}),(0,e.jsx)(re.Z,{xs:{span:24},md:{span:12},children:(0,e.jsx)(X.Z,{name:"free_views_count",label:(0,e.jsx)(t.FormattedMessage,{id:"free_views_count"}),tooltip:(0,e.jsx)(t.FormattedMessage,{id:"free_views_count_tooltip"}),placeholder:m.formatMessage({id:"Free views count"}),min:0})})]}),r&&(0,e.jsx)(h.Z,{})]}))},ne.FORM),(0,e.jsx)(L.ZP.TabPane,{tab:(0,e.jsx)(t.FormattedMessage,{id:"words"}),disabled:o,children:(0,e.jsx)(te,{})},ne.WORDS)]})}):(0,e.jsx)(h.Z,{})}}}]);

//# sourceMappingURL=p__Dictionary__form.b21dd683.async.js.map
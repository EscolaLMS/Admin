"use strict";(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[1227],{47389:function(R,d,t){var l=t(1413),s=t(67294),h=t(27363),m=t(84089),p=function(S,E){return s.createElement(m.Z,(0,l.Z)((0,l.Z)({},S),{},{ref:E,icon:h.Z}))},f=s.forwardRef(p);d.Z=f},16894:function(R,d,t){var l=t(7807);d.ZP=l.Z},73199:function(R,d,t){t.d(d,{BP:function(){return f},FW:function(){return p},Sl:function(){return m}});var l=t(31472),s=t(80854),h=t(85893),m=30,p=[{label:(0,h.jsx)(s.FormattedMessage,{id:"pass",defaultMessage:"pass"}),value:l.wl.Passed},{label:(0,h.jsx)(s.FormattedMessage,{id:"fail",defaultMessage:"fail"}),value:l.wl.Failed}],f=[{label:"2",value:2},{label:"3",value:3},{label:"3,5",value:3.5},{label:"4",value:4},{label:"4,5",value:4.5},{label:"5",value:5}]},53880:function(R,d,t){t.r(d),t.d(d,{TableColumns:function(){return Z},default:function(){return J}});var l=t(97857),s=t.n(l),h=t(13769),m=t.n(h),p=t(19632),f=t.n(p),g=t(5574),S=t.n(g),E=t(48781),T=t(74656),j=t(74330),i=t(67294),a=t(80854),n=t(85893),P=function(_){var M=_.value,C=_.onChange,b=_.onSelect,O=_.onDeselect,x=_.onClear,A=_.loading,D=_.disabled,z=_.multiple,V=z===void 0?!1:z,Q=(0,i.useState)([]),N=S()(Q,2),B=N[0],H=N[1],k=(0,i.useState)(!1),w=S()(k,2),q=w[0],G=w[1],ee=(0,i.useRef)(),F=(0,i.useRef)(),te=(0,i.useCallback)(function(c){H(function(L){return[].concat(f()(L),f()(c)).filter(function(I,U,re){return re.findIndex(function(se){return se.id===I.id})===U})})},[]);(0,i.useEffect)(function(){ee.current=B},[B]);var K=(0,i.useCallback)(function(c){G(!0),F.current&&F.current.abort(),F.current=new AbortController,(0,E.mV)({academicYearID:c},{signal:F.current.signal}).then(function(L){L.success&&H(L.data),G(!1)}).catch(function(){return G(!1)})},[te]),ne=(0,i.useCallback)(function(c){K(c)},[K]);return(0,n.jsx)(T.default,{onSelect:b,onDeselect:O,onClear:x,loading:A,disabled:D,onFocus:function(){return K()},allowClear:!0,style:{width:"100%"},value:M,onChange:C,mode:V?"multiple":void 0,showSearch:!0,onSearch:ne,placeholder:(0,n.jsx)(a.FormattedMessage,{id:"select_semester",defaultMessage:"Select semester"}),optionFilterProp:"children",filterOption:function(L,I){if(I&&I.children){var U;return(I==null||(U=I.children)===null||U===void 0?void 0:U.toString().toLowerCase().indexOf(L.toLowerCase()))>=0}return!0},notFoundContent:q?(0,n.jsx)(j.Z,{size:"small"}):null,children:B.map(function(c){return(0,n.jsxs)(T.default.Option,{value:c.id,children:[c.name,!!c.speciality&&" (".concat(c.speciality,")")]},c.id)})})},u=P,o=t(47389),v=t(74453),e=t(16894),r=t(83062),y=t(14726),X=t(73199),Y=["type","defaultRender"],Z=[{hideInSearch:!1,hideInTable:!0,title:(0,n.jsx)(a.FormattedMessage,{id:"semester",defaultMessage:"semester"}),dataIndex:"semester_id",renderFormItem:function(_,M,C){var b=M.type,O=M.defaultRender,x=m()(M,Y);if(b==="form")return null;var A=C.getFieldValue("state");return(0,n.jsx)(u,s()(s()({},x),{},{state:{type:A}}))}},{title:(0,n.jsx)(a.FormattedMessage,{id:"ID",defaultMessage:"ID"}),dataIndex:"id",hideInSearch:!0,width:"80px"},{title:(0,n.jsx)(a.FormattedMessage,{id:"subject",defaultMessage:"subject"}),dataIndex:["subject","name"],hideInSearch:!0},{title:(0,n.jsx)(a.FormattedMessage,{id:"semester",defaultMessage:"semester"}),dataIndex:["semester","name"],hideInSearch:!0},{title:(0,n.jsx)(a.FormattedMessage,{id:"group",defaultMessage:"group"}),dataIndex:"groups",render:function(_,M){return(0,n.jsx)("span",{children:M.groups.map(function(C){return(0,n.jsxs)("span",{children:[C.name," ",(0,n.jsx)("br",{})]},C.id)})})},hideInForm:!0,hideInSearch:!0}],$=function(){var _=(0,i.useRef)(),M=(0,a.useIntl)();return(0,n.jsx)(v._z,{children:(0,n.jsx)(e.ZP,{headerTitle:M.formatMessage({id:"menu.Teacher.Subjects",defaultMessage:"Subjects"}),actionRef:_,rowKey:"id",search:{layout:"vertical"},pagination:{defaultPageSize:X.Sl},request:function(b){var O=b.pageSize,x=b.current,A=b.semester_id;return(0,E.tG)({per_page:O,page:x,semester_id:A}).then(function(D){return D.success?{data:D.data,total:D.meta.total,success:!0}:[]})},columns:[].concat(Z,[{hideInSearch:!0,title:(0,n.jsx)(a.FormattedMessage,{id:"pages.searchTable.titleOption"}),dataIndex:"option",valueType:"option",render:function(b,O){return[(0,n.jsx)(a.Link,{to:"/teacher/subjects/".concat(O.id),children:(0,n.jsx)(r.Z,{title:(0,n.jsx)(a.FormattedMessage,{id:"edit",defaultMessage:"edit"}),children:(0,n.jsx)(y.ZP,{type:"primary",icon:(0,n.jsx)(o.Z,{})})})},"edit")]}}])})})},J=$},31472:function(R,d,t){t.d(d,{Fh:function(){return j},UL:function(){return E},Yo:function(){return n},Zg:function(){return P},cX:function(){return S},ce:function(){return g},fS:function(){return a},fn:function(){return p},h5:function(){return u},hg:function(){return v},oz:function(){return l},rX:function(){return i},uT:function(){return m},wg:function(){return o},wl:function(){return T}});var l=function(e){return e.Unselected="",e.RichText="EscolaLms\\TopicTypes\\Models\\TopicContent\\RichText",e.OEmbed="EscolaLms\\TopicTypes\\Models\\TopicContent\\OEmbed",e.Audio="EscolaLms\\TopicTypes\\Models\\TopicContent\\Audio",e.Video="EscolaLms\\TopicTypes\\Models\\TopicContent\\Video",e.H5P="EscolaLms\\TopicTypes\\Models\\TopicContent\\H5P",e.Image="EscolaLms\\TopicTypes\\Models\\TopicContent\\Image",e.PDF="EscolaLms\\TopicTypes\\Models\\TopicContent\\PDF",e.SCORM="EscolaLms\\TopicTypes\\Models\\TopicContent\\ScormSco",e.Project="EscolaLms\\TopicTypeProject\\Models\\Project",e.GiftQuiz="EscolaLms\\TopicTypeGift\\Models\\GiftQuiz",e}({}),s=function(e){return e.OrderPaid="EscolaLms\\Cart\\Events\\OrderPaid",e.UserLogged="EscolaLms\\Auth\\Events\\UserLogged",e}({}),h=function(e){return e.draft="draft",e.published="published",e.archived="archived",e}({}),m=function(e){return e.email="EscolaLms\\TemplatesEmail\\Core\\EmailChannel",e.pdf="EscolaLms\\TemplatesPdf\\Core\\PdfChannel",e.sms="EscolaLms\\TemplatesSms\\Core\\SmsChannel",e}({}),p=function(e){return e.ManuallyTriggeredEvent="EscolaLms\\Templates\\Events\\ManuallyTriggeredEvent",e}({}),f=function(e){return e.cart_fixed="cart_fixed",e.cart_percent="cart_percent",e.product_fixed="product_fixed",e.product_percent="product_percent",e}({}),g=function(e){return e.MULTIPLE_CHOICE="multiple_choice",e.MULTIPLE_CHOICE_WITH_MULTIPLE_RIGHT_ANSWERS="multiple_choice_with_multiple_right_answers",e.TRUE_FALSE="true_false",e.SHORT_ANSWERS="short_answers",e.MATCHING="matching",e.NUMERICAL_QUESTION="numerical_question",e.ESSAY="essay",e.DESCRIPTION="description",e}({}),S=function(e){return e.PRESENT="present",e.PRESENT_NOT_EXERCISING="present_not_exercising",e.ABSENT="absent",e.EXCUSED_ABSENCE="excused_absence",e}({}),E=function(e){return e.Manual="manual",e.ManualPass="manual_pass",e.ManualGrades="manual_grades",e.TeamsForms="teams_forms",e.TeamsLecture="teams_lecture",e.TestPortal="test_portal",e}({}),T=function(e){return e.Passed="zal",e.Failed="nie zal",e}({}),j=function(e){return e.Simple="simple",e.Complex="complex",e}({}),i=function(e){return e.QuizSummary="EscolaLms\\Reports\\Stats\\Topic\\QuizSummaryForTopicTypeGIFT",e}({}),a=function(e){return e.Boolean="boolean",e.Number="number",e.Varchar="varchar",e.Text="text",e.Json="json",e}({}),n=function(e){return e.Rate="rate",e.Text="text",e.Review="review",e}({}),P=function(e){return e.Exercise="exercise",e.Course="course",e.Info="info",e}({}),u=function(e){return e.Group="EscolaLms\\PcgIntegration\\Models\\Group",e}({}),o=function(e){return e.PUSH="EscolaLms\\BulkNotifications\\Channels\\PushNotificationChannel",e}({}),v=function(e){return e.TITLE="title",e.BODY="body",e.IMAGE="image_url",e.REDIRECT_URL="redirect_url",e}({})},48781:function(R,d,t){t.d(d,{KG:function(){return i},TO:function(){return n},mV:function(){return S},tG:function(){return T}});var l=t(15009),s=t.n(l),h=t(97857),m=t.n(h),p=t(99289),f=t.n(p),g=t(80854);function S(u,o){return E.apply(this,arguments)}function E(){return E=f()(s()().mark(function u(o,v){return s()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",(0,g.request)("/api/admin/semesters",m()({params:o,method:"GET",useCache:!1},v||{})));case 1:case"end":return r.stop()}},u)})),E.apply(this,arguments)}function T(u,o){return j.apply(this,arguments)}function j(){return j=f()(s()().mark(function u(o,v){return s()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",(0,g.request)("/api/admin/semester-subjects",m()({params:o,method:"GET",useCache:!1},v||{})));case 1:case"end":return r.stop()}},u)})),j.apply(this,arguments)}function i(u,o){return a.apply(this,arguments)}function a(){return a=f()(s()().mark(function u(o,v){return s()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",(0,g.request)("/api/admin/semester-subjects/".concat(o),m()({method:"GET",useCache:!1},v||{})));case 1:case"end":return r.stop()}},u)})),a.apply(this,arguments)}function n(u,o){return P.apply(this,arguments)}function P(){return P=f()(s()().mark(function u(o,v){return s()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",(0,g.request)("/api/admin/semester-subjects/".concat(o,"/tutors"),m()({method:"GET",useCache:!1},v||{})));case 1:case"end":return r.stop()}},u)})),P.apply(this,arguments)}}}]);

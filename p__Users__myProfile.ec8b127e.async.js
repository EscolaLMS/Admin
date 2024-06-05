"use strict";(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[3685],{69753:function(K,T,r){var P=r(1413),n=r(67294),C=r(49495),_=r(84089),M=function(g,d){return n.createElement(_.Z,(0,P.Z)((0,P.Z)({},g),{},{ref:d,icon:C.Z}))},c=n.forwardRef(M);T.Z=c},55725:function(K,T,r){var P=r(1413),n=r(67294),C=r(85118),_=r(84089),M=function(g,d){return n.createElement(_.Z,(0,P.Z)((0,P.Z)({},g),{},{ref:d,icon:C.Z}))},c=n.forwardRef(M);T.Z=c},63434:function(K,T,r){var P=r(1413),n=r(45987),C=r(22270),_=r(84567),M=r(67294),c=r(90789),p=r(57021),g=r(85893),d=["options","fieldProps","proFieldProps","valueEnum"],s=M.forwardRef(function(m,f){var b=m.options,A=m.fieldProps,o=m.proFieldProps,e=m.valueEnum,t=(0,n.Z)(m,d);return(0,g.jsx)(p.Z,(0,P.Z)({ref:f,valueType:"checkbox",valueEnum:(0,C.h)(e,void 0),fieldProps:(0,P.Z)({options:b},A),lightProps:(0,P.Z)({labelFormatter:function(){return(0,g.jsx)(p.Z,(0,P.Z)({ref:f,valueType:"checkbox",mode:"read",valueEnum:(0,C.h)(e,void 0),filedConfig:{customLightMode:!0},fieldProps:(0,P.Z)({options:b},A),proFieldProps:o},t))}},t.lightProps),proFieldProps:o},t))}),j=M.forwardRef(function(m,f){var b=m.fieldProps,A=m.children;return(0,g.jsx)(_.Z,(0,P.Z)((0,P.Z)({ref:f},b),{},{children:A}))}),x=(0,c.G)(j,{valuePropName:"checked"}),O=x;O.Group=s,T.Z=O},5966:function(K,T,r){var P=r(97685),n=r(1413),C=r(45987),_=r(21770),M=r(75842),c=r(55241),p=r(97435),g=r(67294),d=r(57021),s=r(85893),j=["fieldProps","proFieldProps"],x=["fieldProps","proFieldProps"],O="text",m=function(e){var t=e.fieldProps,E=e.proFieldProps,L=(0,C.Z)(e,j);return(0,s.jsx)(d.Z,(0,n.Z)({valueType:O,fieldProps:t,filedConfig:{valueType:O},proFieldProps:E},L))},f=function(e){var t=(0,_.Z)(e.open||!1,{value:e.open,onChange:e.onOpenChange}),E=(0,P.Z)(t,2),L=E[0],Z=E[1];return(0,s.jsx)(M.Z.Item,{shouldUpdate:!0,noStyle:!0,children:function(y){var W,z=y.getFieldValue(e.name||[]);return(0,s.jsx)(c.Z,(0,n.Z)((0,n.Z)({getPopupContainer:function(R){return R&&R.parentNode?R.parentNode:R},onOpenChange:function(R){return Z(R)},content:(0,s.jsxs)("div",{style:{padding:"4px 0"},children:[(W=e.statusRender)===null||W===void 0?void 0:W.call(e,z),e.strengthText?(0,s.jsx)("div",{style:{marginTop:10},children:(0,s.jsx)("span",{children:e.strengthText})}):null]}),overlayStyle:{width:240},placement:"rightTop"},e.popoverProps),{},{open:L,children:e.children}))}})},b=function(e){var t=e.fieldProps,E=e.proFieldProps,L=(0,C.Z)(e,x),Z=(0,g.useState)(!1),N=(0,P.Z)(Z,2),y=N[0],W=N[1];return t!=null&&t.statusRender&&L.name?(0,s.jsx)(f,{name:L.name,statusRender:t==null?void 0:t.statusRender,popoverProps:t==null?void 0:t.popoverProps,strengthText:t==null?void 0:t.strengthText,open:y,onOpenChange:W,children:(0,s.jsx)("div",{children:(0,s.jsx)(d.Z,(0,n.Z)({valueType:"password",fieldProps:(0,n.Z)((0,n.Z)({},(0,p.Z)(t,["statusRender","popoverProps","strengthText"])),{},{onBlur:function(a){var R;t==null||(R=t.onBlur)===null||R===void 0||R.call(t,a),W(!1)},onClick:function(a){var R;t==null||(R=t.onClick)===null||R===void 0||R.call(t,a),W(!0)}}),proFieldProps:E,filedConfig:{valueType:O}},L))})}):(0,s.jsx)(d.Z,(0,n.Z)({valueType:"password",fieldProps:t,proFieldProps:E,filedConfig:{valueType:O}},L))},A=m;A.Password=b,A.displayName="ProFormComponent",T.Z=A},90672:function(K,T,r){var P=r(1413),n=r(45987),C=r(67294),_=r(57021),M=r(85893),c=["fieldProps","proFieldProps"],p=function(d,s){var j=d.fieldProps,x=d.proFieldProps,O=(0,n.Z)(d,c);return(0,M.jsx)(_.Z,(0,P.Z)({ref:s,valueType:"textarea",fieldProps:j,proFieldProps:x},O))};T.Z=C.forwardRef(p)},95486:function(K,T,r){var P=r(5574),n=r.n(P),C=r(14726),_=r(28248),M=r(55742),c=r(94315),p=r(45823),g=r(67294),d=r(80854),s=r(85893),j=function(O){var m=O.value,f=O.onChange,b=(0,g.useState)(!1),A=n()(b,2),o=A[0],e=A[1],t=(0,g.useCallback)(function(){e(!1)},[]),E=(0,g.useState)("code"),L=n()(E,2),Z=L[0],N=L[1];return(0,s.jsxs)("div",{children:[(0,s.jsx)(C.ZP,{type:"primary",onClick:function(){return e(!0)},size:"small",children:(0,s.jsx)(d.FormattedMessage,{id:"json_editor"})}),(0,s.jsxs)(_.Z,{title:"JSON",open:o,onOk:t,onCancel:t,destroyOnClose:!0,children:[(0,s.jsxs)(M.ZP.Group,{onChange:function(W){return N(W.target.value)},value:Z,children:[(0,s.jsx)(M.ZP,{value:"tree",children:"tree"}),(0,s.jsx)(M.ZP,{value:"view",children:"view"}),(0,s.jsx)(M.ZP,{value:"form",children:"form"}),(0,s.jsx)(M.ZP,{value:"code",children:"code"}),(0,s.jsx)(M.ZP,{value:"text",children:"text"})]}),(0,s.jsx)(c.A,{mode:Z,value:m,onChange:f},Z)]})]})};T.Z=j},26674:function(K,T,r){var P=r(97857),n=r.n(P),C=r(13769),_=r.n(C),M=r(95830),c=r(67294),p=r(85893),g=["path","size","srcSizes","alt"],d=function(j){var x=j.path,O=j.size,m=j.srcSizes,f=j.alt,b=f===void 0?"LMS Image":f,A=_()(j,g),o="".concat(window.REACT_APP_API_URL||"https://api-stage.escolalms.com","/api/images/img?path=").concat(x,"&w=").concat(m?m[0]:O),e=m&&m.map(function(t){return"".concat(window.REACT_APP_API_URL||"https://api-stage.escolalms.com","/api/images/img?path=").concat(x,"&w=").concat(t," ").concat(t,"w")});return(0,p.jsx)("div",{className:"escolalms-image",children:(0,p.jsx)(M.Z,n()({src:o,srcSet:e&&e.join(","),alt:b},A))})};T.Z=d},28808:function(K,T,r){var P=r(5574),n=r.n(P),C=r(67294),_=r(36309),M=function(p){var g=(0,C.useState)({state:"initial"}),d=n()(g,2),s=d[0],j=d[1];return(0,C.useEffect)(function(){j({state:"loading"}),(0,_.XU)({class_type:p}).then(function(x){x.success&&j({state:"loaded",list:x.data})})},[p]),s};T.Z=M},18025:function(K,T,r){var P=r(95486),n=r(31472),C=r(31199),_=r(63434),M=r(5966),c=r(952),p=r(90672),g=r(67294),d=r(80854),s=r(85893),j=function(O){var m=O.field,f=(0,d.useIntl)(),b=function(o){var e,t=(0,d.getLocale)(),E=o==null||(e=o.extra)===null||e===void 0||(e=e.find(function(L){return L==null?void 0:L[t]}))===null||e===void 0?void 0:e[t];switch(o.type){case n.fS.Number:return(0,s.jsx)(C.Z,{width:"md",name:o.name,label:E!=null?E:(0,s.jsx)(d.FormattedMessage,{id:o.name}),tooltip:(0,s.jsx)(d.FormattedMessage,{id:o.name}),placeholder:f.formatMessage({id:o.name,defaultMessage:o.name}),min:1,max:1024,fieldProps:{step:1}});case n.fS.Boolean:return(0,s.jsx)(_.Z,{name:o.name,children:E!=null?E:(0,s.jsx)(d.FormattedMessage,{id:o.name})});case n.fS.Varchar:return(0,s.jsx)(M.Z,{width:"md",name:o.name,label:E!=null?E:(0,s.jsx)(d.FormattedMessage,{id:o.name}),tooltip:(0,s.jsx)(d.FormattedMessage,{id:o.name}),placeholder:f.formatMessage({id:o.name})});case n.fS.Json:return(0,s.jsx)(c.ZP.Item,{name:o.name,label:E!=null?E:(0,s.jsx)(d.FormattedMessage,{id:o.name}),tooltip:(0,s.jsx)(d.FormattedMessage,{id:o.name}),valuePropName:"value",children:(0,s.jsx)(P.Z,{})});case n.fS.Text:default:return(0,s.jsx)(p.Z,{width:"md",name:o.name,label:E!=null?E:(0,s.jsx)(d.FormattedMessage,{id:o.name}),tooltip:(0,s.jsx)(d.FormattedMessage,{id:o.name}),placeholder:f.formatMessage({id:o.name})})}};return(0,s.jsx)(s.Fragment,{children:b(m)})};T.Z=j},53394:function(K,T,r){r.r(T),r.d(T,{default:function(){return X}});var P=r(15009),n=r.n(P),C=r(97857),_=r.n(C),M=r(99289),c=r.n(M),p=r(5574),g=r.n(p),d=r(26674),s=r(82238),j=r(28808),x=r(30869),O=r(26271),m=r(952),f=r(5966),b=r(74453),A=r(2453),o=r(74330),e=r(67294),t=r(80854),E=r(18025),L=r(51042),Z=r(67337),N=r(16894),y=r(14726),W=r(37476),z=r(75842),a=r(85893),R=function(B){var u=(0,t.useIntl)(),l=B.visible,h=B.onVisibleChange,v=B.onFinish,i=z.Z.useForm(),D=g()(i,1),w=D[0];return(0,e.useEffect)(function(){return function(){w.resetFields()}},[]),(0,a.jsx)(W.Y,{form:w,title:u.formatMessage({id:"newSetting",defaultMessage:"newSetting"}),width:"30vw",visible:l,onVisibleChange:h,onFinish:v,children:(0,a.jsxs)(m.ZP.Group,{children:[(0,a.jsx)(f.Z,{label:(0,a.jsx)(t.FormattedMessage,{id:"key",defaultMessage:"key"}),rules:[{required:!0}],width:"md",name:"key"}),(0,a.jsx)(f.Z,{label:(0,a.jsx)(t.FormattedMessage,{id:"value",defaultMessage:"value"}),rules:[{required:!0}],width:"md",name:"value"})]})})},re=R,J=function(B){var u=B.user,l=B.isProfile,h=l===void 0?!1:l,v=(0,e.useRef)(),i=(0,t.useIntl)(),D=(0,e.useState)(!1),w=g()(D,2),Q=w[0],V=w[1],G=(0,e.useState)("PATCH"),k=g()(G,2),q=k[0],ee=k[1],te=[{title:(0,a.jsx)(t.FormattedMessage,{id:"key",defaultMessage:"key"}),dataIndex:"key",hideInSearch:!0},{title:(0,a.jsx)(t.FormattedMessage,{id:"value",defaultMessage:"value"}),dataIndex:"value",hideInSearch:!0}],$=(0,e.useCallback)(function(I){var F=I&&Object.entries(I).map(function(S){return{key:S[0],value:S[1]}});return F},[u]);return(0,a.jsxs)(e.Fragment,{children:[(0,a.jsx)(N.ZP,{headerTitle:i.formatMessage({id:"menu.settings"}),actionRef:v,rowKey:"id",search:!1,toolBarRender:h?function(){return[(0,a.jsxs)(y.ZP,{type:"primary",onClick:function(){V(-1),ee("PATCH")},children:[(0,a.jsx)(L.Z,{})," ",(0,a.jsx)(t.FormattedMessage,{id:"pages.searchTable.new"})]},"primary"),(0,a.jsxs)(y.ZP,{color:"yellow",type:"primary",onClick:function(){V(-1),ee("PUT")},children:[(0,a.jsx)(Z.Z,{})," ",(0,a.jsx)(t.FormattedMessage,{id:"user.settings.overwrite"})]},"primary")]}:!1,request:function(){return(0,x.nS)(Number(u)).then(function(F){return F.success?{data:$(F.data)}:[]})},columns:te}),(0,a.jsx)(re,{id:Q,visible:Number.isInteger(Q),onVisibleChange:function(F){return F===!1&&V(!1)},onFinish:function(){var I=c()(n()().mark(function F(S){var H;return n()().wrap(function(U){for(;;)switch(U.prev=U.next){case 0:return U.next=2,(0,x.m9)(Number(u),q,S);case 2:H=U.sent,H.success&&(V(!1),v.current&&v.current.reload());case 4:case"end":return U.stop()}},F)}));return function(F){return I.apply(this,arguments)}}()})]})},ne=J,X=function(){var Y=(0,e.useState)(!1),B=g()(Y,2),u=B[0],l=B[1],h=(0,t.useParams)(),v=(0,t.useIntl)(),i=h.tab,D=i===void 0?"general":i,w=(0,j.Z)("EscolaLms\\Auth\\Models\\User"),Q=(0,e.useState)(),V=g()(Q,2),G=V[0],k=V[1],q=(0,e.useCallback)(c()(n()().mark(function $(){var I;return n()().wrap(function(S){for(;;)switch(S.prev=S.next){case 0:return l(!0),S.next=3,(0,x.N5)();case 3:I=S.sent,I.success&&k(_()(_()({},I.data),{},{bio:I.data.bio||""})),l(!1);case 6:case"end":return S.stop()}},$)})),[]);(0,e.useEffect)(function(){q()},[]);var ee=(0,e.useMemo)(function(){return{onFinish:function(){var $=c()(n()().mark(function F(S){var H;return n()().wrap(function(U){for(;;)switch(U.prev=U.next){case 0:return U.next=2,(0,x.ck)(S);case 2:H=U.sent,A.ZP.success(H.message);case 4:case"end":return U.stop()}},F)}));function I(F){return $.apply(this,arguments)}return I}(),initialValues:G}},[G]),te=(0,e.useMemo)(function(){return{onFinish:function(){var $=c()(n()().mark(function F(S){var H;return n()().wrap(function(U){for(;;)switch(U.prev=U.next){case 0:return U.next=2,(0,x.Je)(S);case 2:H=U.sent,A.ZP.success(H.message);case 4:case"end":return U.stop()}},F)}));function I(F){return $.apply(this,arguments)}return I}(),initialValues:G}},[G]);return G?(0,a.jsx)(b._z,{title:(0,a.jsx)(t.FormattedMessage,{id:"my_profile"}),header:{breadcrumb:{routes:[{path:"my-profile",breadcrumbName:v.formatMessage({id:"my_profile"})},{path:String(D),breadcrumbName:v.formatMessage({id:String(D)})}]}},children:(0,a.jsxs)(O.ZP,{tabs:{type:"card",activeKey:D,onChange:function(I){return t.history.push("/my-profile/".concat(I))}},children:[(0,a.jsx)(O.ZP.TabPane,{tab:(0,a.jsx)(t.FormattedMessage,{id:"general"}),children:(0,a.jsxs)(m.ZP,_()(_()({},ee),{},{children:[(0,a.jsxs)(m.ZP.Group,{children:[(0,a.jsx)(f.Z,{width:"md",name:"first_name",label:(0,a.jsx)(t.FormattedMessage,{id:"first_name"}),tooltip:(0,a.jsx)(t.FormattedMessage,{id:"first_name"}),placeholder:v.formatMessage({id:"first_name"}),required:!0}),(0,a.jsx)(f.Z,{width:"md",name:"last_name",label:(0,a.jsx)(t.FormattedMessage,{id:"last_name"}),tooltip:(0,a.jsx)(t.FormattedMessage,{id:"last_name"}),placeholder:v.formatMessage({id:"last_name"}),required:!0})]}),(0,a.jsx)(m.ZP.Group,{children:w.state==="loaded"&&w.list.map(function($){return(0,a.jsx)(E.Z,{field:$},$.id)})}),(0,a.jsx)(m.ZP.Group,{children:u?(0,a.jsx)(o.Z,{style:{marginBottom:30}}):(0,a.jsxs)(m.ZP.Item,{name:"avatar",label:(0,a.jsx)(t.FormattedMessage,{id:"avatar"}),children:[G.path_avatar&&(0,a.jsx)(d.Z,{path:G.path_avatar,size:600,width:200}),(0,a.jsx)(s.Z,{folder:"avatars/".concat(G.id),url:"/api/profile/upload-avatar",name:"avatar",accept:"image/*",onUpload:function(I){I.success&&q()}})]})})]}))},"general"),(0,a.jsx)(O.ZP.TabPane,{tab:(0,a.jsx)(t.FormattedMessage,{id:"change_password"}),children:(0,a.jsxs)(m.ZP,_()(_()({},te),{},{children:[(0,a.jsx)(m.ZP.Group,{children:(0,a.jsx)(f.Z.Password,{width:"md",name:"current_password",label:(0,a.jsx)(t.FormattedMessage,{id:"current_password"}),placeholder:v.formatMessage({id:"current_password"}),required:!0})}),(0,a.jsxs)(m.ZP.Group,{children:[(0,a.jsx)(f.Z.Password,{width:"md",name:"new_password",label:(0,a.jsx)(t.FormattedMessage,{id:"new_password"}),placeholder:v.formatMessage({id:"new_password"}),required:!0}),(0,a.jsx)(f.Z.Password,{width:"md",name:"new_confirm_password",label:(0,a.jsx)(t.FormattedMessage,{id:"new_confirm_password"}),placeholder:v.formatMessage({id:"new_confirm_password"}),required:!0})]})]}))},"change_password"),(0,a.jsx)(O.ZP.TabPane,{tab:(0,a.jsx)(t.FormattedMessage,{id:"user.settings"}),children:(0,a.jsx)(ne,{user:String(G.id),isProfile:!0})},"user_settings")]})}):(0,a.jsx)(o.Z,{})}},31472:function(K,T,r){r.d(T,{Fh:function(){return j},UL:function(){return d},Yo:function(){return m},Zg:function(){return f},cX:function(){return g},ce:function(){return p},fS:function(){return O},fn:function(){return M},h5:function(){return b},hg:function(){return o},oz:function(){return P},rX:function(){return x},uT:function(){return _},wg:function(){return A},wl:function(){return s}});var P=function(e){return e.Unselected="",e.RichText="EscolaLms\\TopicTypes\\Models\\TopicContent\\RichText",e.OEmbed="EscolaLms\\TopicTypes\\Models\\TopicContent\\OEmbed",e.Audio="EscolaLms\\TopicTypes\\Models\\TopicContent\\Audio",e.Video="EscolaLms\\TopicTypes\\Models\\TopicContent\\Video",e.H5P="EscolaLms\\TopicTypes\\Models\\TopicContent\\H5P",e.Image="EscolaLms\\TopicTypes\\Models\\TopicContent\\Image",e.PDF="EscolaLms\\TopicTypes\\Models\\TopicContent\\PDF",e.SCORM="EscolaLms\\TopicTypes\\Models\\TopicContent\\ScormSco",e.Project="EscolaLms\\TopicTypeProject\\Models\\Project",e.GiftQuiz="EscolaLms\\TopicTypeGift\\Models\\GiftQuiz",e}({}),n=function(e){return e.OrderPaid="EscolaLms\\Cart\\Events\\OrderPaid",e.UserLogged="EscolaLms\\Auth\\Events\\UserLogged",e}({}),C=function(e){return e.draft="draft",e.published="published",e.archived="archived",e}({}),_=function(e){return e.email="EscolaLms\\TemplatesEmail\\Core\\EmailChannel",e.pdf="EscolaLms\\TemplatesPdf\\Core\\PdfChannel",e.sms="EscolaLms\\TemplatesSms\\Core\\SmsChannel",e}({}),M=function(e){return e.ManuallyTriggeredEvent="EscolaLms\\Templates\\Events\\ManuallyTriggeredEvent",e}({}),c=function(e){return e.cart_fixed="cart_fixed",e.cart_percent="cart_percent",e.product_fixed="product_fixed",e.product_percent="product_percent",e}({}),p=function(e){return e.MULTIPLE_CHOICE="multiple_choice",e.MULTIPLE_CHOICE_WITH_MULTIPLE_RIGHT_ANSWERS="multiple_choice_with_multiple_right_answers",e.TRUE_FALSE="true_false",e.SHORT_ANSWERS="short_answers",e.MATCHING="matching",e.NUMERICAL_QUESTION="numerical_question",e.ESSAY="essay",e.DESCRIPTION="description",e}({}),g=function(e){return e.PRESENT="present",e.PRESENT_NOT_EXERCISING="present_not_exercising",e.ABSENT="absent",e.EXCUSED_ABSENCE="excused_absence",e}({}),d=function(e){return e.Manual="manual",e.ManualPass="manual_pass",e.ManualGrades="manual_grades",e.TeamsForms="teams_forms",e.TeamsLecture="teams_lecture",e.TestPortal="test_portal",e}({}),s=function(e){return e.Passed="zal",e.Failed="nie zal",e}({}),j=function(e){return e.Simple="simple",e.Complex="complex",e}({}),x=function(e){return e.QuizSummary="EscolaLms\\Reports\\Stats\\Topic\\QuizSummaryForTopicTypeGIFT",e}({}),O=function(e){return e.Boolean="boolean",e.Number="number",e.Varchar="varchar",e.Text="text",e.Json="json",e}({}),m=function(e){return e.Rate="rate",e.Text="text",e.Review="review",e}({}),f=function(e){return e.Exercise="exercise",e.Course="course",e.Info="info",e}({}),b=function(e){return e.Group="EscolaLms\\PcgIntegration\\Models\\Group",e}({}),A=function(e){return e.PUSH="EscolaLms\\BulkNotifications\\Channels\\PushNotificationChannel",e}({}),o=function(e){return e.TITLE="title",e.BODY="body",e.IMAGE="image_url",e.REDIRECT_URL="redirect_url",e}({})},36309:function(K,T,r){r.d(T,{AK:function(){return x},XU:function(){return g},kB:function(){return s}});var P=r(15009),n=r.n(P),C=r(97857),_=r.n(C),M=r(99289),c=r.n(M),p=r(80854);function g(m,f){return d.apply(this,arguments)}function d(){return d=c()(n()().mark(function m(f,b){return n()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.abrupt("return",(0,p.request)("/api/model-fields",_()({method:"GET",params:f},b||{})));case 1:case"end":return o.stop()}},m)})),d.apply(this,arguments)}function s(m,f){return j.apply(this,arguments)}function j(){return j=c()(n()().mark(function m(f,b){return n()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.abrupt("return",(0,p.request)("/api/admin/model-fields",_()({method:"POST",data:f},b||{})));case 1:case"end":return o.stop()}},m)})),j.apply(this,arguments)}function x(m,f){return O.apply(this,arguments)}function O(){return O=c()(n()().mark(function m(f,b){return n()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.abrupt("return",(0,p.request)("/api/admin/model-fields",_()({method:"DELETE",data:f},b||{})));case 1:case"end":return o.stop()}},m)})),O.apply(this,arguments)}},30869:function(K,T,r){r.d(T,{EA:function(){return s},Je:function(){return b},LS:function(){return Y},N5:function(){return x},Nq:function(){return o},VB:function(){return re},WC:function(){return N},ck:function(){return m},h8:function(){return L},m9:function(){return a},nS:function(){return W},r4:function(){return t},rC:function(){return g},yi:function(){return ne}});var P=r(15009),n=r.n(P),C=r(97857),_=r.n(C),M=r(99289),c=r.n(M),p=r(80854);function g(u,l){return d.apply(this,arguments)}function d(){return d=c()(n()().mark(function u(l,h){return n()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.abrupt("return",(0,p.request)("/api/admin/users",_()({params:l,method:"GET",useCache:!1},h||{})));case 1:case"end":return i.stop()}},u)})),d.apply(this,arguments)}function s(u,l,h){return j.apply(this,arguments)}function j(){return j=c()(n()().mark(function u(l,h,v){return n()().wrap(function(D){for(;;)switch(D.prev=D.next){case 0:return D.abrupt("return",(0,p.request)("/api/admin/users/".concat(l),_()({method:"GET",useCache:v!==void 0?v:!0},h||{})));case 1:case"end":return D.stop()}},u)})),j.apply(this,arguments)}function x(u){return O.apply(this,arguments)}function O(){return O=c()(n()().mark(function u(l){return n()().wrap(function(v){for(;;)switch(v.prev=v.next){case 0:return v.abrupt("return",(0,p.request)("/api/profile/me",_()({method:"GET",useCache:!1},l||{})));case 1:case"end":return v.stop()}},u)})),O.apply(this,arguments)}function m(u,l){return f.apply(this,arguments)}function f(){return f=c()(n()().mark(function u(l,h){return n()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.abrupt("return",(0,p.request)("/api/profile/me",_()({data:l,method:"PUT"},h||{})));case 1:case"end":return i.stop()}},u)})),f.apply(this,arguments)}function b(u,l){return A.apply(this,arguments)}function A(){return A=c()(n()().mark(function u(l,h){return n()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.abrupt("return",(0,p.request)("/api/profile/password",_()({data:l,method:"PUT"},h||{})));case 1:case"end":return i.stop()}},u)})),A.apply(this,arguments)}function o(u,l,h){return e.apply(this,arguments)}function e(){return e=c()(n()().mark(function u(l,h,v){return n()().wrap(function(D){for(;;)switch(D.prev=D.next){case 0:return D.abrupt("return",(0,p.request)("/api/admin/users/".concat(l),_()({data:h,method:"PUT"},v||{})));case 1:case"end":return D.stop()}},u)})),e.apply(this,arguments)}function t(u,l){return E.apply(this,arguments)}function E(){return E=c()(n()().mark(function u(l,h){return n()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.abrupt("return",(0,p.request)("/api/admin/users",_()({data:l,method:"POST"},h||{})));case 1:case"end":return i.stop()}},u)})),E.apply(this,arguments)}function L(u,l){return Z.apply(this,arguments)}function Z(){return Z=c()(n()().mark(function u(l,h){return n()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.abrupt("return",(0,p.request)("/api/admin/users/".concat(l),_()({method:"DELETE"},h||{})));case 1:case"end":return i.stop()}},u)})),Z.apply(this,arguments)}function N(u,l,h){return y.apply(this,arguments)}function y(){return y=c()(n()().mark(function u(l,h,v){return n()().wrap(function(D){for(;;)switch(D.prev=D.next){case 0:return D.abrupt("return",(0,p.request)("/api/auth/email/resend",_()({method:"POST",data:{email:l,return_url:h}},v||{})));case 1:case"end":return D.stop()}},u)})),y.apply(this,arguments)}function W(u,l){return z.apply(this,arguments)}function z(){return z=c()(n()().mark(function u(l,h){return n()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.abrupt("return",(0,p.request)("/api/admin/users/".concat(l,"/settings"),_()({method:"GET",useCache:!1},h||{})));case 1:case"end":return i.stop()}},u)})),z.apply(this,arguments)}function a(u,l,h,v){return R.apply(this,arguments)}function R(){return R=c()(n()().mark(function u(l,h,v,i){return n()().wrap(function(w){for(;;)switch(w.prev=w.next){case 0:return w.abrupt("return",(0,p.request)("/api/admin/users/".concat(l,"/settings"),_()({method:h,data:{settings:[v]},useCache:!1},i||{})));case 1:case"end":return w.stop()}},u)})),R.apply(this,arguments)}function re(u,l){return J.apply(this,arguments)}function J(){return J=c()(n()().mark(function u(l,h){return n()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.abrupt("return",(0,p.request)("/api/admin/users/".concat(l,"/avatar"),_()({method:"DELETE"},h||{})));case 1:case"end":return i.stop()}},u)})),J.apply(this,arguments)}function ne(u,l,h){return X.apply(this,arguments)}function X(){return X=c()(n()().mark(function u(l,h,v){return n()().wrap(function(D){for(;;)switch(D.prev=D.next){case 0:return D.abrupt("return",(0,p.request)("/api/admin/users/".concat(l,"/interests"),_()({data:h,method:"PUT"},v||{})));case 1:case"end":return D.stop()}},u)})),X.apply(this,arguments)}function Y(u,l){return B.apply(this,arguments)}function B(){return B=c()(n()().mark(function u(l,h){return n()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.abrupt("return",(0,p.request)("/api/admin/stats/date-range",_()({params:l,method:"GET"},h||{})));case 1:case"end":return i.stop()}},u)})),B.apply(this,arguments)}}}]);

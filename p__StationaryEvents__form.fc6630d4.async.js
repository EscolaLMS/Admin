(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{"UI+1":function(se,B,t){"use strict";t.r(B);var ie=t("14J3"),J=t("BMrR"),L=t("jCWc"),de=t("kPKH"),X=t("T2oS"),me=t("W9HT"),ce=t("miYZ"),oe=t("tsqr"),x=t("qLMh"),i=t("k1fw"),V=t("9og8"),y=t("tJVT"),o=t("q1tI"),f=t("VMEa"),$=t("Qurx"),he=t("FJDo"),De=t("yj/a"),le=t("lR9U"),Pe=t("BiO0"),w=t("nhC9"),Ee=t("hd5d"),Te=t("tMyG"),a=t("9kvl"),Ae=t("Ty5D"),Ie=t("0WSk"),ge=t("lJbd"),Fe=t("Gn8c"),Ne=t("TWax"),k=t("c+yx"),dt=t("zjZ2"),Ue=t("q34N"),Re=t("VlvL"),Be=t("5RzD"),ct=t("P2fV"),Ve=t("NJEC"),ot=t("5Dmo"),we=t("3S7+"),lt=t("+L6B"),xe=t("2/Rp"),U=t("oBTY"),Ke=t("0Owb"),ut=t("DYRE"),We=t("zeV3"),jt=t("hUqB"),Je=t("wYyv"),pe=t("YJCA"),Le=t("eyie"),$e=t("xvlK"),Ge=t("G3dp"),Ye=t("/MfK"),He=t("CTl7"),ze=t("Qiat"),bt=t("y8nQ"),Qe=t("Vl3Y"),Ze=t("rmhi"),Xe=t("w/uu"),e=t("nKUr"),ke=function(S){var l=Object(a.l)(),Y=S.visible,d=S.fields,H=S.onVisibleChange,h=S.onFinish,M=S.id,q=Qe.a.useForm(),K=Object(y.a)(q,1),j=K[0];return Object(o.useEffect)(function(){if(d){j.setFieldsValue(d);return}j.resetFields()},[d]),Object(e.jsx)(Ze.a,{form:j,title:l.formatMessage({id:M?"editSetting":"newSetting",defaultMessage:M?"editSetting":"newSetting"}),width:"40vw",visible:Y,onVisibleChange:function(R){H(R),j.resetFields()},onFinish:function(R){return j.resetFields(),h(Object(i.a)(Object(i.a)({},R),{},{id:(d==null?void 0:d.id)||null}))},children:Object(e.jsxs)(f.a.Group,{children:[Object(e.jsx)($.a,{label:Object(e.jsx)(a.a,{id:"title",defaultMessage:"title"}),rules:[{required:!0}],width:"lg",name:"title"}),Object(e.jsx)($.a,{label:Object(e.jsx)(a.a,{id:"subtitle",defaultMessage:"subtitle"}),rules:[{required:!0}],width:"lg",name:"subtitle"}),Object(e.jsx)(Xe.a,{name:"hour",label:Object(e.jsx)(a.a,{id:"hour",defaultMessage:"hour"}),rules:[{required:!0}],width:"xs"}),Object(e.jsx)(f.a.Item,{name:"tutors",label:Object(e.jsx)(a.a,{id:"tutors"}),rules:[{required:!0}],convertValue:function(R){return R},valuePropName:"value",children:Object(e.jsx)(Ie.a,{multiple:!0})}),Object(e.jsx)(Pe.a,{label:Object(e.jsx)(a.a,{id:"description",defaultMessage:"description"}),rules:[{required:!1}],width:"lg",name:"description"}),Object(e.jsx)(f.a.Item,{name:"asCandidate",hidden:!0})]})})},qe=ke,_e=t("Vpfc"),et=Object(pe.b)(function(G){return Object(e.jsx)("tr",Object(i.a)({},G))}),tt=Object(pe.a)(function(G){return Object(e.jsx)("tbody",Object(i.a)({},G))}),at=Object(pe.c)(function(){return Object(e.jsx)(Le.a,{style:{cursor:"grab",color:"#999"}})}),nt=function(S){var l=S.data,Y=S.onCreate,d=S.lastDataUpdateDate,H=Object(o.useRef)(),h=Object(o.useRef)(null),M=Object(a.l)(),q=Object(o.useState)([]),K=Object(y.a)(q,2),j=K[0],W=K[1],R=Object(o.useState)(null),_=Object(y.a)(R,2),ye=_[0],A=_[1],Se=Object(o.useState)(!1),ee=Object(y.a)(Se,2),C=ee[0],F=ee[1],Me=Object(o.useState)(l),ue=Object(y.a)(Me,2),te=ue[0],je=ue[1],be=Object(o.useState)([]),Oe=Object(y.a)(be,2),N=Oe[0],z=Oe[1],Q=Object(o.useState)(!1),E=Object(y.a)(Q,2),v=E[0],P=E[1],T=[{title:"Sort",dataIndex:"sort",width:"5%",className:"drag-visible",render:function(){return Object(e.jsx)(at,{})}},{width:"20%",title:Object(e.jsx)(a.a,{id:"title",defaultMessage:"Title"}),dataIndex:"title",hideInSearch:!0,renderText:function(n){return n.length>80?"".concat(n.slice(0,77),"..."):n}},{width:"20%",title:Object(e.jsx)(a.a,{id:"subtitle",defaultMessage:"subtitle"}),dataIndex:"subtitle",hideInSearch:!0,renderText:function(n){return n.length>80?"".concat(n.slice(0,77),"..."):n}},{width:"10%",title:Object(e.jsx)(a.a,{id:"hour",defaultMessage:"hour"}),dataIndex:"hour",hideInSearch:!0},{width:"15%",title:Object(e.jsx)(a.a,{id:"tutors",defaultMessage:"tutors"}),dataIndex:"tutors",hideInSearch:!0,render:function(n,s){var r=s.tutors;return r&&Object(e.jsx)(We.b,{children:r.map(function(c){return Object(e.jsx)(_e.a,{type:"App\\Models\\User",type_id:c},c)})})}},{width:"18%",title:Object(e.jsx)(a.a,{id:"description",defaultMessage:"description"}),dataIndex:"description",hideInSearch:!0,renderText:function(n){return n?n.length>80?"".concat(n.trim().slice(0,77),"..."):n.trim():"-"}}],Z=function(n){var s=n.oldIndex,r=n.newIndex;if(s!==r){var c=Object(Je.a)(j.slice(),s,r).filter(Boolean);W(c)}},m=function(n){return Object(e.jsx)(tt,Object(i.a)({useDragHandle:!0,disableAutoscroll:!0,helperClass:"row-dragging",onSortEnd:Z},n))},ae=function(n){var s,r=Object(Ke.a)({},n),c=j.findIndex(function(p){var O=p.id;return O===r["data-row-key"]}),b=Object(i.a)(Object(i.a)({},r),{},{className:"".concat(r.className," ").concat((s=j[c])!==null&&s!==void 0&&s.asCandidate?"agenda-row-candidate":"")});return Object(e.jsx)(et,Object(i.a)({index:c},b))};return Object(o.useEffect)(function(){z([]),je(l),A(null),P(!1),h.current=null},[d]),Object(o.useEffect)(function(){Object(V.a)(Object(x.a)().mark(function u(){var n,s,r,c,b;return Object(x.a)().wrap(function(O){for(;;)switch(O.prev=O.next){case 0:if(!(!te||!N)){O.next=2;break}return O.abrupt("return");case 2:n=[].concat(Object(U.a)(te),Object(U.a)(N)),s=n.reduce(function(g,D,I,ne){var fe=ne.filter(function(re){var Ce=re.id;return Ce===D.id});if(fe.length>1){var ve=fe.find(function(re){return"asCandidate"in re});if(!ve)return[].concat(Object(U.a)(g),[fe[-1]]);var it=ve&&g.find(function(re){var Ce=re.id;return Ce===ve.id});return it?g:[].concat(Object(U.a)(g),[ve])}return[].concat(Object(U.a)(g),[fe[0]])},[]),r=j.length?s.filter(function(g){var D=g.id;return j.findIndex(function(I){return I.id===D})===-1}):[],c=j.length?j.map(function(g){var D=s.findIndex(function(I){var ne=I.id;return ne===g.id});return s[D]}):s,b=[].concat(Object(U.a)(c),Object(U.a)(r)),W(b.filter(Boolean));case 8:case"end":return O.stop()}},u)}))()},[te,N]),Object(o.useEffect)(function(){var u=j.map(function(r){var c=r.id,b=r.title,p=r.subtitle,O=r.hour,g=r.description,D=r.tutors;return{id:c,title:b,subtitle:p,hour:O,description:g,tutors:D}});Y(JSON.stringify(u));var n=j.map(function(r){var c=r.id;return c});if(h.current===null){if(!n.length)return;h.current=n}if(n.length>h.current.length){var s=JSON.stringify(n.slice(0,h.current.length))!==JSON.stringify(h.current);if(P(s),!s){h.current=n;return}}P(JSON.stringify(n)!==JSON.stringify(h.current))},[j]),Object(e.jsxs)(Te.a,{header:{breadcrumb:{}},className:"agenda-container",children:[Object(e.jsx)(ze.a,{className:"agenda-table",headerTitle:M.formatMessage({id:"agenda",defaultMessage:"Agenda"}),actionRef:H,rowKey:function(n){return n.id},search:!1,toolBarRender:function(){return[Object(e.jsxs)(xe.a,{type:"primary",onClick:function(){return F(!0)},children:[Object(e.jsx)($e.a,{})," ",Object(e.jsx)(a.a,{id:"new",defaultMessage:"new"})]},"primary")]},pagination:!1,dataSource:j,columns:[].concat(T,[{width:"12%",hideInSearch:!0,title:Object(e.jsx)(a.a,{id:"pages.searchTable.titleOption"}),dataIndex:"option",valueType:"option",render:function(n,s){return[Object(e.jsx)(xe.a,{type:"primary",icon:Object(e.jsx)(Ge.a,{}),onClick:function(){if("asCandidate"in s){var c;A((c=N.find(function(p){var O=p.id;return O===s.id}))!==null&&c!==void 0?c:null)}else{var b;A((b=l.find(function(p){var O=p.id;return O===s.id}))!==null&&b!==void 0?b:null)}F(!0)}},"edit"),Object(e.jsx)(Ve.a,{title:Object(e.jsx)(a.a,{id:"deleteQuestion",defaultMessage:"Are you sure to delete this record?"}),onConfirm:Object(V.a)(Object(x.a)().mark(function r(){return Object(x.a)().wrap(function(b){for(;;)switch(b.prev=b.next){case 0:if(!("asCandidate"in s)){b.next=3;break}return z(function(p){return p.filter(function(O){var g=O.id;return g!==s.id})}),b.abrupt("return");case 3:je(function(p){return p.filter(function(O){var g=O.id;return g!==s.id})});case 4:case"end":return b.stop()}},r)})),okText:Object(e.jsx)(a.a,{id:"yes"}),cancelText:Object(e.jsx)(a.a,{id:"no"}),children:Object(e.jsx)(we.a,{title:Object(e.jsx)(a.a,{id:"delete",defaultMessage:"delete"}),children:Object(e.jsx)(xe.a,{type:"primary",icon:Object(e.jsx)(Ye.a,{}),danger:!0})})},"delete")]}}]),components:{body:{wrapper:m,row:ae}}}),!!N.length&&Object(e.jsxs)("div",{className:"legend",children:[Object(e.jsx)("div",{className:"legend__dot"}),Object(e.jsx)("p",{className:"legend__label",children:Object(e.jsx)(a.a,{id:"changesToBeApproved",defaultMessage:"Changes to be approved"})})]}),v&&Object(e.jsxs)("div",{className:"legend",children:[Object(e.jsx)(He.a,{className:"legend__icon"}),Object(e.jsx)("p",{className:"legend__label",children:Object(e.jsx)(a.a,{id:"orderHasBeenChanged",defaultMessage:"Order has been changed"})})]}),Object(e.jsx)(qe,{name:C,visible:C,fields:ye,onVisibleChange:function(n){n===!1&&(F(!1),A(null))},onFinish:function(){var u=Object(V.a)(Object(x.a)().mark(function n(s){var r,c,b,p,O;return Object(x.a)().wrap(function(D){for(;;)switch(D.prev=D.next){case 0:if(!s.id){D.next=9;break}return r="asCandidate"in s,c=r?N:l,b=c.find(function(I){var ne=I.id;return ne===s.id}),p=b?JSON.stringify(b)!==JSON.stringify(s):!1,p&&(O=r?N.map(function(I){return I.id===s.id?s:I}):[].concat(Object(U.a)(N),[Object(i.a)(Object(i.a)({},s),{},{asCandidate:!0})]),z(O)),A(null),F(!1),D.abrupt("return");case 9:z(function(I){return[].concat(Object(U.a)(I),[Object(i.a)(Object(i.a)({},s),{},{asCandidate:!0,id:Date.now()})])}),A(null),F(!1);case 12:case"end":return D.stop()}},n)}));return function(n){return u.apply(this,arguments)}}()})]})},rt=nt,st=function(){var S,l=Object(a.l)(),Y=Object(Ae.l)(),d=Y.id,H=Y.tab,h=H===void 0?"attributes":H,M=d==="new",q=Object(o.useState)(null),K=Object(y.a)(q,2),j=K[0],W=K[1],R=Object(o.useState)(!1),_=Object(y.a)(R,2),ye=_[0],A=_[1],Se=Object(o.useState)(),ee=Object(y.a)(Se,2),C=ee[0],F=ee[1],Me=f.a.useForm(),ue=Object(y.a)(Me,1),te=ue[0],je=Object(o.useState)(new Date),be=Object(y.a)(je,2),Oe=be[0],N=be[1],z=Object(o.useCallback)(Object(V.a)(Object(x.a)().mark(function E(){var v,P,T;return Object(x.a)().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.next=2,Object(ge.c)(Number(d));case 2:v=m.sent,v.success&&F(Object(i.a)(Object(i.a)({},v.data),{},{categories:v==null||(P=v.data)===null||P===void 0||(T=P.categories)===null||T===void 0?void 0:T.map(k.c)}));case 4:case"end":return m.stop()}},E)})),[d]);Object(o.useEffect)(function(){if(M){F({name:"..."});return}z()},[d]);var Q=Object(o.useMemo)(function(){return{onFinish:function(){var E=Object(V.a)(Object(x.a)().mark(function P(T){var Z,m,ae,u,n;return Object(x.a)().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:if(Z=Object(i.a)(Object(i.a)({},T),{},{agenda:j,authors:T.authors&&T.authors.map(k.a),categories:T.categories&&T.categories.map(k.a),image_url:C&&C.image_url,image_path:C&&C.image_path&&Object(k.i)(C.image_path)}),!M){r.next=8;break}return r.next=4,Object(ge.a)(Z);case 4:m=r.sent,m.success&&(A(!1),a.f.push("/other/stationary-events/".concat(m.data.id))),r.next=12;break;case 8:return r.next=10,Object(ge.e)(Number(d),Z);case 10:m=r.sent,m.success&&(A(!1),F(Object(i.a)(Object(i.a)({},m.data),{},{categories:(ae=m)===null||ae===void 0||(u=ae.data)===null||u===void 0||(n=u.categories)===null||n===void 0?void 0:n.map(k.c)})),N(new Date),a.f.push("/other/stationary-events/".concat(m.data.id,"/").concat(h)));case 12:oe.b.success(m.message);case 13:case"end":return r.stop()}},P)}));function v(P){return E.apply(this,arguments)}return v}(),initialValues:C}},[C,d,h,j]);return C?Object(e.jsx)(Te.a,{title:M?Object(e.jsx)(a.a,{id:"stationary_event"}):Object(e.jsx)(a.a,{id:"stationary_event.edit"}),header:{breadcrumb:{routes:[{path:"other/stationary-events",breadcrumbName:l.formatMessage({id:"menu.Other activities.StationaryEvents"})},{path:String(d),breadcrumbName:l.formatMessage({id:"form"})},{path:"/",breadcrumbName:l.formatMessage({id:d==="new"?"new":"edit"})},{path:String(h),breadcrumbName:l.formatMessage({id:String(h)})}]}},children:Object(e.jsxs)(w.a,{tabs:{type:"card",activeKey:h,onChange:function(v){return a.f.push("/other/stationary-events/".concat(d,"/").concat(v))}},children:[Object(e.jsxs)(w.a.TabPane,{tab:Object(e.jsx)(a.a,{id:"attributes"}),children:[Object(e.jsx)(Re.a,{show:ye})," ",Object(e.jsxs)(f.a,Object(i.a)(Object(i.a)({},Q),{},{form:te,onValuesChange:function(){A(!0)},children:[Object(e.jsxs)(f.a.Group,{children:[Object(e.jsx)($.a,{width:"md",name:"name",label:Object(e.jsx)(a.a,{id:"name"}),tooltip:Object(e.jsx)(a.a,{id:"name_tooltip"}),placeholder:l.formatMessage({id:"name",defaultMessage:"name"}),required:!0}),Object(e.jsx)($.a,{width:"md",name:"place",label:Object(e.jsx)(a.a,{id:"place"}),tooltip:Object(e.jsx)(a.a,{id:"place_tooltip"}),placeholder:l.formatMessage({id:"place",defaultMessage:"place"}),required:!0}),Object(e.jsx)(f.a.Item,{name:"authors",label:Object(e.jsx)(a.a,{id:"tutor"}),valuePropName:"value",children:Object(e.jsx)(Ie.a,{multiple:!0})}),Object(e.jsx)(he.a,{width:"xs",name:"max_participants",label:Object(e.jsx)(a.a,{id:"max_participants"}),tooltip:Object(e.jsx)(a.a,{id:"max_participants_tooltip"}),placeholder:l.formatMessage({id:"max_participants",defaultMessage:"max_participants"}),min:0,max:9999,fieldProps:{step:1}}),Object(e.jsx)(De.a,{name:"status",width:"md",label:Object(e.jsx)(a.a,{id:"status"}),tooltip:Object(e.jsx)(a.a,{id:"status_consultation_tooltip"}),valueEnum:{draft:l.formatMessage({id:"draft",defaultMessage:"draft"}),published:l.formatMessage({id:"published",defaultMessage:"published"}),archived:l.formatMessage({id:"archived",defaultMessage:"archived"})},initialValue:{draft:l.formatMessage({id:"draft",defaultMessage:"draft"})},placeholder:l.formatMessage({id:"status"}),rules:[{required:!0,message:Object(e.jsx)(a.a,{id:"select"})}]})]}),Object(e.jsxs)(f.a.Group,{children:[Object(e.jsx)(le.a,{width:"sm",name:"started_at",label:Object(e.jsx)(a.a,{id:"started_at"}),tooltip:Object(e.jsx)(a.a,{id:"started_at_tooltip"}),placeholder:l.formatMessage({id:"started_at",defaultMessage:"started_at"})}),Object(e.jsx)(le.a,{width:"sm",name:"finished_at",label:Object(e.jsx)(a.a,{id:"finished_at"}),tooltip:Object(e.jsx)(a.a,{id:"finished_at_tooltip"}),placeholder:l.formatMessage({id:"finished_at",defaultMessage:"finished_at"})})]}),Object(e.jsx)(f.a.Group,{children:Object(e.jsx)(Pe.a,{width:"lg",name:"short_desc",label:Object(e.jsx)(a.a,{id:"short_description"}),tooltip:Object(e.jsx)(a.a,{id:"short_description"})})}),Object(e.jsx)(f.a.Item,{name:"program",label:Object(e.jsx)(a.a,{id:"program"}),tooltip:Object(e.jsx)(a.a,{id:"program_tooltip"}),valuePropName:"value",children:Object(e.jsx)(Ee.a,{directory:"stationary_events/".concat(d,"/wysiwyg")})}),Object(e.jsx)(f.a.Item,{name:"description",label:Object(e.jsx)(a.a,{id:"description"}),tooltip:Object(e.jsx)(a.a,{id:"description_tooltip"}),valuePropName:"value",children:Object(e.jsx)(Ee.a,{directory:"stationary_events/".concat(d,"/wysiwyg")})})]}))]},"attributes")," ",!M&&Object(e.jsx)(w.a.TabPane,{tab:Object(e.jsx)(a.a,{id:"agenda"}),children:Object(e.jsx)(f.a,Object(i.a)(Object(i.a)({},Q),{},{children:Object(e.jsx)(rt,{data:(S=C.agenda)!==null&&S!==void 0?S:[],onCreate:function(v){return W(v)},lastDataUpdateDate:Oe})}))},"agenda"),!M&&Object(e.jsx)(w.a.TabPane,{tab:Object(e.jsx)(a.a,{id:"product"}),children:d&&Object(e.jsx)(Ue.a,{productable:{class_type:"App\\Models\\StationaryEvent",class_id:d,name:String(C.name),quantity:1}})},"product"),!M&&Object(e.jsx)(w.a.TabPane,{tab:Object(e.jsx)(a.a,{id:"media"}),children:Object(e.jsx)(f.a,Object(i.a)(Object(i.a)({},Q),{},{children:Object(e.jsx)(Fe.a,{folder:"stationary-events/".concat(d),title:"image",action:"/api/admin/stationary-events/".concat(d,"/?_method=PUT"),src_name:"image_url",form_name:"image",getUploadedSrcField:function(v){return v.file.response.data.image_url},setPath:function(v){return F(function(P){return Object(i.a)(Object(i.a)({},P),v)})}})}))},"media"),!M&&Object(e.jsx)(w.a.TabPane,{tab:Object(e.jsx)(a.a,{id:"categories"}),children:Object(e.jsx)(J.a,{children:Object(e.jsx)(de.a,{span:12,children:Object(e.jsx)(f.a,Object(i.a)(Object(i.a)({},Q),{},{children:Object(e.jsx)(f.a.Item,{label:Object(e.jsx)(a.a,{id:"categories"}),name:"categories",valuePropName:"value",children:Object(e.jsx)(Ne.a,{multiple:!1})})}))})})},"categories"),!M&&Object(e.jsx)(w.a.TabPane,{tab:Object(e.jsx)(a.a,{id:"user_submission"}),children:Object(e.jsx)(J.a,{children:Object(e.jsx)(de.a,{span:12,children:d&&Object(e.jsx)(Be.a,{id:Number(d),type:"App\\Models\\StationaryEvent"})})})},"user_submission")]})}):Object(e.jsx)(me.a,{})},Ot=B.default=st},VlvL:function(se,B,t){"use strict";var ie=t("9kvl"),J=t("Ty5D"),L=t("nKUr"),de=t.n(L),X=function(ce){var oe=ce.show,x=Object(ie.l)();return Object(L.jsx)(J.b,{when:oe,message:x.formatMessage({id:"unsaved_changes"})})};B.a=X},hUqB:function(se,B,t){},q34N:function(se,B,t){"use strict";var ie=t("tJVT"),J=t("0eZe"),L=t("q1tI"),de=t.n(L),X=t("nKUr"),me=t.n(X),ce=function(x){var i=x.productable,V=x.type,y=V===void 0?"card":V,o=Object(L.useState)("attributes"),f=Object(ie.a)(o,2),$=f[0],he=f[1];return Object(X.jsx)(J.a,{productable:i,tab:$,onTabChange:function(le){return he(le)},type:y})};B.a=ce},zjZ2:function(se,B,t){}}]);

(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"/y+f":function(Pe,R,e){"use strict";e.d(R,"g",function(){return F}),e.d(R,"e",function(){return O}),e.d(R,"f",function(){return d}),e.d(R,"d",function(){return ne}),e.d(R,"a",function(){return se}),e.d(R,"c",function(){return ee}),e.d(R,"b",function(){return G});var F;(function(s){s.Unselected="",s.RichText="EscolaLms\\TopicTypes\\Models\\TopicContent\\RichText",s.OEmbed="EscolaLms\\TopicTypes\\Models\\TopicContent\\OEmbed",s.Audio="EscolaLms\\TopicTypes\\Models\\TopicContent\\Audio",s.Video="EscolaLms\\TopicTypes\\Models\\TopicContent\\Video",s.H5P="EscolaLms\\TopicTypes\\Models\\TopicContent\\H5P",s.Image="EscolaLms\\TopicTypes\\Models\\TopicContent\\Image",s.PDF="EscolaLms\\TopicTypes\\Models\\TopicContent\\PDF",s.SCORM="EscolaLms\\TopicTypes\\Models\\TopicContent\\ScormSco",s.Project="EscolaLms\\TopicTypeProject\\Models\\Project",s.GiftQuiz="EscolaLms\\TopicTypeGift\\Models\\GiftQuiz"})(F||(F={}));var X;(function(s){s.OrderPaid="EscolaLms\\Cart\\Events\\OrderPaid",s.UserLogged="EscolaLms\\Auth\\Events\\UserLogged"})(X||(X={}));var M;(function(s){s.draft="draft",s.published="published",s.archived="archived"})(M||(M={}));var O;(function(s){s.email="EscolaLms\\TemplatesEmail\\Core\\EmailChannel",s.pdf="EscolaLms\\TemplatesPdf\\Core\\PdfChannel",s.sms="EscolaLms\\TemplatesSms\\Core\\SmsChannel"})(O||(O={}));var d;(function(s){s.ManuallyTriggeredEvent="EscolaLms\\Templates\\Events\\ManuallyTriggeredEvent"})(d||(d={}));var je;(function(s){s.cart_fixed="cart_fixed",s.cart_percent="cart_percent",s.product_fixed="product_fixed",s.product_percent="product_percent"})(je||(je={}));var ne;(function(s){s.MULTIPLE_CHOICE="multiple_choice",s.MULTIPLE_CHOICE_WITH_MULTIPLE_RIGHT_ANSWERS="multiple_choice_with_multiple_right_answers",s.TRUE_FALSE="true_false",s.SHORT_ANSWERS="short_answers",s.MATCHING="matching",s.NUMERICAL_QUESTION="numerical_question",s.ESSAY="essay",s.DESCRIPTION="description"})(ne||(ne={}));var se;(function(s){s.PRESENT="present",s.PRESENT_NOT_EXERCISING="present_not_exercising",s.ABSENT="absent",s.EXCUSED_ABSENCE="excused_absence"})(se||(se={}));var ee;(function(s){s.Manual="manual",s.TeamsForms="teams_forms",s.TeamsLecture="teams_lecture",s.TestPortal="test_portal"})(ee||(ee={}));var G;(function(s){s.Simple="simple",s.Complex="complex"})(G||(G={}))},"60mZ":function(Pe,R,e){},EKp7:function(Pe,R,e){"use strict";e.r(R);var F=e("T2oS"),X=e("W9HT"),M=e("tJVT"),O=e("q1tI"),d=e("9kvl"),je=e("Ty5D"),ne=e("tMyG"),se=e("nhC9"),ee=e("YRX9"),G=e("k1fw"),s=e("qLMh"),Se=e("miYZ"),W=e("tsqr"),U=e("9og8"),A=e("VMEa"),c=e("Qurx"),me=e("yj/a"),ce=e("F/zT"),ve=e("BiO0"),ge=e("0WSk"),x=e("Gn8c"),y=e("hd5d"),I=e("/y+f"),r=e("nKUr"),f=Object.values(I.b).map(function(ie){return{value:ie,label:Object(r.jsx)(d.a,{id:"CompetencyChallenges.types.".concat(ie)})}}),te=function(g){var v=g.data,E=g.competency_challenge_id,C=g.onAddSuccess,w=g.onUpdateSuccess,P=Object(d.l)(),oe=A.a.useForm(),N=Object(M.a)(oe,1),Z=N[0],H=Number.isNaN(E),le=Object(O.useCallback)(function(){var q=Object(U.a)(Object(s.a)().mark(function Q(k){var J,K,h,S,V;return Object(s.a)().wrap(function($){for(;;)switch($.prev=$.next){case 0:return J=k.name,K=k.type,h=k.is_active,S=h===void 0?!1:h,$.prev=1,$.next=4,Object(ee.a)({name:J,is_active:S,type:K});case 4:if(V=$.sent,V.success){$.next=8;break}return W.b.error(V.message),$.abrupt("return");case 8:W.b.success(P.formatMessage({id:V.message})),d.f.push("/competency-challenges/".concat(V.data.id,"/main")),C==null||C(V),$.next=16;break;case 13:$.prev=13,$.t0=$.catch(1),W.b.error(P.formatMessage({id:"error"}));case 16:case"end":return $.stop()}},Q,null,[[1,13]])}));return function(Q){return q.apply(this,arguments)}}(),[]),B=Object(O.useCallback)(function(){var q=Object(U.a)(Object(s.a)().mark(function Q(k){var J,K,h,S;return Object(s.a)().wrap(function(D){for(;;)switch(D.prev=D.next){case 0:return D.prev=0,J=Z.getFieldsValue(["image_url","image_path"]),K=J.image_url,h=J.image_path,D.next=4,Object(ee.g)(E,Object(G.a)(Object(G.a)({},k),{},{image_url:K,image_path:h}));case 4:if(S=D.sent,S.success){D.next=8;break}return W.b.error(S.message),D.abrupt("return");case 8:W.b.success(P.formatMessage({id:S.message})),w==null||w(S),D.next=15;break;case 12:D.prev=12,D.t0=D.catch(0),W.b.error(P.formatMessage({id:"error"}));case 15:case"end":return D.stop()}},Q,null,[[0,12]])}));return function(Q){return q.apply(this,arguments)}}(),[E]);return Object(r.jsxs)(A.a,{form:Z,initialValues:v!=null?v:{},onFinish:H?le:B,children:[Object(r.jsxs)(A.a.Group,{title:Object(r.jsx)(d.a,{id:"CompetencyChallenges.base"}),children:[Object(r.jsx)(c.a,{width:"md",name:"name",label:Object(r.jsx)(d.a,{id:"name"}),placeholder:P.formatMessage({id:"name"}),required:!0,rules:[{required:!0,message:P.formatMessage({id:"field_required"})}]}),Object(r.jsx)(me.a,{width:"md",name:"type",label:Object(r.jsx)(d.a,{id:"type"}),options:f,required:!0,rules:[{required:!0,message:P.formatMessage({id:"field_required"})}]}),Object(r.jsx)(ce.a,{name:"is_active",label:Object(r.jsx)(d.a,{id:"is_active"})})]}),!H&&Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)(A.a.Group,{title:Object(r.jsx)(d.a,{id:"CompetencyChallenges.additional"}),children:[Object(r.jsx)(A.a.Item,{name:"description",label:Object(r.jsx)(d.a,{id:"description"}),valuePropName:"value",style:{width:440},children:Object(r.jsx)(y.a,{directory:"competency-challenges/".concat(E)})}),Object(r.jsx)(ve.a,{width:"lg",name:"summary",label:Object(r.jsx)(d.a,{id:"summary"})}),Object(r.jsx)(A.a.Item,{name:"authors",label:Object(r.jsx)(d.a,{id:"author"}),style:{width:"100%",maxWidth:440},children:Object(r.jsx)(ge.a,{multiple:!0})})]}),Object(r.jsx)(x.a,{wrapInForm:!1,folder:"/competency-challenges/".concat(E),title:"image",action:"/api/admin/competency-challenges/".concat(E,"?_method=PATCH"),src_name:"image_url",form_name:"image",getUploadedSrcField:function(Q){return Q.file.response.data.image_url},setPath:function(Q){return Z.setFieldsValue(Q)}})]})]})},We=e("PpiC"),ue=e("P2fV"),xe=e("NJEC"),tt=e("5Dmo"),Te=e("3S7+"),z=e("+L6B"),we=e("2/Rp"),at=e("Vpfc"),He=e("G3dp"),Ne=e("/MfK"),fe=e("Hn4i"),Ue=e("nRaC"),Qe=e("5RzL"),Be=e("JifO"),t=function ie(g,v){var E,C=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0;return(E=g.subcategories)!==null&&E!==void 0&&E.length?{title:g.name,value:g.id,disabled:C===0||v.includes(g.id),children:g.subcategories.map(function(w){return ie(w,v,C+1)})}:{title:g.name,value:g.id,disabled:C===0||v.includes(g.id)}},Ae=function(g){var v=g.value,E=g.onChange,C=g.multiple,w=C===void 0?!1:C,P=g.disabledNodes,oe=P===void 0?[]:P,N=Object(O.useState)([]),Z=Object(M.a)(N,2),H=Z[0],le=Z[1];Object(O.useEffect)(function(){Object(Be.c)().then(function(q){q.success&&le(q.data)})},[]);var B=Object(O.useMemo)(function(){return H.map(function(q){return t(q,oe)})},[H,oe]);return Object(r.jsx)(Qe.a,{loading:H.length===0,multiple:w,showSearch:!0,value:v,dropdownStyle:{maxHeight:400,overflow:"auto"},placeholder:Object(r.jsx)(d.a,{id:"select",defaultMessage:"Please select"}),allowClear:!0,treeDefaultExpandAll:!0,onChange:E,treeData:B,disabled:H.length===0})},Ke=["scale_min","category_id"],Ye=[{title:Object(r.jsx)(d.a,{id:"ID"}),dataIndex:"id",editable:!1,render:function(g,v){if(typeof v.id!="string")return"-";var E=v.id.split("-"),C=Object(M.a)(E,2),w=C[0],P=C[1];return w==="new"?"-":P}},{title:Object(r.jsx)(d.a,{id:"min_points"}),dataIndex:"scale_min",valueType:"digit",formItemProps:{rules:[{required:!0,message:Object(r.jsx)(d.a,{id:"field_required"})},{type:"number",min:0,max:100,message:Object(r.jsx)(d.a,{id:"number_between",values:{min:0}})}]},fieldProps:{min:0}},{title:Object(r.jsx)(d.a,{id:"category"}),dataIndex:"category_id",render:function(g,v){return Object(r.jsx)(at.a,{type:"Category",type_id:v.category_id})},formItemProps:{rules:[{required:!0,message:Object(r.jsx)(d.a,{id:"field_required"})}]},renderFormItem:function(g,v,E){var C,w=((C=E.getFieldValue("table"))!==null&&C!==void 0?C:[]).map(function(P){return P.category_id});return Object(r.jsx)(Ae,{disabledNodes:w})}}],qe=function(g){return g.map(function(v){var E=v.id,C=v.scale_min,w=v.category;return{id:"old-".concat(E),scale_min:C,category_id:w.id}})},Je=function(g){var v=g.competency_challenge_id,E=g.scales,C=g.onScaleDelete,w=g.onScaleAdd,P=g.onScaleUpdate,oe=Object(O.useState)([]),N=Object(M.a)(oe,2),Z=N[0],H=N[1],le=Object(d.l)(),B=Object(O.useRef)(),q=Object(O.useRef)(),Q=Object(O.useRef)(),k=Object(O.useMemo)(function(){return qe(E)},[E]),J=Object(O.useMemo)(function(){return[].concat(Ye,[{valueType:"option",title:Object(r.jsx)(d.a,{id:"options"}),render:function(h,S,V,D){return[Object(r.jsx)(Te.a,{title:Object(r.jsx)(d.a,{id:"edit",defaultMessage:"edit"}),children:Object(r.jsx)(we.a,{type:"primary",icon:Object(r.jsx)(He.a,{}),onClick:function(){return D==null?void 0:D.startEditable(S.id)}})},"edit"),Object(r.jsx)(xe.a,{title:Object(r.jsx)(d.a,{id:"deleteQuestion",defaultMessage:"Are you sure to delete this record?"}),onConfirm:Object(U.a)(Object(s.a)().mark(function $(){var pe,u,a,n,i,o,l,m;return Object(s.a)().wrap(function(j){for(;;)switch(j.prev=j.next){case 0:if(typeof S.id=="string"){j.next=2;break}return j.abrupt("return");case 2:if(pe=S.id.split("-"),u=Object(M.a)(pe,2),a=u[0],n=u[1],a!=="new"){j.next=7;break}return l=(i=B.current)===null||i===void 0?void 0:i.getFieldValue("table"),(o=B.current)===null||o===void 0||o.setFieldValue("table",l.filter(function(T){var L=T.id;return L!==S.id})),j.abrupt("return");case 7:return j.next=9,Object(ee.d)(+n);case 9:m=j.sent,m.success&&(C==null||C());case 11:case"end":return j.stop()}},$)})),okText:Object(r.jsx)(d.a,{id:"ok"}),cancelText:Object(r.jsx)(d.a,{id:"cancel"}),children:Object(r.jsx)(Te.a,{title:Object(r.jsx)(d.a,{id:"delete",defaultMessage:"delete"}),children:Object(r.jsx)(we.a,{type:"primary",icon:Object(r.jsx)(Ne.a,{}),danger:!0})})},"delete")]}}])},[]);return Object(r.jsx)(A.a,{formRef:B,initialValues:{table:k},submitter:!1,children:Object(r.jsx)(fe.a,{rowKey:function(h){return h.id},editableFormRef:q,controlled:!0,actionRef:Q,maxLength:10,name:"table",columns:J,recordCreatorProps:{creatorButtonText:Object(r.jsx)(d.a,{id:"CompetencyChallenges.addNewRow"}),disabled:Z.length>0,record:function(h){return{id:"new-".concat(h)}}},editable:{onlyOneLineEditorAlertMessage:le.formatMessage({id:"CompetencyChallenges.onlyOneRowIsEditable"}),onSave:function(){var K=Object(U.a)(Object(s.a)().mark(function S(V,D){var $,pe,u,a,n,i,o,l,m;return Object(s.a)().wrap(function(j){for(;;)switch(j.prev=j.next){case 0:if($=D.scale_min,pe=D.category_id,u=Object(We.a)(D,Ke),typeof u.id=="string"){j.next=3;break}return j.abrupt("return");case 3:if(a=u.id.split("-"),n=Object(M.a)(a,2),i=n[0],o=n[1],i!=="new"){j.next=10;break}return j.next=7,Object(ee.b)({scale_min:$,category_id:pe,competency_challenge_id:v});case 7:return l=j.sent,l.success&&(w==null||w()),j.abrupt("return");case 10:return j.next=12,Object(ee.h)(+o,{scale_min:$,category_id:pe,competency_challenge_id:v});case 12:return m=j.sent,m.success&&(P==null||P()),j.abrupt("return");case 15:case"end":return j.stop()}},S)}));function h(S,V){return K.apply(this,arguments)}return h}(),deletePopconfirmMessage:Object(r.jsx)(d.a,{id:"deleteQuestion"}),actionRender:function(h,S,V){if(typeof h.id!="string")return[];var D=h.id.split("-"),$=Object(M.a)(D,1),pe=$[0];return pe==="new"?[V.save,V.delete]:[V.save,V.cancel]},type:"single",editableKeys:Z,onChange:H}})})},rt=e("/zsF"),Ve=e("PArb"),nt=e("DYRE"),Xe=e("zeV3"),Ze=e("uD7z"),$e=e("FJDo"),ke=e("yioT"),Me=e("qRSf"),_e=function(g){var v=g.data,E=Object(O.useState)(!1),C=Object(M.a)(E,2),w=C[0],P=C[1],oe=Object(O.useState)(),N=Object(M.a)(oe,2),Z=N[0],H=N[1],le=Object(d.l)(),B=Object(O.useCallback)(function(){(v==null?void 0:v.quiz_id)!==void 0&&(P(!0),Object(Me.c)(v==null?void 0:v.quiz_id).then(function(Q){Q.success&&H(Q.data)}).finally(function(){return P(!1)}))},[v==null?void 0:v.quiz_id]),q=Object(O.useCallback)(function(){var Q=Object(U.a)(Object(s.a)().mark(function k(J){return Object(s.a)().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:if((v==null?void 0:v.quiz_id)!==void 0){h.next=2;break}return h.abrupt("return");case 2:P(!0),Object(Me.f)(v==null?void 0:v.quiz_id,Object(G.a)(Object(G.a)({},J),{},{value:"diagnostic-test"})).then(function(S){S.success&&H(S.data)}).finally(function(){return P(!1)});case 4:case"end":return h.stop()}},k)}));return function(k){return Q.apply(this,arguments)}}(),[]);return Object(O.useEffect)(function(){B()},[B]),Z?Object(r.jsxs)("div",{style:{position:"relative",paddingBottom:"64px"},children:[Object(r.jsx)(A.a,{submitter:{render:function(k,J){var K=Object(M.a)(J,2),h=K[0],S=K[1];return Object(r.jsxs)(Xe.b,{style:{position:"absolute",bottom:0,left:0},children:[h,S]})}},initialValues:Z,onFinish:q,children:Object(r.jsxs)(Ze.a,{children:[Object(r.jsx)($e.a,{name:"max_attempts",label:Object(r.jsx)(d.a,{id:"max_attempts"}),tooltip:Object(r.jsx)(d.a,{id:"max_attempts"}),placeholder:le.formatMessage({id:"max_attempts",defaultMessage:"max_attempts"})}),Object(r.jsx)($e.a,{name:"max_execution_time",label:Object(r.jsx)(d.a,{id:"max_execution_time"}),tooltip:Object(r.jsx)(d.a,{id:"max_execution_time"}),placeholder:le.formatMessage({id:"max_execution_time",defaultMessage:"max_execution_time"})})]})}),Object(r.jsx)(Ve.a,{}),Object(r.jsx)(ke.a,{questions:Z.questions,quizId:Z.id,onAdded:B,onEdited:B,onRemoved:B,tableHeader:Object(r.jsx)(d.a,{id:"questions"}),tableLoading:w,questionsCategory:{disabledDepth:1}})]}):Object(r.jsx)(X.a,{})},et=function(){var g,v=Object(O.useState)(!1),E=Object(M.a)(v,2),C=E[0],w=E[1],P=Object(O.useState)(),oe=Object(M.a)(P,2),N=oe[0],Z=oe[1],H=Object(d.l)(),le=Object(je.l)(),B=le.id,q=le.tab,Q=q===void 0?"main":q,k=B==="new",J=Number(B),K=Object(O.useMemo)(function(){return k?H.formatMessage({id:"CompetencyChallenges.new_challenge"}):N!=null&&N.name?N.name:H.formatMessage({id:"menu.Competency challenges"})},[H,N==null?void 0:N.name]),h=Object(O.useCallback)(function(){Number.isNaN(J)||(w(!0),Object(ee.e)(J).then(function(S){S.success&&Z(S.data)}).finally(function(){return w(!1)}))},[J]);return Object(O.useEffect)(function(){h()},[h]),Object(r.jsx)(ne.a,{title:K,header:{breadcrumb:{routes:[{path:"competency-challenges",breadcrumbName:H.formatMessage({id:"menu.Competency challenges"})},{path:String(B),breadcrumbName:K},{path:Q,breadcrumbName:H.formatMessage({id:"CompetencyChallenges.".concat(Q)})}]}},children:Object(r.jsxs)(se.a,{bodyStyle:{padding:"24px"},tabs:{type:"card",cardProps:{loading:C&&Object(r.jsx)(X.a,{})},activeKey:Q,onChange:function(V){d.f.push("/competency-challenges/".concat(B,"/").concat(V))}},children:[Object(r.jsx)(se.a.TabPane,{tab:Object(r.jsx)(d.a,{id:"CompetencyChallenges.main"}),children:Object(r.jsx)(te,{competency_challenge_id:J,data:N,onUpdateSuccess:h})},"main"),Object(r.jsx)(se.a.TabPane,{tab:Object(r.jsx)(d.a,{id:"CompetencyChallenges.scales"}),disabled:k,children:Object(r.jsx)(Je,{competency_challenge_id:J,scales:(g=N==null?void 0:N.scales)!==null&&g!==void 0?g:[],onScaleDelete:h,onScaleAdd:h,onScaleUpdate:h})},"scales"),Object(r.jsx)(se.a.TabPane,{tab:Object(r.jsx)(d.a,{id:"CompetencyChallenges.diagnostic-test"}),disabled:k,children:Object(r.jsx)(_e,{data:N})},"diagnostic-test")]})})},st=R.default=et},YRX9:function(Pe,R,e){"use strict";e.d(R,"f",function(){return d}),e.d(R,"e",function(){return ne}),e.d(R,"a",function(){return ee}),e.d(R,"g",function(){return s}),e.d(R,"c",function(){return W}),e.d(R,"b",function(){return A}),e.d(R,"h",function(){return me}),e.d(R,"d",function(){return ve});var F=e("qLMh"),X=e("k1fw"),M=e("9og8"),O=e("9kvl");function d(x,y){return je.apply(this,arguments)}function je(){return je=Object(M.a)(Object(F.a)().mark(function x(y,I){return Object(F.a)().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.abrupt("return",Object(O.i)("/api/admin/competency-challenges",Object(X.a)({method:"GET",useCache:!1,params:y},I||{})));case 1:case"end":return f.stop()}},x)})),je.apply(this,arguments)}function ne(x,y){return se.apply(this,arguments)}function se(){return se=Object(M.a)(Object(F.a)().mark(function x(y,I){return Object(F.a)().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.abrupt("return",Object(O.i)("/api/admin/competency-challenges/".concat(y),Object(X.a)({method:"GET",useCache:!1},I||{})));case 1:case"end":return f.stop()}},x)})),se.apply(this,arguments)}function ee(x,y){return G.apply(this,arguments)}function G(){return G=Object(M.a)(Object(F.a)().mark(function x(y,I){return Object(F.a)().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.abrupt("return",Object(O.i)("/api/admin/competency-challenges",Object(X.a)({method:"POST",headers:{"Content-Type":"application/json"},data:y},I||{})));case 1:case"end":return f.stop()}},x)})),G.apply(this,arguments)}function s(x,y,I){return Se.apply(this,arguments)}function Se(){return Se=Object(M.a)(Object(F.a)().mark(function x(y,I,r){return Object(F.a)().wrap(function(te){for(;;)switch(te.prev=te.next){case 0:return te.abrupt("return",Object(O.i)("/api/admin/competency-challenges/".concat(y),Object(X.a)({method:"PUT",headers:{"Content-Type":"application/json"},data:I},r||{})));case 1:case"end":return te.stop()}},x)})),Se.apply(this,arguments)}function W(x,y){return U.apply(this,arguments)}function U(){return U=Object(M.a)(Object(F.a)().mark(function x(y,I){return Object(F.a)().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.abrupt("return",Object(O.i)("/api/admin/competency-challenges/".concat(y),Object(X.a)({method:"DELETE"},I||{})));case 1:case"end":return f.stop()}},x)})),U.apply(this,arguments)}function A(x,y){return c.apply(this,arguments)}function c(){return c=Object(M.a)(Object(F.a)().mark(function x(y,I){return Object(F.a)().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.abrupt("return",Object(O.i)("/api/admin/competency-challenges/scales",Object(X.a)({method:"POST",headers:{"Content-Type":"application/json"},data:y},I||{})));case 1:case"end":return f.stop()}},x)})),c.apply(this,arguments)}function me(x,y,I){return ce.apply(this,arguments)}function ce(){return ce=Object(M.a)(Object(F.a)().mark(function x(y,I,r){return Object(F.a)().wrap(function(te){for(;;)switch(te.prev=te.next){case 0:return te.abrupt("return",Object(O.i)("/api/admin/competency-challenges/scales/".concat(y),Object(X.a)({method:"PATCH",headers:{"Content-Type":"application/json"},data:I},r||{})));case 1:case"end":return te.stop()}},x)})),ce.apply(this,arguments)}function ve(x,y){return ge.apply(this,arguments)}function ge(){return ge=Object(M.a)(Object(F.a)().mark(function x(y,I){return Object(F.a)().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.abrupt("return",Object(O.i)("/api/admin/competency-challenges/scales/".concat(y),Object(X.a)({method:"DELETE"},I||{})));case 1:case"end":return f.stop()}},x)})),ge.apply(this,arguments)}},hd5d:function(Pe,R,e){"use strict";var F=e("qLMh"),X=e("9og8"),M=e("q1tI"),O=e.n(M),d=e("acco"),je=e.n(d),ne=e("BAh9"),se=e("vtG9"),ee=e.n(se),G=e("9kvl"),s=e("nKUr"),Se=e.n(s),W=function(c){var me=c.attrs,ce=me.href,ve=ce.split("/").pop();return Object(s.jsx)("p",{children:Object(s.jsx)("a",{rel:"noreferrer",href:ce,target:"_blank",children:ve})})},U=function(c){var me=c.value,ce=c.onChange,ve=c.directory,ge=ve===void 0?"/wysiwyg":ve,x=Object(G.l)();return Object(s.jsx)("div",{className:"form-wysiwyg-markdown",children:Object(s.jsx)(je.a,{excludeBlockMenuItems:["Sketch"],embeds:[{matcher:function(I){return!0},component:W}],uploadImage:function(){var y=Object(X.a)(Object(F.a)().mark(function I(r){var f,te;return Object(F.a)().wrap(function(ue){for(;;)switch(ue.prev=ue.next){case 0:return ue.next=2,Object(ne.e)(r,ge);case 2:if(f=ue.sent,!f.success){ue.next=8;break}if(!r.type.includes("image/")){ue.next=7;break}return te=f.data[0].name.includes("/")?f.data[0].name:"".concat(ge).concat(f.data[0].name),ue.abrupt("return",Object(ne.d)(te,1e3));case 7:return ue.abrupt("return",f.data[0].url);case 8:throw new Error("Error while uploading");case 9:case"end":return ue.stop()}},I)}));return function(I){return y.apply(this,arguments)}}(),defaultValue:me||"",onChange:function(I){return ce&&ce(I())},placeholder:x.formatMessage({id:"wysiwyg_placeholder"})})})};R.a=U},vtG9:function(Pe,R,e){},yioT:function(Pe,R,e){"use strict";e.d(R,"a",function(){return pe});var F=e("tU7J"),X=e("wFql"),M=e("BoS7"),O=e("Sdc0"),d=e("oBTY"),je=e("+L6B"),ne=e("2/Rp"),se=e("bbsP"),ee=e("/wGt"),G=e("qLMh"),s=e("9og8"),Se=e("PpiC"),W=e("tJVT"),U=e("k1fw"),A=e("q1tI"),c=e("9kvl"),me=e("YJCA"),ce=e("wYyv"),ve=e("smpX"),ge=e("eyie"),x=e("w5pM"),y=e("mWMg"),I=e("Vpfc"),r=e("qRSf"),f=e("DYRE"),te=e("zeV3"),We=e("/zsF"),ue=e("PArb"),xe=e("VMEa"),tt=e("yj/a"),Te=e("FJDo"),z=e("/y+f"),we=e("CEpB"),at=e("5Dmo"),He=e("3S7+"),Ne=e("jrin"),fe=e("Qurx"),Ue=e("x1Ii"),Qe=e("tneF"),Be=e("/MfK"),t=e("nKUr"),Ae,Ke=(Ae={},Object(Ne.a)(Ae,z.d.MULTIPLE_CHOICE,[{isCorrect:!1,value:""},{isCorrect:!1,value:""}]),Object(Ne.a)(Ae,z.d.MULTIPLE_CHOICE_WITH_MULTIPLE_RIGHT_ANSWERS,[{value:"",weight:""},{value:"",weight:""}]),Ae),Ye=function(a){var n,i=a.type,o=Object(c.l)();return Object(t.jsxs)(t.Fragment,{children:[Object(t.jsx)(fe.a,{name:"question",label:Object(t.jsx)(c.a,{id:"question"}),rules:[{required:!0,message:Object(t.jsx)(c.a,{id:"field_required"})}],required:!0}),Object(t.jsx)(Ue.b,{name:"answers",creatorButtonProps:{creatorButtonText:o.formatMessage({id:"Questions.addAnswer"})},actionRender:function(){return[]},initialValue:(n=Ke[i])!==null&&n!==void 0?n:[],children:function(m,p,j,T){return Object(t.jsxs)(xe.a.Group,{title:Object(t.jsxs)(t.Fragment,{children:[Object(t.jsx)(c.a,{id:"Questions.answer",values:{ordinalNumber:p+1}}),T>2&&Object(t.jsx)(He.a,{title:o.formatMessage({id:"Questions.deleteAnswer"}),children:Object(t.jsx)(ne.a,{type:"text",icon:Object(t.jsx)(Be.a,{}),onClick:function(){return j.remove(m.name)}})})]}),titleStyle:{width:"100%",display:"flex",justifyContent:"space-between"},children:[i===z.d.MULTIPLE_CHOICE&&Object(t.jsx)(Qe.a,{name:"isCorrect",label:Object(t.jsx)(c.a,{id:"Questions.correctAnswer",defaultMessage:"Is Correct Answer?"}),rules:[function(L){var _=L.getFieldValue;return{validator:function(){var ae,Ee=(ae=_("answers"))!==null&&ae!==void 0?ae:[];return Ee.filter(function(de){return de==null?void 0:de.isCorrect}).length>1?Promise.reject("Only one answer can be correct"):Promise.resolve()},message:Object(t.jsx)(c.a,{id:"Questions.onlyOneAnswerIsCorrect"})}}]}),Object(t.jsx)(fe.a,{name:"value",rules:[{required:!0,message:Object(t.jsx)(c.a,{id:"field_required"})}],label:Object(t.jsx)(c.a,{id:"content",defaultMessage:"Content"})}),i===z.d.MULTIPLE_CHOICE_WITH_MULTIPLE_RIGHT_ANSWERS&&Object(t.jsx)(Te.a,{name:"weight",rules:[{required:!0,message:Object(t.jsx)(c.a,{id:"field_required"})}],fieldProps:{min:-Number.MAX_SAFE_INTEGER,addonAfter:"%"},label:Object(t.jsx)(c.a,{id:"weight",defaultMessage:"Weight"})})]})}})]})},qe=function(){return Object(t.jsxs)(t.Fragment,{children:[Object(t.jsx)(fe.a,{name:"question",label:Object(t.jsx)(c.a,{id:"question"}),rules:[{required:!0,message:Object(t.jsx)(c.a,{id:"field_required"})}],required:!0}),Object(t.jsx)(Qe.a,{name:"isCorrect",label:Object(t.jsx)(c.a,{id:"Questions.correctAnswer"})})]})},Je=[{value:""}],rt=function(){var a=Object(c.l)();return Object(t.jsxs)(t.Fragment,{children:[Object(t.jsx)(fe.a,{name:"question",label:Object(t.jsx)(c.a,{id:"question"}),rules:[{required:!0,message:Object(t.jsx)(c.a,{id:"field_required"})}],required:!0}),Object(t.jsx)(Ue.b,{name:"answers",creatorButtonProps:{creatorButtonText:a.formatMessage({id:"Questions.addAnswer"})},deleteIconProps:{tooltipText:a.formatMessage({id:"Questions.deleteAnswer"})},actionRender:function(i,o,l){var m=Object(W.a)(l,2),p=m[1];return[p]},min:1,initialValue:Je,children:function(i,o){return Object(t.jsx)(fe.a,{name:"value",rules:[{required:!0,message:Object(t.jsx)(c.a,{id:"field_required"})}],label:Object(t.jsx)(c.a,{id:"Questions.answer",values:{ordinalNumber:o+1},defaultMessage:"Answer ".concat(o+1)})})}})]})},Ve=[{firstOfPair:"",secondOfPair:""}],nt=function(){var a=Object(c.l)();return Object(t.jsxs)(t.Fragment,{children:[Object(t.jsx)(fe.a,{name:"question",label:Object(t.jsx)(c.a,{id:"question"}),rules:[{required:!0,message:Object(t.jsx)(c.a,{id:"field_required"})}],required:!0}),Object(t.jsx)(Ue.b,{name:"answers",creatorButtonProps:{creatorButtonText:a.formatMessage({id:"Questions.addMatchingPair",defaultMessage:"Add Matching Pair"})},deleteIconProps:{tooltipText:a.formatMessage({id:"Questions.deletePair"})},actionRender:function(i,o,l){var m=Object(W.a)(l,2),p=m[1];return[p]},min:1,initialValue:Ve,children:function(i,o){return Object(t.jsxs)(xe.a.Group,{direction:"horizontal",align:"baseline",size:"small",spaceProps:{style:{flexWrap:"nowrap"}},title:Object(t.jsx)(c.a,{id:"Questions.pair",values:{ordinalNumber:o+1},defaultMessage:"Pair ".concat(o+1)}),children:[Object(t.jsx)(fe.a,{name:"firstOfPair",rules:[{required:!0,message:Object(t.jsx)(c.a,{id:"field_required"})}]}),Object(t.jsx)(fe.a,{name:"secondOfPair",rules:[{required:!0,message:Object(t.jsx)(c.a,{id:"field_required"})}]})]})}})]})},Xe=function(){return Object(t.jsxs)(t.Fragment,{children:[Object(t.jsx)(fe.a,{name:"question",label:Object(t.jsx)(c.a,{id:"question"}),rules:[{required:!0,message:Object(t.jsx)(c.a,{id:"field_required"})}],required:!0}),Object(t.jsx)(Te.a,{name:"answer",label:Object(t.jsx)(c.a,{id:"answer"}),rules:[{required:!0,message:Object(t.jsx)(c.a,{id:"field_required"})}],required:!0}),Object(t.jsx)(Te.a,{name:"errorMargin",fieldProps:{addonAfter:"+/-"},label:Object(t.jsx)(c.a,{id:"Questions.errorMargin"}),rules:[{required:!0,message:Object(t.jsx)(c.a,{id:"field_required"})}],required:!0})]})},Ze=e("BiO0"),$e=function(){return Object(t.jsx)(Ze.a,{name:"question",label:Object(t.jsx)(c.a,{id:"question"}),rules:[{required:!0,message:Object(t.jsx)(c.a,{id:"field_required"})}],required:!0})},ke=function(a){var n=a.type;if(!n)return null;switch(n){case z.d.MULTIPLE_CHOICE:case z.d.MULTIPLE_CHOICE_WITH_MULTIPLE_RIGHT_ANSWERS:return Object(t.jsx)(Ye,{type:n});case z.d.TRUE_FALSE:return Object(t.jsx)(qe,{});case z.d.SHORT_ANSWERS:return Object(t.jsx)(rt,{});case z.d.MATCHING:return Object(t.jsx)(nt,{});case z.d.NUMERICAL_QUESTION:return Object(t.jsx)(Xe,{});case z.d.ESSAY:case z.d.DESCRIPTION:return Object(t.jsx)($e,{})}return Object(t.jsxs)("pre",{children:["Unsupported type ",n]})},Me=e("rAM+"),_e=function(a){var n=a.question,i=a.answers;if(i.length===0)return"".concat(n,"{}");var o="".concat(n,"{"),l=Object(Me.a)(i),m;try{for(l.s();!(m=l.n()).done;){var p=m.value,j=p.isCorrect,T=p.value,L=j?"=":"~";o+="".concat(L).concat(T)}}catch(_){l.e(_)}finally{l.f()}return o+="}",o.trim()},et=function(a){var n=a.question,i=a.answers;if(i.length==0)return"".concat(n,"{}");var o="".concat(n,"{"),l=Object(Me.a)(i),m;try{for(l.s();!(m=l.n()).done;){var p=m.value,j=p.value,T=p.weight;o+="~%".concat(T,"%").concat(j)}}catch(L){l.e(L)}finally{l.f()}return o+="}",o.trim()},st=function(a){var n=a.question,i=a.isCorrect;return"".concat(n,"{").concat(i?"T":"F","}")},ie=function(a){var n=a.question,i=a.answers;if(i.length===0)return"".concat(n,"{}");var o="".concat(n,"{"),l=Object(Me.a)(i),m;try{for(l.s();!(m=l.n()).done;){var p=m.value,j=p.value;o+="=".concat(j)}}catch(T){l.e(T)}finally{l.f()}return o+="}",o.trim()},g=function(a){var n=a.question,i=a.answers;if(i.length===0)return"".concat(n,"{}");var o="".concat(n,"{"),l=Object(Me.a)(i),m;try{for(l.s();!(m=l.n()).done;){var p=m.value,j=p.firstOfPair,T=p.secondOfPair;o+="=".concat(j,"->").concat(T)}}catch(L){l.e(L)}finally{l.f()}return o+="}",o.trim()},v=function(a){var n=a.question,i=a.answer,o=a.errorMargin;return"".concat(n,"{#").concat(i,":").concat(o,"}")},E=function(a){var n=a.question;return"".concat(n,"{}")},C=function(a){var n=a.question;return n},w=function(a){switch(a.type){case z.d.MULTIPLE_CHOICE:return _e(a);case z.d.MULTIPLE_CHOICE_WITH_MULTIPLE_RIGHT_ANSWERS:return et(a);case z.d.TRUE_FALSE:return st(a);case z.d.SHORT_ANSWERS:return ie(a);case z.d.MATCHING:return g(a);case z.d.NUMERICAL_QUESTION:return v(a);case z.d.ESSAY:return E(a);case z.d.DESCRIPTION:return C(a);default:throw new Error("Unsupported type: ".concat(a.type))}},P=function(a,n){var i=n.type,o=n.score,l=n.category_id,m=a==null?void 0:a.stem.text,p=a.choices.every(function(L){var _=L.weight;return _===null});if(p){var j=a.choices.map(function(L){var _=L.isCorrect,Ce=L.text;return{isCorrect:_,value:Ce.text}});return{type:i,score:o,category_id:l,question:m,answers:j}}var T=a.choices.reduce(function(L,_){var Ce=_.weight,ae=_.text;return Ce!==null?[].concat(Object(d.a)(L),[{weight:Ce,value:ae.text}]):L},[]);return{type:i,score:o,category_id:l,question:m,answers:T}},oe=function(a,n){var i=n.type,o=n.score,l=n.category_id,m=a==null?void 0:a.stem.text,p=a.isTrue;return{type:i,score:o,category_id:l,question:m,isCorrect:p}},N=function(a,n){var i=n.type,o=n.score,l=n.category_id,m=a==null?void 0:a.stem.text,p=a.choices.map(function(j){var T=j.text;return{value:T.text}});return{type:i,score:o,category_id:l,question:m,answers:p}},Z=function(a,n){var i=n.type,o=n.score,l=n.category_id,m=a==null?void 0:a.stem.text,p=a.matchPairs.map(function(j){var T=j.subquestion,L=j.subanswer;return{firstOfPair:T.text,secondOfPair:L}});return{type:i,score:o,category_id:l,question:m,answers:p}},H=function(a,n){var i=n.type,o=n.score,l=n.category_id,m=a==null?void 0:a.stem.text;if(Array.isArray(a==null?void 0:a.choices))throw new Error("Unsupported choices type: array");var p=a==null?void 0:a.choices.number,j=a==null?void 0:a.choices.range;if(p===void 0||j===void 0)throw new Error("Value undefined - answer: ".concat(p," errorMargin: ").concat(j));return{type:i,score:o,category_id:l,question:m,answer:p,errorMargin:j}},le=function(a,n){var i=n.type,o=n.score,l=n.category_id,m=a==null?void 0:a.stem.text;return{type:i,score:o,category_id:l,question:m}};function B(u){if(!!u){var a=Object(ve.parse)(u.value),n=Object(W.a)(a,1),i=n[0];switch(i.type){case"MC":return P(i,u);case"TF":return oe(i,u);case"Short":return N(i,u);case"Matching":return Z(i,u);case"Numerical":return H(i,u);case"Description":case"Essay":return le(i,u);default:throw new Error("Unsupported type: ".concat(i==null?void 0:i.type))}}}var q=["type","score","category"],Q=Object.values(z.d).reduce(function(u,a){return a?[].concat(Object(d.a)(u),[{value:a,label:Object(t.jsx)(c.a,{id:"gift_type.".concat(a)})}]):u},[]),k=function(a){var n=a.onSubmit,i=a.values,o=a.categoryProps,l=o===void 0?!1:o,m=Object(c.l)(),p=xe.a.useForm(),j=Object(W.a)(p,1),T=j[0],L=xe.a.useWatch("type",T),_=Object(A.useMemo)(function(){return B(i)},[i]),Ce=Object(A.useCallback)(function(){var ae=Object(s.a)(Object(G.a)().mark(function Ee(de){var Fe,Le,ze,De;return Object(G.a)().wrap(function(be){for(;;)switch(be.prev=be.next){case 0:return Fe=w(de),Le=de.score,ze=de.category_id,be.next=4,n({value:Fe,score:Le,category_id:ze});case 4:if(De=be.sent,De){be.next=7;break}return be.abrupt("return");case 7:T.resetFields();case 8:case"end":return be.stop()}},Ee)}));return function(Ee){return ae.apply(this,arguments)}}(),[]);return Object(A.useEffect)(function(){T.resetFields()},[_]),Object(A.useEffect)(function(){if(L){var ae=T.getFieldsValue(),Ee=Object.keys(ae).filter(function(de){return!q.includes(de)});T.resetFields(Ee)}},[L]),Object(t.jsxs)(te.b,{direction:"vertical",style:{display:"flex"},children:[Object(t.jsx)(ue.a,{children:Object(t.jsx)(c.a,{id:_?"Questions.edit":"addNewQuestion"})}),Object(t.jsxs)(xe.a,{layout:"horizontal",form:T,onFinish:Ce,initialValues:_,children:[Object(t.jsx)(tt.a,{name:"type",placeholder:m.formatMessage({id:"selectNewQuestionType",defaultMessage:"Select new question type"}),label:Object(t.jsx)(c.a,{id:"type",defaultMessage:"Type:"}),options:Q,rules:[{required:!0,message:Object(t.jsx)(c.a,{id:"field_required"})}],required:!0}),Object(t.jsx)(ke,{type:L}),Object(t.jsx)(Te.a,{name:"score",label:Object(t.jsx)(c.a,{id:"Questions.score",defaultMessage:"Score"}),rules:[{required:!0,message:Object(t.jsx)(c.a,{id:"field_required"})}]}),l&&Object(t.jsx)(xe.a.Item,{name:"category_id",label:Object(t.jsx)(c.a,{id:"category",defaultMessage:"Category"}),rules:[{required:!0,message:Object(t.jsx)(c.a,{id:"field_required"})}],required:!0,children:Object(t.jsx)(we.a,Object(U.a)({},typeof l=="object"?l:{}))})]})]})},J=e("60mZ"),K=["className","style"],h=Object(me.c)(function(){return Object(t.jsx)(ge.a,{style:{cursor:"grab",color:"#999"}})}),S=Object(me.b)(function(u){return Object(t.jsx)("tr",Object(U.a)({},u))}),V=Object(me.a)(function(u){return Object(t.jsx)("tbody",Object(U.a)({},u))}),D=[{title:Object(t.jsx)(c.a,{id:"sort",defaultMessage:"sort"}),dataIndex:"id",width:60,className:"drag-visible",render:function(){return Object(t.jsx)(h,{})}},{title:Object(t.jsx)(c.a,{id:"type",defaultMessage:"Type"}),dataIndex:"type",hideInForm:!0,hideInSearch:!0,hideInSetting:!0,render:function(a,n){return Object(t.jsx)(c.a,{id:"gift_type.".concat(n.type)})}},{title:Object(t.jsx)(c.a,{id:"question",defaultMessage:"Question"}),dataIndex:"question",hideInForm:!0,hideInSearch:!0,hideInSetting:!0,render:function(a,n){var i=Object(ve.parse)(n.value);return i!=null&&i[0]&&"stem"in i[0]?i[0].stem.text:"question"}}],$={title:Object(t.jsx)(c.a,{id:"category",defaultMessage:"Category"}),dataIndex:"category_id",hideInForm:!0,hideInSearch:!0,hideInSetting:!0,render:function(a,n){return typeof n.category_id=="number"?Object(t.jsx)(I.a,{type:"Category",type_id:n.category_id}):"-"}},pe=function(a){var n=a.questions,i=a.onAdded,o=a.onRemoved,l=a.onEdited,m=a.quizId,p=a.tableLoading,j=a.tableHeader,T=a.questionsCategory,L=Object(A.useState)(!1),_=Object(W.a)(L,2),Ce=_[0],ae=_[1],Ee=Object(A.useState)(!1),de=Object(W.a)(Ee,2),Fe=de[0],Le=de[1],ze=Object(A.useState)(),De=Object(W.a)(ze,2),he=De[0],be=De[1],lt=Object(A.useState)(!1),it=Object(W.a)(lt,2),ut=it[0],dt=it[1],jt=Object(A.useState)(n),ct=Object(W.a)(jt,2),Ge=ct[0],ot=ct[1],mt=Object(A.useRef)();Object(A.useEffect)(function(){var re;(re=mt.current)===null||re===void 0||re.reload(),ot(n)},[n]);var vt=function(Y){var ye=Y.oldIndex,Oe=Y.newIndex;if(ye!==Oe){var Ie=Object(ce.a)(Ge.slice(),ye,Oe).filter(Boolean).map(function(b,Re){return Object(U.a)(Object(U.a)({},b),{},{order:Re})});Ie.forEach(function(b,Re){b.id!==Ge[Re].id&&Object(r.g)(b.id,Object(U.a)(Object(U.a)({},b),{},{order:Re+1,topic_gift_quiz_id:m}))}),ot(Ie)}},ft=function(Y){return Object(t.jsx)(V,Object(U.a)({useDragHandle:!0,disableAutoscroll:!0,helperClass:"row-dragging",onSortEnd:vt},Y))},bt=function(Y){var ye=Y.className,Oe=Y.style,Ie=Object(Se.a)(Y,K),b=Ge.findIndex(function(Re){return Re.id===Ie["data-row-key"]});return Object(t.jsx)(S,Object(U.a)({index:b},Ie))},Ot=Object(A.useCallback)(function(){var re=Object(s.a)(Object(G.a)().mark(function Y(ye){var Oe;return Object(G.a)().wrap(function(b){for(;;)switch(b.prev=b.next){case 0:return b.prev=0,ae(!0),b.next=4,Object(r.a)(Object(U.a)({topic_gift_quiz_id:m},ye));case 4:return Oe=b.sent,Le(!1),i==null||i(),b.abrupt("return",Oe.success);case 10:return b.prev=10,b.t0=b.catch(0),console.log(b.t0),b.abrupt("return",!1);case 14:return b.prev=14,ae(!1),b.finish(14);case 17:case"end":return b.stop()}},Y,null,[[0,10,14,17]])}));return function(Y){return re.apply(this,arguments)}}(),[Fe,m]),gt=Object(A.useCallback)(function(){var re=Object(s.a)(Object(G.a)().mark(function Y(ye){var Oe;return Object(G.a)().wrap(function(b){for(;;)switch(b.prev=b.next){case 0:if((he==null?void 0:he.id)!==void 0){b.next=2;break}return b.abrupt("return",!1);case 2:return b.prev=2,ae(!0),b.next=6,Object(r.g)(he.id,Object(U.a)({topic_gift_quiz_id:m},ye));case 6:return Oe=b.sent,be(void 0),l==null||l(),b.abrupt("return",Oe.success);case 12:return b.prev=12,b.t0=b.catch(2),console.log(b.t0),b.abrupt("return",!1);case 16:return b.prev=16,ae(!1),b.finish(16);case 19:case"end":return b.stop()}},Y,null,[[2,12,16,19]])}));return function(Y){return re.apply(this,arguments)}}(),[he==null?void 0:he.id,m]);return Object(t.jsxs)(t.Fragment,{children:[Object(t.jsx)(ee.a,{open:Fe,onClose:function(){return Le(!1)},children:Object(t.jsx)(k,{onSubmit:Ot,categoryProps:T})}),Object(t.jsx)(ee.a,{open:!!he,onClose:function(){return be(void 0)},children:Object(t.jsx)(k,{onSubmit:gt,categoryProps:T,values:he})}),Object(t.jsx)(y.a,{search:!1,cardProps:{bodyStyle:{padding:0}},loading:p,headerTitle:j,toolbar:{settings:[]},toolBarRender:function(){return[Object(t.jsxs)(ne.a,{icon:Object(t.jsx)(x.a,{}),type:"primary",onClick:function(){return Le(!0)},children:[" ",Object(t.jsx)(c.a,{id:"addNewQuestion",defaultMessage:"Add new question"})]},"add")]},columns:[].concat(D,Object(d.a)(T?[$]:[]),[{title:Object(t.jsx)(c.a,{id:"actions",defaultMessage:"Actions"}),dataIndex:"address",valueType:"option",render:function(Y,ye){return[Object(t.jsx)(ne.a,{size:"small",type:"primary",onClick:function(){be(ye)},children:Object(t.jsx)(c.a,{id:"Questions.edit",defaultMessage:"Edit Question"})},"edit"),Object(t.jsx)(ne.a,{loading:Ce,size:"small",danger:!0,onClick:function(){ae(!0),Object(r.b)(ye.id).then(function(){o&&o()}).finally(function(){ae(!1)})},children:Object(t.jsx)(c.a,{id:"Questions.delete",defaultMessage:"Delete Question"})},"delete")]}}]),rowKey:function(Y){return Y.id},pagination:!1,dataSource:Ge,components:{body:{wrapper:ft,row:bt}}}),Object(t.jsxs)(X.a,{style:{marginTop:"3em"},children:["Debug GIFT: ",Object(t.jsx)(O.a,{checked:ut,onChange:function(Y){return dt(Y)}})]})]})}}}]);

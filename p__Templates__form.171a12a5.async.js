(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{"/y+f":function(he,h,t){"use strict";t.d(h,"f",function(){return g}),t.d(h,"d",function(){return N}),t.d(h,"e",function(){return fe}),t.d(h,"c",function(){return pe}),t.d(h,"a",function(){return Y}),t.d(h,"b",function(){return Oe});var g;(function(a){a.Unselected="",a.RichText="EscolaLms\\TopicTypes\\Models\\TopicContent\\RichText",a.OEmbed="EscolaLms\\TopicTypes\\Models\\TopicContent\\OEmbed",a.Audio="EscolaLms\\TopicTypes\\Models\\TopicContent\\Audio",a.Video="EscolaLms\\TopicTypes\\Models\\TopicContent\\Video",a.H5P="EscolaLms\\TopicTypes\\Models\\TopicContent\\H5P",a.Image="EscolaLms\\TopicTypes\\Models\\TopicContent\\Image",a.PDF="EscolaLms\\TopicTypes\\Models\\TopicContent\\PDF",a.SCORM="EscolaLms\\TopicTypes\\Models\\TopicContent\\ScormSco",a.Project="EscolaLms\\TopicTypeProject\\Models\\Project",a.GiftQuiz="EscolaLms\\TopicTypeGift\\Models\\GiftQuiz"})(g||(g={}));var M;(function(a){a.OrderPaid="EscolaLms\\Cart\\Events\\OrderPaid",a.UserLogged="EscolaLms\\Auth\\Events\\UserLogged"})(M||(M={}));var H;(function(a){a.draft="draft",a.published="published",a.archived="archived"})(H||(H={}));var N;(function(a){a.email="EscolaLms\\TemplatesEmail\\Core\\EmailChannel",a.pdf="EscolaLms\\TemplatesPdf\\Core\\PdfChannel",a.sms="EscolaLms\\TemplatesSms\\Core\\SmsChannel"})(N||(N={}));var fe;(function(a){a.ManuallyTriggeredEvent="EscolaLms\\Templates\\Events\\ManuallyTriggeredEvent"})(fe||(fe={}));var re;(function(a){a.cart_fixed="cart_fixed",a.cart_percent="cart_percent",a.product_fixed="product_fixed",a.product_percent="product_percent"})(re||(re={}));var pe;(function(a){a.MULTIPLE_CHOICE="multiple_choice",a.MULTIPLE_CHOICE_WITH_MULTIPLE_RIGHT_ANSWERS="multiple_choice_with_multiple_right_answers",a.TRUE_FALSE="true_false",a.SHORT_ANSWERS="short_answers",a.MATCHING="matching",a.NUMERICAL_QUESTION="numerical_question",a.ESSAY="essay",a.DESCRIPTION="description"})(pe||(pe={}));var Y;(function(a){a.PRESENT="present",a.ABSENT="absent"})(Y||(Y={}));var Oe;(function(a){a.Manual="manual",a.TeamsForms="teams_forms",a.TeamsLecture="teams_lecture",a.TestPortal="test_portal"})(Oe||(Oe={}))},"B0O/":function(he,h,t){"use strict";var g=t("Mwp2"),M=t("VXEj"),H=t("+L6B"),N=t("2/Rp"),fe=t("tU7J"),re=t("wFql"),pe=t("/zsF"),Y=t("PArb"),Oe=t("T2oS"),a=t("W9HT"),Pe=t("fOrg"),Z=t("+KLJ"),w=t("tJVT"),A=t("q1tI"),O=t("9kvl"),S=t("qLMh"),I=t("k1fw"),le=t("9og8");function xe(X,C){return ie.apply(this,arguments)}function ie(){return ie=Object(le.a)(Object(S.a)().mark(function X(C,z){return Object(S.a)().wrap(function(T){for(;;)switch(T.prev=T.next){case 0:return T.abrupt("return",Object(O.i)("/api/admin/pdfs",Object(I.a)({params:Object(I.a)({},C),method:"GET"},z||{})));case 1:case"end":return T.stop()}},X)})),ie.apply(this,arguments)}function b(X,C){return B.apply(this,arguments)}function B(){return B=Object(le.a)(Object(S.a)().mark(function X(C,z){return Object(S.a)().wrap(function(T){for(;;)switch(T.prev=T.next){case 0:return T.abrupt("return",Object(O.i)("/api/pdfs/".concat(C),Object(I.a)({method:"GET"},z||{})));case 1:case"end":return T.stop()}},X)})),B.apply(this,arguments)}function o(X,C){return j.apply(this,arguments)}function j(){return j=Object(le.a)(Object(S.a)().mark(function X(C,z){return Object(S.a)().wrap(function(T){for(;;)switch(T.prev=T.next){case 0:return T.abrupt("return",Object(O.i)("/api/pdfs/generate/".concat(C),Object(I.a)({method:"GET"},z||{})));case 1:case"end":return T.stop()}},X)})),j.apply(this,arguments)}var y=t("oBTY"),R=t("Iab2"),m=t("xOOu"),x=t.n(m),P=t("nKUr"),Me=function(C){var z=C.pdfIds,q=C.onProgress,T=C.onFinished,ue=C.filename,de=ue===void 0?"package.zip":ue,ne=Object(A.useState)([]),ce=Object(w.a)(ne,2),je=ce[0],me=ce[1],ve=Object(A.useCallback)(function(_){var ee=new x.a;_.forEach(function($,Q){return ee.file("".concat(z[Q],".pdf"),$)}),ee.generateAsync({type:"blob"}).then(function($){Object(R.saveAs)($,de),T&&T()})},[je,de]);return Object(A.useEffect)(function(){z.forEach(function(_){var ee=fetch("".concat(window.REACT_APP_API_URL||"https://api-stage.escolalms.com","/api/pdfs/generate/").concat(_),{headers:{Authorization:"Bearer ".concat(localStorage.getItem("TOKEN"))}});ee.then(function($){return $.blob()}).then(function($){$&&$ instanceof Blob&&me(function(Q){var be=(Q.length+1)/z.length;return q&&q(be),be>=1&&ve([].concat(Object(y.a)(Q),[$])),[].concat(Object(y.a)(Q),[$])})})})},[z]),Object(P.jsxs)("p",{children:["Progress ",je.length," / ",z.length]})},Te=Me,Ie=t("Vpfc"),ge=t("dF/Y"),u=t("PpiC"),e=["url","filename","children"],Ae=function(C){var z=C.url,q=C.filename,T=C.children,ue=Object(u.a)(C,e),de=Object(A.useState)(!1),ne=Object(w.a)(de,2),ce=ne[0],je=ne[1],me=Object(A.useCallback)(Object(le.a)(Object(S.a)().mark(function ve(){var _,ee,$,Q;return Object(S.a)().wrap(function(k){for(;;)switch(k.prev=k.next){case 0:return je(!0),k.next=3,fetch("".concat(window.REACT_APP_API_URL||"https://api-stage.escolalms.com").concat(z),{headers:{Authorization:"Bearer ".concat(localStorage.getItem("TOKEN"))}});case 3:return _=k.sent,ee=document.createElement("a"),k.next=7,_.blob();case 7:$=k.sent,Q=window.URL.createObjectURL($),ee.download=q,ee.href=Q,ee.click(),je(!1);case 13:case"end":return k.stop()}},ve)})),[z,q]);return Object(P.jsx)(N.a,Object(I.a)(Object(I.a)({loading:ce},ue),{},{onClick:me,children:T}))},Fe=Ae,Le=function(C){var z=C.user_id,q=C.template_id,T=C.title,ue=Object(A.useState)({state:"initial"}),de=Object(w.a)(ue,2),ne=de[0],ce=de[1],je=Object(A.useState)({state:"initial"}),me=Object(w.a)(je,2),ve=me[0],_=me[1],ee=Object(A.useState)(!1),$=Object(w.a)(ee,2),Q=$[0],be=$[1];Object(A.useEffect)(function(){ce({state:"loading"});var oe=new AbortController;return xe({user_id:z,template_id:q},{signal:oe.signal}).then(function(U){U&&U.success?ce({state:"loaded",list:U.data}):U&&!U.success&&ce({state:"error",error:U.message})}).catch(function(U){return ce({state:"error",error:U.toString()})}),function(){oe.abort()}},[]);var k=Object(A.useCallback)(function(oe){_({state:"loading"}),b(oe).then(function(U){U.success?_({state:"loaded",data:U.data.content}):_({state:"initial"})})},[]);return ne.state==="error"?Object(P.jsx)(Z.a,{message:"Error Text",type:"error"}):ne.state==="loading"||ne.state==="initial"?Object(P.jsx)(a.a,{}):Object(P.jsxs)(A.Fragment,{children:[Object(P.jsx)(Y.a,{}),Q&&Object(P.jsx)(Te,{pdfIds:ne.list.map(function(oe){return oe.id}),onFinished:function(){return be(!1)}}),Object(P.jsx)(M.b,{size:"small",itemLayout:"horizontal",dataSource:ne.list,header:Object(P.jsxs)("div",{children:[Object(P.jsx)(O.a,{id:"template"})," ",T&&Object(P.jsx)(re.a.Text,{strong:!0,children:T}),". ",Object(P.jsx)(O.a,{id:"generated_pdfs",defaultMessage:"Generated PDFs"})," ",Object(P.jsx)(N.a,{loading:Q,type:"primary",onClick:function(){return be(!0)},icon:Object(P.jsx)(ge.a,{}),size:"small",children:Object(P.jsx)(O.a,{id:"download_all",defaultMessage:"Download all PDFs"})})]}),renderItem:function(U){return Object(P.jsxs)(M.b.Item,{actions:[Object(P.jsx)(Fe,{url:"/api/pdfs/generate/".concat(U.id),filename:"generated-".concat(U.id,".pdf"),size:"small",icon:Object(P.jsx)(ge.a,{}),type:"primary",onClick:function(){return k(U.id)},loading:ve.state==="loading",children:Object(P.jsx)(O.a,{id:"download_pdf",defaultMessage:"Download PDFs"})},"download")],children:[U.title," ",Object(P.jsx)(Ie.a,{type:"App\\Models\\User",type_id:U.user_id})]})}})]})},Ee=h.a=Le},BOG6:function(he,h,t){"use strict";t.r(h);var g=t("DYRE"),M=t("zeV3"),H=t("tU7J"),N=t("wFql"),fe=t("+BJd"),re=t("mr32"),pe=t("/zsF"),Y=t("PArb"),Oe=t("T2oS"),a=t("W9HT"),Pe=t("miYZ"),Z=t("tsqr"),w=t("qLMh"),A=t("9og8"),O=t("k1fw"),S=t("jrin"),I=t("tJVT"),le=t("oBTY"),xe=t("fu2T"),ie=t("gK9i"),b=t("q1tI"),B=t.n(b),o=t("VMEa"),j=t("Qurx"),y=t("yj/a"),R=t("tneF"),m=t("nhC9"),x=t("rWUb"),P=t("tMyG"),Me=t("fOrg"),Te=t("+KLJ"),Ie=t("+L6B"),ge=t("2/Rp"),u=t("9kvl"),e=t("nKUr"),Ae=function(i){var r=i.disabled,n=r===void 0?!1:r,f=i.id,V=i.onPreviewData,F=Object(b.useState)({state:"ready"}),p=Object(I.a)(F,2),d=p[0],l=p[1],c=Object(b.useCallback)(function(){l({state:"loading"}),Object(x.c)(f).then(function(s){s.success?(V&&V(s.data),s.data.sent&&s.data.to?l({state:"loaded",data:s.data,message:"email sent to ".concat(s.data.to)}):s.data.url?l({state:"loaded",data:s.data,message:Object(e.jsxs)(B.a.Fragment,{children:[Object(e.jsx)(u.a,{id:"download"})," ",Object(e.jsx)("a",{target:"_blank",href:s.data.url,rel:"noreferrer",children:s.data.filename})]})}):l({state:"loaded",data:s.data,message:s.message})):l({state:"error",error:s.message})}).catch(function(){l({state:"error",error:"error"})})},[f]);return Object(e.jsxs)(B.a.Fragment,{children:[Object(e.jsx)(ge.a,{type:"primary",loading:d.state==="loading",disabled:n,onClick:c,children:Object(e.jsx)(u.a,{id:"preview"})}),d.state==="loaded"&&Object(e.jsx)(Te.a,{message:d.message,type:"success",closable:!0,onClose:function(){return l({state:"ready"})}}),d.state==="error"&&Object(e.jsx)(Te.a,{message:d.error,type:"error",closable:!0,onClose:function(){return l({state:"ready"})}})]})},Fe=Ae,Le=t("Ty5D"),Ee=t("BiO0"),X=t("PGov"),C=t("D6/r"),z=t("wbUo"),q=function(i){return Object(e.jsxs)("div",{className:"".concat(i.entity.required&&"required"),children:["@","".concat(i.entity.name)]})},T=function(i){var r=i.requiredVariables,n=i.variables,f=i.onChange,V=i.value,F=i.error,p=i.styles,d=n.map(function(l){return{name:l.substring(1),required:r.includes(l)}});return Object(e.jsxs)(B.a.Fragment,{children:[Object(e.jsx)(X.a,{style:p,className:"ant-input pro-field pro-field-lg rta__textarea_wide ".concat(F.length&&"error"),onChange:function(c){return f(c.target.value)},loadingComponent:function(){return Object(e.jsx)(u.a,{id:"loading"})},minChar:0,value:V,itemStyle:{fontSize:"16px"},trigger:{"@":{dataProvider:function(c){return d.filter(function(s){return s.name.startsWith(c)})},component:q,output:function(c,s){return"".concat(s).concat(c.name)}}}}),Object(e.jsx)("div",{role:"alert",className:"ant-form-item-explain-error",children:F})]})},ue=T,de=t("UF3W"),ne=t("bXNp"),ce=t("ctOJ"),je=function(i){switch(i.toLocaleLowerCase()){case"varusername":return"John Doe";case"varcoursetitle":return"How to be an LMS Expert";case"varappname":return"Wellms Headless LMS";default:return"Lorem Ipsum"}},me=function(i,r,n){var f=Math.max.apply(null,i.parameters?[i.parameters.map(function(p){return p.id}),i.docElements.map(function(p){return p.id})].flat():[1])+1,V=i.parameters?i.parameters.reduce(function(p,d){return Object(O.a)(Object(O.a)({},p),{},Object(S.a)({},d.name,d))},{}):{},F=r.map(function(p){return p.replace("@","")}).reduce(function(p,d,l){return p[d]?Object(O.a)(Object(O.a)({},p),{},Object(S.a)({},d,Object(O.a)(Object(O.a)({},p[d]),{},{id:f+l}))):Object(O.a)(Object(O.a)({},p),{},Object(S.a)({},d,{id:f+l,name:d,type:"string",arrayItemType:"string",eval:!1,nullable:!n.includes(d),pattern:"",expression:"",showOnlyNameType:!1,testData:je(d)}))},V);return Object.assign({},i,{parameters:Object.values(F)})},ve=function(i){var r=i.onTemplateSaved,n=i.reportBroTemplate,f=n===void 0?null:n,V=i.field,F=i.variables,p=i.onTemplateUpdated,d=Object(b.useRef)(null),l=function(s){var L=s.nativeEvent.target.tagName.toLowerCase();switch(L){case"span":case"button":s.nativeEvent.stopPropagation(),s.nativeEvent.preventDefault();default:return}};return Object(b.useEffect)(function(){if(d.current){var c=new de.ReportBro(d.current,{enableSpreadsheet:!1,fonts:[{name:"Open Sans",value:"Open Sans"}],defaultFont:"Open Sans",reportServerUrl:"".concat(window.REACT_APP_API_URL||"https://api-stage.escolalms.com","/api/pdfs/reportbro/report/run"),saveCallback:function(){r(c.getReport())},cmdExecutedCallback:function(){p&&p(c.getReport())}});f&&c.load(me(f,F,V.required_variables))}},[d]),Object(e.jsx)("div",{ref:d,className:"pdf-editor",onClick:l,children:"pdf editor"})},_=ve,ee=t("JAl+"),$=function(i){var r=i.name,n=i.field,f=i.variables,V=f===void 0?[]:f,F=Object(b.useCallback)(function(l){if(l.length)return Object(e.jsx)(M.b,{children:Object(e.jsxs)(N.a,{children:[Object(e.jsx)(u.a,{id:"templates.required_variables"}),":"," ",l.map(function(c){return Object(e.jsx)(re.a,{color:"red",children:c},c)})]})})},[n,r]),p=Object(b.useCallback)(function(l,c){return l&&c.every(function(s){return l.includes(s)})?Promise.resolve():Promise.reject(new Error("No required variable used"))},[n,r]),d=Object(b.useCallback)(function(){if(!n.readonly)switch(n.type){case"text":case"url":return Object(e.jsxs)(B.a.Fragment,{children:[Object(e.jsx)("label",{children:Object(e.jsx)(u.a,{id:r})}),Object(e.jsx)(o.a.Item,{shouldUpdate:!0,children:function(c){return Object(e.jsx)(ue,{requiredVariables:n.required_variables,variables:V,value:c.getFieldValue(r),onChange:function(L){return c.setFieldsValue(Object(S.a)({},r,L))},error:c.getFieldError(r),styles:{width:"100%",height:"100px"}})}}),Object(e.jsx)(j.a,{name:r,shouldUpdate:!0,hidden:!0,rules:n.readonly?void 0:[{required:n.required,message:Object(e.jsx)(u.a,{id:"templates.this_required"})},{validator:function(){var l=Object(A.a)(Object(w.a)().mark(function s(L,E){return Object(w.a)().wrap(function(J){for(;;)switch(J.prev=J.next){case 0:return J.abrupt("return",p(E,n.required_variables));case 1:case"end":return J.stop()}},s)}));function c(s,L){return l.apply(this,arguments)}return c}()}]}),F(n.required_variables)]});case"fabric.js":return Object(e.jsxs)(B.a.Fragment,{children:[Object(e.jsx)(o.a.Item,{shouldUpdate:!0,children:function(c){return Object(e.jsx)(_,{reportBroTemplate:c.getFieldValue(r)&&JSON.parse(c.getFieldValue(r)),variables:V,field:n,onTemplateSaved:function(L){c.setFieldsValue(Object(S.a)({},r,JSON.stringify(L))),c.submit()},onTemplateUpdated:function(L){c.setFieldsValue(Object(S.a)({},r,JSON.stringify(L)))}})}}),Object(e.jsx)(Ee.a,{name:r,shouldUpdate:!0,width:"lg",hidden:!0})]});case"html":return Object(e.jsxs)(B.a.Fragment,{children:[Object(e.jsx)(Ee.a,{readonly:n.readonly,shouldUpdate:!0,width:"lg",label:Object(e.jsx)(u.a,{id:r}),name:r,tooltip:Object(e.jsx)(u.a,{id:"templates.html_tooltip"}),rules:n.readonly?void 0:[{required:n.required,message:Object(e.jsx)(u.a,{id:"templates.this_required"})},{validator:function(){var l=Object(A.a)(Object(w.a)().mark(function s(L,E){return Object(w.a)().wrap(function(J){for(;;)switch(J.prev=J.next){case 0:return J.abrupt("return",p(E,n.required_variables));case 1:case"end":return J.stop()}},s)}));function c(s,L){return l.apply(this,arguments)}return c}()}]}),F(n.required_variables)]});case"mjml":return Object(e.jsxs)(B.a.Fragment,{children:[Object(e.jsxs)("p",{children:[Object(e.jsx)(u.a,{id:"templates.to_create_template"})," ",Object(e.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://mjml.io/try-it-live",children:"https://mjml.io/try-it-live"})]}),Object(e.jsx)("code",{children:Object(e.jsx)(u.a,{id:"code.snippet"})}),Object(e.jsx)(o.a.Item,{shouldUpdate:!0,children:function(c){return Object(e.jsx)(ue,{requiredVariables:n.required_variables,variables:V,value:c.getFieldValue(r),onChange:function(L){return c.setFieldsValue(Object(S.a)({},r,L))},error:c.getFieldError(r),styles:{width:"100%",height:"40vh"}})}}),Object(e.jsx)(Ee.a,{name:r,shouldUpdate:!0,hidden:!0,rules:n.readonly?void 0:[{required:n.required,message:Object(e.jsx)(u.a,{id:"templates.this_required"})},{validator:function(){var l=Object(A.a)(Object(w.a)().mark(function s(L,E){return Object(w.a)().wrap(function(J){for(;;)switch(J.prev=J.next){case 0:return J.abrupt("return",p(E,n.required_variables));case 1:case"end":return J.stop()}},s)}));function c(s,L){return l.apply(this,arguments)}return c}()}]}),F(n.required_variables)]});default:return}},[n,r,V]);return Object(e.jsx)(B.a.Fragment,{children:d()})},Q=$,be=t("B0O/"),k=t("/y+f"),oe=t("5Dmo"),U=t("3S7+"),Ue=t("0WSk"),$e=function(i){var r=i.templateId,n=Object(b.useState)(!1),f=Object(I.a)(n,2),V=f[0],F=f[1],p=Object(b.useState)([]),d=Object(I.a)(p,2),l=d[0],c=d[1],s=Object(u.l)(),L=Object(b.useCallback)(function(){F(!0),Object(x.f)(Number(r),l).then(function(E){E.success?Z.b.success(E.message):Z.b.error(E.message)}).catch(function(E){return Z.b.error(E.toString())}).finally(function(){return F(!1)})},[l,r]);return Object(e.jsxs)(M.b,{children:[Object(e.jsx)(Ue.a,{multiple:!0,value:l,onChange:function(G){return c(G)}}),Object(e.jsx)(U.a,{title:s.formatMessage({id:"generate_pdf_users_tooltip"}),children:Object(e.jsx)(ge.a,{loading:V,onClick:function(){return L()},disabled:!l.length,children:Object(e.jsx)(u.a,{id:"generate"})})})]})},Ge=$e,ze=t("qSko"),Je=function(i){var r=i.templateId,n=Object(b.useState)(!1),f=Object(I.a)(n,2),V=f[0],F=f[1],p=Object(b.useState)(),d=Object(I.a)(p,2),l=d[0],c=d[1],s=Object(u.l)(),L=Object(b.useCallback)(function(){F(!0),typeof l=="number"&&Object(x.g)(Number(r),Number(l)).then(function(E){E.success?Z.b.success(E.message):Z.b.error(E.message)}).catch(function(E){return Z.b.error(E.toString())}).finally(function(){return F(!1)})},[l,r]);return Object(e.jsxs)(M.b,{children:[Object(e.jsx)(ze.a,{multiple:!1,value:l,onChange:function(G){return c(G)}}),Object(e.jsx)(U.a,{title:s.formatMessage({id:"generate_pdf_products_tooltip"}),children:Object(e.jsx)(ge.a,{loading:V,onClick:function(){return L()},disabled:!l,children:Object(e.jsx)(u.a,{id:"generate"})})})]})},We=Je,Ke=ie.a.Panel,He=function(i){return Object.entries(i).map(function(r){return{key:r[0],content:r[1]}})},De=function(i){return Object.assign.apply(Object,[{}].concat(Object(le.a)(i)))},Ye=function(i){var r=["name","event","default"];return Object.keys(i).filter(function(n){return!r.includes(n)}).reduce(function(n,f){return n[f]=i[f],n},{})},Se=k.d,nt=h.default=function(){var K=Object(u.l)(),i=Object(Le.l)(),r=i.template,n=i.id,f=n==="new",V=Object(b.useState)(!1),F=Object(I.a)(V,2),p=F[0],d=F[1],l=o.a.useForm(),c=Object(I.a)(l,1),s=c[0],L=Object(b.useState)(),E=Object(I.a)(L,2),G=E[0],J=E[1],Ze=Object(b.useState)(void 0),Ne=Object(I.a)(Ze,2),te=Ne[0],Xe=Ne[1],Qe=Object(b.useState)(),Re=Object(I.a)(Qe,2),ke=Re[0],qe=Re[1],_e=Object(b.useState)(!1),Ve=Object(I.a)(_e,2),we=Ve[0],et=Ve[1];Object(b.useEffect)(function(){Object(x.i)().then(function(D){J(D.success?D.data:{})})},[]),Object(b.useEffect)(function(){var D=s.getFieldsValue(),v=te&&Object.keys(te.sections).map(function(W){return Object(S.a)({},W,te.sections[W].default_content)});v&&f&&s.setFieldsValue(Object(O.a)(Object(O.a)({},D),De(v)))},[te]);var Be=Object(b.useCallback)(function(D){if(D&&r){var v=G&&G[D][Se[r]];Xe(v)}et(D===k.e.ManuallyTriggeredEvent)},[G,n]),tt=Object(b.useCallback)(Object(A.a)(Object(w.a)().mark(function D(){var v,W,se;return Object(w.a)().wrap(function(ye){for(;;)switch(ye.prev=ye.next){case 0:return ye.next=2,Object(x.d)(Number(n));case 2:v=ye.sent,v.success&&(W=v.data.sections&&v.data.sections.map(function(ae){return Object(S.a)({},ae.key,ae.content)}),se=W&&De(W),s.setFieldsValue(Object(O.a)(Object(O.a)({},v.data),se)),Be(String(v.data.event)),d(!0));case 4:case"end":return ye.stop()}},D)})),[n,G]),at=Object(b.useCallback)(function(){var D=Object(A.a)(Object(w.a)().mark(function v(W){var se,Ce;return Object(w.a)().wrap(function(ae){for(;;)switch(ae.prev=ae.next){case 0:if(Ce=Object(O.a)(Object(O.a)({},W),{},{channel:Se[r],sections:He(Ye(W))}),!f){ae.next=8;break}return ae.next=4,Object(x.a)(Ce);case 4:se=ae.sent,se.success&&u.f.push("/configuration/templates/".concat(r,"/").concat(se.data.id)),ae.next=11;break;case 8:return ae.next=10,Object(x.h)(Number(n),Ce);case 10:se=ae.sent;case 11:d(!0),Z.b.success(se.message);case 13:case"end":return ae.stop()}},v)}));return function(v){return D.apply(this,arguments)}}(),[G,n]);Object(b.useEffect)(function(){f||tt()},[n,G]);var rt=Object(b.useCallback)(function(D){return G?Object.keys(G).reduce(function(v,W){return G[W][D]?Object(O.a)(Object(O.a)({},v),{},Object(S.a)({},W,K.formatMessage({id:W,defaultMessage:W}))):v},{}):{}},[G]);return Object(e.jsxs)(P.a,{title:f?Object(e.jsxs)("span",{children:[Object(e.jsx)(u.a,{id:"new"})," ",r," ",Object(e.jsx)(u.a,{id:"template"})]}):Object(e.jsxs)("span",{children:[Object(e.jsx)(u.a,{id:"edit"})," ",r," ",Object(e.jsx)(u.a,{id:"template"})]}),children:[Object(e.jsx)(m.a,{size:"small",children:Object(e.jsxs)(o.a,{initialValues:{},onFinish:at,form:s,onValuesChange:function(){var v=s.getFieldsValue();Be(v.event),d(!1)},children:[Object(e.jsxs)(o.a.Group,{children:[Object(e.jsx)(j.a,{width:"sm",name:"name",label:Object(e.jsx)(u.a,{id:"name"}),placeholder:K.formatMessage({id:"name"}),rules:[{required:!0,message:Object(e.jsx)(u.a,{id:"select"})}]}),Object(e.jsx)(y.a,{name:"event",width:"lg",label:Object(e.jsx)(u.a,{id:"event"}),valueEnum:G?rt(Se[r]):{},placeholder:K.formatMessage({id:"event"}),rules:[{required:!0,message:Object(e.jsx)(u.a,{id:"select"})}]}),Object(e.jsx)(o.a.Item,{label:Object(e.jsx)(u.a,{id:"templates.set_as_default_template"}),children:Object(e.jsx)(R.a,{name:"default"})})]}),!f&&r!=="pdf"&&Object(e.jsxs)(o.a.Group,{children:[Object(e.jsx)(o.a.Item,{label:Object(e.jsx)(u.a,{id:"preview"}),children:Object(e.jsx)(Fe,{disabled:!p,id:Number(n),type:r,onPreviewData:function(v){v&&v.data&&v.data.content&&qe(v.data.content)}})}),we&&Object(e.jsx)(o.a.Item,{label:Object(e.jsx)(u.a,{id:"generate_pdf"}),tooltip:Object(e.jsx)(u.a,{id:"generate_pdf_tooltip"}),children:Object(e.jsx)(Ge,{templateId:Number(n)})}),we&&Object(e.jsx)(o.a.Item,{label:Object(e.jsx)(u.a,{id:"generate_pdf"}),tooltip:Object(e.jsx)(u.a,{id:"generate_pdf_tooltip"}),children:Object(e.jsx)(We,{templateId:Number(n)})})]}),Se[r]===k.d.pdf&&!f&&Object(e.jsx)(ie.a,{ghost:!0,destroyInactivePanel:!0,defaultActiveKey:[-1],children:Object(e.jsx)(Ke,{header:Object(e.jsx)(u.a,{id:"generated_pdfs"}),children:Object(e.jsx)(be.a,{template_id:Number(n)})},0)}),!te&&!f?Object(e.jsx)(a.a,{}):te&&te.sections&&Object.keys(te.sections).map(function(D,v){var W=te.sections&&te.sections[D];return Object(e.jsxs)(B.a.Fragment,{children:[v===0&&r!=="pdf"&&Object(e.jsxs)(B.a.Fragment,{children:[Object(e.jsx)(Y.a,{children:Object(e.jsx)(u.a,{id:"templates.tokens"})}),Object(e.jsx)(M.b,{children:Object(e.jsx)(N.a,{children:te.variables.map(function(se){return Object(e.jsx)(re.a,{color:"orange",children:se},se)})})})]}),Object(e.jsx)(Y.a,{}),Object(e.jsx)(Q,{name:D,field:W,variables:te.variables})]},D)}),Object(e.jsx)(Y.a,{})]})}),ke&&Object(e.jsx)("p",{children:"fabric preview"})]})}},"JAl+":function(he,h,t){},ctOJ:function(he,h,t){},rWUb:function(he,h,t){"use strict";t.d(h,"e",function(){return fe}),t.d(h,"d",function(){return pe}),t.d(h,"a",function(){return Oe}),t.d(h,"h",function(){return Pe}),t.d(h,"b",function(){return w}),t.d(h,"i",function(){return O}),t.d(h,"c",function(){return I}),t.d(h,"f",function(){return xe}),t.d(h,"g",function(){return b});var g=t("qLMh"),M=t("k1fw"),H=t("9og8"),N=t("9kvl");function fe(o,j){return re.apply(this,arguments)}function re(){return re=Object(H.a)(Object(g.a)().mark(function o(j,y){return Object(g.a)().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.abrupt("return",Object(N.i)("/api/admin/templates",Object(M.a)({method:"GET",useCache:!1,params:j},y||{})));case 1:case"end":return m.stop()}},o)})),re.apply(this,arguments)}function pe(o,j){return Y.apply(this,arguments)}function Y(){return Y=Object(H.a)(Object(g.a)().mark(function o(j,y){return Object(g.a)().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.abrupt("return",Object(N.i)("/api/admin/templates/".concat(j),Object(M.a)({method:"GET"},y||{})));case 1:case"end":return m.stop()}},o)})),Y.apply(this,arguments)}function Oe(o,j){return a.apply(this,arguments)}function a(){return a=Object(H.a)(Object(g.a)().mark(function o(j,y){return Object(g.a)().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.abrupt("return",Object(N.i)("/api/admin/templates",Object(M.a)({method:"POST",headers:{"Content-Type":"application/json"},data:j},y||{})));case 1:case"end":return m.stop()}},o)})),a.apply(this,arguments)}function Pe(o,j,y){return Z.apply(this,arguments)}function Z(){return Z=Object(H.a)(Object(g.a)().mark(function o(j,y,R){return Object(g.a)().wrap(function(x){for(;;)switch(x.prev=x.next){case 0:return x.abrupt("return",Object(N.i)("/api/admin/templates/".concat(j),Object(M.a)({method:"PATCH",headers:{"Content-Type":"application/json"},data:y},R||{})));case 1:case"end":return x.stop()}},o)})),Z.apply(this,arguments)}function w(o,j){return A.apply(this,arguments)}function A(){return A=Object(H.a)(Object(g.a)().mark(function o(j,y){return Object(g.a)().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.abrupt("return",Object(N.i)("/api/admin/templates/".concat(j),Object(M.a)({method:"DELETE",headers:{"Content-Type":"application/json"}},y||{})));case 1:case"end":return m.stop()}},o)})),A.apply(this,arguments)}function O(o){return S.apply(this,arguments)}function S(){return S=Object(H.a)(Object(g.a)().mark(function o(j){return Object(g.a)().wrap(function(R){for(;;)switch(R.prev=R.next){case 0:return R.abrupt("return",Object(N.i)("/api/admin/templates/variables",Object(M.a)({method:"GET"},j||{})));case 1:case"end":return R.stop()}},o)})),S.apply(this,arguments)}function I(o,j){return le.apply(this,arguments)}function le(){return le=Object(H.a)(Object(g.a)().mark(function o(j,y){return Object(g.a)().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.abrupt("return",Object(N.i)("/api/admin/templates/".concat(j,"/preview"),Object(M.a)({method:"GET"},y||{})));case 1:case"end":return m.stop()}},o)})),le.apply(this,arguments)}function xe(o,j,y){return ie.apply(this,arguments)}function ie(){return ie=Object(H.a)(Object(g.a)().mark(function o(j,y,R){return Object(g.a)().wrap(function(x){for(;;)switch(x.prev=x.next){case 0:return x.abrupt("return",Object(N.i)("/api/admin/events/trigger-manually/".concat(j),Object(M.a)({method:"POST",headers:{"Content-Type":"application/json"},data:{users:y}},R||{})));case 1:case"end":return x.stop()}},o)})),ie.apply(this,arguments)}function b(o,j,y){return B.apply(this,arguments)}function B(){return B=Object(H.a)(Object(g.a)().mark(function o(j,y,R){return Object(g.a)().wrap(function(x){for(;;)switch(x.prev=x.next){case 0:return x.abrupt("return",Object(N.i)("/api/admin/products/".concat(y,"/trigger-event-manually/").concat(j),Object(M.a)({method:"POST",headers:{"Content-Type":"application/json"}},R||{})));case 1:case"end":return x.stop()}},o)})),B.apply(this,arguments)}},wbUo:function(he,h,t){}}]);
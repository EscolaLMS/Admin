(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{"/y+f":function(je,h,e){"use strict";e.d(h,"f",function(){return v}),e.d(h,"d",function(){return A}),e.d(h,"e",function(){return ue}),e.d(h,"c",function(){return se}),e.d(h,"a",function(){return H}),e.d(h,"b",function(){return le});var v;(function(a){a.Unselected="",a.RichText="EscolaLms\\TopicTypes\\Models\\TopicContent\\RichText",a.OEmbed="EscolaLms\\TopicTypes\\Models\\TopicContent\\OEmbed",a.Audio="EscolaLms\\TopicTypes\\Models\\TopicContent\\Audio",a.Video="EscolaLms\\TopicTypes\\Models\\TopicContent\\Video",a.H5P="EscolaLms\\TopicTypes\\Models\\TopicContent\\H5P",a.Image="EscolaLms\\TopicTypes\\Models\\TopicContent\\Image",a.PDF="EscolaLms\\TopicTypes\\Models\\TopicContent\\PDF",a.SCORM="EscolaLms\\TopicTypes\\Models\\TopicContent\\ScormSco",a.Project="EscolaLms\\TopicTypeProject\\Models\\Project",a.GiftQuiz="EscolaLms\\TopicTypeGift\\Models\\GiftQuiz"})(v||(v={}));var M;(function(a){a.OrderPaid="EscolaLms\\Cart\\Events\\OrderPaid",a.UserLogged="EscolaLms\\Auth\\Events\\UserLogged"})(M||(M={}));var $;(function(a){a.draft="draft",a.published="published",a.archived="archived"})($||($={}));var A;(function(a){a.email="EscolaLms\\TemplatesEmail\\Core\\EmailChannel",a.pdf="EscolaLms\\TemplatesPdf\\Core\\PdfChannel",a.sms="EscolaLms\\TemplatesSms\\Core\\SmsChannel"})(A||(A={}));var ue;(function(a){a.ManuallyTriggeredEvent="EscolaLms\\Templates\\Events\\ManuallyTriggeredEvent"})(ue||(ue={}));var X;(function(a){a.cart_fixed="cart_fixed",a.cart_percent="cart_percent",a.product_fixed="product_fixed",a.product_percent="product_percent"})(X||(X={}));var se;(function(a){a.MULTIPLE_CHOICE="multiple_choice",a.MULTIPLE_CHOICE_WITH_MULTIPLE_RIGHT_ANSWERS="multiple_choice_with_multiple_right_answers",a.TRUE_FALSE="true_false",a.SHORT_ANSWERS="short_answers",a.MATCHING="matching",a.NUMERICAL_QUESTION="numerical_question",a.ESSAY="essay",a.DESCRIPTION="description"})(se||(se={}));var H;(function(a){a.PRESENT="present",a.ABSENT="absent"})(H||(H={}));var le;(function(a){a.Manual="manual",a.TeamsForms="teams_forms",a.TeamsLecture="teams_lecture",a.TestPortal="test_portal"})(le||(le={}))},"39sE":function(je,h,e){"use strict";var v=e("k1fw"),M=e("+L6B"),$=e("2/Rp"),A=e("qLMh"),ue=e("miYZ"),X=e("tsqr"),se=e("9og8"),H=e("tJVT"),le=e("PpiC"),a=e("q1tI"),xe=e.n(a),G=e("9kvl"),S=e("nKUr"),D=e.n(S),p=["url","filename","children"],P=function(Q){var me=Q.url,k=Q.filename,b=Q.children,U=Object(le.a)(Q,p),u=Object(a.useState)(!1),d=Object(H.a)(u,2),g=d[0],C=d[1],m=Object(a.useCallback)(Object(se.a)(Object(A.a)().mark(function E(){var T,be,fe,Ee;return Object(A.a)().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return C(!0),l.prev=1,l.next=4,fetch("".concat(window.REACT_APP_API_URL||"https://api-stage.escolalms.com").concat(me),{headers:{Authorization:"Bearer ".concat(localStorage.getItem("TOKEN"))}});case 4:return T=l.sent,be=document.createElement("a"),l.next=8,T.blob();case 8:fe=l.sent,Ee=window.URL.createObjectURL(fe),be.download=k,be.href=Ee,be.click(),C(!1),X.b.success(Object(S.jsx)(G.a,{id:"file_downloaded",defaultMessage:"File downloaded"})),l.next=21;break;case 17:l.prev=17,l.t0=l.catch(1),C(!1),X.b.error(Object(S.jsx)(G.a,{id:"file_downloaded_error",defaultMessage:"Can't download file"}));case 21:case"end":return l.stop()}},E,null,[[1,17]])})),[me,k]);return Object(S.jsx)($.a,Object(v.a)(Object(v.a)({loading:g},U),{},{onClick:m,children:b}))};h.a=P},"B0O/":function(je,h,e){"use strict";var v=e("Mwp2"),M=e("VXEj"),$=e("+L6B"),A=e("2/Rp"),ue=e("tU7J"),X=e("wFql"),se=e("/zsF"),H=e("PArb"),le=e("T2oS"),a=e("W9HT"),xe=e("fOrg"),G=e("+KLJ"),S=e("tJVT"),D=e("q1tI"),p=e("9kvl"),P=e("qLMh"),B=e("k1fw"),Q=e("9og8");function me(q,N){return k.apply(this,arguments)}function k(){return k=Object(Q.a)(Object(P.a)().mark(function q(N,w){return Object(P.a)().wrap(function(L){for(;;)switch(L.prev=L.next){case 0:return L.abrupt("return",Object(p.i)("/api/admin/pdfs",Object(B.a)({params:Object(B.a)({},N),method:"GET"},w||{})));case 1:case"end":return L.stop()}},q)})),k.apply(this,arguments)}function b(q,N){return U.apply(this,arguments)}function U(){return U=Object(Q.a)(Object(P.a)().mark(function q(N,w){return Object(P.a)().wrap(function(L){for(;;)switch(L.prev=L.next){case 0:return L.abrupt("return",Object(p.i)("/api/pdfs/".concat(N),Object(B.a)({method:"GET"},w||{})));case 1:case"end":return L.stop()}},q)})),U.apply(this,arguments)}function u(q,N){return d.apply(this,arguments)}function d(){return d=Object(Q.a)(Object(P.a)().mark(function q(N,w){return Object(P.a)().wrap(function(L){for(;;)switch(L.prev=L.next){case 0:return L.abrupt("return",Object(p.i)("/api/pdfs/generate/".concat(N),Object(B.a)({method:"GET"},w||{})));case 1:case"end":return L.stop()}},q)})),d.apply(this,arguments)}var g=e("oBTY"),C=e("Iab2"),m=e("xOOu"),E=e.n(m),T=e("nKUr"),be=function(N){var w=N.pdfIds,ie=N.onProgress,L=N.onFinished,ye=N.filename,pe=ye===void 0?"package.zip":ye,ce=Object(D.useState)([]),re=Object(S.a)(ce,2),ve=re[0],Te=re[1],Pe=Object(D.useCallback)(function(oe){var de=new E.a;oe.forEach(function(Y,ne){return de.file("".concat(w[ne],".pdf"),Y)}),de.generateAsync({type:"blob"}).then(function(Y){Object(C.saveAs)(Y,pe),L&&L()})},[ve,pe]);return Object(D.useEffect)(function(){w.forEach(function(oe){var de=fetch("".concat(window.REACT_APP_API_URL||"https://api-stage.escolalms.com","/api/pdfs/generate/").concat(oe),{headers:{Authorization:"Bearer ".concat(localStorage.getItem("TOKEN"))}});de.then(function(Y){return Y.blob()}).then(function(Y){Y&&Y instanceof Blob&&Te(function(ne){var he=(ne.length+1)/w.length;return ie&&ie(he),he>=1&&Pe([].concat(Object(g.a)(ne),[Y])),[].concat(Object(g.a)(ne),[Y])})})})},[w]),Object(T.jsxs)("p",{children:["Progress ",ve.length," / ",w.length]})},fe=be,Ee=e("Vpfc"),Oe=e("dF/Y"),l=e("39sE"),t=function(N){var w=N.user_id,ie=N.template_id,L=N.title,ye=Object(D.useState)({state:"initial"}),pe=Object(S.a)(ye,2),ce=pe[0],re=pe[1],ve=Object(D.useState)({state:"initial"}),Te=Object(S.a)(ve,2),Pe=Te[0],oe=Te[1],de=Object(D.useState)(!1),Y=Object(S.a)(de,2),ne=Y[0],he=Y[1];Object(D.useEffect)(function(){re({state:"loading"});var te=new AbortController;return me({user_id:w,template_id:ie},{signal:te.signal}).then(function(V){V&&V.success?re({state:"loaded",list:V.data}):V&&!V.success&&re({state:"error",error:V.message})}).catch(function(V){return re({state:"error",error:V.toString()})}),function(){te.abort()}},[]);var Ae=Object(D.useCallback)(function(te){oe({state:"loading"}),b(te).then(function(V){V.success?oe({state:"loaded",data:V.data.content}):oe({state:"initial"})})},[]);return ce.state==="error"?Object(T.jsx)(G.a,{message:"Error Text",type:"error"}):ce.state==="loading"||ce.state==="initial"?Object(T.jsx)(a.a,{}):Object(T.jsxs)(D.Fragment,{children:[Object(T.jsx)(H.a,{}),ne&&Object(T.jsx)(fe,{pdfIds:ce.list.map(function(te){return te.id}),onFinished:function(){return he(!1)}}),Object(T.jsx)(M.b,{size:"small",itemLayout:"horizontal",dataSource:ce.list,header:Object(T.jsxs)("div",{children:[Object(T.jsx)(p.a,{id:"template"})," ",L&&Object(T.jsx)(X.a.Text,{strong:!0,children:L}),". ",Object(T.jsx)(p.a,{id:"generated_pdfs",defaultMessage:"Generated PDFs"})," ",Object(T.jsx)(A.a,{loading:ne,type:"primary",onClick:function(){return he(!0)},icon:Object(T.jsx)(Oe.a,{}),size:"small",children:Object(T.jsx)(p.a,{id:"download_all",defaultMessage:"Download all PDFs"})})]}),renderItem:function(V){return Object(T.jsxs)(M.b.Item,{actions:[Object(T.jsx)(l.a,{url:"/api/pdfs/generate/".concat(V.id),filename:"generated-".concat(V.id,".pdf"),size:"small",icon:Object(T.jsx)(Oe.a,{}),type:"primary",onClick:function(){return Ae(V.id)},loading:Pe.state==="loading",children:Object(T.jsx)(p.a,{id:"download_pdf",defaultMessage:"Download PDFs"})},"download")],children:[V.title," ",Object(T.jsx)(Ee.a,{type:"App\\Models\\User",type_id:V.user_id})]})}})]})},Le=h.a=t},BOG6:function(je,h,e){"use strict";e.r(h);var v=e("DYRE"),M=e("zeV3"),$=e("tU7J"),A=e("wFql"),ue=e("+BJd"),X=e("mr32"),se=e("/zsF"),H=e("PArb"),le=e("T2oS"),a=e("W9HT"),xe=e("miYZ"),G=e("tsqr"),S=e("qLMh"),D=e("9og8"),p=e("k1fw"),P=e("jrin"),B=e("tJVT"),Q=e("oBTY"),me=e("fu2T"),k=e("gK9i"),b=e("q1tI"),U=e.n(b),u=e("VMEa"),d=e("Qurx"),g=e("yj/a"),C=e("tneF"),m=e("nhC9"),E=e("rWUb"),T=e("tMyG"),be=e("fOrg"),fe=e("+KLJ"),Ee=e("+L6B"),Oe=e("2/Rp"),l=e("9kvl"),t=e("nKUr"),Le=function(c){var r=c.disabled,n=r===void 0?!1:r,f=c.id,K=c.onPreviewData,F=Object(b.useState)({state:"ready"}),O=Object(B.a)(F,2),j=O[0],i=O[1],o=Object(b.useCallback)(function(){i({state:"loading"}),Object(E.c)(f).then(function(s){s.success?(K&&K(s.data),s.data.sent&&s.data.to?i({state:"loaded",data:s.data,message:"email sent to ".concat(s.data.to)}):s.data.url?i({state:"loaded",data:s.data,message:Object(t.jsxs)(U.a.Fragment,{children:[Object(t.jsx)(l.a,{id:"download"})," ",Object(t.jsx)("a",{target:"_blank",href:s.data.url,rel:"noreferrer",children:s.data.filename})]})}):i({state:"loaded",data:s.data,message:s.message})):i({state:"error",error:s.message})}).catch(function(){i({state:"error",error:"error"})})},[f]);return Object(t.jsxs)(U.a.Fragment,{children:[Object(t.jsx)(Oe.a,{type:"primary",loading:j.state==="loading",disabled:n,onClick:o,children:Object(t.jsx)(l.a,{id:"preview"})}),j.state==="loaded"&&Object(t.jsx)(fe.a,{message:j.message,type:"success",closable:!0,onClose:function(){return i({state:"ready"})}}),j.state==="error"&&Object(t.jsx)(fe.a,{message:j.error,type:"error",closable:!0,onClose:function(){return i({state:"ready"})}})]})},q=Le,N=e("Ty5D"),w=e("BiO0"),ie=e("PGov"),L=e("D6/r"),ye=e("wbUo"),pe=function(c){return Object(t.jsxs)("div",{className:"".concat(c.entity.required&&"required"),children:["@","".concat(c.entity.name)]})},ce=function(c){var r=c.requiredVariables,n=c.variables,f=c.onChange,K=c.value,F=c.error,O=c.styles,j=n.map(function(i){return{name:i.substring(1),required:r.includes(i)}});return Object(t.jsxs)(U.a.Fragment,{children:[Object(t.jsx)(ie.a,{style:O,className:"ant-input pro-field pro-field-lg rta__textarea_wide ".concat(F.length&&"error"),onChange:function(o){return f(o.target.value)},loadingComponent:function(){return Object(t.jsx)(l.a,{id:"loading"})},minChar:0,value:K,itemStyle:{fontSize:"16px"},trigger:{"@":{dataProvider:function(o){return j.filter(function(s){return s.name.startsWith(o)})},component:pe,output:function(o,s){return"".concat(s).concat(o.name)}}}}),Object(t.jsx)("div",{role:"alert",className:"ant-form-item-explain-error",children:F})]})},re=ce,ve=e("UF3W"),Te=e("bXNp"),Pe=e("ctOJ"),oe=function(c){switch(c.toLocaleLowerCase()){case"varusername":return"John Doe";case"varcoursetitle":return"How to be an LMS Expert";case"varappname":return"Wellms Headless LMS";default:return"Lorem Ipsum"}},de=function(c,r,n){var f=Math.max.apply(null,c.parameters?[c.parameters.map(function(O){return O.id}),c.docElements.map(function(O){return O.id})].flat():[1])+1,K=c.parameters?c.parameters.reduce(function(O,j){return Object(p.a)(Object(p.a)({},O),{},Object(P.a)({},j.name,j))},{}):{},F=r.map(function(O){return O.replace("@","")}).reduce(function(O,j,i){return O[j]?Object(p.a)(Object(p.a)({},O),{},Object(P.a)({},j,Object(p.a)(Object(p.a)({},O[j]),{},{id:f+i}))):Object(p.a)(Object(p.a)({},O),{},Object(P.a)({},j,{id:f+i,name:j,type:"string",arrayItemType:"string",eval:!1,nullable:!n.includes(j),pattern:"",expression:"",showOnlyNameType:!1,testData:oe(j)}))},K);return Object.assign({},c,{parameters:Object.values(F)})},Y=function(c){var r=c.onTemplateSaved,n=c.reportBroTemplate,f=n===void 0?null:n,K=c.field,F=c.variables,O=c.onTemplateUpdated,j=Object(b.useRef)(null),i=function(s){var I=s.nativeEvent.target.tagName.toLowerCase();switch(I){case"span":case"button":s.nativeEvent.stopPropagation(),s.nativeEvent.preventDefault();default:return}};return Object(b.useEffect)(function(){if(j.current){var o=new ve.ReportBro(j.current,{enableSpreadsheet:!1,fonts:[{name:"Open Sans",value:"Open Sans"}],defaultFont:"Open Sans",reportServerUrl:"".concat(window.REACT_APP_API_URL||"https://api-stage.escolalms.com","/api/pdfs/reportbro/report/run"),saveCallback:function(){r(o.getReport())},cmdExecutedCallback:function(){O&&O(o.getReport())}});f&&o.load(de(f,F,K.required_variables))}},[j]),Object(t.jsx)("div",{ref:j,className:"pdf-editor",onClick:i,children:"pdf editor"})},ne=Y,he=e("JAl+"),Ae=function(c){var r=c.name,n=c.field,f=c.variables,K=f===void 0?[]:f,F=Object(b.useCallback)(function(i){if(i.length)return Object(t.jsx)(M.b,{children:Object(t.jsxs)(A.a,{children:[Object(t.jsx)(l.a,{id:"templates.required_variables"}),":"," ",i.map(function(o){return Object(t.jsx)(X.a,{color:"red",children:o},o)})]})})},[n,r]),O=Object(b.useCallback)(function(i,o){return i&&o.every(function(s){return i.includes(s)})?Promise.resolve():Promise.reject(new Error("No required variable used"))},[n,r]),j=Object(b.useCallback)(function(){if(!n.readonly)switch(n.type){case"text":case"url":return Object(t.jsxs)(U.a.Fragment,{children:[Object(t.jsx)("label",{children:Object(t.jsx)(l.a,{id:r})}),Object(t.jsx)(u.a.Item,{shouldUpdate:!0,children:function(o){return Object(t.jsx)(re,{requiredVariables:n.required_variables,variables:K,value:o.getFieldValue(r),onChange:function(I){return o.setFieldsValue(Object(P.a)({},r,I))},error:o.getFieldError(r),styles:{width:"100%",height:"100px"}})}}),Object(t.jsx)(d.a,{name:r,shouldUpdate:!0,hidden:!0,rules:n.readonly?void 0:[{required:n.required,message:Object(t.jsx)(l.a,{id:"templates.this_required"})},{validator:function(){var i=Object(D.a)(Object(S.a)().mark(function s(I,x){return Object(S.a)().wrap(function(z){for(;;)switch(z.prev=z.next){case 0:return z.abrupt("return",O(x,n.required_variables));case 1:case"end":return z.stop()}},s)}));function o(s,I){return i.apply(this,arguments)}return o}()}]}),F(n.required_variables)]});case"fabric.js":return Object(t.jsxs)(U.a.Fragment,{children:[Object(t.jsx)(u.a.Item,{shouldUpdate:!0,children:function(o){return Object(t.jsx)(ne,{reportBroTemplate:o.getFieldValue(r)&&JSON.parse(o.getFieldValue(r)),variables:K,field:n,onTemplateSaved:function(I){o.setFieldsValue(Object(P.a)({},r,JSON.stringify(I))),o.submit()},onTemplateUpdated:function(I){o.setFieldsValue(Object(P.a)({},r,JSON.stringify(I)))}})}}),Object(t.jsx)(w.a,{name:r,shouldUpdate:!0,width:"lg",hidden:!0})]});case"html":return Object(t.jsxs)(U.a.Fragment,{children:[Object(t.jsx)(w.a,{readonly:n.readonly,shouldUpdate:!0,width:"lg",label:Object(t.jsx)(l.a,{id:r}),name:r,tooltip:Object(t.jsx)(l.a,{id:"templates.html_tooltip"}),rules:n.readonly?void 0:[{required:n.required,message:Object(t.jsx)(l.a,{id:"templates.this_required"})},{validator:function(){var i=Object(D.a)(Object(S.a)().mark(function s(I,x){return Object(S.a)().wrap(function(z){for(;;)switch(z.prev=z.next){case 0:return z.abrupt("return",O(x,n.required_variables));case 1:case"end":return z.stop()}},s)}));function o(s,I){return i.apply(this,arguments)}return o}()}]}),F(n.required_variables)]});case"mjml":return Object(t.jsxs)(U.a.Fragment,{children:[Object(t.jsxs)("p",{children:[Object(t.jsx)(l.a,{id:"templates.to_create_template"})," ",Object(t.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://mjml.io/try-it-live",children:"https://mjml.io/try-it-live"})]}),Object(t.jsx)("code",{children:Object(t.jsx)(l.a,{id:"code.snippet"})}),Object(t.jsx)(u.a.Item,{shouldUpdate:!0,children:function(o){return Object(t.jsx)(re,{requiredVariables:n.required_variables,variables:K,value:o.getFieldValue(r),onChange:function(I){return o.setFieldsValue(Object(P.a)({},r,I))},error:o.getFieldError(r),styles:{width:"100%",height:"40vh"}})}}),Object(t.jsx)(w.a,{name:r,shouldUpdate:!0,hidden:!0,rules:n.readonly?void 0:[{required:n.required,message:Object(t.jsx)(l.a,{id:"templates.this_required"})},{validator:function(){var i=Object(D.a)(Object(S.a)().mark(function s(I,x){return Object(S.a)().wrap(function(z){for(;;)switch(z.prev=z.next){case 0:return z.abrupt("return",O(x,n.required_variables));case 1:case"end":return z.stop()}},s)}));function o(s,I){return i.apply(this,arguments)}return o}()}]}),F(n.required_variables)]});default:return}},[n,r,K]);return Object(t.jsx)(U.a.Fragment,{children:j()})},te=Ae,V=e("B0O/"),Ce=e("/y+f"),rt=e("5Dmo"),Fe=e("3S7+"),Ve=e("0WSk"),Ke=function(c){var r=c.templateId,n=Object(b.useState)(!1),f=Object(B.a)(n,2),K=f[0],F=f[1],O=Object(b.useState)([]),j=Object(B.a)(O,2),i=j[0],o=j[1],s=Object(l.l)(),I=Object(b.useCallback)(function(){F(!0),Object(E.f)(Number(r),i).then(function(x){x.success?G.b.success(x.message):G.b.error(x.message)}).catch(function(x){return G.b.error(x.toString())}).finally(function(){return F(!1)})},[i,r]);return Object(t.jsxs)(M.b,{children:[Object(t.jsx)(Ve.a,{multiple:!0,value:i,onChange:function(W){return o(W)}}),Object(t.jsx)(Fe.a,{title:s.formatMessage({id:"generate_pdf_users_tooltip"}),children:Object(t.jsx)(Oe.a,{loading:K,onClick:function(){return I()},disabled:!i.length,children:Object(t.jsx)(l.a,{id:"generate"})})})]})},We=Ke,we=e("qSko"),$e=function(c){var r=c.templateId,n=Object(b.useState)(!1),f=Object(B.a)(n,2),K=f[0],F=f[1],O=Object(b.useState)(),j=Object(B.a)(O,2),i=j[0],o=j[1],s=Object(l.l)(),I=Object(b.useCallback)(function(){F(!0),typeof i=="number"&&Object(E.g)(Number(r),Number(i)).then(function(x){x.success?G.b.success(x.message):G.b.error(x.message)}).catch(function(x){return G.b.error(x.toString())}).finally(function(){return F(!1)})},[i,r]);return Object(t.jsxs)(M.b,{children:[Object(t.jsx)(we.a,{multiple:!1,value:i,onChange:function(W){return o(W)}}),Object(t.jsx)(Fe.a,{title:s.formatMessage({id:"generate_pdf_products_tooltip"}),children:Object(t.jsx)(Oe.a,{loading:K,onClick:function(){return I()},disabled:!i,children:Object(t.jsx)(l.a,{id:"generate"})})})]})},Ge=$e,ze=k.a.Panel,Je=function(c){return Object.entries(c).map(function(r){return{key:r[0],content:r[1]}})},Ie=function(c){return Object.assign.apply(Object,[{}].concat(Object(Q.a)(c)))},He=function(c){var r=["name","event","default"];return Object.keys(c).filter(function(n){return!r.includes(n)}).reduce(function(n,f){return n[f]=c[f],n},{})},Se=Ce.d,nt=h.default=function(){var Z=Object(l.l)(),c=Object(N.l)(),r=c.template,n=c.id,f=n==="new",K=Object(b.useState)(!1),F=Object(B.a)(K,2),O=F[0],j=F[1],i=u.a.useForm(),o=Object(B.a)(i,1),s=o[0],I=Object(b.useState)(),x=Object(B.a)(I,2),W=x[0],z=x[1],Ye=Object(b.useState)(void 0),De=Object(B.a)(Ye,2),_=De[0],Ze=De[1],Xe=Object(b.useState)(),Ue=Object(B.a)(Xe,2),Qe=Ue[0],ke=Ue[1],qe=Object(b.useState)(!1),Re=Object(B.a)(qe,2),Be=Re[0],_e=Re[1];Object(b.useEffect)(function(){Object(E.i)().then(function(R){z(R.success?R.data:{})})},[]),Object(b.useEffect)(function(){var R=s.getFieldsValue(),y=_&&Object.keys(_.sections).map(function(J){return Object(P.a)({},J,_.sections[J].default_content)});y&&f&&s.setFieldsValue(Object(p.a)(Object(p.a)({},R),Ie(y)))},[_]);var Ne=Object(b.useCallback)(function(R){if(R&&r){var y=W&&W[R][Se[r]];Ze(y)}_e(R===Ce.e.ManuallyTriggeredEvent)},[W,n]),et=Object(b.useCallback)(Object(D.a)(Object(S.a)().mark(function R(){var y,J,ae;return Object(S.a)().wrap(function(ge){for(;;)switch(ge.prev=ge.next){case 0:return ge.next=2,Object(E.d)(Number(n));case 2:y=ge.sent,y.success&&(J=y.data.sections&&y.data.sections.map(function(ee){return Object(P.a)({},ee.key,ee.content)}),ae=J&&Ie(J),s.setFieldsValue(Object(p.a)(Object(p.a)({},y.data),ae)),Ne(String(y.data.event)),j(!0));case 4:case"end":return ge.stop()}},R)})),[n,W]),tt=Object(b.useCallback)(function(){var R=Object(D.a)(Object(S.a)().mark(function y(J){var ae,Me;return Object(S.a)().wrap(function(ee){for(;;)switch(ee.prev=ee.next){case 0:if(Me=Object(p.a)(Object(p.a)({},J),{},{channel:Se[r],sections:Je(He(J))}),!f){ee.next=8;break}return ee.next=4,Object(E.a)(Me);case 4:ae=ee.sent,ae.success&&l.f.push("/configuration/templates/".concat(r,"/").concat(ae.data.id)),ee.next=11;break;case 8:return ee.next=10,Object(E.h)(Number(n),Me);case 10:ae=ee.sent;case 11:j(!0),G.b.success(ae.message);case 13:case"end":return ee.stop()}},y)}));return function(y){return R.apply(this,arguments)}}(),[W,n]);Object(b.useEffect)(function(){f||et()},[n,W]);var at=Object(b.useCallback)(function(R){return W?Object.keys(W).reduce(function(y,J){return W[J][R]?Object(p.a)(Object(p.a)({},y),{},Object(P.a)({},J,Z.formatMessage({id:J,defaultMessage:J}))):y},{}):{}},[W]);return Object(t.jsxs)(T.a,{title:f?Object(t.jsxs)("span",{children:[Object(t.jsx)(l.a,{id:"new"})," ",r," ",Object(t.jsx)(l.a,{id:"template"})]}):Object(t.jsxs)("span",{children:[Object(t.jsx)(l.a,{id:"edit"})," ",r," ",Object(t.jsx)(l.a,{id:"template"})]}),children:[Object(t.jsx)(m.a,{size:"small",children:Object(t.jsxs)(u.a,{initialValues:{},onFinish:tt,form:s,onValuesChange:function(){var y=s.getFieldsValue();Ne(y.event),j(!1)},children:[Object(t.jsxs)(u.a.Group,{children:[Object(t.jsx)(d.a,{width:"sm",name:"name",label:Object(t.jsx)(l.a,{id:"name"}),placeholder:Z.formatMessage({id:"name"}),rules:[{required:!0,message:Object(t.jsx)(l.a,{id:"select"})}]}),Object(t.jsx)(g.a,{name:"event",width:"lg",label:Object(t.jsx)(l.a,{id:"event"}),valueEnum:W?at(Se[r]):{},placeholder:Z.formatMessage({id:"event"}),rules:[{required:!0,message:Object(t.jsx)(l.a,{id:"select"})}]}),Object(t.jsx)(u.a.Item,{label:Object(t.jsx)(l.a,{id:"templates.set_as_default_template"}),children:Object(t.jsx)(C.a,{name:"default"})})]}),!f&&r!=="pdf"&&Object(t.jsxs)(u.a.Group,{children:[Object(t.jsx)(u.a.Item,{label:Object(t.jsx)(l.a,{id:"preview"}),children:Object(t.jsx)(q,{disabled:!O,id:Number(n),type:r,onPreviewData:function(y){y&&y.data&&y.data.content&&ke(y.data.content)}})}),Be&&Object(t.jsx)(u.a.Item,{label:Object(t.jsx)(l.a,{id:"generate_pdf"}),tooltip:Object(t.jsx)(l.a,{id:"generate_pdf_tooltip"}),children:Object(t.jsx)(We,{templateId:Number(n)})}),Be&&Object(t.jsx)(u.a.Item,{label:Object(t.jsx)(l.a,{id:"generate_pdf"}),tooltip:Object(t.jsx)(l.a,{id:"generate_pdf_tooltip"}),children:Object(t.jsx)(Ge,{templateId:Number(n)})})]}),Se[r]===Ce.d.pdf&&!f&&Object(t.jsx)(k.a,{ghost:!0,destroyInactivePanel:!0,defaultActiveKey:[-1],children:Object(t.jsx)(ze,{header:Object(t.jsx)(l.a,{id:"generated_pdfs"}),children:Object(t.jsx)(V.a,{template_id:Number(n)})},0)}),!_&&!f?Object(t.jsx)(a.a,{}):_&&_.sections&&Object.keys(_.sections).map(function(R,y){var J=_.sections&&_.sections[R];return Object(t.jsxs)(U.a.Fragment,{children:[y===0&&r!=="pdf"&&Object(t.jsxs)(U.a.Fragment,{children:[Object(t.jsx)(H.a,{children:Object(t.jsx)(l.a,{id:"templates.tokens"})}),Object(t.jsx)(M.b,{children:Object(t.jsx)(A.a,{children:_.variables.map(function(ae){return Object(t.jsx)(X.a,{color:"orange",children:ae},ae)})})})]}),Object(t.jsx)(H.a,{}),Object(t.jsx)(te,{name:R,field:J,variables:_.variables})]},R)}),Object(t.jsx)(H.a,{})]})}),Qe&&Object(t.jsx)("p",{children:"fabric preview"})]})}},"JAl+":function(je,h,e){},ctOJ:function(je,h,e){},rWUb:function(je,h,e){"use strict";e.d(h,"e",function(){return ue}),e.d(h,"d",function(){return se}),e.d(h,"a",function(){return le}),e.d(h,"h",function(){return xe}),e.d(h,"b",function(){return S}),e.d(h,"i",function(){return p}),e.d(h,"c",function(){return B}),e.d(h,"f",function(){return me}),e.d(h,"g",function(){return b});var v=e("qLMh"),M=e("k1fw"),$=e("9og8"),A=e("9kvl");function ue(u,d){return X.apply(this,arguments)}function X(){return X=Object($.a)(Object(v.a)().mark(function u(d,g){return Object(v.a)().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.abrupt("return",Object(A.i)("/api/admin/templates",Object(M.a)({method:"GET",useCache:!1,params:d},g||{})));case 1:case"end":return m.stop()}},u)})),X.apply(this,arguments)}function se(u,d){return H.apply(this,arguments)}function H(){return H=Object($.a)(Object(v.a)().mark(function u(d,g){return Object(v.a)().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.abrupt("return",Object(A.i)("/api/admin/templates/".concat(d),Object(M.a)({method:"GET"},g||{})));case 1:case"end":return m.stop()}},u)})),H.apply(this,arguments)}function le(u,d){return a.apply(this,arguments)}function a(){return a=Object($.a)(Object(v.a)().mark(function u(d,g){return Object(v.a)().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.abrupt("return",Object(A.i)("/api/admin/templates",Object(M.a)({method:"POST",headers:{"Content-Type":"application/json"},data:d},g||{})));case 1:case"end":return m.stop()}},u)})),a.apply(this,arguments)}function xe(u,d,g){return G.apply(this,arguments)}function G(){return G=Object($.a)(Object(v.a)().mark(function u(d,g,C){return Object(v.a)().wrap(function(E){for(;;)switch(E.prev=E.next){case 0:return E.abrupt("return",Object(A.i)("/api/admin/templates/".concat(d),Object(M.a)({method:"PATCH",headers:{"Content-Type":"application/json"},data:g},C||{})));case 1:case"end":return E.stop()}},u)})),G.apply(this,arguments)}function S(u,d){return D.apply(this,arguments)}function D(){return D=Object($.a)(Object(v.a)().mark(function u(d,g){return Object(v.a)().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.abrupt("return",Object(A.i)("/api/admin/templates/".concat(d),Object(M.a)({method:"DELETE",headers:{"Content-Type":"application/json"}},g||{})));case 1:case"end":return m.stop()}},u)})),D.apply(this,arguments)}function p(u){return P.apply(this,arguments)}function P(){return P=Object($.a)(Object(v.a)().mark(function u(d){return Object(v.a)().wrap(function(C){for(;;)switch(C.prev=C.next){case 0:return C.abrupt("return",Object(A.i)("/api/admin/templates/variables",Object(M.a)({method:"GET"},d||{})));case 1:case"end":return C.stop()}},u)})),P.apply(this,arguments)}function B(u,d){return Q.apply(this,arguments)}function Q(){return Q=Object($.a)(Object(v.a)().mark(function u(d,g){return Object(v.a)().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.abrupt("return",Object(A.i)("/api/admin/templates/".concat(d,"/preview"),Object(M.a)({method:"GET"},g||{})));case 1:case"end":return m.stop()}},u)})),Q.apply(this,arguments)}function me(u,d,g){return k.apply(this,arguments)}function k(){return k=Object($.a)(Object(v.a)().mark(function u(d,g,C){return Object(v.a)().wrap(function(E){for(;;)switch(E.prev=E.next){case 0:return E.abrupt("return",Object(A.i)("/api/admin/events/trigger-manually/".concat(d),Object(M.a)({method:"POST",headers:{"Content-Type":"application/json"},data:{users:g}},C||{})));case 1:case"end":return E.stop()}},u)})),k.apply(this,arguments)}function b(u,d,g){return U.apply(this,arguments)}function U(){return U=Object($.a)(Object(v.a)().mark(function u(d,g,C){return Object(v.a)().wrap(function(E){for(;;)switch(E.prev=E.next){case 0:return E.abrupt("return",Object(A.i)("/api/admin/products/".concat(g,"/trigger-event-manually/").concat(d),Object(M.a)({method:"POST",headers:{"Content-Type":"application/json"}},C||{})));case 1:case"end":return E.stop()}},u)})),U.apply(this,arguments)}},wbUo:function(je,h,e){}}]);

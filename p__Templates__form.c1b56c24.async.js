(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{10:function(W,x){},8:function(W,x){},9:function(W,x){},BOG6:function(W,x,t){"use strict";t.r(x);var N=t("DYRE"),$=t("zeV3"),me=t("tU7J"),O=t("wFql"),K=t("+BJd"),_=t("mr32"),ee=t("/zsF"),Z=t("PArb"),te=t("T2oS"),se=t("W9HT"),ae=t("miYZ"),ie=t("tsqr"),J=t("9og8"),M=t("tJVT"),X=t("oBTY"),z=t("jrin"),T=t("k1fw"),le=t("WmNS"),F=t.n(le),r=t("q1tI"),l=t.n(r),b=t("VMEa"),C=t("Qurx"),u=t("yj/a"),Y=t("tneF"),pe=t("nhC9"),k=t("rWUb"),Oe=t("tMyG"),Ne=t("fOrg"),ve=t("+KLJ"),$e=t("+L6B"),he=t("2/Rp"),m=t("9kvl"),e=t("nKUr"),ge=function(i){var s=i.disabled,a=s===void 0?!1:s,o=i.id,h=i.onPreviewData,E=Object(r.useState)({state:"ready"}),v=Object(M.a)(E,2),d=v[0],j=v[1],y=Object(r.useCallback)(function(){j({state:"loading"}),Object(k.c)(o).then(function(c){c.success?(h&&h(c.data),c.data.sent&&c.data.to?j({state:"loaded",data:c.data,message:"email sent to ".concat(c.data.to)}):c.data.url?j({state:"loaded",data:c.data,message:Object(e.jsxs)(l.a.Fragment,{children:["Download"," ",Object(e.jsx)("a",{target:"_blank",href:c.data.url,children:c.data.filename})]})}):j({state:"loaded",data:c.data,message:c.message})):j({state:"error",error:c.message})}).catch(function(){j({state:"error",error:"error"})})},[o]);return Object(e.jsxs)(l.a.Fragment,{children:[Object(e.jsx)(he.a,{type:"primary",loading:d.state==="loading",disabled:a,onClick:y,children:Object(e.jsx)(m.a,{id:"preview"})}),d.state==="loaded"&&Object(e.jsx)(ve.a,{message:d.message,type:"success",closable:!0,onClose:function(){return j({state:"ready"})}}),d.state==="error"&&Object(e.jsx)(ve.a,{message:d.error,type:"error",closable:!0,onClose:function(){return j({state:"ready"})}})]})},ye=ge,xe=t("Ty5D"),ce=t("BiO0"),Je=t("JAl+"),ne=t("QDO1"),Fe=t("epSk"),Ce=t("LvDl"),fe=t("i680"),Me=t("ZEwP"),Ee=function(i){var s=i.svgDef,a=i.width,o=i.height;return Object(r.useEffect)(function(){var h=new fe.e("l","px",[a,o]),E=new DOMParser,v=E.parseFromString(s,"image/svg+xml");h.svg(v.documentElement).then(function(){h.save("myPDF.pdf")})},[s]),Object(e.jsx)("div",{})},we=function(i){var s=i.initialValue,a=i.width,o=a===void 0?842:a,h=i.height,E=h===void 0?592:h,v=i.onRendered,d=Object(ne.b)(),j=d.onReady,y=function(R){if(s)try{var n=JSON.parse(s);R.loadFromJSON(n,function(){var P=R.toSVG(),L=new fe.e("l","px",[o,E]),q=new DOMParser,H=q.parseFromString(P,"image/svg+xml");L.svg(H.documentElement).then(function(){L.save("myPDF.pdf"),v()})})}catch(P){}j(R)};return Object(e.jsx)("div",{className:"fakeA4",style:{width:o,height:E},children:Object(e.jsx)(ne.a,{className:"fakeA4-canvas",onReady:y})})},Pe=Ee,Le=t("K4qu"),Se=function(i){var s=i.onUpdate,a=i.initialValue,o=i.width,h=o===void 0?842:o,E=i.height,v=E===void 0?592:E,d=Object(r.useState)(),j=Object(M.a)(d,2),y=j[0],c=j[1],R=Object(ne.b)(),n=R.editor,P=R.onReady,L=function(w){n&&n[w]&&n[w]("sample")},q=function(){var w=n==null?void 0:n.canvas.toJSON();return w&&s&&s(w)},H=function(w){var I=w.target.files&&w.target.files[0];if(I){var B=new FileReader;B.readAsDataURL(I),B.onload=function(){if(B.result){var G;Fe.fabric.Image.fromURL((G=B.result)===null||G===void 0?void 0:G.toString(),function(de){var je=de.set({left:0,top:0});n&&n.canvas.add(je)})}},B.onerror=function(G){console.log("Error: ",G)}}};Object(r.useEffect)(function(){var g=Object(Ce.debounce)(q,500);return n&&n.canvas&&(n.canvas.on("object:added",g),n.canvas.on("object:removed",g),n.canvas.on("object:modified",g)),function(){n&&n.canvas&&(n.canvas.off("object:added",g),n.canvas.off("object:removed",g),n.canvas.off("object:modified",g))}},[n]);var S=function(w){if(a)try{var I=JSON.parse(a);w.loadFromJSON(I,function(){})}catch(B){}P(w)},ue=function(){return n&&c(n.canvas.toSVG())};return Object(e.jsxs)("div",{children:[Object(e.jsx)("button",{onClick:function(){return L("addCircle")},type:"button",children:"Add circle"}),Object(e.jsx)("button",{onClick:function(){return L("addRectangle")},type:"button",children:"Add Rectangle"}),Object(e.jsx)("button",{onClick:function(){return L("addLine")},type:"button",children:"Add Line"}),Object(e.jsx)("button",{onClick:function(){return L("addText")},type:"button",children:"Add Text"}),Object(e.jsx)("input",{type:"file",accept:"image/*",onChange:H}),Object(e.jsx)("div",{className:"fakeA4",style:{width:h,height:v},children:Object(e.jsx)(ne.a,{className:"fakeA4-canvas",onReady:S})}),Object(e.jsx)("button",{onClick:ue,type:"button",children:"Preview PDF without mock value"}),y&&Object(e.jsx)(Pe,{svgDef:y,width:h,height:v})]})},Te=Se,De=function(i){var s=i.name,a=i.field,o=Object(r.useCallback)(function(v){if(v.length)return Object(e.jsx)($.b,{children:Object(e.jsxs)(O.a,{children:[Object(e.jsx)(m.a,{id:"templates.required_variables"}),":"," ",v.map(function(d){return Object(e.jsx)(_.a,{color:"red",children:d},d)})]})})},[a,s]),h=Object(r.useCallback)(function(v,d){return v&&d.every(function(j){return v.includes(j)})?Promise.resolve():Promise.reject(new Error("No required variable  used"))},[a,s]),E=Object(r.useCallback)(function(){if(!a.readonly)switch(a.type){case"text":case"url":return Object(e.jsxs)(l.a.Fragment,{children:[Object(e.jsx)(C.a,{readonly:a.readonly,shouldUpdate:!0,width:"lg",name:s,label:Object(e.jsx)(m.a,{id:s}),rules:a.readonly?void 0:[{required:a.required,message:Object(e.jsx)(m.a,{id:"templates.this_required"})},{validator:function(){var v=Object(J.a)(F.a.mark(function j(y,c){return F.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",h(c,a.required_variables));case 1:case"end":return n.stop()}},j)}));function d(j,y){return v.apply(this,arguments)}return d}()}]}),o(a.required_variables)]});case"fabric.js":return Object(e.jsxs)(l.a.Fragment,{children:[Object(e.jsx)(b.b.Item,{shouldUpdate:!0,children:function(d){return Object(e.jsx)(Te,{initialValue:d.getFieldValue(s),onUpdate:function(y){return d.setFieldsValue(Object(z.a)({},s,JSON.stringify(y)))}})}}),Object(e.jsx)(ce.a,{name:s,shouldUpdate:!0,width:"lg",hidden:!0})]});case"html":return Object(e.jsxs)(l.a.Fragment,{children:[Object(e.jsx)(ce.a,{readonly:a.readonly,shouldUpdate:!0,width:"lg",label:Object(e.jsx)(m.a,{id:s}),name:s,tooltip:Object(e.jsx)(m.a,{id:"templates.html_tooltip"}),rules:a.readonly?void 0:[{required:a.required,message:Object(e.jsx)(m.a,{id:"templates.this_required"})},{validator:function(){var v=Object(J.a)(F.a.mark(function j(y,c){return F.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",h(c,a.required_variables));case 1:case"end":return n.stop()}},j)}));function d(j,y){return v.apply(this,arguments)}return d}()}]}),o(a.required_variables)]});case"mjml":return Object(e.jsxs)(l.a.Fragment,{children:[Object(e.jsxs)("p",{children:[Object(e.jsx)(m.a,{id:"templates.to_create_template"})," ",Object(e.jsx)("a",{target:"_blank",href:"https://mjml.io/try-it-live",children:"https://mjml.io/try-it-live"})]}),Object(e.jsx)(ce.a,{readonly:a.readonly,shouldUpdate:!0,width:"lg",label:Object(e.jsx)(m.a,{id:s}),name:s,tooltip:Object(e.jsx)(m.a,{id:"templates.mjml_tooltip"}),rules:a.readonly?void 0:[{required:a.required,message:Object(e.jsx)(m.a,{id:"templates.this_required"})},{validator:function(){var v=Object(J.a)(F.a.mark(function j(y,c){return F.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",h(c,a.required_variables));case 1:case"end":return n.stop()}},j)}));function d(j,y){return v.apply(this,arguments)}return d}()}]}),o(a.required_variables)]});default:return}},[a,s]);return Object(e.jsx)(l.a.Fragment,{children:E()})},Ae=De,Re=function(i,s){return i?Object.keys(i).reduce(function(a,o){return i[o][s]?Object(T.a)(Object(T.a)({},a),{},Object(z.a)({},o,o)):a},{}):{}},Ue=function(i){return Object.entries(i).map(function(s){return{key:s[0],content:s[1]}})},be=function(i){return Object.assign.apply(Object,[{}].concat(Object(X.a)(i)))},Ve=function(i){var s=["name","event","default"];return Object.keys(i).filter(function(a){return!s.includes(a)}).reduce(function(a,o){return a[o]=i[o],a},{})},oe={email:"EscolaLms\\TemplatesEmail\\Core\\EmailChannel",pdf:"EscolaLms\\TemplatesPdf\\Core\\PdfChannel"},Be=x.default=function(){var A=Object(m.i)(),i=Object(xe.g)(),s=i.template,a=i.id,o=a==="new",h=Object(r.useState)(!1),E=Object(M.a)(h,2),v=E[0],d=E[1],j=b.b.useForm(),y=Object(M.a)(j,1),c=y[0],R=Object(r.useState)(),n=Object(M.a)(R,2),P=n[0],L=n[1],q=Object(r.useState)(void 0),H=Object(M.a)(q,2),S=H[0],ue=H[1],g=Object(r.useState)(),w=Object(M.a)(g,2),I=w[0],B=w[1];Object(r.useEffect)(function(){Object(k.g)().then(function(p){L(p.success?p.data:{})})},[]),Object(r.useEffect)(function(){var p=c.getFieldsValue(),f=S&&Object.keys(S.sections).map(function(U){return Object(z.a)({},U,S.sections[U].default_content)});f&&o&&c.setFieldsValue(Object(T.a)(Object(T.a)({},p),be(f)))},[S]);var G=Object(r.useCallback)(function(p){if(p&&s){var f=P&&P[p][oe[s]];ue(f)}},[P,a]),de=Object(r.useCallback)(Object(J.a)(F.a.mark(function p(){var f,U,V;return F.a.wrap(function(Q){for(;;)switch(Q.prev=Q.next){case 0:return Q.next=2,Object(k.d)(Number(a));case 2:f=Q.sent,f.success&&(U=f.data.sections&&f.data.sections.map(function(D){return Object(z.a)({},D.key,D.content)}),V=U&&be(U),c.setFieldsValue(Object(T.a)(Object(T.a)({},f.data),V)),G(String(f.data.event)),d(!0));case 4:case"end":return Q.stop()}},p)})),[a,P]),je=Object(r.useCallback)(function(){var p=Object(J.a)(F.a.mark(function f(U){var V,re;return F.a.wrap(function(D){for(;;)switch(D.prev=D.next){case 0:if(re=Object(T.a)(Object(T.a)({},U),{},{channel:oe[s],sections:Ue(Ve(U))}),!o){D.next=8;break}return D.next=4,Object(k.a)(re);case 4:V=D.sent,V.success&&m.d.push("/templates/".concat(s,"/").concat(V.data.id)),D.next=11;break;case 8:return D.next=10,Object(k.f)(Number(a),re);case 10:V=D.sent;case 11:d(!0),ie.default.success(V.message);case 13:case"end":return D.stop()}},f)}));return function(f){return p.apply(this,arguments)}}(),[P,a]);return Object(r.useEffect)(function(){o||de()},[a,P]),Object(e.jsxs)(Oe.a,{title:o?Object(e.jsxs)("span",{children:[Object(e.jsx)(m.a,{id:"new"})," ",s," ",Object(e.jsx)(m.a,{id:"template"})]}):Object(e.jsxs)("span",{children:[Object(e.jsx)(m.a,{id:"edit"})," ",s," ",Object(e.jsx)(m.a,{id:"template"})]}),children:[Object(e.jsx)(pe.a,{size:"small",children:Object(e.jsxs)(b.b,{initialValues:{},onFinish:je,form:c,onValuesChange:function(){var f=c.getFieldsValue();G(f.event),d(!1)},children:[Object(e.jsxs)(b.b.Group,{children:[Object(e.jsx)(C.a,{width:"sm",name:"name",label:Object(e.jsx)(m.a,{id:"name"}),placeholder:A.formatMessage({id:"name"}),rules:[{required:!0,message:Object(e.jsx)(m.a,{id:"select"})}]}),Object(e.jsx)(u.a,{name:"event",width:"lg",label:Object(e.jsx)(m.a,{id:"event"}),valueEnum:P?Re(P,oe[s]):{},placeholder:A.formatMessage({id:"event"}),rules:[{required:!0,message:Object(e.jsx)(m.a,{id:"select"})}]}),Object(e.jsx)(b.b.Item,{label:Object(e.jsx)(m.a,{id:"templates.set_as_default_template"}),children:Object(e.jsx)(Y.a,{name:"default"})}),!o&&Object(e.jsx)(b.b.Item,{label:Object(e.jsx)(m.a,{id:"preview"}),children:Object(e.jsx)(ye,{disabled:!v,id:Number(a),type:s,onPreviewData:function(f){f&&f.data&&f.data.content&&B(f.data.content)}})})]}),!S&&!o?Object(e.jsx)(se.a,{}):S&&S.sections&&Object.keys(S.sections).map(function(p,f){var U=S.sections&&S.sections[p];return Object(e.jsxs)(l.a.Fragment,{children:[f===0&&Object(e.jsxs)(l.a.Fragment,{children:[Object(e.jsx)(Z.a,{children:Object(e.jsx)(m.a,{id:"templates.tokens"})}),Object(e.jsx)($.b,{children:Object(e.jsx)(O.a,{children:S.variables.map(function(V){return Object(e.jsx)(_.a,{color:"orange",children:V},V)})})})]}),Object(e.jsx)(Z.a,{}),Object(e.jsx)(Ae,{name:p,field:U})]},p)}),Object(e.jsx)(Z.a,{})]})}),I&&Object(e.jsx)(we,{initialValue:I,onRendered:function(){return B(void 0)}})]})}},"JAl+":function(W,x,t){},K4qu:function(W,x,t){},rWUb:function(W,x,t){"use strict";t.d(x,"e",function(){return _}),t.d(x,"d",function(){return Z}),t.d(x,"a",function(){return se}),t.d(x,"f",function(){return ie}),t.d(x,"b",function(){return M}),t.d(x,"g",function(){return z}),t.d(x,"c",function(){return le});var N=t("k1fw"),$=t("9og8"),me=t("WmNS"),O=t.n(me),K=t("9kvl");function _(r,l){return ee.apply(this,arguments)}function ee(){return ee=Object($.a)(O.a.mark(function r(l,b){return O.a.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.abrupt("return",Object(K.f)("/api/admin/templates",Object(N.a)({method:"GET",useCache:!1,params:Object(N.a)(Object(N.a)({},l),{},{per_page:l.pageSize&&l.pageSize,page:l.current&&l.current})},b||{})));case 1:case"end":return u.stop()}},r)})),ee.apply(this,arguments)}function Z(r,l){return te.apply(this,arguments)}function te(){return te=Object($.a)(O.a.mark(function r(l,b){return O.a.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.abrupt("return",Object(K.f)("/api/admin/templates/".concat(l),Object(N.a)({method:"GET"},b||{})));case 1:case"end":return u.stop()}},r)})),te.apply(this,arguments)}function se(r,l){return ae.apply(this,arguments)}function ae(){return ae=Object($.a)(O.a.mark(function r(l,b){return O.a.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.abrupt("return",Object(K.f)("/api/admin/templates",Object(N.a)({method:"POST",headers:{"Content-Type":"application/json"},data:l},b||{})));case 1:case"end":return u.stop()}},r)})),ae.apply(this,arguments)}function ie(r,l,b){return J.apply(this,arguments)}function J(){return J=Object($.a)(O.a.mark(function r(l,b,C){return O.a.wrap(function(Y){for(;;)switch(Y.prev=Y.next){case 0:return Y.abrupt("return",Object(K.f)("/api/admin/templates/".concat(l),Object(N.a)({method:"PATCH",headers:{"Content-Type":"application/json"},data:b},C||{})));case 1:case"end":return Y.stop()}},r)})),J.apply(this,arguments)}function M(r,l){return X.apply(this,arguments)}function X(){return X=Object($.a)(O.a.mark(function r(l,b){return O.a.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.abrupt("return",Object(K.f)("/api/admin/templates/".concat(l),Object(N.a)({method:"DELETE",headers:{"Content-Type":"application/json"}},b||{})));case 1:case"end":return u.stop()}},r)})),X.apply(this,arguments)}function z(r){return T.apply(this,arguments)}function T(){return T=Object($.a)(O.a.mark(function r(l){return O.a.wrap(function(C){for(;;)switch(C.prev=C.next){case 0:return C.abrupt("return",Object(K.f)("/api/admin/templates/variables",Object(N.a)({method:"GET"},l||{})));case 1:case"end":return C.stop()}},r)})),T.apply(this,arguments)}function le(r,l){return F.apply(this,arguments)}function F(){return F=Object($.a)(O.a.mark(function r(l,b){return O.a.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.abrupt("return",Object(K.f)("/api/admin/templates/".concat(l,"/preview"),Object(N.a)({method:"GET"},b||{})));case 1:case"end":return u.stop()}},r)})),F.apply(this,arguments)}}}]);

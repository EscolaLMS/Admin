(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{"4EEj":function(G,h,t){"use strict";t.d(h,"a",function(){return a});var c=t("+L6B"),m=t("2/Rp"),n=t("q1tI"),g=t("55Ip"),S=t("tMyG"),j=t("pDTe"),w=t("k1fw"),b=t("tJVT"),E=t("KAy6"),y=t("cYju"),D=t("nzng"),e=t("nKUr"),_=function(x){return Object(y.unescape)(x)},L=function(){return Object(e.jsx)("pre",{children:"loading..."})},r=function(x){var O=x.id,M=x.onSubmit,H=Object(n.useState)(100),U=Object(b.a)(H,2),$=U[0],K=U[1],v=Object(n.useRef)(null),W=Object(n.useState)({state:"initial"}),T=Object(b.a)(W,2),C=T[0],B=T[1],A=Object(n.useContext)(j.EditorContext),o=A.state,F=A.getEditorConfig,V=A.submitContent;Object(n.useEffect)(function(){F&&F(O)},[O,F]),Object(n.useEffect)(function(){var I=function(u){if(u.origin===window.location.origin){if(u.data.iFrameHeight&&K(u.data.iFrameHeight),u.data.h5pEditorStatus){var s=u.data;if(s.h5pEditorStatus==="success"&&o.value==="loaded")return B({state:"loading"}),Object(D.b)(Object(w.a)(Object(w.a)({},s.data),{},{nonce:o.settings.nonce}),O).then(function(l){M&&l&&l.success&&l.data.id&&typeof l.data.id!="undefined"&&M(l.data),B({state:"loaded"})}).catch(function(l){B({state:"error",error:l.toString()})});s.h5pEditorStatus==="error"&&console.log(s.error)}return null}};return window&&window.addEventListener("message",I),function(){window&&window.removeEventListener("message",I)}},[v,V,o,M,O]);var N=Object(n.useMemo)(function(){var I,P,u,s=o.value==="loaded"&&o.settings;if(!s)return"";var l=o.value==="loaded"&&(I=o.settings)!==null&&I!==void 0&&I.contents?(P=o.settings)===null||P===void 0?void 0:P.contents[Object.keys((u=o.settings)===null||u===void 0?void 0:u.contents)[0]]:null,z=l?l.library:"",Y=`

    let params;
    window.addEventListener('message', (event) => {
        if (event.data.hasOwnProperty('editorParams')) {
            params = event.data.editorParams;
            H5P.jQuery(document).ready(ns.init);
        }        
      });

      (function ($) {
          const postMessage = (data) => parent.postMessage(data, "`.concat(window.location.origin,`");
          const resizeObserver = new ResizeObserver((entries) =>
              postMessage({ iFrameHeight: entries[0].contentRect.height })
          );
          
          ns.init = function () {
              ns.$ = H5P.jQuery;
              ns.basePath = H5PIntegration.editor.libraryUrl;
              ns.fileIcon = H5PIntegration.editor.fileIcon;
              ns.ajaxPath = H5PIntegration.editor.ajaxPath;
              ns.filesPath = H5PIntegration.editor.filesPath;
              ns.apiVersion = H5PIntegration.editor.apiVersion;
              ns.copyrightSemantics = H5PIntegration.editor.copyrightSemantics;
              ns.assets = H5PIntegration.editor.assets;
              ns.baseUrl = H5PIntegration.baseUrl;
              ns.metadataSemantics = H5PIntegration.editor.metadataSemantics;
              if (H5PIntegration.editor.nodeVersionId !== undefined) {
                  ns.contentId = H5PIntegration.editor.nodeVersionId;
              }
              const h5peditor = new ns.Editor('`).concat(z,`', params, document.getElementById("h5p-editor"));
              H5P.externalDispatcher.on("xAPI", (event) => postMessage(event));
              H5P.externalDispatcher.on("resize", (event) => postMessage(event));
              resizeObserver.observe(document.querySelector(".h5p-editor-wrapper"));
              $("#h5p-editor-submit").click(() => {
                  h5peditor.getContent(data => postMessage({h5pEditorStatus:"success", data}), error =>  postMessage({h5pEditorStatus:"error", error}))
              } );
          };
          ns.getAjaxUrl = function (action, parameters) {
              var url = H5PIntegration.editor.ajaxPath + action;
              if (action === "files" && `).concat(s.filesAjaxPath?1:0,`) {
                url = "`).concat(s.filesAjaxPath,`";
              }
              // url += action === "files" ? "/`).concat(s.nonce,`" : "";
              if (parameters !== undefined) {
                  var separator = url.indexOf("?") === -1 ? "?" : "&";
                  for (var property in parameters) {
                      if (parameters.hasOwnProperty(property)) {
                          url += separator + property + "=" + parameters[property];
                          separator = "&";
                      }
                  }
              }
              return url;
          };
          
      })(H5P.jQuery);
      `),X=Object(E.renderToStaticMarkup)(Object(e.jsxs)("html",{children:[Object(e.jsxs)("head",{children:[Object(e.jsx)("style",{children:" body, html {margin:0; padding:0;}"}),Object(e.jsx)("script",{dangerouslySetInnerHTML:{__html:"const H5PIntegration = window.H5PIntegration = ".concat(JSON.stringify(s),"; ")}}),s.core.scripts.map(function(R){return Object(e.jsx)("script",{src:R},R)}),s.core.styles.map(function(R){return Object(e.jsx)("link",{type:"text/css",rel:"stylesheet",href:R},R)})]}),Object(e.jsx)("body",{children:Object(e.jsxs)("div",{className:"h5p-editor-wrapper",children:[Object(e.jsx)("div",{id:"h5p-editor",className:"height-observer",children:"loading"}),Object(e.jsx)("p",{}),Object(e.jsx)("button",{className:"h5p-core-button",id:"h5p-editor-submit",children:"submit data"}),Object(e.jsx)("script",{dangerouslySetInnerHTML:{__html:Y}})]})})]})),Z=_(X);return Z},[o]),J=function(){var P,u,s,l=o.value==="loaded"&&(P=o.settings)!==null&&P!==void 0&&P.contents?(u=o.settings)===null||u===void 0?void 0:u.contents[Object.keys((s=o.settings)===null||s===void 0?void 0:s.contents)[0]]:null,z=l?l.jsonContent:"";v.current&&v.current.contentWindow&&v.current.contentWindow.postMessage({editorParams:z},window.location.origin)},Q=Object(n.useMemo)(function(){return window.URL.createObjectURL(new Blob([N],{type:"text/html"}))},[N]);return Object(e.jsxs)("div",{className:"h5p-editor",style:{height:$,position:"relative"},children:[C.state==="loading"&&Object(e.jsx)(L,{}),C.state==="error"&&Object(e.jsxs)("p",{children:[Object(e.jsx)("pre",{children:"Error:"})," ",C.error]}),N&&Object(e.jsx)("iframe",{onLoad:J,ref:v,title:"editor",src:Q,style:{width:"100%",height:"100%",margin:0,padding:0,border:"none"}})]})},i=r,d=t("9kvl"),a=function(x){var O,M,H=x.id,U=x.onSubmit,$=Object(d.i)(),K=Object(n.useContext)(j.EditorContext),v=K.state,W="cid-".concat(H),T=v.value==="loaded"&&((O=v.settings)===null||O===void 0?void 0:O.contents)&&((M=v.settings)===null||M===void 0?void 0:M.contents[W]),C=T?T.title:H?"Loading Content...":"New Content";return Object(e.jsx)(S.a,{title:Object(e.jsxs)(e.Fragment,{children:[Object(e.jsx)(d.a,{id:"H5P_new_content_title"})," ".concat(C)]}),extra:[H&&Object(e.jsx)(m.a,{type:"primary",children:Object(e.jsx)(g.a,{to:"/h5ps/preview/".concat(H),children:Object(e.jsx)(d.a,{id:"preview"})})})],header:{breadcrumb:{routes:[{path:"h5ps",breadcrumbName:$.formatMessage({id:"H5P"})},{path:C,breadcrumbName:$.formatMessage({id:"form"})}]}},children:Object(e.jsx)(r,{id:H,onSubmit:function(A){return U(Number(A.id))}})})},p=a},nzng:function(G,h,t){"use strict";t.d(h,"d",function(){return S}),t.d(h,"c",function(){return w}),t.d(h,"b",function(){return E}),t.d(h,"e",function(){return D}),t.d(h,"a",function(){return _});var c=t("qLMh"),m=t("k1fw"),n=t("9og8"),g=t("9kvl");function S(r,i){return j.apply(this,arguments)}function j(){return j=Object(n.a)(Object(c.a)().mark(function r(i,d){return Object(c.a)().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return p.abrupt("return",Object(g.f)("/api/admin/hh5p/content",Object(m.a)({method:"GET",useCache:!1,params:Object(m.a)(Object(m.a)({},i),{},{per_page:i.pageSize,page:i.current})},d||{})));case 1:case"end":return p.stop()}},r)})),j.apply(this,arguments)}function w(r,i){return b.apply(this,arguments)}function b(){return b=Object(n.a)(Object(c.a)().mark(function r(i,d){return Object(c.a)().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return p.abrupt("return",Object(g.f)("/api/admin/hh5p/content/".concat(i),Object(m.a)({method:"GET",useCache:!1},d||{})));case 1:case"end":return p.stop()}},r)})),b.apply(this,arguments)}function E(r,i,d){return y.apply(this,arguments)}function y(){return y=Object(n.a)(Object(c.a)().mark(function r(i,d,a){return Object(c.a)().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.abrupt("return",Object(g.f)(d?"/api/admin/hh5p/content/".concat(d):"/api/admin/hh5p/content",Object(m.a)({method:"POST",headers:{"Content-Type":"application/json"},data:i,useCache:!1},a||{})));case 1:case"end":return f.stop()}},r)})),y.apply(this,arguments)}function D(r){return e.apply(this,arguments)}function e(){return e=Object(n.a)(Object(c.a)().mark(function r(i){return Object(c.a)().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",Object(g.f)("/api/admin/hh5p/content/".concat(i),{method:"DELETE"}));case 1:case"end":return a.stop()}},r)})),e.apply(this,arguments)}function _(r){return L.apply(this,arguments)}function L(){return L=Object(n.a)(Object(c.a)().mark(function r(i){return Object(c.a)().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",Object(g.f)("/api/admin/hh5p/content?per_page=0",Object(m.a)({method:"GET",useCache:!1},i||{})));case 1:case"end":return a.stop()}},r)})),L.apply(this,arguments)}},pj0m:function(G,h,t){"use strict";t.r(h);var c=t("Ty5D"),m=t("9kvl"),n=t("pDTe"),g=t.n(n),S=t("4EEj"),j=t("nKUr"),w=t.n(j);h.default=function(){var b=Object(c.l)(),E=b.h5p,y=Object(m.i)(),D=y.locale.split("-")[0];return Object(j.jsx)(n.EditorContextProvider,{defaultLang:D,url:"".concat(window.REACT_APP_API_URL||"https://api-stage.escolalms.com","/api/admin/hh5p"),children:Object(j.jsx)(S.a,{onSubmit:function(_){return E==="new"&&m.d.push("/h5ps/".concat(_))},id:E==="new"?void 0:E})})}}}]);

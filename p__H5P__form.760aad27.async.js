(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{"4EEj":function(G,h,t){"use strict";t.d(h,"a",function(){return m});var A=t("+L6B"),i=t("2/Rp"),n=t("q1tI"),f=t("55Ip"),j=t("tMyG"),b=t("pDTe"),E=t("k1fw"),H=t("tJVT"),v=t("KAy6"),L=t("cYju"),y=t("nzng"),e=t("nKUr"),C=function(p){return Object(L.unescape)(p)},B=function(){return Object(e.jsx)("pre",{children:"loading..."})},I=function(p){var O=p.id,x=p.onSubmit,M=Object(n.useState)(100),U=Object(H.a)(M,2),R=U[0],K=U[1],g=Object(n.useRef)(null),W=Object(n.useState)({state:"initial"}),w=Object(H.a)(W,2),S=w[0],$=w[1],D=Object(n.useContext)(b.EditorContext),d=D.state,F=D.getEditorConfig,V=D.submitContent;Object(n.useEffect)(function(){F&&F(O)},[O,F]),Object(n.useEffect)(function(){var _=function(u){if(u.origin===window.location.origin){if(u.data.iFrameHeight&&K(u.data.iFrameHeight),u.data.h5pEditorStatus){var a=u.data;if(a.h5pEditorStatus==="success"&&d.value==="loaded")return $({state:"loading"}),Object(y.b)(Object(E.a)(Object(E.a)({},a.data),{},{nonce:d.settings.nonce}),O).then(function(l){x&&l&&l.success&&l.data.id&&typeof l.data.id!="undefined"&&x(l.data),$({state:"loaded"})}).catch(function(l){$({state:"error",error:l.toString()})});a.h5pEditorStatus==="error"&&console.log(a.error)}return null}};return window&&window.addEventListener("message",_),function(){window&&window.removeEventListener("message",_)}},[g,V,d,x,O]);var N=Object(n.useMemo)(function(){var _,P,u,a=d.value==="loaded"&&d.settings;if(!a)return"";var l=d.value==="loaded"&&((_=d.settings)===null||_===void 0?void 0:_.contents)?(P=d.settings)===null||P===void 0?void 0:P.contents[Object.keys((u=d.settings)===null||u===void 0?void 0:u.contents)[0]]:null,z=l?l.library:"",Y=`

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
              if (action === "files" && `).concat(a.filesAjaxPath?1:0,`) {
                url = "`).concat(a.filesAjaxPath,`";
              }
              // url += action === "files" ? "/`).concat(a.nonce,`" : "";
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
      `),X=Object(v.renderToStaticMarkup)(Object(e.jsxs)("html",{children:[Object(e.jsxs)("head",{children:[Object(e.jsx)("style",{children:" body, html {margin:0; padding:0;}"}),Object(e.jsx)("script",{dangerouslySetInnerHTML:{__html:"const H5PIntegration = window.H5PIntegration = ".concat(JSON.stringify(a),"; ")}}),a.core.scripts.map(function(T){return Object(e.jsx)("script",{src:T},T)}),a.core.styles.map(function(T){return Object(e.jsx)("link",{type:"text/css",rel:"stylesheet",href:T},T)})]}),Object(e.jsx)("body",{children:Object(e.jsxs)("div",{className:"h5p-editor-wrapper",children:[Object(e.jsx)("div",{id:"h5p-editor",className:"height-observer",children:"loading"}),Object(e.jsx)("p",{}),Object(e.jsx)("button",{className:"h5p-core-button",id:"h5p-editor-submit",children:"submit data"}),Object(e.jsx)("script",{dangerouslySetInnerHTML:{__html:Y}})]})})]})),Z=C(X);return Z},[d]),J=function(){var P,u,a,l=d.value==="loaded"&&((P=d.settings)===null||P===void 0?void 0:P.contents)?(u=d.settings)===null||u===void 0?void 0:u.contents[Object.keys((a=d.settings)===null||a===void 0?void 0:a.contents)[0]]:null,z=l?l.jsonContent:"";g.current&&g.current.contentWindow&&g.current.contentWindow.postMessage({editorParams:z},window.location.origin)},Q=Object(n.useMemo)(function(){return window.URL.createObjectURL(new Blob([N],{type:"text/html"}))},[N]);return Object(e.jsxs)("div",{className:"h5p-editor",style:{height:R,position:"relative"},children:[S.state==="loading"&&Object(e.jsx)(B,{}),S.state==="error"&&Object(e.jsxs)("p",{children:[Object(e.jsx)("pre",{children:"Error:"})," ",S.error]}),N&&Object(e.jsx)("iframe",{onLoad:J,ref:g,title:"editor",src:Q,style:{width:"100%",height:"100%",margin:0,padding:0,border:"none"}})]})},s=I,r=t("9kvl"),m=function(p){var O,x,M=p.id,U=p.onSubmit,R=Object(r.i)(),K=Object(n.useContext)(b.EditorContext),g=K.state,W="cid-".concat(M),w=g.value==="loaded"&&((O=g.settings)===null||O===void 0?void 0:O.contents)&&((x=g.settings)===null||x===void 0?void 0:x.contents[W]),S=w?w.title:M?"Loading Content...":"New Content";return Object(e.jsx)(j.a,{title:Object(e.jsxs)(e.Fragment,{children:[Object(e.jsx)(r.a,{id:"H5P_new_content_title"})," ".concat(S)]}),extra:[M&&Object(e.jsx)(i.a,{type:"primary",children:Object(e.jsx)(f.a,{to:"/h5ps/preview/".concat(M),children:Object(e.jsx)(r.a,{id:"preview"})})})],header:{breadcrumb:{routes:[{path:"h5ps",breadcrumbName:R.formatMessage({id:"H5P"})},{path:S,breadcrumbName:R.formatMessage({id:"form"})}]}},children:Object(e.jsx)(I,{id:M,onSubmit:function(D){return U(Number(D.id))}})})},o=m},nzng:function(G,h,t){"use strict";t.d(h,"d",function(){return b}),t.d(h,"c",function(){return H}),t.d(h,"b",function(){return L}),t.d(h,"e",function(){return e}),t.d(h,"a",function(){return B});var A=t("WmNS"),i=t.n(A),n=t("k1fw"),f=t("9og8"),j=t("9kvl");function b(s,r){return E.apply(this,arguments)}function E(){return E=Object(f.a)(i.a.mark(function s(r,m){return i.a.wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.abrupt("return",Object(j.f)("/api/admin/hh5p/content",Object(n.a)({method:"GET",useCache:!1,params:Object(n.a)(Object(n.a)({},r),{},{per_page:r.pageSize,page:r.current})},m||{})));case 1:case"end":return c.stop()}},s)})),E.apply(this,arguments)}function H(s,r){return v.apply(this,arguments)}function v(){return v=Object(f.a)(i.a.mark(function s(r,m){return i.a.wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.abrupt("return",Object(j.f)("/api/admin/hh5p/content/".concat(r),Object(n.a)({method:"GET",useCache:!1},m||{})));case 1:case"end":return c.stop()}},s)})),v.apply(this,arguments)}function L(s,r,m){return y.apply(this,arguments)}function y(){return y=Object(f.a)(i.a.mark(function s(r,m,o){return i.a.wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return p.abrupt("return",Object(j.f)(m?"/api/admin/hh5p/content/".concat(m):"/api/admin/hh5p/content",Object(n.a)({method:"POST",headers:{"Content-Type":"application/json"},data:r,useCache:!1},o||{})));case 1:case"end":return p.stop()}},s)})),y.apply(this,arguments)}function e(s){return C.apply(this,arguments)}function C(){return C=Object(f.a)(i.a.mark(function s(r){return i.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.abrupt("return",Object(j.f)("/api/admin/hh5p/content/".concat(r),{method:"DELETE"}));case 1:case"end":return o.stop()}},s)})),C.apply(this,arguments)}function B(s){return I.apply(this,arguments)}function I(){return I=Object(f.a)(i.a.mark(function s(r){return i.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.abrupt("return",Object(j.f)("/api/admin/hh5p/content?per_page=0",Object(n.a)({method:"GET",useCache:!1},r||{})));case 1:case"end":return o.stop()}},s)})),I.apply(this,arguments)}},pj0m:function(G,h,t){"use strict";t.r(h);var A=t("Ty5D"),i=t("9kvl"),n=t("pDTe"),f=t.n(n),j=t("4EEj"),b=t("nKUr"),E=t.n(b);h.default=function(){var H=Object(A.l)(),v=H.h5p;return Object(b.jsx)(n.EditorContextProvider,{url:"".concat("https://api-stage.escolalms.com","/api/admin/hh5p"),children:Object(b.jsx)(j.a,{onSubmit:function(y){return v==="new"&&i.d.push("/h5ps/".concat(y))},id:v==="new"?void 0:v})})}}}]);

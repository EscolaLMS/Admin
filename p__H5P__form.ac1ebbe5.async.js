(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"4EEj":function(z,p,t){"use strict";t.d(p,"a",function(){return l});var v=t("+L6B"),O=t("2/Rp"),u=t("q1tI"),s=t("55Ip"),h=t("tMyG"),D=t("pDTe"),b=t("k1fw"),P=t("tJVT"),H=t("KAy6"),T=t("cYju"),g=t("nzng"),e=t("nKUr"),M=function(m){return Object(T.unescape)(m)},W=function(){return Object(e.jsx)("pre",{children:"loading..."})},C=function(m){var E=m.id,x=m.onSubmit,_=Object(u.useState)(100),U=Object(P.a)(_,2),R=U[0],B=U[1],f=Object(u.useRef)(null),$=Object(u.useState)({state:"initial"}),A=Object(P.a)($,2),S=A[0],K=A[1],w=Object(u.useContext)(D.EditorContext),c=w.state,F=w.getEditorConfig,V=w.submitContent;Object(u.useEffect)(function(){F&&F(E)},[E,F]),Object(u.useEffect)(function(){var I=function(d){if(d.origin===window.location.origin&&(d.data.iFrameHeight&&B(d.data.iFrameHeight),d.data.h5pEditorStatus)){var r=d.data;if(r.h5pEditorStatus==="success"&&c.value==="loaded")return K({state:"loading"}),Object(g.b)(Object(b.a)(Object(b.a)({},r.data),{},{nonce:c.settings.nonce}),E).then(function(j){x&&j&&x(j.data),K({state:"loaded"})}).catch(function(j){K({state:"error",error:j.toString()})});r.h5pEditorStatus==="error"&&console.log(r.error)}};return window&&window.addEventListener("message",I),function(){window&&window.removeEventListener("message",I)}},[f,V,c,x,E]);var G=Object(u.useMemo)(function(){var I,y,d,r=c.value==="loaded"&&c.settings;if(!r)return"";var j=c.value==="loaded"&&(I=c.settings)!==null&&I!==void 0&&I.contents?(y=c.settings)===null||y===void 0?void 0:y.contents[Object.keys((d=c.settings)===null||d===void 0?void 0:d.contents)[0]]:null,N=j?j.library:"",Q=`

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
              const h5peditor = new ns.Editor('`).concat(N,`', params, document.getElementById("h5p-editor"));
              H5P.externalDispatcher.on("xAPI", (event) => postMessage(event));
              H5P.externalDispatcher.on("resize", (event) => postMessage(event));
              resizeObserver.observe(document.querySelector(".h5p-editor-wrapper"));
              $("#h5p-editor-submit").click(() => {
                  h5peditor.getContent(data => postMessage({h5pEditorStatus:"success", data}), error =>  postMessage({h5pEditorStatus:"error", error}))
              } );
          };
          ns.getAjaxUrl = function (action, parameters) {
              var url = H5PIntegration.editor.ajaxPath + action;
              if (action === "files" && `).concat(r.filesAjaxPath?1:0,`) {
                url = "`).concat(r.filesAjaxPath,`";
              }
              // url += action === "files" ? "/`).concat(r.nonce,`" : "";
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
      `),Y=Object(H.renderToStaticMarkup)(Object(e.jsxs)("html",{children:[Object(e.jsxs)("head",{children:[Object(e.jsx)("style",{children:" body, html {margin:0; padding:0;}"}),Object(e.jsx)("script",{dangerouslySetInnerHTML:{__html:"const H5PIntegration = window.H5PIntegration = ".concat(JSON.stringify(r),"; ")}}),r.core.scripts.map(function(L){return Object(e.jsx)("script",{src:L},L)}),r.core.styles.map(function(L){return Object(e.jsx)("link",{type:"text/css",rel:"stylesheet",href:L},L)})]}),Object(e.jsx)("body",{children:Object(e.jsxs)("div",{className:"h5p-editor-wrapper",children:[Object(e.jsx)("div",{id:"h5p-editor",className:"height-observer",children:"loading"}),Object(e.jsx)("p",{}),Object(e.jsx)("button",{className:"h5p-core-button",id:"h5p-editor-submit",children:"submit data"}),Object(e.jsx)("script",{dangerouslySetInnerHTML:{__html:Q}})]})})]})),X=M(Y);return X},[c]),J=function(){var y,d,r,j=c.value==="loaded"&&(y=c.settings)!==null&&y!==void 0&&y.contents?(d=c.settings)===null||d===void 0?void 0:d.contents[Object.keys((r=c.settings)===null||r===void 0?void 0:r.contents)[0]]:null,N=j?j.jsonContent:"";f.current&&f.current.contentWindow&&f.current.contentWindow.postMessage({editorParams:N},window.location.origin)};return Object(e.jsxs)("div",{className:"h5p-editor",style:{height:R,position:"relative"},children:[S.state==="loading"&&Object(e.jsx)(W,{}),S.state==="error"&&Object(e.jsxs)("p",{children:[Object(e.jsx)("pre",{children:"Error:"})," ",S.error]}),G&&Object(e.jsx)("iframe",{onLoad:J,ref:f,title:"editor",srcDoc:G,style:{width:"100%",height:"100%",margin:0,padding:0,border:"none"}})]})},a=C,n=t("9kvl"),l=function(m){var E,x,_=m.id,U=m.onSubmit,R=Object(n.i)(),B=Object(u.useContext)(D.EditorContext),f=B.state,$="cid-".concat(_),A=f.value==="loaded"&&((E=f.settings)===null||E===void 0?void 0:E.contents)&&((x=f.settings)===null||x===void 0?void 0:x.contents[$]),S=A?A.title:_?"Loading Content...":"New Content";return Object(e.jsx)(h.a,{title:Object(e.jsxs)(e.Fragment,{children:[Object(e.jsx)(n.a,{id:"H5P_new_content_title"})," ".concat(S)]}),extra:[_&&Object(e.jsx)(O.a,{type:"primary",children:Object(e.jsx)(s.a,{to:"/h5ps/preview/".concat(_),children:Object(e.jsx)(n.a,{id:"preview"})})})],header:{breadcrumb:{routes:[{path:"h5ps",breadcrumbName:R.formatMessage({id:"H5P"})},{path:S,breadcrumbName:R.formatMessage({id:"form"})}]}},children:Object(e.jsx)(C,{id:_,onSubmit:function(w){return U(w.id)}})})},i=l},nzng:function(z,p,t){"use strict";t.d(p,"d",function(){return D}),t.d(p,"c",function(){return P}),t.d(p,"b",function(){return T}),t.d(p,"e",function(){return e}),t.d(p,"a",function(){return W});var v=t("k1fw"),O=t("9og8"),u=t("WmNS"),s=t.n(u),h=t("9kvl");function D(a,n){return b.apply(this,arguments)}function b(){return b=Object(O.a)(s.a.mark(function a(n,l){return s.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.abrupt("return",Object(h.f)("/api/admin/hh5p/content",Object(v.a)({method:"GET",useCache:!1,params:Object(v.a)(Object(v.a)({},n),{},{per_page:n.pageSize,page:n.current})},l||{})));case 1:case"end":return o.stop()}},a)})),b.apply(this,arguments)}function P(a,n){return H.apply(this,arguments)}function H(){return H=Object(O.a)(s.a.mark(function a(n,l){return s.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.abrupt("return",Object(h.f)("/api/admin/hh5p/content/".concat(n),Object(v.a)({method:"GET",useCache:!1},l||{})));case 1:case"end":return o.stop()}},a)})),H.apply(this,arguments)}function T(a,n,l){return g.apply(this,arguments)}function g(){return g=Object(O.a)(s.a.mark(function a(n,l,i){return s.a.wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.abrupt("return",Object(h.f)(typeof l=="number"?"/api/admin/hh5p/content/".concat(l):"/api/admin/hh5p/content",Object(v.a)({method:"POST",headers:{"Content-Type":"application/json"},data:n,useCache:!1},i||{})));case 1:case"end":return m.stop()}},a)})),g.apply(this,arguments)}function e(a){return M.apply(this,arguments)}function M(){return M=Object(O.a)(s.a.mark(function a(n){return s.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.abrupt("return",Object(h.f)("/api/admin/hh5p/content/".concat(n),{method:"DELETE"}));case 1:case"end":return i.stop()}},a)})),M.apply(this,arguments)}function W(a){return C.apply(this,arguments)}function C(){return C=Object(O.a)(s.a.mark(function a(n){return s.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.abrupt("return",Object(h.f)("/api/admin/hh5p/content?per_page=0",Object(v.a)({method:"GET",useCache:!1},n||{})));case 1:case"end":return i.stop()}},a)})),C.apply(this,arguments)}},pj0m:function(z,p,t){"use strict";t.r(p);var v=t("q1tI"),O=t.n(v),u=t("Ty5D"),s=t("9kvl"),h=t("pDTe"),D=t.n(h),b=t("4EEj"),P=t("nKUr"),H=t.n(P);p.default=function(){var T=Object(u.g)(),g=T.h5p;return Object(P.jsx)(h.EditorContextProvider,{url:"".concat("https://api-stage.escolalms.com","/api/admin/hh5p"),children:Object(P.jsx)(b.a,{onSubmit:function(M){return g==="new"&&s.d.push("/h5ps/".concat(M))},id:g==="new"?void 0:g})})}}}]);

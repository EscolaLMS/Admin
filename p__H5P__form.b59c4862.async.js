(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"4EEj":function(V,b,e){"use strict";e.d(b,"a",function(){return $});var R=e("+L6B"),F=e("2/Rp"),s=e("q1tI"),y=e("55Ip"),f=e("tMyG"),I=e("pDTe"),P=e("k1fw"),p=e("tJVT"),K=e("KAy6"),H=e("cYju"),t=e("nKUr"),B=function(l){return Object(H.unescape)(l)},S=function(){return Object(t.jsx)("pre",{children:"loading..."})},W=function(l){var c=l.id,u=l.onSubmit,v=Object(s.useState)(100),E=Object(p.a)(v,2),x=E[0],w=E[1],i=Object(s.useRef)(null),L=Object(s.useState)({state:"initial"}),j=Object(p.a)(L,2),g=j[0],M=j[1],h=Object(s.useContext)(I.EditorContext),r=h.state,T=h.getEditorConfig,A=h.submitContent;Object(s.useEffect)(function(){T&&T(c)},[c,T]),Object(s.useEffect)(function(){var m=function(a){if(a.origin===window.location.origin&&(a.data.iFrameHeight&&w(a.data.iFrameHeight),a.data.h5pEditorStatus)){var n=a.data;if(n.h5pEditorStatus==="success"&&r.value==="loaded")return M({state:"loading"}),A&&A(Object(P.a)(Object(P.a)({},n.data),{},{nonce:r.settings.nonce}),c).then(function(o){u&&o&&u(o),M({state:"loaded"})}).catch(function(o){M({state:"error",error:o.toString()})});n.h5pEditorStatus==="error"&&console.log(n.error)}};return window&&window.addEventListener("message",m),function(){window&&window.removeEventListener("message",m)}},[i,A,r,u,c]);var N=Object(s.useMemo)(function(){var m,d,a,n=r.value==="loaded"&&r.settings;if(!n)return"";var o=r.value==="loaded"&&(m=r.settings)!==null&&m!==void 0&&m.contents?(d=r.settings)===null||d===void 0?void 0:d.contents[Object.keys((a=r.settings)===null||a===void 0?void 0:a.contents)[0]]:null,U=o?o.library:"",J=`

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
              const h5peditor = new ns.Editor('`).concat(U,`', params, document.getElementById("h5p-editor"));
              H5P.externalDispatcher.on("xAPI", (event) => postMessage(event));
              H5P.externalDispatcher.on("resize", (event) => postMessage(event));
              resizeObserver.observe(document.querySelector(".h5p-editor-wrapper"));
              $("#h5p-editor-submit").click(() => {
                  h5peditor.getContent(data => postMessage({h5pEditorStatus:"success", data}), error =>  postMessage({h5pEditorStatus:"error", error}))
              } );
          };
          ns.getAjaxUrl = function (action, parameters) {
              var url = H5PIntegration.editor.ajaxPath + action;
              if (action === "files" && `).concat(n.filesAjaxPath?1:0,`) {
                url = "`).concat(n.filesAjaxPath,`";
              }
              // url += action === "files" ? "/`).concat(n.nonce,`" : "";
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
      `),Q=Object(K.renderToStaticMarkup)(Object(t.jsxs)("html",{children:[Object(t.jsxs)("head",{children:[Object(t.jsx)("style",{children:" body, html {margin:0; padding:0;}"}),Object(t.jsx)("script",{dangerouslySetInnerHTML:{__html:"const H5PIntegration = window.H5PIntegration = ".concat(JSON.stringify(n),"; ")}}),n.core.scripts.map(function(O){return Object(t.jsx)("script",{src:O},O)}),n.core.styles.map(function(O){return Object(t.jsx)("link",{type:"text/css",rel:"stylesheet",href:O},O)})]}),Object(t.jsx)("body",{children:Object(t.jsxs)("div",{className:"h5p-editor-wrapper",children:[Object(t.jsx)("div",{id:"h5p-editor",className:"height-observer",children:"loading"}),Object(t.jsx)("p",{}),Object(t.jsx)("button",{className:"h5p-core-button",id:"h5p-editor-submit",children:"submit data"}),Object(t.jsx)("script",{dangerouslySetInnerHTML:{__html:J}})]})})]})),G=B(Q);return G},[r]),z=function(){var d,a,n,o=r.value==="loaded"&&(d=r.settings)!==null&&d!==void 0&&d.contents?(a=r.settings)===null||a===void 0?void 0:a.contents[Object.keys((n=r.settings)===null||n===void 0?void 0:n.contents)[0]]:null,U=o?o.jsonContent:"";i.current&&i.current.contentWindow&&i.current.contentWindow.postMessage({editorParams:U},window.location.origin)};return Object(t.jsxs)("div",{className:"h5p-editor",style:{height:x,position:"relative"},children:[g.state==="loading"&&Object(t.jsx)(S,{}),g.state==="error"&&Object(t.jsxs)("p",{children:[Object(t.jsx)("pre",{children:"Error:"})," ",g.error]}),N&&Object(t.jsx)("iframe",{onLoad:z,ref:i,title:"editor",srcDoc:N,style:{width:"100%",height:"100%",margin:0,padding:0,border:"none"}})]})},Y=W,C=e("9kvl"),$=function(l){var c,u,v=l.id,E=l.onSubmit,x=Object(C.i)(),w=Object(s.useContext)(I.EditorContext),i=w.state,L="cid-".concat(v),j=i.value==="loaded"&&((c=i.settings)===null||c===void 0?void 0:c.contents)&&((u=i.settings)===null||u===void 0?void 0:u.contents[L]),g=j?j.title:v?"Loading Content...":"New Content";return Object(t.jsx)(f.a,{title:Object(t.jsxs)(t.Fragment,{children:[Object(t.jsx)(C.a,{id:"H5P_new_content_title"})," ".concat(g)]}),extra:[v&&Object(t.jsx)(F.a,{type:"primary",children:Object(t.jsx)(y.a,{to:"/h5ps/preview/".concat(v),children:Object(t.jsx)(C.a,{id:"preview"})})})],header:{breadcrumb:{routes:[{path:"h5ps",breadcrumbName:x.formatMessage({id:"H5P"})},{path:g,breadcrumbName:x.formatMessage({id:"form"})}]}},children:Object(t.jsx)(W,{id:v,onSubmit:function(h){return E(h.id)}})})},X=$},pj0m:function(V,b,e){"use strict";e.r(b);var R=e("q1tI"),F=e.n(R),s=e("Ty5D"),y=e("9kvl"),f=e("pDTe"),I=e.n(f),P=e("4EEj"),p=e("nKUr"),K=e.n(p);b.default=function(){var H=Object(s.g)(),t=H.h5p;return Object(p.jsx)(f.EditorContextProvider,{url:"".concat("https://api-stage.escolalms.com","/api/admin/hh5p"),children:Object(p.jsx)(P.a,{onSubmit:function(S){return t==="new"&&y.d.push("/h5ps/".concat(S))},id:t==="new"?void 0:t})})}}}]);

(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"4EEj":function(V,b,e){"use strict";e.d(b,"a",function(){return $});var A=e("+L6B"),F=e("2/Rp"),s=e("q1tI"),I=e("55Ip"),P=e("tMyG"),y=e("pDTe"),f=e("k1fw"),p=e("tJVT"),K=e("KAy6"),H=e("cYju"),t=e("nKUr"),B=function(l){return Object(H.unescape)(l)},S=function(){return Object(t.jsx)("pre",{children:"loading..."})},W=function(l){var d=l.id,u=l.onSubmit,v=Object(s.useState)(100),E=Object(p.a)(v,2),x=E[0],L=E[1],i=Object(s.useRef)(null),w=Object(s.useState)({state:"initial"}),j=Object(p.a)(w,2),g=j[0],M=j[1],h=Object(s.useContext)(y.EditorContext),n=h.state,T=h.getEditorConfig,U=h.submitContent;Object(s.useEffect)(function(){T&&T(d)},[d,T]),Object(s.useEffect)(function(){var m=function(a){if(a.origin===window.location.origin&&(a.data.iFrameHeight&&L(a.data.iFrameHeight),a.data.h5pEditorStatus)){var r=a.data;if(r.h5pEditorStatus==="success"&&n.value==="loaded")return M({state:"loading"}),U&&U(Object(f.a)(Object(f.a)({},r.data),{},{nonce:n.settings.nonce}),d).then(function(o){u&&o&&u(o),M({state:"loaded"})}).catch(function(o){M({state:"error",error:o.toString()})});r.h5pEditorStatus==="error"&&console.log(r.error)}};return window&&window.addEventListener("message",m),function(){window&&window.removeEventListener("message",m)}},[i,U,n,u,d]);var N=Object(s.useMemo)(function(){var m,c,a,r=n.value==="loaded"&&n.settings;if(!r)return"";var o=n.value==="loaded"&&(m=n.settings)!==null&&m!==void 0&&m.contents?(c=n.settings)===null||c===void 0?void 0:c.contents[Object.keys((a=n.settings)===null||a===void 0?void 0:a.contents)[0]]:null,R=o?o.library:"",J=`

    let params;
    window.addEventListener('message', (event) => {
        if (event.data.editorParams) {
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
              const h5peditor = new ns.Editor('`).concat(R,`', params, document.getElementById("h5p-editor"));
              H5P.externalDispatcher.on("xAPI", (event) => postMessage(event));
              H5P.externalDispatcher.on("resize", (event) => postMessage(event));
              resizeObserver.observe(document.querySelector(".h5p-editor-wrapper"));
              $("#h5p-editor-submit").click(() => {
                  h5peditor.getContent(data => postMessage({h5pEditorStatus:"success", data}), error =>  postMessage({h5pEditorStatus:"error", error}))
              } );
          };
          ns.getAjaxUrl = function (action, parameters) {
              var url = H5PIntegration.editor.ajaxPath + action;
              url += action === "files" ? "/`).concat(r.nonce,`" : "";
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
      `),Q=Object(K.renderToStaticMarkup)(Object(t.jsxs)("html",{children:[Object(t.jsxs)("head",{children:[Object(t.jsx)("style",{children:" body, html {margin:0; padding:0;}"}),Object(t.jsx)("script",{dangerouslySetInnerHTML:{__html:"const H5PIntegration = window.H5PIntegration = ".concat(JSON.stringify(r),"; ")}}),r.core.scripts.map(function(O){return Object(t.jsx)("script",{src:O},O)}),r.core.styles.map(function(O){return Object(t.jsx)("link",{type:"text/css",rel:"stylesheet",href:O},O)})]}),Object(t.jsx)("body",{children:Object(t.jsxs)("div",{className:"h5p-editor-wrapper",children:[Object(t.jsx)("div",{id:"h5p-editor",className:"height-observer",children:"loading"}),Object(t.jsx)("p",{}),Object(t.jsx)("button",{className:"h5p-core-button",id:"h5p-editor-submit",children:"submit data"}),Object(t.jsx)("script",{dangerouslySetInnerHTML:{__html:J}})]})})]})),G=B(Q);return G},[n]),z=function(){var c,a,r,o=n.value==="loaded"&&(c=n.settings)!==null&&c!==void 0&&c.contents?(a=n.settings)===null||a===void 0?void 0:a.contents[Object.keys((r=n.settings)===null||r===void 0?void 0:r.contents)[0]]:null,R=o?o.jsonContent:"";i.current&&i.current.contentWindow&&i.current.contentWindow.postMessage({editorParams:R},window.location.origin)};return Object(t.jsxs)("div",{className:"h5p-editor",style:{height:x,position:"relative"},children:[g.state==="loading"&&Object(t.jsx)(S,{}),g.state==="error"&&Object(t.jsxs)("p",{children:[Object(t.jsx)("pre",{children:"Error:"})," ",g.error]}),N&&Object(t.jsx)("iframe",{onLoad:z,ref:i,title:"editor",srcDoc:N,style:{width:"100%",height:"100%",margin:0,padding:0,border:"none"}})]})},Y=W,C=e("9kvl"),$=function(l){var d,u,v=l.id,E=l.onSubmit,x=Object(C.i)(),L=Object(s.useContext)(y.EditorContext),i=L.state,w="cid-".concat(v),j=i.value==="loaded"&&((d=i.settings)===null||d===void 0?void 0:d.contents)&&((u=i.settings)===null||u===void 0?void 0:u.contents[w]),g=j?j.title:v?"Loading Content...":"New Content";return Object(t.jsx)(P.a,{title:Object(t.jsxs)(t.Fragment,{children:[Object(t.jsx)(C.a,{id:"H5P_new_content_title"})," ".concat(g)]}),extra:[v&&Object(t.jsx)(F.a,{type:"primary",children:Object(t.jsx)(I.a,{to:"/h5ps/preview/".concat(v),children:Object(t.jsx)(C.a,{id:"preview"})})})],header:{breadcrumb:{routes:[{path:"h5ps",breadcrumbName:x.formatMessage({id:"H5P"})},{path:g,breadcrumbName:x.formatMessage({id:"form"})}]}},children:Object(t.jsx)(W,{id:v,onSubmit:function(h){return E(h.id)}})})},X=$},pj0m:function(V,b,e){"use strict";e.r(b);var A=e("q1tI"),F=e.n(A),s=e("Ty5D"),I=e("9kvl"),P=e("pDTe"),y=e.n(P),f=e("4EEj"),p=e("nKUr"),K=e.n(p);b.default=function(){var H=Object(s.g)(),t=H.h5p;return Object(p.jsx)(P.EditorContextProvider,{url:"".concat("https://api-stage.escolalms.com","/api/admin/hh5p"),children:Object(p.jsx)(f.a,{onSubmit:function(S){return t==="new"&&I.d.push("/h5ps/".concat(S))},id:t==="new"?void 0:t})})}}}]);

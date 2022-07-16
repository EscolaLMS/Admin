(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{"4EEj":function(V,h,t){"use strict";t.d(h,"a",function(){return a});var c=t("+L6B"),p=t("2/Rp"),n=t("q1tI"),g=t("55Ip"),S=t("tMyG"),j=t("pDTe"),w=t("VTBJ"),O=t("ODXe"),E=t("KAy6"),y=t("cYju"),D=t("nzng"),e=t("nKUr"),T=function(x){return Object(y.unescape)(x)},A=function(){return Object(e.jsx)("pre",{children:"loading..."})},r=function(x){var b=x.id,M=x.onSubmit,H=Object(n.useState)(100),B=Object(O.a)(H,2),$=B[0],W=B[1],v=Object(n.useRef)(null),F=Object(n.useState)({state:"initial"}),L=Object(O.a)(F,2),C=L[0],K=L[1],R=Object(n.useContext)(j.EditorContext),o=R.state,_=R.getEditorConfig,G=R.submitContent;Object(n.useEffect)(function(){_&&_(b)},[b,_]),Object(n.useEffect)(function(){var I=function(u){if(u.origin===window.location.origin){if(u.data.iFrameHeight&&W(u.data.iFrameHeight),u.data.h5pEditorStatus){var s=u.data;if(s.h5pEditorStatus==="success"&&o.value==="loaded")return K({state:"loading"}),Object(D.b)(Object(w.a)(Object(w.a)({},s.data),{},{nonce:o.settings.nonce}),b).then(function(l){M&&l&&l.success&&l.data.id&&typeof l.data.id!="undefined"&&M(l.data),K({state:"loaded"})}).catch(function(l){K({state:"error",error:l.toString()})});s.h5pEditorStatus==="error"&&console.log(s.error)}return null}};return window&&window.addEventListener("message",I),function(){window&&window.removeEventListener("message",I)}},[v,G,o,M,b]);var N=Object(n.useMemo)(function(){var I,P,u,s=o.value==="loaded"&&o.settings;if(!s)return"";var l=o.value==="loaded"&&(I=o.settings)!==null&&I!==void 0&&I.contents?(P=o.settings)===null||P===void 0?void 0:P.contents[Object.keys((u=o.settings)===null||u===void 0?void 0:u.contents)[0]]:null,z=l?l.library:"",X=`

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
      `),Y=Object(E.renderToStaticMarkup)(Object(e.jsxs)("html",{children:[Object(e.jsxs)("head",{children:[Object(e.jsx)("style",{children:" body, html {margin:0; padding:0;}"}),Object(e.jsx)("script",{dangerouslySetInnerHTML:{__html:"const H5PIntegration = window.H5PIntegration = ".concat(JSON.stringify(s),"; ")}}),s.core.scripts.map(function(U){return Object(e.jsx)("script",{src:U},U)}),s.core.styles.map(function(U){return Object(e.jsx)("link",{type:"text/css",rel:"stylesheet",href:U},U)})]}),Object(e.jsx)("body",{children:Object(e.jsxs)("div",{className:"h5p-editor-wrapper",children:[Object(e.jsx)("div",{id:"h5p-editor",className:"height-observer",children:"loading"}),Object(e.jsx)("p",{}),Object(e.jsx)("button",{className:"h5p-core-button",id:"h5p-editor-submit",children:"submit data"}),Object(e.jsx)("script",{dangerouslySetInnerHTML:{__html:X}})]})})]})),Z=T(Y);return Z},[o]),J=function(){var P,u,s,l=o.value==="loaded"&&(P=o.settings)!==null&&P!==void 0&&P.contents?(u=o.settings)===null||u===void 0?void 0:u.contents[Object.keys((s=o.settings)===null||s===void 0?void 0:s.contents)[0]]:null,z=l?l.jsonContent:"";v.current&&v.current.contentWindow&&v.current.contentWindow.postMessage({editorParams:z},window.location.origin)},Q=Object(n.useMemo)(function(){return window.URL.createObjectURL(new Blob([N],{type:"text/html"}))},[N]);return Object(e.jsxs)("div",{className:"h5p-editor",style:{height:$,position:"relative"},children:[C.state==="loading"&&Object(e.jsx)(A,{}),C.state==="error"&&Object(e.jsxs)("p",{children:[Object(e.jsx)("pre",{children:"Error:"})," ",C.error]}),N&&Object(e.jsx)("iframe",{onLoad:J,ref:v,title:"editor",src:Q,style:{width:"100%",height:"100%",margin:0,padding:0,border:"none"}})]})},i=r,d=t("9kvl"),a=function(x){var b,M,H=x.id,B=x.onSubmit,$=Object(d.i)(),W=Object(n.useContext)(j.EditorContext),v=W.state,F="cid-".concat(H),L=v.value==="loaded"&&((b=v.settings)===null||b===void 0?void 0:b.contents)&&((M=v.settings)===null||M===void 0?void 0:M.contents[F]),C=L?L.title:H?"Loading Content...":"New Content";return Object(e.jsx)(S.a,{title:Object(e.jsxs)(e.Fragment,{children:[Object(e.jsx)(d.a,{id:"H5P_new_content_title"})," ".concat(C)]}),extra:[H&&Object(e.jsx)(p.a,{type:"primary",children:Object(e.jsx)(g.a,{to:"/h5ps/preview/".concat(H),children:Object(e.jsx)(d.a,{id:"preview"})})})],header:{breadcrumb:{routes:[{path:"h5ps",breadcrumbName:$.formatMessage({id:"H5P"})},{path:C,breadcrumbName:$.formatMessage({id:"form"})}]}},children:Object(e.jsx)(r,{id:H,onSubmit:function(R){return B(Number(R.id))}})})},m=a},nzng:function(V,h,t){"use strict";t.d(h,"d",function(){return S}),t.d(h,"c",function(){return w}),t.d(h,"b",function(){return E}),t.d(h,"e",function(){return D}),t.d(h,"a",function(){return T});var c=t("x+uP"),p=t("VTBJ"),n=t("HaE+"),g=t("9kvl");function S(r,i){return j.apply(this,arguments)}function j(){return j=Object(n.a)(Object(c.a)().mark(function r(i,d){return Object(c.a)().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.abrupt("return",Object(g.f)("/api/admin/hh5p/content",Object(p.a)({method:"GET",useCache:!1,params:Object(p.a)(Object(p.a)({},i),{},{per_page:i.pageSize,page:i.current})},d||{})));case 1:case"end":return m.stop()}},r)})),j.apply(this,arguments)}function w(r,i){return O.apply(this,arguments)}function O(){return O=Object(n.a)(Object(c.a)().mark(function r(i,d){return Object(c.a)().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.abrupt("return",Object(g.f)("/api/admin/hh5p/content/".concat(i),Object(p.a)({method:"GET",useCache:!1},d||{})));case 1:case"end":return m.stop()}},r)})),O.apply(this,arguments)}function E(r,i,d){return y.apply(this,arguments)}function y(){return y=Object(n.a)(Object(c.a)().mark(function r(i,d,a){return Object(c.a)().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.abrupt("return",Object(g.f)(d?"/api/admin/hh5p/content/".concat(d):"/api/admin/hh5p/content",Object(p.a)({method:"POST",headers:{"Content-Type":"application/json"},data:i,useCache:!1},a||{})));case 1:case"end":return f.stop()}},r)})),y.apply(this,arguments)}function D(r){return e.apply(this,arguments)}function e(){return e=Object(n.a)(Object(c.a)().mark(function r(i){return Object(c.a)().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",Object(g.f)("/api/admin/hh5p/content/".concat(i),{method:"DELETE"}));case 1:case"end":return a.stop()}},r)})),e.apply(this,arguments)}function T(r){return A.apply(this,arguments)}function A(){return A=Object(n.a)(Object(c.a)().mark(function r(i){return Object(c.a)().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",Object(g.f)("/api/admin/hh5p/content?per_page=0",Object(p.a)({method:"GET",useCache:!1},i||{})));case 1:case"end":return a.stop()}},r)})),A.apply(this,arguments)}},pj0m:function(V,h,t){"use strict";t.r(h);var c=t("Ty5D"),p=t("9kvl"),n=t("pDTe"),g=t.n(n),S=t("4EEj"),j=t("nKUr"),w=t.n(j);h.default=function(){var O=Object(c.l)(),E=O.h5p,y=Object(p.i)(),D=y.locale.split("-")[0];return Object(j.jsx)(n.EditorContextProvider,{defaultLang:D,url:"".concat(window.REACT_APP_API_URL||"https://api-stage.escolalms.com","/api/admin/hh5p"),children:Object(j.jsx)(S.a,{onSubmit:function(T){return E==="new"&&p.d.push("/h5ps/".concat(T))},id:E==="new"?void 0:E})})}}}]);

(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{"4EEj":function(G,h,t){"use strict";t.d(h,"a",function(){return m});var j=t("+L6B"),v=t("2/Rp"),s=t("q1tI"),d=t("55Ip"),g=t("tMyG"),O=t("pDTe"),y=t("k1fw"),H=t("tJVT"),f=t("KAy6"),L=t("cYju"),x=t("nzng"),e=t("nKUr"),w=function(p){return Object(L.unescape)(p)},B=function(){return Object(e.jsx)("pre",{children:"loading..."})},C=function(p){var P=p.id,M=p.onSubmit,_=Object(s.useState)(100),R=Object(H.a)(_,2),U=R[0],K=R[1],b=Object(s.useRef)(null),W=Object(s.useState)({state:"initial"}),D=Object(H.a)(W,2),S=D[0],$=D[1],A=Object(s.useContext)(O.EditorContext),c=A.state,F=A.getEditorConfig,V=A.submitContent;Object(s.useEffect)(function(){F&&F(P)},[P,F]),Object(s.useEffect)(function(){var I=function(u){if(u.origin===window.location.origin){if(u.data.iFrameHeight&&K(u.data.iFrameHeight),u.data.h5pEditorStatus){var r=u.data;if(r.h5pEditorStatus==="success"&&c.value==="loaded")return $({state:"loading"}),Object(x.b)(Object(y.a)(Object(y.a)({},r.data),{},{nonce:c.settings.nonce}),P).then(function(l){M&&l&&l.success&&l.data.id&&typeof l.data.id!="undefined"&&M(l.data),$({state:"loaded"})}).catch(function(l){$({state:"error",error:l.toString()})});r.h5pEditorStatus==="error"&&console.log(r.error)}return null}};return window&&window.addEventListener("message",I),function(){window&&window.removeEventListener("message",I)}},[b,V,c,M,P]);var N=Object(s.useMemo)(function(){var I,E,u,r=c.value==="loaded"&&c.settings;if(!r)return"";var l=c.value==="loaded"&&(I=c.settings)!==null&&I!==void 0&&I.contents?(E=c.settings)===null||E===void 0?void 0:E.contents[Object.keys((u=c.settings)===null||u===void 0?void 0:u.contents)[0]]:null,z=l?l.library:"",Y=`

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
      `),X=Object(f.renderToStaticMarkup)(Object(e.jsxs)("html",{children:[Object(e.jsxs)("head",{children:[Object(e.jsx)("style",{children:" body, html {margin:0; padding:0;}"}),Object(e.jsx)("script",{dangerouslySetInnerHTML:{__html:"const H5PIntegration = window.H5PIntegration = ".concat(JSON.stringify(r),"; ")}}),r.core.scripts.map(function(T){return Object(e.jsx)("script",{src:T},T)}),r.core.styles.map(function(T){return Object(e.jsx)("link",{type:"text/css",rel:"stylesheet",href:T},T)})]}),Object(e.jsx)("body",{children:Object(e.jsxs)("div",{className:"h5p-editor-wrapper",children:[Object(e.jsx)("div",{id:"h5p-editor",className:"height-observer",children:"loading"}),Object(e.jsx)("p",{}),Object(e.jsx)("button",{className:"h5p-core-button",id:"h5p-editor-submit",children:"submit data"}),Object(e.jsx)("script",{dangerouslySetInnerHTML:{__html:Y}})]})})]})),Z=w(X);return Z},[c]),J=function(){var E,u,r,l=c.value==="loaded"&&(E=c.settings)!==null&&E!==void 0&&E.contents?(u=c.settings)===null||u===void 0?void 0:u.contents[Object.keys((r=c.settings)===null||r===void 0?void 0:r.contents)[0]]:null,z=l?l.jsonContent:"";b.current&&b.current.contentWindow&&b.current.contentWindow.postMessage({editorParams:z},window.location.origin)},Q=Object(s.useMemo)(function(){return window.URL.createObjectURL(new Blob([N],{type:"text/html"}))},[N]);return Object(e.jsxs)("div",{className:"h5p-editor",style:{height:U,position:"relative"},children:[S.state==="loading"&&Object(e.jsx)(B,{}),S.state==="error"&&Object(e.jsxs)("p",{children:[Object(e.jsx)("pre",{children:"Error:"})," ",S.error]}),N&&Object(e.jsx)("iframe",{onLoad:J,ref:b,title:"editor",src:Q,style:{width:"100%",height:"100%",margin:0,padding:0,border:"none"}})]})},a=C,n=t("9kvl"),m=function(p){var P,M,_=p.id,R=p.onSubmit,U=Object(n.i)(),K=Object(s.useContext)(O.EditorContext),b=K.state,W="cid-".concat(_),D=b.value==="loaded"&&((P=b.settings)===null||P===void 0?void 0:P.contents)&&((M=b.settings)===null||M===void 0?void 0:M.contents[W]),S=D?D.title:_?"Loading Content...":"New Content";return Object(e.jsx)(g.a,{title:Object(e.jsxs)(e.Fragment,{children:[Object(e.jsx)(n.a,{id:"H5P_new_content_title"})," ".concat(S)]}),extra:[_&&Object(e.jsx)(v.a,{type:"primary",children:Object(e.jsx)(d.a,{to:"/h5ps/preview/".concat(_),children:Object(e.jsx)(n.a,{id:"preview"})})})],header:{breadcrumb:{routes:[{path:"h5ps",breadcrumbName:U.formatMessage({id:"H5P"})},{path:S,breadcrumbName:U.formatMessage({id:"form"})}]}},children:Object(e.jsx)(C,{id:_,onSubmit:function(A){return R(Number(A.id))}})})},i=m},nzng:function(G,h,t){"use strict";t.d(h,"d",function(){return O}),t.d(h,"c",function(){return H}),t.d(h,"b",function(){return L}),t.d(h,"e",function(){return e}),t.d(h,"a",function(){return B});var j=t("k1fw"),v=t("9og8"),s=t("WmNS"),d=t.n(s),g=t("9kvl");function O(a,n){return y.apply(this,arguments)}function y(){return y=Object(v.a)(d.a.mark(function a(n,m){return d.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.abrupt("return",Object(g.f)("/api/admin/hh5p/content",Object(j.a)({method:"GET",useCache:!1,params:Object(j.a)(Object(j.a)({},n),{},{per_page:n.pageSize,page:n.current})},m||{})));case 1:case"end":return o.stop()}},a)})),y.apply(this,arguments)}function H(a,n){return f.apply(this,arguments)}function f(){return f=Object(v.a)(d.a.mark(function a(n,m){return d.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.abrupt("return",Object(g.f)("/api/admin/hh5p/content/".concat(n),Object(j.a)({method:"GET",useCache:!1},m||{})));case 1:case"end":return o.stop()}},a)})),f.apply(this,arguments)}function L(a,n,m){return x.apply(this,arguments)}function x(){return x=Object(v.a)(d.a.mark(function a(n,m,i){return d.a.wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return p.abrupt("return",Object(g.f)(m?"/api/admin/hh5p/content/".concat(m):"/api/admin/hh5p/content",Object(j.a)({method:"POST",headers:{"Content-Type":"application/json"},data:n,useCache:!1},i||{})));case 1:case"end":return p.stop()}},a)})),x.apply(this,arguments)}function e(a){return w.apply(this,arguments)}function w(){return w=Object(v.a)(d.a.mark(function a(n){return d.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.abrupt("return",Object(g.f)("/api/admin/hh5p/content/".concat(n),{method:"DELETE"}));case 1:case"end":return i.stop()}},a)})),w.apply(this,arguments)}function B(a){return C.apply(this,arguments)}function C(){return C=Object(v.a)(d.a.mark(function a(n){return d.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.abrupt("return",Object(g.f)("/api/admin/hh5p/content?per_page=0",Object(j.a)({method:"GET",useCache:!1},n||{})));case 1:case"end":return i.stop()}},a)})),C.apply(this,arguments)}},pj0m:function(G,h,t){"use strict";t.r(h);var j=t("Ty5D"),v=t("9kvl"),s=t("pDTe"),d=t.n(s),g=t("4EEj"),O=t("nKUr"),y=t.n(O);h.default=function(){var H=Object(j.h)(),f=H.h5p;return Object(O.jsx)(s.EditorContextProvider,{url:"".concat(window.REACT_APP_API_URL||"https://api-stage.escolalms.com","/api/admin/hh5p"),children:Object(O.jsx)(g.a,{onSubmit:function(x){return f==="new"&&v.d.push("/h5ps/".concat(x))},id:f==="new"?void 0:f})})}}}]);

(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{O8Vp:function(F,x,e){},pj0m:function(F,x,e){"use strict";e.r(x);var i=e("q1tI"),$=e("9kvl"),L=e("7AqN"),U=e("tMyG"),P=e("jQbG"),M=e("k1fw"),C=e("tJVT"),V=e("KAy6"),R=e("cYju"),T=e("ew9D"),Y=e("O8Vp"),t=e("nKUr"),A=function(a){return Object(R.a)(a)},J=function(a){var c=a.id,d=a.onSubmit,u=Object(i.useState)(100),m=Object(C.a)(u,2),h=m[0],y=m[1],g=Object(i.useRef)(null),b=Object(i.useState)({state:"initial"}),H=Object(C.a)(b,2),j=H[0],f=H[1],S=Object(i.useContext)(P.a),n=S.state,I=S.getEditorConfig,w=S.submitContent;Object(i.useEffect)(function(){I&&I(c)},[c,I]),Object(i.useEffect)(function(){var p=function(s){if(s.origin===window.location.origin&&(s.data.iFrameHeight&&y(s.data.iFrameHeight),s.data.h5pEditorStatus)){var r=s.data;r.h5pEditorStatus==="success"&&n.value==="loaded"&&(f({state:"loading"}),w&&w(Object(M.a)(Object(M.a)({},r.data),{},{nonce:n.settings.nonce}),c).then(function(o){d&&o&&d(o),f({state:"loaded"})}).catch(function(o){f({state:"error",error:o.toString()})})),r.h5pEditorStatus==="error"&&console.log(r.error)}};return window&&window.addEventListener("message",p),function(){window&&window.removeEventListener("message",p)}},[g,w,n,d,c]);var N=Object(i.useMemo)(function(){var p,O,s,r=n.value==="loaded"&&n.settings;if(!r)return"";var o=n.value==="loaded"&&(p=n.settings)!==null&&p!==void 0&&p.contents?(O=n.settings)===null||O===void 0?void 0:O.contents[Object.keys((s=n.settings)===null||s===void 0?void 0:s.contents)[0]]:null,E=o?o.jsonContent:"";try{E&&JSON.parse(E)}catch(l){return f({state:"error",error:l.toString()}),null}var Q=o?o.library:"",B=`
    (function ($) {
        const postMessage = (data) => parent.postMessage(data, "`.concat(window.location.origin,`");
        const resizeObserver = new ResizeObserver((entries) =>
            postMessage({ iFrameHeight: entries[0].contentRect.height })
        );
        const params = '`).concat(E,`'.split("\\n").join('');
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
            const h5peditor = new ns.Editor('`).concat(Q,`', params, document.getElementById("h5p-editor"));
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
        $(document).ready(ns.init);
    })(H5P.jQuery);
    `),G=Object(V.renderToStaticMarkup)(Object(t.jsxs)("html",{children:[Object(t.jsxs)("head",{children:[Object(t.jsx)("style",{children:" body, html {margin:0; padding:0;}"}),Object(t.jsx)("script",{dangerouslySetInnerHTML:{__html:"const H5PIntegration = window.H5PIntegration = ".concat(JSON.stringify(r),"; ")}}),r.core.scripts.map(function(l){return Object(t.jsx)("script",{src:l},l)}),r.core.styles.map(function(l){return Object(t.jsx)("link",{type:"text/css",rel:"stylesheet",href:l},l)})]}),Object(t.jsx)("body",{children:Object(t.jsxs)("div",{className:"h5p-editor-wrapper",children:[Object(t.jsx)("div",{id:"h5p-editor",className:"height-observer",children:"loading"}),Object(t.jsx)("p",{}),Object(t.jsx)("button",{className:"h5p-core-button",id:"h5p-editor-submit",children:"submit data"}),Object(t.jsx)("script",{dangerouslySetInnerHTML:{__html:B}})]})})]})),K=A(G);return window.URL.createObjectURL(new Blob([K],{type:"text/html"}))},[n]);return Object(t.jsxs)("div",{className:"h5p-editor",style:{height:h},children:[j.state==="loading"&&Object(t.jsx)(T.a,{}),j.state==="error"&&Object(t.jsxs)("p",{children:[Object(t.jsx)("pre",{children:"Error:"})," ",j.error]}),N&&Object(t.jsx)("iframe",{ref:g,title:"editor",src:N})]})},z=J,D=function(a){var c,d,u=a.id,m=Object(i.useContext)(P.a),h=m.state,y="cid-".concat(u),g=h.value==="loaded"&&((c=h.settings)===null||c===void 0?void 0:c.contents)&&((d=h.settings)===null||d===void 0?void 0:d.contents[y]),b=g?g.title:u?"Loading Content...":"New Content";return Object(t.jsx)(U.a,{title:"H5P. HTML5 Content ".concat(b),header:{breadcrumb:{routes:[{path:"h5ps",breadcrumbName:"HP5s"},{path:b,breadcrumbName:"Form"}]}},children:Object(t.jsx)(z,{id:u,onSubmit:function(j){return!u&&$.c.push("/h5ps/".concat(j.id))}})})},k=x.default=function(){var v=Object(L.l)(),a=v.h5p;return Object(t.jsx)(P.b,{url:"".concat("https://escola-lms-api.stage.etd24.pl","/api/hh5p"),children:Object(t.jsx)(D,{id:a==="new"?void 0:a})})}}}]);

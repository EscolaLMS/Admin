(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{O8Vp:function(X,w,r){},QttV:function(X,w,r){"use strict";r.d(w,"a",function(){return B});var C=r("7AqN"),K=r("dI71"),O=r("q1tI"),v=r.n(O),D=r("YS25"),F=r("17x9"),Z=r.n(F),x=r("wx14"),I=r("zLVn"),A=r("9R94"),k=function(t){Object(K.a)(e,t);function e(){for(var i,l=arguments.length,s=new Array(l),o=0;o<l;o++)s[o]=arguments[o];return i=t.call.apply(t,[this].concat(s))||this,i.history=Object(D.a)(i.props),i}var a=e.prototype;return a.render=function(){return v.a.createElement(C.c,{history:this.history,children:this.props.children})},e}(v.a.Component),q=function(t){Object(K.a)(e,t);function e(){for(var i,l=arguments.length,s=new Array(l),o=0;o<l;o++)s[o]=arguments[o];return i=t.call.apply(t,[this].concat(s))||this,i.history=Object(D.b)(i.props),i}var a=e.prototype;return a.render=function(){return v.a.createElement(C.c,{history:this.history,children:this.props.children})},e}(v.a.Component),T=function(e,a){return typeof e=="function"?e(a):e},z=function(e,a){return typeof e=="string"?Object(D.c)(e,null,null,a):e},n=function(e){return e},M=v.a.forwardRef;typeof M=="undefined"&&(M=n);function J(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}var Q=M(function(t,e){var a=t.innerRef,i=t.navigate,l=t.onClick,s=Object(I.a)(t,["innerRef","navigate","onClick"]),o=s.target,m=Object(x.a)({},s,{onClick:function(d){try{l&&l(d)}catch(b){throw d.preventDefault(),b}!d.defaultPrevented&&d.button===0&&(!o||o==="_self")&&!J(d)&&(d.preventDefault(),i())}});return n!==M?m.ref=e||a:m.ref=a,v.a.createElement("a",m)}),B=M(function(t,e){var a=t.component,i=a===void 0?Q:a,l=t.replace,s=t.to,o=t.innerRef,m=Object(I.a)(t,["component","replace","to","innerRef"]);return v.a.createElement(C.e.Consumer,null,function(c){c||Object(A.a)(!1);var d=c.history,b=z(T(s,c.location),c.location),R=b?d.createHref(b):"",j=Object(x.a)({},m,{href:R,navigate:function(){var f=T(s,c.location),u=l?d.replace:d.push;u(f)}});return n!==M?j.ref=e||o:j.innerRef=o,v.a.createElement(i,j)})});if(!1)var _,N;var h=function(e){return e},p=v.a.forwardRef;typeof p=="undefined"&&(p=h);function P(){for(var t=arguments.length,e=new Array(t),a=0;a<t;a++)e[a]=arguments[a];return e.filter(function(i){return i}).join(" ")}var E=p(function(t,e){var a=t["aria-current"],i=a===void 0?"page":a,l=t.activeClassName,s=l===void 0?"active":l,o=t.activeStyle,m=t.className,c=t.exact,d=t.isActive,b=t.location,R=t.sensitive,j=t.strict,S=t.style,f=t.to,u=t.innerRef,g=Object(I.a)(t,["aria-current","activeClassName","activeStyle","className","exact","isActive","location","sensitive","strict","style","to","innerRef"]);return v.a.createElement(C.e.Consumer,null,function(H){H||Object(A.a)(!1);var L=b||H.location,$=z(T(f,L),L),W=$.pathname,V=W&&W.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1"),y=V?Object(C.f)(L.pathname,{path:V,exact:c,sensitive:R,strict:j}):null,G=!!(d?d(y,L):y),tt=G?P(m,s):m,et=G?Object(x.a)({},S,{},o):S,Y=Object(x.a)({"aria-current":G&&i||null,className:tt,style:et,to:$},g);return h!==p?Y.ref=e||u:Y.innerRef=u,v.a.createElement(B,Y)})});if(!1)var U},pj0m:function(X,w,r){"use strict";r.r(w);var C=r("+L6B"),K=r("2/Rp"),O=r("q1tI"),v=r("QttV"),D=r("9kvl"),F=r("7AqN"),Z=r("tMyG"),x=r("jQbG"),I=r("k1fw"),A=r("tJVT"),k=r("KAy6"),q=r("cYju"),T=r("ew9D"),z=r("O8Vp"),n=r("nKUr"),M=function(h){return Object(q.a)(h)},J=function(h){var p=h.id,P=h.onSubmit,E=Object(O.useState)(100),U=Object(A.a)(E,2),t=U[0],e=U[1],a=Object(O.useRef)(null),i=Object(O.useState)({state:"initial"}),l=Object(A.a)(i,2),s=l[0],o=l[1],m=Object(O.useContext)(x.a),c=m.state,d=m.getEditorConfig,b=m.submitContent;Object(O.useEffect)(function(){d&&d(p)},[p,d]),Object(O.useEffect)(function(){var j=function(f){if(f.origin===window.location.origin&&(f.data.iFrameHeight&&e(f.data.iFrameHeight),f.data.h5pEditorStatus)){var u=f.data;u.h5pEditorStatus==="success"&&c.value==="loaded"&&(o({state:"loading"}),b&&b(Object(I.a)(Object(I.a)({},u.data),{},{nonce:c.settings.nonce}),p).then(function(g){P&&g&&P(g),o({state:"loaded"})}).catch(function(g){o({state:"error",error:g.toString()})})),u.h5pEditorStatus==="error"&&console.log(u.error)}};return window&&window.addEventListener("message",j),function(){window&&window.removeEventListener("message",j)}},[a,b,c,P,p]);var R=Object(O.useMemo)(function(){var j,S,f,u=c.value==="loaded"&&c.settings;if(!u)return"";var g=c.value==="loaded"&&(j=c.settings)!==null&&j!==void 0&&j.contents?(S=c.settings)===null||S===void 0?void 0:S.contents[Object.keys((f=c.settings)===null||f===void 0?void 0:f.contents)[0]]:null,H=g?g.jsonContent:"";try{H&&JSON.parse(H)}catch(y){return o({state:"error",error:y.toString()}),null}var L=g?g.library:"",$=`
    (function ($) {
        const postMessage = (data) => parent.postMessage(data, "`.concat(window.location.origin,`");
        const resizeObserver = new ResizeObserver((entries) =>
            postMessage({ iFrameHeight: entries[0].contentRect.height })
        );
        const params = `,"`").concat(H,"`",`.split("\\n").join('');
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
            const h5peditor = new ns.Editor('`).concat(L,`', params, document.getElementById("h5p-editor"));
            H5P.externalDispatcher.on("xAPI", (event) => postMessage(event));
            H5P.externalDispatcher.on("resize", (event) => postMessage(event));
            resizeObserver.observe(document.querySelector(".h5p-editor-wrapper"));
            $("#h5p-editor-submit").click(() => {
                h5peditor.getContent(data => postMessage({h5pEditorStatus:"success", data}), error =>  postMessage({h5pEditorStatus:"error", error}))
            } );
        };
        ns.getAjaxUrl = function (action, parameters) {
            var url = H5PIntegration.editor.ajaxPath + action;
            url += action === "files" ? "/`).concat(u.nonce,`" : "";
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
    `),W=Object(k.renderToStaticMarkup)(Object(n.jsxs)("html",{children:[Object(n.jsxs)("head",{children:[Object(n.jsx)("style",{children:" body, html {margin:0; padding:0;}"}),Object(n.jsx)("script",{dangerouslySetInnerHTML:{__html:"const H5PIntegration = window.H5PIntegration = ".concat(JSON.stringify(u),"; ")}}),u.core.scripts.map(function(y){return Object(n.jsx)("script",{src:y},y)}),u.core.styles.map(function(y){return Object(n.jsx)("link",{type:"text/css",rel:"stylesheet",href:y},y)})]}),Object(n.jsx)("body",{children:Object(n.jsxs)("div",{className:"h5p-editor-wrapper",children:[Object(n.jsx)("div",{id:"h5p-editor",className:"height-observer",children:"loading"}),Object(n.jsx)("p",{}),Object(n.jsx)("button",{className:"h5p-core-button",id:"h5p-editor-submit",children:"submit data"}),Object(n.jsx)("script",{dangerouslySetInnerHTML:{__html:$}})]})})]})),V=M(W);return window.URL.createObjectURL(new Blob([V],{type:"text/html"}))},[c]);return Object(n.jsxs)("div",{className:"h5p-editor",style:{height:t},children:[s.state==="loading"&&Object(n.jsx)(T.a,{}),s.state==="error"&&Object(n.jsxs)("p",{children:[Object(n.jsx)("pre",{children:"Error:"})," ",s.error]}),R&&Object(n.jsx)("iframe",{ref:a,title:"editor",src:R})]})},Q=J,B=function(h){var p,P,E=h.id,U=Object(O.useContext)(x.a),t=U.state,e="cid-".concat(E),a=t.value==="loaded"&&((p=t.settings)===null||p===void 0?void 0:p.contents)&&((P=t.settings)===null||P===void 0?void 0:P.contents[e]),i=a?a.title:E?"Loading Content...":"New Content";return Object(n.jsx)(Z.a,{title:"H5P. HTML5 Content ".concat(i),extra:[E&&Object(n.jsx)(K.a,{type:"primary",children:Object(n.jsx)(v.a,{to:"/h5ps/preview/".concat(E),children:"Preview"})})],header:{breadcrumb:{routes:[{path:"h5ps",breadcrumbName:"HP5s"},{path:i,breadcrumbName:"Form"}]}},children:Object(n.jsx)(Q,{id:E,onSubmit:function(s){return!E&&D.c.push("/h5ps/".concat(s.id))}})})},_=w.default=function(){var N=Object(F.g)(),h=N.h5p;return Object(n.jsx)(x.b,{url:"".concat("https://escola-lms-api.stage.etd24.pl","/api/hh5p"),children:Object(n.jsx)(B,{id:h==="new"?void 0:h})})}}}]);

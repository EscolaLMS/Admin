(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{"/qDX":function(o,s,e){},"/zsF":function(o,s,e){"use strict";var a=e("cIOH"),E=e.n(a),_=e("bE4E"),v=e.n(_)},"0pKZ":function(o,s,e){"use strict";var a=e("oBTY"),E=e("tJVT"),_=e("q1tI"),v=e.n(_),M=e("KAy6"),A=e.n(M),B=e("cYju"),C=e("kkV0"),S=e.n(C),N=e("ew9D"),T=e("jQbG"),t=e("nKUr"),U=e.n(t),W=function(L){var d=L.id,I=L.onXAPI,p=Object(_.useState)(100),R=Object(E.a)(p,2),X=R[0],n=R[1],b=Object(_.useRef)(null),g=Object(_.useState)(!0),f=Object(E.a)(g,2),u=f[0],D=f[1],m=Object(_.useContext)(T.a),r=m.state,h=m.getContentConfig;Object(_.useEffect)(function(){h&&h(d).then(function(){return D(!1)}).catch(function(){return D(!1)})},[d,h]),Object(_.useEffect)(function(){var O=function(i){i.data.iFrameHeight&&n(i.data.iFrameHeight),i.data.statement&&I&&I(i.data)};return window&&window.addEventListener("message",O),function(){window&&window.removeEventListener("message",O)}},[b,r,I,d]);var y=Object(_.useMemo)(function(){var O,j,i,l=r.value==="loaded"&&r.settings;if(!l)return"";var x=r.value==="loaded"&&(O=r.settings)!==null&&O!==void 0&&O.contents?(j=r.settings)===null||j===void 0?void 0:j.contents[Object.keys((i=r.settings)===null||i===void 0?void 0:i.contents)[0]]:null,c=x==null?void 0:x.content.library.embedTypes,K=Object(M.renderToStaticMarkup)(Object(t.jsxs)("html",{children:[Object(t.jsxs)("head",{children:[Object(t.jsx)("style",{children:`
          body, html {margin:0; padding:0;}
          iframe { border:none; margin:0; padding:0; }
          `}),Object(t.jsx)("script",{children:"const H5PIntegration = window.H5PIntegration = ".concat(JSON.stringify(l),"; ")}),[].concat(Object(a.a)(l.core.scripts),Object(a.a)(l.loadedJs)).map(function(P){return Object(t.jsx)("script",{src:P},P)}),[].concat(Object(a.a)(l.core.styles),Object(a.a)(l.loadedCss)).map(function(P){return Object(t.jsx)("link",{type:"text/css",rel:"stylesheet",href:P},P)}),Object(t.jsx)("script",{children:'H5P.getCrossOrigin = function (source) { return "anonymous" }'})]}),Object(t.jsx)("body",{children:Object(t.jsxs)("div",{className:"h5p-player-wrapper h5p-resize-observer",children:[c&&c==="div"||c===""&&Object(t.jsx)("div",{className:"h5p-content","data-content-id":d}),c&&c==="iframe"&&Object(t.jsx)("div",{className:"h5p-iframe-wrapper",children:Object(t.jsx)("iframe",{id:"h5p-iframe-".concat(d),className:"h5p-iframe","data-content-id":d,src:"about:blank",frameBorder:"0",scrolling:"no",title:"player"})}),Object(t.jsx)("script",{children:`
            (function ($) {
                const replacerFunc = () => {
                    const visited = new WeakSet();
                    return (key, value) => {
                      if (value.nodeType) return;
                      if (typeof value === "object" && value !== null) {
                        if (visited.has(value)) {
                          return;
                        }
                        visited.add(value);
                      }
                      return value;
                    };
                  };
                const postMessage = (data) => parent.postMessage(data, "`.concat(window.location.origin,`");
                const resizeObserver = new ResizeObserver((entries) =>
                    postMessage({ iFrameHeight: entries[0].contentRect.height })
                );
                resizeObserver.observe(document.querySelector(".h5p-resize-observer"));
                H5P.externalDispatcher.on('xAPI', function (event) {
                    try {
                      postMessage(event.data, replacerFunc())
                    } catch(err) {
                      console.error(event, err)
                    }
                });
            })(H5P.jQuery);
            `)})]})})]}));return window.URL.createObjectURL(new Blob([Object(B.a)(K).split("&#x27;").join("'")],{type:"text/html"}))},[r,d]);return Object(t.jsxs)("div",{className:"h5p-player",style:{height:X},children:[u&&Object(t.jsx)(N.a,{}),Object(t.jsx)("iframe",{ref:b,title:"player",src:y})]})};s.a=W},"3wW7":function(o,s,e){},DjyN:function(o,s,e){"use strict";var a=e("cIOH"),E=e.n(a),_=e("Urep"),v=e.n(_),M=e("OaEy")},Mwp2:function(o,s,e){"use strict";var a=e("cIOH"),E=e.n(a),_=e("3wW7"),v=e.n(_),M=e("R9oj"),A=e("T2oS"),B=e("DjyN"),C=e("1GLa")},Urep:function(o,s,e){},bE4E:function(o,s,e){},fUkc:function(o,s,e){},kkV0:function(o,s,e){},qGJX:function(o,s,e){"use strict";e.r(s);var a=e("14J3"),E=e("BMrR"),_=e("jCWc"),v=e("kPKH"),M=e("Mwp2"),A=e("VXEj"),B=e("tU7J"),C=e("wFql"),S=e("oBTY"),N=e("/zsF"),T=e("PArb"),t=e("tJVT"),U=e("q1tI"),W=e.n(U),J=e("7AqN"),L=e("tMyG"),d=e("jQbG"),I=e("0pKZ"),p=e("nhC9"),R=e("fUkc"),X=e.n(R),n=e("nKUr"),b=e.n(n),g=function(u){var D,m,r=u.id,h=Object(U.useState)([]),y=Object(t.a)(h,2),O=y[0],j=y[1],i=Object(U.useContext)(d.a),l=i.state,x="cid-".concat(r),c=l.value==="loaded"&&((D=l.settings)===null||D===void 0?void 0:D.contents)&&((m=l.settings)===null||m===void 0?void 0:m.contents[x]),K=c?c.title:r?"Loading Content...":"Preview Content";return Object(n.jsx)(L.a,{title:"H5P. HTML5 Content Preview ".concat(K),header:{breadcrumb:{routes:[{path:"h5ps",breadcrumbName:"HP5s"},{path:K,breadcrumbName:"Preview"}]}},children:Object(n.jsx)(p.a,{direction:"column",children:Object(n.jsx)(E.a,{children:Object(n.jsxs)(v.a,{span:24,children:[Object(n.jsx)(T.a,{}),Object(n.jsx)(I.a,{id:r,onXAPI:function(H){return j(function(F){return[].concat(Object(S.a)(F),[H])})}}),Object(n.jsx)(T.a,{}),Object(n.jsx)("div",{style:{overflow:"auto",maxHeight:"200px"},children:Object(n.jsx)(A.b,{bordered:!0,dataSource:O,header:"XAPI Events",renderItem:function(H){return Object(n.jsx)(A.b.Item,{children:Object(n.jsx)(C.a.Text,{code:!0,children:JSON.stringify(H)})})}})})]})})})})};s.default=function(){var f=Object(J.g)(),u=f.h5p;return Object(n.jsx)(d.b,{url:"".concat("https://escola-lms-api.stage.etd24.pl","/api/hh5p"),children:u?Object(n.jsx)(g,{id:u}):Object(n.jsx)(W.a.Fragment,{})})}},tU7J:function(o,s,e){"use strict";var a=e("cIOH"),E=e.n(a),_=e("/qDX"),v=e.n(_),M=e("5Dmo"),A=e("5NDa")}}]);

(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{wMS7:function(dt,pr,mr){/*! @license DOMPurify 2.4.1 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/2.4.1/LICENSE */(function(L,W){dt.exports=W()})(this,function(){"use strict";function L(r){return L=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},L(r)}function W(r,n){return W=Object.setPrototypeOf||function(s,f){return s.__proto__=f,s},W(r,n)}function vt(){if(typeof Reflect=="undefined"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(r){return!1}}function K(r,n,o){return vt()?K=Reflect.construct:K=function(f,O,M){var N=[null];N.push.apply(N,O);var j=Function.bind.apply(f,N),Y=new j;return M&&W(Y,M.prototype),Y},K.apply(null,arguments)}function g(r){return Tt(r)||ht(r)||_t(r)||At()}function Tt(r){if(Array.isArray(r))return fe(r)}function ht(r){if(typeof Symbol!="undefined"&&r[Symbol.iterator]!=null||r["@@iterator"]!=null)return Array.from(r)}function _t(r,n){if(!!r){if(typeof r=="string")return fe(r,n);var o=Object.prototype.toString.call(r).slice(8,-1);if(o==="Object"&&r.constructor&&(o=r.constructor.name),o==="Map"||o==="Set")return Array.from(r);if(o==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return fe(r,n)}}function fe(r,n){(n==null||n>r.length)&&(n=r.length);for(var o=0,s=new Array(n);o<n;o++)s[o]=r[o];return s}function At(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Et=Object.hasOwnProperty,Fe=Object.setPrototypeOf,yt=Object.isFrozen,gt=Object.getPrototypeOf,bt=Object.getOwnPropertyDescriptor,_=Object.freeze,b=Object.seal,St=Object.create,Ue=typeof Reflect!="undefined"&&Reflect,Z=Ue.apply,ce=Ue.construct;Z||(Z=function(n,o,s){return n.apply(o,s)}),_||(_=function(n){return n}),b||(b=function(n){return n}),ce||(ce=function(n,o){return K(n,g(o))});var Rt=y(Array.prototype.forEach),He=y(Array.prototype.pop),$=y(Array.prototype.push),J=y(String.prototype.toLowerCase),pe=y(String.prototype.toString),Ot=y(String.prototype.match),S=y(String.prototype.replace),Nt=y(String.prototype.indexOf),Dt=y(String.prototype.trim),A=y(RegExp.prototype.test),me=Lt(TypeError);function y(r){return function(n){for(var o=arguments.length,s=new Array(o>1?o-1:0),f=1;f<o;f++)s[f-1]=arguments[f];return Z(r,n,s)}}function Lt(r){return function(){for(var n=arguments.length,o=new Array(n),s=0;s<n;s++)o[s]=arguments[s];return ce(r,o)}}function l(r,n,o){o=o||J,Fe&&Fe(r,null);for(var s=n.length;s--;){var f=n[s];if(typeof f=="string"){var O=o(f);O!==f&&(yt(n)||(n[s]=O),f=O)}r[f]=!0}return r}function x(r){var n=St(null),o;for(o in r)Z(Et,r,[o])&&(n[o]=r[o]);return n}function Q(r,n){for(;r!==null;){var o=bt(r,n);if(o){if(o.get)return y(o.get);if(typeof o.value=="function")return y(o.value)}r=gt(r)}function s(f){return console.warn("fallback value for",f),null}return s}var ze=_(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","section","select","shadow","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),de=_(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","filter","font","g","glyph","glyphref","hkern","image","line","lineargradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),ve=_(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),Mt=_(["animate","color-profile","cursor","discard","fedropshadow","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),Te=_(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover"]),wt=_(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),Ge=_(["#text"]),Be=_(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","face","for","headers","height","hidden","high","href","hreflang","id","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","pattern","placeholder","playsinline","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","xmlns","slot"]),he=_(["accent-height","accumulate","additive","alignment-baseline","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),We=_(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),ee=_(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),It=b(/\{\{[\w\W]*|[\w\W]*\}\}/gm),Ct=b(/<%[\w\W]*|[\w\W]*%>/gm),xt=b(/\${[\w\W]*}/gm),kt=b(/^data-[\-\w.\u00B7-\uFFFF]/),Pt=b(/^aria-[\-\w]+$/),Ft=b(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),Ut=b(/^(?:\w+script|data):/i),Ht=b(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),zt=b(/^html$/i),Gt=function(){return typeof window=="undefined"?null:window},Bt=function(n,o){if(L(n)!=="object"||typeof n.createPolicy!="function")return null;var s=null,f="data-tt-policy-suffix";o.currentScript&&o.currentScript.hasAttribute(f)&&(s=o.currentScript.getAttribute(f));var O="dompurify"+(s?"#"+s:"");try{return n.createPolicy(O,{createHTML:function(N){return N},createScriptURL:function(N){return N}})}catch(M){return console.warn("TrustedTypes policy "+O+" could not be created."),null}};function $e(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:Gt(),n=function(e){return $e(e)};if(n.version="2.4.1",n.removed=[],!r||!r.document||r.document.nodeType!==9)return n.isSupported=!1,n;var o=r.document,s=r.document,f=r.DocumentFragment,O=r.HTMLTemplateElement,M=r.Node,N=r.Element,j=r.NodeFilter,Y=r.NamedNodeMap,$t=Y===void 0?r.NamedNodeMap||r.MozNamedAttrMap:Y,jt=r.HTMLFormElement,Yt=r.DOMParser,te=r.trustedTypes,re=N.prototype,Vt=Q(re,"cloneNode"),Xt=Q(re,"nextSibling"),qt=Q(re,"childNodes"),_e=Q(re,"parentNode");if(typeof O=="function"){var Ae=s.createElement("template");Ae.content&&Ae.content.ownerDocument&&(s=Ae.content.ownerDocument)}var R=Bt(te,o),je=R?R.createHTML(""):"",ae=s,Ee=ae.implementation,Kt=ae.createNodeIterator,Zt=ae.createDocumentFragment,Jt=ae.getElementsByTagName,Qt=o.importNode,Ye={};try{Ye=x(s).documentMode?s.documentMode:{}}catch(i){}var D={};n.isSupported=typeof _e=="function"&&Ee&&typeof Ee.createHTMLDocument!="undefined"&&Ye!==9;var ye=It,ge=Ct,be=xt,er=kt,tr=Pt,rr=Ut,Ve=Ht,Se=Ft,p=null,Xe=l({},[].concat(g(ze),g(de),g(ve),g(Te),g(Ge))),v=null,qe=l({},[].concat(g(Be),g(he),g(We),g(ee))),c=Object.seal(Object.create(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),V=null,Re=null,Ke=!0,Oe=!0,Ze=!1,F=!1,k=!1,Ne=!1,De=!1,U=!1,ne=!1,ie=!1,Je=!0,Qe=!1,ar="user-content-",Le=!0,X=!1,H={},z=null,et=l({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]),tt=null,rt=l({},["audio","video","img","source","image","track"]),Me=null,at=l({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),oe="http://www.w3.org/1998/Math/MathML",le="http://www.w3.org/2000/svg",w="http://www.w3.org/1999/xhtml",G=w,we=!1,Ie=null,nr=l({},[oe,le,w],pe),P,ir=["application/xhtml+xml","text/html"],or="text/html",m,B=null,lr=s.createElement("form"),nt=function(e){return e instanceof RegExp||e instanceof Function},Ce=function(e){B&&B===e||((!e||L(e)!=="object")&&(e={}),e=x(e),P=ir.indexOf(e.PARSER_MEDIA_TYPE)===-1?P=or:P=e.PARSER_MEDIA_TYPE,m=P==="application/xhtml+xml"?pe:J,p="ALLOWED_TAGS"in e?l({},e.ALLOWED_TAGS,m):Xe,v="ALLOWED_ATTR"in e?l({},e.ALLOWED_ATTR,m):qe,Ie="ALLOWED_NAMESPACES"in e?l({},e.ALLOWED_NAMESPACES,pe):nr,Me="ADD_URI_SAFE_ATTR"in e?l(x(at),e.ADD_URI_SAFE_ATTR,m):at,tt="ADD_DATA_URI_TAGS"in e?l(x(rt),e.ADD_DATA_URI_TAGS,m):rt,z="FORBID_CONTENTS"in e?l({},e.FORBID_CONTENTS,m):et,V="FORBID_TAGS"in e?l({},e.FORBID_TAGS,m):{},Re="FORBID_ATTR"in e?l({},e.FORBID_ATTR,m):{},H="USE_PROFILES"in e?e.USE_PROFILES:!1,Ke=e.ALLOW_ARIA_ATTR!==!1,Oe=e.ALLOW_DATA_ATTR!==!1,Ze=e.ALLOW_UNKNOWN_PROTOCOLS||!1,F=e.SAFE_FOR_TEMPLATES||!1,k=e.WHOLE_DOCUMENT||!1,U=e.RETURN_DOM||!1,ne=e.RETURN_DOM_FRAGMENT||!1,ie=e.RETURN_TRUSTED_TYPE||!1,De=e.FORCE_BODY||!1,Je=e.SANITIZE_DOM!==!1,Qe=e.SANITIZE_NAMED_PROPS||!1,Le=e.KEEP_CONTENT!==!1,X=e.IN_PLACE||!1,Se=e.ALLOWED_URI_REGEXP||Se,G=e.NAMESPACE||w,e.CUSTOM_ELEMENT_HANDLING&&nt(e.CUSTOM_ELEMENT_HANDLING.tagNameCheck)&&(c.tagNameCheck=e.CUSTOM_ELEMENT_HANDLING.tagNameCheck),e.CUSTOM_ELEMENT_HANDLING&&nt(e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)&&(c.attributeNameCheck=e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),e.CUSTOM_ELEMENT_HANDLING&&typeof e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements=="boolean"&&(c.allowCustomizedBuiltInElements=e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),F&&(Oe=!1),ne&&(U=!0),H&&(p=l({},g(Ge)),v=[],H.html===!0&&(l(p,ze),l(v,Be)),H.svg===!0&&(l(p,de),l(v,he),l(v,ee)),H.svgFilters===!0&&(l(p,ve),l(v,he),l(v,ee)),H.mathMl===!0&&(l(p,Te),l(v,We),l(v,ee))),e.ADD_TAGS&&(p===Xe&&(p=x(p)),l(p,e.ADD_TAGS,m)),e.ADD_ATTR&&(v===qe&&(v=x(v)),l(v,e.ADD_ATTR,m)),e.ADD_URI_SAFE_ATTR&&l(Me,e.ADD_URI_SAFE_ATTR,m),e.FORBID_CONTENTS&&(z===et&&(z=x(z)),l(z,e.FORBID_CONTENTS,m)),Le&&(p["#text"]=!0),k&&l(p,["html","head","body"]),p.table&&(l(p,["tbody"]),delete V.tbody),_&&_(e),B=e)},it=l({},["mi","mo","mn","ms","mtext"]),ot=l({},["foreignobject","desc","title","annotation-xml"]),sr=l({},["title","style","font","a","script"]),se=l({},de);l(se,ve),l(se,Mt);var xe=l({},Te);l(xe,wt);var ur=function(e){var t=_e(e);(!t||!t.tagName)&&(t={namespaceURI:G,tagName:"template"});var a=J(e.tagName),u=J(t.tagName);return Ie[e.namespaceURI]?e.namespaceURI===le?t.namespaceURI===w?a==="svg":t.namespaceURI===oe?a==="svg"&&(u==="annotation-xml"||it[u]):Boolean(se[a]):e.namespaceURI===oe?t.namespaceURI===w?a==="math":t.namespaceURI===le?a==="math"&&ot[u]:Boolean(xe[a]):e.namespaceURI===w?t.namespaceURI===le&&!ot[u]||t.namespaceURI===oe&&!it[u]?!1:!xe[a]&&(sr[a]||!se[a]):!!(P==="application/xhtml+xml"&&Ie[e.namespaceURI]):!1},I=function(e){$(n.removed,{element:e});try{e.parentNode.removeChild(e)}catch(t){try{e.outerHTML=je}catch(a){e.remove()}}},ke=function(e,t){try{$(n.removed,{attribute:t.getAttributeNode(e),from:t})}catch(a){$(n.removed,{attribute:null,from:t})}if(t.removeAttribute(e),e==="is"&&!v[e])if(U||ne)try{I(t)}catch(a){}else try{t.setAttribute(e,"")}catch(a){}},lt=function(e){var t,a;if(De)e="<remove></remove>"+e;else{var u=Ot(e,/^[\r\n\t ]+/);a=u&&u[0]}P==="application/xhtml+xml"&&G===w&&(e='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+e+"</body></html>");var E=R?R.createHTML(e):e;if(G===w)try{t=new Yt().parseFromString(E,P)}catch(T){}if(!t||!t.documentElement){t=Ee.createDocument(G,"template",null);try{t.documentElement.innerHTML=we?"":E}catch(T){}}var h=t.body||t.documentElement;return e&&a&&h.insertBefore(s.createTextNode(a),h.childNodes[0]||null),G===w?Jt.call(t,k?"html":"body")[0]:k?t.documentElement:h},st=function(e){return Kt.call(e.ownerDocument||e,e,j.SHOW_ELEMENT|j.SHOW_COMMENT|j.SHOW_TEXT,null,!1)},fr=function(e){return e instanceof jt&&(typeof e.nodeName!="string"||typeof e.textContent!="string"||typeof e.removeChild!="function"||!(e.attributes instanceof $t)||typeof e.removeAttribute!="function"||typeof e.setAttribute!="function"||typeof e.namespaceURI!="string"||typeof e.insertBefore!="function"||typeof e.hasChildNodes!="function")},q=function(e){return L(M)==="object"?e instanceof M:e&&L(e)==="object"&&typeof e.nodeType=="number"&&typeof e.nodeName=="string"},C=function(e,t,a){!D[e]||Rt(D[e],function(u){u.call(n,t,a,B)})},ut=function(e){var t;if(C("beforeSanitizeElements",e,null),fr(e)||A(/[\u0080-\uFFFF]/,e.nodeName))return I(e),!0;var a=m(e.nodeName);if(C("uponSanitizeElement",e,{tagName:a,allowedTags:p}),e.hasChildNodes()&&!q(e.firstElementChild)&&(!q(e.content)||!q(e.content.firstElementChild))&&A(/<[/\w]/g,e.innerHTML)&&A(/<[/\w]/g,e.textContent)||a==="select"&&A(/<template/i,e.innerHTML))return I(e),!0;if(!p[a]||V[a]){if(!V[a]&&ct(a)&&(c.tagNameCheck instanceof RegExp&&A(c.tagNameCheck,a)||c.tagNameCheck instanceof Function&&c.tagNameCheck(a)))return!1;if(Le&&!z[a]){var u=_e(e)||e.parentNode,E=qt(e)||e.childNodes;if(E&&u)for(var h=E.length,T=h-1;T>=0;--T)u.insertBefore(Vt(E[T],!0),Xt(e))}return I(e),!0}return e instanceof N&&!ur(e)||(a==="noscript"||a==="noembed")&&A(/<\/no(script|embed)/i,e.innerHTML)?(I(e),!0):(F&&e.nodeType===3&&(t=e.textContent,t=S(t,ye," "),t=S(t,ge," "),t=S(t,be," "),e.textContent!==t&&($(n.removed,{element:e.cloneNode()}),e.textContent=t)),C("afterSanitizeElements",e,null),!1)},ft=function(e,t,a){if(Je&&(t==="id"||t==="name")&&(a in s||a in lr))return!1;if(!(Oe&&!Re[t]&&A(er,t))){if(!(Ke&&A(tr,t))){if(!v[t]||Re[t]){if(!(ct(e)&&(c.tagNameCheck instanceof RegExp&&A(c.tagNameCheck,e)||c.tagNameCheck instanceof Function&&c.tagNameCheck(e))&&(c.attributeNameCheck instanceof RegExp&&A(c.attributeNameCheck,t)||c.attributeNameCheck instanceof Function&&c.attributeNameCheck(t))||t==="is"&&c.allowCustomizedBuiltInElements&&(c.tagNameCheck instanceof RegExp&&A(c.tagNameCheck,a)||c.tagNameCheck instanceof Function&&c.tagNameCheck(a))))return!1}else if(!Me[t]){if(!A(Se,S(a,Ve,""))){if(!((t==="src"||t==="xlink:href"||t==="href")&&e!=="script"&&Nt(a,"data:")===0&&tt[e])){if(!(Ze&&!A(rr,S(a,Ve,"")))){if(a)return!1}}}}}}return!0},ct=function(e){return e.indexOf("-")>0},pt=function(e){var t,a,u,E;C("beforeSanitizeAttributes",e,null);var h=e.attributes;if(!!h){var T={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:v};for(E=h.length;E--;){t=h[E];var ue=t,d=ue.name,Pe=ue.namespaceURI;if(a=d==="value"?t.value:Dt(t.value),u=m(d),T.attrName=u,T.attrValue=a,T.keepAttr=!0,T.forceKeepAttr=void 0,C("uponSanitizeAttribute",e,T),a=T.attrValue,!T.forceKeepAttr&&(ke(d,e),!!T.keepAttr)){if(A(/\/>/i,a)){ke(d,e);continue}F&&(a=S(a,ye," "),a=S(a,ge," "),a=S(a,be," "));var mt=m(e.nodeName);if(!!ft(mt,u,a)){if(Qe&&(u==="id"||u==="name")&&(ke(d,e),a=ar+a),R&&L(te)==="object"&&typeof te.getAttributeType=="function"&&!Pe)switch(te.getAttributeType(mt,u)){case"TrustedHTML":a=R.createHTML(a);break;case"TrustedScriptURL":a=R.createScriptURL(a);break}try{Pe?e.setAttributeNS(Pe,d,a):e.setAttribute(d,a),He(n.removed)}catch(dr){}}}}C("afterSanitizeAttributes",e,null)}},cr=function i(e){var t,a=st(e);for(C("beforeSanitizeShadowDOM",e,null);t=a.nextNode();)C("uponSanitizeShadowNode",t,null),!ut(t)&&(t.content instanceof f&&i(t.content),pt(t));C("afterSanitizeShadowDOM",e,null)};return n.sanitize=function(i){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t,a,u,E,h;if(we=!i,we&&(i="<!-->"),typeof i!="string"&&!q(i)){if(typeof i.toString!="function")throw me("toString is not a function");if(i=i.toString(),typeof i!="string")throw me("dirty is not a string, aborting")}if(!n.isSupported){if(L(r.toStaticHTML)==="object"||typeof r.toStaticHTML=="function"){if(typeof i=="string")return r.toStaticHTML(i);if(q(i))return r.toStaticHTML(i.outerHTML)}return i}if(Ne||Ce(e),n.removed=[],typeof i=="string"&&(X=!1),X){if(i.nodeName){var T=m(i.nodeName);if(!p[T]||V[T])throw me("root node is forbidden and cannot be sanitized in-place")}}else if(i instanceof M)t=lt("<!---->"),a=t.ownerDocument.importNode(i,!0),a.nodeType===1&&a.nodeName==="BODY"||a.nodeName==="HTML"?t=a:t.appendChild(a);else{if(!U&&!F&&!k&&i.indexOf("<")===-1)return R&&ie?R.createHTML(i):i;if(t=lt(i),!t)return U?null:ie?je:""}t&&De&&I(t.firstChild);for(var ue=st(X?i:t);u=ue.nextNode();)u.nodeType===3&&u===E||ut(u)||(u.content instanceof f&&cr(u.content),pt(u),E=u);if(E=null,X)return i;if(U){if(ne)for(h=Zt.call(t.ownerDocument);t.firstChild;)h.appendChild(t.firstChild);else h=t;return v.shadowroot&&(h=Qt.call(o,h,!0)),h}var d=k?t.outerHTML:t.innerHTML;return k&&p["!doctype"]&&t.ownerDocument&&t.ownerDocument.doctype&&t.ownerDocument.doctype.name&&A(zt,t.ownerDocument.doctype.name)&&(d="<!DOCTYPE "+t.ownerDocument.doctype.name+`>
`+d),F&&(d=S(d,ye," "),d=S(d,ge," "),d=S(d,be," ")),R&&ie?R.createHTML(d):d},n.setConfig=function(i){Ce(i),Ne=!0},n.clearConfig=function(){B=null,Ne=!1},n.isValidAttribute=function(i,e,t){B||Ce({});var a=m(i),u=m(e);return ft(a,u,t)},n.addHook=function(i,e){typeof e=="function"&&(D[i]=D[i]||[],$(D[i],e))},n.removeHook=function(i){if(D[i])return He(D[i])},n.removeHooks=function(i){D[i]&&(D[i]=[])},n.removeAllHooks=function(){D={}},n}var Wt=$e();return Wt})}}]);
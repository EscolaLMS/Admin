(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{IDhZ:function(ne,h,g){"use strict";/** @license React v17.0.2
 * react-dom-server.browser.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var i=g("MgzW"),l=g("q1tI");function f(e){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)r+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var p=60106,x=60107,T=60108,Y=60114,R=60109,b=60110,S=60112,v=60113,c=60120,m=60115,k=60116,j=60121,N=60117,V=60119,te=60129,J=60131;if(typeof Symbol=="function"&&Symbol.for){var I=Symbol.for;p=I("react.portal"),x=I("react.fragment"),T=I("react.strict_mode"),Y=I("react.profiler"),R=I("react.provider"),b=I("react.context"),S=I("react.forward_ref"),v=I("react.suspense"),c=I("react.suspense_list"),m=I("react.memo"),k=I("react.lazy"),j=I("react.block"),N=I("react.fundamental"),V=I("react.scope"),te=I("react.debug_trace_mode"),J=I("react.legacy_hidden")}function O(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case x:return"Fragment";case p:return"Portal";case Y:return"Profiler";case T:return"StrictMode";case v:return"Suspense";case c:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case b:return(e.displayName||"Context")+".Consumer";case R:return(e._context.displayName||"Context")+".Provider";case S:var r=e.render;return r=r.displayName||r.name||"",e.displayName||(r!==""?"ForwardRef("+r+")":"ForwardRef");case m:return O(e.type);case j:return O(e._render);case k:r=e._payload,e=e._init;try{return O(e(r))}catch(t){}}return null}var y=l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,w={};function $(e,r){for(var t=e._threadCount|0;t<=r;t++)e[t]=e._currentValue2,e._threadCount=t+1}function se(e,r,t,o){if(o&&(o=e.contextType,typeof o=="object"&&o!==null))return $(o,t),o[t];if(e=e.contextTypes){t={};for(var u in e)t[u]=r[u];r=t}else r=w;return r}for(var D=new Uint16Array(16),z=0;15>z;z++)D[z]=z+1;D[15]=0;var re=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,B=Object.prototype.hasOwnProperty,A={},Z={};function _(e){return B.call(Z,e)?!0:B.call(A,e)?!1:re.test(e)?Z[e]=!0:(A[e]=!0,!1)}function le(e,r,t,o){if(t!==null&&t.type===0)return!1;switch(typeof r){case"function":case"symbol":return!0;case"boolean":return o?!1:t!==null?!t.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function ue(e,r,t,o){if(r===null||typeof r=="undefined"||le(e,r,t,o))return!0;if(o)return!1;if(t!==null)switch(t.type){case 3:return!r;case 4:return r===!1;case 5:return isNaN(r);case 6:return isNaN(r)||1>r}return!1}function E(e,r,t,o,u,a,s){this.acceptsBooleans=r===2||r===3||r===4,this.attributeName=o,this.attributeNamespace=u,this.mustUseProperty=t,this.propertyName=e,this.type=r,this.sanitizeURL=a,this.removeEmptyString=s}var F={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){F[e]=new E(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var r=e[0];F[r]=new E(r,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){F[e]=new E(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){F[e]=new E(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){F[e]=new E(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){F[e]=new E(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){F[e]=new E(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){F[e]=new E(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){F[e]=new E(e,5,!1,e.toLowerCase(),null,!1,!1)});var H=/[\-:]([a-z])/g;function pe(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var r=e.replace(H,pe);F[r]=new E(r,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var r=e.replace(H,pe);F[r]=new E(r,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var r=e.replace(H,pe);F[r]=new E(r,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){F[e]=new E(e,1,!1,e.toLowerCase(),null,!1,!1)}),F.xlinkHref=new E("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){F[e]=new E(e,1,!1,e.toLowerCase(),null,!0,!0)});var ce=/["'&<>]/;function de(e){if(typeof e=="boolean"||typeof e=="number")return""+e;e=""+e;var r=ce.exec(e);if(r){var t="",o,u=0;for(o=r.index;o<e.length;o++){switch(e.charCodeAt(o)){case 34:r="&quot;";break;case 38:r="&amp;";break;case 39:r="&#x27;";break;case 60:r="&lt;";break;case 62:r="&gt;";break;default:continue}u!==o&&(t+=e.substring(u,o)),u=o+1,t+=r}e=u!==o?t+e.substring(u,o):t}return e}function _e(e,r){var t=F.hasOwnProperty(e)?F[e]:null,o;return(o=e!=="style")&&(o=t!==null?t.type===0:!(!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")),o||ue(e,r,t,!1)?"":t!==null?(e=t.attributeName,o=t.type,o===3||o===4&&r===!0?e+'=""':(t.sanitizeURL&&(r=""+r),e+'="'+(de(r)+'"'))):_(e)?e+'="'+(de(r)+'"'):""}function Le(e,r){return e===r&&(e!==0||1/e==1/r)||e!==e&&r!==r}var Re=typeof Object.is=="function"?Object.is:Le,ee=null,ye=null,P=null,ve=!1,ge=!1,ie=null,xe=0;function fe(){if(ee===null)throw Error(f(321));return ee}function Ee(){if(0<xe)throw Error(f(312));return{memoizedState:null,queue:null,next:null}}function we(){return P===null?ye===null?(ve=!1,ye=P=Ee()):(ve=!0,P=ye):P.next===null?(ve=!1,P=P.next=Ee()):(ve=!0,P=P.next),P}function Pe(e,r,t,o){for(;ge;)ge=!1,xe+=1,P=null,t=e(r,o);return Ie(),t}function Ie(){ee=null,ge=!1,ye=null,xe=0,P=ie=null}function ke(e,r){return typeof r=="function"?r(e):r}function Oe(e,r,t){if(ee=fe(),P=we(),ve){var o=P.queue;if(r=o.dispatch,ie!==null&&(t=ie.get(o),t!==void 0)){ie.delete(o),o=P.memoizedState;do o=e(o,t.action),t=t.next;while(t!==null);return P.memoizedState=o,[o,r]}return[P.memoizedState,r]}return e=e===ke?typeof r=="function"?r():r:t!==void 0?t(r):r,P.memoizedState=e,e=P.queue={last:null,dispatch:null},e=e.dispatch=Ae.bind(null,ee,e),[P.memoizedState,e]}function Fe(e,r){if(ee=fe(),P=we(),r=r===void 0?null:r,P!==null){var t=P.memoizedState;if(t!==null&&r!==null){var o=t[1];e:if(o===null)o=!1;else{for(var u=0;u<o.length&&u<r.length;u++)if(!Re(r[u],o[u])){o=!1;break e}o=!0}if(o)return t[0]}}return e=e(),P.memoizedState=[e,r],e}function Ae(e,r,t){if(!(25>xe))throw Error(f(301));if(e===ee)if(ge=!0,e={action:t,next:null},ie===null&&(ie=new Map),t=ie.get(r),t===void 0)ie.set(r,e);else{for(r=t;r.next!==null;)r=r.next;r.next=e}}function je(){}var he=null,Ue={readContext:function(e){var r=he.threadID;return $(e,r),e[r]},useContext:function(e){fe();var r=he.threadID;return $(e,r),e[r]},useMemo:Fe,useReducer:Oe,useRef:function(e){ee=fe(),P=we();var r=P.memoizedState;return r===null?(e={current:e},P.memoizedState=e):r},useState:function(e){return Oe(ke,e)},useLayoutEffect:function(){},useCallback:function(e,r){return Fe(function(){return e},r)},useImperativeHandle:je,useEffect:je,useDebugValue:je,useDeferredValue:function(e){return fe(),e},useTransition:function(){return fe(),[function(e){e()},!1]},useOpaqueIdentifier:function(){return(he.identifierPrefix||"")+"R:"+(he.uniqueID++).toString(36)},useMutableSource:function(e,r){return fe(),r(e._source)}},Me={html:"http://www.w3.org/1999/xhtml",mathml:"http://www.w3.org/1998/Math/MathML",svg:"http://www.w3.org/2000/svg"};function Ne(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}var De={area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0},Ve=i({menuitem:!0},De),me={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},We=["Webkit","ms","Moz","O"];Object.keys(me).forEach(function(e){We.forEach(function(r){r=r+e.charAt(0).toUpperCase()+e.substring(1),me[r]=me[e]})});var $e=/([A-Z])/g,Be=/^ms-/,oe=l.Children.toArray,be=y.ReactCurrentDispatcher,Ze={listing:!0,pre:!0,textarea:!0},qe=/^[a-zA-Z][a-zA-Z:_\.\-\d]*$/,Te={},Se={};function Ye(e){if(e==null)return e;var r="";return l.Children.forEach(e,function(t){t!=null&&(r+=t)}),r}var Ke=Object.prototype.hasOwnProperty,Qe={children:null,dangerouslySetInnerHTML:null,suppressContentEditableWarning:null,suppressHydrationWarning:null};function ze(e,r){if(e===void 0)throw Error(f(152,O(r)||"Component"))}function Xe(e,r,t){function o(s,d){var n=d.prototype&&d.prototype.isReactComponent,K=se(d,r,t,n),L=[],q=!1,M={isMounted:function(){return!1},enqueueForceUpdate:function(){if(L===null)return null},enqueueReplaceState:function(Ce,U){q=!0,L=[U]},enqueueSetState:function(Ce,U){if(L===null)return null;L.push(U)}};if(n){if(n=new d(s.props,K,M),typeof d.getDerivedStateFromProps=="function"){var C=d.getDerivedStateFromProps.call(null,s.props,n.state);C!=null&&(n.state=i({},n.state,C))}}else if(ee={},n=d(s.props,K,M),n=Pe(d,s.props,n,K),n==null||n.render==null){e=n,ze(e,d);return}if(n.props=s.props,n.context=K,n.updater=M,M=n.state,M===void 0&&(n.state=M=null),typeof n.UNSAFE_componentWillMount=="function"||typeof n.componentWillMount=="function")if(typeof n.componentWillMount=="function"&&typeof d.getDerivedStateFromProps!="function"&&n.componentWillMount(),typeof n.UNSAFE_componentWillMount=="function"&&typeof d.getDerivedStateFromProps!="function"&&n.UNSAFE_componentWillMount(),L.length){M=L;var W=q;if(L=null,q=!1,W&&M.length===1)n.state=M[0];else{C=W?M[0]:n.state;var ae=!0;for(W=W?1:0;W<M.length;W++){var Q=M[W];Q=typeof Q=="function"?Q.call(n,C,s.props,K):Q,Q!=null&&(ae?(ae=!1,C=i({},C,Q)):i(C,Q))}n.state=C}}else L=null;if(e=n.render(),ze(e,d),typeof n.getChildContext=="function"&&(s=d.childContextTypes,typeof s=="object")){var X=n.getChildContext();for(var G in X)if(!(G in s))throw Error(f(108,O(d)||"Unknown",G))}X&&(r=i({},r,X))}for(;l.isValidElement(e);){var u=e,a=u.type;if(typeof a!="function")break;o(u,a)}return{child:e,context:r}}var He=function(){function e(t,o,u){l.isValidElement(t)?t.type!==x?t=[t]:(t=t.props.children,t=l.isValidElement(t)?[t]:oe(t)):t=oe(t),t={type:null,domNamespace:Me.html,children:t,childIndex:0,context:w,footer:""};var a=D[0];if(a===0){var s=D;a=s.length;var d=2*a;if(!(65536>=d))throw Error(f(304));var n=new Uint16Array(d);for(n.set(s),D=n,D[0]=a+1,s=a;s<d-1;s++)D[s]=s+1;D[d-1]=0}else D[0]=D[a];this.threadID=a,this.stack=[t],this.exhausted=!1,this.currentSelectValue=null,this.previousWasTextNode=!1,this.makeStaticMarkup=o,this.suspenseDepth=0,this.contextIndex=-1,this.contextStack=[],this.contextValueStack=[],this.uniqueID=0,this.identifierPrefix=u&&u.identifierPrefix||""}var r=e.prototype;return r.destroy=function(){if(!this.exhausted){this.exhausted=!0,this.clearProviders();var t=this.threadID;D[t]=D[0],D[0]=t}},r.pushProvider=function(t){var o=++this.contextIndex,u=t.type._context,a=this.threadID;$(u,a);var s=u[a];this.contextStack[o]=u,this.contextValueStack[o]=s,u[a]=t.props.value},r.popProvider=function(){var t=this.contextIndex,o=this.contextStack[t],u=this.contextValueStack[t];this.contextStack[t]=null,this.contextValueStack[t]=null,this.contextIndex--,o[this.threadID]=u},r.clearProviders=function(){for(var t=this.contextIndex;0<=t;t--)this.contextStack[t][this.threadID]=this.contextValueStack[t]},r.read=function(t){if(this.exhausted)return null;var o=he;he=this;var u=be.current;be.current=Ue;try{for(var a=[""],s=!1;a[0].length<t;){if(this.stack.length===0){this.exhausted=!0;var d=this.threadID;D[d]=D[0],D[0]=d;break}var n=this.stack[this.stack.length-1];if(s||n.childIndex>=n.children.length){var K=n.footer;if(K!==""&&(this.previousWasTextNode=!1),this.stack.pop(),n.type==="select")this.currentSelectValue=null;else if(n.type!=null&&n.type.type!=null&&n.type.type.$$typeof===R)this.popProvider(n.type);else if(n.type===v){this.suspenseDepth--;var L=a.pop();if(s){s=!1;var q=n.fallbackFrame;if(!q)throw Error(f(303));this.stack.push(q),a[this.suspenseDepth]+="<!--$!-->";continue}else a[this.suspenseDepth]+=L}a[this.suspenseDepth]+=K}else{var M=n.children[n.childIndex++],C="";try{C+=this.render(M,n.context,n.domNamespace)}catch(W){throw W!=null&&typeof W.then=="function"?Error(f(294)):W}finally{}a.length<=this.suspenseDepth&&a.push(""),a[this.suspenseDepth]+=C}}return a[0]}finally{be.current=u,he=o,Ie()}},r.render=function(t,o,u){if(typeof t=="string"||typeof t=="number")return u=""+t,u===""?"":this.makeStaticMarkup?de(u):this.previousWasTextNode?"<!-- -->"+de(u):(this.previousWasTextNode=!0,de(u));if(o=Xe(t,o,this.threadID),t=o.child,o=o.context,t===null||t===!1)return"";if(!l.isValidElement(t)){if(t!=null&&t.$$typeof!=null)throw u=t.$$typeof,Error(u===p?f(257):f(258,u.toString()));return t=oe(t),this.stack.push({type:null,domNamespace:u,children:t,childIndex:0,context:o,footer:""}),""}var a=t.type;if(typeof a=="string")return this.renderDOM(t,o,u);switch(a){case J:case te:case T:case Y:case c:case x:return t=oe(t.props.children),this.stack.push({type:null,domNamespace:u,children:t,childIndex:0,context:o,footer:""}),"";case v:throw Error(f(294));case V:throw Error(f(343))}if(typeof a=="object"&&a!==null)switch(a.$$typeof){case S:ee={};var s=a.render(t.props,t.ref);return s=Pe(a.render,t.props,s,t.ref),s=oe(s),this.stack.push({type:null,domNamespace:u,children:s,childIndex:0,context:o,footer:""}),"";case m:return t=[l.createElement(a.type,i({ref:t.ref},t.props))],this.stack.push({type:null,domNamespace:u,children:t,childIndex:0,context:o,footer:""}),"";case R:return a=oe(t.props.children),u={type:t,domNamespace:u,children:a,childIndex:0,context:o,footer:""},this.pushProvider(t),this.stack.push(u),"";case b:a=t.type,s=t.props;var d=this.threadID;return $(a,d),a=oe(s.children(a[d])),this.stack.push({type:t,domNamespace:u,children:a,childIndex:0,context:o,footer:""}),"";case N:throw Error(f(338));case k:return a=t.type,s=a._init,a=s(a._payload),t=[l.createElement(a,i({ref:t.ref},t.props))],this.stack.push({type:null,domNamespace:u,children:t,childIndex:0,context:o,footer:""}),""}throw Error(f(130,a==null?a:typeof a,""))},r.renderDOM=function(t,o,u){var a=t.type.toLowerCase();if(u===Me.html&&Ne(a),!Te.hasOwnProperty(a)){if(!qe.test(a))throw Error(f(65,a));Te[a]=!0}var s=t.props;if(a==="input")s=i({type:void 0},s,{defaultChecked:void 0,defaultValue:void 0,value:s.value!=null?s.value:s.defaultValue,checked:s.checked!=null?s.checked:s.defaultChecked});else if(a==="textarea"){var d=s.value;if(d==null){d=s.defaultValue;var n=s.children;if(n!=null){if(d!=null)throw Error(f(92));if(Array.isArray(n)){if(!(1>=n.length))throw Error(f(93));n=n[0]}d=""+n}d==null&&(d="")}s=i({},s,{value:void 0,children:""+d})}else if(a==="select")this.currentSelectValue=s.value!=null?s.value:s.defaultValue,s=i({},s,{value:void 0});else if(a==="option"){n=this.currentSelectValue;var K=Ye(s.children);if(n!=null){var L=s.value!=null?s.value+"":K;if(d=!1,Array.isArray(n)){for(var q=0;q<n.length;q++)if(""+n[q]===L){d=!0;break}}else d=""+n===L;s=i({selected:void 0,children:void 0},s,{selected:d,children:K})}}if(d=s){if(Ve[a]&&(d.children!=null||d.dangerouslySetInnerHTML!=null))throw Error(f(137,a));if(d.dangerouslySetInnerHTML!=null){if(d.children!=null)throw Error(f(60));if(!(typeof d.dangerouslySetInnerHTML=="object"&&"__html"in d.dangerouslySetInnerHTML))throw Error(f(61))}if(d.style!=null&&typeof d.style!="object")throw Error(f(62))}d=s,n=this.makeStaticMarkup,K=this.stack.length===1,L="<"+t.type;e:if(a.indexOf("-")===-1)q=typeof d.is=="string";else switch(a){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":q=!1;break e;default:q=!0}for(U in d)if(Ke.call(d,U)){var M=d[U];if(M!=null){if(U==="style"){var C=void 0,W="",ae="";for(C in M)if(M.hasOwnProperty(C)){var Q=C.indexOf("--")===0,X=M[C];if(X!=null){if(Q)var G=C;else if(G=C,Se.hasOwnProperty(G))G=Se[G];else{var Ce=G.replace($e,"-$1").toLowerCase().replace(Be,"-ms-");G=Se[G]=Ce}W+=ae+G+":",ae=C,Q=X==null||typeof X=="boolean"||X===""?"":Q||typeof X!="number"||X===0||me.hasOwnProperty(ae)&&me[ae]?(""+X).trim():X+"px",W+=Q,ae=";"}}M=W||null}C=null,q?Qe.hasOwnProperty(U)||(C=U,C=_(C)&&M!=null?C+'="'+(de(M)+'"'):""):C=_e(U,M),C&&(L+=" "+C)}}n||K&&(L+=' data-reactroot=""');var U=L;d="",De.hasOwnProperty(a)?U+="/>":(U+=">",d="</"+t.type+">");e:{if(n=s.dangerouslySetInnerHTML,n!=null){if(n.__html!=null){n=n.__html;break e}}else if(n=s.children,typeof n=="string"||typeof n=="number"){n=de(n);break e}n=null}return n!=null?(s=[],Ze.hasOwnProperty(a)&&n.charAt(0)===`
`&&(U+=`
`),U+=n):s=oe(s.children),t=t.type,u=u==null||u==="http://www.w3.org/1999/xhtml"?Ne(t):u==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":u,this.stack.push({domNamespace:u,type:a,children:s,childIndex:0,context:o,footer:d}),this.previousWasTextNode=!1,U},e}();h.renderToNodeStream=function(){throw Error(f(207))},h.renderToStaticMarkup=function(e,r){e=new He(e,!0,r);try{return e.read(Infinity)}finally{e.destroy()}},h.renderToStaticNodeStream=function(){throw Error(f(208))},h.renderToString=function(e,r){e=new He(e,!1,r);try{return e.read(Infinity)}finally{e.destroy()}},h.version="17.0.2"},KAy6:function(ne,h,g){"use strict";ne.exports=g("IDhZ")},NSTz:function(ne,h,g){"use strict";var i=this&&this.__assign||function(){return i=Object.assign||function(b){for(var S,v=1,c=arguments.length;v<c;v++){S=arguments[v];for(var m in S)Object.prototype.hasOwnProperty.call(S,m)&&(b[m]=S[m])}return b},i.apply(this,arguments)},l=this&&this.__createBinding||(Object.create?function(b,S,v,c){c===void 0&&(c=v),Object.defineProperty(b,c,{enumerable:!0,get:function(){return S[v]}})}:function(b,S,v,c){c===void 0&&(c=v),b[c]=S[v]}),f=this&&this.__setModuleDefault||(Object.create?function(b,S){Object.defineProperty(b,"default",{enumerable:!0,value:S})}:function(b,S){b.default=S}),p=this&&this.__importStar||function(b){if(b&&b.__esModule)return b;var S={};if(b!=null)for(var v in b)v!=="default"&&Object.prototype.hasOwnProperty.call(b,v)&&l(S,b,v);return f(S,b),S};Object.defineProperty(h,"__esModule",{value:!0}),h.EditorContextProvider=h.EditorContext=void 0;var x=g("nKUr"),T=p(g("q1tI")),Y={url:"http://localhost:1000/api/hh5p/",state:{value:"initial"}};h.EditorContext=T.default.createContext(Y);var R=function(S){var v=S.children,c=S.url,m=(0,T.useState)({value:"initial"}),k=m[0],j=m[1],N=(0,T.useMemo)(function(){return new Headers({"Content-Type":"application/json",Accept:"application/json"})},[]),V=(0,T.useCallback)(function(O){return fetch(O?"".concat(c,"/editor/").concat(O):"".concat(c,"/editor"),{headers:N}).then(function(y){if(!y.ok)throw Error("response error status ".concat(y.status));return y.json()}).then(function(y){return j(function(w){return i(i({},w),{value:"loaded",settings:y.data})}),y}).catch(function(y){j(function(w){return i(i({},w),{value:"error",error:y.toString()})})})},[c,N]),te=(0,T.useCallback)(function(O){O&&j(function(y){return i(i({},y),{value:"loaded",settings:O})})},[c,N]),J=(0,T.useCallback)(function(O){return fetch(O?"".concat(c,"/content/").concat(O):"".concat(c,"/content"),{headers:N}).then(function(y){if(!y.ok)throw Error("response error status ".concat(y.status));return y.json()}).then(function(y){return j(function(w){return i(i({},w),{value:"loaded",settings:y.data})}),y}).catch(function(y){j(function(w){return i(i({},w),{value:"error",error:y.toString()})})})},[c,N]),I=(0,T.useCallback)(function(O,y){return y===void 0&&(y=null),fetch(y?"".concat(c,"/content/").concat(y):"".concat(c,"/content"),{method:"POST",body:JSON.stringify(O),headers:N}).then(function(w){if(!w.ok)throw Error("response error status ".concat(w.status));return w.json()}).then(function(w){return w}).catch(function(w){j(function($){return i(i({},$),{value:"error",error:w.toString()})})})},[c,N]);return(0,x.jsx)(h.EditorContext.Provider,i({value:{url:c,state:k,getEditorConfig:V,getContentConfig:J,submitContent:I,seth5pObject:te}},{children:v}),void 0)};h.EditorContextProvider=R},TzOB:function(ne,h,g){"use strict";var i=this&&this.__assign||function(){return i=Object.assign||function(v){for(var c,m=1,k=arguments.length;m<k;m++){c=arguments[m];for(var j in c)Object.prototype.hasOwnProperty.call(c,j)&&(v[j]=c[j])}return v},i.apply(this,arguments)},l=this&&this.__importDefault||function(v){return v&&v.__esModule?v:{default:v}};Object.defineProperty(h,"__esModule",{value:!0}),h.Editor=void 0;var f=g("nKUr"),p=g("q1tI"),x=g("KAy6"),T=g("cYju"),Y=l(g("vh4x")),R=g("NSTz"),b=function(c){return(0,T.unescape)(c)},S=function(c){var m=c.id,k=c.onSubmit,j=(0,p.useState)(100),N=j[0],V=j[1],te=(0,p.useRef)(null),J=(0,p.useState)({state:"initial"}),I=J[0],O=J[1],y=(0,p.useContext)(R.EditorContext),w=y.state,$=y.getEditorConfig,se=y.submitContent;(0,p.useEffect)(function(){$&&$(m)},[m,$]),(0,p.useEffect)(function(){var z=function(B){if(B.origin===window.location.origin&&(B.data.iFrameHeight&&V(B.data.iFrameHeight),B.data.h5pEditorStatus)){var A=B.data;A.h5pEditorStatus==="success"&&w.value==="loaded"&&(O({state:"loading"}),se&&se(i(i({},A.data),{nonce:w.settings.nonce}),m).then(function(Z){k&&Z&&k(Z),O({state:"loaded"})}).catch(function(Z){O({state:"error",error:Z.toString()})})),A.h5pEditorStatus==="error"&&console.log(A.error)}};return window&&window.addEventListener("message",z),function(){window&&window.removeEventListener("message",z)}},[te,se,w,k,m]);var D=(0,p.useMemo)(function(){var z,re,B,A=w.value==="loaded"&&w.settings;if(!A)return"";var Z=w.value==="loaded"&&((z=w.settings)===null||z===void 0?void 0:z.contents)?(re=w.settings)===null||re===void 0?void 0:re.contents[Object.keys((B=w.settings)===null||B===void 0?void 0:B.contents)[0]]:null,_=Z?Z.jsonContent:"";try{_&&JSON.parse(_)}catch(H){return O({state:"error",error:H&&H.toString()}),null}var le=Z?Z.library:"",ue=`
    (function ($) {
        const postMessage = (data) => parent.postMessage(data, "`.concat(window.location.origin,`");
        const resizeObserver = new ResizeObserver((entries) =>
            postMessage({ iFrameHeight: entries[0].contentRect.height })
        );
        const params = `).concat("`").concat(_).concat("`",`.split("\\n").join('');
            
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
            const h5peditor = new ns.Editor('`).concat(le,`', params, document.getElementById("h5p-editor"));
            H5P.externalDispatcher.on("xAPI", (event) => postMessage(event));
            H5P.externalDispatcher.on("resize", (event) => postMessage(event));
            resizeObserver.observe(document.querySelector(".h5p-editor-wrapper"));
            $("#h5p-editor-submit").click(() => {
                h5peditor.getContent(data => postMessage({h5pEditorStatus:"success", data}), error =>  postMessage({h5pEditorStatus:"error", error}))
            } );
        };
        ns.getAjaxUrl = function (action, parameters) {
            var url = H5PIntegration.editor.ajaxPath + action;
            url += action === "files" ? "/`).concat(A.nonce,`" : "";
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
    `),E=(0,x.renderToStaticMarkup)((0,f.jsxs)("html",{children:[(0,f.jsxs)("head",{children:[(0,f.jsx)("style",{children:" body, html {margin:0; padding:0;}"},void 0),(0,f.jsx)("script",{dangerouslySetInnerHTML:{__html:"const H5PIntegration = window.H5PIntegration = ".concat(JSON.stringify(A),"; ")}},void 0),A.core.scripts.map(function(H){return(0,f.jsx)("script",{src:H},H)}),A.core.styles.map(function(H){return(0,f.jsx)("link",{type:"text/css",rel:"stylesheet",href:H},H)})]},void 0),(0,f.jsx)("body",{children:(0,f.jsxs)("div",i({className:"h5p-editor-wrapper"},{children:[(0,f.jsx)("div",i({id:"h5p-editor",className:"height-observer"},{children:"loading"}),void 0),(0,f.jsx)("p",{},void 0),(0,f.jsx)("button",i({className:"h5p-core-button",id:"h5p-editor-submit"},{children:"submit data"}),void 0),(0,f.jsx)("script",{dangerouslySetInnerHTML:{__html:ue}},void 0)]}),void 0)},void 0)]},void 0)),F=b(E);return window.URL.createObjectURL(new Blob([F],{type:"text/html"}))},[w]);return(0,f.jsxs)("div",i({className:"h5p-editor",style:{height:N,position:"relative"}},{children:[I.state==="loading"&&(0,f.jsx)(Y.default,{},void 0),I.state==="error"&&(0,f.jsxs)("p",{children:[(0,f.jsx)("pre",{children:"Error:"},void 0)," ",I.error]},void 0),D&&(0,f.jsx)("iframe",{ref:te,title:"editor",src:D,style:{width:"100%",height:"100%",margin:0,padding:0,border:"none"}},void 0)]}),void 0)};h.Editor=S,h.default=h.Editor},WJre:function(ne,h,g){"use strict";var i=this&&this.__assign||function(){return i=Object.assign||function(c){for(var m,k=1,j=arguments.length;k<j;k++){m=arguments[k];for(var N in m)Object.prototype.hasOwnProperty.call(m,N)&&(c[N]=m[N])}return c},i.apply(this,arguments)},l=this&&this.__spreadArray||function(c,m,k){if(k||arguments.length===2)for(var j=0,N=m.length,V;j<N;j++)(V||!(j in m))&&(V||(V=Array.prototype.slice.call(m,0,j)),V[j]=m[j]);return c.concat(V||Array.prototype.slice.call(m))},f=this&&this.__importDefault||function(c){return c&&c.__esModule?c:{default:c}};Object.defineProperty(h,"__esModule",{value:!0}),h.Player=void 0;var p=g("nKUr"),x=g("q1tI"),T=g("KAy6"),Y=g("cYju"),R=f(g("hKI/")),b=f(g("vh4x")),S=g("NSTz"),v=function(m){var k=m.h5pObject,j=m.id,N=m.onXAPI,V=m.styles,te=V===void 0?[]:V,J=(0,x.useState)(100),I=J[0],O=J[1],y=(0,x.useRef)(null),w=(0,x.useState)(!0),$=w[0],se=w[1],D=(0,x.useContext)(S.EditorContext),z=D.state,re=D.seth5pObject;(0,x.useEffect)(function(){k&&re&&re(k),k&&setTimeout(function(){se(!1)},1e3)},[k]);var B=(0,x.useCallback)((0,R.default)(function(_){O(_)},200,{leading:!1}),[]),A=(0,x.useCallback)(function(_){_.data.iFrameHeight&&B(_.data.iFrameHeight),_.data.statement&&N&&N(_.data)},[]);(0,x.useEffect)(function(){return window&&window.addEventListener("message",A),function(){window&&window.removeEventListener("message",A)}},[y,z,N,j]);var Z=(0,x.useMemo)(function(){var _,le,ue,E=z.value==="loaded"&&z.settings;if(!E)return"";var F=z.value==="loaded"&&((_=z.settings)===null||_===void 0?void 0:_.contents)?(le=z.settings)===null||le===void 0?void 0:le.contents[Object.keys((ue=z.settings)===null||ue===void 0?void 0:ue.contents)[0]]:null;E.core.styles=E.core.styles.concat(te);var H=F==null?void 0:F.content.library.embedTypes,pe=(0,T.renderToStaticMarkup)((0,p.jsxs)("html",{children:[(0,p.jsxs)("head",{children:[(0,p.jsx)("style",{children:`
          body, html {margin:0; padding:0;}
          iframe { border:none; margin:0; padding:0; }
          `},void 0),(0,p.jsx)("script",{children:"const H5PIntegration = window.H5PIntegration = ".concat(JSON.stringify(E),"; ")},void 0),l(l([],E.core.scripts,!0),E.loadedJs,!0).map(function(ce){return(0,p.jsx)("script",{src:ce},ce)}),l(l([],E.core.styles,!0),E.loadedCss,!0).map(function(ce){return(0,p.jsx)("link",{type:"text/css",rel:"stylesheet",href:ce},ce)}),(0,p.jsx)("script",{children:'H5P.getCrossOrigin = function (source) { return "anonymous" }'},void 0)]},void 0),(0,p.jsx)("body",{children:(0,p.jsxs)("div",i({className:"h5p-player-wrapper h5p-resize-observer"},{children:[H&&H==="div"||H===""&&(0,p.jsx)("div",{className:"h5p-content","data-content-id":j},void 0),H&&H==="iframe"&&(0,p.jsx)("div",i({className:"h5p-iframe-wrapper"},{children:(0,p.jsx)("iframe",{id:"h5p-iframe-".concat(j),className:"h5p-iframe","data-content-id":j,src:"about:blank",frameBorder:"0",scrolling:"no",title:"player"},void 0)}),void 0),(0,p.jsx)("script",{children:`
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
            `)},void 0)]}),void 0)},void 0)]},void 0));return window.URL.createObjectURL(new Blob([(0,Y.unescape)(pe).split("&#x27;").join("'")],{type:"text/html"}))},[z,j,k]);return(0,p.jsxs)("div",i({className:"h5p-player",style:{display:"flex",justifyContent:"center",alignItems:"center",alignContent:"center",flexDirection:"row"}},{children:[$&&(0,p.jsx)(b.default,{},void 0),!$&&(0,p.jsx)("iframe",{ref:y,title:"player",src:Z,style:{display:"block",border:"none",flexGrow:1,flexShrink:1,height:I}},void 0)]}),void 0)};h.Player=v,h.default=h.Player},cYju:function(ne,h,g){"use strict";g.r(h),g.d(h,"escape",function(){return Y}),g.d(h,"unescape",function(){return S});var i="",l=i.replace,f=/&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34);/g,p=/[&<>'"]/g,x={"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"},T=function(c){return x[c]},Y=function(c){return l.call(c,p,T)},R={"&amp;":"&","&#38;":"&","&lt;":"<","&#60;":"<","&gt;":">","&#62;":">","&apos;":"'","&#39;":"'","&quot;":'"',"&#34;":'"'},b=function(c){return R[c]},S=function(c){return l.call(c,f,b)}},pDTe:function(ne,h,g){"use strict";var i=this&&this.__importDefault||function(x){return x&&x.__esModule?x:{default:x}};Object.defineProperty(h,"__esModule",{value:!0}),h.Player=h.Editor=h.EditorContext=h.EditorContextProvider=void 0;var l=g("NSTz");Object.defineProperty(h,"EditorContextProvider",{enumerable:!0,get:function(){return l.EditorContextProvider}}),Object.defineProperty(h,"EditorContext",{enumerable:!0,get:function(){return l.EditorContext}});var f=i(g("TzOB"));h.Editor=f.default;var p=i(g("WJre"));h.Player=p.default,h.default={EditorContextProvider:l.EditorContextProvider,EditorContext:l.EditorContext,Editor:f.default,Player:p.default}},vh4x:function(ne,h,g){"use strict";var i=this&&this.__assign||function(){return i=Object.assign||function(p){for(var x,T=1,Y=arguments.length;T<Y;T++){x=arguments[T];for(var R in x)Object.prototype.hasOwnProperty.call(x,R)&&(p[R]=x[R])}return p},i.apply(this,arguments)};Object.defineProperty(h,"__esModule",{value:!0}),h.Loader=void 0;var l=g("nKUr"),f=function(){return(0,l.jsx)("div",i({className:"h5p-loader"},{children:(0,l.jsxs)("svg",i({xmlns:"http://www.w3.org/2000/svg",width:"101px",height:"101px",viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid"},{children:[(0,l.jsx)("g",i({transform:"rotate(0 50 50)"},{children:(0,l.jsx)("rect",i({x:"47.5",y:"24",rx:"2.5",ry:"6",width:"5",height:"12",fill:"#3080c9"},{children:(0,l.jsx)("animate",{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"1s",begin:"-0.9166666666666666s",repeatCount:"indefinite"},void 0)}),void 0)}),void 0),(0,l.jsx)("g",i({transform:"rotate(30 50 50)"},{children:(0,l.jsx)("rect",i({x:"47.5",y:"24",rx:"2.5",ry:"6",width:"5",height:"12",fill:"#3080c9"},{children:(0,l.jsx)("animate",{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"1s",begin:"-0.8333333333333334s",repeatCount:"indefinite"},void 0)}),void 0)}),void 0),(0,l.jsx)("g",i({transform:"rotate(60 50 50)"},{children:(0,l.jsx)("rect",i({x:"47.5",y:"24",rx:"2.5",ry:"6",width:"5",height:"12",fill:"#3080c9"},{children:(0,l.jsx)("animate",{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"1s",begin:"-0.75s",repeatCount:"indefinite"},void 0)}),void 0)}),void 0),(0,l.jsx)("g",i({transform:"rotate(90 50 50)"},{children:(0,l.jsx)("rect",i({x:"47.5",y:"24",rx:"2.5",ry:"6",width:"5",height:"12",fill:"#3080c9"},{children:(0,l.jsx)("animate",{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"1s",begin:"-0.6666666666666666s",repeatCount:"indefinite"},void 0)}),void 0)}),void 0),(0,l.jsx)("g",i({transform:"rotate(120 50 50)"},{children:(0,l.jsx)("rect",i({x:"47.5",y:"24",rx:"2.5",ry:"6",width:"5",height:"12",fill:"#3080c9"},{children:(0,l.jsx)("animate",{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"1s",begin:"-0.5833333333333334s",repeatCount:"indefinite"},void 0)}),void 0)}),void 0),(0,l.jsx)("g",i({transform:"rotate(150 50 50)"},{children:(0,l.jsx)("rect",i({x:"47.5",y:"24",rx:"2.5",ry:"6",width:"5",height:"12",fill:"#3080c9"},{children:(0,l.jsx)("animate",{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"1s",begin:"-0.5s",repeatCount:"indefinite"},void 0)}),void 0)}),void 0),(0,l.jsx)("g",i({transform:"rotate(180 50 50)"},{children:(0,l.jsx)("rect",i({x:"47.5",y:"24",rx:"2.5",ry:"6",width:"5",height:"12",fill:"#3080c9"},{children:(0,l.jsx)("animate",{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"1s",begin:"-0.4166666666666667s",repeatCount:"indefinite"},void 0)}),void 0)}),void 0),(0,l.jsx)("g",i({transform:"rotate(210 50 50)"},{children:(0,l.jsx)("rect",i({x:"47.5",y:"24",rx:"2.5",ry:"6",width:"5",height:"12",fill:"#3080c9"},{children:(0,l.jsx)("animate",{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"1s",begin:"-0.3333333333333333s",repeatCount:"indefinite"},void 0)}),void 0)}),void 0),(0,l.jsx)("g",i({transform:"rotate(240 50 50)"},{children:(0,l.jsx)("rect",i({x:"47.5",y:"24",rx:"2.5",ry:"6",width:"5",height:"12",fill:"#3080c9"},{children:(0,l.jsx)("animate",{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"1s",begin:"-0.25s",repeatCount:"indefinite"},void 0)}),void 0)}),void 0),(0,l.jsx)("g",i({transform:"rotate(270 50 50)"},{children:(0,l.jsx)("rect",i({x:"47.5",y:"24",rx:"2.5",ry:"6",width:"5",height:"12",fill:"#3080c9"},{children:(0,l.jsx)("animate",{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"1s",begin:"-0.16666666666666666s",repeatCount:"indefinite"},void 0)}),void 0)}),void 0),(0,l.jsx)("g",i({transform:"rotate(300 50 50)"},{children:(0,l.jsx)("rect",i({x:"47.5",y:"24",rx:"2.5",ry:"6",width:"5",height:"12",fill:"#3080c9"},{children:(0,l.jsx)("animate",{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"1s",begin:"-0.08333333333333333s",repeatCount:"indefinite"},void 0)}),void 0)}),void 0),(0,l.jsx)("g",i({transform:"rotate(330 50 50)"},{children:(0,l.jsx)("rect",i({x:"47.5",y:"24",rx:"2.5",ry:"6",width:"5",height:"12",fill:"#3080c9"},{children:(0,l.jsx)("animate",{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"1s",begin:"0s",repeatCount:"indefinite"},void 0)}),void 0)}),void 0)]}),void 0)}),void 0)};h.Loader=f,h.default=h.Loader}}]);

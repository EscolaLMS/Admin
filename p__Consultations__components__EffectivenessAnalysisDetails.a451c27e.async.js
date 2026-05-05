"use strict";(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[9584],{14836:function(Ze,H,n){n.r(H),n.d(H,{default:function(){return Tn}});var re=n(97857),c=n.n(re),ie=n(15009),b=n.n(ie),se=n(99289),A=n.n(se),C=n(5574),L=n.n(C),z=n(68400),s=n.n(z),O=n(71471),V=n(15746),I=n(74330),T=n(67294),R=n(29557),Q=n(96460),K=n(14195),J=n(3023),G=n(75358),q=n(69427),W=n(99331),o=n(5405),d=n(80854),l=n(66419),e=n(85893),ee,$,r,i,u,f,t=o.default.div(ee||(ee=s()([`
  background: white;
  border: 1px solid `,`;
  padding: 16px;
  border-radius: 10px;
  width: 260px;
  z-index: 1000;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
`])),l.Gj.border),h=o.default.div($||($=s()([`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 6px;
`]))),Z=o.default.span(r||(r=s()([`
  font-size: 16px;
  font-weight: 600;
`]))),ze=o.default.span(i||(i=s()([`
  padding: 2px 10px;
  font-weight: 700;
  border-radius: 4px;
  color: `,`;
  background: `,`15;
  border: 1px solid `,`40;
`])),function(m){return m.$color},function(m){return m.$color},function(m){return m.$color}),Ie=o.default.div(u||(u=s()([`
  font-size: 12px;
  color: `,`;
  margin-bottom: 4px;

  b {
    color: `,`;
  }
`])),l.Gj.textSecondary,l.Gj.darkText),Ke=o.default.img(f||(f=s()([`
  width: 100%;
  height: 120px;
  object-fit: cover;
  background: #262626;
  border-radius: 6px;
  margin-top: 8px;
`]))),de=function(g){var p=g.active,v=g.payload;if(!p||!v||!v.length)return null;var x=v[0].payload,D=l.Zj.find(function(ae){return ae.key===x.emotionKey})||l.Zj[6],M=(0,l.XC)(x.attention),_=x.second,F=x.interval?Number(x.interval):15,P=_+F,B="".concat((0,l.mr)(_)," - ").concat((0,l.mr)(P));return(0,e.jsxs)(t,{children:[(0,e.jsxs)(h,{children:[(0,e.jsxs)(Z,{children:[D.icon," ",(0,e.jsx)(d.FormattedMessage,{id:D.labelId})]}),(0,e.jsxs)(ze,{$color:M,children:[x.attention,"%"]})]}),(0,e.jsxs)(Ie,{children:[(0,e.jsx)(d.FormattedMessage,{id:"time_segment"}),": ",(0,e.jsx)("b",{children:B})]}),x.screen_path&&(0,e.jsx)(Ke,{src:x.screen_path,alt:"preview"})]})},ce,Ue=o.default.div(ce||(ce=s()([`
  font-size: 26px;
  text-align: center;
`]))),Be=function(g){var p=g.cx,v=g.payload;if(p===void 0||!v)return null;var x=l.Zj.find(function(D){return D.key===v.emotionKey})||l.Zj.find(function(D){return D.key===l.aU.NEUTRAL});return(0,e.jsx)("foreignObject",{x:p-15,y:30,width:30,height:40,children:(0,e.jsx)(Ue,{title:v.emotionKey,children:x.icon})},"".concat(p,"-").concat(v.time))},Ne=Be,me,pe,fe,he,ve,Xe=O.Z.Text,Ye=o.default.div(me||(me=s()([`
  width: 100%;
  overflow-x: auto;
  overflow-y: hidden;
  background: transparent;
  touch-action: pan-x;
  &::-webkit-scrollbar {
    height: 8px;
  }
  &::-webkit-scrollbar-thumb {
    background: #e8e8e8;
    border-radius: 4px;
  }
`]))),He=o.default.div(pe||(pe=s()([`
  width: `,`;
  min-width: 100%;
  display: flex;
  flex-direction: column;
  padding: 20px 0 100px 0;
`])),function(m){return m.$width}),ge=o.default.div(fe||(fe=s()([`
  margin-bottom: 16px;
  padding-left: `,`px;
`])),function(m){return m.$paddingLeft}),xe=o.default.div(he||(he=s()([`
  height: `,`px;
  width: 100%;
  position: relative;
`])),function(m){return m.$height}),je=(0,o.default)(Xe)(ve||(ve=s()([`
  font-size: 16px;
`]))),ne=45,Ve=function(g){var p=g.chartData,v=g.loading,x=g.chartWidth,D=g.resolution,M=(0,T.useCallback)(function(_,F){return p.length===0?null:(0,e.jsx)("linearGradient",{id:_,x1:"0",y1:"0",x2:"1",y2:"0",children:p.map(function(P,B){return(0,e.jsx)("stop",{offset:"".concat(B/(p.length-1)*100,"%"),stopColor:(0,l.XC)(P.attention),stopOpacity:F?.4:1},"".concat(_,"-").concat(P.time))})})},[p]);return(0,e.jsx)(V.Z,{span:24,children:(0,e.jsx)(I.Z,{spinning:v,children:(0,e.jsx)(Ye,{children:(0,e.jsxs)(He,{$width:x,children:[(0,e.jsx)(ge,{$paddingLeft:ne,children:(0,e.jsx)(je,{strong:!0,children:(0,e.jsx)(d.FormattedMessage,{id:"listeners_engagement"})})}),(0,e.jsx)(xe,{$height:380,children:(0,e.jsx)(R.h,{children:(0,e.jsxs)(Q.T,{data:p,margin:{top:10,right:30,left:0,bottom:20},children:[(0,e.jsxs)("defs",{children:[M("dynamicFill",!0),M("dynamicStroke",!1)]}),(0,e.jsx)(K.q,{strokeDasharray:"3 3",vertical:!1,stroke:"#f0f0f0"}),(0,e.jsx)(J.K,{dataKey:"time",axisLine:{stroke:l.Gj.border},tick:{fontSize:12},dy:10,interval:D>=300?0:"preserveStartEnd"}),(0,e.jsx)(G.B,{width:ne,domain:[0,100],ticks:[0,50,100],tickFormatter:function(F){return"".concat(F,"%")},axisLine:!1,tickLine:!1,tick:{fontSize:11}}),(0,e.jsx)(q.u,{content:(0,e.jsx)(de,{}),cursor:{stroke:"#40a9ff",strokeWidth:1.5}}),(0,e.jsx)(W.uN,{type:"monotone",dataKey:"attention",stroke:"url(#dynamicStroke)",strokeWidth:3,fill:"url(#dynamicFill)",isAnimationActive:!1})]})})}),(0,e.jsx)(ge,{$paddingLeft:ne,style:{marginTop:60},children:(0,e.jsx)(je,{strong:!0,children:(0,e.jsx)(d.FormattedMessage,{id:"detected_emotions"})})}),(0,e.jsx)(xe,{$height:250,children:(0,e.jsx)(R.h,{children:(0,e.jsxs)(Q.T,{data:p,margin:{top:0,right:30,left:0,bottom:100},children:[(0,e.jsx)(J.K,{dataKey:"time",axisLine:{stroke:l.Gj.border},tickLine:!1,tick:{fontSize:12},dy:10,interval:D>=300?0:"preserveStartEnd"}),(0,e.jsx)(G.B,{width:ne,axisLine:!1,tick:!1,tickLine:!1,domain:[0,100]}),(0,e.jsx)(q.u,{content:(0,e.jsx)(de,{})}),(0,e.jsx)(W.uN,{type:"monotone",dataKey:"max_emotion_percentage_val",stroke:"none",fill:"none",isAnimationActive:!1,dot:(0,e.jsx)(Ne,{})})]})})})]})})})})},Qe=Ve,Je=n(69753),qe=n(14726),te=n(78957),ye,be,Te,en=O.Z.Text,nn=(0,o.default)(qe.ZP)(ye||(ye=s()([`
  border-radius: 8px;
`]))),tn=(0,o.default)(en)(be||(be=s()([`
  font-size: 13px;
  margin-left: 4px;
`]))),an=o.default.b(Te||(Te=s()([`
  color: `,`;
`])),l.Gj.darkText),rn=function(g){var p=g.url,v=g.expirationTime;return p?(0,e.jsxs)(te.Z,{size:"middle",children:[(0,e.jsx)(nn,{type:"primary",icon:(0,e.jsx)(Je.Z,{}),size:"large",onClick:function(){return window.open(p,"_blank")},children:(0,e.jsx)(d.FormattedMessage,{id:"download_recording"})}),v&&(0,e.jsx)(tn,{type:"secondary",children:(0,e.jsx)(d.FormattedMessage,{id:"recording_available_until",values:{time:(0,e.jsx)(an,{children:(0,l.xL)(Number(v))})}})})]},"download-section"):null},sn=rn,we=n(51490),on=n(74453),ln=n(4393),Ae=n(2453),Ee=n(74656),un=n(28058),Ce,De,Me,_e,Se,Oe,Fe,Pe,ke,Le,U=O.Z.Text,dn=o.default.div(Ce||(Ce=s()([`
  padding: 0;
  min-height: 100vh;
  background: `,`;
  border-radius: 10px;
`])),l.Gj.bgLight),cn=(0,o.default)(ln.Z)(De||(De=s()([`
  background: transparent;
  box-shadow: none;
`]))),mn=(0,o.default)(V.Z)(Me||(Me=s()([`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 24px;
`]))),pn=(0,o.default)(U)(_e||(_e=s()([`
  font-size: 24px;
  font-weight: 800;
  padding: 4px 12px;
  border-radius: 6px;
  color: `,`;
  background: `,`;
  border: 1px solid `,`;
  white-space: nowrap;
`])),function(m){return m.color},function(m){return"".concat(m.color,"33")},function(m){return m.color}),fn=(0,o.default)(U)(Se||(Se=s()([`
  max-width: 250px;
`]))),hn=(0,o.default)(te.Z)(Oe||(Oe=s()([`
  background: `,`;
  padding: 8px 16px;
  border-radius: 8px;
  border: 1px solid `,`;
`])),l.Gj.white,l.Gj.border),vn=(0,o.default)(U)(Fe||(Fe=s()([`
  font-size: 13px;
`]))),gn=(0,o.default)(U)(Pe||(Pe=s()([`
  font-size: 16px;
`]))),xn=o.default.div(ke||(ke=s()([`
   display: flex;
   flex-direction: row;
   align-items: center;
   gap: 10px;
  color: `,`;
`])),l.Gj.orange),jn=(0,o.default)(U)(Le||(Le=s()([`
   margin: 0;
   color: `,`;
`])),l.Gj.orange),yn=[{value:15,label:(0,e.jsx)(d.FormattedMessage,{id:"time.seconds",values:{value:15}})},{value:30,label:(0,e.jsx)(d.FormattedMessage,{id:"time.seconds",values:{value:30}})},{value:60,label:(0,e.jsx)(d.FormattedMessage,{id:"time.minutes",values:{value:1}})},{value:300,label:(0,e.jsx)(d.FormattedMessage,{id:"time.minutes",values:{value:5}})}],bn=function(){var g=(0,d.useParams)(),p=g.modelId,v=g.id,x=(0,T.useState)(15),D=L()(x,2),M=D[0],_=D[1],F=(0,T.useState)(!1),P=L()(F,2),B=P[0],ae=P[1],wn=(0,T.useState)(null),Re=L()(wn,2),a=Re[0],An=Re[1],En=(0,T.useState)([]),Ge=L()(En,2),N=Ge[0],We=Ge[1],oe=(0,d.useSelectedRoutes)(),Cn=(0,T.useMemo)(function(){return(0,l.CR)(a!=null&&a.rating?a.rating:0)},[a==null?void 0:a.rating]),S=(0,T.useMemo)(function(){var E,k=(E=oe[oe.length-1])===null||E===void 0?void 0:E.route;return k==null?void 0:k.modelType},[oe]),Dn=(0,T.useMemo)(function(){return[{title:(0,e.jsx)(d.FormattedMessage,{id:S==="webinar"?"menu.Courses":"other_activities"})},{title:(0,e.jsx)(d.Link,{to:S==="webinar"?"/courses/webinars/list":"/other/consultations",children:(0,e.jsx)(d.FormattedMessage,{id:S==="webinar"?"webinars":"consultations"})})},{title:(a==null?void 0:a.model_name)||(0,e.jsx)(d.FormattedMessage,{id:"details"})}]},[S,a]),$e=(0,T.useMemo)(function(){return M<=30?85:150},[M]);(0,T.useEffect)(function(){var E=function(){var k=A()(b()().mark(function X(){var w;return b()().wrap(function(j){for(;;)switch(j.prev=j.next){case 0:if(!(!S||!p||!v)){j.next=2;break}return j.abrupt("return");case 2:return j.prev=2,j.next=5,(0,we.Mg)(S,p,v);case 5:w=j.sent,w!=null&&w.success&&An(w.data),j.next=12;break;case 9:j.prev=9,j.t0=j.catch(2),Ae.ZP.error("Error fetching meta data");case 12:case"end":return j.stop()}},X,null,[[2,9]])}));return function(){return k.apply(this,arguments)}}();E()},[S,p,v]),(0,T.useEffect)(function(){var E=function(){var k=A()(b()().mark(function X(){var w,le,j;return b()().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:if(a!=null&&a.id){y.next=2;break}return y.abrupt("return");case 2:return ae(!0),y.prev=3,y.next=6,(0,we.vu)(a.id,{interval:M});case 6:w=y.sent,w!=null&&w.success&&w.data&&w.data.length>0?(le=new Date(w.data[0].window_start).getTime(),j=w.data.map(function(Y){var _n=new Date(Y.window_start).getTime(),ue=Math.floor((_n-le)/1e3);return c()(c()({},Y),{},{second:ue,interval:M,time:"".concat(Math.floor(ue/60),":").concat((ue%60).toString().padStart(2,"0")),attention:Math.round(parseFloat(Y.attention)*100)||0,max_emotion_percentage_val:Math.round(parseFloat(Y.max_emotion_percentage)*100)||0,emotionKey:Y.max_emotion||l.aU.NEUTRAL})}),We(j)):We([]),y.next=14;break;case 10:y.prev=10,y.t0=y.catch(3),console.error(y.t0),Ae.ZP.error("Error fetching chart data");case 14:return y.prev=14,ae(!1),y.finish(14);case 17:case"end":return y.stop()}},X,null,[[3,10,14,17]])}));return function(){return k.apply(this,arguments)}}();E()},[a==null?void 0:a.id,M]);var Mn=(0,T.useMemo)(function(){var E=N.length*$e;return N.length>5?"".concat(E,"px"):"100%"},[N.length,$e]);return(0,e.jsx)(on._z,{header:{breadcrumb:{items:Dn},title:a==null?void 0:a.model_name,extra:[(0,e.jsx)(sn,{url:a==null?void 0:a.url,expirationTime:a==null?void 0:a.url_expiration_time_millis},"download")]},children:(0,e.jsx)(dn,{children:(0,e.jsxs)(cn,{bordered:!1,children:[(0,e.jsxs)(mn,{span:24,children:[(0,e.jsxs)(te.Z,{direction:"vertical",size:8,children:[(0,e.jsx)(gn,{strong:!0,children:(0,e.jsx)(d.FormattedMessage,{id:"engagement_rating"})}),(0,e.jsxs)(te.Z,{size:"large",children:[(0,e.jsx)(pn,{color:Cn,children:(0,l.A6)((a==null?void 0:a.rating)||0)}),(0,e.jsx)(fn,{type:"secondary",children:(0,e.jsx)(d.FormattedMessage,{id:"ai_analysis_average",values:{modelType:(0,e.jsx)(d.FormattedMessage,{id:S==="webinar"?"webinarFragment":"consultationFragment"})}})})]})]}),(0,e.jsxs)(hn,{align:"center",children:[(0,e.jsxs)(vn,{children:[(0,e.jsx)(d.FormattedMessage,{id:"resolution"}),":"]}),(0,e.jsx)(Ee.default,{value:M,onChange:_,style:{width:100},variant:"borderless",children:yn.map(function(E){return(0,e.jsx)(Ee.default.Option,{value:E.value,children:E.label},E.value)})})]})]}),(a==null?void 0:a.processing_video)&&(0,e.jsxs)(xn,{children:[(0,e.jsx)(un.Z,{}),(0,e.jsx)(jn,{children:(0,e.jsx)(d.FormattedMessage,{id:"ai_warn_video_buffer"})})]}),N&&(0,e.jsx)(Qe,{chartData:N,loading:B,chartWidth:Mn,resolution:M})]})})})},Tn=bn},51490:function(Ze,H,n){n.d(H,{FS:function(){return o},MP:function(){return J},Mg:function(){return l},SQ:function(){return Q},YG:function(){return q},YS:function(){return s},hR:function(){return T},hW:function(){return V},sL:function(){return L},vu:function(){return ee}});var re=n(15009),c=n.n(re),ie=n(97857),b=n.n(ie),se=n(99289),A=n.n(se),C=n(80854);function L(r,i){return z.apply(this,arguments)}function z(){return z=A()(c()().mark(function r(i,u){return c()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",(0,C.request)("/api/admin/consultations",b()({method:"GET",useCache:!1,params:i},u||{})));case 1:case"end":return t.stop()}},r)})),z.apply(this,arguments)}function s(r,i){return O.apply(this,arguments)}function O(){return O=A()(c()().mark(function r(i,u){return c()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",(0,C.request)("/api/admin/consultations",b()({method:"POST",headers:{"Content-Type":"application/json"},data:i},u||{})));case 1:case"end":return t.stop()}},r)})),O.apply(this,arguments)}function V(r,i){return I.apply(this,arguments)}function I(){return I=A()(c()().mark(function r(i,u){return c()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",(0,C.request)("/api/admin/consultations/".concat(i),b()({method:"GET",useCache:!1},u||{})));case 1:case"end":return t.stop()}},r)})),I.apply(this,arguments)}function T(r,i,u){return R.apply(this,arguments)}function R(){return R=A()(c()().mark(function r(i,u,f){return c()().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.abrupt("return",(0,C.request)("/api/admin/consultations/".concat(i),b()({method:"PUT",headers:{"Content-Type":"application/json"},data:u},f||{})));case 1:case"end":return h.stop()}},r)})),R.apply(this,arguments)}function Q(r,i){return K.apply(this,arguments)}function K(){return K=A()(c()().mark(function r(i,u){return c()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",(0,C.request)("/api/admin/consultations/".concat(i),b()({method:"DELETE",useCache:!1},u||{})));case 1:case"end":return t.stop()}},r)})),K.apply(this,arguments)}function J(r,i){return G.apply(this,arguments)}function G(){return G=A()(c()().mark(function r(i,u){return c()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",(0,C.request)("/api/admin/consultations/".concat(i,"/schedule"),b()({method:"GET",useCache:!1},u||{})));case 1:case"end":return t.stop()}},r)})),G.apply(this,arguments)}function q(r,i,u){return W.apply(this,arguments)}function W(){return W=A()(c()().mark(function r(i,u,f){return c()().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.abrupt("return",(0,C.request)("/api/admin/consultations/change-term/".concat(i),b()({method:"POST",headers:{"Content-Type":"application/json"},data:{executed_at:u}},f||{})));case 1:case"end":return h.stop()}},r)})),W.apply(this,arguments)}function o(r,i){return d.apply(this,arguments)}function d(){return d=A()(c()().mark(function r(i,u){return c()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",(0,C.request)("/api/admin/recommender/terms/".concat(i),{method:"GET",params:u}));case 1:case"end":return t.stop()}},r)})),d.apply(this,arguments)}function l(r,i,u,f){return e.apply(this,arguments)}function e(){return e=A()(c()().mark(function r(i,u,f,t){return c()().wrap(function(Z){for(;;)switch(Z.prev=Z.next){case 0:return Z.abrupt("return",(0,C.request)("/api/admin/recommender/analytics/".concat(i,"/").concat(u,"/").concat(f),b()({method:"GET"},t||{})));case 1:case"end":return Z.stop()}},r)})),e.apply(this,arguments)}function ee(r,i,u){return $.apply(this,arguments)}function $(){return $=A()(c()().mark(function r(i,u,f){return c()().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.abrupt("return",(0,C.request)("/api/admin/recommender/analytics/aggregated-frames/".concat(i),b()({method:"GET",params:u},f||{})));case 1:case"end":return h.stop()}},r)})),$.apply(this,arguments)}}}]);

//# sourceMappingURL=p__Consultations__components__EffectivenessAnalysisDetails.a451c27e.async.js.map
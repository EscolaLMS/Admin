!(function(){var E=Object.defineProperty,N=Object.defineProperties;var k=Object.getOwnPropertyDescriptors;var f=Object.getOwnPropertySymbols;var A=Object.prototype.hasOwnProperty,K=Object.prototype.propertyIsEnumerable;var m=(n,o,s)=>o in n?E(n,o,{enumerable:!0,configurable:!0,writable:!0,value:s}):n[o]=s,g=(n,o)=>{for(var s in o||(o={}))A.call(o,s)&&m(n,s,o[s]);if(f)for(var s of f(o))K.call(o,s)&&m(n,s,o[s]);return n},v=(n,o)=>N(n,k(o));(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[4667],{50143:function(n,o,s){var P=Object.create,p=Object.defineProperty,O=Object.getOwnPropertyDescriptor,w=Object.getOwnPropertyNames,b=Object.getPrototypeOf,x=Object.prototype.hasOwnProperty,M=(t,e,r)=>e in t?p(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,D=(t,e)=>{for(var r in e)p(t,r,{get:e[r],enumerable:!0})},h=(t,e,r,l)=>{if(e&&typeof e=="object"||typeof e=="function")for(let i of w(e))!x.call(t,i)&&i!==r&&p(t,i,{get:()=>e[i],enumerable:!(l=O(e,i))||l.enumerable});return t},j=(t,e,r)=>(r=t!=null?P(b(t)):{},h(e||!t||!t.__esModule?p(r,"default",{value:t,enumerable:!0}):r,t)),C=t=>h(p({},"__esModule",{value:!0}),t),a=(t,e,r)=>(M(t,typeof e!="symbol"?e+"":e,r),r),d={};D(d,{default:()=>u}),n.exports=C(d);var y=j(s(67294)),c=s(38045),_=s(71776);const L="https://widget.mixcloud.com/media/js/widgetApi.js",S="Mixcloud";class u extends y.Component{constructor(){super(...arguments),a(this,"callPlayer",c.callPlayer),a(this,"duration",null),a(this,"currentTime",null),a(this,"secondsLoaded",null),a(this,"mute",()=>{}),a(this,"unmute",()=>{}),a(this,"ref",e=>{this.iframe=e})}componentDidMount(){this.props.onMount&&this.props.onMount(this)}load(e){(0,c.getSDK)(L,S).then(r=>{this.player=r.PlayerWidget(this.iframe),this.player.ready.then(()=>{this.player.events.play.on(this.props.onPlay),this.player.events.pause.on(this.props.onPause),this.player.events.ended.on(this.props.onEnded),this.player.events.error.on(this.props.error),this.player.events.progress.on((l,i)=>{this.currentTime=l,this.duration=i}),this.props.onReady()})},this.props.onError)}play(){this.callPlayer("play")}pause(){this.callPlayer("pause")}stop(){}seekTo(e,r=!0){this.callPlayer("seek",e),r||this.pause()}setVolume(e){}getDuration(){return this.duration}getCurrentTime(){return this.currentTime}getSecondsLoaded(){return null}render(){const{url:e,config:r}=this.props,l=e.match(_.MATCH_URL_MIXCLOUD)[1],i={width:"100%",height:"100%"},T=(0,c.queryString)(v(g({},r.options),{feed:`/${l}/`}));return y.default.createElement("iframe",{key:l,ref:this.ref,style:i,src:`https://www.mixcloud.com/widget/iframe/?${T}`,frameBorder:"0",allow:"autoplay"})}}a(u,"displayName","Mixcloud"),a(u,"canPlay",_.canPlay.mixcloud),a(u,"loopOnEnded",!0)}}]);
}());
//# sourceMappingURL=reactPlayerMixcloud.570a1796.async.js.map
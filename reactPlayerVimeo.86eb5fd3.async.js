!(function(){var R=Object.defineProperty;var _=Object.getOwnPropertySymbols;var T=Object.prototype.hasOwnProperty,V=Object.prototype.propertyIsEnumerable;var m=(i,o,s)=>o in i?R(i,o,{enumerable:!0,configurable:!0,writable:!0,value:s}):i[o]=s,P=(i,o)=>{for(var s in o||(o={}))T.call(o,s)&&m(i,s,o[s]);if(_)for(var s of _(o))V.call(o,s)&&m(i,s,o[s]);return i};(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[3743],{80868:function(i,o,s){var g=Object.create,l=Object.defineProperty,b=Object.getOwnPropertyDescriptor,v=Object.getOwnPropertyNames,O=Object.getPrototypeOf,w=Object.prototype.hasOwnProperty,D=(t,e,r)=>e in t?l(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,L=(t,e)=>{for(var r in e)l(t,r,{get:e[r],enumerable:!0})},c=(t,e,r,u)=>{if(e&&typeof e=="object"||typeof e=="function")for(let p of v(e))!w.call(t,p)&&p!==r&&l(t,p,{get:()=>e[p],enumerable:!(u=b(e,p))||u.enumerable});return t},M=(t,e,r)=>(r=t!=null?g(O(t)):{},c(e||!t||!t.__esModule?l(r,"default",{value:t,enumerable:!0}):r,t)),k=t=>c(l({},"__esModule",{value:!0}),t),n=(t,e,r)=>(D(t,typeof e!="symbol"?e+"":e,r),r),y={};L(y,{default:()=>h}),i.exports=k(y);var d=M(s(67294)),f=s(38045),E=s(71776);const S="https://player.vimeo.com/api/player.js",C="Vimeo",j=t=>t.replace("/manage/videos","");class h extends d.Component{constructor(){super(...arguments),n(this,"callPlayer",f.callPlayer),n(this,"duration",null),n(this,"currentTime",null),n(this,"secondsLoaded",null),n(this,"mute",()=>{this.setMuted(!0)}),n(this,"unmute",()=>{this.setMuted(!1)}),n(this,"ref",e=>{this.container=e})}componentDidMount(){this.props.onMount&&this.props.onMount(this)}load(e){this.duration=null,(0,f.getSDK)(S,C).then(r=>{if(!this.container)return;const{playerOptions:u,title:p}=this.props.config;this.player=new r.Player(this.container,P({url:j(e),autoplay:this.props.playing,muted:this.props.muted,loop:this.props.loop,playsinline:this.props.playsinline,controls:this.props.controls},u)),this.player.ready().then(()=>{const a=this.container.querySelector("iframe");a.style.width="100%",a.style.height="100%",p&&(a.title=p)}).catch(this.props.onError),this.player.on("loaded",()=>{this.props.onReady(),this.refreshDuration()}),this.player.on("play",()=>{this.props.onPlay(),this.refreshDuration()}),this.player.on("pause",this.props.onPause),this.player.on("seeked",a=>this.props.onSeek(a.seconds)),this.player.on("ended",this.props.onEnded),this.player.on("error",this.props.onError),this.player.on("timeupdate",({seconds:a})=>{this.currentTime=a}),this.player.on("progress",({seconds:a})=>{this.secondsLoaded=a}),this.player.on("bufferstart",this.props.onBuffer),this.player.on("bufferend",this.props.onBufferEnd),this.player.on("playbackratechange",a=>this.props.onPlaybackRateChange(a.playbackRate))},this.props.onError)}refreshDuration(){this.player.getDuration().then(e=>{this.duration=e})}play(){const e=this.callPlayer("play");e&&e.catch(this.props.onError)}pause(){this.callPlayer("pause")}stop(){this.callPlayer("unload")}seekTo(e,r=!0){this.callPlayer("setCurrentTime",e),r||this.pause()}setVolume(e){this.callPlayer("setVolume",e)}setMuted(e){this.callPlayer("setMuted",e)}setLoop(e){this.callPlayer("setLoop",e)}setPlaybackRate(e){this.callPlayer("setPlaybackRate",e)}getDuration(){return this.duration}getCurrentTime(){return this.currentTime}getSecondsLoaded(){return this.secondsLoaded}render(){const{display:e}=this.props,r={width:"100%",height:"100%",overflow:"hidden",display:e};return d.default.createElement("div",{key:this.props.url,ref:this.ref,style:r})}}n(h,"displayName","Vimeo"),n(h,"canPlay",E.canPlay.vimeo),n(h,"forceLoad",!0)}}]);
}());
//# sourceMappingURL=reactPlayerVimeo.86eb5fd3.async.js.map
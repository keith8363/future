import{A as M,g as P,L as R,m as D,O as A,N as S,H as z}from"./index.84a6fe3f.js";var I=Object.defineProperty,m=(t,i,e)=>{return a=e,(n=typeof i!="symbol"?i+"":i)in(s=t)?I(s,n,{enumerable:!0,configurable:!0,writable:!0,value:a}):s[n]=a,e;var s,n,a};const T=(t,i)=>Math.floor(Math.random()*(i+1-t)+t),q=class{constructor(t,i){m(this,"x"),m(this,"y"),m(this,"size"),m(this,"canvas"),m(this,"ctx"),m(this,"startTime"),this.canvas=t,this.ctx=i,this.startTime=Date.now();const e=Math.min(t.value.width,t.value.height)/2,s=t.value.width/2,n=t.value.height/2,a=T(0,360)*Math.PI/180;this.x=s+e*Math.cos(a),this.y=n+e*Math.sin(a),this.size=T(2*devicePixelRatio,7*devicePixelRatio)}draw(){this.ctx.beginPath(),this.ctx.fillStyle="#5500ff",this.ctx.arc(this.x,this.y,this.size,0,2*Math.PI),this.ctx.fill()}moveTo(t,i){const e=this.x,s=this.y,n=(t-e)/500,a=(i-s)/500,o=()=>{const c=Date.now()-this.startTime,u=e+n*c,g=s+a*c;if(this.x=u,this.y=g,c>=500)return this.x=t,void(this.y=i);requestAnimationFrame(o)};o()}},C=M({name:"Canvas",components:{},setup(){let t=P(),i=[],e=P();R(()=>{s()});const s=()=>{var h;t.value.width=window.innerWidth*devicePixelRatio,t.value.height=window.innerHeight*devicePixelRatio,e=(h=t.value)==null?void 0:h.getContext("2d",{willReadFrequently:!0}),n()},n=()=>{u(),c(),i.forEach(h=>h.draw()),requestAnimationFrame(n)},a=()=>new Date().toTimeString().substring(0,8);let o=a();const c=()=>{const h=a();if(o===h)return;u(),o=h;const{width:w,height:d}=t.value;e.fillStyle="#000",e.textBaseline="middle",e.font=140*devicePixelRatio+"px 'DS-Digital',sans-serif";const f=e.measureText(o).width;e.fillText(o,(w-f)/2,d/2);const l=g();u(),l.forEach((x,r)=>{let v=i[r];v||(v=new q(t,e),i.push(v));const[p,y]=l[r];v.moveTo(p,y)}),l.length<i.length&&i.splice(l.length)},u=()=>{e.clearRect(0,0,t.value.width,t.value.height)},g=()=>{const{width:h,height:w,data:d}=e.getImageData(0,0,t.value.width,t.value.height),f=[];for(let l=0;l<h;l+=6)for(let x=0;x<w;x+=6){const r=4*(l+x*h),v=d[r],p=d[r+1],y=d[r+2],b=d[r+3];v===0&&p===0&&y===0&&b===255&&f.push([l,x])}return f};return{canvas:t,initCanvasSize:s,particles:i,begin:n,ctx:e,update:c,time:o,getPoints:g,getTime:a,clear:u}}}),F={class:"app-container"},H={ref:"canvas"},E=D(C,[["render",function(t,i,e,s,n,a){return A(),S("div",F,[z("canvas",H,null,512)])}],["__scopeId","data-v-7d839780"]]);export{E as default};
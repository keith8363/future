var t=Object.defineProperty,e=(e,i,a)=>(((e,i,a)=>{i in e?t(e,i,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[i]=a})(e,"symbol"!=typeof i?i+"":i,a),a);import{d as i,A as a,o as s,_ as n,c as h,l,b as o}from"./main.ef1a9188.js";const c=(t,e)=>Math.floor(Math.random()*(e+1-t)+t);const r=class{constructor(t,i){e(this,"x"),e(this,"y"),e(this,"size"),e(this,"canvas"),e(this,"ctx"),e(this,"startTime"),this.canvas=t,this.ctx=i,this.startTime=Date.now();const a=Math.min(t.value.width,t.value.height)/2,s=t.value.width/2,n=t.value.height/2,h=c(0,360)*Math.PI/180;this.x=s+a*Math.cos(h),this.y=n+a*Math.sin(h),this.size=c(2*devicePixelRatio,7*devicePixelRatio)}draw(){this.ctx.beginPath(),this.ctx.fillStyle="#5500ff",this.ctx.arc(this.x,this.y,this.size,0,2*Math.PI),this.ctx.fill()}moveTo(t,e){const i=this.x,a=this.y,s=(t-i)/500,n=(e-a)/500,h=()=>{const l=Date.now()-this.startTime,o=i+s*l,c=a+n*l;if(this.x=o,this.y=c,l>=500)return this.x=t,void(this.y=e);requestAnimationFrame(h)};h()}},d=i({name:"Canvas",components:{},setup(){let t=a(),e=[],i=a();s((()=>{n()}));const n=()=>{var e;t.value.width=window.innerWidth*devicePixelRatio,t.value.height=window.innerHeight*devicePixelRatio,i=null==(e=t.value)?void 0:e.getContext("2d",{willReadFrequently:!0}),h()},h=()=>{d(),c(),e.forEach((t=>t.draw())),requestAnimationFrame(h)},l=()=>(new Date).toTimeString().substring(0,8);let o=l();const c=()=>{const a=l();if(o===a)return;d(),o=a;const{width:s,height:n}=t.value;i.fillStyle="#000",i.textBaseline="middle",i.font=140*devicePixelRatio+"px 'DS-Digital',sans-serif";const h=i.measureText(o).width;i.fillText(o,(s-h)/2,n/2);const c=u();d(),c.forEach(((a,s)=>{let n=e[s];n||(n=new r(t,i),e.push(n));const[h,l]=c[s];n.moveTo(h,l)})),c.length<e.length&&e.splice(c.length)},d=()=>{i.clearRect(0,0,t.value.width,t.value.height)},u=()=>{const{width:e,height:a,data:s}=i.getImageData(0,0,t.value.width,t.value.height),n=[];for(let t=0;t<e;t+=6)for(let i=0;i<a;i+=6){const a=4*(t+i*e),h=s[a],l=s[a+1],o=s[a+2],c=s[a+3];0===h&&0===l&&0===o&&255===c&&n.push([t,i])}return n};return{canvas:t,initCanvasSize:n,particles:e,begin:h,ctx:i,update:c,time:o,getPoints:u,getTime:l,clear:d}}}),u={class:"app-container"},v={ref:"canvas"};const m=n(d,[["render",function(t,e,i,a,s,n){return o(),h("div",u,[l("canvas",v,null,512)])}],["__scopeId","data-v-7d839780"]]);export{m as default};
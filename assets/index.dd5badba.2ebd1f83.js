import{k as e,q as t,o as s,ck as a,b as n,g as o,cl as l,z as r,O as u,r as d,t as p,m as i,ad as c,at as m,B as f,L as g,G as y,l as v,u as b,W as x,h as C,P as h,U as S,J as B,$ as N,af as T,n as k,cm as _,cn as j,e as M,co as $,N as w,am as I,ae as L,aM as O,F as z,X as A,M as E,A as H,S as U,T as D,cp as F,aa as Z,cq as q,cr as R,ax as P,cs as G,ay as W,ct as X,a8 as J}from"./entry.e2750861.js";import{m as K}from"./index.27787cb1.fc55973a.js";import{o as Q}from"./typescript.72bf8adc.34d94408.js";const V=e({a11y:{type:Boolean,default:!0},locale:{type:t(Object)},size:s,button:{type:t(Object)},experimentalFeatures:{type:t(Object)},keyboardNavigation:{type:Boolean,default:!0},message:{type:t(Object)},zIndex:Number,namespace:{type:String,default:"el"},...a}),Y={};n({name:"ElConfigProvider",props:V,setup(e,{slots:t}){o((()=>e.message),(e=>{Object.assign(Y,null!=e?e:{})}),{immediate:!0,deep:!0});const s=l(e);return()=>r(t,"default",{config:null==s?void 0:s.value})}});const ee=e({value:{type:[String,Number],default:""},max:{type:Number,default:99},isDot:Boolean,hidden:Boolean,type:{type:String,values:["primary","success","warning","info","danger"],default:"danger"},showZero:{type:Boolean,default:!0},color:String,dotStyle:{type:t([String,Object,Array])},badgeStyle:{type:t([String,Object,Array])},offset:{type:t(Array),default:[0,0]},dotClass:{type:String},badgeClass:{type:String}}),te=["textContent"],se=n({name:"ElBadge"}),ae=u(d(n({...se,props:ee,setup(e,{expose:t}){const s=e,a=p("badge"),n=i((()=>s.isDot?"":c(s.value)&&c(s.max)?s.max<s.value?`${s.max}+`:0!==s.value||s.showZero?`${s.value}`:"":`${s.value}`)),o=i((()=>{var e,t,a,n,o,l;return[{backgroundColor:s.color,marginRight:m(-(null!=(t=null==(e=s.offset)?void 0:e[0])?t:0)),marginTop:m(null!=(n=null==(a=s.offset)?void 0:a[1])?n:0)},null!=(o=s.dotStyle)?o:{},null!=(l=s.badgeStyle)?l:{}]}));return K({from:"dot-style",replacement:"badge-style",version:"2.8.0",scope:"el-badge",ref:"https://element-plus.org/en-US/component/badge.html"},i((()=>!!s.dotStyle))),K({from:"dot-class",replacement:"badge-class",version:"2.8.0",scope:"el-badge",ref:"https://element-plus.org/en-US/component/badge.html"},i((()=>!!s.dotClass))),t({content:n}),(e,t)=>(f(),g("div",{class:C(h(a).b())},[r(e.$slots,"default"),y(T,{name:`${h(a).namespace.value}-zoom-in-center`,persisted:""},{default:v((()=>[b(x("sup",{class:C([h(a).e("content"),h(a).em("content",e.type),h(a).is("fixed",!!e.$slots.default),h(a).is("dot",e.isDot),e.dotClass,e.badgeClass]),style:S(h(o)),textContent:B(h(n))},null,14,te),[[N,!e.hidden&&(h(n)||e.isDot)]])])),_:1},8,["name"])],2))}}),[["__file","badge.vue"]])),ne=["success","info","warning","error"],oe=Q({customClass:"",center:!1,dangerouslyUseHTMLString:!1,duration:3e3,icon:void 0,id:"",message:"",onClose:void 0,showClose:!1,type:"info",plain:!1,offset:16,zIndex:0,grouping:!1,repeatNum:1,appendTo:Z?document.body:void 0}),le=e({customClass:{type:String,default:oe.customClass},center:{type:Boolean,default:oe.center},dangerouslyUseHTMLString:{type:Boolean,default:oe.dangerouslyUseHTMLString},duration:{type:Number,default:oe.duration},icon:{type:k,default:oe.icon},id:{type:String,default:oe.id},message:{type:t([String,Object,Function]),default:oe.message},onClose:{type:t(Function),default:oe.onClose},showClose:{type:Boolean,default:oe.showClose},type:{type:String,values:ne,default:oe.type},plain:{type:Boolean,default:oe.plain},offset:{type:Number,default:oe.offset},zIndex:{type:Number,default:oe.zIndex},grouping:{type:Boolean,default:oe.grouping},repeatNum:{type:Number,default:oe.repeatNum}}),re=_([]),ue=["id"],de=["innerHTML"],pe=n({name:"ElMessage"});var ie=d(n({...pe,props:le,emits:{destroy:()=>!0},setup(e,{expose:t}){const s=e,{Close:a}=q,{ns:n,zIndex:l}=j("message"),{currentZIndex:u,nextZIndex:d}=l,p=M(),c=M(!1),m=M(0);let k;const _=i((()=>s.type?"error"===s.type?"danger":s.type:"info")),F=i((()=>{const e=s.type;return{[n.bm("icon",e)]:e&&$[e]}})),Z=i((()=>s.icon||$[s.type]||"")),P=i((()=>(e=>{const{prev:t}=(e=>{const t=re.findIndex((t=>t.id===e)),s=re[t];let a;return t>0&&(a=re[t-1]),{current:s,prev:a}})(e);return t?t.vm.exposed.bottom.value:0})(s.id))),G=i((()=>{return e=s.id,t=s.offset,(re.findIndex((t=>t.id===e))>0?16:t)+P.value;var e,t})),W=i((()=>m.value+G.value)),X=i((()=>({top:`${G.value}px`,zIndex:u.value})));function J(){0!==s.duration&&({stop:k}=R((()=>{Q()}),s.duration))}function K(){null==k||k()}function Q(){c.value=!1}return w((()=>{J(),d(),c.value=!0})),o((()=>s.repeatNum),(()=>{K(),J()})),I(document,"keydown",(function({code:e}){e===L.esc&&Q()})),O(p,(()=>{m.value=p.value.getBoundingClientRect().height})),t({visible:c,bottom:W,close:Q}),(e,t)=>(f(),z(T,{name:h(n).b("fade"),onBeforeLeave:e.onClose,onAfterLeave:t[0]||(t[0]=t=>e.$emit("destroy")),persisted:""},{default:v((()=>[b(x("div",{id:e.id,ref_key:"messageRef",ref:p,class:C([h(n).b(),{[h(n).m(e.type)]:e.type},h(n).is("center",e.center),h(n).is("closable",e.showClose),h(n).is("plain",e.plain),e.customClass]),style:S(h(X)),role:"alert",onMouseenter:K,onMouseleave:J},[e.repeatNum>1?(f(),z(h(ae),{key:0,value:e.repeatNum,type:h(_),class:C(h(n).e("badge"))},null,8,["value","type","class"])):A("v-if",!0),h(Z)?(f(),z(h(E),{key:1,class:C([h(n).e("icon"),h(F)])},{default:v((()=>[(f(),z(H(h(Z))))])),_:1},8,["class"])):A("v-if",!0),r(e.$slots,"default",{},(()=>[e.dangerouslyUseHTMLString?(f(),g(U,{key:1},[A(" Caution here, message could've been compromised, never use user's input as message "),x("p",{class:C(h(n).e("content")),innerHTML:e.message},null,10,de)],2112)):(f(),g("p",{key:0,class:C(h(n).e("content"))},B(e.message),3))])),e.showClose?(f(),z(h(E),{key:2,class:C(h(n).e("closeBtn")),onClick:D(Q,["stop"])},{default:v((()=>[y(h(a))])),_:1},8,["class","onClick"])):A("v-if",!0)],46,ue),[[N,c.value]])])),_:3},8,["name","onBeforeLeave"]))}}),[["__file","message.vue"]]);let ce=1;const me=e=>{const t=!e||P(e)||G(e)||W(e)?{message:e}:e,s={...oe,...t};if(s.appendTo){if(P(s.appendTo)){let e=document.querySelector(s.appendTo);J(e)||(e=document.body),s.appendTo=e}}else s.appendTo=document.body;return s},fe=(e={},t)=>{if(!Z)return{close:()=>{}};if(c(Y.max)&&re.length>=Y.max)return{close:()=>{}};const s=me(e);if(s.grouping&&re.length){const e=re.find((({vnode:e})=>{var t;return(null==(t=e.props)?void 0:t.message)===s.message}));if(e)return e.props.repeatNum+=1,e.props.type=s.type,e.handler}const a=(({appendTo:e,...t},s)=>{const a="message_"+ce++,n=t.onClose,o=document.createElement("div"),l={...t,id:a,onClose:()=>{null==n||n(),(e=>{const t=re.indexOf(e);if(-1===t)return;re.splice(t,1);const{handler:s}=e;s.close()})(p)},onDestroy:()=>{X(null,o)}},r=y(ie,l,W(l.message)||G(l.message)?{default:W(l.message)?l.message:()=>l.message}:null);r.appContext=s||fe._context,X(r,o),e.appendChild(o.firstElementChild);const u=r.component,d={close:()=>{u.exposed.visible.value=!1}},p={id:a,vnode:r,vm:u,handler:d,props:r.component.props};return p})(s,t);return re.push(a),a.handler};ne.forEach((e=>{fe[e]=(t={},s)=>{const a=me(t);return fe({...a,type:e},s)}})),fe.closeAll=function(e){for(const t of re)e&&e!==t.props.type||t.handler.close()},fe._context=null;const ge=F(fe,"$message");export{ge as v};
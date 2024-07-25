import{D as Tc,B as Sc,ba as Wt,bb as Mc,bc as Ec,bd as Ac,be as Dc,bf as $u,bg as Cc,bh as Lc,bi as Pc,bj as Oc,bk as je,bl as Rc,bm as Cn,bn as ft,bo as xr,bp as th,bq as eh,br as wi,bs as rh,bt as ga,bu as _a,bv as Zs,bw as nh,bx as Ca,by as Nc,bz as Ic,bA as Fc,bB as Bc,bC as zc,bD as Ti,bE as Xe,bF as Tn,bG as Ts,bH as Uc,bI as Wo,bJ as Gc,bK as Le,bL as Pe,bM as We,bN as kc,bO as Ai,bP as Hc,bQ as Vc,bR as gn,bS as La,bT as Ys,bU as jo,bV as Ks,bW as ih,bX as Js,m as Wc,A as jc,g as ja,L as Xc,bY as qc,bZ as Zc,n as Yc,O as Kc,N as Jc,H as Xa,X as Qc,P as Qs,t as $c,b_ as $s,b$ as td,c0 as ed,c1 as rd,c2 as nd,c3 as tl,c4 as id,c5 as el,c6 as ad,c7 as od,c8 as sd,c9 as ld,ca as rl,cb as ud,cc as hd,cd,ce as dd,cf as fd,cg as pd,ch as md,ci as gd,cj as _d}from"./index.84a6fe3f.js";import{g as nl}from"./index.dd5badba.2ebd1f83.1721912892732.af17283f.js";import"./index.27787cb1.fc55973a.1721912892732.869a2565.js";import"./typescript.72bf8adc.34d94408.1721912892732.85022a64.js";var Ss={isDimensionStacked:hd,enableDataStack:cd,getStackedDimension:dd};function Ms(t,e){var r=e;e instanceof Tn||(r=new Tn(e));var n=fd(r);return n.setExtent(t[0],t[1]),pd(n,r),n}function ah(t,e){return function(){return t.apply(e,arguments)}}const{toString:vd}=Object.prototype,{getPrototypeOf:Es}=Object,va=(qa=Object.create(null),t=>{const e=vd.call(t);return qa[e]||(qa[e]=e.slice(8,-1).toLowerCase())});var qa;const Oe=t=>(t=t.toLowerCase(),e=>va(e)===t),Pa=t=>e=>typeof e===t,{isArray:cn}=Array,$n=Pa("undefined"),il=Oe("ArrayBuffer"),yd=Pa("string"),de=Pa("function"),al=Pa("number"),Di=t=>t!==null&&typeof t=="object",Ci=t=>{if(va(t)!=="object")return!1;const e=Es(t);return!(e!==null&&e!==Object.prototype&&Object.getPrototypeOf(e)!==null||Symbol.toStringTag in t||Symbol.iterator in t)},xd=Oe("Date"),bd=Oe("File"),wd=Oe("Blob"),Td=Oe("FileList"),Sd=Oe("URLSearchParams"),[Md,Ed,Ad,Dd]=["ReadableStream","Request","Response","Headers"].map(Oe);function ti(t,e,{allOwnKeys:r=!1}={}){if(t==null)return;let n,i;if(typeof t!="object"&&(t=[t]),cn(t))for(n=0,i=t.length;n<i;n++)e.call(null,t[n],n,t);else{const a=r?Object.getOwnPropertyNames(t):Object.keys(t),o=a.length;let s;for(n=0;n<o;n++)s=a[n],e.call(null,t[s],s,t)}}function ol(t,e){e=e.toLowerCase();const r=Object.keys(t);let n,i=r.length;for(;i-- >0;)if(n=r[i],e===n.toLowerCase())return n;return null}const oh=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,sl=t=>!$n(t)&&t!==oh,Cd=(Za=typeof Uint8Array<"u"&&Es(Uint8Array),t=>Za&&t instanceof Za);var Za;const Ld=Oe("HTMLFormElement"),ll=(({hasOwnProperty:t})=>(e,r)=>t.call(e,r))(Object.prototype),Pd=Oe("RegExp"),ul=(t,e)=>{const r=Object.getOwnPropertyDescriptors(t),n={};ti(r,(i,a)=>{let o;(o=e(i,a,t))!==!1&&(n[a]=o||i)}),Object.defineProperties(t,n)},Ya="abcdefghijklmnopqrstuvwxyz",hl="0123456789",cl={DIGIT:hl,ALPHA:Ya,ALPHA_DIGIT:Ya+Ya.toUpperCase()+hl},Od=Oe("AsyncFunction"),C={isArray:cn,isArrayBuffer:il,isBuffer:function(t){return t!==null&&!$n(t)&&t.constructor!==null&&!$n(t.constructor)&&de(t.constructor.isBuffer)&&t.constructor.isBuffer(t)},isFormData:t=>{let e;return t&&(typeof FormData=="function"&&t instanceof FormData||de(t.append)&&((e=va(t))==="formdata"||e==="object"&&de(t.toString)&&t.toString()==="[object FormData]"))},isArrayBufferView:function(t){let e;return e=typeof ArrayBuffer<"u"&&ArrayBuffer.isView?ArrayBuffer.isView(t):t&&t.buffer&&il(t.buffer),e},isString:yd,isNumber:al,isBoolean:t=>t===!0||t===!1,isObject:Di,isPlainObject:Ci,isReadableStream:Md,isRequest:Ed,isResponse:Ad,isHeaders:Dd,isUndefined:$n,isDate:xd,isFile:bd,isBlob:wd,isRegExp:Pd,isFunction:de,isStream:t=>Di(t)&&de(t.pipe),isURLSearchParams:Sd,isTypedArray:Cd,isFileList:Td,forEach:ti,merge:function t(){const{caseless:e}=sl(this)&&this||{},r={},n=(i,a)=>{const o=e&&ol(r,a)||a;Ci(r[o])&&Ci(i)?r[o]=t(r[o],i):Ci(i)?r[o]=t({},i):cn(i)?r[o]=i.slice():r[o]=i};for(let i=0,a=arguments.length;i<a;i++)arguments[i]&&ti(arguments[i],n);return r},extend:(t,e,r,{allOwnKeys:n}={})=>(ti(e,(i,a)=>{r&&de(i)?t[a]=ah(i,r):t[a]=i},{allOwnKeys:n}),t),trim:t=>t.trim?t.trim():t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""),stripBOM:t=>(t.charCodeAt(0)===65279&&(t=t.slice(1)),t),inherits:(t,e,r,n)=>{t.prototype=Object.create(e.prototype,n),t.prototype.constructor=t,Object.defineProperty(t,"super",{value:e.prototype}),r&&Object.assign(t.prototype,r)},toFlatObject:(t,e,r,n)=>{let i,a,o;const s={};if(e=e||{},t==null)return e;do{for(i=Object.getOwnPropertyNames(t),a=i.length;a-- >0;)o=i[a],n&&!n(o,t,e)||s[o]||(e[o]=t[o],s[o]=!0);t=r!==!1&&Es(t)}while(t&&(!r||r(t,e))&&t!==Object.prototype);return e},kindOf:va,kindOfTest:Oe,endsWith:(t,e,r)=>{t=String(t),(r===void 0||r>t.length)&&(r=t.length),r-=e.length;const n=t.indexOf(e,r);return n!==-1&&n===r},toArray:t=>{if(!t)return null;if(cn(t))return t;let e=t.length;if(!al(e))return null;const r=new Array(e);for(;e-- >0;)r[e]=t[e];return r},forEachEntry:(t,e)=>{const r=(t&&t[Symbol.iterator]).call(t);let n;for(;(n=r.next())&&!n.done;){const i=n.value;e.call(t,i[0],i[1])}},matchAll:(t,e)=>{let r;const n=[];for(;(r=t.exec(e))!==null;)n.push(r);return n},isHTMLForm:Ld,hasOwnProperty:ll,hasOwnProp:ll,reduceDescriptors:ul,freezeMethods:t=>{ul(t,(e,r)=>{if(de(t)&&["arguments","caller","callee"].indexOf(r)!==-1)return!1;const n=t[r];de(n)&&(e.enumerable=!1,"writable"in e?e.writable=!1:e.set||(e.set=()=>{throw Error("Can not rewrite read-only method '"+r+"'")}))})},toObjectSet:(t,e)=>{const r={},n=i=>{i.forEach(a=>{r[a]=!0})};return cn(t)?n(t):n(String(t).split(e)),r},toCamelCase:t=>t.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(e,r,n){return r.toUpperCase()+n}),noop:()=>{},toFiniteNumber:(t,e)=>t!=null&&Number.isFinite(t=+t)?t:e,findKey:ol,global:oh,isContextDefined:sl,ALPHABET:cl,generateString:(t=16,e=cl.ALPHA_DIGIT)=>{let r="";const{length:n}=e;for(;t--;)r+=e[Math.random()*n|0];return r},isSpecCompliantForm:function(t){return!!(t&&de(t.append)&&t[Symbol.toStringTag]==="FormData"&&t[Symbol.iterator])},toJSONObject:t=>{const e=new Array(10),r=(n,i)=>{if(Di(n)){if(e.indexOf(n)>=0)return;if(!("toJSON"in n)){e[i]=n;const a=cn(n)?[]:{};return ti(n,(o,s)=>{const l=r(o,i+1);!$n(l)&&(a[s]=l)}),e[i]=void 0,a}}return n};return r(t,0)},isAsyncFn:Od,isThenable:t=>t&&(Di(t)||de(t))&&de(t.then)&&de(t.catch)};function Q(t,e,r,n,i){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=t,this.name="AxiosError",e&&(this.code=e),r&&(this.config=r),n&&(this.request=n),i&&(this.response=i)}C.inherits(Q,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:C.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const dl=Q.prototype,fl={};function Ka(t){return C.isPlainObject(t)||C.isArray(t)}function sh(t){return C.endsWith(t,"[]")?t.slice(0,-2):t}function pl(t,e,r){return t?t.concat(e).map(function(n,i){return n=sh(n),!r&&i?"["+n+"]":n}).join(r?".":""):e}["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(t=>{fl[t]={value:t}}),Object.defineProperties(Q,fl),Object.defineProperty(dl,"isAxiosError",{value:!0}),Q.from=(t,e,r,n,i,a)=>{const o=Object.create(dl);return C.toFlatObject(t,o,function(s){return s!==Error.prototype},s=>s!=="isAxiosError"),Q.call(o,t.message,e,r,n,i),o.cause=t,o.name=t.name,a&&Object.assign(o,a),o};const Rd=C.toFlatObject(C,{},null,function(t){return/^is[A-Z]/.test(t)});function ya(t,e,r){if(!C.isObject(t))throw new TypeError("target must be an object");e=e||new FormData;const n=(r=C.toFlatObject(r,{metaTokens:!0,dots:!1,indexes:!1},!1,function(d,f){return!C.isUndefined(f[d])})).metaTokens,i=r.visitor||u,a=r.dots,o=r.indexes,s=(r.Blob||typeof Blob<"u"&&Blob)&&C.isSpecCompliantForm(e);if(!C.isFunction(i))throw new TypeError("visitor must be a function");function l(d){if(d===null)return"";if(C.isDate(d))return d.toISOString();if(!s&&C.isBlob(d))throw new Q("Blob is not supported. Use a Buffer instead.");return C.isArrayBuffer(d)||C.isTypedArray(d)?s&&typeof Blob=="function"?new Blob([d]):Buffer.from(d):d}function u(d,f,m){let p=d;if(d&&!m&&typeof d=="object"){if(C.endsWith(f,"{}"))f=n?f:f.slice(0,-2),d=JSON.stringify(d);else if(C.isArray(d)&&(g=d,C.isArray(g)&&!g.some(Ka))||(C.isFileList(d)||C.endsWith(f,"[]"))&&(p=C.toArray(d)))return f=sh(f),p.forEach(function(_,y){!C.isUndefined(_)&&_!==null&&e.append(o===!0?pl([f],y,a):o===null?f:f+"[]",l(_))}),!1}var g;return!!Ka(d)||(e.append(pl(m,f,a),l(d)),!1)}const h=[],c=Object.assign(Rd,{defaultVisitor:u,convertValue:l,isVisitable:Ka});if(!C.isObject(t))throw new TypeError("data must be an object");return function d(f,m){if(!C.isUndefined(f)){if(h.indexOf(f)!==-1)throw Error("Circular reference detected in "+m.join("."));h.push(f),C.forEach(f,function(p,g){(!(C.isUndefined(p)||p===null)&&i.call(e,p,C.isString(g)?g.trim():g,m,c))===!0&&d(p,m?m.concat(g):[g])}),h.pop()}}(t),e}function ml(t){const e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g,function(r){return e[r]})}function As(t,e){this._pairs=[],t&&ya(t,this,e)}const gl=As.prototype;function Nd(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function lh(t,e,r){if(!e)return t;const n=r&&r.encode||Nd,i=r&&r.serialize;let a;if(a=i?i(e,r):C.isURLSearchParams(e)?e.toString():new As(e,r).toString(n),a){const o=t.indexOf("#");o!==-1&&(t=t.slice(0,o)),t+=(t.indexOf("?")===-1?"?":"&")+a}return t}gl.append=function(t,e){this._pairs.push([t,e])},gl.toString=function(t){const e=t?function(r){return t.call(this,r,ml)}:ml;return this._pairs.map(function(r){return e(r[0])+"="+e(r[1])},"").join("&")};const _l=class{constructor(){this.handlers=[]}use(t,e,r){return this.handlers.push({fulfilled:t,rejected:e,synchronous:!!r&&r.synchronous,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){C.forEach(this.handlers,function(e){e!==null&&t(e)})}},uh={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},Id={isBrowser:!0,classes:{URLSearchParams:typeof URLSearchParams<"u"?URLSearchParams:As,FormData:typeof FormData<"u"?FormData:null,Blob:typeof Blob<"u"?Blob:null},protocols:["http","https","file","blob","url","data"]},Ds=typeof window<"u"&&typeof document<"u",Fd=(vl=typeof navigator<"u"&&navigator.product,Ds&&["ReactNative","NativeScript","NS"].indexOf(vl)<0);var vl;const Bd=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",zd=Ds&&window.location.href||"http://localhost",Ae={...Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:Ds,hasStandardBrowserWebWorkerEnv:Bd,hasStandardBrowserEnv:Fd,origin:zd},Symbol.toStringTag,{value:"Module"})),...Id};function hh(t){function e(r,n,i,a){let o=r[a++];if(o==="__proto__")return!0;const s=Number.isFinite(+o),l=a>=r.length;return o=!o&&C.isArray(i)?i.length:o,l?(C.hasOwnProp(i,o)?i[o]=[i[o],n]:i[o]=n,!s):(i[o]&&C.isObject(i[o])||(i[o]=[]),e(r,n,i[o],a)&&C.isArray(i[o])&&(i[o]=function(u){const h={},c=Object.keys(u);let d;const f=c.length;let m;for(d=0;d<f;d++)m=c[d],h[m]=u[m];return h}(i[o])),!s)}if(C.isFormData(t)&&C.isFunction(t.entries)){const r={};return C.forEachEntry(t,(n,i)=>{var a;e((a=n,C.matchAll(/\w+|\[(\w*)]/g,a).map(o=>o[0]==="[]"?"":o[1]||o[0])),i,r,0)}),r}return null}const Cs={transitional:uh,adapter:["xhr","http","fetch"],transformRequest:[function(t,e){const r=e.getContentType()||"",n=r.indexOf("application/json")>-1,i=C.isObject(t);if(i&&C.isHTMLForm(t)&&(t=new FormData(t)),C.isFormData(t))return n?JSON.stringify(hh(t)):t;if(C.isArrayBuffer(t)||C.isBuffer(t)||C.isStream(t)||C.isFile(t)||C.isBlob(t)||C.isReadableStream(t))return t;if(C.isArrayBufferView(t))return t.buffer;if(C.isURLSearchParams(t))return e.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let a;if(i){if(r.indexOf("application/x-www-form-urlencoded")>-1)return(o=t,s=this.formSerializer,ya(o,new Ae.classes.URLSearchParams,Object.assign({visitor:function(l,u,h,c){return Ae.isNode&&C.isBuffer(l)?(this.append(u,l.toString("base64")),!1):c.defaultVisitor.apply(this,arguments)}},s))).toString();if((a=C.isFileList(t))||r.indexOf("multipart/form-data")>-1){const l=this.env&&this.env.FormData;return ya(a?{"files[]":t}:t,l&&new l,this.formSerializer)}}var o,s;return i||n?(e.setContentType("application/json",!1),function(l){if(C.isString(l))try{return(0,JSON.parse)(l),C.trim(l)}catch(u){if(u.name!=="SyntaxError")throw u}return(0,JSON.stringify)(l)}(t)):t}],transformResponse:[function(t){const e=this.transitional||Cs.transitional,r=e&&e.forcedJSONParsing,n=this.responseType==="json";if(C.isResponse(t)||C.isReadableStream(t))return t;if(t&&C.isString(t)&&(r&&!this.responseType||n)){const i=!(e&&e.silentJSONParsing)&&n;try{return JSON.parse(t)}catch(a){if(i)throw a.name==="SyntaxError"?Q.from(a,Q.ERR_BAD_RESPONSE,this,null,this.response):a}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Ae.classes.FormData,Blob:Ae.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};C.forEach(["delete","get","head","post","put","patch"],t=>{Cs.headers[t]={}});const Ls=Cs,Ud=C.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),yl=Symbol("internals");function In(t){return t&&String(t).trim().toLowerCase()}function ea(t){return t===!1||t==null?t:C.isArray(t)?t.map(ea):String(t)}function Ja(t,e,r,n,i){return C.isFunction(n)?n.call(this,e,r):(i&&(e=r),C.isString(e)?C.isString(n)?e.indexOf(n)!==-1:C.isRegExp(n)?n.test(e):void 0:void 0)}class ra{constructor(e){e&&this.set(e)}set(e,r,n){const i=this;function a(s,l,u){const h=In(l);if(!h)throw new Error("header name must be a non-empty string");const c=C.findKey(i,h);(!c||i[c]===void 0||u===!0||u===void 0&&i[c]!==!1)&&(i[c||l]=ea(s))}const o=(s,l)=>C.forEach(s,(u,h)=>a(u,h,l));if(C.isPlainObject(e)||e instanceof this.constructor)o(e,r);else if(C.isString(e)&&(e=e.trim())&&!/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim()))o((s=>{const l={};let u,h,c;return s&&s.split(`
`).forEach(function(d){c=d.indexOf(":"),u=d.substring(0,c).trim().toLowerCase(),h=d.substring(c+1).trim(),!u||l[u]&&Ud[u]||(u==="set-cookie"?l[u]?l[u].push(h):l[u]=[h]:l[u]=l[u]?l[u]+", "+h:h)}),l})(e),r);else if(C.isHeaders(e))for(const[s,l]of e.entries())a(l,s,n);else e!=null&&a(r,e,n);return this}get(e,r){if(e=In(e)){const n=C.findKey(this,e);if(n){const i=this[n];if(!r)return i;if(r===!0)return function(a){const o=Object.create(null),s=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let l;for(;l=s.exec(a);)o[l[1]]=l[2];return o}(i);if(C.isFunction(r))return r.call(this,i,n);if(C.isRegExp(r))return r.exec(i);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,r){if(e=In(e)){const n=C.findKey(this,e);return!(!n||this[n]===void 0||r&&!Ja(0,this[n],n,r))}return!1}delete(e,r){const n=this;let i=!1;function a(o){if(o=In(o)){const s=C.findKey(n,o);!s||r&&!Ja(0,n[s],s,r)||(delete n[s],i=!0)}}return C.isArray(e)?e.forEach(a):a(e),i}clear(e){const r=Object.keys(this);let n=r.length,i=!1;for(;n--;){const a=r[n];e&&!Ja(0,this[a],a,e,!0)||(delete this[a],i=!0)}return i}normalize(e){const r=this,n={};return C.forEach(this,(i,a)=>{const o=C.findKey(n,a);if(o)return r[o]=ea(i),void delete r[a];const s=e?a.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(l,u,h)=>u.toUpperCase()+h):String(a).trim();s!==a&&delete r[a],r[s]=ea(i),n[s]=!0}),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const r=Object.create(null);return C.forEach(this,(n,i)=>{n!=null&&n!==!1&&(r[i]=e&&C.isArray(n)?n.join(", "):n)}),r}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([e,r])=>e+": "+r).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...r){const n=new this(e);return r.forEach(i=>n.set(i)),n}static accessor(e){const r=(this[yl]=this[yl]={accessors:{}}).accessors,n=this.prototype;function i(a){const o=In(a);r[o]||(function(s,l){const u=C.toCamelCase(" "+l);["get","set","has"].forEach(h=>{Object.defineProperty(s,h+u,{value:function(c,d,f){return this[h].call(this,l,c,d,f)},configurable:!0})})}(n,a),r[o]=!0)}return C.isArray(e)?e.forEach(i):i(e),this}}ra.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]),C.reduceDescriptors(ra.prototype,({value:t},e)=>{let r=e[0].toUpperCase()+e.slice(1);return{get:()=>t,set(n){this[r]=n}}}),C.freezeMethods(ra);const De=ra;function Qa(t,e){const r=this||Ls,n=e||r,i=De.from(n.headers);let a=n.data;return C.forEach(t,function(o){a=o.call(r,a,i.normalize(),e?e.status:void 0)}),i.normalize(),a}function ch(t){return!(!t||!t.__CANCEL__)}function Ln(t,e,r){Q.call(this,t==null?"canceled":t,Q.ERR_CANCELED,e,r),this.name="CanceledError"}function dh(t,e,r){const n=r.config.validateStatus;r.status&&n&&!n(r.status)?e(new Q("Request failed with status code "+r.status,[Q.ERR_BAD_REQUEST,Q.ERR_BAD_RESPONSE][Math.floor(r.status/100)-4],r.config,r.request,r)):t(r)}C.inherits(Ln,Q,{__CANCEL__:!0});const xa=(t,e,r=3)=>{let n=0;const i=function(a,o){a=a||10;const s=new Array(a),l=new Array(a);let u,h=0,c=0;return o=o!==void 0?o:1e3,function(d){const f=Date.now(),m=l[c];u||(u=f),s[h]=d,l[h]=f;let p=c,g=0;for(;p!==h;)g+=s[p++],p%=a;if(h=(h+1)%a,h===c&&(c=(c+1)%a),f-u<o)return;const _=m&&f-m;return _?Math.round(1e3*g/_):void 0}}(50,250);return function(a,o){let s=0;const l=1e3/o;let u=null;return function(){const h=this===!0,c=Date.now();if(h||c-s>l)return u&&(clearTimeout(u),u=null),s=c,a.apply(null,arguments);u||(u=setTimeout(()=>(u=null,s=Date.now(),a.apply(null,arguments)),l-(c-s)))}}(a=>{const o=a.loaded,s=a.lengthComputable?a.total:void 0,l=o-n,u=i(l);n=o;const h={loaded:o,total:s,progress:s?o/s:void 0,bytes:l,rate:u||void 0,estimated:u&&s&&o<=s?(s-o)/u:void 0,event:a,lengthComputable:s!=null};h[e?"download":"upload"]=!0,t(h)},r)},Gd=Ae.hasStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),e=document.createElement("a");let r;function n(i){let a=i;return t&&(e.setAttribute("href",a),a=e.href),e.setAttribute("href",a),{href:e.href,protocol:e.protocol?e.protocol.replace(/:$/,""):"",host:e.host,search:e.search?e.search.replace(/^\?/,""):"",hash:e.hash?e.hash.replace(/^#/,""):"",hostname:e.hostname,port:e.port,pathname:e.pathname.charAt(0)==="/"?e.pathname:"/"+e.pathname}}return r=n(window.location.href),function(i){const a=C.isString(i)?n(i):i;return a.protocol===r.protocol&&a.host===r.host}}():function(){return!0},kd=Ae.hasStandardBrowserEnv?{write(t,e,r,n,i,a){const o=[t+"="+encodeURIComponent(e)];C.isNumber(r)&&o.push("expires="+new Date(r).toGMTString()),C.isString(n)&&o.push("path="+n),C.isString(i)&&o.push("domain="+i),a===!0&&o.push("secure"),document.cookie=o.join("; ")},read(t){const e=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return e?decodeURIComponent(e[3]):null},remove(t){this.write(t,"",Date.now()-864e5)}}:{write(){},read:()=>null,remove(){}};function fh(t,e){return t&&!/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)?(r=t,(n=e)?r.replace(/\/?\/$/,"")+"/"+n.replace(/^\/+/,""):r):e;var r,n}const xl=t=>t instanceof De?{...t}:t;function Xr(t,e){e=e||{};const r={};function n(u,h,c){return C.isPlainObject(u)&&C.isPlainObject(h)?C.merge.call({caseless:c},u,h):C.isPlainObject(h)?C.merge({},h):C.isArray(h)?h.slice():h}function i(u,h,c){return C.isUndefined(h)?C.isUndefined(u)?void 0:n(void 0,u,c):n(u,h,c)}function a(u,h){if(!C.isUndefined(h))return n(void 0,h)}function o(u,h){return C.isUndefined(h)?C.isUndefined(u)?void 0:n(void 0,u):n(void 0,h)}function s(u,h,c){return c in e?n(u,h):c in t?n(void 0,u):void 0}const l={url:a,method:a,data:a,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,withXSRFToken:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:s,headers:(u,h)=>i(xl(u),xl(h),!0)};return C.forEach(Object.keys(Object.assign({},t,e)),function(u){const h=l[u]||i,c=h(t[u],e[u],u);C.isUndefined(c)&&h!==s||(r[u]=c)}),r}const ph=t=>{const e=Xr({},t);let r,{data:n,withXSRFToken:i,xsrfHeaderName:a,xsrfCookieName:o,headers:s,auth:l}=e;if(e.headers=s=De.from(s),e.url=lh(fh(e.baseURL,e.url),t.params,t.paramsSerializer),l&&s.set("Authorization","Basic "+btoa((l.username||"")+":"+(l.password?unescape(encodeURIComponent(l.password)):""))),C.isFormData(n)){if(Ae.hasStandardBrowserEnv||Ae.hasStandardBrowserWebWorkerEnv)s.setContentType(void 0);else if((r=s.getContentType())!==!1){const[u,...h]=r?r.split(";").map(c=>c.trim()).filter(Boolean):[];s.setContentType([u||"multipart/form-data",...h].join("; "))}}if(Ae.hasStandardBrowserEnv&&(i&&C.isFunction(i)&&(i=i(e)),i||i!==!1&&Gd(e.url))){const u=a&&o&&kd.read(o);u&&s.set(a,u)}return e},Hd=typeof XMLHttpRequest<"u"&&function(t){return new Promise(function(e,r){const n=ph(t);let i=n.data;const a=De.from(n.headers).normalize();let o,{responseType:s}=n;function l(){n.cancelToken&&n.cancelToken.unsubscribe(o),n.signal&&n.signal.removeEventListener("abort",o)}let u=new XMLHttpRequest;function h(){if(!u)return;const d=De.from("getAllResponseHeaders"in u&&u.getAllResponseHeaders());dh(function(f){e(f),l()},function(f){r(f),l()},{data:s&&s!=="text"&&s!=="json"?u.response:u.responseText,status:u.status,statusText:u.statusText,headers:d,config:t,request:u}),u=null}u.open(n.method.toUpperCase(),n.url,!0),u.timeout=n.timeout,"onloadend"in u?u.onloadend=h:u.onreadystatechange=function(){u&&u.readyState===4&&(u.status!==0||u.responseURL&&u.responseURL.indexOf("file:")===0)&&setTimeout(h)},u.onabort=function(){u&&(r(new Q("Request aborted",Q.ECONNABORTED,n,u)),u=null)},u.onerror=function(){r(new Q("Network Error",Q.ERR_NETWORK,n,u)),u=null},u.ontimeout=function(){let d=n.timeout?"timeout of "+n.timeout+"ms exceeded":"timeout exceeded";const f=n.transitional||uh;n.timeoutErrorMessage&&(d=n.timeoutErrorMessage),r(new Q(d,f.clarifyTimeoutError?Q.ETIMEDOUT:Q.ECONNABORTED,n,u)),u=null},i===void 0&&a.setContentType(null),"setRequestHeader"in u&&C.forEach(a.toJSON(),function(d,f){u.setRequestHeader(f,d)}),C.isUndefined(n.withCredentials)||(u.withCredentials=!!n.withCredentials),s&&s!=="json"&&(u.responseType=n.responseType),typeof n.onDownloadProgress=="function"&&u.addEventListener("progress",xa(n.onDownloadProgress,!0)),typeof n.onUploadProgress=="function"&&u.upload&&u.upload.addEventListener("progress",xa(n.onUploadProgress)),(n.cancelToken||n.signal)&&(o=d=>{u&&(r(!d||d.type?new Ln(null,t,u):d),u.abort(),u=null)},n.cancelToken&&n.cancelToken.subscribe(o),n.signal&&(n.signal.aborted?o():n.signal.addEventListener("abort",o)));const c=function(d){const f=/^([-+\w]{1,25})(:?\/\/|:)/.exec(d);return f&&f[1]||""}(n.url);c&&Ae.protocols.indexOf(c)===-1?r(new Q("Unsupported protocol "+c+":",Q.ERR_BAD_REQUEST,t)):u.send(i||null)})},Vd=(t,e)=>{let r,n=new AbortController;const i=function(l){if(!r){r=!0,o();const u=l instanceof Error?l:this.reason;n.abort(u instanceof Q?u:new Ln(u instanceof Error?u.message:u))}};let a=e&&setTimeout(()=>{i(new Q(`timeout ${e} of ms exceeded`,Q.ETIMEDOUT))},e);const o=()=>{t&&(a&&clearTimeout(a),a=null,t.forEach(l=>{l&&(l.removeEventListener?l.removeEventListener("abort",i):l.unsubscribe(i))}),t=null)};t.forEach(l=>l&&l.addEventListener&&l.addEventListener("abort",i));const{signal:s}=n;return s.unsubscribe=o,[s,()=>{a&&clearTimeout(a),a=null}]},Wd=function*(t,e){let r=t.byteLength;if(!e||r<e)return void(yield t);let n,i=0;for(;i<r;)n=i+e,yield t.slice(i,n),i=n},bl=(t,e,r,n,i)=>{const a=async function*(s,l,u){for await(const h of s)yield*Wd(ArrayBuffer.isView(h)?h:await u(String(h)),l)}(t,e,i);let o=0;return new ReadableStream({type:"bytes",async pull(s){const{done:l,value:u}=await a.next();if(l)return s.close(),void n();let h=u.byteLength;r&&r(o+=h),s.enqueue(new Uint8Array(u))},cancel:s=>(n(s),a.return())},{highWaterMark:2})},wl=(t,e)=>{const r=t!=null;return n=>setTimeout(()=>e({lengthComputable:r,total:t,loaded:n}))},Oa=typeof fetch=="function"&&typeof Request=="function"&&typeof Response=="function",mh=Oa&&typeof ReadableStream=="function",$a=Oa&&(typeof TextEncoder=="function"?(Tl=new TextEncoder,t=>Tl.encode(t)):async t=>new Uint8Array(await new Response(t).arrayBuffer()));var Tl;const jd=mh&&(()=>{let t=!1;const e=new Request(Ae.origin,{body:new ReadableStream,method:"POST",get duplex(){return t=!0,"half"}}).headers.has("Content-Type");return t&&!e})(),Xo=mh&&!!(()=>{try{return C.isReadableStream(new Response("").body)}catch{}})(),ba={stream:Xo&&(t=>t.body)};var Sl;Oa&&(Sl=new Response,["text","arrayBuffer","blob","formData","stream"].forEach(t=>{!ba[t]&&(ba[t]=C.isFunction(Sl[t])?e=>e[t]():(e,r)=>{throw new Q(`Response type '${t}' is not supported`,Q.ERR_NOT_SUPPORT,r)})}));const gh={http:null,xhr:Hd,fetch:Oa&&(async t=>{let{url:e,method:r,data:n,signal:i,cancelToken:a,timeout:o,onDownloadProgress:s,onUploadProgress:l,responseType:u,headers:h,withCredentials:c="same-origin",fetchOptions:d}=ph(t);u=u?(u+"").toLowerCase():"text";let f,m,[p,g]=i||a||o?Vd([i,a],o):[];const _=()=>{!f&&setTimeout(()=>{p&&p.unsubscribe()}),f=!0};let y;try{if(l&&jd&&r!=="get"&&r!=="head"&&(y=await(async(b,S)=>{const M=C.toFiniteNumber(b.getContentLength());return M==null?(async D=>D==null?0:C.isBlob(D)?D.size:C.isSpecCompliantForm(D)?(await new Request(D).arrayBuffer()).byteLength:C.isArrayBufferView(D)?D.byteLength:(C.isURLSearchParams(D)&&(D+=""),C.isString(D)?(await $a(D)).byteLength:void 0))(S):M})(h,n))!==0){let b,S=new Request(e,{method:"POST",body:n,duplex:"half"});C.isFormData(n)&&(b=S.headers.get("content-type"))&&h.setContentType(b),S.body&&(n=bl(S.body,65536,wl(y,xa(l)),null,$a))}C.isString(c)||(c=c?"cors":"omit"),m=new Request(e,{...d,signal:p,method:r.toUpperCase(),headers:h.normalize().toJSON(),body:n,duplex:"half",withCredentials:c});let x=await fetch(m);const v=Xo&&(u==="stream"||u==="response");if(Xo&&(s||v)){const b={};["status","statusText","headers"].forEach(M=>{b[M]=x[M]});const S=C.toFiniteNumber(x.headers.get("content-length"));x=new Response(bl(x.body,65536,s&&wl(S,xa(s,!0)),v&&_,$a),b)}u=u||"text";let w=await ba[C.findKey(ba,u)||"text"](x,t);return!v&&_(),g&&g(),await new Promise((b,S)=>{dh(b,S,{data:w,headers:De.from(x.headers),status:x.status,statusText:x.statusText,config:t,request:m})})}catch(x){throw _(),x&&x.name==="TypeError"&&/fetch/i.test(x.message)?Object.assign(new Q("Network Error",Q.ERR_NETWORK,t,m),{cause:x.cause||x}):Q.from(x,x&&x.code,t,m)}})};C.forEach(gh,(t,e)=>{if(t){try{Object.defineProperty(t,"name",{value:e})}catch{}Object.defineProperty(t,"adapterName",{value:e})}});const Ml=t=>`- ${t}`,Xd=t=>C.isFunction(t)||t===null||t===!1,_h=t=>{t=C.isArray(t)?t:[t];const{length:e}=t;let r,n;const i={};for(let a=0;a<e;a++){let o;if(r=t[a],n=r,!Xd(r)&&(n=gh[(o=String(r)).toLowerCase()],n===void 0))throw new Q(`Unknown adapter '${o}'`);if(n)break;i[o||"#"+a]=n}if(!n){const a=Object.entries(i).map(([o,s])=>`adapter ${o} `+(s===!1?"is not supported by the environment":"is not available in the build"));throw new Q("There is no suitable adapter to dispatch the request "+(e?a.length>1?`since :
`+a.map(Ml).join(`
`):" "+Ml(a[0]):"as no adapter specified"),"ERR_NOT_SUPPORT")}return n};function to(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new Ln(null,t)}function El(t){return to(t),t.headers=De.from(t.headers),t.data=Qa.call(t,t.transformRequest),["post","put","patch"].indexOf(t.method)!==-1&&t.headers.setContentType("application/x-www-form-urlencoded",!1),_h(t.adapter||Ls.adapter)(t).then(function(e){return to(t),e.data=Qa.call(t,t.transformResponse,e),e.headers=De.from(e.headers),e},function(e){return ch(e)||(to(t),e&&e.response&&(e.response.data=Qa.call(t,t.transformResponse,e.response),e.response.headers=De.from(e.response.headers))),Promise.reject(e)})}const Ps={};["object","boolean","number","function","string","symbol"].forEach((t,e)=>{Ps[t]=function(r){return typeof r===t||"a"+(e<1?"n ":" ")+t}});const Al={};Ps.transitional=function(t,e,r){function n(i,a){return"[Axios v1.7.2] Transitional option '"+i+"'"+a+(r?". "+r:"")}return(i,a,o)=>{if(t===!1)throw new Q(n(a," has been removed"+(e?" in "+e:"")),Q.ERR_DEPRECATED);return e&&!Al[a]&&(Al[a]=!0,console.warn(n(a," has been deprecated since v"+e+" and will be removed in the near future"))),!t||t(i,a,o)}};const qo={assertOptions:function(t,e,r){if(typeof t!="object")throw new Q("options must be an object",Q.ERR_BAD_OPTION_VALUE);const n=Object.keys(t);let i=n.length;for(;i-- >0;){const a=n[i],o=e[a];if(o){const s=t[a],l=s===void 0||o(s,a,t);if(l!==!0)throw new Q("option "+a+" must be "+l,Q.ERR_BAD_OPTION_VALUE)}else if(r!==!0)throw new Q("Unknown option "+a,Q.ERR_BAD_OPTION)}},validators:Ps},sr=qo.validators;class na{constructor(e){this.defaults=e,this.interceptors={request:new _l,response:new _l}}async request(e,r){try{return await this._request(e,r)}catch(n){if(n instanceof Error){let i;Error.captureStackTrace?Error.captureStackTrace(i={}):i=new Error;const a=i.stack?i.stack.replace(/^.+\n/,""):"";try{n.stack?a&&!String(n.stack).endsWith(a.replace(/^.+\n.+\n/,""))&&(n.stack+=`
`+a):n.stack=a}catch{}}throw n}}_request(e,r){typeof e=="string"?(r=r||{}).url=e:r=e||{},r=Xr(this.defaults,r);const{transitional:n,paramsSerializer:i,headers:a}=r;n!==void 0&&qo.assertOptions(n,{silentJSONParsing:sr.transitional(sr.boolean),forcedJSONParsing:sr.transitional(sr.boolean),clarifyTimeoutError:sr.transitional(sr.boolean)},!1),i!=null&&(C.isFunction(i)?r.paramsSerializer={serialize:i}:qo.assertOptions(i,{encode:sr.function,serialize:sr.function},!0)),r.method=(r.method||this.defaults.method||"get").toLowerCase();let o=a&&C.merge(a.common,a[r.method]);a&&C.forEach(["delete","get","head","post","put","patch","common"],m=>{delete a[m]}),r.headers=De.concat(o,a);const s=[];let l=!0;this.interceptors.request.forEach(function(m){typeof m.runWhen=="function"&&m.runWhen(r)===!1||(l=l&&m.synchronous,s.unshift(m.fulfilled,m.rejected))});const u=[];let h;this.interceptors.response.forEach(function(m){u.push(m.fulfilled,m.rejected)});let c,d=0;if(!l){const m=[El.bind(this),void 0];for(m.unshift.apply(m,s),m.push.apply(m,u),c=m.length,h=Promise.resolve(r);d<c;)h=h.then(m[d++],m[d++]);return h}c=s.length;let f=r;for(d=0;d<c;){const m=s[d++],p=s[d++];try{f=m(f)}catch(g){p.call(this,g);break}}try{h=El.call(this,f)}catch(m){return Promise.reject(m)}for(d=0,c=u.length;d<c;)h=h.then(u[d++],u[d++]);return h}getUri(e){return lh(fh((e=Xr(this.defaults,e)).baseURL,e.url),e.params,e.paramsSerializer)}}C.forEach(["delete","get","head","options"],function(t){na.prototype[t]=function(e,r){return this.request(Xr(r||{},{method:t,url:e,data:(r||{}).data}))}}),C.forEach(["post","put","patch"],function(t){function e(r){return function(n,i,a){return this.request(Xr(a||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:n,data:i}))}}na.prototype[t]=e(),na.prototype[t+"Form"]=e(!0)});const ia=na;class Os{constructor(e){if(typeof e!="function")throw new TypeError("executor must be a function.");let r;this.promise=new Promise(function(i){r=i});const n=this;this.promise.then(i=>{if(!n._listeners)return;let a=n._listeners.length;for(;a-- >0;)n._listeners[a](i);n._listeners=null}),this.promise.then=i=>{let a;const o=new Promise(s=>{n.subscribe(s),a=s}).then(i);return o.cancel=function(){n.unsubscribe(a)},o},e(function(i,a,o){n.reason||(n.reason=new Ln(i,a,o),r(n.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){this.reason?e(this.reason):this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const r=this._listeners.indexOf(e);r!==-1&&this._listeners.splice(r,1)}static source(){let e;return{token:new Os(function(r){e=r}),cancel:e}}}const qd=Os,Zo={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Zo).forEach(([t,e])=>{Zo[e]=t});const Zd=Zo,Ot=function t(e){const r=new ia(e),n=ah(ia.prototype.request,r);return C.extend(n,ia.prototype,r,{allOwnKeys:!0}),C.extend(n,r,null,{allOwnKeys:!0}),n.create=function(i){return t(Xr(e,i))},n}(Ls);Ot.Axios=ia,Ot.CanceledError=Ln,Ot.CancelToken=qd,Ot.isCancel=ch,Ot.VERSION="1.7.2",Ot.toFormData=ya,Ot.AxiosError=Q,Ot.Cancel=Ot.CanceledError,Ot.all=function(t){return Promise.all(t)},Ot.spread=function(t){return function(e){return t.apply(null,e)}},Ot.isAxiosError=function(t){return C.isObject(t)&&t.isAxiosError===!0},Ot.mergeConfig=Xr,Ot.AxiosHeaders=De,Ot.formToJSON=t=>hh(C.isHTMLForm(t)?new FormData(t):t),Ot.getAdapter=_h,Ot.HttpStatusCode=Zd,Ot.default=Ot;const Yo=Ot,Yd=Tc(),{token:Ko}=Sc(Yd);Yo.defaults.headers.common.Authorization=Ko.value,Yo.defaults.headers.post["Content-Type"]="application/x-www-form-urlencoded";const Jo=Yo.create({baseURL:"/",timeout:3e4,transformResponse:[function(t){try{return JSON.parse(t)}catch{return t}}]});function Dl(t,e,r){typeof e=="object"&&(r=e,e=null);var n,i=this;if(!(t instanceof Function))for(var a in n=[],t)t.hasOwnProperty(a)&&n.push(a);var o=function(l){if(i.apply(this,arguments),t instanceof Function?Cl(this,t.call(this,l)):function(c,d,f){for(var m=0;m<f.length;m++){var p=f[m];c[p]=d[p]}}(this,t,n),this.constructor===o)for(var u=o.__initializers__,h=0;h<u.length;h++)u[h].apply(this,arguments)};o.__super__=i,i.__initializers__?o.__initializers__=i.__initializers__.slice():o.__initializers__=[],e&&o.__initializers__.push(e);var s=function(){};return s.prototype=i.prototype,o.prototype=new s,o.prototype.constructor=o,Cl(o.prototype,r),o.extend=i.extend,o.derive=i.extend,o}function Cl(t,e){if(e)for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])}Jo.interceptors.request.use(t=>(Ko.value!==""&&(t.headers.Authorization=Ko),t),t=>Promise.reject(t)),Jo.interceptors.response.use(t=>{const e=t.data;return t.status===200?e:(nl({message:e.message,type:"error",duration:5e3}),Promise.reject(new Error(e.message||"Error")))},t=>(nl({message:t.message,type:"error",duration:5e3}),Promise.reject(new Error(t.message||"Error")))),Wt([Mc,Ec]),Wt(Ac);const Kd={extend:Dl,derive:Dl};function Jd(t,e){this.action=t,this.context=e}const Rs={trigger:function(t){if(this.hasOwnProperty("__handlers__")&&this.__handlers__.hasOwnProperty(t)){var e=this.__handlers__[t],r=e.length,n=-1,i=arguments;switch(i.length){case 1:for(;++n<r;)e[n].action.call(e[n].context);return;case 2:for(;++n<r;)e[n].action.call(e[n].context,i[1]);return;case 3:for(;++n<r;)e[n].action.call(e[n].context,i[1],i[2]);return;case 4:for(;++n<r;)e[n].action.call(e[n].context,i[1],i[2],i[3]);return;case 5:for(;++n<r;)e[n].action.call(e[n].context,i[1],i[2],i[3],i[4]);return;default:for(;++n<r;)e[n].action.apply(e[n].context,Array.prototype.slice.call(i,1));return}}},on:function(t,e,r){if(t&&e){var n=this.__handlers__||(this.__handlers__={});if(n[t]){if(this.has(t,e))return}else n[t]=[];var i=new Jd(e,r||this);return n[t].push(i),this}},once:function(t,e,r){if(t&&e){var n=this;return this.on(t,function i(){n.off(t,i),e.apply(this,arguments)},r)}},before:function(t,e,r){if(t&&e)return t="before"+t,this.on(t,e,r)},after:function(t,e,r){if(t&&e)return t="after"+t,this.on(t,e,r)},success:function(t,e){return this.once("success",t,e)},error:function(t,e){return this.once("error",t,e)},off:function(t,e){var r=this.__handlers__||(this.__handlers__={});if(e){if(r[t]){for(var n=r[t],i=[],a=0;a<n.length;a++)e&&n[a].action!==e&&i.push(n[a]);r[t]=i}return this}r[t]=[]},has:function(t,e){var r=this.__handlers__;if(!r||!r[t])return!1;for(var n=r[t],i=0;i<n.length;i++)if(n[i].action===e)return!0}};var Qd=0,$d=Array.prototype.forEach,ei={genGUID:function(){return++Qd},relative2absolute:function(t,e){if(!e||t.match(/^\//))return t;for(var r=t.split("/"),n=e.split("/"),i=r[0];i==="."||i==="..";)i===".."&&n.pop(),r.shift(),i=r[0];return n.join("/")+"/"+r.join("/")},extend:function(t,e){if(e)for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r]);return t},defaults:function(t,e){if(e)for(var r in e)t[r]===void 0&&(t[r]=e[r]);return t},extendWithPropList:function(t,e,r){if(e)for(var n=0;n<r.length;n++){var i=r[n];t[i]=e[i]}return t},defaultsWithPropList:function(t,e,r){if(e)for(var n=0;n<r.length;n++){var i=r[n];t[i]==null&&(t[i]=e[i])}return t},each:function(t,e,r){if(t&&e)if(t.forEach&&t.forEach===$d)t.forEach(e,r);else if(t.length===+t.length)for(var n=0,i=t.length;n<i;n++)e.call(r,t[n],n,t);else for(var a in t)t.hasOwnProperty(a)&&e.call(r,t[a],a,t)},isObject:function(t){return t===Object(t)},isArray:function(t){return Array.isArray(t)},isArrayLike:function(t){return!!t&&t.length===+t.length},clone:function(t){if(ei.isObject(t)){if(ei.isArray(t))return t.slice();if(ei.isArrayLike(t)){for(var e=new t.constructor(t.length),r=0;r<t.length;r++)e[r]=t[r];return e}return ei.extend({},t)}return t}};const Ht=ei;var aa=function(){this.__uid__=Ht.genGUID()};aa.__initializers__=[function(t){Ht.extend(this,t)}],Ht.extend(aa,Kd),Ht.extend(aa.prototype,Rs);const $t=aa;var Ll=["OES_texture_float","OES_texture_half_float","OES_texture_float_linear","OES_texture_half_float_linear","OES_standard_derivatives","OES_vertex_array_object","OES_element_index_uint","WEBGL_compressed_texture_s3tc","WEBGL_depth_texture","EXT_texture_filter_anisotropic","EXT_shader_texture_lod","WEBGL_draw_buffers","EXT_frag_depth","EXT_sRGB","ANGLE_instanced_arrays"],Pl=["MAX_TEXTURE_SIZE","MAX_CUBE_MAP_TEXTURE_SIZE"];function tf(t){for(var e={},r={},n=0;n<Ll.length;n++)a(Ll[n]);for(n=0;n<Pl.length;n++){var i=Pl[n];r[i]=t.getParameter(t[i])}function a(o){if(t.getExtension){var s=t.getExtension(o);s||(s=t.getExtension("MOZ_"+o)),s||(s=t.getExtension("WEBKIT_"+o)),e[o]=s}}this.getExtension=function(o){return o in e||a(o),e[o]},this.getParameter=function(o){return r[o]}}const Ns=1028,Ra=1029,Is=2304,Na=2305,Ia=5121,Fa=5126,Ba=6402,Fs=6408,fi=9728,pi=9729,Bs=9984,zs=9985,Us=9986,mi=9987,Qo=10497,qr=33071,$o=33306,ef={get:function(t){var e=new XMLHttpRequest;e.open("get",t.url),e.responseType=t.responseType||"text",t.onprogress&&(e.onprogress=function(r){if(r.lengthComputable){var n=r.loaded/r.total;t.onprogress(n,r.loaded,r.total)}else t.onprogress(null)}),e.onload=function(r){e.status>=400?t.onerror&&t.onerror():t.onload&&t.onload(e.response)},t.onerror&&(e.onerror=t.onerror),e.send(null)}};var eo,ie={supportWebGL:function(){if(eo==null)try{var t=document.createElement("canvas");if(!t.getContext("webgl")&&!t.getContext("experimental-webgl"))throw new Error}catch{eo=!1}return eo}};ie.Int8Array=typeof Int8Array>"u"?Array:Int8Array,ie.Uint8Array=typeof Uint8Array>"u"?Array:Uint8Array,ie.Uint16Array=typeof Uint16Array>"u"?Array:Uint16Array,ie.Uint32Array=typeof Uint32Array>"u"?Array:Uint32Array,ie.Int16Array=typeof Int16Array>"u"?Array:Int16Array,ie.Float32Array=typeof Float32Array>"u"?Array:Float32Array,ie.Float64Array=typeof Float64Array>"u"?Array:Float64Array;var Mr={};typeof window<"u"?Mr=window:typeof global<"u"&&(Mr=global),ie.requestAnimationFrame=Mr.requestAnimationFrame||Mr.msRequestAnimationFrame||Mr.mozRequestAnimationFrame||Mr.webkitRequestAnimationFrame||function(t){setTimeout(t,16)},ie.createCanvas=function(){return document.createElement("canvas")},ie.createImage=function(){return new Mr.Image},ie.request={get:ef.get},ie.addEventListener=function(t,e,r,n){t.addEventListener(e,r,n)},ie.removeEventListener=function(t,e,r){t.removeEventListener(e,r)};const Ct=ie;var Ft=function(){this.head=null,this.tail=null,this._length=0};Ft.prototype.insert=function(t){var e=new Ft.Entry(t);return this.insertEntry(e),e},Ft.prototype.insertAt=function(t,e){if(!(t<0)){for(var r=this.head,n=0;r&&n!=t;)r=r.next,n++;if(r){var i=new Ft.Entry(e),a=r.prev;a?(a.next=i,i.prev=a):this.head=i,i.next=r,r.prev=i}else this.insert(e)}},Ft.prototype.insertBeforeEntry=function(t,e){var r=new Ft.Entry(t),n=e.prev;n?(n.next=r,r.prev=n):this.head=r,r.next=e,e.prev=r,this._length++},Ft.prototype.insertEntry=function(t){this.head?(this.tail.next=t,t.prev=this.tail,this.tail=t):this.head=this.tail=t,this._length++},Ft.prototype.remove=function(t){var e=t.prev,r=t.next;e?e.next=r:this.head=r,r?r.prev=e:this.tail=e,t.next=t.prev=null,this._length--},Ft.prototype.removeAt=function(t){if(!(t<0)){for(var e=this.head,r=0;e&&r!=t;)e=e.next,r++;return e?(this.remove(e),e.value):void 0}},Ft.prototype.getHead=function(){if(this.head)return this.head.value},Ft.prototype.getTail=function(){if(this.tail)return this.tail.value},Ft.prototype.getAt=function(t){if(!(t<0)){for(var e=this.head,r=0;e&&r!=t;)e=e.next,r++;return e.value}},Ft.prototype.indexOf=function(t){for(var e=this.head,r=0;e;){if(e.value===t)return r;e=e.next,r++}},Ft.prototype.length=function(){return this._length},Ft.prototype.isEmpty=function(){return this._length===0},Ft.prototype.forEach=function(t,e){for(var r=this.head,n=0,i=e!==void 0;r;)i?t.call(e,r.value,n):t(r.value,n),r=r.next,n++},Ft.prototype.clear=function(){this.tail=this.head=null,this._length=0},Ft.Entry=function(t){this.value=t,this.next=null,this.prev=null};const rf=Ft;var dn=function(t){this._list=new rf,this._map={},this._maxSize=t||10};dn.prototype.setMaxSize=function(t){this._maxSize=t},dn.prototype.put=function(t,e){if(!this._map.hasOwnProperty(t)){var r=this._list.length();if(r>=this._maxSize&&r>0){var n=this._list.head;this._list.remove(n),delete this._map[n.key]}var i=this._list.insert(e);i.key=t,this._map[t]=i}},dn.prototype.get=function(t){var e=this._map[t];if(this._map.hasOwnProperty(t))return e!==this._list.tail&&(this._list.remove(e),this._list.insertEntry(e)),e.value},dn.prototype.remove=function(t){var e=this._map[t];e!==void 0&&(delete this._map[t],this._list.remove(e))},dn.prototype.clear=function(){this._list.clear(),this._map={}};const vh=dn;var bt={},Ol={transparent:[0,0,0,0],aliceblue:[240,248,255,1],antiquewhite:[250,235,215,1],aqua:[0,255,255,1],aquamarine:[127,255,212,1],azure:[240,255,255,1],beige:[245,245,220,1],bisque:[255,228,196,1],black:[0,0,0,1],blanchedalmond:[255,235,205,1],blue:[0,0,255,1],blueviolet:[138,43,226,1],brown:[165,42,42,1],burlywood:[222,184,135,1],cadetblue:[95,158,160,1],chartreuse:[127,255,0,1],chocolate:[210,105,30,1],coral:[255,127,80,1],cornflowerblue:[100,149,237,1],cornsilk:[255,248,220,1],crimson:[220,20,60,1],cyan:[0,255,255,1],darkblue:[0,0,139,1],darkcyan:[0,139,139,1],darkgoldenrod:[184,134,11,1],darkgray:[169,169,169,1],darkgreen:[0,100,0,1],darkgrey:[169,169,169,1],darkkhaki:[189,183,107,1],darkmagenta:[139,0,139,1],darkolivegreen:[85,107,47,1],darkorange:[255,140,0,1],darkorchid:[153,50,204,1],darkred:[139,0,0,1],darksalmon:[233,150,122,1],darkseagreen:[143,188,143,1],darkslateblue:[72,61,139,1],darkslategray:[47,79,79,1],darkslategrey:[47,79,79,1],darkturquoise:[0,206,209,1],darkviolet:[148,0,211,1],deeppink:[255,20,147,1],deepskyblue:[0,191,255,1],dimgray:[105,105,105,1],dimgrey:[105,105,105,1],dodgerblue:[30,144,255,1],firebrick:[178,34,34,1],floralwhite:[255,250,240,1],forestgreen:[34,139,34,1],fuchsia:[255,0,255,1],gainsboro:[220,220,220,1],ghostwhite:[248,248,255,1],gold:[255,215,0,1],goldenrod:[218,165,32,1],gray:[128,128,128,1],green:[0,128,0,1],greenyellow:[173,255,47,1],grey:[128,128,128,1],honeydew:[240,255,240,1],hotpink:[255,105,180,1],indianred:[205,92,92,1],indigo:[75,0,130,1],ivory:[255,255,240,1],khaki:[240,230,140,1],lavender:[230,230,250,1],lavenderblush:[255,240,245,1],lawngreen:[124,252,0,1],lemonchiffon:[255,250,205,1],lightblue:[173,216,230,1],lightcoral:[240,128,128,1],lightcyan:[224,255,255,1],lightgoldenrodyellow:[250,250,210,1],lightgray:[211,211,211,1],lightgreen:[144,238,144,1],lightgrey:[211,211,211,1],lightpink:[255,182,193,1],lightsalmon:[255,160,122,1],lightseagreen:[32,178,170,1],lightskyblue:[135,206,250,1],lightslategray:[119,136,153,1],lightslategrey:[119,136,153,1],lightsteelblue:[176,196,222,1],lightyellow:[255,255,224,1],lime:[0,255,0,1],limegreen:[50,205,50,1],linen:[250,240,230,1],magenta:[255,0,255,1],maroon:[128,0,0,1],mediumaquamarine:[102,205,170,1],mediumblue:[0,0,205,1],mediumorchid:[186,85,211,1],mediumpurple:[147,112,219,1],mediumseagreen:[60,179,113,1],mediumslateblue:[123,104,238,1],mediumspringgreen:[0,250,154,1],mediumturquoise:[72,209,204,1],mediumvioletred:[199,21,133,1],midnightblue:[25,25,112,1],mintcream:[245,255,250,1],mistyrose:[255,228,225,1],moccasin:[255,228,181,1],navajowhite:[255,222,173,1],navy:[0,0,128,1],oldlace:[253,245,230,1],olive:[128,128,0,1],olivedrab:[107,142,35,1],orange:[255,165,0,1],orangered:[255,69,0,1],orchid:[218,112,214,1],palegoldenrod:[238,232,170,1],palegreen:[152,251,152,1],paleturquoise:[175,238,238,1],palevioletred:[219,112,147,1],papayawhip:[255,239,213,1],peachpuff:[255,218,185,1],peru:[205,133,63,1],pink:[255,192,203,1],plum:[221,160,221,1],powderblue:[176,224,230,1],purple:[128,0,128,1],red:[255,0,0,1],rosybrown:[188,143,143,1],royalblue:[65,105,225,1],saddlebrown:[139,69,19,1],salmon:[250,128,114,1],sandybrown:[244,164,96,1],seagreen:[46,139,87,1],seashell:[255,245,238,1],sienna:[160,82,45,1],silver:[192,192,192,1],skyblue:[135,206,235,1],slateblue:[106,90,205,1],slategray:[112,128,144,1],slategrey:[112,128,144,1],snow:[255,250,250,1],springgreen:[0,255,127,1],steelblue:[70,130,180,1],tan:[210,180,140,1],teal:[0,128,128,1],thistle:[216,191,216,1],tomato:[255,99,71,1],turquoise:[64,224,208,1],violet:[238,130,238,1],wheat:[245,222,179,1],white:[255,255,255,1],whitesmoke:[245,245,245,1],yellow:[255,255,0,1],yellowgreen:[154,205,50,1]};function Ee(t){return(t=Math.round(t))<0?0:t>255?255:t}function ui(t){return t<0?0:t>1?1:t}function ro(t){return t.length&&t.charAt(t.length-1)==="%"?Ee(parseFloat(t)/100*255):Ee(parseInt(t,10))}function _n(t){return t.length&&t.charAt(t.length-1)==="%"?ui(parseFloat(t)/100):ui(parseFloat(t))}function no(t,e,r){return r<0?r+=1:r>1&&(r-=1),6*r<1?t+(e-t)*r*6:2*r<1?e:3*r<2?t+(e-t)*(2/3-r)*6:t}function lr(t,e,r){return t+(e-t)*r}function Me(t,e,r,n,i){return t[0]=e,t[1]=r,t[2]=n,t[3]=i,t}function ts(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t}var yh=new vh(20),Li=null;function Jr(t,e){Li&&ts(Li,e),Li=yh.put(t,Li||e.slice())}function io(t,e){var r=(parseFloat(t[0])%360+360)%360/360,n=_n(t[1]),i=_n(t[2]),a=i<=.5?i*(n+1):i+n-i*n,o=2*i-a;return Me(e=e||[],Ee(255*no(o,a,r+1/3)),Ee(255*no(o,a,r)),Ee(255*no(o,a,r-1/3)),1),t.length===4&&(e[3]=t[3]),e}bt.parse=function(t,e){if(t){e=e||[];var r=yh.get(t);if(r)return ts(e,r);var n,i=(t+="").replace(/ /g,"").toLowerCase();if(i in Ol)return ts(e,Ol[i]),Jr(t,e),e;if(i.charAt(0)==="#")return i.length===4?(n=parseInt(i.substr(1),16))>=0&&n<=4095?(Me(e,(3840&n)>>4|(3840&n)>>8,240&n|(240&n)>>4,15&n|(15&n)<<4,1),Jr(t,e),e):void Me(e,0,0,0,1):i.length===7?(n=parseInt(i.substr(1),16))>=0&&n<=16777215?(Me(e,(16711680&n)>>16,(65280&n)>>8,255&n,1),Jr(t,e),e):void Me(e,0,0,0,1):void 0;var a=i.indexOf("("),o=i.indexOf(")");if(a!==-1&&o+1===i.length){var s=i.substr(0,a),l=i.substr(a+1,o-(a+1)).split(","),u=1;switch(s){case"rgba":if(l.length!==4)return void Me(e,0,0,0,1);u=_n(l.pop());case"rgb":return l.length!==3?void Me(e,0,0,0,1):(Me(e,ro(l[0]),ro(l[1]),ro(l[2]),u),Jr(t,e),e);case"hsla":return l.length!==4?void Me(e,0,0,0,1):(l[3]=_n(l[3]),io(l,e),Jr(t,e),e);case"hsl":return l.length!==3?void Me(e,0,0,0,1):(io(l,e),Jr(t,e),e);default:return}}Me(e,0,0,0,1)}},bt.parseToFloat=function(t,e){if(e=bt.parse(t,e))return e[0]/=255,e[1]/=255,e[2]/=255,e},bt.lift=function(t,e){var r=bt.parse(t);if(r){for(var n=0;n<3;n++)r[n]=e<0?r[n]*(1-e)|0:(255-r[n])*e+r[n]|0;return bt.stringify(r,r.length===4?"rgba":"rgb")}},bt.toHex=function(t){var e=bt.parse(t);if(e)return((1<<24)+(e[0]<<16)+(e[1]<<8)+ +e[2]).toString(16).slice(1)},bt.fastLerp=function(t,e,r){if(e&&e.length&&t>=0&&t<=1){r=r||[];var n=t*(e.length-1),i=Math.floor(n),a=Math.ceil(n),o=e[i],s=e[a],l=n-i;return r[0]=Ee(lr(o[0],s[0],l)),r[1]=Ee(lr(o[1],s[1],l)),r[2]=Ee(lr(o[2],s[2],l)),r[3]=ui(lr(o[3],s[3],l)),r}},bt.fastMapToColor=bt.fastLerp,bt.lerp=function(t,e,r){if(e&&e.length&&t>=0&&t<=1){var n=t*(e.length-1),i=Math.floor(n),a=Math.ceil(n),o=bt.parse(e[i]),s=bt.parse(e[a]),l=n-i,u=bt.stringify([Ee(lr(o[0],s[0],l)),Ee(lr(o[1],s[1],l)),Ee(lr(o[2],s[2],l)),ui(lr(o[3],s[3],l))],"rgba");return r?{color:u,leftIndex:i,rightIndex:a,value:n}:u}},bt.mapToColor=bt.lerp,bt.modifyHSL=function(t,e,r,n){if(t=bt.parse(t))return t=function(a){if(a){var o,s,l=a[0]/255,u=a[1]/255,h=a[2]/255,c=Math.min(l,u,h),d=Math.max(l,u,h),f=d-c,m=(d+c)/2;if(f===0)o=0,s=0;else{s=m<.5?f/(d+c):f/(2-d-c);var p=((d-l)/6+f/2)/f,g=((d-u)/6+f/2)/f,_=((d-h)/6+f/2)/f;l===d?o=_-g:u===d?o=1/3+p-_:h===d&&(o=2/3+g-p),o<0&&(o+=1),o>1&&(o-=1)}var y=[360*o,s,m];return a[3]!=null&&y.push(a[3]),y}}(t),e!=null&&(t[0]=(i=e,(i=Math.round(i))<0?0:i>360?360:i)),r!=null&&(t[1]=_n(r)),n!=null&&(t[2]=_n(n)),bt.stringify(io(t),"rgba");var i},bt.modifyAlpha=function(t,e){if((t=bt.parse(t))&&e!=null)return t[3]=ui(e),bt.stringify(t,"rgba")},bt.stringify=function(t,e){if(t&&t.length){var r=t[0]+","+t[1]+","+t[2];return e!=="rgba"&&e!=="hsva"&&e!=="hsla"||(r+=","+t[3]),e+"("+r+")"}};var nf=bt.parseToFloat,ao={};function Rl(t){var e=Object.keys(t);e.sort();for(var r=[],n=0;n<e.length;n++){var i=e[n],a=t[i];a===null?r.push(i):r.push(i+" "+a.toString())}return r.join(`
`)}const ve=$t.extend(function(){return{name:"",depthTest:!0,depthMask:!0,transparent:!1,blend:null,autoUpdateTextureStatus:!0,uniforms:{},vertexDefines:{},fragmentDefines:{},_textureStatus:{},_enabledUniforms:null}},function(){this.name||(this.name="MATERIAL_"+this.__uid__),this.shader&&this.attachShader(this.shader,!0)},{precision:"highp",setUniform:function(t,e){e===void 0&&console.warn('Uniform value "'+t+'" is undefined');var r=this.uniforms[t];r&&(typeof e=="string"&&(e=nf(e)||e),r.value=e,this.autoUpdateTextureStatus&&r.type==="t"&&(e?this.enableTexture(t):this.disableTexture(t)))},setUniforms:function(t){for(var e in t){var r=t[e];this.setUniform(e,r)}},isUniformEnabled:function(t){return this._enabledUniforms.indexOf(t)>=0},getEnabledUniforms:function(){return this._enabledUniforms},getTextureUniforms:function(){return this._textureUniforms},set:function(t,e){if(typeof t=="object")for(var r in t){var n=t[r];this.setUniform(r,n)}else this.setUniform(t,e)},get:function(t){var e=this.uniforms[t];if(e)return e.value},attachShader:function(t,e){var r=this.uniforms;this.uniforms=t.createUniforms(),this.shader=t;var n=this.uniforms;this._enabledUniforms=Object.keys(n),this._enabledUniforms.sort(),this._textureUniforms=this._enabledUniforms.filter(function(u){var h=this.uniforms[u].type;return h==="t"||h==="tv"},this);var i=this.vertexDefines,a=this.fragmentDefines;if(this.vertexDefines=Ht.clone(t.vertexDefines),this.fragmentDefines=Ht.clone(t.fragmentDefines),e){for(var o in r)n[o]&&(n[o].value=r[o].value);Ht.defaults(this.vertexDefines,i),Ht.defaults(this.fragmentDefines,a)}var s={};for(var l in t.textures)s[l]={shaderType:t.textures[l].shaderType,type:t.textures[l].type,enabled:!(!e||!this._textureStatus[l])&&this._textureStatus[l].enabled};this._textureStatus=s,this._programKey=""},clone:function(){var t=new this.constructor({name:this.name,shader:this.shader});for(var e in this.uniforms)t.uniforms[e].value=this.uniforms[e].value;return t.depthTest=this.depthTest,t.depthMask=this.depthMask,t.transparent=this.transparent,t.blend=this.blend,t.vertexDefines=Ht.clone(this.vertexDefines),t.fragmentDefines=Ht.clone(this.fragmentDefines),t.enableTexture(this.getEnabledTextures()),t.precision=this.precision,t},define:function(t,e,r){var n=this.vertexDefines,i=this.fragmentDefines;t!=="vertex"&&t!=="fragment"&&t!=="both"&&arguments.length<3&&(r=e,e=t,t="both"),r=r!=null?r:null,t!=="vertex"&&t!=="both"||n[e]!==r&&(n[e]=r,this._programKey=""),t!=="fragment"&&t!=="both"||i[e]!==r&&(i[e]=r,t!=="both"&&(this._programKey=""))},undefine:function(t,e){t!=="vertex"&&t!=="fragment"&&t!=="both"&&arguments.length<2&&(e=t,t="both"),t!=="vertex"&&t!=="both"||this.isDefined("vertex",e)&&(delete this.vertexDefines[e],this._programKey=""),t!=="fragment"&&t!=="both"||this.isDefined("fragment",e)&&(delete this.fragmentDefines[e],t!=="both"&&(this._programKey=""))},isDefined:function(t,e){switch(t){case"vertex":return this.vertexDefines[e]!==void 0;case"fragment":return this.fragmentDefines[e]!==void 0}},getDefine:function(t,e){switch(t){case"vertex":return this.vertexDefines[e];case"fragment":return this.fragmentDefines[e]}},enableTexture:function(t){if(Array.isArray(t))for(var e=0;e<t.length;e++)this.enableTexture(t[e]);else{var r=this._textureStatus[t];r&&(r.enabled||(r.enabled=!0,this._programKey=""))}},enableTexturesAll:function(){var t=this._textureStatus;for(var e in t)t[e].enabled=!0;this._programKey=""},disableTexture:function(t){if(Array.isArray(t))for(var e=0;e<t.length;e++)this.disableTexture(t[e]);else{var r=this._textureStatus[t];r&&(!r.enabled||(r.enabled=!1,this._programKey=""))}},disableTexturesAll:function(){var t=this._textureStatus;for(var e in t)t[e].enabled=!1;this._programKey=""},isTextureEnabled:function(t){var e=this._textureStatus;return!!e[t]&&e[t].enabled},getEnabledTextures:function(){var t=[],e=this._textureStatus;for(var r in e)e[r].enabled&&t.push(r);return t},dirtyDefines:function(){this._programKey=""},getProgramKey:function(){return this._programKey||(this._programKey=function(t,e,r){r.sort();for(var n=[],i=0;i<r.length;i++){var a=r[i];n.push(a)}var o=Rl(t)+`
`+Rl(e)+`
`+n.join(`
`);if(ao[o])return ao[o];var s=Ht.genGUID();return ao[o]=s,s}(this.vertexDefines,this.fragmentDefines,this.getEnabledTextures())),this._programKey}});var Er,Pi=1e-6,Vt=Array,vn=Math.random,nt={create:function(){var t=new Vt(2);return t[0]=0,t[1]=0,t},clone:function(t){var e=new Vt(2);return e[0]=t[0],e[1]=t[1],e},fromValues:function(t,e){var r=new Vt(2);return r[0]=t,r[1]=e,r},copy:function(t,e){return t[0]=e[0],t[1]=e[1],t},set:function(t,e,r){return t[0]=e,t[1]=r,t},add:function(t,e,r){return t[0]=e[0]+r[0],t[1]=e[1]+r[1],t},subtract:function(t,e,r){return t[0]=e[0]-r[0],t[1]=e[1]-r[1],t}};nt.sub=nt.subtract,nt.multiply=function(t,e,r){return t[0]=e[0]*r[0],t[1]=e[1]*r[1],t},nt.mul=nt.multiply,nt.divide=function(t,e,r){return t[0]=e[0]/r[0],t[1]=e[1]/r[1],t},nt.div=nt.divide,nt.min=function(t,e,r){return t[0]=Math.min(e[0],r[0]),t[1]=Math.min(e[1],r[1]),t},nt.max=function(t,e,r){return t[0]=Math.max(e[0],r[0]),t[1]=Math.max(e[1],r[1]),t},nt.scale=function(t,e,r){return t[0]=e[0]*r,t[1]=e[1]*r,t},nt.scaleAndAdd=function(t,e,r,n){return t[0]=e[0]+r[0]*n,t[1]=e[1]+r[1]*n,t},nt.distance=function(t,e){var r=e[0]-t[0],n=e[1]-t[1];return Math.sqrt(r*r+n*n)},nt.dist=nt.distance,nt.squaredDistance=function(t,e){var r=e[0]-t[0],n=e[1]-t[1];return r*r+n*n},nt.sqrDist=nt.squaredDistance,nt.length=function(t){var e=t[0],r=t[1];return Math.sqrt(e*e+r*r)},nt.len=nt.length,nt.squaredLength=function(t){var e=t[0],r=t[1];return e*e+r*r},nt.sqrLen=nt.squaredLength,nt.negate=function(t,e){return t[0]=-e[0],t[1]=-e[1],t},nt.inverse=function(t,e){return t[0]=1/e[0],t[1]=1/e[1],t},nt.normalize=function(t,e){var r=e[0],n=e[1],i=r*r+n*n;return i>0&&(i=1/Math.sqrt(i),t[0]=e[0]*i,t[1]=e[1]*i),t},nt.dot=function(t,e){return t[0]*e[0]+t[1]*e[1]},nt.cross=function(t,e,r){var n=e[0]*r[1]-e[1]*r[0];return t[0]=t[1]=0,t[2]=n,t},nt.lerp=function(t,e,r,n){var i=e[0],a=e[1];return t[0]=i+n*(r[0]-i),t[1]=a+n*(r[1]-a),t},nt.random=function(t,e){e=e||1;var r=2*GLMAT_RANDOM()*Math.PI;return t[0]=Math.cos(r)*e,t[1]=Math.sin(r)*e,t},nt.transformMat2=function(t,e,r){var n=e[0],i=e[1];return t[0]=r[0]*n+r[2]*i,t[1]=r[1]*n+r[3]*i,t},nt.transformMat2d=function(t,e,r){var n=e[0],i=e[1];return t[0]=r[0]*n+r[2]*i+r[4],t[1]=r[1]*n+r[3]*i+r[5],t},nt.transformMat3=function(t,e,r){var n=e[0],i=e[1];return t[0]=r[0]*n+r[3]*i+r[6],t[1]=r[1]*n+r[4]*i+r[7],t},nt.transformMat4=function(t,e,r){var n=e[0],i=e[1];return t[0]=r[0]*n+r[4]*i+r[12],t[1]=r[1]*n+r[5]*i+r[13],t},nt.forEach=(Er=nt.create(),function(t,e,r,n,i,a){var o,s;for(e||(e=2),r||(r=0),s=n?Math.min(n*e+r,t.length):t.length,o=r;o<s;o+=e)Er[0]=t[o],Er[1]=t[o+1],i(Er,Er,a),t[o]=Er[0],t[o+1]=Er[1];return t});const W=nt;var $=function(t,e){t=t||0,e=e||0,this.array=W.fromValues(t,e),this._dirty=!0};if($.prototype={constructor:$,add:function(t){return W.add(this.array,this.array,t.array),this._dirty=!0,this},set:function(t,e){return this.array[0]=t,this.array[1]=e,this._dirty=!0,this},setArray:function(t){return this.array[0]=t[0],this.array[1]=t[1],this._dirty=!0,this},clone:function(){return new $(this.x,this.y)},copy:function(t){return W.copy(this.array,t.array),this._dirty=!0,this},cross:function(t,e){return W.cross(t.array,this.array,e.array),t._dirty=!0,this},dist:function(t){return W.dist(this.array,t.array)},distance:function(t){return W.distance(this.array,t.array)},div:function(t){return W.div(this.array,this.array,t.array),this._dirty=!0,this},divide:function(t){return W.divide(this.array,this.array,t.array),this._dirty=!0,this},dot:function(t){return W.dot(this.array,t.array)},len:function(){return W.len(this.array)},length:function(){return W.length(this.array)},lerp:function(t,e,r){return W.lerp(this.array,t.array,e.array,r),this._dirty=!0,this},min:function(t){return W.min(this.array,this.array,t.array),this._dirty=!0,this},max:function(t){return W.max(this.array,this.array,t.array),this._dirty=!0,this},mul:function(t){return W.mul(this.array,this.array,t.array),this._dirty=!0,this},multiply:function(t){return W.multiply(this.array,this.array,t.array),this._dirty=!0,this},negate:function(){return W.negate(this.array,this.array),this._dirty=!0,this},normalize:function(){return W.normalize(this.array,this.array),this._dirty=!0,this},random:function(t){return W.random(this.array,t),this._dirty=!0,this},scale:function(t){return W.scale(this.array,this.array,t),this._dirty=!0,this},scaleAndAdd:function(t,e){return W.scaleAndAdd(this.array,this.array,t.array,e),this._dirty=!0,this},sqrDist:function(t){return W.sqrDist(this.array,t.array)},squaredDistance:function(t){return W.squaredDistance(this.array,t.array)},sqrLen:function(){return W.sqrLen(this.array)},squaredLength:function(){return W.squaredLength(this.array)},sub:function(t){return W.sub(this.array,this.array,t.array),this._dirty=!0,this},subtract:function(t){return W.subtract(this.array,this.array,t.array),this._dirty=!0,this},transformMat2:function(t){return W.transformMat2(this.array,this.array,t.array),this._dirty=!0,this},transformMat2d:function(t){return W.transformMat2d(this.array,this.array,t.array),this._dirty=!0,this},transformMat3:function(t){return W.transformMat3(this.array,this.array,t.array),this._dirty=!0,this},transformMat4:function(t){return W.transformMat4(this.array,this.array,t.array),this._dirty=!0,this},toString:function(){return"["+Array.prototype.join.call(this.array,",")+"]"},toArray:function(){return Array.prototype.slice.call(this.array)}},Object.defineProperty){var Nl=$.prototype;Object.defineProperty(Nl,"x",{get:function(){return this.array[0]},set:function(t){this.array[0]=t,this._dirty=!0}}),Object.defineProperty(Nl,"y",{get:function(){return this.array[1]},set:function(t){this.array[1]=t,this._dirty=!0}})}$.add=function(t,e,r){return W.add(t.array,e.array,r.array),t._dirty=!0,t},$.set=function(t,e,r){return W.set(t.array,e,r),t._dirty=!0,t},$.copy=function(t,e){return W.copy(t.array,e.array),t._dirty=!0,t},$.cross=function(t,e,r){return W.cross(t.array,e.array,r.array),t._dirty=!0,t},$.dist=function(t,e){return W.distance(t.array,e.array)},$.distance=$.dist,$.div=function(t,e,r){return W.divide(t.array,e.array,r.array),t._dirty=!0,t},$.divide=$.div,$.dot=function(t,e){return W.dot(t.array,e.array)},$.len=function(t){return W.length(t.array)},$.lerp=function(t,e,r,n){return W.lerp(t.array,e.array,r.array,n),t._dirty=!0,t},$.min=function(t,e,r){return W.min(t.array,e.array,r.array),t._dirty=!0,t},$.max=function(t,e,r){return W.max(t.array,e.array,r.array),t._dirty=!0,t},$.mul=function(t,e,r){return W.multiply(t.array,e.array,r.array),t._dirty=!0,t},$.multiply=$.mul,$.negate=function(t,e){return W.negate(t.array,e.array),t._dirty=!0,t},$.normalize=function(t,e){return W.normalize(t.array,e.array),t._dirty=!0,t},$.random=function(t,e){return W.random(t.array,e),t._dirty=!0,t},$.scale=function(t,e,r){return W.scale(t.array,e.array,r),t._dirty=!0,t},$.scaleAndAdd=function(t,e,r,n){return W.scaleAndAdd(t.array,e.array,r.array,n),t._dirty=!0,t},$.sqrDist=function(t,e){return W.sqrDist(t.array,e.array)},$.squaredDistance=$.sqrDist,$.sqrLen=function(t){return W.sqrLen(t.array)},$.squaredLength=$.sqrLen,$.sub=function(t,e,r){return W.subtract(t.array,e.array,r.array),t._dirty=!0,t},$.subtract=$.sub,$.transformMat2=function(t,e,r){return W.transformMat2(t.array,e.array,r.array),t._dirty=!0,t},$.transformMat2d=function(t,e,r){return W.transformMat2d(t.array,e.array,r.array),t._dirty=!0,t},$.transformMat3=function(t,e,r){return W.transformMat3(t.array,e.array,r.array),t._dirty=!0,t},$.transformMat4=function(t,e,r){return W.transformMat4(t.array,e.array,r.array),t._dirty=!0,t};const he=$;var Il={};function af(t){for(var e=t.split(`
`),r=0,n=e.length;r<n;r++)e[r]=r+1+": "+e[r];return e.join(`
`)}function Fl(t,e,r){if(!t.getShaderParameter(e,t.COMPILE_STATUS))return[t.getShaderInfoLog(e),af(r)].join(`
`)}var Bl=new Ct.Float32Array(16);const of=$t.extend({uniformSemantics:{},attributes:{}},function(){this._locations={},this._textureSlot=0,this._program=null},{bind:function(t){this._textureSlot=0,t.gl.useProgram(this._program)},hasUniform:function(t){return this._locations[t]!=null},useTextureSlot:function(t,e,r){e&&(t.gl.activeTexture(t.gl.TEXTURE0+r),e.isRenderable()?e.bind(t):e.unbind(t))},currentTextureSlot:function(){return this._textureSlot},resetTextureSlot:function(t){this._textureSlot=t||0},takeCurrentTextureSlot:function(t,e){var r=this._textureSlot;return this.useTextureSlot(t,e,r),this._textureSlot++,r},setUniform:function(t,e,r,n){var i=this._locations[r];if(i==null)return!1;switch(e){case"m4":if(!(n instanceof Float32Array)){for(var a=0;a<n.length;a++)Bl[a]=n[a];n=Bl}t.uniformMatrix4fv(i,!1,n);break;case"2i":t.uniform2i(i,n[0],n[1]);break;case"2f":t.uniform2f(i,n[0],n[1]);break;case"3i":t.uniform3i(i,n[0],n[1],n[2]);break;case"3f":t.uniform3f(i,n[0],n[1],n[2]);break;case"4i":t.uniform4i(i,n[0],n[1],n[2],n[3]);break;case"4f":t.uniform4f(i,n[0],n[1],n[2],n[3]);break;case"1i":t.uniform1i(i,n);break;case"1f":t.uniform1f(i,n);break;case"1fv":t.uniform1fv(i,n);break;case"1iv":t.uniform1iv(i,n);break;case"2iv":t.uniform2iv(i,n);break;case"2fv":t.uniform2fv(i,n);break;case"3iv":t.uniform3iv(i,n);break;case"3fv":t.uniform3fv(i,n);break;case"4iv":t.uniform4iv(i,n);break;case"4fv":t.uniform4fv(i,n);break;case"m2":case"m2v":t.uniformMatrix2fv(i,!1,n);break;case"m3":case"m3v":t.uniformMatrix3fv(i,!1,n);break;case"m4v":if(Array.isArray(n)&&Array.isArray(n[0])){var o=new Ct.Float32Array(16*n.length),s=0;for(a=0;a<n.length;a++)for(var l=n[a],u=0;u<16;u++)o[s++]=l[u];t.uniformMatrix4fv(i,!1,o)}else t.uniformMatrix4fv(i,!1,n)}return!0},setUniformOfSemantic:function(t,e,r){var n=this.uniformSemantics[e];return!!n&&this.setUniform(t,n.type,n.symbol,r)},enableAttributes:function(t,e,r){var n,i=t.gl,a=this._program,o=this._locations;(n=r?r.__enabledAttributeList:Il[t.__uid__])||(n=r?r.__enabledAttributeList=[]:Il[t.__uid__]=[]);for(var s=[],l=0;l<e.length;l++){var u=e[l];if(this.attributes[u]){var h=o[u];if(h==null){if((h=i.getAttribLocation(a,u))===-1){s[l]=-1;continue}o[u]=h}s[l]=h,n[h]?n[h]=2:n[h]=1}else s[l]=-1}for(l=0;l<n.length;l++)switch(n[l]){case 1:i.enableVertexAttribArray(l),n[l]=3;break;case 2:n[l]=3;break;case 3:i.disableVertexAttribArray(l),n[l]=0}return s},getAttribLocation:function(t,e){var r=this._locations,n=r[e];return n==null&&(n=t.getAttribLocation(this._program,e),r[e]=n),n},buildProgram:function(t,e,r,n){var i=t.createShader(t.VERTEX_SHADER),a=t.createProgram();t.shaderSource(i,r),t.compileShader(i);var o=t.createShader(t.FRAGMENT_SHADER);t.shaderSource(o,n),t.compileShader(o);var s=Fl(t,i,r);if(s||(s=Fl(t,o,n)))return s;if(t.attachShader(a,i),t.attachShader(a,o),e.attributeSemantics.POSITION)t.bindAttribLocation(a,0,e.attributeSemantics.POSITION.symbol);else{var l=Object.keys(this.attributes);t.bindAttribLocation(a,0,l[0])}if(t.linkProgram(a),t.deleteShader(i),t.deleteShader(o),this._program=a,this.vertexCode=r,this.fragmentCode=n,!t.getProgramParameter(a,t.LINK_STATUS))return`Could not link program
`+t.getProgramInfoLog(a);for(var u=0;u<e.uniforms.length;u++){var h=e.uniforms[u];this._locations[h]=t.getUniformLocation(a,h)}}});var sf=/for\s*?\(int\s*?_idx_\s*\=\s*([\w-]+)\;\s*_idx_\s*<\s*([\w-]+);\s*_idx_\s*\+\+\s*\)\s*\{\{([\s\S]+?)(?=\}\})\}\}/g;function zl(t,e,r){var n={};for(var i in r)n[i+"_COUNT"]=r[i];return t.replace(sf,function(a,o,s,l){var u="";isNaN(o)&&(o=o in e?e[o]:n[o]),isNaN(s)&&(s=s in e?e[s]:n[s]);for(var h=parseInt(o);h<parseInt(s);h++)u+="{"+l.replace(/float\s*\(\s*_idx_\s*\)/g,h.toFixed(1)).replace(/_idx_/g,h)+"}";return u})}function oo(t,e,r){var n=[];if(e)for(var i in e){var a=e[i];a>0&&n.push("#define "+i.toUpperCase()+"_COUNT "+a)}if(r)for(var o=0;o<r.length;o++){var s=r[o];n.push("#define "+s.toUpperCase()+"_ENABLED")}for(var s in t){var l=t[s];l===null?n.push("#define "+s):n.push("#define "+s+" "+l.toString())}return n.join(`
`)}function xh(t){this._renderer=t,this._cache={}}xh.prototype.getProgram=function(t,e,r){var n=this._cache,i=t.isSkinnedMesh&&t.isSkinnedMesh(),a=t.isInstancedMesh&&t.isInstancedMesh(),o="s"+e.shader.shaderID+"m"+e.getProgramKey();if(r&&(o+="se"+r.getProgramKey(t.lightGroup)),i&&(o+=",sk"+t.joints.length),a&&(o+=",is"),y=n[o])return y;var s=r?r.getLightsNumbers(t.lightGroup):{},l=this._renderer,u=l.gl,h=e.getEnabledTextures(),c="";if(i){var d={SKINNING:null,JOINT_COUNT:t.joints.length};t.joints.length>l.getMaxJointNumber()&&(d.USE_SKIN_MATRICES_TEXTURE=null),c+=`
`+oo(d)+`
`}a&&(c+=`
#define INSTANCING
`);var f=c+oo(e.vertexDefines,s,h),m=c+oo(e.fragmentDefines,s,h),p=f+`
`+e.shader.vertex,g=["OES_standard_derivatives","EXT_shader_texture_lod"].filter(function(S){return l.getGLExtension(S)!=null});g.indexOf("EXT_shader_texture_lod")>=0&&(m+=`
#define SUPPORT_TEXTURE_LOD`),g.indexOf("OES_standard_derivatives")>=0&&(m+=`
#define SUPPORT_STANDARD_DERIVATIVES`);var _,y,x=function(S){for(var M=[],D=0;D<S.length;D++)M.push("#extension GL_"+S[D]+" : enable");return M.join(`
`)}(g)+`
`+["precision",_=e.precision,"float"].join(" ")+`;
`+["precision",_,"int"].join(" ")+`;
`+["precision",_,"sampler2D"].join(" ")+`;

`+m+`
`+e.shader.fragment,v=zl(p,e.vertexDefines,s),w=zl(x,e.fragmentDefines,s);(y=new of).uniformSemantics=e.shader.uniformSemantics,y.attributes=e.shader.attributes;var b=y.buildProgram(u,e.shader,v,w);return y.__error=b,n[o]=y,y};var Ul=/uniform\s+(bool|float|int|vec2|vec3|vec4|ivec2|ivec3|ivec4|mat2|mat3|mat4|sampler2D|samplerCube)\s+([\s\S]*?);/g,lf=/attribute\s+(float|int|vec2|vec3|vec4)\s+([\s\S]*?);/g,Gl=/#define\s+(\w+)?(\s+[\d-.]+)?\s*;?\s*\n/g,uf={bool:"1i",int:"1i",sampler2D:"t",samplerCube:"t",float:"1f",vec2:"2f",vec3:"3f",vec4:"4f",ivec2:"2i",ivec3:"3i",ivec4:"4i",mat2:"m2",mat3:"m3",mat4:"m4"};function Ye(t){for(var e=[],r=0;r<t;r++)e[r]=0;return e}var kl={bool:function(){return!0},int:function(){return 0},float:function(){return 0},sampler2D:function(){return null},samplerCube:function(){return null},vec2:function(){return Ye(2)},vec3:function(){return Ye(3)},vec4:function(){return Ye(4)},ivec2:function(){return Ye(2)},ivec3:function(){return Ye(3)},ivec4:function(){return Ye(4)},mat2:function(){return Ye(4)},mat3:function(){return Ye(9)},mat4:function(){return Ye(16)},array:function(){return[]}},es=["POSITION","NORMAL","BINORMAL","TANGENT","TEXCOORD","TEXCOORD_0","TEXCOORD_1","COLOR","JOINT","WEIGHT"],bh=["SKIN_MATRIX","VIEWPORT_SIZE","VIEWPORT","DEVICEPIXELRATIO","WINDOW_SIZE","NEAR","FAR","TIME"],wh=["WORLD","VIEW","PROJECTION","WORLDVIEW","VIEWPROJECTION","WORLDVIEWPROJECTION","WORLDINVERSE","VIEWINVERSE","PROJECTIONINVERSE","WORLDVIEWINVERSE","VIEWPROJECTIONINVERSE","WORLDVIEWPROJECTIONINVERSE","WORLDTRANSPOSE","VIEWTRANSPOSE","PROJECTIONTRANSPOSE","WORLDVIEWTRANSPOSE","VIEWPROJECTIONTRANSPOSE","WORLDVIEWPROJECTIONTRANSPOSE","WORLDINVERSETRANSPOSE","VIEWINVERSETRANSPOSE","PROJECTIONINVERSETRANSPOSE","WORLDVIEWINVERSETRANSPOSE","VIEWPROJECTIONINVERSETRANSPOSE","WORLDVIEWPROJECTIONINVERSETRANSPOSE"],hf={vec4:4,vec3:3,vec2:2,float:1},so={},Th={};function Hl(t){return t.replace(/[ \t]*\/\/.*\n/g,"").replace(/[ \t]*\/\*[\s\S]*?\*\//g,"")}function Qr(){console.error("Wrong uniform/attributes syntax")}function Vl(t,e){for(var r=/[,=\(\):]/,n=e.replace(/:\s*\[\s*(.*)\s*\]/g,"="+t+"($1)").replace(/\s+/g,"").split(/(?=[,=\(\):])/g),i=[],a=0;a<n.length;a++)n[a].match(r)?i.push(n[a].charAt(0),n[a].slice(1)):i.push(n[a]);var o,s=0,l={},u=null;function h(f){f||Qr();var m=f.match(/\[(.*?)\]/);o=f.replace(/\[(.*?)\]/,""),l[o]={},m&&(l[o].isArray=!0,l[o].arraySize=m[1])}for(h((n=i)[0]),a=1;a<n.length;a++){var c=n[a];if(c)if(c!=="=")if(c!==":")if(c!==",")if(c!==")")if(c!=="(")if(c.indexOf("vec")>=0){if(s!==1&&s!==4){Qr();break}s=2,u=[]}else if(s!==1)if(s!==4)h(c),s=0;else{var d=c;es.indexOf(d)>=0||bh.indexOf(d)>=0||wh.indexOf(d)>=0?l[o].semantic=d:d==="ignore"||d==="unconfigurable"?l[o].ignore=!0:l[o].value=t==="bool"?d==="true":parseFloat(d)}else l[o].value=t==="bool"?c==="true":parseFloat(c),u=null;else{if(s!==2){Qr();break}if(!(u instanceof Array)){Qr();break}u.push(+n[++a])}else l[o].value=new Ct.Float32Array(u),u=null,s=5;else if(s===2){if(!(u instanceof Array)){Qr();break}u.push(+n[++a])}else s=5;else s=4;else{if(s!==0&&s!==3){Qr();break}s=1}}return l}function N(t,e){typeof t=="object"&&(e=t.fragment,t=t.vertex),t=Hl(t),e=Hl(e),this._shaderID=function(r,n){var i="vertex:"+r+"fragment:"+n;if(so[i])return so[i];var a=Ht.genGUID();return so[i]=a,Th[a]={vertex:r,fragment:n},a}(t,e),this._vertexCode=N.parseImport(t),this._fragmentCode=N.parseImport(e),this.attributeSemantics={},this.matrixSemantics={},this.uniformSemantics={},this.matrixSemanticKeys=[],this.uniformTemplates={},this.attributes={},this.textures={},this.vertexDefines={},this.fragmentDefines={},this._parseAttributes(),this._parseUniforms(),this._parseDefines()}N.prototype={constructor:N,createUniforms:function(){var t={};for(var e in this.uniformTemplates){var r=this.uniformTemplates[e];t[e]={type:r.type,value:r.value()}}return t},_parseImport:function(){this._vertexCode=N.parseImport(this.vertex),this._fragmentCode=N.parseImport(this.fragment)},_addSemanticUniform:function(t,e,r){if(es.indexOf(r)>=0)this.attributeSemantics[r]={symbol:t,type:e};else if(wh.indexOf(r)>=0){var n=!1,i=r;r.match(/TRANSPOSE$/)&&(n=!0,i=r.slice(0,-9)),this.matrixSemantics[r]={symbol:t,type:e,isTranspose:n,semanticNoTranspose:i}}else bh.indexOf(r)>=0&&(this.uniformSemantics[r]={symbol:t,type:e})},_addMaterialUniform:function(t,e,r,n,i,a){a[t]={type:r,value:i?kl.array:n||kl[e],semantic:null}},_parseUniforms:function(){var t={},e=this;function r(i){return i!=null?function(){return i}:null}function n(i,a,o){var s=Vl(a,o),l=[];for(var u in s){var h=s[u],c=h.semantic,d=u,f=uf[a],m=r(s[u].value);s[u].isArray&&(d+="["+s[u].arraySize+"]",f+="v"),l.push(d),e._uniformList.push(u),h.ignore||(a!=="sampler2D"&&a!=="samplerCube"||(e.textures[u]={shaderType:"fragment",type:a}),c?e._addSemanticUniform(u,f,c):e._addMaterialUniform(u,a,f,m,s[u].isArray,t))}return l.length>0?"uniform "+a+" "+l.join(",")+`;
`:""}this._uniformList=[],this._vertexCode=this._vertexCode.replace(Ul,n),this._fragmentCode=this._fragmentCode.replace(Ul,n),e.matrixSemanticKeys=Object.keys(this.matrixSemantics),this.uniformTemplates=t},_parseAttributes:function(){var t={},e=this;this._vertexCode=this._vertexCode.replace(lf,function(r,n,i){var a=Vl(n,i),o=hf[n]||1,s=[];for(var l in a){var u=a[l].semantic;if(t[l]={type:"float",size:o,semantic:u||null},u){if(es.indexOf(u)<0)throw new Error('Unkown semantic "'+u+'"');e.attributeSemantics[u]={symbol:l,type:n}}s.push(l)}return"attribute "+n+" "+s.join(",")+`;
`}),this.attributes=t},_parseDefines:function(){var t=this;function e(r,n,i){var a=t.fragmentDefines;return a[n]||(a[n]=i!=="false"&&(i==="true"||(i?isNaN(parseFloat(i))?i.trim():parseFloat(i):null))),""}this._vertexCode=this._vertexCode.replace(Gl,e),this._fragmentCode=this._fragmentCode.replace(Gl,e)},clone:function(){var t=Th[this._shaderID];return new N(t.vertex,t.fragment)}},Object.defineProperty&&(Object.defineProperty(N.prototype,"shaderID",{get:function(){return this._shaderID}}),Object.defineProperty(N.prototype,"vertex",{get:function(){return this._vertexCode}}),Object.defineProperty(N.prototype,"fragment",{get:function(){return this._fragmentCode}}),Object.defineProperty(N.prototype,"uniforms",{get:function(){return this._uniformList}}));var cf=/(@import)\s*([0-9a-zA-Z_\-\.]*)/g;N.parseImport=function(t){return t.replace(cf,function(e,r,n){return(e=N.source(n))?N.parseImport(e):(console.error('Shader chunk "'+n+'" not existed in library'),"")})};var df=/(@export)\s*([0-9a-zA-Z_\-\.]*)\s*\n([\s\S]*?)@end/g;N.import=function(t){t.replace(df,function(e,r,n,i){if(i=i.replace(/(^[\s\t\xa0\u3000]+)|([\u3000\xa0\s\t]+\x24)/g,"")){for(var a,o=n.split("."),s=N.codes,l=0;l<o.length-1;)s[a=o[l++]]||(s[a]={}),s=s[a];s[a=o[l]]=i}return i})},N.codes={},N.source=function(t){for(var e=t.split("."),r=N.codes,n=0;r&&n<e.length;)r=r[e[n++]];return typeof r!="string"?(console.error('Shader "'+t+'" not existed in library'),""):r};const Sh=`@export clay.prez.vertex
uniform mat4 WVP : WORLDVIEWPROJECTION;
attribute vec3 pos : POSITION;
attribute vec2 uv : TEXCOORD_0;
uniform vec2 uvRepeat : [1.0, 1.0];
uniform vec2 uvOffset : [0.0, 0.0];
@import clay.chunk.skinning_header
@import clay.chunk.instancing_header
varying vec2 v_Texcoord;
void main()
{
 vec4 P = vec4(pos, 1.0);
#ifdef SKINNING
 @import clay.chunk.skin_matrix
 P = skinMatrixWS * P;
#endif
#ifdef INSTANCING
 @import clay.chunk.instancing_matrix
 P = instanceMat * P;
#endif
 gl_Position = WVP * P;
 v_Texcoord = uv * uvRepeat + uvOffset;
}
@end
@export clay.prez.fragment
uniform sampler2D alphaMap;
uniform float alphaCutoff: 0.0;
varying vec2 v_Texcoord;
void main()
{
 if (alphaCutoff > 0.0) {
 if (texture2D(alphaMap, v_Texcoord).a <= alphaCutoff) {
 discard;
 }
 }
 gl_FragColor = vec4(0.0,0.0,0.0,1.0);
}
@end`;var Bt={create:function(){var t=new Vt(16);return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t},clone:function(t){var e=new Vt(16);return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[4]=t[4],e[5]=t[5],e[6]=t[6],e[7]=t[7],e[8]=t[8],e[9]=t[9],e[10]=t[10],e[11]=t[11],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15],e},copy:function(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4],t[5]=e[5],t[6]=e[6],t[7]=e[7],t[8]=e[8],t[9]=e[9],t[10]=e[10],t[11]=e[11],t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15],t},identity:function(t){return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t},transpose:function(t,e){if(t===e){var r=e[1],n=e[2],i=e[3],a=e[6],o=e[7],s=e[11];t[1]=e[4],t[2]=e[8],t[3]=e[12],t[4]=r,t[6]=e[9],t[7]=e[13],t[8]=n,t[9]=a,t[11]=e[14],t[12]=i,t[13]=o,t[14]=s}else t[0]=e[0],t[1]=e[4],t[2]=e[8],t[3]=e[12],t[4]=e[1],t[5]=e[5],t[6]=e[9],t[7]=e[13],t[8]=e[2],t[9]=e[6],t[10]=e[10],t[11]=e[14],t[12]=e[3],t[13]=e[7],t[14]=e[11],t[15]=e[15];return t},invert:function(t,e){var r=e[0],n=e[1],i=e[2],a=e[3],o=e[4],s=e[5],l=e[6],u=e[7],h=e[8],c=e[9],d=e[10],f=e[11],m=e[12],p=e[13],g=e[14],_=e[15],y=r*s-n*o,x=r*l-i*o,v=r*u-a*o,w=n*l-i*s,b=n*u-a*s,S=i*u-a*l,M=h*p-c*m,D=h*g-d*m,L=h*_-f*m,P=c*g-d*p,O=c*_-f*p,R=d*_-f*g,A=y*R-x*O+v*P+w*L-b*D+S*M;return A?(A=1/A,t[0]=(s*R-l*O+u*P)*A,t[1]=(i*O-n*R-a*P)*A,t[2]=(p*S-g*b+_*w)*A,t[3]=(d*b-c*S-f*w)*A,t[4]=(l*L-o*R-u*D)*A,t[5]=(r*R-i*L+a*D)*A,t[6]=(g*v-m*S-_*x)*A,t[7]=(h*S-d*v+f*x)*A,t[8]=(o*O-s*L+u*M)*A,t[9]=(n*L-r*O-a*M)*A,t[10]=(m*b-p*v+_*y)*A,t[11]=(c*v-h*b-f*y)*A,t[12]=(s*D-o*P-l*M)*A,t[13]=(r*P-n*D+i*M)*A,t[14]=(p*x-m*w-g*y)*A,t[15]=(h*w-c*x+d*y)*A,t):null},adjoint:function(t,e){var r=e[0],n=e[1],i=e[2],a=e[3],o=e[4],s=e[5],l=e[6],u=e[7],h=e[8],c=e[9],d=e[10],f=e[11],m=e[12],p=e[13],g=e[14],_=e[15];return t[0]=s*(d*_-f*g)-c*(l*_-u*g)+p*(l*f-u*d),t[1]=-(n*(d*_-f*g)-c*(i*_-a*g)+p*(i*f-a*d)),t[2]=n*(l*_-u*g)-s*(i*_-a*g)+p*(i*u-a*l),t[3]=-(n*(l*f-u*d)-s*(i*f-a*d)+c*(i*u-a*l)),t[4]=-(o*(d*_-f*g)-h*(l*_-u*g)+m*(l*f-u*d)),t[5]=r*(d*_-f*g)-h*(i*_-a*g)+m*(i*f-a*d),t[6]=-(r*(l*_-u*g)-o*(i*_-a*g)+m*(i*u-a*l)),t[7]=r*(l*f-u*d)-o*(i*f-a*d)+h*(i*u-a*l),t[8]=o*(c*_-f*p)-h*(s*_-u*p)+m*(s*f-u*c),t[9]=-(r*(c*_-f*p)-h*(n*_-a*p)+m*(n*f-a*c)),t[10]=r*(s*_-u*p)-o*(n*_-a*p)+m*(n*u-a*s),t[11]=-(r*(s*f-u*c)-o*(n*f-a*c)+h*(n*u-a*s)),t[12]=-(o*(c*g-d*p)-h*(s*g-l*p)+m*(s*d-l*c)),t[13]=r*(c*g-d*p)-h*(n*g-i*p)+m*(n*d-i*c),t[14]=-(r*(s*g-l*p)-o*(n*g-i*p)+m*(n*l-i*s)),t[15]=r*(s*d-l*c)-o*(n*d-i*c)+h*(n*l-i*s),t},determinant:function(t){var e=t[0],r=t[1],n=t[2],i=t[3],a=t[4],o=t[5],s=t[6],l=t[7],u=t[8],h=t[9],c=t[10],d=t[11],f=t[12],m=t[13],p=t[14],g=t[15];return(e*o-r*a)*(c*g-d*p)-(e*s-n*a)*(h*g-d*m)+(e*l-i*a)*(h*p-c*m)+(r*s-n*o)*(u*g-d*f)-(r*l-i*o)*(u*p-c*f)+(n*l-i*s)*(u*m-h*f)},multiply:function(t,e,r){var n=e[0],i=e[1],a=e[2],o=e[3],s=e[4],l=e[5],u=e[6],h=e[7],c=e[8],d=e[9],f=e[10],m=e[11],p=e[12],g=e[13],_=e[14],y=e[15],x=r[0],v=r[1],w=r[2],b=r[3];return t[0]=x*n+v*s+w*c+b*p,t[1]=x*i+v*l+w*d+b*g,t[2]=x*a+v*u+w*f+b*_,t[3]=x*o+v*h+w*m+b*y,x=r[4],v=r[5],w=r[6],b=r[7],t[4]=x*n+v*s+w*c+b*p,t[5]=x*i+v*l+w*d+b*g,t[6]=x*a+v*u+w*f+b*_,t[7]=x*o+v*h+w*m+b*y,x=r[8],v=r[9],w=r[10],b=r[11],t[8]=x*n+v*s+w*c+b*p,t[9]=x*i+v*l+w*d+b*g,t[10]=x*a+v*u+w*f+b*_,t[11]=x*o+v*h+w*m+b*y,x=r[12],v=r[13],w=r[14],b=r[15],t[12]=x*n+v*s+w*c+b*p,t[13]=x*i+v*l+w*d+b*g,t[14]=x*a+v*u+w*f+b*_,t[15]=x*o+v*h+w*m+b*y,t},multiplyAffine:function(t,e,r){var n=e[0],i=e[1],a=e[2],o=e[4],s=e[5],l=e[6],u=e[8],h=e[9],c=e[10],d=e[12],f=e[13],m=e[14],p=r[0],g=r[1],_=r[2];return t[0]=p*n+g*o+_*u,t[1]=p*i+g*s+_*h,t[2]=p*a+g*l+_*c,p=r[4],g=r[5],_=r[6],t[4]=p*n+g*o+_*u,t[5]=p*i+g*s+_*h,t[6]=p*a+g*l+_*c,p=r[8],g=r[9],_=r[10],t[8]=p*n+g*o+_*u,t[9]=p*i+g*s+_*h,t[10]=p*a+g*l+_*c,p=r[12],g=r[13],_=r[14],t[12]=p*n+g*o+_*u+d,t[13]=p*i+g*s+_*h+f,t[14]=p*a+g*l+_*c+m,t}};Bt.mul=Bt.multiply,Bt.mulAffine=Bt.multiplyAffine,Bt.translate=function(t,e,r){var n,i,a,o,s,l,u,h,c,d,f,m,p=r[0],g=r[1],_=r[2];return e===t?(t[12]=e[0]*p+e[4]*g+e[8]*_+e[12],t[13]=e[1]*p+e[5]*g+e[9]*_+e[13],t[14]=e[2]*p+e[6]*g+e[10]*_+e[14],t[15]=e[3]*p+e[7]*g+e[11]*_+e[15]):(n=e[0],i=e[1],a=e[2],o=e[3],s=e[4],l=e[5],u=e[6],h=e[7],c=e[8],d=e[9],f=e[10],m=e[11],t[0]=n,t[1]=i,t[2]=a,t[3]=o,t[4]=s,t[5]=l,t[6]=u,t[7]=h,t[8]=c,t[9]=d,t[10]=f,t[11]=m,t[12]=n*p+s*g+c*_+e[12],t[13]=i*p+l*g+d*_+e[13],t[14]=a*p+u*g+f*_+e[14],t[15]=o*p+h*g+m*_+e[15]),t},Bt.scale=function(t,e,r){var n=r[0],i=r[1],a=r[2];return t[0]=e[0]*n,t[1]=e[1]*n,t[2]=e[2]*n,t[3]=e[3]*n,t[4]=e[4]*i,t[5]=e[5]*i,t[6]=e[6]*i,t[7]=e[7]*i,t[8]=e[8]*a,t[9]=e[9]*a,t[10]=e[10]*a,t[11]=e[11]*a,t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15],t},Bt.rotate=function(t,e,r,n){var i,a,o,s,l,u,h,c,d,f,m,p,g,_,y,x,v,w,b,S,M,D,L,P,O=n[0],R=n[1],A=n[2],z=Math.sqrt(O*O+R*R+A*A);return Math.abs(z)<Pi?null:(O*=z=1/z,R*=z,A*=z,i=Math.sin(r),o=1-(a=Math.cos(r)),s=e[0],l=e[1],u=e[2],h=e[3],c=e[4],d=e[5],f=e[6],m=e[7],p=e[8],g=e[9],_=e[10],y=e[11],x=O*O*o+a,v=R*O*o+A*i,w=A*O*o-R*i,b=O*R*o-A*i,S=R*R*o+a,M=A*R*o+O*i,D=O*A*o+R*i,L=R*A*o-O*i,P=A*A*o+a,t[0]=s*x+c*v+p*w,t[1]=l*x+d*v+g*w,t[2]=u*x+f*v+_*w,t[3]=h*x+m*v+y*w,t[4]=s*b+c*S+p*M,t[5]=l*b+d*S+g*M,t[6]=u*b+f*S+_*M,t[7]=h*b+m*S+y*M,t[8]=s*D+c*L+p*P,t[9]=l*D+d*L+g*P,t[10]=u*D+f*L+_*P,t[11]=h*D+m*L+y*P,e!==t&&(t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15]),t)},Bt.rotateX=function(t,e,r){var n=Math.sin(r),i=Math.cos(r),a=e[4],o=e[5],s=e[6],l=e[7],u=e[8],h=e[9],c=e[10],d=e[11];return e!==t&&(t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15]),t[4]=a*i+u*n,t[5]=o*i+h*n,t[6]=s*i+c*n,t[7]=l*i+d*n,t[8]=u*i-a*n,t[9]=h*i-o*n,t[10]=c*i-s*n,t[11]=d*i-l*n,t},Bt.rotateY=function(t,e,r){var n=Math.sin(r),i=Math.cos(r),a=e[0],o=e[1],s=e[2],l=e[3],u=e[8],h=e[9],c=e[10],d=e[11];return e!==t&&(t[4]=e[4],t[5]=e[5],t[6]=e[6],t[7]=e[7],t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15]),t[0]=a*i-u*n,t[1]=o*i-h*n,t[2]=s*i-c*n,t[3]=l*i-d*n,t[8]=a*n+u*i,t[9]=o*n+h*i,t[10]=s*n+c*i,t[11]=l*n+d*i,t},Bt.rotateZ=function(t,e,r){var n=Math.sin(r),i=Math.cos(r),a=e[0],o=e[1],s=e[2],l=e[3],u=e[4],h=e[5],c=e[6],d=e[7];return e!==t&&(t[8]=e[8],t[9]=e[9],t[10]=e[10],t[11]=e[11],t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15]),t[0]=a*i+u*n,t[1]=o*i+h*n,t[2]=s*i+c*n,t[3]=l*i+d*n,t[4]=u*i-a*n,t[5]=h*i-o*n,t[6]=c*i-s*n,t[7]=d*i-l*n,t},Bt.fromRotationTranslation=function(t,e,r){var n=e[0],i=e[1],a=e[2],o=e[3],s=n+n,l=i+i,u=a+a,h=n*s,c=n*l,d=n*u,f=i*l,m=i*u,p=a*u,g=o*s,_=o*l,y=o*u;return t[0]=1-(f+p),t[1]=c+y,t[2]=d-_,t[3]=0,t[4]=c-y,t[5]=1-(h+p),t[6]=m+g,t[7]=0,t[8]=d+_,t[9]=m-g,t[10]=1-(h+f),t[11]=0,t[12]=r[0],t[13]=r[1],t[14]=r[2],t[15]=1,t},Bt.fromQuat=function(t,e){var r=e[0],n=e[1],i=e[2],a=e[3],o=r+r,s=n+n,l=i+i,u=r*o,h=n*o,c=n*s,d=i*o,f=i*s,m=i*l,p=a*o,g=a*s,_=a*l;return t[0]=1-c-m,t[1]=h+_,t[2]=d-g,t[3]=0,t[4]=h-_,t[5]=1-u-m,t[6]=f+p,t[7]=0,t[8]=d+g,t[9]=f-p,t[10]=1-u-c,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t},Bt.frustum=function(t,e,r,n,i,a,o){var s=1/(r-e),l=1/(i-n),u=1/(a-o);return t[0]=2*a*s,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=2*a*l,t[6]=0,t[7]=0,t[8]=(r+e)*s,t[9]=(i+n)*l,t[10]=(o+a)*u,t[11]=-1,t[12]=0,t[13]=0,t[14]=o*a*2*u,t[15]=0,t},Bt.perspective=function(t,e,r,n,i){var a=1/Math.tan(e/2),o=1/(n-i);return t[0]=a/r,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=a,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=(i+n)*o,t[11]=-1,t[12]=0,t[13]=0,t[14]=2*i*n*o,t[15]=0,t},Bt.ortho=function(t,e,r,n,i,a,o){var s=1/(e-r),l=1/(n-i),u=1/(a-o);return t[0]=-2*s,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=-2*l,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=2*u,t[11]=0,t[12]=(e+r)*s,t[13]=(i+n)*l,t[14]=(o+a)*u,t[15]=1,t},Bt.lookAt=function(t,e,r,n){var i,a,o,s,l,u,h,c,d,f,m=e[0],p=e[1],g=e[2],_=n[0],y=n[1],x=n[2],v=r[0],w=r[1],b=r[2];return Math.abs(m-v)<Pi&&Math.abs(p-w)<Pi&&Math.abs(g-b)<Pi?Bt.identity(t):(h=m-v,c=p-w,d=g-b,i=y*(d*=f=1/Math.sqrt(h*h+c*c+d*d))-x*(c*=f),a=x*(h*=f)-_*d,o=_*c-y*h,(f=Math.sqrt(i*i+a*a+o*o))?(i*=f=1/f,a*=f,o*=f):(i=0,a=0,o=0),s=c*o-d*a,l=d*i-h*o,u=h*a-c*i,(f=Math.sqrt(s*s+l*l+u*u))?(s*=f=1/f,l*=f,u*=f):(s=0,l=0,u=0),t[0]=i,t[1]=s,t[2]=h,t[3]=0,t[4]=a,t[5]=l,t[6]=c,t[7]=0,t[8]=o,t[9]=u,t[10]=d,t[11]=0,t[12]=-(i*m+a*p+o*g),t[13]=-(s*m+l*p+u*g),t[14]=-(h*m+c*p+d*g),t[15]=1,t)},Bt.frob=function(t){return Math.sqrt(Math.pow(t[0],2)+Math.pow(t[1],2)+Math.pow(t[2],2)+Math.pow(t[3],2)+Math.pow(t[4],2)+Math.pow(t[5],2)+Math.pow(t[6],2)+Math.pow(t[7],2)+Math.pow(t[8],2)+Math.pow(t[9],2)+Math.pow(t[10],2)+Math.pow(t[11],2)+Math.pow(t[12],2)+Math.pow(t[13],2)+Math.pow(t[14],2)+Math.pow(t[15],2))};const I=Bt;var Ke,Y={create:function(){var t=new Vt(3);return t[0]=0,t[1]=0,t[2]=0,t},clone:function(t){var e=new Vt(3);return e[0]=t[0],e[1]=t[1],e[2]=t[2],e},fromValues:function(t,e,r){var n=new Vt(3);return n[0]=t,n[1]=e,n[2]=r,n},copy:function(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t},set:function(t,e,r,n){return t[0]=e,t[1]=r,t[2]=n,t},add:function(t,e,r){return t[0]=e[0]+r[0],t[1]=e[1]+r[1],t[2]=e[2]+r[2],t},subtract:function(t,e,r){return t[0]=e[0]-r[0],t[1]=e[1]-r[1],t[2]=e[2]-r[2],t}};Y.sub=Y.subtract,Y.multiply=function(t,e,r){return t[0]=e[0]*r[0],t[1]=e[1]*r[1],t[2]=e[2]*r[2],t},Y.mul=Y.multiply,Y.divide=function(t,e,r){return t[0]=e[0]/r[0],t[1]=e[1]/r[1],t[2]=e[2]/r[2],t},Y.div=Y.divide,Y.min=function(t,e,r){return t[0]=Math.min(e[0],r[0]),t[1]=Math.min(e[1],r[1]),t[2]=Math.min(e[2],r[2]),t},Y.max=function(t,e,r){return t[0]=Math.max(e[0],r[0]),t[1]=Math.max(e[1],r[1]),t[2]=Math.max(e[2],r[2]),t},Y.scale=function(t,e,r){return t[0]=e[0]*r,t[1]=e[1]*r,t[2]=e[2]*r,t},Y.scaleAndAdd=function(t,e,r,n){return t[0]=e[0]+r[0]*n,t[1]=e[1]+r[1]*n,t[2]=e[2]+r[2]*n,t},Y.distance=function(t,e){var r=e[0]-t[0],n=e[1]-t[1],i=e[2]-t[2];return Math.sqrt(r*r+n*n+i*i)},Y.dist=Y.distance,Y.squaredDistance=function(t,e){var r=e[0]-t[0],n=e[1]-t[1],i=e[2]-t[2];return r*r+n*n+i*i},Y.sqrDist=Y.squaredDistance,Y.length=function(t){var e=t[0],r=t[1],n=t[2];return Math.sqrt(e*e+r*r+n*n)},Y.len=Y.length,Y.squaredLength=function(t){var e=t[0],r=t[1],n=t[2];return e*e+r*r+n*n},Y.sqrLen=Y.squaredLength,Y.negate=function(t,e){return t[0]=-e[0],t[1]=-e[1],t[2]=-e[2],t},Y.inverse=function(t,e){return t[0]=1/e[0],t[1]=1/e[1],t[2]=1/e[2],t},Y.normalize=function(t,e){var r=e[0],n=e[1],i=e[2],a=r*r+n*n+i*i;return a>0&&(a=1/Math.sqrt(a),t[0]=e[0]*a,t[1]=e[1]*a,t[2]=e[2]*a),t},Y.dot=function(t,e){return t[0]*e[0]+t[1]*e[1]+t[2]*e[2]},Y.cross=function(t,e,r){var n=e[0],i=e[1],a=e[2],o=r[0],s=r[1],l=r[2];return t[0]=i*l-a*s,t[1]=a*o-n*l,t[2]=n*s-i*o,t},Y.lerp=function(t,e,r,n){var i=e[0],a=e[1],o=e[2];return t[0]=i+n*(r[0]-i),t[1]=a+n*(r[1]-a),t[2]=o+n*(r[2]-o),t},Y.random=function(t,e){e=e||1;var r=2*vn()*Math.PI,n=2*vn()-1,i=Math.sqrt(1-n*n)*e;return t[0]=Math.cos(r)*i,t[1]=Math.sin(r)*i,t[2]=n*e,t},Y.transformMat4=function(t,e,r){var n=e[0],i=e[1],a=e[2],o=r[3]*n+r[7]*i+r[11]*a+r[15];return o=o||1,t[0]=(r[0]*n+r[4]*i+r[8]*a+r[12])/o,t[1]=(r[1]*n+r[5]*i+r[9]*a+r[13])/o,t[2]=(r[2]*n+r[6]*i+r[10]*a+r[14])/o,t},Y.transformMat3=function(t,e,r){var n=e[0],i=e[1],a=e[2];return t[0]=n*r[0]+i*r[3]+a*r[6],t[1]=n*r[1]+i*r[4]+a*r[7],t[2]=n*r[2]+i*r[5]+a*r[8],t},Y.transformQuat=function(t,e,r){var n=e[0],i=e[1],a=e[2],o=r[0],s=r[1],l=r[2],u=r[3],h=u*n+s*a-l*i,c=u*i+l*n-o*a,d=u*a+o*i-s*n,f=-o*n-s*i-l*a;return t[0]=h*u+f*-o+c*-l-d*-s,t[1]=c*u+f*-s+d*-o-h*-l,t[2]=d*u+f*-l+h*-s-c*-o,t},Y.rotateX=function(t,e,r,n){var i=[],a=[];return i[0]=e[0]-r[0],i[1]=e[1]-r[1],i[2]=e[2]-r[2],a[0]=i[0],a[1]=i[1]*Math.cos(n)-i[2]*Math.sin(n),a[2]=i[1]*Math.sin(n)+i[2]*Math.cos(n),t[0]=a[0]+r[0],t[1]=a[1]+r[1],t[2]=a[2]+r[2],t},Y.rotateY=function(t,e,r,n){var i=[],a=[];return i[0]=e[0]-r[0],i[1]=e[1]-r[1],i[2]=e[2]-r[2],a[0]=i[2]*Math.sin(n)+i[0]*Math.cos(n),a[1]=i[1],a[2]=i[2]*Math.cos(n)-i[0]*Math.sin(n),t[0]=a[0]+r[0],t[1]=a[1]+r[1],t[2]=a[2]+r[2],t},Y.rotateZ=function(t,e,r,n){var i=[],a=[];return i[0]=e[0]-r[0],i[1]=e[1]-r[1],i[2]=e[2]-r[2],a[0]=i[0]*Math.cos(n)-i[1]*Math.sin(n),a[1]=i[0]*Math.sin(n)+i[1]*Math.cos(n),a[2]=i[2],t[0]=a[0]+r[0],t[1]=a[1]+r[1],t[2]=a[2]+r[2],t},Y.forEach=(Ke=Y.create(),function(t,e,r,n,i,a){var o,s;for(e||(e=3),r||(r=0),s=n?Math.min(n*e+r,t.length):t.length,o=r;o<s;o+=e)Ke[0]=t[o],Ke[1]=t[o+1],Ke[2]=t[o+2],i(Ke,Ke,a),t[o]=Ke[0],t[o+1]=Ke[1],t[o+2]=Ke[2];return t}),Y.angle=function(t,e){var r=Y.fromValues(t[0],t[1],t[2]),n=Y.fromValues(e[0],e[1],e[2]);Y.normalize(r,r),Y.normalize(n,n);var i=Y.dot(r,n);return i>1?0:Math.acos(i)};const E=Y;N.import(Sh);var xt=I.create,Wl={};function jl(t){return t.material}function ff(t,e,r){return e.uniforms[r].value}function pf(t,e,r,n){return r!==n}function mf(t){return!0}function Xl(){}var ql={float:Fa,byte:5120,ubyte:Ia,short:5122,ushort:5123};function gf(t,e,r){this.availableAttributes=t,this.availableAttributeSymbols=e,this.indicesBuffer=r,this.vao=null}function _f(t){var e,r;this.bind=function(n){e||((e=Ct.createCanvas()).width=e.height=1,e.getContext("2d"));var i=n.gl,a=!r;a&&(r=i.createTexture()),i.bindTexture(i.TEXTURE_2D,r),a&&i.texImage2D(i.TEXTURE_2D,0,i.RGBA,i.RGBA,i.UNSIGNED_BYTE,e)},this.unbind=function(n){n.gl.bindTexture(n.gl.TEXTURE_2D,null)},this.isRenderable=function(){return!0}}var vr=$t.extend(function(){return{canvas:null,_width:100,_height:100,devicePixelRatio:typeof window<"u"&&window.devicePixelRatio||1,clearColor:[0,0,0,0],clearBit:17664,alpha:!0,depth:!0,stencil:!1,antialias:!0,premultipliedAlpha:!0,preserveDrawingBuffer:!1,throwError:!0,gl:null,viewport:{},maxJointNumber:20,__currentFrameBuffer:null,_viewportStack:[],_clearStack:[],_sceneRendering:null}},function(){this.canvas||(this.canvas=Ct.createCanvas());var t=this.canvas;try{var e={alpha:this.alpha,depth:this.depth,stencil:this.stencil,antialias:this.antialias,premultipliedAlpha:this.premultipliedAlpha,preserveDrawingBuffer:this.preserveDrawingBuffer};if(this.gl=t.getContext("webgl",e)||t.getContext("experimental-webgl",e),!this.gl)throw new Error;this._glinfo=new tf(this.gl),this.gl.targetRenderer&&console.error("Already created a renderer"),this.gl.targetRenderer=this,this.resize()}catch(r){throw"Error creating WebGL Context "+r}this._programMgr=new xh(this),this._placeholderTexture=new _f},{resize:function(t,e){var r=this.canvas,n=this.devicePixelRatio;t!=null?(r.style&&(r.style.width=t+"px",r.style.height=e+"px"),r.width=t*n,r.height=e*n,this._width=t,this._height=e):(this._width=r.width/n,this._height=r.height/n),this.setViewport(0,0,this._width,this._height)},getWidth:function(){return this._width},getHeight:function(){return this._height},getViewportAspect:function(){var t=this.viewport;return t.width/t.height},setDevicePixelRatio:function(t){this.devicePixelRatio=t,this.resize(this._width,this._height)},getDevicePixelRatio:function(){return this.devicePixelRatio},getGLExtension:function(t){return this._glinfo.getExtension(t)},getGLParameter:function(t){return this._glinfo.getParameter(t)},setViewport:function(t,e,r,n,i){if(typeof t=="object"){var a=t;t=a.x,e=a.y,r=a.width,n=a.height,i=a.devicePixelRatio}i=i||this.devicePixelRatio,this.gl.viewport(t*i,e*i,r*i,n*i),this.viewport={x:t,y:e,width:r,height:n,devicePixelRatio:i}},saveViewport:function(){this._viewportStack.push(this.viewport)},restoreViewport:function(){this._viewportStack.length>0&&this.setViewport(this._viewportStack.pop())},saveClear:function(){this._clearStack.push({clearBit:this.clearBit,clearColor:this.clearColor})},restoreClear:function(){if(this._clearStack.length>0){var t=this._clearStack.pop();this.clearColor=t.clearColor,this.clearBit=t.clearBit}},bindSceneRendering:function(t){this._sceneRendering=t},render:function(t,e,r,n){var i=this.gl,a=this.clearColor;if(this.clearBit){i.colorMask(!0,!0,!0,!0),i.depthMask(!0);var o=this.viewport,s=!1,l=o.devicePixelRatio;(o.width!==this._width||o.height!==this._height||l&&l!==this.devicePixelRatio||o.x||o.y)&&(s=!0,i.enable(i.SCISSOR_TEST),i.scissor(o.x*l,o.y*l,o.width*l,o.height*l)),i.clearColor(a[0],a[1],a[2],a[3]),i.clear(this.clearBit),s&&i.disable(i.SCISSOR_TEST)}if(r||t.update(!1),t.updateLights(),e=e||t.getMainCamera()){e.update();var u=t.updateRenderList(e,!0);this._sceneRendering=t;var h=u.opaque,c=u.transparent,d=t.material;t.trigger("beforerender",this,t,e,u),n?(this.renderPreZ(h,t,e),i.depthFunc(i.LEQUAL)):i.depthFunc(i.LESS);for(var f=xt(),m=E.create(),p=0;p<c.length;p++){var g=c[p];I.multiplyAffine(f,e.viewMatrix.array,g.worldTransform.array),E.transformMat4(m,g.position.array,f),g.__depth=m[2]}this.renderPass(h,e,{getMaterial:function(_){return d||_.material},sortCompare:this.opaqueSortCompare}),this.renderPass(c,e,{getMaterial:function(_){return d||_.material},sortCompare:this.transparentSortCompare}),t.trigger("afterrender",this,t,e,u),this._sceneRendering=null}else console.error("Can't find camera in the scene.")},getProgram:function(t,e,r){return e=e||t.material,this._programMgr.getProgram(t,e,r)},validateProgram:function(t){if(t.__error){var e=t.__error;if(Wl[t.__uid__])return;if(Wl[t.__uid__]=!0,this.throwError)throw new Error(e);this.trigger("error",e)}},updatePrograms:function(t,e,r){var n=r&&r.getMaterial||jl;e=e||null;for(var i=0;i<t.length;i++){var a=t[i],o=n.call(this,a);if(i>0){var s=t[i-1],l=s.joints?s.joints.length:0;if((a.joints?a.joints.length:0)===l&&a.material===s.material&&a.lightGroup===s.lightGroup){a.__program=s.__program;continue}}var u=this._programMgr.getProgram(a,o,e);this.validateProgram(u),a.__program=u}},renderPass:function(t,e,r){this.trigger("beforerenderpass",this,t,e,r),(r=r||{}).getMaterial=r.getMaterial||jl,r.getUniform=r.getUniform||ff,r.isMaterialChanged=r.isMaterialChanged||pf,r.beforeRender=r.beforeRender||Xl,r.afterRender=r.afterRender||Xl;var n=r.ifRender||mf;this.updatePrograms(t,this._sceneRendering,r),r.sortCompare&&t.sort(r.sortCompare);var i=this.viewport,a=i.devicePixelRatio,o=[i.x*a,i.y*a,i.width*a,i.height*a],s=this.devicePixelRatio,l=this.__currentFrameBuffer?[this.__currentFrameBuffer.getTextureWidth(),this.__currentFrameBuffer.getTextureHeight()]:[this._width*s,this._height*s],u=[o[2],o[3]],h=Date.now();e?(I.copy(yt.VIEW,e.viewMatrix.array),I.copy(yt.PROJECTION,e.projectionMatrix.array),I.copy(yt.VIEWINVERSE,e.worldTransform.array)):(I.identity(yt.VIEW),I.identity(yt.PROJECTION),I.identity(yt.VIEWINVERSE)),I.multiply(yt.VIEWPROJECTION,yt.PROJECTION,yt.VIEW),I.invert(yt.PROJECTIONINVERSE,yt.PROJECTION),I.invert(yt.VIEWPROJECTIONINVERSE,yt.VIEWPROJECTION);for(var c,d,f,m,p,g,_,y,x,v,w,b,S=this.gl,M=this._sceneRendering,D=0;D<t.length;D++){var L,P=t[D],O=P.worldTransform!=null;if(n(P)){O&&(L=P.isSkinnedMesh&&P.isSkinnedMesh()?P.offsetMatrix?P.offsetMatrix.array:yt.IDENTITY:P.worldTransform.array);var R=P.geometry,A=r.getMaterial.call(this,P),z=P.__program,F=A.shader,X=R.__uid__+"-"+z.__uid__,H=X!==v;v=X,O&&(I.copy(yt.WORLD,L),I.multiply(yt.WORLDVIEWPROJECTION,yt.VIEWPROJECTION,L),I.multiplyAffine(yt.WORLDVIEW,yt.VIEW,L),(F.matrixSemantics.WORLDINVERSE||F.matrixSemantics.WORLDINVERSETRANSPOSE)&&I.invert(yt.WORLDINVERSE,L),(F.matrixSemantics.WORLDVIEWINVERSE||F.matrixSemantics.WORLDVIEWINVERSETRANSPOSE)&&I.invert(yt.WORLDVIEWINVERSE,yt.WORLDVIEW),(F.matrixSemantics.WORLDVIEWPROJECTIONINVERSE||F.matrixSemantics.WORLDVIEWPROJECTIONINVERSETRANSPOSE)&&I.invert(yt.WORLDVIEWPROJECTIONINVERSE,yt.WORLDVIEWPROJECTION)),P.beforeRender&&P.beforeRender(this),r.beforeRender.call(this,P,A,c);var ut=z!==d;ut?(z.bind(this),z.setUniformOfSemantic(S,"VIEWPORT",o),z.setUniformOfSemantic(S,"WINDOW_SIZE",l),e&&(z.setUniformOfSemantic(S,"NEAR",e.near),z.setUniformOfSemantic(S,"FAR",e.far)),z.setUniformOfSemantic(S,"DEVICEPIXELRATIO",a),z.setUniformOfSemantic(S,"TIME",h),z.setUniformOfSemantic(S,"VIEWPORT_SIZE",u),M&&M.setLightUniforms(z,P.lightGroup,this)):z=d,(ut||r.isMaterialChanged(P,f,A,c))&&(A.depthTest!==m&&(A.depthTest?S.enable(S.DEPTH_TEST):S.disable(S.DEPTH_TEST),m=A.depthTest),A.depthMask!==p&&(S.depthMask(A.depthMask),p=A.depthMask),A.transparent!==x&&(A.transparent?S.enable(S.BLEND):S.disable(S.BLEND),x=A.transparent),A.transparent&&(A.blend?A.blend(S):(S.blendEquationSeparate(S.FUNC_ADD,S.FUNC_ADD),S.blendFuncSeparate(S.SRC_ALPHA,S.ONE_MINUS_SRC_ALPHA,S.ONE,S.ONE_MINUS_SRC_ALPHA))),b=this._bindMaterial(P,A,z,f||null,c||null,d||null,r.getUniform),c=A);var G=F.matrixSemanticKeys;if(O)for(var St=0;St<G.length;St++){var ht=G[St],pt=F.matrixSemantics[ht],J=yt[ht];if(pt.isTranspose){var te=yt[pt.semanticNoTranspose];I.transpose(J,te)}z.setUniform(S,pt.type,pt.symbol,J)}P.cullFace!==_&&(_=P.cullFace,S.cullFace(_)),P.frontFace!==y&&(y=P.frontFace,S.frontFace(y)),P.culling!==g&&((g=P.culling)?S.enable(S.CULL_FACE):S.disable(S.CULL_FACE)),this._updateSkeleton(P,z,b),H&&(w=this._bindVAO(null,F,R,z)),this._renderObject(P,w,z),r.afterRender(this,P),P.afterRender&&P.afterRender(this),d=z,f=P}}this.trigger("afterrenderpass",this,t,e,r)},getMaxJointNumber:function(){return this.maxJointNumber},_updateSkeleton:function(t,e,r){var n=this.gl,i=t.skeleton;if(i)if(i.update(),t.joints.length>this.getMaxJointNumber()){var a=i.getSubSkinMatricesTexture(t.__uid__,t.joints);e.useTextureSlot(this,a,r),e.setUniform(n,"1i","skinMatricesTexture",r),e.setUniform(n,"1f","skinMatricesTextureSize",a.width)}else{var o=i.getSubSkinMatrices(t.__uid__,t.joints);e.setUniformOfSemantic(n,"SKIN_MATRIX",o)}},_renderObject:function(t,e,r){var n=this.gl,i=t.geometry,a=t.mode;a==null&&(a=4);var o=null,s=t.isInstancedMesh&&t.isInstancedMesh();if(!s||(o=this.getGLExtension("ANGLE_instanced_arrays"))){var l;if(s&&(l=this._bindInstancedAttributes(t,r,o)),e.indicesBuffer){var u=this.getGLExtension("OES_element_index_uint")&&i.indices instanceof Uint32Array?n.UNSIGNED_INT:n.UNSIGNED_SHORT;s?o.drawElementsInstancedANGLE(a,e.indicesBuffer.count,u,0,t.getInstanceCount()):n.drawElements(a,e.indicesBuffer.count,u,0)}else s?o.drawArraysInstancedANGLE(a,0,i.vertexCount,t.getInstanceCount()):n.drawArrays(a,0,i.vertexCount);if(s)for(var h=0;h<l.length;h++)n.disableVertexAttribArray(l[h])}else console.warn("Device not support ANGLE_instanced_arrays extension")},_bindInstancedAttributes:function(t,e,r){for(var n=this.gl,i=t.getInstancedAttributesBuffers(this),a=[],o=0;o<i.length;o++){var s=i[o],l=e.getAttribLocation(n,s.symbol);if(!(l<0)){var u=ql[s.type]||n.FLOAT;n.enableVertexAttribArray(l),n.bindBuffer(n.ARRAY_BUFFER,s.buffer),n.vertexAttribPointer(l,s.size,u,!1,0,0),r.vertexAttribDivisorANGLE(l,s.divisor),a.push(l)}}return a},_bindMaterial:function(t,e,r,n,i,a,o){for(var s=this.gl,l=a===r,u=r.currentTextureSlot(),h=e.getEnabledUniforms(),c=e.getTextureUniforms(),d=this._placeholderTexture,f=0;f<c.length;f++){var m=o(t,e,_=c[f]);if((g=e.uniforms[_].type)==="t"&&m)m.__slot=-1;else if(g==="tv")for(var p=0;p<m.length;p++)m[p]&&(m[p].__slot=-1)}for(d.__slot=-1,f=0;f<h.length;f++){var g,_=h[f],y=e.uniforms[_],x=(m=o(t,e,_),(g=y.type)==="t");if(x&&(m&&m.isRenderable()||(m=d)),i&&l){var v=o(n,i,_);if(x&&(v&&v.isRenderable()||(v=d)),v===m){if(x)r.takeCurrentTextureSlot(this,null);else if(g==="tv"&&m)for(p=0;p<m.length;p++)r.takeCurrentTextureSlot(this,null);continue}}if(m!=null)if(x)if(m.__slot<0){var w=r.currentTextureSlot();r.setUniform(s,"1i",_,w)&&(r.takeCurrentTextureSlot(this,m),m.__slot=w)}else r.setUniform(s,"1i",_,m.__slot);else if(Array.isArray(m)){if(m.length===0)continue;if(g==="tv"){if(!r.hasUniform(_))continue;var b=[];for(p=0;p<m.length;p++){var S=m[p];S.__slot<0?(w=r.currentTextureSlot(),b.push(w),r.takeCurrentTextureSlot(this,S),S.__slot=w):b.push(S.__slot)}r.setUniform(s,"1iv",_,b)}else r.setUniform(s,y.type,_,m)}else r.setUniform(s,y.type,_,m)}var M=r.currentTextureSlot();return r.resetTextureSlot(u),M},_bindVAO:function(t,e,r,n){var i=!r.dynamic,a=this.gl,o=this.__uid__+"-"+n.__uid__,s=r.__vaoCache[o];if(!s){var l=r.getBufferChunks(this);if(!l||!l.length)return;for(var u=l[0],h=u.attributeBuffers,c=u.indicesBuffer,d=[],f=[],m=0;m<h.length;m++){var p,g=(b=h[m]).name,_=b.semantic;if(_){var y=e.attributeSemantics[_];p=y&&y.symbol}else p=g;p&&n.attributes[p]&&(d.push(b),f.push(p))}s=new gf(d,f,c),i&&(r.__vaoCache[o]=s)}var x=!0;if(t&&i&&(s.vao==null?s.vao=t.createVertexArrayOES():x=!1,t.bindVertexArrayOES(s.vao)),d=s.availableAttributes,c=s.indicesBuffer,x){var v=n.enableAttributes(this,s.availableAttributeSymbols,t&&i&&s);for(m=0;m<d.length;m++){var w=v[m];if(w!==-1){var b,S=(b=d[m]).buffer,M=b.size,D=ql[b.type]||a.FLOAT;a.bindBuffer(a.ARRAY_BUFFER,S),a.vertexAttribPointer(w,M,D,!1,0,0)}}r.isUseIndices()&&a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,c.buffer)}return s},renderPreZ:function(t,e,r){var n=this.gl,i=this._prezMaterial||new ve({shader:new N(N.source("clay.prez.vertex"),N.source("clay.prez.fragment"))});this._prezMaterial=i,n.colorMask(!1,!1,!1,!1),n.depthMask(!0),this.renderPass(t,r,{ifRender:function(a){return!a.ignorePreZ},isMaterialChanged:function(a,o){var s=a.material,l=o.material;return s.get("diffuseMap")!==l.get("diffuseMap")||(s.get("alphaCutoff")||0)!==(l.get("alphaCutoff")||0)},getUniform:function(a,o,s){return s==="alphaMap"?a.material.get("diffuseMap"):s==="alphaCutoff"?a.material.isDefined("fragment","ALPHA_TEST")&&a.material.get("diffuseMap")&&a.material.get("alphaCutoff")||0:s==="uvRepeat"?a.material.get("uvRepeat"):s==="uvOffset"?a.material.get("uvOffset"):o.get(s)},getMaterial:function(){return i},sort:this.opaqueSortCompare}),n.colorMask(!0,!0,!0,!0),n.depthMask(!0)},disposeScene:function(t){this.disposeNode(t,!0,!0),t.dispose()},disposeNode:function(t,e,r){t.getParent()&&t.getParent().remove(t);var n={};t.traverse(function(i){var a=i.material;if(i.geometry&&e&&i.geometry.dispose(this),r&&a&&!n[a.__uid__]){for(var o=a.getTextureUniforms(),s=0;s<o.length;s++){var l=o[s],u=a.uniforms[l].value,h=a.uniforms[l].type;if(u){if(h==="t")u.dispose&&u.dispose(this);else if(h==="tv")for(var c=0;c<u.length;c++)u[c]&&u[c].dispose&&u[c].dispose(this)}}n[a.__uid__]=!0}i.dispose&&i.dispose(this)},this)},disposeGeometry:function(t){t.dispose(this)},disposeTexture:function(t){t.dispose(this)},disposeFrameBuffer:function(t){t.dispose(this)},dispose:function(){},screenToNDC:function(t,e,r){r||(r=new he),e=this._height-e;var n=this.viewport,i=r.array;return i[0]=(t-n.x)/n.width,i[0]=2*i[0]-1,i[1]=(e-n.y)/n.height,i[1]=2*i[1]-1,r}});vr.opaqueSortCompare=vr.prototype.opaqueSortCompare=function(t,e){return t.renderOrder===e.renderOrder?t.__program===e.__program?t.material===e.material?t.geometry.__uid__-e.geometry.__uid__:t.material.__uid__-e.material.__uid__:t.__program&&e.__program?t.__program.__uid__-e.__program.__uid__:0:t.renderOrder-e.renderOrder},vr.transparentSortCompare=vr.prototype.transparentSortCompare=function(t,e){return t.renderOrder===e.renderOrder?t.__depth===e.__depth?t.__program===e.__program?t.material===e.material?t.geometry.__uid__-e.geometry.__uid__:t.material.__uid__-e.material.__uid__:t.__program&&e.__program?t.__program.__uid__-e.__program.__uid__:0:t.__depth-e.__depth:t.renderOrder-e.renderOrder};var yt={IDENTITY:xt(),WORLD:xt(),VIEW:xt(),PROJECTION:xt(),WORLDVIEW:xt(),VIEWPROJECTION:xt(),WORLDVIEWPROJECTION:xt(),WORLDINVERSE:xt(),VIEWINVERSE:xt(),PROJECTIONINVERSE:xt(),WORLDVIEWINVERSE:xt(),VIEWPROJECTIONINVERSE:xt(),WORLDVIEWPROJECTIONINVERSE:xt(),WORLDTRANSPOSE:xt(),VIEWTRANSPOSE:xt(),PROJECTIONTRANSPOSE:xt(),WORLDVIEWTRANSPOSE:xt(),VIEWPROJECTIONTRANSPOSE:xt(),WORLDVIEWPROJECTIONTRANSPOSE:xt(),WORLDINVERSETRANSPOSE:xt(),VIEWINVERSETRANSPOSE:xt(),PROJECTIONINVERSETRANSPOSE:xt(),WORLDVIEWINVERSETRANSPOSE:xt(),VIEWPROJECTIONINVERSETRANSPOSE:xt(),WORLDVIEWPROJECTIONINVERSETRANSPOSE:xt()};vr.COLOR_BUFFER_BIT=16384,vr.DEPTH_BUFFER_BIT=256,vr.STENCIL_BUFFER_BIT=1024;const hi=vr;var j=function(t,e,r){t=t||0,e=e||0,r=r||0,this.array=E.fromValues(t,e,r),this._dirty=!0};j.prototype={constructor:j,add:function(t){return E.add(this.array,this.array,t.array),this._dirty=!0,this},set:function(t,e,r){return this.array[0]=t,this.array[1]=e,this.array[2]=r,this._dirty=!0,this},setArray:function(t){return this.array[0]=t[0],this.array[1]=t[1],this.array[2]=t[2],this._dirty=!0,this},clone:function(){return new j(this.x,this.y,this.z)},copy:function(t){return E.copy(this.array,t.array),this._dirty=!0,this},cross:function(t,e){return E.cross(this.array,t.array,e.array),this._dirty=!0,this},dist:function(t){return E.dist(this.array,t.array)},distance:function(t){return E.distance(this.array,t.array)},div:function(t){return E.div(this.array,this.array,t.array),this._dirty=!0,this},divide:function(t){return E.divide(this.array,this.array,t.array),this._dirty=!0,this},dot:function(t){return E.dot(this.array,t.array)},len:function(){return E.len(this.array)},length:function(){return E.length(this.array)},lerp:function(t,e,r){return E.lerp(this.array,t.array,e.array,r),this._dirty=!0,this},min:function(t){return E.min(this.array,this.array,t.array),this._dirty=!0,this},max:function(t){return E.max(this.array,this.array,t.array),this._dirty=!0,this},mul:function(t){return E.mul(this.array,this.array,t.array),this._dirty=!0,this},multiply:function(t){return E.multiply(this.array,this.array,t.array),this._dirty=!0,this},negate:function(){return E.negate(this.array,this.array),this._dirty=!0,this},normalize:function(){return E.normalize(this.array,this.array),this._dirty=!0,this},random:function(t){return E.random(this.array,t),this._dirty=!0,this},scale:function(t){return E.scale(this.array,this.array,t),this._dirty=!0,this},scaleAndAdd:function(t,e){return E.scaleAndAdd(this.array,this.array,t.array,e),this._dirty=!0,this},sqrDist:function(t){return E.sqrDist(this.array,t.array)},squaredDistance:function(t){return E.squaredDistance(this.array,t.array)},sqrLen:function(){return E.sqrLen(this.array)},squaredLength:function(){return E.squaredLength(this.array)},sub:function(t){return E.sub(this.array,this.array,t.array),this._dirty=!0,this},subtract:function(t){return E.subtract(this.array,this.array,t.array),this._dirty=!0,this},transformMat3:function(t){return E.transformMat3(this.array,this.array,t.array),this._dirty=!0,this},transformMat4:function(t){return E.transformMat4(this.array,this.array,t.array),this._dirty=!0,this},transformQuat:function(t){return E.transformQuat(this.array,this.array,t.array),this._dirty=!0,this},applyProjection:function(t){var e=this.array;if((t=t.array)[15]===0){var r=-1/e[2];e[0]=t[0]*e[0]*r,e[1]=t[5]*e[1]*r,e[2]=(t[10]*e[2]+t[14])*r}else e[0]=t[0]*e[0]+t[12],e[1]=t[5]*e[1]+t[13],e[2]=t[10]*e[2]+t[14];return this._dirty=!0,this},eulerFromQuat:function(t,e){j.eulerFromQuat(this,t,e)},eulerFromMat3:function(t,e){j.eulerFromMat3(this,t,e)},toString:function(){return"["+Array.prototype.join.call(this.array,",")+"]"},toArray:function(){return Array.prototype.slice.call(this.array)}};var Oi=Object.defineProperty;if(Oi){var lo=j.prototype;Oi(lo,"x",{get:function(){return this.array[0]},set:function(t){this.array[0]=t,this._dirty=!0}}),Oi(lo,"y",{get:function(){return this.array[1]},set:function(t){this.array[1]=t,this._dirty=!0}}),Oi(lo,"z",{get:function(){return this.array[2]},set:function(t){this.array[2]=t,this._dirty=!0}})}function fe(t,e,r){return t<e?e:t>r?r:t}j.add=function(t,e,r){return E.add(t.array,e.array,r.array),t._dirty=!0,t},j.set=function(t,e,r,n){E.set(t.array,e,r,n),t._dirty=!0},j.copy=function(t,e){return E.copy(t.array,e.array),t._dirty=!0,t},j.cross=function(t,e,r){return E.cross(t.array,e.array,r.array),t._dirty=!0,t},j.dist=function(t,e){return E.distance(t.array,e.array)},j.distance=j.dist,j.div=function(t,e,r){return E.divide(t.array,e.array,r.array),t._dirty=!0,t},j.divide=j.div,j.dot=function(t,e){return E.dot(t.array,e.array)},j.len=function(t){return E.length(t.array)},j.lerp=function(t,e,r,n){return E.lerp(t.array,e.array,r.array,n),t._dirty=!0,t},j.min=function(t,e,r){return E.min(t.array,e.array,r.array),t._dirty=!0,t},j.max=function(t,e,r){return E.max(t.array,e.array,r.array),t._dirty=!0,t},j.mul=function(t,e,r){return E.multiply(t.array,e.array,r.array),t._dirty=!0,t},j.multiply=j.mul,j.negate=function(t,e){return E.negate(t.array,e.array),t._dirty=!0,t},j.normalize=function(t,e){return E.normalize(t.array,e.array),t._dirty=!0,t},j.random=function(t,e){return E.random(t.array,e),t._dirty=!0,t},j.scale=function(t,e,r){return E.scale(t.array,e.array,r),t._dirty=!0,t},j.scaleAndAdd=function(t,e,r,n){return E.scaleAndAdd(t.array,e.array,r.array,n),t._dirty=!0,t},j.sqrDist=function(t,e){return E.sqrDist(t.array,e.array)},j.squaredDistance=j.sqrDist,j.sqrLen=function(t){return E.sqrLen(t.array)},j.squaredLength=j.sqrLen,j.sub=function(t,e,r){return E.subtract(t.array,e.array,r.array),t._dirty=!0,t},j.subtract=j.sub,j.transformMat3=function(t,e,r){return E.transformMat3(t.array,e.array,r.array),t._dirty=!0,t},j.transformMat4=function(t,e,r){return E.transformMat4(t.array,e.array,r.array),t._dirty=!0,t},j.transformQuat=function(t,e,r){return E.transformQuat(t.array,e.array,r.array),t._dirty=!0,t};var mt=Math.atan2,pe=Math.asin,$r=Math.abs;j.eulerFromQuat=function(t,e,r){t._dirty=!0,e=e.array;var n=t.array,i=e[0],a=e[1],o=e[2],s=e[3],l=i*i,u=a*a,h=o*o,c=s*s;switch(r=(r||"XYZ").toUpperCase()){case"XYZ":n[0]=mt(2*(i*s-a*o),c-l-u+h),n[1]=pe(fe(2*(i*o+a*s),-1,1)),n[2]=mt(2*(o*s-i*a),c+l-u-h);break;case"YXZ":n[0]=pe(fe(2*(i*s-a*o),-1,1)),n[1]=mt(2*(i*o+a*s),c-l-u+h),n[2]=mt(2*(i*a+o*s),c-l+u-h);break;case"ZXY":n[0]=pe(fe(2*(i*s+a*o),-1,1)),n[1]=mt(2*(a*s-o*i),c-l-u+h),n[2]=mt(2*(o*s-i*a),c-l+u-h);break;case"ZYX":n[0]=mt(2*(i*s+o*a),c-l-u+h),n[1]=pe(fe(2*(a*s-i*o),-1,1)),n[2]=mt(2*(i*a+o*s),c+l-u-h);break;case"YZX":n[0]=mt(2*(i*s-o*a),c-l+u-h),n[1]=mt(2*(a*s-i*o),c+l-u-h),n[2]=pe(fe(2*(i*a+o*s),-1,1));break;case"XZY":n[0]=mt(2*(i*s+a*o),c-l+u-h),n[1]=mt(2*(i*o+a*s),c+l-u-h),n[2]=pe(fe(2*(o*s-i*a),-1,1));break;default:console.warn("Unkown order: "+r)}return t},j.eulerFromMat3=function(t,e,r){var n=e.array,i=n[0],a=n[3],o=n[6],s=n[1],l=n[4],u=n[7],h=n[2],c=n[5],d=n[8],f=t.array;switch(r=(r||"XYZ").toUpperCase()){case"XYZ":f[1]=pe(fe(o,-1,1)),$r(o)<.99999?(f[0]=mt(-u,d),f[2]=mt(-a,i)):(f[0]=mt(c,l),f[2]=0);break;case"YXZ":f[0]=pe(-fe(u,-1,1)),$r(u)<.99999?(f[1]=mt(o,d),f[2]=mt(s,l)):(f[1]=mt(-h,i),f[2]=0);break;case"ZXY":f[0]=pe(fe(c,-1,1)),$r(c)<.99999?(f[1]=mt(-h,d),f[2]=mt(-a,l)):(f[1]=0,f[2]=mt(s,i));break;case"ZYX":f[1]=pe(-fe(h,-1,1)),$r(h)<.99999?(f[0]=mt(c,d),f[2]=mt(s,i)):(f[0]=0,f[2]=mt(-a,l));break;case"YZX":f[2]=pe(fe(s,-1,1)),$r(s)<.99999?(f[0]=mt(-u,l),f[1]=mt(-h,i)):(f[0]=0,f[1]=mt(o,d));break;case"XZY":f[2]=pe(-fe(a,-1,1)),$r(a)<.99999?(f[0]=mt(c,l),f[1]=mt(o,i)):(f[0]=mt(-u,d),f[1]=0);break;default:console.warn("Unkown order: "+r)}return t._dirty=!0,t},Object.defineProperties(j,{POSITIVE_X:{get:function(){return new j(1,0,0)}},NEGATIVE_X:{get:function(){return new j(-1,0,0)}},POSITIVE_Y:{get:function(){return new j(0,1,0)}},NEGATIVE_Y:{get:function(){return new j(0,-1,0)}},POSITIVE_Z:{get:function(){return new j(0,0,1)}},NEGATIVE_Z:{get:function(){return new j(0,0,-1)}},UP:{get:function(){return new j(0,1,0)}},ZERO:{get:function(){return new j}}});const B=j;var Fn,Ri,Bn,ur,Ni,Ii,oa=function(t,e){this.origin=t||new B,this.direction=e||new B};oa.prototype={constructor:oa,intersectPlane:function(t,e){var r=t.normal.array,n=t.distance,i=this.origin.array,a=this.direction.array,o=E.dot(r,a);if(o===0)return null;e||(e=new B);var s=(E.dot(r,i)-n)/o;return E.scaleAndAdd(e.array,i,a,-s),e._dirty=!0,e},mirrorAgainstPlane:function(t){var e=E.dot(t.normal.array,this.direction.array);E.scaleAndAdd(this.direction.array,this.direction.array,t.normal.array,2*-e),this.direction._dirty=!0},distanceToPoint:(Ni=E.create(),function(t){E.sub(Ni,t,this.origin.array);var e=E.dot(Ni,this.direction.array);if(e<0)return E.distance(this.origin.array,t);var r=E.lenSquared(Ni);return Math.sqrt(r-e*e)}),intersectSphere:(Ii=E.create(),function(t,e,r){var n=this.origin.array,i=this.direction.array;t=t.array,E.sub(Ii,t,n);var a=E.dot(Ii,i),o=E.squaredLength(Ii)-a*a,s=e*e;if(!(o>s)){var l=Math.sqrt(s-o),u=a-l,h=a+l;return r||(r=new B),u<0?h<0?null:(E.scaleAndAdd(r.array,n,i,h),r):(E.scaleAndAdd(r.array,n,i,u),r)}}),intersectBoundingBox:function(t,e){var r,n,i,a,o,s,l=this.direction.array,u=this.origin.array,h=t.min.array,c=t.max.array,d=1/l[0],f=1/l[1],m=1/l[2];if(d>=0?(r=(h[0]-u[0])*d,n=(c[0]-u[0])*d):(n=(h[0]-u[0])*d,r=(c[0]-u[0])*d),f>=0?(i=(h[1]-u[1])*f,a=(c[1]-u[1])*f):(a=(h[1]-u[1])*f,i=(c[1]-u[1])*f),r>a||i>n||((i>r||r!=r)&&(r=i),(a<n||n!=n)&&(n=a),m>=0?(o=(h[2]-u[2])*m,s=(c[2]-u[2])*m):(s=(h[2]-u[2])*m,o=(c[2]-u[2])*m),r>s||o>n)||((o>r||r!=r)&&(r=o),(s<n||n!=n)&&(n=s),n<0))return null;var p=r>=0?r:n;return e||(e=new B),E.scaleAndAdd(e.array,u,l,p),e},intersectTriangle:(Fn=E.create(),Ri=E.create(),Bn=E.create(),ur=E.create(),function(t,e,r,n,i,a){var o=this.direction.array,s=this.origin.array;t=t.array,e=e.array,r=r.array,E.sub(Fn,e,t),E.sub(Ri,r,t),E.cross(ur,Ri,o);var l=E.dot(Fn,ur);if(n){if(l>-1e-5)return null}else if(l>-1e-5&&l<1e-5)return null;E.sub(Bn,s,t);var u=E.dot(ur,Bn)/l;if(u<0||u>1)return null;E.cross(ur,Fn,Bn);var h=E.dot(o,ur)/l;if(h<0||h>1||u+h>1)return null;E.cross(ur,Fn,Ri);var c=-E.dot(Bn,ur)/l;return c<0?null:(i||(i=new B),a&&B.set(a,1-u-h,u,h),E.scaleAndAdd(i.array,s,o,c),i)}),applyTransform:function(t){B.add(this.direction,this.direction,this.origin),B.transformMat4(this.origin,this.origin,t),B.transformMat4(this.direction,this.direction,t),B.sub(this.direction,this.direction,this.origin),B.normalize(this.direction,this.direction)},copy:function(t){B.copy(this.origin,t.origin),B.copy(this.direction,t.direction)},clone:function(){var t=new oa;return t.copy(this),t}};const wa=oa;var ot={create:function(){var t=new Vt(4);return t[0]=0,t[1]=0,t[2]=0,t[3]=0,t},clone:function(t){var e=new Vt(4);return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e},fromValues:function(t,e,r,n){var i=new Vt(4);return i[0]=t,i[1]=e,i[2]=r,i[3]=n,i},copy:function(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t},set:function(t,e,r,n,i){return t[0]=e,t[1]=r,t[2]=n,t[3]=i,t},add:function(t,e,r){return t[0]=e[0]+r[0],t[1]=e[1]+r[1],t[2]=e[2]+r[2],t[3]=e[3]+r[3],t},subtract:function(t,e,r){return t[0]=e[0]-r[0],t[1]=e[1]-r[1],t[2]=e[2]-r[2],t[3]=e[3]-r[3],t}};ot.sub=ot.subtract,ot.multiply=function(t,e,r){return t[0]=e[0]*r[0],t[1]=e[1]*r[1],t[2]=e[2]*r[2],t[3]=e[3]*r[3],t},ot.mul=ot.multiply,ot.divide=function(t,e,r){return t[0]=e[0]/r[0],t[1]=e[1]/r[1],t[2]=e[2]/r[2],t[3]=e[3]/r[3],t},ot.div=ot.divide,ot.min=function(t,e,r){return t[0]=Math.min(e[0],r[0]),t[1]=Math.min(e[1],r[1]),t[2]=Math.min(e[2],r[2]),t[3]=Math.min(e[3],r[3]),t},ot.max=function(t,e,r){return t[0]=Math.max(e[0],r[0]),t[1]=Math.max(e[1],r[1]),t[2]=Math.max(e[2],r[2]),t[3]=Math.max(e[3],r[3]),t},ot.scale=function(t,e,r){return t[0]=e[0]*r,t[1]=e[1]*r,t[2]=e[2]*r,t[3]=e[3]*r,t},ot.scaleAndAdd=function(t,e,r,n){return t[0]=e[0]+r[0]*n,t[1]=e[1]+r[1]*n,t[2]=e[2]+r[2]*n,t[3]=e[3]+r[3]*n,t},ot.distance=function(t,e){var r=e[0]-t[0],n=e[1]-t[1],i=e[2]-t[2],a=e[3]-t[3];return Math.sqrt(r*r+n*n+i*i+a*a)},ot.dist=ot.distance,ot.squaredDistance=function(t,e){var r=e[0]-t[0],n=e[1]-t[1],i=e[2]-t[2],a=e[3]-t[3];return r*r+n*n+i*i+a*a},ot.sqrDist=ot.squaredDistance,ot.length=function(t){var e=t[0],r=t[1],n=t[2],i=t[3];return Math.sqrt(e*e+r*r+n*n+i*i)},ot.len=ot.length,ot.squaredLength=function(t){var e=t[0],r=t[1],n=t[2],i=t[3];return e*e+r*r+n*n+i*i},ot.sqrLen=ot.squaredLength,ot.negate=function(t,e){return t[0]=-e[0],t[1]=-e[1],t[2]=-e[2],t[3]=-e[3],t},ot.inverse=function(t,e){return t[0]=1/e[0],t[1]=1/e[1],t[2]=1/e[2],t[3]=1/e[3],t},ot.normalize=function(t,e){var r=e[0],n=e[1],i=e[2],a=e[3],o=r*r+n*n+i*i+a*a;return o>0&&(o=1/Math.sqrt(o),t[0]=e[0]*o,t[1]=e[1]*o,t[2]=e[2]*o,t[3]=e[3]*o),t},ot.dot=function(t,e){return t[0]*e[0]+t[1]*e[1]+t[2]*e[2]+t[3]*e[3]},ot.lerp=function(t,e,r,n){var i=e[0],a=e[1],o=e[2],s=e[3];return t[0]=i+n*(r[0]-i),t[1]=a+n*(r[1]-a),t[2]=o+n*(r[2]-o),t[3]=s+n*(r[3]-s),t},ot.random=function(t,e){return e=e||1,t[0]=vn(),t[1]=vn(),t[2]=vn(),t[3]=vn(),ot.normalize(t,t),ot.scale(t,t,e),t},ot.transformMat4=function(t,e,r){var n=e[0],i=e[1],a=e[2],o=e[3];return t[0]=r[0]*n+r[4]*i+r[8]*a+r[12]*o,t[1]=r[1]*n+r[5]*i+r[9]*a+r[13]*o,t[2]=r[2]*n+r[6]*i+r[10]*a+r[14]*o,t[3]=r[3]*n+r[7]*i+r[11]*a+r[15]*o,t},ot.transformQuat=function(t,e,r){var n=e[0],i=e[1],a=e[2],o=r[0],s=r[1],l=r[2],u=r[3],h=u*n+s*a-l*i,c=u*i+l*n-o*a,d=u*a+o*i-s*n,f=-o*n-s*i-l*a;return t[0]=h*u+f*-o+c*-l-d*-s,t[1]=c*u+f*-s+d*-o-h*-l,t[2]=d*u+f*-l+h*-s-c*-o,t},ot.forEach=function(){var t=ot.create();return function(e,r,n,i,a,o){var s,l;for(r||(r=4),n||(n=0),l=i?Math.min(i*r+n,e.length):e.length,s=n;s<l;s+=r)t[0]=e[s],t[1]=e[s+1],t[2]=e[s+2],t[3]=e[s+3],a(t,t,o),e[s]=t[0],e[s+1]=t[1],e[s+2]=t[2],e[s+3]=t[3];return e}}();const U=ot;var ke={create:function(){var t=new Vt(9);return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=1,t[5]=0,t[6]=0,t[7]=0,t[8]=1,t},fromMat4:function(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[4],t[4]=e[5],t[5]=e[6],t[6]=e[8],t[7]=e[9],t[8]=e[10],t},clone:function(t){var e=new Vt(9);return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[4]=t[4],e[5]=t[5],e[6]=t[6],e[7]=t[7],e[8]=t[8],e},copy:function(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4],t[5]=e[5],t[6]=e[6],t[7]=e[7],t[8]=e[8],t},identity:function(t){return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=1,t[5]=0,t[6]=0,t[7]=0,t[8]=1,t},transpose:function(t,e){if(t===e){var r=e[1],n=e[2],i=e[5];t[1]=e[3],t[2]=e[6],t[3]=r,t[5]=e[7],t[6]=n,t[7]=i}else t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8];return t},invert:function(t,e){var r=e[0],n=e[1],i=e[2],a=e[3],o=e[4],s=e[5],l=e[6],u=e[7],h=e[8],c=h*o-s*u,d=-h*a+s*l,f=u*a-o*l,m=r*c+n*d+i*f;return m?(m=1/m,t[0]=c*m,t[1]=(-h*n+i*u)*m,t[2]=(s*n-i*o)*m,t[3]=d*m,t[4]=(h*r-i*l)*m,t[5]=(-s*r+i*a)*m,t[6]=f*m,t[7]=(-u*r+n*l)*m,t[8]=(o*r-n*a)*m,t):null},adjoint:function(t,e){var r=e[0],n=e[1],i=e[2],a=e[3],o=e[4],s=e[5],l=e[6],u=e[7],h=e[8];return t[0]=o*h-s*u,t[1]=i*u-n*h,t[2]=n*s-i*o,t[3]=s*l-a*h,t[4]=r*h-i*l,t[5]=i*a-r*s,t[6]=a*u-o*l,t[7]=n*l-r*u,t[8]=r*o-n*a,t},determinant:function(t){var e=t[0],r=t[1],n=t[2],i=t[3],a=t[4],o=t[5],s=t[6],l=t[7],u=t[8];return e*(u*a-o*l)+r*(-u*i+o*s)+n*(l*i-a*s)},multiply:function(t,e,r){var n=e[0],i=e[1],a=e[2],o=e[3],s=e[4],l=e[5],u=e[6],h=e[7],c=e[8],d=r[0],f=r[1],m=r[2],p=r[3],g=r[4],_=r[5],y=r[6],x=r[7],v=r[8];return t[0]=d*n+f*o+m*u,t[1]=d*i+f*s+m*h,t[2]=d*a+f*l+m*c,t[3]=p*n+g*o+_*u,t[4]=p*i+g*s+_*h,t[5]=p*a+g*l+_*c,t[6]=y*n+x*o+v*u,t[7]=y*i+x*s+v*h,t[8]=y*a+x*l+v*c,t}};ke.mul=ke.multiply,ke.translate=function(t,e,r){var n=e[0],i=e[1],a=e[2],o=e[3],s=e[4],l=e[5],u=e[6],h=e[7],c=e[8],d=r[0],f=r[1];return t[0]=n,t[1]=i,t[2]=a,t[3]=o,t[4]=s,t[5]=l,t[6]=d*n+f*o+u,t[7]=d*i+f*s+h,t[8]=d*a+f*l+c,t},ke.rotate=function(t,e,r){var n=e[0],i=e[1],a=e[2],o=e[3],s=e[4],l=e[5],u=e[6],h=e[7],c=e[8],d=Math.sin(r),f=Math.cos(r);return t[0]=f*n+d*o,t[1]=f*i+d*s,t[2]=f*a+d*l,t[3]=f*o-d*n,t[4]=f*s-d*i,t[5]=f*l-d*a,t[6]=u,t[7]=h,t[8]=c,t},ke.scale=function(t,e,r){var n=r[0],i=r[1];return t[0]=n*e[0],t[1]=n*e[1],t[2]=n*e[2],t[3]=i*e[3],t[4]=i*e[4],t[5]=i*e[5],t[6]=e[6],t[7]=e[7],t[8]=e[8],t},ke.fromMat2d=function(t,e){return t[0]=e[0],t[1]=e[1],t[2]=0,t[3]=e[2],t[4]=e[3],t[5]=0,t[6]=e[4],t[7]=e[5],t[8]=1,t},ke.fromQuat=function(t,e){var r=e[0],n=e[1],i=e[2],a=e[3],o=r+r,s=n+n,l=i+i,u=r*o,h=n*o,c=n*s,d=i*o,f=i*s,m=i*l,p=a*o,g=a*s,_=a*l;return t[0]=1-c-m,t[3]=h-_,t[6]=d+g,t[1]=h+_,t[4]=1-u-m,t[7]=f-p,t[2]=d-g,t[5]=f+p,t[8]=1-u-c,t},ke.normalFromMat4=function(t,e){var r=e[0],n=e[1],i=e[2],a=e[3],o=e[4],s=e[5],l=e[6],u=e[7],h=e[8],c=e[9],d=e[10],f=e[11],m=e[12],p=e[13],g=e[14],_=e[15],y=r*s-n*o,x=r*l-i*o,v=r*u-a*o,w=n*l-i*s,b=n*u-a*s,S=i*u-a*l,M=h*p-c*m,D=h*g-d*m,L=h*_-f*m,P=c*g-d*p,O=c*_-f*p,R=d*_-f*g,A=y*R-x*O+v*P+w*L-b*D+S*M;return A?(A=1/A,t[0]=(s*R-l*O+u*P)*A,t[1]=(l*L-o*R-u*D)*A,t[2]=(o*O-s*L+u*M)*A,t[3]=(i*O-n*R-a*P)*A,t[4]=(r*R-i*L+a*D)*A,t[5]=(n*L-r*O-a*M)*A,t[6]=(p*S-g*b+_*w)*A,t[7]=(g*v-m*S-_*x)*A,t[8]=(m*b-p*v+_*y)*A,t):null},ke.frob=function(t){return Math.sqrt(Math.pow(t[0],2)+Math.pow(t[1],2)+Math.pow(t[2],2)+Math.pow(t[3],2)+Math.pow(t[4],2)+Math.pow(t[5],2)+Math.pow(t[6],2)+Math.pow(t[7],2)+Math.pow(t[8],2))};const rt=ke;var be,Zl,Yl,we,lt={create:function(){var t=new Vt(4);return t[0]=0,t[1]=0,t[2]=0,t[3]=1,t}};lt.rotationTo=(be=E.create(),Zl=E.fromValues(1,0,0),Yl=E.fromValues(0,1,0),function(t,e,r){var n=E.dot(e,r);return n<-.999999?(E.cross(be,Zl,e),E.length(be)<1e-6&&E.cross(be,Yl,e),E.normalize(be,be),lt.setAxisAngle(t,be,Math.PI),t):n>.999999?(t[0]=0,t[1]=0,t[2]=0,t[3]=1,t):(E.cross(be,e,r),t[0]=be[0],t[1]=be[1],t[2]=be[2],t[3]=1+n,lt.normalize(t,t))}),lt.setAxes=(we=rt.create(),function(t,e,r,n){return we[0]=r[0],we[3]=r[1],we[6]=r[2],we[1]=n[0],we[4]=n[1],we[7]=n[2],we[2]=-e[0],we[5]=-e[1],we[8]=-e[2],lt.normalize(t,lt.fromMat3(t,we))}),lt.clone=U.clone,lt.fromValues=U.fromValues,lt.copy=U.copy,lt.set=U.set,lt.identity=function(t){return t[0]=0,t[1]=0,t[2]=0,t[3]=1,t},lt.setAxisAngle=function(t,e,r){r*=.5;var n=Math.sin(r);return t[0]=n*e[0],t[1]=n*e[1],t[2]=n*e[2],t[3]=Math.cos(r),t},lt.add=U.add,lt.multiply=function(t,e,r){var n=e[0],i=e[1],a=e[2],o=e[3],s=r[0],l=r[1],u=r[2],h=r[3];return t[0]=n*h+o*s+i*u-a*l,t[1]=i*h+o*l+a*s-n*u,t[2]=a*h+o*u+n*l-i*s,t[3]=o*h-n*s-i*l-a*u,t},lt.mul=lt.multiply,lt.scale=U.scale,lt.rotateX=function(t,e,r){r*=.5;var n=e[0],i=e[1],a=e[2],o=e[3],s=Math.sin(r),l=Math.cos(r);return t[0]=n*l+o*s,t[1]=i*l+a*s,t[2]=a*l-i*s,t[3]=o*l-n*s,t},lt.rotateY=function(t,e,r){r*=.5;var n=e[0],i=e[1],a=e[2],o=e[3],s=Math.sin(r),l=Math.cos(r);return t[0]=n*l-a*s,t[1]=i*l+o*s,t[2]=a*l+n*s,t[3]=o*l-i*s,t},lt.rotateZ=function(t,e,r){r*=.5;var n=e[0],i=e[1],a=e[2],o=e[3],s=Math.sin(r),l=Math.cos(r);return t[0]=n*l+i*s,t[1]=i*l-n*s,t[2]=a*l+o*s,t[3]=o*l-a*s,t},lt.calculateW=function(t,e){var r=e[0],n=e[1],i=e[2];return t[0]=r,t[1]=n,t[2]=i,t[3]=Math.sqrt(Math.abs(1-r*r-n*n-i*i)),t},lt.dot=U.dot,lt.lerp=U.lerp,lt.slerp=function(t,e,r,n){var i,a,o,s,l,u=e[0],h=e[1],c=e[2],d=e[3],f=r[0],m=r[1],p=r[2],g=r[3];return(a=u*f+h*m+c*p+d*g)<0&&(a=-a,f=-f,m=-m,p=-p,g=-g),1-a>1e-6?(i=Math.acos(a),o=Math.sin(i),s=Math.sin((1-n)*i)/o,l=Math.sin(n*i)/o):(s=1-n,l=n),t[0]=s*u+l*f,t[1]=s*h+l*m,t[2]=s*c+l*p,t[3]=s*d+l*g,t},lt.invert=function(t,e){var r=e[0],n=e[1],i=e[2],a=e[3],o=r*r+n*n+i*i+a*a,s=o?1/o:0;return t[0]=-r*s,t[1]=-n*s,t[2]=-i*s,t[3]=a*s,t},lt.conjugate=function(t,e){return t[0]=-e[0],t[1]=-e[1],t[2]=-e[2],t[3]=e[3],t},lt.length=U.length,lt.len=lt.length,lt.squaredLength=U.squaredLength,lt.sqrLen=lt.squaredLength,lt.normalize=U.normalize,lt.fromMat3=function(t,e){var r,n=e[0]+e[4]+e[8];if(n>0)r=Math.sqrt(n+1),t[3]=.5*r,r=.5/r,t[0]=(e[5]-e[7])*r,t[1]=(e[6]-e[2])*r,t[2]=(e[1]-e[3])*r;else{var i=0;e[4]>e[0]&&(i=1),e[8]>e[3*i+i]&&(i=2);var a=(i+1)%3,o=(i+2)%3;r=Math.sqrt(e[3*i+i]-e[3*a+a]-e[3*o+o]+1),t[i]=.5*r,r=.5/r,t[3]=(e[3*a+o]-e[3*o+a])*r,t[a]=(e[3*a+i]+e[3*i+a])*r,t[o]=(e[3*o+i]+e[3*i+o])*r}return t};const Z=lt;var uo,ho,co,me,vt=function(){this._axisX=new B,this._axisY=new B,this._axisZ=new B,this.array=I.create(),this._dirty=!0};vt.prototype={constructor:vt,setArray:function(t){for(var e=0;e<this.array.length;e++)this.array[e]=t[e];return this._dirty=!0,this},adjoint:function(){return I.adjoint(this.array,this.array),this._dirty=!0,this},clone:function(){return new vt().copy(this)},copy:function(t){return I.copy(this.array,t.array),this._dirty=!0,this},determinant:function(){return I.determinant(this.array)},fromQuat:function(t){return I.fromQuat(this.array,t.array),this._dirty=!0,this},fromRotationTranslation:function(t,e){return I.fromRotationTranslation(this.array,t.array,e.array),this._dirty=!0,this},fromMat2d:function(t){return vt.fromMat2d(this,t),this},frustum:function(t,e,r,n,i,a){return I.frustum(this.array,t,e,r,n,i,a),this._dirty=!0,this},identity:function(){return I.identity(this.array),this._dirty=!0,this},invert:function(){return I.invert(this.array,this.array),this._dirty=!0,this},lookAt:function(t,e,r){return I.lookAt(this.array,t.array,e.array,r.array),this._dirty=!0,this},mul:function(t){return I.mul(this.array,this.array,t.array),this._dirty=!0,this},mulLeft:function(t){return I.mul(this.array,t.array,this.array),this._dirty=!0,this},multiply:function(t){return I.multiply(this.array,this.array,t.array),this._dirty=!0,this},multiplyLeft:function(t){return I.multiply(this.array,t.array,this.array),this._dirty=!0,this},ortho:function(t,e,r,n,i,a){return I.ortho(this.array,t,e,r,n,i,a),this._dirty=!0,this},perspective:function(t,e,r,n){return I.perspective(this.array,t,e,r,n),this._dirty=!0,this},rotate:function(t,e){return I.rotate(this.array,this.array,t,e.array),this._dirty=!0,this},rotateX:function(t){return I.rotateX(this.array,this.array,t),this._dirty=!0,this},rotateY:function(t){return I.rotateY(this.array,this.array,t),this._dirty=!0,this},rotateZ:function(t){return I.rotateZ(this.array,this.array,t),this._dirty=!0,this},scale:function(t){return I.scale(this.array,this.array,t.array),this._dirty=!0,this},translate:function(t){return I.translate(this.array,this.array,t.array),this._dirty=!0,this},transpose:function(){return I.transpose(this.array,this.array),this._dirty=!0,this},decomposeMatrix:(uo=E.create(),ho=E.create(),co=E.create(),me=rt.create(),function(t,e,r){var n=this.array;E.set(uo,n[0],n[1],n[2]),E.set(ho,n[4],n[5],n[6]),E.set(co,n[8],n[9],n[10]);var i=E.length(uo),a=E.length(ho),o=E.length(co);this.determinant()<0&&(i=-i),t&&t.set(i,a,o),r.set(n[12],n[13],n[14]),rt.fromMat4(me,n),me[0]/=i,me[1]/=i,me[2]/=i,me[3]/=a,me[4]/=a,me[5]/=a,me[6]/=o,me[7]/=o,me[8]/=o,Z.fromMat3(e.array,me),Z.normalize(e.array,e.array),e._dirty=!0,r._dirty=!0}),toString:function(){return"["+Array.prototype.join.call(this.array,",")+"]"},toArray:function(){return Array.prototype.slice.call(this.array)}};var Fi=Object.defineProperty;if(Fi){var fo=vt.prototype;Fi(fo,"z",{get:function(){var t=this.array;return this._axisZ.set(t[8],t[9],t[10]),this._axisZ},set:function(t){var e=this.array;t=t.array,e[8]=t[0],e[9]=t[1],e[10]=t[2],this._dirty=!0}}),Fi(fo,"y",{get:function(){var t=this.array;return this._axisY.set(t[4],t[5],t[6]),this._axisY},set:function(t){var e=this.array;t=t.array,e[4]=t[0],e[5]=t[1],e[6]=t[2],this._dirty=!0}}),Fi(fo,"x",{get:function(){var t=this.array;return this._axisX.set(t[0],t[1],t[2]),this._axisX},set:function(t){var e=this.array;t=t.array,e[0]=t[0],e[1]=t[1],e[2]=t[2],this._dirty=!0}})}vt.adjoint=function(t,e){return I.adjoint(t.array,e.array),t._dirty=!0,t},vt.copy=function(t,e){return I.copy(t.array,e.array),t._dirty=!0,t},vt.determinant=function(t){return I.determinant(t.array)},vt.identity=function(t){return I.identity(t.array),t._dirty=!0,t},vt.ortho=function(t,e,r,n,i,a,o){return I.ortho(t.array,e,r,n,i,a,o),t._dirty=!0,t},vt.perspective=function(t,e,r,n,i){return I.perspective(t.array,e,r,n,i),t._dirty=!0,t},vt.lookAt=function(t,e,r,n){return I.lookAt(t.array,e.array,r.array,n.array),t._dirty=!0,t},vt.invert=function(t,e){return I.invert(t.array,e.array),t._dirty=!0,t},vt.mul=function(t,e,r){return I.mul(t.array,e.array,r.array),t._dirty=!0,t},vt.multiply=vt.mul,vt.fromQuat=function(t,e){return I.fromQuat(t.array,e.array),t._dirty=!0,t},vt.fromRotationTranslation=function(t,e,r){return I.fromRotationTranslation(t.array,e.array,r.array),t._dirty=!0,t},vt.fromMat2d=function(t,e){return t._dirty=!0,e=e.array,(t=t.array)[0]=e[0],t[4]=e[2],t[12]=e[4],t[1]=e[1],t[5]=e[3],t[13]=e[5],t},vt.rotate=function(t,e,r,n){return I.rotate(t.array,e.array,r,n.array),t._dirty=!0,t},vt.rotateX=function(t,e,r){return I.rotateX(t.array,e.array,r),t._dirty=!0,t},vt.rotateY=function(t,e,r){return I.rotateY(t.array,e.array,r),t._dirty=!0,t},vt.rotateZ=function(t,e,r){return I.rotateZ(t.array,e.array,r),t._dirty=!0,t},vt.scale=function(t,e,r){return I.scale(t.array,e.array,r.array),t._dirty=!0,t},vt.transpose=function(t,e){return I.transpose(t.array,e.array),t._dirty=!0,t},vt.translate=function(t,e,r){return I.translate(t.array,e.array,r.array),t._dirty=!0,t};const k=vt;var ct=function(t,e,r,n){t=t||0,e=e||0,r=r||0,n=n===void 0?1:n,this.array=Z.fromValues(t,e,r,n),this._dirty=!0};ct.prototype={constructor:ct,add:function(t){return Z.add(this.array,this.array,t.array),this._dirty=!0,this},calculateW:function(){return Z.calculateW(this.array,this.array),this._dirty=!0,this},set:function(t,e,r,n){return this.array[0]=t,this.array[1]=e,this.array[2]=r,this.array[3]=n,this._dirty=!0,this},setArray:function(t){return this.array[0]=t[0],this.array[1]=t[1],this.array[2]=t[2],this.array[3]=t[3],this._dirty=!0,this},clone:function(){return new ct(this.x,this.y,this.z,this.w)},conjugate:function(){return Z.conjugate(this.array,this.array),this._dirty=!0,this},copy:function(t){return Z.copy(this.array,t.array),this._dirty=!0,this},dot:function(t){return Z.dot(this.array,t.array)},fromMat3:function(t){return Z.fromMat3(this.array,t.array),this._dirty=!0,this},fromMat4:function(){var t=rt.create();return function(e){return rt.fromMat4(t,e.array),rt.transpose(t,t),Z.fromMat3(this.array,t),this._dirty=!0,this}}(),identity:function(){return Z.identity(this.array),this._dirty=!0,this},invert:function(){return Z.invert(this.array,this.array),this._dirty=!0,this},len:function(){return Z.len(this.array)},length:function(){return Z.length(this.array)},lerp:function(t,e,r){return Z.lerp(this.array,t.array,e.array,r),this._dirty=!0,this},mul:function(t){return Z.mul(this.array,this.array,t.array),this._dirty=!0,this},mulLeft:function(t){return Z.multiply(this.array,t.array,this.array),this._dirty=!0,this},multiply:function(t){return Z.multiply(this.array,this.array,t.array),this._dirty=!0,this},multiplyLeft:function(t){return Z.multiply(this.array,t.array,this.array),this._dirty=!0,this},normalize:function(){return Z.normalize(this.array,this.array),this._dirty=!0,this},rotateX:function(t){return Z.rotateX(this.array,this.array,t),this._dirty=!0,this},rotateY:function(t){return Z.rotateY(this.array,this.array,t),this._dirty=!0,this},rotateZ:function(t){return Z.rotateZ(this.array,this.array,t),this._dirty=!0,this},rotationTo:function(t,e){return Z.rotationTo(this.array,t.array,e.array),this._dirty=!0,this},setAxes:function(t,e,r){return Z.setAxes(this.array,t.array,e.array,r.array),this._dirty=!0,this},setAxisAngle:function(t,e){return Z.setAxisAngle(this.array,t.array,e),this._dirty=!0,this},slerp:function(t,e,r){return Z.slerp(this.array,t.array,e.array,r),this._dirty=!0,this},sqrLen:function(){return Z.sqrLen(this.array)},squaredLength:function(){return Z.squaredLength(this.array)},fromEuler:function(t,e){return ct.fromEuler(this,t,e)},toString:function(){return"["+Array.prototype.join.call(this.array,",")+"]"},toArray:function(){return Array.prototype.slice.call(this.array)}};var zn=Object.defineProperty;if(zn){var Bi=ct.prototype;zn(Bi,"x",{get:function(){return this.array[0]},set:function(t){this.array[0]=t,this._dirty=!0}}),zn(Bi,"y",{get:function(){return this.array[1]},set:function(t){this.array[1]=t,this._dirty=!0}}),zn(Bi,"z",{get:function(){return this.array[2]},set:function(t){this.array[2]=t,this._dirty=!0}}),zn(Bi,"w",{get:function(){return this.array[3]},set:function(t){this.array[3]=t,this._dirty=!0}})}ct.add=function(t,e,r){return Z.add(t.array,e.array,r.array),t._dirty=!0,t},ct.set=function(t,e,r,n,i){Z.set(t.array,e,r,n,i),t._dirty=!0},ct.copy=function(t,e){return Z.copy(t.array,e.array),t._dirty=!0,t},ct.calculateW=function(t,e){return Z.calculateW(t.array,e.array),t._dirty=!0,t},ct.conjugate=function(t,e){return Z.conjugate(t.array,e.array),t._dirty=!0,t},ct.identity=function(t){return Z.identity(t.array),t._dirty=!0,t},ct.invert=function(t,e){return Z.invert(t.array,e.array),t._dirty=!0,t},ct.dot=function(t,e){return Z.dot(t.array,e.array)},ct.len=function(t){return Z.length(t.array)},ct.lerp=function(t,e,r,n){return Z.lerp(t.array,e.array,r.array,n),t._dirty=!0,t},ct.slerp=function(t,e,r,n){return Z.slerp(t.array,e.array,r.array,n),t._dirty=!0,t},ct.mul=function(t,e,r){return Z.multiply(t.array,e.array,r.array),t._dirty=!0,t},ct.multiply=ct.mul,ct.rotateX=function(t,e,r){return Z.rotateX(t.array,e.array,r),t._dirty=!0,t},ct.rotateY=function(t,e,r){return Z.rotateY(t.array,e.array,r),t._dirty=!0,t},ct.rotateZ=function(t,e,r){return Z.rotateZ(t.array,e.array,r),t._dirty=!0,t},ct.setAxisAngle=function(t,e,r){return Z.setAxisAngle(t.array,e.array,r),t._dirty=!0,t},ct.normalize=function(t,e){return Z.normalize(t.array,e.array),t._dirty=!0,t},ct.sqrLen=function(t){return Z.sqrLen(t.array)},ct.squaredLength=ct.sqrLen,ct.fromMat3=function(t,e){return Z.fromMat3(t.array,e.array),t._dirty=!0,t},ct.setAxes=function(t,e,r,n){return Z.setAxes(t.array,e.array,r.array,n.array),t._dirty=!0,t},ct.rotationTo=function(t,e,r){return Z.rotationTo(t.array,e.array,r.array),t._dirty=!0,t},ct.fromEuler=function(t,e,r){t._dirty=!0,e=e.array;var n=t.array,i=Math.cos(e[0]/2),a=Math.cos(e[1]/2),o=Math.cos(e[2]/2),s=Math.sin(e[0]/2),l=Math.sin(e[1]/2),u=Math.sin(e[2]/2);switch(r=(r||"XYZ").toUpperCase()){case"XYZ":n[0]=s*a*o+i*l*u,n[1]=i*l*o-s*a*u,n[2]=i*a*u+s*l*o,n[3]=i*a*o-s*l*u;break;case"YXZ":n[0]=s*a*o+i*l*u,n[1]=i*l*o-s*a*u,n[2]=i*a*u-s*l*o,n[3]=i*a*o+s*l*u;break;case"ZXY":n[0]=s*a*o-i*l*u,n[1]=i*l*o+s*a*u,n[2]=i*a*u+s*l*o,n[3]=i*a*o-s*l*u;break;case"ZYX":n[0]=s*a*o-i*l*u,n[1]=i*l*o+s*a*u,n[2]=i*a*u-s*l*o,n[3]=i*a*o+s*l*u;break;case"YZX":n[0]=s*a*o+i*l*u,n[1]=i*l*o+s*a*u,n[2]=i*a*u-s*l*o,n[3]=i*a*o-s*l*u;break;case"XZY":n[0]=s*a*o-i*l*u,n[1]=i*l*o-s*a*u,n[2]=i*a*u+s*l*o,n[3]=i*a*o+s*l*u}};const Mh=ct;var Re,Ne,Ie,Fe,Be,ze,hr=E.set,zi=E.copy,sa=function(t,e){this.min=t||new B(1/0,1/0,1/0),this.max=e||new B(-1/0,-1/0,-1/0),this.vertices=null};sa.prototype={constructor:sa,updateFromVertices:function(t){if(t.length>0){var e=this.min,r=this.max,n=e.array,i=r.array;zi(n,t[0]),zi(i,t[0]);for(var a=1;a<t.length;a++){var o=t[a];o[0]<n[0]&&(n[0]=o[0]),o[1]<n[1]&&(n[1]=o[1]),o[2]<n[2]&&(n[2]=o[2]),o[0]>i[0]&&(i[0]=o[0]),o[1]>i[1]&&(i[1]=o[1]),o[2]>i[2]&&(i[2]=o[2])}e._dirty=!0,r._dirty=!0}},union:function(t){var e=this.min,r=this.max;return E.min(e.array,e.array,t.min.array),E.max(r.array,r.array,t.max.array),e._dirty=!0,r._dirty=!0,this},intersection:function(t){var e=this.min,r=this.max;return E.max(e.array,e.array,t.min.array),E.min(r.array,r.array,t.max.array),e._dirty=!0,r._dirty=!0,this},intersectBoundingBox:function(t){var e=this.min.array,r=this.max.array,n=t.min.array,i=t.max.array;return!(e[0]>i[0]||e[1]>i[1]||e[2]>i[2]||r[0]<n[0]||r[1]<n[1]||r[2]<n[2])},containBoundingBox:function(t){var e=this.min.array,r=this.max.array,n=t.min.array,i=t.max.array;return e[0]<=n[0]&&e[1]<=n[1]&&e[2]<=n[2]&&r[0]>=i[0]&&r[1]>=i[1]&&r[2]>=i[2]},containPoint:function(t){var e=this.min.array,r=this.max.array,n=t.array;return e[0]<=n[0]&&e[1]<=n[1]&&e[2]<=n[2]&&r[0]>=n[0]&&r[1]>=n[1]&&r[2]>=n[2]},isFinite:function(){var t=this.min.array,e=this.max.array;return isFinite(t[0])&&isFinite(t[1])&&isFinite(t[2])&&isFinite(e[0])&&isFinite(e[1])&&isFinite(e[2])},applyTransform:function(t){this.transformFrom(this,t)},transformFrom:(Re=E.create(),Ne=E.create(),Ie=E.create(),Fe=E.create(),Be=E.create(),ze=E.create(),function(t,e){var r=t.min.array,n=t.max.array,i=e.array;return Re[0]=i[0]*r[0],Re[1]=i[1]*r[0],Re[2]=i[2]*r[0],Ne[0]=i[0]*n[0],Ne[1]=i[1]*n[0],Ne[2]=i[2]*n[0],Ie[0]=i[4]*r[1],Ie[1]=i[5]*r[1],Ie[2]=i[6]*r[1],Fe[0]=i[4]*n[1],Fe[1]=i[5]*n[1],Fe[2]=i[6]*n[1],Be[0]=i[8]*r[2],Be[1]=i[9]*r[2],Be[2]=i[10]*r[2],ze[0]=i[8]*n[2],ze[1]=i[9]*n[2],ze[2]=i[10]*n[2],r=this.min.array,n=this.max.array,r[0]=Math.min(Re[0],Ne[0])+Math.min(Ie[0],Fe[0])+Math.min(Be[0],ze[0])+i[12],r[1]=Math.min(Re[1],Ne[1])+Math.min(Ie[1],Fe[1])+Math.min(Be[1],ze[1])+i[13],r[2]=Math.min(Re[2],Ne[2])+Math.min(Ie[2],Fe[2])+Math.min(Be[2],ze[2])+i[14],n[0]=Math.max(Re[0],Ne[0])+Math.max(Ie[0],Fe[0])+Math.max(Be[0],ze[0])+i[12],n[1]=Math.max(Re[1],Ne[1])+Math.max(Ie[1],Fe[1])+Math.max(Be[1],ze[1])+i[13],n[2]=Math.max(Re[2],Ne[2])+Math.max(Ie[2],Fe[2])+Math.max(Be[2],ze[2])+i[14],this.min._dirty=!0,this.max._dirty=!0,this}),applyProjection:function(t){var e=this.min.array,r=this.max.array,n=t.array,i=e[0],a=e[1],o=e[2],s=r[0],l=r[1],u=e[2],h=r[0],c=r[1],d=r[2];if(n[15]===1)e[0]=n[0]*i+n[12],e[1]=n[5]*a+n[13],r[2]=n[10]*o+n[14],r[0]=n[0]*h+n[12],r[1]=n[5]*c+n[13],e[2]=n[10]*d+n[14];else{var f=-1/o;e[0]=n[0]*i*f,e[1]=n[5]*a*f,r[2]=(n[10]*o+n[14])*f,f=-1/u,r[0]=n[0]*s*f,r[1]=n[5]*l*f,f=-1/d,e[2]=(n[10]*d+n[14])*f}return this.min._dirty=!0,this.max._dirty=!0,this},updateVertices:function(){var t=this.vertices;if(!t){t=[];for(var e=0;e<8;e++)t[e]=E.fromValues(0,0,0);this.vertices=t}var r=this.min.array,n=this.max.array;return hr(t[0],r[0],r[1],r[2]),hr(t[1],r[0],n[1],r[2]),hr(t[2],n[0],r[1],r[2]),hr(t[3],n[0],n[1],r[2]),hr(t[4],r[0],r[1],n[2]),hr(t[5],r[0],n[1],n[2]),hr(t[6],n[0],r[1],n[2]),hr(t[7],n[0],n[1],n[2]),this},copy:function(t){var e=this.min,r=this.max;return zi(e.array,t.min.array),zi(r.array,t.max.array),e._dirty=!0,r._dirty=!0,this},clone:function(){var t=new sa;return t.copy(this),t}};const Jt=sa;var po,mo,vf=0,yf=$t.extend({name:"",position:null,rotation:null,scale:null,worldTransform:null,localTransform:null,autoUpdateLocalTransform:!0,_parent:null,_scene:null,_needsUpdateWorldTransform:!0,_inIterating:!1,__depth:0},function(){this.name||(this.name=(this.type||"NODE")+"_"+vf++),this.position||(this.position=new B),this.rotation||(this.rotation=new Mh),this.scale||(this.scale=new B(1,1,1)),this.worldTransform=new k,this.localTransform=new k,this._children=[]},{target:null,invisible:!1,isSkinnedMesh:function(){return!1},isRenderable:function(){return!1},setName:function(t){var e=this._scene;if(e){var r=e._nodeRepository;delete r[this.name],r[t]=this}this.name=t},add:function(t){var e=t._parent;if(e!==this){e&&e.remove(t),t._parent=this,this._children.push(t);var r=this._scene;r&&r!==t.scene&&t.traverse(this._addSelfToScene,this),t._needsUpdateWorldTransform=!0}},remove:function(t){var e=this._children,r=e.indexOf(t);r<0||(e.splice(r,1),t._parent=null,this._scene&&t.traverse(this._removeSelfFromScene,this))},removeAll:function(){for(var t=this._children,e=0;e<t.length;e++)t[e]._parent=null,this._scene&&t[e].traverse(this._removeSelfFromScene,this);this._children=[]},getScene:function(){return this._scene},getParent:function(){return this._parent},_removeSelfFromScene:function(t){t._scene.removeFromScene(t),t._scene=null},_addSelfToScene:function(t){this._scene.addToScene(t),t._scene=this._scene},isAncestor:function(t){for(var e=t._parent;e;){if(e===this)return!0;e=e._parent}return!1},children:function(){return this._children.slice()},childAt:function(t){return this._children[t]},getChildByName:function(t){for(var e=this._children,r=0;r<e.length;r++)if(e[r].name===t)return e[r]},getDescendantByName:function(t){for(var e=this._children,r=0;r<e.length;r++){var n=e[r];if(n.name===t)return n;var i=n.getDescendantByName(t);if(i)return i}},queryNode:function(t){if(t){for(var e=t.split("/"),r=this,n=0;n<e.length;n++){var i=e[n];if(i){for(var a=!1,o=r._children,s=0;s<o.length;s++){var l=o[s];if(l.name===i){r=l,a=!0;break}}if(!a)return}}return r}},getPath:function(t){if(!this._parent)return"/";for(var e=this._parent,r=this.name;e._parent&&(r=e.name+"/"+r,e._parent!=t);)e=e._parent;return!e._parent&&t?null:r},traverse:function(t,e){t.call(e,this);for(var r=this._children,n=0,i=r.length;n<i;n++)r[n].traverse(t,e)},eachChild:function(t,e){for(var r=this._children,n=0,i=r.length;n<i;n++){var a=r[n];t.call(e,a,n)}},setLocalTransform:function(t){I.copy(this.localTransform.array,t.array),this.decomposeLocalTransform()},decomposeLocalTransform:function(t){var e=t?null:this.scale;this.localTransform.decomposeMatrix(e,this.rotation,this.position)},setWorldTransform:function(t){I.copy(this.worldTransform.array,t.array),this.decomposeWorldTransform()},decomposeWorldTransform:(mo=I.create(),function(t){var e=this.localTransform,r=this.worldTransform;this._parent?(I.invert(mo,this._parent.worldTransform.array),I.multiply(e.array,mo,r.array)):I.copy(e.array,r.array);var n=t?null:this.scale;e.decomposeMatrix(n,this.rotation,this.position)}),transformNeedsUpdate:function(){return this.position._dirty||this.rotation._dirty||this.scale._dirty},updateLocalTransform:function(){var t=this.position,e=this.rotation,r=this.scale;if(this.transformNeedsUpdate()){var n=this.localTransform.array;I.fromRotationTranslation(n,e.array,t.array),I.scale(n,n,r.array),e._dirty=!1,r._dirty=!1,t._dirty=!1,this._needsUpdateWorldTransform=!0}},_updateWorldTransformTopDown:function(){var t=this.localTransform.array,e=this.worldTransform.array;this._parent?I.multiplyAffine(e,this._parent.worldTransform.array,t):I.copy(e,t)},updateWorldTransform:function(){for(var t=this;t&&t.getParent()&&t.getParent().transformNeedsUpdate();)t=t.getParent();t.update()},update:function(t){this.autoUpdateLocalTransform?this.updateLocalTransform():t=!0,(t||this._needsUpdateWorldTransform)&&(this._updateWorldTransformTopDown(),t=!0,this._needsUpdateWorldTransform=!1);for(var e=this._children,r=0,n=e.length;r<n;r++)e[r].update(t)},getBoundingBox:function(){function t(i){return!i.invisible&&i.geometry}var e=new Jt,r=new k,n=new k;return function(i,a){return a=a||new Jt,this._parent?k.invert(n,this._parent.worldTransform):k.identity(n),this.traverse(function(o){o.geometry&&o.geometry.boundingBox&&(e.copy(o.geometry.boundingBox),k.multiply(r,n,o.worldTransform),e.applyTransform(r),a.union(e))},this,t),a}}(),getWorldPosition:function(t){this.transformNeedsUpdate()&&this.updateWorldTransform();var e=this.worldTransform.array;if(t){var r=t.array;return r[0]=e[12],r[1]=e[13],r[2]=e[14],t}return new B(e[12],e[13],e[14])},clone:function(){var t=new this.constructor,e=this._children;t.setName(this.name),t.position.copy(this.position),t.rotation.copy(this.rotation),t.scale.copy(this.scale);for(var r=0;r<e.length;r++)t.add(e[r].clone());return t},rotateAround:function(){var t=new B,e=new k;return function(r,n,i){t.copy(this.position).subtract(r);var a=this.localTransform;a.identity(),a.translate(r),a.rotate(i,n),e.fromRotationTranslation(this.rotation,t),a.multiply(e),a.scale(this.scale),this.decomposeLocalTransform(),this._needsUpdateWorldTransform=!0}}(),lookAt:(po=new k,function(t,e){po.lookAt(this.position,t,e||this.localTransform.y).invert(),this.setLocalTransform(po),this.target=t})});const qe=yf;var go,se=qe.extend({material:null,geometry:null,mode:4,_renderInfo:null},{__program:null,lightGroup:0,renderOrder:0,culling:!0,cullFace:Ra,frontFace:Na,frustumCulling:!0,receiveShadow:!0,castShadow:!0,ignorePicking:!1,ignorePreZ:!1,ignoreGBuffer:!1,isRenderable:function(){return this.geometry&&this.material&&this.material.shader&&!this.invisible&&this.geometry.vertexCount>0},beforeRender:function(t){},afterRender:function(t,e){},getBoundingBox:function(t,e){return e=qe.prototype.getBoundingBox.call(this,t,e),this.geometry&&this.geometry.boundingBox&&e.union(this.geometry.boundingBox),e},clone:(go=["castShadow","receiveShadow","mode","culling","cullFace","frontFace","frustumCulling","renderOrder","lineWidth","ignorePicking","ignorePreZ","ignoreGBuffer"],function(){var t=qe.prototype.clone.call(this);t.geometry=this.geometry,t.material=this.material;for(var e=0;e<go.length;e++){var r=go[e];t[r]!==this[r]&&(t[r]=this[r])}return t})});se.POINTS=0,se.LINES=1,se.LINE_LOOP=2,se.LINE_STRIP=3,se.TRIANGLES=4,se.TRIANGLE_STRIP=5,se.TRIANGLE_FAN=6,se.BACK=Ra,se.FRONT=Ns,se.FRONT_AND_BACK=1032,se.CW=Is,se.CCW=Na;const rs=se;var Ui,Gi,ki,Ar,_o,Gs=$t.extend({scene:null,camera:null,renderer:null},function(){this._ray=new wa,this._ndc=new he},{pick:function(t,e,r){return this.pickAll(t,e,[],r)[0]||null},pickAll:function(t,e,r,n){return this.renderer.screenToNDC(t,e,this._ndc),this.camera.castRay(this._ndc,this._ray),r=r||[],this._intersectNode(this.scene,r,n||!1),r.sort(this._intersectionCompareFunc),r},_intersectNode:function(t,e,r){t instanceof rs&&t.isRenderable()&&(t.ignorePicking&&!r||!(t.mode===4&&t.geometry.isUseIndices()||t.geometry.pickByRay||t.geometry.pick)||this._intersectRenderable(t,e));for(var n=0;n<t._children.length;n++)this._intersectNode(t._children[n],e,r)},_intersectRenderable:(Ui=new B,Gi=new B,ki=new B,Ar=new wa,_o=new k,function(t,e){var r=t.isSkinnedMesh();Ar.copy(this._ray),k.invert(_o,t.worldTransform),r||Ar.applyTransform(_o);var n=t.geometry,i=r?t.skeleton.boundingBox:n.boundingBox;if(!i||Ar.intersectBoundingBox(i))if(n.pick)n.pick(this._ndc.x,this._ndc.y,this.renderer,this.camera,t,e);else if(n.pickByRay)n.pickByRay(Ar,t,e);else{var a,o,s=t.cullFace===Ra&&t.frontFace===Na||t.cullFace===Ns&&t.frontFace===Is,l=n.indices,u=n.attributes.position,h=n.attributes.weight,c=n.attributes.joint,d=[];if(u&&u.value&&l){if(r){o=t.skeleton.getSubSkinMatrices(t.__uid__,t.joints);for(var f=0;f<t.joints.length;f++){d[f]=d[f]||[];for(var m=0;m<16;m++)d[f][m]=o[16*f+m]}var p=[],g=[],_=[],y=[],x=[],v=n.attributes.skinnedPosition;for(v&&v.value||(n.createAttribute("skinnedPosition","f",3),(v=n.attributes.skinnedPosition).init(n.vertexCount)),f=0;f<n.vertexCount;f++){for(u.get(f,p),h.get(f,g),c.get(f,_),g[3]=1-g[0]-g[1]-g[2],E.set(y,0,0,0),m=0;m<4;m++)_[m]>=0&&g[m]>1e-4&&(E.transformMat4(x,p,d[_[m]]),E.scaleAndAdd(y,y,x,g[m]));v.set(f,y)}}for(f=0;f<l.length;f+=3){var w=l[f],b=l[f+1],S=l[f+2],M=r?n.attributes.skinnedPosition:u;if(M.get(w,Ui.array),M.get(b,Gi.array),M.get(S,ki.array),a=s?Ar.intersectTriangle(Ui,Gi,ki,t.culling):Ar.intersectTriangle(Ui,ki,Gi,t.culling)){var D=new B;r?B.copy(D,a):B.transformMat4(D,a,t.worldTransform),e.push(new Gs.Intersection(a,D,t,[w,b,S],f/3,B.dist(D,this._ray.origin)))}}}}}),_intersectionCompareFunc:function(t,e){return t.distance-e.distance}});Gs.Intersection=function(t,e,r,n,i,a){this.point=t,this.pointWorld=e,this.target=r,this.triangle=n,this.triangleIndex=i,this.distance=a};const xf=Gs;var Un="__dt__",ns=function(){this._contextId=0,this._caches=[],this._context={}};(ns.prototype={use:function(t,e){var r=this._caches;r[t]||(r[t]={},e&&(r[t]=e())),this._contextId=t,this._context=r[t]},put:function(t,e){this._context[t]=e},get:function(t){return this._context[t]},dirty:function(t){var e=Un+(t=t||"");this.put(e,!0)},dirtyAll:function(t){for(var e=Un+(t=t||""),r=this._caches,n=0;n<r.length;n++)r[n]&&(r[n][e]=!0)},fresh:function(t){var e=Un+(t=t||"");this.put(e,!1)},freshAll:function(t){for(var e=Un+(t=t||""),r=this._caches,n=0;n<r.length;n++)r[n]&&(r[n][e]=!1)},isDirty:function(t){var e=Un+(t=t||""),r=this._context;return!r.hasOwnProperty(e)||r[e]===!0},deleteContext:function(t){delete this._caches[t],this._context={}},delete:function(t){delete this._context[t]},clearAll:function(){this._caches={}},getContext:function(){return this._context},eachContext:function(t,e){Object.keys(this._caches).forEach(function(r){t&&t.call(e,r)})},miss:function(t){return!this._context.hasOwnProperty(t)}}).constructor=ns;const ks=ns;var it=$t.extend({width:512,height:512,type:Ia,format:Fs,wrapS:Qo,wrapT:Qo,minFilter:mi,magFilter:pi,useMipmap:!0,anisotropic:1,flipY:!0,sRGB:!0,unpackAlignment:4,premultiplyAlpha:!1,dynamic:!1,NPOT:!1,__used:0},function(){this._cache=new ks},{getWebGLTexture:function(t){var e=t.gl,r=this._cache;return r.use(t.__uid__),r.miss("webgl_texture")&&r.put("webgl_texture",e.createTexture()),this.dynamic?this.update(t):r.isDirty()&&(this.update(t),r.fresh()),r.get("webgl_texture")},bind:function(){},unbind:function(){},dirty:function(){this._cache&&this._cache.dirtyAll()},update:function(t){},updateCommon:function(t){var e=t.gl;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,this.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,this.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,this.unpackAlignment),this.format===Ba&&(this.useMipmap=!1);var r=t.getGLExtension("EXT_sRGB");this.format!==it.SRGB||r||(this.format=it.RGB),this.format!==it.SRGB_ALPHA||r||(this.format=it.RGBA),this.NPOT=!this.isPowerOfTwo()},getAvailableWrapS:function(){return this.NPOT?qr:this.wrapS},getAvailableWrapT:function(){return this.NPOT?qr:this.wrapT},getAvailableMinFilter:function(){var t=this.minFilter;return this.NPOT||!this.useMipmap?t===Bs||t===Us?fi:t===mi||t===zs?pi:t:t},getAvailableMagFilter:function(){return this.magFilter},nextHighestPowerOfTwo:function(t){--t;for(var e=1;e<32;e<<=1)t|=t>>e;return t+1},dispose:function(t){var e=this._cache;e.use(t.__uid__);var r=e.get("webgl_texture");r&&t.gl.deleteTexture(r),e.deleteContext(t.__uid__)},isRenderable:function(){},isPowerOfTwo:function(){}});Object.defineProperty(it.prototype,"width",{get:function(){return this._width},set:function(t){this._width=t}}),Object.defineProperty(it.prototype,"height",{get:function(){return this._height},set:function(t){this._height=t}}),it.BYTE=5120,it.UNSIGNED_BYTE=Ia,it.SHORT=5122,it.UNSIGNED_SHORT=5123,it.INT=5124,it.UNSIGNED_INT=5125,it.FLOAT=Fa,it.HALF_FLOAT=36193,it.UNSIGNED_INT_24_8_WEBGL=34042,it.DEPTH_COMPONENT=Ba,it.DEPTH_STENCIL=34041,it.ALPHA=6406,it.RGB=6407,it.RGBA=Fs,it.LUMINANCE=6409,it.LUMINANCE_ALPHA=6410,it.SRGB=35904,it.SRGB_ALPHA=35906,it.COMPRESSED_RGB_S3TC_DXT1_EXT=33776,it.COMPRESSED_RGBA_S3TC_DXT1_EXT=33777,it.COMPRESSED_RGBA_S3TC_DXT3_EXT=33778,it.COMPRESSED_RGBA_S3TC_DXT5_EXT=33779,it.NEAREST=fi,it.LINEAR=pi,it.NEAREST_MIPMAP_NEAREST=Bs,it.LINEAR_MIPMAP_NEAREST=zs,it.NEAREST_MIPMAP_LINEAR=Us,it.LINEAR_MIPMAP_LINEAR=mi,it.REPEAT=Qo,it.CLAMP_TO_EDGE=qr,it.MIRRORED_REPEAT=33648;const V=it;var le=rs.extend({skeleton:null,joints:null},function(){this.joints||(this.joints=[])},{offsetMatrix:null,isInstancedMesh:function(){return!1},isSkinnedMesh:function(){return!!(this.skeleton&&this.joints&&this.joints.length>0)},clone:function(){var t=rs.prototype.clone.call(this);return t.skeleton=this.skeleton,this.joints&&(t.joints=this.joints.slice()),t}});le.POINTS=0,le.LINES=1,le.LINE_LOOP=2,le.LINE_STRIP=3,le.TRIANGLES=4,le.TRIANGLE_STRIP=5,le.TRIANGLE_FAN=6,le.BACK=Ra,le.FRONT=Ns,le.FRONT_AND_BACK=1032,le.CW=Is,le.CCW=Na;const Hr=le;var bf={isPowerOfTwo:function(t){return!(t&t-1)},nextPowerOfTwo:function(t){return t--,t|=t>>1,t|=t>>2,t|=t>>4,t|=t>>8,t|=t>>16,++t},nearestPowerOfTwo:function(t){return Math.pow(2,Math.round(Math.log(t)/Math.LN2))}};const Eh=bf;var Kl=Eh.isPowerOfTwo;function Jl(t){return Math.pow(2,Math.round(Math.log(t)/Math.LN2))}var is=V.extend(function(){return{image:null,pixels:null,mipmaps:[],convertToPOT:!1}},{textureType:"texture2D",update:function(t){var e=t.gl;e.bindTexture(e.TEXTURE_2D,this._cache.get("webgl_texture")),this.updateCommon(t);var r=this.format,n=this.type,i=!(!this.convertToPOT||this.mipmaps.length||!this.image||this.wrapS!==V.REPEAT&&this.wrapT!==V.REPEAT||!this.NPOT);e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,i?this.wrapS:this.getAvailableWrapS()),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,i?this.wrapT:this.getAvailableWrapT()),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,i?this.magFilter:this.getAvailableMagFilter()),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,i?this.minFilter:this.getAvailableMinFilter());var a=t.getGLExtension("EXT_texture_filter_anisotropic");if(a&&this.anisotropic>1&&e.texParameterf(e.TEXTURE_2D,a.TEXTURE_MAX_ANISOTROPY_EXT,this.anisotropic),n===36193&&(t.getGLExtension("OES_texture_half_float")||(n=Fa)),this.mipmaps.length)for(var o=this.width,s=this.height,l=0;l<this.mipmaps.length;l++){var u=this.mipmaps[l];this._updateTextureData(e,u,l,o,s,r,n,!1),o/=2,s/=2}else this._updateTextureData(e,this,0,this.width,this.height,r,n,i),!this.useMipmap||this.NPOT&&!i||e.generateMipmap(e.TEXTURE_2D);e.bindTexture(e.TEXTURE_2D,null)},_updateTextureData:function(t,e,r,n,i,a,o,s){if(e.image){var l=e.image;s&&(this._potCanvas=(u=this,h=this._potCanvas,c=Jl(u.width),d=Jl(u.height),(h=h||document.createElement("canvas")).width=c,h.height=d,h.getContext("2d").drawImage(u.image,0,0,c,d),h),l=this._potCanvas),t.texImage2D(t.TEXTURE_2D,r,a,a,o,l)}else a<=V.COMPRESSED_RGBA_S3TC_DXT5_EXT&&a>=V.COMPRESSED_RGB_S3TC_DXT1_EXT?t.compressedTexImage2D(t.TEXTURE_2D,r,a,n,i,0,e.pixels):t.texImage2D(t.TEXTURE_2D,r,a,n,i,0,a,o,e.pixels);var u,h,c,d},generateMipmap:function(t){var e=t.gl;this.useMipmap&&!this.NPOT&&(e.bindTexture(e.TEXTURE_2D,this._cache.get("webgl_texture")),e.generateMipmap(e.TEXTURE_2D))},isPowerOfTwo:function(){return Kl(this.width)&&Kl(this.height)},isRenderable:function(){return this.image?this.image.width>0&&this.image.height>0:!(!this.width||!this.height)},bind:function(t){t.gl.bindTexture(t.gl.TEXTURE_2D,this.getWebGLTexture(t))},unbind:function(t){t.gl.bindTexture(t.gl.TEXTURE_2D,null)},load:function(t,e){var r=Ct.createImage();e&&(r.crossOrigin=e);var n=this;return r.onload=function(){n.dirty(),n.trigger("success",n)},r.onerror=function(){n.trigger("error",n)},r.src=t,this.image=r,this}});Object.defineProperty(is.prototype,"width",{get:function(){return this.image?this.image.width:this._width},set:function(t){this.image?console.warn("Texture from image can't set width"):(this._width!==t&&this.dirty(),this._width=t)}}),Object.defineProperty(is.prototype,"height",{get:function(){return this.image?this.image.height:this._height},set:function(t){this.image?console.warn("Texture from image can't set height"):(this._height!==t&&this.dirty(),this._height=t)}});const K=is;function Ql(t){return{byte:Ct.Int8Array,ubyte:Ct.Uint8Array,short:Ct.Int16Array,ushort:Ct.Uint16Array}[t]||Ct.Float32Array}function vo(t){return"attr_"+t}function yn(t,e,r,n){switch(this.name=t,this.type=e,this.size=r,this.semantic=n||"",this.value=null,r){case 1:this.get=function(i){return this.value[i]},this.set=function(i,a){this.value[i]=a},this.copy=function(i,a){this.value[i]=this.value[i]};break;case 2:this.get=function(i,a){var o=this.value;return a[0]=o[2*i],a[1]=o[2*i+1],a},this.set=function(i,a){var o=this.value;o[2*i]=a[0],o[2*i+1]=a[1]},this.copy=function(i,a){var o=this.value;a*=2,o[i*=2]=o[a],o[i+1]=o[a+1]};break;case 3:this.get=function(i,a){var o=3*i,s=this.value;return a[0]=s[o],a[1]=s[o+1],a[2]=s[o+2],a},this.set=function(i,a){var o=3*i,s=this.value;s[o]=a[0],s[o+1]=a[1],s[o+2]=a[2]},this.copy=function(i,a){var o=this.value;a*=3,o[i*=3]=o[a],o[i+1]=o[a+1],o[i+2]=o[a+2]};break;case 4:this.get=function(i,a){var o=this.value,s=4*i;return a[0]=o[s],a[1]=o[s+1],a[2]=o[s+2],a[3]=o[s+3],a},this.set=function(i,a){var o=this.value,s=4*i;o[s]=a[0],o[s+1]=a[1],o[s+2]=a[2],o[s+3]=a[3]},this.copy=function(i,a){var o=this.value;a*=4,o[i*=4]=o[a],o[i+1]=o[a+1],o[i+2]=o[a+2],o[i+3]=o[a+3]}}}function Ah(t,e,r,n,i){this.name=t,this.type=e,this.buffer=r,this.size=n,this.semantic=i,this.symbol="",this.needsRemove=!1}function Dh(t){this.buffer=t,this.count=0}yn.prototype.init=function(t){if(!this.value||this.value.length!==t*this.size){var e=Ql(this.type);this.value=new e(t*this.size)}},yn.prototype.fromArray=function(t){var e,r=Ql(this.type);if(t[0]&&t[0].length){var n=0,i=this.size;e=new r(t.length*i);for(var a=0;a<t.length;a++)for(var o=0;o<i;o++)e[n++]=t[a][o]}else e=new r(t);this.value=e},yn.prototype.clone=function(t){var e=new yn(this.name,this.type,this.size,this.semantic);return t&&console.warn("todo"),e};var $e=$t.extend(function(){return{attributes:{},indices:null,dynamic:!0,_enabledAttributes:null,__used:0}},function(){this._cache=new ks,this._attributeList=Object.keys(this.attributes),this.__vaoCache={}},{mainAttribute:"",pick:null,pickByRay:null,dirty:function(){for(var t=this.getEnabledAttributes(),e=0;e<t.length;e++)this.dirtyAttribute(t[e]);this.dirtyIndices(),this._enabledAttributes=null,this._cache.dirty("any")},dirtyIndices:function(){this._cache.dirtyAll("indices")},dirtyAttribute:function(t){this._cache.dirtyAll(vo(t)),this._cache.dirtyAll("attributes")},getTriangleIndices:function(t,e){if(t<this.triangleCount&&t>=0){e||(e=[]);var r=this.indices;return e[0]=r[3*t],e[1]=r[3*t+1],e[2]=r[3*t+2],e}},setTriangleIndices:function(t,e){var r=this.indices;r[3*t]=e[0],r[3*t+1]=e[1],r[3*t+2]=e[2]},isUseIndices:function(){return!!this.indices},initIndicesFromArray:function(t){var e,r=this.vertexCount>65535?Ct.Uint32Array:Ct.Uint16Array;if(t[0]&&t[0].length){var n=0;e=new r(3*t.length);for(var i=0;i<t.length;i++)for(var a=0;a<3;a++)e[n++]=t[i][a]}else e=new r(t);this.indices=e},createAttribute:function(t,e,r,n){var i=new yn(t,e,r,n);return this.attributes[t]&&this.removeAttribute(t),this.attributes[t]=i,this._attributeList.push(t),i},removeAttribute:function(t){var e=this._attributeList,r=e.indexOf(t);return r>=0&&(e.splice(r,1),delete this.attributes[t],!0)},getAttribute:function(t){return this.attributes[t]},getEnabledAttributes:function(){var t=this._enabledAttributes,e=this._attributeList;if(t)return t;for(var r=[],n=this.vertexCount,i=0;i<e.length;i++){var a=e[i],o=this.attributes[a];o.value&&o.value.length===n*o.size&&r.push(a)}return this._enabledAttributes=r,r},getBufferChunks:function(t){var e=this._cache;e.use(t.__uid__);var r=e.isDirty("attributes"),n=e.isDirty("indices");if(r||n){this._updateBuffer(t.gl,r,n);for(var i=this.getEnabledAttributes(),a=0;a<i.length;a++)e.fresh(vo(i[a]));e.fresh("attributes"),e.fresh("indices")}return e.fresh("any"),e.get("chunks")},_updateBuffer:function(t,e,r){var n=this._cache,i=n.get("chunks"),a=!1;i||((i=[])[0]={attributeBuffers:[],indicesBuffer:null},n.put("chunks",i),a=!0);var o=i[0],s=o.attributeBuffers,l=o.indicesBuffer;if(e||a){var u=this.getEnabledAttributes(),h={};if(!a)for(var c=0;c<s.length;c++)h[s[c].name]=s[c];for(var d=0;d<u.length;d++){var f,m,p=u[d],g=this.attributes[p];a||(f=h[p]),m=f?f.buffer:t.createBuffer(),n.isDirty(vo(p))&&(t.bindBuffer(t.ARRAY_BUFFER,m),t.bufferData(t.ARRAY_BUFFER,g.value,this.dynamic?t.DYNAMIC_DRAW:t.STATIC_DRAW)),s[d]=new Ah(p,g.type,m,g.size,g.semantic)}for(c=d;c<s.length;c++)t.deleteBuffer(s[c].buffer);s.length=d}this.isUseIndices()&&(r||a)&&(l||(l=new Dh(t.createBuffer()),o.indicesBuffer=l),l.count=this.indices.length,t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,l.buffer),t.bufferData(t.ELEMENT_ARRAY_BUFFER,this.indices,this.dynamic?t.DYNAMIC_DRAW:t.STATIC_DRAW))},dispose:function(t){var e=this._cache;e.use(t.__uid__);var r=e.get("chunks");if(r)for(var n=0;n<r.length;n++){for(var i=r[n],a=0;a<i.attributeBuffers.length;a++){var o=i.attributeBuffers[a];t.gl.deleteBuffer(o.buffer)}i.indicesBuffer&&t.gl.deleteBuffer(i.indicesBuffer.buffer)}if(this.__vaoCache){var s=t.getGLExtension("OES_vertex_array_object");for(var l in this.__vaoCache){var u=this.__vaoCache[l].vao;u&&s.deleteVertexArrayOES(u)}}this.__vaoCache={},e.deleteContext(t.__uid__)}});Object.defineProperty&&(Object.defineProperty($e.prototype,"vertexCount",{enumerable:!1,get:function(){var t=this.attributes[this.mainAttribute];return t||(t=this.attributes[this._attributeList[0]]),t&&t.value?t.value.length/t.size:0}}),Object.defineProperty($e.prototype,"triangleCount",{enumerable:!1,get:function(){var t=this.indices;return t?t.length/3:0}})),$e.STATIC_DRAW=35044,$e.DYNAMIC_DRAW=35048,$e.STREAM_DRAW=35040,$e.AttributeBuffer=Ah,$e.IndicesBuffer=Dh,$e.Attribute=yn;const kr=$e;var Yt=E.create,tn=E.add,Dr=E.set,He=kr.Attribute,Fr=kr.extend(function(){return{attributes:{position:new He("position","float",3,"POSITION"),texcoord0:new He("texcoord0","float",2,"TEXCOORD_0"),texcoord1:new He("texcoord1","float",2,"TEXCOORD_1"),normal:new He("normal","float",3,"NORMAL"),tangent:new He("tangent","float",4,"TANGENT"),color:new He("color","float",4,"COLOR"),weight:new He("weight","float",3,"WEIGHT"),joint:new He("joint","float",4,"JOINT"),barycentric:new He("barycentric","float",3,null)},boundingBox:null}},{mainAttribute:"position",updateBoundingBox:function(){var t=this.boundingBox;t||(t=this.boundingBox=new Jt);var e=this.attributes.position.value;if(e&&e.length){var r=t.min,n=t.max,i=r.array,a=n.array;E.set(i,e[0],e[1],e[2]),E.set(a,e[0],e[1],e[2]);for(var o=3;o<e.length;){var s=e[o++],l=e[o++],u=e[o++];s<i[0]&&(i[0]=s),l<i[1]&&(i[1]=l),u<i[2]&&(i[2]=u),s>a[0]&&(a[0]=s),l>a[1]&&(a[1]=l),u>a[2]&&(a[2]=u)}r._dirty=!0,n._dirty=!0}},generateVertexNormals:function(){if(this.vertexCount){var t=this.indices,e=this.attributes,r=e.position.value,n=e.normal.value;if(n&&n.length===r.length)for(var i=0;i<n.length;i++)n[i]=0;else n=e.normal.value=new Ct.Float32Array(r.length);for(var a,o,s,l=Yt(),u=Yt(),h=Yt(),c=Yt(),d=Yt(),f=Yt(),m=t?t.length:this.vertexCount,p=0;p<m;)for(t?(a=t[p++],o=t[p++],s=t[p++]):(a=p++,o=p++,s=p++),Dr(l,r[3*a],r[3*a+1],r[3*a+2]),Dr(u,r[3*o],r[3*o+1],r[3*o+2]),Dr(h,r[3*s],r[3*s+1],r[3*s+2]),E.sub(c,l,u),E.sub(d,u,h),E.cross(f,c,d),i=0;i<3;i++)n[3*a+i]=n[3*a+i]+f[i],n[3*o+i]=n[3*o+i]+f[i],n[3*s+i]=n[3*s+i]+f[i];for(i=0;i<n.length;)Dr(f,n[i],n[i+1],n[i+2]),E.normalize(f,f),n[i++]=f[0],n[i++]=f[1],n[i++]=f[2];this.dirty()}},generateFaceNormals:function(){if(this.vertexCount){this.isUniqueVertex()||this.generateUniqueVertex();var t=this.indices,e=this.attributes,r=e.position.value,n=e.normal.value,i=Yt(),a=Yt(),o=Yt(),s=Yt(),l=Yt(),u=Yt();n||(n=e.normal.value=new Float32Array(r.length));for(var h,c,d,f=t?t.length:this.vertexCount,m=0;m<f;){t?(h=t[m++],c=t[m++],d=t[m++]):(h=m++,c=m++,d=m++),Dr(i,r[3*h],r[3*h+1],r[3*h+2]),Dr(a,r[3*c],r[3*c+1],r[3*c+2]),Dr(o,r[3*d],r[3*d+1],r[3*d+2]),E.sub(s,i,a),E.sub(l,a,o),E.cross(u,s,l),E.normalize(u,u);for(var p=0;p<3;p++)n[3*h+p]=u[p],n[3*c+p]=u[p],n[3*d+p]=u[p]}this.dirty()}},generateTangents:function(){if(this.vertexCount){var t=this.vertexCount,e=this.attributes;e.tangent.value||(e.tangent.value=new Float32Array(4*t));var r=e.texcoord0.value,n=e.position.value,i=e.tangent.value,a=e.normal.value;if(r){for(var o=[],s=[],l=0;l<t;l++)o[l]=[0,0,0],s[l]=[0,0,0];var u,h,c,d=[0,0,0],f=[0,0,0],m=this.indices,p=m?m.length:this.vertexCount;for(l=0;l<p;){m?(u=m[l++],h=m[l++],c=m[l++]):(u=l++,h=l++,c=l++);var g=r[2*u],_=r[2*h],y=r[2*c],x=r[2*u+1],v=r[2*h+1],w=r[2*c+1],b=n[3*u],S=n[3*h],M=n[3*c],D=n[3*u+1],L=n[3*h+1],P=n[3*c+1],O=n[3*u+2],R=S-b,A=M-b,z=L-D,F=P-D,X=n[3*h+2]-O,H=n[3*c+2]-O,ut=_-g,G=y-g,St=v-x,ht=w-x,pt=1/(ut*ht-St*G);d[0]=(ht*R-St*A)*pt,d[1]=(ht*z-St*F)*pt,d[2]=(ht*X-St*H)*pt,f[0]=(ut*A-G*R)*pt,f[1]=(ut*F-G*z)*pt,f[2]=(ut*H-G*X)*pt,tn(o[u],o[u],d),tn(o[h],o[h],d),tn(o[c],o[c],d),tn(s[u],s[u],f),tn(s[h],s[h],f),tn(s[c],s[c],f)}var J=Yt(),te=Yt(),_t=Yt();for(l=0;l<t;l++){_t[0]=a[3*l],_t[1]=a[3*l+1],_t[2]=a[3*l+2];var Xt=o[l];E.scale(J,_t,E.dot(_t,Xt)),E.sub(J,Xt,J),E.normalize(J,J),E.cross(te,_t,Xt),i[4*l]=J[0],i[4*l+1]=J[1],i[4*l+2]=J[2],i[4*l+3]=E.dot(te,s[l])<0?-1:1}this.dirty()}else console.warn("Geometry without texcoords can't generate tangents.")}},isUniqueVertex:function(){return!this.isUseIndices()||this.vertexCount===this.indices.length},generateUniqueVertex:function(){if(this.vertexCount&&this.indices){this.indices.length>65535&&(this.indices=new Ct.Uint32Array(this.indices));for(var t=this.attributes,e=this.indices,r=this.getEnabledAttributes(),n={},i=0;i<r.length;i++)n[l=r[i]]=t[l].value,t[l].init(this.indices.length);for(var a=0,o=0;o<e.length;o++){var s=e[o];for(i=0;i<r.length;i++)for(var l,u=t[l=r[i]].value,h=t[l].size,c=0;c<h;c++)u[a*h+c]=n[l][s*h+c];e[o]=a,a++}this.dirty()}},generateBarycentric:function(){if(this.vertexCount){this.isUniqueVertex()||this.generateUniqueVertex();var t=this.attributes,e=t.barycentric.value,r=this.indices;if(!e||e.length!==3*r.length){e=t.barycentric.value=new Float32Array(3*r.length);for(var n=0;n<(r?r.length:this.vertexCount/3);)for(var i=0;i<3;i++)e[3*(r?r[n++]:3*n+i)+i]=1;this.dirty()}}},applyTransform:function(t){var e=this.attributes,r=e.position.value,n=e.normal.value,i=e.tangent.value;t=t.array;var a=I.create();I.invert(a,t),I.transpose(a,a);var o=E.transformMat4,s=E.forEach;s(r,3,0,null,o,t),n&&s(n,3,0,null,o,a),i&&s(i,4,0,null,o,a),this.boundingBox&&this.updateBoundingBox()},dispose:function(t){var e=this._cache;e.use(t.__uid__);var r=e.get("chunks");if(r)for(var n=0;n<r.length;n++){for(var i=r[n],a=0;a<i.attributeBuffers.length;a++){var o=i.attributeBuffers[a];t.gl.deleteBuffer(o.buffer)}i.indicesBuffer&&t.gl.deleteBuffer(i.indicesBuffer.buffer)}if(this.__vaoCache){var s=t.getGLExtension("OES_vertex_array_object");for(var l in this.__vaoCache){var u=this.__vaoCache[l].vao;u&&s.deleteVertexArrayOES(u)}}this.__vaoCache={},e.deleteContext(t.__uid__)}});Fr.STATIC_DRAW=kr.STATIC_DRAW,Fr.DYNAMIC_DRAW=kr.DYNAMIC_DRAW,Fr.STREAM_DRAW=kr.STREAM_DRAW,Fr.AttributeBuffer=kr.AttributeBuffer,Fr.IndicesBuffer=kr.IndicesBuffer,Fr.Attribute=He;const st=Fr;var Te="uniform vec3 ",Gn="uniform float ",en="@export clay.header.",rn="@end",kt=":unconfigurable;";const wf=[en+"directional_light",Te+"directionalLightDirection[DIRECTIONAL_LIGHT_COUNT]"+kt,Te+"directionalLightColor[DIRECTIONAL_LIGHT_COUNT]"+kt,rn,en+"ambient_light",Te+"ambientLightColor[AMBIENT_LIGHT_COUNT]"+kt,rn,en+"ambient_sh_light",Te+"ambientSHLightColor[AMBIENT_SH_LIGHT_COUNT]"+kt,Te+"ambientSHLightCoefficients[AMBIENT_SH_LIGHT_COUNT * 9]"+kt,`vec3 calcAmbientSHLight(int idx, vec3 N) {
 int offset = 9 * idx;
 return ambientSHLightCoefficients[0]
 + ambientSHLightCoefficients[1] * N.x
 + ambientSHLightCoefficients[2] * N.y
 + ambientSHLightCoefficients[3] * N.z
 + ambientSHLightCoefficients[4] * N.x * N.z
 + ambientSHLightCoefficients[5] * N.z * N.y
 + ambientSHLightCoefficients[6] * N.y * N.x
 + ambientSHLightCoefficients[7] * (3.0 * N.z * N.z - 1.0)
 + ambientSHLightCoefficients[8] * (N.x * N.x - N.y * N.y);
}`,rn,en+"ambient_cubemap_light",Te+"ambientCubemapLightColor[AMBIENT_CUBEMAP_LIGHT_COUNT]"+kt,"uniform samplerCube ambientCubemapLightCubemap[AMBIENT_CUBEMAP_LIGHT_COUNT]"+kt,"uniform sampler2D ambientCubemapLightBRDFLookup[AMBIENT_CUBEMAP_LIGHT_COUNT]"+kt,rn,en+"point_light",Te+"pointLightPosition[POINT_LIGHT_COUNT]"+kt,Gn+"pointLightRange[POINT_LIGHT_COUNT]"+kt,Te+"pointLightColor[POINT_LIGHT_COUNT]"+kt,rn,en+"spot_light",Te+"spotLightPosition[SPOT_LIGHT_COUNT]"+kt,Te+"spotLightDirection[SPOT_LIGHT_COUNT]"+kt,Gn+"spotLightRange[SPOT_LIGHT_COUNT]"+kt,Gn+"spotLightUmbraAngleCosine[SPOT_LIGHT_COUNT]"+kt,Gn+"spotLightPenumbraAngleCosine[SPOT_LIGHT_COUNT]"+kt,Gn+"spotLightFalloffFactor[SPOT_LIGHT_COUNT]"+kt,Te+"spotLightColor[SPOT_LIGHT_COUNT]"+kt,rn].join(`
`);N.import(wf);const Ce=qe.extend(function(){return{color:[1,1,1],intensity:1,castShadow:!0,shadowResolution:512,group:0}},{type:"",clone:function(){var t=qe.prototype.clone.call(this);return t.color=Array.prototype.slice.call(this.color),t.intensity=this.intensity,t.castShadow=this.castShadow,t.shadowResolution=this.shadowResolution,t}});var kn,nn,an,on,la=function(t,e){this.normal=t||new B(0,1,0),this.distance=e||0};la.prototype={constructor:la,distanceToPoint:function(t){return E.dot(t.array,this.normal.array)-this.distance},projectPoint:function(t,e){e||(e=new B);var r=this.distanceToPoint(t);return E.scaleAndAdd(e.array,t.array,this.normal.array,-r),e._dirty=!0,e},normalize:function(){var t=1/E.len(this.normal.array);E.scale(this.normal.array,t),this.distance*=t},intersectFrustum:function(t){for(var e=t.vertices,r=this.normal.array,n=E.dot(e[0].array,r)>this.distance,i=1;i<8;i++)if(E.dot(e[i].array,r)>this.distance!=n)return!0},intersectLine:(on=E.create(),function(t,e,r){var n=this.distanceToPoint(t),i=this.distanceToPoint(e);if(n>0&&i>0||n<0&&i<0)return null;var a=this.normal.array,o=this.distance,s=t.array;E.sub(on,e.array,t.array),E.normalize(on,on);var l=E.dot(a,on);if(l===0)return null;r||(r=new B);var u=(E.dot(a,s)-o)/l;return E.scaleAndAdd(r.array,s,on,-u),r._dirty=!0,r}),applyTransform:(kn=I.create(),nn=U.create(),an=U.create(),an[3]=1,function(t){t=t.array,E.scale(an,this.normal.array,this.distance),U.transformMat4(an,an,t),this.distance=E.dot(an,this.normal.array),I.invert(kn,t),I.transpose(kn,kn),nn[3]=0,E.copy(nn,this.normal.array),U.transformMat4(nn,nn,kn),E.copy(this.normal.array,nn)}),copy:function(t){E.copy(this.normal.array,t.normal.array),this.normal._dirty=!0,this.distance=t.distance},clone:function(){var t=new la;return t.copy(this),t}};const Ch=la;var Se,Et=E.set,$l=E.copy,tu=E.transformMat4,yo=Math.min,xo=Math.max,Lh=function(){this.planes=[];for(var t=0;t<6;t++)this.planes.push(new Ch);for(this.boundingBox=new Jt,this.vertices=[],t=0;t<8;t++)this.vertices[t]=E.fromValues(0,0,0)};Lh.prototype={setFromProjection:function(t){var e=this.planes,r=t.array,n=r[0],i=r[1],a=r[2],o=r[3],s=r[4],l=r[5],u=r[6],h=r[7],c=r[8],d=r[9],f=r[10],m=r[11],p=r[12],g=r[13],_=r[14],y=r[15];Et(e[0].normal.array,o-n,h-s,m-c),e[0].distance=-(y-p),e[0].normalize(),Et(e[1].normal.array,o+n,h+s,m+c),e[1].distance=-(y+p),e[1].normalize(),Et(e[2].normal.array,o+i,h+l,m+d),e[2].distance=-(y+g),e[2].normalize(),Et(e[3].normal.array,o-i,h-l,m-d),e[3].distance=-(y-g),e[3].normalize(),Et(e[4].normal.array,o-a,h-u,m-f),e[4].distance=-(y-_),e[4].normalize(),Et(e[5].normal.array,o+a,h+u,m+f),e[5].distance=-(y+_),e[5].normalize();var x=this.boundingBox,v=this.vertices;if(y===0){var w=l/n,b=-_/(f-1),S=-_/(f+1),M=-S/l,D=-b/l;x.min.set(-M*w,-M,S),x.max.set(M*w,M,b),Et(v[0],-M*w,-M,S),Et(v[1],-M*w,M,S),Et(v[2],M*w,-M,S),Et(v[3],M*w,M,S),Et(v[4],-D*w,-D,b),Et(v[5],-D*w,D,b),Et(v[6],D*w,-D,b),Et(v[7],D*w,D,b)}else{var L=(-1-p)/n,P=(1-p)/n,O=(1-g)/l,R=(-1-g)/l,A=(-1-_)/f,z=(1-_)/f;x.min.set(Math.min(L,P),Math.min(R,O),Math.min(z,A)),x.max.set(Math.max(P,L),Math.max(O,R),Math.max(A,z));var F=x.min.array,X=x.max.array;Et(v[0],F[0],F[1],F[2]),Et(v[1],F[0],X[1],F[2]),Et(v[2],X[0],F[1],F[2]),Et(v[3],X[0],X[1],F[2]),Et(v[4],F[0],F[1],X[2]),Et(v[5],F[0],X[1],X[2]),Et(v[6],X[0],F[1],X[2]),Et(v[7],X[0],X[1],X[2])}},getTransformedBoundingBox:(Se=E.create(),function(t,e){var r=this.vertices,n=e.array,i=t.min,a=t.max,o=i.array,s=a.array,l=r[0];tu(Se,l,n),$l(o,Se),$l(s,Se);for(var u=1;u<8;u++)l=r[u],tu(Se,l,n),o[0]=yo(Se[0],o[0]),o[1]=yo(Se[1],o[1]),o[2]=yo(Se[2],o[2]),s[0]=xo(Se[0],s[0]),s[1]=xo(Se[1],s[1]),s[2]=xo(Se[2],s[2]);return i._dirty=!0,a._dirty=!0,t})};const Hs=Lh;var qt,Tf=qe.extend(function(){return{projectionMatrix:new k,invProjectionMatrix:new k,viewMatrix:new k,frustum:new Hs}},function(){this.update(!0)},{update:function(t){qe.prototype.update.call(this,t),k.invert(this.viewMatrix,this.worldTransform),this.updateProjectionMatrix(),k.invert(this.invProjectionMatrix,this.projectionMatrix),this.frustum.setFromProjection(this.projectionMatrix)},setViewMatrix:function(t){k.copy(this.viewMatrix,t),k.invert(this.worldTransform,t),this.decomposeWorldTransform()},decomposeProjectionMatrix:function(){},setProjectionMatrix:function(t){k.copy(this.projectionMatrix,t),k.invert(this.invProjectionMatrix,t),this.decomposeProjectionMatrix()},updateProjectionMatrix:function(){},castRay:(qt=U.create(),function(t,e){var r=e!==void 0?e:new wa,n=t.array[0],i=t.array[1];return U.set(qt,n,i,-1,1),U.transformMat4(qt,qt,this.invProjectionMatrix.array),U.transformMat4(qt,qt,this.worldTransform.array),E.scale(r.origin.array,qt,1/qt[3]),U.set(qt,n,i,1,1),U.transformMat4(qt,qt,this.invProjectionMatrix.array),U.transformMat4(qt,qt,this.worldTransform.array),E.scale(qt,qt,1/qt[3]),E.sub(r.direction.array,qt,r.origin.array),E.normalize(r.direction.array,r.direction.array),r.direction._dirty=!0,r.origin._dirty=!0,r})});const Sn=Tf;var Ue,Hn,Sf=I.create(),eu=I.create(),bo={};function Mf(t){var e=[],r=Object.keys(t);r.sort();for(var n=0;n<r.length;n++){var i=r[n];e.push(i+" "+t[i])}var a=e.join(`
`);if(bo[a])return bo[a];var o=Ht.genGUID();return bo[a]=o,o}function ua(){this.opaque=[],this.transparent=[],this._opaqueCount=0,this._transparentCount=0}function Ef(t,e){if(e.castShadow&&!t.castShadow)return!0}ua.prototype.startCount=function(){this._opaqueCount=0,this._transparentCount=0},ua.prototype.add=function(t,e){e?this.transparent[this._transparentCount++]=t:this.opaque[this._opaqueCount++]=t},ua.prototype.endCount=function(){this.transparent.length=this._transparentCount,this.opaque.length=this._opaqueCount};const br=qe.extend(function(){return{material:null,lights:[],viewBoundingBoxLastFrame:new Jt,shadowUniforms:{},_cameraList:[],_lightUniforms:{},_previousLightNumber:{},_lightNumber:{},_lightProgramKeys:{},_nodeRepository:{},_renderLists:new vh(20)}},function(){this._scene=this},{addToScene:function(t){t instanceof Sn?(this._cameraList.length>0&&console.warn("Found multiple camera in one scene. Use the fist one."),this._cameraList.push(t)):t instanceof Ce&&this.lights.push(t),t.name&&(this._nodeRepository[t.name]=t)},removeFromScene:function(t){var e;t instanceof Sn?(e=this._cameraList.indexOf(t))>=0&&this._cameraList.splice(e,1):t instanceof Ce&&(e=this.lights.indexOf(t))>=0&&this.lights.splice(e,1),t.name&&delete this._nodeRepository[t.name]},getNode:function(t){return this._nodeRepository[t]},setMainCamera:function(t){var e=this._cameraList.indexOf(t);e>=0&&this._cameraList.splice(e,1),this._cameraList.unshift(t)},getMainCamera:function(){return this._cameraList[0]},getLights:function(){return this.lights},updateLights:function(){var t=this.lights;this._previousLightNumber=this._lightNumber;for(var e={},r=0;r<t.length;r++){var n=t[r];if(!n.invisible){var i=n.group;e[i]||(e[i]={}),e[i][n.type]=e[i][n.type]||0,e[i][n.type]++}}for(var a in this._lightNumber=e,e)this._lightProgramKeys[a]=Mf(e[a]);this._updateLightUniforms()},cloneNode:function(t){var e=t.clone(),r={};return function n(i,a){r[i.__uid__]=a;for(var o=0;o<i._children.length;o++)n(i._children[o],a._children[o])}(t,e),e.traverse(function(n){n.skeleton&&(n.skeleton=n.skeleton.clone(r)),n.material&&(n.material=n.material.clone())}),e},updateRenderList:function(t,e){var r=t.__uid__,n=this._renderLists.get(r);n||(n=new ua,this._renderLists.put(r,n)),n.startCount(),e&&(this.viewBoundingBoxLastFrame.min.set(1/0,1/0,1/0),this.viewBoundingBoxLastFrame.max.set(-1/0,-1/0,-1/0));var i=this.material&&this.material.transparent||!1;return this._doUpdateRenderList(this,t,i,n,e),n.endCount(),n},getRenderList:function(t){return this._renderLists.get(t.__uid__)},_doUpdateRenderList:function(t,e,r,n,i){if(!t.invisible)for(var a=0;a<t._children.length;a++){var o=t._children[a];if(o.isRenderable()){var s=o.isSkinnedMesh()?Sf:o.worldTransform.array,l=o.geometry;I.multiplyAffine(eu,e.viewMatrix.array,s),(i&&!l.boundingBox||!this.isFrustumCulled(o,e,eu))&&n.add(o,o.material.transparent||r)}o._children.length>0&&this._doUpdateRenderList(o,e,r,n,i)}},isFrustumCulled:(Ue=new Jt,Hn=new k,function(t,e,r){var n=t.boundingBox;if(n||(n=t.skeleton&&t.skeleton.boundingBox?t.skeleton.boundingBox:t.geometry.boundingBox),!n)return!1;if(Hn.array=r,Ue.transformFrom(n,Hn),t.castShadow&&this.viewBoundingBoxLastFrame.union(Ue),t.frustumCulling){if(!Ue.intersectBoundingBox(e.frustum.boundingBox))return!0;Hn.array=e.projectionMatrix.array,Ue.max.array[2]>0&&Ue.min.array[2]<0&&(Ue.max.array[2]=-1e-20),Ue.applyProjection(Hn);var i=Ue.min.array,a=Ue.max.array;if(a[0]<-1||i[0]>1||a[1]<-1||i[1]>1||a[2]<-1||i[2]>1)return!0}return!1}),_updateLightUniforms:function(){var t=this.lights;t.sort(Ef);var e=this._lightUniforms;for(var r in e)for(var n in e[r])e[r][n].value.length=0;for(var i=0;i<t.length;i++){var a=t[i];if(!a.invisible)for(var n in r=a.group,a.uniformTemplates){var o=a.uniformTemplates[n],s=o.value(a);if(s!=null){e[r]||(e[r]={}),e[r][n]||(e[r][n]={type:"",value:[]});var l=e[r][n];switch(l.type=o.type+"v",o.type){case"1i":case"1f":case"t":l.value.push(s);break;case"2f":case"3f":case"4f":for(var u=0;u<s.length;u++)l.value.push(s[u]);break;default:console.error("Unkown light uniform type "+o.type)}}}}},getLightGroups:function(){var t=[];for(var e in this._lightNumber)t.push(e);return t},getNumberChangedLightGroups:function(){var t=[];for(var e in this._lightNumber)this.isLightNumberChanged(e)&&t.push(e);return t},isLightNumberChanged:function(t){var e=this._previousLightNumber,r=this._lightNumber;for(var n in r[t])if(!e[t]||r[t][n]!==e[t][n])return!0;for(var n in e[t])if(!r[t]||r[t][n]!==e[t][n])return!0;return!1},getLightsNumbers:function(t){return this._lightNumber[t]},getProgramKey:function(t){return this._lightProgramKeys[t]},setLightUniforms:function(){function t(e,r,n){for(var i in e){var a=e[i];if(a.type==="tv"){if(!r.hasUniform(i))continue;for(var o=[],s=0;s<a.value.length;s++){var l=a.value[s],u=r.takeCurrentTextureSlot(n,l);o.push(u)}r.setUniform(n.gl,"1iv",i,o)}else r.setUniform(n.gl,a.type,i,a.value)}}return function(e,r,n){t(this._lightUniforms[r],e,n),t(this.shadowUniforms,e,n)}}(),dispose:function(){this.material=null,this._opaqueList=[],this._transparentList=[],this.lights=[],this._lightUniforms={},this._lightNumber={},this._nodeRepository={}}});var Hi=Eh.isPowerOfTwo,Af=["px","nx","py","ny","pz","nz"],as=V.extend(function(){return{image:{px:null,nx:null,py:null,ny:null,pz:null,nz:null},pixels:{px:null,nx:null,py:null,ny:null,pz:null,nz:null},mipmaps:[]}},{textureType:"textureCube",update:function(t){var e=t.gl;e.bindTexture(e.TEXTURE_CUBE_MAP,this._cache.get("webgl_texture")),this.updateCommon(t);var r=this.format,n=this.type;e.texParameteri(e.TEXTURE_CUBE_MAP,e.TEXTURE_WRAP_S,this.getAvailableWrapS()),e.texParameteri(e.TEXTURE_CUBE_MAP,e.TEXTURE_WRAP_T,this.getAvailableWrapT()),e.texParameteri(e.TEXTURE_CUBE_MAP,e.TEXTURE_MAG_FILTER,this.getAvailableMagFilter()),e.texParameteri(e.TEXTURE_CUBE_MAP,e.TEXTURE_MIN_FILTER,this.getAvailableMinFilter());var i=t.getGLExtension("EXT_texture_filter_anisotropic");if(i&&this.anisotropic>1&&e.texParameterf(e.TEXTURE_CUBE_MAP,i.TEXTURE_MAX_ANISOTROPY_EXT,this.anisotropic),n===36193&&(t.getGLExtension("OES_texture_half_float")||(n=Fa)),this.mipmaps.length)for(var a=this.width,o=this.height,s=0;s<this.mipmaps.length;s++){var l=this.mipmaps[s];this._updateTextureData(e,l,s,a,o,r,n),a/=2,o/=2}else this._updateTextureData(e,this,0,this.width,this.height,r,n),!this.NPOT&&this.useMipmap&&e.generateMipmap(e.TEXTURE_CUBE_MAP);e.bindTexture(e.TEXTURE_CUBE_MAP,null)},_updateTextureData:function(t,e,r,n,i,a,o){for(var s=0;s<6;s++){var l=Af[s],u=e.image&&e.image[l];u?t.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+s,r,a,a,o,u):t.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+s,r,a,n,i,0,a,o,e.pixels&&e.pixels[l])}},generateMipmap:function(t){var e=t.gl;this.useMipmap&&!this.NPOT&&(e.bindTexture(e.TEXTURE_CUBE_MAP,this._cache.get("webgl_texture")),e.generateMipmap(e.TEXTURE_CUBE_MAP))},bind:function(t){t.gl.bindTexture(t.gl.TEXTURE_CUBE_MAP,this.getWebGLTexture(t))},unbind:function(t){t.gl.bindTexture(t.gl.TEXTURE_CUBE_MAP,null)},isPowerOfTwo:function(){return this.image.px?Hi(this.image.px.width)&&Hi(this.image.px.height):Hi(this.width)&&Hi(this.height)},isRenderable:function(){return this.image.px?sn(this.image.px)&&sn(this.image.nx)&&sn(this.image.py)&&sn(this.image.ny)&&sn(this.image.pz)&&sn(this.image.nz):!(!this.width||!this.height)},load:function(t,e){var r=0,n=this;return Ht.each(t,function(i,a){var o=Ct.createImage();e&&(o.crossOrigin=e),o.onload=function(){--r==0&&(n.dirty(),n.trigger("success",n))},o.onerror=function(){r--},r++,o.src=i,n.image[a]=o}),this}});function sn(t){return t.width>0&&t.height>0}Object.defineProperty(as.prototype,"width",{get:function(){return this.image&&this.image.px?this.image.px.width:this._width},set:function(t){this.image&&this.image.px?console.warn("Texture from image can't set width"):(this._width!==t&&this.dirty(),this._width=t)}}),Object.defineProperty(as.prototype,"height",{get:function(){return this.image&&this.image.px?this.image.px.height:this._height},set:function(t){this.image&&this.image.px?console.warn("Texture from image can't set height"):(this._height!==t&&this.dirty(),this._height=t)}});const gi=as;var Df=Sn.extend({fov:50,aspect:1,near:.1,far:2e3},{updateProjectionMatrix:function(){var t=this.fov/180*Math.PI;this.projectionMatrix.perspective(t,this.aspect,this.near,this.far)},decomposeProjectionMatrix:function(){var t=this.projectionMatrix.array,e=2*Math.atan(1/t[5]);this.fov=e/Math.PI*180,this.aspect=t[5]/t[0],this.near=t[14]/(t[10]-1),this.far=t[14]/(t[10]+1)},clone:function(){var t=Sn.prototype.clone.call(this);return t.fov=this.fov,t.aspect=this.aspect,t.near=this.near,t.far=this.far,t}});const zt=Df;var Vi="framebuffer",nr="renderbuffer",ru=nr+"_width",nu=nr+"_height",wo=nr+"_attached",To="depthtexture_attached",Cr=36160,Vn=36161,ri=36096,ni=$t.extend({depthBuffer:!0,viewport:null,_width:0,_height:0,_textures:null,_boundRenderer:null},function(){this._cache=new ks,this._textures={}},{getTextureWidth:function(){return this._width},getTextureHeight:function(){return this._height},bind:function(t){if(t.__currentFrameBuffer){if(t.__currentFrameBuffer===this)return;console.warn("Renderer already bound with another framebuffer. Unbind it first")}t.__currentFrameBuffer=this;var e=t.gl;e.bindFramebuffer(Cr,this._getFrameBufferGL(t)),this._boundRenderer=t;var r=this._cache;r.put("viewport",t.viewport);var n,i,a=!1;for(var o in this._textures){a=!0;var s=this._textures[o];s&&(n=s.texture.width,i=s.texture.height,this._doAttach(t,s.texture,o,s.target))}this._width=n,this._height=i,!a&&this.depthBuffer&&console.error("Must attach texture before bind, or renderbuffer may have incorrect width and height."),this.viewport?t.setViewport(this.viewport):t.setViewport(0,0,n,i,1);var l=r.get("attached_textures");if(l){for(var o in l)if(!this._textures[o]){var u=l[o];this._doDetach(e,o,u)}}if(!r.get(To)&&this.depthBuffer){r.miss(nr)&&r.put(nr,e.createRenderbuffer());var h=r.get(nr);n===r.get(ru)&&i===r.get(nu)||(e.bindRenderbuffer(Vn,h),e.renderbufferStorage(Vn,e.DEPTH_COMPONENT16,n,i),r.put(ru,n),r.put(nu,i),e.bindRenderbuffer(Vn,null)),r.get(wo)||(e.framebufferRenderbuffer(Cr,ri,Vn,h),r.put(wo,!0))}},unbind:function(t){t.__currentFrameBuffer=null,t.gl.bindFramebuffer(Cr,null),this._boundRenderer=null,this._cache.use(t.__uid__);var e=this._cache.get("viewport");e&&t.setViewport(e),this.updateMipmap(t)},updateMipmap:function(t){var e=t.gl;for(var r in this._textures){var n=this._textures[r];if(n){var i=n.texture;if(!i.NPOT&&i.useMipmap&&i.minFilter===V.LINEAR_MIPMAP_LINEAR){var a=i.textureType==="textureCube"?34067:3553;e.bindTexture(a,i.getWebGLTexture(t)),e.generateMipmap(a),e.bindTexture(a,null)}}}},checkStatus:function(t){return t.checkFramebufferStatus(Cr)},_getFrameBufferGL:function(t){var e=this._cache;return e.use(t.__uid__),e.miss(Vi)&&e.put(Vi,t.gl.createFramebuffer()),e.get(Vi)},attach:function(t,e,r){if(!t.width)throw new Error("The texture attached to color buffer is not a valid.");e=e||36064,r=r||3553;var n,i=this._boundRenderer;if(i&&i.gl){var a=this._cache;a.use(i.__uid__),n=a.get("attached_textures")}var o=this._textures[e];if(!o||o.target!==r||o.texture!==t||!n||n[e]==null){var s=!0;i&&(s=this._doAttach(i,t,e,r),this.viewport||i.setViewport(0,0,t.width,t.height,1)),s&&(this._textures[e]=this._textures[e]||{},this._textures[e].texture=t,this._textures[e].target=r)}},_doAttach:function(t,e,r,n){var i=t.gl,a=e.getWebGLTexture(t),o=this._cache.get("attached_textures");if(o&&o[r]){var s=o[r];if(s.texture===e&&s.target===n)return}var l=!0;if(((r=+r)===ri||r===$o)&&(t.getGLExtension("WEBGL_depth_texture")||(console.error("Depth texture is not supported by the browser"),l=!1),e.format!==Ba&&e.format!==34041&&(console.error("The texture attached to depth buffer is not a valid."),l=!1),l)){var u=this._cache.get(nr);u&&(i.framebufferRenderbuffer(Cr,ri,Vn,null),i.deleteRenderbuffer(u),this._cache.put(nr,!1)),this._cache.put(wo,!1),this._cache.put(To,!0)}return i.framebufferTexture2D(Cr,r,n,a,0),o||(o={},this._cache.put("attached_textures",o)),o[r]=o[r]||{},o[r].texture=e,o[r].target=n,l},_doDetach:function(t,e,r){t.framebufferTexture2D(Cr,e,r,null,0);var n=this._cache.get("attached_textures");n&&n[e]&&(n[e]=null),e!==ri&&e!==$o||this._cache.put(To,!1)},detach:function(t,e){this._textures[t]=null,this._boundRenderer&&(this._cache.use(this._boundRenderer.__uid__),this._doDetach(this._boundRenderer.gl,t,e))},dispose:function(t){var e=t.gl,r=this._cache;r.use(t.__uid__);var n=r.get(nr);n&&e.deleteRenderbuffer(n);var i=r.get(Vi);i&&e.deleteFramebuffer(i),r.deleteContext(t.__uid__),this._textures={}}});ni.DEPTH_ATTACHMENT=ri,ni.COLOR_ATTACHMENT0=36064,ni.STENCIL_ATTACHMENT=36128,ni.DEPTH_STENCIL_ATTACHMENT=$o;const jt=ni;var Cf=["px","nx","py","ny","pz","nz"];const Vs=$t.extend(function(){var t={position:new B,far:1e3,near:.1,texture:null,shadowMapPass:null},e=t._cameras={px:new zt({fov:90}),nx:new zt({fov:90}),py:new zt({fov:90}),ny:new zt({fov:90}),pz:new zt({fov:90}),nz:new zt({fov:90})};return e.px.lookAt(B.POSITIVE_X,B.NEGATIVE_Y),e.nx.lookAt(B.NEGATIVE_X,B.NEGATIVE_Y),e.py.lookAt(B.POSITIVE_Y,B.POSITIVE_Z),e.ny.lookAt(B.NEGATIVE_Y,B.NEGATIVE_Z),e.pz.lookAt(B.POSITIVE_Z,B.NEGATIVE_Y),e.nz.lookAt(B.NEGATIVE_Z,B.NEGATIVE_Y),t._frameBuffer=new jt,t},{getCamera:function(t){return this._cameras[t]},render:function(t,e,r){var n=t.gl;r||e.update();for(var i=this.texture.width,a=2*Math.atan(i/(i-.5))/Math.PI*180,o=0;o<6;o++){var s=Cf[o],l=this._cameras[s];if(B.copy(l.position,this.position),l.far=this.far,l.near=this.near,l.fov=a,this.shadowMapPass){l.update();var u=e.getBoundingBox();u.applyTransform(l.viewMatrix),e.viewBoundingBoxLastFrame.copy(u),this.shadowMapPass.render(t,e,l,!0)}this._frameBuffer.attach(this.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+o),this._frameBuffer.bind(t),t.render(e,l,!0),this._frameBuffer.unbind(t)}},dispose:function(t){this._frameBuffer.dispose(t)}});var Lf=st.extend({dynamic:!1,widthSegments:1,heightSegments:1},function(){this.build()},{build:function(){for(var t=this.heightSegments,e=this.widthSegments,r=this.attributes,n=[],i=[],a=[],o=[],s=0;s<=t;s++)for(var l=s/t,u=0;u<=e;u++){var h=u/e;if(n.push([2*h-1,2*l-1,0]),i&&i.push([h,l]),a&&a.push([0,0,1]),u<e&&s<t){var c=u+s*(e+1);o.push([c,c+1,c+e+1]),o.push([c+e+1,c+1,c+e+2])}}r.position.fromArray(n),r.texcoord0.fromArray(i),r.normal.fromArray(a),this.initIndicesFromArray(o),this.boundingBox=new Jt,this.boundingBox.min.set(-1,-1,0),this.boundingBox.max.set(1,1,0)}});const za=Lf;var wt=new k;function ln(t,e,r){wt.identity();var n=new za({widthSegments:e,heightSegments:r});switch(t){case"px":k.translate(wt,wt,B.POSITIVE_X),k.rotateY(wt,wt,Math.PI/2);break;case"nx":k.translate(wt,wt,B.NEGATIVE_X),k.rotateY(wt,wt,-Math.PI/2);break;case"py":k.translate(wt,wt,B.POSITIVE_Y),k.rotateX(wt,wt,-Math.PI/2);break;case"ny":k.translate(wt,wt,B.NEGATIVE_Y),k.rotateX(wt,wt,Math.PI/2);break;case"pz":k.translate(wt,wt,B.POSITIVE_Z);break;case"nz":k.translate(wt,wt,B.NEGATIVE_Z),k.rotateY(wt,wt,Math.PI)}return n.applyTransform(wt),n}const Ph=st.extend({dynamic:!1,widthSegments:1,heightSegments:1,depthSegments:1,inside:!1},function(){this.build()},{build:function(){var t={px:ln("px",this.depthSegments,this.heightSegments),nx:ln("nx",this.depthSegments,this.heightSegments),py:ln("py",this.widthSegments,this.depthSegments),ny:ln("ny",this.widthSegments,this.depthSegments),pz:ln("pz",this.widthSegments,this.heightSegments),nz:ln("nz",this.widthSegments,this.heightSegments)},e=["position","texcoord0","normal"],r=0,n=0;for(var i in t)r+=t[i].vertexCount,n+=t[i].indices.length;for(var a=0;a<e.length;a++)this.attributes[e[a]].init(r);this.indices=new Ct.Uint16Array(n);var o=0,s=0;for(var i in t){var l=t[i];for(a=0;a<e.length;a++)for(var u=e[a],h=l.attributes[u].value,c=l.attributes[u].size,d=u==="normal",f=0;f<h.length;f++){var m=h[f];this.inside&&d&&(m=-m),this.attributes[u].value[f+c*s]=m}var p=l.indices.length;for(f=0;f<l.indices.length;f++)this.indices[f+o]=s+l.indices[this.inside?p-f-1:f];o+=l.indices.length,s+=l.vertexCount}this.boundingBox=new Jt,this.boundingBox.max.set(1,1,1),this.boundingBox.min.set(-1,-1,-1)}});N.import(`@export clay.skybox.vertex
#define SHADER_NAME skybox
uniform mat4 world : WORLD;
uniform mat4 worldViewProjection : WORLDVIEWPROJECTION;
attribute vec3 position : POSITION;
varying vec3 v_WorldPosition;
void main()
{
 v_WorldPosition = (world * vec4(position, 1.0)).xyz;
 gl_Position = worldViewProjection * vec4(position, 1.0);
}
@end
@export clay.skybox.fragment
#define PI 3.1415926
uniform mat4 viewInverse : VIEWINVERSE;
#ifdef EQUIRECTANGULAR
uniform sampler2D environmentMap;
#else
uniform samplerCube environmentMap;
#endif
uniform float lod: 0.0;
varying vec3 v_WorldPosition;
@import clay.util.rgbm
@import clay.util.srgb
@import clay.util.ACES
void main()
{
 vec3 eyePos = viewInverse[3].xyz;
 vec3 V = normalize(v_WorldPosition - eyePos);
#ifdef EQUIRECTANGULAR
 float phi = acos(V.y);
 float theta = atan(-V.x, V.z) + PI * 0.5;
 vec2 uv = vec2(theta / 2.0 / PI, phi / PI);
 vec4 texel = decodeHDR(texture2D(environmentMap, fract(uv)));
#else
 #if defined(LOD) || defined(SUPPORT_TEXTURE_LOD)
 vec4 texel = decodeHDR(textureCubeLodEXT(environmentMap, V, lod));
 #else
 vec4 texel = decodeHDR(textureCube(environmentMap, V));
 #endif
#endif
#ifdef SRGB_DECODE
 texel = sRGBToLinear(texel);
#endif
#ifdef TONEMAPPING
 texel.rgb = ACESToneMapping(texel.rgb);
#endif
#ifdef SRGB_ENCODE
 texel = linearTosRGB(texel);
#endif
 gl_FragColor = encodeHDR(vec4(texel.rgb, 1.0));
}
@end`);const Ua=Hr.extend(function(){var t=new N({vertex:N.source("clay.skybox.vertex"),fragment:N.source("clay.skybox.fragment")}),e=new ve({shader:t,depthMask:!1});return{scene:null,geometry:new Ph,material:e,environmentMap:null,culling:!1,_dummyCamera:new zt}},function(){var t=this.scene;t&&this.attachScene(t),this.environmentMap&&this.setEnvironmentMap(this.environmentMap)},{attachScene:function(t){this.scene&&this.detachScene(),t.skybox=this,this.scene=t,t.on("beforerender",this._beforeRenderScene,this)},detachScene:function(){this.scene&&(this.scene.off("beforerender",this._beforeRenderScene),this.scene.skybox=null),this.scene=null},dispose:function(t){this.detachScene(),this.geometry.dispose(t)},setEnvironmentMap:function(t){t.textureType==="texture2D"?(this.material.define("EQUIRECTANGULAR"),t.minFilter=V.LINEAR):this.material.undefine("EQUIRECTANGULAR"),this.material.set("environmentMap",t)},getEnvironmentMap:function(){return this.material.get("environmentMap")},_beforeRenderScene:function(t,e,r){this.renderSkybox(t,r)},renderSkybox:function(t,e){var r=this._dummyCamera;r.aspect=t.getViewportAspect(),r.fov=e.fov||50,r.updateProjectionMatrix(),k.invert(r.invProjectionMatrix,r.projectionMatrix),r.worldTransform.copy(e.worldTransform),r.viewMatrix.copy(e.viewMatrix),this.position.copy(e.getWorldPosition()),this.update(),t.gl.disable(t.gl.BLEND),this.material.get("lod")>0?this.material.define("fragment","LOD"):this.material.undefine("fragment","LOD"),t.renderPass([this],r)}});function Ws(t){return t.charCodeAt(0)+(t.charCodeAt(1)<<8)+(t.charCodeAt(2)<<16)+(t.charCodeAt(3)<<24)}var Pf=Ws("DXT1"),Of=Ws("DXT3"),Rf=Ws("DXT5"),Wi=String.fromCharCode;function Nf(t,e,r,n){if(t[3]>0){var i=Math.pow(2,t[3]-128-8+n);e[r+0]=t[0]*i,e[r+1]=t[1]*i,e[r+2]=t[2]*i}else e[r+0]=0,e[r+1]=0,e[r+2]=0;return e[r+3]=1,e}function iu(t,e,r,n){for(var i,a,o=0,s=0,l=n;l>0;)if(t[s][0]=e[r++],t[s][1]=e[r++],t[s][2]=e[r++],t[s][3]=e[r++],t[s][0]===1&&t[s][1]===1&&t[s][2]===1){for(var u=t[s][3]<<o>>>0;u>0;u--)i=t[s-1],(a=t[s])[0]=i[0],a[1]=i[1],a[2]=i[2],a[3]=i[3],s++,l--;o+=8}else s++,l--,o=0;return r}function If(t,e,r,n){if(n<8|n>32767)return iu(t,e,r,n);if((i=e[r++])!=2)return iu(t,e,r-1,n);if(t[0][1]=e[r++],t[0][2]=e[r++],i=e[r++],(t[0][2]<<8>>>0|i)>>>0!==n)return null;for(var i=0;i<4;i++)for(var a=0;a<n;){var o=e[r++];if(o>128){o=(127&o)>>>0;for(var s=e[r++];o--;)t[a++][i]=s}else for(;o--;)t[a++][i]=e[r++]}return r}var Ff={parseRGBE:function(t,e,r){r==null&&(r=0);var n=new Uint8Array(t),i=n.length;if(function(y){for(var x="",v=0;v<2;v++)x+=Wi(y[v]);return x}(n)==="#?"){for(var a=2;a<i&&(Wi(n[a])!==`
`||Wi(n[a+1])!==`
`);a++);if(!(a>=i)){a+=2;for(var o="";a<i;a++){var s=Wi(n[a]);if(s===`
`)break;o+=s}var l=o.split(" "),u=parseInt(l[1]),h=parseInt(l[3]);if(h&&u){for(var c=a+1,d=[],f=0;f<h;f++){d[f]=[];for(var m=0;m<4;m++)d[f][m]=0}for(var p=new Float32Array(h*u*4),g=0,_=0;_<u;_++){if(!(c=If(d,n,c,h)))return null;for(f=0;f<h;f++)Nf(d[f],p,g,r),g+=4}return e||(e=new K),e.width=h,e.height=u,e.pixels=p,e.type=V.FLOAT,e}}}},parseRGBEFromPNG:function(t){}};const Bf=Ff;var ha={loadTexture:function(t,e,r,n){var i;if(typeof e=="function"?(n=r=e,e={}):e=e||{},typeof t=="string"){if(t.match(/.hdr$/)||e.fileType==="hdr")return i=new K({width:0,height:0,sRGB:!1}),ha._fetchTexture(t,function(a){Bf.parseRGBE(a,i,e.exposure),i.dirty(),r&&r(i)},n),i;t.match(/.dds$/)||e.fileType==="dds"?(i=new K({width:0,height:0}),ha._fetchTexture(t,function(a){(function(o,s){var l=new Int32Array(o,0,31);if(l[0]!==542327876||4&!l(20))return null;var u,h,c=l(21),d=l[4],f=l[3],m=512&l[28],p=131072&l[2];switch(c){case Pf:u=8,h=V.COMPRESSED_RGB_S3TC_DXT1_EXT;break;case Of:u=16,h=V.COMPRESSED_RGBA_S3TC_DXT3_EXT;break;case Rf:u=16,h=V.COMPRESSED_RGBA_S3TC_DXT5_EXT;break;default:return null}var g=l[1]+4,_=m?6:1,y=1;p&&(y=Math.max(1,l[7]));for(var x=[],v=0;v<_;v++){var w=d,b=f;x[v]=new K({width:w,height:b,format:h});for(var S=[],M=0;M<y;M++){var D=Math.max(4,w)/4*Math.max(4,b)/4*u,L=new Uint8Array(o,g,D);g+=D,w*=.5,b*=.5,S[M]=L}x[v].pixels=S[0],p&&(x[v].mipmaps=S)}if(!s)return x[0];s.width=x[0].width,s.height=x[0].height,s.format=x[0].format,s.pixels=x[0].pixels,s.mipmaps=x[0].mipmaps})(a,i),i.dirty(),r&&r(i)},n)):((i=new K).load(t),i.success(r),i.error(n))}else typeof t=="object"&&t.px!==void 0&&((i=new gi).load(t),i.success(r),i.error(n));return i},loadPanorama:function(t,e,r,n,i,a){var o=this;typeof n=="function"?(a=i=n,n={}):n=n||{},ha.loadTexture(e,n,function(s){s.flipY=n.flipY||!1,o.panoramaToCubeMap(t,s,r,n),s.dispose(t),i&&i(r)},a)},panoramaToCubeMap:function(t,e,r,n){var i=new Vs,a=new Ua({scene:new br});return a.setEnvironmentMap(e),(n=n||{}).encodeRGBM&&a.material.define("fragment","RGBM_ENCODE"),r.sRGB=e.sRGB,i.texture=r,i.render(t,a.scene),i.texture=null,i.dispose(t),r},heightToNormal:function(t,e){var r=document.createElement("canvas"),n=r.width=t.width,i=r.height=t.height,a=r.getContext("2d");a.drawImage(t,0,0,n,i),e=e||!1;for(var o=a.getImageData(0,0,n,i),s=a.createImageData(n,i),l=0;l<o.data.length;l+=4){if(e){var u=o.data[l],h=o.data[l+1],c=o.data[l+2];if(Math.abs(u-h)+Math.abs(h-c)>20)return console.warn("Given image is not a height map"),t}var d,f,m,p;l%(4*n)==0?(d=o.data[l],m=o.data[l+4]):l%(4*n)==4*(n-1)?(d=o.data[l-4],m=o.data[l]):(d=o.data[l-4],m=o.data[l+4]),l<4*n?(f=o.data[l],p=o.data[l+4*n]):l>n*(i-1)*4?(f=o.data[l-4*n],p=o.data[l]):(f=o.data[l-4*n],p=o.data[l+4*n]),s.data[l]=d-m+127,s.data[l+1]=f-p+127,s.data[l+2]=255,s.data[l+3]=255}return a.putImageData(s,0,0),r},isHeightImage:function(t,e,r){if(!t||!t.width||!t.height)return!1;var n=document.createElement("canvas"),i=n.getContext("2d"),a=e||32;r=r||20,n.width=n.height=a,i.drawImage(t,0,0,a,a);for(var o=i.getImageData(0,0,a,a),s=0;s<o.data.length;s+=4){var l=o.data[s],u=o.data[s+1],h=o.data[s+2];if(Math.abs(l-u)+Math.abs(u-h)>r)return!1}return!0},_fetchTexture:function(t,e,r){Ct.request.get({url:t,responseType:"arraybuffer",onload:e,onerror:r})},createChessboard:function(t,e,r,n){t=t||512,e=e||64,r=r||"black",n=n||"white";var i=Math.ceil(t/e),a=document.createElement("canvas");a.width=t,a.height=t;var o=a.getContext("2d");o.fillStyle=n,o.fillRect(0,0,t,t),o.fillStyle=r;for(var s=0;s<i;s++)for(var l=0;l<i;l++)(l%2?s%2:s%2-1)&&o.fillRect(s*e,l*e,e,e);return new K({image:a,anisotropic:8})},createBlank:function(t){var e=document.createElement("canvas");e.width=1,e.height=1;var r=e.getContext("2d");return r.fillStyle=t,r.fillRect(0,0,1,1),new K({image:e})}};const jr=ha;var os=["mousedown","mouseup","mousemove","mouseover","mouseout","click","dblclick","contextmenu"];function ss(t){return"_on"+t}var ls=function(t){var e=this;this._texture=new K({anisotropic:32,flipY:!1,surface:this,dispose:function(r){e.dispose(),K.prototype.dispose.call(this,r)}}),os.forEach(function(r){this[ss(r)]=function(n){n.triangle&&this._meshes.forEach(function(i){this.dispatchEvent(r,i,n.triangle,n.point)},this)}},this),this._meshes=[],t&&this.setECharts(t),this.onupdate=null};ls.prototype={constructor:ls,getTexture:function(){return this._texture},setECharts:function(t){this._chart=t;var e=t.getDom();if(e instanceof HTMLCanvasElement){var r=this,n=t.getZr(),i=n.__oldRefreshImmediately||n.refreshImmediately;n.refreshImmediately=function(){i.call(this),r._texture.dirty(),r.onupdate&&r.onupdate()},n.__oldRefreshImmediately=i}else console.error("ECharts must init on canvas if it is used as texture."),e=document.createElement("canvas");this._texture.image=e,this._texture.dirty(),this.onupdate&&this.onupdate()},dispatchEvent:function(){var t=new B,e=new B,r=new B,n=new he,i=new he,a=new he,o=new he,s=new B;return function(l,u,h,c){var d=u.geometry,f=d.attributes.position,m=d.attributes.texcoord0,p=B.dot,g=B.cross;f.get(h[0],t.array),f.get(h[1],e.array),f.get(h[2],r.array),m.get(h[0],n.array),m.get(h[1],i.array),m.get(h[2],a.array),g(s,e,r);var _=p(t,s),y=p(c,s)/_;g(s,r,t);var x=p(c,s)/_;g(s,t,e);var v=p(c,s)/_;he.scale(o,n,y),he.scaleAndAdd(o,o,i,x),he.scaleAndAdd(o,o,a,v);var w=o.x*this._chart.getWidth(),b=o.y*this._chart.getHeight();this._chart.getZr().handler.dispatch(l,{zrX:w,zrY:b})}}(),attachToMesh:function(t){this._meshes.indexOf(t)>=0||(os.forEach(function(e){t.on(e,this[ss(e)],this)},this),this._meshes.push(t))},detachFromMesh:function(t){var e=this._meshes.indexOf(t);e>=0&&this._meshes.splice(e,1),os.forEach(function(r){t.off(r,this[ss(r)])},this)},dispose:function(){this._meshes.forEach(function(t){this.detachFromMesh(t)},this)}};const zf=ls;var Uf=Sn.extend({left:-1,right:1,near:-1,far:1,top:1,bottom:-1},{updateProjectionMatrix:function(){this.projectionMatrix.ortho(this.left,this.right,this.bottom,this.top,this.near,this.far)},decomposeProjectionMatrix:function(){var t=this.projectionMatrix.array;this.left=(-1-t[12])/t[0],this.right=(1-t[12])/t[0],this.top=(1-t[13])/t[5],this.bottom=(-1-t[13])/t[5],this.near=-(-1-t[14])/t[10],this.far=-(1-t[14])/t[10]},clone:function(){var t=Sn.prototype.clone.call(this);return t.left=this.left,t.right=this.right,t.near=this.near,t.far=this.far,t.top=this.top,t.bottom=this.bottom,t}});const Mn=Uf;N.import(`
@export clay.compositor.vertex
uniform mat4 worldViewProjection : WORLDVIEWPROJECTION;
attribute vec3 position : POSITION;
attribute vec2 texcoord : TEXCOORD_0;
varying vec2 v_Texcoord;
void main()
{
 v_Texcoord = texcoord;
 gl_Position = worldViewProjection * vec4(position, 1.0);
}
@end`);var Gf=new za,au=new Hr({geometry:Gf,frustumCulling:!1}),kf=new Mn;const Lt=$t.extend(function(){return{fragment:"",outputs:null,material:null,blendWithPrevious:!1,clearColor:!1,clearDepth:!0}},function(){var t=new N(N.source("clay.compositor.vertex"),this.fragment),e=new ve({shader:t});e.enableTexturesAll(),this.material=e},{setUniform:function(t,e){this.material.setUniform(t,e)},getUniform:function(t){var e=this.material.uniforms[t];if(e)return e.value},attachOutput:function(t,e){this.outputs||(this.outputs={}),e=e||36064,this.outputs[e]=t},detachOutput:function(t){for(var e in this.outputs)this.outputs[e]===t&&(this.outputs[e]=null)},bind:function(t,e){if(this.outputs)for(var r in this.outputs){var n=this.outputs[r];n&&e.attach(n,r)}e&&e.bind(t)},unbind:function(t,e){e.unbind(t)},render:function(t,e){var r=t.gl;if(e){this.bind(t,e);var n=t.getGLExtension("EXT_draw_buffers");if(n&&this.outputs){var i=[];for(var a in this.outputs)(a=+a)>=r.COLOR_ATTACHMENT0&&a<=r.COLOR_ATTACHMENT0+8&&i.push(a);n.drawBuffersEXT(i)}}this.trigger("beforerender",this,t);var o=this.clearDepth?r.DEPTH_BUFFER_BIT:0;if(r.depthMask(!0),this.clearColor){o|=r.COLOR_BUFFER_BIT,r.colorMask(!0,!0,!0,!0);var s=this.clearColor;Array.isArray(s)&&r.clearColor(s[0],s[1],s[2],s[3])}r.clear(o),this.blendWithPrevious?(r.enable(r.BLEND),this.material.transparent=!0):(r.disable(r.BLEND),this.material.transparent=!1),this.renderQuad(t),this.trigger("afterrender",this,t),e&&this.unbind(t,e)},renderQuad:function(t){au.material=this.material,t.renderPass([au],kf)},dispose:function(t){}});var Br={},So=["px","nx","py","ny","pz","nz"];Br.prefilterEnvironmentMap=function(t,e,r,n,i){i&&n||(n=Br.generateNormalDistribution(),i=Br.integrateBRDF(t,n));var a=(r=r||{}).width||64,o=r.height||64,s=r.type||e.type,l=new gi({width:a,height:o,type:s,flipY:!1,mipmaps:[]});l.isPowerOfTwo()||console.warn("Width and height must be power of two to enable mipmap.");var u=Math.min(a,o),h=Math.log(u)/Math.log(2)+1,c=new ve({shader:new N({vertex:N.source("clay.skybox.vertex"),fragment:`#define SHADER_NAME prefilter
#define SAMPLE_NUMBER 1024
#define PI 3.14159265358979
uniform mat4 viewInverse : VIEWINVERSE;
uniform samplerCube environmentMap;
uniform sampler2D normalDistribution;
uniform float roughness : 0.5;
varying vec2 v_Texcoord;
varying vec3 v_WorldPosition;
@import clay.util.rgbm
vec3 importanceSampleNormal(float i, float roughness, vec3 N) {
 vec3 H = texture2D(normalDistribution, vec2(roughness, i)).rgb;
 vec3 upVector = abs(N.y) > 0.999 ? vec3(1.0, 0.0, 0.0) : vec3(0.0, 1.0, 0.0);
 vec3 tangentX = normalize(cross(N, upVector));
 vec3 tangentZ = cross(N, tangentX);
 return normalize(tangentX * H.x + N * H.y + tangentZ * H.z);
}
void main() {
 vec3 eyePos = viewInverse[3].xyz;
 vec3 V = normalize(v_WorldPosition - eyePos);
 vec3 N = V;
 vec3 prefilteredColor = vec3(0.0);
 float totalWeight = 0.0;
 float fMaxSampleNumber = float(SAMPLE_NUMBER);
 for (int i = 0; i < SAMPLE_NUMBER; i++) {
 vec3 H = importanceSampleNormal(float(i) / fMaxSampleNumber, roughness, N);
 vec3 L = reflect(-V, H);
 float NoL = clamp(dot(N, L), 0.0, 1.0);
 if (NoL > 0.0) {
 prefilteredColor += decodeHDR(textureCube(environmentMap, L)).rgb * NoL;
 totalWeight += NoL;
 }
 }
 gl_FragColor = encodeHDR(vec4(prefilteredColor / totalWeight, 1.0));
}
`})});c.set("normalDistribution",n),r.encodeRGBM&&c.define("fragment","RGBM_ENCODE"),r.decodeRGBM&&c.define("fragment","RGBM_DECODE");var d,f=new br;if(e.textureType==="texture2D"){var m=new gi({width:a,height:o,type:s===V.FLOAT?V.HALF_FLOAT:s});jr.panoramaToCubeMap(t,e,m,{encodeRGBM:r.decodeRGBM}),e=m}(d=new Ua({scene:f,material:c})).material.set("environmentMap",e);var p=new Vs({texture:l});r.encodeRGBM&&(s=l.type=V.UNSIGNED_BYTE);for(var g=new K({width:a,height:o,type:s}),_=new jt({depthBuffer:!1}),y=Ct[s===V.UNSIGNED_BYTE?"Uint8Array":"Float32Array"],x=0;x<h;x++){l.mipmaps[x]={pixels:{}},d.material.set("roughness",x/(h-1));for(var v=g.width,w=2*Math.atan(v/(v-.5))/Math.PI*180,b=0;b<So.length;b++){var S=new y(g.width*g.height*4);_.attach(g),_.bind(t);var M=p.getCamera(So[b]);M.fov=w,t.render(f,M),t.gl.readPixels(0,0,g.width,g.height,V.RGBA,s,S),_.unbind(t),l.mipmaps[x].pixels[So[b]]=S}g.width/=2,g.height/=2,g.dirty()}return _.dispose(t),g.dispose(t),d.dispose(t),n.dispose(t),{environmentMap:l,brdfLookup:i,normalDistribution:n,maxMipmapLevel:h}},Br.integrateBRDF=function(t,e){e=e||Br.generateNormalDistribution();var r=new jt({depthBuffer:!1}),n=new Lt({fragment:`#define SAMPLE_NUMBER 1024
#define PI 3.14159265358979
uniform sampler2D normalDistribution;
uniform vec2 viewportSize : [512, 256];
const vec3 N = vec3(0.0, 0.0, 1.0);
const float fSampleNumber = float(SAMPLE_NUMBER);
vec3 importanceSampleNormal(float i, float roughness, vec3 N) {
 vec3 H = texture2D(normalDistribution, vec2(roughness, i)).rgb;
 vec3 upVector = abs(N.y) > 0.999 ? vec3(1.0, 0.0, 0.0) : vec3(0.0, 1.0, 0.0);
 vec3 tangentX = normalize(cross(N, upVector));
 vec3 tangentZ = cross(N, tangentX);
 return normalize(tangentX * H.x + N * H.y + tangentZ * H.z);
}
float G_Smith(float roughness, float NoV, float NoL) {
 float k = roughness * roughness / 2.0;
 float G1V = NoV / (NoV * (1.0 - k) + k);
 float G1L = NoL / (NoL * (1.0 - k) + k);
 return G1L * G1V;
}
void main() {
 vec2 uv = gl_FragCoord.xy / viewportSize;
 float NoV = uv.x;
 float roughness = uv.y;
 vec3 V;
 V.x = sqrt(1.0 - NoV * NoV);
 V.y = 0.0;
 V.z = NoV;
 float A = 0.0;
 float B = 0.0;
 for (int i = 0; i < SAMPLE_NUMBER; i++) {
 vec3 H = importanceSampleNormal(float(i) / fSampleNumber, roughness, N);
 vec3 L = reflect(-V, H);
 float NoL = clamp(L.z, 0.0, 1.0);
 float NoH = clamp(H.z, 0.0, 1.0);
 float VoH = clamp(dot(V, H), 0.0, 1.0);
 if (NoL > 0.0) {
 float G = G_Smith(roughness, NoV, NoL);
 float G_Vis = G * VoH / (NoH * NoV);
 float Fc = pow(1.0 - VoH, 5.0);
 A += (1.0 - Fc) * G_Vis;
 B += Fc * G_Vis;
 }
 }
 gl_FragColor = vec4(vec2(A, B) / fSampleNumber, 0.0, 1.0);
}
`}),i=new K({width:512,height:256,type:V.HALF_FLOAT,wrapS:V.CLAMP_TO_EDGE,wrapT:V.CLAMP_TO_EDGE,minFilter:V.NEAREST,magFilter:V.NEAREST,useMipmap:!1});return n.setUniform("normalDistribution",e),n.setUniform("viewportSize",[512,256]),n.attachOutput(i),n.render(t,r),r.dispose(t),i},Br.generateNormalDistribution=function(t,e){for(var r=new K({width:t=t||256,height:e=e||1024,type:V.FLOAT,minFilter:V.NEAREST,magFilter:V.NEAREST,wrapS:V.CLAMP_TO_EDGE,wrapT:V.CLAMP_TO_EDGE,useMipmap:!1}),n=new Float32Array(e*t*4),i=[],a=0;a<t;a++){for(var o=a/t,s=o*o,l=0;l<e;l++){var u=(l<<16|l>>>16)>>>0;u=(((16711935&(u=((252645135&(u=((858993459&(u=((1431655765&u)<<1|(2863311530&u)>>>1)>>>0))<<2|(3435973836&u)>>>2)>>>0))<<4|(4042322160&u)>>>4)>>>0))<<8|(4278255360&u)>>>8)>>>0)/4294967296;var h=Math.sqrt((1-u)/(1+(s*s-1)*u));i[l]=h}for(l=0;l<e;l++){var c=4*(l*t+a),d=(h=i[l],Math.sqrt(1-h*h)),f=l/e,m=2*Math.PI*f;n[c]=d*Math.cos(m),n[c+1]=h,n[c+2]=d*Math.sin(m),n[c+3]=1}}return r.pixels=n,r};const ca=Br;var Hf=Ce.extend({cubemap:null,castShadow:!1,_normalDistribution:null,_brdfLookup:null},{type:"AMBIENT_CUBEMAP_LIGHT",prefilter:function(t,e){if(t.getGLExtension("EXT_shader_texture_lod")){this._brdfLookup||(this._normalDistribution=ca.generateNormalDistribution(),this._brdfLookup=ca.integrateBRDF(t,this._normalDistribution));var r=this.cubemap;if(!r.__prefiltered){var n=ca.prefilterEnvironmentMap(t,r,{encodeRGBM:!0,width:e,height:e},this._normalDistribution,this._brdfLookup);this.cubemap=n.environmentMap,this.cubemap.__prefiltered=!0,r.dispose(t)}}else console.warn("Device not support textureCubeLodEXT")},getBRDFLookup:function(){return this._brdfLookup},uniformTemplates:{ambientCubemapLightColor:{type:"3f",value:function(t){var e=t.color,r=t.intensity;return[e[0]*r,e[1]*r,e[2]*r]}},ambientCubemapLightCubemap:{type:"t",value:function(t){return t.cubemap}},ambientCubemapLightBRDFLookup:{type:"t",value:function(t){return t._brdfLookup}}}});const Vf=Hf;var Wf=Ce.extend({castShadow:!1,coefficients:[]},function(){this._coefficientsTmpArr=new Ct.Float32Array(27)},{type:"AMBIENT_SH_LIGHT",uniformTemplates:{ambientSHLightColor:{type:"3f",value:function(t){var e=t.color,r=t.intensity;return[e[0]*r,e[1]*r,e[2]*r]}},ambientSHLightCoefficients:{type:"3f",value:function(t){for(var e=t._coefficientsTmpArr,r=0;r<t.coefficients.length;r++)e[r]=t.coefficients[r];return e}}}});const jf=Wf;var Oh={},Lr=["px","nx","py","ny","pz","nz"];function Xf(t,e){var r=t[0],n=t[1],i=t[2];return e===0?1:e===1?r:e===2?n:e===3?i:e===4?r*i:e===5?n*i:e===6?r*n:e===7?3*i*i-1:r*r-n*n}var qf={px:[2,1,0,-1,-1,1],nx:[2,1,0,1,-1,-1],py:[0,2,1,1,-1,-1],ny:[0,2,1,1,1,1],pz:[0,1,2,-1,-1,-1],nz:[0,1,2,1,-1,1]};Oh.projectEnvironmentMap=function(t,e,r){var n;(r=r||{}).lod=r.lod||0;var i=new br,a=64;e.textureType==="texture2D"||(a=e.image&&e.image.px?e.image.px.width:e.width),n=new Ua({scene:i,environmentMap:e});var o=Math.ceil(a/Math.pow(2,r.lod)),s=Math.ceil(a/Math.pow(2,r.lod)),l=new K({width:o,height:s}),u=new jt;n.material.define("fragment","RGBM_ENCODE"),r.decodeRGBM&&n.material.define("fragment","RGBM_DECODE"),n.material.set("lod",r.lod);for(var h=new Vs({texture:l}),c={},d=0;d<Lr.length;d++){c[Lr[d]]=new Uint8Array(o*s*4);var f=h.getCamera(Lr[d]);f.fov=90,u.attach(l),u.bind(t),t.render(i,f),t.gl.readPixels(0,0,o,s,V.RGBA,V.UNSIGNED_BYTE,c[Lr[d]]),u.unbind(t)}return n.dispose(t),u.dispose(t),l.dispose(t),function(m,p,g,_){for(var y=new Ct.Float32Array(27),x=E.create(),v=E.create(),w=E.create(),b=0;b<9;b++){for(var S=E.create(),M=0;M<Lr.length;M++){for(var D=p[Lr[M]],L=E.create(),P=0,O=0,R=qf[Lr[M]],A=0;A<_;A++)for(var z=0;z<g;z++){x[0]=z/(g-1)*2-1,x[1]=A/(_-1)*2-1,x[2]=-1,E.normalize(x,x),w[0]=x[R[0]]*R[3],w[1]=x[R[1]]*R[4],w[2]=x[R[2]]*R[5],v[0]=D[O++]/255,v[1]=D[O++]/255,v[2]=D[O++]/255;var F=D[O++]/255*8.12;v[0]*=F,v[1]*=F,v[2]*=F,E.scaleAndAdd(L,L,v,Xf(w,b)*-x[2]),P+=-x[2]}E.scaleAndAdd(S,S,L,1/P)}y[3*b]=S[0]/6,y[3*b+1]=S[1]/6,y[3*b+2]=S[2]/6}return y}(0,c,o,s)};const Zf=Oh,tt=function(){for(var t=0,e=arguments.length;t<e;t++)if(arguments[t]!=null)return arguments[t]},Rh=function(t,e){return e.dataIndexInside!=null?e.dataIndexInside:e.dataIndex!=null?We(e.dataIndex)?$s(e.dataIndex,function(r){return t.indexOfRawIndex(r)}):t.indexOfRawIndex(e.dataIndex):e.name!=null?We(e.name)?$s(e.name,function(r){return t.indexOfName(r)}):t.indexOfName(e.name):void 0};var Yf=st.extend({dynamic:!1,widthSegments:40,heightSegments:20,phiStart:0,phiLength:2*Math.PI,thetaStart:0,thetaLength:Math.PI,radius:1},function(){this.build()},{build:function(){var t=this.heightSegments,e=this.widthSegments,r=this.attributes.position,n=this.attributes.texcoord0,i=this.attributes.normal,a=(e+1)*(t+1);r.init(a),n.init(a),i.init(a);var o,s,l,u,h,c,d,f,m,p,g,_=a>65535?Uint32Array:Uint16Array,y=this.indices=new _(e*t*6),x=this.radius,v=this.phiStart,w=this.phiLength,b=this.thetaStart,S=this.thetaLength,M=[],D=[],L=0,P=1/(x=this.radius);for(d=0;d<=t;d++)for(c=0;c<=e;c++)u=c/e,h=d/t,o=-x*Math.cos(v+u*w)*Math.sin(b+h*S),s=x*Math.cos(b+h*S),l=x*Math.sin(v+u*w)*Math.sin(b+h*S),M[0]=o,M[1]=s,M[2]=l,D[0]=u,D[1]=h,r.set(L,M),n.set(L,D),M[0]*=P,M[1]*=P,M[2]*=P,i.set(L,M),L++;var O=e+1,R=0;for(d=0;d<t;d++)for(c=0;c<e;c++)m=d*O+c,f=d*O+c+1,g=(d+1)*O+c+1,p=(d+1)*O+c,y[R++]=f,y[R++]=m,y[R++]=g,y[R++]=m,y[R++]=p,y[R++]=g;this.boundingBox=new Jt,this.boundingBox.max.set(x,x,x),this.boundingBox.min.set(-x,-x,-x)}});const Kf=Yf;var Jf=Ce.extend({castShadow:!1},{type:"AMBIENT_LIGHT",uniformTemplates:{ambientLightColor:{type:"3f",value:function(t){var e=t.color,r=t.intensity;return[e[0]*r,e[1]*r,e[2]*r]}}}});const Qf=Jf;var $f=Ce.extend({shadowBias:.001,shadowSlopeScale:2,shadowCascade:1,cascadeSplitLogFactor:.2},{type:"DIRECTIONAL_LIGHT",uniformTemplates:{directionalLightDirection:{type:"3f",value:function(t){return t.__dir=t.__dir||new B,t.__dir.copy(t.worldTransform.z).normalize().negate().array}},directionalLightColor:{type:"3f",value:function(t){var e=t.color,r=t.intensity;return[e[0]*r,e[1]*r,e[2]*r]}}},clone:function(){var t=Ce.prototype.clone.call(this);return t.shadowBias=this.shadowBias,t.shadowSlopeScale=this.shadowSlopeScale,t}});const tp=$f;var ep=Ce.extend({range:100,castShadow:!1},{type:"POINT_LIGHT",uniformTemplates:{pointLightPosition:{type:"3f",value:function(t){return t.getWorldPosition().array}},pointLightRange:{type:"1f",value:function(t){return t.range}},pointLightColor:{type:"3f",value:function(t){var e=t.color,r=t.intensity;return[e[0]*r,e[1]*r,e[2]*r]}}},clone:function(){var t=Ce.prototype.clone.call(this);return t.range=this.range,t}});const rp=ep;var np=Ce.extend({range:20,umbraAngle:30,penumbraAngle:45,falloffFactor:2,shadowBias:.001,shadowSlopeScale:2},{type:"SPOT_LIGHT",uniformTemplates:{spotLightPosition:{type:"3f",value:function(t){return t.getWorldPosition().array}},spotLightRange:{type:"1f",value:function(t){return t.range}},spotLightUmbraAngleCosine:{type:"1f",value:function(t){return Math.cos(t.umbraAngle*Math.PI/180)}},spotLightPenumbraAngleCosine:{type:"1f",value:function(t){return Math.cos(t.penumbraAngle*Math.PI/180)}},spotLightFalloffFactor:{type:"1f",value:function(t){return t.falloffFactor}},spotLightDirection:{type:"3f",value:function(t){return t.__dir=t.__dir||new B,t.__dir.copy(t.worldTransform.z).negate().array}},spotLightColor:{type:"3f",value:function(t){var e=t.color,r=t.intensity;return[e[0]*r,e[1]*r,e[2]*r]}}},clone:function(){var t=Ce.prototype.clone.call(this);return t.range=this.range,t.umbraAngle=this.umbraAngle,t.penumbraAngle=this.penumbraAngle,t.falloffFactor=this.falloffFactor,t.shadowBias=this.shadowBias,t.shadowSlopeScale=this.shadowSlopeScale,t}});const ip=np;var at=function(t,e,r,n){t=t||0,e=e||0,r=r||0,n=n||0,this.array=U.fromValues(t,e,r,n),this._dirty=!0};at.prototype={constructor:at,add:function(t){return U.add(this.array,this.array,t.array),this._dirty=!0,this},set:function(t,e,r,n){return this.array[0]=t,this.array[1]=e,this.array[2]=r,this.array[3]=n,this._dirty=!0,this},setArray:function(t){return this.array[0]=t[0],this.array[1]=t[1],this.array[2]=t[2],this.array[3]=t[3],this._dirty=!0,this},clone:function(){return new at(this.x,this.y,this.z,this.w)},copy:function(t){return U.copy(this.array,t.array),this._dirty=!0,this},dist:function(t){return U.dist(this.array,t.array)},distance:function(t){return U.distance(this.array,t.array)},div:function(t){return U.div(this.array,this.array,t.array),this._dirty=!0,this},divide:function(t){return U.divide(this.array,this.array,t.array),this._dirty=!0,this},dot:function(t){return U.dot(this.array,t.array)},len:function(){return U.len(this.array)},length:function(){return U.length(this.array)},lerp:function(t,e,r){return U.lerp(this.array,t.array,e.array,r),this._dirty=!0,this},min:function(t){return U.min(this.array,this.array,t.array),this._dirty=!0,this},max:function(t){return U.max(this.array,this.array,t.array),this._dirty=!0,this},mul:function(t){return U.mul(this.array,this.array,t.array),this._dirty=!0,this},multiply:function(t){return U.multiply(this.array,this.array,t.array),this._dirty=!0,this},negate:function(){return U.negate(this.array,this.array),this._dirty=!0,this},normalize:function(){return U.normalize(this.array,this.array),this._dirty=!0,this},random:function(t){return U.random(this.array,t),this._dirty=!0,this},scale:function(t){return U.scale(this.array,this.array,t),this._dirty=!0,this},scaleAndAdd:function(t,e){return U.scaleAndAdd(this.array,this.array,t.array,e),this._dirty=!0,this},sqrDist:function(t){return U.sqrDist(this.array,t.array)},squaredDistance:function(t){return U.squaredDistance(this.array,t.array)},sqrLen:function(){return U.sqrLen(this.array)},squaredLength:function(){return U.squaredLength(this.array)},sub:function(t){return U.sub(this.array,this.array,t.array),this._dirty=!0,this},subtract:function(t){return U.subtract(this.array,this.array,t.array),this._dirty=!0,this},transformMat4:function(t){return U.transformMat4(this.array,this.array,t.array),this._dirty=!0,this},transformQuat:function(t){return U.transformQuat(this.array,this.array,t.array),this._dirty=!0,this},toString:function(){return"["+Array.prototype.join.call(this.array,",")+"]"},toArray:function(){return Array.prototype.slice.call(this.array)}};var Wn=Object.defineProperty;if(Wn){var ji=at.prototype;Wn(ji,"x",{get:function(){return this.array[0]},set:function(t){this.array[0]=t,this._dirty=!0}}),Wn(ji,"y",{get:function(){return this.array[1]},set:function(t){this.array[1]=t,this._dirty=!0}}),Wn(ji,"z",{get:function(){return this.array[2]},set:function(t){this.array[2]=t,this._dirty=!0}}),Wn(ji,"w",{get:function(){return this.array[3]},set:function(t){this.array[3]=t,this._dirty=!0}})}at.add=function(t,e,r){return U.add(t.array,e.array,r.array),t._dirty=!0,t},at.set=function(t,e,r,n,i){U.set(t.array,e,r,n,i),t._dirty=!0},at.copy=function(t,e){return U.copy(t.array,e.array),t._dirty=!0,t},at.dist=function(t,e){return U.distance(t.array,e.array)},at.distance=at.dist,at.div=function(t,e,r){return U.divide(t.array,e.array,r.array),t._dirty=!0,t},at.divide=at.div,at.dot=function(t,e){return U.dot(t.array,e.array)},at.len=function(t){return U.length(t.array)},at.lerp=function(t,e,r,n){return U.lerp(t.array,e.array,r.array,n),t._dirty=!0,t},at.min=function(t,e,r){return U.min(t.array,e.array,r.array),t._dirty=!0,t},at.max=function(t,e,r){return U.max(t.array,e.array,r.array),t._dirty=!0,t},at.mul=function(t,e,r){return U.multiply(t.array,e.array,r.array),t._dirty=!0,t},at.multiply=at.mul,at.negate=function(t,e){return U.negate(t.array,e.array),t._dirty=!0,t},at.normalize=function(t,e){return U.normalize(t.array,e.array),t._dirty=!0,t},at.random=function(t,e){return U.random(t.array,e),t._dirty=!0,t},at.scale=function(t,e,r){return U.scale(t.array,e.array,r),t._dirty=!0,t},at.scaleAndAdd=function(t,e,r,n){return U.scaleAndAdd(t.array,e.array,r.array,n),t._dirty=!0,t},at.sqrDist=function(t,e){return U.sqrDist(t.array,e.array)},at.squaredDistance=at.sqrDist,at.sqrLen=function(t){return U.sqrLen(t.array)},at.squaredLength=at.sqrLen,at.sub=function(t,e,r){return U.subtract(t.array,e.array,r.array),t._dirty=!0,t},at.subtract=at.sub,at.transformMat4=function(t,e,r){return U.transformMat4(t.array,e.array,r.array),t._dirty=!0,t},at.transformQuat=function(t,e,r){return U.transformQuat(t.array,e.array,r.array),t._dirty=!0,t};const ap=at;var zr={create:function(){var t=new Vt(4);return t[0]=1,t[1]=0,t[2]=0,t[3]=1,t},clone:function(t){var e=new Vt(4);return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e},copy:function(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t},identity:function(t){return t[0]=1,t[1]=0,t[2]=0,t[3]=1,t},transpose:function(t,e){if(t===e){var r=e[1];t[1]=e[2],t[2]=r}else t[0]=e[0],t[1]=e[2],t[2]=e[1],t[3]=e[3];return t},invert:function(t,e){var r=e[0],n=e[1],i=e[2],a=e[3],o=r*a-i*n;return o?(o=1/o,t[0]=a*o,t[1]=-n*o,t[2]=-i*o,t[3]=r*o,t):null},adjoint:function(t,e){var r=e[0];return t[0]=e[3],t[1]=-e[1],t[2]=-e[2],t[3]=r,t},determinant:function(t){return t[0]*t[3]-t[2]*t[1]},multiply:function(t,e,r){var n=e[0],i=e[1],a=e[2],o=e[3],s=r[0],l=r[1],u=r[2],h=r[3];return t[0]=n*s+a*l,t[1]=i*s+o*l,t[2]=n*u+a*h,t[3]=i*u+o*h,t}};zr.mul=zr.multiply,zr.rotate=function(t,e,r){var n=e[0],i=e[1],a=e[2],o=e[3],s=Math.sin(r),l=Math.cos(r);return t[0]=n*l+a*s,t[1]=i*l+o*s,t[2]=n*-s+a*l,t[3]=i*-s+o*l,t},zr.scale=function(t,e,r){var n=e[0],i=e[1],a=e[2],o=e[3],s=r[0],l=r[1];return t[0]=n*s,t[1]=i*s,t[2]=a*l,t[3]=o*l,t},zr.frob=function(t){return Math.sqrt(Math.pow(t[0],2)+Math.pow(t[1],2)+Math.pow(t[2],2)+Math.pow(t[3],2))},zr.LDU=function(t,e,r,n){return t[2]=n[2]/n[0],r[0]=n[0],r[1]=n[1],r[3]=n[3]-t[2]*r[1],[t,e,r]};const Mt=zr;var Kt=function(){this.array=Mt.create(),this._dirty=!0};Kt.prototype={constructor:Kt,setArray:function(t){for(var e=0;e<this.array.length;e++)this.array[e]=t[e];return this._dirty=!0,this},clone:function(){return new Kt().copy(this)},copy:function(t){return Mt.copy(this.array,t.array),this._dirty=!0,this},adjoint:function(){return Mt.adjoint(this.array,this.array),this._dirty=!0,this},determinant:function(){return Mt.determinant(this.array)},identity:function(){return Mt.identity(this.array),this._dirty=!0,this},invert:function(){return Mt.invert(this.array,this.array),this._dirty=!0,this},mul:function(t){return Mt.mul(this.array,this.array,t.array),this._dirty=!0,this},mulLeft:function(t){return Mt.mul(this.array,t.array,this.array),this._dirty=!0,this},multiply:function(t){return Mt.multiply(this.array,this.array,t.array),this._dirty=!0,this},multiplyLeft:function(t){return Mt.multiply(this.array,t.array,this.array),this._dirty=!0,this},rotate:function(t){return Mt.rotate(this.array,this.array,t),this._dirty=!0,this},scale:function(t){return Mt.scale(this.array,this.array,t.array),this._dirty=!0,this},transpose:function(){return Mt.transpose(this.array,this.array),this._dirty=!0,this},toString:function(){return"["+Array.prototype.join.call(this.array,",")+"]"},toArray:function(){return Array.prototype.slice.call(this.array)}},Kt.adjoint=function(t,e){return Mt.adjoint(t.array,e.array),t._dirty=!0,t},Kt.copy=function(t,e){return Mt.copy(t.array,e.array),t._dirty=!0,t},Kt.determinant=function(t){return Mt.determinant(t.array)},Kt.identity=function(t){return Mt.identity(t.array),t._dirty=!0,t},Kt.invert=function(t,e){return Mt.invert(t.array,e.array),t._dirty=!0,t},Kt.mul=function(t,e,r){return Mt.mul(t.array,e.array,r.array),t._dirty=!0,t},Kt.multiply=Kt.mul,Kt.rotate=function(t,e,r){return Mt.rotate(t.array,e.array,r),t._dirty=!0,t},Kt.scale=function(t,e,r){return Mt.scale(t.array,e.array,r.array),t._dirty=!0,t},Kt.transpose=function(t,e){return Mt.transpose(t.array,e.array),t._dirty=!0,t};const op=Kt;var Ur={create:function(){var t=new Vt(6);return t[0]=1,t[1]=0,t[2]=0,t[3]=1,t[4]=0,t[5]=0,t},clone:function(t){var e=new Vt(6);return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[4]=t[4],e[5]=t[5],e},copy:function(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4],t[5]=e[5],t},identity:function(t){return t[0]=1,t[1]=0,t[2]=0,t[3]=1,t[4]=0,t[5]=0,t},invert:function(t,e){var r=e[0],n=e[1],i=e[2],a=e[3],o=e[4],s=e[5],l=r*a-n*i;return l?(l=1/l,t[0]=a*l,t[1]=-n*l,t[2]=-i*l,t[3]=r*l,t[4]=(i*s-a*o)*l,t[5]=(n*o-r*s)*l,t):null},determinant:function(t){return t[0]*t[3]-t[1]*t[2]},multiply:function(t,e,r){var n=e[0],i=e[1],a=e[2],o=e[3],s=e[4],l=e[5],u=r[0],h=r[1],c=r[2],d=r[3],f=r[4],m=r[5];return t[0]=n*u+a*h,t[1]=i*u+o*h,t[2]=n*c+a*d,t[3]=i*c+o*d,t[4]=n*f+a*m+s,t[5]=i*f+o*m+l,t}};Ur.mul=Ur.multiply,Ur.rotate=function(t,e,r){var n=e[0],i=e[1],a=e[2],o=e[3],s=e[4],l=e[5],u=Math.sin(r),h=Math.cos(r);return t[0]=n*h+a*u,t[1]=i*h+o*u,t[2]=n*-u+a*h,t[3]=i*-u+o*h,t[4]=s,t[5]=l,t},Ur.scale=function(t,e,r){var n=e[0],i=e[1],a=e[2],o=e[3],s=e[4],l=e[5],u=r[0],h=r[1];return t[0]=n*u,t[1]=i*u,t[2]=a*h,t[3]=o*h,t[4]=s,t[5]=l,t},Ur.translate=function(t,e,r){var n=e[0],i=e[1],a=e[2],o=e[3],s=e[4],l=e[5],u=r[0],h=r[1];return t[0]=n,t[1]=i,t[2]=a,t[3]=o,t[4]=n*u+a*h+s,t[5]=i*u+o*h+l,t},Ur.frob=function(t){return Math.sqrt(Math.pow(t[0],2)+Math.pow(t[1],2)+Math.pow(t[2],2)+Math.pow(t[3],2)+Math.pow(t[4],2)+Math.pow(t[5],2)+1)};const Dt=Ur;var ne=function(){this.array=Dt.create(),this._dirty=!0};ne.prototype={constructor:ne,setArray:function(t){for(var e=0;e<this.array.length;e++)this.array[e]=t[e];return this._dirty=!0,this},clone:function(){return new ne().copy(this)},copy:function(t){return Dt.copy(this.array,t.array),this._dirty=!0,this},determinant:function(){return Dt.determinant(this.array)},identity:function(){return Dt.identity(this.array),this._dirty=!0,this},invert:function(){return Dt.invert(this.array,this.array),this._dirty=!0,this},mul:function(t){return Dt.mul(this.array,this.array,t.array),this._dirty=!0,this},mulLeft:function(t){return Dt.mul(this.array,t.array,this.array),this._dirty=!0,this},multiply:function(t){return Dt.multiply(this.array,this.array,t.array),this._dirty=!0,this},multiplyLeft:function(t){return Dt.multiply(this.array,t.array,this.array),this._dirty=!0,this},rotate:function(t){return Dt.rotate(this.array,this.array,t),this._dirty=!0,this},scale:function(t){return Dt.scale(this.array,this.array,t.array),this._dirty=!0,this},translate:function(t){return Dt.translate(this.array,this.array,t.array),this._dirty=!0,this},toString:function(){return"["+Array.prototype.join.call(this.array,",")+"]"},toArray:function(){return Array.prototype.slice.call(this.array)}},ne.copy=function(t,e){return Dt.copy(t.array,e.array),t._dirty=!0,t},ne.determinant=function(t){return Dt.determinant(t.array)},ne.identity=function(t){return Dt.identity(t.array),t._dirty=!0,t},ne.invert=function(t,e){return Dt.invert(t.array,e.array),t._dirty=!0,t},ne.mul=function(t,e,r){return Dt.mul(t.array,e.array,r.array),t._dirty=!0,t},ne.multiply=ne.mul,ne.rotate=function(t,e,r){return Dt.rotate(t.array,e.array,r),t._dirty=!0,t},ne.scale=function(t,e,r){return Dt.scale(t.array,e.array,r.array),t._dirty=!0,t},ne.translate=function(t,e,r){return Dt.translate(t.array,e.array,r.array),t._dirty=!0,t};const sp=ne;var Rt=function(){this.array=rt.create(),this._dirty=!0};Rt.prototype={constructor:Rt,setArray:function(t){for(var e=0;e<this.array.length;e++)this.array[e]=t[e];return this._dirty=!0,this},adjoint:function(){return rt.adjoint(this.array,this.array),this._dirty=!0,this},clone:function(){return new Rt().copy(this)},copy:function(t){return rt.copy(this.array,t.array),this._dirty=!0,this},determinant:function(){return rt.determinant(this.array)},fromMat2d:function(t){return rt.fromMat2d(this.array,t.array),this._dirty=!0,this},fromMat4:function(t){return rt.fromMat4(this.array,t.array),this._dirty=!0,this},fromQuat:function(t){return rt.fromQuat(this.array,t.array),this._dirty=!0,this},identity:function(){return rt.identity(this.array),this._dirty=!0,this},invert:function(){return rt.invert(this.array,this.array),this._dirty=!0,this},mul:function(t){return rt.mul(this.array,this.array,t.array),this._dirty=!0,this},mulLeft:function(t){return rt.mul(this.array,t.array,this.array),this._dirty=!0,this},multiply:function(t){return rt.multiply(this.array,this.array,t.array),this._dirty=!0,this},multiplyLeft:function(t){return rt.multiply(this.array,t.array,this.array),this._dirty=!0,this},rotate:function(t){return rt.rotate(this.array,this.array,t),this._dirty=!0,this},scale:function(t){return rt.scale(this.array,this.array,t.array),this._dirty=!0,this},translate:function(t){return rt.translate(this.array,this.array,t.array),this._dirty=!0,this},normalFromMat4:function(t){return rt.normalFromMat4(this.array,t.array),this._dirty=!0,this},transpose:function(){return rt.transpose(this.array,this.array),this._dirty=!0,this},toString:function(){return"["+Array.prototype.join.call(this.array,",")+"]"},toArray:function(){return Array.prototype.slice.call(this.array)}},Rt.adjoint=function(t,e){return rt.adjoint(t.array,e.array),t._dirty=!0,t},Rt.copy=function(t,e){return rt.copy(t.array,e.array),t._dirty=!0,t},Rt.determinant=function(t){return rt.determinant(t.array)},Rt.identity=function(t){return rt.identity(t.array),t._dirty=!0,t},Rt.invert=function(t,e){return rt.invert(t.array,e.array),t},Rt.mul=function(t,e,r){return rt.mul(t.array,e.array,r.array),t._dirty=!0,t},Rt.multiply=Rt.mul,Rt.fromMat2d=function(t,e){return rt.fromMat2d(t.array,e.array),t._dirty=!0,t},Rt.fromMat4=function(t,e){return rt.fromMat4(t.array,e.array),t._dirty=!0,t},Rt.fromQuat=function(t,e){return rt.fromQuat(t.array,e.array),t._dirty=!0,t},Rt.normalFromMat4=function(t,e){return rt.normalFromMat4(t.array,e.array),t._dirty=!0,t},Rt.rotate=function(t,e,r){return rt.rotate(t.array,e.array,r),t._dirty=!0,t},Rt.scale=function(t,e,r){return rt.scale(t.array,e.array,r.array),t._dirty=!0,t},Rt.transpose=function(t,e){return rt.transpose(t.array,e.array),t._dirty=!0,t},Rt.translate=function(t,e,r){return rt.translate(t.array,e.array,r.array),t._dirty=!0,t};const lp=Rt,up={_animators:null,getAnimators:function(){return this._animators=this._animators||[],this._animators},animate:function(t,e){var r;if(this._animators=this._animators||[],t){for(var n=t.split("."),i=this,a=0,o=n.length;a<o;a++)i&&(i=i[n[a]]);i&&(r=i)}else r=this;if(r==null)throw new Error("Target "+t+" not exists");var s=this._animators,l=new td(r,e),u=this;return l.during(function(){u.__zr&&u.__zr.refresh()}).done(function(){var h=s.indexOf(l);h>=0&&s.splice(h,1)}),s.push(l),this.__zr&&this.__zr.animation.addAnimator(l),l},stopAnimation:function(t){this._animators=this._animators||[];for(var e=this._animators,r=e.length,n=0;n<r;n++)e[n].stop(t);return e.length=0,this},addAnimatorsToZr:function(t){if(this._animators)for(var e=0;e<this._animators.length;e++)t.animation.addAnimator(this._animators[e])},removeAnimatorsFromZr:function(t){if(this._animators)for(var e=0;e<this._animators.length;e++)t.animation.removeAnimator(this._animators[e])}},Nh=`
@export clay.util.rand
highp float rand(vec2 uv) {
 const highp float a = 12.9898, b = 78.233, c = 43758.5453;
 highp float dt = dot(uv.xy, vec2(a,b)), sn = mod(dt, 3.141592653589793);
 return fract(sin(sn) * c);
}
@end
@export clay.util.calculate_attenuation
uniform float attenuationFactor : 5.0;
float lightAttenuation(float dist, float range)
{
 float attenuation = 1.0;
 attenuation = dist*dist/(range*range+1.0);
 float att_s = attenuationFactor;
 attenuation = 1.0/(attenuation*att_s+1.0);
 att_s = 1.0/(att_s+1.0);
 attenuation = attenuation - att_s;
 attenuation /= 1.0 - att_s;
 return clamp(attenuation, 0.0, 1.0);
}
@end
@export clay.util.edge_factor
#ifdef SUPPORT_STANDARD_DERIVATIVES
float edgeFactor(float width)
{
 vec3 d = fwidth(v_Barycentric);
 vec3 a3 = smoothstep(vec3(0.0), d * width, v_Barycentric);
 return min(min(a3.x, a3.y), a3.z);
}
#else
float edgeFactor(float width)
{
 return 1.0;
}
#endif
@end
@export clay.util.encode_float
vec4 encodeFloat(const in float depth)
{
 const vec4 bitShifts = vec4(256.0*256.0*256.0, 256.0*256.0, 256.0, 1.0);
 const vec4 bit_mask = vec4(0.0, 1.0/256.0, 1.0/256.0, 1.0/256.0);
 vec4 res = fract(depth * bitShifts);
 res -= res.xxyz * bit_mask;
 return res;
}
@end
@export clay.util.decode_float
float decodeFloat(const in vec4 color)
{
 const vec4 bitShifts = vec4(1.0/(256.0*256.0*256.0), 1.0/(256.0*256.0), 1.0/256.0, 1.0);
 return dot(color, bitShifts);
}
@end
@export clay.util.float
@import clay.util.encode_float
@import clay.util.decode_float
@end
@export clay.util.rgbm_decode
vec3 RGBMDecode(vec4 rgbm, float range) {
 return range * rgbm.rgb * rgbm.a;
}
@end
@export clay.util.rgbm_encode
vec4 RGBMEncode(vec3 color, float range) {
 if (dot(color, color) == 0.0) {
 return vec4(0.0);
 }
 vec4 rgbm;
 color /= range;
 rgbm.a = clamp(max(max(color.r, color.g), max(color.b, 1e-6)), 0.0, 1.0);
 rgbm.a = ceil(rgbm.a * 255.0) / 255.0;
 rgbm.rgb = color / rgbm.a;
 return rgbm;
}
@end
@export clay.util.rgbm
@import clay.util.rgbm_decode
@import clay.util.rgbm_encode
vec4 decodeHDR(vec4 color)
{
#if defined(RGBM_DECODE) || defined(RGBM)
 return vec4(RGBMDecode(color, 8.12), 1.0);
#else
 return color;
#endif
}
vec4 encodeHDR(vec4 color)
{
#if defined(RGBM_ENCODE) || defined(RGBM)
 return RGBMEncode(color.xyz, 8.12);
#else
 return color;
#endif
}
@end
@export clay.util.srgb
vec4 sRGBToLinear(in vec4 value) {
 return vec4(mix(pow(value.rgb * 0.9478672986 + vec3(0.0521327014), vec3(2.4)), value.rgb * 0.0773993808, vec3(lessThanEqual(value.rgb, vec3(0.04045)))), value.w);
}
vec4 linearTosRGB(in vec4 value) {
 return vec4(mix(pow(value.rgb, vec3(0.41666)) * 1.055 - vec3(0.055), value.rgb * 12.92, vec3(lessThanEqual(value.rgb, vec3(0.0031308)))), value.w);
}
@end
@export clay.chunk.skinning_header
#ifdef SKINNING
attribute vec3 weight : WEIGHT;
attribute vec4 joint : JOINT;
#ifdef USE_SKIN_MATRICES_TEXTURE
uniform sampler2D skinMatricesTexture : ignore;
uniform float skinMatricesTextureSize: ignore;
mat4 getSkinMatrix(sampler2D tex, float idx) {
 float j = idx * 4.0;
 float x = mod(j, skinMatricesTextureSize);
 float y = floor(j / skinMatricesTextureSize) + 0.5;
 vec2 scale = vec2(skinMatricesTextureSize);
 return mat4(
 texture2D(tex, vec2(x + 0.5, y) / scale),
 texture2D(tex, vec2(x + 1.5, y) / scale),
 texture2D(tex, vec2(x + 2.5, y) / scale),
 texture2D(tex, vec2(x + 3.5, y) / scale)
 );
}
mat4 getSkinMatrix(float idx) {
 return getSkinMatrix(skinMatricesTexture, idx);
}
#else
uniform mat4 skinMatrix[JOINT_COUNT] : SKIN_MATRIX;
mat4 getSkinMatrix(float idx) {
 return skinMatrix[int(idx)];
}
#endif
#endif
@end
@export clay.chunk.skin_matrix
mat4 skinMatrixWS = getSkinMatrix(joint.x) * weight.x;
if (weight.y > 1e-4)
{
 skinMatrixWS += getSkinMatrix(joint.y) * weight.y;
}
if (weight.z > 1e-4)
{
 skinMatrixWS += getSkinMatrix(joint.z) * weight.z;
}
float weightW = 1.0-weight.x-weight.y-weight.z;
if (weightW > 1e-4)
{
 skinMatrixWS += getSkinMatrix(joint.w) * weightW;
}
@end
@export clay.chunk.instancing_header
#ifdef INSTANCING
attribute vec4 instanceMat1;
attribute vec4 instanceMat2;
attribute vec4 instanceMat3;
#endif
@end
@export clay.chunk.instancing_matrix
mat4 instanceMat = mat4(
 vec4(instanceMat1.xyz, 0.0),
 vec4(instanceMat2.xyz, 0.0),
 vec4(instanceMat3.xyz, 0.0),
 vec4(instanceMat1.w, instanceMat2.w, instanceMat3.w, 1.0)
);
@end
@export clay.util.parallax_correct
vec3 parallaxCorrect(in vec3 dir, in vec3 pos, in vec3 boxMin, in vec3 boxMax) {
 vec3 first = (boxMax - pos) / dir;
 vec3 second = (boxMin - pos) / dir;
 vec3 further = max(first, second);
 float dist = min(further.x, min(further.y, further.z));
 vec3 fixedPos = pos + dir * dist;
 vec3 boxCenter = (boxMax + boxMin) * 0.5;
 return normalize(fixedPos - boxCenter);
}
@end
@export clay.util.clamp_sample
vec4 clampSample(const in sampler2D texture, const in vec2 coord)
{
#ifdef STEREO
 float eye = step(0.5, coord.x) * 0.5;
 vec2 coordClamped = clamp(coord, vec2(eye, 0.0), vec2(0.5 + eye, 1.0));
#else
 vec2 coordClamped = clamp(coord, vec2(0.0), vec2(1.0));
#endif
 return texture2D(texture, coordClamped);
}
@end
@export clay.util.ACES
vec3 ACESToneMapping(vec3 color)
{
 const float A = 2.51;
 const float B = 0.03;
 const float C = 2.43;
 const float D = 0.59;
 const float E = 0.14;
 return (color * (A * color + B)) / (color * (C * color + D) + E);
}
@end`;function ou(t){return t instanceof HTMLCanvasElement||t instanceof HTMLImageElement||t instanceof Image}Object.assign(qe.prototype,up),N.import(Nh),N.import(Sh),N.import(`
@export ecgl.common.transformUniforms
uniform mat4 worldViewProjection : WORLDVIEWPROJECTION;
uniform mat4 worldInverseTranspose : WORLDINVERSETRANSPOSE;
uniform mat4 world : WORLD;
@end

@export ecgl.common.attributes
attribute vec3 position : POSITION;
attribute vec2 texcoord : TEXCOORD_0;
attribute vec3 normal : NORMAL;
@end

@export ecgl.common.uv.header
uniform vec2 uvRepeat : [1.0, 1.0];
uniform vec2 uvOffset : [0.0, 0.0];
uniform vec2 detailUvRepeat : [1.0, 1.0];
uniform vec2 detailUvOffset : [0.0, 0.0];

varying vec2 v_Texcoord;
varying vec2 v_DetailTexcoord;
@end

@export ecgl.common.uv.main
v_Texcoord = texcoord * uvRepeat + uvOffset;
v_DetailTexcoord = texcoord * detailUvRepeat + detailUvOffset;
@end

@export ecgl.common.uv.fragmentHeader
varying vec2 v_Texcoord;
varying vec2 v_DetailTexcoord;
@end


@export ecgl.common.albedo.main

 vec4 albedoTexel = vec4(1.0);
#ifdef DIFFUSEMAP_ENABLED
 albedoTexel = texture2D(diffuseMap, v_Texcoord);
 #ifdef SRGB_DECODE
 albedoTexel = sRGBToLinear(albedoTexel);
 #endif
#endif

#ifdef DETAILMAP_ENABLED
 vec4 detailTexel = texture2D(detailMap, v_DetailTexcoord);
 #ifdef SRGB_DECODE
 detailTexel = sRGBToLinear(detailTexel);
 #endif
 albedoTexel.rgb = mix(albedoTexel.rgb, detailTexel.rgb, detailTexel.a);
 albedoTexel.a = detailTexel.a + (1.0 - detailTexel.a) * albedoTexel.a;
#endif

@end

@export ecgl.common.wireframe.vertexHeader

#ifdef WIREFRAME_QUAD
attribute vec4 barycentric;
varying vec4 v_Barycentric;
#elif defined(WIREFRAME_TRIANGLE)
attribute vec3 barycentric;
varying vec3 v_Barycentric;
#endif

@end

@export ecgl.common.wireframe.vertexMain

#if defined(WIREFRAME_QUAD) || defined(WIREFRAME_TRIANGLE)
 v_Barycentric = barycentric;
#endif

@end


@export ecgl.common.wireframe.fragmentHeader

uniform float wireframeLineWidth : 1;
uniform vec4 wireframeLineColor: [0, 0, 0, 0.5];

#ifdef WIREFRAME_QUAD
varying vec4 v_Barycentric;
float edgeFactor () {
 vec4 d = fwidth(v_Barycentric);
 vec4 a4 = smoothstep(vec4(0.0), d * wireframeLineWidth, v_Barycentric);
 return min(min(min(a4.x, a4.y), a4.z), a4.w);
}
#elif defined(WIREFRAME_TRIANGLE)
varying vec3 v_Barycentric;
float edgeFactor () {
 vec3 d = fwidth(v_Barycentric);
 vec3 a3 = smoothstep(vec3(0.0), d * wireframeLineWidth, v_Barycentric);
 return min(min(a3.x, a3.y), a3.z);
}
#endif

@end


@export ecgl.common.wireframe.fragmentMain

#if defined(WIREFRAME_QUAD) || defined(WIREFRAME_TRIANGLE)
 if (wireframeLineWidth > 0.) {
 vec4 lineColor = wireframeLineColor;
#ifdef SRGB_DECODE
 lineColor = sRGBToLinear(lineColor);
#endif

 gl_FragColor.rgb = mix(gl_FragColor.rgb, lineColor.rgb, (1.0 - edgeFactor()) * lineColor.a);
 }
#endif
@end




@export ecgl.common.bumpMap.header

#ifdef BUMPMAP_ENABLED
uniform sampler2D bumpMap;
uniform float bumpScale : 1.0;


vec3 bumpNormal(vec3 surfPos, vec3 surfNormal, vec3 baseNormal)
{
 vec2 dSTdx = dFdx(v_Texcoord);
 vec2 dSTdy = dFdy(v_Texcoord);

 float Hll = bumpScale * texture2D(bumpMap, v_Texcoord).x;
 float dHx = bumpScale * texture2D(bumpMap, v_Texcoord + dSTdx).x - Hll;
 float dHy = bumpScale * texture2D(bumpMap, v_Texcoord + dSTdy).x - Hll;

 vec3 vSigmaX = dFdx(surfPos);
 vec3 vSigmaY = dFdy(surfPos);
 vec3 vN = surfNormal;

 vec3 R1 = cross(vSigmaY, vN);
 vec3 R2 = cross(vN, vSigmaX);

 float fDet = dot(vSigmaX, R1);

 vec3 vGrad = sign(fDet) * (dHx * R1 + dHy * R2);
 return normalize(abs(fDet) * baseNormal - vGrad);

}
#endif

@end

@export ecgl.common.normalMap.vertexHeader

#ifdef NORMALMAP_ENABLED
attribute vec4 tangent : TANGENT;
varying vec3 v_Tangent;
varying vec3 v_Bitangent;
#endif

@end

@export ecgl.common.normalMap.vertexMain

#ifdef NORMALMAP_ENABLED
 if (dot(tangent, tangent) > 0.0) {
 v_Tangent = normalize((worldInverseTranspose * vec4(tangent.xyz, 0.0)).xyz);
 v_Bitangent = normalize(cross(v_Normal, v_Tangent) * tangent.w);
 }
#endif

@end


@export ecgl.common.normalMap.fragmentHeader

#ifdef NORMALMAP_ENABLED
uniform sampler2D normalMap;
varying vec3 v_Tangent;
varying vec3 v_Bitangent;
#endif

@end

@export ecgl.common.normalMap.fragmentMain
#ifdef NORMALMAP_ENABLED
 if (dot(v_Tangent, v_Tangent) > 0.0) {
 vec3 normalTexel = texture2D(normalMap, v_DetailTexcoord).xyz;
 if (dot(normalTexel, normalTexel) > 0.0) { N = normalTexel * 2.0 - 1.0;
 mat3 tbn = mat3(v_Tangent, v_Bitangent, v_Normal);
 N = normalize(tbn * N);
 }
 }
#endif
@end



@export ecgl.common.vertexAnimation.header

#ifdef VERTEX_ANIMATION
attribute vec3 prevPosition;
attribute vec3 prevNormal;
uniform float percent;
#endif

@end

@export ecgl.common.vertexAnimation.main

#ifdef VERTEX_ANIMATION
 vec3 pos = mix(prevPosition, position, percent);
 vec3 norm = mix(prevNormal, normal, percent);
#else
 vec3 pos = position;
 vec3 norm = normal;
#endif

@end


@export ecgl.common.ssaoMap.header
#ifdef SSAOMAP_ENABLED
uniform sampler2D ssaoMap;
uniform vec4 viewport : VIEWPORT;
#endif
@end

@export ecgl.common.ssaoMap.main
 float ao = 1.0;
#ifdef SSAOMAP_ENABLED
 ao = texture2D(ssaoMap, (gl_FragCoord.xy - viewport.xy) / viewport.zw).r;
#endif
@end




@export ecgl.common.diffuseLayer.header

#if (LAYER_DIFFUSEMAP_COUNT > 0)
uniform float layerDiffuseIntensity[LAYER_DIFFUSEMAP_COUNT];
uniform sampler2D layerDiffuseMap[LAYER_DIFFUSEMAP_COUNT];
#endif

@end

@export ecgl.common.emissiveLayer.header

#if (LAYER_EMISSIVEMAP_COUNT > 0)
uniform float layerEmissionIntensity[LAYER_EMISSIVEMAP_COUNT];
uniform sampler2D layerEmissiveMap[LAYER_EMISSIVEMAP_COUNT];
#endif

@end

@export ecgl.common.layers.header
@import ecgl.common.diffuseLayer.header
@import ecgl.common.emissiveLayer.header
@end

@export ecgl.common.diffuseLayer.main

#if (LAYER_DIFFUSEMAP_COUNT > 0)
 for (int _idx_ = 0; _idx_ < LAYER_DIFFUSEMAP_COUNT; _idx_++) {{
 float intensity = layerDiffuseIntensity[_idx_];
 vec4 texel2 = texture2D(layerDiffuseMap[_idx_], v_Texcoord);
 #ifdef SRGB_DECODE
 texel2 = sRGBToLinear(texel2);
 #endif
 albedoTexel.rgb = mix(albedoTexel.rgb, texel2.rgb * intensity, texel2.a);
 albedoTexel.a = texel2.a + (1.0 - texel2.a) * albedoTexel.a;
 }}
#endif

@end

@export ecgl.common.emissiveLayer.main

#if (LAYER_EMISSIVEMAP_COUNT > 0)
 for (int _idx_ = 0; _idx_ < LAYER_EMISSIVEMAP_COUNT; _idx_++)
 {{
 vec4 texel2 = texture2D(layerEmissiveMap[_idx_], v_Texcoord) * layerEmissionIntensity[_idx_];
 #ifdef SRGB_DECODE
 texel2 = sRGBToLinear(texel2);
 #endif
 float intensity = layerEmissionIntensity[_idx_];
 gl_FragColor.rgb += texel2.rgb * texel2.a * intensity;
 }}
#endif

@end
`),N.import(`@export ecgl.color.vertex

uniform mat4 worldViewProjection : WORLDVIEWPROJECTION;

@import ecgl.common.uv.header

attribute vec2 texcoord : TEXCOORD_0;
attribute vec3 position: POSITION;

@import ecgl.common.wireframe.vertexHeader

#ifdef VERTEX_COLOR
attribute vec4 a_Color : COLOR;
varying vec4 v_Color;
#endif

#ifdef VERTEX_ANIMATION
attribute vec3 prevPosition;
uniform float percent : 1.0;
#endif

#ifdef ATMOSPHERE_ENABLED
attribute vec3 normal: NORMAL;
uniform mat4 worldInverseTranspose : WORLDINVERSETRANSPOSE;
varying vec3 v_Normal;
#endif

void main()
{
#ifdef VERTEX_ANIMATION
 vec3 pos = mix(prevPosition, position, percent);
#else
 vec3 pos = position;
#endif

 gl_Position = worldViewProjection * vec4(pos, 1.0);

 @import ecgl.common.uv.main

#ifdef VERTEX_COLOR
 v_Color = a_Color;
#endif

#ifdef ATMOSPHERE_ENABLED
 v_Normal = normalize((worldInverseTranspose * vec4(normal, 0.0)).xyz);
#endif

 @import ecgl.common.wireframe.vertexMain

}

@end

@export ecgl.color.fragment

#define LAYER_DIFFUSEMAP_COUNT 0
#define LAYER_EMISSIVEMAP_COUNT 0

uniform sampler2D diffuseMap;
uniform sampler2D detailMap;

uniform vec4 color : [1.0, 1.0, 1.0, 1.0];

#ifdef ATMOSPHERE_ENABLED
uniform mat4 viewTranspose: VIEWTRANSPOSE;
uniform vec3 glowColor;
uniform float glowPower;
varying vec3 v_Normal;
#endif

#ifdef VERTEX_COLOR
varying vec4 v_Color;
#endif

@import ecgl.common.layers.header

@import ecgl.common.uv.fragmentHeader

@import ecgl.common.wireframe.fragmentHeader

@import clay.util.srgb

void main()
{
#ifdef SRGB_DECODE
 gl_FragColor = sRGBToLinear(color);
#else
 gl_FragColor = color;
#endif

#ifdef VERTEX_COLOR
 gl_FragColor *= v_Color;
#endif

 @import ecgl.common.albedo.main

 @import ecgl.common.diffuseLayer.main

 gl_FragColor *= albedoTexel;

#ifdef ATMOSPHERE_ENABLED
 float atmoIntensity = pow(1.0 - dot(v_Normal, (viewTranspose * vec4(0.0, 0.0, 1.0, 0.0)).xyz), glowPower);
 gl_FragColor.rgb += glowColor * atmoIntensity;
#endif

 @import ecgl.common.emissiveLayer.main

 @import ecgl.common.wireframe.fragmentMain

}
@end`),N.import(`/**
 * http: */

@export ecgl.lambert.vertex

@import ecgl.common.transformUniforms

@import ecgl.common.uv.header


@import ecgl.common.attributes

@import ecgl.common.wireframe.vertexHeader

#ifdef VERTEX_COLOR
attribute vec4 a_Color : COLOR;
varying vec4 v_Color;
#endif


@import ecgl.common.vertexAnimation.header


varying vec3 v_Normal;
varying vec3 v_WorldPosition;

void main()
{
 @import ecgl.common.uv.main

 @import ecgl.common.vertexAnimation.main


 gl_Position = worldViewProjection * vec4(pos, 1.0);

 v_Normal = normalize((worldInverseTranspose * vec4(norm, 0.0)).xyz);
 v_WorldPosition = (world * vec4(pos, 1.0)).xyz;

#ifdef VERTEX_COLOR
 v_Color = a_Color;
#endif

 @import ecgl.common.wireframe.vertexMain
}

@end


@export ecgl.lambert.fragment

#define LAYER_DIFFUSEMAP_COUNT 0
#define LAYER_EMISSIVEMAP_COUNT 0

#define NORMAL_UP_AXIS 1
#define NORMAL_FRONT_AXIS 2

@import ecgl.common.uv.fragmentHeader

varying vec3 v_Normal;
varying vec3 v_WorldPosition;

uniform sampler2D diffuseMap;
uniform sampler2D detailMap;

@import ecgl.common.layers.header

uniform float emissionIntensity: 1.0;

uniform vec4 color : [1.0, 1.0, 1.0, 1.0];

uniform mat4 viewInverse : VIEWINVERSE;

#ifdef ATMOSPHERE_ENABLED
uniform mat4 viewTranspose: VIEWTRANSPOSE;
uniform vec3 glowColor;
uniform float glowPower;
#endif

#ifdef AMBIENT_LIGHT_COUNT
@import clay.header.ambient_light
#endif
#ifdef AMBIENT_SH_LIGHT_COUNT
@import clay.header.ambient_sh_light
#endif

#ifdef DIRECTIONAL_LIGHT_COUNT
@import clay.header.directional_light
#endif

#ifdef VERTEX_COLOR
varying vec4 v_Color;
#endif


@import ecgl.common.ssaoMap.header

@import ecgl.common.bumpMap.header

@import clay.util.srgb

@import ecgl.common.wireframe.fragmentHeader

@import clay.plugin.compute_shadow_map

void main()
{
#ifdef SRGB_DECODE
 gl_FragColor = sRGBToLinear(color);
#else
 gl_FragColor = color;
#endif

#ifdef VERTEX_COLOR
 #ifdef SRGB_DECODE
 gl_FragColor *= sRGBToLinear(v_Color);
 #else
 gl_FragColor *= v_Color;
 #endif
#endif

 @import ecgl.common.albedo.main

 @import ecgl.common.diffuseLayer.main

 gl_FragColor *= albedoTexel;

 vec3 N = v_Normal;
#ifdef DOUBLE_SIDED
 vec3 eyePos = viewInverse[3].xyz;
 vec3 V = normalize(eyePos - v_WorldPosition);

 if (dot(N, V) < 0.0) {
 N = -N;
 }
#endif

 float ambientFactor = 1.0;

#ifdef BUMPMAP_ENABLED
 N = bumpNormal(v_WorldPosition, v_Normal, N);
 ambientFactor = dot(v_Normal, N);
#endif

 vec3 N2 = vec3(N.x, N[NORMAL_UP_AXIS], N[NORMAL_FRONT_AXIS]);

 vec3 diffuseColor = vec3(0.0, 0.0, 0.0);

 @import ecgl.common.ssaoMap.main

#ifdef AMBIENT_LIGHT_COUNT
 for(int i = 0; i < AMBIENT_LIGHT_COUNT; i++)
 {
 diffuseColor += ambientLightColor[i] * ambientFactor * ao;
 }
#endif
#ifdef AMBIENT_SH_LIGHT_COUNT
 for(int _idx_ = 0; _idx_ < AMBIENT_SH_LIGHT_COUNT; _idx_++)
 {{
 diffuseColor += calcAmbientSHLight(_idx_, N2) * ambientSHLightColor[_idx_] * ao;
 }}
#endif
#ifdef DIRECTIONAL_LIGHT_COUNT
#if defined(DIRECTIONAL_LIGHT_SHADOWMAP_COUNT)
 float shadowContribsDir[DIRECTIONAL_LIGHT_COUNT];
 if(shadowEnabled)
 {
 computeShadowOfDirectionalLights(v_WorldPosition, shadowContribsDir);
 }
#endif
 for(int i = 0; i < DIRECTIONAL_LIGHT_COUNT; i++)
 {
 vec3 lightDirection = -directionalLightDirection[i];
 vec3 lightColor = directionalLightColor[i];

 float shadowContrib = 1.0;
#if defined(DIRECTIONAL_LIGHT_SHADOWMAP_COUNT)
 if (shadowEnabled)
 {
 shadowContrib = shadowContribsDir[i];
 }
#endif

 float ndl = dot(N, normalize(lightDirection)) * shadowContrib;

 diffuseColor += lightColor * clamp(ndl, 0.0, 1.0);
 }
#endif

 gl_FragColor.rgb *= diffuseColor;

#ifdef ATMOSPHERE_ENABLED
 float atmoIntensity = pow(1.0 - dot(v_Normal, (viewTranspose * vec4(0.0, 0.0, 1.0, 0.0)).xyz), glowPower);
 gl_FragColor.rgb += glowColor * atmoIntensity;
#endif

 @import ecgl.common.emissiveLayer.main

 @import ecgl.common.wireframe.fragmentMain
}

@end`),N.import(`@export ecgl.realistic.vertex

@import ecgl.common.transformUniforms

@import ecgl.common.uv.header

@import ecgl.common.attributes


@import ecgl.common.wireframe.vertexHeader

#ifdef VERTEX_COLOR
attribute vec4 a_Color : COLOR;
varying vec4 v_Color;
#endif

#ifdef NORMALMAP_ENABLED
attribute vec4 tangent : TANGENT;
varying vec3 v_Tangent;
varying vec3 v_Bitangent;
#endif

@import ecgl.common.vertexAnimation.header

varying vec3 v_Normal;
varying vec3 v_WorldPosition;

void main()
{

 @import ecgl.common.uv.main

 @import ecgl.common.vertexAnimation.main

 gl_Position = worldViewProjection * vec4(pos, 1.0);

 v_Normal = normalize((worldInverseTranspose * vec4(norm, 0.0)).xyz);
 v_WorldPosition = (world * vec4(pos, 1.0)).xyz;

#ifdef VERTEX_COLOR
 v_Color = a_Color;
#endif

#ifdef NORMALMAP_ENABLED
 v_Tangent = normalize((worldInverseTranspose * vec4(tangent.xyz, 0.0)).xyz);
 v_Bitangent = normalize(cross(v_Normal, v_Tangent) * tangent.w);
#endif

 @import ecgl.common.wireframe.vertexMain

}

@end



@export ecgl.realistic.fragment

#define LAYER_DIFFUSEMAP_COUNT 0
#define LAYER_EMISSIVEMAP_COUNT 0
#define PI 3.14159265358979
#define ROUGHNESS_CHANEL 0
#define METALNESS_CHANEL 1

#define NORMAL_UP_AXIS 1
#define NORMAL_FRONT_AXIS 2

#ifdef VERTEX_COLOR
varying vec4 v_Color;
#endif

@import ecgl.common.uv.fragmentHeader

varying vec3 v_Normal;
varying vec3 v_WorldPosition;

uniform sampler2D diffuseMap;

uniform sampler2D detailMap;
uniform sampler2D metalnessMap;
uniform sampler2D roughnessMap;

@import ecgl.common.layers.header

uniform float emissionIntensity: 1.0;

uniform vec4 color : [1.0, 1.0, 1.0, 1.0];

uniform float metalness : 0.0;
uniform float roughness : 0.5;

uniform mat4 viewInverse : VIEWINVERSE;

#ifdef ATMOSPHERE_ENABLED
uniform mat4 viewTranspose: VIEWTRANSPOSE;
uniform vec3 glowColor;
uniform float glowPower;
#endif

#ifdef AMBIENT_LIGHT_COUNT
@import clay.header.ambient_light
#endif

#ifdef AMBIENT_SH_LIGHT_COUNT
@import clay.header.ambient_sh_light
#endif

#ifdef AMBIENT_CUBEMAP_LIGHT_COUNT
@import clay.header.ambient_cubemap_light
#endif

#ifdef DIRECTIONAL_LIGHT_COUNT
@import clay.header.directional_light
#endif

@import ecgl.common.normalMap.fragmentHeader

@import ecgl.common.ssaoMap.header

@import ecgl.common.bumpMap.header

@import clay.util.srgb

@import clay.util.rgbm

@import ecgl.common.wireframe.fragmentHeader

@import clay.plugin.compute_shadow_map

vec3 F_Schlick(float ndv, vec3 spec) {
 return spec + (1.0 - spec) * pow(1.0 - ndv, 5.0);
}

float D_Phong(float g, float ndh) {
 float a = pow(8192.0, g);
 return (a + 2.0) / 8.0 * pow(ndh, a);
}

void main()
{
 vec4 albedoColor = color;

 vec3 eyePos = viewInverse[3].xyz;
 vec3 V = normalize(eyePos - v_WorldPosition);
#ifdef VERTEX_COLOR
 #ifdef SRGB_DECODE
 albedoColor *= sRGBToLinear(v_Color);
 #else
 albedoColor *= v_Color;
 #endif
#endif

 @import ecgl.common.albedo.main

 @import ecgl.common.diffuseLayer.main

 albedoColor *= albedoTexel;

 float m = metalness;

#ifdef METALNESSMAP_ENABLED
 float m2 = texture2D(metalnessMap, v_DetailTexcoord)[METALNESS_CHANEL];
 m = clamp(m2 + (m - 0.5) * 2.0, 0.0, 1.0);
#endif

 vec3 baseColor = albedoColor.rgb;
 albedoColor.rgb = baseColor * (1.0 - m);
 vec3 specFactor = mix(vec3(0.04), baseColor, m);

 float g = 1.0 - roughness;

#ifdef ROUGHNESSMAP_ENABLED
 float g2 = 1.0 - texture2D(roughnessMap, v_DetailTexcoord)[ROUGHNESS_CHANEL];
 g = clamp(g2 + (g - 0.5) * 2.0, 0.0, 1.0);
#endif

 vec3 N = v_Normal;

#ifdef DOUBLE_SIDED
 if (dot(N, V) < 0.0) {
 N = -N;
 }
#endif

 float ambientFactor = 1.0;

#ifdef BUMPMAP_ENABLED
 N = bumpNormal(v_WorldPosition, v_Normal, N);
 ambientFactor = dot(v_Normal, N);
#endif

@import ecgl.common.normalMap.fragmentMain

 vec3 N2 = vec3(N.x, N[NORMAL_UP_AXIS], N[NORMAL_FRONT_AXIS]);

 vec3 diffuseTerm = vec3(0.0);
 vec3 specularTerm = vec3(0.0);

 float ndv = clamp(dot(N, V), 0.0, 1.0);
 vec3 fresnelTerm = F_Schlick(ndv, specFactor);

 @import ecgl.common.ssaoMap.main

#ifdef AMBIENT_LIGHT_COUNT
 for(int _idx_ = 0; _idx_ < AMBIENT_LIGHT_COUNT; _idx_++)
 {{
 diffuseTerm += ambientLightColor[_idx_] * ambientFactor * ao;
 }}
#endif

#ifdef AMBIENT_SH_LIGHT_COUNT
 for(int _idx_ = 0; _idx_ < AMBIENT_SH_LIGHT_COUNT; _idx_++)
 {{
 diffuseTerm += calcAmbientSHLight(_idx_, N2) * ambientSHLightColor[_idx_] * ao;
 }}
#endif

#ifdef DIRECTIONAL_LIGHT_COUNT
#if defined(DIRECTIONAL_LIGHT_SHADOWMAP_COUNT)
 float shadowContribsDir[DIRECTIONAL_LIGHT_COUNT];
 if(shadowEnabled)
 {
 computeShadowOfDirectionalLights(v_WorldPosition, shadowContribsDir);
 }
#endif
 for(int _idx_ = 0; _idx_ < DIRECTIONAL_LIGHT_COUNT; _idx_++)
 {{
 vec3 L = -directionalLightDirection[_idx_];
 vec3 lc = directionalLightColor[_idx_];

 vec3 H = normalize(L + V);
 float ndl = clamp(dot(N, normalize(L)), 0.0, 1.0);
 float ndh = clamp(dot(N, H), 0.0, 1.0);

 float shadowContrib = 1.0;
#if defined(DIRECTIONAL_LIGHT_SHADOWMAP_COUNT)
 if (shadowEnabled)
 {
 shadowContrib = shadowContribsDir[_idx_];
 }
#endif

 vec3 li = lc * ndl * shadowContrib;

 diffuseTerm += li;
 specularTerm += li * fresnelTerm * D_Phong(g, ndh);
 }}
#endif


#ifdef AMBIENT_CUBEMAP_LIGHT_COUNT
 vec3 L = reflect(-V, N);
 L = vec3(L.x, L[NORMAL_UP_AXIS], L[NORMAL_FRONT_AXIS]);
 float rough2 = clamp(1.0 - g, 0.0, 1.0);
 float bias2 = rough2 * 5.0;
 vec2 brdfParam2 = texture2D(ambientCubemapLightBRDFLookup[0], vec2(rough2, ndv)).xy;
 vec3 envWeight2 = specFactor * brdfParam2.x + brdfParam2.y;
 vec3 envTexel2;
 for(int _idx_ = 0; _idx_ < AMBIENT_CUBEMAP_LIGHT_COUNT; _idx_++)
 {{
 envTexel2 = RGBMDecode(textureCubeLodEXT(ambientCubemapLightCubemap[_idx_], L, bias2), 8.12);
 specularTerm += ambientCubemapLightColor[_idx_] * envTexel2 * envWeight2 * ao;
 }}
#endif

 gl_FragColor.rgb = albedoColor.rgb * diffuseTerm + specularTerm;
 gl_FragColor.a = albedoColor.a;

#ifdef ATMOSPHERE_ENABLED
 float atmoIntensity = pow(1.0 - dot(v_Normal, (viewTranspose * vec4(0.0, 0.0, 1.0, 0.0)).xyz), glowPower);
 gl_FragColor.rgb += glowColor * atmoIntensity;
#endif

#ifdef SRGB_ENCODE
 gl_FragColor = linearTosRGB(gl_FragColor);
#endif

 @import ecgl.common.emissiveLayer.main

 @import ecgl.common.wireframe.fragmentMain
}

@end`),N.import(`@export ecgl.hatching.vertex

@import ecgl.realistic.vertex

@end


@export ecgl.hatching.fragment

#define NORMAL_UP_AXIS 1
#define NORMAL_FRONT_AXIS 2

@import ecgl.common.uv.fragmentHeader

varying vec3 v_Normal;
varying vec3 v_WorldPosition;

uniform vec4 color : [0.0, 0.0, 0.0, 1.0];
uniform vec4 paperColor : [1.0, 1.0, 1.0, 1.0];

uniform mat4 viewInverse : VIEWINVERSE;

#ifdef AMBIENT_LIGHT_COUNT
@import clay.header.ambient_light
#endif
#ifdef AMBIENT_SH_LIGHT_COUNT
@import clay.header.ambient_sh_light
#endif

#ifdef DIRECTIONAL_LIGHT_COUNT
@import clay.header.directional_light
#endif

#ifdef VERTEX_COLOR
varying vec4 v_Color;
#endif


@import ecgl.common.ssaoMap.header

@import ecgl.common.bumpMap.header

@import clay.util.srgb

@import ecgl.common.wireframe.fragmentHeader

@import clay.plugin.compute_shadow_map

uniform sampler2D hatch1;
uniform sampler2D hatch2;
uniform sampler2D hatch3;
uniform sampler2D hatch4;
uniform sampler2D hatch5;
uniform sampler2D hatch6;

float shade(in float tone) {
 vec4 c = vec4(1. ,1., 1., 1.);
 float step = 1. / 6.;
 vec2 uv = v_DetailTexcoord;
 if (tone <= step / 2.0) {
 c = mix(vec4(0.), texture2D(hatch6, uv), 12. * tone);
 }
 else if (tone <= step) {
 c = mix(texture2D(hatch6, uv), texture2D(hatch5, uv), 6. * tone);
 }
 if(tone > step && tone <= 2. * step){
 c = mix(texture2D(hatch5, uv), texture2D(hatch4, uv) , 6. * (tone - step));
 }
 if(tone > 2. * step && tone <= 3. * step){
 c = mix(texture2D(hatch4, uv), texture2D(hatch3, uv), 6. * (tone - 2. * step));
 }
 if(tone > 3. * step && tone <= 4. * step){
 c = mix(texture2D(hatch3, uv), texture2D(hatch2, uv), 6. * (tone - 3. * step));
 }
 if(tone > 4. * step && tone <= 5. * step){
 c = mix(texture2D(hatch2, uv), texture2D(hatch1, uv), 6. * (tone - 4. * step));
 }
 if(tone > 5. * step){
 c = mix(texture2D(hatch1, uv), vec4(1.), 6. * (tone - 5. * step));
 }

 return c.r;
}

const vec3 w = vec3(0.2125, 0.7154, 0.0721);

void main()
{
#ifdef SRGB_DECODE
 vec4 inkColor = sRGBToLinear(color);
#else
 vec4 inkColor = color;
#endif

#ifdef VERTEX_COLOR
 #ifdef SRGB_DECODE
 inkColor *= sRGBToLinear(v_Color);
 #else
 inkColor *= v_Color;
 #endif
#endif

 vec3 N = v_Normal;
#ifdef DOUBLE_SIDED
 vec3 eyePos = viewInverse[3].xyz;
 vec3 V = normalize(eyePos - v_WorldPosition);

 if (dot(N, V) < 0.0) {
 N = -N;
 }
#endif

 float tone = 0.0;

 float ambientFactor = 1.0;

#ifdef BUMPMAP_ENABLED
 N = bumpNormal(v_WorldPosition, v_Normal, N);
 ambientFactor = dot(v_Normal, N);
#endif

 vec3 N2 = vec3(N.x, N[NORMAL_UP_AXIS], N[NORMAL_FRONT_AXIS]);

 @import ecgl.common.ssaoMap.main

#ifdef AMBIENT_LIGHT_COUNT
 for(int i = 0; i < AMBIENT_LIGHT_COUNT; i++)
 {
 tone += dot(ambientLightColor[i], w) * ambientFactor * ao;
 }
#endif
#ifdef AMBIENT_SH_LIGHT_COUNT
 for(int _idx_ = 0; _idx_ < AMBIENT_SH_LIGHT_COUNT; _idx_++)
 {{
 tone += dot(calcAmbientSHLight(_idx_, N2) * ambientSHLightColor[_idx_], w) * ao;
 }}
#endif
#ifdef DIRECTIONAL_LIGHT_COUNT
#if defined(DIRECTIONAL_LIGHT_SHADOWMAP_COUNT)
 float shadowContribsDir[DIRECTIONAL_LIGHT_COUNT];
 if(shadowEnabled)
 {
 computeShadowOfDirectionalLights(v_WorldPosition, shadowContribsDir);
 }
#endif
 for(int i = 0; i < DIRECTIONAL_LIGHT_COUNT; i++)
 {
 vec3 lightDirection = -directionalLightDirection[i];
 float lightTone = dot(directionalLightColor[i], w);

 float shadowContrib = 1.0;
#if defined(DIRECTIONAL_LIGHT_SHADOWMAP_COUNT)
 if (shadowEnabled)
 {
 shadowContrib = shadowContribsDir[i];
 }
#endif

 float ndl = dot(N, normalize(lightDirection)) * shadowContrib;

 tone += lightTone * clamp(ndl, 0.0, 1.0);
 }
#endif

 gl_FragColor = mix(inkColor, paperColor, shade(clamp(tone, 0.0, 1.0)));
 }
@end
`),N.import(`@export ecgl.sm.depth.vertex

uniform mat4 worldViewProjection : WORLDVIEWPROJECTION;

attribute vec3 position : POSITION;
attribute vec2 texcoord : TEXCOORD_0;

#ifdef VERTEX_ANIMATION
attribute vec3 prevPosition;
uniform float percent : 1.0;
#endif

varying vec4 v_ViewPosition;
varying vec2 v_Texcoord;

void main(){

#ifdef VERTEX_ANIMATION
 vec3 pos = mix(prevPosition, position, percent);
#else
 vec3 pos = position;
#endif

 v_ViewPosition = worldViewProjection * vec4(pos, 1.0);
 gl_Position = v_ViewPosition;

 v_Texcoord = texcoord;

}
@end



@export ecgl.sm.depth.fragment

@import clay.sm.depth.fragment

@end`);var hp=br.prototype.addToScene,cp=br.prototype.removeFromScene;br.prototype.addToScene=function(t){if(hp.call(this,t),this.__zr){var e=this.__zr;t.traverse(function(r){r.__zr=e,r.addAnimatorsToZr&&r.addAnimatorsToZr(e)})}},br.prototype.removeFromScene=function(t){cp.call(this,t),t.traverse(function(e){var r=e.__zr;e.__zr=null,r&&e.removeAnimatorsFromZr&&e.removeAnimatorsFromZr(r)})},ve.prototype.setTextureImage=function(t,e,r,n){if(this.shader){var i,a,o=r.getZr(),s=this;return s.autoUpdateTextureStatus=!1,s.disableTexture(t),(a=e)&&a!=="none"&&(i=q.loadTexture(e,r,n,function(l){s.enableTexture(t),o&&o.refresh()}),s.set(t,i)),i}};var q={};q.Renderer=hi,q.Node=qe,q.Mesh=Hr,q.Shader=N,q.Material=ve,q.Texture=V,q.Texture2D=K,q.Geometry=st,q.SphereGeometry=Kf,q.PlaneGeometry=za,q.CubeGeometry=Ph,q.AmbientLight=Qf,q.DirectionalLight=tp,q.PointLight=rp,q.SpotLight=ip,q.PerspectiveCamera=zt,q.OrthographicCamera=Mn,q.Vector2=he,q.Vector3=B,q.Vector4=ap,q.Quaternion=Mh,q.Matrix2=op,q.Matrix2d=sp,q.Matrix3=lp,q.Matrix4=k,q.Plane=Ch,q.Ray=wa,q.BoundingBox=Jt,q.Frustum=Hs;var Mo=null;function su(t){return Math.pow(2,Math.round(Math.log(t)/Math.LN2))}function lu(t){if((t.wrapS===V.REPEAT||t.wrapT===V.REPEAT)&&t.image){var e=su(t.width),r=su(t.height);if(e!==t.width||r!==t.height){var n=document.createElement("canvas");n.width=e,n.height=r,n.getContext("2d").drawImage(t.image,0,0,e,r),t.image=n}}}q.loadTexture=function(t,e,r,n){typeof r=="function"&&(n=r,r={}),r=r||{};for(var i=Object.keys(r).sort(),a="",o=0;o<i.length;o++)a+=i[o]+"_"+r[i[o]]+"_";var s,l=e.__textureCache=e.__textureCache||new Dc(20);if((s=t).getZr&&s.setOption){var u=t.__textureid__;if(c=l.get(a+u))c.texture.surface.setECharts(t),n&&n(c.texture);else{var h=new zf(t);for(h.onupdate=function(){e.getZr().refresh()},c={texture:h.getTexture()},o=0;o<i.length;o++)c.texture[i[o]]=r[i[o]];u=t.__textureid__||"__ecgl_ec__"+c.texture.__uid__,t.__textureid__=u,l.put(a+u,c),n&&n(c.texture)}return c.texture}if(ou(t)){var c;if(u=t.__textureid__,!(c=l.get(a+u))){for(c={texture:new q.Texture2D({image:t})},o=0;o<i.length;o++)c.texture[i[o]]=r[i[o]];u=t.__textureid__||"__ecgl_image__"+c.texture.__uid__,t.__textureid__=u,l.put(a+u,c),lu(c.texture),n&&n(c.texture)}return c.texture}if(c=l.get(a+t))c.callbacks?c.callbacks.push(n):n&&n(c.texture);else if(t.match(/.hdr$|^data:application\/octet-stream/)){c={callbacks:[n]};var d=jr.loadTexture(t,{exposure:r.exposure,fileType:"hdr"},function(){d.dirty(),c.callbacks.forEach(function(m){m&&m(d)}),c.callbacks=null});c.texture=d,l.put(a+t,c)}else{for(d=new q.Texture2D({image:new Image}),o=0;o<i.length;o++)d[i[o]]=r[i[o]];c={texture:d,callbacks:[n]};var f=d.image;f.onload=function(){d.image=f,lu(d),d.dirty(),c.callbacks.forEach(function(m){m&&m(d)}),c.callbacks=null},f.crossOrigin="Anonymous",f.src=t,d.image=Mo!==null?Mo:Mo=jr.createBlank("rgba(255,255,255,0)").image,l.put(a+t,c)}return c.texture},q.createAmbientCubemap=function(t,e,r,n){var i=(t=t||{}).texture,a=tt(t.exposure,1),o=new Vf({intensity:tt(t.specularIntensity,1)}),s=new jf({intensity:tt(t.diffuseIntensity,1),coefficients:[.844,.712,.691,-.037,.083,.167,.343,.288,.299,-.041,-.021,-.009,-.003,-.041,-.064,-.011,-.007,-.004,-.031,.034,.081,-.06,-.049,-.06,.046,.056,.05]});return o.cubemap=q.loadTexture(i,r,{exposure:a},function(){o.cubemap.flipY=!1,o.prefilter(e,32),s.coefficients=Zf.projectEnvironmentMap(e,o.cubemap,{lod:1}),n&&n()}),{specular:o,diffuse:s}},q.createBlankTexture=jr.createBlank,q.isImage=ou,q.additiveBlend=function(t){t.blendEquation(t.FUNC_ADD),t.blendFunc(t.SRC_ALPHA,t.ONE)},q.parseColor=function(t,e){return t instanceof Array?(e||(e=[]),e[0]=t[0],e[1]=t[1],e[2]=t[2],t.length>3?e[3]=t[3]:e[3]=1,e):((e=$u(t||"#000",e)||[0,0,0,0])[0]/=255,e[1]/=255,e[2]/=255,e)},q.directionFromAlphaBeta=function(t,e){var r=t/180*Math.PI+Math.PI/2,n=-e/180*Math.PI+Math.PI/2,i=[],a=Math.sin(r);return i[0]=a*Math.cos(n),i[1]=-Math.cos(r),i[2]=a*Math.sin(n),i},q.getShadowResolution=function(t){var e=1024;switch(t){case"low":e=512;break;case"medium":break;case"high":e=2048;break;case"ultra":e=4096}return e},q.COMMON_SHADERS=["lambert","color","realistic","hatching","shadow"],q.createShader=function(t){t==="ecgl.shadow"&&(t="ecgl.displayShadow");var e=N.source(t+".vertex"),r=N.source(t+".fragment");e||console.error("Vertex shader of '%s' not exits",t),r||console.error("Fragment shader of '%s' not exits",t);var n=new N(e,r);return n.name=t,n},q.createMaterial=function(t,e){e instanceof Array||(e=[e]);var r=q.createShader(t),n=new ve({shader:r});return e.forEach(function(i){typeof i=="string"&&n.define(i)}),n},q.setMaterialFromModel=function(t,e,r,n){e.autoUpdateTextureStatus=!1;var i=r.getModel(t+"Material"),a=i.get("detailTexture"),o=tt(i.get("textureTiling"),1),s=tt(i.get("textureOffset"),0);typeof o=="number"&&(o=[o,o]),typeof s=="number"&&(s=[s,s]);var l=o[0]>1||o[1]>1?q.Texture.REPEAT:q.Texture.CLAMP_TO_EDGE,u={anisotropic:8,wrapS:l,wrapT:l};if(t==="realistic"){var h=i.get("roughness"),c=i.get("metalness");c!=null?isNaN(c)&&(e.setTextureImage("metalnessMap",c,n,u),c=tt(i.get("metalnessAdjust"),.5)):c=0,h!=null?isNaN(h)&&(e.setTextureImage("roughnessMap",h,n,u),h=tt(i.get("roughnessAdjust"),.5)):h=.5;var d=i.get("normalTexture");e.setTextureImage("detailMap",a,n,u),e.setTextureImage("normalMap",d,n,u),e.set({roughness:h,metalness:c,detailUvRepeat:o,detailUvOffset:s})}else if(t==="lambert")e.setTextureImage("detailMap",a,n,u),e.set({detailUvRepeat:o,detailUvOffset:s});else if(t==="color")e.setTextureImage("detailMap",a,n,u),e.set({detailUvRepeat:o,detailUvOffset:s});else if(t==="hatching"){var f=i.get("hatchingTextures")||[];f.length;for(var m=0;m<6;m++)e.setTextureImage("hatch"+(m+1),f[m],n,{anisotropic:8,wrapS:q.Texture.REPEAT,wrapT:q.Texture.REPEAT});e.set({detailUvRepeat:o,detailUvOffset:s})}},q.updateVertexAnimation=function(t,e,r,n){var i=n.get("animation"),a=n.get("animationDurationUpdate"),o=n.get("animationEasingUpdate"),s=r.shadowDepthMaterial;if(i&&e&&a>0&&e.geometry.vertexCount===r.geometry.vertexCount){r.material.define("vertex","VERTEX_ANIMATION"),r.ignorePreZ=!0,s&&s.define("vertex","VERTEX_ANIMATION");for(var l=0;l<t.length;l++)r.geometry.attributes[t[l][0]].value=e.geometry.attributes[t[l][1]].value;r.geometry.dirty(),r.__percent=0,r.material.set("percent",0),r.stopAnimation(),r.animate().when(a,{__percent:1}).during(function(){r.material.set("percent",r.__percent),s&&s.set("percent",r.__percent)}).done(function(){r.ignorePreZ=!1,r.material.undefine("vertex","VERTEX_ANIMATION"),s&&s.undefine("vertex","VERTEX_ANIMATION")}).start(o)}else r.material.undefine("vertex","VERTEX_ANIMATION"),s&&s.undefine("vertex","VERTEX_ANIMATION")};const T=q;var gt=function(t,e){this.id=t,this.zr=e;try{this.renderer=new hi({clearBit:0,devicePixelRatio:e.painter.dpr,preserveDrawingBuffer:!0,premultipliedAlpha:!0}),this.renderer.resize(e.painter.getWidth(),e.painter.getHeight())}catch(n){return this.renderer=null,this.dom=document.createElement("div"),this.dom.style.cssText="position:absolute; left: 0; top: 0; right: 0; bottom: 0;",this.dom.className="ecgl-nowebgl",this.dom.innerHTML="Sorry, your browser does not support WebGL",void console.error(n)}this.onglobalout=this.onglobalout.bind(this),e.on("globalout",this.onglobalout),this.dom=this.renderer.canvas;var r=this.dom.style;r.position="absolute",r.left="0",r.top="0",this.views=[],this._picking=new xf({renderer:this.renderer}),this._viewsToDispose=[],this._accumulatingId=0,this._zrEventProxy=new th({shape:{x:-1,y:-1,width:2,height:2},__isGLToZRProxy:!0}),this._backgroundColor=null,this._disposed=!1};function uu(t){var e=t.__zr;t.__zr=null,e&&t.removeAnimatorsFromZr&&t.removeAnimatorsFromZr(e)}gt.prototype.setUnpainted=function(){},gt.prototype.addView=function(t){if(t.layer!==this){var e=this._viewsToDispose.indexOf(t);e>=0&&this._viewsToDispose.splice(e,1),this.views.push(t),t.layer=this;var r=this.zr;t.scene.traverse(function(n){n.__zr=r,n.addAnimatorsToZr&&n.addAnimatorsToZr(r)})}},gt.prototype.removeView=function(t){if(t.layer===this){var e=this.views.indexOf(t);e>=0&&(this.views.splice(e,1),t.scene.traverse(uu,this),t.layer=null,this._viewsToDispose.push(t))}},gt.prototype.removeViewsAll=function(){this.views.forEach(function(t){t.scene.traverse(uu,this),t.layer=null,this._viewsToDispose.push(t)},this),this.views.length=0},gt.prototype.resize=function(t,e){this.renderer.resize(t,e)},gt.prototype.clear=function(){var t=this.renderer.gl,e=this._backgroundColor||[0,0,0,0];t.clearColor(e[0],e[1],e[2],e[3]),t.depthMask(!0),t.colorMask(!0,!0,!0,!0),t.clear(t.DEPTH_BUFFER_BIT|t.COLOR_BUFFER_BIT)},gt.prototype.clearDepth=function(){var t=this.renderer.gl;t.clear(t.DEPTH_BUFFER_BIT)},gt.prototype.clearColor=function(){var t=this.renderer.gl;t.clearColor(0,0,0,0),t.clear(t.COLOR_BUFFER_BIT)},gt.prototype.needsRefresh=function(){this.zr.refresh()},gt.prototype.refresh=function(t){this._backgroundColor=t?T.parseColor(t):[0,0,0,0],this.renderer.clearColor=this._backgroundColor;for(var e=0;e<this.views.length;e++)this.views[e].prepareRender(this.renderer);for(this._doRender(!1),this._trackAndClean(),e=0;e<this._viewsToDispose.length;e++)this._viewsToDispose[e].dispose(this.renderer);this._viewsToDispose.length=0,this._startAccumulating()},gt.prototype.renderToCanvas=function(t){this._startAccumulating(!0),t.drawImage(this.dom,0,0,t.canvas.width,t.canvas.height)},gt.prototype._doRender=function(t){this.clear(),this.renderer.saveViewport();for(var e=0;e<this.views.length;e++)this.views[e].render(this.renderer,t);this.renderer.restoreViewport()},gt.prototype._stopAccumulating=function(){this._accumulatingId=0,clearTimeout(this._accumulatingTimeout)};var dp=1;function Xi(t){for(var e=0;e<t.length;e++)t[e].__used__=0}function qi(t,e){for(var r=0;r<e.length;r++)e[r].__used__||e[r].dispose(t)}function Zi(t,e){t.__used__=t.__used__||0,t.__used__++,t.__used__===1&&e.push(t)}function fp(t,e,r){var n,i;t.traverse(function(o){if(o.isRenderable()){var s=o.geometry,l=o.material;if(l!==n)for(var u=l.getTextureUniforms(),h=0;h<u.length;h++){var c=u[h],d=l.uniforms[c].value;if(d){if(d instanceof V)Zi(d,e);else if(d instanceof Array)for(var f=0;f<d.length;f++)d[f]instanceof V&&Zi(d[f],e)}}s!==i&&Zi(s,r),n=l,i=s}});for(var a=0;a<t.lights.length;a++)t.lights[a].cubemap&&Zi(t.lights[a].cubemap,e)}gt.prototype._startAccumulating=function(t){var e=this;this._stopAccumulating();for(var r=!1,n=0;n<this.views.length;n++)r=this.views[n].needsAccumulate()||r;function i(a){if(e._accumulatingId&&a===e._accumulatingId){for(var o=!0,s=0;s<e.views.length;s++)o=e.views[s].isAccumulateFinished()&&r;o||(e._doRender(!0),t?i(a):jo(function(){i(a)}))}}r&&(this._accumulatingId=dp++,t?i(e._accumulatingId):this._accumulatingTimeout=setTimeout(function(){i(e._accumulatingId)},50))},gt.prototype._trackAndClean=function(){var t=[],e=[];this._textureList&&(Xi(this._textureList),Xi(this._geometriesList));for(var r=0;r<this.views.length;r++)fp(this.views[r].scene,t,e);this._textureList&&(qi(this.renderer,this._textureList),qi(this.renderer,this._geometriesList)),this._textureList=t,this._geometriesList=e},gt.prototype.dispose=function(){this._disposed||(this._stopAccumulating(),this._textureList&&(Xi(this._textureList),Xi(this._geometriesList),qi(this.renderer,this._textureList),qi(this.renderer,this._geometriesList)),this.zr.off("globalout",this.onglobalout),this._disposed=!0)},gt.prototype.onmousedown=function(t){if(!t.target||!t.target.__isGLToZRProxy){t=t.event;var e=this.pickObject(t.offsetX,t.offsetY);e&&(this._dispatchEvent("mousedown",t,e),this._dispatchDataEvent("mousedown",t,e)),this._downX=t.offsetX,this._downY=t.offsetY}},gt.prototype.onmousemove=function(t){if(!t.target||!t.target.__isGLToZRProxy){t=t.event;var e=this.pickObject(t.offsetX,t.offsetY),r=e&&e.target,n=this._hovered;this._hovered=e,n&&r!==n.target&&(n.relatedTarget=r,this._dispatchEvent("mouseout",t,n),this.zr.setCursorStyle("default")),this._dispatchEvent("mousemove",t,e),e&&(this.zr.setCursorStyle("pointer"),n&&r===n.target||this._dispatchEvent("mouseover",t,e)),this._dispatchDataEvent("mousemove",t,e)}},gt.prototype.onmouseup=function(t){if(!t.target||!t.target.__isGLToZRProxy){t=t.event;var e=this.pickObject(t.offsetX,t.offsetY);e&&(this._dispatchEvent("mouseup",t,e),this._dispatchDataEvent("mouseup",t,e)),this._upX=t.offsetX,this._upY=t.offsetY}},gt.prototype.onclick=gt.prototype.dblclick=function(t){if(!t.target||!t.target.__isGLToZRProxy){var e=this._upX-this._downX,r=this._upY-this._downY;if(!(Math.sqrt(e*e+r*r)>20)){t=t.event;var n=this.pickObject(t.offsetX,t.offsetY);n&&(this._dispatchEvent(t.type,t,n),this._dispatchDataEvent(t.type,t,n));var i=this._clickToSetFocusPoint(t);i&&i.view.setDOFFocusOnPoint(i.distance)&&this.zr.refresh()}}},gt.prototype._clickToSetFocusPoint=function(t){for(var e=this.renderer,r=e.viewport,n=this.views.length-1;n>=0;n--){var i=this.views[n];if(i.hasDOF()&&i.containPoint(t.offsetX,t.offsetY)){this._picking.scene=i.scene,this._picking.camera=i.camera,e.viewport=i.viewport;var a=this._picking.pick(t.offsetX,t.offsetY,!0);if(a)return a.view=i,a}}e.viewport=r},gt.prototype.onglobalout=function(t){var e=this._hovered;e&&this._dispatchEvent("mouseout",t,{target:e.target})},gt.prototype.pickObject=function(t,e){for(var r=[],n=this.renderer,i=n.viewport,a=0;a<this.views.length;a++){var o=this.views[a];o.containPoint(t,e)&&(this._picking.scene=o.scene,this._picking.camera=o.camera,n.viewport=o.viewport,this._picking.pickAll(t,e,r))}return n.viewport=i,r.sort(function(s,l){return s.distance-l.distance}),r[0]},gt.prototype._dispatchEvent=function(t,e,r){r||(r={});var n=r.target;for(r.cancelBubble=!1,r.event=e,r.type=t,r.offsetX=e.offsetX,r.offsetY=e.offsetY;n&&(n.trigger(t,r),n=n.getParent(),!r.cancelBubble););this._dispatchToView(t,r)},gt.prototype._dispatchDataEvent=function(t,e,r){var n=r&&r.target,i=n&&n.dataIndex,a=n&&n.seriesIndex,o=n&&n.eventData,s=!1,l=this._zrEventProxy;l.x=e.offsetX,l.y=e.offsetY,l.update();var u={target:l};const h=Cc(l);t==="mousemove"&&(i!=null?i!==this._lastDataIndex&&(parseInt(this._lastDataIndex,10)>=0&&(h.dataIndex=this._lastDataIndex,h.seriesIndex=this._lastSeriesIndex,this.zr.handler.dispatchToElement(u,"mouseout",e)),s=!0):o!=null&&o!==this._lastEventData&&(this._lastEventData!=null&&(h.eventData=this._lastEventData,this.zr.handler.dispatchToElement(u,"mouseout",e)),s=!0),this._lastEventData=o,this._lastDataIndex=i,this._lastSeriesIndex=a),h.eventData=o,h.dataIndex=i,h.seriesIndex=a,(o!=null||parseInt(i,10)>=0&&parseInt(a,10)>=0)&&(this.zr.handler.dispatchToElement(u,t,e),s&&this.zr.handler.dispatchToElement(u,"mouseover",e))},gt.prototype._dispatchToView=function(t,e){for(var r=0;r<this.views.length;r++)this.views[r].containPoint(e.offsetX,e.offsetY)&&this.views[r].trigger(t,e)},Object.assign(gt.prototype,Rs);const hu=gt;var pp=["bar3D","line3D","map3D","scatter3D","surface","lines3D","scatterGL","scatter3D"];function jn(t,e){if(t&&t[e]&&(t[e].normal||t[e].emphasis)){var r=t[e].normal,n=t[e].emphasis;r&&(t[e]=r),n&&(t.emphasis=t.emphasis||{},t.emphasis[e]=n)}}function Yi(t){t&&(t instanceof Array||(t=[t]),je(t,function(e){if(e.axisLabel){var r=e.axisLabel;Object.assign(r,r.textStyle),r.textStyle=null}}))}function cu(t){this._layers={},this._zr=t}cu.prototype.update=function(t,e){var r=this,n=e.getZr();if(n.getWidth()&&n.getHeight()){for(var i in this._layers)this._layers[i].removeViewsAll();t.eachComponent(function(s,l){if(s!=="series"){var u=e.getViewOfComponentModel(l),h=l.coordinateSystem;if(u.__ecgl__){if(h){if(!h.viewGL)return void console.error("Can't find viewGL in coordinateSystem of component "+l.id);c=h.viewGL}else{if(!l.viewGL)return void console.error("Can't find viewGL of component "+l.id);c=h.viewGL}var c=h.viewGL,d=a(l);d.addView(c),u.afterRender&&u.afterRender(l,t,e,d),o(u.groupGL,l.get("silent"))}}}),t.eachSeries(function(s){var l=e.getViewOfSeriesModel(s),u=s.coordinateSystem;if(l.__ecgl__){if(u&&!u.viewGL&&!l.viewGL)return void console.error("Can't find viewGL of series "+l.id);var h=u&&u.viewGL||l.viewGL,c=a(s);c.addView(h),l.afterRender&&l.afterRender(s,t,e,c),o(l.groupGL,s.get("silent"))}})}else console.warn("Dom has no width or height");function a(s){var l;n.setSleepAfterStill(0),s.coordinateSystem&&s.coordinateSystem.model,l=s.get("zlevel");var u=r._layers,h=u[l];if(!h){if(h=u[l]=new hu("gl-"+l,n),n.painter.isSingleCanvas()){h.virtual=!0;var c=new ed({z:1e4,style:{image:h.renderer.canvas},silent:!0});h.__hostImage=c,n.add(c)}n.painter.insertLayer(l,h)}return h.__hostImage&&h.__hostImage.setStyle({width:h.renderer.getWidth(),height:h.renderer.getHeight()}),h}function o(s,l){s&&s.traverse(function(u){u.isRenderable&&u.isRenderable()&&(u.ignorePicking=u.$ignorePicking!=null?u.$ignorePicking:l)})}},Lc(function(t){var e=t.getZr(),r=e.painter.dispose;e.painter.dispose=function(){typeof this.eachOtherLayer=="function"&&this.eachOtherLayer(function(n){n instanceof hu&&n.dispose()}),r.call(this)},e.painter.getRenderedCanvas=function(n){if(n=n||{},this._singleCanvas)return this._layers[0].dom;var i=document.createElement("canvas"),a=n.pixelRatio||this.dpr;i.width=this.getWidth()*a,i.height=this.getHeight()*a;var o=i.getContext("2d");o.dpr=a,o.clearRect(0,0,i.width,i.height),n.backgroundColor&&(o.fillStyle=n.backgroundColor,o.fillRect(0,0,i.width,i.height));var s,l=this.storage.getDisplayList(!0),u={},h=this;function c(p,g){var _,y=h._zlevelList;p==null&&(p=-1/0);for(var x=0;x<y.length;x++){var v=y[x],w=h._layers[v];if(!w.__builtin__&&v>p&&v<g){_=w;break}}_&&_.renderToCanvas&&(o.save(),_.renderToCanvas(o),o.restore())}for(var d={ctx:o},f=0;f<l.length;f++){var m=l[f];m.zlevel!==s&&(c(s,m.zlevel),s=m.zlevel),this._doPaintEl(m,d,!0,null,u)}return c(s,1/0),i}}),Pc(function(t,e){var r=e.getZr();(r.__egl=r.__egl||new cu(r)).update(t,e)}),Oc(function(t){je(t.series,function(e){var r;Rc(pp,e.type)>=0&&(jn(r=e,"itemStyle"),jn(r,"lineStyle"),jn(r,"areaStyle"),jn(r,"label"),e.coordinateSystem==="mapbox"&&(e.coordinateSystem="mapbox3D",t.mapbox3D=t.mapbox))}),Yi(t.xAxis3D),Yi(t.yAxis3D),Yi(t.zAxis3D),Yi(t.grid3D),jn(t.geo3D)});const Ga={defaultOption:{viewControl:{projection:"perspective",autoRotate:!1,autoRotateDirection:"cw",autoRotateSpeed:10,autoRotateAfterStill:3,damping:.8,rotateSensitivity:1,zoomSensitivity:1,panSensitivity:1,panMouseButton:"middle",rotateMouseButton:"left",distance:150,minDistance:40,maxDistance:400,orthographicSize:150,maxOrthographicSize:400,minOrthographicSize:20,center:[0,0,0],alpha:0,beta:0,minAlpha:-90,maxAlpha:90}},setView:function(t){t=t||{},this.option.viewControl=this.option.viewControl||{},t.alpha!=null&&(this.option.viewControl.alpha=t.alpha),t.beta!=null&&(this.option.viewControl.beta=t.beta),t.distance!=null&&(this.option.viewControl.distance=t.distance),t.center!=null&&(this.option.viewControl.center=t.center)}},Pn={defaultOption:{postEffect:{enable:!1,bloom:{enable:!0,intensity:.1},depthOfField:{enable:!1,focalRange:20,focalDistance:50,blurRadius:10,fstop:2.8,quality:"medium"},screenSpaceAmbientOcclusion:{enable:!1,radius:2,quality:"medium",intensity:1},screenSpaceReflection:{enable:!1,quality:"medium",maxRoughness:.8},colorCorrection:{enable:!0,exposure:0,brightness:0,contrast:1,saturation:1,lookupTexture:""},edge:{enable:!1},FXAA:{enable:!1}},temporalSuperSampling:{enable:"auto"}}},On={defaultOption:{light:{main:{shadow:!1,shadowQuality:"high",color:"#fff",intensity:1,alpha:0,beta:0},ambient:{color:"#fff",intensity:.2},ambientCubemap:{texture:null,exposure:1,diffuseIntensity:.5,specularIntensity:.5}}}};var da=Cn.extend({type:"grid3D",dependencies:["xAxis3D","yAxis3D","zAxis3D"],defaultOption:{show:!0,zlevel:-10,left:0,top:0,width:"100%",height:"100%",environment:"auto",boxWidth:100,boxHeight:100,boxDepth:100,axisPointer:{show:!0,lineStyle:{color:"rgba(0, 0, 0, 0.8)",width:1},label:{show:!0,formatter:null,margin:8,textStyle:{fontSize:14,color:"#fff",backgroundColor:"rgba(0,0,0,0.5)",padding:3,borderRadius:3}}},axisLine:{show:!0,lineStyle:{color:"#333",width:2,type:"solid"}},axisTick:{show:!0,inside:!1,length:3,lineStyle:{width:1}},axisLabel:{show:!0,inside:!1,rotate:0,margin:8,textStyle:{fontSize:12}},splitLine:{show:!0,lineStyle:{color:["#ccc"],width:1,type:"solid"}},splitArea:{show:!1,areaStyle:{color:["rgba(250,250,250,0.3)","rgba(200,200,200,0.3)"]}},light:{main:{alpha:30,beta:40},ambient:{intensity:.4}},viewControl:{alpha:20,beta:40,autoRotate:!1,distance:200,minDistance:40,maxDistance:400}}});ft(da.prototype,Ga),ft(da.prototype,Pn),ft(da.prototype,On);const mp=da;var Xn=tt,du={left:0,middle:1,right:2};function fu(t){return t instanceof Array||(t=[t,t]),t}var Ih=$t.extend(function(){return{zr:null,viewGL:null,_center:new B,minDistance:.5,maxDistance:1.5,maxOrthographicSize:300,minOrthographicSize:30,minAlpha:-90,maxAlpha:90,minBeta:-1/0,maxBeta:1/0,autoRotateAfterStill:0,autoRotateDirection:"cw",autoRotateSpeed:60,damping:.8,rotateSensitivity:1,zoomSensitivity:1,panSensitivity:1,panMouseButton:"middle",rotateMouseButton:"left",_mode:"rotate",_camera:null,_needsUpdate:!1,_rotating:!1,_phi:0,_theta:0,_mouseX:0,_mouseY:0,_rotateVelocity:new he,_panVelocity:new he,_distance:500,_zoomSpeed:0,_stillTimeout:0,_animators:[]}},function(){["_mouseDownHandler","_mouseWheelHandler","_mouseMoveHandler","_mouseUpHandler","_pinchHandler","_contextMenuHandler","_update"].forEach(function(t){this[t]=this[t].bind(this)},this)},{init:function(){var t=this.zr;t&&(t.on("mousedown",this._mouseDownHandler),t.on("globalout",this._mouseUpHandler),t.on("mousewheel",this._mouseWheelHandler),t.on("pinch",this._pinchHandler),t.animation.on("frame",this._update),t.dom.addEventListener("contextmenu",this._contextMenuHandler))},dispose:function(){var t=this.zr;t&&(t.off("mousedown",this._mouseDownHandler),t.off("mousemove",this._mouseMoveHandler),t.off("mouseup",this._mouseUpHandler),t.off("mousewheel",this._mouseWheelHandler),t.off("pinch",this._pinchHandler),t.off("globalout",this._mouseUpHandler),t.dom.removeEventListener("contextmenu",this._contextMenuHandler),t.animation.off("frame",this._update)),this.stopAllAnimation()},getDistance:function(){return this._distance},setDistance:function(t){this._distance=t,this._needsUpdate=!0},getOrthographicSize:function(){return this._orthoSize},setOrthographicSize:function(t){this._orthoSize=t,this._needsUpdate=!0},getAlpha:function(){return this._theta/Math.PI*180},getBeta:function(){return-this._phi/Math.PI*180},getCenter:function(){return this._center.toArray()},setAlpha:function(t){t=Math.max(Math.min(this.maxAlpha,t),this.minAlpha),this._theta=t/180*Math.PI,this._needsUpdate=!0},setBeta:function(t){t=Math.max(Math.min(this.maxBeta,t),this.minBeta),this._phi=-t/180*Math.PI,this._needsUpdate=!0},setCenter:function(t){this._center.setArray(t)},setViewGL:function(t){this.viewGL=t},getCamera:function(){return this.viewGL.camera},setFromViewControlModel:function(t,e){var r=(e=e||{}).baseDistance||0,n=e.baseOrthoSize||1,i=t.get("projection");i!=="perspective"&&i!=="orthographic"&&i!=="isometric"&&(i="perspective"),this._projection=i,this.viewGL.setProjection(i);var a=t.get("distance")+r,o=t.get("orthographicSize")+n;[["damping",.8],["autoRotate",!1],["autoRotateAfterStill",3],["autoRotateDirection","cw"],["autoRotateSpeed",10],["minDistance",30],["maxDistance",400],["minOrthographicSize",30],["maxOrthographicSize",300],["minAlpha",-90],["maxAlpha",90],["minBeta",-1/0],["maxBeta",1/0],["rotateSensitivity",1],["zoomSensitivity",1],["panSensitivity",1],["panMouseButton","left"],["rotateMouseButton","middle"]].forEach(function(d){this[d[0]]=Xn(t.get(d[0]),d[1])},this),this.minDistance+=r,this.maxDistance+=r,this.minOrthographicSize+=n,this.maxOrthographicSize+=n;var s=t.ecModel,l={};["animation","animationDurationUpdate","animationEasingUpdate"].forEach(function(d){l[d]=Xn(t.get(d),s&&s.get(d))});var u=Xn(e.alpha,t.get("alpha"))||0,h=Xn(e.beta,t.get("beta"))||0,c=Xn(e.center,t.get("center"))||[0,0,0];l.animation&&l.animationDurationUpdate>0&&this._notFirst?this.animateTo({alpha:u,beta:h,center:c,distance:a,orthographicSize:o,easing:l.animationEasingUpdate,duration:l.animationDurationUpdate}):(this.setDistance(a),this.setAlpha(u),this.setBeta(h),this.setCenter(c),this.setOrthographicSize(o)),this._notFirst=!0,this._validateProperties()},_validateProperties:function(){},animateTo:function(t){var e=this.zr,r=this,n={},i={};return t.distance!=null&&(n.distance=this.getDistance(),i.distance=t.distance),t.orthographicSize!=null&&(n.orthographicSize=this.getOrthographicSize(),i.orthographicSize=t.orthographicSize),t.alpha!=null&&(n.alpha=this.getAlpha(),i.alpha=t.alpha),t.beta!=null&&(n.beta=this.getBeta(),i.beta=t.beta),t.center!=null&&(n.center=this.getCenter(),i.center=t.center),this._addAnimator(e.animation.animate(n).when(t.duration||1e3,i).during(function(){n.alpha!=null&&r.setAlpha(n.alpha),n.beta!=null&&r.setBeta(n.beta),n.distance!=null&&r.setDistance(n.distance),n.center!=null&&r.setCenter(n.center),n.orthographicSize!=null&&r.setOrthographicSize(n.orthographicSize),r._needsUpdate=!0})).start(t.easing||"linear")},stopAllAnimation:function(){for(var t=0;t<this._animators.length;t++)this._animators[t].stop();this._animators.length=0},update:function(){this._needsUpdate=!0,this._update(20)},_isAnimating:function(){return this._animators.length>0},_update:function(t){if(this._rotating){var e=(this.autoRotateDirection==="cw"?1:-1)*this.autoRotateSpeed/180*Math.PI;this._phi-=e*t/1e3,this._needsUpdate=!0}else this._rotateVelocity.len()>0&&(this._needsUpdate=!0);(Math.abs(this._zoomSpeed)>.1||this._panVelocity.len()>0)&&(this._needsUpdate=!0),this._needsUpdate&&(t=Math.min(t,50),this._updateDistanceOrSize(t),this._updatePan(t),this._updateRotate(t),this._updateTransform(),this.getCamera().update(),this.zr&&this.zr.refresh(),this.trigger("update"),this._needsUpdate=!1)},_updateRotate:function(t){var e=this._rotateVelocity;this._phi=e.y*t/20+this._phi,this._theta=e.x*t/20+this._theta,this.setAlpha(this.getAlpha()),this.setBeta(this.getBeta()),this._vectorDamping(e,Math.pow(this.damping,t/16))},_updateDistanceOrSize:function(t){this._projection==="perspective"?this._setDistance(this._distance+this._zoomSpeed*t/20):this._setOrthoSize(this._orthoSize+this._zoomSpeed*t/20),this._zoomSpeed*=Math.pow(this.damping,t/16)},_setDistance:function(t){this._distance=Math.max(Math.min(t,this.maxDistance),this.minDistance)},_setOrthoSize:function(t){this._orthoSize=Math.max(Math.min(t,this.maxOrthographicSize),this.minOrthographicSize);var e=this.getCamera(),r=this._orthoSize,n=r/this.viewGL.viewport.height*this.viewGL.viewport.width;e.left=-n/2,e.right=n/2,e.top=r/2,e.bottom=-r/2},_updatePan:function(t){var e=this._panVelocity,r=this._distance,n=this.getCamera(),i=n.worldTransform.y,a=n.worldTransform.x;this._center.scaleAndAdd(a,-e.x*r/200).scaleAndAdd(i,-e.y*r/200),this._vectorDamping(e,0)},_updateTransform:function(){var t=this.getCamera(),e=new B,r=this._theta+Math.PI/2,n=this._phi+Math.PI/2,i=Math.sin(r);e.x=i*Math.cos(n),e.y=-Math.cos(r),e.z=i*Math.sin(n),t.position.copy(this._center).scaleAndAdd(e,this._distance),t.rotation.identity().rotateY(-this._phi).rotateX(-this._theta)},_startCountingStill:function(){clearTimeout(this._stillTimeout);var t=this.autoRotateAfterStill,e=this;!isNaN(t)&&t>0&&(this._stillTimeout=setTimeout(function(){e._rotating=!0},1e3*t))},_vectorDamping:function(t,e){var r=t.len();(r*=e)<1e-4&&(r=0),t.normalize().scale(r)},_decomposeTransform:function(){if(this.getCamera()){this.getCamera().updateWorldTransform();var t=this.getCamera().worldTransform.z,e=Math.asin(t.y),r=Math.atan2(t.x,t.z);this._theta=e,this._phi=-r,this.setBeta(this.getBeta()),this.setAlpha(this.getAlpha()),this.getCamera().aspect?this._setDistance(this.getCamera().position.dist(this._center)):this._setOrthoSize(this.getCamera().top-this.getCamera().bottom)}},_mouseDownHandler:function(t){if(!t.target&&!this._isAnimating()){var e=t.offsetX,r=t.offsetY;this.viewGL&&!this.viewGL.containPoint(e,r)||(this.zr.on("mousemove",this._mouseMoveHandler),this.zr.on("mouseup",this._mouseUpHandler),t.event.targetTouches?t.event.targetTouches.length===1&&(this._mode="rotate"):t.event.button===du[this.rotateMouseButton]?this._mode="rotate":t.event.button===du[this.panMouseButton]?this._mode="pan":this._mode="",this._rotateVelocity.set(0,0),this._rotating=!1,this.autoRotate&&this._startCountingStill(),this._mouseX=t.offsetX,this._mouseY=t.offsetY)}},_mouseMoveHandler:function(t){if(!(t.target&&t.target.__isGLToZRProxy||this._isAnimating())){var e=fu(this.panSensitivity),r=fu(this.rotateSensitivity);this._mode==="rotate"?(this._rotateVelocity.y=(t.offsetX-this._mouseX)/this.zr.getHeight()*2*r[0],this._rotateVelocity.x=(t.offsetY-this._mouseY)/this.zr.getWidth()*2*r[1]):this._mode==="pan"&&(this._panVelocity.x=(t.offsetX-this._mouseX)/this.zr.getWidth()*e[0]*400,this._panVelocity.y=(-t.offsetY+this._mouseY)/this.zr.getHeight()*e[1]*400),this._mouseX=t.offsetX,this._mouseY=t.offsetY,t.event.preventDefault()}},_mouseWheelHandler:function(t){if(!this._isAnimating()){var e=t.event.wheelDelta||-t.event.detail;this._zoomHandler(t,e)}},_pinchHandler:function(t){this._isAnimating()||(this._zoomHandler(t,t.pinchScale>1?1:-1),this._mode="")},_zoomHandler:function(t,e){if(e!==0){var r,n=t.offsetX,i=t.offsetY;this.viewGL&&!this.viewGL.containPoint(n,i)||(r=this._projection==="perspective"?Math.max(Math.max(Math.min(this._distance-this.minDistance,this.maxDistance-this._distance))/20,.5):Math.max(Math.max(Math.min(this._orthoSize-this.minOrthographicSize,this.maxOrthographicSize-this._orthoSize))/20,.5),this._zoomSpeed=(e>0?-1:1)*r*this.zoomSensitivity,this._rotating=!1,this.autoRotate&&this._mode==="rotate"&&this._startCountingStill(),t.event.preventDefault())}},_mouseUpHandler:function(){this.zr.off("mousemove",this._mouseMoveHandler),this.zr.off("mouseup",this._mouseUpHandler)},_isRightMouseButtonUsed:function(){return this.rotateMouseButton==="right"||this.panMouseButton==="right"},_contextMenuHandler:function(t){this._isRightMouseButtonUsed()&&t.preventDefault()},_addAnimator:function(t){var e=this._animators;return e.push(t),t.done(function(){var r=e.indexOf(t);r>=0&&e.splice(r,1)}),t}});Object.defineProperty(Ih.prototype,"autoRotate",{get:function(t){return this._autoRotate},set:function(t){this._autoRotate=t,this._rotating=t}});const ka=Ih,Si={convertToDynamicArray:function(t){t&&this.resetOffset();var e=this.attributes;for(var r in e)t||!e[r].value?e[r].value=[]:e[r].value=Array.prototype.slice.call(e[r].value);t||!this.indices?this.indices=[]:this.indices=Array.prototype.slice.call(this.indices)},convertToTypedArray:function(){var t=this.attributes;for(var e in t)t[e].value&&t[e].value.length>0?t[e].value=new Float32Array(t[e].value):t[e].value=null;this.indices&&this.indices.length>0&&(this.indices=this.vertexCount>65535?new Uint32Array(this.indices):new Uint16Array(this.indices)),this.dirty()}},At={vec2:W,vec3:E,vec4:U,mat2:Mt,mat2d:Dt,mat3:rt,mat4:I,quat:Z};var Eo=At.vec3,pu=[[0,0],[1,1]],Fh=st.extend(function(){return{segmentScale:1,dynamic:!0,useNativeLine:!0,attributes:{position:new st.Attribute("position","float",3,"POSITION"),positionPrev:new st.Attribute("positionPrev","float",3),positionNext:new st.Attribute("positionNext","float",3),prevPositionPrev:new st.Attribute("prevPositionPrev","float",3),prevPosition:new st.Attribute("prevPosition","float",3),prevPositionNext:new st.Attribute("prevPositionNext","float",3),offset:new st.Attribute("offset","float",1),color:new st.Attribute("color","float",4,"COLOR")}}},{resetOffset:function(){this._vertexOffset=0,this._triangleOffset=0,this._itemVertexOffsets=[]},setVertexCount:function(t){var e=this.attributes;this.vertexCount!==t&&(e.position.init(t),e.color.init(t),this.useNativeLine||(e.positionPrev.init(t),e.positionNext.init(t),e.offset.init(t)),t>65535?this.indices instanceof Uint16Array&&(this.indices=new Uint32Array(this.indices)):this.indices instanceof Uint32Array&&(this.indices=new Uint16Array(this.indices)))},setTriangleCount:function(t){this.triangleCount!==t&&(this.indices=t===0?null:this.vertexCount>65535?new Uint32Array(3*t):new Uint16Array(3*t))},_getCubicCurveApproxStep:function(t,e,r,n){return 1/(Eo.dist(t,e)+Eo.dist(r,e)+Eo.dist(n,r)+1)*this.segmentScale},getCubicCurveVertexCount:function(t,e,r,n){var i=this._getCubicCurveApproxStep(t,e,r,n),a=Math.ceil(1/i);return this.useNativeLine?2*a:2*a+2},getCubicCurveTriangleCount:function(t,e,r,n){var i=this._getCubicCurveApproxStep(t,e,r,n),a=Math.ceil(1/i);return this.useNativeLine?0:2*a},getLineVertexCount:function(){return this.getPolylineVertexCount(pu)},getLineTriangleCount:function(){return this.getPolylineTriangleCount(pu)},getPolylineVertexCount:function(t){var e;return e=typeof t=="number"?t:typeof t[0]!="number"?t.length:t.length/3,this.useNativeLine?2*(e-1):2*(e-1)+2},getPolylineTriangleCount:function(t){var e;return e=typeof t=="number"?t:typeof t[0]!="number"?t.length:t.length/3,this.useNativeLine?0:2*Math.max(e-1,0)},addCubicCurve:function(t,e,r,n,i,a){a==null&&(a=1);var o=t[0],s=t[1],l=t[2],u=e[0],h=e[1],c=e[2],d=r[0],f=r[1],m=r[2],p=n[0],g=n[1],_=n[2],y=this._getCubicCurveApproxStep(t,e,r,n),x=y*y,v=x*y,w=3*y,b=3*x,S=6*x,M=6*v,D=o-2*u+d,L=s-2*h+f,P=l-2*c+m,O=3*(u-d)-o+p,R=3*(h-f)-s+g,A=3*(c-m)-l+_,z=o,F=s,X=l,H=(u-o)*w+D*b+O*v,ut=(h-s)*w+L*b+R*v,G=(c-l)*w+P*b+A*v,St=D*S+O*M,ht=L*S+R*M,pt=P*S+A*M,J=O*M,te=R*M,_t=A*M,Xt=0,ae=0,Tr=Math.ceil(1/y),ce=new Float32Array(3*(Tr+1)),Sr=(ce=[],0);for(ae=0;ae<Tr+1;ae++)ce[Sr++]=z,ce[Sr++]=F,ce[Sr++]=X,z+=H,F+=ut,X+=G,H+=St,ut+=ht,G+=pt,St+=J,ht+=te,pt+=_t,(Xt+=y)>1&&(z=H>0?Math.min(z,p):Math.max(z,p),F=ut>0?Math.min(F,g):Math.max(F,g),X=G>0?Math.min(X,_):Math.max(X,_));return this.addPolyline(ce,i,a)},addLine:function(t,e,r,n){return this.addPolyline([t,e],r,n)},addPolyline:function(t,e,r,n,i){if(t.length){var a=typeof t[0]!="number";if(i==null&&(i=a?t.length:t.length/3),!(i<2)){n==null&&(n=0),r==null&&(r=1),this._itemVertexOffsets.push(this._vertexOffset);var o,s,l=(a=typeof t[0]!="number")?typeof e[0]!="number":e.length/4===i,u=this.attributes.position,h=this.attributes.positionPrev,c=this.attributes.positionNext,d=this.attributes.color,f=this.attributes.offset,m=this.indices,p=this._vertexOffset;r=Math.max(r,.01);for(var g=n;g<i;g++){if(a)o=t[g],s=l?e[g]:e;else{var _=3*g;if((o=o||[])[0]=t[_],o[1]=t[_+1],o[2]=t[_+2],l){var y=4*g;(s=s||[])[0]=e[y],s[1]=e[y+1],s[2]=e[y+2],s[3]=e[y+3]}else s=e}if(this.useNativeLine?g>1&&(u.copy(p,p-1),d.copy(p,p-1),p++):(g<i-1&&(h.set(p+2,o),h.set(p+3,o)),g>0&&(c.set(p-2,o),c.set(p-1,o)),u.set(p,o),u.set(p+1,o),d.set(p,s),d.set(p+1,s),f.set(p,r/2),f.set(p+1,-r/2),p+=2),this.useNativeLine)d.set(p,s),u.set(p,o),p++;else if(g>0){var x=3*this._triangleOffset;(m=this.indices)[x]=p-4,m[x+1]=p-3,m[x+2]=p-2,m[x+3]=p-3,m[x+4]=p-1,m[x+5]=p-2,this._triangleOffset+=2}}if(!this.useNativeLine){var v=this._vertexOffset,w=this._vertexOffset+2*i;h.copy(v,v+2),h.copy(v+1,v+3),c.copy(w-1,w-3),c.copy(w-2,w-4)}return this._vertexOffset=p,this._vertexOffset}}},setItemColor:function(t,e){for(var r=this._itemVertexOffsets[t],n=t<this._itemVertexOffsets.length-1?this._itemVertexOffsets[t+1]:this._vertexOffset,i=r;i<n;i++)this.attributes.color.set(i,e);this.dirty("color")},currentTriangleOffset:function(){return this._triangleOffset},currentVertexOffset:function(){return this._vertexOffset}});xr(Fh.prototype,Si);const Yr=Fh;function fa(t,e,r,n,i,a,o){this._zr=t,this._x=0,this._y=0,this._rowHeight=0,this.width=n,this.height=i,this.offsetX=e,this.offsetY=r,this.dpr=o,this.gap=a}function Ta(t){(t=t||{}).width=t.width||512,t.height=t.height||512,t.devicePixelRatio=t.devicePixelRatio||1,t.gap=t.gap==null?2:t.gap;var e=document.createElement("canvas");e.width=t.width*t.devicePixelRatio,e.height=t.height*t.devicePixelRatio,this._canvas=e,this._texture=new K({image:e,flipY:!1});var r=this;this._zr=rd(e);var n=this._zr.refreshImmediately;this._zr.refreshImmediately=function(){n.call(this),r._texture.dirty(),r.onupdate&&r.onupdate()},this._dpr=t.devicePixelRatio,this._coords={},this.onupdate=t.onupdate,this._gap=t.gap,this._textureAtlasNodes=[new fa(this._zr,0,0,t.width,t.height,this._gap,this._dpr)],this._nodeWidth=t.width,this._nodeHeight=t.height,this._currentNodeIdx=0}function wr(){}fa.prototype={constructor:fa,clear:function(){this._x=0,this._y=0,this._rowHeight=0},add:function(t,e,r){var n=t.getBoundingRect();e==null&&(e=n.width),r==null&&(r=n.height),e*=this.dpr,r*=this.dpr,this._fitElement(t,e,r);var i=this._x,a=this._y,o=this.width*this.dpr,s=this.height*this.dpr,l=this.gap;if(i+e+l>o&&(i=this._x=0,a+=this._rowHeight+l,this._y=a,this._rowHeight=0),this._x+=e+l,this._rowHeight=Math.max(this._rowHeight,r),a+r+l>s)return null;t.x+=this.offsetX*this.dpr+i,t.y+=this.offsetY*this.dpr+a,this._zr.add(t);var u=[this.offsetX/this.width,this.offsetY/this.height];return[[i/o+u[0],a/s+u[1]],[(i+e)/o+u[0],(a+r)/s+u[1]]]},_fitElement:function(t,e,r){var n=t.getBoundingRect(),i=e/n.width,a=r/n.height;t.x=-n.x*i,t.y=-n.y*a,t.scaleX=i,t.scaleY=a,t.update()}},Ta.prototype={clear:function(){for(var t=0;t<this._textureAtlasNodes.length;t++)this._textureAtlasNodes[t].clear();this._currentNodeIdx=0,this._zr.clear(),this._coords={}},getWidth:function(){return this._width},getHeight:function(){return this._height},getTexture:function(){return this._texture},getDevicePixelRatio:function(){return this._dpr},getZr:function(){return this._zr},_getCurrentNode:function(){return this._textureAtlasNodes[this._currentNodeIdx]},_expand:function(){if(this._currentNodeIdx++,this._textureAtlasNodes[this._currentNodeIdx])return this._textureAtlasNodes[this._currentNodeIdx];var t=4096/this._dpr,e=this._textureAtlasNodes.length,r=e*this._nodeWidth%t,n=Math.floor(e*this._nodeWidth/t)*this._nodeHeight;if(!(n>=t)){var i=(r+this._nodeWidth)*this._dpr,a=(n+this._nodeHeight)*this._dpr;try{this._zr.resize({width:i,height:a})}catch{this._canvas.width=i,this._canvas.height=a}var o=new fa(this._zr,r,n,this._nodeWidth,this._nodeHeight,this._gap,this._dpr);return this._textureAtlasNodes.push(o),o}},add:function(t,e,r){if(this._coords[t.id])return this._coords[t.id];var n=this._getCurrentNode().add(t,e,r);if(!n){var i=this._expand();if(!i)return;n=i.add(t,e,r)}return this._coords[t.id]=n,n},getCoordsScale:function(){var t=this._dpr;return[this._nodeWidth/this._canvas.width*t,this._nodeHeight/this._canvas.height*t]},getCoords:function(t){return this._coords[t]},dispose:function(){this._zr.dispose()}},wr.prototype={constructor:wr,setScene:function(t){this._scene=t,this._skybox&&this._skybox.attachScene(this._scene)},initLight:function(t){this._lightRoot=t,this.mainLight=new T.DirectionalLight({shadowBias:.005}),this.ambientLight=new T.AmbientLight,t.add(this.mainLight),t.add(this.ambientLight)},dispose:function(){this._lightRoot&&(this._lightRoot.remove(this.mainLight),this._lightRoot.remove(this.ambientLight))},updateLight:function(t){var e=this.mainLight,r=this.ambientLight,n=t.getModel("light"),i=n.getModel("main"),a=n.getModel("ambient");e.intensity=i.get("intensity"),r.intensity=a.get("intensity"),e.color=T.parseColor(i.get("color")).slice(0,3),r.color=T.parseColor(a.get("color")).slice(0,3);var o=i.get("alpha")||0,s=i.get("beta")||0;e.position.setArray(T.directionFromAlphaBeta(o,s)),e.lookAt(T.Vector3.ZERO),e.castShadow=i.get("shadow"),e.shadowResolution=T.getShadowResolution(i.get("shadowQuality"))},updateAmbientCubemap:function(t,e,r){var n=e.getModel("light.ambientCubemap"),i=n.get("texture");if(i){this._cubemapLightsCache=this._cubemapLightsCache||{};var a=this._cubemapLightsCache[i];if(!a){var o=this;a=this._cubemapLightsCache[i]=T.createAmbientCubemap(n.option,t,r,function(){o._isSkyboxFromAmbientCubemap&&o._skybox.setEnvironmentMap(a.specular.cubemap),r.getZr().refresh()})}this._lightRoot.add(a.diffuse),this._lightRoot.add(a.specular),this._currentCubemapLights=a}else this._currentCubemapLights&&(this._lightRoot.remove(this._currentCubemapLights.diffuse),this._lightRoot.remove(this._currentCubemapLights.specular),this._currentCubemapLights=null)},updateSkybox:function(t,e,r){var n=e.get("environment"),i=this,a=(i._skybox=i._skybox||new Ua,i._skybox);if(n&&n!=="none")if(n==="auto")if(this._isSkyboxFromAmbientCubemap=!0,this._currentCubemapLights){var o=this._currentCubemapLights.specular.cubemap;a.setEnvironmentMap(o),this._scene&&a.attachScene(this._scene),a.material.set("lod",3)}else this._skybox&&this._skybox.detachScene();else if(typeof n=="object"&&n.colorStops||typeof n=="string"&&$u(n)){this._isSkyboxFromAmbientCubemap=!1;var s=new T.Texture2D({anisotropic:8,flipY:!1});a.setEnvironmentMap(s);var l=s.image=document.createElement("canvas");l.width=l.height=16;var u=l.getContext("2d"),h=new th({shape:{x:0,y:0,width:16,height:16},style:{fill:n}});eh(u,h),a.attachScene(this._scene)}else this._isSkyboxFromAmbientCubemap=!1,s=T.loadTexture(n,r,{anisotropic:8,flipY:!1}),a.setEnvironmentMap(s),a.attachScene(this._scene);else this._skybox&&this._skybox.detachScene(this._scene),this._skybox=null;var c=e.coordinateSystem;if(this._skybox)if(!c||!c.viewGL||n==="auto"||n.match&&n.match(/.hdr$/))this._skybox.material.undefine("fragment","SRGB_DECODE");else{var d=c.viewGL.isLinearSpace()?"define":"undefine";this._skybox.material[d]("fragment","SRGB_DECODE")}}};var Ao,Do,qn,mu,Pr=At.vec3,Bh=st.extend(function(){return{segmentScale:1,useNativeLine:!0,attributes:{position:new st.Attribute("position","float",3,"POSITION"),normal:new st.Attribute("normal","float",3,"NORMAL"),color:new st.Attribute("color","float",4,"COLOR")}}},{resetOffset:function(){this._vertexOffset=0,this._faceOffset=0},setQuadCount:function(t){var e=this.attributes,r=this.getQuadVertexCount()*t,n=this.getQuadTriangleCount()*t;this.vertexCount!==r&&(e.position.init(r),e.normal.init(r),e.color.init(r)),this.triangleCount!==n&&(this.indices=r>65535?new Uint32Array(3*n):new Uint16Array(3*n))},getQuadVertexCount:function(){return 4},getQuadTriangleCount:function(){return 2},addQuad:(Ao=Pr.create(),Do=Pr.create(),qn=Pr.create(),mu=[0,3,1,3,2,1],function(t,e){var r=this.attributes.position,n=this.attributes.normal,i=this.attributes.color;Pr.sub(Ao,t[1],t[0]),Pr.sub(Do,t[2],t[1]),Pr.cross(qn,Ao,Do),Pr.normalize(qn,qn);for(var a=0;a<4;a++)r.set(this._vertexOffset+a,t[a]),i.set(this._vertexOffset+a,e),n.set(this._vertexOffset+a,qn);var o=3*this._faceOffset;for(a=0;a<6;a++)this.indices[o+a]=mu[a]+this._vertexOffset;this._vertexOffset+=4,this._faceOffset+=2})});xr(Bh.prototype,Si);const gp=Bh;var Co=tt,_p={x:0,y:2,z:1};function pa(t,e,r){this.rootNode=new T.Node;var n=new T.Mesh({geometry:new Yr({useNativeLine:!1}),material:e,castShadow:!1,ignorePicking:!0,$ignorePicking:!0,renderOrder:1}),i=new T.Mesh({geometry:new gp,material:r,castShadow:!1,culling:!1,ignorePicking:!0,$ignorePicking:!0,renderOrder:0});this.rootNode.add(i),this.rootNode.add(n),this.faceInfo=t,this.plane=new T.Plane,this.linesMesh=n,this.quadsMesh=i}pa.prototype.update=function(t,e,r){var n=t.coordinateSystem,i=[n.getAxis(this.faceInfo[0]),n.getAxis(this.faceInfo[1])],a=this.linesMesh.geometry,o=this.quadsMesh.geometry;a.convertToDynamicArray(!0),o.convertToDynamicArray(!0),this._updateSplitLines(a,i,t,r),this._udpateSplitAreas(o,i,t,r),a.convertToTypedArray(),o.convertToTypedArray();var s,l,u,h,c,d,f=n.getAxis(this.faceInfo[2]);s=this.rootNode,l=this.plane,u=f,c=[0,0,0],d=(h=this.faceInfo[3])<0?u.getExtentMin():u.getExtentMax(),c[_p[u.dim]]=d,s.position.setArray(c),s.rotation.identity(),l.distance=-Math.abs(d),l.normal.set(0,0,0),u.dim==="x"?(s.rotation.rotateY(h*Math.PI/2),l.normal.x=-h):u.dim==="z"?(s.rotation.rotateX(-h*Math.PI/2),l.normal.y=-h):(h>0&&s.rotation.rotateY(Math.PI),l.normal.z=-h)},pa.prototype._updateSplitLines=function(t,e,r,n){var i=n.getDevicePixelRatio();e.forEach(function(a,o){var s=a.model,l=e[1-o].getExtent();if(!a.scale.isBlank()){var u=s.getModel("splitLine",r.getModel("splitLine"));if(u.get("show")){var h=u.getModel("lineStyle"),c=h.get("color"),d=Co(h.get("opacity"),1),f=Co(h.get("width"),1);c=We(c)?c:[c];for(var m=a.getTicksCoords({tickModel:u}),p=0,g=0;g<m.length;g++){var _=m[g].coord,y=T.parseColor(c[p%c.length]);y[3]*=d;var x=[0,0,0],v=[0,0,0];x[o]=v[o]=_,x[1-o]=l[0],v[1-o]=l[1],t.addLine(x,v,y,f*i),p++}}}})},pa.prototype._udpateSplitAreas=function(t,e,r,n){e.forEach(function(i,a){var o=i.model,s=e[1-a].getExtent();if(!i.scale.isBlank()){var l=o.getModel("splitArea",r.getModel("splitArea"));if(l.get("show")){var u=l.getModel("areaStyle"),h=u.get("color"),c=Co(u.get("opacity"),1);h=We(h)?h:[h];for(var d=i.getTicksCoords({tickModel:l,clamp:!0}),f=0,m=[0,0,0],p=[0,0,0],g=0;g<d.length;g++){var _=d[g].coord,y=[0,0,0],x=[0,0,0];if(y[a]=x[a]=_,y[1-a]=s[0],x[1-a]=s[1],g!==0){var v=T.parseColor(h[f%h.length]);v[3]*=c,t.addQuad([m,y,x,p],v),m=y,p=x,f++}else m=y,p=x}}}})};var gu=[0,1,2,0,2,3],zh=st.extend(function(){return{attributes:{position:new st.Attribute("position","float",3,"POSITION"),texcoord:new st.Attribute("texcoord","float",2,"TEXCOORD_0"),offset:new st.Attribute("offset","float",2),color:new st.Attribute("color","float",4,"COLOR")}}},{resetOffset:function(){this._vertexOffset=0,this._faceOffset=0},setSpriteCount:function(t){this._spriteCount=t;var e=4*t,r=2*t;this.vertexCount!==e&&(this.attributes.position.init(e),this.attributes.offset.init(e),this.attributes.color.init(e)),this.triangleCount!==r&&(this.indices=e>65535?new Uint32Array(3*r):new Uint16Array(3*r))},setSpriteAlign:function(t,e,r,n,i){var a,o,s,l;switch(r==null&&(r="left"),n==null&&(n="top"),i=i||0,r){case"left":a=i,s=e[0]+i;break;case"center":case"middle":a=-e[0]/2,s=e[0]/2;break;case"right":a=-e[0]-i,s=-i}switch(n){case"bottom":o=i,l=e[1]+i;break;case"middle":o=-e[1]/2,l=e[1]/2;break;case"top":o=-e[1]-i,l=-i}var u=4*t,h=this.attributes.offset;h.set(u,[a,l]),h.set(u+1,[s,l]),h.set(u+2,[s,o]),h.set(u+3,[a,o])},addSprite:function(t,e,r,n,i,a){var o=this._vertexOffset;this.setSprite(this._vertexOffset/4,t,e,r,n,i,a);for(var s=0;s<gu.length;s++)this.indices[3*this._faceOffset+s]=gu[s]+o;return this._faceOffset+=2,this._vertexOffset+=4,o/4},setSprite:function(t,e,r,n,i,a,o){for(var s=4*t,l=this.attributes,u=0;u<4;u++)l.position.set(s+u,e);var h=l.texcoord;h.set(s,[n[0][0],n[0][1]]),h.set(s+1,[n[1][0],n[0][1]]),h.set(s+2,[n[1][0],n[1][1]]),h.set(s+3,[n[0][0],n[1][1]]),this.setSpriteAlign(t,r,i,a,o)}});xr(zh.prototype,Si);const vp=zh;T.Shader.import(`@export ecgl.labels.vertex

attribute vec3 position: POSITION;
attribute vec2 texcoord: TEXCOORD_0;
attribute vec2 offset;
#ifdef VERTEX_COLOR
attribute vec4 a_Color : COLOR;
varying vec4 v_Color;
#endif

uniform mat4 worldViewProjection : WORLDVIEWPROJECTION;
uniform vec4 viewport : VIEWPORT;

varying vec2 v_Texcoord;

void main()
{
 vec4 proj = worldViewProjection * vec4(position, 1.0);

 vec2 screen = (proj.xy / abs(proj.w) + 1.0) * 0.5 * viewport.zw;

 screen += offset;

 proj.xy = (screen / viewport.zw - 0.5) * 2.0 * abs(proj.w);
 gl_Position = proj;
#ifdef VERTEX_COLOR
 v_Color = a_Color;
#endif
 v_Texcoord = texcoord;
}
@end


@export ecgl.labels.fragment

uniform vec3 color : [1.0, 1.0, 1.0];
uniform float alpha : 1.0;
uniform sampler2D textureAtlas;
uniform vec2 uvScale: [1.0, 1.0];

#ifdef VERTEX_COLOR
varying vec4 v_Color;
#endif
varying float v_Miter;

varying vec2 v_Texcoord;

void main()
{
 gl_FragColor = vec4(color, alpha) * texture2D(textureAtlas, v_Texcoord * uvScale);
#ifdef VERTEX_COLOR
 gl_FragColor *= v_Color;
#endif
}

@end`);const js=T.Mesh.extend(function(){return{geometry:new vp({dynamic:!0}),material:new T.Material({shader:T.createShader("ecgl.labels"),transparent:!0,depthMask:!1}),culling:!1,castShadow:!1,ignorePicking:!0}});var Or=tt,Rr={x:0,y:2,z:1};function us(t,e){var r=new T.Mesh({geometry:new Yr({useNativeLine:!1}),material:e,castShadow:!1,ignorePicking:!0,renderOrder:2}),n=new js;n.material.depthMask=!1;var i=new T.Node;i.add(r),i.add(n),this.rootNode=i,this.dim=t,this.linesMesh=r,this.labelsMesh=n,this.axisLineCoords=null,this.labelElements=[]}var Lo={x:"y",y:"x",z:"y"};us.prototype.update=function(t,e,r){var n=t.coordinateSystem.getAxis(this.dim),i=this.linesMesh.geometry,a=this.labelsMesh.geometry;i.convertToDynamicArray(!0),a.convertToDynamicArray(!0);var o=n.model,s=n.getExtent(),l=r.getDevicePixelRatio(),u=o.getModel("axisLine",t.getModel("axisLine")),h=o.getModel("axisTick",t.getModel("axisTick")),c=o.getModel("axisLabel",t.getModel("axisLabel")),d=u.get("lineStyle.color");if(u.get("show")){var f=u.getModel("lineStyle"),m=[0,0,0];(M=[0,0,0])[D=Rr[n.dim]]=s[0],m[D]=s[1],this.axisLineCoords=[M,m];var p=T.parseColor(d),g=Or(f.get("width"),1),_=Or(f.get("opacity"),1);p[3]*=_,i.addLine(M,m,p,g*l)}if(h.get("show")){var y=h.getModel("lineStyle"),x=T.parseColor(Or(y.get("color"),d));g=Or(y.get("width"),1),x[3]*=Or(y.get("opacity"),1);for(var v=n.getTicksCoords(),w=h.get("length"),b=0;b<v.length;b++){var S=v[b].coord,M=[0,0,0],D=(m=[0,0,0],Rr[n.dim]),L=Rr[Lo[n.dim]];M[D]=m[D]=S,m[L]=w,i.addLine(M,m,x,g*l)}}if(this.labelElements=[],l=r.getDevicePixelRatio(),c.get("show")){v=n.getTicksCoords();var P=o.get("data"),O=c.get("margin"),R=n.getViewLabels();for(b=0;b<R.length;b++){var A=R[b].tickValue,z=R[b].formattedLabel,F=R[b].rawLabel,X=(S=n.dataToCoord(A),[0,0,0]);D=Rr[n.dim],L=Rr[Lo[n.dim]],X[D]=X[D]=S,X[L]=O;var H=c;P&&P[A]&&P[A].textStyle&&(H=new Tn(P[A].textStyle,c,o.ecModel));var ut=Or(H.get("color"),d),G=new ga({style:_a(H,{text:z,fill:typeof ut=="function"?ut(n.type==="category"?F:n.type==="value"?A+"":A,b):ut,verticalAlign:"top",align:"left"})}),St=e.add(G),ht=G.getBoundingRect();a.addSprite(X,[ht.width*l,ht.height*l],St),this.labelElements.push(G)}}if(o.get("name")){var pt=o.getModel("nameTextStyle"),J=(X=[0,0,0],D=Rr[n.dim],L=Rr[Lo[n.dim]],Or(pt.get("color"),d)),te=pt.get("borderColor");g=pt.get("borderWidth"),X[D]=X[D]=(s[0]+s[1])/2,X[L]=o.get("nameGap"),G=new ga({style:_a(pt,{text:o.get("name"),fill:J,stroke:te,lineWidth:g})}),St=e.add(G),ht=G.getBoundingRect(),a.addSprite(X,[ht.width*l,ht.height*l],St),G.__idx=this.labelElements.length,this.nameLabelElement=G}this.labelsMesh.material.set("textureAtlas",e.getTexture()),this.labelsMesh.material.set("uvScale",e.getCoordsScale()),i.convertToTypedArray(),a.convertToTypedArray()},us.prototype.setSpriteAlign=function(t,e,r){for(var n=r.getDevicePixelRatio(),i=this.labelsMesh.geometry,a=0;a<this.labelElements.length;a++){var o=this.labelElements[a].getBoundingRect();i.setSpriteAlign(a,[o.width*n,o.height*n],t,e)}var s=this.nameLabelElement;s&&(o=s.getBoundingRect(),i.setSpriteAlign(s.__idx,[o.width*n,o.height*n],t,e),i.dirty()),this.textAlign=t,this.textVerticalAlign=e};const Ha=`@export ecgl.lines3D.vertex

uniform mat4 worldViewProjection : WORLDVIEWPROJECTION;

attribute vec3 position: POSITION;
attribute vec4 a_Color : COLOR;
varying vec4 v_Color;

void main()
{
 gl_Position = worldViewProjection * vec4(position, 1.0);
 v_Color = a_Color;
}

@end

@export ecgl.lines3D.fragment

uniform vec4 color : [1.0, 1.0, 1.0, 1.0];

varying vec4 v_Color;

@import clay.util.srgb

void main()
{
#ifdef SRGB_DECODE
 gl_FragColor = sRGBToLinear(color * v_Color);
#else
 gl_FragColor = color * v_Color;
#endif
}
@end



@export ecgl.lines3D.clipNear

vec4 clipNear(vec4 p1, vec4 p2) {
 float n = (p1.w - near) / (p1.w - p2.w);
 return vec4(mix(p1.xy, p2.xy, n), -near, near);
}

@end

@export ecgl.lines3D.expandLine
#ifdef VERTEX_ANIMATION
 vec4 prevProj = worldViewProjection * vec4(mix(prevPositionPrev, positionPrev, percent), 1.0);
 vec4 currProj = worldViewProjection * vec4(mix(prevPosition, position, percent), 1.0);
 vec4 nextProj = worldViewProjection * vec4(mix(prevPositionNext, positionNext, percent), 1.0);
#else
 vec4 prevProj = worldViewProjection * vec4(positionPrev, 1.0);
 vec4 currProj = worldViewProjection * vec4(position, 1.0);
 vec4 nextProj = worldViewProjection * vec4(positionNext, 1.0);
#endif

 if (currProj.w < 0.0) {
 if (nextProj.w > 0.0) {
 currProj = clipNear(currProj, nextProj);
 }
 else if (prevProj.w > 0.0) {
 currProj = clipNear(currProj, prevProj);
 }
 }

 vec2 prevScreen = (prevProj.xy / abs(prevProj.w) + 1.0) * 0.5 * viewport.zw;
 vec2 currScreen = (currProj.xy / abs(currProj.w) + 1.0) * 0.5 * viewport.zw;
 vec2 nextScreen = (nextProj.xy / abs(nextProj.w) + 1.0) * 0.5 * viewport.zw;

 vec2 dir;
 float len = offset;
 if (position == positionPrev) {
 dir = normalize(nextScreen - currScreen);
 }
 else if (position == positionNext) {
 dir = normalize(currScreen - prevScreen);
 }
 else {
 vec2 dirA = normalize(currScreen - prevScreen);
 vec2 dirB = normalize(nextScreen - currScreen);

 vec2 tanget = normalize(dirA + dirB);

 float miter = 1.0 / max(dot(tanget, dirA), 0.5);
 len *= miter;
 dir = tanget;
 }

 dir = vec2(-dir.y, dir.x) * len;
 currScreen += dir;

 currProj.xy = (currScreen / viewport.zw - 0.5) * 2.0 * abs(currProj.w);
@end


@export ecgl.meshLines3D.vertex

attribute vec3 position: POSITION;
attribute vec3 positionPrev;
attribute vec3 positionNext;
attribute float offset;
attribute vec4 a_Color : COLOR;

#ifdef VERTEX_ANIMATION
attribute vec3 prevPosition;
attribute vec3 prevPositionPrev;
attribute vec3 prevPositionNext;
uniform float percent : 1.0;
#endif

uniform mat4 worldViewProjection : WORLDVIEWPROJECTION;
uniform vec4 viewport : VIEWPORT;
uniform float near : NEAR;

varying vec4 v_Color;

@import ecgl.common.wireframe.vertexHeader

@import ecgl.lines3D.clipNear

void main()
{
 @import ecgl.lines3D.expandLine

 gl_Position = currProj;

 v_Color = a_Color;

 @import ecgl.common.wireframe.vertexMain
}
@end


@export ecgl.meshLines3D.fragment

uniform vec4 color : [1.0, 1.0, 1.0, 1.0];

varying vec4 v_Color;

@import ecgl.common.wireframe.fragmentHeader

@import clay.util.srgb

void main()
{
#ifdef SRGB_DECODE
 gl_FragColor = sRGBToLinear(color * v_Color);
#else
 gl_FragColor = color * v_Color;
#endif

 @import ecgl.common.wireframe.fragmentMain
}

@end`;var _u=tt;T.Shader.import(Ha);var Nr={x:0,y:2,z:1};const yp=wi.extend({type:"grid3D",__ecgl__:!0,init:function(t,e){var r=new T.Material({shader:T.createShader("ecgl.color"),depthMask:!1,transparent:!0}),n=new T.Material({shader:T.createShader("ecgl.meshLines3D"),depthMask:!1,transparent:!0});r.define("fragment","DOUBLE_SIDED"),r.define("both","VERTEX_COLOR"),this.groupGL=new T.Node,this._control=new ka({zr:e.getZr()}),this._control.init(),this._faces=[["y","z","x",-1,"left"],["y","z","x",1,"right"],["x","y","z",-1,"bottom"],["x","y","z",1,"top"],["x","z","y",-1,"far"],["x","z","y",1,"near"]].map(function(a){var o=new pa(a,n,r);return this.groupGL.add(o.rootNode),o},this),this._axes=["x","y","z"].map(function(a){var o=new us(a,n);return this.groupGL.add(o.rootNode),o},this);var i=e.getDevicePixelRatio();this._axisLabelSurface=new Ta({width:256,height:256,devicePixelRatio:i}),this._axisLabelSurface.onupdate=function(){e.getZr().refresh()},this._axisPointerLineMesh=new T.Mesh({geometry:new Yr({useNativeLine:!1}),material:n,castShadow:!1,ignorePicking:!0,renderOrder:3}),this.groupGL.add(this._axisPointerLineMesh),this._axisPointerLabelsSurface=new Ta({width:128,height:128,devicePixelRatio:i}),this._axisPointerLabelsMesh=new js({ignorePicking:!0,renderOrder:4,castShadow:!1}),this._axisPointerLabelsMesh.material.set("textureAtlas",this._axisPointerLabelsSurface.getTexture()),this.groupGL.add(this._axisPointerLabelsMesh),this._lightRoot=new T.Node,this._sceneHelper=new wr,this._sceneHelper.initLight(this._lightRoot)},render:function(t,e,r){this._model=t,this._api=r;var n=t.coordinateSystem;n.viewGL.add(this._lightRoot),t.get("show")?n.viewGL.add(this.groupGL):n.viewGL.remove(this.groupGL);var i=this._control;i.setViewGL(n.viewGL);var a=t.getModel("viewControl");i.setFromViewControlModel(a,0),this._axisLabelSurface.clear(),i.off("update"),t.get("show")&&(this._faces.forEach(function(o){o.update(t,e,r)},this),this._axes.forEach(function(o){o.update(t,this._axisLabelSurface,r)},this)),i.on("update",this._onCameraChange.bind(this,t,r),this),this._sceneHelper.setScene(n.viewGL.scene),this._sceneHelper.updateLight(t),n.viewGL.setPostEffect(t.getModel("postEffect"),r),n.viewGL.setTemporalSuperSampling(t.getModel("temporalSuperSampling")),this._initMouseHandler(t)},afterRender:function(t,e,r,n){var i=n.renderer;this._sceneHelper.updateAmbientCubemap(i,t,r),this._sceneHelper.updateSkybox(i,t,r)},showAxisPointer:function(t,e,r,n){this._doShowAxisPointer(),this._updateAxisPointer(n.value)},hideAxisPointer:function(t,e,r,n){this._doHideAxisPointer()},_initMouseHandler:function(t){var e=t.coordinateSystem.viewGL;t.get("show")&&t.get("axisPointer.show")?e.on("mousemove",this._updateAxisPointerOnMousePosition,this):e.off("mousemove",this._updateAxisPointerOnMousePosition)},_updateAxisPointerOnMousePosition:function(t){if(!t.target){for(var e,r=this._model.coordinateSystem,n=r.viewGL,i=n.castRay(t.offsetX,t.offsetY,new T.Ray),a=0;a<this._faces.length;a++){var o=this._faces[a];if(!o.rootNode.invisible){o.plane.normal.dot(n.camera.worldTransform.z)<0&&o.plane.normal.negate();var s=i.intersectPlane(o.plane);if(s){var l=r.getAxis(o.faceInfo[0]),u=r.getAxis(o.faceInfo[1]),h=Nr[o.faceInfo[0]],c=Nr[o.faceInfo[1]];l.contain(s.array[h])&&u.contain(s.array[c])&&(e=s)}}}if(e){var d=r.pointToData(e.array,[],!0);this._updateAxisPointer(d),this._doShowAxisPointer()}else this._doHideAxisPointer()}},_onCameraChange:function(t,e){t.get("show")&&(this._updateFaceVisibility(),this._updateAxisLinePosition());var r=this._control;e.dispatchAction({type:"grid3DChangeCamera",alpha:r.getAlpha(),beta:r.getBeta(),distance:r.getDistance(),center:r.getCenter(),from:this.uid,grid3DId:t.id})},_updateFaceVisibility:function(){var t=this._control.getCamera(),e=new T.Vector3;t.update();for(var r=0;r<this._faces.length/2;r++){for(var n=[],i=0;i<2;i++)this._faces[2*r+i].rootNode.getWorldPosition(e),e.transformMat4(t.viewMatrix),n[i]=e.z;var a=n[0]>n[1]?0:1,o=this._faces[2*r+a],s=this._faces[2*r+1-a];o.rootNode.invisible=!0,s.rootNode.invisible=!1}},_updateAxisLinePosition:function(){var t=this._model.coordinateSystem,e=t.getAxis("x"),r=t.getAxis("y"),n=t.getAxis("z"),i=n.getExtentMax(),a=n.getExtentMin(),o=e.getExtentMin(),s=e.getExtentMax(),l=r.getExtentMax(),u=r.getExtentMin(),h=this._axes[0].rootNode,c=this._axes[1].rootNode,d=this._axes[2].rootNode,f=this._faces,m=f[4].rootNode.invisible?u:l,p=f[2].rootNode.invisible?i:a,g=f[0].rootNode.invisible?o:s,_=f[2].rootNode.invisible?i:a,y=f[0].rootNode.invisible?s:o,x=f[4].rootNode.invisible?u:l;h.rotation.identity(),c.rotation.identity(),d.rotation.identity(),f[4].rootNode.invisible&&(this._axes[0].flipped=!0,h.rotation.rotateX(Math.PI)),f[0].rootNode.invisible&&(this._axes[1].flipped=!0,c.rotation.rotateZ(Math.PI)),f[4].rootNode.invisible&&(this._axes[2].flipped=!0,d.rotation.rotateY(Math.PI)),h.position.set(0,p,m),c.position.set(g,_,0),d.position.set(y,0,x),h.update(),c.update(),d.update(),this._updateAxisLabelAlign()},_updateAxisLabelAlign:function(){var t=this._control.getCamera(),e=[new T.Vector4,new T.Vector4],r=new T.Vector4;this.groupGL.getWorldPosition(r),r.w=1,r.transformMat4(t.viewMatrix).transformMat4(t.projectionMatrix),r.x/=r.w,r.y/=r.w,this._axes.forEach(function(n){var i=n.axisLineCoords;n.labelsMesh.geometry;for(var a=0;a<e.length;a++)e[a].setArray(i[a]),e[a].w=1,e[a].transformMat4(n.rootNode.worldTransform).transformMat4(t.viewMatrix).transformMat4(t.projectionMatrix),e[a].x/=e[a].w,e[a].y/=e[a].w;var o,s,l=e[1].x-e[0].x,u=e[1].y-e[0].y,h=(e[1].x+e[0].x)/2,c=(e[1].y+e[0].y)/2;Math.abs(u/l)<.5?(o="center",s=c>r.y?"bottom":"top"):(s="middle",o=h>r.x?"left":"right"),n.setSpriteAlign(o,s,this._api)},this)},_doShowAxisPointer:function(){this._axisPointerLineMesh.invisible&&(this._axisPointerLineMesh.invisible=!1,this._axisPointerLabelsMesh.invisible=!1,this._api.getZr().refresh())},_doHideAxisPointer:function(){this._axisPointerLineMesh.invisible||(this._axisPointerLineMesh.invisible=!0,this._axisPointerLabelsMesh.invisible=!0,this._api.getZr().refresh())},_updateAxisPointer:function(t){var e=this._model.coordinateSystem,r=e.dataToPoint(t),n=this._axisPointerLineMesh.geometry,i=this._model.getModel("axisPointer"),a=this._api.getDevicePixelRatio();function o(S){return tt(S.model.get("axisPointer.show"),i.get("show"))}function s(S){var M=S.model.getModel("axisPointer",i).getModel("lineStyle"),D=T.parseColor(M.get("color")),L=_u(M.get("width"),1),P=_u(M.get("opacity"),1);return D[3]*=P,{color:D,lineWidth:L}}n.convertToDynamicArray(!0);for(var l=0;l<this._faces.length;l++){var u=this._faces[l];if(!u.rootNode.invisible){for(var h=u.faceInfo,c=h[3]<0?e.getAxis(h[2]).getExtentMin():e.getAxis(h[2]).getExtentMax(),d=Nr[h[2]],f=0;f<2;f++){var m=h[f],p=h[1-f],g=e.getAxis(m),_=e.getAxis(p);if(o(g)){var y=Nr[m],x=Nr[p];(b=[0,0,0])[y]=(w=[0,0,0])[y]=r[y],b[d]=w[d]=c,b[x]=_.getExtentMin(),w[x]=_.getExtentMax();var v=s(g);n.addLine(b,w,v.color,v.lineWidth*a)}}if(o(e.getAxis(h[2]))){var w,b=r.slice();(w=r.slice())[d]=c,v=s(e.getAxis(h[2])),n.addLine(b,w,v.color,v.lineWidth*a)}}}n.convertToTypedArray(),this._updateAxisPointerLabelsMesh(t),this._api.getZr().refresh()},_updateAxisPointerLabelsMesh:function(t){var e=this._model,r=this._axisPointerLabelsMesh,n=this._axisPointerLabelsSurface,i=e.coordinateSystem,a=e.getModel("axisPointer");r.geometry.convertToDynamicArray(!0),n.clear();var o={x:"y",y:"x",z:"y"};this._axes.forEach(function(s,l){var u=i.getAxis(s.dim),h=u.model.getModel("axisPointer",a),c=h.getModel("label"),d=h.get("lineStyle.color");if(c.get("show")&&h.get("show")){var f=t[l],m=c.get("formatter"),p=u.scale.getLabel({value:f});if(m!=null)p=m(p,t);else if(u.scale.type==="interval"||u.scale.type==="log"){var g=rh(u.scale.getTicks()[0]);p=f.toFixed(g+2)}var _=c.get("color"),y=new ga({style:_a(c,{text:p,fill:_||d,align:"left",verticalAlign:"top"})}),x=n.add(y),v=y.getBoundingRect(),w=this._api.getDevicePixelRatio(),b=s.rootNode.position.toArray();b[Nr[o[s.dim]]]+=(s.flipped?-1:1)*c.get("margin"),b[Nr[s.dim]]=u.dataToCoord(t[l]),r.geometry.addSprite(b,[v.width*w,v.height*w],x,s.textAlign,s.textVerticalAlign)}},this),n.getZr().refreshImmediately(),r.material.set("uvScale",n.getCoordsScale()),r.geometry.convertToTypedArray()},dispose:function(){this.groupGL.removeAll(),this._control.dispose(),this._axisLabelSurface.dispose(),this._axisPointerLabelsSurface.dispose()}});function ci(t){nh.call(this,t),this.type="cartesian3D",this.dimensions=["x","y","z"],this.size=[0,0,0]}function ma(t,e,r){Ca.call(this,t,e,r)}ci.prototype={constructor:ci,model:null,containPoint:function(t){return this.getAxis("x").contain(t[0])&&this.getAxis("y").contain(t[2])&&this.getAxis("z").contain(t[1])},containData:function(t){return this.getAxis("x").containData(t[0])&&this.getAxis("y").containData(t[1])&&this.getAxis("z").containData(t[2])},dataToPoint:function(t,e,r){return(e=e||[])[0]=this.getAxis("x").dataToCoord(t[0],r),e[2]=this.getAxis("y").dataToCoord(t[1],r),e[1]=this.getAxis("z").dataToCoord(t[2],r),e},pointToData:function(t,e,r){return(e=e||[])[0]=this.getAxis("x").coordToData(t[0],r),e[1]=this.getAxis("y").coordToData(t[2],r),e[2]=this.getAxis("z").coordToData(t[1],r),e}},Zs(ci,nh),ma.prototype={constructor:ma,getExtentMin:function(){var t=this._extent;return Math.min(t[0],t[1])},getExtentMax:function(){var t=this._extent;return Math.max(t[0],t[1])},calculateCategoryInterval:function(){return Math.floor(this.scale.count()/8)}},Zs(ma,Ca);var hs=function(){this._pool={},this._allocatedTextures=[]};hs.prototype={constructor:hs,get:function(t){var e=vu(t);this._pool.hasOwnProperty(e)||(this._pool[e]=[]);var r=this._pool[e];if(!r.length){var n=new K(t);return this._allocatedTextures.push(n),n}return r.pop()},put:function(t){var e=vu(t);this._pool.hasOwnProperty(e)||(this._pool[e]=[]),this._pool[e].push(t)},clear:function(t){for(var e=0;e<this._allocatedTextures.length;e++)this._allocatedTextures[e].dispose(t);this._pool={},this._allocatedTextures=[]}};var Uh={width:512,height:512,type:Ia,format:Fs,wrapS:qr,wrapT:qr,minFilter:mi,magFilter:pi,useMipmap:!0,anisotropic:1,flipY:!0,unpackAlignment:4,premultiplyAlpha:!1},Po=Object.keys(Uh);function vu(t){var e,r,n,i;Ht.defaultsWithPropList(t,Uh,Po),r=(e=t).width,n=e.height,i=!(r&r-1||n&n-1),e.format===Ba&&(e.useMipmap=!1),i&&e.useMipmap||(e.minFilter==Bs||e.minFilter==Us?e.minFilter=fi:e.minFilter!=mi&&e.minFilter!=zs||(e.minFilter=pi)),i||(e.wrapS=qr,e.wrapT=qr);for(var a="",o=0;o<Po.length;o++)a+=t[Po[o]].toString();return a}const Gh=hs;var cr=["px","nx","py","ny","pz","nz"];function Oo(t,e,r){return r==="alphaMap"?t.material.get("diffuseMap"):r==="alphaCutoff"?t.material.isDefined("fragment","ALPHA_TEST")&&t.material.get("diffuseMap")&&t.material.get("alphaCutoff")||0:r==="uvRepeat"?t.material.get("uvRepeat"):r==="uvOffset"?t.material.get("uvOffset"):e.get(r)}function yu(t,e){var r=t.material,n=e.material;return r.get("diffuseMap")!==n.get("diffuseMap")||(r.get("alphaCutoff")||0)!==(n.get("alphaCutoff")||0)}N.import(`@export clay.sm.depth.vertex
uniform mat4 worldViewProjection : WORLDVIEWPROJECTION;
attribute vec3 position : POSITION;
attribute vec2 texcoord : TEXCOORD_0;
uniform vec2 uvRepeat = vec2(1.0, 1.0);
uniform vec2 uvOffset = vec2(0.0, 0.0);
@import clay.chunk.skinning_header
@import clay.chunk.instancing_header
varying vec4 v_ViewPosition;
varying vec2 v_Texcoord;
void main(){
 vec4 P = vec4(position, 1.0);
#ifdef SKINNING
 @import clay.chunk.skin_matrix
 P = skinMatrixWS * P;
#endif
#ifdef INSTANCING
 @import clay.chunk.instancing_matrix
 P = instanceMat * P;
#endif
 v_ViewPosition = worldViewProjection * P;
 gl_Position = v_ViewPosition;
 v_Texcoord = texcoord * uvRepeat + uvOffset;
}
@end
@export clay.sm.depth.fragment
varying vec4 v_ViewPosition;
varying vec2 v_Texcoord;
uniform float bias : 0.001;
uniform float slopeScale : 1.0;
uniform sampler2D alphaMap;
uniform float alphaCutoff: 0.0;
@import clay.util.encode_float
void main(){
 float depth = v_ViewPosition.z / v_ViewPosition.w;
 if (alphaCutoff > 0.0) {
 if (texture2D(alphaMap, v_Texcoord).a <= alphaCutoff) {
 discard;
 }
 }
#ifdef USE_VSM
 depth = depth * 0.5 + 0.5;
 float moment1 = depth;
 float moment2 = depth * depth;
 #ifdef SUPPORT_STANDARD_DERIVATIVES
 float dx = dFdx(depth);
 float dy = dFdy(depth);
 moment2 += 0.25*(dx*dx+dy*dy);
 #endif
 gl_FragColor = vec4(moment1, moment2, 0.0, 1.0);
#else
 #ifdef SUPPORT_STANDARD_DERIVATIVES
 float dx = dFdx(depth);
 float dy = dFdy(depth);
 depth += sqrt(dx*dx + dy*dy) * slopeScale + bias;
 #else
 depth += bias;
 #endif
 gl_FragColor = encodeFloat(depth * 0.5 + 0.5);
#endif
}
@end
@export clay.sm.debug_depth
uniform sampler2D depthMap;
varying vec2 v_Texcoord;
@import clay.util.decode_float
void main() {
 vec4 tex = texture2D(depthMap, v_Texcoord);
#ifdef USE_VSM
 gl_FragColor = vec4(tex.rgb, 1.0);
#else
 float depth = decodeFloat(tex);
 gl_FragColor = vec4(depth, depth, depth, 1.0);
#endif
}
@end
@export clay.sm.distance.vertex
uniform mat4 worldViewProjection : WORLDVIEWPROJECTION;
uniform mat4 world : WORLD;
attribute vec3 position : POSITION;
@import clay.chunk.skinning_header
varying vec3 v_WorldPosition;
void main (){
 vec4 P = vec4(position, 1.0);
#ifdef SKINNING
 @import clay.chunk.skin_matrix
 P = skinMatrixWS * P;
#endif
#ifdef INSTANCING
 @import clay.chunk.instancing_matrix
 P = instanceMat * P;
#endif
 gl_Position = worldViewProjection * P;
 v_WorldPosition = (world * P).xyz;
}
@end
@export clay.sm.distance.fragment
uniform vec3 lightPosition;
uniform float range : 100;
varying vec3 v_WorldPosition;
@import clay.util.encode_float
void main(){
 float dist = distance(lightPosition, v_WorldPosition);
#ifdef USE_VSM
 gl_FragColor = vec4(dist, dist * dist, 0.0, 0.0);
#else
 dist = dist / range;
 gl_FragColor = encodeFloat(dist);
#endif
}
@end
@export clay.plugin.shadow_map_common
@import clay.util.decode_float
float tapShadowMap(sampler2D map, vec2 uv, float z){
 vec4 tex = texture2D(map, uv);
 return step(z, decodeFloat(tex) * 2.0 - 1.0);
}
float pcf(sampler2D map, vec2 uv, float z, float textureSize, vec2 scale) {
 float shadowContrib = tapShadowMap(map, uv, z);
 vec2 offset = vec2(1.0 / textureSize) * scale;
#ifdef PCF_KERNEL_SIZE
 for (int _idx_ = 0; _idx_ < PCF_KERNEL_SIZE; _idx_++) {{
 shadowContrib += tapShadowMap(map, uv + offset * pcfKernel[_idx_], z);
 }}
 return shadowContrib / float(PCF_KERNEL_SIZE + 1);
#else
 shadowContrib += tapShadowMap(map, uv+vec2(offset.x, 0.0), z);
 shadowContrib += tapShadowMap(map, uv+vec2(offset.x, offset.y), z);
 shadowContrib += tapShadowMap(map, uv+vec2(-offset.x, offset.y), z);
 shadowContrib += tapShadowMap(map, uv+vec2(0.0, offset.y), z);
 shadowContrib += tapShadowMap(map, uv+vec2(-offset.x, 0.0), z);
 shadowContrib += tapShadowMap(map, uv+vec2(-offset.x, -offset.y), z);
 shadowContrib += tapShadowMap(map, uv+vec2(offset.x, -offset.y), z);
 shadowContrib += tapShadowMap(map, uv+vec2(0.0, -offset.y), z);
 return shadowContrib / 9.0;
#endif
}
float pcf(sampler2D map, vec2 uv, float z, float textureSize) {
 return pcf(map, uv, z, textureSize, vec2(1.0));
}
float chebyshevUpperBound(vec2 moments, float z){
 float p = 0.0;
 z = z * 0.5 + 0.5;
 if (z <= moments.x) {
 p = 1.0;
 }
 float variance = moments.y - moments.x * moments.x;
 variance = max(variance, 0.0000001);
 float mD = moments.x - z;
 float pMax = variance / (variance + mD * mD);
 pMax = clamp((pMax-0.4)/(1.0-0.4), 0.0, 1.0);
 return max(p, pMax);
}
float computeShadowContrib(
 sampler2D map, mat4 lightVPM, vec3 position, float textureSize, vec2 scale, vec2 offset
) {
 vec4 posInLightSpace = lightVPM * vec4(position, 1.0);
 posInLightSpace.xyz /= posInLightSpace.w;
 float z = posInLightSpace.z;
 if(all(greaterThan(posInLightSpace.xyz, vec3(-0.99, -0.99, -1.0))) &&
 all(lessThan(posInLightSpace.xyz, vec3(0.99, 0.99, 1.0)))){
 vec2 uv = (posInLightSpace.xy+1.0) / 2.0;
 #ifdef USE_VSM
 vec2 moments = texture2D(map, uv * scale + offset).xy;
 return chebyshevUpperBound(moments, z);
 #else
 return pcf(map, uv * scale + offset, z, textureSize, scale);
 #endif
 }
 return 1.0;
}
float computeShadowContrib(sampler2D map, mat4 lightVPM, vec3 position, float textureSize) {
 return computeShadowContrib(map, lightVPM, position, textureSize, vec2(1.0), vec2(0.0));
}
float computeShadowContribOmni(samplerCube map, vec3 direction, float range)
{
 float dist = length(direction);
 vec4 shadowTex = textureCube(map, direction);
#ifdef USE_VSM
 vec2 moments = shadowTex.xy;
 float variance = moments.y - moments.x * moments.x;
 float mD = moments.x - dist;
 float p = variance / (variance + mD * mD);
 if(moments.x + 0.001 < dist){
 return clamp(p, 0.0, 1.0);
 }else{
 return 1.0;
 }
#else
 return step(dist, (decodeFloat(shadowTex) + 0.0002) * range);
#endif
}
@end
@export clay.plugin.compute_shadow_map
#if defined(SPOT_LIGHT_SHADOWMAP_COUNT) || defined(DIRECTIONAL_LIGHT_SHADOWMAP_COUNT) || defined(POINT_LIGHT_SHADOWMAP_COUNT)
#ifdef SPOT_LIGHT_SHADOWMAP_COUNT
uniform sampler2D spotLightShadowMaps[SPOT_LIGHT_SHADOWMAP_COUNT]:unconfigurable;
uniform mat4 spotLightMatrices[SPOT_LIGHT_SHADOWMAP_COUNT]:unconfigurable;
uniform float spotLightShadowMapSizes[SPOT_LIGHT_SHADOWMAP_COUNT]:unconfigurable;
#endif
#ifdef DIRECTIONAL_LIGHT_SHADOWMAP_COUNT
#if defined(SHADOW_CASCADE)
uniform sampler2D directionalLightShadowMaps[1]:unconfigurable;
uniform mat4 directionalLightMatrices[SHADOW_CASCADE]:unconfigurable;
uniform float directionalLightShadowMapSizes[1]:unconfigurable;
uniform float shadowCascadeClipsNear[SHADOW_CASCADE]:unconfigurable;
uniform float shadowCascadeClipsFar[SHADOW_CASCADE]:unconfigurable;
#else
uniform sampler2D directionalLightShadowMaps[DIRECTIONAL_LIGHT_SHADOWMAP_COUNT]:unconfigurable;
uniform mat4 directionalLightMatrices[DIRECTIONAL_LIGHT_SHADOWMAP_COUNT]:unconfigurable;
uniform float directionalLightShadowMapSizes[DIRECTIONAL_LIGHT_SHADOWMAP_COUNT]:unconfigurable;
#endif
#endif
#ifdef POINT_LIGHT_SHADOWMAP_COUNT
uniform samplerCube pointLightShadowMaps[POINT_LIGHT_SHADOWMAP_COUNT]:unconfigurable;
#endif
uniform bool shadowEnabled : true;
#ifdef PCF_KERNEL_SIZE
uniform vec2 pcfKernel[PCF_KERNEL_SIZE];
#endif
@import clay.plugin.shadow_map_common
#if defined(SPOT_LIGHT_SHADOWMAP_COUNT)
void computeShadowOfSpotLights(vec3 position, inout float shadowContribs[SPOT_LIGHT_COUNT] ) {
 float shadowContrib;
 for(int _idx_ = 0; _idx_ < SPOT_LIGHT_SHADOWMAP_COUNT; _idx_++) {{
 shadowContrib = computeShadowContrib(
 spotLightShadowMaps[_idx_], spotLightMatrices[_idx_], position,
 spotLightShadowMapSizes[_idx_]
 );
 shadowContribs[_idx_] = shadowContrib;
 }}
 for(int _idx_ = SPOT_LIGHT_SHADOWMAP_COUNT; _idx_ < SPOT_LIGHT_COUNT; _idx_++){{
 shadowContribs[_idx_] = 1.0;
 }}
}
#endif
#if defined(DIRECTIONAL_LIGHT_SHADOWMAP_COUNT)
#ifdef SHADOW_CASCADE
void computeShadowOfDirectionalLights(vec3 position, inout float shadowContribs[DIRECTIONAL_LIGHT_COUNT]){
 float depth = (2.0 * gl_FragCoord.z - gl_DepthRange.near - gl_DepthRange.far)
 / (gl_DepthRange.far - gl_DepthRange.near);
 float shadowContrib;
 shadowContribs[0] = 1.0;
 for (int _idx_ = 0; _idx_ < SHADOW_CASCADE; _idx_++) {{
 if (
 depth >= shadowCascadeClipsNear[_idx_] &&
 depth <= shadowCascadeClipsFar[_idx_]
 ) {
 shadowContrib = computeShadowContrib(
 directionalLightShadowMaps[0], directionalLightMatrices[_idx_], position,
 directionalLightShadowMapSizes[0],
 vec2(1.0 / float(SHADOW_CASCADE), 1.0),
 vec2(float(_idx_) / float(SHADOW_CASCADE), 0.0)
 );
 shadowContribs[0] = shadowContrib;
 }
 }}
 for(int _idx_ = DIRECTIONAL_LIGHT_SHADOWMAP_COUNT; _idx_ < DIRECTIONAL_LIGHT_COUNT; _idx_++) {{
 shadowContribs[_idx_] = 1.0;
 }}
}
#else
void computeShadowOfDirectionalLights(vec3 position, inout float shadowContribs[DIRECTIONAL_LIGHT_COUNT]){
 float shadowContrib;
 for(int _idx_ = 0; _idx_ < DIRECTIONAL_LIGHT_SHADOWMAP_COUNT; _idx_++) {{
 shadowContrib = computeShadowContrib(
 directionalLightShadowMaps[_idx_], directionalLightMatrices[_idx_], position,
 directionalLightShadowMapSizes[_idx_]
 );
 shadowContribs[_idx_] = shadowContrib;
 }}
 for(int _idx_ = DIRECTIONAL_LIGHT_SHADOWMAP_COUNT; _idx_ < DIRECTIONAL_LIGHT_COUNT; _idx_++) {{
 shadowContribs[_idx_] = 1.0;
 }}
}
#endif
#endif
#if defined(POINT_LIGHT_SHADOWMAP_COUNT)
void computeShadowOfPointLights(vec3 position, inout float shadowContribs[POINT_LIGHT_COUNT] ){
 vec3 lightPosition;
 vec3 direction;
 for(int _idx_ = 0; _idx_ < POINT_LIGHT_SHADOWMAP_COUNT; _idx_++) {{
 lightPosition = pointLightPosition[_idx_];
 direction = position - lightPosition;
 shadowContribs[_idx_] = computeShadowContribOmni(pointLightShadowMaps[_idx_], direction, pointLightRange[_idx_]);
 }}
 for(int _idx_ = POINT_LIGHT_SHADOWMAP_COUNT; _idx_ < POINT_LIGHT_COUNT; _idx_++) {{
 shadowContribs[_idx_] = 1.0;
 }}
}
#endif
#endif
@end`);var Ro,Ki,Zn,No,un,xu,Yn,Ve=$t.extend(function(){return{softShadow:Ve.PCF,shadowBlur:1,lightFrustumBias:"auto",kernelPCF:new Float32Array([1,0,1,1,-1,1,0,1,-1,0,-1,-1,1,-1,0,-1]),precision:"highp",_lastRenderNotCastShadow:!1,_frameBuffer:new jt,_textures:{},_shadowMapNumber:{POINT_LIGHT:0,DIRECTIONAL_LIGHT:0,SPOT_LIGHT:0},_depthMaterials:{},_distanceMaterials:{},_receivers:[],_lightsCastShadow:[],_lightCameras:{},_lightMaterials:{},_texturePool:new Gh}},function(){this._gaussianPassH=new Lt({fragment:N.source("clay.compositor.gaussian_blur")}),this._gaussianPassV=new Lt({fragment:N.source("clay.compositor.gaussian_blur")}),this._gaussianPassH.setUniform("blurSize",this.shadowBlur),this._gaussianPassH.setUniform("blurDir",0),this._gaussianPassV.setUniform("blurSize",this.shadowBlur),this._gaussianPassV.setUniform("blurDir",1),this._outputDepthPass=new Lt({fragment:N.source("clay.sm.debug_depth")})},{render:function(t,e,r,n){r||(r=e.getMainCamera()),this.trigger("beforerender",this,t,e,r),this._renderShadowPass(t,e,r,n),this.trigger("afterrender",this,t,e,r)},renderDebug:function(t,e){t.saveClear();var r=t.viewport,n=0,i=e||r.width/4,a=i;for(var o in this.softShadow===Ve.VSM?this._outputDepthPass.material.define("fragment","USE_VSM"):this._outputDepthPass.material.undefine("fragment","USE_VSM"),this._textures){var s=this._textures[o];t.setViewport(n,0,i*s.width/s.height,a),this._outputDepthPass.setUniform("depthMap",s),this._outputDepthPass.render(t),n+=i*s.width/s.height}t.setViewport(r),t.restoreClear()},_updateReceivers:function(t,e){if(e.receiveShadow?(this._receivers.push(e),e.material.set("shadowEnabled",1),e.material.set("pcfKernel",this.kernelPCF)):e.material.set("shadowEnabled",0),this.softShadow===Ve.VSM)e.material.define("fragment","USE_VSM"),e.material.undefine("fragment","PCF_KERNEL_SIZE");else{e.material.undefine("fragment","USE_VSM");var r=this.kernelPCF;r&&r.length?e.material.define("fragment","PCF_KERNEL_SIZE",r.length/2):e.material.undefine("fragment","PCF_KERNEL_SIZE")}},_update:function(t,e){var r=this;e.traverse(function(a){a.isRenderable()&&r._updateReceivers(t,a)});for(var n=0;n<e.lights.length;n++){var i=e.lights[n];i.castShadow&&!i.invisible&&this._lightsCastShadow.push(i)}},_renderShadowPass:function(t,e,r,n){for(var i in this._shadowMapNumber)this._shadowMapNumber[i]=0;this._lightsCastShadow.length=0,this._receivers.length=0;var a=t.gl;if(n||e.update(),r&&r.update(),e.updateLights(),this._update(t,e),this._lightsCastShadow.length||!this._lastRenderNotCastShadow){this._lastRenderNotCastShadow=this._lightsCastShadow===0,a.enable(a.DEPTH_TEST),a.depthMask(!0),a.disable(a.BLEND),a.clearColor(1,1,1,1);for(var o,s=[],l=[],u=[],h=[],c=[],d=[],f=0;f<this._lightsCastShadow.length;f++){var m=this._lightsCastShadow[f];if(m.type==="DIRECTIONAL_LIGHT"){if(o){console.warn("Only one direectional light supported with shadow cascade");continue}if(m.shadowCascade>4){console.warn("Support at most 4 cascade");continue}m.shadowCascade>1&&(o=m),this.renderDirectionalLightShadow(t,e,r,m,c,h,u)}else m.type==="SPOT_LIGHT"?this.renderSpotLightShadow(t,e,m,l,s):m.type==="POINT_LIGHT"&&this.renderPointLightShadow(t,e,m,d);this._shadowMapNumber[m.type]++}for(var p in this._shadowMapNumber){var g=this._shadowMapNumber[p],_=p+"_SHADOWMAP_COUNT";for(f=0;f<this._receivers.length;f++)(y=this._receivers[f].material).fragmentDefines[_]!==g&&(g>0?y.define("fragment",_,g):y.isDefined("fragment",_)&&y.undefine("fragment",_))}for(f=0;f<this._receivers.length;f++){var y=this._receivers[f].material;o?y.define("fragment","SHADOW_CASCADE",o.shadowCascade):y.undefine("fragment","SHADOW_CASCADE")}var x=e.shadowUniforms;if(u.length>0){var v=u.map(M);if(x.directionalLightShadowMaps={value:u,type:"tv"},x.directionalLightMatrices={value:h,type:"m4v"},x.directionalLightShadowMapSizes={value:v,type:"1fv"},o){var w=c.slice(),b=c.slice();w.pop(),b.shift(),w.reverse(),b.reverse(),h.reverse(),x.shadowCascadeClipsNear={value:w,type:"1fv"},x.shadowCascadeClipsFar={value:b,type:"1fv"}}}if(s.length>0){var S=s.map(M);(x=e.shadowUniforms).spotLightShadowMaps={value:s,type:"tv"},x.spotLightMatrices={value:l,type:"m4v"},x.spotLightShadowMapSizes={value:S,type:"1fv"}}d.length>0&&(x.pointLightShadowMaps={value:d,type:"tv"})}function M(D){return D.height}},renderDirectionalLightShadow:(Ro=new Hs,Ki=new k,Zn=new Jt,No=new k,un=new k,xu=new k,Yn=new k,function(t,e,r,n,i,a,o){var s=this._getDepthMaterial(n),l={getMaterial:function(F){return F.shadowDepthMaterial||s},isMaterialChanged:yu,getUniform:Oo,ifRender:function(F){return F.castShadow},sortCompare:hi.opaqueSortCompare};if(!e.viewBoundingBoxLastFrame.isFinite()){var u=e.getBoundingBox();e.viewBoundingBoxLastFrame.copy(u).applyTransform(r.viewMatrix)}var h=Math.min(-e.viewBoundingBoxLastFrame.min.z,r.far),c=Math.max(-e.viewBoundingBoxLastFrame.max.z,r.near),d=this._getDirectionalLightCamera(n,e,r),f=xu.array;Yn.copy(d.projectionMatrix),I.invert(un.array,d.worldTransform.array),I.multiply(un.array,un.array,r.worldTransform.array),I.multiply(f,Yn.array,un.array);for(var m=[],p=r instanceof zt,g=(r.near+r.far)/(r.near-r.far),_=2*r.near*r.far/(r.near-r.far),y=0;y<=n.shadowCascade;y++){var x=c*Math.pow(h/c,y/n.shadowCascade),v=c+(h-c)*y/n.shadowCascade,w=x*n.cascadeSplitLogFactor+v*(1-n.cascadeSplitLogFactor);m.push(w),i.push(-(-w*g+_)/-w)}var b=this._getTexture(n,n.shadowCascade);o.push(b);var S=t.viewport,M=t.gl;for(this._frameBuffer.attach(b),this._frameBuffer.bind(t),M.clear(M.COLOR_BUFFER_BIT|M.DEPTH_BUFFER_BIT),y=0;y<n.shadowCascade;y++){var D=m[y],L=m[y+1];p?I.perspective(Ki.array,r.fov/180*Math.PI,r.aspect,D,L):I.ortho(Ki.array,r.left,r.right,r.bottom,r.top,D,L),Ro.setFromProjection(Ki),Ro.getTransformedBoundingBox(Zn,un),Zn.applyProjection(Yn);var P=Zn.min.array,O=Zn.max.array;P[0]=Math.max(P[0],-1),P[1]=Math.max(P[1],-1),O[0]=Math.min(O[0],1),O[1]=Math.min(O[1],1),No.ortho(P[0],O[0],P[1],O[1],1,-1),d.projectionMatrix.multiplyLeft(No);var R=n.shadowResolution||512;t.setViewport((n.shadowCascade-y-1)*R,0,R,R,1);var A=e.updateRenderList(d);t.renderPass(A.opaque,d,l),this.softShadow===Ve.VSM&&this._gaussianFilter(t,b,b.width);var z=new k;z.copy(d.viewMatrix).multiplyLeft(d.projectionMatrix),a.push(z.array),d.projectionMatrix.copy(Yn)}this._frameBuffer.unbind(t),t.setViewport(S)}),renderSpotLightShadow:function(t,e,r,n,i){var a=this._getTexture(r),o=this._getSpotLightCamera(r),s=t.gl;this._frameBuffer.attach(a),this._frameBuffer.bind(t),s.clear(s.COLOR_BUFFER_BIT|s.DEPTH_BUFFER_BIT);var l=this._getDepthMaterial(r),u={getMaterial:function(d){return d.shadowDepthMaterial||l},isMaterialChanged:yu,getUniform:Oo,ifRender:function(d){return d.castShadow},sortCompare:hi.opaqueSortCompare},h=e.updateRenderList(o);t.renderPass(h.opaque,o,u),this._frameBuffer.unbind(t),this.softShadow===Ve.VSM&&this._gaussianFilter(t,a,a.width);var c=new k;c.copy(o.worldTransform).invert().multiplyLeft(o.projectionMatrix),i.push(a),n.push(c.array)},renderPointLightShadow:function(t,e,r,n){var i=this._getTexture(r),a=t.gl;n.push(i);var o=this._getDepthMaterial(r),s={getMaterial:function(y){return y.shadowDepthMaterial||o},getUniform:Oo,sortCompare:hi.opaqueSortCompare},l={px:[],py:[],pz:[],nx:[],ny:[],nz:[]},u=new Jt,h=r.getWorldPosition().array,c=new Jt,d=r.range;c.min.setArray(h),c.max.setArray(h);var f=new B(d,d,d);c.max.add(f),c.min.sub(f);var m={px:!1,py:!1,pz:!1,nx:!1,ny:!1,nz:!1};e.traverse(function(y){if(y.isRenderable()&&y.castShadow){var x=y.geometry;if(!x.boundingBox){for(var v=0;v<cr.length;v++)l[cr[v]].push(y);return}if(u.transformFrom(x.boundingBox,y.worldTransform),!u.intersectBoundingBox(c))return;for(u.updateVertices(),v=0;v<cr.length;v++)m[cr[v]]=!1;for(v=0;v<8;v++){var w=u.vertices[v],b=w[0]-h[0],S=w[1]-h[1],M=w[2]-h[2],D=Math.abs(b),L=Math.abs(S),P=Math.abs(M);D>L?D>P?m[b>0?"px":"nx"]=!0:m[M>0?"pz":"nz"]=!0:L>P?m[S>0?"py":"ny"]=!0:m[M>0?"pz":"nz"]=!0}for(v=0;v<cr.length;v++)m[cr[v]]&&l[cr[v]].push(y)}});for(var p=0;p<6;p++){var g=cr[p],_=this._getPointLightCamera(r,g);this._frameBuffer.attach(i,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+p),this._frameBuffer.bind(t),a.clear(a.COLOR_BUFFER_BIT|a.DEPTH_BUFFER_BIT),t.renderPass(l[g],_,s)}this._frameBuffer.unbind(t)},_getDepthMaterial:function(t){var e=this._lightMaterials[t.__uid__],r=t.type==="POINT_LIGHT";if(!e){var n=r?"clay.sm.distance.":"clay.sm.depth.";e=new ve({precision:this.precision,shader:new N(N.source(n+"vertex"),N.source(n+"fragment"))}),this._lightMaterials[t.__uid__]=e}return t.shadowSlopeScale!=null&&e.setUniform("slopeScale",t.shadowSlopeScale),t.shadowBias!=null&&e.setUniform("bias",t.shadowBias),this.softShadow===Ve.VSM?e.define("fragment","USE_VSM"):e.undefine("fragment","USE_VSM"),r&&(e.set("lightPosition",t.getWorldPosition().array),e.set("range",t.range)),e},_gaussianFilter:function(t,e,r){var n={width:r,height:r,type:V.FLOAT},i=this._texturePool.get(n);this._frameBuffer.attach(i),this._frameBuffer.bind(t),this._gaussianPassH.setUniform("texture",e),this._gaussianPassH.setUniform("textureWidth",r),this._gaussianPassH.render(t),this._frameBuffer.attach(e),this._gaussianPassV.setUniform("texture",i),this._gaussianPassV.setUniform("textureHeight",r),this._gaussianPassV.render(t),this._frameBuffer.unbind(t),this._texturePool.put(i)},_getTexture:function(t,e){var r=t.__uid__,n=this._textures[r],i=t.shadowResolution||512;return e=e||1,n||((n=t.type==="POINT_LIGHT"?new gi:new K).width=i*e,n.height=i,this.softShadow===Ve.VSM?(n.type=V.FLOAT,n.anisotropic=4):(n.minFilter=fi,n.magFilter=fi,n.useMipmap=!1),this._textures[r]=n),n},_getPointLightCamera:function(t,e){this._lightCameras.point||(this._lightCameras.point={px:new zt,nx:new zt,py:new zt,ny:new zt,pz:new zt,nz:new zt});var r=this._lightCameras.point[e];switch(r.far=t.range,r.fov=90,r.position.set(0,0,0),e){case"px":r.lookAt(B.POSITIVE_X,B.NEGATIVE_Y);break;case"nx":r.lookAt(B.NEGATIVE_X,B.NEGATIVE_Y);break;case"py":r.lookAt(B.POSITIVE_Y,B.POSITIVE_Z);break;case"ny":r.lookAt(B.NEGATIVE_Y,B.NEGATIVE_Z);break;case"pz":r.lookAt(B.POSITIVE_Z,B.NEGATIVE_Y);break;case"nz":r.lookAt(B.NEGATIVE_Z,B.NEGATIVE_Y)}return t.getWorldPosition(r.position),r.update(),r},_getDirectionalLightCamera:function(){var t=new k,e=new Jt,r=new Jt;return function(n,i,a){this._lightCameras.directional||(this._lightCameras.directional=new Mn);var o=this._lightCameras.directional;e.copy(i.viewBoundingBoxLastFrame),e.intersection(a.frustum.boundingBox),o.position.copy(e.min).add(e.max).scale(.5).transformMat4(a.worldTransform),o.rotation.copy(n.rotation),o.scale.copy(n.scale),o.updateWorldTransform(),k.invert(t,o.worldTransform),k.multiply(t,t,a.worldTransform),r.copy(e).applyTransform(t);var s=r.min.array,l=r.max.array;return o.position.set((s[0]+l[0])/2,(s[1]+l[1])/2,l[2]).transformMat4(o.worldTransform),o.near=0,o.far=-s[2]+l[2],isNaN(this.lightFrustumBias)?o.far*=4:o.far+=this.lightFrustumBias,o.left=s[0],o.right=l[0],o.top=l[1],o.bottom=s[1],o.update(!0),o}}(),_getSpotLightCamera:function(t){this._lightCameras.spot||(this._lightCameras.spot=new zt);var e=this._lightCameras.spot;return e.fov=2*t.penumbraAngle,e.far=t.range,e.worldTransform.copy(t.worldTransform),e.updateProjectionMatrix(),I.invert(e.viewMatrix.array,e.worldTransform.array),e},dispose:function(t){var e=t.gl||t;for(var r in this._frameBuffer&&this._frameBuffer.dispose(e),this._textures)this._textures[r].dispose(e);this._texturePool.clear(t.gl),this._depthMaterials={},this._distanceMaterials={},this._textures={},this._lightCameras={},this._shadowMapNumber={POINT_LIGHT:0,DIRECTIONAL_LIGHT:0,SPOT_LIGHT:0},this._meshMaterials={};for(var n=0;n<this._receivers.length;n++){var i=this._receivers[n];if(i.material){var a=i.material;a.undefine("fragment","POINT_LIGHT_SHADOW_COUNT"),a.undefine("fragment","DIRECTIONAL_LIGHT_SHADOW_COUNT"),a.undefine("fragment","AMBIENT_LIGHT_SHADOW_COUNT"),a.set("shadowEnabled",0)}}this._receivers=[],this._lightsCastShadow=[]}});Ve.VSM=1,Ve.PCF=2;const xp=Ve,_i=$t.extend(function(){return{name:"",inputLinks:{},outputLinks:{},_prevOutputTextures:{},_outputTextures:{},_outputReferences:{},_rendering:!1,_rendered:!1,_compositor:null}},{updateParameter:function(t,e){var r,n,i=this.outputs[t],a=i.parameters,o=i._parametersCopy;if(o||(o=i._parametersCopy={}),a)for(var s in a)s!=="width"&&s!=="height"&&(o[s]=a[s]);return r=a.width instanceof Function?a.width.call(this,e):a.width,n=a.height instanceof Function?a.height.call(this,e):a.height,o.width===r&&o.height===n||this._outputTextures[t]&&this._outputTextures[t].dispose(e.gl),o.width=r,o.height=n,o},setParameter:function(t,e){},getParameter:function(t){},setParameters:function(t){for(var e in t)this.setParameter(e,t[e])},render:function(){},getOutput:function(t,e){if(e==null)return e=t,this._outputTextures[e];var r=this.outputs[e];return r?this._rendered?r.outputLastFrame?this._prevOutputTextures[e]:this._outputTextures[e]:this._rendering?(this._prevOutputTextures[e]||(this._prevOutputTextures[e]=this._compositor.allocateTexture(r.parameters||{})),this._prevOutputTextures[e]):(this.render(t),this._outputTextures[e]):void 0},removeReference:function(t){this._outputReferences[t]--,this._outputReferences[t]===0&&(this.outputs[t].keepLastFrame?(this._prevOutputTextures[t]&&this._compositor.releaseTexture(this._prevOutputTextures[t]),this._prevOutputTextures[t]=this._outputTextures[t]):this._compositor.releaseTexture(this._outputTextures[t]))},link:function(t,e,r){this.inputLinks[t]={node:e,pin:r},e.outputLinks[r]||(e.outputLinks[r]=[]),e.outputLinks[r].push({node:this,pin:t}),this.pass.material.enableTexture(t)},clear:function(){this.inputLinks={},this.outputLinks={}},updateReference:function(t){if(!this._rendering){for(var e in this._rendering=!0,this.inputLinks){var r=this.inputLinks[e];r.node.updateReference(r.pin)}this._rendering=!1}t&&this._outputReferences[t]++},beforeFrame:function(){for(var t in this._rendered=!1,this.outputLinks)this._outputReferences[t]=0},afterFrame:function(){for(var t in this.outputLinks)this._outputReferences[t]>0&&(this.outputs[t].keepLastFrame?(this._prevOutputTextures[t]&&this._compositor.releaseTexture(this._prevOutputTextures[t]),this._prevOutputTextures[t]=this._outputTextures[t]):this._compositor.releaseTexture(this._outputTextures[t]))}});var bp=$t.extend(function(){return{nodes:[]}},{dirty:function(){this._dirty=!0},addNode:function(t){this.nodes.indexOf(t)>=0||(this.nodes.push(t),this._dirty=!0)},removeNode:function(t){typeof t=="string"&&(t=this.getNodeByName(t));var e=this.nodes.indexOf(t);e>=0&&(this.nodes.splice(e,1),this._dirty=!0)},getNodeByName:function(t){for(var e=0;e<this.nodes.length;e++)if(this.nodes[e].name===t)return this.nodes[e]},update:function(){for(var t=0;t<this.nodes.length;t++)this.nodes[t].clear();for(t=0;t<this.nodes.length;t++){var e=this.nodes[t];if(e.inputs){for(var r in e.inputs)if(e.inputs[r])if(!e.pass||e.pass.material.isUniformEnabled(r)){var n=e.inputs[r],i=this.findPin(n);i?e.link(r,i.node,i.pin):console.warn(typeof n=="string"?"Node "+n+" not exist":"Pin of "+n.node+"."+n.pin+" not exist")}else console.warn("Pin "+e.name+"."+r+" not used.")}}},findPin:function(t){var e;if((typeof t=="string"||t instanceof _i)&&(t={node:t}),typeof t.node=="string")for(var r=0;r<this.nodes.length;r++){var n=this.nodes[r];n.name===t.node&&(e=n)}else e=t.node;if(e){var i=t.pin;if(i||e.outputs&&(i=Object.keys(e.outputs)[0]),e.outputs[i])return{node:e,pin:i}}}});const bu=bp,wp=bu.extend(function(){return{_outputs:[],_texturePool:new Gh,_frameBuffer:new jt({depthBuffer:!1})}},{addNode:function(t){bu.prototype.addNode.call(this,t),t._compositor=this},render:function(t,e){if(this._dirty){this.update(),this._dirty=!1,this._outputs.length=0;for(var r=0;r<this.nodes.length;r++)this.nodes[r].outputs||this._outputs.push(this.nodes[r])}for(r=0;r<this.nodes.length;r++)this.nodes[r].beforeFrame();for(r=0;r<this._outputs.length;r++)this._outputs[r].updateReference();for(r=0;r<this._outputs.length;r++)this._outputs[r].render(t,e);for(r=0;r<this.nodes.length;r++)this.nodes[r].afterFrame()},allocateTexture:function(t){return this._texturePool.get(t)},releaseTexture:function(t){this._texturePool.put(t)},getFrameBuffer:function(){return this._frameBuffer},dispose:function(t){this._texturePool.clear(t)}}),Tp=_i.extend({name:"scene",scene:null,camera:null,autoUpdateScene:!0,preZ:!1},function(){this.frameBuffer=new jt},{render:function(t){this._rendering=!0;var e,r=t.gl;if(this.trigger("beforerender"),this.outputs){var n=this.frameBuffer;for(var i in this.outputs){var a=this.updateParameter(i,t),o=this.outputs[i],s=this._compositor.allocateTexture(a);this._outputTextures[i]=s,typeof(h=o.attachment||r.COLOR_ATTACHMENT0)=="string"&&(h=r[h]),n.attach(s,h)}n.bind(t);var l=t.getGLExtension("EXT_draw_buffers");if(l){var u=[];for(var h in this.outputs)(h=parseInt(h))>=r.COLOR_ATTACHMENT0&&h<=r.COLOR_ATTACHMENT0+8&&u.push(h);l.drawBuffersEXT(u)}t.saveClear(),t.clearBit=16640,e=t.render(this.scene,this.camera,!this.autoUpdateScene,this.preZ),t.restoreClear(),n.unbind(t)}else e=t.render(this.scene,this.camera,!this.autoUpdateScene,this.preZ);this.trigger("afterrender",e),this._rendering=!1,this._rendered=!0}}),Sp=_i.extend(function(){return{texture:null,outputs:{color:{}}}},function(){},{getOutput:function(t,e){return this.texture},beforeFrame:function(){},afterFrame:function(){}}),Mp=_i.extend(function(){return{name:"",inputs:{},outputs:null,shader:"",inputLinks:{},outputLinks:{},pass:null,_prevOutputTextures:{},_outputTextures:{},_outputReferences:{},_rendering:!1,_rendered:!1,_compositor:null}},function(){var t=new Lt({fragment:this.shader});this.pass=t},{render:function(t,e){this.trigger("beforerender",t),this._rendering=!0;var r=t.gl;for(var n in this.inputLinks){var i=(c=this.inputLinks[n]).node.getOutput(t,c.pin);this.pass.setUniform(n,i)}if(this.outputs){this.pass.outputs={};var a={};for(var o in this.outputs){var s=this.updateParameter(o,t);isNaN(s.width)&&this.updateParameter(o,t);var l=this.outputs[o],u=this._compositor.allocateTexture(s);this._outputTextures[o]=u,typeof(h=l.attachment||r.COLOR_ATTACHMENT0)=="string"&&(h=r[h]),a[h]=u}for(var h in this._compositor.getFrameBuffer().bind(t),a)this._compositor.getFrameBuffer().attach(a[h],h);this.pass.render(t),this._compositor.getFrameBuffer().updateMipmap(t)}else this.pass.outputs=null,this._compositor.getFrameBuffer().unbind(t),this.pass.render(t,e);for(var n in this.inputLinks){var c;(c=this.inputLinks[n]).node.removeReference(c.pin)}this._rendering=!1,this._rendered=!0,this.trigger("afterrender",t)},updateParameter:function(t,e){var r,n,i=this.outputs[t],a=i.parameters,o=i._parametersCopy;if(o||(o=i._parametersCopy={}),a)for(var s in a)s!=="width"&&s!=="height"&&(o[s]=a[s]);return r=typeof a.width=="function"?a.width.call(this,e):a.width,n=typeof a.height=="function"?a.height.call(this,e):a.height,r=Math.ceil(r),n=Math.ceil(n),o.width===r&&o.height===n||this._outputTextures[t]&&this._outputTextures[t].dispose(e),o.width=r,o.height=n,o},setParameter:function(t,e){this.pass.setUniform(t,e)},getParameter:function(t){return this.pass.getUniform(t)},setParameters:function(t){for(var e in t)this.setParameter(e,t[e])},define:function(t,e){this.pass.material.define("fragment",t,e)},undefine:function(t){this.pass.material.undefine("fragment",t)},removeReference:function(t){this._outputReferences[t]--,this._outputReferences[t]===0&&(this.outputs[t].keepLastFrame?(this._prevOutputTextures[t]&&this._compositor.releaseTexture(this._prevOutputTextures[t]),this._prevOutputTextures[t]=this._outputTextures[t]):this._compositor.releaseTexture(this._outputTextures[t]))},clear:function(){_i.prototype.clear.call(this),this.pass.material.disableTexturesAll()}}),kh=`@export clay.compositor.kernel.gaussian_9
float gaussianKernel[9];
gaussianKernel[0] = 0.07;
gaussianKernel[1] = 0.09;
gaussianKernel[2] = 0.12;
gaussianKernel[3] = 0.14;
gaussianKernel[4] = 0.16;
gaussianKernel[5] = 0.14;
gaussianKernel[6] = 0.12;
gaussianKernel[7] = 0.09;
gaussianKernel[8] = 0.07;
@end
@export clay.compositor.kernel.gaussian_13
float gaussianKernel[13];
gaussianKernel[0] = 0.02;
gaussianKernel[1] = 0.03;
gaussianKernel[2] = 0.06;
gaussianKernel[3] = 0.08;
gaussianKernel[4] = 0.11;
gaussianKernel[5] = 0.13;
gaussianKernel[6] = 0.14;
gaussianKernel[7] = 0.13;
gaussianKernel[8] = 0.11;
gaussianKernel[9] = 0.08;
gaussianKernel[10] = 0.06;
gaussianKernel[11] = 0.03;
gaussianKernel[12] = 0.02;
@end
@export clay.compositor.gaussian_blur
#define SHADER_NAME gaussian_blur
uniform sampler2D texture;varying vec2 v_Texcoord;
uniform float blurSize : 2.0;
uniform vec2 textureSize : [512.0, 512.0];
uniform float blurDir : 0.0;
@import clay.util.rgbm
@import clay.util.clamp_sample
void main (void)
{
 @import clay.compositor.kernel.gaussian_9
 vec2 off = blurSize / textureSize;
 off *= vec2(1.0 - blurDir, blurDir);
 vec4 sum = vec4(0.0);
 float weightAll = 0.0;
 for (int i = 0; i < 9; i++) {
 float w = gaussianKernel[i];
 vec4 texel = decodeHDR(clampSample(texture, v_Texcoord + float(i - 4) * off));
 sum += texel * w;
 weightAll += w;
 }
 gl_FragColor = encodeHDR(sum / max(weightAll, 0.01));
}
@end
`,Hh=`
@export clay.compositor.lut
varying vec2 v_Texcoord;
uniform sampler2D texture;
uniform sampler2D lookup;
void main()
{
 vec4 tex = texture2D(texture, v_Texcoord);
 float blueColor = tex.b * 63.0;
 vec2 quad1;
 quad1.y = floor(floor(blueColor) / 8.0);
 quad1.x = floor(blueColor) - (quad1.y * 8.0);
 vec2 quad2;
 quad2.y = floor(ceil(blueColor) / 8.0);
 quad2.x = ceil(blueColor) - (quad2.y * 8.0);
 vec2 texPos1;
 texPos1.x = (quad1.x * 0.125) + 0.5/512.0 + ((0.125 - 1.0/512.0) * tex.r);
 texPos1.y = (quad1.y * 0.125) + 0.5/512.0 + ((0.125 - 1.0/512.0) * tex.g);
 vec2 texPos2;
 texPos2.x = (quad2.x * 0.125) + 0.5/512.0 + ((0.125 - 1.0/512.0) * tex.r);
 texPos2.y = (quad2.y * 0.125) + 0.5/512.0 + ((0.125 - 1.0/512.0) * tex.g);
 vec4 newColor1 = texture2D(lookup, texPos1);
 vec4 newColor2 = texture2D(lookup, texPos2);
 vec4 newColor = mix(newColor1, newColor2, fract(blueColor));
 gl_FragColor = vec4(newColor.rgb, tex.w);
}
@end`,Vh=`@export clay.compositor.output
#define OUTPUT_ALPHA
varying vec2 v_Texcoord;
uniform sampler2D texture;
@import clay.util.rgbm
void main()
{
 vec4 tex = decodeHDR(texture2D(texture, v_Texcoord));
 gl_FragColor.rgb = tex.rgb;
#ifdef OUTPUT_ALPHA
 gl_FragColor.a = tex.a;
#else
 gl_FragColor.a = 1.0;
#endif
 gl_FragColor = encodeHDR(gl_FragColor);
#ifdef PREMULTIPLY_ALPHA
 gl_FragColor.rgb *= gl_FragColor.a;
#endif
}
@end`,Wh=`@export clay.compositor.bright
uniform sampler2D texture;
uniform float threshold : 1;
uniform float scale : 1.0;
uniform vec2 textureSize: [512, 512];
varying vec2 v_Texcoord;
const vec3 lumWeight = vec3(0.2125, 0.7154, 0.0721);
@import clay.util.rgbm
vec4 median(vec4 a, vec4 b, vec4 c)
{
 return a + b + c - min(min(a, b), c) - max(max(a, b), c);
}
void main()
{
 vec4 texel = decodeHDR(texture2D(texture, v_Texcoord));
#ifdef ANTI_FLICKER
 vec3 d = 1.0 / textureSize.xyx * vec3(1.0, 1.0, 0.0);
 vec4 s1 = decodeHDR(texture2D(texture, v_Texcoord - d.xz));
 vec4 s2 = decodeHDR(texture2D(texture, v_Texcoord + d.xz));
 vec4 s3 = decodeHDR(texture2D(texture, v_Texcoord - d.zy));
 vec4 s4 = decodeHDR(texture2D(texture, v_Texcoord + d.zy));
 texel = median(median(texel, s1, s2), s3, s4);
#endif
 float lum = dot(texel.rgb , lumWeight);
 vec4 color;
 if (lum > threshold && texel.a > 0.0)
 {
 color = vec4(texel.rgb * scale, texel.a * scale);
 }
 else
 {
 color = vec4(0.0);
 }
 gl_FragColor = encodeHDR(color);
}
@end
`,jh=`@export clay.compositor.downsample
uniform sampler2D texture;
uniform vec2 textureSize : [512, 512];
varying vec2 v_Texcoord;
@import clay.util.rgbm
float brightness(vec3 c)
{
 return max(max(c.r, c.g), c.b);
}
@import clay.util.clamp_sample
void main()
{
 vec4 d = vec4(-1.0, -1.0, 1.0, 1.0) / textureSize.xyxy;
#ifdef ANTI_FLICKER
 vec3 s1 = decodeHDR(clampSample(texture, v_Texcoord + d.xy)).rgb;
 vec3 s2 = decodeHDR(clampSample(texture, v_Texcoord + d.zy)).rgb;
 vec3 s3 = decodeHDR(clampSample(texture, v_Texcoord + d.xw)).rgb;
 vec3 s4 = decodeHDR(clampSample(texture, v_Texcoord + d.zw)).rgb;
 float s1w = 1.0 / (brightness(s1) + 1.0);
 float s2w = 1.0 / (brightness(s2) + 1.0);
 float s3w = 1.0 / (brightness(s3) + 1.0);
 float s4w = 1.0 / (brightness(s4) + 1.0);
 float oneDivideSum = 1.0 / (s1w + s2w + s3w + s4w);
 vec4 color = vec4(
 (s1 * s1w + s2 * s2w + s3 * s3w + s4 * s4w) * oneDivideSum,
 1.0
 );
#else
 vec4 color = decodeHDR(clampSample(texture, v_Texcoord + d.xy));
 color += decodeHDR(clampSample(texture, v_Texcoord + d.zy));
 color += decodeHDR(clampSample(texture, v_Texcoord + d.xw));
 color += decodeHDR(clampSample(texture, v_Texcoord + d.zw));
 color *= 0.25;
#endif
 gl_FragColor = encodeHDR(color);
}
@end`,Xh=`
@export clay.compositor.upsample
#define HIGH_QUALITY
uniform sampler2D texture;
uniform vec2 textureSize : [512, 512];
uniform float sampleScale: 0.5;
varying vec2 v_Texcoord;
@import clay.util.rgbm
@import clay.util.clamp_sample
void main()
{
#ifdef HIGH_QUALITY
 vec4 d = vec4(1.0, 1.0, -1.0, 0.0) / textureSize.xyxy * sampleScale;
 vec4 s;
 s = decodeHDR(clampSample(texture, v_Texcoord - d.xy));
 s += decodeHDR(clampSample(texture, v_Texcoord - d.wy)) * 2.0;
 s += decodeHDR(clampSample(texture, v_Texcoord - d.zy));
 s += decodeHDR(clampSample(texture, v_Texcoord + d.zw)) * 2.0;
 s += decodeHDR(clampSample(texture, v_Texcoord )) * 4.0;
 s += decodeHDR(clampSample(texture, v_Texcoord + d.xw)) * 2.0;
 s += decodeHDR(clampSample(texture, v_Texcoord + d.zy));
 s += decodeHDR(clampSample(texture, v_Texcoord + d.wy)) * 2.0;
 s += decodeHDR(clampSample(texture, v_Texcoord + d.xy));
 gl_FragColor = encodeHDR(s / 16.0);
#else
 vec4 d = vec4(-1.0, -1.0, +1.0, +1.0) / textureSize.xyxy;
 vec4 s;
 s = decodeHDR(clampSample(texture, v_Texcoord + d.xy));
 s += decodeHDR(clampSample(texture, v_Texcoord + d.zy));
 s += decodeHDR(clampSample(texture, v_Texcoord + d.xw));
 s += decodeHDR(clampSample(texture, v_Texcoord + d.zw));
 gl_FragColor = encodeHDR(s / 4.0);
#endif
}
@end`,qh=`@export clay.compositor.hdr.composite
#define TONEMAPPING
uniform sampler2D texture;
#ifdef BLOOM_ENABLED
uniform sampler2D bloom;
#endif
#ifdef LENSFLARE_ENABLED
uniform sampler2D lensflare;
uniform sampler2D lensdirt;
#endif
#ifdef LUM_ENABLED
uniform sampler2D lum;
#endif
#ifdef LUT_ENABLED
uniform sampler2D lut;
#endif
#ifdef COLOR_CORRECTION
uniform float brightness : 0.0;
uniform float contrast : 1.0;
uniform float saturation : 1.0;
#endif
#ifdef VIGNETTE
uniform float vignetteDarkness: 1.0;
uniform float vignetteOffset: 1.0;
#endif
uniform float exposure : 1.0;
uniform float bloomIntensity : 0.25;
uniform float lensflareIntensity : 1;
varying vec2 v_Texcoord;
@import clay.util.srgb
vec3 ACESToneMapping(vec3 color)
{
 const float A = 2.51;
 const float B = 0.03;
 const float C = 2.43;
 const float D = 0.59;
 const float E = 0.14;
 return (color * (A * color + B)) / (color * (C * color + D) + E);
}
float eyeAdaption(float fLum)
{
 return mix(0.2, fLum, 0.5);
}
#ifdef LUT_ENABLED
vec3 lutTransform(vec3 color) {
 float blueColor = color.b * 63.0;
 vec2 quad1;
 quad1.y = floor(floor(blueColor) / 8.0);
 quad1.x = floor(blueColor) - (quad1.y * 8.0);
 vec2 quad2;
 quad2.y = floor(ceil(blueColor) / 8.0);
 quad2.x = ceil(blueColor) - (quad2.y * 8.0);
 vec2 texPos1;
 texPos1.x = (quad1.x * 0.125) + 0.5/512.0 + ((0.125 - 1.0/512.0) * color.r);
 texPos1.y = (quad1.y * 0.125) + 0.5/512.0 + ((0.125 - 1.0/512.0) * color.g);
 vec2 texPos2;
 texPos2.x = (quad2.x * 0.125) + 0.5/512.0 + ((0.125 - 1.0/512.0) * color.r);
 texPos2.y = (quad2.y * 0.125) + 0.5/512.0 + ((0.125 - 1.0/512.0) * color.g);
 vec4 newColor1 = texture2D(lut, texPos1);
 vec4 newColor2 = texture2D(lut, texPos2);
 vec4 newColor = mix(newColor1, newColor2, fract(blueColor));
 return newColor.rgb;
}
#endif
@import clay.util.rgbm
void main()
{
 vec4 texel = vec4(0.0);
 vec4 originalTexel = vec4(0.0);
#ifdef TEXTURE_ENABLED
 texel = decodeHDR(texture2D(texture, v_Texcoord));
 originalTexel = texel;
#endif
#ifdef BLOOM_ENABLED
 vec4 bloomTexel = decodeHDR(texture2D(bloom, v_Texcoord));
 texel.rgb += bloomTexel.rgb * bloomIntensity;
 texel.a += bloomTexel.a * bloomIntensity;
#endif
#ifdef LENSFLARE_ENABLED
 texel += decodeHDR(texture2D(lensflare, v_Texcoord)) * texture2D(lensdirt, v_Texcoord) * lensflareIntensity;
#endif
 texel.a = min(texel.a, 1.0);
#ifdef LUM_ENABLED
 float fLum = texture2D(lum, vec2(0.5, 0.5)).r;
 float adaptedLumDest = 3.0 / (max(0.1, 1.0 + 10.0*eyeAdaption(fLum)));
 float exposureBias = adaptedLumDest * exposure;
#else
 float exposureBias = exposure;
#endif
#ifdef TONEMAPPING
 texel.rgb *= exposureBias;
 texel.rgb = ACESToneMapping(texel.rgb);
#endif
 texel = linearTosRGB(texel);
#ifdef LUT_ENABLED
 texel.rgb = lutTransform(clamp(texel.rgb,vec3(0.0),vec3(1.0)));
#endif
#ifdef COLOR_CORRECTION
 texel.rgb = clamp(texel.rgb + vec3(brightness), 0.0, 1.0);
 texel.rgb = clamp((texel.rgb - vec3(0.5))*contrast+vec3(0.5), 0.0, 1.0);
 float lum = dot(texel.rgb, vec3(0.2125, 0.7154, 0.0721));
 texel.rgb = mix(vec3(lum), texel.rgb, saturation);
#endif
#ifdef VIGNETTE
 vec2 uv = (v_Texcoord - vec2(0.5)) * vec2(vignetteOffset);
 texel.rgb = mix(texel.rgb, vec3(1.0 - vignetteDarkness), dot(uv, uv));
#endif
 gl_FragColor = encodeHDR(texel);
#ifdef DEBUG
 #if DEBUG == 1
 gl_FragColor = encodeHDR(decodeHDR(texture2D(texture, v_Texcoord)));
 #elif DEBUG == 2
 gl_FragColor = encodeHDR(decodeHDR(texture2D(bloom, v_Texcoord)) * bloomIntensity);
 #elif DEBUG == 3
 gl_FragColor = encodeHDR(decodeHDR(texture2D(lensflare, v_Texcoord) * lensflareIntensity));
 #endif
#endif
 if (originalTexel.a <= 0.01 && gl_FragColor.a > 1e-5) {
 gl_FragColor.a = dot(gl_FragColor.rgb, vec3(0.2125, 0.7154, 0.0721));
 }
#ifdef PREMULTIPLY_ALPHA
 gl_FragColor.rgb *= gl_FragColor.a;
#endif
}
@end`,Zh=`@export clay.compositor.blend
#define SHADER_NAME blend
#ifdef TEXTURE1_ENABLED
uniform sampler2D texture1;
uniform float weight1 : 1.0;
#endif
#ifdef TEXTURE2_ENABLED
uniform sampler2D texture2;
uniform float weight2 : 1.0;
#endif
#ifdef TEXTURE3_ENABLED
uniform sampler2D texture3;
uniform float weight3 : 1.0;
#endif
#ifdef TEXTURE4_ENABLED
uniform sampler2D texture4;
uniform float weight4 : 1.0;
#endif
#ifdef TEXTURE5_ENABLED
uniform sampler2D texture5;
uniform float weight5 : 1.0;
#endif
#ifdef TEXTURE6_ENABLED
uniform sampler2D texture6;
uniform float weight6 : 1.0;
#endif
varying vec2 v_Texcoord;
@import clay.util.rgbm
void main()
{
 vec4 tex = vec4(0.0);
#ifdef TEXTURE1_ENABLED
 tex += decodeHDR(texture2D(texture1, v_Texcoord)) * weight1;
#endif
#ifdef TEXTURE2_ENABLED
 tex += decodeHDR(texture2D(texture2, v_Texcoord)) * weight2;
#endif
#ifdef TEXTURE3_ENABLED
 tex += decodeHDR(texture2D(texture3, v_Texcoord)) * weight3;
#endif
#ifdef TEXTURE4_ENABLED
 tex += decodeHDR(texture2D(texture4, v_Texcoord)) * weight4;
#endif
#ifdef TEXTURE5_ENABLED
 tex += decodeHDR(texture2D(texture5, v_Texcoord)) * weight5;
#endif
#ifdef TEXTURE6_ENABLED
 tex += decodeHDR(texture2D(texture6, v_Texcoord)) * weight6;
#endif
 gl_FragColor = encodeHDR(tex);
}
@end`,Yh=`@export clay.compositor.fxaa
uniform sampler2D texture;
uniform vec4 viewport : VIEWPORT;
varying vec2 v_Texcoord;
#define FXAA_REDUCE_MIN (1.0/128.0)
#define FXAA_REDUCE_MUL (1.0/8.0)
#define FXAA_SPAN_MAX 8.0
@import clay.util.rgbm
void main()
{
 vec2 resolution = 1.0 / viewport.zw;
 vec3 rgbNW = decodeHDR( texture2D( texture, ( gl_FragCoord.xy + vec2( -1.0, -1.0 ) ) * resolution ) ).xyz;
 vec3 rgbNE = decodeHDR( texture2D( texture, ( gl_FragCoord.xy + vec2( 1.0, -1.0 ) ) * resolution ) ).xyz;
 vec3 rgbSW = decodeHDR( texture2D( texture, ( gl_FragCoord.xy + vec2( -1.0, 1.0 ) ) * resolution ) ).xyz;
 vec3 rgbSE = decodeHDR( texture2D( texture, ( gl_FragCoord.xy + vec2( 1.0, 1.0 ) ) * resolution ) ).xyz;
 vec4 rgbaM = decodeHDR( texture2D( texture, gl_FragCoord.xy * resolution ) );
 vec3 rgbM = rgbaM.xyz;
 float opacity = rgbaM.w;
 vec3 luma = vec3( 0.299, 0.587, 0.114 );
 float lumaNW = dot( rgbNW, luma );
 float lumaNE = dot( rgbNE, luma );
 float lumaSW = dot( rgbSW, luma );
 float lumaSE = dot( rgbSE, luma );
 float lumaM = dot( rgbM, luma );
 float lumaMin = min( lumaM, min( min( lumaNW, lumaNE ), min( lumaSW, lumaSE ) ) );
 float lumaMax = max( lumaM, max( max( lumaNW, lumaNE) , max( lumaSW, lumaSE ) ) );
 vec2 dir;
 dir.x = -((lumaNW + lumaNE) - (lumaSW + lumaSE));
 dir.y = ((lumaNW + lumaSW) - (lumaNE + lumaSE));
 float dirReduce = max( ( lumaNW + lumaNE + lumaSW + lumaSE ) * ( 0.25 * FXAA_REDUCE_MUL ), FXAA_REDUCE_MIN );
 float rcpDirMin = 1.0 / ( min( abs( dir.x ), abs( dir.y ) ) + dirReduce );
 dir = min( vec2( FXAA_SPAN_MAX, FXAA_SPAN_MAX),
 max( vec2(-FXAA_SPAN_MAX, -FXAA_SPAN_MAX),
 dir * rcpDirMin)) * resolution;
 vec3 rgbA = decodeHDR( texture2D( texture, gl_FragCoord.xy * resolution + dir * ( 1.0 / 3.0 - 0.5 ) ) ).xyz;
 rgbA += decodeHDR( texture2D( texture, gl_FragCoord.xy * resolution + dir * ( 2.0 / 3.0 - 0.5 ) ) ).xyz;
 rgbA *= 0.5;
 vec3 rgbB = decodeHDR( texture2D( texture, gl_FragCoord.xy * resolution + dir * -0.5 ) ).xyz;
 rgbB += decodeHDR( texture2D( texture, gl_FragCoord.xy * resolution + dir * 0.5 ) ).xyz;
 rgbB *= 0.25;
 rgbB += rgbA * 0.5;
 float lumaB = dot( rgbB, luma );
 if ( ( lumaB < lumaMin ) || ( lumaB > lumaMax ) )
 {
 gl_FragColor = vec4( rgbA, opacity );
 }
 else {
 gl_FragColor = vec4( rgbB, opacity );
 }
}
@end`;var oe;(oe=N).import(`@export clay.compositor.coloradjust
varying vec2 v_Texcoord;
uniform sampler2D texture;
uniform float brightness : 0.0;
uniform float contrast : 1.0;
uniform float exposure : 0.0;
uniform float gamma : 1.0;
uniform float saturation : 1.0;
const vec3 w = vec3(0.2125, 0.7154, 0.0721);
void main()
{
 vec4 tex = texture2D( texture, v_Texcoord);
 vec3 color = clamp(tex.rgb + vec3(brightness), 0.0, 1.0);
 color = clamp( (color-vec3(0.5))*contrast+vec3(0.5), 0.0, 1.0);
 color = clamp( color * pow(2.0, exposure), 0.0, 1.0);
 color = clamp( pow(color, vec3(gamma)), 0.0, 1.0);
 float luminance = dot( color, w );
 color = mix(vec3(luminance), color, saturation);
 gl_FragColor = vec4(color, tex.a);
}
@end
@export clay.compositor.brightness
varying vec2 v_Texcoord;
uniform sampler2D texture;
uniform float brightness : 0.0;
void main()
{
 vec4 tex = texture2D( texture, v_Texcoord);
 vec3 color = tex.rgb + vec3(brightness);
 gl_FragColor = vec4(color, tex.a);
}
@end
@export clay.compositor.contrast
varying vec2 v_Texcoord;
uniform sampler2D texture;
uniform float contrast : 1.0;
void main()
{
 vec4 tex = texture2D( texture, v_Texcoord);
 vec3 color = (tex.rgb-vec3(0.5))*contrast+vec3(0.5);
 gl_FragColor = vec4(color, tex.a);
}
@end
@export clay.compositor.exposure
varying vec2 v_Texcoord;
uniform sampler2D texture;
uniform float exposure : 0.0;
void main()
{
 vec4 tex = texture2D(texture, v_Texcoord);
 vec3 color = tex.rgb * pow(2.0, exposure);
 gl_FragColor = vec4(color, tex.a);
}
@end
@export clay.compositor.gamma
varying vec2 v_Texcoord;
uniform sampler2D texture;
uniform float gamma : 1.0;
void main()
{
 vec4 tex = texture2D(texture, v_Texcoord);
 vec3 color = pow(tex.rgb, vec3(gamma));
 gl_FragColor = vec4(color, tex.a);
}
@end
@export clay.compositor.saturation
varying vec2 v_Texcoord;
uniform sampler2D texture;
uniform float saturation : 1.0;
const vec3 w = vec3(0.2125, 0.7154, 0.0721);
void main()
{
 vec4 tex = texture2D(texture, v_Texcoord);
 vec3 color = tex.rgb;
 float luminance = dot(color, w);
 color = mix(vec3(luminance), color, saturation);
 gl_FragColor = vec4(color, tex.a);
}
@end`),oe.import(kh),oe.import(`@export clay.compositor.hdr.log_lum
varying vec2 v_Texcoord;
uniform sampler2D texture;
const vec3 w = vec3(0.2125, 0.7154, 0.0721);
@import clay.util.rgbm
void main()
{
 vec4 tex = decodeHDR(texture2D(texture, v_Texcoord));
 float luminance = dot(tex.rgb, w);
 luminance = log(luminance + 0.001);
 gl_FragColor = encodeHDR(vec4(vec3(luminance), 1.0));
}
@end
@export clay.compositor.hdr.lum_adaption
varying vec2 v_Texcoord;
uniform sampler2D adaptedLum;
uniform sampler2D currentLum;
uniform float frameTime : 0.02;
@import clay.util.rgbm
void main()
{
 float fAdaptedLum = decodeHDR(texture2D(adaptedLum, vec2(0.5, 0.5))).r;
 float fCurrentLum = exp(encodeHDR(texture2D(currentLum, vec2(0.5, 0.5))).r);
 fAdaptedLum += (fCurrentLum - fAdaptedLum) * (1.0 - pow(0.98, 30.0 * frameTime));
 gl_FragColor = encodeHDR(vec4(vec3(fAdaptedLum), 1.0));
}
@end
@export clay.compositor.lum
varying vec2 v_Texcoord;
uniform sampler2D texture;
const vec3 w = vec3(0.2125, 0.7154, 0.0721);
void main()
{
 vec4 tex = texture2D( texture, v_Texcoord );
 float luminance = dot(tex.rgb, w);
 gl_FragColor = vec4(vec3(luminance), 1.0);
}
@end`),oe.import(Hh),oe.import(`@export clay.compositor.vignette
#define OUTPUT_ALPHA
varying vec2 v_Texcoord;
uniform sampler2D texture;
uniform float darkness: 1;
uniform float offset: 1;
@import clay.util.rgbm
void main()
{
 vec4 texel = decodeHDR(texture2D(texture, v_Texcoord));
 gl_FragColor.rgb = texel.rgb;
 vec2 uv = (v_Texcoord - vec2(0.5)) * vec2(offset);
 gl_FragColor = encodeHDR(vec4(mix(texel.rgb, vec3(1.0 - darkness), dot(uv, uv)), texel.a));
}
@end`),oe.import(Vh),oe.import(Wh),oe.import(jh),oe.import(Xh),oe.import(qh),oe.import(`@export clay.compositor.lensflare
#define SAMPLE_NUMBER 8
uniform sampler2D texture;
uniform sampler2D lenscolor;
uniform vec2 textureSize : [512, 512];
uniform float dispersal : 0.3;
uniform float haloWidth : 0.4;
uniform float distortion : 1.0;
varying vec2 v_Texcoord;
@import clay.util.rgbm
vec4 textureDistorted(
 in vec2 texcoord,
 in vec2 direction,
 in vec3 distortion
) {
 return vec4(
 decodeHDR(texture2D(texture, texcoord + direction * distortion.r)).r,
 decodeHDR(texture2D(texture, texcoord + direction * distortion.g)).g,
 decodeHDR(texture2D(texture, texcoord + direction * distortion.b)).b,
 1.0
 );
}
void main()
{
 vec2 texcoord = -v_Texcoord + vec2(1.0); vec2 textureOffset = 1.0 / textureSize;
 vec2 ghostVec = (vec2(0.5) - texcoord) * dispersal;
 vec2 haloVec = normalize(ghostVec) * haloWidth;
 vec3 distortion = vec3(-textureOffset.x * distortion, 0.0, textureOffset.x * distortion);
 vec4 result = vec4(0.0);
 for (int i = 0; i < SAMPLE_NUMBER; i++)
 {
 vec2 offset = fract(texcoord + ghostVec * float(i));
 float weight = length(vec2(0.5) - offset) / length(vec2(0.5));
 weight = pow(1.0 - weight, 10.0);
 result += textureDistorted(offset, normalize(ghostVec), distortion) * weight;
 }
 result *= texture2D(lenscolor, vec2(length(vec2(0.5) - texcoord)) / length(vec2(0.5)));
 float weight = length(vec2(0.5) - fract(texcoord + haloVec)) / length(vec2(0.5));
 weight = pow(1.0 - weight, 10.0);
 vec2 offset = fract(texcoord + haloVec);
 result += textureDistorted(offset, normalize(ghostVec), distortion) * weight;
 gl_FragColor = result;
}
@end`),oe.import(Zh),oe.import(Yh);var Ep=/^#source\((.*?)\)/;function Ap(t,e,r){var n,i,a,o,s=t.type||"filter";if(s==="filter"){var l=t.shader.trim(),u=Ep.exec(l);if(u?n=N.source(u[1].trim()):l.charAt(0)==="#"&&(n=e.shaders[l.substr(1)]),n||(n=l),!n)return}if(t.inputs)for(var h in i={},t.inputs)typeof t.inputs[h]=="string"?i[h]=t.inputs[h]:i[h]={node:t.inputs[h].node,pin:t.inputs[h].pin};if(t.outputs)for(var h in a={},t.outputs){var c=t.outputs[h];a[h]={},c.attachment!=null&&(a[h].attachment=c.attachment),c.keepLastFrame!=null&&(a[h].keepLastFrame=c.keepLastFrame),c.outputLastFrame!=null&&(a[h].outputLastFrame=c.outputLastFrame),c.parameters&&(a[h].parameters=cs(c.parameters))}if(o=s==="scene"?new Tp({name:t.name,scene:r.scene,camera:r.camera,outputs:a}):s==="texture"?new Sp({name:t.name,outputs:a}):new Mp({name:t.name,shader:n,inputs:i,outputs:a})){if(t.parameters)for(var h in t.parameters)typeof(d=t.parameters[h])=="string"?(d=d.trim()).charAt(0)==="#"?d=e.textures[d.substr(1)]:o.on("beforerender",Lp(h,Kh(d))):typeof d=="function"&&o.on("beforerender",d),o.setParameter(h,d);if(t.defines&&o.pass)for(var h in t.defines){var d=t.defines[h];o.pass.material.define("fragment",h,d)}}return o}function Dp(t,e){return t}function Cp(t,e){return e}function cs(t){var e={};if(!t)return e;["type","minFilter","magFilter","wrapS","wrapT","flipY","useMipmap"].forEach(function(n){var i=t[n];i!=null&&(typeof i=="string"&&(i=V[i]),e[n]=i)});var r=t.scale||1;return["width","height"].forEach(function(n){if(t[n]!=null){var i=t[n];typeof i=="string"?(i=i.trim(),e[n]=(a=Kh(i),o=(o=r)||1,function(s){var l=s.getDevicePixelRatio(),u=s.getWidth()*o,h=s.getHeight()*o;return a(u,h,l)})):e[n]=i}var a,o}),e.width||(e.width=Dp),e.height||(e.height=Cp),t.useMipmap!=null&&(e.useMipmap=t.useMipmap),e}function Lp(t,e){return function(r){var n=r.getDevicePixelRatio(),i=r.getWidth(),a=r.getHeight(),o=e(i,a,n);this.setParameter(t,o)}}function Kh(t){var e=/^expr\((.*)\)$/.exec(t);if(e)try{var r=new Function("width","height","dpr","return "+e[1]);return r(1,1),r}catch{throw new Error("Invalid expression.")}}function En(t,e){for(var r=0,n=1/e,i=t;i>0;)r+=n*(i%e),i=Math.floor(i/e),n/=e;return r}function Jh(t){for(var e=new Uint8Array(t*t*4),r=0,n=new B,i=0;i<t;i++)for(var a=0;a<t;a++)n.set(2*Math.random()-1,2*Math.random()-1,0).normalize(),e[r++]=255*(.5*n.x+.5),e[r++]=255*(.5*n.y+.5),e[r++]=0,e[r++]=255;return e}function wu(t){return new K({pixels:Jh(t),wrapS:V.REPEAT,wrapT:V.REPEAT,width:t,height:t})}function Pp(t,e,r){var n=new Float32Array(3*t);e=e||0;for(var i=0;i<t;i++){var a=En(i+e,2)*(r?1:2)*Math.PI,o=En(i+e,3)*Math.PI,s=Math.random(),l=Math.cos(a)*Math.sin(o)*s,u=Math.cos(o)*s,h=Math.sin(a)*Math.sin(o)*s;n[3*i]=l,n[3*i+1]=u,n[3*i+2]=h}return n}function tr(t){t=t||{},this._ssaoPass=new Lt({fragment:N.source("ecgl.ssao.estimate")}),this._blurPass=new Lt({fragment:N.source("ecgl.ssao.blur")}),this._framebuffer=new jt({depthBuffer:!1}),this._ssaoTexture=new K,this._blurTexture=new K,this._blurTexture2=new K,this._depthTex=t.depthTexture,this._normalTex=t.normalTexture,this.setNoiseSize(4),this.setKernelSize(t.kernelSize||12),t.radius!=null&&this.setParameter("radius",t.radius),t.power!=null&&this.setParameter("power",t.power),this._normalTex||(this._ssaoPass.material.disableTexture("normalTex"),this._blurPass.material.disableTexture("normalTex")),this._depthTex||this._blurPass.material.disableTexture("depthTex"),this._blurPass.material.setUniform("normalTex",this._normalTex),this._blurPass.material.setUniform("depthTex",this._depthTex)}function er(t){t=t||{},this._ssrPass=new Lt({fragment:N.source("ecgl.ssr.main"),clearColor:[0,0,0,0]}),this._blurPass1=new Lt({fragment:N.source("ecgl.ssr.blur"),clearColor:[0,0,0,0]}),this._blurPass2=new Lt({fragment:N.source("ecgl.ssr.blur"),clearColor:[0,0,0,0]}),this._blendPass=new Lt({fragment:N.source("clay.compositor.blend")}),this._blendPass.material.disableTexturesAll(),this._blendPass.material.enableTexture(["texture1","texture2"]),this._ssrPass.setUniform("gBufferTexture1",t.normalTexture),this._ssrPass.setUniform("gBufferTexture2",t.depthTexture),this._blurPass1.setUniform("gBufferTexture1",t.normalTexture),this._blurPass1.setUniform("gBufferTexture2",t.depthTexture),this._blurPass2.setUniform("gBufferTexture1",t.normalTexture),this._blurPass2.setUniform("gBufferTexture2",t.depthTexture),this._blurPass2.material.define("fragment","VERTICAL"),this._blurPass2.material.define("fragment","BLEND"),this._ssrTexture=new K({type:V.HALF_FLOAT}),this._texture2=new K({type:V.HALF_FLOAT}),this._texture3=new K({type:V.HALF_FLOAT}),this._prevTexture=new K({type:V.HALF_FLOAT}),this._currentTexture=new K({type:V.HALF_FLOAT}),this._frameBuffer=new jt({depthBuffer:!1}),this._normalDistribution=null,this._totalSamples=256,this._samplePerFrame=4,this._ssrPass.material.define("fragment","SAMPLE_PER_FRAME",this._samplePerFrame),this._ssrPass.material.define("fragment","TOTAL_SAMPLES",this._totalSamples),this._downScale=1}N.import(`@export ecgl.ssao.estimate

uniform sampler2D depthTex;

uniform sampler2D normalTex;

uniform sampler2D noiseTex;

uniform vec2 depthTexSize;

uniform vec2 noiseTexSize;

uniform mat4 projection;

uniform mat4 projectionInv;

uniform mat4 viewInverseTranspose;

uniform vec3 kernel[KERNEL_SIZE];

uniform float radius : 1;

uniform float power : 1;

uniform float bias: 1e-2;

uniform float intensity: 1.0;

varying vec2 v_Texcoord;

float ssaoEstimator(in vec3 originPos, in mat3 kernelBasis) {
 float occlusion = 0.0;

 for (int i = 0; i < KERNEL_SIZE; i++) {
 vec3 samplePos = kernel[i];
#ifdef NORMALTEX_ENABLED
 samplePos = kernelBasis * samplePos;
#endif
 samplePos = samplePos * radius + originPos;

 vec4 texCoord = projection * vec4(samplePos, 1.0);
 texCoord.xy /= texCoord.w;

 vec4 depthTexel = texture2D(depthTex, texCoord.xy * 0.5 + 0.5);

 float sampleDepth = depthTexel.r * 2.0 - 1.0;
 if (projection[3][3] == 0.0) {
 sampleDepth = projection[3][2] / (sampleDepth * projection[2][3] - projection[2][2]);
 }
 else {
 sampleDepth = (sampleDepth - projection[3][2]) / projection[2][2];
 }
 
 float rangeCheck = smoothstep(0.0, 1.0, radius / abs(originPos.z - sampleDepth));
 occlusion += rangeCheck * step(samplePos.z, sampleDepth - bias);
 }
#ifdef NORMALTEX_ENABLED
 occlusion = 1.0 - occlusion / float(KERNEL_SIZE);
#else
 occlusion = 1.0 - clamp((occlusion / float(KERNEL_SIZE) - 0.6) * 2.5, 0.0, 1.0);
#endif
 return pow(occlusion, power);
}

void main()
{

 vec4 depthTexel = texture2D(depthTex, v_Texcoord);

#ifdef NORMALTEX_ENABLED
 vec4 tex = texture2D(normalTex, v_Texcoord);
 if (dot(tex.rgb, tex.rgb) == 0.0) {
 gl_FragColor = vec4(1.0);
 return;
 }
 vec3 N = tex.rgb * 2.0 - 1.0;
 N = (viewInverseTranspose * vec4(N, 0.0)).xyz;

 vec2 noiseTexCoord = depthTexSize / vec2(noiseTexSize) * v_Texcoord;
 vec3 rvec = texture2D(noiseTex, noiseTexCoord).rgb * 2.0 - 1.0;
 vec3 T = normalize(rvec - N * dot(rvec, N));
 vec3 BT = normalize(cross(N, T));
 mat3 kernelBasis = mat3(T, BT, N);
#else
 if (depthTexel.r > 0.99999) {
 gl_FragColor = vec4(1.0);
 return;
 }
 mat3 kernelBasis;
#endif

 float z = depthTexel.r * 2.0 - 1.0;

 vec4 projectedPos = vec4(v_Texcoord * 2.0 - 1.0, z, 1.0);
 vec4 p4 = projectionInv * projectedPos;

 vec3 position = p4.xyz / p4.w;

 float ao = ssaoEstimator(position, kernelBasis);
 ao = clamp(1.0 - (1.0 - ao) * intensity, 0.0, 1.0);
 gl_FragColor = vec4(vec3(ao), 1.0);
}

@end


@export ecgl.ssao.blur
#define SHADER_NAME SSAO_BLUR

uniform sampler2D ssaoTexture;

#ifdef NORMALTEX_ENABLED
uniform sampler2D normalTex;
#endif

varying vec2 v_Texcoord;

uniform vec2 textureSize;
uniform float blurSize : 1.0;

uniform int direction: 0.0;

#ifdef DEPTHTEX_ENABLED
uniform sampler2D depthTex;
uniform mat4 projection;
uniform float depthRange : 0.5;

float getLinearDepth(vec2 coord)
{
 float depth = texture2D(depthTex, coord).r * 2.0 - 1.0;
 return projection[3][2] / (depth * projection[2][3] - projection[2][2]);
}
#endif

void main()
{
 float kernel[5];
 kernel[0] = 0.122581;
 kernel[1] = 0.233062;
 kernel[2] = 0.288713;
 kernel[3] = 0.233062;
 kernel[4] = 0.122581;

 vec2 off = vec2(0.0);
 if (direction == 0) {
 off[0] = blurSize / textureSize.x;
 }
 else {
 off[1] = blurSize / textureSize.y;
 }

 vec2 coord = v_Texcoord;

 float sum = 0.0;
 float weightAll = 0.0;

#ifdef NORMALTEX_ENABLED
 vec3 centerNormal = texture2D(normalTex, v_Texcoord).rgb * 2.0 - 1.0;
#endif
#if defined(DEPTHTEX_ENABLED)
 float centerDepth = getLinearDepth(v_Texcoord);
#endif

 for (int i = 0; i < 5; i++) {
 vec2 coord = clamp(v_Texcoord + vec2(float(i) - 2.0) * off, vec2(0.0), vec2(1.0));

 float w = kernel[i];
#ifdef NORMALTEX_ENABLED
 vec3 normal = texture2D(normalTex, coord).rgb * 2.0 - 1.0;
 w *= clamp(dot(normal, centerNormal), 0.0, 1.0);
#endif
#ifdef DEPTHTEX_ENABLED
 float d = getLinearDepth(coord);
 w *= (1.0 - smoothstep(abs(centerDepth - d) / depthRange, 0.0, 1.0));
#endif

 weightAll += w;
 sum += texture2D(ssaoTexture, coord).r * w;
 }

 gl_FragColor = vec4(vec3(sum / weightAll), 1.0);
}

@end
`),tr.prototype.setDepthTexture=function(t){this._depthTex=t},tr.prototype.setNormalTexture=function(t){this._normalTex=t,this._ssaoPass.material[t?"enableTexture":"disableTexture"]("normalTex"),this.setKernelSize(this._kernelSize)},tr.prototype.update=function(t,e,r){var n=t.getWidth(),i=t.getHeight(),a=this._ssaoPass,o=this._blurPass;a.setUniform("kernel",this._kernels[r%this._kernels.length]),a.setUniform("depthTex",this._depthTex),this._normalTex!=null&&a.setUniform("normalTex",this._normalTex),a.setUniform("depthTexSize",[this._depthTex.width,this._depthTex.height]);var s=new k;k.transpose(s,e.worldTransform),a.setUniform("projection",e.projectionMatrix.array),a.setUniform("projectionInv",e.invProjectionMatrix.array),a.setUniform("viewInverseTranspose",s.array);var l=this._ssaoTexture,u=this._blurTexture,h=this._blurTexture2;l.width=n/2,l.height=i/2,u.width=n,u.height=i,h.width=n,h.height=i,this._framebuffer.attach(l),this._framebuffer.bind(t),t.gl.clearColor(1,1,1,1),t.gl.clear(t.gl.COLOR_BUFFER_BIT),a.render(t),o.setUniform("textureSize",[n/2,i/2]),o.setUniform("projection",e.projectionMatrix.array),this._framebuffer.attach(u),o.setUniform("direction",0),o.setUniform("ssaoTexture",l),o.render(t),this._framebuffer.attach(h),o.setUniform("textureSize",[n,i]),o.setUniform("direction",1),o.setUniform("ssaoTexture",u),o.render(t),this._framebuffer.unbind(t);var c=t.clearColor;t.gl.clearColor(c[0],c[1],c[2],c[3])},tr.prototype.getTargetTexture=function(){return this._blurTexture2},tr.prototype.setParameter=function(t,e){t==="noiseTexSize"?this.setNoiseSize(e):t==="kernelSize"?this.setKernelSize(e):t==="intensity"?this._ssaoPass.material.set("intensity",e):this._ssaoPass.setUniform(t,e)},tr.prototype.setKernelSize=function(t){this._kernelSize=t,this._ssaoPass.material.define("fragment","KERNEL_SIZE",t),this._kernels=this._kernels||[];for(var e=0;e<30;e++)this._kernels[e]=Pp(t,e*t,!!this._normalTex)},tr.prototype.setNoiseSize=function(t){var e=this._ssaoPass.getUniform("noiseTex");e?(e.data=Jh(t),e.width=e.height=t,e.dirty()):(e=wu(t),this._ssaoPass.setUniform("noiseTex",wu(t))),this._ssaoPass.setUniform("noiseTexSize",[t,t])},tr.prototype.dispose=function(t){this._blurTexture.dispose(t),this._ssaoTexture.dispose(t),this._blurTexture2.dispose(t)},N.import(`@export ecgl.ssr.main

#define SHADER_NAME SSR
#define MAX_ITERATION 20;
#define SAMPLE_PER_FRAME 5;
#define TOTAL_SAMPLES 128;

uniform sampler2D sourceTexture;
uniform sampler2D gBufferTexture1;
uniform sampler2D gBufferTexture2;
uniform sampler2D gBufferTexture3;
uniform samplerCube specularCubemap;
uniform float specularIntensity: 1;

uniform mat4 projection;
uniform mat4 projectionInv;
uniform mat4 toViewSpace;
uniform mat4 toWorldSpace;

uniform float maxRayDistance: 200;

uniform float pixelStride: 16;
uniform float pixelStrideZCutoff: 50; 
uniform float screenEdgeFadeStart: 0.9; 
uniform float eyeFadeStart : 0.2; uniform float eyeFadeEnd: 0.8; 
uniform float minGlossiness: 0.2; uniform float zThicknessThreshold: 1;

uniform float nearZ;
uniform vec2 viewportSize : VIEWPORT_SIZE;

uniform float jitterOffset: 0;

varying vec2 v_Texcoord;

#ifdef DEPTH_DECODE
@import clay.util.decode_float
#endif

#ifdef PHYSICALLY_CORRECT
uniform sampler2D normalDistribution;
uniform float sampleOffset: 0;
uniform vec2 normalDistributionSize;

vec3 transformNormal(vec3 H, vec3 N) {
 vec3 upVector = N.y > 0.999 ? vec3(1.0, 0.0, 0.0) : vec3(0.0, 1.0, 0.0);
 vec3 tangentX = normalize(cross(N, upVector));
 vec3 tangentZ = cross(N, tangentX);
 return normalize(tangentX * H.x + N * H.y + tangentZ * H.z);
}
vec3 importanceSampleNormalGGX(float i, float roughness, vec3 N) {
 float p = fract((i + sampleOffset) / float(TOTAL_SAMPLES));
 vec3 H = texture2D(normalDistribution,vec2(roughness, p)).rgb;
 return transformNormal(H, N);
}
float G_Smith(float g, float ndv, float ndl) {
 float roughness = 1.0 - g;
 float k = roughness * roughness / 2.0;
 float G1V = ndv / (ndv * (1.0 - k) + k);
 float G1L = ndl / (ndl * (1.0 - k) + k);
 return G1L * G1V;
}
vec3 F_Schlick(float ndv, vec3 spec) {
 return spec + (1.0 - spec) * pow(1.0 - ndv, 5.0);
}
#endif

float fetchDepth(sampler2D depthTexture, vec2 uv)
{
 vec4 depthTexel = texture2D(depthTexture, uv);
 return depthTexel.r * 2.0 - 1.0;
}

float linearDepth(float depth)
{
 if (projection[3][3] == 0.0) {
 return projection[3][2] / (depth * projection[2][3] - projection[2][2]);
 }
 else {
 return (depth - projection[3][2]) / projection[2][2];
 }
}

bool rayIntersectDepth(float rayZNear, float rayZFar, vec2 hitPixel)
{
 if (rayZFar > rayZNear)
 {
 float t = rayZFar; rayZFar = rayZNear; rayZNear = t;
 }
 float cameraZ = linearDepth(fetchDepth(gBufferTexture2, hitPixel));
 return rayZFar <= cameraZ && rayZNear >= cameraZ - zThicknessThreshold;
}


bool traceScreenSpaceRay(
 vec3 rayOrigin, vec3 rayDir, float jitter,
 out vec2 hitPixel, out vec3 hitPoint, out float iterationCount
)
{
 float rayLength = ((rayOrigin.z + rayDir.z * maxRayDistance) > -nearZ)
 ? (-nearZ - rayOrigin.z) / rayDir.z : maxRayDistance;

 vec3 rayEnd = rayOrigin + rayDir * rayLength;

 vec4 H0 = projection * vec4(rayOrigin, 1.0);
 vec4 H1 = projection * vec4(rayEnd, 1.0);

 float k0 = 1.0 / H0.w, k1 = 1.0 / H1.w;

 vec3 Q0 = rayOrigin * k0, Q1 = rayEnd * k1;

 vec2 P0 = (H0.xy * k0 * 0.5 + 0.5) * viewportSize;
 vec2 P1 = (H1.xy * k1 * 0.5 + 0.5) * viewportSize;

 P1 += dot(P1 - P0, P1 - P0) < 0.0001 ? 0.01 : 0.0;
 vec2 delta = P1 - P0;

 bool permute = false;
 if (abs(delta.x) < abs(delta.y)) {
 permute = true;
 delta = delta.yx;
 P0 = P0.yx;
 P1 = P1.yx;
 }
 float stepDir = sign(delta.x);
 float invdx = stepDir / delta.x;

 vec3 dQ = (Q1 - Q0) * invdx;
 float dk = (k1 - k0) * invdx;

 vec2 dP = vec2(stepDir, delta.y * invdx);

 float strideScaler = 1.0 - min(1.0, -rayOrigin.z / pixelStrideZCutoff);
 float pixStride = 1.0 + strideScaler * pixelStride;

 dP *= pixStride; dQ *= pixStride; dk *= pixStride;

 vec4 pqk = vec4(P0, Q0.z, k0);
 vec4 dPQK = vec4(dP, dQ.z, dk);

 pqk += dPQK * jitter;
 float rayZFar = (dPQK.z * 0.5 + pqk.z) / (dPQK.w * 0.5 + pqk.w);
 float rayZNear;

 bool intersect = false;

 vec2 texelSize = 1.0 / viewportSize;

 iterationCount = 0.0;

 for (int i = 0; i < MAX_ITERATION; i++)
 {
 pqk += dPQK;

 rayZNear = rayZFar;
 rayZFar = (dPQK.z * 0.5 + pqk.z) / (dPQK.w * 0.5 + pqk.w);

 hitPixel = permute ? pqk.yx : pqk.xy;
 hitPixel *= texelSize;

 intersect = rayIntersectDepth(rayZNear, rayZFar, hitPixel);

 iterationCount += 1.0;

 dPQK *= 1.2;

 if (intersect) {
 break;
 }
 }

 Q0.xy += dQ.xy * iterationCount;
 Q0.z = pqk.z;
 hitPoint = Q0 / pqk.w;

 return intersect;
}

float calculateAlpha(
 float iterationCount, float reflectivity,
 vec2 hitPixel, vec3 hitPoint, float dist, vec3 rayDir
)
{
 float alpha = clamp(reflectivity, 0.0, 1.0);
 alpha *= 1.0 - (iterationCount / float(MAX_ITERATION));
 vec2 hitPixelNDC = hitPixel * 2.0 - 1.0;
 float maxDimension = min(1.0, max(abs(hitPixelNDC.x), abs(hitPixelNDC.y)));
 alpha *= 1.0 - max(0.0, maxDimension - screenEdgeFadeStart) / (1.0 - screenEdgeFadeStart);

 float _eyeFadeStart = eyeFadeStart;
 float _eyeFadeEnd = eyeFadeEnd;
 if (_eyeFadeStart > _eyeFadeEnd) {
 float tmp = _eyeFadeEnd;
 _eyeFadeEnd = _eyeFadeStart;
 _eyeFadeStart = tmp;
 }

 float eyeDir = clamp(rayDir.z, _eyeFadeStart, _eyeFadeEnd);
 alpha *= 1.0 - (eyeDir - _eyeFadeStart) / (_eyeFadeEnd - _eyeFadeStart);

 alpha *= 1.0 - clamp(dist / maxRayDistance, 0.0, 1.0);

 return alpha;
}

@import clay.util.rand

@import clay.util.rgbm

void main()
{
 vec4 normalAndGloss = texture2D(gBufferTexture1, v_Texcoord);

 if (dot(normalAndGloss.rgb, vec3(1.0)) == 0.0) {
 discard;
 }

 float g = normalAndGloss.a;
#if !defined(PHYSICALLY_CORRECT)
 if (g <= minGlossiness) {
 discard;
 }
#endif

 float reflectivity = (g - minGlossiness) / (1.0 - minGlossiness);

 vec3 N = normalize(normalAndGloss.rgb * 2.0 - 1.0);
 N = normalize((toViewSpace * vec4(N, 0.0)).xyz);

 vec4 projectedPos = vec4(v_Texcoord * 2.0 - 1.0, fetchDepth(gBufferTexture2, v_Texcoord), 1.0);
 vec4 pos = projectionInv * projectedPos;
 vec3 rayOrigin = pos.xyz / pos.w;
 vec3 V = -normalize(rayOrigin);

 float ndv = clamp(dot(N, V), 0.0, 1.0);
 float iterationCount;
 float jitter = rand(fract(v_Texcoord + jitterOffset));

#ifdef PHYSICALLY_CORRECT
 vec4 color = vec4(vec3(0.0), 1.0);
 vec4 albedoMetalness = texture2D(gBufferTexture3, v_Texcoord);
 vec3 albedo = albedoMetalness.rgb;
 float m = albedoMetalness.a;
 vec3 diffuseColor = albedo * (1.0 - m);
 vec3 spec = mix(vec3(0.04), albedo, m);

 float jitter2 = rand(fract(v_Texcoord)) * float(TOTAL_SAMPLES);

 for (int i = 0; i < SAMPLE_PER_FRAME; i++) {
 vec3 H = importanceSampleNormalGGX(float(i) + jitter2, 1.0 - g, N);
 vec3 rayDir = normalize(reflect(-V, H));
#else
 vec3 rayDir = normalize(reflect(-V, N));
#endif
 vec2 hitPixel;
 vec3 hitPoint;

 bool intersect = traceScreenSpaceRay(rayOrigin, rayDir, jitter, hitPixel, hitPoint, iterationCount);

 float dist = distance(rayOrigin, hitPoint);

 vec3 hitNormal = texture2D(gBufferTexture1, hitPixel).rgb * 2.0 - 1.0;
 hitNormal = normalize((toViewSpace * vec4(hitNormal, 0.0)).xyz);
#ifdef PHYSICALLY_CORRECT
 float ndl = clamp(dot(N, rayDir), 0.0, 1.0);
 float vdh = clamp(dot(V, H), 0.0, 1.0);
 float ndh = clamp(dot(N, H), 0.0, 1.0);
 vec3 litTexel = vec3(0.0);
 if (dot(hitNormal, rayDir) < 0.0 && intersect) {
 litTexel = texture2D(sourceTexture, hitPixel).rgb;
 litTexel *= pow(clamp(1.0 - dist / 200.0, 0.0, 1.0), 3.0);

 }
 else {
 #ifdef SPECULARCUBEMAP_ENABLED
 vec3 rayDirW = normalize(toWorldSpace * vec4(rayDir, 0.0)).rgb;
 litTexel = RGBMDecode(textureCubeLodEXT(specularCubemap, rayDirW, 0.0), 8.12).rgb * specularIntensity;
#endif
 }
 color.rgb += ndl * litTexel * (
 F_Schlick(ndl, spec) * G_Smith(g, ndv, ndl) * vdh / (ndh * ndv + 0.001)
 );
 }
 color.rgb /= float(SAMPLE_PER_FRAME);
#else
 #if !defined(SPECULARCUBEMAP_ENABLED)
 if (dot(hitNormal, rayDir) >= 0.0) {
 discard;
 }
 if (!intersect) {
 discard;
 }
#endif
 float alpha = clamp(calculateAlpha(iterationCount, reflectivity, hitPixel, hitPoint, dist, rayDir), 0.0, 1.0);
 vec4 color = texture2D(sourceTexture, hitPixel);
 color.rgb *= alpha;

#ifdef SPECULARCUBEMAP_ENABLED
 vec3 rayDirW = normalize(toWorldSpace * vec4(rayDir, 0.0)).rgb;
 alpha = alpha * (intersect ? 1.0 : 0.0);
 float bias = (1.0 -g) * 5.0;
 color.rgb += (1.0 - alpha)
 * RGBMDecode(textureCubeLodEXT(specularCubemap, rayDirW, bias), 8.12).rgb
 * specularIntensity;
#endif

#endif

 gl_FragColor = encodeHDR(color);
}
@end

@export ecgl.ssr.blur

uniform sampler2D texture;
uniform sampler2D gBufferTexture1;
uniform sampler2D gBufferTexture2;
uniform mat4 projection;
uniform float depthRange : 0.05;

varying vec2 v_Texcoord;

uniform vec2 textureSize;
uniform float blurSize : 1.0;

#ifdef BLEND
 #ifdef SSAOTEX_ENABLED
uniform sampler2D ssaoTex;
 #endif
uniform sampler2D sourceTexture;
#endif

float getLinearDepth(vec2 coord)
{
 float depth = texture2D(gBufferTexture2, coord).r * 2.0 - 1.0;
 return projection[3][2] / (depth * projection[2][3] - projection[2][2]);
}

@import clay.util.rgbm


void main()
{
 @import clay.compositor.kernel.gaussian_9

 vec4 centerNTexel = texture2D(gBufferTexture1, v_Texcoord);
 float g = centerNTexel.a;
 float maxBlurSize = clamp(1.0 - g, 0.0, 1.0) * blurSize;
#ifdef VERTICAL
 vec2 off = vec2(0.0, maxBlurSize / textureSize.y);
#else
 vec2 off = vec2(maxBlurSize / textureSize.x, 0.0);
#endif

 vec2 coord = v_Texcoord;

 vec4 sum = vec4(0.0);
 float weightAll = 0.0;

 vec3 cN = centerNTexel.rgb * 2.0 - 1.0;
 float cD = getLinearDepth(v_Texcoord);
 for (int i = 0; i < 9; i++) {
 vec2 coord = clamp((float(i) - 4.0) * off + v_Texcoord, vec2(0.0), vec2(1.0));
 float w = gaussianKernel[i]
 * clamp(dot(cN, texture2D(gBufferTexture1, coord).rgb * 2.0 - 1.0), 0.0, 1.0);
 float d = getLinearDepth(coord);
 w *= (1.0 - smoothstep(abs(cD - d) / depthRange, 0.0, 1.0));

 weightAll += w;
 sum += decodeHDR(texture2D(texture, coord)) * w;
 }

#ifdef BLEND
 float aoFactor = 1.0;
 #ifdef SSAOTEX_ENABLED
 aoFactor = texture2D(ssaoTex, v_Texcoord).r;
 #endif
 gl_FragColor = encodeHDR(
 sum / weightAll * aoFactor + decodeHDR(texture2D(sourceTexture, v_Texcoord))
 );
#else
 gl_FragColor = encodeHDR(sum / weightAll);
#endif
}

@end`),er.prototype.setAmbientCubemap=function(t,e){this._ssrPass.material.set("specularCubemap",t),this._ssrPass.material.set("specularIntensity",e);var r=t&&e;this._ssrPass.material[r?"enableTexture":"disableTexture"]("specularCubemap")},er.prototype.update=function(t,e,r,n){var i=t.getWidth(),a=t.getHeight(),o=this._ssrTexture,s=this._texture2,l=this._texture3;o.width=this._prevTexture.width=this._currentTexture.width=i/this._downScale,o.height=this._prevTexture.height=this._currentTexture.height=a/this._downScale,s.width=l.width=i,s.height=l.height=a;var u=this._frameBuffer,h=this._ssrPass,c=this._blurPass1,d=this._blurPass2,f=this._blendPass,m=new k,p=new k;k.transpose(m,e.worldTransform),k.transpose(p,e.viewMatrix),h.setUniform("sourceTexture",r),h.setUniform("projection",e.projectionMatrix.array),h.setUniform("projectionInv",e.invProjectionMatrix.array),h.setUniform("toViewSpace",m.array),h.setUniform("toWorldSpace",p.array),h.setUniform("nearZ",e.near);var g=n/this._totalSamples*this._samplePerFrame;if(h.setUniform("jitterOffset",g),h.setUniform("sampleOffset",n*this._samplePerFrame),c.setUniform("textureSize",[o.width,o.height]),d.setUniform("textureSize",[i,a]),d.setUniform("sourceTexture",r),c.setUniform("projection",e.projectionMatrix.array),d.setUniform("projection",e.projectionMatrix.array),u.attach(o),u.bind(t),h.render(t),this._physicallyCorrect&&(u.attach(this._currentTexture),f.setUniform("texture1",this._prevTexture),f.setUniform("texture2",o),f.material.set({weight1:n>=1?.95:0,weight2:n>=1?.05:1}),f.render(t)),u.attach(s),c.setUniform("texture",this._physicallyCorrect?this._currentTexture:o),c.render(t),u.attach(l),d.setUniform("texture",s),d.render(t),u.unbind(t),this._physicallyCorrect){var _=this._prevTexture;this._prevTexture=this._currentTexture,this._currentTexture=_}},er.prototype.getTargetTexture=function(){return this._texture3},er.prototype.setParameter=function(t,e){t==="maxIteration"?this._ssrPass.material.define("fragment","MAX_ITERATION",e):this._ssrPass.setUniform(t,e)},er.prototype.setPhysicallyCorrect=function(t){t?(this._normalDistribution||(this._normalDistribution=ca.generateNormalDistribution(64,this._totalSamples)),this._ssrPass.material.define("fragment","PHYSICALLY_CORRECT"),this._ssrPass.material.set("normalDistribution",this._normalDistribution),this._ssrPass.material.set("normalDistributionSize",[64,this._totalSamples])):this._ssrPass.material.undefine("fragment","PHYSICALLY_CORRECT"),this._physicallyCorrect=t},er.prototype.setSSAOTexture=function(t){var e=this._blurPass2;t?(e.material.enableTexture("ssaoTex"),e.material.set("ssaoTex",t)):e.material.disableTexture("ssaoTex")},er.prototype.isFinished=function(t){return!this._physicallyCorrect||t>this._totalSamples/this._samplePerFrame},er.prototype.dispose=function(t){this._ssrTexture.dispose(t),this._texture2.dispose(t),this._texture3.dispose(t),this._prevTexture.dispose(t),this._currentTexture.dispose(t),this._frameBuffer.dispose(t)};const Tu=[0,0,-.321585265978,-.154972575841,.458126042375,.188473391593,.842080129861,.527766490688,.147304551086,-.659453822776,-.331943915203,-.940619700594,.0479226680259,.54812163202,.701581552186,-.709825561388,-.295436780218,.940589268233,-.901489676764,.237713156085,.973570876096,-.109899459384,-.866792314779,-.451805525005,.330975007087,.800048655954,-.344275183665,.381779221166,-.386139432542,-.437418421534,-.576478634965,-.0148463392551,.385798197415,-.262426961053,-.666302061145,.682427250835,-.628010632582,-.732836215494,.10163141741,-.987658134403,.711995289051,-.320024291314,.0296005138058,.950296523438,.0130612307608,-.351024443122,-.879596633704,-.10478487883,.435712737232,.504254490347,.779203817497,.206477676721,.388264289969,-.896736162545,-.153106280781,-.629203242522,-.245517550697,.657969239148,.126830499058,.26862328493,-.634888119007,-.302301223431,.617074219636,.779817204925];function Io(t,e,r,n,i){var a=t.gl;e.setUniform(a,"1i",r,i),a.activeTexture(a.TEXTURE0+i),n.isRenderable()?n.bind(t):n.unbind(t)}function Op(t,e,r,n,i){var a,o,s,l,u=t.gl;return function(h,c,d){if(!l||l.material!==h.material){var f=h.material,m=h.__program,p=f.get("roughness");p==null&&(p=1);var g=f.get("normalMap")||e,_=f.get("roughnessMap"),y=f.get("bumpMap"),x=f.get("uvRepeat"),v=f.get("uvOffset"),w=f.get("detailUvRepeat"),b=f.get("detailUvOffset"),S=!!y&&f.isTextureEnabled("bumpMap"),M=!!_&&f.isTextureEnabled("roughnessMap"),D=f.isDefined("fragment","DOUBLE_SIDED");y=y||r,_=_||n,d!==c?(c.set("normalMap",g),c.set("bumpMap",y),c.set("roughnessMap",_),c.set("useBumpMap",S),c.set("useRoughnessMap",M),c.set("doubleSide",D),x!=null&&c.set("uvRepeat",x),v!=null&&c.set("uvOffset",v),w!=null&&c.set("detailUvRepeat",w),b!=null&&c.set("detailUvOffset",b),c.set("roughness",p)):(m.setUniform(u,"1f","roughness",p),a!==g&&Io(t,m,"normalMap",g,0),o!==y&&y&&Io(t,m,"bumpMap",y,1),s!==_&&_&&Io(t,m,"roughnessMap",_,2),x!=null&&m.setUniform(u,"2f","uvRepeat",x),v!=null&&m.setUniform(u,"2f","uvOffset",v),w!=null&&m.setUniform(u,"2f","detailUvRepeat",w),b!=null&&m.setUniform(u,"2f","detailUvOffset",b),m.setUniform(u,"1i","useBumpMap",+S),m.setUniform(u,"1i","useRoughnessMap",+M),m.setUniform(u,"1i","doubleSide",+D)),a=g,o=y,s=_,l=h}}}function fn(t){this._depthTex=new K({format:V.DEPTH_COMPONENT,type:V.UNSIGNED_INT}),this._normalTex=new K({type:V.HALF_FLOAT}),this._framebuffer=new jt,this._framebuffer.attach(this._normalTex),this._framebuffer.attach(this._depthTex,jt.DEPTH_ATTACHMENT),this._normalMaterial=new ve({shader:new N(N.source("ecgl.normal.vertex"),N.source("ecgl.normal.fragment"))}),this._normalMaterial.enableTexture(["normalMap","bumpMap","roughnessMap"]),this._defaultNormalMap=jr.createBlank("#000"),this._defaultBumpMap=jr.createBlank("#000"),this._defaultRoughessMap=jr.createBlank("#000"),this._debugPass=new Lt({fragment:N.source("clay.compositor.output")}),this._debugPass.setUniform("texture",this._normalTex),this._debugPass.material.undefine("fragment","OUTPUT_ALPHA")}function ii(t){t=t||{},this._edgePass=new Lt({fragment:N.source("ecgl.edge")}),this._edgePass.setUniform("normalTexture",t.normalTexture),this._edgePass.setUniform("depthTexture",t.depthTexture),this._targetTexture=new K({type:V.HALF_FLOAT}),this._frameBuffer=new jt,this._frameBuffer.attach(this._targetTexture)}N.import(`@export ecgl.normal.vertex

@import ecgl.common.transformUniforms

@import ecgl.common.uv.header

@import ecgl.common.attributes

varying vec3 v_Normal;
varying vec3 v_WorldPosition;

@import ecgl.common.normalMap.vertexHeader

@import ecgl.common.vertexAnimation.header

void main()
{

 @import ecgl.common.vertexAnimation.main

 @import ecgl.common.uv.main

 v_Normal = normalize((worldInverseTranspose * vec4(normal, 0.0)).xyz);
 v_WorldPosition = (world * vec4(pos, 1.0)).xyz;

 @import ecgl.common.normalMap.vertexMain

 gl_Position = worldViewProjection * vec4(pos, 1.0);

}


@end


@export ecgl.normal.fragment

#define ROUGHNESS_CHANEL 0

uniform bool useBumpMap;
uniform bool useRoughnessMap;
uniform bool doubleSide;
uniform float roughness;

@import ecgl.common.uv.fragmentHeader

varying vec3 v_Normal;
varying vec3 v_WorldPosition;

uniform mat4 viewInverse : VIEWINVERSE;

@import ecgl.common.normalMap.fragmentHeader
@import ecgl.common.bumpMap.header

uniform sampler2D roughnessMap;

void main()
{
 vec3 N = v_Normal;
 
 bool flipNormal = false;
 if (doubleSide) {
 vec3 eyePos = viewInverse[3].xyz;
 vec3 V = normalize(eyePos - v_WorldPosition);

 if (dot(N, V) < 0.0) {
 flipNormal = true;
 }
 }

 @import ecgl.common.normalMap.fragmentMain

 if (useBumpMap) {
 N = bumpNormal(v_WorldPosition, v_Normal, N);
 }

 float g = 1.0 - roughness;

 if (useRoughnessMap) {
 float g2 = 1.0 - texture2D(roughnessMap, v_DetailTexcoord)[ROUGHNESS_CHANEL];
 g = clamp(g2 + (g - 0.5) * 2.0, 0.0, 1.0);
 }

 if (flipNormal) {
 N = -N;
 }

 gl_FragColor.rgb = (N.xyz + 1.0) * 0.5;
 gl_FragColor.a = g;
}
@end`),fn.prototype.getDepthTexture=function(){return this._depthTex},fn.prototype.getNormalTexture=function(){return this._normalTex},fn.prototype.update=function(t,e,r){var n=t.getWidth(),i=t.getHeight(),a=this._depthTex,o=this._normalTex,s=this._normalMaterial;a.width=n,a.height=i,o.width=n,o.height=i;var l=e.getRenderList(r).opaque;this._framebuffer.bind(t),t.gl.clearColor(0,0,0,0),t.gl.clear(t.gl.COLOR_BUFFER_BIT|t.gl.DEPTH_BUFFER_BIT),t.gl.disable(t.gl.BLEND),t.renderPass(l,r,{getMaterial:function(){return s},ifRender:function(u){return u.renderNormal},beforeRender:Op(t,this._defaultNormalMap,this._defaultBumpMap,this._defaultRoughessMap,this._normalMaterial),sort:t.opaqueSortCompare}),this._framebuffer.unbind(t)},fn.prototype.renderDebug=function(t){this._debugPass.render(t)},fn.prototype.dispose=function(t){this._depthTex.dispose(t),this._normalTex.dispose(t)},ii.prototype.update=function(t,e,r,n){var i=t.getWidth(),a=t.getHeight(),o=this._targetTexture;o.width=i,o.height=a;var s=this._frameBuffer;s.bind(t),this._edgePass.setUniform("projectionInv",e.invProjectionMatrix.array),this._edgePass.setUniform("textureSize",[i,a]),this._edgePass.setUniform("texture",r),this._edgePass.render(t),s.unbind(t)},ii.prototype.getTargetTexture=function(){return this._targetTexture},ii.prototype.setParameter=function(t,e){this._edgePass.setUniform(t,e)},ii.prototype.dispose=function(t){this._targetTexture.dispose(t),this._frameBuffer.dispose(t)};const Rp={type:"compositor",nodes:[{name:"source",type:"texture",outputs:{color:{}}},{name:"source_half",shader:"#source(clay.compositor.downsample)",inputs:{texture:"source"},outputs:{color:{parameters:{width:"expr(width * 1.0 / 2)",height:"expr(height * 1.0 / 2)",type:"HALF_FLOAT"}}},parameters:{textureSize:"expr( [width * 1.0, height * 1.0] )"}},{name:"bright",shader:"#source(clay.compositor.bright)",inputs:{texture:"source_half"},outputs:{color:{parameters:{width:"expr(width * 1.0 / 2)",height:"expr(height * 1.0 / 2)",type:"HALF_FLOAT"}}},parameters:{threshold:2,scale:4,textureSize:"expr([width * 1.0 / 2, height / 2])"}},{name:"bright_downsample_4",shader:"#source(clay.compositor.downsample)",inputs:{texture:"bright"},outputs:{color:{parameters:{width:"expr(width * 1.0 / 4)",height:"expr(height * 1.0 / 4)",type:"HALF_FLOAT"}}},parameters:{textureSize:"expr( [width * 1.0 / 2, height / 2] )"}},{name:"bright_downsample_8",shader:"#source(clay.compositor.downsample)",inputs:{texture:"bright_downsample_4"},outputs:{color:{parameters:{width:"expr(width * 1.0 / 8)",height:"expr(height * 1.0 / 8)",type:"HALF_FLOAT"}}},parameters:{textureSize:"expr( [width * 1.0 / 4, height / 4] )"}},{name:"bright_downsample_16",shader:"#source(clay.compositor.downsample)",inputs:{texture:"bright_downsample_8"},outputs:{color:{parameters:{width:"expr(width * 1.0 / 16)",height:"expr(height * 1.0 / 16)",type:"HALF_FLOAT"}}},parameters:{textureSize:"expr( [width * 1.0 / 8, height / 8] )"}},{name:"bright_downsample_32",shader:"#source(clay.compositor.downsample)",inputs:{texture:"bright_downsample_16"},outputs:{color:{parameters:{width:"expr(width * 1.0 / 32)",height:"expr(height * 1.0 / 32)",type:"HALF_FLOAT"}}},parameters:{textureSize:"expr( [width * 1.0 / 16, height / 16] )"}},{name:"bright_upsample_16_blur_h",shader:"#source(clay.compositor.gaussian_blur)",inputs:{texture:"bright_downsample_32"},outputs:{color:{parameters:{width:"expr(width * 1.0 / 16)",height:"expr(height * 1.0 / 16)",type:"HALF_FLOAT"}}},parameters:{blurSize:1,blurDir:0,textureSize:"expr( [width * 1.0 / 32, height / 32] )"}},{name:"bright_upsample_16_blur_v",shader:"#source(clay.compositor.gaussian_blur)",inputs:{texture:"bright_upsample_16_blur_h"},outputs:{color:{parameters:{width:"expr(width * 1.0 / 16)",height:"expr(height * 1.0 / 16)",type:"HALF_FLOAT"}}},parameters:{blurSize:1,blurDir:1,textureSize:"expr( [width * 1.0 / 16, height * 1.0 / 16] )"}},{name:"bright_upsample_8_blur_h",shader:"#source(clay.compositor.gaussian_blur)",inputs:{texture:"bright_downsample_16"},outputs:{color:{parameters:{width:"expr(width * 1.0 / 8)",height:"expr(height * 1.0 / 8)",type:"HALF_FLOAT"}}},parameters:{blurSize:1,blurDir:0,textureSize:"expr( [width * 1.0 / 16, height * 1.0 / 16] )"}},{name:"bright_upsample_8_blur_v",shader:"#source(clay.compositor.gaussian_blur)",inputs:{texture:"bright_upsample_8_blur_h"},outputs:{color:{parameters:{width:"expr(width * 1.0 / 8)",height:"expr(height * 1.0 / 8)",type:"HALF_FLOAT"}}},parameters:{blurSize:1,blurDir:1,textureSize:"expr( [width * 1.0 / 8, height * 1.0 / 8] )"}},{name:"bright_upsample_8_blend",shader:"#source(clay.compositor.blend)",inputs:{texture1:"bright_upsample_8_blur_v",texture2:"bright_upsample_16_blur_v"},outputs:{color:{parameters:{width:"expr(width * 1.0 / 8)",height:"expr(height * 1.0 / 8)",type:"HALF_FLOAT"}}},parameters:{weight1:.3,weight2:.7}},{name:"bright_upsample_4_blur_h",shader:"#source(clay.compositor.gaussian_blur)",inputs:{texture:"bright_downsample_8"},outputs:{color:{parameters:{width:"expr(width * 1.0 / 4)",height:"expr(height * 1.0 / 4)",type:"HALF_FLOAT"}}},parameters:{blurSize:1,blurDir:0,textureSize:"expr( [width * 1.0 / 8, height * 1.0 / 8] )"}},{name:"bright_upsample_4_blur_v",shader:"#source(clay.compositor.gaussian_blur)",inputs:{texture:"bright_upsample_4_blur_h"},outputs:{color:{parameters:{width:"expr(width * 1.0 / 4)",height:"expr(height * 1.0 / 4)",type:"HALF_FLOAT"}}},parameters:{blurSize:1,blurDir:1,textureSize:"expr( [width * 1.0 / 4, height * 1.0 / 4] )"}},{name:"bright_upsample_4_blend",shader:"#source(clay.compositor.blend)",inputs:{texture1:"bright_upsample_4_blur_v",texture2:"bright_upsample_8_blend"},outputs:{color:{parameters:{width:"expr(width * 1.0 / 4)",height:"expr(height * 1.0 / 4)",type:"HALF_FLOAT"}}},parameters:{weight1:.3,weight2:.7}},{name:"bright_upsample_2_blur_h",shader:"#source(clay.compositor.gaussian_blur)",inputs:{texture:"bright_downsample_4"},outputs:{color:{parameters:{width:"expr(width * 1.0 / 2)",height:"expr(height * 1.0 / 2)",type:"HALF_FLOAT"}}},parameters:{blurSize:1,blurDir:0,textureSize:"expr( [width * 1.0 / 4, height * 1.0 / 4] )"}},{name:"bright_upsample_2_blur_v",shader:"#source(clay.compositor.gaussian_blur)",inputs:{texture:"bright_upsample_2_blur_h"},outputs:{color:{parameters:{width:"expr(width * 1.0 / 2)",height:"expr(height * 1.0 / 2)",type:"HALF_FLOAT"}}},parameters:{blurSize:1,blurDir:1,textureSize:"expr( [width * 1.0 / 2, height * 1.0 / 2] )"}},{name:"bright_upsample_2_blend",shader:"#source(clay.compositor.blend)",inputs:{texture1:"bright_upsample_2_blur_v",texture2:"bright_upsample_4_blend"},outputs:{color:{parameters:{width:"expr(width * 1.0 / 2)",height:"expr(height * 1.0 / 2)",type:"HALF_FLOAT"}}},parameters:{weight1:.3,weight2:.7}},{name:"bright_upsample_full_blur_h",shader:"#source(clay.compositor.gaussian_blur)",inputs:{texture:"bright"},outputs:{color:{parameters:{width:"expr(width * 1.0)",height:"expr(height * 1.0)",type:"HALF_FLOAT"}}},parameters:{blurSize:1,blurDir:0,textureSize:"expr( [width * 1.0 / 2, height * 1.0 / 2] )"}},{name:"bright_upsample_full_blur_v",shader:"#source(clay.compositor.gaussian_blur)",inputs:{texture:"bright_upsample_full_blur_h"},outputs:{color:{parameters:{width:"expr(width * 1.0)",height:"expr(height * 1.0)",type:"HALF_FLOAT"}}},parameters:{blurSize:1,blurDir:1,textureSize:"expr( [width * 1.0, height * 1.0] )"}},{name:"bloom_composite",shader:"#source(clay.compositor.blend)",inputs:{texture1:"bright_upsample_full_blur_v",texture2:"bright_upsample_2_blend"},outputs:{color:{parameters:{width:"expr(width * 1.0)",height:"expr(height * 1.0)",type:"HALF_FLOAT"}}},parameters:{weight1:.3,weight2:.7}},{name:"coc",shader:"#source(ecgl.dof.coc)",outputs:{color:{parameters:{minFilter:"NEAREST",magFilter:"NEAREST",width:"expr(width * 1.0)",height:"expr(height * 1.0)"}}},parameters:{focalDist:50,focalRange:30}},{name:"dof_far_blur",shader:"#source(ecgl.dof.diskBlur)",inputs:{texture:"source",coc:"coc"},outputs:{color:{parameters:{width:"expr(width * 1.0)",height:"expr(height * 1.0)",type:"HALF_FLOAT"}}},parameters:{textureSize:"expr( [width * 1.0, height * 1.0] )"}},{name:"dof_near_blur",shader:"#source(ecgl.dof.diskBlur)",inputs:{texture:"source",coc:"coc"},outputs:{color:{parameters:{width:"expr(width * 1.0)",height:"expr(height * 1.0)",type:"HALF_FLOAT"}}},parameters:{textureSize:"expr( [width * 1.0, height * 1.0] )"},defines:{BLUR_NEARFIELD:null}},{name:"dof_coc_blur",shader:"#source(ecgl.dof.diskBlur)",inputs:{texture:"coc"},outputs:{color:{parameters:{minFilter:"NEAREST",magFilter:"NEAREST",width:"expr(width * 1.0)",height:"expr(height * 1.0)"}}},parameters:{textureSize:"expr( [width * 1.0, height * 1.0] )"},defines:{BLUR_COC:null}},{name:"dof_composite",shader:"#source(ecgl.dof.composite)",inputs:{original:"source",blurred:"dof_far_blur",nearfield:"dof_near_blur",coc:"coc",nearcoc:"dof_coc_blur"},outputs:{color:{parameters:{width:"expr(width * 1.0)",height:"expr(height * 1.0)",type:"HALF_FLOAT"}}}},{name:"composite",shader:"#source(clay.compositor.hdr.composite)",inputs:{texture:"source",bloom:"bloom_composite"},outputs:{color:{parameters:{width:"expr(width * 1.0)",height:"expr(height * 1.0)"}}},defines:{}},{name:"FXAA",shader:"#source(clay.compositor.fxaa)",inputs:{texture:"composite"}}]};function Su(t,e){return{color:{parameters:{width:t,height:e}}}}N.import(kh),N.import(Hh),N.import(Vh),N.import(Wh),N.import(jh),N.import(Xh),N.import(qh),N.import(Zh),N.import(Yh),N.import(`@export ecgl.dof.coc

uniform sampler2D depth;

uniform float zNear: 0.1;
uniform float zFar: 2000;

uniform float focalDistance: 3;
uniform float focalRange: 1;
uniform float focalLength: 30;
uniform float fstop: 2.8;

varying vec2 v_Texcoord;

@import clay.util.encode_float

void main()
{
 float z = texture2D(depth, v_Texcoord).r * 2.0 - 1.0;

 float dist = 2.0 * zNear * zFar / (zFar + zNear - z * (zFar - zNear));

 float aperture = focalLength / fstop;

 float coc;

 float uppper = focalDistance + focalRange;
 float lower = focalDistance - focalRange;
 if (dist <= uppper && dist >= lower) {
 coc = 0.5;
 }
 else {
 float focalAdjusted = dist > uppper ? uppper : lower;

 coc = abs(aperture * (focalLength * (dist - focalAdjusted)) / (dist * (focalAdjusted - focalLength)));
 coc = clamp(coc, 0.0, 2.0) / 2.00001;

 if (dist < lower) {
 coc = -coc;
 }
 coc = coc * 0.5 + 0.5;
 }

 gl_FragColor = encodeFloat(coc);
}
@end


@export ecgl.dof.composite

#define DEBUG 0

uniform sampler2D original;
uniform sampler2D blurred;
uniform sampler2D nearfield;
uniform sampler2D coc;
uniform sampler2D nearcoc;
varying vec2 v_Texcoord;

@import clay.util.rgbm
@import clay.util.float

void main()
{
 vec4 blurredColor = texture2D(blurred, v_Texcoord);
 vec4 originalColor = texture2D(original, v_Texcoord);

 float fCoc = decodeFloat(texture2D(coc, v_Texcoord));

 fCoc = abs(fCoc * 2.0 - 1.0);

 float weight = smoothstep(0.0, 1.0, fCoc);
 
#ifdef NEARFIELD_ENABLED
 vec4 nearfieldColor = texture2D(nearfield, v_Texcoord);
 float fNearCoc = decodeFloat(texture2D(nearcoc, v_Texcoord));
 fNearCoc = abs(fNearCoc * 2.0 - 1.0);

 gl_FragColor = encodeHDR(
 mix(
 nearfieldColor, mix(originalColor, blurredColor, weight),
 pow(1.0 - fNearCoc, 4.0)
 )
 );
#else
 gl_FragColor = encodeHDR(mix(originalColor, blurredColor, weight));
#endif

}

@end



@export ecgl.dof.diskBlur

#define POISSON_KERNEL_SIZE 16;

uniform sampler2D texture;
uniform sampler2D coc;
varying vec2 v_Texcoord;

uniform float blurRadius : 10.0;
uniform vec2 textureSize : [512.0, 512.0];

uniform vec2 poissonKernel[POISSON_KERNEL_SIZE];

uniform float percent;

float nrand(const in vec2 n) {
 return fract(sin(dot(n.xy ,vec2(12.9898,78.233))) * 43758.5453);
}

@import clay.util.rgbm
@import clay.util.float


void main()
{
 vec2 offset = blurRadius / textureSize;

 float rnd = 6.28318 * nrand(v_Texcoord + 0.07 * percent );
 float cosa = cos(rnd);
 float sina = sin(rnd);
 vec4 basis = vec4(cosa, -sina, sina, cosa);

#if !defined(BLUR_NEARFIELD) && !defined(BLUR_COC)
 offset *= abs(decodeFloat(texture2D(coc, v_Texcoord)) * 2.0 - 1.0);
#endif

#ifdef BLUR_COC
 float cocSum = 0.0;
#else
 vec4 color = vec4(0.0);
#endif


 float weightSum = 0.0;

 for (int i = 0; i < POISSON_KERNEL_SIZE; i++) {
 vec2 ofs = poissonKernel[i];

 ofs = vec2(dot(ofs, basis.xy), dot(ofs, basis.zw));

 vec2 uv = v_Texcoord + ofs * offset;
 vec4 texel = texture2D(texture, uv);

 float w = 1.0;
#ifdef BLUR_COC
 float fCoc = decodeFloat(texel) * 2.0 - 1.0;
 cocSum += clamp(fCoc, -1.0, 0.0) * w;
#else
 texel = texel;
 #if !defined(BLUR_NEARFIELD)
 float fCoc = decodeFloat(texture2D(coc, uv)) * 2.0 - 1.0;
 w *= abs(fCoc);
 #endif
 texel.rgb *= texel.a;
 color += texel * w;
#endif

 weightSum += w;
 }

#ifdef BLUR_COC
 gl_FragColor = encodeFloat(clamp(cocSum / weightSum, -1.0, 0.0) * 0.5 + 0.5);
#else
 color /= weightSum;
 color.rgb /= (color.a + 0.0001);
 gl_FragColor = color;
#endif
}

@end`),N.import(`@export ecgl.edge

uniform sampler2D texture;

uniform sampler2D normalTexture;
uniform sampler2D depthTexture;

uniform mat4 projectionInv;

uniform vec2 textureSize;

uniform vec4 edgeColor: [0,0,0,0.8];

varying vec2 v_Texcoord;

vec3 packColor(vec2 coord) {
 float z = texture2D(depthTexture, coord).r * 2.0 - 1.0;
 vec4 p = vec4(v_Texcoord * 2.0 - 1.0, z, 1.0);
 vec4 p4 = projectionInv * p;

 return vec3(
 texture2D(normalTexture, coord).rg,
 -p4.z / p4.w / 5.0
 );
}

void main() {
 vec2 cc = v_Texcoord;
 vec3 center = packColor(cc);

 float size = clamp(1.0 - (center.z - 10.0) / 100.0, 0.0, 1.0) * 0.5;
 float dx = size / textureSize.x;
 float dy = size / textureSize.y;

 vec2 coord;
 vec3 topLeft = packColor(cc+vec2(-dx, -dy));
 vec3 top = packColor(cc+vec2(0.0, -dy));
 vec3 topRight = packColor(cc+vec2(dx, -dy));
 vec3 left = packColor(cc+vec2(-dx, 0.0));
 vec3 right = packColor(cc+vec2(dx, 0.0));
 vec3 bottomLeft = packColor(cc+vec2(-dx, dy));
 vec3 bottom = packColor(cc+vec2(0.0, dy));
 vec3 bottomRight = packColor(cc+vec2(dx, dy));

 vec3 v = -topLeft-2.0*top-topRight+bottomLeft+2.0*bottom+bottomRight;
 vec3 h = -bottomLeft-2.0*left-topLeft+bottomRight+2.0*right+topRight;

 float edge = sqrt(dot(h, h) + dot(v, v));

 edge = smoothstep(0.8, 1.0, edge);

 gl_FragColor = mix(texture2D(texture, v_Texcoord), vec4(edgeColor.rgb, 1.0), edgeColor.a * edge);
}
@end`);var ds=["composite","FXAA"];function et(){this._width,this._height,this._dpr,this._sourceTexture=new K({type:V.HALF_FLOAT}),this._depthTexture=new K({format:V.DEPTH_COMPONENT,type:V.UNSIGNED_INT}),this._framebuffer=new jt,this._framebuffer.attach(this._sourceTexture),this._framebuffer.attach(this._depthTexture,jt.DEPTH_ATTACHMENT),this._normalPass=new fn,this._compositor=function(n,i){var a=new wp;i=i||{};var o={textures:{},parameters:{}};for(var s in n.parameters){var l=n.parameters[s];o.parameters[s]=cs(l)}return function(u,h,c,d){if(u.textures){var f={},m=0,p=!1,g=c.textureRootPath;Ht.each(u.textures,function(_,y){var x,v=_.path,w=cs(_.parameters);if(Array.isArray(v)&&v.length===6)g&&(v=v.map(function(b){return Ht.relative2absolute(b,g)})),x=new gi(w);else{if(typeof v!="string")return;g&&(v=Ht.relative2absolute(v,g)),x=new K(w)}x.load(v),m++,x.once("success",function(){f[y]=x,--m==0&&(d(f),p=!0)})}),m!==0||p||d(f)}else d({})}(n,0,i,function(u){o.textures=u,function(){for(var h=0;h<n.nodes.length;h++){var c=Ap(n.nodes[h],o,i);c&&a.addNode(c)}}()}),a}(Rp);var t=this._compositor.getNodeByName("source");t.texture=this._sourceTexture;var e=this._compositor.getNodeByName("coc");this._sourceNode=t,this._cocNode=e,this._compositeNode=this._compositor.getNodeByName("composite"),this._fxaaNode=this._compositor.getNodeByName("FXAA"),this._dofBlurNodes=["dof_far_blur","dof_near_blur","dof_coc_blur"].map(function(n){return this._compositor.getNodeByName(n)},this),this._dofBlurKernel=0,this._dofBlurKernelSize=new Float32Array(0),this._finalNodesChain=ds.map(function(n){return this._compositor.getNodeByName(n)},this);var r={normalTexture:this._normalPass.getNormalTexture(),depthTexture:this._normalPass.getDepthTexture()};this._ssaoPass=new tr(r),this._ssrPass=new er(r),this._edgePass=new ii(r)}function fs(t){for(var e=[],r=0;r<30;r++)e.push([En(r,2),En(r,3)]);this._haltonSequence=e,this._frame=0,this._sourceTex=new K,this._sourceFb=new jt,this._sourceFb.attach(this._sourceTex),this._prevFrameTex=new K,this._outputTex=new K;var n=this._blendPass=new Lt({fragment:N.source("clay.compositor.blend")});n.material.disableTexturesAll(),n.material.enableTexture(["texture1","texture2"]),this._blendFb=new jt({depthBuffer:!1}),this._outputPass=new Lt({fragment:N.source("clay.compositor.output"),blendWithPrevious:!0}),this._outputPass.material.define("fragment","OUTPUT_ALPHA"),this._outputPass.material.blend=function(i){i.blendEquationSeparate(i.FUNC_ADD,i.FUNC_ADD),i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA)}}function dt(t){t=t||"perspective",this.layer=null,this.scene=new br,this.rootNode=this.scene,this.viewport={x:0,y:0,width:0,height:0},this.setProjection(t),this._compositor=new et,this._temporalSS=new fs,this._shadowMapPass=new xp;for(var e=[],r=0,n=0;n<30;n++){for(var i=[],a=0;a<6;a++)i.push(4*En(r,2)-2),i.push(4*En(r,3)-2),r++;e.push(i)}this._pcfKernels=e,this.scene.on("beforerender",function(o,s,l){this.needsTemporalSS()&&this._temporalSS.jitterProjection(o,l)},this)}et.prototype.resize=function(t,e,r){t*=r=r||1,e*=r;var n=this._sourceTexture,i=this._depthTexture;n.width=t,n.height=e,i.width=t,i.height=e;var a={getWidth:function(){return t},getHeight:function(){return e},getDevicePixelRatio:function(){return r}};function o(s,l){if(typeof s[l]=="function"){var u=s[l].__original||s[l];s[l]=function(h){return u.call(this,a)},s[l].__original=u}}this._compositor.nodes.forEach(function(s){for(var l in s.outputs){var u=s.outputs[l].parameters;u&&(o(u,"width"),o(u,"height"))}for(var h in s.parameters)o(s.parameters,h)}),this._width=t,this._height=e,this._dpr=r},et.prototype.getWidth=function(){return this._width},et.prototype.getHeight=function(){return this._height},et.prototype._ifRenderNormalPass=function(){return this._enableSSAO||this._enableEdge||this._enableSSR},et.prototype._getPrevNode=function(t){for(var e=ds.indexOf(t.name)-1,r=this._finalNodesChain[e];r&&!this._compositor.getNodeByName(r.name);)e-=1,r=this._finalNodesChain[e];return r},et.prototype._getNextNode=function(t){for(var e=ds.indexOf(t.name)+1,r=this._finalNodesChain[e];r&&!this._compositor.getNodeByName(r.name);)e+=1,r=this._finalNodesChain[e];return r},et.prototype._addChainNode=function(t){var e=this._getPrevNode(t),r=this._getNextNode(t);e&&(t.inputs.texture=e.name,r?(t.outputs=Su(this.getWidth.bind(this),this.getHeight.bind(this)),r.inputs.texture=t.name):t.outputs=null,this._compositor.addNode(t))},et.prototype._removeChainNode=function(t){var e=this._getPrevNode(t),r=this._getNextNode(t);e&&(r?(e.outputs=Su(this.getWidth.bind(this),this.getHeight.bind(this)),r.inputs.texture=e.name):e.outputs=null,this._compositor.removeNode(t))},et.prototype.updateNormal=function(t,e,r,n){this._ifRenderNormalPass()&&this._normalPass.update(t,e,r)},et.prototype.updateSSAO=function(t,e,r,n){this._ssaoPass.update(t,r,n)},et.prototype.enableSSAO=function(){this._enableSSAO=!0},et.prototype.disableSSAO=function(){this._enableSSAO=!1},et.prototype.enableSSR=function(){this._enableSSR=!0},et.prototype.disableSSR=function(){this._enableSSR=!1},et.prototype.getSSAOTexture=function(){return this._ssaoPass.getTargetTexture()},et.prototype.getSourceFrameBuffer=function(){return this._framebuffer},et.prototype.getSourceTexture=function(){return this._sourceTexture},et.prototype.disableFXAA=function(){this._removeChainNode(this._fxaaNode)},et.prototype.enableFXAA=function(){this._addChainNode(this._fxaaNode)},et.prototype.enableBloom=function(){this._compositeNode.inputs.bloom="bloom_composite",this._compositor.dirty()},et.prototype.disableBloom=function(){this._compositeNode.inputs.bloom=null,this._compositor.dirty()},et.prototype.enableDOF=function(){this._compositeNode.inputs.texture="dof_composite",this._compositor.dirty()},et.prototype.disableDOF=function(){this._compositeNode.inputs.texture="source",this._compositor.dirty()},et.prototype.enableColorCorrection=function(){this._compositeNode.define("COLOR_CORRECTION"),this._enableColorCorrection=!0},et.prototype.disableColorCorrection=function(){this._compositeNode.undefine("COLOR_CORRECTION"),this._enableColorCorrection=!1},et.prototype.enableEdge=function(){this._enableEdge=!0},et.prototype.disableEdge=function(){this._enableEdge=!1},et.prototype.setBloomIntensity=function(t){this._compositeNode.setParameter("bloomIntensity",t)},et.prototype.setSSAOParameter=function(t,e){switch(t){case"quality":var r={low:6,medium:12,high:32,ultra:62}[e]||12;this._ssaoPass.setParameter("kernelSize",r);break;case"radius":this._ssaoPass.setParameter(t,e),this._ssaoPass.setParameter("bias",e/200);break;case"intensity":this._ssaoPass.setParameter(t,e)}},et.prototype.setDOFParameter=function(t,e){switch(t){case"focalDistance":case"focalRange":case"fstop":this._cocNode.setParameter(t,e);break;case"blurRadius":for(var r=0;r<this._dofBlurNodes.length;r++)this._dofBlurNodes[r].setParameter("blurRadius",e);break;case"quality":var n={low:4,medium:8,high:16,ultra:32}[e]||8;for(this._dofBlurKernelSize=n,r=0;r<this._dofBlurNodes.length;r++)this._dofBlurNodes[r].pass.material.define("POISSON_KERNEL_SIZE",n);this._dofBlurKernel=new Float32Array(2*n)}},et.prototype.setSSRParameter=function(t,e){if(e!=null)switch(t){case"quality":var r={low:10,medium:15,high:30,ultra:80}[e]||20,n={low:32,medium:16,high:8,ultra:4}[e]||16;this._ssrPass.setParameter("maxIteration",r),this._ssrPass.setParameter("pixelStride",n);break;case"maxRoughness":this._ssrPass.setParameter("minGlossiness",Math.max(Math.min(1-e,1),0));break;case"physical":this.setPhysicallyCorrectSSR(e);break;default:console.warn("Unkown SSR parameter "+t)}},et.prototype.setPhysicallyCorrectSSR=function(t){this._ssrPass.setPhysicallyCorrect(t)},et.prototype.setEdgeColor=function(t){var e=T.parseColor(t);this._edgePass.setParameter("edgeColor",e)},et.prototype.setExposure=function(t){this._compositeNode.setParameter("exposure",Math.pow(2,t))},et.prototype.setColorLookupTexture=function(t,e){this._compositeNode.pass.material.setTextureImage("lut",this._enableColorCorrection?t:"none",e,{minFilter:T.Texture.NEAREST,magFilter:T.Texture.NEAREST,flipY:!1})},et.prototype.setColorCorrection=function(t,e){this._compositeNode.setParameter(t,e)},et.prototype.isSSREnabled=function(){return this._enableSSR},et.prototype.composite=function(t,e,r,n,i){var a=this._sourceTexture,o=a;this._enableEdge&&(this._edgePass.update(t,r,a,i),a=o=this._edgePass.getTargetTexture()),this._enableSSR&&(this._ssrPass.update(t,r,a,i),o=this._ssrPass.getTargetTexture(),this._ssrPass.setSSAOTexture(this._enableSSAO?this._ssaoPass.getTargetTexture():null)),this._sourceNode.texture=o,this._cocNode.setParameter("depth",this._depthTexture);for(var s=this._dofBlurKernel,l=this._dofBlurKernelSize,u=i%Math.floor(Tu.length/2/l),h=0;h<2*l;h++)s[h]=Tu[h+u*l*2];for(h=0;h<this._dofBlurNodes.length;h++)this._dofBlurNodes[h].setParameter("percent",i/30),this._dofBlurNodes[h].setParameter("poissonKernel",s);this._cocNode.setParameter("zNear",r.near),this._cocNode.setParameter("zFar",r.far),this._compositor.render(t,n)},et.prototype.dispose=function(t){this._sourceTexture.dispose(t),this._depthTexture.dispose(t),this._framebuffer.dispose(t),this._compositor.dispose(t),this._normalPass.dispose(t),this._ssaoPass.dispose(t)},fs.prototype={constructor:fs,jitterProjection:function(t,e){var r=t.viewport,n=r.devicePixelRatio||t.getDevicePixelRatio(),i=r.width*n,a=r.height*n,o=this._haltonSequence[this._frame%this._haltonSequence.length],s=new k;s.array[12]=(2*o[0]-1)/i,s.array[13]=(2*o[1]-1)/a,k.mul(e.projectionMatrix,s,e.projectionMatrix),k.invert(e.invProjectionMatrix,e.projectionMatrix)},resetFrame:function(){this._frame=0},getFrame:function(){return this._frame},getSourceFrameBuffer:function(){return this._sourceFb},getOutputTexture:function(){return this._outputTex},resize:function(t,e){this._prevFrameTex.width=t,this._prevFrameTex.height=e,this._outputTex.width=t,this._outputTex.height=e,this._sourceTex.width=t,this._sourceTex.height=e,this._prevFrameTex.dirty(),this._outputTex.dirty(),this._sourceTex.dirty()},isFinished:function(){return this._frame>=this._haltonSequence.length},render:function(t,e,r){var n=this._blendPass;this._frame===0?(n.setUniform("weight1",0),n.setUniform("weight2",1)):(n.setUniform("weight1",.9),n.setUniform("weight2",.1)),n.setUniform("texture1",this._prevFrameTex),n.setUniform("texture2",e||this._sourceTex),this._blendFb.attach(this._outputTex),this._blendFb.bind(t),n.render(t),this._blendFb.unbind(t),r||(this._outputPass.setUniform("texture",this._outputTex),this._outputPass.render(t));var i=this._prevFrameTex;this._prevFrameTex=this._outputTex,this._outputTex=i,this._frame++},dispose:function(t){this._sourceFb.dispose(t),this._blendFb.dispose(t),this._prevFrameTex.dispose(t),this._outputTex.dispose(t),this._sourceTex.dispose(t),this._outputPass.dispose(t),this._blendPass.dispose(t)}},dt.prototype.setProjection=function(t){var e=this.camera;e&&e.update(),t==="perspective"?this.camera instanceof zt||(this.camera=new zt,e&&this.camera.setLocalTransform(e.localTransform)):this.camera instanceof Mn||(this.camera=new Mn,e&&this.camera.setLocalTransform(e.localTransform)),this.camera.near=.1,this.camera.far=2e3},dt.prototype.setViewport=function(t,e,r,n,i){this.camera instanceof zt&&(this.camera.aspect=r/n),i=i||1,this.viewport.x=t,this.viewport.y=e,this.viewport.width=r,this.viewport.height=n,this.viewport.devicePixelRatio=i,this._compositor.resize(r*i,n*i),this._temporalSS.resize(r*i,n*i)},dt.prototype.containPoint=function(t,e){var r=this.viewport;return e=this.layer.renderer.getHeight()-e,t>=r.x&&e>=r.y&&t<=r.x+r.width&&e<=r.y+r.height};var Mu=new he;function Np(t,e){var r=t.getBoxLayoutParams(),n=La(r,{width:e.getWidth(),height:e.getHeight()});n.y=e.getHeight()-n.y-n.height,this.viewGL.setViewport(n.x,n.y,n.width,n.height,e.getDevicePixelRatio());var i=t.get("boxWidth"),a=t.get("boxHeight"),o=t.get("boxDepth");this.getAxis("x").setExtent(-i/2,i/2),this.getAxis("y").setExtent(o/2,-o/2),this.getAxis("z").setExtent(-a/2,a/2),this.size=[i,a,o]}function Ip(t,e){var r={};t.eachSeries(function(n){if(n.coordinateSystem===this){var i=n.getData();["x","y","z"].forEach(function(a){i.mapDimensionsAll(a,!0).forEach(function(o){var s,l;s=a,l=i.getDataExtent(o,!0),r[s]=r[s]||[1/0,-1/0],r[s][0]=Math.min(l[0],r[s][0]),r[s][1]=Math.max(l[1],r[s][1])})})}},this),["xAxis3D","yAxis3D","zAxis3D"].forEach(function(n){t.eachComponent(n,function(i){var a=n.charAt(0),o=i.getReferringComponents("grid3D").models[0],s=o.coordinateSystem;if(s===this){var l=s.getAxis(a);if(!l){(l=new ma(a,Ms(r[a]||[1/0,-1/0],i))).type=i.get("type");var u=l.type==="category";l.onBand=u&&i.get("boundaryGap"),l.inverse=i.get("inverse"),i.axis=l,l.model=i,l.getLabelModel=function(){return i.getModel("axisLabel",o.getModel("axisLabel"))},l.getTickModel=function(){return i.getModel("axisTick",o.getModel("axisTick"))},s.addAxis(l)}}},this)},this),this.resize(this.model,e)}dt.prototype.castRay=function(t,e,r){var n=this.layer.renderer,i=n.viewport;return n.viewport=this.viewport,n.screenToNDC(t,e,Mu),this.camera.castRay(Mu,r),n.viewport=i,r},dt.prototype.prepareRender=function(){this.scene.update(),this.camera.update(),this.scene.updateLights();var t=this.scene.updateRenderList(this.camera);this._needsSortProgressively=!1;for(var e=0;e<t.transparent.length;e++){var r=t.transparent[e].geometry;r.needsSortVerticesProgressively&&r.needsSortVerticesProgressively()&&(this._needsSortProgressively=!0),r.needsSortTrianglesProgressively&&r.needsSortTrianglesProgressively()&&(this._needsSortProgressively=!0)}this._frame=0,this._temporalSS.resetFrame()},dt.prototype.render=function(t,e){this._doRender(t,e,this._frame),this._frame++},dt.prototype.needsAccumulate=function(){return this.needsTemporalSS()||this._needsSortProgressively},dt.prototype.needsTemporalSS=function(){var t=this._enableTemporalSS;return t==="auto"&&(t=this._enablePostEffect),t},dt.prototype.hasDOF=function(){return this._enableDOF},dt.prototype.isAccumulateFinished=function(){return this.needsTemporalSS()?this._temporalSS.isFinished():this._frame>30},dt.prototype._doRender=function(t,e,r){var n=this.scene,i=this.camera;r=r||0,this._updateTransparent(t,n,i,r),e||(this._shadowMapPass.kernelPCF=this._pcfKernels[0],this._shadowMapPass.render(t,n,i,!0)),this._updateShadowPCFKernel(r);var a,o=t.clearColor;t.gl.clearColor(o[0],o[1],o[2],o[3]),this._enablePostEffect&&(this.needsTemporalSS()&&this._temporalSS.jitterProjection(t,i),this._compositor.updateNormal(t,n,i,this._temporalSS.getFrame())),this._updateSSAO(t,n,i,this._temporalSS.getFrame()),this._enablePostEffect?((a=this._compositor.getSourceFrameBuffer()).bind(t),t.gl.clear(t.gl.DEPTH_BUFFER_BIT|t.gl.COLOR_BUFFER_BIT),t.render(n,i,!0,!0),a.unbind(t),this.needsTemporalSS()&&e?(this._compositor.composite(t,n,i,this._temporalSS.getSourceFrameBuffer(),this._temporalSS.getFrame()),t.setViewport(this.viewport),this._temporalSS.render(t)):(t.setViewport(this.viewport),this._compositor.composite(t,n,i,null,0))):this.needsTemporalSS()&&e?((a=this._temporalSS.getSourceFrameBuffer()).bind(t),t.saveClear(),t.clearBit=t.gl.DEPTH_BUFFER_BIT|t.gl.COLOR_BUFFER_BIT,t.render(n,i,!0,!0),t.restoreClear(),a.unbind(t),t.setViewport(this.viewport),this._temporalSS.render(t)):(t.setViewport(this.viewport),t.render(n,i,!0,!0))},dt.prototype._updateTransparent=function(t,e,r,n){for(var i=new B,a=new k,o=r.getWorldPosition(),s=e.getRenderList(r).transparent,l=0;l<s.length;l++){var u=s[l],h=u.geometry;k.invert(a,u.worldTransform),B.transformMat4(i,o,a),h.needsSortTriangles&&h.needsSortTriangles()&&h.doSortTriangles(i,n),h.needsSortVertices&&h.needsSortVertices()&&h.doSortVertices(i,n)}},dt.prototype._updateSSAO=function(t,e,r){var n=this._enableSSAO&&this._enablePostEffect;n&&this._compositor.updateSSAO(t,e,r,this._temporalSS.getFrame());for(var i=e.getRenderList(r),a=0;a<i.opaque.length;a++){var o=i.opaque[a];o.renderNormal&&o.material[n?"enableTexture":"disableTexture"]("ssaoMap"),n&&o.material.set("ssaoMap",this._compositor.getSSAOTexture())}},dt.prototype._updateShadowPCFKernel=function(t){for(var e=this._pcfKernels[t%this._pcfKernels.length],r=this.scene.getRenderList(this.camera).opaque,n=0;n<r.length;n++)r[n].receiveShadow&&(r[n].material.set("pcfKernel",e),r[n].material.define("fragment","PCF_KERNEL_SIZE",e.length/2))},dt.prototype.dispose=function(t){this._compositor.dispose(t.gl),this._temporalSS.dispose(t.gl),this._shadowMapPass.dispose(t)},dt.prototype.setPostEffect=function(t,e){var r=this._compositor;this._enablePostEffect=t.get("enable");var n=t.getModel("bloom"),i=t.getModel("edge"),a=t.getModel("DOF",t.getModel("depthOfField")),o=t.getModel("SSAO",t.getModel("screenSpaceAmbientOcclusion")),s=t.getModel("SSR",t.getModel("screenSpaceReflection")),l=t.getModel("FXAA"),u=t.getModel("colorCorrection");n.get("enable")?r.enableBloom():r.disableBloom(),a.get("enable")?r.enableDOF():r.disableDOF(),s.get("enable")?r.enableSSR():r.disableSSR(),u.get("enable")?r.enableColorCorrection():r.disableColorCorrection(),i.get("enable")?r.enableEdge():r.disableEdge(),l.get("enable")?r.enableFXAA():r.disableFXAA(),this._enableDOF=a.get("enable"),this._enableSSAO=o.get("enable"),this._enableSSAO?r.enableSSAO():r.disableSSAO(),r.setBloomIntensity(n.get("intensity")),r.setEdgeColor(i.get("color")),r.setColorLookupTexture(u.get("lookupTexture"),e),r.setExposure(u.get("exposure")),["radius","quality","intensity"].forEach(function(h){r.setSSAOParameter(h,o.get(h))}),["quality","maxRoughness","physical"].forEach(function(h){r.setSSRParameter(h,s.get(h))}),["quality","focalDistance","focalRange","blurRadius","fstop"].forEach(function(h){r.setDOFParameter(h,a.get(h))}),["brightness","contrast","saturation"].forEach(function(h){r.setColorCorrection(h,u.get(h))})},dt.prototype.setDOFFocusOnPoint=function(t){if(this._enablePostEffect)return t>this.camera.far||t<this.camera.near?void 0:(this._compositor.setDOFParameter("focalDistance",t),!0)},dt.prototype.setTemporalSuperSampling=function(t){this._enableTemporalSS=t.get("enable")},dt.prototype.isLinearSpace=function(){return this._enablePostEffect},dt.prototype.setRootNode=function(t){if(this.rootNode!==t){for(var e=this.rootNode.children(),r=0;r<e.length;r++)t.add(e[r]);t!==this.scene&&this.scene.add(t),this.rootNode=t}},dt.prototype.add=function(t){this.rootNode.add(t)},dt.prototype.remove=function(t){this.rootNode.remove(t)},dt.prototype.removeAll=function(t){this.rootNode.removeAll(t)},Object.assign(dt.prototype,Rs);const Fp={dimensions:ci.prototype.dimensions,create:function(t,e){var r=[];t.eachComponent("grid3D",function(i){i.__viewGL=i.__viewGL||new dt;var a=new ci;a.model=i,a.viewGL=i.__viewGL,i.coordinateSystem=a,r.push(a),a.resize=Np,a.update=Ip});var n=["xAxis3D","yAxis3D","zAxis3D"];return t.eachSeries(function(i){if(i.get("coordinateSystem")==="cartesian3D"){if((o=i.getReferringComponents("grid3D").models[0])==null){var a=(l=i,u=t,n.map(function(h){var c=l.getReferringComponents(h).models[0];return c==null&&(c=u.getComponent(h)),c})),o=a[0].getCoordSysModel();a.forEach(function(h){h.getCoordSysModel()})}var s=o.coordinateSystem;i.coordinateSystem=s}var l,u}),r}};var Qh=Cn.extend({type:"cartesian3DAxis",axis:null,getCoordSysModel:function(){return this.ecModel.queryComponents({mainType:"grid3D",index:this.option.gridIndex,id:this.option.gridId})[0]}});Nc(Qh,Ic);const Bp=Qh;var $h={show:!0,grid3DIndex:0,inverse:!1,name:"",nameLocation:"middle",nameTextStyle:{fontSize:16},nameGap:20,axisPointer:{},axisLine:{},axisTick:{},axisLabel:{},splitArea:{}},zp=ft({boundaryGap:!0,axisTick:{alignWithLabel:!1,interval:"auto"},axisLabel:{interval:"auto"},axisPointer:{label:{show:!1}}},$h),Xs=ft({boundaryGap:[0,0],splitNumber:5,axisPointer:{label:{}}},$h),Up=xr({scale:!0,min:"dataMin",max:"dataMax"},Xs),tc=xr({logBase:10},Xs);tc.scale=!0;const Gp={categoryAxis3D:zp,valueAxis3D:Xs,timeAxis3D:Up,logAxis3D:tc};var kp=["value","category","time","log"];function Hp(t,e){return e.type||(e.data?"category":"value")}Wt(function(t){t.registerComponentModel(mp),t.registerComponentView(yp),t.registerCoordinateSystem("grid3D",Fp),["x","y","z"].forEach(function(e){var r,n,i,a,o;r=t,n=e,i=Bp,a=Hp,o={name:e.toUpperCase()},kp.forEach(function(l){var u=i.extend({type:n+"Axis3D."+l,__ordinalMeta:null,mergeDefaultAndTheme:function(h,c){var d=c.getTheme();ft(h,d.get(l+"Axis3D")),ft(h,this.getDefaultOption()),h.type=a(n,h)},optionUpdated:function(){this.option.type==="category"&&(this.__ordinalMeta=Fc.createByAxisModel(this))},getCategories:function(){if(this.option.type==="category")return this.__ordinalMeta.categories},getOrdinalMeta:function(){return this.__ordinalMeta},defaultOption:ft(Bc(Gp[l+"Axis3D"]),o||{},!0)});r.registerComponentModel(u)}),r.registerSubTypeDefaulter(n+"Axis3D",zc(a,n));const s=t.ComponentView.extend({type:e+"Axis3D"});t.registerComponentView(s)}),t.registerAction({type:"grid3DChangeCamera",event:"grid3dcamerachanged",update:"series:updateCamera"},function(e,r){r.eachComponent({mainType:"grid3D",query:e},function(n){n.setView(e)})}),t.registerAction({type:"grid3DShowAxisPointer",event:"grid3dshowaxispointer",update:"grid3D:showAxisPointer"},function(e,r){}),t.registerAction({type:"grid3DHideAxisPointer",event:"grid3dhideaxispointer",update:"grid3D:hideAxisPointer"},function(e,r){})});const Rn={defaultOption:{shading:null,realisticMaterial:{textureTiling:1,textureOffset:0,detailTexture:null},lambertMaterial:{textureTiling:1,textureOffset:0,detailTexture:null},colorMaterial:{textureTiling:1,textureOffset:0,detailTexture:null},hatchingMaterial:{textureTiling:1,textureOffset:0,paperColor:"#fff"}}},ec={getFilledRegions:function(t,e){var r,n=(t||[]).slice();if(typeof e=="string"?r=(e=Wo(e))&&e.geoJson:e&&e.features&&(r=e),!r)return[];for(var i={},a=r.features,o=0;o<n.length;o++)i[n[o].name]=n[o];for(o=0;o<a.length;o++){var s=a[o].properties.name;i[s]||n.push({name:s})}return n},defaultOption:{show:!0,zlevel:-10,map:"",left:0,top:0,width:"100%",height:"100%",boxWidth:100,boxHeight:10,boxDepth:"auto",regionHeight:3,environment:"auto",groundPlane:{show:!1,color:"#aaa"},shading:"lambert",light:{main:{alpha:40,beta:30}},viewControl:{alpha:40,beta:0,distance:100,orthographicSize:60,minAlpha:5,minBeta:-80,maxBeta:80},label:{show:!1,distance:2,textStyle:{fontSize:20,color:"#000",backgroundColor:"rgba(255,255,255,0.7)",padding:3,borderRadius:4}},itemStyle:{color:"#fff",borderWidth:0,borderColor:"#333"},emphasis:{itemStyle:{color:"#639fc0"},label:{show:!0}}}};var pn=Cn.extend({type:"geo3D",layoutMode:"box",coordinateSystem:null,optionUpdated:function(){var t=this.option;t.regions=this.getFilledRegions(t.regions,t.map);var e=Ti(t.data||[],{coordDimensions:["value"],encodeDefine:this.get("encode"),dimensionsDefine:this.get("dimensions")}),r=new Xe(e,this);r.initData(t.regions);var n={};r.each(function(i){var a=r.getName(i),o=r.getItemModel(i);n[a]=o}),this._regionModelMap=n,this._data=r},getData:function(){return this._data},getRegionModel:function(t){var e=this.getData().getName(t);return this._regionModelMap[e]||new Tn(null,this)},getRegionPolygonCoords:function(t){var e=this.getData().getName(t),r=this.coordinateSystem.getRegion(e);return r?r.geometries:[]},getFormattedLabel:function(t,e){var r=this._data.getName(t),n=this.getRegionModel(t),i=n.get(e==="normal"?["label","formatter"]:["emphasis","label","formatter"]);i==null&&(i=n.get(["label","formatter"]));var a={name:r};if(typeof i=="function")return a.status=e,i(a);if(typeof i=="string"){var o=a.seriesName;return i.replace("{a}",o!=null?o:"")}return r},defaultOption:{regions:[]}});ft(pn.prototype,ec),ft(pn.prototype,Ga),ft(pn.prototype,Pn),ft(pn.prototype,On),ft(pn.prototype,Rn);const Vp=pn;function rc(t,e,r){r=r||2;var n,i,a,o,s,l,u,h=e&&e.length,c=h?e[0]*r:t.length,d=Eu(t,0,c,r,!0),f=[];if(!d)return f;if(h&&(d=function(p,g,_,y){var x,v,w,b=[];for(x=0,v=g.length;x<v;x++)(w=Eu(p,g[x]*y,x<v-1?g[x+1]*y:p.length,y,!1))===w.next&&(w.steiner=!0),b.push(Kp(w));for(b.sort(Zp),x=0;x<b.length;x++)Yp(b[x],_),_=vi(_,_.next);return _}(t,e,d,r)),t.length>80*r){n=a=t[0],i=o=t[1];for(var m=r;m<c;m+=r)(s=t[m])<n&&(n=s),(l=t[m+1])<i&&(i=l),s>a&&(a=s),l>o&&(o=l);u=Math.max(a-n,o-i)}return yi(d,f,r,n,i,u),f}function Eu(t,e,r,n,i){var a,o;if(i===gs(t,e,r,n)>0)for(a=e;a<r;a+=n)o=Au(a,t[a],t[a+1],o);else for(a=r-n;a>=e;a-=n)o=Au(a,t[a],t[a+1],o);return o&&Vr(o,o.next)&&(bi(o),o=o.next),o}function vi(t,e){if(!t)return t;e||(e=t);var r,n=t;do if(r=!1,n.steiner||!Vr(n,n.next)&&Qt(n.prev,n,n.next)!==0)n=n.next;else{if(bi(n),(n=e=n.prev)===n.next)return null;r=!0}while(r||n!==e);return e}function yi(t,e,r,n,i,a,o){if(t){!o&&a&&function(h,c,d,f){var m=h;do m.z===null&&(m.z=ps(m.x,m.y,c,d,f)),m.prevZ=m.prev,m.nextZ=m.next,m=m.next;while(m!==h);m.prevZ.nextZ=null,m.prevZ=null,function(p){var g,_,y,x,v,w,b,S,M=1;do{for(_=p,p=null,v=null,w=0;_;){for(w++,y=_,b=0,g=0;g<M&&(b++,y=y.nextZ);g++);for(S=M;b>0||S>0&&y;)b!==0&&(S===0||!y||_.z<=y.z)?(x=_,_=_.nextZ,b--):(x=y,y=y.nextZ,S--),v?v.nextZ=x:p=x,x.prevZ=v,v=x;_=y}v.nextZ=null,M*=2}while(w>1)}(m)}(t,n,i,a);for(var s,l,u=t;t.prev!==t.next;)if(s=t.prev,l=t.next,a?jp(t,n,i,a):Wp(t))e.push(s.i/r),e.push(t.i/r),e.push(l.i/r),bi(t),t=l.next,u=l.next;else if((t=l)===u){o?o===1?yi(t=Xp(t,e,r),e,r,n,i,a,2):o===2&&qp(t,e,r,n,i,a):yi(vi(t),e,r,n,i,a,1);break}}}function Wp(t){var e=t.prev,r=t,n=t.next;if(Qt(e,r,n)>=0)return!1;for(var i=t.next.next;i!==t.prev;){if(Sa(e.x,e.y,r.x,r.y,n.x,n.y,i.x,i.y)&&Qt(i.prev,i,i.next)>=0)return!1;i=i.next}return!0}function jp(t,e,r,n){var i=t.prev,a=t,o=t.next;if(Qt(i,a,o)>=0)return!1;for(var s=i.x<a.x?i.x<o.x?i.x:o.x:a.x<o.x?a.x:o.x,l=i.y<a.y?i.y<o.y?i.y:o.y:a.y<o.y?a.y:o.y,u=i.x>a.x?i.x>o.x?i.x:o.x:a.x>o.x?a.x:o.x,h=i.y>a.y?i.y>o.y?i.y:o.y:a.y>o.y?a.y:o.y,c=ps(s,l,e,r,n),d=ps(u,h,e,r,n),f=t.nextZ;f&&f.z<=d;){if(f!==t.prev&&f!==t.next&&Sa(i.x,i.y,a.x,a.y,o.x,o.y,f.x,f.y)&&Qt(f.prev,f,f.next)>=0)return!1;f=f.nextZ}for(f=t.prevZ;f&&f.z>=c;){if(f!==t.prev&&f!==t.next&&Sa(i.x,i.y,a.x,a.y,o.x,o.y,f.x,f.y)&&Qt(f.prev,f,f.next)>=0)return!1;f=f.prevZ}return!0}function Xp(t,e,r){var n=t;do{var i=n.prev,a=n.next.next;!Vr(i,a)&&nc(i,n,n.next,a)&&xi(i,a)&&xi(a,i)&&(e.push(i.i/r),e.push(n.i/r),e.push(a.i/r),bi(n),bi(n.next),n=t=a),n=n.next}while(n!==t);return n}function qp(t,e,r,n,i,a){var o=t;do{for(var s=o.next.next;s!==o.prev;){if(o.i!==s.i&&Jp(o,s)){var l=ic(o,s);return o=vi(o,o.next),l=vi(l,l.next),yi(o,e,r,n,i,a),void yi(l,e,r,n,i,a)}s=s.next}o=o.next}while(o!==t)}function Zp(t,e){return t.x-e.x}function Yp(t,e){if(e=function(n,i){var a,o=i,s=n.x,l=n.y,u=-1/0;do{if(l<=o.y&&l>=o.next.y&&o.next.y!==o.y){var h=o.x+(l-o.y)*(o.next.x-o.x)/(o.next.y-o.y);if(h<=s&&h>u){if(u=h,h===s){if(l===o.y)return o;if(l===o.next.y)return o.next}a=o.x<o.next.x?o:o.next}}o=o.next}while(o!==i);if(!a)return null;if(s===u)return a.prev;var c,d=a,f=a.x,m=a.y,p=1/0;for(o=a.next;o!==d;)s>=o.x&&o.x>=f&&s!==o.x&&Sa(l<m?s:u,l,f,m,l<m?u:s,l,o.x,o.y)&&((c=Math.abs(l-o.y)/(s-o.x))<p||c===p&&o.x>a.x)&&xi(o,n)&&(a=o,p=c),o=o.next;return a}(t,e)){var r=ic(e,t);vi(r,r.next)}}function ps(t,e,r,n,i){return(t=1431655765&((t=858993459&((t=252645135&((t=16711935&((t=32767*(t-r)/i)|t<<8))|t<<4))|t<<2))|t<<1))|(e=1431655765&((e=858993459&((e=252645135&((e=16711935&((e=32767*(e-n)/i)|e<<8))|e<<4))|e<<2))|e<<1))<<1}function Kp(t){var e=t,r=t;do e.x<r.x&&(r=e),e=e.next;while(e!==t);return r}function Sa(t,e,r,n,i,a,o,s){return(i-o)*(e-s)-(t-o)*(a-s)>=0&&(t-o)*(n-s)-(r-o)*(e-s)>=0&&(r-o)*(a-s)-(i-o)*(n-s)>=0}function Jp(t,e){return t.next.i!==e.i&&t.prev.i!==e.i&&!function(r,n){var i=r;do{if(i.i!==r.i&&i.next.i!==r.i&&i.i!==n.i&&i.next.i!==n.i&&nc(i,i.next,r,n))return!0;i=i.next}while(i!==r);return!1}(t,e)&&xi(t,e)&&xi(e,t)&&function(r,n){var i=r,a=!1,o=(r.x+n.x)/2,s=(r.y+n.y)/2;do i.y>s!=i.next.y>s&&i.next.y!==i.y&&o<(i.next.x-i.x)*(s-i.y)/(i.next.y-i.y)+i.x&&(a=!a),i=i.next;while(i!==r);return a}(t,e)}function Qt(t,e,r){return(e.y-t.y)*(r.x-e.x)-(e.x-t.x)*(r.y-e.y)}function Vr(t,e){return t.x===e.x&&t.y===e.y}function nc(t,e,r,n){return!!(Vr(t,e)&&Vr(r,n)||Vr(t,n)&&Vr(r,e))||Qt(t,e,r)>0!=Qt(t,e,n)>0&&Qt(r,n,t)>0!=Qt(r,n,e)>0}function xi(t,e){return Qt(t.prev,t,t.next)<0?Qt(t,e,t.next)>=0&&Qt(t,t.prev,e)>=0:Qt(t,e,t.prev)<0||Qt(t,t.next,e)<0}function ic(t,e){var r=new ms(t.i,t.x,t.y),n=new ms(e.i,e.x,e.y),i=t.next,a=e.prev;return t.next=e,e.prev=t,r.next=i,i.prev=r,n.next=r,r.prev=n,a.next=n,n.prev=a,n}function Au(t,e,r,n){var i=new ms(t,e,r);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function bi(t){t.next.prev=t.prev,t.prev.next=t.next,t.prevZ&&(t.prevZ.nextZ=t.nextZ),t.nextZ&&(t.nextZ.prevZ=t.prevZ)}function ms(t,e,r){this.i=t,this.x=e,this.y=r,this.prev=null,this.next=null,this.z=null,this.prevZ=null,this.nextZ=null,this.steiner=!1}function gs(t,e,r,n){for(var i=0,a=e,o=r-n;a<r;a+=n)i+=(t[o]-t[a])*(t[a+1]+t[o+1]),o=a;return i}function Fo(t,e,r){var n=t[e];t[e]=t[r],t[r]=n}function ac(t,e,r,n,i){var a=r,o=t[e];Fo(t,e,n);for(var s=r;s<n;s++)i(t[s],o)<0&&(Fo(t,s,a),a++);return Fo(t,n,a),a}function Ma(t,e,r,n){if(r<n){var i=ac(t,Math.floor((r+n)/2),r,n,e);Ma(t,e,r,i-1),Ma(t,e,i+1,n)}}function An(){this._parts=[]}rc.deviation=function(t,e,r,n){var i=e&&e.length,a=i?e[0]*r:t.length,o=Math.abs(gs(t,0,a,r));if(i)for(var s=0,l=e.length;s<l;s++){var u=e[s]*r,h=s<l-1?e[s+1]*r:t.length;o-=Math.abs(gs(t,u,h,r))}var c=0;for(s=0;s<n.length;s+=3){var d=n[s]*r,f=n[s+1]*r,m=n[s+2]*r;c+=Math.abs((t[d]-t[m])*(t[f+1]-t[d+1])-(t[d]-t[f])*(t[m+1]-t[d+1]))}return o===0&&c===0?0:Math.abs((c-o)/o)},An.prototype.step=function(t,e,r){var n=t.length;if(r===0){this._parts=[],this._sorted=!1;var i=Math.floor(n/2);this._parts.push({pivot:i,left:0,right:n-1}),this._currentSortPartIdx=0}if(!this._sorted){var a=this._parts;if(a.length===0)return this._sorted=!0,!0;if(a.length<512){for(var o=0;o<a.length;o++)a[o].pivot=ac(t,a[o].pivot,a[o].left,a[o].right,e);var s=[];for(o=0;o<a.length;o++){var l,u=a[o].left;(l=a[o].pivot-1)>u&&s.push({pivot:Math.floor((l+u)/2),left:u,right:l}),u=a[o].pivot+1,(l=a[o].right)>u&&s.push({pivot:Math.floor((l+u)/2),left:u,right:l})}a=this._parts=s}else for(o=0;o<Math.floor(a.length/10);o++){var h=a.length-1-this._currentSortPartIdx;if(Ma(t,e,a[h].left,a[h].right),this._currentSortPartIdx++,this._currentSortPartIdx===a.length)return this._sorted=!0,!0}return!1}},An.sort=Ma;var bn=At.vec3,Du=bn.create(),Cu=bn.create(),Lu=bn.create();const qs={needsSortTriangles:function(){return this.indices&&this.sortTriangles},needsSortTrianglesProgressively:function(){return this.needsSortTriangles()&&this.triangleCount>=2e4},doSortTriangles:function(t,e){var r=this.indices;if(e===0){var n=this.attributes.position;t=t.array,this._triangleZList&&this._triangleZList.length===this.triangleCount||(this._triangleZList=new Float32Array(this.triangleCount),this._sortedTriangleIndices=new Uint32Array(this.triangleCount),this._indicesTmp=new r.constructor(r.length),this._triangleZListTmp=new Float32Array(this.triangleCount));for(var i,a=0,o=0;o<r.length;){n.get(r[o++],Du),n.get(r[o++],Cu),n.get(r[o++],Lu);var s=bn.sqrDist(Du,t),l=bn.sqrDist(Cu,t),u=bn.sqrDist(Lu,t),h=Math.min(s,l);h=Math.min(h,u),o===3?(i=h,h=0):h-=i,this._triangleZList[a++]=h}}var c=this._sortedTriangleIndices;for(o=0;o<c.length;o++)c[o]=o;if(this.triangleCount<2e4)e===0&&this._simpleSort(!0);else for(o=0;o<3;o++)this._progressiveQuickSort(3*e+o);var d=this._indicesTmp,f=this._triangleZListTmp,m=this._triangleZList;for(o=0;o<this.triangleCount;o++){var p=3*c[o],g=3*o;d[g++]=r[p++],d[g++]=r[p++],d[g]=r[p],f[o]=m[c[o]]}var _=this._indicesTmp;this._indicesTmp=this.indices,this.indices=_,_=this._triangleZListTmp,this._triangleZListTmp=this._triangleZList,this._triangleZList=_,this.dirtyIndices()},_simpleSort:function(t){var e=this._triangleZList,r=this._sortedTriangleIndices;function n(i,a){return e[a]-e[i]}t?Array.prototype.sort.call(r,n):An.sort(r,n,0,r.length-1)},_progressiveQuickSort:function(t){var e=this._triangleZList,r=this._sortedTriangleIndices;this._quickSort=this._quickSort||new An,this._quickSort.step(r,function(n,i){return e[i]-e[n]},t)}};function Gt(t,e){const r=t.getItemVisual(e,"style");if(r)return r[t.getVisual("drawType")]}function Ut(t,e){const r=t.getItemVisual(e,"style");return r&&r.opacity}function ir(t,e,r){this._labelsMesh=new js,this._labelTextureSurface=new Ta({width:512,height:512,devicePixelRatio:r.getDevicePixelRatio(),onupdate:function(){r.getZr().refresh()}}),this._api=r,this._labelsMesh.material.set("textureAtlas",this._labelTextureSurface.getTexture())}ir.prototype.getLabelPosition=function(t,e,r){return[0,0,0]},ir.prototype.getLabelDistance=function(t,e,r){return 0},ir.prototype.getMesh=function(){return this._labelsMesh},ir.prototype.updateData=function(t,e,r){e==null&&(e=0),r==null&&(r=t.count()),this._labelsVisibilitiesBits&&this._labelsVisibilitiesBits.length===r-e||(this._labelsVisibilitiesBits=new Uint8Array(r-e));for(var n=["label","show"],i=["emphasis","label","show"],a=e;a<r;a++){var o=t.getItemModel(a),s=o.get(n),l=o.get(i);l==null&&(l=s);var u=(s?1:0)|(l?2:0);this._labelsVisibilitiesBits[a-e]=u}this._start=e,this._end=r,this._data=t},ir.prototype.updateLabels=function(t){if(this._data){for(var e=(t=t||[]).length>0,r={},n=0;n<t.length;n++)r[t[n]]=!0;this._labelsMesh.geometry.convertToDynamicArray(!0),this._labelTextureSurface.clear();for(var i=["label"],a=["emphasis","label"],o=this._data.hostModel,s=this._data,l=o.getModel(i),u=o.getModel(a,l),h={left:"right",right:"left",top:"center",bottom:"center"},c={left:"middle",right:"middle",top:"bottom",bottom:"top"},d=this._start;d<this._end;d++){var f=!1;if(e&&r[d]&&(f=!0),this._labelsVisibilitiesBits[d-this._start]&(f?2:1)){var m=s.getItemModel(d).getModel(f?a:i,f?u:l),p=m.get("distance")||0,g=m.get("position"),_=this._api.getDevicePixelRatio(),y=o.getFormattedLabel(d,f?"emphasis":"normal");if(y==null||y==="")return;var x=new ga({style:_a(m,{text:y,fill:m.get("color")||Gt(s,d)||"#000",align:"left",verticalAlign:"top",opacity:tt(m.get("opacity"),Ut(s,d),1)})}),v=x.getBoundingRect();v.height*=1.2;var w=this._labelTextureSurface.add(x),b=h[g]||"center",S=c[g]||"bottom";this._labelsMesh.geometry.addSprite(this.getLabelPosition(d,g,p),[v.width*_,v.height*_],w,b,S,this.getLabelDistance(d,g,p)*_)}}this._labelsMesh.material.set("uvScale",this._labelTextureSurface.getCoordsScale()),this._labelTextureSurface.getZr().refreshImmediately(),this._labelsMesh.geometry.convertToTypedArray(),this._labelsMesh.geometry.dirty()}},ir.prototype.dispose=function(){this._labelTextureSurface.dispose()};var ee=At.vec3;function Dn(t){this.rootNode=new T.Node,this._triangulationResults={},this._shadersMap=T.COMMON_SHADERS.filter(function(r){return r!=="shadow"}).reduce(function(r,n){return r[n]=T.createShader("ecgl."+n),r},{}),this._linesShader=T.createShader("ecgl.meshLines3D");var e={};T.COMMON_SHADERS.forEach(function(r){e[r]=new T.Material({shader:T.createShader("ecgl."+r)})}),this._groundMaterials=e,this._groundMesh=new T.Mesh({geometry:new T.PlaneGeometry({dynamic:!0}),castShadow:!1,renderNormal:!0,$ignorePicking:!0}),this._groundMesh.rotation.rotateX(-Math.PI/2),this._labelsBuilder=new ir(512,512,t),this._labelsBuilder.getMesh().renderOrder=100,this._labelsBuilder.getMesh().material.depthTest=!1,this.rootNode.add(this._labelsBuilder.getMesh()),this._initMeshes(),this._api=t}T.Shader.import(Ha),Dn.prototype={constructor:Dn,extrudeY:!0,update:function(t,e,r,n,i){var a=t.getData();n==null&&(n=0),i==null&&(i=a.count()),this._startIndex=n,this._endIndex=i-1,this._triangulation(t,n,i);var o=this._getShader(t.get("shading"));this._prepareMesh(t,o,r,n,i),this.rootNode.updateWorldTransform(),this._updateRegionMesh(t,r,n,i);var s=t.coordinateSystem;s.type==="geo3D"&&this._updateGroundPlane(t,s,r);var l=this;this._labelsBuilder.updateData(a,n,i),this._labelsBuilder.getLabelPosition=function(u,h,c){var d=a.getName(u),f=c;if(s.type==="geo3D"){var m=s.getRegion(d);return m?(g=m.getCenter(),s.dataToPoint([g[0],g[1],f])):[NaN,NaN,NaN]}var p=l._triangulationResults[u-l._startIndex],g=l.extrudeY?[(p.max[0]+p.min[0])/2,p.max[1]+f,(p.max[2]+p.min[2])/2]:[(p.max[0]+p.min[0])/2,(p.max[1]+p.min[1])/2,p.max[2]+f]},this._data=a,this._labelsBuilder.updateLabels(),this._updateDebugWireframe(t),this._lastHoverDataIndex=0},_initMeshes:function(){var t,e=(t=new T.Mesh({name:"Polygon",material:new T.Material({shader:this._shadersMap.lambert}),geometry:new T.Geometry({sortTriangles:!0,dynamic:!0}),culling:!1,ignorePicking:!0,renderNormal:!0}),Object.assign(t.geometry,qs),t),r=new T.Mesh({material:new T.Material({shader:this._linesShader}),castShadow:!1,ignorePicking:!0,$ignorePicking:!0,geometry:new Yr({useNativeLine:!1})});this.rootNode.add(e),this.rootNode.add(r),e.material.define("both","VERTEX_COLOR"),e.material.define("fragment","DOUBLE_SIDED"),this._polygonMesh=e,this._linesMesh=r,this.rootNode.add(this._groundMesh)},_getShader:function(t){var e=this._shadersMap[t];return e||(e=this._shadersMap.lambert),e.__shading=t,e},_prepareMesh:function(t,e,r,n,i){for(var a=0,o=0,s=0,l=0,u=n;u<i;u++){var h=this._getRegionPolygonInfo(u),c=this._getRegionLinesInfo(u,t,this._linesMesh.geometry);a+=h.vertexCount,o+=h.triangleCount,s+=c.vertexCount,l+=c.triangleCount}var d=this._polygonMesh,f=d.geometry;["position","normal","texcoord0","color"].forEach(function(m){f.attributes[m].init(a)}),f.indices=a>65535?new Uint32Array(3*o):new Uint16Array(3*o),d.material.shader!==e&&d.material.attachShader(e,!0),T.setMaterialFromModel(e.__shading,d.material,t,r),s>0&&(this._linesMesh.geometry.resetOffset(),this._linesMesh.geometry.setVertexCount(s),this._linesMesh.geometry.setTriangleCount(l)),this._dataIndexOfVertex=new Uint32Array(a),this._vertexRangeOfDataIndex=new Uint32Array(2*(i-n))},_updateRegionMesh:function(t,e,r,n){for(var i=t.getData(),a=0,o=0,s=!1,l=this._polygonMesh,u=this._linesMesh,h=r;h<n;h++){var c=t.getRegionModel(h),d=c.getModel("itemStyle"),f=tt(Gt(i,h),d.get("color"),"#fff"),m=tt(Ut(i,h),d.get("opacity"),1),p=T.parseColor(f),g=T.parseColor(d.get("borderColor"));p[3]*=m,g[3]*=m;var _=p[3]<.99;l.material.set("color",[1,1,1,1]),s=s||_;for(var y=tt(c.get("height",!0),t.get("regionHeight")),x=this._updatePolygonGeometry(t,l.geometry,h,y,a,o,p),v=a;v<x.vertexOffset;v++)this._dataIndexOfVertex[v]=h;this._vertexRangeOfDataIndex[2*(h-r)]=a,this._vertexRangeOfDataIndex[2*(h-r)+1]=x.vertexOffset,a=x.vertexOffset,o=x.triangleOffset;var w=d.get("borderWidth"),b=w>0;b&&(w*=e.getDevicePixelRatio(),this._updateLinesGeometry(u.geometry,t,h,y,w,t.coordinateSystem.transform)),u.invisible=!b,u.material.set({color:g})}(l=this._polygonMesh).material.transparent=s,l.material.depthMask=!s,l.geometry.updateBoundingBox(),l.frontFace=this.extrudeY?T.Mesh.CCW:T.Mesh.CW,l.material.get("normalMap")&&l.geometry.generateTangents(),l.seriesIndex=t.seriesIndex,l.on("mousemove",this._onmousemove,this),l.on("mouseout",this._onmouseout,this)},_updateDebugWireframe:function(t){var e=t.getModel("debug.wireframe");if(e.get("show")){var r=T.parseColor(e.get("lineStyle.color")||"rgba(0,0,0,0.5)"),n=tt(e.get("lineStyle.width"),1),i=this._polygonMesh;i.geometry.generateBarycentric(),i.material.define("both","WIREFRAME_TRIANGLE"),i.material.set("wireframeLineColor",r),i.material.set("wireframeLineWidth",n)}},_onmousemove:function(t){var e=this._dataIndexOfVertex[t.triangle[0]];e==null&&(e=-1),e!==this._lastHoverDataIndex&&(this.downplay(this._lastHoverDataIndex),this.highlight(e),this._labelsBuilder.updateLabels([e])),this._lastHoverDataIndex=e,this._polygonMesh.dataIndex=e},_onmouseout:function(t){t.target&&(this.downplay(this._lastHoverDataIndex),this._lastHoverDataIndex=-1,this._polygonMesh.dataIndex=-1),this._labelsBuilder.updateLabels([])},_updateGroundPlane:function(t,e,r){var n=t.getModel("groundPlane",t);if(this._groundMesh.invisible=!n.get("show",!0),!this._groundMesh.invisible){var i=t.get("shading"),a=this._groundMaterials[i];a||(a=this._groundMaterials.lambert),T.setMaterialFromModel(i,a,n,r),a.get("normalMap")&&this._groundMesh.geometry.generateTangents(),this._groundMesh.material=a,this._groundMesh.material.set("color",T.parseColor(n.get("color"))),this._groundMesh.scale.set(e.size[0],e.size[2],1)}},_triangulation:function(t,e,r){this._triangulationResults=[];for(var n=[1/0,1/0,1/0],i=[-1/0,-1/0,-1/0],a=t.coordinateSystem,o=e;o<r;o++){for(var s=[],l=t.getRegionPolygonCoords(o),u=0;u<l.length;u++){var h=l[u].exterior,c=l[u].interiors,d=[],f=[];if(!(h.length<3)){for(var m=0,p=0;p<h.length;p++){var g=h[p];d[m++]=g[0],d[m++]=g[1]}for(p=0;p<c.length;p++)if(!(c[p].length<3)){for(var _=d.length/2,y=0;y<c[p].length;y++)g=c[p][y],d.push(g[0]),d.push(g[1]);f.push(_)}var x=rc(d,f),v=new Float64Array(d.length/2*3),w=[],b=[1/0,1/0,1/0],S=[-1/0,-1/0,-1/0],M=0;for(p=0;p<d.length;)ee.set(w,d[p++],0,d[p++]),a&&a.transform&&ee.transformMat4(w,w,a.transform),ee.min(b,b,w),ee.max(S,S,w),v[M++]=w[0],v[M++]=w[1],v[M++]=w[2];ee.min(n,n,b),ee.max(i,i,S),s.push({points:v,indices:x,min:b,max:S})}}this._triangulationResults.push(s)}this._geoBoundingBox=[n,i]},_getRegionPolygonInfo:function(t){for(var e=this._triangulationResults[t-this._startIndex],r=0,n=0,i=0;i<e.length;i++)r+=e[i].points.length/3,n+=e[i].indices.length/3;return{vertexCount:2*r+4*r,triangleCount:2*n+2*r}},_updatePolygonGeometry:function(t,e,r,n,i,a,o){var s=t.get("projectUVOnGround"),l=e.attributes.position,u=e.attributes.normal,h=e.attributes.texcoord0,c=e.attributes.color,d=this._triangulationResults[r-this._startIndex],f=c.value&&o,m=e.indices,p=this.extrudeY?1:2,g=this.extrudeY?2:1,_=[this.rootNode.worldTransform.x.len(),this.rootNode.worldTransform.y.len(),this.rootNode.worldTransform.z.len()],y=ee.mul([],this._geoBoundingBox[0],_),x=ee.mul([],this._geoBoundingBox[1],_),v=Math.max(x[0]-y[0],x[2]-y[2]);function w(Xt,ae,Tr){var ce=i;(function(or,xe){for(var Ze=or.points,wc=Ze.length,Ei=[],Wa=[],Kr=0;Kr<wc;Kr+=3)Ei[0]=Ze[Kr],Ei[p]=xe,Ei[g]=Ze[Kr+2],Wa[0]=(Ze[Kr]*_[0]-y[0])/v,Wa[1]=(Ze[Kr+2]*_[g]-y[2])/v,l.set(i,Ei),f&&c.set(i,o),h.set(i++,Wa)})(Xt,ae);for(var Sr=Xt.indices.length,Zt=0;Zt<Sr;Zt++)m[3*a+Zt]=Xt.indices[Zt]+ce;a+=Xt.indices.length/3}for(var b=this.extrudeY?[0,1,0]:[0,0,1],S=ee.negate([],b),M=0;M<d.length;M++){var D=i,L=d[M];w(L,0),w(L,n);for(var P=L.points.length/3,O=0;O<P;O++)u.set(D+O,S),u.set(D+O+P,b);var R=[0,3,1,1,3,2],A=[[],[],[],[]],z=[],F=[],X=[],H=[],ut=0;for(O=0;O<P;O++){for(var G=(O+1)%P,St=(L.points[3*G]-L.points[3*O])*_[0],ht=(L.points[3*G+2]-L.points[3*O+2])*_[g],pt=Math.sqrt(St*St+ht*ht),J=0;J<4;J++){var te=J===0||J===3,_t=3*(te?O:G);A[J][0]=L.points[_t],A[J][p]=J>1?n:0,A[J][g]=L.points[_t+2],l.set(i+J,A[J]),s?(H[0]=(L.points[_t]*_[0]-y[0])/v,H[1]=(L.points[_t+2]*_[g]-y[g])/v):(H[0]=(te?ut:ut+pt)/v,H[1]=(A[J][p]*_[p]-y[p])/v),h.set(i+J,H)}for(ee.sub(z,A[1],A[0]),ee.sub(F,A[3],A[0]),ee.cross(X,z,F),ee.normalize(X,X),J=0;J<4;J++)u.set(i+J,X),f&&c.set(i+J,o);for(J=0;J<6;J++)m[3*a+J]=R[J]+i;i+=4,a+=2,ut+=pt}}return e.dirty(),{vertexOffset:i,triangleOffset:a}},_getRegionLinesInfo:function(t,e,r){var n=0,i=0;return e.getRegionModel(t).getModel("itemStyle").get("borderWidth")>0&&e.getRegionPolygonCoords(t).forEach(function(a){var o=a.exterior,s=a.interiors;n+=r.getPolylineVertexCount(o),i+=r.getPolylineTriangleCount(o);for(var l=0;l<s.length;l++)n+=r.getPolylineVertexCount(s[l]),i+=r.getPolylineTriangleCount(s[l])},this),{vertexCount:n,triangleCount:i}},_updateLinesGeometry:function(t,e,r,n,i,a){function o(l){for(var u=new Float64Array(3*l.length),h=0,c=[],d=0;d<l.length;d++)c[0]=l[d][0],c[1]=n+.1,c[2]=l[d][1],a&&ee.transformMat4(c,c,a),u[h++]=c[0],u[h++]=c[1],u[h++]=c[2];return u}var s=[1,1,1,1];e.getRegionPolygonCoords(r).forEach(function(l){var u=l.exterior,h=l.interiors;t.addPolyline(o(u),s,i);for(var c=0;c<h.length;c++)t.addPolyline(o(h[c]),s,i)})},highlight:function(t){var e=this._data;if(e){var r=e.getItemModel(t).getModel(["emphasis","itemStyle"]),n=r.get("color"),i=tt(r.get("opacity"),Ut(e,t),1);if(n==null){var a=Gt(e,t);n=Ts(a,-.4)}i==null&&(i=Ut(e,t));var o=T.parseColor(n);o[3]*=i,this._setColorOfDataIndex(e,t,o)}},downplay:function(t){var e=this._data;if(e){var r=e.getItemModel(t),n=tt(Gt(e,t),r.get(["itemStyle","color"]),"#fff"),i=tt(Ut(e,t),r.get(["itemStyle","opacity"]),1),a=T.parseColor(n);a[3]*=i,this._setColorOfDataIndex(e,t,a)}},dispose:function(){this._labelsBuilder.dispose()},_setColorOfDataIndex:function(t,e,r){if(!(e<this._startIndex&&e>this._endIndex)){e-=this._startIndex;for(var n=this._vertexRangeOfDataIndex[2*e];n<this._vertexRangeOfDataIndex[2*e+1];n++)this._polygonMesh.geometry.attributes.color.set(n,r);this._polygonMesh.geometry.dirty(),this._api.getZr().refresh()}}};const Qp=wi.extend({type:"geo3D",__ecgl__:!0,init:function(t,e){this._geo3DBuilder=new Dn(e),this.groupGL=new T.Node,this._lightRoot=new T.Node,this._sceneHelper=new wr(this._lightRoot),this._sceneHelper.initLight(this._lightRoot),this._control=new ka({zr:e.getZr()}),this._control.init()},render:function(t,e,r){this.groupGL.add(this._geo3DBuilder.rootNode);var n=t.coordinateSystem;if(n&&n.viewGL){n.viewGL.add(this._lightRoot),t.get("show")?n.viewGL.add(this.groupGL):n.viewGL.remove(this.groupGL);var i=this._control;i.setViewGL(n.viewGL);var a=t.getModel("viewControl");i.setFromViewControlModel(a,0),this._sceneHelper.setScene(n.viewGL.scene),this._sceneHelper.updateLight(t),n.viewGL.setPostEffect(t.getModel("postEffect"),r),n.viewGL.setTemporalSuperSampling(t.getModel("temporalSuperSampling")),this._geo3DBuilder.update(t,e,r,0,t.getData().count());var o=n.viewGL.isLinearSpace()?"define":"undefine";this._geo3DBuilder.rootNode.traverse(function(s){s.material&&s.material[o]("fragment","SRGB_DECODE")}),i.off("update"),i.on("update",function(){r.dispatchAction({type:"geo3DChangeCamera",alpha:i.getAlpha(),beta:i.getBeta(),distance:i.getDistance(),center:i.getCenter(),from:this.uid,geo3DId:t.id})}),i.update()}},afterRender:function(t,e,r,n){var i=n.renderer;this._sceneHelper.updateAmbientCubemap(i,t,r),this._sceneHelper.updateSkybox(i,t,r)},dispose:function(){this._control.dispose(),this._geo3DBuilder.dispose()}});var $p={Russia:[100,60],"United States":[-99,38],"United States of America":[-99,38]},tm=At.vec3,xn=At.mat4,em=[nd,function(t,e){if(t==="world"){var r=$p[e.name];if(r){var n=[r[0],r[1]];e.setCenter(n)}}}];function Ea(t,e,r,n,i){this.name=t,this.map=e,this.regionHeight=0,this.regions=[],this._nameCoordMap={},this.loadGeoJson(r,n,i),this.transform=xn.identity(new Float64Array(16)),this.invTransform=xn.identity(new Float64Array(16)),this.extrudeY=!0,this.altitudeAxis}function rm(t,e){var r=t.getBoxLayoutParams(),n=La(r,{width:e.getWidth(),height:e.getHeight()});n.y=e.getHeight()-n.y-n.height,this.viewGL.setViewport(n.x,n.y,n.width,n.height,e.getDevicePixelRatio());var i=this.getGeoBoundingRect(),a=i.width/i.height*(t.get("aspectScale")||.75),o=t.get("boxWidth"),s=t.get("boxDepth"),l=t.get("boxHeight");l==null&&(l=5),isNaN(o)&&isNaN(s)&&(o=100),isNaN(s)?s=o/a:isNaN(o)&&(o=s/a),this.setSize(o,l,s),this.regionHeight=t.get("regionHeight"),this.altitudeAxis&&this.altitudeAxis.setExtent(0,Math.max(l-this.regionHeight,0))}function nm(t,e){var r=[1/0,-1/0];if(t.eachSeries(function(i){if(i.coordinateSystem===this&&i.type!=="series.map3D"){var a=i.getData(),o=i.coordDimToDataDim("alt"),s=o&&o[0];if(s){var l=a.getDataExtent(s,!0);r[0]=Math.min(r[0],l[0]),r[1]=Math.max(r[1],l[1])}}},this),r&&isFinite(r[1]-r[0])){var n=Ms(r,{type:"value",min:"dataMin",max:"dataMax"});this.altitudeAxis=new Ca("altitude",n),this.resize(this.model,e)}}Ea.prototype={constructor:Ea,type:"geo3D",dimensions:["lng","lat","alt"],containPoint:function(){},loadGeoJson:function(t,e,r){var n=tl||tl;try{this.regions=t?n(t):[]}catch(u){throw`Invalid geoJson format
`+u}e=e||{},r=r||{};for(var i=this.regions,a={},o=0;o<i.length;o++){var s=i[o].name;s=r[s]||s,i[o].name=s,a[s]=i[o],this.addGeoCoord(s,i[o].getCenter());var l=e[s];l&&i[o].transformTo(l.left,l.top,l.width,l.height)}this._regionsMap=a,this._geoRect=null,em.forEach(function(u){u(this)},this)},getGeoBoundingRect:function(){if(this._geoRect)return this._geoRect;for(var t,e=this.regions,r=0;r<e.length;r++){var n=e[r].getBoundingRect();(t=t||n.clone()).union(n)}return this._geoRect=t||new Uc(0,0,0,0)},addGeoCoord:function(t,e){this._nameCoordMap[t]=e},getRegion:function(t){return this._regionsMap[t]},getRegionByCoord:function(t){for(var e=this.regions,r=0;r<e.length;r++)if(e[r].contain(t))return e[r]},setSize:function(t,e,r){this.size=[t,e,r];var n=this.getGeoBoundingRect(),i=t/n.width,a=-r/n.height,o=-t/2-n.x*i,s=r/2-n.y*a,l=this.extrudeY?[o,0,s]:[o,s,0],u=this.extrudeY?[i,1,a]:[i,a,1],h=this.transform;xn.identity(h),xn.translate(h,h,l),xn.scale(h,h,u),xn.invert(this.invTransform,h)},dataToPoint:function(t,e){e=e||[];var r=this.extrudeY?1:2,n=this.extrudeY?2:1,i=t[2];return isNaN(i)&&(i=0),e[0]=t[0],e[n]=t[1],this.altitudeAxis?e[r]=this.altitudeAxis.dataToCoord(i):e[r]=0,e[r]+=this.regionHeight,tm.transformMat4(e,e,this.transform),e},pointToData:function(t,e){}};var Pu=0,oc={dimensions:Ea.prototype.dimensions,create:function(t,e){var r=[];if(!Wo)throw new Error("geo3D component depends on geo component");function n(i,a){var o=oc.createGeo3D(i);i.__viewGL=i.__viewGL||new dt,o.viewGL=i.__viewGL,i.coordinateSystem=o,o.model=i,r.push(o),o.resize=rm,o.resize(i,e),o.update=nm}return t.eachComponent("geo3D",function(i,a){n(i)}),t.eachSeriesByType("map3D",function(i,a){var o=i.get("coordinateSystem");o==null&&(o="geo3D"),o==="geo3D"&&n(i)}),t.eachSeries(function(i){if(i.get("coordinateSystem")==="geo3D"){if(i.type==="series.map3D")return;var a=i.getReferringComponents("geo3D").models[0];if(a||(a=t.getComponent("geo3D")),!a)throw new Error('geo "'+tt(i.get("geo3DIndex"),i.get("geo3DId"),0)+'" not found');i.coordinateSystem=a.coordinateSystem}}),r},createGeo3D:function(t){var e,r=t.get("map");return typeof r=="string"?(e=r,r=Wo(r)):r&&r.features&&(r={geoJson:r}),e==null&&(e="GEO_ANONYMOUS_"+Pu++),new Ea(e+Pu++,e,r&&r.geoJson,r&&r.specialAreas,t.get("nameMap"))}};const sc=oc;function lc(t){t.registerComponentModel(Vp),t.registerComponentView(Qp),t.registerAction({type:"geo3DChangeCamera",event:"geo3dcamerachanged",update:"series:updateCamera"},function(e,r){r.eachComponent({mainType:"geo3D",query:e},function(n){n.setView(e)})}),t.registerCoordinateSystem("geo3D",sc)}function Ou(t,e){t.id=t.id||t.name||e+""}Wt(lc);var Wr=Cn.extend({type:"globe",layoutMode:"box",coordinateSystem:null,init:function(){Wr.superApply(this,"init",arguments),je(this.option.layers,function(t,e){ft(t,this.defaultLayerOption),Ou(t,e)},this)},mergeOption:function(t){var e=this.option.layers;function r(o){return id(o,function(s,l,u){return Ou(l,u),s[l.id]=l,s},{})}if(this.option.layers=null,Wr.superApply(this,"mergeOption",arguments),e&&e.length){var n=r(t.layers),i=r(e);for(var a in n)i[a]?ft(i[a],n[a],!0):e.push(t.layers[a]);this.option.layers=e}je(this.option.layers,function(o){ft(o,this.defaultLayerOption)},this)},optionUpdated:function(){this.updateDisplacementHash()},defaultLayerOption:{show:!0,type:"overlay"},defaultOption:{show:!0,zlevel:-10,left:0,top:0,width:"100%",height:"100%",environment:"auto",baseColor:"#fff",baseTexture:"",heightTexture:"",displacementTexture:"",displacementScale:0,displacementQuality:"medium",globeRadius:100,globeOuterRadius:150,shading:"lambert",light:{main:{time:""}},atmosphere:{show:!1,offset:5,color:"#ffffff",glowPower:6,innerGlowPower:2},viewControl:{autoRotate:!0,panSensitivity:0,targetCoord:null},layers:[]},setDisplacementData:function(t,e,r){this.displacementData=t,this.displacementWidth=e,this.displacementHeight=r},getDisplacementTexture:function(){return this.get("displacementTexture")||this.get("heightTexture")},getDisplacemenScale:function(){var t=this.getDisplacementTexture(),e=this.get("displacementScale");return t&&t!=="none"||(e=0),e},hasDisplacement:function(){return this.getDisplacemenScale()>0},_displacementChanged:!0,_displacementScale:0,updateDisplacementHash:function(){var t=this.getDisplacementTexture(),e=this.getDisplacemenScale();this._displacementChanged=this._displacementTexture!==t||this._displacementScale!==e,this._displacementTexture=t,this._displacementScale=e},isDisplacementChanged:function(){return this._displacementChanged}});ft(Wr.prototype,Ga),ft(Wr.prototype,Pn),ft(Wr.prototype,On),ft(Wr.prototype,Rn);const im=Wr;var uc=Math.PI,ye=Math.sin,ar=Math.cos,hc=Math.tan,cc=Math.asin,dc=Math.atan2,Gr=uc/180,Aa=23.4397*Gr;function am(t,e){return dc(ye(t)*ar(Aa)-hc(e)*ye(Aa),ar(t))}function om(t,e){return cc(ye(e)*ar(Aa)+ar(e)*ye(Aa)*ye(t))}function sm(t,e,r){return dc(ye(t),ar(t)*ye(e)-hc(r)*ar(e))}function lm(t,e,r){return cc(ye(e)*ye(r)+ar(e)*ar(r)*ar(t))}var um={getPosition:function(t,e,r){var n=Gr*-r,i=Gr*e,a=t.valueOf()/864e5-.5+2440588-2451545,o=function(l){var u,h=(u=Gr*(357.5291+.98560028*l))+Gr*(1.9148*ye(u)+.02*ye(2*u)+3e-4*ye(3*u))+102.9372*Gr+uc;return{dec:om(h,0),ra:am(h,0)}}(a),s=Gr*(280.16+360.9856235*a)-n-o.ra;return{azimuth:sm(s,i,o.dec),altitude:lm(s,i,o.dec)}}};const hm=um;T.Shader.import(Nh),T.Shader.import(`@export ecgl.atmosphere.vertex
attribute vec3 position: POSITION;
attribute vec3 normal : NORMAL;
uniform mat4 worldViewProjection : WORLDVIEWPROJECTION;
uniform mat4 normalMatrix : WORLDINVERSETRANSPOSE;

varying vec3 v_Normal;

void main() {
 v_Normal = normalize((normalMatrix * vec4(normal, 0.0)).xyz);
 gl_Position = worldViewProjection * vec4(position, 1.0);
}
@end


@export ecgl.atmosphere.fragment
uniform mat4 viewTranspose: VIEWTRANSPOSE;
uniform float glowPower;
uniform vec3 glowColor;

varying vec3 v_Normal;

void main() {
 float intensity = pow(1.0 - dot(v_Normal, (viewTranspose * vec4(0.0, 0.0, 1.0, 0.0)).xyz), glowPower);
 gl_FragColor = vec4(glowColor, intensity * intensity);
}
@end`);const cm=wi.extend({type:"globe",__ecgl__:!0,_displacementScale:0,init:function(t,e){this.groupGL=new T.Node,this._sphereGeometry=new T.SphereGeometry({widthSegments:200,heightSegments:100,dynamic:!0}),this._overlayGeometry=new T.SphereGeometry({widthSegments:80,heightSegments:40}),this._planeGeometry=new T.PlaneGeometry,this._earthMesh=new T.Mesh({renderNormal:!0}),this._atmosphereMesh=new T.Mesh,this._atmosphereGeometry=new T.SphereGeometry({widthSegments:80,heightSegments:40}),this._atmosphereMaterial=new T.Material({shader:new T.Shader(T.Shader.source("ecgl.atmosphere.vertex"),T.Shader.source("ecgl.atmosphere.fragment")),transparent:!0}),this._atmosphereMesh.geometry=this._atmosphereGeometry,this._atmosphereMesh.material=this._atmosphereMaterial,this._atmosphereMesh.frontFace=T.Mesh.CW,this._lightRoot=new T.Node,this._sceneHelper=new wr,this._sceneHelper.initLight(this._lightRoot),this.groupGL.add(this._atmosphereMesh),this.groupGL.add(this._earthMesh),this._control=new ka({zr:e.getZr()}),this._control.init(),this._layerMeshes={}},render:function(t,e,r){var n=t.coordinateSystem,i=t.get("shading");n.viewGL.add(this._lightRoot),t.get("show")?n.viewGL.add(this.groupGL):n.viewGL.remove(this.groupGL),this._sceneHelper.setScene(n.viewGL.scene),n.viewGL.setPostEffect(t.getModel("postEffect"),r),n.viewGL.setTemporalSuperSampling(t.getModel("temporalSuperSampling"));var a=this._earthMesh;a.geometry=this._sphereGeometry;var o="ecgl."+i;a.material&&a.material.shader.name===o||(a.material=T.createMaterial(o)),T.setMaterialFromModel(i,a.material,t,r),["roughnessMap","metalnessMap","detailMap","normalMap"].forEach(function(c){var d=a.material.get(c);d&&(d.flipY=!1)}),a.material.set("color",T.parseColor(t.get("baseColor")));var s=.99*n.radius;if(a.scale.set(s,s,s),t.get("atmosphere.show")){a.material.define("both","ATMOSPHERE_ENABLED"),this._atmosphereMesh.invisible=!1,this._atmosphereMaterial.setUniforms({glowPower:t.get("atmosphere.glowPower")||6,glowColor:t.get("atmosphere.color")||"#ffffff"}),a.material.setUniforms({glowPower:t.get("atmosphere.innerGlowPower")||2,glowColor:t.get("atmosphere.color")||"#ffffff"});var l=t.get("atmosphere.offset")||5;this._atmosphereMesh.scale.set(s+l,s+l,s+l)}else a.material.undefine("both","ATMOSPHERE_ENABLED"),this._atmosphereMesh.invisible=!0;var u=a.material.setTextureImage("diffuseMap",t.get("baseTexture"),r,{flipY:!1,anisotropic:8});u&&u.surface&&u.surface.attachToMesh(a);var h=a.material.setTextureImage("bumpMap",t.get("heightTexture"),r,{flipY:!1,anisotropic:8});h&&h.surface&&h.surface.attachToMesh(a),a.material[t.get("postEffect.enable")?"define":"undefine"]("fragment","SRGB_DECODE"),this._updateLight(t,r),this._displaceVertices(t,r),this._updateViewControl(t,r),this._updateLayers(t,r)},afterRender:function(t,e,r,n){var i=n.renderer;this._sceneHelper.updateAmbientCubemap(i,t,r),this._sceneHelper.updateSkybox(i,t,r)},_updateLayers:function(t,e){var r=t.coordinateSystem,n=t.get("layers"),i=r.radius,a=[],o=[],s=[],l=[];je(n,function(f){var m=new Tn(f),p=m.get("type"),g=T.loadTexture(m.get("texture"),e,{flipY:!1,anisotropic:8});if(g.surface&&g.surface.attachToMesh(this._earthMesh),p==="blend"){var _=m.get("blendTo"),y=tt(m.get("intensity"),1);_==="emission"?(s.push(g),l.push(y)):(a.push(g),o.push(y))}else{var x=m.get("id"),v=this._layerMeshes[x];v||(v=this._layerMeshes[x]=new T.Mesh({geometry:this._overlayGeometry,castShadow:!1,ignorePicking:!0})),m.get("shading")==="lambert"?(v.material=v.__lambertMaterial||new T.Material({autoUpdateTextureStatus:!1,shader:T.createShader("ecgl.lambert"),transparent:!0,depthMask:!1}),v.__lambertMaterial=v.material):(v.material=v.__colorMaterial||new T.Material({autoUpdateTextureStatus:!1,shader:T.createShader("ecgl.color"),transparent:!0,depthMask:!1}),v.__colorMaterial=v.material),v.material.enableTexture("diffuseMap");var w=m.get("distance"),b=i+(w==null?r.radius/100:w);v.scale.set(b,b,b),i=b;var S=this._blankTexture||(this._blankTexture=T.createBlankTexture("rgba(255, 255, 255, 0)"));v.material.set("diffuseMap",S),T.loadTexture(m.get("texture"),e,{flipY:!1,anisotropic:8},function(M){M.surface&&M.surface.attachToMesh(v),v.material.set("diffuseMap",M),e.getZr().refresh()}),m.get("show")?this.groupGL.add(v):this.groupGL.remove(v)}},this);var u=this._earthMesh.material;u.define("fragment","LAYER_DIFFUSEMAP_COUNT",a.length),u.define("fragment","LAYER_EMISSIVEMAP_COUNT",s.length),u.set("layerDiffuseMap",a),u.set("layerDiffuseIntensity",o),u.set("layerEmissiveMap",s),u.set("layerEmissionIntensity",l);var h=t.getModel("debug.wireframe");if(h.get("show")){u.define("both","WIREFRAME_TRIANGLE");var c=T.parseColor(h.get("lineStyle.color")||"rgba(0,0,0,0.5)"),d=tt(h.get("lineStyle.width"),1);u.set("wireframeLineWidth",d),u.set("wireframeLineColor",c)}else u.undefine("both","WIREFRAME_TRIANGLE")},_updateViewControl:function(t,e){var r=t.coordinateSystem,n=t.getModel("viewControl");r.viewGL.camera;var i=this,a=this._control;a.setViewGL(r.viewGL);var o,s,l=n.get("targetCoord");l!=null&&(s=l[0]+90,o=l[1]),a.setFromViewControlModel(n,{baseDistance:r.radius,alpha:o,beta:s}),a.off("update"),a.on("update",function(){e.dispatchAction({type:"globeChangeCamera",alpha:a.getAlpha(),beta:a.getBeta(),distance:a.getDistance()-r.radius,center:a.getCenter(),from:i.uid,globeId:t.id})})},_displaceVertices:function(t,e){var r=t.get("displacementQuality"),n=t.get("debug.wireframe.show"),i=t.coordinateSystem;if(t.isDisplacementChanged()||r!==this._displacementQuality||n!==this._showDebugWireframe){this._displacementQuality=r,this._showDebugWireframe=n;var a=this._sphereGeometry,o={low:100,medium:200,high:400,ultra:800}[r]||200,s=o/2;(a.widthSegments!==o||n)&&(a.widthSegments=o,a.heightSegments=s,a.build()),this._doDisplaceVertices(a,i),n&&a.generateBarycentric()}},_doDisplaceVertices:function(t,e){var r=t.attributes.position.value,n=t.attributes.texcoord0.value,i=t.__originalPosition;i&&i.length===r.length||((i=new Float32Array(r.length)).set(r),t.__originalPosition=i);for(var a=e.displacementWidth,o=e.displacementHeight,s=e.displacementData,l=0;l<t.vertexCount;l++){var u=3*l,h=2*l,c=i[u+1],d=i[u+2],f=i[u+3],m=n[h++],p=n[h++],g=Math.round(m*(a-1)),_=Math.round(p*(o-1)),y=s?s[_*a+g]:0;r[u+1]=c+c*y,r[u+2]=d+d*y,r[u+3]=f+f*y}t.generateVertexNormals(),t.dirty(),t.updateBoundingBox()},_updateLight:function(t,e){var r=this._earthMesh;this._sceneHelper.updateLight(t);var n=this._sceneHelper.mainLight,i=t.get("light.main.time")||new Date,a=hm.getPosition(Gc(i),0,0),o=Math.cos(a.altitude);n.position.y=-o*Math.cos(a.azimuth),n.position.x=Math.sin(a.altitude),n.position.z=o*Math.sin(a.azimuth),n.lookAt(r.getWorldPosition())},dispose:function(t,e){this.groupGL.removeAll(),this._control.dispose()}});var dm=At.vec3;function Da(t){this.radius=t,this.viewGL=null,this.altitudeAxis,this.displacementData=null,this.displacementWidth,this.displacementHeight}function fm(t,e){var r=t.getBoxLayoutParams(),n=La(r,{width:e.getWidth(),height:e.getHeight()});n.y=e.getHeight()-n.y-n.height,this.viewGL.setViewport(n.x,n.y,n.width,n.height,e.getDevicePixelRatio()),this.radius=t.get("globeRadius");var i=t.get("globeOuterRadius");this.altitudeAxis&&this.altitudeAxis.setExtent(0,i-this.radius)}function pm(t,e){var r=[1/0,-1/0];if(t.eachSeries(function(i){if(i.coordinateSystem===this){var a=i.getData(),o=i.coordDimToDataDim("alt"),s=o&&o[0];if(s){var l=a.getDataExtent(s,!0);r[0]=Math.min(r[0],l[0]),r[1]=Math.max(r[1],l[1])}}},this),r&&isFinite(r[1]-r[0])){var n=Ms(r,{type:"value",min:"dataMin",max:"dataMax"});this.altitudeAxis=new Ca("altitude",n),this.resize(this.model,e)}}Da.prototype={constructor:Da,dimensions:["lng","lat","alt"],type:"globe",containPoint:function(){},setDisplacementData:function(t,e,r){this.displacementData=t,this.displacementWidth=e,this.displacementHeight=r},_getDisplacementScale:function(t,e){var r=(t+180)/360*(this.displacementWidth-1),n=(90-e)/180*(this.displacementHeight-1),i=Math.round(r)+Math.round(n)*this.displacementWidth;return this.displacementData[i]},dataToPoint:function(t,e){var r=t[0],n=t[1],i=t[2]||0,a=this.radius;this.displacementData&&(a*=1+this._getDisplacementScale(r,n)),this.altitudeAxis&&(a+=this.altitudeAxis.dataToCoord(i)),r=r*Math.PI/180,n=n*Math.PI/180;var o=Math.cos(n)*a;return(e=e||[])[0]=-o*Math.cos(r+Math.PI),e[1]=Math.sin(n)*a,e[2]=o*Math.sin(r+Math.PI),e},pointToData:function(t,e){var r=t[0],n=t[1],i=t[2],a=dm.len(t);r/=a,n/=a,i/=a;var o=Math.asin(n),s=Math.atan2(i,-r);s<0&&(s=2*Math.PI+s);var l=180*o/Math.PI,u=180*s/Math.PI-180;return(e=e||[])[0]=u,e[1]=l,e[2]=a-this.radius,this.altitudeAxis&&(e[2]=this.altitudeAxis.coordToData(e[2])),e}};var mm={dimensions:Da.prototype.dimensions,create:function(t,e){var r=[];return t.eachComponent("globe",function(n){n.__viewGL=n.__viewGL||new dt;var i=new Da;i.viewGL=n.__viewGL,n.coordinateSystem=i,i.model=n,r.push(i),i.resize=fm,i.resize(n,e),i.update=pm}),t.eachSeries(function(n){if(n.get("coordinateSystem")==="globe"){var i=n.getReferringComponents("globe").models[0];if(i||(i=t.getComponent("globe")),!i)throw new Error('globe "'+tt(n.get("globe3DIndex"),n.get("globe3DId"),0)+'" not found');var a=i.coordinateSystem;n.coordinateSystem=a}}),t.eachComponent("globe",function(n,i){var a=n.coordinateSystem,o=n.getDisplacementTexture(),s=n.getDisplacemenScale();if(n.isDisplacementChanged()){if(n.hasDisplacement()){var l=!0;T.loadTexture(o,e,function(u){var h=function(c,d){var f=document.createElement("canvas"),m=f.getContext("2d"),p=c.width,g=c.height;f.width=p,f.height=g,m.drawImage(c,0,0,p,g);for(var _=m.getImageData(0,0,p,g).data,y=new Float32Array(_.length/4),x=0;x<_.length/4;x++){var v=_[4*x];y[x]=v/255*d}return{data:y,width:p,height:g}}(u.image,s);n.setDisplacementData(h.data,h.width,h.height),l||e.dispatchAction({type:"globeUpdateDisplacment"})}),l=!1}else a.setDisplacementData(null,0,0);a.setDisplacementData(n.displacementData,n.displacementWidth,n.displacementHeight)}}),r}};const gm=mm;Wt(function(t){t.registerComponentModel(im),t.registerComponentView(cm),t.registerCoordinateSystem("globe",gm),t.registerAction({type:"globeChangeCamera",event:"globecamerachanged",update:"series:updateCamera"},function(e,r){r.eachComponent({mainType:"globe",query:e},function(n){n.setView(e)})}),t.registerAction({type:"globeUpdateDisplacment",event:"globedisplacementupdated",update:"update"},function(e,r){})});var Ru=["zoom","center","pitch","bearing"],_s=Cn.extend({type:"mapbox3D",layoutMode:"box",coordinateSystem:null,defaultOption:{zlevel:-10,style:"mapbox://styles/mapbox/light-v9",center:[0,0],zoom:0,pitch:0,bearing:0,light:{main:{alpha:20,beta:30}},altitudeScale:1,boxHeight:"auto"},getMapboxCameraOption:function(){var t=this;return Ru.reduce(function(e,r){return e[r]=t.get(r),e},{})},setMapboxCameraOption:function(t){t!=null&&Ru.forEach(function(e){t[e]!=null&&(this.option[e]=t[e])},this)},getMapbox:function(){return this._mapbox},setMapbox:function(t){this._mapbox=t}});ft(_s.prototype,Pn),ft(_s.prototype,On);const _m=_s;function gr(t,e){if(this.id=t,this.zr=e,this.dom=document.createElement("div"),this.dom.style.cssText="position:absolute;left:0;right:0;top:0;bottom:0;",!mapboxgl)throw new Error("Mapbox GL library must be included. See https://www.mapbox.com/mapbox-gl-js/api/");this._mapbox=new mapboxgl.Map({container:this.dom}),this._initEvents()}gr.prototype.setUnpainted=function(){},gr.prototype.resize=function(){this._mapbox.resize()},gr.prototype.getMapbox=function(){return this._mapbox},gr.prototype.clear=function(){},gr.prototype.refresh=function(){this._mapbox.resize()};var Nu=["mousedown","mouseup","click","dblclick","mousemove","mousewheel","wheel","touchstart","touchend","touchmove","touchcancel"];gr.prototype._initEvents=function(){var t=this._mapbox.getCanvasContainer();this._handlers=this._handlers||{contextmenu:function(e){return e.preventDefault(),!1}},Nu.forEach(function(e){this._handlers[e]=function(r){var n={};for(var i in r)n[i]=r[i];n.bubbles=!1;var a=new r.constructor(r.type,n);t.dispatchEvent(a)},this.zr.dom.addEventListener(e,this._handlers[e])},this),this.zr.dom.addEventListener("contextmenu",this._handlers.contextmenu)},gr.prototype.dispose=function(){Nu.forEach(function(t){this.zr.dom.removeEventListener(t,this._handlers[t])},this)};const fc=`
@export ecgl.displayShadow.vertex

@import ecgl.common.transformUniforms

@import ecgl.common.uv.header

@import ecgl.common.attributes

varying vec3 v_WorldPosition;

varying vec3 v_Normal;

void main()
{
 @import ecgl.common.uv.main
 v_Normal = normalize((worldInverseTranspose * vec4(normal, 0.0)).xyz);

 v_WorldPosition = (world * vec4(position, 1.0)).xyz;
 gl_Position = worldViewProjection * vec4(position, 1.0);
}

@end


@export ecgl.displayShadow.fragment

@import ecgl.common.uv.fragmentHeader

varying vec3 v_Normal;
varying vec3 v_WorldPosition;

uniform float roughness: 0.2;

#ifdef DIRECTIONAL_LIGHT_COUNT
@import clay.header.directional_light
#endif

@import ecgl.common.ssaoMap.header

@import clay.plugin.compute_shadow_map

void main()
{
 float shadow = 1.0;

 @import ecgl.common.ssaoMap.main

#if defined(DIRECTIONAL_LIGHT_COUNT) && defined(DIRECTIONAL_LIGHT_SHADOWMAP_COUNT)
 float shadowContribsDir[DIRECTIONAL_LIGHT_COUNT];
 if(shadowEnabled)
 {
 computeShadowOfDirectionalLights(v_WorldPosition, shadowContribsDir);
 }
 for (int i = 0; i < DIRECTIONAL_LIGHT_COUNT; i++) {
 shadow = min(shadow, shadowContribsDir[i] * 0.5 + 0.5);
 }
#endif

 shadow *= 0.5 + ao * 0.5;
 shadow = clamp(shadow, 0.0, 1.0);

 gl_FragColor = vec4(vec3(0.0), 1.0 - shadow);
}

@end`;T.Shader.import(fc);const vm=wi.extend({type:"mapbox3D",__ecgl__:!0,init:function(t,e){var r=e.getZr();this._zrLayer=new gr("mapbox3D",r),r.painter.insertLayer(-1e3,this._zrLayer),this._lightRoot=new T.Node,this._sceneHelper=new wr(this._lightRoot),this._sceneHelper.initLight(this._lightRoot);var n=this._zrLayer.getMapbox(),i=this._dispatchInteractAction.bind(this,e,n);["zoom","rotate","drag","pitch","rotate","move"].forEach(function(a){n.on(a,i)}),this._groundMesh=new T.Mesh({geometry:new T.PlaneGeometry,material:new T.Material({shader:new T.Shader({vertex:T.Shader.source("ecgl.displayShadow.vertex"),fragment:T.Shader.source("ecgl.displayShadow.fragment")}),depthMask:!1}),renderOrder:-100,culling:!1,castShadow:!1,$ignorePicking:!0,renderNormal:!0})},render:function(t,e,r){var n=this._zrLayer.getMapbox(),i=t.get("style"),a=JSON.stringify(i);a!==this._oldStyleStr&&i&&n.setStyle(i),this._oldStyleStr=a,n.setCenter(t.get("center")),n.setZoom(t.get("zoom")),n.setPitch(t.get("pitch")),n.setBearing(t.get("bearing")),t.setMapbox(n);var o=t.coordinateSystem;o.viewGL.scene.add(this._lightRoot),o.viewGL.add(this._groundMesh),this._updateGroundMesh(),this._sceneHelper.setScene(o.viewGL.scene),this._sceneHelper.updateLight(t),o.viewGL.setPostEffect(t.getModel("postEffect"),r),o.viewGL.setTemporalSuperSampling(t.getModel("temporalSuperSampling")),this._mapbox3DModel=t},afterRender:function(t,e,r,n){var i=n.renderer;this._sceneHelper.updateAmbientCubemap(i,t,r),this._sceneHelper.updateSkybox(i,t,r),t.coordinateSystem.viewGL.scene.traverse(function(a){a.material&&(a.material.define("fragment","NORMAL_UP_AXIS",2),a.material.define("fragment","NORMAL_FRONT_AXIS",1))})},updateCamera:function(t,e,r,n){t.coordinateSystem.setCameraOption(n),this._updateGroundMesh(),r.getZr().refresh()},_dispatchInteractAction:function(t,e,r){t.dispatchAction({type:"mapbox3DChangeCamera",pitch:e.getPitch(),zoom:e.getZoom(),center:e.getCenter().toArray(),bearing:e.getBearing(),mapbox3DId:this._mapbox3DModel&&this._mapbox3DModel.id})},_updateGroundMesh:function(){if(this._mapbox3DModel){var t=this._mapbox3DModel.coordinateSystem,e=t.dataToPoint(t.center);this._groundMesh.position.set(e[0],e[1],-.001);var r=new T.Plane(new T.Vector3(0,0,1),0),n=t.viewGL.camera.castRay(new T.Vector2(-1,-1)),i=t.viewGL.camera.castRay(new T.Vector2(1,1)),a=n.intersectPlane(r),o=i.intersectPlane(r),s=a.dist(o)/t.viewGL.rootNode.scale.x;this._groundMesh.scale.set(s,s,1)}},dispose:function(t,e){this._zrLayer&&this._zrLayer.dispose(),e.getZr().painter.delLayer(-1e3)}});var dr=At.mat4,Kn=512,Bo=.6435011087932844,re=Math.PI,hn=.1;function wn(){this.width=0,this.height=0,this.altitudeScale=1,this.boxHeight="auto",this.altitudeExtent,this.bearing=0,this.pitch=0,this.center=[0,0],this._origin,this.zoom=0,this._initialZoom,this.maxPitch=60,this.zoomOffset=0}function ai(){wn.apply(this,arguments)}function pc(t,e,r){function n(a,o){var s=o.getWidth(),l=o.getHeight(),u=o.getDevicePixelRatio();this.viewGL.setViewport(0,0,s,l,u),this.width=s,this.height=l,this.altitudeScale=a.get("altitudeScale"),this.boxHeight=a.get("boxHeight")}function i(a,o){if(this.model.get("boxHeight")!=="auto"){var s=[1/0,-1/0];a.eachSeries(function(l){if(l.coordinateSystem===this){var u=l.getData(),h=l.coordDimToDataDim("alt")[0];if(h){var c=u.getDataExtent(h,!0);s[0]=Math.min(s[0],c[0]),s[1]=Math.max(s[1],c[1])}}},this),s&&isFinite(s[1]-s[0])&&(this.altitudeExtent=s)}}return{dimensions:e.prototype.dimensions,create:function(a,o){var s=[];return a.eachComponent(t,function(l){var u=l.__viewGL;u||(u=l.__viewGL=new dt).setRootNode(new T.Node);var h=new e;h.viewGL=l.__viewGL,h.resize=n,h.resize(l,o),s.push(h),l.coordinateSystem=h,h.model=l,h.update=i}),a.eachSeries(function(l){if(l.get("coordinateSystem")===t){var u=l.getReferringComponents(t).models[0];if(u||(u=a.getComponent(t)),!u)throw new Error(t+' "'+tt(l.get(t+"Index"),l.get(t+"Id"),0)+'" not found');l.coordinateSystem=u.coordinateSystem}}),r&&r(s,a,o),s}}}wn.prototype={constructor:wn,dimensions:["lng","lat","alt"],containPoint:function(){},setCameraOption:function(t){this.bearing=t.bearing,this.pitch=t.pitch,this.center=t.center,this.zoom=t.zoom,this._origin||(this._origin=this.projectOnTileWithScale(this.center,Kn)),this._initialZoom==null&&(this._initialZoom=this.zoom),this.updateTransform()},updateTransform:function(){if(this.height){var t=.5/Math.tan(Bo/2)*this.height*hn,e=Math.max(Math.min(this.pitch,this.maxPitch),0)/180*Math.PI,r=Bo/2,n=Math.PI/2+e,i=Math.sin(r)*t/Math.sin(Math.PI-n-r),a=1.1*(Math.cos(Math.PI/2-e)*i+t);this.pitch>50&&(a=1e3);var o=[];dr.perspective(o,Bo,this.width/this.height,1,a),this.viewGL.camera.projectionMatrix.setArray(o),this.viewGL.camera.decomposeProjectionMatrix(),o=dr.identity([]);var s=this.dataToPoint(this.center);dr.scale(o,o,[1,-1,1]),dr.translate(o,o,[0,0,-t]),dr.rotateX(o,o,e),dr.rotateZ(o,o,-this.bearing/180*Math.PI),dr.translate(o,o,[-s[0]*this.getScale()*hn,-s[1]*this.getScale()*hn,0]),this.viewGL.camera.viewMatrix.array=o;var l=[];dr.invert(l,o),this.viewGL.camera.worldTransform.array=l,this.viewGL.camera.decomposeWorldTransform();var u,h=Kn*this.getScale();if(this.altitudeExtent&&!isNaN(this.boxHeight)){var c=this.altitudeExtent[1]-this.altitudeExtent[0];u=this.boxHeight/c*this.getScale()/Math.pow(2,this._initialZoom-this.zoomOffset)}else u=h/(2*Math.PI*6378e3*Math.abs(Math.cos(this.center[1]*(Math.PI/180))))*this.altitudeScale*hn;this.viewGL.rootNode.scale.set(this.getScale()*hn,this.getScale()*hn,u)}},getScale:function(){return Math.pow(2,this.zoom-this.zoomOffset)},projectOnTile:function(t,e){return this.projectOnTileWithScale(t,this.getScale()*Kn,e)},projectOnTileWithScale:function(t,e,r){var n=t[0],i=t[1]*re/180,a=e*(n*re/180+re)/(2*re),o=e*(re-Math.log(Math.tan(re/4+.5*i)))/(2*re);return(r=r||[])[0]=a,r[1]=o,r},unprojectFromTile:function(t,e){return this.unprojectOnTileWithScale(t,this.getScale()*Kn,e)},unprojectOnTileWithScale:function(t,e,r){var n=t[0],i=t[1],a=n/e*(2*re)-re,o=2*(Math.atan(Math.exp(re-i/e*(2*re)))-re/4);return(r=r||[])[0]=180*a/re,r[1]=180*o/re,r},dataToPoint:function(t,e){return(e=this.projectOnTileWithScale(t,Kn,e))[0]-=this._origin[0],e[1]-=this._origin[1],e[2]=isNaN(t[2])?0:t[2],isNaN(t[2])||(e[2]=t[2],this.altitudeExtent&&(e[2]-=this.altitudeExtent[0])),e}},ai.prototype=new wn,ai.prototype.constructor=ai,ai.prototype.type="mapbox3D";const ym=pc("mapbox3D",ai,function(t){t.forEach(function(e){e.setCameraOption(e.model.getMapboxCameraOption())})});Wt(function(t){t.registerComponentModel(_m),t.registerComponentView(vm),t.registerCoordinateSystem("mapbox3D",ym),t.registerAction({type:"mapbox3DChangeCamera",event:"mapbox3dcamerachanged",update:"mapbox3D:updateCamera"},function(e,r){r.eachComponent({mainType:"mapbox3D",query:e},function(n){n.setMapboxCameraOption(e)})})});var Iu=["zoom","center","pitch","bearing"],vs=Cn.extend({type:"maptalks3D",layoutMode:"box",coordinateSystem:null,defaultOption:{zlevel:-10,urlTemplate:"http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png",attribution:'&copy; <a href="http://osm.org">OpenStreetMap</a> contributors, &copy; <a href="https://carto.com/">CARTO</a>',center:[0,0],zoom:0,pitch:0,bearing:0,light:{main:{alpha:20,beta:30}},altitudeScale:1,boxHeight:"auto"},getMaptalksCameraOption:function(){var t=this;return Iu.reduce(function(e,r){return e[r]=t.get(r),e},{})},setMaptalksCameraOption:function(t){t!=null&&Iu.forEach(function(e){t[e]!=null&&(this.option[e]=t[e])},this)},getMaptalks:function(){return this._maptalks},setMaptalks:function(t){this._maptalks=t}});ft(vs.prototype,Pn),ft(vs.prototype,On);const xm=vs;function _r(t,e,r,n){if(this.id=t,this.zr=e,this.dom=document.createElement("div"),this.dom.style.cssText="position:absolute;left:0;right:0;top:0;bottom:0;",!maptalks)throw new Error("Maptalks library must be included. See https://maptalks.org");this._maptalks=new maptalks.Map(this.dom,{center:r,zoom:n,doubleClickZoom:!1,fog:!1}),this._initEvents()}_r.prototype.setUnpainted=function(){},_r.prototype.resize=function(){this._maptalks.checkSize()},_r.prototype.getMaptalks=function(){return this._maptalks},_r.prototype.clear=function(){},_r.prototype.refresh=function(){this._maptalks.checkSize()};var Fu=["mousedown","mouseup","click","dblclick","mousemove","mousewheel","DOMMouseScroll","touchstart","touchend","touchmove","touchcancel"];_r.prototype._initEvents=function(){var t=this.dom;this._handlers=this._handlers||{contextmenu:function(e){return e.preventDefault(),!1}},Fu.forEach(function(e){this._handlers[e]=function(r){var n={};for(var i in r)n[i]=r[i];n.bubbles=!1;var a=new r.constructor(r.type,n);e==="mousewheel"||e==="DOMMouseScroll"?t.dispatchEvent(a):t.firstElementChild.dispatchEvent(a)},this.zr.dom.addEventListener(e,this._handlers[e])},this),this.zr.dom.addEventListener("contextmenu",this._handlers.contextmenu)},_r.prototype.dispose=function(){Fu.forEach(function(t){this.zr.dom.removeEventListener(t,this._handlers[t])},this),this._maptalks.remove()},T.Shader.import(fc);const bm=wi.extend({type:"maptalks3D",__ecgl__:!0,init:function(t,e){this._groundMesh=new T.Mesh({geometry:new T.PlaneGeometry,material:new T.Material({shader:new T.Shader({vertex:T.Shader.source("ecgl.displayShadow.vertex"),fragment:T.Shader.source("ecgl.displayShadow.fragment")}),depthMask:!1}),renderOrder:-100,culling:!1,castShadow:!1,$ignorePicking:!0,renderNormal:!0})},_initMaptalksLayer:function(t,e){var r=e.getZr();this._zrLayer=new _r("maptalks3D",r,t.get("center"),t.get("zoom")),r.painter.insertLayer(-1e3,this._zrLayer),this._lightRoot=new T.Node,this._sceneHelper=new wr(this._lightRoot),this._sceneHelper.initLight(this._lightRoot);var n=this._zrLayer.getMaptalks(),i=this._dispatchInteractAction.bind(this,e,n);["zoomend","zooming","zoomstart","dragrotating","pitch","pitchend","movestart","moving","moveend","resize","touchstart","touchmove","touchend","animating"].forEach(function(a){n.on(a,i)})},render:function(t,e,r){this._zrLayer||this._initMaptalksLayer(t,r);var n=this._zrLayer.getMaptalks(),i=t.get("urlTemplate"),a=n.getBaseLayer();i!==this._oldUrlTemplate&&(a?a.setOptions({urlTemplate:i,attribution:t.get("attribution")}):(a=new maptalks.TileLayer("maptalks-echarts-gl-baselayer",{urlTemplate:i,subdomains:["a","b","c"],attribution:t.get("attribution")}),n.setBaseLayer(a))),this._oldUrlTemplate=i,n.setCenter(t.get("center")),n.setZoom(t.get("zoom"),{animation:!1}),n.setPitch(t.get("pitch")),n.setBearing(t.get("bearing")),t.setMaptalks(n);var o=t.coordinateSystem;o.viewGL.scene.add(this._lightRoot),o.viewGL.add(this._groundMesh),this._updateGroundMesh(),this._sceneHelper.setScene(o.viewGL.scene),this._sceneHelper.updateLight(t),o.viewGL.setPostEffect(t.getModel("postEffect"),r),o.viewGL.setTemporalSuperSampling(t.getModel("temporalSuperSampling")),this._maptalks3DModel=t},afterRender:function(t,e,r,n){var i=n.renderer;this._sceneHelper.updateAmbientCubemap(i,t,r),this._sceneHelper.updateSkybox(i,t,r),t.coordinateSystem.viewGL.scene.traverse(function(a){a.material&&(a.material.define("fragment","NORMAL_UP_AXIS",2),a.material.define("fragment","NORMAL_FRONT_AXIS",1))})},updateCamera:function(t,e,r,n){t.coordinateSystem.setCameraOption(n),this._updateGroundMesh(),r.getZr().refresh()},_dispatchInteractAction:function(t,e,r){t.dispatchAction({type:"maptalks3DChangeCamera",pitch:e.getPitch(),zoom:Tm(e.getResolution())+1,center:e.getCenter().toArray(),bearing:e.getBearing(),maptalks3DId:this._maptalks3DModel&&this._maptalks3DModel.id})},_updateGroundMesh:function(){if(this._maptalks3DModel){var t=this._maptalks3DModel.coordinateSystem,e=t.dataToPoint(t.center);this._groundMesh.position.set(e[0],e[1],-.001);var r=new T.Plane(new T.Vector3(0,0,1),0),n=t.viewGL.camera.castRay(new T.Vector2(-1,-1)),i=t.viewGL.camera.castRay(new T.Vector2(1,1)),a=n.intersectPlane(r),o=i.intersectPlane(r),s=a.dist(o)/t.viewGL.rootNode.scale.x;this._groundMesh.scale.set(s,s,1)}},dispose:function(t,e){this._zrLayer&&this._zrLayer.dispose(),e.getZr().painter.delLayer(-1e3)}}),wm=12756274*Math.PI/(256*Math.pow(2,20));function Tm(t){return 19-Math.log(t/wm)/Math.LN2}function oi(){wn.apply(this,arguments),this.maxPitch=85,this.zoomOffset=1}oi.prototype=new wn,oi.prototype.constructor=oi,oi.prototype.type="maptalks3D";const Sm=pc("maptalks3D",oi,function(t){t.forEach(function(e){e.setCameraOption(e.model.getMaptalksCameraOption())})});Wt(function(t){t.registerComponentModel(xm),t.registerComponentView(bm),t.registerCoordinateSystem("maptalks3D",Sm),t.registerAction({type:"maptalks3DChangeCamera",event:"maptalks3dcamerachanged",update:"maptalks3D:updateCamera"},function(e,r){r.eachComponent({mainType:"maptalks3D",query:e},function(n){n.setMaptalksCameraOption(e)})})});var Mm=At.vec3,Em=Ss.isDimensionStacked;function zo(t,e,r){for(var n=t.getDataExtent(e),i=t.getDataExtent(r),a=n[1]-n[0]||n[0],o=i[1]-i[0]||i[0],s=new Uint8Array(2500),l=0;l<t.count();l++){var u=t.get(e,l),h=t.get(r,l),c=Math.floor((u-n[0])/a*49),d=50*Math.floor((h-i[0])/o*49)+c;s[d]=s[d]||1}var f=0;for(l=0;l<s.length;l++)s[l]&&f++;return f/s.length}var Bu=At.vec3,Am=Ss.isDimensionStacked;function Uo(t,e){var r=Am(t,e[2]);return{dimension:r?t.getCalculationInfo("stackResultDimension"):e[2],isStacked:r}}var Dm={getFormattedLabel:function(t,e,r,n,i){r=r||"normal";var a=t.getData(n).getItemModel(e),o=t.getDataParams(e,n);i!=null&&o.value instanceof Array&&(o.value=o.value[i]);var s,l=a.get(r==="normal"?["label","formatter"]:["emphasis","label","formatter"]);return l==null&&(l=a.get(["label","formatter"])),typeof l=="function"?(o.status=r,s=l(o)):typeof l=="string"&&(s=md(l,o)),s},normalizeToArray:function(t){return t instanceof Array?t:t==null?[]:[t]}};const Nn=Dm;function Mi(t,e,r){var n=t.getData(),i=t.getRawValue(e),a=We(i)?function(h){var c,d,f=[],m=(d=[],je((c=n).dimensions,function(g){var _=c.getDimensionInfo(g),y=_.otherDims.tooltip;y!=null&&y!==!1&&(d[y]=_.name)}),d);function p(g,_){var y=n.getDimensionInfo(_);if(y&&y.otherDims.tooltip!==!1){var x=y.type,v="- "+(y.tooltipName||y.name)+": "+(x==="ordinal"?g+"":x==="time"?r?"":gd("yyyy/MM/dd hh:mm:ss",g):el(g));v&&f.push(gn(v))}}return m.length?je(m,function(g){p(n.get(g,e),g)}):je(h,p),"<br/>"+f.join("<br/>")}(i):gn(el(i)),o=n.getName(e),s=Gt(n,e);ad(s)&&s.colorStops&&(s=(s.colorStops[0]||{}).color);var l=od(s=s||"transparent"),u=t.name;return u==="\0-"&&(u=""),u=u?gn(u)+(r?": ":"<br/>"):"",r?l+u+a:u+l+(o?gn(o)+": "+a:a)}function Va(t,e,r){r=r||t.getSource();var n=e||ih(t.get("coordinateSystem"))||["x","y","z"],i=Ti(r,{dimensionsDefine:r.dimensionsDefine||t.get("dimensions"),encodeDefine:r.encodeDefine||t.get("encode"),coordDimensions:n.map(function(s){var l=t.getReferringComponents(s+"Axis3D").models[0];return{type:l&&l.get("type")==="category"?"ordinal":"float",name:s}})});t.get("coordinateSystem")==="cartesian3D"&&i.forEach(function(s){if(n.indexOf(s.coordDim)>=0){var l=t.getReferringComponents(s.coordDim+"Axis3D").models[0];l&&l.get("type")==="category"&&(s.ordinalMeta=l.getOrdinalMeta())}});var a=Ss.enableDataStack(t,i,{byIndex:!0,stackedCoordDimension:"z"}),o=new Xe(i,t);return o.setCalculationInfo(a),o.initData(r),o}var mc=Le.extend({type:"series.bar3D",dependencies:["globe"],visualStyleAccessPathvisu:"itemStyle",getInitialData:function(t,e){return Va(this)},getFormattedLabel:function(t,e,r,n){var i=Nn.getFormattedLabel(this,t,e,r,n);return i==null&&(i=this.getData().get("z",t)),i},formatTooltip:function(t){return Mi(this,t)},defaultOption:{coordinateSystem:"cartesian3D",globeIndex:0,grid3DIndex:0,zlevel:-10,bevelSize:0,bevelSmoothness:2,onGridPlane:"xy",shading:"color",minHeight:0,itemStyle:{opacity:1},label:{show:!1,distance:2,textStyle:{fontSize:14,color:"#000",backgroundColor:"rgba(255,255,255,0.7)",padding:3,borderRadius:3}},emphasis:{label:{show:!0}},animationDurationUpdate:500}});ft(mc.prototype,Rn);const Cm=mc;var Jn,Je,Ge,ge,fr,zu,Uu,Gu,Tt=At.vec3,Lm=At.mat3,ys=st.extend(function(){return{attributes:{position:new st.Attribute("position","float",3,"POSITION"),normal:new st.Attribute("normal","float",3,"NORMAL"),color:new st.Attribute("color","float",4,"COLOR"),prevPosition:new st.Attribute("prevPosition","float",3),prevNormal:new st.Attribute("prevNormal","float",3)},dynamic:!0,enableNormal:!1,bevelSize:1,bevelSegments:0,_dataIndices:null,_vertexOffset:0,_triangleOffset:0}},{resetOffset:function(){this._vertexOffset=0,this._triangleOffset=0},setBarCount:function(t){var e=this.enableNormal,r=this.getBarVertexCount()*t,n=this.getBarTriangleCount()*t;this.vertexCount!==r&&(this.attributes.position.init(r),e?this.attributes.normal.init(r):this.attributes.normal.value=null,this.attributes.color.init(r)),this.triangleCount!==n&&(this.indices=r>65535?new Uint32Array(3*n):new Uint16Array(3*n),this._dataIndices=new Uint32Array(r))},getBarVertexCount:function(){var t=this.bevelSize>0?this.bevelSegments:0;return t>0?this._getBevelBarVertexCount(t):this.enableNormal?24:8},getBarTriangleCount:function(){var t=this.bevelSize>0?this.bevelSegments:0;return t>0?this._getBevelBarTriangleCount(t):12},_getBevelBarVertexCount:function(t){return 4*(t+1)*(t+1)*2},_getBevelBarTriangleCount:function(t){return(4*t+3+1)*(2*t+1)*2+4},setColor:function(t,e){for(var r=this.getBarVertexCount(),n=r*(t+1),i=r*t;i<n;i++)this.attributes.color.set(i,e);this.dirtyAttribute("color")},getDataIndexOfVertex:function(t){return this._dataIndices?this._dataIndices[t]:null},addBar:function(){for(var t=Tt.create,e=Tt.scaleAndAdd,r=t(),n=t(),i=t(),a=t(),o=t(),s=t(),l=t(),u=[],h=[],c=0;c<8;c++)u[c]=t();var d=[[0,1,5,4],[2,3,7,6],[4,5,6,7],[3,2,1,0],[0,4,7,3],[1,2,6,5]],f=[0,1,2,0,2,3],m=[];for(c=0;c<d.length;c++)for(var p=d[c],g=0;g<2;g++){for(var _=[],y=0;y<3;y++)_.push(p[f[3*g+y]]);m.push(_)}return function(x,v,w,b,S,M){var D=this._vertexOffset;if(this.bevelSize>0&&this.bevelSegments>0)this._addBevelBar(x,v,w,b,this.bevelSize,this.bevelSegments,S);else{Tt.copy(i,v),Tt.normalize(i,i),Tt.cross(a,w,i),Tt.normalize(a,a),Tt.cross(n,i,a),Tt.normalize(a,a),Tt.negate(o,n),Tt.negate(s,i),Tt.negate(l,a),e(u[0],x,n,b[0]/2),e(u[0],u[0],a,b[2]/2),e(u[1],x,n,b[0]/2),e(u[1],u[1],l,b[2]/2),e(u[2],x,o,b[0]/2),e(u[2],u[2],l,b[2]/2),e(u[3],x,o,b[0]/2),e(u[3],u[3],a,b[2]/2),e(r,x,i,b[1]),e(u[4],r,n,b[0]/2),e(u[4],u[4],a,b[2]/2),e(u[5],r,n,b[0]/2),e(u[5],u[5],l,b[2]/2),e(u[6],r,o,b[0]/2),e(u[6],u[6],l,b[2]/2),e(u[7],r,o,b[0]/2),e(u[7],u[7],a,b[2]/2);var L=this.attributes;if(this.enableNormal){h[0]=n,h[1]=o,h[2]=i,h[3]=s,h[4]=a,h[5]=l;for(var P=this._vertexOffset,O=0;O<d.length;O++){for(var R=3*this._triangleOffset,A=0;A<6;A++)this.indices[R++]=P+f[A];P+=4,this._triangleOffset+=2}for(O=0;O<d.length;O++){var z=h[O];for(A=0;A<4;A++){var F=d[O][A];L.position.set(this._vertexOffset,u[F]),L.normal.set(this._vertexOffset,z),L.color.set(this._vertexOffset++,S)}}}else{for(O=0;O<m.length;O++){for(R=3*this._triangleOffset,A=0;A<3;A++)this.indices[R+A]=m[O][A]+this._vertexOffset;this._triangleOffset++}for(O=0;O<u.length;O++)L.position.set(this._vertexOffset,u[O]),L.color.set(this._vertexOffset++,S)}}var X=this._vertexOffset;for(O=D;O<X;O++)this._dataIndices[O]=M}}(),_addBevelBar:(Jn=Tt.create(),Je=Tt.create(),Ge=Tt.create(),ge=Lm.create(),fr=[],zu=[1,-1,-1,1],Uu=[1,1,-1,-1],Gu=[2,0],function(t,e,r,n,i,a,o){Tt.copy(Je,e),Tt.normalize(Je,Je),Tt.cross(Ge,r,Je),Tt.normalize(Ge,Ge),Tt.cross(Jn,Je,Ge),Tt.normalize(Ge,Ge),ge[0]=Jn[0],ge[1]=Jn[1],ge[2]=Jn[2],ge[3]=Je[0],ge[4]=Je[1],ge[5]=Je[2],ge[6]=Ge[0],ge[7]=Ge[1],ge[8]=Ge[2],i=Math.min(n[0],n[2])/2*i;for(var s=0;s<3;s++)fr[s]=Math.max(n[s]-2*i,0);var l=(n[0]-fr[0])/2,u=(n[1]-fr[1])/2,h=(n[2]-fr[2])/2,c=[],d=[],f=this._vertexOffset,m=[];for(s=0;s<2;s++){m[s]=m[s]=[];for(var p=0;p<=a;p++)for(var g=0;g<4;g++){(p===0&&s===0||s===1&&p===a)&&m[s].push(f);for(var _=0;_<=a;_++){var y=_/a*Math.PI/2+Math.PI/2*g,x=p/a*Math.PI/2+Math.PI/2*s;d[0]=l*Math.cos(y)*Math.sin(x),d[1]=u*Math.cos(x),d[2]=h*Math.sin(y)*Math.sin(x),c[0]=d[0]+zu[g]*fr[0]/2,c[1]=d[1]+u+Gu[s]*fr[1]/2,c[2]=d[2]+Uu[g]*fr[2]/2,Math.abs(l-u)<1e-6&&Math.abs(u-h)<1e-6||(d[0]/=l*l,d[1]/=u*u,d[2]/=h*h),Tt.normalize(d,d),Tt.transformMat3(c,c,ge),Tt.transformMat3(d,d,ge),Tt.add(c,c,t),this.attributes.position.set(f,c),this.enableNormal&&this.attributes.normal.set(f,d),this.attributes.color.set(f,o),f++}}}var v=4*a+3,w=2*a+1,b=v+1;for(g=0;g<w;g++)for(s=0;s<=v;s++){var S=g*b+s+this._vertexOffset,M=g*b+(s+1)%b+this._vertexOffset,D=(g+1)*b+(s+1)%b+this._vertexOffset,L=(g+1)*b+s+this._vertexOffset;this.setTriangleIndices(this._triangleOffset++,[D,S,M]),this.setTriangleIndices(this._triangleOffset++,[D,L,S])}this.setTriangleIndices(this._triangleOffset++,[m[0][0],m[0][2],m[0][1]]),this.setTriangleIndices(this._triangleOffset++,[m[0][0],m[0][3],m[0][2]]),this.setTriangleIndices(this._triangleOffset++,[m[1][0],m[1][1],m[1][2]]),this.setTriangleIndices(this._triangleOffset++,[m[1][0],m[1][2],m[1][3]]),this._vertexOffset=f})});xr(ys.prototype,Si),xr(ys.prototype,qs);const Pm=ys;var Om=At.vec3;const Rm=Pe.extend({type:"bar3D",__ecgl__:!0,init:function(t,e){this.groupGL=new T.Node,this._api=e,this._labelsBuilder=new ir(256,256,e);var r=this;this._labelsBuilder.getLabelPosition=function(n,i,a){if(r._data){var o=r._data.getItemLayout(n),s=o[0],l=o[1],u=o[2][1];return Om.scaleAndAdd([],s,l,a+u)}return[0,0]},this._labelsBuilder.getMesh().renderOrder=100},render:function(t,e,r){var n=this._prevBarMesh;this._prevBarMesh=this._barMesh,this._barMesh=n,this._barMesh||(this._barMesh=new T.Mesh({geometry:new Pm,shadowDepthMaterial:new T.Material({shader:new T.Shader(T.Shader.source("ecgl.sm.depth.vertex"),T.Shader.source("ecgl.sm.depth.fragment"))}),culling:t.coordinateSystem.type==="cartesian3D",renderOrder:10,renderNormal:!0})),this.groupGL.remove(this._prevBarMesh),this.groupGL.add(this._barMesh),this.groupGL.add(this._labelsBuilder.getMesh());var i=t.coordinateSystem;if(this._doRender(t,r),i&&i.viewGL){i.viewGL.add(this.groupGL);var a=i.viewGL.isLinearSpace()?"define":"undefine";this._barMesh.material[a]("fragment","SRGB_DECODE")}this._data=t.getData(),this._labelsBuilder.updateData(this._data),this._labelsBuilder.updateLabels(),this._updateAnimation(t)},_updateAnimation:function(t){T.updateVertexAnimation([["prevPosition","position"],["prevNormal","normal"]],this._prevBarMesh,this._barMesh,t)},_doRender:function(t,e){var r=t.getData(),n=t.get("shading"),i=n!=="color",a=this,o=this._barMesh,s="ecgl."+n;o.material&&o.material.shader.name===s||(o.material=T.createMaterial(s,["VERTEX_COLOR"])),T.setMaterialFromModel(n,o.material,t,e),o.geometry.enableNormal=i,o.geometry.resetOffset();var l=t.get("bevelSize"),u=t.get("bevelSmoothness");o.geometry.bevelSegments=u,o.geometry.bevelSize=l;var h=[],c=new Float32Array(4*r.count()),d=0,f=0,m=!1;r.each(function(y){if(r.hasValue(y)){var x=Gt(r,y),v=Ut(r,y);v==null&&(v=1),T.parseColor(x,h),h[3]*=v,c[d++]=h[0],c[d++]=h[1],c[d++]=h[2],c[d++]=h[3],h[3]>0&&(f++,h[3]<.99&&(m=!0))}}),o.geometry.setBarCount(f);var p=r.getLayout("orient"),g=this._barIndexOfData=new Int32Array(r.count());f=0,r.each(function(y){if(r.hasValue(y)){var x=r.getItemLayout(y),v=x[0],w=x[1],b=x[2],S=4*y;h[0]=c[S++],h[1]=c[S++],h[2]=c[S++],h[3]=c[S++],h[3]>0&&(a._barMesh.geometry.addBar(v,w,p,b,h,y),g[y]=f++)}else g[y]=-1}),o.geometry.dirty(),o.geometry.updateBoundingBox();var _=o.material;_.transparent=m,_.depthMask=!m,o.geometry.sortTriangles=m,this._initHandler(t,e)},_initHandler:function(t,e){var r=t.getData(),n=this._barMesh,i=t.coordinateSystem.type==="cartesian3D";n.seriesIndex=t.seriesIndex;var a=-1;n.off("mousemove"),n.off("mouseout"),n.on("mousemove",function(o){var s=n.geometry.getDataIndexOfVertex(o.triangle[0]);s!==a&&(this._downplay(a),this._highlight(s),this._labelsBuilder.updateLabels([s]),i&&e.dispatchAction({type:"grid3DShowAxisPointer",value:[r.get("x",s),r.get("y",s),r.get("z",s,!0)]})),a=s,n.dataIndex=s},this),n.on("mouseout",function(o){this._downplay(a),this._labelsBuilder.updateLabels(),a=-1,n.dataIndex=-1,i&&e.dispatchAction({type:"grid3DHideAxisPointer"})},this)},_highlight:function(t){var e=this._data;if(e){var r=this._barIndexOfData[t];if(!(r<0)){var n=e.getItemModel(t).getModel("emphasis.itemStyle"),i=n.get("color"),a=n.get("opacity");if(i==null){var o=Gt(e,t);i=Ts(o,-.4)}a==null&&(a=Ut(e,t));var s=T.parseColor(i);s[3]*=a,this._barMesh.geometry.setColor(r,s),this._api.getZr().refresh()}}},_downplay:function(t){var e=this._data;if(e){var r=this._barIndexOfData[t];if(!(r<0)){var n=Gt(e,t),i=Ut(e,t),a=T.parseColor(n);a[3]*=i,this._barMesh.geometry.setColor(r,a),this._api.getZr().refresh()}}},highlight:function(t,e,r,n){this._toggleStatus("highlight",t,e,r,n)},downplay:function(t,e,r,n){this._toggleStatus("downplay",t,e,r,n)},_toggleStatus:function(t,e,r,n,i){var a=e.getData(),o=Rh(a,i),s=this;o!=null?je(Nn.normalizeToArray(o),function(l){t==="highlight"?this._highlight(l):this._downplay(l)},this):a.each(function(l){t==="highlight"?s._highlight(l):s._downplay(l)})},remove:function(){this.groupGL.removeAll()},dispose:function(){this._labelsBuilder.dispose(),this.groupGL.removeAll()}});Wt(function(t){t.registerChartView(Rm),t.registerSeriesModel(Cm),t.registerLayout(function(e,r){e.eachSeriesByType("bar3D",function(n){var i=n.coordinateSystem,a=i&&i.type;a==="globe"?function(o,s){var l=o.getData(),u=o.get("minHeight")||0,h=o.get("barSize"),c=["lng","lat","alt"].map(function(p){return o.coordDimToDataDim(p)[0]});if(h==null){var d=s.radius*Math.PI,f=zo(l,c[0],c[1]);h=[d/Math.sqrt(l.count()/f),d/Math.sqrt(l.count()/f)]}else We(h)||(h=[h,h]);var m=Uo(l,c);l.each(c,function(p,g,_,y){var x=l.get(m.dimension,y),v=m.isStacked?x-_:s.altitudeAxis.scale.getExtent()[0],w=Math.max(s.altitudeAxis.dataToCoord(_),u),b=s.dataToPoint([p,g,v]),S=s.dataToPoint([p,g,x]),M=Bu.sub([],S,b);Bu.normalize(M,M);var D=[h[0],w,h[1]];l.setItemLayout(y,[b,M,D])}),l.setLayout("orient",B.UP.array)}(n,i):a==="cartesian3D"?function(o,s){var l=o.getData(),u=o.get("barSize");if(u==null){var h,c,d=s.size,f=s.getAxis("x"),m=s.getAxis("y");h=f.type==="category"?.7*f.getBandWidth():.6*Math.round(d[0]/Math.sqrt(l.count())),c=m.type==="category"?.7*m.getBandWidth():.6*Math.round(d[1]/Math.sqrt(l.count())),u=[h,c]}else We(u)||(u=[u,u]);var p,g,_,y=s.getAxis("z").scale.getExtent(),x=(g=(p=y)[0],_=p[1],!(g>0&&_>0||g<0&&_<0)),v=["x","y","z"].map(function(S){return o.coordDimToDataDim(S)[0]}),w=Em(l,v[2]),b=w?l.getCalculationInfo("stackResultDimension"):v[2];l.each(v,function(S,M,D,L){var P=l.get(b,L),O=w?P-D:x?0:y[0],R=s.dataToPoint([S,M,O]),A=s.dataToPoint([S,M,P]),z=Mm.dist(R,A),F=[0,A[1]<R[1]?-1:1,0];Math.abs(z)===0&&(z=.1);var X=[u[0],z,u[1]];l.setItemLayout(L,[R,F,X])}),l.setLayout("orient",[1,0,0])}(n,i):a==="geo3D"?function(o,s){var l=o.getData(),u=o.get("barSize"),h=o.get("minHeight")||0,c=["lng","lat","alt"].map(function(g){return o.coordDimToDataDim(g)[0]});if(u==null){var d=Math.min(s.size[0],s.size[2]),f=zo(l,c[0],c[1]);u=[d/Math.sqrt(l.count()/f),d/Math.sqrt(l.count()/f)]}else We(u)||(u=[u,u]);var m=[0,1,0],p=Uo(l,c);l.each(c,function(g,_,y,x){var v=l.get(p.dimension,x),w=p.isStacked?v-y:s.altitudeAxis.scale.getExtent()[0],b=Math.max(s.altitudeAxis.dataToCoord(y),h),S=s.dataToPoint([g,_,w]),M=[u[0],b,u[1]];l.setItemLayout(x,[S,m,M])}),l.setLayout("orient",[1,0,0])}(n,i):a!=="mapbox3D"&&a!=="maptalks3D"||function(o,s){var l=o.getData(),u=o.coordDimToDataDim("lng")[0],h=o.coordDimToDataDim("lat")[0],c=o.coordDimToDataDim("alt")[0],d=o.get("barSize"),f=o.get("minHeight")||0;if(d==null){var m=l.getDataExtent(u),p=l.getDataExtent(h),g=s.dataToPoint([m[0],p[0]]),_=s.dataToPoint([m[1],p[1]]),y=Math.min(Math.abs(g[0]-_[0]),Math.abs(g[1]-_[1]))||1,x=zo(l,u,h);d=[y/Math.sqrt(l.count()/x),y/Math.sqrt(l.count()/x)]}else We(d)||(d=[d,d]),d[0]/=s.getScale()/16,d[1]/=s.getScale()/16;var v=[0,0,1],w=[u,h,c],b=Uo(l,w);l.each(w,function(S,M,D,L){var P=l.get(b.dimension,L),O=b.isStacked?P-D:0,R=s.dataToPoint([S,M,O]),A=s.dataToPoint([S,M,P]),z=Math.max(A[2]-R[2],f),F=[d[0],z,d[1]];l.setItemLayout(L,[R,v,F])}),l.setLayout("orient",[1,0,0])}(n,i)})}),t.registerProcessor(function(e,r){e.eachSeriesByType("bar3d",function(n){var i=n.getData();i.filterSelf(function(a){return i.hasValue(a)})})})});const Nm=Le.extend({type:"series.line3D",dependencies:["grid3D"],visualStyleAccessPath:"lineStyle",visualDrawType:"stroke",getInitialData:function(t,e){return Va(this)},formatTooltip:function(t){return Mi(this,t)},defaultOption:{coordinateSystem:"cartesian3D",zlevel:-10,grid3DIndex:0,lineStyle:{width:2},animationDurationUpdate:500}});var Im=At.vec3;T.Shader.import(Ha);const Fm=Pe.extend({type:"line3D",__ecgl__:!0,init:function(t,e){this.groupGL=new T.Node,this._api=e},render:function(t,e,r){var n=this._prevLine3DMesh;this._prevLine3DMesh=this._line3DMesh,this._line3DMesh=n,this._line3DMesh||(this._line3DMesh=new T.Mesh({geometry:new Yr({useNativeLine:!1,sortTriangles:!0}),material:new T.Material({shader:T.createShader("ecgl.meshLines3D")}),renderOrder:10}),this._line3DMesh.geometry.pick=this._pick.bind(this)),this.groupGL.remove(this._prevLine3DMesh),this.groupGL.add(this._line3DMesh);var i=t.coordinateSystem;if(i&&i.viewGL){i.viewGL.add(this.groupGL);var a=i.viewGL.isLinearSpace()?"define":"undefine";this._line3DMesh.material[a]("fragment","SRGB_DECODE")}this._doRender(t,r),this._data=t.getData(),this._camera=i.viewGL.camera,this.updateCamera(),this._updateAnimation(t)},updateCamera:function(){this._updateNDCPosition()},_doRender:function(t,e){var r=t.getData(),n=this._line3DMesh;n.geometry.resetOffset();var i=r.getLayout("points"),a=[],o=new Float32Array(i.length/3*4),s=0,l=!1;r.each(function(c){var d=Gt(r,c),f=Ut(r,c);f==null&&(f=1),T.parseColor(d,a),a[3]*=f,o[s++]=a[0],o[s++]=a[1],o[s++]=a[2],o[s++]=a[3],a[3]<.99&&(l=!0)}),n.geometry.setVertexCount(n.geometry.getPolylineVertexCount(i)),n.geometry.setTriangleCount(n.geometry.getPolylineTriangleCount(i)),n.geometry.addPolyline(i,o,tt(t.get("lineStyle.width"),1)),n.geometry.dirty(),n.geometry.updateBoundingBox();var u=n.material;u.transparent=l,u.depthMask=!l;var h=t.getModel("debug.wireframe");h.get("show")?(n.geometry.createAttribute("barycentric","float",3),n.geometry.generateBarycentric(),n.material.set("both","WIREFRAME_TRIANGLE"),n.material.set("wireframeLineColor",T.parseColor(h.get("lineStyle.color")||"rgba(0,0,0,0.5)")),n.material.set("wireframeLineWidth",tt(h.get("lineStyle.width"),1))):n.material.set("both","WIREFRAME_TRIANGLE"),this._points=i,this._initHandler(t,e)},_updateAnimation:function(t){T.updateVertexAnimation([["prevPosition","position"],["prevPositionPrev","positionPrev"],["prevPositionNext","positionNext"]],this._prevLine3DMesh,this._line3DMesh,t)},_initHandler:function(t,e){var r=t.getData(),n=t.coordinateSystem,i=this._line3DMesh,a=-1;i.seriesIndex=t.seriesIndex,i.off("mousemove"),i.off("mouseout"),i.on("mousemove",function(o){var s=n.pointToData(o.point.array),l=r.indicesOfNearest("x",s[0])[0];l!==a&&(e.dispatchAction({type:"grid3DShowAxisPointer",value:[r.get("x",l),r.get("y",l),r.get("z",l)]}),i.dataIndex=l),a=l},this),i.on("mouseout",function(o){a=-1,i.dataIndex=-1,e.dispatchAction({type:"grid3DHideAxisPointer"})},this)},_updateNDCPosition:function(){var t=new k,e=this._camera;k.multiply(t,e.projectionMatrix,e.viewMatrix);var r=this._positionNDC,n=this._points,i=n.length/3;r&&r.length/2===i||(r=this._positionNDC=new Float32Array(2*i));for(var a=[],o=0;o<i;o++){var s=3*o,l=2*o;a[0]=n[s],a[1]=n[s+1],a[2]=n[s+2],a[3]=1,Im.transformMat4(a,a,t.array),r[l]=a[0]/a[3],r[l+1]=a[1]/a[3]}},_pick:function(t,e,r,n,i,a){var o=this._positionNDC,s=this._data.hostModel.get("lineStyle.width"),l=-1,u=.5*r.viewport.width,h=.5*r.viewport.height;t=(t+1)*u,e=(e+1)*h;for(var c=1;c<o.length/2;c++){var d=(o[2*(c-1)]+1)*u,f=(o[2*(c-1)+1]+1)*h,m=(o[2*c]+1)*u,p=(o[2*c+1]+1)*h;kc(d,f,m,p,s,t,e)&&(l=(d-t)*(d-t)+(f-e)*(f-e)<(m-t)*(m-t)+(p-e)*(p-e)?c-1:c)}if(l>=0){var g=3*l,_=new B(this._points[g],this._points[g+1],this._points[g+2]);a.push({dataIndex:l,point:_,pointWorld:_.clone(),target:this._line3DMesh,distance:this._camera.getWorldPosition().dist(_)})}},remove:function(){this.groupGL.removeAll()},dispose:function(){this.groupGL.removeAll()}});Wt(function(t){t.registerChartView(Fm),t.registerSeriesModel(Nm),t.registerLayout(function(e,r){e.eachSeriesByType("line3D",function(n){var i=n.getData(),a=n.coordinateSystem;if(a){if(a.type!=="cartesian3D")return;var o=new Float32Array(3*i.count()),s=[],l=[],u=a.dimensions.map(function(h){return n.coordDimToDataDim(h)[0]});a&&i.each(u,function(h,c,d,f){s[0]=h,s[1]=c,s[2]=d,a.dataToPoint(s,l),o[3*f]=l[0],o[3*f+1]=l[1],o[3*f+2]=l[2]}),i.setLayout("points",o)}})})});const Bm=Le.extend({type:"series.scatter3D",dependencies:["globe","grid3D","geo3D"],visualStyleAccessPath:"itemStyle",hasSymbolVisual:!0,getInitialData:function(t,e){return Va(this)},getFormattedLabel:function(t,e,r,n){var i=Nn.getFormattedLabel(this,t,e,r,n);if(i==null){var a=this.getData(),o=a.dimensions[a.dimensions.length-1];i=a.get(o,t)}return i},formatTooltip:function(t){return Mi(this,t)},defaultOption:{coordinateSystem:"cartesian3D",zlevel:-10,progressive:1e5,progressiveThreshold:1e5,grid3DIndex:0,globeIndex:0,symbol:"circle",symbolSize:10,blendMode:"source-over",label:{show:!1,position:"right",distance:5,textStyle:{fontSize:14,color:"#000",backgroundColor:"rgba(255,255,255,0.7)",padding:3,borderRadius:3}},itemStyle:{opacity:.8},emphasis:{label:{show:!0}},animationDurationUpdate:500}});function Go(t,e,r){(e=e||document.createElement("canvas")).width=t,e.height=t;var n=e.getContext("2d");return r&&r(n),e}var xs={getMarginByStyle:function(t){var e=t.minMargin||0,r=0;t.stroke&&t.stroke!=="none"&&(r=t.lineWidth==null?1:t.lineWidth);var n=t.shadowBlur||0,i=t.shadowOffsetX||0,a=t.shadowOffsetY||0,o={};return o.left=Math.max(r/2,-i+n,e),o.right=Math.max(r/2,i+n,e),o.top=Math.max(r/2,-a+n,e),o.bottom=Math.max(r/2,a+n,e),o},createSymbolSprite:function(t,e,r,n){var i=function(o,s,l){We(s)||(s=[s,s]);var u=xs.getMarginByStyle(l,void 0),h=s[0]+u.left+u.right,c=s[1]+u.top+u.bottom,d=_d(o,0,0,s[0],s[1]),f=Math.max(h,c);d.x=u.left,d.y=u.top,h>c?d.y+=(f-c)/2:d.x+=(f-h)/2;var m=d.getBoundingRect();return d.x-=m.x,d.y-=m.y,d.setStyle(l),d.update(),d.__size=f,d}(t,e,r),a=xs.getMarginByStyle(r);return{image:Go(i.__size,n,function(o){eh(o,i)}),margin:a}},createSDFFromCanvas:function(t,e,r,n){return Go(e,n,function(i){var a=t.getContext("2d").getImageData(0,0,t.width,t.height);i.putImageData(function(o,s,l){var u=s.width,h=s.height,c=o.canvas.width,d=o.canvas.height,f=u/c,m=h/d;function p(b){return b<128?1:-1}function g(b,S){var M=1/0;b=Math.floor(b*f);for(var D=(S=Math.floor(S*m))*u+b,L=p(s.data[4*D]),P=Math.max(S-l,0);P<Math.min(S+l,h);P++)for(var O=Math.max(b-l,0);O<Math.min(b+l,u);O++){D=P*u+O;var R=O-b,A=P-S;if(L!==p(s.data[4*D])){var z=R*R+A*A;z<M&&(M=z)}}return L*Math.sqrt(M)}for(var _=o.createImageData(c,d),y=0;y<d;y++)for(var x=0;x<c;x++){var v=g(x,y)/l*.5+.5,w=4*(y*c+x);_.data[w++]=255*(1-v),_.data[w++]=255*(1-v),_.data[w++]=255*(1-v),_.data[w++]=255}return _}(i,a,r),0,0)})},createSimpleSprite:function(t,e){return Go(t,e,function(r){var n=t/2;r.beginPath(),r.arc(n,n,60,0,2*Math.PI,!1),r.closePath();var i=r.createRadialGradient(n,n,0,n,n,n);i.addColorStop(0,"rgba(255, 255, 255, 1)"),i.addColorStop(.5,"rgba(255, 255, 255, 0.5)"),i.addColorStop(1,"rgba(255, 255, 255, 0)"),r.fillStyle=i,r.fill()})}};const ku=xs;var Hu=At.vec3;const zm={needsSortVertices:function(){return this.sortVertices},needsSortVerticesProgressively:function(){return this.needsSortVertices()&&this.vertexCount>=2e4},doSortVertices:function(t,e){var r=this.indices,n=Hu.create();if(!r){r=this.indices=this.vertexCount>65535?new Uint32Array(this.vertexCount):new Uint16Array(this.vertexCount);for(var i=0;i<r.length;i++)r[i]=i}if(e===0){var a,o=this.attributes.position,s=(t=t.array,0);for(this._zList&&this._zList.length===this.vertexCount||(this._zList=new Float32Array(this.vertexCount)),i=0;i<this.vertexCount;i++){o.get(i,n);var l=Hu.sqrDist(n,t);isNaN(l)&&(l=1e7,s++),i===0?(a=l,l=0):l-=a,this._zList[i]=l}this._noneCount=s}if(this.vertexCount<2e4)e===0&&this._simpleSort(this._noneCount/this.vertexCount>.05);else for(i=0;i<3;i++)this._progressiveQuickSort(3*e+i);this.dirtyIndices()},_simpleSort:function(t){var e=this._zList,r=this.indices;function n(i,a){return e[a]-e[i]}t?Array.prototype.sort.call(r,n):An.sort(r,n,0,r.length-1)},_progressiveQuickSort:function(t){var e=this._zList,r=this.indices;this._quickSort=this._quickSort||new An,this._quickSort.step(r,function(n,i){return e[i]-e[n]},t)}};var ko=At.vec4;T.Shader.import(`@export ecgl.sdfSprite.vertex

uniform mat4 worldViewProjection : WORLDVIEWPROJECTION;
uniform float elapsedTime : 0;

attribute vec3 position : POSITION;

#ifdef VERTEX_SIZE
attribute float size;
#else
uniform float u_Size;
#endif

#ifdef VERTEX_COLOR
attribute vec4 a_FillColor: COLOR;
varying vec4 v_Color;
#endif

#ifdef VERTEX_ANIMATION
attribute vec3 prevPosition;
attribute float prevSize;
uniform float percent : 1.0;
#endif


#ifdef POSITIONTEXTURE_ENABLED
uniform sampler2D positionTexture;
#endif

varying float v_Size;

void main()
{

#ifdef POSITIONTEXTURE_ENABLED
 gl_Position = worldViewProjection * vec4(texture2D(positionTexture, position.xy).xy, -10.0, 1.0);
#else

 #ifdef VERTEX_ANIMATION
 vec3 pos = mix(prevPosition, position, percent);
 #else
 vec3 pos = position;
 #endif
 gl_Position = worldViewProjection * vec4(pos, 1.0);
#endif

#ifdef VERTEX_SIZE
#ifdef VERTEX_ANIMATION
 v_Size = mix(prevSize, size, percent);
#else
 v_Size = size;
#endif
#else
 v_Size = u_Size;
#endif

#ifdef VERTEX_COLOR
 v_Color = a_FillColor;
 #endif

 gl_PointSize = v_Size;
}

@end

@export ecgl.sdfSprite.fragment

uniform vec4 color: [1, 1, 1, 1];
uniform vec4 strokeColor: [1, 1, 1, 1];
uniform float smoothing: 0.07;

uniform float lineWidth: 0.0;

#ifdef VERTEX_COLOR
varying vec4 v_Color;
#endif

varying float v_Size;

uniform sampler2D sprite;

@import clay.util.srgb

void main()
{
 gl_FragColor = color;

 vec4 _strokeColor = strokeColor;

#ifdef VERTEX_COLOR
 gl_FragColor *= v_Color;
 #endif

#ifdef SPRITE_ENABLED
 float d = texture2D(sprite, gl_PointCoord).r;
 gl_FragColor.a *= smoothstep(0.5 - smoothing, 0.5 + smoothing, d);

 if (lineWidth > 0.0) {
 float sLineWidth = lineWidth / 2.0;

 float outlineMaxValue0 = 0.5 + sLineWidth;
 float outlineMaxValue1 = 0.5 + sLineWidth + smoothing;
 float outlineMinValue0 = 0.5 - sLineWidth - smoothing;
 float outlineMinValue1 = 0.5 - sLineWidth;

 if (d <= outlineMaxValue1 && d >= outlineMinValue0) {
 float a = _strokeColor.a;
 if (d <= outlineMinValue1) {
 a = a * smoothstep(outlineMinValue0, outlineMinValue1, d);
 }
 else {
 a = a * smoothstep(outlineMaxValue1, outlineMaxValue0, d);
 }
 gl_FragColor.rgb = mix(gl_FragColor.rgb * gl_FragColor.a, _strokeColor.rgb, a);
 gl_FragColor.a = gl_FragColor.a * (1.0 - a) + a;
 }
 }
#endif

#ifdef SRGB_DECODE
 gl_FragColor = sRGBToLinear(gl_FragColor);
#endif
}
@end`);var Um=T.Mesh.extend(function(){var t=new T.Geometry({dynamic:!0,attributes:{color:new T.Geometry.Attribute("color","float",4,"COLOR"),position:new T.Geometry.Attribute("position","float",3,"POSITION"),size:new T.Geometry.Attribute("size","float",1),prevPosition:new T.Geometry.Attribute("prevPosition","float",3),prevSize:new T.Geometry.Attribute("prevSize","float",1)}});Object.assign(t,zm);var e=new T.Material({shader:T.createShader("ecgl.sdfSprite"),transparent:!0,depthMask:!1});e.enableTexture("sprite"),e.define("both","VERTEX_COLOR"),e.define("both","VERTEX_SIZE");var r=new T.Texture2D({image:document.createElement("canvas"),flipY:!1});return e.set("sprite",r),t.pick=this._pick.bind(this),{geometry:t,material:e,mode:T.Mesh.POINTS,sizeScale:1}},{_pick:function(t,e,r,n,i,a){var o=this._positionNDC;if(o)for(var s=r.viewport,l=2/s.width,u=2/s.height,h=this.geometry.vertexCount-1;h>=0;h--){var c,d=o[2*(c=this.geometry.indices?this.geometry.indices[h]:h)],f=o[2*c+1],m=this.geometry.attributes.size.get(c)/this.sizeScale/2;if(t>d-m*l&&t<d+m*l&&e>f-m*u&&e<f+m*u){var p=new T.Vector3,g=new T.Vector3;this.geometry.attributes.position.get(c,p.array),T.Vector3.transformMat4(g,p,this.worldTransform),a.push({vertexIndex:c,point:p,pointWorld:g,target:this,distance:g.distance(n.getWorldPosition())})}}},updateNDCPosition:function(t,e,r){var n=this._positionNDC,i=this.geometry;n&&n.length/2===i.vertexCount||(n=this._positionNDC=new Float32Array(2*i.vertexCount));for(var a=ko.create(),o=0;o<i.vertexCount;o++)i.attributes.position.get(o,a),a[3]=1,ko.transformMat4(a,a,t.array),ko.scale(a,a,1/a[3]),n[2*o]=a[0],n[2*o+1]=a[1]}});const Gm=Um;function Zr(t,e){this.rootNode=new T.Node,this.is2D=t,this._labelsBuilder=new ir(256,256,e),this._labelsBuilder.getMesh().renderOrder=100,this.rootNode.add(this._labelsBuilder.getMesh()),this._api=e,this._spriteImageCanvas=document.createElement("canvas"),this._startDataIndex=0,this._endDataIndex=0,this._sizeScale=1}Zr.prototype={constructor:Zr,highlightOnMouseover:!0,update:function(t,e,r,n,i){var a=this._prevMesh;this._prevMesh=this._mesh,this._mesh=a;var o=t.getData();if(n==null&&(n=0),i==null&&(i=o.count()),this._startDataIndex=n,this._endDataIndex=i-1,!this._mesh){var s=this._prevMesh&&this._prevMesh.material;this._mesh=new Gm({renderOrder:10,frustumCulling:!1}),s&&(this._mesh.material=s)}s=this._mesh.material;var l=this._mesh.geometry,u=l.attributes;this.rootNode.remove(this._prevMesh),this.rootNode.add(this._mesh),this._setPositionTextureToMesh(this._mesh,this._positionTexture);var h=this._getSymbolInfo(t,n,i),c=r.getDevicePixelRatio(),d=t.getModel("itemStyle").getItemStyle(),f=t.get("large"),m=1;h.maxSize>2?(m=this._updateSymbolSprite(t,d,h,c),s.enableTexture("sprite")):s.disableTexture("sprite"),u.position.init(i-n);var p=[];if(f){s.undefine("VERTEX_SIZE"),s.undefine("VERTEX_COLOR");var g=function(D){const L=D.getVisual("style");if(L)return L[D.getVisual("drawType")]}(o),_=o.getVisual("style").opacity;T.parseColor(g,p),p[3]*=_,s.set({color:p,u_Size:h.maxSize*this._sizeScale})}else s.set({color:[1,1,1,1]}),s.define("VERTEX_SIZE"),s.define("VERTEX_COLOR"),u.size.init(i-n),u.color.init(i-n),this._originalOpacity=new Float32Array(i-n);for(var y=o.getLayout("points"),x=u.position.value,v=0;v<i-n;v++){var w=3*v,b=2*v;if(this.is2D?(x[w]=y[b],x[w+1]=y[b+1],x[w+2]=-10):(x[w]=y[w],x[w+1]=y[w+1],x[w+2]=y[w+2]),!f){g=Gt(o,v),_=Ut(o,v),T.parseColor(g,p),p[3]*=_,u.color.set(v,p),p[3];var S=o.getItemVisual(v,"symbolSize");S=S instanceof Array?Math.max(S[0],S[1]):S,isNaN(S)&&(S=0),u.size.value[v]=S*m*this._sizeScale,this._originalOpacity[v]=p[3]}}this._mesh.sizeScale=m,l.updateBoundingBox(),l.dirty(),this._updateMaterial(t,d);var M=t.coordinateSystem;M&&M.viewGL&&s[M.viewGL.isLinearSpace()?"define":"undefine"]("fragment","SRGB_DECODE"),f||this._updateLabelBuilder(t,n,i),this._updateHandler(t,e,r),this._updateAnimation(t),this._api=r},getPointsMesh:function(){return this._mesh},updateLabels:function(t){this._labelsBuilder.updateLabels(t)},hideLabels:function(){this.rootNode.remove(this._labelsBuilder.getMesh())},showLabels:function(){this.rootNode.add(this._labelsBuilder.getMesh())},dispose:function(){this._labelsBuilder.dispose()},_updateSymbolSprite:function(t,e,r,n){r.maxSize=Math.min(2*r.maxSize,200);var i,a,o=[];return r.aspect>1?(o[0]=r.maxSize,o[1]=r.maxSize/r.aspect):(o[1]=r.maxSize,o[0]=r.maxSize*r.aspect),o[0]=o[0]||1,o[1]=o[1]||1,this._symbolType===r.type&&(a=o,(i=this._symbolSize)&&a&&i[0]===a[0]&&i[1]===a[1])&&this._lineWidth===e.lineWidth||(ku.createSymbolSprite(r.type,o,{fill:"#fff",lineWidth:e.lineWidth,stroke:"transparent",shadowColor:"transparent",minMargin:Math.min(o[0]/2,10)},this._spriteImageCanvas),ku.createSDFFromCanvas(this._spriteImageCanvas,Math.min(this._spriteImageCanvas.width,32),20,this._mesh.material.get("sprite").image),this._symbolType=r.type,this._symbolSize=o,this._lineWidth=e.lineWidth),this._spriteImageCanvas.width/r.maxSize*n},_updateMaterial:function(t,e){var r=t.get("blendMode")==="lighter"?T.additiveBlend:null,n=this._mesh.material;n.blend=r,n.set("lineWidth",e.lineWidth/20);var i=T.parseColor(e.stroke);n.set("strokeColor",i),n.transparent=!0,n.depthMask=!1,n.depthTest=!this.is2D,n.sortVertices=!this.is2D},_updateLabelBuilder:function(t,e,r){var n=t.getData(),i=this._mesh.geometry,a=i.attributes.position.value,o=(e=this._startDataIndex,this._mesh.sizeScale);this._labelsBuilder.updateData(n,e,r),this._labelsBuilder.getLabelPosition=function(s,l,u){var h=3*(s-e);return[a[h],a[h+1],a[h+2]]},this._labelsBuilder.getLabelDistance=function(s,l,u){return i.attributes.size.get(s-e)/o/2+u},this._labelsBuilder.updateLabels()},_updateAnimation:function(t){T.updateVertexAnimation([["prevPosition","position"],["prevSize","size"]],this._prevMesh,this._mesh,t)},_updateHandler:function(t,e,r){var n,i=t.getData(),a=this._mesh,o=this,s=-1,l=t.coordinateSystem&&t.coordinateSystem.type==="cartesian3D";l&&(n=t.coordinateSystem.model),a.seriesIndex=t.seriesIndex,a.off("mousemove"),a.off("mouseout"),a.on("mousemove",function(u){var h=u.vertexIndex+o._startDataIndex;h!==s&&(this.highlightOnMouseover&&(this.downplay(i,s),this.highlight(i,h),this._labelsBuilder.updateLabels([h])),l&&r.dispatchAction({type:"grid3DShowAxisPointer",value:[i.get(t.coordDimToDataDim("x")[0],h),i.get(t.coordDimToDataDim("y")[0],h),i.get(t.coordDimToDataDim("z")[0],h)],grid3DIndex:n.componentIndex})),a.dataIndex=h,s=h},this),a.on("mouseout",function(u){var h=u.vertexIndex+o._startDataIndex;this.highlightOnMouseover&&(this.downplay(i,h),this._labelsBuilder.updateLabels()),s=-1,a.dataIndex=-1,l&&r.dispatchAction({type:"grid3DHideAxisPointer",grid3DIndex:n.componentIndex})},this)},updateLayout:function(t,e,r){var n=t.getData();if(this._mesh){var i=this._mesh.geometry.attributes.position.value,a=n.getLayout("points");if(this.is2D)for(var o=0;o<a.length/2;o++){var s=3*o,l=2*o;i[s]=a[l],i[s+1]=a[l+1],i[s+2]=-10}else for(o=0;o<a.length;o++)i[o]=a[o];this._mesh.geometry.dirty(),r.getZr().refresh()}},updateView:function(t){if(this._mesh){var e=new k;k.mul(e,t.viewMatrix,this._mesh.worldTransform),k.mul(e,t.projectionMatrix,e),this._mesh.updateNDCPosition(e,this.is2D,this._api)}},highlight:function(t,e){if(!(e>this._endDataIndex||e<this._startDataIndex)){var r=t.getItemModel(e).getModel("emphasis.itemStyle"),n=r.get("color"),i=r.get("opacity");if(n==null){var a=Gt(t,e);n=Ts(a,-.4)}i==null&&(i=Ut(t,e));var o=T.parseColor(n);o[3]*=i,this._mesh.geometry.attributes.color.set(e-this._startDataIndex,o),this._mesh.geometry.dirtyAttribute("color"),this._api.getZr().refresh()}},downplay:function(t,e){if(!(e>this._endDataIndex||e<this._startDataIndex)){var r=Gt(t,e),n=Ut(t,e),i=T.parseColor(r);i[3]*=n,this._mesh.geometry.attributes.color.set(e-this._startDataIndex,i),this._mesh.geometry.dirtyAttribute("color"),this._api.getZr().refresh()}},fadeOutAll:function(t){if(this._originalOpacity){for(var e=this._mesh.geometry,r=0;r<e.vertexCount;r++){var n=this._originalOpacity[r]*t;e.attributes.color.value[4*r+3]=n}e.dirtyAttribute("color"),this._api.getZr().refresh()}},fadeInAll:function(){this.fadeOutAll(1)},setPositionTexture:function(t){this._mesh&&this._setPositionTextureToMesh(this._mesh,t),this._positionTexture=t},removePositionTexture:function(){this._positionTexture=null,this._mesh&&this._setPositionTextureToMesh(this._mesh,null)},setSizeScale:function(t){if(t!==this._sizeScale){if(this._mesh){var e=this._mesh.material.get("u_Size");this._mesh.material.set("u_Size",e/this._sizeScale*t);var r=this._mesh.geometry.attributes;if(r.size.value)for(var n=0;n<r.size.value.length;n++)r.size.value[n]=r.size.value[n]/this._sizeScale*t}this._sizeScale=t}},_setPositionTextureToMesh:function(t,e){e&&t.material.set("positionTexture",e),t.material[e?"enableTexture":"disableTexture"]("positionTexture")},_getSymbolInfo:function(t,e,r){if(t.get("large"))return(u=tt(t.get("symbolSize"),1))instanceof Array?(o=Math.max(u[0],u[1]),n=u[0]/u[1]):(o=u,n=1),{maxSize:u,type:t.get("symbol"),aspect:n};for(var n,i=t.getData(),a=i.getItemVisual(0,"symbol")||"circle",o=0,s=e;s<r;s++){var l,u=i.getItemVisual(s,"symbolSize"),h=i.getItemVisual(s,"symbol");if(u instanceof Array)l=u[0]/u[1],o=Math.max(Math.max(u[0],u[1]),o);else{if(isNaN(u))continue;l=1,o=Math.max(u,o)}a=h,n=l}return{maxSize:o,type:a,aspect:n}}};const km=Pe.extend({type:"scatter3D",hasSymbolVisual:!0,__ecgl__:!0,init:function(t,e){this.groupGL=new T.Node,this._pointsBuilderList=[],this._currentStep=0},render:function(t,e,r){if(this.groupGL.removeAll(),t.getData().count()){var n=t.coordinateSystem;if(n&&n.viewGL){n.viewGL.add(this.groupGL),this._camera=n.viewGL.camera;var i=this._pointsBuilderList[0];i||(i=this._pointsBuilderList[0]=new Zr(!1,r)),this._pointsBuilderList.length=1,this.groupGL.add(i.rootNode),i.update(t,e,r),i.updateView(n.viewGL.camera)}}},incrementalPrepareRender:function(t,e,r){var n=t.coordinateSystem;n&&n.viewGL&&(n.viewGL.add(this.groupGL),this._camera=n.viewGL.camera),this.groupGL.removeAll(),this._currentStep=0},incrementalRender:function(t,e,r,n){if(!(t.end<=t.start)){var i=this._pointsBuilderList[this._currentStep];i||(i=new Zr(!1,n),this._pointsBuilderList[this._currentStep]=i),this.groupGL.add(i.rootNode),i.update(e,r,n,t.start,t.end),i.updateView(e.coordinateSystem.viewGL.camera),this._currentStep++}},updateCamera:function(){this._pointsBuilderList.forEach(function(t){t.updateView(this._camera)},this)},highlight:function(t,e,r,n){this._toggleStatus("highlight",t,e,r,n)},downplay:function(t,e,r,n){this._toggleStatus("downplay",t,e,r,n)},_toggleStatus:function(t,e,r,n,i){var a=e.getData(),o=Rh(a,i),s=t==="highlight";o!=null?je(Nn.normalizeToArray(o),function(l){for(var u=0;u<this._pointsBuilderList.length;u++){var h=this._pointsBuilderList[u];s?h.highlight(a,l):h.downplay(a,l)}},this):a.each(function(l){for(var u=0;u<this._pointsBuilderList.length;u++){var h=this._pointsBuilderList[u];s?h.highlight(a,l):h.downplay(a,l)}})},dispose:function(){this._pointsBuilderList.forEach(function(t){t.dispose()}),this.groupGL.removeAll()},remove:function(){this.groupGL.removeAll()}});Wt(function(t){t.registerChartView(km),t.registerSeriesModel(Bm),t.registerLayout({seriesType:"scatter3D",reset:function(e){var r=e.coordinateSystem;if(r){var n=r.dimensions;if(n.length<3)return;var i=n.map(function(s){return e.coordDimToDataDim(s)[0]}),a=[],o=[];return{progress:function(s,l){for(var u=new Float32Array(3*(s.end-s.start)),h=s.start;h<s.end;h++){var c=3*(h-s.start);a[0]=l.get(i[0],h),a[1]=l.get(i[1],h),a[2]=l.get(i[2],h),r.dataToPoint(a,o),u[c]=o[0],u[c+1]=o[1],u[c+2]=o[2]}l.setLayout("points",u)}}}}})});var It=At.vec3,Vu=At.vec2,Qe=It.normalize,Ji=It.cross,Wu=It.sub,Ho=It.add,yr=It.create,pr=yr(),_e=yr(),mr=yr(),Qn=yr(),ju=[],Xu=[];function Hm(t,e){Vu.copy(ju,t[0]),Vu.copy(Xu,t[1]);var r=[],n=r[0]=yr(),i=r[1]=yr(),a=r[2]=yr(),o=r[3]=yr();e.dataToPoint(ju,n),e.dataToPoint(Xu,o),Qe(pr,n),Wu(_e,o,n),Qe(_e,_e),Ji(mr,_e,pr),Qe(mr,mr),Ji(_e,pr,mr),Ho(i,pr,_e),Qe(i,i),Qe(pr,o),Wu(_e,n,o),Qe(_e,_e),Ji(mr,_e,pr),Qe(mr,mr),Ji(_e,pr,mr),Ho(a,pr,_e),Qe(a,a),Ho(Qn,n,o),Qe(Qn,Qn);var s=It.dot(n,Qn),l=It.dot(Qn,i),u=(Math.max(It.len(n),It.len(o))-s)/l*2;return It.scaleAndAdd(i,n,i,u),It.scaleAndAdd(a,o,a,u),r}function gc(t,e){for(var r=new Float32Array(3*t.length),n=0,i=[],a=0;a<t.length;a++)e.dataToPoint(t[a],i),r[n++]=i[0],r[n++]=i[1],r[n++]=i[2];return r}function _c(t){var e=[];return t.each(function(r){var n=t.getItemModel(r),i=n.option instanceof Array?n.option:n.getShallow("coords",!0);e.push(i)}),{coordsList:e}}function qu(t,e,r){var n=t.getData(),i=t.get("polyline"),a=_c(n);n.setLayout("lineType",i?"polyline":"cubicBezier"),n.each(function(o){var s=a.coordsList[o],l=i?gc(s,e):function(u,h,c){var d=[],f=d[0]=It.create(),m=d[1]=It.create(),p=d[2]=It.create(),g=d[3]=It.create();h.dataToPoint(u[0],f),h.dataToPoint(u[1],g);var _=It.dist(f,g);return It.lerp(m,f,g,.3),It.lerp(p,f,g,.3),It.scaleAndAdd(m,m,c,Math.min(.1*_,10)),It.scaleAndAdd(p,p,c,Math.min(.1*_,10)),d}(s,e,r);n.setItemLayout(o,l)})}function Vm(t,e){t.eachSeriesByType("lines3D",function(r){var n=r.coordinateSystem;n.type==="globe"?function(i,a){var o=i.getData(),s=i.get("polyline");o.setLayout("lineType",s?"polyline":"cubicBezier");var l=_c(o);o.each(function(u){var h=l.coordsList[u],c=s?gc:Hm;o.setItemLayout(u,c(h,a))})}(r,n):n.type==="geo3D"?qu(r,n,[0,1,0]):n.type!=="mapbox3D"&&n.type!=="maptalks3D"||qu(r,n,[0,0,1])})}const Wm=Le.extend({type:"series.lines3D",dependencies:["globe"],visualStyleAccessPath:"lineStyle",visualDrawType:"stroke",getInitialData:function(t,e){var r=new Xe(["value"],this);return r.hasItemOption=!1,r.initData(t.data,[],function(n,i,a,o){if(n instanceof Array)return NaN;r.hasItemOption=!0;var s=n.value;return s!=null?s instanceof Array?s[o]:s:void 0}),r},defaultOption:{coordinateSystem:"globe",globeIndex:0,geo3DIndex:0,zlevel:-10,polyline:!1,effect:{show:!1,period:4,trailWidth:4,trailLength:.2,spotIntensity:6},silent:!0,blendMode:"source-over",lineStyle:{width:1,opacity:.5}}});var Zu=At.vec3;function jm(t){return t>0?1:-1}T.Shader.import(`@export ecgl.trail2.vertex
attribute vec3 position: POSITION;
attribute vec3 positionPrev;
attribute vec3 positionNext;
attribute float offset;
attribute float dist;
attribute float distAll;
attribute float start;

attribute vec4 a_Color : COLOR;

uniform mat4 worldViewProjection : WORLDVIEWPROJECTION;
uniform vec4 viewport : VIEWPORT;
uniform float near : NEAR;

uniform float speed : 0;
uniform float trailLength: 0.3;
uniform float time;
uniform float period: 1000;

uniform float spotSize: 1;

varying vec4 v_Color;
varying float v_Percent;
varying float v_SpotPercent;

@import ecgl.common.wireframe.vertexHeader

@import ecgl.lines3D.clipNear

void main()
{
 @import ecgl.lines3D.expandLine

 gl_Position = currProj;

 v_Color = a_Color;

 @import ecgl.common.wireframe.vertexMain

#ifdef CONSTANT_SPEED
 float t = mod((speed * time + start) / distAll, 1. + trailLength) - trailLength;
#else
 float t = mod((time + start) / period, 1. + trailLength) - trailLength;
#endif

 float trailLen = distAll * trailLength;

 v_Percent = (dist - t * distAll) / trailLen;

 v_SpotPercent = spotSize / distAll;

 }
@end


@export ecgl.trail2.fragment

uniform vec4 color : [1.0, 1.0, 1.0, 1.0];
uniform float spotIntensity: 5;

varying vec4 v_Color;
varying float v_Percent;
varying float v_SpotPercent;

@import ecgl.common.wireframe.fragmentHeader

@import clay.util.srgb

void main()
{
 if (v_Percent > 1.0 || v_Percent < 0.0) {
 discard;
 }

 float fade = v_Percent;

#ifdef SRGB_DECODE
 gl_FragColor = sRGBToLinear(color * v_Color);
#else
 gl_FragColor = color * v_Color;
#endif

 @import ecgl.common.wireframe.fragmentMain

 if (v_Percent > (1.0 - v_SpotPercent)) {
 gl_FragColor.rgb *= spotIntensity;
 }

 gl_FragColor.a *= fade;
}

@end`);const Xm=T.Mesh.extend(function(){var t=new T.Material({shader:new T.Shader(T.Shader.source("ecgl.trail2.vertex"),T.Shader.source("ecgl.trail2.fragment")),transparent:!0,depthMask:!1}),e=new Yr({dynamic:!0});return e.createAttribute("dist","float",1),e.createAttribute("distAll","float",1),e.createAttribute("start","float",1),{geometry:e,material:t,culling:!1,$ignorePicking:!0}},{updateData:function(t,e,r){var n=t.hostModel,i=this.geometry,a=n.getModel("effect"),o=a.get("trailWidth")*e.getDevicePixelRatio(),s=a.get("trailLength"),l=n.get("effect.constantSpeed"),u=1e3*n.get("effect.period"),h=l!=null;h?this.material.set("speed",l/1e3):this.material.set("period",u),this.material[h?"define":"undefine"]("vertex","CONSTANT_SPEED");var c=n.get("polyline");i.trailLength=s,this.material.set("trailLength",s),i.resetOffset(),["position","positionPrev","positionNext"].forEach(function(b){i.attributes[b].value=r.attributes[b].value}),["dist","distAll","start","offset","color"].forEach(function(b){i.attributes[b].init(i.vertexCount)}),i.indices=r.indices;var d=[],f=a.get("trailColor"),m=a.get("trailOpacity"),p=f!=null,g=m!=null;this.updateWorldTransform();var _=this.worldTransform.x.len(),y=this.worldTransform.y.len(),x=this.worldTransform.z.len(),v=0,w=0;t.each(function(b){var S=t.getItemLayout(b),M=g?m:Ut(t,b),D=Gt(t,b);M==null&&(M=1),(d=T.parseColor(p?f:D,d))[3]*=M;for(var L=c?r.getPolylineVertexCount(S):r.getCubicCurveVertexCount(S[0],S[1],S[2],S[3]),P=0,O=[],R=[],A=v;A<v+L;A++)i.attributes.position.get(A,O),O[0]*=_,O[1]*=y,O[2]*=x,A>v&&(P+=Zu.dist(O,R)),i.attributes.dist.set(A,P),Zu.copy(R,O);w=Math.max(w,P);var z=Math.random()*(h?P:u);for(A=v;A<v+L;A++)i.attributes.distAll.set(A,P),i.attributes.start.set(A,z),i.attributes.offset.set(A,jm(r.attributes.offset.get(A))*o/2),i.attributes.color.set(A,d);v+=L}),this.material.set("spotSize",.1*w*s),this.material.set("spotIntensity",a.get("spotIntensity")),i.dirty()},setAnimationTime:function(t){this.material.set("time",t)}});T.Shader.import(Ha);const qm=Pe.extend({type:"lines3D",__ecgl__:!0,init:function(t,e){this.groupGL=new T.Node,this._meshLinesMaterial=new T.Material({shader:T.createShader("ecgl.meshLines3D"),transparent:!0,depthMask:!1}),this._linesMesh=new T.Mesh({geometry:new Yr,material:this._meshLinesMaterial,$ignorePicking:!0}),this._trailMesh=new Xm},render:function(t,e,r){this.groupGL.add(this._linesMesh);var n=t.coordinateSystem,i=t.getData();if(n&&n.viewGL){n.viewGL.add(this.groupGL),this._updateLines(t,e,r);var a=n.viewGL.isLinearSpace()?"define":"undefine";this._linesMesh.material[a]("fragment","SRGB_DECODE"),this._trailMesh.material[a]("fragment","SRGB_DECODE")}var o=this._trailMesh;if(o.stopAnimation(),t.get("effect.show")){this.groupGL.add(o),o.updateData(i,r,this._linesMesh.geometry),o.__time=o.__time||0;var s=36e5;this._curveEffectsAnimator=o.animate("",{loop:!0}).when(s,{__time:s}).during(function(){o.setAnimationTime(o.__time)}).start()}else this.groupGL.remove(o),this._curveEffectsAnimator=null;this._linesMesh.material.blend=this._trailMesh.material.blend=t.get("blendMode")==="lighter"?T.additiveBlend:null},pauseEffect:function(){this._curveEffectsAnimator&&this._curveEffectsAnimator.pause()},resumeEffect:function(){this._curveEffectsAnimator&&this._curveEffectsAnimator.resume()},toggleEffect:function(){var t=this._curveEffectsAnimator;t&&(t.isPaused()?t.resume():t.pause())},_updateLines:function(t,e,r){var n=t.getData(),i=t.coordinateSystem,a=this._linesMesh.geometry,o=t.get("polyline");a.expandLine=!0;var s,l=(s=i).radius!=null?s.radius:s.size!=null?Math.max(s.size[0],s.size[1],s.size[2]):100;a.segmentScale=l/20;var u="lineStyle.width".split("."),h=r.getDevicePixelRatio();n.each(function(m){var p=n.getItemModel(m).get(u);p==null&&(p=1),n.setItemVisual(m,"lineWidth",p)}),a.useNativeLine=!1;var c=0,d=0;n.each(function(m){var p=n.getItemLayout(m);o?(c+=a.getPolylineVertexCount(p),d+=a.getPolylineTriangleCount(p)):(c+=a.getCubicCurveVertexCount(p[0],p[1],p[2],p[3]),d+=a.getCubicCurveTriangleCount(p[0],p[1],p[2],p[3]))}),a.setVertexCount(c),a.setTriangleCount(d),a.resetOffset();var f=[];n.each(function(m){var p=n.getItemLayout(m),g=Gt(n,m),_=Ut(n,m),y=n.getItemVisual(m,"lineWidth")*h;_==null&&(_=1),(f=T.parseColor(g,f))[3]*=_,o?a.addPolyline(p,f,y):a.addCubicCurve(p[0],p[1],p[2],p[3],f,y)}),a.dirty()},remove:function(){this.groupGL.removeAll()},dispose:function(){this.groupGL.removeAll()}});function Yu(t,e){for(var r=[],n=0;n<e.length;n++)r.push(t.dataToPoint(e[n]));return r}Wt(function(t){t.registerChartView(qm),t.registerSeriesModel(Wm),t.registerLayout(Vm),t.registerAction({type:"lines3DPauseEffect",event:"lines3deffectpaused",update:"series.lines3D:pauseEffect"},function(){}),t.registerAction({type:"lines3DResumeEffect",event:"lines3deffectresumed",update:"series.lines3D:resumeEffect"},function(){}),t.registerAction({type:"lines3DToggleEffect",event:"lines3deffectchanged",update:"series.lines3D:toggleEffect"},function(){})});var vc=Le.extend({type:"series.polygons3D",getRegionModel:function(t){return this.getData().getItemModel(t)},getRegionPolygonCoords:function(t){var e=this.coordinateSystem,r=this.getData().getItemModel(t),n=r.option instanceof Array?r.option:r.getShallow("coords");r.get("multiPolygon")||(n=[n]);for(var i=[],a=0;a<n.length;a++){for(var o=[],s=1;s<n[a].length;s++)o.push(Yu(e,n[a][s]));i.push({exterior:Yu(e,n[a][0]),interiors:o})}return i},getInitialData:function(t){var e=new Xe(["value"],this);return e.hasItemOption=!1,e.initData(t.data,[],function(r,n,i,a){if(r instanceof Array)return NaN;e.hasItemOption=!0;var o=r.value;return o!=null?o instanceof Array?o[a]:o:void 0}),e},defaultOption:{show:!0,data:null,multiPolygon:!1,progressiveThreshold:1e3,progressive:1e3,zlevel:-10,label:{show:!1,distance:2,textStyle:{fontSize:20,color:"#000",backgroundColor:"rgba(255,255,255,0.7)",padding:3,borderRadius:4}},itemStyle:{color:"#fff",borderWidth:0,borderColor:"#333"},emphasis:{itemStyle:{color:"#639fc0"},label:{show:!0}}}});ft(vc.prototype,Rn);const Zm=vc,Ym=Pe.extend({type:"polygons3D",__ecgl__:!0,init:function(t,e){this.groupGL=new T.Node,this._geo3DBuilderList=[],this._currentStep=0},render:function(t,e,r){this.groupGL.removeAll();var n=t.coordinateSystem;n&&n.viewGL&&n.viewGL.add(this.groupGL);var i=this._geo3DBuilderList[0];i||((i=new Dn(r)).extrudeY=n.type!=="mapbox3D"&&n.type!=="maptalks3D",this._geo3DBuilderList[0]=i),this._updateShaderDefines(n,i),i.update(t,e,r),this._geo3DBuilderList.length=1,this.groupGL.add(i.rootNode)},incrementalPrepareRender:function(t,e,r){this.groupGL.removeAll();var n=t.coordinateSystem;n&&n.viewGL&&n.viewGL.add(this.groupGL),this._currentStep=0},incrementalRender:function(t,e,r,n){var i=this._geo3DBuilderList[this._currentStep],a=e.coordinateSystem;i||((i=new Dn(n)).extrudeY=a.type!=="mapbox3D"&&a.type!=="maptalks3D",this._geo3DBuilderList[this._currentStep]=i),i.update(e,r,n,t.start,t.end),this.groupGL.add(i.rootNode),this._updateShaderDefines(a,i),this._currentStep++},_updateShaderDefines:function(t,e){var r=t.viewGL.isLinearSpace()?"define":"undefine";e.rootNode.traverse(function(n){n.material&&(n.material[r]("fragment","SRGB_DECODE"),t.type!=="mapbox3D"&&t.type!=="maptalks3D"||(n.material.define("fragment","NORMAL_UP_AXIS",2),n.material.define("fragment","NORMAL_FRONT_AXIS",1)))})},remove:function(){this.groupGL.removeAll()},dispose:function(){this.groupGL.removeAll(),this._geo3DBuilderList.forEach(function(t){t.dispose()})}});Wt(function(t){t.registerChartView(Ym),t.registerSeriesModel(Zm)});var yc=Le.extend({type:"series.surface",dependencies:["globe","grid3D","geo3D"],visualStyleAccessPath:"itemStyle",formatTooltip:function(t){return Mi(this,t)},getInitialData:function(t,e){var r=t.data;function n(F){return!(isNaN(F.min)||isNaN(F.max)||isNaN(F.step))}function i(F){var X=rh;return Math.max(X(F.min),X(F.max),X(F.step))+1}if(!r)if(t.parametric){var a=t.parametricEquation||{},o=a.u||{},s=a.v||{};["u","v"].forEach(function(F){n(a[F])}),["x","y","z"].forEach(function(F){a[F]});var l=Math.floor((o.max+o.step-o.min)/o.step),u=Math.floor((s.max+s.step-s.min)/s.step);r=new Float32Array(l*u*5);var h=i(o),c=i(s);for(S=0,M=0;M<u;M++)for(D=0;D<l;D++){var d=D*o.step+o.min,f=M*s.step+s.min,m=Ai(Math.min(d,o.max),h),p=Ai(Math.min(f,s.max),c);L=a.x(m,p),P=a.y(m,p),A=a.z(m,p),r[S++]=L,r[S++]=P,r[S++]=A,r[S++]=m,r[S++]=p}}else{var g=t.equation||{},_=g.x||{},y=g.y||{};if(["x","y"].forEach(function(F){n(g[F])}),typeof g.z!="function")return;var x=Math.floor((_.max+_.step-_.min)/_.step),v=Math.floor((y.max+y.step-y.min)/y.step);r=new Float32Array(x*v*3);for(var w=i(_),b=i(y),S=0,M=0;M<v;M++)for(var D=0;D<x;D++){var L=D*_.step+_.min,P=M*y.step+y.min,O=Ai(Math.min(L,_.max),w),R=Ai(Math.min(P,y.max),b),A=g.z(O,R);r[S++]=O,r[S++]=R,r[S++]=A}}var z=["x","y","z"];return t.parametric&&z.push("u","v"),Va(this,z,r)},defaultOption:{coordinateSystem:"cartesian3D",zlevel:-10,grid3DIndex:0,shading:"lambert",parametric:!1,wireframe:{show:!0,lineStyle:{color:"rgba(0,0,0,0.5)",width:1}},equation:{x:{min:-1,max:1,step:.1},y:{min:-1,max:1,step:.1},z:null},parametricEquation:{u:{min:-1,max:1,step:.1},v:{min:-1,max:1,step:.1},x:null,y:null,z:null},dataShape:null,itemStyle:{},animationDurationUpdate:500}});ft(yc.prototype,Rn);const Km=yc;var Ir=At.vec3;const Jm=Pe.extend({type:"surface",__ecgl__:!0,init:function(t,e){this.groupGL=new T.Node},render:function(t,e,r){var n=this._prevSurfaceMesh;this._prevSurfaceMesh=this._surfaceMesh,this._surfaceMesh=n,this._surfaceMesh||(this._surfaceMesh=this._createSurfaceMesh()),this.groupGL.remove(this._prevSurfaceMesh),this.groupGL.add(this._surfaceMesh);var i=t.coordinateSystem,a=t.get("shading"),o=t.getData(),s="ecgl."+a;if(this._surfaceMesh.material&&this._surfaceMesh.material.shader.name===s||(this._surfaceMesh.material=T.createMaterial(s,["VERTEX_COLOR","DOUBLE_SIDED"])),T.setMaterialFromModel(a,this._surfaceMesh.material,t,r),i&&i.viewGL){i.viewGL.add(this.groupGL);var l=i.viewGL.isLinearSpace()?"define":"undefine";this._surfaceMesh.material[l]("fragment","SRGB_DECODE")}var u=t.get("parametric"),h=t.get("dataShape");h||(h=this._getDataShape(o,u));var c=t.getModel("wireframe"),d=c.get("lineStyle.width"),f=c.get("show")&&d>0;this._updateSurfaceMesh(this._surfaceMesh,t,h,f);var m=this._surfaceMesh.material;f?(m.define("WIREFRAME_QUAD"),m.set("wireframeLineWidth",d),m.set("wireframeLineColor",T.parseColor(c.get("lineStyle.color")))):m.undefine("WIREFRAME_QUAD"),this._initHandler(t,r),this._updateAnimation(t)},_updateAnimation:function(t){T.updateVertexAnimation([["prevPosition","position"],["prevNormal","normal"]],this._prevSurfaceMesh,this._surfaceMesh,t)},_createSurfaceMesh:function(){var t=new T.Mesh({geometry:new T.Geometry({dynamic:!0,sortTriangles:!0}),shadowDepthMaterial:new T.Material({shader:new T.Shader(T.Shader.source("ecgl.sm.depth.vertex"),T.Shader.source("ecgl.sm.depth.fragment"))}),culling:!1,renderOrder:10,renderNormal:!0});return t.geometry.createAttribute("barycentric","float",4),t.geometry.createAttribute("prevPosition","float",3),t.geometry.createAttribute("prevNormal","float",3),Object.assign(t.geometry,qs),t},_initHandler:function(t,e){var r=t.getData(),n=this._surfaceMesh,i=t.coordinateSystem;n.seriesIndex=t.seriesIndex;var a=-1;n.off("mousemove"),n.off("mouseout"),n.on("mousemove",function(o){var s=function(p,g){for(var _=1/0,y=-1,x=[],v=0;v<p.length;v++){n.geometry.attributes.position.get(p[v],x);var w=Ir.dist(g.array,x);w<_&&(_=w,y=p[v])}return y}(o.triangle,o.point);if(s>=0){var l=[];n.geometry.attributes.position.get(s,l);for(var u=i.pointToData(l),h=1/0,c=-1,d=[],f=0;f<r.count();f++){d[0]=r.get("x",f),d[1]=r.get("y",f),d[2]=r.get("z",f);var m=Ir.squaredDistance(d,u);m<h&&(c=f,h=m)}c!==a&&e.dispatchAction({type:"grid3DShowAxisPointer",value:u}),a=c,n.dataIndex=c}else n.dataIndex=-1},this),n.on("mouseout",function(o){a=-1,n.dataIndex=-1,e.dispatchAction({type:"grid3DHideAxisPointer"})},this)},_updateSurfaceMesh:function(t,e,r,n){var i=t.geometry,a=e.getData(),o=a.getLayout("points"),s=0;a.each(function(Zt){a.hasValue(Zt)||s++});var l=s||n,u=i.attributes.position,h=i.attributes.normal,c=i.attributes.texcoord0,d=i.attributes.barycentric,f=i.attributes.color,m=r[0],p=r[1],g=e.get("shading")!=="color";if(l){var _=(m-1)*(p-1)*4;u.init(_),n&&d.init(_)}else u.value=new Float32Array(o);f.init(i.vertexCount),c.init(i.vertexCount);var y,x=[0,3,1,1,3,2],v=[[1,1,0,0],[0,1,0,1],[1,0,0,1],[1,0,1,0]],w=i.indices=new(i.vertexCount>65535?Uint32Array:Uint16Array)((m-1)*(p-1)*6),b=function(Zt,or,xe){xe[1]=Zt*p+or,xe[0]=Zt*p+or+1,xe[3]=(Zt+1)*p+or+1,xe[2]=(Zt+1)*p+or},S=!1;if(l){var M=[],D=[],L=0;g?h.init(i.vertexCount):h.value=null;for(var P=[[],[],[]],O=[],R=[],A=Ir.create(),z=function(Zt,or,xe){var Ze=3*or;return xe[0]=Zt[Ze],xe[1]=Zt[Ze+1],xe[2]=Zt[Ze+2],xe},F=new Float32Array(o.length),X=new Float32Array(o.length/3*4),H=0;H<a.count();H++)if(a.hasValue(H)){var ut=T.parseColor(Gt(a,H));(ce=Ut(a,H))!=null&&(ut[3]*=ce),ut[3]<.99&&(S=!0);for(var G=0;G<4;G++)X[4*H+G]=ut[G]}var St=[1e7,1e7,1e7];for(H=0;H<m-1;H++)for(var ht=0;ht<p-1;ht++){var pt=4*(H*(p-1)+ht);b(H,ht,M);var J=!1;for(G=0;G<4;G++)z(o,M[G],D),y=D,(isNaN(y[0])||isNaN(y[1])||isNaN(y[2]))&&(J=!0);for(G=0;G<4;G++)J?u.set(pt+G,St):(z(o,M[G],D),u.set(pt+G,D)),n&&d.set(pt+G,v[G]);for(G=0;G<6;G++)w[L++]=x[G]+pt;if(g&&!J)for(G=0;G<2;G++){for(var te=3*G,_t=0;_t<3;_t++)z(o,Tr=M[x[te]+_t],P[_t]);for(Ir.sub(O,P[0],P[1]),Ir.sub(R,P[1],P[2]),Ir.cross(A,O,R),_t=0;_t<3;_t++){var Xt=3*M[x[te]+_t];F[Xt]=F[Xt]+A[0],F[Xt+1]=F[Xt+1]+A[1],F[Xt+2]=F[Xt+2]+A[2]}}}if(g)for(H=0;H<F.length/3;H++)z(F,H,A),Ir.normalize(A,A),F[3*H]=A[0],F[3*H+1]=A[1],F[3*H+2]=A[2];ut=[];var ae=[];for(H=0;H<m-1;H++)for(ht=0;ht<p-1;ht++)for(pt=4*(H*(p-1)+ht),b(H,ht,M),G=0;G<4;G++){for(_t=0;_t<4;_t++)ut[_t]=X[4*M[G]+_t];f.set(pt+G,ut),g&&(z(F,M[G],A),h.set(pt+G,A));var Tr=M[G];ae[0]=Tr%p/(p-1),ae[1]=Math.floor(Tr/p)/(m-1),c.set(pt+G,ae)}}else{for(ae=[],H=0;H<a.count();H++){var ce;ae[0]=H%p/(p-1),ae[1]=Math.floor(H/p)/(m-1),ut=T.parseColor(Gt(a,H)),(ce=Ut(a,H))!=null&&(ut[3]*=ce),ut[3]<.99&&(S=!0),f.set(H,ut),c.set(H,ae)}M=[];var Sr=0;for(H=0;H<m-1;H++)for(ht=0;ht<p-1;ht++)for(b(H,ht,M),G=0;G<6;G++)w[Sr++]=M[x[G]];g?i.generateVertexNormals():h.value=null}t.material.get("normalMap")&&i.generateTangents(),i.updateBoundingBox(),i.dirty(),t.material.transparent=S,t.material.depthMask=!S},_getDataShape:function(t,e){for(var r=-1/0,n=0,i=0,a=!1,o=e?"u":"x",s=t.count(),l=0;l<s;l++){var u=t.get(o,l);u<r&&(i=0,n++),r=u,i++}if(n&&i!==1||(a=!0),!a)return[n+1,i];for(var h=Math.floor(Math.sqrt(s));h>0;){if(Math.floor(s/h)===s/h)return[h,s/h];h--}return[h=Math.floor(Math.sqrt(s)),h]},dispose:function(){this.groupGL.removeAll()},remove:function(){this.groupGL.removeAll()}});function Ku(t,e){for(var r=[],n=0;n<e.length;n++)r.push(t.dataToPoint(e[n]));return r}Wt(function(t){t.registerChartView(Jm),t.registerSeriesModel(Km),t.registerLayout(function(e,r){e.eachSeriesByType("surface",function(n){var i=n.coordinateSystem;!i||i.type;var a=n.getData(),o=new Float32Array(3*a.count()),s=[NaN,NaN,NaN];if(i&&i.type==="cartesian3D"){var l=i.dimensions.map(function(u){return n.coordDimToDataDim(u)[0]});a.each(l,function(u,h,c,d){var f;f=a.hasValue(d)?i.dataToPoint([u,h,c]):s,o[3*d]=f[0],o[3*d+1]=f[1],o[3*d+2]=f[2]})}a.setLayout("points",o)})})});var mn=Le.extend({type:"series.map3D",layoutMode:"box",coordinateSystem:null,visualStyleAccessPath:"itemStyle",optionUpdated:function(t){var e=this.get("coordinateSystem");e!=null&&e!=="geo3D"&&(this.get("groundPlane.show")&&(this.option.groundPlane.show=!1),this._geo=null)},getInitialData:function(t){t.data=this.getFilledRegions(t.data,t.map);var e=Ti(t.data,{coordDimensions:["value"]}),r=new Xe(e,this);r.initData(t.data);var n={};return r.each(function(i){var a=r.getName(i),o=r.getItemModel(i);n[a]=o}),this._regionModelMap=n,r},formatTooltip:function(t){return Mi(this,t)},getRegionModel:function(t){var e=this.getData().getName(t);return this._regionModelMap[e]||new Tn(null,this)},getRegionPolygonCoords:function(t){var e=this.coordinateSystem,r=this.getData().getName(t);if(e.transform)return(n=e.getRegion(r))?n.geometries:[];this._geo||(this._geo=sc.createGeo3D(this));for(var n=this._geo.getRegion(r),i=[],a=0;a<n.geometries.length;a++){var o=n.geometries[a],s=[],l=Ku(e,o.exterior);if(s&&s.length)for(var u=0;u<o.interiors.length;u++)s.push(Ku(e,s[u]));i.push({interiors:s,exterior:l})}return i},getFormattedLabel:function(t,e){var r=Nn.getFormattedLabel(this,t,e);return r==null&&(r=this.getData().getName(t)),r},defaultOption:{coordinateSystem:"geo3D",data:null}});ft(mn.prototype,ec),ft(mn.prototype,Ga),ft(mn.prototype,Pn),ft(mn.prototype,On),ft(mn.prototype,Rn);const Qm=mn,$m=Pe.extend({type:"map3D",__ecgl__:!0,init:function(t,e){this._geo3DBuilder=new Dn(e),this.groupGL=new T.Node},render:function(t,e,r){var n=t.coordinateSystem;if(n&&n.viewGL){if(this.groupGL.add(this._geo3DBuilder.rootNode),n.viewGL.add(this.groupGL),n.type==="geo3D"){this._sceneHelper||(this._sceneHelper=new wr,this._sceneHelper.initLight(this.groupGL)),this._sceneHelper.setScene(n.viewGL.scene),this._sceneHelper.updateLight(t),n.viewGL.setPostEffect(t.getModel("postEffect"),r),n.viewGL.setTemporalSuperSampling(t.getModel("temporalSuperSampling"));var i=this._control;i||(i=this._control=new ka({zr:r.getZr()}),this._control.init());var a=t.getModel("viewControl");i.setViewGL(n.viewGL),i.setFromViewControlModel(a,0),i.off("update"),i.on("update",function(){r.dispatchAction({type:"map3DChangeCamera",alpha:i.getAlpha(),beta:i.getBeta(),distance:i.getDistance(),from:this.uid,map3DId:t.id})}),this._geo3DBuilder.extrudeY=!0}else this._control&&(this._control.dispose(),this._control=null),this._sceneHelper&&(this._sceneHelper.dispose(),this._sceneHelper=null),t.getData().getLayout("geo3D"),this._geo3DBuilder.extrudeY=!1;this._geo3DBuilder.update(t,e,r,0,t.getData().count());var o=n.viewGL.isLinearSpace()?"define":"undefine";this._geo3DBuilder.rootNode.traverse(function(s){s.material&&s.material[o]("fragment","SRGB_DECODE")})}},afterRender:function(t,e,r,n){var i=n.renderer,a=t.coordinateSystem;a&&a.type==="geo3D"&&(this._sceneHelper.updateAmbientCubemap(i,t,r),this._sceneHelper.updateSkybox(i,t,r))},dispose:function(){this.groupGL.removeAll(),this._control.dispose(),this._geo3DBuilder.dispose()}});Wt(function(t){lc(t),t.registerChartView($m),t.registerSeriesModel(Qm),t.registerAction({type:"map3DChangeCamera",event:"map3dcamerachanged",update:"series:updateCamera"},function(e,r){r.eachComponent({mainType:"series",subType:"map3D",query:e},function(n){n.setView(e)})})});const tg=Le.extend({type:"series.scatterGL",dependencies:["grid","polar","geo","singleAxis"],visualStyleAccessPath:"itemStyle",hasSymbolVisual:!0,getInitialData:function(){return Hc(null,this)},defaultOption:{coordinateSystem:"cartesian2d",zlevel:10,progressive:1e5,progressiveThreshold:1e5,large:!1,symbol:"circle",symbolSize:10,zoomScale:0,blendMode:"source-over",itemStyle:{opacity:.8},postEffect:{enable:!1,colorCorrection:{exposure:0,brightness:0,contrast:1,saturation:1,enable:!0}}}});function rr(t){this.viewGL=t}rr.prototype.reset=function(t,e){this._updateCamera(e.getWidth(),e.getHeight(),e.getDevicePixelRatio()),this._viewTransform=sd(),this.updateTransform(t,e)},rr.prototype.updateTransform=function(t,e){var r=t.coordinateSystem;r.getRoamTransform&&(ld(this._viewTransform,r.getRoamTransform()),this._setCameraTransform(this._viewTransform),e.getZr().refresh())},rr.prototype.dataToPoint=function(t,e,r){r=t.dataToPoint(e,null,r);var n=this._viewTransform;n&&rl(r,r,n)},rr.prototype.removeTransformInPoint=function(t){return this._viewTransform&&rl(t,t,this._viewTransform),t},rr.prototype.getZoom=function(){if(this._viewTransform){var t=this._viewTransform;return 1/Math.max(Math.sqrt(t[0]*t[0]+t[1]*t[1]),Math.sqrt(t[2]*t[2]+t[3]*t[3]))}return 1},rr.prototype._setCameraTransform=function(t){var e=this.viewGL.camera;e.position.set(t[4],t[5],0),e.scale.set(Math.sqrt(t[0]*t[0]+t[1]*t[1]),Math.sqrt(t[2]*t[2]+t[3]*t[3]),1)},rr.prototype._updateCamera=function(t,e,r){this.viewGL.setViewport(0,0,t,e,r);var n=this.viewGL.camera;n.left=n.top=0,n.bottom=e,n.right=t,n.near=0,n.far=100};const eg=Pe.extend({type:"scatterGL",__ecgl__:!0,init:function(t,e){this.groupGL=new T.Node,this.viewGL=new dt("orthographic"),this.viewGL.add(this.groupGL),this._pointsBuilderList=[],this._currentStep=0,this._sizeScale=1,this._glViewHelper=new rr(this.viewGL)},render:function(t,e,r){if(this.groupGL.removeAll(),this._glViewHelper.reset(t,r),t.getData().count()){var n=this._pointsBuilderList[0];n||(n=this._pointsBuilderList[0]=new Zr(!0,r)),this._pointsBuilderList.length=1,this.groupGL.add(n.rootNode),this._removeTransformInPoints(t.getData().getLayout("points")),n.update(t,e,r),this.viewGL.setPostEffect(t.getModel("postEffect"),r)}},incrementalPrepareRender:function(t,e,r){this.groupGL.removeAll(),this._glViewHelper.reset(t,r),this._currentStep=0,this.viewGL.setPostEffect(t.getModel("postEffect"),r)},incrementalRender:function(t,e,r,n){if(!(t.end<=t.start)){var i=this._pointsBuilderList[this._currentStep];i||(i=new Zr(!0,n),this._pointsBuilderList[this._currentStep]=i),this.groupGL.add(i.rootNode),this._removeTransformInPoints(e.getData().getLayout("points")),i.setSizeScale(this._sizeScale),i.update(e,r,n,t.start,t.end),n.getZr().refresh(),this._currentStep++}},updateTransform:function(t,e,r){if(t.coordinateSystem.getRoamTransform){this._glViewHelper.updateTransform(t,r);var n=this._glViewHelper.getZoom(),i=Math.max((t.get("zoomScale")||0)*(n-1)+1,0);this._sizeScale=i,this._pointsBuilderList.forEach(function(a){a.setSizeScale(i)})}},_removeTransformInPoints:function(t){if(t)for(var e=[],r=0;r<t.length;r+=2)e[0]=t[r],e[1]=t[r+1],this._glViewHelper.removeTransformInPoint(e),t[r]=e[0],t[r+1]=e[1]},dispose:function(){this.groupGL.removeAll(),this._pointsBuilderList.forEach(function(t){t.dispose()})},remove:function(){this.groupGL.removeAll()}});Wt(function(t){t.registerChartView(eg),t.registerSeriesModel(tg),t.registerLayout({seriesType:"scatterGL",reset:function(e){var r,n=e.coordinateSystem,i=e.getData();if(n){var a=n.dimensions.map(function(s){return i.mapDimension(s)}).slice(0,2),o=[];a.length===1?r=function(s){for(var l=new Float32Array(2*(s.end-s.start)),u=s.start;u<s.end;u++){var h=2*(u-s.start),c=i.get(a[0],u),d=n.dataToPoint(c);l[h]=d[0],l[h+1]=d[1]}i.setLayout("points",l)}:a.length===2&&(r=function(s){for(var l=new Float32Array(2*(s.end-s.start)),u=s.start;u<s.end;u++){var h=2*(u-s.start),c=i.get(a[0],u),d=i.get(a[1],u);o[0]=c,o[1]=d,o=n.dataToPoint(o),l[h]=o[0],l[h+1]=o[1]}i.setLayout("points",l)})}return{progress:r}}})});var si=Le.extend({type:"series.graphGL",visualStyleAccessPath:"itemStyle",hasSymbolVisual:!0,init:function(t){si.superApply(this,"init",arguments),this.legendDataProvider=function(){return this._categoriesData},this._updateCategoriesData()},mergeOption:function(t){si.superApply(this,"mergeOption",arguments),this._updateCategoriesData()},getFormattedLabel:function(t,e,r,n){var i=Nn.getFormattedLabel(this,t,e,r,n);if(i==null){var a=this.getData(),o=a.dimensions[a.dimensions.length-1];i=a.get(o,t)}return i},getInitialData:function(t,e){var r=t.edges||t.links||[],n=t.data||t.nodes||[],i=this;if(n&&r)return function(a,o,s,l,u){for(var h=new ud(!0),c=0;c<a.length;c++)h.addNode(tt(a[c].id,a[c].name,c),c);var d,f=[],m=[],p=0;for(c=0;c<o.length;c++){var g=o[c],_=g.source,y=g.target;h.addEdge(_,y,p)&&(m.push(g),f.push(tt(g.id,_+" > "+y)),p++)}var x=Ti(a,{coordDimensions:["value"]});(d=new Xe(x,s)).initData(a);var v=new Xe(["value"],s);return v.initData(m,f),u&&u(d,v),Vc({mainData:d,struct:h,structAttr:"graph",datas:{node:d,edge:v},datasAttr:{node:"data",edge:"edgeData"}}),h.update(),h}(n,r,this,0,function(a,o){a.wrapMethod("getItemModel",function(h){const c=i._categoriesModels[h.getShallow("category")];return c&&(c.parentModel=h.parentModel,h.parentModel=c),h});const s=e.getModel([]).getModel;function l(h,c){const d=s.call(this,h,c);return d.resolveParentPath=u,d}function u(h){if(h&&(h[0]==="label"||h[1]==="label")){const c=h.slice();return h[0]==="label"?c[0]="edgeLabel":h[1]==="label"&&(c[1]="edgeLabel"),c}return h}o.wrapMethod("getItemModel",function(h){return h.resolveParentPath=u,h.getModel=l,h})}).data},getGraph:function(){return this.getData().graph},getEdgeData:function(){return this.getGraph().edgeData},getCategoriesData:function(){return this._categoriesData},formatTooltip:function(t,e,r){if(r==="edge"){var n=this.getData(),i=this.getDataParams(t,r),a=n.graph.getEdgeByIndex(t),o=n.getName(a.node1.dataIndex),s=n.getName(a.node2.dataIndex),l=[];return o!=null&&l.push(o),s!=null&&l.push(s),l=gn(l.join(" > ")),i.value&&(l+=" : "+gn(i.value)),l}return si.superApply(this,"formatTooltip",arguments)},_updateCategoriesData:function(){var t=(this.option.categories||[]).map(function(r){return r.value!=null?r:Object.assign({value:0},r)}),e=new Xe(["value"],this);e.initData(t),this._categoriesData=e,this._categoriesModels=e.mapArray(function(r){return e.getItemModel(r,!0)})},setView:function(t){t.zoom!=null&&(this.option.zoom=t.zoom),t.offset!=null&&(this.option.offset=t.offset)},setNodePosition:function(t){for(var e=0;e<t.length/2;e++){var r=t[2*e],n=t[2*e+1],i=this.getData().getRawDataItem(e);i.x=r,i.y=n}},isAnimationEnabled:function(){return si.superCall(this,"isAnimationEnabled")&&!(this.get("layout")==="force"&&this.get("force.layoutAnimation"))},defaultOption:{zlevel:10,z:2,legendHoverLink:!0,layout:"forceAtlas2",forceAtlas2:{initLayout:null,GPU:!0,steps:1,maxSteps:1e3,repulsionByDegree:!0,linLogMode:!1,strongGravityMode:!1,gravity:1,edgeWeightInfluence:1,edgeWeight:[1,4],nodeWeight:[1,4],preventOverlap:!1,gravityCenter:null},focusNodeAdjacency:!0,focusNodeAdjacencyOn:"mouseover",left:"center",top:"center",symbol:"circle",symbolSize:5,roam:!1,center:null,zoom:1,label:{show:!1,formatter:"{b}",position:"right",distance:5,textStyle:{fontSize:14}},itemStyle:{},lineStyle:{color:"#aaa",width:1,opacity:.5},emphasis:{label:{show:!0}},animation:!1}});const rg=si;var Pt=At.vec2,Ju=[[0,0],[1,1]],xc=st.extend(function(){return{segmentScale:4,dynamic:!0,useNativeLine:!0,attributes:{position:new st.Attribute("position","float",2,"POSITION"),normal:new st.Attribute("normal","float",2),offset:new st.Attribute("offset","float",1),color:new st.Attribute("color","float",4,"COLOR")}}},{resetOffset:function(){this._vertexOffset=0,this._faceOffset=0,this._itemVertexOffsets=[]},setVertexCount:function(t){var e=this.attributes;this.vertexCount!==t&&(e.position.init(t),e.color.init(t),this.useNativeLine||(e.offset.init(t),e.normal.init(t)),t>65535?this.indices instanceof Uint16Array&&(this.indices=new Uint32Array(this.indices)):this.indices instanceof Uint32Array&&(this.indices=new Uint16Array(this.indices)))},setTriangleCount:function(t){this.triangleCount!==t&&(this.indices=t===0?null:this.vertexCount>65535?new Uint32Array(3*t):new Uint16Array(3*t))},_getCubicCurveApproxStep:function(t,e,r,n){return 1/(Pt.dist(t,e)+Pt.dist(r,e)+Pt.dist(n,r)+1)*this.segmentScale},getCubicCurveVertexCount:function(t,e,r,n){var i=this._getCubicCurveApproxStep(t,e,r,n),a=Math.ceil(1/i);return this.useNativeLine?2*a:2*a+2},getCubicCurveTriangleCount:function(t,e,r,n){var i=this._getCubicCurveApproxStep(t,e,r,n),a=Math.ceil(1/i);return this.useNativeLine?0:2*a},getLineVertexCount:function(){return this.getPolylineVertexCount(Ju)},getLineTriangleCount:function(){return this.getPolylineTriangleCount(Ju)},getPolylineVertexCount:function(t){var e;return e=typeof t=="number"?t:typeof t[0]!="number"?t.length:t.length/2,this.useNativeLine?2*(e-1):2*(e-1)+2},getPolylineTriangleCount:function(t){var e;return e=typeof t=="number"?t:typeof t[0]!="number"?t.length:t.length/2,this.useNativeLine?0:2*(e-1)},addCubicCurve:function(t,e,r,n,i,a){a==null&&(a=1);var o=t[0],s=t[1],l=e[0],u=e[1],h=r[0],c=r[1],d=n[0],f=n[1],m=this._getCubicCurveApproxStep(t,e,r,n),p=m*m,g=p*m,_=3*m,y=3*p,x=6*p,v=6*g,w=o-2*l+h,b=s-2*u+c,S=3*(l-h)-o+d,M=3*(u-c)-s+f,D=o,L=s,P=(l-o)*_+w*y+S*g,O=(u-s)*_+b*y+M*g,R=w*x+S*v,A=b*x+M*v,z=S*v,F=M*v,X=0,H=0,ut=Math.ceil(1/m),G=new Float32Array(3*(ut+1)),St=(G=[],0);for(H=0;H<ut+1;H++)G[St++]=D,G[St++]=L,D+=P,L+=O,P+=R,O+=A,R+=z,A+=F,(X+=m)>1&&(D=P>0?Math.min(D,d):Math.max(D,d),L=O>0?Math.min(L,f):Math.max(L,f));this.addPolyline(G,i,a)},addLine:function(t,e,r,n){this.addPolyline([t,e],r,n)},addPolyline:function(){var t=Pt.create(),e=Pt.create(),r=Pt.create(),n=Pt.create(),i=[],a=[],o=[];return function(s,l,u,h,c){if(s.length){var d=typeof s[0]!="number";if(c==null&&(c=d?s.length:s.length/2),!(c<2)){h==null&&(h=0),u==null&&(u=1),this._itemVertexOffsets.push(this._vertexOffset);for(var f,m=d?typeof l[0]!="number":l.length/4===c,p=this.attributes.position,g=this.attributes.color,_=this.attributes.offset,y=this.attributes.normal,x=this.indices,v=this._vertexOffset,w=0;w<c;w++){if(d)i=s[w+h],f=m?l[w+h]:l;else{var b=2*w+h;if((i=i||[])[0]=s[b],i[1]=s[b+1],m){var S=4*w+h;(f=f||[])[0]=l[S],f[1]=l[S+1],f[2]=l[S+2],f[3]=l[S+3]}else f=l}if(this.useNativeLine)w>1&&(p.copy(v,v-1),g.copy(v,v-1),v++);else{var M;if(w<c-1)if(d?Pt.copy(a,s[w+1]):(b=2*(w+1)+h,(a=a||[])[0]=s[b],a[1]=s[b+1]),w>0){Pt.sub(t,i,o),Pt.sub(e,a,i),Pt.normalize(t,t),Pt.normalize(e,e),Pt.add(n,t,e),Pt.normalize(n,n);var D=u/2*Math.min(1/Pt.dot(t,n),2);r[0]=-n[1],r[1]=n[0],M=D}else Pt.sub(t,a,i),Pt.normalize(t,t),r[0]=-t[1],r[1]=t[0],M=u/2;else Pt.sub(t,i,o),Pt.normalize(t,t),r[0]=-t[1],r[1]=t[0],M=u/2;y.set(v,r),y.set(v+1,r),_.set(v,M),_.set(v+1,-M),Pt.copy(o,i),p.set(v,i),p.set(v+1,i),g.set(v,f),g.set(v+1,f),v+=2}if(this.useNativeLine)g.set(v,f),p.set(v,i),v++;else if(w>0){var L=3*this._faceOffset;(x=this.indices)[L]=v-4,x[L+1]=v-3,x[L+2]=v-2,x[L+3]=v-3,x[L+4]=v-1,x[L+5]=v-2,this._faceOffset+=2}}this._vertexOffset=v}}}}(),setItemColor:function(t,e){for(var r=this._itemVertexOffsets[t],n=t<this._itemVertexOffsets.length-1?this._itemVertexOffsets[t+1]:this._vertexOffset,i=r;i<n;i++)this.attributes.color.set(i,e);this.dirty("color")}});xr(xc.prototype,Si);const bc=xc;T.Shader.import(`@export ecgl.forceAtlas2.updateNodeRepulsion

#define NODE_COUNT 0

uniform sampler2D positionTex;

uniform vec2 textureSize;
uniform float gravity;
uniform float scaling;
uniform vec2 gravityCenter;

uniform bool strongGravityMode;
uniform bool preventOverlap;

varying vec2 v_Texcoord;

void main() {

 vec4 n0 = texture2D(positionTex, v_Texcoord);

 vec2 force = vec2(0.0);
 for (int i = 0; i < NODE_COUNT; i++) {
 vec2 uv = vec2(
 mod(float(i), textureSize.x) / (textureSize.x - 1.0),
 floor(float(i) / textureSize.x) / (textureSize.y - 1.0)
 );
 vec4 n1 = texture2D(positionTex, uv);

 vec2 dir = n0.xy - n1.xy;
 float d2 = dot(dir, dir);

 if (d2 > 0.0) {
 float factor = 0.0;
 if (preventOverlap) {
 float d = sqrt(d2);
 d = d - n0.w - n1.w;
 if (d > 0.0) {
 factor = scaling * n0.z * n1.z / (d * d);
 }
 else if (d < 0.0) {
 factor = scaling * 100.0 * n0.z * n1.z;
 }
 }
 else {
 factor = scaling * n0.z * n1.z / d2;
 }
 force += dir * factor;
 }
 }

 vec2 dir = gravityCenter - n0.xy;
 float d = 1.0;
 if (!strongGravityMode) {
 d = length(dir);
 }

 force += dir * n0.z * gravity / (d + 1.0);

 gl_FragColor = vec4(force, 0.0, 1.0);
}
@end

@export ecgl.forceAtlas2.updateEdgeAttraction.vertex

attribute vec2 node1;
attribute vec2 node2;
attribute float weight;

uniform sampler2D positionTex;
uniform float edgeWeightInfluence;
uniform bool preventOverlap;
uniform bool linLogMode;

uniform vec2 windowSize: WINDOW_SIZE;

varying vec2 v_Force;

void main() {

 vec4 n0 = texture2D(positionTex, node1);
 vec4 n1 = texture2D(positionTex, node2);

 vec2 dir = n1.xy - n0.xy;
 float d = length(dir);
 float w;
 if (edgeWeightInfluence == 0.0) {
 w = 1.0;
 }
 else if (edgeWeightInfluence == 1.0) {
 w = weight;
 }
 else {
 w = pow(weight, edgeWeightInfluence);
 }
 vec2 offset = vec2(1.0 / windowSize.x, 1.0 / windowSize.y);
 vec2 scale = vec2((windowSize.x - 1.0) / windowSize.x, (windowSize.y - 1.0) / windowSize.y);
 vec2 pos = node1 * scale * 2.0 - 1.0;
 gl_Position = vec4(pos + offset, 0.0, 1.0);
 gl_PointSize = 1.0;

 float factor;
 if (preventOverlap) {
 d = d - n1.w - n0.w;
 }
 if (d <= 0.0) {
 v_Force = vec2(0.0);
 return;
 }

 if (linLogMode) {
 factor = w * log(d) / d;
 }
 else {
 factor = w;
 }
 v_Force = dir * factor;
}
@end

@export ecgl.forceAtlas2.updateEdgeAttraction.fragment

varying vec2 v_Force;

void main() {
 gl_FragColor = vec4(v_Force, 0.0, 0.0);
}
@end

@export ecgl.forceAtlas2.calcWeightedSum.vertex

attribute vec2 node;

varying vec2 v_NodeUv;

void main() {

 v_NodeUv = node;
 gl_Position = vec4(0.0, 0.0, 0.0, 1.0);
 gl_PointSize = 1.0;
}
@end

@export ecgl.forceAtlas2.calcWeightedSum.fragment

varying vec2 v_NodeUv;

uniform sampler2D positionTex;
uniform sampler2D forceTex;
uniform sampler2D forcePrevTex;

void main() {
 vec2 force = texture2D(forceTex, v_NodeUv).rg;
 vec2 forcePrev = texture2D(forcePrevTex, v_NodeUv).rg;

 float mass = texture2D(positionTex, v_NodeUv).z;
 float swing = length(force - forcePrev) * mass;
 float traction = length(force + forcePrev) * 0.5 * mass;

 gl_FragColor = vec4(swing, traction, 0.0, 0.0);
}
@end

@export ecgl.forceAtlas2.calcGlobalSpeed

uniform sampler2D globalSpeedPrevTex;
uniform sampler2D weightedSumTex;
uniform float jitterTolerence;

void main() {
 vec2 weightedSum = texture2D(weightedSumTex, vec2(0.5)).xy;
 float prevGlobalSpeed = texture2D(globalSpeedPrevTex, vec2(0.5)).x;
 float globalSpeed = jitterTolerence * jitterTolerence
 * weightedSum.y / weightedSum.x;
 if (prevGlobalSpeed > 0.0) {
 globalSpeed = min(globalSpeed / prevGlobalSpeed, 1.5) * prevGlobalSpeed;
 }
 gl_FragColor = vec4(globalSpeed, 0.0, 0.0, 1.0);
}
@end

@export ecgl.forceAtlas2.updatePosition

uniform sampler2D forceTex;
uniform sampler2D forcePrevTex;
uniform sampler2D positionTex;
uniform sampler2D globalSpeedTex;

varying vec2 v_Texcoord;

void main() {
 vec2 force = texture2D(forceTex, v_Texcoord).xy;
 vec2 forcePrev = texture2D(forcePrevTex, v_Texcoord).xy;
 vec4 node = texture2D(positionTex, v_Texcoord);

 float globalSpeed = texture2D(globalSpeedTex, vec2(0.5)).r;
 float swing = length(force - forcePrev);
 float speed = 0.1 * globalSpeed / (0.1 + globalSpeed * sqrt(swing));

 float df = length(force);
 if (df > 0.0) {
 speed = min(df * speed, 10.0) / df;

 gl_FragColor = vec4(node.xy + speed * force, node.zw);
 }
 else {
 gl_FragColor = node;
 }
}
@end

@export ecgl.forceAtlas2.edges.vertex
uniform mat4 worldViewProjection : WORLDVIEWPROJECTION;

attribute vec2 node;
attribute vec4 a_Color : COLOR;
varying vec4 v_Color;

uniform sampler2D positionTex;

void main()
{
 gl_Position = worldViewProjection * vec4(
 texture2D(positionTex, node).xy, -10.0, 1.0
 );
 v_Color = a_Color;
}
@end

@export ecgl.forceAtlas2.edges.fragment
uniform vec4 color : [1.0, 1.0, 1.0, 1.0];
varying vec4 v_Color;
void main() {
 gl_FragColor = color * v_Color;
}
@end`);var Vo={repulsionByDegree:!0,linLogMode:!1,strongGravityMode:!1,gravity:1,scaling:1,edgeWeightInfluence:1,jitterTolerence:.1,preventOverlap:!1,dissuadeHubs:!1,gravityCenter:null};function Nt(t){var e={type:T.Texture.FLOAT,minFilter:T.Texture.NEAREST,magFilter:T.Texture.NEAREST};this._positionSourceTex=new T.Texture2D(e),this._positionSourceTex.flipY=!1,this._positionTex=new T.Texture2D(e),this._positionPrevTex=new T.Texture2D(e),this._forceTex=new T.Texture2D(e),this._forcePrevTex=new T.Texture2D(e),this._weightedSumTex=new T.Texture2D(e),this._weightedSumTex.width=this._weightedSumTex.height=1,this._globalSpeedTex=new T.Texture2D(e),this._globalSpeedPrevTex=new T.Texture2D(e),this._globalSpeedTex.width=this._globalSpeedTex.height=1,this._globalSpeedPrevTex.width=this._globalSpeedPrevTex.height=1,this._nodeRepulsionPass=new Lt({fragment:T.Shader.source("ecgl.forceAtlas2.updateNodeRepulsion")}),this._positionPass=new Lt({fragment:T.Shader.source("ecgl.forceAtlas2.updatePosition")}),this._globalSpeedPass=new Lt({fragment:T.Shader.source("ecgl.forceAtlas2.calcGlobalSpeed")}),this._copyPass=new Lt({fragment:T.Shader.source("clay.compositor.output")});var r=function(n){n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ONE)};this._edgeForceMesh=new T.Mesh({geometry:new T.Geometry({attributes:{node1:new T.Geometry.Attribute("node1","float",2),node2:new T.Geometry.Attribute("node2","float",2),weight:new T.Geometry.Attribute("weight","float",1)},dynamic:!0,mainAttribute:"node1"}),material:new T.Material({transparent:!0,shader:T.createShader("ecgl.forceAtlas2.updateEdgeAttraction"),blend:r,depthMask:!1,depthText:!1}),mode:T.Mesh.POINTS}),this._weightedSumMesh=new T.Mesh({geometry:new T.Geometry({attributes:{node:new T.Geometry.Attribute("node","float",2)},dynamic:!0,mainAttribute:"node"}),material:new T.Material({transparent:!0,shader:T.createShader("ecgl.forceAtlas2.calcWeightedSum"),blend:r,depthMask:!1,depthText:!1}),mode:T.Mesh.POINTS}),this._framebuffer=new jt({depthBuffer:!1}),this._dummyCamera=new T.OrthographicCamera({left:-1,right:1,top:1,bottom:-1,near:0,far:100}),this._globalSpeed=0}Nt.prototype.updateOption=function(t){for(var e in Vo)this[e]=Vo[e];var r=this._nodes.length;if(this.jitterTolerence=r>5e4?10:r>5e3?1:.1,this.scaling=r>100?2:10,t)for(var e in Vo)t[e]!=null&&(this[e]=t[e]);if(this.repulsionByDegree)for(var n=this._positionSourceTex.pixels,i=0;i<this._nodes.length;i++)n[4*i+2]=(this._nodes[i].degree||0)+1},Nt.prototype._updateGravityCenter=function(t){var e=this._nodes,r=this._edges;if(this.gravityCenter)this._gravityCenter=this.gravityCenter;else{for(var n=[1/0,1/0],i=[-1/0,-1/0],a=0;a<e.length;a++)n[0]=Math.min(e[a].x,n[0]),n[1]=Math.min(e[a].y,n[1]),i[0]=Math.max(e[a].x,i[0]),i[1]=Math.max(e[a].y,i[1]);this._gravityCenter=[.5*(n[0]+i[0]),.5*(n[1]+i[1])]}for(a=0;a<r.length;a++){var o=r[a].node1,s=r[a].node2;e[o].degree=(e[o].degree||0)+1,e[s].degree=(e[s].degree||0)+1}},Nt.prototype.initData=function(t,e){this._nodes=t,this._edges=e,this._updateGravityCenter();var r=Math.ceil(Math.sqrt(t.length)),n=r,i=new Float32Array(r*n*4);this._resize(r,n);for(var a=0,o=0;o<t.length;o++){var s=t[o];i[a++]=s.x||0,i[a++]=s.y||0,i[a++]=s.mass||1,i[a++]=s.size||1}this._positionSourceTex.pixels=i;var l=this._edgeForceMesh.geometry,u=e.length;l.attributes.node1.init(2*u),l.attributes.node2.init(2*u),l.attributes.weight.init(2*u);var h=[];for(o=0;o<e.length;o++){var c=l.attributes,d=e[o].weight;d==null&&(d=1),c.node1.set(o,this.getNodeUV(e[o].node1,h)),c.node2.set(o,this.getNodeUV(e[o].node2,h)),c.weight.set(o,d),c.node1.set(o+u,this.getNodeUV(e[o].node2,h)),c.node2.set(o+u,this.getNodeUV(e[o].node1,h)),c.weight.set(o+u,d)}var f=this._weightedSumMesh.geometry;for(f.attributes.node.init(t.length),o=0;o<t.length;o++)f.attributes.node.set(o,this.getNodeUV(o,h));l.dirty(),f.dirty(),this._nodeRepulsionPass.material.define("fragment","NODE_COUNT",t.length),this._nodeRepulsionPass.material.setUniform("textureSize",[r,n]),this._inited=!1,this._frame=0},Nt.prototype.getNodes=function(){return this._nodes},Nt.prototype.getEdges=function(){return this._edges},Nt.prototype.step=function(t){this._inited||(this._initFromSource(t),this._inited=!0),this._frame++,this._framebuffer.attach(this._forceTex),this._framebuffer.bind(t);var e=this._nodeRepulsionPass;e.setUniform("strongGravityMode",this.strongGravityMode),e.setUniform("gravity",this.gravity),e.setUniform("gravityCenter",this._gravityCenter),e.setUniform("scaling",this.scaling),e.setUniform("preventOverlap",this.preventOverlap),e.setUniform("positionTex",this._positionPrevTex),e.render(t);var r=this._edgeForceMesh;r.material.set("linLogMode",this.linLogMode),r.material.set("edgeWeightInfluence",this.edgeWeightInfluence),r.material.set("preventOverlap",this.preventOverlap),r.material.set("positionTex",this._positionPrevTex),t.gl.enable(t.gl.BLEND),t.renderPass([r],this._dummyCamera),this._framebuffer.attach(this._weightedSumTex),t.gl.clearColor(0,0,0,0),t.gl.clear(t.gl.COLOR_BUFFER_BIT),t.gl.enable(t.gl.BLEND);var n=this._weightedSumMesh;n.material.set("positionTex",this._positionPrevTex),n.material.set("forceTex",this._forceTex),n.material.set("forcePrevTex",this._forcePrevTex),t.renderPass([n],this._dummyCamera),this._framebuffer.attach(this._globalSpeedTex);var i=this._globalSpeedPass;i.setUniform("globalSpeedPrevTex",this._globalSpeedPrevTex),i.setUniform("weightedSumTex",this._weightedSumTex),i.setUniform("jitterTolerence",this.jitterTolerence),t.gl.disable(t.gl.BLEND),i.render(t);var a=this._positionPass;this._framebuffer.attach(this._positionTex),a.setUniform("globalSpeedTex",this._globalSpeedTex),a.setUniform("positionTex",this._positionPrevTex),a.setUniform("forceTex",this._forceTex),a.setUniform("forcePrevTex",this._forcePrevTex),a.render(t),this._framebuffer.unbind(t),this._swapTexture()},Nt.prototype.update=function(t,e,r){e==null&&(e=1),e=Math.max(e,1);for(var n=0;n<e;n++)this.step(t);r&&r()},Nt.prototype.getNodePositionTexture=function(){return this._inited?this._positionPrevTex:this._positionSourceTex},Nt.prototype.getNodeUV=function(t,e){e=e||[];var r=this._positionTex.width,n=this._positionTex.height;return e[0]=t%r/(r-1),e[1]=Math.floor(t/r)/(n-1)||0,e},Nt.prototype.getNodePosition=function(t,e){var r=this._positionArr,n=this._positionTex.width,i=this._positionTex.height,a=n*i;r&&r.length===4*a||(r=this._positionArr=new Float32Array(4*a)),this._framebuffer.bind(t),this._framebuffer.attach(this._positionPrevTex),t.gl.readPixels(0,0,n,i,t.gl.RGBA,t.gl.FLOAT,r),this._framebuffer.unbind(t),e||(e=new Float32Array(2*this._nodes.length));for(var o=0;o<this._nodes.length;o++)e[2*o]=r[4*o],e[2*o+1]=r[4*o+1];return e},Nt.prototype.getTextureData=function(t,e){var r=this["_"+e+"Tex"],n=r.width,i=r.height;this._framebuffer.bind(t),this._framebuffer.attach(r);var a=new Float32Array(n*i*4);return t.gl.readPixels(0,0,n,i,t.gl.RGBA,t.gl.FLOAT,a),this._framebuffer.unbind(t),a},Nt.prototype.getTextureSize=function(){return{width:this._positionTex.width,height:this._positionTex.height}},Nt.prototype.isFinished=function(t){return this._frame>t},Nt.prototype._swapTexture=function(){var t=this._positionPrevTex;this._positionPrevTex=this._positionTex,this._positionTex=t,t=this._forcePrevTex,this._forcePrevTex=this._forceTex,this._forceTex=t,t=this._globalSpeedPrevTex,this._globalSpeedPrevTex=this._globalSpeedTex,this._globalSpeedTex=t},Nt.prototype._initFromSource=function(t){this._framebuffer.attach(this._positionPrevTex),this._framebuffer.bind(t),this._copyPass.setUniform("texture",this._positionSourceTex),this._copyPass.render(t),t.gl.clearColor(0,0,0,0),this._framebuffer.attach(this._forcePrevTex),t.gl.clear(t.gl.COLOR_BUFFER_BIT),this._framebuffer.attach(this._globalSpeedPrevTex),t.gl.clear(t.gl.COLOR_BUFFER_BIT),this._framebuffer.unbind(t)},Nt.prototype._resize=function(t,e){["_positionSourceTex","_positionTex","_positionPrevTex","_forceTex","_forcePrevTex"].forEach(function(r){this[r].width=t,this[r].height=e,this[r].dirty()},this)},Nt.prototype.dispose=function(t){this._framebuffer.dispose(t),this._copyPass.dispose(t),this._nodeRepulsionPass.dispose(t),this._positionPass.dispose(t),this._globalSpeedPass.dispose(t),this._edgeForceMesh.geometry.dispose(t),this._weightedSumMesh.geometry.dispose(t),this._positionSourceTex.dispose(t),this._positionTex.dispose(t),this._positionPrevTex.dispose(t),this._forceTex.dispose(t),this._forcePrevTex.dispose(t),this._weightedSumTex.dispose(t),this._globalSpeedTex.dispose(t),this._globalSpeedPrevTex.dispose(t)};var li=function(){var t=function(){return new Float32Array(2)},e=function(p,g){var _=g[0]-p[0],y=g[1]-p[1];return Math.sqrt(_*_+y*y)},r=function(p){var g=p[0],_=p[1];return Math.sqrt(g*g+_*_)},n=function(p,g,_,y){return p[0]=g[0]+_[0]*y,p[1]=g[1]+_[1]*y,p},i=function(p,g,_){return p[0]=g[0]+_[0],p[1]=g[1]+_[1],p},a=function(p,g,_){return p[0]=g[0]-_[0],p[1]=g[1]-_[1],p};function o(){this.subRegions=[],this.nSubRegions=0,this.node=null,this.mass=0,this.centerOfMass=null,this.bbox=new Float32Array(4),this.size=0}var s=o.prototype;function l(){this.position=new Float32Array(2),this.force=t(),this.forcePrev=t(),this.mass=1,this.inDegree=0,this.outDegree=0}function u(p,g){this.source=p,this.target=g,this.weight=1}function h(){this.autoSettings=!0,this.barnesHutOptimize=!0,this.barnesHutTheta=1.5,this.repulsionByDegree=!0,this.linLogMode=!1,this.strongGravityMode=!1,this.gravity=1,this.scaling=1,this.edgeWeightInfluence=1,this.jitterTolerence=.1,this.preventOverlap=!1,this.dissuadeHubs=!1,this.rootRegion=new o,this.rootRegion.centerOfMass=t(),this.nodes=[],this.edges=[],this.bbox=new Float32Array(4),this.gravityCenter=null,this._massArr=null,this._swingingArr=null,this._sizeArr=null,this._globalSpeed=0}s.beforeUpdate=function(){for(var p=0;p<this.nSubRegions;p++)this.subRegions[p].beforeUpdate();this.mass=0,this.centerOfMass&&(this.centerOfMass[0]=0,this.centerOfMass[1]=0),this.nSubRegions=0,this.node=null},s.afterUpdate=function(){this.subRegions.length=this.nSubRegions;for(var p=0;p<this.nSubRegions;p++)this.subRegions[p].afterUpdate()},s.addNode=function(p){if(this.nSubRegions===0){if(this.node==null)return void(this.node=p);this._addNodeToSubRegion(this.node),this.node=null}this._addNodeToSubRegion(p),this._updateCenterOfMass(p)},s.findSubRegion=function(p,g){for(var _=0;_<this.nSubRegions;_++){var y=this.subRegions[_];if(y.contain(p,g))return y}},s.contain=function(p,g){return this.bbox[0]<=p&&this.bbox[2]>=p&&this.bbox[1]<=g&&this.bbox[3]>=g},s.setBBox=function(p,g,_,y){this.bbox[0]=p,this.bbox[1]=g,this.bbox[2]=_,this.bbox[3]=y,this.size=(_-p+y-g)/2},s._newSubRegion=function(){var p=this.subRegions[this.nSubRegions];return p||(p=new o,this.subRegions[this.nSubRegions]=p),this.nSubRegions++,p},s._addNodeToSubRegion=function(p){var g=this.findSubRegion(p.position[0],p.position[1]),_=this.bbox;if(!g){var y=(_[0]+_[2])/2,x=(_[1]+_[3])/2,v=(_[2]-_[0])/2,w=(_[3]-_[1])/2,b=p.position[0]>=y?1:0,S=p.position[1]>=x?1:0;(g=this._newSubRegion()).setBBox(b*v+_[0],S*w+_[1],(b+1)*v+_[0],(S+1)*w+_[1])}g.addNode(p)},s._updateCenterOfMass=function(p){this.centerOfMass==null&&(this.centerOfMass=new Float32Array(2));var g=this.centerOfMass[0]*this.mass,_=this.centerOfMass[1]*this.mass;g+=p.position[0]*p.mass,_+=p.position[1]*p.mass,this.mass+=p.mass,this.centerOfMass[0]=g/this.mass,this.centerOfMass[1]=_/this.mass};var c,d,f=h.prototype;f.initNodes=function(p,g,_){var y=g.length;this.nodes.length=0;for(var x=_!==void 0,v=0;v<y;v++){var w=new l;w.position[0]=p[2*v],w.position[1]=p[2*v+1],w.mass=g[v],x&&(w.size=_[v]),this.nodes.push(w)}this._massArr=g,this._swingingArr=new Float32Array(y),x&&(this._sizeArr=_)},f.initEdges=function(p,g){var _=p.length/2;this.edges.length=0;for(var y=0;y<_;y++){var x=p[2*y],v=p[2*y+1],w=this.nodes[x],b=this.nodes[v];if(!w||!b)return void console.error("Node not exists, try initNodes before initEdges");w.outDegree++,b.inDegree++;var S=new u(w,b);g&&(S.weight=g[y]),this.edges.push(S)}},f.updateSettings=function(){if(this.repulsionByDegree)for(var p=0;p<this.nodes.length;p++)(g=this.nodes[p]).mass=g.inDegree+g.outDegree+1;else for(p=0;p<this.nodes.length;p++){var g;(g=this.nodes[p]).mass=this._massArr[p]}},f.update=function(){var p,g,_,y,x,v=this.nodes.length;if(this.updateSettings(),this.updateBBox(),this.barnesHutOptimize){this.rootRegion.setBBox(this.bbox[0],this.bbox[1],this.bbox[2],this.bbox[3]),this.rootRegion.beforeUpdate();for(var w=0;w<v;w++)this.rootRegion.addNode(this.nodes[w]);this.rootRegion.afterUpdate()}for(w=0;w<v;w++){var b=this.nodes[w];p=b.forcePrev,g=b.force,p[0]=g[0],p[1]=g[1],_=b.force,y=0,x=0,_[0]=y,_[1]=x}for(w=0;w<v;w++){var S=this.nodes[w];if(this.barnesHutOptimize)this.applyRegionToNodeRepulsion(this.rootRegion,S);else for(var M=w+1;M<v;M++){var D=this.nodes[M];this.applyNodeToNodeRepulsion(S,D,!1)}this.gravity>0&&(this.strongGravityMode?this.applyNodeStrongGravity(S):this.applyNodeGravity(S))}for(w=0;w<this.edges.length;w++)this.applyEdgeAttraction(this.edges[w]);var L=0,P=0,O=t();for(w=0;w<v;w++)b=this.nodes[w],L+=(A=e(b.force,b.forcePrev))*b.mass,i(O,b.force,b.forcePrev),P+=.5*r(O)*b.mass,this._swingingArr[w]=A;var R=this.jitterTolerence*this.jitterTolerence*P/L;for(this._globalSpeed>0&&(R=Math.min(R/this._globalSpeed,1.5)*this._globalSpeed),this._globalSpeed=R,w=0;w<v;w++){b=this.nodes[w];var A=this._swingingArr[w],z=.1*R/(1+R*Math.sqrt(A)),F=r(b.force);F>0&&(z=Math.min(F*z,10)/F,n(b.position,b.position,b.force,z))}},f.applyRegionToNodeRepulsion=(c=t(),function(p,g){if(p.node)this.applyNodeToNodeRepulsion(p.node,g,!0);else{a(c,g.position,p.centerOfMass);var _=c[0]*c[0]+c[1]*c[1];if(_>this.barnesHutTheta*p.size*p.size){var y=this.scaling*g.mass*p.mass/_;n(g.force,g.force,c,y)}else for(var x=0;x<p.nSubRegions;x++)this.applyRegionToNodeRepulsion(p.subRegions[x],g)}}),f.applyNodeToNodeRepulsion=(d=t(),function(p,g,_){if(p!=g){a(d,p.position,g.position);var y=d[0]*d[0]+d[1]*d[1];if(y!==0){var x;if(this.preventOverlap){var v=Math.sqrt(y);if((v=v-p.size-g.size)>0)x=this.scaling*p.mass*g.mass/(v*v);else{if(!(v<0))return;x=100*this.scaling*p.mass*g.mass}}else x=this.scaling*p.mass*g.mass/y;n(p.force,p.force,d,x),n(g.force,g.force,d,-x)}}}),f.applyEdgeAttraction=function(){var p=t();return function(g){var _=g.source,y=g.target;a(p,_.position,y.position);var x,v,w=r(p);x=this.edgeWeightInfluence===0?1:this.edgeWeightInfluence===1?g.weight:Math.pow(g.weight,this.edgeWeightInfluence),this.preventOverlap&&(w=w-_.size-y.size)<=0||(v=this.linLogMode?-x*Math.log(w+1)/(w+1):-x,n(_.force,_.force,p,v),n(y.force,y.force,p,-v))}}(),f.applyNodeGravity=function(){var p=t();return function(g){a(p,this.gravityCenter,g.position);var _=r(p);n(g.force,g.force,p,this.gravity*g.mass/(_+1))}}(),f.applyNodeStrongGravity=function(){var p=t();return function(g){a(p,this.gravityCenter,g.position),n(g.force,g.force,p,this.gravity*g.mass)}}(),f.updateBBox=function(){for(var p=1/0,g=1/0,_=-1/0,y=-1/0,x=0;x<this.nodes.length;x++){var v=this.nodes[x].position;p=Math.min(p,v[0]),g=Math.min(g,v[1]),_=Math.max(_,v[0]),y=Math.max(y,v[1])}this.bbox[0]=p,this.bbox[1]=g,this.bbox[2]=_,this.bbox[3]=y},f.getGlobalSpeed=function(){return this._globalSpeed};var m=null;self.onmessage=function(p){switch(p.data.cmd){case"init":(m=new h).initNodes(p.data.nodesPosition,p.data.nodesMass,p.data.nodesSize),m.initEdges(p.data.edges,p.data.edgesWeight);break;case"updateConfig":if(m)for(var g in p.data.config)m[g]=p.data.config[g];break;case"update":var _=p.data.steps;if(m){for(var y=0;y<_;y++)m.update();var x=m.nodes.length,v=new Float32Array(2*x);for(y=0;y<x;y++){var w=m.nodes[y];v[2*y]=w.position[0],v[2*y+1]=w.position[1]}self.postMessage({buffer:v.buffer,globalSpeed:m.getGlobalSpeed()},[v.buffer])}else{var b=new Float32Array;self.postMessage({buffer:b.buffer,globalSpeed:m.getGlobalSpeed()},[b.buffer])}}}}.toString();li=li.slice(li.indexOf("{")+1,li.lastIndexOf("}"));var di={barnesHutOptimize:!0,barnesHutTheta:1.5,repulsionByDegree:!0,linLogMode:!1,strongGravityMode:!1,gravity:1,scaling:1,edgeWeightInfluence:1,jitterTolerence:.1,preventOverlap:!1,dissuadeHubs:!1,gravityCenter:null},ue=function(t){for(var e in di)this[e]=di[e];if(t)for(var e in t)this[e]=t[e];this._nodes=[],this._edges=[],this._disposed=!1,this._positionTex=new K({type:V.FLOAT,flipY:!1,minFilter:V.NEAREST,magFilter:V.NEAREST})};ue.prototype.initData=function(t,e){var r=new Blob([li]),n=window.URL.createObjectURL(r);this._worker=new Worker(n),this._worker.onmessage=this._$onupdate.bind(this),this._nodes=t,this._edges=e,this._frame=0;for(var i=t.length,a=e.length,o=new Float32Array(2*i),s=new Float32Array(i),l=new Float32Array(i),u=new Float32Array(2*a),h=new Float32Array(a),c=0;c<t.length;c++){var d=t[c];o[2*c]=d.x,o[2*c+1]=d.y,s[c]=d.mass==null?1:d.mass,l[c]=d.size==null?1:d.size}for(c=0;c<e.length;c++){var f=e[c],m=f.node1,p=f.node2;u[2*c]=m,u[2*c+1]=p,h[c]=f.weight==null?1:f.weight}var g=Math.ceil(Math.sqrt(t.length)),_=g,y=new Float32Array(g*_*4),x=this._positionTex;x.width=g,x.height=_,x.pixels=y,this._worker.postMessage({cmd:"init",nodesPosition:o,nodesMass:s,nodesSize:l,edges:u,edgesWeight:h}),this._globalSpeed=1/0},ue.prototype.updateOption=function(t){var e={};for(var r in di)e[r]=di[r];var n=this._nodes,i=this._edges,a=n.length;if(e.jitterTolerence=a>5e4?10:a>5e3?1:.1,e.scaling=a>100?2:10,e.barnesHutOptimize=a>1e3,t)for(var r in di)t[r]!=null&&(e[r]=t[r]);if(!e.gravityCenter){for(var o=[1/0,1/0],s=[-1/0,-1/0],l=0;l<n.length;l++)o[0]=Math.min(n[l].x,o[0]),o[1]=Math.min(n[l].y,o[1]),s[0]=Math.max(n[l].x,s[0]),s[1]=Math.max(n[l].y,s[1]);e.gravityCenter=[.5*(o[0]+s[0]),.5*(o[1]+s[1])]}for(l=0;l<i.length;l++){var u=i[l].node1,h=i[l].node2;n[u].degree=(n[u].degree||0)+1,n[h].degree=(n[h].degree||0)+1}this._worker&&this._worker.postMessage({cmd:"updateConfig",config:e})},ue.prototype.update=function(t,e,r){e==null&&(e=1),e=Math.max(e,1),this._frame+=e,this._onupdate=r,this._worker&&this._worker.postMessage({cmd:"update",steps:Math.round(e)})},ue.prototype._$onupdate=function(t){if(!this._disposed){var e=new Float32Array(t.data.buffer);this._globalSpeed=t.data.globalSpeed,this._positionArr=e,this._updateTexture(e),this._onupdate&&this._onupdate()}},ue.prototype.getNodePositionTexture=function(){return this._positionTex},ue.prototype.getNodeUV=function(t,e){e=e||[];var r=this._positionTex.width,n=this._positionTex.height;return e[0]=t%r/(r-1),e[1]=Math.floor(t/r)/(n-1),e},ue.prototype.getNodes=function(){return this._nodes},ue.prototype.getEdges=function(){return this._edges},ue.prototype.isFinished=function(t){return this._frame>t},ue.prototype.getNodePosition=function(t,e){if(e||(e=new Float32Array(2*this._nodes.length)),this._positionArr)for(var r=0;r<this._positionArr.length;r++)e[r]=this._positionArr[r];return e},ue.prototype._updateTexture=function(t){for(var e=this._positionTex.pixels,r=0,n=0;n<t.length;)e[r++]=t[n++],e[r++]=t[n++],e[r++]=1,e[r++]=1;this._positionTex.dirty()},ue.prototype.dispose=function(t){this._disposed=!0,this._worker=null};const Qu=ue;var ng=$t.extend(function(){return{zr:null,viewGL:null,minZoom:.2,maxZoom:5,_needsUpdate:!1,_dx:0,_dy:0,_zoom:1}},function(){this._mouseDownHandler=this._mouseDownHandler.bind(this),this._mouseWheelHandler=this._mouseWheelHandler.bind(this),this._mouseMoveHandler=this._mouseMoveHandler.bind(this),this._mouseUpHandler=this._mouseUpHandler.bind(this),this._update=this._update.bind(this)},{init:function(){var t=this.zr;t.on("mousedown",this._mouseDownHandler),t.on("mousewheel",this._mouseWheelHandler),t.on("globalout",this._mouseUpHandler),t.animation.on("frame",this._update)},setTarget:function(t){this._target=t},setZoom:function(t){this._zoom=Math.max(Math.min(t,this.maxZoom),this.minZoom),this._needsUpdate=!0},setOffset:function(t){this._dx=t[0],this._dy=t[1],this._needsUpdate=!0},getZoom:function(){return this._zoom},getOffset:function(){return[this._dx,this._dy]},_update:function(){if(this._target&&this._needsUpdate){var t=this._target,e=this._zoom;t.position.x=this._dx,t.position.y=this._dy,t.scale.set(e,e,e),this.zr.refresh(),this._needsUpdate=!1,this.trigger("update")}},_mouseDownHandler:function(t){if(!t.target){var e=t.offsetX,r=t.offsetY;if(!this.viewGL||this.viewGL.containPoint(e,r)){this.zr.on("mousemove",this._mouseMoveHandler),this.zr.on("mouseup",this._mouseUpHandler);var n=this._convertPos(e,r);this._x=n.x,this._y=n.y}}},_convertPos:function(t,e){var r=this.viewGL.camera,n=this.viewGL.viewport;return{x:(t-n.x)/n.width*(r.right-r.left)+r.left,y:(e-n.y)/n.height*(r.bottom-r.top)+r.top}},_mouseMoveHandler:function(t){var e=this._convertPos(t.offsetX,t.offsetY);this._dx+=e.x-this._x,this._dy+=e.y-this._y,this._x=e.x,this._y=e.y,this._needsUpdate=!0},_mouseUpHandler:function(t){this.zr.off("mousemove",this._mouseMoveHandler),this.zr.off("mouseup",this._mouseUpHandler)},_mouseWheelHandler:function(t){var e=(t=t.event).wheelDelta||-t.detail;if(e!==0){var r=t.offsetX,n=t.offsetY;if(!this.viewGL||this.viewGL.containPoint(r,n)){var i=e>0?1.1:.9,a=Math.max(Math.min(this._zoom*i,this.maxZoom),this.minZoom);i=a/this._zoom;var o=this._convertPos(r,n),s=(o.x-this._dx)*(i-1),l=(o.y-this._dy)*(i-1);this._dx-=s,this._dy-=l,this._zoom=a,this._needsUpdate=!0}}},dispose:function(){var t=this.zr;t.off("mousedown",this._mouseDownHandler),t.off("mousemove",this._mouseMoveHandler),t.off("mouseup",this._mouseUpHandler),t.off("mousewheel",this._mouseWheelHandler),t.off("globalout",this._mouseUpHandler),t.animation.off("frame",this._update)}});const ig=ng;var Qi=At.vec2;T.Shader.import(`@export ecgl.lines2D.vertex

uniform mat4 worldViewProjection : WORLDVIEWPROJECTION;

attribute vec2 position: POSITION;
attribute vec4 a_Color : COLOR;
varying vec4 v_Color;

#ifdef POSITIONTEXTURE_ENABLED
uniform sampler2D positionTexture;
#endif

void main()
{
 gl_Position = worldViewProjection * vec4(position, -10.0, 1.0);

 v_Color = a_Color;
}

@end

@export ecgl.lines2D.fragment

uniform vec4 color : [1.0, 1.0, 1.0, 1.0];

varying vec4 v_Color;

void main()
{
 gl_FragColor = color * v_Color;
}
@end


@export ecgl.meshLines2D.vertex

attribute vec2 position: POSITION;
attribute vec2 normal;
attribute float offset;
attribute vec4 a_Color : COLOR;

uniform mat4 worldViewProjection : WORLDVIEWPROJECTION;
uniform vec4 viewport : VIEWPORT;

varying vec4 v_Color;
varying float v_Miter;

void main()
{
 vec4 p2 = worldViewProjection * vec4(position + normal, -10.0, 1.0);
 gl_Position = worldViewProjection * vec4(position, -10.0, 1.0);

 p2.xy /= p2.w;
 gl_Position.xy /= gl_Position.w;

 vec2 N = normalize(p2.xy - gl_Position.xy);
 gl_Position.xy += N * offset / viewport.zw * 2.0;

 gl_Position.xy *= gl_Position.w;

 v_Color = a_Color;
}
@end


@export ecgl.meshLines2D.fragment

uniform vec4 color : [1.0, 1.0, 1.0, 1.0];

varying vec4 v_Color;
varying float v_Miter;

void main()
{
 gl_FragColor = color * v_Color;
}

@end`);var ag=1;const og=Pe.extend({type:"graphGL",__ecgl__:!0,init:function(t,e){this.groupGL=new T.Node,this.viewGL=new dt("orthographic"),this.viewGL.camera.left=this.viewGL.camera.right=0,this.viewGL.add(this.groupGL),this._pointsBuilder=new Zr(!0,e),this._forceEdgesMesh=new T.Mesh({material:new T.Material({shader:T.createShader("ecgl.forceAtlas2.edges"),transparent:!0,depthMask:!1,depthTest:!1}),$ignorePicking:!0,geometry:new T.Geometry({attributes:{node:new T.Geometry.Attribute("node","float",2),color:new T.Geometry.Attribute("color","float",4,"COLOR")},dynamic:!0,mainAttribute:"node"}),renderOrder:-1,mode:T.Mesh.LINES}),this._edgesMesh=new T.Mesh({material:new T.Material({shader:T.createShader("ecgl.meshLines2D"),transparent:!0,depthMask:!1,depthTest:!1}),$ignorePicking:!0,geometry:new bc({useNativeLine:!1,dynamic:!0}),renderOrder:-1,culling:!1}),this._layoutId=0,this._control=new ig({zr:e.getZr(),viewGL:this.viewGL}),this._control.setTarget(this.groupGL),this._control.init(),this._clickHandler=this._clickHandler.bind(this)},render:function(t,e,r){this.groupGL.add(this._pointsBuilder.rootNode),this._model=t,this._api=r,this._initLayout(t,e,r),this._pointsBuilder.update(t,e,r),this._forceLayoutInstance instanceof Nt||this.groupGL.remove(this._forceEdgesMesh),this._updateCamera(t,r),this._control.off("update"),this._control.on("update",function(){r.dispatchAction({type:"graphGLRoam",seriesId:t.id,zoom:this._control.getZoom(),offset:this._control.getOffset()}),this._pointsBuilder.updateView(this.viewGL.camera)},this),this._control.setZoom(tt(t.get("zoom"),1)),this._control.setOffset(t.get("offset")||[0,0]);var n=this._pointsBuilder.getPointsMesh();if(n.off("mousemove",this._mousemoveHandler),n.off("mouseout",this._mouseOutHandler,this),r.getZr().off("click",this._clickHandler),this._pointsBuilder.highlightOnMouseover=!0,t.get("focusNodeAdjacency")){var i=t.get("focusNodeAdjacencyOn");i==="click"?r.getZr().on("click",this._clickHandler):i==="mouseover"&&(n.on("mousemove",this._mousemoveHandler,this),n.on("mouseout",this._mouseOutHandler,this),this._pointsBuilder.highlightOnMouseover=!1)}this._lastMouseOverDataIndex=-1},_clickHandler:function(t){if(!this._layouting){var e=this._pointsBuilder.getPointsMesh().dataIndex;e>=0?this._api.dispatchAction({type:"graphGLFocusNodeAdjacency",seriesId:this._model.id,dataIndex:e}):this._api.dispatchAction({type:"graphGLUnfocusNodeAdjacency",seriesId:this._model.id})}},_mousemoveHandler:function(t){if(!this._layouting){var e=this._pointsBuilder.getPointsMesh().dataIndex;e>=0?e!==this._lastMouseOverDataIndex&&this._api.dispatchAction({type:"graphGLFocusNodeAdjacency",seriesId:this._model.id,dataIndex:e}):this._mouseOutHandler(t),this._lastMouseOverDataIndex=e}},_mouseOutHandler:function(t){this._layouting||(this._api.dispatchAction({type:"graphGLUnfocusNodeAdjacency",seriesId:this._model.id}),this._lastMouseOverDataIndex=-1)},_updateForceEdgesGeometry:function(t,e){var r=this._forceEdgesMesh.geometry,n=e.getEdgeData(),i=0,a=this._forceLayoutInstance,o=2*n.count();r.attributes.node.init(o),r.attributes.color.init(o),n.each(function(s){var l=t[s];r.attributes.node.set(i,a.getNodeUV(l.node1)),r.attributes.node.set(i+1,a.getNodeUV(l.node2));var u=Gt(n,l.dataIndex),h=T.parseColor(u);h[3]*=tt(Ut(n,l.dataIndex),1),r.attributes.color.set(i,h),r.attributes.color.set(i+1,h),i+=2}),r.dirty()},_updateMeshLinesGeometry:function(){var t=this._model.getEdgeData(),e=this._edgesMesh.geometry,r=(t=this._model.getEdgeData(),this._model.getData().getLayout("points"));e.resetOffset(),e.setVertexCount(t.count()*e.getLineVertexCount()),e.setTriangleCount(t.count()*e.getLineTriangleCount());var n=[],i=[],a=["lineStyle","width"];this._originalEdgeColors=new Float32Array(4*t.count()),this._edgeIndicesMap=new Float32Array(t.count()),t.each(function(o){var s=t.graph.getEdgeByIndex(o),l=2*s.node1.dataIndex,u=2*s.node2.dataIndex;n[0]=r[l],n[1]=r[l+1],i[0]=r[u],i[1]=r[u+1];var h=Gt(t,s.dataIndex),c=T.parseColor(h);c[3]*=tt(Ut(t,s.dataIndex),1);var d=t.getItemModel(s.dataIndex),f=tt(d.get(a),1)*this._api.getDevicePixelRatio();e.addLine(n,i,c,f);for(var m=0;m<4;m++)this._originalEdgeColors[4*s.dataIndex+m]=c[m];this._edgeIndicesMap[s.dataIndex]=o},this),e.dirty()},_updateForceNodesGeometry:function(t){for(var e=this._pointsBuilder.getPointsMesh(),r=[],n=0;n<t.count();n++)this._forceLayoutInstance.getNodeUV(n,r),e.geometry.attributes.position.set(n,r);e.geometry.dirty("position")},_initLayout:function(t,e,r){var n=t.get("layout"),i=t.getGraph(),a=t.getBoxLayoutParams(),o=La(a,{width:r.getWidth(),height:r.getHeight()});n==="force"&&(n="forceAtlas2"),this.stopLayout(t,e,r,{beforeLayout:!0});var s=t.getData(),l=t.getData();if(n==="forceAtlas2"){var u=t.getModel("forceAtlas2"),h=this._forceLayoutInstance,c=[],d=[],f=s.getDataExtent("value"),m=l.getDataExtent("value"),p=tt(u.get("edgeWeight"),1),g=tt(u.get("nodeWeight"),1);typeof p=="number"&&(p=[p,p]),typeof g=="number"&&(g=[g,g]);var _=0,y={},x=new Float32Array(2*s.count());if(i.eachNode(function(w){var b,S,M=w.dataIndex,D=s.get("value",M);if(s.hasItemOption){var L=s.getItemModel(M);b=L.get("x"),S=L.get("y")}b==null&&(b=o.x+Math.random()*o.width,S=o.y+Math.random()*o.height),x[2*_]=b,x[2*_+1]=S,y[w.id]=_++;var P=Ys(D,f,g);isNaN(P)&&(P=isNaN(g[0])?1:g[0]),c.push({x:b,y:S,mass:P,size:s.getItemVisual(M,"symbolSize")})}),s.setLayout("points",x),i.eachEdge(function(w){var b=w.dataIndex,S=s.get("value",b),M=Ys(S,m,p);isNaN(M)&&(M=isNaN(p[0])?1:p[0]),d.push({node1:y[w.node1.id],node2:y[w.node2.id],weight:M,dataIndex:b})}),!h){var v=u.get("GPU");this._forceLayoutInstance&&((!v||this._forceLayoutInstance instanceof Nt)&&(v||this._forceLayoutInstance instanceof Qu)||(this._forceLayoutInstanceToDispose=this._forceLayoutInstance)),h=this._forceLayoutInstance=v?new Nt:new Qu}h.initData(c,d),h.updateOption(u.option),this._updateForceEdgesGeometry(h.getEdges(),t),this._updatePositionTexture(),r.dispatchAction({type:"graphGLStartLayout",from:this.uid})}else x=new Float32Array(2*s.count()),_=0,i.eachNode(function(w){var b,S,M=w.dataIndex;if(s.hasItemOption){var D=s.getItemModel(M);b=D.get("x"),S=D.get("y")}x[_++]=b,x[_++]=S}),s.setLayout("points",x),this._updateAfterLayout(t,e,r)},_updatePositionTexture:function(){var t=this._forceLayoutInstance.getNodePositionTexture();this._pointsBuilder.setPositionTexture(t),this._forceEdgesMesh.material.set("positionTex",t)},startLayout:function(t,e,r,n){if(!n||n.from==null||n.from===this.uid){var i=this.viewGL,a=(r=this._api,this._forceLayoutInstance),o=this._model.getData(),s=this._model.getModel("forceAtlas2");if(a&&(this.groupGL.remove(this._edgesMesh),this.groupGL.add(this._forceEdgesMesh),this._forceLayoutInstance)){this._updateForceNodesGeometry(t.getData()),this._pointsBuilder.hideLabels();var l=this,u=this._layoutId=ag++,h=s.getShallow("maxSteps"),c=s.getShallow("steps"),d=0,f=Math.max(2*c,20),m=function(p){if(p===l._layoutId)return a.isFinished(h)?(r.dispatchAction({type:"graphGLStopLayout",from:l.uid}),void r.dispatchAction({type:"graphGLFinishLayout",points:o.getLayout("points"),from:l.uid})):void a.update(i.layer.renderer,c,function(){l._updatePositionTexture(),(d+=c)>=f&&(l._syncNodePosition(t),d=0),r.getZr().refresh(),jo(function(){m(p)})})};jo(function(){l._forceLayoutInstanceToDispose&&(l._forceLayoutInstanceToDispose.dispose(i.layer.renderer),l._forceLayoutInstanceToDispose=null),m(u)}),this._layouting=!0}}},stopLayout:function(t,e,r,n){n&&n.from!=null&&n.from!==this.uid||(this._layoutId=0,this.groupGL.remove(this._forceEdgesMesh),this.groupGL.add(this._edgesMesh),this._forceLayoutInstance&&this.viewGL.layer&&(n&&n.beforeLayout||(this._syncNodePosition(t),this._updateAfterLayout(t,e,r)),this._api.getZr().refresh(),this._layouting=!1))},_syncNodePosition:function(t){var e=this._forceLayoutInstance.getNodePosition(this.viewGL.layer.renderer);t.getData().setLayout("points",e),t.setNodePosition(e)},_updateAfterLayout:function(t,e,r){this._updateMeshLinesGeometry(),this._pointsBuilder.removePositionTexture(),this._pointsBuilder.updateLayout(t,e,r),this._pointsBuilder.updateView(this.viewGL.camera),this._pointsBuilder.updateLabels(),this._pointsBuilder.showLabels()},focusNodeAdjacency:function(t,e,r,n){var i=this._model.getData();this._downplayAll();var a=n.dataIndex,o=i.graph,s=[],l=o.getNodeByIndex(a);s.push(l),l.edges.forEach(function(h){h.dataIndex<0||(h.node1!==l&&s.push(h.node1),h.node2!==l&&s.push(h.node2))},this),this._pointsBuilder.fadeOutAll(.05),this._fadeOutEdgesAll(.05),s.forEach(function(h){this._pointsBuilder.highlight(i,h.dataIndex)},this),this._pointsBuilder.updateLabels(s.map(function(h){return h.dataIndex}));var u=[];l.edges.forEach(function(h){h.dataIndex>=0&&(this._highlightEdge(h.dataIndex),u.push(h))},this),this._focusNodes=s,this._focusEdges=u},unfocusNodeAdjacency:function(t,e,r,n){this._downplayAll(),this._pointsBuilder.fadeInAll(),this._fadeInEdgesAll(),this._pointsBuilder.updateLabels()},_highlightEdge:function(t){var e=this._model.getEdgeData().getItemModel(t),r=T.parseColor(e.get("emphasis.lineStyle.color")||e.get("lineStyle.color")),n=tt(e.get("emphasis.lineStyle.opacity"),e.get("lineStyle.opacity"),1);r[3]*=n,this._edgesMesh.geometry.setItemColor(this._edgeIndicesMap[t],r)},_downplayAll:function(){this._focusNodes&&this._focusNodes.forEach(function(t){this._pointsBuilder.downplay(this._model.getData(),t.dataIndex)},this),this._focusEdges&&this._focusEdges.forEach(function(t){this._downplayEdge(t.dataIndex)},this)},_downplayEdge:function(t){var e=this._getColor(t,[]);this._edgesMesh.geometry.setItemColor(this._edgeIndicesMap[t],e)},_setEdgeFade:($i=[],function(t,e){this._getColor(t,$i),$i[3]*=e,this._edgesMesh.geometry.setItemColor(this._edgeIndicesMap[t],$i)}),_getColor:function(t,e){for(var r=0;r<4;r++)e[r]=this._originalEdgeColors[4*t+r];return e},_fadeOutEdgesAll:function(t){this._model.getData().graph.eachEdge(function(e){this._setEdgeFade(e.dataIndex,t)},this)},_fadeInEdgesAll:function(){this._fadeOutEdgesAll(1)},_updateCamera:function(t,e){this.viewGL.setViewport(0,0,e.getWidth(),e.getHeight(),e.getDevicePixelRatio());for(var r=this.viewGL.camera,n=t.getData().getLayout("points"),i=Qi.create(1/0,1/0),a=Qi.create(-1/0,-1/0),o=[],s=0;s<n.length;)o[0]=n[s++],o[1]=n[s++],Qi.min(i,i,o),Qi.max(a,a,o);var l=(a[1]+i[1])/2,u=(a[0]+i[0])/2;if(!(u>r.left&&u<r.right&&l<r.bottom&&l>r.top)){var h=Math.max(a[0]-i[0],10),c=h/e.getWidth()*e.getHeight();h*=1.4,c*=1.4,i[0]-=.2*h,r.left=i[0],r.top=l-c/2,r.bottom=l+c/2,r.right=h+i[0],r.near=0,r.far=100}},dispose:function(){var t=this.viewGL.layer.renderer;this._forceLayoutInstance&&this._forceLayoutInstance.dispose(t),this.groupGL.removeAll(),this._layoutId=-1,this._pointsBuilder.dispose()},remove:function(){this.groupGL.removeAll(),this._control.dispose()}});var $i;function ta(t){return t instanceof Array||(t=[t,t]),t}Wt(function(t){function e(){}t.registerChartView(og),t.registerSeriesModel(rg),t.registerVisual(function(r){const n={};r.eachSeriesByType("graphGL",function(i){var a=i.getCategoriesData(),o=i.getData(),s={};a.each(function(l){var u=a.getName(l);s["ec-"+u]=l;var h=a.getItemModel(l),c=h.getModel("itemStyle").getItemStyle();c.fill||(c.fill=i.getColorFromPalette(u,n)),a.setItemVisual(l,"style",c);var d=["symbol","symbolSize","symbolKeepAspect"];for(let m=0;m<d.length;m++){var f=h.getShallow(d[m],!0);f!=null&&a.setItemVisual(l,d[m],f)}}),a.count()&&o.each(function(l){let u=o.getItemModel(l).getShallow("category");if(u!=null){typeof u=="string"&&(u=s["ec-"+u]);var h=a.getItemVisual(u,"style"),c=o.ensureUniqueItemVisual(l,"style");Ks(c,h);var d=["symbol","symbolSize","symbolKeepAspect"];for(let f=0;f<d.length;f++)o.setItemVisual(l,d[f],a.getItemVisual(u,d[f]))}})})}),t.registerVisual(function(r){r.eachSeriesByType("graphGL",function(n){var i=n.getGraph(),a=n.getEdgeData(),o=ta(n.get("edgeSymbol")),s=ta(n.get("edgeSymbolSize"));a.setVisual("drawType","stroke"),a.setVisual("fromSymbol",o&&o[0]),a.setVisual("toSymbol",o&&o[1]),a.setVisual("fromSymbolSize",s&&s[0]),a.setVisual("toSymbolSize",s&&s[1]),a.setVisual("style",n.getModel("lineStyle").getLineStyle()),a.each(function(l){var u=a.getItemModel(l),h=i.getEdgeByIndex(l),c=ta(u.getShallow("symbol",!0)),d=ta(u.getShallow("symbolSize",!0)),f=u.getModel("lineStyle").getLineStyle(),m=a.ensureUniqueItemVisual(l,"style");switch(Ks(m,f),m.stroke){case"source":var p=h.node1.getVisual("style");m.stroke=p&&p.fill;break;case"target":p=h.node2.getVisual("style"),m.stroke=p&&p.fill}c[0]&&h.setVisual("fromSymbol",c[0]),c[1]&&h.setVisual("toSymbol",c[1]),d[0]&&h.setVisual("fromSymbolSize",d[0]),d[1]&&h.setVisual("toSymbolSize",d[1])})})}),t.registerAction({type:"graphGLRoam",event:"graphglroam",update:"series.graphGL:roam"},function(r,n){n.eachComponent({mainType:"series",query:r},function(i){i.setView(r)})}),t.registerAction({type:"graphGLStartLayout",event:"graphgllayoutstarted",update:"series.graphGL:startLayout"},e),t.registerAction({type:"graphGLStopLayout",event:"graphgllayoutstopped",update:"series.graphGL:stopLayout"},e),t.registerAction({type:"graphGLFocusNodeAdjacency",event:"graphGLFocusNodeAdjacency",update:"series.graphGL:focusNodeAdjacency"},e),t.registerAction({type:"graphGLUnfocusNodeAdjacency",event:"graphGLUnfocusNodeAdjacency",update:"series.graphGL:unfocusNodeAdjacency"},e)});const sg=Le.extend({type:"series.flowGL",dependencies:["geo","grid","bmap"],visualStyleAccessPath:"itemStyle",getInitialData:function(t,e){var r=this.get("coordinateSystem"),n=r==="geo"?["lng","lat"]:ih(r)||["x","y"];n.push("vx","vy");var i=Ti(this.getSource(),{coordDimensions:n,encodeDefine:this.get("encode"),dimensionsDefine:this.get("dimensions")}),a=new Xe(i,this);return a.initData(this.getSource()),a},defaultOption:{coordinateSystem:"cartesian2d",zlevel:10,supersampling:1,particleType:"point",particleDensity:128,particleSize:1,particleSpeed:1,particleTrail:2,colorTexture:null,gridWidth:"auto",gridHeight:"auto",itemStyle:{color:"#fff",opacity:.8}}}),lg=st.extend(function(){return{dynamic:!0,attributes:{position:new st.Attribute("position","float",3,"POSITION")}}},{resetOffset:function(){this._vertexOffset=0,this._faceOffset=0},setLineCount:function(t){var e=this.attributes,r=4*t,n=2*t;this.vertexCount!==r&&e.position.init(r),this.triangleCount!==n&&(this.indices=n===0?null:this.vertexCount>65535?new Uint32Array(3*n):new Uint16Array(3*n))},addLine:function(t){var e=this._vertexOffset;this.attributes.position.set(e,[t[0],t[1],1]),this.attributes.position.set(e+1,[t[0],t[1],-1]),this.attributes.position.set(e+2,[t[0],t[1],2]),this.attributes.position.set(e+3,[t[0],t[1],-2]),this.setTriangleIndices(this._faceOffset++,[e,e+1,e+2]),this.setTriangleIndices(this._faceOffset++,[e+1,e+2,e+3]),this._vertexOffset+=4}});N.import(`@export ecgl.vfParticle.particle.fragment

uniform sampler2D particleTexture;
uniform sampler2D spawnTexture;
uniform sampler2D velocityTexture;

uniform float deltaTime;
uniform float elapsedTime;

uniform float speedScaling : 1.0;

uniform vec2 textureSize;
uniform vec4 region : [0, 0, 1, 1];
uniform float firstFrameTime;

varying vec2 v_Texcoord;


void main()
{
 vec4 p = texture2D(particleTexture, v_Texcoord);
 bool spawn = false;
 if (p.w <= 0.0) {
 p = texture2D(spawnTexture, fract(v_Texcoord + elapsedTime / 10.0));
 p.w -= firstFrameTime;
 spawn = true;
 }
 vec2 v = texture2D(velocityTexture, fract(p.xy * region.zw + region.xy)).xy;
 v = (v - 0.5) * 2.0;
 p.z = length(v);
 p.xy += v * deltaTime / 10.0 * speedScaling;
 p.w -= deltaTime;

 if (spawn || p.xy != fract(p.xy)) {
 p.z = 0.0;
 }
 p.xy = fract(p.xy);

 gl_FragColor = p;
}
@end

@export ecgl.vfParticle.renderPoints.vertex

#define PI 3.1415926

attribute vec2 texcoord : TEXCOORD_0;

uniform sampler2D particleTexture;
uniform mat4 worldViewProjection : WORLDVIEWPROJECTION;

uniform float size : 1.0;

varying float v_Mag;
varying vec2 v_Uv;

void main()
{
 vec4 p = texture2D(particleTexture, texcoord);

 if (p.w > 0.0 && p.z > 1e-5) {
 gl_Position = worldViewProjection * vec4(p.xy * 2.0 - 1.0, 0.0, 1.0);
 }
 else {
 gl_Position = vec4(100000.0, 100000.0, 100000.0, 1.0);
 }

 v_Mag = p.z;
 v_Uv = p.xy;

 gl_PointSize = size;
}

@end

@export ecgl.vfParticle.renderPoints.fragment

uniform vec4 color : [1.0, 1.0, 1.0, 1.0];
uniform sampler2D gradientTexture;
uniform sampler2D colorTexture;
uniform sampler2D spriteTexture;

varying float v_Mag;
varying vec2 v_Uv;

void main()
{
 gl_FragColor = color;
#ifdef SPRITETEXTURE_ENABLED
 gl_FragColor *= texture2D(spriteTexture, gl_PointCoord);
 if (color.a == 0.0) {
 discard;
 }
#endif
#ifdef GRADIENTTEXTURE_ENABLED
 gl_FragColor *= texture2D(gradientTexture, vec2(v_Mag, 0.5));
#endif
#ifdef COLORTEXTURE_ENABLED
 gl_FragColor *= texture2D(colorTexture, v_Uv);
#endif
}

@end

@export ecgl.vfParticle.renderLines.vertex

#define PI 3.1415926

attribute vec3 position : POSITION;

uniform sampler2D particleTexture;
uniform sampler2D prevParticleTexture;

uniform float size : 1.0;
uniform vec4 vp: VIEWPORT;
uniform mat4 worldViewProjection : WORLDVIEWPROJECTION;

varying float v_Mag;
varying vec2 v_Uv;

@import clay.util.rand

void main()
{
 vec4 p = texture2D(particleTexture, position.xy);
 vec4 p2 = texture2D(prevParticleTexture, position.xy);

 p.xy = p.xy * 2.0 - 1.0;
 p2.xy = p2.xy * 2.0 - 1.0;

 if (p.w > 0.0 && p.z > 1e-5) {
 vec2 dir = normalize(p.xy - p2.xy);
 vec2 norm = vec2(dir.y / vp.z, -dir.x / vp.w) * sign(position.z) * size;
 if (abs(position.z) == 2.0) {
 gl_Position = vec4(p.xy + norm, 0.0, 1.0);
 v_Uv = p.xy;
 v_Mag = p.z;
 }
 else {
 gl_Position = vec4(p2.xy + norm, 0.0, 1.0);
 v_Mag = p2.z;
 v_Uv = p2.xy;
 }
 gl_Position = worldViewProjection * gl_Position;
 }
 else {
 gl_Position = vec4(100000.0, 100000.0, 100000.0, 1.0);
 }
}

@end

@export ecgl.vfParticle.renderLines.fragment

uniform vec4 color : [1.0, 1.0, 1.0, 1.0];
uniform sampler2D gradientTexture;
uniform sampler2D colorTexture;

varying float v_Mag;
varying vec2 v_Uv;

void main()
{
 gl_FragColor = color;
 #ifdef GRADIENTTEXTURE_ENABLED
 gl_FragColor *= texture2D(gradientTexture, vec2(v_Mag, 0.5));
#endif
#ifdef COLORTEXTURE_ENABLED
 gl_FragColor *= texture2D(colorTexture, v_Uv);
#endif
}

@end
`);var bs=function(){this.motionBlurFactor=.99,this.vectorFieldTexture=new K({type:V.FLOAT,flipY:!1}),this.particleLife=[5,20],this._particleType="point",this._particleSize=1,this.particleColor=[1,1,1,1],this.particleSpeedScaling=1,this._thisFrameTexture=null,this._particlePass=null,this._spawnTexture=null,this._particleTexture0=null,this._particleTexture1=null,this._particlePointsMesh=null,this._surfaceFrameBuffer=null,this._elapsedTime=0,this._scene=null,this._camera=null,this._lastFrameTexture=null,this._supersampling=1,this._downsampleTextures=[],this._width=512,this._height=512,this.init()};bs.prototype={constructor:bs,init:function(){var t={type:V.FLOAT,minFilter:V.NEAREST,magFilter:V.NEAREST,useMipmap:!1};this._spawnTexture=new K(t),this._particleTexture0=new K(t),this._particleTexture1=new K(t),this._frameBuffer=new jt({depthBuffer:!1}),this._particlePass=new Lt({fragment:N.source("ecgl.vfParticle.particle.fragment")}),this._particlePass.setUniform("velocityTexture",this.vectorFieldTexture),this._particlePass.setUniform("spawnTexture",this._spawnTexture),this._downsamplePass=new Lt({fragment:N.source("clay.compositor.downsample")});var e=new Hr({renderOrder:10,material:new ve({shader:new N(N.source("ecgl.vfParticle.renderPoints.vertex"),N.source("ecgl.vfParticle.renderPoints.fragment"))}),mode:Hr.POINTS,geometry:new st({dynamic:!0,mainAttribute:"texcoord0"})}),r=new Hr({renderOrder:10,material:new ve({shader:new N(N.source("ecgl.vfParticle.renderLines.vertex"),N.source("ecgl.vfParticle.renderLines.fragment"))}),geometry:new lg,culling:!1}),n=new Hr({material:new ve({shader:new N(N.source("ecgl.color.vertex"),N.source("ecgl.color.fragment"))}),geometry:new za});n.material.enableTexture("diffuseMap"),this._particlePointsMesh=e,this._particleLinesMesh=r,this._lastFrameFullQuadMesh=n,this._camera=new Mn,this._thisFrameTexture=new K,this._lastFrameTexture=new K},setParticleDensity:function(t,e){for(var r=new Float32Array(t*e*4),n=0,i=this.particleLife,a=0;a<t;a++)for(var o=0;o<e;o++,n++){r[4*n]=Math.random(),r[4*n+1]=Math.random(),r[4*n+2]=Math.random();var s=(i[1]-i[0])*Math.random()+i[0];r[4*n+3]=s}this._particleType==="line"?this._setLineGeometry(t,e):this._setPointsGeometry(t,e),this._spawnTexture.width=t,this._spawnTexture.height=e,this._spawnTexture.pixels=r,this._particleTexture0.width=this._particleTexture1.width=t,this._particleTexture0.height=this._particleTexture1.height=e,this._particlePass.setUniform("textureSize",[t,e])},_setPointsGeometry:function(t,e){var r=t*e,n=this._particlePointsMesh.geometry,i=n.attributes;i.texcoord0.init(r);for(var a=0,o=0;o<t;o++)for(var s=0;s<e;s++,a++)i.texcoord0.value[2*a]=o/t,i.texcoord0.value[2*a+1]=s/e;n.dirty()},_setLineGeometry:function(t,e){var r=t*e,n=this._getParticleMesh().geometry;n.setLineCount(r),n.resetOffset();for(var i=0;i<t;i++)for(var a=0;a<e;a++)n.addLine([i/t,a/e]);n.dirty()},_getParticleMesh:function(){return this._particleType==="line"?this._particleLinesMesh:this._particlePointsMesh},update:function(t,e,r,n){var i=this._getParticleMesh(),a=this._frameBuffer,o=this._particlePass;n&&this._updateDownsampleTextures(t,e),i.material.set("size",this._particleSize*this._supersampling),i.material.set("color",this.particleColor),o.setUniform("speedScaling",this.particleSpeedScaling),a.attach(this._particleTexture1),o.setUniform("firstFrameTime",n?(this.particleLife[1]+this.particleLife[0])/2:0),o.setUniform("particleTexture",this._particleTexture0),o.setUniform("deltaTime",r),o.setUniform("elapsedTime",this._elapsedTime),o.render(t,a),i.material.set("particleTexture",this._particleTexture1),i.material.set("prevParticleTexture",this._particleTexture0),a.attach(this._thisFrameTexture),a.bind(t),t.gl.clear(t.gl.DEPTH_BUFFER_BIT|t.gl.COLOR_BUFFER_BIT);var s=this._lastFrameFullQuadMesh;s.material.set("diffuseMap",this._lastFrameTexture),s.material.set("color",[1,1,1,this.motionBlurFactor]),this._camera.update(!0),t.renderPass([s,i],this._camera),a.unbind(t),this._downsample(t),this._swapTexture(),this._elapsedTime+=r},_downsample:function(t){var e=this._downsampleTextures;if(e.length!==0)for(var r=0,n=this._thisFrameTexture,i=e[r];i;)this._frameBuffer.attach(i),this._downsamplePass.setUniform("texture",n),this._downsamplePass.setUniform("textureSize",[n.width,n.height]),this._downsamplePass.render(t,this._frameBuffer),n=i,i=e[++r]},getSurfaceTexture:function(){var t=this._downsampleTextures;return t.length>0?t[t.length-1]:this._lastFrameTexture},setRegion:function(t){this._particlePass.setUniform("region",t)},resize:function(t,e){this._lastFrameTexture.width=t*this._supersampling,this._lastFrameTexture.height=e*this._supersampling,this._thisFrameTexture.width=t*this._supersampling,this._thisFrameTexture.height=e*this._supersampling,this._width=t,this._height=e},setParticleSize:function(t){var e=this._getParticleMesh();if(t<=2)return e.material.disableTexture("spriteTexture"),void(e.material.transparent=!1);this._spriteTexture||(this._spriteTexture=new K),this._spriteTexture.image&&this._spriteTexture.image.width===t||(this._spriteTexture.image=function(r){var n=document.createElement("canvas");n.width=n.height=r;var i=n.getContext("2d");return i.fillStyle="#fff",i.arc(r/2,r/2,r/2,0,2*Math.PI),i.fill(),n}(t),this._spriteTexture.dirty()),e.material.transparent=!0,e.material.enableTexture("spriteTexture"),e.material.set("spriteTexture",this._spriteTexture),this._particleSize=t},setGradientTexture:function(t){var e=this._getParticleMesh().material;e[t?"enableTexture":"disableTexture"]("gradientTexture"),e.setUniform("gradientTexture",t)},setColorTextureImage:function(t,e){this._getParticleMesh().material.setTextureImage("colorTexture",t,e,{flipY:!0})},setParticleType:function(t){this._particleType=t},clearFrame:function(t){var e=this._frameBuffer;e.attach(this._lastFrameTexture),e.bind(t),t.gl.clear(t.gl.DEPTH_BUFFER_BIT|t.gl.COLOR_BUFFER_BIT),e.unbind(t)},setSupersampling:function(t){this._supersampling=t,this.resize(this._width,this._height)},_updateDownsampleTextures:function(t,e){for(var r=this._downsampleTextures,n=Math.max(Math.floor(Math.log(this._supersampling/e.getDevicePixelRatio())/Math.log(2)),0),i=2,a=this._width*this._supersampling,o=this._height*this._supersampling,s=0;s<n;s++)r[s]=r[s]||new K,r[s].width=a/i,r[s].height=o/i,i*=2;for(;s<r.length;s++)r[s].dispose(t);r.length=n},_swapTexture:function(){var t=this._particleTexture0;this._particleTexture0=this._particleTexture1,this._particleTexture1=t,t=this._thisFrameTexture,this._thisFrameTexture=this._lastFrameTexture,this._lastFrameTexture=t},dispose:function(t){t.disposeFrameBuffer(this._frameBuffer),t.disposeTexture(this.vectorFieldTexture),t.disposeTexture(this._spawnTexture),t.disposeTexture(this._particleTexture0),t.disposeTexture(this._particleTexture1),t.disposeTexture(this._thisFrameTexture),t.disposeTexture(this._lastFrameTexture),t.disposeGeometry(this._particleLinesMesh.geometry),t.disposeGeometry(this._particlePointsMesh.geometry),t.disposeGeometry(this._lastFrameFullQuadMesh.geometry),this._spriteTexture&&t.disposeTexture(this._spriteTexture),this._particlePass.dispose(t),this._downsamplePass.dispose(t),this._downsampleTextures.forEach(function(e){e.dispose(t)})}};const ug=bs,hg=Pe.extend({type:"flowGL",__ecgl__:!0,init:function(t,e){this.viewGL=new dt("orthographic"),this.groupGL=new T.Node,this.viewGL.add(this.groupGL),this._particleSurface=new ug;var r=new T.Mesh({geometry:new T.PlaneGeometry,material:new T.Material({shader:new T.Shader({vertex:T.Shader.source("ecgl.color.vertex"),fragment:T.Shader.source("ecgl.color.fragment")}),transparent:!0})});r.material.enableTexture("diffuseMap"),this.groupGL.add(r),this._planeMesh=r},render:function(t,e,r){var n=this._particleSurface;n.setParticleType(t.get("particleType")),n.setSupersampling(t.get("supersampling")),this._updateData(t,r),this._updateCamera(r.getWidth(),r.getHeight(),r.getDevicePixelRatio());var i=tt(t.get("particleDensity"),128);n.setParticleDensity(i,i);var a=this._planeMesh,o=+new Date,s=this,l=!0;a.__percent=0,a.stopAnimation(),a.animate("",{loop:!0}).when(1e5,{__percent:1}).during(function(){var c=+new Date,d=Math.min(c-o,20);o+=d,s._renderer&&(n.update(s._renderer,r,d/1e3,l),a.material.set("diffuseMap",n.getSurfaceTexture())),l=!1}).start();var u=t.getModel("itemStyle"),h=T.parseColor(u.get("color"));h[3]*=tt(u.get("opacity"),1),a.material.set("color",h),n.setColorTextureImage(t.get("colorTexture"),r),n.setParticleSize(t.get("particleSize")),n.particleSpeedScaling=t.get("particleSpeed"),n.motionBlurFactor=1-Math.pow(.1,t.get("particleTrail"))},updateTransform:function(t,e,r){this._updateData(t,r)},afterRender:function(t,e,r,n){var i=n.renderer;this._renderer=i},_updateData:function(t,e){var r=t.coordinateSystem,n=r.dimensions.map(function(y){return t.coordDimToDataDim(y)[0]}),i=t.getData(),a=i.getDataExtent(n[0]),o=i.getDataExtent(n[1]),s=t.get("gridWidth"),l=t.get("gridHeight");if(s==null||s==="auto"){var u=(a[1]-a[0])/(o[1]-o[0]);s=Math.round(Math.sqrt(u*i.count()))}l!=null&&l!=="auto"||(l=Math.ceil(i.count()/s));var h=this._particleSurface.vectorFieldTexture,c=h.pixels;if(c&&c.length===l*s*4)for(var d=0;d<c.length;d++)c[d]=0;else c=h.pixels=new Float32Array(s*l*4);var f=0,m=1/0,p=new Float32Array(2*i.count()),g=0,_=[[1/0,1/0],[-1/0,-1/0]];i.each([n[0],n[1],"vx","vy"],function(y,x,v,w){var b=r.dataToPoint([y,x]);p[g++]=b[0],p[g++]=b[1],_[0][0]=Math.min(b[0],_[0][0]),_[0][1]=Math.min(b[1],_[0][1]),_[1][0]=Math.max(b[0],_[1][0]),_[1][1]=Math.max(b[1],_[1][1]);var S=Math.sqrt(v*v+w*w);f=Math.max(f,S),m=Math.min(m,S)}),i.each(["vx","vy"],function(y,x,v){var w=Math.round((p[2*v]-_[0][0])/(_[1][0]-_[0][0])*(s-1)),b=4*((l-1-Math.round((p[2*v+1]-_[0][1])/(_[1][1]-_[0][1])*(l-1)))*s+w);c[b]=y/f*.5+.5,c[b+1]=x/f*.5+.5,c[b+3]=1}),h.width=s,h.height=l,t.get("coordinateSystem")==="bmap"&&this._fillEmptyPixels(h),h.dirty(),this._updatePlanePosition(_[0],_[1],t,e),this._updateGradientTexture(i.getVisual("visualMeta"),[m,f])},_fillEmptyPixels:function(t){var e=t.pixels,r=t.width,n=t.height;function i(p,g,_){p=Math.max(Math.min(p,r-1),0);var y=4*((g=Math.max(Math.min(g,n-1),0))*(r-1)+p);return e[y+3]!==0&&(_[0]=e[y],_[1]=e[y+1],!0)}function a(p,g,_){_[0]=p[0]+g[0],_[1]=p[1]+g[1]}for(var o=[],s=[],l=[],u=[],h=[],c=0,d=0;d<n;d++)for(var f=0;f<r;f++){var m=4*(d*(r-1)+f);e[m+3]===0&&(c=o[0]=o[1]=0,i(f-1,d,s)&&(c++,a(s,o,o)),i(f+1,d,l)&&(c++,a(l,o,o)),i(f,d-1,u)&&(c++,a(u,o,o)),i(f,d+1,h)&&(c++,a(h,o,o)),o[0]/=c,o[1]/=c,e[m]=o[0],e[m+1]=o[1]),e[m+3]=1}},_updateGradientTexture:function(t,e){if(t&&t.length){this._gradientTexture=this._gradientTexture||new T.Texture2D({image:document.createElement("canvas")});var r=this._gradientTexture,n=r.image;n.width=200,n.height=1;var i=n.getContext("2d"),a=i.createLinearGradient(0,.5,n.width,.5);t[0].stops.forEach(function(o){var s;e[1]===e[0]?s=0:(s=o.value/e[1],s=Math.min(Math.max(s,0),1)),a.addColorStop(s,o.color)}),i.fillStyle=a,i.fillRect(0,0,n.width,n.height),r.dirty(),this._particleSurface.setGradientTexture(this._gradientTexture)}else this._particleSurface.setGradientTexture(null)},_updatePlanePosition:function(t,e,r,n){var i=this._limitInViewportAndFullFill(t,e,r,n);t=i.leftTop,e=i.rightBottom,this._particleSurface.setRegion(i.region),this._planeMesh.position.set((t[0]+e[0])/2,n.getHeight()-(t[1]+e[1])/2,0);var a=e[0]-t[0],o=e[1]-t[1];this._planeMesh.scale.set(a/2,o/2,1),this._particleSurface.resize(Math.max(Math.min(a,2048),1),Math.max(Math.min(o,2048),1)),this._renderer&&this._particleSurface.clearFrame(this._renderer)},_limitInViewportAndFullFill:function(t,e,r,n){var i=[Math.max(t[0],0),Math.max(t[1],0)],a=[Math.min(e[0],n.getWidth()),Math.min(e[1],n.getHeight())];if(r.get("coordinateSystem")==="bmap"){var o=r.getData().getDataExtent(r.coordDimToDataDim("lng")[0]);Math.floor(o[1]-o[0])>=359&&(i[0]>0&&(i[0]=0),a[0]<n.getWidth()&&(a[0]=n.getWidth()))}var s=e[0]-t[0],l=e[1]-t[1],u=a[0]-i[0],h=a[1]-i[1];return{leftTop:i,rightBottom:a,region:[(i[0]-t[0])/s,1-h/l-(i[1]-t[1])/l,u/s,h/l]}},_updateCamera:function(t,e,r){this.viewGL.setViewport(0,0,t,e,r);var n=this.viewGL.camera;n.left=n.bottom=0,n.top=e,n.right=t,n.near=0,n.far=100,n.position.z=10},remove:function(){this._planeMesh.stopAnimation(),this.groupGL.removeAll()},dispose:function(){this._renderer&&this._particleSurface.dispose(this._renderer),this.groupGL.removeAll()}});Wt(function(t){t.registerChartView(hg),t.registerSeriesModel(sg)});var ws=Le.extend({type:"series.linesGL",dependencies:["grid","geo"],visualStyleAccessPath:"lineStyle",visualDrawType:"stroke",streamEnabled:!0,init:function(t){var e=this._processFlatCoordsArray(t.data);this._flatCoords=e.flatCoords,this._flatCoordsOffset=e.flatCoordsOffset,e.flatCoords&&(t.data=new Float32Array(e.count)),ws.superApply(this,"init",arguments)},mergeOption:function(t){var e=this._processFlatCoordsArray(t.data);this._flatCoords=e.flatCoords,this._flatCoordsOffset=e.flatCoordsOffset,e.flatCoords&&(t.data=new Float32Array(e.count)),ws.superApply(this,"mergeOption",arguments)},appendData:function(t){var e=this._processFlatCoordsArray(t.data);e.flatCoords&&(this._flatCoords?(this._flatCoords=Js(this._flatCoords,e.flatCoords),this._flatCoordsOffset=Js(this._flatCoordsOffset,e.flatCoordsOffset)):(this._flatCoords=e.flatCoords,this._flatCoordsOffset=e.flatCoordsOffset),t.data=new Float32Array(e.count)),this.getRawData().appendData(t.data)},_getCoordsFromItemModel:function(t){var e=this.getData().getItemModel(t);return e.option instanceof Array?e.option:e.getShallow("coords")},getLineCoordsCount:function(t){return this._flatCoordsOffset?this._flatCoordsOffset[2*t+1]:this._getCoordsFromItemModel(t).length},getLineCoords:function(t,e){if(this._flatCoordsOffset){for(var r=this._flatCoordsOffset[2*t],n=this._flatCoordsOffset[2*t+1],i=0;i<n;i++)e[i]=e[i]||[],e[i][0]=this._flatCoords[r+2*i],e[i][1]=this._flatCoords[r+2*i+1];return n}var a=this._getCoordsFromItemModel(t);for(i=0;i<a.length;i++)e[i]=e[i]||[],e[i][0]=a[i][0],e[i][1]=a[i][1];return a.length},_processFlatCoordsArray:function(t){var e=0;if(this._flatCoords&&(e=this._flatCoords.length),typeof t[0]=="number"){for(var r=t.length,n=new Uint32Array(r),i=new Float64Array(r),a=0,o=0,s=0,l=0;l<r;){s++;var u=t[l++];n[o++]=a+e,n[o++]=u;for(var h=0;h<u;h++){var c=t[l++],d=t[l++];i[a++]=c,i[a++]=d}}return{flatCoordsOffset:new Uint32Array(n.buffer,0,o),flatCoords:i,count:s}}return{flatCoordsOffset:null,flatCoords:null,count:t.length}},getInitialData:function(t,e){var r=new Xe(["value"],this);return r.hasItemOption=!1,r.initData(t.data,[],function(n,i,a,o){if(n instanceof Array)return NaN;r.hasItemOption=!0;var s=n.value;return s!=null?s instanceof Array?s[o]:s:void 0}),r},defaultOption:{coordinateSystem:"geo",zlevel:10,progressive:1e4,progressiveThreshold:5e4,blendMode:"source-over",lineStyle:{opacity:.8},postEffect:{enable:!1,colorCorrection:{exposure:0,brightness:0,contrast:1,saturation:1,enable:!0}}}});const cg=ws,dg=Pe.extend({type:"linesGL",__ecgl__:!0,init:function(t,e){this.groupGL=new T.Node,this.viewGL=new dt("orthographic"),this.viewGL.add(this.groupGL),this._glViewHelper=new rr(this.viewGL),this._nativeLinesShader=T.createShader("ecgl.lines3D"),this._meshLinesShader=T.createShader("ecgl.meshLines3D"),this._linesMeshes=[],this._currentStep=0},render:function(t,e,r){this.groupGL.removeAll(),this._glViewHelper.reset(t,r);var n=this._linesMeshes[0];n||(n=this._linesMeshes[0]=this._createLinesMesh(t)),this._linesMeshes.length=1,this.groupGL.add(n),this._updateLinesMesh(t,n,0,t.getData().count()),this.viewGL.setPostEffect(t.getModel("postEffect"),r)},incrementalPrepareRender:function(t,e,r){this.groupGL.removeAll(),this._glViewHelper.reset(t,r),this._currentStep=0,this.viewGL.setPostEffect(t.getModel("postEffect"),r)},incrementalRender:function(t,e,r,n){var i=this._linesMeshes[this._currentStep];i||(i=this._createLinesMesh(e),this._linesMeshes[this._currentStep]=i),this._updateLinesMesh(e,i,t.start,t.end),this.groupGL.add(i),n.getZr().refresh(),this._currentStep++},updateTransform:function(t,e,r){t.coordinateSystem.getRoamTransform&&this._glViewHelper.updateTransform(t,r)},_createLinesMesh:function(t){return new T.Mesh({$ignorePicking:!0,material:new T.Material({shader:T.createShader("ecgl.lines3D"),transparent:!0,depthMask:!1,depthTest:!1}),geometry:new bc({segmentScale:10,useNativeLine:!0,dynamic:!1}),mode:T.Mesh.LINES,culling:!1})},_updateLinesMesh:function(t,e,r,n){var i=t.getData();e.material.blend=t.get("blendMode")==="lighter"?T.additiveBlend:null;var a=t.get("lineStyle.curveness")||0,o=t.get("polyline"),s=e.geometry,l=t.coordinateSystem,u=tt(t.get("lineStyle.width"),1);u>1?(e.material.shader!==this._meshLinesShader&&e.material.attachShader(this._meshLinesShader),e.mode=T.Mesh.TRIANGLES):(e.material.shader!==this._nativeLinesShader&&e.material.attachShader(this._nativeLinesShader),e.mode=T.Mesh.LINES),r=r||0,n=n||i.count(),s.resetOffset();var h=0,c=0,d=[],f=[],m=[],p=[],g=[],_=.3,y=.7;function x(){f[0]=d[0]*y+p[0]*_-(d[1]-p[1])*a,f[1]=d[1]*y+p[1]*_-(p[0]-d[0])*a,m[0]=d[0]*_+p[0]*y-(d[1]-p[1])*a,m[1]=d[1]*_+p[1]*y-(p[0]-d[0])*a}if(o||a!==0)for(var v=r;v<n;v++)if(o){var w=t.getLineCoordsCount(v);h+=s.getPolylineVertexCount(w),c+=s.getPolylineTriangleCount(w)}else t.getLineCoords(v,g),this._glViewHelper.dataToPoint(l,g[0],d),this._glViewHelper.dataToPoint(l,g[1],p),x(),h+=s.getCubicCurveVertexCount(d,f,m,p),c+=s.getCubicCurveTriangleCount(d,f,m,p);else{var b=n-r;h+=b*s.getLineVertexCount(),c+=b*s.getLineVertexCount()}s.setVertexCount(h),s.setTriangleCount(c);var S=r,M=[];for(v=r;v<n;v++){T.parseColor(Gt(i,S),M);var D=tt(Ut(i,S),1);M[3]*=D,w=t.getLineCoords(v,g);for(var L=0;L<w;L++)this._glViewHelper.dataToPoint(l,g[L],g[L]);o?s.addPolyline(g,M,u,0,w):a!==0?(d=g[0],p=g[1],x(),s.addCubicCurve(d,f,m,p,M,u)):s.addPolyline(g,M,u,0,2),S++}},dispose:function(){this.groupGL.removeAll()},remove:function(){this.groupGL.removeAll()}});Wt(function(t){t.registerChartView(dg),t.registerSeriesModel(cg)});const fg={class:"echarts"},vg=Wc(jc({__name:"index",setup(t){const e=ja();let r=ja();Xc(()=>{((s,l={})=>Jo.get(s,Object.assign(l)))("/src/api/echarts/Json/china.json").then(s=>{i("\u4E2D\u56FD\u5730\u56FE",s,"map"),r=s})});let n=null;const i=(s,l,u)=>{n!==null&&n.dispose(),qc(s,l),n=Zc(e.value),n.clear();const h={title:{text:"\u4E2D\u56FD\u5730\u56FE",left:"center",textStyle:{color:"#fff"}},tooltip:{trigger:"item"},series:[{type:c=u,map:s,selectedMode:"single",width:"auto",height:"auto",label:{show:!0,color:"rgba(0, 0, 0, 0.3)",fontSize:8,fontFamily:"Gill Sans"},...c==="map3D"?{regionHeight:4,boxDepth:145,boxWidth:100,boxHeight:5,groundPlane:{show:!1,color:"#ccc",instancing:!0},itemStyle:{color:"#2B5890",borderWidth:1,opacity:.6,borderColor:"#5578A5"},emphasis:{label:{show:!0,color:"fff"},itemStyle:{color:"#0489d6"}},viewControl:{distance:135,autoRotate:!1,rotateSensitivity:[2,2],zoomSensitivity:1,panSensitivity:1,panMouseButton:"right",rotateMouseButton:"left",animation:!1}}:{}}]};var c;n.setOption(h)},a=ja(!1),o=()=>{a.value=!a.value};return Yc(a,s=>{i("\u4E2D\u56FD\u5730\u56FE",r,s?"map3D":"map")}),(s,l)=>(Kc(),Jc("div",fg,[Xa("div",{class:"myEcharts",ref_key:"myEcharts",ref:e},null,512),Xa("div",{class:"btn",onClick:o},[Xa("div",{class:Qc(["slide",{toRight:Qs(a)}])},$c(Qs(a)?"3D\u89C6\u56FE":"2D\u89C6\u56FE"),3)])]))}}),[["__scopeId","data-v-0dc9b8b5"]]);export{vg as default};

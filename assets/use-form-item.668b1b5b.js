import{C as e,a3 as a,ac as o,i as l,K as n,A as t,aE as d,o as i,D as r,Z as s,aF as u}from"./main.ef1a9188.js";const v=o=>{const l=a();return e((()=>{var e,a;return null==(a=null==(e=null==l?void 0:l.proxy)?void 0:e.$props)?void 0:a[o]}))},m={prefix:Math.floor(1e4*Math.random()),current:0},I=Symbol("elIdInjection"),p=()=>a()?n(I,m):m,c=a=>{const n=p(),t=o();return e((()=>l(a)||`${t.value}-id-${n.prefix}-${n.current++}`))},f=Symbol("formContextKey"),b=Symbol("formItemContextKey"),x=(a,o={})=>{const i=t(void 0),r=o.prop?i:v("size"),s=o.global?i:d(),u=o.form?{size:void 0}:n(f,void 0),m=o.formItem?{size:void 0}:n(b,void 0);return e((()=>r.value||l(a)||(null==m?void 0:m.size)||(null==u?void 0:u.size)||s.value||""))},y=a=>{const o=v("disabled"),t=n(f,void 0);return e((()=>o.value||l(a)||(null==t?void 0:t.disabled)||!1))},z=()=>({form:n(f,void 0),formItem:n(b,void 0)}),g=(a,{formItemContext:o,disableIdGeneration:l,disableIdManagement:n})=>{l||(l=t(!1)),n||(n=t(!1));const d=t();let v;const m=e((()=>{var e;return!!(!a.label&&!a.ariaLabel&&o&&o.inputIds&&(null==(e=o.inputIds)?void 0:e.length)<=1)}));return i((()=>{v=r([s(a,"id"),l],(([e,a])=>{const l=null!=e?e:a?void 0:c().value;l!==d.value&&((null==o?void 0:o.removeInputId)&&(d.value&&o.removeInputId(d.value),(null==n?void 0:n.value)||a||!l||o.addInputId(l)),d.value=l)}),{immediate:!0})})),u((()=>{v&&v(),(null==o?void 0:o.removeInputId)&&d.value&&o.removeInputId(d.value)})),{isLabeledByFormItem:m,inputId:d}};export{x as a,y as b,p as c,c as d,f as e,b as f,g,z as u};

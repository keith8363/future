import{d as e,A as a,o as t,c as l,l as n,p as s,x as o,y as c,b as d,_ as u}from"./index.c20aa23e.js";import{E as i}from"./el-input.a53b2761.js";import"./typescript.72bf8adc.js";import"./use-form-item.df2da145.js";import"./index.2713e21b.js";const r=e=>(o("data-v-cc40362c"),e=e(),c(),e),p={class:"app-container"},m={class:"keys"},f=r((()=>n("span",null,"关键字",-1))),v=r((()=>n("input",{type:"file",id:"fileInput",multiple:""},null,-1))),y=u(e({__name:"index",setup(e){const o=a(["【无水印】","（无水印）","[无水印]","(无水印)","无水印"]),c=a(0),u=e=>{let a="";return o.value.forEach((t=>{a=e.includes(t)?e.replace(t,""):e})),a};return t((()=>{const e=document.getElementById("fileInput");null==e||e.addEventListener("change",(function(){const a=e.files;Object.values(a).forEach((e=>{(e=>{const a=document.createElement("a");a.style.display="none",a.href=URL.createObjectURL(e);const t=e.name.split("."),l=u(t[0])||"未命名";a.download=l+`.${t[1]}`,c.value++,document.body.appendChild(a),a.click(),document.body.removeChild(a)})(e)})),e.outerHTML=e.outerHTML}))})),(e,a)=>{const t=i;return d(),l("div",p,[n("div",m,[f,s(t,{modelValue:o.value,"onUpdate:modelValue":a[0]||(a[0]=e=>o.value=e),"aria-placeholder":"文件名关键字"},null,8,["modelValue"])]),v])}}}),[["__scopeId","data-v-cc40362c"]]);export{y as default};

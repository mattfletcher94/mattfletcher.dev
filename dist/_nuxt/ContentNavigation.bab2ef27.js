import{y as m,a as u,t as h,e as c,h as v}from"./entry.773593e7.js";import{u as g}from"./asyncData.9e55b548.js";import{h as r,j as y}from"./json.6b31c119.js";import{w as d}from"./utils.60a35816.js";const l=a=>{const t=a==null?void 0:a.params(),n=d(t?`/navigation/${r(t)}`:"/navigation");return $fetch(n,{method:"GET",responseType:"json",params:{_params:y(t||{}),previewToken:m("previewToken").value}})},j=u({props:{query:{type:Object,required:!1,default:void 0}},async setup(a){const{query:t}=h(a),{data:n,refresh:e}=await g(`content-navigation-${r(t.value)}`,()=>l(t.value));return{data:n,refresh:e}},render(a){var s;const t=c(),{query:n,data:e,refresh:i}=a,o=(p,f)=>v("pre",null,JSON.stringify({message:"You should use slots with <ContentNavigation>",slot:p,data:f},null,2));return(t==null?void 0:t.empty)&&(!e||!(e!=null&&e.length))?((s=t==null?void 0:t.empty)==null?void 0:s.call(t,{query:n,...this.$attrs}))||o("empty",{query:n,data:e}):t!=null&&t.default?t.default({navigation:e,refresh:i,...this.$attrs}):o("default",e)}});export{j as default};

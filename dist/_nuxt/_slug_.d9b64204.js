import{_ as k}from"./IconArrowLeft.b7eea4fc.js";import{a as w,b as C,H as B,o as a,F as v,I as t,u as e,J as _,G as s,B as m,c as g,K as P,f as N,L as V,M as x}from"./entry.773593e7.js";import{u as A}from"./asyncData.9e55b548.js";import{q as b}from"./query.cedcd346.js";import{u as D,a as L}from"./progressDone.c984dc22.js";import{_ as S}from"./IconArrowRight.04e5bed7.js";import"./json.6b31c119.js";import"./utils.60a35816.js";const j={class:"container mt-12"},q={class:"max-w-4xl mx-auto"},E={key:0,class:"block aspect-w-16 aspect-h-9 overflow-hidden"},H=["src","alt"],I={class:"prosey-md text-left mt-6"},R={class:"block mt-6 md:mt-12"},z={class:"grid grid-cols-2 gap-6"},F={class:"md:flex items-center gap-6"},G={class:"md:order-2"},J={class:"prosey"},K={class:"font-bold"},M={class:"md:order-1"},O={class:"md:flex items-center gap-6"},Q={class:"prosey"},T={class:"font-bold"},$={class:"ml-auto"},rt=w({__name:"[slug]",async setup(U){let n,u;const{fullPath:r,path:W,params:X}=C(),{data:l}=([n,u]=B(()=>A(r,async()=>Promise.all([b(r).findOne(),b("blog").findSurround(r)]).then(([p,h])=>Promise.resolve({post:p,surrounds:h})),"$LEmP2wQsop")),n=await n,u(),n),o=l.value.post,c=l.value.surrounds[0],i=l.value.surrounds[1];return D({title:o.title,meta:[{name:"description",content:o.description},{name:"keywords",content:o.keywords}]}),L(),(p,h)=>{const f=k,d=P("router-link"),y=N;return a(),v("div",j,[t("div",q,[e(o).banner?(a(),v("div",E,[t("img",{class:"h-full w-full object-center object-cover rounded-lg",src:e(o).banner,alt:e(o).title,loading:"lazy"},null,8,H)])):_("",!0),t("div",I,[s(d,{to:"/blog",class:"inline-block align-middle mb-6 no-underline font-bold text-theme-foreground-1 hover:text-primary-500 focus:text-primary-500"},{default:m(()=>[s(f,{class:"mr-1 w-5 h-5"}),V(" Back to blog ")]),_:1}),s(y,{value:e(o)},null,8,["value"])]),t("div",R,[t("div",z,[t("div",null,[e(c)?(a(),g(d,{key:0,to:e(c)._path,class:"block h-full bg-theme-surface-1 text-theme-foreground-1 rounded-lg p-4 text-left transition-colors"},{default:m(()=>[t("div",F,[t("div",G,[t("div",J,[t("h4",K,x(e(c).title),1)])]),t("div",M,[s(f,{class:"h-6 w-6"})])])]),_:1},8,["to"])):_("",!0)]),t("div",null,[e(i)?(a(),g(d,{key:0,to:e(i)._path,class:"block h-full bg-theme-surface-1 text-theme-foreground-1 rounded-lg p-4 text-right md:text-left transition-colors"},{default:m(()=>[t("div",O,[t("div",null,[t("div",Q,[t("h4",T,x(e(i).title),1)])]),t("div",$,[s(S,{class:"h-6 w-6"})])])]),_:1},8,["to"])):_("",!0)])])])])])}}});export{rt as default};

import f from"./UDXJq88w.js";import y from"./CmttUscF.js";import _ from"./CMsMjph4.js";import{r as n}from"./DUnFk1Pt.js";import{d as k,c as o,e as r,f as s,h as a,F as h,V as c,w as v,g as d,t as l,X as $,k as w}from"./BKFkcy19.js";import"./2ETV-d1z.js";import"./CgF4-kQ3.js";const B={class:"block-hero"},g={class:"layout"},S={class:"content"},V={key:0,class:"announce"},q={class:"title"},H={class:"description"},A={key:1,class:"extra"},C={class:"actions"},N=["href"],T={class:"support"},b=k({__name:"BlockHero",props:{cta:{type:Array,required:!1,default:()=>[]},secondary:{type:Array,required:!1,default:()=>[]},video:{type:String,required:!1,default:""},snippet:{type:[Array,String],required:!1,default:""}},setup(e){return(t,i)=>{const u=f,p=y,m=_;return o(),r("section",B,[s("div",g,[s("div",S,[t.$slots.announce?(o(),r("p",V,[n(t.$slots,"announce",{unwrap:"p"},void 0,!0)])):a("",!0),s("h1",q,[n(t.$slots,"title",{unwrap:"p"},()=>[i[0]||(i[0]=d(" Hero Title "))],!0)]),s("p",H,[n(t.$slots,"description",{unwrap:"p"},()=>[i[1]||(i[1]=d(" Hero default description. "))],!0)]),t.$slots.extra?(o(),r("div",A,[n(t.$slots,"extra",{unwrap:"p"},void 0,!0)])):a("",!0),s("div",C,[t.$slots.actions?n(t.$slots,"actions",{key:0,unwrap:"p"},void 0,!0):(o(),r(h,{key:1},[e.cta?(o(),c(u,{key:0,class:"cta",bold:"",size:"medium",href:e.cta[1]},{default:v(()=>[d(l(e.cta[0]),1)]),_:1},8,["href"])):a("",!0),e.secondary?(o(),r("a",{key:1,href:e.secondary[1],class:"secondary"},l(e.secondary[0]),9,N)):a("",!0)],64))])]),s("div",T,[$(t.$slots,"support",{},()=>[e.snippet?(o(),c(p,{key:0,content:e.snippet},null,8,["content"])):e.video?(o(),c(m,{key:1,src:e.video},null,8,["src"])):a("",!0)],!0)])])])}}}),P=w(b,[["__scopeId","data-v-3ff82595"]]);export{P as default};

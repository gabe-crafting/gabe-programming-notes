import{d as m,r as i,aj as B,ak as w,x as b,c as a,e as p,f,i as C,w as x,V as y,H as _,T as $,n as v,a8 as S,k as g,t as V,h as z,X as I}from"./BKFkcy19.js";const N={class:"icon-wrapper"},P=m({__name:"ProseCodeCopyButton",props:{content:{type:String,default:""},show:{type:Boolean,default:!1}},setup(e){const n=e,s=i(),{copy:t}=B();w(s,()=>{o.value==="copied"&&(o.value="init")});const{prose:c}=b(),o=i("init"),h=k=>{t(n.content).then(()=>{o.value="copied"}).catch(l=>{console.warn("Couldn't copy to clipboard!",l)})};return(k,l)=>{const u=S;return a(),p("button",{ref_key:"copyButtonRef",ref:s,class:v([(e.show||o.value==="copied")&&"show"]),onClick:h},[l[0]||(l[0]=f("span",{class:"sr-only"},"Copy to clipboard",-1)),f("span",N,[C($,{name:"fade"},{default:x(()=>{var r,d;return[o.value==="copied"?(a(),y(u,{key:0,name:(r=_(c).copyButton)==null?void 0:r.iconCopied,size:"18",class:"copied"},null,8,["name"])):(a(),y(u,{key:1,name:(d=_(c).copyButton)==null?void 0:d.iconCopy,size:"18"},null,8,["name"]))]}),_:1})])],2)}}}),T=g(P,[["__scopeId","data-v-b902e007"]]),A={key:0,class:"filename"},M=m({__name:"ProseCode",props:{code:{type:String,default:""},language:{type:String,default:null},filename:{type:String,default:null},highlights:{type:Array,default:()=>[]}},setup(e){const n=i(!1);return(s,t)=>{const c=T;return a(),p("div",{class:v([[`highlight-${e.language}`],"prose-code"]),onMouseenter:t[0]||(t[0]=o=>n.value=!0),onMouseleave:t[1]||(t[1]=o=>n.value=!1)},[e.filename?(a(),p("span",A,V(e.filename),1)):z("",!0),I(s.$slots,"default",{},void 0,!0),C(c,{show:n.value,content:e.code,class:"copy-button"},null,8,["show","content"])],34)}}}),j=g(M,[["__scopeId","data-v-fe67e4ba"]]);export{j as default};

import{r as C,j as r}from"./vendor-4NYc3yXY.js";import{g as w,b,c as k,s as x,d as S,e as R,z as $,D as M,J as u,K as m,L as U}from"./index-Dg2DSKlu.js";import{C as j}from"./Card-BYDYKrPk.js";import"./lodash-BkzDGCz7.js";function A(t){return String(t).match(/[\d.\-+]*\s*(.*)/)[1]||""}function X(t){return parseFloat(t)}function K(t){return w("MuiSkeleton",t)}b("MuiSkeleton",["root","text","rectangular","rounded","circular","pulse","wave","withChildren","fitContent","heightAuto"]);const B=t=>{const{classes:e,variant:a,animation:n,hasChildren:i,width:o,height:s}=t;return R({root:["root",a,n,i&&"withChildren",i&&!o&&"fitContent",i&&!s&&"heightAuto"]},K,e)},l=m`
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.4;
  }

  100% {
    opacity: 1;
  }
`,p=m`
  0% {
    transform: translateX(-100%);
  }

  50% {
    /* +0.5s of delay between each loop */
    transform: translateX(100%);
  }

  100% {
    transform: translateX(100%);
  }
`,D=typeof l!="string"?u`
        animation: ${l} 2s ease-in-out 0.5s infinite;
      `:null,E=typeof p!="string"?u`
        &::after {
          animation: ${p} 2s linear 0.5s infinite;
        }
      `:null,N=x("span",{name:"MuiSkeleton",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:a}=t;return[e.root,e[a.variant],a.animation!==!1&&e[a.animation],a.hasChildren&&e.withChildren,a.hasChildren&&!a.width&&e.fitContent,a.hasChildren&&!a.height&&e.heightAuto]}})($(({theme:t})=>{const e=A(t.shape.borderRadius)||"px",a=X(t.shape.borderRadius);return{display:"block",backgroundColor:t.vars?t.vars.palette.Skeleton.bg:M(t.palette.text.primary,t.palette.mode==="light"?.11:.13),height:"1.2em",variants:[{props:{variant:"text"},style:{marginTop:0,marginBottom:0,height:"auto",transformOrigin:"0 55%",transform:"scale(1, 0.60)",borderRadius:`${a}${e}/${Math.round(a/.6*10)/10}${e}`,"&:empty:before":{content:'"\\00a0"'}}},{props:{variant:"circular"},style:{borderRadius:"50%"}},{props:{variant:"rounded"},style:{borderRadius:(t.vars||t).shape.borderRadius}},{props:({ownerState:n})=>n.hasChildren,style:{"& > *":{visibility:"hidden"}}},{props:({ownerState:n})=>n.hasChildren&&!n.width,style:{maxWidth:"fit-content"}},{props:({ownerState:n})=>n.hasChildren&&!n.height,style:{height:"auto"}},{props:{animation:"pulse"},style:D||{animation:`${l} 2s ease-in-out 0.5s infinite`}},{props:{animation:"wave"},style:{position:"relative",overflow:"hidden",WebkitMaskImage:"-webkit-radial-gradient(white, black)","&::after":{background:`linear-gradient(
                90deg,
                transparent,
                ${(t.vars||t).palette.action.hover},
                transparent
              )`,content:'""',position:"absolute",transform:"translateX(-100%)",bottom:0,left:0,right:0,top:0}}},{props:{animation:"wave"},style:E||{"&::after":{animation:`${p} 2s linear 0.5s infinite`}}}]}})),T=C.forwardRef(function(e,a){const n=k({props:e,name:"MuiSkeleton"}),{animation:i="pulse",className:o,component:s="span",height:d,style:f,variant:g="text",width:y,...h}=n,c={...n,animation:i,component:s,variant:g,hasChildren:!!h.children},v=B(c);return r.jsx(N,{as:s,ref:a,className:S(v.root,o),ownerState:c,...h,style:{width:y,height:d,...f}})}),W=U(j)`
  margin: 1rem auto;
  min-width: 250px;
  min-height: 450px;
`,L=()=>r.jsx(W,{children:r.jsx(T,{variant:"rectangular",width:"100%",height:"100%"})});export{L as default};

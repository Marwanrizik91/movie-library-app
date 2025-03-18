import{r as d,j as s}from"./vendor-BwLHuuzS.js";import{g as f,a as x,u as y,s as p,c as v,b,d as j,M as I,T as w,A as S,B as N}from"./index-DUtdwseD.js";import{C as k}from"./Card-DQfqpS8g.js";import"./lodash-BkzDGCz7.js";function O(e){return f("MuiCardMedia",e)}x("MuiCardMedia",["root","media","img"]);const E=e=>{const{classes:t,isMediaComponent:a,isImageComponent:o}=e;return b({root:["root",a&&"media",o&&"img"]},O,t)},T=p("div",{name:"MuiCardMedia",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:a}=e,{isMediaComponent:o,isImageComponent:i}=a;return[t.root,o&&t.media,i&&t.img]}})({display:"block",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center",variants:[{props:{isMediaComponent:!0},style:{width:"100%"}},{props:{isImageComponent:!0},style:{objectFit:"cover"}}]}),R=["video","audio","picture","iframe","img"],U=["picture","img"],_=d.forwardRef(function(t,a){const o=y({props:t,name:"MuiCardMedia"}),{children:i,className:n,component:r="div",image:c,src:u,style:m,...C}=o,l=R.includes(r),h=!l&&c?{backgroundImage:`url("${c}")`,...m}:m,g={...o,component:r,isMediaComponent:l,isImageComponent:U.includes(r)},M=E(g);return s.jsx(T,{className:v(M.root,n),as:r,role:!l&&c?"img":void 0,ref:a,style:h,ownerState:g,src:l?c||u:void 0,...C,children:i})}),A=p(k)`
  margin: 1rem auto;
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 450px;
  cursor: pointer;
  &:hover {
    transform: translateY(-2px);
  }
`,P=p(_)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  background-color: lightgray;
  cursor: pointer;
`,B=p(N)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: top;
  padding-top: 1rem;
`,H=({movie:e})=>{const t=d.useMemo(()=>j(e.poster_path),[e.poster_path]),[a,o]=d.useState(!1),[i,n]=d.useState(!1),r=()=>{n(!0),setTimeout(()=>{n(!1),o(!1)},S)};return s.jsxs(s.Fragment,{children:[s.jsx(I,{movie:e,isOpen:a,isClosing:i,onClose:r}),s.jsxs(A,{tabIndex:0,onClick:()=>o(!0),children:[s.jsx(P,{loading:"lazy",component:"img",image:t,alt:e.title}),s.jsx(B,{children:!e.poster_path&&s.jsx(w,{color:"primary.light",variant:"h3",component:"h2",children:e.title})})]})]})};export{H as default};

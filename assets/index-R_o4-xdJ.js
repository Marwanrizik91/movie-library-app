import{r as c,j as i}from"./vendor-4NYc3yXY.js";import{g as y,b as f,c as v,s as m,d as x,e as b,f as j,T as I,B as w,A as O,M as S}from"./index-CiWaMhmc.js";import{C as k}from"./Card-DluNCM7G.js";import"./lodash-BkzDGCz7.js";function N(e){return y("MuiCardMedia",e)}f("MuiCardMedia",["root","media","img"]);const E=e=>{const{classes:t,isMediaComponent:s,isImageComponent:o}=e;return b({root:["root",s&&"media",o&&"img"]},N,t)},T=m("div",{name:"MuiCardMedia",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:s}=e,{isMediaComponent:o,isImageComponent:a}=s;return[t.root,o&&t.media,a&&t.img]}})({display:"block",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center",variants:[{props:{isMediaComponent:!0},style:{width:"100%"}},{props:{isImageComponent:!0},style:{objectFit:"cover"}}]}),R=["video","audio","picture","iframe","img"],U=["picture","img"],$=c.forwardRef(function(t,s){const o=v({props:t,name:"MuiCardMedia"}),{children:a,className:n,component:r="div",image:l,src:u,style:p,...C}=o,d=R.includes(r),h=!d&&l?{backgroundImage:`url("${l}")`,...p}:p,g={...o,component:r,isMediaComponent:d,isImageComponent:U.includes(r)},M=E(g);return i.jsx(T,{className:x(M.root,n),as:r,role:!d&&l?"img":void 0,ref:s,style:h,ownerState:g,src:d?l||u:void 0,...C,children:a})}),A=m($)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  background-color: lightgray;
  cursor: pointer;
`,D=m(w)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: top;
  padding-top: 1rem;
`,F=({posterPath:e,title:t,movieId:s})=>{const o=c.useMemo(()=>j(e),[e]);return i.jsxs(i.Fragment,{children:[i.jsx(A,{loading:"lazy",component:"img",image:o,alt:t,"aria-describedby":`movie-${s}-img-desc`}),i.jsx(D,{children:!e&&i.jsx(I,{id:`movie-${s}-title`,color:"primary.light",variant:"h3",component:"h2",children:t})})]})},_=()=>{const[e,t]=c.useState(!1),[s,o]=c.useState(!1);return{isOpen:e,isClosing:s,handleClose:()=>{o(!0),setTimeout(()=>{o(!1),t(!1)},O)},handleOpen:()=>t(!0)}},B=m(k)`
  margin: 1rem auto;
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 450px;
  cursor: pointer;
  &:hover {
    transform: translateY(-2px);
  }
`,K=({movie:e})=>{const{isOpen:t,isClosing:s,handleClose:o,handleOpen:a}=_();return i.jsxs(i.Fragment,{children:[i.jsx(S,{movie:e,isOpen:t,isClosing:s,onClose:o}),i.jsx(B,{role:"article","aria-labelledby":`movie-${e.id}-title`,"aria-describedby":`movie-${e.id}-desc`,id:`movie-${e.id}-title`,onClick:a,tabIndex:0,onKeyDown:n=>{(n.key==="Enter"||n.key===" ")&&(n.preventDefault(),a())},children:i.jsx(F,{posterPath:e.poster_path,title:e.title,movieId:e.id})})]})};export{F as MovieImage,K as default};

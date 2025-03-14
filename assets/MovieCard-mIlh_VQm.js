import{s as no,a as eo,r as c,u as io,e as ro,j as e,c as B,g as $,C as so,T as lo,b as co,d as L,f as po,h as A,i as uo,k as C,l as d,m as U,B as go,n as xo,o as vo,p as z,q as yo,t as ho,v as F,w as bo,x as D,y as T,z as p,A as W,M as fo,D as G,E as mo,F as Co}from"./index-D7-G4GGO.js";function So(o={}){const{themeId:t,defaultTheme:a,defaultClassName:n="MuiBox-root",generateClassName:i}=o,r=no("div",{shouldForwardProp:l=>l!=="theme"&&l!=="sx"&&l!=="as"})(eo);return c.forwardRef(function(y,u){const g=io(a),{className:x,component:S="div",...h}=ro(y);return e.jsx(r,{as:S,ref:u,className:B(x,i?i(n):n),theme:t&&g[t]||g,...h})})}const Io=$("MuiBox",["root"]),zo=co(),M=So({themeId:lo,defaultTheme:zo,defaultClassName:Io.root,generateClassName:so.generate});function wo(o){return L("MuiButton",o)}const m=$("MuiButton",["root","text","textInherit","textPrimary","textSecondary","textSuccess","textError","textInfo","textWarning","outlined","outlinedInherit","outlinedPrimary","outlinedSecondary","outlinedSuccess","outlinedError","outlinedInfo","outlinedWarning","contained","containedInherit","containedPrimary","containedSecondary","containedSuccess","containedError","containedInfo","containedWarning","disableElevation","focusVisible","disabled","colorInherit","colorPrimary","colorSecondary","colorSuccess","colorError","colorInfo","colorWarning","textSizeSmall","textSizeMedium","textSizeLarge","outlinedSizeSmall","outlinedSizeMedium","outlinedSizeLarge","containedSizeSmall","containedSizeMedium","containedSizeLarge","sizeMedium","sizeSmall","sizeLarge","fullWidth","startIcon","endIcon","icon","iconSizeSmall","iconSizeMedium","iconSizeLarge","loading","loadingWrapper","loadingIconPlaceholder","loadingIndicator","loadingPositionCenter","loadingPositionStart","loadingPositionEnd"]),Bo=c.createContext({}),Mo=c.createContext(void 0),$o=o=>{const{color:t,disableElevation:a,fullWidth:n,size:i,variant:r,loading:s,loadingPosition:l,classes:y}=o,u={root:["root",s&&"loading",r,`${r}${d(t)}`,`size${d(i)}`,`${r}Size${d(i)}`,`color${d(t)}`,a&&"disableElevation",n&&"fullWidth",s&&`loadingPosition${d(l)}`],startIcon:["icon","startIcon",`iconSize${d(i)}`],endIcon:["icon","endIcon",`iconSize${d(i)}`],loadingIndicator:["loadingIndicator"],loadingWrapper:["loadingWrapper"]},g=U(u,wo,y);return{...y,...g}},V=[{props:{size:"small"},style:{"& > *:nth-of-type(1)":{fontSize:18}}},{props:{size:"medium"},style:{"& > *:nth-of-type(1)":{fontSize:20}}},{props:{size:"large"},style:{"& > *:nth-of-type(1)":{fontSize:22}}}],Po=C(go,{shouldForwardProp:o=>xo(o)||o==="classes",name:"MuiButton",slot:"Root",overridesResolver:(o,t)=>{const{ownerState:a}=o;return[t.root,t[a.variant],t[`${a.variant}${d(a.color)}`],t[`size${d(a.size)}`],t[`${a.variant}Size${d(a.size)}`],a.color==="inherit"&&t.colorInherit,a.disableElevation&&t.disableElevation,a.fullWidth&&t.fullWidth,a.loading&&t.loading]}})(vo(({theme:o})=>{const t=o.palette.mode==="light"?o.palette.grey[300]:o.palette.grey[800],a=o.palette.mode==="light"?o.palette.grey.A100:o.palette.grey[700];return{...o.typography.button,minWidth:64,padding:"6px 16px",border:0,borderRadius:(o.vars||o).shape.borderRadius,transition:o.transitions.create(["background-color","box-shadow","border-color","color"],{duration:o.transitions.duration.short}),"&:hover":{textDecoration:"none"},[`&.${m.disabled}`]:{color:(o.vars||o).palette.action.disabled},variants:[{props:{variant:"contained"},style:{color:"var(--variant-containedColor)",backgroundColor:"var(--variant-containedBg)",boxShadow:(o.vars||o).shadows[2],"&:hover":{boxShadow:(o.vars||o).shadows[4],"@media (hover: none)":{boxShadow:(o.vars||o).shadows[2]}},"&:active":{boxShadow:(o.vars||o).shadows[8]},[`&.${m.focusVisible}`]:{boxShadow:(o.vars||o).shadows[6]},[`&.${m.disabled}`]:{color:(o.vars||o).palette.action.disabled,boxShadow:(o.vars||o).shadows[0],backgroundColor:(o.vars||o).palette.action.disabledBackground}}},{props:{variant:"outlined"},style:{padding:"5px 15px",border:"1px solid currentColor",borderColor:"var(--variant-outlinedBorder, currentColor)",backgroundColor:"var(--variant-outlinedBg)",color:"var(--variant-outlinedColor)",[`&.${m.disabled}`]:{border:`1px solid ${(o.vars||o).palette.action.disabledBackground}`}}},{props:{variant:"text"},style:{padding:"6px 8px",color:"var(--variant-textColor)",backgroundColor:"var(--variant-textBg)"}},...Object.entries(o.palette).filter(yo()).map(([n])=>({props:{color:n},style:{"--variant-textColor":(o.vars||o).palette[n].main,"--variant-outlinedColor":(o.vars||o).palette[n].main,"--variant-outlinedBorder":o.vars?`rgba(${o.vars.palette[n].mainChannel} / 0.5)`:z(o.palette[n].main,.5),"--variant-containedColor":(o.vars||o).palette[n].contrastText,"--variant-containedBg":(o.vars||o).palette[n].main,"@media (hover: hover)":{"&:hover":{"--variant-containedBg":(o.vars||o).palette[n].dark,"--variant-textBg":o.vars?`rgba(${o.vars.palette[n].mainChannel} / ${o.vars.palette.action.hoverOpacity})`:z(o.palette[n].main,o.palette.action.hoverOpacity),"--variant-outlinedBorder":(o.vars||o).palette[n].main,"--variant-outlinedBg":o.vars?`rgba(${o.vars.palette[n].mainChannel} / ${o.vars.palette.action.hoverOpacity})`:z(o.palette[n].main,o.palette.action.hoverOpacity)}}}})),{props:{color:"inherit"},style:{color:"inherit",borderColor:"currentColor","--variant-containedBg":o.vars?o.vars.palette.Button.inheritContainedBg:t,"@media (hover: hover)":{"&:hover":{"--variant-containedBg":o.vars?o.vars.palette.Button.inheritContainedHoverBg:a,"--variant-textBg":o.vars?`rgba(${o.vars.palette.text.primaryChannel} / ${o.vars.palette.action.hoverOpacity})`:z(o.palette.text.primary,o.palette.action.hoverOpacity),"--variant-outlinedBg":o.vars?`rgba(${o.vars.palette.text.primaryChannel} / ${o.vars.palette.action.hoverOpacity})`:z(o.palette.text.primary,o.palette.action.hoverOpacity)}}}},{props:{size:"small",variant:"text"},style:{padding:"4px 5px",fontSize:o.typography.pxToRem(13)}},{props:{size:"large",variant:"text"},style:{padding:"8px 11px",fontSize:o.typography.pxToRem(15)}},{props:{size:"small",variant:"outlined"},style:{padding:"3px 9px",fontSize:o.typography.pxToRem(13)}},{props:{size:"large",variant:"outlined"},style:{padding:"7px 21px",fontSize:o.typography.pxToRem(15)}},{props:{size:"small",variant:"contained"},style:{padding:"4px 10px",fontSize:o.typography.pxToRem(13)}},{props:{size:"large",variant:"contained"},style:{padding:"8px 22px",fontSize:o.typography.pxToRem(15)}},{props:{disableElevation:!0},style:{boxShadow:"none","&:hover":{boxShadow:"none"},[`&.${m.focusVisible}`]:{boxShadow:"none"},"&:active":{boxShadow:"none"},[`&.${m.disabled}`]:{boxShadow:"none"}}},{props:{fullWidth:!0},style:{width:"100%"}},{props:{loadingPosition:"center"},style:{transition:o.transitions.create(["background-color","box-shadow","border-color"],{duration:o.transitions.duration.short}),[`&.${m.loading}`]:{color:"transparent"}}}]}})),ko=C("span",{name:"MuiButton",slot:"StartIcon",overridesResolver:(o,t)=>{const{ownerState:a}=o;return[t.startIcon,a.loading&&t.startIconLoadingStart,t[`iconSize${d(a.size)}`]]}})(({theme:o})=>({display:"inherit",marginRight:8,marginLeft:-4,variants:[{props:{size:"small"},style:{marginLeft:-2}},{props:{loadingPosition:"start",loading:!0},style:{transition:o.transitions.create(["opacity"],{duration:o.transitions.duration.short}),opacity:0}},{props:{loadingPosition:"start",loading:!0,fullWidth:!0},style:{marginRight:-8}},...V]})),No=C("span",{name:"MuiButton",slot:"EndIcon",overridesResolver:(o,t)=>{const{ownerState:a}=o;return[t.endIcon,a.loading&&t.endIconLoadingEnd,t[`iconSize${d(a.size)}`]]}})(({theme:o})=>({display:"inherit",marginRight:-4,marginLeft:8,variants:[{props:{size:"small"},style:{marginRight:-2}},{props:{loadingPosition:"end",loading:!0},style:{transition:o.transitions.create(["opacity"],{duration:o.transitions.duration.short}),opacity:0}},{props:{loadingPosition:"end",loading:!0,fullWidth:!0},style:{marginLeft:-8}},...V]})),jo=C("span",{name:"MuiButton",slot:"LoadingIndicator",overridesResolver:(o,t)=>t.loadingIndicator})(({theme:o})=>({display:"none",position:"absolute",visibility:"visible",variants:[{props:{loading:!0},style:{display:"flex"}},{props:{loadingPosition:"start"},style:{left:14}},{props:{loadingPosition:"start",size:"small"},style:{left:10}},{props:{variant:"text",loadingPosition:"start"},style:{left:6}},{props:{loadingPosition:"center"},style:{left:"50%",transform:"translate(-50%)",color:(o.vars||o).palette.action.disabled}},{props:{loadingPosition:"end"},style:{right:14}},{props:{loadingPosition:"end",size:"small"},style:{right:10}},{props:{variant:"text",loadingPosition:"end"},style:{right:6}},{props:{loadingPosition:"start",fullWidth:!0},style:{position:"relative",left:-10}},{props:{loadingPosition:"end",fullWidth:!0},style:{position:"relative",right:-10}}]})),_=C("span",{name:"MuiButton",slot:"LoadingIconPlaceholder",overridesResolver:(o,t)=>t.loadingIconPlaceholder})({display:"inline-block",width:"1em",height:"1em"}),H=c.forwardRef(function(t,a){const n=c.useContext(Bo),i=c.useContext(Mo),r=po(n,t),s=A({props:r,name:"MuiButton"}),{children:l,color:y="primary",component:u="button",className:g,disabled:x=!1,disableElevation:S=!1,disableFocusRipple:h=!1,endIcon:w,focusVisibleClassName:X,fullWidth:Y=!1,id:P,loading:b=null,loadingIndicator:J,loadingPosition:I="center",size:K="medium",startIcon:k,type:N,variant:Q="text",...Z}=s,j=uo(P),R=J??e.jsx(ho,{"aria-labelledby":j,color:"inherit",size:16}),f={...s,color:y,component:u,disabled:x,disableElevation:S,disableFocusRipple:h,fullWidth:Y,loading:b,loadingIndicator:R,loadingPosition:I,size:K,type:N,variant:Q},v=$o(f),oo=(k||b&&I==="start")&&e.jsx(ko,{className:v.startIcon,ownerState:f,children:k||e.jsx(_,{className:v.loadingIconPlaceholder,ownerState:f})}),to=(w||b&&I==="end")&&e.jsx(No,{className:v.endIcon,ownerState:f,children:w||e.jsx(_,{className:v.loadingIconPlaceholder,ownerState:f})}),ao=i||"",E=typeof b=="boolean"?e.jsx("span",{className:v.loadingWrapper,style:{display:"contents"},children:b&&e.jsx(jo,{className:v.loadingIndicator,ownerState:f,children:R})}):null;return e.jsxs(Po,{ownerState:f,className:B(n.className,v.root,g,ao),component:u,disabled:x||b,focusRipple:!h,focusVisibleClassName:B(v.focusVisible,X),ref:a,type:N,id:b?j:P,...Z,classes:v,children:[oo,I!=="end"&&E,l,I==="end"&&E,to]})});function Ro(o){return L("MuiCardMedia",o)}$("MuiCardMedia",["root","media","img"]);const Eo=o=>{const{classes:t,isMediaComponent:a,isImageComponent:n}=o;return U({root:["root",a&&"media",n&&"img"]},Ro,t)},To=C("div",{name:"MuiCardMedia",slot:"Root",overridesResolver:(o,t)=>{const{ownerState:a}=o,{isMediaComponent:n,isImageComponent:i}=a;return[t.root,n&&t.media,i&&t.img]}})({display:"block",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center",variants:[{props:{isMediaComponent:!0},style:{width:"100%"}},{props:{isImageComponent:!0},style:{objectFit:"cover"}}]}),Wo=["video","audio","picture","iframe","img"],_o=["picture","img"],Oo=c.forwardRef(function(t,a){const n=A({props:t,name:"MuiCardMedia"}),{children:i,className:r,component:s="div",image:l,src:y,style:u,...g}=n,x=Wo.includes(s),S=!x&&l?{backgroundImage:`url("${l}")`,...u}:u,h={...n,component:s,isMediaComponent:x,isImageComponent:_o.includes(s)},w=Eo(h);return e.jsx(To,{className:B(w.root,r),as:s,role:!x&&l?"img":void 0,ref:a,style:S,ownerState:h,src:x?l||y:void 0,...g,children:i})});/**
 * @license lucide-react v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lo=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],Ao=F("ChevronRight",Lo);/**
 * @license lucide-react v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uo=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Fo=F("X",Uo),q=o=>o?`${bo}${o}`:"https://placehold.co/400x600",Do=({movie:o})=>{const t=D(),a=c.useMemo(()=>q(o.poster_path),[o.poster_path]),n=c.useMemo(()=>[o.release_date.split("-")[0],o.vote_average?o.vote_average.toFixed(1):"No Rating",o.adult?"Adult":"All Ages",o.original_language.toUpperCase()],[o.release_date,o.vote_average,o.adult,o.original_language]);return e.jsx(Go,{sx:{backgroundImage:`url(${a})`},theme:t,children:e.jsxs(Vo,{children:[e.jsx(T,{variant:"h4",children:o.title}),e.jsx(Ho,{children:n.map((i,r)=>e.jsx(qo,{sx:{backgroundColor:t.palette.info.main,color:t.palette.info.contrastText},children:i},r))}),e.jsx(T,{overflow:"auto",align:"center",variant:"body1",color:"inherit",children:o.overview}),e.jsxs(Xo,{children:["Watch Now",e.jsx(Ao,{size:20})]})]})})},Go=p(M)`
  border-radius: inherit;
  width: 100%;
  height: 100%;
  position: relative;
  background-size: cover;
  background-position: center top;
  background-repeat: no-repeat;
  :after {
    content: "";
    position: absolute;
    inset: 0px;
    z-index: 1;
    background: ${({theme:o})=>{const t=o.palette.background.default;return`linear-gradient(
          40deg,
          ${t} 8.16%,
          rgba(6, 10, 23, 0) 40%
        ),
        linear-gradient(0deg, ${t} 3.91%, rgba(6, 10, 23, 0) 55%)`}};
  }
`,Vo=p(M)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: absolute;
  bottom: 0;
  padding: 15px;
  z-index: 4;
  gap: 15px;
`,Ho=p.div`
  display: flex;
  gap: 10px;
`,qo=p(M)`
  display: inline-block;
  padding: 5px 10px;
  border-radius: 5px;
`,Xo=p(H)`
  display: flex;
  align-items: center;
  gap: 3px;
  align-self: center;
  margin-inline-start: 10px;
`,O=300,Yo=G`
  0% {
    transform: scale(0);
    opacity: 0;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
`,Jo=G`
  0% {
    transform: scale(1);
    opacity: 1;
  }
  100% {
    transform: scale(0);
    opacity: 0;
  }
`,Ko=({movie:o,isOpen:t,isClosing:a,onClose:n})=>{const i=D();return e.jsx(Qo,{open:t,onClose:n,children:e.jsxs(Zo,{sx:{border:`1px solid ${i.palette.primary.main}`,backgroundColor:i.palette.background.default,animation:a?W`
                ${Jo} ${O}ms ease-in-out forwards
              `:W`
                ${Yo} ${O}ms ease-in-out forwards
              `},children:[e.jsx(Do,{movie:o}),e.jsx(ot,{onClick:n,children:e.jsx(Fo,{size:30})})]})})},Qo=p(fo)`
  display: flex;
  align-items: center;
  justify-content: center;
`,Zo=p(M)`
  width: 90%;
  max-width: 700px;
  height: 70%;
  max-height: 750px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border-radius: 10px;
  position: relative;
  transform-origin: center;
  :focus {
    outline: none;
  }
  @media (max-width: 600px) {
    width: 95%;
    height: 85%;
  }
`,ot=p(H)`
  position: absolute;
  top: 10px;
  right: 10px;
  font-weight: bold;
  font-size: 20px;
  border: none;
  z-index: 5;
  background: transparent;
  :hover {
    background: transparent;
  }
`,tt=p(Co)`
  margin: 1rem auto;
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 450px;
  &:hover {
    transform: translateY(-2px);
  }
`,at=p(Oo)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  background-color: lightgray;
  cursor: pointer;
`,et=({movie:o})=>{const t=c.useMemo(()=>q(o.poster_path),[o.poster_path]),[a,n]=c.useState(!1),[i,r]=c.useState(!1),s=()=>{r(!0),setTimeout(()=>{r(!1),n(!1)},mo)};return e.jsxs(e.Fragment,{children:[e.jsx(Ko,{movie:o,isOpen:a,isClosing:i,onClose:s}),e.jsx(tt,{onClick:()=>n(!0),children:e.jsx(at,{loading:"lazy",component:"img",image:t,alt:o.title})})]})};export{et as default};

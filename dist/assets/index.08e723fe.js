var P=Object.defineProperty,j=Object.defineProperties;var G=Object.getOwnPropertyDescriptors;var k=Object.getOwnPropertySymbols;var H=Object.prototype.hasOwnProperty,D=Object.prototype.propertyIsEnumerable;var E=(e,n,i)=>n in e?P(e,n,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[n]=i,v=(e,n)=>{for(var i in n||(n={}))H.call(n,i)&&E(e,i,n[i]);if(k)for(var i of k(n))D.call(n,i)&&E(e,i,n[i]);return e},w=(e,n)=>j(e,G(n));import{s as l,j as t,r as h,u as V,a as y,b as m,c,d as W,e as L,F as I,B as q,R as U,f as S,W as K,g as Q,h as X,i as Y,k as Z,P as J,l as ee,m as te}from"./vendor.d7160c10.js";const ne=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const d of o)if(d.type==="childList")for(const s of d.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function i(o){const d={};return o.integrity&&(d.integrity=o.integrity),o.referrerpolicy&&(d.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?d.credentials="include":o.crossorigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function a(o){if(o.ep)return;o.ep=!0;const d=i(o);fetch(o.href,d)}};ne();const ie=l.div`
  flex-wrap: nowrap;
  overflow-x: scroll;
  display: -webkit-box;
`;function F(e){return t(ie,{children:e.children})}const re=l.div`
  margin-left: ${e=>e.marginLeft?e.marginLeft:"0px"};
  margin-right: ${e=>e.marginRight?e.marginRight:"0px"}
`;function R(e){return t(re,{marginLeft:e.marginLeft,marginRight:e.marginRight,children:e.children})}const oe=l.p`
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 700;
  font-size: ${e=>e.fontSize?e.fontSize:"20px"};
  line-height: 27px;
  color: #FFFFFF;
`;function b(e){return t(oe,{fontSize:e.fontSize,children:e.children})}function _(){const[e,n]=h.exports.useState({width:0,height:0});return h.exports.useEffect(()=>{function i(){n({width:window.innerWidth,height:window.innerHeight})}return window.addEventListener("resize",i),i(),()=>window.removeEventListener("resize",i)},[]),e}const ae="4.8.0",se={g:"LottieFiles AE ",a:"",k:"",d:"",tc:""},ce=30,de=0,le=119,pe=1080,ge=1080,ue="Comp 1",fe=0,he=[],xe=[{ddd:0,ind:1,ty:4,nm:"Shape Layer 2",sr:1.5,ks:{o:{a:0,k:100,ix:11},r:{a:1,k:[{i:{x:[.711],y:[1]},o:{x:[.992],y:[0]},t:0,s:[0]},{i:{x:[0],y:[1]},o:{x:[.309],y:[0]},t:45,s:[360]},{t:89,s:[720]}],ix:10,x:`var $bm_rt;
$bm_rt = loopOut();`},p:{a:0,k:[538,537.784,0],ix:2},a:{a:0,k:[-1.021,7.187,0],ix:1},s:{a:0,k:[97,97,100],ix:6}},ao:0,shapes:[{ty:"gr",it:[{ty:"rc",d:1,s:{a:0,k:[249.074,249.074],ix:2},p:{a:0,k:[0,0],ix:3},r:{a:1,k:[{i:{x:[.711],y:[1]},o:{x:[1],y:[0]},t:0,s:[15]},{i:{x:[0],y:[1]},o:{x:[.318],y:[0]},t:45,s:[264.356]},{t:89,s:[15]}],ix:4,x:`var $bm_rt;
$bm_rt = loopOut();`},nm:"Rectangle Path 1",mn:"ADBE Vector Shape - Rect",hd:!1},{ty:"st",c:{a:0,k:[1,1,1,1],ix:3},o:{a:0,k:100,ix:4},w:{a:0,k:40,ix:5},lc:1,lj:1,ml:4,bm:0,nm:"Stroke 1",mn:"ADBE Vector Graphic - Stroke",hd:!1},{ty:"tr",p:{a:0,k:[-1.017,8.218],ix:2},a:{a:0,k:[.004,1.031],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"Rectangle 1",np:3,cix:2,bm:0,ix:1,mn:"ADBE Vector Group",hd:!1}],ip:0,op:1350,st:0,bm:0}],me=[];var be={v:ae,meta:se,fr:ce,ip:de,op:le,w:pe,h:ge,nm:ue,ddd:fe,assets:he,layers:xe,markers:me};const ye=l.div`
  position: fixed;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(5px);
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
  visibility: ${e=>e.visibility?"":"hidden"}
`;function ve(e){const n={animationData:be,loop:!0,autoplay:!0},{View:i}=V(n);return i}function C({open:e}){return t(ye,{visibility:e,children:t("div",{style:{width:"30%"},children:t(ve,{})})})}const we=l.div`
  height: 441px;
  background: url(${e=>e.backgroundImage});
  height: ${e=>e.isMobile?"479px":"441px"};
  background-repeat:no-repeat;
  background-size: cover;
`;function M(e){return t(we,{backgroundImage:e.image,isMobile:e.isMobile})}var Fe="/assets/bpLogo.5e352df3.svg";const ke=l.div`
  display:flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  width:100%;
  height:68px;
  background: #0E0E0E;
  padding:15px 60px;
  position: fixed;
  z-index:99;
`,Ee=l.div`
  display:flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;

  img{
    margin-right: 41px;
  }

  p{
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 14px;
    text-align: center;
    color: #FFFFFF;
    margin-right:60px;
    cursor: pointer;
    transition: 0.2s;

    :hover{
      opacity:0.8;
    }
  }
`,Se=l.div`
  border-radius:50%;
  width:44px;
  height:44px;
  background: url(${e=>e.backgroundImage});
  background-repeat: no-repeat;
  background-size: cover;
`;function T(e){const n=y(),i=m(a=>{var o;return(o=a.HomeReducer)==null?void 0:o.listHomePageInfo});return c(ke,{children:[c(Ee,{children:[t("img",{alt:"logo",src:Fe}),t("p",{onClick:()=>n("/"),children:"In\xEDcio"}),t("p",{children:"Conte\xFAdo"}),t("p",{children:"Forma\xE7\xE3o"}),t("p",{children:"Lives"})]}),t("div",{children:t(Se,{backgroundImage:i==null?void 0:i.profile_image})})]})}var ze="/assets/ico_home.cbdf7c30.svg",Le="/assets/ico_conteudo.29d0f981.svg",Ie="/assets/ico_formacao.42098e6a.svg",Re="/assets/ico_lives.bfd28d78.svg",_e="/assets/ico_perfil.b0ade000.svg";const Ce=l.div`
  display:flex;
  align-items: center;
  width:100%;
  height:79px;
  background: #000000;
  padding:0px 15px;
  position: fixed;
  bottom: 0;
  z-index:99;

  div{
    width:100%;
    display: flex;
    flex-direction: column;
    justify-items:center;
    align-items: center;
  }

  p{
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 11px;
    text-align: center;
    color: #FFFFFF;
    cursor: pointer;
    transition: 0.2s;
    margin-top:8px;
  }
`,x=l.div`
  transition: 0.2s; 
  cursor: pointer;
  margin-right:${e=>e.lastOne?"0px":"16px"};

  p{
    color: ${e=>e.isSelected?"#FFFFFF":"#696C7B"}
  }
  
  :hover{
    p{
      color: #FFFFFF
    }
  }
`;function O(e){return y(),c(Ce,{children:[c(x,{isSelected:!0,children:[t("img",{alt:"ico",src:ze}),t("p",{children:"In\xEDcio"})]}),c(x,{isSelected:!1,children:[t("img",{alt:"ico",src:Le}),t("p",{children:"Conte\xFAdo"})]}),c(x,{isSelected:!1,children:[t("img",{alt:"ico",src:Ie}),t("p",{children:"Forma\xE7\xE3o"})]}),c(x,{isSelected:!1,children:[t("img",{alt:"ico",src:Re}),t("p",{children:"Lives"})]}),c(x,{isSelected:!1,lastOne:!0,children:[t("img",{alt:"ico",src:_e}),t("p",{children:"Perfil"})]})]})}const z=l.div`
  width: 251px;
  background: #131313;
  border-radius: 5px;
  margin-right: 10px;
  padding-bottom: 11px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor:pointer;
  transition: 0.3s;

  :hover{
    opacity: 0.55;
  }

  p{
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    line-height: 18px;
    color: #FFFFFF;
    margin-left:9px;
    margin-bottom:29px;
    margin-top:9px;
  }

  span{
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-size: 10px;
    line-height: 16px;
    color: #B4B8CE;
    margin-left:9px;
  }

  div{
    height: 141px;
    background: url(${e=>e.backgroundImage});
    border-radius: 5px 5px 0px 0px;
  }
`,Me="https://run.mocky.io/v3",$=W.create({baseURL:Me}),A="GET_HOME_PAGE_INFO",Te=(e,n)=>{e({type:A,data:n})},B=e=>n=>{$.get("/ec0b8704-9d4c-4806-8cf5-2fec2f4f0cdd",{headers:{"Content-Type":"application/json"}}).then(i=>{Te(n,i==null?void 0:i.data),e(i)}).catch(i=>{e(i.response)})};function Oe(e){const n=L(),i=y(),a=_(),[o,d]=h.exports.useState(!1),s=m(r=>{var f;return(f=r.HomeReducer)==null?void 0:f.listHomePageInfo}),p=m(r=>{var f;return(f=r.HomeReducer)==null?void 0:f.listOfSeries}),g=m(r=>{var f;return(f=r.HomeReducer)==null?void 0:f.listOfTraining});h.exports.useEffect(()=>{d(!0),n(B(r=>{d(!1)}))},[]);const u=r=>{d(!0),i(`conteudo/${r.id}`)};return c(I,{children:[t(C,{open:o}),a.width>767?t(T,{}):t(O,{}),t(M,{isMobile:a.width<767,image:a.width>767?s==null?void 0:s.featured_image:s==null?void 0:s.featured_image_mobile}),c(R,{marginLeft:a.width>767?"61px":"8px",children:[t("div",{style:a.width>767?{marginTop:54}:{marginTop:33}}),t(b,{children:"S\xE9ries"}),t("div",{style:{marginTop:10}}),t(F,{children:p.map(r=>c(z,{backgroundImage:r==null?void 0:r.image_url,onClick:()=>{u(r)},children:[t("div",{}),t("p",{children:r==null?void 0:r.title}),c("span",{children:[r==null?void 0:r.launch_date," - ",r==null?void 0:r.episodes_counter," epis\xF3dios - ",r==null?void 0:r.views," visualiza\xE7\xF5es"]})]}))}),t("div",{style:{marginTop:40}}),t(b,{children:"N\xFAcleo de forma\xE7\xE3o"}),t("div",{style:{marginTop:10}}),t(F,{children:g.map(r=>c(z,{backgroundImage:r==null?void 0:r.image_url,children:[t("div",{}),t("p",{children:r==null?void 0:r.title}),c("span",{children:[" ",r==null?void 0:r.teacher," "]})]}))}),t("div",{style:{marginTop:40}})]})]})}const $e=l.button`
  background: #FFFFFF;
  border-radius: 3px;
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 100%;
  text-align: center;
  color: #000000;
  padding:12px 44px;
  width: 230px;
  height: 41px;
  border-style: solid;
  border-width:0px;
`;function Ae({onClick:e,children:n}){return t($e,{onClick:()=>e,children:n})}const N="GET_SINGLE_CARD_INFO",Be=(e,n)=>{e({type:N,data:n})},Ne=(e,n)=>i=>{$.get(`/${e}`,{headers:{"Content-Type":"application/json"}}).then(a=>{Be(i,a==null?void 0:a.data),n(a.status)}).catch(a=>{n(a.response)})},Pe=l.div`
  background: linear-gradient(
    180deg, #151515 0%, rgba(0, 0, 0, 0.755068) 26.68%, rgba(0, 0, 0, 0) 80.51%
  );
  transform: rotate(-180deg);
  height: 272px;
  margin-top: -272px;
`,je=l.div`
  display:flex;
  flex-direction: row;
  margin-bottom: 26px;

  div{
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 2px 10px;
    border: 1px solid #E1E4EF;
    box-sizing: border-box;
    border-radius: 2px;
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    color: #E1E4EF;
    margin-top:26px;
    margin-right:10px;
  }
`,Ge=l.p`
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 200%;
  color: #FFFFFF;
  margin-top: 47px;
  margin-bottom: 35px;
`,He=l.div`
  width: 256px;
  height: 144px;
  background: url(${e=>e.backgroundImage});
  background-repeat: no-repeat;
  background-size: cover;
  margin-right:10px;
`;function De(){const e=L();y();const n=_(),[i,a]=h.exports.useState(!1),[o,d]=h.exports.useState([]),s=m(p=>{var g;return(g=p.SinglePageReducer)==null?void 0:g.listSingleCardInfo});return h.exports.useEffect(()=>{a(!0);let p=window.location.href.split("/");const g=p[p.length-1];e(Ne(g,()=>{a(!1)})),e(B(u=>{var r;a(!1),console.log(u==null?void 0:u.status),(u==null?void 0:u.status)===200&&d((r=u.data)==null?void 0:r.series)}))},[]),c(I,{children:[t(C,{open:i}),n.width>767?t(T,{}):t(O,{}),t(M,{image:s==null?void 0:s.image_url}),t(Pe,{}),c(R,{marginLeft:n.width>767?"61px":"8px",marginRight:n.width>767?"61px":"8px",children:[t(b,{fontSize:"39px",children:s==null?void 0:s.title}),t(je,{children:s==null?void 0:s.tags.map((p,g)=>c("div",{children:[" ",p," "]}))}),t(Ae,{onClick:()=>{},children:"Assista Agora"}),t(Ge,{children:s==null?void 0:s.description}),t(b,{fontSize:"20px",children:"Veja tamb\xE9m"}),t(F,{children:o.map((p,g)=>g<5?t(He,{backgroundImage:p==null?void 0:p.image_url}):"")}),t("div",{style:{marginTop:n.width>767?"16px":"100px"}})]})]})}function Ve(){return t(q,{children:c(U,{children:[t(S,{path:"/",element:t(Oe,{})}),t(S,{path:"/conteudo/:id",element:t(De,{})})]})})}const We=K`
  :root {
    --background: #151515
  }
  * {
    margin:0;
    padding:0;
    box-sizing: border-box;
    font-family: "Open Sans", sans-serif;
    font-weight: normal;
    line-height: 22px;
  }

  html {
    @media (max-width: 1080px){
      font-size: 93.75%;
    }

    @media (max-width: 720px){
      font-size: 87.5%;
    }
  }

  body {
    background: var(--background);
    -webkit-font-smoothing: antialiased;
  }

  button {
    cursor: pointer;
    font-family: 'Montserrat SemiBold';
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 100%;
  }

  [disabled] {
    cursor: not-allowed;
  }
  input[type=number]::-webkit-inner-spin-button { 
    -webkit-appearance: none;
  }
  input[type=number] { 
    -moz-appearance: textfield;
    appearance: textfield;

  }
  ::-webkit-scrollbar { 
    display: none;
  }
  
`,qe={listHomePageInfo:[],listOfSeries:[],listOfTraining:[],listSingleCardInfo:null};var Ue=(e=qe,n)=>{switch(n.type){case A:var i,a,o;return i=n.data,a=n.data.series,o=n.data.training,w(v({},e),{listHomePageInfo:i,listOfSeries:a,listOfTraining:o})}return e};const Ke={listSingleCardInfo:null};var Qe=(e=Ke,n)=>{switch(n.type){case N:var i;return i=n.data,w(v({},e),{listSingleCardInfo:i})}return e},Xe=Q({HomeReducer:Ue,SinglePageReducer:Qe});const Ye=X(Xe,Y(Z));function Ze(){return c(J,{store:Ye,children:[t(We,{}),t(Ve,{})]})}ee.render(t(te.StrictMode,{children:t(Ze,{})}),document.getElementById("root"));

"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2609],{3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>m});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=n.createContext({}),l=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},p=function(e){var r=l(e.components);return n.createElement(c.Provider,{value:r},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=l(t),f=o,m=u["".concat(c,".").concat(f)]||u[f]||d[f]||a;return t?n.createElement(m,s(s({ref:r},p),{},{components:t})):n.createElement(m,s({ref:r},p))}));function m(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,s=new Array(a);s[0]=f;var i={};for(var c in r)hasOwnProperty.call(r,c)&&(i[c]=r[c]);i.originalType=e,i[u]="string"==typeof e?e:o,s[1]=i;for(var l=2;l<a;l++)s[l]=t[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},64271:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>p,contentTitle:()=>c,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var n=t(87462),o=t(63366),a=(t(67294),t(3905)),s=["components"],i={id:"learn-sassafras",title:"Polkadot Block Production: SASSAFRAS",sidebar_label:"SASSAFRAS",description:"The Consensus Mechanism of Polkadot.",keywords:["consensus","proof of stake","nominated proof of stake","hybrid consensus","block production","sassafras","babe"],slug:"../learn-sassafras"},c=void 0,l={unversionedId:"learn/learn-sassafras",id:"learn/learn-sassafras",title:"Polkadot Block Production: SASSAFRAS",description:"The Consensus Mechanism of Polkadot.",source:"@site/../docs/learn/learn-sassafras.md",sourceDirName:"learn",slug:"/learn-sassafras",permalink:"/docs/learn-sassafras",draft:!1,editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/learn/learn-sassafras.md",tags:[],version:"current",lastUpdatedBy:"Filippo",lastUpdatedAt:1695800641,formattedLastUpdatedAt:"Sep 27, 2023",frontMatter:{id:"learn-sassafras",title:"Polkadot Block Production: SASSAFRAS",sidebar_label:"SASSAFRAS",description:"The Consensus Mechanism of Polkadot.",keywords:["consensus","proof of stake","nominated proof of stake","hybrid consensus","block production","sassafras","babe"],slug:"../learn-sassafras"},sidebar:"docs",previous:{title:"Asynchronous Backing",permalink:"/docs/learn-async-backing"},next:{title:"Archive",permalink:"/docs/learn-archive-index"}},p={},u=[{value:"Resources",id:"resources",level:2}],d={toc:u},f="wrapper";function m(e){var r=e.components,t=(0,o.Z)(e,s);return(0,a.kt)(f,(0,n.Z)({},d,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"SASSAFRAS (Semi Anonymous Sortition of Staked Assignees For Fixed-time Rhythmic Assignment of Slots)\n(aka SASSY BABE or BADASS BABE), is an extension of BABE and acts as a constant-time block\nproduction protocol. This approach tries to address the shortcomings of\n",(0,a.kt)("a",{parentName:"p",href:"/docs/learn-consensus#block-production-babe"},"BABE")," by ensuring that exactly one block is produced\nwith time-constant intervals. The protocol utilizes zk-SNARKs to construct a\nring-",(0,a.kt)("a",{parentName:"p",href:"/docs/learn-cryptography#vrf"},"VRF")," and is a work in progress."),(0,a.kt)("p",null,"This page will be updated as progress ensues."),(0,a.kt)("h2",{id:"resources"},"Resources"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://research.web3.foundation/Polkadot/protocols/block-production/SASSAFRAS"},"Web3 Foundation Research page"),"\nabout SASSAFRAS")))}m.isMDXComponent=!0}}]);
(self.webpackChunk=self.webpackChunk||[]).push([[2483],{47940:(e,o,t)=>{"use strict";t.d(o,{Z:()=>p});var n=t(74165),a=t(15861),r=t(67294),i=t(87152),s=t(17145),l=t(67425);function c(e,o,t){return u.apply(this,arguments)}function u(){return(u=(0,a.Z)((0,n.Z)().mark((function e(o,t,a){var r,l,c,u,d;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=void 0,l=void 0,e.t0=o,e.next="polkadot"===e.t0?5:"kusama"===e.t0?7:"statemine"===e.t0?9:"statemint"===e.t0?11:13;break;case 5:return r="wss://rpc.polkadot.io",e.abrupt("break",14);case 7:return r="wss://kusama-rpc.polkadot.io/",e.abrupt("break",14);case 9:return r="wss://statemine-rpc.polkadot.io/",e.abrupt("break",14);case 11:return r="wss://statemint-rpc.polkadot.io/",e.abrupt("break",14);case 13:console.log("Unknown socket url provided, no connection made.");case 14:if(void 0!==r){e.next=18;break}return e.abrupt("return");case 18:return c=new i.U(r),e.next=21,s.G.create({provider:c});case 21:u=e.sent,(d=t.split(".")).forEach((function(e){e in u&&(u=u[e])})),e.t1=d[0],e.next="consts"===e.t1?27:"query"===e.t1?29:34;break;case 27:return l=u.toString(),e.abrupt("break",35);case 29:return e.next=31,u();case 31:return l=(l=e.sent).toString(),e.abrupt("break",35);case 34:console.log("Unknown path prefix ("+d[0]+") in "+t);case 35:return e.abrupt("return",l);case 36:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function d(e,o,t,n){switch(o){case"humanReadable":(0,l.HumanReadable)(e,t,n);break;case"precise":(0,l.Precise)(e,t,n);break;case"blocksToDays":(0,l.BlocksToDays)(e,n);break;case"percentage":(0,l.Percentage)(e,n);break;case"permillToPercent":(0,l.PermillToPercent)(e,n);break;case"arrayLength":(0,l.ArrayLength)(e,n);break;default:return void console.log("Ignoring unknown filter type")}}const p=function(e){var o=e.network,t=e.path,i=e.defaultValue,s=e.filter,l=void 0===s?void 0:s,u=(0,r.useState)(""),p=u[0],k=u[1];return o=o.toLowerCase(),(0,r.useEffect)((function(){void 0!==l?d(i.toString(),l,o,k):k(i.toString());var e=void 0;switch(o){case"polkadot":e="wss://rpc.polkadot.io";break;case"kusama":e="wss://kusama-rpc.polkadot.io/";break;case"statemine":e="wss://statemine-rpc.polkadot.io/";break;case"statemint":e="wss://statemint-rpc.polkadot.io/";break;default:console.log("Unknown network provided, "+o)}if(void 0===e)console.log("Failed to connect to a valid websocket, applying default");else{var r=function(){var e=(0,a.Z)((0,n.Z)().mark((function e(){var a;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c(o,t,k);case 2:if(void 0!==(a=e.sent)){e.next=7;break}return e.abrupt("return");case 7:void 0!==l?d(a,l,o,k):k(a);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();try{r()}catch(s){console.log(s)}}}),[]),p}},67425:e=>{var o={polkadot:{precision:1e10,symbol:"DOT"},kusama:{precision:1e12,symbol:"KSM"},statemint:{precision:1e10,symbol:"DOT"},statemine:{precision:1e12,symbol:"KSM"}};e.exports={HumanReadable:function(e,t,n){var a=void 0;if("polkadot"===t||"statemint"===t)a=3;else{if("kusama"!==t&&"statemine"!==t)return void console.log("Unknown network type found when attempting to apply 'Human Readable' filter");a=6}e=parseFloat(e),n((e=Number.isInteger(e/o[t].precision)?e/o[t].precision+" "+o[t].symbol:(e/o[t].precision).toFixed(a)+" "+o[t].symbol).toString())},Precise:function(e,t,n){n(e=(e=parseFloat(e))/o[t].precision+" "+o[t].symbol)},BlocksToDays:function(e,o){o((e=6*e/86400).toString())},Percentage:function(e,o){o((e/=1e7).toString())},PermillToPercent:function(e,o){o((e/=1e4).toString())},ArrayLength:function(e,o){o((e=e.split(",").length).toString())}}},41973:(e,o,t)=>{"use strict";t.r(o),t.d(o,{assets:()=>d,contentTitle:()=>c,default:()=>h,frontMatter:()=>l,metadata:()=>u,toc:()=>p});var n=t(87462),a=t(63366),r=(t(67294),t(3905)),i=t(47940),s=["components"],l={id:"maintain-guides-how-to-vote-councillor",title:"Voting for Councillors",sidebar_label:"Voting for Councillors",description:"Steps on how to vote for councillors.",keywords:["council","vote","councillors"],slug:"../maintain-guides-how-to-vote-councillor"},c=void 0,u={unversionedId:"maintain/maintain-guides-how-to-vote-councillor",id:"maintain/maintain-guides-how-to-vote-councillor",title:"Voting for Councillors",description:"Steps on how to vote for councillors.",source:"@site/../docs/maintain/maintain-guides-how-to-vote-councillor.md",sourceDirName:"maintain",slug:"/maintain-guides-how-to-vote-councillor",permalink:"/docs/maintain-guides-how-to-vote-councillor",draft:!1,editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/maintain/maintain-guides-how-to-vote-councillor.md",tags:[],version:"current",lastUpdatedBy:"Keith Alfaro",lastUpdatedAt:1672251942,formattedLastUpdatedAt:"Dec 28, 2022",frontMatter:{id:"maintain-guides-how-to-vote-councillor",title:"Voting for Councillors",sidebar_label:"Voting for Councillors",description:"Steps on how to vote for councillors.",keywords:["council","vote","councillors"],slug:"../maintain-guides-how-to-vote-councillor"},sidebar:"docs",previous:{title:"Join the Council",permalink:"/docs/maintain-guides-how-to-join-council"}},d={},p=[{value:"Voting for Councillors",id:"voting-for-councillors",level:2},{value:"Removing your Vote",id:"removing-your-vote",level:2}],k={toc:p},m="wrapper";function h(e){var o=e.components,l=(0,a.Z)(e,s);return(0,r.kt)(m,(0,n.Z)({},k,l,{components:o,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The council is an elected body of on-chain accounts that are intended to represent the passive\nstakeholders of Polkadot and/or Kusama. The council has two major tasks in governance: proposing\nreferenda and vetoing dangerous or malicious referenda. For more information on the council, see the\n",(0,r.kt)("a",{parentName:"p",href:"/docs/learn-governance#council"},"governance page"),". This guide will walk you through voting for\ncouncillors in the elections."),(0,r.kt)("h2",{id:"voting-for-councillors"},"Voting for Councillors"),(0,r.kt)("p",null,"Voting for councillors requires you to reserve\n",(0,r.kt)(i.Z,{network:"polkadot",path:"consts.phragmenElection.votingBondBase",defaultValue:20064e7,filter:"humanReadable",mdxType:"RPC"}),"","\nas a base amount and an amount of\n",(0,r.kt)(i.Z,{network:"polkadot",path:"consts.phragmenElection.votingBondFactor",defaultValue:32e7,filter:"humanReadable",mdxType:"RPC"}),"","\nper vote. You can then bond whatever amount you wish to put behind your vote. See the\n",(0,r.kt)("a",{parentName:"p",href:"/docs/maintain-guides-democracy"},"democracy guide")," for more information."),(0,r.kt)("admonition",{title:"Voting and staking locks can overlap",type:"info"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"A user can use staked funds to vote for Councillors (and/or use those funds in referenda)."),(0,r.kt)("li",{parentName:"ul"},"A user is only prohibited from transferring these funds to another account."))),(0,r.kt)("admonition",{type:"warning"},(0,r.kt)("p",{parentName:"admonition"},"If your balance is vesting, you cannot use unvested tokens for this lock. You will have to wait\nuntil you have at least that many ",(0,r.kt)("strong",{parentName:"p"},"free")," tokens to vote.")),(0,r.kt)("p",null,"Like the validator elections, you can approve up to 16 different councillors and your vote will be\nequalized among the chosen group. Unlike validator elections, there is no unbonding period for your\nreserved tokens. Once you remove your vote, your tokens will be liquid again."),(0,r.kt)("admonition",{type:"warning"},(0,r.kt)("p",{parentName:"admonition"},"It is your responsibility not to put your entire balance into the reserved value when you make a\nvote for councillors. It's best to keep ",(0,r.kt)("em",{parentName:"p"},"at least")," enough DOT/KSM to pay for transaction fees.")),(0,r.kt)("p",null,"Go to the ",(0,r.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps"},"Polkadot-JS Apps Dashboard"),' and click on the "Council" tab.\nOn the right side of the window there are two blue buttons, click on the one that says "Vote."'),(0,r.kt)("p",null,'Since the council uses approval voting, when you vote you signal which of the candidates you approve\nof and your voted tokens will be equalized among the selected candidates. Select up to 16 council\ncandidates by moving the slider to "Aye" for each one that you want to be elected. When you\'ve made\nthe proper configuration submit your transaction.'),(0,r.kt)("p",null,"You should see your vote appear in the interface immediately after your transaction is included."),(0,r.kt)("h2",{id:"removing-your-vote"},"Removing your Vote"),(0,r.kt)("p",null,"In order to get your reserved tokens back, you will need to remove your vote. Only remove your vote\nwhen you're done participating in elections and you no longer want your reserved tokens to count for\nthe councillors that you approve."),(0,r.kt)("p",null,'Go to the "Governance" > "Council" tab on the\n',(0,r.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps"},"Polkadot-JS Apps Dashboard"),"."),(0,r.kt)("p",null,'Under the "Council overview" tab, click on "Vote".'),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"polkadotjs_removeVoter",src:t(30301).Z,width:"1878",height:"361"})),(0,r.kt)("p",null,'Issue the "Unvote all" option.'),(0,r.kt)("p",null,"When the transaction is included in a block you should have your reserved tokens made liquid again\nand your vote will no longer be counting for any councillors in the elections starting in the next\nterm."))}h.isMDXComponent=!0},30301:(e,o,t)=>{"use strict";t.d(o,{Z:()=>n});const n=t.p+"assets/images/polkadotjs_removeVoter-b66eb203df51ecdb1d926990120aa76b.png"},46601:()=>{}}]);
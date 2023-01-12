"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[573],{3905:(t,e,n)=>{n.d(e,{Zo:()=>p,kt:()=>u});var i=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,i,a=function(t,e){if(null==t)return{};var n,i,a={},r=Object.keys(t);for(i=0;i<r.length;i++)n=r[i],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(i=0;i<r.length;i++)n=r[i],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var l=i.createContext({}),c=function(t){var e=i.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},p=function(t){var e=c(t.components);return i.createElement(l.Provider,{value:e},t.children)},g={inlineCode:"code",wrapper:function(t){var e=t.children;return i.createElement(i.Fragment,{},e)}},m=i.forwardRef((function(t,e){var n=t.components,a=t.mdxType,r=t.originalType,l=t.parentName,p=s(t,["components","mdxType","originalType","parentName"]),m=c(n),u=a,d=m["".concat(l,".").concat(u)]||m[u]||g[u]||r;return n?i.createElement(d,o(o({ref:e},p),{},{components:n})):i.createElement(d,o({ref:e},p))}));function u(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var r=n.length,o=new Array(r);o[0]=m;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=t,s.mdxType="string"==typeof t?t:a,o[1]=s;for(var c=2;c<r;c++)o[c]=n[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4984:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>l,contentTitle:()=>o,default:()=>g,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var i=n(7462),a=(n(7294),n(3905));const r={title:"1. Configuring an Application in Azure Active Directory",sidebar_position:1},o=void 0,s={unversionedId:"Authentication-App-With-NextJs-And-Microsoft-Graph/Configuring-Application-Azure-Active-Directory",id:"Authentication-App-With-NextJs-And-Microsoft-Graph/Configuring-Application-Azure-Active-Directory",title:"1. Configuring an Application in Azure Active Directory",description:"In this session, you will learn how to create an application in Azure Active Directory (AAD) and configure the necessary permissions so that the application can access the user's data.",source:"@site/docs/Authentication-App-With-NextJs-And-Microsoft-Graph/01-Configuring-Application-Azure-Active-Directory.md",sourceDirName:"Authentication-App-With-NextJs-And-Microsoft-Graph",slug:"/Authentication-App-With-NextJs-And-Microsoft-Graph/Configuring-Application-Azure-Active-Directory",permalink:"/MicrosoftCloud/tutorials/docs/Authentication-App-With-NextJs-And-Microsoft-Graph/Configuring-Application-Azure-Active-Directory",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"1. Configuring an Application in Azure Active Directory",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Authentication App with Next.js and Microsoft Graph",permalink:"/MicrosoftCloud/tutorials/docs/Authentication-App-With-NextJs-And-Microsoft-Graph/"},next:{title:"2. Structuring the Project",permalink:"/MicrosoftCloud/tutorials/docs/Authentication-App-With-NextJs-And-Microsoft-Graph/Structuring-Project"}},l={},c=[{value:"Step by Step",id:"step-by-step",level:2},{value:"Configure the Application",id:"configure-the-application",level:2}],p={toc:c};function g(t){let{components:e,...r}=t;return(0,a.kt)("wrapper",(0,i.Z)({},p,r,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"In this session, you will learn how to create an application in Azure Active Directory (AAD) and configure the necessary permissions so that the application can access the user's data."),(0,a.kt)("p",null,"Before starting to develop the application, you need to create an application in the Azure Active Directory (AAD). For this, go now to the ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"https://portal.azure.com/"},"Azure Portal")),", use your M365 Developer Program account and click on ",(0,a.kt)("strong",{parentName:"p"},"Azure Active Directory"),"."),(0,a.kt)("p",null,"Now, let's go to the step by step!"),(0,a.kt)("h2",{id:"step-by-step"},"Step by Step"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Go to ",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("a",{parentName:"strong",href:"https://portal.azure.com/"},"Azure Portal"))," and click on ",(0,a.kt)("strong",{parentName:"li"},"Azure Active Directory"),".")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"image-01",src:n(6153).Z,width:"1914",height:"1032"})),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Click on ",(0,a.kt)("strong",{parentName:"li"},"App Registrations"),".")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"image-02",src:n(2144).Z,width:"1914",height:"1032"})),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"Click on ",(0,a.kt)("strong",{parentName:"li"},"New Registration"),".")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"image-03",src:n(5925).Z,width:"1914",height:"1032"})),(0,a.kt)("ol",{start:4},(0,a.kt)("li",{parentName:"ol"},"Fill in the fields as shown below and click on ",(0,a.kt)("strong",{parentName:"li"},"Register"),".")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"image-04",src:n(8441).Z,width:"1914",height:"1032"})),(0,a.kt)("ol",{start:5},(0,a.kt)("li",{parentName:"ol"},"Go to ",(0,a.kt)("strong",{parentName:"li"},"Overview")," and copy:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Application (client) ID")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Directory (tenant) ID"))),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"image-05",src:n(174).Z,width:"1914",height:"1032"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"We will use these values to configure the application in the ",(0,a.kt)("inlineCode",{parentName:"p"},"env.local")," file.")),(0,a.kt)("h2",{id:"configure-the-application"},"Configure the Application"),(0,a.kt)("ol",{start:6},(0,a.kt)("li",{parentName:"ol"},"Go to ",(0,a.kt)("strong",{parentName:"li"},"Certificates & secrets")," and click on ",(0,a.kt)("strong",{parentName:"li"},"New client secret"),".")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"image-06",src:n(5250).Z,width:"1914",height:"1032"})),(0,a.kt)("ol",{start:7},(0,a.kt)("li",{parentName:"ol"},"Fill the field ",(0,a.kt)("strong",{parentName:"li"},"Description")," and click on ",(0,a.kt)("strong",{parentName:"li"},"Add"),".")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"image-07",src:n(1731).Z,width:"1914",height:"1047"})),(0,a.kt)("ol",{start:8},(0,a.kt)("li",{parentName:"ol"},"Copy the ",(0,a.kt)("strong",{parentName:"li"},"Value")," of the ",(0,a.kt)("strong",{parentName:"li"},"Client secret"),".")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"image-08",src:n(3809).Z,width:"1914",height:"1047"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Obs.:")," don't forget to save this value, you will need it later. If you lose it, you will need to create a new one.")),(0,a.kt)("ol",{start:9},(0,a.kt)("li",{parentName:"ol"},"Go to ",(0,a.kt)("strong",{parentName:"li"},"API permissions")," and click on ",(0,a.kt)("strong",{parentName:"li"},"Add a permission"),".")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"image-09",src:n(1781).Z,width:"1928",height:"1047"})),(0,a.kt)("ol",{start:10},(0,a.kt)("li",{parentName:"ol"},"Click on ",(0,a.kt)("strong",{parentName:"li"},"Microsoft Graph")," amd then on ",(0,a.kt)("strong",{parentName:"li"},"Delegated permissions"),".")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"image-111.png",src:n(8475).Z,width:"1928",height:"1047"})),(0,a.kt)("ol",{start:11},(0,a.kt)("li",{parentName:"ol"},"Select the following permissions and click on ",(0,a.kt)("strong",{parentName:"li"},"Add permissions"),".")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"email")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"offline_access")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"openid")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Presence.Read")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"profile"))),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"image-11",src:n(1491).Z,width:"1928",height:"1047"})),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"image-12",src:n(9832).Z,width:"1928",height:"1047"})),(0,a.kt)("ol",{start:12},(0,a.kt)("li",{parentName:"ol"},"Go to ",(0,a.kt)("strong",{parentName:"li"},"Microsoft Graph")," again and click on ",(0,a.kt)("strong",{parentName:"li"},"Application permissions"),".")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"image-13",src:n(4104).Z,width:"1928",height:"1047"})),(0,a.kt)("ol",{start:13},(0,a.kt)("li",{parentName:"ol"},"Select the following permissions and click on ",(0,a.kt)("strong",{parentName:"li"},"Add permissions"),".")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Presence.ReadWrite.All"))),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"image-14",src:n(5720).Z,width:"1928",height:"1047"})),(0,a.kt)("ol",{start:14},(0,a.kt)("li",{parentName:"ol"},"Click on ",(0,a.kt)("strong",{parentName:"li"},"Grant admin consent for 'your-tenant-name'")," and click on ",(0,a.kt)("strong",{parentName:"li"},"Yes"),".")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"image-15",src:n(2092).Z,width:"1928",height:"1047"})),(0,a.kt)("p",null,"Congratulations! YEAH! \ud83c\udf89\ud83c\udf89\ud83c\udf89"),(0,a.kt)("p",null,"You have successfully created an application in Azure Active Directory and configured the necessary permissions so that the application can access the user's data."),(0,a.kt)("p",null,"Now, let's go to the next session!"))}g.isMDXComponent=!0},6153:(t,e,n)=>{n.d(e,{Z:()=>i});const i=n.p+"assets/images/image-01-5455e7e99bc3c79be78b0674d9aadf89.png"},2144:(t,e,n)=>{n.d(e,{Z:()=>i});const i=n.p+"assets/images/image-02-c285321d2cb56b5c2fa6c329ac222d28.png"},5925:(t,e,n)=>{n.d(e,{Z:()=>i});const i=n.p+"assets/images/image-03-530bc02cdc0ea0fd222664447a17456d.png"},8441:(t,e,n)=>{n.d(e,{Z:()=>i});const i=n.p+"assets/images/image-04-c043fa343dc196745879187dcd62faab.png"},174:(t,e,n)=>{n.d(e,{Z:()=>i});const i=n.p+"assets/images/image-05-8c369fb374b9825a0c0f9377bfc8b74b.png"},5250:(t,e,n)=>{n.d(e,{Z:()=>i});const i=n.p+"assets/images/image-06-ed5531907156f493b6eee972f725344d.png"},1731:(t,e,n)=>{n.d(e,{Z:()=>i});const i=n.p+"assets/images/image-07-db5c1f42b2d3079590e350fa8ba4ccbb.png"},3809:(t,e,n)=>{n.d(e,{Z:()=>i});const i=n.p+"assets/images/image-08-3000815597d278da230882b600fd2100.png"},1781:(t,e,n)=>{n.d(e,{Z:()=>i});const i=n.p+"assets/images/image-09-3679e41b5533b13798a9958eff85f902.png"},1491:(t,e,n)=>{n.d(e,{Z:()=>i});const i=n.p+"assets/images/image-11-d43060060c4ddf2c0b90e179971676c8.png"},8475:(t,e,n)=>{n.d(e,{Z:()=>i});const i=n.p+"assets/images/image-111-845126e9d97392fc17dd60985515f73e.png"},9832:(t,e,n)=>{n.d(e,{Z:()=>i});const i=n.p+"assets/images/image-12-9f36310ccf9ea25e87c59575ea049925.png"},4104:(t,e,n)=>{n.d(e,{Z:()=>i});const i=n.p+"assets/images/image-13-9a3de33d2d873badd53cf1008678f940.png"},5720:(t,e,n)=>{n.d(e,{Z:()=>i});const i=n.p+"assets/images/image-14-a5ca1363f60ae225f921dd8325b91298.png"},2092:(t,e,n)=>{n.d(e,{Z:()=>i});const i=n.p+"assets/images/image-15-c0a0c843769de56bd2d040d6fa1950e0.png"}}]);
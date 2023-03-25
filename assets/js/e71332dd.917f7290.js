"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1066],{9613:(t,e,n)=>{n.d(e,{Zo:()=>d,kt:()=>s});var a=n(9496);function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){l(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){if(null==t)return{};var n,a,l=function(t,e){if(null==t)return{};var n,a,l={},r=Object.keys(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||(l[n]=t[n]);return l}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(l[n]=t[n])}return l}var m=a.createContext({}),o=function(t){var e=a.useContext(m),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},d=function(t){var e=o(t.components);return a.createElement(m.Provider,{value:e},t.children)},k={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},u=a.forwardRef((function(t,e){var n=t.components,l=t.mdxType,r=t.originalType,m=t.parentName,d=p(t,["components","mdxType","originalType","parentName"]),u=o(n),s=l,c=u["".concat(m,".").concat(s)]||u[s]||k[s]||r;return n?a.createElement(c,i(i({ref:e},d),{},{components:n})):a.createElement(c,i({ref:e},d))}));function s(t,e){var n=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var r=n.length,i=new Array(r);i[0]=u;var p={};for(var m in e)hasOwnProperty.call(e,m)&&(p[m]=e[m]);p.originalType=t,p.mdxType="string"==typeof t?t:l,i[1]=p;for(var o=2;o<r;o++)i[o]=n[o];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2283:(t,e,n)=>{n.r(e),n.d(e,{contentTitle:()=>m,default:()=>u,frontMatter:()=>p,metadata:()=>o,toc:()=>d});var a=n(2962),l=n(2742),r=(n(9496),n(9613)),i=["components"],p={},m="Benchmarks of JavaScript Package Managers",o={type:"mdx",permalink:"/benchmarks",source:"@site/src/pages/benchmarks.md",title:"Benchmarks of JavaScript Package Managers",description:"Last benchmarked at32 AM (daily updated).",frontMatter:{}},d=[{value:"Lots of Files",id:"lots-of-files",level:2}],k={toc:d};function u(t){var e=t.components,n=(0,l.Z)(t,i);return(0,r.kt)("wrapper",(0,a.Z)({},k,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"benchmarks-of-javascript-package-managers"},"Benchmarks of JavaScript Package Managers"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Last benchmarked at"),": ",(0,r.kt)("em",{parentName:"p"},"Mar 25, 2023, 1:32 AM")," (",(0,r.kt)("em",{parentName:"p"},"daily")," updated)."),(0,r.kt)("p",null,"This benchmark compares the performance of npm, pnpm, Yarn Classic, and Yarn PnP (check ",(0,r.kt)("a",{parentName:"p",href:"https://yarnpkg.com/benchmarks"},"Yarn's benchmarks")," for any other Yarn modes that are not included here)."),(0,r.kt)("p",null,"Here's a quick explanation of how these tests could apply to the real world:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"clean install"),": How long it takes to run a totally fresh install: no lockfile present, no packages in the cache, no ",(0,r.kt)("inlineCode",{parentName:"li"},"node_modules")," folder."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"with cache"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"with lockfile"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"with node_modules"),": After the first install is done, the install command is run again."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"with cache"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"with lockfile"),": When a repo is fetched by a developer and installation is first run."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"with cache"),": Same as the one above, but the package manager doesn't have a lockfile to work from."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"with lockfile"),": When an installation runs on a CI server."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"with cache"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"with node_modules"),": The lockfile is deleted and the install command is run again."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"with node_modules"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"with lockfile"),": The package cache is deleted and the install command is run again."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"with node_modules"),": The package cache and the lockfile is deleted and the install command is run again."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"update"),": Updating your dependencies by changing the version in the ",(0,r.kt)("inlineCode",{parentName:"li"},"package.json")," and running the install command again.")),(0,r.kt)("h2",{id:"lots-of-files"},"Lots of Files"),(0,r.kt)("p",null,"The app's ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json")," ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/pnpm/pnpm.github.io/blob/main/benchmarks/fixtures/alotta-files/package.json"},"here")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"action"),(0,r.kt)("th",{parentName:"tr",align:null},"cache"),(0,r.kt)("th",{parentName:"tr",align:null},"lockfile"),(0,r.kt)("th",{parentName:"tr",align:null},"node_modules"),(0,r.kt)("th",{parentName:"tr",align:null},"npm"),(0,r.kt)("th",{parentName:"tr",align:null},"pnpm"),(0,r.kt)("th",{parentName:"tr",align:null},"Yarn"),(0,r.kt)("th",{parentName:"tr",align:null},"Yarn PnP"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"install"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"37.1s"),(0,r.kt)("td",{parentName:"tr",align:null},"20.3s"),(0,r.kt)("td",{parentName:"tr",align:null},"22.1s"),(0,r.kt)("td",{parentName:"tr",align:null},"20.6s")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"install"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714"),(0,r.kt)("td",{parentName:"tr",align:null},"2.3s"),(0,r.kt)("td",{parentName:"tr",align:null},"1.5s"),(0,r.kt)("td",{parentName:"tr",align:null},"724ms"),(0,r.kt)("td",{parentName:"tr",align:null},"n/a")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"install"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"10s"),(0,r.kt)("td",{parentName:"tr",align:null},"5s"),(0,r.kt)("td",{parentName:"tr",align:null},"9s"),(0,r.kt)("td",{parentName:"tr",align:null},"734ms")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"install"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"15.6s"),(0,r.kt)("td",{parentName:"tr",align:null},"8.8s"),(0,r.kt)("td",{parentName:"tr",align:null},"22.8s"),(0,r.kt)("td",{parentName:"tr",align:null},"15.8s")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"install"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"17.1s"),(0,r.kt)("td",{parentName:"tr",align:null},"17.2s"),(0,r.kt)("td",{parentName:"tr",align:null},"9s"),(0,r.kt)("td",{parentName:"tr",align:null},"706ms")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"install"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714"),(0,r.kt)("td",{parentName:"tr",align:null},"2.9s"),(0,r.kt)("td",{parentName:"tr",align:null},"3.1s"),(0,r.kt)("td",{parentName:"tr",align:null},"17.4s"),(0,r.kt)("td",{parentName:"tr",align:null},"n/a")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"install"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714"),(0,r.kt)("td",{parentName:"tr",align:null},"2.3s"),(0,r.kt)("td",{parentName:"tr",align:null},"1.5s"),(0,r.kt)("td",{parentName:"tr",align:null},"697ms"),(0,r.kt)("td",{parentName:"tr",align:null},"n/a")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"install"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714"),(0,r.kt)("td",{parentName:"tr",align:null},"2.9s"),(0,r.kt)("td",{parentName:"tr",align:null},"11.7s"),(0,r.kt)("td",{parentName:"tr",align:null},"16.6s"),(0,r.kt)("td",{parentName:"tr",align:null},"n/a")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"update"),(0,r.kt)("td",{parentName:"tr",align:null},"n/a"),(0,r.kt)("td",{parentName:"tr",align:null},"n/a"),(0,r.kt)("td",{parentName:"tr",align:null},"n/a"),(0,r.kt)("td",{parentName:"tr",align:null},"9.3s"),(0,r.kt)("td",{parentName:"tr",align:null},"11.5s"),(0,r.kt)("td",{parentName:"tr",align:null},"10s"),(0,r.kt)("td",{parentName:"tr",align:null},"16.9s")))),(0,r.kt)("img",{alt:"Graph of the alotta-files results",src:"/img/benchmarks/alotta-files.svg"}))}u.isMDXComponent=!0}}]);
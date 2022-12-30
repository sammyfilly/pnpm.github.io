"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6418],{9613:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>h});var a=n(9496);function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){p(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,p=function(e,t){if(null==e)return{};var n,a,p={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(p[n]=e[n]);return p}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(p[n]=e[n])}return p}var i=a.createContext({}),m=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=m(e.components);return a.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,p=e.mdxType,r=e.originalType,i=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),c=m(n),h=p,d=c["".concat(i,".").concat(h)]||c[h]||u[h]||r;return n?a.createElement(d,l(l({ref:t},s),{},{components:n})):a.createElement(d,l({ref:t},s))}));function h(e,t){var n=arguments,p=t&&t.mdxType;if("string"==typeof e||p){var r=n.length,l=new Array(r);l[0]=c;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:p,l[1]=o;for(var m=2;m<r;m++)l[m]=n[m];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},3883:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>m,toc:()=>u});var a=n(2962),p=n(2742),r=(n(9496),n(9613)),l=["components"],o={title:"pnpm \u7684 2021 \u5e74",author:"Zoltan Kochan",authorURL:"http://twitter.com/zoltankochan",authorImageURL:"https://gravatar.com/avatar/1f59f040fb37d5799e3879fa678c2373?s=48"},i=void 0,m={permalink:"/zh/blog/2021/12/29/yearly-update",editUrl:"https://crowdin.com/project/pnpm/zh-CN",source:"@site/i18n/zh/docusaurus-plugin-content-blog/2021-12-29-yearly-update.md",title:"pnpm \u7684 2021 \u5e74",description:"\u73b0\u5728\u662f\u5e74\u5e95\uff0c\u5bf9 pnpm \u6765\u8bf4\u662f\u4e2a\u597d\u5e74\u5934\uff0c\u6240\u4ee5\u8ba9\u6211\u4eec\u770b\u770b\u5b83\u7684\u8fdb\u5c55\u60c5\u51b5\u3002",date:"2021-12-29T00:00:00.000Z",formattedDate:"2021\u5e7412\u670829\u65e5",tags:[],readingTime:3.765,hasTruncateMarker:!0,authors:[{name:"Zoltan Kochan",url:"http://twitter.com/zoltankochan",imageURL:"https://gravatar.com/avatar/1f59f040fb37d5799e3879fa678c2373?s=48"}],frontMatter:{title:"pnpm \u7684 2021 \u5e74",author:"Zoltan Kochan",authorURL:"http://twitter.com/zoltankochan",authorImageURL:"https://gravatar.com/avatar/1f59f040fb37d5799e3879fa678c2373?s=48"},prevItem:{title:"The year 2022 for pnpm",permalink:"/zh/blog/2022/12/30/yearly-update"},nextItem:{title:"pnpm\u7684node_modules\u914d\u7f6e\u9009\u9879",permalink:"/zh/blog/2020/10/17/node-modules-configuration-options-with-pnpm"}},s={authorsImageUrls:[void 0]},u=[{value:"\u4f7f\u7528\u91cf",id:"\u4f7f\u7528\u91cf",level:2},{value:"\u4e0b\u8f7d\u7edf\u8ba1",id:"\u4e0b\u8f7d\u7edf\u8ba1",level:3},{value:"\u6587\u6863\u8bbf\u95ee",id:"\u6587\u6863\u8bbf\u95ee",level:3},{value:"GitHub stars",id:"github-stars",level:3},{value:"\u65b0\u7528\u6237",id:"\u65b0\u7528\u6237",level:3},{value:"\u529f\u80fd\u4eae\u70b9",id:"\u529f\u80fd\u4eae\u70b9",level:2},{value:"\u65b0\u7684\u9501\u6587\u4ef6\u683c\u5f0f\uff08\u81ea v6.0.0\uff09",id:"\u65b0\u7684\u9501\u6587\u4ef6\u683c\u5f0f\u81ea-v600",level:3},{value:"\u7ba1\u7406 Node.js \u7248\u672c\uff08\u81ea v6.12.0\uff09",id:"\u7ba1\u7406-nodejs-\u7248\u672c\u81ea-v6120",level:3},{value:"\u6ce8\u5165\u672c\u5730\u4f9d\u8d56\uff08\u81ea v6.20.0\uff09",id:"\u6ce8\u5165\u672c\u5730\u4f9d\u8d56\u81ea-v6200",level:3},{value:"\u6539\u8fdb\u4e86 peerDependency \u95ee\u9898\u7684\u62a5\u544a\uff08\u81ea v6.24.0\uff09",id:"\u6539\u8fdb\u4e86-peerdependency-\u95ee\u9898\u7684\u62a5\u544a\u81ea-v6240",level:3},{value:"\u7ade\u4e89",id:"\u7ade\u4e89",level:2},{value:"Yarn",id:"yarn",level:3},{value:"npm",id:"npm",level:3},{value:"Others",id:"others",level:3},{value:"\u672a\u6765\u7684\u8ba1\u5212",id:"\u672a\u6765\u7684\u8ba1\u5212",level:2}],c={toc:u};function h(e){var t=e.components,o=(0,p.Z)(e,l);return(0,r.kt)("wrapper",(0,a.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u73b0\u5728\u662f\u5e74\u5e95\uff0c\u5bf9 pnpm \u6765\u8bf4\u662f\u4e2a\u597d\u5e74\u5934\uff0c\u6240\u4ee5\u8ba9\u6211\u4eec\u770b\u770b\u5b83\u7684\u8fdb\u5c55\u60c5\u51b5\u3002"),(0,r.kt)("h2",{id:"\u4f7f\u7528\u91cf"},"\u4f7f\u7528\u91cf"),(0,r.kt)("h3",{id:"\u4e0b\u8f7d\u7edf\u8ba1"},"\u4e0b\u8f7d\u7edf\u8ba1"),(0,r.kt)("p",null,"\u6211\u4eca\u5e74\u7684\u76ee\u6807\u662f\u5728\u4e0b\u8f7d\u91cf\u4e0a\u51fb\u8d25 Bower\u3002 \u6211\u4eec\u5728",(0,r.kt)("a",{parentName:"p",href:"https://npm-stat.com/charts.html?package=pnpm&package=bower&from=2021-01-01&to=2021-12-29"},"11\u6708"),"\u5b9e\u73b0\u4e86\u8fd9\u4e2a\u76ee\u6807\uff1a"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(8568).Z,width:"976",height:"389"})),(0,r.kt)("p",null,"2021 \u5e74 pnpm \u7684\u4e0b\u8f7d\u91cf\u7ea6\u4e3a 2020 \u5e74\u7684",(0,r.kt)("a",{parentName:"p",href:"https://npm-stat.com/charts.html?package=pnpm&from=2016-12-01&to=2021-12-29"},"3\u500d "),"\uff1a"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(5314).Z,width:"983",height:"394"})),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"\u8fd9\u4e9b\u7edf\u8ba1\u6570\u636e\u751a\u81f3\u6ca1\u6709\u8861\u91cf pnpm \u53ef\u80fd\u88ab\u5b89\u88c5\u7684\u6240\u6709\u4e0d\u540c\u7684\u65b9\u5f0f\uff01 \u4ed6\u4eec\u53ea\u6d4b\u91cf\u4e86 ",(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/pnpm"},"pnpm npm package")," \u7684\u4e0b\u8f7d\u91cf\u3002 \u4eca\u5e74\u6211\u4eec\u8fd8\u6dfb\u52a0\u4e86 pnpm \u7684\u4e8c\u8fdb\u5236\u7f16\u8bd1\u7248\u672c\uff0c\u5b83\u4eec\u7684\u4ea4\u4ed8\u7684\u65b9\u5f0f\u662f\u4e0d\u540c\u7684\u3002")),(0,r.kt)("h3",{id:"\u6587\u6863\u8bbf\u95ee"},"\u6587\u6863\u8bbf\u95ee"),(0,r.kt)("p",null,"\u6211\u4eec\u4f7f\u7528 Google Analytics \u4ece\u6211\u4eec\u7684\u6587\u6863\u4e2d\u6536\u96c6\u4e86\u4e00\u4e9b\u975e\u4e2a\u6027\u5316\u7684\u7edf\u8ba1\u6570\u636e\u3002 \u5728 2021 \u5e74\uff0c\u6709\u65f6\u6211\u4eec\u6bcf\u5468\u6709\u8d85\u8fc7 2,000 \u540d\u72ec\u7acb\u8bbf\u5ba2\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(4485).Z,width:"665",height:"509"})),(0,r.kt)("p",null,"\u6211\u4eec\u7684\u5927\u90e8\u5206\u7528\u6237\u6765\u81ea\u7f8e\u56fd\u548c\u4e2d\u56fd\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(6084).Z,width:"585",height:"498"})),(0,r.kt)("h3",{id:"github-stars"},"GitHub stars"),(0,r.kt)("p",null,"\u6211\u4eec\u7684 ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/pnpm/pnpm"},"\u4e3b GitHub \u4ed3\u5e93")," \u4eca\u5e74\u83b7\u5f97\u4e86 +5,000 \u9897\u661f\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(4294).Z,width:"913",height:"800"})),(0,r.kt)("h3",{id:"\u65b0\u7528\u6237"},"\u65b0\u7528\u6237"),(0,r.kt)("p",null,"\u6211\u4eec\u4eca\u5e74\u6700\u5927\u7684\u65b0\u7528\u6237\u662f ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/pnpm/pnpm.github.io/pull/89"},"Bytedance"),"\uff08TikTok \u80cc\u540e\u7684\u516c\u53f8\uff09\u3002"),(0,r.kt)("p",null,"\u6b64\u5916\uff0c\u8bb8\u591a\u4f18\u79c0\u7684\u5f00\u6e90\u9879\u76ee\u5f00\u59cb\u4f7f\u7528 pnpm\u3002 \u6709\u4e9b\u4eba\u8f6c\u800c\u4f7f\u7528 pnpm \u662f\u56e0\u4e3a\u5b83\u5bf9 monorepos \u7684\u5927\u529b\u652f\u6301\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/vuejs/vue-next"},"Vue")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/vitejs/vite"},"Vite")),(0,r.kt)("li",{parentName:"ul"},"\u548c ",(0,r.kt)("a",{parentName:"li",href:"https://pnpm.io/workspaces#usage-examples"},"\u5176\u4ed6"))),(0,r.kt)("p",null,"\u6709\u4e9b\u4eba\u4e4b\u6240\u4ee5\u5207\u6362\u4e3a pnpm\uff0c\u662f\u56e0\u4e3a\u4ed6\u4eec\u559c\u6b22 pnpm \u7684\u9ad8\u6548\u3001\u5feb\u901f\u548c\u7f8e\u89c2\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://twitter.com/Autoprefixer/status/1476226146488692736"},"Autoprefixer")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://twitter.com/PostCSS/status/1470438664006258701"},"PostCSS")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://twitter.com/Browserslist/status/1468264308308156419"},"Browserslist"))),(0,r.kt)("h2",{id:"\u529f\u80fd\u4eae\u70b9"},"\u529f\u80fd\u4eae\u70b9"),(0,r.kt)("h3",{id:"\u65b0\u7684\u9501\u6587\u4ef6\u683c\u5f0f\u81ea-v600"},"\u65b0\u7684\u9501\u6587\u4ef6\u683c\u5f0f\uff08\u81ea ",(0,r.kt)("a",{parentName:"h3",href:"https://github.com/pnpm/pnpm/releases/tag/v6.0.0"},"v6.0.0"),"\uff09"),(0,r.kt)("p",null,"\u4eca\u5e74\u7b2c\u4e00\u4e2a\u4e5f\u662f\u6700\u91cd\u8981\u7684\u53d8\u5316\u4e4b\u4e00\u662f\u65b0\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm-lock.yaml")," \u683c\u5f0f\u3002 \u8fd9\u662f\u4e00\u4e2a\u7a81\u7834\u6027\u7684\u53d8\u5316\uff0c\u6240\u4ee5\u6211\u4eec\u4e0d\u5f97\u4e0d\u53d1\u5e03 v6\u3002 \u4f46\u5b83\u662f\u6210\u529f\u7684\u3002 \u65e7\u7684\u9501\u6587\u4ef6\u7ecf\u5e38\u5bfc\u81f4 Git \u51b2\u7a81\u3002 \u7531\u4e8e\u5f15\u5165\u4e86\u65b0\u683c\u5f0f\uff0c\u6211\u4eec\u6ca1\u6709\u6536\u5230\u4efb\u4f55\u5173\u4e8e Git \u51b2\u7a81\u7684\u6295\u8bc9\u3002"),(0,r.kt)("h3",{id:"\u7ba1\u7406-nodejs-\u7248\u672c\u81ea-v6120"},"\u7ba1\u7406 Node.js \u7248\u672c\uff08\u81ea ",(0,r.kt)("a",{parentName:"h3",href:"https://github.com/pnpm/pnpm/releases/tag/v6.12.0"},"v6.12.0"),"\uff09"),(0,r.kt)("p",null,"\u6211\u4eec\u53d1\u5e03\u4e86\u4e00\u4e2a\u5141\u8bb8\u7ba1\u7406 Node.js \u7248\u672c\u7684\u65b0\u547d\u4ee4\uff08 ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm env")," \uff09\u3002 \u56e0\u6b64\uff0c\u60a8\u53ef\u4ee5\u4f7f\u7528 pnpm \u800c\u4e0d\u662f\u50cf nvm \u6216 Volta \u8fd9\u6837\u7684 Node.js \u7248\u672c\u7ba1\u7406\u5668\u3002"),(0,r.kt)("p",null,"\u6b64\u5916\uff0cpnpm \u662f\u4f5c\u4e3a\u72ec\u7acb\u7684\u53ef\u6267\u884c\u6587\u4ef6\u63d0\u4f9b\u7684\uff0c\u56e0\u6b64\u5373\u4f7f\u7cfb\u7edf\u4e0a\u6ca1\u6709\u9884\u88c5 Node.js\uff0c\u60a8\u4e5f\u53ef\u4ee5\u8fd0\u884c\u5b83\u3002"),(0,r.kt)("h3",{id:"\u6ce8\u5165\u672c\u5730\u4f9d\u8d56\u81ea-v6200"},"\u6ce8\u5165\u672c\u5730\u4f9d\u8d56\uff08\u81ea ",(0,r.kt)("a",{parentName:"h3",href:"https://github.com/pnpm/pnpm/releases/tag/v6.20.0"},"v6.20.0"),"\uff09"),(0,r.kt)("p",null,"\u60a8\u53ef\u4ee5 \u201cinject\u201d \u672c\u5730\u4f9d\u8d56\u9879\u3002 \u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u672c\u5730\u4f9d\u8d56\u9879\u88ab\u7b26\u53f7\u94fe\u63a5\u81f3 ",(0,r.kt)("inlineCode",{parentName:"p"},"node_modules"),"\u3002\u4f46\u6709\u4e86\u8fd9\u4e2a\u65b0\u529f\u80fd\uff0c\u4f60\u53ef\u4ee5\u6307\u793a pnpm \u786c\u94fe\u63a5\u5305\u5185\u7684\u6587\u4ef6\u3002"),(0,r.kt)("h3",{id:"\u6539\u8fdb\u4e86-peerdependency-\u95ee\u9898\u7684\u62a5\u544a\u81ea-v6240"},"\u6539\u8fdb\u4e86 peerDependency \u95ee\u9898\u7684\u62a5\u544a\uff08\u81ea ",(0,r.kt)("a",{parentName:"h3",href:"https://github.com/pnpm/pnpm/releases/tag/v6.24.0"},"v6.24.0"),"\uff09"),(0,r.kt)("p",null,"PeerDependency \u95ee\u9898\u66fe\u7ecf\u88ab\u6253\u5370\u4e3a\u7eaf\u6587\u672c\uff0c\u5f88\u96be\u7406\u89e3\u3002 \u5b83\u4eec\u73b0\u5728\u90fd\u5206\u7ec4\u5e76\u6253\u5370\u5728\u4e00\u4e2a\u5f88\u597d\u7684\u5c42\u6b21\u7ed3\u6784\u4e2d\u3002"),(0,r.kt)("h2",{id:"\u7ade\u4e89"},"\u7ade\u4e89"),(0,r.kt)("h3",{id:"yarn"},"Yarn"),(0,r.kt)("p",null,"Yarn \u5728 ",(0,r.kt)("a",{parentName:"p",href:"https://dev.to/arcanis/yarn-31-corepack-esm-pnpm-optional-packages--3hak#new-install-mode-raw-pnpm-endraw-"},"v3.1")," \u6dfb\u52a0\u4e86 pnpm \u94fe\u63a5\u5668\u3002 \u56e0\u6b64 Yarn \u53ef\u4ee5\u521b\u5efa\u4e00\u4e2a\u7c7b\u4f3c\u4e8e pnpm \u521b\u5efa\u7684 node_modules \u76ee\u5f55\u7ed3\u6784\u3002"),(0,r.kt)("p",null,"\u6b64\u5916\uff0cYarn \u56e2\u961f\u8ba1\u5212\u5b9e\u73b0\u5185\u5bb9\u53ef\u5bfb\u5740\u5b58\u50a8\uff0c\u4ee5\u63d0\u9ad8\u78c1\u76d8\u7a7a\u95f4\u6548\u7387\u3002"),(0,r.kt)("h3",{id:"npm"},"npm"),(0,r.kt)("p",null,"Npm \u56e2\u961f\u51b3\u5b9a\u4e5f\u91c7\u7528 pnpm \u4f7f\u7528\u7684\u7b26\u53f7\u94fe\u63a5\u7684 node_modules \u76ee\u5f55\u7ed3\u6784\uff08\u76f8\u5173 ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/npm/rfcs/blob/main/accepted/0042-isolated-mode.md"},"RFC"),"\uff09\u3002"),(0,r.kt)("h3",{id:"others"},"Others"),(0,r.kt)("p",null,"\u7528 Zig \u7f16\u5199\u7684 ",(0,r.kt)("a",{parentName:"p",href:"https://twitter.com/jarredsumner/status/1473416431291174912/photo/1"},"Bun")," \u4ee5\u53ca ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/voltpkg/volt"},"Volt")," \u90fd\u58f0\u79f0\u6bd4 npm/Yarn/pnpm \u66f4\u5feb\u3002 \u6211\u8fd8\u6ca1\u6709\u5bf9\u8fd9\u4e9b\u65b0\u7684\u5305\u7ba1\u7406\u5668\u8fdb\u884c\u57fa\u51c6\u6d4b\u8bd5\u3002"),(0,r.kt)("h2",{id:"\u672a\u6765\u7684\u8ba1\u5212"},"\u672a\u6765\u7684\u8ba1\u5212"),(0,r.kt)("p",null,"\u66f4\u5feb\uff0c\u66f4\u597d\uff0c\u6700\u597d\u3002"))}h.isMDXComponent=!0},6084:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/countries-2021-8eb9625e1798649ee04451dfb10ac851.png"},5314:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/download-stats-2021-1418562cb03abd558c4a6b4b17155227.png"},4485:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/ga-unique-visits-2021-b8bc3649f680565127696c85bdd4b701.png"},8568:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/pnpm-vs-bower-stats-6ec69a7308f5fbc1433420b1b2f7457f.png"},4294:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/stars-2021-0061c16f424e33ba0db224d82bcb53f3.png"}}]);
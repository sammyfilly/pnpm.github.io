"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9603],{9613:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var r=n(9496);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},s="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,o=e.originalType,p=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),s=c(n),m=l,g=s["".concat(p,".").concat(m)]||s[m]||f[m]||o;return n?r.createElement(g,i(i({ref:t},u),{},{components:n})):r.createElement(g,i({ref:t},u))}));function g(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=n.length,i=new Array(o);i[0]=m;var a={};for(var p in t)hasOwnProperty.call(t,p)&&(a[p]=t[p]);a.originalType=e,a[s]="string"==typeof e?e:l,i[1]=a;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7550:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>g,frontMatter:()=>a,metadata:()=>c,toc:()=>s});var r=n(1966),l=n(9836),o=(n(9496),n(9613)),i=["components"],a={id:"config",title:"pnpm config"},p=void 0,c={unversionedId:"cli/config",id:"version-7.x/cli/config",title:"pnpm config",description:"Ayr\u0131ca: c",source:"@site/i18n/tr/docusaurus-plugin-content-docs/version-7.x/cli/config.md",sourceDirName:"cli",slug:"/cli/config",permalink:"/tr/7.x/cli/config",draft:!1,editUrl:"https://translate.pnpm.io/project/pnpm/tr",tags:[],version:"7.x",frontMatter:{id:"config",title:"pnpm config"},sidebar:"version-7.x/docs",previous:{title:"pnpm doctor",permalink:"/tr/7.x/cli/doctor"},next:{title:"package.json",permalink:"/tr/7.x/package_json"}},u={},s=[{value:"Komutlar",id:"komutlar",level:2},{value:"set &lt;key&gt; &lt;value&gt;",id:"set-key-value",level:3},{value:"get &lt;key&gt;",id:"get-key",level:3},{value:"delete &lt;key&gt;",id:"delete-key",level:3},{value:"list",id:"list",level:3},{value:"Parametreler",id:"parametreler",level:2},{value:"--global, -g",id:"--global--g",level:3},{value:"--location",id:"--location",level:3},{value:"--json",id:"--json",level:3}],f={toc:s},m="wrapper";function g(e){var t=e.components,n=(0,l.Z)(e,i);return(0,o.kt)(m,(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Ayr\u0131ca: ",(0,o.kt)("inlineCode",{parentName:"p"},"c")),(0,o.kt)("p",null,"Manage the configuration files."),(0,o.kt)("p",null,"The configuration files are in ",(0,o.kt)("inlineCode",{parentName:"p"},"INI")," format."),(0,o.kt)("p",null,"The local configuration file is located in the root of the project and is named ",(0,o.kt)("inlineCode",{parentName:"p"},".npmrc"),"."),(0,o.kt)("p",null,"The global configuration file is located at one of the following locations:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"If the ",(0,o.kt)("strong",{parentName:"li"},"$XDG_CONFIG_HOME")," env variable is set, then ",(0,o.kt)("strong",{parentName:"li"},"$XDG_CONFIG_HOME/pnpm/rc")),(0,o.kt)("li",{parentName:"ul"},"On Windows: ",(0,o.kt)("strong",{parentName:"li"},"~/AppData/Local/pnpm/config/rc")),(0,o.kt)("li",{parentName:"ul"},"On macOS: ",(0,o.kt)("strong",{parentName:"li"},"~/Library/Preferences/pnpm/rc")),(0,o.kt)("li",{parentName:"ul"},"On Linux: ",(0,o.kt)("strong",{parentName:"li"},"~/.config/pnpm/rc"))),(0,o.kt)("h2",{id:"komutlar"},"Komutlar"),(0,o.kt)("h3",{id:"set-key-value"},"set ","<","key> ","<","value>"),(0,o.kt)("p",null,"Set the config key to the value provided."),(0,o.kt)("h3",{id:"get-key"},"get ","<","key>"),(0,o.kt)("p",null,"Print the config value for the provided key."),(0,o.kt)("h3",{id:"delete-key"},"delete ","<","key>"),(0,o.kt)("p",null,"Remove the config key from the config file."),(0,o.kt)("h3",{id:"list"},"list"),(0,o.kt)("p",null,"Show all the config settings."),(0,o.kt)("h2",{id:"parametreler"},"Parametreler"),(0,o.kt)("h3",{id:"--global--g"},"--global, -g"),(0,o.kt)("p",null,"Set the configuration in the global config file."),(0,o.kt)("h3",{id:"--location"},"--location"),(0,o.kt)("p",null,"When set to ",(0,o.kt)("inlineCode",{parentName:"p"},"project"),", the ",(0,o.kt)("inlineCode",{parentName:"p"},".npmrc")," file at the nearest ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json")," will be used."),(0,o.kt)("p",null,"When set to ",(0,o.kt)("inlineCode",{parentName:"p"},"global"),", the performance is the same as setting the ",(0,o.kt)("inlineCode",{parentName:"p"},"--global")," option."),(0,o.kt)("h3",{id:"--json"},"--json"),(0,o.kt)("p",null,"Show all the config settings in JSON format."))}g.isMDXComponent=!0}}]);
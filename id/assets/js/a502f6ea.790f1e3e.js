"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4568],{9613:(n,e,a)=>{a.d(e,{Zo:()=>m,kt:()=>k});var t=a(9496);function l(n,e,a){return e in n?Object.defineProperty(n,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):n[e]=a,n}function r(n,e){var a=Object.keys(n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(n);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),a.push.apply(a,t)}return a}function i(n){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){l(n,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(a,e))}))}return n}function p(n,e){if(null==n)return{};var a,t,l=function(n,e){if(null==n)return{};var a,t,l={},r=Object.keys(n);for(t=0;t<r.length;t++)a=r[t],e.indexOf(a)>=0||(l[a]=n[a]);return l}(n,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);for(t=0;t<r.length;t++)a=r[t],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(n,a)&&(l[a]=n[a])}return l}var o=t.createContext({}),s=function(n){var e=t.useContext(o),a=e;return n&&(a="function"==typeof n?n(e):i(i({},e),n)),a},m=function(n){var e=s(n.components);return t.createElement(o.Provider,{value:e},n.children)},u={inlineCode:"code",wrapper:function(n){var e=n.children;return t.createElement(t.Fragment,{},e)}},d=t.forwardRef((function(n,e){var a=n.components,l=n.mdxType,r=n.originalType,o=n.parentName,m=p(n,["components","mdxType","originalType","parentName"]),d=s(a),k=l,g=d["".concat(o,".").concat(k)]||d[k]||u[k]||r;return a?t.createElement(g,i(i({ref:e},m),{},{components:a})):t.createElement(g,i({ref:e},m))}));function k(n,e){var a=arguments,l=e&&e.mdxType;if("string"==typeof n||l){var r=a.length,i=new Array(r);i[0]=d;var p={};for(var o in e)hasOwnProperty.call(e,o)&&(p[o]=e[o]);p.originalType=n,p.mdxType="string"==typeof n?n:l,i[1]=p;for(var s=2;s<r;s++)i[s]=a[s];return t.createElement.apply(null,i)}return t.createElement.apply(null,a)}d.displayName="MDXCreateElement"},9012:(n,e,a)=>{a.r(e),a.d(e,{assets:()=>m,contentTitle:()=>o,default:()=>k,frontMatter:()=>p,metadata:()=>s,toc:()=>u});var t=a(2962),l=a(2742),r=(a(9496),a(9613)),i=["components"],p={id:"installation",title:"Instalasi"},o=void 0,s={unversionedId:"installation",id:"version-7.x/installation",title:"Instalasi",description:"Menggunakan skrip mandiri",source:"@site/i18n/id/docusaurus-plugin-content-docs/version-7.x/installation.md",sourceDirName:".",slug:"/installation",permalink:"/id/7.x/installation",draft:!1,editUrl:"https://translate.pnpm.io/project/pnpm/id",tags:[],version:"7.x",frontMatter:{id:"installation",title:"Instalasi"},sidebar:"version-7.x/docs",previous:{title:"Motivasi",permalink:"/id/7.x/motivation"},next:{title:"Feature Comparison",permalink:"/id/7.x/feature-comparison"}},m={},u=[{value:"Menggunakan skrip mandiri",id:"menggunakan-skrip-mandiri",level:2},{value:"Di Windows",id:"di-windows",level:3},{value:"Pada sistem POSIX",id:"pada-sistem-posix",level:3},{value:"Di Linux Alpine",id:"di-linux-alpine",level:3},{value:"Prasyarat",id:"prasyarat",level:3},{value:"Menginstal versi tertentu",id:"menginstal-versi-tertentu",level:3},{value:"Menggunakan Corepack",id:"menggunakan-corepack",level:2},{value:"Menggunakan npm",id:"menggunakan-npm",level:2},{value:"Menggunakan Homebrew",id:"menggunakan-homebrew",level:2},{value:"Using Scoop",id:"using-scoop",level:2},{value:"Compatibility",id:"compatibility",level:2},{value:"Troubleshooting",id:"troubleshooting",level:2},{value:"Using a shorter alias",id:"using-a-shorter-alias",level:2},{value:"Menambahkan alias permanen pada sistem POSIX",id:"menambahkan-alias-permanen-pada-sistem-posix",level:4},{value:"Menambahkan alias permanen di Powershell (Windows):",id:"menambahkan-alias-permanen-di-powershell-windows",level:4},{value:"Uninstalling pnpm",id:"uninstalling-pnpm",level:2}],d={toc:u};function k(n){var e=n.components,a=(0,l.Z)(n,i);return(0,r.kt)("wrapper",(0,t.Z)({},d,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"menggunakan-skrip-mandiri"},"Menggunakan skrip mandiri"),(0,r.kt)("p",null,"Anda dapat menginstal pnpm bahkan jika Anda tidak menginstal Node.js, menggunakan skrip berikut."),(0,r.kt)("h3",{id:"di-windows"},"Di Windows"),(0,r.kt)("p",null,"Menggunakan PowerShell:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-powershell"},"iwr https://get.pnpm.io/install.ps1 -useb | iex\n")),(0,r.kt)("h3",{id:"pada-sistem-posix"},"Pada sistem POSIX"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"curl -fsSL https://get.pnpm.io/install.sh | sh -\n")),(0,r.kt)("p",null,"Jika anda tidak menginstal curl, Anda bisa menggunakan wget:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"wget -qO- https://get.pnpm.io/install.sh | sh -\n")),(0,r.kt)("h3",{id:"di-linux-alpine"},"Di Linux Alpine"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'# bash\nwget -qO- https://get.pnpm.io/install.sh | ENV="$HOME/.bashrc" SHELL="$(which bash)" bash -\n# sh\nwget -qO- https://get.pnpm.io/install.sh | ENV="$HOME/.shrc" SHELL="$(which sh)" sh -\n# dash\nwget -qO- https://get.pnpm.io/install.sh | ENV="$HOME/.dashrc" SHELL="$(which dash)" dash -\n')),(0,r.kt)("h3",{id:"prasyarat"},"Prasyarat"),(0,r.kt)("p",null,"Jika Anda tidak menggunakan skrip mandiri untuk menginstal pnpm, maka Anda harus memiliki Node.js (setidaknya v14) untuk diinstal di sistem Anda."),(0,r.kt)("h3",{id:"menginstal-versi-tertentu"},"Menginstal versi tertentu"),(0,r.kt)("p",null,"Sebelum menjalankan skrip instal, Anda dapat secara opsional menetapkan variabel env ",(0,r.kt)("inlineCode",{parentName:"p"},"PNPM_VERSION")," untuk menginstal versi pnpm tertentu:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"curl -fsSL https://get.pnpm.io/install.sh | env PNPM_VERSION=<version> sh -\n")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"You may use the ",(0,r.kt)("a",{parentName:"p",href:"/id/7.x/cli/env"},"pnpm env")," command then to install Node.js.")),(0,r.kt)("h2",{id:"menggunakan-corepack"},"Menggunakan Corepack"),(0,r.kt)("p",null,"Sejak v16.13, Node.js mengirimkan ",(0,r.kt)("a",{parentName:"p",href:"https://nodejs.org/api/corepack.html"},"Corepack")," untuk mengelola manajer paket. Ini adalah fitur eksperimental, jadi Anda harus mengaktifkannya dengan menjalankan:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"corepack enable\n")),(0,r.kt)("p",null,"If you installed Node.js using Homebrew, you'll need to install corepack separately:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"brew install corepack\n")),(0,r.kt)("p",null,"Ini akan secara otomatis menginstal pnpm di sistem Anda. Namun, itu mungkin bukan versi terbaru dari pnpm. Untuk memutakhirkannya, periksa apa ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/pnpm/pnpm/releases/latest"},"versi pnpm yang terbaru")," dan jalankan:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"corepack prepare pnpm@<version> --activate\n")),(0,r.kt)("p",null,"Dengan Node.js v16.17 atau yang lebih baru, Anda dapat menginstal ",(0,r.kt)("inlineCode",{parentName:"p"},"latest")," pnpm hanya dengan menentukan tag:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"corepack prepare pnpm@latest --activate\n")),(0,r.kt)("h2",{id:"menggunakan-npm"},"Menggunakan npm"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"npm install -g pnpm\n")),(0,r.kt)("h2",{id:"menggunakan-homebrew"},"Menggunakan Homebrew"),(0,r.kt)("p",null,"jika anda sudah menginstal package manager, Anda dapat menginstal pnpm dengan menggunakan perintah berikut:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"brew install pnpm\n")),(0,r.kt)("h2",{id:"using-scoop"},"Using Scoop"),(0,r.kt)("p",null,"If you have Scoop installed, you can install pnpm using the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"scoop install nodejs-lts pnpm\n")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Do you wanna use pnpm on CI servers? See: ",(0,r.kt)("a",{parentName:"p",href:"/id/7.x/continuous-integration"},"Continuous Integration"),".")),(0,r.kt)("h2",{id:"compatibility"},"Compatibility"),(0,r.kt)("p",null,"Here is a list of past pnpm versions with respective Node.js version support."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Node.js"),(0,r.kt)("th",{parentName:"tr",align:null},"pnpm 4"),(0,r.kt)("th",{parentName:"tr",align:null},"pnpm 5"),(0,r.kt)("th",{parentName:"tr",align:null},"pnpm 6"),(0,r.kt)("th",{parentName:"tr",align:null},"pnpm 7"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Node.js 10"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Node.js 12"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Node.js 14"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Node.js 16"),(0,r.kt)("td",{parentName:"tr",align:null},"?\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null},"?\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Node.js 18"),(0,r.kt)("td",{parentName:"tr",align:null},"?\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null},"?\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f")))),(0,r.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,r.kt)("p",null,"If pnpm is broken and you cannot fix it by reinstalling, you might need to remove it manually from the PATH."),(0,r.kt)("p",null,"Let's assume you have the following error when running ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm install"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"C:\\src>pnpm install\ninternal/modules/cjs/loader.js:883\n  throw err;\n  ^\n\n\n\nError: Cannot find module 'C:\\Users\\Bence\\AppData\\Roaming\\npm\\pnpm-global\\4\\node_modules\\pnpm\\bin\\pnpm.js'\n\u2190[90m    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:880:15)\u2190[39m\n\u2190[90m    at Function.Module._load (internal/modules/cjs/loader.js:725:27)\u2190[39m\n\u2190[90m    at Function.executeUserEntryPoint [as runMain] (internal/modules/run_main.js:72:12)\u2190[39m\n\u2190[90m    at internal/main/run_main_module.js:17:47\u2190[39m {\n  code: \u2190[32m'MODULE_NOT_FOUND'\u2190[39m,\n  requireStack: []\n}\n")),(0,r.kt)("p",null,"First, try to find the location of pnpm by running: ",(0,r.kt)("inlineCode",{parentName:"p"},"which pnpm"),". If you're on Windows, run this command in Git Bash. You'll get the location of the pnpm command, for instance:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ which pnpm\n/c/Program Files/nodejs/pnpm\n")),(0,r.kt)("p",null,"Now that you know where the pnpm CLI is, open that directory and remove any pnpm-related files (",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm.cmd"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpx.cmd"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm"),", etc). Once done, install pnpm again and it should work as expected."),(0,r.kt)("h2",{id:"using-a-shorter-alias"},"Using a shorter alias"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"pnpm")," might be hard to type, so you may use a shorter alias like ",(0,r.kt)("inlineCode",{parentName:"p"},"pn")," instead."),(0,r.kt)("h4",{id:"menambahkan-alias-permanen-pada-sistem-posix"},"Menambahkan alias permanen pada sistem POSIX"),(0,r.kt)("p",null,"Just put the following line to your ",(0,r.kt)("inlineCode",{parentName:"p"},".bashrc"),", ",(0,r.kt)("inlineCode",{parentName:"p"},".zshrc"),", or ",(0,r.kt)("inlineCode",{parentName:"p"},"config.fish"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"alias pn=pnpm\n")),(0,r.kt)("h4",{id:"menambahkan-alias-permanen-di-powershell-windows"},"Menambahkan alias permanen di Powershell (Windows):"),(0,r.kt)("p",null,"In a Powershell window with admin rights, execute:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"notepad $profile.AllUsersAllHosts\n")),(0,r.kt)("p",null,"In the ",(0,r.kt)("inlineCode",{parentName:"p"},"profile.ps1")," file that opens, put:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"set-alias -name pn -value pnpm\n")),(0,r.kt)("p",null,"Save the file and close the window. You may need to close any open Powershell window in order for the alias to take effect."),(0,r.kt)("h2",{id:"uninstalling-pnpm"},"Uninstalling pnpm"),(0,r.kt)("p",null,"If you need to remove the pnpm CLI from your system and any files it has written to your disk, see ",(0,r.kt)("a",{parentName:"p",href:"/id/7.x/uninstall"},"Uninstalling pnpm"),"."))}k.isMDXComponent=!0}}]);
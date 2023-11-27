"use strict";(self.webpackChunknoah_blog=self.webpackChunknoah_blog||[]).push([[5800],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),c=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},s="mdxType",v={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=c(n),f=r,m=s["".concat(p,".").concat(f)]||s[f]||v[f]||o;return n?a.createElement(m,i(i({ref:t},u),{},{components:n})):a.createElement(m,i({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=f;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[s]="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},1890:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>v,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const o={slug:"fastapi-uvicorn",title:"[Fastapi] Uvicorn",authors:"noahNam",tags:["fastapi","uvicorn"]},i="Uvicorn",l={unversionedId:"fastapi/2021-05-06-uvicorn",id:"fastapi/2021-05-06-uvicorn",title:"[Fastapi] Uvicorn",description:"Uvicorn",source:"@site/docs/fastapi/2021-05-06-uvicorn.md",sourceDirName:"fastapi",slug:"/fastapi/fastapi-uvicorn",permalink:"/noah-blog/docs/fastapi/fastapi-uvicorn",draft:!1,tags:[{label:"fastapi",permalink:"/noah-blog/docs/tags/fastapi"},{label:"uvicorn",permalink:"/noah-blog/docs/tags/uvicorn"}],version:"current",frontMatter:{slug:"fastapi-uvicorn",title:"[Fastapi] Uvicorn",authors:"noahNam",tags:["fastapi","uvicorn"]},sidebar:"tutorialSidebar",previous:{title:"[Fastapi] Gunicorn",permalink:"/noah-blog/docs/fastapi/fastapi-gunicorn"},next:{title:"[Fastapi] init",permalink:"/noah-blog/docs/fastapi/fastapi-init"}},p={},c=[{value:"Uvicorn",id:"uvicorn-1",level:2},{value:"ASGI",id:"asgi",level:3},{value:"Asyncio",id:"asyncio",level:3},{value:"uvloop",id:"uvloop",level:3},{value:"\uc2e4\ud589 \ubc29\ubc95",id:"\uc2e4\ud589-\ubc29\ubc95",level:2},{value:"\ud504\ub85c\uadf8\ub798\ubc0d \uc2e4\ud589",id:"\ud504\ub85c\uadf8\ub798\ubc0d-\uc2e4\ud589",level:3},{value:"Gunicorn\uc73c\ub85c \uc2e4\ud589",id:"gunicorn\uc73c\ub85c-\uc2e4\ud589",level:3},{value:"Application factories",id:"application-factories",level:3},{value:"\ucc38\uace0\uc790\ub8cc",id:"\ucc38\uace0\uc790\ub8cc",level:2}],u={toc:c},s="wrapper";function v(e){let{components:t,...o}=e;return(0,r.kt)(s,(0,a.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"uvicorn"},"Uvicorn"),(0,r.kt)("h2",{id:"uvicorn-1"},"Uvicorn"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Python\uc5d0\ub294 asyncio \ud504\ub808\uc784 \uc6cc\ud06c\ub97c \uc704\ud55c \uc800\uc218\uc900 \uc11c\ubc84 / \uc560\ud50c\ub9ac\ucf00\uc774\uc158 \uc778\ud130\ud398\uc774\uc2a4\uac00 \uc5c6\uc5c8\ub294\ub370, \uc774\ub7f0 \uc0c1\ud669\uc5d0\uc11c Uvicorn\uc774 \ub4f1\uc7a5\ud588\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"uvloop \ubc0f httptools\ub97c \uc0ac\uc6a9\ud558\ub294 \ucd08\uace0\uc18d ASGI web server\uc774\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\ud604\uc7ac HTTP / 1.1 \ubc0f WebSocket\uc744 \uc9c0\uc6d0\ud558\uace0, HTTP / 2\uc5d0 \ub300\ud55c \uc9c0\uc6d0\uc774 \uacc4\ud68d\ub418\uc5b4 \uc788\ub2e4.")),(0,r.kt)("h3",{id:"asgi"},"ASGI"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"ASGI(Asynchronous Server Gateway Interface)"),(0,r.kt)("li",{parentName:"ul"},"WSGI\uc758 \uc0c1\uc704 \ud638\ud658"),(0,r.kt)("li",{parentName:"ul"},"web server\uc640 \ud504\ub808\uc784\uc6cc\ud06c(Django), \uc5b4\ud50c\ub9ac\ucf00\uc774\uc158\uc744 \ube44\ub3d9\uae30\ub85c \uc5f0\uacb0\ud574 \uc8fc\ub294 Python\uc758 \ud45c\uc900 \uc778\ud130\ud398\uc774\uc2a4"),(0,r.kt)("li",{parentName:"ul"},"\uc5ec\ub7ec \ud504\ub85c\ud1a0\ucf5c \uc2a4\ud0c0\uc77c\uc744 \ucc98\ub9ac \ud560 \uc218 \uc788\ub2e4(HTTP, HTTP/2, WebSocket \ud3ec\ud568)")),(0,r.kt)("h3",{id:"asyncio"},"Asyncio"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Asyncio\ub294 Python \ud45c\uc900 \ub77c\uc774\ube0c\ub7ec\ub9ac\uc640 \ud568\uaed8 \uc81c\uacf5\ub418\ub294 \ube44\ub3d9\uae30 I/O \ud504\ub808\uc784 \uc6cc\ud06c"),(0,r.kt)("li",{parentName:"ul"},"async / await \uad6c\ubb38\uc744 \uc0ac\uc6a9\ud558\uc5ec \ube44\ub3d9\uae30(Asynchronous) \ucf54\ub4dc\ub97c \uc791\uc131\ud558\ub294 \ub77c\uc774\ube0c\ub7ec\ub9ac"),(0,r.kt)("li",{parentName:"ul"},"Asyncio\ub294 \ub300\uaddc\ubaa8 I / O \ucc98\ub9ac \ubc0f \ubcf5\uc7a1\ud558\uac8c \uc124\uacc4\ub41c \uc11c\ubc84 \uad6c\uc870\uc5d0 \uc801\ud569",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"CPU \uc5f0\uc0b0 \uc2dc\uac04 \ub300\ube44 DB\ub098 API\uc640 \uc5f0\ub3d9 \uacfc\uc815\uc5d0\uc11c \ubc1c\uc0dd\ud558\ub294 \ub300\uae30 \uc2dc\uac04\uc774 \ud6e8\uc52c \uae34 \uacbd\uc6b0\uc5d0 \ubcd1\ubaa9\uc774 \ubc1c\uc0dd\ud558\ub294\ub370 \uc774\ub97c \ud574\uacb0\ud558\uae30 \uc704\ud574\uc11c \uc0ac\uc6a9")))),(0,r.kt)("h3",{id:"uvloop"},"uvloop"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"asyncio\uc758 \uc774\ubca4\ud2b8 \ub8e8\ud2b8 \ub300\uccb4\uc7ac\ub85c asyncio\ub97c \ub354 \ube60\ub974\uac8c \ub9cc\ub4e4\uc5b4 \uc900\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"Cython\uc73c\ub85c \uc791\uc131\ub418\uc5c8\uc73c\uba70 libuv \uc704\uc5d0 \uad6c\ucd95",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"libuv\ub294 nodejs\uc5d0\uc11c \uc0ac\uc6a9\ud558\ub294 \uace0\uc131\ub2a5 \ub2e4\uc911 \ud50c\ub7ab\ud3fc \ube44\ub3d9\uae30 I/O \ub77c\uc774\ube0c\ub7ec\ub9ac"))),(0,r.kt)("li",{parentName:"ul"},"\uc2e4\uc81c \uc131\ub2a5\uc0c1\uc5d0\uc11c nodejs, gevent \ubc0f \uae30\ud0c0 Python \ube44\ub3d9\uae30 \ud504\ub808\uc784 \uc6cc\ud06c\ubcf4\ub2e4 2\ubc30 \uc774\uc0c1 \ube60\ub974\uace0, \uc131\ub2a5\uc0c1\uc73c\ub85c\ub9cc \ubcf8\ub2e4\uba74, uvloop \uae30\ubc18 asyncio\uc758 \uc131\ub2a5\uc740 Go \ud504\ub85c\uadf8\ub7a8\uc758 \uc131\ub2a5\uc5d0 \uac00\uae5d\uc2b5\ub2c8\ub2e4.")),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(1253).Z,width:"1546",height:"1402"}),"\n",(0,r.kt)("img",{src:n(9954).Z,width:"1480",height:"1192"})),(0,r.kt)("h2",{id:"\uc2e4\ud589-\ubc29\ubc95"},"\uc2e4\ud589 \ubc29\ubc95"),(0,r.kt)("h3",{id:"\ud504\ub85c\uadf8\ub798\ubc0d-\uc2e4\ud589"},"\ud504\ub85c\uadf8\ub798\ubc0d \uc2e4\ud589"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'import uvicorn\n\nasync def app(scope, receive, send):\n    ...\n\nif __name__ == "__main__":\n    uvicorn.run("example:app", host="127.0.0.1", port=5000, log_level="info")\n')),(0,r.kt)("h3",{id:"gunicorn\uc73c\ub85c-\uc2e4\ud589"},"Gunicorn\uc73c\ub85c \uc2e4\ud589"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Uvicorn\uc5d0\ub294 Gunicorn \uc791\uc5c5\uc790 \ud074\ub798\uc2a4\uac00 \ud3ec\ud568\ub418\uc5b4\uc788\uc5b4 Uvicorn\uc758 \ubaa8\ub4e0 \uc131\ub2a5 \uc774\uc810\uacfc \ud568\uaed8 ASGI \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc744 \uc2e4\ud589\ud560 \uc218 \uc788\uc73c\uba70 Gunicorn\uc758 \ubaa8\ub4e0 \uae30\ub2a5\uc744 \uac16\ucd98 \ud504\ub85c\uc138\uc2a4 \uad00\ub9ac\ub97c \uc81c\uacf5\ud55c\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\uc774\ub97c \ud1b5\ud574 \uc989\uc2dc \uc791\uc5c5\uc790 \ud504\ub85c\uc138\uc2a4 \uc218\ub97c \ub298\ub9ac\uac70\ub098 \uc904\uc774\uace0, \uc791\uc5c5\uc790 \ud504\ub85c\uc138\uc2a4\ub97c \uc815\uc0c1\uc801\uc73c\ub85c \ub2e4\uc2dc \uc2dc\uc791\ud558\uac70\ub098, \ub2e4\uc6b4 \ud0c0\uc784\uc5c6\uc774 \uc11c\ubc84 \uc5c5\uadf8\ub808\uc774\ub4dc\ub97c \uc218\ud589 \ud560 \uc218 \uc788\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\ud504\ub85c\ub355\uc158 \ubc30\ud3ec\uc758 \uacbd\uc6b0 uvicorn \uc791\uc5c5\uc790 \ud074\ub798\uc2a4\uc640 \ud568\uaed8 gunicorn\uc744 \uc0ac\uc6a9\ud558\ub294 \uac83\uc774 \uc88b\ub2e4.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ gunicorn example:app -w 4 -k uvicorn.workers.UvicornWorker\n")),(0,r.kt)("h3",{id:"application-factories"},"Application factories"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"#example.py\ndef create_app():\n    app = ...\n    return app\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ uvicorn --factory example:create_app\n")),(0,r.kt)("h2",{id:"\ucc38\uace0\uc790\ub8cc"},"\ucc38\uace0\uc790\ub8cc"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.uvicorn.org/"},"uvicorn \uacf5\uc2dd \ud648")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://magic.io/blog/uvloop-blazing-fast-python-networking/"},"uvloop: Blazing fast Python networking")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://chacha95.github.io/2021-01-16-python6/"},"uvicorn \uc18c\uac1c")))}v.isMDXComponent=!0},9954:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Untitled-ca0b33d3b3068439ab0fa068cea9f8cd.png"},1253:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Untitled1-5f119c739a1858ddcfa9073cf422190e.png"}}]);
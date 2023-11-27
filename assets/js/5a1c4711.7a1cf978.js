"use strict";(self.webpackChunknoah_blog=self.webpackChunknoah_blog||[]).push([[1627],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(n),m=r,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||l;return n?a.createElement(f,o(o({ref:t},c),{},{components:n})):a.createElement(f,o({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:r,o[1]=i;for(var u=2;u<l;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},460:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var a=n(7462),r=(n(7294),n(3905));const l={slug:"design-factory",title:"[Design] Factory Pattern",authors:"noahNam",tags:["design","factory"]},o="Factory Pattern",i={unversionedId:"design/2021-10-01-simple-factory-pattern",id:"design/2021-10-01-simple-factory-pattern",title:"[Design] Factory Pattern",description:"OOP\uc5d0\uc11c \ud329\ud1a0\ub9ac\ub780?",source:"@site/docs/design/2021-10-01-simple-factory-pattern.md",sourceDirName:"design",slug:"/design/design-factory",permalink:"/noah-blog/docs/design/design-factory",draft:!1,tags:[{label:"design",permalink:"/noah-blog/docs/tags/design"},{label:"factory",permalink:"/noah-blog/docs/tags/factory"}],version:"current",frontMatter:{slug:"design-factory",title:"[Design] Factory Pattern",authors:"noahNam",tags:["design","factory"]},sidebar:"tutorialSidebar",previous:{title:"[Design] Singleton usage",permalink:"/noah-blog/docs/design/design-singleton-usage"},next:{title:"[Design] Factory Method Pattern",permalink:"/noah-blog/docs/design/design-factory-method"}},s={},u=[{value:"OOP\uc5d0\uc11c \ud329\ud1a0\ub9ac\ub780?",id:"oop\uc5d0\uc11c-\ud329\ud1a0\ub9ac\ub780",level:2},{value:"\ud329\ud1a0\ub9ac \ud328\ud134\uc774\ub780?",id:"\ud329\ud1a0\ub9ac-\ud328\ud134\uc774\ub780",level:2},{value:"\ud329\ud1a0\ub9ac \ud328\ud134\uc774 \ud544\uc694\ud55c \uc774\uc720?",id:"\ud329\ud1a0\ub9ac-\ud328\ud134\uc774-\ud544\uc694\ud55c-\uc774\uc720",level:2},{value:"\ud604\uc2e4\uc5d0\uc11c \ud329\ud1a0\ub9ac \ud328\ud134\uc758 \uc608",id:"\ud604\uc2e4\uc5d0\uc11c-\ud329\ud1a0\ub9ac-\ud328\ud134\uc758-\uc608",level:2},{value:"\ud329\ud1a0\ub9ac \ud328\ud134\uc758 \uc720\ud615",id:"\ud329\ud1a0\ub9ac-\ud328\ud134\uc758-\uc720\ud615",level:2},{value:"\uc2ec\ud50c \ud329\ud1a0\ub9ac \ud328\ud134",id:"\uc2ec\ud50c-\ud329\ud1a0\ub9ac-\ud328\ud134",level:3},{value:"\ud329\ud1a0\ub9ac \uba54\uc18c\ub4dc \ud328\ud134",id:"\ud329\ud1a0\ub9ac-\uba54\uc18c\ub4dc-\ud328\ud134",level:3},{value:"\ucd94\uc0c1 \ud329\ud1a0\ub9ac \ud328\ud134",id:"\ucd94\uc0c1-\ud329\ud1a0\ub9ac-\ud328\ud134",level:3},{value:"\uc2ec\ud50c \ud329\ud1a0\ub9ac \ud328\ud134",id:"\uc2ec\ud50c-\ud329\ud1a0\ub9ac-\ud328\ud134-1",level:2}],c={toc:u},p="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"factory-pattern"},"Factory Pattern"),(0,r.kt)("h2",{id:"oop\uc5d0\uc11c-\ud329\ud1a0\ub9ac\ub780"},"OOP\uc5d0\uc11c \ud329\ud1a0\ub9ac\ub780?"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\ub2e4\ub978 \ud074\ub798\uc2a4\uc758 \uac1d\uccb4\ub97c \uc0dd\uc131\ud558\ub294 \ud074\ub798\uc2a4\ub97c \ub9d0\ud55c\ub2e4.")),(0,r.kt)("h2",{id:"\ud329\ud1a0\ub9ac-\ud328\ud134\uc774\ub780"},"\ud329\ud1a0\ub9ac \ud328\ud134\uc774\ub780?"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"\ud329\ud1a0\ub9ac \ud328\ud134\uc5d0\uc11c\ub294 \uac1d\uccb4\ub97c \uc0dd\uc131\ud558\uae30 \uc704\ud55c \uc778\ud130\ud398\uc774\uc2a4\ub97c \uc815\uc758\ud558\ub294\ub370, \uc5b4\ub5a4 \ud074\ub798\uc2a4\uc758 \uac1d\uccb4\ub97c \ub9cc\ub4e4\uc9c0\ub294 \uc11c\ube0c \ud074\ub798\uc2a4\uc5d0\uc11c \uacb0\uc815\ud558\uac8c \ub9cc\ub4dc\ub294 \ud328\ud134\uc774\ub2e4."))),(0,r.kt)("h2",{id:"\ud329\ud1a0\ub9ac-\ud328\ud134\uc774-\ud544\uc694\ud55c-\uc774\uc720"},"\ud329\ud1a0\ub9ac \ud328\ud134\uc774 \ud544\uc694\ud55c \uc774\uc720?"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\uac1d\uccb4 \uc0dd\uc131\ud558\ub294 \ucf54\ub4dc\ub97c \ubd84\ub9ac\ud558\uc5ec \ud074\ub77c\uc774\uc5b8\ud2b8 \ucf54\ub4dc\uc640 \uacb0\ud569\ub3c4(\uc758\uc874\uc131)\uc744 \ub0ae\ucd94\uc5b4 \ucf54\ub4dc\ub97c \uac74\ub4dc\ub9ac\ub294 \ud69f\uc218\ub97c \ucd5c\uc18c\ud654 \ud560 \uc218 \uc788\ub2e4.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\ud074\ub77c\uc774\uc5b8\ud2b8 \u2192 \uac1d\uccb4 \uc0dd\uc131 \ucf54\ub4dc\ub97c \ud638\ucd9c\ud558\ub294 \ucabd"),(0,r.kt)("li",{parentName:"ul"},"\uac1d\uccb4\ub97c \uc0dd\uc131\ud558\ub294 \ucf54\ub4dc\ub97c \ubd84\ub9ac \ud558\uc600\uae30 \ub54c\ubb38\uc5d0 \uac1d\uccb4\uc758 \ucd94\uac00,\uc218\uc815\uc774 \uc77c\uc5b4\ub098\ub3c4 \uac1d\uccb4\ub97c \uc0dd\uc131\ud558\ub294 \ucf54\ub4dc\ub9cc \uac74\ub4e4\uba74 \ub41c\ub2e4."))),(0,r.kt)("li",{parentName:"ul"},"\uac1d\uccb4\ub97c \uc0dd\uc131\ud558\ub294 \ucf54\ub4dc\ub97c \ucd94\uc0c1\ud654\ud558\uc5ec \ucf54\ub4dc\ub97c \ud55c\uacf3\uc5d0\uc11c \uad00\ub9ac\ud558\uc9c0 \uc54a\uc73c\uba74, \ubcc0\ud654(\uc0dd\uc131,\uc218\uc815,\uc0ad\uc81c)\uac00 \ubc1c\uc0dd \ud588\uc744 \ub54c \ud574\ub2f9 \ud074\ub77c\uc774\uc5b8\ud2b8 \ucf54\ub4dc\ub97c \uc804\ubd80 \uc218\uc815\ud574\uc918\uc57c \ud55c\ub2e4. (\uc608\ub97c \ub4e4\uc5b4 \ud074\ub798\uc2a4 ",(0,r.kt)("inlineCode",{parentName:"li"},"__init__")," \uc5d0 \uc778\uc790 \ucd94\uac00) \uc989, \uac1d\uccb4\uc9c0\ud5a5 \ub514\uc790\uc778\ud328\ud134 \uc6d0\uce59 <\uac1c\ubc29\ud3d0\uc1c4\uc758 \uc6d0\uce59> \ud655\uc7a5\uc5d0 \ub300\ud574\uc11c\ub294 \uc5f4\ub824\uace0\uc788\uace0 \ubcc0\ud654\uc5d0 \ub300\ud574\uc11c\ub294 \ub2eb\ud600\uc788\uc5b4\uc57c \ud55c\ub2e4. \ub54c\ubb38\uc5d0 \ubcc0\ud654\uac00 \uc77c\uc5b4\ub0a0 \uc218 \uc788\ub294 \uac1d\uccb4 \uc0dd\uc131 \ub2f4\ub2f9\ud558\ub294 \ud074\ub798\uc2a4\ub97c \ub9cc\ub4e4\uc5b4 \ud55c\uacf3\uc5d0\uc11c \uad00\ub9ac\ud558\uc5ec \uacb0\ud569\ub3c4\ub97c \uc904\uc774\uae30 \uc704\ud574 \uc0ac\uc6a9\ud55c\ub2e4.")),(0,r.kt)("h2",{id:"\ud604\uc2e4\uc5d0\uc11c-\ud329\ud1a0\ub9ac-\ud328\ud134\uc758-\uc608"},"\ud604\uc2e4\uc5d0\uc11c \ud329\ud1a0\ub9ac \ud328\ud134\uc758 \uc608"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\uc7a5\ub09c\uac10\uc744 \uc81c\uc870\ud558\ub294 \uacf5\uc7a5\uc774 \uc788\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\ud56d\uc0c1 \uc790\ub3d9\ucc28 \uc7a5\ub09c\uac10\ub9cc \ub9cc\ub4e4\uc5b4\uc654\uc9c0\ub9cc \uc778\ud615\uc5d0 \ub300\ud55c \uc2dc\uc7a5\uc758 \uc218\uc694\uac00 \ub298\uc5b4\ub098\ub294 \uc0c1\ud669\uc744 \uace0\ub824\ud574 CEO\ub294 \uae09\ud788 \uc778\ud615\ub3c4 \uc81c\uc870\ud558\uae30\ub85c \ud588\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\uc774 \uacbd\uc6b0 \uacf5\uc7a5\uc758 \uc81c\uc870 \uae30\uacc4\ub294 \uc778\ud130\ud398\uc774\uc2a4\uc774\uace0 CEO\ub294 \ud074\ub77c\uc774\uc5b8\ud2b8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"CEO\ub294 \uc81c\uc870\ud558\ub824\ub294 \uac1d\uccb4(\uc644\uc81c\ud488)\uacfc \uc81c\ud488\uc744 \ub9cc\ub4dc\ub294 \uc778\ud130\ud398\uc774\uc2a4(\uc0dd\uc0b0 \uae30\uacc4)\uc5d0 \ub300\ud574\uc11c\ub9cc \uc54c\uace0 \uc788\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\uc2e4\uc81c\ub85c \uac1d\uccb4(\uc644\uc81c\ud488)\uc744 \ub9cc\ub4dc\ub294 \uac74 \uc778\ud130\ud398\uc774\uc2a4(\uc0dd\uc0b0 \uae30\uacc4)\uac00 \ub0b4\ubd80\uc801\uc73c\ub85c \uc5ec\ub7ec \uacf5\uc815\uc744 \uac70\uccd0\uc11c \ub9cc\ub4e4\uac8c \ub41c\ub2e4.")),(0,r.kt)("h2",{id:"\ud329\ud1a0\ub9ac-\ud328\ud134\uc758-\uc720\ud615"},"\ud329\ud1a0\ub9ac \ud328\ud134\uc758 \uc720\ud615"),(0,r.kt)("h3",{id:"\uc2ec\ud50c-\ud329\ud1a0\ub9ac-\ud328\ud134"},"\uc2ec\ud50c \ud329\ud1a0\ub9ac \ud328\ud134"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\uc778\ud130\ud398\uc774\uc2a4\ub294 \uac1d\uccb4 \uc0dd\uc131 \ub85c\uc9c1\uc744 \uc228\uae30\uace0 \uac1d\uccb4\ub97c \uc0dd\uc131\ud55c\ub2e4.")),(0,r.kt)("h3",{id:"\ud329\ud1a0\ub9ac-\uba54\uc18c\ub4dc-\ud328\ud134"},"\ud329\ud1a0\ub9ac \uba54\uc18c\ub4dc \ud328\ud134"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\uc778\ud130\ud398\uc774\uc2a4\ub97c \ud1b5\ud574 \uac1d\uccb4\ub97c \uc0dd\uc131\ud558\uc9c0\ub9cc \uc11c\ube0c \ud074\ub798\uc2a4\uac00 \uac1d\uccb4 \uc0dd\uc131\uc5d0 \ud544\uc694\ud55c \ud074\ub798\uc2a4\ub97c \uc120\ud0dd\ud55c\ub2e4.")),(0,r.kt)("h3",{id:"\ucd94\uc0c1-\ud329\ud1a0\ub9ac-\ud328\ud134"},"\ucd94\uc0c1 \ud329\ud1a0\ub9ac \ud328\ud134"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\ucd94\uc0c1 \ud329\ud1a0\ub9ac\ub294 \uac1d\uccb4 \uc0dd\uc131\uc5d0 \ud544\uc694\ud55c \ud074\ub798\uc2a4\ub97c \ub178\ucd9c\ud558\uc9c0 \uc54a\uace0 \uac1d\uccb4\ub97c \uc0dd\uc131\ud558\ub294 \uc778\ud130\ud398\uc774\uc2a4\ub2e4. \ub0b4\ubd80\uc801\uc73c\ub85c \ub2e4\ub978 \ud329\ud1a0\ub9ac \uac1d\uccb4\ub97c \uc0dd\uc131\ud55c\ub2e4.")),(0,r.kt)("h2",{id:"\uc2ec\ud50c-\ud329\ud1a0\ub9ac-\ud328\ud134-1"},"\uc2ec\ud50c \ud329\ud1a0\ub9ac \ud328\ud134"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"\uc778\ud130\ud398\uc774\uc2a4\ub294 \uac1d\uccb4 \uc0dd\uc131 \ub85c\uc9c1\uc744 \uc228\uae30\uace0 \uac1d\uccb4\ub97c \uc0dd\uc131\ud55c\ub2e4."))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\uc2ec\ud50c \ud329\ud1a0\ub9ac \ud328\ud134\uc740 \ud558\ub098\uc758 \ud328\ud134\uc73c\ub85c \uc778\uc815\ud558\uc9c0 \uc54a\uae30\ub3c4 \ud574\uc11c \ud329\ud1a0\ub9ac \uba54\uc18c\ub4dc \ud328\ud134\uacfc \ucd94\uc0c1 \ud329\ud1a0\ub9ac \ud328\ud134\uc744 \uc774\ud574\ud558\uae30 \uc704\ud55c \uac1c\ub150 \uc815\ub3c4\ub85c \uc0dd\uac01\ud558\uba74 \ub41c\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\ud329\ud1a0\ub9ac\ub97c \uc0ac\uc6a9\ud558\uba74 \uc5ec\ub7ec \uc885\ub958\uc758 \uac1d\uccb4\ub97c \uc0ac\uc6a9\uc790\uac00 \uc9c1\uc811 \ud074\ub798\uc2a4\ub97c \ud638\ucd9c\ud558\uc9c0 \uc54a\uace0 \uc0dd\uc131\ud560 \uc218 \uc788\ub2e4.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'from abc import ABCMeta, abstractmethod\n\nclass Animal(metaclass=ABCMeta):\n    @abstractmethod\n    def do_say(self):\n        pass\n\nclass Dog(Animal):\n    def do_say(self):\n        print("\uc648\uc648!!")\n\nclass Cat(Animal):\n    def do_say(self):\n        print("\ub0d0\uc639~~")\n\n# forest factory \uc815\uc758\nclass ForestFactory:\n    def make_sound(self, object_type):\n        return eval(object_type)().do_say()\n\n# \ud074\ub77c\uc774\uc5b8\ud2b8 \ucf54\ub4dc\nif __name__ == "__main__":\n    forest_factory = ForestFactory()\n    animal = input("Which animal should make_sound Dog or Cat? ")\n    forest_factory.make_sound(animal)\n\n-----------\nresult\n-----------\nWhich animal should make_sound Dog or Cat? Cat\n\ub0d0\uc639~~\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Animal\uc740 \ucd94\uc0c1 \ud074\ub798\uc2a4\uc774\uace0 ",(0,r.kt)("inlineCode",{parentName:"li"},"do_say()")," \uba54\uc18c\ub4dc\ub97c \ud3ec\ud568\ud55c\ub2e4.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ABCMeta"),"\ub294 \ud30c\uc774\uc36c\uc5d0\uc11c \ud2b9\uc815 \ud074\ub798\uc2a4\ub97c Abstract\ub85c \uc120\uc5b8\ud558\ub294 \ud2b9\uc218 \uba54\ud0c0\ud074\ub798\uc2a4\uc774\ub2e4.")))))}d.isMDXComponent=!0}}]);
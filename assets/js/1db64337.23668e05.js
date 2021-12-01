"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1372],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),u=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=u(e.components);return a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,f=d["".concat(c,".").concat(m)]||d[m]||p[m]||l;return n?a.createElement(f,o(o({ref:t},s),{},{components:n})):a.createElement(f,o({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var u=2;u<l;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8215:function(e,t,n){var a=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},5064:function(e,t,n){n.d(t,{Z:function(){return d}});var a=n(7462),r=n(7294),l=n(2389),o=n(9443);var i=function(){var e=(0,r.useContext)(o.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},c=n(3039),u=n(6010),s="tabItem_1uMI";function p(e){var t,n,a,l=e.lazy,o=e.block,p=e.defaultValue,d=e.values,m=e.groupId,f=e.className,v=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=d?d:v.map((function(e){var t=e.props;return{value:t.value,label:t.label}})),b=(0,c.lx)(h,(function(e,t){return e.value===t.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var k=null===p?p:null!=(t=null!=p?p:null==(n=v.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(a=v[0])?void 0:a.props.value;if(null!==k&&!h.some((function(e){return e.value===k})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+h.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var w=i(),g=w.tabGroupChoices,y=w.setTabGroupChoices,N=(0,r.useState)(k),E=N[0],C=N[1],O=[],x=(0,c.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var S=g[m];null!=S&&S!==E&&h.some((function(e){return e.value===S}))&&C(S)}var I=function(e){var t=e.currentTarget,n=O.indexOf(t),a=h[n].value;a!==E&&(x(t),C(a),null!=m&&y(m,a))},T=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=O.indexOf(e.currentTarget)+1;n=O[a]||O[0];break;case"ArrowLeft":var r=O.indexOf(e.currentTarget)-1;n=O[r]||O[O.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,u.Z)("tabs",{"tabs--block":o},f)},h.map((function(e){var t=e.value,n=e.label;return r.createElement("li",{role:"tab",tabIndex:E===t?0:-1,"aria-selected":E===t,className:(0,u.Z)("tabs__item",s,{"tabs__item--active":E===t}),key:t,ref:function(e){return O.push(e)},onKeyDown:T,onFocus:I,onClick:I},null!=n?n:t)}))),l?(0,r.cloneElement)(v.filter((function(e){return e.props.value===E}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},v.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==E})}))))}function d(e){var t=(0,l.Z)();return r.createElement(p,(0,a.Z)({key:String(t)},e))}},9443:function(e,t,n){var a=(0,n(7294).createContext)(void 0);t.Z=a},1657:function(e,t,n){n.d(t,{Z:function(){return u}});var a=n(7294),r=n(5064),l=n(8215),o=n(2389);var i=function(e){var t=e.children,n=e.fallback;return(0,o.Z)()&&null!=t?a.createElement(a.Fragment,null,t()):n||null},c=n(1417);function u(e){return a.createElement(i,null,(function(){return a.createElement("div",null,a.createElement(r.Z,{groupId:"operating-systems",defaultValue:(0,c.l)(),values:[{label:"Windows",value:"windows"},{label:"macOS",value:"mac"},{label:"Linux",value:"linux"}]},a.createElement(l.Z,{value:"windows"},a.createElement("a",{className:"no_monospace",href:"https://github.com/Virtuslab/scala-cli/releases/latest/download/scala-cli-x86_64-pc-win32.msi"},"Download Scala CLI for Windows")),a.createElement(l.Z,{value:"linux"},a.createElement("p",null,"Run the following one-line command in your terminal:"),a.createElement("code",null,"curl -sSLf https://virtuslab.github.io/scala-cli-packages/scala-setup.sh | sh")),a.createElement(l.Z,{value:"mac"},a.createElement("p",null,"Run the following one-line command in your terminal:"),a.createElement("code",null,"brew install Virtuslab/scala-cli/scala-cli"))))}))}},1417:function(e,t,n){n.d(t,{l:function(){return a}});var a=function(){var e=function(e){return"undefined"!=typeof window&&-1!==window.navigator.userAgent.indexOf(e)};return e("Win")?"windows":e("Mac")?"mac":"linux"}},6777:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return u},metadata:function(){return s},toc:function(){return p},default:function(){return m}});var a=n(7462),r=n(3366),l=(n(7294),n(3905)),o=n(1657),i=["components"],c={title:"Overview",sidebar_position:1},u=void 0,s={unversionedId:"overview",id:"overview",isDocsHomePage:!1,title:"Overview",description:"The scala-cli CLI makes it easier to compile, run, test, and package Scala code.",source:"@site/docs/overview.md",sourceDirName:".",slug:"/overview",permalink:"/docs/overview",editUrl:"https://github.com/Virtuslab/scala-cli/edit/master/website/docs/overview.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Overview",sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Getting started",permalink:"/docs/getting_started"}},p=[{value:"Installation",id:"installation",children:[],level:2},{value:"What\u2019s next?",id:"whats-next",children:[],level:2}],d={toc:p};function m(e){var t=e.components,c=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},d,c,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"scala-cli")," CLI makes it easier to compile, run, test, and package Scala code."),(0,l.kt)("p",null,"It can:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/commands/compile"},"compile")," Scala code"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/commands/run"},"run")," it"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/commands/package"},"package")," it as a JAR file, or in formats such as deb, rpm, MSI, ..."),(0,l.kt)("li",{parentName:"ul"},"fire up a ",(0,l.kt)("a",{parentName:"li",href:"/docs/commands/repl"},"REPL"),", letting you quickly play with the code"),(0,l.kt)("li",{parentName:"ul"},"compile and run ",(0,l.kt)("a",{parentName:"li",href:"/docs/commands/test"},"tests")," suites")),(0,l.kt)("p",null,"... and more!"),(0,l.kt)("p",null,"Scala CLI supports most recent Scala versions (",(0,l.kt)("inlineCode",{parentName:"p"},"3.x"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"2.13.x")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"2.12.x"),"), and changing the Scala version as easy as providing the ",(0,l.kt)("inlineCode",{parentName:"p"},"--scala")," parameter. (See ",(0,l.kt)("a",{parentName:"p",href:"/docs/cookbooks/scala-versions"},"the cookbook")," for more information.)"),(0,l.kt)("p",null,"As well as compiling and running Scala code with the JVM (the default), Scala CLI also supports ",(0,l.kt)("a",{parentName:"p",href:"/docs/guides/scala-js"},"Scala.js")," and ",(0,l.kt)("a",{parentName:"p",href:"/docs/guides/scala-native"},"Scala Native"),"."),(0,l.kt)("h2",{id:"installation"},"Installation"),(0,l.kt)(o.Z,{mdxType:"BasicInstall"}),(0,l.kt)("p",null,"Prefer another way to install Scala CLI? See our ",(0,l.kt)("a",{parentName:"p",href:"/install#advanced-installation"},"Advanced installation guide"),"."),(0,l.kt)("h2",{id:"whats-next"},"What\u2019s next?"),(0,l.kt)("p",null,"Scala-CLI documentation is split into three main sections:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/getting_started"},"Getting started"),", where you learn how to start with Scala CLI"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/commands/basics"},"Commands"),", where you learn the most important Scala CLI commands"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/guides/intro"},"Guides"),", where you can read about the core aspects of Scala CLI, and learn how Scala CLI interacts with other tools, like your IDE"),(0,l.kt)("li",{parentName:"ul"},"Scala CLI ",(0,l.kt)("a",{parentName:"li",href:"/docs/cookbooks/intro"},"Cookbook"),", where you can learn how to solve specific problems with Scala CLI")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Happy hacking with Scala CLI!")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Demo",src:n(7612).Z})))}m.isMDXComponent=!0},7612:function(e,t,n){t.Z=n.p+"assets/images/demo-bacaef5c77dd0b28e806040ef7f5298c.svg"}}]);
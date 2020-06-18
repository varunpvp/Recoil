(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{133:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return l}));var r=n(1),a=(n(0),n(164));const o={title:"useRecoilTransactionObserver_UNSTABLE(callback)",sidebar_label:"useRecoilTransactionObserver()"},c={id:"api-reference/core/useRecoilTransactionObserver",title:"useRecoilTransactionObserver_UNSTABLE(callback)",description:"## ***NOTE***: *Please consider this API as unstable*",source:"@site/docs/api-reference/core/useRecoilTransactionObserver.md",permalink:"/docs/api-reference/core/useRecoilTransactionObserver",editUrl:"https://github.com/facebookexperimental/Recoil/edit/docs/docs/docs/api-reference/core/useRecoilTransactionObserver.md",sidebar_label:"useRecoilTransactionObserver()",sidebar:"someSidebar",previous:{title:"useRecoilCallback(callback, deps)",permalink:"/docs/api-reference/core/useRecoilCallback"},next:{title:"useRecoilSnapshot()",permalink:"/docs/api-reference/core/useRecoilSnapshot"}},i=[{value:"<strong><em>NOTE</em></strong>: <em>Please consider this API as unstable</em>",id:"note-please-consider-this-api-as-unstable",children:[{value:"Debug Example",id:"debug-example",children:[]}]}],s={rightToc:i};function l({components:e,...t}){return Object(a.b)("wrapper",Object(r.a)({},s,t,{components:e,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"note-please-consider-this-api-as-unstable"},Object(a.b)("strong",{parentName:"h2"},Object(a.b)("em",{parentName:"strong"},"NOTE")),": ",Object(a.b)("em",{parentName:"h2"},"Please consider this API as unstable")),Object(a.b)("p",null,"This hook subscribes a callback to be executed every time there is a change to Recoil atom state.  Multiple updates may be batched together in a single transaction.  This hook is great for persisting state changes, dev tools, building history, &c."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"function useRecoilTransactionObserver_UNSTABLE(({\n  snapshot: Snapshot,\n  previousSnapshot: Snapshot,\n}) => void)\n")),Object(a.b)("p",null,"The callback provides a ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api-reference/core/Snapshot"}),Object(a.b)("inlineCode",{parentName:"a"},"Snapshot"))," of the current and previous state for the React batch transaction.  If you would only like to subscribe to changes for individual atoms, consider effects instead.  In the future, we may allow the ability to subscribe to specific conditions or provide debouncing for performance."),Object(a.b)("h3",{id:"debug-example"},"Debug Example"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"function DebugObserver() {\n  useRecoilTransactionObserver_UNSTABLE(({snapshot}) => {\n    window.myDebugState = {\n      a: snapshot.getLoadable(atomA).contents,\n      b: snapshot.getLoadable(atomB).contents,\n    };\n  });\n  return null;\n}\n\nfunction MyApp() {\n  return (\n    <RecoilRoot>\n      <DebugObserver />\n      ...\n    </RecoilRoot>\n  );\n}\n")))}l.isMDXComponent=!0},164:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i({},t,{},e)),n},b=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),b=u(n),d=r,f=b["".concat(c,".").concat(d)]||b[d]||p[d]||o;return n?a.a.createElement(f,i({ref:t},l,{components:n})):a.a.createElement(f,i({ref:t},l))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var l=2;l<o;l++)c[l]=n[l];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);
"use strict";(self.webpackChunkice_website_v3=self.webpackChunkice_website_v3||[]).push([[2540],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=u(n),f=a,m=d["".concat(l,".").concat(f)]||d[f]||s[f]||i;return n?r.createElement(m,o(o({ref:t},p),{},{components:n})):r.createElement(m,o({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7140:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return s}});var r=n(3117),a=n(102),i=(n(7294),n(3905)),o=["components"],c={title:"\u670d\u52a1\u7aef\u6e32\u67d3 SSR",order:11},l=void 0,u={unversionedId:"guide/basic/ssr",id:"guide/basic/ssr",title:"\u670d\u52a1\u7aef\u6e32\u67d3 SSR",description:"\u670d\u52a1\u5668\u6e32\u67d3\uff0c\u7b80\u79f0 SSR (Server Side Rendering)\uff0c\u662f\u4e00\u79cd\u5728\u670d\u52a1\u7aef\u8fd0\u884c Node.js \u7a0b\u5e8f\u52a8\u6001\u751f\u6210 HTML \u7684\u6e32\u67d3\u65b9\u5f0f\u3002",source:"@site/docs/guide/basic/ssr.md",sourceDirName:"guide/basic",slug:"/guide/basic/ssr",permalink:"/docs/guide/basic/ssr",draft:!1,editUrl:"https://github.com/ice-lab/ice-next/edit/master/website/docs/guide/basic/ssr.md",tags:[],version:"current",frontMatter:{title:"\u670d\u52a1\u7aef\u6e32\u67d3 SSR",order:11},sidebar:"docs",previous:{title:"\u6784\u5efa\u65f6\u6e32\u67d3 SSG",permalink:"/docs/guide/basic/ssg"},next:{title:"\u5b9a\u5236 HTML",permalink:"/docs/guide/basic/document"}},p={},s=[{value:"\u5f00\u542f SSR",id:"\u5f00\u542f-ssr",level:2},{value:"\u6570\u636e\u8bf7\u6c42",id:"\u6570\u636e\u8bf7\u6c42",level:2}],d={toc:s};function f(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u670d\u52a1\u5668\u6e32\u67d3\uff0c\u7b80\u79f0 SSR (Server Side Rendering)\uff0c\u662f\u4e00\u79cd\u5728\u670d\u52a1\u7aef\u8fd0\u884c Node.js \u7a0b\u5e8f\u52a8\u6001\u751f\u6210 HTML \u7684\u6e32\u67d3\u65b9\u5f0f\u3002"),(0,i.kt)("p",null,"SSR \u76f8\u6bd4\u4f20\u7edf\u5728\u6d4f\u89c8\u5668\u7aef\u6e32\u67d3\u7684\u6a21\u5f0f(CSR)\uff0c\u53d7\u8bbe\u5907\u6027\u80fd\u548c\u7f51\u7edc\u60c5\u51b5\u7684\u5f71\u54cd\u66f4\u5c0f\uff0c\u53ef\u4ee5\u8fbe\u5230\u66f4\u597d\u7684\u6027\u80fd\u4f53\u9a8c\u548c SEO \u80fd\u529b\u3002"),(0,i.kt)("h2",{id:"\u5f00\u542f-ssr"},"\u5f00\u542f SSR"),(0,i.kt)("p",null,"\u4e0e SSG \u4e0d\u540c\u7684\u662f\uff0cICE \u4e2d SSR \u4e0d\u662f\u9ed8\u8ba4\u542f\u7528\u7684\u3002"),(0,i.kt)("p",null,"\u5728 ",(0,i.kt)("inlineCode",{parentName:"p"},"ice.config.mts")," \u4e2d\uff0c\u589e\u52a0\u5982\u4e0b\u914d\u7f6e\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"import { defineConfig } from '@ice/app';\n\nexport default defineConfig({\n  // ...\n  ssr: true,\n});\n")),(0,i.kt)("h2",{id:"\u6570\u636e\u8bf7\u6c42"},"\u6570\u636e\u8bf7\u6c42"),(0,i.kt)("p",null,"\u5f00\u542f SSR \u540e\uff0c\u8def\u7531\u7ec4\u4ef6\u4e2d\u5bfc\u51fa\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"getData()")," \u65b9\u6cd5\u5c06\u4f1a\u5728 Server \u7aef\u88ab\u6267\u884c\uff0c\u5982\u679c SSR \u6e32\u67d3\u6210\u529f\uff0c\u5728 Client \u7aef\u5c06\u4e0d\u4f1a\u518d\u6b21\u8c03\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"getData()"),"\uff0c\u800c\u4f1a\u590d\u7528 SSR \u7684\u7ed3\u679c\u3002\u5f53\u9875\u9762\u5728\u6d4f\u89c8\u5668\u4fa7\u901a\u8fc7\u8def\u7531\u8df3\u8f6c\uff0c\u6216\u9875\u9762\u964d\u7ea7\u65f6\uff0c\u624d\u4f1a\u5728 Client \u7aef\u8c03\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"getData()"),"\u3002"),(0,i.kt)("p",null,"\u56e0\u6b64\uff0c\u4e00\u822c\u60c5\u51b5\u4e0b ",(0,i.kt)("inlineCode",{parentName:"p"},"getData()")," \u5185\u7684\u6570\u636e\u8bf7\u6c42\u9700\u8981\u4fdd\u6301\u540c\u6784\uff0c\u5728 Server \u7aef\u548c Client \u7aef\u90fd\u80fd\u6267\u884c\u3002"),(0,i.kt)("p",null,"\u5982\u679c\u786e\u5b9e\u9700\u8981\u4e3a Server \u7aef\u6307\u5b9a\u4e0d\u4e00\u6837\u7684\u6570\u636e\u8bf7\u6c42\u65b9\u5f0f\uff0c\u53ef\u4ee5\u901a\u8fc7\u5b9a\u4e49 ",(0,i.kt)("inlineCode",{parentName:"p"},"getServerData()")," \u6765\u5b9e\u73b0\u3002\u5f53\u8def\u7531\u7ec4\u4ef6\u58f0\u660e\u4e86 ",(0,i.kt)("inlineCode",{parentName:"p"},"getServerData()"),"\uff0c\u4f1a\u5728 SSR \u4f18\u5148\u4f7f\u7528\u8fd9\u4e2a\u65b9\u6cd5\u3002"),(0,i.kt)("p",null,"\u793a\u4f8b\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"// Client \u7aef\u4e13\u7528\u7684\u6570\u636e\u8bf7\u6c42\nexport async function getData() {\n  const data = await fetch('https://example.com/api/xxx');\n\n  return data;\n}\n\n// Server \u7aef\u4e13\u7528\u7684\u6570\u636e\u8bf7\u6c42\nexport async function getStaticData() {\n  const data = await sendRequestInServer();\n\n  return data;\n}\n")),(0,i.kt)("p",null,"\u6784\u5efa Client \u7aef\u7684 Bundle \u65f6\uff0c\u4f1a\u79fb\u9664 ",(0,i.kt)("inlineCode",{parentName:"p"},"getServerData()")," \u53ca\u5176\u76f8\u5173\u4f9d\u8d56\u3002"))}f.isMDXComponent=!0}}]);
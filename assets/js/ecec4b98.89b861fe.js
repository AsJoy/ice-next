"use strict";(self.webpackChunkice_website=self.webpackChunkice_website||[]).push([[344],{5813:function(e,t,s){s.r(t),s.d(t,{default:function(){return o}});var i=s(7294);function o(e){var t=e.location,s=e.history,o=e.redirectConfig,c=void 0===o?[]:o,n=t.pathname;return(0,i.useEffect)((function(){var e=c.find((function(e){return e.from===n.replace(/\/$/,"")}));if(e)s.push(e.to);else if(/^\/component/.test(n))s.push("/docs/fusion/about");else if(/^\/docs\/guide\/advance\//.test(n))s.push(n.replace("/advance/","/advanced/"));else if(/^\/docs\/materials\//.test(n)){var t="https://appworks.site/materials/"+n.replace("/docs/materials/","")+".html";window.location.replace(t)}else if(/^\/docs\/icestark\//.test(n)){window.location.replace("https://micro-frontends.ice.work")}else console.log("\u672a\u77e5\u8def\u7531",n)}),[]),null}}}]);
"use strict";(self.webpackChunkzzzgin_github_io=self.webpackChunkzzzgin_github_io||[]).push([[601],{6867:function(e,t,n){var c=n(7225),r=c.Nothing,l=c.isNothing,a="undefined"!=typeof window?window:r,h="undefined"!=typeof document?document:r;e.exports.u9=a,e.exports.tj=h},7225:function(e,t,n){n.r(t),n.d(t,{Nothing:function(){return r},deserialize:function(){return u},isNothing:function(){return a},isSomething:function(){return h},serialize:function(){return i},toBool:function(){return l}});var c,r=((c=function(){return r}).toString=c.toLocaleString=c[Symbol.toPrimitive]=function(){return""},c.valueOf=function(){return!1},new Proxy(Object.freeze(c),{get:function(e,t){return e.hasOwnProperty(t)?e[t]:r}})),l=function(e){return!(!e||!e.valueOf())},a=function(e){return e===r},h=function(e){return!(e===r||null==e)},i=function(e){return JSON.stringify(e,(function(e,t){return t===r?null:t}))},u=function(e){return JSON.parse(e,(function(e,t){return null===t?r:t}))}},4514:function(e,t,n){n.d(t,{Z:function(){return i}});var c=n(7294);var r="undefined"!=typeof window,l=function(e){(0,c.useEffect)(e,[])},a=function(e){var t=(0,c.useRef)(e);t.current=e,l((function(){return function(){return t.current()}}))},h=function(e){var t=(0,c.useRef)(0),n=(0,c.useState)(e),r=n[0],l=n[1],h=(0,c.useCallback)((function(e){cancelAnimationFrame(t.current),t.current=requestAnimationFrame((function(){l(e)}))}),[]);return a((function(){cancelAnimationFrame(t.current)})),[r,h]},i=function(){var e=h((function(){return{x:r?window.pageXOffset:0,y:r?window.pageYOffset:0}})),t=e[0],n=e[1];return(0,c.useEffect)((function(){var e=function(){n((function(e){var t=window.pageXOffset,n=window.pageYOffset;return e.x!==t||e.y!==n?{x:t,y:n}:e}))};return e(),function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];e&&e.addEventListener&&e.addEventListener.apply(e,t)}(window,"scroll",e,{capture:!1,passive:!0}),function(){!function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];e&&e.removeEventListener&&e.removeEventListener.apply(e,t)}(window,"scroll",e)}}),[]),t}},5996:function(e,t,n){n.d(t,{t:function(){return l}});var c=n(7294),r=n(6867),l=function(){var e=(0,c.useState)({width:void 0,height:void 0}),t=e[0],n=e[1];return(0,c.useEffect)((function(){function e(){n({width:r.u9.innerWidth,height:r.u9.innerHeight})}return r.u9.addEventListener("resize",e),e(),function(){return r.u9.removeEventListener("resize",e)}}),[]),t}},4148:function(e,t,n){n.d(t,{X9:function(){return r},Zp:function(){return l},bA:function(){return c}});var c=function(e,t,n,c){if(n<e[0])return t[0];if(n>e[e.length-1])return t[t.length-1];for(var r=0;r<t.length-1;r++)if(e[r]<=n&&n<e[r+1])return c([e[r],e[r+1]],[t[r],t[r+1]],n)},r=function(e,t,n){var c=(t[1]-t[0])/(e[1]-e[0]);return n<=e[0]?t[0]:n>e[1]?t[1]:t[0]+c*(n-e[0])},l=function(e,t,n){return n<=e[0]?t[0]:n>e[1]?t[1]:t[0]+(.5*Math.sin(((n-e[0])/(e[1]-e[0])*10-5)/Math.PI)+.5)*(t[1]-t[0])}},3647:function(e,t,n){n.r(t);var c=n(7294),r=n(4514),l=n(4148),a=n(5996),h=n(6867);t.default=function(){var e=(0,r.Z)(),t=(0,a.t)(),n=h.tj.documentElement.offsetHeight,i=(0,c.useState)(0),u=i[0],s=i[1];return(0,c.useEffect)((function(){var c=e.y/(n-t.height)*100;s((0,l.bA)([27,30,32,35],[0,1,1,0],c,l.X9))}),[e,n,t]),c.createElement(c.Fragment,null,c.createElement("div",{className:"charDesign",style:{width:"50%",position:"fixed",left:"50%",top:"75%",transform:"translate(-50%, -50%)",opacity:u}},c.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 498.65 117.59"},c.createElement("defs",null,c.createElement("style",null)),c.createElement("g",{id:"a"},c.createElement("line",{class:"d",x1:"465.21",y1:"12.76",x2:"38.53",y2:"12.76"}),c.createElement("line",{class:"d",x1:"456.27",y1:"62.28",x2:"6.48",y2:"62.28"}),c.createElement("line",{class:"d",x1:"110.12",y1:".03",x2:"94.55",y2:"75.4"}),c.createElement("line",{class:"d",x1:"162.1",y1:".03",x2:"146.53",y2:"75.4"}),c.createElement("line",{class:"d",x1:"211.08",y1:".03",x2:"195.51",y2:"75.4"}),c.createElement("line",{class:"d",x1:"498.05",y1:"83.3",y2:"83.3"}),c.createElement("line",{class:"d",x1:"498.65",y1:"108.54",x2:".6",y2:"108.54"}),c.createElement("line",{class:"d",x1:"248.79",y1:"74.03",x2:"248.79",y2:"117.42"}),c.createElement("line",{class:"d",x1:"277.82",y1:"74.03",x2:"277.82",y2:"117.42"}),c.createElement("line",{class:"d",x1:"322.17",y1:"74.2",x2:"322.17",y2:"117.59"})),c.createElement("g",{id:"b"},c.createElement("g",null,c.createElement("g",null,c.createElement("path",{class:"c",d:"M56.22,50.42l-6.7,11.86h-10.99L66.6,12.76h13.18l7.99,49.52h-10.53l-1.87-11.86h-19.15Zm18.25-8.5c-1.5-10.54-2.45-17.4-2.73-21.49h-.07c-2.08,4.44-6.05,12-11.19,21.49h13.99Z"}),c.createElement("path",{class:"c",d:"M107.76,12.76h19.53c10.18,0,16.65,5.57,16.65,14.36,0,11.51-8.59,17.07-21.12,17.07h-11.62l-3.72,18.1h-10.22l10.5-49.52Zm5.22,23.16h9.44c6.83,0,10.87-2.38,10.86-8.24,0-4.34-2.65-6.69-8.39-6.69h-8.72l-3.19,14.93Z"}),c.createElement("path",{class:"c",d:"M187.82,40.73h-24.3l-2.73,13.05h27.76l-3,8.5h-36.7l10.5-49.52h35.67l-1.83,8.5h-25.51l-2.29,10.98h24.3l-1.87,8.5Z"}),c.createElement("path",{class:"c",d:"M212.3,42.4l-4.2,19.88h-10.22l10.5-49.52h20.89c9.43,0,15.57,4.81,15.57,12.98,0,7.09-4.37,11.27-10.22,13.02,1.84,.84,5.84,3.39,4.09,11.83-1.23,5.58-1.84,9.41-1.49,11.69h-10.04c-.3-2.18-.05-5.47,1.29-11.55,1.18-5.6,.16-8.33-5.44-8.33h-10.71Zm1.72-8.23h10c5.53,0,10.07-1.79,10.07-7.31,0-3.76-2.33-5.86-7.33-5.86h-9.97l-2.77,13.17Z"}),c.createElement("path",{class:"c",d:"M268.68,21.26h-15.61l1.84-8.5h41.52l-1.84,8.5h-15.61l-8.62,41.02h-10.34l8.66-41.02Z"}),c.createElement("path",{class:"c",d:"M317.39,12.76l-6.32,29.56c-2.01,9.35,2.25,12.62,8.64,12.62,7.02,0,10.18-2.77,12.2-12.19l6.36-30h10.35l-6.56,30.75c-3.04,13.98-9.08,19.64-23.5,19.64-11.52,0-21.17-5.05-17.71-21.4l6.2-28.98h10.34Z"}),c.createElement("path",{class:"c",d:"M367.63,42.4l-4.2,19.88h-10.22l10.5-49.52h20.89c9.43,0,15.57,4.81,15.57,12.98,0,7.09-4.37,11.27-10.22,13.02,1.84,.84,5.84,3.39,4.09,11.83-1.23,5.58-1.84,9.41-1.49,11.69h-10.04c-.3-2.18-.05-5.47,1.29-11.55,1.18-5.6,.16-8.33-5.44-8.33h-10.71Zm1.72-8.23h10c5.53,0,10.07-1.79,10.07-7.31,0-3.76-2.33-5.86-7.33-5.86h-9.97l-2.77,13.17Z"}),c.createElement("path",{class:"c",d:"M444.97,40.73h-24.3l-2.73,13.05h27.76l-3,8.5h-36.7l10.5-49.52h35.67l-1.83,8.5h-25.51l-2.29,10.98h24.3l-1.87,8.5Z"})),c.createElement("path",{class:"c",d:"M2.56,83.3h2.65v22.55h13.61l-.42,2.34H2.56v-24.89Z"}),c.createElement("path",{class:"c",d:"M48.44,100.15l-3.04,8.04h-2.7l9.38-24.89h3.2l9.78,24.89h-2.87l-3.13-8.04h-10.64Zm9.84-2.34c-2.71-7.01-4.1-10.5-4.63-12.25h-.04c-.59,1.91-2.17,6.24-4.37,12.25h9.03Z"}),c.createElement("path",{class:"c",d:"M90.57,83.3h9.6c5.05,0,7.62,2.57,7.62,6.18,0,2.97-1.81,4.81-3.79,5.4,1.85,.53,4.68,2.24,4.68,6.07,0,4.88-3.77,7.24-8.3,7.24h-9.82v-24.89Zm8.94,10.5c3.93,0,5.54-1.47,5.54-4.13,0-2.49-1.82-4.09-5.01-4.09h-6.85v8.22h6.32Zm-6.32,12.1h6.91c3.18,0,5.83-1.43,5.83-4.9,0-3-2.03-4.92-6.58-4.92h-6.15v9.82Z"}),c.createElement("path",{class:"c",d:"M186.67,96.95v11.24h-2.66v-24.89h9.76c5,0,7.82,2.6,7.82,6.61,0,3.15-1.78,5.2-4.48,5.86,2.2,.55,4.02,2.09,4.02,6.38v1.02c0,1.78-.09,4.01,.32,5.02h-2.65c-.44-1.07-.37-3.05-.37-5.22v-.64c0-3.85-1.2-5.38-5.8-5.38h-5.95Zm0-2.31h6.14c4.1,0,6-1.52,6-4.58,0-2.86-1.9-4.45-5.6-4.45h-6.54v9.03Z"}),c.createElement("path",{class:"c",d:"M232.16,100.15l-3.04,8.04h-2.7l9.38-24.89h3.2l9.78,24.89h-2.87l-3.13-8.04h-10.64Zm9.84-2.34c-2.71-7.01-4.1-10.5-4.63-12.25h-.04c-.59,1.91-2.17,6.24-4.37,12.25h9.03Z"}),c.createElement("path",{class:"c",d:"M276.46,85.64h-8.5v-2.34h19.7v2.34h-8.52v22.55h-2.69v-22.55Z"}),c.createElement("path",{class:"c",d:"M333.87,95.6c0,6.87-3.95,12.98-11.79,12.98-7.31,0-11.6-5.68-11.6-12.86s4.28-12.82,11.83-12.82c7.09,0,11.57,5.45,11.57,12.69Zm-20.58,.02c0,5.55,3.07,10.63,8.9,10.63,6.16,0,8.86-4.96,8.86-10.6s-2.98-10.41-8.88-10.41-8.89,4.9-8.89,10.38Z"}),c.createElement("path",{class:"c",d:"M363.27,96.95v11.24h-2.66v-24.89h9.76c5,0,7.82,2.6,7.82,6.61,0,3.15-1.78,5.2-4.48,5.86,2.2,.55,4.02,2.09,4.02,6.38v1.02c0,1.78-.09,4.01,.32,5.02h-2.65c-.44-1.07-.37-3.05-.37-5.22v-.64c0-3.85-1.2-5.38-5.8-5.38h-5.95Zm0-2.31h6.14c4.1,0,6-1.52,6-4.58,0-2.86-1.9-4.45-5.6-4.45h-6.54v9.03Z"}),c.createElement("path",{class:"c",d:"M408.11,83.3v24.89h-2.66v-24.89h2.66Z"}),c.createElement("path",{class:"c",d:"M452.28,96.27h-13.08v9.58h14.36l-.37,2.34h-16.62v-24.89h16.36v2.34h-13.73v8.29h13.08v2.34Z"}),c.createElement("path",{class:"c",d:"M480.74,101.31c.76,3.14,2.91,5.01,7.01,5.01,4.41,0,6.14-2.06,6.14-4.58,0-2.65-1.28-4.24-6.81-5.49-5.89-1.34-7.99-3.27-7.99-6.79s2.85-6.56,8.26-6.56c6.16,0,8.42,3.55,8.74,6.55h-2.72c-.52-2.31-1.99-4.29-6.12-4.29-3.4,0-5.38,1.48-5.38,4.08,0,2.47,1.42,3.55,6.18,4.62,7.42,1.68,8.62,4.47,8.62,7.62,0,3.84-2.88,7.04-9.07,7.04s-9.04-3.44-9.59-7.22h2.73Z"}),c.createElement("g",null,c.createElement("path",{class:"c",d:"M152.05,83.53c1.79,.88,3.37,2.12,4.63,3.65,.43,.52,.82,1.07,1.17,1.65l-3.14,5-2.66-10.3Z"}),c.createElement("path",{class:"c",d:"M147.47,104.32l10.67-2.54c-.91,1.68-2.19,3.17-3.76,4.37-.56,.42-1.15,.81-1.77,1.15l-5.14-2.97Z"}),c.createElement("path",{class:"c",d:"M145.62,109.08c-.55,0-1.1-.03-1.65-.09-.7-.08-1.39-.21-2.07-.38l-1.44-5.58,9.39,5.43c-1.37,.41-2.8,.63-4.22,.63Z"}),c.createElement("path",{class:"c",d:"M139.15,107.59c-1.79-.88-3.37-2.12-4.63-3.65-.43-.52-.82-1.07-1.17-1.65l3.14-5,2.66,10.3Z"}),c.createElement("path",{class:"c",d:"M132.15,99.69c-.61-1.82-.81-3.76-.58-5.68,.08-.67,.21-1.34,.4-1.98l5.86-1.39-5.68,9.05Z"}),c.createElement("path",{class:"c",d:"M133.08,89.31c.91-1.67,2.19-3.15,3.75-4.34,.56-.42,1.15-.81,1.77-1.15l5.14,2.97-10.65,2.52Z"}),c.createElement("path",{class:"c",d:"M141.36,82.67c1.37-.41,2.8-.63,4.22-.63,.55,0,1.1,.03,1.65,.09,.7,.08,1.39,.21,2.07,.38l1.44,5.58-9.39-5.43Z"}),c.createElement("path",{class:"c",d:"M159.01,91.36c.61,1.83,.82,3.77,.58,5.7-.08,.66-.21,1.32-.39,1.97l-5.88,1.4,5.69-9.07Z"})))))))}}}]);
//# sourceMappingURL=component---src-pages-artworks-logo-design-aperture-laboratries-assets-svg-components-char-design-js-dddd18de06ca4fbd7081.js.map
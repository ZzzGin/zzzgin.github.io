"use strict";(self.webpackChunkzzzgin_github_io=self.webpackChunkzzzgin_github_io||[]).push([[21],{6867:function(e,t,n){var a=n(7225),c=a.Nothing,l=a.isNothing,r="undefined"!=typeof window?window:c,i="undefined"!=typeof document?document:c;e.exports.u9=r,e.exports.tj=i},7225:function(e,t,n){n.r(t),n.d(t,{Nothing:function(){return c},deserialize:function(){return h},isNothing:function(){return r},isSomething:function(){return i},serialize:function(){return o},toBool:function(){return l}});var a,c=((a=function(){return c}).toString=a.toLocaleString=a[Symbol.toPrimitive]=function(){return""},a.valueOf=function(){return!1},new Proxy(Object.freeze(a),{get:function(e,t){return e.hasOwnProperty(t)?e[t]:c}})),l=function(e){return!(!e||!e.valueOf())},r=function(e){return e===c},i=function(e){return!(e===c||null==e)},o=function(e){return JSON.stringify(e,(function(e,t){return t===c?null:t}))},h=function(e){return JSON.parse(e,(function(e,t){return null===t?c:t}))}},4514:function(e,t,n){n.d(t,{Z:function(){return o}});var a=n(7294);var c="undefined"!=typeof window,l=function(e){(0,a.useEffect)(e,[])},r=function(e){var t=(0,a.useRef)(e);t.current=e,l((function(){return function(){return t.current()}}))},i=function(e){var t=(0,a.useRef)(0),n=(0,a.useState)(e),c=n[0],l=n[1],i=(0,a.useCallback)((function(e){cancelAnimationFrame(t.current),t.current=requestAnimationFrame((function(){l(e)}))}),[]);return r((function(){cancelAnimationFrame(t.current)})),[c,i]},o=function(){var e=i((function(){return{x:c?window.pageXOffset:0,y:c?window.pageYOffset:0}})),t=e[0],n=e[1];return(0,a.useEffect)((function(){var e=function(){n((function(e){var t=window.pageXOffset,n=window.pageYOffset;return e.x!==t||e.y!==n?{x:t,y:n}:e}))};return e(),function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];e&&e.addEventListener&&e.addEventListener.apply(e,t)}(window,"scroll",e,{capture:!1,passive:!0}),function(){!function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];e&&e.removeEventListener&&e.removeEventListener.apply(e,t)}(window,"scroll",e)}}),[]),t}},5996:function(e,t,n){n.d(t,{t:function(){return l}});var a=n(7294),c=n(6867),l=function(){var e=(0,a.useState)({width:void 0,height:void 0}),t=e[0],n=e[1];return(0,a.useEffect)((function(){function e(){n({width:c.u9.innerWidth,height:c.u9.innerHeight})}return c.u9.addEventListener("resize",e),e(),function(){return c.u9.removeEventListener("resize",e)}}),[]),t}},4148:function(e,t,n){n.d(t,{X9:function(){return c},Zp:function(){return l},bA:function(){return a}});var a=function(e,t,n,a){if(n<e[0])return t[0];if(n>e[e.length-1])return t[t.length-1];for(var c=0;c<t.length-1;c++)if(e[c]<=n&&n<e[c+1])return a([e[c],e[c+1]],[t[c],t[c+1]],n)},c=function(e,t,n){var a=(t[1]-t[0])/(e[1]-e[0]);return n<=e[0]?t[0]:n>e[1]?t[1]:t[0]+a*(n-e[0])},l=function(e,t,n){return n<=e[0]?t[0]:n>e[1]?t[1]:t[0]+(.5*Math.sin(((n-e[0])/(e[1]-e[0])*10-5)/Math.PI)+.5)*(t[1]-t[0])}},8662:function(e,t,n){n.r(t);var a=n(7294),c=n(4514),l=n(4148),r=n(5996),i=n(6867);t.default=function(){var e=(0,c.Z)(),t=(0,r.t)(),n=(0,a.useState)(.4*t.height),o=n[0],h=n[1],u=(0,a.useState)(.5*t.width),m=u[0],s=u[1],f=(0,a.useState)("70%"),g=f[0],d=f[1],v=i.tj.documentElement.offsetHeight;return(0,a.useEffect)((function(){var n=e.y/(v-t.height)*100;d((0,l.bA)([0,3],[70,20],n,l.Zp)+"%"),h((0,l.bA)([0,3],[.4*t.height,.03*t.width+10],n,l.Zp)),s((0,l.bA)([2,6],[.5*t.width,.1*t.width+10],n,l.Zp))}),[e,t,v]),a.createElement(a.Fragment,null,a.createElement("div",{className:"mainlogo",style:{position:"fixed",top:o,left:m,width:g,transform:"translate(-50%, -50%)"}},a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 398.77 108.29"},a.createElement("g",{id:"a"}),a.createElement("g",{id:"b"},a.createElement("g",{id:"c"},a.createElement("g",null,a.createElement("g",{className:"spin"},a.createElement("path",{className:"e slice5 mainlogo-ring",d:"M5.64,31.43c-.3,.08-.55-.23-.42-.5,3.53-7.46,8.77-14.05,15.31-19.23,3.29-2.6,6.85-4.8,10.6-6.57,.11-.05,.24-.04,.34,.02l22.48,13.35c.28,.16,.22,.58-.1,.66l-22.07,5.62L5.64,31.43Z"}),a.createElement("path",{className:"e slice4 mainlogo-ring",d:"M3.79,72.38c-.16,.26-.55,.23-.65-.06C.36,64.54-.6,56.17,.36,47.89c.48-4.15,1.44-8.22,2.84-12.11,.04-.11,.14-.2,.25-.23l25.34-6.45c.31-.08,.56,.26,.4,.53l-10.73,18.05-.9,1.5L3.79,72.38Z"}),a.createElement("path",{className:"e slice3 mainlogo-ring",d:"M31.45,102.66c.08,.3-.23,.55-.5,.42-7.48-3.54-14.08-8.79-19.25-15.33-2.59-3.26-4.79-6.81-6.55-10.57-.05-.11-.04-.24,.02-.34l13.36-22.48c.16-.28,.58-.22,.66,.1l12.28,48.21Z"}),a.createElement("path",{className:"e slice2 mainlogo-ring",d:"M47.89,107.92c-4.14-.48-8.21-1.43-12.1-2.83-.11-.04-.2-.14-.23-.25l-6.45-25.34c-.08-.31,.26-.56,.53-.4l18.07,10.74,1.49,.89,23.18,13.78c.26,.16,.23,.55-.06,.65-7.77,2.77-16.12,3.72-24.4,2.77h-.02Z"}),a.createElement("path",{className:"e slice1 mainlogo-ring",d:"M54.38,89.79c-.28-.16-.22-.58,.1-.66l20.33-5.17h0l27.83-7.09c.3-.08,.55,.23,.42,.5-3.54,7.45-8.78,14.04-15.32,19.22-3.26,2.58-6.81,4.78-10.58,6.55-.11,.05-.24,.04-.34-.02l-22.45-13.35Z"}),a.createElement("path",{className:"e slice7 mainlogo-ring",d:"M76.89,5.65c-.08-.3,.23-.55,.5-.42,7.45,3.54,14.02,8.77,19.18,15.29,2.59,3.27,4.79,6.82,6.56,10.57,.05,.11,.05,.24-.02,.34l-13.33,22.46c-.16,.28-.58,.22-.66-.1L76.89,5.65Z"}),a.createElement("path",{className:"e slice0 mainlogo-ring",d:"M89.67,60.87l1.05-1.77,13.78-23.21c.16-.26,.55-.23,.65,.06,2.78,7.78,3.74,16.15,2.77,24.44-.48,4.16-1.44,8.23-2.84,12.13-.04,.11-.14,.2-.25,.23l-25.32,6.44c-.31,.08-.56-.26-.4-.53l10.56-17.79Z"}),a.createElement("path",{className:"e slice6 mainlogo-ring",d:"M60.93,18.64l-1.8-1.08L35.92,3.78c-.26-.16-.23-.55,.06-.65C43.75,.36,52.11-.6,60.39,.36c4.16,.48,8.24,1.44,12.15,2.85,.11,.04,.2,.14,.23,.25l6.43,25.31c.08,.31-.26,.56-.53,.4l-17.74-10.54Z"})),a.createElement("g",null,a.createElement("path",{className:"e mainlogo-text",d:"M114.45,82.51h1.45v12.31h7.43l-.23,1.28h-8.65v-13.59Z"}),a.createElement("path",{className:"e mainlogo-text",d:"M139.5,91.71l-1.66,4.39h-1.47l5.12-13.59h1.75l5.34,13.59h-1.57l-1.71-4.39h-5.81Zm5.37-1.28c-1.48-3.83-2.24-5.73-2.53-6.69h-.02c-.32,1.04-1.18,3.4-2.38,6.69h4.93Z"}),a.createElement("path",{className:"e mainlogo-text",d:"M162.5,82.51h5.24c2.75,0,4.16,1.4,4.16,3.37,0,1.62-.99,2.63-2.07,2.95,1.01,.29,2.56,1.22,2.56,3.31,0,2.67-2.06,3.95-4.53,3.95h-5.36v-13.59Zm4.88,5.73c2.14,0,3.02-.81,3.02-2.25,0-1.36-.99-2.23-2.73-2.23h-3.74v4.49h3.45Zm-3.45,6.61h3.77c1.73,0,3.18-.78,3.18-2.68,0-1.64-1.11-2.69-3.59-2.69h-3.36v5.36Z"}),a.createElement("path",{className:"e mainlogo-text",d:"M198.91,89.23c0,3.75-2.16,7.09-6.44,7.09-3.99,0-6.33-3.1-6.33-7.02s2.34-7,6.46-7c3.87,0,6.31,2.97,6.31,6.93Zm-11.24,0c0,3.03,1.68,5.8,4.86,5.8,3.36,0,4.84-2.71,4.84-5.79s-1.62-5.68-4.85-5.68-4.85,2.68-4.85,5.67Z"}),a.createElement("path",{className:"e mainlogo-text",d:"M214.97,89.96v6.14h-1.45v-13.59h5.33c2.73,0,4.27,1.42,4.27,3.61,0,1.72-.97,2.84-2.45,3.2,1.2,.3,2.19,1.14,2.19,3.48v.56c0,.97-.05,2.19,.17,2.74h-1.45c-.24-.59-.2-1.66-.2-2.85v-.35c0-2.1-.65-2.94-3.17-2.94h-3.25Zm0-1.26h3.35c2.24,0,3.27-.83,3.27-2.5,0-1.56-1.04-2.43-3.06-2.43h-3.57v4.93Z"}),a.createElement("path",{className:"e mainlogo-text",d:"M239.81,91.71l-1.66,4.39h-1.47l5.12-13.59h1.75l5.34,13.59h-1.57l-1.71-4.39h-5.81Zm5.37-1.28c-1.48-3.83-2.24-5.73-2.53-6.69h-.02c-.32,1.04-1.18,3.4-2.38,6.69h4.93Z"}),a.createElement("path",{className:"e mainlogo-text",d:"M264.01,83.79h-4.64v-1.28h10.76v1.28h-4.65v12.31h-1.47v-12.31Z"}),a.createElement("path",{className:"e mainlogo-text",d:"M295.35,89.23c0,3.75-2.16,7.09-6.44,7.09-3.99,0-6.33-3.1-6.33-7.02s2.34-7,6.46-7c3.87,0,6.31,2.97,6.31,6.93Zm-11.24,0c0,3.03,1.68,5.8,4.86,5.8,3.36,0,4.84-2.71,4.84-5.79s-1.63-5.68-4.85-5.68-4.85,2.68-4.85,5.67Z"}),a.createElement("path",{className:"e mainlogo-text",d:"M311.41,89.96v6.14h-1.45v-13.59h5.33c2.73,0,4.27,1.42,4.27,3.61,0,1.72-.97,2.84-2.45,3.2,1.2,.3,2.19,1.14,2.19,3.48v.56c0,.97-.05,2.19,.17,2.74h-1.45c-.24-.59-.2-1.66-.2-2.85v-.35c0-2.1-.65-2.94-3.17-2.94h-3.25Zm0-1.26h3.35c2.24,0,3.27-.83,3.27-2.5,0-1.56-1.04-2.43-3.06-2.43h-3.57v4.93Z"}),a.createElement("path",{className:"e mainlogo-text",d:"M335.89,82.51v13.59h-1.45v-13.59h1.45Z"}),a.createElement("path",{className:"e mainlogo-text",d:"M360.01,89.59h-7.14v5.23h7.84l-.2,1.28h-9.08v-13.59h8.93v1.28h-7.5v4.53h7.14v1.28Z"}),a.createElement("path",{className:"e mainlogo-text",d:"M375.55,92.34c.42,1.71,1.59,2.74,3.83,2.74,2.41,0,3.35-1.12,3.35-2.5,0-1.45-.7-2.31-3.72-3-3.22-.73-4.36-1.79-4.36-3.71s1.55-3.58,4.51-3.58c3.37,0,4.6,1.94,4.77,3.57h-1.49c-.28-1.26-1.09-2.34-3.34-2.34-1.86,0-2.93,.81-2.93,2.23,0,1.35,.77,1.94,3.38,2.52,4.05,.92,4.71,2.44,4.71,4.16,0,2.1-1.57,3.85-4.95,3.85s-4.93-1.88-5.24-3.94h1.49Z"})),a.createElement("g",null,a.createElement("path",{className:"e mainlogo-text",d:"M96.78,67.46l-5.03,8.9h-8.25l21.08-37.17h9.89l6,37.17h-7.9l-1.41-8.9h-14.38Zm13.7-6.38c-1.13-7.91-1.84-13.06-2.05-16.13h-.05c-1.56,3.34-4.54,9.01-8.4,16.13h10.5Z"}),a.createElement("path",{className:"e mainlogo-text",d:"M135.47,39.19h14.66c7.64,0,12.5,4.18,12.5,10.78,0,8.64-6.45,12.81-15.85,12.81h-8.72l-2.79,13.59h-7.67l7.88-37.17Zm3.92,17.39h7.09c5.13,0,8.16-1.78,8.15-6.18,0-3.26-1.99-5.02-6.3-5.02h-6.55l-2.39,11.2Z"}),a.createElement("path",{className:"e mainlogo-text",d:"M195.58,60.19h-18.24l-2.05,9.8h20.84l-2.25,6.38h-27.55l7.88-37.17h26.78l-1.38,6.38h-19.15l-1.72,8.24h18.24l-1.4,6.38Z"}),a.createElement("path",{className:"e mainlogo-text",d:"M213.96,61.44l-3.15,14.92h-7.67l7.88-37.17h15.68c7.08,0,11.69,3.61,11.69,9.75,0,5.32-3.28,8.46-7.67,9.77,1.38,.63,4.38,2.55,3.07,8.88-.92,4.19-1.38,7.06-1.12,8.77h-7.54c-.23-1.63-.04-4.1,.97-8.67,.89-4.2,.12-6.25-4.09-6.25h-8.04Zm1.29-6.18h7.51c4.15,0,7.56-1.34,7.56-5.49,0-2.82-1.75-4.4-5.5-4.4h-7.49l-2.08,9.89Z"}),a.createElement("path",{className:"e mainlogo-text",d:"M256.29,45.57h-11.72l1.38-6.38h31.17l-1.38,6.38h-11.71l-6.47,30.8h-7.76l6.5-30.8Z"}),a.createElement("path",{className:"e mainlogo-text",d:"M292.86,39.19l-4.74,22.19c-1.51,7.02,1.69,9.47,6.49,9.47,5.27,0,7.64-2.08,9.16-9.15l4.77-22.52h7.77l-4.93,23.08c-2.28,10.49-6.81,14.74-17.64,14.74-8.65,0-15.9-3.79-13.29-16.06l4.66-21.76h7.76Z"}),a.createElement("path",{className:"e mainlogo-text",d:"M330.58,61.44l-3.15,14.92h-7.67l7.88-37.17h15.68c7.08,0,11.69,3.61,11.69,9.75,0,5.32-3.28,8.46-7.67,9.77,1.38,.63,4.38,2.55,3.07,8.88-.92,4.19-1.38,7.06-1.12,8.77h-7.54c-.23-1.63-.04-4.1,.97-8.67,.89-4.2,.12-6.25-4.09-6.25h-8.04Zm1.29-6.18h7.51c4.15,0,7.56-1.34,7.56-5.49,0-2.82-1.75-4.4-5.5-4.4h-7.49l-2.08,9.89Z"}),a.createElement("path",{className:"e mainlogo-text",d:"M388.65,60.19h-18.24l-2.05,9.8h20.84l-2.25,6.38h-27.55l7.88-37.17h26.78l-1.38,6.38h-19.15l-1.72,8.24h18.24l-1.4,6.38Z"}))))))))}}}]);
//# sourceMappingURL=component---src-pages-artworks-logo-design-aperture-laboratries-assets-svg-components-main-logo-js-f61b50a3a018bdfc31f6.js.map
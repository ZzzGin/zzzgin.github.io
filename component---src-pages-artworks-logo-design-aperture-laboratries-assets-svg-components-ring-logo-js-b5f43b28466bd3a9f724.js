"use strict";(self.webpackChunkzzzgin_github_io=self.webpackChunkzzzgin_github_io||[]).push([[805],{6867:function(n,t,e){var r=e(7225),i=r.Nothing,u=r.isNothing,c="undefined"!=typeof window?window:i,o="undefined"!=typeof document?document:i;n.exports.u9=c,n.exports.tj=o},7225:function(n,t,e){e.r(t),e.d(t,{Nothing:function(){return i},deserialize:function(){return a},isNothing:function(){return c},isSomething:function(){return o},serialize:function(){return f},toBool:function(){return u}});var r,i=((r=function(){return i}).toString=r.toLocaleString=r[Symbol.toPrimitive]=function(){return""},r.valueOf=function(){return!1},new Proxy(Object.freeze(r),{get:function(n,t){return n.hasOwnProperty(t)?n[t]:i}})),u=function(n){return!(!n||!n.valueOf())},c=function(n){return n===i},o=function(n){return!(n===i||null==n)},f=function(n){return JSON.stringify(n,(function(n,t){return t===i?null:t}))},a=function(n){return JSON.parse(n,(function(n,t){return null===t?i:t}))}},4514:function(n,t,e){e.d(t,{Z:function(){return f}});var r=e(7294);var i="undefined"!=typeof window,u=function(n){(0,r.useEffect)(n,[])},c=function(n){var t=(0,r.useRef)(n);t.current=n,u((function(){return function(){return t.current()}}))},o=function(n){var t=(0,r.useRef)(0),e=(0,r.useState)(n),i=e[0],u=e[1],o=(0,r.useCallback)((function(n){cancelAnimationFrame(t.current),t.current=requestAnimationFrame((function(){u(n)}))}),[]);return c((function(){cancelAnimationFrame(t.current)})),[i,o]},f=function(){var n=o((function(){return{x:i?window.pageXOffset:0,y:i?window.pageYOffset:0}})),t=n[0],e=n[1];return(0,r.useEffect)((function(){var n=function(){e((function(n){var t=window.pageXOffset,e=window.pageYOffset;return n.x!==t||n.y!==e?{x:t,y:e}:n}))};return n(),function(n){for(var t=[],e=1;e<arguments.length;e++)t[e-1]=arguments[e];n&&n.addEventListener&&n.addEventListener.apply(n,t)}(window,"scroll",n,{capture:!1,passive:!0}),function(){!function(n){for(var t=[],e=1;e<arguments.length;e++)t[e-1]=arguments[e];n&&n.removeEventListener&&n.removeEventListener.apply(n,t)}(window,"scroll",n)}}),[]),t}},5996:function(n,t,e){e.d(t,{t:function(){return u}});var r=e(7294),i=e(6867),u=function(){var n=(0,r.useState)({width:void 0,height:void 0}),t=n[0],e=n[1];return(0,r.useEffect)((function(){function n(){e({width:i.u9.innerWidth,height:i.u9.innerHeight})}return i.u9.addEventListener("resize",n),n(),function(){return i.u9.removeEventListener("resize",n)}}),[]),t}},4148:function(n,t,e){e.d(t,{X9:function(){return i},Zp:function(){return u},bA:function(){return r}});var r=function(n,t,e,r){if(e<n[0])return t[0];if(e>n[n.length-1])return t[t.length-1];for(var i=0;i<t.length-1;i++)if(n[i]<=e&&e<n[i+1])return r([n[i],n[i+1]],[t[i],t[i+1]],e)},i=function(n,t,e){var r=(t[1]-t[0])/(n[1]-n[0]);return e<=n[0]?t[0]:e>n[1]?t[1]:t[0]+r*(e-n[0])},u=function(n,t,e){return e<=n[0]?t[0]:e>n[1]?t[1]:t[0]+(.5*Math.sin(((e-n[0])/(n[1]-n[0])*10-5)/Math.PI)+.5)*(t[1]-t[0])}},5774:function(n,t,e){e.r(t);var r=e(7294),i=e(4514),u=e(4148),c=e(5996),o=e(6867);t.default=function(){var n=(0,i.Z)(),t=(0,c.t)(),e=o.tj.documentElement.offsetHeight,f=(0,r.useState)(0),a=f[0],l=f[1];return(0,r.useEffect)((function(){var r=n.y/(e-t.height)*100;l((0,u.bA)([12,16],[0,1],r,u.X9))}),[n,e,t]),r.createElement(r.Fragment,null,r.createElement("div",{className:"ringLogo",style:{width:"50%",position:"fixed",left:"50%",top:"50%",transform:"translate(-50%, -50%)",opacity:a}},r.createElement("svg",{id:"a",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 246.42 246.42"},r.createElement("g",null,r.createElement("path",{class:"ring-c",d:"M58.16,91.39c-.62,.15-1.14-.49-.86-1.06,4.88-9.78,11.92-18.41,20.64-25.2,4.44-3.45,9.24-6.38,14.29-8.72,.23-.11,.5-.09,.71,.04l29.46,17.81c.57,.35,.44,1.21-.21,1.37l-29.18,7.18-34.85,8.58Z"}),r.createElement("path",{class:"ring-c",d:"M54.71,146.69c-.33,.55-1.16,.46-1.36-.14-3.47-10.37-4.58-21.46-3.22-32.41,.69-5.57,2.01-11.02,3.92-16.24,.09-.24,.29-.42,.53-.48l33.43-8.24c.65-.16,1.17,.55,.82,1.12l-14.32,23.67-1.22,2.01-18.58,30.72Z"}),r.createElement("path",{class:"ring-c",d:"M91.4,188.27c.15,.62-.49,1.14-1.06,.86-9.81-4.89-18.44-11.95-25.23-20.68-3.44-4.41-6.36-9.19-8.7-14.25-.11-.23-.09-.5,.04-.71l17.82-29.46c.35-.57,1.21-.44,1.37,.21l15.77,64.03Z"}),r.createElement("path",{class:"ring-c",d:"M114.13,196.29c-5.55-.69-11-2-16.22-3.91-.24-.09-.42-.29-.48-.53l-8.23-33.44c-.16-.65,.55-1.17,1.12-.82l23.69,14.34,1.99,1.21,30.69,18.57c.55,.33,.46,1.16-.14,1.36-10.36,3.46-21.43,4.57-32.39,3.22h-.03Z"}),r.createElement("path",{class:"ring-c",d:"M124.07,172.18c-.57-.35-.44-1.21,.21-1.37l26.87-6.61h.01l37.09-9.13c.62-.15,1.14,.49,.86,1.06-4.88,9.77-11.93,18.4-20.65,25.19-4.4,3.43-9.19,6.35-14.26,8.71-.23,.11-.5,.09-.71-.04l-29.42-17.81Z"}),r.createElement("path",{class:"ring-c",d:"M155.09,58.19c-.15-.62,.49-1.14,1.06-.86,9.76,4.88,18.37,11.92,25.14,20.61,3.44,4.41,6.37,9.2,8.72,14.25,.11,.23,.09,.5-.04,.71l-17.79,29.44c-.35,.57-1.21,.44-1.37-.21l-15.72-63.95Z"}),r.createElement("path",{class:"ring-c",d:"M171.68,132.84l1.45-2.39,18.57-30.74c.33-.55,1.16-.46,1.36,.14,3.47,10.38,4.59,21.47,3.23,32.44-.69,5.58-2.01,11.04-3.92,16.27-.09,.24-.29,.42-.53,.48l-33.41,8.22c-.65,.16-1.17-.55-.82-1.12l14.07-23.29Z"}),r.createElement("path",{class:"ring-c",d:"M132.92,74.77l-2.45-1.49-30.73-18.58c-.55-.33-.46-1.16,.14-1.36,10.36-3.46,21.44-4.58,32.4-3.22,5.58,.69,11.05,2.01,16.29,3.93,.24,.09,.42,.29,.48,.53l8.21,33.4c.16,.65-.55,1.17-1.12,.82l-23.23-14.04Z"})),r.createElement("circle",{class:"ring-b",cx:"123.21",cy:"123.21",r:"123.2"}))))}}}]);
//# sourceMappingURL=component---src-pages-artworks-logo-design-aperture-laboratries-assets-svg-components-ring-logo-js-b5f43b28466bd3a9f724.js.map
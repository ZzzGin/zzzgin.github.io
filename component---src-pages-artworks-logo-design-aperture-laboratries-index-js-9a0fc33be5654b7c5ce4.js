"use strict";(self.webpackChunkzzzgin_github_io=self.webpackChunkzzzgin_github_io||[]).push([[517,443,21],{6867:function(e,t,n){var l=n(7225),a=l.Nothing,c=l.isNothing,r="undefined"!=typeof window?window:a,m="undefined"!=typeof document?document:a;e.exports.u9=r,e.exports.tj=m},7225:function(e,t,n){n.r(t),n.d(t,{Nothing:function(){return a},deserialize:function(){return s},isNothing:function(){return r},isSomething:function(){return m},serialize:function(){return i},toBool:function(){return c}});var l,a=((l=function(){return a}).toString=l.toLocaleString=l[Symbol.toPrimitive]=function(){return""},l.valueOf=function(){return!1},new Proxy(Object.freeze(l),{get:function(e,t){return e.hasOwnProperty(t)?e[t]:a}})),c=function(e){return!(!e||!e.valueOf())},r=function(e){return e===a},m=function(e){return!(e===a||null==e)},i=function(e){return JSON.stringify(e,(function(e,t){return t===a?null:t}))},s=function(e){return JSON.parse(e,(function(e,t){return null===t?a:t}))}},4514:function(e,t,n){n.d(t,{Z:function(){return i}});var l=n(7294);var a="undefined"!=typeof window,c=function(e){(0,l.useEffect)(e,[])},r=function(e){var t=(0,l.useRef)(e);t.current=e,c((function(){return function(){return t.current()}}))},m=function(e){var t=(0,l.useRef)(0),n=(0,l.useState)(e),a=n[0],c=n[1],m=(0,l.useCallback)((function(e){cancelAnimationFrame(t.current),t.current=requestAnimationFrame((function(){c(e)}))}),[]);return r((function(){cancelAnimationFrame(t.current)})),[a,m]},i=function(){var e=m((function(){return{x:a?window.pageXOffset:0,y:a?window.pageYOffset:0}})),t=e[0],n=e[1];return(0,l.useEffect)((function(){var e=function(){n((function(e){var t=window.pageXOffset,n=window.pageYOffset;return e.x!==t||e.y!==n?{x:t,y:n}:e}))};return e(),function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];e&&e.addEventListener&&e.addEventListener.apply(e,t)}(window,"scroll",e,{capture:!1,passive:!0}),function(){!function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];e&&e.removeEventListener&&e.removeEventListener.apply(e,t)}(window,"scroll",e)}}),[]),t}},5996:function(e,t,n){n.d(t,{t:function(){return c}});var l=n(7294),a=n(6867),c=function(){var e=(0,l.useState)({width:void 0,height:void 0}),t=e[0],n=e[1];return(0,l.useEffect)((function(){function e(){n({width:a.u9.innerWidth,height:a.u9.innerHeight})}return a.u9.addEventListener("resize",e),e(),function(){return a.u9.removeEventListener("resize",e)}}),[]),t}},4148:function(e,t,n){n.d(t,{X9:function(){return a},Zp:function(){return c},bA:function(){return l}});var l=function(e,t,n,l){if(n<e[0])return t[0];if(n>e[e.length-1])return t[t.length-1];for(var a=0;a<t.length-1;a++)if(e[a]<=n&&n<e[a+1])return l([e[a],e[a+1]],[t[a],t[a+1]],n)},a=function(e,t,n){var l=(t[1]-t[0])/(e[1]-e[0]);return n<=e[0]?t[0]:n>e[1]?t[1]:t[0]+l*(n-e[0])},c=function(e,t,n){return n<=e[0]?t[0]:n>e[1]?t[1]:t[0]+(.5*Math.sin(((n-e[0])/(e[1]-e[0])*10-5)/Math.PI)+.5)*(t[1]-t[0])}},3139:function(e,t,n){n.r(t);var l=n(7294),a=n(4514),c=n(4148),r=n(5996),m=n(6867);t.default=function(){var e=(0,a.Z)(),t=(0,r.t)(),n=m.tj.documentElement.offsetHeight,i=(0,l.useState)(0),s=i[0],h=i[1];return(0,l.useEffect)((function(){var l=e.y/(n-t.height)*100;h((0,c.bA)([2,5],[0,1],l,c.X9))}),[e,n,t]),l.createElement(l.Fragment,null,l.createElement("div",{className:"designLogo",style:{width:"60%",position:"fixed",left:"50%",top:"50%",transform:"translate(-50%, -50%)",opacity:s}},l.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 313.07 313.07"},l.createElement("g",{id:"a"}),l.createElement("g",{id:"b"},l.createElement("g",{id:"d"},l.createElement("g",null,l.createElement("g",null,l.createElement("path",{className:"h",d:"M156.52,95.43v1.4h-.01l-39.86,15.23-3.42,1.3-50.43,19.28c4.34-17.08,13.23-32.33,25.3-44.41,5.71-5.7,12.12-10.7,19.1-14.83l49.32,22.04Z"}),l.createElement("path",{className:"h",d:"M114.24,114.36l-17.39,38.86h0l-1.51,3.36-22.04,49.3c-8.58-14.44-13.5-31.29-13.5-49.3,0-8.27,1.04-16.29,3-23.95l50.43-19.28,1,1Z"}),l.createElement("path",{className:"h",d:"M132.56,250.28c-17.1-4.35-32.37-13.25-44.46-25.35-5.7-5.69-10.68-12.09-14.79-19.05l22.04-49.3h1.41l15.23,39.84,1.28,3.35,19.3,50.5Z"}),l.createElement("path",{className:"h",d:"M205.78,239.77c-14.42,8.57-31.27,13.48-49.26,13.49h-.04c-8.26,0-16.28-1.04-23.93-2.99l-19.3-50.5,.97-.97,38.96,17.44h.01l3.32,1.49,49.26,22.04Z"}),l.createElement("path",{className:"h",d:"M250.17,180.57c-4.35,17.07-13.25,32.31-25.32,44.4-5.69,5.69-12.09,10.67-19.06,14.81l-49.26-22.04v-1.4l39.77-15.19h.01l3.41-1.31,50.46-19.26Z"}),l.createElement("path",{className:"h",d:"M239.65,107.25l-22.03,49.33h-1.36l-15.2-39.81-1.33-3.48-19.23-50.38c17.04,4.35,32.27,13.23,44.32,25.29,5.69,5.69,10.68,12.09,14.82,19.05Z"}),l.createElement("path",{className:"h",d:"M253.17,156.58c0,8.28-1.04,16.31-3,23.98l-50.46,19.26-.97-.98h0v-.02l17.42-38.99,1.46-3.25,22.03-49.33c8.59,14.45,13.52,31.31,13.52,49.33Z"}),l.createElement("path",{className:"h",d:"M199.74,113.3l-1,1-38.89-17.38-3.32-1.49-49.32-22.04c14.44-8.58,31.29-13.49,49.28-13.49h.04c8.28,0,16.31,1.05,23.98,3.01l19.23,50.38Z"})),l.createElement("g",null,l.createElement("path",{className:"n",d:"M216.2,156.58c0,33-26.75,59.75-59.75,59.75-79.26-3.15-79.24-116.37,0-119.51,33,0,59.75,26.75,59.75,59.75h0Z"}),l.createElement("path",{className:"t",d:"M253.11,156.58c0,53.4-43.29,96.68-96.68,96.68-128.24-5.09-128.21-188.29,0-193.36,53.39,0,96.68,43.29,96.68,96.68h0Z"}),l.createElement("path",{className:"o",d:"M312.92,156.58c0,86.4-70.04,156.43-156.43,156.43-207.51-8.24-207.45-304.66,0-312.87,86.39,0,156.43,70.04,156.43,156.43h0Z"}),l.createElement("g",null,l.createElement("line",{className:"p",x1:".05",y1:"156.58",x2:"1.05",y2:"156.58"}),l.createElement("line",{className:"g",x1:"3.06",y1:"156.58",x2:"310.69",y2:"156.58"}),l.createElement("line",{className:"p",x1:"311.69",y1:"156.58",x2:"312.69",y2:"156.58"})),l.createElement("g",null,l.createElement("line",{className:"p",x1:"156.47",y1:".15",x2:"156.47",y2:"1.15"}),l.createElement("line",{className:"m",x1:"156.47",y1:"3.16",x2:"156.47",y2:"311.02"}),l.createElement("line",{className:"p",x1:"156.47",y1:"312.02",x2:"156.47",y2:"313.02"})),l.createElement("g",null,l.createElement("line",{className:"p",x1:"45.86",y1:"267.12",x2:"46.56",y2:"266.41"}),l.createElement("line",{className:"g",x1:"47.98",y1:"264.99",x2:"265.51",y2:"47.47"}),l.createElement("line",{className:"p",x1:"266.22",y1:"46.76",x2:"266.93",y2:"46.05"})),l.createElement("g",null,l.createElement("line",{className:"p",x1:"45.8",y1:"45.97",x2:"46.5",y2:"46.68"}),l.createElement("line",{className:"m",x1:"47.92",y1:"48.09",x2:"265.61",y2:"265.78"}),l.createElement("line",{className:"p",x1:"266.32",y1:"266.49",x2:"267.03",y2:"267.2"})),l.createElement("g",null,l.createElement("line",{className:"p",x1:"156.49",y1:".15",x2:"156.84",y2:"1.08"}),l.createElement("line",{className:"s",x1:"157.55",y1:"2.95",x2:"215.49",y2:"154.72"}),l.createElement("line",{className:"p",x1:"215.85",y1:"155.65",x2:"216.2",y2:"156.58"})),l.createElement("g",null,l.createElement("line",{className:"p",x1:"266.93",y1:"46.05",x2:"266.52",y2:"46.96"}),l.createElement("line",{className:"i",x1:"265.71",y1:"48.78",x2:"199.5",y2:"197.03"}),l.createElement("line",{className:"p",x1:"199.09",y1:"197.94",x2:"198.68",y2:"198.85"})),l.createElement("g",null,l.createElement("line",{className:"p",x1:"312.92",y1:"156.58",x2:"311.99",y2:"156.94"}),l.createElement("line",{className:"e1",x1:"310.12",y1:"157.65",x2:"158.31",y2:"215.62"}),l.createElement("line",{className:"p",x1:"157.38",y1:"215.98",x2:"156.45",y2:"216.34"})),l.createElement("g",null,l.createElement("line",{className:"p",x1:"267.03",y1:"267.2",x2:"266.11",y2:"266.79"}),l.createElement("line",{className:"j",x1:"264.29",y1:"265.98",x2:"115.99",y2:"199.62"}),l.createElement("line",{className:"p",x1:"115.08",y1:"199.21",x2:"114.17",y2:"198.81"})),l.createElement("g",null,l.createElement("line",{className:"p",x1:"156.49",y1:"313.02",x2:"156.13",y2:"312.08"}),l.createElement("line",{className:"q",x1:"155.42",y1:"310.22",x2:"97.41",y2:"158.45"}),l.createElement("line",{className:"p",x1:"97.05",y1:"157.52",x2:"96.7",y2:"156.58"})),l.createElement("g",null,l.createElement("line",{className:"p",x1:"45.86",y1:"267.12",x2:"46.27",y2:"266.21"}),l.createElement("line",{className:"l",x1:"47.08",y1:"264.39",x2:"113.37",y2:"116.18"}),l.createElement("line",{className:"p",x1:"113.77",y1:"115.27",x2:"114.18",y2:"114.35"})),l.createElement("g",null,l.createElement("line",{className:"p",x1:".05",y1:"156.58",x2:".99",y2:"156.23"}),l.createElement("line",{className:"r",x1:"2.85",y1:"155.52",x2:"154.58",y2:"97.54"}),l.createElement("line",{className:"p",x1:"155.51",y1:"97.19",x2:"156.45",y2:"96.83"})),l.createElement("g",null,l.createElement("line",{className:"p",x1:"45.8",y1:"45.97",x2:"46.71",y2:"46.38"}),l.createElement("line",{className:"f",x1:"48.53",y1:"47.19",x2:"196.85",y2:"113.49"}),l.createElement("line",{className:"p",x1:"197.76",y1:"113.9",x2:"198.67",y2:"114.3"})))))))))}},8662:function(e,t,n){n.r(t);var l=n(7294),a=n(4514),c=n(4148),r=n(5996),m=n(6867);t.default=function(){var e=(0,a.Z)(),t=(0,r.t)(),n=(0,l.useState)(.4*t.height),i=n[0],s=n[1],h=(0,l.useState)(.5*t.width),o=h[0],u=h[1],E=(0,l.useState)("70%"),f=E[0],g=E[1],x=m.tj.documentElement.offsetHeight;return(0,l.useEffect)((function(){var n=e.y/(x-t.height)*100;g((0,c.bA)([0,3],[70,20],n,c.Zp)+"%"),s((0,c.bA)([0,3],[.4*t.height,.03*t.width+10],n,c.Zp)),u((0,c.bA)([2,6],[.5*t.width,.1*t.width+10],n,c.Zp))}),[e,t,x]),l.createElement(l.Fragment,null,l.createElement("div",{className:"mainlogo",style:{position:"fixed",top:i,left:o,width:f,transform:"translate(-50%, -50%)"}},l.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 398.77 108.29"},l.createElement("g",{id:"a"}),l.createElement("g",{id:"b"},l.createElement("g",{id:"c"},l.createElement("g",null,l.createElement("g",{className:"spin"},l.createElement("path",{className:"e slice5 mainlogo-ring",d:"M5.64,31.43c-.3,.08-.55-.23-.42-.5,3.53-7.46,8.77-14.05,15.31-19.23,3.29-2.6,6.85-4.8,10.6-6.57,.11-.05,.24-.04,.34,.02l22.48,13.35c.28,.16,.22,.58-.1,.66l-22.07,5.62L5.64,31.43Z"}),l.createElement("path",{className:"e slice4 mainlogo-ring",d:"M3.79,72.38c-.16,.26-.55,.23-.65-.06C.36,64.54-.6,56.17,.36,47.89c.48-4.15,1.44-8.22,2.84-12.11,.04-.11,.14-.2,.25-.23l25.34-6.45c.31-.08,.56,.26,.4,.53l-10.73,18.05-.9,1.5L3.79,72.38Z"}),l.createElement("path",{className:"e slice3 mainlogo-ring",d:"M31.45,102.66c.08,.3-.23,.55-.5,.42-7.48-3.54-14.08-8.79-19.25-15.33-2.59-3.26-4.79-6.81-6.55-10.57-.05-.11-.04-.24,.02-.34l13.36-22.48c.16-.28,.58-.22,.66,.1l12.28,48.21Z"}),l.createElement("path",{className:"e slice2 mainlogo-ring",d:"M47.89,107.92c-4.14-.48-8.21-1.43-12.1-2.83-.11-.04-.2-.14-.23-.25l-6.45-25.34c-.08-.31,.26-.56,.53-.4l18.07,10.74,1.49,.89,23.18,13.78c.26,.16,.23,.55-.06,.65-7.77,2.77-16.12,3.72-24.4,2.77h-.02Z"}),l.createElement("path",{className:"e slice1 mainlogo-ring",d:"M54.38,89.79c-.28-.16-.22-.58,.1-.66l20.33-5.17h0l27.83-7.09c.3-.08,.55,.23,.42,.5-3.54,7.45-8.78,14.04-15.32,19.22-3.26,2.58-6.81,4.78-10.58,6.55-.11,.05-.24,.04-.34-.02l-22.45-13.35Z"}),l.createElement("path",{className:"e slice7 mainlogo-ring",d:"M76.89,5.65c-.08-.3,.23-.55,.5-.42,7.45,3.54,14.02,8.77,19.18,15.29,2.59,3.27,4.79,6.82,6.56,10.57,.05,.11,.05,.24-.02,.34l-13.33,22.46c-.16,.28-.58,.22-.66-.1L76.89,5.65Z"}),l.createElement("path",{className:"e slice0 mainlogo-ring",d:"M89.67,60.87l1.05-1.77,13.78-23.21c.16-.26,.55-.23,.65,.06,2.78,7.78,3.74,16.15,2.77,24.44-.48,4.16-1.44,8.23-2.84,12.13-.04,.11-.14,.2-.25,.23l-25.32,6.44c-.31,.08-.56-.26-.4-.53l10.56-17.79Z"}),l.createElement("path",{className:"e slice6 mainlogo-ring",d:"M60.93,18.64l-1.8-1.08L35.92,3.78c-.26-.16-.23-.55,.06-.65C43.75,.36,52.11-.6,60.39,.36c4.16,.48,8.24,1.44,12.15,2.85,.11,.04,.2,.14,.23,.25l6.43,25.31c.08,.31-.26,.56-.53,.4l-17.74-10.54Z"})),l.createElement("g",null,l.createElement("path",{className:"e mainlogo-text",d:"M114.45,82.51h1.45v12.31h7.43l-.23,1.28h-8.65v-13.59Z"}),l.createElement("path",{className:"e mainlogo-text",d:"M139.5,91.71l-1.66,4.39h-1.47l5.12-13.59h1.75l5.34,13.59h-1.57l-1.71-4.39h-5.81Zm5.37-1.28c-1.48-3.83-2.24-5.73-2.53-6.69h-.02c-.32,1.04-1.18,3.4-2.38,6.69h4.93Z"}),l.createElement("path",{className:"e mainlogo-text",d:"M162.5,82.51h5.24c2.75,0,4.16,1.4,4.16,3.37,0,1.62-.99,2.63-2.07,2.95,1.01,.29,2.56,1.22,2.56,3.31,0,2.67-2.06,3.95-4.53,3.95h-5.36v-13.59Zm4.88,5.73c2.14,0,3.02-.81,3.02-2.25,0-1.36-.99-2.23-2.73-2.23h-3.74v4.49h3.45Zm-3.45,6.61h3.77c1.73,0,3.18-.78,3.18-2.68,0-1.64-1.11-2.69-3.59-2.69h-3.36v5.36Z"}),l.createElement("path",{className:"e mainlogo-text",d:"M198.91,89.23c0,3.75-2.16,7.09-6.44,7.09-3.99,0-6.33-3.1-6.33-7.02s2.34-7,6.46-7c3.87,0,6.31,2.97,6.31,6.93Zm-11.24,0c0,3.03,1.68,5.8,4.86,5.8,3.36,0,4.84-2.71,4.84-5.79s-1.62-5.68-4.85-5.68-4.85,2.68-4.85,5.67Z"}),l.createElement("path",{className:"e mainlogo-text",d:"M214.97,89.96v6.14h-1.45v-13.59h5.33c2.73,0,4.27,1.42,4.27,3.61,0,1.72-.97,2.84-2.45,3.2,1.2,.3,2.19,1.14,2.19,3.48v.56c0,.97-.05,2.19,.17,2.74h-1.45c-.24-.59-.2-1.66-.2-2.85v-.35c0-2.1-.65-2.94-3.17-2.94h-3.25Zm0-1.26h3.35c2.24,0,3.27-.83,3.27-2.5,0-1.56-1.04-2.43-3.06-2.43h-3.57v4.93Z"}),l.createElement("path",{className:"e mainlogo-text",d:"M239.81,91.71l-1.66,4.39h-1.47l5.12-13.59h1.75l5.34,13.59h-1.57l-1.71-4.39h-5.81Zm5.37-1.28c-1.48-3.83-2.24-5.73-2.53-6.69h-.02c-.32,1.04-1.18,3.4-2.38,6.69h4.93Z"}),l.createElement("path",{className:"e mainlogo-text",d:"M264.01,83.79h-4.64v-1.28h10.76v1.28h-4.65v12.31h-1.47v-12.31Z"}),l.createElement("path",{className:"e mainlogo-text",d:"M295.35,89.23c0,3.75-2.16,7.09-6.44,7.09-3.99,0-6.33-3.1-6.33-7.02s2.34-7,6.46-7c3.87,0,6.31,2.97,6.31,6.93Zm-11.24,0c0,3.03,1.68,5.8,4.86,5.8,3.36,0,4.84-2.71,4.84-5.79s-1.63-5.68-4.85-5.68-4.85,2.68-4.85,5.67Z"}),l.createElement("path",{className:"e mainlogo-text",d:"M311.41,89.96v6.14h-1.45v-13.59h5.33c2.73,0,4.27,1.42,4.27,3.61,0,1.72-.97,2.84-2.45,3.2,1.2,.3,2.19,1.14,2.19,3.48v.56c0,.97-.05,2.19,.17,2.74h-1.45c-.24-.59-.2-1.66-.2-2.85v-.35c0-2.1-.65-2.94-3.17-2.94h-3.25Zm0-1.26h3.35c2.24,0,3.27-.83,3.27-2.5,0-1.56-1.04-2.43-3.06-2.43h-3.57v4.93Z"}),l.createElement("path",{className:"e mainlogo-text",d:"M335.89,82.51v13.59h-1.45v-13.59h1.45Z"}),l.createElement("path",{className:"e mainlogo-text",d:"M360.01,89.59h-7.14v5.23h7.84l-.2,1.28h-9.08v-13.59h8.93v1.28h-7.5v4.53h7.14v1.28Z"}),l.createElement("path",{className:"e mainlogo-text",d:"M375.55,92.34c.42,1.71,1.59,2.74,3.83,2.74,2.41,0,3.35-1.12,3.35-2.5,0-1.45-.7-2.31-3.72-3-3.22-.73-4.36-1.79-4.36-3.71s1.55-3.58,4.51-3.58c3.37,0,4.6,1.94,4.77,3.57h-1.49c-.28-1.26-1.09-2.34-3.34-2.34-1.86,0-2.93,.81-2.93,2.23,0,1.35,.77,1.94,3.38,2.52,4.05,.92,4.71,2.44,4.71,4.16,0,2.1-1.57,3.85-4.95,3.85s-4.93-1.88-5.24-3.94h1.49Z"})),l.createElement("g",null,l.createElement("path",{className:"e mainlogo-text",d:"M96.78,67.46l-5.03,8.9h-8.25l21.08-37.17h9.89l6,37.17h-7.9l-1.41-8.9h-14.38Zm13.7-6.38c-1.13-7.91-1.84-13.06-2.05-16.13h-.05c-1.56,3.34-4.54,9.01-8.4,16.13h10.5Z"}),l.createElement("path",{className:"e mainlogo-text",d:"M135.47,39.19h14.66c7.64,0,12.5,4.18,12.5,10.78,0,8.64-6.45,12.81-15.85,12.81h-8.72l-2.79,13.59h-7.67l7.88-37.17Zm3.92,17.39h7.09c5.13,0,8.16-1.78,8.15-6.18,0-3.26-1.99-5.02-6.3-5.02h-6.55l-2.39,11.2Z"}),l.createElement("path",{className:"e mainlogo-text",d:"M195.58,60.19h-18.24l-2.05,9.8h20.84l-2.25,6.38h-27.55l7.88-37.17h26.78l-1.38,6.38h-19.15l-1.72,8.24h18.24l-1.4,6.38Z"}),l.createElement("path",{className:"e mainlogo-text",d:"M213.96,61.44l-3.15,14.92h-7.67l7.88-37.17h15.68c7.08,0,11.69,3.61,11.69,9.75,0,5.32-3.28,8.46-7.67,9.77,1.38,.63,4.38,2.55,3.07,8.88-.92,4.19-1.38,7.06-1.12,8.77h-7.54c-.23-1.63-.04-4.1,.97-8.67,.89-4.2,.12-6.25-4.09-6.25h-8.04Zm1.29-6.18h7.51c4.15,0,7.56-1.34,7.56-5.49,0-2.82-1.75-4.4-5.5-4.4h-7.49l-2.08,9.89Z"}),l.createElement("path",{className:"e mainlogo-text",d:"M256.29,45.57h-11.72l1.38-6.38h31.17l-1.38,6.38h-11.71l-6.47,30.8h-7.76l6.5-30.8Z"}),l.createElement("path",{className:"e mainlogo-text",d:"M292.86,39.19l-4.74,22.19c-1.51,7.02,1.69,9.47,6.49,9.47,5.27,0,7.64-2.08,9.16-9.15l4.77-22.52h7.77l-4.93,23.08c-2.28,10.49-6.81,14.74-17.64,14.74-8.65,0-15.9-3.79-13.29-16.06l4.66-21.76h7.76Z"}),l.createElement("path",{className:"e mainlogo-text",d:"M330.58,61.44l-3.15,14.92h-7.67l7.88-37.17h15.68c7.08,0,11.69,3.61,11.69,9.75,0,5.32-3.28,8.46-7.67,9.77,1.38,.63,4.38,2.55,3.07,8.88-.92,4.19-1.38,7.06-1.12,8.77h-7.54c-.23-1.63-.04-4.1,.97-8.67,.89-4.2,.12-6.25-4.09-6.25h-8.04Zm1.29-6.18h7.51c4.15,0,7.56-1.34,7.56-5.49,0-2.82-1.75-4.4-5.5-4.4h-7.49l-2.08,9.89Z"}),l.createElement("path",{className:"e mainlogo-text",d:"M388.65,60.19h-18.24l-2.05,9.8h20.84l-2.25,6.38h-27.55l7.88-37.17h26.78l-1.38,6.38h-19.15l-1.72,8.24h18.24l-1.4,6.38Z"}))))))))}},4950:function(e,t,n){n.r(t);var l=n(7294),a=n(8662),c=n(3139);t.default=function(){return l.createElement(l.Fragment,null,l.createElement(a.default,null),l.createElement(c.default,null),l.createElement("div",{style:{height:"10000px"}}))}}}]);
//# sourceMappingURL=component---src-pages-artworks-logo-design-aperture-laboratries-index-js-9a0fc33be5654b7c5ce4.js.map
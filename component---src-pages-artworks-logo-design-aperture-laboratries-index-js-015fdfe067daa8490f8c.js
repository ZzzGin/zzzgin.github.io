"use strict";(self.webpackChunkzzzgin_github_io=self.webpackChunkzzzgin_github_io||[]).push([[517,21],{1553:function(e){function t(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],a=!0,r=!1,l=void 0;try{for(var i,o=e[Symbol.iterator]();!(a=(i=o.next()).done)&&(n.push(i.value),!t||n.length!==t);a=!0);}catch(e){r=!0,l=e}finally{try{a||null==o.return||o.return()}finally{if(r)throw l}}return n}}(e,t)||function(e,t){if(e){if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}!function(){function r(e){return["elInY+elHeight","elCenterY-".concat(e=0<arguments.length&&void 0!==e?e:30),"elCenterY","elCenterY+".concat(e),"elOutY-elHeight"]}var l,i,o,c,s,u,h={fadeInOut:function(e,t){return t=1<arguments.length&&void 0!==t?t:0,{opacity:[r(0<arguments.length&&void 0!==e?e:30),[t,1,1,1,t]]}},fadeIn:function(e,t){return{opacity:[["elInY+elHeight",0<arguments.length&&void 0!==e?e:"elCenterY"],[1<arguments.length&&void 0!==t?t:0,1]]}},fadeOut:function(e,t){return{opacity:[[0<arguments.length&&void 0!==e?e:"elCenterY","elOutY-elHeight"],[1,1<arguments.length&&void 0!==t?t:0]]}},blurInOut:function(e,t){return t=1<arguments.length&&void 0!==t?t:20,{blur:[r(0<arguments.length&&void 0!==e?e:100),[t,0,0,0,t]]}},blurIn:function(e,t){return{blur:[["elInY+elHeight",0<arguments.length&&void 0!==e?e:"elCenterY"],[1<arguments.length&&void 0!==t?t:20,0]]}},blurOut:function(e,t){return{opacity:[[0<arguments.length&&void 0!==e?e:"elCenterY","elOutY-elHeight"],[0,1<arguments.length&&void 0!==t?t:20]]}},scaleInOut:function(e,t){return t=1<arguments.length&&void 0!==t?t:.6,{scale:[r(0<arguments.length&&void 0!==e?e:100),[t,1,1,1,t]]}},scaleIn:function(e,t){return{scale:[["elInY+elHeight",0<arguments.length&&void 0!==e?e:"elCenterY"],[1<arguments.length&&void 0!==t?t:.6,1]]}},scaleOut:function(e,t){return{scale:[[0<arguments.length&&void 0!==e?e:"elCenterY","elOutY-elHeight"],[1,1<arguments.length&&void 0!==t?t:.6]]}},slideX:function(e,t){return{translateX:[["elInY",0<arguments.length&&void 0!==e?e:0],[0,1<arguments.length&&void 0!==t?t:500]]}},slideY:function(e,t){return{translateY:[["elInY",0<arguments.length&&void 0!==e?e:0],[0,1<arguments.length&&void 0!==t?t:500]]}},spin:function(e,t){return{rotate:[[0,e=0<arguments.length&&void 0!==e?e:1e3],[0,1<arguments.length&&void 0!==t?t:360],{modValue:e}]}},flipX:function(e,t){return{rotateX:[[0,e=0<arguments.length&&void 0!==e?e:1e3],[0,1<arguments.length&&void 0!==t?t:360],{modValue:e}]}},flipY:function(e,t){return{rotateY:[[0,e=0<arguments.length&&void 0!==e?e:1e3],[0,1<arguments.length&&void 0!==t?t:360],{modValue:e}]}},jiggle:function(e,t){return{skewX:[[0,+(e=0<arguments.length&&void 0!==e?e:50),2*e,3*e,4*e],[0,t=1<arguments.length&&void 0!==t?t:40,0,-t,0],{modValue:4*e}]}},seesaw:function(e,t){return{skewY:[[0,+(e=0<arguments.length&&void 0!==e?e:50),2*e,3*e,4*e],[0,t=1<arguments.length&&void 0!==t?t:40,0,-t,0],{modValue:4*e}]}},zigzag:function(e,t){return{translateX:[[0,+(e=0<arguments.length&&void 0!==e?e:100),2*e,3*e,4*e],[0,t=1<arguments.length&&void 0!==t?t:100,0,-t,0],{modValue:4*e}]}},hueRotate:function(e,t){return{"hue-rotate":[[0,e=0<arguments.length&&void 0!==e?e:600],[0,1<arguments.length&&void 0!==t?t:360],{modValue:e}]}}},d=(l=["perspective","scaleX","scaleY","scale","skewX","skewY","skew","rotateX","rotateY","rotate"],i=["blur","hue-rotate","brightness"],o=["translateX","translateY","translateZ"],c=["perspective","border-radius","blur","translateX","translateY","translateZ"],s=["hue-rotate","rotate","rotateX","rotateY","skew","skewX","skewY"],u={easeInQuad:function(e){return e*e},easeOutQuad:function(e){return e*(2-e)},easeInOutQuad:function(e){return e<.5?2*e*e:(4-2*e)*e-1},easeInCubic:function(e){return e*e*e},easeOutCubic:function(e){return--e*e*e+1},easeInOutCubic:function(e){return e<.5?4*e*e*e:(e-1)*(2*e-2)*(2*e-2)+1},easeInQuart:function(e){return e*e*e*e},easeOutQuart:function(e){return 1- --e*e*e*e},easeInOutQuart:function(e){return e<.5?8*e*e*e*e:1-8*--e*e*e*e},easeInQuint:function(e){return e*e*e*e*e},easeOutQuint:function(e){return 1+--e*e*e*e*e},easeInOutQuint:function(e){return e<.5?16*e*e*e*e*e:1+16*--e*e*e*e*e},easeOutBounce:function(e){var t=7.5625,n=2.75;return e<1/n?t*e*e:e<2/n?t*(e-=1.5/n)*e+.75:e<2.5/n?t*(e-=2.25/n)*e+.9375:t*(e-=2.625/n)*e+.984375},easeInBounce:function(e){return 1-u.easeOutBounce(1-e)},easeOutBack:function(e){return 1+2.70158*Math.pow(e-1,3)+1.70158*Math.pow(e-1,2)},easeInBack:function(e){return 2.70158*e*e*e-1.70158*e*e}},new function e(){var a=this;t(this,e),n(this,"drivers",[]),n(this,"elements",[]),n(this,"frame",0),n(this,"debug",!1),n(this,"windowWidth",0),n(this,"windowHeight",0),n(this,"presets",h),n(this,"debugData",{frameLengths:[]}),n(this,"init",(function(){a.findAndAddElements(),window.requestAnimationFrame(a.onAnimationFrame),a.windowWidth=document.body.clientWidth,a.windowHeight=document.body.clientHeight,window.onresize=a.onWindowResize})),n(this,"onWindowResize",(function(){document.body.clientWidth===a.windowWidth&&document.body.clientHeight===a.windowHeight||(a.windowWidth=document.body.clientWidth,a.windowHeight=document.body.clientHeight,a.elements.forEach((function(e){return e.calculateTransforms()})))})),n(this,"onAnimationFrame",(function(e){a.debug&&(a.debugData.frameStart=Date.now());var t,n={};a.drivers.forEach((function(e){n[e.name]=e.getValue(a.frame)})),a.elements.forEach((function(e){e.update(n,a.frame)})),a.debug&&a.debugData.frameLengths.push(Date.now()-a.debugData.frameStart),a.frame%60==0&&a.debug&&(t=Math.ceil(a.debugData.frameLengths.reduce((function(e,t){return e+t}),0)/60),console.log("Average frame calculation time: ".concat(t,"ms")),a.debugData.frameLengths=[]),a.frame++,window.requestAnimationFrame(a.onAnimationFrame)})),n(this,"addDriver",(function(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{};a.drivers.push(new g(e,t,n))})),n(this,"removeDriver",(function(e){a.drivers=a.drivers.filter((function(t){return t.name!==e}))})),n(this,"findAndAddElements",(function(){a.elements=[],document.querySelectorAll(".lax").forEach((function(e){var t=[];e.classList.forEach((function(e){e.includes("lax_preset")&&(e=e.replace("lax_preset_",""),t.push(e))}));var r=n({},"scrollY",{presets:t});a.elements.push(new v(".lax",a,e,r,0,{}))}))})),n(this,"addElements",(function(e,t,n){document.querySelectorAll(e).forEach((function(r,l){a.elements.push(new v(e,a,r,t,l,n))}))})),n(this,"removeElements",(function(e){a.elements=a.elements.filter((function(t){return t.selector!==e}))})),n(this,"addElement",(function(e,t,n){a.elements.push(new v("",a,e,t,0,n))})),n(this,"removeElement",(function(e){a.elements=a.elements.filter((function(t){return t.domElement!==e}))}))});function m(e,t){if(Array.isArray(e))return e;for(var n=Object.keys(e).map((function(e){return parseInt(e)})).sort((function(e,t){return t<e?1:-1})),a=n[n.length-1],r=0;r<n.length;r++){var l=n[r];if(t<l){a=l;break}}return e[a]}function f(e,t,n){var r=t.width,l=t.height,i=t.x,o=t.y;if("number"==typeof e)return e;var c,s=document.body.scrollHeight,u=document.body.scrollWidth,h=window.innerWidth,d=window.innerHeight,m=(t=(m=a((c=void 0!==window.pageXOffset,m="CSS1Compat"===(document.compatMode||""),t=c?window.pageXOffset:(m?document.documentElement:document.body).scrollLeft,[c?window.pageYOffset:(m?document.documentElement:document.body).scrollTop,t]),2))[0],(i=i+m[1])+r);t=(o=o+t)+l;return Function("return ".concat(e.replace(/screenWidth/g,h).replace(/screenHeight/g,d).replace(/pageHeight/g,s).replace(/pageWidth/g,u).replace(/elWidth/g,r).replace(/elHeight/g,l).replace(/elInY/g,o-d).replace(/elOutY/g,t).replace(/elCenterY/g,o+l/2-d/2).replace(/elInX/g,i-h).replace(/elOutX/g,m).replace(/elCenterX/g,i+r/2-h/2).replace(/index/g,n)))()}function g(e,a){var r=this,l=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{};t(this,g),n(this,"getValueFn",void 0),n(this,"name",""),n(this,"lastValue",0),n(this,"frameStep",1),n(this,"m1",0),n(this,"m2",0),n(this,"inertia",0),n(this,"inertiaEnabled",!1),n(this,"getValue",(function(e){var t=r.lastValue;return e%r.frameStep==0&&(t=r.getValueFn(e)),r.inertiaEnabled&&(e=t-r.lastValue,r.m1=.8*r.m1+e*(1-.8),r.m2=.8*r.m2+r.m1*(1-.8),r.inertia=Math.round(5e3*r.m2)/15e3),r.lastValue=t,[r.lastValue,r.inertia]})),this.name=e,this.getValueFn=a,Object.keys(l).forEach((function(e){r[e]=l[e]})),this.lastValue=this.getValueFn(0)}function v(e,r,h,d){var g=this,p=4<arguments.length&&void 0!==arguments[4]?arguments[4]:0,w=5<arguments.length&&void 0!==arguments[5]?arguments[5]:{};t(this,v),n(this,"domElement",void 0),n(this,"transformsData",void 0),n(this,"styles",{}),n(this,"selector",""),n(this,"groupIndex",0),n(this,"laxInstance",void 0),n(this,"onUpdate",void 0),n(this,"update",(function(e,t){var n,r=g.transforms,l={};for(n in r){var i=r[n];e[n]||console.error("No lax driver with name: ",n);var o,h=a(e[n],2),d=h[0],m=h[1];for(o in i){var f,v=(y=a(i[o],3))[0],p=y[1],w=(Y=void 0===(x=y[2])?{}:x).modValue,E=void 0===(Z=Y.frameStep)?1:Z,b=Y.easing,y=Y.inertia,x=Y.inertiaMode,Z=Y.cssFn,Y=void 0===(Y=Y.cssUnit)?"":Y;b=u[b];t%E==0&&(b=function(e,t,n,a){var r=0;if(e.forEach((function(e){e<n&&r++})),r<=0)return t[0];if(r>=e.length)return t[e.length-1];var l,i=(i=e[l=r-1],e=e[r],(n-i)/(e-i));return a&&(i=a(i)),(l=t[l])*(1-(i=i))+(t=t[r])*i}(v,p,w?d%w:d,b),y&&(f=m*y,"absolute"===x&&(f=Math.abs(f)),b+=f),f="px"==(Y||c.includes(o)?"px":s.includes(o)?"deg":"")?0:3,f=b.toFixed(f),l[o]=Z?Z(f,g.domElement):f+Y)}}g.applyStyles(l),g.onUpdate&&g.onUpdate(e,g.domElement)})),n(this,"calculateTransforms",(function(){g.transforms={};var e,t=g.laxInstance.windowWidth;for(e in g.transformsData)!function(e){var n=g.transformsData[e],r={},l=n.presets;for(var i in(void 0===l?[]:l).forEach((function(e){var t,r,l=(r=a(e.split(":"),3))[0],i=r[1];e=r[2];(r=window.lax.presets[l])?(t=r(i,e),Object.keys(t).forEach((function(e){n[e]=t[e]}))):console.error("Lax preset cannot be found with name: ",l)})),delete n.presets,n)!function(e){var l=void 0===(i=(o=a(n[e],3))[0])?[-1e9,1e9]:i,i=void 0===(i=o[1])?[-1e9,1e9]:i,o=void 0===(o=o[2])?{}:o,c=g.domElement.getBoundingClientRect();l=m(l,t).map((function(e){return f(e,c,g.groupIndex)})),i=m(i,t).map((function(e){return f(e,c,g.groupIndex)}));r[e]=[l,i,o]}(i);g.transforms[e]=r}(e)})),n(this,"applyStyles",(function(e){var t,n,a,r=(t=e,n={transform:"",filter:""},a={translateX:1e-5,translateY:1e-5,translateZ:1e-5},Object.keys(t).forEach((function(e){var r=t[e],u=c.includes(e)?"px":s.includes(e)?"deg":"";o.includes(e)?a[e]=r:l.includes(e)?n.transform+="".concat(e,"(").concat(r).concat(u,") "):i.includes(e)?n.filter+="".concat(e,"(").concat(r).concat(u,") "):n[e]="".concat(r).concat(u," ")})),n.transform="translate3d(".concat(a.translateX,"px, ").concat(a.translateY,"px, ").concat(a.translateZ,"px) ").concat(n.transform),n);Object.keys(r).forEach((function(e){g.domElement.style.setProperty(e,r[e])}))})),this.selector=e,this.laxInstance=r,this.domElement=h,this.transformsData=d,this.groupIndex=p;var E=void 0===(p=w.style)?{}:p;w=w.onUpdate;Object.keys(E).forEach((function(e){h.style.setProperty(e,E[e])})),w&&(this.onUpdate=w),this.calculateTransforms()}void 0!==e.exports?e.exports=d:window.lax=d}()},8662:function(e,t,n){n.r(t);var a=n(7294);t.default=function(){return a.createElement("div",{class:"mainlogo"},a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 398.77 108.29"},a.createElement("g",{id:"a"}),a.createElement("g",{id:"b"},a.createElement("g",{id:"c"},a.createElement("g",null,a.createElement("g",{class:"spin"},a.createElement("path",{class:"e slice5 mainlogo-ring",d:"M5.64,31.43c-.3,.08-.55-.23-.42-.5,3.53-7.46,8.77-14.05,15.31-19.23,3.29-2.6,6.85-4.8,10.6-6.57,.11-.05,.24-.04,.34,.02l22.48,13.35c.28,.16,.22,.58-.1,.66l-22.07,5.62L5.64,31.43Z"}),a.createElement("path",{class:"e slice4 mainlogo-ring",d:"M3.79,72.38c-.16,.26-.55,.23-.65-.06C.36,64.54-.6,56.17,.36,47.89c.48-4.15,1.44-8.22,2.84-12.11,.04-.11,.14-.2,.25-.23l25.34-6.45c.31-.08,.56,.26,.4,.53l-10.73,18.05-.9,1.5L3.79,72.38Z"}),a.createElement("path",{class:"e slice3 mainlogo-ring",d:"M31.45,102.66c.08,.3-.23,.55-.5,.42-7.48-3.54-14.08-8.79-19.25-15.33-2.59-3.26-4.79-6.81-6.55-10.57-.05-.11-.04-.24,.02-.34l13.36-22.48c.16-.28,.58-.22,.66,.1l12.28,48.21Z"}),a.createElement("path",{class:"e slice2 mainlogo-ring",d:"M47.89,107.92c-4.14-.48-8.21-1.43-12.1-2.83-.11-.04-.2-.14-.23-.25l-6.45-25.34c-.08-.31,.26-.56,.53-.4l18.07,10.74,1.49,.89,23.18,13.78c.26,.16,.23,.55-.06,.65-7.77,2.77-16.12,3.72-24.4,2.77h-.02Z"}),a.createElement("path",{class:"e slice1 mainlogo-ring",d:"M54.38,89.79c-.28-.16-.22-.58,.1-.66l20.33-5.17h0l27.83-7.09c.3-.08,.55,.23,.42,.5-3.54,7.45-8.78,14.04-15.32,19.22-3.26,2.58-6.81,4.78-10.58,6.55-.11,.05-.24,.04-.34-.02l-22.45-13.35Z"}),a.createElement("path",{class:"e slice7 mainlogo-ring",d:"M76.89,5.65c-.08-.3,.23-.55,.5-.42,7.45,3.54,14.02,8.77,19.18,15.29,2.59,3.27,4.79,6.82,6.56,10.57,.05,.11,.05,.24-.02,.34l-13.33,22.46c-.16,.28-.58,.22-.66-.1L76.89,5.65Z"}),a.createElement("path",{class:"e slice0 mainlogo-ring",d:"M89.67,60.87l1.05-1.77,13.78-23.21c.16-.26,.55-.23,.65,.06,2.78,7.78,3.74,16.15,2.77,24.44-.48,4.16-1.44,8.23-2.84,12.13-.04,.11-.14,.2-.25,.23l-25.32,6.44c-.31,.08-.56-.26-.4-.53l10.56-17.79Z"}),a.createElement("path",{class:"e slice6 mainlogo-ring",d:"M60.93,18.64l-1.8-1.08L35.92,3.78c-.26-.16-.23-.55,.06-.65C43.75,.36,52.11-.6,60.39,.36c4.16,.48,8.24,1.44,12.15,2.85,.11,.04,.2,.14,.23,.25l6.43,25.31c.08,.31-.26,.56-.53,.4l-17.74-10.54Z"})),a.createElement("g",null,a.createElement("path",{class:"e mainlogo-text",d:"M114.45,82.51h1.45v12.31h7.43l-.23,1.28h-8.65v-13.59Z"}),a.createElement("path",{class:"e mainlogo-text",d:"M139.5,91.71l-1.66,4.39h-1.47l5.12-13.59h1.75l5.34,13.59h-1.57l-1.71-4.39h-5.81Zm5.37-1.28c-1.48-3.83-2.24-5.73-2.53-6.69h-.02c-.32,1.04-1.18,3.4-2.38,6.69h4.93Z"}),a.createElement("path",{class:"e mainlogo-text",d:"M162.5,82.51h5.24c2.75,0,4.16,1.4,4.16,3.37,0,1.62-.99,2.63-2.07,2.95,1.01,.29,2.56,1.22,2.56,3.31,0,2.67-2.06,3.95-4.53,3.95h-5.36v-13.59Zm4.88,5.73c2.14,0,3.02-.81,3.02-2.25,0-1.36-.99-2.23-2.73-2.23h-3.74v4.49h3.45Zm-3.45,6.61h3.77c1.73,0,3.18-.78,3.18-2.68,0-1.64-1.11-2.69-3.59-2.69h-3.36v5.36Z"}),a.createElement("path",{class:"e mainlogo-text",d:"M198.91,89.23c0,3.75-2.16,7.09-6.44,7.09-3.99,0-6.33-3.1-6.33-7.02s2.34-7,6.46-7c3.87,0,6.31,2.97,6.31,6.93Zm-11.24,0c0,3.03,1.68,5.8,4.86,5.8,3.36,0,4.84-2.71,4.84-5.79s-1.62-5.68-4.85-5.68-4.85,2.68-4.85,5.67Z"}),a.createElement("path",{class:"e mainlogo-text",d:"M214.97,89.96v6.14h-1.45v-13.59h5.33c2.73,0,4.27,1.42,4.27,3.61,0,1.72-.97,2.84-2.45,3.2,1.2,.3,2.19,1.14,2.19,3.48v.56c0,.97-.05,2.19,.17,2.74h-1.45c-.24-.59-.2-1.66-.2-2.85v-.35c0-2.1-.65-2.94-3.17-2.94h-3.25Zm0-1.26h3.35c2.24,0,3.27-.83,3.27-2.5,0-1.56-1.04-2.43-3.06-2.43h-3.57v4.93Z"}),a.createElement("path",{class:"e mainlogo-text",d:"M239.81,91.71l-1.66,4.39h-1.47l5.12-13.59h1.75l5.34,13.59h-1.57l-1.71-4.39h-5.81Zm5.37-1.28c-1.48-3.83-2.24-5.73-2.53-6.69h-.02c-.32,1.04-1.18,3.4-2.38,6.69h4.93Z"}),a.createElement("path",{class:"e mainlogo-text",d:"M264.01,83.79h-4.64v-1.28h10.76v1.28h-4.65v12.31h-1.47v-12.31Z"}),a.createElement("path",{class:"e mainlogo-text",d:"M295.35,89.23c0,3.75-2.16,7.09-6.44,7.09-3.99,0-6.33-3.1-6.33-7.02s2.34-7,6.46-7c3.87,0,6.31,2.97,6.31,6.93Zm-11.24,0c0,3.03,1.68,5.8,4.86,5.8,3.36,0,4.84-2.71,4.84-5.79s-1.63-5.68-4.85-5.68-4.85,2.68-4.85,5.67Z"}),a.createElement("path",{class:"e mainlogo-text",d:"M311.41,89.96v6.14h-1.45v-13.59h5.33c2.73,0,4.27,1.42,4.27,3.61,0,1.72-.97,2.84-2.45,3.2,1.2,.3,2.19,1.14,2.19,3.48v.56c0,.97-.05,2.19,.17,2.74h-1.45c-.24-.59-.2-1.66-.2-2.85v-.35c0-2.1-.65-2.94-3.17-2.94h-3.25Zm0-1.26h3.35c2.24,0,3.27-.83,3.27-2.5,0-1.56-1.04-2.43-3.06-2.43h-3.57v4.93Z"}),a.createElement("path",{class:"e mainlogo-text",d:"M335.89,82.51v13.59h-1.45v-13.59h1.45Z"}),a.createElement("path",{class:"e mainlogo-text",d:"M360.01,89.59h-7.14v5.23h7.84l-.2,1.28h-9.08v-13.59h8.93v1.28h-7.5v4.53h7.14v1.28Z"}),a.createElement("path",{class:"e mainlogo-text",d:"M375.55,92.34c.42,1.71,1.59,2.74,3.83,2.74,2.41,0,3.35-1.12,3.35-2.5,0-1.45-.7-2.31-3.72-3-3.22-.73-4.36-1.79-4.36-3.71s1.55-3.58,4.51-3.58c3.37,0,4.6,1.94,4.77,3.57h-1.49c-.28-1.26-1.09-2.34-3.34-2.34-1.86,0-2.93,.81-2.93,2.23,0,1.35,.77,1.94,3.38,2.52,4.05,.92,4.71,2.44,4.71,4.16,0,2.1-1.57,3.85-4.95,3.85s-4.93-1.88-5.24-3.94h1.49Z"})),a.createElement("g",null,a.createElement("path",{class:"e mainlogo-text",d:"M96.78,67.46l-5.03,8.9h-8.25l21.08-37.17h9.89l6,37.17h-7.9l-1.41-8.9h-14.38Zm13.7-6.38c-1.13-7.91-1.84-13.06-2.05-16.13h-.05c-1.56,3.34-4.54,9.01-8.4,16.13h10.5Z"}),a.createElement("path",{class:"e mainlogo-text",d:"M135.47,39.19h14.66c7.64,0,12.5,4.18,12.5,10.78,0,8.64-6.45,12.81-15.85,12.81h-8.72l-2.79,13.59h-7.67l7.88-37.17Zm3.92,17.39h7.09c5.13,0,8.16-1.78,8.15-6.18,0-3.26-1.99-5.02-6.3-5.02h-6.55l-2.39,11.2Z"}),a.createElement("path",{class:"e mainlogo-text",d:"M195.58,60.19h-18.24l-2.05,9.8h20.84l-2.25,6.38h-27.55l7.88-37.17h26.78l-1.38,6.38h-19.15l-1.72,8.24h18.24l-1.4,6.38Z"}),a.createElement("path",{class:"e mainlogo-text",d:"M213.96,61.44l-3.15,14.92h-7.67l7.88-37.17h15.68c7.08,0,11.69,3.61,11.69,9.75,0,5.32-3.28,8.46-7.67,9.77,1.38,.63,4.38,2.55,3.07,8.88-.92,4.19-1.38,7.06-1.12,8.77h-7.54c-.23-1.63-.04-4.1,.97-8.67,.89-4.2,.12-6.25-4.09-6.25h-8.04Zm1.29-6.18h7.51c4.15,0,7.56-1.34,7.56-5.49,0-2.82-1.75-4.4-5.5-4.4h-7.49l-2.08,9.89Z"}),a.createElement("path",{class:"e mainlogo-text",d:"M256.29,45.57h-11.72l1.38-6.38h31.17l-1.38,6.38h-11.71l-6.47,30.8h-7.76l6.5-30.8Z"}),a.createElement("path",{class:"e mainlogo-text",d:"M292.86,39.19l-4.74,22.19c-1.51,7.02,1.69,9.47,6.49,9.47,5.27,0,7.64-2.08,9.16-9.15l4.77-22.52h7.77l-4.93,23.08c-2.28,10.49-6.81,14.74-17.64,14.74-8.65,0-15.9-3.79-13.29-16.06l4.66-21.76h7.76Z"}),a.createElement("path",{class:"e mainlogo-text",d:"M330.58,61.44l-3.15,14.92h-7.67l7.88-37.17h15.68c7.08,0,11.69,3.61,11.69,9.75,0,5.32-3.28,8.46-7.67,9.77,1.38,.63,4.38,2.55,3.07,8.88-.92,4.19-1.38,7.06-1.12,8.77h-7.54c-.23-1.63-.04-4.1,.97-8.67,.89-4.2,.12-6.25-4.09-6.25h-8.04Zm1.29-6.18h7.51c4.15,0,7.56-1.34,7.56-5.49,0-2.82-1.75-4.4-5.5-4.4h-7.49l-2.08,9.89Z"}),a.createElement("path",{class:"e mainlogo-text",d:"M388.65,60.19h-18.24l-2.05,9.8h20.84l-2.25,6.38h-27.55l7.88-37.17h26.78l-1.38,6.38h-19.15l-1.72,8.24h18.24l-1.4,6.38Z"})))))))}},4950:function(e,t,n){n.r(t);var a=n(7294),r=n(1553),l=n.n(r),i=n(8662);t.default=function(){return(0,a.useEffect)((function(){window.scroll(0,0),l().init(),l().addDriver("scrollY",(function(){return document.documentElement.scrollTop})),l().addElements(".mainlogo",{scrollY:{translateY:[[-400,0,"screenHeight"],[300,0,"screenHeight"]],scale:[[0,"screenHeight/2","screenHeight"],[1,1,10]]}}),l().addElements(".mainlogo-text",{scrollY:{opacity:[[0,"screenHeight/2"],[1,0]]}})})),a.createElement(a.Fragment,null,a.createElement(i.default,null),a.createElement("div",{style:{height:"10000px"}}))}}}]);
//# sourceMappingURL=component---src-pages-artworks-logo-design-aperture-laboratries-index-js-015fdfe067daa8490f8c.js.map
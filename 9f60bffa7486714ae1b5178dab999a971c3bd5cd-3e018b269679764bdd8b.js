"use strict";(self.webpackChunkzzzgin_github_io=self.webpackChunkzzzgin_github_io||[]).push([[480],{6867:function(e,n,t){var r=t(7225),a=r.Nothing,i=r.isNothing,u="undefined"!=typeof window?window:a,o="undefined"!=typeof document?document:a;e.exports.u9=u,e.exports.tj=o},7225:function(e,n,t){t.r(n),t.d(n,{Nothing:function(){return a},deserialize:function(){return l},isNothing:function(){return u},isSomething:function(){return o},serialize:function(){return c},toBool:function(){return i}});var r,a=((r=function(){return a}).toString=r.toLocaleString=r[Symbol.toPrimitive]=function(){return""},r.valueOf=function(){return!1},new Proxy(Object.freeze(r),{get:function(e,n){return e.hasOwnProperty(n)?e[n]:a}})),i=function(e){return!(!e||!e.valueOf())},u=function(e){return e===a},o=function(e){return!(e===a||null==e)},c=function(e){return JSON.stringify(e,(function(e,n){return n===a?null:n}))},l=function(e){return JSON.parse(e,(function(e,n){return null===n?a:n}))}},4514:function(e,n,t){t.d(n,{Z:function(){return c}});var r=t(7294);var a="undefined"!=typeof window,i=function(e){(0,r.useEffect)(e,[])},u=function(e){var n=(0,r.useRef)(e);n.current=e,i((function(){return function(){return n.current()}}))},o=function(e){var n=(0,r.useRef)(0),t=(0,r.useState)(e),a=t[0],i=t[1],o=(0,r.useCallback)((function(e){cancelAnimationFrame(n.current),n.current=requestAnimationFrame((function(){i(e)}))}),[]);return u((function(){cancelAnimationFrame(n.current)})),[a,o]},c=function(){var e=o((function(){return{x:a?window.pageXOffset:0,y:a?window.pageYOffset:0}})),n=e[0],t=e[1];return(0,r.useEffect)((function(){var e=function(){t((function(e){var n=window.pageXOffset,t=window.pageYOffset;return e.x!==n||e.y!==t?{x:n,y:t}:e}))};return e(),function(e){for(var n=[],t=1;t<arguments.length;t++)n[t-1]=arguments[t];e&&e.addEventListener&&e.addEventListener.apply(e,n)}(window,"scroll",e,{capture:!1,passive:!0}),function(){!function(e){for(var n=[],t=1;t<arguments.length;t++)n[t-1]=arguments[t];e&&e.removeEventListener&&e.removeEventListener.apply(e,n)}(window,"scroll",e)}}),[]),n}},5996:function(e,n,t){t.d(n,{t:function(){return i}});var r=t(7294),a=t(6867),i=function(){var e=(0,r.useState)({width:void 0,height:void 0}),n=e[0],t=e[1];return(0,r.useEffect)((function(){function e(){t({width:a.u9.innerWidth,height:a.u9.innerHeight})}return a.u9.addEventListener("resize",e),e(),function(){return a.u9.removeEventListener("resize",e)}}),[]),n}},4148:function(e,n,t){t.d(n,{X9:function(){return a},Zp:function(){return i},bA:function(){return r}});var r=function(e,n,t,r){if(t<e[0])return n[0];if(t>e[e.length-1])return n[n.length-1];for(var a=0;a<n.length-1;a++)if(e[a]<=t&&t<e[a+1])return r([e[a],e[a+1]],[n[a],n[a+1]],t)},a=function(e,n,t){var r=(n[1]-n[0])/(e[1]-e[0]);return t<=e[0]?n[0]:t>e[1]?n[1]:n[0]+r*(t-e[0])},i=function(e,n,t){return t<=e[0]?n[0]:t>e[1]?n[1]:n[0]+(.5*Math.sin(((t-e[0])/(e[1]-e[0])*10-5)/Math.PI)+.5)*(n[1]-n[0])}},1370:function(e,n,t){t.r(n),t.d(n,{default:function(){return me}});var r=t(7294),a=t(4514),i=t(4148),u=t(5996),o=t(6867),c={update:null,begin:null,loopBegin:null,changeBegin:null,change:null,changeComplete:null,loopComplete:null,complete:null,loop:1,direction:"normal",autoplay:!0,timelineOffset:0},l={duration:1e3,delay:0,endDelay:0,easing:"easeOutElastic(1, .5)",round:0},s=["translateX","translateY","translateZ","rotate","rotateX","rotateY","rotateZ","scale","scaleX","scaleY","scaleZ","skew","skewX","skewY","perspective","matrix","matrix3d"],f={CSS:{},springs:{}};function d(e,n,t){return Math.min(Math.max(e,n),t)}function m(e,n){return e.indexOf(n)>-1}function p(e,n){return e.apply(null,n)}var h={arr:function(e){return Array.isArray(e)},obj:function(e){return m(Object.prototype.toString.call(e),"Object")},pth:function(e){return h.obj(e)&&e.hasOwnProperty("totalLength")},svg:function(e){return e instanceof SVGElement},inp:function(e){return e instanceof HTMLInputElement},dom:function(e){return e.nodeType||h.svg(e)},str:function(e){return"string"==typeof e},fnc:function(e){return"function"==typeof e},und:function(e){return void 0===e},nil:function(e){return h.und(e)||null===e},hex:function(e){return/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(e)},rgb:function(e){return/^rgb/.test(e)},hsl:function(e){return/^hsl/.test(e)},col:function(e){return h.hex(e)||h.rgb(e)||h.hsl(e)},key:function(e){return!c.hasOwnProperty(e)&&!l.hasOwnProperty(e)&&"targets"!==e&&"keyframes"!==e}};function g(e){var n=/\(([^)]+)\)/.exec(e);return n?n[1].split(",").map((function(e){return parseFloat(e)})):[]}function v(e,n){var t=g(e),r=d(h.und(t[0])?1:t[0],.1,100),a=d(h.und(t[1])?100:t[1],.1,100),i=d(h.und(t[2])?10:t[2],.1,100),u=d(h.und(t[3])?0:t[3],.1,100),o=Math.sqrt(a/r),c=i/(2*Math.sqrt(a*r)),l=c<1?o*Math.sqrt(1-c*c):0,s=c<1?(c*o-u)/l:-u+o;function m(e){var t=n?n*e/1e3:e;return t=c<1?Math.exp(-t*c*o)*(1*Math.cos(l*t)+s*Math.sin(l*t)):(1+s*t)*Math.exp(-t*o),0===e||1===e?e:1-t}return n?m:function(){var n=f.springs[e];if(n)return n;for(var t=1/6,r=0,a=0;;)if(1===m(r+=t)){if(++a>=16)break}else a=0;var i=r*t*1e3;return f.springs[e]=i,i}}function y(e){return void 0===e&&(e=10),function(n){return Math.ceil(d(n,1e-6,1)*e)*(1/e)}}var x,E,w=function(){var e=.1;function n(e,n){return 1-3*n+3*e}function t(e,n){return 3*n-6*e}function r(e){return 3*e}function a(e,a,i){return((n(a,i)*e+t(a,i))*e+r(a))*e}function i(e,a,i){return 3*n(a,i)*e*e+2*t(a,i)*e+r(a)}return function(n,t,r,u){if(0<=n&&n<=1&&0<=r&&r<=1){var o=new Float32Array(11);if(n!==t||r!==u)for(var c=0;c<11;++c)o[c]=a(c*e,n,r);return function(e){return n===t&&r===u||0===e||1===e?e:a(l(e),t,u)}}function l(t){for(var u=0,c=1;10!==c&&o[c]<=t;++c)u+=e;--c;var l=u+(t-o[c])/(o[c+1]-o[c])*e,s=i(l,n,r);return s>=.001?function(e,n,t,r){for(var u=0;u<4;++u){var o=i(n,t,r);if(0===o)return n;n-=(a(n,t,r)-e)/o}return n}(t,l,n,r):0===s?l:function(e,n,t,r,i){var u,o,c=0;do{(u=a(o=n+(t-n)/2,r,i)-e)>0?t=o:n=o}while(Math.abs(u)>1e-7&&++c<10);return o}(t,u,u+e,n,r)}}}(),N=(x={linear:function(){return function(e){return e}}},E={Sine:function(){return function(e){return 1-Math.cos(e*Math.PI/2)}},Circ:function(){return function(e){return 1-Math.sqrt(1-e*e)}},Back:function(){return function(e){return e*e*(3*e-2)}},Bounce:function(){return function(e){for(var n,t=4;e<((n=Math.pow(2,--t))-1)/11;);return 1/Math.pow(4,3-t)-7.5625*Math.pow((3*n-2)/22-e,2)}},Elastic:function(e,n){void 0===e&&(e=1),void 0===n&&(n=.5);var t=d(e,1,10),r=d(n,.1,2);return function(e){return 0===e||1===e?e:-t*Math.pow(2,10*(e-1))*Math.sin((e-1-r/(2*Math.PI)*Math.asin(1/t))*(2*Math.PI)/r)}}},["Quad","Cubic","Quart","Quint","Expo"].forEach((function(e,n){E[e]=function(){return function(e){return Math.pow(e,n+2)}}})),Object.keys(E).forEach((function(e){var n=E[e];x["easeIn"+e]=n,x["easeOut"+e]=function(e,t){return function(r){return 1-n(e,t)(1-r)}},x["easeInOut"+e]=function(e,t){return function(r){return r<.5?n(e,t)(2*r)/2:1-n(e,t)(-2*r+2)/2}},x["easeOutIn"+e]=function(e,t){return function(r){return r<.5?(1-n(e,t)(1-2*r))/2:(n(e,t)(2*r-1)+1)/2}}})),x);function b(e,n){if(h.fnc(e))return e;var t=e.split("(")[0],r=N[t],a=g(e);switch(t){case"spring":return v(e,n);case"cubicBezier":return p(w,a);case"steps":return p(y,a);default:return p(r,a)}}function M(e){try{return document.querySelectorAll(e)}catch(n){return}}function k(e,n){for(var t=e.length,r=arguments.length>=2?arguments[1]:void 0,a=[],i=0;i<t;i++)if(i in e){var u=e[i];n.call(r,u,i,e)&&a.push(u)}return a}function O(e){return e.reduce((function(e,n){return e.concat(h.arr(n)?O(n):n)}),[])}function P(e){return h.arr(e)?e:(h.str(e)&&(e=M(e)||e),e instanceof NodeList||e instanceof HTMLCollection?[].slice.call(e):[e])}function C(e,n){return e.some((function(e){return e===n}))}function I(e){var n={};for(var t in e)n[t]=e[t];return n}function D(e,n){var t=I(e);for(var r in e)t[r]=n.hasOwnProperty(r)?n[r]:e[r];return t}function S(e,n){var t=I(e);for(var r in n)t[r]=h.und(e[r])?n[r]:e[r];return t}function B(e){return h.rgb(e)?(t=/rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(n=e))?"rgba("+t[1]+",1)":n:h.hex(e)?function(e){var n=e.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,(function(e,n,t,r){return n+n+t+t+r+r})),t=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(n);return"rgba("+parseInt(t[1],16)+","+parseInt(t[2],16)+","+parseInt(t[3],16)+",1)"}(e):h.hsl(e)?function(e){var n,t,r,a=/hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(e)||/hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(e),i=parseInt(a[1],10)/360,u=parseInt(a[2],10)/100,o=parseInt(a[3],10)/100,c=a[4]||1;function l(e,n,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?e+6*(n-e)*t:t<.5?n:t<2/3?e+(n-e)*(2/3-t)*6:e}if(0==u)n=t=r=o;else{var s=o<.5?o*(1+u):o+u-o*u,f=2*o-s;n=l(f,s,i+1/3),t=l(f,s,i),r=l(f,s,i-1/3)}return"rgba("+255*n+","+255*t+","+255*r+","+c+")"}(e):void 0;var n,t}function L(e){var n=/[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(e);if(n)return n[1]}function A(e,n){return h.fnc(e)?e(n.target,n.id,n.total):e}function F(e,n){return e.getAttribute(n)}function T(e,n,t){if(C([t,"deg","rad","turn"],L(n)))return n;var r=f.CSS[n+t];if(!h.und(r))return r;var a=document.createElement(e.tagName),i=e.parentNode&&e.parentNode!==document?e.parentNode:document.body;i.appendChild(a),a.style.position="absolute",a.style.width=100+t;var u=100/a.offsetWidth;i.removeChild(a);var o=u*parseFloat(n);return f.CSS[n+t]=o,o}function Z(e,n,t){if(n in e.style){var r=n.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),a=e.style[n]||getComputedStyle(e).getPropertyValue(r)||"0";return t?T(e,a,t):a}}function j(e,n){return h.dom(e)&&!h.inp(e)&&(!h.nil(F(e,n))||h.svg(e)&&e[n])?"attribute":h.dom(e)&&C(s,n)?"transform":h.dom(e)&&"transform"!==n&&Z(e,n)?"css":null!=e[n]?"object":void 0}function z(e){if(h.dom(e)){for(var n,t=e.style.transform||"",r=/(\w+)\(([^)]*)\)/g,a=new Map;n=r.exec(t);)a.set(n[1],n[2]);return a}}function q(e,n,t,r){var a=m(n,"scale")?1:0+function(e){return m(e,"translate")||"perspective"===e?"px":m(e,"rotate")||m(e,"skew")?"deg":void 0}(n),i=z(e).get(n)||a;return t&&(t.transforms.list.set(n,i),t.transforms.last=n),r?T(e,i,r):i}function H(e,n,t,r){switch(j(e,n)){case"transform":return q(e,n,r,t);case"css":return Z(e,n,t);case"attribute":return F(e,n);default:return e[n]||0}}function X(e,n){var t=/^(\*=|\+=|-=)/.exec(e);if(!t)return e;var r=L(e)||0,a=parseFloat(n),i=parseFloat(e.replace(t[0],""));switch(t[0][0]){case"+":return a+i+r;case"-":return a-i+r;case"*":return a*i+r}}function V(e,n){if(h.col(e))return B(e);if(/\s/g.test(e))return e;var t=L(e),r=t?e.substr(0,e.length-t.length):e;return n?r+n:r}function W(e,n){return Math.sqrt(Math.pow(n.x-e.x,2)+Math.pow(n.y-e.y,2))}function $(e){for(var n,t=e.points,r=0,a=0;a<t.numberOfItems;a++){var i=t.getItem(a);a>0&&(r+=W(n,i)),n=i}return r}function Y(e){if(e.getTotalLength)return e.getTotalLength();switch(e.tagName.toLowerCase()){case"circle":return function(e){return 2*Math.PI*F(e,"r")}(e);case"rect":return function(e){return 2*F(e,"width")+2*F(e,"height")}(e);case"line":return function(e){return W({x:F(e,"x1"),y:F(e,"y1")},{x:F(e,"x2"),y:F(e,"y2")})}(e);case"polyline":return $(e);case"polygon":return function(e){var n=e.points;return $(e)+W(n.getItem(n.numberOfItems-1),n.getItem(0))}(e)}}function _(e,n){var t=n||{},r=t.el||function(e){for(var n=e.parentNode;h.svg(n)&&h.svg(n.parentNode);)n=n.parentNode;return n}(e),a=r.getBoundingClientRect(),i=F(r,"viewBox"),u=a.width,o=a.height,c=t.viewBox||(i?i.split(" "):[0,0,u,o]);return{el:r,viewBox:c,x:c[0]/1,y:c[1]/1,w:u,h:o,vW:c[2],vH:c[3]}}function R(e,n,t){function r(t){void 0===t&&(t=0);var r=n+t>=1?n+t:0;return e.el.getPointAtLength(r)}var a=_(e.el,e.svg),i=r(),u=r(-1),o=r(1),c=t?1:a.w/a.vW,l=t?1:a.h/a.vH;switch(e.property){case"x":return(i.x-a.x)*c;case"y":return(i.y-a.y)*l;case"angle":return 180*Math.atan2(o.y-u.y,o.x-u.x)/Math.PI}}function G(e,n){var t=/[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/g,r=V(h.pth(e)?e.totalLength:e,n)+"";return{original:r,numbers:r.match(t)?r.match(t).map(Number):[0],strings:h.str(e)||n?r.split(t):[]}}function Q(e){return k(e?O(h.arr(e)?e.map(P):P(e)):[],(function(e,n,t){return t.indexOf(e)===n}))}function J(e){var n=Q(e);return n.map((function(e,t){return{target:e,id:t,total:n.length,transforms:{list:z(e)}}}))}function K(e,n){var t=I(n);if(/^spring/.test(t.easing)&&(t.duration=v(t.easing)),h.arr(e)){var r=e.length;2===r&&!h.obj(e[0])?e={value:e}:h.fnc(n.duration)||(t.duration=n.duration/r)}var a=h.arr(e)?e:[e];return a.map((function(e,t){var r=h.obj(e)&&!h.pth(e)?e:{value:e};return h.und(r.delay)&&(r.delay=t?0:n.delay),h.und(r.endDelay)&&(r.endDelay=t===a.length-1?n.endDelay:0),r})).map((function(e){return S(e,t)}))}function U(e,n){var t=[],r=n.keyframes;for(var a in r&&(n=S(function(e){for(var n=k(O(e.map((function(e){return Object.keys(e)}))),(function(e){return h.key(e)})).reduce((function(e,n){return e.indexOf(n)<0&&e.push(n),e}),[]),t={},r=function(r){var a=n[r];t[a]=e.map((function(e){var n={};for(var t in e)h.key(t)?t==a&&(n.value=e[t]):n[t]=e[t];return n}))},a=0;a<n.length;a++)r(a);return t}(r),n)),n)h.key(a)&&t.push({name:a,tweens:K(n[a],e)});return t}function ee(e,n){var t;return e.tweens.map((function(r){var a=function(e,n){var t={};for(var r in e){var a=A(e[r],n);h.arr(a)&&1===(a=a.map((function(e){return A(e,n)}))).length&&(a=a[0]),t[r]=a}return t.duration=parseFloat(t.duration),t.delay=parseFloat(t.delay),t}(r,n),i=a.value,u=h.arr(i)?i[1]:i,o=L(u),c=H(n.target,e.name,o,n),l=t?t.to.original:c,s=h.arr(i)?i[0]:l,f=L(s)||L(c),d=o||f;return h.und(u)&&(u=l),a.from=G(s,d),a.to=G(X(u,s),d),a.start=t?t.end:0,a.end=a.start+a.delay+a.duration+a.endDelay,a.easing=b(a.easing,a.duration),a.isPath=h.pth(i),a.isPathTargetInsideSVG=a.isPath&&h.svg(n.target),a.isColor=h.col(a.from.original),a.isColor&&(a.round=1),t=a,a}))}var ne={css:function(e,n,t){return e.style[n]=t},attribute:function(e,n,t){return e.setAttribute(n,t)},object:function(e,n,t){return e[n]=t},transform:function(e,n,t,r,a){if(r.list.set(n,t),n===r.last||a){var i="";r.list.forEach((function(e,n){i+=n+"("+e+") "})),e.style.transform=i}}};function te(e,n){J(e).forEach((function(e){for(var t in n){var r=A(n[t],e),a=e.target,i=L(r),u=H(a,t,i,e),o=X(V(r,i||L(u)),u),c=j(a,t);ne[c](a,t,o,e.transforms,!0)}}))}function re(e,n){return k(O(e.map((function(e){return n.map((function(n){return function(e,n){var t=j(e.target,n.name);if(t){var r=ee(n,e),a=r[r.length-1];return{type:t,property:n.name,animatable:e,tweens:r,duration:a.end,delay:r[0].delay,endDelay:a.endDelay}}}(e,n)}))}))),(function(e){return!h.und(e)}))}function ae(e,n){var t=e.length,r=function(e){return e.timelineOffset?e.timelineOffset:0},a={};return a.duration=t?Math.max.apply(Math,e.map((function(e){return r(e)+e.duration}))):n.duration,a.delay=t?Math.min.apply(Math,e.map((function(e){return r(e)+e.delay}))):n.delay,a.endDelay=t?a.duration-Math.max.apply(Math,e.map((function(e){return r(e)+e.duration-e.endDelay}))):n.endDelay,a}var ie=0;var ue=[],oe=function(){var e;function n(t){for(var r=ue.length,a=0;a<r;){var i=ue[a];i.paused?(ue.splice(a,1),r--):(i.tick(t),a++)}e=a>0?requestAnimationFrame(n):void 0}return"undefined"!=typeof document&&document.addEventListener("visibilitychange",(function(){le.suspendWhenDocumentHidden&&(ce()?e=cancelAnimationFrame(e):(ue.forEach((function(e){return e._onDocumentVisibility()})),oe()))})),function(){e||ce()&&le.suspendWhenDocumentHidden||!(ue.length>0)||(e=requestAnimationFrame(n))}}();function ce(){return!!document&&document.hidden}function le(e){void 0===e&&(e={});var n,t=0,r=0,a=0,i=0,u=null;function o(e){var n=window.Promise&&new Promise((function(e){return u=e}));return e.finished=n,n}var s=function(e){var n=D(c,e),t=D(l,e),r=U(t,e),a=J(e.targets),i=re(a,r),u=ae(i,t),o=ie;return ie++,S(n,{id:o,children:[],animatables:a,animations:i,duration:u.duration,delay:u.delay,endDelay:u.endDelay})}(e);o(s);function f(){var e=s.direction;"alternate"!==e&&(s.direction="normal"!==e?"normal":"reverse"),s.reversed=!s.reversed,n.forEach((function(e){return e.reversed=s.reversed}))}function m(e){return s.reversed?s.duration-e:e}function p(){t=0,r=m(s.currentTime)*(1/le.speed)}function h(e,n){n&&n.seek(e-n.timelineOffset)}function g(e){for(var n=0,t=s.animations,r=t.length;n<r;){var a=t[n],i=a.animatable,u=a.tweens,o=u.length-1,c=u[o];o&&(c=k(u,(function(n){return e<n.end}))[0]||c);for(var l=d(e-c.start-c.delay,0,c.duration)/c.duration,f=isNaN(l)?1:c.easing(l),m=c.to.strings,p=c.round,h=[],g=c.to.numbers.length,v=void 0,y=0;y<g;y++){var x=void 0,E=c.to.numbers[y],w=c.from.numbers[y]||0;x=c.isPath?R(c.value,f*E,c.isPathTargetInsideSVG):w+f*(E-w),p&&(c.isColor&&y>2||(x=Math.round(x*p)/p)),h.push(x)}var N=m.length;if(N){v=m[0];for(var b=0;b<N;b++){m[b];var M=m[b+1],O=h[b];isNaN(O)||(v+=M?O+M:O+" ")}}else v=h[0];ne[a.type](i.target,a.property,v,i.transforms),a.currentValue=v,n++}}function v(e){s[e]&&!s.passThrough&&s[e](s)}function y(e){var c=s.duration,l=s.delay,p=c-s.endDelay,y=m(e);s.progress=d(y/c*100,0,100),s.reversePlayback=y<s.currentTime,n&&function(e){if(s.reversePlayback)for(var t=i;t--;)h(e,n[t]);else for(var r=0;r<i;r++)h(e,n[r])}(y),!s.began&&s.currentTime>0&&(s.began=!0,v("begin")),!s.loopBegan&&s.currentTime>0&&(s.loopBegan=!0,v("loopBegin")),y<=l&&0!==s.currentTime&&g(0),(y>=p&&s.currentTime!==c||!c)&&g(c),y>l&&y<p?(s.changeBegan||(s.changeBegan=!0,s.changeCompleted=!1,v("changeBegin")),v("change"),g(y)):s.changeBegan&&(s.changeCompleted=!0,s.changeBegan=!1,v("changeComplete")),s.currentTime=d(y,0,c),s.began&&v("update"),e>=c&&(r=0,s.remaining&&!0!==s.remaining&&s.remaining--,s.remaining?(t=a,v("loopComplete"),s.loopBegan=!1,"alternate"===s.direction&&f()):(s.paused=!0,s.completed||(s.completed=!0,v("loopComplete"),v("complete"),!s.passThrough&&"Promise"in window&&(u(),o(s)))))}return s.reset=function(){var e=s.direction;s.passThrough=!1,s.currentTime=0,s.progress=0,s.paused=!0,s.began=!1,s.loopBegan=!1,s.changeBegan=!1,s.completed=!1,s.changeCompleted=!1,s.reversePlayback=!1,s.reversed="reverse"===e,s.remaining=s.loop,n=s.children;for(var t=i=n.length;t--;)s.children[t].reset();(s.reversed&&!0!==s.loop||"alternate"===e&&1===s.loop)&&s.remaining++,g(s.reversed?s.duration:0)},s._onDocumentVisibility=p,s.set=function(e,n){return te(e,n),s},s.tick=function(e){a=e,t||(t=a),y((a+(r-t))*le.speed)},s.seek=function(e){y(m(e))},s.pause=function(){s.paused=!0,p()},s.play=function(){s.paused&&(s.completed&&s.reset(),s.paused=!1,ue.push(s),p(),oe())},s.reverse=function(){f(),s.completed=!s.reversed,p()},s.restart=function(){s.reset(),s.play()},s.remove=function(e){fe(Q(e),s)},s.reset(),s.autoplay&&s.play(),s}function se(e,n){for(var t=n.length;t--;)C(e,n[t].animatable.target)&&n.splice(t,1)}function fe(e,n){var t=n.animations,r=n.children;se(e,t);for(var a=r.length;a--;){var i=r[a],u=i.animations;se(e,u),u.length||i.children.length||r.splice(a,1)}t.length||r.length||n.pause()}le.version="3.2.1",le.speed=1,le.suspendWhenDocumentHidden=!0,le.running=ue,le.remove=function(e){for(var n=Q(e),t=ue.length;t--;){fe(n,ue[t])}},le.get=H,le.set=te,le.convertPx=T,le.path=function(e,n){var t=h.str(e)?M(e)[0]:e,r=n||100;return function(e){return{property:e,el:t,svg:_(t),totalLength:Y(t)*(r/100)}}},le.setDashoffset=function(e){var n=Y(e);return e.setAttribute("stroke-dasharray",n),n},le.stagger=function(e,n){void 0===n&&(n={});var t=n.direction||"normal",r=n.easing?b(n.easing):null,a=n.grid,i=n.axis,u=n.from||0,o="first"===u,c="center"===u,l="last"===u,s=h.arr(e),f=s?parseFloat(e[0]):parseFloat(e),d=s?parseFloat(e[1]):0,m=L(s?e[1]:e)||0,p=n.start||0+(s?f:0),g=[],v=0;return function(e,n,h){if(o&&(u=0),c&&(u=(h-1)/2),l&&(u=h-1),!g.length){for(var y=0;y<h;y++){if(a){var x=c?(a[0]-1)/2:u%a[0],E=c?(a[1]-1)/2:Math.floor(u/a[0]),w=x-y%a[0],N=E-Math.floor(y/a[0]),b=Math.sqrt(w*w+N*N);"x"===i&&(b=-w),"y"===i&&(b=-N),g.push(b)}else g.push(Math.abs(u-y));v=Math.max.apply(Math,g)}r&&(g=g.map((function(e){return r(e/v)*v}))),"reverse"===t&&(g=g.map((function(e){return i?e<0?-1*e:-e:Math.abs(v-e)})))}return p+(s?(d-f)/v:f)*(Math.round(100*g[n])/100)+m}},le.timeline=function(e){void 0===e&&(e={});var n=le(e);return n.duration=0,n.add=function(t,r){var a=ue.indexOf(n),i=n.children;function u(e){e.passThrough=!0}a>-1&&ue.splice(a,1);for(var o=0;o<i.length;o++)u(i[o]);var c=S(t,D(l,e));c.targets=c.targets||e.targets;var s=n.duration;c.autoplay=!1,c.direction=n.direction,c.timelineOffset=h.und(r)?s:X(r,s),u(n),n.seek(c.timelineOffset);var f=le(c);u(f),i.push(f);var d=ae(i,e);return n.delay=d.delay,n.endDelay=d.endDelay,n.duration=d.duration,n.seek(0),n.reset(),n.autoplay&&n.play(),n},n},le.easing=b,le.penner=N,le.random=function(e,n){return Math.floor(Math.random()*(n-e+1))+e};var de=le,me=function(){var e=(0,a.Z)(),n=(0,u.t)(),t=o.tj.documentElement.offsetHeight,c=(0,r.useState)(0),l=c[0],s=c[1];(0,r.useEffect)((function(){var r=e.y/(t-n.height)*100;s((0,i.bA)([2,5,7,10],[0,1,1,0],r,i.X9))}),[e,t,n]);var f=r.useRef(null);return(0,r.useEffect)((function(){f.current=de({targets:"path.stroke",easing:"easeInOutSine",delay:de.stagger(250),loop:!0,direction:"alternate",strokeDashoffset:[de.setDashoffset,0],duration:2e3})}),[]),r.createElement(r.Fragment,null,r.createElement("div",{className:"designLogo",style:{width:"50%",position:"fixed",left:"50%",top:"50%",transform:"translate(-50%, -50%)",opacity:l}},r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 313.07 313.07"},r.createElement("g",{id:"a"}),r.createElement("g",{id:"b"},r.createElement("g",{id:"d"},r.createElement("g",null,r.createElement("g",null,r.createElement("path",{className:"stroke",d:"M156.52,95.43v1.4h-.01l-39.86,15.23-3.42,1.3-50.43,19.28c4.34-17.08,13.23-32.33,25.3-44.41,5.71-5.7,12.12-10.7,19.1-14.83l49.32,22.04Z"}),r.createElement("path",{className:"stroke",d:"M114.24,114.36l-17.39,38.86h0l-1.51,3.36-22.04,49.3c-8.58-14.44-13.5-31.29-13.5-49.3,0-8.27,1.04-16.29,3-23.95l50.43-19.28,1,1Z"}),r.createElement("path",{className:"stroke",d:"M132.56,250.28c-17.1-4.35-32.37-13.25-44.46-25.35-5.7-5.69-10.68-12.09-14.79-19.05l22.04-49.3h1.41l15.23,39.84,1.28,3.35,19.3,50.5Z"}),r.createElement("path",{className:"stroke",d:"M205.78,239.77c-14.42,8.57-31.27,13.48-49.26,13.49h-.04c-8.26,0-16.28-1.04-23.93-2.99l-19.3-50.5,.97-.97,38.96,17.44h.01l3.32,1.49,49.26,22.04Z"}),r.createElement("path",{className:"stroke",d:"M250.17,180.57c-4.35,17.07-13.25,32.31-25.32,44.4-5.69,5.69-12.09,10.67-19.06,14.81l-49.26-22.04v-1.4l39.77-15.19h.01l3.41-1.31,50.46-19.26Z"}),r.createElement("path",{className:"stroke",d:"M239.65,107.25l-22.03,49.33h-1.36l-15.2-39.81-1.33-3.48-19.23-50.38c17.04,4.35,32.27,13.23,44.32,25.29,5.69,5.69,10.68,12.09,14.82,19.05Z"}),r.createElement("path",{className:"stroke",d:"M253.17,156.58c0,8.28-1.04,16.31-3,23.98l-50.46,19.26-.97-.98h0v-.02l17.42-38.99,1.46-3.25,22.03-49.33c8.59,14.45,13.52,31.31,13.52,49.33Z"}),r.createElement("path",{className:"stroke",d:"M199.74,113.3l-1,1-38.89-17.38-3.32-1.49-49.32-22.04c14.44-8.58,31.29-13.49,49.28-13.49h.04c8.28,0,16.31,1.05,23.98,3.01l19.23,50.38Z"})),r.createElement("g",null,r.createElement("path",{className:"n",d:"M216.2,156.58c0,33-26.75,59.75-59.75,59.75-79.26-3.15-79.24-116.37,0-119.51,33,0,59.75,26.75,59.75,59.75h0Z"}),r.createElement("path",{className:"t",d:"M253.11,156.58c0,53.4-43.29,96.68-96.68,96.68-128.24-5.09-128.21-188.29,0-193.36,53.39,0,96.68,43.29,96.68,96.68h0Z"}),r.createElement("path",{className:"o",d:"M312.92,156.58c0,86.4-70.04,156.43-156.43,156.43-207.51-8.24-207.45-304.66,0-312.87,86.39,0,156.43,70.04,156.43,156.43h0Z"}),r.createElement("g",null,r.createElement("line",{className:"p",x1:".05",y1:"156.58",x2:"1.05",y2:"156.58"}),r.createElement("line",{className:"g",x1:"3.06",y1:"156.58",x2:"310.69",y2:"156.58"}),r.createElement("line",{className:"p",x1:"311.69",y1:"156.58",x2:"312.69",y2:"156.58"})),r.createElement("g",null,r.createElement("line",{className:"p",x1:"156.47",y1:".15",x2:"156.47",y2:"1.15"}),r.createElement("line",{className:"m",x1:"156.47",y1:"3.16",x2:"156.47",y2:"311.02"}),r.createElement("line",{className:"p",x1:"156.47",y1:"312.02",x2:"156.47",y2:"313.02"})),r.createElement("g",null,r.createElement("line",{className:"p",x1:"45.86",y1:"267.12",x2:"46.56",y2:"266.41"}),r.createElement("line",{className:"g",x1:"47.98",y1:"264.99",x2:"265.51",y2:"47.47"}),r.createElement("line",{className:"p",x1:"266.22",y1:"46.76",x2:"266.93",y2:"46.05"})),r.createElement("g",null,r.createElement("line",{className:"p",x1:"45.8",y1:"45.97",x2:"46.5",y2:"46.68"}),r.createElement("line",{className:"m",x1:"47.92",y1:"48.09",x2:"265.61",y2:"265.78"}),r.createElement("line",{className:"p",x1:"266.32",y1:"266.49",x2:"267.03",y2:"267.2"})),r.createElement("g",null,r.createElement("line",{className:"p",x1:"156.49",y1:".15",x2:"156.84",y2:"1.08"}),r.createElement("line",{className:"s",x1:"157.55",y1:"2.95",x2:"215.49",y2:"154.72"}),r.createElement("line",{className:"p",x1:"215.85",y1:"155.65",x2:"216.2",y2:"156.58"})),r.createElement("g",null,r.createElement("line",{className:"p",x1:"266.93",y1:"46.05",x2:"266.52",y2:"46.96"}),r.createElement("line",{className:"i",x1:"265.71",y1:"48.78",x2:"199.5",y2:"197.03"}),r.createElement("line",{className:"p",x1:"199.09",y1:"197.94",x2:"198.68",y2:"198.85"})),r.createElement("g",null,r.createElement("line",{className:"p",x1:"312.92",y1:"156.58",x2:"311.99",y2:"156.94"}),r.createElement("line",{className:"e1",x1:"310.12",y1:"157.65",x2:"158.31",y2:"215.62"}),r.createElement("line",{className:"p",x1:"157.38",y1:"215.98",x2:"156.45",y2:"216.34"})),r.createElement("g",null,r.createElement("line",{className:"p",x1:"267.03",y1:"267.2",x2:"266.11",y2:"266.79"}),r.createElement("line",{className:"j",x1:"264.29",y1:"265.98",x2:"115.99",y2:"199.62"}),r.createElement("line",{className:"p",x1:"115.08",y1:"199.21",x2:"114.17",y2:"198.81"})),r.createElement("g",null,r.createElement("line",{className:"p",x1:"156.49",y1:"313.02",x2:"156.13",y2:"312.08"}),r.createElement("line",{className:"q",x1:"155.42",y1:"310.22",x2:"97.41",y2:"158.45"}),r.createElement("line",{className:"p",x1:"97.05",y1:"157.52",x2:"96.7",y2:"156.58"})),r.createElement("g",null,r.createElement("line",{className:"p",x1:"45.86",y1:"267.12",x2:"46.27",y2:"266.21"}),r.createElement("line",{className:"l",x1:"47.08",y1:"264.39",x2:"113.37",y2:"116.18"}),r.createElement("line",{className:"p",x1:"113.77",y1:"115.27",x2:"114.18",y2:"114.35"})),r.createElement("g",null,r.createElement("line",{className:"p",x1:".05",y1:"156.58",x2:".99",y2:"156.23"}),r.createElement("line",{className:"r",x1:"2.85",y1:"155.52",x2:"154.58",y2:"97.54"}),r.createElement("line",{className:"p",x1:"155.51",y1:"97.19",x2:"156.45",y2:"96.83"})),r.createElement("g",null,r.createElement("line",{className:"p",x1:"45.8",y1:"45.97",x2:"46.71",y2:"46.38"}),r.createElement("line",{className:"f",x1:"48.53",y1:"47.19",x2:"196.85",y2:"113.49"}),r.createElement("line",{className:"p",x1:"197.76",y1:"113.9",x2:"198.67",y2:"114.3"})))))))))}}}]);
//# sourceMappingURL=9f60bffa7486714ae1b5178dab999a971c3bd5cd-3e018b269679764bdd8b.js.map
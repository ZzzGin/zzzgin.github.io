!function(){"use strict";var e,t,n,r,o,c,i,a={},f={};function u(e){var t=f[e];if(void 0!==t)return t.exports;var n=f[e]={exports:{}};return a[e].call(n.exports,n,n.exports,u),n.exports}u.m=a,e=[],u.O=function(t,n,r,o){if(!n){var c=1/0;for(s=0;s<e.length;s++){n=e[s][0],r=e[s][1],o=e[s][2];for(var i=!0,a=0;a<n.length;a++)(!1&o||c>=o)&&Object.keys(u.O).every((function(e){return u.O[e](n[a])}))?n.splice(a--,1):(i=!1,o<c&&(c=o));if(i){e.splice(s--,1);var f=r();void 0!==f&&(t=f)}}return t}o=o||0;for(var s=e.length;s>0&&e[s-1][2]>o;s--)e[s]=e[s-1];e[s]=[n,r,o]},u.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return u.d(t,{a:t}),t},n=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__},u.t=function(e,r){if(1&r&&(e=this(e)),8&r)return e;if("object"==typeof e&&e){if(4&r&&e.__esModule)return e;if(16&r&&"function"==typeof e.then)return e}var o=Object.create(null);u.r(o);var c={};t=t||[null,n({}),n([]),n(n)];for(var i=2&r&&e;"object"==typeof i&&!~t.indexOf(i);i=n(i))Object.getOwnPropertyNames(i).forEach((function(t){c[t]=function(){return e[t]}}));return c.default=function(){return e},u.d(o,c),o},u.d=function(e,t){for(var n in t)u.o(t,n)&&!u.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},u.f={},u.e=function(e){return Promise.all(Object.keys(u.f).reduce((function(t,n){return u.f[n](e,t),t}),[]))},u.u=function(e){return({210:"34ce7bbce1b88af34b07aff6cb1f795163a7d7b7",244:"component---src-templates-md-template-js",307:"component---src-pages-tags-index-js",317:"component---src-templates-tagged-blogs-template-js",362:"component---src-pages-artworks-timeline-test-vis-js-index-js",370:"component---src-pages-artworks-timeline-job-2022-index-js",517:"component---src-pages-artworks-logo-design-aperture-laboratries-index-js",532:"styles",573:"b5f2ed29",590:"component---src-pages-artworks-logo-design-zzz-logo-index-js",678:"component---src-pages-index-js",741:"91922e92cca8c6f21fb3ebfceb289c7583865774",777:"8898f61fcd996c7561985b4f6aa8bc7c8719537c",883:"component---src-pages-404-js"}[e]||e)+"-"+{210:"2149b55bb1b60be867e1",231:"8ed2792dbf0f05735e78",244:"6516384914dd5cf06ed2",307:"6d8568929808ce09789e",317:"4b4545d29400617b2d36",362:"207a81571a0c432fed15",370:"7e63a4454b3559a02e12",517:"36d68526e41a9efca056",532:"896a31f74d9cb9169968",573:"da9c773b486eba7f6968",590:"615234ef5ccdd138608e",610:"b18a85664f1c2b925293",678:"e292c19cae325cf69fab",711:"9b37887b539e50b02e1b",741:"df5563495041cc2dc26d",777:"917f20ac15f872059fa9",883:"06cdb2023491fe9ab968"}[e]+".js"},u.miniCssF=function(e){return"styles.9c89101012e6a9b79333.css"},u.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r={},o="zzzgin.github.io:",u.l=function(e,t,n,c){if(r[e])r[e].push(t);else{var i,a;if(void 0!==n)for(var f=document.getElementsByTagName("script"),s=0;s<f.length;s++){var d=f[s];if(d.getAttribute("src")==e||d.getAttribute("data-webpack")==o+n){i=d;break}}i||(a=!0,(i=document.createElement("script")).charset="utf-8",i.timeout=120,u.nc&&i.setAttribute("nonce",u.nc),i.setAttribute("data-webpack",o+n),i.src=e),r[e]=[t];var l=function(t,n){i.onerror=i.onload=null,clearTimeout(b);var o=r[e];if(delete r[e],i.parentNode&&i.parentNode.removeChild(i),o&&o.forEach((function(e){return e(n)})),t)return t(n)},b=setTimeout(l.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=l.bind(null,i.onerror),i.onload=l.bind(null,i.onload),a&&document.head.appendChild(i)}},u.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.p="/",c=function(e){return new Promise((function(t,n){var r=u.miniCssF(e),o=u.p+r;if(function(e,t){for(var n=document.getElementsByTagName("link"),r=0;r<n.length;r++){var o=(i=n[r]).getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(o===e||o===t))return i}var c=document.getElementsByTagName("style");for(r=0;r<c.length;r++){var i;if((o=(i=c[r]).getAttribute("data-href"))===e||o===t)return i}}(r,o))return t();!function(e,t,n,r){var o=document.createElement("link");o.rel="stylesheet",o.type="text/css",o.onerror=o.onload=function(c){if(o.onerror=o.onload=null,"load"===c.type)n();else{var i=c&&("load"===c.type?"missing":c.type),a=c&&c.target&&c.target.href||t,f=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");f.code="CSS_CHUNK_LOAD_FAILED",f.type=i,f.request=a,o.parentNode.removeChild(o),r(f)}},o.href=t,document.head.appendChild(o)}(e,o,t,n)}))},i={658:0},u.f.miniCss=function(e,t){i[e]?t.push(i[e]):0!==i[e]&&{532:1}[e]&&t.push(i[e]=c(e).then((function(){i[e]=0}),(function(t){throw delete i[e],t})))},function(){var e={658:0};u.f.j=function(t,n){var r=u.o(e,t)?e[t]:void 0;if(0!==r)if(r)n.push(r[2]);else if(/^(532|658)$/.test(t))e[t]=0;else{var o=new Promise((function(n,o){r=e[t]=[n,o]}));n.push(r[2]=o);var c=u.p+u.u(t),i=new Error;u.l(c,(function(n){if(u.o(e,t)&&(0!==(r=e[t])&&(e[t]=void 0),r)){var o=n&&("load"===n.type?"missing":n.type),c=n&&n.target&&n.target.src;i.message="Loading chunk "+t+" failed.\n("+o+": "+c+")",i.name="ChunkLoadError",i.type=o,i.request=c,r[1](i)}}),"chunk-"+t,t)}},u.O.j=function(t){return 0===e[t]};var t=function(t,n){var r,o,c=n[0],i=n[1],a=n[2],f=0;if(c.some((function(t){return 0!==e[t]}))){for(r in i)u.o(i,r)&&(u.m[r]=i[r]);if(a)var s=a(u)}for(t&&t(n);f<c.length;f++)o=c[f],u.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return u.O(s)},n=self.webpackChunkzzzgin_github_io=self.webpackChunkzzzgin_github_io||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}()}();
//# sourceMappingURL=webpack-runtime-06dbd9fd942b4b66edc7.js.map
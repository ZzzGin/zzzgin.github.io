(self.webpackChunkzzzgin_github_io=self.webpackChunkzzzgin_github_io||[]).push([[150],{685:function(t,e,n){var r=n(5301).w_;t.exports.p=function(t){return r({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",stroke:"#000",strokeWidth:"2",d:"M20,8 C18.5974037,5.04031171 15.536972,3 12,3 C7.02943725,3 3,7.02943725 3,12 C3,16.9705627 7.02943725,21 12,21 L12,21 C16.9705627,21 21,16.9705627 21,12 M21,3 L21,9 L15,9"}}]})(t)}},6986:function(t,e,n){var r=n(5301).w_;t.exports.L=function(t){return r({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",stroke:"#000",strokeWidth:"2",d:"M16,16 L23,23 L16,16 Z M10,18 C14.418278,18 18,14.418278 18,10 C18,5.581722 14.418278,2 10,2 C5.581722,2 2,5.581722 2,10 C2,14.418278 5.581722,18 10,18 Z M10,15 L10,5 M5,10 L15,10"}}]})(t)}},6681:function(t,e,n){var r=n(5301).w_;t.exports.u=function(t){return r({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",stroke:"#000",strokeWidth:"2",d:"M16,16 L23,23 L16,16 Z M10,18 C14.418278,18 18,14.418278 18,10 C18,5.581722 14.418278,2 10,2 C5.581722,2 2,5.581722 2,10 C2,14.418278 5.581722,18 10,18 Z M5,10 L15,10"}}]})(t)}},5301:function(t,e,n){"use strict";n.d(e,{w_:function(){return u}});var r=n(7294),o={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},i=r.createContext&&r.createContext(o),a=function(){return a=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},a.apply(this,arguments)},c=function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(t);o<r.length;o++)e.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(t,r[o])&&(n[r[o]]=t[r[o]])}return n};function l(t){return t&&t.map((function(t,e){return r.createElement(t.tag,a({key:e},t.attr),l(t.child))}))}function u(t){return function(e){return r.createElement(s,a({attr:a({},t.attr)},e),l(t.child))}}function s(t){var e=function(e){var n,o=t.attr,i=t.size,l=t.title,u=c(t,["attr","size","title"]),s=i||e.size||"1em";return e.className&&(n=e.className),t.className&&(n=(n?n+" ":"")+t.className),r.createElement("svg",a({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},e.attr,o,u,{className:n,style:a(a({color:t.color||e.color},e.style),t.style),height:s,width:s,xmlns:"http://www.w3.org/2000/svg"}),l&&r.createElement("title",null,l),t.children)};return void 0!==i?r.createElement(i.Consumer,null,(function(t){return e(t)})):e(o)}},1223:function(t,e,n){var r=n(5112),o=n(30),i=n(3070),a=r("unscopables"),c=Array.prototype;null==c[a]&&i.f(c,a,{configurable:!0,value:o(null)}),t.exports=function(t){c[a][t]=!0}},7475:function(t,e,n){var r=n(7854),o=n(3157),i=n(4411),a=n(111),c=n(5112)("species"),l=r.Array;t.exports=function(t){var e;return o(t)&&(e=t.constructor,(i(e)&&(e===l||o(e.prototype))||a(e)&&null===(e=e[c]))&&(e=void 0)),void 0===e?l:e}},5417:function(t,e,n){var r=n(7475);t.exports=function(t,e){return new(r(t))(0===e?0:e)}},648:function(t,e,n){var r=n(7854),o=n(1694),i=n(614),a=n(4326),c=n(5112)("toStringTag"),l=r.Object,u="Arguments"==a(function(){return arguments}());t.exports=o?a:function(t){var e,n,r;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=function(t,e){try{return t[e]}catch(n){}}(e=l(t),c))?n:u?a(e):"Object"==(r=a(e))&&i(e.callee)?"Arguments":r}},6790:function(t,e,n){"use strict";var r=n(7854),o=n(3157),i=n(6244),a=n(9974),c=r.TypeError,l=function(t,e,n,r,u,s,f,m){for(var p,d,v=u,g=0,y=!!f&&a(f,m);g<r;){if(g in n){if(p=y?y(n[g],g,e):n[g],s>0&&o(p))d=i(p),v=l(t,e,p,d,v,s-1)-1;else{if(v>=9007199254740991)throw c("Exceed the acceptable array length");t[v]=p}v++}g++}return v};t.exports=l},9974:function(t,e,n){var r=n(1702),o=n(9662),i=n(4374),a=r(r.bind);t.exports=function(t,e){return o(t),void 0===e?t:i?a(t,e):function(){return t.apply(e,arguments)}}},490:function(t,e,n){var r=n(5005);t.exports=r("document","documentElement")},3157:function(t,e,n){var r=n(4326);t.exports=Array.isArray||function(t){return"Array"==r(t)}},4411:function(t,e,n){var r=n(1702),o=n(7293),i=n(614),a=n(648),c=n(5005),l=n(2788),u=function(){},s=[],f=c("Reflect","construct"),m=/^\s*(?:class|function)\b/,p=r(m.exec),d=!m.exec(u),v=function(t){if(!i(t))return!1;try{return f(u,s,t),!0}catch(e){return!1}},g=function(t){if(!i(t))return!1;switch(a(t)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}try{return d||!!p(m,l(t))}catch(e){return!0}};g.sham=!0,t.exports=!f||o((function(){var t;return v(v.call)||!v(Object)||!v((function(){t=!0}))||t}))?g:v},30:function(t,e,n){var r,o=n(9670),i=n(6048),a=n(748),c=n(3501),l=n(490),u=n(317),s=n(6200),f=s("IE_PROTO"),m=function(){},p=function(t){return"<script>"+t+"</"+"script>"},d=function(t){t.write(p("")),t.close();var e=t.parentWindow.Object;return t=null,e},v=function(){try{r=new ActiveXObject("htmlfile")}catch(o){}var t,e;v="undefined"!=typeof document?document.domain&&r?d(r):((e=u("iframe")).style.display="none",l.appendChild(e),e.src=String("javascript:"),(t=e.contentWindow.document).open(),t.write(p("document.F=Object")),t.close(),t.F):d(r);for(var n=a.length;n--;)delete v.prototype[a[n]];return v()};c[f]=!0,t.exports=Object.create||function(t,e){var n;return null!==t?(m.prototype=o(t),n=new m,m.prototype=null,n[f]=t):n=v(),void 0===e?n:i.f(n,e)}},6048:function(t,e,n){var r=n(9781),o=n(3353),i=n(3070),a=n(9670),c=n(5656),l=n(1956);e.f=r&&!o?Object.defineProperties:function(t,e){a(t);for(var n,r=c(e),o=l(e),u=o.length,s=0;u>s;)i.f(t,n=o[s++],r[n]);return t}},1956:function(t,e,n){var r=n(6324),o=n(748);t.exports=Object.keys||function(t){return r(t,o)}},365:function(t,e,n){"use strict";var r=n(3111).end,o=n(6091);t.exports=o("trimEnd")?function(){return r(this)}:"".trimEnd},6091:function(t,e,n){var r=n(6530).PROPER,o=n(7293),i=n(1361);t.exports=function(t){return o((function(){return!!i[t]()||"​᠎"!=="​᠎"[t]()||r&&i[t].name!==t}))}},3111:function(t,e,n){var r=n(1702),o=n(4488),i=n(1340),a=n(1361),c=r("".replace),l="["+a+"]",u=RegExp("^"+l+l+"*"),s=RegExp(l+l+"*$"),f=function(t){return function(e){var n=i(o(e));return 1&t&&(n=c(n,u,"")),2&t&&(n=c(n,s,"")),n}};t.exports={start:f(1),end:f(2),trim:f(3)}},1694:function(t,e,n){var r={};r[n(5112)("toStringTag")]="z",t.exports="[object z]"===String(r)},1340:function(t,e,n){var r=n(7854),o=n(648),i=r.String;t.exports=function(t){if("Symbol"===o(t))throw TypeError("Cannot convert a Symbol value to a string");return i(t)}},1361:function(t){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},6535:function(t,e,n){"use strict";var r=n(2109),o=n(6790),i=n(9662),a=n(7908),c=n(6244),l=n(5417);r({target:"Array",proto:!0},{flatMap:function(t){var e,n=a(this),r=c(n);return i(t),(e=l(n,0)).length=o(e,n,n,r,0,1,t,arguments.length>1?arguments[1]:void 0),e}})},9244:function(t,e,n){n(1223)("flatMap")},5837:function(t,e,n){n(2109)({global:!0},{globalThis:n(7854)})},8702:function(t,e,n){n(3462);var r=n(2109),o=n(365);r({target:"String",proto:!0,name:"trimEnd",forced:"".trimEnd!==o},{trimEnd:o})},3462:function(t,e,n){var r=n(2109),o=n(365);r({target:"String",proto:!0,name:"trimEnd",forced:"".trimRight!==o},{trimRight:o})},5743:function(t,e,n){n(5837)},4070:function(t,e,n){"use strict";n.d(e,{Z:function(){return l}});var r=n(7294),o=n(5367),i=n(685),a=n(6986),c=n(6681),l=function(t){var e=new Map(t.groups.map((function(t){return[t.id,t.tag]}))),n=r.useRef(null);r.useEffect((function(){var e=t.groups.map((function(t){return{id:t.id,content:t.content}})),r=t.events.map((function(t,e){return{id:e,content:t.title,start:t.start,end:t.end?t.end:null,group:t.group,className:"item-"+t.color}})),i=document.getElementById("visualization"),a=new o.qg(r),c=new o.qg(e),l=new Date,u=new Date,s={horizontalScroll:!0,zoomKey:"ctrlKey",zoomMax:15768e7,zoomMin:6048e5,maxHeight:"40vh",start:l.setDate(l.getDate()-45),end:u.setDate(u.getDate()+15)};return n.current=new o.TY(i,a,c,s),n.current.on("select",(function(t){if(t.items&&1===t.items.length){var e=document.getElementById("s-"+t.items).offsetTop-document.getElementById("timeline-container").offsetHeight;window.scrollTo(0,e)}})),function(){n.current.destroy()}}),[t]);return r.createElement(r.Fragment,null,r.createElement("div",{id:"timeline-container",style:{position:"sticky",top:"0px",backgroundColor:"rgb(243, 243, 243)",zIndex:"20"}},r.createElement("div",{id:"visualization"}),r.createElement("div",{className:"timeline-tools-container"},r.createElement("button",{className:"timeline-reset-button",onClick:function(){var t=new Date,e=new Date;n.current.setWindow(t.setDate(t.getDate()-60),e.setDate(e.getDate()+1))},"aria-label":"reset"},r.createElement(i.p,null)),r.createElement("button",{className:"timeline-zoomin-button",onClick:function(){n.current.zoomIn(.7)},"aria-label":"zoom in"},r.createElement(a.L,null)),r.createElement("button",{className:"timeline-zoomout-button",onClick:function(){n.current.zoomOut(.7)},"aria-label":"zoom out"},r.createElement(c.u,null)))),t.events.map((function(t,n){return r.createElement("div",{id:"s-"+n,className:"timeline-story-element",key:n},r.createElement("div",{style:{borderTop:"2px solid var(--"+t.color+")",width:"3rem"}}),r.createElement("div",{className:"timeline-story-element-title"},r.createElement("span",{style:{color:"var(--"+t.color+")"}},"●")," ",r.createElement("span",null,t.title)),r.createElement("div",{className:"timeline-story-element-group"},r.createElement("span",null,e.get(t.group))),r.createElement("div",{className:"timeline-story-element-timestamp"},t.start," ",t.end?" · "+t.end:null),r.createElement("div",{className:"timeline-story-element-description"},t.desription),r.createElement("div",{className:"timeline-story-element-link-list"},"Links:",r.createElement("div",{style:{width:"1rem"}}),t.links.map((function(t,e){return r.createElement("div",{className:"timeline-story-element-link",key:e},r.createElement("a",{href:t,target:"_blank",rel:"noreferrer"},new URL(t).hostname))}))))})))}}}]);
//# sourceMappingURL=c4a2f0d08581d57bb704c9994680187a51d35bf6-e8fc04d5d6a199c42816.js.map
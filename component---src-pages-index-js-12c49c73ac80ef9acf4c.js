(self.webpackChunkzzzgin_github_io=self.webpackChunkzzzgin_github_io||[]).push([[678],{6867:function(e,t,i){"use strict";var r=i(7225),a=r.Nothing,n=r.isNothing,l="undefined"!=typeof window?window:a,c="undefined"!=typeof document?document:a;e.exports.u9=l,e.exports.tj=c},7225:function(e,t,i){"use strict";i.r(t),i.d(t,{Nothing:function(){return a},deserialize:function(){return o},isNothing:function(){return l},isSomething:function(){return c},serialize:function(){return s},toBool:function(){return n}});var r,a=((r=function(){return a}).toString=r.toLocaleString=r[Symbol.toPrimitive]=function(){return""},r.valueOf=function(){return!1},new Proxy(Object.freeze(r),{get:function(e,t){return e.hasOwnProperty(t)?e[t]:a}})),n=function(e){return!(!e||!e.valueOf())},l=function(e){return e===a},c=function(e){return!(e===a||null==e)},s=function(e){return JSON.stringify(e,(function(e,t){return t===a?null:t}))},o=function(e){return JSON.parse(e,(function(e,t){return null===t?a:t}))}},3380:function(e,t,i){"use strict";i.d(t,{qg:function(){return r.qg},TY:function(){return r.TY}});var r=i(5367)},1223:function(e,t,i){var r=i(5112),a=i(30),n=i(3070),l=r("unscopables"),c=Array.prototype;null==c[l]&&n.f(c,l,{configurable:!0,value:a(null)}),e.exports=function(e){c[l][e]=!0}},7475:function(e,t,i){var r=i(7854),a=i(3157),n=i(4411),l=i(111),c=i(5112)("species"),s=r.Array;e.exports=function(e){var t;return a(e)&&(t=e.constructor,(n(t)&&(t===s||a(t.prototype))||l(t)&&null===(t=t[c]))&&(t=void 0)),void 0===t?s:t}},5417:function(e,t,i){var r=i(7475);e.exports=function(e,t){return new(r(e))(0===t?0:t)}},648:function(e,t,i){var r=i(7854),a=i(1694),n=i(614),l=i(4326),c=i(5112)("toStringTag"),s=r.Object,o="Arguments"==l(function(){return arguments}());e.exports=a?l:function(e){var t,i,r;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(i=function(e,t){try{return e[t]}catch(i){}}(t=s(e),c))?i:o?l(t):"Object"==(r=l(t))&&n(t.callee)?"Arguments":r}},6790:function(e,t,i){"use strict";var r=i(7854),a=i(3157),n=i(6244),l=i(9974),c=r.TypeError,s=function(e,t,i,r,o,I,g,m){for(var u,j,N=o,d=0,f=!!g&&l(g,m);d<r;){if(d in i){if(u=f?f(i[d],d,t):i[d],I>0&&a(u))j=n(u),N=s(e,t,u,j,N,I-1)-1;else{if(N>=9007199254740991)throw c("Exceed the acceptable array length");e[N]=u}N++}d++}return N};e.exports=s},9974:function(e,t,i){var r=i(1702),a=i(9662),n=i(4374),l=r(r.bind);e.exports=function(e,t){return a(e),void 0===t?e:n?l(e,t):function(){return e.apply(t,arguments)}}},647:function(e,t,i){var r=i(1702),a=i(7908),n=Math.floor,l=r("".charAt),c=r("".replace),s=r("".slice),o=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,I=/\$([$&'`]|\d{1,2})/g;e.exports=function(e,t,i,r,g,m){var u=i+e.length,j=r.length,N=I;return void 0!==g&&(g=a(g),N=o),c(m,N,(function(a,c){var o;switch(l(c,0)){case"$":return"$";case"&":return e;case"`":return s(t,0,i);case"'":return s(t,u);case"<":o=g[s(c,1,-1)];break;default:var I=+c;if(0===I)return a;if(I>j){var m=n(I/10);return 0===m?a:m<=j?void 0===r[m-1]?l(c,1):r[m-1]+l(c,1):a}o=r[I-1]}return void 0===o?"":o}))}},490:function(e,t,i){var r=i(5005);e.exports=r("document","documentElement")},3157:function(e,t,i){var r=i(4326);e.exports=Array.isArray||function(e){return"Array"==r(e)}},4411:function(e,t,i){var r=i(1702),a=i(7293),n=i(614),l=i(648),c=i(5005),s=i(2788),o=function(){},I=[],g=c("Reflect","construct"),m=/^\s*(?:class|function)\b/,u=r(m.exec),j=!m.exec(o),N=function(e){if(!n(e))return!1;try{return g(o,I,e),!0}catch(t){return!1}},d=function(e){if(!n(e))return!1;switch(l(e)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}try{return j||!!u(m,s(e))}catch(t){return!0}};d.sham=!0,e.exports=!g||a((function(){var e;return N(N.call)||!N(Object)||!N((function(){e=!0}))||e}))?d:N},7850:function(e,t,i){var r=i(111),a=i(4326),n=i(5112)("match");e.exports=function(e){var t;return r(e)&&(void 0!==(t=e[n])?!!t:"RegExp"==a(e))}},30:function(e,t,i){var r,a=i(9670),n=i(6048),l=i(748),c=i(3501),s=i(490),o=i(317),I=i(6200),g=I("IE_PROTO"),m=function(){},u=function(e){return"<script>"+e+"</"+"script>"},j=function(e){e.write(u("")),e.close();var t=e.parentWindow.Object;return e=null,t},N=function(){try{r=new ActiveXObject("htmlfile")}catch(a){}var e,t;N="undefined"!=typeof document?document.domain&&r?j(r):((t=o("iframe")).style.display="none",s.appendChild(t),t.src=String("javascript:"),(e=t.contentWindow.document).open(),e.write(u("document.F=Object")),e.close(),e.F):j(r);for(var i=l.length;i--;)delete N.prototype[l[i]];return N()};c[g]=!0,e.exports=Object.create||function(e,t){var i;return null!==e?(m.prototype=a(e),i=new m,m.prototype=null,i[g]=e):i=N(),void 0===t?i:n.f(i,t)}},6048:function(e,t,i){var r=i(9781),a=i(3353),n=i(3070),l=i(9670),c=i(5656),s=i(1956);t.f=r&&!a?Object.defineProperties:function(e,t){l(e);for(var i,r=c(t),a=s(t),o=a.length,I=0;o>I;)n.f(e,i=a[I++],r[i]);return e}},1956:function(e,t,i){var r=i(6324),a=i(748);e.exports=Object.keys||function(e){return r(e,a)}},7066:function(e,t,i){"use strict";var r=i(9670);e.exports=function(){var e=r(this),t="";return e.hasIndices&&(t+="d"),e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}},4706:function(e,t,i){var r=i(6916),a=i(2597),n=i(7976),l=i(7066),c=RegExp.prototype;e.exports=function(e){var t=e.flags;return void 0!==t||"flags"in c||a(e,"flags")||!n(c,e)?t:r(l,e)}},365:function(e,t,i){"use strict";var r=i(3111).end,a=i(6091);e.exports=a("trimEnd")?function(){return r(this)}:"".trimEnd},6091:function(e,t,i){var r=i(6530).PROPER,a=i(7293),n=i(1361);e.exports=function(e){return a((function(){return!!n[e]()||"​᠎"!=="​᠎"[e]()||r&&n[e].name!==e}))}},3111:function(e,t,i){var r=i(1702),a=i(4488),n=i(1340),l=i(1361),c=r("".replace),s="["+l+"]",o=RegExp("^"+s+s+"*"),I=RegExp(s+s+"*$"),g=function(e){return function(t){var i=n(a(t));return 1&e&&(i=c(i,o,"")),2&e&&(i=c(i,I,"")),i}};e.exports={start:g(1),end:g(2),trim:g(3)}},1694:function(e,t,i){var r={};r[i(5112)("toStringTag")]="z",e.exports="[object z]"===String(r)},1340:function(e,t,i){var r=i(7854),a=i(648),n=r.String;e.exports=function(e){if("Symbol"===a(e))throw TypeError("Cannot convert a Symbol value to a string");return n(e)}},1361:function(e){e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},6535:function(e,t,i){"use strict";var r=i(2109),a=i(6790),n=i(9662),l=i(7908),c=i(6244),s=i(5417);r({target:"Array",proto:!0},{flatMap:function(e){var t,i=l(this),r=c(i);return n(e),(t=s(i,0)).length=a(t,i,i,r,0,1,e,arguments.length>1?arguments[1]:void 0),t}})},9244:function(e,t,i){i(1223)("flatMap")},5837:function(e,t,i){i(2109)({global:!0},{globalThis:i(7854)})},8757:function(e,t,i){"use strict";var r=i(2109),a=i(7854),n=i(6916),l=i(1702),c=i(4488),s=i(614),o=i(7850),I=i(1340),g=i(8173),m=i(4706),u=i(647),j=i(5112),N=i(1913),d=j("replace"),f=a.TypeError,p=l("".indexOf),h=l("".replace),y=l("".slice),v=Math.max,M=function(e,t,i){return i>e.length?-1:""===t?i:p(e,t,i)};r({target:"String",proto:!0},{replaceAll:function(e,t){var i,r,a,l,j,E,Y,x,z,S=c(this),P=0,G=0,w="";if(null!=e){if((i=o(e))&&(r=I(c(m(e))),!~p(r,"g")))throw f("`.replaceAll` does not allow non-global regexes");if(a=g(e,d))return n(a,e,S,t);if(N&&i)return h(I(S),e,t)}for(l=I(S),j=I(e),(E=s(t))||(t=I(t)),Y=j.length,x=v(1,Y),P=M(l,j,0);-1!==P;)z=E?I(t(j,P,l)):u(j,l,P,[],void 0,t),w+=y(l,G,P)+z,G=P+Y,P=M(l,j,P+x);return G<l.length&&(w+=y(l,G)),w}})},8702:function(e,t,i){i(3462);var r=i(2109),a=i(365);r({target:"String",proto:!0,name:"trimEnd",forced:"".trimEnd!==a},{trimEnd:a})},3462:function(e,t,i){var r=i(2109),a=i(365);r({target:"String",proto:!0,name:"trimEnd",forced:"".trimRight!==a},{trimRight:a})},5743:function(e,t,i){i(5837)},7207:function(e,t,i){i(8757)},8898:function(e,t,i){"use strict";var r=i(7294),a=i(7956),n=i(6867),l=i(22),c=i.n(l);t.Z=function(){var e=r.useRef(null),t=r.useState(0),i=t[0],l=t[1];return(0,r.useEffect)((function(){e.current=a.Z.timeline({targets:".logo-parts",loop:!0,delay:function(e,t){return 10*t+a.Z.random(0,300)},easing:"spring(1, 100, 10, 20)",duration:1e3,direction:"reverse"}).add({scale:[0,1],endDelay:5e3}).add({scale:.8,translateX:function(e,t){return a.Z.random(-5,5)},translateY:function(e,t){return a.Z.random(-10,10)}}).add({scale:1,translateX:function(e,t){return a.Z.random(-50,50)},translateY:function(e,t){return a.Z.random(-100,100)}}).add({scale:.8,translateX:function(e,t){return a.Z.random(-450,450)},translateY:function(e,t){return a.Z.random(-900,900)}}).add({scale:1,translateX:function(e,t){return a.Z.random(-900,900)},translateY:function(e,t){return a.Z.random(-1800,1800)}}).add({scale:0,translateX:function(e,t){return a.Z.random(-1200,1200)},translateY:function(e,t){return a.Z.random(-2400,2400)}}),setInterval((function(){for(var e,t,i,r,a=n.tj.getElementsByClassName("center"),c=0,s=0;s<a.length;s++)c+=(e=a[s],t=void 0,i=void 0,r=void 0,t=n.u9.getComputedStyle(e),i=new DOMMatrixReadOnly(t.transform),r=-e.offsetWidth/2,Math.sqrt(Math.pow(i.m41-r,2)+Math.pow(i.m42-r,2)));l(c)}),10)}),[]),r.createElement(r.Fragment,null,r.createElement("div",{className:"zzginLogoAnimation"},r.createElement("div",{className:"circle-container"},r.createElement("div",{className:"circle void",style:{width:"100.0%",height:"100.0%",left:"50.0%",top:"50.0%",transform:"translate(-50%, -50%)"}}),r.createElement("div",{className:"circle redgreenblue logo-parts center",style:{width:"11.358473%",height:"11.358473%",left:"50%",top:"50%",transform:"translate(-50%, -50%)"}}),r.createElement("div",{className:"circle red logo-parts",style:{width:"10.79054975%",height:"10.79054975%",left:"59.83643798%",top:"44.32076329%",transform:"translate(-50%, -50%)"}}),r.createElement("div",{className:"circle green logo-parts",style:{width:"10.790549750%",height:"10.790549750%",left:"40.163562017%",top:"44.320763289%",transform:"translate(-50%, -50%)"}}),r.createElement("div",{className:"circle blue logo-parts",style:{width:"10.790549750%",height:"10.790549750%",left:"50.0%",top:"61.358473421%",transform:"translate(-50%, -50%)"}}),r.createElement("div",{className:"circle red logo-parts",style:{width:"10.222626079%",height:"10.222626079%",left:"69.672875965%",top:"38.641526578%",transform:"translate(-50%, -50%)"}}),r.createElement("div",{className:"circle green logo-parts",style:{width:"10.222626079%",height:"10.222626079%",left:"30.327124034%",top:"38.641526578%",transform:"translate(-50%, -50%)"}}),r.createElement("div",{className:"circle blue logo-parts",style:{width:"10.222626079%",height:"10.222626079%",left:"50.0%",top:"72.716946842%",transform:"translate(-50%, -50%)"}}),r.createElement("div",{className:"circle red logo-parts",style:{width:"9.6547024079%",height:"9.6547024079%",left:"79.509313948%",top:"32.962289868%",transform:"translate(-50%, -50%)"}}),r.createElement("div",{className:"circle green logo-parts",style:{width:"9.6547024079%",height:"9.6547024079%",left:"20.490686051%",top:"32.962289868%",transform:"translate(-50%, -50%)"}}),r.createElement("div",{className:"circle blue logo-parts",style:{width:"9.6547024079%",height:"9.6547024079%",left:"50.0%",top:"84.075420263%",transform:"translate(-50%, -50%)"}}),r.createElement("div",{className:"circle redgreen logo-parts",style:{width:"9.1322126306%",height:"9.1322126306%",left:"89.345751930%",top:"27.283053157%",transform:"translate(-50%, -50%)"}}),r.createElement("div",{className:"circle greenblue logo-parts",style:{width:"9.1322126306%",height:"9.1322126306%",left:"10.654248069%",top:"27.283053157%",transform:"translate(-50%, -50%)"}}),r.createElement("div",{className:"circle redblue logo-parts",style:{width:"9.1322126306%",height:"9.1322126306%",left:"50.0%",top:"95.433893684%",transform:"translate(-50%, -50%)"}}),r.createElement("div",{className:"circle red logo-parts",style:{width:"8.5188550658%",height:"8.5188550658%",left:"79.509313948%",top:"21.603816447%",transform:"translate(-50%, -50%)"}}),r.createElement("div",{className:"circle green logo-parts",style:{width:"8.5188550658%",height:"8.5188550658%",left:"89.345751930%",top:"38.641526578%",transform:"translate(-50%, -50%)"}}),r.createElement("div",{className:"circle green logo-parts",style:{width:"8.5188550658%",height:"8.5188550658%",left:"10.654248069%",top:"38.641526578%",transform:"translate(-50%, -50%)"}}),r.createElement("div",{className:"circle blue logo-parts",style:{width:"8.5188550658%",height:"8.5188550658%",left:"20.467969104%",top:"21.603816447%",transform:"translate(-50%, -50%)"}}),r.createElement("div",{className:"circle blue logo-parts",style:{width:"8.5188550658%",height:"8.5188550658%",left:"59.836437982%",top:"89.754656974%",transform:"translate(-50%, -50%)"}}),r.createElement("div",{className:"circle red logo-parts",style:{width:"8.5188550658%",height:"8.5188550658%",left:"40.163562017%",top:"89.754656974%",transform:"translate(-50%, -50%)"}}),r.createElement("div",{className:"circle red logo-parts",style:{width:"7.9509313948%",height:"7.9509313948%",left:"69.672875965%",top:"15.924579736%",transform:"translate(-50%, -50%)"}}),r.createElement("div",{className:"circle green logo-parts",style:{width:"7.9509313948%",height:"7.9509313948%",left:"89.345751930%",top:"50.0%",transform:"translate(-50%, -50%)"}}),r.createElement("div",{className:"circle green logo-parts",style:{width:"7.9509313948%",height:"7.9509313948%",left:"10.654248069%",top:"50.0%",transform:"translate(-50%, -50%)"}}),r.createElement("div",{className:"circle blue logo-parts",style:{width:"7.9509313948%",height:"7.9509313948%",left:"30.304407087%",top:"15.924579736%",transform:"translate(-50%, -50%)"}}),r.createElement("div",{className:"circle blue logo-parts",style:{width:"7.9509313948%",height:"7.9509313948%",left:"69.672875965%",top:"84.075420263%",transform:"translate(-50%, -50%)"}}),r.createElement("div",{className:"circle red logo-parts",style:{width:"7.9509313948%",height:"7.9509313948%",left:"30.327124034%",top:"84.075420263%",transform:"translate(-50%, -50%)"}}),r.createElement("div",{className:"circle red logo-parts",style:{width:"7.3830077237%",height:"7.3830077237%",left:"59.836437982%",top:"10.245343025%",transform:"translate(-50%, -50%)"}}),r.createElement("div",{className:"circle green logo-parts",style:{width:"7.3830077237%",height:"7.3830077237%",left:"89.345751930%",top:"61.358473421%",transform:"translate(-50%, -50%)"}}),r.createElement("div",{className:"circle green logo-parts",style:{width:"7.3830077237%",height:"7.3830077237%",left:"10.654248069%",top:"61.358473421%",transform:"translate(-50%, -50%)"}}),r.createElement("div",{className:"circle blue logo-parts",style:{width:"7.3830077237%",height:"7.3830077237%",left:"40.140845070%",top:"10.245343025%",transform:"translate(-50%, -50%)"}}),r.createElement("div",{className:"circle blue logo-parts",style:{width:"7.3830077237%",height:"7.3830077237%",left:"79.509313948%",top:"78.396183552%",transform:"translate(-50%, -50%)"}}),r.createElement("div",{className:"circle red logo-parts",style:{width:"7.3830077237%",height:"7.3830077237%",left:"20.490686051%",top:"78.396183552%",transform:"translate(-50%, -50%)"}}),r.createElement("div",{className:"circle redblue logo-parts",style:{width:"6.8150840527%",height:"6.8150840527%",left:"50.0%",top:"4.5661063153%",transform:"translate(-50%, -50%)"}}),r.createElement("div",{className:"circle greenblue logo-parts",style:{width:"6.8150840527%",height:"6.8150840527%",left:"89.345751930%",top:"72.716946842%",transform:"translate(-50%, -50%)"}}),r.createElement("div",{className:"circle redgreen logo-parts",style:{width:"6.8150840527%",height:"6.8150840527%",left:"10.654248069%",top:"72.716946842%",transform:"translate(-50%, -50%)"}}),r.createElement("div",{className:"circle blue logo-parts",style:{width:"6.2471603816%",height:"6.2471603816%",left:"50.0%",top:"15.924579736%",transform:"translate(-50%, -50%)"}}),r.createElement("div",{className:"circle green logo-parts",style:{width:"6.2471603816%",height:"6.2471603816%",left:"79.509313948%",top:"67.037710131%",transform:"translate(-50%, -50%)"}}),r.createElement("div",{className:"circle red logo-parts",style:{width:"6.2471603816%",height:"6.2471603816%",left:"20.490686051%",top:"67.037710131%",transform:"translate(-50%, -50%)"}}),r.createElement("div",{className:"circle blue logo-parts",style:{width:"5.6792367105%",height:"5.6792367105%",left:"50.0%",top:"27.283053157%",transform:"translate(-50%, -50%)"}}),r.createElement("div",{className:"circle green logo-parts",style:{width:"5.1113130395%",height:"5.1113130395%",left:"69.672875965%",top:"61.358473421%",transform:"translate(-50%, -50%)"}}),r.createElement("div",{className:"circle red logo-parts",style:{width:"5.1113130395%",height:"5.1113130395%",left:"30.327124034%",top:"61.358473421%",transform:"translate(-50%, -50%)"}}),r.createElement("div",{className:"circle blue logo-parts",style:{width:"5.1113130395%",height:"5.1113130395%",left:"50.0%",top:"38.641526578%",transform:"translate(-50%, -50%)"}}),r.createElement("div",{className:"circle green logo-parts",style:{width:"4.5433893684%",height:"4.5433893684%",left:"59.836437982%",top:"55.679236710%",transform:"translate(-50%, -50%)"}}),r.createElement("div",{className:"circle red logo-parts",style:{width:"4.5433893684%",height:"4.5433893684%",left:"40.163562017%",top:"55.679236710%",transform:"translate(-50%, -50%)"}})),r.createElement("div",{className:"loss-number",dangerouslySetInnerHTML:{__html:c().renderToString("\\Delta:"+parseInt(i),{throwOnError:!1,displayMode:!0})}})))}},3372:function(e,t,i){"use strict";var r=i(7294),a=i(3380);t.Z=function(e){var t=JSON.parse(e.node.internal.content),i=r.useRef(null);return r.useEffect((function(){var r=t.groups.map((function(e){return{id:e.id,content:e.content}})),n=t.events.map((function(e,t){return{id:t,content:e.title,start:e.start,end:e.end?e.end:null,group:e.group,className:"item-"+e.color}})),l=document.getElementById("visualization-"+e.node.name),c=new a.qg(n),s=new a.qg(r),o=new Date,I=new Date,g={maxHeight:"400px",start:o.setDate(o.getDate()-20),end:I.setDate(I.getDate()),zoomable:!1,moveable:!1};return i.current=new a.TY(l,c,s,g),function(){i.current.destroy()}})),r.createElement(r.Fragment,null,r.createElement("a",{href:"/timeline/"+e.node.name},r.createElement("div",{className:"article-tile-container"},r.createElement("div",{className:"article-tile-top-wrapper"},r.createElement("div",{className:"article-tile-category"},"Timeline"),r.createElement("div",{className:"article-tile-date"},"Updated: ",e.node.modifiedTime.split("T")[0])),r.createElement("div",{className:"article-tile-title"},t.title),r.createElement("div",{id:"visualization-"+e.node.name}))))}},3559:function(e,t,i){"use strict";i(7207);var r=i(7294),a=i(8945),n=i(8777);t.Z=function(e){var t=e.edges;return r.createElement(r.Fragment,null,r.createElement("div",{className:"article-list-view"},t.map((function(e,t){return r.createElement("div",{className:"article-tile-container",key:t.toString()},r.createElement("div",{className:"article-tile-top-wrapper"},r.createElement("div",{className:"article-tile-category"},e.node.frontmatter.path.split("/")[1].charAt(0).toUpperCase()+e.node.frontmatter.path.split("/")[1].slice(1)),r.createElement("div",{className:"article-tile-date"},e.node.frontmatter.date)),r.createElement("a",{href:e.node.frontmatter.path},r.createElement("div",{className:"article-tile-title"},e.node.frontmatter.title)),r.createElement("div",{className:"article-tile-image-description-wrapper"},e.node.frontmatter.featuredimage&&r.createElement("a",{href:e.node.frontmatter.path},r.createElement(a.G,{image:e.node.frontmatter.featuredimage.childImageSharp.gatsbyImageData,alt:e.node.frontmatter.featuredimageAlt})),r.createElement("div",{className:"article-description-wrapper"},r.createElement("div",{className:"article-description-text"},e.node.frontmatter.description&&r.createElement("p",null,e.node.frontmatter.description)),r.createElement("div",{className:"article-description-tags"},e.node.frontmatter.tags&&e.node.frontmatter.tags.map((function(e){return r.createElement(n.Z,{text:e.trim().toLowerCase(),href:"/tags/"+e.trim().toLowerCase().replaceAll(" ","-")})}))))))}))))}},1949:function(e,t,i){"use strict";var r=i(7294),a=i(3874);t.Z=function(){return r.createElement(r.Fragment,null,r.createElement("div",{className:"footer"},r.createElement("div",{className:"footer-body"},r.createElement("div",{className:"footer-body-centered"},r.createElement("a",{href:"/"},r.createElement("img",{src:a.Z,alt:"home",style:{height:"2em"}})),r.createElement("div",{className:"footer-copyright"},"© 2022 Jing Qi's Blog")))))}},8777:function(e,t,i){"use strict";i.d(t,{Z:function(){return n}});var r=i(7294),a={blog:"red",readings:"orange","checkout dash b":"yellow",mymanual:"green",note:"blue",sandbox:"purple",private:"dark",timeline:"green"},n=function(e){var t=e.text,i=e.href,n=e.count,l=e.className;return r.createElement("a",{href:i},r.createElement("div",{className:l+" tag "+(t in a?"tag-"+a[t]:"")},t+(n?" ("+n+")":"")))}},3733:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return m}});var r=i(7294),a=i(5135),n=i(8898),l=i(5414),c=i(8945),s=i(3559),o=i(3372),I=i(8777),g=i(1949),m=function(e){return r.createElement(r.Fragment,null,r.createElement(l.q,{title:"zzz"}),r.createElement(a.Z,null),r.createElement("div",{className:"index-body"},r.createElement("div",{className:"zzz-logo-animation-container"},r.createElement(n.Z,null)),r.createElement("div",{className:"title-container shift-up-fifty-pixels"},r.createElement("div",{className:"zzz-container"},r.createElement("img",{src:"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDI5Ni4yMSAxNTQuNjciPjxkZWZzPjxzdHlsZT4uZHtmaWxsOiNlZjQ3NmY7fS5le2ZpbGw6IzExOGFiMjt9LmZ7ZmlsbDojMDZkNmEwO30uZ3tmaWxsOiMwY2IwYTk7fS5oe2ZpbGw6IzdiOGY4ODt9Lml7ZmlsbDpub25lO3N0cm9rZTojM2EzYTNhO3N0cm9rZS1taXRlcmxpbWl0OjEwO3N0cm9rZS13aWR0aDouMjVweDt9PC9zdHlsZT48L2RlZnM+PGcgaWQ9ImEiLz48ZyBpZD0iYiI+PGcgaWQ9ImMiPjxnPjxjaXJjbGUgY2xhc3M9ImciIGN4PSIyMDguMTciIGN5PSI4LjA2IiByPSI4LjA0Ii8+PGNpcmNsZSBjbGFzcz0iZiIgY3g9IjE5OC4xNyIgY3k9IjI1LjM4IiByPSI4LjA0Ii8+PGNpcmNsZSBjbGFzcz0iZiIgY3g9IjE3OC4xNyIgY3k9IjYwLjAyIiByPSI4LjA0Ii8+PGNpcmNsZSBjbGFzcz0iZiIgY3g9IjE4OC4xNyIgY3k9IjQyLjciIHI9IjguMDQiLz48Y2lyY2xlIGNsYXNzPSJmIiBjeD0iMTY4LjE3IiBjeT0iNzcuMzQiIHI9IjguMDQiLz48Y2lyY2xlIGNsYXNzPSJmIiBjeD0iMTU4LjE3IiBjeT0iOTQuNjYiIHI9IjguMDQiLz48Y2lyY2xlIGNsYXNzPSJmIiBjeD0iMTM4LjE3IiBjeT0iMTI5LjMxIiByPSI4LjA0Ii8+PGNpcmNsZSBjbGFzcz0iZiIgY3g9IjE0OC4xNyIgY3k9IjExMS45OCIgcj0iOC4wNCIvPjxjaXJjbGUgY2xhc3M9ImgiIGN4PSIxMjguMTciIGN5PSIxNDYuNjMiIHI9IjguMDQiLz48Y2lyY2xlIGNsYXNzPSJlIiBjeD0iMjQ4LjE3IiBjeT0iNzcuMzQiIHI9IjguMDQiLz48Y2lyY2xlIGNsYXNzPSJpIiBjeD0iMjI4LjE3IiBjeT0iNzcuMzQiIHI9IjguMDQiLz48Y2lyY2xlIGNsYXNzPSJpIiBjeD0iMTg4LjE3IiBjeT0iNzcuMzQiIHI9IjguMDQiLz48Y2lyY2xlIGNsYXNzPSJpIiBjeD0iMjA4LjE3IiBjeT0iNzcuMzQiIHI9IjguMDQiLz48Y2lyY2xlIGNsYXNzPSJpIiBjeD0iMTQ4LjE3IiBjeT0iNzcuMzQiIHI9IjguMDQiLz48Y2lyY2xlIGNsYXNzPSJpIiBjeD0iMTA4LjE3IiBjeT0iNzcuMzQiIHI9IjguMDQiLz48Y2lyY2xlIGNsYXNzPSJpIiBjeD0iMTI4LjE3IiBjeT0iNzcuMzQiIHI9IjguMDQiLz48Y2lyY2xlIGNsYXNzPSJkIiBjeD0iODguMTciIGN5PSI3Ny4zNCIgcj0iOC4wNCIvPjxjaXJjbGUgY2xhc3M9ImgiIGN4PSIxMjguMTciIGN5PSI4LjA2IiByPSI4LjA0Ii8+PGNpcmNsZSBjbGFzcz0iaSIgY3g9IjEzOC4xNyIgY3k9IjI1LjM4IiByPSI4LjA0Ii8+PGNpcmNsZSBjbGFzcz0iaSIgY3g9IjE1OC4xNyIgY3k9IjYwLjAyIiByPSI4LjA0Ii8+PGNpcmNsZSBjbGFzcz0iaSIgY3g9IjE0OC4xNyIgY3k9IjQyLjciIHI9IjguMDQiLz48Y2lyY2xlIGNsYXNzPSJpIiBjeD0iMTc4LjE3IiBjeT0iOTQuNjYiIHI9IjguMDQiLz48Y2lyY2xlIGNsYXNzPSJpIiBjeD0iMTk4LjE3IiBjeT0iMTI5LjMxIiByPSI4LjA0Ii8+PGNpcmNsZSBjbGFzcz0iaSIgY3g9IjE4OC4xNyIgY3k9IjExMS45OCIgcj0iOC4wNCIvPjxjaXJjbGUgY2xhc3M9ImciIGN4PSIyMDguMTciIGN5PSIxNDYuNjMiIHI9IjguMDQiLz48Y2lyY2xlIGNsYXNzPSJpIiBjeD0iMjE4LjE3IiBjeT0iMjUuMzgiIHI9IjguMDQiLz48Y2lyY2xlIGNsYXNzPSJpIiBjeD0iMjM4LjE3IiBjeT0iNjAuMDIiIHI9IjguMDQiLz48Y2lyY2xlIGNsYXNzPSJpIiBjeD0iMjI4LjE3IiBjeT0iNDIuNyIgcj0iOC4wNCIvPjxjaXJjbGUgY2xhc3M9ImkiIGN4PSI5OC4xNyIgY3k9Ijk0LjY2IiByPSI4LjA0Ii8+PGNpcmNsZSBjbGFzcz0iaSIgY3g9IjExOC4xNyIgY3k9IjEyOS4zMSIgcj0iOC4wNCIvPjxjaXJjbGUgY2xhc3M9ImkiIGN4PSIxMDguMTciIGN5PSIxMTEuOTgiIHI9IjguMDQiLz48Y2lyY2xlIGNsYXNzPSJmIiBjeD0iMTg4LjEzIiBjeT0iOC4wNCIgcj0iOC4wNCIvPjxjaXJjbGUgY2xhc3M9ImYiIGN4PSIxNDguMTMiIGN5PSI4LjA0IiByPSI4LjA0Ii8+PGNpcmNsZSBjbGFzcz0iZiIgY3g9IjE2OC4xMyIgY3k9IjguMDQiIHI9IjguMDQiLz48Y2lyY2xlIGNsYXNzPSJmIiBjeD0iMTg4LjE3IiBjeT0iMTQ2LjYzIiByPSI4LjA0Ii8+PGNpcmNsZSBjbGFzcz0iZiIgY3g9IjE0OC4xNyIgY3k9IjE0Ni42MyIgcj0iOC4wNCIvPjxjaXJjbGUgY2xhc3M9ImYiIGN4PSIxNjguMTciIGN5PSIxNDYuNjMiIHI9IjguMDQiLz48Y2lyY2xlIGNsYXNzPSJkIiBjeD0iMTE4LjE3IiBjeT0iMjUuMzgiIHI9IjguMDQiLz48Y2lyY2xlIGNsYXNzPSJkIiBjeD0iOTguMTciIGN5PSI2MC4wMiIgcj0iOC4wNCIvPjxjaXJjbGUgY2xhc3M9ImQiIGN4PSIxMDguMTciIGN5PSI0Mi43IiByPSI4LjA0Ii8+PGNpcmNsZSBjbGFzcz0iZSIgY3g9IjIzOC4xNyIgY3k9Ijk0LjY2IiByPSI4LjA0Ii8+PGNpcmNsZSBjbGFzcz0iZSIgY3g9IjIxOC4xNyIgY3k9IjEyOS4zMSIgcj0iOC4wNCIvPjxjaXJjbGUgY2xhc3M9ImUiIGN4PSIyMjguMTciIGN5PSIxMTEuOTgiIHI9IjguMDQiLz48Y2lyY2xlIGNsYXNzPSJlIiBjeD0iMjg4LjE3IiBjeT0iOC4wNiIgcj0iOC4wNCIvPjxjaXJjbGUgY2xhc3M9ImUiIGN4PSIyNjguMTciIGN5PSI4LjA2IiByPSI4LjA0Ii8+PGNpcmNsZSBjbGFzcz0iZSIgY3g9IjIyOC4xNyIgY3k9IjguMDYiIHI9IjguMDQiLz48Y2lyY2xlIGNsYXNzPSJlIiBjeD0iMjQ4LjE3IiBjeT0iOC4wNiIgcj0iOC4wNCIvPjxjaXJjbGUgY2xhc3M9ImUiIGN4PSIyNzguMTciIGN5PSIyNS4zOCIgcj0iOC4wNCIvPjxjaXJjbGUgY2xhc3M9ImUiIGN4PSIyNTguMTciIGN5PSI2MC4wMiIgcj0iOC4wNCIvPjxjaXJjbGUgY2xhc3M9ImUiIGN4PSIyNjguMTciIGN5PSI0Mi43IiByPSI4LjA0Ii8+PGNpcmNsZSBjbGFzcz0iZSIgY3g9IjI4OC4xNyIgY3k9IjE0Ni42MyIgcj0iOC4wNCIvPjxjaXJjbGUgY2xhc3M9ImUiIGN4PSIyNjguMTciIGN5PSIxNDYuNjMiIHI9IjguMDQiLz48Y2lyY2xlIGNsYXNzPSJlIiBjeD0iMjI4LjE3IiBjeT0iMTQ2LjYzIiByPSI4LjA0Ii8+PGNpcmNsZSBjbGFzcz0iZSIgY3g9IjI0OC4xNyIgY3k9IjE0Ni42MyIgcj0iOC4wNCIvPjxjaXJjbGUgY2xhc3M9ImkiIGN4PSIyNTguMTciIGN5PSI5NC42NiIgcj0iOC4wNCIvPjxjaXJjbGUgY2xhc3M9ImkiIGN4PSIyNzguMTciIGN5PSIxMjkuMzEiIHI9IjguMDQiLz48Y2lyY2xlIGNsYXNzPSJpIiBjeD0iMjY4LjE3IiBjeT0iMTExLjk4IiByPSI4LjA0Ii8+PGNpcmNsZSBjbGFzcz0iZCIgY3g9Ijc4LjE3IiBjeT0iOTQuNjYiIHI9IjguMDQiLz48Y2lyY2xlIGNsYXNzPSJkIiBjeD0iNTguMTciIGN5PSIxMjkuMzEiIHI9IjguMDQiLz48Y2lyY2xlIGNsYXNzPSJkIiBjeD0iNjguMTciIGN5PSIxMTEuOTgiIHI9IjguMDQiLz48Y2lyY2xlIGNsYXNzPSJkIiBjeD0iNDguMTciIGN5PSIxNDYuNjMiIHI9IjguMDQiLz48Y2lyY2xlIGNsYXNzPSJpIiBjeD0iNjguMTciIGN5PSI3Ny4zNCIgcj0iOC4wNCIvPjxjaXJjbGUgY2xhc3M9ImkiIGN4PSIyOC4xNyIgY3k9Ijc3LjM0IiByPSI4LjA0Ii8+PGNpcmNsZSBjbGFzcz0iaSIgY3g9IjQ4LjE3IiBjeT0iNzcuMzQiIHI9IjguMDQiLz48Y2lyY2xlIGNsYXNzPSJpIiBjeD0iOC4xNyIgY3k9Ijc3LjM0IiByPSI4LjA0Ii8+PGNpcmNsZSBjbGFzcz0iZCIgY3g9IjQ4LjE3IiBjeT0iOC4wNiIgcj0iOC4wNCIvPjxjaXJjbGUgY2xhc3M9ImkiIGN4PSI1OC4xNyIgY3k9IjI1LjM4IiByPSI4LjA0Ii8+PGNpcmNsZSBjbGFzcz0iaSIgY3g9Ijc4LjE3IiBjeT0iNjAuMDIiIHI9IjguMDQiLz48Y2lyY2xlIGNsYXNzPSJpIiBjeD0iNjguMTciIGN5PSI0Mi43IiByPSI4LjA0Ii8+PGNpcmNsZSBjbGFzcz0iaSIgY3g9IjE4LjE3IiBjeT0iOTQuNjYiIHI9IjguMDQiLz48Y2lyY2xlIGNsYXNzPSJpIiBjeD0iMzguMTciIGN5PSIxMjkuMzEiIHI9IjguMDQiLz48Y2lyY2xlIGNsYXNzPSJpIiBjeD0iMjguMTciIGN5PSIxMTEuOTgiIHI9IjguMDQiLz48Y2lyY2xlIGNsYXNzPSJkIiBjeD0iMTA4LjEzIiBjeT0iOC4wNCIgcj0iOC4wNCIvPjxjaXJjbGUgY2xhc3M9ImQiIGN4PSI2OC4xMyIgY3k9IjguMDQiIHI9IjguMDQiLz48Y2lyY2xlIGNsYXNzPSJkIiBjeD0iODguMTMiIGN5PSI4LjA0IiByPSI4LjA0Ii8+PGNpcmNsZSBjbGFzcz0iZCIgY3g9IjEwOC4xNyIgY3k9IjE0Ni42MyIgcj0iOC4wNCIvPjxjaXJjbGUgY2xhc3M9ImQiIGN4PSI2OC4xNyIgY3k9IjE0Ni42MyIgcj0iOC4wNCIvPjxjaXJjbGUgY2xhc3M9ImQiIGN4PSI4OC4xNyIgY3k9IjE0Ni42MyIgcj0iOC4wNCIvPjxjaXJjbGUgY2xhc3M9ImkiIGN4PSIzOC4xNyIgY3k9IjI1LjM4IiByPSI4LjA0Ii8+PGNpcmNsZSBjbGFzcz0iaSIgY3g9IjE4LjE3IiBjeT0iNjAuMDIiIHI9IjguMDQiLz48Y2lyY2xlIGNsYXNzPSJpIiBjeD0iMjguMTciIGN5PSI0Mi43IiByPSI4LjA0Ii8+PC9nPjwvZz48L2c+PC9zdmc+",alt:"zzz"}),"cubic z"),r.createElement("div",{className:"slogan-container"},r.createElement("div",{className:"slogan"},"Sorting Backwards"))),r.createElement("div",{className:"self-introduction shift-up-fifty-pixels"},r.createElement("div",{className:"selfie"},r.createElement(c.S,{src:"../images/selfie.jpeg",alt:"selfie",imgStyle:{borderRadius:"100%"},placeholder:"none",__imageData:i(2974)})),r.createElement("div",{className:"jing"},"qí",r.createElement("span",{style:{display:"inline-block",width:"min(6vw, 60px)"}}),"jìng"),r.createElement("div",{className:"hello"},"Hi, I'm 齐靖"),r.createElement("div",{className:"occupation"},"A ",r.createElement("span",{style:{color:"var(--red)",fontWeight:"bold"}},"Software Developer")," • ",r.createElement("span",{style:{color:"var(--green)",fontWeight:"bold"}},"Engineer")," • ",r.createElement("span",{style:{color:"var(--blue)",fontWeight:"bold"}},"Designer")),r.createElement("div",{className:"living"},"Born in Wuxi, now based in Seattle"),r.createElement("div",{className:"call"},"Call me Jing, pronounced like ",r.createElement("span",{style:{fontStyle:"italic"}},"Gin"))),r.createElement("div",{className:"feed-section-title"},r.createElement("span",{className:"feed-section-title-text",style:{color:"var(--red)"}},"●"),r.createElement("span",{className:"feed-section-title-text"},"Articles"),r.createElement("span",{className:"feed-section-tag-container"},r.createElement(I.Z,{text:"blog",href:"/tags/blog",className:"feed-section-tag"}),r.createElement(I.Z,{text:"readings",href:"/tags/readings",className:"feed-section-tag"}))),r.createElement(s.Z,{edges:e.data.allMarkdownRemark.edges}),r.createElement("div",{className:"feed-section-title"},r.createElement("span",{className:"feed-section-title-text",style:{color:"var(--green)"}},"●"),r.createElement("span",{className:"feed-section-title-text"},"Timelines"),r.createElement("span",{className:"feed-section-tag-container"},r.createElement(I.Z,{text:"timeline",href:"/tags/timeline",className:"feed-section-tag"}))),e.data.allFile.edges.map((function(e){return r.createElement(o.Z,{node:e.node})}))),r.createElement(g.Z,null))}},2974:function(e){"use strict";e.exports=JSON.parse('{"layout":"constrained","images":{"fallback":{"src":"/static/e280ea0fdfb89ad7c41e26c2a081ad23/f131b/selfie.jpg","srcSet":"/static/e280ea0fdfb89ad7c41e26c2a081ad23/12d03/selfie.jpg 443w,\\n/static/e280ea0fdfb89ad7c41e26c2a081ad23/de6ab/selfie.jpg 887w,\\n/static/e280ea0fdfb89ad7c41e26c2a081ad23/f131b/selfie.jpg 1773w","sizes":"(min-width: 1773px) 1773px, 100vw"},"sources":[{"srcSet":"/static/e280ea0fdfb89ad7c41e26c2a081ad23/0de6d/selfie.webp 443w,\\n/static/e280ea0fdfb89ad7c41e26c2a081ad23/13156/selfie.webp 887w,\\n/static/e280ea0fdfb89ad7c41e26c2a081ad23/d4dd6/selfie.webp 1773w","type":"image/webp","sizes":"(min-width: 1773px) 1773px, 100vw"}]},"width":1773,"height":1773}')}}]);
//# sourceMappingURL=component---src-pages-index-js-12c49c73ac80ef9acf4c.js.map
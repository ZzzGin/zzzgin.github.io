"use strict";(self.webpackChunkzzzgin_github_io=self.webpackChunkzzzgin_github_io||[]).push([[678],{6867:function(e,t,i){var a=i(7225),l=a.Nothing,r=a.isNothing,I="undefined"!=typeof window?window:l,n="undefined"!=typeof document?document:l;e.exports.u9=I,e.exports.tj=n},7225:function(e,t,i){i.r(t),i.d(t,{Nothing:function(){return l},deserialize:function(){return s},isNothing:function(){return I},isSomething:function(){return n},serialize:function(){return c},toBool:function(){return r}});var a,l=((a=function(){return l}).toString=a.toLocaleString=a[Symbol.toPrimitive]=function(){return""},a.valueOf=function(){return!1},new Proxy(Object.freeze(a),{get:function(e,t){return e.hasOwnProperty(t)?e[t]:l}})),r=function(e){return!(!e||!e.valueOf())},I=function(e){return e===l},n=function(e){return!(e===l||null==e)},c=function(e){return JSON.stringify(e,(function(e,t){return t===l?null:t}))},s=function(e){return JSON.parse(e,(function(e,t){return null===t?l:t}))}},4514:function(e,t,i){i.d(t,{Z:function(){return c}});var a=i(7294);var l="undefined"!=typeof window,r=function(e){(0,a.useEffect)(e,[])},I=function(e){var t=(0,a.useRef)(e);t.current=e,r((function(){return function(){return t.current()}}))},n=function(e){var t=(0,a.useRef)(0),i=(0,a.useState)(e),l=i[0],r=i[1],n=(0,a.useCallback)((function(e){cancelAnimationFrame(t.current),t.current=requestAnimationFrame((function(){r(e)}))}),[]);return I((function(){cancelAnimationFrame(t.current)})),[l,n]},c=function(){var e=n((function(){return{x:l?window.pageXOffset:0,y:l?window.pageYOffset:0}})),t=e[0],i=e[1];return(0,a.useEffect)((function(){var e=function(){i((function(e){var t=window.pageXOffset,i=window.pageYOffset;return e.x!==t||e.y!==i?{x:t,y:i}:e}))};return e(),function(e){for(var t=[],i=1;i<arguments.length;i++)t[i-1]=arguments[i];e&&e.addEventListener&&e.addEventListener.apply(e,t)}(window,"scroll",e,{capture:!1,passive:!0}),function(){!function(e){for(var t=[],i=1;i<arguments.length;i++)t[i-1]=arguments[i];e&&e.removeEventListener&&e.removeEventListener.apply(e,t)}(window,"scroll",e)}}),[]),t}},8898:function(e,t,i){var a=i(7294),l=i(7956),r=i(6867),I=i(22),n=i.n(I);t.Z=function(){var e=a.useRef(null),t=a.useState(0),i=t[0],I=t[1];return(0,a.useEffect)((function(){e.current=l.Z.timeline({targets:".logo-parts",loop:!0,delay:function(e,t){return 10*t+l.Z.random(0,300)},easing:"spring(1, 100, 10, 20)",duration:1e3,direction:"reverse"}).add({scale:[0,1],endDelay:3e3}).add({scale:.8,translateX:function(e,t){return l.Z.random(-5,5)},translateY:function(e,t){return l.Z.random(-10,10)}}).add({scale:1,translateX:function(e,t){return l.Z.random(-10,10)},translateY:function(e,t){return l.Z.random(-20,20)}}).add({scale:.8,translateX:function(e,t){return l.Z.random(-50,50)},translateY:function(e,t){return l.Z.random(-100,100)}}).add({scale:1,translateX:function(e,t){return l.Z.random(-100,100)},translateY:function(e,t){return l.Z.random(-200,200)}}).add({scale:.8,translateX:function(e,t){return l.Z.random(-200,200)},translateY:function(e,t){return l.Z.random(-450,450)}}).add({scale:1,translateX:function(e,t){return l.Z.random(-450,450)},translateY:function(e,t){return l.Z.random(-900,900)}}).add({scale:.8,translateX:function(e,t){return l.Z.random(-900,900)},translateY:function(e,t){return l.Z.random(-1800,1800)}}).add({scale:0,translateX:function(e,t){return l.Z.random(-1200,1200)},translateY:function(e,t){return l.Z.random(-2400,2400)}}),setInterval((function(){for(var e,t,i,a,l=r.tj.getElementsByClassName("center"),n=0,c=0;c<l.length;c++)n+=(e=l[c],t=void 0,i=void 0,a=void 0,t=r.u9.getComputedStyle(e),i=new DOMMatrixReadOnly(t.transform),a=-e.offsetWidth/2,Math.sqrt(Math.pow(i.m41-a,2)+Math.pow(i.m42-a,2)));I(n)}),10)}),[]),a.createElement(a.Fragment,null,a.createElement("div",{className:"zzginLogoAnimation"},a.createElement("div",{className:"circle-container"},a.createElement("div",{className:"circle void",style:{width:"100.0%",height:"100.0%",left:"50.0%",top:"50.0%",transform:"translate(-50%, -50%)"}}),a.createElement("div",{className:"circle redgreenblue logo-parts center",style:{width:"11.358473%",height:"11.358473%",left:"50%",top:"50%",transform:"translate(-50%, -50%)"}}),a.createElement("div",{className:"circle red logo-parts",style:{width:"10.79054975%",height:"10.79054975%",left:"59.83643798%",top:"44.32076329%",transform:"translate(-50%, -50%)"}}),a.createElement("div",{className:"circle green logo-parts",style:{width:"10.790549750%",height:"10.790549750%",left:"40.163562017%",top:"44.320763289%",transform:"translate(-50%, -50%)"}}),a.createElement("div",{className:"circle blue logo-parts",style:{width:"10.790549750%",height:"10.790549750%",left:"50.0%",top:"61.358473421%",transform:"translate(-50%, -50%)"}}),a.createElement("div",{className:"circle red logo-parts",style:{width:"10.222626079%",height:"10.222626079%",left:"69.672875965%",top:"38.641526578%",transform:"translate(-50%, -50%)"}}),a.createElement("div",{className:"circle green logo-parts",style:{width:"10.222626079%",height:"10.222626079%",left:"30.327124034%",top:"38.641526578%",transform:"translate(-50%, -50%)"}}),a.createElement("div",{className:"circle blue logo-parts",style:{width:"10.222626079%",height:"10.222626079%",left:"50.0%",top:"72.716946842%",transform:"translate(-50%, -50%)"}}),a.createElement("div",{className:"circle red logo-parts",style:{width:"9.6547024079%",height:"9.6547024079%",left:"79.509313948%",top:"32.962289868%",transform:"translate(-50%, -50%)"}}),a.createElement("div",{className:"circle green logo-parts",style:{width:"9.6547024079%",height:"9.6547024079%",left:"20.490686051%",top:"32.962289868%",transform:"translate(-50%, -50%)"}}),a.createElement("div",{className:"circle blue logo-parts",style:{width:"9.6547024079%",height:"9.6547024079%",left:"50.0%",top:"84.075420263%",transform:"translate(-50%, -50%)"}}),a.createElement("div",{className:"circle redgreen logo-parts",style:{width:"9.1322126306%",height:"9.1322126306%",left:"89.345751930%",top:"27.283053157%",transform:"translate(-50%, -50%)"}}),a.createElement("div",{className:"circle greenblue logo-parts",style:{width:"9.1322126306%",height:"9.1322126306%",left:"10.654248069%",top:"27.283053157%",transform:"translate(-50%, -50%)"}}),a.createElement("div",{className:"circle redblue logo-parts",style:{width:"9.1322126306%",height:"9.1322126306%",left:"50.0%",top:"95.433893684%",transform:"translate(-50%, -50%)"}}),a.createElement("div",{className:"circle red logo-parts",style:{width:"8.5188550658%",height:"8.5188550658%",left:"79.509313948%",top:"21.603816447%",transform:"translate(-50%, -50%)"}}),a.createElement("div",{className:"circle green logo-parts",style:{width:"8.5188550658%",height:"8.5188550658%",left:"89.345751930%",top:"38.641526578%",transform:"translate(-50%, -50%)"}}),a.createElement("div",{className:"circle green logo-parts",style:{width:"8.5188550658%",height:"8.5188550658%",left:"10.654248069%",top:"38.641526578%",transform:"translate(-50%, -50%)"}}),a.createElement("div",{className:"circle blue logo-parts",style:{width:"8.5188550658%",height:"8.5188550658%",left:"20.467969104%",top:"21.603816447%",transform:"translate(-50%, -50%)"}}),a.createElement("div",{className:"circle blue logo-parts",style:{width:"8.5188550658%",height:"8.5188550658%",left:"59.836437982%",top:"89.754656974%",transform:"translate(-50%, -50%)"}}),a.createElement("div",{className:"circle red logo-parts",style:{width:"8.5188550658%",height:"8.5188550658%",left:"40.163562017%",top:"89.754656974%",transform:"translate(-50%, -50%)"}}),a.createElement("div",{className:"circle red logo-parts",style:{width:"7.9509313948%",height:"7.9509313948%",left:"69.672875965%",top:"15.924579736%",transform:"translate(-50%, -50%)"}}),a.createElement("div",{className:"circle green logo-parts",style:{width:"7.9509313948%",height:"7.9509313948%",left:"89.345751930%",top:"50.0%",transform:"translate(-50%, -50%)"}}),a.createElement("div",{className:"circle green logo-parts",style:{width:"7.9509313948%",height:"7.9509313948%",left:"10.654248069%",top:"50.0%",transform:"translate(-50%, -50%)"}}),a.createElement("div",{className:"circle blue logo-parts",style:{width:"7.9509313948%",height:"7.9509313948%",left:"30.304407087%",top:"15.924579736%",transform:"translate(-50%, -50%)"}}),a.createElement("div",{className:"circle blue logo-parts",style:{width:"7.9509313948%",height:"7.9509313948%",left:"69.672875965%",top:"84.075420263%",transform:"translate(-50%, -50%)"}}),a.createElement("div",{className:"circle red logo-parts",style:{width:"7.9509313948%",height:"7.9509313948%",left:"30.327124034%",top:"84.075420263%",transform:"translate(-50%, -50%)"}}),a.createElement("div",{className:"circle red logo-parts",style:{width:"7.3830077237%",height:"7.3830077237%",left:"59.836437982%",top:"10.245343025%",transform:"translate(-50%, -50%)"}}),a.createElement("div",{className:"circle green logo-parts",style:{width:"7.3830077237%",height:"7.3830077237%",left:"89.345751930%",top:"61.358473421%",transform:"translate(-50%, -50%)"}}),a.createElement("div",{className:"circle green logo-parts",style:{width:"7.3830077237%",height:"7.3830077237%",left:"10.654248069%",top:"61.358473421%",transform:"translate(-50%, -50%)"}}),a.createElement("div",{className:"circle blue logo-parts",style:{width:"7.3830077237%",height:"7.3830077237%",left:"40.140845070%",top:"10.245343025%",transform:"translate(-50%, -50%)"}}),a.createElement("div",{className:"circle blue logo-parts",style:{width:"7.3830077237%",height:"7.3830077237%",left:"79.509313948%",top:"78.396183552%",transform:"translate(-50%, -50%)"}}),a.createElement("div",{className:"circle red logo-parts",style:{width:"7.3830077237%",height:"7.3830077237%",left:"20.490686051%",top:"78.396183552%",transform:"translate(-50%, -50%)"}}),a.createElement("div",{className:"circle redblue logo-parts",style:{width:"6.8150840527%",height:"6.8150840527%",left:"50.0%",top:"4.5661063153%",transform:"translate(-50%, -50%)"}}),a.createElement("div",{className:"circle greenblue logo-parts",style:{width:"6.8150840527%",height:"6.8150840527%",left:"89.345751930%",top:"72.716946842%",transform:"translate(-50%, -50%)"}}),a.createElement("div",{className:"circle redgreen logo-parts",style:{width:"6.8150840527%",height:"6.8150840527%",left:"10.654248069%",top:"72.716946842%",transform:"translate(-50%, -50%)"}}),a.createElement("div",{className:"circle blue logo-parts",style:{width:"6.2471603816%",height:"6.2471603816%",left:"50.0%",top:"15.924579736%",transform:"translate(-50%, -50%)"}}),a.createElement("div",{className:"circle green logo-parts",style:{width:"6.2471603816%",height:"6.2471603816%",left:"79.509313948%",top:"67.037710131%",transform:"translate(-50%, -50%)"}}),a.createElement("div",{className:"circle red logo-parts",style:{width:"6.2471603816%",height:"6.2471603816%",left:"20.490686051%",top:"67.037710131%",transform:"translate(-50%, -50%)"}}),a.createElement("div",{className:"circle blue logo-parts",style:{width:"5.6792367105%",height:"5.6792367105%",left:"50.0%",top:"27.283053157%",transform:"translate(-50%, -50%)"}}),a.createElement("div",{className:"circle green logo-parts",style:{width:"5.1113130395%",height:"5.1113130395%",left:"69.672875965%",top:"61.358473421%",transform:"translate(-50%, -50%)"}}),a.createElement("div",{className:"circle red logo-parts",style:{width:"5.1113130395%",height:"5.1113130395%",left:"30.327124034%",top:"61.358473421%",transform:"translate(-50%, -50%)"}}),a.createElement("div",{className:"circle blue logo-parts",style:{width:"5.1113130395%",height:"5.1113130395%",left:"50.0%",top:"38.641526578%",transform:"translate(-50%, -50%)"}}),a.createElement("div",{className:"circle green logo-parts",style:{width:"4.5433893684%",height:"4.5433893684%",left:"59.836437982%",top:"55.679236710%",transform:"translate(-50%, -50%)"}}),a.createElement("div",{className:"circle red logo-parts",style:{width:"4.5433893684%",height:"4.5433893684%",left:"40.163562017%",top:"55.679236710%",transform:"translate(-50%, -50%)"}})),a.createElement("div",{className:"loss-number",dangerouslySetInnerHTML:{__html:n().renderToString("\\Delta:"+parseInt(i),{throwOnError:!1,displayMode:!0})}})))}},3733:function(e,t,i){i.r(t),i.d(t,{default:function(){return s}});var a=i(7294),l=i(6584),r=i(8898),I=i(5414),n=i(8945),c=i(4514),s=function(){var e=(0,c.Z)(),t=e.x,s=e.y,j=a.useState("Backwards"),o=j[0],g=j[1],N=function(e){for(var t="",i="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",a=0;a<e;a++)t+=i.charAt(Math.floor(Math.random()*i.length));return t};return a.useEffect((function(){if(s<=0)g("Backwards");else{var e=Math.floor(s/33);g(0!==e?N(9-e)+"Backwards".slice(-e):N(9))}}),[t,s]),a.createElement(a.Fragment,null,a.createElement(I.q,{title:"zzz"}),a.createElement(l.Z,null),a.createElement("div",{className:"index-body"},a.createElement("div",{className:"zzz-logo-animation-container"},a.createElement(r.Z,null)),a.createElement("div",{className:"title-container shift-up-fifty-pixels"},a.createElement("div",{className:"zzz-container"},a.createElement("img",{src:"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDI5Ni4yMSAxNTQuNjciPjxkZWZzPjxzdHlsZT4uZHtmaWxsOiNlZjQ3NmY7fS5le2ZpbGw6IzExOGFiMjt9LmZ7ZmlsbDojMDZkNmEwO30uZ3tmaWxsOiMwY2IwYTk7fS5oe2ZpbGw6IzdiOGY4ODt9Lml7ZmlsbDpub25lO3N0cm9rZTojM2EzYTNhO3N0cm9rZS1taXRlcmxpbWl0OjEwO3N0cm9rZS13aWR0aDouMjVweDt9PC9zdHlsZT48L2RlZnM+PGcgaWQ9ImEiLz48ZyBpZD0iYiI+PGcgaWQ9ImMiPjxnPjxjaXJjbGUgY2xhc3M9ImciIGN4PSIyMDguMTciIGN5PSI4LjA2IiByPSI4LjA0Ii8+PGNpcmNsZSBjbGFzcz0iZiIgY3g9IjE5OC4xNyIgY3k9IjI1LjM4IiByPSI4LjA0Ii8+PGNpcmNsZSBjbGFzcz0iZiIgY3g9IjE3OC4xNyIgY3k9IjYwLjAyIiByPSI4LjA0Ii8+PGNpcmNsZSBjbGFzcz0iZiIgY3g9IjE4OC4xNyIgY3k9IjQyLjciIHI9IjguMDQiLz48Y2lyY2xlIGNsYXNzPSJmIiBjeD0iMTY4LjE3IiBjeT0iNzcuMzQiIHI9IjguMDQiLz48Y2lyY2xlIGNsYXNzPSJmIiBjeD0iMTU4LjE3IiBjeT0iOTQuNjYiIHI9IjguMDQiLz48Y2lyY2xlIGNsYXNzPSJmIiBjeD0iMTM4LjE3IiBjeT0iMTI5LjMxIiByPSI4LjA0Ii8+PGNpcmNsZSBjbGFzcz0iZiIgY3g9IjE0OC4xNyIgY3k9IjExMS45OCIgcj0iOC4wNCIvPjxjaXJjbGUgY2xhc3M9ImgiIGN4PSIxMjguMTciIGN5PSIxNDYuNjMiIHI9IjguMDQiLz48Y2lyY2xlIGNsYXNzPSJlIiBjeD0iMjQ4LjE3IiBjeT0iNzcuMzQiIHI9IjguMDQiLz48Y2lyY2xlIGNsYXNzPSJpIiBjeD0iMjI4LjE3IiBjeT0iNzcuMzQiIHI9IjguMDQiLz48Y2lyY2xlIGNsYXNzPSJpIiBjeD0iMTg4LjE3IiBjeT0iNzcuMzQiIHI9IjguMDQiLz48Y2lyY2xlIGNsYXNzPSJpIiBjeD0iMjA4LjE3IiBjeT0iNzcuMzQiIHI9IjguMDQiLz48Y2lyY2xlIGNsYXNzPSJpIiBjeD0iMTQ4LjE3IiBjeT0iNzcuMzQiIHI9IjguMDQiLz48Y2lyY2xlIGNsYXNzPSJpIiBjeD0iMTA4LjE3IiBjeT0iNzcuMzQiIHI9IjguMDQiLz48Y2lyY2xlIGNsYXNzPSJpIiBjeD0iMTI4LjE3IiBjeT0iNzcuMzQiIHI9IjguMDQiLz48Y2lyY2xlIGNsYXNzPSJkIiBjeD0iODguMTciIGN5PSI3Ny4zNCIgcj0iOC4wNCIvPjxjaXJjbGUgY2xhc3M9ImgiIGN4PSIxMjguMTciIGN5PSI4LjA2IiByPSI4LjA0Ii8+PGNpcmNsZSBjbGFzcz0iaSIgY3g9IjEzOC4xNyIgY3k9IjI1LjM4IiByPSI4LjA0Ii8+PGNpcmNsZSBjbGFzcz0iaSIgY3g9IjE1OC4xNyIgY3k9IjYwLjAyIiByPSI4LjA0Ii8+PGNpcmNsZSBjbGFzcz0iaSIgY3g9IjE0OC4xNyIgY3k9IjQyLjciIHI9IjguMDQiLz48Y2lyY2xlIGNsYXNzPSJpIiBjeD0iMTc4LjE3IiBjeT0iOTQuNjYiIHI9IjguMDQiLz48Y2lyY2xlIGNsYXNzPSJpIiBjeD0iMTk4LjE3IiBjeT0iMTI5LjMxIiByPSI4LjA0Ii8+PGNpcmNsZSBjbGFzcz0iaSIgY3g9IjE4OC4xNyIgY3k9IjExMS45OCIgcj0iOC4wNCIvPjxjaXJjbGUgY2xhc3M9ImciIGN4PSIyMDguMTciIGN5PSIxNDYuNjMiIHI9IjguMDQiLz48Y2lyY2xlIGNsYXNzPSJpIiBjeD0iMjE4LjE3IiBjeT0iMjUuMzgiIHI9IjguMDQiLz48Y2lyY2xlIGNsYXNzPSJpIiBjeD0iMjM4LjE3IiBjeT0iNjAuMDIiIHI9IjguMDQiLz48Y2lyY2xlIGNsYXNzPSJpIiBjeD0iMjI4LjE3IiBjeT0iNDIuNyIgcj0iOC4wNCIvPjxjaXJjbGUgY2xhc3M9ImkiIGN4PSI5OC4xNyIgY3k9Ijk0LjY2IiByPSI4LjA0Ii8+PGNpcmNsZSBjbGFzcz0iaSIgY3g9IjExOC4xNyIgY3k9IjEyOS4zMSIgcj0iOC4wNCIvPjxjaXJjbGUgY2xhc3M9ImkiIGN4PSIxMDguMTciIGN5PSIxMTEuOTgiIHI9IjguMDQiLz48Y2lyY2xlIGNsYXNzPSJmIiBjeD0iMTg4LjEzIiBjeT0iOC4wNCIgcj0iOC4wNCIvPjxjaXJjbGUgY2xhc3M9ImYiIGN4PSIxNDguMTMiIGN5PSI4LjA0IiByPSI4LjA0Ii8+PGNpcmNsZSBjbGFzcz0iZiIgY3g9IjE2OC4xMyIgY3k9IjguMDQiIHI9IjguMDQiLz48Y2lyY2xlIGNsYXNzPSJmIiBjeD0iMTg4LjE3IiBjeT0iMTQ2LjYzIiByPSI4LjA0Ii8+PGNpcmNsZSBjbGFzcz0iZiIgY3g9IjE0OC4xNyIgY3k9IjE0Ni42MyIgcj0iOC4wNCIvPjxjaXJjbGUgY2xhc3M9ImYiIGN4PSIxNjguMTciIGN5PSIxNDYuNjMiIHI9IjguMDQiLz48Y2lyY2xlIGNsYXNzPSJkIiBjeD0iMTE4LjE3IiBjeT0iMjUuMzgiIHI9IjguMDQiLz48Y2lyY2xlIGNsYXNzPSJkIiBjeD0iOTguMTciIGN5PSI2MC4wMiIgcj0iOC4wNCIvPjxjaXJjbGUgY2xhc3M9ImQiIGN4PSIxMDguMTciIGN5PSI0Mi43IiByPSI4LjA0Ii8+PGNpcmNsZSBjbGFzcz0iZSIgY3g9IjIzOC4xNyIgY3k9Ijk0LjY2IiByPSI4LjA0Ii8+PGNpcmNsZSBjbGFzcz0iZSIgY3g9IjIxOC4xNyIgY3k9IjEyOS4zMSIgcj0iOC4wNCIvPjxjaXJjbGUgY2xhc3M9ImUiIGN4PSIyMjguMTciIGN5PSIxMTEuOTgiIHI9IjguMDQiLz48Y2lyY2xlIGNsYXNzPSJlIiBjeD0iMjg4LjE3IiBjeT0iOC4wNiIgcj0iOC4wNCIvPjxjaXJjbGUgY2xhc3M9ImUiIGN4PSIyNjguMTciIGN5PSI4LjA2IiByPSI4LjA0Ii8+PGNpcmNsZSBjbGFzcz0iZSIgY3g9IjIyOC4xNyIgY3k9IjguMDYiIHI9IjguMDQiLz48Y2lyY2xlIGNsYXNzPSJlIiBjeD0iMjQ4LjE3IiBjeT0iOC4wNiIgcj0iOC4wNCIvPjxjaXJjbGUgY2xhc3M9ImUiIGN4PSIyNzguMTciIGN5PSIyNS4zOCIgcj0iOC4wNCIvPjxjaXJjbGUgY2xhc3M9ImUiIGN4PSIyNTguMTciIGN5PSI2MC4wMiIgcj0iOC4wNCIvPjxjaXJjbGUgY2xhc3M9ImUiIGN4PSIyNjguMTciIGN5PSI0Mi43IiByPSI4LjA0Ii8+PGNpcmNsZSBjbGFzcz0iZSIgY3g9IjI4OC4xNyIgY3k9IjE0Ni42MyIgcj0iOC4wNCIvPjxjaXJjbGUgY2xhc3M9ImUiIGN4PSIyNjguMTciIGN5PSIxNDYuNjMiIHI9IjguMDQiLz48Y2lyY2xlIGNsYXNzPSJlIiBjeD0iMjI4LjE3IiBjeT0iMTQ2LjYzIiByPSI4LjA0Ii8+PGNpcmNsZSBjbGFzcz0iZSIgY3g9IjI0OC4xNyIgY3k9IjE0Ni42MyIgcj0iOC4wNCIvPjxjaXJjbGUgY2xhc3M9ImkiIGN4PSIyNTguMTciIGN5PSI5NC42NiIgcj0iOC4wNCIvPjxjaXJjbGUgY2xhc3M9ImkiIGN4PSIyNzguMTciIGN5PSIxMjkuMzEiIHI9IjguMDQiLz48Y2lyY2xlIGNsYXNzPSJpIiBjeD0iMjY4LjE3IiBjeT0iMTExLjk4IiByPSI4LjA0Ii8+PGNpcmNsZSBjbGFzcz0iZCIgY3g9Ijc4LjE3IiBjeT0iOTQuNjYiIHI9IjguMDQiLz48Y2lyY2xlIGNsYXNzPSJkIiBjeD0iNTguMTciIGN5PSIxMjkuMzEiIHI9IjguMDQiLz48Y2lyY2xlIGNsYXNzPSJkIiBjeD0iNjguMTciIGN5PSIxMTEuOTgiIHI9IjguMDQiLz48Y2lyY2xlIGNsYXNzPSJkIiBjeD0iNDguMTciIGN5PSIxNDYuNjMiIHI9IjguMDQiLz48Y2lyY2xlIGNsYXNzPSJpIiBjeD0iNjguMTciIGN5PSI3Ny4zNCIgcj0iOC4wNCIvPjxjaXJjbGUgY2xhc3M9ImkiIGN4PSIyOC4xNyIgY3k9Ijc3LjM0IiByPSI4LjA0Ii8+PGNpcmNsZSBjbGFzcz0iaSIgY3g9IjQ4LjE3IiBjeT0iNzcuMzQiIHI9IjguMDQiLz48Y2lyY2xlIGNsYXNzPSJpIiBjeD0iOC4xNyIgY3k9Ijc3LjM0IiByPSI4LjA0Ii8+PGNpcmNsZSBjbGFzcz0iZCIgY3g9IjQ4LjE3IiBjeT0iOC4wNiIgcj0iOC4wNCIvPjxjaXJjbGUgY2xhc3M9ImkiIGN4PSI1OC4xNyIgY3k9IjI1LjM4IiByPSI4LjA0Ii8+PGNpcmNsZSBjbGFzcz0iaSIgY3g9Ijc4LjE3IiBjeT0iNjAuMDIiIHI9IjguMDQiLz48Y2lyY2xlIGNsYXNzPSJpIiBjeD0iNjguMTciIGN5PSI0Mi43IiByPSI4LjA0Ii8+PGNpcmNsZSBjbGFzcz0iaSIgY3g9IjE4LjE3IiBjeT0iOTQuNjYiIHI9IjguMDQiLz48Y2lyY2xlIGNsYXNzPSJpIiBjeD0iMzguMTciIGN5PSIxMjkuMzEiIHI9IjguMDQiLz48Y2lyY2xlIGNsYXNzPSJpIiBjeD0iMjguMTciIGN5PSIxMTEuOTgiIHI9IjguMDQiLz48Y2lyY2xlIGNsYXNzPSJkIiBjeD0iMTA4LjEzIiBjeT0iOC4wNCIgcj0iOC4wNCIvPjxjaXJjbGUgY2xhc3M9ImQiIGN4PSI2OC4xMyIgY3k9IjguMDQiIHI9IjguMDQiLz48Y2lyY2xlIGNsYXNzPSJkIiBjeD0iODguMTMiIGN5PSI4LjA0IiByPSI4LjA0Ii8+PGNpcmNsZSBjbGFzcz0iZCIgY3g9IjEwOC4xNyIgY3k9IjE0Ni42MyIgcj0iOC4wNCIvPjxjaXJjbGUgY2xhc3M9ImQiIGN4PSI2OC4xNyIgY3k9IjE0Ni42MyIgcj0iOC4wNCIvPjxjaXJjbGUgY2xhc3M9ImQiIGN4PSI4OC4xNyIgY3k9IjE0Ni42MyIgcj0iOC4wNCIvPjxjaXJjbGUgY2xhc3M9ImkiIGN4PSIzOC4xNyIgY3k9IjI1LjM4IiByPSI4LjA0Ii8+PGNpcmNsZSBjbGFzcz0iaSIgY3g9IjE4LjE3IiBjeT0iNjAuMDIiIHI9IjguMDQiLz48Y2lyY2xlIGNsYXNzPSJpIiBjeD0iMjguMTciIGN5PSI0Mi43IiByPSI4LjA0Ii8+PC9nPjwvZz48L2c+PC9zdmc+",alt:"zzz"}),"cubic z"),a.createElement("div",{className:"slogan-container"},a.createElement("div",{className:"slogan"},"Sorting ",o))),a.createElement("div",{className:"self-introduction shift-up-fifty-pixels"},a.createElement("div",{className:"selfie"},a.createElement(n.S,{src:"../images/selfie.jpeg",alt:"selfie",imgStyle:{borderRadius:"100%"},__imageData:i(8859)})),a.createElement("div",{className:"jing"},"qí",a.createElement("span",{style:{display:"inline-block",width:"min(6vw, 60px)"}}),"jìng"),a.createElement("div",{className:"hello"},"Hi, I'm 齐靖"),a.createElement("div",{className:"occupation"},"A ",a.createElement("span",{style:{color:"var(--red)",fontWeight:"bold"}},"Software Developer")," • ",a.createElement("span",{style:{color:"var(--green)",fontWeight:"bold"}},"Engineer")," • ",a.createElement("span",{style:{color:"var(--blue)",fontWeight:"bold"}},"Designer")),a.createElement("div",{className:"living"},"Born in Wuxi, now based in Seattle"),a.createElement("div",{className:"call"},"Call me Jing, pronounced like ",a.createElement("span",{style:{fontStyle:"italic"}},"Gin"))),a.createElement("div",{style:{height:"1000px"}})))}},8859:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#280808","images":{"fallback":{"src":"/static/e280ea0fdfb89ad7c41e26c2a081ad23/f131b/selfie.jpg","srcSet":"/static/e280ea0fdfb89ad7c41e26c2a081ad23/12d03/selfie.jpg 443w,\\n/static/e280ea0fdfb89ad7c41e26c2a081ad23/de6ab/selfie.jpg 887w,\\n/static/e280ea0fdfb89ad7c41e26c2a081ad23/f131b/selfie.jpg 1773w","sizes":"(min-width: 1773px) 1773px, 100vw"},"sources":[{"srcSet":"/static/e280ea0fdfb89ad7c41e26c2a081ad23/0de6d/selfie.webp 443w,\\n/static/e280ea0fdfb89ad7c41e26c2a081ad23/13156/selfie.webp 887w,\\n/static/e280ea0fdfb89ad7c41e26c2a081ad23/d4dd6/selfie.webp 1773w","type":"image/webp","sizes":"(min-width: 1773px) 1773px, 100vw"}]},"width":1773,"height":1773}')}}]);
//# sourceMappingURL=component---src-pages-index-js-2f73644f6eee84e0cf0b.js.map
(self.webpackChunkzzzgin_github_io=self.webpackChunkzzzgin_github_io||[]).push([[317],{648:function(e,t,r){var a=r(7854),n=r(1694),i=r(614),l=r(4326),o=r(5112)("toStringTag"),c=a.Object,s="Arguments"==l(function(){return arguments}());e.exports=n?l:function(e){var t,r,a;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(r=function(e,t){try{return e[t]}catch(r){}}(t=c(e),o))?r:s?l(t):"Object"==(a=l(t))&&i(t.callee)?"Arguments":a}},647:function(e,t,r){var a=r(1702),n=r(7908),i=Math.floor,l=a("".charAt),o=a("".replace),c=a("".slice),s=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,u=/\$([$&'`]|\d{1,2})/g;e.exports=function(e,t,r,a,m,g){var d=r+e.length,f=a.length,p=u;return void 0!==m&&(m=n(m),p=s),o(g,p,(function(n,o){var s;switch(l(o,0)){case"$":return"$";case"&":return e;case"`":return c(t,0,r);case"'":return c(t,d);case"<":s=m[c(o,1,-1)];break;default:var u=+o;if(0===u)return n;if(u>f){var g=i(u/10);return 0===g?n:g<=f?void 0===a[g-1]?l(o,1):a[g-1]+l(o,1):n}s=a[u-1]}return void 0===s?"":s}))}},7850:function(e,t,r){var a=r(111),n=r(4326),i=r(5112)("match");e.exports=function(e){var t;return a(e)&&(void 0!==(t=e[i])?!!t:"RegExp"==n(e))}},7066:function(e,t,r){"use strict";var a=r(9670);e.exports=function(){var e=a(this),t="";return e.hasIndices&&(t+="d"),e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}},4706:function(e,t,r){var a=r(6916),n=r(2597),i=r(7976),l=r(7066),o=RegExp.prototype;e.exports=function(e){var t=e.flags;return void 0!==t||"flags"in o||n(e,"flags")||!i(o,e)?t:a(l,e)}},1694:function(e,t,r){var a={};a[r(5112)("toStringTag")]="z",e.exports="[object z]"===String(a)},1340:function(e,t,r){var a=r(7854),n=r(648),i=a.String;e.exports=function(e){if("Symbol"===n(e))throw TypeError("Cannot convert a Symbol value to a string");return i(e)}},8757:function(e,t,r){"use strict";var a=r(2109),n=r(7854),i=r(6916),l=r(1702),o=r(4488),c=r(614),s=r(7850),u=r(1340),m=r(8173),g=r(4706),d=r(647),f=r(5112),p=r(1913),v=f("replace"),h=n.TypeError,E=l("".indexOf),b=l("".replace),x=l("".slice),y=Math.max,N=function(e,t,r){return r>e.length?-1:""===t?r:E(e,t,r)};a({target:"String",proto:!0},{replaceAll:function(e,t){var r,a,n,l,f,w,k,z,A,C=o(this),S=0,T=0,$="";if(null!=e){if((r=s(e))&&(a=u(o(g(e))),!~E(a,"g")))throw h("`.replaceAll` does not allow non-global regexes");if(n=m(e,v))return i(n,e,C,t);if(p&&r)return b(u(C),e,t)}for(l=u(C),f=u(e),(w=c(t))||(t=u(t)),k=f.length,z=y(1,k),S=N(l,f,0);-1!==S;)A=w?u(t(f,S,l)):d(f,l,S,[],void 0,t),$+=x(l,T,S)+A,T=S+k,S=N(l,f,S+z);return T<l.length&&($+=x(l,T)),$}})},7207:function(e,t,r){r(8757)},8777:function(e,t,r){"use strict";r.d(t,{Z:function(){return i}});var a=r(7294),n={blog:"red",readings:"orange","checkout dash b":"yellow",mymanual:"green",note:"blue",sandbox:"purple"},i=function(e){var t=e.text,r=e.href,i=e.count;return a.createElement("a",{href:r},a.createElement("div",{className:"tag "+(t in n?"tag-"+n[t]:"")},t+(i?" ("+i+")":"")))}},8022:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return s}});var a=r(7294),n=r(6584),i=r(5414),l=(r(7207),r(8945)),o=r(8777),c=function(e){var t=e.edges;return a.createElement(a.Fragment,null,a.createElement("div",{className:"article-list-view"},t.map((function(e,t){return a.createElement("div",{className:"article-tile-container",key:t.toString()},a.createElement("div",{className:"article-tile-top-wrapper"},a.createElement("div",{className:"article-tile-category"},e.node.frontmatter.path.split("/")[1].charAt(0).toUpperCase()+e.node.frontmatter.path.split("/")[1].slice(1)),a.createElement("div",{className:"article-tile-date"},e.node.frontmatter.date)),a.createElement("a",{href:e.node.frontmatter.path},a.createElement("div",{className:"article-tile-title"},e.node.frontmatter.title)),a.createElement("div",{className:"article-tile-image-description-wrapper"},e.node.frontmatter.featuredimage&&a.createElement("a",{href:e.node.frontmatter.path},a.createElement(l.G,{image:e.node.frontmatter.featuredimage.childImageSharp.gatsbyImageData,alt:e.node.frontmatter.featuredimageAlt})),a.createElement("div",{className:"article-description-wrapper"},a.createElement("div",{className:"article-description-text"},e.node.frontmatter.description&&a.createElement("p",null,e.node.frontmatter.description)),a.createElement("div",{className:"article-description-tags"},e.node.frontmatter.tags&&e.node.frontmatter.tags.map((function(e){return a.createElement(o.Z,{text:e.trim().toLowerCase(),href:"/tags/"+e.trim().toLowerCase().replaceAll(" ","-")})}))))))}))))},s=function(e){return a.createElement(a.Fragment,null,a.createElement(i.q,{title:"zzz - Tag: "+e.pageContext.tag}),a.createElement(n.Z,null),a.createElement("div",{className:"tagged-blogs-template-body"},a.createElement("a",{href:"/tags"},a.createElement("div",{className:"back-to-tags"},"< back to all tags")),a.createElement("div",{className:"tagged-blogs-template-tag-name"},"Tag - "+e.pageContext.tag),a.createElement(c,{edges:e.data.allMarkdownRemark.edges})))}}}]);
//# sourceMappingURL=component---src-templates-tagged-blogs-template-js-490df11d908fc5e24298.js.map
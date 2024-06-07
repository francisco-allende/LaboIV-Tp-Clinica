import{a as T1}from"./chunk-DSATN2EB.js";import{I as P1}from"./chunk-IADXVK6T.js";import{e as y1,g as A1}from"./chunk-XM5N6XW7.js";import{$ as U2,Ab as u2,Bb as S1,Cb as k1,Ib as O,Kb as w1,Pb as Y,Ra as g1,Ta as U,Ua as b,_a as x1,aa as u1,hb as q2,ib as N1,ja as X,jb as M2,ka as C1,la as d1,nb as W2,ra as h2,rb as S,sa as O2,sb as k,ta as I2,tb as Z,wb as G2,xb as b1,za as L1,zb as p2}from"./chunk-7S5IDYK3.js";function B1(c,a){var e=Object.keys(c);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(c);a&&(r=r.filter(function(s){return Object.getOwnPropertyDescriptor(c,s).enumerable})),e.push.apply(e,r)}return e}function t(c){for(var a=1;a<arguments.length;a++){var e=arguments[a]!=null?arguments[a]:{};a%2?B1(Object(e),!0).forEach(function(r){u(c,r,e[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(c,Object.getOwnPropertyDescriptors(e)):B1(Object(e)).forEach(function(r){Object.defineProperty(c,r,Object.getOwnPropertyDescriptor(e,r))})}return c}function A2(c){"@babel/helpers - typeof";return A2=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(a){return typeof a}:function(a){return a&&typeof Symbol=="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},A2(c)}function G3(c,a){if(!(c instanceof a))throw new TypeError("Cannot call a class as a function")}function F1(c,a){for(var e=0;e<a.length;e++){var r=a[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(c,r.key,r)}}function _3(c,a,e){return a&&F1(c.prototype,a),e&&F1(c,e),Object.defineProperty(c,"prototype",{writable:!1}),c}function u(c,a,e){return a in c?Object.defineProperty(c,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):c[a]=e,c}function n1(c,a){return X3(c)||$3(c,a)||n3(c,a)||K3()}function z2(c){return j3(c)||Y3(c)||n3(c)||Q3()}function j3(c){if(Array.isArray(c))return $2(c)}function X3(c){if(Array.isArray(c))return c}function Y3(c){if(typeof Symbol<"u"&&c[Symbol.iterator]!=null||c["@@iterator"]!=null)return Array.from(c)}function $3(c,a){var e=c==null?null:typeof Symbol<"u"&&c[Symbol.iterator]||c["@@iterator"];if(e!=null){var r=[],s=!0,i=!1,n,f;try{for(e=e.call(c);!(s=(n=e.next()).done)&&(r.push(n.value),!(a&&r.length===a));s=!0);}catch(l){i=!0,f=l}finally{try{!s&&e.return!=null&&e.return()}finally{if(i)throw f}}return r}}function n3(c,a){if(c){if(typeof c=="string")return $2(c,a);var e=Object.prototype.toString.call(c).slice(8,-1);if(e==="Object"&&c.constructor&&(e=c.constructor.name),e==="Map"||e==="Set")return Array.from(c);if(e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return $2(c,a)}}function $2(c,a){(a==null||a>c.length)&&(a=c.length);for(var e=0,r=new Array(a);e<a;e++)r[e]=c[e];return r}function Q3(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function K3(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var D1=function(){},f1={},f3={},l3=null,o3={mark:D1,measure:D1};try{typeof window<"u"&&(f1=window),typeof document<"u"&&(f3=document),typeof MutationObserver<"u"&&(l3=MutationObserver),typeof performance<"u"&&(o3=performance)}catch{}var J3=f1.navigator||{},R1=J3.userAgent,E1=R1===void 0?"":R1,q=f1,M=f3,U1=l3,C2=o3,E6=!!q.document,R=!!M.documentElement&&!!M.head&&typeof M.addEventListener=="function"&&typeof M.createElement=="function",t3=~E1.indexOf("MSIE")||~E1.indexOf("Trident/"),d2,L2,g2,x2,N2,B="___FONT_AWESOME___",Q2=16,m3="fa",H3="svg-inline--fa",K="data-fa-i2svg",K2="data-fa-pseudo-element",Z3="data-fa-pseudo-element-pending",l1="data-prefix",o1="data-icon",O1="fontawesome-i2svg",c4="async",a4=["HTML","HEAD","STYLE","SCRIPT"],z3=function(){try{return!0}catch{return!1}}(),h="classic",p="sharp",t1=[h,p];function v2(c){return new Proxy(c,{get:function(e,r){return r in e?e[r]:e[h]}})}var l2=v2((d2={},u(d2,h,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit",fakd:"kit","fa-kit":"kit","fa-kit-duotone":"kit"}),u(d2,p,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"}),d2)),o2=v2((L2={},u(L2,h,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),u(L2,p,{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"}),L2)),t2=v2((g2={},u(g2,h,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),u(g2,p,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"}),g2)),e4=v2((x2={},u(x2,h,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),u(x2,p,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"}),x2)),r4=/fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,v3="fa-layers-text",s4=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,i4=v2((N2={},u(N2,h,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),u(N2,p,{900:"fass",400:"fasr",300:"fasl",100:"fast"}),N2)),V3=[1,2,3,4,5,6,7,8,9,10],n4=V3.concat([11,12,13,14,15,16,17,18,19,20]),f4=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],$={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},m2=new Set;Object.keys(o2[h]).map(m2.add.bind(m2));Object.keys(o2[p]).map(m2.add.bind(m2));var l4=[].concat(t1,z2(m2),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",$.GROUP,$.SWAP_OPACITY,$.PRIMARY,$.SECONDARY]).concat(V3.map(function(c){return"".concat(c,"x")})).concat(n4.map(function(c){return"w-".concat(c)})),n2=q.FontAwesomeConfig||{};function o4(c){var a=M.querySelector("script["+c+"]");if(a)return a.getAttribute(c)}function t4(c){return c===""?!0:c==="false"?!1:c==="true"?!0:c}M&&typeof M.querySelector=="function"&&(I1=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]],I1.forEach(function(c){var a=n1(c,2),e=a[0],r=a[1],s=t4(o4(e));s!=null&&(n2[r]=s)}));var I1,h3={styleDefault:"solid",familyDefault:"classic",cssPrefix:m3,replacementClass:H3,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};n2.familyPrefix&&(n2.cssPrefix=n2.familyPrefix);var r2=t(t({},h3),n2);r2.autoReplaceSvg||(r2.observeMutations=!1);var H={};Object.keys(h3).forEach(function(c){Object.defineProperty(H,c,{enumerable:!0,set:function(e){r2[c]=e,f2.forEach(function(r){return r(H)})},get:function(){return r2[c]}})});Object.defineProperty(H,"familyPrefix",{enumerable:!0,set:function(a){r2.cssPrefix=a,f2.forEach(function(e){return e(H)})},get:function(){return r2.cssPrefix}});q.FontAwesomeConfig=H;var f2=[];function m4(c){return f2.push(c),function(){f2.splice(f2.indexOf(c),1)}}var I=Q2,T={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function H4(c){if(!(!c||!R)){var a=M.createElement("style");a.setAttribute("type","text/css"),a.innerHTML=c;for(var e=M.head.childNodes,r=null,s=e.length-1;s>-1;s--){var i=e[s],n=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(n)>-1&&(r=i)}return M.head.insertBefore(a,r),c}}var z4="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function H2(){for(var c=12,a="";c-- >0;)a+=z4[Math.random()*62|0];return a}function s2(c){for(var a=[],e=(c||[]).length>>>0;e--;)a[e]=c[e];return a}function m1(c){return c.classList?s2(c.classList):(c.getAttribute("class")||"").split(" ").filter(function(a){return a})}function M3(c){return"".concat(c).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function v4(c){return Object.keys(c||{}).reduce(function(a,e){return a+"".concat(e,'="').concat(M3(c[e]),'" ')},"").trim()}function B2(c){return Object.keys(c||{}).reduce(function(a,e){return a+"".concat(e,": ").concat(c[e].trim(),";")},"")}function H1(c){return c.size!==T.size||c.x!==T.x||c.y!==T.y||c.rotate!==T.rotate||c.flipX||c.flipY}function V4(c){var a=c.transform,e=c.containerWidth,r=c.iconWidth,s={transform:"translate(".concat(e/2," 256)")},i="translate(".concat(a.x*32,", ").concat(a.y*32,") "),n="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),f="rotate(".concat(a.rotate," 0 0)"),l={transform:"".concat(i," ").concat(n," ").concat(f)},m={transform:"translate(".concat(r/2*-1," -256)")};return{outer:s,inner:l,path:m}}function h4(c){var a=c.transform,e=c.width,r=e===void 0?Q2:e,s=c.height,i=s===void 0?Q2:s,n=c.startCentered,f=n===void 0?!1:n,l="";return f&&t3?l+="translate(".concat(a.x/I-r/2,"em, ").concat(a.y/I-i/2,"em) "):f?l+="translate(calc(-50% + ".concat(a.x/I,"em), calc(-50% + ").concat(a.y/I,"em)) "):l+="translate(".concat(a.x/I,"em, ").concat(a.y/I,"em) "),l+="scale(".concat(a.size/I*(a.flipX?-1:1),", ").concat(a.size/I*(a.flipY?-1:1),") "),l+="rotate(".concat(a.rotate,"deg) "),l}var M4=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, 0));
          transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function p3(){var c=m3,a=H3,e=H.cssPrefix,r=H.replacementClass,s=M4;if(e!==c||r!==a){var i=new RegExp("\\.".concat(c,"\\-"),"g"),n=new RegExp("\\--".concat(c,"\\-"),"g"),f=new RegExp("\\.".concat(a),"g");s=s.replace(i,".".concat(e,"-")).replace(n,"--".concat(e,"-")).replace(f,".".concat(r))}return s}var q1=!1;function _2(){H.autoAddCss&&!q1&&(H4(p3()),q1=!0)}var p4={mixout:function(){return{dom:{css:p3,insertCss:_2}}},hooks:function(){return{beforeDOMElementCreation:function(){_2()},beforeI2svg:function(){_2()}}}},F=q||{};F[B]||(F[B]={});F[B].styles||(F[B].styles={});F[B].hooks||(F[B].hooks={});F[B].shims||(F[B].shims=[]);var y=F[B],u3=[],u4=function c(){M.removeEventListener("DOMContentLoaded",c),P2=1,u3.map(function(a){return a()})},P2=!1;R&&(P2=(M.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(M.readyState),P2||M.addEventListener("DOMContentLoaded",u4));function C4(c){R&&(P2?setTimeout(c,0):u3.push(c))}function V2(c){var a=c.tag,e=c.attributes,r=e===void 0?{}:e,s=c.children,i=s===void 0?[]:s;return typeof c=="string"?M3(c):"<".concat(a," ").concat(v4(r),">").concat(i.map(V2).join(""),"</").concat(a,">")}function W1(c,a,e){if(c&&c[a]&&c[a][e])return{prefix:a,iconName:e,icon:c[a][e]}}var d4=function(a,e){return function(r,s,i,n){return a.call(e,r,s,i,n)}},j2=function(a,e,r,s){var i=Object.keys(a),n=i.length,f=s!==void 0?d4(e,s):e,l,m,o;for(r===void 0?(l=1,o=a[i[0]]):(l=0,o=r);l<n;l++)m=i[l],o=f(o,a[m],m,a);return o};function L4(c){for(var a=[],e=0,r=c.length;e<r;){var s=c.charCodeAt(e++);if(s>=55296&&s<=56319&&e<r){var i=c.charCodeAt(e++);(i&64512)==56320?a.push(((s&1023)<<10)+(i&1023)+65536):(a.push(s),e--)}else a.push(s)}return a}function J2(c){var a=L4(c);return a.length===1?a[0].toString(16):null}function g4(c,a){var e=c.length,r=c.charCodeAt(a),s;return r>=55296&&r<=56319&&e>a+1&&(s=c.charCodeAt(a+1),s>=56320&&s<=57343)?(r-55296)*1024+s-56320+65536:r}function G1(c){return Object.keys(c).reduce(function(a,e){var r=c[e],s=!!r.icon;return s?a[r.iconName]=r.icon:a[e]=r,a},{})}function Z2(c,a){var e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=e.skipHooks,s=r===void 0?!1:r,i=G1(a);typeof y.hooks.addPack=="function"&&!s?y.hooks.addPack(c,G1(a)):y.styles[c]=t(t({},y.styles[c]||{}),i),c==="fas"&&Z2("fa",a)}var b2,S2,k2,c2=y.styles,x4=y.shims,N4=(b2={},u(b2,h,Object.values(t2[h])),u(b2,p,Object.values(t2[p])),b2),z1=null,C3={},d3={},L3={},g3={},x3={},b4=(S2={},u(S2,h,Object.keys(l2[h])),u(S2,p,Object.keys(l2[p])),S2);function S4(c){return~l4.indexOf(c)}function k4(c,a){var e=a.split("-"),r=e[0],s=e.slice(1).join("-");return r===c&&s!==""&&!S4(s)?s:null}var N3=function(){var a=function(i){return j2(c2,function(n,f,l){return n[l]=j2(f,i,{}),n},{})};C3=a(function(s,i,n){if(i[3]&&(s[i[3]]=n),i[2]){var f=i[2].filter(function(l){return typeof l=="number"});f.forEach(function(l){s[l.toString(16)]=n})}return s}),d3=a(function(s,i,n){if(s[n]=n,i[2]){var f=i[2].filter(function(l){return typeof l=="string"});f.forEach(function(l){s[l]=n})}return s}),x3=a(function(s,i,n){var f=i[2];return s[n]=n,f.forEach(function(l){s[l]=n}),s});var e="far"in c2||H.autoFetchSvg,r=j2(x4,function(s,i){var n=i[0],f=i[1],l=i[2];return f==="far"&&!e&&(f="fas"),typeof n=="string"&&(s.names[n]={prefix:f,iconName:l}),typeof n=="number"&&(s.unicodes[n.toString(16)]={prefix:f,iconName:l}),s},{names:{},unicodes:{}});L3=r.names,g3=r.unicodes,z1=F2(H.styleDefault,{family:H.familyDefault})};m4(function(c){z1=F2(c.styleDefault,{family:H.familyDefault})});N3();function v1(c,a){return(C3[c]||{})[a]}function w4(c,a){return(d3[c]||{})[a]}function Q(c,a){return(x3[c]||{})[a]}function b3(c){return L3[c]||{prefix:null,iconName:null}}function y4(c){var a=g3[c],e=v1("fas",c);return a||(e?{prefix:"fas",iconName:e}:null)||{prefix:null,iconName:null}}function W(){return z1}var V1=function(){return{prefix:null,iconName:null,rest:[]}};function F2(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=a.family,r=e===void 0?h:e,s=l2[r][c],i=o2[r][c]||o2[r][s],n=c in y.styles?c:null;return i||n||null}var _1=(k2={},u(k2,h,Object.keys(t2[h])),u(k2,p,Object.keys(t2[p])),k2);function D2(c){var a,e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.skipLookups,s=r===void 0?!1:r,i=(a={},u(a,h,"".concat(H.cssPrefix,"-").concat(h)),u(a,p,"".concat(H.cssPrefix,"-").concat(p)),a),n=null,f=h;(c.includes(i[h])||c.some(function(m){return _1[h].includes(m)}))&&(f=h),(c.includes(i[p])||c.some(function(m){return _1[p].includes(m)}))&&(f=p);var l=c.reduce(function(m,o){var z=k4(H.cssPrefix,o);if(c2[o]?(o=N4[f].includes(o)?e4[f][o]:o,n=o,m.prefix=o):b4[f].indexOf(o)>-1?(n=o,m.prefix=F2(o,{family:f})):z?m.iconName=z:o!==H.replacementClass&&o!==i[h]&&o!==i[p]&&m.rest.push(o),!s&&m.prefix&&m.iconName){var v=n==="fa"?b3(m.iconName):{},V=Q(m.prefix,m.iconName);v.prefix&&(n=null),m.iconName=v.iconName||V||m.iconName,m.prefix=v.prefix||m.prefix,m.prefix==="far"&&!c2.far&&c2.fas&&!H.autoFetchSvg&&(m.prefix="fas")}return m},V1());return(c.includes("fa-brands")||c.includes("fab"))&&(l.prefix="fab"),(c.includes("fa-duotone")||c.includes("fad"))&&(l.prefix="fad"),!l.prefix&&f===p&&(c2.fass||H.autoFetchSvg)&&(l.prefix="fass",l.iconName=Q(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||n==="fa")&&(l.prefix=W()||"fas"),l}var A4=function(){function c(){G3(this,c),this.definitions={}}return _3(c,[{key:"add",value:function(){for(var e=this,r=arguments.length,s=new Array(r),i=0;i<r;i++)s[i]=arguments[i];var n=s.reduce(this._pullDefinitions,{});Object.keys(n).forEach(function(f){e.definitions[f]=t(t({},e.definitions[f]||{}),n[f]),Z2(f,n[f]);var l=t2[h][f];l&&Z2(l,n[f]),N3()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(e,r){var s=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(s).map(function(i){var n=s[i],f=n.prefix,l=n.iconName,m=n.icon,o=m[2];e[f]||(e[f]={}),o.length>0&&o.forEach(function(z){typeof z=="string"&&(e[f][z]=m)}),e[f][l]=m}),e}}]),c}(),j1=[],a2={},e2={},P4=Object.keys(e2);function T4(c,a){var e=a.mixoutsTo;return j1=c,a2={},Object.keys(e2).forEach(function(r){P4.indexOf(r)===-1&&delete e2[r]}),j1.forEach(function(r){var s=r.mixout?r.mixout():{};if(Object.keys(s).forEach(function(n){typeof s[n]=="function"&&(e[n]=s[n]),A2(s[n])==="object"&&Object.keys(s[n]).forEach(function(f){e[n]||(e[n]={}),e[n][f]=s[n][f]})}),r.hooks){var i=r.hooks();Object.keys(i).forEach(function(n){a2[n]||(a2[n]=[]),a2[n].push(i[n])})}r.provides&&r.provides(e2)}),e}function c1(c,a){for(var e=arguments.length,r=new Array(e>2?e-2:0),s=2;s<e;s++)r[s-2]=arguments[s];var i=a2[c]||[];return i.forEach(function(n){a=n.apply(null,[a].concat(r))}),a}function J(c){for(var a=arguments.length,e=new Array(a>1?a-1:0),r=1;r<a;r++)e[r-1]=arguments[r];var s=a2[c]||[];s.forEach(function(i){i.apply(null,e)})}function D(){var c=arguments[0],a=Array.prototype.slice.call(arguments,1);return e2[c]?e2[c].apply(null,a):void 0}function a1(c){c.prefix==="fa"&&(c.prefix="fas");var a=c.iconName,e=c.prefix||W();if(a)return a=Q(e,a)||a,W1(S3.definitions,e,a)||W1(y.styles,e,a)}var S3=new A4,B4=function(){H.autoReplaceSvg=!1,H.observeMutations=!1,J("noAuto")},F4={i2svg:function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return R?(J("beforeI2svg",a),D("pseudoElements2svg",a),D("i2svg",a)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=a.autoReplaceSvgRoot;H.autoReplaceSvg===!1&&(H.autoReplaceSvg=!0),H.observeMutations=!0,C4(function(){R4({autoReplaceSvgRoot:e}),J("watch",a)})}},D4={icon:function(a){if(a===null)return null;if(A2(a)==="object"&&a.prefix&&a.iconName)return{prefix:a.prefix,iconName:Q(a.prefix,a.iconName)||a.iconName};if(Array.isArray(a)&&a.length===2){var e=a[1].indexOf("fa-")===0?a[1].slice(3):a[1],r=F2(a[0]);return{prefix:r,iconName:Q(r,e)||e}}if(typeof a=="string"&&(a.indexOf("".concat(H.cssPrefix,"-"))>-1||a.match(r4))){var s=D2(a.split(" "),{skipLookups:!0});return{prefix:s.prefix||W(),iconName:Q(s.prefix,s.iconName)||s.iconName}}if(typeof a=="string"){var i=W();return{prefix:i,iconName:Q(i,a)||a}}}},x={noAuto:B4,config:H,dom:F4,parse:D4,library:S3,findIconDefinition:a1,toHtml:V2},R4=function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=a.autoReplaceSvgRoot,r=e===void 0?M:e;(Object.keys(y.styles).length>0||H.autoFetchSvg)&&R&&H.autoReplaceSvg&&x.dom.i2svg({node:r})};function R2(c,a){return Object.defineProperty(c,"abstract",{get:a}),Object.defineProperty(c,"html",{get:function(){return c.abstract.map(function(r){return V2(r)})}}),Object.defineProperty(c,"node",{get:function(){if(R){var r=M.createElement("div");return r.innerHTML=c.html,r.children}}}),c}function E4(c){var a=c.children,e=c.main,r=c.mask,s=c.attributes,i=c.styles,n=c.transform;if(H1(n)&&e.found&&!r.found){var f=e.width,l=e.height,m={x:f/l/2,y:.5};s.style=B2(t(t({},i),{},{"transform-origin":"".concat(m.x+n.x/16,"em ").concat(m.y+n.y/16,"em")}))}return[{tag:"svg",attributes:s,children:a}]}function U4(c){var a=c.prefix,e=c.iconName,r=c.children,s=c.attributes,i=c.symbol,n=i===!0?"".concat(a,"-").concat(H.cssPrefix,"-").concat(e):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:t(t({},s),{},{id:n}),children:r}]}]}function h1(c){var a=c.icons,e=a.main,r=a.mask,s=c.prefix,i=c.iconName,n=c.transform,f=c.symbol,l=c.title,m=c.maskId,o=c.titleId,z=c.extra,v=c.watchable,V=v===void 0?!1:v,d=r.found?r:e,N=d.width,w=d.height,A=s==="fak",C=[H.replacementClass,i?"".concat(H.cssPrefix,"-").concat(i):""].filter(function(E){return z.classes.indexOf(E)===-1}).filter(function(E){return E!==""||!!E}).concat(z.classes).join(" "),L={children:[],attributes:t(t({},z.attributes),{},{"data-prefix":s,"data-icon":i,class:C,role:z.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(N," ").concat(w)})},P=A&&!~z.classes.indexOf("fa-fw")?{width:"".concat(N/w*16*.0625,"em")}:{};V&&(L.attributes[K]=""),l&&(L.children.push({tag:"title",attributes:{id:L.attributes["aria-labelledby"]||"title-".concat(o||H2())},children:[l]}),delete L.attributes.title);var g=t(t({},L),{},{prefix:s,iconName:i,main:e,mask:r,maskId:m,transform:n,symbol:f,styles:t(t({},P),z.styles)}),_=r.found&&e.found?D("generateAbstractMask",g)||{children:[],attributes:{}}:D("generateAbstractIcon",g)||{children:[],attributes:{}},j=_.children,E2=_.attributes;return g.children=j,g.attributes=E2,f?U4(g):E4(g)}function X1(c){var a=c.content,e=c.width,r=c.height,s=c.transform,i=c.title,n=c.extra,f=c.watchable,l=f===void 0?!1:f,m=t(t(t({},n.attributes),i?{title:i}:{}),{},{class:n.classes.join(" ")});l&&(m[K]="");var o=t({},n.styles);H1(s)&&(o.transform=h4({transform:s,startCentered:!0,width:e,height:r}),o["-webkit-transform"]=o.transform);var z=B2(o);z.length>0&&(m.style=z);var v=[];return v.push({tag:"span",attributes:m,children:[a]}),i&&v.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),v}function O4(c){var a=c.content,e=c.title,r=c.extra,s=t(t(t({},r.attributes),e?{title:e}:{}),{},{class:r.classes.join(" ")}),i=B2(r.styles);i.length>0&&(s.style=i);var n=[];return n.push({tag:"span",attributes:s,children:[a]}),e&&n.push({tag:"span",attributes:{class:"sr-only"},children:[e]}),n}var X2=y.styles;function e1(c){var a=c[0],e=c[1],r=c.slice(4),s=n1(r,1),i=s[0],n=null;return Array.isArray(i)?n={tag:"g",attributes:{class:"".concat(H.cssPrefix,"-").concat($.GROUP)},children:[{tag:"path",attributes:{class:"".concat(H.cssPrefix,"-").concat($.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(H.cssPrefix,"-").concat($.PRIMARY),fill:"currentColor",d:i[1]}}]}:n={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:a,height:e,icon:n}}var I4={found:!1,width:512,height:512};function q4(c,a){!z3&&!H.showMissingIcons&&c&&console.error('Icon with name "'.concat(c,'" and prefix "').concat(a,'" is missing.'))}function r1(c,a){var e=a;return a==="fa"&&H.styleDefault!==null&&(a=W()),new Promise(function(r,s){var i={found:!1,width:512,height:512,icon:D("missingIconAbstract")||{}};if(e==="fa"){var n=b3(c)||{};c=n.iconName||c,a=n.prefix||a}if(c&&a&&X2[a]&&X2[a][c]){var f=X2[a][c];return r(e1(f))}q4(c,a),r(t(t({},I4),{},{icon:H.showMissingIcons&&c?D("missingIconAbstract")||{}:{}}))})}var Y1=function(){},s1=H.measurePerformance&&C2&&C2.mark&&C2.measure?C2:{mark:Y1,measure:Y1},i2='FA "6.5.2"',W4=function(a){return s1.mark("".concat(i2," ").concat(a," begins")),function(){return k3(a)}},k3=function(a){s1.mark("".concat(i2," ").concat(a," ends")),s1.measure("".concat(i2," ").concat(a),"".concat(i2," ").concat(a," begins"),"".concat(i2," ").concat(a," ends"))},M1={begin:W4,end:k3},w2=function(){};function $1(c){var a=c.getAttribute?c.getAttribute(K):null;return typeof a=="string"}function G4(c){var a=c.getAttribute?c.getAttribute(l1):null,e=c.getAttribute?c.getAttribute(o1):null;return a&&e}function _4(c){return c&&c.classList&&c.classList.contains&&c.classList.contains(H.replacementClass)}function j4(){if(H.autoReplaceSvg===!0)return y2.replace;var c=y2[H.autoReplaceSvg];return c||y2.replace}function X4(c){return M.createElementNS("http://www.w3.org/2000/svg",c)}function Y4(c){return M.createElement(c)}function w3(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=a.ceFn,r=e===void 0?c.tag==="svg"?X4:Y4:e;if(typeof c=="string")return M.createTextNode(c);var s=r(c.tag);Object.keys(c.attributes||[]).forEach(function(n){s.setAttribute(n,c.attributes[n])});var i=c.children||[];return i.forEach(function(n){s.appendChild(w3(n,{ceFn:r}))}),s}function $4(c){var a=" ".concat(c.outerHTML," ");return a="".concat(a,"Font Awesome fontawesome.com "),a}var y2={replace:function(a){var e=a[0];if(e.parentNode)if(a[1].forEach(function(s){e.parentNode.insertBefore(w3(s),e)}),e.getAttribute(K)===null&&H.keepOriginalSource){var r=M.createComment($4(e));e.parentNode.replaceChild(r,e)}else e.remove()},nest:function(a){var e=a[0],r=a[1];if(~m1(e).indexOf(H.replacementClass))return y2.replace(a);var s=new RegExp("".concat(H.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var i=r[0].attributes.class.split(" ").reduce(function(f,l){return l===H.replacementClass||l.match(s)?f.toSvg.push(l):f.toNode.push(l),f},{toNode:[],toSvg:[]});r[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",i.toNode.join(" "))}var n=r.map(function(f){return V2(f)}).join(`
`);e.setAttribute(K,""),e.innerHTML=n}};function Q1(c){c()}function y3(c,a){var e=typeof a=="function"?a:w2;if(c.length===0)e();else{var r=Q1;H.mutateApproach===c4&&(r=q.requestAnimationFrame||Q1),r(function(){var s=j4(),i=M1.begin("mutate");c.map(s),i(),e()})}}var p1=!1;function A3(){p1=!0}function i1(){p1=!1}var T2=null;function K1(c){if(U1&&H.observeMutations){var a=c.treeCallback,e=a===void 0?w2:a,r=c.nodeCallback,s=r===void 0?w2:r,i=c.pseudoElementsCallback,n=i===void 0?w2:i,f=c.observeMutationsRoot,l=f===void 0?M:f;T2=new U1(function(m){if(!p1){var o=W();s2(m).forEach(function(z){if(z.type==="childList"&&z.addedNodes.length>0&&!$1(z.addedNodes[0])&&(H.searchPseudoElements&&n(z.target),e(z.target)),z.type==="attributes"&&z.target.parentNode&&H.searchPseudoElements&&n(z.target.parentNode),z.type==="attributes"&&$1(z.target)&&~f4.indexOf(z.attributeName))if(z.attributeName==="class"&&G4(z.target)){var v=D2(m1(z.target)),V=v.prefix,d=v.iconName;z.target.setAttribute(l1,V||o),d&&z.target.setAttribute(o1,d)}else _4(z.target)&&s(z.target)})}}),R&&T2.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Q4(){T2&&T2.disconnect()}function K4(c){var a=c.getAttribute("style"),e=[];return a&&(e=a.split(";").reduce(function(r,s){var i=s.split(":"),n=i[0],f=i.slice(1);return n&&f.length>0&&(r[n]=f.join(":").trim()),r},{})),e}function J4(c){var a=c.getAttribute("data-prefix"),e=c.getAttribute("data-icon"),r=c.innerText!==void 0?c.innerText.trim():"",s=D2(m1(c));return s.prefix||(s.prefix=W()),a&&e&&(s.prefix=a,s.iconName=e),s.iconName&&s.prefix||(s.prefix&&r.length>0&&(s.iconName=w4(s.prefix,c.innerText)||v1(s.prefix,J2(c.innerText))),!s.iconName&&H.autoFetchSvg&&c.firstChild&&c.firstChild.nodeType===Node.TEXT_NODE&&(s.iconName=c.firstChild.data)),s}function Z4(c){var a=s2(c.attributes).reduce(function(s,i){return s.name!=="class"&&s.name!=="style"&&(s[i.name]=i.value),s},{}),e=c.getAttribute("title"),r=c.getAttribute("data-fa-title-id");return H.autoA11y&&(e?a["aria-labelledby"]="".concat(H.replacementClass,"-title-").concat(r||H2()):(a["aria-hidden"]="true",a.focusable="false")),a}function c6(){return{iconName:null,title:null,titleId:null,prefix:null,transform:T,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function J1(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},e=J4(c),r=e.iconName,s=e.prefix,i=e.rest,n=Z4(c),f=c1("parseNodeAttributes",{},c),l=a.styleParser?K4(c):[];return t({iconName:r,title:c.getAttribute("title"),titleId:c.getAttribute("data-fa-title-id"),prefix:s,transform:T,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:n}},f)}var a6=y.styles;function P3(c){var a=H.autoReplaceSvg==="nest"?J1(c,{styleParser:!1}):J1(c);return~a.extra.classes.indexOf(v3)?D("generateLayersText",c,a):D("generateSvgReplacementMutation",c,a)}var G=new Set;t1.map(function(c){G.add("fa-".concat(c))});Object.keys(l2[h]).map(G.add.bind(G));Object.keys(l2[p]).map(G.add.bind(G));G=z2(G);function Z1(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!R)return Promise.resolve();var e=M.documentElement.classList,r=function(z){return e.add("".concat(O1,"-").concat(z))},s=function(z){return e.remove("".concat(O1,"-").concat(z))},i=H.autoFetchSvg?G:t1.map(function(o){return"fa-".concat(o)}).concat(Object.keys(a6));i.includes("fa")||i.push("fa");var n=[".".concat(v3,":not([").concat(K,"])")].concat(i.map(function(o){return".".concat(o,":not([").concat(K,"])")})).join(", ");if(n.length===0)return Promise.resolve();var f=[];try{f=s2(c.querySelectorAll(n))}catch{}if(f.length>0)r("pending"),s("complete");else return Promise.resolve();var l=M1.begin("onTree"),m=f.reduce(function(o,z){try{var v=P3(z);v&&o.push(v)}catch(V){z3||V.name==="MissingIcon"&&console.error(V)}return o},[]);return new Promise(function(o,z){Promise.all(m).then(function(v){y3(v,function(){r("active"),r("complete"),s("pending"),typeof a=="function"&&a(),l(),o()})}).catch(function(v){l(),z(v)})})}function e6(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;P3(c).then(function(e){e&&y3([e],a)})}function r6(c){return function(a){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(a||{}).icon?a:a1(a||{}),s=e.mask;return s&&(s=(s||{}).icon?s:a1(s||{})),c(r,t(t({},e),{},{mask:s}))}}var s6=function(a){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.transform,s=r===void 0?T:r,i=e.symbol,n=i===void 0?!1:i,f=e.mask,l=f===void 0?null:f,m=e.maskId,o=m===void 0?null:m,z=e.title,v=z===void 0?null:z,V=e.titleId,d=V===void 0?null:V,N=e.classes,w=N===void 0?[]:N,A=e.attributes,C=A===void 0?{}:A,L=e.styles,P=L===void 0?{}:L;if(a){var g=a.prefix,_=a.iconName,j=a.icon;return R2(t({type:"icon"},a),function(){return J("beforeDOMElementCreation",{iconDefinition:a,params:e}),H.autoA11y&&(v?C["aria-labelledby"]="".concat(H.replacementClass,"-title-").concat(d||H2()):(C["aria-hidden"]="true",C.focusable="false")),h1({icons:{main:e1(j),mask:l?e1(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:g,iconName:_,transform:t(t({},T),s),symbol:n,title:v,maskId:o,titleId:d,extra:{attributes:C,styles:P,classes:w}})})}},i6={mixout:function(){return{icon:r6(s6)}},hooks:function(){return{mutationObserverCallbacks:function(e){return e.treeCallback=Z1,e.nodeCallback=e6,e}}},provides:function(a){a.i2svg=function(e){var r=e.node,s=r===void 0?M:r,i=e.callback,n=i===void 0?function(){}:i;return Z1(s,n)},a.generateSvgReplacementMutation=function(e,r){var s=r.iconName,i=r.title,n=r.titleId,f=r.prefix,l=r.transform,m=r.symbol,o=r.mask,z=r.maskId,v=r.extra;return new Promise(function(V,d){Promise.all([r1(s,f),o.iconName?r1(o.iconName,o.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(N){var w=n1(N,2),A=w[0],C=w[1];V([e,h1({icons:{main:A,mask:C},prefix:f,iconName:s,transform:l,symbol:m,maskId:z,title:i,titleId:n,extra:v,watchable:!0})])}).catch(d)})},a.generateAbstractIcon=function(e){var r=e.children,s=e.attributes,i=e.main,n=e.transform,f=e.styles,l=B2(f);l.length>0&&(s.style=l);var m;return H1(n)&&(m=D("generateAbstractTransformGrouping",{main:i,transform:n,containerWidth:i.width,iconWidth:i.width})),r.push(m||i.icon),{children:r,attributes:s}}}},n6={mixout:function(){return{layer:function(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=r.classes,i=s===void 0?[]:s;return R2({type:"layer"},function(){J("beforeDOMElementCreation",{assembler:e,params:r});var n=[];return e(function(f){Array.isArray(f)?f.map(function(l){n=n.concat(l.abstract)}):n=n.concat(f.abstract)}),[{tag:"span",attributes:{class:["".concat(H.cssPrefix,"-layers")].concat(z2(i)).join(" ")},children:n}]})}}}},f6={mixout:function(){return{counter:function(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=r.title,i=s===void 0?null:s,n=r.classes,f=n===void 0?[]:n,l=r.attributes,m=l===void 0?{}:l,o=r.styles,z=o===void 0?{}:o;return R2({type:"counter",content:e},function(){return J("beforeDOMElementCreation",{content:e,params:r}),O4({content:e.toString(),title:i,extra:{attributes:m,styles:z,classes:["".concat(H.cssPrefix,"-layers-counter")].concat(z2(f))}})})}}}},l6={mixout:function(){return{text:function(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=r.transform,i=s===void 0?T:s,n=r.title,f=n===void 0?null:n,l=r.classes,m=l===void 0?[]:l,o=r.attributes,z=o===void 0?{}:o,v=r.styles,V=v===void 0?{}:v;return R2({type:"text",content:e},function(){return J("beforeDOMElementCreation",{content:e,params:r}),X1({content:e,transform:t(t({},T),i),title:f,extra:{attributes:z,styles:V,classes:["".concat(H.cssPrefix,"-layers-text")].concat(z2(m))}})})}}},provides:function(a){a.generateLayersText=function(e,r){var s=r.title,i=r.transform,n=r.extra,f=null,l=null;if(t3){var m=parseInt(getComputedStyle(e).fontSize,10),o=e.getBoundingClientRect();f=o.width/m,l=o.height/m}return H.autoA11y&&!s&&(n.attributes["aria-hidden"]="true"),Promise.resolve([e,X1({content:e.innerHTML,width:f,height:l,transform:i,title:s,extra:n,watchable:!0})])}}},o6=new RegExp('"',"ug"),c3=[1105920,1112319];function t6(c){var a=c.replace(o6,""),e=g4(a,0),r=e>=c3[0]&&e<=c3[1],s=a.length===2?a[0]===a[1]:!1;return{value:J2(s?a[0]:a),isSecondary:r||s}}function a3(c,a){var e="".concat(Z3).concat(a.replace(":","-"));return new Promise(function(r,s){if(c.getAttribute(e)!==null)return r();var i=s2(c.children),n=i.filter(function(j){return j.getAttribute(K2)===a})[0],f=q.getComputedStyle(c,a),l=f.getPropertyValue("font-family").match(s4),m=f.getPropertyValue("font-weight"),o=f.getPropertyValue("content");if(n&&!l)return c.removeChild(n),r();if(l&&o!=="none"&&o!==""){var z=f.getPropertyValue("content"),v=~["Sharp"].indexOf(l[2])?p:h,V=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?o2[v][l[2].toLowerCase()]:i4[v][m],d=t6(z),N=d.value,w=d.isSecondary,A=l[0].startsWith("FontAwesome"),C=v1(V,N),L=C;if(A){var P=y4(N);P.iconName&&P.prefix&&(C=P.iconName,V=P.prefix)}if(C&&!w&&(!n||n.getAttribute(l1)!==V||n.getAttribute(o1)!==L)){c.setAttribute(e,L),n&&c.removeChild(n);var g=c6(),_=g.extra;_.attributes[K2]=a,r1(C,V).then(function(j){var E2=h1(t(t({},g),{},{icons:{main:j,mask:V1()},prefix:V,iconName:L,extra:_,watchable:!0})),E=M.createElementNS("http://www.w3.org/2000/svg","svg");a==="::before"?c.insertBefore(E,c.firstChild):c.appendChild(E),E.outerHTML=E2.map(function(W3){return V2(W3)}).join(`
`),c.removeAttribute(e),r()}).catch(s)}else r()}else r()})}function m6(c){return Promise.all([a3(c,"::before"),a3(c,"::after")])}function H6(c){return c.parentNode!==document.head&&!~a4.indexOf(c.tagName.toUpperCase())&&!c.getAttribute(K2)&&(!c.parentNode||c.parentNode.tagName!=="svg")}function e3(c){if(R)return new Promise(function(a,e){var r=s2(c.querySelectorAll("*")).filter(H6).map(m6),s=M1.begin("searchPseudoElements");A3(),Promise.all(r).then(function(){s(),i1(),a()}).catch(function(){s(),i1(),e()})})}var z6={hooks:function(){return{mutationObserverCallbacks:function(e){return e.pseudoElementsCallback=e3,e}}},provides:function(a){a.pseudoElements2svg=function(e){var r=e.node,s=r===void 0?M:r;H.searchPseudoElements&&e3(s)}}},r3=!1,v6={mixout:function(){return{dom:{unwatch:function(){A3(),r3=!0}}}},hooks:function(){return{bootstrap:function(){K1(c1("mutationObserverCallbacks",{}))},noAuto:function(){Q4()},watch:function(e){var r=e.observeMutationsRoot;r3?i1():K1(c1("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},s3=function(a){var e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return a.toLowerCase().split(" ").reduce(function(r,s){var i=s.toLowerCase().split("-"),n=i[0],f=i.slice(1).join("-");if(n&&f==="h")return r.flipX=!0,r;if(n&&f==="v")return r.flipY=!0,r;if(f=parseFloat(f),isNaN(f))return r;switch(n){case"grow":r.size=r.size+f;break;case"shrink":r.size=r.size-f;break;case"left":r.x=r.x-f;break;case"right":r.x=r.x+f;break;case"up":r.y=r.y-f;break;case"down":r.y=r.y+f;break;case"rotate":r.rotate=r.rotate+f;break}return r},e)},V6={mixout:function(){return{parse:{transform:function(e){return s3(e)}}}},hooks:function(){return{parseNodeAttributes:function(e,r){var s=r.getAttribute("data-fa-transform");return s&&(e.transform=s3(s)),e}}},provides:function(a){a.generateAbstractTransformGrouping=function(e){var r=e.main,s=e.transform,i=e.containerWidth,n=e.iconWidth,f={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(s.x*32,", ").concat(s.y*32,") "),m="scale(".concat(s.size/16*(s.flipX?-1:1),", ").concat(s.size/16*(s.flipY?-1:1),") "),o="rotate(".concat(s.rotate," 0 0)"),z={transform:"".concat(l," ").concat(m," ").concat(o)},v={transform:"translate(".concat(n/2*-1," -256)")},V={outer:f,inner:z,path:v};return{tag:"g",attributes:t({},V.outer),children:[{tag:"g",attributes:t({},V.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:t(t({},r.icon.attributes),V.path)}]}]}}}},Y2={x:0,y:0,width:"100%",height:"100%"};function i3(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return c.attributes&&(c.attributes.fill||a)&&(c.attributes.fill="black"),c}function h6(c){return c.tag==="g"?c.children:[c]}var M6={hooks:function(){return{parseNodeAttributes:function(e,r){var s=r.getAttribute("data-fa-mask"),i=s?D2(s.split(" ").map(function(n){return n.trim()})):V1();return i.prefix||(i.prefix=W()),e.mask=i,e.maskId=r.getAttribute("data-fa-mask-id"),e}}},provides:function(a){a.generateAbstractMask=function(e){var r=e.children,s=e.attributes,i=e.main,n=e.mask,f=e.maskId,l=e.transform,m=i.width,o=i.icon,z=n.width,v=n.icon,V=V4({transform:l,containerWidth:z,iconWidth:m}),d={tag:"rect",attributes:t(t({},Y2),{},{fill:"white"})},N=o.children?{children:o.children.map(i3)}:{},w={tag:"g",attributes:t({},V.inner),children:[i3(t({tag:o.tag,attributes:t(t({},o.attributes),V.path)},N))]},A={tag:"g",attributes:t({},V.outer),children:[w]},C="mask-".concat(f||H2()),L="clip-".concat(f||H2()),P={tag:"mask",attributes:t(t({},Y2),{},{id:C,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[d,A]},g={tag:"defs",children:[{tag:"clipPath",attributes:{id:L},children:h6(v)},P]};return r.push(g,{tag:"rect",attributes:t({fill:"currentColor","clip-path":"url(#".concat(L,")"),mask:"url(#".concat(C,")")},Y2)}),{children:r,attributes:s}}}},p6={provides:function(a){var e=!1;q.matchMedia&&(e=q.matchMedia("(prefers-reduced-motion: reduce)").matches),a.missingIconAbstract=function(){var r=[],s={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:t(t({},s),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var n=t(t({},i),{},{attributeName:"opacity"}),f={tag:"circle",attributes:t(t({},s),{},{cx:"256",cy:"364",r:"28"}),children:[]};return e||f.children.push({tag:"animate",attributes:t(t({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:t(t({},n),{},{values:"1;0;1;1;0;1;"})}),r.push(f),r.push({tag:"path",attributes:t(t({},s),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:e?[]:[{tag:"animate",attributes:t(t({},n),{},{values:"1;0;0;0;0;1;"})}]}),e||r.push({tag:"path",attributes:t(t({},s),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:t(t({},n),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},u6={hooks:function(){return{parseNodeAttributes:function(e,r){var s=r.getAttribute("data-fa-symbol"),i=s===null?!1:s===""?!0:s;return e.symbol=i,e}}}},C6=[p4,i6,n6,f6,l6,z6,v6,V6,M6,p6,u6];T4(C6,{mixoutsTo:x});var U6=x.noAuto,O6=x.config,I6=x.library,q6=x.dom,T3=x.parse,W6=x.findIconDefinition,G6=x.toHtml,B3=x.icon,_6=x.layer,d6=x.text,L6=x.counter;var g6=["*"],x6=c=>{throw new Error(`Could not find icon with iconName=${c.iconName} and prefix=${c.prefix} in the icon library.`)},N6=()=>{throw new Error("Property `icon` is required for `fa-icon`/`fa-duotone-icon` components.")},b6=c=>{let a={[`fa-${c.animation}`]:c.animation!=null&&!c.animation.startsWith("spin"),"fa-spin":c.animation==="spin"||c.animation==="spin-reverse","fa-spin-pulse":c.animation==="spin-pulse"||c.animation==="spin-pulse-reverse","fa-spin-reverse":c.animation==="spin-reverse"||c.animation==="spin-pulse-reverse","fa-pulse":c.animation==="spin-pulse"||c.animation==="spin-pulse-reverse","fa-fw":c.fixedWidth,"fa-border":c.border,"fa-inverse":c.inverse,"fa-layers-counter":c.counter,"fa-flip-horizontal":c.flip==="horizontal"||c.flip==="both","fa-flip-vertical":c.flip==="vertical"||c.flip==="both",[`fa-${c.size}`]:c.size!==null,[`fa-rotate-${c.rotate}`]:c.rotate!==null,[`fa-pull-${c.pull}`]:c.pull!==null,[`fa-stack-${c.stackItemSize}`]:c.stackItemSize!=null};return Object.keys(a).map(e=>a[e]?e:null).filter(e=>e)},S6=c=>c.prefix!==void 0&&c.iconName!==void 0,k6=(c,a)=>S6(c)?c:typeof c=="string"?{prefix:a,iconName:c}:{prefix:c[0],iconName:c[1]},w6=(()=>{let a=class a{constructor(){this.defaultPrefix="fas",this.fallbackIcon=null}};a.\u0275fac=function(s){return new(s||a)},a.\u0275prov=U2({token:a,factory:a.\u0275fac,providedIn:"root"});let c=a;return c})(),y6=(()=>{let a=class a{constructor(){this.definitions={}}addIcons(...r){for(let s of r){s.prefix in this.definitions||(this.definitions[s.prefix]={}),this.definitions[s.prefix][s.iconName]=s;for(let i of s.icon[2])typeof i=="string"&&(this.definitions[s.prefix][i]=s)}}addIconPacks(...r){for(let s of r){let i=Object.keys(s).map(n=>s[n]);this.addIcons(...i)}}getIconDefinition(r,s){return r in this.definitions&&s in this.definitions[r]?this.definitions[r][s]:null}};a.\u0275fac=function(s){return new(s||a)},a.\u0275prov=U2({token:a,factory:a.\u0275fac,providedIn:"root"});let c=a;return c})(),A6=(()=>{let a=class a{constructor(){this.stackItemSize="1x"}ngOnChanges(r){if("size"in r)throw new Error('fa-icon is not allowed to customize size when used inside fa-stack. Set size on the enclosing fa-stack instead: <fa-stack size="4x">...</fa-stack>.')}};a.\u0275fac=function(s){return new(s||a)},a.\u0275dir=d1({type:a,selectors:[["fa-icon","stackItemSize",""],["fa-duotone-icon","stackItemSize",""]],inputs:{stackItemSize:"stackItemSize",size:"size"},standalone:!0,features:[h2]});let c=a;return c})(),P6=(()=>{let a=class a{constructor(r,s){this.renderer=r,this.elementRef=s}ngOnInit(){this.renderer.addClass(this.elementRef.nativeElement,"fa-stack")}ngOnChanges(r){"size"in r&&(r.size.currentValue!=null&&this.renderer.addClass(this.elementRef.nativeElement,`fa-${r.size.currentValue}`),r.size.previousValue!=null&&this.renderer.removeClass(this.elementRef.nativeElement,`fa-${r.size.previousValue}`))}};a.\u0275fac=function(s){return new(s||a)(b(x1),b(L1))},a.\u0275cmp=X({type:a,selectors:[["fa-stack"]],inputs:{size:"size"},standalone:!0,features:[h2,Y],ngContentSelectors:g6,decls:1,vars:0,template:function(s,i){s&1&&(S1(),k1(0))},encapsulation:2});let c=a;return c})(),D3=(()=>{let a=class a{set spin(r){this.animation=r?"spin":void 0}set pulse(r){this.animation=r?"spin-pulse":void 0}constructor(r,s,i,n,f){this.sanitizer=r,this.config=s,this.iconLibrary=i,this.stackItem=n,this.classes=[],f!=null&&n==null&&console.error('FontAwesome: fa-icon and fa-duotone-icon elements must specify stackItemSize attribute when wrapped into fa-stack. Example: <fa-icon stackItemSize="2x"></fa-icon>.')}ngOnChanges(r){if(this.icon==null&&this.config.fallbackIcon==null){N6();return}if(r){let s=this.icon!=null?this.icon:this.config.fallbackIcon,i=this.findIconDefinition(s);if(i!=null){let n=this.buildParams();this.renderIcon(i,n)}}}render(){this.ngOnChanges({})}findIconDefinition(r){let s=k6(r,this.config.defaultPrefix);if("icon"in s)return s;let i=this.iconLibrary.getIconDefinition(s.prefix,s.iconName);return i??(x6(s),null)}buildParams(){let r={flip:this.flip,animation:this.animation,border:this.border,inverse:this.inverse,size:this.size||null,pull:this.pull||null,rotate:this.rotate||null,fixedWidth:typeof this.fixedWidth=="boolean"?this.fixedWidth:this.config.fixedWidth,stackItemSize:this.stackItem!=null?this.stackItem.stackItemSize:null},s=typeof this.transform=="string"?T3.transform(this.transform):this.transform;return{title:this.title,transform:s,classes:[...b6(r),...this.classes],mask:this.mask!=null?this.findIconDefinition(this.mask):null,styles:this.styles!=null?this.styles:{},symbol:this.symbol,attributes:{role:this.a11yRole}}}renderIcon(r,s){let i=B3(r,s);this.renderedIconHTML=this.sanitizer.bypassSecurityTrustHtml(i.html.join(`
`))}};a.\u0275fac=function(s){return new(s||a)(b(y1),b(w6),b(y6),b(A6,8),b(P6,8))},a.\u0275cmp=X({type:a,selectors:[["fa-icon"]],hostAttrs:[1,"ng-fa-icon"],hostVars:2,hostBindings:function(s,i){s&2&&(b1("innerHTML",i.renderedIconHTML,g1),N1("title",i.title))},inputs:{icon:"icon",title:"title",animation:"animation",spin:"spin",pulse:"pulse",mask:"mask",styles:"styles",flip:"flip",size:"size",pull:"pull",border:"border",inverse:"inverse",symbol:"symbol",rotate:"rotate",fixedWidth:"fixedWidth",classes:"classes",transform:"transform",a11yRole:"a11yRole"},standalone:!0,features:[h2,Y],decls:0,vars:0,template:function(s,i){},encapsulation:2});let c=a;return c})();var R3=(()=>{let a=class a{};a.\u0275fac=function(s){return new(s||a)},a.\u0275mod=C1({type:a}),a.\u0275inj=u1({});let c=a;return c})();var E3={prefix:"fas",iconName:"user",icon:[448,512,[128100,62144],"f007","M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"]};var B6={prefix:"fas",iconName:"square-plus",icon:[448,512,[61846,"plus-square"],"f0fe","M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM200 344V280H136c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V168c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H248v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z"]},U3=B6;var O3={prefix:"fas",iconName:"arrow-left",icon:[448,512,[8592],"f060","M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"]};var I3={prefix:"fas",iconName:"power-off",icon:[512,512,[9211],"f011","M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32V256c0 17.7 14.3 32 32 32s32-14.3 32-32V32zM143.5 120.6c13.6-11.3 15.4-31.5 4.1-45.1s-31.5-15.4-45.1-4.1C49.7 115.4 16 181.8 16 256c0 132.5 107.5 240 240 240s240-107.5 240-240c0-74.2-33.8-140.6-86.6-184.6c-13.6-11.3-33.8-9.4-45.1 4.1s-9.4 33.8 4.1 45.1c38.9 32.3 63.5 81 63.5 135.4c0 97.2-78.8 176-176 176s-176-78.8-176-176c0-54.4 24.7-103.1 63.5-135.4z"]};var F6={prefix:"fas",iconName:"magnifying-glass",icon:[512,512,[128269,"search"],"f002","M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"]},q3=F6;function D6(c,a){if(c&1){let e=G2();S(0,"li",6)(1,"a",10),p2("click",function(){O2(e);let s=u2();return I2(s.router.navigateByUrl("usuarios"))}),O(2,"Usuarios"),k()()}}function R6(c,a){if(c&1){let e=G2();S(0,"div",9)(1,"div",11)(2,"span",12),Z(3,"fa-icon",13),k()(),S(4,"div",14)(5,"a",15),p2("click",function(){O2(e);let s=u2();return I2(s.logOut())}),Z(6,"fa-icon",13),k()()()}if(c&2){let e=u2();U(3),M2("icon",e.faUser),U(3),M2("icon",e.faPowerOff)}}var s0=(()=>{let a=class a{constructor(r,s,i){this.loginService=r,this.usersService=s,this.router=i,this.faPowerOff=I3,this.faUser=E3,this.faSearch=q3,this.faPlusSquare=U3,this.faArrowLeft=O3,this.currentRoute="",this.currentUser=this.loginService.getLoggedUser(),this.currentRol=this.usersService.getUserRol()}ngOnInit(){this.loginService.getLoggedUser()==""&&this.logOut()}logOut(){this.loginService.logOut(),this.router.navigateByUrl("/login")}goBack(){this.currentRoute=this.router.url,this.currentRoute.includes("home")?this.router.navigate(["/"]):this.router.navigate(["/home"])}};a.\u0275fac=function(s){return new(s||a)(b(P1),b(T1),b(A1))},a.\u0275cmp=X({type:a,selectors:[["app-navbar"]],standalone:!0,features:[Y],decls:19,vars:3,consts:[[1,"app-header","navbar","mian-nav"],[1,"d-flex","align-items-center"],[1,"d-none","d-md-flex","btn-nav-end"],["type","button",1,"navbar-toggler","btn-menu",3,"click"],[1,"icon-arrow-left",3,"icon"],[1,"nav","navbar-nav","mx-auto"],[1,"nav-item"],["href","#",1,"nav-link"],[1,"nav","navbar-nav","ml-auto"],[1,"d-flex","align-items-center","ml-3"],[1,"nav-link",3,"click"],[1,"mr-3"],["tooltip","Mi Perfil","placement","bottom","container","body"],[1,"font-xs",3,"icon"],[1,"btn-nav-end"],["href","#","tooltip","Cerrar Sesi\xF3n","placement","bottom","container","body",1,"btn","btn-outline-danger","rounded-circle",3,"click"]],template:function(s,i){s&1&&(S(0,"header",0)(1,"div",1)(2,"div",2)(3,"button",3),p2("click",function(){return i.goBack()}),Z(4,"fa-icon",4),k()()(),S(5,"ul",5)(6,"li",6)(7,"a",7),O(8,"Home"),k()(),S(9,"li",6)(10,"a",7),O(11,"Turnos"),k()(),q2(12,D6,3,0,"li",6),S(13,"li",6)(14,"a",7),O(15,"Contactanos"),k()()(),S(16,"ul",8)(17,"li",6),q2(18,R6,7,2,"div",9),k()()()),s&2&&(U(4),M2("icon",i.faArrowLeft),U(8),W2(12,i.currentRol=="admin"?12:-1),U(6),W2(18,i.currentUser?18:-1))},dependencies:[R3,D3],styles:["header[_ngcontent-%COMP%]{background-color:#0c105a;color:#fff}.btn-menu[_ngcontent-%COMP%]{background-color:#fff}.icon-arrow-left[_ngcontent-%COMP%]{font-size:2.5rem;color:#0c105a}a[_ngcontent-%COMP%]{color:#fff}a[_ngcontent-%COMP%]:hover{cursor:pointer;color:#fff;opacity:.3}.navbar-nav[_ngcontent-%COMP%]{display:flex;align-items:center;flex-direction:row}.nav-item[_ngcontent-%COMP%]{margin-left:1em}.btn-nav-end[_ngcontent-%COMP%]{margin-left:1em;margin-right:1em}"]});let c=a;return c})();var n0=(()=>{let a=class a{constructor(){this.year=new Date().getFullYear()}};a.\u0275fac=function(s){return new(s||a)},a.\u0275cmp=X({type:a,selectors:[["app-footer"]],standalone:!0,features:[Y],decls:7,vars:1,consts:[[1,"app-footer"],[1,"footer-logo"],[1,"footer-data"],[1,"d-none","d-lg-inline"],["href","https://github.com/francisco-allende/LaboIV-Tp-Clinica"]],template:function(s,i){s&1&&(S(0,"footer",0),Z(1,"div",1),S(2,"div",2)(3,"span",3)(4,"a",4),O(5,"Clinica Online"),k(),O(6),k()()()),s&2&&(U(6),w1(" \xA9 ",i.year," - Todos los derechos reservados."))},styles:['.app-footer[_ngcontent-%COMP%]{display:flex;justify-content:center;background-color:#6d53b7}.footer-logo[_ngcontent-%COMP%]{background:url("./media/fondo-login-B4375WB6.png");background-repeat:no-repeat;width:12em;height:8em;background-size:50%;background-position:center}.footer-data[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;color:#000}a[_ngcontent-%COMP%]{text-decoration:none;color:#000}']});let c=a;return c})();export{s0 as a,n0 as b};

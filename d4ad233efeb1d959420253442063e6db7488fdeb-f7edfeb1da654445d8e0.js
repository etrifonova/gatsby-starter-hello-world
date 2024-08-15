"use strict";(self.webpackChunkgatsby_starter_hello_world=self.webpackChunkgatsby_starter_hello_world||[]).push([[630],{3204:function(e){const t=/[\p{Lu}]/u,r=/[\p{Ll}]/u,a=/^[\p{Lu}](?![\p{Lu}])/gu,n=/([\p{Alpha}\p{N}_]|$)/u,s=/[_.\- ]+/,i=new RegExp("^"+s.source),l=new RegExp(s.source+n.source,"gu"),o=new RegExp("\\d+"+n.source,"gu"),c=(e,n)=>{if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");if(n={pascalCase:!1,preserveConsecutiveUppercase:!1,...n},0===(e=Array.isArray(e)?e.map((e=>e.trim())).filter((e=>e.length)).join("-"):e.trim()).length)return"";const s=!1===n.locale?e=>e.toLowerCase():e=>e.toLocaleLowerCase(n.locale),c=!1===n.locale?e=>e.toUpperCase():e=>e.toLocaleUpperCase(n.locale);if(1===e.length)return n.pascalCase?c(e):s(e);return e!==s(e)&&(e=((e,a,n)=>{let s=!1,i=!1,l=!1;for(let o=0;o<e.length;o++){const c=e[o];s&&t.test(c)?(e=e.slice(0,o)+"-"+e.slice(o),s=!1,l=i,i=!0,o++):i&&l&&r.test(c)?(e=e.slice(0,o-1)+"-"+e.slice(o-1),l=i,i=!1,s=!0):(s=a(c)===c&&n(c)!==c,l=i,i=n(c)===c&&a(c)!==c)}return e})(e,s,c)),e=e.replace(i,""),e=n.preserveConsecutiveUppercase?((e,t)=>(a.lastIndex=0,e.replace(a,(e=>t(e)))))(e,s):s(e),n.pascalCase&&(e=c(e.charAt(0))+e.slice(1)),((e,t)=>(l.lastIndex=0,o.lastIndex=0,e.replace(l,((e,r)=>t(r))).replace(o,(e=>t(e)))))(e,c)};e.exports=c,e.exports.default=c},8032:function(e,t,r){r.d(t,{L:function(){return g},M:function(){return k},P:function(){return E},S:function(){return D},_:function(){return l},a:function(){return i},b:function(){return u},g:function(){return d},h:function(){return o}});var a=r(7294),n=(r(3204),r(5697)),s=r.n(n);function i(){return i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},i.apply(this,arguments)}function l(e,t){if(null==e)return{};var r,a,n={},s=Object.keys(e);for(a=0;a<s.length;a++)t.indexOf(r=s[a])>=0||(n[r]=e[r]);return n}const o=()=>"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype;function c(e,t,r){const a={};let n="gatsby-image-wrapper";return"fixed"===r?(a.width=e,a.height=t):"constrained"===r&&(n="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:n,"data-gatsby-image-wrapper":"",style:a}}function u(e,t,r,a,n){return void 0===n&&(n={}),i({},r,{loading:a,shouldLoad:e,"data-main-image":"",style:i({},n,{opacity:t?1:0})})}function d(e,t,r,a,n,s,l,o){const c={};s&&(c.backgroundColor=s,"fixed"===r?(c.width=a,c.height=n,c.backgroundColor=s,c.position="relative"):("constrained"===r||"fullWidth"===r)&&(c.position="absolute",c.top=0,c.left=0,c.bottom=0,c.right=0)),l&&(c.objectFit=l),o&&(c.objectPosition=o);const u=i({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:i({opacity:t?0:1,transition:"opacity 500ms linear"},c)});return u}const m=["children"],p=function(e){let{layout:t,width:r,height:n}=e;return"fullWidth"===t?a.createElement("div",{"aria-hidden":!0,style:{paddingTop:n/r*100+"%"}}):"constrained"===t?a.createElement("div",{style:{maxWidth:r,display:"block"}},a.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:"data:image/svg+xml;charset=utf-8,%3Csvg%20height='"+n+"'%20width='"+r+"'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E",style:{maxWidth:"100%",display:"block",position:"static"}})):null},g=function(e){let{children:t}=e,r=l(e,m);return a.createElement(a.Fragment,null,a.createElement(p,i({},r)),t,null)},f=["src","srcSet","loading","alt","shouldLoad"],h=["fallback","sources","shouldLoad"],y=function(e){let{src:t,srcSet:r,loading:n,alt:s="",shouldLoad:o}=e,c=l(e,f);return a.createElement("img",i({},c,{decoding:"async",loading:n,src:o?t:void 0,"data-src":o?void 0:t,srcSet:o?r:void 0,"data-srcset":o?void 0:r,alt:s}))},v=function(e){let{fallback:t,sources:r=[],shouldLoad:n=!0}=e,s=l(e,h);const o=s.sizes||(null==t?void 0:t.sizes),c=a.createElement(y,i({},s,t,{sizes:o,shouldLoad:n}));return r.length?a.createElement("picture",null,r.map((e=>{let{media:t,srcSet:r,type:s}=e;return a.createElement("source",{key:t+"-"+s+"-"+r,type:s,media:t,srcSet:n?r:void 0,"data-srcset":n?void 0:r,sizes:o})})),c):c};var b;y.propTypes={src:n.string.isRequired,alt:n.string.isRequired,sizes:n.string,srcSet:n.string,shouldLoad:n.bool},v.displayName="Picture",v.propTypes={alt:n.string.isRequired,shouldLoad:n.bool,fallback:n.exact({src:n.string.isRequired,srcSet:n.string,sizes:n.string}),sources:n.arrayOf(n.oneOfType([n.exact({media:n.string.isRequired,type:n.string,sizes:n.string,srcSet:n.string.isRequired}),n.exact({media:n.string,type:n.string.isRequired,sizes:n.string,srcSet:n.string.isRequired})]))};const w=["fallback"],E=function(e){let{fallback:t}=e,r=l(e,w);return t?a.createElement(v,i({},r,{fallback:{src:t},"aria-hidden":!0,alt:""})):a.createElement("div",i({},r))};E.displayName="Placeholder",E.propTypes={fallback:n.string,sources:null==(b=v.propTypes)?void 0:b.sources,alt:function(e,t,r){return e[t]?new Error("Invalid prop `"+t+"` supplied to `"+r+"`. Validation failed."):null}};const k=function(e){return a.createElement(a.Fragment,null,a.createElement(v,i({},e)),a.createElement("noscript",null,a.createElement(v,i({},e,{shouldLoad:!0}))))};k.displayName="MainImage",k.propTypes=v.propTypes;const C=["as","className","class","style","image","loading","imgClassName","imgStyle","backgroundColor","objectFit","objectPosition"],O=["style","className"],N=e=>e.replace(/\n/g,""),j=function(e,t,r){for(var a=arguments.length,n=new Array(a>3?a-3:0),i=3;i<a;i++)n[i-3]=arguments[i];return e.alt||""===e.alt?s().string.apply(s(),[e,t,r].concat(n)):new Error('The "alt" prop is required in '+r+'. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html')},S={image:s().object.isRequired,alt:j},L=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],x=["style","className"],P=new Set;let T,I;const _=function(e){let{as:t="div",image:n,style:s,backgroundColor:u,className:d,class:m,onStartLoad:p,onLoad:g,onError:f}=e,h=l(e,L);const{width:y,height:v,layout:b}=n,w=c(y,v,b),{style:E,className:k}=w,C=l(w,x),O=(0,a.useRef)(),N=(0,a.useMemo)((()=>JSON.stringify(n.images)),[n.images]);m&&(d=m);const j=function(e,t,r){let a="";return"fullWidth"===e&&(a='<div aria-hidden="true" style="padding-top: '+r/t*100+'%;"></div>'),"constrained"===e&&(a='<div style="max-width: '+t+'px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg%20height=\''+r+"'%20width='"+t+"'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E\" style=\"max-width: 100%; display: block; position: static;\"></div>"),a}(b,y,v);return(0,a.useEffect)((()=>{T||(T=r.e(731).then(r.bind(r,6731)).then((e=>{let{renderImageToString:t,swapPlaceholderImage:r}=e;return I=t,{renderImageToString:t,swapPlaceholderImage:r}})));const e=O.current.querySelector("[data-gatsby-image-ssr]");if(e&&o())return e.complete?(null==p||p({wasCached:!0}),null==g||g({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)):(null==p||p({wasCached:!0}),e.addEventListener("load",(function t(){e.removeEventListener("load",t),null==g||g({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)}))),void P.add(N);if(I&&P.has(N))return;let t,a;return T.then((e=>{let{renderImageToString:r,swapPlaceholderImage:l}=e;O.current&&(O.current.innerHTML=r(i({isLoading:!0,isLoaded:P.has(N),image:n},h)),P.has(N)||(t=requestAnimationFrame((()=>{O.current&&(a=l(O.current,N,P,s,p,g,f))}))))})),()=>{t&&cancelAnimationFrame(t),a&&a()}}),[n]),(0,a.useLayoutEffect)((()=>{P.has(N)&&I&&(O.current.innerHTML=I(i({isLoading:P.has(N),isLoaded:P.has(N),image:n},h)),null==p||p({wasCached:!0}),null==g||g({wasCached:!0}))}),[n]),(0,a.createElement)(t,i({},C,{style:i({},E,s,{backgroundColor:u}),className:k+(d?" "+d:""),ref:O,dangerouslySetInnerHTML:{__html:j},suppressHydrationWarning:!0}))},R=(0,a.memo)((function(e){return e.image?(0,a.createElement)(_,e):null}));R.propTypes=S,R.displayName="GatsbyImage";const q=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions","breakpoints","outputPixelDensities"];function z(e){return function(t){let{src:r,__imageData:n,__error:s}=t,o=l(t,q);return s&&console.warn(s),n?a.createElement(e,i({image:n},o)):(console.warn("Image not loaded",r),null)}}const A=z((function(e){let{as:t="div",className:r,class:n,style:s,image:o,loading:m="lazy",imgClassName:p,imgStyle:f,backgroundColor:h,objectFit:y,objectPosition:v}=e,b=l(e,C);if(!o)return console.warn("[gatsby-plugin-image] Missing image prop"),null;n&&(r=n),f=i({objectFit:y,objectPosition:v,backgroundColor:h},f);const{width:w,height:j,layout:S,images:L,placeholder:x,backgroundColor:P}=o,T=c(w,j,S),{style:I,className:_}=T,R=l(T,O),q={fallback:void 0,sources:[]};return L.fallback&&(q.fallback=i({},L.fallback,{srcSet:L.fallback.srcSet?N(L.fallback.srcSet):void 0})),L.sources&&(q.sources=L.sources.map((e=>i({},e,{srcSet:N(e.srcSet)})))),a.createElement(t,i({},R,{style:i({},I,s,{backgroundColor:h}),className:_+(r?" "+r:"")}),a.createElement(g,{layout:S,width:w,height:j},a.createElement(E,i({},d(x,!1,S,w,j,P,y,v))),a.createElement(k,i({"data-gatsby-image-ssr":"",className:p},b,u("eager"===m,!1,q,m,f)))))})),W=function(e,t){for(var r=arguments.length,a=new Array(r>2?r-2:0),n=2;n<r;n++)a[n-2]=arguments[n];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?s().number.apply(s(),[e,t].concat(a)):new Error('"'+t+'" '+e[t]+" may not be passed when layout is fullWidth.")},F=new Set(["fixed","fullWidth","constrained"]),U={src:s().string.isRequired,alt:j,width:W,height:W,sizes:s().string,layout:e=>{if(void 0!==e.layout&&!F.has(e.layout))return new Error("Invalid value "+e.layout+'" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".')}};A.displayName="StaticImage",A.propTypes=U;const D=z(R);D.displayName="StaticImage",D.propTypes=U},8829:function(e,t,r){r.d(t,{Z:function(){return c}});var a=r(7294),n=r(4160),s=r(2091),i=r.p+"static/logo-42d0a9bfc3a025a4e387ed1cc5d2ddda.svg";var l=()=>{const{0:e,1:t}=(0,a.useState)(!1);return a.createElement("nav",{className:"navbar"},a.createElement("div",{className:"nav-center"},a.createElement("div",{className:"nav-header"},a.createElement(n.rU,{to:"/"},a.createElement("img",{src:i,alt:"simply recipes"})),a.createElement("button",{className:"nav-btn",onClick:()=>t(!e)},a.createElement(s.jw0,null))),a.createElement("div",{className:e?"nav-links show-links":"nav-links"},a.createElement(n.rU,{to:"/",className:"nav-link",activeClassName:"active-link",onClick:()=>t(!1)},"home"),a.createElement(n.rU,{to:"/recipes",className:"nav-link",activeClassName:"active-link",onClick:()=>t(!1)},"recipes"),a.createElement(n.rU,{to:"/tags",className:"nav-link",activeClassName:"active-link",onClick:()=>t(!1)},"tags"),a.createElement(n.rU,{to:"/about",className:"nav-link",activeClassName:"active-link",onClick:()=>t(!1)},"about"),a.createElement("div",{className:"nav-link contact-link"},a.createElement(n.rU,{to:"/contact",className:"btn",onClick:()=>t(!1)},"contact")))))};var o=()=>a.createElement("footer",{className:"page-footer"},a.createElement("p",null,"© ",(new Date).getFullYear()," ",a.createElement("span",null,"Simple Recipes"),". Built with"," "," ",a.createElement("a",{href:"https://www.gatsbyjs.com/"},"Gatsby")));var c=e=>{let{children:t}=e;return a.createElement(a.Fragment,null,a.createElement(l,null),t,a.createElement(o,null))}},3621:function(e,t,r){r.d(t,{w_:function(){return p}});var a=r(7294),n={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},s=a.createContext&&a.createContext(n),i=["attr","size","title"];function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r={};for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){if(t.indexOf(a)>=0)continue;r[a]=e[a]}return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},o.apply(this,arguments)}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){d(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function d(e,t,r){var a;return(t="symbol"==typeof(a=function(e,t){if("object"!=typeof e||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var a=r.call(e,t||"default");if("object"!=typeof a)return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(t,"string"))?a:a+"")in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function m(e){return e&&e.map(((e,t)=>a.createElement(e.tag,u({key:t},e.attr),m(e.child))))}function p(e){return t=>a.createElement(g,o({attr:u({},e.attr)},t),m(e.child))}function g(e){var t=t=>{var r,{attr:n,size:s,title:c}=e,d=l(e,i),m=s||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),a.createElement("svg",o({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,n,d,{className:r,style:u(u({color:e.color||t.color},t.style),e.style),height:m,width:m,xmlns:"http://www.w3.org/2000/svg"}),c&&a.createElement("title",null,c),e.children)};return void 0!==s?a.createElement(s.Consumer,null,(e=>t(e))):t(n)}}}]);
//# sourceMappingURL=d4ad233efeb1d959420253442063e6db7488fdeb-f7edfeb1da654445d8e0.js.map
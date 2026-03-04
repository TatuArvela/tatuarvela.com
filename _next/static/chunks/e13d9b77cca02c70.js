(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,3828,(e,t,n)=>{t.exports=e.r(6990)},8678,(e,t,n)=>{t.exports=e.r(963)},2474,814,6459,e=>{"use strict";var t,n,r=e.i(1398),i=e.i(1788),o=e.i(461),a=function(){return(a=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)};function s(e,t,n){if(n||2==arguments.length)for(var r,i=0,o=t.length;i<o;i++)!r&&i in t||(r||(r=Array.prototype.slice.call(t,0,i)),r[i]=t[i]);return e.concat(r||Array.prototype.slice.call(t))}"function"==typeof SuppressedError&&SuppressedError;Object.create(null);var l="-ms-",c="-moz-",u="-webkit-",d="comm",p="rule",f="decl",h="@keyframes",m=Math.abs,g=String.fromCharCode,v=Object.assign;function y(e,t){return(e=t.exec(e))?e[0]:e}function x(e,t,n){return e.replace(t,n)}function b(e,t,n){return e.indexOf(t,n)}function w(e,t){return 0|e.charCodeAt(t)}function S(e,t,n){return e.slice(t,n)}function C(e){return e.length}function E(e,t){return t.push(e),e}function $(e,t){return e.filter(function(e){return!y(e,t)})}var k=1,j=1,N=0,_=0,I=0,A="";function R(e,t,n,r,i,o,a,s){return{value:e,root:t,parent:n,type:r,props:i,children:o,line:k,column:j,length:a,return:"",siblings:s}}function O(e,t){return v(R("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function P(e){for(;e.root;)e=O(e.root,{children:[e]});E(e,e.siblings)}function T(){return I=_<N?w(A,_++):0,j++,10===I&&(j=1,k++),I}function z(){return w(A,_)}function L(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function F(e){var t,n;return(t=_-1,n=function e(t){for(;T();)switch(I){case t:return _;case 34:case 39:34!==t&&39!==t&&e(I);break;case 40:41===t&&e(t);break;case 92:T()}return _}(91===e?e+2:40===e?e+1:e),S(A,t,n)).trim()}function M(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function D(e,t,n,r){switch(e.type){case"@layer":if(e.children.length)break;case"@import":case"@namespace":case f:return e.return=e.return||e.value;case d:return"";case h:return e.return=e.value+"{"+M(e.children,r)+"}";case p:if(!C(e.value=e.props.join(",")))return""}return C(n=M(e.children,r))?e.return=e.value+"{"+n+"}":""}function G(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case f:e.return=function e(t,n,r){var i;switch(i=n,45^w(t,0)?(((i<<2^w(t,0))<<2^w(t,1))<<2^w(t,2))<<2^w(t,3):0){case 5103:return u+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:case 6391:case 5879:case 5623:case 6135:case 4599:return u+t+t;case 4855:return u+t.replace("add","source-over").replace("substract","source-out").replace("intersect","source-in").replace("exclude","xor")+t;case 4789:return c+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return u+t+c+t+l+t+t;case 5936:switch(w(t,n+11)){case 114:return u+t+l+x(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return u+t+l+x(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return u+t+l+x(t,/[svh]\w+-[tblr]{2}/,"lr")+t}case 6828:case 4268:case 2903:return u+t+l+t+t;case 6165:return u+t+l+"flex-"+t+t;case 5187:return u+t+x(t,/(\w+).+(:[^]+)/,u+"box-$1$2"+l+"flex-$1$2")+t;case 5443:return u+t+l+"flex-item-"+x(t,/flex-|-self/g,"")+(y(t,/flex-|baseline/)?"":l+"grid-row-"+x(t,/flex-|-self/g,""))+t;case 4675:return u+t+l+"flex-line-pack"+x(t,/align-content|flex-|-self/g,"")+t;case 5548:return u+t+l+x(t,"shrink","negative")+t;case 5292:return u+t+l+x(t,"basis","preferred-size")+t;case 6060:return u+"box-"+x(t,"-grow","")+u+t+l+x(t,"grow","positive")+t;case 4554:return u+x(t,/([^-])(transform)/g,"$1"+u+"$2")+t;case 6187:return x(x(x(t,/(zoom-|grab)/,u+"$1"),/(image-set)/,u+"$1"),t,"")+t;case 5495:case 3959:return x(t,/(image-set\([^]*)/,u+"$1$`$1");case 4968:return x(x(t,/(.+:)(flex-)?(.*)/,u+"box-pack:$3"+l+"flex-pack:$3"),/space-between/,"justify")+u+t+t;case 4200:if(!y(t,/flex-|baseline/))return l+"grid-column-align"+S(t,n)+t;break;case 2592:case 3360:return l+x(t,"template-","")+t;case 4384:case 3616:if(r&&r.some(function(e,t){return n=t,y(e.props,/grid-\w+-end/)}))return~b(t+(r=r[n].value),"span",0)?t:l+x(t,"-start","")+t+l+"grid-row-span:"+(~b(r,"span",0)?y(r,/\d+/):y(r,/\d+/)-y(t,/\d+/))+";";return l+x(t,"-start","")+t;case 4896:case 4128:return r&&r.some(function(e){return y(e.props,/grid-\w+-start/)})?t:l+x(x(t,"-end","-span"),"span ","")+t;case 4095:case 3583:case 4068:case 2532:return x(t,/(.+)-inline(.+)/,u+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(C(t)-1-n>6)switch(w(t,n+1)){case 109:if(45!==w(t,n+4))break;case 102:return x(t,/(.+:)(.+)-([^]+)/,"$1"+u+"$2-$3$1"+c+(108==w(t,n+3)?"$3":"$2-$3"))+t;case 115:return~b(t,"stretch",0)?e(x(t,"stretch","fill-available"),n,r)+t:t}break;case 5152:case 5920:return x(t,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(e,n,r,i,o,a,s){return l+n+":"+r+s+(i?l+n+"-span:"+(o?a:a-r)+s:"")+t});case 4949:if(121===w(t,n+6))return x(t,":",":"+u)+t;break;case 6444:switch(w(t,45===w(t,14)?18:11)){case 120:return x(t,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+u+(45===w(t,14)?"inline-":"")+"box$3$1"+u+"$2$3$1"+l+"$2box$3")+t;case 100:return x(t,":",":"+l)+t}break;case 5719:case 2647:case 2135:case 3927:case 2391:return x(t,"scroll-","scroll-snap-")+t}return t}(e.value,e.length,n);return;case h:return M([O(e,{value:x(e.value,"@","@"+u)})],r);case p:if(e.length){var i,o;return i=n=e.props,o=function(t){switch(y(t,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":P(O(e,{props:[x(t,/:(read-\w+)/,":"+c+"$1")]})),P(O(e,{props:[t]})),v(e,{props:$(n,r)});break;case"::placeholder":P(O(e,{props:[x(t,/:(plac\w+)/,":"+u+"input-$1")]})),P(O(e,{props:[x(t,/:(plac\w+)/,":"+c+"$1")]})),P(O(e,{props:[x(t,/:(plac\w+)/,l+"input-$1")]})),P(O(e,{props:[t]})),v(e,{props:$(n,r)})}return""},i.map(o).join("")}}}function B(e,t,n,r,i,o,a,s,l,c,u,d){for(var f=i-1,h=0===i?o:[""],g=h.length,v=0,y=0,b=0;v<r;++v)for(var w=0,C=S(e,f+1,f=m(y=a[v])),E=e;w<g;++w)(E=(y>0?h[w]+" "+C:x(C,/&\f/g,h[w])).trim())&&(l[b++]=E);return R(e,t,n,0===i?p:s,l,c,u,d)}function W(e,t,n,r,i){return R(e,t,n,f,S(e,0,r),S(e,r+1,-1),r,i)}var U={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Y=void 0!==o.default&&void 0!==o.default.env&&(o.default.env.REACT_APP_SC_ATTR||o.default.env.SC_ATTR)||"data-styled",H="active",q="data-styled-version",V="6.3.11",X="/*!sc*/\n",K="u">typeof window&&"u">typeof document,J=!!("boolean"==typeof SC_DISABLE_SPEEDY?SC_DISABLE_SPEEDY:void 0!==o.default&&void 0!==o.default.env&&void 0!==o.default.env.REACT_APP_SC_DISABLE_SPEEDY&&""!==o.default.env.REACT_APP_SC_DISABLE_SPEEDY?"false"!==o.default.env.REACT_APP_SC_DISABLE_SPEEDY&&o.default.env.REACT_APP_SC_DISABLE_SPEEDY:void 0!==o.default&&void 0!==o.default.env&&void 0!==o.default.env.SC_DISABLE_SPEEDY&&""!==o.default.env.SC_DISABLE_SPEEDY&&"false"!==o.default.env.SC_DISABLE_SPEEDY&&o.default.env.SC_DISABLE_SPEEDY),Z={};function Q(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var ee=new Map,et=new Map,en=1,er=function(e){if(ee.has(e))return ee.get(e);for(;et.has(en);)en++;var t=en++;return ee.set(e,t),et.set(t,e),t},ei=function(e,t){en=t+1,ee.set(e,t),et.set(t,e)},eo=Object.freeze([]),ea=Object.freeze({});function es(e,t,n){return void 0===n&&(n=ea),e.theme!==n.theme&&e.theme||t||n.theme}var el=new Set(["a","abbr","address","area","article","aside","audio","b","bdi","bdo","blockquote","body","button","br","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","label","legend","li","main","map","mark","menu","meter","nav","object","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","slot","small","span","strong","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","switch","symbol","text","textPath","tspan","use"]),ec=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,eu=/(^-|-$)/g;function ed(e){return e.replace(ec,"-").replace(eu,"")}var ep=/(a)(d)/gi,ef=function(e){return String.fromCharCode(e+(e>25?39:97))};function eh(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=ef(t%52)+n;return(ef(t%52)+n).replace(ep,"$1-$2")}var em,eg=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},ev=function(e){return eg(5381,e)};function ey(e){return eh(ev(e)>>>0)}function ex(e){return"string"==typeof e}var eb="function"==typeof Symbol&&Symbol.for,ew=eb?Symbol.for("react.memo"):60115,eS=eb?Symbol.for("react.forward_ref"):60112,eC={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},eE={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},e$={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},ek=((em={})[eS]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},em[ew]=e$,em);function ej(e){return("type"in e&&e.type.$$typeof)===ew?e$:"$$typeof"in e?ek[e.$$typeof]:eC}var eN=Object.defineProperty,e_=Object.getOwnPropertyNames,eI=Object.getOwnPropertySymbols,eA=Object.getOwnPropertyDescriptor,eR=Object.getPrototypeOf,eO=Object.prototype;function eP(e){return"function"==typeof e}function eT(e){return"object"==typeof e&&"styledComponentId"in e}function ez(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function eL(e,t){return e.join(t||"")}function eF(e){return null!==e&&"object"==typeof e&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function eM(e,t){Object.defineProperty(e,"toString",{value:t})}var eD=function(){function e(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e,this._cGroup=0,this._cIndex=0}return e.prototype.indexOfGroup=function(e){if(e===this._cGroup)return this._cIndex;var t=this._cIndex;if(e>this._cGroup)for(var n=this._cGroup;n<e;n++)t+=this.groupSizes[n];else for(n=this._cGroup-1;n>=e;n--)t-=this.groupSizes[n];return this._cGroup=e,this._cIndex=t,t},e.prototype.insertRules=function(e,t){if(e>=this.groupSizes.length){for(var n=this.groupSizes,r=n.length,i=r;e>=i;)if((i<<=1)<0)throw Q(16,"".concat(e));this.groupSizes=new Uint32Array(i),this.groupSizes.set(n),this.length=i;for(var o=r;o<i;o++)this.groupSizes[o]=0}for(var a=this.indexOfGroup(e+1),s=0,l=(o=0,t.length);o<l;o++)this.tag.insertRule(a,t[o])&&(this.groupSizes[e]++,a++,s++);s>0&&this._cGroup>e&&(this._cIndex+=s)},e.prototype.clearGroup=function(e){if(e<this.length){var t=this.groupSizes[e],n=this.indexOfGroup(e),r=n+t;this.groupSizes[e]=0;for(var i=n;i<r;i++)this.tag.deleteRule(n);t>0&&this._cGroup>e&&(this._cIndex-=t)}},e.prototype.getGroup=function(e){var t="";if(e>=this.length||0===this.groupSizes[e])return t;for(var n=this.groupSizes[e],r=this.indexOfGroup(e),i=r+n,o=r;o<i;o++)t+=this.tag.getRule(o)+X;return t},e}(),eG="style[".concat(Y,"][").concat(q,'="').concat(V,'"]'),eB=new RegExp("^".concat(Y,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),eW=function(e){return"u">typeof ShadowRoot&&e instanceof ShadowRoot||"host"in e&&11===e.nodeType},eU=function(e){if(!e)return document;if(eW(e))return e;if("getRootNode"in e){var t=e.getRootNode();if(eW(t))return t}return document},eY=function(e,t,n){for(var r,i=n.split(","),o=0,a=i.length;o<a;o++)(r=i[o])&&e.registerName(t,r)},eH=function(e,t){for(var n,r=(null!=(n=t.textContent)?n:"").split(X),i=[],o=0,a=r.length;o<a;o++){var s=r[o].trim();if(s){var l=s.match(eB);if(l){var c=0|parseInt(l[1],10),u=l[2];0!==c&&(ei(u,c),eY(e,u,l[3]),e.getTag().insertRules(c,i)),i.length=0}else i.push(s)}}},eq=function(e){for(var t=eU(e.options.target).querySelectorAll(eG),n=0,r=t.length;n<r;n++){var i=t[n];i&&i.getAttribute(Y)!==H&&(eH(e,i),i.parentNode&&i.parentNode.removeChild(i))}};function eV(){return"u">typeof __webpack_nonce__?__webpack_nonce__:null}var eX=function(e){var t,n=document.head,r=e||n,i=document.createElement("style"),o=(t=Array.from(r.querySelectorAll("style[".concat(Y,"]"))))[t.length-1],a=void 0!==o?o.nextSibling:null;i.setAttribute(Y,H),i.setAttribute(q,V);var s=eV();return s&&i.setAttribute("nonce",s),r.insertBefore(i,a),i},eK=function(){function e(e){this.element=eX(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(e){var t;if(e.sheet)return e.sheet;for(var n=null!=(t=e.getRootNode().styleSheets)?t:document.styleSheets,r=0,i=n.length;r<i;r++){var o=n[r];if(o.ownerNode===e)return o}throw Q(17)}(this.element),this.length=0}return e.prototype.insertRule=function(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch(e){return!1}},e.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},e.prototype.getRule=function(e){var t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:""},e}(),eJ=function(){function e(e){this.element=eX(e),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(e,t){if(e<=this.length&&e>=0){var n=document.createTextNode(t);return this.element.insertBefore(n,this.nodes[e]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},e.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},e}(),eZ=function(){function e(e){this.rules=[],this.length=0}return e.prototype.insertRule=function(e,t){return e<=this.length&&(e===this.length?this.rules.push(t):this.rules.splice(e,0,t),this.length++,!0)},e.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},e.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},e}(),eQ=K,e0={isServer:!K,useCSSOMInjection:!J},e1=function(){function e(e,t,n){void 0===e&&(e=ea),void 0===t&&(t={});var r=this;this.options=a(a({},e0),e),this.gs=t,this.names=new Map(n),this.server=!!e.isServer,!this.server&&K&&eQ&&(eQ=!1,eq(this)),eM(this,function(){for(var e=r.getTag(),t=e.length,n="",i=0;i<t;i++)!function(t){var i=et.get(t);if(void 0===i)return;var o=r.names.get(i);if(void 0===o||!o.size)return;var a=e.getGroup(t);if(0!==a.length){var s=Y+".g"+t+'[id="'+i+'"]',l="";o.forEach(function(e){e.length>0&&(l+=e+",")}),n+=a+s+'{content:"'+l+'"}'+X}}(i);return n})}return e.registerId=function(e){return er(e)},e.prototype.rehydrate=function(){!this.server&&K&&eq(this)},e.prototype.reconstructWithOptions=function(t,n){void 0===n&&(n=!0);var r=new e(a(a({},this.options),t),this.gs,n&&this.names||void 0);return!this.server&&K&&t.target!==this.options.target&&eU(this.options.target)!==eU(t.target)&&eq(r),r},e.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},e.prototype.getTag=function(){var e,t,n;return this.tag||(this.tag=(t=(e=this.options).useCSSOMInjection,n=e.target,new eD(e.isServer?new eZ(n):t?new eK(n):new eJ(n))))},e.prototype.hasNameForId=function(e,t){var n,r;return null!=(r=null==(n=this.names.get(e))?void 0:n.has(t))&&r},e.prototype.registerName=function(e,t){er(e);var n=this.names.get(e);n?n.add(t):this.names.set(e,new Set([t]))},e.prototype.insertRules=function(e,t,n){this.registerName(e,t),this.getTag().insertRules(er(e),n)},e.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},e.prototype.clearRules=function(e){this.getTag().clearGroup(er(e)),this.clearNames(e)},e.prototype.clearTag=function(){this.tag=void 0},e}(),e2=/&/g;function e5(e){if(-1===e.indexOf("}"))return!1;for(var t=e.length,n=0,r=0,i=!1,o=0;o<t;o++){var a=e.charCodeAt(o);if(0!==r||i||47!==a||42!==e.charCodeAt(o+1))if(i)42===a&&47===e.charCodeAt(o+1)&&(i=!1,o++);else if(34!==a&&39!==a||0!==o&&92===e.charCodeAt(o-1)){if(0===r){if(123===a)n++;else if(125===a&&--n<0)return!0}}else 0===r?r=a:r===a&&(r=0);else i=!0,o++}return 0!==n||0!==r}function e3(e){var t,n,r,i,o,a,s=void 0===e?ea:e,l=s.options,c=void 0===l?ea:l,u=s.plugins,f=void 0===u?eo:u,h=function(e,t,n){return n.startsWith(o)&&n.endsWith(o)&&n.replaceAll(o,"").length>0?".".concat(i):e},v=f.slice();v.push(function(e){e.type===p&&e.value.includes("&")&&(a||(a=RegExp("\\".concat(o,"\\b"),"g")),e.props[0]=e.props[0].replace(e2,o).replace(a,h))}),c.prefix&&v.push(G),v.push(D);var y=[],$=(n=(t=v.concat((r=function(e){return y.push(e)},function(e){!e.root&&(e=e.return)&&r(e)}))).length,function(e,r,i,o){for(var a="",s=0;s<n;s++)a+=t[s](e,r,i,o)||"";return a}),O=function(e,t,n,r){void 0===t&&(t=""),void 0===n&&(n=""),void 0===r&&(r="&"),i=r,o=t,a=void 0;var s,l,u,p=function(e){if(!e5(e))return e;for(var t=e.length,n="",r=0,i=0,o=0,a=!1,s=0;s<t;s++){var l=e.charCodeAt(s);if(0!==o||a||47!==l||42!==e.charCodeAt(s+1))if(a)42===l&&47===e.charCodeAt(s+1)&&(a=!1,s++);else if(34!==l&&39!==l||0!==s&&92===e.charCodeAt(s-1)){if(0===o)if(123===l)i++;else if(125===l){if(--i<0){for(var c=s+1;c<t;){var u=e.charCodeAt(c);if(59===u||10===u)break;c++}c<t&&59===e.charCodeAt(c)&&c++,i=0,s=c-1,r=c;continue}0===i&&(n+=e.substring(r,s+1),r=s+1)}else 59===l&&0===i&&(n+=e.substring(r,s+1),r=s+1)}else 0===o?o=l:o===l&&(o=0);else a=!0,s++}if(r<t){var d=e.substring(r);e5(d)||(n+=d)}return n}(function(e){if(-1===e.indexOf("//"))return e;for(var t=e.length,n=[],r=0,i=0,o=0,a=0;i<t;){var s=e.charCodeAt(i);if(34!==s&&39!==s||0!==i&&92===e.charCodeAt(i-1))if(0===o)if(47===s&&i+1<t&&42===e.charCodeAt(i+1)){for(i+=2;i+1<t&&(42!==e.charCodeAt(i)||47!==e.charCodeAt(i+1));)i++;i+=2}else if(40===s&&i>=3&&108==(32|e.charCodeAt(i-1))&&114==(32|e.charCodeAt(i-2))&&117==(32|e.charCodeAt(i-3)))a=1,i++;else if(a>0)41===s?a--:40===s&&a++,i++;else if(42===s&&i+1<t&&47===e.charCodeAt(i+1))i>r&&n.push(e.substring(r,i)),r=i+=2;else if(47===s&&i+1<t&&47===e.charCodeAt(i+1)){for(i>r&&n.push(e.substring(r,i));i<t&&10!==e.charCodeAt(i);)i++;r=i}else i++;else i++;else 0===o?o=s:o===s&&(o=0),i++}return 0===r?e:(r<t&&n.push(e.substring(r)),n.join(""))}(e)),f=(u=function e(t,n,r,i,o,a,s,l,c){for(var u,p,f,h,v=0,y=0,$=s,N=0,O=0,P=0,M=1,D=1,G=1,U=0,Y="",H=o,q=a,V=i,X=Y;D;)switch(P=U,U=T()){case 40:if(108!=P&&58==w(X,$-1)){-1!=b(X+=x(F(U),"&","&\f"),"&\f",m(v?l[v-1]:0))&&(G=-1);break}case 34:case 39:case 91:X+=F(U);break;case 9:case 10:case 13:case 32:X+=function(e){for(;I=z();)if(I<33)T();else break;return L(e)>2||L(I)>3?"":" "}(P);break;case 92:X+=function(e,t){for(var n;--t&&T()&&!(I<48)&&!(I>102)&&(!(I>57)||!(I<65))&&(!(I>70)||!(I<97)););return n=_+(t<6&&32==z()&&32==T()),S(A,e,n)}(_-1,7);continue;case 47:switch(z()){case 42:case 47:E((u=function(e,t){for(;T();)if(e+I===57)break;else if(e+I===84&&47===z())break;return"/*"+S(A,t,_-1)+"*"+g(47===e?e:T())}(T(),_),p=n,f=r,h=c,R(u,p,f,d,g(I),S(u,2,-2),0,h)),c),(5==L(P||1)||5==L(z()||1))&&C(X)&&" "!==S(X,-1,void 0)&&(X+=" ");break;default:X+="/"}break;case 123*M:l[v++]=C(X)*G;case 125*M:case 59:case 0:switch(U){case 0:case 125:D=0;case 59+y:-1==G&&(X=x(X,/\f/g,"")),O>0&&(C(X)-$||0===M&&47===P)&&E(O>32?W(X+";",i,r,$-1,c):W(x(X," ","")+";",i,r,$-2,c),c);break;case 59:X+=";";default:if(E(V=B(X,n,r,v,y,o,l,Y,H=[],q=[],$,a),a),123===U)if(0===y)e(X,n,V,V,H,a,$,l,q);else{switch(N){case 99:if(110===w(X,3))break;case 108:if(97===w(X,2))break;default:y=0;case 100:case 109:case 115:}y?e(t,V,V,i&&E(B(t,V,V,0,0,o,l,Y,o,H=[],$,q),q),o,q,$,l,i?H:q):e(X,V,V,V,[""],q,0,l,q)}}v=y=O=0,M=G=1,Y=X="",$=s;break;case 58:$=1+C(X),O=P;default:if(M<1){if(123==U)--M;else if(125==U&&0==M++&&125==(I=_>0?w(A,--_):0,j--,10===I&&(j=1,k--),I))continue}switch(X+=g(U),U*M){case 38:G=y>0?1:(X+="\f",-1);break;case 44:l[v++]=(C(X)-1)*G,G=1;break;case 64:45===z()&&(X+=F(T())),N=z(),y=$=C(Y=X+=function(e){for(;!L(z());)T();return S(A,e,_)}(_)),U++;break;case 45:45===P&&2==C(X)&&(M=0)}}return a}("",null,null,null,[""],(l=s=n||t?"".concat(n," ").concat(t," { ").concat(p," }"):p,k=j=1,N=C(A=l),_=0,s=[]),0,[0],s),A="",u);return c.namespace&&(f=function e(t,n){return t.map(function(t){return"rule"===t.type&&(t.value="".concat(n," ").concat(t.value),t.value=t.value.replaceAll(",",",".concat(n," ")),t.props=t.props.map(function(e){return"".concat(n," ").concat(e)})),Array.isArray(t.children)&&"@keyframes"!==t.type&&(t.children=e(t.children,n)),t})}(f,c.namespace)),y=[],M(f,$),y};return O.hash=f.length?f.reduce(function(e,t){return t.name||Q(15),eg(e,t.name)},5381).toString():"",O}var e4=new e1,e9=e3(),e6=i.default.createContext({shouldForwardProp:void 0,styleSheet:e4,stylis:e9}),e8=(e6.Consumer,i.default.createContext(void 0));function e7(){return i.default.useContext(e6)}function te(e){if(!i.default.useMemo)return e.children;var t=e7().styleSheet,n=i.default.useMemo(function(){var n=t;return e.sheet?n=e.sheet:e.target&&(n=n.reconstructWithOptions({target:e.target},!1)),e.disableCSSOMInjection&&(n=n.reconstructWithOptions({useCSSOMInjection:!1})),n},[e.disableCSSOMInjection,e.sheet,e.target,t]),r=i.default.useMemo(function(){return e3({options:{namespace:e.namespace,prefix:e.enableVendorPrefixes},plugins:e.stylisPlugins})},[e.enableVendorPrefixes,e.namespace,e.stylisPlugins]),o=i.default.useMemo(function(){return{shouldForwardProp:e.shouldForwardProp,styleSheet:n,stylis:r}},[e.shouldForwardProp,n,r]);return i.default.createElement(e6.Provider,{value:o},i.default.createElement(e8.Provider,{value:r},e.children))}var tt=function(){function e(e,t){var n=this;this.inject=function(e,t){void 0===t&&(t=e9);var r=n.name+t.hash;e.hasNameForId(n.id,r)||e.insertRules(n.id,r,t(n.rules,r,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=t,eM(this,function(){throw Q(12,String(n.name))})}return e.prototype.getName=function(e){return void 0===e&&(e=e9),this.name+e.hash},e}();function tn(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(1===n&&"-"===r&&"-"===e[0])return e;r>="A"&&r<="Z"?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var tr=function(e){return null==e||!1===e||""===e},ti=function(e){var t=[];for(var n in e){var r=e[n];e.hasOwnProperty(n)&&!tr(r)&&(Array.isArray(r)&&r.isCss||eP(r)?t.push("".concat(tn(n),":"),r,";"):eF(r)?t.push.apply(t,s(s(["".concat(n," {")],ti(r),!1),["}"],!1)):t.push("".concat(tn(n),": ").concat(null==r||"boolean"==typeof r||""===r?"":"number"!=typeof r||0===r||n in U||n.startsWith("--")?String(r).trim():"".concat(r,"px"),";")))}return t};function to(e,t,n,r,i){if(void 0===i&&(i=[]),"string"==typeof e)return e&&i.push(e),i;if(tr(e))return i;if(eT(e))return i.push(".".concat(e.styledComponentId)),i;if(eP(e))return!eP(e)||e.prototype&&e.prototype.isReactComponent||!t?(i.push(e),i):to(e(t),t,n,r,i);if(e instanceof tt)return n?(e.inject(n,r),i.push(e.getName(r))):i.push(e),i;if(eF(e)){for(var o=ti(e),a=0;a<o.length;a++)i.push(o[a]);return i}if(!Array.isArray(e))return i.push(e.toString()),i;for(a=0;a<e.length;a++)to(e[a],t,n,r,i);return i}function ta(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(eP(n)&&!eT(n))return!1}return!0}var ts=ev(V),tl=function(){function e(e,t,n){this.rules=e,this.staticRulesId="",this.isStatic=(void 0===n||n.isStatic)&&ta(e),this.componentId=t,this.baseHash=eg(ts,t),this.baseStyle=n,e1.registerId(t)}return e.prototype.generateAndInjectStyles=function(e,t,n){var r=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,t,n).className:"";if(this.isStatic&&!n.hash)if(this.staticRulesId&&t.hasNameForId(this.componentId,this.staticRulesId))r=ez(r,this.staticRulesId);else{var i=eL(to(this.rules,e,t,n)),o=eh(eg(this.baseHash,i)>>>0);if(!t.hasNameForId(this.componentId,o)){var a=n(i,".".concat(o),void 0,this.componentId);t.insertRules(this.componentId,o,a)}r=ez(r,o),this.staticRulesId=o}else{for(var s=eg(this.baseHash,n.hash),l="",c=0;c<this.rules.length;c++){var u=this.rules[c];if("string"==typeof u)l+=u;else if(u){var d=eL(to(u,e,t,n));s=eg(eg(s,String(c)),d),l+=d}}if(l){var p=eh(s>>>0);if(!t.hasNameForId(this.componentId,p)){var f=n(l,".".concat(p),void 0,this.componentId);t.insertRules(this.componentId,p,f)}r=ez(r,p)}}return{className:r,css:"u"<typeof window?t.getTag().getGroup(er(this.componentId)):""}},e}(),tc=i.default.createContext(void 0);tc.Consumer;var tu={};function td(e,t,n){var r,o,s,l,c=eT(e),u=!ex(e),d=t.attrs,p=void 0===d?eo:d,f=t.componentId,h=void 0===f?(r=t.displayName,o=t.parentComponentId,tu[s="string"!=typeof r?"sc":ed(r)]=(tu[s]||0)+1,l="".concat(s,"-").concat(ey(V+s+tu[s])),o?"".concat(o,"-").concat(l):l):f,m=t.displayName,g=void 0===m?ex(e)?"styled.".concat(e):"Styled(".concat(e.displayName||e.name||"Component",")"):m,v=t.displayName&&t.componentId?"".concat(ed(t.displayName),"-").concat(t.componentId):t.componentId||h,y=c&&e.attrs?e.attrs.concat(p).filter(Boolean):p,x=t.shouldForwardProp;if(c&&e.shouldForwardProp){var b=e.shouldForwardProp;if(t.shouldForwardProp){var w=t.shouldForwardProp;x=function(e,t){return b(e,t)&&w(e,t)}}else x=b}var S=new tl(n,v,c?e.componentStyle:void 0);function C(e,t){return function(e,t,n){var r,o=e.attrs,s=e.componentStyle,l=e.defaultProps,c=e.foldedComponentIds,u=e.styledComponentId,d=e.target,p=i.default.useContext(tc),f=e7(),h=e.shouldForwardProp||f.shouldForwardProp,m=es(t,p,l)||ea,g=function(e,t,n){for(var r,i=a(a({},t),{className:void 0,theme:n}),o=0;o<e.length;o+=1){var s=eP(r=e[o])?r(i):r;for(var l in s)"className"===l?i.className=ez(i.className,s[l]):"style"===l?i.style=a(a({},i.style),s[l]):i[l]=s[l]}return"className"in t&&"string"==typeof t.className&&(i.className=ez(i.className,t.className)),i}(o,t,m),v=g.as||d,y={};for(var x in g)void 0===g[x]||"$"===x[0]||"as"===x||"theme"===x&&g.theme===m||("forwardedAs"===x?y.as=g.forwardedAs:h&&!h(x,v)||(y[x]=g[x]));var b=(r=e7(),s.generateAndInjectStyles(g,r.styleSheet,r.stylis)).className,w=ez(c,u);return b&&(w+=" "+b),g.className&&(w+=" "+g.className),y[ex(v)&&!el.has(v)?"class":"className"]=w,n&&(y.ref=n),(0,i.createElement)(v,y)}(E,e,t)}C.displayName=g;var E=i.default.forwardRef(C);return E.attrs=y,E.componentStyle=S,E.displayName=g,E.shouldForwardProp=x,E.foldedComponentIds=c?ez(e.foldedComponentIds,e.styledComponentId):"",E.styledComponentId=v,E.target=c?e.target:e,Object.defineProperty(E,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(t){this._foldedDefaultProps=c?function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];for(var r=0;r<t.length;r++)!function e(t,n,r){if(void 0===r&&(r=!1),!r&&!eF(t)&&!Array.isArray(t))return n;if(Array.isArray(n))for(var i=0;i<n.length;i++)t[i]=e(t[i],n[i]);else if(eF(n))for(var i in n)t[i]=e(t[i],n[i]);return t}(e,t[r],!0);return e}({},e.defaultProps,t):t}}),eM(E,function(){return".".concat(E.styledComponentId)}),u&&function e(t,n,r){if("string"!=typeof n){if(eO){var i=eR(n);i&&i!==eO&&e(t,i,r)}var o=e_(n);eI&&(o=o.concat(eI(n)));for(var a=ej(t),s=ej(n),l=0;l<o.length;++l){var c=o[l];if(!(c in eE||r&&r[c]||s&&c in s||a&&c in a)){var u=eA(n,c);try{eN(t,c,u)}catch(e){}}}}return t}(E,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),E}function tp(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n}var tf=function(e){return Object.assign(e,{isCss:!0})};function th(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return eP(e)||eF(e)?tf(to(tp(eo,s([e],t,!0)))):0===t.length&&1===e.length&&"string"==typeof e[0]?to(e):tf(to(tp(e,t)))}var tm=function(e){return function e(t,n,r){if(void 0===r&&(r=ea),!n)throw Q(1,n);var i=function(e){for(var i=[],o=1;o<arguments.length;o++)i[o-1]=arguments[o];return t(n,r,th.apply(void 0,s([e],i,!1)))};return i.attrs=function(i){return e(t,n,a(a({},r),{attrs:Array.prototype.concat(r.attrs,i).filter(Boolean)}))},i.withConfig=function(i){return e(t,n,a(a({},r),i))},i}(td,e)};el.forEach(function(e){tm[e]=tm(e)});var tg=function(){function e(e,t){this.rules=e,this.componentId=t,this.isStatic=ta(e),e1.registerId(this.componentId+1)}return e.prototype.createStyles=function(e,t,n,r){var i=r(eL(to(this.rules,t,n,r)),""),o=this.componentId+e;n.insertRules(o,o,i)},e.prototype.removeStyles=function(e,t){t.clearRules(this.componentId+e)},e.prototype.renderStyles=function(e,t,n,r){e>2&&e1.registerId(this.componentId+e);var i=this.componentId+e;this.isStatic?n.hasNameForId(i,i)||this.createStyles(e,t,n,r):(this.removeStyles(e,n),this.createStyles(e,t,n,r))},e}();function tv(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=th.apply(void 0,s([e],t,!1)),o="sc-global-".concat(ey(JSON.stringify(r))),l=new tg(r,o),c=new WeakMap,u=function(e){var t=e7(),n=i.default.useContext(tc),r=c.get(t.styleSheet);return void 0===r&&(r=t.styleSheet.allocateGSInstance(o),c.set(t.styleSheet,r)),"u">typeof window&&t.styleSheet.server||d(r,e,t.styleSheet,n,t.stylis),i.default.useLayoutEffect(function(){return t.styleSheet.server||d(r,e,t.styleSheet,n,t.stylis),function(){var e;l.removeStyles(r,t.styleSheet),e=t.styleSheet.options.target,"u">typeof document&&(null!=e?e:document).querySelectorAll('style[data-styled-global="'.concat(o,'"]')).forEach(function(e){return e.remove()})}},[r,e,t.styleSheet,n,t.stylis]),null};function d(e,t,n,r,i){if(l.isStatic)l.renderStyles(e,Z,n,i);else{var o=a(a({},t),{theme:es(t,r,u.defaultProps)});l.renderStyles(e,o,n,i)}}return i.default.memo(u)}function ty(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=eL(th.apply(void 0,s([e],t,!1)));return new tt(ey(r),r)}function tx(){var e=this;this._emitSheetCSS=function(){var t=e.instance.toString();if(!t)return"";var n=eV(),r=eL([n&&'nonce="'.concat(n,'"'),"".concat(Y,'="true"'),"".concat(q,'="').concat(V,'"')].filter(Boolean)," ");return"<style ".concat(r,">").concat(t,"</style>")},this.getStyleTags=function(){if(e.sealed)throw Q(2);return e._emitSheetCSS()},this.getStyleElement=function(){if(e.sealed)throw Q(2);var t,n=e.instance.toString();if(!n)return[];var r=((t={})[Y]="",t[q]=V,t.dangerouslySetInnerHTML={__html:n},t),o=eV();return o&&(r.nonce=o),[i.default.createElement("style",a({},r,{key:"sc-0-0"}))]},this.seal=function(){e.sealed=!0},this.instance=new e1({isServer:!0}),this.sealed=!1}tx.prototype.collectStyles=function(e){if(this.sealed)throw Q(2);return i.default.createElement(te,{sheet:this.instance},e)},tx.prototype.interleaveWithNodeStream=function(e){throw Q(3)},e.s(["createGlobalStyle",()=>tv,"css",()=>th,"default",()=>tm,"keyframes",()=>ty],814);let tb=(e,t)=>{let n=Math.round(255*t/100).toString(16).padStart(2,"0");return`${e}${n}`},tw="#f5f5f5",tS="#040f3d",tC="#3cb1d5",tE=`linear-gradient(
  90deg,
  #00000000 10%,
  ${tb("#e0ffb4",30)} 95%
), linear-gradient(
  180deg,
  ${tC} 10%,
  #1d3bac 90%
)`,t$=tb(tS,25),tk="transparent",tj=`'Urbanist', -apple-system, 'BlinkMacSystemFont',
  'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', sans-serif,
  'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'`,tN="21px",t_="14px",tI="100px",tA="70px",tR="919px",tO=tv`
  html {
    background-color: ${tS};
    background-image: ${tE};
    background-repeat: no-repeat;
    overflow-x: hidden; // Weird Firefox issue
    font-size: ${tN};
  }

  body {
    color: ${tw};
    height: 100%;
    margin: 0;
    overflow-x: hidden;
    overflow-y: auto;
    width: 100%;
    font-family: ${tj};
  }

  h1 {
    font-size: ${tI};

    @media screen and (max-width: ${tR}) {
      font-size: ${tA};
    }
  }

  h2 {
    font-size: ${"28px"};
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: inherit;
    font-family: inherit;
    font-weight: 500;
    line-height: 1.2;
    margin-bottom: 1rem;
    margin-top: 0;
  }

  p {
    margin-top: 0;
    margin-bottom: 1rem;
  }
`,tP=i.default.createContext(void 0);tP.displayName="TranslationContext";let tT=tP.Provider,tz=(e,t,n)=>{let r=Array.isArray(t)?t:t.split(".");return e&&r.length?tz(e[r.shift()],r,n):void 0===e?n:e},tL=()=>{let e=i.default.useContext(tP);return{t:t=>tz(e.translations,t,t),locale:e.locale}};function tF(){return(tF=Object.assign.bind()).apply(null,arguments)}e.s(["I18nProvider",0,tT,"en",0,{locale:"en",translations:{site:{description:"Creating effective, dazzling and high-end digital services and web applications.",headline:"I create digital things."},navigation:{contact:"Contact",switchLanguage:"Suomeksi",close:"Close menu",open:"Open menu"},page:{expertise:"My expertise is creating effective, dazzling and high-end digital services and web applications."},contact:{title:"Contact me",name:"Name",email:"Email address",message:"Message",send:"Send"},footer:{allRightsReserved:"All rights reserved."}}},"fi",0,{locale:"fi",translations:{site:{description:"Luon vaikuttavia, häikäiseviä ja korkealaatuisia digipalveluita ja verkkosovelluksia.",headline:"Teen digitaalisia juttuja."},navigation:{contact:"Ota yhteyttä",switchLanguage:"In English",close:"Sulje valikko",open:"Avaa valikko"},page:{expertise:"Erityisosaamistani on luoda vaikuttavia, häikäiseviä ja korkealaatuisia digipalveluita ja verkkosovelluksia."},contact:{title:"Ota yhteyttä",name:"Nimi",email:"Sähköpostiosoite",message:"Viesti",send:"Lähetä"},footer:{allRightsReserved:"Kaikki oikeudet pidätetään."}}},"useTranslation",0,tL],6459);let tM=function(e){return i.createElement("svg",tF({xmlns:"http://www.w3.org/2000/svg",className:"close-outline_svg__ionicon",viewBox:"0 0 512 512"},e),t||(t=i.createElement("path",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:32,d:"M368 368 144 144m224 0L144 368"})))};function tD(){return(tD=Object.assign.bind()).apply(null,arguments)}let tG=function(e){return i.createElement("svg",tD({xmlns:"http://www.w3.org/2000/svg",className:"menu-outline_svg__ionicon",viewBox:"0 0 512 512"},e),n||(n=i.createElement("path",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:10,strokeWidth:32,d:"M80 160h352M80 256h352M80 352h352"})))},tB=tm.button.withConfig({displayName:"CloseButton__StyledCloseButton",componentId:"sc-cd49d386-0"})`
  background: ${tw};
  border: 0;
  box-shadow: 0 3px 5px ${tb("#000000",25)};
  box-sizing: border-box;
  color: ${tS};
  cursor: pointer;
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  font-family: inherit;
  font-size: ${tN};
  font-weight: bold;
  height: ${e=>e.$size};
  overflow: hidden;
  padding: 0;
  position: absolute;
  right: 0;
  text-decoration: none;
  top: 0;
  transition:
    background-color 0.2s,
    color 0.2s;
  width: ${e=>e.$size};

  &:hover,
  &:focus {
    background: ${tC};
    outline: none;
    text-decoration: none;

    > span > svg {
      color: ${tw};
    }
  }

  > svg {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 60%;
    width: 60%;
  }
`,tW=({size:e,onClick:t})=>(0,r.jsx)(tB,{type:"button",$size:e,onClick:t,children:(0,r.jsx)(tM,{})}),tU=tm.form.withConfig({displayName:"Form",componentId:"sc-6bd0e623-0"})`
  background-color: ${tw};
  box-shadow: 0 0 10px ${tS+"01"};
  box-sizing: border-box;
  clip-path: polygon(
    0 0,
    calc(100% - ${e=>e.$dogEarSize}) 0,
    100% ${e=>e.$dogEarSize},
    100% 100%,
    0 100%
  );
  color: ${tS};
  display: inline-flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0.5rem;
  max-height: ${e=>e.$height};
  max-width: 420px;
  padding: 3rem 2rem 1rem;
  position: relative;
  text-align: left;
  transform: ${e=>e.$toggled?"scale(1)":"scale(1.2)"};
  transition: transform 0.3s;
  width: 98vw;
  will-change: transform;
`,tY=tm.button.withConfig({displayName:"SubmitButton__StyledSubmitButton",componentId:"sc-5c592282-0"})`
  align-self: flex-end;
  background: ${tS};
  border: none;
  color: ${tw};
  cursor: pointer;
  font-family: inherit;
  font-size: ${tN};
  margin: 0;
  padding: 0.5em 0.75em;
  transition: background-color 0.2s;
  width: auto;

  &:hover,
  &:focus {
    background: ${tC};
    outline: none;
    text-decoration: none;
  }
`,tH=tm.span.withConfig({displayName:"SubmitButton__ButtonLabel",componentId:"sc-5c592282-1"})`
  position: relative;
`,tq=({children:e,...t})=>(0,r.jsx)(tY,{type:"submit",...t,children:(0,r.jsx)(tH,{children:e})}),tV=th`
  background-clip: padding-box;
  background-color: transparent;
  border-radius: 0;
  border: ${"2px"} solid ${t$};
  color: ${tS};
  display: block;
  font-family: ${tj};
  font-size: ${t_};
  height: auto;
  line-height: 1.5;
  margin-bottom: 1rem;
  padding: 0.375rem 0.75rem;
  resize: none;
  transition: border 0.2s;

  &:focus {
    border: ${"2px"} solid ${tC};
    outline: none;
  }
`,tX=tm.label.withConfig({displayName:"Label__StyledLabel",componentId:"sc-81e03508-0"})`
  display: inline-block;
  font-size: ${t_};
  margin-bottom: 0.5rem;
`,tK=({htmlFor:e,label:t})=>(0,r.jsx)(tX,{htmlFor:e,children:t}),tJ=tm.textarea.withConfig({displayName:"TextArea__StyledTextArea",componentId:"sc-e0320a96-0"})`
  ${tV};
  min-height: 6rem;
`,tZ=({id:e,label:t,...n})=>(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(tK,{htmlFor:e,label:t}),(0,r.jsx)(tJ,{name:e,id:e,...n})]}),tQ=tm.input.withConfig({displayName:"TextField__StyledTextField",componentId:"sc-84e205c1-0"})`
  ${tV};
`,t0=({id:e,label:t,...n})=>(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(tK,{htmlFor:e,label:t}),(0,r.jsx)(tQ,{type:"text",name:e,id:e,...n})]});function t1(){return(t1=Object.assign.bind()).apply(null,arguments)}function t2(e,t){if(null==e)return{};var n={};for(var r in e)if(({}).hasOwnProperty.call(e,r)){if(-1!==t.indexOf(r))continue;n[r]=e[r]}return n}function t5(e,t){return(t5=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e})(e,t)}function t3(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,t5(e,t)}function t4(e,t){return e.replace(RegExp("(^|\\s)"+t+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}var t9=e.i(943);let t6=i.default.createContext(null);var t8=function(e){return e.scrollTop},t7="unmounted",ne="exited",nt="entering",nn="entered",nr="exiting",ni=function(e){function t(t,n){var r,i=e.call(this,t,n)||this,o=n&&!n.isMounting?t.enter:t.appear;return i.appearStatus=null,t.in?o?(r=ne,i.appearStatus=nt):r=nn:r=t.unmountOnExit||t.mountOnEnter?t7:ne,i.state={status:r},i.nextCallback=null,i}t3(t,e),t.getDerivedStateFromProps=function(e,t){return e.in&&t.status===t7?{status:ne}:null};var n=t.prototype;return n.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},n.componentDidUpdate=function(e){var t=null;if(e!==this.props){var n=this.state.status;this.props.in?n!==nt&&n!==nn&&(t=nt):(n===nt||n===nn)&&(t=nr)}this.updateStatus(!1,t)},n.componentWillUnmount=function(){this.cancelNextCallback()},n.getTimeouts=function(){var e,t,n,r=this.props.timeout;return e=t=n=r,null!=r&&"number"!=typeof r&&(e=r.exit,t=r.enter,n=void 0!==r.appear?r.appear:t),{exit:e,enter:t,appear:n}},n.updateStatus=function(e,t){if(void 0===e&&(e=!1),null!==t)if(this.cancelNextCallback(),t===nt){if(this.props.unmountOnExit||this.props.mountOnEnter){var n=this.props.nodeRef?this.props.nodeRef.current:t9.default.findDOMNode(this);n&&t8(n)}this.performEnter(e)}else this.performExit();else this.props.unmountOnExit&&this.state.status===ne&&this.setState({status:t7})},n.performEnter=function(e){var t=this,n=this.props.enter,r=this.context?this.context.isMounting:e,i=this.props.nodeRef?[r]:[t9.default.findDOMNode(this),r],o=i[0],a=i[1],s=this.getTimeouts(),l=r?s.appear:s.enter;(e||n)&&1?(this.props.onEnter(o,a),this.safeSetState({status:nt},function(){t.props.onEntering(o,a),t.onTransitionEnd(l,function(){t.safeSetState({status:nn},function(){t.props.onEntered(o,a)})})})):this.safeSetState({status:nn},function(){t.props.onEntered(o)})},n.performExit=function(){var e=this,t=this.props.exit,n=this.getTimeouts(),r=this.props.nodeRef?void 0:t9.default.findDOMNode(this);t?(this.props.onExit(r),this.safeSetState({status:nr},function(){e.props.onExiting(r),e.onTransitionEnd(n.exit,function(){e.safeSetState({status:ne},function(){e.props.onExited(r)})})})):this.safeSetState({status:ne},function(){e.props.onExited(r)})},n.cancelNextCallback=function(){null!==this.nextCallback&&(this.nextCallback.cancel(),this.nextCallback=null)},n.safeSetState=function(e,t){t=this.setNextCallback(t),this.setState(e,t)},n.setNextCallback=function(e){var t=this,n=!0;return this.nextCallback=function(r){n&&(n=!1,t.nextCallback=null,e(r))},this.nextCallback.cancel=function(){n=!1},this.nextCallback},n.onTransitionEnd=function(e,t){this.setNextCallback(t);var n=this.props.nodeRef?this.props.nodeRef.current:t9.default.findDOMNode(this),r=null==e&&!this.props.addEndListener;if(!n||r)return void setTimeout(this.nextCallback,0);if(this.props.addEndListener){var i=this.props.nodeRef?[this.nextCallback]:[n,this.nextCallback],o=i[0],a=i[1];this.props.addEndListener(o,a)}null!=e&&setTimeout(this.nextCallback,e)},n.render=function(){var e=this.state.status;if(e===t7)return null;var t=this.props,n=t.children,r=(t.in,t.mountOnEnter,t.unmountOnExit,t.appear,t.enter,t.exit,t.timeout,t.addEndListener,t.onEnter,t.onEntering,t.onEntered,t.onExit,t.onExiting,t.onExited,t.nodeRef,t2(t,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]));return i.default.createElement(t6.Provider,{value:null},"function"==typeof n?n(e,r):i.default.cloneElement(i.default.Children.only(n),r))},t}(i.default.Component);function no(){}ni.contextType=t6,ni.propTypes={},ni.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:no,onEntering:no,onEntered:no,onExit:no,onExiting:no,onExited:no},ni.UNMOUNTED=t7,ni.EXITED=ne,ni.ENTERING=nt,ni.ENTERED=nn,ni.EXITING=nr;var na=function(e,t){return e&&t&&t.split(" ").forEach(function(t){e.classList?e.classList.remove(t):"string"==typeof e.className?e.className=t4(e.className,t):e.setAttribute("class",t4(e.className&&e.className.baseVal||"",t))})},ns=function(e){function t(){for(var t,n=arguments.length,r=Array(n),i=0;i<n;i++)r[i]=arguments[i];return(t=e.call.apply(e,[this].concat(r))||this).appliedClasses={appear:{},enter:{},exit:{}},t.onEnter=function(e,n){var r=t.resolveArguments(e,n),i=r[0],o=r[1];t.removeClasses(i,"exit"),t.addClass(i,o?"appear":"enter","base"),t.props.onEnter&&t.props.onEnter(e,n)},t.onEntering=function(e,n){var r=t.resolveArguments(e,n),i=r[0],o=r[1];t.addClass(i,o?"appear":"enter","active"),t.props.onEntering&&t.props.onEntering(e,n)},t.onEntered=function(e,n){var r=t.resolveArguments(e,n),i=r[0],o=r[1]?"appear":"enter";t.removeClasses(i,o),t.addClass(i,o,"done"),t.props.onEntered&&t.props.onEntered(e,n)},t.onExit=function(e){var n=t.resolveArguments(e)[0];t.removeClasses(n,"appear"),t.removeClasses(n,"enter"),t.addClass(n,"exit","base"),t.props.onExit&&t.props.onExit(e)},t.onExiting=function(e){var n=t.resolveArguments(e)[0];t.addClass(n,"exit","active"),t.props.onExiting&&t.props.onExiting(e)},t.onExited=function(e){var n=t.resolveArguments(e)[0];t.removeClasses(n,"exit"),t.addClass(n,"exit","done"),t.props.onExited&&t.props.onExited(e)},t.resolveArguments=function(e,n){return t.props.nodeRef?[t.props.nodeRef.current,e]:[e,n]},t.getClassNames=function(e){var n=t.props.classNames,r="string"==typeof n,i=r&&n?n+"-":"",o=r?""+i+e:n[e],a=r?o+"-active":n[e+"Active"],s=r?o+"-done":n[e+"Done"];return{baseClassName:o,activeClassName:a,doneClassName:s}},t}t3(t,e);var n=t.prototype;return n.addClass=function(e,t,n){var r,i=this.getClassNames(t)[n+"ClassName"],o=this.getClassNames("enter").doneClassName;"appear"===t&&"done"===n&&o&&(i+=" "+o),"active"===n&&e&&t8(e),i&&(this.appliedClasses[t][n]=i,r=i,e&&r&&r.split(" ").forEach(function(t){e.classList?e.classList.add(t):(e.classList?t&&e.classList.contains(t):-1!==(" "+(e.className.baseVal||e.className)+" ").indexOf(" "+t+" "))||("string"==typeof e.className?e.className=e.className+" "+t:e.setAttribute("class",(e.className&&e.className.baseVal||"")+" "+t))}))},n.removeClasses=function(e,t){var n=this.appliedClasses[t],r=n.base,i=n.active,o=n.done;this.appliedClasses[t]={},r&&na(e,r),i&&na(e,i),o&&na(e,o)},n.render=function(){var e=this.props,t=(e.classNames,t2(e,["classNames"]));return i.default.createElement(ni,t1({},t,{onEnter:this.onEnter,onEntered:this.onEntered,onEntering:this.onEntering,onExit:this.onExit,onExiting:this.onExiting,onExited:this.onExited}))},t}(i.default.Component);ns.defaultProps={classNames:""},ns.propTypes={};let nl="modal",nc=tm.div.withConfig({displayName:"ModalWrapper__StyledModalWrapper",componentId:"sc-befc0f62-0"})`
  backdrop-filter: blur(1rem);
  background: ${e=>e.$toggled&&tb("#000000",25)};
  bottom: 0;
  contain: strict;
  left: 0;
  overflow-y: auto;
  opacity: 0;
  pointer-events: ${e=>e.$toggled?"auto":"none"};
  position: fixed;
  right: 0;
  text-align: center;
  top: 0;
  visibility: hidden;
  transition: opacity ${300}ms;
  z-index: 3;

  &.${nl}-enter, &.${nl}-enter-done {
    opacity: 1;
    visibility: visible;
  }
  &.${nl}-exit {
    visibility: visible;
  }
  &.${nl}-exit-done {
    visibility: hidden;
  }

  @media screen and (min-height: ${e=>e.$height}) {
    align-items: center;
    display: flex;
    justify-content: center;
  }
`,nu=({children:e,toggled:t,height:n})=>{let o=(0,i.useRef)(null);return(0,r.jsx)(ns,{in:t,classNames:nl,timeout:300,nodeRef:o,children:(0,r.jsx)(nc,{ref:o,$toggled:t,$height:n,children:e})})},nd="594px",np="3rem",nf=({close:e,toggled:t})=>{let{t:n}=tL();return(0,r.jsx)(nu,{toggled:t,height:nd,"aria-hidden":!t,children:(0,r.jsxs)(tU,{$toggled:t,method:"POST",action:"https://formspree.io/%63%6F%6E%74%61%63%74@%74%61%74%75%61%72%76%65%6C%61%2E%63%6F%6D",$height:nd,$dogEarSize:np,children:[(0,r.jsx)(tW,{onClick:e,size:np}),(0,r.jsx)("h2",{children:n("contact.title")}),(0,r.jsx)(t0,{id:"name",label:n("contact.name"),required:!0}),(0,r.jsx)(t0,{id:"email",label:n("contact.email"),required:!0}),(0,r.jsx)(tZ,{id:"message",label:n("contact.message"),rows:8,required:!0}),(0,r.jsx)(tq,{children:n("contact.send")})]})})},nh=ty`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`,nm=th`
  animation: ${nh} ease-in 1;
  animation-duration: 0.4s;
  animation-fill-mode: forwards;
  opacity: 0;
  will-change: opacity;
`,ng=ty`
  from {
    letter-spacing: 0.05em;
    opacity: 0;
  }

  to {
    letter-spacing: normal;
    opacity: 1;
  }
`,nv=th`
  animation: ${ng};
  animation-duration: 0.8s;
  animation-fill-mode: forwards;
  opacity: 0;
  will-change: opacity, letter-spacing;
`,ny="0.1s",nx=tm.h1.withConfig({displayName:"Title__TitleElement",componentId:"sc-fb110ac-0"})`
  align-items: center;
  display: flex;
  flex-direction: column;
  font-weight: 600;
  margin: 0 0 2rem 0;
  position: relative;
  width: 100%;
`,nb=({segment:e})=>{let t=(0,i.useRef)(null),[n,o]=(0,i.useState)(1);return(0,i.useEffect)(()=>{let e=()=>{let e=t.current?.clientWidth??0;o(Math.min((t.current?.parentElement?.clientWidth??0)/e,1))};return window.addEventListener("resize",e),e(),()=>window.removeEventListener("resize",e)},[]),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(nS,{$scale:n,children:e}),(0,r.jsx)(nS,{ref:t,$isReferenceElement:!0,children:e})]})},nw=`
  height: 0;
  left:-10000px;
  opacity: 0 !important;
  position:absolute;
  user-select: none;
`,nS=tm.span.withConfig({displayName:"Title__TitleSegmentBlock",componentId:"sc-fb110ac-1"})`
  ${nv};
  animation-delay: ${ny};
  display: block;
  font-size: calc(${tI} * ${e=>e.$scale??1});
  line-height: 1.2em;
  transition: font-size 0.3s ease-out;
  white-space: nowrap;
  width: fit-content;
  ${e=>e.$isReferenceElement?th`
          ${nw}
        `:""};

  @media screen and (max-width: ${tR}) {
    font-size: calc(
      ${tA} * ${e=>e.$scale??1}
    );
  }
`,nC=({title:e})=>(0,r.jsx)(nx,{children:(e=>{let t=[],n="";for(let r=0;r<e.length;r++){let i=e[r];n+=i,(" "===i&&n.length>2||r===e.length-1)&&(t.push(n),n="")}return t})(e).map(e=>(0,r.jsx)(nb,{segment:e},e))}),nE=tm.div.withConfig({displayName:"Container__StyledContainer",componentId:"sc-c8fba83a-0"})`
  align-items: center;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: center;
  width: 100%;
`,n$=tm.div.withConfig({displayName:"Container__Content",componentId:"sc-c8fba83a-1"})`
  ${nm};
  animation-delay: ${ny};
  font-size: ${tN};
  line-height: 1.8em;
  max-width: 80vw;
  width: max-content;
`,nk=({title:e,children:t})=>(0,r.jsxs)(nE,{children:[(0,r.jsx)(nC,{title:e}),(0,r.jsx)(n$,{children:t})]}),nj=tm.div.withConfig({displayName:"Footer__StyledFooter",componentId:"sc-ee3afb51-0"})`
  ${nm};
  font-size: ${"13px"};
  text-align: center;
  margin-top: 2rem;
`,nN=()=>{let{t:e}=tL(),t=new Date().getFullYear();return(0,r.jsx)(nj,{children:(0,r.jsx)("p",{children:`\xa9 ${t} Tatu Arvela. ${e("footer.allRightsReserved")}`})})};var n_=e.i(8678);let nI=["fi_FI","en_US"],nA=()=>{let{t:e,locale:t}=tL(),n=e("site.description"),i=`Tatu Arvela — ${e("site.headline")}`,o="https://tatuarvela.com/image.png",a=nI.find(e=>e.includes(t)),s=nI.find(e=>e!==a),l="fi"===t?"https://tatuarvela.com/fi":"https://tatuarvela.com";return(0,r.jsxs)(n_.default,{children:[(0,r.jsx)("title",{children:i}),(0,r.jsx)("meta",{name:"description",content:n}),(0,r.jsx)("meta",{property:"og:image",content:o}),(0,r.jsx)("meta",{property:"og:title",content:i}),(0,r.jsx)("meta",{property:"og:description",content:n}),(0,r.jsx)("meta",{property:"og:locale",content:a}),(0,r.jsx)("meta",{property:"og:locale:alternate",content:s}),(0,r.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,r.jsx)("meta",{name:"twitter:title",content:i}),(0,r.jsx)("meta",{name:"twitter:description",content:n}),(0,r.jsx)("meta",{name:"twitter:image",content:o}),(0,r.jsx)("meta",{name:"theme-color",content:"#040f3d"}),(0,r.jsx)("link",{rel:"canonical",href:l})]})},nR=tm.span.withConfig({displayName:"LinkText",componentId:"sc-cef4bdb8-0"})`
  position: relative;

  &::after {
    border-bottom: 0.1em solid ${tS};
    bottom: 0;
    content: "";
    display: block;
    left: 0;
    position: absolute;
    transition: width 0.2s ease;
    width: 0;
    will-change: width;
  }
`,nO=tm.a.withConfig({displayName:"Link__StyledLink",componentId:"sc-6c9c4cf4-0"})`
  background: ${tk};
  color: ${tS};
  display: inline-block;
  text-decoration: none;
  text-transform: uppercase;
  cursor: pointer;

  &:hover,
  &:focus {
    color: ${tS};
    outline: none;
    text-decoration: none;

    > span::after {
      width: 100%;
    }
  }
`,nP=({url:e,children:t})=>(0,r.jsx)(nO,{href:e,children:(0,r.jsx)(nR,{children:t})}),nT=tm.button.withConfig({displayName:"LinkButton__StyledLinkButton",componentId:"sc-de222f3c-0"})`
  background: ${tk};
  border: none;
  color: ${tS};
  display: inline-block;
  font-size: inherit;
  font-family: ${tj};
  text-decoration: none;
  text-transform: uppercase;
  height: 100%;
  padding: 0;
  cursor: pointer;

  &:hover,
  &:focus {
    color: ${tS};
    outline: none;
    text-decoration: none;

    > span::after {
      width: 100%;
    }
  }
`,nz=({children:e,onClick:t})=>(0,r.jsx)(nT,{onClick:t,children:(0,r.jsx)(nR,{children:e})}),nL=[{text:"LinkedIn",url:"https://www.linkedin.com/in/tatuarvela/"},{text:"GitHub",url:"https://github.com/TatuArvela"},{text:"Bēhance",url:"https://www.behance.net/TatuArvela"}];var nF=e.i(3828);let nM=()=>{let e=(0,nF.useRouter)(),{route:t}=e;return()=>{switch(t){case"/":return e.push("/fi","/fi");case"/fi":return e.push("/","/")}}},nD=th`
  height: calc((1.25rem * 2) * 5);
  padding: 1.25rem 0;
  pointer-events: auto;
  opacity: 1;
`,nG=tm.div.withConfig({displayName:"MobileNavigation__StyledMobileNavigation",componentId:"sc-ca972ea3-0"})`
  box-shadow: inset 0 0 10px ${tb(tS,25)};
  display: flex;
  flex-direction: column;
  height: 0;
  margin: 1.5rem -3.5rem;
  opacity: 0;
  overflow: visible;
  position: relative;
  pointer-events: none;
  transition:
    opacity ${400}ms ease-out,
    height ${400}ms ease-out,
    padding ${400}ms ease-out;
  will-change: opacity, height, padding;

  @media screen and (max-width: ${tR}) {
    ${({$isOpen:e})=>e&&nD}
  }
`,nB=tm.ul.withConfig({displayName:"MobileNavigation__List",componentId:"sc-ca972ea3-1"})`
  display: flex;
  flex-direction: column;
  font-size: ${tN};
  list-style: none;
  margin: 0;
  overflow: hidden;
  padding-left: 0;
`,nW=tm.li.withConfig({displayName:"MobileNavigation__ListItem",componentId:"sc-ca972ea3-2"})`
  align-self: flex-end;
  display: none;
  flex-grow: 1;
  height: 2.5rem;
  margin: 0 4rem;

  @media screen and (max-width: ${tR}) {
    align-items: center;
    display: flex;
    flex-shrink: 0;
    justify-content: center;
  }
`,nU=({openForm:e,isOpen:t})=>{let{t:n}=tL(),o=nM(),[a,s]=(0,i.useState)(!1);return t&&!a&&s(!0),(0,i.useEffect)(()=>{if(!t){let e=setTimeout(()=>s(!1),400);return()=>clearTimeout(e)}},[t]),(0,r.jsx)(nG,{$isOpen:t,children:a&&(0,r.jsxs)(nB,{children:[nL.map(e=>(0,r.jsx)(nW,{children:(0,r.jsx)(nP,{url:e.url,children:e.text})},e.url)),(0,r.jsx)(nW,{children:(0,r.jsx)(nz,{onClick:e,children:n("navigation.contact")})}),(0,r.jsx)(nW,{children:(0,r.jsx)(nz,{onClick:o,children:n("navigation.switchLanguage")})})]})})},nY=tm.button.withConfig({displayName:"MobileNavigationToggle__StyledMobileNavigationToggle",componentId:"sc-5fc436d9-0"})`
  ${nm};
  background: none;
  border: none;
  color: ${tS};
  cursor: pointer;
  display: none;
  height: 1.75rem;
  opacity: 0;
  overflow: hidden;
  padding: 0;
  pointer-events: none;
  transition: transform 0.2s ease-out;
  user-select: none;
  width: 1.75rem;
  z-index: 2;

  &:hover {
    transform: scale(1.2);
  }

  @media screen and (max-width: ${tR}) {
    display: block;
    opacity: 1;
    pointer-events: auto;
  }

  > svg {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
  }
`,nH=({isToggled:e,onClick:t})=>{let{t:n}=tL();return(0,r.jsx)(nY,{onClick:t,children:e?(0,r.jsx)(tM,{"aria-label":n("navigation.close")}):(0,r.jsx)(tG,{"aria-label":n("navigation.open")})})},nq=tm.div.withConfig({displayName:"Navigation__StyledNavigation",componentId:"sc-23222b1f-0"})`
  ${nm};
  display: flex;
  flex-direction: row;
  font-size: ${tN};
  margin-right: 1.5rem;
  opacity: 1;
  pointer-events: auto;
  position: relative;
  transform: translateX(0);
  transition:
    opacity 0.4s ease-out,
    transform 0.4s ease-out;
  will-change: opacity;

  @media screen and (max-width: ${tR}) {
    opacity: 0;
    pointer-events: none;
    display: none;
  }
`,nV=tm.ul.withConfig({displayName:"Navigation__List",componentId:"sc-23222b1f-1"})`
  display: flex;
  font-size: ${tN};
  list-style: none;
  margin: 0;
  overflow: hidden;
  padding-left: 0;
  flex-direction: row;
`,nX=tm.li.withConfig({displayName:"Navigation__ListItem",componentId:"sc-23222b1f-2"})`
  display: inline;
  margin-left: 1em;

  @media screen and (max-width: ${tR}) {
    display: none;
  }
`,nK=({openForm:e})=>{let{t}=tL(),n=nM();return(0,r.jsx)(nq,{children:(0,r.jsxs)(nV,{children:[nL.map(e=>(0,r.jsx)(nX,{children:(0,r.jsx)(nP,{url:e.url,children:e.text})},e.url)),(0,r.jsx)(nX,{children:(0,r.jsx)(nz,{onClick:e,children:t("navigation.contact")})}),(0,r.jsx)(nX,{children:(0,r.jsx)(nz,{onClick:n,children:t("navigation.switchLanguage")})})]})})},nJ=tm.div.withConfig({displayName:"Header__StyledHeader",componentId:"sc-e7c16e5a-0"})`
  ${nm};
  align-items: center;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  margin: 0;
  padding: 0;
`,nZ=tm.h2.withConfig({displayName:"Header__Title",componentId:"sc-e7c16e5a-1"})`
  display: block;
  flex-grow: 1;
  line-height: 1.5;
  margin: 0;
  transform: translateX(1.5rem);
  transition: transform 0.4s ease-out;

  @media screen and (max-width: ${tR}) {
    margin-left: 0;
    transform: translateX(0);
  }
`,nQ=({openForm:e})=>{let[t,n]=(0,i.useState)(!1);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(nJ,{children:[(0,r.jsx)(nZ,{children:"Tatu Arvela"}),(0,r.jsx)(nK,{openForm:e}),(0,r.jsx)(nH,{isToggled:t,onClick:()=>n(e=>!e)})]}),(0,r.jsx)(nU,{isOpen:t,openForm:e})]})},n0=tm.div.withConfig({displayName:"Page__StyledPage",componentId:"sc-baac39e8-0"})`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  padding: 1.5rem 1.5rem;
  width: 100%;

  @media screen and (max-width: ${"359px"}) {
    padding: 1.5rem 1rem;
  }
`;e.s(["default",0,({pageTitle:e,children:t})=>{let[n,o]=(0,i.useState)(!1);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(tO,{}),(0,r.jsx)(nA,{}),(0,r.jsxs)(n0,{children:[(0,r.jsx)(nQ,{openForm:()=>o(!0)}),(0,r.jsx)(nk,{title:e,children:t}),(0,r.jsx)(nN,{})]}),(0,r.jsx)(nf,{toggled:n,close:()=>o(!1)})]})}],2474)}]);
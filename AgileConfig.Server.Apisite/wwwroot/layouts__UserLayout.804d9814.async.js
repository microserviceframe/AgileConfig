(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"3YGx":function(B,I,m){"use strict";var R=m("oN5p"),Y=m("q1tI"),Q=m.n(Y),O=m("nKUr"),x=m.n(O),K=function(){return Object(O.jsxs)("div",{style:{display:"flex",justifyContent:"center",marginBottom:"10px",color:"#bfbfbf"},children:[Object(O.jsxs)("a",{href:"https://github.com/kklldog/AgileConfig",style:{color:"#bfbfbf"},children:[Object(O.jsx)(R.a,{})," "]}),"\xA0 Powered by .netcore3.1 ant-design-pro4"]})};I.a=K},obeJ:function(B,I,m){"use strict";m.r(I);var R=m("k1fw"),Y=m("Qv07"),Q=m("su3W"),O=m("q1tI"),x=m.n(O),K=m("17x9"),f=m.n(K),nt=m("bmMU"),rt=m.n(nt),at=m("QLaP"),z=m.n(at),ot=m("Gytx"),it=m.n(ot);function T(){return(T=Object.assign||function(l){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(l[t]=r[t])}return l}).apply(this,arguments)}function k(l,e){l.prototype=Object.create(e.prototype),l.prototype.constructor=l,l.__proto__=e}function V(l,e){if(l==null)return{};var r,t,n={},a=Object.keys(l);for(t=0;t<a.length;t++)e.indexOf(r=a[t])>=0||(n[r]=l[r]);return n}var u={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title",FRAGMENT:"Symbol(react.fragment)"},X=Object.keys(u).map(function(l){return u[l]}),D={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},st=Object.keys(D).reduce(function(l,e){return l[D[e]]=e,l},{}),L=function(e,r){for(var t=e.length-1;t>=0;t-=1){var n=e[t];if(Object.prototype.hasOwnProperty.call(n,r))return n[r]}return null},ct=function(e){var r=L(e,u.TITLE),t=L(e,"titleTemplate");if(Array.isArray(r)&&(r=r.join("")),t&&r)return t.replace(/%s/g,function(){return r});var n=L(e,"defaultTitle");return r||n||void 0},ut=function(e){return L(e,"onChangeClientState")||function(){}},W=function(e,r){return r.filter(function(t){return t[e]!==void 0}).map(function(t){return t[e]}).reduce(function(t,n){return T({},t,n)},{})},lt=function(e,r){return r.filter(function(t){return t[u.BASE]!==void 0}).map(function(t){return t[u.BASE]}).reverse().reduce(function(t,n){if(!t.length)for(var a=Object.keys(n),o=0;o<a.length;o+=1){var i=a[o].toLowerCase();if(e.indexOf(i)!==-1&&n[i])return t.concat(n)}return t},[])},M=function(e,r,t){var n={};return t.filter(function(a){return!!Array.isArray(a[e])||(a[e]!==void 0&&console&&typeof console.warn=="function"&&console.warn("Helmet: "+e+' should be of type "Array". Instead found type "'+typeof a[e]+'"'),!1)}).map(function(a){return a[e]}).reverse().reduce(function(a,o){var i={};o.filter(function(p){for(var h,b=Object.keys(p),A=0;A<b.length;A+=1){var g=b[A],j=g.toLowerCase();r.indexOf(j)===-1||h==="rel"&&p[h].toLowerCase()==="canonical"||j==="rel"&&p[j].toLowerCase()==="stylesheet"||(h=j),r.indexOf(g)===-1||g!=="innerHTML"&&g!=="cssText"&&g!=="itemprop"||(h=g)}if(!h||!p[h])return!1;var H=p[h].toLowerCase();return n[h]||(n[h]={}),i[h]||(i[h]={}),!n[h][H]&&(i[h][H]=!0,!0)}).reverse().forEach(function(p){return a.push(p)});for(var s=Object.keys(i),c=0;c<s.length;c+=1){var d=s[c],y=T({},n[d],i[d]);n[d]=y}return a},[]).reverse()},Z=function(e){return Array.isArray(e)?e.join(""):e},dt=[u.NOSCRIPT,u.SCRIPT,u.STYLE],F=function(e,r){return r===void 0&&(r=!0),r===!1?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},q=function(e){return Object.keys(e).reduce(function(r,t){var n=e[t]!==void 0?t+'="'+e[t]+'"':""+t;return r?r+" "+n:n},"")},_=function(e,r){return r===void 0&&(r={}),Object.keys(e).reduce(function(t,n){return t[D[n]||n]=e[n],t},r)},C=function(e,r,t){switch(e){case u.TITLE:return{toComponent:function(){return o=r.titleAttributes,(i={key:a=r.title})["data-rh"]=!0,s=_(o,i),[x.a.createElement(u.TITLE,s,a)];var a,o,i,s},toString:function(){return function(a,o,i,s){var c=q(i),d=Z(o);return c?"<"+a+' data-rh="true" '+c+">"+F(d,s)+"</"+a+">":"<"+a+' data-rh="true">'+F(d,s)+"</"+a+">"}(e,r.title,r.titleAttributes,t)}};case"bodyAttributes":case"htmlAttributes":return{toComponent:function(){return _(r)},toString:function(){return q(r)}};default:return{toComponent:function(){return function(a,o){return o.map(function(i,s){var c,d=((c={key:s})["data-rh"]=!0,c);return Object.keys(i).forEach(function(y){var p=D[y]||y;p==="innerHTML"||p==="cssText"?d.dangerouslySetInnerHTML={__html:i.innerHTML||i.cssText}:d[p]=i[y]}),x.a.createElement(a,d)})}(e,r)},toString:function(){return function(a,o,i){return o.reduce(function(s,c){var d=Object.keys(c).filter(function(h){return!(h==="innerHTML"||h==="cssText")}).reduce(function(h,b){var A=c[b]===void 0?b:b+'="'+F(c[b],i)+'"';return h?h+" "+A:A},""),y=c.innerHTML||c.cssText||"",p=dt.indexOf(a)===-1;return s+"<"+a+' data-rh="true" '+d+(p?"/>":">"+y+"</"+a+">")},"")}(e,r,t)}}}},G=function(e){var r=e.bodyAttributes,t=e.encode,n=e.htmlAttributes,a=e.linkTags,o=e.metaTags,i=e.noscriptTags,s=e.scriptTags,c=e.styleTags,d=e.title,y=d===void 0?"":d,p=e.titleAttributes;return{base:C(u.BASE,e.baseTag,t),bodyAttributes:C("bodyAttributes",r,t),htmlAttributes:C("htmlAttributes",n,t),link:C(u.LINK,a,t),meta:C(u.META,o,t),noscript:C(u.NOSCRIPT,i,t),script:C(u.SCRIPT,s,t),style:C(u.STYLE,c,t),title:C(u.TITLE,{title:y,titleAttributes:p},t)}},tt=x.a.createContext({}),ft=f.a.shape({setHelmet:f.a.func,helmetInstances:f.a.shape({get:f.a.func,add:f.a.func,remove:f.a.func})}),pt=typeof document!="undefined",S=function(l){function e(r){var t;return(t=l.call(this,r)||this).instances=[],t.value={setHelmet:function(a){t.props.context.helmet=a},helmetInstances:{get:function(){return t.instances},add:function(a){t.instances.push(a)},remove:function(a){var o=t.instances.indexOf(a);t.instances.splice(o,1)}}},e.canUseDOM||(r.context.helmet=G({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),t}return k(e,l),e.prototype.render=function(){return x.a.createElement(tt.Provider,{value:this.value},this.props.children)},e}(O.Component);S.canUseDOM=pt,S.propTypes={context:f.a.shape({helmet:f.a.shape()}),children:f.a.node.isRequired},S.defaultProps={context:{}},S.displayName="HelmetProvider";var P=function(e,r){var t,n=document.head||document.querySelector(u.HEAD),a=n.querySelectorAll(e+"[data-rh]"),o=[].slice.call(a),i=[];return r&&r.length&&r.forEach(function(s){var c=document.createElement(e);for(var d in s)Object.prototype.hasOwnProperty.call(s,d)&&(d==="innerHTML"?c.innerHTML=s.innerHTML:d==="cssText"?c.styleSheet?c.styleSheet.cssText=s.cssText:c.appendChild(document.createTextNode(s.cssText)):c.setAttribute(d,s[d]===void 0?"":s[d]));c.setAttribute("data-rh","true"),o.some(function(y,p){return t=p,c.isEqualNode(y)})?o.splice(t,1):i.push(c)}),o.forEach(function(s){return s.parentNode.removeChild(s)}),i.forEach(function(s){return n.appendChild(s)}),{oldTags:o,newTags:i}},J=function(e,r){var t=document.getElementsByTagName(e)[0];if(t){for(var n=t.getAttribute("data-rh"),a=n?n.split(","):[],o=[].concat(a),i=Object.keys(r),s=0;s<i.length;s+=1){var c=i[s],d=r[c]||"";t.getAttribute(c)!==d&&t.setAttribute(c,d),a.indexOf(c)===-1&&a.push(c);var y=o.indexOf(c);y!==-1&&o.splice(y,1)}for(var p=o.length-1;p>=0;p-=1)t.removeAttribute(o[p]);a.length===o.length?t.removeAttribute("data-rh"):t.getAttribute("data-rh")!==i.join(",")&&t.setAttribute("data-rh",i.join(","))}},et=function(e,r){var t=e.baseTag,n=e.htmlAttributes,a=e.linkTags,o=e.metaTags,i=e.noscriptTags,s=e.onChangeClientState,c=e.scriptTags,d=e.styleTags,y=e.title,p=e.titleAttributes;J(u.BODY,e.bodyAttributes),J(u.HTML,n),function(g,j){g!==void 0&&document.title!==g&&(document.title=Z(g)),J(u.TITLE,j)}(y,p);var h={baseTag:P(u.BASE,t),linkTags:P(u.LINK,a),metaTags:P(u.META,o),noscriptTags:P(u.NOSCRIPT,i),scriptTags:P(u.SCRIPT,c),styleTags:P(u.STYLE,d)},b={},A={};Object.keys(h).forEach(function(g){var j=h[g],H=j.newTags,vt=j.oldTags;H.length&&(b[g]=H),vt.length&&(A[g]=h[g].oldTags)}),r&&r(),s(e,b,A)},N=null,$=function(l){function e(){for(var t,n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return(t=l.call.apply(l,[this].concat(a))||this).rendered=!1,t}k(e,l);var r=e.prototype;return r.shouldComponentUpdate=function(t){return!it()(t,this.props)},r.componentDidUpdate=function(){this.emitChange()},r.componentWillUnmount=function(){this.props.context.helmetInstances.remove(this),this.emitChange()},r.emitChange=function(){var t,n,a=this.props.context,o=a.setHelmet,i=null,s=(t=a.helmetInstances.get().map(function(c){var d=T({},c.props);return delete d.context,d}),{baseTag:lt(["href"],t),bodyAttributes:W("bodyAttributes",t),defer:L(t,"defer"),encode:L(t,"encodeSpecialCharacters"),htmlAttributes:W("htmlAttributes",t),linkTags:M(u.LINK,["rel","href"],t),metaTags:M(u.META,["name","charset","http-equiv","property","itemprop"],t),noscriptTags:M(u.NOSCRIPT,["innerHTML"],t),onChangeClientState:ut(t),scriptTags:M(u.SCRIPT,["src","innerHTML"],t),styleTags:M(u.STYLE,["cssText"],t),title:ct(t),titleAttributes:W("titleAttributes",t)});S.canUseDOM?(n=s,N&&cancelAnimationFrame(N),n.defer?N=requestAnimationFrame(function(){et(n,function(){N=null})}):(et(n),N=null)):G&&(i=G(s)),o(i)},r.init=function(){this.rendered||(this.rendered=!0,this.props.context.helmetInstances.add(this),this.emitChange())},r.render=function(){return this.init(),null},e}(O.Component);$.propTypes={context:ft.isRequired},$.displayName="HelmetDispatcher";var w=function(l){function e(){return l.apply(this,arguments)||this}k(e,l);var r=e.prototype;return r.shouldComponentUpdate=function(t){return!rt()(this.props,t)},r.mapNestedChildrenToProps=function(t,n){if(!n)return null;switch(t.type){case u.SCRIPT:case u.NOSCRIPT:return{innerHTML:n};case u.STYLE:return{cssText:n};default:throw new Error("<"+t.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")}},r.flattenArrayTypeChildren=function(t){var n,a=t.child,o=t.arrayTypeChildren;return T({},o,((n={})[a.type]=[].concat(o[a.type]||[],[T({},t.newChildProps,this.mapNestedChildrenToProps(a,t.nestedChildren))]),n))},r.mapObjectTypeChildren=function(t){var n,a,o=t.child,i=t.newProps,s=t.newChildProps,c=t.nestedChildren;switch(o.type){case u.TITLE:return T({},i,((n={})[o.type]=c,n.titleAttributes=T({},s),n));case u.BODY:return T({},i,{bodyAttributes:T({},s)});case u.HTML:return T({},i,{htmlAttributes:T({},s)});default:return T({},i,((a={})[o.type]=T({},s),a))}},r.mapArrayTypeChildrenToProps=function(t,n){var a=T({},n);return Object.keys(t).forEach(function(o){var i;a=T({},a,((i={})[o]=t[o],i))}),a},r.warnOnInvalidChildren=function(t,n){return z()(X.some(function(a){return t.type===a}),typeof t.type=="function"?"You may be attempting to nest <Helmet> components within each other, which is not allowed. Refer to our API for more information.":"Only elements types "+X.join(", ")+" are allowed. Helmet does not support rendering <"+t.type+"> elements. Refer to our API for more information."),z()(!n||typeof n=="string"||Array.isArray(n)&&!n.some(function(a){return typeof a!="string"}),"Helmet expects a string as a child of <"+t.type+">. Did you forget to wrap your children in braces? ( <"+t.type+">{``}</"+t.type+"> ) Refer to our API for more information."),!0},r.mapChildrenToProps=function(t,n){var a=this,o={};return x.a.Children.forEach(t,function(i){if(i&&i.props){var s=i.props,c=s.children,d=V(s,["children"]),y=Object.keys(d).reduce(function(h,b){return h[st[b]||b]=d[b],h},{}),p=i.type;switch(typeof p=="symbol"?p=p.toString():a.warnOnInvalidChildren(i,c),p){case u.FRAGMENT:n=a.mapChildrenToProps(c,n);break;case u.LINK:case u.META:case u.NOSCRIPT:case u.SCRIPT:case u.STYLE:o=a.flattenArrayTypeChildren({child:i,arrayTypeChildren:o,newChildProps:y,nestedChildren:c});break;default:n=a.mapObjectTypeChildren({child:i,newProps:n,newChildProps:y,nestedChildren:c})}}}),this.mapArrayTypeChildrenToProps(o,n)},r.render=function(){var t=this.props,n=t.children,a=T({},V(t,["children"]));return n&&(a=this.mapChildrenToProps(n,a)),x.a.createElement(tt.Consumer,null,function(o){return x.a.createElement($,T({},a,{context:o}))})},e}(O.Component);w.propTypes={base:f.a.object,bodyAttributes:f.a.object,children:f.a.oneOfType([f.a.arrayOf(f.a.node),f.a.node]),defaultTitle:f.a.string,defer:f.a.bool,encodeSpecialCharacters:f.a.bool,htmlAttributes:f.a.object,link:f.a.arrayOf(f.a.object),meta:f.a.arrayOf(f.a.object),noscript:f.a.arrayOf(f.a.object),onChangeClientState:f.a.func,script:f.a.arrayOf(f.a.object),style:f.a.arrayOf(f.a.object),title:f.a.string,titleAttributes:f.a.object,titleTemplate:f.a.string},w.defaultProps={defer:!0,encodeSpecialCharacters:!0},w.displayName="Helmet";var U=m("9kvl"),ht=m("55Ip"),mt=m("roml"),E=m.n(mt),yt=m("3YGx"),v=m("nKUr"),Tt=function(e){var r=e.route,t=r===void 0?{routes:[]}:r,n=t.routes,a=n===void 0?[]:n,o=e.children,i=e.location,s=i===void 0?{pathname:""}:i,c=Object(U.f)(),d=c.formatMessage,y=Object(Y.a)(a),p=y.breadcrumb,h=Object(Q.a)(Object(R.a)({pathname:s.pathname,formatMessage:d,breadcrumb:p},e));return Object(v.jsxs)(S,{children:[Object(v.jsxs)(w,{children:[Object(v.jsx)("title",{children:h}),Object(v.jsx)("meta",{name:"description",content:h})]}),Object(v.jsxs)("div",{className:E.a.container,children:[Object(v.jsx)("div",{className:E.a.lang,children:Object(v.jsx)(U.b,{})}),Object(v.jsxs)("div",{className:E.a.content,children:[Object(v.jsxs)("div",{className:E.a.top,children:[Object(v.jsx)("div",{className:E.a.header,children:Object(v.jsx)(ht.a,{to:"/",children:Object(v.jsx)("span",{className:E.a.title,children:"AgileConfig"})})}),Object(v.jsx)("div",{className:E.a.desc,children:Object(v.jsx)(U.a,{id:"pages.layouts.userLayout.title",defaultMessage:"AgileConfig"})})]}),o]}),Object(v.jsx)(yt.a,{})]})]})},gt=I.default=Object(U.c)(function(l){var e=l.settings;return Object(R.a)({},e)})(Tt)},roml:function(B,I,m){B.exports={container:"container___3rwDa",lang:"lang___2ES0G",content:"content___3Paa8",top:"top___1W42Y",header:"header___1cl15",logo:"logo___29nS6",title:"title___3DxND",desc:"desc___2YLHe"}}}]);

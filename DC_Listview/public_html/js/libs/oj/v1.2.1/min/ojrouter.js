/**
 * Copyright (c) 2014, 2015, Oracle and/or its affiliates.
 * All rights reserved.
 */
"use strict";
define(["ojs/ojcore","knockout","signals","promise"],function(b,f,a){(function(){function d(){var a=window.location.href.split("#")[0];return a.substring(0,a.lastIndexOf("/"))}function c(a){var b={},c=[],d,e;if(a)for(d in c=a.split("\x26"),c)e=c[d].split(/\=(.+)?/),a=e[0],a.length&&(b[a]||(b[a]=[]),e=e[1]&&decodeURIComponent(e[1].replace(/\+/g," ")),b[a].push(e));return b}function e(a,c){var d;c&&a.io&&(b.l.vo(c),a.io.every(function(a){return a.mj===c?(d=a,!1):!0}));return d}function g(){return window.location.href.split("#")[0].replace(A+
"/","")}function h(a){return a.Ql?h(a.Ql)+"."+a.Af:a.Af}function k(a){return a?k(a.Ql)+a.QA().mj+"/":"/"}function l(a,b){var c;a.dg.every(function(a){return a.Rl&&a.Rl!==b?!0:(c=a,!1)});return c}function m(){return N[0]&&N[0].cancel}function n(a){var c=a.charAt(0);a=a.slice(1);if("0"===c)a=decodeURIComponent(a);else if("1"===c)a=b.LP.dna(a);else throw Error("Error retrieving bookmarkable data. Format is invalid");return JSON.parse(a)}function p(a,c){if(c&&0<Object.getOwnPropertyNames(c).length){var d;
d=-1===a.indexOf("?")?"?":"\x26";var e=a,f=JSON.stringify(c),g=encodeURIComponent(f),f=b.LP.Ima(f),h=!1,k="oj_Router\x3d";f.length<=g.length&&(h=!0);k=h?k+("1"+f):k+("0"+g);if(1024<k.length)throw Error("Size of bookmarkable data is too big.");a=e+(d+k)}return a}function r(a,b,c){var d;a.dg.every(function(a){return a.Rl&&a.Rl!==c||!a.Nj(b)?!0:(d=a,!1)});return d}function s(a,b){var c=[],d=[],e=a,f=b.split("/"),g,h,k;for(f.splice(0,1);e;)d.unshift(e),e=e.Ql;for(;g=f.shift();){e=d.shift();if(!e){if(e=
r(h,g,k),!e){C=b;break}}else if(!e.Nj(g))throw Error('Invalid path "'+b+'". State id "'+g+'" does not exist on router "'+e.Af+'".');c.push({Dc:e,Ku:g});h=e;k=g}e=!0;for(d=c.length-1;0<=d&&e;d--)c[d].Ku===c[d].Dc.lk?c[d].Ku=null:e=!1;return c}function q(a,c){var d=!0,e=Promise.resolve(!0),f=a.QA(),g,h;if(f){for(g=0;g<a.dg.length;g++)if(d=q(a.dg[g],c),!d)return!1;g=f.KE&&f.KE.canExit?f.KE.canExit:f.Xv;if("function"===typeof g){try{h=g()}catch(k){return b.r.error("Error when executing canExit callback: %s",
k.message),!1}h&&h.then?e=h:(h||b.r.info("canExit is false for state %s",f.mj),d=h)}}c.push(e);return d}function t(a){var c;if(!a)return Promise.resolve(!m());c=[];return q(a,c)?Promise.all(c).then(function(a){var c;for(c=0;c<a.length;c++)if(!a[c])return b.r.info("CanExit promise at position %s returned false.",String(c)),!1;return!m()}):Promise.resolve(!1)}function w(a,c){b.r.info("Start _canEnter.");var d=!0,e=Promise.resolve(!0),f=[];a.every(function(a){var c,g;if(c=a.Dc.Nj(a.value))if(a=c.Wv,
"function"===typeof a){try{g=a()}catch(h){return b.r.error("Error when executing canEnter callback: %s",h.message),d=!1}if(g&&g.then)e=g;else if(d=g,!d)return b.r.info("canEnter is false for state: %s",c.mj),!1}f.push(e);return!0});return!d||m()?Promise.resolve({ED:[]}):Promise.all(f).then(function(d){var e;for(e=0;e<d.length;e++)if(!d[e])return b.r.info("CanEnter promise at position %s returned false.",String(e)),{ED:[]};return{ED:a,origin:c}})}function x(a,c){var d=a.Dc.Nj(a.Dc.Bf()),e=a.value?
a.Dc.Nj(a.value):void 0;return Promise.resolve().then(function(){b.r.info("Updating state of %s to %s.",h(a.Dc),a.value)}).then(d?d.mw:void 0).then(function(){var b=a.Dc,d,e,g;if("popState"===c){e=b.Ft.length;for(d=e-1;0<=d;d--)if(b.Ft[d]===a.value){g=!0;b.Ft.splice(d,e-d);break}1===e-d&&(b.ix="back")}g||(delete b.ix,b.Ft.push(b.Bf()));b.Bf(a.value)}).then(e?e.lw:void 0)}function u(a){var c;c=Promise.resolve().then(function(){b.r.info("Entering _updateAll.");b.Xa.vD=!0});a.ED.forEach(function(b){c=
c.then(function(){if(!m())return x(b,a.origin)})});return c.then(function(){var c=0<a.ED.length&&!m();b.Xa.vD=!1;b.r.info("_updateAll returns %s.",String(c));return{hasChanged:c}},function(a){b.Xa.vD=!1;return Promise.reject(a)})}function v(a){var c={},d,e=a.split("?")[1]||"";b.r.info("Parsing: %s",a);a=E.hy(a);if(e=e.split("oj_Router\x3d")[1])e=e.split("\x26")[0],c=n(e);if(b.r.option("level")===b.r.Or)for(d in b.r.info("Bookmarkable data: "),c)b.r.info("   { router: %s, value: %s }",d,c[d]);a=E.parse(a).filter(function(a){var b=
c[a.Dc.Af];b&&(a.Dc.hj=b);return a.value!==a.Dc.Bf()});b.r.option("level")===b.r.Or&&(b.r.info("Potential changes are: "),a.forEach(function(a){b.r.info("   { router: %s, value: %s }",h(a.Dc),a.value)}));return a}function y(a,b){var c;try{c=v(a)}catch(d){return Promise.reject(d)}return w(c,b).then(u)}function B(a){b.r.info("\x3e\x3e Executing: path\x3d%s, url\x3d%s, origin\x3d%s",a.path,a.url,a.origin);return a.url?"sync"===a.origin?y(a.url):t(a.Dc).then(function(b){return b?y(a.url,a.origin):{hasChanged:!1}}):
a.Dc.hea(a.path||null,a.replace)}function M(){var a=N[0];b.r.info("\x3e\x3e Resolving: path\x3d%s, url\x3d%s",a.path,a.url);a.cancel?(b.r.info("\x3e\x3e Cancelled: path\x3d%s, url\x3d%s",a.path,a.url),a=Promise.resolve({hasChanged:!1})):a=B(a);return a.then(function(a){var c=N.shift();b.r.info("\x3e\x3e Done with: path\x3d%s, url\x3d%s",c.path,c.url);b.Xa.au.dispatch(a);return a},function(a){N=[];b.Xa.au.dispatch({hasChanged:!1});return Promise.reject(a)})}function I(a){var c;c=N.push(a);b.r.info("\x3e\x3e Queue transition for path\x3d%s, url\x3d%s",
a.path,a.url);1===c?Q=M():(a=N[c-2],a.url||a.fna||(b.r.info("\x3e\x3e Cancelling: path\x3d%s",a.path),a.cancel=!0),Q=Q.then(M));return Q}function F(){var a,c,d=null;b.r.info("Handling popState event with URL: %s",window.location.href);for(a=0;a<H.dg.length;a++)if(c=H.dg[a],H.Bf()&&H.Bf()===c.Rl){d=c;break}I({Dc:d,url:g(),origin:"popState"}).then(null,function(a){b.r.error("Error while changing state in handlePopState: %s",a.message)})}function D(){J||(E||(E=new b.Xa.aP),A||(A=d()),window.addEventListener("popstate",
F,!1),b.r.info("Initializing rootInstance."),b.r.info("Base URL is %s",A),b.r.info("This page is %s",z),b.r.info("Current URL is %s",window.location.href),J=!0)}var A,z=function(){var a="",b=window.location.pathname;-1!==b.indexOf(".html",b.length-5)&&(a=b.split("/").pop());return a}(),E,J=!1,C,N=[],Q;b.Xa=function(a,b){var c=this;this.Af=a;this.Rl=b?b.Bf():void 0;this.Ql=b;this.dg=[];this.hj=void 0;this.Bf=f.observable();this.cla=f.pureComputed({read:function(){return this.Bf()},write:function(a){this.go(a).then(null,
function(a){throw a;})},owner:c});this.io=null;this.lk=void 0;this.QA=f.pureComputed(function(){return f.ignoreDependencies(c.Nj,c,[c.Bf()])});this.mba=f.pureComputed(function(){var a,b=f.ignoreDependencies(c.Nj,c,[c.Bf()]);b&&(a=b.value);return a});this.ix=void 0;this.Ft=[];this.zha=Object.create(null,{name:{value:f.pureComputed(function(){var a,b;b=this.Bf()||this.lk||this.io[0];if(b=this.Nj(b))a=b.value,a&&"string"===typeof a||(a=b.mj);return a},c),enumerable:!0},params:{value:Object.create(null,
{ojRouter:{value:new function(){Object.defineProperties(this,{parentRouter:{value:c,enumerable:!0},direction:{get:function(){return c.ix},enumerable:!0}})},enumerable:!0}}),enumerable:!0},lifecycleListener:{value:Object.create(null,{attached:{value:function(a){var b=a.valueAccessor().params.ojRouter.parentRouter.QA();b&&(b.KE=a.viewModel)}}}),enumerable:!0}});Object.defineProperties(this,{parent:{value:this.Ql,enumerable:!0},name:{value:this.Af,enumerable:!0}})};o_("Router",b.Xa,b);Object.defineProperties(b.Xa.prototype,
{states:{get:function(){return this.io},enumerable:!0},stateId:{get:function(){return this.cla},enumerable:!0},currentState:{get:function(){return this.QA},enumerable:!0},currentValue:{get:function(){return this.mba},enumerable:!0},defaultStateId:{get:function(){return this.lk},set:function(a){this.lk=a},enumerable:!0},moduleConfig:{get:function(){return this.zha},enumerable:!0}});var H=new b.Xa("root",void 0);b.Xa.prototype.j2=function(a){var b;a&&"string"===typeof a&&(a=a.trim(),0<a.length&&this.dg.every(function(c){return c.Af===
a?(b=c,!1):!0}));return b};b.b.g("Router.prototype.getChildRouter",{j2:b.Xa.prototype.j2});b.Xa.prototype.D1=function(a){var c,d;b.l.vo(a);a=a.trim();for(c=0;c<this.dg.length;c++){d=this.dg[c];if(d.Af===a)throw Error('Invalid router name "'+a+'", it already exists.');if(d.Rl===this.Bf())throw Error('Cannot create more than one child router for parent state id "'+d.Rl+'".');}a=new b.Xa(a,this);this.dg.push(a);return a};b.b.g("Router.prototype.createChildRouter",{D1:b.Xa.prototype.D1});b.Xa.prototype.Nj=
function(a){return e(this,a)};b.Xa.prototype.y1=function(a){this.Bf(void 0);delete this.lk;this.ix=void 0;this.Ft=[];"function"===typeof a?(this.io=null,this.Nj=a):(this.io=[],delete this.Nj,Object.keys(a).forEach(function(c){var d=a[c];this.io.push(new b.Ur(c,d,this));"boolean"===typeof d.isDefault&&d.isDefault&&(this.lk=c)},this));return this};b.b.g("Router.prototype.configure",{y1:b.Xa.prototype.y1});b.Xa.prototype.O2=function(a){return this.Nj(a)};b.b.g("Router.prototype.getState",{O2:b.Xa.prototype.O2});
b.Xa.prototype.go=function(a){D();return I({Dc:this,path:a,origin:"go"})};b.b.g("Router.prototype.go",{go:b.Xa.prototype.go});b.Xa.prototype.hea=function(a,c){function d(a){return a?y(f.replace(/^\//,"")).then(function(a){if(a.hasChanged){var d=A+f;b.r.info("%s URL to %s",c?"Replacing":"Pushing",d);window.history[c?"replaceState":"pushState"](null,"",d)}return a}):{hasChanged:!1}}var e,f,q;e=!0;if(a)if("string"===typeof a)0<a.length&&(e=!1);else return Promise.reject(Error("Invalid object type for state id."));
if(e&&(a=this.lk||null,!a))return b.r.option("level")===b.r.Or&&b.r.info("Undefined state id with no default id on router %s",h(this)),Promise.resolve({hasChanged:!1});e="/"===a.charAt(0)?a:k(this.Ql)+a;b.r.info("Destination path: %s",e);try{q=s(this,e)}catch(l){return Promise.reject(l)}f=E.n1(q);b.r.option("level")===b.r.Or&&b.r.info("Going to URL %s on router %s",f,h(this));q="/"+E.hy(g()).replace(z,"");return E.hy(f)!==q?(b.r.info("New URL is different."),t(this).then(d)):Promise.resolve({hasChanged:!1})};
b.Xa.prototype.V4=function(a){this.hj=a;a={};for(var b=this;b;)b.hj&&(a[b.Af]=b.hj),b=b.Ql;for(var b=this,c,d,e;b;){for(d=0;d<b.dg.length;d++)if(e=b.dg[d],b.Bf()&&b.Bf()===e.Rl){e.hj&&(a[e.Af]=e.hj);c=e;break}b=c;c=void 0}c=A+"/"+E.hy(g());c=p(c,a);window.history.replaceState(null,"",c)};b.b.g("Router.prototype.store",{V4:b.Xa.prototype.V4});b.Xa.prototype.z4=function(){return this.hj};b.b.g("Router.prototype.retrieve",{z4:b.Xa.prototype.z4});b.Xa.prototype.ou=function(){for(var a,c;0<this.dg.length;)this.dg[0].ou();
if(this.Ql){a=this.Ql.dg;for(c=0;c<a.length;c++)if(a[c].Af===this.Af){a.splice(c,1);break}delete this.Rl}else A="",E={},window.removeEventListener("popstate",F),b.Xa.au.removeAll(),J=!1;delete this.ix;this.Ft=[];this.io=null;delete this.lk;delete this.hj};b.b.g("Router.prototype.dispose",{ou:b.Xa.prototype.ou});b.Xa.au=new a.Signal;b.Xa.vD=!1;Object.defineProperties(b.Xa,{rootInstance:{value:H,enumerable:!0},transitionedToState:{value:b.Xa.au,enumerable:!0}});b.Xa.Cc={};o_("Router.defaults",b.Xa.Cc,
b);Object.defineProperties(b.Xa.Cc,{urlAdapter:{get:function(){E||(E=new b.Xa.aP);return E},set:function(a){if(J)throw Error("Incorrect operation. Cannot change URL adapter after calling sync() or go().");E=a},enumerable:!0,AO:!1},baseUrl:{get:function(){A||(A=d());return A},set:function(a){if(J)throw Error("Incorrect operation. Cannot change base URL after calling sync() or go().");A=a.replace(/\/$/,"")},enumerable:!0,AO:!1}});b.Xa.UO=function(){var a;D();b.r.info("Entering sync.");if(C)return a=
{Dc:H,path:C,fna:!0,replace:!0},C=void 0,I(a);if(b.Xa.vD)return b.r.info("Sync called while updating, waiting for updates to end."),new Promise(function(a){b.Xa.au.addOnce(function(c){b.r.info("Sync updates done.");a(c)})});a={Dc:H,url:g(),origin:"sync"};return I(a)};o_("Router.sync",b.Xa.UO,b);b.Xa.aP=function(){this.parse=function(a){var b=H;a=a.split("/");var c=[],d;do(d=a.shift())&&(0===d.length||/\.html$/i.test(d))&&(d=void 0),d=d||b.lk,c.push({value:d,Dc:b}),b=l(b,d);while(b);return c};this.n1=
function(a){var c="",d={};a.forEach(function(a){a.Ku&&(c+="/"+a.Ku);a.Dc.wra&&(d[a.Dc.Af]=a.Dc.hj)});""===c&&(c="/"+z);try{c=p(c,d)}catch(e){b.r.error("Error while building URL: %s",e)}return c};this.hy=function(a){return a.split("?")[0]};this.F2=function(a){var b=a.indexOf("?"),d=null;-1!==b&&(d=a.substr(b+1));return c(d)}};o_("Router.urlPathAdapter",b.Xa.aP,b);b.Xa.$pa=function(){this.parse=function(a){a=this.F2(a);var b=H,c=[],d;do{if(d=a[b.Af])d=d[0],delete a[b.Af];d=d||b.lk;c.push({value:d,Dc:b});
b=l(b,d)}while(b);return c};this.n1=function(a){var c="/"+z,d={},e="?";a.forEach(function(a){a.Ku&&(c+=e+a.Dc.Af+"\x3d"+a.Ku,e="\x26");a.Dc.hj&&(d[a.Dc.Af]=a.Dc.hj)});try{c=p(c,d)}catch(f){b.r.error("Error while building URL: %s",f)}return c};this.hy=function(a){var b=a.indexOf("oj_Router\x3d");return-1!==b?a.substr(0,b-1):a};this.F2=function(a){var b=a.indexOf("?"),d=null,d={};-1!==b&&(d=a.substr(b+1),d=c(d));return d}};o_("Router.urlParamAdapter",b.Xa.$pa,b);return H})();(function(){b.Ur=function(a,
c,e){c=c||{};b.l.vo(a);this.mj=encodeURIComponent(a.trim());(this.Wv=c.canEnter)&&b.l.gu(this.Wv);(this.lw=c.enter)&&b.l.gu(this.lw);(this.Xv=c.canExit)&&b.l.gu(this.Xv);(this.mw=c.exit)&&b.l.gu(this.mw);this.W0=c.value;this.kY=c.label;this.NC=e;this.KE=void 0;Object.defineProperties(this,{id:{value:this.mj,enumerable:!0},value:{get:function(){return this.W0},set:function(a){this.W0=a},enumerable:!0},label:{get:function(){return this.kY},set:function(a){this.kY=a},enumerable:!0},canEnter:{get:function(){return this.Wv},
set:function(a){this.Wv=a},enumerable:!0},enter:{get:function(){return this.lw},set:function(a){this.lw=a},enumerable:!0},canExit:{get:function(){return this.Xv},set:function(a){this.Xv=a},enumerable:!0},exit:{get:function(){return this.mw},set:function(a){this.mw=a},enumerable:!0}})};o_("RouterState",b.Ur,b);b.Ur.prototype.go=function(){return this.NC?this.NC.go(this.mj):(b.Xa.au.dispatch({hasChanged:!1}),Promise.reject(Error("Router is not defined for this RouterState object.")))};b.b.g("RouterState.prototype.go",
{go:b.Ur.prototype.go});b.Ur.prototype.s3=function(){if(!this.NC)throw Error("Router is not defined for this RouterState object.");return this.NC.Bf()===this.mj};b.b.g("RouterState.prototype.isCurrent",{s3:b.Ur.prototype.s3})})();(function(){function a(b,c){if(null===b)return"";var d,e,f={},g={},h="",q=2,t=3,w=2,x="",u=0,v=0,y,B,M,I=b.length;for(M=0;M<I;M++)if(y=b[M],Object.prototype.hasOwnProperty.call(f,y)||(f[y]=t++,g[y]=!0),B=h+y,Object.prototype.hasOwnProperty.call(f,B))h=B;else{if(Object.prototype.hasOwnProperty.call(g,
h)){if(256>h.charCodeAt(0)){for(d=w;d--;)u<<=1,5==v?(v=0,x+=c(u),u=0):v++;e=h.charCodeAt(0);d=8}else{e=1;for(d=w;d--;)u=u<<1|e,5==v?(v=0,x+=c(u),u=0):v++,e=0;e=h.charCodeAt(0);d=16}for(;d--;)u=u<<1|e&1,5==v?(v=0,x+=c(u),u=0):v++,e>>=1;q--;0==q&&(q=Math.pow(2,w),w++);delete g[h]}else for(e=f[h],d=w;d--;)u=u<<1|e&1,5==v?(v=0,x+=c(u),u=0):v++,e>>=1;q--;0==q&&(q=Math.pow(2,w),w++);f[B]=t++;h=String(y)}if(""!==h){if(Object.prototype.hasOwnProperty.call(g,h)){if(256>h.charCodeAt(0)){for(d=w;d--;)u<<=1,
5==v?(v=0,x+=c(u),u=0):v++;e=h.charCodeAt(0);d=8}else{e=1;for(d=w;d--;)u=u<<1|e,5==v?(v=0,x+=c(u),u=0):v++,e=0;e=h.charCodeAt(0);d=16}for(;d--;)u=u<<1|e&1,5==v?(v=0,x+=c(u),u=0):v++,e>>=1;q--;0==q&&(q=Math.pow(2,w),w++);delete g[h]}else for(e=f[h],d=w;d--;)u=u<<1|e&1,5==v?(v=0,x+=c(u),u=0):v++,e>>=1;q--;0==q&&w++}e=2;for(d=w;d--;)u=u<<1|e&1,5==v?(v=0,x+=c(u),u=0):v++,e>>=1;for(;;)if(u<<=1,5==v){x+=c(u);break}else v++;return x}function c(a,b){for(var c=[],d=4,f=4,g=3,h="",q="",t,w,x,u,v,y={val:b(0),
position:32,index:1},q=0;3>q;q+=1)c[q]=q;h=0;x=Math.pow(2,2);for(u=1;u!=x;)w=y.val&y.position,y.position>>=1,0==y.position&&(y.position=32,y.val=b(y.index++)),h|=(0<w?1:0)*u,u<<=1;switch(h){case 0:h=0;x=Math.pow(2,8);for(u=1;u!=x;)w=y.val&y.position,y.position>>=1,0==y.position&&(y.position=32,y.val=b(y.index++)),h|=(0<w?1:0)*u,u<<=1;v=e(h);break;case 1:h=0;x=Math.pow(2,16);for(u=1;u!=x;)w=y.val&y.position,y.position>>=1,0==y.position&&(y.position=32,y.val=b(y.index++)),h|=(0<w?1:0)*u,u<<=1;v=e(h);
break;case 2:return""}for(t=q=c[3]=v;;){if(y.index>a)return"";h=0;x=Math.pow(2,g);for(u=1;u!=x;)w=y.val&y.position,y.position>>=1,0==y.position&&(y.position=32,y.val=b(y.index++)),h|=(0<w?1:0)*u,u<<=1;switch(v=h){case 0:h=0;x=Math.pow(2,8);for(u=1;u!=x;)w=y.val&y.position,y.position>>=1,0==y.position&&(y.position=32,y.val=b(y.index++)),h|=(0<w?1:0)*u,u<<=1;c[f++]=e(h);v=f-1;d--;break;case 1:h=0;x=Math.pow(2,16);for(u=1;u!=x;)w=y.val&y.position,y.position>>=1,0==y.position&&(y.position=32,y.val=b(y.index++)),
h|=(0<w?1:0)*u,u<<=1;c[f++]=e(h);v=f-1;d--;break;case 2:return q}0==d&&(d=Math.pow(2,g),g++);if(c[v])h=c[v];else if(v===f)h=t+t[0];else return null;q+=h;c[f++]=t+h[0];d--;t=h;0==d&&(d=Math.pow(2,g),g++)}}b.LP={Ima:function(b){return null===b?"":a(b,function(a){return f.charAt(a)})},dna:function(a){return null===a?"":""===a?null:c(a.length,function(b){var c=f;b=a.charAt(b);var d;h||(h={});if(!h[c])for(h[c]={},d=0;d<c.length;d++)h[c][c[d]]=d;return h[c][b]})}};var e=String.fromCharCode,f="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$",
h})()});
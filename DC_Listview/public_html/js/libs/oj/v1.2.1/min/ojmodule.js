/**
 * Copyright (c) 2014, 2015, Oracle and/or its affiliates.
 * All rights reserved.
 */
"use strict";
define(["ojs/ojcore","knockout","promise"],function(b,f){b.Pr={};b.Pr.Cc={viewPath:"text!views/",viewSuffix:".html",modelPath:"viewModels/",initializeMethod:"initialize",disposeMethod:"dispose",activatedHandler:"handleActivated",attachedHandler:"handleAttached",detachedHandler:"handleDetached",bindingsAppliedHandler:"handleBindingsApplied",deactivatedHandler:"handleDeactivated",transitionCompletedHandler:"handleTransitionCompleted"};o_("ModuleBinding.defaults",b.Pr.Cc,b);(function(){function a(a,
d,e,g,h,k,l){var n=d.canAnimate;if(null==n||n.call(d,a)){var p,s;if(n=d.prepareAnimation.call(d,a))p=n.newViewParent,s=n.oldViewParent;var F=p||e;s&&s!==e?c(g,s):F===e&&k(null);F!==e&&f.virtualElements.setDomNodeChildren(F,[]);h(F);var r=Array.prototype.slice.call(F.childNodes),A=!1,z=function(){A||(A=!0,e!==F&&m(e,r))},E=k.bind(null,s);a.newViewParent=p;a.oldViewParent=s;a.oldViewNodes=g;a.removeOldView=E;a.insertNewView=z;var J=function(){E();z();l()};return d.animate.call(d,a).then(J,function(){J();
b.r.error("ojModule animation promise was rejected")})}}function d(a,b,c){b=b||a;var d=[];c&&a===b&&(c.parentNode.removeChild(c),d.push(c));f.virtualElements.setDomNodeChildren(b,d)}function c(a,b){a.forEach(function(a){b.appendChild(a)})}function e(a,b,c){if(a&&a[b]){var d={element:c[0],valueAccessor:c[1]};2<c.length&&(d.viewModel=c[2],3<c.length&&(d["boolean"===typeof c[3]?"fromCache":"cachedNodes"]=c[3]));return f.ignoreDependencies(a[b],a,[d])}}function g(a,c,d){if(null!=a&&(c=b.Pr.Cc[c],null!=
c&&a&&(c=a[c],"function"===typeof c))){var e=void 0;d&&(e={element:d[0],valueAccessor:d[1]},2<d.length&&(e["boolean"===typeof d[2]?"fromCache":"cachedNodes"]=d[2]));return f.ignoreDependencies(c,a,[e])}}function h(a,b,c){var d=[];for(a=f.virtualElements.firstChild(a);null!=a&&a!=c;a=a.nextSibling)a!=b&&d.push(a);return d}function k(a,b){var c=[],d=f.virtualElements.firstChild(a);l(d,b,function(a){c.push(a)});return c}function l(a,b,c){for(;null!=a;){var d=f.virtualElements.nextSibling(a),e=a.nodeType;
a===b||1!==e&&8!==e||c(a);a=d}}function m(a,b){for(var c=b.length-1;0<=c;c--)f.virtualElements.prepend(a,b[c])}function n(a,c){if(null!=b.Components)for(var d=0;d<a.length;d++)c?b.Components.Hm(a[d]):b.Components.Xo(a[d])}function p(a){if("string"===typeof a)a=f.utils.parseHtmlFragment(a);else if(window.DocumentFragment?a instanceof DocumentFragment:a&&11===a.nodeType)a=f.utils.arrayPushAll([],a.childNodes);else if(Array.isArray(a))a=f.utils.arrayPushAll([],a);else throw"The View ("+a+") has an unsupported type";
return a}function r(a){return new Promise(function(b){require([a],function(a){b(a)},function(){throw Error("ojModule failed to load "+a);})})}function s(a){return a?new Promise(function(b){a.then(b,b)}):a}f.bindingHandlers.ojModule={init:function(q,t,w,x,u){function v(a){if(a!=D)throw Error("Promise cancelled because ojModule is fetching new View and ViewModel");}function y(a){g(a,"disposeMethod",[q,t])}var B,M,I={},F,D=-1,A,z;f.utils.domNodeDisposal.addDisposeCallback(q,function(){y(B);for(var a=
Object.keys(I),b=0;b<a.length;b++)y(I[a[b]].Po)});8===q.nodeType&&(f.virtualElements.setDomNodeChildren(q,[]),z=q.nextSibling);f.computed(function(){D++;var w=0===D,x=f.utils.unwrapObservable,C=x(t()),N,Q,H,L,G,O,P,W;"string"===typeof C?N=C:(N=x(C.name),Q=x(C.viewName),H=x(C.params),L=x(C.viewModelFactory),G=x(C.createViewFunction),O=x(C.cacheKey),P=x(C.lifecycleListener),W=x(C.animation));var x=e(P,"activated",[q,t]),K,V,Z=null==O?null:I[O];if(null!=Z)delete I[O],K=Promise.resolve(Z.view),V=Promise.resolve(Z.Po);
else if(null!=L&&(V=f.ignoreDependencies(L.createViewModel,L,[H,t])),null==V&&null!=N&&(V=r(b.Pr.Cc.modelPath+N)),null!=V&&(V=V.then(function(a,b){v(a);return b="function"===typeof b?new b(H):g(b,"initializeMethod",[q,t])||b}.bind(null,D)),null!=G&&(K=V.then(function(a,b){v(a);if(null==b)throw"createViewFunction option cannot be used when the ViewModel is null";var c=b[G];if(null==c)throw"function specified by the createViewFunction option was not found on the ViewModel";return c.call(b)}.bind(null,
D)))),null==K)if(Q=null==Q?N:Q,null!=Q)K=r(b.Pr.Cc.viewPath+Q+b.Pr.Cc.viewSuffix);else throw Error("View name must be specified");if(null==K)throw Error("ojModule is missing a View");var X;null!=V&&(X=V.then(function(a,b){v(a);return g(b,"activatedHandler",[q,t])}.bind(null,D)));Promise.all([K,V,x,X,M]).then(function(b,x){if(b==D){var v=x[0];if(null==v)throw"The module's View was resolved to null";var r=p(v),C=x[1],J=!1,G,N=h(q,A,z),K=k(q,A);null!=F&&(J=!0,G=N,A||(A=document.createElement("div"),
A.className="oj-helper-module-cache",f.virtualElements.prepend(q,A)));var L=!1,v=function(a){L||(L=!0,J?c(N,A):K.forEach(function(a){f.cleanNode(a)}),d(q,a||q,A),w||(e(P,"detached",[q,t,B,G]),g(B,"detachedHandler",[q,t,G]),e(P,"deactivated",[q,t,B]),g(B,"deactivatedHandler",[q,t])),J?(n(G,!1),I[F]={Po:B,view:G}):y(B),B=C,F=O)},Q=function(a){a=a||q;m(a,r);var b=null!=Z;b&&n(r,!0);e(P,"attached",[a,t,C,b]);g(C,"attachedHandler",[a,t,b]);if(!b){var c=u.createChildContext(C,void 0,function(a){a.$module=
C;a.$params=H});l(r[0],A,function(a){f.applyBindings(c,a)});e(P,"bindingsApplied",[a,t,C]);g(C,"bindingsAppliedHandler",[a,t])}},ga=function(){e(P,"transitionCompleted",[q,t,C]);g(C,"transitionCompletedHandler",[q,t])};if(null!=W){var ja=a({node:q,valueAccessor:t,isInitial:w,oldViewModel:B,newViewModel:C},W,q,N,Q,v,ga);M=s(ja)}else M=void 0;M||(v(null),Q(null),ga())}}.bind(null,D),function(a,c){a==D&&null!=c&&b.r.error(c)}.bind(null,D))},null,{disposeWhenNodeIsRemoved:q});return{controlsDescendantBindings:!0}}};
f.virtualElements.allowedBindings.ojModule=!0})()});
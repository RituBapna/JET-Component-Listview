/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
define(["ojs/ojcore","knockout","promise"],function(b,f){b.ka={};b.ka.vY={coverStart:{Iu:"oj-animation-coverstart",Ir:"oj-animation-coverstart",Jr:!0},coverUp:{Ir:"oj-animation-coverup",Jr:!0},fade:{Iu:"oj-animation-fade",Ir:"oj-animation-fade",Jr:!1},revealDown:{Iu:"oj-animation-revealdown",Jr:!1},revealEnd:{Iu:"oj-animation-revealend",Ir:"oj-animation-revealend",Jr:!1},zoomIn:{Ir:"oj-animation-zoomin",Jr:!0},zoomOut:{Iu:"oj-animation-zoomout",Jr:!1}};b.ka.w_=function(a,b,c){var e=$(a);return new Promise(function(a){function f(){a(!0)}
var k="oj-"+c,l=k+"-active";e.addClass(b);e.addClass(k);window.requestAnimationFrame(function(){e.addClass(l)});if((k=e.css("animationDuration")||e.css("webkitAnimationDuration"))&&"0s"!=k)e.on("animationend webkitAnimationEnd",f);else if((k=e.css("transitionDuration")||e.css("webkitTransitionDuration"))&&"0s"!=k)e.on("transitionend webkitTransitionEnd",f);else a(!0)})};b.ka.Wia=function(a,d,c){var e=[];c=b.ka.vY[c];a&&c&&c.Iu&&e.push(b.ka.w_(a,c.Iu,"leave"));d&&c&&c.Ir&&e.push(b.ka.w_(d,c.Ir,"enter"));
return Promise.all(e)};b.ka.h_=function(a,b){for(var c=f.virtualElements.firstChild(a);c;)1==c.nodeType?b.push(c):8==c.nodeType&&this.h_(c,b),c=f.virtualElements.nextSibling(c)};b.ka.Dja=function(a,b){a._ojOldRoot=b};b.ka.uoa=function(a){return a._ojOldRoot};b.ka.d1=function(a){if(a.isInitial)return!1;if(1==a.node.nodeType)return!0;if(8==a.node.nodeType){var d=[];b.ka.h_(a.node,d);if(d&&1==d.length)return b.ka.Dja(a,d[0]),!0}return!1};b.ka.Rna=function(a){var d;1==a.node.nodeType?d=a.node:8==a.node.nodeType&&
(d=b.ka.uoa(a));return d};b.ka.WN=function(a){var b=$(document.createElement("div")),c={position:"absolute",height:a.offsetHeight+"px",width:a.offsetWidth+"px",left:a.offsetLeft+"px",top:a.offsetTop+"px"};b.appendTo(a.offsetParent);b.css(c);b.addClass("oj-animation-host-viewport");a=document.createElement("div");a.className="oj-animation-host";b.append(a);return a};b.ka.g1=function(a,d){var c={},e=b.ka.vY[d],f=b.ka.Rna(a);e&&(e.Ir&&!e.Jr&&(c.newViewParent=b.ka.WN(f)),e.Iu&&(c.oldViewParent=b.ka.WN(f)),
e.Ir&&e.Jr&&(c.newViewParent=b.ka.WN(f)));return c};b.ka.c1=function(a,d){return b.ka.Wia(a.oldViewParent,a.newViewParent,d).then(function(){b.ka.Lsa(a)})};b.ka.o7=function(a,b){var c=a[b];c&&(c=c.parentNode)&&c.parentNode&&c.parentNode.removeChild(c)};b.ka.Lsa=function(a){a.removeOldView();a.insertNewView();b.ka.o7(a,"newViewParent");b.ka.o7(a,"oldViewParent")};b.ka.dt=function(a){return{canAnimate:b.ka.d1,prepareAnimation:function(d){return b.ka.g1(d,a)},animate:function(d){return b.ka.c1(d,a)}}};
b.ka.qP=function(a){null==b.ka.oR&&(b.ka.oR=b.Hf.Jca("oj-animation-navigate-methods"));return b.ka.oR?b.ka.oR[a]:null};b.ka.ksa=function(a,d){return b.ka.qP(d)&&b.ka.d1(a)};b.ka.lsa=function(a,d){var c=b.ka.qP(d);return b.ka.g1(a,c)};b.ka.jsa=function(a,d){var c=b.ka.qP(d);return b.ka.c1(a,c)};b.ka.c3=function(a){return{canAnimate:function(d){return b.ka.ksa(d,a)},prepareAnimation:function(d){return b.ka.lsa(d,a)},animate:function(d){return b.ka.jsa(d,a)}}};b.ka.Vxa=b.ka.dt("coverStart");o_("ModuleAnimations.coverStart",
b.ka.Vxa,b);b.ka.QBa=b.ka.dt("revealEnd");o_("ModuleAnimations.revealEnd",b.ka.QBa,b);b.ka.Wxa=b.ka.dt("coverUp");o_("ModuleAnimations.coverUp",b.ka.Wxa,b);b.ka.PBa=b.ka.dt("revealDown");o_("ModuleAnimations.revealDown",b.ka.PBa,b);b.ka.GCa=b.ka.dt("zoomIn");o_("ModuleAnimations.zoomIn",b.ka.GCa,b);b.ka.HCa=b.ka.dt("zoomOut");o_("ModuleAnimations.zoomOut",b.ka.HCa,b);b.ka.Fya=b.ka.dt("fade");o_("ModuleAnimations.fade",b.ka.Fya,b);b.ka.yya=b.ka.c3("drillIn");o_("ModuleAnimations.drillIn",b.ka.yya,
b);b.ka.zya=b.ka.c3("drillOut");o_("ModuleAnimations.drillOut",b.ka.zya,b);b.ka.kCa=function(a){return new function(){function d(a){return function(b){return c[a].call(c,b)}}var c,e=this;this.canAnimate=function(f){var h=a(f);c=null==h?null:b.ModuleAnimations[h];if(!c)return!1;for(var h=["prepareAnimation","animate"],k=0;k<h.length;k++){var l=h[k];e[l]=d(l)}return d("canAnimate")(f)}}};o_("ModuleAnimations.switcher",b.ka.kCa,b)});
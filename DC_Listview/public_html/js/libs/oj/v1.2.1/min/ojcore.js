/**
 * Copyright (c) 2014, 2015, Oracle and/or its affiliates.
 * All rights reserved.
 */
"use strict";
var o_a=this;function o_(b,f,a){b=b.split(".");a=a||o_a;b[0]in a||!a.execScript||a.execScript("var "+b[0]);for(var d;b.length&&(d=b.shift());)b.length||void 0===f?a=a[d]?a[d]:a[d]={}:a[d]=f};/*
 Copyright 2013 jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license
*/
define(["require","ojL10n!ojtranslations/nls/ojtranslations"],function(b,f){var a={};"undefined"!==typeof window?a=window:"undefined"!==typeof self&&(a=self);var d=a.oj,c=a.oj={version:"1.2.1",build:"45",revision:"22104",noConflict:function(){a.oj=d}};c.r={};o_("Logger",c.r,c);c.r.b6=0;o_("Logger.LEVEL_NONE",c.r.b6,c);c.r.nF=1;o_("Logger.LEVEL_ERROR",c.r.nF,c);c.r.Tm=2;o_("Logger.LEVEL_WARN",c.r.Tm,c);c.r.Or=3;o_("Logger.LEVEL_INFO",c.r.Or,c);c.r.KP=4;o_("Logger.LEVEL_LOG",
c.r.KP,c);c.r.T7="error";c.r.W7="warn";c.r.U7="info";c.r.V7="log";c.r.qU={level:c.r.nF,writer:null};c.r.gb=c.r.qU;c.r.error=function(a){c.r.cy(c.r.nF,c.r.T7,arguments)};o_("Logger.error",c.r.error,c);c.r.info=function(a){c.r.cy(c.r.Or,c.r.U7,arguments)};o_("Logger.info",c.r.info,c);c.r.warn=function(a){c.r.cy(c.r.Tm,c.r.W7,arguments)};o_("Logger.warn",c.r.warn,c);c.r.log=function(a){c.r.cy(c.r.KP,c.r.V7,arguments)};o_("Logger.log",c.r.log,c);c.r.option=function(a,b){var d={},e;if(0==arguments.length){for(e in c.r.gb)c.r.gb.hasOwnProperty(e)&&
(d[e]=c.r.gb[e]);return d}if("string"===typeof a&&void 0===b)return void 0===c.r.gb[a]?null:c.r.gb[a];if("string"===typeof a)c.r.gb[a]=b;else for(e in a)a.hasOwnProperty(e)&&c.r.option(e,a[e])};o_("Logger.option",c.r.option,c);c.r.cy=function(a,b,d){if(!(c.r.option("level")<a)){var e=c.r.gea();null!=e&&(1==d.length&&d[0]instanceof Function&&(d=[d[0]()]),e[b]&&e[b].apply?e[b].apply(e,d):e[b]&&(e[b]=Function.prototype.bind.call(e[b],e),c.r.cy(a,b,d)))}};c.r.gea=function(){var a=null;c.r.option("writer")?
a=c.r.option("writer"):void 0!==window&&void 0!==window.console&&(a=window.console);return a};c.r.lra=function(a){return void 0!==c.r.qU[a]};var e=a.__ojCheckpointManager;c.Sh={};o_("CHECKPOINT_MANAGER",c.Sh,c);c.Sh.Fpa=function(a,b){e&&e.startCheckpoint(a,b)};o_("CHECKPOINT_MANAGER.startCheckpoint",c.Sh.Fpa,c);c.Sh.qna=function(a){e&&e.endCheckpoint(a)};o_("CHECKPOINT_MANAGER.endCheckpoint",c.Sh.qna,c);c.Sh.xN=function(a){return e?e.getRecord(a):void 0};o_("CHECKPOINT_MANAGER.getRecord",c.Sh.xN,
c);c.Sh.S3=function(a){return e?e.matchRecords(a):[]};o_("CHECKPOINT_MANAGER.matchRecords",c.Sh.S3,c);c.Sh.nna=function(a){c.r.info(function(){for(var b="Checkpoint Records:",d=c.Sh.S3(a),e=0;e<d.length;e++){var g=d[e],b=b+"\n"+g.name,f=g.description;null!=f&&(b=b+" ("+f+")");b+=":\n";b=b+"start: "+g.start+"\tduration: "+g.duration}return b})};o_("CHECKPOINT_MANAGER.dump",c.Sh.nna,c);c.b=function(){this.Init()};o_("Object",c.b,c);c.b.q=null;c.b.lM="oj.Object";c.b.r7=/function\s+([\w\$][\w\$\d]*)\s*\(/;
c.b.prototype={};c.b.prototype.constructor=c.b;c.b.g=function(a,b){var d=null,e=null,g;for(g in b)if(b.hasOwnProperty(g)){d=g;e=b[g];break}var f=a.split(".");g=c[f[0]];f=f[2];if(d!=f&&null!=d){var r=g.UK;r||(r={},g.UK=r);r[d]=f;g.prototype[f]=e}};c.b.ga=function(a,b,d){c.l.uo(a);c.l.gu(b);c.l.DM(d);void 0===b&&(b=c.b);c.l.assert(a!==b,"Class can't extend itself");var e=c.b.ola;e.prototype=b.prototype;a.prototype=new e;a.prototype.constructor=a;a.q=a.superclass=b.prototype;d&&(a.lM=d)};o_("Object.createSubclass",
c.b.ga,c);c.b.Kma=function(a,b){var d;c.l.uo(a);c.l.assert(null!=b,"source object cannot be null");for(d in b)b.hasOwnProperty(d)&&(a.prototype[d]=b[d])};o_("Object.copyPropertiesForClass",c.b.Kma,c);c.b.ola=function(){};c.b.prototype.k2=function(a){if(void 0===a)a=this;else if(null===a)return null;return a.constructor};c.b.g("Object.prototype.getClass",{k2:c.b.prototype.k2});c.b.prototype.clone=function(){var a=new this.constructor;c.lc.Xe(a,this);return a};c.b.g("Object.prototype.clone",{clone:c.b.prototype.clone});
c.b.prototype.toString=function(){return this.VO()};c.b.g("Object.prototype.toString",{toString:c.b.prototype.toString});c.b.prototype.VO=function(){return this.getTypeName()+" Object"};c.b.g("Object.prototype.toDebugString",{VO:c.b.prototype.VO});c.b.getTypeName=function(a){c.l.uo(a);var b=a.lM;null==b&&(b=a.toString(),b=(b=c.b.r7.exec(b))?b[1]:"anonymous",a.lM=b);return b};o_("Object.getTypeName",c.b.getTypeName,c);c.b.prototype.getTypeName=function(){return c.b.getTypeName(this.constructor)};c.b.g("Object.prototype.getTypeName",
{getTypeName:c.b.prototype.getTypeName});c.b.prototype.Init=function(){c.l.MN()&&c.l.assert(this.getTypeName,"Not an oj.Object");var a=this.constructor;a.Ml||c.b.$J(a)};c.b.g("Object.prototype.Init",{Init:c.b.prototype.Init});c.b.rna=function(a){c.l.uo(a);a.Ml||c.b.$J(a)};o_("Object.ensureClassInitialization",c.b.rna,c);c.b.prototype.Ao=function(a){return this===a};c.b.g("Object.prototype.equals",{Ao:c.b.prototype.Ao});c.b.C1=function(a,b){c.l.uo(b);return b.bind(a)};o_("Object.createCallback",c.b.C1,
c);c.b.$J=function(a){c.l.MN()&&(c.l.uo(a),c.l.assert(!a.Ml));a.Ml=!0;var b=a.q;b&&((b=b.constructor)&&!b.Ml&&c.b.$J(b),c.b.b$(a));(b=a.InitClass||null)||(b=a.InitClass);b&&b.call(a)};c.b.gh=function(a,b){if(a===b)return!0;if(typeof a!==typeof b||null===a||null===b)return!1;if(a.constructor===b.constructor){if(Array.isArray(a))return c.b.jaa(a,b);if(a.constructor===Object)return c.b.Iv(a,b);if(a.valueOf&&"function"===typeof a.valueOf)return a.valueOf()===b.valueOf()}return!1};o_("Object.compareValues",
c.b.gh,c);c.b.jaa=function(a,b){if(a.length!==b.length)return!1;for(var d=0,e=a.length;d<e;d++)if(!c.b.gh(a[d],b[d]))return!1;return!0};c.b.KT=function(a,b){if(!a)return!b||0==b.length;if(!b)return!a||0==a.length;if(a.length!=b.length)return!1;for(var d=0;d<a.length;d++)if(a[d]!=b[d]&&(-1==a.indexOf(b[d])||-1==b.indexOf(a[d])))return!1;return!0};c.b.Iv=function(a,b){var d,e=!1;if(a===b)return!0;if(!(a instanceof Object&&b instanceof Object)||a.constructor!==b.constructor)return!1;for(d in a)if(e||
(e=!0),a.hasOwnProperty(d)&&(!b.hasOwnProperty(d)||a[d]!==b[d]&&("object"!==typeof a[d]||!c.b.Iv(a[d],b[d]))))return!1;for(d in b)if(e||(e=!0),b.hasOwnProperty(d)&&!a.hasOwnProperty(d))return!1;return e?!0:JSON.stringify(a)===JSON.stringify(b)};c.b.mh=function(a){var b;if(void 0===a||null===a)return!0;for(b in a)if(a.hasOwnProperty(b))return!1;return!0};c.b.b$=function(a){c.b.UK&&c.b.MS(a,a.q)};c.b.MS=function(a,b){if(b){var d=b.constructor;c.b.MS(a,d.q);var d=d.UK,e;if(d)for(e in d)if(d.hasOwnProperty(e)){var g=
d[e];if(e!=g){var f=a.prototype;!f.hasOwnProperty(e)&&f.hasOwnProperty(g)?f[e]=f[g]:!f.hasOwnProperty(g)&&f.hasOwnProperty(e)&&(f[g]=f[e])}}}};c.Cs=function(){return"function"===typeof define&&define.amd};c.l={};o_("Assert",c.l,c);c.l.wna=function(){c.l.DEBUG=!0};o_("Assert.forceDebug",c.l.wna,c);c.l.Fma=function(){c.l.DEBUG=!1};o_("Assert.clearDebug",c.l.Fma,c);c.l.MN=function(){return!0==c.l.DEBUG};o_("Assert.isDebug",c.l.MN,c);c.l.assert=function(a,b){if(c.l.DEBUG&&!a){var d=b||"",e;if(2<arguments.length){d+=
"(";for(e=2;e<arguments.length;e+=1)d+=arguments[e];d+=")"}c.l.Md(d)}};o_("Assert.assert",c.l.assert,c);c.l.Wb=function(){c.l.DEBUG&&c.l.Md("Abstract function called")};o_("Assert.failedInAbstractFunction",c.l.Wb,c);c.l.xd=function(a,b,d){var e;c.l.DEBUG&&(null!=a?(c.l.Lh(b,"function",null,0,!1),e=b.prototype,e.isPrototypeOf(a)||c.l.Md("object '"+a+"' doesn't match prototype "+e,0,d)):c.l.Md("null object doesn't match prototype "+e,0,d))};o_("Assert.assertPrototype",c.l.xd,c);c.l.vma=function(a,b,
d){var e;c.l.DEBUG&&null!=a&&(null!=a?(c.l.Lh(b,"function",null,0,!1),e=b.prototype,e.isPrototypeOf(a)||c.l.Md("object '"+a+"' doesn't match prototype "+e,0,d)):c.l.Md("null object doesn't match prototype "+e,0,d))};o_("Assert.assertPrototypeOrNull",c.l.vma,c);c.l.wma=function(a,b,d,e){c.l.DEBUG&&(b=b.prototype,d=d.prototype,b.isPrototypeOf(a)||d.isPrototypeOf(a)||c.l.Md("object '"+a+"' doesn't match prototype "+b+" or "+d,0,e))};o_("Assert.assertPrototypes",c.l.wma,c);c.l.pma=function(a){c.l.DEBUG&&
a&&void 0===a.nodeType&&c.l.Md(a+" is not a DOM Node")};o_("Assert.assertDomNodeOrNull",c.l.pma,c);c.l.CM=function(a){c.l.DEBUG&&(a&&void 0!==a.nodeType||c.l.Md(a+" is not a DOM Node"))};o_("Assert.assertDomNode",c.l.CM,c);c.l.BM=function(a,b){c.l.DEBUG&&(c.l.CM(a),1!==a.nodeType?c.l.Md(a+" is not a DOM Element"):b&&a.nodeName!==b&&c.l.Md(a+" is not a "+b+" Element"))};o_("Assert.assertDomElement",c.l.BM,c);c.l.oma=function(a,b){c.l.DEBUG&&null!=a&&(c.l.CM(a),1!==a.nodeType?c.l.Md(a+" is not a DOM Element"):
b&&a.nodeName!==b&&c.l.Md(a+" is not a "+b+" Element"))};o_("Assert.assertDomElementOrNull",c.l.oma,c);c.l.Lh=function(a,b,d,e,g){!c.l.DEBUG||null==a&&g||typeof a===b||(a=a+" is not of type "+b,d&&(a=d+a),c.l.Md(a))};o_("Assert.assertType",c.l.Lh,c);c.l.Df=function(a,b){c.l.DEBUG&&c.l.Lh(a,"object",b,0,!1)};o_("Assert.assertObject",c.l.Df,c);c.l.i1=function(a,b){c.l.DEBUG&&c.l.Lh(a,"object",b,0,!0)};o_("Assert.assertObjectOrNull",c.l.i1,c);c.l.rma=function(a,b){c.l.DEBUG&&(c.l.Lh(a,"string",b,0,!1),
c.l.assert(0<a.length,"empty string"))};o_("Assert.assertNonEmptyString",c.l.rma,c);c.l.vo=function(a,b){c.l.DEBUG&&c.l.Lh(a,"string",b,0,!1)};o_("Assert.assertString",c.l.vo,c);c.l.DM=function(a,b){c.l.DEBUG&&c.l.Lh(a,"string",b,0,!0)};o_("Assert.assertStringOrNull",c.l.DM,c);c.l.uo=function(a,b){c.l.DEBUG&&c.l.Lh(a,"function",b,0,!1)};o_("Assert.assertFunction",c.l.uo,c);c.l.gu=function(a,b){c.l.DEBUG&&c.l.Lh(a,"function",b,0,!0)};o_("Assert.assertFunctionOrNull",c.l.gu,c);c.l.h1=function(a,b){c.l.DEBUG&&
c.l.Lh(a,"boolean",b,0,!1)};o_("Assert.assertBoolean",c.l.h1,c);c.l.Zl=function(a,b){c.l.DEBUG&&c.l.Lh(a,"number",b,0,!1)};o_("Assert.assertNumber",c.l.Zl,c);c.l.tma=function(a,b){c.l.DEBUG&&c.l.Lh(a,"number",b,0,!0)};o_("Assert.assertNumberOrNull",c.l.tma,c);c.l.FD=function(a,b){c.l.DEBUG&&!Array.isArray(a)&&(void 0===b&&(b=a+" is not an array"),c.l.Md(b))};o_("Assert.assertArray",c.l.FD,c);c.l.ey=function(a,b){c.l.DEBUG&&null!=a&&!Array.isArray(a)&&(void 0===b&&(b=a+" is not an array"),c.l.Md(b))};
o_("Assert.assertArrayOrNull",c.l.ey,c);c.l.sma=function(a,b){c.l.DEBUG&&!isNaN(a)&&(void 0===b&&(b=a+" is convertible to a number"),c.l.Md(b))};o_("Assert.assertNonNumeric",c.l.sma,c);c.l.uma=function(a,b){c.l.DEBUG&&isNaN(a)&&(void 0===b&&(b=a+" is not convertible to a number"),c.l.Md(b))};o_("Assert.assertNumeric",c.l.uma,c);c.l.qma=function(a,b,d){var e;if(null==a||void 0===b[a.toString()]){if(void 0===d){d=" is not in set: {";for(e in b)b.hasOwnProperty(e)&&(d+=e,d+=",");d=a+(d+"}")}c.l.Md(d)}};
o_("Assert.assertInSet",c.l.qma,c);c.l.Md=function(a,b,d){b="Assertion";d&&(b+=" ("+d+")");b+=" failed: ";void 0!==a&&(b+=a);throw Error(b);};o_("Assert.assertionFailed",c.l.Md,c);var g=a.__oj_Assert_DEBUG;void 0!==g&&(c.l.DEBUG=g);c.Hg=function(){this.Init()};o_("EventSource",c.Hg,c);c.b.ga(c.Hg,c.b,"oj.EventSource");c.Hg.prototype.Init=function(){this.cd=[];c.Hg.q.Init.call(this)};c.b.g("EventSource.prototype.Init",{Init:c.Hg.prototype.Init});c.Hg.prototype.on=function(a,b){var d=!1,c;for(c=0;c<
this.cd.length;c++)if(this.cd[c].eventType==a&&this.cd[c].eventHandlerFunc==b){d=!0;break}d||this.cd.push({eventType:a,eventHandlerFunc:b})};c.b.g("EventSource.prototype.on",{on:c.Hg.prototype.on});c.Hg.prototype.off=function(a,b){var d;for(d=this.cd.length-1;0<=d;d--)if(this.cd[d].eventType==a&&this.cd[d].eventHandlerFunc==b){this.cd.splice(d,1);break}};c.b.g("EventSource.prototype.off",{off:c.Hg.prototype.off});c.Hg.prototype.handleEvent=function(a,b){var d,c;for(d=0;d<this.cd.length;d++)if(c=this.cd[d],
c.eventType==a&&(c=c.eventHandlerFunc.apply(this,Array.prototype.slice.call(arguments).slice(1)),!1===c))return!1;return!0};c.b.g("EventSource.prototype.handleEvent",{handleEvent:c.Hg.prototype.handleEvent});c.ba={};o_("Config",c.ba,c);c.ba.qg=function(){var a;if(c.Cs())return c.l.assert(void 0!==f,"ojtranslations module must be defined"),a=f._ojLocale_,"root"==a?"en":a;a=c.ba.Bt;null==a&&((a=document.documentElement.lang)||(a=void 0===navigator?"en":(navigator.language||navigator.userLanguage||"en").toLowerCase()),
c.ba.Bt=a=a.toLowerCase());return a};o_("Config.getLocale",c.ba.qg,c);c.ba.xpa=function(a,d){if(c.Cs()){var e=["ojL10n!ojtranslations/nls/"+a+"/ojtranslations"];c.Ja&&e.push("ojL10n!ojtranslations/nls/"+a+"/localeElements");b(e,function(a,b){f=a;b&&c.Ja.q9(b);d&&d()})}else c.ba.Bt=a,d&&d()};o_("Config.setLocale",c.ba.xpa,c);c.ba.hb=function(a){var d=/^\/|:/;return null==a||d.test(a)?a:(d=c.ba.Nja)?d+("/"==d.charAt(d.length-1)?"":"/")+a:c.Cs()?(d=b.toUrl("ojs/_foo_"),d.replace(/[^\/]*$/,"../"+a)):
a};o_("Config.getResourceUrl",c.ba.hb,c);c.ba.ypa=function(a){c.ba.Nja=a};o_("Config.setResourceBaseUrl",c.ba.ypa,c);c.ba.wpa=function(a){c.ba.i$=a};o_("Config.setAutomationMode",c.ba.wpa,c);c.ba.kN=function(){return c.ba.i$};o_("Config.getAutomationMode",c.ba.kN,c);c.ba.Z2=function(){var a="Oracle JET Version: "+c.version+"\n",a=a+("Oracle JET Revision: "+c.revision+"\n");window.navigator&&(a+="Browser: "+window.navigator.userAgent+"\n",a+="Browser Platform: "+window.navigator.platform+"\n");$&&
($.fn&&(a+="jQuery Version: "+$.fn.jquery+"\n"),$.ui&&$.ui.version&&(a+="jQuery UI Version: "+$.ui.version+"\n"));c.ia&&(a+="Knockout Version: "+c.ia.p9()+"\n");window.npa&&(a+="Require Version: "+window.npa.version+"\n");return a};o_("Config.getVersionInfo",c.ba.Z2,c);c.ba.Koa=function(){console.log(c.ba.Z2())};o_("Config.logVersionInfo",c.ba.Koa,c);c.Ma=function(){};c.Ma.gl={lF:"ie",sP:"firefox",ZP:"safari",C5:"chrome",lv:"unknown"};c.Ma.Pm={jQ:"trident",CF:"webkit",vP:"gecko",lv:"unknown"};c.Ma.Ui=
{D6:"Windows",v6:"Solaris",MP:"Mac",lv:"Unknown",gP:"Android",mF:"IOS",c6:"Linux"};c.Ma.oy=function(){var a;c.Ea.Gi(a)&&(a=navigator.userAgent);a=a.toLowerCase();var b=c.Ea.hr(a),d=c.Ma.lba;if(d&&d.hashCode===b)return{os:d.os,browser:d.browser,browserVersion:d.browserVersion,engine:d.engine,engineVersion:d.engineVersion,hashCode:d.hashCode};var d=c.Ma.Ui.lv,e=c.Ma.gl.lv,g=0,f=c.Ma.Pm.lv,r=0;-1<a.indexOf("iphone")||-1<a.indexOf("ipad")?d=c.Ma.Ui.mF:-1<a.indexOf("mac")?d=c.Ma.Ui.MP:-1<a.indexOf("sunos")?
d=c.Ma.Ui.v6:-1<a.indexOf("android")?d=c.Ma.Ui.gP:-1<a.indexOf("linux")?d=c.Ma.Ui.c6:-1<a.indexOf("win")&&(d=c.Ma.Ui.D6);-1<a.indexOf("msie")?(e=c.Ma.gl.lF,g=c.Ma.xi(a,/msie (\d+[.]\d+)/),a.indexOf("trident")&&(f=c.Ma.Pm.jQ,r=c.Ma.xi(a,/trident\/(\d+[.]\d+)/))):-1<a.indexOf("trident")?(e=c.Ma.gl.lF,g=c.Ma.xi(a,/rv:(\d+[.]\d+)/),a.indexOf("trident")&&(f=c.Ma.Pm.jQ,r=c.Ma.xi(a,/trident\/(\d+[.]\d+)/))):-1<a.indexOf("chrome")?(e=c.Ma.gl.C5,g=c.Ma.xi(a,/chrome\/(\d+[.]\d+)/),f=c.Ma.Pm.CF,r=c.Ma.xi(a,
/applewebkit\/(\d+[.]\d+)/)):-1<a.indexOf("safari")?(e=c.Ma.gl.ZP,g=c.Ma.xi(a,/version\/(\d+[.]\d+)/),f=c.Ma.Pm.CF,r=c.Ma.xi(a,/applewebkit\/(\d+[.]\d+)/)):-1<a.indexOf("firefox")&&(e=c.Ma.gl.sP,g=c.Ma.xi(a,/rv:(\d+[.]\d+)/),f=c.Ma.Pm.vP,r=c.Ma.xi(a,/gecko\/(\d+)/));d=c.Ma.lba={hashCode:b,os:d,browser:e,browserVersion:g,engine:f,engineVersion:r};return{os:d.os,browser:d.browser,browserVersion:d.browserVersion,engine:d.engine,engineVersion:d.engineVersion,hashCode:d.hashCode}};c.Ma.xi=function(a,b){var d=
a.match(b);return d&&(d=d[1])?parseFloat(d):0};c.we={};c.we.i4=function(a){var b=document.getElementsByClassName(a).item(0);null===b&&(b=document.createElement("meta"),b.className=a,document.head.appendChild(b));if((b=window.getComputedStyle(b))&&(b=b.getPropertyValue("font-family"))&&"none"!=b&&(b=b.replace(/^['"]+|\s+|\\|(;\s?})+|['"]$/g,""))){try{b=JSON.parse(b)}catch(d){return c.r.error("Error parsing json for selector "+a+".\nString being parsed is "+b+"\n"+d),null}return b}c.r.info("No json found for selector "+
a);return null};c.we.Ok=function(a){a=a.toLowerCase();null==c.we.rO&&(c.we.rO={});var b=c.we.rO[a];null==b&&(b=c.we.i4("oj-"+a+"-option-defaults"),null==b&&(b={}),c.we.rO[a]=b);return b};c.ResponsiveUtils={};c.ResponsiveUtils.SCREEN_RANGE={SM:"sm",MD:"md",LG:"lg",XL:"xl",XXL:"xxl"};c.ResponsiveUtils.FRAMEWORK_QUERY_KEY={SM_UP:"sm-up",MD_UP:"md-up",LG_UP:"lg-up",XL_UP:"xl-up",XXL_UP:"xxl-up",SM_ONLY:"sm-only",MD_ONLY:"md-only",LG_ONLY:"lg-only",XL_ONLY:"xl-only",MD_DOWN:"md-down",LG_DOWN:"lg-down",
XL_DOWN:"xl-down",HIGH_RESOLUTION:"high-resolution"};c.ResponsiveUtils.Bp={};c.ResponsiveUtils.Bp[c.ResponsiveUtils.SCREEN_RANGE.SM]=0;c.ResponsiveUtils.Bp[c.ResponsiveUtils.SCREEN_RANGE.MD]=1;c.ResponsiveUtils.Bp[c.ResponsiveUtils.SCREEN_RANGE.LG]=2;c.ResponsiveUtils.Bp[c.ResponsiveUtils.SCREEN_RANGE.XL]=3;c.ResponsiveUtils.Bp[c.ResponsiveUtils.SCREEN_RANGE.XXL]=4;c.ResponsiveUtils.xda=function(a){var b=document.getElementsByClassName(a).item(0);null===b&&(b=document.createElement("meta"),b.className=
a,document.head.appendChild(b));return window.getComputedStyle(b).getPropertyValue("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g,"")};c.ResponsiveUtils.getFrameworkQuery=function(a){a=c.ResponsiveUtils.xda("oj-mq-"+a);return"null"==a?null:a};c.ResponsiveUtils.compare=function(a,b){var d=c.ResponsiveUtils.Bp[a],e=c.ResponsiveUtils.Bp[b];if(void 0==d)throw"size1 param "+a+" illegal, please use one of the screen size constants like oj.ResponsiveUtils.SCREEN_RANGE.MD";if(void 0==e)throw"size2 param "+
b+" illegal, please use one of the screen size constants like oj.ResponsiveUtils.SCREEN_RANGE.MD";return d-e};c.Ea={};o_("StringUtils",c.Ea,c);c.Ea.l9=/^\s*|\s*$/g;c.Ea.mh=function(a){return null===a?!0:0===c.Ea.trim(a).length};o_("StringUtils.isEmpty",c.Ea.mh,c);c.Ea.Gi=function(a){return void 0===a||c.Ea.mh(a)?!0:!1};o_("StringUtils.isEmptyOrUndefined",c.Ea.Gi,c);c.Ea.jd=function(a){return null!==a&&("string"===typeof a||a instanceof String)};o_("StringUtils.isString",c.Ea.jd,c);c.Ea.trim=function(a){return c.Ea.jd(a)?
a.replace(c.Ea.l9,""):a};o_("StringUtils.trim",c.Ea.trim,c);c.Ea.hr=function(a){var b=0;if(0===a.length)return b;for(var d=0;d<a.length;d++)b=(b<<5)-b+a.charCodeAt(d),b&=b;return b};c.lc={};o_("CollectionUtils",c.lc,c);c.lc.Xe=function(a,b,d,e,g){return c.lc.RT(a,b,d,e,g,0)};o_("CollectionUtils.copyInto",c.lc.Xe,c);c.lc.isPlainObject=function(a){if("object"===typeof a)try{if(a.constructor&&a.constructor.prototype.hasOwnProperty("isPrototypeOf"))return!0}catch(b){}return!1};o_("CollectionUtils.isPlainObject",
c.lc.isPlainObject,c);c.lc.RT=function(a,b,d,e,g,f){var r,s,q;if(a&&b&&a!==b){q=Object.keys(b);for(var t=0;t<q.length;t++){r=q[t];s=d?d(r):r;r=b[r];var w=!1;if(e&&f<g){var x=a[s];c.lc.isPlainObject(x)&&c.lc.isPlainObject(r)&&(w=!0,c.lc.RT(x,r,d,!0,g,f+1))}w||(a[s]=r)}}return a};c.ha={};o_("Translations",c.ha,c);c.ha.HO=function(a){c.ha.$G=a};o_("Translations.setBundle",c.ha.HO,c);c.ha.G2=function(a){return c.ha.pW(a)};o_("Translations.getResource",c.ha.G2,c);c.ha.Ib=function(a,b){return null==a?null:
c.ha.vca(a,b)};o_("Translations.applyParameters",c.ha.Ib,c);c.ha.A=function(a,b){var d=c.ha.pW(a);if(null==d)return a;var e={};2<arguments.length?e=Array.prototype.slice.call(arguments,1):2==arguments.length&&(e=arguments[1],"object"===typeof e||e instanceof Array||(e=[e]));return c.ha.Ib(d,e)};o_("Translations.getTranslatedString",c.ha.A,c);c.ha.YD=function(a){a=c.ha.sV()[a];var b,d;if(null==a)return{};b={};for(d in a)a.hasOwnProperty(d)&&(b[d]=a[d]);return b};o_("Translations.getComponentTranslations",
c.ha.YD,c);c.ha.pW=function(a){a=a?a.split("."):[];var b=c.ha.sV(),d=a.length,e=0,g=a[e];for(c.l.Df(b);0<--d&&b;)b=b[g],e++,g=a[e];return b?b[g]||null:null};c.ha.vca=function(a,b){var d=a.length,c=[],e=null,g=!1,f=!1,s=!1,q=!1,t,w;for(w=0;w<d;w++){var x=a.charAt(w),u=!1;if(g)u=!0,g=!1;else switch(x){case "$":g=!0;break;case "{":q||(f||(t=!1,e=[]),f=!0);break;case "}":f&&0<e.length&&(f=b[e.join("")],c.push(void 0===f?"null":f));f=!1;break;case "[":f||(s?q=!0:s=!0);break;case "]":q?q=!1:s=!1;break;
default:u=!0}u&&(f?","==x||" "==x?t=!0:t||e.push(x):q||c.push(x))}return c.join("")};c.ha.sV=function(){var a=c.ha.$G;return a?a:c.Cs()?(c.l.assert(void 0!==f,"ojtranslations module must be defined"),f):{}};return c});
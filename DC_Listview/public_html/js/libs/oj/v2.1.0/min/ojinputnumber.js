/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
/*
 Copyright 2013 jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license
*/
define(["ojs/ojcore","jquery","ojs/ojeditablevalue","ojs/ojbutton"],function(b,f){b.Ja("oj.ojInputNumber",f.oj.editableValue,{version:"1.0.0",defaultElement:"\x3cinput\x3e",widgetEventPrefix:"oj",options:{converter:b.ya.Jo(b.Zl.CONVERTER_TYPE_NUMBER).createConverter(),max:null,min:null,placeholder:void 0,rawValue:void 0,readOnly:!1,step:1,value:null},getNodeBySubId:function(a){var b=this._superApply(arguments),c;b||(c=a.subId,"oj-inputnumber-up"===c&&(b=this.widget().find(".oj-inputnumber-up")[0]),
"oj-inputnumber-down"===c&&(b=this.widget().find(".oj-inputnumber-down")[0]),"oj-inputnumber-input"===c&&(b=this.widget().find(".oj-inputnumber-input")[0]));return b||null},getSubIdByNode:function(a){var b=null;null!=a&&(a===this.widget().find(".oj-inputnumber-up")[0]?b={subId:"oj-inputnumber-up"}:a===this.widget().find(".oj-inputnumber-down")[0]?b={subId:"oj-inputnumber-down"}:a===this.widget().find(".oj-inputnumber-input")[0]&&(b={subId:"oj-inputnumber-input"}));return b||this._superApply(arguments)},
refresh:function(){this._super();this.Ma()},stepDown:function(a){this.S8(a,!1)},stepUp:function(a){this.S8(a,!0)},widget:function(){return this.Vu},bf:function(a,d){var c=this.options,e=this;this._superApply(arguments);b.ae.mn([{Z:"disabled",jd:!0},{Z:"placeholder"},{Z:"value"},{Z:"readonly",option:"readOnly",jd:!0},{Z:"required",rg:!0,jd:!0},{Z:"title"},{Z:"min"},{Z:"max"},{Z:"step"}],d,this,function(a){for(var b=["value","step","min","max"],d=0;d<b.length;d++){var f=b[d],p=f in a?a[f]:c[f];null!=
p&&(a[f]="step"===f?e.lB(p):e.Km(f,p))}});if(void 0===c.value)throw Error("ojInputNumber has no value");if(null!=c.min&&null!=c.max&&c.max<c.min)throw Error("ojInputNumber's max must not be less than min");},_ComponentCreate:function(){this._super();this.hA();this.W4={};this.Ma();this._on(this.bo);this._focusable(this.Vu);this.Ez(this.Vu)},bY:function(a,b,c){this._superApply(arguments);switch(a){case "min":case "max":this.qi(a,this.options[a])}},_setOption:function(a,b,c){var e;e="value"===a||"max"===
a||"min"===a?this.Km(a,b):"step"===a?this.lB(b):b;this._super(a,e,c);if("max"===a||"min"===a)this.R0(),this.rv();"disabled"===a&&this.element.prop("disabled",!!b);"readOnly"===a&&(this.element.prop("readonly",!!b),this.zH("readOnly",this.options.readOnly),this.R6("readOnly",this.options.readOnly))},_destroy:function(){var a=this._super();this.DT.ojButtonset("destroy");this.DT.remove();this.DT=this.UT=this.zW=null;b.A.unwrap(this.element,this.Vu);clearTimeout(this.$d);return a},qi:function(a,b,c){this._superApply(arguments);
var e="value"===a||"max"===a||"min"===a,f=e||"disabled"===a,h;f&&(h=this.dG());e&&this.OR(h);"converter"===a&&this.L6(h);f&&this.lT(h)},Rd:function(){return this.options.converter?this._superApply(arguments):f.oj.ojInputNumber.prototype.options.converter},mz:function(){var a=this._superApply(arguments);null==this.options.min&&null==this.options.max||this.R0();return f.extend(this.W4,a)},_GetDefaultStyleClass:function(){return"oj-inputnumber"},bo:{input:function(a){this.bq(this.element.val(),a)},keydown:function(a){a.keyCode===
f.ui.keyCode.ENTER?(this.L_(a),a.preventDefault()):this.rj()&&this.At(a)&&a.preventDefault()},keyup:function(a){this.QB(a)},blur:function(a){this.L_(a)},"mousedown .oj-inputnumber-button":function(a){this.rj();this.GB(null,f(a.currentTarget).hasClass("oj-inputnumber-up")?1:-1,a)},"mouseup .oj-inputnumber-button":function(a){this.QB(a)},"mouseenter .oj-inputnumber-button":function(a){f(a.currentTarget).hasClass("oj-active")&&(this.rj(),this.GB(null,f(a.currentTarget).hasClass("oj-inputnumber-up")?
1:-1,a))},"mouseleave .oj-inputnumber-button":function(a){this.QB(a)}},Ga:{dia:"tooltipDecrement",eia:"tooltipIncrement"},$p:{readOnly:"oj-read-only"},Ma:function(){var a=this.v(this.Ga.eia),b=this.v(this.Ga.dia),c=this.dG();this.zW.ojButton({label:a});this.UT.ojButton({label:b});this.OR(c);this.lT(c);"boolean"===typeof this.options.readOnly&&this.element.prop("readonly",this.options.readOnly);this.zH("readOnly",this.options.readOnly);this.R6("readOnly",this.options.readOnly)},Ska:function(){var a=
this.Vu.find(".oj-inputnumber-up"),b=this.Vu.find(".oj-inputnumber-down"),c=a[0].parentNode;this.zW=a.ojButton({display:"icons",icons:{start:"oj-component-icon oj-inputnumber-up-icon"}});this.UT=b.ojButton({display:"icons",icons:{start:"oj-component-icon oj-inputnumber-down-icon"}});this.DT=f(c).ojButtonset({focusManagement:"none"})},hA:function(){var a=this.element,b=this.Vu=a.addClass("oj-inputnumber-input").wrap("\x3cspan class\x3d'oj-inputnumber-wrapper'\x3e\x3c/span\x3e").parent().append("\x3cdiv\x3e\x3cbutton type\x3d'button' class\x3d'oj-inputnumber-button oj-inputnumber-down'\x3e\x3c/button\x3e\x3cbutton type\x3d'button' class\x3d'oj-inputnumber-button oj-inputnumber-up'\x3e\x3c/button\x3e\x3c/div\x3e").wrap("\x3cdiv class\x3d'oj-inputnumber oj-component'\x3e\x3c/div\x3e").parent();
this.saveType=a.prop("type");a.attr("type","text");b.find(".oj-inputnumber-button").attr("tabIndex","-1");this.Ska()},At:function(a){var b=f.ui.keyCode;switch(a.keyCode){case b.UP:return this.GB(null,1,a),!0;case b.DOWN:return this.GB(null,-1,a),!0}return!1},ODa:function(){return"\x3cspan class\x3d'oj-inputnumber-wrapper'\x3e\x3c/span\x3e"},kDa:function(){return"\x3cdiv\x3e\x3cbutton type\x3d'button' class\x3d'oj-inputnumber-button oj-inputnumber-down'\x3e\x3c/button\x3e\x3cbutton type\x3d'button' class\x3d'oj-inputnumber-button oj-inputnumber-up'\x3e\x3c/button\x3e\x3c/div\x3e"},
rj:function(){return this.Lda=!0},GB:function(a,b,c){a=a||500;clearTimeout(this.$d);this.$d=this._delay(function(){this.GB(40,b,c)},a);this.DS(b*this.options.step,c)},DS:function(a,b){var c=this.dG(),c=this.Nia(c,a);this.Lc(c,b,this.yz.xfa)},Msa:function(){var a=this.options,b=a.min,a=this.t6(a.step);null!=b&&(a=Math.max(a,this.t6(b)));return a},t6:function(a){a=a.toString();var b=a.indexOf(".");return-1===b?0:a.length-b-1},Nia:function(a,b){var c,e,f=this.options,h=f.min,k=f.step,l=f.max,f=this.Msa();
e=null!=h?h:0;c=a-e;var p=Math.round(c/k)*k,p=parseFloat(p.toFixed(f));p!==c?(c=0>b?Math.ceil(c/k)*k:Math.floor(c/k)*k,c=e+c+b):c=a+b;c=parseFloat(c.toFixed(f));return null!=h&&c<h?h:null!=l&&c>l?(h=Math.floor((l-e)/k)*k+e,h=parseFloat(h.toFixed(f))):c},QB:function(){this.Lda&&(clearTimeout(this.$d),this.Lda=!1)},lT:function(a){var b=this.options,c=b.min,e=b.max;if(this.Vu){var f=this.UT,h=this.zW;b.disabled||void 0===a?(f.ojButton("disable"),h.ojButton("disable")):null!=e&&a>=e?(f.ojButton("enable"),
h.ojButton("disable")):(null!=c&&a<=c?f.ojButton("disable"):f.ojButton("enable"),h.ojButton("enable"))}},dG:function(){var a,b;try{b=this.Eh()||0,a=this.sH(b)}catch(c){a=void 0}return a},L_:function(a){var b=this.element.val();this.QB();var c=this.dG();this.OR(c);this.lT(c);this.Lc(b,a)},R0:function(){var a=this.options,d=a.min,c=a.max,e=(a=a.translations)?a.numberRange||{}:{},f,h,k,l,p,n,m,a=e.hint||{},q=e.messageDetail||{},e=e.messageSummary||{};null!==a&&(f=a.min||null,h=a.max||null,k=a.inRange||
null);null!==q&&(l=q.rangeOverflow||null,p=q.rangeUnderflow||null);null!==e&&(n=e.rangeOverflow||null,m=e.rangeUnderflow||null);d={min:null!=d?d:void 0,max:null!=c?c:void 0,hint:{min:f||null,max:h||null,inRange:k||null},messageDetail:{rangeOverflow:l||null,rangeUnderflow:p||null},messageSummary:{rangeOverflow:n||null,rangeUnderflow:m||null},converter:this.Rd()};this.W4[b.ce.VALIDATOR_TYPE_NUMBERRANGE]=b.ya.Xu(b.ce.VALIDATOR_TYPE_NUMBERRANGE).createValidator(d)},Km:function(a,b){var c;c=null!==b?+b:
b;if(isNaN(c))throw Error("ojInputNumber's "+a+" option is not a number");return c},lB:function(a){if(null===a)return 1;a=this.Km("step",a);if(0>=a)throw Error("Invalid step for ojInputNumber; step must be \x3e 0");if(null===a||0>=a)a=1;return a},zH:function(a,b){-1!=Object.keys(this.$p).indexOf(a)&&this.widget().toggleClass(this.$p[a],!!b)},R6:function(a,b){b?this.element.removeAttr("role"):this.element.attr("role","spinbutton")},OR:function(a){this.element.attr({"aria-valuemin":this.options.min,
"aria-valuemax":this.options.max,"aria-valuenow":a});this.L6(a)},L6:function(a){var b=this.element,c=b.val();this.jz("value",""+a,c)||b.attr({"aria-valuetext":c})},S8:function(a,b){this.rj();b?this.DS((a||1)*this.options.step):this.DS((a||1)*-this.options.step);this.QB()}})});
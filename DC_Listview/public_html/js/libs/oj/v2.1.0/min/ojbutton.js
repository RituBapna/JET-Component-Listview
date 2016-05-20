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
define(["ojs/ojcore","jquery","ojs/ojcomponentcore"],function(b,f){(function(){function a(a,c,d){a:{for(var e=q[a],f=0;f<e.length;++f){var g=e[f];if(0<=d.indexOf(g))for(;;c=c.parentNode){var h=b.Components.gh(c,g);if(h){d=h;break a}}}d=null}return d?d("option","chroming"):b.Hf.gn(a).chroming}function d(a,b){var c=a.name,d=a.form;c?(c=c.replace(/'/g,"\\'"),c=":radio[name\x3d'"+c+"']:oj-button",d=b?b.filter(c):d?f(d).find(c):f(c,a.ownerDocument).filter(function(){return!this.form})):d=(b?b.filter(a):
f(a)).filter(":oj-button");return d}function c(a,b){a.removeClass(n).addClass(m[b])}b.Ja("oj.ojButton",f.oj.baseComponent,{defaultElement:"\x3cbutton\x3e",widgetEventPrefix:"oj",options:{chroming:"full",disabled:!1,display:"all",label:null,icons:{start:null,end:null},menu:null},bf:function(a,b){this._super(a,b);this.kqa();"disabled"in b||this.option("disabled",!!this.element.prop("disabled"),{_context:{lb:!0}});"label"in b||(this.QAa=!0,this.option("label","inputPush"===this.type?this.De.val():this.De.html(),
{_context:{lb:!0}}));!this.options.menu||b.icons&&void 0!==b.icons.end||this.option("icons.end","oj-component-icon oj-button-menu-dropdown-icon",{_context:{zd:!0,lb:!0}})},_ComponentCreate:function(){function a(){b.fR=Date.now();b.Vb.removeClass(l);b.Vb.removeClass("oj-hover");b.sj()}this._super();this.element.closest("form").unbind("reset"+h).bind("reset"+h,function(){var a=f(this);setTimeout(function(){a.find(":oj-button").each(function(){f(this).data("oj-ojButton").WE(!1)}).length||a.unbind("reset"+
h)},1)});this.jD=this.eventNamespace+"menu";this.lqa();this.OU=!!this.Vb.attr("title");var b=this,d=this.VA,l=d?"":"oj-active";this.Vb.addClass(k);c(this.Vb,this.options.chroming);this.document.bind("touchend"+this.eventNamespace+" touchcancel"+this.eventNamespace,a);this.De.bind("touchstart"+this.eventNamespace,function(){b.cf()||(f(this).addClass(l),b.sj())}).bind("touchend"+this.eventNamespace+" touchcancel"+this.eventNamespace,a).bind("mouseenter"+this.eventNamespace,function(){b.cf()||b.yB()||
(this===e&&b.Vb.addClass("oj-active"),b.Vb.addClass("oj-hover").removeClass("oj-default oj-focus-only"))}).bind("mouseleave"+this.eventNamespace,function(){b.Vb.removeClass("oj-hover");b.cf()||(b.Vb.removeClass(l),b.sj())}).bind("click"+this.eventNamespace,function(a){b.cf()&&(a.preventDefault(),a.stopImmediatePropagation())});this.element.bind("focus"+this.eventNamespace,function(){b.Vb.addClass("oj-focus");b.sj()}).bind("blur"+this.eventNamespace,function(){b.Vb.removeClass("oj-focus");b.sj()});
d&&(this.element.bind("change"+this.eventNamespace,function(a){b.WE(!0);var c=f(this).closest(":oj-buttonset").data("oj-ojButtonset"),d=c&&c.n2(c.Je);c&&void 0!==d&&c.option("checked",d,{_context:{zd:!0,originalEvent:a,lb:!0}})}),this.De.bind("mousedown"+this.eventNamespace,function(){b.cf()||(g=this,b.document.one("mouseup",function(){g=null}))}).bind("mouseup"+this.eventNamespace,function(){b.cf()||this!==g||b.element.focus()}));"checkbox"===this.type?(this.De.bind("click"+this.eventNamespace,function(){if(b.cf())return!1}),
this.element.bind("keyup"+this.eventNamespace,function(a){a.keyCode===f.ui.keyCode.ENTER&&(b.cf()||b.element.click())})):"radio"===this.type?(this.De.bind("click"+this.eventNamespace,function(){if(b.cf())return!1}),this.element.bind("keyup"+this.eventNamespace,function(a){a.keyCode!==f.ui.keyCode.ENTER||b.element[0].checked||b.cf()||(b.element[0].checked=!0,b.element.change(),b.element.click())})):(this.De.bind("mousedown"+this.eventNamespace,function(a){if(b.cf())return!1;1!==a.which||b.yB()||(f(this).addClass("oj-active").removeClass("oj-default oj-focus-only"),
e=this,b.document.one("mouseup",function(){e=null}))}).bind("mouseup"+this.eventNamespace,function(){if(b.cf())return!1;f(this).removeClass("oj-active");b.sj()}).bind("keydown"+this.eventNamespace,function(a){if(b.cf())return!1;var c=a.keyCode===f.ui.keyCode.SPACE,d="anchor"===b.type;d&&c&&a.preventDefault();(c&&!d||a.keyCode===f.ui.keyCode.ENTER)&&f(this).addClass("oj-active").removeClass("oj-default oj-focus-only")}).bind("keyup"+this.eventNamespace+" blur"+this.eventNamespace,function(){f(this).removeClass("oj-active");
b.sj()}),"anchor"===this.type&&(d=this.De.attr("tabindex"),("undefined"===d||null===d||isNaN(d))&&this.De.attr("tabindex","0")));this.oT();this.qpa();this.x8();this.sj()},yB:function(){return 500>Date.now()-this.fR},Hg:function(a,b,c){this.Jg(b,c,{position:{of:"keyboard"===c?this.Vb:b}})},kqa:function(){if(this.element.is("input[type\x3dcheckbox]"))this.type="checkbox",this.VA=!0;else if(this.element.is("input[type\x3dradio]"))this.type="radio",this.VA=!0;else if(this.element.is("input[type\x3dbutton],input[type\x3dsubmit],input[type\x3dreset]"))this.type=
"inputPush";else if(this.element.is("button"))this.type="button";else if(this.element.is("a"))this.type="anchor";else throw Error("JET Button not supported on this element type");if(this.VA){var a="label[for\x3d'"+this.element.attr("id")+"']";this.De=this.element.siblings().filter(a)}else this.De=this.element},lqa:function(){this.VA?(this.De.addClass("oj-button-label"),this.element.addClass("oj-button-input oj-helper-hidden-accessible").add(this.De).wrapAll("\x3cspan\x3e\x3c/span\x3e"),this.Vb=this.element.parent(),
this.Vb.addClass("oj-button-toggle"),this.element[0].checked&&this.Vb.addClass("oj-selected").removeClass("oj-default oj-focus-only")):this.Vb=this.element},widget:function(){return this.Vb},_destroy:function(){this.l7();this.document.off(this.eventNamespace);this.element.removeClass("oj-helper-hidden-accessible").removeAttr("aria-labelledby").removeUniqueId();var a=this.VA;a||this.Vb.removeClass(k+" "+l+" "+p+" "+n);this.De.html(this.De.find(".oj-button-text").html());a?(this.De.removeClass("oj-button-label"),
b.A.unwrap(this.element)):this.OU||this.Vb.removeAttr("title");g===this.De[0]&&(g=null)},Uj:function(){this._super();this.sj()},Bz:function(a){this._super(a);this.oT()},oT:function(){var a=this.cf();this.Vb.toggleClass("oj-disabled",a);this.Vb.toggleClass("oj-enabled",!a);"anchor"!==this.type?(this.element.prop("disabled",a),this.Vb.removeAttr("aria-disabled")):this.Vb.attr("aria-disabled",a);a?(this.widget().removeClass("oj-active oj-default oj-focus-only oj-hover oj-focus"),e=null,this.kO()):this.sj()},
_setOption:function(a,b,d){this._super(a,b,d);switch(a){case "chroming":c(this.Vb,b);break;case "disabled":this.oT();break;case "label":this.iva();break;case "display":"inputPush"!==this.type&&this.MH();break;case "icons":this.fva(!0);break;case "menu":this.x8()}},refresh:function(){this._super();this.v_&&!f(this).closest(":oj-buttonset").length&&this.Bz(!1);c(this.Vb,this.options.chroming)},WE:function(a){"radio"===this.type?(a?d(this.element[0]):this.element).each(function(){var a=f(this).data("oj-ojButton");
this.checked?a.Vb.addClass("oj-selected").removeClass("oj-default oj-focus-only"):(a.Vb.removeClass("oj-selected"),a.sj())}):"checkbox"===this.type&&(this.element[0].checked?this.Vb.addClass("oj-selected").removeClass("oj-default oj-focus-only"):(this.Vb.removeClass("oj-selected"),this.sj()))},qpa:function(){if("inputPush"===this.type)this.i8();else{var a=this.hva(),b=this.NH(!0),c=this.NH(!1);this.MH(a,b,c)}},hva:function(){var a=this.De,b=f("\x3cspan class\x3d'oj-button-text'\x3e\x3c/span\x3e",
this.document[0]);this.QAa?b.append(a.contents()):(a.empty(),b.text(this.options.label));a.append(b);if("button"===this.type||"anchor"===this.type)b.uniqueId(),this.element.attr("aria-labelledby",b.attr("id"));return b},iva:function(){if("inputPush"===this.type)this.i8();else{var a=this.De.find(".oj-button-text");a.text(this.options.label);this.MH(a)}},i8:function(){this.options.label&&this.element.val(this.options.label)},fva:function(){if("inputPush"!==this.type){var a=this.NH(!0),b=this.NH(!1);
this.MH(void 0,a,b)}},NH:function(a){if(a){var b=".oj-button-icon.oj-start";a="oj-button-icon oj-start";var c=this.options.icons.start,d="_lastStartIcon",e="prependTo"}else b=".oj-button-icon.oj-end",a="oj-button-icon oj-end",c=this.options.icons.end,d="_lastEndIcon",e="appendTo";b=this.De.find(b);c?(b.length?b.removeClass(this[d]):b=f("\x3cspan\x3e\x3c/span\x3e").addClass(a)[e](this.De),b.addClass(c)):b.remove();this[d]=c;return!!c},MH:function(a,b,c){void 0===a&&(a=this.De.find(".oj-button-text"));
void 0===b&&(b=!!this.options.icons.start);void 0===c&&(c=!!this.options.icons.end);var d=b&&c;c=b||c;var e="icons"===this.options.display;c&&e?(a.addClass("oj-helper-hidden-accessible"),this.OU||(a=a.text(),this.Vb.attr("title",f.trim(a)))):(a.removeClass("oj-helper-hidden-accessible"),this.OU||this.Vb.removeAttr("title"));b=c?e?d?"oj-button-icons-only":"oj-button-icon-only":d?"oj-button-text-icons":b?"oj-button-text-icon-start":"oj-button-text-icon-end":"oj-button-text-only";this.Vb.removeClass(p).addClass(b)},
x8:function(){if(this.options.menu&&this.element.is("input"))throw Error("Menu Button functionality is not supported on input elements.");this.l7();if(this.options.menu){var a=this;this.element.attr("aria-haspopup",!0).on("keydown"+this.jD,function(b){if(b.which===f.ui.keyCode.DOWN)a.C8(b,"firstItem"),b.preventDefault();else if(b.which===f.ui.keyCode.ESCAPE){var c=a.Rja(a.Vb);a.kO(b);return c}return!0}).on("click"+this.jD,function(b){var c=a.oP();c.PE||a.C8(b,"firstItem");c.PE=!1;b.preventDefault();
return!0})}},Rja:function(a){return!a.hasClass("oj-selected")},l7:function(){this.element.removeAttr("aria-haspopup").off(this.jD);this.kO();this.xa&&this.xa.widget().off(this.jD);this.xa=void 0},oP:function(){if(!this.xa){this.xa=f(this.options.menu).data("oj-ojMenu");if(!this.xa)throw Error('JET Button: "menu" option specified, but does not reference a valid JET Menu.');var a=this;this.xa.widget().on("ojclose"+this.jD,function(b){a.Sra(b)})}return this.xa},C8:function(a,b){if(!this.cf()){var c=
this.oP(),d=c.widget();c.open(a,{launcher:this.element,initialFocus:b});this.V5=!0;d.attr("aria-label")||d.attr("aria-labelledby")||(this.element.uniqueId(),this.Y7=!0,d.attr("aria-labelledby",this.element.attr("id")));this.Vb.addClass("oj-selected").removeClass("oj-default oj-focus-only")}},kO:function(a){this.V5&&(this.xa.LM(a,!0),this.xa.Gs(a))},Sra:function(){this.Y7&&(this.oP().widget().removeAttr("aria-labelledby"),this.Y7=!1);this.Vb.removeClass("oj-selected");this.sj();this.V5=!1},sj:function(){var a,
b;this.Vb.is(".oj-hover, .oj-active, .oj-selected, .oj-disabled")?b=a=!1:(b=this.Vb.is(".oj-focus"),a=!b);this.Vb.toggleClass("oj-default",a);this.Vb.toggleClass("oj-focus-only",b)}});b.Ja("oj.ojButtonset",f.oj.baseComponent,{C5:"button, input[type\x3dbutton], input[type\x3dsubmit], input[type\x3dreset], input[type\x3dcheckbox], input[type\x3dradio], a",widgetEventPrefix:"oj",options:{checked:null,chroming:"full",focusManagement:"oneTabstop"},LB:function(a,b){var c=f.type(a),d;if("null"===c||"array"===
c)d=b.filter("input[type\x3dcheckbox]").length===b.length;if(d&&"null"===c)throw Error("Invalid 'checked' value set on JET Buttonset: "+a);if("string"===c||"null"===c)(c=((c=b[0].name)||1>=b.length)&&b.filter("input[type\x3dradio][name\x3d"+c+"]").length===b.length&&(null===a||b.filter("[value\x3d"+a+"]").length))&&b.each(function(){this.checked=this.value===a}),c=c||null===a;else if("array"===c){var e;(c=d&&a.concat().sort().every(function(a){var c=a!==e&&b.filter("[value\x3d"+a+"]").length;e=a;
return c}))&&b.each(function(){this.checked=-1<a.indexOf(this.value)})}else c=!1;if(!c)throw Error("Invalid 'checked' value set on JET Buttonset: "+a);},n2:function(a){var b=void 0,c=null,d=null;a.each(function(){if("input"!==this.tagName.toLowerCase())return b=void 0,!1;var a=this.type.toLowerCase(),e;if("radio"===a)a=!0,e=this.name.toLowerCase();else if("checkbox"===a)a=!1,e=null;else return b=void 0,!1;if(void 0!==b&&(a!==c||e!==d||c&&!d))return b=void 0,!1;void 0===b?(b=a?this.checked?this.value:
null:this.checked?[this.value]:[],c=a,d=e):this.checked&&(c?b=this.value:b.push(this.value))});return b},jz:function(a,b,c){return"checked"===a?b===c?!0:"array"===f.type(b)&&"array"===f.type(c)&&!f(b).not(c).length&&!f(c).not(b).length:this._superApply(arguments)},bf:function(a,b){this._super(a,b);this.Je=this.element.find(this.C5);if(!("checked"in b)){this.QU=!0;var c=this.n2(this.Je);"array"===f.type(c)&&(this.options.checked=[]);void 0!==c&&this.option("checked",c,{_context:{lb:!0}})}},_ComponentCreate:function(){this._super();
this.element.attr(b.Components.Wp,this.widgetName).addClass("oj-buttonset oj-component");this.t8(this.options.focusManagement);this.Ma(!0)},Hg:function(a,b,c){a=this.element.find(":oj-button[tabindex\x3d0]");this.Jg(b,c,{launcher:a,position:{of:"keyboard"===c?a.ojButton("widget"):b}})},Qq:function(a){a=!!a;this.Je.each(function(){f(this).data("oj-ojButton").Bz(a)})},t8:function(a){"oneTabstop"===a?this.element.attr("role","toolbar"):this.element.removeAttr("role")},_setOption:function(a,b,d){this._superApply(arguments);
"disabled"===a?this.Qq(b):"checked"===a?(this.LB(b,this.Je),this.Je.each(function(){f(this).data("oj-ojButton").WE(!1)})):"focusManagement"===a?this.t8(b):"chroming"===a&&(c(this.element,b),this.Je.ojButton("refresh"))},refresh:function(){this._super();this.Ma(!1)},Ma:function(a){var b=this;this.jh="rtl"===this.Ic();c(this.element,this.options.chroming);a?this.QU||this.LB(this.options.checked,this.Je):this.Je=this.element.find(this.C5);this.element.toggleClass("oj-buttonset-multi",1<this.Je.length);
this.Je.filter(":oj-button").ojButton("refresh").each(function(){f(this).data("oj-ojButton").WE(!1)}).end().not(":oj-button").ojButton().end().map(function(){return f(this).ojButton("widget")[0]}).removeClass("oj-buttonset-first oj-buttonset-last").filter(":first").addClass("oj-buttonset-first").end().filter(":last").addClass("oj-buttonset-last").end().end();this.Qq(this.options.disabled);"oneTabstop"===this.options.focusManagement&&(this.Je.unbind("keydown"+this.eventNamespace).bind("keydown"+this.eventNamespace,
function(a){b.nt(a,f(this))}).unbind("click"+this.eventNamespace).bind("click"+this.eventNamespace,function(){f(this).data("oj-ojButton").cf()||b.Nt(f(this))}).unbind("focus"+this.eventNamespace).bind("focus"+this.eventNamespace,function(){b.Nt(f(this))}),this.Gn=this.Je.filter(function(){return!f(this).data("oj-ojButton").cf()}),this.MQ(a))},MQ:function(a){var b=f(this.Bt);this.Bt=void 0;this.Je.attr("tabindex","-1");a=a||!b.is(this.Gn)?this.Gn.first():b;this.Nt(a)},jR:function(a){var b=this.Gn;
return a.map(function(a,c){if("radio"!=c.type||c.checked||""==c.name)return c;var e=d(c,b).filter(":checked");return e.length?e[0]:c})},Nt:function(a){a=this.jR(a);var b=a[0],c=this.Bt;b!==c&&(f(c).attr("tabindex","-1"),a.attr("tabindex","0"),this.Bt=b)},nt:function(a,b){switch(a.which){case f.ui.keyCode.LEFT:case f.ui.keyCode.RIGHT:a.preventDefault();var c=this.Gn,d=c.length;if(2>d)break;var e=c.index(b);c.eq((e+(a.which==f.ui.keyCode.RIGHT^this.jh?1:-1)+d)%d).focus();break;case f.ui.keyCode.UP:case f.ui.keyCode.DOWN:"radio"==
b.attr("type")&&a.preventDefault()}},_destroy:function(){this.element.removeClass("oj-buttonset oj-component "+n).removeAttr(b.Components.Wp).removeAttr("role");"oneTabstop"===this.options.focusManagement&&this.Je.attr("tabindex","0");this.Je.map(function(){return f(this).ojButton("widget")[0]}).removeClass("oj-buttonset-first oj-buttonset-last").end().ojButton("destroy")}});var e,g,h=".ojButton",k="oj-button oj-component oj-enabled oj-default",l="oj-hover oj-active oj-selected",p="oj-button-icons-only oj-button-icon-only oj-button-text-icons oj-button-text-icon-start oj-button-text-icon-end oj-button-text-only",
n="oj-button-full-chrome oj-button-half-chrome oj-button-outlined-chrome",m={full:"oj-button-full-chrome",half:"oj-button-half-chrome",outlined:"oj-button-outlined-chrome"},q={button:["ojButtonset","ojToolbar"],buttonset:["ojToolbar"]};b.Components.tp({ojButton:{chroming:b.Components.Hi(function(b){return a("button",b.element,b.containers)})},ojButtonset:{chroming:b.Components.Hi(function(b){return a("buttonset",b.element,b.containers)})}})})()});
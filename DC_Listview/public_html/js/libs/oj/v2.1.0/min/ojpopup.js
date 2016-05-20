/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
define(["ojs/ojcore","jquery","ojs/ojcomponentcore","ojs/ojpopupcore"],function(b,f){(function(){var a="oj-left oj-center oj-right oj-top oj-middle oj-bottom".split(" "),d={"right-top":"oj-right oj-top","right-middle":"oj-right oj-middle","right-bottom":"oj-right oj-bottom","left-top":"oj-left oj-top","left-middle":"oj-left oj-middle","left-bottom":"oj-left oj-bottom","center-top":"oj-center oj-top","center-middle":"oj-left oj-middle","center-bottom":"oj-center oj-bottom"};b.Ja("oj.ojPopup",f.oj.baseComponent,
{widgetEventPrefix:"oj",options:{autoDismiss:"focusLoss",chrome:"default",initialFocus:"auto",position:{my:"start top",at:"start bottom",of:"",collision:"flip"},tail:"none",modality:"modeless",role:"tooltip",beforeOpen:null,open:null,beforeClose:null,close:null,focus:null},_ComponentCreate:function(){this._super();var a=f("\x3cdiv\x3e");this.qf=a.hide().addClass("oj-popup").attr("aria-hidden","true");a.addClass("oj-component");var b=f("\x3cdiv\x3e").addClass("oj-popup-content");b.attr("role","presentation");
b.appendTo(a);this.element.after(a);this.element.appendTo(b);this.element.show();this.U0();this.Z7();this.bC=f.proxy(this.cC,this)},_destroy:function(){this.isOpen()&&this.Ns();this.q1();delete this.bC;delete this.ul;b.A.unwrap(this.element,this.qf);this.element.hide();var a=this.kq;isNaN(a)||(delete this.kq,window.clearTimeout(a));this.r1();this._super()},widget:function(){return this.qf},open:function(a,d){if(this.isOpen()&&(this.close(),this.isOpen()))return;this.mva(a);var f=this.qf;a=this.Qc;
b.Ra.xk(f.attr("id"))&&f.attr("id",this.zG("wrapper"));if(!1!==this._trigger("beforeOpen")){this.o8(d);var h=this.options;this.kS(h.autoDismiss);this.qia();f.attr("role",h.role);d=h.position;var k="rtl"===this.Ic();d=b.ad.$h(d,k);var k="oj-popup-layer",l=h.tail;"none"!==l&&(k+=" "+["oj-popup-tail",l].join("-"));l={};l[b.R.kb.zg]=f;l[b.R.kb.Qy]=a;l[b.R.kb.Ty]=d;l[b.R.kb.Zr]=this.xw();l[b.R.kb.Hp]=k;l[b.R.kb.Ij]=h.modality;b.R.wf().open(l);this._trigger("open");this.QQ();this.Dqa();this._on(f,{keydown:this.Qw,
keyup:this.Qw});a&&0<a.length&&this._on(a,{keydown:this.Qw,keyup:this.Qw})}},close:function(){if(this.isOpen()&&(!1!==this._trigger("beforeClose")||this.MA)){this.zua();var a=this.Qc,d=this.qf;this._off(d,"keydown keyup");a&&0<a.length&&this._off(a,"keydown keyup");this.r1();a={};a[b.R.kb.zg]=d;b.R.wf().close(a);this.Mta();this.kS();delete this.Qc;d=this.options.position;d._ofo&&(delete d._ofo,delete d.of);this._trigger("close")}},isOpen:function(){return this.qf.is(":visible")},refresh:function(){this._super();
this.isOpen()&&this.t7();var a=this.qf;b.R.wf().wW(a,b.R.md.Kp)},_setOption:function(a,d){var f=this.options;switch(a){case "tail":d!==f.tail&&this.zva(d);break;case "chrome":d!==f.chrome&&this.Z7(d);break;case "position":this.o8(d);this.refresh();return;case "autoDismiss":this.isOpen()&&d!==f.autoDismiss&&this.kS(d);break;case "modality":this.isOpen()&&(f={},f[b.R.kb.zg]=this.qf,f[b.R.kb.Ij]=d,b.R.wf().Cx(f))}this._superApply(arguments)},xDa:function(){return"oj-popup"},zva:function(a){this.q1();
this.U0(a);this.t7()},U0:function(a){a=a?a:this.options.tail;if("none"!==a){a=["oj-popup-tail",a].join("-");var d=f("\x3cdiv\x3e").hide();d.addClass("oj-popup-tail").addClass(a);d.attr("role","presentation");this.f9=d.attr("id",this.zG("tail")).attr("id");var g=this.qf;d.appendTo(g);g.addClass(a);this.isOpen()&&(d={},d[b.R.kb.zg]=g,d[b.R.kb.Hp]="oj-popup-layer "+a,b.R.wf().Cx(d))}},F3:function(){var a=this.f9;return a?f(document.getElementById(a)):null},q1:function(){var a=this.F3();a&&a.remove();
delete this.f9;a=this.qf;a.removeClass(["oj-popup-tail",this.options.tail].join("-"));if(this.isOpen()){var d={};d[b.R.kb.zg]=a;d[b.R.kb.Hp]="oj-popup-layer";b.R.wf().Cx(d)}},Z7:function(a){a=a?a:this.options.chrome;var b=this.qf;"default"===a&&b.hasClass("oj-popup-no-chrome")?b.removeClass("oj-popup-no-chrome"):"none"!==a||b.hasClass("oj-popup-no-chrome")||b.addClass("oj-popup-no-chrome")},mva:function(a){a?"string"===f.type(a)?a=f(a):1===a.nodeType&&(a=f(a)):a=f(document.activeElement);if(a instanceof
jQuery&&1<a.length)for(var d=this.qf,g=0;g<a.length;g++){var h=a[0];if(!b.A.sr(d[0],h)){a=f(h);break}}else if(!(a instanceof jQuery)||a instanceof jQuery&&0===a.length)a=f(document.activeElement);this.Qc=a},o8:function(a){var b=this.options;a&&(b.position=f.extend(b[a],a));a=b.position;b=this.bC;f.isFunction(a.using)&&a.using!==b&&(a.origUsing=a.using);a.using=b;b=this.Qc;a.of||(a.of=b,a._ofo=!0)},cC:function(c,e){var g=e.element.element;if(c.top!==g.css("top")||c.left!==g.css("left")){var h=this.F3();
if(h){h.hide();for(var k=0;k<a.length;k++)h.removeClass(a[k]),g.removeClass(a[k]);h.removeAttr("style");if(e.target&&0===e.target.height&&0===e.target.width&&(k="rtl"===this.Ic(),k=b.ad.$h(this.options.position,k).my,!b.Ra.xk(k))){var k=k.split(" "),l=k[0],p="middle";1<k.length&&(p="center"===k[1]?"middle":k[1]);e.horizontal=l;e.vertical=p}k=d[[e.horizontal,e.vertical].join("-")];h.addClass(k);g.addClass(k);h.show();"left"===e.horizontal?(k=h.outerWidth(),k-=k+b.A.qC(h.css("left")),c.left+=k-2):"right"===
e.horizontal&&(k=h.outerWidth(),k-=k+b.A.qC(h.css("right")),c.left-=k-2);"top"===e.vertical?(k=h.outerHeight(),k-=k+b.A.qC(h.css(e.vertical)),c.top+=k-2):"bottom"===e.vertical&&(k=h.outerHeight(),k-=k+b.A.qC(h.css(e.vertical)),c.top-=k-2);g.css(c);"center"===e.horizontal&&"middle"!==e.vertical?(g=g.width(),g=Math.round((g/2-h.outerWidth()/2)/g*100),h.css({left:g+"%"})):"middle"===e.vertical&&(g=g.height(),g=Math.round((g/2-h.outerHeight()/2)/g*100),h.css({top:g+"%"}))}else g.css(c);h=this.options;
(g=h.position.origUsing)&&g(c,e);"focusLoss"===h.autoDismiss&&b.ad.SU(e)&&(this.HQ=!0,this.kq=this._delay(f.proxy(this.Ns,this),1))}},t7:function(){var a=this.qf,d=this.options.position,f="rtl"===this.Ic();a.position(b.ad.$h(d,f))},QQ:function(a){var b=this.Ala();a&&"none"===b&&(b="popup");"firstFocusable"===b&&(a=this.element.find(":focusable"),0<a.length?(f(a[0]).focus(),this._trigger("focus")):b="popup");"popup"===b&&(b=this.qf,b.attr("tabindex","-1"),b.focus(),this._trigger("focus"))},Ala:function(){var a=
this.options,d=a.initialFocus;"auto"===d&&(d="modal"===a.modality?b.A.Zd()?"popup":"firstFocusable":"none");return d},XG:function(a,d){a||(a=document.activeElement);if(!a)return!1;var f=this.qf;d&&(f=f.parent());return b.A.sr(f[0],a)},h5:function(a){a||(a=document.activeElement);return b.A.sr(this.Qc[0],a)},zua:function(){this.HQ?delete this.HQ:this.XG(null,!0)&&this.Qc.focus()},Qw:function(a){if(!a.isDefaultPrevented()){var b=a.type,d=a.target;if("keyup"===b&&a.keyCode===f.ui.keyCode.ESCAPE&&(this.XG(d)||
this.h5(d)))a.preventDefault(),this.close();else if("keydown"===b&&117===a.keyCode)this.XG(d)?(d=this.options,"modeless"===d.modality?(a.preventDefault(),a=this.Qc,a.focus()):this.close()):this.h5(d)&&(a.preventDefault(),this.QQ(!0));else if("keydown"===b&&a.keyCode===f.ui.keyCode.TAB&&this.XG(d)){var h=this.element.find(":tabbable");if(0<h.length){var b=h[0],h=h[h.length-1],k=this.qf;b!==d&&k[0]!==d||!a.shiftKey?h!==d||a.shiftKey||(a.preventDefault(),h===b?(k.attr("tabindex","-1"),k.focus()):f(b).focus()):
(a.preventDefault(),b===h&&b===d?(k.attr("tabindex","-1"),k.focus()):f(h).focus())}else a.preventDefault(),d=this.options,"modeless"===d.modality?(a=this.Qc,a.focus()):this.close()}}},kS:function(a){var d=this.g2,g=this.xw();d&&(delete g[b.R.md.kv],delete this.g2);"focusLoss"===a&&(d=this.g2=f.proxy(this.Fla,this),g[b.R.md.kv]=d);this.isOpen()&&(a={},a[b.R.kb.zg]=this.qf,a[b.R.kb.Zr]=g,b.R.wf().Cx(a))},Fla:function(a){var d=this.Qc,g=this.qf.parent(),h=a.target,k=this.VF;if(k&&(k=k.getLink())&&b.A.sr(k[0],
h))return;if(!b.A.sr(d[0],h)&&!b.A.sr(g[0],h)){if(f(h).is(":focusable")){if("mousedown"===a.type||"touchstart"===a.type)return;this.HQ=!0}this.close()}},qia:function(){var a=this.Qc,b=this.qf.attr("id"),d=a.attr("aria-describedby"),d=d?d.split(/\s+/):[];d.push(b);d=f.trim(d.join(" "));a.attr("aria-describedby",d)},Mta:function(){var a=this.Qc,b=this.qf.attr("id"),d=a.attr("aria-describedby"),d=d?d.split(/\s+/):[],b=f.inArray(b,d);-1!==b&&d.splice(b,1);(d=f.trim(d.join(" ")))?a.attr("aria-describedby",
d):a.removeAttr("aria-describedby")},Dqa:function(){var a=b.eb.pC().os===b.eb.Sk.dL,d=this.gR;d||(d=this.gR=new b.Gf);var g;g=a?this.v("none"===this.options.initialFocus?"ariaLiveRegionInitialFocusNoneTouch":"ariaLiveRegionInitialFocusFirstFocusableTouch"):this.v("none"===this.options.initialFocus?"ariaLiveRegionInitialFocusNone":"ariaLiveRegionInitialFocusFirstFocusable");d.lxa(g);if(a){if(!this.VF){var d=this.zG("focusSkipLink"),h=this.Qc,a=f.proxy(this.QQ,this,!0);g=this.v("ariaFocusSkipLink");
this.VF=new b.Lj(h,g,a,d)}this.HN||(d=this.zG("closeSkipLink"),h=this.element,a=f.proxy(this.Ns,this),g=this.v("ariaCloseSkipLink"),this.HN=new b.Lj(h,g,a,d))}},r1:function(){var a=this.gR;a&&(a.destroy(),delete this.gR);if(a=this.VF)a.destroy(),delete this.VF;if(a=this.HN)a.destroy(),delete this.HN},zG:function(a){var d=this.element.attr("id");b.Ra.xk(d)&&(d=this.uuid);return[d,a].join("_")},Rt:function(){this.element.remove()},xw:function(){if(!this.ul){var a=this.ul={};a[b.R.md.lv]=f.proxy(this.Ns,
this);a[b.R.md.mv]=f.proxy(this.Rt,this);a[b.R.md.Kp]=f.proxy(this.refresh,this)}return this.ul},Ns:function(){this.MA=!0;this.close();delete this.MA}});b.Components.tp({ojPopup:{modality:b.Components.Hi(function(){return b.Hf.gn("popup").modality})}})})()});
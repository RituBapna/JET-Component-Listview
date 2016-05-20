/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
define(["ojs/ojcore","jquery","hammerjs","ojs/ojjquery-hammer","ojs/ojcomponentcore","ojs/ojvalidation","ojs/ojpopup"],function(b,f,a){b.ae={};o_("EditableValueUtils",b.ae,b);b.ae.Oya=function(a,b){var d,c,g={};if(a&&b)switch(b){case "disabled":d=void 0!==a.attr("disabled")?!!a.prop("disabled"):void 0;break;case "pattern":d=a.prop("pattern")||void 0;break;case "placeholder":d=a.prop("placeholder")||void 0;break;case "readonly":d=void 0!==a.attr("readonly")?!!a.prop("readonly"):void 0;break;case "required":d=
a.attr("required");c=a.prop("required");d=void 0!==d?void 0!==c?!!c:!!d:void 0;break;case "title":d=void 0!==a.attr("title")?a.prop("title"):void 0;break;case "value":d=a.val()||void 0;break;default:d=a.attr(b)||void 0}void 0!==d?(g.T$=!0,g.value=d):g.T$=!1;return g};b.ae.mn=function(a,d,c,g){for(var e={},h=0;h<a.length;h++){var k,f=a[h];k=f.Z;var l=f.option||k,t=f.rg,f=f.jd,x=c.element,y=c.options[l];void 0===d[l]&&(y=c.options[l],k=b.ae.Oya(x,k),k.T$&&(k=k.value,t&&("boolean"===typeof t?k=b.ae.Qxa(l,
k):"function"===typeof t&&(k=t.call(c,k))),e[l]=k));t=l in e?e[l]:y;f&&"boolean"===typeof f&&b.ae.CCa(l,t)}null!=g&&g(e);c.option(e,{_context:{zd:!0,lb:!0}})};b.ae.CCa=function(a,b){var d=!1;switch(a){case "required":null!==b&&"boolean"!==typeof b&&(d=!0);break;case "readOnly":case "disabled":null!==b&&"boolean"!==typeof b&&(d=!0)}if(d)throw"Option '"+a+"' has invalid value set: "+b;};b.ae.Qxa=function(a,b){var d=b;switch(a){case "required":d=b?!0:!1}return d};b.ae.gW=function(a,b){if(a&&b){var d=
b["class"];d&&a.addClass(d);if(d=b.style){var c=a.attr("style");c?a.attr("style",c+";"+d):a.attr("style",d)}}};b.Db=function(a){this.Init(a)};b.nb.jK(b.nb.ee.OD,b.Db);b.b.la(b.Db,b.$c,"oj.PopupMessagingStrategy");b.Db.xv={ojRadioset:{position:"launcher",Fl:{open:"focus focusin mouseover",close:"mouseout"}},ojCheckboxset:{position:"launcher",Fl:{open:"focusin mouseover",close:"mouseout"}},ojInputText:{position:"launcher",Fl:{open:"focusin"}},ojTextArea:{position:"launcher",Fl:{open:"focusin"}},ojInputPassword:{position:"launcher",
Fl:{open:"focusin"}},ojSwitch:{position:"launcher",Fl:{open:"focusin mouseover",close:"mouseout"}},ojSlider:{position:"launcher",Fl:{open:"focusin mouseover",close:"mouseout"}},"default":{position:"launcher-wrapper",Fl:{open:"focusin"}}};b.Db.tM="oj-form-control-hint";b.Db.Fha="oj-form-control-hint-converter";b.Db.Hha="oj-form-control-hint-validator";b.Db.Gha="oj-form-control-hint-title";b.Db.prototype.cr=function(a){b.Db.p.cr.call(this,a);this.vqa()};b.Db.prototype.Mu=function(a){b.Db.p.Mu.call(this,
a);this.D9()};b.Db.prototype.update=function(){b.Db.p.update.call(this);this.D9()};b.Db.prototype.an=function(){this.Bwa();this.Cla();b.Db.p.an.call(this)};b.Db.prototype.t0=function(){this.t5()&&this.Bf.ojPopup("close")};b.Db.prototype.vqa=function(){this.qH||this.Dta()};b.Db.prototype.n6=function(){var a,d;if(this.Mja()&&(d=this.N_(),!b.Ra.xk(d))){var c=this.k3();a=c.ojPopup("isOpen");a?a&&(a=c[0],a.innerHTML="",a.innerHTML=d,c.ojPopup("refresh")):(a=c[0],a.innerHTML="",a.innerHTML=d,c.ojPopup("open",
this.Hj()))}};b.Db.prototype.Mja=function(){var a=this.Qk().options,b=a.readOnly||!1;return!(a.disabled||b)};b.Db.prototype.D9=function(){var a;a=!1;var b,d;if(this.t5()){var c=this.k3();a=c.ojPopup("isOpen");b=this.N_();d=document.activeElement===this.Hj()[0]?!0:!1;a?b?(a=c[0],a.innerHTML="",a.innerHTML=b,c.ojPopup("refresh")):c.ojPopup("close"):d&&b&&this.n6()}};b.Db.prototype.Bwa=function(){var a=b.Db.xv[this.Qk().widgetName],a=a?a.Fl:b.Db.xv["default"].Fl;if(a.open){var d=this.qH;delete this.qH;
d&&this.Hj().off(a.open,d)}a.close&&(d=this.u0)&&this.Hj().off(a.close,d)};b.Db.prototype.Dta=function(){var a=this.Hj(),d=b.Db.xv[this.Qk().widgetName],d=d?d.Fl:b.Db.xv["default"].Fl;if(d.open){var c=this.qH;c||(c=this.qH=f.proxy(this.n6,this));a.on(d.open,c)}d.close&&(c=this.u0,c||(c=this.u0=f.proxy(this.t0,this)),a.on(d.close,c))};b.Db.prototype.aoa=function(){var a,d=b.Db.xv[this.Qk().widgetName];(d=d?d.position:b.Db.xv["default"].position)&&("launcher"===d?a=this.Hj():"launcher-wrapper"===d&&
(a=this.Hj().parent()));a||(a=this.Qk().widget());return{my:"start bottom",at:"end top",collision:"flipcenter",of:a}};b.Db.prototype.k3=function(){if(this.Bf)return this.Bf;var a=b.ue.xaa(),d=this.aoa();a.ojPopup("option","position",d);a.ojPopup("option","close",f.proxy(this.Jsa,this));a.ojPopup("option","open",f.proxy(this.Ksa,this));return this.Bf=a};b.Db.prototype.Ksa=function(a){var d=f(a.target),c=this;window.setTimeout(function(){b.Components.TU(d)?d.ojPopup("option","autoDismiss","focusLoss"):
delete c.Bf},10)};b.Db.prototype.Jsa=function(a){a=f(a.target);b.Components.TU(a)&&(a.ojPopup("option","autoDismiss","none"),a.ojPopup("option","open",null),a.ojPopup("option","close",null));delete this.Bf;a.children().remove()};b.Db.prototype.Cla=function(){this.t0();b.ue.vya()};b.Db.prototype.N_=function(){var a="",d=this.Qk().document[0],c=[],g=!1;this.PX()&&c.push(this.fN(d));(this.uL()||this.RX()||this.QX())&&c.push(this.tja(d));f.each(c,function(c,e){e&&(g?a=a.concat(b.gb.hza(d)):g=!0,a=a.concat(e))});
return a};b.Db.prototype.fN=function(a){var d;d="";var c=this.SK();this.aL()&&(d=this.TK(),d=b.gb.b$(a,d,c,!1));return d};b.Db.prototype.tja=function(a){var d=[],c,g="";this.uL()&&(d=this.bX(),d=d.length?d[0]:"",g+=b.gb.CT(a,b.Db.Fha,d,!1,b.Db.tM));if(this.RX())for(d=this.Oea(),c=0;c<d.length;c++)g+=b.gb.CT(a,b.Db.Hha,d[c],!1,b.Db.tM);this.QX()&&(g+=b.gb.CT(a,b.Db.Gha,this.Nea(),!0,b.Db.tM));return g?"\x3cdiv class\x3d'oj-form-control-hints'\x3e"+g+"\x3c/div\x3e":""};b.Db.prototype.t5=function(){return this.Bf?
b.Components.TU(this.Bf):!1};b.gb={};b.gb.CT=function(a,d,c,g,e){var h;c&&(h=f(a.createElement("div")),h.addClass(e+(" "+d)),h.append(b.gb.G3(a,c,g)));return h?h.get(0).outerHTML:""};b.gb.Kaa=function(a){var d;switch(a){case b.aa.vc.FATAL:d=b.na.v("oj-message.fatal");break;case b.aa.vc.ERROR:d=b.na.v("oj-message.error");break;case b.aa.vc.WARNING:d=b.na.v("oj-message.warning");break;case b.aa.vc.INFO:d=b.na.v("oj-message.info");break;case b.aa.vc.CONFIRMATION:d=b.na.v("oj-message.confirmation")}return d};
b.gb.hza=function(a){return(a=f(a.createElement("hr")))?a.get(0).outerHTML:""};b.gb.b$=function(a,d,c,g){var e="",h,k,f,l,t={};l=[];for(h=0;h<d.length;h++)f=d[h],l=f instanceof b.aa?f:new b.aa(f.summary,f.detail,f.severity),k=b.aa.Tx(l.severity),t[k]||(t[k]=[]),t[k].push(l);for(h=c;h>=b.aa.vc.CONFIRMATION;h--)for(l=t[h]||[],d=0;d<l.length;d++)f=l[d],b.l.Ce(f,b.aa),k=b.aa.Tx(f.severity),c=b.gb.Kaa(k),c=f.summary||c,f=f.detail||"",e=e.concat(b.gb.a$(a,c,f,k,g));return e};b.gb.a$=function(a,d,c,g,e){var h,
k;k=b.gb.Kaa(g);h=f(a.createElement("div"));h.addClass(b.gb.Iha);e&&h.addClass(b.gb.koa(g));e=f(a.createElement("span"));e.addClass(b.gb.joa(g)).attr("title",k).attr("role","img");h.append(e);g=f(a.createElement("span"));g.addClass(b.gb.Lha);k=f(a.createElement("div"));k.addClass(b.gb.Pha).text(d);g.append(k);c&&(d=b.gb.G3(a,c,!0),a=f(a.createElement("div")),a.addClass(b.gb.Mha).append(d),g.append(a));h.append(g);return h?h.get(0).outerHTML:""};b.gb.joa=function(a){var d;switch(a){case b.aa.vc.FATAL:d=
b.gb.DZ;break;case b.aa.vc.ERROR:d=b.gb.DZ;break;case b.aa.vc.WARNING:d=b.gb.Rha;break;case b.aa.vc.INFO:d=b.gb.Oha;break;case b.aa.vc.CONFIRMATION:d=b.gb.Kha}return b.gb.Qfa+d};b.gb.koa=function(a){switch(a){case b.aa.vc.FATAL:a=b.gb.CZ;break;case b.aa.vc.ERROR:a=b.gb.CZ;break;case b.aa.vc.WARNING:a=b.gb.Qha;break;case b.aa.vc.INFO:a=b.gb.Nha;break;default:a=b.gb.Jha}return a};b.gb.G3=function(a,d,c){var g=null;b.Ra.oe(d)&&(c&&b.A.HAa(d)?g=b.A.Nxa(d.substring(6,d.length-7)):(g=a.createElement("span"),
g.textContent=d));return g};b.gb.Qfa="oj-component-icon oj-message-status-icon ";b.gb.Iha="oj-message";b.gb.Pha="oj-message-summary";b.gb.Mha="oj-message-detail";b.gb.Lha="oj-message-content";b.gb.DZ="oj-message-error-icon";b.gb.Rha="oj-message-warning-icon";b.gb.Oha="oj-message-info-icon";b.gb.Kha="oj-message-confirmation-icon";b.gb.CZ="oj-message-error";b.gb.Qha="oj-message-warning";b.gb.Nha="oj-message-info";b.gb.Jha="oj-message-confirmation";b.ue={};b.ue.xaa=function(){var a=b.ue.j3(),d=a.find("."+
b.ue.uM);0===d.length?(d=f(b.ue.$na()).hide(),d.appendTo(a),d.ojPopup({rootAttributes:{"class":b.ue.Sha},initialFocus:"none",tail:"simple",autoDismiss:"none",modality:"modeless"})):d=f(d[0]);return d};b.ue.vya=function(){if(0<b.ue.sna()){var a=b.ue.xaa();a.ojPopup("destroy");a.remove()}};b.ue.j3=function(){var a=f("#"+b.ue.aZ);if(0<a.length)return a;a=f("\x3cdiv\x3e");a.attr("id",b.ue.aZ);a.attr("role","presentation");a.appendTo(f(document.body));return a};b.ue.sna=function(){return b.ue.j3().find("."+
b.ue.uM).length};b.ue.$na=function(){return"\x3cdiv class\x3d'"+b.ue.uM+"'\x3e\x3c/div\x3e"};b.ue.uM="oj-messaging-popup-container";b.ue.Sha="oj-messaging-popup";b.ue.aZ="__oj_messaging_popup_pool";(function(){b.Ja("oj._ojLabel",f.oj.baseComponent,{version:"1.0.0",defaultElement:"\x3clabel\x3e",widgetEventPrefix:"oj",options:{ariaRequiredUnsupported:!1,describedById:null,help:{definition:null,source:null},required:!1,rootAttributes:null},Ga:{$Z:"tooltipHelp",a_:"tooltipRequired"},widget:function(){return this.Wu},
refresh:function(){this._super();this.Q6();this.M6()},bf:function(a,b){this._super(a,b);this.Tja();this.yN()},_ComponentCreate:function(){this._super();this.gI=this.eventNamespace+"TouchEatClick";this.NG=this.eventNamespace+"HelpDefPopup";this.iq=b.A.Zd();this.bma()},uz:function(a){this.KB=a.attr("class")},Mv:function(){this.KB?this.element.attr("class",this.KB):this.element.removeAttr("class")},bma:function(){var a=this.options,b=a.required,a=a.ariaRequiredUnsupported,d=this.d6(),c=null;this.Wu=
this.element.wrap(this.hla()).closest(".oj-component");this.fsa();d&&(c=this.QN());this.H0(c);b&&(a?c.appendChild(this.tF()):this.element.before(this.tF()))},H0:function(a){var b=this.options,d=b.help.definition;if(b.help.source||d)this.Jqa(a),this.via(),this.dja()},Tja:function(){var a=this.options.required;if(null!==a&&"boolean"!==typeof a)throw Error("Option 'required' has invalid value set: "+a);},yN:function(){var a=this.options;if(this.d6()&&null==a.describedById)throw Error("ojLabel's describedById option must be set if help source is set\n\r\n      or (ariaRequiredUnsupported and required is set).");
},fsa:function(){var a=this.element.attr("class"),b;if(a&&(a=a.split(/\s+/),null!=a)){b=a.length;for(var d=0;d<b;d++){var c=a[d];0<c.indexOf("-label")&&(this.Wu.addClass(c),this.element.removeClass(c))}}},QN:function(){var a=this.Wu.find(".oj-label-group"),b=document.createElement("span");b.setAttribute("id",this.options.describedById);a.prepend(b);return b},hla:function(){var a=this.options.rootAttributes,b,d;d="oj-label oj-component";a&&(b=a["class"]);null!==b&&(d=d+" "+b);a=document.createElement("div");
a.className=d;d=document.createElement("div");d.className="oj-label-group";a.appendChild(d);return a},tF:function(){var a=this.v(this.Ga.a_),b=document.createElement("span");b.className="oj-label-required-icon oj-component-icon";b.setAttribute("role","img");b.setAttribute("title",a);return b},Kka:function(a,d){var c;if(this.mH()){c=document.createElement("a");c.setAttribute("tabindex","0");c.setAttribute("target","_blank");c.className="oj-label-help-icon-anchor oj-label-help-icon oj-component-icon oj-clickable-icon-nocontext";
if(d)try{b.A.BCa(d),c.setAttribute("href",d)}catch(g){throw Error(g+". The source option ("+d+") is invalid.");}a?c.setAttribute("title",a):c.setAttribute("title",this.v(this.Ga.$Z))}return c},dja:function(){var b;b=this.options.help.definition;var d,c,g;c=this.widget().find(".oj-label-help-icon-anchor");if(0!=c.length){d=b?b:this.v(this.Ga.$Z);this.KA?(g=f(document.getElementById(this.KA)))&&g.text(d):(b=document.createElement("div"),b.style.display="none",g=f(b),g.uniqueId(),this.KA=g.prop("id"),
g.text(d),d=document.getElementsByTagName("body")[0],d.appendChild(b));this.iq&&(this.GF&&this.widget().off(this.gI),this.GF=function(){return!1});var e=this;this.rH||(this.rH=function(a){e.Fpa(a,g,c,!1)});if(this.iq)c.An({recognizers:[[a.Press,{time:750}]]}).on("press",this.rH);else c.on("focusin"+this.NG+" mousedown"+this.NG,this.rH);b={my:"start bottom",at:"end top",collision:"flipcenter",of:c};g.ojPopup({position:b,modality:"modeless"})}},Fpa:function(a,b,d,c){if("mousedown"===a.type)c=!0;else if("focusin"===
a.type&&c)c=!1;else{if(this.iq)if("press"===a.type){var g=this.widget();g.on("click"+this.gI,this.GF);var e=this;b.on("ojclose",function(){g.off(e.gI);e.GF=null})}else b.off("ojclose");b.ojPopup("isOpen")||b.ojPopup("open",d)}},via:function(){var a=this.element,b=this.options.help.definition,d;b&&(a.addClass("oj-label-help-def"),(d=a.attr("title"))?a.attr("title",d+" "+b):a.attr("title",b))},j7:function(a){this.iq&&(this.widget().off(this.gI),this.GF=null,a.An().off(this.NG));a.off(this.NG);this.rH=
null},k7:function(){var a;if(null!=this.KA){if(a=f(document.getElementById(this.KA)))a.ojPopup("destroy"),a.remove();this.KA=null}},Sta:function(){this.element.removeClass("oj-label-help-def");this.element.attr("title","")},Jqa:function(a){var b=this.options.help.source,d=this.options.help.definition;this.mH()&&f(a).prepend(this.Kka(d,b))},d6:function(){var a=this.options;return this.mH()||a.ariaRequiredUnsupported&&a.required},mH:function(){var a=this.options;return a.help.source||a.help.definition},
M6:function(){var a,b;this.yN();this.Sta();a=this.Wu.find(".oj-label-help-icon");1===a.length&&(this.j7(a),this.k7(),a.remove());a=this.mH();b=document.getElementById(this.options.describedById);null!=a&&null==b?b=this.QN():null==a&&null!==b&&0===b.children.length&&b.remove();this.H0(b)},Q6:function(){var a,b;b=this.Wu.find(".oj-label-required-icon");a=this.options.describedById;this.options.required?(this.yN(),0===b.length?this.options.ariaRequiredUnsupported?(b=document.getElementById(a),null==
b&&(b=this.QN()),b.appendChild(this.tF())):this.element.before(this.tF()):(a=this.v(this.Ga.a_),b.attr("title",a))):(b.remove(),b=document.getElementById(a),null!==b&&0===b.children.length&&b.remove())},_setOption:function(a,b){this._superApply(arguments);"required"===a&&this.Q6();"help"===a&&this.M6()},getNodeBySubId:function(a){var b;b=this._super(a);b||(a=a.subId,"oj-label-help-icon"===a&&(b=this.widget().find(".oj-label-help-icon")[0]),"oj-label-required-icon"===a&&(b=this.widget().find(".oj-label-required-icon")[0]));
return b||null},getSubIdByNode:function(a){var b=null;null!=a&&(a===this.widget().find(".oj-label-help-icon")[0]?b={subId:"oj-label-help-icon"}:a===this.widget().find(".oj-label-required-icon")[0]&&(b={subId:"oj-label-required-icon"}));return b||this._superApply(arguments)},_destroy:function(){var a=this.Wu.find(".oj-label-help-icon");this.j7(a);this.k7();b.A.unwrap(this.element,this.Wu);return this._super()}})})();var d={uea:1,MW:2,QW:3,wX:4,xX:5,yX:6,jfa:7,vfa:8,WX:9,XX:10,yfa:11},c={jr:!0,Jk:d.MW},
e={jr:!0,Jk:d.QW},g={jr:!0,Jk:d.yX},h={jr:!0,Jk:d.wX},k={jr:!0,Jk:d.xX},l={jr:!0,Jk:d.XX};b.Ja("oj.editableValue",f.oj.baseComponent,{widgetEventPrefix:"oj",options:{disabled:!1,displayOptions:void 0,help:{definition:null,source:null},messagesCustom:void 0,messagesHidden:void 0,messagesShown:void 0,required:!1,title:"",validators:void 0,value:void 0},getNodeBySubId:function(a){return this._super(a)},isValid:function(){void 0===this.sT&&(this.sT=this.soa());return this.sT},refresh:function(){this._super();
this.y1(!0)},reset:function(){this.jF();this.JB(this.$k.jfa);this.PR(this.options.value,!0)},showMessages:function(){var a=this.options.messagesHidden,d,c=!1,g,e=[];for(g=0;g<a.length;g++)c=!0,d=a[g],d instanceof b.Ad&&d.Hma(),e.push(d.clone());c&&(this.Wz("messagesHidden"),this.qI("messagesShown",e))},validate:function(){return this.Lc(this.Eh(),null,this.LE)},yz:{WW:1,xfa:2,zX:3},$k:d,LE:{bu:!1,Jk:d.WX},bf:function(a,b){this._super(a,b)},_ComponentCreate:function(){var a=this.element,b=this.qga(a);
this._super();this.options.messagesCustom=this.options.messagesCustom||[];this.options.messagesHidden=[];this.options.messagesShown=0<this.options.messagesCustom.length?this.eka(this.options.messagesCustom):[];this.vM(a);this.vs()&&(this.aq(this.options.placeholder),this.$N=!0);f.each(["required","title","pattern"],function(d,c){c in b&&a.removeAttr(c)})},Eg:function(){this._super();this.Tka();this.y1(!1);this.SG();this.JB(this.$k.uea);0<this.options.messagesShown.length&&this.MB("messagesShown",
this.options.messagesShown,null,!0);this.widget().addClass("oj-form-control")},uz:function(a){this.Xha(a)},Mv:function(a){this.Dha(a)},bY:function(a,b){switch(a){case "disabled":this.cY(a,e);break;case "converter":this.Cfa(a);break;case "displayOptions":this.SG();break;case "help":this.qi(a,this.options[a]);break;case "messagesCustom":this.Xra(b);break;case "placeholder":this.Isa(b);break;case "readOnly":this.cY(a,h);break;case "required":this.Dfa(a);break;case "title":this.nwa();break;case "translations":this.refresh();
break;case "value":this.Efa(a,b);break;case "validators":this.rv(a)}},Cfa:function(a){var b=!1;this.Bha();this.JG()&&(b=!0);b?(this.kF(),this.sI(c)):this.qi(a,this.options[a],!0)},cY:function(a,b){var d=!this.options[a];this.qi(a,this.options[a]);d&&this.H7(b)},Dfa:function(a){this.qi(a,this.options[a]);this.H7(g)},Efa:function(a,b){var d=!1,c,g=b?b._context:null;g&&(d=g.originalEvent?!0:!1,c=g.jr||!1);d||(c||this.jF(null),this.JB(this.$k.yfa));this.qi(a,this.options[a],!0)},rv:function(){var a=!1;
this.BZ();this.JG()&&(a=!0);a&&(this.kF(),this.sI(l))},iz:function(){var a=this.options.readOnly||!1;return this.options.disabled||a?!1:!0},_destroy:function(){this.widget();var a=this._super(),d,c;this.jF(null,!0);this.qw().an();if(this.ac)for(d=this.ac.length,c=0;c<d;c++)this.ac[c]&&null!=b.Components.gh(this.ac[c])&&f(this.ac[c])._ojLabel("destroy");return a},Focus:function(){this.af().focus();return!0},_setOption:function(a,d,c){var g;g=!1;if("string"===typeof a&&void 0!==d)switch(a){case "messagesHidden":g=
!0;break;case "messagesShown":g=!0;break;case "rawValue":g=!0}if(g)return b.r.error(a+" option cannot be set"),this;g=this._superApply(arguments);this.bY(a,c);return g},af:function(){return this.element},JY:function(){var a=this.j2(this.element);if(null!==a&&0!==a.length)return a;a=this.element.prop("id");if(void 0!==a&&(a=f("label[for\x3d'"+a+"']"),0!==a.length))return a;a=this.element.closest("[aria-labelledby]");return 0!==a.length&&(a=this.j2(a),null!==a&&0!==a.length)?a:null},Bv:function(){return this.element.val()},
_GetMessagingLauncherElement:function(){return this.af()},Rd:function(){this.Bd||(this.Bd=b.Sb.getConverterInstance(this.options.converter));return this.Bd||null},mz:function(){this.G4||(this.G4={});return this.G4},Eh:function(){return this.af().val()},HY:function(){if(!this.Gz){var a=[],d=this.options.validators,c,g=!0,e=this.mz(),h=[],k,f;f=Object.keys(e);k=f.length;if(0<k){for(var l=0;l<k;l++)c=f[l],h.push(e[c]);a=a.concat(h)}if(d){h=[];for(f=0;f<d.length;f++)c=d[f],"object"===typeof c?(c.validate&&
"function"===typeof c.validate||(g=!1),g||(k=c.type)&&"string"===typeof k&&((e=b.ya.Xu(k))?(c=b.Zc.sg({},c.options)||{},c.converter=c.converter||this.Rd(),c.label=c.label||this.jP(),c=e.createValidator(c)):b.r.error("Unable to locate a validatorFactory for the requested type: "+k)),h.push(c)):b.r.error("Unable to parse the validator provided:"+c);a=a.concat(h)}this.Gz=a}return this.Gz||[]},BZ:function(){this.Gz&&(this.Gz.length=0);this.Gz=null;this.qw().update(this.bk(this.dj.YX))},Bha:function(){this.Bd=
null;this.qw().update(this.bk(this.dj.LW))},lm:function(){return this.options.required},jE:function(a){var b=this.Eh();this.Lc(b,a)},bq:function(a,b){var d={};d._context={originalEvent:b,zd:!0,lb:!0};this.options.rawValue!==a&&this.option("rawValue",a,d)},qi:function(a,b,d){switch(a){case "converter":b=this.options.value;this.PR(b,d);break;case "disabled":this.V6("disabled",this.options.disabled);break;case "help":b=this.options.help.definition;d=this.options.help.source;a=this.LO();this.ac&&(this.ac._ojLabel("option",
"describedById",a),this.ac._ojLabel("option","help",{definition:b,source:d}));break;case "required":this.V6("required",this.lm());this.rM(b);this.ac&&(a=this.LO(),this.ac._ojLabel("option",{describedById:a,ariaRequiredUnsupported:this.YD()}),this.ac._ojLabel("option","required",b));break;case "value":this.PR(b,d)}},rM:function(a){var b=this.af();a&&b?b.attr("aria-required",a):b.removeAttr("aria-required")},YD:function(){return!1},sM:function(){this.ac&&this.ac._ojLabel("refresh");this.Bd=this.JQ=
null;this.BZ()},Wj:function(a){var b=this.af();b.val()!==a&&b.val(a)},vM:function(a){"boolean"===typeof this.options.disabled&&a.prop("disabled",this.options.disabled)},aq:function(a){this.af().attr("placeholder",a)},FZ:function(a){this.options.placeholder=a},vs:function(){return this.options.placeholder},pY:function(){this.FZ("");this.aq("")},Lc:function(a,d,c){var g=c&&"boolean"===typeof c.bu?c.bu:!0;if(void 0===a)return b.r.warn("Attempt to set a value of undefined"),!1;if(g&&a===this.Bna())b.r.Xh>
b.r.Ip&&b.r.info("Validation skipped and value option not updated as submitted value '"+a.toString?a.toString():a+" same as previous.");else if(a=this.c_(a,d,c),void 0!==a&&this.isValid()){var e;c&&c._context&&(e=c._context);this.F9(a,d,c&&c.Jk,e);return!0}return!1},c_:function(a,d,c){var g=c&&c.DCa?c.DCa:this.yz.WW,e=c&&c.Jk?c.Jk:this.$k.vfa;c=c&&c.jr||!1;if(void 0===a)b.r.warn("Attempt to set a value of undefined");else if(this.iz()){c||this.jF(d);this.j8(a);try{return this.Dua(a,g,e,d)}catch(h){}}else b.r.Xh>
b.r.Ip&&b.r.info("Validation skipped and value option not set as component state does not  allow setting value. For example if the component is readonly or disabled.")},jz:function(a,d,c){return"value"===a?b.b.Gi(d,c):0===a.indexOf("messages")?this.Yra(d,c):this._superApply(arguments)},_GetDefaultStyleClass:function(){b.l.Dc();return""},dj:{Ay:1,ZX:2,LW:3,YX:4,TX:5},$p:{disabled:"oj-disabled",required:"oj-required"},jF:function(a,b){b?(this.options.messagesHidden=[],this.options.messagesShown=[],
this.options.messagesCustom=[]):(this.Wz("messagesHidden",a),this.Wz("messagesShown",a),this.Wz("messagesCustom",a))},kF:function(){var a=this.options.messagesShown,d=a.length,c;this.Wz("messagesHidden");for(var g=d-1;0<=g;g--)c=a[g],c instanceof b.Ad&&a.splice(g,1);a.length!==d&&this.MB("messagesShown",a,null,!0)},MB:function(a,b,d,c){var g={},e=0===b.length&&0===this.options[a].length;if(c||!e)g._context={originalEvent:d,zd:!0,lb:!0},g.changed=c||!e,this.rua(),this.option(a,b,g),this.Rwa()},Wz:function(a,
b){this.MB(a,[],b)},eka:function(a){var d,c=[],g;if(a&&0<a.length)for(g=0;g<a.length;g++)d=a[g],d instanceof b.aa?c.push(d.clone()):(d=new b.aa(d.summary,d.detail,d.severity),d=Object.freeze?Object.freeze(d):d,c.push(d));return c},Tka:function(){if(this.ac=this.JY()){var a=this.options.help.definition,b=this.options.help.source,d=this.YD(),c=this.lia(b,a,this.options.required,d);this.ac._ojLabel({rootAttributes:{"class":this._GetDefaultStyleClass()+"-label"},describedById:c,required:this.options.required,
ariaRequiredUnsupported:d,help:{definition:a,source:b}})}},y1:function(a){var b=!1;a?(this.sM(),this.SG(),this.JG()&&(b=!0),this.kF(),b?this.sI(k):(this.lm()&&this.JB(k.Jk),this.qi("value",this.options.value,!0))):(this.qi("value",this.options.value),this.qi("required",this.options.required));this.qi("disabled",this.options.disabled)},sDa:function(){return this.i6},Bna:function(){void 0===this.tR&&(this.tR="");return this.tR},j2:function(a){a=a.attr("aria-labelledby");return void 0!==a?f("label[id\x3d'"+
a+"']"):null},LO:function(){this.element.uniqueId();return this.element.prop("id")+"Icons"},lia:function(a,b,d,c){var g=this.LO();(a||b||d&&c)&&this.NM(g);return g},NM:function(a){this.af().each(function(){var b=f(this).attr("aria-describedby");b?f(this).attr("aria-describedby",b+" "+a):f(this).attr("aria-describedby",a)})},pG:function(){return this.options.messagesShown.concat(this.options.messagesHidden)},jP:function(){if(this.ac)return this.ac.text()},M3:function(){this.I9||(this.I9=new b.Kk(this.isValid(),
this.pG()));return this.I9},yQ:function(){return!b.aa.isValid(this.pG())},JG:function(){return!this.isValid()&&0<this.options.messagesShown.length},Zpa:function(){for(var a=this.options.messagesShown,d,c,g=0;g<a.length;g++)d=a[g],d instanceof b.Ad&&d.l5()&&(c=c||[],c.push(d));return void 0===c?!1:!b.aa.isValid(c)},SG:function(){var a=this.qw(),b=this._GetMessagingLauncherElement(),d=this.bk(this.dj.Ay);this.$N||this.pY();a.cr(b,d)},Xra:function(a){var d=this.options.messagesCustom,c=[],g,e,h=this.options.messagesShown,
k=a?a._context:null;for(e=0;e<h.length;e++)g=h[e],g instanceof b.Ad&&g.l5()&&c.push(g);for(e=0;e<d.length;e++)c.push(d[e]);this.MB("messagesShown",c,k?k.originalEvent:null,a&&a.changed)},Isa:function(a){a=(a&&a._context||{}).DAa?!1:!0;this.aq(this.options.placeholder);a?(this.$N=!0,this.Rd()&&this.SG()):this.$N=!1},kva:function(a){this.i6=a},j8:function(a){this.tR=a},nwa:function(){this.qw().update(this.bk(this.dj.TX))},qI:function(a,b,d){var c,g,e;if("object"===typeof b&&Array.isArray(b))for(e=this.options[a],
c=b.length,g=0;g<c;g++)e.push(b[g]);this.MB(a,e,d,!0)},Rwa:function(){this.qw().update(this.bk())},F9:function(a,b,d,c){c=c||{};b&&(c.originalEvent=b);switch(d){case this.$k.MW:case this.$k.QW:case this.$k.wX:case this.$k.xX:case this.$k.yX:case this.$k.WX:case this.$k.XX:c.zd=!0,c.jr=!0}this.option({value:a},{_context:c})},rua:function(){this.sT=void 0},soa:function(){var a=this.pG(),b=!0;a&&0!==a.length&&(b=!this.yQ());return b},Xs:function(a){var d=a,c=this.Rd();c&&"object"===typeof c&&(c.format&&
"function"===typeof c.format?d=c.format(a):b.r.Xh>b.r.Ip&&b.r.info("converter does not support the format method."));return d},qw:function(){this.Os||(this.Os=new b.nb(this));return this.Os},xna:function(a){var b,d=[];b="";var c;this.lm()&&(b=this.P2(),b.getHint&&"function"===typeof b.getHint&&(b=b.getHint())&&d.push(b));for(c=0;c<a.length;c++)b=a[c],"object"===typeof b&&b.getHint&&"function"===typeof b.getHint&&(b=b.getHint())&&d.push(b);return d},P2:function(){var a;a={};var d;null==this.JQ&&(a=
this.options.translations?this.options.translations.required||{}:{},d={hint:a.hint||null,label:this.jP(),messageSummary:a.messageSummary||null,messageDetail:a.messageDetail||null},this.JQ=(a=b.ya.Xu(b.ce.VALIDATOR_TYPE_REQUIRED))?a.createValidator(d):null);return this.JQ},bk:function(a){var b={},d=this.Rd(),c="",g=[];a=a||this.dj.ZX;if(a===this.dj.Ay||a===this.dj.ZX)g=this.pG(),this.M3().update(this.isValid(),g),b.kea=this.M3();if(a===this.dj.Ay||a===this.dj.LW)d&&"object"===typeof d&&d.getHint&&
"function"===typeof d.getHint&&(c=d.getHint()||""),b.s$=c;if(a===this.dj.Ay||a===this.dj.YX)d=this.HY(),g=this.xna(d)||[],b.ECa=g;if(a===this.dj.Ay||a===this.dj.TX)b.title=this.options.title||"";return b},Yra:function(a,d){var c=-1,g,e=!0,h=f.extend([],a),k=f.extend([],d);if(h.length!==k.length)return!1;f.each(h,function(a,d){d instanceof b.aa?g=d:(g=new b.aa(d.summary,d.detail,d.severity),g=Object.freeze?Object.freeze(g):g);c=-1;f.each(k,function(a,b){g.kr(b)&&(c=a)});-1<c?k.splice(c,1):e=!1});return e},
sH:function(a){var d=this.Rd(),c=a;d&&"object"===typeof d&&(d.parse&&"function"===typeof d.parse?c=d.parse(a):b.r.Xh>b.r.Ip&&b.r.info("converter does not support the parse method."));return c},RM:function(a,d){var c,g,e;a instanceof b.Zf||a instanceof b.bj?(c=a.Rx(),b.l.Ce(c,b.aa),e=c.severity,g=c.summary,c=c.detail):(e=b.aa.vc.ERROR,g=b.na.v("oj-message.error"),c=a.message||b.na.v("oj-converter.detail"));d.push({summary:g,detail:c,severity:e})},GR:function(a,d,c){var g={},e=[],h=a.bB||[];g.context=
d||0;g.display=c||b.Ad.av.nL;0===h.length&&this.RM(a,h);for(d=0;d<h.length;d++)a=h[d],e.push(this.Fka(a.summary,a.detail,a.severity,g));return e||null},Fka:function(a,d,c,g){a=new b.Ad(a,d,c,g);return a=Object.seal?Object.seal(a):a},PR:function(a,b){var d=a||this.options.value,c;c=this.i6;(b||d!==c)&&this.Nwa(d)},V6:function(a,b){-1!==Object.keys(this.$p).indexOf(a)&&this.widget().toggleClass(this.$p[a],!!b)},JB:function(a){if(this.iz())try{this.H9(this.options.value,this.yz.zX)}catch(d){(a=this.GR(d,
a,b.Ad.av.WK))&&this.qI("messagesHidden",a)}else b.r.Xh>b.r.Ip&&b.r.info("Deferred validation skipped as component is readonly or disabled.")},Dua:function(a,b,d,c){var g=a;try{b===this.yz.WW&&(g=this.sH(a)),this.H9(g,b===this.yz.zX)}catch(e){throw a=this.GR(e,d),this.qI("messagesShown",a,c),e;}return g},H7:function(a){var b=!0;this.JG()&&(b=!1);this.kF();b?this.lm()&&this.JB(a.Jk):this.sI(a)},Nwa:function(a,b){var d,c;this.kva(a);d=a;try{d=this.Xs(a)}catch(g){c=this.GR(g),this.qI("messagesShown",
c,b)}this.Wj(d);d=this.Eh();this.j8(d);this.bq(d,null)},sI:function(a){var b;b=this.c_(this.Eh(),null,a);void 0===b||!this.isValid()&&this.Zpa()||this.F9(b,null,a.Jk)},H9:function(a,d){var c=this.HY(),g,e,h=[];if(this.lm()){g=this.P2();try{g.validate(b.Ra.trim(a))}catch(k){this.RM(k,h)}}if(!d)for(e=0;e<c.length;e++)if(g=c[e],"object"===typeof g)if(g.validate&&"function"===typeof g.validate)try{g.validate(a)}catch(f){this.RM(f,h)}else b.r.Xh>b.r.Ip&&b.r.info("validator does not support the validate method.");
if(0<h.length)throw c=Error(),c.bB=h,c;}},!0);b.Components.tp({editableValue:{displayOptions:{messages:["inline"],converterHint:["placeholder","notewindow"],validatorHint:["notewindow"],title:["notewindow"]}}});b.yh=function(a){this.Init(a)};b.nb.jK(b.nb.ee.Py,b.yh);b.b.la(b.yh,b.$c,"oj.InlineMessagingStrategy");b.yh.prototype.Mu=function(a){b.yh.p.Mu.call(this,a);this.N6()};b.yh.prototype.kW=function(a){return a&&void 0!==a.kea?!0:!1};b.yh.prototype.update=function(){b.yh.p.update.call(this);this.N6()};
b.yh.prototype.an=function(){this.m7();b.yh.p.an.call(this)};b.yh.prototype.N6=function(){var a,b;a=this.Qk().widget();(b=this.uja())&&null==this.Bf&&(this.Bf=f("\x3cdiv class\x3d'oj-messaging-inline-container'\x3e\x3c/div\x3e"),a.append(this.Bf));null!=this.Bf&&(b?(a=this.Bf[0],a.innerHTML=b,this.NM(this.Bf)):this.m7())};b.yh.prototype.m7=function(){null!=this.Bf&&(this.Hta(this.Bf),this.Bf.remove(),delete this.Bf)};b.yh.prototype.NM=function(a){var d=this.Hj();b.l.Ce(d,jQuery);b.l.Ce(a,jQuery);
a=a.uniqueId().attr("id");var c=d.attr("aria-describedby"),c=c?c.split(/\s+/):[];c.push(a);c=f.trim(c.join(" "));d.attr("aria-describedby",c)};b.yh.prototype.Hta=function(a){var d=this.Hj();b.l.Ce(d,jQuery);b.l.Ce(a,jQuery);a=a.attr("id");var c=d.attr("aria-describedby"),c=c?c.split(/\s+/):[];a=f.inArray(a,c);-1!==a&&c.splice(a,1);(c=f.trim(c.join(" ")))?d.attr("aria-describedby",c):d.removeAttr("aria-describedby")};b.yh.prototype.uja=function(){var a=this.Qk().document[0];return this.PX()?this.fN(a):
""};b.yh.prototype.fN=function(a){var d;d="";var c=this.SK();this.aL()&&(d=this.TK(),d=b.gb.b$(a,d,c,!0));return d}});
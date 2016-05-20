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
define(["ojs/ojcore","jquery","ojs/ojeditablevalue"],function(b){(function(){b.Ja("oj.ojSwitch",$.oj.editableValue,{version:"1.1.0",defaultElement:"\x3cinput\x3e",widgetEventPrefix:"oj",options:{disabled:!1,readOnly:!1,required:!1,title:"",value:!1},refresh:function(){this._super();this.Ma()},widget:function(){return this.ao},getNodeBySubId:function(b){var a,d=this.widget();a=null==b||null==b.subId?d:null;return a||(b=b.subId,"oj-switch-thumb"!==b&&"oj-switch-track"!==b)?a||null:d.find("."+b)[0]},
getSubIdByNode:function(b){var a=$(this.element).attr("id"),d,c=null;null!=b&&($(b).hasClass("oj-switch-track")||$(b).hasClass("oj-switch-thumb"))&&(d=$(b).parents("div.oj-switch").find("input.oj-component-initnode").attr("id"),a===d&&$(b).hasClass("oj-switch-track")?c={subId:"oj-switch-track"}:a===d&&$(b).hasClass("oj-switch-thumb")&&(c={subId:"oj-switch-thumb"}));return c},Ga:{Vha:"SwitchOFF",Wha:"SwitchON"},bf:function(f,a){var d;this._super(f,a);b.ae.mn([{Z:"disabled",jd:!0},{Z:"readonly",option:"readOnly",
jd:!0},{Z:"required",jd:!1,rg:function(){return!1}},{Z:"checked",option:"value",jd:!1,rg:function(a){return a?!0:!1}},{Z:"title"}],a,this);d=this.option("value");this.option({required:!1,value:!!d},{_context:{zd:!0,lb:!0}})},_ComponentCreate:function(){this._super();if(!this.element.is("input"))throw Error("ojSwitch can be bound to INPUT only.");this.V4=this.element.css("display");this.element.css("display","none").attr("type","checkbox").attr("checked",this.option("value")).attr("tabindex","-1").attr("disabled",
this.option("disabled")).attr("readonly",this.option("readOnly"));this.ao=this.element.wrap("\x3cdiv\x3e\x3c/div\x3e").parent().addClass("oj-switch oj-component oj-form-control");this.ao.append("\x3cdiv class\x3d'oj-switch-container'\x3e\x3cdiv class\x3d'oj-switch-track'\x3e\x3cdiv class\x3d'oj-switch-thumb' tabIndex\x3d'0'\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e");this.Cn=this.ao.find(".oj-switch-thumb");this.Cn.attr("role","switch checkbox");this.Nua(this.element,this.Cn);this.Ma()},Nua:function(b,
a){var d=b.prop("id"),c=b.attr("aria-labelledby"),e=b.attr("aria-label");e?a.attr("aria-label",e):c?a.attr("aria-labelledby",c):d&&(d=$("label[for\x3d'"+d+"']"))&&(d.attr("id")?a.attr("aria-labelledby",d.attr("id")):a.attr("aria-label",$(d).text()))},Ma:function(){var b=$(this.widget()),a=this.option("title");this.zl();if(void 0!==b){this.element.attr("checked",this.option("value"));b.removeClass("oj-disabled oj-read-only oj-selected oj-hover oj-active");$(this.Cn).attr("tabindex","0");$(this.Cn).html("");
if(this.option("disabled")||this.option("readOnly"))this.option("disabled")?b.addClass("oj-disabled"):(b.addClass("oj-read-only"),$(this.Cn).html(this.uva())),$(this.Cn).removeAttr("tabindex");this.option("value")&&b.addClass("oj-selected");void 0!==a&&$(this.Cn).attr("title",a);$(this.Cn).attr("aria-checked",this.option("value"));$(this.Cn).removeAttr("aria-disabled");b.removeAttr("aria-disabled");this.iz()||$(this.Cn).attr("aria-disabled","true")}},uva:function(){var b=this.Ga.Vha;this.option("value")&&
(b=this.Ga.Wha);return this.v(b)},zl:function(){this._off(this.ao,"keydown keyup mousedown mouseup mouseleave mouseenter touchstart");this.iz()&&(this._on(this.ao,this.bwa),this._hoverable(this.ao));this._focusable(this.ao)},bwa:{keydown:function(b){if(b.which===$.ui.keyCode.ENTER||b.which===$.ui.keyCode.SPACE)$(b.currentTarget).addClass("oj-active"),b.preventDefault()},keyup:function(b){b.which!==$.ui.keyCode.ENTER&&b.which!==$.ui.keyCode.SPACE||this.Lc(!this.option("value"),b)},mousedown:function(b){1===
b.which&&$(b.currentTarget).addClass("oj-active")},mouseup:function(b){1===b.which&&this.Lc(!this.option("value"),b)},mouseleave:function(b){1===b.which&&$(b.currentTarget).removeClass("oj-active")},mouseenter:function(b){1===b.which&&$(b.currentTarget).addClass("oj-active")},zEa:function(b){this.Lc(!this.option("value"),b);b.preventDefault()}},_GetDefaultStyleClass:function(){return"oj-switch"},NDa:function(){return"switch checkbox"},_destroy:function(){this.ao.find(".oj-switch-track").remove();
b.A.unwrap(this.element);this.Mv(this.element);return this._super()},af:function(){return this.ao},_setOption:function(b,a,d){switch(b){case "disabled":case "readOnly":case "value":a=!!a;break;case "required":a=!1;break}this._super(b,a,d);this.Ma()}})})()});
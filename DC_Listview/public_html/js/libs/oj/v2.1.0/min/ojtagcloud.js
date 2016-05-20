/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
define(["ojs/ojcore","jquery","ojs/ojcomponentcore","ojs/ojdvt-base","ojs/internal-deps/dvt/DvtTagCloud"],function(b,f,a,d,c){b.Ja("oj.ojTagCloud",f.oj.dvtBaseComponent,{widgetEventPrefix:"oj",options:{optionChange:null},Fg:function(a,b,d){return c.TagCloud.newInstance(a,b,d)},Oj:function(a){var b=a.subId;"oj-tagcloud-item"==b?b="item["+a.index+"]":"oj-tagcloud-tooltip"==b&&(b="tooltip");return b},Dh:function(a){var b={};0==a.indexOf("item")?(b.subId="oj-tagcloud-item",b.index=this.oi(a)):"tooltip"==
a&&(b.subId="oj-tagcloud-tooltip");return b},Jf:function(){var a=this._super();a.push("oj-tagcloud");return a},Pj:function(){var a=this._super();a["oj-tagcloud"]={path:"styleDefaults/style",property:"CSS_TEXT_PROPERTIES"};return a},Rj:function(){return["optionChange"]},Sj:function(){var a=this.options.translations,b=this._super();b["DvtUtilBundle.TAG_CLOUD"]=a.componentName;return b},getItem:function(a){return this.ra.getAutomation().getItem(a)},getItemCount:function(){return this.ra.getAutomation().getItemCount()},
getContextByNode:function(a){return(a=this.getSubIdByNode(a))&&"oj-tagcloud-tooltip"!==a.subId?a:null},Qj:function(){return{root:["items"]}}})});
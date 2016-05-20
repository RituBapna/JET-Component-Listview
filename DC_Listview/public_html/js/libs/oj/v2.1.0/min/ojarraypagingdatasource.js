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
define(["ojs/ojcore","jquery","knockout","ojs/ojdatasource-common"],function(b,f,a){b.bc=function(a){this.data=a;this.current=0;this.Init();this.qS(10)};o_("ArrayPagingDataSource",b.bc,b);b.b.la(b.bc,b.Nk,"oj.ArrayPagingDataSource");b.bc.prototype.Init=function(){b.bc.p.Init.call(this)};b.b.g("ArrayPagingDataSource.prototype.Init",{Init:b.bc.prototype.Init});b.bc.prototype.EP=function(){return this.IA()?this.Mo:this.totalSize()-this.current};b.bc.prototype.Ht=function(a){a=a||{};this.$g=Array(this.EP());
for(var b=0;b<this.$g.length;b++)this.$g[b]=this.data[this.current+b];this.BB();this.ak=this.fa+this.$g.length-1;a.silent||this.handleEvent("sync",{data:this.$g,startIndex:this.current})};b.bc.prototype.BB=function(){if(void 0!==this.Ul){this.Ul.removeAll();for(var a=0;a<this.$g.length;a++)this.Ul.push(this.$g[a])}};b.bc.prototype.handleEvent=function(a,c){return b.bc.p.handleEvent.call(this,a,c)};b.bc.prototype.Wo=function(){return this.$g};b.b.g("ArrayPagingDataSource.prototype.getWindow",{Wo:b.bc.prototype.Wo});
b.bc.prototype.DC=function(){void 0===this.Ul&&(this.Ul=a.observableArray(),this.BB());return this.Ul};b.b.g("ArrayPagingDataSource.prototype.getWindowObservable",{DC:b.bc.prototype.DC});b.bc.prototype.getPage=function(){return this.Hd};b.b.g("ArrayPagingDataSource.prototype.getPage",{getPage:b.bc.prototype.getPage});b.bc.prototype.setPage=function(a,c){c=c||{};a=parseInt(a,10);try{b.bc.p.handleEvent.call(this,b.Bc.N.BEFOREPAGE,{page:a,previousPage:this.Hd})}catch(e){return Promise.reject(null)}this.pageSize=
null!=c.pageSize?c.pageSize:this.pageSize;c.startIndex=a*this.pageSize;var f=this.Hd;this.Hd=a;this.fa=c.startIndex;var h=this;return new Promise(function(a,d){h.Lf(c).then(function(){b.bc.p.handleEvent.call(h,b.Bc.N.PAGE,{page:h.Hd,previousPage:f});a(null)},function(){h.Hd=f;h.fa=h.Hd*h.pageSize;d(null)})})};b.b.g("ArrayPagingDataSource.prototype.setPage",{setPage:b.bc.prototype.setPage});b.bc.prototype.getStartItemIndex=function(){return this.fa};b.b.g("ArrayPagingDataSource.prototype.getStartItemIndex",
{getStartItemIndex:b.bc.prototype.getStartItemIndex});b.bc.prototype.getEndItemIndex=function(){return this.ak};b.b.g("ArrayPagingDataSource.prototype.getEndItemIndex",{getEndItemIndex:b.bc.prototype.getEndItemIndex});b.bc.prototype.getPageCount=function(){var a=this.totalSize();return-1==a?-1:Math.ceil(a/this.pageSize)};b.b.g("ArrayPagingDataSource.prototype.getPageCount",{getPageCount:b.bc.prototype.getPageCount});b.bc.prototype.fetch=function(a){a=a||{};if(void 0!==a.pageSize&&void 0!==a.startIndex){if(!this.IA())return Promise.resolve();
this.Mo=a.startIndex+a.pageSize}this.Ht(null);return Promise.resolve()};b.b.g("ArrayPagingDataSource.prototype.fetch",{fetch:b.bc.prototype.fetch});b.bc.prototype.Lf=function(a){var b=a||{};void 0!==b.startIndex&&(this.current=b.startIndex);void 0!==b.pageSize&&(this.Mo=this.pageSize=b.pageSize);this.Ht(a);return Promise.resolve({data:this.$g,startIndex:this.current})};b.bc.prototype.IA=function(){return this.current+this.Mo<this.totalSize()};b.bc.prototype.qS=function(a){this.Mo=this.pageSize=a;
this.Ht(null)};b.bc.prototype.totalSize=function(){return this.data.length};b.bc.prototype.totalSizeConfidence=function(){return"actual"};b.b.g("ArrayPagingDataSource.prototype.totalSizeConfidence",{totalSizeConfidence:b.bc.prototype.totalSizeConfidence});b.bc.prototype.getCapability=function(){return null};b.b.g("ArrayPagingDataSource.prototype.getCapability",{getCapability:b.bc.prototype.getCapability})});
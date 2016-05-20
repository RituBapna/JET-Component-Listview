/**
 * Copyright (c) 2014, 2015, Oracle and/or its affiliates.
 * All rights reserved.
 */
"use strict";
define(["ojs/ojcore","jquery","hammerjs"],function(b,f,a){a?(f.fn.Zk=function(b){return"instance"==b?this.data("ojHammer"):this.each(function(){var c=f(this);c.data("ojHammer")||c.data("ojHammer",new a.Manager(c[0],b))})},o_("$.fn.ojHammer",f.fn.Zk,void 0),a.Manager.prototype.emit=function(a){return function(b,e){a.call(this,b,e);f(this.element).trigger({type:b,gesture:e})}}(a.Manager.prototype.emit)):b.r.warn("Hammer jQuery extension loaded without Hammer.")});
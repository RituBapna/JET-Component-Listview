/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
/*
 jQuery UI Touch Punch 0.2.3

 Copyright 2011-2014, Dave Furfero
 Dual licensed under the MIT or GPL Version 2 licenses.
*/
define(["ojs/ojcore","jquery"],function(b,f){b.Kf=function(a){this._init(a)};b.Kf.prototype._init=function(a){this.cd=a;this.hI=this.XB=!1;this.jI=f.proxy(this.twa,this);this.VB=f.proxy(this.qwa,this);this.LS=f.proxy(this.rwa,this);this.cd.on({touchstart:this.jI,touchend:this.VB,touchmove:this.LS,touchcancel:this.VB})};b.Kf.prototype._destroy=function(){this.cd&&this.jI&&(this.cd.off({touchstart:this.jI,touchmove:this.LS,touchend:this.VB,touchcancel:this.VB}),this.LS=this.VB=this.jI=void 0)};b.Kf.prototype.Tt=
function(a,b){if(!(1<a.originalEvent.touches.length)){"touchstart"!=a.type&&"touchend"!=a.type&&a.preventDefault();var c=a.originalEvent.changedTouches[0],e=document.createEvent("MouseEvent");e.initMouseEvent(b,!0,!0,window,1,c.screenX,c.screenY,c.clientX,c.clientY,!1,!1,!1,!1,0,null);c.target.dispatchEvent(e)}};b.Kf.prototype.twa=function(a){this.XB||(this.XB=!0,this.hI=!1,this.Tt(a,"mouseover"),this.Tt(a,"mousemove"),this.Tt(a,"mousedown"))};b.Kf.prototype.rwa=function(a){this.XB&&(this.hI=!0,this.Tt(a,
"mousemove"))};b.Kf.prototype.qwa=function(a){this.XB&&(this.Tt(a,"mouseup"),this.Tt(a,"mouseout"),this.hI||"touchend"!=a.type||this.Tt(a,"click"),this.XB=!1)};b.Kf.JE="_ojTouchProxy";b.Kf.P9=function(a){a=f(a);var d=a.data(b.Kf.JE);d||(d=new b.Kf(a),a.data(b.Kf.JE,d));return d};b.Kf.gda=function(a){a=f(a);var d=a.data(b.Kf.JE);d&&(d._destroy(),a.removeData(b.Kf.JE))}});
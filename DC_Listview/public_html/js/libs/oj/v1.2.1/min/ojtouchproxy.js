/**
 * Copyright (c) 2014, 2015, Oracle and/or its affiliates.
 * All rights reserved.
 */
"use strict";
/*
 jQuery UI Touch Punch 0.2.3

 Copyright 2011-2014, Dave Furfero
 Dual licensed under the MIT or GPL Version 2 licenses.
*/
define(["ojs/ojcore","jquery"],function(b,f){b.ze=function(a){this._init(a)};b.ze.prototype._init=function(a){this.pc=a;this.jD=this.Ux=!1;this.lD=f.proxy(this.Ala,this);this.Sx=f.proxy(this.yla,this);this.TL=f.proxy(this.zla,this);this.pc.on({touchstart:this.lD,touchend:this.Sx,touchmove:this.TL,touchcancel:this.Sx})};b.ze.prototype._destroy=function(){this.pc&&this.lD&&(this.pc.off({touchstart:this.lD,touchmove:this.TL,touchend:this.Sx,touchcancel:this.Sx}),this.TL=this.Sx=this.lD=void 0)};b.ze.prototype.Oq=
function(a,b){if(!(1<a.originalEvent.touches.length)){"touchstart"!=a.type&&"touchend"!=a.type&&a.preventDefault();var c=a.originalEvent.changedTouches[0],e=document.createEvent("MouseEvent");e.initMouseEvent(b,!0,!0,window,1,c.screenX,c.screenY,c.clientX,c.clientY,!1,!1,!1,!1,0,null);c.target.dispatchEvent(e)}};b.ze.prototype.Ala=function(a){this.Ux||(this.Ux=!0,this.jD=!1,this.Oq(a,"mouseover"),this.Oq(a,"mousemove"),this.Oq(a,"mousedown"))};b.ze.prototype.zla=function(a){this.Ux&&(this.jD=!0,this.Oq(a,
"mousemove"))};b.ze.prototype.yla=function(a){this.Ux&&(this.Oq(a,"mouseup"),this.Oq(a,"mouseout"),this.jD||"touchend"!=a.type||this.Oq(a,"click"),this.Ux=!1)};b.ze.eA="_ojTouchProxy";b.ze.b1=function(a){a=f(a);var d=a.data(b.ze.eA);d||(d=new b.ze(a),a.data(b.ze.eA,d));return d};b.ze.v4=function(a){a=f(a);var d=a.data(b.ze.eA);d&&(d._destroy(),a.removeData(b.ze.eA))}});
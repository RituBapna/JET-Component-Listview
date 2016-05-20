/**
 * Copyright (c) 2014, 2015, Oracle and/or its affiliates.
 * All rights reserved.
 */
"use strict";
define(["ojs/ojcore","jquery","hammerjs","promise","ojs/ojjquery-hammer","ojs/ojoffcanvas"],function(b,f){b.kv={};o_("SwipeToRevealUtils",b.kv,b);b.kv.Dpa=function(a,d){var c,e,g,h,k,l,m,n,p,r;c=f(a);c.hasClass("oj-swipetoreveal")||(c.addClass("oj-swipetoreveal"),e=c.hasClass("oj-offcanvas-start")?"end":"start",g={},g.selector=c,b.o.O4(g),h=b.o.Cw(c),null!=d&&(k=d.threshold),null!=k?(k=parseInt(k,10),/%$/.test(d.threshold)&&(k=k/100*h.outerWidth())):k=.55*h.outerWidth(),l=Math.min(.3*h.outerWidth(),
c.outerWidth()),c.on("ojpanstart",function(a,b){b.direction!=e?a.preventDefault():(c.children().addClass("oj-swipetoreveal-action"),p=c.children(".oj-swipetoreveal-default").get(0),n=(new Date).getTime())}).on("ojpanmove",function(a,b){null!=p&&(b.distance>k?c.children().each(function(){this!=p&&f(this).addClass("oj-swipetoreveal-hide-when-full")}):c.children().removeClass("oj-swipetoreveal-hide-when-full"))}).on("ojpanend",function(a,b){r=b.distance;null!=p&&r>k&&(m=f.Event("ojdefaultaction"),c.trigger(m,
g),a.preventDefault());r<l&&(200<(new Date).getTime()-n||10>r)&&a.preventDefault()}))};o_("SwipeToRevealUtils.setupSwipeActions",b.kv.Dpa,b);b.kv.Rpa=function(a){var d={};d.selector=f(a);b.o.b5(d)};o_("SwipeToRevealUtils.tearDownSwipeActions",b.kv.Rpa,b)});
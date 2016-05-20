/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
define(['./DvtToolkit'], function(dvt) {
  // Internal use only.  All APIs and functionality are subject to change at any time.

var l=void 0,n=!0,s=null,t=!1;function aa(){return function(a){return a}}function y(){return function(){}}function z(a){return function(b){this[a]=b}}function D(a){return function(){return this[a]}}function F(a){return function(){return a}}var J;function ba(a,b){0==a.indexOf("dvt.")&&(a=a.substring(4));var c=a.split("."),d=eval("dvt");!(c[0]in d)&&d.execScript&&d.execScript("var "+c[0]);for(var e;c.length&&(e=c.shift());)!c.length&&b!==l?d[e]=b:d=d[e]?d[e]:d[e]={}}Math.floor(2147483648*Math.random()).toString(36);
(function(){function a(b){this.Init(a.je);this.type=this.Td();this.io=b}function b(){this.Init({skyros:b.uE,alta:b.Hh})}function c(a,b){this.Init(a,b)}function d(a,b,c){this.Init(a,b,c)}function e(a,b,c,d){this.Init(a,b,c,d)}function f(a,b){this.Init();this.mc=a;this.AW=t;this.aj=b}function h(a,b,c,d){this.Init(b,c,d);this.sq=a}dvt.g1=y();dvt.j.u(dvt.g1,dvt.j);dvt.g1.prototype.get=y();dvt.sP=function(){this.mZ=[]};dvt.j.u(dvt.sP,dvt.g1);dvt.sP.prototype.add=function(a,b,c){this.mZ.push({group:a,B9a:b,
ypa:c})};dvt.sP.prototype.get=function(a){if(a===s)return s;for(var b=0;b<this.mZ.length;b++)if(this.mZ[b].group==a)return this.mZ[b].ypa;return s};dvt.sP.prototype.g8a=function(){return this.mZ.slice(0)};dvt.WG=function(a,b,c,d,e){this.Ym=a;this.Bn=b;this.E0a=c?c:this.Ym;this.B0a=d?d:this.Bn;this.eZ=e;this.QEa=this.Bn-this.Ym};dvt.j.u(dvt.WG,dvt.g1);dvt.WG.prototype.get=function(a){if(isNaN(a)||a===s)return s;a=0<this.QEa?(a-this.Ym)/this.QEa:0.5;a=Math.max(Math.min(a,1),0);a*=this.eZ.length-1;return a===
Math.round(a)?this.eZ[a]:this.jXa(this.eZ[Math.floor(a)],this.eZ[Math.ceil(a)],a-Math.floor(a))};dvt.WG.prototype.vJa=function(){return this.eZ.slice(0)};dvt.WG.prototype.I_=D("E0a");dvt.WG.prototype.jXa=function(a,b,c){return dvt.H.i0(a,b,c)};dvt.bk=y();dvt.j.u(dvt.bk,dvt.j);dvt.bk.fUa=0.4;dvt.bk.Iwa=1;dvt.bk.Kwa=50;dvt.bk.Jwa=10;dvt.bk.Kea=5;dvt.bk.dUa=11;dvt.bk.exa="#636363";dvt.bk.yeb="#333333";dvt.bk.Wpa=function(a,b,c,d,e,f,h){var k=s;f&&(f instanceof dvt.WG?k=dvt.bk.X1a(a,b,c,d,f,h):f instanceof
dvt.sP&&(k=dvt.bk.Y1a(a,c,d,e,f,h)));return k};dvt.bk.X1a=function(a,b,c,d,e,f){var h=dvt.o.$(a),k=dvt.bk.Jwa/2+dvt.bk.Iwa,m=new dvt.ca(a);c.k(m);c=e.I_();var C=new dvt.ba(a,c,0,k);C.zb(f.bB);C.Mh();m.k(C);var E=new dvt.ka(a,0,dvt.bk.Iwa,dvt.bk.Kwa,dvt.bk.Jwa),H=h?e.vJa().slice().reverse():e.vJa();E.ga(new dvt.Mc(0,H));f.borderColor&&E.Kb(f.borderColor);m.k(E);H=dvt.bk.Kwa+dvt.bk.Kea;e=e.B0a;a=new dvt.ba(a,e,0,k);a.zb(f.bB);a.Mh();m.k(a);h?(f=a.Oc().a+dvt.bk.Kea,E.Z(f),C.Ia(f+H)):(f=C.Oc().a+dvt.bk.Kea,
E.Z(f),a.Ia(f+H));b.qb(E,new dvt.gi(c+" - "+e));m.V().a>d&&(m.removeChild(C),m.removeChild(a),E.Z(0));return m};dvt.bk.Y1a=function(a,b,c,d,e,f){var h=new dvt.ca(a);b.k(h);b=[];e=e.g8a();for(var k=0;k<e.length;k++){var m=e[k];b.push({text:m.B9a,color:m.ypa.color,pattern:m.ypa.pattern,borderColor:f.borderColor})}f={sections:[{items:b}],orientation:"horizontal",layout:{outerGapWidth:0,outerGapHeight:0},textStyle:f.bB.toString()};b=dvt.pf.newInstance(a);b.setId(s);h.k(b);d=b.Yr(f,c,d*dvt.bk.fUa);b.ua(f,
c,d.b);c=b.IA();a=new dvt.ka(a,0,0,c.a,d.b);a.gc();h.Fb(a,0);return h};dvt.BK=function(a){this.Init(dvt.BK.je);this.mc=a};dvt.j.u(dvt.BK,dvt.hg);dvt.BK.je="breadcrumbsDrill";dvt.BK.prototype.getId=D("mc");dvt.sp=function(a,b,c,d){this.Init(a,b,c,d)};dvt.j.u(dvt.sp,dvt.ca);dvt.sp.prototype.Init=function(a,b,c,d){dvt.sp.q.Init.call(this,a);this.Zbb(d);this.kc=new h(this,a,b,c);this.kc.Bg(this);this.setId("breadcrumbs1000"+Math.floor(1E9*Math.random()));this.iI=-1;this.Tga=this.bja=s};dvt.sp.prototype.Zbb=
function(a){this.eg=k.cn(a)};dvt.sp.prototype.ua=function(a,b){this.Sb=a?dvt.Ac.Ca(a):this.Sb;this.Dm();this.Fva(s);m.ua(this,this,b)};dvt.sp.prototype.Ixa=function(){return this.Sb?this.Sb:{}};dvt.sp.prototype.Ua=D("kc");dvt.sp.prototype.Md=function(){var a=this.iI;this.iI=-1;this.SF(a,this.iI)};dvt.sp.prototype.Ccb=function(a){var b=this.iI;this.iI=this.$Za(b,!a);this.SF(b,this.iI);return this.iI};dvt.sp.prototype.$Za=function(a,b){return-1==a?b?0:this.Sb.kp.length-2:b?a==this.Sb.kp.length-2?-1:
++a:0==a?-1:--a};dvt.sp.prototype.SF=function(a,b){var c=this.bja,d=s,e=this.q_(b);if(e){var f=this.kc.bb(e);f&&f.Gj&&f.Gj()?(d=this.g(),f=e.V(),e=e.kb(),this.bja=d=new dvt.zl(d,this,f,e)):this.bja=s}c&&c.fs();d&&d.show()};dvt.sp.prototype.q_=function(a){var b=this.Tga;return 0>a||!b||a>=b.length?s:b[a]};dvt.sp.prototype.pIa=function(a){for(var b=this.Tga,c=0;c<b.length;c++)if(b[c]==a)return c};dvt.sp.prototype.Fva=z("Tga");var k={};dvt.j.u(k,dvt.j);k.uE={labelStyle:"font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 11px; color: #003286;",
disabledLabelStyle:"font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 11px;",F3:2,DVa:"\x3e"};k.cn=function(a){var b=k.Qha(a);return a?dvt.Ac.We(a,b):b};k.Qha=function(){return dvt.Ac.Ca(k.uE)};k.xh=function(a,b){return Math.ceil(b*a.layout.gapRatio)};dvt.j.u(h,dvt.K);h.prototype.oj=function(a){h.q.oj.call(this,a);this.Dka(this.bb(a.target))};h.prototype.Hv=function(a){this.Dka(this.bb(a.target))};h.prototype.Dka=function(a){a&&(a instanceof f&&a.Gj())&&(a=new dvt.BK(a.getId()),
this.Ck(a,this.sq))};h.prototype.pv=function(a){var b=n,c=a.keyCode;c==dvt.G.Sh?(c=this.sq.Ccb(a.shiftKey),-1==c?b=t:this.PB(this.sq.q_(c))):c==dvt.G.vi&&this.Dka(this.bb(this.sq.q_(this.sq.iI)));b&&dvt.K.oc(a);return b};dvt.j.u(f,dvt.gi);f.prototype.getId=D("mc");f.prototype.Gj=D("AW");f.prototype.rqa=z("AW");f.prototype.Pa=D("aj");var m={};dvt.j.u(m,dvt.j);m.OH=3;m.ua=function(a,b,c){for(var d=a.g(),e=a.Ixa().kp?a.Ixa().kp:[],h=a.eg,k=a.Ua(),B=[],A=[],C=0;C<e.length;C++){var E=e[C];if(E){var H=
m.SL(d,E.label?E.label:"",h,C<e.length-1);B.push(H);E=new f(E.id,H);k.qb(H,E);A.push(E);C<e.length-1&&E.rqa(n)}}a.Fva(B);dvt.o.$(d)?m.B1a(a,b,c,B,A):m.A1a(a,b,c,B,A)};m.a5=function(a,b,c){b=new dvt.ba(a,b,0,0);b.ab(t);b.zb(c);var d=c.qh(dvt.e.Lv),e=c.qh(dvt.e.jr),f=c.qh(dvt.e.Kv),h=c.qh(dvt.e.Ds),k=dvt.ig.wm(a,b);a=new dvt.ka(a,0,0,k.a+h+e,k.b+d+f);a.gc();a.zb(c);b.Fa(h,d);a.k(b);return a};m.SL=function(a,b,c,d){if(d&&(c.kpa||c.jpa)){var e=new dvt.e(c.bB);d=new dvt.e(c.kpa);c=new dvt.e(c.jpa);e=m.a5(a,
b,e);d=m.a5(a,b,d);c=m.a5(a,b,c);a=new dvt.aa(a,e,d,c);a.Pf("link");a.zd("label",b)}else d=new dvt.e(d?c.bB:c.EHa),d.qh(dvt.e.Ds)||d.qh(dvt.e.jr)||d.qh(dvt.e.Lv)||d.qh(dvt.e.Kv)?a=m.a5(a,b,d):(a=new dvt.ba(a,b,0,0),a.zb(d));return a};m.dBa=function(a){if(a instanceof dvt.aa)return a=a.rp.Ya(0),a.vf();a instanceof dvt.ka&&(a=a.Ya(0));return a.vf()};m.wGa=function(a,b){if(a instanceof dvt.aa){var c=a.rp.Ya(0);dvt.Aa.pd(c,Math.max(b-c.la(),0),Infinity,c.getParent());c=a.Cm.Ya(0);dvt.Aa.pd(c,Math.max(b-
c.la(),0),Infinity,c.getParent());c=a.am.Ya(0);dvt.Aa.pd(c,Math.max(b-c.la(),0),Infinity,c.getParent())}else a instanceof dvt.ka?(c=a.Ya(0),dvt.Aa.pd(c,Math.max(b-c.la(),0),Infinity,c.getParent())):dvt.Aa.pd(a,b,Infinity,a.getParent())};m.A1a=function(a,b,c,d,e){for(var f=a.eg,h=a.Ua(),k=[],A=0,C=0;C<d.length;C++){b.k(d[C]);var E=d[C].V();k[C]=E;A=Math.max(E.b,A);b.removeChild(d[C])}for(var H=0,C=0;C<d.length;C++){b.k(d[C]);E=k[C];d[C].Fa(H,0.5*(A-E.b));if(dvt.o.Ta()){var G=new dvt.ka(b.g(),-m.OH,
-m.OH,E.a+2*m.OH,E.b+2*m.OH);G.gc();d[C].k(G);C<e.length&&h.qb(G,e[C])}if(H+E.a>c){a=m.dBa(d[C]);m.wGa(d[C],c-H);C<e.length?e[C].Hm(a):h.qb(d[C],new dvt.gi(a));break}else H+=E.a+f.F3;if(C<d.length-1){E=m.vDa(a);b.k(E);G=E.V();E.Fa(H,0.5*(A-G.b));G=G.a;if(H+G>c){b.removeChild(E);break}H+=G+f.F3}}};m.B1a=function(a,b,c,d,e){for(var f=a.eg,h=a.Ua(),k=0;k<d.length;k++){b.k(d[k]);var A=d[k].V();if(dvt.o.Ta()){var C=new dvt.ka(b.g(),-m.OH,-m.OH,A.a+2*m.OH,A.b+2*m.OH);C.gc();d[k].k(C);k<e.length&&h.qb(C,
e[k])}if(0>c-A.a){a=m.dBa(d[k]);m.wGa(d[k],c);d[k].Z(0);k<e.length?e[k].Hm(a):h.qb(d[k],new dvt.gi(a));break}else d[k].Z(c-A.a),c-=A.a+f.F3;if(k<d.length-1)if(A=m.vDa(a),b.k(A),C=A.V().a,0>c-C){b.removeChild(A);break}else A.Z(c-C),c-=C+f.F3}};m.vDa=function(a){var b=a.eg;a=new dvt.ba(a.g(),b.DVa,0,0);a.zb(new dvt.e(b.bB));return a};dvt.lr=function(a,b){this.Init(dvt.lr.je);this.Lr=a;this.IVa=b};dvt.j.u(dvt.lr,dvt.hg);dvt.lr.je="dvtPanelDrawerEvent";dvt.lr.SP="hide";dvt.lr.BH="show";dvt.lr.prototype.dn=
D("Lr");dvt.Y=function(a,b,c,d){this.Init(a,b,c,d)};dvt.j.u(dvt.Y,dvt.ca);dvt.Y.pz="left";dvt.Y.tp="right";dvt.Y.J1="top";dvt.Y.iV="bottom";dvt.Y.Sea=15;dvt.Y.Uea=0;dvt.Y.dk=42;dvt.Y.jVa=2;dvt.Y.GSa="#ffffff";dvt.Y.t3="#bbc7d0";dvt.Y.s3=0.25;dvt.Y.QB=10;dvt.Y.DSa=1;dvt.Y.Hea=1;dvt.Y.ESa=1;dvt.Y.aQ=1;dvt.Y.JSa=1;dvt.Y.hVa="#dee4e7";dvt.Y.iVa="#c1cede";dvt.Y.bQ=1.25;dvt.Y.seb="alta";dvt.Y.hh=24;dvt.Y.LV="legend";dvt.Y.E2="palette";dvt.Y.aL="search";dvt.Y.MV="overview";dvt.Y.AQa="searchEna";dvt.Y.BQa=
"searchOvr";dvt.Y.zQa="searchDwn";dvt.Y.ceb="searchTip";dvt.Y.xQa="paletteEna";dvt.Y.yQa="paletteOvr";dvt.Y.wQa="paletteDwn";dvt.Y.beb="paletteTip";dvt.Y.Cua="legendEna";dvt.Y.Dua="legendOvr";dvt.Y.Bua="legendDwn";dvt.Y.$db="legendTip";dvt.Y.uQa="overviewEna";dvt.Y.vQa="overviewOvr";dvt.Y.tQa="overviewDwn";dvt.Y.aeb="overviewTip";dvt.Y.AK="backgroundAlpha";dvt.Y.b3="tab-color-inactive";dvt.Y.gea="tab-border-color-inactive";dvt.Y.prototype.Init=function(a,b,e,f){dvt.Y.q.Init.call(this,a,s,"panelDrawer"+
f);this.u3a=f;this.Ra=new d(a,b,e);this.Ra.Bg(this);this.Ra.$F(dvt.Y);this.Ra.qb(this,this);dvt.o.Ta()||this.Ra.ns(new c(this.Ra,this));this.sc=b;this.fb=e;this.WY={};this.ww=[];this.Sl=this.Nk=Number.MAX_VALUE;this.sw=5;this.nY=0;this.oX;this.AF;this.xu=this.lm=t;this.Ja;this.kQ;this.ji;this.zga;this.Wm;this.xn;this.XC={};this.kI=dvt.Y.pz;this.$L=dvt.Y.J1;this.oF=t;this.Ea=s;e&&(this.Ea=e.Mw());this.Fp=dvt.Qa.I(this.Ea,dvt.Y.AK,dvt.Y.DSa);this.Px=dvt.Qa.I(this.Ea,dvt.e.pb,dvt.Y.t3);this.hl=parseInt(dvt.Qa.I(this.Ea,
dvt.e.Gg,dvt.Y.jVa));this.QE=dvt.Qa.I(this.Ea,dvt.e.Gb,dvt.Y.GSa);this.Eya=dvt.Qa.I(this.Ea,dvt.Y.b3,dvt.Y.hVa);this.Fya=dvt.Qa.I(this.Ea,dvt.Y.gea,dvt.Y.iVa);this.Ad();this.Zv=dvt.Y.QB};dvt.Y.prototype.cT=function(a,b,c,d,e,f){this.WY[f]={panel:a,iconUp:b,iconOver:c,iconDown:d,tooltip:e};this.ww.push(f);this.nY=dvt.Y.Sea+this.ww.length*(dvt.Y.dk+dvt.Y.Uea)};dvt.Y.prototype.Nbb=z("oF");dvt.Y.prototype.hz=z("Nk");dvt.Y.prototype.Hbb=function(){this.Zv=0};dvt.Y.prototype.H_=function(){return this.Nk-
2*this.Zv};dvt.Y.prototype.P0=z("Sl");dvt.Y.prototype.AT=function(){return this.Sl-2*this.Zv};dvt.Y.prototype.saa=function(){this.kI=dvt.Y.tp};dvt.Y.prototype.yLa=z("$L");dvt.Y.prototype.tV=function(a){return this.WY[a].panel};dvt.Y.prototype.rV=function(a){return this.WY[a].icon};dvt.Y.prototype.Xsa=function(a){return this.WY[a].tooltip};dvt.Y.prototype.OK=function(a){return this.XC[a]};dvt.Y.prototype.H0=function(a,b,c){this.AF=this.oX;this.oX=a;this.Pb()&&(this.YU(),this.wra(a,b,c));this.AF=s};
dvt.Y.prototype.lD=function(){var a=this.oX;return!a&&0<this.ww.length?this.ww[0]:a};dvt.Y.prototype.Oh=function(a,b,c){if(!this.xu){var d=this.lm;this.lm=a;d!=a&&(this.xu=n,a?this.XNa(b,c):this.WNa(b,c))}};dvt.Y.prototype.Pb=D("lm");dvt.Y.prototype.tv=function(){this.Ja||(this.Ja=new dvt.ca(this.g(),"pd_contentPane"),this.k(this.Ja),this.kQ=new dvt.ca(this.g(),"pdcp_activeContent"),this.Ja.k(this.kQ));this.YQa()};dvt.Y.prototype.YQa=function(){if(!this.oF){var a=-dvt.Y.dk;this.kI==dvt.Y.tp&&(a=0);
var b=dvt.Y.Sea;if(this.$L==dvt.Y.J1)for(var c=0;c<this.ww.length;c++){var d=this.ww[c],d=this.fva(d);d.Fa(a,b);b+=dvt.Y.dk+dvt.Y.Uea}else if(this.$L==dvt.Y.iV){b=-dvt.Y.Sea-dvt.Y.dk;for(c=this.ww.length-1;0<=c;c--)d=this.ww[c],d=this.fva(d),d.Fa(a,b),b-=dvt.Y.dk+dvt.Y.Uea}}};dvt.Y.prototype.JOa=function(){var a;switch(this.kI){case dvt.Y.tp:a=["M",0,0,"L",dvt.Y.dk-this.hl,0,"A",this.hl,this.hl,0,0,1,dvt.Y.dk,this.hl,"L",dvt.Y.dk,dvt.Y.dk-this.hl,"A",this.hl,this.hl,0,0,1,dvt.Y.dk-this.hl,dvt.Y.dk,
"L",0,dvt.Y.dk];break;default:a=["M",dvt.Y.dk,0,"L",this.hl,0,"A",this.hl,this.hl,0,0,0,0,this.hl,"L",0,dvt.Y.dk-this.hl,"A",this.hl,this.hl,0,0,0,this.hl,dvt.Y.dk,"L",dvt.Y.dk,dvt.Y.dk]}return a};dvt.Y.prototype.fva=function(a){var b=this.JOa(),c=new e(this.g(),b,a,this);c.Ad();c.setCursor("pointer");this.Ja.Fb(c,0);c.eb(this.Eya,this.Fp);c.Kb(this.Fya,dvt.Y.aQ,1);var d=this.WY[a],f=new dvt.nb(this.g(),b);f.gc();d.iconUp.Fa(0.5*(dvt.Y.dk-dvt.Y.hh),0.5*(dvt.Y.dk-dvt.Y.hh));f.k(d.iconUp);var h=new dvt.nb(this.g(),
b);h.gc();d.iconOver.Fa(0.5*(dvt.Y.dk-dvt.Y.hh),0.5*(dvt.Y.dk-dvt.Y.hh));h.k(d.iconOver);b=new dvt.nb(this.g(),b);b.gc();d.iconDown.Fa(0.5*(dvt.Y.dk-dvt.Y.hh),0.5*(dvt.Y.dk-dvt.Y.hh));b.k(d.iconDown);f=new dvt.aa(this.g(),f,h,b);f.W0();d.icon=f;c.k(f);this.XC[a]=c;var k=this;this.Ra.qb(c,{Ig:function(){k.hPa(a)},Zh:function(){return k.Xsa(a)}});c.$u();return c};dvt.Y.prototype.hPa=function(a){function b(){var a=d.g().fg();a&&a.he()}this.AF=this.lD();this.oX=a;var c=this.OK(a).Od(),d=this;this.Pb()?
this.AF==a?this.Oh(t,t,b):(this.YU(),this.wra(a,t)):(this.Oh(n,t,b),this.zK());this.AF=s;this.te(new dvt.lr(this.Pb()?dvt.lr.BH:dvt.lr.SP,this.oX));c&&this.g().qaa(this)};dvt.Y.prototype.wra=function(a,b,c){var d=s;b||(d=new dvt.B(this.g(),dvt.Y.s3));this.AF&&(b=this.tV(this.AF))&&this.Xx.removeChild(b);this.Qra(a,d);d?(this.zK(),c&&dvt.$a.Ib(d,c),d.play()):c&&c()};dvt.Y.prototype.XNa=function(a,b){this.Qra(this.lD());var c=-(1/dvt.Y.bQ*this.ji.getWidth());this.kI==dvt.Y.tp&&(c=-c,this.ji.Ia((1/dvt.Y.bQ-
1)*this.ji.getWidth()));if(a)this.Ja.Z(c),b&&b(),this.xu=t;else{var d=new dvt.B(this.g(),dvt.Y.s3);d.mp(dvt.of.RZ);d.J(dvt.B.Q,this.Ja,this.Ja.la,this.Ja.Z,c);b&&dvt.$a.Ib(d,b);if(d){var e=this;dvt.$a.Ib(d,function(){e.xu=t});d.play()}}this.YU()};dvt.Y.prototype.WNa=function(a,b){if(a)this.Ja.Z(0),this.bva(),b&&b(),this.YU(),this.xu=t;else{var c=new dvt.B(this.g(),dvt.Y.s3);c.mp(dvt.of.Ama);c.J(dvt.B.Q,this.Ja,this.Ja.la,this.Ja.Z,0);dvt.$a.Ib(c,this.bva,this);dvt.$a.Ib(c,this.YU,this);b&&dvt.$a.Ib(c,
b);var d=this;dvt.$a.Ib(c,function(){d.xu=t});c.play()}};dvt.Y.prototype.bva=function(){this.ji&&(this.zga=s,this.Xx.Dm(),this.kQ.kU(),this.ji.ra(),this.kQ.removeChild(this.ji),this.xn=this.Wm=this.Xx=this.ji=s)};dvt.Y.prototype.Qra=function(a,b){this.ji||(this.ji=new dvt.ka(this.g(),0,0,1,1,"pdcp_expandedContent"),this.kQ.k(this.ji),this.ji.eb(this.QE,this.Fp),this.Xx=new dvt.ca(this.za),this.ji.k(this.Xx),this.Xx.Fa(this.Zv,this.Zv));var c=this.tV(a);if(c){this.Xx.k(c);if(this.AF){var d=this.tV(this.AF);
d&&d.Zb(dvt.Pm.uH,this.sta,t,this)}c.Va(dvt.Pm.uH,this.sta,t,this)}this.Wm||(this.Wm=new dvt.nb(this.g(),["M",0,0,"L",1,1],"pdcp_expandedBorder"),this.xn=new dvt.nb(this.g(),["M",0,0,"L",1,1],"pdcp_expandedBorderResizable"),this.ji.k(this.Wm),this.ji.k(this.xn),this.Wm.Kb(this.Px,dvt.Y.aQ),this.Wm.ga(s),this.xn.Kb(this.Px,dvt.Y.aQ),this.xn.ga(s),this.Wm.Ad(),this.xn.Ad());this.VQa(a,b)};dvt.Y.prototype.sta=function(a){var b=new dvt.B(this.g(),dvt.Y.s3),c=a.getWidth(),d=a.getHeight(),c=this.Msa(c),
d=this.aca(d),e=a.Sa()?a.Sa():0;a=a.Za()?a.Za():0;this.UEa(this.lD(),b,c,d,e,a);b.play()};dvt.Y.prototype.VQa=function(a,b){var c=this.tV(a),d=2*this.Zv,e=2*this.Zv,f=0,h=0;c&&(c=c.IA?c.IA():c.Wp(),d=this.Msa(c.a),e=this.aca(c.b),f=c.x,h=c.y);this.UEa(a,b,d,e,f,h)};dvt.Y.prototype.UEa=function(a,b,c,d,e,f){var h=this.tV(a);b?b.J(dvt.B.Q,h,h.la,h.Z,-e):h.Z(-e);b?b.J(dvt.B.Q,h,h.ia,h.ma,-f):h.ma(-f);e=new dvt.U(this.Zv,this.Zv,c-2*this.Zv,d-2*this.Zv);f=dvt.Y.bQ*c;b?(b.J(dvt.B.Q,this.ji,this.ji.getWidth,
this.ji.Xa,f),b.J(dvt.B.Q,this.ji,this.ji.getHeight,this.ji.rb,d),b.J(dvt.B.zz,this,this.iZa,this.CFa,e),this.kI==dvt.Y.pz?b.J(dvt.B.Q,this.Ja,this.Ja.la,this.Ja.Z,-c):this.kI==dvt.Y.tp&&(b.J(dvt.B.Q,this.Ja,this.Ja.la,this.Ja.Z,c),b.J(dvt.B.Q,this.Wm,this.Wm.la,this.Wm.Z,c),b.J(dvt.B.Q,this.xn,this.xn.la,this.xn.Z,c),b.J(dvt.B.Q,this.ji,this.ji.la,this.ji.Z,-c)),this.$L==dvt.Y.iV&&(b.J(dvt.B.Q,this.Wm,this.Wm.ia,this.Wm.ma,d),b.J(dvt.B.Q,this.xn,this.xn.ia,this.xn.ma,d),b.J(dvt.B.Q,this.ji,this.ji.ia,
this.ji.ma,-d))):(this.ji.Xa(f),this.ji.rb(d),this.kI==dvt.Y.tp&&(this.ji.Z(-c),this.Wm.Z(c),this.xn.Z(c)),this.$L==dvt.Y.iV&&(this.ji.ma(-d),this.Wm.ma(d),this.xn.ma(d)),this.CFa(e));e=this.OK(a);var k;a=c;this.kI==dvt.Y.tp&&(a=-c);this.$L==dvt.Y.J1?e?(k=["M",0,0,"L",0,e.ia(),"M",0,e.ia()+dvt.Y.dk],c=this.OK(this.ww[this.ww.length-1]),k.push("L",0,c.ia()+dvt.Y.dk),this.Wm.ls(k),a*=dvt.Y.bQ,k=["M",0,c.ia()+dvt.Y.dk,"L",0,d,"L",a,d]):(k=["M",0,0,"L",0,d,"L",a,d],this.Wm.ls(k)):this.$L==dvt.Y.iV&&(e?
(k=["M",0,0,"L",0,e.ia()+dvt.Y.dk,"M",0,e.ia()],c=this.OK(this.ww[0]),k.push("L",0,c.ia()),this.Wm.ls(k),a*=dvt.Y.bQ,k=["M",0,c.ia(),"L",0,-d,"L",a,-d]):(k=["M",0,0,"L",0,-d,"L",a,-d],this.Wm.ls(k)));b?b.J(dvt.B.Gl,this.xn,this.xn.TN,this.xn.ls,k):this.xn.ls(k)};dvt.Y.prototype.CFa=function(a){if(this.Xx&&a){var b=new dvt.Kd("pdcp"+this.u3a);b.Ee(a.x,a.y,a.a,a.b);this.Xx.Ne(b)}this.zga=a};dvt.Y.prototype.iZa=D("zga");dvt.Y.prototype.Msa=function(a){a+=2*this.Zv;if((this.sw||0==this.sw)&&a<this.sw)a=
this.sw;this.Nk&&a>this.Nk&&(a=this.Nk);return a};dvt.Y.prototype.aca=function(a){a+=2*this.Zv;if((this.nY||0==this.nY)&&a<this.nY)a=this.nY;this.Sl&&a>this.Sl&&(a=this.Sl);return a};dvt.Y.prototype.f1=function(a){if(this.ji){var b=this.ji.qd().Ca();b.P(a);this.ji.ga(b)}for(var c in this.XC){var d=this.XC[c];d&&(b=d.qd().Ca(),b.P(a),d.ga(b))}};dvt.Y.prototype.bra=function(a){if(this.Wm){var b=this.Wm.yd().Ca();b.P(a);this.Wm.xa(b)}this.xn&&(b=this.xn.yd().Ca(),b.P(a),this.xn.xa(b));for(var c in this.XC){var d=
this.XC[c];d&&(b=d.yd().Ca(),b.P(a),d.xa(b))}};dvt.Y.prototype.Sma=function(){this.ab(t);this.f1(dvt.Y.Hea);this.bra(dvt.Y.JSa);this.Xx&&this.Xx.P(dvt.Y.Hea);for(var a in this.XC){var b=this.rV(a);b&&b.P(dvt.Y.Hea)}};dvt.Y.prototype.Rma=function(){this.ab(n);this.f1(this.Fp);this.bra(dvt.Y.aQ);this.Xx&&this.Xx.P(1);for(var a in this.XC){var b=this.rV(a);b&&b.P(1)}this.hu(s)};dvt.Y.prototype.sx=function(){this.zK()};dvt.Y.prototype.hu=function(){this.HL||this.Waa()};dvt.Y.prototype.zK=function(){this.f1(dvt.Y.ESa)};
dvt.Y.prototype.Waa=function(){this.f1(this.Fp)};dvt.Y.prototype.YU=function(){for(var a in this.XC){var b=this.XC[a];b&&(a==this.lD()&&this.Pb()?(b.eb(this.QE,this.Fp),b.Kb(this.Px,dvt.Y.aQ),b.Oh(n)):(b.eb(this.Eya,this.Fp),b.Kb(this.Fya,dvt.Y.aQ),b.Oh(t)));var c=this.Pb()&&a==this.lD(),d=this.rV(a);d&&d.Ut(c);c?this.kQ.k(b):this.Ja.Fb(b,0)}};dvt.Y.prototype.zaa=function(a){if(!this.Dja||this.Dja<a)this.Dja=a};dvt.Y.prototype.h8a=function(){return this.aca(this.Dja)};dvt.Y.prototype.V=function(a){a=
dvt.Y.q.V.call(this,a);a.a/=dvt.Y.bQ;return a};dvt.Y.prototype.Ua=D("Ra");dvt.j.u(e,dvt.nb);e.prototype.Init=function(a,b,c,d){e.q.Init.call(this,a,b,"pdcp_tab_"+c);this.Hc=d;this.sM=t;this.s1a=c};e.prototype.hn=function(a){var b=a.keyCode;if(b==dvt.G.vi||b==dvt.G.wi){var b=this.Hc.Ua(),c=this.vd(new dvt.N(0,0));a=dvt.hm.ON(a,this.za,dvt.pa.He,c.x,c.y);a.target=this;b.NP(a)}};e.prototype.Pb=D("sM");e.prototype.Oh=function(a){this.sM!=a?(this.sM=a,this.Cqa()):this.sM=a};e.prototype.Gd=function(){var a=
[];a.push(this.Pb()?dvt.D.na(dvt.D.Ka,"STATE_EXPANDED"):dvt.D.na(dvt.D.Ka,"STATE_COLLAPSED"));return dvt.ja.sk(this.Hc.Xsa(this.s1a),a)};e.prototype.$u=function(){this.Pf("button");dvt.o.Fi()||this.zd("label",this.Gd())};e.prototype.Cqa=function(){dvt.o.Fi()||this.zd("label",this.Gd())};e.prototype.Dg=function(a){return this.V(a)};e.prototype.Bm=function(){return this.hb()};e.prototype.Rf=function(){this.$c=n;this.Op||this.c5();this.Op.show();this.za.JG(this)};e.prototype.Md=function(){this.$c=t;
this.Op||this.c5();this.Op.fs()};e.prototype.Od=D("$c");e.prototype.pe=function(a){return this.Hc.Ua().Ab.pe(this,a)};e.prototype.c5=function(){var a=this.V();this.Op=new dvt.zl(this.g(),this,new dvt.U(a.x+1,a.y+1,a.a-2,a.b-2),s,s,n)};dvt.j.u(d,dvt.K);d.prototype.oj=function(a){var b=this.bb(this.Zd(a));d.q.oj.call(this,a);b&&(b.Ig&&b.Ig(a),a.stopPropagation())};d.prototype.gE=function(a){var b=this.bb(this.Zd(a));b&&(b.xk&&(b.xk()&&b.gu)&&b.gu(a),a.stopPropagation())};d.prototype.iE=function(a){d.q.iE.call(this,
a);var b=this.bb(this.Zd(a));b&&b.sx&&b.sx(a)};d.prototype.hE=function(a){d.q.hE.call(this,a);var b=this.bb(this.Zd(a));b&&b.hu&&b.hu(a)};d.prototype.nH=function(a){var b=this.bb(this.Zd(a));d.q.nH.call(this,a);b&&(b.Ig&&b.Ig(a),a.stopPropagation())};dvt.j.u(c,dvt.Ab);c.prototype.Init=function(a,b){c.q.Init.call(this,a);this.Hc=b};c.prototype.yk=function(a){var b=a.keyCode,d=this.Ra.Ye();return b==dvt.G.Sh?(b=s,dvt.K.oc(a),b=d?d:this.Hc.OK(this.Hc.ww[0])):b==dvt.G.vi||b==dvt.G.wi?(d.hn(a),s):c.q.yk.call(this,
a)};c.prototype.pe=function(a,b){if(!(b.keyCode==dvt.G.xg||b.keyCode==dvt.G.hi))return a;for(var c=a,d=b.keyCode==dvt.G.xg?n:t,e=this.Hc.ww,f=-1,h=0;h<e.length;h++)if(a==this.Hc.OK(e[h])){f=d?h==e.length-1?-1:h+1:0==h?-1:h-1;break}0<=f&&(c=this.Hc.OK(e[f]));return c};dvt.gh=function(a,b,c,d,e,f,h){this.Init(a,b,c,d,e,f,h)};dvt.j.u(dvt.gh,dvt.ca);dvt.gh.jra="sectionColEna";dvt.gh.kra="sectionColOvr";dvt.gh.ira="sectionColDwn";dvt.gh.gsa="sectionExpEna";dvt.gh.hsa="sectionExpOvr";dvt.gh.fsa="sectionExpDwn";
dvt.gh.prototype.Init=function(a,c,d,e,f,h,k){dvt.gh.q.Init.call(this,a,s,c);this.zq=h;this.Ea=(new b).cn(k);this.yFa={};this.uA=[];this.Nk=d;this.sw=0;this.Sl=e;this.h4=this.Kfa=t;this.Ra=f};dvt.gh.prototype.NGa=function(a,b,c,d){d||(d="accordion_"+a.replace(/ /g,"_")+Math.floor(1E9*Math.random()));a=new dvt.Qh(this.g(),b,a,c,n,this,this.Ra,d,this.zq,this.Ea);this.yFa[d]=a;this.uA.push(d);this.k(a)};dvt.gh.prototype.ua=function(){for(var a=this.eJa(),b=t,c=0;c<this.uA.length;c++){var d=this.QJ(c);
d.ua(a);b&&!this.h4&&d.setActive(t);d.nw&&d.sO()&&(b=n)}!b&&(0<this.uA.length&&!this.Kfa)&&this.QJ(0).setActive(n);this.$za()};dvt.gh.prototype.P0=z("Sl");dvt.gh.prototype.hz=z("Nk");dvt.gh.prototype.Ubb=z("sw");dvt.gh.prototype.update=function(a){a=this.moa(a);var b=a.nw;if(b)b&&this.pXa(a)&&a.setActive(t);else{if(!this.h4)for(b=0;b<this.uA.length;b++)this.QJ(b).setActive(t);a.setActive(n)}this.$za()};dvt.gh.prototype.eJa=function(){if(!this.fDa){for(var a=0,b=this.Ea.paddingX,c=0;c<this.uA.length;c++){var d=
this.QJ(c),e=d.KOa();e.a>a&&(a=e.a);d=d.IA().a+2*b;d>a&&(a=d)}a=Math.min(a,this.Nk);this.fDa=a=Math.max(a,this.sw)}return this.fDa};dvt.gh.prototype.Dna=function(){if(!this.Sl){for(var a=0,b=0,c=0;c<this.uA.length;c++){var d=this.QJ(c),e=d.w7a().b;if(d.sO()&&e>a)a=e;else if(!d.sO()||this.h4)b+=e}this.Sl=a+b}return this.Sl};dvt.gh.prototype.QJ=function(a){return 0<=a&&a<this.uA.length?this.moa(this.uA[a]):s};dvt.gh.prototype.moa=function(a){return this.yFa[a]};dvt.gh.prototype.Mbb=function(){this.h4=
n};dvt.gh.prototype.Cbb=function(){this.Kfa=n};dvt.gh.prototype.pXa=function(a){if(a.sO()){if(this.Kfa)return n;for(var b=0,c=0;c<this.uA.length;c++)a=this.QJ(c),a.nw&&b++;return 1<b}return t};dvt.gh.prototype.$za=function(){for(var a=0,b=0;b<this.uA.length;b++){var c=this.QJ(b);c.ma(a);c.nw?(c.expand(),a+=c.Wp().b,a+=this.Ea.paddingY):(c.collapse(),a+=this.Ea.sectionHeader.headerHeight)}a=this.Wp();this.te(new dvt.Pm(a.a,a.b,0,0))};dvt.gh.prototype.T9=function(){for(var a=[],b=0;b<this.uA.length;b++)a.push(this.QJ(b));
return a};dvt.Qh=function(a,b,c,d,e,f,h,k,m,C){this.Init(a,b,c,d,e,f,h,k,m,C)};dvt.j.u(dvt.Qh,dvt.ca);dvt.Qh.prototype.Init=function(a,b,c,d,e,f,h,k,m,C){dvt.Qh.q.Init.call(this,a,s,k);this.fj=f;this.zq=m;this.bn=c;this.mc=k;this.ok=b;this.Uz=this.$z=s;this.nw=(this.O_a=e)?d:n;this.Ra=h;this.Ea=C;this.pM=this.Ea.sectionHeader.headerHeight;this.a7=this.Ea.paddingX;this.b7=this.Ea.paddingY;this.iGa=this.Ea.sectionHeader.styleEna;this.QBa=this.Ea.sectionHeader.imageWidth;this.F_a=this.Ea.sectionHeader.imageHeight;
this.E3a=this.Ea.sectionHeader.textPadding};dvt.Qh.prototype.getId=D("mc");dvt.Qh.prototype.VA=D("bn");dvt.Qh.prototype.setActive=z("nw");dvt.Qh.prototype.sO=D("O_a");dvt.Qh.prototype.IA=function(){var a=s;0>this.oi(this.ok)?(this.k(this.ok),a=this.ok.V(),this.removeChild(this.ok)):a=this.ok.V();return a};dvt.Qh.prototype.w7a=function(){var a=s;0>this.oi(this.ok)?(this.k(this.ok),this.ok.Z(this.a7),this.ok.ma(this.pM+this.b7),a=this.Wp(),this.removeChild(this.ok)):a=this.Wp();return a};dvt.Qh.prototype.ua=
function(a){this.RXa(a,this.pM);this.sO()?this.nw?(this.Fb(this.$z,0),this.k(this.ok),this.ok.Z(this.a7),this.ok.ma(this.pM+this.b7)):this.k(this.Uz):(this.Fb(this.qia,0),this.k(this.ok),this.ok.Z(this.a7),this.ok.ma(this.pM+this.b7))};dvt.Qh.prototype.collapse=function(){this.sO()&&(0<=this.oi(this.$z)&&this.removeChild(this.$z),0<=this.oi(this.ok)&&this.removeChild(this.ok),this.k(this.Uz),this.setActive(t),this.Od()&&this.Rf())};dvt.Qh.prototype.expand=function(){0<=this.oi(this.Uz)&&this.removeChild(this.Uz);
this.k(this.$z);this.k(this.ok);this.ok.Z(this.a7);this.ok.ma(this.pM+this.b7);this.setActive(n);this.Od()&&this.Rf()};dvt.Qh.prototype.hta=function(){this.fj.update(this.getId())};dvt.Qh.prototype.KOa=function(){if(!this.NS){var a=new dvt.ba(this.za,this.bn);a.zb(this.iGa);if(a=a.Oc())a.a=a.a+this.QBa+this.E3a;this.NS=a}return this.NS};dvt.Qh.prototype.DRa=function(a){if(!this.NS||this.NS.a<a.a||this.NS.b<a.b)this.NS=a};dvt.Qh.prototype.RXa=function(a,b){if(this.sO()){var c,d,e;this.zq.L?(c=this.Sx(dvt.aa.Yc,
this.zq.L(dvt.gh.gsa),this.bn,a,b),d=this.Sx(dvt.aa.Pd,this.zq.L(dvt.gh.hsa),this.bn,a,b),e=this.Sx(dvt.aa.wd,this.zq.L(dvt.gh.fsa),this.bn,a,b)):(c=this.Sx(dvt.aa.Yc,this.zq[dvt.gh.gsa],this.bn,a,b),d=this.Sx(dvt.aa.Pd,this.zq[dvt.gh.hsa],this.bn,a,b),e=this.Sx(dvt.aa.wd,this.zq[dvt.gh.fsa],this.bn,a,b));this.$z=new dvt.aa(this.za,c,d,e);this.$z.Pf("button");c=dvt.ja.sk(this.bn,[dvt.D.na(dvt.D.Ka,"STATE_EXPANDED")]);this.$z.zd("label",c);this.zq.L?(c=this.Sx(dvt.aa.Yc,this.zq.L(dvt.gh.jra),this.bn,
a,b),d=this.Sx(dvt.aa.Pd,this.zq.L(dvt.gh.kra),this.bn,a,b),e=this.Sx(dvt.aa.wd,this.zq.L(dvt.gh.ira),this.bn,a,b)):(c=this.Sx(dvt.aa.Yc,this.zq[dvt.gh.jra],this.bn,a,b),d=this.Sx(dvt.aa.Pd,this.zq[dvt.gh.kra],this.bn,a,b),e=this.Sx(dvt.aa.wd,this.zq[dvt.gh.ira],this.bn,a,b));this.Uz=new dvt.aa(this.za,c,d,e);this.Uz.Pf("button");c=dvt.ja.sk(this.bn,[dvt.D.na(dvt.D.Ka,"STATE_COLLAPSED")]);this.Uz.zd("label",c);this.Ra.qb(this.$z,this);this.Ra.qb(this.Uz,this)}else c=this.pza(dvt.aa.Dx,a,b),d=this.qza(this.bn),
this.qia=new dvt.ca(this.za),this.qia.k(c),this.qia.k(d)};dvt.Qh.prototype.Sx=function(a,b,c,d,e){var f=this.QBa,h=this.F_a,k=(this.pM-h)/2,m=new dvt.ca(this.za);a=this.pza(a,d,e);m.k(a);(b=b?new dvt.vb(this.za,b,0,k,f,h):s)&&m.k(b);c=this.qza(c,d-f-0,e,m);dvt.o.$(this.za)?(e=c.Oc(),c.Z(d-e.a-f),b&&b.Z(d-f)):c.Z(f);this.Op||this.c5(b?b:c);return m};dvt.Qh.prototype.qza=function(a,b,c,d){var e=s;a&&(e=new dvt.ba(this.za,a),e.zb(this.iGa),dvt.Aa.pd(e,b,c,d),a=e.Oc(),this.DRa(a),e.ma((this.pM-a.b)/2));
return e};dvt.Qh.prototype.pza=function(a,b,c){var d=s;switch(a){case dvt.aa.Pd:d=this.Ea.sectionHeader.styleOvr;break;case dvt.aa.wd:d=this.Ea.sectionHeader.styleDwn;break;case dvt.aa.Dx:d=this.Ea.sectionHeader.styleDis;break;default:d=this.Ea.sectionHeader.styleEna}a=new dvt.ka(this.za,0,0,b,c);a.xa(dvt.Qh.XZa(d));a.ga(dvt.Qh.qZa(d));return a};dvt.Qh.qZa=function(a){var b=a.I(dvt.e.Gb);a=a.rT();var c=s;if(a&&a instanceof dvt.vs){var b=a.Dp,c=a.Cp,d=a.EE;a=a.ep();c=new dvt.Mc(a,b,c,d)}else b&&(c=
new dvt.Vb(b,1));return c};dvt.Qh.XZa=function(a){a=a.I(dvt.e.pb);return new dvt.ta(a,1,1)};dvt.Qh.prototype.Dg=function(){var a=this.nw?this.$z:this.Uz,b=a.V(),c=a.vd(new dvt.N(b.x,b.y)),a=a.vd(new dvt.N(b.x+b.a,b.y+b.b));return new dvt.U(c.x,c.y,a.x-c.x,a.y-c.y)};dvt.Qh.prototype.Bm=function(){return(this.nw?this.$z:this.Uz).hb()};dvt.Qh.prototype.Rf=function(){this.$c=n;this.Op.show();this.za.JG(this.nw?this.$z:this.Uz)};dvt.Qh.prototype.Md=function(){this.$c=t;this.Op.fs()};dvt.Qh.prototype.Od=
D("$c");dvt.Qh.prototype.pe=function(a){return this.Ra.Ab.pe(this,a)};dvt.Qh.prototype.c5=function(a){var b=a.V(),c=a.la()||b.x;a=a.ia()||b.y;this.Op=new dvt.zl(this.g(),this,new dvt.U(c,a,b.a,b.b),s,s,n)};dvt.j.u(b,dvt.fm);b.uE={skin:dvt.e.Hh,sectionHeader:{styleEna:new dvt.e("font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;font-size:14px;font-weight:bold;color:#252525;border-color:#D9DFE3;background-color:#F5F5F5;"),styleOvr:new dvt.e("font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;font-size:14px;font-weight:bold;color:#252525;border-color:#D9DFE3;background-color:#F5F5F5;"),
styleDwn:new dvt.e("font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;font-size:14px;font-weight:bold;color:#252525;border-color:#D9DFE3;background-color:#F5F5F5;"),styleDis:new dvt.e("font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;font-size:14px;font-weight:bold;color:#252525;border-color:#D9DFE3;background-color:#F5F5F5;"),headerHeight:33,imageWidth:24,imageHeight:24,textPadding:5},paddingX:0,paddingY:0};b.Hh={};dvt.Tf=function(a,b,c,d,e,f){this.Init(a,b,c,d,e,f)};dvt.j.u(dvt.Tf,
dvt.ca);dvt.Tf.URa="dvtTrain";dvt.Tf.lsa="#c0cbd5";dvt.Tf.pb="#5d7891";dvt.Tf.mRa="#61bde3";dvt.Tf.lRa="#0066ff";dvt.Tf.PMa=8;dvt.Tf.iSa=1;dvt.Tf.Zsa=3;dvt.Tf.Yc=0;dvt.Tf.sRa=1;dvt.Tf.N2=2;dvt.Tf.prototype.Init=function(a,b,c,d,e,f){dvt.Tf.q.Init.call(this,a,s,e);this.QF=a.fg();this.Uo=c;this.bI=d;this.Y4=c.length;this.RE=Array(this.Y4);this.Xu=0;this.M_a=f;this.iL(b)};dvt.Tf.prototype.S0=function(a){0<=a&&a<this.Y4&&this.Dva(this.Xu,a)};dvt.Tf.prototype.Ig=function(a){dvt.K.oc(a);for(var b=0;b<this.RE.length;b++){var c=
a.target;if(this.RE[b]===c||this.RE[b]===c.getParent()){a=this.Xu;this.Dva(a,b);a!=b&&this.l6a();break}}};dvt.Tf.prototype.Dva=function(a,b){this.Xu=b;var c=this.RE[a];c&&(c.Cm&&c.Cm.setCursor("pointer"),c.am&&c.am.setCursor("pointer"),c.Ut(t));if(c=this.RE[b])c.Cm&&c.Cm.setCursor("default"),c.am&&c.am.setCursor("default"),c.Ut(n)};dvt.Tf.prototype.v4a=function(a,b){this.Va(dvt.Tf.URa,a,t,b)};dvt.Tf.prototype.l6a=function(){var b=new a(this.Xu);this.te(b,t)};dvt.Tf.prototype.iL=function(a){for(var b=
dvt.o.$(this.g()),c=this.fZa(),d=0;d<this.Y4;d++){var e;e=this.uB(c,d==this.Xu,this.Uo[d]);this.g4a(e);var f=d;b&&(f=this.Y4-1-d);a&&a.qb(e,e);e.Fa(f*(c+dvt.Tf.Zsa),this.M_a?0:dvt.Tf.iSa);this.k(e);this.RE[d]=e}};dvt.Tf.prototype.ZNa=function(a,b){var c,d,e,f;b?(f=0,e=dvt.Tf.mRa,d=dvt.Tf.lRa,this.bI&&(c=this.bI[dvt.Tf.N2])):(f=1,e=dvt.Tf.lsa,d=dvt.Tf.pb,this.bI&&(c=this.bI[dvt.Tf.Yc]));c&&(c.I(dvt.e.pb)&&(d=c.I(dvt.e.pb)),c.I(dvt.e.Gb)&&(e=c.I(dvt.e.Gb)));c=new dvt.ka(this.g(),f,f,a-2*f,a-2*f);c.eb(e);
c.Kb(d);return c};dvt.Tf.prototype.g4a=function(a){a.Va(dvt.Rb.xi,this.Ig,t,this);dvt.o.Ta()||a.Va(dvt.pa.He,this.Ig,t,this)};dvt.Tf.prototype.fZa=function(){if(!this.E4){if(this.bI){var a=this.bI[0];a&&(this.E4=dvt.e.qp(a.getWidth()))}this.E4||(this.E4=dvt.Tf.PMa)}return this.E4};dvt.Tf.prototype.lx=function(a,b){return new dvt.vb(this.g(),a,0,0,b,b)};dvt.Tf.prototype.Pca=function(a,b,c){var d=this.bI?this.bI[b]:s;a=(d=d?d.EIa():s)?this.lx(d,a):this.ZNa(a,b==dvt.Tf.N2);a.setCursor(b==dvt.Tf.Yc||
c?"default":"pointer");return a};dvt.Tf.prototype.uB=function(a,b,c){a=new dvt.aa(this.g(),this.Pca(a,dvt.Tf.Yc,b),this.Pca(a,dvt.Tf.sRa,b),this.Pca(a,dvt.Tf.N2,b),s);a.Hm(c);a.W0();b&&a.Ut(b);return a};dvt.j.u(a,dvt.hg);a.je="dvtTrain";a.prototype.jb=D("io");dvt.lg=function(a,b,c,d,e,f){this.Init(a,b,c,d,e,f)};dvt.j.u(dvt.lg,dvt.ca);dvt.lg.Cea="viewport-bg-color";dvt.lg.Dea="viewport-border-color";dvt.lg.sua="isOverviewDisclosed";dvt.lg.prototype.Init=function(a,b,c,d,e,f){dvt.lg.q.Init.call(this,
a,s,b);this.Fc=c;this.ud=d;this.nl=e;this.Rl=f;this.jJ=s};dvt.lg.prototype.ua=function(){this.lY=t;this.pka=n;this.Rd&&(dvt.o.Ta()?(this.Rd.Zb(dvt.Rb.xi,this.G6,t,this),this.Rd.Zb(dvt.Rb.Yn,this.H6,t,this),this.Rd.Zb(dvt.Rb.km,this.rY,t,this)):(this.Rd.Zb(dvt.pa.Vn,this.G6,t,this),this.Rd.Zb(dvt.pa.ku,this.H6,t,this),this.Rd.Zb(dvt.pa.Wn,this.rY,t,this),this.Rd.Zb(dvt.pa.ei,this.qDa,t,this)),this.Rd.Ne(s));this.Dm();this.Rd=this.Ag=s;var a=new dvt.Kd(this.getId());a.Ee(0,0,this.nl,this.Rl);this.Rd=
new dvt.ka(this.za,0,0,this.nl,this.Rl);this.Rd.Ne(a);this.Rd.gc();this.k(this.Rd);this.Ag=new dvt.ka(this.za,0,0,0,0,this.getId()+":viewport");a=this.Z9(dvt.lg.Cea);this.Ag.Kb(this.Z9(dvt.lg.Dea),s,2);this.Ag.eb(a);this.Ag.ab(t);this.Rd.k(this.Ag);dvt.o.Ta()?(this.Rd.Va(dvt.Rb.xi,this.G6,t,this),this.Rd.Va(dvt.Rb.Yn,this.H6,t,this),this.Rd.Va(dvt.Rb.km,this.rY,t,this)):(this.Rd.Va(dvt.pa.Vn,this.G6,t,this),this.Rd.Va(dvt.pa.ku,this.H6,t,this),this.Rd.Va(dvt.pa.Wn,this.rY,t,this),this.Rd.Va(dvt.pa.ei,
this.qDa,t,this))};dvt.lg.prototype.N$a=function(a){this.sM="true"==a.L("disclosed")};dvt.lg.prototype.Pb=D("sM");dvt.lg.prototype.Oh=z("sM");dvt.lg.prototype.oIa=function(){return this.IA().a};dvt.lg.prototype.nIa=function(){return this.IA().b};dvt.lg.prototype.IA=function(){return new dvt.U(this.Fc,this.ud,this.nl,this.Rl)};dvt.lg.prototype.WO=function(a,b){var c=this.ewa(a.x,a.y,b),d=this.ewa(a.x+a.a,a.y+a.b,b),e=c.x,f=c.y,h=d.x-c.x,c=d.y-c.y;b?(b.J(dvt.B.Q,this.Ag,this.Ag.Sa,this.Ag.Ia,e),b.J(dvt.B.Q,
this.Ag,this.Ag.Za,this.Ag.ib,f),b.J(dvt.B.Q,this.Ag,this.Ag.getWidth,this.Ag.Xa,h),b.J(dvt.B.Q,this.Ag,this.Ag.getHeight,this.Ag.rb,c)):(this.Ag.Ia(e),this.Ag.ib(f),this.Ag.Xa(h),this.Ag.rb(c))};dvt.lg.prototype.Boa=function(){var a=this.o3(this.Ag.Sa(),this.Ag.Za()),b=this.o3(this.Ag.Sa()+this.Ag.getWidth(),this.Ag.Za()+this.Ag.getHeight());return new dvt.U(a.x,a.y,b.x-a.x,b.y-a.y)};dvt.lg.prototype.Gbb=function(a){var b=this.Boa();this.Nl&&this.Rd.removeChild(this.Nl);this.Nl=a;this.Rd.Fb(a,0);
this.WO(b)};dvt.lg.prototype.G6=function(a){if(!this.lY&&this.pka){this.lY=n;var b=this.dj(a);a=new dvt.HH(this.Boa(),this.MAa(b),a);this.te(a)}};dvt.lg.prototype.H6=function(a){if(this.lY&&this.pka){var b=this.dj(a);a=new dvt.HH(this.Boa(),this.MAa(b),a);this.te(a)}};dvt.lg.prototype.rY=function(){this.lY&&this.pka&&(this.lY=t)};dvt.lg.prototype.qDa=function(){this.rY()};dvt.lg.prototype.dj=function(a){var b,c;dvt.o.Ta()?(a=a.touches,0<a.length&&(b=a[0].pageX,c=a[0].pageY)):(b=a.pageX,c=a.pageY);
return this.za.fh(b,c)};dvt.lg.prototype.o3=function(a,b){var c=0,d=0,e=1,f=1;this.Nl&&(c=this.Nl.la(),d=this.Nl.ia(),e=this.Nl.Xd(),f=this.Nl.fe());return new dvt.N((a-c)/e,(b-d)/f)};dvt.lg.prototype.ewa=function(a,b,c){var d=0,e=0,f=1,h=1;this.Nl&&(d=c?c.Xf(this.Nl,this.Nl.la,n):this.Nl.la(),e=c?c.Xf(this.Nl,this.Nl.ia,n):this.Nl.ia(),f=c?c.Xf(this.Nl,this.Nl.Xd,n):this.Nl.Xd(),h=c?c.Xf(this.Nl,this.Nl.fe,n):this.Nl.fe());return new dvt.N(a*f+d,b*h+e)};dvt.lg.prototype.LT=D("jJ");dvt.lg.prototype.SO=
z("jJ");dvt.lg.prototype.Z9=function(a){return this.jJ&&"undefined"!=this.jJ[a]?this.jJ[a]:s};dvt.lg.prototype.MAa=function(a){var b=this.Rd.vd(new dvt.N(0,0)),c=this.Ag.V(),d=a.x-b.x-c.a/2,b=a.y-b.y-c.b/2;a=this.o3(d,b);c=this.o3(d+c.a,b+c.b);return new dvt.U(a.x,a.y,c.x-a.x,c.y-a.y)};dvt.lg.prototype.Lva=function(a){this.Ag.Ia(a.x);this.Ag.ib(a.y);this.Ag.Xa(a.a);this.Ag.rb(a.b)};dvt.lg.prototype.mca=function(){return new dvt.U(this.Ag.Sa(),this.Ag.Za(),this.Ag.getWidth(),this.Ag.getHeight())};
dvt.lg.prototype.V=function(a){var b=new dvt.U(0,0,this.nl,this.Rl);return!a||a===this?b:this.Ii(b,a)};dvt.lg.prototype.Wp=function(a){return this.V(a)};dvt.D.dD(dvt.D.Vg,{CONTROL_PANEL:"Control Panel",CONTROL_PANEL_ZOOMANDCENTER:"Zoom and Center",CONTROL_PANEL_PAN:"Pan",CONTROL_PANEL_LAYOUT:"Layout",CONTROL_PANEL_LAYOUT_VERT_TOP:"Vertical, Top Down",CONTROL_PANEL_LAYOUT_VERT_BOTTOM:"Vertical, Bottom Up",CONTROL_PANEL_LAYOUT_HORIZ_START:"Horizontal, Start-to-End",CONTROL_PANEL_LAYOUT_HORIZ_LEFT:"Horizontal, Left-to-Right",
CONTROL_PANEL_LAYOUT_HORIZ_RIGHT:"Horizontal, Right-to-Left",CONTROL_PANEL_LAYOUT_RADIAL:"Radial",CONTROL_PANEL_LAYOUT_TREE:"Tree",CONTROL_PANEL_LAYOUT_CIRCLE:"Circle",CONTROL_PANEL_SYNC:"View",CONTROL_PANEL_ZOOMTOFIT:"Zoom to Fit",CONTROL_PANEL_ZOOMIN:"Zoom In",CONTROL_PANEL_ZOOMOUT:"Zoom Out",CONTROL_PANEL_RESET:"Reset Map",CONTROL_PANEL_DRILLUP:"Drill Up",CONTROL_PANEL_DRILLDOWN:"Drill Down",LEGEND:"Legend",OVERVIEW:"Overview",PALETTE:"Palette",SEARCH:"Search",SEARCH_TEXT:"Search",SEARCH_TEXT_ALTA:"Find",
SEARCH_RESULTS:"Search Results [{0}]",SEARCH_RESULTS_ALTA:"{0} Results",SEARCH_RESULTS_CLOSE:"Close",SEARCH_RESULTS_NO_DATA:"No results to display"})})();
  return dvt;
});

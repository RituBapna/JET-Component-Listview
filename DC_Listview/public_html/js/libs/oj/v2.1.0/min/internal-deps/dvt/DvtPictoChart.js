/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
define(['./DvtToolkit'], function(dvt) {
  // Internal use only.  All APIs and functionality are subject to change at any time.

var l=void 0,n=!0,s=null,t=!1;function aa(){return function(a){return a}}function y(){return function(){}}function z(a){return function(b){this[a]=b}}function D(a){return function(){return this[a]}}function F(a){return function(){return a}}var J;function ba(a,b){0==a.indexOf("dvt.")&&(a=a.substring(4));var c=a.split("."),d=eval("dvt");!(c[0]in d)&&d.execScript&&d.execScript("var "+c[0]);for(var e;c.length&&(e=c.shift());)!c.length&&b!==l?d[e]=b:d=d[e]?d[e]:d[e]={}}Math.floor(2147483648*Math.random()).toString(36);
(function(){function a(b,c,d,e,f,h,k){a.q.Init.call(this,b.g(),c,dvt.e.Hh,d,e,f,h,n,k);this.Oi=b}function b(a){this.Init(a)}function c(a,b){this.Init(a,b)}function d(a,b,c,e,f,h,k,x,B,A){d.q.Init.call(this,a.g(),b,c,e,f,h,k,x,B,A);this.Oi=a}function e(){this.Init({alta:e.uE})}function f(a){this.Init(a.g(),a.dispatchEvent,a);this.Oi=a}function h(a){this.Oi=a}dvt.th=function(a,b,c){this.Init(a,b,c)};dvt.j.u(dvt.th,dvt.af);dvt.th.newInstance=function(a,b,c){return new dvt.th(a,b,c)};dvt.th.prototype.Init=
function(a,c,d){dvt.th.q.Init.call(this,a,c,d);this.K=new f(this);this.K.Bg(this);dvt.o.Ta()||this.K.ns(new b(this.K));this.Dh=new e;this.bc=[]};dvt.th.prototype.vI=function(a,b){if(!a||!b){var c=k.vo(this,a,b);this.Cia=c;a||(a=c.kp?c.eHa*c.J8:0);b||(b=c.kp?c.uLa*c.eaa:0)}return new dvt.$j(a,b)};dvt.th.prototype.ua=function(a,b,c){this.xj=this.ya;var d=this.Ou,e=this.yb?this.yb:0,f=this.Lb?this.Lb:0;this.K.he();this.bc=[];this.Ou=[];this.Cia=s;this.Lp&&(this.ya.removeChild(this.Lp),this.Lp=s);this.Ob&&
(this.Kx=n,this.Ob.stop());this.Nf(a);var h=this.g();if(!b&&!c){if(h.Cb.style.display="block",b=this.vI(),dvt.F.V0(h,b.a,b.b),c=dvt.F.coa(h),b.a==c.a&&b.b!=c.b?(this.Lb=c.b,b=this.vI(s,this.Lb),dvt.F.V0(h,b.a,this.Lb),this.yb=dvt.F.coa(h).a):b.a!=c.a&&b.b==c.b?(this.yb=c.a,b=this.vI(this.yb,s),dvt.F.V0(h,this.yb,b.b),this.Lb=dvt.F.coa(h).b):(this.yb=c.a,this.Lb=c.b),this.yb!=b.a||this.Lb!=b.b)this.Cia=s}else this.yb=b,this.Lb=c;this.ya=new dvt.ca(h);this.k(this.ya);k.ua(this,this.ya,new dvt.U(0,0,
this.yb,this.Lb),this.Cia);this.xj?"none"!=this.T.animationOnDataChange&&a&&(a=new dvt.up(h,s),a.Tp(d,this.Ou),this.Ob=a.dv()):this.Ob=this.aZa();this.Ob?(dvt.F.V0(h,Math.max(e,this.yb),Math.max(f,this.Lb)),this.K.$k(this),this.Lp&&this.ya.removeChild(this.Lp),this.Ob.Qf(this.T6,this),this.Ob.play()):this.T6()};dvt.th.prototype.Nf=function(a){a?this.T=this.Dh.cn(a):this.T||(this.T=this.UD());dvt.o.Wi()||(this.T.animationOnDisplay="none",this.T.animationOnDataChange="none");a=this.T.selectionMode;
this.Xc="single"==a?new dvt.Sc(dvt.Sc.Az):"multiple"==a?new dvt.Sc(dvt.Sc.xz):s;this.K.nB(this.Xc)};dvt.th.prototype.T6=function(){this.xj&&(this.removeChild(this.xj),this.xj.ra(),this.xj=s);this.Ob&&(this.Ob=s,this.K.Bg(this),this.Lp&&this.ya.k(this.Lp));dvt.F.V0(this.g(),this.yb,this.Lb);this.K.ms(this.bc[0]);this.Xc&&this.Xc.Lt(this.T.selection,this.bc);dvt.Sg.Me(this.T.highlightedCategories,this.bc,"any"==this.T.highlightMatch);this.nr();this.Kx||this.nE();this.Kx=s};dvt.th.prototype.Ua=D("K");
dvt.th.prototype.Vpa=z("bc");dvt.th.prototype.uk=D("bc");dvt.th.prototype.Yab=function(a){this.Ou.push(a)};dvt.th.prototype.Xab=z("Lp");dvt.th.prototype.p9a=function(){for(var a=0,b=0;b<this.bc.length;b++)a+=this.bc[b].getCount();return a};dvt.th.prototype.lb=function(){return dvt.Qa.cs(this.T.animationDuration)/1E3};dvt.th.prototype.aZa=function(){var a=this.T.animationOnDisplay,b=this.lb(),c=this.g(),d=new dvt.U(0,0,this.yb,this.Lb);if(dvt.cc.isSupported(a))return dvt.cc.mD(c,a,this.ya,d,b);var e=
[];if("popIn"==a)for(a=0;a<this.Ou.length;a++){var f=this.Ou[a];e.push(new dvt.ss(c,f,n,b))}else if("none"!=a){for(a=0;a<this.Ou.length;a++){var f=this.Ou[a],h=new dvt.Nd(c,f,b),x,B;k.Qb(this)?(x=k.apa(this)?this.yb:0,B=f.kj(),f.dz(x),h.da.J(dvt.B.Q,f,f.kj,f.dz,B)):(x=k.$oa(this)?this.Lb:0,B=f.lj(),f.ez(x),h.da.J(dvt.B.Q,f,f.lj,f.ez,B));e.push(h)}e.push(dvt.cc.mD(c,dvt.cc.rB,this.ya,d,b))}return 0<e.length?new dvt.Fh(c,e):s};dvt.th.prototype.ra=function(){this.K&&(this.K.$k(this),this.K.ra(),this.K=
s);dvt.th.q.ra.call(this)};dvt.th.prototype.Me=function(a){var b=this.v();b.highlightedCategories=dvt.Ac.Ca(a);dvt.Sg.Me(a,this.uk(),"any"==b.highlightMatch)};dvt.th.prototype.select=function(a){this.v().selection=dvt.Ac.Ca(a);this.Xc&&this.Xc.Lt(a,this.uk())};dvt.th.prototype.Km=function(){return dvt.D.bh(this.v(),"componentName",dvt.D.Ka,"PICTOCHART")};dvt.th.prototype.ni=function(){this.jya||(this.jya=new h(this));return this.jya};dvt.j.u(h,dvt.Ud);h.prototype.Ho=function(a){return(a=this.Oi.Ua().bb(a))&&
a instanceof c?"item["+this.Oi.uk().indexOf(a)+"]":s};h.prototype.pi=function(a){if(a==dvt.Ud.OB)return this.XD(this.Oi);var b=a.indexOf("[");return 0<b&&"item"===a.substring(0,b)&&(a=parseInt(a.substring(b+1,a.length-1)),a=this.Oi.uk()[a])?a.hb():s};h.prototype.getItem=function(a){if(a=this.Oi.uk()[a]){var b={};b.color=a.cm();b.tooltip=a.ge();b.id=a.getId();b.name=a.getName();b.count=a.getCount();b.selected=a.sb();return b}return s};h.prototype.wT=function(){return this.Oi.uk().length};dvt.j.u(f,
dvt.K);f.prototype.yp=function(a,b,c){a=this.Oi.v();"none"!=a.hoverBehavior&&(b=b.ze?b.ze():[],a.highlightedCategories=c?b.slice():s,c=dvt.Wa.EG(a.highlightedCategories,c),b=dvt.Qa.cs(a.hoverBehaviorDelay),this.wH.If(c,this.Oi.uk(),b,"any"==a.highlightMatch))};f.prototype.KP=function(a){(a=this.bb(a.target))&&(!a.mb||!a.mb())&&this.Uw(a)};f.prototype.gE=function(a){(a=this.bb(a.target))&&a.mb&&a.mb()&&this.Uw(a)};f.prototype.zV=function(a){(a=this.bb(a.target))&&(!a.mb||!a.mb())&&this.Uw(a)};f.prototype.Hv=
function(a){(a=this.bb(a.target))&&(!a.mb||!a.mb())&&this.Uw(a)};f.prototype.iH=function(a){var b=this.bb(a.target);b&&(b.mb&&b.mb())&&(a.preventDefault(),a.stopPropagation(),this.Uw(b))};f.prototype.Uw=function(a){a instanceof c&&a.Gj()&&this.Ck(dvt.Wa.N$(a.getId()))};dvt.j.u(e,dvt.fm);e.uE={animationOnDisplay:"none",animationOnDataChange:"none",animationDuration:750,drilling:"off",hiddenCategories:[],highlightedCategories:[],highlightMatch:"all",hoverBehavior:"none",hoverBehaviorDelay:200,layout:"horizontal",
layoutOrigin:"topStart",selection:[],selectionMode:"none",_defaultColor:"#a6acb1",_defaultSize:32,_defaultShape:"rectangle",_gapRatio:0.25,_textStyle:new dvt.e("font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 13px; color: #252525;"),_statusMessageStyle:new dvt.e("font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 13px; color: #252525;"),_tooltipStyle:new dvt.e("border-collapse: separate; border-spacing: 1px"),_tooltipLabelStyle:new dvt.e("color: #737373; padding: 0px 2px"),
_tooltipValueStyle:new dvt.e("color: #333333; padding: 0px 2px")};dvt.j.u(d,dvt.Jg);d.prototype.oh=function(a,b){var c=new dvt.Nd(this.g(),this,0.75*this.Oi.lb()),d=c.da,e=this.ho();this.Sp(b.ho());d.J(dvt.B.bg,this,this.ho,this.Sp,e);b.P(0);a.add(c,1)};d.prototype.Vj=function(a){a.add(new dvt.Ij(this.g(),this,0.5*this.Oi.lb()),0)};d.prototype.Si=function(a){this.P(0);a.add(new dvt.Ch(this.g(),this,0.5*this.Oi.lb()),2)};d.prototype.ho=function(){return[this.kj(),this.lj(),this.getWidth(),this.getHeight()]};
d.prototype.Sp=function(a){this.dz(a[0]);this.ez(a[1]);this.Xa(a[2]);this.rb(a[3])};dvt.j.u(c,dvt.ca);c.Wz=0;c.prototype.Init=function(a,b){c.q.Init.call(this,a.g(),s,b.id);this.Oi=a;this.jo=b;this.mc=b.id!=s?b.id:b.name!=s?b.name:"_defaultId"+c.Wz;c.Wz++;this.$c=this.kl=t;this.qCa=new dvt.N(0,0);(this.mb()||this.Gj())&&this.setCursor("pointer");a.Ua().qb(this,this)};c.prototype.lIa=function(){var a=this.jo.columnSpan;return a!=s&&0<=a?a:1};c.prototype.BJa=function(){var a=this.jo.rowSpan;return a!=
s&&0<=a?a:1};c.prototype.getCount=function(){var a=this.jo.count;return a!=s?Math.max(a,0):1};c.prototype.yc=function(){return this.jo.shape||this.Oi.v()._defaultShape};c.prototype.xc=function(){return this.jo.color||this.Oi.v()._defaultColor};c.prototype.In=function(){return this.jo.borderColor};c.prototype.Cj=function(){return this.jo.borderWidth};c.prototype.V_=function(){return this.jo.source};c.prototype.toa=function(){return this.jo.sourceSelected};c.prototype.roa=function(){return this.jo.sourceHover};
c.prototype.soa=function(){return this.jo.sourceHoverSelected};c.prototype.getName=function(){return this.jo.name};c.prototype.getId=D("mc");c.prototype.ge=function(){return this.jo.shortDesc};c.prototype.Gj=function(){var a=this.jo.drilling;return a&&"inherit"!=a?"on"==a:"on"==this.Oi.v().drilling};c.prototype.xk=function(){return this.mb()&&this.Gj()};c.prototype.Bcb=function(){this.Pf("img");this.Zu()};c.prototype.Pg=function(){var a=this.Oi.v(),b=this.Oi.v().tooltip;if(b){var a=this.Oi.g().fg(),
c={id:this.getId(),name:this.getName(),count:this.getCount(),color:this.xc()};return a.JA(b,c)}if(this.ge()!=s)return this.ge();b="";(c=this.getName())&&(b=dvt.Xe.lT("td",a._tooltipLabelStyle)+c+"\x3c/td\x3e");c=dvt.o.$(this.Oi.g());a._tooltipLabelStyle.oa(dvt.e.qE,c?"left":"right");a._tooltipValueStyle.oa(dvt.e.qE,c?"right":"left");return dvt.Xe.lT("table",a._tooltipStyle)+"\x3ctr\x3e"+b+dvt.Xe.lT("td",a._tooltipValueStyle)+this.Pha()+"\x3c/td\x3e\x3c/tr\x3e\x3c/table\x3e"};c.prototype.cm=function(){return this.xc()};
c.prototype.Pha=function(){return dvt.D.bh(this.Oi.v(),"labelCountWithTotal",dvt.D.Ka,"COUNT_WITH_TOTAL",[this.getCount(),this.Oi.p9a()])};c.prototype.mb=function(){return"none"!=this.Oi.v().selectionMode};c.prototype.sb=D("kl");c.prototype.pc=function(b){this.kl=b;this.Zu();for(var c=0;c<this.Eb();c++){var e=this.Ya(c);(e instanceof a||e instanceof d)&&e.pc(b)}};c.prototype.rd=function(){for(var b=0;b<this.Eb();b++){var c=this.Ya(b);(c instanceof a||c instanceof d)&&c.rd()}};c.prototype.Qc=function(){for(var b=
0;b<this.Eb();b++){var c=this.Ya(b);(c instanceof a||c instanceof d)&&c.Qc()}};c.prototype.Ue=function(){return[this]};c.prototype.Gd=function(){var a=[],b=this.Oi.v();this.mb()&&a.push(dvt.D.bh(b,this.sb()?"stateSelected":"stateUnselected",dvt.D.Ka,this.sb()?"STATE_SELECTED":"STATE_UNSELECTED"));this.Gj()&&a.push(dvt.D.bh(b,"stateDrillable",dvt.D.Ka,"STATE_DRILLABLE"));b=this.getName();b=this.ge()!=s?this.ge():b==s?this.Pha():dvt.D.na(dvt.D.Ka,"COLON_SEP_LIST",[b,this.Pha()]);return dvt.ja.sk(b,
a)};c.prototype.Zu=function(){dvt.o.Fi()||this.zd("label",this.Gd())};c.prototype.ze=function(){return this.jo.categories||[this.getId()]};c.prototype.pe=function(a){var c=this.Oi.Ua().Ab;return a.type==dvt.pa.He||c.qv(a)?this:c.Xi(a)?b.pe(this.Oi,this,a):s};c.prototype.Dg=function(a){return this.V(a)};c.prototype.Bm=function(){return this.hb()};c.prototype.Rf=function(){this.$c=n;this.rd()};c.prototype.Md=function(){this.$c=t;this.Qc()};c.prototype.Od=D("$c");c.prototype.Rbb=z("qCa");c.prototype.Nna=
D("qCa");dvt.j.u(b,dvt.Ab);b.prototype.yD=function(a){return this.Xi(a)&&!a.ctrlKey};b.prototype.qv=function(a){return a.keyCode==dvt.G.wi&&a.ctrlKey};b.pe=function(a,b,c){var d=k.apa(a),e=k.$oa(a);c=c.keyCode==dvt.G.kg&&d||c.keyCode==dvt.G.mg&&!d||c.keyCode==dvt.G.hi&&e||c.keyCode==dvt.G.xg&&!e;a=a.uk();c=dvt.ea.jb(a,b)+(c?1:-1);return c<a.length&&0<=c?a[c]:b};b.prototype.yk=function(a){var c=this.Ra.Ye();return c&&a.keyCode==dvt.G.vi?(this.Ra.Uw(c),dvt.K.oc(a),c):b.q.yk.call(this,a)};dvt.j.u(a,
dvt.va);a.prototype.oh=function(a,b){var c=new dvt.Nd(this.g(),this,0.75*this.Oi.lb()),d=c.da,e=this.qd();this.ga(b.qd().Ca());d.J(dvt.B.pq,this,this.qd,this.ga,e);e=this.ho();this.Sp(b.ho());d.J(dvt.B.bg,this,this.ho,this.Sp,e);b.P(0);a.add(c,1)};a.prototype.Vj=function(a){a.add(new dvt.Ij(this.g(),this,0.5*this.Oi.lb()),0)};a.prototype.Si=function(a){this.P(0);a.add(new dvt.Ch(this.g(),this,0.5*this.Oi.lb()),2)};a.prototype.ho=function(){return[this.kj(),this.lj(),this.getWidth(),this.getHeight()]};
a.prototype.Sp=function(a){this.dz(a[0]);this.ez(a[1]);this.Xa(a[2]);this.rb(a[3])};var k={};dvt.j.u(k,dvt.j);k.ua=function(b,c,e,f){var h=b.g(),v=new dvt.ka(h,e.x,e.y,e.a,e.b);v.gc();c.k(v);f||(f=k.vo(b,e.a,e.b));if(f.kp){b.Vpa(f.kp);for(var v=b.v()._gapRatio,w=k.Qb(b),x=k.$oa(b),B=k.apa(b),A=new dvt.dE,C=0,E=0,H=0,G=0;G<f.kp.length;G++){for(var K=f.kp[G],I=K.lIa(),P=K.BJa(),S=I*f.J8,R=P*f.eaa,da=K.getCount(),na=0,ta=n,la;0<da;){if(I!=C||P!=E)H=0;0==H&&(la=k.tAa(A,I,P,f.eHa,f.uLa,w));if(la==s)break;
var Ga=la.Hma*f.J8+S/2,Aa=la.daa*f.eaa+R/2,Ga=e.x+(B?e.a-Ga:Ga),Aa=e.y+(x?e.b-Aa:Aa),Ra=Math.min(1-H,da),Oa,Ya,wb,hc;w?(Oa=Ga-S/2,Ya=x?Aa+R*(0.5-Ra-H):Aa+R*(H-0.5),wb=S,hc=R*Ra):(Oa=B?Ga+S*(0.5-Ra-H):Ga+S*(H-0.5),Ya=Aa-R/2,wb=S*Ra,hc=R);var lb;1==Ra?(lb=K.getId()+"_"+na,na++):lb=Math.random();if(K.V_())lb=new d(b,Ga,Aa,S,R,K.V_(),K.toa(),K.roa(),K.soa(),lb+"_I");else{var Rb=new dvt.ka(h,Oa,Ya,wb,hc);Rb.gc();K.k(Rb);lb=new a(b,K.yc(),Ga,Aa,S-f.J8*v,R-f.eaa*v,lb+"_S");lb.eb(K.xc());lb.Kb(K.In(),s,K.Cj());
lb.PO(K.xc())}1>Ra&&(Rb=new dvt.Kd,Rb.Ee(Oa,Ya,wb,hc),lb.Ne(Rb));ta&&(K.Rbb(new dvt.N(Ga,Aa)),ta=t);K.k(lb);b.Yab(lb);da-=Ra;H=(H+Ra)%1}c.k(K);K.Bcb();C=I;E=P}}else k.fq(b,c,e)};k.vo=function(a,b,d){var e=a.v(),f=e.items;if(!f)return{};for(var h=dvt.ea.MN(e.hiddenCategories),w=[],x=0,B=1,A=1,C=0;C<f.length;C++)if(f[C]!=s){var E=new c(a,f[C]);if(!h||!dvt.ea.UT(h,E.ze())){var H=E.lIa(),G=E.BJa();H>B&&(B=H);G>A&&(A=G);x+=H*G*E.getCount();w.push(E)}}if(0==x)return{};f=e.columnWidth;h=e.rowHeight;if(!b||
!d)f||(f=h?h:e._defaultSize),h||(h=f);a=k.Qb(a);C=e.columnCount;e=e.rowCount;!C&&!e&&(b&&d?a?e=k.EQ(Math.sqrt(x*d/b),A):C=k.EQ(Math.sqrt(x*b/d),B):b?C=Math.max(Math.floor(b/f),1):d?e=Math.max(Math.floor(d/h),1):a?e=k.EQ(Math.sqrt(x),A):C=k.EQ(Math.sqrt(x),B));C?e||(e=k.EQ(x/C,A)):C=k.EQ(x/e,B);b&&d&&(f||(f=h?h:Math.min(b/C,d/e)),h||(h=f));return 0>=C||0>=e||0>=f||0>=h?{}:{kp:w,eHa:C,uLa:e,J8:f,eaa:h}};k.EQ=function(a,b){return Math.ceil(a/b)*b};k.tAa=function(a,b,c,d,e,f){if(f)return(a=k.tAa(a,c,
b,e,d,t))?{Hma:a.daa,daa:a.Hma}:s;for(f=0;f<e-c+1;f++)for(var h=0;h<d-b+1;h++)if(k.wWa(a,h,f,b,c))return k.N0a(a,h,f,b,c),{Hma:h,daa:f};return s};k.wWa=function(a,b,c,d,e){for(var f=0;f<e;f++)for(var h=0;h<d;h++)if(a.get(b+h,c+f))return t;return n};k.N0a=function(a,b,c,d,e){for(var f=0;f<e;f++)for(var h=0;h<d;h++)a.put(b+h,c+f,n)};k.fq=function(a,b,c){var d=a.v(),e=dvt.D.bh(d,"labelNoData",dvt.D.Ka,"NO_DATA");b=dvt.Aa.fq(b,e,c.Ca(),a.Ua(),d._statusMessageStyle);a.Xab(b)};k.Qb=function(a){return"vertical"==
a.v().layout};k.$oa=function(a){a=a.v().layoutOrigin;return"bottomStart"==a||"bottomEnd"==a};k.apa=function(a){var b=a.v().layoutOrigin,b="topEnd"==b||"bottomEnd"==b;return dvt.o.$(a.g())?!b:b};dvt.ye(dvt,"PictoChart",dvt.th);dvt.ye(dvt.th,"newInstance",dvt.th.newInstance);dvt.ye(dvt.th.prototype,"destroy",dvt.th.prototype.ra);dvt.ye(dvt.th.prototype,"getAutomation",dvt.th.prototype.ni);dvt.ye(dvt.th.prototype,"highlight",dvt.th.prototype.Me);dvt.ye(dvt.th.prototype,"render",dvt.th.prototype.ua);
dvt.ye(dvt.th.prototype,"select",dvt.th.prototype.select);dvt.ye(h.prototype,"getDomElementForSubId",h.prototype.pi);dvt.ye(h.prototype,"getItem",h.prototype.getItem);dvt.ye(h.prototype,"getItemCount",h.prototype.wT)})();
  return dvt;
});

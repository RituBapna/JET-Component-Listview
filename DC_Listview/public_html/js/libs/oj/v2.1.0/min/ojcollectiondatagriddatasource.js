/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
define(["ojs/ojcore","jquery","ojs/ojdatasource-common","ojs/ojmodel","ojs/ojarraydatagriddatasource"],function(b){b.Fd=function(f,a,d,c,e){b.l.hC(d);this.Gc=f;this.zf=a;this.KJ=d;this.Da=c;this.xd=e};o_("CollectionHeaderSet",b.Fd,b);b.Fd.prototype.Ada=function(f){b.l.FI(f);null!=f&&f.length===this.getCount()&&(this.Bu=f)};b.Fd.prototype.getData=function(f,a){var d;b.l.assert(f<=this.zf&&f>=this.Gc,"index out of bounds");b.l.assert(null==a||0==a,"level out of bounds");if(null!=this.Da){if(null==this.Bu)return null;
d=this.Bu[f-this.Gc];return d.get(this.Da)}return this.KJ[f]};b.b.g("CollectionHeaderSet.prototype.getData",{getData:b.Fd.prototype.getData});b.Fd.prototype.getMetadata=function(f,a){var d;b.l.assert(f<=this.zf&&f>=this.Gc,"index out of bounds");b.l.assert(null==a||0==a,"level out of bounds");if(null!=this.Da){if(null==this.Bu)return null;d=this.Bu[f-this.Gc];return{key:b.Xr.uw(d)}}d=this.getData(f,a);return this.xd.key===d?{key:d,sortDirection:this.xd.direction}:{key:d}};b.b.g("CollectionHeaderSet.prototype.getMetadata",
{getMetadata:b.Fd.prototype.getMetadata});b.Fd.prototype.getLevelCount=function(){return 0<this.getCount()?1:0};b.b.g("CollectionHeaderSet.prototype.getLevelCount",{getLevelCount:b.Fd.prototype.getLevelCount});b.Fd.prototype.getExtent=function(f,a){b.l.assert(f<=this.zf&&f>=this.Gc,"index out of bounds");b.l.assert(null==a||0==a,"level out of bounds");return{extent:1,more:{before:!1,after:!1}}};b.b.g("CollectionHeaderSet.prototype.getExtent",{getExtent:b.Fd.prototype.getExtent});b.Fd.prototype.getDepth=
function(f,a){b.l.assert(f<=this.zf&&f>=this.Gc,"index out of bounds");b.l.assert(null==a||0==a,"level out of bounds");return 1};b.b.g("CollectionHeaderSet.prototype.getDepth",{getDepth:b.Fd.prototype.getDepth});b.Fd.prototype.getCount=function(){return Math.max(0,this.zf-this.Gc)};b.b.g("CollectionHeaderSet.prototype.getCount",{getCount:b.Fd.prototype.getCount});b.Fd.prototype.getStart=function(){return this.Gc};b.b.g("CollectionHeaderSet.prototype.getStart",{getStart:b.Fd.prototype.getStart});b.Fd.prototype.jaa=
function(){return this.zf};b.b.g("CollectionHeaderSet.prototype.getEnd",{jaa:b.Fd.prototype.jaa});b.Fd.prototype.qaa=function(){return this.KJ};b.b.g("CollectionHeaderSet.prototype.getHeaders",{qaa:b.Fd.prototype.qaa});b.Fd.prototype.xC=function(){return this.Da};b.b.g("CollectionHeaderSet.prototype.getRowHeader",{xC:b.Fd.prototype.xC});b.Le=function(f,a,d,c,e){b.l.hC(e);this.sa=f;this.Ya=a;this.xn=d;this.vu=c;this.We=e};o_("CollectionCellSet",b.Le,b);b.Le.prototype.Ada=function(f){b.l.FI(f);null!=
f&&f.length===this.getCount("row")&&(this.Bu=f)};b.Le.prototype.getData=function(b){var a;a=this.sc(b);return null==a?null:a.get(this.We[b.column])};b.b.g("CollectionCellSet.prototype.getData",{getData:b.Le.prototype.getData});b.Le.prototype.getMetadata=function(f){var a;a=this.sc(f);return null==a?null:{keys:{row:b.Xr.uw(a),column:this.We[f.column]}}};b.b.g("CollectionCellSet.prototype.getMetadata",{getMetadata:b.Le.prototype.getMetadata});b.Le.prototype.sc=function(f){var a;if(null==this.Bu)return null;
b.l.Zg(f);a=f.row;f=f.column;b.l.assert(a>=this.sa&&a<=this.Ya&&f>=this.xn&&f<=this.vu);return this.Bu[a-this.sa]};b.Le.prototype.getCount=function(b){return"row"===b?Math.max(0,this.Ya-this.sa):"column"===b?Math.max(0,this.vu-this.xn):0};b.b.g("CollectionCellSet.prototype.getCount",{getCount:b.Le.prototype.getCount});b.Le.prototype.jn=function(){return this.sa};b.b.g("CollectionCellSet.prototype.getStartRow",{jn:b.Le.prototype.jn});b.Le.prototype.laa=function(){return this.Ya};b.b.g("CollectionCellSet.prototype.getEndRow",
{laa:b.Le.prototype.laa});b.Le.prototype.hn=function(){return this.xn};b.b.g("CollectionCellSet.prototype.getStartColumn",{hn:b.Le.prototype.hn});b.Le.prototype.kaa=function(){return this.vu};b.b.g("CollectionCellSet.prototype.getEndColumn",{kaa:b.Le.prototype.kaa});b.Le.prototype.mr=function(){return this.We};b.b.g("CollectionCellSet.prototype.getColumns",{mr:b.Le.prototype.mr});b.Xr=function(){};b.Xr.uw=function(b){var a;a=b.wh();null==a&&(a=b.bs());return a};b.Ia=function(f,a){this.Sa=f;null!=
a&&(this.sD=a.rowHeader,this.columns=a.columns);this.u8();b.Ia.p.constructor.call(this)};o_("CollectionDataGridDataSource",b.Ia,b);b.b.la(b.Ia,b.Dp,"oj.CollectionDataGridDataSource");b.Ia.prototype.Init=function(){b.Ia.p.Init.call(this);this.op={};this.DB()};b.b.g("CollectionDataGridDataSource.prototype.Init",{Init:b.Ia.prototype.Init});b.Ia.prototype.DB=function(){this.Sa.on("add",this.rpa.bind(this));this.Sa.on("remove",this.upa.bind(this));this.Sa.on("change",this.spa.bind(this));this.Sa.on("refresh",
this.Moa.bind(this));this.Sa.on("reset",this.Noa.bind(this))};b.Ia.prototype.Vqa=function(){return null!=this.data};b.Ia.prototype.getCount=function(b){var a;void 0==this.precision&&(this.precision={});if("row"==b){a=this.rf();if(-1===a||0===a&&(!this.Vqa()||0<this.Uq()))return this.precision[b]="estimate",-1;this.precision[b]="exact";return this.Uq()}if("column"==b){if(null!=this.columns)return this.precision[b]="exact",this.columns.length;this.precision[b]="estimate";return-1}return 0};b.b.g("CollectionDataGridDataSource.prototype.getCount",
{getCount:b.Ia.prototype.getCount});b.Ia.prototype.getCountPrecision=function(b){null!=this.precision&&null!=this.precision[b]||this.getCount(b);return this.precision[b]};b.b.g("CollectionDataGridDataSource.prototype.getCountPrecision",{getCountPrecision:b.Ia.prototype.getCountPrecision});b.Ia.prototype.fetchHeaders=function(b,a,d){var c,e;null!=a&&(c=b.axis,e={},e.xba=b,e.callbacks=a,e.iC=d,this.op[c]=e)};b.b.g("CollectionDataGridDataSource.prototype.fetchHeaders",{fetchHeaders:b.Ia.prototype.fetchHeaders});
b.Ia.prototype.dpa=function(f,a,d,c){var e,g,h,k;e=f.axis;g=f.start;h=f.count;if("column"===e)null!=this.columns?(c=Math.min(this.columns.length,g+h),k=new b.Fd(g,c,this.columns,void 0,this.mk)):k=new b.Ke(g,g,e,null);else if("row"===e){if(null!=this.sD){null!=c&&(h=c.count);c=Math.min(this.Uq(),g+h);k=new b.Fd(g,c,this.columns,this.sD);this.C7(g,c,k,f,a,d);return}k=new b.Ke(g,g,e,null)}null!=a&&a.success&&a.success.call(d.success,k,f)};b.Ia.prototype.n3=function(b){var a,d,c,e,g,h;for(a=0;a<b.length;a+=
1)d=b[a],"row"===d.axis?(c=d.start,e=d.count):"column"===d.axis&&(g=d.start,h=d.count);return{rowStart:c,rowCount:e,colStart:g,colCount:h}};b.Ia.prototype.Eoa=function(f,a,d,c){var e,g,h;e=this.n3(f);g=e.rowStart;c=null!=c?Math.min(this.Uq(),g+c.count):Math.min(this.Uq(),g+e.rowCount);h=e.colStart;e=Math.min(null==this.columns?0:this.columns.length,h+e.colCount);e=new b.Le(g,c,h,e,this.columns);this.C7(g,c,e,f,a,d)};b.Ia.prototype.C7=function(b,a,d,c,e,g){var h;for(h=[];b<a;b++)h.push(this.Sa.at(b,
{deferred:!0}));Promise.all(h).then(function(a){d.Ada(a);e.success.call(g.success,d,c)})};b.Ia.prototype.fetchCells=function(b,a,d){null!=a&&(this.ai={},this.ai.g$=b,this.ai.callbacks=a,this.ai.iC=d);this.sma(b)};b.b.g("CollectionDataGridDataSource.prototype.fetchCells",{fetchCells:b.Ia.prototype.fetchCells});b.Ia.prototype.A6=function(b){var a,d,c,e,g;a=this.op[b];null!=a&&(d=a.xba,c=a.callbacks,e=a.iC,"row"===b&&(g=a.wT),this.dpa(d,c,e,g),this.op[b]=null)};b.Ia.prototype.Zsa=function(){this.Eoa(this.ai.g$,
this.ai.callbacks,this.ai.iC,this.ai.wT)};b.Ia.prototype.sma=function(b){var a;b=this.n3(b);a=b.rowStart;this.Sa.tD(a,b.rowCount).then(function(b){this.data=!0;this.Mua(b.start,b.count);void 0===this.columns?this.Sa.at(a,{deferred:!0}).then(function(a){null!=a&&this.uS(a);this.N1()}.bind(this)):this.N1()}.bind(this),function(a){this.tma(a)}.bind(this))};b.Ia.prototype.tma=function(f){b.r.error(f);null!=this.op&&(this.B6("column",f),this.B6("row",f));null!=this.ai&&this.$sa(f)};b.Ia.prototype.B6=function(b,
a){var d,c,e;d=this.op[b];null!=d&&(c=d.callbacks,e=d.iC,d=d.xba,c.error&&c.error.call(e.error,a,d),this.op[b]=null)};b.Ia.prototype.$sa=function(b){var a,d,c;a=this.ai.callbacks;d=this.ai.iC;c=this.ai.g$;a.error&&a.error.call(d.error,b,c);this.ai=null};b.Ia.prototype.N1=function(){null!=this.op&&(this.A6("column"),this.A6("row"));null!=this.ai&&this.Zsa()};b.Ia.prototype.Mua=function(b,a){var d={start:b,count:a};null!=this.op.row&&(this.op.row.wT=d);null!=this.ai&&(this.ai.wT=d)};b.Ia.prototype.uS=
function(b){this.columns=b.keys();-1!=this.columns.indexOf(this.sD)&&this.columns.splice(this.columns.indexOf(this.sD),1)};b.Ia.prototype.keys=function(f){var a,d,c,e,g;a=f.row;d=f.column;g=this;return new Promise(function(f){g.Sa.at(a,{deferred:!0}).then(function(a){null==a?f({row:null,column:null}):(c=b.Xr.uw(a),null==g.columns&&g.uS(a),e=g.columns[d],f({row:c,column:e}))}.bind(g))})};b.b.g("CollectionDataGridDataSource.prototype.keys",{keys:b.Ia.prototype.keys});b.Ia.prototype.indexes=function(b){var a,
d,c,e;a=b.row;d=b.column;e=this;return new Promise(function(b){e.Sa.indexOf(a,{deferred:!0}).then(function(a){-1===a?b({row:-1,column:-1}):null==e.columns?e.Sa.at(a,{deferred:!0}).then(function(f){e.uS(f);c=e.columns.indexOf(d);-1===c&&(a=-1);b({row:a,column:c})}.bind(e)):(c=e.columns.indexOf(d),-1===c&&(a=-1),b({row:a,column:c}))}.bind(e))})};b.b.g("CollectionDataGridDataSource.prototype.indexes",{indexes:b.Ia.prototype.indexes});b.Ia.prototype.getCapability=function(b){return"sort"===b?"column":
"move"===b?"row":null};b.b.g("CollectionDataGridDataSource.prototype.getCapability",{getCapability:b.Ia.prototype.getCapability});b.Ia.prototype.sort=function(b,a,d){var c,e,g;null==d&&(d={});null==b?this.cS(a,d):(e=b.direction,g=b.key,b=b.axis,"column"===b?(this.Sa.tb()?(this.Sa.comparator=g,this.Sa.sortDirection="ascending"===e?1:-1):("ascending"===e&&(c=function(a,b){var c,d;a=a.get(g);b=b.get(g);c=isNaN(a);d=isNaN(b);a instanceof Date&&(a=a.toISOString(),c=!0);b instanceof Date&&(b=b.toISOString(),
d=!0);return c&&d?a<b?-1:a===b?0:1:c?1:d?-1:a-b}),"descending"===e&&(c=function(a,b){var c,d;a=a.get(g);b=b.get(g);c=isNaN(a);d=isNaN(b);a instanceof Date&&(a=a.toISOString());b instanceof Date&&(b=b.toISOString());return c&&d?a>b?-1:a===b?0:1:c?-1:d?1:b-a}),this.Sa.comparator=c),this.Sa.sort(),this.u8(g),null!=a&&null!=a.success&&a.success.call(d.success)):null!=a&&null!=a.error&&a.error.call(d.error,"Axis value not supported"))};b.b.g("CollectionDataGridDataSource.prototype.sort",{sort:b.Ia.prototype.sort});
b.Ia.prototype.cS=function(b,a){this.Sa.comparator=null;this.Sa.reset();null!=b&&null!=b.success&&b.success.call(a.success)};b.Ia.prototype.u8=function(b){var a,d;a=this.Sa.comparator;d=-1===this.Sa.sortDirection?"descending":"ascending";null==b&&"function"===typeof a?this.mk={}:(this.mk={},this.mk.axis="column",this.mk.direction=d,this.mk.key=null==b?a:null)};b.Ia.prototype.move=function(b,a,d,c,e){var g;this.Sa.get(b,{deferred:!0}).then(function(d){null==a?(this.Sa.remove(d),this.Sa.add(d),null!=
c&&null!=c.success&&c.success.call(e.success)):(b===a?(g=this.Sa.indexOf(a,{deferred:!0}),this.Sa.remove(d)):(this.Sa.remove(d),g=this.Sa.indexOf(a,{deferred:!0})),g.then(function(a){this.Sa.add(d,{at:a,bEa:!0});null!=c&&null!=c.success&&c.success.call(e.success)}.bind(this)))}.bind(this))};b.b.g("CollectionDataGridDataSource.prototype.move",{move:b.Ia.prototype.move});b.Ia.prototype.moveOK=function(){return"valid"};b.b.g("CollectionDataGridDataSource.prototype.moveOK",{moveOK:b.Ia.prototype.moveOK});
b.Ia.prototype.Cm=function(b,a,d,c,e){var g={source:this};g.operation=b;g.keys={row:a,column:d};g.indexes={row:c,column:e};return g};b.Ia.prototype.rpa=function(f){this.handleEvent("change",this.Cm("insert",b.Xr.uw(f),null,f.index,-1))};b.Ia.prototype.upa=function(f,a,d){this.handleEvent("change",this.Cm("delete",b.Xr.uw(f),null,d.index,-1))};b.Ia.prototype.spa=function(f){this.handleEvent("change",this.Cm("update",b.Xr.uw(f),null,f.index,-1))};b.Ia.prototype.Moa=function(){this.data=null;this.handleEvent("change",
this.Cm("refresh",null,null))};b.Ia.prototype.Noa=function(){this.data=null;this.handleEvent("change",this.Cm("reset",null,null))};b.Ia.prototype.Uq=function(){return this.Sa.size()};b.Ia.prototype.rf=function(){return void 0===this.Sa.totalResults?-1:this.Sa.totalResults};b.Ia.prototype.baa=function(){return this.Sa};b.b.g("CollectionDataGridDataSource.prototype.getCollection",{baa:b.Ia.prototype.baa});b.Ia.prototype.mr=function(){return this.columns};b.b.g("CollectionDataGridDataSource.prototype.getColumns",
{mr:b.Ia.prototype.mr});b.Ia.prototype.xC=function(){return this.sD};b.b.g("CollectionDataGridDataSource.prototype.getRowHeader",{xC:b.Ia.prototype.xC});b.Ia.prototype.getData=function(){return this.data};b.b.g("CollectionDataGridDataSource.prototype.getData",{getData:b.Ia.prototype.getData})});
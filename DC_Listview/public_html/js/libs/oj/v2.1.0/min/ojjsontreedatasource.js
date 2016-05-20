/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
define(["ojs/ojcore","jquery","ojs/ojdatasource-common"],function(b){b.Ev=function(){this.id=null;this.depth=0;this.parent=null;this.children=[];this.gV=this.attr=this.title=null};b.Ev.prototype.bja=function(b){return function(a,d){return a.attr&&d.attr&&a.attr[b]&&d.attr[b]?a.attr[b]<d.attr[b]?-1:a.attr[b]===d.attr[b]?0:1:a[b]<d[b]?-1:a[b]===d[b]?0:1}};b.Ev.prototype.Bla=function(b){return function(a,d){return a.attr&&d.attr&&a.attr[b]&&d.attr[b]?a.attr[b]<d.attr[b]?1:a.attr[b]===d.attr[b]?0:-1:
a[b]<d[b]?1:a[b]===d[b]?0:-1}};b.Ev.prototype.P8=function(b){var a=b.key;"ascending"===b.direction?this.children.sort(this.bja(a)):"descending"===b.direction&&this.children.sort(this.Bla(a));for(var a=0,d=this.children.length;a<d;a++)this.children[a].P8(b)};b.Oc=function(f){var a;a=new b.Ev;f.id||(a.id="root");this.data=this.V0({count:0},a,f);b.Oc.p.constructor.call(this,a)};o_("JsonTreeDataSource",b.Oc,b);b.b.la(b.Oc,b.ks,"oj.JsonTreeDataSource");b.Oc.prototype.Init=function(){b.Oc.p.Init.call(this)};
b.b.g("JsonTreeDataSource.prototype.Init",{Init:b.Oc.prototype.Init});b.Oc.prototype.V0=function(f,a,d,c){var e,g,h,k,l,p,n;c||(c=0);for(k in d)if("children"==k||0==c&&d instanceof Array)for(e=0==c&&d instanceof Array?d:d[k],c++,n=0;n<e.length;n++){h=e[n];g=new b.Ev;h.id||(f.count++,h.attr?h.attr.id||(h.attr.id="rid_"+f.count):g.id="rid_"+f.count);for(l in h)for(p in g)l==p&&"children"!=l&&(g[p]=h[l]),"depth"==p&&(g[p]=c);a.children.push(g);for(p in h)"children"==p&&this.V0(f,a.children[n],h,c)}return a};
b.Oc.prototype.tg=function(b){b||(b=this.data.id);b=this.Sq(this.data,b);return b.children?b.children.length:0};b.b.g("JsonTreeDataSource.prototype.getChildCount",{tg:b.Oc.prototype.tg});b.Oc.prototype.ah=function(f,a,d){var c,e,g,h,k;g=[];f||(f=this.data.id);h=this.Sq(this.data,f);a||(a=[],a.start=0,a.count=h.children.length);a.count||(a.count=h.children.length);a.start||(a.start=0);c=a.start;e=Math.min(h.children.length,c+a.count);for(a=c;a<e;a+=1)k=new b.Ev,h.children[a].attr&&(k.attr=h.children[a].attr),
h.children[a].id&&(k.id=h.children[a].id),h.children[a].depth&&(k.depth=h.children[a].depth),h.children[a].title&&(k.title=h.children[a].title),h.children[a].parent&&(k.parent=h.children[a].parent),k.gV=0<h.children[a].children.length?!1:!0,g.push(k);f=new b.fg(c,e,g,f);null!=d&&null!=d.success&&d.success.call(null,f)};b.b.g("JsonTreeDataSource.prototype.fetchChildren",{ah:b.Oc.prototype.ah});b.Oc.prototype.Kx=function(f,a){var d,c,e,g;e=[];f||(f=this.data.id);g=this.Sq(this.data,f);d=[];d.start=
0;d.count=g.children.length;c=d.start;for(d=Math.min(g.children.length,c+d.count);c<d;c+=1)g.children[c].gV=0<g.children[c].children.length?!1:!0,e.push(g.children[c]);e=new b.fg(0,e.length,e,f);null!=a&&null!=a.success&&a.success.call(null,e)};b.b.g("JsonTreeDataSource.prototype.fetchDescendants",{Kx:b.Oc.prototype.Kx});b.Oc.prototype.moveOK=function(){return"valid"};b.b.g("JsonTreeDataSource.prototype.moveOK",{moveOK:b.Oc.prototype.moveOK});b.Oc.prototype.move=function(f,a,d,c){var e;e=a;if(!e||
e==this.data.id){if("inside"!=d){b.r.log("Error: root can not be the reference node if position equals to "+d);return}e||(e=this.data.id)}f=this.Sq(null,f);this.Sq(f,e)?b.r.log("Error: the node to move contains the reference node as its sub-tree."):(a=this.Sq(null,e),e=this.xP(e),this.Qta(f),"inside"==d?(this.Fo(f,f.depth-(a.depth+1)),a.children.push(f)):"before"==d?(this.Fo(f,f.depth-a.depth),d=e.children.indexOf(a),-1<d&&(0!=d?e.children.splice(d,0,f):e.children.unshift(f))):"after"==d?(this.Fo(f,
f.depth-a.depth),d=e.children.indexOf(a),-1<d&&e.children.splice(d+1,0,f)):"first"==d?(this.Fo(f,f.depth-a.depth),e.children.unshift(f)):"last"==d&&(this.Fo(f,f.depth-a.depth),e.children.push(f)),null!=c&&null!=c.success&&c.success.call(null,this.data))};b.b.g("JsonTreeDataSource.prototype.move",{move:b.Oc.prototype.move});b.Oc.prototype.sort=function(b,a){var d;d=this.Sq(this.data,this.data.id);d.P8(b);null!=a&&null!=a.success&&a.success.call(null,d)};b.b.g("JsonTreeDataSource.prototype.sort",{sort:b.Oc.prototype.sort});
b.Oc.prototype.To=function(){return{key:null,direction:"none"}};b.b.g("JsonTreeDataSource.prototype.getSortCriteria",{To:b.Oc.prototype.To});b.Oc.prototype.xP=function(b,a){var d,c=null;if(b==this.data.id)return null;a||(a=this.data);if(a.children&&0<a.children.length){for(d=0;d<a.children.length;d++)if(a.children[d].id&&a.children[d].id==b||a.children[d].attr&&a.children[d].attr.id==b)return a;for(d=0;d<a.children.length&&!(c=this.xP(b,a.children[d]));d++);}return c};b.Oc.prototype.Sq=function(b,
a){var d,c=null;b||(b=this.data);if(b.id&&b.id==a||b.attr&&b.attr.id==a)return b;if(null!=b.children)for(d=0;d<b.children.length&&!c;d++)c=b.children[d].id&&b.children[d].id==a||b.children[d].attr&&b.children[d].attr.id==a?b.children[d]:this.Sq(b.children[d],a);return c};b.Oc.prototype.Fo=function(b,a){var d;b.depth-=a;if(b.children&&0!=b.children.length)for(d=0;d<b.children.length;d++)this.Fo(b.children[d],a)};b.Oc.prototype.Qta=function(b){var a;b.id?a=b.id:b.attr&&(a=b.attr.id);(a=this.xP(a))||
(a=this.data);b=a.children.indexOf(b);-1<b&&a.children.splice(b,1)};b.Oc.prototype.getCapability=function(b){return"fetchDescendants"===b?"enable":"sort"===b?"default":"batchFetch"===b?"disable":"move"===b?"full":null};b.b.g("JsonTreeDataSource.prototype.getCapability",{getCapability:b.Oc.prototype.getCapability});b.fg=function(f,a,d,c){b.l.Go(f,null);b.l.Go(a,null);this.WAa=c;this.Er=f;this.GJ=a;this.lh=d};o_("JsonNodeSet",b.fg,b);b.fg.prototype.getParent=function(){return this.WAa};b.b.g("JsonNodeSet.prototype.getParent",
{getParent:b.fg.prototype.getParent});b.fg.prototype.getStart=function(){return this.Er};b.b.g("JsonNodeSet.prototype.getStart",{getStart:b.fg.prototype.getStart});b.fg.prototype.getCount=function(){return Math.max(0,this.GJ-this.Er)};b.b.g("JsonNodeSet.prototype.getCount",{getCount:b.fg.prototype.getCount});b.fg.prototype.getData=function(f){b.l.assert(f<=this.GJ&&f>=this.Er);f-=this.Er;return this.lh[f]?this.lh[f].attr:null};b.b.g("JsonNodeSet.prototype.getData",{getData:b.fg.prototype.getData});
b.fg.prototype.getMetadata=function(f){var a=[];b.l.assert(f<=this.GJ&&f>=this.Er);f-=this.Er;a.key=this.lh[f].id?this.lh[f].id:this.lh[f].attr.id;a.leaf=this.lh[f].gV;a.depth=this.lh[f].depth;null==a.leaf&&(a.leaf=this.lh[f].children&&0<this.lh[f].children.length?!1:!0);return a};b.b.g("JsonNodeSet.prototype.getMetadata",{getMetadata:b.fg.prototype.getMetadata});b.fg.prototype.Fo=function(b,a){var d;a++;b.depth=a;if(b.children&&0!=b.children.length)for(d=0;d<b.children.length;d++)this.Fo(b.children[d],
a)};b.fg.prototype.dh=function(f){var a,d,c;b.l.assert(f<=this.GJ&&f>=this.Er);f-=this.Er;d=this.lh[f].depth;a=this.lh[f].children;if(0==a.length)return null;f=this.lh[f].id?this.lh[f].id:this.lh[f].attr.id;for(c=0;c<a.length;c++)this.Fo(a[c],d);return new b.fg(0,a.length,a,f)};b.b.g("JsonNodeSet.prototype.getChildNodeSet",{dh:b.fg.prototype.dh})});
/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
/*
 Copyright 2013 jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license
 Copyright 2013 jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license
*/
define(["ojs/ojcore","jquery"],function(b){b.Nk=function(b){this.data=b;this.Init()};o_("DataSource",b.Nk,b);b.b.la(b.Nk,b.ji,"oj.DataSource");b.Nk.prototype.Init=function(){b.Nk.p.Init.call(this)};b.b.g("DataSource.prototype.Init",{Init:b.Nk.prototype.Init});b.ks=function(f){b.ks.p.constructor.call(this,f)};o_("TreeDataSource",b.ks,b);b.b.la(b.ks,b.Nk,"oj.TreeDataSource");b.V=function(f,a){if(this.constructor==b.V)throw Error(b.V.Kc.XCa+"\n"+b.V.Kc.WCa);this.data=f;this.options=a;this.fa=0;this.Init()};
o_("TableDataSource",b.V,b);b.b.la(b.V,b.Nk,"oj.TableDataSource");b.V.prototype.Init=function(){b.V.p.Init.call(this)};b.b.g("TableDataSource.prototype.Init",{Init:b.V.prototype.Init});b.V.prototype.totalSizeConfidence=function(){return"actual"};b.b.g("TableDataSource.prototype.totalSizeConfidence",{totalSizeConfidence:b.V.prototype.totalSizeConfidence});b.V.N={ADD:"add",REMOVE:"remove",RESET:"reset",REFRESH:"refresh",SORT:"sort",CHANGE:"change",REQUEST:"request",SYNC:"sync",ERROR:"error"};o_("TableDataSource.EventType",
b.V.N,b);b.V.Kc={_ERR_TABLE_DATASOURCE_INSTANTIATED_SUMMARY:"oj.TableDataSource constructor called.",_ERR_TABLE_DATASOURCE_INSTANTIATED_DETAIL:"Please do not instantiate oj.TableDataSource. Please use one of the subclasses instead such as oj.ArrayTableDataSource or oj.CollectionTableDataSource.",_ERR_DATA_INVALID_TYPE_SUMMARY:"Invalid data type.",_ERR_DATA_INVALID_TYPE_DETAIL:"Please specify the appropriate data type."};b.Dp=function(f){b.Dp.p.constructor.call(this,f)};o_("DataGridDataSource",b.Dp,
b);b.b.la(b.Dp,b.Nk,"oj.DataGridDataSource")});
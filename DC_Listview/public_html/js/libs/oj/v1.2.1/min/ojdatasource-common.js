/**
 * Copyright (c) 2014, 2015, Oracle and/or its affiliates.
 * All rights reserved.
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
define(["ojs/ojcore","jquery"],function(b){b.Pi=function(b){this.data=b;this.Init()};o_("DataSource",b.Pi,b);b.b.ga(b.Pi,b.Hg,"oj.DataSource");b.Pi.prototype.Init=function(){b.Pi.q.Init.call(this)};b.b.g("DataSource.prototype.Init",{Init:b.Pi.prototype.Init});b.mp=function(f){b.mp.q.constructor.call(this,f)};o_("TreeDataSource",b.mp,b);b.b.ga(b.mp,b.Pi,"oj.TreeDataSource");b.T=function(f,a){if(this.constructor==b.T)throw Error(b.T.dc.tqa+"\n"+b.T.dc.sqa);this.data=f;this.options=a;this.$=0;this.Init()};
o_("TableDataSource",b.T,b);b.b.ga(b.T,b.Pi,"oj.TableDataSource");b.T.prototype.Init=function(){b.T.q.Init.call(this)};b.b.g("TableDataSource.prototype.Init",{Init:b.T.prototype.Init});b.T.prototype.totalSizeConfidence=function(){return"actual"};b.b.g("TableDataSource.prototype.totalSizeConfidence",{totalSizeConfidence:b.T.prototype.totalSizeConfidence});b.T.D={ADD:"add",REMOVE:"remove",RESET:"reset",REFRESH:"refresh",SORT:"sort",CHANGE:"change",REQUEST:"request",SYNC:"sync",ERROR:"error"};o_("TableDataSource.EventType",
b.T.D,b);b.T.dc={_ERR_TABLE_DATASOURCE_INSTANTIATED_SUMMARY:"oj.TableDataSource constructor called.",_ERR_TABLE_DATASOURCE_INSTANTIATED_DETAIL:"Please do not instantiate oj.TableDataSource. Please use one of the subclasses instead such as oj.ArrayTableDataSource or oj.CollectionTableDataSource.",_ERR_DATA_INVALID_TYPE_SUMMARY:"Invalid data type.",_ERR_DATA_INVALID_TYPE_DETAIL:"Please specify the appropriate data type."};b.Om=function(f){b.Om.q.constructor.call(this,f)};o_("DataGridDataSource",b.Om,
b);b.b.ga(b.Om,b.Pi,"oj.DataGridDataSource")});
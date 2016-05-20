/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
/*
 Copyright 2013 jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license
*/
define(["ojs/ojcore", "jquery", "knockout", "ojs/ojdatasource-common"], function($oj$$72$$, $$$$67$$, $ko$$7$$) {
  $oj$$72$$.$ArrayPagingDataSource$ = function $$oj$$72$$$$ArrayPagingDataSource$$($data$$180$$) {
    this.data = $data$$180$$;
    this.current = 0;
    this.Init();
    this.$_setPageSize$(10);
  };
  $goog$exportPath_$$("ArrayPagingDataSource", $oj$$72$$.$ArrayPagingDataSource$, $oj$$72$$);
  $oj$$72$$.$Object$.$createSubclass$($oj$$72$$.$ArrayPagingDataSource$, $oj$$72$$.$DataSource$, "oj.ArrayPagingDataSource");
  $oj$$72$$.$ArrayPagingDataSource$.prototype.Init = function $$oj$$72$$$$ArrayPagingDataSource$$$Init$() {
    $oj$$72$$.$ArrayPagingDataSource$.$superclass$.Init.call(this);
  };
  $oj$$72$$.$Object$.$exportPrototypeSymbol$("ArrayPagingDataSource.prototype.Init", {Init:$oj$$72$$.$ArrayPagingDataSource$.prototype.Init});
  $oj$$72$$.$ArrayPagingDataSource$.prototype.$_getSize$ = function $$oj$$72$$$$ArrayPagingDataSource$$$$_getSize$$() {
    return this.$_hasMore$() ? this.$currentPageSize$ : this.totalSize() - this.current;
  };
  $oj$$72$$.$ArrayPagingDataSource$.prototype.$_refreshDataWindow$ = function $$oj$$72$$$$ArrayPagingDataSource$$$$_refreshDataWindow$$($options$$376$$) {
    $options$$376$$ = $options$$376$$ || {};
    this.$dataWindow$ = Array(this.$_getSize$());
    for (var $i$$512$$ = 0;$i$$512$$ < this.$dataWindow$.length;$i$$512$$++) {
      this.$dataWindow$[$i$$512$$] = this.data[this.current + $i$$512$$];
    }
    this.$_refreshObservableDataWindow$();
    this.$_endIndex$ = this.$_startIndex$ + this.$dataWindow$.length - 1;
    $options$$376$$.silent || this.handleEvent("sync", {data:this.$dataWindow$, startIndex:this.current});
  };
  $oj$$72$$.$ArrayPagingDataSource$.prototype.$_refreshObservableDataWindow$ = function $$oj$$72$$$$ArrayPagingDataSource$$$$_refreshObservableDataWindow$$() {
    if (void 0 !== this.$observableDataWindow$) {
      this.$observableDataWindow$.removeAll();
      for (var $i$$513$$ = 0;$i$$513$$ < this.$dataWindow$.length;$i$$513$$++) {
        this.$observableDataWindow$.push(this.$dataWindow$[$i$$513$$]);
      }
    }
  };
  $oj$$72$$.$ArrayPagingDataSource$.prototype.handleEvent = function $$oj$$72$$$$ArrayPagingDataSource$$$handleEvent$($eventType$$55$$, $event$$739$$) {
    return $oj$$72$$.$ArrayPagingDataSource$.$superclass$.handleEvent.call(this, $eventType$$55$$, $event$$739$$);
  };
  $oj$$72$$.$ArrayPagingDataSource$.prototype.$getWindow$ = function $$oj$$72$$$$ArrayPagingDataSource$$$$getWindow$$() {
    return this.$dataWindow$;
  };
  $oj$$72$$.$Object$.$exportPrototypeSymbol$("ArrayPagingDataSource.prototype.getWindow", {$getWindow$:$oj$$72$$.$ArrayPagingDataSource$.prototype.$getWindow$});
  $oj$$72$$.$ArrayPagingDataSource$.prototype.$getWindowObservable$ = function $$oj$$72$$$$ArrayPagingDataSource$$$$getWindowObservable$$() {
    void 0 === this.$observableDataWindow$ && (this.$observableDataWindow$ = $ko$$7$$.observableArray(), this.$_refreshObservableDataWindow$());
    return this.$observableDataWindow$;
  };
  $oj$$72$$.$Object$.$exportPrototypeSymbol$("ArrayPagingDataSource.prototype.getWindowObservable", {$getWindowObservable$:$oj$$72$$.$ArrayPagingDataSource$.prototype.$getWindowObservable$});
  $oj$$72$$.$ArrayPagingDataSource$.prototype.getPage = function $$oj$$72$$$$ArrayPagingDataSource$$$getPage$() {
    return this.$_page$;
  };
  $oj$$72$$.$Object$.$exportPrototypeSymbol$("ArrayPagingDataSource.prototype.getPage", {getPage:$oj$$72$$.$ArrayPagingDataSource$.prototype.getPage});
  $oj$$72$$.$ArrayPagingDataSource$.prototype.setPage = function $$oj$$72$$$$ArrayPagingDataSource$$$setPage$($value$$301$$, $options$$377$$) {
    $options$$377$$ = $options$$377$$ || {};
    $value$$301$$ = parseInt($value$$301$$, 10);
    try {
      $oj$$72$$.$ArrayPagingDataSource$.$superclass$.handleEvent.call(this, $oj$$72$$.$PagingModel$.$EventType$.BEFOREPAGE, {page:$value$$301$$, previousPage:this.$_page$});
    } catch ($err$$30$$) {
      return Promise.reject(null);
    }
    this.pageSize = null != $options$$377$$.pageSize ? $options$$377$$.pageSize : this.pageSize;
    $options$$377$$.startIndex = $value$$301$$ * this.pageSize;
    var $previousPage$$4$$ = this.$_page$;
    this.$_page$ = $value$$301$$;
    this.$_startIndex$ = $options$$377$$.startIndex;
    var $self$$225$$ = this;
    return new Promise(function($resolve$$67$$, $reject$$64$$) {
      $self$$225$$.$_fetchInternal$($options$$377$$).then(function() {
        $oj$$72$$.$ArrayPagingDataSource$.$superclass$.handleEvent.call($self$$225$$, $oj$$72$$.$PagingModel$.$EventType$.PAGE, {page:$self$$225$$.$_page$, previousPage:$previousPage$$4$$});
        $resolve$$67$$(null);
      }, function() {
        $self$$225$$.$_page$ = $previousPage$$4$$;
        $self$$225$$.$_startIndex$ = $self$$225$$.$_page$ * $self$$225$$.pageSize;
        $reject$$64$$(null);
      });
    });
  };
  $oj$$72$$.$Object$.$exportPrototypeSymbol$("ArrayPagingDataSource.prototype.setPage", {setPage:$oj$$72$$.$ArrayPagingDataSource$.prototype.setPage});
  $oj$$72$$.$ArrayPagingDataSource$.prototype.getStartItemIndex = function $$oj$$72$$$$ArrayPagingDataSource$$$getStartItemIndex$() {
    return this.$_startIndex$;
  };
  $oj$$72$$.$Object$.$exportPrototypeSymbol$("ArrayPagingDataSource.prototype.getStartItemIndex", {getStartItemIndex:$oj$$72$$.$ArrayPagingDataSource$.prototype.getStartItemIndex});
  $oj$$72$$.$ArrayPagingDataSource$.prototype.getEndItemIndex = function $$oj$$72$$$$ArrayPagingDataSource$$$getEndItemIndex$() {
    return this.$_endIndex$;
  };
  $oj$$72$$.$Object$.$exportPrototypeSymbol$("ArrayPagingDataSource.prototype.getEndItemIndex", {getEndItemIndex:$oj$$72$$.$ArrayPagingDataSource$.prototype.getEndItemIndex});
  $oj$$72$$.$ArrayPagingDataSource$.prototype.getPageCount = function $$oj$$72$$$$ArrayPagingDataSource$$$getPageCount$() {
    var $totalSize$$6$$ = this.totalSize();
    return-1 == $totalSize$$6$$ ? -1 : Math.ceil($totalSize$$6$$ / this.pageSize);
  };
  $oj$$72$$.$Object$.$exportPrototypeSymbol$("ArrayPagingDataSource.prototype.getPageCount", {getPageCount:$oj$$72$$.$ArrayPagingDataSource$.prototype.getPageCount});
  $oj$$72$$.$ArrayPagingDataSource$.prototype.fetch = function $$oj$$72$$$$ArrayPagingDataSource$$$fetch$($options$$378_opts$$40$$) {
    $options$$378_opts$$40$$ = $options$$378_opts$$40$$ || {};
    if (void 0 !== $options$$378_opts$$40$$.pageSize && void 0 !== $options$$378_opts$$40$$.startIndex) {
      if (!this.$_hasMore$()) {
        return Promise.resolve();
      }
      this.$currentPageSize$ = $options$$378_opts$$40$$.startIndex + $options$$378_opts$$40$$.pageSize;
    }
    this.$_refreshDataWindow$(null);
    return Promise.resolve();
  };
  $oj$$72$$.$Object$.$exportPrototypeSymbol$("ArrayPagingDataSource.prototype.fetch", {fetch:$oj$$72$$.$ArrayPagingDataSource$.prototype.fetch});
  $oj$$72$$.$ArrayPagingDataSource$.prototype.$_fetchInternal$ = function $$oj$$72$$$$ArrayPagingDataSource$$$$_fetchInternal$$($options$$379$$) {
    var $opts$$41$$ = $options$$379$$ || {};
    void 0 !== $opts$$41$$.startIndex && (this.current = $opts$$41$$.startIndex);
    void 0 !== $opts$$41$$.pageSize && (this.$currentPageSize$ = this.pageSize = $opts$$41$$.pageSize);
    this.$_refreshDataWindow$($options$$379$$);
    return Promise.resolve({data:this.$dataWindow$, startIndex:this.current});
  };
  $oj$$72$$.$ArrayPagingDataSource$.prototype.$_hasMore$ = function $$oj$$72$$$$ArrayPagingDataSource$$$$_hasMore$$() {
    return this.current + this.$currentPageSize$ < this.totalSize();
  };
  $oj$$72$$.$ArrayPagingDataSource$.prototype.$_setPageSize$ = function $$oj$$72$$$$ArrayPagingDataSource$$$$_setPageSize$$($n$$39$$) {
    this.$currentPageSize$ = this.pageSize = $n$$39$$;
    this.$_refreshDataWindow$(null);
  };
  $oj$$72$$.$ArrayPagingDataSource$.prototype.totalSize = function $$oj$$72$$$$ArrayPagingDataSource$$$totalSize$() {
    return this.data.length;
  };
  $oj$$72$$.$ArrayPagingDataSource$.prototype.totalSizeConfidence = function $$oj$$72$$$$ArrayPagingDataSource$$$totalSizeConfidence$() {
    return "actual";
  };
  $oj$$72$$.$Object$.$exportPrototypeSymbol$("ArrayPagingDataSource.prototype.totalSizeConfidence", {totalSizeConfidence:$oj$$72$$.$ArrayPagingDataSource$.prototype.totalSizeConfidence});
  $oj$$72$$.$ArrayPagingDataSource$.prototype.getCapability = function $$oj$$72$$$$ArrayPagingDataSource$$$getCapability$() {
    return null;
  };
  $oj$$72$$.$Object$.$exportPrototypeSymbol$("ArrayPagingDataSource.prototype.getCapability", {getCapability:$oj$$72$$.$ArrayPagingDataSource$.prototype.getCapability});
});

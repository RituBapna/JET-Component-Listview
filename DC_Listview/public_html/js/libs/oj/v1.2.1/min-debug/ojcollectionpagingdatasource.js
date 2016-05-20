/**
 * Copyright (c) 2014, 2015, Oracle and/or its affiliates.
 * All rights reserved.
 */
"use strict";
define(["ojs/ojcore", "jquery", "knockout", "ojs/ojdatasource-common", "ojs/ojmodel", "ojs/ojknockout-model"], function($oj$$63$$, $$$$58$$, $ko$$6$$) {
  $oj$$63$$.$CollectionPagingDataSource$ = function $$oj$$63$$$$CollectionPagingDataSource$$($collection$$57$$) {
    this.$collection$ = $collection$$57$$;
    this.current = 0;
    this.Init();
    this.$dataWindow$ = [];
    this.$_setPageSize$(10);
  };
  $goog$exportPath_$$("CollectionPagingDataSource", $oj$$63$$.$CollectionPagingDataSource$, $oj$$63$$);
  $oj$$63$$.$Object$.$createSubclass$($oj$$63$$.$CollectionPagingDataSource$, $oj$$63$$.$DataSource$, "oj.CollectionPagingDataSource");
  $oj$$63$$.$CollectionPagingDataSource$.prototype.Init = function $$oj$$63$$$$CollectionPagingDataSource$$$Init$() {
    $oj$$63$$.$CollectionPagingDataSource$.$superclass$.Init.call(this);
  };
  $oj$$63$$.$Object$.$exportPrototypeSymbol$("CollectionPagingDataSource.prototype.Init", {Init:$oj$$63$$.$CollectionPagingDataSource$.prototype.Init});
  $oj$$63$$.$CollectionPagingDataSource$.prototype.$_getSize$ = function $$oj$$63$$$$CollectionPagingDataSource$$$$_getSize$$() {
    return this.$_hasMore$() ? this.$currentPageSize$ : this.totalSize() - this.current;
  };
  $oj$$63$$.$CollectionPagingDataSource$.prototype.$_refreshDataWindow$ = function $$oj$$63$$$$CollectionPagingDataSource$$$$_refreshDataWindow$$() {
    this.$dataWindow$ = Array(this.$_getSize$());
    var $self$$185$$ = this;
    return this.$collection$.$IterativeAt$(this.current, this.current + this.$dataWindow$.length).then(function($array$$16$$) {
      for (var $i$$382$$ = 0;$i$$382$$ < $array$$16$$.length;$i$$382$$++) {
        $self$$185$$.$dataWindow$[$i$$382$$] = $array$$16$$[$i$$382$$];
      }
      $self$$185$$.$_refreshObservableDataWindow$();
      $self$$185$$.$_endIndex$ = $self$$185$$.$_startIndex$ + $self$$185$$.$dataWindow$.length - 1;
    });
  };
  $oj$$63$$.$CollectionPagingDataSource$.prototype.$_refreshObservableDataWindow$ = function $$oj$$63$$$$CollectionPagingDataSource$$$$_refreshObservableDataWindow$$() {
    if (void 0 !== this.$observableDataWindow$) {
      this.$observableDataWindow$.removeAll();
      for (var $i$$383$$ = 0;$i$$383$$ < this.$dataWindow$.length;$i$$383$$++) {
        this.$observableDataWindow$.push($oj$$63$$.$KnockoutUtils$.map(this.$dataWindow$[$i$$383$$]));
      }
    }
  };
  $oj$$63$$.$CollectionPagingDataSource$.prototype.$getWindow$ = function $$oj$$63$$$$CollectionPagingDataSource$$$$getWindow$$() {
    return this.$dataWindow$;
  };
  $oj$$63$$.$Object$.$exportPrototypeSymbol$("CollectionPagingDataSource.prototype.getWindow", {$getWindow$:$oj$$63$$.$CollectionPagingDataSource$.prototype.$getWindow$});
  $oj$$63$$.$CollectionPagingDataSource$.prototype.$getWindowObservable$ = function $$oj$$63$$$$CollectionPagingDataSource$$$$getWindowObservable$$() {
    void 0 === this.$observableDataWindow$ && (this.$observableDataWindow$ = $ko$$6$$.observableArray(), this.$_refreshObservableDataWindow$());
    return this.$observableDataWindow$;
  };
  $oj$$63$$.$Object$.$exportPrototypeSymbol$("CollectionPagingDataSource.prototype.getWindowObservable", {$getWindowObservable$:$oj$$63$$.$CollectionPagingDataSource$.prototype.$getWindowObservable$});
  $oj$$63$$.$CollectionPagingDataSource$.prototype.getPage = function $$oj$$63$$$$CollectionPagingDataSource$$$getPage$() {
    return this.$_page$;
  };
  $oj$$63$$.$Object$.$exportPrototypeSymbol$("CollectionPagingDataSource.prototype.getPage", {getPage:$oj$$63$$.$CollectionPagingDataSource$.prototype.getPage});
  $oj$$63$$.$CollectionPagingDataSource$.prototype.setPage = function $$oj$$63$$$$CollectionPagingDataSource$$$setPage$($value$$286$$, $options$$342$$) {
    $options$$342$$ = $options$$342$$ || {};
    $value$$286$$ = parseInt($value$$286$$, 10);
    try {
      $oj$$63$$.$CollectionPagingDataSource$.$superclass$.handleEvent.call(this, $oj$$63$$.$PagingModel$.$EventType$.BEFOREPAGE, {page:$value$$286$$, previousPage:this.$_page$});
    } catch ($err$$24$$) {
      return Promise.reject(null);
    }
    this.pageSize = null != $options$$342$$.pageSize ? $options$$342$$.pageSize : this.pageSize;
    $options$$342$$.startIndex = $value$$286$$ * this.pageSize;
    var $previousPage$$2$$ = this.$_page$;
    this.$_page$ = $value$$286$$;
    this.$_startIndex$ = $options$$342$$.startIndex;
    var $self$$186$$ = this;
    return new Promise(function($resolve$$49$$, $reject$$47$$) {
      $self$$186$$.$_fetchInternal$($options$$342$$).then(function() {
        $oj$$63$$.$CollectionPagingDataSource$.$superclass$.handleEvent.call($self$$186$$, $oj$$63$$.$PagingModel$.$EventType$.PAGE, {page:$self$$186$$.$_page$, previousPage:$previousPage$$2$$});
        $resolve$$49$$(null);
      }, function() {
        $self$$186$$.$_page$ = $previousPage$$2$$;
        $self$$186$$.$_startIndex$ = $self$$186$$.$_page$ * $self$$186$$.pageSize;
        $reject$$47$$(null);
      });
    });
  };
  $oj$$63$$.$Object$.$exportPrototypeSymbol$("CollectionPagingDataSource.prototype.setPage", {setPage:$oj$$63$$.$CollectionPagingDataSource$.prototype.setPage});
  $oj$$63$$.$CollectionPagingDataSource$.prototype.getStartItemIndex = function $$oj$$63$$$$CollectionPagingDataSource$$$getStartItemIndex$() {
    return this.$_startIndex$;
  };
  $oj$$63$$.$Object$.$exportPrototypeSymbol$("CollectionPagingDataSource.prototype.getStartItemIndex", {getStartItemIndex:$oj$$63$$.$CollectionPagingDataSource$.prototype.getStartItemIndex});
  $oj$$63$$.$CollectionPagingDataSource$.prototype.getEndItemIndex = function $$oj$$63$$$$CollectionPagingDataSource$$$getEndItemIndex$() {
    return this.$_endIndex$;
  };
  $oj$$63$$.$Object$.$exportPrototypeSymbol$("CollectionPagingDataSource.prototype.getEndItemIndex", {getEndItemIndex:$oj$$63$$.$CollectionPagingDataSource$.prototype.getEndItemIndex});
  $oj$$63$$.$CollectionPagingDataSource$.prototype.getPageCount = function $$oj$$63$$$$CollectionPagingDataSource$$$getPageCount$() {
    var $totalSize$$3$$ = this.totalSize();
    return-1 == $totalSize$$3$$ ? -1 : Math.ceil($totalSize$$3$$ / this.pageSize);
  };
  $oj$$63$$.$Object$.$exportPrototypeSymbol$("CollectionPagingDataSource.prototype.getPageCount", {getPageCount:$oj$$63$$.$CollectionPagingDataSource$.prototype.getPageCount});
  $oj$$63$$.$CollectionPagingDataSource$.prototype.fetch = function $$oj$$63$$$$CollectionPagingDataSource$$$fetch$($options$$343$$) {
    var $opts$$33$$ = $options$$343$$ || {};
    if (void 0 !== $opts$$33$$.pageSize && void 0 !== $opts$$33$$.startIndex) {
      if (!this.$_hasMore$()) {
        return this.$_processSuccess$(null), Promise.resolve();
      }
      this.$currentPageSize$ = $opts$$33$$.startIndex + $opts$$33$$.pageSize;
      var $self$$187$$ = this;
      return this.$_refreshDataWindow$().then(function() {
        $self$$187$$.$_processSuccess$(null);
      });
    }
    return this.$_fetchInternal$($options$$343$$);
  };
  $oj$$63$$.$Object$.$exportPrototypeSymbol$("CollectionPagingDataSource.prototype.fetch", {fetch:$oj$$63$$.$CollectionPagingDataSource$.prototype.fetch});
  $oj$$63$$.$CollectionPagingDataSource$.prototype.$_fetchInternal$ = function $$oj$$63$$$$CollectionPagingDataSource$$$$_fetchInternal$$($options$$344$$) {
    var $opts$$34$$ = $options$$344$$ || {};
    void 0 !== $opts$$34$$.startIndex && (this.current = $opts$$34$$.startIndex);
    void 0 !== $opts$$34$$.pageSize && (this.$currentPageSize$ = this.pageSize = $opts$$34$$.pageSize);
    var $self$$188$$ = this;
    return new Promise(function($resolve$$50$$) {
      try {
        $self$$188$$.$collection$.fetch({success:function() {
          $self$$188$$.$_refreshDataWindow$().then(function() {
            $self$$188$$.$_processSuccess$($opts$$34$$);
            $resolve$$50$$({data:$self$$188$$.$getWindow$(), startIndex:$self$$188$$.current});
          });
        }});
      } catch ($e$$101$$) {
        $self$$188$$.$_refreshDataWindow$().then(function() {
          $self$$188$$.$_processSuccess$($opts$$34$$);
          $resolve$$50$$({data:$self$$188$$.$getWindow$(), startIndex:$self$$188$$.current});
        });
      }
    });
  };
  $oj$$63$$.$CollectionPagingDataSource$.prototype.$_processSuccess$ = function $$oj$$63$$$$CollectionPagingDataSource$$$$_processSuccess$$($options$$345_opts$$35$$) {
    $options$$345_opts$$35$$ = $options$$345_opts$$35$$ || {};
    $options$$345_opts$$35$$.silent || this.handleEvent("sync", {data:this.$getWindow$(), startIndex:this.current});
    $options$$345_opts$$35$$.success && $options$$345_opts$$35$$.success();
  };
  $oj$$63$$.$CollectionPagingDataSource$.prototype.handleEvent = function $$oj$$63$$$$CollectionPagingDataSource$$$handleEvent$($eventType$$49$$, $event$$548$$) {
    return $oj$$63$$.$CollectionPagingDataSource$.$superclass$.handleEvent.call(this, $eventType$$49$$, $event$$548$$);
  };
  $oj$$63$$.$CollectionPagingDataSource$.prototype.$_hasMore$ = function $$oj$$63$$$$CollectionPagingDataSource$$$$_hasMore$$() {
    return this.current + this.$currentPageSize$ < this.totalSize();
  };
  $oj$$63$$.$CollectionPagingDataSource$.prototype.$_setPageSize$ = function $$oj$$63$$$$CollectionPagingDataSource$$$$_setPageSize$$($n$$26$$) {
    this.$currentPageSize$ = this.pageSize = $n$$26$$;
  };
  $oj$$63$$.$CollectionPagingDataSource$.prototype.size = function $$oj$$63$$$$CollectionPagingDataSource$$$size$() {
    var $w$$7$$ = this.$getWindow$();
    return $w$$7$$ ? $w$$7$$.length : 0;
  };
  $oj$$63$$.$Object$.$exportPrototypeSymbol$("CollectionPagingDataSource.prototype.size", {size:$oj$$63$$.$CollectionPagingDataSource$.prototype.size});
  $oj$$63$$.$CollectionPagingDataSource$.prototype.totalSize = function $$oj$$63$$$$CollectionPagingDataSource$$$totalSize$() {
    return this.$collection$.length;
  };
  $oj$$63$$.$Object$.$exportPrototypeSymbol$("CollectionPagingDataSource.prototype.totalSize", {totalSize:$oj$$63$$.$CollectionPagingDataSource$.prototype.totalSize});
  $oj$$63$$.$CollectionPagingDataSource$.prototype.totalSizeConfidence = function $$oj$$63$$$$CollectionPagingDataSource$$$totalSizeConfidence$() {
    return "actual";
  };
  $oj$$63$$.$Object$.$exportPrototypeSymbol$("CollectionPagingDataSource.prototype.totalSizeConfidence", {totalSizeConfidence:$oj$$63$$.$CollectionPagingDataSource$.prototype.totalSizeConfidence});
  $oj$$63$$.$CollectionPagingDataSource$.prototype.getCapability = function $$oj$$63$$$$CollectionPagingDataSource$$$getCapability$() {
    return null;
  };
  $oj$$63$$.$Object$.$exportPrototypeSymbol$("CollectionPagingDataSource.prototype.getCapability", {getCapability:$oj$$63$$.$CollectionPagingDataSource$.prototype.getCapability});
});

/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
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
    var $self$$206$$ = this;
    return this.$collection$.$IterativeAt$(this.current, this.current + this.$dataWindow$.length).then(function($array$$16$$) {
      for (var $i$$433$$ = 0;$i$$433$$ < $array$$16$$.length;$i$$433$$++) {
        $self$$206$$.$dataWindow$[$i$$433$$] = $array$$16$$[$i$$433$$];
      }
      $self$$206$$.$_refreshObservableDataWindow$();
      $self$$206$$.$_endIndex$ = $self$$206$$.$_startIndex$ + $self$$206$$.$dataWindow$.length - 1;
    });
  };
  $oj$$63$$.$CollectionPagingDataSource$.prototype.$_refreshObservableDataWindow$ = function $$oj$$63$$$$CollectionPagingDataSource$$$$_refreshObservableDataWindow$$() {
    if (void 0 !== this.$observableDataWindow$) {
      this.$observableDataWindow$.removeAll();
      for (var $i$$434$$ = 0;$i$$434$$ < this.$dataWindow$.length;$i$$434$$++) {
        this.$observableDataWindow$.push($oj$$63$$.$KnockoutUtils$.map(this.$dataWindow$[$i$$434$$]));
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
  $oj$$63$$.$CollectionPagingDataSource$.prototype.setPage = function $$oj$$63$$$$CollectionPagingDataSource$$$setPage$($value$$294$$, $options$$346$$) {
    $options$$346$$ = $options$$346$$ || {};
    $value$$294$$ = parseInt($value$$294$$, 10);
    try {
      $oj$$63$$.$CollectionPagingDataSource$.$superclass$.handleEvent.call(this, $oj$$63$$.$PagingModel$.$EventType$.BEFOREPAGE, {page:$value$$294$$, previousPage:this.$_page$});
    } catch ($err$$24$$) {
      return Promise.reject(null);
    }
    this.pageSize = null != $options$$346$$.pageSize ? $options$$346$$.pageSize : this.pageSize;
    $options$$346$$.startIndex = $value$$294$$ * this.pageSize;
    var $previousPage$$2$$ = this.$_page$;
    this.$_page$ = $value$$294$$;
    this.$_startIndex$ = $options$$346$$.startIndex;
    var $self$$207$$ = this;
    return new Promise(function($resolve$$57$$, $reject$$54$$) {
      $self$$207$$.$_fetchInternal$($options$$346$$).then(function() {
        $oj$$63$$.$CollectionPagingDataSource$.$superclass$.handleEvent.call($self$$207$$, $oj$$63$$.$PagingModel$.$EventType$.PAGE, {page:$self$$207$$.$_page$, previousPage:$previousPage$$2$$});
        $resolve$$57$$(null);
      }, function() {
        $self$$207$$.$_page$ = $previousPage$$2$$;
        $self$$207$$.$_startIndex$ = $self$$207$$.$_page$ * $self$$207$$.pageSize;
        $reject$$54$$(null);
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
  $oj$$63$$.$CollectionPagingDataSource$.prototype.fetch = function $$oj$$63$$$$CollectionPagingDataSource$$$fetch$($options$$347$$) {
    var $opts$$33$$ = $options$$347$$ || {};
    if (void 0 !== $opts$$33$$.pageSize && void 0 !== $opts$$33$$.startIndex) {
      if (!this.$_hasMore$()) {
        return this.$_processSuccess$(null), Promise.resolve();
      }
      this.$currentPageSize$ = $opts$$33$$.startIndex + $opts$$33$$.pageSize;
      var $self$$208$$ = this;
      return this.$_refreshDataWindow$().then(function() {
        $self$$208$$.$_processSuccess$(null);
      });
    }
    return this.$_fetchInternal$($options$$347$$);
  };
  $oj$$63$$.$Object$.$exportPrototypeSymbol$("CollectionPagingDataSource.prototype.fetch", {fetch:$oj$$63$$.$CollectionPagingDataSource$.prototype.fetch});
  $oj$$63$$.$CollectionPagingDataSource$.prototype.$_fetchInternal$ = function $$oj$$63$$$$CollectionPagingDataSource$$$$_fetchInternal$$($options$$348$$) {
    var $opts$$34$$ = $options$$348$$ || {};
    void 0 !== $opts$$34$$.startIndex && (this.current = $opts$$34$$.startIndex);
    void 0 !== $opts$$34$$.pageSize && (this.$currentPageSize$ = this.pageSize = $opts$$34$$.pageSize);
    var $self$$209$$ = this;
    return new Promise(function($resolve$$58$$) {
      try {
        $self$$209$$.$collection$.fetch({success:function() {
          $self$$209$$.$_refreshDataWindow$().then(function() {
            $self$$209$$.$_processSuccess$($opts$$34$$);
            $resolve$$58$$({data:$self$$209$$.$getWindow$(), startIndex:$self$$209$$.current});
          });
        }});
      } catch ($e$$104$$) {
        $self$$209$$.$_refreshDataWindow$().then(function() {
          $self$$209$$.$_processSuccess$($opts$$34$$);
          $resolve$$58$$({data:$self$$209$$.$getWindow$(), startIndex:$self$$209$$.current});
        });
      }
    });
  };
  $oj$$63$$.$CollectionPagingDataSource$.prototype.$_processSuccess$ = function $$oj$$63$$$$CollectionPagingDataSource$$$$_processSuccess$$($options$$349_opts$$35$$) {
    $options$$349_opts$$35$$ = $options$$349_opts$$35$$ || {};
    $options$$349_opts$$35$$.silent || this.handleEvent("sync", {data:this.$getWindow$(), startIndex:this.current});
    $options$$349_opts$$35$$.success && $options$$349_opts$$35$$.success();
  };
  $oj$$63$$.$CollectionPagingDataSource$.prototype.handleEvent = function $$oj$$63$$$$CollectionPagingDataSource$$$handleEvent$($eventType$$50$$, $event$$661$$) {
    return $oj$$63$$.$CollectionPagingDataSource$.$superclass$.handleEvent.call(this, $eventType$$50$$, $event$$661$$);
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

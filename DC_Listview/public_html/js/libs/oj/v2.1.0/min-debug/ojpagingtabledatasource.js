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
define(["ojs/ojcore", "jquery", "ojs/ojdatasource-common"], function($oj$$61$$) {
  $oj$$61$$.$PagingTableDataSource$ = function $$oj$$61$$$$PagingTableDataSource$$($dataSource$$4$$) {
    if (!($dataSource$$4$$ instanceof $oj$$61$$.$TableDataSource$)) {
      throw Error($oj$$61$$.$TableDataSource$.$_LOGGER_MSG$._ERR_DATA_INVALID_TYPE_SUMMARY + "\n" + $oj$$61$$.$TableDataSource$.$_LOGGER_MSG$._ERR_DATA_INVALID_TYPE_DETAIL);
    }
    this.$dataSource$ = $dataSource$$4$$;
    this.$_startIndex$ = 0;
    this.$_endIndex$ = -1;
    this.Init();
  };
  $goog$exportPath_$$("PagingTableDataSource", $oj$$61$$.$PagingTableDataSource$, $oj$$61$$);
  $oj$$61$$.$Object$.$createSubclass$($oj$$61$$.$PagingTableDataSource$, $oj$$61$$.$TableDataSource$, "oj.PagingTableDataSource");
  $oj$$61$$.$PagingTableDataSource$.prototype.Init = function $$oj$$61$$$$PagingTableDataSource$$$Init$() {
    $oj$$61$$.$PagingTableDataSource$.$superclass$.Init.call(this);
  };
  $oj$$61$$.$Object$.$exportPrototypeSymbol$("PagingTableDataSource.prototype.Init", {Init:$oj$$61$$.$PagingTableDataSource$.prototype.Init});
  $oj$$61$$.$PagingTableDataSource$.prototype.getWrappedDataSource = function $$oj$$61$$$$PagingTableDataSource$$$getWrappedDataSource$() {
    return this.$dataSource$;
  };
  $oj$$61$$.$Object$.$exportPrototypeSymbol$("PagingTableDataSource.prototype.getWrappedDataSource", {getWrappedDataSource:$oj$$61$$.$PagingTableDataSource$.prototype.getWrappedDataSource});
  $oj$$61$$.$PagingTableDataSource$.prototype.getPage = function $$oj$$61$$$$PagingTableDataSource$$$getPage$() {
    return "loadMore" == this.$_fetchType$ ? 0 : this.$_getPageFromStartIndex$();
  };
  $oj$$61$$.$Object$.$exportPrototypeSymbol$("PagingTableDataSource.prototype.getPage", {getPage:$oj$$61$$.$PagingTableDataSource$.prototype.getPage});
  $oj$$61$$.$PagingTableDataSource$.prototype.setPage = function $$oj$$61$$$$PagingTableDataSource$$$setPage$($value$$292$$, $options$$341$$) {
    $options$$341$$ = $options$$341$$ || {};
    $value$$292$$ = parseInt($value$$292$$, 10);
    try {
      $oj$$61$$.$PagingTableDataSource$.$superclass$.handleEvent.call(this, $oj$$61$$.$PagingModel$.$EventType$.BEFOREPAGE, {page:$value$$292$$, previousPage:this.$_getPageFromStartIndex$()});
    } catch ($err$$23$$) {
      return Promise.reject(null);
    }
    var $previousPage$$1$$ = this.$_getPageFromStartIndex$();
    this.$_pageSize$ = null != $options$$341$$.pageSize ? $options$$341$$.pageSize : this.$_pageSize$;
    $options$$341$$.pageSize = this.$_pageSize$;
    $options$$341$$.startIndex = $value$$292$$ * this.$_pageSize$;
    this.$_startIndex$ = null == $options$$341$$.startIndex ? this.$_startIndex$ : $options$$341$$.startIndex;
    this.$_fetchType$ = "page";
    var $self$$202$$ = this;
    return new Promise(function($resolve$$55$$, $reject$$52$$) {
      0 < $self$$202$$.$_pageSize$ ? $self$$202$$.$dataSource$.fetch($options$$341$$).then(function($result$$68$$) {
        $result$$68$$.startIndex = 0;
        $self$$202$$.$_updateEndIndex$($result$$68$$.data.length);
        $oj$$61$$.$PagingTableDataSource$.$superclass$.handleEvent.call($self$$202$$, $oj$$61$$.$PagingModel$.$EventType$.PAGE, {page:$self$$202$$.$_getPageFromStartIndex$(), previousPage:$previousPage$$1$$});
        $resolve$$55$$(null);
      }, function() {
        $self$$202$$.$_startIndex$ = $previousPage$$1$$ * $self$$202$$.$_pageSize$;
        $reject$$52$$(null);
      }) : $resolve$$55$$(null);
    });
  };
  $oj$$61$$.$Object$.$exportPrototypeSymbol$("PagingTableDataSource.prototype.setPage", {setPage:$oj$$61$$.$PagingTableDataSource$.prototype.setPage});
  $oj$$61$$.$PagingTableDataSource$.prototype.getStartItemIndex = function $$oj$$61$$$$PagingTableDataSource$$$getStartItemIndex$() {
    return "loadMore" == this.$_fetchType$ ? 0 : this.$_startIndex$;
  };
  $oj$$61$$.$Object$.$exportPrototypeSymbol$("PagingTableDataSource.prototype.getStartItemIndex", {getStartItemIndex:$oj$$61$$.$PagingTableDataSource$.prototype.getStartItemIndex});
  $oj$$61$$.$PagingTableDataSource$.prototype.getEndItemIndex = function $$oj$$61$$$$PagingTableDataSource$$$getEndItemIndex$() {
    return this.$_endIndex$;
  };
  $oj$$61$$.$Object$.$exportPrototypeSymbol$("PagingTableDataSource.prototype.getEndItemIndex", {getEndItemIndex:$oj$$61$$.$PagingTableDataSource$.prototype.getEndItemIndex});
  $oj$$61$$.$PagingTableDataSource$.prototype.getPageCount = function $$oj$$61$$$$PagingTableDataSource$$$getPageCount$() {
    var $totalSize$$1$$ = this.totalSize();
    return-1 == $totalSize$$1$$ ? -1 : Math.ceil($totalSize$$1$$ / this.$_pageSize$);
  };
  $oj$$61$$.$Object$.$exportPrototypeSymbol$("PagingTableDataSource.prototype.getPageCount", {getPageCount:$oj$$61$$.$PagingTableDataSource$.prototype.getPageCount});
  $oj$$61$$.$PagingTableDataSource$.prototype.at = function $$oj$$61$$$$PagingTableDataSource$$$at$($index$$307$$, $options$$342$$) {
    return this.$dataSource$.at($index$$307$$, $options$$342$$);
  };
  $oj$$61$$.$Object$.$exportPrototypeSymbol$("PagingTableDataSource.prototype.at", {at:$oj$$61$$.$PagingTableDataSource$.prototype.at});
  $oj$$61$$.$PagingTableDataSource$.prototype.fetch = function $$oj$$61$$$$PagingTableDataSource$$$fetch$($options$$343$$) {
    $options$$343$$ = $options$$343$$ || {};
    if (null == $options$$343$$.startIndex) {
      return this.setPage(this.getPage());
    }
    this.$_fetchType$ = "loadMore";
    this.$_startIndex$ = null == $options$$343$$.startIndex ? this.$_startIndex$ : $options$$343$$.startIndex;
    var $pageSize$$7$$ = null != $options$$343$$.pageSize ? $options$$343$$.pageSize : this.$_pageSize$;
    $options$$343$$.pageSize = $pageSize$$7$$;
    $options$$343$$.startIndex = this.$_startIndex$;
    var $self$$203$$ = this;
    return new Promise(function($resolve$$56$$, $reject$$53$$) {
      0 < $pageSize$$7$$ ? $self$$203$$.$dataSource$.fetch($options$$343$$).then(function($result$$69$$) {
        $self$$203$$.$_updateEndIndex$($result$$69$$.data.length);
        $resolve$$56$$($result$$69$$);
      }, function($e$$103$$) {
        $reject$$53$$($e$$103$$);
      }) : $resolve$$56$$(null);
    });
  };
  $oj$$61$$.$Object$.$exportPrototypeSymbol$("PagingTableDataSource.prototype.fetch", {fetch:$oj$$61$$.$PagingTableDataSource$.prototype.fetch});
  $oj$$61$$.$PagingTableDataSource$.prototype.get = function $$oj$$61$$$$PagingTableDataSource$$$get$($id$$58$$, $options$$344$$) {
    return this.$dataSource$.get($id$$58$$, $options$$344$$);
  };
  $oj$$61$$.$Object$.$exportPrototypeSymbol$("PagingTableDataSource.prototype.get", {get:$oj$$61$$.$PagingTableDataSource$.prototype.get});
  $oj$$61$$.$PagingTableDataSource$.prototype.getCapability = function $$oj$$61$$$$PagingTableDataSource$$$getCapability$($feature$$10$$) {
    return this.$dataSource$.getCapability($feature$$10$$);
  };
  $oj$$61$$.$Object$.$exportPrototypeSymbol$("PagingTableDataSource.prototype.getCapability", {getCapability:$oj$$61$$.$PagingTableDataSource$.prototype.getCapability});
  $oj$$61$$.$PagingTableDataSource$.prototype.on = function $$oj$$61$$$$PagingTableDataSource$$$on$($eventType$$48$$, $eventHandler$$3$$) {
    var $self$$204$$ = this, $dataSource$$5$$ = this.$dataSource$;
    if ($eventType$$48$$ == $oj$$61$$.$TableDataSource$.$EventType$.SYNC) {
      var $ev$$4$$ = function $$ev$$4$$$($event$$655$$) {
        $self$$204$$.$_handleSyncEvent$($event$$655$$, $eventHandler$$3$$);
      };
      $dataSource$$5$$.on($eventType$$48$$, $ev$$4$$);
      return $ev$$4$$;
    }
    if ($eventType$$48$$ == $oj$$61$$.$TableDataSource$.$EventType$.ADD || $eventType$$48$$ == $oj$$61$$.$TableDataSource$.$EventType$.REMOVE || $eventType$$48$$ == $oj$$61$$.$TableDataSource$.$EventType$.CHANGE) {
      return $ev$$4$$ = function $$ev$$4$$$($event$$656$$) {
        $self$$204$$.$_handleRowEvent$($event$$656$$, $eventHandler$$3$$);
      }, $dataSource$$5$$.on($eventType$$48$$, $ev$$4$$), $ev$$4$$;
    }
    if ($eventType$$48$$ == $oj$$61$$.$TableDataSource$.$EventType$.REFRESH || $eventType$$48$$ == $oj$$61$$.$TableDataSource$.$EventType$.RESET) {
      return $ev$$4$$ = function $$ev$$4$$$($event$$657$$) {
        $self$$204$$.$_startIndex$ = 0;
        $eventHandler$$3$$($event$$657$$);
      }, $dataSource$$5$$.on($eventType$$48$$, $ev$$4$$), $ev$$4$$;
    }
    if ($eventType$$48$$ == $oj$$61$$.$PagingModel$.$EventType$.PAGE || $eventType$$48$$ == $oj$$61$$.$PagingModel$.$EventType$.BEFOREPAGE || $eventType$$48$$ == $oj$$61$$.$PagingModel$.$EventType$.PAGECOUNT) {
      $oj$$61$$.$PagingTableDataSource$.$superclass$.on.call(this, $eventType$$48$$, $eventHandler$$3$$);
    } else {
      $dataSource$$5$$.on($eventType$$48$$, $eventHandler$$3$$);
    }
    return $eventHandler$$3$$;
  };
  $oj$$61$$.$Object$.$exportPrototypeSymbol$("PagingTableDataSource.prototype.on", {on:$oj$$61$$.$PagingTableDataSource$.prototype.on});
  $oj$$61$$.$PagingTableDataSource$.prototype.off = function $$oj$$61$$$$PagingTableDataSource$$$off$($eventType$$49$$, $eventHandler$$4$$) {
    return $eventType$$49$$ == $oj$$61$$.$PagingModel$.$EventType$.PAGE || $eventType$$49$$ == $oj$$61$$.$PagingModel$.$EventType$.PAGECOUNT ? ($oj$$61$$.$PagingTableDataSource$.$superclass$.off.call(this, $eventType$$49$$, $eventHandler$$4$$), $eventHandler$$4$$) : this.$dataSource$.off($eventType$$49$$, $eventHandler$$4$$);
  };
  $oj$$61$$.$Object$.$exportPrototypeSymbol$("PagingTableDataSource.prototype.off", {off:$oj$$61$$.$PagingTableDataSource$.prototype.off});
  $oj$$61$$.$PagingTableDataSource$.prototype.sort = function $$oj$$61$$$$PagingTableDataSource$$$sort$($criteria$$6$$) {
    return this.$dataSource$.sort($criteria$$6$$);
  };
  $oj$$61$$.$Object$.$exportPrototypeSymbol$("PagingTableDataSource.prototype.sort", {sort:$oj$$61$$.$PagingTableDataSource$.prototype.sort});
  $oj$$61$$.$PagingTableDataSource$.prototype.totalSize = function $$oj$$61$$$$PagingTableDataSource$$$totalSize$() {
    return this.$dataSource$.totalSize();
  };
  $oj$$61$$.$Object$.$exportPrototypeSymbol$("PagingTableDataSource.prototype.totalSize", {totalSize:$oj$$61$$.$PagingTableDataSource$.prototype.totalSize});
  $oj$$61$$.$PagingTableDataSource$.prototype.totalSizeConfidence = function $$oj$$61$$$$PagingTableDataSource$$$totalSizeConfidence$() {
    return this.$dataSource$.totalSizeConfidence();
  };
  $oj$$61$$.$Object$.$exportPrototypeSymbol$("PagingTableDataSource.prototype.totalSizeConfidence", {totalSizeConfidence:$oj$$61$$.$PagingTableDataSource$.prototype.totalSizeConfidence});
  $oj$$61$$.$PagingTableDataSource$.prototype.$_getPageFromStartIndex$ = function $$oj$$61$$$$PagingTableDataSource$$$$_getPageFromStartIndex$$() {
    return 0 < this.$_pageSize$ ? Math.floor(this.$_startIndex$ / this.$_pageSize$) : 0;
  };
  $oj$$61$$.$PagingTableDataSource$.prototype.$_handleRowEvent$ = function $$oj$$61$$$$PagingTableDataSource$$$$_handleRowEvent$$($event$$658$$, $eventHandler$$5$$) {
    var $ignoreRows$$ = [], $i$$432$$;
    for ($i$$432$$ = 0;$i$$432$$ < $event$$658$$.indexes.length;$i$$432$$++) {
      var $rowIdx$$40$$ = $event$$658$$.indexes[$i$$432$$];
      void 0 !== $rowIdx$$40$$ && ($rowIdx$$40$$ -= this.$_startIndex$, (0 > $rowIdx$$40$$ || $rowIdx$$40$$ >= this.$_startIndex$ + this.$_pageSize$) && $ignoreRows$$.push($i$$432$$));
    }
    if (0 < $ignoreRows$$.length) {
      for ($ignoreRows$$.sort(function($a$$101$$, $b$$70$$) {
        return $a$$101$$ - $b$$70$$;
      }), $i$$432$$ = $ignoreRows$$.length - 1;0 <= $i$$432$$;$i$$432$$--) {
        $event$$658$$.data.splice($ignoreRows$$[$i$$432$$], 1), $event$$658$$.indexes.splice($ignoreRows$$[$i$$432$$], 1), $event$$658$$.keys.splice($ignoreRows$$[$i$$432$$], 1);
      }
    }
    this.$_updateEndIndex$($event$$658$$.data.length);
    $event$$658$$.startIndex = this.$_startIndex$;
    $eventHandler$$5$$($event$$658$$);
  };
  $oj$$61$$.$PagingTableDataSource$.prototype.$_handleSyncEvent$ = function $$oj$$61$$$$PagingTableDataSource$$$$_handleSyncEvent$$($event$$659$$, $eventHandler$$6$$) {
    $event$$659$$.startIndex != this.$_startIndex$ && (this.$_startIndex$ = $event$$659$$.startIndex);
    this.$_updateEndIndex$($event$$659$$.data.length);
    if ("page" == this.$_fetchType$) {
      var $clonedEvent$$ = {};
      $oj$$61$$.$CollectionUtils$.$copyInto$($clonedEvent$$, $event$$659$$);
      $clonedEvent$$.startIndex = 0;
      $eventHandler$$6$$($clonedEvent$$);
    } else {
      $eventHandler$$6$$($event$$659$$);
    }
  };
  $oj$$61$$.$PagingTableDataSource$.prototype.$_updateEndIndex$ = function $$oj$$61$$$$PagingTableDataSource$$$$_updateEndIndex$$($resultSize$$) {
    var $totalSize$$2$$ = this.totalSize();
    0 < $totalSize$$2$$ ? (this.$_endIndex$ = this.$_startIndex$ + this.$_pageSize$ - 1, this.$_endIndex$ = this.$_endIndex$ > $totalSize$$2$$ - 1 ? $totalSize$$2$$ - 1 : this.$_endIndex$) : this.$_endIndex$ = 0 < $resultSize$$ ? this.$_startIndex$ + $resultSize$$ - 1 : -1;
  };
  $oj$$61$$.$PagingTableDataSource$.$EventType$ = {ADD:"add", REMOVE:"remove", RESET:"reset", SYNC:"sync", REFRESH:"refresh", SORT:"sort"};
  $goog$exportPath_$$("PagingTableDataSource.EventType", $oj$$61$$.$PagingTableDataSource$.$EventType$, $oj$$61$$);
  $oj$$61$$.$PagingModel$ = function $$oj$$61$$$$PagingModel$$() {
  };
  $goog$exportPath_$$("PagingModel", $oj$$61$$.$PagingModel$, $oj$$61$$);
  $oj$$61$$.$PagingModel$.prototype.getPage = function $$oj$$61$$$$PagingModel$$$getPage$() {
  };
  $oj$$61$$.$Object$.$exportPrototypeSymbol$("PagingModel.prototype.getPage", {getPage:$oj$$61$$.$PagingModel$.prototype.getPage});
  $oj$$61$$.$PagingModel$.prototype.setPage = function $$oj$$61$$$$PagingModel$$$setPage$() {
  };
  $oj$$61$$.$Object$.$exportPrototypeSymbol$("PagingModel.prototype.setPage", {setPage:$oj$$61$$.$PagingModel$.prototype.setPage});
  $oj$$61$$.$PagingModel$.prototype.getStartItemIndex = function $$oj$$61$$$$PagingModel$$$getStartItemIndex$() {
  };
  $oj$$61$$.$Object$.$exportPrototypeSymbol$("PagingModel.prototype.getStartItemIndex", {getStartItemIndex:$oj$$61$$.$PagingModel$.prototype.getStartItemIndex});
  $oj$$61$$.$PagingModel$.prototype.getEndItemIndex = function $$oj$$61$$$$PagingModel$$$getEndItemIndex$() {
  };
  $oj$$61$$.$Object$.$exportPrototypeSymbol$("PagingModel.prototype.getEndItemIndex", {getEndItemIndex:$oj$$61$$.$PagingModel$.prototype.getEndItemIndex});
  $oj$$61$$.$PagingModel$.prototype.getPageCount = function $$oj$$61$$$$PagingModel$$$getPageCount$() {
  };
  $oj$$61$$.$Object$.$exportPrototypeSymbol$("PagingModel.prototype.getPageCount", {getPageCount:$oj$$61$$.$PagingModel$.prototype.getPageCount});
  $oj$$61$$.$PagingModel$.prototype.totalSize = function $$oj$$61$$$$PagingModel$$$totalSize$() {
  };
  $oj$$61$$.$Object$.$exportPrototypeSymbol$("PagingModel.prototype.totalSize", {totalSize:$oj$$61$$.$PagingModel$.prototype.totalSize});
  $oj$$61$$.$PagingModel$.prototype.totalSizeConfidence = function $$oj$$61$$$$PagingModel$$$totalSizeConfidence$() {
  };
  $oj$$61$$.$Object$.$exportPrototypeSymbol$("PagingModel.prototype.totalSizeConfidence", {totalSizeConfidence:$oj$$61$$.$PagingModel$.prototype.totalSizeConfidence});
  $oj$$61$$.$PagingModel$.$EventType$ = {BEFOREPAGE:"beforePage", PAGE:"page", PAGECOUNT:"pageCount"};
  $goog$exportPath_$$("PagingModel.EventType", $oj$$61$$.$PagingModel$.$EventType$, $oj$$61$$);
});

/**
 * Copyright (c) 2014, 2015, Oracle and/or its affiliates.
 * All rights reserved.
 */
"use strict";
/*
 Copyright 2013 jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license
*/
define(["ojs/ojcore", "jquery", "ojs/ojdatasource-common", "ojs/ojmodel"], function($oj$$64$$, $$$$59$$) {
  $oj$$64$$.$CollectionTableDataSource$ = function $$oj$$64$$$$CollectionTableDataSource$$($data$$166$$, $options$$346$$) {
    this.data = {};
    if (!($data$$166$$ instanceof $oj$$64$$.$Collection$)) {
      throw Error($oj$$64$$.$TableDataSource$.$_LOGGER_MSG$._ERR_DATA_INVALID_TYPE_SUMMARY + "\n" + $oj$$64$$.$TableDataSource$.$_LOGGER_MSG$._ERR_DATA_INVALID_TYPE_DETAIL);
    }
    $oj$$64$$.$CollectionTableDataSource$.$superclass$.constructor.call(this, $data$$166$$, $options$$346$$);
    this.$_collection$ = $data$$166$$;
    this.$_addCollectionEventListeners$();
    this.Init();
    if (null != $options$$346$$ && ("enabled" == $options$$346$$.startFetch || null == $options$$346$$.startFetch) || null == $options$$346$$) {
      this.$_startFetchEnabled$ = !0;
    }
  };
  $goog$exportPath_$$("CollectionTableDataSource", $oj$$64$$.$CollectionTableDataSource$, $oj$$64$$);
  $oj$$64$$.$Object$.$createSubclass$($oj$$64$$.$CollectionTableDataSource$, $oj$$64$$.$TableDataSource$, "oj.CollectionTableDataSource");
  $oj$$64$$.$CollectionTableDataSource$.prototype.Init = function $$oj$$64$$$$CollectionTableDataSource$$$Init$() {
    $oj$$64$$.$CollectionTableDataSource$.$superclass$.Init.call(this);
  };
  $oj$$64$$.$Object$.$exportPrototypeSymbol$("CollectionTableDataSource.prototype.Init", {Init:$oj$$64$$.$CollectionTableDataSource$.prototype.Init});
  $oj$$64$$.$CollectionTableDataSource$.prototype.at = function $$oj$$64$$$$CollectionTableDataSource$$$at$($index$$267$$, $options$$347$$) {
    $options$$347$$ = $options$$347$$ || {};
    $options$$347$$.deferred = !0;
    var $model$$92$$ = this.$_collection$.at($index$$267$$, $options$$347$$), $self$$189$$ = this;
    $self$$189$$.$_isFetchingForAt$ = !0;
    var $row$$42$$;
    return new Promise(function($resolve$$51$$, $reject$$49$$) {
      null != $model$$92$$ ? $model$$92$$.then(function($resolvedModel$$) {
        $self$$189$$.$_isFetchingForAt$ = !1;
        $row$$42$$ = {data:$resolvedModel$$.attributes, index:$index$$267$$, key:$resolvedModel$$.id};
        $resolve$$51$$($row$$42$$);
      }, function($e$$102$$) {
        $self$$189$$.$_isFetchingForAt$ = !1;
        $oj$$64$$.$TableDataSource$.$superclass$.handleEvent.call($self$$189$$, $oj$$64$$.$TableDataSource$.$EventType$.ERROR, $e$$102$$);
        $reject$$49$$($e$$102$$);
      }) : $resolve$$51$$(null);
    });
  };
  $oj$$64$$.$Object$.$exportPrototypeSymbol$("CollectionTableDataSource.prototype.at", {at:$oj$$64$$.$CollectionTableDataSource$.prototype.at});
  $oj$$64$$.$CollectionTableDataSource$.prototype.fetch = function $$oj$$64$$$$CollectionTableDataSource$$$fetch$($options$$348$$) {
    $options$$348$$ = $options$$348$$ || {};
    return "init" != $options$$348$$.fetchType || this.$_startFetchEnabled$ ? this.$_fetchInternal$($options$$348$$) : Promise.resolve();
  };
  $oj$$64$$.$Object$.$exportPrototypeSymbol$("CollectionTableDataSource.prototype.fetch", {fetch:$oj$$64$$.$CollectionTableDataSource$.prototype.fetch});
  $oj$$64$$.$CollectionTableDataSource$.prototype.get = function $$oj$$64$$$$CollectionTableDataSource$$$get$($id$$55$$, $options$$349$$) {
    $options$$349$$ = $options$$349$$ || {};
    $options$$349$$.deferred = !0;
    var $model$$93$$ = this.$_collection$.get($id$$55$$, $options$$349$$), $self$$190$$ = this, $row$$43$$;
    return new Promise(function($resolve$$52$$, $reject$$50$$) {
      null != $model$$93$$ ? $model$$93$$.then(function($resolvedModel$$1$$) {
        $row$$43$$ = {data:$resolvedModel$$1$$.attributes, index:$resolvedModel$$1$$.index, key:$resolvedModel$$1$$.id};
        $resolve$$52$$($row$$43$$);
      }, function($e$$103$$) {
        $oj$$64$$.$TableDataSource$.$superclass$.handleEvent.call($self$$190$$, $oj$$64$$.$TableDataSource$.$EventType$.ERROR, $e$$103$$);
        $reject$$50$$($e$$103$$);
      }) : $resolve$$52$$(null);
    });
  };
  $oj$$64$$.$Object$.$exportPrototypeSymbol$("CollectionTableDataSource.prototype.get", {get:$oj$$64$$.$CollectionTableDataSource$.prototype.get});
  $oj$$64$$.$CollectionTableDataSource$.prototype.sort = function $$oj$$64$$$$CollectionTableDataSource$$$sort$($criteria$$6$$) {
    if (null == $criteria$$6$$) {
      return Promise.resolve();
    }
    var $self$$191$$ = this;
    return new Promise(function($resolve$$53$$) {
      $self$$191$$.$_setComparator$($criteria$$6$$);
      $self$$191$$.$_collection$.sort(null);
      $resolve$$53$$({header:$criteria$$6$$.key, direction:$criteria$$6$$.direction});
    });
  };
  $oj$$64$$.$Object$.$exportPrototypeSymbol$("CollectionTableDataSource.prototype.sort", {sort:$oj$$64$$.$CollectionTableDataSource$.prototype.sort});
  $oj$$64$$.$CollectionTableDataSource$.prototype.totalSize = function $$oj$$64$$$$CollectionTableDataSource$$$totalSize$() {
    var $totalSize$$4$$ = 0 <= this.$_collection$.totalResults ? this.$_collection$.totalResults : -1;
    if (-1 < $totalSize$$4$$) {
      var $size$$26$$ = this.$_collection$.size();
      return $size$$26$$ > $totalSize$$4$$ ? $size$$26$$ : $totalSize$$4$$;
    }
    if (0 < this.$_fetchResultSize$) {
      $totalSize$$4$$ = this.$_fetchResultSize$;
    } else {
      if ("atLeast" == this.totalSizeConfidence()) {
        return this.$_collection$.size();
      }
    }
    return $totalSize$$4$$;
  };
  $oj$$64$$.$Object$.$exportPrototypeSymbol$("CollectionTableDataSource.prototype.totalSize", {totalSize:$oj$$64$$.$CollectionTableDataSource$.prototype.totalSize});
  $oj$$64$$.$CollectionTableDataSource$.prototype.totalSizeConfidence = function $$oj$$64$$$$CollectionTableDataSource$$$totalSizeConfidence$() {
    return 0 <= this.$_collection$.totalResults ? "actual" : this.$_collection$.hasMore ? "atLeast" : "unknown";
  };
  $oj$$64$$.$Object$.$exportPrototypeSymbol$("CollectionTableDataSource.prototype.totalSizeConfidence", {totalSizeConfidence:$oj$$64$$.$CollectionTableDataSource$.prototype.totalSizeConfidence});
  $oj$$64$$.$CollectionTableDataSource$.prototype.$_addCollectionEventListeners$ = function $$oj$$64$$$$CollectionTableDataSource$$$$_addCollectionEventListeners$$() {
    var $self$$192$$ = this;
    this.$_collection$.on($oj$$64$$.$Events$.$EventType$.SYNC, function($event$$549_result$$69$$) {
      if ($event$$549_result$$69$$ instanceof $oj$$64$$.$Collection$ && !$self$$192$$.$_isFetchingForAt$ && !$self$$192$$.$_isFetching$) {
        var $startIndex$$29$$ = $event$$549_result$$69$$.offset, $pageSize$$7$$ = $event$$549_result$$69$$.lastFetchCount;
        0 < $pageSize$$7$$ ? ($self$$192$$.$_startIndex$ = $startIndex$$29$$, $self$$192$$.$_pageSize$ = $pageSize$$7$$, $self$$192$$.$_isFetchingForAt$ = !0, $event$$549_result$$69$$.$IterativeAt$($startIndex$$29$$, $startIndex$$29$$ + $pageSize$$7$$).then(function($modelArray$$2$$) {
          $self$$192$$.$_isFetchingForAt$ = !1;
          var $rowArray$$9$$ = [], $keyArray$$1$$ = [], $i$$384$$;
          for ($i$$384$$ = 0;$i$$384$$ < $modelArray$$2$$.length;$i$$384$$++) {
            null != $modelArray$$2$$[$i$$384$$] && ($rowArray$$9$$.push($modelArray$$2$$[$i$$384$$].attributes), $keyArray$$1$$.push($modelArray$$2$$[$i$$384$$].id));
          }
          $self$$192$$.$_endFetch$.call($self$$192$$, {silent:!1}, {data:$rowArray$$9$$, keys:$keyArray$$1$$, startIndex:$startIndex$$29$$}, null);
        })) : ($event$$549_result$$69$$ = $self$$192$$.$_getRowArray$(), $self$$192$$.$_endFetch$.call($self$$192$$, {silent:!1}, $event$$549_result$$69$$, null));
      }
    });
    this.$_collection$.on($oj$$64$$.$Events$.$EventType$.ALLADDED, function($event$$550$$, $modelArray$$3$$) {
      var $rowArray$$10$$ = [], $keyArray$$2$$ = [], $indexArray$$3$$ = [], $i$$385$$;
      for ($i$$385$$ = 0;$i$$385$$ < $modelArray$$3$$.length;$i$$385$$++) {
        $rowArray$$10$$.push($modelArray$$3$$[$i$$385$$].attributes), $keyArray$$2$$.push($modelArray$$3$$[$i$$385$$].id), $indexArray$$3$$.push($modelArray$$3$$[$i$$385$$].index);
      }
      $oj$$64$$.$TableDataSource$.$superclass$.handleEvent.call($self$$192$$, $oj$$64$$.$TableDataSource$.$EventType$.ADD, {data:$rowArray$$10$$, keys:$keyArray$$2$$, indexes:$indexArray$$3$$});
    });
    this.$_collection$.on($oj$$64$$.$Events$.$EventType$.ALLREMOVED, function($event$$551$$, $modelArray$$4$$) {
      var $rowArray$$11$$ = [], $keyArray$$3$$ = [], $indexArray$$4$$ = [], $i$$386$$;
      for ($i$$386$$ = 0;$i$$386$$ < $modelArray$$4$$.length;$i$$386$$++) {
        $rowArray$$11$$.push($modelArray$$4$$[$i$$386$$].attributes), $keyArray$$3$$.push($modelArray$$4$$[$i$$386$$].id), $indexArray$$4$$.push($modelArray$$4$$[$i$$386$$].index);
      }
      $oj$$64$$.$TableDataSource$.$superclass$.handleEvent.call($self$$192$$, $oj$$64$$.$TableDataSource$.$EventType$.REMOVE, {data:$rowArray$$11$$, keys:$keyArray$$3$$, indexes:$indexArray$$4$$});
    });
    this.$_collection$.on($oj$$64$$.$Events$.$EventType$.RESET, function($event$$552$$) {
      $oj$$64$$.$TableDataSource$.$superclass$.handleEvent.call($self$$192$$, $oj$$64$$.$TableDataSource$.$EventType$.RESET, $event$$552$$);
    });
    this.$_collection$.on($oj$$64$$.$Events$.$EventType$.SORT, function($event$$553$$, $eventOpts$$2$$) {
      null != $eventOpts$$2$$ && $eventOpts$$2$$.add || $oj$$64$$.$TableDataSource$.$superclass$.handleEvent.call($self$$192$$, $oj$$64$$.$TableDataSource$.$EventType$.SORT, $event$$553$$);
    });
    this.$_collection$.on($oj$$64$$.$Events$.$EventType$.CHANGE, function($event$$554$$) {
      $oj$$64$$.$TableDataSource$.$superclass$.handleEvent.call($self$$192$$, $oj$$64$$.$TableDataSource$.$EventType$.CHANGE, {data:[$event$$554$$.attributes], keys:[$event$$554$$.id], indexes:[$event$$554$$.index]});
    });
    this.$_collection$.on($oj$$64$$.$Events$.$EventType$.DESTROY, function($event$$555$$) {
      $oj$$64$$.$TableDataSource$.$superclass$.handleEvent.call($self$$192$$, $oj$$64$$.$TableDataSource$.$EventType$.DESTROY, $event$$555$$);
    });
    this.$_collection$.on($oj$$64$$.$Events$.$EventType$.REFRESH, function($event$$556$$) {
      $oj$$64$$.$TableDataSource$.$superclass$.handleEvent.call($self$$192$$, $oj$$64$$.$TableDataSource$.$EventType$.REFRESH, $event$$556$$);
    });
    this.$_collection$.on($oj$$64$$.$Events$.$EventType$.ERROR, function($collection$$58$$, $xhr$$21$$, $options$$350$$) {
      $oj$$64$$.$TableDataSource$.$superclass$.handleEvent.call($self$$192$$, $oj$$64$$.$TableDataSource$.$EventType$.ERROR, $collection$$58$$, $xhr$$21$$, $options$$350$$);
    });
  };
  $oj$$64$$.$CollectionTableDataSource$.prototype.$_fetchInternal$ = function $$oj$$64$$$$CollectionTableDataSource$$$$_fetchInternal$$($options$$351$$) {
    this.$_startFetch$($options$$351$$);
    $options$$351$$ = $options$$351$$ || {};
    var $self$$193$$ = this;
    this.$_isPaged$ = 0 < $options$$351$$.pageSize ? !0 : !1;
    this.$_startIndex$ = null == $options$$351$$.startIndex ? this.$_startIndex$ : $options$$351$$.startIndex;
    this.$_initFetch$ = !0;
    this.$_pageSize$ = 0 < $options$$351$$.pageSize ? $options$$351$$.pageSize : -1;
    $options$$351$$.pageSize = this.$_pageSize$;
    $options$$351$$.startIndex = this.$_startIndex$;
    $options$$351$$.refresh = !0;
    return new Promise(function($resolve$$54$$, $reject$$52$$) {
      if ($self$$193$$.$_isPaged$) {
        $self$$193$$.$_collection$.$setRangeLocal$($self$$193$$.$_startIndex$, $self$$193$$.$_pageSize$).then(function($actual$$6$$) {
          var $result$$72_rowArray$$12$$ = [], $keyArray$$4$$ = [], $i$$387$$;
          for ($i$$387$$ = 0;$i$$387$$ < $actual$$6$$.models.length;$i$$387$$++) {
            $result$$72_rowArray$$12$$[$i$$387$$] = $actual$$6$$.models[$i$$387$$].attributes, $keyArray$$4$$[$i$$387$$] = $actual$$6$$.models[$i$$387$$].id;
          }
          $result$$72_rowArray$$12$$ = {data:$result$$72_rowArray$$12$$, keys:$keyArray$$4$$, startIndex:$self$$193$$.$_startIndex$};
          $actual$$6$$.models.length < $self$$193$$.$_pageSize$ ? 0 > $self$$193$$.totalSize() && ($self$$193$$.$_fetchResultSize$ = $self$$193$$.$_startIndex$ + $actual$$6$$.models.length) : $self$$193$$.$_fetchResultSize$ = null;
          $self$$193$$.$_endFetch$.call($self$$193$$, $options$$351$$, $result$$72_rowArray$$12$$, null);
          $resolve$$54$$($result$$72_rowArray$$12$$);
        }, function($error$$45$$) {
          $self$$193$$.$_endFetch$.call($self$$193$$, $options$$351$$, null, $error$$45$$);
          $reject$$52$$($error$$45$$);
        });
      } else {
        if (0 < $self$$193$$.$_collection$.size()) {
          var $result$$71$$ = $self$$193$$.$_getRowArray$();
          $self$$193$$.$_endFetch$.call($self$$193$$, $options$$351$$, $result$$71$$, null);
          $resolve$$54$$($result$$71$$);
        } else {
          $self$$193$$.$_collection$.fetch({success:function($collection$$59_result$$73$$) {
            $self$$193$$.$_collection$ = $collection$$59_result$$73$$;
            $collection$$59_result$$73$$ = $self$$193$$.$_getRowArray$();
            $self$$193$$.$_endFetch$.call($self$$193$$, $options$$351$$, $collection$$59_result$$73$$, null);
            $resolve$$54$$($collection$$59_result$$73$$);
          }, error:function($collection$$60$$, $e$$104$$) {
            $self$$193$$.$_collection$ = $collection$$60$$;
            $self$$193$$.$_endFetch$.call($self$$193$$, $options$$351$$, null, $e$$104$$);
            $reject$$52$$($e$$104$$);
          }});
        }
      }
    });
  };
  $oj$$64$$.$CollectionTableDataSource$.prototype.$_startFetch$ = function $$oj$$64$$$$CollectionTableDataSource$$$$_startFetch$$($options$$352$$) {
    this.$_isFetching$ = !0;
    $options$$352$$.silent || $oj$$64$$.$TableDataSource$.$superclass$.handleEvent.call(this, $oj$$64$$.$TableDataSource$.$EventType$.REQUEST, {startIndex:$options$$352$$.startIndex});
  };
  $oj$$64$$.$CollectionTableDataSource$.prototype.$_endFetch$ = function $$oj$$64$$$$CollectionTableDataSource$$$$_endFetch$$($options$$353$$, $result$$74$$, $error$$46$$) {
    this.$_isFetching$ = !1;
    null != $error$$46$$ ? $oj$$64$$.$TableDataSource$.$superclass$.handleEvent.call(this, $oj$$64$$.$TableDataSource$.$EventType$.ERROR, $error$$46$$) : $options$$353$$.silent || $oj$$64$$.$TableDataSource$.$superclass$.handleEvent.call(this, $oj$$64$$.$TableDataSource$.$EventType$.SYNC, $result$$74$$);
  };
  $oj$$64$$.$CollectionTableDataSource$.prototype.$_setComparator$ = function $$oj$$64$$$$CollectionTableDataSource$$$$_setComparator$$($criteria$$7_direction$$13$$) {
    if (null == $criteria$$7_direction$$13$$) {
      this.$_collection$.comparator = null;
    } else {
      var $key$$169$$ = $criteria$$7_direction$$13$$.key;
      $criteria$$7_direction$$13$$ = $criteria$$7_direction$$13$$.direction;
      var $comparator$$15$$ = null;
      this.$_collection$.$IsVirtual$() ? (this.$_collection$.comparator = $key$$169$$, this.$_collection$.sortDirection = "ascending" === $criteria$$7_direction$$13$$ ? 1 : -1) : ("ascending" == $criteria$$7_direction$$13$$ ? $comparator$$15$$ = function $$comparator$$15$$$($row$$44$$) {
        return $$$$59$$.isFunction($row$$44$$.get) ? $row$$44$$.get($key$$169$$) : $row$$44$$[$key$$169$$]();
      } : "descending" == $criteria$$7_direction$$13$$ && ($comparator$$15$$ = function $$comparator$$15$$$($rowA$$1$$, $rowB$$1$$) {
        var $a$$116$$, $b$$74$$;
        $$$$59$$.isFunction($rowA$$1$$.get) ? ($a$$116$$ = $rowA$$1$$.get($key$$169$$), $b$$74$$ = $rowB$$1$$.get($key$$169$$)) : ($a$$116$$ = $rowA$$1$$[$key$$169$$](), $b$$74$$ = $rowB$$1$$[$key$$169$$]());
        return $a$$116$$ === $b$$74$$ ? 0 : $a$$116$$ > $b$$74$$ ? -1 : 1;
      }), this.$_collection$.comparator = $comparator$$15$$);
    }
  };
  $oj$$64$$.$CollectionTableDataSource$.prototype.$_getRowArray$ = function $$oj$$64$$$$CollectionTableDataSource$$$$_getRowArray$$() {
    var $endIndex$$7$$ = this.$_collection$.size() - 1, $rowArray$$13$$ = [], $keyArray$$5$$ = [], $i$$388$$;
    for ($i$$388$$ = 0;$i$$388$$ <= $endIndex$$7$$;$i$$388$$++) {
      $rowArray$$13$$[$i$$388$$] = this.$_collection$.at($i$$388$$).attributes, $keyArray$$5$$[$i$$388$$] = this.$_collection$.at($i$$388$$).id;
    }
    return{data:$rowArray$$13$$, keys:$keyArray$$5$$, startIndex:this.$_startIndex$};
  };
  $oj$$64$$.$CollectionTableDataSource$.prototype.getCapability = function $$oj$$64$$$$CollectionTableDataSource$$$getCapability$() {
    return null;
  };
  $oj$$64$$.$Object$.$exportPrototypeSymbol$("CollectionTableDataSource.prototype.getCapability", {getCapability:$oj$$64$$.$CollectionTableDataSource$.prototype.getCapability});
});

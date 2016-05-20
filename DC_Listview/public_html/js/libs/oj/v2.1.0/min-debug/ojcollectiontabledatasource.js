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
define(["ojs/ojcore", "jquery", "ojs/ojdatasource-common", "ojs/ojmodel"], function($oj$$65$$, $$$$60$$) {
  $oj$$65$$.$CollectionTableDataSource$ = function $$oj$$65$$$$CollectionTableDataSource$$($data$$167$$, $options$$353$$) {
    this.data = {};
    if (!($data$$167$$ instanceof $oj$$65$$.$Collection$)) {
      throw Error($oj$$65$$.$TableDataSource$.$_LOGGER_MSG$._ERR_DATA_INVALID_TYPE_SUMMARY + "\n" + $oj$$65$$.$TableDataSource$.$_LOGGER_MSG$._ERR_DATA_INVALID_TYPE_DETAIL);
    }
    $oj$$65$$.$CollectionTableDataSource$.$superclass$.constructor.call(this, $data$$167$$, $options$$353$$);
    this.$_collection$ = $data$$167$$;
    this.$_addCollectionEventListeners$();
    this.Init();
    if (null != $options$$353$$ && ("enabled" == $options$$353$$.startFetch || null == $options$$353$$.startFetch) || null == $options$$353$$) {
      this.$_startFetchEnabled$ = !0;
    }
  };
  $goog$exportPath_$$("CollectionTableDataSource", $oj$$65$$.$CollectionTableDataSource$, $oj$$65$$);
  $oj$$65$$.$Object$.$createSubclass$($oj$$65$$.$CollectionTableDataSource$, $oj$$65$$.$TableDataSource$, "oj.CollectionTableDataSource");
  $oj$$65$$.$CollectionTableDataSource$.prototype.Init = function $$oj$$65$$$$CollectionTableDataSource$$$Init$() {
    $oj$$65$$.$CollectionTableDataSource$.$superclass$.Init.call(this);
  };
  $oj$$65$$.$Object$.$exportPrototypeSymbol$("CollectionTableDataSource.prototype.Init", {Init:$oj$$65$$.$CollectionTableDataSource$.prototype.Init});
  $oj$$65$$.$CollectionTableDataSource$.prototype.at = function $$oj$$65$$$$CollectionTableDataSource$$$at$($index$$312$$, $options$$354$$) {
    $options$$354$$ = $options$$354$$ || {};
    $options$$354$$.deferred = !0;
    var $model$$92$$ = this.$_collection$.at($index$$312$$, $options$$354$$), $self$$211$$ = this;
    $self$$211$$.$_isFetchingForAt$ = !0;
    var $row$$87$$;
    return new Promise(function($resolve$$59$$, $reject$$56$$) {
      null != $model$$92$$ ? $model$$92$$.then(function($resolvedModel$$) {
        $self$$211$$.$_isFetchingForAt$ = !1;
        $row$$87$$ = {data:$resolvedModel$$.attributes, index:$index$$312$$, key:$resolvedModel$$.id};
        $resolve$$59$$($row$$87$$);
      }, function($e$$106$$) {
        $self$$211$$.$_isFetchingForAt$ = !1;
        $oj$$65$$.$TableDataSource$.$superclass$.handleEvent.call($self$$211$$, $oj$$65$$.$TableDataSource$.$EventType$.ERROR, $e$$106$$);
        $reject$$56$$($e$$106$$);
      }) : $resolve$$59$$(null);
    });
  };
  $oj$$65$$.$Object$.$exportPrototypeSymbol$("CollectionTableDataSource.prototype.at", {at:$oj$$65$$.$CollectionTableDataSource$.prototype.at});
  $oj$$65$$.$CollectionTableDataSource$.prototype.fetch = function $$oj$$65$$$$CollectionTableDataSource$$$fetch$($options$$355$$) {
    $options$$355$$ = $options$$355$$ || {};
    return "init" != $options$$355$$.fetchType || this.$_startFetchEnabled$ ? this.$_fetchInternal$($options$$355$$) : Promise.resolve();
  };
  $oj$$65$$.$Object$.$exportPrototypeSymbol$("CollectionTableDataSource.prototype.fetch", {fetch:$oj$$65$$.$CollectionTableDataSource$.prototype.fetch});
  $oj$$65$$.$CollectionTableDataSource$.prototype.get = function $$oj$$65$$$$CollectionTableDataSource$$$get$($id$$60$$, $options$$356$$) {
    $options$$356$$ = $options$$356$$ || {};
    $options$$356$$.deferred = !0;
    var $model$$93$$ = this.$_collection$.get($id$$60$$, $options$$356$$), $self$$212$$ = this, $row$$88$$;
    return new Promise(function($resolve$$60$$, $reject$$57$$) {
      null != $model$$93$$ ? $model$$93$$.then(function($resolvedModel$$1$$) {
        $row$$88$$ = {data:$resolvedModel$$1$$.attributes, index:$resolvedModel$$1$$.index, key:$resolvedModel$$1$$.id};
        $resolve$$60$$($row$$88$$);
      }, function($e$$107$$) {
        $oj$$65$$.$TableDataSource$.$superclass$.handleEvent.call($self$$212$$, $oj$$65$$.$TableDataSource$.$EventType$.ERROR, $e$$107$$);
        $reject$$57$$($e$$107$$);
      }) : $resolve$$60$$(null);
    });
  };
  $oj$$65$$.$Object$.$exportPrototypeSymbol$("CollectionTableDataSource.prototype.get", {get:$oj$$65$$.$CollectionTableDataSource$.prototype.get});
  $oj$$65$$.$CollectionTableDataSource$.prototype.sort = function $$oj$$65$$$$CollectionTableDataSource$$$sort$($criteria$$7$$) {
    if (null == $criteria$$7$$) {
      return Promise.resolve();
    }
    var $self$$213$$ = this;
    return new Promise(function($resolve$$61$$) {
      $self$$213$$.$_setComparator$($criteria$$7$$);
      $self$$213$$.$_collection$.sort(null);
      $resolve$$61$$({header:$criteria$$7$$.key, direction:$criteria$$7$$.direction});
    });
  };
  $oj$$65$$.$Object$.$exportPrototypeSymbol$("CollectionTableDataSource.prototype.sort", {sort:$oj$$65$$.$CollectionTableDataSource$.prototype.sort});
  $oj$$65$$.$CollectionTableDataSource$.prototype.totalSize = function $$oj$$65$$$$CollectionTableDataSource$$$totalSize$() {
    var $totalSize$$4$$ = 0 <= this.$_collection$.totalResults ? this.$_collection$.totalResults : -1;
    if (-1 < $totalSize$$4$$) {
      var $size$$28$$ = this.$_collection$.size();
      return $size$$28$$ > $totalSize$$4$$ ? $size$$28$$ : $totalSize$$4$$;
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
  $oj$$65$$.$Object$.$exportPrototypeSymbol$("CollectionTableDataSource.prototype.totalSize", {totalSize:$oj$$65$$.$CollectionTableDataSource$.prototype.totalSize});
  $oj$$65$$.$CollectionTableDataSource$.prototype.totalSizeConfidence = function $$oj$$65$$$$CollectionTableDataSource$$$totalSizeConfidence$() {
    return 0 <= this.$_collection$.totalResults ? "actual" : this.$_collection$.hasMore ? "atLeast" : "unknown";
  };
  $oj$$65$$.$Object$.$exportPrototypeSymbol$("CollectionTableDataSource.prototype.totalSizeConfidence", {totalSizeConfidence:$oj$$65$$.$CollectionTableDataSource$.prototype.totalSizeConfidence});
  $oj$$65$$.$CollectionTableDataSource$.prototype.$_addCollectionEventListeners$ = function $$oj$$65$$$$CollectionTableDataSource$$$$_addCollectionEventListeners$$() {
    var $self$$214$$ = this;
    this.$_collection$.on($oj$$65$$.$Events$.$EventType$.SYNC, function($event$$680_result$$72$$) {
      if ($event$$680_result$$72$$ instanceof $oj$$65$$.$Collection$ && !$self$$214$$.$_isFetchingForAt$ && !$self$$214$$.$_isFetching$) {
        var $startIndex$$40$$ = $event$$680_result$$72$$.offset, $pageSize$$8$$ = $event$$680_result$$72$$.lastFetchCount;
        0 < $pageSize$$8$$ ? ($self$$214$$.$_startIndex$ = $startIndex$$40$$, $self$$214$$.$_pageSize$ = $pageSize$$8$$, $self$$214$$.$_isFetchingForAt$ = !0, $event$$680_result$$72$$.$IterativeAt$($startIndex$$40$$, $startIndex$$40$$ + $pageSize$$8$$).then(function($modelArray$$2$$) {
          $self$$214$$.$_isFetchingForAt$ = !1;
          var $rowArray$$9$$ = [], $keyArray$$1$$ = [], $i$$442$$, $modelClone$$;
          for ($i$$442$$ = 0;$i$$442$$ < $modelArray$$2$$.length;$i$$442$$++) {
            null != $modelArray$$2$$[$i$$442$$] && ($modelClone$$ = $modelArray$$2$$[$i$$442$$].clone(), $rowArray$$9$$.push($modelClone$$.attributes), $keyArray$$1$$.push($modelClone$$.id));
          }
          $self$$214$$.$_endFetch$.call($self$$214$$, {silent:!1}, {data:$rowArray$$9$$, keys:$keyArray$$1$$, startIndex:$startIndex$$40$$}, null);
        })) : ($event$$680_result$$72$$ = $self$$214$$.$_getRowArray$(), $self$$214$$.$_endFetch$.call($self$$214$$, {silent:!1}, $event$$680_result$$72$$, null));
      }
    });
    this.$_collection$.on($oj$$65$$.$Events$.$EventType$.ALLADDED, function($event$$681$$, $modelArray$$3$$) {
      var $rowArray$$10$$ = [], $keyArray$$2$$ = [], $indexArray$$3$$ = [], $i$$443$$, $modelClone$$1$$;
      for ($i$$443$$ = 0;$i$$443$$ < $modelArray$$3$$.length;$i$$443$$++) {
        $modelClone$$1$$ = $modelArray$$3$$[$i$$443$$].clone(), $rowArray$$10$$.push($modelClone$$1$$.attributes), $keyArray$$2$$.push($modelClone$$1$$.id), $indexArray$$3$$.push($modelClone$$1$$.index);
      }
      $oj$$65$$.$TableDataSource$.$superclass$.handleEvent.call($self$$214$$, $oj$$65$$.$TableDataSource$.$EventType$.ADD, {data:$rowArray$$10$$, keys:$keyArray$$2$$, indexes:$indexArray$$3$$});
    });
    this.$_collection$.on($oj$$65$$.$Events$.$EventType$.ALLREMOVED, function($event$$682$$, $modelArray$$4$$) {
      var $rowArray$$11$$ = [], $keyArray$$3$$ = [], $indexArray$$4$$ = [], $i$$444$$, $modelClone$$2$$;
      for ($i$$444$$ = 0;$i$$444$$ < $modelArray$$4$$.length;$i$$444$$++) {
        $modelClone$$2$$ = $modelArray$$4$$[$i$$444$$].clone(), $rowArray$$11$$.push($modelClone$$2$$.attributes), $keyArray$$3$$.push($modelClone$$2$$.id), $indexArray$$4$$.push($modelClone$$2$$.index);
      }
      $oj$$65$$.$TableDataSource$.$superclass$.handleEvent.call($self$$214$$, $oj$$65$$.$TableDataSource$.$EventType$.REMOVE, {data:$rowArray$$11$$, keys:$keyArray$$3$$, indexes:$indexArray$$4$$});
    });
    this.$_collection$.on($oj$$65$$.$Events$.$EventType$.RESET, function($event$$683$$) {
      $oj$$65$$.$TableDataSource$.$superclass$.handleEvent.call($self$$214$$, $oj$$65$$.$TableDataSource$.$EventType$.RESET, $event$$683$$);
    });
    this.$_collection$.on($oj$$65$$.$Events$.$EventType$.SORT, function($event$$684$$, $eventOpts$$2$$) {
      null != $eventOpts$$2$$ && $eventOpts$$2$$.add || $oj$$65$$.$TableDataSource$.$superclass$.handleEvent.call($self$$214$$, $oj$$65$$.$TableDataSource$.$EventType$.SORT, $event$$684$$);
    });
    this.$_collection$.on($oj$$65$$.$Events$.$EventType$.CHANGE, function($event$$685$$) {
      $oj$$65$$.$TableDataSource$.$superclass$.handleEvent.call($self$$214$$, $oj$$65$$.$TableDataSource$.$EventType$.CHANGE, {data:[$event$$685$$.attributes], keys:[$event$$685$$.id], indexes:[$event$$685$$.index]});
    });
    this.$_collection$.on($oj$$65$$.$Events$.$EventType$.DESTROY, function($event$$686$$) {
      $oj$$65$$.$TableDataSource$.$superclass$.handleEvent.call($self$$214$$, $oj$$65$$.$TableDataSource$.$EventType$.DESTROY, $event$$686$$);
    });
    this.$_collection$.on($oj$$65$$.$Events$.$EventType$.REFRESH, function($event$$687$$) {
      $oj$$65$$.$TableDataSource$.$superclass$.handleEvent.call($self$$214$$, $oj$$65$$.$TableDataSource$.$EventType$.REFRESH, $event$$687$$);
    });
    this.$_collection$.on($oj$$65$$.$Events$.$EventType$.ERROR, function($collection$$58$$, $xhr$$21$$, $options$$357$$) {
      $oj$$65$$.$TableDataSource$.$superclass$.handleEvent.call($self$$214$$, $oj$$65$$.$TableDataSource$.$EventType$.ERROR, $collection$$58$$, $xhr$$21$$, $options$$357$$);
    });
  };
  $oj$$65$$.$CollectionTableDataSource$.prototype.$_fetchInternal$ = function $$oj$$65$$$$CollectionTableDataSource$$$$_fetchInternal$$($options$$358$$) {
    this.$_startFetch$($options$$358$$);
    $options$$358$$ = $options$$358$$ || {};
    var $self$$215$$ = this;
    this.$_isPaged$ = 0 < $options$$358$$.pageSize ? !0 : !1;
    this.$_startIndex$ = null == $options$$358$$.startIndex ? this.$_startIndex$ : $options$$358$$.startIndex;
    this.$_pageSize$ = 0 < $options$$358$$.pageSize ? $options$$358$$.pageSize : -1;
    $options$$358$$.pageSize = this.$_pageSize$;
    $options$$358$$.startIndex = this.$_startIndex$;
    $options$$358$$.refresh = !0;
    return new Promise(function($resolve$$62$$, $reject$$59$$) {
      var $pageSize$$9$$ = $self$$215$$.$_pageSize$;
      $self$$215$$.$_isPaged$ || ($pageSize$$9$$ = 25);
      $self$$215$$.$_collection$.$setRangeLocal$($self$$215$$.$_startIndex$, $pageSize$$9$$).then(function($actual$$6$$) {
        var $result$$74_rowArray$$12$$;
        if ($self$$215$$.$_isPaged$) {
          $result$$74_rowArray$$12$$ = [];
          var $keyArray$$4$$ = [], $i$$445$$, $modelClone$$3$$;
          for ($i$$445$$ = 0;$i$$445$$ < $actual$$6$$.models.length;$i$$445$$++) {
            $modelClone$$3$$ = $actual$$6$$.models[$i$$445$$].clone(), $result$$74_rowArray$$12$$[$i$$445$$] = $modelClone$$3$$.attributes, $keyArray$$4$$[$i$$445$$] = $modelClone$$3$$.id;
          }
          $result$$74_rowArray$$12$$ = {data:$result$$74_rowArray$$12$$, keys:$keyArray$$4$$, startIndex:$self$$215$$.$_startIndex$};
          $actual$$6$$.models.length < $self$$215$$.$_pageSize$ ? 0 > $self$$215$$.totalSize() && ($self$$215$$.$_fetchResultSize$ = $self$$215$$.$_startIndex$ + $actual$$6$$.models.length) : $self$$215$$.$_fetchResultSize$ = null;
        } else {
          $result$$74_rowArray$$12$$ = $self$$215$$.$_getRowArray$();
        }
        $self$$215$$.$_endFetch$.call($self$$215$$, $options$$358$$, $result$$74_rowArray$$12$$, null);
        $resolve$$62$$($result$$74_rowArray$$12$$);
      }, function($error$$46$$) {
        $self$$215$$.$_endFetch$.call($self$$215$$, $options$$358$$, null, $error$$46$$);
        $reject$$59$$($error$$46$$);
      });
    });
  };
  $oj$$65$$.$CollectionTableDataSource$.prototype.$_startFetch$ = function $$oj$$65$$$$CollectionTableDataSource$$$$_startFetch$$($options$$359$$) {
    this.$_isFetching$ = !0;
    $options$$359$$.silent || $oj$$65$$.$TableDataSource$.$superclass$.handleEvent.call(this, $oj$$65$$.$TableDataSource$.$EventType$.REQUEST, {startIndex:$options$$359$$.startIndex});
  };
  $oj$$65$$.$CollectionTableDataSource$.prototype.$_endFetch$ = function $$oj$$65$$$$CollectionTableDataSource$$$$_endFetch$$($options$$360$$, $result$$75$$, $error$$47$$) {
    this.$_isFetching$ = !1;
    null != $error$$47$$ ? $oj$$65$$.$TableDataSource$.$superclass$.handleEvent.call(this, $oj$$65$$.$TableDataSource$.$EventType$.ERROR, $error$$47$$) : $options$$360$$.silent || $oj$$65$$.$TableDataSource$.$superclass$.handleEvent.call(this, $oj$$65$$.$TableDataSource$.$EventType$.SYNC, $result$$75$$);
  };
  $oj$$65$$.$CollectionTableDataSource$.prototype.$_setComparator$ = function $$oj$$65$$$$CollectionTableDataSource$$$$_setComparator$$($criteria$$8_direction$$21$$) {
    if (null == $criteria$$8_direction$$21$$) {
      this.$_collection$.comparator = null;
    } else {
      var $key$$192$$ = $criteria$$8_direction$$21$$.key;
      $criteria$$8_direction$$21$$ = $criteria$$8_direction$$21$$.direction;
      var $comparator$$15$$ = null;
      this.$_collection$.$IsVirtual$() ? (this.$_collection$.comparator = $key$$192$$, this.$_collection$.sortDirection = "ascending" === $criteria$$8_direction$$21$$ ? 1 : -1) : ("ascending" == $criteria$$8_direction$$21$$ ? $comparator$$15$$ = function $$comparator$$15$$$($row$$89$$) {
        return $$$$60$$.isFunction($row$$89$$.get) ? $row$$89$$.get($key$$192$$) : $row$$89$$[$key$$192$$]();
      } : "descending" == $criteria$$8_direction$$21$$ && ($comparator$$15$$ = function $$comparator$$15$$$($rowA$$1$$, $rowB$$1$$) {
        var $a$$102$$, $b$$71$$;
        $$$$60$$.isFunction($rowA$$1$$.get) ? ($a$$102$$ = $rowA$$1$$.get($key$$192$$), $b$$71$$ = $rowB$$1$$.get($key$$192$$)) : ($a$$102$$ = $rowA$$1$$[$key$$192$$](), $b$$71$$ = $rowB$$1$$[$key$$192$$]());
        return $a$$102$$ === $b$$71$$ ? 0 : $a$$102$$ > $b$$71$$ ? -1 : 1;
      }), this.$_collection$.comparator = $comparator$$15$$);
    }
  };
  $oj$$65$$.$CollectionTableDataSource$.prototype.$_getRowArray$ = function $$oj$$65$$$$CollectionTableDataSource$$$$_getRowArray$$() {
    var $endIndex$$19$$ = this.$_collection$.size() - 1, $rowArray$$13$$ = [], $keyArray$$5$$ = [], $i$$446$$, $modelClone$$4$$;
    for ($i$$446$$ = 0;$i$$446$$ <= $endIndex$$19$$;$i$$446$$++) {
      $modelClone$$4$$ = this.$_collection$.at($i$$446$$).clone(), $rowArray$$13$$[$i$$446$$] = $modelClone$$4$$.attributes, $keyArray$$5$$[$i$$446$$] = $modelClone$$4$$.id;
    }
    return{data:$rowArray$$13$$, keys:$keyArray$$5$$, startIndex:this.$_startIndex$};
  };
  $oj$$65$$.$CollectionTableDataSource$.prototype.getCapability = function $$oj$$65$$$$CollectionTableDataSource$$$getCapability$() {
    return null;
  };
  $oj$$65$$.$Object$.$exportPrototypeSymbol$("CollectionTableDataSource.prototype.getCapability", {getCapability:$oj$$65$$.$CollectionTableDataSource$.prototype.getCapability});
});

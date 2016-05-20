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
define(["ojs/ojcore", "jquery", "ojs/ojdatasource-common"], function($oj$$79$$) {
  $oj$$79$$.$FlattenedTreeTableDataSource$ = function $$oj$$79$$$$FlattenedTreeTableDataSource$$($data$$184$$, $options$$411$$) {
    $options$$411$$ = $options$$411$$ || {};
    if (!($data$$184$$ instanceof $oj$$79$$.$FlattenedTreeDataSource$)) {
      throw Error($oj$$79$$.$TableDataSource$.$_LOGGER_MSG$._ERR_DATA_INVALID_TYPE_SUMMARY + "\n" + $oj$$79$$.$TableDataSource$.$_LOGGER_MSG$._ERR_DATA_INVALID_TYPE_DETAIL);
    }
    this.$_data$ = $data$$184$$;
    this.$_eventHandlers$ = [];
    this.$_startIndex$ = 0;
    this.$_nodeSetList$ = [];
    null == this.$_data$.$getOption$("fetchSize") && (this.$_data$.$getFetchSize$ = function $this$$_data$$$getFetchSize$$() {
      return-1;
    });
    var $self$$238$$ = this;
    this.$_data$.$insertRows$ = function $this$$_data$$$insertRows$$($insertAtIndex$$2$$, $i$$540_insertAtKey$$1$$, $nodeSet$$35$$) {
      var $row$$96$$, $rowIdx$$41$$, $rowKey$$55$$, $rowArray$$14$$ = [], $keyArray$$6$$ = [], $indexArray$$5$$ = [];
      for ($i$$540_insertAtKey$$1$$ = 0;$i$$540_insertAtKey$$1$$ < $nodeSet$$35$$.getCount();$i$$540_insertAtKey$$1$$++) {
        $row$$96$$ = $nodeSet$$35$$.getData($i$$540_insertAtKey$$1$$), $rowKey$$55$$ = $nodeSet$$35$$.getMetadata($i$$540_insertAtKey$$1$$).key, $rowIdx$$41$$ = $insertAtIndex$$2$$ + $i$$540_insertAtKey$$1$$, $self$$238$$.$_nodeSetList$[$rowIdx$$41$$] = {}, $self$$238$$.$_nodeSetList$[$rowIdx$$41$$].nodeSet = $nodeSet$$35$$, $self$$238$$.$_nodeSetList$[$rowIdx$$41$$].startIndex = $insertAtIndex$$2$$, $rowArray$$14$$.push($row$$96$$), $keyArray$$6$$.push($rowKey$$55$$), $indexArray$$5$$.push($rowIdx$$41$$), 
        $self$$238$$.$_rows$.data.splice($rowIdx$$41$$, 0, $row$$96$$), $self$$238$$.$_rows$.keys.splice($rowIdx$$41$$, 0, $rowKey$$55$$), $self$$238$$.$_rows$.indexes.splice($rowIdx$$41$$, 0, $rowIdx$$41$$);
      }
      $self$$238$$.$_pageSize$ || $oj$$79$$.$TableDataSource$.$superclass$.handleEvent.call($self$$238$$, $oj$$79$$.$TableDataSource$.$EventType$.ADD, {data:$rowArray$$14$$, keys:$keyArray$$6$$, indexes:$indexArray$$5$$});
      $self$$238$$.$_realignRowIndices$();
      $self$$238$$.$_pageSize$ && setTimeout(function() {
        $self$$238$$.$_data$.refresh();
        $self$$238$$.$_rows$ = null;
        $self$$238$$.fetch();
      }, 0);
    };
    this.$_data$.$removeRows$ = function $this$$_data$$$removeRows$$($rowKeys$$2$$) {
      var $i$$541$$, $rowIdx$$42$$, $rowArray$$15$$ = [], $keyArray$$7$$ = [], $indexArray$$6$$ = [];
      for ($i$$541$$ = 0;$i$$541$$ < $rowKeys$$2$$.length;$i$$541$$++) {
        $rowIdx$$42$$ = $rowKeys$$2$$[$i$$541$$].index - $i$$541$$, $rowArray$$15$$.push(""), $keyArray$$7$$.push(""), $indexArray$$6$$.push($rowIdx$$42$$), $self$$238$$.$_rows$.data.splice($rowIdx$$42$$, 1), $self$$238$$.$_rows$.keys.splice($rowIdx$$42$$, 1), $self$$238$$.$_rows$.indexes.splice($rowIdx$$42$$, 1);
      }
      $self$$238$$.$_pageSize$ || $oj$$79$$.$TableDataSource$.$superclass$.handleEvent.call($self$$238$$, $oj$$79$$.$TableDataSource$.$EventType$.REMOVE, {data:$rowArray$$15$$, keys:$keyArray$$7$$, indexes:$indexArray$$6$$});
      $self$$238$$.$_realignRowIndices$();
      $self$$238$$.$_pageSize$ && setTimeout(function() {
        $self$$238$$.$_data$.refresh();
        $self$$238$$.$_rows$ = null;
        $self$$238$$.fetch();
      }, 0);
    };
    this.Init();
    if (null != $options$$411$$ && ("enabled" == $options$$411$$.startFetch || null == $options$$411$$.startFetch) || null == $options$$411$$) {
      this.$_startFetchEnabled$ = !0;
    }
  };
  $goog$exportPath_$$("FlattenedTreeTableDataSource", $oj$$79$$.$FlattenedTreeTableDataSource$, $oj$$79$$);
  $oj$$79$$.$Object$.$createSubclass$($oj$$79$$.$FlattenedTreeTableDataSource$, $oj$$79$$.$TableDataSource$, "oj.FlattenedTreeTableDataSource");
  $oj$$79$$.$FlattenedTreeTableDataSource$.prototype.Init = function $$oj$$79$$$$FlattenedTreeTableDataSource$$$Init$() {
    $oj$$79$$.$FlattenedTreeTableDataSource$.$superclass$.Init.call(this);
  };
  $oj$$79$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeTableDataSource.prototype.Init", {Init:$oj$$79$$.$FlattenedTreeTableDataSource$.prototype.Init});
  $oj$$79$$.$FlattenedTreeTableDataSource$.prototype.getCapability = function $$oj$$79$$$$FlattenedTreeTableDataSource$$$getCapability$() {
    return "full";
  };
  $oj$$79$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeTableDataSource.prototype.getCapability", {getCapability:$oj$$79$$.$FlattenedTreeTableDataSource$.prototype.getCapability});
  $oj$$79$$.$FlattenedTreeTableDataSource$.prototype.getWrappedDataSource = function $$oj$$79$$$$FlattenedTreeTableDataSource$$$getWrappedDataSource$() {
    return this.$_data$;
  };
  $oj$$79$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeTableDataSource.prototype.getWrappedDataSource", {getWrappedDataSource:$oj$$79$$.$FlattenedTreeTableDataSource$.prototype.getWrappedDataSource});
  $oj$$79$$.$FlattenedTreeTableDataSource$.prototype.fetch = function $$oj$$79$$$$FlattenedTreeTableDataSource$$$fetch$($options$$412$$) {
    $options$$412$$ = $options$$412$$ || {};
    return "init" != $options$$412$$.fetchType || this.$_startFetchEnabled$ ? this.$_fetchInternal$($options$$412$$) : Promise.resolve();
  };
  $oj$$79$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeTableDataSource.prototype.fetch", {fetch:$oj$$79$$.$FlattenedTreeTableDataSource$.prototype.fetch});
  $oj$$79$$.$FlattenedTreeTableDataSource$.prototype.at = function $$oj$$79$$$$FlattenedTreeTableDataSource$$$at$($index$$342$$) {
    var $row$$98$$;
    $row$$98$$ = 0 > $index$$342$$ || $index$$342$$ >= this.$_rows$.length ? null : {data:this.$_rows$.data[$index$$342$$], index:$index$$342$$, key:this.$_rows$.keys[$index$$342$$]};
    return new Promise(function($resolve$$69$$) {
      $resolve$$69$$($row$$98$$);
    });
  };
  $oj$$79$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeTableDataSource.prototype.at", {at:$oj$$79$$.$FlattenedTreeTableDataSource$.prototype.at});
  $oj$$79$$.$FlattenedTreeTableDataSource$.prototype.collapse = function $$oj$$79$$$$FlattenedTreeTableDataSource$$$collapse$($rowKey$$56$$) {
    this.$_data$.collapse($rowKey$$56$$);
  };
  $oj$$79$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeTableDataSource.prototype.collapse", {collapse:$oj$$79$$.$FlattenedTreeTableDataSource$.prototype.collapse});
  $oj$$79$$.$FlattenedTreeTableDataSource$.prototype.expand = function $$oj$$79$$$$FlattenedTreeTableDataSource$$$expand$($rowKey$$57$$) {
    this.$_data$.expand($rowKey$$57$$);
  };
  $oj$$79$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeTableDataSource.prototype.expand", {expand:$oj$$79$$.$FlattenedTreeTableDataSource$.prototype.expand});
  $oj$$79$$.$FlattenedTreeTableDataSource$.prototype.get = function $$oj$$79$$$$FlattenedTreeTableDataSource$$$get$() {
    $oj$$79$$.$Assert$.$failedInAbstractFunction$();
    return null;
  };
  $oj$$79$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeTableDataSource.prototype.get", {get:$oj$$79$$.$FlattenedTreeTableDataSource$.prototype.get});
  $oj$$79$$.$FlattenedTreeTableDataSource$.prototype.on = function $$oj$$79$$$$FlattenedTreeTableDataSource$$$on$($eventType$$57$$, $eventHandler$$7$$) {
    if ("expand" == $eventType$$57$$ || "collapse" == $eventType$$57$$) {
      this.$_data$.on($eventType$$57$$, $eventHandler$$7$$);
    } else {
      $oj$$79$$.$FlattenedTreeTableDataSource$.$superclass$.on.call(this, $eventType$$57$$, $eventHandler$$7$$);
    }
  };
  $oj$$79$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeTableDataSource.prototype.on", {on:$oj$$79$$.$FlattenedTreeTableDataSource$.prototype.on});
  $oj$$79$$.$FlattenedTreeTableDataSource$.prototype.off = function $$oj$$79$$$$FlattenedTreeTableDataSource$$$off$($eventType$$58$$, $eventHandler$$8$$) {
    "expand" == $eventType$$58$$ || "collapse" == $eventType$$58$$ ? this.$_data$.off($eventType$$58$$, $eventHandler$$8$$) : $oj$$79$$.$FlattenedTreeTableDataSource$.$superclass$.off.call(this, $eventType$$58$$, $eventHandler$$8$$);
  };
  $oj$$79$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeTableDataSource.prototype.off", {off:$oj$$79$$.$FlattenedTreeTableDataSource$.prototype.off});
  $oj$$79$$.$FlattenedTreeTableDataSource$.prototype.sort = function $$oj$$79$$$$FlattenedTreeTableDataSource$$$sort$($criteria$$13$$) {
    if (null == $criteria$$13$$) {
      return Promise.resolve();
    }
    var $self$$240$$ = this;
    $criteria$$13$$.axis = "column";
    return new Promise(function($resolve$$70$$, $reject$$67$$) {
      $self$$240$$.$_data$.getWrappedDataSource().sort($criteria$$13$$, {success:function() {
        setTimeout(function() {
          $self$$240$$.$_data$.refresh();
          $self$$240$$.$_rows$ = null;
          var $result$$80$$ = {header:$criteria$$13$$.key, direction:$criteria$$13$$.direction};
          $oj$$79$$.$TableDataSource$.$superclass$.handleEvent.call($self$$240$$, $oj$$79$$.$TableDataSource$.$EventType$.SORT, $result$$80$$);
          $resolve$$70$$($result$$80$$);
        }, 0);
      }.bind(this), error:function($status$$34$$) {
        $reject$$67$$($status$$34$$);
      }.bind(this)});
    });
  };
  $oj$$79$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeTableDataSource.prototype.sort", {sort:$oj$$79$$.$FlattenedTreeTableDataSource$.prototype.sort});
  $oj$$79$$.$FlattenedTreeTableDataSource$.prototype.totalSize = function $$oj$$79$$$$FlattenedTreeTableDataSource$$$totalSize$() {
    return-1;
  };
  $oj$$79$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeTableDataSource.prototype.totalSize", {totalSize:$oj$$79$$.$FlattenedTreeTableDataSource$.prototype.totalSize});
  $oj$$79$$.$FlattenedTreeTableDataSource$.prototype.totalSizeConfidence = function $$oj$$79$$$$FlattenedTreeTableDataSource$$$totalSizeConfidence$() {
    return "unknown";
  };
  $oj$$79$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeTableDataSource.prototype.totalSizeConfidence", {totalSizeConfidence:$oj$$79$$.$FlattenedTreeTableDataSource$.prototype.totalSizeConfidence});
  $oj$$79$$.$FlattenedTreeTableDataSource$.prototype.$_getMetadata$ = function $$oj$$79$$$$FlattenedTreeTableDataSource$$$$_getMetadata$$($index$$343$$) {
    return this.$_nodeSetList$[$index$$343$$].nodeSet.getMetadata($index$$343$$ - this.$_nodeSetList$[$index$$343$$].startIndex);
  };
  $oj$$79$$.$FlattenedTreeTableDataSource$.prototype.$_fetchInternal$ = function $$oj$$79$$$$FlattenedTreeTableDataSource$$$$_fetchInternal$$($options$$415$$) {
    $options$$415$$ = $options$$415$$ || {};
    this.$_startFetch$($options$$415$$);
    this.$_startIndex$ = null == $options$$415$$.startIndex ? this.$_startIndex$ : $options$$415$$.startIndex;
    var $rangeCount$$1_rowArray$$16$$ = Number.MAX_VALUE;
    this.$_pageSize$ = null == $options$$415$$.pageSize ? this.$_pageSize$ : $options$$415$$.pageSize;
    null != this.$_pageSize$ && ($rangeCount$$1_rowArray$$16$$ = this.$_pageSize$);
    var $startIndex$$43$$ = this.$_startIndex$;
    if (null != this.$_rows$) {
      if (null != this.$_pageSize$) {
        var $endIndex$$20_result$$81$$ = this.$_rows$.data.length - 1;
        if (this.$_startIndex$ + this.$_pageSize$ - 1 <= $endIndex$$20_result$$81$$) {
          var $endIndex$$20_result$$81$$ = $oj$$79$$.$FlattenedTreeTableDataSource$.$_getEndIndex$(this.$_rows$, this.$_startIndex$, this.$_pageSize$), $rangeCount$$1_rowArray$$16$$ = [], $keyArray$$8$$ = [], $i$$542$$;
          for ($i$$542$$ = this.$_startIndex$;$i$$542$$ <= $endIndex$$20_result$$81$$;$i$$542$$++) {
            $rangeCount$$1_rowArray$$16$$[$i$$542$$ - this.$_startIndex$] = this.$_rows$.data[$i$$542$$], $keyArray$$8$$[$i$$542$$ - this.$_startIndex$] = this.$_getMetadata$($i$$542$$).key;
          }
          $endIndex$$20_result$$81$$ = {data:$rangeCount$$1_rowArray$$16$$, keys:$keyArray$$8$$, startIndex:this.$_startIndex$};
          this.$_endFetch$($options$$415$$, $endIndex$$20_result$$81$$, null);
          return Promise.resolve($endIndex$$20_result$$81$$);
        }
        this.$_startIndex$ <= $endIndex$$20_result$$81$$ && ($startIndex$$43$$ = $endIndex$$20_result$$81$$ + 1);
      } else {
        this.$_data$.refresh(), this.$_rows$ = null;
      }
    } else {
      $startIndex$$43$$ = 0;
    }
    var $rangeOption$$ = {start:$startIndex$$43$$, count:$rangeCount$$1_rowArray$$16$$}, $self$$241$$ = this;
    return new Promise(function($resolve$$71$$, $reject$$68$$) {
      $self$$241$$.$_data$.$fetchRows$($rangeOption$$, {success:function($endIndex$$21_nodeSet$$37_result$$82$$) {
        $self$$241$$.$_handleFetchRowsSuccess$($endIndex$$21_nodeSet$$37_result$$82$$, $startIndex$$43$$);
        $options$$415$$.refresh = !0;
        $endIndex$$21_nodeSet$$37_result$$82$$ = $oj$$79$$.$FlattenedTreeTableDataSource$.$_getEndIndex$($self$$241$$.$_rows$, $self$$241$$.$_startIndex$, $self$$241$$.$_pageSize$);
        var $rowArray$$17$$ = [], $keyArray$$9$$ = [], $i$$543$$;
        for ($i$$543$$ = $self$$241$$.$_startIndex$;$i$$543$$ <= $endIndex$$21_nodeSet$$37_result$$82$$;$i$$543$$++) {
          $rowArray$$17$$[$i$$543$$ - $self$$241$$.$_startIndex$] = $self$$241$$.$_rows$.data[$i$$543$$], $keyArray$$9$$[$i$$543$$ - $self$$241$$.$_startIndex$] = $self$$241$$.$_getMetadata$($i$$543$$).key;
        }
        $endIndex$$21_nodeSet$$37_result$$82$$ = {data:$rowArray$$17$$, keys:$keyArray$$9$$, startIndex:$self$$241$$.$_startIndex$};
        $self$$241$$.$_endFetch$($options$$415$$, $endIndex$$21_nodeSet$$37_result$$82$$, null);
        $resolve$$71$$($endIndex$$21_nodeSet$$37_result$$82$$);
      }.bind(this), error:function($error$$52$$) {
        $self$$241$$.$_endFetch$($options$$415$$, null, $error$$52$$);
        $reject$$68$$($error$$52$$);
      }.bind(this)});
    });
  };
  $oj$$79$$.$FlattenedTreeTableDataSource$.prototype.$_handleFetchRowsSuccess$ = function $$oj$$79$$$$FlattenedTreeTableDataSource$$$$_handleFetchRowsSuccess$$($nodeSet$$38$$, $startIndex$$44$$) {
    var $i$$544$$, $rowIdx$$43$$;
    for ($i$$544$$ = 0;$i$$544$$ < $nodeSet$$38$$.getCount();$i$$544$$++) {
      $rowIdx$$43$$ = $startIndex$$44$$ + $i$$544$$, this.$_nodeSetList$[$rowIdx$$43$$] = {}, this.$_nodeSetList$[$rowIdx$$43$$].nodeSet = $nodeSet$$38$$, this.$_nodeSetList$[$rowIdx$$43$$].startIndex = $startIndex$$44$$;
    }
    this.$_rows$ || (this.$_rows$ = {}, this.$_rows$.data = [], this.$_rows$.keys = [], this.$_rows$.indexes = []);
    $oj$$79$$.$FlattenedTreeTableDataSource$.$_getRowArray$($nodeSet$$38$$, this, this.$_rows$);
  };
  $oj$$79$$.$FlattenedTreeTableDataSource$.prototype.$_startFetch$ = function $$oj$$79$$$$FlattenedTreeTableDataSource$$$$_startFetch$$($options$$416$$) {
    $options$$416$$.silent || $oj$$79$$.$TableDataSource$.$superclass$.handleEvent.call(this, $oj$$79$$.$TableDataSource$.$EventType$.REQUEST, {startIndex:$options$$416$$.startIndex});
  };
  $oj$$79$$.$FlattenedTreeTableDataSource$.prototype.$_endFetch$ = function $$oj$$79$$$$FlattenedTreeTableDataSource$$$$_endFetch$$($options$$417$$, $result$$83$$, $error$$53$$) {
    null != $error$$53$$ ? $oj$$79$$.$TableDataSource$.$superclass$.handleEvent.call(this, $oj$$79$$.$TableDataSource$.$EventType$.ERROR, $error$$53$$) : $options$$417$$.silent || $oj$$79$$.$TableDataSource$.$superclass$.handleEvent.call(this, $oj$$79$$.$TableDataSource$.$EventType$.SYNC, $result$$83$$);
  };
  $oj$$79$$.$FlattenedTreeTableDataSource$.$_getEndIndex$ = function $$oj$$79$$$$FlattenedTreeTableDataSource$$$_getEndIndex$$($rows$$18$$, $startIndex$$45$$, $pageSize$$12$$) {
    var $endIndex$$22$$ = $rows$$18$$.data.length - 1;
    0 < $pageSize$$12$$ && ($endIndex$$22$$ = $startIndex$$45$$ + $pageSize$$12$$ - 1, $endIndex$$22$$ = $endIndex$$22$$ > $rows$$18$$.data.length - 1 ? $rows$$18$$.data.length - 1 : $endIndex$$22$$);
    return $endIndex$$22$$;
  };
  $oj$$79$$.$FlattenedTreeTableDataSource$.$_getRowArray$ = function $$oj$$79$$$$FlattenedTreeTableDataSource$$$_getRowArray$$($nodeSet$$39$$, $endIndex$$23_rowSet$$, $rows$$19$$) {
    $endIndex$$23_rowSet$$ = $nodeSet$$39$$.getCount() - 1;
    var $i$$545$$;
    for ($i$$545$$ = $nodeSet$$39$$.getStart();$i$$545$$ <= $endIndex$$23_rowSet$$;$i$$545$$++) {
      var $row$$99$$ = $nodeSet$$39$$.getData($i$$545$$);
      $rows$$19$$.data[$i$$545$$] = $row$$99$$;
      $rows$$19$$.keys[$i$$545$$] = "";
      $rows$$19$$.indexes[$i$$545$$] = $i$$545$$;
    }
  };
  $oj$$79$$.$FlattenedTreeTableDataSource$.prototype.$_realignRowIndices$ = function $$oj$$79$$$$FlattenedTreeTableDataSource$$$$_realignRowIndices$$() {
    for (var $i$$546$$ = 0;$i$$546$$ < this.$_rows$.data.length;$i$$546$$++) {
      this.$_rows$.indexes[$i$$546$$] = $i$$546$$;
    }
  };
});

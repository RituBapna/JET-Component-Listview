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
define(["ojs/ojcore", "jquery", "ojs/ojdatasource-common"], function($oj$$26$$, $$$$24$$) {
  $oj$$26$$.$ArrayTableDataSource$ = function $$oj$$26$$$$ArrayTableDataSource$$($data$$140$$, $options$$283$$) {
    this.data = {};
    if (!($data$$140$$ instanceof Array) && "function" != typeof $data$$140$$ && "function" != typeof $data$$140$$.$subscribe$) {
      throw Error($oj$$26$$.$TableDataSource$.$_LOGGER_MSG$._ERR_DATA_INVALID_TYPE_SUMMARY + "\n" + $oj$$26$$.$TableDataSource$.$_LOGGER_MSG$._ERR_DATA_INVALID_TYPE_DETAIL);
    }
    null != $options$$283$$ && null != $options$$283$$.idAttribute || $oj$$26$$.$Logger$.info($oj$$26$$.$ArrayTableDataSource$.$_LOGGER_MSG$._INFO_ARRAY_TABLE_DATASOURCE_IDATTR);
    $oj$$26$$.$ArrayTableDataSource$.$superclass$.constructor.call(this, $data$$140$$, $options$$283$$);
    this.$_eventHandlers$ = [];
    this.$_rows$ = {};
    if (null != $data$$140$$ && void 0 !== $data$$140$$ && (this.$_idAttribute$ = null, null != $options$$283$$ && null != $options$$283$$.idAttribute && (this.$_idAttribute$ = $options$$283$$.idAttribute), this.$_data$ = $data$$140$$ instanceof Array ? $data$$140$$ : $data$$140$$(), this.$_totalSize$ = this.$_data$.length, !($data$$140$$ instanceof Array))) {
      var $self$$157$$ = this;
      $data$$140$$.subscribe(function($changes$$5$$) {
        if ($self$$157$$.$_isDataLoaded$()) {
          var $i$$368$$, $rowArray$$3$$ = [], $indexArray$$2$$ = [];
          for ($i$$368$$ = 0;$i$$368$$ < $changes$$5$$.length;$i$$368$$++) {
            "deleted" === $changes$$5$$[$i$$368$$].status && $rowArray$$3$$.push($changes$$5$$[$i$$368$$].value);
          }
          $self$$157$$.remove($rowArray$$3$$, null);
          $rowArray$$3$$ = [];
          $indexArray$$2$$ = [];
          for ($i$$368$$ = 0;$i$$368$$ < $changes$$5$$.length;$i$$368$$++) {
            "added" === $changes$$5$$[$i$$368$$].status && ($rowArray$$3$$.push($changes$$5$$[$i$$368$$].value), $indexArray$$2$$.push($changes$$5$$[$i$$368$$].index));
          }
          $self$$157$$.add($rowArray$$3$$, {at:$indexArray$$2$$});
        }
      }, null, "arrayChange");
    }
    if (null != $options$$283$$ && ("enabled" == $options$$283$$.startFetch || null == $options$$283$$.startFetch) || null == $options$$283$$) {
      this.$_startFetchEnabled$ = !0;
    }
  };
  $goog$exportPath_$$("ArrayTableDataSource", $oj$$26$$.$ArrayTableDataSource$, $oj$$26$$);
  $oj$$26$$.$Object$.$createSubclass$($oj$$26$$.$ArrayTableDataSource$, $oj$$26$$.$TableDataSource$, "oj.ArrayTableDataSource");
  $oj$$26$$.$ArrayTableDataSource$.prototype.Init = function $$oj$$26$$$$ArrayTableDataSource$$$Init$() {
    $oj$$26$$.$ArrayTableDataSource$.$superclass$.Init.call(this);
  };
  $oj$$26$$.$Object$.$exportPrototypeSymbol$("ArrayTableDataSource.prototype.Init", {Init:$oj$$26$$.$ArrayTableDataSource$.prototype.Init});
  $oj$$26$$.$ArrayTableDataSource$.prototype.add = function $$oj$$26$$$$ArrayTableDataSource$$$add$($m$$19$$, $options$$284$$) {
    $options$$284$$ = $options$$284$$ || {};
    this.$_checkDataLoaded$();
    return this.$_addToRowSet$($m$$19$$, $options$$284$$.at, $options$$284$$);
  };
  $oj$$26$$.$Object$.$exportPrototypeSymbol$("ArrayTableDataSource.prototype.add", {add:$oj$$26$$.$ArrayTableDataSource$.prototype.add});
  $oj$$26$$.$ArrayTableDataSource$.prototype.at = function $$oj$$26$$$$ArrayTableDataSource$$$at$($index$$228$$) {
    this.$_checkDataLoaded$();
    var $row$$75$$;
    $row$$75$$ = 0 > $index$$228$$ || $index$$228$$ >= this.$_rows$.data.length ? null : {data:this.$_rows$.data[$index$$228$$], index:$index$$228$$, key:this.$_getId$(this.$_rows$.data[$index$$228$$])};
    return new Promise(function($resolve$$39$$) {
      $resolve$$39$$($row$$75$$);
    });
  };
  $oj$$26$$.$Object$.$exportPrototypeSymbol$("ArrayTableDataSource.prototype.at", {at:$oj$$26$$.$ArrayTableDataSource$.prototype.at});
  $oj$$26$$.$ArrayTableDataSource$.prototype.change = function $$oj$$26$$$$ArrayTableDataSource$$$change$($m$$20$$, $options$$286$$) {
    $options$$286$$ = $options$$286$$ || {};
    this.$_checkDataLoaded$();
    var $silent$$25$$ = $options$$286$$.silent, $i$$369$$, $row$$76$$, $key$$150$$, $changedRow$$, $rowArray$$4$$ = {data:[], keys:[], indexes:[]};
    $m$$20$$ instanceof Array || ($m$$20$$ = [$m$$20$$]);
    for ($i$$369$$ = 0;$i$$369$$ < $m$$20$$.length;$i$$369$$++) {
      $row$$76$$ = $m$$20$$[$i$$369$$], null != $row$$76$$ && ($key$$150$$ = this.$_getId$($row$$76$$), $changedRow$$ = this.$_getInternal$($key$$150$$, null), $rowArray$$4$$.data.push($row$$76$$), $rowArray$$4$$.keys.push($key$$150$$), $rowArray$$4$$.indexes.push($changedRow$$.index), this.$_rows$.data[$changedRow$$.index] = $row$$76$$);
    }
    !$silent$$25$$ && 0 < $rowArray$$4$$.data.length && $oj$$26$$.$TableDataSource$.$superclass$.handleEvent.call(this, $oj$$26$$.$TableDataSource$.$EventType$.CHANGE, $rowArray$$4$$);
    return Promise.resolve($rowArray$$4$$);
  };
  $oj$$26$$.$Object$.$exportPrototypeSymbol$("ArrayTableDataSource.prototype.change", {change:$oj$$26$$.$ArrayTableDataSource$.prototype.change});
  $oj$$26$$.$ArrayTableDataSource$.prototype.fetch = function $$oj$$26$$$$ArrayTableDataSource$$$fetch$($options$$287$$) {
    $options$$287$$ = $options$$287$$ || {};
    return "init" != $options$$287$$.fetchType || this.$_startFetchEnabled$ ? this.$_fetchInternal$($options$$287$$) : Promise.resolve();
  };
  $oj$$26$$.$Object$.$exportPrototypeSymbol$("ArrayTableDataSource.prototype.fetch", {fetch:$oj$$26$$.$ArrayTableDataSource$.prototype.fetch});
  $oj$$26$$.$ArrayTableDataSource$.prototype.get = function $$oj$$26$$$$ArrayTableDataSource$$$get$($id$$42$$, $options$$288$$) {
    $options$$288$$ = $options$$288$$ || {};
    this.$_checkDataLoaded$();
    return Promise.resolve(this.$_getInternal$($id$$42$$, $options$$288$$));
  };
  $oj$$26$$.$Object$.$exportPrototypeSymbol$("ArrayTableDataSource.prototype.get", {get:$oj$$26$$.$ArrayTableDataSource$.prototype.get});
  $oj$$26$$.$ArrayTableDataSource$.prototype.getCapability = function $$oj$$26$$$$ArrayTableDataSource$$$getCapability$() {
    return "full";
  };
  $oj$$26$$.$Object$.$exportPrototypeSymbol$("ArrayTableDataSource.prototype.getCapability", {getCapability:$oj$$26$$.$ArrayTableDataSource$.prototype.getCapability});
  $oj$$26$$.$ArrayTableDataSource$.prototype.remove = function $$oj$$26$$$$ArrayTableDataSource$$$remove$($m$$21$$, $options$$289$$) {
    $options$$289$$ = $options$$289$$ || {};
    this.$_checkDataLoaded$();
    return this.$_removeInternal$($m$$21$$, $options$$289$$);
  };
  $oj$$26$$.$Object$.$exportPrototypeSymbol$("ArrayTableDataSource.prototype.remove", {remove:$oj$$26$$.$ArrayTableDataSource$.prototype.remove});
  $oj$$26$$.$ArrayTableDataSource$.prototype.reset = function $$oj$$26$$$$ArrayTableDataSource$$$reset$($data$$141$$, $options$$290$$) {
    $options$$290$$ = $options$$290$$ || {};
    $options$$290$$.previousRows = this.$_rows$;
    var $silent$$26$$ = $options$$290$$.silent;
    null != $data$$141$$ && (this.$_data$ = $data$$141$$);
    this.$_rows$ = {};
    this.$_totalSize$ = 0;
    $silent$$26$$ || $oj$$26$$.$TableDataSource$.$superclass$.handleEvent.call(this, $oj$$26$$.$TableDataSource$.$EventType$.RESET, null);
    return Promise.resolve();
  };
  $oj$$26$$.$Object$.$exportPrototypeSymbol$("ArrayTableDataSource.prototype.reset", {reset:$oj$$26$$.$ArrayTableDataSource$.prototype.reset});
  $oj$$26$$.$ArrayTableDataSource$.prototype.sort = function $$oj$$26$$$$ArrayTableDataSource$$$sort$($criteria$$2$$) {
    if (null == $criteria$$2$$) {
      return this.comparator = null, Promise.resolve();
    }
    this.$_checkDataLoaded$();
    var $key$$151$$ = $criteria$$2$$.key, $direction$$13$$ = $criteria$$2$$.direction, $comparator$$9$$ = null;
    "ascending" == $direction$$13$$ ? $comparator$$9$$ = function $$comparator$$9$$$($row$$77$$) {
      return $$$$24$$.isFunction($row$$77$$[$key$$151$$]) ? $row$$77$$[$key$$151$$]() : $row$$77$$[$key$$151$$];
    } : "descending" == $direction$$13$$ && ($comparator$$9$$ = function $$comparator$$9$$$($rowA$$, $rowB$$) {
      var $a$$89$$, $b$$61$$;
      $$$$24$$.isFunction($rowA$$[$key$$151$$]) ? ($a$$89$$ = $rowA$$[$key$$151$$](), $b$$61$$ = $rowB$$[$key$$151$$]()) : ($a$$89$$ = $rowA$$[$key$$151$$], $b$$61$$ = $rowB$$[$key$$151$$]);
      return $a$$89$$ === $b$$61$$ ? 0 : $a$$89$$ > $b$$61$$ ? -1 : 1;
    });
    this.comparator = $comparator$$9$$;
    this.direction = $direction$$13$$;
    var $self$$158$$ = this;
    return new Promise(function($resolve$$40$$) {
      $criteria$$2$$ = $criteria$$2$$ || {};
      if ($self$$158$$.$_hasComparator$()) {
        var $comparator$$10$$ = $self$$158$$.comparator;
        $self$$158$$.$_rows$.data.sort(function($a$$90$$, $b$$62$$) {
          return $oj$$26$$.$ArrayTableDataSource$.$_sortFunc$($a$$90$$, $b$$62$$, $comparator$$10$$, $self$$158$$);
        });
        $self$$158$$.$_sorted$ = !0;
        var $result$$57$$ = {header:$criteria$$2$$.key, direction:$criteria$$2$$.direction};
        $oj$$26$$.$TableDataSource$.$superclass$.handleEvent.call($self$$158$$, $oj$$26$$.$TableDataSource$.$EventType$.SORT, $result$$57$$);
        $resolve$$40$$($result$$57$$);
      }
    });
  };
  $oj$$26$$.$Object$.$exportPrototypeSymbol$("ArrayTableDataSource.prototype.sort", {sort:$oj$$26$$.$ArrayTableDataSource$.prototype.sort});
  $oj$$26$$.$ArrayTableDataSource$.prototype.totalSize = function $$oj$$26$$$$ArrayTableDataSource$$$totalSize$() {
    return this.$_totalSize$;
  };
  $oj$$26$$.$Object$.$exportPrototypeSymbol$("ArrayTableDataSource.prototype.totalSize", {totalSize:$oj$$26$$.$ArrayTableDataSource$.prototype.totalSize});
  $oj$$26$$.$ArrayTableDataSource$.prototype.$_addToRowSet$ = function $$oj$$26$$$$ArrayTableDataSource$$$$_addToRowSet$$($m$$22$$, $index$$229$$, $i$$371_options$$291$$) {
    var $j$$53_key$$152$$, $row$$78$$;
    $i$$371_options$$291$$ = $i$$371_options$$291$$ || {};
    var $silent$$27$$ = $i$$371_options$$291$$.silent, $rowArray$$5$$ = {data:[], keys:[], indexes:[]};
    $m$$22$$ instanceof Array || ($m$$22$$ = [$m$$22$$]);
    null == $index$$229$$ || $index$$229$$ instanceof Array || ($index$$229$$ = [$index$$229$$]);
    for ($i$$371_options$$291$$ = 0;$i$$371_options$$291$$ < $m$$22$$.length;$i$$371_options$$291$$++) {
      if ($row$$78$$ = $m$$22$$[$i$$371_options$$291$$], null != $row$$78$$) {
        $j$$53_key$$152$$ = this.$_getId$($row$$78$$);
        $rowArray$$5$$.data.push($row$$78$$);
        $rowArray$$5$$.keys.push($j$$53_key$$152$$);
        if (!0 == this.$_sorted$ && 0 < this.$_rows$.data.length) {
          for ($j$$53_key$$152$$ = 0;$j$$53_key$$152$$ < this.$_rows$.data.length;$j$$53_key$$152$$++) {
            if (0 > $oj$$26$$.$ArrayTableDataSource$.$_sortFunc$($row$$78$$, this.$_rows$.data[$j$$53_key$$152$$], this.comparator, this)) {
              this.$_rows$.data.splice($j$$53_key$$152$$, 0, $row$$78$$);
              $rowArray$$5$$.indexes.push($j$$53_key$$152$$);
              break;
            } else {
              if ($j$$53_key$$152$$ == this.$_rows$.data.length - 1) {
                this.$_rows$.data.push($row$$78$$);
                $rowArray$$5$$.indexes.push($j$$53_key$$152$$ + 1);
                break;
              }
            }
          }
        } else {
          null == $index$$229$$ ? (this.$_rows$.data.push($row$$78$$), $rowArray$$5$$.indexes.push(this.$_rows$.data.length - 1)) : (this.$_rows$.data.splice($index$$229$$[$i$$371_options$$291$$], 0, $row$$78$$), $rowArray$$5$$.indexes.push($index$$229$$[$i$$371_options$$291$$]));
        }
        this.$_totalSize$++;
        this.$_realignRowIndices$();
      }
    }
    !$silent$$27$$ && 0 < $rowArray$$5$$.data.length && $oj$$26$$.$TableDataSource$.$superclass$.handleEvent.call(this, $oj$$26$$.$TableDataSource$.$EventType$.ADD, $rowArray$$5$$);
    return Promise.resolve($rowArray$$5$$);
  };
  $oj$$26$$.$ArrayTableDataSource$.prototype.$_checkDataLoaded$ = function $$oj$$26$$$$ArrayTableDataSource$$$$_checkDataLoaded$$() {
    this.$_isDataLoaded$() || (this.$_rows$ = this.$_getRowArray$(this.$_data$), this.$_totalSize$ = this.$_data$.length);
  };
  $oj$$26$$.$ArrayTableDataSource$.prototype.$_isDataLoaded$ = function $$oj$$26$$$$ArrayTableDataSource$$$$_isDataLoaded$$() {
    return null == this.$_rows$ || null == this.$_rows$.data ? !1 : !0;
  };
  $oj$$26$$.$ArrayTableDataSource$.prototype.$_fetchInternal$ = function $$oj$$26$$$$ArrayTableDataSource$$$$_fetchInternal$$($options$$292$$) {
    $options$$292$$ = $options$$292$$ || {};
    this.$_startFetch$($options$$292$$);
    this.$_checkDataLoaded$();
    var $pageSize$$3_result$$58$$;
    try {
      $pageSize$$3_result$$58$$ = 0 < $options$$292$$.pageSize ? $options$$292$$.pageSize : -1;
      this.$_startIndex$ || (this.$_startIndex$ = 0);
      this.$_startIndex$ = null == $options$$292$$.startIndex ? this.$_startIndex$ : $options$$292$$.startIndex;
      var $endIndex$$16$$ = $oj$$26$$.$ArrayTableDataSource$.$_getEndIndex$(this.$_rows$, this.$_startIndex$, $pageSize$$3_result$$58$$), $rowArray$$6$$ = [], $keyArray$$ = [], $i$$372$$;
      for ($i$$372$$ = this.$_startIndex$;$i$$372$$ <= $endIndex$$16$$;$i$$372$$++) {
        $rowArray$$6$$[$i$$372$$ - this.$_startIndex$] = this.$_rows$.data[$i$$372$$], $keyArray$$[$i$$372$$ - this.$_startIndex$] = this.$_getId$(this.$_rows$.data[$i$$372$$]);
      }
    } catch ($err$$22$$) {
      return this.$_endFetch$($options$$292$$, null, $err$$22$$), Promise.reject($err$$22$$);
    }
    $endIndex$$16$$ < this.$_startIndex$ && (this.$_startIndex$ = $endIndex$$16$$ + 1);
    $options$$292$$.pageSize = $pageSize$$3_result$$58$$;
    $options$$292$$.startIndex = this.$_startIndex$;
    $options$$292$$.refresh = !0;
    $pageSize$$3_result$$58$$ = {data:$rowArray$$6$$, keys:$keyArray$$, startIndex:this.$_startIndex$};
    this.$_endFetch$($options$$292$$, $pageSize$$3_result$$58$$, null);
    return Promise.resolve($pageSize$$3_result$$58$$);
  };
  $oj$$26$$.$ArrayTableDataSource$.prototype.$_getInternal$ = function $$oj$$26$$$$ArrayTableDataSource$$$$_getInternal$$($id$$43$$) {
    var $i$$373$$, $j$$54$$, $row$$79$$, $key$$153$$, $result$$59$$ = null;
    for ($i$$373$$ = 0;$i$$373$$ < this.$_rows$.data.length;$i$$373$$++) {
      if ($row$$79$$ = this.$_rows$.data[$i$$373$$], void 0 !== $row$$79$$) {
        if ($key$$153$$ = this.$_getId$($row$$79$$), $$$$24$$.isArray($key$$153$$) && $$$$24$$.isArray($id$$43$$)) {
          if ($key$$153$$.length == $id$$43$$.length) {
            var $equal$$ = !0;
            for ($j$$54$$ = 0;$j$$54$$ < $id$$43$$.length;$j$$54$$++) {
              if ($key$$153$$[$j$$54$$] != $id$$43$$[$j$$54$$]) {
                $equal$$ = !1;
                break;
              }
            }
            $equal$$ && ($result$$59$$ = {data:$row$$79$$, key:$key$$153$$, index:this.$_rows$.indexes[$i$$373$$]});
          }
        } else {
          $key$$153$$ == $id$$43$$ && ($result$$59$$ = {data:$row$$79$$, key:$key$$153$$, index:this.$_rows$.indexes[$i$$373$$]});
        }
      }
    }
    return $result$$59$$;
  };
  $oj$$26$$.$ArrayTableDataSource$.prototype.$_hasComparator$ = function $$oj$$26$$$$ArrayTableDataSource$$$$_hasComparator$$() {
    var $comparator$$11$$ = this.comparator;
    return void 0 !== $comparator$$11$$ && null !== $comparator$$11$$;
  };
  $oj$$26$$.$ArrayTableDataSource$.prototype.$_realignRowIndices$ = function $$oj$$26$$$$ArrayTableDataSource$$$$_realignRowIndices$$() {
    for (var $i$$374$$ = 0;$i$$374$$ < this.$_rows$.data.length;$i$$374$$++) {
      this.$_rows$.indexes[$i$$374$$] = $i$$374$$;
    }
  };
  $oj$$26$$.$ArrayTableDataSource$.prototype.$_removeInternal$ = function $$oj$$26$$$$ArrayTableDataSource$$$$_removeInternal$$($m$$23$$, $options$$294$$) {
    var $i$$375$$, $deletedRow_key$$154_row$$80$$;
    $options$$294$$ = $options$$294$$ || {};
    var $silent$$28$$ = $options$$294$$.silent, $rowArray$$7$$ = {data:[], keys:[], indexes:[]};
    $m$$23$$ instanceof Array || ($m$$23$$ = [$m$$23$$]);
    var $sortedRowArray$$ = [];
    for ($i$$375$$ = 0;$i$$375$$ < $m$$23$$.length;$i$$375$$++) {
      $deletedRow_key$$154_row$$80$$ = $m$$23$$[$i$$375$$], null != $deletedRow_key$$154_row$$80$$ && ($deletedRow_key$$154_row$$80$$ = this.$_getId$($deletedRow_key$$154_row$$80$$), $deletedRow_key$$154_row$$80$$ = this.$_getInternal$($deletedRow_key$$154_row$$80$$, null), null != $deletedRow_key$$154_row$$80$$ && $sortedRowArray$$.push({data:$deletedRow_key$$154_row$$80$$.data, key:$deletedRow_key$$154_row$$80$$.key, index:$deletedRow_key$$154_row$$80$$.index}));
    }
    $sortedRowArray$$.sort(function($a$$91$$, $b$$63$$) {
      return $a$$91$$.index - $b$$63$$.index;
    });
    for ($i$$375$$ = 0;$i$$375$$ < $sortedRowArray$$.length;$i$$375$$++) {
      $rowArray$$7$$.data.push($sortedRowArray$$[$i$$375$$].data), $rowArray$$7$$.keys.push($sortedRowArray$$[$i$$375$$].key), $rowArray$$7$$.indexes.push($sortedRowArray$$[$i$$375$$].index);
    }
    for ($i$$375$$ = $rowArray$$7$$.indexes.length - 1;0 <= $i$$375$$;$i$$375$$--) {
      this.$_rows$.data.splice($rowArray$$7$$.indexes[$i$$375$$], 1), this.$_rows$.indexes.splice($rowArray$$7$$.indexes[$i$$375$$], 1), this.$_totalSize$--, this.$_realignRowIndices$();
    }
    !$silent$$28$$ && 0 < $rowArray$$7$$.data.length && $oj$$26$$.$TableDataSource$.$superclass$.handleEvent.call(this, $oj$$26$$.$TableDataSource$.$EventType$.REMOVE, $rowArray$$7$$);
    return Promise.resolve($rowArray$$7$$);
  };
  $oj$$26$$.$ArrayTableDataSource$.prototype.$_startFetch$ = function $$oj$$26$$$$ArrayTableDataSource$$$$_startFetch$$($options$$295$$) {
    $options$$295$$.silent || $oj$$26$$.$TableDataSource$.$superclass$.handleEvent.call(this, $oj$$26$$.$TableDataSource$.$EventType$.REQUEST, {startIndex:$options$$295$$.startIndex});
  };
  $oj$$26$$.$ArrayTableDataSource$.prototype.$_endFetch$ = function $$oj$$26$$$$ArrayTableDataSource$$$$_endFetch$$($options$$296$$, $result$$60$$, $error$$38$$) {
    null != $error$$38$$ ? $oj$$26$$.$TableDataSource$.$superclass$.handleEvent.call(this, $oj$$26$$.$TableDataSource$.$EventType$.ERROR, $error$$38$$) : $options$$296$$.silent || $oj$$26$$.$TableDataSource$.$superclass$.handleEvent.call(this, $oj$$26$$.$TableDataSource$.$EventType$.SYNC, $result$$60$$);
  };
  $oj$$26$$.$ArrayTableDataSource$.$_compareKeys$ = function $$oj$$26$$$$ArrayTableDataSource$$$_compareKeys$$($keyA$$4$$, $keyB$$4$$, $direction$$14$$) {
    if ("descending" == $direction$$14$$) {
      if ($keyA$$4$$ < $keyB$$4$$) {
        return 1;
      }
      if ($keyB$$4$$ < $keyA$$4$$) {
        return-1;
      }
    } else {
      if ($keyA$$4$$ > $keyB$$4$$) {
        return 1;
      }
      if ($keyB$$4$$ > $keyA$$4$$) {
        return-1;
      }
    }
    return 0;
  };
  $oj$$26$$.$ArrayTableDataSource$.$_getEndIndex$ = function $$oj$$26$$$$ArrayTableDataSource$$$_getEndIndex$$($rows$$16$$, $startIndex$$39$$, $pageSize$$4$$) {
    var $endIndex$$17$$ = $rows$$16$$.data.length - 1;
    0 < $pageSize$$4$$ && ($endIndex$$17$$ = $startIndex$$39$$ + $pageSize$$4$$ - 1, $endIndex$$17$$ = $endIndex$$17$$ > $rows$$16$$.data.length - 1 ? $rows$$16$$.data.length - 1 : $endIndex$$17$$);
    return $endIndex$$17$$;
  };
  $oj$$26$$.$ArrayTableDataSource$.$_getKey$ = function $$oj$$26$$$$ArrayTableDataSource$$$_getKey$$($val$$52$$, $attr$$20$$) {
    return $$$$24$$.isFunction($val$$52$$[$attr$$20$$]) ? $val$$52$$[$attr$$20$$]() : $val$$52$$[$attr$$20$$];
  };
  $oj$$26$$.$ArrayTableDataSource$.prototype.$_getRowArray$ = function $$oj$$26$$$$ArrayTableDataSource$$$$_getRowArray$$($values$$13$$) {
    var $endIndex$$18$$ = $values$$13$$.length - 1, $rowArray$$8$$ = {}, $i$$376$$, $prop$$71$$;
    $rowArray$$8$$.data = [];
    $rowArray$$8$$.indexes = [];
    this.$_attributes$ = null;
    for ($i$$376$$ = 0;$i$$376$$ <= $endIndex$$18$$;$i$$376$$++) {
      var $clonedRowValues$$ = {}, $rowValues$$ = $values$$13$$[$i$$376$$];
      for ($prop$$71$$ in $rowValues$$) {
        $rowValues$$.hasOwnProperty($prop$$71$$) && ($clonedRowValues$$[$prop$$71$$] = $rowValues$$[$prop$$71$$], 0 == $i$$376$$ && (null == this.$_attributes$ && (this.$_attributes$ = []), this.$_attributes$.push($prop$$71$$)));
      }
      $rowArray$$8$$.data[$i$$376$$] = $clonedRowValues$$;
      $rowArray$$8$$.indexes[$i$$376$$] = $i$$376$$;
    }
    return $rowArray$$8$$;
  };
  $oj$$26$$.$ArrayTableDataSource$.prototype.$_getId$ = function $$oj$$26$$$$ArrayTableDataSource$$$$_getId$$($errDetail$$8_row$$82$$) {
    var $id$$44$$, $idAttribute$$ = this.$_getIdAttr$($errDetail$$8_row$$82$$);
    if ($$$$24$$.isArray($idAttribute$$)) {
      var $i$$377$$;
      $id$$44$$ = [];
      for ($i$$377$$ = 0;$i$$377$$ < $idAttribute$$.length;$i$$377$$++) {
        if ($idAttribute$$[$i$$377$$] in $errDetail$$8_row$$82$$) {
          $id$$44$$[$i$$377$$] = $errDetail$$8_row$$82$$[$idAttribute$$[$i$$377$$]];
        } else {
          throw $errDetail$$8_row$$82$$ = $oj$$26$$.$Translations$.$applyParameters$($oj$$26$$.$ArrayTableDataSource$.$_LOGGER_MSG$._ERR_ARRAY_TABLE_DATASOURCE_IDATTR_NOT_IN_ROW, [$idAttribute$$[$i$$377$$]]), Error($errDetail$$8_row$$82$$);
        }
      }
    } else {
      if ($idAttribute$$ in $errDetail$$8_row$$82$$) {
        $id$$44$$ = $errDetail$$8_row$$82$$[$idAttribute$$];
      } else {
        throw $errDetail$$8_row$$82$$ = $oj$$26$$.$Translations$.$applyParameters$($oj$$26$$.$ArrayTableDataSource$.$_LOGGER_MSG$._ERR_ARRAY_TABLE_DATASOURCE_IDATTR_NOT_IN_ROW, [$idAttribute$$]), Error($errDetail$$8_row$$82$$);
      }
    }
    return $id$$44$$;
  };
  $oj$$26$$.$ArrayTableDataSource$.prototype.$_getIdAttr$ = function $$oj$$26$$$$ArrayTableDataSource$$$$_getIdAttr$$($row$$83$$) {
    if (null != this.$_idAttribute$) {
      return this.$_idAttribute$;
    }
    if (null == this.$_attributes$) {
      this.$_attributes$ = [];
      for (var $prop$$72$$ in $row$$83$$) {
        $row$$83$$.hasOwnProperty($prop$$72$$) && this.$_attributes$.push($prop$$72$$);
      }
    }
    return this.$_attributes$.hasOwnProperty("id") ? "id" : this.$_attributes$;
  };
  $oj$$26$$.$ArrayTableDataSource$.$_sortFunc$ = function $$oj$$26$$$$ArrayTableDataSource$$$_sortFunc$$($a$$92_attrs1$$2$$, $attrs2$$2_b$$64$$, $comparator$$12_i$$378$$, $self$$161$$) {
    var $keyA$$5_retVal$$16$$, $keyB$$5$$;
    if ($$$$24$$.isFunction($comparator$$12_i$$378$$)) {
      if (1 === $comparator$$12_i$$378$$.length) {
        $keyA$$5_retVal$$16$$ = $comparator$$12_i$$378$$.call($self$$161$$, $a$$92_attrs1$$2$$);
        $keyB$$5$$ = $comparator$$12_i$$378$$.call($self$$161$$, $attrs2$$2_b$$64$$);
        $a$$92_attrs1$$2$$ = $oj$$26$$.$StringUtils$.$isString$($keyA$$5_retVal$$16$$) ? $keyA$$5_retVal$$16$$.split(",") : [$keyA$$5_retVal$$16$$];
        $attrs2$$2_b$$64$$ = $oj$$26$$.$StringUtils$.$isString$($keyB$$5$$) ? $keyB$$5$$.split(",") : [$keyB$$5$$];
        for ($comparator$$12_i$$378$$ = 0;$comparator$$12_i$$378$$ < $a$$92_attrs1$$2$$.length;$comparator$$12_i$$378$$++) {
          if ($keyA$$5_retVal$$16$$ = $oj$$26$$.$ArrayTableDataSource$.$_compareKeys$($a$$92_attrs1$$2$$[$comparator$$12_i$$378$$], $attrs2$$2_b$$64$$[$comparator$$12_i$$378$$], $self$$161$$.direction), 0 !== $keyA$$5_retVal$$16$$) {
            return $keyA$$5_retVal$$16$$;
          }
        }
        return 0;
      }
      return $comparator$$12_i$$378$$.call($self$$161$$, $a$$92_attrs1$$2$$, $attrs2$$2_b$$64$$);
    }
    if ($oj$$26$$.$StringUtils$.$isString$($comparator$$12_i$$378$$)) {
      var $attrs$$21$$ = $comparator$$12_i$$378$$.split(",");
      for ($comparator$$12_i$$378$$ = 0;$comparator$$12_i$$378$$ < $attrs$$21$$.length;$comparator$$12_i$$378$$++) {
        if ($keyA$$5_retVal$$16$$ = $oj$$26$$.$ArrayTableDataSource$.$_getKey$($a$$92_attrs1$$2$$, $attrs$$21$$[$comparator$$12_i$$378$$]), $keyB$$5$$ = $oj$$26$$.$ArrayTableDataSource$.$_getKey$($attrs2$$2_b$$64$$, $attrs$$21$$[$comparator$$12_i$$378$$]), $keyA$$5_retVal$$16$$ = $oj$$26$$.$ArrayTableDataSource$.$_compareKeys$($keyA$$5_retVal$$16$$, $keyB$$5$$, $self$$161$$.direction), 0 !== $keyA$$5_retVal$$16$$) {
          return $keyA$$5_retVal$$16$$;
        }
      }
    }
    return 0;
  };
  $oj$$26$$.$ArrayTableDataSource$.$_LOGGER_MSG$ = {_INFO_ARRAY_TABLE_DATASOURCE_IDATTR:"idAttribute option has not been specified. Will default to using 'id' if the field exists. If not, will use all the fields.", _ERR_ARRAY_TABLE_DATASOURCE_IDATTR_NOT_IN_ROW:"Specified idAttribute {0} not in row data. Please ensure all specified idAttribute fields are in the row data or do not specify idAttribute and all fields will be used as id."};
});

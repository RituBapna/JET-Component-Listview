/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
define(["ojs/ojcore", "jquery", "ojs/ojdatasource-common"], function($oj$$57$$) {
  $oj$$57$$.$ArrayDataGridDataSource$ = function $$oj$$57$$$$ArrayDataGridDataSource$$($data$$157$$, $options$$331$$) {
    if (!($data$$157$$ instanceof Array) && "function" != typeof $data$$157$$ && "function" != typeof $data$$157$$.$subscribe$) {
      throw Error("_ERR_DATA_INVALID_TYPE_SUMMARY\n_ERR_DATA_INVALID_TYPE_DETAIL");
    }
    this.$rowHeaderKey$ = this.$_getRowHeaderFromOptions$($options$$331$$);
    null != $options$$331$$ && (this.columns = $options$$331$$.columns, this.$_sortInfo$ = $options$$331$$.initialSort);
    $oj$$57$$.$ArrayDataGridDataSource$.$superclass$.constructor.call(this, $data$$157$$);
  };
  $goog$exportPath_$$("ArrayDataGridDataSource", $oj$$57$$.$ArrayDataGridDataSource$, $oj$$57$$);
  $oj$$57$$.$Object$.$createSubclass$($oj$$57$$.$ArrayDataGridDataSource$, $oj$$57$$.$DataGridDataSource$, "oj.ArrayDataGridDataSource");
  $oj$$57$$.$ArrayDataGridDataSource$.prototype.Init = function $$oj$$57$$$$ArrayDataGridDataSource$$$Init$() {
    null == this.columns && (this.columns = this.$_getColumnsForScaffolding$(this.$getDataArray$()));
    this.$_initializeRowKeys$();
    "function" == typeof this.data && this.data.subscribe(this.$_subscribe$.bind(this), null, "arrayChange");
    $oj$$57$$.$ArrayDataGridDataSource$.$superclass$.Init.call(this);
  };
  $oj$$57$$.$Object$.$exportPrototypeSymbol$("ArrayDataGridDataSource.prototype.Init", {Init:$oj$$57$$.$ArrayDataGridDataSource$.prototype.Init});
  $oj$$57$$.$ArrayDataGridDataSource$.prototype.$_getRowHeaderFromOptions$ = function $$oj$$57$$$$ArrayDataGridDataSource$$$$_getRowHeaderFromOptions$$($option$$39_options$$332$$) {
    if (null != $option$$39_options$$332$$ && null != $option$$39_options$$332$$.rowHeader) {
      if ($option$$39_options$$332$$ = $option$$39_options$$332$$.rowHeader, "object" === typeof $option$$39_options$$332$$) {
        if (null != $option$$39_options$$332$$["default"] && "none" == $option$$39_options$$332$$["default"]) {
          return;
        }
      } else {
        if (null != $option$$39_options$$332$$) {
          return $option$$39_options$$332$$;
        }
      }
    }
    return "m_defaultIndex";
  };
  $oj$$57$$.$ArrayDataGridDataSource$.prototype.$_initializeRowKeys$ = function $$oj$$57$$$$ArrayDataGridDataSource$$$$_initializeRowKeys$$() {
    var $data$$158$$;
    $data$$158$$ = this.$getDataArray$();
    for (this.$lastKey$ = 0;this.$lastKey$ < $data$$158$$.length;this.$lastKey$ += 1) {
      $data$$158$$[this.$lastKey$].ojKey = this.$lastKey$.toString();
    }
  };
  $oj$$57$$.$ArrayDataGridDataSource$.prototype.$_getColumnsForScaffolding$ = function $$oj$$57$$$$ArrayDataGridDataSource$$$$_getColumnsForScaffolding$$($data$$159$$) {
    var $propertyName$$8$$, $columns$$26$$;
    if ("number" !== typeof $data$$159$$.length || 0 === $data$$159$$.length) {
      return[];
    }
    $columns$$26$$ = [];
    for ($propertyName$$8$$ in $data$$159$$[0]) {
      $data$$159$$[0].hasOwnProperty($propertyName$$8$$) && (void 0 != this.$rowHeaderKey$ && $propertyName$$8$$ == this.$rowHeaderKey$ || $columns$$26$$.push($propertyName$$8$$));
    }
    return $columns$$26$$;
  };
  $oj$$57$$.$ArrayDataGridDataSource$.prototype.getCount = function $$oj$$57$$$$ArrayDataGridDataSource$$$getCount$($axis$$77$$) {
    return "row" === $axis$$77$$ ? this.$_size$() : "column" === $axis$$77$$ ? this.columns.length : 0;
  };
  $oj$$57$$.$Object$.$exportPrototypeSymbol$("ArrayDataGridDataSource.prototype.getCount", {getCount:$oj$$57$$.$ArrayDataGridDataSource$.prototype.getCount});
  $oj$$57$$.$ArrayDataGridDataSource$.prototype.getCountPrecision = function $$oj$$57$$$$ArrayDataGridDataSource$$$getCountPrecision$() {
    return "exact";
  };
  $oj$$57$$.$Object$.$exportPrototypeSymbol$("ArrayDataGridDataSource.prototype.getCountPrecision", {getCountPrecision:$oj$$57$$.$ArrayDataGridDataSource$.prototype.getCountPrecision});
  $oj$$57$$.$ArrayDataGridDataSource$.prototype.$_getHeaderData$ = function $$oj$$57$$$$ArrayDataGridDataSource$$$$_getHeaderData$$($axis$$79$$, $index$$284$$) {
    var $data$$160$$;
    if ("row" === $axis$$79$$) {
      if (void 0 == this.$rowHeaderKey$) {
        return null;
      }
      if ("m_defaultIndex" == this.$rowHeaderKey$) {
        return this.$_getRowKeyByIndex$($index$$284$$);
      }
      $data$$160$$ = this.$getDataArray$();
      return $data$$160$$[$index$$284$$][this.$rowHeaderKey$];
    }
    if ("column" === $axis$$79$$) {
      return this.columns[$index$$284$$];
    }
  };
  $oj$$57$$.$ArrayDataGridDataSource$.prototype.$_getHeaderMetadata$ = function $$oj$$57$$$$ArrayDataGridDataSource$$$$_getHeaderMetadata$$($axis$$80$$, $index$$285$$) {
    var $key$$175$$;
    if ("row" === $axis$$80$$) {
      return{key:this.$_getRowKeyByIndex$($index$$285$$)};
    }
    if ("column" === $axis$$80$$) {
      return $key$$175$$ = this.$_getHeaderData$($axis$$80$$, $index$$285$$), null != this.$_sortInfo$ && this.$_sortInfo$.key === $key$$175$$ ? {key:this.$_getHeaderData$($axis$$80$$, $index$$285$$), sortDirection:this.$_sortInfo$.direction} : {key:$key$$175$$};
    }
  };
  $oj$$57$$.$ArrayDataGridDataSource$.prototype.fetchHeaders = function $$oj$$57$$$$ArrayDataGridDataSource$$$fetchHeaders$($headerRange$$18$$, $callbacks$$32$$, $callbackObjects$$16$$) {
    var $axis$$81_headerSet$$15$$, $start$$62$$, $count$$54_end$$19$$, $data$$161$$;
    $axis$$81_headerSet$$15$$ = $headerRange$$18$$.axis;
    $start$$62$$ = $headerRange$$18$$.start;
    $count$$54_end$$19$$ = $headerRange$$18$$.count;
    $start$$62$$ = Math.max(0, $start$$62$$);
    "column" === $axis$$81_headerSet$$15$$ ? $count$$54_end$$19$$ = Math.min(this.columns.length, $start$$62$$ + $count$$54_end$$19$$) : ($data$$161$$ = this.$getDataArray$(), $count$$54_end$$19$$ = void 0 === this.$rowHeaderKey$ ? $start$$62$$ : Math.min($data$$161$$.length, $start$$62$$ + $count$$54_end$$19$$));
    $axis$$81_headerSet$$15$$ = new $oj$$57$$.$ArrayHeaderSet$($start$$62$$, $count$$54_end$$19$$, $axis$$81_headerSet$$15$$, this);
    null != $callbacks$$32$$ && null != $callbacks$$32$$.success && (null == $callbackObjects$$16$$ && ($callbackObjects$$16$$ = {}), $callbacks$$32$$.success.call($callbackObjects$$16$$.success, $axis$$81_headerSet$$15$$, $headerRange$$18$$));
  };
  $oj$$57$$.$Object$.$exportPrototypeSymbol$("ArrayDataGridDataSource.prototype.fetchHeaders", {fetchHeaders:$oj$$57$$.$ArrayDataGridDataSource$.prototype.fetchHeaders});
  $oj$$57$$.$ArrayDataGridDataSource$.prototype.$_getCellData$ = function $$oj$$57$$$$ArrayDataGridDataSource$$$$_getCellData$$($row$$85$$, $column$$32$$) {
    var $col$$3$$ = this.columns[$column$$32$$];
    return this.$getDataArray$()[$row$$85$$][$col$$3$$];
  };
  $oj$$57$$.$ArrayDataGridDataSource$.prototype.$_getCellMetadata$ = function $$oj$$57$$$$ArrayDataGridDataSource$$$$_getCellMetadata$$($row$$86$$, $column$$33$$) {
    return{keys:{row:this.$_getRowKeyByIndex$($row$$86$$), column:this.columns[$column$$33$$]}};
  };
  $oj$$57$$.$ArrayDataGridDataSource$.prototype.fetchCells = function $$oj$$57$$$$ArrayDataGridDataSource$$$fetchCells$($cellRanges$$7$$, $callbacks$$33$$, $callbackObjects$$17$$) {
    var $cellSet$$15_i$$426$$, $cellRange$$12$$, $rowStart$$17$$, $rowEnd$$4$$, $colStart$$3$$, $colEnd$$1$$;
    for ($cellSet$$15_i$$426$$ = 0;$cellSet$$15_i$$426$$ < $cellRanges$$7$$.length;$cellSet$$15_i$$426$$ += 1) {
      $cellRange$$12$$ = $cellRanges$$7$$[$cellSet$$15_i$$426$$], "row" === $cellRange$$12$$.axis ? ($rowStart$$17$$ = $cellRange$$12$$.start, $rowEnd$$4$$ = Math.min(this.$_size$(), $rowStart$$17$$ + $cellRange$$12$$.count)) : "column" === $cellRange$$12$$.axis && ($colStart$$3$$ = $cellRange$$12$$.start, $colEnd$$1$$ = Math.min(this.columns.length, $colStart$$3$$ + $cellRange$$12$$.count));
    }
    void 0 === $rowEnd$$4$$ || void 0 === $colEnd$$1$$ ? null != $callbacks$$33$$ && null != $callbacks$$33$$.error && (null == $callbackObjects$$17$$ && ($callbackObjects$$17$$ = {}), $callbacks$$33$$.error.call($callbackObjects$$17$$.error)) : ($cellSet$$15_i$$426$$ = new $oj$$57$$.$ArrayCellSet$($rowStart$$17$$, $rowEnd$$4$$, $colStart$$3$$, $colEnd$$1$$, this), null != $callbacks$$33$$ && null != $callbacks$$33$$.success && (null == $callbackObjects$$17$$ && ($callbackObjects$$17$$ = {}), $callbacks$$33$$.success.call($callbackObjects$$17$$.success, 
    $cellSet$$15_i$$426$$, $cellRanges$$7$$)));
  };
  $oj$$57$$.$Object$.$exportPrototypeSymbol$("ArrayDataGridDataSource.prototype.fetchCells", {fetchCells:$oj$$57$$.$ArrayDataGridDataSource$.prototype.fetchCells});
  $oj$$57$$.$ArrayDataGridDataSource$.prototype.keys = function $$oj$$57$$$$ArrayDataGridDataSource$$$keys$($indexes$$27$$) {
    var $rowIndex$$19$$ = $indexes$$27$$.row, $columnIndex$$8$$ = $indexes$$27$$.column;
    return new Promise(function($resolve$$50$$) {
      $resolve$$50$$({row:this.$_getRowKeyByIndex$($rowIndex$$19$$), column:this.columns[$columnIndex$$8$$]});
    }.bind(this));
  };
  $oj$$57$$.$Object$.$exportPrototypeSymbol$("ArrayDataGridDataSource.prototype.keys", {keys:$oj$$57$$.$ArrayDataGridDataSource$.prototype.keys});
  $oj$$57$$.$ArrayDataGridDataSource$.prototype.indexes = function $$oj$$57$$$$ArrayDataGridDataSource$$$indexes$($keys$$51$$) {
    var $rowKey$$50$$ = $keys$$51$$.row, $columnKey$$5$$ = $keys$$51$$.column;
    return new Promise(function($resolve$$51$$) {
      $resolve$$51$$({row:this.$_getRowIndexByKey$($rowKey$$50$$), column:this.columns.indexOf($columnKey$$5$$)});
    }.bind(this));
  };
  $oj$$57$$.$Object$.$exportPrototypeSymbol$("ArrayDataGridDataSource.prototype.indexes", {indexes:$oj$$57$$.$ArrayDataGridDataSource$.prototype.indexes});
  $oj$$57$$.$ArrayDataGridDataSource$.prototype.sort = function $$oj$$57$$$$ArrayDataGridDataSource$$$sort$($criteria$$4_direction$$19$$, $callbacks$$34$$, $callbackObjects$$18$$) {
    var $sortArray$$ = [], $newColumns$$ = [], $axis$$82_i$$427$$, $headerIndex$$3_headerKey$$2$$;
    null != $callbacks$$34$$ && null == $callbackObjects$$18$$ && ($callbackObjects$$18$$ = {});
    if (null == $criteria$$4_direction$$19$$) {
      this.$_resetSortOrder$($callbacks$$34$$, $callbackObjects$$18$$);
    } else {
      if ($axis$$82_i$$427$$ = $criteria$$4_direction$$19$$.axis, $headerIndex$$3_headerKey$$2$$ = $criteria$$4_direction$$19$$.key, $criteria$$4_direction$$19$$ = $criteria$$4_direction$$19$$.direction, "column" === $axis$$82_i$$427$$) {
        void 0 == this.$origData$ && (this.$_origSortInfo$ = this.$_sortInfo$, this.$origData$ = this.data.slice()), this.$_sortInfo$ = {key:$headerIndex$$3_headerKey$$2$$, direction:$criteria$$4_direction$$19$$}, this.$getDataArray$().sort(this.$_naturalSort$($criteria$$4_direction$$19$$, $headerIndex$$3_headerKey$$2$$)), null != $callbacks$$34$$ && null != $callbacks$$34$$.success && $callbacks$$34$$.success.call($callbackObjects$$18$$.success);
      } else {
        if ("row" === $axis$$82_i$$427$$) {
          $headerIndex$$3_headerKey$$2$$ = this.$_getRowIndexByKey$($headerIndex$$3_headerKey$$2$$);
          for ($axis$$82_i$$427$$ = 0;$axis$$82_i$$427$$ < this.columns.length;$axis$$82_i$$427$$ += 1) {
            $sortArray$$[$axis$$82_i$$427$$] = this.$getDataArray$()[$headerIndex$$3_headerKey$$2$$][this.columns[$axis$$82_i$$427$$]];
          }
          $sortArray$$.sort(this.$_naturalSort$($criteria$$4_direction$$19$$));
          for ($axis$$82_i$$427$$ = 0;$axis$$82_i$$427$$ < this.columns.length;$axis$$82_i$$427$$ += 1) {
            $newColumns$$[$axis$$82_i$$427$$] = this.columns[$sortArray$$.indexOf(this.$getDataArray$()[$headerIndex$$3_headerKey$$2$$][this.columns[$axis$$82_i$$427$$]])];
          }
          this.$origColumns$ = this.columns;
          this.columns = $newColumns$$;
          null != $callbacks$$34$$ && null != $callbacks$$34$$.success && $callbacks$$34$$.success.call($callbackObjects$$18$$.success);
        } else {
          null !== $callbacks$$34$$ && null != $callbacks$$34$$.error && $callbacks$$34$$.error.call($callbackObjects$$18$$.error, "Invalid axis value");
        }
      }
    }
  };
  $oj$$57$$.$Object$.$exportPrototypeSymbol$("ArrayDataGridDataSource.prototype.sort", {sort:$oj$$57$$.$ArrayDataGridDataSource$.prototype.sort});
  $oj$$57$$.$ArrayDataGridDataSource$.prototype.$_resetSortOrder$ = function $$oj$$57$$$$ArrayDataGridDataSource$$$$_resetSortOrder$$($callbacks$$35$$, $callbackObjects$$19$$) {
    null != this.$origData$ && (this.data = this.$origData$, this.$_sortInfo$ = this.$_origSortInfo$);
    null != this.$origColumns$ && (this.columns = this.$origColumns$);
    null != $callbacks$$35$$ && null != $callbacks$$35$$.success && $callbacks$$35$$.success.call($callbackObjects$$19$$.success);
  };
  $oj$$57$$.$ArrayDataGridDataSource$.prototype.getCapability = function $$oj$$57$$$$ArrayDataGridDataSource$$$getCapability$($feature$$8$$) {
    return "sort" === $feature$$8$$ ? "column" : "move" === $feature$$8$$ ? "row" : null;
  };
  $oj$$57$$.$Object$.$exportPrototypeSymbol$("ArrayDataGridDataSource.prototype.getCapability", {getCapability:$oj$$57$$.$ArrayDataGridDataSource$.prototype.getCapability});
  $oj$$57$$.$ArrayDataGridDataSource$.prototype.$_naturalSort$ = function $$oj$$57$$$$ArrayDataGridDataSource$$$$_naturalSort$$($direction$$20$$, $key$$176$$) {
    if ("ascending" === $direction$$20$$) {
      return function($a$$99$$, $b$$68$$) {
        var $as$$2$$, $bs$$2$$;
        void 0 != $key$$176$$ && ($a$$99$$ instanceof Array ? ($a$$99$$ = $a$$99$$[parseInt($key$$176$$, 10)], $b$$68$$ = $b$$68$$[parseInt($key$$176$$, 10)]) : ($a$$99$$ = $a$$99$$[$key$$176$$], $b$$68$$ = $b$$68$$[$key$$176$$]));
        $as$$2$$ = isNaN($a$$99$$);
        $bs$$2$$ = isNaN($b$$68$$);
        $a$$99$$ instanceof Date && ($a$$99$$ = $a$$99$$.toISOString(), $as$$2$$ = !0);
        $b$$68$$ instanceof Date && ($b$$68$$ = $b$$68$$.toISOString(), $bs$$2$$ = !0);
        return $as$$2$$ && $bs$$2$$ ? $a$$99$$ < $b$$68$$ ? -1 : $a$$99$$ === $b$$68$$ ? 0 : 1 : $as$$2$$ ? 1 : $bs$$2$$ ? -1 : $a$$99$$ - $b$$68$$;
      };
    }
    if ("descending" === $direction$$20$$) {
      return function($a$$100$$, $b$$69$$) {
        var $as$$3$$, $bs$$3$$;
        void 0 != $key$$176$$ && ($a$$100$$ instanceof Array ? ($a$$100$$ = $a$$100$$[parseInt($key$$176$$, 10)], $b$$69$$ = $b$$69$$[parseInt($key$$176$$, 10)]) : ($a$$100$$ = $a$$100$$[$key$$176$$], $b$$69$$ = $b$$69$$[$key$$176$$]));
        $as$$3$$ = isNaN($a$$100$$);
        $bs$$3$$ = isNaN($b$$69$$);
        $a$$100$$ instanceof Date && ($a$$100$$ = $a$$100$$.toISOString(), $as$$3$$ = !0);
        $b$$69$$ instanceof Date && ($b$$69$$ = $b$$69$$.toISOString(), $bs$$3$$ = !0);
        return $as$$3$$ && $bs$$3$$ ? $a$$100$$ > $b$$69$$ ? -1 : $a$$100$$ === $b$$69$$ ? 0 : 1 : $as$$3$$ ? -1 : $bs$$3$$ ? 1 : $b$$69$$ - $a$$100$$;
      };
    }
  };
  $oj$$57$$.$ArrayDataGridDataSource$.prototype.move = function $$oj$$57$$$$ArrayDataGridDataSource$$$move$($moveKey$$1$$, $atKey$$1$$) {
    var $atKeyIndex_event$$639_moveKeyIndex$$, $moveData$$;
    $atKeyIndex_event$$639_moveKeyIndex$$ = this.$_getRowIndexByKey$($moveKey$$1$$);
    $moveData$$ = this.data.splice($atKeyIndex_event$$639_moveKeyIndex$$, 1)[0];
    this.data instanceof Array && ($atKeyIndex_event$$639_moveKeyIndex$$ = this.$_getModelEvent$("delete", $moveKey$$1$$, null, $atKeyIndex_event$$639_moveKeyIndex$$, -1, !0), this.handleEvent("change", $atKeyIndex_event$$639_moveKeyIndex$$));
    null === $atKey$$1$$ ? (this.data.push($moveData$$), $atKeyIndex_event$$639_moveKeyIndex$$ = this.data.length) : ($atKeyIndex_event$$639_moveKeyIndex$$ = this.$_getRowIndexByKey$($atKey$$1$$), this.data.splice($atKeyIndex_event$$639_moveKeyIndex$$, 0, $moveData$$));
    this.data instanceof Array && ($atKeyIndex_event$$639_moveKeyIndex$$ = this.$_getModelEvent$("insert", $moveKey$$1$$, null, $atKeyIndex_event$$639_moveKeyIndex$$, -1), this.handleEvent("change", $atKeyIndex_event$$639_moveKeyIndex$$));
    null != this.$origData$ && (this.$origData$ = this.data.slice());
  };
  $oj$$57$$.$Object$.$exportPrototypeSymbol$("ArrayDataGridDataSource.prototype.move", {move:$oj$$57$$.$ArrayDataGridDataSource$.prototype.move});
  $oj$$57$$.$ArrayDataGridDataSource$.prototype.moveOK = function $$oj$$57$$$$ArrayDataGridDataSource$$$moveOK$() {
    return "valid";
  };
  $oj$$57$$.$Object$.$exportPrototypeSymbol$("ArrayDataGridDataSource.prototype.moveOK", {moveOK:$oj$$57$$.$ArrayDataGridDataSource$.prototype.moveOK});
  $oj$$57$$.$ArrayDataGridDataSource$.prototype.$getDataArray$ = function $$oj$$57$$$$ArrayDataGridDataSource$$$$getDataArray$$() {
    return "function" === typeof this.data ? this.data() : this.data;
  };
  $oj$$57$$.$ArrayDataGridDataSource$.prototype.$_getRowIndexByKey$ = function $$oj$$57$$$$ArrayDataGridDataSource$$$$_getRowIndexByKey$$($key$$177$$) {
    var $i$$428$$, $data$$163$$ = this.$getDataArray$();
    for ($i$$428$$ = 0;$i$$428$$ < $data$$163$$.length;$i$$428$$++) {
      if ($data$$163$$[$i$$428$$].ojKey === $key$$177$$) {
        return $i$$428$$;
      }
    }
    return-1;
  };
  $oj$$57$$.$ArrayDataGridDataSource$.prototype.$_getRowKeyByIndex$ = function $$oj$$57$$$$ArrayDataGridDataSource$$$$_getRowKeyByIndex$$($index$$286$$) {
    var $data$$164$$ = this.$getDataArray$();
    return $data$$164$$[$index$$286$$] ? $data$$164$$[$index$$286$$].ojKey : null;
  };
  $oj$$57$$.$ArrayDataGridDataSource$.prototype.$_getModelEvent$ = function $$oj$$57$$$$ArrayDataGridDataSource$$$$_getModelEvent$$($operation$$8$$, $rowKey$$51$$, $columnKey$$6$$, $rowIndex$$20$$, $columnIndex$$9$$, $silent$$29$$) {
    var $event$$640$$ = {source:this};
    $event$$640$$.operation = $operation$$8$$;
    $event$$640$$.keys = {row:$rowKey$$51$$, column:$columnKey$$6$$};
    $event$$640$$.indexes = {row:$rowIndex$$20$$, column:$columnIndex$$9$$};
    $event$$640$$.silent = $silent$$29$$;
    return $event$$640$$;
  };
  $oj$$57$$.$ArrayDataGridDataSource$.prototype.$_subscribe$ = function $$oj$$57$$$$ArrayDataGridDataSource$$$$_subscribe$$($changes$$6$$) {
    var $i$$429$$, $move_rowData$$4_rowKey$$52$$, $change$$5_event$$641_rowIndex$$21$$, $added$$2$$ = !1;
    $move_rowData$$4_rowKey$$52$$ = !1;
    var $keys$$52$$ = [], $indexes$$28$$ = [];
    for ($i$$429$$ = 0;$i$$429$$ < $changes$$6$$.length;$i$$429$$++) {
      $change$$5_event$$641_rowIndex$$21$$ = $changes$$6$$[$i$$429$$];
      if (void 0 !== $change$$5_event$$641_rowIndex$$21$$.moved) {
        $move_rowData$$4_rowKey$$52$$ = !0;
        $change$$5_event$$641_rowIndex$$21$$ = this.$_getModelEvent$("refresh", null, null);
        this.handleEvent("change", $change$$5_event$$641_rowIndex$$21$$);
        break;
      }
      "added" === $change$$5_event$$641_rowIndex$$21$$.status && ($added$$2$$ = !0);
    }
    if (!$move_rowData$$4_rowKey$$52$$) {
      for ($i$$429$$ = 0;$i$$429$$ < $changes$$6$$.length;$i$$429$$++) {
        $change$$5_event$$641_rowIndex$$21$$ = $changes$$6$$[$i$$429$$], "deleted" === $change$$5_event$$641_rowIndex$$21$$.status && ($move_rowData$$4_rowKey$$52$$ = $change$$5_event$$641_rowIndex$$21$$.value, $change$$5_event$$641_rowIndex$$21$$ = $change$$5_event$$641_rowIndex$$21$$.index, $move_rowData$$4_rowKey$$52$$ = $move_rowData$$4_rowKey$$52$$.ojKey, $keys$$52$$.push({row:$move_rowData$$4_rowKey$$52$$, column:-1}), $indexes$$28$$.push({row:$change$$5_event$$641_rowIndex$$21$$, column:-1}))
        ;
      }
      0 < $keys$$52$$.length && ($change$$5_event$$641_rowIndex$$21$$ = {source:this, operation:"delete", keys:$keys$$52$$, indexes:$indexes$$28$$, silent:$added$$2$$}, this.handleEvent("change", $change$$5_event$$641_rowIndex$$21$$));
      for ($i$$429$$ = 0;$i$$429$$ < $changes$$6$$.length;$i$$429$$++) {
        $change$$5_event$$641_rowIndex$$21$$ = $changes$$6$$[$i$$429$$], "added" === $change$$5_event$$641_rowIndex$$21$$.status && ($move_rowData$$4_rowKey$$52$$ = $change$$5_event$$641_rowIndex$$21$$.value, $change$$5_event$$641_rowIndex$$21$$ = $change$$5_event$$641_rowIndex$$21$$.index, null == $move_rowData$$4_rowKey$$52$$.ojKey && ($move_rowData$$4_rowKey$$52$$.ojKey = this.$lastKey$.toString(), this.$lastKey$++), $move_rowData$$4_rowKey$$52$$ = $move_rowData$$4_rowKey$$52$$.ojKey, $change$$5_event$$641_rowIndex$$21$$ = 
        this.$_getModelEvent$("insert", $move_rowData$$4_rowKey$$52$$, null, $change$$5_event$$641_rowIndex$$21$$, -1), this.handleEvent("change", $change$$5_event$$641_rowIndex$$21$$));
      }
    }
    null != this.$origData$ && (this.$origData$ = this.data.slice());
  };
  $oj$$57$$.$ArrayDataGridDataSource$.prototype.$_size$ = function $$oj$$57$$$$ArrayDataGridDataSource$$$$_size$$() {
    return this.$getDataArray$().length;
  };
  $oj$$57$$.$ArrayDataGridDataSource$.prototype.$getRowHeaderKey$ = function $$oj$$57$$$$ArrayDataGridDataSource$$$$getRowHeaderKey$$() {
    return this.$rowHeaderKey$;
  };
  $oj$$57$$.$Object$.$exportPrototypeSymbol$("ArrayDataGridDataSource.prototype.getRowHeaderKey", {$getRowHeaderKey$:$oj$$57$$.$ArrayDataGridDataSource$.prototype.$getRowHeaderKey$});
  $oj$$57$$.$ArrayDataGridDataSource$.prototype.$getColumns$ = function $$oj$$57$$$$ArrayDataGridDataSource$$$$getColumns$$() {
    return this.columns;
  };
  $oj$$57$$.$Object$.$exportPrototypeSymbol$("ArrayDataGridDataSource.prototype.getColumns", {$getColumns$:$oj$$57$$.$ArrayDataGridDataSource$.prototype.$getColumns$});
  $oj$$57$$.$ArrayDataGridDataSource$.prototype.getData = function $$oj$$57$$$$ArrayDataGridDataSource$$$getData$() {
    return this.data;
  };
  $oj$$57$$.$Object$.$exportPrototypeSymbol$("ArrayDataGridDataSource.prototype.getData", {getData:$oj$$57$$.$ArrayDataGridDataSource$.prototype.getData});
  $oj$$57$$.$ArrayHeaderSet$ = function $$oj$$57$$$$ArrayHeaderSet$$($start$$63$$, $end$$20$$, $axis$$83$$, $callback$$130$$) {
    this.$m_start$ = $start$$63$$;
    this.$m_end$ = $end$$20$$;
    this.$m_axis$ = $axis$$83$$;
    this.$m_callback$ = $callback$$130$$;
  };
  $goog$exportPath_$$("ArrayHeaderSet", $oj$$57$$.$ArrayHeaderSet$, $oj$$57$$);
  $oj$$57$$.$ArrayHeaderSet$.prototype.getData = function $$oj$$57$$$$ArrayHeaderSet$$$getData$($index$$287$$, $level$$57$$) {
    if (null == this.$m_callback$) {
      return null;
    }
    $oj$$57$$.$Assert$.assert($index$$287$$ <= this.$m_end$ && $index$$287$$ >= this.$m_start$, "index out of bounds");
    $oj$$57$$.$Assert$.assert(null == $level$$57$$ || 0 == $level$$57$$, "level out of bounds");
    return this.$m_callback$.$_getHeaderData$(this.$m_axis$, $index$$287$$);
  };
  $oj$$57$$.$Object$.$exportPrototypeSymbol$("ArrayHeaderSet.prototype.getData", {getData:$oj$$57$$.$ArrayHeaderSet$.prototype.getData});
  $oj$$57$$.$ArrayHeaderSet$.prototype.getMetadata = function $$oj$$57$$$$ArrayHeaderSet$$$getMetadata$($index$$288$$, $level$$58$$) {
    if (null == this.$m_callback$) {
      return null;
    }
    $oj$$57$$.$Assert$.assert($index$$288$$ <= this.$m_end$ && $index$$288$$ >= this.$m_start$, "index out of bounds");
    $oj$$57$$.$Assert$.assert(null == $level$$58$$ || 0 == $level$$58$$, "level out of bounds");
    return this.$m_callback$.$_getHeaderMetadata$(this.$m_axis$, $index$$288$$);
  };
  $oj$$57$$.$Object$.$exportPrototypeSymbol$("ArrayHeaderSet.prototype.getMetadata", {getMetadata:$oj$$57$$.$ArrayHeaderSet$.prototype.getMetadata});
  $oj$$57$$.$ArrayHeaderSet$.prototype.getLevelCount = function $$oj$$57$$$$ArrayHeaderSet$$$getLevelCount$() {
    return 0 < this.getCount() ? 1 : 0;
  };
  $oj$$57$$.$Object$.$exportPrototypeSymbol$("ArrayHeaderSet.prototype.getLevelCount", {getLevelCount:$oj$$57$$.$ArrayHeaderSet$.prototype.getLevelCount});
  $oj$$57$$.$ArrayHeaderSet$.prototype.getExtent = function $$oj$$57$$$$ArrayHeaderSet$$$getExtent$($index$$289$$, $level$$59$$) {
    $oj$$57$$.$Assert$.assert($index$$289$$ <= this.$m_end$ && $index$$289$$ >= this.$m_start$, "index out of bounds");
    $oj$$57$$.$Assert$.assert(null == $level$$59$$ || 0 == $level$$59$$, "level out of bounds");
    return{extent:1, more:{before:!1, after:!1}};
  };
  $oj$$57$$.$Object$.$exportPrototypeSymbol$("ArrayHeaderSet.prototype.getExtent", {getExtent:$oj$$57$$.$ArrayHeaderSet$.prototype.getExtent});
  $oj$$57$$.$ArrayHeaderSet$.prototype.getDepth = function $$oj$$57$$$$ArrayHeaderSet$$$getDepth$($index$$290$$, $level$$60$$) {
    $oj$$57$$.$Assert$.assert($index$$290$$ <= this.$m_end$ && $index$$290$$ >= this.$m_start$, "index out of bounds");
    $oj$$57$$.$Assert$.assert(null == $level$$60$$ || 0 == $level$$60$$, "level out of bounds");
    return 1;
  };
  $oj$$57$$.$Object$.$exportPrototypeSymbol$("ArrayHeaderSet.prototype.getDepth", {getDepth:$oj$$57$$.$ArrayHeaderSet$.prototype.getDepth});
  $oj$$57$$.$ArrayHeaderSet$.prototype.getCount = function $$oj$$57$$$$ArrayHeaderSet$$$getCount$() {
    return null == this.$m_callback$ ? 0 : Math.max(0, this.$m_end$ - this.$m_start$);
  };
  $oj$$57$$.$Object$.$exportPrototypeSymbol$("ArrayHeaderSet.prototype.getCount", {getCount:$oj$$57$$.$ArrayHeaderSet$.prototype.getCount});
  $oj$$57$$.$ArrayHeaderSet$.prototype.getStart = function $$oj$$57$$$$ArrayHeaderSet$$$getStart$() {
    return this.$m_start$;
  };
  $oj$$57$$.$Object$.$exportPrototypeSymbol$("ArrayHeaderSet.prototype.getStart", {getStart:$oj$$57$$.$ArrayHeaderSet$.prototype.getStart});
  $oj$$57$$.$ArrayCellSet$ = function $$oj$$57$$$$ArrayCellSet$$($startRow$$10$$, $endRow$$4$$, $startColumn$$3$$, $endColumn$$2$$, $callback$$131$$) {
    this.$m_startRow$ = $startRow$$10$$;
    this.$m_endRow$ = $endRow$$4$$;
    this.$m_startColumn$ = $startColumn$$3$$;
    this.$m_endColumn$ = $endColumn$$2$$;
    this.$m_callback$ = $callback$$131$$;
  };
  $goog$exportPath_$$("ArrayCellSet", $oj$$57$$.$ArrayCellSet$, $oj$$57$$);
  $oj$$57$$.$ArrayCellSet$.prototype.getData = function $$oj$$57$$$$ArrayCellSet$$$getData$($indexes$$29$$) {
    return this.$m_callback$.$_getCellData$($indexes$$29$$.row, $indexes$$29$$.column);
  };
  $oj$$57$$.$Object$.$exportPrototypeSymbol$("ArrayCellSet.prototype.getData", {getData:$oj$$57$$.$ArrayCellSet$.prototype.getData});
  $oj$$57$$.$ArrayCellSet$.prototype.getMetadata = function $$oj$$57$$$$ArrayCellSet$$$getMetadata$($indexes$$30$$) {
    return this.$m_callback$.$_getCellMetadata$($indexes$$30$$.row, $indexes$$30$$.column);
  };
  $oj$$57$$.$Object$.$exportPrototypeSymbol$("ArrayCellSet.prototype.getMetadata", {getMetadata:$oj$$57$$.$ArrayCellSet$.prototype.getMetadata});
  $oj$$57$$.$ArrayCellSet$.prototype.getStart = function $$oj$$57$$$$ArrayCellSet$$$getStart$($axis$$84$$) {
    return "row" == $axis$$84$$ ? this.$m_startRow$ : "column" == $axis$$84$$ ? this.$m_startColumn$ : -1;
  };
  $oj$$57$$.$Object$.$exportPrototypeSymbol$("ArrayCellSet.prototype.getStart", {getStart:$oj$$57$$.$ArrayCellSet$.prototype.getStart});
  $oj$$57$$.$ArrayCellSet$.prototype.getCount = function $$oj$$57$$$$ArrayCellSet$$$getCount$($axis$$85$$) {
    return "row" === $axis$$85$$ ? Math.max(0, this.$m_endRow$ - this.$m_startRow$) : "column" === $axis$$85$$ ? Math.max(0, this.$m_endColumn$ - this.$m_startColumn$) : 0;
  };
  $oj$$57$$.$Object$.$exportPrototypeSymbol$("ArrayCellSet.prototype.getCount", {getCount:$oj$$57$$.$ArrayCellSet$.prototype.getCount});
  $oj$$57$$.$ArrayCellSet$.prototype.$getStartRow$ = function $$oj$$57$$$$ArrayCellSet$$$$getStartRow$$() {
    return this.$m_startRow$;
  };
  $oj$$57$$.$Object$.$exportPrototypeSymbol$("ArrayCellSet.prototype.getStartRow", {$getStartRow$:$oj$$57$$.$ArrayCellSet$.prototype.$getStartRow$});
  $oj$$57$$.$ArrayCellSet$.prototype.$getStartColumn$ = function $$oj$$57$$$$ArrayCellSet$$$$getStartColumn$$() {
    return this.$m_startColumn$;
  };
  $oj$$57$$.$Object$.$exportPrototypeSymbol$("ArrayCellSet.prototype.getStartColumn", {$getStartColumn$:$oj$$57$$.$ArrayCellSet$.prototype.$getStartColumn$});
});

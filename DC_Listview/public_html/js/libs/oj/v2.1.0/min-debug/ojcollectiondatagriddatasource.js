/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
define(["ojs/ojcore", "jquery", "ojs/ojdatasource-common", "ojs/ojmodel", "ojs/ojarraydatagriddatasource"], function($oj$$42$$) {
  $oj$$42$$.$CollectionHeaderSet$ = function $$oj$$42$$$$CollectionHeaderSet$$($start$$59$$, $end$$17$$, $headers$$9$$, $rowHeader$$23$$, $sortInfo$$) {
    $oj$$42$$.$Assert$.$assertArrayOrNull$($headers$$9$$);
    this.$m_start$ = $start$$59$$;
    this.$m_end$ = $end$$17$$;
    this.$m_headers$ = $headers$$9$$;
    this.$m_rowHeader$ = $rowHeader$$23$$;
    this.$m_sortInfo$ = $sortInfo$$;
  };
  $goog$exportPath_$$("CollectionHeaderSet", $oj$$42$$.$CollectionHeaderSet$, $oj$$42$$);
  $oj$$42$$.$CollectionHeaderSet$.prototype.$setModels$ = function $$oj$$42$$$$CollectionHeaderSet$$$$setModels$$($models$$15$$) {
    $oj$$42$$.$Assert$.$assertArray$($models$$15$$);
    null != $models$$15$$ && $models$$15$$.length === this.getCount() && (this.$m_models$ = $models$$15$$);
  };
  $oj$$42$$.$CollectionHeaderSet$.prototype.getData = function $$oj$$42$$$$CollectionHeaderSet$$$getData$($index$$243$$, $level$$53$$) {
    var $model$$67$$;
    $oj$$42$$.$Assert$.assert($index$$243$$ <= this.$m_end$ && $index$$243$$ >= this.$m_start$, "index out of bounds");
    $oj$$42$$.$Assert$.assert(null == $level$$53$$ || 0 == $level$$53$$, "level out of bounds");
    if (null != this.$m_rowHeader$) {
      if (null == this.$m_models$) {
        return null;
      }
      $model$$67$$ = this.$m_models$[$index$$243$$ - this.$m_start$];
      return $model$$67$$.get(this.$m_rowHeader$);
    }
    return this.$m_headers$[$index$$243$$];
  };
  $oj$$42$$.$Object$.$exportPrototypeSymbol$("CollectionHeaderSet.prototype.getData", {getData:$oj$$42$$.$CollectionHeaderSet$.prototype.getData});
  $oj$$42$$.$CollectionHeaderSet$.prototype.getMetadata = function $$oj$$42$$$$CollectionHeaderSet$$$getMetadata$($index$$244$$, $level$$54$$) {
    var $data$$153_model$$68$$;
    $oj$$42$$.$Assert$.assert($index$$244$$ <= this.$m_end$ && $index$$244$$ >= this.$m_start$, "index out of bounds");
    $oj$$42$$.$Assert$.assert(null == $level$$54$$ || 0 == $level$$54$$, "level out of bounds");
    if (null != this.$m_rowHeader$) {
      if (null == this.$m_models$) {
        return null;
      }
      $data$$153_model$$68$$ = this.$m_models$[$index$$244$$ - this.$m_start$];
      return{key:$oj$$42$$.$CollectionDataGridUtils$.$_getModelKey$($data$$153_model$$68$$)};
    }
    $data$$153_model$$68$$ = this.getData($index$$244$$, $level$$54$$);
    return this.$m_sortInfo$.key === $data$$153_model$$68$$ ? {key:$data$$153_model$$68$$, sortDirection:this.$m_sortInfo$.direction} : {key:$data$$153_model$$68$$};
  };
  $oj$$42$$.$Object$.$exportPrototypeSymbol$("CollectionHeaderSet.prototype.getMetadata", {getMetadata:$oj$$42$$.$CollectionHeaderSet$.prototype.getMetadata});
  $oj$$42$$.$CollectionHeaderSet$.prototype.getLevelCount = function $$oj$$42$$$$CollectionHeaderSet$$$getLevelCount$() {
    return 0 < this.getCount() ? 1 : 0;
  };
  $oj$$42$$.$Object$.$exportPrototypeSymbol$("CollectionHeaderSet.prototype.getLevelCount", {getLevelCount:$oj$$42$$.$CollectionHeaderSet$.prototype.getLevelCount});
  $oj$$42$$.$CollectionHeaderSet$.prototype.getExtent = function $$oj$$42$$$$CollectionHeaderSet$$$getExtent$($index$$245$$, $level$$55$$) {
    $oj$$42$$.$Assert$.assert($index$$245$$ <= this.$m_end$ && $index$$245$$ >= this.$m_start$, "index out of bounds");
    $oj$$42$$.$Assert$.assert(null == $level$$55$$ || 0 == $level$$55$$, "level out of bounds");
    return{extent:1, more:{before:!1, after:!1}};
  };
  $oj$$42$$.$Object$.$exportPrototypeSymbol$("CollectionHeaderSet.prototype.getExtent", {getExtent:$oj$$42$$.$CollectionHeaderSet$.prototype.getExtent});
  $oj$$42$$.$CollectionHeaderSet$.prototype.getDepth = function $$oj$$42$$$$CollectionHeaderSet$$$getDepth$($index$$246$$, $level$$56$$) {
    $oj$$42$$.$Assert$.assert($index$$246$$ <= this.$m_end$ && $index$$246$$ >= this.$m_start$, "index out of bounds");
    $oj$$42$$.$Assert$.assert(null == $level$$56$$ || 0 == $level$$56$$, "level out of bounds");
    return 1;
  };
  $oj$$42$$.$Object$.$exportPrototypeSymbol$("CollectionHeaderSet.prototype.getDepth", {getDepth:$oj$$42$$.$CollectionHeaderSet$.prototype.getDepth});
  $oj$$42$$.$CollectionHeaderSet$.prototype.getCount = function $$oj$$42$$$$CollectionHeaderSet$$$getCount$() {
    return Math.max(0, this.$m_end$ - this.$m_start$);
  };
  $oj$$42$$.$Object$.$exportPrototypeSymbol$("CollectionHeaderSet.prototype.getCount", {getCount:$oj$$42$$.$CollectionHeaderSet$.prototype.getCount});
  $oj$$42$$.$CollectionHeaderSet$.prototype.getStart = function $$oj$$42$$$$CollectionHeaderSet$$$getStart$() {
    return this.$m_start$;
  };
  $oj$$42$$.$Object$.$exportPrototypeSymbol$("CollectionHeaderSet.prototype.getStart", {getStart:$oj$$42$$.$CollectionHeaderSet$.prototype.getStart});
  $oj$$42$$.$CollectionHeaderSet$.prototype.$getEnd$ = function $$oj$$42$$$$CollectionHeaderSet$$$$getEnd$$() {
    return this.$m_end$;
  };
  $oj$$42$$.$Object$.$exportPrototypeSymbol$("CollectionHeaderSet.prototype.getEnd", {$getEnd$:$oj$$42$$.$CollectionHeaderSet$.prototype.$getEnd$});
  $oj$$42$$.$CollectionHeaderSet$.prototype.$getHeaders$ = function $$oj$$42$$$$CollectionHeaderSet$$$$getHeaders$$() {
    return this.$m_headers$;
  };
  $oj$$42$$.$Object$.$exportPrototypeSymbol$("CollectionHeaderSet.prototype.getHeaders", {$getHeaders$:$oj$$42$$.$CollectionHeaderSet$.prototype.$getHeaders$});
  $oj$$42$$.$CollectionHeaderSet$.prototype.$getRowHeader$ = function $$oj$$42$$$$CollectionHeaderSet$$$$getRowHeader$$() {
    return this.$m_rowHeader$;
  };
  $oj$$42$$.$Object$.$exportPrototypeSymbol$("CollectionHeaderSet.prototype.getRowHeader", {$getRowHeader$:$oj$$42$$.$CollectionHeaderSet$.prototype.$getRowHeader$});
  $oj$$42$$.$CollectionCellSet$ = function $$oj$$42$$$$CollectionCellSet$$($startRow$$9$$, $endRow$$3$$, $startColumn$$2$$, $endColumn$$1$$, $columns$$25$$) {
    $oj$$42$$.$Assert$.$assertArrayOrNull$($columns$$25$$);
    this.$m_startRow$ = $startRow$$9$$;
    this.$m_endRow$ = $endRow$$3$$;
    this.$m_startColumn$ = $startColumn$$2$$;
    this.$m_endColumn$ = $endColumn$$1$$;
    this.$m_columns$ = $columns$$25$$;
  };
  $goog$exportPath_$$("CollectionCellSet", $oj$$42$$.$CollectionCellSet$, $oj$$42$$);
  $oj$$42$$.$CollectionCellSet$.prototype.$setModels$ = function $$oj$$42$$$$CollectionCellSet$$$$setModels$$($models$$16$$) {
    $oj$$42$$.$Assert$.$assertArray$($models$$16$$);
    null != $models$$16$$ && $models$$16$$.length === this.getCount("row") && (this.$m_models$ = $models$$16$$);
  };
  $oj$$42$$.$CollectionCellSet$.prototype.getData = function $$oj$$42$$$$CollectionCellSet$$$getData$($indexes$$23$$) {
    var $model$$69$$;
    $model$$69$$ = this.$_getModel$($indexes$$23$$);
    return null == $model$$69$$ ? null : $model$$69$$.get(this.$m_columns$[$indexes$$23$$.column]);
  };
  $oj$$42$$.$Object$.$exportPrototypeSymbol$("CollectionCellSet.prototype.getData", {getData:$oj$$42$$.$CollectionCellSet$.prototype.getData});
  $oj$$42$$.$CollectionCellSet$.prototype.getMetadata = function $$oj$$42$$$$CollectionCellSet$$$getMetadata$($indexes$$24$$) {
    var $model$$70$$;
    $model$$70$$ = this.$_getModel$($indexes$$24$$);
    return null == $model$$70$$ ? null : {keys:{row:$oj$$42$$.$CollectionDataGridUtils$.$_getModelKey$($model$$70$$), column:this.$m_columns$[$indexes$$24$$.column]}};
  };
  $oj$$42$$.$Object$.$exportPrototypeSymbol$("CollectionCellSet.prototype.getMetadata", {getMetadata:$oj$$42$$.$CollectionCellSet$.prototype.getMetadata});
  $oj$$42$$.$CollectionCellSet$.prototype.$_getModel$ = function $$oj$$42$$$$CollectionCellSet$$$$_getModel$$($column$$31_indexes$$25$$) {
    var $row$$84$$;
    if (null == this.$m_models$) {
      return null;
    }
    $oj$$42$$.$Assert$.$assertObject$($column$$31_indexes$$25$$);
    $row$$84$$ = $column$$31_indexes$$25$$.row;
    $column$$31_indexes$$25$$ = $column$$31_indexes$$25$$.column;
    $oj$$42$$.$Assert$.assert($row$$84$$ >= this.$m_startRow$ && $row$$84$$ <= this.$m_endRow$ && $column$$31_indexes$$25$$ >= this.$m_startColumn$ && $column$$31_indexes$$25$$ <= this.$m_endColumn$);
    return this.$m_models$[$row$$84$$ - this.$m_startRow$];
  };
  $oj$$42$$.$CollectionCellSet$.prototype.getCount = function $$oj$$42$$$$CollectionCellSet$$$getCount$($axis$$69$$) {
    return "row" === $axis$$69$$ ? Math.max(0, this.$m_endRow$ - this.$m_startRow$) : "column" === $axis$$69$$ ? Math.max(0, this.$m_endColumn$ - this.$m_startColumn$) : 0;
  };
  $oj$$42$$.$Object$.$exportPrototypeSymbol$("CollectionCellSet.prototype.getCount", {getCount:$oj$$42$$.$CollectionCellSet$.prototype.getCount});
  $oj$$42$$.$CollectionCellSet$.prototype.$getStartRow$ = function $$oj$$42$$$$CollectionCellSet$$$$getStartRow$$() {
    return this.$m_startRow$;
  };
  $oj$$42$$.$Object$.$exportPrototypeSymbol$("CollectionCellSet.prototype.getStartRow", {$getStartRow$:$oj$$42$$.$CollectionCellSet$.prototype.$getStartRow$});
  $oj$$42$$.$CollectionCellSet$.prototype.$getEndRow$ = function $$oj$$42$$$$CollectionCellSet$$$$getEndRow$$() {
    return this.$m_endRow$;
  };
  $oj$$42$$.$Object$.$exportPrototypeSymbol$("CollectionCellSet.prototype.getEndRow", {$getEndRow$:$oj$$42$$.$CollectionCellSet$.prototype.$getEndRow$});
  $oj$$42$$.$CollectionCellSet$.prototype.$getStartColumn$ = function $$oj$$42$$$$CollectionCellSet$$$$getStartColumn$$() {
    return this.$m_startColumn$;
  };
  $oj$$42$$.$Object$.$exportPrototypeSymbol$("CollectionCellSet.prototype.getStartColumn", {$getStartColumn$:$oj$$42$$.$CollectionCellSet$.prototype.$getStartColumn$});
  $oj$$42$$.$CollectionCellSet$.prototype.$getEndColumn$ = function $$oj$$42$$$$CollectionCellSet$$$$getEndColumn$$() {
    return this.$m_endColumn$;
  };
  $oj$$42$$.$Object$.$exportPrototypeSymbol$("CollectionCellSet.prototype.getEndColumn", {$getEndColumn$:$oj$$42$$.$CollectionCellSet$.prototype.$getEndColumn$});
  $oj$$42$$.$CollectionCellSet$.prototype.$getColumns$ = function $$oj$$42$$$$CollectionCellSet$$$$getColumns$$() {
    return this.$m_columns$;
  };
  $oj$$42$$.$Object$.$exportPrototypeSymbol$("CollectionCellSet.prototype.getColumns", {$getColumns$:$oj$$42$$.$CollectionCellSet$.prototype.$getColumns$});
  $oj$$42$$.$CollectionDataGridUtils$ = function $$oj$$42$$$$CollectionDataGridUtils$$() {
  };
  $oj$$42$$.$CollectionDataGridUtils$.$_getModelKey$ = function $$oj$$42$$$$CollectionDataGridUtils$$$_getModelKey$$($model$$71$$) {
    var $key$$164$$;
    $key$$164$$ = $model$$71$$.$GetId$();
    null == $key$$164$$ && ($key$$164$$ = $model$$71$$.$GetCid$());
    return $key$$164$$;
  };
  $oj$$42$$.$CollectionDataGridDataSource$ = function $$oj$$42$$$$CollectionDataGridDataSource$$($collection$$31$$, $options$$317$$) {
    this.$collection$ = $collection$$31$$;
    null != $options$$317$$ && (this.$rowHeader$ = $options$$317$$.rowHeader, this.columns = $options$$317$$.columns);
    this.$_setSortInfo$();
    $oj$$42$$.$CollectionDataGridDataSource$.$superclass$.constructor.call(this);
  };
  $goog$exportPath_$$("CollectionDataGridDataSource", $oj$$42$$.$CollectionDataGridDataSource$, $oj$$42$$);
  $oj$$42$$.$Object$.$createSubclass$($oj$$42$$.$CollectionDataGridDataSource$, $oj$$42$$.$DataGridDataSource$, "oj.CollectionDataGridDataSource");
  $oj$$42$$.$CollectionDataGridDataSource$.prototype.Init = function $$oj$$42$$$$CollectionDataGridDataSource$$$Init$() {
    $oj$$42$$.$CollectionDataGridDataSource$.$superclass$.Init.call(this);
    this.$pendingHeaderCallback$ = {};
    this.$_registerEventListeners$();
  };
  $oj$$42$$.$Object$.$exportPrototypeSymbol$("CollectionDataGridDataSource.prototype.Init", {Init:$oj$$42$$.$CollectionDataGridDataSource$.prototype.Init});
  $oj$$42$$.$CollectionDataGridDataSource$.prototype.$_registerEventListeners$ = function $$oj$$42$$$$CollectionDataGridDataSource$$$$_registerEventListeners$$() {
    this.$collection$.on("add", this.$_handleModelAdded$.bind(this));
    this.$collection$.on("remove", this.$_handleModelDeleted$.bind(this));
    this.$collection$.on("change", this.$_handleModelChanged$.bind(this));
    this.$collection$.on("refresh", this.$_handleCollectionRefresh$.bind(this));
    this.$collection$.on("reset", this.$_handleCollectionReset$.bind(this));
  };
  $oj$$42$$.$CollectionDataGridDataSource$.prototype.$_isDataAvailable$ = function $$oj$$42$$$$CollectionDataGridDataSource$$$$_isDataAvailable$$() {
    return null != this.data;
  };
  $oj$$42$$.$CollectionDataGridDataSource$.prototype.getCount = function $$oj$$42$$$$CollectionDataGridDataSource$$$getCount$($axis$$70$$) {
    var $totalSize$$;
    void 0 == this.precision && (this.precision = {});
    if ("row" == $axis$$70$$) {
      $totalSize$$ = this.$_totalSize$();
      if (-1 === $totalSize$$ || 0 === $totalSize$$ && (!this.$_isDataAvailable$() || 0 < this.$_size$())) {
        return this.precision[$axis$$70$$] = "estimate", -1;
      }
      this.precision[$axis$$70$$] = "exact";
      return this.$_size$();
    }
    if ("column" == $axis$$70$$) {
      if (null != this.columns) {
        return this.precision[$axis$$70$$] = "exact", this.columns.length;
      }
      this.precision[$axis$$70$$] = "estimate";
      return-1;
    }
    return 0;
  };
  $oj$$42$$.$Object$.$exportPrototypeSymbol$("CollectionDataGridDataSource.prototype.getCount", {getCount:$oj$$42$$.$CollectionDataGridDataSource$.prototype.getCount});
  $oj$$42$$.$CollectionDataGridDataSource$.prototype.getCountPrecision = function $$oj$$42$$$$CollectionDataGridDataSource$$$getCountPrecision$($axis$$71$$) {
    null != this.precision && null != this.precision[$axis$$71$$] || this.getCount($axis$$71$$);
    return this.precision[$axis$$71$$];
  };
  $oj$$42$$.$Object$.$exportPrototypeSymbol$("CollectionDataGridDataSource.prototype.getCountPrecision", {getCountPrecision:$oj$$42$$.$CollectionDataGridDataSource$.prototype.getCountPrecision});
  $oj$$42$$.$CollectionDataGridDataSource$.prototype.fetchHeaders = function $$oj$$42$$$$CollectionDataGridDataSource$$$fetchHeaders$($headerRange$$14$$, $callbacks$$20$$, $callbackObjects$$4$$) {
    var $axis$$72$$, $callback$$124$$;
    null != $callbacks$$20$$ && ($axis$$72$$ = $headerRange$$14$$.axis, $callback$$124$$ = {}, $callback$$124$$.$headerRange$ = $headerRange$$14$$, $callback$$124$$.callbacks = $callbacks$$20$$, $callback$$124$$.$callbackObjects$ = $callbackObjects$$4$$, this.$pendingHeaderCallback$[$axis$$72$$] = $callback$$124$$);
  };
  $oj$$42$$.$Object$.$exportPrototypeSymbol$("CollectionDataGridDataSource.prototype.fetchHeaders", {fetchHeaders:$oj$$42$$.$CollectionDataGridDataSource$.prototype.fetchHeaders});
  $oj$$42$$.$CollectionDataGridDataSource$.prototype.$_handleHeaderFetchSuccess$ = function $$oj$$42$$$$CollectionDataGridDataSource$$$$_handleHeaderFetchSuccess$$($headerRange$$15$$, $callbacks$$21$$, $callbackObjects$$5$$, $actualRange_end$$18$$) {
    var $axis$$73$$, $start$$60$$, $count$$52$$, $headerSet$$14$$;
    $axis$$73$$ = $headerRange$$15$$.axis;
    $start$$60$$ = $headerRange$$15$$.start;
    $count$$52$$ = $headerRange$$15$$.count;
    if ("column" === $axis$$73$$) {
      null != this.columns ? ($actualRange_end$$18$$ = Math.min(this.columns.length, $start$$60$$ + $count$$52$$), $headerSet$$14$$ = new $oj$$42$$.$CollectionHeaderSet$($start$$60$$, $actualRange_end$$18$$, this.columns, void 0, this.$_sortInfo$)) : $headerSet$$14$$ = new $oj$$42$$.$ArrayHeaderSet$($start$$60$$, $start$$60$$, $axis$$73$$, null);
    } else {
      if ("row" === $axis$$73$$) {
        if (null != this.$rowHeader$) {
          null != $actualRange_end$$18$$ && ($count$$52$$ = $actualRange_end$$18$$.count);
          $actualRange_end$$18$$ = Math.min(this.$_size$(), $start$$60$$ + $count$$52$$);
          $headerSet$$14$$ = new $oj$$42$$.$CollectionHeaderSet$($start$$60$$, $actualRange_end$$18$$, this.columns, this.$rowHeader$);
          this.$_resolveModels$($start$$60$$, $actualRange_end$$18$$, $headerSet$$14$$, $headerRange$$15$$, $callbacks$$21$$, $callbackObjects$$5$$);
          return;
        }
        $headerSet$$14$$ = new $oj$$42$$.$ArrayHeaderSet$($start$$60$$, $start$$60$$, $axis$$73$$, null);
      }
    }
    null != $callbacks$$21$$ && $callbacks$$21$$.success && $callbacks$$21$$.success.call($callbackObjects$$5$$.success, $headerSet$$14$$, $headerRange$$15$$);
  };
  $oj$$42$$.$CollectionDataGridDataSource$.prototype.$_getRanges$ = function $$oj$$42$$$$CollectionDataGridDataSource$$$$_getRanges$$($cellRanges$$1$$) {
    var $i$$401$$, $cellRange$$11$$, $rowStart$$13$$, $rowCount$$16$$, $colStart$$1$$, $colCount$$3$$;
    for ($i$$401$$ = 0;$i$$401$$ < $cellRanges$$1$$.length;$i$$401$$ += 1) {
      $cellRange$$11$$ = $cellRanges$$1$$[$i$$401$$], "row" === $cellRange$$11$$.axis ? ($rowStart$$13$$ = $cellRange$$11$$.start, $rowCount$$16$$ = $cellRange$$11$$.count) : "column" === $cellRange$$11$$.axis && ($colStart$$1$$ = $cellRange$$11$$.start, $colCount$$3$$ = $cellRange$$11$$.count);
    }
    return{rowStart:$rowStart$$13$$, rowCount:$rowCount$$16$$, colStart:$colStart$$1$$, colCount:$colCount$$3$$};
  };
  $oj$$42$$.$CollectionDataGridDataSource$.prototype.$_handleCellFetchSuccess$ = function $$oj$$42$$$$CollectionDataGridDataSource$$$$_handleCellFetchSuccess$$($cellRanges$$2$$, $callbacks$$22$$, $callbackObjects$$6$$, $actualRange$$1_rowEnd$$2$$) {
    var $cellSet$$14_colEnd_ranges$$4$$, $rowStart$$14$$, $colStart$$2$$;
    $cellSet$$14_colEnd_ranges$$4$$ = this.$_getRanges$($cellRanges$$2$$);
    $rowStart$$14$$ = $cellSet$$14_colEnd_ranges$$4$$.rowStart;
    $actualRange$$1_rowEnd$$2$$ = null != $actualRange$$1_rowEnd$$2$$ ? Math.min(this.$_size$(), $rowStart$$14$$ + $actualRange$$1_rowEnd$$2$$.count) : Math.min(this.$_size$(), $rowStart$$14$$ + $cellSet$$14_colEnd_ranges$$4$$.rowCount);
    $colStart$$2$$ = $cellSet$$14_colEnd_ranges$$4$$.colStart;
    $cellSet$$14_colEnd_ranges$$4$$ = Math.min(null == this.columns ? 0 : this.columns.length, $colStart$$2$$ + $cellSet$$14_colEnd_ranges$$4$$.colCount);
    $cellSet$$14_colEnd_ranges$$4$$ = new $oj$$42$$.$CollectionCellSet$($rowStart$$14$$, $actualRange$$1_rowEnd$$2$$, $colStart$$2$$, $cellSet$$14_colEnd_ranges$$4$$, this.columns);
    this.$_resolveModels$($rowStart$$14$$, $actualRange$$1_rowEnd$$2$$, $cellSet$$14_colEnd_ranges$$4$$, $cellRanges$$2$$, $callbacks$$22$$, $callbackObjects$$6$$);
  };
  $oj$$42$$.$CollectionDataGridDataSource$.prototype.$_resolveModels$ = function $$oj$$42$$$$CollectionDataGridDataSource$$$$_resolveModels$$($i$$402_rowStart$$15$$, $rowEnd$$3$$, $set$$4$$, $ranges$$5$$, $callbacks$$23$$, $callbackObjects$$7$$) {
    var $promises$$;
    for ($promises$$ = [];$i$$402_rowStart$$15$$ < $rowEnd$$3$$;$i$$402_rowStart$$15$$++) {
      $promises$$.push(this.$collection$.at($i$$402_rowStart$$15$$, {deferred:!0}));
    }
    Promise.all($promises$$).then(function($models$$17$$) {
      $set$$4$$.$setModels$($models$$17$$);
      $callbacks$$23$$.success.call($callbackObjects$$7$$.success, $set$$4$$, $ranges$$5$$);
    });
  };
  $oj$$42$$.$CollectionDataGridDataSource$.prototype.fetchCells = function $$oj$$42$$$$CollectionDataGridDataSource$$$fetchCells$($cellRanges$$3$$, $callbacks$$24$$, $callbackObjects$$8$$) {
    null != $callbacks$$24$$ && (this.$pendingCellCallback$ = {}, this.$pendingCellCallback$.$cellRanges$ = $cellRanges$$3$$, this.$pendingCellCallback$.callbacks = $callbacks$$24$$, this.$pendingCellCallback$.$callbackObjects$ = $callbackObjects$$8$$);
    this.$_fetchCells$($cellRanges$$3$$);
  };
  $oj$$42$$.$Object$.$exportPrototypeSymbol$("CollectionDataGridDataSource.prototype.fetchCells", {fetchCells:$oj$$42$$.$CollectionDataGridDataSource$.prototype.fetchCells});
  $oj$$42$$.$CollectionDataGridDataSource$.prototype.$_processPendingHeaderCallbacks$ = function $$oj$$42$$$$CollectionDataGridDataSource$$$$_processPendingHeaderCallbacks$$($axis$$74$$) {
    var $pendingCallback$$, $headerRange$$16$$, $callbacks$$25$$, $callbackObjects$$9$$, $actualRange$$2$$;
    $pendingCallback$$ = this.$pendingHeaderCallback$[$axis$$74$$];
    null != $pendingCallback$$ && ($headerRange$$16$$ = $pendingCallback$$.$headerRange$, $callbacks$$25$$ = $pendingCallback$$.callbacks, $callbackObjects$$9$$ = $pendingCallback$$.$callbackObjects$, "row" === $axis$$74$$ && ($actualRange$$2$$ = $pendingCallback$$.$actualRange$), this.$_handleHeaderFetchSuccess$($headerRange$$16$$, $callbacks$$25$$, $callbackObjects$$9$$, $actualRange$$2$$), this.$pendingHeaderCallback$[$axis$$74$$] = null);
  };
  $oj$$42$$.$CollectionDataGridDataSource$.prototype.$_processPendingCellCallbacks$ = function $$oj$$42$$$$CollectionDataGridDataSource$$$$_processPendingCellCallbacks$$() {
    this.$_handleCellFetchSuccess$(this.$pendingCellCallback$.$cellRanges$, this.$pendingCellCallback$.callbacks, this.$pendingCellCallback$.$callbackObjects$, this.$pendingCellCallback$.$actualRange$);
  };
  $oj$$42$$.$CollectionDataGridDataSource$.prototype.$_fetchCells$ = function $$oj$$42$$$$CollectionDataGridDataSource$$$$_fetchCells$$($cellRanges$$5_ranges$$6$$) {
    var $rowStart$$16$$;
    $cellRanges$$5_ranges$$6$$ = this.$_getRanges$($cellRanges$$5_ranges$$6$$);
    $rowStart$$16$$ = $cellRanges$$5_ranges$$6$$.rowStart;
    this.$collection$.$setRangeLocal$($rowStart$$16$$, $cellRanges$$5_ranges$$6$$.rowCount).then(function($actual$$5$$) {
      this.data = !0;
      this.$_setActualCallbackRanges$($actual$$5$$.start, $actual$$5$$.count);
      void 0 === this.columns ? this.$collection$.at($rowStart$$16$$, {deferred:!0}).then(function($model$$72$$) {
        null != $model$$72$$ && this.$_setupColumns$($model$$72$$);
        this.$_fetchCellsComplete$();
      }.bind(this)) : this.$_fetchCellsComplete$();
    }.bind(this), function($e$$96$$) {
      this.$_fetchCellsError$($e$$96$$);
    }.bind(this));
  };
  $oj$$42$$.$CollectionDataGridDataSource$.prototype.$_fetchCellsError$ = function $$oj$$42$$$$CollectionDataGridDataSource$$$$_fetchCellsError$$($error$$40$$) {
    $oj$$42$$.$Logger$.error($error$$40$$);
    null != this.$pendingHeaderCallback$ && (this.$_processPendingHeaderErrorCallbacks$("column", $error$$40$$), this.$_processPendingHeaderErrorCallbacks$("row", $error$$40$$));
    null != this.$pendingCellCallback$ && this.$_processPendingCellErrorCallbacks$($error$$40$$);
  };
  $oj$$42$$.$CollectionDataGridDataSource$.prototype.$_processPendingHeaderErrorCallbacks$ = function $$oj$$42$$$$CollectionDataGridDataSource$$$$_processPendingHeaderErrorCallbacks$$($axis$$75$$, $error$$41$$) {
    var $headerRange$$17_pendingCallback$$1$$, $callbacks$$27$$, $callbackObjects$$11$$;
    $headerRange$$17_pendingCallback$$1$$ = this.$pendingHeaderCallback$[$axis$$75$$];
    null != $headerRange$$17_pendingCallback$$1$$ && ($callbacks$$27$$ = $headerRange$$17_pendingCallback$$1$$.callbacks, $callbackObjects$$11$$ = $headerRange$$17_pendingCallback$$1$$.$callbackObjects$, $headerRange$$17_pendingCallback$$1$$ = $headerRange$$17_pendingCallback$$1$$.$headerRange$, $callbacks$$27$$.error && $callbacks$$27$$.error.call($callbackObjects$$11$$.error, $error$$41$$, $headerRange$$17_pendingCallback$$1$$), this.$pendingHeaderCallback$[$axis$$75$$] = null);
  };
  $oj$$42$$.$CollectionDataGridDataSource$.prototype.$_processPendingCellErrorCallbacks$ = function $$oj$$42$$$$CollectionDataGridDataSource$$$$_processPendingCellErrorCallbacks$$($error$$42$$) {
    var $callbacks$$28$$, $callbackObjects$$12$$, $cellRanges$$6$$;
    $callbacks$$28$$ = this.$pendingCellCallback$.callbacks;
    $callbackObjects$$12$$ = this.$pendingCellCallback$.$callbackObjects$;
    $cellRanges$$6$$ = this.$pendingCellCallback$.$cellRanges$;
    $callbacks$$28$$.error && $callbacks$$28$$.error.call($callbackObjects$$12$$.error, $error$$42$$, $cellRanges$$6$$);
    this.$pendingCellCallback$ = null;
  };
  $oj$$42$$.$CollectionDataGridDataSource$.prototype.$_fetchCellsComplete$ = function $$oj$$42$$$$CollectionDataGridDataSource$$$$_fetchCellsComplete$$() {
    null != this.$pendingHeaderCallback$ && (this.$_processPendingHeaderCallbacks$("column"), this.$_processPendingHeaderCallbacks$("row"));
    null != this.$pendingCellCallback$ && this.$_processPendingCellCallbacks$();
  };
  $oj$$42$$.$CollectionDataGridDataSource$.prototype.$_setActualCallbackRanges$ = function $$oj$$42$$$$CollectionDataGridDataSource$$$$_setActualCallbackRanges$$($start$$61$$, $count$$53$$) {
    var $actualRange$$4$$ = {start:$start$$61$$, count:$count$$53$$};
    null != this.$pendingHeaderCallback$.row && (this.$pendingHeaderCallback$.row.$actualRange$ = $actualRange$$4$$);
    null != this.$pendingCellCallback$ && (this.$pendingCellCallback$.$actualRange$ = $actualRange$$4$$);
  };
  $oj$$42$$.$CollectionDataGridDataSource$.prototype.$_setupColumns$ = function $$oj$$42$$$$CollectionDataGridDataSource$$$$_setupColumns$$($model$$73$$) {
    this.columns = $model$$73$$.keys();
    -1 != this.columns.indexOf(this.$rowHeader$) && this.columns.splice(this.columns.indexOf(this.$rowHeader$), 1);
  };
  $oj$$42$$.$CollectionDataGridDataSource$.prototype.keys = function $$oj$$42$$$$CollectionDataGridDataSource$$$keys$($indexes$$26$$) {
    var $rowIndex$$16$$, $columnIndex$$5$$, $rowKey$$44$$, $columnKey$$2$$, $self$$171$$;
    $rowIndex$$16$$ = $indexes$$26$$.row;
    $columnIndex$$5$$ = $indexes$$26$$.column;
    $self$$171$$ = this;
    return new Promise(function($resolve$$47$$) {
      $self$$171$$.$collection$.at($rowIndex$$16$$, {deferred:!0}).then(function($rowModel$$) {
        null == $rowModel$$ ? $resolve$$47$$({row:null, column:null}) : ($rowKey$$44$$ = $oj$$42$$.$CollectionDataGridUtils$.$_getModelKey$($rowModel$$), null == $self$$171$$.columns && $self$$171$$.$_setupColumns$($rowModel$$), $columnKey$$2$$ = $self$$171$$.columns[$columnIndex$$5$$], $resolve$$47$$({row:$rowKey$$44$$, column:$columnKey$$2$$}));
      }.bind($self$$171$$));
    });
  };
  $oj$$42$$.$Object$.$exportPrototypeSymbol$("CollectionDataGridDataSource.prototype.keys", {keys:$oj$$42$$.$CollectionDataGridDataSource$.prototype.keys});
  $oj$$42$$.$CollectionDataGridDataSource$.prototype.indexes = function $$oj$$42$$$$CollectionDataGridDataSource$$$indexes$($keys$$49$$) {
    var $rowKey$$45$$, $columnKey$$3$$, $columnIndex$$6$$, $self$$172$$;
    $rowKey$$45$$ = $keys$$49$$.row;
    $columnKey$$3$$ = $keys$$49$$.column;
    $self$$172$$ = this;
    return new Promise(function($resolve$$48$$) {
      $self$$172$$.$collection$.indexOf($rowKey$$45$$, {deferred:!0}).then(function($rowIndex$$17$$) {
        -1 === $rowIndex$$17$$ ? $resolve$$48$$({row:-1, column:-1}) : null == $self$$172$$.columns ? $self$$172$$.$collection$.at($rowIndex$$17$$, {deferred:!0}).then(function($model$$74$$) {
          $self$$172$$.$_setupColumns$($model$$74$$);
          $columnIndex$$6$$ = $self$$172$$.columns.indexOf($columnKey$$3$$);
          -1 === $columnIndex$$6$$ && ($rowIndex$$17$$ = -1);
          $resolve$$48$$({row:$rowIndex$$17$$, column:$columnIndex$$6$$});
        }.bind($self$$172$$)) : ($columnIndex$$6$$ = $self$$172$$.columns.indexOf($columnKey$$3$$), -1 === $columnIndex$$6$$ && ($rowIndex$$17$$ = -1), $resolve$$48$$({row:$rowIndex$$17$$, column:$columnIndex$$6$$}));
      }.bind($self$$172$$));
    });
  };
  $oj$$42$$.$Object$.$exportPrototypeSymbol$("CollectionDataGridDataSource.prototype.indexes", {indexes:$oj$$42$$.$CollectionDataGridDataSource$.prototype.indexes});
  $oj$$42$$.$CollectionDataGridDataSource$.prototype.getCapability = function $$oj$$42$$$$CollectionDataGridDataSource$$$getCapability$($feature$$7$$) {
    return "sort" === $feature$$7$$ ? "column" : "move" === $feature$$7$$ ? "row" : null;
  };
  $oj$$42$$.$Object$.$exportPrototypeSymbol$("CollectionDataGridDataSource.prototype.getCapability", {getCapability:$oj$$42$$.$CollectionDataGridDataSource$.prototype.getCapability});
  $oj$$42$$.$CollectionDataGridDataSource$.prototype.sort = function $$oj$$42$$$$CollectionDataGridDataSource$$$sort$($axis$$76_criteria$$3$$, $callbacks$$29$$, $callbackObjects$$13$$) {
    var $comparator$$13$$, $direction$$16$$, $key$$165$$;
    null == $callbackObjects$$13$$ && ($callbackObjects$$13$$ = {});
    null == $axis$$76_criteria$$3$$ ? this.$_resetSortOrder$($callbacks$$29$$, $callbackObjects$$13$$) : ($direction$$16$$ = $axis$$76_criteria$$3$$.direction, $key$$165$$ = $axis$$76_criteria$$3$$.key, $axis$$76_criteria$$3$$ = $axis$$76_criteria$$3$$.axis, "column" === $axis$$76_criteria$$3$$ ? (this.$collection$.$IsVirtual$() ? (this.$collection$.comparator = $key$$165$$, this.$collection$.sortDirection = "ascending" === $direction$$16$$ ? 1 : -1) : ("ascending" === $direction$$16$$ && ($comparator$$13$$ = 
    function $$comparator$$13$$$($a$$97$$, $b$$66$$) {
      var $as$$, $bs$$;
      $a$$97$$ = $a$$97$$.get($key$$165$$);
      $b$$66$$ = $b$$66$$.get($key$$165$$);
      $as$$ = isNaN($a$$97$$);
      $bs$$ = isNaN($b$$66$$);
      $a$$97$$ instanceof Date && ($a$$97$$ = $a$$97$$.toISOString(), $as$$ = !0);
      $b$$66$$ instanceof Date && ($b$$66$$ = $b$$66$$.toISOString(), $bs$$ = !0);
      return $as$$ && $bs$$ ? $a$$97$$ < $b$$66$$ ? -1 : $a$$97$$ === $b$$66$$ ? 0 : 1 : $as$$ ? 1 : $bs$$ ? -1 : $a$$97$$ - $b$$66$$;
    }), "descending" === $direction$$16$$ && ($comparator$$13$$ = function $$comparator$$13$$$($a$$98$$, $b$$67$$) {
      var $as$$1$$, $bs$$1$$;
      $a$$98$$ = $a$$98$$.get($key$$165$$);
      $b$$67$$ = $b$$67$$.get($key$$165$$);
      $as$$1$$ = isNaN($a$$98$$);
      $bs$$1$$ = isNaN($b$$67$$);
      $a$$98$$ instanceof Date && ($a$$98$$ = $a$$98$$.toISOString());
      $b$$67$$ instanceof Date && ($b$$67$$ = $b$$67$$.toISOString());
      return $as$$1$$ && $bs$$1$$ ? $a$$98$$ > $b$$67$$ ? -1 : $a$$98$$ === $b$$67$$ ? 0 : 1 : $as$$1$$ ? -1 : $bs$$1$$ ? 1 : $b$$67$$ - $a$$98$$;
    }), this.$collection$.comparator = $comparator$$13$$), this.$collection$.sort(), this.$_setSortInfo$($key$$165$$), null != $callbacks$$29$$ && null != $callbacks$$29$$.success && $callbacks$$29$$.success.call($callbackObjects$$13$$.success)) : null != $callbacks$$29$$ && null != $callbacks$$29$$.error && $callbacks$$29$$.error.call($callbackObjects$$13$$.error, "Axis value not supported"));
  };
  $oj$$42$$.$Object$.$exportPrototypeSymbol$("CollectionDataGridDataSource.prototype.sort", {sort:$oj$$42$$.$CollectionDataGridDataSource$.prototype.sort});
  $oj$$42$$.$CollectionDataGridDataSource$.prototype.$_resetSortOrder$ = function $$oj$$42$$$$CollectionDataGridDataSource$$$$_resetSortOrder$$($callbacks$$30$$, $callbackObjects$$14$$) {
    this.$collection$.comparator = null;
    this.$collection$.reset();
    null != $callbacks$$30$$ && null != $callbacks$$30$$.success && $callbacks$$30$$.success.call($callbackObjects$$14$$.success);
  };
  $oj$$42$$.$CollectionDataGridDataSource$.prototype.$_setSortInfo$ = function $$oj$$42$$$$CollectionDataGridDataSource$$$$_setSortInfo$$($key$$166$$) {
    var $comparator$$14$$, $direction$$17$$;
    $comparator$$14$$ = this.$collection$.comparator;
    $direction$$17$$ = -1 === this.$collection$.sortDirection ? "descending" : "ascending";
    null == $key$$166$$ && "function" === typeof $comparator$$14$$ ? this.$_sortInfo$ = {} : (this.$_sortInfo$ = {}, this.$_sortInfo$.axis = "column", this.$_sortInfo$.direction = $direction$$17$$, this.$_sortInfo$.key = null == $key$$166$$ ? $comparator$$14$$ : null);
  };
  $oj$$42$$.$CollectionDataGridDataSource$.prototype.move = function $$oj$$42$$$$CollectionDataGridDataSource$$$move$($moveKey$$, $atKey$$, $position$$26$$, $callbacks$$31$$, $callbackObjects$$15$$) {
    var $indexPromise$$;
    this.$collection$.get($moveKey$$, {deferred:!0}).then(function($moveModel$$) {
      null == $atKey$$ ? (this.$collection$.remove($moveModel$$), this.$collection$.add($moveModel$$), null != $callbacks$$31$$ && null != $callbacks$$31$$.success && $callbacks$$31$$.success.call($callbackObjects$$15$$.success)) : ($moveKey$$ === $atKey$$ ? ($indexPromise$$ = this.$collection$.indexOf($atKey$$, {deferred:!0}), this.$collection$.remove($moveModel$$)) : (this.$collection$.remove($moveModel$$), $indexPromise$$ = this.$collection$.indexOf($atKey$$, {deferred:!0})), $indexPromise$$.then(function($newIndex$$3$$) {
        this.$collection$.add($moveModel$$, {at:$newIndex$$3$$, $force$:!0});
        null != $callbacks$$31$$ && null != $callbacks$$31$$.success && $callbacks$$31$$.success.call($callbackObjects$$15$$.success);
      }.bind(this)));
    }.bind(this));
  };
  $oj$$42$$.$Object$.$exportPrototypeSymbol$("CollectionDataGridDataSource.prototype.move", {move:$oj$$42$$.$CollectionDataGridDataSource$.prototype.move});
  $oj$$42$$.$CollectionDataGridDataSource$.prototype.moveOK = function $$oj$$42$$$$CollectionDataGridDataSource$$$moveOK$() {
    return "valid";
  };
  $oj$$42$$.$Object$.$exportPrototypeSymbol$("CollectionDataGridDataSource.prototype.moveOK", {moveOK:$oj$$42$$.$CollectionDataGridDataSource$.prototype.moveOK});
  $oj$$42$$.$CollectionDataGridDataSource$.prototype.$_getModelEvent$ = function $$oj$$42$$$$CollectionDataGridDataSource$$$$_getModelEvent$$($operation$$7$$, $rowKey$$46$$, $columnKey$$4$$, $rowIndex$$18$$, $columnIndex$$7$$) {
    var $event$$575$$ = {source:this};
    $event$$575$$.operation = $operation$$7$$;
    $event$$575$$.keys = {row:$rowKey$$46$$, column:$columnKey$$4$$};
    $event$$575$$.indexes = {row:$rowIndex$$18$$, column:$columnIndex$$7$$};
    return $event$$575$$;
  };
  $oj$$42$$.$CollectionDataGridDataSource$.prototype.$_handleModelAdded$ = function $$oj$$42$$$$CollectionDataGridDataSource$$$$_handleModelAdded$$($model$$75$$) {
    this.handleEvent("change", this.$_getModelEvent$("insert", $oj$$42$$.$CollectionDataGridUtils$.$_getModelKey$($model$$75$$), null, $model$$75$$.index, -1));
  };
  $oj$$42$$.$CollectionDataGridDataSource$.prototype.$_handleModelDeleted$ = function $$oj$$42$$$$CollectionDataGridDataSource$$$$_handleModelDeleted$$($model$$76$$, $collection$$33$$, $args$$22$$) {
    this.handleEvent("change", this.$_getModelEvent$("delete", $oj$$42$$.$CollectionDataGridUtils$.$_getModelKey$($model$$76$$), null, $args$$22$$.index, -1));
  };
  $oj$$42$$.$CollectionDataGridDataSource$.prototype.$_handleModelChanged$ = function $$oj$$42$$$$CollectionDataGridDataSource$$$$_handleModelChanged$$($model$$77$$) {
    this.handleEvent("change", this.$_getModelEvent$("update", $oj$$42$$.$CollectionDataGridUtils$.$_getModelKey$($model$$77$$), null, $model$$77$$.index, -1));
  };
  $oj$$42$$.$CollectionDataGridDataSource$.prototype.$_handleCollectionRefresh$ = function $$oj$$42$$$$CollectionDataGridDataSource$$$$_handleCollectionRefresh$$() {
    this.data = null;
    this.handleEvent("change", this.$_getModelEvent$("refresh", null, null));
  };
  $oj$$42$$.$CollectionDataGridDataSource$.prototype.$_handleCollectionReset$ = function $$oj$$42$$$$CollectionDataGridDataSource$$$$_handleCollectionReset$$() {
    this.data = null;
    this.handleEvent("change", this.$_getModelEvent$("reset", null, null));
  };
  $oj$$42$$.$CollectionDataGridDataSource$.prototype.$_size$ = function $$oj$$42$$$$CollectionDataGridDataSource$$$$_size$$() {
    return this.$collection$.size();
  };
  $oj$$42$$.$CollectionDataGridDataSource$.prototype.$_totalSize$ = function $$oj$$42$$$$CollectionDataGridDataSource$$$$_totalSize$$() {
    return void 0 === this.$collection$.totalResults ? -1 : this.$collection$.totalResults;
  };
  $oj$$42$$.$CollectionDataGridDataSource$.prototype.$getCollection$ = function $$oj$$42$$$$CollectionDataGridDataSource$$$$getCollection$$() {
    return this.$collection$;
  };
  $oj$$42$$.$Object$.$exportPrototypeSymbol$("CollectionDataGridDataSource.prototype.getCollection", {$getCollection$:$oj$$42$$.$CollectionDataGridDataSource$.prototype.$getCollection$});
  $oj$$42$$.$CollectionDataGridDataSource$.prototype.$getColumns$ = function $$oj$$42$$$$CollectionDataGridDataSource$$$$getColumns$$() {
    return this.columns;
  };
  $oj$$42$$.$Object$.$exportPrototypeSymbol$("CollectionDataGridDataSource.prototype.getColumns", {$getColumns$:$oj$$42$$.$CollectionDataGridDataSource$.prototype.$getColumns$});
  $oj$$42$$.$CollectionDataGridDataSource$.prototype.$getRowHeader$ = function $$oj$$42$$$$CollectionDataGridDataSource$$$$getRowHeader$$() {
    return this.$rowHeader$;
  };
  $oj$$42$$.$Object$.$exportPrototypeSymbol$("CollectionDataGridDataSource.prototype.getRowHeader", {$getRowHeader$:$oj$$42$$.$CollectionDataGridDataSource$.prototype.$getRowHeader$});
  $oj$$42$$.$CollectionDataGridDataSource$.prototype.getData = function $$oj$$42$$$$CollectionDataGridDataSource$$$getData$() {
    return this.data;
  };
  $oj$$42$$.$Object$.$exportPrototypeSymbol$("CollectionDataGridDataSource.prototype.getData", {getData:$oj$$42$$.$CollectionDataGridDataSource$.prototype.getData});
});

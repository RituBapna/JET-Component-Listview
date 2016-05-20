/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
define(["ojs/ojcore", "jquery", "ojs/ojdatasource-common", "ojs/ojrowexpander"], function($oj$$69$$) {
  $oj$$69$$.$FlattenedTreeHeaderSet$ = function $$oj$$69$$$$FlattenedTreeHeaderSet$$($start$$68$$, $end$$21$$, $headers$$10$$, $nodeSet$$27$$, $rowHeader$$24$$) {
    $oj$$69$$.$Assert$.$assertArrayOrNull$($headers$$10$$);
    this.$m_start$ = $start$$68$$;
    this.$m_end$ = $end$$21$$;
    this.$m_headers$ = $headers$$10$$;
    this.$m_nodeSet$ = $nodeSet$$27$$;
    this.$m_rowHeader$ = $rowHeader$$24$$;
  };
  $goog$exportPath_$$("FlattenedTreeHeaderSet", $oj$$69$$.$FlattenedTreeHeaderSet$, $oj$$69$$);
  $oj$$69$$.$FlattenedTreeHeaderSet$.prototype.getData = function $$oj$$69$$$$FlattenedTreeHeaderSet$$$getData$($index$$322$$, $level$$62$$) {
    var $rowData$$5$$;
    $oj$$69$$.$Assert$.assert($index$$322$$ <= this.$m_end$ && $index$$322$$ >= this.$m_start$, "index out of bounds");
    $oj$$69$$.$Assert$.assert(null == $level$$62$$ || 0 == $level$$62$$, "level out of bounds");
    return null != this.$m_rowHeader$ && null != this.$m_nodeSet$ ? ($rowData$$5$$ = this.$m_nodeSet$.getData($index$$322$$ - this.$m_start$ + this.$m_nodeSet$.getStart()), null != $rowData$$5$$ ? $rowData$$5$$.get ? $rowData$$5$$.get(this.$m_rowHeader$) : $rowData$$5$$[this.$m_rowHeader$] : null) : this.$m_headers$[$index$$322$$];
  };
  $oj$$69$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeHeaderSet.prototype.getData", {getData:$oj$$69$$.$FlattenedTreeHeaderSet$.prototype.getData});
  $oj$$69$$.$FlattenedTreeHeaderSet$.prototype.getMetadata = function $$oj$$69$$$$FlattenedTreeHeaderSet$$$getMetadata$($index$$323$$, $level$$63$$) {
    $oj$$69$$.$Assert$.assert($index$$323$$ <= this.$m_end$ && $index$$323$$ >= this.$m_start$, "index out of bounds");
    $oj$$69$$.$Assert$.assert(null == $level$$63$$ || 0 == $level$$63$$, "level out of bounds");
    return null != this.$m_rowHeader$ && null != this.$m_nodeSet$ ? this.$m_nodeSet$.getMetadata($index$$323$$ - this.$m_start$ + this.$m_nodeSet$.getStart()) : {key:this.getData($index$$323$$)};
  };
  $oj$$69$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeHeaderSet.prototype.getMetadata", {getMetadata:$oj$$69$$.$FlattenedTreeHeaderSet$.prototype.getMetadata});
  $oj$$69$$.$FlattenedTreeHeaderSet$.prototype.getCount = function $$oj$$69$$$$FlattenedTreeHeaderSet$$$getCount$() {
    return null != this.$m_rowHeader$ && null != this.$m_nodeSet$ ? Math.min(this.$m_nodeSet$.getCount(), this.$m_end$ - this.$m_start$) : Math.max(0, this.$m_end$ - this.$m_start$);
  };
  $oj$$69$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeHeaderSet.prototype.getCount", {getCount:$oj$$69$$.$FlattenedTreeHeaderSet$.prototype.getCount});
  $oj$$69$$.$FlattenedTreeHeaderSet$.prototype.getLevelCount = function $$oj$$69$$$$FlattenedTreeHeaderSet$$$getLevelCount$() {
    return 0 < this.getCount() ? 1 : 0;
  };
  $oj$$69$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeHeaderSet.prototype.getLevelCount", {getLevelCount:$oj$$69$$.$FlattenedTreeHeaderSet$.prototype.getLevelCount});
  $oj$$69$$.$FlattenedTreeHeaderSet$.prototype.getExtent = function $$oj$$69$$$$FlattenedTreeHeaderSet$$$getExtent$($index$$324$$, $level$$64$$) {
    $oj$$69$$.$Assert$.assert($index$$324$$ <= this.$m_end$ && $index$$324$$ >= this.$m_start$, "index out of bounds");
    $oj$$69$$.$Assert$.assert(null == $level$$64$$ || 0 == $level$$64$$, "level out of bounds");
    return{extent:1, more:{before:!1, after:!1}};
  };
  $oj$$69$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeHeaderSet.prototype.getExtent", {getExtent:$oj$$69$$.$FlattenedTreeHeaderSet$.prototype.getExtent});
  $oj$$69$$.$FlattenedTreeHeaderSet$.prototype.getDepth = function $$oj$$69$$$$FlattenedTreeHeaderSet$$$getDepth$($index$$325$$, $level$$65$$) {
    $oj$$69$$.$Assert$.assert($index$$325$$ <= this.$m_end$ && $index$$325$$ >= this.$m_start$, "index out of bounds");
    $oj$$69$$.$Assert$.assert(null == $level$$65$$ || 0 == $level$$65$$, "level out of bounds");
    return 1;
  };
  $oj$$69$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeHeaderSet.prototype.getDepth", {getDepth:$oj$$69$$.$FlattenedTreeHeaderSet$.prototype.getDepth});
  $oj$$69$$.$FlattenedTreeCellSet$ = function $$oj$$69$$$$FlattenedTreeCellSet$$($startRow$$11$$, $endRow$$5$$, $startColumn$$4$$, $endColumn$$3$$, $nodeSet$$28$$, $columns$$27$$) {
    $oj$$69$$.$Assert$.$assertArrayOrNull$($columns$$27$$);
    this.$m_startRow$ = $startRow$$11$$;
    this.$m_endRow$ = $endRow$$5$$;
    this.$m_startColumn$ = $startColumn$$4$$;
    this.$m_endColumn$ = $endColumn$$3$$;
    this.$m_nodeSet$ = $nodeSet$$28$$;
    this.$m_columns$ = $columns$$27$$;
  };
  $goog$exportPath_$$("FlattenedTreeCellSet", $oj$$69$$.$FlattenedTreeCellSet$, $oj$$69$$);
  $oj$$69$$.$FlattenedTreeCellSet$.prototype.getData = function $$oj$$69$$$$FlattenedTreeCellSet$$$getData$($indexes$$31_row$$93_rowData$$6$$) {
    var $column$$34_columnKey$$7_relIndex$$2$$;
    $column$$34_columnKey$$7_relIndex$$2$$ = this.$_getRelIndexes$($indexes$$31_row$$93_rowData$$6$$);
    if (null == $column$$34_columnKey$$7_relIndex$$2$$) {
      return null;
    }
    $indexes$$31_row$$93_rowData$$6$$ = $column$$34_columnKey$$7_relIndex$$2$$[0];
    $column$$34_columnKey$$7_relIndex$$2$$ = $column$$34_columnKey$$7_relIndex$$2$$[1];
    $oj$$69$$.$Assert$.assert($indexes$$31_row$$93_rowData$$6$$ < this.$m_nodeSet$.getStart() + this.$m_nodeSet$.getCount() && $column$$34_columnKey$$7_relIndex$$2$$ < this.$m_columns$.length);
    $column$$34_columnKey$$7_relIndex$$2$$ = this.$m_columns$[$column$$34_columnKey$$7_relIndex$$2$$];
    $indexes$$31_row$$93_rowData$$6$$ = this.$m_nodeSet$.getData($indexes$$31_row$$93_rowData$$6$$);
    return null != $indexes$$31_row$$93_rowData$$6$$ ? $indexes$$31_row$$93_rowData$$6$$.get ? $indexes$$31_row$$93_rowData$$6$$.get($column$$34_columnKey$$7_relIndex$$2$$) : $indexes$$31_row$$93_rowData$$6$$[$column$$34_columnKey$$7_relIndex$$2$$] : null;
  };
  $oj$$69$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeCellSet.prototype.getData", {getData:$oj$$69$$.$FlattenedTreeCellSet$.prototype.getData});
  $oj$$69$$.$FlattenedTreeCellSet$.prototype.getMetadata = function $$oj$$69$$$$FlattenedTreeCellSet$$$getMetadata$($indexes$$32_metadata$$17_row$$94$$) {
    var $column$$35_columnKey$$8_relIndex$$3$$;
    $column$$35_columnKey$$8_relIndex$$3$$ = this.$_getRelIndexes$($indexes$$32_metadata$$17_row$$94$$);
    if (null == $column$$35_columnKey$$8_relIndex$$3$$) {
      return null;
    }
    $indexes$$32_metadata$$17_row$$94$$ = $column$$35_columnKey$$8_relIndex$$3$$[0];
    $column$$35_columnKey$$8_relIndex$$3$$ = $column$$35_columnKey$$8_relIndex$$3$$[1];
    $oj$$69$$.$Assert$.assert($indexes$$32_metadata$$17_row$$94$$ < this.$m_nodeSet$.getStart() + this.$m_nodeSet$.getCount() && $column$$35_columnKey$$8_relIndex$$3$$ < this.$m_columns$.length);
    $column$$35_columnKey$$8_relIndex$$3$$ = this.$m_columns$[$column$$35_columnKey$$8_relIndex$$3$$];
    $indexes$$32_metadata$$17_row$$94$$ = this.$m_nodeSet$.getMetadata($indexes$$32_metadata$$17_row$$94$$);
    $indexes$$32_metadata$$17_row$$94$$.keys = {row:$indexes$$32_metadata$$17_row$$94$$.key, column:$column$$35_columnKey$$8_relIndex$$3$$};
    return $indexes$$32_metadata$$17_row$$94$$;
  };
  $oj$$69$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeCellSet.prototype.getMetadata", {getMetadata:$oj$$69$$.$FlattenedTreeCellSet$.prototype.getMetadata});
  $oj$$69$$.$FlattenedTreeCellSet$.prototype.$_getRelIndexes$ = function $$oj$$69$$$$FlattenedTreeCellSet$$$$_getRelIndexes$$($column$$36_indexes$$33$$) {
    var $row$$95$$;
    $oj$$69$$.$Assert$.$assertObject$($column$$36_indexes$$33$$);
    if (null == this.$m_nodeSet$ || 0 == this.$m_nodeSet$.length) {
      return null;
    }
    $row$$95$$ = $column$$36_indexes$$33$$.row - this.$m_startRow$ + this.$m_nodeSet$.getStart();
    $column$$36_indexes$$33$$ = $column$$36_indexes$$33$$.column;
    $oj$$69$$.$Assert$.$assertNumber$($row$$95$$, null);
    $oj$$69$$.$Assert$.$assertNumber$($column$$36_indexes$$33$$, null);
    $oj$$69$$.$Assert$.assert(0 <= $row$$95$$ && 0 <= $column$$36_indexes$$33$$);
    return[$row$$95$$, $column$$36_indexes$$33$$];
  };
  $oj$$69$$.$FlattenedTreeCellSet$.prototype.getStart = function $$oj$$69$$$$FlattenedTreeCellSet$$$getStart$($axis$$86$$) {
    return "row" === $axis$$86$$ ? this.$m_startRow$ : "column" === $axis$$86$$ ? this.$m_startColumn$ : 0;
  };
  $oj$$69$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeCellSet.prototype.getStart", {getStart:$oj$$69$$.$FlattenedTreeCellSet$.prototype.getStart});
  $oj$$69$$.$FlattenedTreeCellSet$.prototype.getCount = function $$oj$$69$$$$FlattenedTreeCellSet$$$getCount$($axis$$87$$) {
    return "row" === $axis$$87$$ ? Math.min(this.$m_endRow$ - this.$m_startRow$, this.$m_nodeSet$.getCount()) : "column" === $axis$$87$$ ? this.$m_endColumn$ - this.$m_startColumn$ : 0;
  };
  $oj$$69$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeCellSet.prototype.getCount", {getCount:$oj$$69$$.$FlattenedTreeCellSet$.prototype.getCount});
  $oj$$69$$.$FlattenedTreeDataGridDataSource$ = function $$oj$$69$$$$FlattenedTreeDataGridDataSource$$($treeDataSource$$2$$, $options$$370$$) {
    $oj$$69$$.$FlattenedTreeDataGridDataSource$.$superclass$.constructor.call(this, $treeDataSource$$2$$, $options$$370$$);
  };
  $goog$exportPath_$$("FlattenedTreeDataGridDataSource", $oj$$69$$.$FlattenedTreeDataGridDataSource$, $oj$$69$$);
  $oj$$69$$.$Object$.$createSubclass$($oj$$69$$.$FlattenedTreeDataGridDataSource$, $oj$$69$$.$FlattenedTreeDataSource$, "oj.FlattenedTreeDataGridDataSource");
  $oj$$69$$.$FlattenedTreeDataGridDataSource$.prototype.Init = function $$oj$$69$$$$FlattenedTreeDataGridDataSource$$$Init$() {
    $oj$$69$$.$FlattenedTreeDataGridDataSource$.$superclass$.Init.call(this);
    this.$m_columns$ = $oj$$69$$.$FlattenedTreeDataGridDataSource$.$superclass$.$getOption$.call(this, "columns");
    this.$m_rowHeader$ = $oj$$69$$.$FlattenedTreeDataGridDataSource$.$superclass$.$getOption$.call(this, "rowHeader");
  };
  $oj$$69$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeDataGridDataSource.prototype.Init", {Init:$oj$$69$$.$FlattenedTreeDataGridDataSource$.prototype.Init});
  $oj$$69$$.$FlattenedTreeDataGridDataSource$.prototype.getCountPrecision = function $$oj$$69$$$$FlattenedTreeDataGridDataSource$$$getCountPrecision$($axis$$88$$) {
    return "row" === $axis$$88$$ ? "estimate" : "actual";
  };
  $oj$$69$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeDataGridDataSource.prototype.getCountPrecision", {getCountPrecision:$oj$$69$$.$FlattenedTreeDataGridDataSource$.prototype.getCountPrecision});
  $oj$$69$$.$FlattenedTreeDataGridDataSource$.prototype.getCount = function $$oj$$69$$$$FlattenedTreeDataGridDataSource$$$getCount$($axis$$89$$) {
    return "row" === $axis$$89$$ ? -1 : "column" === $axis$$89$$ ? this.$m_columns$.length : 0;
  };
  $oj$$69$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeDataGridDataSource.prototype.getCount", {getCount:$oj$$69$$.$FlattenedTreeDataGridDataSource$.prototype.getCount});
  $oj$$69$$.$FlattenedTreeDataGridDataSource$.prototype.fetchHeaders = function $$oj$$69$$$$FlattenedTreeDataGridDataSource$$$fetchHeaders$($headerRange$$19$$, $callbacks$$45$$, $callbackObjects$$21$$) {
    var $axis$$90_columnCount$$8$$, $headerSet$$16$$;
    $axis$$90_columnCount$$8$$ = $headerRange$$19$$.axis;
    if ("column" === $axis$$90_columnCount$$8$$) {
      $axis$$90_columnCount$$8$$ = $headerRange$$19$$.start + $headerRange$$19$$.count, $axis$$90_columnCount$$8$$ > this.getCount("column") && ($axis$$90_columnCount$$8$$ = this.getCount("column") - $headerRange$$19$$.start), $headerSet$$16$$ = new $oj$$69$$.$FlattenedTreeHeaderSet$($headerRange$$19$$.start, $axis$$90_columnCount$$8$$, this.$m_columns$);
    } else {
      if ("row" === $axis$$90_columnCount$$8$$) {
        if (null != this.$m_rowHeader$) {
          this.$m_fetchHeaderRequest$ = {range:$headerRange$$19$$, callbacks:$callbacks$$45$$, callbackObjects:$callbackObjects$$21$$};
          return;
        }
        $headerSet$$16$$ = new $oj$$69$$.$ArrayHeaderSet$($headerRange$$19$$.start, $headerRange$$19$$.start, $axis$$90_columnCount$$8$$, null);
      }
    }
    null != $headerSet$$16$$ && null != $callbacks$$45$$ && null != $callbacks$$45$$.success && (null == $callbackObjects$$21$$ && ($callbackObjects$$21$$ = {}), $callbacks$$45$$.success.call($callbackObjects$$21$$.success, $headerSet$$16$$, $headerRange$$19$$));
  };
  $oj$$69$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeDataGridDataSource.prototype.fetchHeaders", {fetchHeaders:$oj$$69$$.$FlattenedTreeDataGridDataSource$.prototype.fetchHeaders});
  $oj$$69$$.$FlattenedTreeDataGridDataSource$.prototype.fetchCells = function $$oj$$69$$$$FlattenedTreeDataGridDataSource$$$fetchCells$($cellRanges$$8$$, $callbacks$$46$$, $callbackObjects$$22$$) {
    var $i$$505$$, $cellRange$$13$$, $rowStart$$18$$, $rowCount$$18$$;
    for ($i$$505$$ = 0;$i$$505$$ < $cellRanges$$8$$.length;$i$$505$$++) {
      if ($cellRange$$13$$ = $cellRanges$$8$$[$i$$505$$], "row" == $cellRange$$13$$.axis) {
        $rowStart$$18$$ = $cellRange$$13$$.start;
        $rowCount$$18$$ = $cellRange$$13$$.count;
        break;
      }
    }
    $oj$$69$$.$FlattenedTreeDataGridDataSource$.$superclass$.$fetchRows$.call(this, {start:$rowStart$$18$$, count:$rowCount$$18$$}, {success:function($nodeSet$$29$$) {
      this.$_handleFetchRowsSuccess$($nodeSet$$29$$, $cellRanges$$8$$, $callbacks$$46$$, $callbackObjects$$22$$, 0);
    }.bind(this), error:function($status$$31$$) {
      this.$_handleFetchRowsError$($status$$31$$, {start:$rowStart$$18$$, count:$rowCount$$18$$}, $callbacks$$46$$, $callbackObjects$$22$$);
    }.bind(this)});
  };
  $oj$$69$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeDataGridDataSource.prototype.fetchCells", {fetchCells:$oj$$69$$.$FlattenedTreeDataGridDataSource$.prototype.fetchCells});
  $oj$$69$$.$FlattenedTreeDataGridDataSource$.prototype.keys = function $$oj$$69$$$$FlattenedTreeDataGridDataSource$$$keys$($indexes$$34$$) {
    var $rowIndex$$22$$, $colIndex$$1$$;
    $rowIndex$$22$$ = $indexes$$34$$.row;
    $colIndex$$1$$ = $indexes$$34$$.column;
    return new Promise(function($resolve$$63$$) {
      $rowIndex$$22$$ > $oj$$69$$.$FlattenedTreeDataGridDataSource$.$superclass$.$getFetchedRange$.call(this).end || $colIndex$$1$$ > this.$m_columns$.length ? $resolve$$63$$(null) : $resolve$$63$$({row:$oj$$69$$.$FlattenedTreeDataGridDataSource$.$superclass$.getKey.call(this, $rowIndex$$22$$), column:this.$m_columns$[$colIndex$$1$$]});
    }.bind(this));
  };
  $oj$$69$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeDataGridDataSource.prototype.keys", {keys:$oj$$69$$.$FlattenedTreeDataGridDataSource$.prototype.keys});
  $oj$$69$$.$FlattenedTreeDataGridDataSource$.prototype.indexes = function $$oj$$69$$$$FlattenedTreeDataGridDataSource$$$indexes$($keys$$53$$) {
    var $rowIndex$$23$$, $colIndex$$2$$, $rowKey$$54$$, $colKey$$, $i$$506$$;
    $rowKey$$54$$ = $keys$$53$$.row;
    $colKey$$ = $keys$$53$$.column;
    return new Promise(function($resolve$$64$$) {
      $rowIndex$$23$$ = $oj$$69$$.$FlattenedTreeDataGridDataSource$.$superclass$.$getIndex$.call(this, $rowKey$$54$$);
      for ($i$$506$$ = 0;$i$$506$$ < this.$m_columns$.length;$i$$506$$++) {
        if (this.$m_columns$[$i$$506$$] === $colKey$$) {
          $colIndex$$2$$ = $i$$506$$;
          break;
        }
      }
      0 <= $rowIndex$$23$$ || 0 <= $colIndex$$2$$ ? $resolve$$64$$({row:$rowIndex$$23$$, column:$colIndex$$2$$}) : $resolve$$64$$(null);
    }.bind(this));
  };
  $oj$$69$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeDataGridDataSource.prototype.indexes", {indexes:$oj$$69$$.$FlattenedTreeDataGridDataSource$.prototype.indexes});
  $oj$$69$$.$FlattenedTreeDataGridDataSource$.prototype.sort = function $$oj$$69$$$$FlattenedTreeDataGridDataSource$$$sort$($criteria$$9$$, $callbacks$$47$$, $callbackObjects$$23$$) {
    return $oj$$69$$.$FlattenedTreeDataGridDataSource$.$superclass$.getWrappedDataSource.call(this).sort($criteria$$9$$, {success:function() {
      this.$_handleSortSuccess$($callbacks$$47$$, $callbackObjects$$23$$);
    }.bind(this), error:$callbacks$$47$$.error});
  };
  $oj$$69$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeDataGridDataSource.prototype.sort", {sort:$oj$$69$$.$FlattenedTreeDataGridDataSource$.prototype.sort});
  $oj$$69$$.$FlattenedTreeDataGridDataSource$.prototype.$_handleSortSuccess$ = function $$oj$$69$$$$FlattenedTreeDataGridDataSource$$$$_handleSortSuccess$$($callbacks$$48$$, $callbackObjects$$24$$) {
    this.refresh();
    $callbacks$$48$$.success && (null == $callbackObjects$$24$$ && ($callbackObjects$$24$$ = {}), $callbacks$$48$$.success.call($callbackObjects$$24$$.success));
  };
  $oj$$69$$.$FlattenedTreeDataGridDataSource$.prototype.move = function $$oj$$69$$$$FlattenedTreeDataGridDataSource$$$move$($rowToMove$$8$$, $referenceRow$$14$$, $position$$45$$, $callbacks$$49$$) {
    $oj$$69$$.$FlattenedTreeDataGridDataSource$.$superclass$.getWrappedDataSource.call(this).move($rowToMove$$8$$, $referenceRow$$14$$, $position$$45$$, $callbacks$$49$$);
  };
  $oj$$69$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeDataGridDataSource.prototype.move", {move:$oj$$69$$.$FlattenedTreeDataGridDataSource$.prototype.move});
  $oj$$69$$.$FlattenedTreeDataGridDataSource$.prototype.getCapability = function $$oj$$69$$$$FlattenedTreeDataGridDataSource$$$getCapability$($feature$$13$$) {
    return "default" === $oj$$69$$.$FlattenedTreeDataGridDataSource$.$superclass$.getWrappedDataSource.call(this).getCapability($feature$$13$$) ? "column" : "none";
  };
  $oj$$69$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeDataGridDataSource.prototype.getCapability", {getCapability:$oj$$69$$.$FlattenedTreeDataGridDataSource$.prototype.getCapability});
  $oj$$69$$.$FlattenedTreeDataGridDataSource$.prototype.$insertMetadata$ = function $$oj$$69$$$$FlattenedTreeDataGridDataSource$$$$insertMetadata$$($key$$203$$, $metadata$$18$$) {
    $oj$$69$$.$FlattenedTreeDataGridDataSource$.$superclass$.$insertMetadata$.call(this, $key$$203$$, $metadata$$18$$);
  };
  $oj$$69$$.$FlattenedTreeDataGridDataSource$.prototype.$_handleFetchRowsSuccess$ = function $$oj$$69$$$$FlattenedTreeDataGridDataSource$$$$_handleFetchRowsSuccess$$($cellSet$$16_nodeSet$$30$$, $cellRanges$$9$$, $callbacks$$50$$, $callbackObjects$$25$$) {
    var $headerRange$$20_i$$507$$, $cellRange$$14$$, $rowStart$$19$$, $rowCount$$19$$, $columnStart$$9$$, $columnCount$$9$$;
    for ($headerRange$$20_i$$507$$ = 0;$headerRange$$20_i$$507$$ < $cellRanges$$9$$.length;$headerRange$$20_i$$507$$++) {
      $cellRange$$14$$ = $cellRanges$$9$$[$headerRange$$20_i$$507$$], "row" == $cellRange$$14$$.axis ? ($rowStart$$19$$ = $cellRange$$14$$.start, $rowCount$$19$$ = $cellRange$$14$$.count) : "column" == $cellRange$$14$$.axis && ($columnStart$$9$$ = $cellRange$$14$$.start, $columnCount$$9$$ = $cellRange$$14$$.count, $columnStart$$9$$ + $columnCount$$9$$ > this.getCount("column") && ($columnCount$$9$$ = this.getCount("column") - $columnStart$$9$$));
    }
    this.$m_fetchHeaderRequest$ && ($headerRange$$20_i$$507$$ = this.$m_fetchHeaderRequest$.range, $headerRange$$20_i$$507$$.start == $rowStart$$19$$ && $headerRange$$20_i$$507$$.count == $rowCount$$19$$ && this.$_handleRowHeaderFetchSuccess$($cellSet$$16_nodeSet$$30$$, $headerRange$$20_i$$507$$, this.$m_fetchHeaderRequest$.callbacks, this.$m_fetchHeaderRequest$.callbackObjects), this.$m_fetchHeaderRequest$ = null);
    $cellSet$$16_nodeSet$$30$$ = new $oj$$69$$.$FlattenedTreeCellSet$($rowStart$$19$$, $rowStart$$19$$ + $rowCount$$19$$, $columnStart$$9$$, $columnStart$$9$$ + $columnCount$$9$$, $cellSet$$16_nodeSet$$30$$, this.$m_columns$);
    $callbacks$$50$$.success && (null == $callbackObjects$$25$$ && ($callbackObjects$$25$$ = {}), $callbacks$$50$$.success.call($callbackObjects$$25$$.success, $cellSet$$16_nodeSet$$30$$, $cellRanges$$9$$));
  };
  $oj$$69$$.$FlattenedTreeDataGridDataSource$.prototype.$_handleFetchRowsError$ = function $$oj$$69$$$$FlattenedTreeDataGridDataSource$$$$_handleFetchRowsError$$($status$$32$$, $headerCallbacks_range$$30$$, $callbacks$$51$$, $callbackObjects$$26$$) {
    var $headerCallbackObjects_headerRange$$21$$;
    this.$m_fetchHeaderRequest$ && ($headerCallbackObjects_headerRange$$21$$ = this.$m_fetchHeaderRequest$.range, $headerCallbackObjects_headerRange$$21$$.start == $headerCallbacks_range$$30$$.start && $headerCallbackObjects_headerRange$$21$$.count == $headerCallbacks_range$$30$$.count && ($headerCallbacks_range$$30$$ = this.$m_fetchHeaderRequest$.callbacks, $headerCallbackObjects_headerRange$$21$$ = this.$m_fetchHeaderRequest$.callbackObjects, $headerCallbacks_range$$30$$.error && (null == $headerCallbackObjects_headerRange$$21$$ && 
    ($headerCallbackObjects_headerRange$$21$$ = {}), $headerCallbacks_range$$30$$.error.call($headerCallbackObjects_headerRange$$21$$.error, $status$$32$$))), this.$m_fetchHeaderRequest$ = null);
    $callbacks$$51$$.error && (null == $callbackObjects$$26$$ && ($callbackObjects$$26$$ = {}), $callbacks$$51$$.success.call($callbackObjects$$26$$.error, $status$$32$$));
  };
  $oj$$69$$.$FlattenedTreeDataGridDataSource$.prototype.$_handleRowHeaderFetchSuccess$ = function $$oj$$69$$$$FlattenedTreeDataGridDataSource$$$$_handleRowHeaderFetchSuccess$$($headerSet$$17_nodeSet$$31$$, $headerRange$$22$$, $callbacks$$52$$, $callbackObjects$$27$$) {
    $headerSet$$17_nodeSet$$31$$ = new $oj$$69$$.$FlattenedTreeHeaderSet$($headerRange$$22$$.start, $headerRange$$22$$.start + $headerRange$$22$$.count, this.$m_columns$, $headerSet$$17_nodeSet$$31$$, this.$m_rowHeader$);
    $callbacks$$52$$.success && (null == $callbackObjects$$27$$ && ($callbackObjects$$27$$ = {}), $callbacks$$52$$.success.call($callbackObjects$$27$$.success, $headerSet$$17_nodeSet$$31$$, $headerRange$$22$$));
  };
  $oj$$69$$.$FlattenedTreeDataGridDataSource$.prototype.$insertRows$ = function $$oj$$69$$$$FlattenedTreeDataGridDataSource$$$$insertRows$$($event$$734_insertAtIndex$$1$$, $cellSet$$17_insertAtRowKey$$, $nodeSet$$32$$) {
    var $headerSet$$18$$, $i$$508$$, $keys$$54$$, $indexes$$35$$;
    $headerSet$$18$$ = null;
    this.$m_rowHeader$ && ($headerSet$$18$$ = new $oj$$69$$.$FlattenedTreeHeaderSet$($event$$734_insertAtIndex$$1$$, $event$$734_insertAtIndex$$1$$ + $nodeSet$$32$$.getCount(), this.$m_columns$, $nodeSet$$32$$, this.$m_rowHeader$));
    $cellSet$$17_insertAtRowKey$$ = new $oj$$69$$.$FlattenedTreeCellSet$($event$$734_insertAtIndex$$1$$, $event$$734_insertAtIndex$$1$$ + $nodeSet$$32$$.getCount(), 0, this.$m_columns$.length, $nodeSet$$32$$, this.$m_columns$);
    $keys$$54$$ = [];
    $indexes$$35$$ = [];
    for ($i$$508$$ = 0;$i$$508$$ < $nodeSet$$32$$.getCount();$i$$508$$++) {
      $keys$$54$$.push({row:this.$_getEntry$($event$$734_insertAtIndex$$1$$ + $i$$508$$).key}), $indexes$$35$$.push({row:$event$$734_insertAtIndex$$1$$ + $i$$508$$, column:-1});
    }
    $event$$734_insertAtIndex$$1$$ = {source:this, operation:"insert"};
    $event$$734_insertAtIndex$$1$$.result = $cellSet$$17_insertAtRowKey$$;
    $headerSet$$18$$ && ($event$$734_insertAtIndex$$1$$.header = $headerSet$$18$$);
    $event$$734_insertAtIndex$$1$$.keys = $keys$$54$$;
    $event$$734_insertAtIndex$$1$$.indexes = $indexes$$35$$;
    $oj$$69$$.$FlattenedTreeDataGridDataSource$.$superclass$.handleEvent.call(this, "change", $event$$734_insertAtIndex$$1$$);
  };
  $oj$$69$$.$FlattenedTreeDataGridDataSource$.prototype.$removeRows$ = function $$oj$$69$$$$FlattenedTreeDataGridDataSource$$$$removeRows$$($event$$735_rowKeys$$1$$) {
    var $keys$$55$$, $i$$509$$, $indexes$$36$$;
    $keys$$55$$ = [];
    $indexes$$36$$ = [];
    for ($i$$509$$ = 0;$i$$509$$ < $event$$735_rowKeys$$1$$.length;$i$$509$$++) {
      $keys$$55$$.push({row:$event$$735_rowKeys$$1$$[$i$$509$$].key}), $indexes$$36$$.push({row:$event$$735_rowKeys$$1$$[$i$$509$$].index, column:-1});
    }
    $event$$735_rowKeys$$1$$ = {source:this, operation:"delete"};
    $event$$735_rowKeys$$1$$.keys = $keys$$55$$;
    $event$$735_rowKeys$$1$$.indexes = $indexes$$36$$;
    $oj$$69$$.$FlattenedTreeDataGridDataSource$.$superclass$.handleEvent.call(this, "change", $event$$735_rowKeys$$1$$);
  };
  $oj$$69$$.$FlattenedTreeDataGridDataSource$.prototype.$handleMaxCountReached$ = function $$oj$$69$$$$FlattenedTreeDataGridDataSource$$$$handleMaxCountReached$$($range$$31$$, $callbacks$$53$$) {
    $callbacks$$53$$.success.call(null, new $oj$$69$$.$EmptyNodeSet$(null, $range$$31$$.start));
  };
});

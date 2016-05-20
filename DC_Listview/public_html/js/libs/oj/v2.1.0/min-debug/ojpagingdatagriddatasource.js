/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
define(["ojs/ojcore", "jquery", "ojs/ojpagingtabledatasource", "ojs/ojarraydatagriddatasource"], function($oj$$71$$) {
  $oj$$71$$.$PagingHeaderSet$ = function $$oj$$71$$$$PagingHeaderSet$$($headerSet$$19$$, $startIndex$$41$$) {
    this.$m_headerSet$ = $headerSet$$19$$;
    this.$m_startIndex$ = $startIndex$$41$$;
  };
  $goog$exportPath_$$("PagingHeaderSet", $oj$$71$$.$PagingHeaderSet$, $oj$$71$$);
  $oj$$71$$.$PagingHeaderSet$.prototype.getData = function $$oj$$71$$$$PagingHeaderSet$$$getData$($index$$326$$, $level$$66$$) {
    return this.$m_headerSet$.getData($index$$326$$ + this.$m_startIndex$, $level$$66$$);
  };
  $oj$$71$$.$Object$.$exportPrototypeSymbol$("PagingHeaderSet.prototype.getData", {getData:$oj$$71$$.$PagingHeaderSet$.prototype.getData});
  $oj$$71$$.$PagingHeaderSet$.prototype.getMetadata = function $$oj$$71$$$$PagingHeaderSet$$$getMetadata$($index$$327$$, $level$$67$$) {
    return this.$m_headerSet$.getMetadata($index$$327$$ + this.$m_startIndex$, $level$$67$$);
  };
  $oj$$71$$.$Object$.$exportPrototypeSymbol$("PagingHeaderSet.prototype.getMetadata", {getMetadata:$oj$$71$$.$PagingHeaderSet$.prototype.getMetadata});
  $oj$$71$$.$PagingHeaderSet$.prototype.getCount = function $$oj$$71$$$$PagingHeaderSet$$$getCount$() {
    return this.$m_headerSet$.getCount();
  };
  $oj$$71$$.$Object$.$exportPrototypeSymbol$("PagingHeaderSet.prototype.getCount", {getCount:$oj$$71$$.$PagingHeaderSet$.prototype.getCount});
  $oj$$71$$.$PagingHeaderSet$.prototype.getLevelCount = function $$oj$$71$$$$PagingHeaderSet$$$getLevelCount$() {
    return this.$m_headerSet$.getLevelCount();
  };
  $oj$$71$$.$Object$.$exportPrototypeSymbol$("PagingHeaderSet.prototype.getLevelCount", {getLevelCount:$oj$$71$$.$PagingHeaderSet$.prototype.getLevelCount});
  $oj$$71$$.$PagingHeaderSet$.prototype.getExtent = function $$oj$$71$$$$PagingHeaderSet$$$getExtent$($index$$328$$, $level$$68$$) {
    return this.$m_headerSet$.getExtent($index$$328$$ + this.$m_startIndex$, $level$$68$$);
  };
  $oj$$71$$.$Object$.$exportPrototypeSymbol$("PagingHeaderSet.prototype.getExtent", {getExtent:$oj$$71$$.$PagingHeaderSet$.prototype.getExtent});
  $oj$$71$$.$PagingHeaderSet$.prototype.getDepth = function $$oj$$71$$$$PagingHeaderSet$$$getDepth$($index$$329$$, $level$$69$$) {
    return this.$m_headerSet$.getDepth($index$$329$$ + this.$m_startIndex$, $level$$69$$);
  };
  $oj$$71$$.$Object$.$exportPrototypeSymbol$("PagingHeaderSet.prototype.getDepth", {getDepth:$oj$$71$$.$PagingHeaderSet$.prototype.getDepth});
  $oj$$71$$.$PagingHeaderSet$.prototype.$getHeaderSet$ = function $$oj$$71$$$$PagingHeaderSet$$$$getHeaderSet$$() {
    return this.$m_headerSet$;
  };
  $oj$$71$$.$Object$.$exportPrototypeSymbol$("PagingHeaderSet.prototype.getHeaderSet", {$getHeaderSet$:$oj$$71$$.$PagingHeaderSet$.prototype.$getHeaderSet$});
  $oj$$71$$.$PagingHeaderSet$.prototype.$getStartIndex$ = function $$oj$$71$$$$PagingHeaderSet$$$$getStartIndex$$() {
    return this.$m_startIndex$;
  };
  $oj$$71$$.$Object$.$exportPrototypeSymbol$("PagingHeaderSet.prototype.getStartIndex", {$getStartIndex$:$oj$$71$$.$PagingHeaderSet$.prototype.$getStartIndex$});
  $oj$$71$$.$PagingDataGridDataSource$ = function $$oj$$71$$$$PagingDataGridDataSource$$($dataSource$$11$$) {
    if (!($dataSource$$11$$ instanceof $oj$$71$$.$DataGridDataSource$)) {
      throw new $oj$$71$$.$Message$("Not a datagridatasource", "Not a datagridatasource", $oj$$71$$.$Message$.$SEVERITY_LEVEL$.ERROR);
    }
    this.$dataSource$ = $dataSource$$11$$;
    this.$_startIndex$ = 0;
    this.Init();
  };
  $goog$exportPath_$$("PagingDataGridDataSource", $oj$$71$$.$PagingDataGridDataSource$, $oj$$71$$);
  $oj$$71$$.$Object$.$createSubclass$($oj$$71$$.$PagingDataGridDataSource$, $oj$$71$$.$DataGridDataSource$, "oj.PagingDataGridDataSource");
  $oj$$71$$.$PagingDataGridDataSource$.prototype.Init = function $$oj$$71$$$$PagingDataGridDataSource$$$Init$() {
    $oj$$71$$.$PagingDataGridDataSource$.$superclass$.Init.call(this);
    this.$_registerEventListeners$();
  };
  $oj$$71$$.$Object$.$exportPrototypeSymbol$("PagingDataGridDataSource.prototype.Init", {Init:$oj$$71$$.$PagingDataGridDataSource$.prototype.Init});
  $oj$$71$$.$PagingDataGridDataSource$.prototype.$_registerEventListeners$ = function $$oj$$71$$$$PagingDataGridDataSource$$$$_registerEventListeners$$() {
    this.$dataSource$.on("change", this.$_handleChange$.bind(this));
  };
  $oj$$71$$.$PagingDataGridDataSource$.prototype.getPage = function $$oj$$71$$$$PagingDataGridDataSource$$$getPage$() {
    return this.$_page$;
  };
  $oj$$71$$.$Object$.$exportPrototypeSymbol$("PagingDataGridDataSource.prototype.getPage", {getPage:$oj$$71$$.$PagingDataGridDataSource$.prototype.getPage});
  $oj$$71$$.$PagingDataGridDataSource$.prototype.setPage = function $$oj$$71$$$$PagingDataGridDataSource$$$setPage$($value$$300$$, $options$$372$$) {
    $options$$372$$ = $options$$372$$ || {};
    $value$$300$$ = parseInt($value$$300$$, 10);
    try {
      $oj$$71$$.$PagingDataGridDataSource$.$superclass$.handleEvent.call(this, $oj$$71$$.$PagingModel$.$EventType$.BEFOREPAGE, {page:$value$$300$$, previousPage:this.$_page$});
    } catch ($err$$29$$) {
      return Promise.reject(null);
    }
    this.$_pageSize$ = null != $options$$372$$.pageSize ? $options$$372$$.pageSize : this.$_pageSize$;
    $options$$372$$.startIndex = $value$$300$$ * this.$_pageSize$;
    var $previousPage$$3$$ = this.$_page$;
    this.$_page$ = $value$$300$$;
    this.$_startIndex$ = $options$$372$$.startIndex;
    var $self$$223$$ = this;
    return new Promise(function($resolve$$65$$, $reject$$62$$) {
      $self$$223$$.$_fetchInternal$($options$$372$$).then(function() {
        $resolve$$65$$(null);
      }, function() {
        $self$$223$$.$_page$ = $previousPage$$3$$;
        $self$$223$$.$_startIndex$ = $self$$223$$.$_page$ * $self$$223$$.$_pageSize$;
        $reject$$62$$(null);
      });
    });
  };
  $oj$$71$$.$Object$.$exportPrototypeSymbol$("PagingDataGridDataSource.prototype.setPage", {setPage:$oj$$71$$.$PagingDataGridDataSource$.prototype.setPage});
  $oj$$71$$.$PagingDataGridDataSource$.prototype.$_fetchInternal$ = function $$oj$$71$$$$PagingDataGridDataSource$$$$_fetchInternal$$($options$$373$$) {
    this.$_initialized$ = !0;
    this.$_startIndex$ = $options$$373$$.startIndex;
    var $self$$224$$ = this;
    return new Promise(function($resolve$$66$$) {
      $self$$224$$.handleEvent("change", {operation:"sync", pageSize:$self$$224$$.$_pageSize$});
      $resolve$$66$$(void 0);
    });
  };
  $oj$$71$$.$PagingDataGridDataSource$.prototype.fetch = function $$oj$$71$$$$PagingDataGridDataSource$$$fetch$($options$$374$$) {
    this.$_pageSize$ = $options$$374$$.pageSize + $options$$374$$.startIndex;
    $options$$374$$.startIndex = 0;
    return this.$_fetchInternal$($options$$374$$);
  };
  $oj$$71$$.$Object$.$exportPrototypeSymbol$("PagingDataGridDataSource.prototype.fetch", {fetch:$oj$$71$$.$PagingDataGridDataSource$.prototype.fetch});
  $oj$$71$$.$PagingDataGridDataSource$.prototype.getStartItemIndex = function $$oj$$71$$$$PagingDataGridDataSource$$$getStartItemIndex$() {
    return this.$_startIndex$;
  };
  $oj$$71$$.$Object$.$exportPrototypeSymbol$("PagingDataGridDataSource.prototype.getStartItemIndex", {getStartItemIndex:$oj$$71$$.$PagingDataGridDataSource$.prototype.getStartItemIndex});
  $oj$$71$$.$PagingDataGridDataSource$.prototype.getEndItemIndex = function $$oj$$71$$$$PagingDataGridDataSource$$$getEndItemIndex$() {
    return this.$_endIndex$;
  };
  $oj$$71$$.$Object$.$exportPrototypeSymbol$("PagingDataGridDataSource.prototype.getEndItemIndex", {getEndItemIndex:$oj$$71$$.$PagingDataGridDataSource$.prototype.getEndItemIndex});
  $oj$$71$$.$PagingDataGridDataSource$.prototype.getPageCount = function $$oj$$71$$$$PagingDataGridDataSource$$$getPageCount$() {
    var $totalSize$$5$$ = this.totalSize();
    return-1 == $totalSize$$5$$ ? -1 : Math.ceil($totalSize$$5$$ / this.$_pageSize$);
  };
  $oj$$71$$.$Object$.$exportPrototypeSymbol$("PagingDataGridDataSource.prototype.getPageCount", {getPageCount:$oj$$71$$.$PagingDataGridDataSource$.prototype.getPageCount});
  $oj$$71$$.$PagingDataGridDataSource$.prototype.$_handleChange$ = function $$oj$$71$$$$PagingDataGridDataSource$$$$_handleChange$$($options$$375$$) {
    switch($options$$375$$.operation) {
      case "refresh":
        this.$_startIndex$ = 0;
        this.handleEvent("change", {operation:"sync", pageSize:this.$_pageSize$});
        this.handleEvent($oj$$71$$.$PagingTableDataSource$.$EventType$.REFRESH, null);
        break;
      case "reset":
        this.handleEvent($oj$$71$$.$PagingTableDataSource$.$EventType$.RESET, null);
        break;
      case "insert":
        this.handleEvent($oj$$71$$.$PagingTableDataSource$.$EventType$.ADD, {index:$options$$375$$.indexes.row});
        break;
      case "delete":
        this.handleEvent($oj$$71$$.$PagingTableDataSource$.$EventType$.REMOVE, null);
        break;
      case "update":
        $options$$375$$.indexes.row = 0 <= $options$$375$$.indexes.row - this.$_startIndex$ ? $options$$375$$.indexes.row - this.$_startIndex$ : -1;
        this.handleEvent("change", $options$$375$$);
        break;
      default:
        this.handleEvent("change", $options$$375$$), this.handleEvent($oj$$71$$.$PagingTableDataSource$.$EventType$.SYNC, null);
    }
  };
  $oj$$71$$.$PagingDataGridDataSource$.prototype.getCount = function $$oj$$71$$$$PagingDataGridDataSource$$$getCount$($axis$$91$$) {
    var $count$$61$$ = this.$dataSource$.getCount($axis$$91$$);
    return "row" === $axis$$91$$ && 0 <= $count$$61$$ ? this.$_startIndex$ + this.$_pageSize$ < $count$$61$$ ? this.$_pageSize$ : $count$$61$$ - this.$_startIndex$ : $count$$61$$;
  };
  $oj$$71$$.$Object$.$exportPrototypeSymbol$("PagingDataGridDataSource.prototype.getCount", {getCount:$oj$$71$$.$PagingDataGridDataSource$.prototype.getCount});
  $oj$$71$$.$PagingDataGridDataSource$.prototype.getCountPrecision = function $$oj$$71$$$$PagingDataGridDataSource$$$getCountPrecision$($axis$$92$$) {
    return this.$dataSource$.getCountPrecision($axis$$92$$);
  };
  $oj$$71$$.$Object$.$exportPrototypeSymbol$("PagingDataGridDataSource.prototype.getCountPrecision", {getCountPrecision:$oj$$71$$.$PagingDataGridDataSource$.prototype.getCountPrecision});
  $oj$$71$$.$PagingDataGridDataSource$.prototype.fetchHeaders = function $$oj$$71$$$$PagingDataGridDataSource$$$fetchHeaders$($headerRange$$23$$, $callbacks$$54$$, $callbackObjects$$28$$) {
    var $headerSet$$20$$;
    null == this.$_initialized$ ? ($headerSet$$20$$ = new $oj$$71$$.$ArrayHeaderSet$(0, 0, $headerRange$$23$$.axis, null), null != $callbacks$$54$$ && $callbacks$$54$$.success && $callbacks$$54$$.success.call($callbackObjects$$28$$.success, $headerSet$$20$$, $headerRange$$23$$)) : "row" === $headerRange$$23$$.axis ? ($headerRange$$23$$.start += this.$_startIndex$, $headerRange$$23$$.start + $headerRange$$23$$.count > this.$_startIndex$ + this.$_pageSize$ && ($headerRange$$23$$.count = this.$_pageSize$ - 
    $headerRange$$23$$.start), this.$_pendingRowHeaderCallback$ = {callbacks:$callbacks$$54$$, callbackObjects:$callbackObjects$$28$$}, this.$dataSource$.fetchHeaders($headerRange$$23$$, {success:this.$_handleRowHeaderFetchSuccess$.bind(this), error:this.$_handleRowHeaderFetchError$.bind(this)}, $callbackObjects$$28$$)) : this.$dataSource$.fetchHeaders($headerRange$$23$$, $callbacks$$54$$, $callbackObjects$$28$$);
  };
  $oj$$71$$.$Object$.$exportPrototypeSymbol$("PagingDataGridDataSource.prototype.fetchHeaders", {fetchHeaders:$oj$$71$$.$PagingDataGridDataSource$.prototype.fetchHeaders});
  $oj$$71$$.$PagingDataGridDataSource$.prototype.$_handleRowHeaderFetchSuccess$ = function $$oj$$71$$$$PagingDataGridDataSource$$$$_handleRowHeaderFetchSuccess$$($headerSet$$21$$, $headerRange$$24$$) {
    var $pagingHeaderSet$$, $callback$$139$$, $callbackObject$$;
    $headerRange$$24$$.start -= this.$_startIndex$;
    $headerRange$$24$$.count += 1;
    $pagingHeaderSet$$ = new $oj$$71$$.$PagingHeaderSet$($headerSet$$21$$, this.$_startIndex$);
    $callback$$139$$ = this.$_pendingRowHeaderCallback$.callbacks.success;
    $callbackObject$$ = this.$_pendingRowHeaderCallback$.callbackObjects.success;
    this.$_pendingRowHeaderCallback$ = null;
    $callback$$139$$.call($callbackObject$$, $pagingHeaderSet$$, $headerRange$$24$$);
  };
  $oj$$71$$.$PagingDataGridDataSource$.prototype.$_handleRowHeaderFetchError$ = function $$oj$$71$$$$PagingDataGridDataSource$$$$_handleRowHeaderFetchError$$($error$$49$$) {
    var $callback$$140$$, $callbackObject$$1$$;
    $callback$$140$$ = this.$_pendingRowHeaderCallback$.callbacks.error;
    $callbackObject$$1$$ = this.$_pendingRowHeaderCallback$.callbackObjects.error;
    this.$_pendingRowHeaderCallback$ = null;
    $callback$$140$$.call($callbackObject$$1$$, $error$$49$$);
  };
  $oj$$71$$.$PagingDataGridDataSource$.prototype.fetchCells = function $$oj$$71$$$$PagingDataGridDataSource$$$fetchCells$($cellRanges$$10$$, $callbacks$$55$$, $callbackObjects$$29$$) {
    var $cellSet$$18_i$$510$$;
    if (null == this.$_initialized$) {
      $cellSet$$18_i$$510$$ = new $oj$$71$$.$ArrayCellSet$(0, 0, 0, 0, null), null != $callbacks$$55$$ && $callbacks$$55$$.success && $callbacks$$55$$.success.call($callbackObjects$$29$$.success, $cellSet$$18_i$$510$$, $cellRanges$$10$$);
    } else {
      for ($cellSet$$18_i$$510$$ = 0;$cellSet$$18_i$$510$$ < $cellRanges$$10$$.length;$cellSet$$18_i$$510$$ += 1) {
        "row" === $cellRanges$$10$$[$cellSet$$18_i$$510$$].axis && ($cellRanges$$10$$[$cellSet$$18_i$$510$$].start += this.$_startIndex$, $cellRanges$$10$$[$cellSet$$18_i$$510$$].start + $cellRanges$$10$$[$cellSet$$18_i$$510$$].count > this.$_startIndex$ + this.$_pageSize$ && ($cellRanges$$10$$[$cellSet$$18_i$$510$$].count = this.$_pageSize$ - $cellRanges$$10$$[$cellSet$$18_i$$510$$].start));
      }
      this.$_pendingCellCallback$ = {callbacks:$callbacks$$55$$, callbackObjects:$callbackObjects$$29$$};
      this.$dataSource$.fetchCells($cellRanges$$10$$, {success:this.$_handleCellsFetchSuccess$.bind(this), error:this.$_handleCellsFetchError$.bind(this)}, $callbackObjects$$29$$);
    }
  };
  $oj$$71$$.$Object$.$exportPrototypeSymbol$("PagingDataGridDataSource.prototype.fetchCells", {fetchCells:$oj$$71$$.$PagingDataGridDataSource$.prototype.fetchCells});
  $oj$$71$$.$PagingDataGridDataSource$.prototype.$_handleCellsFetchSuccess$ = function $$oj$$71$$$$PagingDataGridDataSource$$$$_handleCellsFetchSuccess$$($cellSet$$19$$, $cellRanges$$11$$) {
    var $i$$511_pagedCellSet$$, $callback$$141$$, $callbackObject$$2$$;
    for ($i$$511_pagedCellSet$$ = 0;$i$$511_pagedCellSet$$ < $cellRanges$$11$$.length;$i$$511_pagedCellSet$$ += 1) {
      "row" === $cellRanges$$11$$[$i$$511_pagedCellSet$$].axis && ($cellRanges$$11$$[$i$$511_pagedCellSet$$].start -= this.$_startIndex$, $cellRanges$$11$$[$i$$511_pagedCellSet$$].count += 1);
    }
    $i$$511_pagedCellSet$$ = new $oj$$71$$.$PagingCellSet$($cellSet$$19$$, this.$_startIndex$);
    $callback$$141$$ = this.$_pendingCellCallback$.callbacks.success;
    $callbackObject$$2$$ = this.$_pendingCellCallback$.callbackObjects.success;
    this.$_pendingCellCallback$ = null;
    this.$_endIndex$ = this.$_startIndex$ + $cellSet$$19$$.getCount("row") - 1;
    this.handleEvent("sync", {data:Array($cellSet$$19$$.getCount("row")), startIndex:this.$_startIndex$});
    $callback$$141$$.call($callbackObject$$2$$, $i$$511_pagedCellSet$$, $cellRanges$$11$$);
  };
  $oj$$71$$.$PagingDataGridDataSource$.prototype.$_handleCellsFetchError$ = function $$oj$$71$$$$PagingDataGridDataSource$$$$_handleCellsFetchError$$($error$$50$$) {
    var $callback$$142$$, $callbackObject$$3$$;
    $callback$$142$$ = this.$_pendingCellCallback$.callbacks.error;
    $callbackObject$$3$$ = this.$_pendingCellCallback$.callbackObjects.error;
    this.$_pendingCellCallback$ = null;
    $callback$$142$$.call($callbackObject$$3$$, $error$$50$$);
  };
  $oj$$71$$.$PagingDataGridDataSource$.prototype.keys = function $$oj$$71$$$$PagingDataGridDataSource$$$keys$($indexes$$37$$) {
    return this.$dataSource$.keys({column:$indexes$$37$$.column, row:$indexes$$37$$.row + this.$_startIndex$});
  };
  $oj$$71$$.$Object$.$exportPrototypeSymbol$("PagingDataGridDataSource.prototype.keys", {keys:$oj$$71$$.$PagingDataGridDataSource$.prototype.keys});
  $oj$$71$$.$PagingDataGridDataSource$.prototype.indexes = function $$oj$$71$$$$PagingDataGridDataSource$$$indexes$($indexes$$38_keys$$56$$) {
    $indexes$$38_keys$$56$$ = this.$dataSource$.indexes($indexes$$38_keys$$56$$);
    -1 != $indexes$$38_keys$$56$$.row && ($indexes$$38_keys$$56$$.row -= this.$_startIndex$);
    return $indexes$$38_keys$$56$$;
  };
  $oj$$71$$.$Object$.$exportPrototypeSymbol$("PagingDataGridDataSource.prototype.indexes", {indexes:$oj$$71$$.$PagingDataGridDataSource$.prototype.indexes});
  $oj$$71$$.$PagingDataGridDataSource$.prototype.getCapability = function $$oj$$71$$$$PagingDataGridDataSource$$$getCapability$($feature$$14$$) {
    return this.$dataSource$.getCapability($feature$$14$$);
  };
  $oj$$71$$.$Object$.$exportPrototypeSymbol$("PagingDataGridDataSource.prototype.getCapability", {getCapability:$oj$$71$$.$PagingDataGridDataSource$.prototype.getCapability});
  $oj$$71$$.$PagingDataGridDataSource$.prototype.size = function $$oj$$71$$$$PagingDataGridDataSource$$$size$() {
    var $count$$62$$;
    if (null == this.$_initialized$) {
      return-1;
    }
    $count$$62$$ = this.$dataSource$.getCount("row");
    return this.$dataSource$.getCount("row") > this.$_pageSize$ ? this.$_pageSize$ : $count$$62$$;
  };
  $oj$$71$$.$Object$.$exportPrototypeSymbol$("PagingDataGridDataSource.prototype.size", {size:$oj$$71$$.$PagingDataGridDataSource$.prototype.size});
  $oj$$71$$.$PagingDataGridDataSource$.prototype.sort = function $$oj$$71$$$$PagingDataGridDataSource$$$sort$($criteria$$10$$, $callbacks$$56$$, $callbackObjects$$30$$) {
    this.$dataSource$.sort($criteria$$10$$, $callbacks$$56$$, $callbackObjects$$30$$);
  };
  $oj$$71$$.$Object$.$exportPrototypeSymbol$("PagingDataGridDataSource.prototype.sort", {sort:$oj$$71$$.$PagingDataGridDataSource$.prototype.sort});
  $oj$$71$$.$PagingDataGridDataSource$.prototype.totalSize = function $$oj$$71$$$$PagingDataGridDataSource$$$totalSize$() {
    return null == this.$_initialized$ ? -1 : this.$dataSource$.getCount("row");
  };
  $oj$$71$$.$Object$.$exportPrototypeSymbol$("PagingDataGridDataSource.prototype.totalSize", {totalSize:$oj$$71$$.$PagingDataGridDataSource$.prototype.totalSize});
  $oj$$71$$.$PagingDataGridDataSource$.prototype.totalSizeConfidence = function $$oj$$71$$$$PagingDataGridDataSource$$$totalSizeConfidence$() {
    return "actual";
  };
  $oj$$71$$.$Object$.$exportPrototypeSymbol$("PagingDataGridDataSource.prototype.totalSizeConfidence", {totalSizeConfidence:$oj$$71$$.$PagingDataGridDataSource$.prototype.totalSizeConfidence});
  $oj$$71$$.$PagingDataGridDataSource$.prototype.moveOK = function $$oj$$71$$$$PagingDataGridDataSource$$$moveOK$($rowToMove$$9$$, $referenceRow$$15$$, $position$$46$$) {
    return this.$dataSource$.moveOK($rowToMove$$9$$, $referenceRow$$15$$, $position$$46$$);
  };
  $oj$$71$$.$Object$.$exportPrototypeSymbol$("PagingDataGridDataSource.prototype.moveOK", {moveOK:$oj$$71$$.$PagingDataGridDataSource$.prototype.moveOK});
  $oj$$71$$.$PagingDataGridDataSource$.prototype.move = function $$oj$$71$$$$PagingDataGridDataSource$$$move$($moveKey$$2$$, $atKey$$2$$, $position$$47$$, $callbacks$$57$$, $callbackObjects$$31$$) {
    this.$dataSource$.move($moveKey$$2$$, $atKey$$2$$, $position$$47$$, $callbacks$$57$$, $callbackObjects$$31$$);
  };
  $oj$$71$$.$Object$.$exportPrototypeSymbol$("PagingDataGridDataSource.prototype.move", {move:$oj$$71$$.$PagingDataGridDataSource$.prototype.move});
  $oj$$71$$.$PagingCellSet$ = function $$oj$$71$$$$PagingCellSet$$($cellSet$$20$$, $startIndex$$42$$) {
    this.$m_cellSet$ = $cellSet$$20$$;
    this.$m_startIndex$ = $startIndex$$42$$;
  };
  $goog$exportPath_$$("PagingCellSet", $oj$$71$$.$PagingCellSet$, $oj$$71$$);
  $oj$$71$$.$PagingCellSet$.prototype.getData = function $$oj$$71$$$$PagingCellSet$$$getData$($indexes$$39$$) {
    return this.$m_cellSet$.getData({column:$indexes$$39$$.column, row:$indexes$$39$$.row + this.$m_startIndex$});
  };
  $oj$$71$$.$Object$.$exportPrototypeSymbol$("PagingCellSet.prototype.getData", {getData:$oj$$71$$.$PagingCellSet$.prototype.getData});
  $oj$$71$$.$PagingCellSet$.prototype.getMetadata = function $$oj$$71$$$$PagingCellSet$$$getMetadata$($indexes$$40$$) {
    return this.$m_cellSet$.getMetadata({column:$indexes$$40$$.column, row:$indexes$$40$$.row + this.$m_startIndex$});
  };
  $oj$$71$$.$Object$.$exportPrototypeSymbol$("PagingCellSet.prototype.getMetadata", {getMetadata:$oj$$71$$.$PagingCellSet$.prototype.getMetadata});
  $oj$$71$$.$PagingCellSet$.prototype.getCount = function $$oj$$71$$$$PagingCellSet$$$getCount$($axis$$93$$) {
    return this.$m_cellSet$.getCount($axis$$93$$);
  };
  $oj$$71$$.$Object$.$exportPrototypeSymbol$("PagingCellSet.prototype.getCount", {getCount:$oj$$71$$.$PagingCellSet$.prototype.getCount});
  $oj$$71$$.$PagingCellSet$.prototype.$getCellSet$ = function $$oj$$71$$$$PagingCellSet$$$$getCellSet$$() {
    return this.$m_cellSet$;
  };
  $oj$$71$$.$Object$.$exportPrototypeSymbol$("PagingCellSet.prototype.getCellSet", {$getCellSet$:$oj$$71$$.$PagingCellSet$.prototype.$getCellSet$});
  $oj$$71$$.$PagingCellSet$.prototype.$getStartIndex$ = function $$oj$$71$$$$PagingCellSet$$$$getStartIndex$$() {
    return this.$m_startIndex$;
  };
  $oj$$71$$.$Object$.$exportPrototypeSymbol$("PagingCellSet.prototype.getStartIndex", {$getStartIndex$:$oj$$71$$.$PagingCellSet$.prototype.$getStartIndex$});
});

/**
 * Copyright (c) 2014, 2015, Oracle and/or its affiliates.
 * All rights reserved.
 */
"use strict";
define(["ojs/ojcore", "jquery", "ojs/ojcomponentcore", "ojs/ojdatasource-common"], function($oj$$21$$, $$$$20$$) {
  $oj$$21$$.$EmptyNodeSet$ = function $$oj$$21$$$$EmptyNodeSet$$($parent$$18$$, $start$$40$$) {
    this.$m_parent$ = $parent$$18$$;
    this.$m_start$ = $start$$40$$;
  };
  $goog$exportPath_$$("EmptyNodeSet", $oj$$21$$.$EmptyNodeSet$, $oj$$21$$);
  $oj$$21$$.$EmptyNodeSet$.prototype.getParent = function $$oj$$21$$$$EmptyNodeSet$$$getParent$() {
    return this.$m_parent$;
  };
  $oj$$21$$.$Object$.$exportPrototypeSymbol$("EmptyNodeSet.prototype.getParent", {getParent:$oj$$21$$.$EmptyNodeSet$.prototype.getParent});
  $oj$$21$$.$EmptyNodeSet$.prototype.$getStart$ = function $$oj$$21$$$$EmptyNodeSet$$$$getStart$$() {
    return this.$m_start$;
  };
  $oj$$21$$.$Object$.$exportPrototypeSymbol$("EmptyNodeSet.prototype.getStart", {$getStart$:$oj$$21$$.$EmptyNodeSet$.prototype.$getStart$});
  $oj$$21$$.$EmptyNodeSet$.prototype.$getCount$ = function $$oj$$21$$$$EmptyNodeSet$$$$getCount$$() {
    return 0;
  };
  $oj$$21$$.$Object$.$exportPrototypeSymbol$("EmptyNodeSet.prototype.getCount", {$getCount$:$oj$$21$$.$EmptyNodeSet$.prototype.$getCount$});
  $oj$$21$$.$EmptyNodeSet$.prototype.getData = function $$oj$$21$$$$EmptyNodeSet$$$getData$() {
    return null;
  };
  $oj$$21$$.$Object$.$exportPrototypeSymbol$("EmptyNodeSet.prototype.getData", {getData:$oj$$21$$.$EmptyNodeSet$.prototype.getData});
  $oj$$21$$.$EmptyNodeSet$.prototype.getMetadata = function $$oj$$21$$$$EmptyNodeSet$$$getMetadata$() {
    return null;
  };
  $oj$$21$$.$Object$.$exportPrototypeSymbol$("EmptyNodeSet.prototype.getMetadata", {getMetadata:$oj$$21$$.$EmptyNodeSet$.prototype.getMetadata});
  $oj$$21$$.$FlattenedNodeSet$ = function $$oj$$21$$$$FlattenedNodeSet$$($nodeSet$$2$$, $actualStart$$) {
    this.$m_nodeSet$ = $nodeSet$$2$$;
    this.$m_start$ = $actualStart$$;
  };
  $goog$exportPath_$$("FlattenedNodeSet", $oj$$21$$.$FlattenedNodeSet$, $oj$$21$$);
  $oj$$21$$.$FlattenedNodeSet$.prototype.getParent = function $$oj$$21$$$$FlattenedNodeSet$$$getParent$() {
    return this.$m_nodeSet$.getParent();
  };
  $oj$$21$$.$Object$.$exportPrototypeSymbol$("FlattenedNodeSet.prototype.getParent", {getParent:$oj$$21$$.$FlattenedNodeSet$.prototype.getParent});
  $oj$$21$$.$FlattenedNodeSet$.prototype.$getStart$ = function $$oj$$21$$$$FlattenedNodeSet$$$$getStart$$() {
    return void 0 != this.$m_start$ ? this.$m_start$ : this.$m_nodeSet$.$getStart$();
  };
  $oj$$21$$.$Object$.$exportPrototypeSymbol$("FlattenedNodeSet.prototype.getStart", {$getStart$:$oj$$21$$.$FlattenedNodeSet$.prototype.$getStart$});
  $oj$$21$$.$FlattenedNodeSet$.prototype.$getCount$ = function $$oj$$21$$$$FlattenedNodeSet$$$$getCount$$() {
    void 0 === this.$m_count$ && (this.$m_count$ = this.$_getCount$(this.$m_nodeSet$, 0), void 0 != this.$m_start$ && (this.$m_count$ -= this.$m_start$));
    return this.$m_count$;
  };
  $oj$$21$$.$Object$.$exportPrototypeSymbol$("FlattenedNodeSet.prototype.getCount", {$getCount$:$oj$$21$$.$FlattenedNodeSet$.prototype.$getCount$});
  $oj$$21$$.$FlattenedNodeSet$.prototype.$_getCount$ = function $$oj$$21$$$$FlattenedNodeSet$$$$_getCount$$($nodeSet$$3$$, $total$$) {
    var $start$$41$$, $count$$37$$, $i$$290$$, $child$$5$$;
    $start$$41$$ = $nodeSet$$3$$.$getStart$();
    $count$$37$$ = $nodeSet$$3$$.$getCount$();
    $total$$ += $count$$37$$;
    if ($nodeSet$$3$$.$getChildNodeSet$) {
      for ($i$$290$$ = 0;$i$$290$$ < $count$$37$$;$i$$290$$++) {
        $child$$5$$ = $nodeSet$$3$$.$getChildNodeSet$($i$$290$$ + $start$$41$$), null != $child$$5$$ && ($total$$ = this.$_getCount$($child$$5$$, $total$$));
      }
    }
    return $total$$;
  };
  $oj$$21$$.$FlattenedNodeSet$.prototype.getData = function $$oj$$21$$$$FlattenedNodeSet$$$getData$($index$$149$$) {
    return this.$_getDataOrMetadata$(this.$m_nodeSet$, $index$$149$$, {index:this.$m_nodeSet$.$getStart$()}, this.$_getData$);
  };
  $oj$$21$$.$Object$.$exportPrototypeSymbol$("FlattenedNodeSet.prototype.getData", {getData:$oj$$21$$.$FlattenedNodeSet$.prototype.getData});
  $oj$$21$$.$FlattenedNodeSet$.prototype.getMetadata = function $$oj$$21$$$$FlattenedNodeSet$$$getMetadata$($index$$150$$) {
    return this.$_getDataOrMetadata$(this.$m_nodeSet$, $index$$150$$, {index:this.$m_nodeSet$.$getStart$()}, this.$_getMetadata$);
  };
  $oj$$21$$.$Object$.$exportPrototypeSymbol$("FlattenedNodeSet.prototype.getMetadata", {getMetadata:$oj$$21$$.$FlattenedNodeSet$.prototype.getMetadata});
  $oj$$21$$.$FlattenedNodeSet$.prototype.$_getMetadata$ = function $$oj$$21$$$$FlattenedNodeSet$$$$_getMetadata$$($nodeSet$$4$$, $index$$151$$) {
    return $nodeSet$$4$$.getMetadata($index$$151$$);
  };
  $oj$$21$$.$FlattenedNodeSet$.prototype.$_getData$ = function $$oj$$21$$$$FlattenedNodeSet$$$$_getData$$($nodeSet$$5$$, $index$$152$$) {
    return $nodeSet$$5$$.getData($index$$152$$);
  };
  $oj$$21$$.$FlattenedNodeSet$.prototype.$_getDataOrMetadata$ = function $$oj$$21$$$$FlattenedNodeSet$$$$_getDataOrMetadata$$($nodeSet$$6$$, $index$$153$$, $current$$17$$, $func$$9$$) {
    var $start$$42$$, $count$$38$$, $i$$291$$, $child$$6_currIndex_result$$50$$;
    $start$$42$$ = $nodeSet$$6$$.$getStart$();
    $count$$38$$ = $nodeSet$$6$$.$getCount$();
    for ($i$$291$$ = 0;$i$$291$$ < $count$$38$$;$i$$291$$++) {
      $child$$6_currIndex_result$$50$$ = $current$$17$$.index;
      if ($child$$6_currIndex_result$$50$$ === $index$$153$$) {
        return $func$$9$$.call(this, $nodeSet$$6$$, $i$$291$$ + $start$$42$$);
      }
      $current$$17$$.index = $child$$6_currIndex_result$$50$$ + 1;
      if ($nodeSet$$6$$.$getChildNodeSet$ && ($child$$6_currIndex_result$$50$$ = $nodeSet$$6$$.$getChildNodeSet$($i$$291$$ + $start$$42$$), null != $child$$6_currIndex_result$$50$$ && ($child$$6_currIndex_result$$50$$ = this.$_getDataOrMetadata$($child$$6_currIndex_result$$50$$, $index$$153$$, $current$$17$$, $func$$9$$), null != $child$$6_currIndex_result$$50$$))) {
        return $child$$6_currIndex_result$$50$$;
      }
    }
    return null;
  };
  $oj$$21$$.$MergedNodeSet$ = function $$oj$$21$$$$MergedNodeSet$$($nodeSet1$$, $nodeSet2$$, $mergeAt$$) {
    this.$m_nodeSet1$ = $nodeSet1$$;
    this.$m_nodeSet2$ = $nodeSet2$$;
    this.$m_mergeAt$ = this.$_findIndex$($mergeAt$$);
  };
  $goog$exportPath_$$("MergedNodeSet", $oj$$21$$.$MergedNodeSet$, $oj$$21$$);
  $oj$$21$$.$MergedNodeSet$.prototype.$_findIndex$ = function $$oj$$21$$$$MergedNodeSet$$$$_findIndex$$($key$$119$$) {
    var $i$$292_start$$43$$, $end$$13$$, $rowKey$$11$$;
    $i$$292_start$$43$$ = this.$m_nodeSet1$.$getStart$();
    for ($end$$13$$ = $i$$292_start$$43$$ + this.$m_nodeSet1$.$getCount$();$i$$292_start$$43$$ < $end$$13$$;$i$$292_start$$43$$++) {
      if ($rowKey$$11$$ = this.$m_nodeSet1$.getMetadata($i$$292_start$$43$$).key, $key$$119$$ === $rowKey$$11$$) {
        return $i$$292_start$$43$$;
      }
    }
    return $end$$13$$ - 1;
  };
  $oj$$21$$.$MergedNodeSet$.prototype.getParent = function $$oj$$21$$$$MergedNodeSet$$$getParent$() {
    return this.$m_nodeSet1$.getParent();
  };
  $oj$$21$$.$Object$.$exportPrototypeSymbol$("MergedNodeSet.prototype.getParent", {getParent:$oj$$21$$.$MergedNodeSet$.prototype.getParent});
  $oj$$21$$.$MergedNodeSet$.prototype.$getStart$ = function $$oj$$21$$$$MergedNodeSet$$$$getStart$$() {
    return this.$m_nodeSet1$.$getStart$();
  };
  $oj$$21$$.$Object$.$exportPrototypeSymbol$("MergedNodeSet.prototype.getStart", {$getStart$:$oj$$21$$.$MergedNodeSet$.prototype.$getStart$});
  $oj$$21$$.$MergedNodeSet$.prototype.$getCount$ = function $$oj$$21$$$$MergedNodeSet$$$$getCount$$() {
    return this.$m_nodeSet1$.$getCount$() + this.$m_nodeSet2$.$getCount$();
  };
  $oj$$21$$.$Object$.$exportPrototypeSymbol$("MergedNodeSet.prototype.getCount", {$getCount$:$oj$$21$$.$MergedNodeSet$.prototype.$getCount$});
  $oj$$21$$.$MergedNodeSet$.prototype.getData = function $$oj$$21$$$$MergedNodeSet$$$getData$($index$$154_result$$51$$) {
    $index$$154_result$$51$$ = this.$_getRelativeIndex$($index$$154_result$$51$$);
    return $index$$154_result$$51$$.set.getData($index$$154_result$$51$$.index);
  };
  $oj$$21$$.$Object$.$exportPrototypeSymbol$("MergedNodeSet.prototype.getData", {getData:$oj$$21$$.$MergedNodeSet$.prototype.getData});
  $oj$$21$$.$MergedNodeSet$.prototype.getMetadata = function $$oj$$21$$$$MergedNodeSet$$$getMetadata$($index$$155_result$$52$$) {
    $index$$155_result$$52$$ = this.$_getRelativeIndex$($index$$155_result$$52$$);
    return $index$$155_result$$52$$.set.getMetadata($index$$155_result$$52$$.index);
  };
  $oj$$21$$.$Object$.$exportPrototypeSymbol$("MergedNodeSet.prototype.getMetadata", {getMetadata:$oj$$21$$.$MergedNodeSet$.prototype.getMetadata});
  $oj$$21$$.$MergedNodeSet$.prototype.$_getRelativeIndex$ = function $$oj$$21$$$$MergedNodeSet$$$$_getRelativeIndex$$($index$$156$$) {
    if ($index$$156$$ <= this.$m_mergeAt$) {
      return{set:this.$m_nodeSet1$, index:$index$$156$$};
    }
    var $count$$39$$ = this.$m_nodeSet2$.$getCount$();
    return $index$$156$$ > this.$m_mergeAt$ + $count$$39$$ ? {set:this.$m_nodeSet1$, index:$index$$156$$ - $count$$39$$} : {set:this.$m_nodeSet2$, index:$index$$156$$ - (this.$m_mergeAt$ + 1)};
  };
  $oj$$21$$.$NodeSetWrapper$ = function $$oj$$21$$$$NodeSetWrapper$$($nodeSet$$7$$, $metadataCallback$$, $range$$8$$, $collapsedKeys$$) {
    this.$m_nodeSet$ = $nodeSet$$7$$;
    this.$m_callback$ = $metadataCallback$$;
    this.$m_range$ = $range$$8$$;
    this.$m_collapsedKeys$ = $collapsedKeys$$;
  };
  $goog$exportPath_$$("NodeSetWrapper", $oj$$21$$.$NodeSetWrapper$, $oj$$21$$);
  $oj$$21$$.$NodeSetWrapper$.prototype.getParent = function $$oj$$21$$$$NodeSetWrapper$$$getParent$() {
    return this.$m_nodeSet$.getParent();
  };
  $oj$$21$$.$Object$.$exportPrototypeSymbol$("NodeSetWrapper.prototype.getParent", {getParent:$oj$$21$$.$NodeSetWrapper$.prototype.getParent});
  $oj$$21$$.$NodeSetWrapper$.prototype.$getStart$ = function $$oj$$21$$$$NodeSetWrapper$$$$getStart$$() {
    return null != this.$m_range$ ? this.$m_range$.start : this.$m_nodeSet$.$getStart$();
  };
  $oj$$21$$.$Object$.$exportPrototypeSymbol$("NodeSetWrapper.prototype.getStart", {$getStart$:$oj$$21$$.$NodeSetWrapper$.prototype.$getStart$});
  $oj$$21$$.$NodeSetWrapper$.prototype.$getCount$ = function $$oj$$21$$$$NodeSetWrapper$$$$getCount$$() {
    var $nodeStart$$, $nodeCount$$;
    $nodeStart$$ = this.$m_nodeSet$.$getStart$();
    $nodeCount$$ = this.$m_nodeSet$.$getCount$();
    null != this.$m_range$ && (this.$m_range$.start > $nodeStart$$ ? $nodeCount$$ = Math.min(0, $nodeCount$$ - (this.$m_range$.start - $nodeStart$$)) : this.$m_range$.start < $nodeStart$$ && ($nodeCount$$ = 0));
    return $nodeCount$$;
  };
  $oj$$21$$.$Object$.$exportPrototypeSymbol$("NodeSetWrapper.prototype.getCount", {$getCount$:$oj$$21$$.$NodeSetWrapper$.prototype.$getCount$});
  $oj$$21$$.$NodeSetWrapper$.prototype.getData = function $$oj$$21$$$$NodeSetWrapper$$$getData$($index$$157$$) {
    return this.$m_nodeSet$.getData($index$$157$$);
  };
  $oj$$21$$.$Object$.$exportPrototypeSymbol$("NodeSetWrapper.prototype.getData", {getData:$oj$$21$$.$NodeSetWrapper$.prototype.getData});
  $oj$$21$$.$NodeSetWrapper$.prototype.getMetadata = function $$oj$$21$$$$NodeSetWrapper$$$getMetadata$($index$$158$$) {
    var $metadata$$7$$;
    $metadata$$7$$ = this.$m_nodeSet$.getMetadata($index$$158$$);
    $metadata$$7$$.index = $index$$158$$;
    $metadata$$7$$.parentKey = this.getParent();
    this.$m_callback$.call(null, $metadata$$7$$.key, $metadata$$7$$);
    return $metadata$$7$$;
  };
  $oj$$21$$.$Object$.$exportPrototypeSymbol$("NodeSetWrapper.prototype.getMetadata", {getMetadata:$oj$$21$$.$NodeSetWrapper$.prototype.getMetadata});
  $oj$$21$$.$NodeSetWrapper$.prototype.$getChildNodeSet$ = function $$oj$$21$$$$NodeSetWrapper$$$$getChildNodeSet$$($index$$159_result$$53$$) {
    return null != this.$m_collapsedKeys$ && -1 != this.$m_collapsedKeys$.indexOf(this.$m_nodeSet$.getMetadata($index$$159_result$$53$$).key) || !this.$m_nodeSet$.$getChildNodeSet$ || ($index$$159_result$$53$$ = this.$m_nodeSet$.$getChildNodeSet$($index$$159_result$$53$$), null == $index$$159_result$$53$$) ? null : new $oj$$21$$.$NodeSetWrapper$($index$$159_result$$53$$, this.$m_callback$, null, this.$m_collapsedKeys$);
  };
  $oj$$21$$.$Object$.$exportPrototypeSymbol$("NodeSetWrapper.prototype.getChildNodeSet", {$getChildNodeSet$:$oj$$21$$.$NodeSetWrapper$.prototype.$getChildNodeSet$});
  $oj$$21$$.$FlattenedTreeDataSource$ = function $$oj$$21$$$$FlattenedTreeDataSource$$($treeDataSource$$, $options$$266$$) {
    this.$m_wrapped$ = $treeDataSource$$;
    this.$m_options$ = $options$$266$$ || {};
    $oj$$21$$.$FlattenedTreeDataSource$.$superclass$.constructor.call(this);
  };
  $goog$exportPath_$$("FlattenedTreeDataSource", $oj$$21$$.$FlattenedTreeDataSource$, $oj$$21$$);
  $oj$$21$$.$Object$.$createSubclass$($oj$$21$$.$FlattenedTreeDataSource$, $oj$$21$$.$DataSource$, "oj.FlattenedTreeDataSource");
  $oj$$21$$.$FlattenedTreeDataSource$.prototype.Init = function $$oj$$21$$$$FlattenedTreeDataSource$$$Init$() {
    var $expanded$$9$$;
    $oj$$21$$.$FlattenedTreeDataSource$.$superclass$.Init.call(this);
    this.$m_wrapped$.on("change", this.$_handleModelEvent$.bind(this));
    this.$m_fetchSize$ = parseInt(this.$m_options$.fetchSize, 10);
    isNaN(this.$m_fetchSize$) && (this.$m_fetchSize$ = 25);
    this.$m_maxCount$ = parseInt(this.$m_options$.maxCount, 10);
    isNaN(this.$m_maxCount$) && (this.$m_maxCount$ = 500);
    $expanded$$9$$ = this.$m_options$.expanded;
    Array.isArray($expanded$$9$$) ? this.$m_expandedKeys$ = $expanded$$9$$ : ("all" === $expanded$$9$$ && (this.$m_collapsedKeys$ = []), this.$m_expandedKeys$ = []);
    this.$m_cache$ = [];
  };
  $oj$$21$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeDataSource.prototype.Init", {Init:$oj$$21$$.$FlattenedTreeDataSource$.prototype.Init});
  $oj$$21$$.$FlattenedTreeDataSource$.prototype.handleEvent = function $$oj$$21$$$$FlattenedTreeDataSource$$$handleEvent$($eventType$$38$$, $event$$331$$) {
    return $oj$$21$$.$FlattenedTreeDataSource$.$superclass$.handleEvent.call(this, $eventType$$38$$, $event$$331$$);
  };
  $oj$$21$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeDataSource.prototype.handleEvent", {handleEvent:$oj$$21$$.$FlattenedTreeDataSource$.prototype.handleEvent});
  $oj$$21$$.$FlattenedTreeDataSource$.prototype.$Destroy$ = function $$oj$$21$$$$FlattenedTreeDataSource$$$$Destroy$$() {
    delete this.$m_cache$;
    delete this.$m_expandedKeys$;
    delete this.$m_collapsedKeys$;
    this.$m_wrapped$.off("change");
    this.$m_wrapped$.$Destroy$ && this.$m_wrapped$.$Destroy$();
  };
  $oj$$21$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeDataSource.prototype.Destroy", {$Destroy$:$oj$$21$$.$FlattenedTreeDataSource$.prototype.$Destroy$});
  $oj$$21$$.$FlattenedTreeDataSource$.prototype.$getFetchSize$ = function $$oj$$21$$$$FlattenedTreeDataSource$$$$getFetchSize$$() {
    return this.$m_fetchSize$;
  };
  $oj$$21$$.$FlattenedTreeDataSource$.prototype.$getExpandedKeys$ = function $$oj$$21$$$$FlattenedTreeDataSource$$$$getExpandedKeys$$() {
    return this.$m_expandedKeys$;
  };
  $oj$$21$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeDataSource.prototype.getExpandedKeys", {$getExpandedKeys$:$oj$$21$$.$FlattenedTreeDataSource$.prototype.$getExpandedKeys$});
  $oj$$21$$.$FlattenedTreeDataSource$.prototype.$getOption$ = function $$oj$$21$$$$FlattenedTreeDataSource$$$$getOption$$($option$$31$$) {
    return null != this.$m_options$ ? this.$m_options$[$option$$31$$] : null;
  };
  $oj$$21$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeDataSource.prototype.getOption", {$getOption$:$oj$$21$$.$FlattenedTreeDataSource$.prototype.$getOption$});
  $oj$$21$$.$FlattenedTreeDataSource$.prototype.getWrappedDataSource = function $$oj$$21$$$$FlattenedTreeDataSource$$$getWrappedDataSource$() {
    return this.$m_wrapped$;
  };
  $oj$$21$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeDataSource.prototype.getWrappedDataSource", {getWrappedDataSource:$oj$$21$$.$FlattenedTreeDataSource$.prototype.getWrappedDataSource});
  $oj$$21$$.$FlattenedTreeDataSource$.prototype.$_getFetchSizeToUse$ = function $$oj$$21$$$$FlattenedTreeDataSource$$$$_getFetchSizeToUse$$($count$$40$$) {
    var $fetchSize$$1$$, $maxCount$$;
    $fetchSize$$1$$ = this.$getFetchSize$();
    $maxCount$$ = this.$m_maxCount$;
    return-1 === $fetchSize$$1$$ ? -1 === $count$$40$$ ? $maxCount$$ : $count$$40$$ : -1 === $count$$40$$ ? Math.min($fetchSize$$1$$, $count$$40$$) : $fetchSize$$1$$;
  };
  $oj$$21$$.$FlattenedTreeDataSource$.prototype.$fetchRows$ = function $$oj$$21$$$$FlattenedTreeDataSource$$$$fetchRows$$($range$$9$$, $callbacks$$8$$) {
    this.$_isExpandAll$() ? this.$_fetchRowsFromDescendants$($range$$9$$, $callbacks$$8$$) : this.$_fetchRowsFromChildren$($range$$9$$, $callbacks$$8$$);
  };
  $oj$$21$$.$FlattenedTreeDataSource$.prototype.$_fetchRowsFromChildren$ = function $$oj$$21$$$$FlattenedTreeDataSource$$$$_fetchRowsFromChildren$$($range$$10$$, $callbacks$$9$$) {
    var $maxFetchSize_nodeSet$$8_processed$$5$$, $fetchSize$$2_lastEntry$$, $parent$$19$$, $count$$41$$, $index$$160$$, $depth$$13$$;
    if ($range$$10$$.start > this.$_getLastIndex$()) {
      $maxFetchSize_nodeSet$$8_processed$$5$$ = this.$_getMaxFetchSize$();
      if (0 > this.$_getLastIndex$()) {
        $range$$10$$.count = Math.min($maxFetchSize_nodeSet$$8_processed$$5$$, $range$$10$$.count);
        this.$m_wrapped$.$fetchChildren$(null, $range$$10$$, {success:function($nodeSet$$9$$) {
          this.$_handleFetchSuccess$($nodeSet$$9$$, null, 0, $range$$10$$, 0, $callbacks$$9$$);
        }.bind(this), error:function($status$$18$$) {
          this.$_handleFetchError$($status$$18$$, $callbacks$$9$$);
        }.bind(this)});
        return;
      }
      if (0 < $maxFetchSize_nodeSet$$8_processed$$5$$) {
        $fetchSize$$2_lastEntry$$ = this.$_getLastEntry$();
        $parent$$19$$ = $fetchSize$$2_lastEntry$$.parent;
        $count$$41$$ = this.$m_wrapped$.$getChildCount$($parent$$19$$);
        $index$$160$$ = $fetchSize$$2_lastEntry$$.index;
        $depth$$13$$ = $fetchSize$$2_lastEntry$$.depth;
        -1 === $count$$41$$ || $index$$160$$ < $count$$41$$ - 1 ? ($fetchSize$$2_lastEntry$$ = this.$_getFetchSizeToUse$($count$$41$$), $range$$10$$.start = $index$$160$$ + 1, $range$$10$$.count = -1 === $count$$41$$ ? $fetchSize$$2_lastEntry$$ : Math.min($maxFetchSize_nodeSet$$8_processed$$5$$, Math.min($fetchSize$$2_lastEntry$$, $count$$41$$ - $range$$10$$.start)), this.$m_wrapped$.$fetchChildren$($parent$$19$$, $range$$10$$, {success:function($nodeSet$$10$$) {
          this.$_handleFetchSuccess$($nodeSet$$10$$, $parent$$19$$, $depth$$13$$, $range$$10$$, $count$$41$$, $callbacks$$9$$);
        }.bind(this), error:function($status$$19$$) {
          this.$_handleFetchError$($status$$19$$, $callbacks$$9$$);
        }.bind(this)})) : $index$$160$$ === $count$$41$$ - 1 ? ($maxFetchSize_nodeSet$$8_processed$$5$$ = new $oj$$21$$.$EmptyNodeSet$(null, $range$$10$$.start), null != $callbacks$$9$$ && null != $callbacks$$9$$.success && $callbacks$$9$$.success.call(null, $maxFetchSize_nodeSet$$8_processed$$5$$)) : ($maxFetchSize_nodeSet$$8_processed$$5$$ = this.$_fetchFromAncestors$($parent$$19$$, $depth$$13$$, $callbacks$$9$$, $maxFetchSize_nodeSet$$8_processed$$5$$), $maxFetchSize_nodeSet$$8_processed$$5$$ || 
        ($maxFetchSize_nodeSet$$8_processed$$5$$ = new $oj$$21$$.$EmptyNodeSet$(null, $range$$10$$.start), null != $callbacks$$9$$ && null != $callbacks$$9$$.success && $callbacks$$9$$.success.call(null, $maxFetchSize_nodeSet$$8_processed$$5$$)));
        return;
      }
    }
    this.$handleMaxCountReached$($range$$10$$, $callbacks$$9$$);
  };
  $oj$$21$$.$FlattenedTreeDataSource$.prototype.$moveOK$ = function $$oj$$21$$$$FlattenedTreeDataSource$$$$moveOK$$($rowToMove$$2$$, $referenceRow$$2$$, $position$$13$$) {
    return this.$m_wrapped$.$moveOK$($rowToMove$$2$$, $referenceRow$$2$$, $position$$13$$);
  };
  $oj$$21$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeDataSource.prototype.moveOK", {$moveOK$:$oj$$21$$.$FlattenedTreeDataSource$.prototype.$moveOK$});
  $oj$$21$$.$FlattenedTreeDataSource$.prototype.move = function $$oj$$21$$$$FlattenedTreeDataSource$$$move$($rowToMove$$3$$, $referenceRow$$3$$, $position$$14$$, $callbacks$$10$$) {
    this.$m_wrapped$.move($rowToMove$$3$$, $referenceRow$$3$$, $position$$14$$, $callbacks$$10$$);
  };
  $oj$$21$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeDataSource.prototype.move", {move:$oj$$21$$.$FlattenedTreeDataSource$.prototype.move});
  $oj$$21$$.$FlattenedTreeDataSource$.prototype.$_getMaxFetchSize$ = function $$oj$$21$$$$FlattenedTreeDataSource$$$$_getMaxFetchSize$$() {
    return this.$m_maxCount$ - (this.$_getLastIndex$() + 1);
  };
  $oj$$21$$.$FlattenedTreeDataSource$.prototype.$_handleFetchError$ = function $$oj$$21$$$$FlattenedTreeDataSource$$$$_handleFetchError$$($status$$20$$, $callbacks$$11$$) {
    null != $callbacks$$11$$ && null != $callbacks$$11$$.error && $callbacks$$11$$.error.call(null, $status$$20$$);
  };
  $oj$$21$$.$FlattenedTreeDataSource$.prototype.$_handleFetchSuccess$ = function $$oj$$21$$$$FlattenedTreeDataSource$$$$_handleFetchSuccess$$($nodeSet$$11$$, $parent$$20_queue$$2$$, $depth$$14$$, $range$$11$$, $count$$42$$, $callbacks$$12$$) {
    var $prevNodeSetInfo_processed$$6_toExpand$$;
    $prevNodeSetInfo_processed$$6_toExpand$$ = [];
    $nodeSet$$11$$ = new $oj$$21$$.$NodeSetWrapper$($nodeSet$$11$$, this.$insertMetadata$.bind(this), $range$$11$$);
    this.$_processNodeSet$($nodeSet$$11$$, $parent$$20_queue$$2$$, $depth$$14$$, $prevNodeSetInfo_processed$$6_toExpand$$);
    -1 === $count$$42$$ && 0 === $nodeSet$$11$$.$getCount$() && null != $parent$$20_queue$$2$$ && 0 < $depth$$14$$ ? ($prevNodeSetInfo_processed$$6_toExpand$$ = this.$_fetchFromAncestors$($parent$$20_queue$$2$$, $depth$$14$$, $callbacks$$12$$)) || null != $callbacks$$12$$ && null != $callbacks$$12$$.success && $callbacks$$12$$.success.call(null, $nodeSet$$11$$) : 0 === $prevNodeSetInfo_processed$$6_toExpand$$.length ? null != $callbacks$$12$$ && null != $callbacks$$12$$.success && $callbacks$$12$$.success.call(null, 
    $nodeSet$$11$$) : ($parent$$20_queue$$2$$ = [], $parent$$20_queue$$2$$.push($prevNodeSetInfo_processed$$6_toExpand$$), $prevNodeSetInfo_processed$$6_toExpand$$ = {}, $prevNodeSetInfo_processed$$6_toExpand$$.callbacks = $callbacks$$12$$, $prevNodeSetInfo_processed$$6_toExpand$$.nodeSet = $nodeSet$$11$$, $prevNodeSetInfo_processed$$6_toExpand$$.keys = [], this.$_syncExpandRows$($parent$$20_queue$$2$$, $prevNodeSetInfo_processed$$6_toExpand$$));
  };
  $oj$$21$$.$FlattenedTreeDataSource$.prototype.$getChildCount$ = function $$oj$$21$$$$FlattenedTreeDataSource$$$$getChildCount$$($parent$$21$$) {
    return this.$m_wrapped$.$getChildCount$($parent$$21$$);
  };
  $oj$$21$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeDataSource.prototype.getChildCount", {$getChildCount$:$oj$$21$$.$FlattenedTreeDataSource$.prototype.$getChildCount$});
  $oj$$21$$.$FlattenedTreeDataSource$.prototype.$_fetchFromAncestors$ = function $$oj$$21$$$$FlattenedTreeDataSource$$$$_fetchFromAncestors$$($parent$$22$$, $depth$$15$$, $callbacks$$13$$, $maxFetchSize$$1$$) {
    var $options$$267$$, $remainToFetch$$, $i$$293$$, $currEntry_index$$161$$, $currDepth$$, $count$$43$$, $countUnknown$$, $range$$12$$, $fetchSize$$3$$;
    void 0 === $maxFetchSize$$1$$ && ($maxFetchSize$$1$$ = this.$_getMaxFetchSize$());
    this.$_isBatchFetching$() && ($options$$267$$ = {queueOnly:!0});
    $remainToFetch$$ = $fetchSize$$3$$ = this.$_getFetchSizeToUse$(-1);
    for ($i$$293$$ = this.$_getLastIndex$() - 1;0 <= $i$$293$$;$i$$293$$--) {
      if ($currEntry_index$$161$$ = this.$_getEntry$($i$$293$$), $currDepth$$ = $currEntry_index$$161$$.depth, $currDepth$$ < $depth$$15$$ && ($parent$$22$$ = $currEntry_index$$161$$.parent, $count$$43$$ = this.$m_wrapped$.$getChildCount$($parent$$22$$), $currEntry_index$$161$$ = $currEntry_index$$161$$.index, ($countUnknown$$ = -1 === $count$$43$$) || $currEntry_index$$161$$ < $count$$43$$ - 1)) {
        $range$$12$$ = {};
        $range$$12$$.start = $currEntry_index$$161$$ + 1;
        $countUnknown$$ ? ($range$$12$$.count = Math.min($maxFetchSize$$1$$, Math.max(0, $remainToFetch$$)), $options$$267$$ = void 0) : $range$$12$$.count = Math.min($maxFetchSize$$1$$, Math.min($remainToFetch$$, $count$$43$$ - $range$$12$$.start));
        if (0 == $range$$12$$.count) {
          break;
        }
        this.$m_wrapped$.$fetchChildren$($parent$$22$$, $range$$12$$, {success:function($nodeSet$$12$$) {
          this.$_handleFetchSuccess$($nodeSet$$12$$, $parent$$22$$, $currDepth$$, $range$$12$$, $count$$43$$, $callbacks$$13$$);
        }.bind(this), error:function($status$$21$$) {
          this.$_handleFetchError$($status$$21$$, $callbacks$$13$$);
        }.bind(this)}, $options$$267$$);
        $depth$$15$$ = $currDepth$$;
        $remainToFetch$$ = Math.max(0, $remainToFetch$$ - $range$$12$$.count);
        if ($countUnknown$$ || 0 === $currDepth$$ || 0 === $remainToFetch$$) {
          break;
        }
      }
    }
    void 0 != $options$$267$$ && this.$m_wrapped$.$fetchChildren$($parent$$22$$, {start:$range$$12$$.count, count:0}, {success:function($nodeSet$$13$$) {
      this.$_handleFetchSuccess$($nodeSet$$13$$, $parent$$22$$, $currDepth$$, $range$$12$$, $count$$43$$, $callbacks$$13$$);
    }.bind(this), error:function($status$$22$$) {
      this.$_handleFetchError$($status$$22$$, $callbacks$$13$$);
    }.bind(this)});
    return $remainToFetch$$ != $fetchSize$$3$$;
  };
  $oj$$21$$.$FlattenedTreeDataSource$.prototype.$_processNodeSet$ = function $$oj$$21$$$$FlattenedTreeDataSource$$$$_processNodeSet$$($nodeSet$$14$$, $parent$$23$$, $depth$$16$$, $toExpand$$1$$) {
    var $nodeStart$$1$$, $nodeCount$$1$$, $i$$294$$, $key$$120_metadata$$8$$;
    $nodeStart$$1$$ = $nodeSet$$14$$.$getStart$();
    $nodeCount$$1$$ = $nodeSet$$14$$.$getCount$();
    for ($i$$294$$ = 0;$i$$294$$ < $nodeCount$$1$$;$i$$294$$++) {
      $key$$120_metadata$$8$$ = $nodeSet$$14$$.getMetadata($nodeStart$$1$$ + $i$$294$$), $key$$120_metadata$$8$$ = $key$$120_metadata$$8$$.key, this.$_addEntry$($key$$120_metadata$$8$$, $depth$$16$$, $nodeStart$$1$$ + $i$$294$$, $parent$$23$$), this.$_isExpanded$($key$$120_metadata$$8$$) && $toExpand$$1$$.push($key$$120_metadata$$8$$);
    }
  };
  $oj$$21$$.$FlattenedTreeDataSource$.prototype.$insertMetadata$ = function $$oj$$21$$$$FlattenedTreeDataSource$$$$insertMetadata$$($key$$121$$, $metadata$$9$$) {
    this.$_isExpanded$($key$$121$$) && !$metadata$$9$$.leaf ? $metadata$$9$$.state = "expanded" : $metadata$$9$$.state = $metadata$$9$$.leaf ? "leaf" : "collapsed";
  };
  $oj$$21$$.$FlattenedTreeDataSource$.prototype.$_fetchRowsFromDescendants$ = function $$oj$$21$$$$FlattenedTreeDataSource$$$$_fetchRowsFromDescendants$$($range$$13$$, $callbacks$$14$$) {
    var $options$$268$$ = {maxCount:this.$m_maxCount$};
    0 <= this.$_getLastIndex$() && ($options$$268$$.start = this.$_getEntry$(this.$_getLastIndex$()).key);
    this.$m_wrapped$.$fetchDescendants$(null, {success:function($nodeSet$$15$$) {
      this.$_handleFetchDescendantsSuccess$($nodeSet$$15$$, $range$$13$$, $callbacks$$14$$);
    }.bind(this), error:function($status$$23$$) {
      this.$_handleFetchError$($status$$23$$, $callbacks$$14$$);
    }.bind(this)}, $options$$268$$);
  };
  $oj$$21$$.$FlattenedTreeDataSource$.prototype.$getSortCriteria$ = function $$oj$$21$$$$FlattenedTreeDataSource$$$$getSortCriteria$$() {
    return this.$m_wrapped$.$getSortCriteria$();
  };
  $oj$$21$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeDataSource.prototype.getSortCriteria", {$getSortCriteria$:$oj$$21$$.$FlattenedTreeDataSource$.prototype.$getSortCriteria$});
  $oj$$21$$.$FlattenedTreeDataSource$.prototype.$_handleFetchDescendantsSuccess$ = function $$oj$$21$$$$FlattenedTreeDataSource$$$$_handleFetchDescendantsSuccess$$($nodeSet$$16$$, $range$$14$$, $callbacks$$15$$) {
    var $maxFetchSize$$2_options$$269$$, $actualStart$$1_count$$44$$, $lastEntry$$1$$;
    $range$$14$$.start > this.$_getLastIndex$() ? ($maxFetchSize$$2_options$$269$$ = this.$_getMaxFetchSize$(), $actualStart$$1_count$$44$$ = Math.min($maxFetchSize$$2_options$$269$$, $range$$14$$.count), $nodeSet$$16$$ = new $oj$$21$$.$NodeSetWrapper$($nodeSet$$16$$, this.$insertMetadata$.bind(this), null, this.$m_collapsedKeys$), 0 <= this.$_getLastIndex$() ? ($lastEntry$$1$$ = this.$_getLastEntry$(), $maxFetchSize$$2_options$$269$$ = {index:0, found:!1, count:0}, this.$_processDescendantsNodeSet$($nodeSet$$16$$, 
    null, 0, $lastEntry$$1$$, $actualStart$$1_count$$44$$, $maxFetchSize$$2_options$$269$$), $actualStart$$1_count$$44$$ = $maxFetchSize$$2_options$$269$$.index + 1) : ($maxFetchSize$$2_options$$269$$ = {count:0}, this.$_processDescendantsNodeSet$($nodeSet$$16$$, null, 0, null, $actualStart$$1_count$$44$$, $maxFetchSize$$2_options$$269$$), $actualStart$$1_count$$44$$ = 0), null != $callbacks$$15$$ && null != $callbacks$$15$$.success && ($nodeSet$$16$$ = null != $maxFetchSize$$2_options$$269$$ ? 0 === 
    $maxFetchSize$$2_options$$269$$.count ? new $oj$$21$$.$EmptyNodeSet$(null, $range$$14$$.start) : new $oj$$21$$.$FlattenedNodeSet$($nodeSet$$16$$, $actualStart$$1_count$$44$$) : new $oj$$21$$.$FlattenedNodeSet$($nodeSet$$16$$), $callbacks$$15$$.success.call(null, $nodeSet$$16$$))) : this.$handleMaxCountReached$($range$$14$$, $callbacks$$15$$);
  };
  $oj$$21$$.$FlattenedTreeDataSource$.prototype.$_processDescendantsNodeSet$ = function $$oj$$21$$$$FlattenedTreeDataSource$$$$_processDescendantsNodeSet$$($nodeSet$$17$$, $parent$$24$$, $depth$$17$$, $lastEntry$$2$$, $maxCount$$1$$, $options$$270$$) {
    var $nodeStart$$2$$, $nodeCount$$2$$, $i$$295$$, $childNodeSet_metadata$$10$$, $key$$122$$;
    $nodeStart$$2$$ = $nodeSet$$17$$.$getStart$();
    $nodeCount$$2$$ = $nodeSet$$17$$.$getCount$();
    for ($i$$295$$ = 0;$i$$295$$ < $nodeCount$$2$$ && $options$$270$$.count != $maxCount$$1$$;$i$$295$$++) {
      $childNodeSet_metadata$$10$$ = $nodeSet$$17$$.getMetadata($nodeStart$$2$$ + $i$$295$$);
      $key$$122$$ = $childNodeSet_metadata$$10$$.key;
      $options$$270$$.checkDepth && $lastEntry$$2$$.depth === $depth$$17$$ && ($options$$270$$.found = !0, $options$$270$$.checkDepth = !1);
      if (null == $lastEntry$$2$$ || $options$$270$$.found) {
        this.$_addEntry$($key$$122$$, $depth$$17$$, $nodeStart$$2$$ + $i$$295$$, $parent$$24$$), $options$$270$$.count += 1, $childNodeSet_metadata$$10$$.state = $childNodeSet_metadata$$10$$.leaf ? "leaf" : "expanded";
      }
      null == $lastEntry$$2$$ || $options$$270$$.found || ($key$$122$$ === $lastEntry$$2$$.key ? $childNodeSet_metadata$$10$$.leaf || this.$_isExpanded$($key$$122$$) ? $options$$270$$.found = !0 : $options$$270$$.checkDepth = !0 : $options$$270$$.index += 1);
      $nodeSet$$17$$.$getChildNodeSet$ && this.$_isExpanded$($key$$122$$) && ($childNodeSet_metadata$$10$$ = $nodeSet$$17$$.$getChildNodeSet$($i$$295$$), null != $childNodeSet_metadata$$10$$ && this.$_processDescendantsNodeSet$($childNodeSet_metadata$$10$$, $key$$122$$, $depth$$17$$ + 1, $lastEntry$$2$$, $maxCount$$1$$, $options$$270$$));
    }
  };
  $oj$$21$$.$FlattenedTreeDataSource$.prototype.expand = function $$oj$$21$$$$FlattenedTreeDataSource$$$expand$($rowKey$$13$$) {
    this.$_expand$($rowKey$$13$$);
  };
  $oj$$21$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeDataSource.prototype.expand", {expand:$oj$$21$$.$FlattenedTreeDataSource$.prototype.expand});
  $oj$$21$$.$FlattenedTreeDataSource$.prototype.$_expand$ = function $$oj$$21$$$$FlattenedTreeDataSource$$$$_expand$$($rowKey$$14$$, $options$$271$$) {
    var $count$$45$$, $fetchSize$$4$$, $maxCount$$2$$, $refIndex$$;
    $count$$45$$ = this.$m_wrapped$.$getChildCount$($rowKey$$14$$);
    $fetchSize$$4$$ = this.$_getFetchSizeToUse$($count$$45$$);
    $maxCount$$2$$ = this.$m_maxCount$;
    if (this.$_getLastIndex$() + 1 === $maxCount$$2$$ && ($refIndex$$ = this.$getIndex$($rowKey$$14$$), $refIndex$$ == $maxCount$$2$$ - 1)) {
      this.$handleExpandSuccess$($rowKey$$14$$, new $oj$$21$$.$EmptyNodeSet$($rowKey$$14$$, 0), 0, $options$$271$$);
      return;
    }
    0 == $fetchSize$$4$$ ? this.$handleExpandSuccess$($rowKey$$14$$, new $oj$$21$$.$EmptyNodeSet$($rowKey$$14$$, 0), 0, $options$$271$$) : this.$m_wrapped$.$fetchChildren$($rowKey$$14$$, {start:0, count:$fetchSize$$4$$}, {success:function($nodeSet$$18$$) {
      this.$handleExpandSuccess$($rowKey$$14$$, $nodeSet$$18$$, $count$$45$$, $options$$271$$);
    }.bind(this), error:function() {
      this.$handleExpandError$($rowKey$$14$$);
    }.bind(this)});
  };
  $oj$$21$$.$FlattenedTreeDataSource$.prototype.collapse = function $$oj$$21$$$$FlattenedTreeDataSource$$$collapse$($rowKey$$15$$) {
    var $rowIndex$$5$$, $depth$$18_i$$296_parent$$25$$, $count$$46$$, $keys$$31_lastIndex$$, $j$$37$$;
    $rowIndex$$5$$ = this.$getIndex$($rowKey$$15$$) + 1;
    $depth$$18_i$$296_parent$$25$$ = this.$_getEntry$($rowIndex$$5$$ - 1);
    $count$$46$$ = 0;
    $depth$$18_i$$296_parent$$25$$ = $depth$$18_i$$296_parent$$25$$.depth;
    $keys$$31_lastIndex$$ = this.$_getLastIndex$();
    for ($j$$37$$ = $rowIndex$$5$$;$j$$37$$ < $keys$$31_lastIndex$$ + 1;$j$$37$$++) {
      var $rowDepth$$ = this.$_getEntry$($j$$37$$).depth;
      if ($rowDepth$$ > $depth$$18_i$$296_parent$$25$$) {
        $count$$46$$ += 1;
      } else {
        if ($rowDepth$$ == $depth$$18_i$$296_parent$$25$$) {
          break;
        }
      }
    }
    if (0 != $count$$46$$) {
      this.$_isExpandAll$() ? this.$m_collapsedKeys$.push($rowKey$$15$$) : this.$_removeExpanded$($rowKey$$15$$);
      $keys$$31_lastIndex$$ = [];
      for ($depth$$18_i$$296_parent$$25$$ = 0;$depth$$18_i$$296_parent$$25$$ < $count$$46$$;$depth$$18_i$$296_parent$$25$$++) {
        $keys$$31_lastIndex$$.push({key:this.$_getEntry$($rowIndex$$5$$ + $depth$$18_i$$296_parent$$25$$).key, index:$rowIndex$$5$$ + $depth$$18_i$$296_parent$$25$$});
      }
      this.$_removeEntry$($rowIndex$$5$$, $count$$46$$);
      this.$removeRows$($keys$$31_lastIndex$$);
    }
    this.handleEvent("collapse", {rowKey:$rowKey$$15$$});
  };
  $oj$$21$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeDataSource.prototype.collapse", {collapse:$oj$$21$$.$FlattenedTreeDataSource$.prototype.collapse});
  $oj$$21$$.$FlattenedTreeDataSource$.prototype.$_isExpanded$ = function $$oj$$21$$$$FlattenedTreeDataSource$$$$_isExpanded$$($rowKey$$16$$) {
    return this.$_isExpandAll$() ? this.$m_collapsedKeys$ && 0 < this.$m_collapsedKeys$.length ? -1 === this.$_getCollapsedKeyIndex$($rowKey$$16$$) : !0 : this.$m_expandedKeys$ && 0 < this.$m_expandedKeys$.length ? -1 < this.$_getExpandedKeyIndex$($rowKey$$16$$) : !1;
  };
  $oj$$21$$.$FlattenedTreeDataSource$.prototype.$_getCollapsedKeyIndex$ = function $$oj$$21$$$$FlattenedTreeDataSource$$$$_getCollapsedKeyIndex$$($rowKey$$17$$) {
    return this.$_getKeyIndex$(this.$m_collapsedKeys$, $rowKey$$17$$);
  };
  $oj$$21$$.$FlattenedTreeDataSource$.prototype.$_getExpandedKeyIndex$ = function $$oj$$21$$$$FlattenedTreeDataSource$$$$_getExpandedKeyIndex$$($rowKey$$18$$) {
    return this.$_getKeyIndex$(this.$m_expandedKeys$, $rowKey$$18$$);
  };
  $oj$$21$$.$FlattenedTreeDataSource$.prototype.$_getKeyIndex$ = function $$oj$$21$$$$FlattenedTreeDataSource$$$$_getKeyIndex$$($arr$$22$$, $rowKey$$19$$) {
    var $i$$297$$, $index$$162$$;
    $index$$162$$ = -1;
    for ($i$$297$$ = 0;$i$$297$$ < $arr$$22$$.length;$i$$297$$++) {
      $arr$$22$$[$i$$297$$] === $rowKey$$19$$ && ($index$$162$$ = $i$$297$$);
    }
    return $index$$162$$;
  };
  $oj$$21$$.$FlattenedTreeDataSource$.prototype.$_removeExpanded$ = function $$oj$$21$$$$FlattenedTreeDataSource$$$$_removeExpanded$$($index$$163_rowKey$$20$$) {
    $index$$163_rowKey$$20$$ = this.$_getExpandedKeyIndex$($index$$163_rowKey$$20$$);
    -1 < $index$$163_rowKey$$20$$ && this.$m_expandedKeys$.splice($index$$163_rowKey$$20$$, 1);
  };
  $oj$$21$$.$FlattenedTreeDataSource$.prototype.$_removeCollapsed$ = function $$oj$$21$$$$FlattenedTreeDataSource$$$$_removeCollapsed$$($index$$164_rowKey$$21$$) {
    $index$$164_rowKey$$21$$ = this.$_getCollapsedKeyIndex$($index$$164_rowKey$$21$$);
    -1 < $index$$164_rowKey$$21$$ && this.$m_collapsedKeys$.splice($index$$164_rowKey$$21$$, 1);
  };
  $oj$$21$$.$FlattenedTreeDataSource$.prototype.$handleExpandError$ = function $$oj$$21$$$$FlattenedTreeDataSource$$$$handleExpandError$$($rowKey$$22$$) {
    this.handleEvent("expand", {rowKey:$rowKey$$22$$});
  };
  $oj$$21$$.$FlattenedTreeDataSource$.prototype.$handleExpandSuccess$ = function $$oj$$21$$$$FlattenedTreeDataSource$$$$handleExpandSuccess$$($rowKey$$23$$, $maxCount$$3_nodeSet$$19$$, $childCount_j$$38$$, $callbacks$$16_options$$272$$) {
    var $refIndex$$1$$, $rangeStart$$, $metadata$$11_rowStart$$, $rowCount$$5$$, $parent$$26$$, $depth$$19$$, $key$$123$$, $toExpand$$2$$, $i$$298$$, $queue$$4$$, $prevNodeSetInfo$$2$$;
    $maxCount$$3_nodeSet$$19$$ = new $oj$$21$$.$NodeSetWrapper$($maxCount$$3_nodeSet$$19$$, this.$insertMetadata$.bind(this));
    $rangeStart$$ = $refIndex$$1$$ = this.$getIndex$($rowKey$$23$$) + 1;
    $metadata$$11_rowStart$$ = $maxCount$$3_nodeSet$$19$$.$getStart$();
    $rowCount$$5$$ = $maxCount$$3_nodeSet$$19$$.$getCount$();
    $parent$$26$$ = this.$_getEntry$($refIndex$$1$$ - 1);
    $depth$$19$$ = $parent$$26$$.depth + 1;
    $toExpand$$2$$ = [];
    for ($i$$298$$ = $metadata$$11_rowStart$$;$i$$298$$ < $rowCount$$5$$;$i$$298$$++) {
      $metadata$$11_rowStart$$ = $maxCount$$3_nodeSet$$19$$.getMetadata($i$$298$$), $key$$123$$ = $metadata$$11_rowStart$$.key, this.$_isExpanded$($key$$123$$) && $toExpand$$2$$.push($key$$123$$), this.$_insertRow$($refIndex$$1$$, $metadata$$11_rowStart$$, $parent$$26$$.key, $i$$298$$, $depth$$19$$), $refIndex$$1$$++;
    }
    this.$_isExpandAll$() ? this.$_removeCollapsed$($rowKey$$23$$) : -1 === this.$m_expandedKeys$.indexOf($rowKey$$23$$) && this.$m_expandedKeys$.push($rowKey$$23$$);
    void 0 != $callbacks$$16_options$$272$$ && ($queue$$4$$ = $callbacks$$16_options$$272$$.queue, $prevNodeSetInfo$$2$$ = $callbacks$$16_options$$272$$.prevNodeSetInfo);
    void 0 != $prevNodeSetInfo$$2$$ && ($maxCount$$3_nodeSet$$19$$ = new $oj$$21$$.$MergedNodeSet$($prevNodeSetInfo$$2$$.nodeSet, $maxCount$$3_nodeSet$$19$$, $rowKey$$23$$));
    if (0 != $toExpand$$2$$.length || void 0 !== $queue$$4$$ && 0 != $queue$$4$$.length) {
      void 0 === $queue$$4$$ && ($queue$$4$$ = []), 0 < $toExpand$$2$$.length && $queue$$4$$.push($toExpand$$2$$), void 0 === $prevNodeSetInfo$$2$$ && ($prevNodeSetInfo$$2$$ = {}, $prevNodeSetInfo$$2$$.firstIndex = $rangeStart$$, $prevNodeSetInfo$$2$$.firstKey = $rowKey$$23$$, $prevNodeSetInfo$$2$$.keys = []), $prevNodeSetInfo$$2$$.nodeSet = $maxCount$$3_nodeSet$$19$$, $prevNodeSetInfo$$2$$.keys.push($rowKey$$23$$), this.$_syncExpandRows$($queue$$4$$, $prevNodeSetInfo$$2$$);
    } else {
      if (void 0 != $prevNodeSetInfo$$2$$) {
        $callbacks$$16_options$$272$$ = $prevNodeSetInfo$$2$$.callbacks;
        if (null != $callbacks$$16_options$$272$$) {
          $callbacks$$16_options$$272$$.success.call(null, $maxCount$$3_nodeSet$$19$$);
          return;
        }
        this.$insertRows$($prevNodeSetInfo$$2$$.firstIndex, $prevNodeSetInfo$$2$$.firstKey, $maxCount$$3_nodeSet$$19$$);
      } else {
        this.$insertRows$($rangeStart$$, $rowKey$$23$$, $maxCount$$3_nodeSet$$19$$);
      }
      $maxCount$$3_nodeSet$$19$$ = this.$m_maxCount$;
      -1 === $childCount_j$$38$$ && $rowCount$$5$$ === this.$getFetchSize$() || $childCount_j$$38$$ > $rowCount$$5$$ || $refIndex$$1$$ == $maxCount$$3_nodeSet$$19$$ ? this.$_deleteAllRowsBelow$($refIndex$$1$$) : this.$_getLastIndex$() >= $maxCount$$3_nodeSet$$19$$ && this.$_deleteAllRowsBelow$($maxCount$$3_nodeSet$$19$$);
      if (void 0 != $prevNodeSetInfo$$2$$) {
        for ($childCount_j$$38$$ = 0;$childCount_j$$38$$ < $prevNodeSetInfo$$2$$.keys.length;$childCount_j$$38$$++) {
          this.handleEvent("expand", {rowKey:$prevNodeSetInfo$$2$$.keys[$childCount_j$$38$$]});
        }
      }
      this.handleEvent("expand", {rowKey:$rowKey$$23$$});
    }
  };
  $oj$$21$$.$FlattenedTreeDataSource$.prototype.$_syncExpandRows$ = function $$oj$$21$$$$FlattenedTreeDataSource$$$$_syncExpandRows$$($queue$$5$$, $prevNodeSetInfo$$3$$) {
    var $last$$1$$, $key$$124$$;
    $last$$1$$ = $queue$$5$$[$queue$$5$$.length - 1];
    $key$$124$$ = $last$$1$$.shift();
    0 === $last$$1$$.length && $queue$$5$$.pop();
    this.$_expand$($key$$124$$, {prevNodeSetInfo:$prevNodeSetInfo$$3$$, queue:$queue$$5$$});
  };
  $oj$$21$$.$FlattenedTreeDataSource$.prototype.$_insertRow$ = function $$oj$$21$$$$FlattenedTreeDataSource$$$$_insertRow$$($index$$165$$, $key$$125_metadata$$12$$, $parentKey$$1$$, $childIndex$$, $depth$$20$$) {
    $key$$125_metadata$$12$$ = $key$$125_metadata$$12$$.key;
    $index$$165$$ <= this.$_getLastIndex$() ? this.$_addEntry$($key$$125_metadata$$12$$, $depth$$20$$, $childIndex$$, $parentKey$$1$$, $index$$165$$) : this.$_addEntry$($key$$125_metadata$$12$$, $depth$$20$$, $childIndex$$, $parentKey$$1$$);
  };
  $oj$$21$$.$FlattenedTreeDataSource$.prototype.$_deleteAllRowsBelow$ = function $$oj$$21$$$$FlattenedTreeDataSource$$$$_deleteAllRowsBelow$$($index$$166$$, $count$$47$$) {
    var $keys$$33$$;
    void 0 == $count$$47$$ && ($count$$47$$ = this.$_getLastIndex$() + 1 - $index$$166$$);
    $keys$$33$$ = [];
    for (var $i$$300$$ = 0;$i$$300$$ < $count$$47$$;$i$$300$$++) {
      $keys$$33$$.push({row:this.$_getEntry$($index$$166$$ + $i$$300$$).key, index:$index$$166$$ + $i$$300$$});
    }
    this.$_removeEntry$($index$$166$$, $count$$47$$);
    this.$removeRows$($keys$$33$$);
  };
  $oj$$21$$.$FlattenedTreeDataSource$.prototype.$_handleModelEvent$ = function $$oj$$21$$$$FlattenedTreeDataSource$$$$_handleModelEvent$$($event$$333$$) {
    var $operation$$3$$, $ancestors_parentKey$$2$$, $index$$167$$;
    $operation$$3$$ = $event$$333$$.operation;
    $ancestors_parentKey$$2$$ = $event$$333$$.parent;
    $ancestors_parentKey$$2$$ = Array.isArray($ancestors_parentKey$$2$$) ? $ancestors_parentKey$$2$$[$ancestors_parentKey$$2$$.length - 1] : $ancestors_parentKey$$2$$;
    $index$$167$$ = $event$$333$$.index;
    "insert" === $operation$$3$$ ? this.$_handleInsertEvent$($ancestors_parentKey$$2$$, $index$$167$$, $event$$333$$.data) : "delete" === $operation$$3$$ ? this.$_handleDeleteEvent$($ancestors_parentKey$$2$$, $index$$167$$) : "refresh" === $operation$$3$$ && this.$_handleRefreshEvent$($ancestors_parentKey$$2$$);
  };
  $oj$$21$$.$FlattenedTreeDataSource$.prototype.$_handleInsertEvent$ = function $$oj$$21$$$$FlattenedTreeDataSource$$$$_handleInsertEvent$$($parentKey$$3$$, $index$$168$$, $metadata$$13_nodeSet$$20$$) {
    var $insertIndex_parentIndex$$, $depth$$21$$;
    $insertIndex_parentIndex$$ = this.$getIndex$($parentKey$$3$$);
    $depth$$21$$ = this.$_getEntry$($insertIndex_parentIndex$$).depth + 1;
    $insertIndex_parentIndex$$ = $insertIndex_parentIndex$$ + $index$$168$$ + 1;
    $metadata$$13_nodeSet$$20$$ = $metadata$$13_nodeSet$$20$$.getMetadata($metadata$$13_nodeSet$$20$$.$getStart$());
    this.$_insertRow$($insertIndex_parentIndex$$, $metadata$$13_nodeSet$$20$$, $parentKey$$3$$, $index$$168$$, $depth$$21$$);
  };
  $oj$$21$$.$FlattenedTreeDataSource$.prototype.$_handleDeleteEvent$ = function $$oj$$21$$$$FlattenedTreeDataSource$$$$_handleDeleteEvent$$($parentKey$$4$$, $index$$169$$) {
    var $parentIndex$$1_startIndex$$27$$, $currentIndex$$2_parent$$28$$, $start$$44$$, $lastIndex$$1$$, $current$$19$$;
    $parentIndex$$1_startIndex$$27$$ = this.$getIndex$($parentKey$$4$$);
    $currentIndex$$2_parent$$28$$ = this.$_getEntry$($parentIndex$$1_startIndex$$27$$);
    $parentIndex$$1_startIndex$$27$$ += $index$$169$$;
    $start$$44$$ = this.$_getEntry$($parentIndex$$1_startIndex$$27$$);
    $oj$$21$$.$Assert$.assert($start$$44$$.parent === $currentIndex$$2_parent$$28$$ && $start$$44$$.depth === $currentIndex$$2_parent$$28$$.depth + 1);
    $currentIndex$$2_parent$$28$$ = $parentIndex$$1_startIndex$$27$$ + 1;
    for ($lastIndex$$1$$ = this.$_getLastIndex$();$currentIndex$$2_parent$$28$$ <= $lastIndex$$1$$;) {
      $current$$19$$ = this.$_getEntry$($currentIndex$$2_parent$$28$$);
      if ($current$$19$$.depth != $start$$44$$.depth) {
        break;
      }
      $currentIndex$$2_parent$$28$$++;
    }
    this.$_deleteAllRowsBelow$($parentIndex$$1_startIndex$$27$$, 1);
  };
  $oj$$21$$.$FlattenedTreeDataSource$.prototype.$_handleRefreshEvent$ = function $$oj$$21$$$$FlattenedTreeDataSource$$$$_handleRefreshEvent$$($parentKey$$5$$) {
    null == $parentKey$$5$$ && this.refresh();
  };
  $oj$$21$$.$FlattenedTreeDataSource$.prototype.$_isExpandAll$ = function $$oj$$21$$$$FlattenedTreeDataSource$$$$_isExpandAll$$() {
    var $capability$$ = this.$m_wrapped$.getCapability("fetchDescendants");
    return void 0 != this.$m_collapsedKeys$ && null != $capability$$ && "disable" != $capability$$;
  };
  $oj$$21$$.$FlattenedTreeDataSource$.prototype.$_isBatchFetching$ = function $$oj$$21$$$$FlattenedTreeDataSource$$$$_isBatchFetching$$() {
    return "enable" === this.$m_wrapped$.getCapability("batchFetch");
  };
  $oj$$21$$.$FlattenedTreeDataSource$.prototype.refresh = function $$oj$$21$$$$FlattenedTreeDataSource$$$refresh$() {
    this.$_clearAll$();
  };
  $oj$$21$$.$FlattenedTreeDataSource$.prototype.$getIndex$ = function $$oj$$21$$$$FlattenedTreeDataSource$$$$getIndex$$($rowKey$$24$$) {
    var $lastIndex$$2$$, $i$$301$$, $rowData$$2$$;
    $lastIndex$$2$$ = this.$_getLastIndex$();
    for ($i$$301$$ = 0;$i$$301$$ <= $lastIndex$$2$$;$i$$301$$++) {
      if ($rowData$$2$$ = this.$_getEntry$($i$$301$$), $rowData$$2$$.key == $rowKey$$24$$) {
        return $i$$301$$;
      }
    }
    return-1;
  };
  $oj$$21$$.$FlattenedTreeDataSource$.prototype.getKey = function $$oj$$21$$$$FlattenedTreeDataSource$$$getKey$($index$$170$$) {
    return 0 > $index$$170$$ || $index$$170$$ > this.$_getLastIndex$() ? null : this.$_getEntry$($index$$170$$).key;
  };
  $oj$$21$$.$FlattenedTreeDataSource$.prototype.$getFetchedRange$ = function $$oj$$21$$$$FlattenedTreeDataSource$$$$getFetchedRange$$() {
    return{start:0, end:this.$_getLastIndex$() + 1};
  };
  $oj$$21$$.$FlattenedTreeDataSource$.prototype.$getAncestors$ = function $$oj$$21$$$$FlattenedTreeDataSource$$$$getAncestors$$($index$$171_parent$$29_rowKey$$25$$) {
    var $ancestors$$1$$;
    $ancestors$$1$$ = [];
    $index$$171_parent$$29_rowKey$$25$$ = this.$getIndex$($index$$171_parent$$29_rowKey$$25$$);
    for ($index$$171_parent$$29_rowKey$$25$$ = this.$_getParent$($index$$171_parent$$29_rowKey$$25$$);null != $index$$171_parent$$29_rowKey$$25$$;) {
      $ancestors$$1$$.push($index$$171_parent$$29_rowKey$$25$$), $index$$171_parent$$29_rowKey$$25$$ = this.$getIndex$($index$$171_parent$$29_rowKey$$25$$), $index$$171_parent$$29_rowKey$$25$$ = this.$_getParent$($index$$171_parent$$29_rowKey$$25$$);
    }
    return $ancestors$$1$$.reverse();
  };
  $oj$$21$$.$FlattenedTreeDataSource$.prototype.$handleMaxCountReached$ = function $$oj$$21$$$$FlattenedTreeDataSource$$$$handleMaxCountReached$$($range$$15$$, $callbacks$$17$$) {
    null != $callbacks$$17$$ && null != $callbacks$$17$$.error && $callbacks$$17$$.error.call(null);
  };
  $oj$$21$$.$FlattenedTreeDataSource$.prototype.$insertRows$ = function $$oj$$21$$$$FlattenedTreeDataSource$$$$insertRows$$() {
    $oj$$21$$.$Assert$.$failedInAbstractFunction$();
  };
  $oj$$21$$.$FlattenedTreeDataSource$.prototype.$removeRows$ = function $$oj$$21$$$$FlattenedTreeDataSource$$$$removeRows$$() {
    $oj$$21$$.$Assert$.$failedInAbstractFunction$();
  };
  $oj$$21$$.$FlattenedTreeDataSource$.prototype.$_getLastIndex$ = function $$oj$$21$$$$FlattenedTreeDataSource$$$$_getLastIndex$$() {
    return this.$m_cache$.length - 1;
  };
  $oj$$21$$.$FlattenedTreeDataSource$.prototype.$_getLastEntry$ = function $$oj$$21$$$$FlattenedTreeDataSource$$$$_getLastEntry$$() {
    return this.$m_cache$[this.$_getLastIndex$()];
  };
  $oj$$21$$.$FlattenedTreeDataSource$.prototype.$_getEntry$ = function $$oj$$21$$$$FlattenedTreeDataSource$$$$_getEntry$$($index$$172$$) {
    return this.$m_cache$[$index$$172$$];
  };
  $oj$$21$$.$FlattenedTreeDataSource$.prototype.$_getParent$ = function $$oj$$21$$$$FlattenedTreeDataSource$$$$_getParent$$($entry$$5_index$$173$$) {
    $entry$$5_index$$173$$ = this.$m_cache$[$entry$$5_index$$173$$];
    return null != $entry$$5_index$$173$$ ? $entry$$5_index$$173$$.parent : null;
  };
  $oj$$21$$.$FlattenedTreeDataSource$.prototype.$_addEntry$ = function $$oj$$21$$$$FlattenedTreeDataSource$$$$_addEntry$$($key$$126$$, $depth$$22$$, $index$$174$$, $parent$$30$$, $insertAt$$) {
    var $rowData$$3$$ = {};
    $rowData$$3$$.key = $key$$126$$;
    $rowData$$3$$.depth = $depth$$22$$;
    $rowData$$3$$.index = $index$$174$$;
    $rowData$$3$$.parent = $parent$$30$$;
    void 0 === $insertAt$$ ? this.$m_cache$.push($rowData$$3$$) : this.$m_cache$.splice($insertAt$$, 0, $rowData$$3$$);
  };
  $oj$$21$$.$FlattenedTreeDataSource$.prototype.$_removeEntry$ = function $$oj$$21$$$$FlattenedTreeDataSource$$$$_removeEntry$$($index$$175$$, $count$$49$$) {
    this.$m_cache$.splice($index$$175$$, $count$$49$$);
  };
  $oj$$21$$.$FlattenedTreeDataSource$.prototype.$_clearAll$ = function $$oj$$21$$$$FlattenedTreeDataSource$$$$_clearAll$$() {
    this.$m_cache$.length = 0;
  };
  $oj$$21$$.$FlattenedTreeDataSource$.prototype.getCapability = function $$oj$$21$$$$FlattenedTreeDataSource$$$getCapability$($feature$$5$$) {
    return this.$m_wrapped$.getCapability($feature$$5$$);
  };
  $oj$$21$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeDataSource.prototype.getCapability", {getCapability:$oj$$21$$.$FlattenedTreeDataSource$.prototype.getCapability});
  $oj$$21$$.$__registerWidget$("oj.ojRowExpander", $$$$20$$.oj.baseComponent, {version:"1.0.0", widgetEventPrefix:"oj", options:{context:null, expand:null, collapse:null}, $classNames$:{root:"oj-rowexpander", icon:"oj-component-icon", clickable:"oj-clickable-icon-nocontext", expand:"oj-rowexpander-expand-icon", collapse:"oj-rowexpander-collapse-icon", leaf:"oj-rowexpander-leaf-icon", lazyload:"oj-rowexpander-lazyload-icon", toucharea:"oj-rowexpander-touch-area", indent:"oj-rowexpander-indent", iconspacer:"oj-rowexpander-icon-spacer", 
  depth0:"oj-rowexpander-depth-0", depth1:"oj-rowexpander-depth-1", depth2:"oj-rowexpander-depth-2", depth3:"oj-rowexpander-depth-3", depth4:"oj-rowexpander-depth-4", depth5:"oj-rowexpander-depth-5", depth6:"oj-rowexpander-depth-6", depth7:"oj-rowexpander-depth-7"}, $constants$:{$MAX_STYLE_DEPTH$:7, $NUM5_KEY$:53}, _ComponentCreate:function() {
    this._super();
    this.element.addClass(this.$classNames$.root);
    this.$_initContent$();
  }, $_initContent$:function() {
    var $self$$129$$ = this, $context$$100$$;
    $context$$100$$ = this.options.context;
    this.$component$ = $context$$100$$.component;
    this.$datasource$ = $context$$100$$.datasource;
    this.depth = $context$$100$$.depth;
    this.$iconState$ = $context$$100$$.state;
    this.$rowKey$ = $context$$100$$.key;
    this.index = $context$$100$$.index;
    this.$parentKey$ = $context$$100$$.parentKey;
    this.$_addIndentation$();
    this.$_addIcon$();
    this.$_setIconStateClass$();
    "expanded" === this.$iconState$ || "collapsed" === this.$iconState$ ? ($$$$20$$(this.$toucharea$).on("touchend", function($event$$334$$) {
      $event$$334$$.preventDefault();
      $self$$129$$.$_fireExpandCollapse$();
    }), $$$$20$$(this.$toucharea$).on("click", function($event$$335$$) {
      $event$$335$$.preventDefault();
      $self$$129$$.$_fireExpandCollapse$();
    }), $$$$20$$(this.element).on("keypress", function($event$$336$$) {
      var $code$$7$$ = $event$$336$$.keyCode || $event$$336$$.which;
      if ($code$$7$$ === $$$$20$$.ui.keyCode.ENTER || $code$$7$$ === $$$$20$$.ui.keyCode.SPACE) {
        $self$$129$$.$_fireExpandCollapse$(), $event$$336$$.preventDefault(), $event$$336$$.target.focus();
      }
    }), this.$handleKeyDownCallback$ = this.$_handleKeyDownEvent$.bind(this), $$$$20$$(this.$component$.element).on("ojkeydown", this.$handleKeyDownCallback$), this.$handleExpandCallback$ = this.$_handleExpandEvent$.bind(this), this.$handleCollapseCallback$ = this.$_handleCollapseEvent$.bind(this), this.$datasource$.on("expand", this.$handleExpandCallback$, this), this.$datasource$.on("collapse", this.$handleCollapseCallback$, this)) : "leaf" === this.$iconState$ && (this.$handleKeyDownCallback$ = 
    this.$_handleKeyDownEvent$.bind(this), $$$$20$$(this.$component$.element).on("ojkeydown", this.$handleKeyDownCallback$), $$$$20$$(this.icon).attr("tabindex", -1));
    this.$handleActiveKeyChangeCallback$ = this.$_handleActiveKeyChangeEvent$.bind(this);
    $$$$20$$(this.$component$.element).on("ojactive", this.$handleActiveKeyChangeCallback$);
  }, refresh:function() {
    this.element.empty();
    this.$_initContent$();
  }, _destroy:function() {
    $$$$20$$(this.$component$.element).off("ojkeydown", this.$handleKeyDownCallback$);
    $$$$20$$(this.$component$.element).off("ojactive", this.$handleActiveKeyChangeCallback$);
    this.$datasource$.off("expand", this.$handleExpandCallback$, this);
    this.$datasource$.off("collapse", this.$handleCollapseCallback$, this);
    this.element.removeClass(this.$classNames$.root);
    this.element.empty();
  }, _setOption:function($key$$127$$, $value$$248$$, $flags$$32$$) {
    this._super($key$$127$$, $value$$248$$, $flags$$32$$);
    "context" == $key$$127$$ && this.refresh();
  }, $_addIndentation$:function() {
    var $i$$302_remainder$$, $depth$$23$$;
    $depth$$23$$ = this.depth - 1;
    if ($depth$$23$$ < this.$constants$.$MAX_STYLE_DEPTH$) {
      this.$_appendSpacer$($depth$$23$$);
    } else {
      for ($i$$302_remainder$$ = 1;$i$$302_remainder$$ <= $depth$$23$$ / this.$constants$.$MAX_STYLE_DEPTH$;$i$$302_remainder$$++) {
        this.$_appendSpacer$(this.$constants$.$MAX_STYLE_DEPTH$);
      }
      $i$$302_remainder$$ = $depth$$23$$ % this.$constants$.$MAX_STYLE_DEPTH$;
      $i$$302_remainder$$ < this.$constants$.$MAX_STYLE_DEPTH$ && this.$_appendSpacer$($i$$302_remainder$$);
    }
  }, $_appendSpacer$:function($depth$$24_spacer$$) {
    $depth$$24_spacer$$ = $$$$20$$(document.createElement("span")).addClass(this.$classNames$.indent).addClass(this.$classNames$["depth" + $depth$$24_spacer$$]);
    this.element.append($depth$$24_spacer$$);
  }, $_addIcon$:function() {
    var $iconSpacer$$ = $$$$20$$(document.createElement("div")).addClass(this.$classNames$.iconspacer);
    this.$toucharea$ = $$$$20$$(document.createElement("div")).addClass(this.$classNames$.toucharea);
    this.icon = $$$$20$$(document.createElement("a")).attr("href", "#").attr("aria-labelledby", this.$_getLabelledBy$()).addClass(this.$classNames$.icon).addClass(this.$classNames$.clickable);
    this.element.append($iconSpacer$$.append(this.$toucharea$.append(this.icon)));
  }, $_addIconClass$:function($classKey$$) {
    this.icon.addClass(this.$classNames$[$classKey$$]);
  }, $_removeIconClass$:function($classKey$$1$$) {
    this.icon.removeClass(this.$classNames$[$classKey$$1$$]);
  }, $_setIconStateClass$:function() {
    switch(this.$iconState$) {
      case "leaf":
        this.$_removeIconClass$("icon");
        this.$_removeIconClass$("clickable");
        this.$_addIconClass$("leaf");
        break;
      case "collapsed":
        this.$_addIconClass$("expand");
        this.$_ariaExpanded$(!1);
        break;
      case "expanded":
        this.$_addIconClass$("collapse");
        this.$_ariaExpanded$(!0);
        break;
      case "loading":
        this.$_removeIconClass$("clickable"), this.$_addIconClass$("lazyload");
    }
  }, $_removeIconStateClass$:function() {
    switch(this.$iconState$) {
      case "leaf":
        this.$_removeIconClass$("leaf");
        this.$_addIconClass$("icon");
        this.$_addIconClass$("clickable");
        break;
      case "collapsed":
        this.$_removeIconClass$("expand");
        break;
      case "expanded":
        this.$_removeIconClass$("collapse");
        break;
      case "loading":
        this.$_removeIconClass$("lazyload"), this.$_addIconClass$("clickable");
    }
  }, $_handleActiveKeyChangeEvent$:function($event$$337$$, $ui$$18$$) {
    var $context$$101_rowKey$$26$$, $state$$9$$;
    null != $ui$$18$$.activeKey && ($context$$101_rowKey$$26$$ = $ui$$18$$.activeKey.rowKey, this.$rowKey$ !== $context$$101_rowKey$$26$$ || null != $ui$$18$$.previousActiveKey && $ui$$18$$.previousActiveKey.row == $ui$$18$$.activeKey.row || !this.$component$.$_setAccessibleContext$ || ($context$$101_rowKey$$26$$ = this.$getTranslatedString$("accessibleRowDescription", {level:this.depth, num:this.index + 1, total:this.$datasource$.getWrappedDataSource().$getChildCount$(this.$parentKey$)}), $state$$9$$ = 
    "collapsed" === this.$iconState$ ? this.$getTranslatedString$("accessibleStateCollapsed") : "expanded" === this.$iconState$ ? this.$getTranslatedString$("accessibleStateExpanded") : "", this.$component$.$_setAccessibleContext$({context:$context$$101_rowKey$$26$$, state:$state$$9$$})));
  }, $_handleKeyDownEvent$:function($event$$338$$, $ui$$19$$) {
    var $ancestors$$2_code$$8_context$$102$$, $ancestorInfo$$, $i$$303$$;
    if (this.$rowKey$ === $ui$$19$$.rowKey && ($event$$338$$ = $event$$338$$.originalEvent, $ancestors$$2_code$$8_context$$102$$ = $event$$338$$.keyCode || $event$$338$$.which, $oj$$21$$.$DomUtils$.$isMetaKeyPressed$($event$$338$$))) {
      if ($ancestors$$2_code$$8_context$$102$$ == $$$$20$$.ui.keyCode.RIGHT && "collapsed" === this.$iconState$) {
        this.$_loading$(), this.$datasource$.expand(this.$rowKey$), $event$$338$$.preventDefault();
      } else {
        if ($ancestors$$2_code$$8_context$$102$$ == $$$$20$$.ui.keyCode.LEFT && "expanded" === this.$iconState$) {
          this.$_loading$(), this.$datasource$.collapse(this.$rowKey$), $event$$338$$.preventDefault();
        } else {
          if ($event$$338$$.altKey && $ancestors$$2_code$$8_context$$102$$ == this.$constants$.$NUM5_KEY$ && this.$component$.$_setAccessibleContext$) {
            $ancestors$$2_code$$8_context$$102$$ = this.$datasource$.$getAncestors$(this.$rowKey$);
            if (null != $ancestors$$2_code$$8_context$$102$$ && 0 < $ancestors$$2_code$$8_context$$102$$.length) {
              for ($ancestorInfo$$ = [], $i$$303$$ = 0;$i$$303$$ < $ancestors$$2_code$$8_context$$102$$.length;$i$$303$$++) {
                $ancestorInfo$$.push({key:$ancestors$$2_code$$8_context$$102$$[$i$$303$$], label:this.$getTranslatedString$("accessibleLevelDescription", {level:$i$$303$$ + 1})});
              }
            }
            $ancestors$$2_code$$8_context$$102$$ = this.$getTranslatedString$("accessibleRowDescription", {level:this.depth, num:this.index + 1, total:this.$datasource$.getWrappedDataSource().$getChildCount$(this.$parentKey$)});
            this.$component$.$_setAccessibleContext$({context:$ancestors$$2_code$$8_context$$102$$, state:"", ancestors:$ancestorInfo$$});
            $event$$338$$.preventDefault();
          }
        }
      }
    }
  }, $_loading$:function() {
    this.$_removeIconStateClass$();
    this.$iconState$ = "loading";
    this.$_setIconStateClass$();
  }, $_handleExpandEvent$:function($event$$339_rowKey$$28$$) {
    $event$$339_rowKey$$28$$ = $event$$339_rowKey$$28$$.rowKey;
    $event$$339_rowKey$$28$$ === this.$rowKey$ && (this.$_removeIconStateClass$(), this.$iconState$ = "expanded", this.$_setIconStateClass$(), this.$_ariaExpanded$(!0), this._trigger("expand", null, {rowKey:$event$$339_rowKey$$28$$}));
  }, $_handleCollapseEvent$:function($event$$340_rowKey$$29$$) {
    $event$$340_rowKey$$29$$ = $event$$340_rowKey$$29$$.rowKey;
    $event$$340_rowKey$$29$$ === this.$rowKey$ && (this.$_removeIconStateClass$(), this.$iconState$ = "collapsed", this.$_setIconStateClass$(), this.$_ariaExpanded$(!1), this._trigger("collapse", null, {rowKey:$event$$340_rowKey$$29$$}));
  }, $_fireExpandCollapse$:function() {
    var $state$$10$$ = this.$iconState$;
    this.$_loading$();
    "collapsed" === $state$$10$$ ? this.$datasource$.expand(this.$rowKey$) : "expanded" === $state$$10$$ && this.$datasource$.collapse(this.$rowKey$);
  }, $_ariaExpanded$:function($bool$$) {
    this.icon.attr("aria-expanded", $bool$$);
  }, getNodeBySubId:function($locator$$30_subId$$34$$) {
    if (null == $locator$$30_subId$$34$$) {
      return this.element ? this.element[0] : null;
    }
    $locator$$30_subId$$34$$ = $locator$$30_subId$$34$$.subId;
    return "oj-rowexpander-disclosure" !== $locator$$30_subId$$34$$ && "oj-rowexpander-icon" !== $locator$$30_subId$$34$$ || null == this.icon ? null : this.icon.get(0);
  }, getSubIdByNode:function($node$$75$$) {
    return $node$$75$$ === this.icon.get(0) ? {$subId$:"oj-rowexpander-disclosure"} : null;
  }, $_NotifyAttached$:function() {
    this._super();
    this.icon.attr("aria-labelledby", this.$_getLabelledBy$());
  }, $_getLabelledBy$:function() {
    return this.element.parent().closest("[id]").attr("id");
  }});
});

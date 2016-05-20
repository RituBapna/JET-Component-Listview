/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
define(["ojs/ojcore", "jquery", "promise", "ojs/ojdatasource-common"], function($oj$$18$$, $$$$17$$) {
  $oj$$18$$.$Cube$ = function $$oj$$18$$$$Cube$$($rowset$$, $layout$$) {
    this.Init();
    this.$_rows$ = $rowset$$;
    this.$_layout$ = $layout$$;
    this.$BuildCube$();
  };
  $goog$exportPath_$$("Cube", $oj$$18$$.$Cube$, $oj$$18$$);
  $oj$$18$$.$Object$.$createSubclass$($oj$$18$$.$Cube$, $oj$$18$$.$Object$, "oj.Cube");
  $oj$$18$$.$Cube$.prototype.Init = function $$oj$$18$$$$Cube$$$Init$() {
    $oj$$18$$.$Cube$.$superclass$.Init.call(this);
  };
  $oj$$18$$.$Cube$.prototype.$getAxes$ = function $$oj$$18$$$$Cube$$$$getAxes$$() {
    var $cube_i$$313$$ = this.$_getPinnedCube$(), $axes$$ = [];
    Array.prototype.push.apply($axes$$, $cube_i$$313$$ ? $cube_i$$313$$.$getAxes$() : this.$_axes$);
    for ($cube_i$$313$$ = 2;$cube_i$$313$$ < this.$_axes$.length;$cube_i$$313$$++) {
      $axes$$.push(this.$_axes$[$cube_i$$313$$]);
    }
    return $axes$$;
  };
  $oj$$18$$.$Object$.$exportPrototypeSymbol$("Cube.prototype.getAxes", {$getAxes$:$oj$$18$$.$Cube$.prototype.$getAxes$});
  $oj$$18$$.$Cube$.prototype.$_getNonPageLayout$ = function $$oj$$18$$$$Cube$$$$_getNonPageLayout$$() {
    return this.$_axes$;
  };
  $oj$$18$$.$Cube$.prototype.$getValues$ = function $$oj$$18$$$$Cube$$$$getValues$$($ind_indices$$5_val$$44$$) {
    var $cube$$1_origRet$$ = this.$_getPinnedCube$();
    $ind_indices$$5_val$$44$$ = $cube$$1_origRet$$.$_normalizeIndices$($ind_indices$$5_val$$44$$);
    for ($ind_indices$$5_val$$44$$ = $cube$$1_origRet$$ = $cube$$1_origRet$$.$_walkIndex$($ind_indices$$5_val$$44$$, 0, []);Array.isArray($ind_indices$$5_val$$44$$) && 1 === $ind_indices$$5_val$$44$$.length;) {
      if ($ind_indices$$5_val$$44$$ = $ind_indices$$5_val$$44$$[0], !Array.isArray($ind_indices$$5_val$$44$$)) {
        return $ind_indices$$5_val$$44$$;
      }
    }
    return $cube$$1_origRet$$;
  };
  $oj$$18$$.$Object$.$exportPrototypeSymbol$("Cube.prototype.getValues", {$getValues$:$oj$$18$$.$Cube$.prototype.$getValues$});
  $oj$$18$$.$Cube$.prototype.setPage = function $$oj$$18$$$$Cube$$$setPage$($pin$$) {
    this.$_pin$ = $pin$$ instanceof Array ? $pin$$ : [$pin$$];
  };
  $oj$$18$$.$Cube$.prototype.$pivot$ = function $$oj$$18$$$$Cube$$$$pivot$$($axisFrom_axisToObj_levelFromObj$$, $levelFrom$$, $axisTo_levelsFrom$$, $levelTo$$, $type$$83$$) {
    var $layout$$1_levelsTo$$ = this.$_layout$, $axisFromObj$$ = this.$_findAxisInLayout$($axisFrom_axisToObj_levelFromObj$$);
    if (!$axisFromObj$$) {
      return!1;
    }
    $axisFrom_axisToObj_levelFromObj$$ = null;
    $axisTo_levelsFrom$$ < $layout$$1_levelsTo$$.length ? $axisFrom_axisToObj_levelFromObj$$ = this.$_findAxisInLayout$($axisTo_levelsFrom$$) : ($axisFrom_axisToObj_levelFromObj$$ = {axis:$axisTo_levelsFrom$$, levels:[]}, $layout$$1_levelsTo$$.push($axisFrom_axisToObj_levelFromObj$$));
    $axisTo_levelsFrom$$ = $axisFromObj$$.levels;
    $layout$$1_levelsTo$$ = $axisFrom_axisToObj_levelFromObj$$.levels;
    $axisFrom_axisToObj_levelFromObj$$ = $levelFrom$$ < $axisTo_levelsFrom$$.length ? $axisTo_levelsFrom$$[$levelFrom$$] : null;
    if (!$axisFrom_axisToObj_levelFromObj$$) {
      return!1;
    }
    $levelTo$$ >= $layout$$1_levelsTo$$.length ? ($layout$$1_levelsTo$$.push($axisFrom_axisToObj_levelFromObj$$), $axisTo_levelsFrom$$.splice($levelFrom$$, 1)) : $type$$83$$ === $oj$$18$$.$Cube$.$PivotType$.SWAP ? ($axisTo_levelsFrom$$[$levelFrom$$] = $layout$$1_levelsTo$$[$levelTo$$], $layout$$1_levelsTo$$[$levelTo$$] = $axisFrom_axisToObj_levelFromObj$$) : ($type$$83$$ === $oj$$18$$.$Cube$.$PivotType$.AFTER && $levelTo$$++, $layout$$1_levelsTo$$.splice($levelTo$$, 0, $axisFrom_axisToObj_levelFromObj$$), 
    $layout$$1_levelsTo$$ === $axisTo_levelsFrom$$ && $levelTo$$ < $levelFrom$$ && $levelFrom$$++, $axisTo_levelsFrom$$.splice($levelFrom$$, 1));
    this.$BuildCube$();
    return!0;
  };
  $oj$$18$$.$Object$.$exportPrototypeSymbol$("Cube.prototype.pivot", {$pivot$:$oj$$18$$.$Cube$.prototype.$pivot$});
  $oj$$18$$.$Cube$.prototype.$_findAxisInLayout$ = function $$oj$$18$$$$Cube$$$$_findAxisInLayout$$($axis$$43$$) {
    for (var $i$$314$$ = 0;$i$$314$$ < this.$_layout$.length;$i$$314$$++) {
      if (this.$_layout$[$i$$314$$].axis === $axis$$43$$) {
        return this.$_layout$[$i$$314$$];
      }
    }
    return null;
  };
  $oj$$18$$.$Cube$.prototype.$getLayout$ = function $$oj$$18$$$$Cube$$$$getLayout$$() {
    return this.$_layout$;
  };
  $oj$$18$$.$Object$.$exportPrototypeSymbol$("Cube.prototype.getLayout", {$getLayout$:$oj$$18$$.$Cube$.prototype.$getLayout$});
  $oj$$18$$.$Cube$.$PivotType$ = {BEFORE:"before", AFTER:"after", SWAP:"swap"};
  $goog$exportPath_$$("Cube.PivotType", $oj$$18$$.$Cube$.$PivotType$, $oj$$18$$);
  $oj$$18$$.$Cube$.prototype.$_walkIndex$ = function $$oj$$18$$$$Cube$$$$_walkIndex$$($count$$33_indices$$6$$, $depth$$12_loc$$3$$, $location$$24$$) {
    var $returnValue$$6$$ = [];
    if (0 === $count$$33_indices$$6$$.length) {
      return $depth$$12_loc$$3$$ = $location$$24$$.slice(0), this.$_getValue$($depth$$12_loc$$3$$);
    }
    var $remaining$$ = $count$$33_indices$$6$$.slice(1), $start$$41$$ = $count$$33_indices$$6$$[0].start;
    $count$$33_indices$$6$$ = $count$$33_indices$$6$$[0].count;
    for ($location$$24$$[$depth$$12_loc$$3$$] = $start$$41$$;$location$$24$$[$depth$$12_loc$$3$$] < $start$$41$$ + $count$$33_indices$$6$$;$location$$24$$[$depth$$12_loc$$3$$]++) {
      $returnValue$$6$$.push(this.$_walkIndex$($remaining$$, $depth$$12_loc$$3$$ + 1, $location$$24$$));
    }
    return $returnValue$$6$$;
  };
  $oj$$18$$.$Cube$.prototype.$_normalizeIndices$ = function $$oj$$18$$$$Cube$$$$_normalizeIndices$$($indices$$7$$) {
    var $ind$$1$$ = [];
    if (!$indices$$7$$) {
      return $ind$$1$$;
    }
    for (var $numAxes$$ = Math.min($indices$$7$$.length, this.$_axes$.length), $a$$86$$ = 0;$a$$86$$ < $numAxes$$;$a$$86$$++) {
      var $index$$153$$ = $indices$$7$$[$a$$86$$];
      $index$$153$$ instanceof Object && ($index$$153$$.hasOwnProperty("start") || $index$$153$$.hasOwnProperty("count")) ? $index$$153$$.hasOwnProperty("start") ? $index$$153$$.hasOwnProperty("count") ? $ind$$1$$.push(this.$_generateIndex$($index$$153$$.start, $index$$153$$.count, $a$$86$$)) : $ind$$1$$.push(this.$_generateIndex$($index$$153$$.start, 1, $a$$86$$)) : $ind$$1$$.push(this.$_generateIndex$(0, $index$$153$$.count, $a$$86$$)) : $ind$$1$$.push(this.$_generateIndex$($index$$153$$, 1, $a$$86$$));
    }
    return $ind$$1$$;
  };
  $oj$$18$$.$Cube$.prototype.$_generateIndex$ = function $$oj$$18$$$$Cube$$$$_generateIndex$$($start$$42$$, $count$$34$$, $axis$$44_trueCount$$) {
    $axis$$44_trueCount$$ = this.$getAxes$()[$axis$$44_trueCount$$].getExtent();
    if ($start$$42$$ >= $axis$$44_trueCount$$ || 0 > $start$$42$$) {
      $start$$42$$ = 0;
    }
    $count$$34$$ = Math.min($count$$34$$, $axis$$44_trueCount$$ - $start$$42$$);
    return{start:$start$$42$$, index:$start$$42$$, count:$count$$34$$};
  };
  $oj$$18$$.$Cube$.prototype.$_getValue$ = function $$oj$$18$$$$Cube$$$$_getValue$$($indices$$8$$) {
    var $hash$$2_key$$98_obj$$61$$ = this.$_createCubeKeys$($indices$$8$$);
    return $hash$$2_key$$98_obj$$61$$ && ($hash$$2_key$$98_obj$$61$$ = $hash$$2_key$$98_obj$$61$$.$GetHashCodes$(), 0 < $hash$$2_key$$98_obj$$61$$.length && ($hash$$2_key$$98_obj$$61$$ = this.$_data$[$hash$$2_key$$98_obj$$61$$[0].key])) ? new $oj$$18$$.$CubeDataValue$($hash$$2_key$$98_obj$$61$$.value, $indices$$8$$, $hash$$2_key$$98_obj$$61$$.$aggType$, $hash$$2_key$$98_obj$$61$$.rows, $hash$$2_key$$98_obj$$61$$.$square$) : new $oj$$18$$.$CubeDataValue$(null, $indices$$8$$, void 0, []);
  };
  $oj$$18$$.$Cube$.prototype.$GenerateAxes$ = function $$oj$$18$$$$Cube$$$$GenerateAxes$$() {
    var $nonPageLayout_pageLayout$$ = this.$_getPageLayout$();
    this.$_pin$ = [];
    for (var $i$$315$$ = 0;$i$$315$$ < $nonPageLayout_pageLayout$$.length;$i$$315$$++) {
      this.$_getAxis$($nonPageLayout_pageLayout$$[$i$$315$$].axis, $nonPageLayout_pageLayout$$[$i$$315$$].levels), this.$_pin$.push({axis:$nonPageLayout_pageLayout$$[$i$$315$$].axis, index:0});
    }
    if (0 === $nonPageLayout_pageLayout$$.length) {
      for ($nonPageLayout_pageLayout$$ = this.$_getNonPageLayout$(), $i$$315$$ = 0;$i$$315$$ < $nonPageLayout_pageLayout$$.length;$i$$315$$++) {
        this.$_getAxis$($nonPageLayout_pageLayout$$[$i$$315$$].axis, $nonPageLayout_pageLayout$$[$i$$315$$].levels);
      }
    }
  };
  $oj$$18$$.$Cube$.prototype.$_getPageLayout$ = function $$oj$$18$$$$Cube$$$$_getPageLayout$$() {
    for (var $pageOnlyLayout$$ = [], $i$$316$$ = 0;$i$$316$$ < this.$_layout$.length;$i$$316$$++) {
      1 < this.$_layout$[$i$$316$$].axis && $pageOnlyLayout$$.push(this.$_layout$[$i$$316$$]);
    }
    return $pageOnlyLayout$$;
  };
  $oj$$18$$.$Cube$.prototype.$_getNonPageLayout$ = function $$oj$$18$$$$Cube$$$$_getNonPageLayout$$() {
    for (var $nonPageLayout$$1$$ = [], $i$$317$$ = 0;$i$$317$$ < this.$_layout$.length;$i$$317$$++) {
      2 > this.$_layout$[$i$$317$$].axis && $nonPageLayout$$1$$.push(this.$_layout$[$i$$317$$]);
    }
    return $nonPageLayout$$1$$;
  };
  $oj$$18$$.$Cube$.prototype.$BuildCube$ = function $$oj$$18$$$$Cube$$$$BuildCube$$() {
    this.$_axes$ = [];
    this.$_data$ = [];
    this.$_cubes$ = [];
    this.$GenerateAxes$();
    if (null !== this.$_rows$) {
      for (var $row$$64$$ = 0;$row$$64$$ < this.$_rows$.length;$row$$64$$++) {
        for (var $pageHashObj_pageKey$$ = new $oj$$18$$.$CubeKeys$, $axis$$47_hash$$3_pageHash$$ = 2;$axis$$47_hash$$3_pageHash$$ < this.$_axes$.length;$axis$$47_hash$$3_pageHash$$++) {
          $pageHashObj_pageKey$$ = this.$_axes$[$axis$$47_hash$$3_pageHash$$].$ProcessRow$(this.$_rows$[$row$$64$$], $pageHashObj_pageKey$$);
        }
        for (var $pageHashObj_pageKey$$ = $pageHashObj_pageKey$$.$GetHashCodes$(), $ph$$ = 0;$ph$$ < $pageHashObj_pageKey$$.length;$ph$$++) {
          var $axis$$47_hash$$3_pageHash$$ = $pageHashObj_pageKey$$[$ph$$].key, $cube$$2$$ = this.$_cubes$[$axis$$47_hash$$3_pageHash$$];
          $cube$$2$$ || ($cube$$2$$ = this.$_cubes$[$axis$$47_hash$$3_pageHash$$] = this.$GenerateCube$(this.$_getNonPageLayout$()));
          for (var $dataHash_keys$$24$$ = new $oj$$18$$.$CubeKeys$, $h$$5_maxAxes$$ = $cube$$2$$.$_axes$.length, $axis$$47_hash$$3_pageHash$$ = 0;$axis$$47_hash$$3_pageHash$$ < $h$$5_maxAxes$$;$axis$$47_hash$$3_pageHash$$++) {
            $dataHash_keys$$24$$ = $cube$$2$$.$_axes$[$axis$$47_hash$$3_pageHash$$].$ProcessRow$(this.$_rows$[$row$$64$$], $dataHash_keys$$24$$);
          }
          $dataHash_keys$$24$$ = $axis$$47_hash$$3_pageHash$$ = $dataHash_keys$$24$$.$GetHashCodes$();
          if (void 0 !== $pageHashObj_pageKey$$[$ph$$].$dataValue$) {
            for ($dataHash_keys$$24$$ = [], $h$$5_maxAxes$$ = 0;$h$$5_maxAxes$$ < $axis$$47_hash$$3_pageHash$$.length;$h$$5_maxAxes$$++) {
              $dataHash_keys$$24$$.push($pageHashObj_pageKey$$[$ph$$]);
            }
          }
          $cube$$2$$.$_storeData$($axis$$47_hash$$3_pageHash$$, $dataHash_keys$$24$$, this.$_rows$[$row$$64$$]);
        }
      }
    }
  };
  $oj$$18$$.$Cube$.prototype.$_storeData$ = function $$oj$$18$$$$Cube$$$$_storeData$$($hash$$4$$, $dataHash$$1$$, $row$$65$$) {
    for (var $i$$318$$ = 0;$i$$318$$ < $hash$$4$$.length;$i$$318$$++) {
      this.$_data$[$hash$$4$$[$i$$318$$].key] = this.$_aggregate$($dataHash$$1$$[$i$$318$$], this.$_data$[$hash$$4$$[$i$$318$$].key], $row$$65$$);
    }
  };
  $oj$$18$$.$Cube$.prototype.$_getPinnedCube$ = function $$oj$$18$$$$Cube$$$$_getPinnedCube$$() {
    return this.$_cubes$[this.$_getHashFromPin$(this.$_pin$)];
  };
  $oj$$18$$.$Cube$.prototype.$_getHashFromPin$ = function $$oj$$18$$$$Cube$$$$_getHashFromPin$$($pin$$1$$) {
    var $keys$$25$$ = new $oj$$18$$.$CubeKeys$;
    if ($pin$$1$$ && 0 < $pin$$1$$.length) {
      $pin$$1$$.sort(function($a$$87$$, $b$$60$$) {
        return $a$$87$$.axis - $b$$60$$.axis;
      });
      for (var $axes$$1$$ = this.$_axes$, $i$$319$$ = 0;$i$$319$$ < $pin$$1$$.length;$i$$319$$++) {
        $keys$$25$$ = $axes$$1$$[$pin$$1$$[$i$$319$$].axis].$GetCubeKeys$($pin$$1$$[$i$$319$$].index, $keys$$25$$);
      }
    }
    return $keys$$25$$.$GetHashCodes$()[0].key;
  };
  $oj$$18$$.$Cube$.$_isValid$ = function $$oj$$18$$$$Cube$$$_isValid$$($value$$236$$) {
    return $value$$236$$ ? void 0 !== $value$$236$$.value && null !== $value$$236$$.value : !1;
  };
  $oj$$18$$.$Cube$.prototype.$_createAggValue$ = function $$oj$$18$$$$Cube$$$$_createAggValue$$($value$$237$$, $aggType$$, $rows$$14$$, $retObj$$12_row$$66$$, $props$$14$$) {
    $rows$$14$$.push($retObj$$12_row$$66$$);
    $retObj$$12_row$$66$$ = {};
    for (var $p$$5$$ in $props$$14$$) {
      $props$$14$$.hasOwnProperty($p$$5$$) && ($retObj$$12_row$$66$$[$p$$5$$] = $props$$14$$[$p$$5$$]);
    }
    $retObj$$12_row$$66$$.value = $value$$237$$;
    $retObj$$12_row$$66$$.$aggType$ = $aggType$$;
    $retObj$$12_row$$66$$.rows = $rows$$14$$;
    return $retObj$$12_row$$66$$;
  };
  $oj$$18$$.$Cube$.$_isNumber$ = function $$oj$$18$$$$Cube$$$_isNumber$$($value$$238$$) {
    return $oj$$18$$.$StringUtils$.$isString$($value$$238$$.value) ? !1 : !isNaN($value$$238$$.value);
  };
  $oj$$18$$.$Cube$.prototype.$_aggregate$ = function $$oj$$18$$$$Cube$$$$_aggregate$$($hash$$5_val$$45$$, $currValue$$2$$, $row$$67$$) {
    var $aggObj$$ = this.$GetAggType$($hash$$5_val$$45$$.$dataValue$), $aggType$$1$$ = $aggObj$$.$aggregation$, $avg_validCurr$$ = $oj$$18$$.$Cube$.$_isValid$($currValue$$2$$), $validHash$$ = $oj$$18$$.$Cube$.$_isValid$($hash$$5_val$$45$$), $isNumCurr$$ = $avg_validCurr$$ && $oj$$18$$.$Cube$.$_isNumber$($currValue$$2$$), $isNumHash$$ = $validHash$$ && $oj$$18$$.$Cube$.$_isNumber$($hash$$5_val$$45$$);
    switch($aggType$$1$$) {
      case $oj$$18$$.$CubeAggType$.SUM:
        return $avg_validCurr$$ && $validHash$$ ? $isNumCurr$$ && $isNumHash$$ ? this.$_createAggValue$($currValue$$2$$.value + $hash$$5_val$$45$$.value, $aggType$$1$$, $currValue$$2$$.rows, $row$$67$$, {}) : this.$_createAggValue$(NaN, $aggType$$1$$, $currValue$$2$$.rows, $row$$67$$, {}) : $validHash$$ && !$avg_validCurr$$ ? $isNumHash$$ ? this.$_createAggValue$($hash$$5_val$$45$$.value, $aggType$$1$$, [], $row$$67$$, {}) : this.$_createAggValue$(NaN, $aggType$$1$$, [], $row$$67$$, {}) : $currValue$$2$$;
      case $oj$$18$$.$CubeAggType$.AVERAGE:
        return $avg_validCurr$$ && $validHash$$ ? $isNumCurr$$ && $isNumHash$$ ? this.$_createAggValue$(($currValue$$2$$.$sum$ + $hash$$5_val$$45$$.value) / ($currValue$$2$$.rows.length + 1), $aggType$$1$$, $currValue$$2$$.rows, $row$$67$$, {$sum$:$currValue$$2$$.$sum$ + $hash$$5_val$$45$$.value}) : this.$_createAggValue$(NaN, $aggType$$1$$, $currValue$$2$$.rows, $row$$67$$, {$sum$:$currValue$$2$$.$sum$}) : $validHash$$ && !$avg_validCurr$$ ? $isNumHash$$ ? this.$_createAggValue$($hash$$5_val$$45$$.value, 
        $aggType$$1$$, [], $row$$67$$, {$sum$:$hash$$5_val$$45$$.value}) : this.$_createAggValue$(NaN, $aggType$$1$$, [], $row$$67$$, {$sum$:NaN}) : $currValue$$2$$;
      case $oj$$18$$.$CubeAggType$.VARIANCE:
      ;
      case $oj$$18$$.$CubeAggType$.STDDEV:
        return $avg_validCurr$$ && $validHash$$ ? $isNumCurr$$ && $isNumHash$$ ? ($avg_validCurr$$ = $currValue$$2$$.value + ($hash$$5_val$$45$$.value - $currValue$$2$$.value) / ($currValue$$2$$.rows.length + 1), this.$_createAggValue$($avg_validCurr$$, $aggType$$1$$, $currValue$$2$$.rows, $row$$67$$, {$square$:$currValue$$2$$.$square$ + ($hash$$5_val$$45$$.value - $currValue$$2$$.value) * ($hash$$5_val$$45$$.value - $avg_validCurr$$)})) : this.$_createAggValue$(NaN, $aggType$$1$$, $currValue$$2$$.rows, 
        $row$$67$$, {$square$:NaN}) : $validHash$$ && !$avg_validCurr$$ ? $isNumHash$$ ? this.$_createAggValue$($hash$$5_val$$45$$.value, $aggType$$1$$, [], $row$$67$$, {$square$:0}) : this.$_createAggValue$(NaN, $aggType$$1$$, [], $row$$67$$, {$square$:NaN}) : $currValue$$2$$;
      case $oj$$18$$.$CubeAggType$.NONE:
        return this.$_createAggValue$(null, $aggType$$1$$, $avg_validCurr$$ ? $currValue$$2$$.rows : [], $row$$67$$, {});
      case $oj$$18$$.$CubeAggType$.FIRST:
        return $avg_validCurr$$ ? this.$_createAggValue$($currValue$$2$$.value, $aggType$$1$$, $currValue$$2$$.rows, $row$$67$$, {}) : $validHash$$ ? this.$_createAggValue$($hash$$5_val$$45$$.value, $aggType$$1$$, [], $row$$67$$, {}) : $currValue$$2$$;
      case $oj$$18$$.$CubeAggType$.MIN:
        return $avg_validCurr$$ && $validHash$$ ? $isNumCurr$$ && $isNumHash$$ ? this.$_createAggValue$(Math.min($currValue$$2$$.value, $hash$$5_val$$45$$.value), $aggType$$1$$, $currValue$$2$$.rows, $row$$67$$, {}) : this.$_createAggValue$(NaN, $aggType$$1$$, $currValue$$2$$.rows, $row$$67$$, {}) : $validHash$$ && !$avg_validCurr$$ ? $isNumHash$$ ? this.$_createAggValue$($hash$$5_val$$45$$.value, $aggType$$1$$, [], $row$$67$$, {}) : this.$_createAggValue$(NaN, $aggType$$1$$, [], $row$$67$$, {}) : 
        $currValue$$2$$;
      case $oj$$18$$.$CubeAggType$.MAX:
        return $avg_validCurr$$ && $validHash$$ ? $isNumCurr$$ && $isNumHash$$ ? this.$_createAggValue$(Math.max($currValue$$2$$.value, $hash$$5_val$$45$$.value), $aggType$$1$$, $currValue$$2$$.rows, $row$$67$$, {}) : this.$_createAggValue$(NaN, $aggType$$1$$, $currValue$$2$$.rows, $row$$67$$, {}) : $validHash$$ && !$avg_validCurr$$ ? $isNumHash$$ ? this.$_createAggValue$($hash$$5_val$$45$$.value, $aggType$$1$$, [], $row$$67$$, {}) : this.$_createAggValue$(NaN, $aggType$$1$$, [], $row$$67$$, {}) : 
        $currValue$$2$$;
      case $oj$$18$$.$CubeAggType$.COUNT:
        return $avg_validCurr$$ && $validHash$$ ? this.$_createAggValue$($currValue$$2$$.value + 1, $aggType$$1$$, $currValue$$2$$.rows, $row$$67$$, {}) : $validHash$$ && !$avg_validCurr$$ ? this.$_createAggValue$(1, $aggType$$1$$, [], $row$$67$$, {}) : $currValue$$2$$;
      case $oj$$18$$.$CubeAggType$.CUSTOM:
        return $hash$$5_val$$45$$ = $aggObj$$.$callback$.call(this, $avg_validCurr$$ ? $currValue$$2$$.value : void 0, $validHash$$ ? $hash$$5_val$$45$$.value : void 0), this.$_createAggValue$($hash$$5_val$$45$$, $aggType$$1$$, $avg_validCurr$$ ? $currValue$$2$$.rows : [], $row$$67$$, {});
    }
  };
  $oj$$18$$.$Cube$.prototype.$_getAxis$ = function $$oj$$18$$$$Cube$$$$_getAxis$$($axis$$48$$, $levels$$) {
    $axis$$48$$ >= this.$_axes$.length && Array.prototype.push.apply(this.$_axes$, Array($axis$$48$$ - this.$_axes$.length + 1));
    this.$_axes$[$axis$$48$$] || (this.$_axes$[$axis$$48$$] = new $oj$$18$$.$CubeAxis$($levels$$, $axis$$48$$, this));
    return this.$_axes$[$axis$$48$$];
  };
  $oj$$18$$.$Cube$.prototype.$_createCubeKeys$ = function $$oj$$18$$$$Cube$$$$_createCubeKeys$$($indices$$9$$) {
    for (var $axes$$2$$ = this.$getAxes$(), $keys$$26$$ = new $oj$$18$$.$CubeKeys$, $a$$88$$ = 0;$a$$88$$ < $indices$$9$$.length;$a$$88$$++) {
      $keys$$26$$ = $axes$$2$$[$a$$88$$].$GetCubeKeys$($indices$$9$$[$a$$88$$], $keys$$26$$);
    }
    return $keys$$26$$;
  };
  $oj$$18$$.$Cube$.prototype.$ProcessLevel$ = function $$oj$$18$$$$Cube$$$$ProcessLevel$$() {
    $oj$$18$$.$Assert$.$failedInAbstractFunction$();
  };
  $oj$$18$$.$Cube$.prototype.$GenerateCube$ = function $$oj$$18$$$$Cube$$$$GenerateCube$$() {
    $oj$$18$$.$Assert$.$failedInAbstractFunction$();
  };
  $oj$$18$$.$Cube$.prototype.$GenerateLevel$ = function $$oj$$18$$$$Cube$$$$GenerateLevel$$() {
    $oj$$18$$.$Assert$.$failedInAbstractFunction$();
  };
  $oj$$18$$.$Cube$.prototype.$GetAggType$ = function $$oj$$18$$$$Cube$$$$GetAggType$$() {
    $oj$$18$$.$Assert$.$failedInAbstractFunction$();
    return{};
  };
  $oj$$18$$.$CubeAggType$ = {SUM:"sum", AVERAGE:"avg", STDDEV:"stddev", VARIANCE:"variance", NONE:"none", FIRST:"first", MIN:"min", MAX:"max", COUNT:"count", CUSTOM:"custom"};
  $goog$exportPath_$$("CubeAggType", $oj$$18$$.$CubeAggType$, $oj$$18$$);
  $oj$$18$$.$CubeAxisValue$ = function $$oj$$18$$$$CubeAxisValue$$($value$$239$$, $label$$14$$, $level$$37$$, $parent$$14$$) {
    this.Init();
    this.$_children$ = [];
    this.$_parent$ = $parent$$14$$;
    this.$_cubeLevel$ = $level$$37$$;
    this.$_data$ = {};
    this.$_data$.value = $value$$239$$;
    this.$_data$.label = $label$$14$$;
  };
  $goog$exportPath_$$("CubeAxisValue", $oj$$18$$.$CubeAxisValue$, $oj$$18$$);
  $oj$$18$$.$Object$.$createSubclass$($oj$$18$$.$CubeAxisValue$, $oj$$18$$.$Object$, "oj.CubeAxisValue");
  $oj$$18$$.$CubeAxisValue$.prototype.Init = function $$oj$$18$$$$CubeAxisValue$$$Init$() {
    $oj$$18$$.$CubeAxisValue$.$superclass$.Init.call(this);
  };
  $oj$$18$$.$CubeAxisValue$.prototype.$getLevel$ = function $$oj$$18$$$$CubeAxisValue$$$$getLevel$$() {
    return this.$_cubeLevel$;
  };
  $oj$$18$$.$Object$.$exportPrototypeSymbol$("CubeAxisValue.prototype.getLevel", {$getLevel$:$oj$$18$$.$CubeAxisValue$.prototype.$getLevel$});
  $oj$$18$$.$CubeAxisValue$.prototype.getDepth = function $$oj$$18$$$$CubeAxisValue$$$getDepth$() {
    return 1;
  };
  $oj$$18$$.$Object$.$exportPrototypeSymbol$("CubeAxisValue.prototype.getDepth", {getDepth:$oj$$18$$.$CubeAxisValue$.prototype.getDepth});
  $oj$$18$$.$CubeAxisValue$.prototype.$getParents$ = function $$oj$$18$$$$CubeAxisValue$$$$getParents$$() {
    for (var $parents$$3$$ = [], $parent$$15$$ = this.$_parent$;$parent$$15$$ && $parent$$15$$.$_parent$;) {
      $parents$$3$$.unshift($parent$$15$$), $parent$$15$$ = $parent$$15$$.$_parent$;
    }
    return $parents$$3$$;
  };
  $oj$$18$$.$Object$.$exportPrototypeSymbol$("CubeAxisValue.prototype.getParents", {$getParents$:$oj$$18$$.$CubeAxisValue$.prototype.$getParents$});
  $oj$$18$$.$CubeAxisValue$.prototype.getChildren = function $$oj$$18$$$$CubeAxisValue$$$getChildren$() {
    return this.$_children$;
  };
  $oj$$18$$.$Object$.$exportPrototypeSymbol$("CubeAxisValue.prototype.getChildren", {getChildren:$oj$$18$$.$CubeAxisValue$.prototype.getChildren});
  $oj$$18$$.$CubeAxisValue$.prototype.getExtent = function $$oj$$18$$$$CubeAxisValue$$$getExtent$() {
    if (-1 < this.$_extent$) {
      return this.$_extent$;
    }
    if (this.$_children$ && 0 !== this.$_children$.length) {
      for (var $c$$43$$ = this.$_extent$ = 0;$c$$43$$ < this.getChildren().length;$c$$43$$++) {
        this.$_extent$ += this.getChildren()[$c$$43$$].getExtent();
      }
    } else {
      this.$_extent$ = 1;
    }
    return this.$_extent$;
  };
  $oj$$18$$.$Object$.$exportPrototypeSymbol$("CubeAxisValue.prototype.getExtent", {getExtent:$oj$$18$$.$CubeAxisValue$.prototype.getExtent});
  $oj$$18$$.$CubeAxisValue$.prototype.getStart = function $$oj$$18$$$$CubeAxisValue$$$getStart$() {
    if (-1 < this.$_start$) {
      return this.$_start$;
    }
    if (!this.$_parent$) {
      return 0;
    }
    for (var $start$$43$$ = this.$_parent$.getStart(), $currChild$$ = this.$_parent$.$_getPrevChild$(this);$currChild$$;) {
      $start$$43$$ += $currChild$$.getExtent(), $currChild$$ = this.$_parent$.$_getPrevChild$($currChild$$);
    }
    return this.$_start$ = $start$$43$$;
  };
  $oj$$18$$.$Object$.$exportPrototypeSymbol$("CubeAxisValue.prototype.getStart", {getStart:$oj$$18$$.$CubeAxisValue$.prototype.getStart});
  $oj$$18$$.$CubeAxisValue$.prototype.$getValue$ = function $$oj$$18$$$$CubeAxisValue$$$$getValue$$() {
    return this.$_data$.value;
  };
  $oj$$18$$.$Object$.$exportPrototypeSymbol$("CubeAxisValue.prototype.getValue", {$getValue$:$oj$$18$$.$CubeAxisValue$.prototype.$getValue$});
  $oj$$18$$.$CubeAxisValue$.prototype.$getLabel$ = function $$oj$$18$$$$CubeAxisValue$$$$getLabel$$() {
    return this.$_data$.label ? this.$_data$.label : this.$getValue$();
  };
  $oj$$18$$.$Object$.$exportPrototypeSymbol$("CubeAxisValue.prototype.getLabel", {$getLabel$:$oj$$18$$.$CubeAxisValue$.prototype.$getLabel$});
  $oj$$18$$.$CubeAxisValue$.prototype.$GetChild$ = function $$oj$$18$$$$CubeAxisValue$$$$GetChild$$($key$$99_val$$46$$) {
    var $c$$44_childLevel$$ = this.$_getChildLevel$();
    if (null === $c$$44_childLevel$$) {
      return null;
    }
    if ($c$$44_childLevel$$.$isDataValue$()) {
      return this.$_getDataValueChild$($key$$99_val$$46$$);
    }
    if ($key$$99_val$$46$$ = $key$$99_val$$46$$[$c$$44_childLevel$$.attribute]) {
      for ($c$$44_childLevel$$ = 0;$c$$44_childLevel$$ < this.$_children$.length;$c$$44_childLevel$$++) {
        if (this.$_children$[$c$$44_childLevel$$].$getValue$() === $key$$99_val$$46$$) {
          return this.$_children$[$c$$44_childLevel$$];
        }
      }
    }
    return null;
  };
  $oj$$18$$.$CubeAxisValue$.prototype.$_getDataValueChild$ = function $$oj$$18$$$$CubeAxisValue$$$$_getDataValueChild$$($key$$100$$) {
    for (var $c$$45$$ = 0;$c$$45$$ < this.$_children$.length;$c$$45$$++) {
      var $val$$47$$ = this.$_children$[$c$$45$$].$getValue$();
      if ($key$$100$$.hasOwnProperty($val$$47$$) && $key$$100$$[$val$$47$$] === $val$$47$$) {
        return this.$_children$[$c$$45$$];
      }
    }
    return null;
  };
  $oj$$18$$.$CubeAxisValue$.prototype.$_getChildLevel$ = function $$oj$$18$$$$CubeAxisValue$$$$_getChildLevel$$() {
    return this.$_children$ && 0 < this.$_children$.length ? this.$_children$[0].$getLevel$() : null;
  };
  $oj$$18$$.$CubeAxisValue$.prototype.$GetChildAt$ = function $$oj$$18$$$$CubeAxisValue$$$$GetChildAt$$($index$$154$$) {
    return this.$_findChild$($index$$154$$, 0, this.$_children$.length - 1);
  };
  $oj$$18$$.$CubeAxisValue$.prototype.$_findChild$ = function $$oj$$18$$$$CubeAxisValue$$$$_findChild$$($index$$155$$, $start$$44$$, $end$$12$$) {
    if ($start$$44$$ > $end$$12$$) {
      return null;
    }
    var $mid$$1$$ = Math.floor(($start$$44$$ + $end$$12$$) / 2), $value$$240$$ = this.$_children$[$mid$$1$$], $valStart$$ = $value$$240$$.getStart();
    return $valStart$$ > $index$$155$$ ? this.$_findChild$($index$$155$$, $start$$44$$, $mid$$1$$ - 1) : $valStart$$ + $value$$240$$.getExtent() - 1 < $index$$155$$ ? this.$_findChild$($index$$155$$, $mid$$1$$ + 1, $end$$12$$) : $value$$240$$;
  };
  $oj$$18$$.$CubeAxisValue$.prototype.$AddNode$ = function $$oj$$18$$$$CubeAxisValue$$$$AddNode$$($newValue$$19_value$$241$$, $label$$15$$, $level$$38$$) {
    for (var $c$$46$$ = 0;$c$$46$$ < this.$_children$.length;$c$$46$$++) {
      if (this.$_children$[$c$$46$$].$getValue$() === $newValue$$19_value$$241$$) {
        return this.$_children$[$c$$46$$];
      }
    }
    $newValue$$19_value$$241$$ = new $oj$$18$$.$CubeAxisValue$($newValue$$19_value$$241$$, $label$$15$$, $level$$38$$, this);
    this.$_children$.push($newValue$$19_value$$241$$);
    return $newValue$$19_value$$241$$;
  };
  $oj$$18$$.$CubeAxisValue$.prototype.$GetHashCode$ = function $$oj$$18$$$$CubeAxisValue$$$$GetHashCode$$() {
    var $obj$$62$$ = {};
    $obj$$62$$[this.$getLevel$().attribute] = this.$getValue$();
    return $obj$$62$$;
  };
  $oj$$18$$.$CubeAxisValue$.prototype.$_getPrevChild$ = function $$oj$$18$$$$CubeAxisValue$$$$_getPrevChild$$($currChild$$1$$) {
    for (var $c$$47$$ = 0;$c$$47$$ < this.$_children$.length;$c$$47$$++) {
      if (this.$_children$[$c$$47$$] === $currChild$$1$$) {
        if (0 < $c$$47$$) {
          return this.$_children$[$c$$47$$ - 1];
        }
        break;
      }
    }
    return null;
  };
  $oj$$18$$.$CubeAxis$ = function $$oj$$18$$$$CubeAxis$$($levels$$2$$, $axis$$50_i$$320$$, $cube$$3$$) {
    this.Init();
    this.axis = $axis$$50_i$$320$$;
    this.$_levels$ = [];
    for ($axis$$50_i$$320$$ = 0;$axis$$50_i$$320$$ < $levels$$2$$.length;$axis$$50_i$$320$$++) {
      this.$_levels$.push($cube$$3$$.$GenerateLevel$($levels$$2$$[$axis$$50_i$$320$$], this));
    }
    this.$_cube$ = $cube$$3$$;
    this.$_values$ = new $oj$$18$$.$CubeAxisValue$(null, null, null, null);
  };
  $goog$exportPath_$$("CubeAxis", $oj$$18$$.$CubeAxis$, $oj$$18$$);
  $oj$$18$$.$Object$.$createSubclass$($oj$$18$$.$CubeAxis$, $oj$$18$$.$Object$, "oj.CubeAxis");
  $oj$$18$$.$CubeAxis$.prototype.Init = function $$oj$$18$$$$CubeAxis$$$Init$() {
    $oj$$18$$.$CubeAxis$.$superclass$.Init.call(this);
  };
  $oj$$18$$.$CubeAxis$.prototype.$getLevels$ = function $$oj$$18$$$$CubeAxis$$$$getLevels$$() {
    return this.$_levels$;
  };
  $oj$$18$$.$Object$.$exportPrototypeSymbol$("CubeAxis.prototype.getLevels", {$getLevels$:$oj$$18$$.$CubeAxis$.prototype.$getLevels$});
  $oj$$18$$.$CubeAxis$.prototype.getExtent = function $$oj$$18$$$$CubeAxis$$$getExtent$() {
    return this.$_values$.getExtent();
  };
  $oj$$18$$.$Object$.$exportPrototypeSymbol$("CubeAxis.prototype.getExtent", {getExtent:$oj$$18$$.$CubeAxis$.prototype.getExtent});
  $oj$$18$$.$CubeAxis$.prototype.$getValues$ = function $$oj$$18$$$$CubeAxis$$$$getValues$$($index$$156$$) {
    for (var $values$$8$$ = [], $node$$65$$ = this.$_values$;$node$$65$$;) {
      ($node$$65$$ = $node$$65$$.$GetChildAt$($index$$156$$)) && $values$$8$$.push($node$$65$$);
    }
    return $values$$8$$;
  };
  $oj$$18$$.$Object$.$exportPrototypeSymbol$("CubeAxis.prototype.getValues", {$getValues$:$oj$$18$$.$CubeAxis$.prototype.$getValues$});
  $oj$$18$$.$CubeAxis$.prototype.$getIndex$ = function $$oj$$18$$$$CubeAxis$$$$getIndex$$($key$$101_keyVal$$) {
    $key$$101_keyVal$$ = $key$$101_keyVal$$ ? JSON.parse($key$$101_keyVal$$) : {};
    for (var $node$$66$$ = this.$_values$, $lastNode$$ = null;$node$$66$$;) {
      $lastNode$$ = $node$$66$$, $node$$66$$ = $node$$66$$.$GetChild$($key$$101_keyVal$$);
    }
    return $lastNode$$ ? $lastNode$$.getStart() : -1;
  };
  $oj$$18$$.$Object$.$exportPrototypeSymbol$("CubeAxis.prototype.getIndex", {$getIndex$:$oj$$18$$.$CubeAxis$.prototype.$getIndex$});
  $oj$$18$$.$CubeAxis$.prototype.$GetCubeKeys$ = function $$oj$$18$$$$CubeAxis$$$$GetCubeKeys$$($index$$157$$, $keys$$28$$) {
    return this.$GetPartialCubeKeys$($index$$157$$, this.$getLevels$().length - 1, $keys$$28$$);
  };
  $oj$$18$$.$CubeAxis$.prototype.$GetPartialCubeKeys$ = function $$oj$$18$$$$CubeAxis$$$$GetPartialCubeKeys$$($index$$158_values$$9$$, $level$$39_stopLevel$$, $keys$$29$$) {
    $index$$158_values$$9$$ = this.$getValues$($index$$158_values$$9$$);
    $level$$39_stopLevel$$ = this.$getLevels$()[$level$$39_stopLevel$$];
    for (var $v$$2$$ = 0;$v$$2$$ < $index$$158_values$$9$$.length;$v$$2$$++) {
      var $val$$48$$ = $index$$158_values$$9$$[$v$$2$$];
      $val$$48$$.$getLevel$().$isDataValue$() ? $keys$$29$$.$AddDataValue$($val$$48$$.$getValue$()) : $keys$$29$$.$UpdateKeys$($val$$48$$);
      if ($val$$48$$.$getLevel$() === $level$$39_stopLevel$$) {
        break;
      }
    }
    return $keys$$29$$;
  };
  $oj$$18$$.$CubeAxis$.prototype.$ProcessRow$ = function $$oj$$18$$$$CubeAxis$$$$ProcessRow$$($row$$69$$, $keys$$30$$) {
    return this.$_cube$.$ProcessLevel$(this, 0, this.$_values$, $row$$69$$, $keys$$30$$, !0);
  };
  $oj$$18$$.$CubeDataValue$ = function $$oj$$18$$$$CubeDataValue$$($value$$242$$, $indices$$10$$, $aggType$$2$$, $rows$$15$$, $square$$) {
    this.Init();
    this.$_data$ = {};
    this.$_data$.value = $value$$242$$;
    this.$_data$.$indices$ = $indices$$10$$;
    this.$_data$.$aggType$ = $aggType$$2$$;
    this.$_data$.rows = $rows$$15$$;
    this.$_data$.$square$ = $square$$;
  };
  $goog$exportPath_$$("CubeDataValue", $oj$$18$$.$CubeDataValue$, $oj$$18$$);
  $oj$$18$$.$Object$.$createSubclass$($oj$$18$$.$CubeDataValue$, $oj$$18$$.$Object$, "oj.CubeDataValue");
  $oj$$18$$.$CubeDataValue$.prototype.Init = function $$oj$$18$$$$CubeDataValue$$$Init$() {
    $oj$$18$$.$CubeDataValue$.$superclass$.Init.call(this);
  };
  $oj$$18$$.$CubeDataValue$.prototype.$getValue$ = function $$oj$$18$$$$CubeDataValue$$$$getValue$$() {
    switch(this.$_data$.$aggType$) {
      case $oj$$18$$.$CubeAggType$.STDDEV:
        return Math.sqrt(this.$_getVariance$());
      case $oj$$18$$.$CubeAggType$.VARIANCE:
        return this.$_getVariance$();
      default:
        return this.$_data$.value;
    }
  };
  $oj$$18$$.$Object$.$exportPrototypeSymbol$("CubeDataValue.prototype.getValue", {$getValue$:$oj$$18$$.$CubeDataValue$.prototype.$getValue$});
  $oj$$18$$.$CubeDataValue$.prototype.$getIndices$ = function $$oj$$18$$$$CubeDataValue$$$$getIndices$$() {
    return this.$_data$.$indices$;
  };
  $oj$$18$$.$Object$.$exportPrototypeSymbol$("CubeDataValue.prototype.getIndices", {$getIndices$:$oj$$18$$.$CubeDataValue$.prototype.$getIndices$});
  $oj$$18$$.$CubeDataValue$.prototype.$getRows$ = function $$oj$$18$$$$CubeDataValue$$$$getRows$$() {
    return this.$_data$.rows;
  };
  $oj$$18$$.$Object$.$exportPrototypeSymbol$("CubeDataValue.prototype.getRows", {$getRows$:$oj$$18$$.$CubeDataValue$.prototype.$getRows$});
  $oj$$18$$.$CubeDataValue$.prototype.$getAggregation$ = function $$oj$$18$$$$CubeDataValue$$$$getAggregation$$() {
    return this.$_data$.$aggType$;
  };
  $oj$$18$$.$Object$.$exportPrototypeSymbol$("CubeDataValue.prototype.getAggregation", {$getAggregation$:$oj$$18$$.$CubeDataValue$.prototype.$getAggregation$});
  $oj$$18$$.$CubeDataValue$.prototype.$_getVariance$ = function $$oj$$18$$$$CubeDataValue$$$$_getVariance$$() {
    if (isNaN(this.$_data$.$square$)) {
      return NaN;
    }
    var $count$$35$$ = this.$_data$.rows.length;
    return 1 < $count$$35$$ ? this.$_data$.$square$ / ($count$$35$$ - 1) : 0;
  };
  $oj$$18$$.$CubeCellSet$ = function $$oj$$18$$$$CubeCellSet$$($cube$$4$$, $cellRange$$9$$) {
    var $startRow$$8$$ = $cellRange$$9$$.row ? $cellRange$$9$$.row.start : 0, $rowCount$$14$$ = $cellRange$$9$$.row ? $cellRange$$9$$.row.count : 0, $startColumn$$1$$ = $cellRange$$9$$.column ? $cellRange$$9$$.column.start : 0, $colCount$$2$$ = $cellRange$$9$$.column ? $cellRange$$9$$.column.count : 0;
    $oj$$18$$.$Assert$.$assertNumber$($startRow$$8$$, null);
    $oj$$18$$.$Assert$.$assertNumber$($rowCount$$14$$, null);
    $oj$$18$$.$Assert$.$assertNumber$($startColumn$$1$$, null);
    $oj$$18$$.$Assert$.$assertNumber$($colCount$$2$$, null);
    this.$_cube$ = $cube$$4$$;
    this.$_starts$ = {row:$startRow$$8$$, column:$startColumn$$1$$};
    this.$_values$ = this.$_cube$.$getValues$([{start:$startColumn$$1$$, count:$colCount$$2$$}, {start:$startRow$$8$$, count:$rowCount$$14$$}]);
    $colCount$$2$$ = this.$_values$.length;
    0 < $colCount$$2$$ && ($rowCount$$14$$ = this.$_values$[0].length);
    this.$_counts$ = {row:$rowCount$$14$$, column:$colCount$$2$$};
  };
  $goog$exportPath_$$("CubeCellSet", $oj$$18$$.$CubeCellSet$, $oj$$18$$);
  $oj$$18$$.$CubeCellSet$.prototype.getData = function $$oj$$18$$$$CubeCellSet$$$getData$($cell$$26_indexes$$16$$) {
    return($cell$$26_indexes$$16$$ = this.$_values$[$cell$$26_indexes$$16$$.column - this.$_starts$.column][$cell$$26_indexes$$16$$.row - this.$_starts$.row]) ? $cell$$26_indexes$$16$$.$getValue$() : null;
  };
  $oj$$18$$.$Object$.$exportPrototypeSymbol$("CubeCellSet.prototype.getData", {getData:$oj$$18$$.$CubeCellSet$.prototype.getData});
  $oj$$18$$.$CubeCellSet$.prototype.getMetadata = function $$oj$$18$$$$CubeCellSet$$$getMetadata$($indexes$$17$$) {
    var $obj$$63$$ = {keys:{}};
    $obj$$63$$.keys.row = this.$_getAxisMetadata$($indexes$$17$$, "row", 2);
    $obj$$63$$.keys.column = this.$_getAxisMetadata$($indexes$$17$$, "column", 1);
    return $obj$$63$$;
  };
  $oj$$18$$.$Object$.$exportPrototypeSymbol$("CubeCellSet.prototype.getMetadata", {getMetadata:$oj$$18$$.$CubeCellSet$.prototype.getMetadata});
  $oj$$18$$.$CubeCellSet$.prototype.$_getAxisMetadata$ = function $$oj$$18$$$$CubeCellSet$$$$_getAxisMetadata$$($indexes$$18$$, $axis$$51$$, $keys$$31_len$$18$$) {
    var $axes$$3$$ = this.$_cube$.$getAxes$();
    return void 0 !== $indexes$$18$$[$axis$$51$$] && $axes$$3$$.length >= $keys$$31_len$$18$$ ? ($keys$$31_len$$18$$ = new $oj$$18$$.$CubeKeys$, $keys$$31_len$$18$$ = $axes$$3$$[$oj$$18$$.$CubeDataGridDataSource$.$_convertAxes$($axis$$51$$)].$GetCubeKeys$($indexes$$18$$[$axis$$51$$], $keys$$31_len$$18$$), $keys$$31_len$$18$$.$GetHashCodes$()[0].key) : null;
  };
  $oj$$18$$.$CubeCellSet$.prototype.getStart = function $$oj$$18$$$$CubeCellSet$$$getStart$($axis$$52$$) {
    return this.$_starts$[$axis$$52$$];
  };
  $oj$$18$$.$Object$.$exportPrototypeSymbol$("CubeCellSet.prototype.getStart", {getStart:$oj$$18$$.$CubeCellSet$.prototype.getStart});
  $oj$$18$$.$CubeCellSet$.prototype.getCount = function $$oj$$18$$$$CubeCellSet$$$getCount$($axis$$53$$) {
    return this.$_counts$[$axis$$53$$];
  };
  $oj$$18$$.$Object$.$exportPrototypeSymbol$("CubeCellSet.prototype.getCount", {getCount:$oj$$18$$.$CubeCellSet$.prototype.getCount});
  $oj$$18$$.$DataValueAttributeCube$ = function $$oj$$18$$$$DataValueAttributeCube$$($rowset$$1$$, $layout$$3$$, $dataValues$$) {
    this.Init();
    this.$_dataValues$ = $dataValues$$;
    this.$_buildAggTypeLookup$();
    $oj$$18$$.$DataValueAttributeCube$.$superclass$.constructor.call(this, $rowset$$1$$, $layout$$3$$);
  };
  $goog$exportPath_$$("DataValueAttributeCube", $oj$$18$$.$DataValueAttributeCube$, $oj$$18$$);
  $oj$$18$$.$Object$.$createSubclass$($oj$$18$$.$DataValueAttributeCube$, $oj$$18$$.$Cube$, "oj.DataValueAttributeCube");
  $oj$$18$$.$DataValueAttributeCube$.prototype.$_rows$ = null;
  $oj$$18$$.$DataValueAttributeCube$.prototype.Init = function $$oj$$18$$$$DataValueAttributeCube$$$Init$() {
    $oj$$18$$.$DataValueAttributeCube$.$superclass$.Init.call(this);
  };
  $oj$$18$$.$DataValueAttributeCube$.prototype.$BuildCube$ = function $$oj$$18$$$$DataValueAttributeCube$$$$BuildCube$$() {
    $oj$$18$$.$DataValueAttributeCube$.$superclass$.$BuildCube$.call(this);
  };
  $oj$$18$$.$DataValueAttributeCube$.prototype.$GetAggType$ = function $$oj$$18$$$$DataValueAttributeCube$$$$GetAggType$$($dataValue$$1$$) {
    return this.$_dataValueAggType$[$dataValue$$1$$];
  };
  $oj$$18$$.$DataValueAttributeCube$.prototype.$GenerateLevel$ = function $$oj$$18$$$$DataValueAttributeCube$$$$GenerateLevel$$($level$$40$$, $axis$$54$$) {
    return $level$$40$$.dataValue ? new $oj$$18$$.$CubeLevel$(null, $axis$$54$$, !0) : new $oj$$18$$.$CubeLevel$($level$$40$$.attribute, $axis$$54$$, !1);
  };
  $oj$$18$$.$DataValueAttributeCube$.prototype.$GenerateCube$ = function $$oj$$18$$$$DataValueAttributeCube$$$$GenerateCube$$($layout$$4$$) {
    return new $oj$$18$$.$DataValueAttributeCube$(null, $layout$$4$$, this.$_dataValues$);
  };
  $oj$$18$$.$DataValueAttributeCube$.prototype.$ProcessLevel$ = function $$oj$$18$$$$DataValueAttributeCube$$$$ProcessLevel$$($axis$$55$$, $levelNum$$1$$, $currNode$$1_node$$67$$, $row$$71$$, $keys$$32$$, $addKeys$$1$$) {
    if ($levelNum$$1$$ >= $axis$$55$$.$getLevels$().length) {
      return $keys$$32$$;
    }
    var $level$$41$$ = $axis$$55$$.$getLevels$()[$levelNum$$1$$];
    if ($level$$41$$.$isDataValue$()) {
      return this.$_processDataValue$($axis$$55$$, $currNode$$1_node$$67$$, $row$$71$$, $levelNum$$1$$, $keys$$32$$);
    }
    $currNode$$1_node$$67$$ = $currNode$$1_node$$67$$.$AddNode$($row$$71$$[$level$$41$$.attribute], null, $level$$41$$);
    $addKeys$$1$$ && $keys$$32$$.$UpdateKeys$($currNode$$1_node$$67$$);
    return this.$ProcessLevel$($axis$$55$$, $levelNum$$1$$ + 1, $currNode$$1_node$$67$$, $row$$71$$, $keys$$32$$, $addKeys$$1$$);
  };
  $oj$$18$$.$DataValueAttributeCube$.prototype.$_processDataValue$ = function $$oj$$18$$$$DataValueAttributeCube$$$$_processDataValue$$($axis$$56$$, $node$$68$$, $row$$72$$, $levelNum$$2$$, $keys$$33$$) {
    for (var $dsKeysAdded$$ = !0, $d$$7$$ = 0;$d$$7$$ < this.$_dataValues$.length;$d$$7$$++) {
      var $dvAttr$$ = this.$_dataValues$[$d$$7$$].attribute, $currNode$$2_dvLabel$$ = this.$_dataValues$[$d$$7$$].label;
      $row$$72$$.hasOwnProperty($dvAttr$$) && ($currNode$$2_dvLabel$$ = $node$$68$$.$AddNode$($dvAttr$$, $currNode$$2_dvLabel$$, $axis$$56$$.$getLevels$()[$levelNum$$2$$]), $keys$$33$$.$AddDataValue$($dvAttr$$, $row$$72$$[$dvAttr$$]), this.$ProcessLevel$($axis$$56$$, $levelNum$$2$$ + 1, $currNode$$2_dvLabel$$, $row$$72$$, $keys$$33$$, $dsKeysAdded$$), $dsKeysAdded$$ = !1);
    }
    return $keys$$33$$;
  };
  $oj$$18$$.$DataValueAttributeCube$.prototype.$_buildAggTypeLookup$ = function $$oj$$18$$$$DataValueAttributeCube$$$$_buildAggTypeLookup$$() {
    this.$_dataValueAggType$ = [];
    for (var $i$$321$$ = 0;$i$$321$$ < this.$_dataValues$.length;$i$$321$$++) {
      var $dv$$ = this.$_dataValues$[$i$$321$$];
      this.$_dataValueAggType$[$dv$$.attribute] = $dv$$.aggregation ? {$aggregation$:$dv$$.aggregation, $callback$:$dv$$.callback} : {$aggregation$:$oj$$18$$.$CubeAggType$.SUM, $callback$:$dv$$.callback};
    }
  };
  $oj$$18$$.$CubeKeys$ = function $$oj$$18$$$$CubeKeys$$() {
    this.$_key$ = [];
    this.$_data$ = [];
  };
  $oj$$18$$.$CubeKeys$.prototype.$UpdateKeys$ = function $$oj$$18$$$$CubeKeys$$$$UpdateKeys$$($node$$69$$) {
    this.$_key$.push($node$$69$$);
  };
  $oj$$18$$.$CubeKeys$.prototype.$AddDataValue$ = function $$oj$$18$$$$CubeKeys$$$$AddDataValue$$($name$$108$$, $value$$244$$) {
    this.$_data$.push({name:$name$$108$$, value:$value$$244$$});
  };
  $oj$$18$$.$CubeKeys$.prototype.$GetHashCodes$ = function $$oj$$18$$$$CubeKeys$$$$GetHashCodes$$() {
    var $codes$$ = [], $keyHash$$ = this.$_buildKeyHash$();
    if (0 === this.$_data$.length) {
      $codes$$.push({key:JSON.stringify($keyHash$$)});
    } else {
      for (var $d$$8$$ = 0;$d$$8$$ < this.$_data$.length;$d$$8$$++) {
        var $copy$$ = $$$$17$$.extend(!0, {}, $keyHash$$);
        $copy$$[this.$_data$[$d$$8$$].name] = this.$_data$[$d$$8$$].name;
        $codes$$.push({key:JSON.stringify($copy$$), $dataValue$:this.$_data$[$d$$8$$].name, value:this.$_data$[$d$$8$$].value});
      }
    }
    return $codes$$;
  };
  $oj$$18$$.$CubeKeys$.prototype.$_buildKeyHash$ = function $$oj$$18$$$$CubeKeys$$$$_buildKeyHash$$() {
    for (var $keyHash$$1$$ = {}, $k$$15$$ = 0;$k$$15$$ < this.$_key$.length;$k$$15$$++) {
      var $hc$$ = this.$_key$[$k$$15$$].$GetHashCode$(), $p$$6$$;
      for ($p$$6$$ in $hc$$) {
        $hc$$.hasOwnProperty($p$$6$$) && ($keyHash$$1$$[$p$$6$$] = $hc$$[$p$$6$$]);
      }
    }
    return $keyHash$$1$$;
  };
  $oj$$18$$.$CubeHeaderSet$ = function $$oj$$18$$$$CubeHeaderSet$$($axis$$57$$, $cube$$5$$, $start$$45$$, $count$$36$$) {
    this.$_cube$ = $cube$$5$$;
    this.$_axis$ = $axis$$57$$;
    this.$_start$ = void 0 === $start$$45$$ ? 0 : $start$$45$$;
    this.$_count$ = void 0 === $count$$36$$ ? this.$_axis$.getExtent() : Math.min($count$$36$$, this.$_axis$.getExtent() - $start$$45$$);
    this.$_end$ = $start$$45$$ + $count$$36$$ - 1;
  };
  $goog$exportPath_$$("CubeHeaderSet", $oj$$18$$.$CubeHeaderSet$, $oj$$18$$);
  $oj$$18$$.$CubeHeaderSet$.prototype.getData = function $$oj$$18$$$$CubeHeaderSet$$$getData$($index$$159$$, $level$$42$$) {
    var $val$$49$$ = this.$_getValue$($index$$159$$, $level$$42$$);
    return $val$$49$$ ? $val$$49$$.$getLabel$() : null;
  };
  $oj$$18$$.$Object$.$exportPrototypeSymbol$("CubeHeaderSet.prototype.getData", {getData:$oj$$18$$.$CubeHeaderSet$.prototype.getData});
  $oj$$18$$.$CubeHeaderSet$.prototype.getMetadata = function $$oj$$18$$$$CubeHeaderSet$$$getMetadata$($index$$160$$, $level$$43$$) {
    var $hash$$6_keys$$34$$ = new $oj$$18$$.$CubeKeys$, $hash$$6_keys$$34$$ = this.$_axis$.$GetPartialCubeKeys$($index$$160$$, $level$$43$$, $hash$$6_keys$$34$$);
    return($hash$$6_keys$$34$$ = $hash$$6_keys$$34$$.$GetHashCodes$()) && 0 < $hash$$6_keys$$34$$.length ? {key:$hash$$6_keys$$34$$[0].key} : null;
  };
  $oj$$18$$.$Object$.$exportPrototypeSymbol$("CubeHeaderSet.prototype.getMetadata", {getMetadata:$oj$$18$$.$CubeHeaderSet$.prototype.getMetadata});
  $oj$$18$$.$CubeHeaderSet$.prototype.getLevelCount = function $$oj$$18$$$$CubeHeaderSet$$$getLevelCount$() {
    return this.$_axis$.$getLevels$().length;
  };
  $oj$$18$$.$Object$.$exportPrototypeSymbol$("CubeHeaderSet.prototype.getLevelCount", {getLevelCount:$oj$$18$$.$CubeHeaderSet$.prototype.getLevelCount});
  $oj$$18$$.$CubeHeaderSet$.prototype.getExtent = function $$oj$$18$$$$CubeHeaderSet$$$getExtent$($index$$161$$, $level$$44$$) {
    var $start$$46_val$$50$$ = this.$_getValue$($index$$161$$, $level$$44$$), $extent$$2$$ = $start$$46_val$$50$$.getExtent(), $start$$46_val$$50$$ = $start$$46_val$$50$$.getStart(), $end$$13$$ = $start$$46_val$$50$$ + $extent$$2$$ - 1, $after$$ = $index$$161$$ < $start$$46_val$$50$$ + $extent$$2$$ - 1;
    $start$$46_val$$50$$ < this.$_start$ && ($extent$$2$$ -= this.$_start$ - $start$$46_val$$50$$);
    $end$$13$$ > this.$_end$ && ($extent$$2$$ -= $end$$13$$ - this.$_end$);
    return{extent:$extent$$2$$, more:{before:$index$$161$$ > $start$$46_val$$50$$, after:$after$$}};
  };
  $oj$$18$$.$Object$.$exportPrototypeSymbol$("CubeHeaderSet.prototype.getExtent", {getExtent:$oj$$18$$.$CubeHeaderSet$.prototype.getExtent});
  $oj$$18$$.$CubeHeaderSet$.prototype.getDepth = function $$oj$$18$$$$CubeHeaderSet$$$getDepth$($index$$162$$, $level$$45$$) {
    return this.$_getValue$($index$$162$$, $level$$45$$).getDepth();
  };
  $oj$$18$$.$Object$.$exportPrototypeSymbol$("CubeHeaderSet.prototype.getDepth", {getDepth:$oj$$18$$.$CubeHeaderSet$.prototype.getDepth});
  $oj$$18$$.$CubeHeaderSet$.prototype.getCount = function $$oj$$18$$$$CubeHeaderSet$$$getCount$() {
    return this.$_count$;
  };
  $oj$$18$$.$Object$.$exportPrototypeSymbol$("CubeHeaderSet.prototype.getCount", {getCount:$oj$$18$$.$CubeHeaderSet$.prototype.getCount});
  $oj$$18$$.$CubeHeaderSet$.prototype.getStart = function $$oj$$18$$$$CubeHeaderSet$$$getStart$() {
    return this.$_start$;
  };
  $oj$$18$$.$Object$.$exportPrototypeSymbol$("CubeHeaderSet.prototype.getStart", {getStart:$oj$$18$$.$CubeHeaderSet$.prototype.getStart});
  $oj$$18$$.$CubeHeaderSet$.prototype.$_getValue$ = function $$oj$$18$$$$CubeHeaderSet$$$$_getValue$$($index$$163$$, $level$$46$$) {
    void 0 === $level$$46$$ && ($level$$46$$ = 0);
    var $values$$10$$ = this.$_axis$.$getValues$($index$$163$$);
    return $values$$10$$ && $values$$10$$.length > $level$$46$$ ? $values$$10$$[$level$$46$$] : null;
  };
  $oj$$18$$.$CubeDataGridDataSource$ = function $$oj$$18$$$$CubeDataGridDataSource$$($cube$$6$$) {
    $oj$$18$$.$CubeDataGridDataSource$.$superclass$.constructor.call(this, $cube$$6$$);
  };
  $goog$exportPath_$$("CubeDataGridDataSource", $oj$$18$$.$CubeDataGridDataSource$, $oj$$18$$);
  $oj$$18$$.$Object$.$createSubclass$($oj$$18$$.$CubeDataGridDataSource$, $oj$$18$$.$DataGridDataSource$, "oj.CubeDataGridDataSource");
  $oj$$18$$.$CubeDataGridDataSource$.prototype.$setCube$ = function $$oj$$18$$$$CubeDataGridDataSource$$$$setCube$$($cube$$7$$) {
    this.data = $cube$$7$$;
    this.$_fireRefresh$();
  };
  $oj$$18$$.$Object$.$exportPrototypeSymbol$("CubeDataGridDataSource.prototype.setCube", {$setCube$:$oj$$18$$.$CubeDataGridDataSource$.prototype.$setCube$});
  $oj$$18$$.$CubeDataGridDataSource$.prototype.setPage = function $$oj$$18$$$$CubeDataGridDataSource$$$setPage$($indices$$11$$) {
    this.data.setPage($indices$$11$$);
    this.$_fireRefresh$();
  };
  $oj$$18$$.$Object$.$exportPrototypeSymbol$("CubeDataGridDataSource.prototype.setPage", {setPage:$oj$$18$$.$CubeDataGridDataSource$.prototype.setPage});
  $oj$$18$$.$CubeDataGridDataSource$.prototype.$_fireRefresh$ = function $$oj$$18$$$$CubeDataGridDataSource$$$$_fireRefresh$$() {
    this.handleEvent("change", {source:this, operation:"refresh"});
  };
  $oj$$18$$.$CubeDataGridDataSource$.prototype.getCount = function $$oj$$18$$$$CubeDataGridDataSource$$$getCount$($axis$$58_axisObj$$) {
    return($axis$$58_axisObj$$ = this.$_getAxis$($axis$$58_axisObj$$)) ? $axis$$58_axisObj$$.getExtent() : 0;
  };
  $oj$$18$$.$Object$.$exportPrototypeSymbol$("CubeDataGridDataSource.prototype.getCount", {getCount:$oj$$18$$.$CubeDataGridDataSource$.prototype.getCount});
  $oj$$18$$.$CubeDataGridDataSource$.prototype.getCountPrecision = function $$oj$$18$$$$CubeDataGridDataSource$$$getCountPrecision$() {
    return "exact";
  };
  $oj$$18$$.$Object$.$exportPrototypeSymbol$("CubeDataGridDataSource.prototype.getCountPrecision", {getCountPrecision:$oj$$18$$.$CubeDataGridDataSource$.prototype.getCountPrecision});
  $oj$$18$$.$CubeDataGridDataSource$.prototype.fetchHeaders = function $$oj$$18$$$$CubeDataGridDataSource$$$fetchHeaders$($headerRange$$13$$, $callbacks$$6$$, $callbackObjects$$) {
    var $cubeheaders$$ = new $oj$$18$$.$CubeHeaderSet$(this.$_getAxis$($headerRange$$13$$.axis), this.data, $headerRange$$13$$.start, $headerRange$$13$$.count);
    $callbacks$$6$$.success.call($callbackObjects$$ ? $callbackObjects$$.success : void 0, $cubeheaders$$, $headerRange$$13$$);
  };
  $oj$$18$$.$Object$.$exportPrototypeSymbol$("CubeDataGridDataSource.prototype.fetchHeaders", {fetchHeaders:$oj$$18$$.$CubeDataGridDataSource$.prototype.fetchHeaders});
  $oj$$18$$.$CubeDataGridDataSource$.prototype.fetchCells = function $$oj$$18$$$$CubeDataGridDataSource$$$fetchCells$($cellRange$$10$$, $callbacks$$7$$, $callbackObjects$$1$$) {
    for (var $cubecells_obj$$64$$ = {}, $i$$322$$ = 0;$i$$322$$ < $cellRange$$10$$.length;$i$$322$$++) {
      var $start$$47$$ = void 0 === $cellRange$$10$$[$i$$322$$].start ? 0 : $cellRange$$10$$[$i$$322$$].start;
      if ("row" === $cellRange$$10$$[$i$$322$$].axis) {
        var $count$$37$$ = void 0 === $cellRange$$10$$[$i$$322$$].count ? this.data.$getAxes$()[1].getExtent() : $cellRange$$10$$[$i$$322$$].count;
        $cubecells_obj$$64$$.row = {start:$start$$47$$, count:$count$$37$$};
      }
      "column" === $cellRange$$10$$[$i$$322$$].axis && ($count$$37$$ = void 0 === $cellRange$$10$$[$i$$322$$].count ? this.data.$getAxes$()[0].getExtent() : $cellRange$$10$$[$i$$322$$].count, $cubecells_obj$$64$$.column = {start:$start$$47$$, count:$count$$37$$});
    }
    $cubecells_obj$$64$$ = new $oj$$18$$.$CubeCellSet$(this.data, $cubecells_obj$$64$$);
    $callbacks$$7$$.success.call($callbackObjects$$1$$ ? $callbackObjects$$1$$.success : void 0, $cubecells_obj$$64$$, $cellRange$$10$$);
  };
  $oj$$18$$.$Object$.$exportPrototypeSymbol$("CubeDataGridDataSource.prototype.fetchCells", {fetchCells:$oj$$18$$.$CubeDataGridDataSource$.prototype.fetchCells});
  $oj$$18$$.$CubeDataGridDataSource$.prototype.keys = function $$oj$$18$$$$CubeDataGridDataSource$$$keys$($indexes$$19$$) {
    var $retObj$$13$$ = {}, $retObj$$13$$ = this.$_getKey$($indexes$$19$$, "row", $retObj$$13$$), $retObj$$13$$ = this.$_getKey$($indexes$$19$$, "column", $retObj$$13$$);
    return Promise.resolve($retObj$$13$$);
  };
  $oj$$18$$.$Object$.$exportPrototypeSymbol$("CubeDataGridDataSource.prototype.keys", {keys:$oj$$18$$.$CubeDataGridDataSource$.prototype.keys});
  $oj$$18$$.$CubeDataGridDataSource$.prototype.$_getKey$ = function $$oj$$18$$$$CubeDataGridDataSource$$$$_getKey$$($indexes$$20_item$$14$$, $axis$$60$$, $retObj$$14$$) {
    var $axisObj$$1$$ = this.$_getAxis$($axis$$60$$);
    $indexes$$20_item$$14$$ = $indexes$$20_item$$14$$[$axis$$60$$];
    var $keys$$35$$ = new $oj$$18$$.$CubeKeys$, $keys$$35$$ = $axisObj$$1$$ ? $axisObj$$1$$.$GetCubeKeys$($indexes$$20_item$$14$$, $keys$$35$$) : "";
    $retObj$$14$$[$axis$$60$$] = $keys$$35$$.$GetHashCodes$()[0].key;
    return $retObj$$14$$;
  };
  $oj$$18$$.$CubeDataGridDataSource$.prototype.indexes = function $$oj$$18$$$$CubeDataGridDataSource$$$indexes$($keys$$36$$) {
    var $retObj$$15$$ = {}, $retObj$$15$$ = this.$_getIndex$($keys$$36$$, "row", $retObj$$15$$), $retObj$$15$$ = this.$_getIndex$($keys$$36$$, "column", $retObj$$15$$);
    return Promise.resolve($retObj$$15$$);
  };
  $oj$$18$$.$Object$.$exportPrototypeSymbol$("CubeDataGridDataSource.prototype.indexes", {indexes:$oj$$18$$.$CubeDataGridDataSource$.prototype.indexes});
  $oj$$18$$.$CubeDataGridDataSource$.prototype.$_getIndex$ = function $$oj$$18$$$$CubeDataGridDataSource$$$$_getIndex$$($keys$$37$$, $axis$$61$$, $retObj$$16$$) {
    $retObj$$16$$[$axis$$61$$] = this.$_getAxis$($axis$$61$$).$getIndex$($keys$$37$$[$axis$$61$$]);
    return $retObj$$16$$;
  };
  $oj$$18$$.$CubeDataGridDataSource$.prototype.sort = function $$oj$$18$$$$CubeDataGridDataSource$$$sort$() {
    $oj$$18$$.$Assert$.$failedInAbstractFunction$();
  };
  $oj$$18$$.$Object$.$exportPrototypeSymbol$("CubeDataGridDataSource.prototype.sort", {sort:$oj$$18$$.$CubeDataGridDataSource$.prototype.sort});
  $oj$$18$$.$CubeDataGridDataSource$.prototype.move = function $$oj$$18$$$$CubeDataGridDataSource$$$move$() {
    $oj$$18$$.$Assert$.$failedInAbstractFunction$();
  };
  $oj$$18$$.$Object$.$exportPrototypeSymbol$("CubeDataGridDataSource.prototype.move", {move:$oj$$18$$.$CubeDataGridDataSource$.prototype.move});
  $oj$$18$$.$CubeDataGridDataSource$.prototype.moveOK = function $$oj$$18$$$$CubeDataGridDataSource$$$moveOK$() {
    return "invalid";
  };
  $oj$$18$$.$Object$.$exportPrototypeSymbol$("CubeDataGridDataSource.prototype.moveOK", {moveOK:$oj$$18$$.$CubeDataGridDataSource$.prototype.moveOK});
  $oj$$18$$.$CubeDataGridDataSource$.prototype.getCapability = function $$oj$$18$$$$CubeDataGridDataSource$$$getCapability$($feature$$4$$) {
    switch($feature$$4$$) {
      case "sort":
        return "none";
      case "move":
        return "none";
    }
    return null;
  };
  $oj$$18$$.$Object$.$exportPrototypeSymbol$("CubeDataGridDataSource.prototype.getCapability", {getCapability:$oj$$18$$.$CubeDataGridDataSource$.prototype.getCapability});
  $oj$$18$$.$CubeDataGridDataSource$.$_convertAxes$ = function $$oj$$18$$$$CubeDataGridDataSource$$$_convertAxes$$($axis$$62$$) {
    return "row" === $axis$$62$$ ? 1 : 0;
  };
  $oj$$18$$.$CubeDataGridDataSource$.prototype.$_getAxis$ = function $$oj$$18$$$$CubeDataGridDataSource$$$$_getAxis$$($axis$$63_axisNum$$) {
    $axis$$63_axisNum$$ = $oj$$18$$.$CubeDataGridDataSource$.$_convertAxes$($axis$$63_axisNum$$);
    var $axes$$4$$ = this.data.$getAxes$();
    return $axes$$4$$.length > $axis$$63_axisNum$$ ? $axes$$4$$[$axis$$63_axisNum$$] : null;
  };
  $oj$$18$$.$DataColumnCube$ = function $$oj$$18$$$$DataColumnCube$$($rowset$$2$$, $layout$$5$$, $dataValues$$1$$) {
    this.Init();
    this.$_dataValues$ = $dataValues$$1$$;
    this.$_valueAttr$ = $dataValues$$1$$.valueAttr;
    this.$_labelAttr$ = $dataValues$$1$$.labelAttr;
    var $defAgg$$ = $dataValues$$1$$.defaultAggregation;
    this.$_defaultAggregation$ = $defAgg$$ ? $oj$$18$$.$DataColumnCube$.$_getDefaultAgg$($defAgg$$) : {$aggregation$:$oj$$18$$.$CubeAggType$.SUM};
    this.$_aggregation$ = $dataValues$$1$$.aggregation;
    this.$_buildAggTypeLookup$();
    $oj$$18$$.$DataColumnCube$.$superclass$.constructor.call(this, $rowset$$2$$, $layout$$5$$);
  };
  $goog$exportPath_$$("DataColumnCube", $oj$$18$$.$DataColumnCube$, $oj$$18$$);
  $oj$$18$$.$Object$.$createSubclass$($oj$$18$$.$DataColumnCube$, $oj$$18$$.$Cube$, "oj.DataColumnCube");
  $oj$$18$$.$DataColumnCube$.prototype.Init = function $$oj$$18$$$$DataColumnCube$$$Init$() {
    $oj$$18$$.$DataColumnCube$.$superclass$.Init.call(this);
  };
  $oj$$18$$.$DataColumnCube$.prototype.$BuildCube$ = function $$oj$$18$$$$DataColumnCube$$$$BuildCube$$() {
    $oj$$18$$.$DataColumnCube$.$superclass$.$BuildCube$.call(this);
  };
  $oj$$18$$.$DataColumnCube$.prototype.$GetAggType$ = function $$oj$$18$$$$DataColumnCube$$$$GetAggType$$($dataValue$$2$$) {
    return this.$_dataValueAggType$[$dataValue$$2$$] ? this.$_dataValueAggType$[$dataValue$$2$$] : this.$_defaultAggregation$;
  };
  $oj$$18$$.$DataColumnCube$.prototype.$GenerateCube$ = function $$oj$$18$$$$DataColumnCube$$$$GenerateCube$$($layout$$6$$) {
    return new $oj$$18$$.$DataColumnCube$(null, $layout$$6$$, this.$_dataValues$);
  };
  $oj$$18$$.$DataColumnCube$.prototype.$GenerateLevel$ = function $$oj$$18$$$$DataColumnCube$$$$GenerateLevel$$($level$$47$$, $axis$$64$$) {
    return $level$$47$$.attribute === this.$_labelAttr$ ? new $oj$$18$$.$CubeLevel$($level$$47$$.attribute, $axis$$64$$, !0) : new $oj$$18$$.$CubeLevel$($level$$47$$.attribute, $axis$$64$$, !1);
  };
  $oj$$18$$.$DataColumnCube$.prototype.$ProcessLevel$ = function $$oj$$18$$$$DataColumnCube$$$$ProcessLevel$$($axis$$65$$, $levelNum$$3$$, $currNode$$3_node$$70$$, $row$$73$$, $keys$$38$$, $addKeys$$2$$) {
    if ($levelNum$$3$$ >= $axis$$65$$.$getLevels$().length) {
      return $keys$$38$$;
    }
    var $level$$48$$ = $axis$$65$$.$getLevels$()[$levelNum$$3$$], $value$$245$$ = $row$$73$$[$level$$48$$.attribute];
    $currNode$$3_node$$70$$ = $currNode$$3_node$$70$$.$AddNode$($value$$245$$, null, $level$$48$$);
    $level$$48$$.$isDataValue$() ? $keys$$38$$.$AddDataValue$($value$$245$$, $row$$73$$[this.$_valueAttr$]) : $keys$$38$$.$UpdateKeys$($currNode$$3_node$$70$$);
    return this.$ProcessLevel$($axis$$65$$, $levelNum$$3$$ + 1, $currNode$$3_node$$70$$, $row$$73$$, $keys$$38$$, $addKeys$$2$$);
  };
  $oj$$18$$.$DataColumnCube$.$_getDefaultAgg$ = function $$oj$$18$$$$DataColumnCube$$$_getDefaultAgg$$($agg$$1$$) {
    return $oj$$18$$.$StringUtils$.$isString$($agg$$1$$) ? {$aggregation$:$agg$$1$$} : {$aggregation$:$agg$$1$$.aggregation, $callback$:$agg$$1$$.callback};
  };
  $oj$$18$$.$DataColumnCube$.prototype.$_buildAggTypeLookup$ = function $$oj$$18$$$$DataColumnCube$$$$_buildAggTypeLookup$$() {
    this.$_dataValueAggType$ = [];
    if (this.$_aggregation$) {
      for (var $i$$323$$ = 0;$i$$323$$ < this.$_aggregation$.length;$i$$323$$++) {
        var $dv$$1$$ = this.$_aggregation$[$i$$323$$], $agg$$2$$ = $dv$$1$$.aggregation;
        this.$_dataValueAggType$[$dv$$1$$.value] = $agg$$2$$ ? {$aggregation$:$agg$$2$$, $callback$:$dv$$1$$.callback} : this.$_defaultAggregation$;
      }
    }
  };
  $oj$$18$$.$CubeLevel$ = function $$oj$$18$$$$CubeLevel$$($attribute$$5$$, $axis$$66$$, $dataValue$$3$$) {
    this.Init();
    this.attribute = $attribute$$5$$;
    this.$_axisObj$ = $axis$$66$$;
    this.axis = $axis$$66$$.axis;
    this.$_dataValue$ = $dataValue$$3$$;
  };
  $goog$exportPath_$$("CubeLevel", $oj$$18$$.$CubeLevel$, $oj$$18$$);
  $oj$$18$$.$Object$.$createSubclass$($oj$$18$$.$CubeLevel$, $oj$$18$$.$Object$, "oj.CubeLevel");
  $oj$$18$$.$CubeLevel$.prototype.Init = function $$oj$$18$$$$CubeLevel$$$Init$() {
    $oj$$18$$.$CubeLevel$.$superclass$.Init.call(this);
  };
  $oj$$18$$.$CubeLevel$.prototype.$getValue$ = function $$oj$$18$$$$CubeLevel$$$$getValue$$($index$$164_values$$11$$) {
    if ($index$$164_values$$11$$ = this.$_axisObj$.$getValues$($index$$164_values$$11$$)) {
      for (var $v$$3$$ = 0;$v$$3$$ < $index$$164_values$$11$$.length;$v$$3$$++) {
        if ($index$$164_values$$11$$[$v$$3$$].$getLevel$() === this) {
          return $index$$164_values$$11$$[$v$$3$$];
        }
      }
    }
    return null;
  };
  $oj$$18$$.$Object$.$exportPrototypeSymbol$("CubeLevel.prototype.getValue", {$getValue$:$oj$$18$$.$CubeLevel$.prototype.$getValue$});
  $oj$$18$$.$CubeLevel$.prototype.$isDataValue$ = function $$oj$$18$$$$CubeLevel$$$$isDataValue$$() {
    return this.$_dataValue$;
  };
  $oj$$18$$.$Object$.$exportPrototypeSymbol$("CubeLevel.prototype.isDataValue", {$isDataValue$:$oj$$18$$.$CubeLevel$.prototype.$isDataValue$});
  $oj$$18$$.$CubeLevel$.prototype.$_dataValue$ = !1;
  $oj$$18$$.$CubeLevel$.prototype.$_axisObj$ = null;
});

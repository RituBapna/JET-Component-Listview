/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
define(["ojs/ojcore", "knockout", "ojs/ojmodel"], function($oj$$75$$, $ko$$9$$) {
  $oj$$75$$.$KnockoutUtils$ = function $$oj$$75$$$$KnockoutUtils$$() {
  };
  $goog$exportPath_$$("KnockoutUtils", $oj$$75$$.$KnockoutUtils$, $oj$$75$$);
  $oj$$75$$.$KnockoutUtils$.$internalObjectProperty$ = "oj._internalObj";
  $oj$$75$$.$KnockoutUtils$.$underUpdateProp$ = "oj._underUpdate";
  $oj$$75$$.$KnockoutUtils$.$collUpdatingProp$ = "oj.collectionUpdating";
  $oj$$75$$.$KnockoutUtils$.$subscriptionProp$ = "oj.collectionSubscription";
  $oj$$75$$.$KnockoutUtils$.$updatingCollectionFunc$ = "oj.collectionUpdatingFunc";
  $oj$$75$$.$KnockoutUtils$.map = function $$oj$$75$$$$KnockoutUtils$$map$($m$$26$$, $callback$$143$$, $array$$18_data$$181_updateObservable_updateObservableArrayRemove$$) {
    function $_makeUpdateModel$$($argProp$$) {
      return function($value$$303$$) {
        $koObject$$[$oj$$75$$.$KnockoutUtils$.$underUpdateProp$] || $m$$26$$.set($argProp$$, $value$$303$$);
      };
    }
    var $koObject$$, $i$$519_prealloc_prop$$81_updateCollection_updateObservableArrayAdd$$, $converted_index$$330_updateObservableArrayReset$$, $updateModel_updateObservableArraySort$$;
    if ($m$$26$$ instanceof $oj$$75$$.$Collection$) {
      $i$$519_prealloc_prop$$81_updateCollection_updateObservableArrayAdd$$ = Array($m$$26$$.$_getLength$());
      $koObject$$ = $array$$18_data$$181_updateObservable_updateObservableArrayRemove$$ ? $ko$$9$$.observableArray($i$$519_prealloc_prop$$81_updateCollection_updateObservableArrayAdd$$) : $i$$519_prealloc_prop$$81_updateCollection_updateObservableArrayAdd$$;
      $oj$$75$$.$KnockoutUtils$.$_storeOriginalObject$($koObject$$, $m$$26$$);
      if ($array$$18_data$$181_updateObservable_updateObservableArrayRemove$$) {
        for ($i$$519_prealloc_prop$$81_updateCollection_updateObservableArrayAdd$$ = 0;$i$$519_prealloc_prop$$81_updateCollection_updateObservableArrayAdd$$ < $m$$26$$.$_modelIndices$.length;$i$$519_prealloc_prop$$81_updateCollection_updateObservableArrayAdd$$++) {
          $converted_index$$330_updateObservableArrayReset$$ = $m$$26$$.$_modelIndices$[$i$$519_prealloc_prop$$81_updateCollection_updateObservableArrayAdd$$], $koObject$$()[$converted_index$$330_updateObservableArrayReset$$] = $oj$$75$$.$KnockoutUtils$.map($m$$26$$.$_atInternal$($converted_index$$330_updateObservableArrayReset$$, null, !0, !1), $callback$$143$$);
        }
      } else {
        for ($i$$519_prealloc_prop$$81_updateCollection_updateObservableArrayAdd$$ = 0;$i$$519_prealloc_prop$$81_updateCollection_updateObservableArrayAdd$$ < $m$$26$$.$_modelIndices$.length;$i$$519_prealloc_prop$$81_updateCollection_updateObservableArrayAdd$$++) {
          $converted_index$$330_updateObservableArrayReset$$ = $m$$26$$.$_modelIndices$[$i$$519_prealloc_prop$$81_updateCollection_updateObservableArrayAdd$$], $koObject$$[$converted_index$$330_updateObservableArrayReset$$] = $oj$$75$$.$KnockoutUtils$.map($m$$26$$.$_atInternal$($converted_index$$330_updateObservableArrayReset$$, null, !0, !1), $callback$$143$$);
        }
      }
      $i$$519_prealloc_prop$$81_updateCollection_updateObservableArrayAdd$$ = function $$i$$519_prealloc_prop$$81_updateCollection_updateObservableArrayAdd$$$($changes$$7$$) {
        var $i$$520$$;
        try {
          if (!$koObject$$[$oj$$75$$.$KnockoutUtils$.$underUpdateProp$]) {
            $koObject$$[$oj$$75$$.$KnockoutUtils$.$collUpdatingProp$] = !0;
            for ($i$$520$$ = 0;$i$$520$$ < $changes$$7$$.length;$i$$520$$++) {
              var $index$$331$$ = $changes$$7$$[$i$$520$$].index, $model$$94$$ = $oj$$75$$.$KnockoutUtils$.$_getModel$($changes$$7$$[$i$$520$$].value), $status$$33$$ = $changes$$7$$[$i$$520$$].status;
              "added" === $status$$33$$ ? $index$$331$$ >= $m$$26$$.length - 1 ? $m$$26$$.add($model$$94$$) : $m$$26$$.add($model$$94$$, {at:$index$$331$$}) : "deleted" === $status$$33$$ && $m$$26$$.$_removeInternal$($model$$94$$, $index$$331$$);
            }
            $m$$26$$.comparator && ($koObject$$[$oj$$75$$.$KnockoutUtils$.$underUpdateProp$] = !0, $koObject$$.sort(function($a$$108$$, $b$$73$$) {
              return $oj$$75$$.$KnockoutUtils$.$_callSort$($a$$108$$, $b$$73$$, $m$$26$$.comparator, $m$$26$$, this);
            }), $koObject$$[$oj$$75$$.$KnockoutUtils$.$underUpdateProp$] = !1);
          }
        } catch ($e$$138$$) {
          throw $e$$138$$;
        } finally {
          $koObject$$[$oj$$75$$.$KnockoutUtils$.$collUpdatingProp$] = !1;
        }
      };
      $array$$18_data$$181_updateObservable_updateObservableArrayRemove$$ && $koObject$$.subscribe && ($koObject$$[$oj$$75$$.$KnockoutUtils$.$updatingCollectionFunc$] = $i$$519_prealloc_prop$$81_updateCollection_updateObservableArrayAdd$$, $koObject$$[$oj$$75$$.$KnockoutUtils$.$subscriptionProp$] = $koObject$$.subscribe($i$$519_prealloc_prop$$81_updateCollection_updateObservableArrayAdd$$, null, "arrayChange"));
      $array$$18_data$$181_updateObservable_updateObservableArrayRemove$$ = function $$array$$18_data$$181_updateObservable_updateObservableArrayRemove$$$($model$$95$$, $collection$$59$$, $options$$394$$) {
        var $index$$332$$;
        try {
          !$koObject$$[$oj$$75$$.$KnockoutUtils$.$collUpdatingProp$] && $collection$$59$$ instanceof $oj$$75$$.$Collection$ && ($koObject$$[$oj$$75$$.$KnockoutUtils$.$underUpdateProp$] = !0, $index$$332$$ = $options$$394$$.index, $koObject$$.splice($index$$332$$, 1));
        } catch ($e$$139$$) {
          throw $e$$139$$;
        } finally {
          $koObject$$[$oj$$75$$.$KnockoutUtils$.$underUpdateProp$] = !1;
        }
      };
      $i$$519_prealloc_prop$$81_updateCollection_updateObservableArrayAdd$$ = function $$i$$519_prealloc_prop$$81_updateCollection_updateObservableArrayAdd$$$($model$$96$$, $collection$$60$$, $options$$395$$) {
        var $index$$333$$, $newObservable$$;
        try {
          if (!$koObject$$[$oj$$75$$.$KnockoutUtils$.$collUpdatingProp$] && $collection$$60$$ instanceof $oj$$75$$.$Collection$ && ($koObject$$[$oj$$75$$.$KnockoutUtils$.$underUpdateProp$] = !0, $index$$333$$ = $collection$$60$$.$_localIndexOf$($model$$96$$), void 0 !== $index$$333$$ && -1 < $index$$333$$)) {
            if ($newObservable$$ = $oj$$75$$.$KnockoutUtils$.map($model$$96$$, $callback$$143$$), $options$$395$$.fillIn) {
              for (var $i$$521$$ = Array.isArray($koObject$$) ? $koObject$$.length : $koObject$$().length;$i$$521$$ < $index$$333$$;$i$$521$$++) {
                $koObject$$.splice($i$$521$$, 0, $oj$$75$$.$KnockoutUtils$.map($collection$$60$$.$_atInternal$($i$$521$$, null, !0, !1), $callback$$143$$));
              }
              $koObject$$.splice($index$$333$$, 1, $newObservable$$);
            } else {
              $koObject$$.splice($index$$333$$, 0, $newObservable$$);
            }
          }
        } catch ($e$$140$$) {
          throw $e$$140$$;
        } finally {
          $koObject$$[$oj$$75$$.$KnockoutUtils$.$underUpdateProp$] = !1;
        }
      };
      $converted_index$$330_updateObservableArrayReset$$ = function $$converted_index$$330_updateObservableArrayReset$$$($collection$$61$$) {
        try {
          !$koObject$$[$oj$$75$$.$KnockoutUtils$.$collUpdatingProp$] && $collection$$61$$ instanceof $oj$$75$$.$Collection$ && ($koObject$$[$oj$$75$$.$KnockoutUtils$.$underUpdateProp$] = !0, $ko$$9$$.isObservable($koObject$$) ? ($koObject$$[$oj$$75$$.$KnockoutUtils$.$subscriptionProp$] && $koObject$$[$oj$$75$$.$KnockoutUtils$.$subscriptionProp$].dispose(), $koObject$$.removeAll(), $koObject$$[$oj$$75$$.$KnockoutUtils$.$updatingCollectionFunc$] && $koObject$$.subscribe($koObject$$[$oj$$75$$.$KnockoutUtils$.$updatingCollectionFunc$], 
          null, "arrayChange")) : $koObject$$ = []);
        } catch ($e$$141$$) {
          throw $e$$141$$;
        } finally {
          $koObject$$[$oj$$75$$.$KnockoutUtils$.$underUpdateProp$] = !1;
        }
      };
      $updateModel_updateObservableArraySort$$ = function $$updateModel_updateObservableArraySort$$$($collection$$62$$) {
        try {
          !$koObject$$[$oj$$75$$.$KnockoutUtils$.$collUpdatingProp$] && $collection$$62$$ instanceof $oj$$75$$.$Collection$ && ($koObject$$[$oj$$75$$.$KnockoutUtils$.$underUpdateProp$] = !0, $koObject$$.sort(function($a$$109$$, $b$$74$$) {
            return $oj$$75$$.$KnockoutUtils$.$_callSort$($a$$109$$, $b$$74$$, $m$$26$$.comparator, $collection$$62$$, this);
          }));
        } catch ($e$$142$$) {
          throw $e$$142$$;
        } finally {
          $koObject$$[$oj$$75$$.$KnockoutUtils$.$underUpdateProp$] = !1;
        }
      };
      $m$$26$$.$OnInternal$($oj$$75$$.$Events$.$EventType$.ADD, $i$$519_prealloc_prop$$81_updateCollection_updateObservableArrayAdd$$, void 0, void 0, !0);
      $m$$26$$.$OnInternal$($oj$$75$$.$Events$.$EventType$.REMOVE, $array$$18_data$$181_updateObservable_updateObservableArrayRemove$$, void 0, void 0, !0);
      $m$$26$$.$OnInternal$($oj$$75$$.$Events$.$EventType$.RESET, $converted_index$$330_updateObservableArrayReset$$, void 0, void 0, !0);
      $m$$26$$.$OnInternal$($oj$$75$$.$Events$.$EventType$.SORT, $updateModel_updateObservableArraySort$$, void 0, void 0, !0);
    } else {
      if (void 0 === $m$$26$$) {
        return;
      }
      $koObject$$ = {};
      $array$$18_data$$181_updateObservable_updateObservableArrayRemove$$ = $m$$26$$.attributes;
      $i$$519_prealloc_prop$$81_updateCollection_updateObservableArrayAdd$$ = null;
      for ($i$$519_prealloc_prop$$81_updateCollection_updateObservableArrayAdd$$ in $array$$18_data$$181_updateObservable_updateObservableArrayRemove$$) {
        $array$$18_data$$181_updateObservable_updateObservableArrayRemove$$.hasOwnProperty($i$$519_prealloc_prop$$81_updateCollection_updateObservableArrayAdd$$) && ($converted_index$$330_updateObservableArrayReset$$ = $ko$$9$$.observable($m$$26$$.get($i$$519_prealloc_prop$$81_updateCollection_updateObservableArrayAdd$$)), $koObject$$[$i$$519_prealloc_prop$$81_updateCollection_updateObservableArrayAdd$$] = $converted_index$$330_updateObservableArrayReset$$, $updateModel_updateObservableArraySort$$ = 
        $_makeUpdateModel$$($i$$519_prealloc_prop$$81_updateCollection_updateObservableArrayAdd$$), $updateModel_updateObservableArraySort$$.$_prop$ = $i$$519_prealloc_prop$$81_updateCollection_updateObservableArrayAdd$$, $converted_index$$330_updateObservableArrayReset$$.subscribe && $converted_index$$330_updateObservableArrayReset$$.subscribe($updateModel_updateObservableArraySort$$));
      }
      $array$$18_data$$181_updateObservable_updateObservableArrayRemove$$ = function $$array$$18_data$$181_updateObservable_updateObservableArrayRemove$$$($model$$97$$) {
        var $attrs$$22$$, $prop$$82$$;
        try {
          for ($prop$$82$$ in $koObject$$[$oj$$75$$.$KnockoutUtils$.$underUpdateProp$] = !0, $attrs$$22$$ = $model$$97$$.$changedAttributes$(), $attrs$$22$$) {
            if ($attrs$$22$$.hasOwnProperty($prop$$82$$)) {
              $koObject$$[$prop$$82$$]($model$$97$$.get($prop$$82$$));
            }
          }
        } catch ($e$$143$$) {
          throw $e$$143$$;
        } finally {
          $koObject$$[$oj$$75$$.$KnockoutUtils$.$underUpdateProp$] = !1;
        }
      };
      $m$$26$$.$OnInternal$($oj$$75$$.$Events$.$EventType$.CHANGE, $array$$18_data$$181_updateObservable_updateObservableArrayRemove$$, void 0, void 0, !0);
      $oj$$75$$.$KnockoutUtils$.$_storeOriginalObject$($koObject$$, $m$$26$$);
      $callback$$143$$ && $callback$$143$$($koObject$$);
    }
    return $koObject$$;
  };
  $goog$exportPath_$$("KnockoutUtils.map", $oj$$75$$.$KnockoutUtils$.map, $oj$$75$$);
  $oj$$75$$.$KnockoutUtils$.$_getModel$ = function $$oj$$75$$$$KnockoutUtils$$$_getModel$$($val$$84$$) {
    return $val$$84$$ instanceof $oj$$75$$.$Model$ ? $val$$84$$ : $val$$84$$.hasOwnProperty($oj$$75$$.$KnockoutUtils$.$internalObjectProperty$) ? $val$$84$$[$oj$$75$$.$KnockoutUtils$.$internalObjectProperty$] : $val$$84$$;
  };
  $oj$$75$$.$KnockoutUtils$.$_callSort$ = function $$oj$$75$$$$KnockoutUtils$$$_callSort$$($a$$110$$, $b$$75$$, $comparator$$16$$, $collection$$63$$, $caller$$8$$) {
    return $oj$$75$$.$Collection$.$SortFunc$($oj$$75$$.$KnockoutUtils$.$_getModel$($a$$110$$), $oj$$75$$.$KnockoutUtils$.$_getModel$($b$$75$$), $comparator$$16$$, $collection$$63$$, $caller$$8$$);
  };
  $oj$$75$$.$KnockoutUtils$.$_storeOriginalObject$ = function $$oj$$75$$$$KnockoutUtils$$$_storeOriginalObject$$($object$$6$$, $value$$304$$) {
    Object.defineProperty($object$$6$$, $oj$$75$$.$KnockoutUtils$.$internalObjectProperty$, {value:$value$$304$$, enumerable:!1});
  };
});

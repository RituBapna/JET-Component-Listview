/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
define(["ojs/ojcore", "jquery", "ojs/ojdatasource-common", "ojs/ojmodel"], function($oj$$60$$) {
  $oj$$60$$.$CollectionNodeSet$ = function $$oj$$60$$$$CollectionNodeSet$$($parentKey$$6$$, $collection$$35$$, $treeDataSource$$1$$, $start$$64$$, $count$$55$$) {
    this.$parentKey$ = $parentKey$$6$$;
    this.$collection$ = $collection$$35$$;
    this.$childNodeSet$ = [];
    this.$treeDataSource$ = $treeDataSource$$1$$;
    this.start = $start$$64$$ < $collection$$35$$.length ? $start$$64$$ : $collection$$35$$.length - 1;
    this.count = -1 === $count$$55$$ ? $collection$$35$$.length : Math.min($collection$$35$$.length, $count$$55$$);
  };
  $goog$exportPath_$$("CollectionNodeSet", $oj$$60$$.$CollectionNodeSet$, $oj$$60$$);
  $oj$$60$$.$CollectionNodeSet$.prototype.$FetchDescendants$ = function $$oj$$60$$$$CollectionNodeSet$$$$FetchDescendants$$($callbacks$$37$$) {
    this.$_fetchDescendants$(this).then(function() {
      $callbacks$$37$$.success && $callbacks$$37$$.success();
    });
  };
  $oj$$60$$.$CollectionNodeSet$.prototype.$_fetchDescendants$ = function $$oj$$60$$$$CollectionNodeSet$$$$_fetchDescendants$$($nodeSet$$22$$) {
    return new Promise(function($resolve$$52$$) {
      function $nextNode$$($index$$295$$) {
        $index$$295$$ < $count$$56$$ ? $nodeSet$$22$$.$FetchChildNodeSet$($index$$295$$, {success:function($childNodeSet$$1$$) {
          null !== $childNodeSet$$1$$ ? $nodeSet$$22$$.$_fetchDescendants$($childNodeSet$$1$$).then(function() {
            $nextNode$$($index$$295$$ + 1);
          }) : $nextNode$$($index$$295$$ + 1);
        }}) : $resolve$$52$$(void 0);
      }
      var $count$$56$$ = $nodeSet$$22$$.getCount();
      $nextNode$$(0);
    });
  };
  $oj$$60$$.$CollectionNodeSet$.prototype.$FetchChildNodeSet$ = function $$oj$$60$$$$CollectionNodeSet$$$$FetchChildNodeSet$$($index$$296$$, $callbacks$$38$$) {
    var $model$$78_parentKey$$7$$ = this.$collection$.at($index$$296$$);
    if (this.$treeDataSource$.$parseMetadata$($model$$78_parentKey$$7$$).leaf) {
      this.$childNodeSet$[$index$$296$$] = null, $callbacks$$38$$.success(null);
    } else {
      var $collection$$36$$ = this.$treeDataSource$.$GetChildCollection$($model$$78_parentKey$$7$$), $model$$78_parentKey$$7$$ = this.$treeDataSource$.$parseMetadata$($model$$78_parentKey$$7$$).key, $self$$196$$ = this;
      this.$treeDataSource$.$FetchCollection$($collection$$36$$, 0, -1, {success:function($nodeSet$$23$$) {
        $self$$196$$.$childNodeSet$[$index$$296$$] = $nodeSet$$23$$;
        $callbacks$$38$$.success($nodeSet$$23$$);
      }}, $model$$78_parentKey$$7$$);
    }
  };
  $oj$$60$$.$CollectionNodeSet$.prototype.getParent = function $$oj$$60$$$$CollectionNodeSet$$$getParent$() {
    return this.$parentKey$;
  };
  $oj$$60$$.$Object$.$exportPrototypeSymbol$("CollectionNodeSet.prototype.getParent", {getParent:$oj$$60$$.$CollectionNodeSet$.prototype.getParent});
  $oj$$60$$.$CollectionNodeSet$.prototype.getStart = function $$oj$$60$$$$CollectionNodeSet$$$getStart$() {
    return this.start;
  };
  $oj$$60$$.$Object$.$exportPrototypeSymbol$("CollectionNodeSet.prototype.getStart", {getStart:$oj$$60$$.$CollectionNodeSet$.prototype.getStart});
  $oj$$60$$.$CollectionNodeSet$.prototype.getCount = function $$oj$$60$$$$CollectionNodeSet$$$getCount$() {
    return this.count;
  };
  $oj$$60$$.$Object$.$exportPrototypeSymbol$("CollectionNodeSet.prototype.getCount", {getCount:$oj$$60$$.$CollectionNodeSet$.prototype.getCount});
  $oj$$60$$.$CollectionNodeSet$.prototype.getData = function $$oj$$60$$$$CollectionNodeSet$$$getData$($index$$297$$) {
    this.$_checkRange$($index$$297$$);
    return this.$collection$.at($index$$297$$).attributes;
  };
  $oj$$60$$.$Object$.$exportPrototypeSymbol$("CollectionNodeSet.prototype.getData", {getData:$oj$$60$$.$CollectionNodeSet$.prototype.getData});
  $oj$$60$$.$CollectionNodeSet$.prototype.$_checkRange$ = function $$oj$$60$$$$CollectionNodeSet$$$$_checkRange$$($index$$298$$) {
    if ($index$$298$$ < this.start || $index$$298$$ > this.start + this.count) {
      throw "Out of range";
    }
  };
  $oj$$60$$.$CollectionNodeSet$.prototype.getMetadata = function $$oj$$60$$$$CollectionNodeSet$$$getMetadata$($index$$299_model$$79_parse$$7$$) {
    this.$_checkRange$($index$$299_model$$79_parse$$7$$);
    var $metadata$$16$$ = {};
    $index$$299_model$$79_parse$$7$$ = this.$collection$.at($index$$299_model$$79_parse$$7$$);
    $index$$299_model$$79_parse$$7$$ = this.$treeDataSource$.$parseMetadata$($index$$299_model$$79_parse$$7$$);
    $metadata$$16$$.key = $index$$299_model$$79_parse$$7$$.key;
    $metadata$$16$$.leaf = $index$$299_model$$79_parse$$7$$.leaf;
    $metadata$$16$$.depth = $index$$299_model$$79_parse$$7$$.depth;
    return $metadata$$16$$;
  };
  $oj$$60$$.$Object$.$exportPrototypeSymbol$("CollectionNodeSet.prototype.getMetadata", {getMetadata:$oj$$60$$.$CollectionNodeSet$.prototype.getMetadata});
  $oj$$60$$.$CollectionNodeSet$.prototype.$getChildNodeSet$ = function $$oj$$60$$$$CollectionNodeSet$$$$getChildNodeSet$$($index$$300$$) {
    this.$_checkRange$($index$$300$$);
    return this.$childNodeSet$[$index$$300$$];
  };
  $oj$$60$$.$Object$.$exportPrototypeSymbol$("CollectionNodeSet.prototype.getChildNodeSet", {$getChildNodeSet$:$oj$$60$$.$CollectionNodeSet$.prototype.$getChildNodeSet$});
  $oj$$60$$.$CollectionTreeDataSource$ = function $$oj$$60$$$$CollectionTreeDataSource$$($options$$333$$) {
    $options$$333$$ = $options$$333$$ || {};
    this.$rootCollection$ = $options$$333$$.root;
    this.$childCollectionCallback$ = $options$$333$$.childCollectionCallback;
    this.$parseMetadata$ = $options$$333$$.parseMetadata;
    this.$sortkey$ = null;
    this.$sortdir$ = "none";
    this.$cache$ = {};
    $oj$$60$$.$CollectionTreeDataSource$.$superclass$.constructor.call(this);
  };
  $goog$exportPath_$$("CollectionTreeDataSource", $oj$$60$$.$CollectionTreeDataSource$, $oj$$60$$);
  $oj$$60$$.$CollectionTreeDataSource$.prototype.$parseMetadata$ = function $$oj$$60$$$$CollectionTreeDataSource$$$$parseMetadata$$($model$$80$$) {
    return{key:$model$$80$$.idAttribute + "\x3d" + $model$$80$$.id};
  };
  $oj$$60$$.$Object$.$createSubclass$($oj$$60$$.$CollectionTreeDataSource$, $oj$$60$$.$TreeDataSource$, "oj.CollectionTreeDataSource");
  $oj$$60$$.$CollectionTreeDataSource$.prototype.Init = function $$oj$$60$$$$CollectionTreeDataSource$$$Init$() {
    $oj$$60$$.$CollectionTreeDataSource$.$superclass$.Init.call(this);
  };
  $oj$$60$$.$Object$.$exportPrototypeSymbol$("CollectionTreeDataSource.prototype.Init", {Init:$oj$$60$$.$CollectionTreeDataSource$.prototype.Init});
  $oj$$60$$.$CollectionTreeDataSource$.prototype.$getChildCount$ = function $$oj$$60$$$$CollectionTreeDataSource$$$$getChildCount$$($parent$$37$$) {
    var $childColl$$ = this.$cache$[$parent$$37$$];
    if ($childColl$$ && 0 < $childColl$$.length) {
      return $childColl$$.length;
    }
    this.$getChildCollection$($parent$$37$$, {success:function($coll$$3$$) {
      return $coll$$3$$.length;
    }});
    return-1;
  };
  $oj$$60$$.$Object$.$exportPrototypeSymbol$("CollectionTreeDataSource.prototype.getChildCount", {$getChildCount$:$oj$$60$$.$CollectionTreeDataSource$.prototype.$getChildCount$});
  $oj$$60$$.$CollectionTreeDataSource$.prototype.$getChildCollection$ = function $$oj$$60$$$$CollectionTreeDataSource$$$$getChildCollection$$($key$$179$$, $callbacks$$39$$) {
    this.$fetchChildren$($key$$179$$, null, {success:function($nodeSet$$24$$) {
      $callbacks$$39$$.success($nodeSet$$24$$.$collection$);
    }, error:$callbacks$$39$$.error});
  };
  $oj$$60$$.$Object$.$exportPrototypeSymbol$("CollectionTreeDataSource.prototype.getChildCollection", {$getChildCollection$:$oj$$60$$.$CollectionTreeDataSource$.prototype.$getChildCollection$});
  $oj$$60$$.$CollectionTreeDataSource$.prototype.$fetchChildren$ = function $$oj$$60$$$$CollectionTreeDataSource$$$$fetchChildren$$($parent$$38$$, $range$$28$$, $callbacks$$40$$) {
    $range$$28$$ = $range$$28$$ || {};
    var $start$$65$$ = $range$$28$$.start ? $range$$28$$.start : 0, $count$$57$$ = $range$$28$$.count ? $range$$28$$.count : -1;
    if (null === $parent$$38$$) {
      this.$FetchCollection$(null, $start$$65$$, $count$$57$$, $callbacks$$40$$, null);
    } else {
      var $self$$197$$ = this;
      this.$_getModelForId$(this.$rootCollection$, $parent$$38$$, 0).then(function($collection$$37_parentModel$$) {
        if ($collection$$37_parentModel$$) {
          $collection$$37_parentModel$$ = $self$$197$$.$GetChildCollection$($collection$$37_parentModel$$.$model$);
          try {
            $self$$197$$.$FetchCollection$($collection$$37_parentModel$$, $start$$65$$, $count$$57$$, $callbacks$$40$$, $parent$$38$$);
          } catch ($error$$43$$) {
            $callbacks$$40$$ && $callbacks$$40$$.error && $callbacks$$40$$.error({status:$error$$43$$.message});
          }
        } else {
          $callbacks$$40$$ && $callbacks$$40$$.error && $callbacks$$40$$.error($parent$$38$$);
        }
      });
    }
  };
  $oj$$60$$.$Object$.$exportPrototypeSymbol$("CollectionTreeDataSource.prototype.fetchChildren", {$fetchChildren$:$oj$$60$$.$CollectionTreeDataSource$.prototype.$fetchChildren$});
  $oj$$60$$.$CollectionTreeDataSource$.prototype.$ModelAdded$ = function $$oj$$60$$$$CollectionTreeDataSource$$$$ModelAdded$$($event$$651_model$$81$$, $collection$$38_parents$$6$$, $options$$335$$) {
    var $index$$301$$ = 0;
    $options$$335$$ && $options$$335$$.at && ($index$$301$$ = $options$$335$$.at);
    $collection$$38_parents$$6$$ = this.$_getParentChain$($collection$$38_parents$$6$$);
    $event$$651_model$$81$$ = this.$_createEvent$(this, "insert", $index$$301$$, $collection$$38_parents$$6$$, this.$_putModelInNodeSet$(null != $collection$$38_parents$$6$$ && 0 < $collection$$38_parents$$6$$.length ? $collection$$38_parents$$6$$[$collection$$38_parents$$6$$.length - 1] : null, $event$$651_model$$81$$));
    this.handleEvent("change", $event$$651_model$$81$$);
  };
  $oj$$60$$.$CollectionTreeDataSource$.prototype.$ModelRemoved$ = function $$oj$$60$$$$CollectionTreeDataSource$$$$ModelRemoved$$($event$$652_model$$82$$, $collection$$39$$, $options$$336$$) {
    var $index$$302$$ = 0;
    $options$$336$$ && $options$$336$$.index && ($index$$302$$ = $options$$336$$.index);
    this.$_removeCollectionFromCache$($event$$652_model$$82$$);
    $event$$652_model$$82$$ = this.$_createEvent$(this, "delete", $index$$302$$, this.$_getParentChain$($collection$$39$$), null);
    this.handleEvent("change", $event$$652_model$$82$$);
  };
  $oj$$60$$.$CollectionTreeDataSource$.prototype.$ModelUpdated$ = function $$oj$$60$$$$CollectionTreeDataSource$$$$ModelUpdated$$($event$$653_model$$83$$) {
    var $collectionForModel$$ = this.$_getCollectionForModel$($event$$653_model$$83$$), $index$$303$$ = null, $parents$$7$$ = null;
    $collectionForModel$$ && ($index$$303$$ = $collectionForModel$$.index, $parents$$7$$ = this.$_getParentChain$($collectionForModel$$.$collection$));
    $event$$653_model$$83$$ = this.$_createEvent$(this, "update", $index$$303$$, $parents$$7$$, this.$_putModelInNodeSet$(null != $parents$$7$$ && 0 < $parents$$7$$.length ? $parents$$7$$[$parents$$7$$.length - 1] : null, $event$$653_model$$83$$));
    this.handleEvent("change", $event$$653_model$$83$$);
  };
  $oj$$60$$.$CollectionTreeDataSource$.prototype.$CollectionRefreshed$ = function $$oj$$60$$$$CollectionTreeDataSource$$$$CollectionRefreshed$$($collection$$40_event$$654$$) {
    $collection$$40_event$$654$$ = this.$_createEvent$(this, "refresh", null, this.$_getParentChain$($collection$$40_event$$654$$), null);
    this.handleEvent("refresh", $collection$$40_event$$654$$);
  };
  $oj$$60$$.$CollectionTreeDataSource$.prototype.$_putModelInNodeSet$ = function $$oj$$60$$$$CollectionTreeDataSource$$$$_putModelInNodeSet$$($parent$$41$$, $model$$84$$) {
    var $collection$$41$$ = new $oj$$60$$.$Collection$;
    $collection$$41$$.add($model$$84$$);
    return this.$_getNodeSet$($collection$$41$$, $parent$$41$$, 0, 1);
  };
  $oj$$60$$.$CollectionTreeDataSource$.prototype.$_getParentChain$ = function $$oj$$60$$$$CollectionTreeDataSource$$$$_getParentChain$$($coll$$4_collection$$42$$) {
    var $parents$$8$$ = [], $parent$$42$$ = null;
    do {
      $parent$$42$$ = this.$_getParentOfCollection$($coll$$4_collection$$42$$), null !== $parent$$42$$ && ($parent$$42$$ !== $oj$$60$$.$CollectionTreeDataSource$.$ROOT_CACHE_KEY$ && $parents$$8$$.unshift($parent$$42$$), $coll$$4_collection$$42$$ = this.$_getCollectionOfKey$($parent$$42$$));
    } while (null != $parent$$42$$);
    return $parents$$8$$;
  };
  $oj$$60$$.$CollectionTreeDataSource$.$ROOT_CACHE_KEY$ = "%!@ROOT%#@!";
  $oj$$60$$.$CollectionTreeDataSource$.prototype.$_getCacheKey$ = function $$oj$$60$$$$CollectionTreeDataSource$$$$_getCacheKey$$($model$$85$$) {
    var $key$$180$$ = $model$$85$$ instanceof $oj$$60$$.$Model$ ? this.$parseMetadata$($model$$85$$).key : $model$$85$$;
    return $model$$85$$ ? $key$$180$$ : $oj$$60$$.$CollectionTreeDataSource$.$ROOT_CACHE_KEY$;
  };
  $oj$$60$$.$CollectionTreeDataSource$.prototype.$__getParentsChildCollectionFromCache$ = function $$oj$$60$$$$CollectionTreeDataSource$$$$__getParentsChildCollectionFromCache$$($model$$86$$) {
    return this.$cache$[this.$_getCacheKey$($model$$86$$)];
  };
  $oj$$60$$.$CollectionTreeDataSource$.prototype.$_setCollectionInCache$ = function $$oj$$60$$$$CollectionTreeDataSource$$$$_setCollectionInCache$$($model$$87$$, $collection$$43$$) {
    $collection$$43$$.on($oj$$60$$.$Events$.$EventType$.ADD, this.$ModelAdded$, this);
    $collection$$43$$.on($oj$$60$$.$Events$.$EventType$.REMOVE, this.$ModelRemoved$, this);
    $collection$$43$$.on($oj$$60$$.$Events$.$EventType$.CHANGE, this.$ModelUpdated$, this);
    $collection$$43$$.on($oj$$60$$.$Events$.$EventType$.SYNC, this.$CollectionRefreshed$, this);
    this.$cache$[this.$_getCacheKey$($model$$87$$)] = $collection$$43$$;
  };
  $oj$$60$$.$CollectionTreeDataSource$.prototype.$_removeCollectionFromCache$ = function $$oj$$60$$$$CollectionTreeDataSource$$$$_removeCollectionFromCache$$($key$$181_model$$88$$) {
    $key$$181_model$$88$$ = this.$_getCacheKey$($key$$181_model$$88$$);
    for (var $prop$$74$$ in this.$cache$) {
      if (this.$cache$.hasOwnProperty($prop$$74$$) && $prop$$74$$ === $key$$181_model$$88$$) {
        this.$cache$[$key$$181_model$$88$$].off(null, null, this);
        delete this.$cache$[$key$$181_model$$88$$];
        break;
      }
    }
  };
  $oj$$60$$.$CollectionTreeDataSource$.prototype.$_keyInCollection$ = function $$oj$$60$$$$CollectionTreeDataSource$$$$_keyInCollection$$($key$$182$$, $collection$$44$$) {
    for (var $count$$58$$ = $collection$$44$$.length, $i$$430$$ = 0;$i$$430$$ < $count$$58$$;$i$$430$$++) {
      var $currKey$$ = this.$_getCacheKey$($collection$$44$$.at($i$$430$$));
      if ($key$$182$$ === $currKey$$) {
        return!0;
      }
    }
    return!1;
  };
  $oj$$60$$.$CollectionTreeDataSource$.prototype.$_getCollectionForModel$ = function $$oj$$60$$$$CollectionTreeDataSource$$$$_getCollectionForModel$$($model$$89$$) {
    for (var $prop$$75$$ in this.$cache$) {
      if (this.$cache$.hasOwnProperty($prop$$75$$)) {
        for (var $collection$$45$$ = this.$cache$[$prop$$75$$], $i$$431$$ = 0;$i$$431$$ < $collection$$45$$.length;$i$$431$$++) {
          if ($collection$$45$$.at($i$$431$$) === $model$$89$$) {
            return{index:$i$$431$$, $collection$:$collection$$45$$};
          }
        }
      }
    }
    return null;
  };
  $oj$$60$$.$CollectionTreeDataSource$.prototype.$_getCollectionOfKey$ = function $$oj$$60$$$$CollectionTreeDataSource$$$$_getCollectionOfKey$$($key$$183$$) {
    for (var $prop$$76$$ in this.$cache$) {
      if (this.$cache$.hasOwnProperty($prop$$76$$)) {
        var $collection$$46$$ = this.$cache$[$prop$$76$$];
        if (this.$_keyInCollection$($key$$183$$, $collection$$46$$)) {
          return $collection$$46$$;
        }
      }
    }
    return null;
  };
  $oj$$60$$.$CollectionTreeDataSource$.prototype.$_getParentOfCollection$ = function $$oj$$60$$$$CollectionTreeDataSource$$$$_getParentOfCollection$$($collection$$47$$) {
    for (var $prop$$77$$ in this.$cache$) {
      if (this.$cache$.hasOwnProperty($prop$$77$$) && this.$cache$[$prop$$77$$] === $collection$$47$$) {
        return $prop$$77$$;
      }
    }
    return null;
  };
  $oj$$60$$.$CollectionTreeDataSource$.prototype.$GetChildCollection$ = function $$oj$$60$$$$CollectionTreeDataSource$$$$GetChildCollection$$($parentModel$$1$$) {
    var $cached$$1$$ = !0, $collection$$48$$ = this.$__getParentsChildCollectionFromCache$($parentModel$$1$$);
    $collection$$48$$ || ($cached$$1$$ = !1, $collection$$48$$ = this.$childCollectionCallback$(this.$rootCollection$, $parentModel$$1$$), null != $collection$$48$$ && (this.$_applySortToCollection$($collection$$48$$), this.$_setCollectionInCache$($parentModel$$1$$, $collection$$48$$)));
    return{$collection$:$collection$$48$$, $cached$:$cached$$1$$};
  };
  $oj$$60$$.$CollectionTreeDataSource$.prototype.$_createEvent$ = function $$oj$$60$$$$CollectionTreeDataSource$$$$_createEvent$$($source$$12$$, $operation$$9$$, $index$$304$$, $parent$$43$$, $data$$165$$) {
    return{source:$source$$12$$, operation:$operation$$9$$, index:$index$$304$$, parent:$parent$$43$$, data:$data$$165$$};
  };
  $oj$$60$$.$CollectionTreeDataSource$.prototype.$FetchCollection$ = function $$oj$$60$$$$CollectionTreeDataSource$$$$FetchCollection$$($collection$$49$$, $start$$66$$, $count$$59$$, $callbacks$$41$$, $parent$$44$$) {
    var $self$$198$$ = this;
    null === $collection$$49$$ && (($collection$$49$$ = this.$__getParentsChildCollectionFromCache$(null)) ? $collection$$49$$ = {$collection$:$collection$$49$$, $cached$:!0} : ($collection$$49$$ = {$collection$:$self$$198$$.$rootCollection$, $cached$:!1}, $self$$198$$.$_setCollectionInCache$(null, this.$rootCollection$)));
    $collection$$49$$ && $self$$198$$.$_fetch$($collection$$49$$, function($coll$$5$$) {
      $callbacks$$41$$.success && $callbacks$$41$$.success($self$$198$$.$_getNodeSet$($coll$$5$$, $parent$$44$$, $start$$66$$, $count$$59$$));
    }, $callbacks$$41$$.error);
  };
  $oj$$60$$.$CollectionTreeDataSource$.prototype.$_getNodeSet$ = function $$oj$$60$$$$CollectionTreeDataSource$$$$_getNodeSet$$($collection$$50$$, $parent$$45$$, $start$$67$$, $count$$60$$) {
    return new $oj$$60$$.$CollectionNodeSet$($parent$$45$$, $collection$$50$$, this, $start$$67$$, $count$$60$$);
  };
  $oj$$60$$.$CollectionTreeDataSource$.prototype.$_scanForKey$ = function $$oj$$60$$$$CollectionTreeDataSource$$$$_scanForKey$$($collection$$51$$, $key$$184$$) {
    var $self$$199$$ = this;
    return new Promise(function($resolve$$53$$) {
      function $checkNext$$($index$$305$$, $collection$$52$$, $key$$185$$) {
        $index$$305$$ < $collection$$52$$.length ? $collection$$52$$.at($index$$305$$, {deferred:!0}).then(function($model$$90$$) {
          if ($model$$90$$) {
            var $parse$$8$$ = $self$$199$$.$parseMetadata$($model$$90$$);
            if ($key$$185$$ === $parse$$8$$.key) {
              $resolve$$53$$($model$$90$$);
              return;
            }
          }
          $index$$305$$++;
          $checkNext$$($index$$305$$, $collection$$52$$, $key$$185$$);
        }) : $resolve$$53$$(null);
      }
      $checkNext$$(0, $collection$$51$$, $key$$184$$);
    });
  };
  $oj$$60$$.$CollectionTreeDataSource$.prototype.$_getModelForId$ = function $$oj$$60$$$$CollectionTreeDataSource$$$$_getModelForId$$($collection$$53$$, $key$$186$$, $depth$$29$$) {
    var $self$$200$$ = this;
    return new Promise(function($resolve$$54$$) {
      $self$$200$$.$_scanForKey$($collection$$53$$, $key$$186$$).then(function($model$$91$$) {
        function $getNextCollection$$($index$$306$$, $tds$$) {
          if ($index$$306$$ < $max$$9$$) {
            var $childColl$$1$$ = $tds$$.$GetChildCollection$($collection$$53$$.at($index$$306$$));
            $childColl$$1$$.$collection$ ? $tds$$.$_fetch$($childColl$$1$$, function($fetchColl$$) {
              $tds$$.$_getModelForId$($fetchColl$$, $key$$186$$, $depth$$29$$ + 1).then(function($childModel$$) {
                $childModel$$ ? $resolve$$54$$($childModel$$) : ($index$$306$$++, $getNextCollection$$($index$$306$$, $tds$$));
              });
            }, null) : ($index$$306$$++, $getNextCollection$$($index$$306$$, $tds$$));
          } else {
            $resolve$$54$$(null);
          }
        }
        if ($model$$91$$) {
          $resolve$$54$$({$model$:$model$$91$$, depth:$depth$$29$$});
        } else {
          var $max$$9$$ = $collection$$53$$.length;
          $getNextCollection$$(0, $self$$200$$);
        }
      });
    });
  };
  $oj$$60$$.$CollectionTreeDataSource$.prototype.$_fetch$ = function $$oj$$60$$$$CollectionTreeDataSource$$$$_fetch$$($collectionCacheObj$$, $success$$15$$, $error$$44$$) {
    $collectionCacheObj$$.$cached$ ? $success$$15$$($collectionCacheObj$$.$collection$) : (this.$sortkey$ && "none" !== this.$sortkey$ && ($collectionCacheObj$$.$collection$.$comparator$ = this.$sortkey$, $collectionCacheObj$$.$collection$.$sortDirection$ = this.$sortdir$), 0 < $collectionCacheObj$$.$collection$.length || !$collectionCacheObj$$.$collection$.$IsUrlBased$() ? $success$$15$$($collectionCacheObj$$.$collection$) : $collectionCacheObj$$.$collection$.fetch({success:function($fetchColl$$1$$) {
      $success$$15$$($fetchColl$$1$$);
    }, error:$error$$44$$}));
  };
  $oj$$60$$.$CollectionTreeDataSource$.prototype.$fetchDescendants$ = function $$oj$$60$$$$CollectionTreeDataSource$$$$fetchDescendants$$($parent$$46$$, $callbacks$$42$$) {
    var $self$$201$$ = this;
    null === $parent$$46$$ ? this.$FetchCollection$(null, 0, -1, {success:function($nodeSet$$25$$) {
      $nodeSet$$25$$.$FetchDescendants$({success:function() {
        $callbacks$$42$$.success && $callbacks$$42$$.success($nodeSet$$25$$);
      }});
    }}, null) : this.$_getModelForId$(this.$rootCollection$, $parent$$46$$, 0).then(function($collection$$54_parentModel$$2$$) {
      $collection$$54_parentModel$$2$$ && ($collection$$54_parentModel$$2$$ = $self$$201$$.$GetChildCollection$($collection$$54_parentModel$$2$$.$model$), $self$$201$$.$FetchCollection$($collection$$54_parentModel$$2$$, 0, -1, {success:function($nodeSet$$26$$) {
        $nodeSet$$26$$.$FetchDescendants$({success:function() {
          $callbacks$$42$$.success && $callbacks$$42$$.success($nodeSet$$26$$);
        }});
      }}, $parent$$46$$));
    });
  };
  $oj$$60$$.$Object$.$exportPrototypeSymbol$("CollectionTreeDataSource.prototype.fetchDescendants", {$fetchDescendants$:$oj$$60$$.$CollectionTreeDataSource$.prototype.$fetchDescendants$});
  $oj$$60$$.$CollectionTreeDataSource$.prototype.sort = function $$oj$$60$$$$CollectionTreeDataSource$$$sort$($criteria$$5$$, $callbacks$$43$$) {
    var $key$$187$$ = $criteria$$5$$.key, $dir$$22$$ = $criteria$$5$$.direction, $needSort$$2$$ = !1;
    $key$$187$$ !== this.$sortkey$ && (this.$sortkey$ = $key$$187$$, $needSort$$2$$ = !0);
    $dir$$22$$ !== this.$sortdir$ && (this.$sortdir$ = $dir$$22$$, $needSort$$2$$ = !0);
    if ($needSort$$2$$) {
      "none" === this.$sortdir$ && (this.$cache$ = {});
      for (var $prop$$78$$ in this.$cache$) {
        this.$cache$.hasOwnProperty($prop$$78$$) && this.$_applySortToCollection$(this.$cache$[$prop$$78$$]);
      }
    }
    $callbacks$$43$$ && $callbacks$$43$$.success && $callbacks$$43$$.success();
  };
  $oj$$60$$.$Object$.$exportPrototypeSymbol$("CollectionTreeDataSource.prototype.sort", {sort:$oj$$60$$.$CollectionTreeDataSource$.prototype.sort});
  $oj$$60$$.$CollectionTreeDataSource$.prototype.$_applySortToCollection$ = function $$oj$$60$$$$CollectionTreeDataSource$$$$_applySortToCollection$$($collection$$56$$) {
    $collection$$56$$.comparator = this.$sortkey$;
    $collection$$56$$.sortDirection = "ascending" === this.$sortdir$ ? 1 : -1;
    $collection$$56$$.sort();
  };
  $oj$$60$$.$CollectionTreeDataSource$.prototype.$getSortCriteria$ = function $$oj$$60$$$$CollectionTreeDataSource$$$$getSortCriteria$$() {
    return{key:this.$sortkey$, direction:this.$sortdir$};
  };
  $oj$$60$$.$Object$.$exportPrototypeSymbol$("CollectionTreeDataSource.prototype.getSortCriteria", {$getSortCriteria$:$oj$$60$$.$CollectionTreeDataSource$.prototype.$getSortCriteria$});
  $oj$$60$$.$CollectionTreeDataSource$.prototype.move = function $$oj$$60$$$$CollectionTreeDataSource$$$move$() {
    $oj$$60$$.$Assert$.$failedInAbstractFunction$();
  };
  $oj$$60$$.$Object$.$exportPrototypeSymbol$("CollectionTreeDataSource.prototype.move", {move:$oj$$60$$.$CollectionTreeDataSource$.prototype.move});
  $oj$$60$$.$CollectionTreeDataSource$.prototype.moveOK = function $$oj$$60$$$$CollectionTreeDataSource$$$moveOK$() {
    return "invalid";
  };
  $oj$$60$$.$Object$.$exportPrototypeSymbol$("CollectionTreeDataSource.prototype.moveOK", {moveOK:$oj$$60$$.$CollectionTreeDataSource$.prototype.moveOK});
  $oj$$60$$.$CollectionTreeDataSource$.prototype.getCapability = function $$oj$$60$$$$CollectionTreeDataSource$$$getCapability$($feature$$9$$) {
    return "sort" === $feature$$9$$ ? "default" : "move" === $feature$$9$$ ? "none" : "batchFetch" === $feature$$9$$ || "fetchDescendants" === $feature$$9$$ ? "disable" : null;
  };
  $oj$$60$$.$Object$.$exportPrototypeSymbol$("CollectionTreeDataSource.prototype.getCapability", {getCapability:$oj$$60$$.$CollectionTreeDataSource$.prototype.getCapability});
});

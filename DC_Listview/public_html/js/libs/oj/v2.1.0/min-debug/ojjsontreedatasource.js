/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
define(["ojs/ojcore", "jquery", "ojs/ojdatasource-common"], function($oj$$76$$) {
  $oj$$76$$.$_JsonTreeNodeDataSource$ = function $$oj$$76$$$$_JsonTreeNodeDataSource$$() {
    this.id = null;
    this.depth = 0;
    this.parent = null;
    this.children = [];
    this.$leaf$ = this.attr = this.title = null;
  };
  $oj$$76$$.$_JsonTreeNodeDataSource$.prototype.$_ascending$ = function $$oj$$76$$$$_JsonTreeNodeDataSource$$$$_ascending$$($key$$206$$) {
    return function($a$$111$$, $b$$76$$) {
      return $a$$111$$.attr && $b$$76$$.attr && $a$$111$$.attr[$key$$206$$] && $b$$76$$.attr[$key$$206$$] ? $a$$111$$.attr[$key$$206$$] < $b$$76$$.attr[$key$$206$$] ? -1 : $a$$111$$.attr[$key$$206$$] === $b$$76$$.attr[$key$$206$$] ? 0 : 1 : $a$$111$$[$key$$206$$] < $b$$76$$[$key$$206$$] ? -1 : $a$$111$$[$key$$206$$] === $b$$76$$[$key$$206$$] ? 0 : 1;
    };
  };
  $oj$$76$$.$_JsonTreeNodeDataSource$.prototype.$_descending$ = function $$oj$$76$$$$_JsonTreeNodeDataSource$$$$_descending$$($key$$207$$) {
    return function($a$$112$$, $b$$77$$) {
      return $a$$112$$.attr && $b$$77$$.attr && $a$$112$$.attr[$key$$207$$] && $b$$77$$.attr[$key$$207$$] ? $a$$112$$.attr[$key$$207$$] < $b$$77$$.attr[$key$$207$$] ? 1 : $a$$112$$.attr[$key$$207$$] === $b$$77$$.attr[$key$$207$$] ? 0 : -1 : $a$$112$$[$key$$207$$] < $b$$77$$[$key$$207$$] ? 1 : $a$$112$$[$key$$207$$] === $b$$77$$[$key$$207$$] ? 0 : -1;
    };
  };
  $oj$$76$$.$_JsonTreeNodeDataSource$.prototype.$_sortRecursive$ = function $$oj$$76$$$$_JsonTreeNodeDataSource$$$$_sortRecursive$$($criteria$$11$$) {
    var $i$$522_key$$208$$ = $criteria$$11$$.key;
    "ascending" === $criteria$$11$$.direction ? this.children.sort(this.$_ascending$($i$$522_key$$208$$)) : "descending" === $criteria$$11$$.direction && this.children.sort(this.$_descending$($i$$522_key$$208$$));
    for (var $i$$522_key$$208$$ = 0, $l$$17$$ = this.children.length;$i$$522_key$$208$$ < $l$$17$$;$i$$522_key$$208$$++) {
      this.children[$i$$522_key$$208$$].$_sortRecursive$($criteria$$11$$);
    }
  };
  $oj$$76$$.$JsonTreeDataSource$ = function $$oj$$76$$$$JsonTreeDataSource$$($data$$182$$) {
    var $tree$$1$$;
    $tree$$1$$ = new $oj$$76$$.$_JsonTreeNodeDataSource$;
    $data$$182$$.id || ($tree$$1$$.id = "root");
    this.data = this.$_createTreeDataSource$({count:0}, $tree$$1$$, $data$$182$$);
    $oj$$76$$.$JsonTreeDataSource$.$superclass$.constructor.call(this, $tree$$1$$);
  };
  $goog$exportPath_$$("JsonTreeDataSource", $oj$$76$$.$JsonTreeDataSource$, $oj$$76$$);
  $oj$$76$$.$Object$.$createSubclass$($oj$$76$$.$JsonTreeDataSource$, $oj$$76$$.$TreeDataSource$, "oj.JsonTreeDataSource");
  $oj$$76$$.$JsonTreeDataSource$.prototype.Init = function $$oj$$76$$$$JsonTreeDataSource$$$Init$() {
    $oj$$76$$.$JsonTreeDataSource$.$superclass$.Init.call(this);
  };
  $oj$$76$$.$Object$.$exportPrototypeSymbol$("JsonTreeDataSource.prototype.Init", {Init:$oj$$76$$.$JsonTreeDataSource$.prototype.Init});
  $oj$$76$$.$JsonTreeDataSource$.prototype.$_createTreeDataSource$ = function $$oj$$76$$$$JsonTreeDataSource$$$$_createTreeDataSource$$($c$$59$$, $target$$136$$, $source$$14$$, $depth$$30$$) {
    var $children$$30$$, $node$$172$$, $child$$24$$, $prop$$83$$, $propr$$, $prp$$, $j$$60$$;
    $depth$$30$$ || ($depth$$30$$ = 0);
    for ($prop$$83$$ in $source$$14$$) {
      if ("children" == $prop$$83$$ || 0 == $depth$$30$$ && $source$$14$$ instanceof Array) {
        for ($children$$30$$ = 0 == $depth$$30$$ && $source$$14$$ instanceof Array ? $source$$14$$ : $source$$14$$[$prop$$83$$], $depth$$30$$++, $j$$60$$ = 0;$j$$60$$ < $children$$30$$.length;$j$$60$$++) {
          $child$$24$$ = $children$$30$$[$j$$60$$];
          $node$$172$$ = new $oj$$76$$.$_JsonTreeNodeDataSource$;
          $child$$24$$.id || ($c$$59$$.count++, $child$$24$$.attr ? $child$$24$$.attr.id || ($child$$24$$.attr.id = "rid_" + $c$$59$$.count) : $node$$172$$.id = "rid_" + $c$$59$$.count);
          for ($propr$$ in $child$$24$$) {
            for ($prp$$ in $node$$172$$) {
              $propr$$ == $prp$$ && "children" != $propr$$ && ($node$$172$$[$prp$$] = $child$$24$$[$propr$$]), "depth" == $prp$$ && ($node$$172$$[$prp$$] = $depth$$30$$);
            }
          }
          $target$$136$$.children.push($node$$172$$);
          for ($prp$$ in $child$$24$$) {
            "children" == $prp$$ && this.$_createTreeDataSource$($c$$59$$, $target$$136$$.children[$j$$60$$], $child$$24$$, $depth$$30$$);
          }
        }
      }
    }
    return $target$$136$$;
  };
  $oj$$76$$.$JsonTreeDataSource$.prototype.$getChildCount$ = function $$oj$$76$$$$JsonTreeDataSource$$$$getChildCount$$($parent$$54_parentKey$$10$$) {
    $parent$$54_parentKey$$10$$ || ($parent$$54_parentKey$$10$$ = this.data.id);
    $parent$$54_parentKey$$10$$ = this.$_searchTreeById$(this.data, $parent$$54_parentKey$$10$$);
    return $parent$$54_parentKey$$10$$.children ? $parent$$54_parentKey$$10$$.children.length : 0;
  };
  $oj$$76$$.$Object$.$exportPrototypeSymbol$("JsonTreeDataSource.prototype.getChildCount", {$getChildCount$:$oj$$76$$.$JsonTreeDataSource$.prototype.$getChildCount$});
  $oj$$76$$.$JsonTreeDataSource$.prototype.$fetchChildren$ = function $$oj$$76$$$$JsonTreeDataSource$$$$fetchChildren$$($nodeSet$$33_parentKey$$11$$, $i$$523_range$$32$$, $callbacks$$58$$) {
    var $childStart$$, $childEnd$$, $results$$13$$, $parent$$55$$, $node$$173$$;
    $results$$13$$ = [];
    $nodeSet$$33_parentKey$$11$$ || ($nodeSet$$33_parentKey$$11$$ = this.data.id);
    $parent$$55$$ = this.$_searchTreeById$(this.data, $nodeSet$$33_parentKey$$11$$);
    $i$$523_range$$32$$ || ($i$$523_range$$32$$ = [], $i$$523_range$$32$$.start = 0, $i$$523_range$$32$$.count = $parent$$55$$.children.length);
    $i$$523_range$$32$$.count || ($i$$523_range$$32$$.count = $parent$$55$$.children.length);
    $i$$523_range$$32$$.start || ($i$$523_range$$32$$.start = 0);
    $childStart$$ = $i$$523_range$$32$$.start;
    $childEnd$$ = Math.min($parent$$55$$.children.length, $childStart$$ + $i$$523_range$$32$$.count);
    for ($i$$523_range$$32$$ = $childStart$$;$i$$523_range$$32$$ < $childEnd$$;$i$$523_range$$32$$ += 1) {
      $node$$173$$ = new $oj$$76$$.$_JsonTreeNodeDataSource$, $parent$$55$$.children[$i$$523_range$$32$$].attr && ($node$$173$$.attr = $parent$$55$$.children[$i$$523_range$$32$$].attr), $parent$$55$$.children[$i$$523_range$$32$$].id && ($node$$173$$.id = $parent$$55$$.children[$i$$523_range$$32$$].id), $parent$$55$$.children[$i$$523_range$$32$$].depth && ($node$$173$$.depth = $parent$$55$$.children[$i$$523_range$$32$$].depth), $parent$$55$$.children[$i$$523_range$$32$$].title && ($node$$173$$.title = 
      $parent$$55$$.children[$i$$523_range$$32$$].title), $parent$$55$$.children[$i$$523_range$$32$$].parent && ($node$$173$$.parent = $parent$$55$$.children[$i$$523_range$$32$$].parent), $node$$173$$.$leaf$ = 0 < $parent$$55$$.children[$i$$523_range$$32$$].children.length ? !1 : !0, $results$$13$$.push($node$$173$$);
    }
    $nodeSet$$33_parentKey$$11$$ = new $oj$$76$$.$JsonNodeSet$($childStart$$, $childEnd$$, $results$$13$$, $nodeSet$$33_parentKey$$11$$);
    null != $callbacks$$58$$ && null != $callbacks$$58$$.success && $callbacks$$58$$.success.call(null, $nodeSet$$33_parentKey$$11$$);
  };
  $oj$$76$$.$Object$.$exportPrototypeSymbol$("JsonTreeDataSource.prototype.fetchChildren", {$fetchChildren$:$oj$$76$$.$JsonTreeDataSource$.prototype.$fetchChildren$});
  $oj$$76$$.$JsonTreeDataSource$.prototype.$fetchDescendants$ = function $$oj$$76$$$$JsonTreeDataSource$$$$fetchDescendants$$($parentKey$$12$$, $callbacks$$59$$) {
    var $childEnd$$1_range$$33$$, $childStart$$1_i$$524$$, $nodeSet$$34_results$$14$$, $parent$$56$$;
    $nodeSet$$34_results$$14$$ = [];
    $parentKey$$12$$ || ($parentKey$$12$$ = this.data.id);
    $parent$$56$$ = this.$_searchTreeById$(this.data, $parentKey$$12$$);
    $childEnd$$1_range$$33$$ = [];
    $childEnd$$1_range$$33$$.start = 0;
    $childEnd$$1_range$$33$$.count = $parent$$56$$.children.length;
    $childStart$$1_i$$524$$ = $childEnd$$1_range$$33$$.start;
    for ($childEnd$$1_range$$33$$ = Math.min($parent$$56$$.children.length, $childStart$$1_i$$524$$ + $childEnd$$1_range$$33$$.count);$childStart$$1_i$$524$$ < $childEnd$$1_range$$33$$;$childStart$$1_i$$524$$ += 1) {
      $parent$$56$$.children[$childStart$$1_i$$524$$].$leaf$ = 0 < $parent$$56$$.children[$childStart$$1_i$$524$$].children.length ? !1 : !0, $nodeSet$$34_results$$14$$.push($parent$$56$$.children[$childStart$$1_i$$524$$]);
    }
    $nodeSet$$34_results$$14$$ = new $oj$$76$$.$JsonNodeSet$(0, $nodeSet$$34_results$$14$$.length, $nodeSet$$34_results$$14$$, $parentKey$$12$$);
    null != $callbacks$$59$$ && null != $callbacks$$59$$.success && $callbacks$$59$$.success.call(null, $nodeSet$$34_results$$14$$);
  };
  $oj$$76$$.$Object$.$exportPrototypeSymbol$("JsonTreeDataSource.prototype.fetchDescendants", {$fetchDescendants$:$oj$$76$$.$JsonTreeDataSource$.prototype.$fetchDescendants$});
  $oj$$76$$.$JsonTreeDataSource$.prototype.moveOK = function $$oj$$76$$$$JsonTreeDataSource$$$moveOK$() {
    return "valid";
  };
  $oj$$76$$.$Object$.$exportPrototypeSymbol$("JsonTreeDataSource.prototype.moveOK", {moveOK:$oj$$76$$.$JsonTreeDataSource$.prototype.moveOK});
  $oj$$76$$.$JsonTreeDataSource$.prototype.move = function $$oj$$76$$$$JsonTreeDataSource$$$move$($moveNode_nodeToMove$$, $refNode$$8_referenceNode$$1$$, $index$$334_position$$49$$, $callbacks$$60$$) {
    var $parent$$57_refNodeKey$$;
    $parent$$57_refNodeKey$$ = $refNode$$8_referenceNode$$1$$;
    if (!$parent$$57_refNodeKey$$ || $parent$$57_refNodeKey$$ == this.data.id) {
      if ("inside" != $index$$334_position$$49$$) {
        $oj$$76$$.$Logger$.log("Error: root can not be the reference node if position equals to " + $index$$334_position$$49$$);
        return;
      }
      $parent$$57_refNodeKey$$ || ($parent$$57_refNodeKey$$ = this.data.id);
    }
    $moveNode_nodeToMove$$ = this.$_searchTreeById$(null, $moveNode_nodeToMove$$);
    this.$_searchTreeById$($moveNode_nodeToMove$$, $parent$$57_refNodeKey$$) ? $oj$$76$$.$Logger$.log("Error: the node to move contains the reference node as its sub-tree.") : ($refNode$$8_referenceNode$$1$$ = this.$_searchTreeById$(null, $parent$$57_refNodeKey$$), $parent$$57_refNodeKey$$ = this.$_getParentById$($parent$$57_refNodeKey$$), this.$_removeFromTree$($moveNode_nodeToMove$$), "inside" == $index$$334_position$$49$$ ? (this.$_updateDepth$($moveNode_nodeToMove$$, $moveNode_nodeToMove$$.depth - 
    ($refNode$$8_referenceNode$$1$$.depth + 1)), $refNode$$8_referenceNode$$1$$.children.push($moveNode_nodeToMove$$)) : "before" == $index$$334_position$$49$$ ? (this.$_updateDepth$($moveNode_nodeToMove$$, $moveNode_nodeToMove$$.depth - $refNode$$8_referenceNode$$1$$.depth), $index$$334_position$$49$$ = $parent$$57_refNodeKey$$.children.indexOf($refNode$$8_referenceNode$$1$$), -1 < $index$$334_position$$49$$ && (0 != $index$$334_position$$49$$ ? $parent$$57_refNodeKey$$.children.splice($index$$334_position$$49$$, 
    0, $moveNode_nodeToMove$$) : $parent$$57_refNodeKey$$.children.unshift($moveNode_nodeToMove$$))) : "after" == $index$$334_position$$49$$ ? (this.$_updateDepth$($moveNode_nodeToMove$$, $moveNode_nodeToMove$$.depth - $refNode$$8_referenceNode$$1$$.depth), $index$$334_position$$49$$ = $parent$$57_refNodeKey$$.children.indexOf($refNode$$8_referenceNode$$1$$), -1 < $index$$334_position$$49$$ && $parent$$57_refNodeKey$$.children.splice($index$$334_position$$49$$ + 1, 0, $moveNode_nodeToMove$$)) : "first" == 
    $index$$334_position$$49$$ ? (this.$_updateDepth$($moveNode_nodeToMove$$, $moveNode_nodeToMove$$.depth - $refNode$$8_referenceNode$$1$$.depth), $parent$$57_refNodeKey$$.children.unshift($moveNode_nodeToMove$$)) : "last" == $index$$334_position$$49$$ && (this.$_updateDepth$($moveNode_nodeToMove$$, $moveNode_nodeToMove$$.depth - $refNode$$8_referenceNode$$1$$.depth), $parent$$57_refNodeKey$$.children.push($moveNode_nodeToMove$$)), null != $callbacks$$60$$ && null != $callbacks$$60$$.success && 
    $callbacks$$60$$.success.call(null, this.data));
  };
  $oj$$76$$.$Object$.$exportPrototypeSymbol$("JsonTreeDataSource.prototype.move", {move:$oj$$76$$.$JsonTreeDataSource$.prototype.move});
  $oj$$76$$.$JsonTreeDataSource$.prototype.sort = function $$oj$$76$$$$JsonTreeDataSource$$$sort$($criteria$$12$$, $callbacks$$61$$) {
    var $parent$$58$$;
    $parent$$58$$ = this.$_searchTreeById$(this.data, this.data.id);
    $parent$$58$$.$_sortRecursive$($criteria$$12$$);
    null != $callbacks$$61$$ && null != $callbacks$$61$$.success && $callbacks$$61$$.success.call(null, $parent$$58$$);
  };
  $oj$$76$$.$Object$.$exportPrototypeSymbol$("JsonTreeDataSource.prototype.sort", {sort:$oj$$76$$.$JsonTreeDataSource$.prototype.sort});
  $oj$$76$$.$JsonTreeDataSource$.prototype.$getSortCriteria$ = function $$oj$$76$$$$JsonTreeDataSource$$$$getSortCriteria$$() {
    return{key:null, direction:"none"};
  };
  $oj$$76$$.$Object$.$exportPrototypeSymbol$("JsonTreeDataSource.prototype.getSortCriteria", {$getSortCriteria$:$oj$$76$$.$JsonTreeDataSource$.prototype.$getSortCriteria$});
  $oj$$76$$.$JsonTreeDataSource$.prototype.$_getParentById$ = function $$oj$$76$$$$JsonTreeDataSource$$$$_getParentById$$($refNodeKey$$1$$, $currNode$$4$$) {
    var $i$$525$$, $parent$$59$$ = null;
    if ($refNodeKey$$1$$ == this.data.id) {
      return null;
    }
    $currNode$$4$$ || ($currNode$$4$$ = this.data);
    if ($currNode$$4$$.children && 0 < $currNode$$4$$.children.length) {
      for ($i$$525$$ = 0;$i$$525$$ < $currNode$$4$$.children.length;$i$$525$$++) {
        if ($currNode$$4$$.children[$i$$525$$].id && $currNode$$4$$.children[$i$$525$$].id == $refNodeKey$$1$$ || $currNode$$4$$.children[$i$$525$$].attr && $currNode$$4$$.children[$i$$525$$].attr.id == $refNodeKey$$1$$) {
          return $currNode$$4$$;
        }
      }
      for ($i$$525$$ = 0;$i$$525$$ < $currNode$$4$$.children.length && !($parent$$59$$ = this.$_getParentById$($refNodeKey$$1$$, $currNode$$4$$.children[$i$$525$$]));$i$$525$$++) {
      }
    }
    return $parent$$59$$;
  };
  $oj$$76$$.$JsonTreeDataSource$.prototype.$_searchTreeById$ = function $$oj$$76$$$$JsonTreeDataSource$$$$_searchTreeById$$($currChild$$2$$, $parentKey$$14$$) {
    var $i$$526$$, $result$$79$$ = null;
    $currChild$$2$$ || ($currChild$$2$$ = this.data);
    if ($currChild$$2$$.id && $currChild$$2$$.id == $parentKey$$14$$ || $currChild$$2$$.attr && $currChild$$2$$.attr.id == $parentKey$$14$$) {
      return $currChild$$2$$;
    }
    if (null != $currChild$$2$$.children) {
      for ($i$$526$$ = 0;$i$$526$$ < $currChild$$2$$.children.length && !$result$$79$$;$i$$526$$++) {
        $result$$79$$ = $currChild$$2$$.children[$i$$526$$].id && $currChild$$2$$.children[$i$$526$$].id == $parentKey$$14$$ || $currChild$$2$$.children[$i$$526$$].attr && $currChild$$2$$.children[$i$$526$$].attr.id == $parentKey$$14$$ ? $currChild$$2$$.children[$i$$526$$] : this.$_searchTreeById$($currChild$$2$$.children[$i$$526$$], $parentKey$$14$$);
      }
    }
    return $result$$79$$;
  };
  $oj$$76$$.$JsonTreeDataSource$.prototype.$_updateDepth$ = function $$oj$$76$$$$JsonTreeDataSource$$$$_updateDepth$$($currChild$$3$$, $offset$$29$$) {
    var $i$$527$$;
    $currChild$$3$$.depth -= $offset$$29$$;
    if ($currChild$$3$$.children && 0 != $currChild$$3$$.children.length) {
      for ($i$$527$$ = 0;$i$$527$$ < $currChild$$3$$.children.length;$i$$527$$++) {
        this.$_updateDepth$($currChild$$3$$.children[$i$$527$$], $offset$$29$$);
      }
    }
  };
  $oj$$76$$.$JsonTreeDataSource$.prototype.$_removeFromTree$ = function $$oj$$76$$$$JsonTreeDataSource$$$$_removeFromTree$$($currChild$$4_index$$335$$) {
    var $key$$209_parent$$60$$;
    $currChild$$4_index$$335$$.id ? $key$$209_parent$$60$$ = $currChild$$4_index$$335$$.id : $currChild$$4_index$$335$$.attr && ($key$$209_parent$$60$$ = $currChild$$4_index$$335$$.attr.id);
    ($key$$209_parent$$60$$ = this.$_getParentById$($key$$209_parent$$60$$)) || ($key$$209_parent$$60$$ = this.data);
    $currChild$$4_index$$335$$ = $key$$209_parent$$60$$.children.indexOf($currChild$$4_index$$335$$);
    -1 < $currChild$$4_index$$335$$ && $key$$209_parent$$60$$.children.splice($currChild$$4_index$$335$$, 1);
  };
  $oj$$76$$.$JsonTreeDataSource$.prototype.getCapability = function $$oj$$76$$$$JsonTreeDataSource$$$getCapability$($feature$$16$$) {
    return "fetchDescendants" === $feature$$16$$ ? "enable" : "sort" === $feature$$16$$ ? "default" : "batchFetch" === $feature$$16$$ ? "disable" : "move" === $feature$$16$$ ? "full" : null;
  };
  $oj$$76$$.$Object$.$exportPrototypeSymbol$("JsonTreeDataSource.prototype.getCapability", {getCapability:$oj$$76$$.$JsonTreeDataSource$.prototype.getCapability});
  $oj$$76$$.$JsonNodeSet$ = function $$oj$$76$$$$JsonNodeSet$$($startNode$$, $endNode$$, $data$$183$$, $currKey$$1$$) {
    $oj$$76$$.$Assert$.$assertNumber$($startNode$$, null);
    $oj$$76$$.$Assert$.$assertNumber$($endNode$$, null);
    this.$m_key$ = $currKey$$1$$;
    this.$m_startNode$ = $startNode$$;
    this.$m_endNode$ = $endNode$$;
    this.$m_nodes$ = $data$$183$$;
  };
  $goog$exportPath_$$("JsonNodeSet", $oj$$76$$.$JsonNodeSet$, $oj$$76$$);
  $oj$$76$$.$JsonNodeSet$.prototype.getParent = function $$oj$$76$$$$JsonNodeSet$$$getParent$() {
    return this.$m_key$;
  };
  $oj$$76$$.$Object$.$exportPrototypeSymbol$("JsonNodeSet.prototype.getParent", {getParent:$oj$$76$$.$JsonNodeSet$.prototype.getParent});
  $oj$$76$$.$JsonNodeSet$.prototype.getStart = function $$oj$$76$$$$JsonNodeSet$$$getStart$() {
    return this.$m_startNode$;
  };
  $oj$$76$$.$Object$.$exportPrototypeSymbol$("JsonNodeSet.prototype.getStart", {getStart:$oj$$76$$.$JsonNodeSet$.prototype.getStart});
  $oj$$76$$.$JsonNodeSet$.prototype.getCount = function $$oj$$76$$$$JsonNodeSet$$$getCount$() {
    return Math.max(0, this.$m_endNode$ - this.$m_startNode$);
  };
  $oj$$76$$.$Object$.$exportPrototypeSymbol$("JsonNodeSet.prototype.getCount", {getCount:$oj$$76$$.$JsonNodeSet$.prototype.getCount});
  $oj$$76$$.$JsonNodeSet$.prototype.getData = function $$oj$$76$$$$JsonNodeSet$$$getData$($index$$336$$) {
    $oj$$76$$.$Assert$.assert($index$$336$$ <= this.$m_endNode$ && $index$$336$$ >= this.$m_startNode$);
    $index$$336$$ -= this.$m_startNode$;
    return this.$m_nodes$[$index$$336$$] ? this.$m_nodes$[$index$$336$$].attr : null;
  };
  $oj$$76$$.$Object$.$exportPrototypeSymbol$("JsonNodeSet.prototype.getData", {getData:$oj$$76$$.$JsonNodeSet$.prototype.getData});
  $oj$$76$$.$JsonNodeSet$.prototype.getMetadata = function $$oj$$76$$$$JsonNodeSet$$$getMetadata$($index$$337$$) {
    var $metadata$$19$$ = [];
    $oj$$76$$.$Assert$.assert($index$$337$$ <= this.$m_endNode$ && $index$$337$$ >= this.$m_startNode$);
    $index$$337$$ -= this.$m_startNode$;
    $metadata$$19$$.key = this.$m_nodes$[$index$$337$$].id ? this.$m_nodes$[$index$$337$$].id : this.$m_nodes$[$index$$337$$].attr.id;
    $metadata$$19$$.leaf = this.$m_nodes$[$index$$337$$].$leaf$;
    $metadata$$19$$.depth = this.$m_nodes$[$index$$337$$].depth;
    null == $metadata$$19$$.leaf && ($metadata$$19$$.leaf = this.$m_nodes$[$index$$337$$].children && 0 < this.$m_nodes$[$index$$337$$].children.length ? !1 : !0);
    return $metadata$$19$$;
  };
  $oj$$76$$.$Object$.$exportPrototypeSymbol$("JsonNodeSet.prototype.getMetadata", {getMetadata:$oj$$76$$.$JsonNodeSet$.prototype.getMetadata});
  $oj$$76$$.$JsonNodeSet$.prototype.$_updateDepth$ = function $$oj$$76$$$$JsonNodeSet$$$$_updateDepth$$($currChild$$5$$, $offset$$30$$) {
    var $i$$528$$;
    $offset$$30$$++;
    $currChild$$5$$.depth = $offset$$30$$;
    if ($currChild$$5$$.children && 0 != $currChild$$5$$.children.length) {
      for ($i$$528$$ = 0;$i$$528$$ < $currChild$$5$$.children.length;$i$$528$$++) {
        this.$_updateDepth$($currChild$$5$$.children[$i$$528$$], $offset$$30$$);
      }
    }
  };
  $oj$$76$$.$JsonNodeSet$.prototype.$getChildNodeSet$ = function $$oj$$76$$$$JsonNodeSet$$$$getChildNodeSet$$($index$$338_key$$210$$) {
    var $results$$15$$, $depth$$32$$, $i$$529$$;
    $oj$$76$$.$Assert$.assert($index$$338_key$$210$$ <= this.$m_endNode$ && $index$$338_key$$210$$ >= this.$m_startNode$);
    $index$$338_key$$210$$ -= this.$m_startNode$;
    $depth$$32$$ = this.$m_nodes$[$index$$338_key$$210$$].depth;
    $results$$15$$ = this.$m_nodes$[$index$$338_key$$210$$].children;
    if (0 == $results$$15$$.length) {
      return null;
    }
    $index$$338_key$$210$$ = this.$m_nodes$[$index$$338_key$$210$$].id ? this.$m_nodes$[$index$$338_key$$210$$].id : this.$m_nodes$[$index$$338_key$$210$$].attr.id;
    for ($i$$529$$ = 0;$i$$529$$ < $results$$15$$.length;$i$$529$$++) {
      this.$_updateDepth$($results$$15$$[$i$$529$$], $depth$$32$$);
    }
    return new $oj$$76$$.$JsonNodeSet$(0, $results$$15$$.length, $results$$15$$, $index$$338_key$$210$$);
  };
  $oj$$76$$.$Object$.$exportPrototypeSymbol$("JsonNodeSet.prototype.getChildNodeSet", {$getChildNodeSet$:$oj$$76$$.$JsonNodeSet$.prototype.$getChildNodeSet$});
});

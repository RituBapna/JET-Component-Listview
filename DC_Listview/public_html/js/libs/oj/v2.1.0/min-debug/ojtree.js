/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
define(["ojs/ojcore", "jquery", "ojs/ojcomponentcore", "ojdnd"], function($oj$$66$$, $$$$61$$) {
  function $TreeUtils$$() {
  }
  $TreeUtils$$.$_OJ_EXPANDED$ = "oj-expanded";
  $TreeUtils$$.$_OJ_COLLAPSED$ = "oj-collapsed";
  $TreeUtils$$.$_OJ_HOVER$ = "oj-hover";
  $TreeUtils$$.$_OJ_SELECTED$ = "oj-selected";
  $TreeUtils$$.$_OJ_DISABLED$ = "oj-disabled";
  $TreeUtils$$.$_OJ_DEFAULT$ = "oj-default";
  $TreeUtils$$.$_OJ_TEMPNODE$ = "oj-treenode-temp";
  $oj$$66$$.$TreeDndContext$ = function $$oj$$66$$$$TreeDndContext$$($component$$28$$) {
    this.Init($component$$28$$);
  };
  $oj$$66$$.$Object$.$createSubclass$($oj$$66$$.$TreeDndContext$, $oj$$66$$.$Object$, "oj.TreeDndContext");
  $oj$$66$$.$TreeDndContext$.prototype.Init = function $$oj$$66$$$$TreeDndContext$$$Init$($component$$29$$) {
    $oj$$66$$.$TreeDndContext$.$superclass$.Init.call(this);
    this.$component$ = $component$$29$$;
    this.options = $component$$29$$.options;
    this.$_reset$();
  };
  $oj$$66$$.$Object$.$exportPrototypeSymbol$("TreeDndContext.prototype.Init", {Init:$oj$$66$$.$TreeDndContext$.prototype.Init});
  $oj$$66$$.$TreeDndContext$.prototype.$isDragEnabled$ = function $$oj$$66$$$$TreeDndContext$$$$isDragEnabled$$() {
    var $dnd$$1$$ = this.$_dnd$;
    return $dnd$$1$$.reorder || $dnd$$1$$.$dragFromEnabled$;
  };
  $oj$$66$$.$TreeDndContext$.prototype.$isDropEnabled$ = function $$oj$$66$$$$TreeDndContext$$$$isDropEnabled$$() {
    var $dnd$$2$$ = this.$_dnd$;
    return $dnd$$2$$.reorder || $dnd$$2$$.$dropToEnabled$;
  };
  $oj$$66$$.$TreeDndContext$.prototype.$handleDnDOptionChange$ = function $$oj$$66$$$$TreeDndContext$$$$handleDnDOptionChange$$() {
    var $dnd$$3$$ = this.$_dnd$, $cons$$ = $oj$$66$$.$TreeDndContext$, $reorder$$ = $dnd$$3$$.reorder, $dragFromEnabled$$ = $dnd$$3$$.$dragFromEnabled$;
    this.$_dndCleanAll$();
    this.$initDnDOpts$();
    $dnd$$3$$ = this.$_dnd$;
    if ($reorder$$ != $dnd$$3$$.reorder || $dragFromEnabled$$ != $dnd$$3$$.$dragFromEnabled$) {
      $dnd$$3$$.reorder || $dnd$$3$$.$dragFromEnabled$ || this.$component$.$_$container_ul$.find("li").removeClass($cons$$.$_OJ_DRAGGABLE$).removeClass($cons$$.$_OJ_DRAG$).removeClass($cons$$.$_OJ_VALID_DROP$).removeAttr("draggable");
    }
    this.$initDnD$();
  };
  $oj$$66$$.$TreeDndContext$.prototype.$initDnDOpts$ = function $$oj$$66$$$$TreeDndContext$$$$initDnDOpts$$() {
    var $odnd$$ = this.options.dnd, $dnd$$4$$ = this.$_dnd$, $cons$$1$$ = $oj$$66$$.$TreeDndContext$, $bSetDisable_cb$$1$$ = !0, $n$$27_opts$$36$$;
    $dnd$$4$$.reorder = !1;
    "object" != typeof $odnd$$ ? this.options.dnd = {reorder:"disable"} : ($n$$27_opts$$36$$ = $odnd$$[$cons$$1$$.$_DND_REORDER$], "string" === typeof $n$$27_opts$$36$$ && ("enable" === $n$$27_opts$$36$$ ? ($dnd$$4$$.reorder = !0, $bSetDisable_cb$$1$$ = !1) : "disable" == $n$$27_opts$$36$$ && ($bSetDisable_cb$$1$$ = !1)), $bSetDisable_cb$$1$$ && (this.options.dnd.reorder = "disable"), $n$$27_opts$$36$$ = $odnd$$[$cons$$1$$.$_DND_DRAG$], "object" == typeof $n$$27_opts$$36$$ && ($n$$27_opts$$36$$ = 
    $n$$27_opts$$36$$[$cons$$1$$.$_DND_NODE$], "object" == typeof $n$$27_opts$$36$$ && ($bSetDisable_cb$$1$$ = $n$$27_opts$$36$$[$cons$$1$$.$_DND_DRAGSTART_CB$], "function" == typeof $bSetDisable_cb$$1$$ && ($dnd$$4$$.$dragStartCallback$ = $bSetDisable_cb$$1$$, $dnd$$4$$.$dragFromEnabled$ = !0), $bSetDisable_cb$$1$$ = $n$$27_opts$$36$$[$cons$$1$$.$_DND_DRAGDRAG_CB$], "function" == typeof $bSetDisable_cb$$1$$ && ($dnd$$4$$.$dragDragCallback$ = $bSetDisable_cb$$1$$, $dnd$$4$$.$dragFromEnabled$ = !0), 
    $bSetDisable_cb$$1$$ = $n$$27_opts$$36$$[$cons$$1$$.$_DND_DRAGEND_CB$], "function" == typeof $bSetDisable_cb$$1$$ && ($dnd$$4$$.$dragEndCallback$ = $bSetDisable_cb$$1$$, $dnd$$4$$.$dragFromEnabled$ = !0), $bSetDisable_cb$$1$$ = $n$$27_opts$$36$$[$cons$$1$$.$_DND_DATATYPES$], $$$$61$$.isArray($bSetDisable_cb$$1$$) ? ($dnd$$4$$.$dragDataTypes$ = $bSetDisable_cb$$1$$.slice(), $dnd$$4$$.$dragFromEnabled$ = !0) : "string" == typeof $bSetDisable_cb$$1$$ && ($dnd$$4$$.$dragDataTypes$ = [$bSetDisable_cb$$1$$], 
    $dnd$$4$$.$dragFromEnabled$ = !0))), $n$$27_opts$$36$$ = $odnd$$[$cons$$1$$.$_DND_DROP$], "object" == typeof $n$$27_opts$$36$$ && ($n$$27_opts$$36$$ = $n$$27_opts$$36$$[$cons$$1$$.$_DND_NODE$], "object" == typeof $n$$27_opts$$36$$ && ($bSetDisable_cb$$1$$ = $n$$27_opts$$36$$[$cons$$1$$.$_DND_DROPDRAGENTER_CB$], "function" == typeof $bSetDisable_cb$$1$$ && ($dnd$$4$$.$dropDragEnterCallback$ = $bSetDisable_cb$$1$$, $dnd$$4$$.$dropToEnabled$ = !0), $bSetDisable_cb$$1$$ = $n$$27_opts$$36$$[$cons$$1$$.$_DND_DROPDRAGOVER_CB$], 
    "function" == typeof $bSetDisable_cb$$1$$ && ($dnd$$4$$.$dropDragOverCallback$ = $bSetDisable_cb$$1$$, $dnd$$4$$.$dropToEnabled$ = !0), $bSetDisable_cb$$1$$ = $n$$27_opts$$36$$[$cons$$1$$.$_DND_DROPDRAGLEAVE_CB$], "function" == typeof $bSetDisable_cb$$1$$ && ($dnd$$4$$.$dropDragLeaveCallback$ = $bSetDisable_cb$$1$$, $dnd$$4$$.$dropToEnabled$ = !0), $bSetDisable_cb$$1$$ = $n$$27_opts$$36$$[$cons$$1$$.$_DND_DROPDROP_CB$], "function" == typeof $bSetDisable_cb$$1$$ && ($dnd$$4$$.$dropDropCallback$ = 
    $bSetDisable_cb$$1$$, $dnd$$4$$.$dropToEnabled$ = !0), $bSetDisable_cb$$1$$ = $n$$27_opts$$36$$[$cons$$1$$.$_DND_DATATYPES$], $$$$61$$.isArray($bSetDisable_cb$$1$$) ? ($dnd$$4$$.$dropDataTypes$ = $bSetDisable_cb$$1$$.slice(), $dnd$$4$$.$dropToEnabled$ = !0) : "string" == typeof $bSetDisable_cb$$1$$ && ($dnd$$4$$.$dropDataTypes$ = [$bSetDisable_cb$$1$$], $dnd$$4$$.$dropToEnabled$ = !0))), $dnd$$4$$.reorder || ($dnd$$4$$.$dragDataTypes$ || $dnd$$4$$.$dragStartCallback$ || ($dnd$$4$$.$dragFromEnabled$ = 
    !1, $dnd$$4$$.$dragStartCallback$ = $dnd$$4$$.$dragDragCallback$ = $dnd$$4$$.$dragEndCallback$ = $dnd$$4$$.$dragDataTypes$ = null), $dnd$$4$$.$dropDropCallback$ || ($dnd$$4$$.$dropToEnabled$ = !1, $dnd$$4$$.$dropDragEnterCallback$ = $dnd$$4$$.$dropDragOverCallback$ = $dnd$$4$$.$dropDragLeaveCallback$ = $dnd$$4$$.$dropDropCallback$ = $dnd$$4$$.$dropDataTypes$ = null)), $dnd$$4$$.$pureReorder$ = $dnd$$4$$.reorder && !$dnd$$4$$.$dragFromEnabled$);
  };
  $oj$$66$$.$TreeDndContext$.prototype.$initDnD$ = function $$oj$$66$$$$TreeDndContext$$$$initDnD$$() {
    var $dnd$$5$$ = this.$_dnd$, $div$$10_vars$$ = $dnd$$5$$.$vars$, $cons$$2$$ = $oj$$66$$.$TreeDndContext$;
    if ($dnd$$5$$.$dragFromEnabled$ || $dnd$$5$$.$dropToEnabled$ || $dnd$$5$$.reorder) {
      $oj$$66$$.$TreeDndContext$.$_dragMarker$ ? ($div$$10_vars$$.$m$ = $oj$$66$$.$TreeDndContext$.$_dragMarker$, $div$$10_vars$$.$ml$ = $oj$$66$$.$TreeDndContext$.$_dragMarkerLine$) : ($div$$10_vars$$.$m$ = $$$$61$$("\x3cdiv class\x3d'oj-tree-drop-marker'\x3e\x3cspan class\x3d'oj-tree-drop-ptr oj-component-icon'\x3e\x26#160;\x3c/span\x3e\x3c/div\x3e").css("pointer-events", "none").hide().appendTo("body"), $div$$10_vars$$.$ml$ = $$$$61$$("\x3cdiv /\x3e").addClass($cons$$2$$.$_OJT_DROP_MARKER_LINE$).css("pointer-events", 
      "none").hide().appendTo("body"), $oj$$66$$.$TreeDndContext$.$_dragMarker$ = $div$$10_vars$$.$m$, $oj$$66$$.$TreeDndContext$.$_dragMarkerLine$ = $div$$10_vars$$.$ml$);
      $dnd$$5$$.$ml_width$ = $div$$10_vars$$.$ml$.width();
      var $div$$10_vars$$ = this.$component$.element[0], $$ul$$1$$ = $$$$61$$($div$$10_vars$$).children("ul:eq(0)");
      if ($dnd$$5$$.reorder || $dnd$$5$$.$dragFromEnabled$) {
        $dnd$$5$$.$fnDragStart$ = this.$_dragStart$.bind(this), $dnd$$5$$.$fnDragEnd$ = this.$_dragEnd$.bind(this), $$$$61$$($div$$10_vars$$).on("dragstart", $dnd$$5$$.$fnDragStart$), $$$$61$$($div$$10_vars$$).on("dragend", $dnd$$5$$.$fnDragEnd$), $$ul$$1$$.length && $$ul$$1$$.find("li").addClass($cons$$2$$.$_OJ_DRAGGABLE$).addClass($cons$$2$$.$_OJ_DRAG$).addClass($cons$$2$$.$_OJ_VALID_DROP$).attr("draggable", "true");
      }
      if ($dnd$$5$$.reorder || $dnd$$5$$.$dropToEnabled$) {
        $dnd$$5$$.$fnDrag$ = this.$_drag$.bind(this), $dnd$$5$$.$fnDragEnter$ = this.$_dragEnter$.bind(this), $dnd$$5$$.$fnDragOver$ = this.$_dragOver$.bind(this), $dnd$$5$$.$fnDragLeave$ = this.$_dragLeave$.bind(this), $dnd$$5$$.$fnDragDrop$ = this.$_dragDrop$.bind(this), $$$$61$$($div$$10_vars$$).on("drag", $dnd$$5$$.$fnDrag$), $$$$61$$($div$$10_vars$$).on("dragenter", $dnd$$5$$.$fnDragEnter$), $$$$61$$($div$$10_vars$$).on("dragover", $dnd$$5$$.$fnDragOver$), $$$$61$$($div$$10_vars$$).on("dragleave", 
        $dnd$$5$$.$fnDragLeave$), $$$$61$$($div$$10_vars$$).on("drop", $dnd$$5$$.$fnDragDrop$);
      }
    }
  };
  $oj$$66$$.$TreeDndContext$.prototype.$_closedown$ = function $$oj$$66$$$$TreeDndContext$$$$_closedown$$() {
    this.$_dndCleanAll$();
  };
  $oj$$66$$.$TreeDndContext$.prototype.$_dragStart$ = function $$oj$$66$$$$TreeDndContext$$$$_dragStart$$($e$$108$$) {
    var $dnd$$6$$, $$nodes_vars$$1$$, $$node$$ = $$$$61$$($e$$108$$.target).closest("li"), $dt$$ = $e$$108$$.originalEvent.dataTransfer, $ret$$63$$;
    $dnd$$6$$ = this.$_dnd$;
    $$nodes_vars$$1$$ = $dnd$$6$$.$vars$;
    $$nodes_vars$$1$$.$o$ = null;
    $$nodes_vars$$1$$.$r$ = null;
    $dnd$$6$$.$nodeLastEnter$ = null;
    $dnd$$6$$.$nodeLastLeft$ = null;
    $dnd$$6$$.$nodeDraggedId$ = null;
    $dnd$$6$$.$dragStarted$ = !1;
    if (!$dnd$$6$$.reorder && !$dnd$$6$$.$dragFromEnabled$ || $$node$$.hasClass($TreeUtils$$.$_OJ_DISABLED$) || this.$component$.$_data$.$core$.locked) {
      $e$$108$$.preventDefault();
    } else {
      $$nodes_vars$$1$$ = this.$component$.isSelected($$node$$) ? this.$component$.$_getNode$(null, !0) : $$nodes_vars$$1$$ = $$node$$;
      ($dnd$$6$$.$dragFromEnabled$ || $dnd$$6$$.$pureReorder$) && this.$_setDataTypes$($dt$$, $$nodes_vars$$1$$);
      if ($dnd$$6$$.$dragStartCallback$) {
        $ret$$63$$ = $dnd$$6$$.$dragStartCallback$($e$$108$$, {item:void 0});
        if ($e$$108$$.isDefaultPrevented() || "boolean" === typeof $ret$$63$$ && !$ret$$63$$) {
          return $ret$$63$$;
        }
        if (!$dnd$$6$$.$dragDataTypes$ && !this.$_checkAddedDataTypes$($dt$$) && !$dnd$$6$$.reorder) {
          return $e$$108$$.preventDefault(), !1;
        }
      }
      "uninitialized" === $dt$$.effectAllowed && ($dt$$.effectAllowed = $dnd$$6$$.$pureReorder$ ? "move" : $oj$$66$$.$DomUtils$.$isMetaKeyPressed$($e$$108$$) ? "copy" : "move");
      this.$_dndStartDrag$($$nodes_vars$$1$$, $$node$$, $e$$108$$);
    }
  };
  $oj$$66$$.$TreeDndContext$.prototype.$_drag$ = function $$oj$$66$$$$TreeDndContext$$$$_drag$$($e$$109$$) {
    var $dnd$$7$$ = this.$_dnd$;
    $dnd$$7$$.$dragDragCallback$ && $dnd$$7$$.$dragDragCallback$($e$$109$$);
  };
  $oj$$66$$.$TreeDndContext$.prototype.$_dragEnter$ = function $$oj$$66$$$$TreeDndContext$$$$_dragEnter$$($e$$110$$) {
    this.$component$.$_$container_ul$[0].firstChild || this.$_addInternalNode$();
    var $$targ$$1$$ = $$$$61$$($e$$110$$.target), $$node$$1$$ = this.$component$.$_getNode$($$targ$$1$$), $dnd$$8$$ = this.$_dnd$, $vars$$2$$ = $dnd$$8$$.$vars$, $bNode$$ = $$node$$1$$ && 0 < $$node$$1$$.length && $$node$$1$$.hasClass("oj-tree-node"), $dt$$1$$ = $e$$110$$.originalEvent.dataTransfer, $cons$$4$$ = $oj$$66$$.$TreeDndContext$, $bForeignTree$$ = !1, $bClean$$ = !1, $ret$$64$$;
    $bNode$$ && $$node$$1$$.hasClass($TreeUtils$$.$_OJ_TEMPNODE$) && ($dnd$$8$$.$bInternalNode$ = !0);
    if (!$bNode$$ || "UL" != $e$$110$$.target.tagName || "group" != $e$$110$$.target.getAttribute("role")) {
      if ($dnd$$8$$.$foreign$ = !$dnd$$8$$.$dragStarted$, !$dnd$$8$$.$foreign$ && !$dnd$$8$$.reorder || $dnd$$8$$.$foreign$ && this.$_isDtType$($dt$$1$$, $cons$$4$$.$_DND_INTERNAL_DT_REORDER$)) {
        this.$_dndClean$();
      } else {
        if ($dnd$$8$$.$foreign$ && ($bForeignTree$$ = this.$_isDtType$($dt$$1$$, $cons$$4$$.$_DND_INTERNAL_DT$), !$dnd$$8$$.$dropToEnabled$)) {
          this.$_dndClean$();
          return;
        }
        $vars$$2$$.$r$ = !1;
        $dnd$$8$$.$nodeLastEnter$ && this.$_clearDropClasses$($dnd$$8$$.$nodeLastEnter$);
        $$targ$$1$$.hasClass("oj-tree") && ($$node$$1$$ = $dnd$$8$$.$nodeLastEnter$);
        if (!$$node$$1$$ || !$$node$$1$$.length || $$node$$1$$.attr("id") != $dnd$$8$$.$nodeDraggedId$) {
          $bForeignTree$$ && $bNode$$ && ($dnd$$8$$.$nodeLastEnter$ = null, $vars$$2$$.$o$ = 2);
          $dnd$$8$$.$foreign$ && !$bForeignTree$$ && ($vars$$2$$.$o$ = 1);
          $vars$$2$$.$r$ = $$node$$1$$;
          $dnd$$8$$.$nodeLastEnter$ = $$node$$1$$;
          this.$_dndPlacement$($e$$110$$, $$node$$1$$);
          if (this.$_dndEnter$()) {
            $vars$$2$$.$r$.removeClass($cons$$4$$.$_OJ_INVALID_DROP$).addClass($cons$$4$$.$_OJ_VALID_DROP$).addClass($cons$$4$$.$_OJ_ACTIVE_DROP$);
            $dnd$$8$$.$dropDragEnterCallback$ && ($ret$$64$$ = $dnd$$8$$.$dropDragEnterCallback$($e$$110$$, {item:$dnd$$8$$.$bInternalNode$ ? null : $$node$$1$$, position:$dnd$$8$$.$bInternalNode$ ? "first" : $dnd$$8$$.$place$, reference:$dnd$$8$$.$bInternalNode$ ? null : $vars$$2$$.$r$}));
            if (void 0 === $ret$$64$$) {
              this.$_isDtAcceptDataTypes$($dt$$1$$) ? ($e$$110$$.preventDefault(), $e$$110$$.stopPropagation()) : $bClean$$ = $dnd$$8$$.$foreign$ || !$dnd$$8$$.reorder;
            } else {
              if (!1 === $ret$$64$$ || $e$$110$$.isDefaultPrevented()) {
                $e$$110$$.preventDefault(), $e$$110$$.stopPropagation();
              } else {
                if ($dnd$$8$$.$foreign$ || !$dnd$$8$$.reorder) {
                  $bClean$$ = $dnd$$8$$.$foreign$ || !$dnd$$8$$.reorder;
                }
              }
            }
            $bClean$$ && this.$_dndClean$();
            return $ret$$64$$;
          }
          this.$_clearDropClasses$($vars$$2$$.$r$);
          $vars$$2$$.$r$ = null;
        }
        this.$_dndHideMarker$();
      }
    }
  };
  $oj$$66$$.$TreeDndContext$.prototype.$_dragOver$ = function $$oj$$66$$$$TreeDndContext$$$$_dragOver$$($e$$111$$) {
    var $dnd$$9$$ = this.$_dnd$, $vars$$3$$ = $dnd$$9$$.$vars$, $dt$$2$$ = $e$$111$$.originalEvent.dataTransfer, $bClean$$1$$ = !1, $elemId$$1$$, $$node$$2$$, $ret$$65$$;
    if ($vars$$3$$.$r$ && $vars$$3$$.$r$.length && ($$node$$2$$ = $vars$$3$$.$r$, $$node$$2$$.hasClass("oj-tree-node") && ($elemId$$1$$ = $$node$$2$$.attr("id"), $elemId$$1$$ != $dnd$$9$$.$nodeDraggedId$ && (this.$_dndPlacement$($e$$111$$, $$node$$2$$), this.$_dndPrepare$())))) {
      $dnd$$9$$.$dropDragOverCallback$ && ($ret$$65$$ = $dnd$$9$$.$dropDragOverCallback$($e$$111$$, {item:$dnd$$9$$.$bInternalNode$ ? null : $$node$$2$$, reference:$dnd$$9$$.$bInternalNode$ ? null : $vars$$3$$.$r$, position:$dnd$$9$$.$bInternalNode$ ? "first" : $vars$$3$$.$last_pos$}));
      if (void 0 === $ret$$65$$) {
        this.$_isDtAcceptDataTypes$($dt$$2$$) ? ($e$$111$$.preventDefault(), $e$$111$$.stopPropagation()) : $bClean$$1$$ = $dnd$$9$$.$foreign$ || !$dnd$$9$$.reorder;
      } else {
        if (!1 === $ret$$65$$ || $e$$111$$.isDefaultPrevented()) {
          $e$$111$$.preventDefault(), $e$$111$$.stopPropagation();
        } else {
          if ($dnd$$9$$.$foreign$ || !$dnd$$9$$.reorder) {
            $bClean$$1$$ = $dnd$$9$$.$foreign$ || !$dnd$$9$$.reorder;
          }
        }
      }
      $bClean$$1$$ && this.$_dndClean$();
      return $ret$$65$$;
    }
    this.$_dndHideMarker$();
  };
  $oj$$66$$.$TreeDndContext$.prototype.$_dragDrop$ = function $$oj$$66$$$$TreeDndContext$$$$_dragDrop$$($e$$112$$) {
    var $dnd$$10$$ = this.$_dnd$, $vars$$4$$ = $dnd$$10$$.$vars$, $veto$$ = !1, $ret$$66$$;
    if ($vars$$4$$.$r$) {
      if ($dnd$$10$$.$dropDropCallback$) {
        $ret$$66$$ = $dnd$$10$$.$dropDropCallback$($e$$112$$, {reference:$dnd$$10$$.$bInternalNode$ ? null : $vars$$4$$.$r$, position:$dnd$$10$$.$bInternalNode$ ? "first" : $vars$$4$$.$last_pos$, reorder:!$dnd$$10$$.$foreign$ && $dnd$$10$$.reorder});
      } else {
        if ($dnd$$10$$.$foreign$ || !$dnd$$10$$.reorder) {
          $veto$$ = !0;
        }
      }
      $veto$$ || $ret$$66$$ && !$e$$112$$.isDefaultPrevented() || this.$_dndFinishReorder$($e$$112$$);
    }
    $dnd$$10$$.$foreign$ && this.$_dndClean$();
    $veto$$ || ($e$$112$$.preventDefault(), $e$$112$$.stopPropagation());
    $dnd$$10$$.$nodeLastLeft$ = null;
    return $ret$$66$$;
  };
  $oj$$66$$.$TreeDndContext$.prototype.$_dragEnd$ = function $$oj$$66$$$$TreeDndContext$$$$_dragEnd$$($e$$113$$) {
    var $dnd$$11$$ = this.$_dnd$, $vars$$5$$ = $dnd$$11$$.$vars$;
    $dnd$$11$$.$dragEndCallback$ && $dnd$$11$$.$dragEndCallback$($e$$113$$, {reorder:$dnd$$11$$.reorder && !1 === $vars$$5$$.$o$});
    this.$_dndStopDrag$();
    this.$_dndClean$();
  };
  $oj$$66$$.$TreeDndContext$.prototype.$_addInternalNode$ = function $$oj$$66$$$$TreeDndContext$$$$_addInternalNode$$() {
    this.$_internalNode$ || (this.$_internalNode$ = $$$$61$$("\x3cli class\x3d'" + $TreeUtils$$.$_OJ_TEMPNODE$ + " oj-tree-node oj-tree-leaf oj-valid-drop' id\x3d'" + $TreeUtils$$.$_OJ_TEMPNODE$ + "'\x3e\x3cins class\x3d'oj-tree-icon'\x3e\x3c/ins\x3e\x3ca href\x3d'#'\x3e\x3cins class\x3d'oj-tree-icon'\x3e\x3c/ins\x3e\x3cspan class\x3d'oj-tree-title'\x3e\x3c/span\x3e\x3c/a\x3e\x3c/li\x3e"));
    this.$component$.$_$container_ul$.append(this.$_internalNode$);
  };
  $oj$$66$$.$TreeDndContext$.prototype.$_dragLeave$ = function $$oj$$66$$$$TreeDndContext$$$$_dragLeave$$($e$$114$$) {
    var $dnd$$12$$ = this.$_dnd$, $vars$$6$$ = $dnd$$12$$.$vars$, $$targ$$2$$ = $$$$61$$($e$$114$$.target), $$node$$3$$ = $$targ$$2$$.closest("li"), $bNode$$1$$ = $$node$$3$$ && 0 < $$node$$3$$.length && $$node$$3$$.hasClass("oj-tree-node");
    $$node$$3$$.attr("id");
    var $dt$$4$$ = $e$$114$$.originalEvent.dataTransfer;
    $dnd$$12$$.$dropDragLeaveCallback$ && $dnd$$12$$.$dropDragLeaveCallback$($e$$114$$, {item:$dnd$$12$$.$bInternalNode$ ? null : $$node$$3$$});
    $$targ$$2$$.hasClass("oj-tree") || !$bNode$$1$$ || "none" == $dt$$4$$.dropEffect ? this.$_dndLeave$($e$$114$$) : $dnd$$12$$.$nodeLastLeft$ = $$node$$3$$;
    $vars$$6$$.$r$ && this.$_clearDropClasses$($vars$$6$$.$r$);
  };
  $oj$$66$$.$TreeDndContext$.prototype.$_dndEnter$ = function $$oj$$66$$$$TreeDndContext$$$$_dndEnter$$() {
    var $dnd$$13_t$$2$$ = this.$_dnd$, $vars$$7$$ = $dnd$$13_t$$2$$.$vars$, $ret$$68$$;
    $dnd$$13_t$$2$$.$prepared$ = !1;
    $ret$$68$$ = this.$_dndPrepare$();
    var $ms$$1$$ = $dnd$$13_t$$2$$.$openTimeoutMs$;
    $ms$$1$$ && ($dnd$$13_t$$2$$.$openTimer_Id$ && clearTimeout($dnd$$13_t$$2$$.$openTimerId$), $vars$$7$$.$r$ && $vars$$7$$.$r$.length && $vars$$7$$.$r$.hasClass($TreeUtils$$.$_OJ_COLLAPSED$) && ($dnd$$13_t$$2$$.$openTimerId$ = setTimeout(this.$_dndOpen$.bind(this), $ms$$1$$)));
    $dnd$$13_t$$2$$ = typeof $ret$$68$$;
    return "boolean" == $dnd$$13_t$$2$$ && $ret$$68$$ || "string" == $dnd$$13_t$$2$$;
  };
  $oj$$66$$.$TreeDndContext$.prototype.$_dndOpen$ = function $$oj$$66$$$$TreeDndContext$$$$_dndOpen$$() {
    var $dnd$$14$$ = this.$_dnd$, $vars$$8$$ = $dnd$$14$$.$vars$;
    $dnd$$14$$.$openTimerId$ = !1;
    this.$component$.$_expand$($vars$$8$$.$r$, this.$_dndPrepare$.bind(this), !0);
  };
  $oj$$66$$.$TreeDndContext$.prototype.$_dndFinishReorder$ = function $$oj$$66$$$$TreeDndContext$$$$_dndFinishReorder$$($e$$115$$) {
    var $dnd$$15$$ = this.$_dnd$, $vars$$9$$ = $dnd$$15$$.$vars$;
    $dnd$$15$$.$dragStarted$ && $dnd$$15$$.reorder && "object" == typeof $vars$$9$$.$o$ && 0 < $vars$$9$$.$o$.length && (this.$component$.$_moveNode$($vars$$9$$.$o$, $vars$$9$$.$r$, $vars$$9$$.$last_pos$, $oj$$66$$.$DomUtils$.$isMetaKeyPressed$($e$$115$$)), $vars$$9$$.$o$ = !1);
  };
  $oj$$66$$.$TreeDndContext$.prototype.$_dndFinishSelection$ = function $$oj$$66$$$$TreeDndContext$$$$_dndFinishSelection$$($children$$14_node$$116$$) {
    $children$$14_node$$116$$.hasClass($TreeUtils$$.$_OJ_SELECTED$) && ($children$$14_node$$116$$.removeClass($TreeUtils$$.$_OJ_SELECTED$), this.$component$.$_select$($children$$14_node$$116$$, !0));
    var $len$$19$$ = ($children$$14_node$$116$$ = this.$component$.getChildren($children$$14_node$$116$$)) && $children$$14_node$$116$$.length ? $children$$14_node$$116$$.length : 0, $i$$449$$;
    for ($i$$449$$ = 0;$i$$449$$ < $len$$19$$;$i$$449$$++) {
      this.$_dndFinishSelection$($$$$61$$($children$$14_node$$116$$[$i$$449$$]));
    }
  };
  $oj$$66$$.$TreeDndContext$.prototype.$_dndPlacement$ = function $$oj$$66$$$$TreeDndContext$$$$_dndPlacement$$($e$$116$$, $$node$$4$$) {
    var $dnd$$16$$ = this.$_dnd$;
    $$node$$4$$ && ($$node$$4$$.hasClass($TreeUtils$$.$_OJ_TEMPNODE$) ? $dnd$$16$$.$place$ = "after" : ($e$$116$$ = $e$$116$$.originalEvent, $dnd$$16$$.off = $$node$$4$$.offset(), $dnd$$16$$.$place$ = $e$$116$$.pageY - ($dnd$$16$$.off.top || 0), $dnd$$16$$.$place$ = $dnd$$16$$.$place$ >= this.$component$.$_data$.$core$.$li_height$ ? "after" : 0 > $dnd$$16$$.$place$ ? "before" : "inside", "after" === $dnd$$16$$.$place$ && $$node$$4$$.hasClass($TreeUtils$$.$_OJ_EXPANDED$) && ($dnd$$16$$.$place$ = "first")));
  };
  $oj$$66$$.$TreeDndContext$.prototype.$_dndLeave$ = function $$oj$$66$$$$TreeDndContext$$$$_dndLeave$$($e$$117$$) {
    var $dnd$$17$$ = this.$_dnd$, $vars$$10$$ = $dnd$$17$$.$vars$;
    $dnd$$17$$.after = !1;
    $dnd$$17$$.before = !1;
    $dnd$$17$$.$inside$ = !1;
    $dnd$$17$$.$lastNodeEnter$ = null;
    this.$_dndHideMarker$();
    $vars$$10$$.$r$ && $vars$$10$$.$r$[0] === $e$$117$$.target.parentNode && $dnd$$17$$.$openTimerId$ && (clearTimeout($dnd$$17$$.$openTimerId$), $dnd$$17$$.$openTimerId$ = !1);
  };
  $oj$$66$$.$TreeDndContext$.prototype.$_dndClean$ = function $$oj$$66$$$$TreeDndContext$$$$_dndClean$$() {
    this.$_dndHideMarker$();
    var $dnd$$18$$ = this.$_dnd$, $vars$$11$$ = $dnd$$18$$.$vars$;
    $vars$$11$$.$o$ = !1;
    $vars$$11$$.$r$ = !1;
    $dnd$$18$$.$openTimerId$ && clearTimeout($dnd$$18$$.$openTimerId$);
    $dnd$$18$$.$nodeDraggedId$ = null;
    $dnd$$18$$.$foreign$ = !1;
    $dnd$$18$$.$nodeLastEnter$ = null;
    $dnd$$18$$.$nodeLastLeft$ = null;
    $dnd$$18$$.after = !1;
    $dnd$$18$$.before = !1;
    $dnd$$18$$.$inside$ = !1;
    $dnd$$18$$.off = !1;
    $dnd$$18$$.$prepared$ = !1;
    $dnd$$18$$.$openTimerId$ = !1;
    $dnd$$18$$.$foreign$ = !1;
    $dnd$$18$$.$bInternalNode$ = !1;
  };
  $oj$$66$$.$TreeDndContext$.prototype.$_dndCleanAll$ = function $$oj$$66$$$$TreeDndContext$$$$_dndCleanAll$$() {
    var $dnd$$19$$ = this.$_dnd$, $$div$$;
    $$div$$ = $$$$61$$(this.$component$.$_$container$[0]);
    $$div$$.off("dragstart", $dnd$$19$$.$fnDragStart$);
    $$div$$.off("dragend", $dnd$$19$$.$fnDragEnd$);
    $$div$$.off("drag", $dnd$$19$$.$fnDrag$);
    $$div$$.off("dragenter", $dnd$$19$$.$fnDragEnter$);
    $$div$$.off("dragover", $dnd$$19$$.$fnDragOver$);
    $$div$$.off("dragleave", $dnd$$19$$.$fnDragLeave$);
    $$div$$.off("drop", $dnd$$19$$.$fnDragDrop$);
    this.$_dndClean$();
    this.$_reset$();
  };
  $oj$$66$$.$TreeDndContext$.prototype.$_dndPrepare$ = function $$oj$$66$$$$TreeDndContext$$$$_dndPrepare$$() {
    var $dnd$$20$$ = this.$_dnd$, $vars$$12$$ = $dnd$$20$$.$vars$, $tree$$ = this.$component$, $foreignObj$$1$$ = !1;
    if (!$vars$$12$$.$r$ || !$vars$$12$$.$r$.length) {
      return!1;
    }
    if ("number" == typeof $vars$$12$$.$o$ && (1 === $vars$$12$$.$o$ || 2 === $vars$$12$$.$o$)) {
      $foreignObj$$1$$ = !0;
    } else {
      if (!$vars$$12$$.$o$) {
        return!1;
      }
    }
    $dnd$$20$$.off = $vars$$12$$.$r$.offset();
    this.$component$.$_isRtl$ && ($dnd$$20$$.off.right = $dnd$$20$$.off.left + $vars$$12$$.$r$.width() - $vars$$12$$.$r$.find("\x3ea").width() - 30);
    $dnd$$20$$.$targ_ml_width$ = $vars$$12$$.$r$.find("a").width();
    $foreignObj$$1$$ ? ($dnd$$20$$.before = "before" == $dnd$$20$$.$place$, $dnd$$20$$.after = "after" == $dnd$$20$$.$place$, $dnd$$20$$.$inside$ = "inside" == $dnd$$20$$.$place$) : ($tree$$.$_prepare_move$($vars$$12$$.$o$, $vars$$12$$.$r$, "before"), $dnd$$20$$.before = $tree$$.$_checkMove$(), $tree$$.$_prepare_move$($vars$$12$$.$o$, $vars$$12$$.$r$, "after"), $dnd$$20$$.after = $tree$$.$_checkMove$(), this.$component$.$_is_loaded$($vars$$12$$.$r$) ? ($tree$$.$_prepare_move$($vars$$12$$.$o$, $vars$$12$$.$r$, 
    "inside"), $dnd$$20$$.$inside$ = $tree$$.$_checkMove$()) : $dnd$$20$$.$inside$ = !1);
    $dnd$$20$$.$prepared$ = !0;
    return this.$_dndShowMarker$();
  };
  $oj$$66$$.$TreeDndContext$.prototype.$_dndShowMarker$ = function $$oj$$66$$$$TreeDndContext$$$$_dndShowMarker$$() {
    var $dnd$$21$$ = this.$_dnd$, $fc_isParent$$1$$ = !1, $cons$$7$$ = $oj$$66$$.$TreeDndContext$, $vars$$13$$ = $dnd$$21$$.$vars$, $rtl$$6$$ = this.$component$.$_isRtl$, $mLeft$$, $mlLeft_pos$$14$$, $lineTop$$, $nodeHeight$$ = this.$component$.$_data$.$core$.$li_height$, $r$$1$$ = !1;
    if (!$dnd$$21$$.$prepared$) {
      return this.$_dndHideMarker$(), $r$$1$$;
    }
    if ("after" == $dnd$$21$$.$place$ && $dnd$$21$$.after || "inside" == $dnd$$21$$.$place$ && $dnd$$21$$.$inside$ || "before" == $dnd$$21$$.$place$ && $dnd$$21$$.before || "first" == $dnd$$21$$.$place$) {
      $r$$1$$ = $dnd$$21$$.$place$;
    }
    "first" === $r$$1$$ && ($fc_isParent$$1$$ = $vars$$13$$.$r$.find("li:eq(0)"), $dnd$$21$$.off = $fc_isParent$$1$$.offset());
    $mlLeft_pos$$14$$ = $rtl$$6$$ ? $dnd$$21$$.off.right - 18 : $dnd$$21$$.off.left + 5;
    $fc_isParent$$1$$ = !this.$component$.isLeaf($vars$$13$$.$r$);
    $mLeft$$ = $rtl$$6$$ ? $mlLeft_pos$$14$$ + $dnd$$21$$.$targ_ml_width$ + 18 : $mlLeft_pos$$14$$;
    $mlLeft_pos$$14$$ = $rtl$$6$$ ? $mLeft$$ - $dnd$$21$$.$ml_width$ : $mlLeft_pos$$14$$ + 8;
    $lineTop$$ = $dnd$$21$$.off.top - 3;
    switch($r$$1$$) {
      case "before":
      ;
      case "first":
        this.$_moveMarkerUI$($vars$$13$$.$m$, {left:$mLeft$$, top:$lineTop$$ - 7});
        $vars$$13$$.$ml$ && this.$_moveMarkerUI$($vars$$13$$.$ml$, {left:$mlLeft_pos$$14$$, top:$lineTop$$});
        break;
      case "after":
        $lineTop$$ += $nodeHeight$$;
        this.$_moveMarkerUI$($vars$$13$$.$m$, {left:$mLeft$$, top:$lineTop$$ - 2});
        $vars$$13$$.$ml$ && this.$_moveMarkerUI$($vars$$13$$.$ml$, {left:$mlLeft_pos$$14$$, top:$lineTop$$ + 6});
        break;
      case "inside":
        this.$_moveMarkerUI$($vars$$13$$.$m$, {left:$mLeft$$ + ($rtl$$6$$ ? $fc_isParent$$1$$ ? -4 : 0 : 4), top:$dnd$$21$$.off.top + $nodeHeight$$ / 2 - 8});
        $vars$$13$$.$ml$ && $vars$$13$$.$ml$.hide();
        break;
      default:
        this.$_dndHideMarker$();
    }
    $r$$1$$ ? $vars$$13$$.$r$.removeClass($cons$$7$$.$_OJ_INVALID_DROP$).addClass($cons$$7$$.$_OJ_VALID_DROP$) : $vars$$13$$.$r$.removeClass($cons$$7$$.$_OJ_VALID_DROP$).removeClass($cons$$7$$.$_OJ_VALID_DROP$);
    return $vars$$13$$.$last_pos$ = $r$$1$$;
  };
  $oj$$66$$.$TreeDndContext$.prototype.$_dndHideMarker$ = function $$oj$$66$$$$TreeDndContext$$$$_dndHideMarker$$() {
    var $vars$$14$$ = this.$_dnd$.$vars$;
    $vars$$14$$ && ($vars$$14$$.$m$ && $vars$$14$$.$m$.hide(), $vars$$14$$.$ml$ && $vars$$14$$.$ml$.hide(), $vars$$14$$.$r$ && this.$_clearDropClasses$($vars$$14$$.$r$));
  };
  $oj$$66$$.$TreeDndContext$.prototype.$_moveMarkerUI$ = function $$oj$$66$$$$TreeDndContext$$$$_moveMarkerUI$$($$obj$$, $styles$$1$$) {
    $styles$$1$$.left += "px";
    $styles$$1$$.top += "px";
    $$obj$$.css($styles$$1$$).show();
  };
  $oj$$66$$.$TreeDndContext$.prototype.$_dndStartDrag$ = function $$oj$$66$$$$TreeDndContext$$$$_dndStartDrag$$($$cnt_$nodes$$1$$, $$node$$5$$, $e$$118$$) {
    var $dnd$$22$$ = this.$_dnd$, $vars$$16$$ = $dnd$$22$$.$vars$, $cons$$9$$ = $oj$$66$$.$TreeDndContext$;
    $vars$$16$$.$o$ = $$cnt_$nodes$$1$$;
    $vars$$16$$.$o$.addClass($cons$$9$$.$_OJ_DRAG$);
    $dnd$$22$$.$nodeDraggedId$ = $$node$$5$$.attr("id");
    try {
      $e$$118$$.currentTarget.unselectable = "on", $e$$118$$.currentTarget.onselectstart = function $$e$$118$$$currentTarget$onselectstart$() {
        return!1;
      }, $e$$118$$.currentTarget.style && ($e$$118$$.currentTarget.style.MozUserSelect = "none");
    } catch ($err$$25$$) {
    }
    this.$component$.$_isTheme$() && $vars$$16$$.$m$ && $vars$$16$$.$m$.addClass("oj-tree-" + this.$component$.$_data$.$themes$.$theme$);
    $$cnt_$nodes$$1$$ = this.$component$.$_$container$;
    $dnd$$22$$.$cof$ = $$cnt_$nodes$$1$$.offset();
    $dnd$$22$$.$cw$ = parseInt($$cnt_$nodes$$1$$.width(), 10);
    $dnd$$22$$.ch = parseInt($$cnt_$nodes$$1$$.height(), 10);
    $dnd$$22$$.$dragStarted$ = !0;
  };
  $oj$$66$$.$TreeDndContext$.prototype.$_dndStopDrag$ = function $$oj$$66$$$$TreeDndContext$$$$_dndStopDrag$$() {
    var $dnd$$23$$ = this.$_dnd$, $vars$$17$$ = $dnd$$23$$.$vars$, $cons$$10$$ = $oj$$66$$.$TreeDndContext$;
    $vars$$17$$.$r$ && this.$_clearDropClasses$($vars$$17$$.$r$);
    "number" != typeof $vars$$17$$.$o$ && $vars$$17$$.$o$ && $vars$$17$$.$o$.removeClass($cons$$10$$.$_OJ_DRAG$);
    $dnd$$23$$.$dragStarted$ = !1;
  };
  $oj$$66$$.$TreeDndContext$.prototype.$_setDataTypes$ = function $$oj$$66$$$$TreeDndContext$$$$_setDataTypes$$($dt$$5$$, $$nodes$$2$$) {
    var $dnd$$24$$ = this.$_dnd$, $cons$$11$$ = $oj$$66$$.$TreeDndContext$, $adata$$1_i$$450$$, $data$$169$$;
    ($adata$$1_i$$450$$ = this.$component$.$__getJson$($$nodes$$2$$)) && ($data$$169$$ = JSON.stringify($adata$$1_i$$450$$));
    if ($dnd$$24$$.$dragDataTypes$) {
      for ($adata$$1_i$$450$$ = 0;$adata$$1_i$$450$$ < $dnd$$24$$.$dragDataTypes$.length;$adata$$1_i$$450$$++) {
        $dt$$5$$.setData($dnd$$24$$.$dragDataTypes$[$adata$$1_i$$450$$], $data$$169$$);
      }
    }
    $dt$$5$$.setData($cons$$11$$.$_DND_INTERNAL_DT$, "0");
    $dnd$$24$$.$pureReorder$ && $dt$$5$$.setData($cons$$11$$.$_DND_INTERNAL_DT_REORDER$, "0");
  };
  $oj$$66$$.$TreeDndContext$.prototype.$_isDtType$ = function $$oj$$66$$$$TreeDndContext$$$$_isDtType$$($dt$$6$$, $type$$101$$) {
    var $aTypes$$ = $dt$$6$$.types, $len$$20$$ = $aTypes$$.length, $i$$451$$;
    for ($i$$451$$ = 0;$i$$451$$ < $len$$20$$;$i$$451$$++) {
      if ($type$$101$$ == $aTypes$$[$i$$451$$]) {
        return!0;
      }
    }
    return!1;
  };
  $oj$$66$$.$TreeDndContext$.prototype.$_isDtAcceptDataTypes$ = function $$oj$$66$$$$TreeDndContext$$$$_isDtAcceptDataTypes$$($dt$$7$$) {
    var $comps$$1$$ = this.$_dnd$.$dropDataTypes$, $ret$$69$$ = !1, $i$$452$$;
    if ($comps$$1$$) {
      for ($ret$$69$$ = !(0 < $comps$$1$$.length), $i$$452$$ = 0;$i$$452$$ < $comps$$1$$.length;$i$$452$$++) {
        if (this.$_isDtType$($dt$$7$$, $comps$$1$$[$i$$452$$])) {
          $ret$$69$$ = !0;
          break;
        }
      }
    } else {
      $ret$$69$$ = !0;
    }
    return $ret$$69$$;
  };
  $oj$$66$$.$TreeDndContext$.prototype.$_checkAddedDataTypes$ = function $$oj$$66$$$$TreeDndContext$$$$_checkAddedDataTypes$$($aTypes$$1_dt$$8$$) {
    var $len$$21$$ = ($aTypes$$1_dt$$8$$ = $aTypes$$1_dt$$8$$.types) && $aTypes$$1_dt$$8$$.length ? $aTypes$$1_dt$$8$$.length : 0, $cons$$12$$ = $oj$$66$$.$TreeDndContext$, $ret$$70$$ = !1, $type$$102$$, $i$$453$$;
    for ($i$$453$$ = 0;$i$$453$$ < $len$$21$$;$i$$453$$++) {
      if ($type$$102$$ = $aTypes$$1_dt$$8$$[$i$$453$$], $type$$102$$ != $cons$$12$$.$_DND_INTERNAL_DT$ && $type$$102$$ != $cons$$12$$.$_DND_INTERNAL_DT_REORDER$) {
        $ret$$70$$ = !0;
        break;
      }
    }
    return $ret$$70$$;
  };
  $oj$$66$$.$TreeDndContext$.prototype.$_clearDropClasses$ = function $$oj$$66$$$$TreeDndContext$$$$_clearDropClasses$$($$var$$) {
    var $cons$$13$$ = $oj$$66$$.$TreeDndContext$;
    $$var$$ && $$var$$.removeClass($cons$$13$$.$_OJ_VALID_DROP$).removeClass($cons$$13$$.$_OJ_INVALID_DROP$).removeClass($cons$$13$$.$_OJ_ACTIVE_DROP$);
  };
  $oj$$66$$.$TreeDndContext$.prototype.$_reset$ = function $$oj$$66$$$$TreeDndContext$$$$_reset$$() {
    var $_dnd$$ = {};
    this.$_dnd$ = $_dnd$$;
    $_dnd$$.reorder = !1;
    $_dnd$$.$pureReorder$ = !1;
    $_dnd$$.$foreign$ = !1;
    $_dnd$$.$dragStarted$ = !1;
    $_dnd$$.$nodeDraggedId$ = null;
    $_dnd$$.$nodeLastEnter$ = null;
    $_dnd$$.$fnDragStart$ = null;
    $_dnd$$.$fnDragEnd$ = null;
    $_dnd$$.$fnDrag$ = null;
    $_dnd$$.$fnDragEnter$ = null;
    $_dnd$$.$fnDragOver$ = null;
    $_dnd$$.$fnDragLeave$ = null;
    $_dnd$$.$fnDragDrop$ = null;
    $_dnd$$.$dragFromEnabled$ = !1;
    $_dnd$$.$dropToEnabled$ = !1;
    $_dnd$$.$dragStartCallback$ = null;
    $_dnd$$.$dragDragCallback$ = null;
    $_dnd$$.$dragDragEndCallback$ = null;
    $_dnd$$.$dropDragEnterCallback$ = null;
    $_dnd$$.$dropDragOverCallback$ = null;
    $_dnd$$.$dropDragLeaveCallback$ = null;
    $_dnd$$.$dragDropCallback$ = null;
    $_dnd$$.$dropDataTypes$ = null;
    $_dnd$$.after = !1;
    $_dnd$$.$inside$ = !1;
    $_dnd$$.before = !1;
    $_dnd$$.off = !1;
    $_dnd$$.$prepared$ = !1;
    $_dnd$$.$openTimerId$ = !1;
    $_dnd$$.$cof$ = !1;
    $_dnd$$.$cw$ = !1;
    $_dnd$$.ch = !1;
    $_dnd$$.$ml_width$ = 100;
    $_dnd$$.$targ_ml_width$ = 100;
    $_dnd$$.$openTimeoutMs$ = 500;
    $_dnd$$.$vars$ = {};
    $_dnd$$.$vars$.$o$ = !1;
    $_dnd$$.$vars$.$r$ = !1;
    $_dnd$$.$vars$.$m$ = !1;
    $_dnd$$.$vars$.$ml$ = !1;
  };
  $oj$$66$$.$TreeDndContext$.prototype.$_trace$ = function $$oj$$66$$$$TreeDndContext$$$$_trace$$($s$$9$$) {
    this.$component$.$_trace$($s$$9$$);
  };
  $oj$$66$$.$TreeDndContext$.$_OJ_DRAGGABLE$ = "oj-draggable";
  $oj$$66$$.$TreeDndContext$.$_OJ_DRAG$ = "oj-drag";
  $oj$$66$$.$TreeDndContext$.$_OJ_ACTIVE_DROP$ = "oj-active-drop";
  $oj$$66$$.$TreeDndContext$.$_OJ_VALID_DROP$ = "oj-valid-drop";
  $oj$$66$$.$TreeDndContext$.$_OJ_INVALID_DROP$ = "oj-invalid-drop";
  $oj$$66$$.$TreeDndContext$.$_OJ_DROP$ = "oj-drop";
  $oj$$66$$.$TreeDndContext$.$_OJT_DROP_MARKER$ = "oj-tree-drop-marker";
  $oj$$66$$.$TreeDndContext$.$_OJT_DROP_MARKER_LINE$ = "oj-tree-drop-marker-line";
  $oj$$66$$.$TreeDndContext$.$_DND_REORDER$ = "reorder";
  $oj$$66$$.$TreeDndContext$.$_DND_DRAG$ = "drag";
  $oj$$66$$.$TreeDndContext$.$_DND_DROP$ = "drop";
  $oj$$66$$.$TreeDndContext$.$_DND_NODE$ = "node";
  $oj$$66$$.$TreeDndContext$.$_DND_DATATYPES$ = "dataTypes";
  $oj$$66$$.$TreeDndContext$.$_DND_DRAGSTART_CB$ = "dragStart";
  $oj$$66$$.$TreeDndContext$.$_DND_DRAGDRAG_CB$ = "drag";
  $oj$$66$$.$TreeDndContext$.$_DND_DRAGEND_CB$ = "dragEnd";
  $oj$$66$$.$TreeDndContext$.$_DND_DROPDRAGENTER_CB$ = "dragEnter";
  $oj$$66$$.$TreeDndContext$.$_DND_DROPDRAGOVER_CB$ = "dragOver";
  $oj$$66$$.$TreeDndContext$.$_DND_DROPDRAGLEAVE_CB$ = "dragLeave";
  $oj$$66$$.$TreeDndContext$.$_DND_DROPDROP_CB$ = "drop";
  $oj$$66$$.$TreeDndContext$.$_DND_INTERNAL_DT$ = "_ojtree";
  $oj$$66$$.$TreeDndContext$.$_DND_INTERNAL_DT_REORDER$ = "_ojtreereorder";
  (function() {
    function $_addKeyFilter$$($obj$$69$$) {
      $_aKeyHandlerStack$$.push($obj$$69$$);
      $$$$61$$($obj$$69$$.$_selector$).keydown($_KeyFilterHandler$$);
    }
    function $_KeyFilterHandler$$($e$$119$$) {
      var $s$$10$$ = "";
      $oj$$66$$.$DomUtils$.$isMetaKeyPressed$($e$$119$$) ? $s$$10$$ += "ctrl+" : $e$$119$$.shiftKey && ($s$$10$$ += "shift+");
      var $key$$193$$ = $e$$119$$.which;
      switch($key$$193$$) {
        case 32:
          $s$$10$$ += "space";
          break;
        case 37:
          $s$$10$$ += "left";
          break;
        case 38:
          $s$$10$$ += "up";
          break;
        case 39:
          $s$$10$$ += "right";
          break;
        case 40:
          $s$$10$$ += "down";
          break;
        case 46:
          $s$$10$$ += "del";
          break;
        case 33:
          $s$$10$$ += "pgup";
          break;
        case 34:
          $s$$10$$ += "pgdn";
          break;
        case 35:
          $s$$10$$ += "end";
          break;
        case 36:
          $s$$10$$ += "home";
          break;
        case 56:
          $s$$10$$ = "*";
          break;
        case 113:
        ;
        case 121:
          $s$$10$$ += "f" + (1 - (112 - $key$$193$$));
      }
      if (0 === $s$$10$$.length || "shift+" == $s$$10$$ || "ctrl+" == $s$$10$$) {
        return!0;
      }
      var $retHandler$$ = null;
      $$$$61$$.each($_aKeyHandlerStack$$, function($i$$454$$, $obj$$70$$) {
        if ($obj$$70$$.$_this$.$_data$.ui.$focused$) {
          return $obj$$70$$.$_this$.$_data$.ui.$touchEvent$ = !1, "shift+f10" == $s$$10$$ ? $obj$$70$$.$_this$.$_data$.menu.$activenode$ = $obj$$70$$.$_this$.$_data$.ui.$hovered$ : $obj$$70$$.$_handler$[$s$$10$$] && ($e$$119$$.preventDefault(), $retHandler$$ = $obj$$70$$.$_handler$[$s$$10$$].call($obj$$70$$.$_this$, $e$$119$$)), !1;
        }
      });
      if (null != $retHandler$$) {
        return $retHandler$$;
      }
    }
    function $_removeKeyFilter$$($selector$$38$$) {
      $$$$61$$.each($_aKeyHandlerStack$$, function($i$$455$$) {
        if ($_aKeyHandlerStack$$[$i$$455$$].$_selector$ === $selector$$38$$) {
          return $$$$61$$($selector$$38$$).off("keydown"), $_aKeyHandlerStack$$[$i$$455$$] = null, $_aKeyHandlerStack$$.splice($i$$455$$, 1), !1;
        }
      });
    }
    function $isPureObjEmpty$$($o$$12$$) {
      var $ret$$71$$ = !0, $prop$$79$$;
      for ($prop$$79$$ in $o$$12$$) {
        if ($o$$12$$.hasOwnProperty($prop$$79$$)) {
          $ret$$71$$ = !1;
          break;
        }
      }
      return $ret$$71$$;
    }
    function $_addSheet$$($opts$$37$$) {
      var $tmp$$3$$ = !1, $isNew$$7$$ = !0;
      $opts$$37$$.$str$ && ($opts$$37$$.title && ($tmp$$3$$ = $$$$61$$("style[id\x3d'" + $opts$$37$$.title + "-stylesheet']")[0]), $tmp$$3$$ ? $isNew$$7$$ = !1 : ($tmp$$3$$ = document.createElement("style"), $tmp$$3$$.setAttribute("type", "text/css"), $opts$$37$$.title && $tmp$$3$$.setAttribute("id", $opts$$37$$.title + "-stylesheet")), $tmp$$3$$.styleSheet ? $isNew$$7$$ ? (document.getElementsByTagName("head")[0].appendChild($tmp$$3$$), $tmp$$3$$.styleSheet.cssText = $opts$$37$$.$str$) : $tmp$$3$$.styleSheet.cssText = 
      $tmp$$3$$.styleSheet.cssText + " " + $opts$$37$$.$str$ : ($tmp$$3$$.appendChild(document.createTextNode($opts$$37$$.$str$)), document.getElementsByTagName("head")[0].appendChild($tmp$$3$$)));
    }
    var $_arMenuCmdMap$$1$$ = {cut:"ojtreecut", copy:"ojtreecopy", paste:"ojtreepaste", remove:"ojtreeremove", rename:"ojtreerename"}, $_arMenuKeyMap$$1$$ = {cut:"labelCut", copy:"labelCopy", paste:"labelPaste", remove:"labelRemove", rename:"labelRename"}, $scrollbar_width$$, $e1$$2$$, $e2$$2$$;
    $$$$61$$(function() {
      /msie/.test(navigator.userAgent.toLowerCase()) ? ($e1$$2$$ = $$$$61$$('\x3ctextarea cols\x3d"10" rows\x3d"2"\x3e\x3c/textarea\x3e').css({position:"absolute", top:-1E3, left:0}).appendTo("body"), $e2$$2$$ = $$$$61$$('\x3ctextarea cols\x3d"10" rows\x3d"2" style\x3d"overflow: hidden;"\x3e\x3c/textarea\x3e').css({position:"absolute", top:-1E3, left:0}).appendTo("body"), $scrollbar_width$$ = $e1$$2$$.width() - $e2$$2$$.width(), $e1$$2$$.add($e2$$2$$).remove()) : ($e1$$2$$ = $$$$61$$("\x3cdiv /\x3e").css({width:100, 
      height:100, overflow:"auto", position:"absolute", top:-1E3, left:0}).prependTo("body").append("\x3cdiv /\x3e").find("div").css({width:"100%", height:200}), $scrollbar_width$$ = 100 - $e1$$2$$.width(), $e1$$2$$.parent().remove());
    });
    var $_aKeyHandlerStack$$ = [], $_instance$$ = -1;
    $oj$$66$$.$__registerWidget$("oj.ojTree", $$$$61$$.oj.baseComponent, {widgetEventPrefix:"oj", defaultElement:"\x3cdiv\x3e", options:{dnd:{reorder:"disable"}, expandParents:!1, initExpanded:null, $initLoaded$:[], selection:[], selectionMode:"single", selectedParentCollapse:!1, selectedParentExpand:!0, selectPrevOnDelete:!1, data:null, emptyText:null, icons:!0, types:null, before:null, collapse:null, create:null, collapseAll:null, cut:null, dehover:null, remove:null, destroy:null, expand:null, 
    expandAll:null, hover:null, loaded:null, move:null, optionChange:null, paste:null, refresh:null, rename:null}, collapse:function($node$$117$$, $skipAnim$$) {
      var $dur$$ = ($skipAnim$$ = $skipAnim$$ || !1) ? 0 : this.$_animDuration$;
      $node$$117$$ = this.$_getNode$($node$$117$$);
      if (!$node$$117$$.length || -1 === $node$$117$$ || !$node$$117$$.hasClass($TreeUtils$$.$_OJ_EXPANDED$) || this.$_data$.$core$.locked || $node$$117$$.hasClass($TreeUtils$$.$_OJ_DISABLED$)) {
        return!1;
      }
      var $rslt$$ = this.$_emitEvent$({obj:$node$$117$$, func:"collapse"}, "before");
      if ("boolean" != typeof $rslt$$ || $rslt$$) {
        $node$$117$$.removeClass($TreeUtils$$.$_OJ_EXPANDED$).addClass($TreeUtils$$.$_OJ_COLLAPSED$).attr("aria-expanded", "false"), $$$$61$$($node$$117$$.children()[0]).removeClass($TreeUtils$$.$_OJ_SELECTED$).addClass("oj-default"), !$skipAnim$$ && $dur$$ ? this.$_slide$($node$$117$$, !0) : this.$_transitionEnd$($$$$61$$($node$$117$$.children("UL")[0]), $node$$117$$);
      }
    }, $_slide$:function($node$$118$$, $bSlideUp$$) {
      var $$ul$$2$$, $hNow$$, $hFinal$$;
      $$ul$$2$$ = $$$$61$$($node$$118$$.children("ul"));
      this.$_isSafari$ ? $$ul$$2$$[0].addEventListener("webkitTransitionEnd", this.$_proxyTransitionEndHandler$) : $$ul$$2$$[0].addEventListener("transitionend", this.$_proxyTransitionEndHandler$);
      $bSlideUp$$ ? ($hNow$$ = $$ul$$2$$[0].offsetHeight, $hFinal$$ = 0) : ($hNow$$ = 0, $hFinal$$ = this.$_getElemHeight$($$ul$$2$$[0]));
      $$ul$$2$$.css("max-height", $hNow$$ + "px");
      $$ul$$2$$.css("overflow", "hidden");
      $bSlideUp$$ || ($$ul$$2$$[0].style.display = "block");
      setTimeout(function() {
        $$ul$$2$$.addClass("oj-tree-transition");
        $$ul$$2$$.css("max-height", $hFinal$$ + "px");
      }, 20);
    }, $_getElemHeight$:function($el$$17$$) {
      var $parent$$47$$, $nextSib$$, $h$$7$$, $disp$$, $div$$11$$ = $$$$61$$("\x3cdiv style\x3d'position: absolute'\x3e");
      $parent$$47$$ = $el$$17$$.parentNode;
      $nextSib$$ = $el$$17$$.nextSibling;
      $parent$$47$$.removeChild($el$$17$$);
      $disp$$ = $el$$17$$.style.display;
      $el$$17$$.style.display = "block";
      $div$$11$$.append($el$$17$$);
      this.$_$container$[0].appendChild($div$$11$$[0]);
      $h$$7$$ = $el$$17$$.offsetHeight || $el$$17$$.scrollHeight;
      $el$$17$$.style.display = $disp$$;
      this.$_$container$[0].removeChild($div$$11$$[0]);
      $div$$11$$[0].removeChild($el$$17$$);
      $nextSib$$ ? $parent$$47$$.insertBefore($el$$17$$, $nextSib$$) : $parent$$47$$.appendChild($el$$17$$);
      return $h$$7$$ + 10;
    }, $_transitionEndHandler$:function($$ul$$3_e$$120$$) {
      $$ul$$3_e$$120$$ = $$$$61$$($$ul$$3_e$$120$$.target);
      var $node$$119$$ = $$ul$$3_e$$120$$.closest("li");
      this.$_isSafari$ ? $$ul$$3_e$$120$$[0].removeEventListener("webkitTransitionEnd", this.$_proxyTransitionEndHandler$) : $$ul$$3_e$$120$$[0].removeEventListener("transitionend", this.$_proxyTransitionEndHandler$);
      $$ul$$3_e$$120$$.removeClass("oj-tree-transition");
      this.$_transitionEnd$($$ul$$3_e$$120$$, $node$$119$$);
    }, $_transitionEnd$:function($$ul$$4$$, $node$$120$$) {
      $node$$120$$.hasClass($TreeUtils$$.$_OJ_COLLAPSED$) ? ($$ul$$4$$[0].style.display = "none", $$ul$$4$$.css("max-height", ""), this.$_emitEvent$({obj:$node$$120$$}, "collapse"), this.after_close($node$$120$$)) : ($$ul$$4$$[0].style.display = "block", $$ul$$4$$.css("max-height", ""), this.$_emitEvent$({obj:$node$$120$$}, "expand"));
    }, collapseAll:function($node$$121$$, $anim$$) {
      var $origTarg$$ = $node$$121$$ ? $node$$121$$ : -1, $_this$$1$$ = this;
      if (!this.$_data$.$core$.locked && (($node$$121$$ = $node$$121$$ ? this.$_getNode$($node$$121$$) : this.$_$container$) && -1 !== $origTarg$$ && ($origTarg$$ = $node$$121$$), $node$$121$$ && -1 !== $origTarg$$ || ($node$$121$$ = this.$_$container_ul$), !$node$$121$$.hasClass($TreeUtils$$.$_OJ_DISABLED$))) {
        var $subject$$;
        -1 !== $origTarg$$ && this.isExpanded($node$$121$$) && ($subject$$ = $node$$121$$[0]);
        var $objs$$ = $node$$121$$.find("li.oj-expanded");
        $objs$$.length && $objs$$.each(function() {
          $_this$$1$$.collapse(this, !$anim$$);
        });
        $subject$$ && (this.collapse($subject$$, !$anim$$), $objs$$.splice(0, 0, $subject$$));
        $objs$$.length && this.$_emitEvent$({obj:$objs$$, targ:$origTarg$$}, "collapseAll");
      }
    }, expand:function($node$$122$$, $skipAnim$$1$$) {
      this.$_expand$($node$$122$$, !1, $skipAnim$$1$$);
    }, expanded:function($nodes$$7$$, $skipAnim$$2$$) {
      var $exlr$$, $exlen$$, $_this$$2$$ = this;
      if ($nodes$$7$$ && "array" === $$$$61$$.type($nodes$$7$$)) {
        if (this.$_data$.$core$.locked) {
          return null;
        }
        $exlen$$ = $nodes$$7$$.length;
        $$$$61$$.each($nodes$$7$$, function($i$$456$$, $val$$68$$) {
          $_this$$2$$.$_expand$($val$$68$$, !1, $skipAnim$$2$$);
        });
        return null;
      }
      $nodes$$7$$ = this.$_$container_ul$.find("li.oj-expanded");
      $exlen$$ = $nodes$$7$$.length;
      $exlr$$ = [];
      for (var $n$$28$$ = 0;$n$$28$$ < $exlen$$;$n$$28$$++) {
        $exlr$$.push($nodes$$7$$[$n$$28$$]);
      }
      return $$$$61$$($exlr$$);
    }, expandAll:function($node$$123$$, $anim$$1$$) {
      this.$_expandAll$($node$$123$$, $anim$$1$$);
    }, toggleExpand:function($node$$124$$, $skipAnim$$3$$) {
      if (($node$$124$$ = this.$_getNode$($node$$124$$)) && $node$$124$$.length && -1 !== $node$$124$$ && !$node$$124$$.hasClass($TreeUtils$$.$_OJ_DISABLED$) && !this.$_data$.$core$.locked) {
        if ($node$$124$$.hasClass($TreeUtils$$.$_OJ_COLLAPSED$)) {
          return this.expand($node$$124$$, $skipAnim$$3$$);
        }
        if ($node$$124$$.hasClass($TreeUtils$$.$_OJ_EXPANDED$)) {
          return this.collapse($node$$124$$, $skipAnim$$3$$);
        }
      }
    }, deselect:function($node$$125$$) {
      var $prevSelections$$ = this.options.selection.slice(0);
      this.$_deselect$($node$$125$$);
      this.$_fireOptionChangeEvent$("selection", $prevSelections$$, null, null);
    }, deselectAll:function($context$$170$$) {
      if (!this.$_data$.$core$.locked) {
        var $prevSelections$$1$$ = this.options.selection.slice(0);
        this.$_deselectAll$($context$$170$$);
        this.$_fireOptionChangeEvent$("selection", $prevSelections$$1$$, null, null);
      }
    }, select:function($node$$126$$) {
      this.$_select$($node$$126$$, !0);
    }, toggleSelect:function($node$$127$$) {
      $node$$127$$ = this.$_getNode$($node$$127$$);
      if (!$node$$127$$.length || $node$$127$$.hasClass($TreeUtils$$.$_OJ_DISABLED$) || this.$_data$.$core$.locked) {
        return!1;
      }
      this.isSelected($node$$127$$) ? this.deselect($node$$127$$) : this.$_select$($node$$127$$, !0);
      return!0;
    }, isCollapsed:function($node$$128$$) {
      return($node$$128$$ = this.$_getNode$($node$$128$$)) && -1 !== $node$$128$$ && $node$$128$$.hasClass($TreeUtils$$.$_OJ_COLLAPSED$);
    }, isExpanded:function($node$$129$$) {
      return($node$$129$$ = this.$_getNode$($node$$129$$)) && -1 !== $node$$129$$ && $node$$129$$.hasClass($TreeUtils$$.$_OJ_EXPANDED$);
    }, isLeaf:function($node$$130$$) {
      return this.$_isLeaf$($node$$130$$);
    }, isSelected:function($n$$29_node$$131$$) {
      $n$$29_node$$131$$ = this.$_getNode$($n$$29_node$$131$$);
      var $r$$2$$ = !1;
      $n$$29_node$$131$$ && $n$$29_node$$131$$.length && this.$_data$.ui.selected && ($r$$2$$ = 0 <= this.$_data$.ui.selected.index($n$$29_node$$131$$));
      return $r$$2$$;
    }, create:function($refnode$$, $position$$39$$, $data$$170$$) {
      var $node$$132$$, $ar$$1$$, $i$$457$$;
      $ar$$1$$ = $$$$61$$.isArray($data$$170$$);
      if (!$ar$$1$$ || 1 == $data$$170$$.length) {
        return $node$$132$$ = this.$_createNode$($refnode$$, $position$$39$$, $ar$$1$$ ? $data$$170$$[0] : $data$$170$$), this.$_getDndContext$().$_dndFinishSelection$($node$$132$$), $node$$132$$;
      }
      $ar$$1$$ = [];
      if ("before" != $position$$39$$) {
        for ($i$$457$$ = $data$$170$$.length - 1;0 <= $i$$457$$;$i$$457$$--) {
          $node$$132$$ = this.$_createNode$($refnode$$, $position$$39$$, $data$$170$$[$i$$457$$]), $ar$$1$$.unshift($node$$132$$[0]), this.$_getDndContext$().$_dndFinishSelection$($node$$132$$);
        }
      } else {
        for ($i$$457$$ = 0;$i$$457$$ < $data$$170$$.length;$i$$457$$++) {
          $node$$132$$ = this.$_createNode$($refnode$$, $position$$39$$, $data$$170$$[$i$$457$$]), $ar$$1$$.push($node$$132$$[0]), this.$_getDndContext$().$_dndFinishSelection$($node$$132$$);
        }
      }
      return $$$$61$$($ar$$1$$);
    }, remove:function($node$$133$$) {
      $node$$133$$ = this.$_getNode$($node$$133$$);
      if (!$node$$133$$.length || $node$$133$$.hasClass($TreeUtils$$.$_OJ_DISABLED$) || this.$_data$.$core$.locked) {
        return!1;
      }
      var $p$$8_rslt$$1$$ = this.$_emitEvent$({obj:$node$$133$$, func:"remove"}, "before");
      if ("boolean" == typeof $p$$8_rslt$$1$$ && !$p$$8_rslt$$1$$) {
        return!1;
      }
      this.$__rollback$();
      var $p$$8_rslt$$1$$ = this.$_getParent$($node$$133$$), $prev$$5$$ = $$$$61$$([]), $t$$3$$ = this, $sib$$ = this.$_getPrev$($node$$133$$);
      $node$$133$$.each(function() {
        $prev$$5$$ = $prev$$5$$.add($t$$3$$.$_getPrev$(this));
      });
      $node$$133$$ = $node$$133$$.detach();
      -1 !== $p$$8_rslt$$1$$ && 0 === $p$$8_rslt$$1$$.find("\x3e ul \x3e li").length && $p$$8_rslt$$1$$.removeClass("oj-expanded oj-collapsed").addClass("oj-tree-leaf").removeAttr("aria-expanded");
      this.$_cleanNode$($p$$8_rslt$$1$$);
      this.$_emitEvent$({obj:$node$$133$$, prev:$sib$$, parent:$p$$8_rslt$$1$$}, "remove");
      return $node$$133$$;
    }, getText:function($node$$134$$) {
      $node$$134$$ = this.$_getNode$($node$$134$$);
      if (!$node$$134$$.length) {
        return!1;
      }
      $node$$134$$ = $node$$134$$.children("a:eq(0)");
      $node$$134$$ = $node$$134$$.find("span:eq(0)");
      return $node$$134$$[0].textContent;
    }, rename:function($node$$135$$, $text$$24$$) {
      this.$_renameNode$($node$$135$$, $text$$24$$);
    }, hover:function($node$$136$$) {
      if (!this.$_data$.menu.$activenode$ && ($node$$136$$ = this.$_getNode$($node$$136$$), $node$$136$$.length && !$node$$136$$.hasClass($TreeUtils$$.$_OJ_DISABLED$) && !this.$_data$.$core$.locked && !$node$$136$$.hasClass($TreeUtils$$.$_OJ_HOVER$))) {
        var $rslt$$2$$ = this.$_emitEvent$({obj:$node$$136$$, func:"hover"}, "before");
        if ("boolean" != typeof $rslt$$2$$ || $rslt$$2$$) {
          $node$$136$$.hasClass($TreeUtils$$.$_OJ_HOVER$) || this.dehover(), this.$_data$.ui.$hovered$ = $node$$136$$.children("a").addClass($TreeUtils$$.$_OJ_HOVER$).parent(), this.$_$container_ul$.attr("aria-activedescendant", this.$_data$.ui.$hovered$.attr("id")), this.$_fix_scroll$($node$$136$$), this.$_emitEvent$({obj:$node$$136$$}, "hover");
        }
      }
    }, dehover:function() {
      if (!this.$_data$.menu.$activenode$) {
        var $obj$$71$$ = this.$_data$.ui.$hovered$, $p$$9$$;
        if ($obj$$71$$ && $obj$$71$$.length && !$obj$$71$$.hasClass($TreeUtils$$.$_OJ_DISABLED$) && !this.$_data$.$core$.locked) {
          $p$$9$$ = $obj$$71$$.find("a.oj-hover");
          if (!$p$$9$$.length && ($p$$9$$ = this.$_$container_ul$.find("a.oj-hover"), !$p$$9$$.length)) {
            return;
          }
          $p$$9$$.removeClass($TreeUtils$$.$_OJ_HOVER$).parent();
          this.$_$container_ul$.removeAttr("aria-activedescendant");
          this.$_data$.ui.$hovered$ = null;
          void 0 != $obj$$71$$.attr("id") && this.$_emitEvent$({obj:$obj$$71$$}, "dehover");
        }
      }
    }, getPath:function($node$$137$$, $idMode$$) {
      var $p$$10$$ = [], $_this$$3$$ = this;
      $node$$137$$ = this.$_getNode$($node$$137$$);
      if (-1 === $node$$137$$ || !$node$$137$$ || !$node$$137$$.length) {
        return!1;
      }
      $node$$137$$.parentsUntil(".oj-tree", "li").each(function() {
        $p$$10$$.push($idMode$$ ? this.id : $_this$$3$$.getText(this));
      });
      $p$$10$$.reverse();
      $p$$10$$.push($idMode$$ ? $node$$137$$.attr("id") : this.getText($node$$137$$));
      return $p$$10$$;
    }, getRoot:function() {
      return this.$_$container$.children("ul:eq(0)");
    }, refresh:function($node$$138$$) {
      this._super();
      this.$_data$.$core$.locked || this.$_refresh$($node$$138$$ ? $node$$138$$ : -1);
    }, move:function($node$$139$$, $refnode$$1$$, $position$$40$$, $iscopy$$) {
      this.$_moveNode$($node$$139$$, $refnode$$1$$, $position$$40$$, $iscopy$$);
    }, getType:function($node$$140$$) {
      return this.$_getType$($node$$140$$);
    }, setType:function($node$$141$$, $str$$21$$) {
      return this.$_setType$($node$$141$$, $str$$21$$);
    }, getNodeBySubId:function($locator$$61$$) {
      return $locator$$61$$ ? this.$_processSubId$($locator$$61$$) : this.element ? this.element[0] : null;
    }, getSubIdByNode:function($node$$142$$) {
      return this.$_getSubIdFromNodeElem$($node$$142$$);
    }, getContextByNode:function($node$$143$$) {
      var $bNode$$2$$, $bTree$$;
      $node$$143$$ = this.$_getNode$(null == $node$$143$$ || void 0 == $node$$143$$ ? 0 : $node$$143$$);
      $bNode$$2$$ = -1 != $node$$143$$ && 0 < $node$$143$$.length;
      $bTree$$ = -1 == $node$$143$$;
      return $bNode$$2$$ || $bTree$$ ? {subId:$bNode$$2$$ ? "oj-tree-node" : "oj-tree", item:$bNode$$2$$ ? $node$$143$$[0] : null, node:$bNode$$2$$ ? $node$$143$$ : !1, leaf:$bNode$$2$$ ? this.$_isLeaf$($node$$143$$) : !1} : null;
    }, getParent:function($l$$11_node$$144$$) {
      return($l$$11_node$$144$$ = this.$_getParent$($l$$11_node$$144$$)) && 0 < $l$$11_node$$144$$.length ? $l$$11_node$$144$$ : null;
    }, getPrevSibling:function($l$$12_node$$145$$) {
      return($l$$12_node$$145$$ = this.$_getPrev$($l$$12_node$$145$$, !0)) && 0 < $l$$12_node$$145$$.length ? $l$$12_node$$145$$ : null;
    }, getNextSibling:function($l$$13_node$$146$$) {
      return($l$$13_node$$146$$ = this.$_getNext$($l$$13_node$$146$$, !0)) && 0 < $l$$13_node$$146$$.length ? $l$$13_node$$146$$ : null;
    }, getChildren:function($c$$51_node$$147$$) {
      return($c$$51_node$$147$$ = ($c$$51_node$$147$$ = this.$_getChildren$($c$$51_node$$147$$ ? $c$$51_node$$147$$ : -1)) && $c$$51_node$$147$$.length ? $c$$51_node$$147$$.not("." + $TreeUtils$$.$_OJ_TEMPNODE$) : $c$$51_node$$147$$) && 0 < $c$$51_node$$147$$.length ? $c$$51_node$$147$$ : null;
    }, scrollIntoView:function($node$$148_obj$$72$$, $alignTo_toTop$$, $setActive$$) {
      $node$$148_obj$$72$$ ? ($node$$148_obj$$72$$ = $node$$148_obj$$72$$.node, $node$$148_obj$$72$$ = this.$_getNode$($node$$148_obj$$72$$)) : $node$$148_obj$$72$$ = -1;
      -1 == $node$$148_obj$$72$$ && ($node$$148_obj$$72$$ = this.$_$container$.find("\x3e ul \x3e li:first-child"));
      if ($node$$148_obj$$72$$ && $node$$148_obj$$72$$.length) {
        return $alignTo_toTop$$ = "top" == $alignTo_toTop$$, $setActive$$ && (this.$_$container_ul$.focus(), this.hover($node$$148_obj$$72$$)), $node$$148_obj$$72$$[0].scrollIntoView($alignTo_toTop$$), this;
      }
    }, _ComponentCreate:function() {
      this._super();
      this.$_index$ = this.$_newIndex$();
      this.$_elemId$ = this.element.attr("id");
      void 0 === this.$_elemId$ && (this.$_elemId$ = "oj-tree-" + this.$_getIndex$(), this.element.attr("id", this.$_elemId$));
      this.$_$container$ = this.element;
      this.$_$container_ul$ = null;
      this.$_data$ = {};
      this.$_tds$ = null;
      this.$_isRtl$ = "rtl" === this.$_GetReadingDirection$();
      this.$_isTouch$ = $oj$$66$$.$DomUtils$.$isTouchSupported$();
      this.$_initTree$();
      if (this.$_animDuration$ = this.$_getAnimDuration$()) {
        this.$_isSafari$ = $oj$$66$$.$AgentUtils$.$getAgentInfo$().browser === $oj$$66$$.$AgentUtils$.$BROWSER$.$SAFARI$, this.$_proxyTransitionEndHandler$ = $$$$61$$.proxy(this.$_transitionEndHandler$, this);
      }
      this.$_start$();
    }, _destroy:function() {
      this.$_clearTree$();
      this.$_data$.html.$markup_ul$ && (this.$_$container$.append(this.$_data$.html.$markup_ul$), this.$_data$.html.$markup_div$.remove(), this.$_data$.html.$markup_div$ = !1, this.$_data$.html.$useExistingMarkup$ = !1);
      this.$_data$.$ds$.type = 0;
      this._super();
    }, _setOption:function($key$$194$$, $newval$$1$$, $flags$$53$$) {
      var $val$$69$$;
      if ("selection" === $key$$194$$) {
        $newval$$1$$ = "string" == typeof $newval$$1$$ ? [$newval$$1$$] : $newval$$1$$ && $newval$$1$$.length ? $newval$$1$$ : [], this.$_data$.$core$.$suppressSelectEvent$ = !0, this.$_handleSelectionOptionChange$($newval$$1$$), this.$_data$.$core$.$suppressSelectEvent$ = !1, $newval$$1$$ = this.$_getSelected$();
      } else {
        if ("selectionMode" === $key$$194$$) {
          "none" === $newval$$1$$ ? $val$$69$$ = 0 : "single" === $newval$$1$$ ? $val$$69$$ = 1 : "multiple" === $newval$$1$$ ? $val$$69$$ = -1 : ($val$$69$$ = 0, $newval$$1$$ = "none"), $val$$69$$ != this.$_data$.$core$.$selectMode$ && (this.$_data$.$core$.$selectMode$ = $val$$69$$);
        } else {
          if ("icons" === $key$$194$$) {
            "boolean" == $$$$61$$.type($newval$$1$$) && $newval$$1$$ != this.$_data$.$themes$.icons && ((this.$_data$.$themes$.icons = $newval$$1$$) ? this.$_showIcons$() : this.$_hideIcons$());
          } else {
            if ("contextMenu" === $key$$194$$) {
              this.$_clearMenu$(), $newval$$1$$ && this.$_initMenu$($newval$$1$$);
            } else {
              if ("disabled" === $key$$194$$) {
                this.$_handleDisabledChanged$($newval$$1$$);
              } else {
                if ("data" === $key$$194$$) {
                  this._super($key$$194$$, $newval$$1$$, $flags$$53$$);
                  this.$_initDSOpts$();
                  this.$_initDataSource$();
                  this.$_initExpandedOpts$();
                  this.$_loadNodes$();
                  return;
                }
                if ("dnd" === $key$$194$$) {
                  this._super($key$$194$$, $newval$$1$$, $flags$$53$$);
                  this.$_getDndContext$().$handleDnDOptionChange$();
                  return;
                }
                "emptyText" == $key$$194$$ && ($newval$$1$$ = this.$_escapeHtml$($newval$$1$$));
              }
            }
          }
        }
      }
      this._super($key$$194$$, $newval$$1$$, $flags$$53$$);
    }, $_CompareOptionValues$:function($option$$41$$, $value1$$10$$, $value2$$9$$) {
      return "selection" === $option$$41$$ ? this.$_compareSelectionValues$($value1$$10$$, $value2$$9$$) : this._superApply(arguments);
    }, $_compareSelectionValues$:function($value1$$11$$, $value2$$10$$) {
      var $i$$458$$, $j$$58$$, $id$$61$$, $len$$22$$, $len2$$, $bDiff$$ = !1, $bInList$$ = !1;
      $len$$22$$ = $value1$$11$$ && $value1$$11$$.length ? $value1$$11$$.length : 0;
      $len2$$ = $value2$$10$$ && $value2$$10$$.length ? $value2$$10$$.length : 0;
      if ($len$$22$$ !== $len2$$) {
        $bDiff$$ = !0;
      } else {
        if (0 == $len$$22$$ && 0 === $len2$$) {
          $bDiff$$ = !1;
        } else {
          for ($i$$458$$ = 0;$i$$458$$ < $len$$22$$;$i$$458$$++) {
            $id$$61$$ = $$$$61$$($value1$$11$$[$i$$458$$]).attr("id");
            $bInList$$ = !1;
            for ($j$$58$$ = 0;$j$$58$$ < $len2$$;$j$$58$$++) {
              if ($id$$61$$ == $$$$61$$($value2$$10$$[$j$$58$$]).attr("id")) {
                $bInList$$ = !0;
                break;
              }
            }
            if (!$bInList$$) {
              $bDiff$$ = !0;
              break;
            }
          }
        }
      }
      return!$bDiff$$;
    }, $_clearTree$:function() {
      this.$_TreeDndContext$ && (this.$_TreeDndContext$.$_closedown$(), this.$_TreeDndContext$ = null);
      var $n$$30$$ = this.$_getIndex$();
      this.$_$container$.unbind(".oj-tree").undelegate(".oj-tree").removeData("oj-tree-instance-id").find("[class^\x3d'oj-tree']").addBack().attr("class", function() {
        return this.className.replace(/oj-tree[^ ]*|$/ig, "");
      });
      var $cl$$ = this.$_$container$.attr("class"), $cl$$ = $cl$$.trim();
      0 === $cl$$.length && this.$_$container$.removeAttr("class");
      $_removeKeyFilter$$(this.$_$container_ul$);
      $$$$61$$(document).unbind(".oj-tree-" + $n$$30$$).undelegate(".oj-tree-" + $n$$30$$);
      this.$_$container_ul$.remove();
      this.$_$container_ul$ = null;
    }, $_getNode$:function($obj$$73$$, $allowMultiple$$) {
      if ("undefined" === typeof $obj$$73$$ || null === $obj$$73$$) {
        return $allowMultiple$$ ? this.$_data$.ui.selected : this.$_data$.ui.$lastSelected$;
      }
      var $$obj$$1$$ = $$$$61$$($obj$$73$$, this.$_$container$);
      if ($$obj$$1$$.is(".oj-tree") || -1 === $obj$$73$$) {
        return-1;
      }
      $$obj$$1$$ = $$obj$$1$$.closest("li", this.$_$container$);
      return $$obj$$1$$.length ? $$obj$$1$$ : !1;
    }, $_getPrev$:function($obj$$74$$, $strict$$) {
      $obj$$74$$ = this.$_getNode$($obj$$74$$);
      if (-1 === $obj$$74$$) {
        return this.$_$container$.find("\x3e ul \x3e li:last-child");
      }
      if (!$obj$$74$$.length) {
        return!1;
      }
      if ($strict$$) {
        return 0 < $obj$$74$$.prevAll("li").length ? $obj$$74$$.prevAll("li:eq(0)") : !1;
      }
      if ($obj$$74$$.prev("li").length) {
        for ($obj$$74$$ = $obj$$74$$.prev("li").eq(0);$obj$$74$$.hasClass($TreeUtils$$.$_OJ_EXPANDED$);) {
          $obj$$74$$ = $obj$$74$$.children("ul:eq(0)").children("li:last");
        }
        return $obj$$74$$;
      }
      var $o$$13$$ = $obj$$74$$.parentsUntil(".oj-tree", "li:eq(0)");
      return $o$$13$$.length ? $o$$13$$ : !1;
    }, $_getNext$:function($obj$$75$$, $strict$$1$$) {
      $obj$$75$$ = this.$_getNode$($obj$$75$$);
      return-1 === $obj$$75$$ ? this.$_$container$.find("\x3e ul \x3e li:first-child") : $obj$$75$$.length ? $strict$$1$$ ? 0 < $obj$$75$$.nextAll("li").size() ? $obj$$75$$.nextAll("li:eq(0)") : !1 : $obj$$75$$.hasClass($TreeUtils$$.$_OJ_EXPANDED$) ? $obj$$75$$.find("li:eq(0)") : 0 < $obj$$75$$.nextAll("li").size() ? $obj$$75$$.nextAll("li:eq(0)") : $obj$$75$$.parentsUntil(".oj-tree", "li").next("li").eq(0) : !1;
    }, $_getParent$:function($o$$14_obj$$76$$) {
      $o$$14_obj$$76$$ = this.$_getNode$($o$$14_obj$$76$$);
      if (-1 == $o$$14_obj$$76$$ || !$o$$14_obj$$76$$.length) {
        return!1;
      }
      $o$$14_obj$$76$$ = $o$$14_obj$$76$$.parentsUntil(".oj-tree", "li:eq(0)");
      return $o$$14_obj$$76$$.length ? $o$$14_obj$$76$$ : -1;
    }, $_getChildren$:function($obj$$77$$) {
      $obj$$77$$ = this.$_getNode$($obj$$77$$);
      return-1 === $obj$$77$$ ? this.$_$container$.children("ul:eq(0)").children("li") : $obj$$77$$.length ? $obj$$77$$.children("ul:eq(0)").children("li") : !1;
    }, $_isLeaf$:function($node$$149$$) {
      return($node$$149$$ = this.$_getNode$($node$$149$$)) && -1 !== $node$$149$$ && $node$$149$$.hasClass("oj-tree-leaf");
    }, $_getNodeElem$:function($el$$18_node$$150$$) {
      $el$$18_node$$150$$ = this.$_$container_ul$.find($el$$18_node$$150$$);
      var $ret$$72$$ = !1;
      $el$$18_node$$150$$ && $el$$18_node$$150$$.length && 0 < $el$$18_node$$150$$.length && $$$$61$$($el$$18_node$$150$$).is("li") && ($ret$$72$$ = $el$$18_node$$150$$);
      return $ret$$72$$;
    }, $_reference$:function($node$$151$$, $o$$15$$) {
      var $ctor$$2_div$$12$$ = $node$$151$$.parents("div").eq(0);
      ($ctor$$2_div$$12$$ = $oj$$66$$.Components.$getWidgetConstructor$($ctor$$2_div$$12$$)) && $o$$15$$ && $ctor$$2_div$$12$$("getCI", $o$$15$$);
      return this;
    }, getCI:function($o$$16$$) {
      $o$$16$$.$ot$ = this;
    }, $_applyDefaults$:function($to$$4$$, $from$$4$$) {
      void 0 != $to$$4$$ && void 0 != $from$$4$$ && $$$$61$$.each($from$$4$$, function($prop$$80$$, $val$$70$$) {
        void 0 == $to$$4$$[$prop$$80$$] && ($to$$4$$[$prop$$80$$] = $val$$70$$);
      });
    }, $_handleDisabledChanged$:function($newval$$2$$) {
      var $curState$$;
      "undefined" !== typeof $newval$$2$$ && (($curState$$ = this.$_$container_ul$.hasClass($TreeUtils$$.$_OJ_DISABLED$)) || ($curState$$ = !1), $curState$$ != $newval$$2$$ && ($newval$$2$$ ? (this.$_$container_ul$.addClass($TreeUtils$$.$_OJ_DISABLED$), this.$_$container_ul$.prop("disabled", !0)) : (this.$_$container_ul$.removeClass($TreeUtils$$.$_OJ_DISABLED$), this.$_$container_ul$.prop("disabled", !1)), this.$_treeDisable$($newval$$2$$)));
    }, $_treeDisable$:function($lstate$$) {
      $lstate$$ ? (this.$_data$.$core$.locked = !0, this.$_data$.ui.opacity = this.$_$container$.children("ul").css("opacity"), this.$_$container_ul$.addClass($TreeUtils$$.$_OJ_DISABLED$).css("opacity", "0.9")) : (this.$_data$.$core$.locked = !1, this.$_$container_ul$.removeClass($TreeUtils$$.$_OJ_DISABLED$).css("opacity", this.$_data$.ui.opacity));
    }, $_isTreeDisabled$:function() {
      return this.$_data$.$core$.locked;
    }, $_handleSelectionOptionChange$:function($aSelected_newSels$$) {
      var $sels$$ = $aSelected_newSels$$.slice(0), $cur$$2$$ = [], $_this$$5$$ = this, $$elem$$3$$, $id$$62$$, $inList$$, $len$$23$$;
      $$$$61$$.grep($sels$$, function($node$$152$$, $i$$459$$) {
        if ($$elem$$3$$ = $_this$$5$$.$_getNodeElem$($node$$152$$)) {
          $cur$$2$$.push($$elem$$3$$), $sels$$[$i$$459$$] = $$elem$$3$$[0];
        } else {
          return!1;
        }
        return!0;
      });
      $aSelected_newSels$$ = this.$_getSelected$();
      $$$$61$$.each($aSelected_newSels$$, function($i$$460$$, $node$$153$$) {
        $len$$23$$ = $cur$$2$$.length;
        $id$$62$$ = $$$$61$$($node$$153$$).attr("id");
        $inList$$ = !1;
        for ($i$$460$$ = 0;$i$$460$$ < $len$$23$$;$i$$460$$++) {
          if ($id$$62$$ == $cur$$2$$[$i$$460$$].attr("id")) {
            $inList$$ = !0;
            break;
          }
        }
        $inList$$ || $_this$$5$$.$_deselect$($node$$153$$);
      });
      this.$_setSelected$($cur$$2$$, null);
    }, $_prepare_move$:function($o$$17$$, $r$$3$$, $pos$$15$$, $cb$$2$$, $is_cb$$) {
      var $p$$11$$ = {};
      $r$$3$$ = -1 !== $r$$3$$ && $r$$3$$ ? this.$_getNode$($r$$3$$) : -1;
      this.$_reference$($o$$17$$, $p$$11$$);
      $p$$11$$.$rt$ = this;
      $p$$11$$.$o$ = $p$$11$$.$ot$.$_getNode$($o$$17$$);
      $p$$11$$.$r$ = $r$$3$$;
      $p$$11$$.$p$ = "undefined" === typeof $pos$$15$$ || !1 === $pos$$15$$ ? "last" : $pos$$15$$;
      if (!$is_cb$$ && this.$_data$.$core$.$prepMoveBlk$.$o$ && this.$_data$.$core$.$prepMoveBlk$.$o$[0] === $p$$11$$.$o$[0] && this.$_data$.$core$.$prepMoveBlk$.$r$[0] === $p$$11$$.$r$[0] && this.$_data$.$core$.$prepMoveBlk$.$p$ === $p$$11$$.$p$) {
        $cb$$2$$ && $cb$$2$$.call(this, this.$_data$.$core$.$prepMoveBlk$);
      } else {
        if (-1 !== $p$$11$$.$r$ && $p$$11$$.$r$) {
          if (!/^(before|after)$/.test($p$$11$$.$p$) && !this.$_is_loaded$($p$$11$$.$r$)) {
            return this.$_load_node$($p$$11$$.$r$, function() {
              this.$_prepare_move$($o$$17$$, $r$$3$$, $pos$$15$$, $cb$$2$$, !0);
            });
          }
          switch($p$$11$$.$p$) {
            case "before":
              $p$$11$$.$cp$ = $p$$11$$.$r$.index();
              $p$$11$$.$cr$ = $p$$11$$.$rt$.$_getParent$($p$$11$$.$r$);
              break;
            case "after":
              $p$$11$$.$cp$ = $p$$11$$.$r$.index() + 1;
              $p$$11$$.$cr$ = $p$$11$$.$rt$.$_getParent$($p$$11$$.$r$);
              break;
            case "inside":
            ;
            case "first":
              $p$$11$$.$cp$ = 0;
              $p$$11$$.$cr$ = $p$$11$$.$r$;
              break;
            case "last":
              $p$$11$$.$cp$ = $p$$11$$.$r$.find(" \x3e ul \x3e li").length;
              $p$$11$$.$cr$ = $p$$11$$.$r$;
              break;
            default:
              $p$$11$$.$cp$ = $p$$11$$.$p$, $p$$11$$.$cr$ = $p$$11$$.$r$;
          }
        } else {
          switch($p$$11$$.$cr$ = -1, $p$$11$$.$p$) {
            case "first":
            ;
            case "before":
            ;
            case "inside":
              $p$$11$$.$cp$ = 0;
              break;
            case "after":
            ;
            case "last":
              $p$$11$$.$cp$ = $p$$11$$.$rt$.$_$container$.find(" \x3e ul \x3e li").length;
              break;
            default:
              $p$$11$$.$cp$ = $p$$11$$.$p$;
          }
        }
        $p$$11$$.$np$ = -1 == $p$$11$$.$cr$ ? $p$$11$$.$rt$.$_$container$ : $p$$11$$.$cr$;
        $p$$11$$.$op$ = $p$$11$$.$ot$.$_getParent$($p$$11$$.$o$);
        $p$$11$$.$cop$ = $p$$11$$.$o$.index();
        -1 === $p$$11$$.$op$ && ($p$$11$$.$op$ = $p$$11$$.$ot$ ? $p$$11$$.$ot$.$_$container$ : this.$_$container$);
        !/^(before|after)$/.test($p$$11$$.$p$) && $p$$11$$.$op$ && $p$$11$$.$np$ && $p$$11$$.$op$[0] === $p$$11$$.$np$[0] && $p$$11$$.$o$.index() < $p$$11$$.$cp$ && $p$$11$$.$cp$++;
        $p$$11$$.$or$ = $p$$11$$.$np$.find(" \x3e ul \x3e li:nth-child(" + ($p$$11$$.$cp$ + 1) + ")");
        this.$_data$.$core$.$prepMoveBlk$ = $p$$11$$;
        $cb$$2$$ && $cb$$2$$.call(this, this.$_data$.$core$.$prepMoveBlk$, "prepare_move");
      }
    }, $_checkMove$:function() {
      var $obj$$78$$ = this.$_data$.$core$.$prepMoveBlk$, $ret$$73$$ = !0, $r$$4$$;
      $r$$4$$ = -1 === $obj$$78$$.$r$ ? this.$_$container$ : $obj$$78$$.$r$;
      if (!$obj$$78$$ || !$obj$$78$$.$o$ || $obj$$78$$.$or$[0] === $obj$$78$$.$o$[0] || !$obj$$78$$.$r$) {
        return!1;
      }
      if (!$obj$$78$$.$cy$) {
        if ($obj$$78$$.$op$ && $obj$$78$$.$np$ && $obj$$78$$.$op$[0] === $obj$$78$$.$np$[0] && $obj$$78$$.$cp$ - 1 === $obj$$78$$.$o$.index()) {
          return!1;
        }
        $obj$$78$$.$o$.each(function() {
          if (-1 !== $r$$4$$.parentsUntil(".oj-tree", "li").addBack().index(this)) {
            return $ret$$73$$ = !1;
          }
        });
      }
      return $ret$$73$$;
    }, $_renameNode$:function($node$$154$$, $text$$25$$) {
      var $t$$4$$;
      $node$$154$$ = this.$_getNode$($node$$154$$);
      this.$__rollback$();
      $t$$4$$ = this.getText($node$$154$$);
      if ($node$$154$$ && $node$$154$$.length) {
        var $rslt$$3$$ = this.$_emitEvent$({obj:$node$$154$$, func:"rename", title:$text$$25$$, prevTitle:$t$$4$$}, "before");
        if ("boolean" == typeof $rslt$$3$$ && !$rslt$$3$$) {
          return;
        }
      }
      $node$$154$$ && $node$$154$$.length && this.$_set_text$.apply(this, Array.prototype.slice.call(arguments)) && this.$_emitEvent$({obj:$node$$154$$, title:$text$$25$$, prevTitle:$t$$4$$}, "rename");
    }, $_moveNode$:function($obj$$79$$, $d$$9_o$$18_ref$$3$$, $position$$41$$, $is_copy$$, $is_prepared$$, $skip_check$$) {
      $is_prepared$$ || ($obj$$79$$ = this.$_getNode$($obj$$79$$));
      if (!($obj$$79$$.hasClass && $obj$$79$$.hasClass($TreeUtils$$.$_OJ_DISABLED$) || this.$_data$.$core$.locked)) {
        if (!$is_prepared$$) {
          return this.$_prepare_move$($obj$$79$$, $d$$9_o$$18_ref$$3$$, $position$$41$$, function($p$$12$$) {
            $p$$12$$.$ot$ === $p$$12$$.$rt$ || $p$$12$$.$cy$ || $p$$12$$.$ot$.deselect($p$$12$$.$o$);
            this.$_moveNode$($p$$12$$, !1, !1, $is_copy$$, !0, $skip_check$$);
          });
        }
        $is_copy$$ && (this.$_data$.$core$.$prepMoveBlk$.$cy$ = !0);
        if (!$skip_check$$ && !this.$_checkMove$()) {
          return!1;
        }
        this.$__rollback$();
        $d$$9_o$$18_ref$$3$$ = !1;
        $is_copy$$ ? ($d$$9_o$$18_ref$$3$$ = $obj$$79$$.$o$.clone(!0), $d$$9_o$$18_ref$$3$$.find("*[id]").addBack().each(function() {
          this.id && (this.id = "copy_" + this.id);
        })) : $d$$9_o$$18_ref$$3$$ = $obj$$79$$.$o$;
        $obj$$79$$.$or$.length ? $obj$$79$$.$or$.before($d$$9_o$$18_ref$$3$$) : ($obj$$79$$.$np$.children("ul").length || $$$$61$$("\x3cul /\x3e").appendTo($obj$$79$$.$np$), $obj$$79$$.$np$.children("ul:eq(0)").append($d$$9_o$$18_ref$$3$$));
        try {
          $obj$$79$$.$ot$.$_cleanNode$($obj$$79$$.$op$), $obj$$79$$.$rt$.$_cleanNode$($obj$$79$$.$np$), $obj$$79$$.$op$.find("\x3e ul \x3e li").length || $obj$$79$$.$op$.removeClass("oj-expanded oj-collapsed").removeAttr("aria-expanded").addClass("oj-tree-leaf").children("ul").remove();
        } catch ($e$$121$$) {
        }
        $is_copy$$ && (this.$_data$.$core$.$prepMoveBlk$.$cy$ = !0, this.$_data$.$core$.$prepMoveBlk$.$oc$ = $d$$9_o$$18_ref$$3$$);
        $d$$9_o$$18_ref$$3$$ = $$$$61$$.extend(!0, {}, this.$_data$.$core$.$prepMoveBlk$);
        $d$$9_o$$18_ref$$3$$.obj = $obj$$79$$.$o$;
        this.$_emitEvent$($d$$9_o$$18_ref$$3$$, "move");
        return this.$_data$.$core$.$prepMoveBlk$;
      }
    }, $_getMoveBlk$:function() {
      return this.$_data$.$crrm$.$prepMoveBlk$;
    }, $_getType$:function($node$$155$$) {
      var $n$$31$$ = null;
      this.options.types && ($n$$31$$ = this.$_getNode$($node$$155$$));
      return $n$$31$$ && $n$$31$$.length ? $n$$31$$.attr(this.options.types.attr) || "default" : !1;
    }, $_setType$:function($node$$156$$, $str$$22$$) {
      var $s$$11$$ = this.options.types, $tattr$$, $ret$$74$$ = !1;
      $node$$156$$ = this.$_getNode$($node$$156$$);
      $s$$11$$ && $node$$156$$ && -1 != $node$$156$$ && $node$$156$$.length && $str$$22$$ && ($tattr$$ = $s$$11$$.attr) && $s$$11$$[$str$$22$$] && ($node$$156$$.attr($tattr$$, $str$$22$$), $node$$156$$.addClass("oj-tree-type"), $ret$$74$$ = !0);
      return $ret$$74$$;
    }, $_check$:function($rule$$3$$, $obj$$80$$) {
      $obj$$80$$ = this.$_getNode$($obj$$80$$);
      var $v$$4$$ = !1, $ty$$ = this.$_getType$($obj$$80$$), $s$$12$$ = this.$_getOptions$().types, $data$$171$$ = !1;
      if (-1 === $obj$$80$$) {
        if ($s$$12$$[$rule$$3$$]) {
          $v$$4$$ = $s$$12$$[$rule$$3$$];
        } else {
          return;
        }
      } else {
        if (!1 === $ty$$) {
          return;
        }
        ($data$$171$$ = this.$_data$.types.$defaults$.useData ? $obj$$80$$.data("oj-tree") : !1) && $data$$171$$.types && "undefined" !== typeof $data$$171$$.types[$rule$$3$$] ? $v$$4$$ = $data$$171$$.types[$rule$$3$$] : $s$$12$$.types[$ty$$] && "undefined" !== typeof $s$$12$$.types[$ty$$][$rule$$3$$] ? $v$$4$$ = $s$$12$$.types[$ty$$][$rule$$3$$] : $s$$12$$.types["default"] && "undefined" !== typeof $s$$12$$.types["default"][$rule$$3$$] && ($v$$4$$ = $s$$12$$.types["default"][$rule$$3$$]);
      }
      $$$$61$$.isFunction($v$$4$$) && ($v$$4$$ = $v$$4$$.call(this, $obj$$80$$));
      return $v$$4$$;
    }, $_cleanNode$:function($obj$$81$$) {
      var $dndClasses$$, $draggableAttr$$, $draggableAttrVal$$, $dndContext$$1$$ = this.$_getDndContext$(), $cons$$14$$ = $oj$$66$$.$TreeDndContext$;
      $dndContext$$1$$.$isDragEnabled$() && ($dndClasses$$ = $cons$$14$$.$_OJ_DRAGGABLE$, $draggableAttr$$ = "draggable", $draggableAttrVal$$ = !0);
      $dndContext$$1$$.$isDropEnabled$() && ($dndClasses$$ += " " + $cons$$14$$.$_OJ_VALID_DROP$);
      $obj$$81$$ = $obj$$81$$ && -1 != $obj$$81$$ ? $$$$61$$($obj$$81$$) : this.$_$container_ul$;
      $obj$$81$$ = $obj$$81$$.is("li") ? $obj$$81$$.find("li").addBack() : $obj$$81$$.find("li");
      $obj$$81$$.removeClass("oj-tree-last").addClass("oj-tree-node").addClass($dndClasses$$).attr($draggableAttr$$, $draggableAttrVal$$).filter("li:last-child").addClass("oj-tree-last").end().filter(":has(li)").not(".oj-expanded").removeClass("oj-tree-leaf").addClass($TreeUtils$$.$_OJ_COLLAPSED$).attr("aria-expanded", "false");
      $obj$$81$$.not(".oj-expanded, .oj-collapsed").addClass("oj-tree-leaf").children("ul").remove();
      var $typeAttr$$ = this.options.types ? this.options.types.attr : !1;
      $obj$$81$$.find("li");
      var $disc$$, $t$$6$$;
      $$$$61$$.each($obj$$81$$, function() {
        $t$$6$$ = $$$$61$$(this);
        $disc$$ = $t$$6$$.find("\x3e ins");
        1 < $disc$$.length && ($disc$$ = $$$$61$$($disc$$[0]));
        $t$$6$$.hasClass("oj-tree-leaf") ? ($disc$$.removeClass("oj-tree-icon oj-tree-disclosure-icon oj-component-icon oj-clickable-icon-nocontext oj-default"), $disc$$.addClass("oj-tree-icon")) : ($disc$$.addClass("oj-tree-icon oj-tree-disclosure-icon oj-component-icon oj-clickable-icon-nocontext oj-default"), $disc$$.removeClass("oj-tree-node-icon"));
        $typeAttr$$ && $t$$6$$.attr($typeAttr$$) && $t$$6$$.addClass("oj-tree-type");
      });
    }, $_createNode$:function($obj$$82$$, $position$$42$$, $js$$, $callback$$135$$, $d$$11_is_loaded$$) {
      $obj$$82$$ = $obj$$82$$ || -1;
      $obj$$82$$ = this.$_getNode$($obj$$82$$);
      if (-1 !== $obj$$82$$ && !$obj$$82$$.length) {
        return null;
      }
      var $tmp$$4$$;
      $position$$42$$ = "undefined" === typeof $position$$42$$ ? "last" : $position$$42$$;
      if (!$d$$11_is_loaded$$ && !this.$_is_loaded$($obj$$82$$)) {
        return this.$_load_node$($obj$$82$$, function() {
          this.$_createNode$($obj$$82$$, $position$$42$$, $js$$, $callback$$135$$, !0);
        }), null;
      }
      this.$__rollback$();
      $js$$ = this.$_parseJson$($js$$);
      if (!$js$$) {
        return null;
      }
      $js$$ = $js$$.children();
      $d$$11_is_loaded$$ = $$$$61$$($js$$[0]);
      -1 === $obj$$82$$ && ($obj$$82$$ = this.$_$container$, "before" === $position$$42$$ && ($position$$42$$ = "first"), "after" === $position$$42$$ && ($position$$42$$ = "last"));
      switch($position$$42$$) {
        case "before":
          $obj$$82$$.before($d$$11_is_loaded$$);
          $tmp$$4$$ = this.$_getParent$($obj$$82$$);
          break;
        case "after":
          $obj$$82$$.after($d$$11_is_loaded$$);
          $tmp$$4$$ = this.$_getParent$($obj$$82$$);
          break;
        case "inside":
        ;
        case "first":
          $obj$$82$$.children("ul").length || $obj$$82$$.append("\x3cul /\x3e");
          $obj$$82$$.children("ul").prepend($d$$11_is_loaded$$);
          $tmp$$4$$ = $obj$$82$$;
          break;
        case "last":
          $obj$$82$$.children("ul").length || $obj$$82$$.append("\x3cul /\x3e");
          $obj$$82$$.children("ul").append($d$$11_is_loaded$$);
          $tmp$$4$$ = $obj$$82$$;
          break;
        default:
          $obj$$82$$.children("ul").length || $obj$$82$$.append("\x3cul /\x3e"), $position$$42$$ || ($position$$42$$ = 0), $tmp$$4$$ = $obj$$82$$.children("ul").children("li").eq($position$$42$$), $tmp$$4$$.length ? $tmp$$4$$.before($d$$11_is_loaded$$) : $obj$$82$$.children("ul").append($d$$11_is_loaded$$), $tmp$$4$$ = $obj$$82$$;
      }
      if (-1 === $tmp$$4$$ || $tmp$$4$$.get(0) === this.$_$container$.get(0)) {
        $tmp$$4$$ = -1;
      }
      this.$_cleanNode$($tmp$$4$$);
      this.$_emitEvent$({obj:$d$$11_is_loaded$$, parent:$tmp$$4$$}, "create");
      $callback$$135$$ && $callback$$135$$.call(this, $d$$11_is_loaded$$);
      1 < this.$_$container_ul$[0].childNodes.length && this.$_$container_ul$.find("." + $TreeUtils$$.$_OJ_TEMPNODE$).remove();
      return $d$$11_is_loaded$$;
    }, $_expand$:function($obj$$83$$, $callback$$136$$, $skipAnim$$4$$) {
      $obj$$83$$ = this.$_getNode$($obj$$83$$);
      if (!$obj$$83$$ || !$obj$$83$$.length) {
        return!1;
      }
      $skipAnim$$4$$ = $skipAnim$$4$$ || !1;
      if (!$obj$$83$$.hasClass($TreeUtils$$.$_OJ_DISABLED$) && !this.$_data$.$core$.locked) {
        if (!$obj$$83$$.hasClass($TreeUtils$$.$_OJ_COLLAPSED$)) {
          return $callback$$136$$ && $callback$$136$$.call(), !1;
        }
        var $dur$$1_rslt$$4$$ = this.$_emitEvent$({obj:$obj$$83$$, func:"expand"}, "before");
        if ("boolean" != typeof $dur$$1_rslt$$4$$ || $dur$$1_rslt$$4$$) {
          var $dur$$1_rslt$$4$$ = $skipAnim$$4$$ ? 0 : this.$_animDuration$, $t$$7$$ = this;
          this.$_is_loaded$($obj$$83$$) ? (this.options.expandParents && $obj$$83$$.parentsUntil(".oj-tree", ".oj-collapsed").each(function() {
            $t$$7$$.$_expand$(this, !1, !0);
          }), $obj$$83$$.removeClass($TreeUtils$$.$_OJ_COLLAPSED$).addClass($TreeUtils$$.$_OJ_EXPANDED$).attr("aria-expanded", "true").children("a").removeClass("oj-tree-loading"), $$$$61$$($obj$$83$$.children()[0]).removeClass($TreeUtils$$.$_OJ_SELECTED$).addClass("oj-default"), !$skipAnim$$4$$ && $dur$$1_rslt$$4$$ ? this.$_slide$($obj$$83$$, !1) : this.$_transitionEnd$($$$$61$$($obj$$83$$.children("UL")[0]), $obj$$83$$), $callback$$136$$ && $callback$$136$$.call()) : ($obj$$83$$.children("a").addClass("oj-tree-loading"), 
          this.$_load_node$($obj$$83$$, function() {
            $t$$7$$.$_expand$($obj$$83$$, $callback$$136$$, $skipAnim$$4$$);
          }, $callback$$136$$));
        }
      }
    }, $_expandAll$:function($obj$$84$$, $animate$$14$$, $original_obj$$) {
      var $origTarg$$1$$ = $obj$$84$$ ? $obj$$84$$ : -1;
      ($obj$$84$$ = $obj$$84$$ ? this.$_getNode$($obj$$84$$) : -1) && -1 !== $obj$$84$$ ? $origTarg$$1$$ = $obj$$84$$ : $obj$$84$$ = this.$_$container_ul$;
      $original_obj$$ ? $obj$$84$$ = $obj$$84$$.find("li.oj-collapsed") : ($original_obj$$ = $obj$$84$$, $obj$$84$$ = $obj$$84$$.is(".oj-collapsed") ? $obj$$84$$.find("li.oj-collapsed").addBack() : $obj$$84$$.find("li.oj-collapsed"));
      var $_this$$7$$ = this;
      $obj$$84$$.each(function() {
        var $__this$$ = this;
        $_this$$7$$.$_is_loaded$(this) ? $_this$$7$$.$_expand$(this, !1, !$animate$$14$$) : $_this$$7$$.expand(this, function() {
          $_this$$7$$.$_expandAll$($__this$$, $animate$$14$$, $original_obj$$);
        }, !$animate$$14$$);
      });
      0 === $original_obj$$.find("li.oj-collapsed").length && this.$_emitEvent$({obj:$obj$$84$$, targ:$origTarg$$1$$}, "expandAll");
    }, $_select$:function($node$$157$$, $bRet_check$$, $e$$122$$) {
      var $core$$ = this.$_data$.$core$, $ui$$45$$ = this.$_data$.ui, $selectMode$$ = $core$$.$selectMode$;
      if (0 == $selectMode$$) {
        return!1;
      }
      $node$$157$$ = this.$_getNode$($node$$157$$);
      if (-1 == $node$$157$$ || !$node$$157$$ || !$node$$157$$.length || $node$$157$$.hasClass($TreeUtils$$.$_OJ_DISABLED$) || $core$$.locked) {
        return!1;
      }
      $e$$122$$ && "touchend" == $e$$122$$.type || ($ui$$45$$.$touchEvent$ = !1);
      var $isSelected$$ = this.isSelected($node$$157$$);
      if (!$isSelected$$) {
        var $prevSelections$$2_rslt$$5$$ = this.$_emitEvent$({obj:$node$$157$$, func:"select"}, "before");
        if ("boolean" == typeof $prevSelections$$2_rslt$$5$$ && !$prevSelections$$2_rslt$$5$$) {
          return!1;
        }
      }
      var $prevSelections$$2_rslt$$5$$ = this.options.selection.slice(0), $s$$14$$ = this.options, $isMultiple_selMultMod$$ = $ui$$45$$.$defaults$.selectMultipleModifier, $isRange_selRangeMod$$ = $ui$$45$$.$defaults$.selectRangeModifier, $disSelChildren$$ = $ui$$45$$.$defaults$.disableSelectingChildren, $isMultiple_selMultMod$$ = "on" == $isMultiple_selMultMod$$ || !1 !== $isMultiple_selMultMod$$ && $e$$122$$ && $oj$$66$$.$DomUtils$.$isMetaKeyPressed$($e$$122$$), $isRange_selRangeMod$$ = !1 !== $isRange_selRangeMod$$ && 
      $e$$122$$ && $e$$122$$[$isRange_selRangeMod$$ + "Key"] && $ui$$45$$.$lastSelected$ && this.$_data$.ui.$lastSelected$[0] !== $node$$157$$[0] && $ui$$45$$.$lastSelected$.parent()[0] === $node$$157$$.parent()[0], $proceed$$1$$ = !0, $t$$8$$ = this;
      if ($bRet_check$$) {
        if ($disSelChildren$$ && $isMultiple_selMultMod$$ && ($node$$157$$.parentsUntil(".oj-tree", "li").children("a.oj-selected").length || $node$$157$$.children("ul").find("a.oj-selected:eq(0)").length)) {
          return!1;
        }
        $proceed$$1$$ = !1;
        switch(!0) {
          case $isRange_selRangeMod$$:
            $ui$$45$$.$lastSelected$.addClass("oj-tree-last-selected");
            $node$$157$$ = $node$$157$$[$node$$157$$.index() < $ui$$45$$.$lastSelected$.index() ? "nextUntil" : "prevUntil"](".oj-tree-last-selected").addBack();
            -1 == $selectMode$$ || $node$$157$$.length < $selectMode$$ ? ($ui$$45$$.$lastSelected$.removeClass("oj-tree-last-selected"), $ui$$45$$.selected.each(function() {
              this !== $ui$$45$$.$lastSelected$[0] && $t$$8$$.$_deselect$(this);
            }), $isSelected$$ = !1, $proceed$$1$$ = !0) : $proceed$$1$$ = !1;
            break;
          case $ui$$45$$.$touchEvent$ && -1 == $selectMode$$:
            $ui$$45$$.$touchEvent$ = !1;
            this.toggleSelect($node$$157$$);
            $proceed$$1$$ = !1;
            break;
          case $isSelected$$ && !$isMultiple_selMultMod$$:
            if (!$e$$122$$) {
              break;
            }
            this.$_deselectAll$();
            $ui$$45$$.$spacebar$ || ($isSelected$$ = !1);
            $proceed$$1$$ = !0;
            break;
          case !$isSelected$$ && !$isMultiple_selMultMod$$:
            $e$$122$$ ? $ui$$45$$.selected && 1 == $ui$$45$$.selected.length ? this.$_deselect$($ui$$45$$.selected) : this.$_deselectAll$($ui$$45$$.selected) : 1 === $selectMode$$ ? this.$_deselect$($ui$$45$$.selected) : 1 < $selectMode$$ && this.$_deselectAll$();
            $proceed$$1$$ = !0;
            break;
          case $isSelected$$ && $isMultiple_selMultMod$$:
            this.deselect($node$$157$$);
            break;
          case !$isSelected$$ && $isMultiple_selMultMod$$:
            if (-1 == $selectMode$$ || $ui$$45$$.selected.length + 1 <= $selectMode$$) {
              $proceed$$1$$ = !0;
            }
          ;
        }
      }
      $bRet_check$$ = !1;
      $proceed$$1$$ && !$isSelected$$ && ($isRange_selRangeMod$$ || ($ui$$45$$.$lastSelected$ = $node$$157$$), $node$$157$$.children("a").addClass($TreeUtils$$.$_OJ_SELECTED$), $node$$157$$.attr("aria-selected", "true"), $bRet_check$$ = !0, $s$$14$$.selectedParentExpand && $node$$157$$.parents(".oj-collapsed").each(function() {
        $t$$8$$.$_expand$(this, !1, !0);
      }), $ui$$45$$.selected = $ui$$45$$.selected.add($node$$157$$), this.$_fix_scroll$($node$$157$$.eq(0)), $core$$.$suppressSelectEvent$ || this.$_fireOptionChangeEvent$("selection", $prevSelections$$2_rslt$$5$$, null, $e$$122$$));
      return $bRet_check$$;
    }, $_deselect$:function($node$$158$$) {
      $node$$158$$ = this.$_getNode$($node$$158$$);
      if (!$node$$158$$.length) {
        return!1;
      }
      $node$$158$$.hasClass($TreeUtils$$.$_OJ_DISABLED$) || this.$_data$.$core$.locked || !this.isSelected($node$$158$$) || ($node$$158$$.children("a").removeClass($TreeUtils$$.$_OJ_SELECTED$), $node$$158$$.removeAttr("aria-selected"), this.$_data$.ui.selected = this.$_data$.ui.selected.not($node$$158$$), this.$_data$.ui.$lastSelected$ && this.$_data$.ui.$lastSelected$.length && this.$_data$.ui.$lastSelected$.get(0) === $node$$158$$.get(0) && (this.$_data$.ui.$lastSelected$ = this.$_data$.ui.selected.eq(0)));
    }, $_deselectAll$:function($context$$171_ret$$75$$) {
      if (!this.$_data$.$core$.locked && ($context$$171_ret$$75$$ = $context$$171_ret$$75$$ ? $$$$61$$($context$$171_ret$$75$$).find("a.oj-selected").parent() : this.$_$container$.find("a.oj-selected").parent(), $context$$171_ret$$75$$.not(".oj-disabled"), 0 !== $context$$171_ret$$75$$.length)) {
        var $_this$$8$$ = this;
        $$$$61$$.each($context$$171_ret$$75$$, function() {
          $_this$$8$$.$_deselect$(this);
        });
      }
    }, $_setSelected$:function($nodes$$9$$, $e$$123$$) {
      if (this.$_data$.$core$.locked) {
        return null;
      }
      if ($nodes$$9$$ && 0 < $nodes$$9$$.length) {
        var $_this$$9$$ = this;
        $$$$61$$.each($nodes$$9$$, function($i$$462$$, $val$$72$$) {
          $val$$72$$ && $_this$$9$$.$_select$($val$$72$$, !0, $e$$123$$);
        });
      }
    }, $_handleNodeTapClick$:function($event$$688$$) {
      $event$$688$$.preventDefault();
      $event$$688$$.currentTarget.blur();
      if (!$$$$61$$($event$$688$$.currentTarget).hasClass("oj-tree-loading")) {
        this.$_setFocus$();
        if (!this.$_data$.ui.$focused$) {
          var $hov$$ = this.$_getNode$($event$$688$$.currentTarget);
          0 < $hov$$.length && -1 != $hov$$ && (this.$_data$.ui.$lastHovered$ = $hov$$);
          this.$_$container_ul$.focus();
        }
        this.$_select$($event$$688$$.currentTarget, !0, $event$$688$$);
      }
      this.$_data$.ui.$touchEvent$ = !1;
    }, $_disclosureHover$:function($elem$$109$$, $bHover$$) {
      $elem$$109$$ = $$$$61$$($elem$$109$$);
      if (!$elem$$109$$.hasClass($TreeUtils$$.$_OJ_DISABLED$) && !this.$_data$.$core$.locked) {
        var $par$$ = $elem$$109$$.parent(), $bClosed$$ = $par$$.hasClass($TreeUtils$$.$_OJ_COLLAPSED$);
        if ($par$$.hasClass($TreeUtils$$.$_OJ_EXPANDED$) || $bClosed$$) {
          $bHover$$ ? ($elem$$109$$.addClass($TreeUtils$$.$_OJ_HOVER$), $elem$$109$$.removeClass("oj-default"), $elem$$109$$.removeClass($TreeUtils$$.$_OJ_SELECTED$)) : ($elem$$109$$.removeClass($TreeUtils$$.$_OJ_HOVER$), $elem$$109$$.addClass("oj-default"));
        }
      }
    }, $_refresh$:function($node$$159$$) {
      this.$_refresh_core$($node$$159$$);
    }, $_refresh_core$:function($node$$160$$) {
      var $origTarg$$3$$ = $node$$160$$ ? $node$$160$$ : -1, $_this$$10$$ = this;
      this.$_save_opened$();
      $node$$160$$ || ($node$$160$$ = -1);
      ($node$$160$$ = this.$_getNode$($node$$160$$)) ? $origTarg$$3$$ = $node$$160$$ : $node$$160$$ = -1;
      -1 !== $node$$160$$ ? $node$$160$$.children("UL").remove() : (this.$_$container_ul$.empty(), this.$_processExistingMarkup$());
      this.$_load_node$($node$$160$$, function() {
        $_this$$10$$.$_emitEvent$({obj:$origTarg$$3$$}, "refresh");
        $_this$$10$$.$_reload_nodes$();
      });
    }, $_refresh_ui$:function($obj$$85$$) {
      this.saveSelected();
      this.$_refresh_core$($obj$$85$$);
    }, after_close:function($obj$$86$$) {
      this.$_emitEvent$({obj:$obj$$86$$}, "after_close", !0);
    }, $_reopen$:function() {
      var $_this$$11$$ = this;
      this.$_data$.$core$.$toExpand$.length && $$$$61$$.each(this.$_data$.$core$.$toExpand$, function($i$$463$$, $val$$73$$) {
        $_this$$11$$.$_expand$($val$$73$$, !1, !0);
      });
      this.$_emitEvent$({}, "reopen", !0);
    }, $_getSelected$:function($context$$172_sel$$2$$) {
      var $ar$$2$$, $i$$464$$, $len$$24$$;
      $context$$172_sel$$2$$ = $context$$172_sel$$2$$ ? $$$$61$$($context$$172_sel$$2$$).find("a.oj-selected").parent() : this.$_data$.ui.selected;
      $ar$$2$$ = [];
      $len$$24$$ = $context$$172_sel$$2$$.length;
      for ($i$$464$$ = 0;$i$$464$$ < $len$$24$$;$i$$464$$++) {
        $ar$$2$$.push($context$$172_sel$$2$$[$i$$464$$]);
      }
      return $ar$$2$$;
    }, $_set_text$:function($obj$$87$$, $val$$74$$) {
      $obj$$87$$ = this.$_getNode$($obj$$87$$);
      if (!$obj$$87$$.length) {
        return!1;
      }
      $obj$$87$$ = $obj$$87$$.children("a:eq(0)");
      $obj$$87$$ = $obj$$87$$.find("span:eq(0)");
      this.$_emitEvent$({obj:$obj$$87$$, name:$val$$74$$}, "set_text", !0);
      return $obj$$87$$[0].textContent = $val$$74$$;
    }, $_loadNodes$:function() {
      0 !== this.$_data$.$ds$.type && -1 !== this.$_data$.$ds$.type ? this.$_load_node$(-1, function() {
        this.$_loaded$();
        this.$_reload_nodes$();
      }) : (this.$_applyEmptyText$(), this.$_loaded$());
    }, $_load_node$:function($obj$$88$$) {
      this.$_emitEvent$({obj:$obj$$88$$}, "load_node", !0);
    }, $_is_loaded$:function() {
      return!0;
    }, $_load_node_DS$:function($obj$$90$$, $s_call$$, $e_call$$) {
      var $_this$$12$$ = this;
      this.$_load_node_tree$($obj$$90$$, function() {
        $_this$$12$$.$_emitEvent$({obj:$_this$$12$$.$_getNode$($obj$$90$$)}, "load_node", !0);
        $s_call$$.call(this);
      }, $e_call$$);
    }, $_is_loaded_DS$:function($obj$$91$$) {
      $obj$$91$$ = this.$_getNode$($obj$$91$$);
      return-1 === $obj$$91$$ || !$obj$$91$$ || $obj$$91$$.is(".oj-expanded, .oj-tree-leaf") || 0 < $obj$$91$$.children("ul").children("li").length;
    }, $_refresh_DS$:function($obj$$92$$) {
      ($obj$$92$$ = this.$_getNode$($obj$$92$$)) && -1 !== $obj$$92$$ && $obj$$92$$.removeData("oj-tree-children");
      return this.$_refresh_ui$($obj$$92$$);
    }, $_load_node_J$:function($obj$$93$$, $s_call$$1$$, $e_call$$1$$) {
      var $_this$$13$$ = this;
      this.$_loadNodeJson$($obj$$93$$, function() {
        $_this$$13$$.$_emitEvent$({obj:$_this$$13$$.$_getNode$($obj$$93$$)}, "load_node", !0);
        $s_call$$1$$.call(this);
      }, $e_call$$1$$);
    }, $_is_loaded_J$:function($obj$$94$$) {
      var $s$$15$$ = this.options.data;
      $obj$$94$$ = this.$_getNode$($obj$$94$$);
      return-1 == $obj$$94$$ || !$obj$$94$$ || !$s$$15$$.ajax && !this.$_data$.$ds$.$progressiveRender$ && !$$$$61$$.isFunction($s$$15$$.data) || $obj$$94$$.is(".oj-expanded, .oj-tree-leaf") || 0 < $obj$$94$$.children("ul").children("li").length;
    }, $_load_node_H$:function($obj$$95$$, $s_call$$2$$, $e_call$$2$$) {
      var $_this$$14$$ = this;
      this.$_loadNodeHtml$($obj$$95$$, function() {
        $_this$$14$$.$_emitEvent$({obj:$_this$$14$$.$_getNode$($obj$$95$$)}, "load_node", !0);
        $s_call$$2$$.call(this);
      }, $e_call$$2$$);
    }, $_is_loaded_H$:function($obj$$96$$) {
      var $s$$16$$ = this.options.data, $data$$172$$ = null, $ajax$$ = null;
      $s$$16$$ && ($data$$172$$ = $s$$16$$.data || null, $ajax$$ = $s$$16$$.ajax || null);
      $obj$$96$$ = this.$_getNode$($obj$$96$$);
      return-1 == $obj$$96$$ || !$obj$$96$$ || !$ajax$$ && !$$$$61$$.isFunction($data$$172$$) || $obj$$96$$.is(".oj-expanded, .oj-tree-leaf") || 0 < $obj$$96$$.children("ul").children("li").size();
    }, reselect:function() {
      var $_this$$15$$ = this, $s$$17$$ = this.$_data$.ui.$toSelect$, $s$$17$$ = $$$$61$$.map($$$$61$$.makeArray($s$$17$$), function($n$$32$$) {
        return "#" + $n$$32$$.toString().replace(/^#/, "").replace(/\\\//g, "/").replace(/\//g, "\\/").replace(/\\\./g, ".").replace(/\./g, "\\.").replace(/\:/g, "\\:");
      });
      $$$$61$$.each($s$$17$$, function($i$$465$$, $val$$75$$) {
        $val$$75$$ && "#" !== $val$$75$$ && $_this$$15$$.select($val$$75$$);
      });
      this.$_data$.ui.selected = this.$_data$.ui.selected.filter(function() {
        return this.parentNode;
      });
      this.$_emitEvent$(null, "reselect", !0);
    }, saveSelected:function() {
      var $ui$$46$$ = this.$_data$.ui;
      $ui$$46$$.$toSelect$ = [];
      $ui$$46$$.selected.each(function() {
        this.id && $ui$$46$$.$toSelect$.push("#" + this.id.toString().replace(/^#/, "").replace(/\\\//g, "/").replace(/\//g, "\\/").replace(/\\\./g, ".").replace(/\./g, "\\.").replace(/\:/g, "\\:"));
      });
      this.$_emitEvent$($ui$$46$$.$toSelect$, "savedselected", !0);
    }, rollback:function($rb$$1$$) {
      $rb$$1$$ && $$$$61$$.isArray($rb$$1$$);
    }, get_rollback:function() {
      this.$_emitEvent$(null, "get_rollback", !0);
      return{$i$:this.$_getIndex$(), $h$:this.$_$container$.children("ul").clone(!0), $d$:this.data};
    }, $_load_node_tree$:function($obj$$97$$, $s_call$$3$$) {
      var $d$$12_rslt$$6$$ = this.$_JsonDSToJson$($obj$$97$$ && -1 != $obj$$97$$ ? $obj$$97$$[0].id : $obj$$97$$ ? $obj$$97$$ : -1, $obj$$97$$);
      if ($d$$12_rslt$$6$$.success && $d$$12_rslt$$6$$.$js$) {
        var $$u_bTree$$1$$ = !$obj$$97$$ || -1 === $obj$$97$$, $s$$18$$ = this.options.data;
        if ($s$$18$$.data && !$s$$18$$.ajax || $s$$18$$.data && $s$$18$$.ajax && $$u_bTree$$1$$) {
          $$u_bTree$$1$$ && (($d$$12_rslt$$6$$ = this.$_parseJson$($d$$12_rslt$$6$$.$js$, $obj$$97$$)) ? (this.$_$container_ul$.empty().append($d$$12_rslt$$6$$.children()), this.$_cleanNode$()) : this.$_data$.$ds$.$correctState$ && this.$_$container_ul$.empty()), $s_call$$3$$ && $s_call$$3$$.call(this);
        } else {
          if (!$s$$18$$.data && $s$$18$$.ajax || $s$$18$$.data && $s$$18$$.ajax && !$$u_bTree$$1$$) {
            ($d$$12_rslt$$6$$ = this.$_parseJson$($d$$12_rslt$$6$$.$js$, $obj$$97$$)) ? ($$u_bTree$$1$$ ? ($$u_bTree$$1$$ = this.$_$container_ul$, $$u_bTree$$1$$.empty().append($d$$12_rslt$$6$$.children()), $$u_bTree$$1$$.attr("role", "tree").attr("aria-labelledby", this.$_elemId$).attr("tabindex", "0").css("outline", "none"), -1 === this.$_data$.$core$.$selectMode$ && $$u_bTree$$1$$.attr("aria-multiselectable", !0)) : ($obj$$97$$.append($d$$12_rslt$$6$$).children("a.oj-tree-loading").removeClass("oj-tree-loading"), 
            $obj$$97$$.removeData("oj-tree-is-loading")), this.$_cleanNode$($obj$$97$$), $s_call$$3$$ && $s_call$$3$$.call(this)) : $$u_bTree$$1$$ ? this.$_data$.$ds$.$correctState$ && (this.$_$container_ul$.empty(), $s_call$$3$$ && $s_call$$3$$.call(this)) : ($obj$$97$$.children("a.oj-tree-loading").removeClass("oj-tree-loading"), $obj$$97$$.removeData("oj-tree-is-loading"), $s$$18$$.correct_state && (this.$_correct_state$($obj$$97$$), $s_call$$3$$ && $s_call$$3$$.call(this)));
          }
        }
      }
    }, $_JsonDSToJson$:function($parentKey$$9$$, $node$$161$$) {
      var $arJson$$ = [], $ds$$ = this.$_tds$, $cc$$, $range$$29$$ = {}, $rslt$$7$$ = {success:!1, $js$:null};
      -1 == $parentKey$$9$$ && ($parentKey$$9$$ = null, $range$$29$$.start = 0);
      $cc$$ = $ds$$.$getChildCount$($parentKey$$9$$);
      0 < $cc$$ && ($range$$29$$.count = $cc$$, $ds$$.$fetchChildren$($parentKey$$9$$, $range$$29$$, {success:$$$$61$$.proxy(function($jns$$) {
        for (var $c$$52$$ = $jns$$.getCount(), $attr$$21_n$$33_r$$5$$, $i$$466$$ = 0;$i$$466$$ < $c$$52$$;$i$$466$$++) {
          $node$$161$$ = {};
          ($attr$$21_n$$33_r$$5$$ = $jns$$.getData($i$$466$$)) && ($node$$161$$.attr = $attr$$21_n$$33_r$$5$$);
          $node$$161$$.title = $jns$$.$m_nodes$[$i$$466$$].title;
          $attr$$21_n$$33_r$$5$$.$metadata$ && ($node$$161$$.metadata = $jns$$.$m_nodes$[$i$$466$$].metadata);
          var $key$$195$$ = $node$$161$$.attr.id;
          $attr$$21_n$$33_r$$5$$ = $ds$$.$getChildCount$($key$$195$$);
          0 < $attr$$21_n$$33_r$$5$$ && ($attr$$21_n$$33_r$$5$$ = this.$_JsonDSToJson$($key$$195$$, $node$$161$$), $node$$161$$.children = $attr$$21_n$$33_r$$5$$.$js$);
          $arJson$$.push($node$$161$$);
        }
        $rslt$$7$$.success = !0;
        $rslt$$7$$.$js$ = $arJson$$;
      }, this), error:function() {
        $rslt$$7$$.success = !1;
      }}));
      return $rslt$$7$$;
    }, $_refresh_json$:function($obj$$98$$) {
      $obj$$98$$ = this.$_getNode$($obj$$98$$);
      if (!this.$_data$.$core$.locked) {
        var $bTree$$2$$ = !$obj$$98$$ || -1 !== $obj$$98$$ || !$obj$$98$$.length;
        if ($bTree$$2$$ || !$obj$$98$$.hasClass($TreeUtils$$.$_OJ_DISABLED$)) {
          var $s$$19$$ = this.options.data.json;
          !$bTree$$2$$ && this.$_data$.$ds$.$progressiveUnload$ && ($$$$61$$.isFunction($s$$19$$.data) || $s$$19$$.ajax) && $obj$$98$$.removeData("oj-tree-children");
          return this.$_refresh_ui$($obj$$98$$);
        }
      }
    }, $_loadNodeJson$:function($obj$$99$$, $s_call$$4$$, $e_call$$4$$) {
      function $success_func$$() {
      }
      function $error_func$$() {
      }
      var $d$$13_s$$20$$ = this.$_getOptions$().data, $data$$173$$ = $d$$13_s$$20$$ && $d$$13_s$$20$$.data || null, $ajax$$1$$ = $d$$13_s$$20$$ && $d$$13_s$$20$$.ajax || null;
      !$d$$13_s$$20$$ || $data$$173$$ || $ajax$$1$$ || ($data$$173$$ = $d$$13_s$$20$$);
      if (($obj$$99$$ = this.$_getNode$($obj$$99$$)) && -1 !== $obj$$99$$ && (this.$_data$.$ds$.$progressiveRender$ || this.$_data$.$ds$.$progressiveUnload$) && !$obj$$99$$.is(".oj-expanded, .oj-tree-leaf") && 0 === $obj$$99$$.children("ul").children("li").length && $obj$$99$$.data("oj-tree-children")) {
        if ($d$$13_s$$20$$ = this.$_parseJson$($obj$$99$$.data("oj-tree-children"), $obj$$99$$)) {
          $obj$$99$$.append($d$$13_s$$20$$), this.$_data$.$ds$.$progressiveUnload$ || $obj$$99$$.removeData("oj-tree-children");
        }
        this.$_cleanNode$($obj$$99$$);
        $s_call$$4$$ && $s_call$$4$$.call(this);
      } else {
        if ($obj$$99$$ && -1 !== $obj$$99$$) {
          if ($obj$$99$$.data("oj-tree-is-loading")) {
            return;
          }
          $obj$$99$$.data("oj-tree-is-loading", !0);
        }
        switch(!0) {
          case !$data$$173$$ && !$ajax$$1$$:
            throw "ojTree - neither data nor ajax settings supplied.";;
          case $$$$61$$.isFunction($data$$173$$):
            $data$$173$$.call(this, $obj$$99$$, $$$$61$$.proxy(function($d$$14$$) {
              ($d$$14$$ = this.$_parseJson$($d$$14$$, $obj$$99$$)) ? (-1 !== $obj$$99$$ && $obj$$99$$ ? ($obj$$99$$.append($d$$14$$).children("a.oj-tree-loading").removeClass("oj-tree-loading"), $obj$$99$$.removeData("oj-tree-is-loading")) : this.$_$container_ul$.empty().append($d$$14$$.children()), this.$_cleanNode$($obj$$99$$), $s_call$$4$$ && $s_call$$4$$.call(this)) : (-1 !== $obj$$99$$ && $obj$$99$$ ? ($obj$$99$$.children("a.oj-tree-loading").removeClass("oj-tree-loading"), $obj$$99$$.removeData("oj-tree-is-loading"), 
              this.$_data$.$ds$.$correctState$ && this.$_correct_state$($obj$$99$$)) : this.$_data$.$ds$.$correctState$ && this.$_$container_ul$.empty(), $e_call$$4$$ && $e_call$$4$$.call(this));
            }, this));
            break;
          case !!$data$$173$$ && !$ajax$$1$$ || !!$data$$173$$ && !!$ajax$$1$$ && (!$obj$$99$$ || -1 === $obj$$99$$):
            $obj$$99$$ && -1 != $obj$$99$$ || (($d$$13_s$$20$$ = this.$_parseJson$($data$$173$$, $obj$$99$$)) ? (this.$_$container_ul$.empty().append($d$$13_s$$20$$.children()), this.$_cleanNode$()) : this.$_data$.$ds$.$correctState$ && this.$_$container_ul$.empty());
            $s_call$$4$$ && $s_call$$4$$.call(this);
            break;
          case !$data$$173$$ && !!$ajax$$1$$ || !!$data$$173$$ && !!$ajax$$1$$ && $obj$$99$$ && -1 !== $obj$$99$$:
            $error_func$$ = function $$error_func$$$($x$$57$$, $status$$29$$, $e$$124$$) {
              var $ef$$ = this.$_getOptions$().data.ajax.error;
              $ef$$ && $ef$$.call(this, $status$$29$$, $e$$124$$, $x$$57$$);
              -1 != $obj$$99$$ && $obj$$99$$.length ? ($obj$$99$$.children("a.oj-tree-loading").removeClass("oj-tree-loading"), $obj$$99$$.removeData("oj-tree-is-loading"), "success" === $status$$29$$ && this.$_data$.$ds$.$correctState$ && this.$_correct_state$($obj$$99$$)) : ("error" == $status$$29$$ || "success" === $status$$29$$ && this.$_data$.$ds$.$correctState$) && this.$_$container_ul$.empty();
              $e_call$$4$$ && $e_call$$4$$.call(this);
            }, $success_func$$ = function $$success_func$$$($d$$15$$, $status$$30_tempd$$, $$u$$1_x$$58$$) {
              var $sf$$ = this.$_getOptions$().data.ajax.success;
              $sf$$ && ($d$$15$$ = $sf$$.call(this, $d$$15$$, $status$$30_tempd$$, $$u$$1_x$$58$$) || $d$$15$$);
              if ("string" == typeof $d$$15$$) {
                $status$$30_tempd$$ = $d$$15$$.replace(/^[\s\n]+$/, "");
                try {
                  $status$$30_tempd$$ = $$$$61$$.parseJSON($status$$30_tempd$$);
                } catch ($err$$26$$) {
                  $status$$30_tempd$$ = null;
                }
                if (!$status$$30_tempd$$) {
                  return $error_func$$.call(this, $$u$$1_x$$58$$, "Bad JSON", "");
                }
              }
              ($d$$15$$ = this.$_parseJson$($d$$15$$, $obj$$99$$)) ? (-1 !== $obj$$99$$ && $obj$$99$$ ? ($obj$$99$$.append($d$$15$$).children("a.oj-tree-loading").removeClass("oj-tree-loading"), $obj$$99$$.removeData("oj-tree-is-loading")) : ($$u$$1_x$$58$$ = this.$_$container_ul$, $$u$$1_x$$58$$.empty().append($d$$15$$.children()), $$u$$1_x$$58$$.attr("role", "tree").attr("aria-labelledby", this.$_elemId$).attr("tabindex", "0").css("outline", "none"), -1 === this.$_data$.$core$.$selectMode$ && $$u$$1_x$$58$$.attr("aria-multiselectable", 
              !0)), this.$_cleanNode$($obj$$99$$), $s_call$$4$$ && $s_call$$4$$.call(this)) : -1 !== $obj$$99$$ && $obj$$99$$ ? ($obj$$99$$.children("a.oj-tree-loading").removeClass("oj-tree-loading"), $obj$$99$$.removeData("oj-tree-is-loading"), this.$_data$.$ds$.$correctState$ && (this.$_correct_state$($obj$$99$$), $s_call$$4$$ && $s_call$$4$$.call(this))) : this.$_data$.$ds$.$correctState$ && (this.$_$container_ul$.empty(), $s_call$$4$$ && $s_call$$4$$.call(this));
            }, $d$$13_s$$20$$.ajax.context = this, $d$$13_s$$20$$.ajax.error = $error_func$$, $d$$13_s$$20$$.ajax.success = $success_func$$, $d$$13_s$$20$$.dataType || ($d$$13_s$$20$$.ajax.dataType = "json"), $$$$61$$.isFunction($d$$13_s$$20$$.ajax.url) && ($d$$13_s$$20$$.ajax.url = $d$$13_s$$20$$.ajax.url.call(this, $obj$$99$$)), $$$$61$$.isFunction($d$$13_s$$20$$.ajax.data) && ($d$$13_s$$20$$.ajax.data = $d$$13_s$$20$$.ajax.data.call(this, $obj$$99$$)), $$$$61$$.ajax($d$$13_s$$20$$.ajax);
        }
      }
    }, $_parseJson$:function($js$$1$$, $obj$$100_ul2$$, $isRecurse_ul1$$) {
      var $d$$16$$ = !1, $tmp$$5$$, $i$$467$$, $j$$59$$, $title$$12$$;
      if (!$js$$1$$) {
        return $d$$16$$;
      }
      this.$_data$.$ds$.$progressiveUnload$ && $obj$$100_ul2$$ && -1 !== $obj$$100_ul2$$ && $obj$$100_ul2$$.data("oj-tree-children", $d$$16$$);
      if ("string" == typeof $js$$1$$) {
        try {
          $js$$1$$ = $$$$61$$.parseJSON($js$$1$$);
        } catch ($err$$27$$) {
          $js$$1$$ = [];
        }
      }
      if ($$$$61$$.isArray($js$$1$$)) {
        $d$$16$$ = $$$$61$$("\x3cul\x3e");
        if (!$js$$1$$.length) {
          return!1;
        }
        $i$$467$$ = 0;
        for ($j$$59$$ = $js$$1$$.length;$i$$467$$ < $j$$59$$;$i$$467$$++) {
          $tmp$$5$$ = this.$_parseJson$($js$$1$$[$i$$467$$], $obj$$100_ul2$$, !0), $tmp$$5$$.length && ($d$$16$$ = $d$$16$$.append($tmp$$5$$));
        }
        $d$$16$$ = $d$$16$$.children();
      } else {
        "string" == typeof $js$$1$$ && ($js$$1$$ = {data:$js$$1$$});
        $title$$12$$ = "string" == typeof $js$$1$$.title ? $js$$1$$.title : " ";
        $d$$16$$ = $$$$61$$("\x3cli role\x3d'treeitem' /\x3e");
        $js$$1$$.attr && (this.$_data$.types.$defType$ && !$js$$1$$.attr.type && ($js$$1$$.attr.type = "oj-tree-deftype", $d$$16$$.addClass("oj-tree-type")), $d$$16$$.attr($js$$1$$.attr));
        $js$$1$$.metadata && $d$$16$$.data($js$$1$$.metadata);
        $js$$1$$.children && 0 === $js$$1$$.children.length && $d$$16$$.addClass($TreeUtils$$.$_OJ_COLLAPSED$);
        $js$$1$$.state && "s" === $js$$1$$.state && $d$$16$$.addClass($TreeUtils$$.$_OJ_SELECTED$);
        $js$$1$$.data || ($js$$1$$.data = {dummy:0});
        var $bIns$$ = !1, $sp$$2$$;
        $tmp$$5$$ = $$$$61$$("\x3ca tabindex\x3d'-1' /\x3e");
        $$$$61$$.each($js$$1$$.data, function($i$$468$$, $m$$24$$) {
          $$$$61$$.isFunction($m$$24$$) && ($m$$24$$ = $m$$24$$.call(this, $js$$1$$));
          "string" != typeof $m$$24$$ && ("attr" == $i$$468$$ ? $tmp$$5$$.attr($m$$24$$) : "style" == $i$$468$$ && $tmp$$5$$.css($m$$24$$), "language" == $i$$468$$ && $tmp$$5$$.addClass($m$$24$$));
          $bIns$$ || ($sp$$2$$ = $$$$61$$("\x3cspan class\x3d'oj-tree-title'\x3e"), $sp$$2$$[0].textContent = $title$$12$$, $tmp$$5$$.prepend("\x3cins class\x3d'oj-tree-icon oj-tree-node-icon oj-component-icon'\x3e\x26#160;\x3c/ins\x3e", $sp$$2$$), $bIns$$ = !0);
          !$m$$24$$.icon && $js$$1$$.icon && ($m$$24$$.icon = $js$$1$$.icon);
          $m$$24$$.icon && (-1 === $m$$24$$.icon.indexOf("/") ? $tmp$$5$$.children("ins").addClass($m$$24$$.icon) : $tmp$$5$$.children("ins").css("background", "url('" + $m$$24$$.icon + "') center center no-repeat"));
        });
        $d$$16$$.append($tmp$$5$$);
        $d$$16$$.prepend("\x3cins class\x3d'oj-tree-icon oj-tree-disclosure-icon oj-component-icon oj-clickable-icon-nocontext oj-default'\x3e\x26#160;\x3c/ins\x3e");
        $js$$1$$.children && (this.$_data$.$ds$.$progressiveRender$ && "expanded" !== $js$$1$$.state ? $d$$16$$.addClass($TreeUtils$$.$_OJ_COLLAPSED$).attr("aria-expanded", "false").data("oj-tree-children", $js$$1$$.children) : (this.$_data$.$ds$.$progressiveUnload$ && $d$$16$$.data("oj-tree-children", $js$$1$$.children), $$$$61$$.isArray($js$$1$$.children) && $js$$1$$.children.length && ($tmp$$5$$ = this.$_parseJson$($js$$1$$.children, $obj$$100_ul2$$, !0), $tmp$$5$$.length && ($obj$$100_ul2$$ = 
        $$$$61$$("\x3cul role\x3d'group' /\x3e"), $obj$$100_ul2$$.append($tmp$$5$$), $d$$16$$.append($obj$$100_ul2$$)))));
      }
      $isRecurse_ul1$$ || ($isRecurse_ul1$$ = $$$$61$$("\x3cul /\x3e"), $isRecurse_ul1$$.append($d$$16$$), $d$$16$$ = $isRecurse_ul1$$);
      return $d$$16$$;
    }, $__getJson$:function($obj$$101$$, $li_attr$$, $a_attr$$, $isCallback$$) {
      var $result$$76$$ = [], $s$$21$$ = this.options, $_this$$17$$ = this, $tmp1$$, $tmp2$$, $val$$76$$, $li$$3$$, $a$$103$$, $t$$9$$, $sAttr$$, $title$$13$$;
      ($obj$$101$$ = this.$_getNode$($obj$$101$$)) && -1 !== $obj$$101$$ || ($obj$$101$$ = this.$_$container$.find("\x3e ul \x3e li"));
      $li_attr$$ = $$$$61$$.isArray($li_attr$$) ? $li_attr$$ : ["id", "class"];
      !$isCallback$$ && $s$$21$$.types && $li_attr$$.push($s$$21$$.types.attr);
      $a_attr$$ = $$$$61$$.isArray($a_attr$$) ? $a_attr$$ : [];
      $obj$$101$$.each(function() {
        $li$$3$$ = $$$$61$$(this);
        $tmp1$$ = {};
        $li_attr$$.length && ($tmp1$$.attr = {});
        $$$$61$$.each($li_attr$$, function($i$$469$$, $v$$5$$) {
          ($tmp2$$ = $li$$3$$.attr($v$$5$$)) && $tmp2$$.length && $tmp2$$.replace(/oj-tree[^ ]*/ig, "").length && ($tmp2$$ = (" " + $tmp2$$).replace(/ oj-tree[^ ]*/ig, "").replace(/ oj-[^ ]*/ig, "").replace(/\s+$/ig, " ").replace(/^ /, "").replace(/ $/, ""), $tmp2$$.length && ($tmp1$$.attr[$v$$5$$] = $tmp2$$));
        });
        $_this$$17$$.$_getDndContext$().$isDragEnabled$() && $_this$$17$$.isSelected($li$$3$$) && ($tmp1$$.state = "s");
        $val$$76$$ = $li$$3$$.data();
        $isPureObjEmpty$$($val$$76$$) || ($tmp1$$.metadata = $val$$76$$);
        $a$$103$$ = $li$$3$$.children("a");
        $tmp2$$ = null;
        $a$$103$$.each(function() {
          $t$$9$$ = $$$$61$$(this);
          $a_attr$$.length || $t$$9$$.children("ins").get(0).style.backgroundImage.length || $t$$9$$.children("ins").get(0).className && $t$$9$$.children("ins").get(0).className.replace(/oj-tree[^ ]*|$/ig, "").length ? ($title$$13$$ = $_this$$17$$.getText($t$$9$$), $$$$61$$.each($a_attr$$, function($k$$16$$, $z$$3$$) {
            $sAttr$$ = (" " + ($t$$9$$.attr($z$$3$$) || "")).replace(/ oj-tree[^ ]*/ig, "").replace(/ oj-[^ ]*/ig, "").replace(/\s+$/ig, " ").replace(/^ /, "").replace(/ $/, "");
            $sAttr$$.length && ($tmp2$$ || ($tmp2$$ = {attr:{}}), $tmp2$$.attr[$z$$3$$] = $sAttr$$);
          }), $t$$9$$.children("ins").get(0).className.replace(/oj-tree[^ ]*|$/ig, "").replace(/^\s+$/ig, "").length && ($sAttr$$ = $t$$9$$.children("ins").get(0).className.replace(/oj-tree[^ ]*|$/ig, "").replace(/ oj-[^ ]*/ig, "").replace(/\s+$/ig, " ").replace(/^ /, "").replace(/ $/, ""), $sAttr$$.length && ($tmp2$$ || ($tmp2$$ = {}), $tmp2$$.icon = $sAttr$$)), $t$$9$$.children("ins").get(0).style.backgroundImage.length && ($sAttr$$ = $t$$9$$.children("ins").get(0).style.backgroundImage.replace("url(", 
          "").replace(")", ""), $sAttr$$.length && ($tmp2$$ || ($tmp2$$ = {}), $tmp2$$.icon = $sAttr$$))) : $title$$13$$ = $_this$$17$$.getText($t$$9$$);
          null != $tmp2$$ && ($tmp1$$.data || ($tmp1$$.data = []), 1 < $a$$103$$.length ? $tmp1$$.data.push($tmp2$$) : $tmp1$$.data = $tmp2$$);
          $tmp1$$.title = $title$$13$$;
        });
        $li$$3$$ = $li$$3$$.find("\x3e ul \x3e li");
        $li$$3$$.length && ($tmp1$$.children = $_this$$17$$.$__getJson$($li$$3$$, $li_attr$$, $a_attr$$, !0));
        $result$$76$$.push($tmp1$$);
      });
      return $result$$76$$;
    }, $_correct_state$:function($obj$$102$$) {
      $obj$$102$$ = this.$_getNode$($obj$$102$$);
      if (!$obj$$102$$ || -1 === $obj$$102$$) {
        return!1;
      }
      $obj$$102$$.removeClass("oj-collapsed oj-expanded").removeAttr("aria-expanded").addClass("oj-tree-leaf").children("ul").remove();
      $obj$$102$$.find("ins:first-child").removeClass("oj-tree-icon oj-tree-disclosure-icon oj-component-icon oj-clickable-icon-nocontext oj-default").addClass("oj-tree-icon");
      this.$_emitEvent$({obj:$obj$$102$$}, "correct_state", !0);
    }, $_loaded$:function() {
      this.$_emitEvent$(null, "loaded");
    }, $_loadNodeHtml$:function($obj$$103$$, $s_call$$5$$, $e_call$$5$$) {
      function $success_func$$1$$() {
      }
      function $error_func$$1$$() {
      }
      var $d$$17_s$$22$$ = this.$_getOptions$().data, $data$$174$$ = $d$$17_s$$22$$ && $d$$17_s$$22$$.data || null, $ajax$$2$$ = $d$$17_s$$22$$ && $d$$17_s$$22$$.ajax || null;
      if (($obj$$103$$ = this.$_getNode$($obj$$103$$)) && -1 !== $obj$$103$$) {
        if ($obj$$103$$.data("oj-tree-is-loading")) {
          return;
        }
        $obj$$103$$.data("oj-tree-is-loading", !0);
      }
      switch(!0) {
        case !$data$$174$$ && !$ajax$$2$$ && $d$$17_s$$22$$ && "string" === typeof $d$$17_s$$22$$:
          this.$_loadHtmlString$($d$$17_s$$22$$, $obj$$103$$, $s_call$$5$$, $e_call$$5$$);
          break;
        case $$$$61$$.isFunction($data$$174$$):
          $data$$174$$.call(this, $obj$$103$$, $$$$61$$.proxy(function($d$$18$$) {
            this.$_loadHtmlString$($d$$18$$, $obj$$103$$, $s_call$$5$$, $e_call$$5$$);
          }, this));
          break;
        case !$data$$174$$ && !$ajax$$2$$:
          $obj$$103$$ && -1 != $obj$$103$$ || (this.$_$container_ul$.empty().append(this.$_data$.html.$cloneMarkup$).find("li, a").filter(function() {
            return!this.firstChild || !this.firstChild.tagName || "INS" !== this.firstChild.tagName;
          }).prepend("\x3cins class\x3d'oj-tree-icon' \x3e\x26#160;\x3c/ins\x3e").end().filter("a").children("ins:first-child").not(".oj-tree-node-icon").addClass("oj-tree-node-icon").addClass("oj-tree-icon"), this.$_$container_ul$.find("li").children("ins:first-child").addClass("oj-tree-icon oj-tree-disclosure-icon oj-component-icon oj-clickable-icon-nocontext oj-default"), this.$_insertHtmlTextSpan$(this.$_$container_ul$), this.$_data$.types.$defType$ && this.$_addDefType$(this.$_$container_ul$), 
          this.$_cleanNode$(), this.$_$container_ul$.find("ul").attr("role", "group"), this.$_$container_ul$.find("li").attr("role", "treeitem"), this.$_$container_ul$.find("a").attr("tabindex", -1));
          $s_call$$5$$ && $s_call$$5$$.call(this);
          break;
        case !!$data$$174$$ && !$ajax$$2$$ || !!$data$$174$$ && !!$ajax$$2$$ && (!$obj$$103$$ || -1 === $obj$$103$$):
          $obj$$103$$ && -1 != $obj$$103$$ || ($d$$17_s$$22$$ = $$$$61$$($data$$174$$), $d$$17_s$$22$$.is("ul") || ($d$$17_s$$22$$ = $$$$61$$("\x3cul /\x3e").append($d$$17_s$$22$$)), this.$_$container_ul$.empty().append($d$$17_s$$22$$.children()).find("li, a").filter(function() {
            return!this.firstChild || !this.firstChild.tagName || "INS" !== this.firstChild.tagName;
          }).prepend("\x3cins class\x3d'oj-tree-icon'\x3e\x26#160;\x3c/ins\x3e").end().filter("a").children("ins:first-child").not(".oj-tree-node-icon").addClass("oj-tree-node-icon").addClass("oj-tree-icon"), this.$_$container_ul$.find("li.oj-tree-leaf ins:first-child").removeClass("oj-tree-icon oj-tree-disclosure-icon oj-component-icon oj-clickable-icon-nocontext oj-default").removeClass("oj-tree-node-icon").addClass("oj-tree-icon"), this.$_insertHtmlTextSpan$(this.$_$container_ul$), this.$_data$.types.$defType$ && 
          this.$_addDefType$(this.$_$container_ul$), this.$_cleanNode$(), this.$_$container_ul$.find("ul").attr("role", "group"), this.$_$container_ul$.find("li").attr("role", "treeitem"), this.$_$container_ul$.find("a").attr("tabindex", "-1"));
          $s_call$$5$$ && $s_call$$5$$.call(this);
          break;
        case !$data$$174$$ && !!$ajax$$2$$ || !!$data$$174$$ && !!$ajax$$2$$ && $obj$$103$$ && -1 !== $obj$$103$$:
          $obj$$103$$ = this.$_getNode$($obj$$103$$), $error_func$$1$$ = function $$error_func$$1$$$($x$$59$$, $t$$10$$, $e$$125$$) {
            var $ef$$1$$ = this.$_getOptions$().data.ajax.error;
            $ef$$1$$ && $ef$$1$$.call(this, $x$$59$$, $t$$10$$, $e$$125$$);
            -1 != $obj$$103$$ && $obj$$103$$.length ? ($obj$$103$$.children("a.oj-tree-loading").removeClass("oj-tree-loading"), $obj$$103$$.removeData("oj-tree-is-loading"), "success" === $t$$10$$ && this.$_data$.$ds$.$correctState$ && this.$_correct_state$($obj$$103$$)) : "success" === $t$$10$$ && this.$_data$.$ds$.$correctState$ && this.$_$container_ul$.empty();
            $e_call$$5$$ && $e_call$$5$$.call(this);
          }, $success_func$$1$$ = function $$success_func$$1$$$($d$$19_parent$$48$$, $nodes$$10_t$$11$$, $x$$60$$) {
            var $sf$$1$$ = this.$_getOptions$().data.ajax.success;
            $sf$$1$$ && ($d$$19_parent$$48$$ = $sf$$1$$.call(this, $d$$19_parent$$48$$, $nodes$$10_t$$11$$, $x$$60$$) || $d$$19_parent$$48$$);
            if ("" === $d$$19_parent$$48$$ || $d$$19_parent$$48$$ && $d$$19_parent$$48$$.toString && "" === $d$$19_parent$$48$$.toString().replace(/^[\s\n]+$/, "")) {
              return $error_func$$1$$.call(this, $x$$60$$, $nodes$$10_t$$11$$, "");
            }
            if ($d$$19_parent$$48$$) {
              $d$$19_parent$$48$$ = $$$$61$$($d$$19_parent$$48$$);
              $d$$19_parent$$48$$.is("ul") || ($d$$19_parent$$48$$ = $$$$61$$("\x3cul /\x3e").append($d$$19_parent$$48$$));
              -1 != $obj$$103$$ && $obj$$103$$ ? ($obj$$103$$.children("a.oj-tree-loading").removeClass("oj-tree-loading"), this.$_removeEmptyUL$($obj$$103$$), $obj$$103$$.append($d$$19_parent$$48$$).children("ul").find("li, a").filter(function() {
                return!this.firstChild || !this.firstChild.tagName || "INS" !== this.firstChild.tagName;
              }).prepend("\x3cins class\x3d'oj-tree-icon'\x3e\x26#160;\x3c/ins\x3e").end().filter("a").children("ins:first-child").not(".oj-tree-node-icon").addClass("oj-tree-node-icon").addClass("oj-tree-icon"), $obj$$103$$.removeData("oj-tree-is-loading"), $obj$$103$$.find("li.oj-tree-leaf ins:first-child").removeClass("oj-tree-icon oj-tree-disclosure-icon oj-component-icon oj-clickable-icon-nocontext oj-default").removeClass("oj-tree-node-icon").addClass("oj-tree-icon"), $d$$19_parent$$48$$ = 
              $obj$$103$$) : (this.$_$container_ul$.empty().append($d$$19_parent$$48$$.children()).find("li, a").filter(function() {
                return!this.firstChild || !this.firstChild.tagName || "INS" !== this.firstChild.tagName;
              }).prepend("\x3cins class\x3d'oj-tree-icon'\x3e\x26#160;\x3c/ins\x3e").end().filter("a").children("ins:first-child").not(".oj-tree-node-icon").addClass("oj-tree-node-icon").addClass("oj-tree-icon"), this.$_$container_ul$.find("li.oj-tree-leaf ins:first-child").removeClass("oj-tree-icon oj-tree-disclosure-icon oj-component-icon oj-clickable-icon-nocontext oj-default").removeClass("oj-tree-node-icon").addClass("oj-tree-icon"), $d$$19_parent$$48$$ = this.$_$container_ul$);
              this.$_handleHtmlParentNoChildren$($d$$19_parent$$48$$);
              this.$_insertHtmlTextSpan$($d$$19_parent$$48$$);
              $nodes$$10_t$$11$$ = $d$$19_parent$$48$$.children("UL");
              if (1 <= $nodes$$10_t$$11$$.length) {
                $nodes$$10_t$$11$$ = $nodes$$10_t$$11$$.first().find("span.oj-tree-title");
                var $_this$$18$$ = this;
                $$$$61$$.each($nodes$$10_t$$11$$, function() {
                  this.textContent = $_this$$18$$.$_escapeHtml$(this.textContent);
                });
              }
              this.$_data$.types.$defType$ && $d$$19_parent$$48$$ && this.$_addDefType$(this.$_$container_ul$);
              this.$_cleanNode$($obj$$103$$);
              $s_call$$5$$ && $s_call$$5$$.call(this);
            } else {
              $obj$$103$$ && -1 !== $obj$$103$$ ? ($obj$$103$$.children("a.oj-tree-loading").removeClass("oj-tree-loading"), $obj$$103$$.removeData("oj-tree-is-loading"), this.$_data$.$ds$.$correctState$ && (this.$_correct_state$($obj$$103$$), $s_call$$5$$ && $s_call$$5$$.call(this))) : this.$_data$.$ds$.$correctState$ && (this.$_$container_ul$.empty(), $s_call$$5$$ && $s_call$$5$$.call(this)), this.$_$container_ul$.find("ul").attr("role", "group"), this.$_$container_ul$.find("li").attr("role", "treeitem")
              ;
            }
          }, $d$$17_s$$22$$.ajax.context = this, $d$$17_s$$22$$.ajax.error = $error_func$$1$$, $d$$17_s$$22$$.ajax.success = $success_func$$1$$, $d$$17_s$$22$$.ajax.dataType || ($d$$17_s$$22$$.ajax.dataType = "html"), $$$$61$$.isFunction($d$$17_s$$22$$.ajax.url) && ($d$$17_s$$22$$.ajax.url = $d$$17_s$$22$$.ajax.url.call(this, $obj$$103$$)), $$$$61$$.isFunction($d$$17_s$$22$$.ajax.data) && ($d$$17_s$$22$$.ajax.data = $d$$17_s$$22$$.ajax.data.call(this, $obj$$103$$)), $$$$61$$.ajax($d$$17_s$$22$$.ajax);
      }
    }, $_handleHtmlParentNoChildren$:function($lazy$$1_parent$$49$$) {
      $lazy$$1_parent$$49$$ = $lazy$$1_parent$$49$$.find($lazy$$1_parent$$49$$.is("ul") ? "li ul" : "ul").filter(function() {
        return!this.firstChild || 0 == this.childNodes.length || 1 == this.childNodes.length && 3 == this.firstChild.nodeType;
      });
      $$$$61$$.each($lazy$$1_parent$$49$$, function() {
        $$$$61$$(this).closest("li").addClass($TreeUtils$$.$_OJ_COLLAPSED$);
      });
    }, $_removeEmptyUL$:function($l$$14_parent$$50$$) {
      $l$$14_parent$$50$$ = $l$$14_parent$$50$$.find("ul").filter(function() {
        return!this.firstChild || 0 == this.childNodes.length || 1 == this.childNodes.length && 3 == this.firstChild.nodeType;
      });
      0 < $l$$14_parent$$50$$.length && $l$$14_parent$$50$$.remove();
    }, $_loadHtmlString$:function($nodes$$11_parent$$51_s$$23$$, $obj$$104$$, $s_call$$6$$) {
      if ($nodes$$11_parent$$51_s$$23$$ && "" !== $nodes$$11_parent$$51_s$$23$$ && $nodes$$11_parent$$51_s$$23$$.toString && "" !== $nodes$$11_parent$$51_s$$23$$.toString().replace(/^[\s\n]+$/, "")) {
        $nodes$$11_parent$$51_s$$23$$ = $$$$61$$($nodes$$11_parent$$51_s$$23$$);
        $nodes$$11_parent$$51_s$$23$$.is("ul") || ($nodes$$11_parent$$51_s$$23$$ = $$$$61$$("\x3cul /\x3e").append($nodes$$11_parent$$51_s$$23$$));
        -1 != $obj$$104$$ && $obj$$104$$ ? ($obj$$104$$.children("a.oj-tree-loading").removeClass("oj-tree-loading"), $obj$$104$$.append($nodes$$11_parent$$51_s$$23$$).children("ul").find("li, a").filter(function() {
          return!this.firstChild || !this.firstChild.tagName || "INS" !== this.firstChild.tagName;
        }).prepend("\x3cins class\x3d'oj-tree-icon'\x3e\x26#160;\x3c/ins\x3e").end().filter("a").children("ins:first-child").not(".oj-tree-node-icon").addClass("oj-tree-node-icon").addClass("oj-tree-icon"), $obj$$104$$.removeData("oj-tree-is-loading"), $nodes$$11_parent$$51_s$$23$$ = $obj$$104$$, this.$_addDefType$(this.$obj$)) : (this.$_$container_ul$.empty().append($nodes$$11_parent$$51_s$$23$$.children()).find("li, a").filter(function() {
          return!this.firstChild || !this.firstChild.tagName || "INS" !== this.firstChild.tagName;
        }).prepend("\x3cins class\x3d'oj-tree-icon oj-tree-disclosure-icon'\x3e\x26#160;\x3c/ins\x3e").end().filter("a").children("ins:first-child").not(".oj-tree-node-icon").addClass("oj-tree-node-icon").addClass("oj-tree-icon"), this.$_$container_ul$.find("li.oj-tree-leaf ins:first-child").removeClass("oj-tree-icon oj-tree-disclosure-icon oj-component-icon oj-clickable-icon-nocontext oj-default").removeClass("oj-tree-node-icon").addClass("oj-tree-icon"), $nodes$$11_parent$$51_s$$23$$ = this.$_$container_ul$, 
        this.$_addDefType$(this.$_$container_ul$));
        $nodes$$11_parent$$51_s$$23$$ && this.$_insertHtmlTextSpan$($nodes$$11_parent$$51_s$$23$$);
        $nodes$$11_parent$$51_s$$23$$ = $nodes$$11_parent$$51_s$$23$$.children("UL");
        if (1 <= $nodes$$11_parent$$51_s$$23$$.length) {
          $nodes$$11_parent$$51_s$$23$$ = $nodes$$11_parent$$51_s$$23$$.first().find("span.oj-tree-title");
          var $_this$$19$$ = this;
          $$$$61$$.each($nodes$$11_parent$$51_s$$23$$, function() {
            this.textContent = $_this$$19$$.$_escapeHtml$(this.textContent);
          });
        }
        this.$_cleanNode$($obj$$104$$);
        $s_call$$6$$ && $s_call$$6$$.call(this);
      } else {
        $obj$$104$$ && -1 !== $obj$$104$$ ? ($obj$$104$$.children("a.oj-tree-loading").removeClass("oj-tree-loading"), $obj$$104$$.removeData("oj-tree-is-loading"), this.$_data$.$ds$.$correctState$ && (this.$_correct_state$($obj$$104$$), $s_call$$6$$ && $s_call$$6$$.call(this))) : this.$_data$.$ds$.$correctState$ && (this.$_$container_ul$.empty(), $s_call$$6$$ && $s_call$$6$$.call(this));
      }
    }, $_insertHtmlTextSpan$:function($elem$$110$$) {
      $$$$61$$.each($elem$$110$$.find("li a"), function($i$$470$$, $val$$77$$) {
        var $ih$$ = $val$$77$$.innerHTML, $ih$$ = $ih$$.replace("ins\x3e", "ins\x3e\x3cspan class\x3d'oj-tree-title'\x3e");
        $val$$77$$.innerHTML = $ih$$ + "\x3c/span\x3e";
      });
    }, $_addDefType$:function($obj$$105$$) {
      var $s$$24$$, $typeAttr$$1$$;
      this.$_data$.types.$defType$ && ($typeAttr$$1$$ = ($s$$24$$ = this.options.types) ? $s$$24$$.attr : this.$_data$.types.$defaults$.attr, $$$$61$$.each($obj$$105$$.find("li"), function($i$$471$$, $val$$78$$) {
        $val$$78$$ = $$$$61$$($val$$78$$);
        $val$$78$$.attr($typeAttr$$1$$) || $val$$78$$.attr($typeAttr$$1$$, "oj-tree-deftype").addClass("oj-tree-type");
      }));
    }, $_save_opened$:function() {
      var $_this$$20$$ = this;
      this.$_data$.$core$.$toExpand$ = [];
      this.$_$container_ul$.find("li.oj-expanded").each(function() {
        this.id && $_this$$20$$.$_data$.$core$.$toExpand$.push("#" + this.id.toString().replace(/^#/, "").replace(/\\\//g, "/").replace(/\//g, "\\/").replace(/\\\./g, ".").replace(/\./g, "\\.").replace(/\:/g, "\\:"));
      });
    }, $_reload_nodes$:function($bIsCallback$$) {
      var $_this$$21$$ = this, $bDone$$ = !0, $current$$27$$ = [], $remaining$$1$$ = [], $n$$34$$, $id$$63$$;
      $bIsCallback$$ || (this.$_data$.$core$.$reopen$ = !1, this.$_data$.$core$.$refreshing$ = !0);
      this.$_isOptExpandAll$() && (this.$_data$.$core$.$toExpand$ = [], this.$_$container_ul$.find("li.oj-collapsed").each(function() {
        $id$$63$$ = "#" + $$$$61$$(this).attr("id");
        $_this$$21$$.isExpanded($id$$63$$) || $_this$$21$$.$_data$.$core$.$toExpand$.push($id$$63$$);
      }));
      this.$_data$.$core$.$toExpand$ = $$$$61$$.map($$$$61$$.makeArray(this.$_data$.$core$.$toExpand$), function($n$$35$$) {
        return "#" + $n$$35$$.toString().replace(/^#/, "").replace(/\\\//g, "/").replace(/\//g, "\\/").replace(/\\\./g, ".").replace(/\./g, "\\.").replace(/\:/g, "\\:");
      });
      this.$_data$.$core$.$toLoad$ = $$$$61$$.map($$$$61$$.makeArray(this.$_data$.$core$.$toLoad$), function($n$$36$$) {
        return "#" + $n$$36$$.toString().replace(/^#/, "").replace(/\\\//g, "/").replace(/\//g, "\\/").replace(/\\\./g, ".").replace(/\./g, "\\.").replace(/\:/g, "\\:");
      });
      this.$_data$.$core$.$toExpand$.length && (this.$_data$.$core$.$toLoad$ = this.$_data$.$core$.$toLoad$.concat(this.$_data$.$core$.$toExpand$), this.$_data$.$core$.$toLoad$ = this.$_data$.$core$.$toLoad$.reduce(function($a$$104$$, $b$$72$$) {
        0 > $a$$104$$.indexOf($b$$72$$) && $a$$104$$.push($b$$72$$);
        return $a$$104$$;
      }, []));
      this.$_data$.$core$.$toLoad$.length && ($$$$61$$.each(this.$_data$.$core$.$toLoad$, function($i$$472$$, $val$$79$$) {
        if ("#" == $val$$79$$) {
          return!0;
        }
        $n$$34$$ = $_this$$21$$.$_$container$.find($val$$79$$);
        $n$$34$$.length ? $_this$$21$$.isExpanded($val$$79$$) || $current$$27$$.push($val$$79$$) : $remaining$$1$$.push($val$$79$$);
      }), $current$$27$$.length && (this.$_data$.$core$.$toLoad$ = $remaining$$1$$, $$$$61$$.each($current$$27$$, function($i$$473$$, $val$$80$$) {
        $_this$$21$$.$_is_loaded$($val$$80$$) || ($_this$$21$$.$_load_node$($val$$80$$, function() {
          $_this$$21$$.$_reload_nodes$(!0);
        }, function() {
          $_this$$21$$.$_reload_nodes$(!0);
        }), $bDone$$ = !1);
      })));
      this.$_data$.$core$.$toExpand$.length && $$$$61$$.each(this.$_data$.$core$.$toExpand$, function($i$$474$$, $val$$81$$) {
        $_this$$21$$.isExpanded($val$$81$$) || $_this$$21$$.$_expand$($val$$81$$, !1, !0);
      });
      $bDone$$ && (this.$_data$.$core$.$reopen$ && clearTimeout(this.$_data$.$core$.$reopen$), this.$_data$.$core$.$reopen$ = setTimeout(function() {
        $_this$$21$$.$_emitEvent$({}, "reload_nodes", !0);
      }, 50), this.$_data$.$core$.$refreshing$ = !1, this.$_reopen$());
    }, setTheme:function($theme_name$$, $theme_url$$) {
      if (!$theme_name$$) {
        return!1;
      }
      $theme_url$$ || ($theme_url$$ = this.$_data$.$themes$.$_themes$ + $theme_name$$ + "/style.css");
      -1 == $$$$61$$.inArray($theme_url$$, this.$_data$.$themes$.$themes_loaded$) && ($_addSheet$$({url:$theme_url$$}), this.$_data$.$themes$.$themes_loaded$.push($theme_url$$));
      this.$_data$.$themes$.$theme$ != $theme_name$$ && (this.$_$container$.removeClass("oj-tree-" + this.$_data$.$themes$.$theme$), this.$_data$.$themes$.$theme$ = $theme_name$$);
      this.$_$container$.addClass("oj-tree-" + $theme_name$$);
      this.$_data$.$themes$.$dots$ ? this.$_showDots$() : this.$_hideDots$();
      this.$_data$.$themes$.icons ? this.$_showIcons$() : this.$_hideIcons$();
    }, $_isTheme$:function() {
      return null != this.$_data$.$themes$;
    }, $_getTheme$:function() {
      return this.$_data$.$themes$.$theme$;
    }, isIcons:function() {
      return this.$_data$.$themes$.icons;
    }, $_showIcons$:function() {
      this.$_data$.$themes$.icons = !0;
      this.$_$container$.children("ul").removeClass("oj-tree-no-icons");
    }, $_hideIcons$:function() {
      this.$_data$.$themes$.icons = !1;
      this.$_$container$.children("ul").addClass("oj-tree-no-icons");
    }, toggleIcons:function() {
    }, $_enableKeys$:function() {
      this.$_data$.keys.$enabled$ = !0;
    }, $_initTree$:function() {
      this.$_initData$();
      this.$_initCoreOpts$();
      this.$_initDSOpts$(!0);
      this.$_initTypeOpts$();
      this.$_getDndContext$().$initDnDOpts$();
      this.$_initCore$();
      this.$_initUI$();
      this.$_initThemes$();
      this.$_initDataSource$();
      this.$_initTypes$();
      this.$_getDndContext$().$initDnD$();
      this.$_initMenu$();
    }, $_emitEvent$:function($data$$175$$, $evname$$, $bInternal$$) {
      if ($evname$$ && "string" === $$$$61$$.type($evname$$) && (!0 !== this.$_data$.$core$.locked || "unlock" === $evname$$ || "isLocked" === $evname$$ || "lock" === $evname$$)) {
        var $func$$11_inst$$, $args$$24_bContinue$$ = Array.prototype.slice.call(arguments);
        $func$$11_inst$$ = this.$_$container$;
        var $isBefore$$ = "before" === $evname$$, $isPublic$$ = $bInternal$$ ? !1 : !0;
        $isPublic$$ || ($evname$$ = "_tree" + $evname$$);
        var $eventdata$$ = {};
        $eventdata$$.item = $data$$175$$ ? $data$$175$$.obj : void 0;
        $eventdata$$.inst = $func$$11_inst$$;
        $isBefore$$ ? ($func$$11_inst$$ = $data$$175$$.func, $eventdata$$.func = $func$$11_inst$$, $eventdata$$.args = $args$$24_bContinue$$, "rename" === $func$$11_inst$$ && ($eventdata$$.title = $data$$175$$.title, $eventdata$$.prevTitle = $data$$175$$.prevTitle)) : $isPublic$$ && ("move" == $evname$$ ? ($eventdata$$.position = $data$$175$$.$p$, $eventdata$$.reference = $data$$175$$.$r$, $eventdata$$.data = $data$$175$$) : "rename" == $evname$$ ? ($eventdata$$.title = $data$$175$$.title, $eventdata$$.prevTitle = 
        $data$$175$$.prevTitle) : "remove" == $evname$$ ? ($eventdata$$.parent = $data$$175$$.parent, $eventdata$$.prev = $data$$175$$.prev) : "delete" == $evname$$ ? ($eventdata$$.prev = $data$$175$$.prev, $eventdata$$.parent = $data$$175$$.parent) : "expandAll" === $evname$$ || "collapseAll" === $evname$$ || "deselectAll" === $evname$$ ? $eventdata$$.targ = $data$$175$$.targ : "loaded" === $evname$$ && ($eventdata$$.item = -1));
        if ($isPublic$$) {
          if ($args$$24_bContinue$$ = this._trigger($evname$$, new $$$$61$$.Event("oj" + $evname$$), $eventdata$$), $isBefore$$) {
            return "undefined" != typeof $args$$24_bContinue$$ && ($args$$24_bContinue$$ = $args$$24_bContinue$$ ? !0 : !1), $args$$24_bContinue$$;
          }
        } else {
          this.$_$container$.trigger($evname$$, $eventdata$$);
        }
      }
    }, $_fireOptionChangeEvent$:function($key$$196$$, $prevVal$$, $newVal$$5$$, $origEvent$$) {
      "selection" === $key$$196$$ && (null == $newVal$$5$$ && ($newVal$$5$$ = this.$_getSelected$()), this.$_compareSelectionValues$($prevVal$$, $newVal$$5$$) || this.option($key$$196$$, $newVal$$5$$, {_context:{originalEvent:$origEvent$$, $internalSet$:!0}, changed:!0}));
    }, $__rollback$:function() {
      return this.get_rollback();
    }, $_start$:function() {
      this.$_isRtl$ && this.$_$container$.addClass("oj-tree-rtl").css("direction", "rtl");
      this.$_$container$.html("\x3cul role\x3d'tree' tabindex\x3d'0' class\x3d'oj-tree-list' style\x3d'outline:none'" + (-1 === this.$_data$.$core$.$selectMode$ ? " aria-multiselectable\x3d'true'" : "") + " aria-labelledby\x3d'" + this.$_elemId$ + "'\x3e\x3cli class\x3d'oj-tree-last oj-tree-leaf'\x3e\x3cins class\x3d'oj-tree-icon'\x3e\x26#160;\x3c/ins\x3e\x3ca class\x3d'oj-tree-loading' href\x3d'#'\x3e\x3cins class\x3d'oj-tree-icon'\x3e\x26#160;\x3c/ins\x3e" + this.$_getString$("stateLoading") + 
      "\x3c/a\x3e\x3c/li\x3e\x3c/ul\x3e");
      this.$_$container_ul$ = this.$_$container$.children("ul:eq(0)");
      this.$_$container$.data("oj-tree-instance-id", this.$_getIndex$());
      this.$_data$.$core$.$li_height$ = this.$_$container_ul$.find("li.oj-collapsed, li.oj-tree-leaf").eq(0).height() || 18;
      this.$_isTouch$ && this.$_$container$.delegate(".oj-tree-list ins.oj-tree-disclosure-icon", "touchend.ojtree", $$$$61$$.proxy(function($event$$689_trgt$$) {
        $event$$689_trgt$$.preventDefault();
        $event$$689_trgt$$ = $$$$61$$($event$$689_trgt$$.target);
        this.toggleExpand($event$$689_trgt$$);
      }, this));
      this.$_$container$.delegate(".oj-tree-list ins.oj-tree-disclosure-icon", "click.ojtree", $$$$61$$.proxy(function($event$$690_trgt$$1$$) {
        $event$$690_trgt$$1$$ = $$$$61$$($event$$690_trgt$$1$$.target);
        this.toggleExpand($event$$690_trgt$$1$$);
      }, this)).delegate(".oj-tree-list ins.oj-tree-disclosure-icon", "mousedown", $$$$61$$.proxy(function($event$$691$$) {
        this.$_data$.ui.$disclosureClick$ = !0;
        $$$$61$$($event$$691$$.target).removeClass("oj-default").removeClass($TreeUtils$$.$_OJ_HOVER$).addClass($TreeUtils$$.$_OJ_SELECTED$);
      }, this)).delegate(".oj-tree-list ins.oj-tree-disclosure-icon", "mouseup", $$$$61$$.proxy(function($event$$692$$) {
        $$$$61$$($event$$692$$.target).removeClass($TreeUtils$$.$_OJ_SELECTED$).addClass("oj-default");
      }, this)).bind("mousedown.ojtree", $$$$61$$.proxy(function() {
        this.$_setFocus$();
      }, this)).bind("dblclick.ojtree", function() {
        var $sel$$3$$;
        if (document.selection && document.selection.empty) {
          document.selection.empty();
        } else {
          if (window.getSelection) {
            $sel$$3$$ = window.getSelection();
            try {
              $sel$$3$$.removeAllRanges(), $sel$$3$$.collapse(document.getElementsByTagName("body")[0], 0);
            } catch ($err$$28$$) {
            }
          }
        }
      });
      this.$_$container_ul$.focus($$$$61$$.proxy(function() {
        if (this.$_data$.ui.$disclosureClick$) {
          this.$_data$.ui.$disclosureClick$ = !1;
        } else {
          this.$_data$.ui.$focused$ = !0;
          var $n$$37$$;
          this.$_data$.ui.$lastHovered$ ? (this.$_data$.ui.$hovered$ = this.$_data$.ui.$lastHovered$, $n$$37$$ = this.$_data$.ui.$hovered$) : this.$_data$.ui.$lastSelected$ && 0 < this.$_data$.ui.$lastSelected$.length ? (this.$_data$.ui.$hovered$ = this.$_data$.ui.$lastSelected$, $n$$37$$ = this.$_data$.ui.$hovered$) : $n$$37$$ = this.$_$container_ul$.find("li:first");
          $n$$37$$ && (this.hover($n$$37$$), this.$_data$.ui.$lastHovered$ = null, this.$_$container_ul$.find("a.oj-selected").removeClass("oj-tree-inactive"));
        }
      }, this)).blur($$$$61$$.proxy(function() {
        this.$_data$.ui.$focused$ = !1;
        this.$_data$.ui.$lastHovered$ = this.$_data$.ui.$hovered$;
        this.$_data$.ui.$lastHovered$ && this.dehover(this.$_data$.ui.$hovered$);
        this.$_$container_ul$.find("a.oj-selected").addClass("oj-tree-inactive");
      }, this));
      this.$_emitEvent$({}, "init", !0);
      this.$_loadNodes$();
      this.$_data$.menu.$usermenu$ && this.$_applyMenu$();
      $_addKeyFilter$$({$_handler$:this.$_keyHandler$, $_selector$:this.$_$container_ul$, $_this$:this});
      this.$_enableKeys$();
    }, $_initCore$:function() {
      this.$_data$.$core$.locked = !1;
      this.$_$container$.addClass("oj-tree oj-tree-" + this.$_getIndex$());
      this.$_$container$.css("outline", "none");
      this.$_$container$.css("MozUserSelect", "none");
      this.$_$container$.css("WebkitTouchCallout", "none");
      this.$_$container$.css("WebkitUserSelect", "none");
      this.$_$container$.css("WebkitTapHighlightColor", "rgba(0,0,0,0)");
    }, $_initUI$:function() {
      this.$_data$.ui.selected = $$$$61$$();
      this.$_data$.ui.$lastSelected$ = !1;
      this.$_data$.ui.$hovered$ = null;
      var $a$$105$$ = this.options.selection;
      $a$$105$$ && "array" === $$$$61$$.type($a$$105$$) && 0 < $a$$105$$.length && (this.$_data$.ui.$toSelect$ = $a$$105$$, this.options.selection = []);
      this.$_isTouch$ && this.$_$container$.delegate(".oj-tree-list a", "touchend.ojtree", $$$$61$$.proxy(function($event$$694$$) {
        this.$_data$.ui.$touchEvent$ = !0;
        this.$_handleNodeTapClick$($event$$694$$);
        $$$$61$$($event$$694$$.currentTarget).hasClass("oj-tree-loading") || this.dehover();
      }, this));
      this.$_$container$.delegate(".oj-tree-list a", "click.ojtree", $$$$61$$.proxy(function($event$$695$$) {
        this.$_data$.ui.$touchEvent$ = !1;
        this.$_handleNodeTapClick$($event$$695$$);
      }, this)).delegate(".oj-tree-list a", "mouseenter.ojtree", $$$$61$$.proxy(function($event$$696$$) {
        $$$$61$$($event$$696$$.currentTarget).hasClass("oj-tree-loading") || this.hover($event$$696$$.target);
      }, this)).delegate(".oj-tree-list a", "mouseleave.ojtree", $$$$61$$.proxy(function($event$$697$$) {
        $$$$61$$($event$$697$$.currentTarget).hasClass("oj-tree-loading") || this.dehover($event$$697$$.target);
      }, this)).delegate(".oj-tree-list .oj-tree-disclosure-icon", "mouseenter.ojtree", $$$$61$$.proxy(function($event$$698$$) {
        $$$$61$$($event$$698$$.currentTarget).hasClass("oj-tree-loading") || this.$_disclosureHover$($event$$698$$.target, !0);
      }, this)).delegate(".oj-tree-list .oj-tree-disclosure-icon", "mouseleave.ojtree", $$$$61$$.proxy(function($event$$699$$) {
        $$$$61$$($event$$699$$.currentTarget).hasClass("oj-tree-loading") || this.$_disclosureHover$($event$$699$$.target, !1);
      }, this)).bind("_treereopen", $$$$61$$.proxy(function() {
        this.reselect();
      }, this)).bind("_treeget_rollback", $$$$61$$.proxy(function() {
        this.dehover();
        this.saveSelected();
      }, this)).bind("ojcollapse", $$$$61$$.proxy(function($event$$700$$, $ui$$47$$) {
        var $obj$$106$$ = this.$_getNode$($ui$$47$$.item), $clk$$ = $obj$$106$$ && $obj$$106$$.length ? $obj$$106$$.children("ul").find("a.oj-selected") : $$$$61$$();
        !1 !== this.options.selectedParentCollapse && $clk$$.length && $clk$$.each(function() {
          this.deselect(this);
          "selectParent" === this.options.selectedParentCollapse && this.select($obj$$106$$);
        });
      }, this)).bind("ojremove", $$$$61$$.proxy(function($event$$701$$, $ui$$48$$) {
        var $s$$25$$ = this.options.selectPrevOnDelete, $clk$$1_obj$$107$$ = this.$_getNode$($ui$$48$$.item), $clk$$1_obj$$107$$ = $clk$$1_obj$$107$$ && $clk$$1_obj$$107$$.length ? $clk$$1_obj$$107$$.find("a.oj-selected") : [], $_this$$23$$ = this, $n$$38$$;
        $clk$$1_obj$$107$$.each(function() {
          $_this$$23$$.deselect(this);
          $_this$$23$$.$_data$.ui.$lastHovered$ && ($n$$38$$ = $_this$$23$$.$_getNode$(this)) && $_this$$23$$.$_data$.ui.$lastHovered$.attr("id") == $n$$38$$.attr("id") && ($_this$$23$$.$_data$.ui.$lastHovered$ = null);
        });
        $s$$25$$ && $clk$$1_obj$$107$$.length && $ui$$48$$.prev && $ui$$48$$.prev.each(function() {
          if (this.parentNode) {
            return $_this$$23$$.select(this), !1;
          }
        });
      }, this)).bind("ojmove", $$$$61$$.proxy(function($event$$702$$, $ui$$49$$) {
        var $data$$176$$ = $ui$$49$$.data, $copy$$1_p$$13$$ = $data$$176$$.$cy$;
        $copy$$1_p$$13$$ && $data$$176$$.$oc$ && ($data$$176$$.$oc$.find("a.oj-selected").removeClass($TreeUtils$$.$_OJ_SELECTED$), $data$$176$$.$oc$.removeAttr("aria-selected"));
        $data$$176$$.$ot$ === $data$$176$$.$rt$ || $copy$$1_p$$13$$ || ($copy$$1_p$$13$$ = $data$$176$$.$ot$.$_data$.ui, $copy$$1_p$$13$$.$lastHovered$ && ($data$$176$$.$o$.attr("id") == $copy$$1_p$$13$$.$lastHovered$.attr("id") && ($copy$$1_p$$13$$.$lastHovered$ = null), $copy$$1_p$$13$$.$lastSelected$ && $data$$176$$.$o$.attr("id") == $copy$$1_p$$13$$.$lastSelected$.attr("id") && ($copy$$1_p$$13$$.$lastSelected$ = null)));
      }, this));
    }, $_initDataSource$:function() {
      this.$_initTreeData$();
      this.$_initJsonData$();
      this.$_initHtmlData$();
    }, $_initTreeData$:function() {
      1 === this.$_data$.$ds$.type && (this.$_tds$ = this.options.data || null, this.$_load_node$ = this.$_load_node_DS$, this.$_is_loaded$ = this.$_is_loaded_DS$, this.$_refresh$ = this.$_refresh_DS$);
    }, $_initJsonData$:function() {
      3 === this.$_data$.$ds$.type && (this.$_data$.$ds$.$progressiveUnload$ && this.$_$container$.bind("_treeafter_close", function($e$$128$$, $ui$$50$$) {
        $ui$$50$$.item.children("ul").remove();
      }), this.$_load_node$ = this.$_load_node_J$, this.$_is_loaded$ = this.$_is_loaded_J$, this.$_refresh$ = this.$_refresh_json$);
    }, $_initHtmlData$:function() {
      4 === this.$_data$.$ds$.type && (this.$_processExistingMarkup$(), this.$_load_node$ = this.$_load_node_H$, this.$_is_loaded$ = this.$_is_loaded_H$, this.$_refresh$ = this.$_refresh_ui$);
    }, $_processExistingMarkup$:function() {
      this.$_data$.html.$useExistingMarkup$ && (this.$_data$.html.$markup_ul$ || (this.$_data$.html.$markup_ul$ = this.$_$container$.find(" \x3e ul"), this.$_data$.html.$markup_div$ = $$$$61$$("\x3cdiv id\x3d'oj-tree-existing-markup-" + this.$_getIndex$() + "' style\x3d'display:none'\x3e").append(this.$_data$.html.$markup_ul$), this.$_$container$.after(this.$_data$.html.$markup_div$)), this.$_data$.html.$markup$ = this.$_data$.html.$markup_ul$.find(" \x3e li"), this.$_data$.html.$cloneMarkup$ = this.$_data$.html.$markup$.clone(!0), 
      this.$_data$.html.$cloneMarkup$.find("li").addBack().contents().filter(function() {
        return 3 == this.nodeType;
      }).remove());
    }, $_initThemes$:function() {
      !1 === this.$_data$.$themes$.$_themes$ && $$$$61$$("script").each(function() {
        if (this.src.toString().match(/jquery\.oj-tree[^\/]*?\.js(\?.*)?$/)) {
          return this.$_data$.$themes$.$_themes$ = this.src.toString().replace(/jquery\.oj-tree[^\/]*?\.js(\?.*)?$/, "") + "themes/", !1;
        }
      });
      !1 === this.$_data$.$themes$.$_themes$ && (this.$_data$.$themes$.$_themes$ = "themes/");
      this.$_$container$.bind("_treeinit", $$$$61$$.proxy(function() {
        var $s$$26$$ = this.options;
        this.$_data$.$themes$.$dots$ = $s$$26$$.dots;
        this.$_data$.$themes$.icons = $s$$26$$.icons;
        this.setTheme(this.$_data$.$themes$.$theme$, this.$_data$.$themes$.url);
      }, this)).bind("ojloaded", $$$$61$$.proxy(function() {
        this.$_data$.$themes$.$dots$ ? this.$_showDots$() : this.$_hideDots$();
        this.$_data$.$themes$.icons ? this.$_showIcons$() : this.$_hideIcons$();
      }, this));
    }, $_initTypes$:function() {
      var $s$$27$$ = this.options.types;
      $s$$27$$ && this.$_$container$.bind("_treeinit", $$$$61$$.proxy(function() {
        var $types$$ = $$$$61$$.extend(!0, {}, $s$$27$$.types), $attr$$22$$ = $s$$27$$.attr || this.$_data$.types.$defaults$.attr, $icons_css$$ = "", $_this$$24$$ = this;
        $$$$61$$.each($types$$, function($i$$475$$, $tp$$) {
          $$$$61$$.each($tp$$, function($k$$17$$) {
            /^(maxDepth|maxChildren|icon|validChildren)$/.test($k$$17$$) || $_this$$24$$.$_data$.types.$attachTo$.push($k$$17$$);
          });
          var $ot$$1$$ = typeof $tp$$.icon;
          if ("undefined" === $ot$$1$$) {
            $ot$$1$$ = typeof $tp$$.image;
            if ("boolean" === $ot$$1$$ && !$tp$$.image) {
              $tp$$.image = "ojt$none";
            } else {
              if (!$tp$$.image && !$tp$$.position) {
                return!0;
              }
            }
            $tp$$.icon = {};
            $tp$$.image && ($tp$$.icon.image = $tp$$.image, delete $tp$$.image);
            void 0 !== $tp$$.position && ($tp$$.icon.position = $tp$$.position, delete $tp$$.position);
          }
          if ($tp$$.icon.image || $tp$$.icon.position) {
            "default" == $i$$475$$ ? ($_this$$24$$.$_data$.types.$defType$ = !0, $icons_css$$ += ".oj-tree-" + $_this$$24$$.$_getIndex$() + " .oj-tree-list li.oj-tree-type a \x3e .oj-tree-node-icon { ", $icons_css$$ += $_this$$24$$.$_addTypeCss$($tp$$, $icons_css$$), $icons_css$$ += "} ", $icons_css$$ += ".oj-tree-" + $_this$$24$$.$_getIndex$() + " .oj-tree-list li[" + $attr$$22$$ + '\x3d"oj-tree-deftype"].oj-tree-type \x3e a ins.oj-tree-node-icon { ') : $tp$$.icon.image && ($icons_css$$ += ".oj-tree-" + 
            $_this$$24$$.$_getIndex$() + " .oj-tree-list li[" + $attr$$22$$ + '\x3d"' + $i$$475$$ + '"].oj-tree-type \x3e a \x3e ins.oj-tree-node-icon { '), $icons_css$$ += $_this$$24$$.$_addTypeCss$($tp$$, $icons_css$$), $icons_css$$ += "} ";
          }
        });
        "" !== $icons_css$$ && $_addSheet$$({$str$:$icons_css$$, title:"oj-tree-types"});
      }, this)).bind("ojbefore", $$$$61$$.proxy(function($e$$129$$, $data$$177$$) {
        var $d$$20_o$$19_s$$28$$, $ty$$1$$, $func$$12$$ = $data$$177$$.func, $item$$133$$ = $data$$177$$.item;
        if (($d$$20_o$$19_s$$28$$ = ($d$$20_o$$19_s$$28$$ = this.$_data$.types.$defaults$.useData ? this.$_getNode$($item$$133$$) : !1) && -1 !== $d$$20_o$$19_s$$28$$ && $d$$20_o$$19_s$$28$$.length ? $d$$20_o$$19_s$$28$$.data("oj-tree") : !1) && $d$$20_o$$19_s$$28$$.types && !1 === $d$$20_o$$19_s$$28$$[$func$$12$$] || -1 !== $$$$61$$.inArray($func$$12$$, this.$_data$.types.$attachTo$) && $data$$177$$.item && ($data$$177$$.item.tagName || $data$$177$$.item.jquery) && ($d$$20_o$$19_s$$28$$ = this.options.types.types, 
        $ty$$1$$ = this.$_getType$($item$$133$$), ($d$$20_o$$19_s$$28$$[$ty$$1$$] && "undefined" !== typeof $d$$20_o$$19_s$$28$$[$ty$$1$$][$func$$12$$] || $d$$20_o$$19_s$$28$$["default"] && "undefined" !== typeof $d$$20_o$$19_s$$28$$["default"][$func$$12$$]) && !1 === this.$_check$($func$$12$$, $item$$133$$))) {
          return $e$$129$$.stopImmediatePropagation(), !1;
        }
      }, this));
    }, $_addTypeCss$:function($tp$$1$$) {
      var $css$$1$$ = "", $css$$1$$ = "ojt$none" !== $tp$$1$$.icon.image ? $css$$1$$ + (" background-image:url(" + $tp$$1$$.icon.image + "); ") : $css$$1$$ + " background-image:none; ";
      return $css$$1$$ = $tp$$1$$.icon.position ? $css$$1$$ + (" background-position:" + $tp$$1$$.icon.position + "; ") : $css$$1$$ + " background-position:0 0; ";
    }, $_getDndContext$:function() {
      this.$_TreeDndContext$ || (this.$_TreeDndContext$ = new $oj$$66$$.$TreeDndContext$(this));
      return this.$_TreeDndContext$;
    }, $_initKeys$:function() {
    }, $_initMenu$:function($newVal$$6$$) {
      var $$m$$1_menu$$19$$;
      $newVal$$6$$ || this.options.contextMenu || ($$m$$1_menu$$19$$ = this.$_$container$.attr("contextmenu")) && (this.options.contextMenu = "#" + $$m$$1_menu$$19$$);
      if ($newVal$$6$$ || this.options.contextMenu) {
        if ($$m$$1_menu$$19$$ = $newVal$$6$$ || this.options.contextMenu) {
          if ($$m$$1_menu$$19$$ = $$$$61$$($$m$$1_menu$$19$$)) {
            $$m$$1_menu$$19$$.css("display", "none");
            var $dm$$ = this.$_data$.menu;
            $dm$$.$$container$ = $$m$$1_menu$$19$$;
            $dm$$.$usermenu$ = !0;
          }
          this.$_data$.menu.$usermenu$ && $newVal$$6$$ && this.$_applyMenu$();
        }
      }
    }, $_handleContextMenuSelect$:function($ev$$5$$, $ui$$51$$) {
      if (!$ui$$51$$.inst && this.$_data$.menu.$treeDivId$ == this.$_elemId$) {
        var $id$$64$$ = $ui$$51$$ ? $ui$$51$$.item.attr("id") : void 0;
        "ojtreecopy" === $id$$64$$ ? this.$_crrm_copy$(this.$_data$.menu.$node$) : "ojtreecut" === $id$$64$$ ? this.$_crrm_cut$(this.$_data$.menu.$node$) : "ojtreepaste" === $id$$64$$ ? this.$_crrm_paste$(this.$_data$.menu.$node$) : "ojtreeremove" === $id$$64$$ ? this.isSelected(this.$_data$.menu.$node$) ? this.$_crrm_remove$() : this.$_crrm_remove$(this.$_data$.menu.$node$) : "ojtreerename" === $id$$64$$ ? this.$_crrm_rename$(this.$_data$.menu.$node$) : "ojtreecreate" === $id$$64$$ && this.$_crrm_create$(this.$_data$.menu.$node$);
      }
    }, $_NotifyContextMenuGesture$:function($menu$$20_openOptions$$6$$, $event$$703$$, $eventType$$51$$) {
      var $disabledState$$1_keyboard$$1$$ = "keyboard" === $eventType$$51$$;
      if ("contextmenu" == $event$$703$$.type || $disabledState$$1_keyboard$$1$$ || "touch" == $eventType$$51$$) {
        this.$_data$.menu.$node$ = $disabledState$$1_keyboard$$1$$ ? this.$_data$.ui.$hovered$ : $$$$61$$($event$$703$$.target);
        var $textElem$$ = this.$_data$.menu.$node$.find(".oj-tree-title")[0];
        this.$_data$.menu.$activenode$ = null;
        this.$_data$.menu.$node$ ? (this.$_data$.menu.$treeDivId$ = this.$_data$.menu.$node$.closest("div").attr("id"), $menu$$20_openOptions$$6$$ = {launcher:this.$_$container_ul$}, $disabledState$$1_keyboard$$1$$ && ($menu$$20_openOptions$$6$$.position = {of:$textElem$$}), this.$_data$.menu.$usermenu$ && this.$_data$.menu.$$elemPaste$ && ($disabledState$$1_keyboard$$1$$ = !this.$_data$.$crrm$.$ct_nodes$ && !this.$_data$.$crrm$.$cp_nodes$, !!this.$_data$.menu.$$elemPaste$.hasClass($TreeUtils$$.$_OJ_DISABLED$) != 
        $disabledState$$1_keyboard$$1$$ && ($disabledState$$1_keyboard$$1$$ ? this.$_data$.menu.$$elemPaste$.addClass($TreeUtils$$.$_OJ_DISABLED$) : this.$_data$.menu.$$elemPaste$.removeClass($TreeUtils$$.$_OJ_DISABLED$), this.$_data$.menu.$$container$.ojMenu("refresh"))), this.$_OpenContextMenu$($event$$703$$, $eventType$$51$$, $menu$$20_openOptions$$6$$)) : $event$$703$$.preventDefault();
      }
    }, $_initCoreOpts$:function() {
      var $val$$82$$ = this.options.selectionMode, $val$$82$$ = void 0 == $val$$82$$ ? "single" : $val$$82$$;
      "none" === $val$$82$$ ? $val$$82$$ = 0 : "single" === $val$$82$$ ? $val$$82$$ = 1 : "multiple" === $val$$82$$ && ($val$$82$$ = -1);
      this.$_data$.$core$.$selectMode$ = $val$$82$$;
      this.$_data$.$themes$.icons = this.options.icons;
      this.$_initExpandedOpts$();
      this.$_data$.$core$.$toLoad$ = this.options.initLoaded;
    }, $_initUIOpts$:function() {
    }, $_initDSOpts$:function($bInit$$) {
      var $s$$29$$ = this.options.data, $dt$$9_ot$$2$$;
      this.$_data$.$ds$.type = 0;
      this.$_data$.html.$useExistingMarkup$ = !1;
      this.$_data$.html.$cloneMarkup$ = !1;
      if ($s$$29$$) {
        if ($dt$$9_ot$$2$$ = $$$$61$$.type($s$$29$$), "string" === $dt$$9_ot$$2$$) {
          this.$_isHtml$($s$$29$$) ? this.$_data$.$ds$.type = 4 : this.$_data$.$ds$.type = 3;
        } else {
          if ("array" === $dt$$9_ot$$2$$) {
            this.$_data$.$ds$.type = 3;
          } else {
            if ("object" === $dt$$9_ot$$2$$) {
              try {
                $s$$29$$ instanceof $oj$$66$$.$JsonTreeDataSource$ && (this.$_data$.$ds$.type = 1);
              } catch ($e$$130$$) {
                this.$_data$.$ds$.type = -1;
              }
              if (1 !== this.$_data$.$ds$.type) {
                try {
                  $s$$29$$ instanceof $oj$$66$$.$CollectionTreeDataSource$ && (this.$_data$.$ds$.type = 2);
                } catch ($e$$131$$) {
                  this.$_data$.$ds$.type = -1;
                }
              }
              1 !== this.$_data$.$ds$.type && 2 !== this.$_data$.$ds$.type && ($s$$29$$.data || $s$$29$$.ajax) && (($dt$$9_ot$$2$$ = $s$$29$$.dataType) ? "json" === $dt$$9_ot$$2$$ ? this.$_data$.$ds$.type = 3 : "html" === $dt$$9_ot$$2$$ && (this.$_data$.$ds$.type = 4) : ($s$$29$$.dataType = "json", this.$_data$.$ds$.type = 3));
            }
          }
        }
      }
      $bInit$$ && 0 == this.$_data$.$ds$.type && 0 < this.$_$container$.find("ul").length && (this.$_data$.$ds$.type = 4, this.$_data$.html.$useExistingMarkup$ = !0);
    }, $_initTreeDSOpts$:function() {
    }, $_initJsonOpts$:function() {
    }, $_initHtmlOpts$:function() {
    }, $_initMenuOpts$:function() {
    }, $_initTypeOpts$:function() {
      var $o$$20$$ = this.options.types;
      "object" === typeof $o$$20$$ && this.$_applyDefaults$($o$$20$$, {attr:this.$_data$.types.$defaults$.attr});
    }, $_initExpandedOpts$:function() {
      this.$_data$.$core$.$toExpand$ = this.$_varCopy$(this.options, "initExpanded");
      null == this.$_data$.$core$.$toExpand$ && (this.$_data$.$core$.$toExpand$ = []);
    }, $_initData$:function() {
      var $data$$178$$ = this.$_data$;
      $data$$178$$.$core$ = {$initLoaded$:[], $selectMode$:1, $load_open$:!1, $li_height$:0, $toExpand$:!1, $toLoad$:!1, $prepMoveBlk$:{}, $suppressSelectEvent$:!1, $strings$:{}};
      $data$$178$$.ui = {selected:$$$$61$$(), $lastSelected$:!1, $hovered$:null, $lastHovered$:null, $disclosureClick$:!1, $toSelect$:null, opacity:1, $spacebar$:!1, $focused$:!1, $animDurDiv$:null, $touchEvent$:!1};
      $data$$178$$.ui.$defaults$ = {selectMultipleModifier:"ctrl", selectRangeModifier:"shift", disableSelectingChildren:!1};
      $data$$178$$.$crrm$ = {};
      $data$$178$$.$crrm$.$cp_nodes$ = !1;
      $data$$178$$.$crrm$.$ct_nodes$ = !1;
      $data$$178$$.$crrm$.$defaults$ = {inputWidthLimit:200, move:{alwaysCopy:!1, openOnMove:!0, defaultPosition:"last", checkMove:function $$data$$178$$$$crrm$$$defaults$$move$checkMove$() {
        return!0;
      }}};
      $data$$178$$.$crrm$.$prepMoveBlk$ = {};
      $data$$178$$.$ds$ = {};
      $data$$178$$.$ds$.$progressiveRender$ = !1;
      $data$$178$$.$ds$.$progressiveUnload$ = !1;
      $data$$178$$.$ds$.$correctState$ = !0;
      $data$$178$$.$ds$.type = 0;
      $data$$178$$.$json$ = {};
      $data$$178$$.$json$.$defaults$ = {data:!1, ajax:!1};
      $data$$178$$.html = {};
      $data$$178$$.html.$defaults$ = {data:!1, ajax:!1};
      $data$$178$$.html.$useExistingMarkup$ = !1;
      $data$$178$$.html.$markup_ul$ = !1;
      $data$$178$$.html.$markup_div$ = !1;
      $data$$178$$.html.$markup$ = !1;
      $data$$178$$.html.$cloneMarkup$ = !1;
      $data$$178$$.$themes$ = {};
      $data$$178$$.$themes$.icons = !0;
      $data$$178$$.$themes$.$dots$ = !1;
      $data$$178$$.$themes$.$theme$ = "default";
      $data$$178$$.$themes$.url = !1;
      $data$$178$$.$themes$.$themes_loaded$ = [];
      $data$$178$$.$themes$.$_themes$ = !1;
      $data$$178$$.types = {};
      $data$$178$$.types.$attachTo$ = [];
      $data$$178$$.types.$defType$ = !1;
      $data$$178$$.types.$defaults$ = {maxChildren:-1, maxDepth:-1, validChildren:"all", useData:!1, attr:"type", types:{"default":{maxChildren:-1, maxDepth:-1, validChildren:"all"}}};
      $data$$178$$.menu = {};
      $data$$178$$.menu.$usermenu$ = !1;
      $data$$178$$.menu.$$container$ = !1;
      $data$$178$$.menu.$$elemPaste$ = !1;
      $data$$178$$.menu.$node$ = !1;
      $data$$178$$.menu.$activenode$ = !1;
      $data$$178$$.keys = {};
      $data$$178$$.keys.$enabled$ = !0;
      $data$$178$$.keys.bound = [];
    }, $_fix_scroll$:function($obj$$108_t$$13$$) {
      var $c$$53$$ = this.$_$container$[0];
      $c$$53$$.scrollHeight > $c$$53$$.offsetHeight && ($obj$$108_t$$13$$ = this.$_getNode$($obj$$108_t$$13$$)) && -1 !== $obj$$108_t$$13$$ && $obj$$108_t$$13$$.length && $obj$$108_t$$13$$.is(":visible") && ($obj$$108_t$$13$$ = $obj$$108_t$$13$$.offset().top - this.$_$container$.offset().top, 0 > $obj$$108_t$$13$$ && ($c$$53$$.scrollTop = $c$$53$$.scrollTop + $obj$$108_t$$13$$ - 1), $obj$$108_t$$13$$ + this.$_data$.$core$.$li_height$ + ($c$$53$$.scrollWidth > $c$$53$$.offsetWidth ? $scrollbar_width$$ : 
      0) > $c$$53$$.offsetHeight && ($c$$53$$.scrollTop += $obj$$108_t$$13$$ - $c$$53$$.offsetHeight + this.$_data$.$core$.$li_height$ + 1 + ($c$$53$$.scrollWidth > $c$$53$$.offsetWidth ? $scrollbar_width$$ : 0)));
    }, $_setFocus$:function() {
    }, $_unsetFocus$:function() {
    }, $_newIndex$:function() {
      return++$_instance$$;
    }, $_getIndex$:function() {
      return this.$_index$;
    }, $_getOptions$:function() {
      return $$$$61$$.extend(!0, {}, this.options);
    }, $_getContainer$:function() {
      return this.$_$container$;
    }, $_getContainerList$:function() {
      return this.$_$container_ul$;
    }, $_keyHandler$:{up:function() {
      this.hover(this.$_getPrev$(this.$_data$.ui.$hovered$ || this.$_data$.ui.$lastSelected$ || -1));
      return!1;
    }, "ctrl+up":function() {
      this.hover(this.$_getPrev$(this.$_data$.ui.$hovered$ || this.$_data$.ui.$lastSelected$ || -1));
      return!1;
    }, "shift+up":function() {
      this.select(this.$_getPrev$(this.$_data$.ui.$hovered$ || this.$_data$.ui.$lastSelected$ || -1), -1 !== this.$_data$.ui.$selectMode$);
      return!1;
    }, down:function() {
      this.hover(this.$_getNext$(this.$_data$.ui.$hovered$ || this.$_data$.ui.$lastSelected$ || -1));
      return!1;
    }, "ctrl+down":function() {
      this.hover(this.$_getNext$(this.$_data$.ui.$hovered$ || this.$_data$.ui.$lastSelected$ || -1));
      return!1;
    }, "shift+down":function() {
      this.select(this.$_getNext$(this.$_data$.ui.$hovered$ || this.$_data$.ui.$lastSelected$ || -1), -1 !== this.$_data$.ui.$selectMode$);
      return!1;
    }, left:function() {
      var $o$$27$$ = this.$_data$.ui.$hovered$ || this.$_data$.ui.$lastSelected$;
      $o$$27$$ && ($o$$27$$.hasClass($TreeUtils$$.$_OJ_EXPANDED$) ? this.collapse($o$$27$$) : this.hover(this.$_getPrev$($o$$27$$)));
      return!1;
    }, "ctrl+left":function() {
      var $o$$28$$ = this.$_data$.ui.$hovered$ || this.$_data$.ui.$lastSelected$;
      $o$$28$$ && ($o$$28$$.hasClass($TreeUtils$$.$_OJ_EXPANDED$) ? this.collapse($o$$28$$) : this.hover(this.$_getPrev$($o$$28$$)));
      return!1;
    }, "shift+left":function() {
      var $o$$29$$ = this.$_data$.ui.$hovered$ || this.$_data$.ui.$lastSelected$;
      $o$$29$$ && ($o$$29$$.hasClass($TreeUtils$$.$_OJ_EXPANDED$) ? this.collapse($o$$29$$) : this.hover(this.$_getPrev$($o$$29$$)));
      return!1;
    }, right:function() {
      var $o$$30$$ = this.$_data$.ui.$hovered$ || this.$_data$.ui.$lastSelected$;
      $o$$30$$ && $o$$30$$.length && ($o$$30$$.hasClass($TreeUtils$$.$_OJ_COLLAPSED$) ? this.expand($o$$30$$) : this.hover(this.$_getNext$($o$$30$$)));
      return!1;
    }, "ctrl+right":function() {
      var $o$$31$$ = this.$_data$.ui.$hovered$ || this.$_data$.ui.$lastSelected$;
      $o$$31$$ && $o$$31$$.length && ($o$$31$$.hasClass($TreeUtils$$.$_OJ_COLLAPSED$) ? this.expand($o$$31$$) : this.hover(this.$_getNext$($o$$31$$)));
      return!1;
    }, "shift+right":function() {
      var $o$$32$$ = this.$_data$.ui.$hovered$ || this.$_data$.ui.$lastSelected$;
      $o$$32$$ && $o$$32$$.length && ($o$$32$$.hasClass($TreeUtils$$.$_OJ_COLLAPSED$) ? this.expand($o$$32$$) : this.hover(this.$_getNext$($o$$32$$)));
      return!1;
    }, space:function() {
      this.$_data$.ui.$hovered$ && (this.$_data$.ui.$spacebar$ = !0, this.$_data$.ui.$hovered$.children("a:eq(0)").click(), this.$_data$.ui.$spacebar$ = !1);
      return!1;
    }, home:function() {
      this.hover(this.$_$container_ul$.find("li:first"));
      return!1;
    }, end:function() {
      var $a$$106$$ = this.$_$container_ul$.find("li.oj-tree-last:visible");
      $a$$106$$ && $a$$106$$.length && this.hover($a$$106$$[$a$$106$$.length - 1]);
      return!1;
    }, "*":function() {
      this.$_$container_ul$.find("a");
      this.$_expandAll$(-1, !1);
      return!1;
    }, "ctrl+space":function() {
      if (this.$_data$.ui.$hovered$) {
        var $ev$$6$$ = $$$$61$$.Event("click");
        $ev$$6$$.ctrlKey = !0;
        this.$_data$.ui.$hovered$.children("a:eq(0)").trigger($ev$$6$$);
      }
      return!1;
    }, "shift+space":function() {
      if (this.$_data$.ui.$hovered$) {
        var $ev$$7$$ = $$$$61$$.Event("click");
        $ev$$7$$.shiftKey = !0;
        this.$_data$.ui.$hovered$.children("a:eq(0)").trigger($ev$$7$$);
      }
      return!1;
    }, "shift+home":function($event$$706$$) {
      var $prevSelections$$3$$, $hover$$1$$ = this.$_data$.ui.$hovered$;
      if ($hover$$1$$) {
        var $bContinue$$1$$ = !0, $_this$$25$$ = this, $nodes$$12$$ = this.$_$container_ul$.find("li:visible");
        this.$_data$.$core$.$suppressSelectEvent$ = !0;
        $prevSelections$$3$$ = this.options.selection.slice(0);
        $hover$$1$$ = $hover$$1$$[0];
        $$$$61$$.each($nodes$$12$$, function($i$$476$$, $node$$162$$) {
          $node$$162$$ == $hover$$1$$ && ($bContinue$$1$$ = !1);
          $_this$$25$$.$_select$($node$$162$$, !0);
          return $bContinue$$1$$;
        });
        this.$_data$.$core$.$suppressSelectEvent$ = !1;
        this.$_fireOptionChangeEvent$("selection", $prevSelections$$3$$, null, $event$$706$$);
      }
      return!1;
    }, "shift+pgdn":function($event$$707$$) {
      var $prevSelections$$4$$, $hover$$2$$ = this.$_data$.ui.$lastSelected$ || this.$_data$.ui.$hovered$;
      if ($hover$$2$$) {
        var $bFound$$ = !1, $_this$$26$$ = this, $l$$16$$ = this.$_$container_ul$.find("li:visible");
        this.$_data$.$core$.$suppressSelectEvent$ = !0;
        $prevSelections$$4$$ = this.options.selection.slice(0);
        $hover$$2$$ = $hover$$2$$[0];
        $$$$61$$.each($l$$16$$, function($i$$477$$, $node$$163$$) {
          $bFound$$ || ($bFound$$ = $node$$163$$ == $hover$$2$$);
          $bFound$$ && !$_this$$26$$.isSelected($node$$163$$) && $_this$$26$$.$_select$($node$$163$$, !0);
          return!0;
        });
        this.$_data$.$core$.$suppressSelectEvent$ = !1;
        this.$_fireOptionChangeEvent$("selection", $prevSelections$$4$$, null, $event$$707$$);
      }
      return!1;
    }, f2:function() {
      this.$_crrm_rename$(this.$_data$.ui.$hovered$ || this.$_data$.ui.$lastSelected$);
      return!1;
    }, del:function() {
      this.remove(this.$_data$.ui.$hovered$ || this.$_getNode$(null));
      return!1;
    }}, $_applyMenu$:function() {
      if (this.$_data$.menu.$usermenu$) {
        var $$menuContainer$$1$$ = this.$_data$.menu.$$container$, $_this$$27$$ = this;
        $$menuContainer$$1$$.on("ojselect", $$$$61$$.proxy(this.$_handleContextMenuSelect$, this));
        var $bChanged$$ = !1;
        $$menuContainer$$1$$.find("[data-oj-command]").each(function() {
          var $cmd$$1$$;
          0 === $$$$61$$(this).children("a").length && ($cmd$$1$$ = $$$$61$$(this).attr("data-oj-command").split("oj-tree-"), $$$$61$$(this).replaceWith($_this$$27$$.$_buildContextMenuItem$($cmd$$1$$[$cmd$$1$$.length - 1])), $$$$61$$(this).hasClass("oj-menu-divider") && $$$$61$$(this).removeClass("oj-menu-divider").addClass("oj-menu-item"), $bChanged$$ = !0);
        });
        $bChanged$$ && $$menuContainer$$1$$.ojMenu("refresh");
        this.$_data$.menu.$$elemPaste$ = $$menuContainer$$1$$.find("#ojtreepaste");
      }
    }, $_clearMenu$:function() {
      var $um$$ = this.$_data$.menu;
      $um$$.$usermenu$ && ($um$$.$usermenu$ = !1, $um$$.$$container$.off("ojselect"), $um$$.$$container$ = null);
    }, $_buildContextMenuItem$:function($cmd$$2$$) {
      return $$$$61$$(this.$_buildContextMenuListItem$($cmd$$2$$));
    }, $_buildContextMenuListItem$:function($cmd$$3$$) {
      return "\x3cli id\x3d" + $_arMenuCmdMap$$1$$[$cmd$$3$$] + "\x3e" + this.$_buildContextMenuLabel$($cmd$$3$$) + "\x3c/li\x3e";
    }, $_buildContextMenuLabel$:function($cmd$$4$$) {
      return'\x3ca href\x3d"#"\x3e' + this.$_getString$($_arMenuKeyMap$$1$$[$cmd$$4$$]) + "\x3c/a\x3e";
    }, $_crrm_cut$:function($obj$$109$$) {
      $obj$$109$$ = this.$_getNode$($obj$$109$$, !0);
      if (!$obj$$109$$ || !$obj$$109$$.length) {
        return!1;
      }
      this.$_data$.$crrm$.$cp_nodes$ = !1;
      this.$_data$.$crrm$.$ct_nodes$ = $obj$$109$$;
      this.$_emitEvent$({obj:$obj$$109$$}, "cut");
    }, $_crrm_copy$:function($obj$$110$$) {
      $obj$$110$$ = this.$_getNode$($obj$$110$$, !0);
      if (!$obj$$110$$ || !$obj$$110$$.length) {
        return!1;
      }
      this.$_data$.$crrm$.$ct_nodes$ = !1;
      this.$_data$.$crrm$.$cp_nodes$ = $obj$$110$$;
      this.$_emitEvent$({obj:$obj$$110$$}, "copy");
    }, $_crrm_paste$:function($obj$$111$$) {
      $obj$$111$$ = this.$_getNode$($obj$$111$$);
      if (!$obj$$111$$ || !$obj$$111$$.length) {
        return!1;
      }
      var $nodes$$13$$ = this.$_data$.$crrm$.$ct_nodes$ ? this.$_data$.$crrm$.$ct_nodes$ : this.$_data$.$crrm$.$cp_nodes$;
      if (!this.$_data$.$crrm$.$ct_nodes$ && !this.$_data$.$crrm$.$cp_nodes$) {
        return!1;
      }
      this.$_data$.$crrm$.$ct_nodes$ && (this.$_crrm_move_node$(this.$_data$.$crrm$.$ct_nodes$, $obj$$111$$), this.$_data$.$crrm$.$ct_nodes$ = !1);
      this.$_data$.$crrm$.$ct_nodes$ && (this.$_crrm_move_node$(this.$_data$.$crrm$.$ct_nodes$, $obj$$111$$), this.$_data$.$crrm$.$ct_nodes$ = !1);
      this.$_data$.$crrm$.$cp_nodes$ && this.$_crrm_move_node$(this.$_data$.$crrm$.$cp_nodes$, $obj$$111$$, !1, !0);
      this.$_emitEvent$({obj:$obj$$111$$, nodes:$nodes$$13$$}, "paste");
    }, $_crrm_move_node$:function($obj$$112$$, $ref$$4$$, $position$$43$$, $is_copy$$1$$, $is_prepared$$1$$, $skip_check$$1$$) {
      var $s$$30$$ = this.$_data$.$crrm$.$defaults$.move;
      if (!$is_prepared$$1$$) {
        return "undefined" === typeof $position$$43$$ && ($position$$43$$ = $s$$30$$.defaultPosition), "inside" !== $position$$43$$ || $s$$30$$.defaultPosition.match(/^(before|after)$/) || ($position$$43$$ = $s$$30$$.defaultPosition), this.$_moveNode$($obj$$112$$, $ref$$4$$, $position$$43$$, $is_copy$$1$$, !1, $skip_check$$1$$);
      }
      if (!0 === $s$$30$$.alwaysCopy || "multitree" === $s$$30$$.alwaysCopy && $obj$$112$$.$rt$.$_getIndex$() !== $obj$$112$$.$ot$.$_getIndex$()) {
        $is_copy$$1$$ = !0;
      }
      this.$_moveNode$($obj$$112$$, $ref$$4$$, $position$$43$$, $is_copy$$1$$, !0, $skip_check$$1$$);
    }, $_crrm_remove$:function($obj$$113$$) {
      $obj$$113$$ = this.$_getNode$($obj$$113$$, !0);
      this.$__rollback$();
      this.remove($obj$$113$$);
    }, $_crrm_rename$:function($obj$$114$$) {
      $obj$$114$$ = this.$_getNode$($obj$$114$$);
      this.$__rollback$();
      this.$_crrm_showInput$($obj$$114$$, function() {
      });
    }, $_crrm_showInput$:function($obj$$116$$, $callback$$137$$) {
      $obj$$116$$ = this.$_getNode$($obj$$116$$);
      var $rtl$$7$$ = this.$_isRtl$, $w$$8$$ = this.$_data$.$crrm$.$defaults$.inputWidthLimit, $w1$$ = $obj$$116$$.children("ins").width(), $w2$$ = $obj$$116$$.find("\x3e a:visible \x3e ins").width() * $obj$$116$$.find("\x3e a:visible \x3e ins").length, $t$$15$$ = this.getText($obj$$116$$), $_this$$28$$ = this, $h1$$ = $$$$61$$("\x3cdiv /\x3e", {css:{position:"absolute", top:"-200px", left:$rtl$$7$$ ? "0px" : "-1000px", visibility:"hidden"}}).appendTo("body"), $h2$$ = $obj$$116$$.css("position", 
      "relative").append($$$$61$$("\x3cinput /\x3e", {value:$t$$15$$, "class":"oj-tree-rename-input", css:{padding:"0", border:"1px solid silver", position:"absolute", left:$rtl$$7$$ ? "auto" : $w1$$ + $w2$$ + 4 + "px", right:$rtl$$7$$ ? $w1$$ + $w2$$ + 4 + "px" : "auto", top:"0px", height:this.$_data$.$core$.$li_height$ - 2 + "px", lineHeight:this.$_data$.$core$.$li_height$ - 2 + "px", width:"150px"}, blur:$$$$61$$.proxy(function() {
        var $i$$478$$ = $obj$$116$$.children(".oj-tree-rename-input"), $v$$7$$ = $i$$478$$.val();
        "" === $v$$7$$ && ($v$$7$$ = $t$$15$$);
        $h1$$.remove();
        $i$$478$$.remove();
        this.$_set_text$($obj$$116$$, $t$$15$$);
        this.$_renameNode$($obj$$116$$, $v$$7$$);
        $callback$$137$$.call(this, $obj$$116$$, $v$$7$$, $t$$15$$);
        $obj$$116$$.css("position", "");
      }, this), keyup:function($event$$708_key$$198$$) {
        $event$$708_key$$198$$ = $event$$708_key$$198$$.keyCode || $event$$708_key$$198$$.which;
        if (!$_this$$28$$.$_done$) {
          return $_this$$28$$.$_done$ = !0, !1;
        }
        27 == $event$$708_key$$198$$ ? ($_this$$28$$.$_done$ = !1, this.value = $t$$15$$, this.blur()) : 13 == $event$$708_key$$198$$ ? ($_this$$28$$.$_done$ = !1, this.blur()) : $h2$$.width(Math.min($h1$$.text("pW" + this.value).width(), $w$$8$$));
      }, keypress:function($event$$709$$) {
        if (13 == ($event$$709$$.keyCode || $event$$709$$.which)) {
          return!1;
        }
      }})).children(".oj-tree-rename-input");
      this.$_set_text$($obj$$116$$, "");
      $h1$$.css({fontFamily:$h2$$.css("fontFamily") || "", fontSize:$h2$$.css("fontSize") || "", fontWeight:$h2$$.css("fontWeight") || "", fontStyle:$h2$$.css("fontStyle") || "", fontStretch:$h2$$.css("fontStretch") || "", fontVariant:$h2$$.css("fontVariant") || "", letterSpacing:$h2$$.css("letterSpacing") || "", wordSpacing:$h2$$.css("wordSpacing") || ""});
      $h2$$.width(Math.min($h1$$.text("pW" + $h2$$[0].value).width(), $w$$8$$))[0].select();
    }, $_crrm_create$:function($obj$$117$$, $position$$44$$, $js$$2$$, $callback$$138$$, $skip_rename$$) {
      var $_this$$29$$ = this;
      ($obj$$117$$ = this.$_getNode$($obj$$117$$)) || ($obj$$117$$ = -1);
      this.$__rollback$();
      return this.$_createNode$($obj$$117$$, $position$$44$$, $js$$2$$, function($t$$17$$) {
        var $p$$14$$ = this.$_getParent$($t$$17$$), $pos$$16$$ = $$$$61$$($t$$17$$).index();
        $callback$$138$$ && $callback$$138$$.call(this, $t$$17$$);
        $p$$14$$.length && $p$$14$$.hasClass($TreeUtils$$.$_OJ_COLLAPSED$) && this.expand($p$$14$$, !1, !0);
        $skip_rename$$ ? $_this$$29$$.$_emitEvent$({obj:$t$$17$$, name:this.getText($t$$17$$), parent:$p$$14$$, position:$pos$$16$$}) : this.$_crrm_showInput$($t$$17$$, function($obj$$118$$, $new_name$$1$$) {
          $_this$$29$$.$_emitEvent$({obj:$obj$$118$$, name:$new_name$$1$$, parent:$p$$14$$, position:$pos$$16$$});
        });
      });
    }, $_isHtml$:function($s$$31$$) {
      var $ret$$76$$ = !1;
      $s$$31$$ && 3 <= $s$$31$$.length && ($s$$31$$ = $s$$31$$.trim(), $ret$$76$$ = "\x3c" === $s$$31$$.charAt(0));
      return $ret$$76$$;
    }, $_applyEmptyText$:function() {
      var $txt$$ = this.options.emptyText;
      "string" !== typeof $txt$$ && ($txt$$ = this.$_getString$("labelNoData"));
      if ($txt$$ && 0 < $txt$$.length) {
        var $$u$$2$$ = this.$_$container_ul$, $$d$$ = $$$$61$$("\x3cli class\x3d'oj-tree-empty'\x3e\x3c/li\x3e");
        $$d$$[0].textContent = $txt$$;
        $$u$$2$$.empty().append($$d$$);
      }
    }, $_processSubId$:function($locator$$62_sNode$$) {
      var $c$$54_i$$479_subId$$67$$, $node$$164$$, $a$$107_sKey$$;
      $a$$107_sKey$$ = null;
      var $ret$$77$$;
      $locator$$62_sNode$$ && ($c$$54_i$$479_subId$$67$$ = $locator$$62_sNode$$.subId);
      if (!$c$$54_i$$479_subId$$67$$) {
        return null;
      }
      $a$$107_sKey$$ = $c$$54_i$$479_subId$$67$$.split("[");
      if (3 === $a$$107_sKey$$.length && ($a$$107_sKey$$[0] = $a$$107_sKey$$[0].trim(), "oj-tree-node" === $a$$107_sKey$$[0] && ($a$$107_sKey$$[1] = $a$$107_sKey$$[1].trim(), $c$$54_i$$479_subId$$67$$ = $a$$107_sKey$$[1].charAt(0), $c$$54_i$$479_subId$$67$$ = $a$$107_sKey$$[1].indexOf($c$$54_i$$479_subId$$67$$, 1), 0 <= $c$$54_i$$479_subId$$67$$ && ($locator$$62_sNode$$ = $a$$107_sKey$$[1].substring(1, $c$$54_i$$479_subId$$67$$).trim(), $a$$107_sKey$$[2] = $a$$107_sKey$$[2].trim(), $c$$54_i$$479_subId$$67$$ = 
      $a$$107_sKey$$[2].charAt(0), $c$$54_i$$479_subId$$67$$ = $a$$107_sKey$$[2].indexOf($c$$54_i$$479_subId$$67$$, 1), 0 <= $c$$54_i$$479_subId$$67$$)))) {
        $a$$107_sKey$$ = $a$$107_sKey$$[2].substring(1, $c$$54_i$$479_subId$$67$$).trim();
        try {
          $node$$164$$ = this.$_getNode$($locator$$62_sNode$$);
        } catch ($e$$132$$) {
          $node$$164$$ = null;
        }
        if ($a$$107_sKey$$ && $node$$164$$ && -1 !== $node$$164$$) {
          switch($a$$107_sKey$$) {
            case "icon":
              this.$_data$.$themes$.icons && ($ret$$77$$ = $node$$164$$.find(" \x3e a \x3e ins:eq(0)"));
              break;
            case "link":
              $ret$$77$$ = $node$$164$$.find(" \x3e a:eq(0)");
              break;
            case "disclosure":
              this.$_isLeaf$($node$$164$$) || ($ret$$77$$ = $node$$164$$.find(" \x3e ins:eq(0)"));
              break;
            case "title":
              $ret$$77$$ = $node$$164$$.find(" \x3e a \x3e span");
          }
        }
      }
      return $ret$$77$$ ? $ret$$77$$.length ? $ret$$77$$[0] : null : null;
    }, $_getSubIdFromNodeElem$:function($elem$$111$$) {
      var $node$$165_type$$103$$ = $elem$$111$$ ? this.$_getNode$($elem$$111$$) : null, $parent$$52_parentType$$, $subid$$1$$ = null;
      $node$$165_type$$103$$ && -1 != $node$$165_type$$103$$ && $node$$165_type$$103$$.length && $node$$165_type$$103$$.hasClass("oj-tree-node") && $elem$$111$$.tagName && $elem$$111$$.parentNode && ($node$$165_type$$103$$ = $elem$$111$$.tagName, $parent$$52_parentType$$ = $elem$$111$$.parentNode, $parent$$52_parentType$$ = $parent$$52_parentType$$.tagName, "SPAN" === $node$$165_type$$103$$ ? $subid$$1$$ = "title" : "A" === $node$$165_type$$103$$ ? $subid$$1$$ = "link" : "INS" === $node$$165_type$$103$$ && 
      ($elem$$111$$ = $$$$61$$($elem$$111$$), "LI" === $parent$$52_parentType$$ && $elem$$111$$.hasClass("oj-tree-disclosure-icon") ? $subid$$1$$ = "disclosure" : "A" === $parent$$52_parentType$$ && $elem$$111$$.hasClass("oj-tree-node-icon") && ($subid$$1$$ = "icon")));
      return $subid$$1$$;
    }, $_hideDots$:function() {
      this.$_data$.$themes$.$dots$ = !1;
      this.$_$container$.children("ul").addClass("oj-tree-no-dots");
    }, $_showDots$:function() {
      this.$_data$.$themes$.$dots$ = !0;
      this.$_$container$.children("ul").removeClass("oj-tree-no-dots");
    }, $_isOptExpandAll$:function() {
      var $s$$32$$ = this.options.initExpanded;
      return $s$$32$$ && "all" == $s$$32$$ || $$$$61$$.isArray($s$$32$$) && $s$$32$$.length && "all" == $s$$32$$[0];
    }, $_getString$:function($key$$200$$) {
      var $oStrings$$ = this.$_data$.$core$.$strings$, $s$$33$$;
      $s$$33$$ = $oStrings$$[$key$$200$$];
      $s$$33$$ || ($s$$33$$ = this.$getTranslatedString$($key$$200$$), $s$$33$$ = this.$_escapeHtml$($s$$33$$), $oStrings$$[$key$$200$$] = $s$$33$$);
      return $s$$33$$;
    }, $_escapeHtml$:function($text$$26$$) {
      var $div$$13$$ = document.createElement("div");
      $$$$61$$($div$$13$$).text($text$$26$$);
      return $div$$13$$.textContent;
    }, $_getNodeHeight$:function() {
      return this.$_data$.$core$.$li_height$;
    }, $_getAnimDuration$:function() {
      var $ret$$78$$ = 0, $span$$1_val$$83$$, $$div$$1_c$$55_s$$34$$;
      window.getComputedStyle && ($$div$$1_c$$55_s$$34$$ = this.$_data$.ui.$animDurDiv$, $$div$$1_c$$55_s$$34$$ || ($$div$$1_c$$55_s$$34$$ = $$$$61$$("\x3cdiv id\x3d'ojtree-comp-animduration'\x3e\x3cspan class\x3d'oj-tree-transition'\x3edummy\x3c/span\x3e\x3c/div\x3e"), this.$_data$.ui.$animDurDiv$ = $$div$$1_c$$55_s$$34$$, $$$$61$$("body").append($$div$$1_c$$55_s$$34$$)), $span$$1_val$$83$$ = $$div$$1_c$$55_s$$34$$[0].childNodes[0], $span$$1_val$$83$$ = window.getComputedStyle($span$$1_val$$83$$), 
      $span$$1_val$$83$$ = $span$$1_val$$83$$.transitionDuration ? $span$$1_val$$83$$.transitionDuration : $span$$1_val$$83$$["-webkit-transition-duration"] ? $span$$1_val$$83$$["-webkit-transition-duration"] : 0, $$div$$1_c$$55_s$$34$$.detach(), "string" == typeof $span$$1_val$$83$$ && 1 < $span$$1_val$$83$$.length && ($$div$$1_c$$55_s$$34$$ = $span$$1_val$$83$$.charAt($span$$1_val$$83$$.length - 1).toLowerCase(), "s" == $$div$$1_c$$55_s$$34$$ ? ($span$$1_val$$83$$ = $span$$1_val$$83$$.substring(0, 
      $span$$1_val$$83$$.length - 1), $span$$1_val$$83$$ = parseFloat($span$$1_val$$83$$), isNaN($span$$1_val$$83$$) || ($ret$$78$$ = 1E3 * $span$$1_val$$83$$)) : 2 < $span$$1_val$$83$$.length && ($$div$$1_c$$55_s$$34$$ = $span$$1_val$$83$$.substring($span$$1_val$$83$$.length - 2).toLowerCase(), "ms" == $$div$$1_c$$55_s$$34$$ && ($span$$1_val$$83$$ = parseFloat($span$$1_val$$83$$), isNaN($span$$1_val$$83$$) || ($ret$$78$$ = $span$$1_val$$83$$)))));
      return $ret$$78$$;
    }, $_varCopy$:function($obj$$119$$, $s$$35$$) {
      var $o$$33$$ = {};
      $o$$33$$[$s$$35$$] = $obj$$119$$[$s$$35$$];
      return $$$$61$$.extend(!0, {}, $o$$33$$)[$s$$35$$];
    }, $_trace$:function($s$$36$$) {
      this.$_emitEvent$({obj:{msg:$s$$36$$}}, "trace", !0);
    }});
  })();
});

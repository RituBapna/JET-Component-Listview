/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
define(["ojs/ojcore", "jquery", "ojs/ojcomponentcore", "ojdnd"], function($oj$$67$$, $$$$62$$) {
  function $MasonryLayoutCommon$$($elem$$112$$, $rtl$$8_sizeDivWrapper$$, $automationEnabled_style$$9$$, $selectors$$8_sizeDiv$$, $styles$$2$$, $callbackInfo$$) {
    null == $MasonryLayoutCommon$$.$_agentTypeAndVersion$ && ($MasonryLayoutCommon$$.$_agentTypeAndVersion$ = $MasonryLayoutCommon$$.$_getAgentTypeAndVersion$());
    this.$_elem$ = $elem$$112$$;
    this.$_rtl$ = $rtl$$8_sizeDivWrapper$$;
    this.$_automationEnabled$ = $automationEnabled_style$$9$$;
    $selectors$$8_sizeDiv$$ && $selectors$$8_sizeDiv$$.$tiles$ && (this.$_tilesSelector$ = $selectors$$8_sizeDiv$$.$tiles$);
    $styles$$2$$ && ($styles$$2$$.$transitionComponentResizeToStyleClass$ && (this.$_transitionComponentResizeToStyleClass$ = $styles$$2$$.$transitionComponentResizeToStyleClass$), $styles$$2$$.$transitionComponentResizeToFastStyleClass$ && (this.$_transitionComponentResizeToFastStyleClass$ = $styles$$2$$.$transitionComponentResizeToFastStyleClass$), $styles$$2$$.$transitionMoveToStyleClass$ && (this.$_transitionMoveToStyleClass$ = $styles$$2$$.$transitionMoveToStyleClass$), $styles$$2$$.$transitionMoveToFastStyleClass$ && 
    (this.$_transitionMoveToFastStyleClass$ = $styles$$2$$.$transitionMoveToFastStyleClass$), $styles$$2$$.$transitionHideFromStyleClass$ && (this.$_transitionHideFromStyleClass$ = $styles$$2$$.$transitionHideFromStyleClass$), $styles$$2$$.$transitionHideToStyleClass$ && (this.$_transitionHideToStyleClass$ = $styles$$2$$.$transitionHideToStyleClass$), $styles$$2$$.$transitionShowFromStyleClass$ && (this.$_transitionShowFromStyleClass$ = $styles$$2$$.$transitionShowFromStyleClass$), $styles$$2$$.$transitionShowToStyleClass$ && 
    (this.$_transitionShowToStyleClass$ = $styles$$2$$.$transitionShowToStyleClass$), $styles$$2$$.$transitionResizeToStyleClass$ && (this.$_transitionResizeToStyleClass$ = $styles$$2$$.$transitionResizeToStyleClass$));
    $callbackInfo$$ && ($callbackInfo$$.$addStyleClassName$ && (this.$_addStyleClassNameFunc$ = $callbackInfo$$.$addStyleClassName$), $callbackInfo$$.$removeStyleClassName$ && (this.$_removeStyleClassNameFunc$ = $callbackInfo$$.$removeStyleClassName$), $callbackInfo$$.$getSizeStyleClassName$ && (this.$_getSizeStyleClassNameFunc$ = $callbackInfo$$.$getSizeStyleClassName$), $callbackInfo$$.$getTileSpan$ && (this.$_getTileSpanFunc$ = $callbackInfo$$.$getTileSpan$), $callbackInfo$$.$showTileOnEndFunc$ && 
    (this.$_showTileOnEndFunc$ = $callbackInfo$$.$showTileOnEndFunc$), $callbackInfo$$.$hideTileOnEndFunc$ && (this.$_hideTileOnEndFunc$ = $callbackInfo$$.$hideTileOnEndFunc$), $callbackInfo$$.$layoutOnEndFunc$ && (this.$_layoutOnEndFunc$ = $callbackInfo$$.$layoutOnEndFunc$), $callbackInfo$$.$layoutCycleOnStartFunc$ && (this.$_layoutCycleOnStartFunc$ = $callbackInfo$$.$layoutCycleOnStartFunc$), $callbackInfo$$.$layoutCycleOnEndFunc$ && (this.$_layoutCycleOnEndFunc$ = $callbackInfo$$.$layoutCycleOnEndFunc$), 
    $callbackInfo$$.$sortTilesOriginalOrderFunc$ && (this.$_sortTilesOriginalOrderFunc$ = $callbackInfo$$.$sortTilesOriginalOrderFunc$), $callbackInfo$$.$subtreeAttached$ && (this.$_subtreeAttachedFunc$ = $callbackInfo$$.$subtreeAttached$), $callbackInfo$$.$subtreeDetached$ && (this.$_subtreeDetachedFunc$ = $callbackInfo$$.$subtreeDetached$));
    $rtl$$8_sizeDivWrapper$$ = document.createElement("div");
    $automationEnabled_style$$9$$ = $rtl$$8_sizeDivWrapper$$.style;
    $automationEnabled_style$$9$$.display = "inline-block";
    $automationEnabled_style$$9$$.overflow = "hidden";
    $automationEnabled_style$$9$$.visibility = "hidden";
    $selectors$$8_sizeDiv$$ = document.createElement("div");
    $automationEnabled_style$$9$$ = $selectors$$8_sizeDiv$$.style;
    $automationEnabled_style$$9$$.display = "inline-block";
    $rtl$$8_sizeDivWrapper$$.appendChild($selectors$$8_sizeDiv$$);
    $elem$$112$$.insertBefore($rtl$$8_sizeDivWrapper$$, $elem$$112$$.firstChild);
    this.$_sizeDivWrapper$ = $rtl$$8_sizeDivWrapper$$;
    this.$_sizeDiv$ = $selectors$$8_sizeDiv$$;
    var $self$$216$$ = this;
    this.$_handleTransitionEndFunc$ = function $this$$_handleTransitionEndFunc$$($event$$710$$) {
      $self$$216$$.$_handleTransitionEnd$($event$$710$$);
    };
    this.$_hideTilesFunc$ = function $this$$_hideTilesFunc$$() {
      $self$$216$$.$_hideTiles$();
    };
    this.$_handleHideTransitionEndFunc$ = function $this$$_handleHideTransitionEndFunc$$($event$$711$$) {
      $self$$216$$.$_handleHideTransitionEnd$($event$$711$$);
    };
    this.$_handleShowTransitionEndFunc$ = function $this$$_handleShowTransitionEndFunc$$($event$$712$$) {
      $self$$216$$.$_handleShowTransitionEnd$($event$$712$$);
    };
  }
  (function() {
    function $_getNextElement$$($currElem$$1_elem$$144_nextElem$$2$$) {
      for (;$currElem$$1_elem$$144_nextElem$$2$$;) {
        $currElem$$1_elem$$144_nextElem$$2$$ = $currElem$$1_elem$$144_nextElem$$2$$.nextSibling;
        var $bVisible$$ = !0;
        if ($currElem$$1_elem$$144_nextElem$$2$$) {
          var $style$$16$$ = $currElem$$1_elem$$144_nextElem$$2$$.style;
          !$style$$16$$ || $style$$16$$.visibility !== $_HIDDEN$$ && $style$$16$$.display !== $_NONE$$ || ($bVisible$$ = !1);
        }
        if ($currElem$$1_elem$$144_nextElem$$2$$ && 1 === $currElem$$1_elem$$144_nextElem$$2$$.nodeType && $bVisible$$) {
          return $currElem$$1_elem$$144_nextElem$$2$$;
        }
      }
      return null;
    }
    function $_findContainingTile$$($elem$$143$$, $rootElem$$) {
      for (var $currElem$$ = $elem$$143$$;$currElem$$;) {
        var $parentElem$$3_style$$15$$ = $currElem$$.style;
        if ($parentElem$$3_style$$15$$ && ($parentElem$$3_style$$15$$.visibility === $_HIDDEN$$ || $parentElem$$3_style$$15$$.display === $_NONE$$)) {
          break;
        }
        $parentElem$$3_style$$15$$ = $currElem$$.parentNode;
        if ($parentElem$$3_style$$15$$ === $rootElem$$) {
          return $currElem$$;
        }
        $currElem$$ = $parentElem$$3_style$$15$$;
      }
      return null;
    }
    function $_compareTilesOriginalOrder$$($tile1$$, $tile2$$) {
      return $tile2$$.$_jetDataMasonryOriginalOrder$ < $tile1$$.$_jetDataMasonryOriginalOrder$ ? 1 : $tile1$$.$_jetDataMasonryOriginalOrder$ < $tile2$$.$_jetDataMasonryOriginalOrder$ ? -1 : 0;
    }
    function $_sortTilesOriginalOrder$$($arTiles$$4$$) {
      $arTiles$$4$$ && $arTiles$$4$$.sort($_compareTilesOriginalOrder$$);
      return $arTiles$$4$$;
    }
    function $_getTileSpan$$($elem$$142_tile$$12$$) {
      var $span$$2$$ = null;
      $elem$$142_tile$$12$$ = $$$$62$$($elem$$142_tile$$12$$);
      $elem$$142_tile$$12$$.hasClass("oj-masonrylayout-tile-1x1") ? $span$$2$$ = {colSpan:1, rowSpan:1} : $elem$$142_tile$$12$$.hasClass("oj-masonrylayout-tile-2x1") ? $span$$2$$ = {colSpan:2, rowSpan:1} : $elem$$142_tile$$12$$.hasClass("oj-masonrylayout-tile-3x1") ? $span$$2$$ = {colSpan:3, rowSpan:1} : $elem$$142_tile$$12$$.hasClass("oj-masonrylayout-tile-1x2") ? $span$$2$$ = {colSpan:1, rowSpan:2} : $elem$$142_tile$$12$$.hasClass("oj-masonrylayout-tile-1x3") ? $span$$2$$ = {colSpan:1, rowSpan:3} : 
      $elem$$142_tile$$12$$.hasClass("oj-masonrylayout-tile-2x2") ? $span$$2$$ = {colSpan:2, rowSpan:2} : $elem$$142_tile$$12$$.hasClass("oj-masonrylayout-tile-2x3") ? $span$$2$$ = {colSpan:2, rowSpan:3} : $elem$$142_tile$$12$$.hasClass("oj-masonrylayout-tile-3x2") && ($span$$2$$ = {colSpan:3, rowSpan:2});
      return $span$$2$$;
    }
    function $_getSizeStyleClassName$$($elem$$141_tile$$11$$) {
      var $str$$23$$ = null;
      $elem$$141_tile$$11$$ = $$$$62$$($elem$$141_tile$$11$$);
      $elem$$141_tile$$11$$.hasClass("oj-masonrylayout-tile-1x1") ? $str$$23$$ = "oj-masonrylayout-tile-1x1" : $elem$$141_tile$$11$$.hasClass("oj-masonrylayout-tile-2x1") ? $str$$23$$ = "oj-masonrylayout-tile-2x1" : $elem$$141_tile$$11$$.hasClass("oj-masonrylayout-tile-3x1") ? $str$$23$$ = "oj-masonrylayout-tile-3x1" : $elem$$141_tile$$11$$.hasClass("oj-masonrylayout-tile-1x2") ? $str$$23$$ = "oj-masonrylayout-tile-1x2" : $elem$$141_tile$$11$$.hasClass("oj-masonrylayout-tile-1x3") ? $str$$23$$ = 
      "oj-masonrylayout-tile-1x3" : $elem$$141_tile$$11$$.hasClass("oj-masonrylayout-tile-2x2") ? $str$$23$$ = "oj-masonrylayout-tile-2x2" : $elem$$141_tile$$11$$.hasClass("oj-masonrylayout-tile-2x3") ? $str$$23$$ = "oj-masonrylayout-tile-2x3" : $elem$$141_tile$$11$$.hasClass("oj-masonrylayout-tile-3x2") && ($str$$23$$ = "oj-masonrylayout-tile-3x2");
      return $str$$23$$;
    }
    function $_removeStyleClassName$$($elem$$140$$, $styleClass$$12$$) {
      $$$$62$$($elem$$140$$).removeClass($styleClass$$12$$);
    }
    function $_addStyleClassName$$($elem$$139$$, $styleClass$$11$$) {
      $$$$62$$($elem$$139$$).addClass($styleClass$$11$$);
    }
    $oj$$67$$.$__registerWidget$("oj.ojMasonryLayout", $$$$62$$.oj.baseComponent, {defaultElement:"\x3cdiv\x3e", widgetEventPrefix:"oj", options:{reorderHandle:null, beforeInsert:null, insert:null, beforeRemove:null, remove:null, beforeResize:null, resize:null, beforeReorder:null, reorder:null}, _ComponentCreate:function() {
      this._super();
      this.element.addClass("oj-masonrylayout oj-component");
      this.options.disabled && $oj$$67$$.$Logger$.warn($_WARNING_DISABLED_OPTION$$);
      this.$reorderHandleEventNamespace$ = this.eventNamespace + "ReorderHandle";
      this.$_menu$ = {};
      this.$_menu$.$usermenu$ = !1;
      this.$_menu$.$$container$ = !1;
      this.$_menu$.$$elemCut$ = !1;
      this.$_menu$.$$elemPasteBefore$ = !1;
      this.$_menu$.$$elemPasteAfter$ = !1;
      this.$_initMenu$();
      this.$_applyMenu$();
      this.$_setup$(!0);
    }, refresh:function() {
      this._super();
      var $bRecreate$$ = "rtl" === this.$_GetReadingDirection$() !== this.$_bRTL$;
      $bRecreate$$ && this.$_destroyMLCommon$();
      this.$_setup$($bRecreate$$);
    }, $_NotifyShown$:function() {
      this._super();
      this.$_needsSetup$ && this.$_setup$(this.$_needsSetup$[0]);
    }, $_NotifyAttached$:function() {
      this._super();
      this.$_needsSetup$ && this.$_setup$(this.$_needsSetup$[0]);
    }, $_NotifyContextMenuGesture$:function($menu$$21$$, $event$$713$$, $eventType$$52$$) {
      this.$_prepareContextMenuBeforeOpen$($event$$713$$);
      this.$_OpenContextMenu$($event$$713$$, $eventType$$52$$, {launcher:$$$$62$$($event$$713$$.target).closest(":tabbable")});
    }, $_setup$:function($isInit$$) {
      if (this.$_canCalculateSizes$()) {
        this.$_needsSetup$ = null;
        this.$_bRTL$ = "rtl" === this.$_GetReadingDirection$();
        this.$_bTouchSupported$ = $oj$$67$$.$DomUtils$.$isTouchSupported$();
        var $elem$$114_oldIsInit$$ = this.element, $children$$15_options$$362$$ = this.options;
        if ($isInit$$) {
          var $self$$217$$ = this;
          this.$_showTileOnEndFunc$ = function $this$$_showTileOnEndFunc$$($elem$$115$$) {
            $self$$217$$.$_showTileOnEnd$($elem$$115$$);
          };
          this.$_hideTileOnEndFunc$ = function $this$$_hideTileOnEndFunc$$($elem$$116$$) {
            $self$$217$$.$_hideTileOnEnd$($elem$$116$$);
          };
          this.$_layoutOnEndFunc$ = function $this$$_layoutOnEndFunc$$() {
            $self$$217$$.$_layoutOnEnd$();
          };
          this.$_layoutCycleOnStartFunc$ = function $this$$_layoutCycleOnStartFunc$$() {
            $self$$217$$.$_layoutCycleOnStart$();
          };
          this.$_layoutCycleOnEndFunc$ = function $this$$_layoutCycleOnEndFunc$$() {
            $self$$217$$.$_layoutCycleOnEnd$();
          };
          if (!this.$_mlCommon$) {
            var $selectors$$9$$ = {};
            $selectors$$9$$.$tiles$ = $_TILE_SELECTOR$$;
            var $styles$$3$$ = {$transitionComponentResizeToStyleClass$:"oj-masonrylayout-transition-resize-to", $transitionComponentResizeToFastStyleClass$:"oj-masonrylayout-transition-resize-to-fast", $transitionMoveToStyleClass$:"oj-masonrylayout-tile-transition-move-to", $transitionMoveToFastStyleClass$:"oj-masonrylayout-tile-transition-move-to-fast", $transitionHideFromStyleClass$:"oj-masonrylayout-tile-transition-hide-from", $transitionHideToStyleClass$:"oj-masonrylayout-tile-transition-hide-to"};
            $styles$$3$$.$transitionShowFromStyleClass$ = $_OJ_MASONRYLAYOUT_TILE_TRANSITION_SHOW_FROM_CLASS$$;
            $styles$$3$$.$transitionShowToStyleClass$ = "oj-masonrylayout-tile-transition-show-to";
            $styles$$3$$.$transitionResizeToStyleClass$ = "oj-masonrylayout-tile-transition-resize-to";
            var $callbackInfo$$1$$ = {};
            $callbackInfo$$1$$.$addStyleClassName$ = $_addStyleClassName$$;
            $callbackInfo$$1$$.$removeStyleClassName$ = $_removeStyleClassName$$;
            $callbackInfo$$1$$.$getSizeStyleClassName$ = $_getSizeStyleClassName$$;
            $callbackInfo$$1$$.$getTileSpan$ = $_getTileSpan$$;
            $callbackInfo$$1$$.$showTileOnEndFunc$ = this.$_showTileOnEndFunc$;
            $callbackInfo$$1$$.$hideTileOnEndFunc$ = this.$_hideTileOnEndFunc$;
            $callbackInfo$$1$$.$layoutOnEndFunc$ = this.$_layoutOnEndFunc$;
            $callbackInfo$$1$$.$layoutCycleOnStartFunc$ = this.$_layoutCycleOnStartFunc$;
            $callbackInfo$$1$$.$layoutCycleOnEndFunc$ = this.$_layoutCycleOnEndFunc$;
            $callbackInfo$$1$$.$sortTilesOriginalOrderFunc$ = $_sortTilesOriginalOrder$$;
            $callbackInfo$$1$$.$subtreeAttached$ = $oj$$67$$.Components.$subtreeAttached$;
            $callbackInfo$$1$$.$subtreeDetached$ = $oj$$67$$.Components.$subtreeDetached$;
            this.$_saveTilesOriginalOrder$();
            this.$_mlCommon$ = new $MasonryLayoutCommon$$($elem$$114_oldIsInit$$[0], this.$_bRTL$, "enabled" === $oj$$67$$.$Config$.$getAutomationMode$(), $selectors$$9$$, $styles$$3$$, $callbackInfo$$1$$);
          }
          this.$_handleDragStartFunc$ = function $this$$_handleDragStartFunc$$($event$$714$$) {
            $self$$217$$.$_handleDragStart$($event$$714$$);
          };
          this.$_handleDragEnterFunc$ = function $this$$_handleDragEnterFunc$$($event$$715$$) {
            $self$$217$$.$_handleDragEnter$($event$$715$$);
          };
          this.$_handleDragOverFunc$ = function $this$$_handleDragOverFunc$$($event$$716$$) {
            $self$$217$$.$_handleDragOver$($event$$716$$);
          };
          this.$_handleDragLeaveFunc$ = function $this$$_handleDragLeaveFunc$$($event$$717$$) {
            $self$$217$$.$_handleDragLeave$($event$$717$$);
          };
          this.$_handleDragEndFunc$ = function $this$$_handleDragEndFunc$$($event$$718$$) {
            $self$$217$$.$_handleDragEnd$($event$$718$$);
          };
          this.$_handleDropFunc$ = function $this$$_handleDropFunc$$($event$$719$$) {
            $self$$217$$.$_handleDrop$($event$$719$$);
          };
          $children$$15_options$$362$$.reorderHandle && this.$_setupReorderHandles$();
        } else {
          $children$$15_options$$362$$ = $elem$$114_oldIsInit$$.children(), this.$_tearDownReorderHandlesForElem$($children$$15_options$$362$$), this.$_setupReorderHandlesForElem$($children$$15_options$$362$$), this.$_checkTilesOriginalOrder$();
        }
        this.$_mlCommon$.$setup$($isInit$$);
        $isInit$$ && (this.$_handleResizeFunc$ = function $this$$_handleResizeFunc$$() {
          $self$$217$$.$_handleResize$();
        }, $oj$$67$$.$DomUtils$.$addResizeListener$($elem$$114_oldIsInit$$[0], this.$_handleResizeFunc$));
      } else {
        $elem$$114_oldIsInit$$ = !1, this.$_needsSetup$ && ($elem$$114_oldIsInit$$ = this.$_needsSetup$[0]), this.$_needsSetup$ = [$isInit$$ || $elem$$114_oldIsInit$$];
      }
    }, _destroy:function() {
      this.$_clearMenu$();
      var $elem$$117$$ = this.element;
      $oj$$67$$.$DomUtils$.$removeResizeListener$($elem$$117$$[0], this.$_handleResizeFunc$);
      this.$_handleResizeFunc$ = null;
      this.$_restoreTilesOriginalOrder$();
      for (var $children$$16$$ = this.$_getTileElements$(), $numChildren$$ = $children$$16$$.length, $i$$480$$ = 0;$i$$480$$ < $numChildren$$;$i$$480$$++) {
        delete $children$$16$$[$i$$480$$].$_jetDataMasonryOriginalOrder$;
      }
      this.$_destroyMLCommon$();
      $elem$$117$$.removeClass("oj-masonrylayout oj-component");
      this.options.reorderHandle && this.$_tearDownReorderHandles$();
      this.$_arTilesToInsert$ = this.$_layoutCycleOnEndFunc$ = this.$_layoutCycleOnStartFunc$ = this.$_layoutOnEndFunc$ = this.$_hideTileOnEndFunc$ = this.$_showTileOnEndFunc$ = this.$_handleDropFunc$ = this.$_handleDragEndFunc$ = this.$_handleDragLeaveFunc$ = this.$_handleDragOverFunc$ = this.$_handleDragEnterFunc$ = this.$_handleDragStartFunc$ = null;
      this._super();
    }, _setOption:function($key$$201$$, $value$$295$$, $flags$$54$$) {
      var $bReorderHandle$$ = !1;
      switch($key$$201$$) {
        case "reorderHandle":
          this.$_tearDownReorderHandles$();
          $bReorderHandle$$ = !0;
          break;
        case "disabled":
          $oj$$67$$.$Logger$.warn($_WARNING_DISABLED_OPTION$$);
          break;
        case "contextMenu":
          $oj$$67$$.$DomUtils$.$isTouchSupported$() || (this.$_clearMenu$(), $value$$295$$ && this.$_initMenu$($value$$295$$));
      }
      this._super($key$$201$$, $value$$295$$, $flags$$54$$);
      $bReorderHandle$$ && $value$$295$$ && this.$_setupReorderHandles$();
    }, resizeTile:function($selector$$39$$, $sizeStyleClass$$) {
      var $mlCommon$$1$$ = this.$_mlCommon$;
      $mlCommon$$1$$.$isInLayoutCycle$() && $mlCommon$$1$$.$finishLayoutCycle$();
      var $jqElem$$1$$ = $$$$62$$($selector$$39$$), $elem$$119$$ = $jqElem$$1$$[0], $prevSizeStyleClass$$ = $_getSizeStyleClassName$$($elem$$119$$);
      if ($sizeStyleClass$$ == $prevSizeStyleClass$$) {
        throw Error("JET MasonryLayout: Unable to resize child " + $selector$$39$$ + " to style class " + $sizeStyleClass$$ + " because " + $sizeStyleClass$$ + " is already applied.");
      }
      !1 !== this._trigger("beforeResize", null, {tile:$jqElem$$1$$, previousSizeStyleClass:$prevSizeStyleClass$$, sizeStyleClass:$sizeStyleClass$$}) && (this.$_arResizingTiles$ || (this.$_arResizingTiles$ = []), this.$_arResizingTiles$.push($elem$$119$$, $prevSizeStyleClass$$, $sizeStyleClass$$), $mlCommon$$1$$.resizeTile($selector$$39$$, $sizeStyleClass$$));
    }, insertTile:function($selector$$40$$, $index$$313$$) {
      var $mlCommon$$2$$ = this.$_mlCommon$;
      $mlCommon$$2$$.$isInLayoutCycle$() && $mlCommon$$2$$.$finishLayoutCycle$();
      isNaN($index$$313$$) && ($index$$313$$ = -1);
      var $jqElem$$2_style$$10$$ = $$$$62$$($selector$$40$$), $elem$$120$$ = $jqElem$$2_style$$10$$[0];
      !1 !== this._trigger("beforeInsert", null, {tile:$jqElem$$2_style$$10$$, index:$index$$313$$}) && ($elem$$120$$.$_jetDataTileInsertIndex$ = $index$$313$$, $mlCommon$$2$$.$isAnimationEnabled$() && $jqElem$$2_style$$10$$.addClass($_OJ_MASONRYLAYOUT_TILE_TRANSITION_SHOW_FROM_CLASS$$), $jqElem$$2_style$$10$$ = $elem$$120$$.style, $jqElem$$2_style$$10$$.top = "-1px", this.$_bRTL$ ? $jqElem$$2_style$$10$$.right = "-1px" : $jqElem$$2_style$$10$$.left = "-1px", this.$_insertTileOriginalOrder$($elem$$120$$, 
      $index$$313$$), $mlCommon$$2$$.$insertTileDomElem$($elem$$120$$, $index$$313$$), $oj$$67$$.Components.$subtreeAttached$($elem$$120$$), this.$_arTilesToInsert$ || (this.$_arTilesToInsert$ = []), this.$_arTilesToInsert$.push($selector$$40$$));
    }, removeTile:function($selector$$41$$) {
      var $mlCommon$$3$$ = this.$_mlCommon$;
      $mlCommon$$3$$.$isInLayoutCycle$() && $mlCommon$$3$$.$finishLayoutCycle$();
      var $jqInfolet$$ = $$$$62$$($selector$$41$$), $index$$314_infolet$$ = $jqInfolet$$[0];
      if ($oj$$67$$.$FocusUtils$.$containsFocus$($index$$314_infolet$$)) {
        var $children$$17$$ = this.$_getTileElements$(!0), $index$$314_infolet$$ = $children$$17$$.indexOf($index$$314_infolet$$);
        0 < $index$$314_infolet$$ && (this.$_deletingTileWithFocusPrev$ = $children$$17$$[$index$$314_infolet$$ - 1]);
      }
      !1 !== this._trigger("beforeRemove", null, {tile:$jqInfolet$$}) && $mlCommon$$3$$.$hideTile$($selector$$41$$);
    }, $_handleResize$:function() {
      this.$_bDragging$ || this.$_inLayoutCycle$ || this.$_mlCommon$.$resizeNotify$();
    }, $_showTileOnEnd$:function($elem$$121$$) {
      var $jqElem$$3$$ = $$$$62$$($elem$$121$$), $index$$315$$ = $elem$$121$$.$_jetDataTileInsertIndex$;
      delete $elem$$121$$.$_jetDataTileInsertIndex$;
      this.options.reorderHandle && this.$_setupReorderHandlesForElem$($jqElem$$3$$);
      this._trigger("insert", null, {tile:$jqElem$$3$$, index:$index$$315$$});
    }, $_hideTileOnEnd$:function($elem$$122$$) {
      var $jqElem$$4$$ = $$$$62$$($elem$$122$$);
      this.options.reorderHandle && this.$_tearDownReorderHandlesForElem$($jqElem$$4$$);
      $oj$$67$$.Components.$subtreeDetached$($elem$$122$$);
      $elem$$122$$.parentNode.removeChild($elem$$122$$);
      this.$_removeTileOriginalOrder$($elem$$122$$);
      this._trigger("remove", null, {tile:$jqElem$$4$$});
    }, $_layoutOnEnd$:function() {
      if (this.$_arTilesToInsert$) {
        for (var $arResizingTiles$$1_mlCommon$$5$$ = this.$_mlCommon$, $arTilesToInsert$$1_eventData$$26_prevSizeStyleClass$$1$$ = this.$_arTilesToInsert$, $i$$481$$ = 0;$i$$481$$ < $arTilesToInsert$$1_eventData$$26_prevSizeStyleClass$$1$$.length;$i$$481$$++) {
          $arResizingTiles$$1_mlCommon$$5$$.$showTile$($arTilesToInsert$$1_eventData$$26_prevSizeStyleClass$$1$$[$i$$481$$]);
        }
        this.$_arTilesToInsert$ = null;
      }
      if (this.$_arResizingTiles$) {
        $arResizingTiles$$1_mlCommon$$5$$ = this.$_arResizingTiles$;
        for ($i$$481$$ = 0;$i$$481$$ < $arResizingTiles$$1_mlCommon$$5$$.length;$i$$481$$ += 3) {
          var $arTilesToInsert$$1_eventData$$26_prevSizeStyleClass$$1$$ = $arResizingTiles$$1_mlCommon$$5$$[$i$$481$$ + 1], $sizeStyleClass$$1$$ = $arResizingTiles$$1_mlCommon$$5$$[$i$$481$$ + 2], $arTilesToInsert$$1_eventData$$26_prevSizeStyleClass$$1$$ = {tile:$$$$62$$($arResizingTiles$$1_mlCommon$$5$$[$i$$481$$]), previousSizeStyleClass:$arTilesToInsert$$1_eventData$$26_prevSizeStyleClass$$1$$, sizeStyleClass:$sizeStyleClass$$1$$};
          this._trigger("resize", null, $arTilesToInsert$$1_eventData$$26_prevSizeStyleClass$$1$$);
        }
        this.$_arResizingTiles$ = null;
      }
      this.$_bDragging$ && (this.$_bDragMoveTransition$ ? this.$_handleDragMoveTransitionEnd$() : this.$_bDragEndTransition$ && this.$_handleDragEndTransitionEnd$());
    }, $_layoutCycleOnStart$:function() {
      this.$_inLayoutCycle$ = !0;
      this.$_layoutStartActiveDomElem$ = null;
      var $activeDomElem$$ = document.activeElement;
      $activeDomElem$$ && $oj$$67$$.$DomUtils$.$isAncestor$(this.element[0], $activeDomElem$$) && (this.$_layoutStartActiveDomElem$ = $activeDomElem$$);
    }, $_layoutCycleOnEnd$:function() {
      this.$_inLayoutCycle$ = !1;
      var $children$$18_elem$$124$$ = this.element[0];
      if (this.$_layoutStartActiveDomElem$) {
        var $layoutStartActiveDomElem_tile$$ = this.$_layoutStartActiveDomElem$;
        this.$_layoutStartActiveDomElem$ = null;
        if (this.$_deletingTileWithFocusPrev$) {
          if ($layoutStartActiveDomElem_tile$$ = this.$_deletingTileWithFocusPrev$, this.$_deletingTileWithFocusPrev$ = null, $layoutStartActiveDomElem_tile$$ && $oj$$67$$.$DomUtils$.$isAncestor$($children$$18_elem$$124$$, $layoutStartActiveDomElem_tile$$)) {
            var $children$$18_elem$$124$$ = this.$_getTileElements$($children$$18_elem$$124$$, !0), $index$$316$$ = $children$$18_elem$$124$$.indexOf($layoutStartActiveDomElem_tile$$);
            0 <= $index$$316$$ && $index$$316$$ < $children$$18_elem$$124$$.length - 1 ? $oj$$67$$.$FocusUtils$.$focusFirstTabStop$($children$$18_elem$$124$$[$index$$316$$ + 1]) : $oj$$67$$.$FocusUtils$.$focusFirstTabStop$($layoutStartActiveDomElem_tile$$);
          }
        } else {
          $oj$$67$$.$DomUtils$.$isAncestor$($children$$18_elem$$124$$, $layoutStartActiveDomElem_tile$$) ? $oj$$67$$.$FocusUtils$.$focusElement$($layoutStartActiveDomElem_tile$$) : $oj$$67$$.$FocusUtils$.$focusFirstTabStop$($children$$18_elem$$124$$);
        }
      }
    }, $_destroyMLCommon$:function() {
      var $mlCommon$$6$$ = this.$_mlCommon$;
      $mlCommon$$6$$ && $mlCommon$$6$$.destroy();
      this.$_mlCommon$ = null;
    }, $_canCalculateSizes$:function() {
      var $div$$14$$ = document.createElement("div"), $elem$$125_style$$11$$ = $div$$14$$.style;
      $elem$$125_style$$11$$.width = "10px";
      $elem$$125_style$$11$$.height = "10px";
      $elem$$125_style$$11$$ = this.element[0];
      $elem$$125_style$$11$$.appendChild($div$$14$$);
      var $bCanCalcSizes$$ = !1;
      try {
        $bCanCalcSizes$$ = 0 < $div$$14$$.offsetWidth && 0 < $div$$14$$.offsetHeight;
      } catch ($e$$133$$) {
      }
      $elem$$125_style$$11$$.removeChild($div$$14$$);
      return $bCanCalcSizes$$;
    }, $_getTileElements$:function($excludeDropSite$$) {
      for (var $children$$19$$ = this.element.children($_TILE_SELECTOR$$), $numChildren$$1$$ = $children$$19$$.length, $arChildren$$ = [], $i$$482$$ = 0;$i$$482$$ < $numChildren$$1$$;$i$$482$$++) {
        var $child$$15$$ = $children$$19$$[$i$$482$$];
        if (!$excludeDropSite$$ || $excludeDropSite$$ && $child$$15$$ !== this.$_dropSite$) {
          var $style$$12$$ = $child$$15$$.style;
          $style$$12$$.visibility !== $_HIDDEN$$ && $style$$12$$.display !== $_NONE$$ && $arChildren$$.push($child$$15$$);
        }
      }
      return $arChildren$$;
    }, $_saveTilesOriginalOrder$:function() {
      var $arTiles$$ = this.$_getTileElements$();
      if ($arTiles$$) {
        for (var $i$$483$$ = 0;$i$$483$$ < $arTiles$$.length;$i$$483$$++) {
          var $tile$$1$$ = $arTiles$$[$i$$483$$];
          $tile$$1$$.$_jetDataMasonryOriginalOrder$ || ($tile$$1$$.$_jetDataMasonryOriginalOrder$ = $i$$483$$ + 1);
        }
      }
    }, $_checkTilesOriginalOrder$:function() {
      var $arTiles$$1$$ = this.$_getTileElements$();
      if ($arTiles$$1$$) {
        for (var $i$$484$$ = 0;$i$$484$$ < $arTiles$$1$$.length;$i$$484$$++) {
          var $tile$$2$$ = $arTiles$$1$$[$i$$484$$];
          $tile$$2$$.$_jetDataMasonryOriginalOrder$ || this.$_insertTileOriginalOrder$($tile$$2$$, $i$$484$$);
        }
      }
    }, $_restoreTilesOriginalOrder$:function() {
      var $children$$20$$ = this.$_getTileElements$(), $sortedChildren$$ = this.$_getTileElements$();
      $_sortTilesOriginalOrder$$($sortedChildren$$);
      for (var $i$$485$$ = 0;$i$$485$$ < $children$$20$$.length;$i$$485$$++) {
        var $child$$16_sortedChildIndex$$ = $children$$20$$[$i$$485$$], $sortedChild$$ = $sortedChildren$$[$i$$485$$];
        $child$$16_sortedChildIndex$$ != $sortedChild$$ && ($oj$$67$$.Components.$subtreeDetached$($sortedChild$$), $child$$16_sortedChildIndex$$.parentNode.insertBefore($sortedChild$$, $child$$16_sortedChildIndex$$), $oj$$67$$.Components.$subtreeAttached$($sortedChild$$), $child$$16_sortedChildIndex$$ = $children$$20$$.indexOf($sortedChild$$), $child$$16_sortedChildIndex$$ > $i$$485$$ && ($children$$20$$.splice($child$$16_sortedChildIndex$$, 1), $children$$20$$.splice($i$$485$$, 0, $sortedChild$$)));
      }
    }, $_insertTileOriginalOrder$:function($insertedTile$$, $index$$317$$) {
      var $arTiles$$2$$ = this.$_getTileElements$();
      0 > $index$$317$$ && ($index$$317$$ = $arTiles$$2$$.length);
      if ($arTiles$$2$$) {
        for (var $i$$486$$ = 0;$i$$486$$ < $arTiles$$2$$.length;$i$$486$$++) {
          var $tile$$3$$ = $arTiles$$2$$[$i$$486$$];
          $tile$$3$$.$_jetDataMasonryOriginalOrder$ && $tile$$3$$.$_jetDataMasonryOriginalOrder$ >= $index$$317$$ + 1 && $tile$$3$$.$_jetDataMasonryOriginalOrder$++;
        }
      }
      $insertedTile$$.$_jetDataMasonryOriginalOrder$ = $index$$317$$ + 1;
    }, $_removeTileOriginalOrder$:function($removedTile$$) {
      if ($removedTile$$.$_jetDataMasonryOriginalOrder$) {
        var $arTiles$$3$$ = this.$_getTileElements$();
        if ($arTiles$$3$$) {
          for (var $i$$487$$ = 0;$i$$487$$ < $arTiles$$3$$.length;$i$$487$$++) {
            var $tile$$4$$ = $arTiles$$3$$[$i$$487$$];
            $tile$$4$$.$_jetDataMasonryOriginalOrder$ && $tile$$4$$.$_jetDataMasonryOriginalOrder$ > $removedTile$$.$_jetDataMasonryOriginalOrder$ && $tile$$4$$.$_jetDataMasonryOriginalOrder$--;
          }
        }
        delete $removedTile$$.$_jetDataMasonryOriginalOrder$;
      }
    }, $_initMenu$:function($newVal$$7$$) {
      var $$m$$2_menu$$22$$ = null, $dm$$1_t$$18$$ = null;
      $newVal$$7$$ || this.options.contextMenu || ($$m$$2_menu$$22$$ = this.element.attr("contextmenu")) && (this.options.contextMenu = "#" + $$m$$2_menu$$22$$);
      if ($newVal$$7$$ || this.options.contextMenu) {
        $$m$$2_menu$$22$$ = $newVal$$7$$ || this.options.contextMenu;
        $dm$$1_t$$18$$ = $$$$62$$.type($$m$$2_menu$$22$$);
        if ("function" == $dm$$1_t$$18$$) {
          try {
            $$m$$2_menu$$22$$ = $$m$$2_menu$$22$$();
          } catch ($e$$134$$) {
            $$m$$2_menu$$22$$ = null;
          }
          $$$$62$$.type($$m$$2_menu$$22$$);
        }
        if ($$m$$2_menu$$22$$) {
          if ($$m$$2_menu$$22$$ = $$$$62$$($$m$$2_menu$$22$$)) {
            $$m$$2_menu$$22$$.css("display", $_NONE$$);
            $dm$$1_t$$18$$ = this.$_menu$;
            if (!$dm$$1_t$$18$$) {
              return;
            }
            $dm$$1_t$$18$$.$$container$ = $$m$$2_menu$$22$$;
            $dm$$1_t$$18$$.$usermenu$ = !0;
          }
          this.$_menu$.$usermenu$ && $newVal$$7$$ && this.$_applyMenu$();
        }
      }
    }, $_applyMenu$:function() {
      if (this.$_menu$ && this.$_menu$.$usermenu$ && this.options.reorderHandle) {
        var $$menuContainer$$2$$ = this.$_menu$.$$container$, $self$$218$$ = this;
        $$menuContainer$$2$$.on("ojselect", $$$$62$$.proxy(this.$_handleContextMenuSelect$, this));
        var $bChanged$$1$$ = !1;
        $$menuContainer$$2$$.find("[data-oj-command]").each(function() {
          if (0 === $$$$62$$(this).children("a").length) {
            var $command$$19$$ = $$$$62$$(this).attr("data-oj-command").slice(17);
            $$$$62$$(this).replaceWith($self$$218$$.$_buildContextMenuItem$($command$$19$$));
            $$$$62$$(this).addClass("oj-menu-item");
            $bChanged$$1$$ = !0;
          }
        });
        $bChanged$$1$$ && $$menuContainer$$2$$.ojMenu("refresh");
        this.$_menu$.$$elemCut$ = $$menuContainer$$2$$.find("#" + $_OJMASONRYLAYOUTCUT$$);
        this.$_menu$.$$elemPasteBefore$ = $$menuContainer$$2$$.find("#" + $_OJMASONRYLAYOUTPASTEBEFORE$$);
        this.$_menu$.$$elemPasteAfter$ = $$menuContainer$$2$$.find("#" + $_OJMASONRYLAYOUTPASTEAFTER$$);
      }
    }, $_clearMenu$:function() {
      var $menu$$23$$ = this.$_menu$;
      $menu$$23$$ && $menu$$23$$.$usermenu$ && ($menu$$23$$.$usermenu$ = !1, $menu$$23$$.$$container$.off("ojselect"), $menu$$23$$.$$container$ = null);
    }, $_prepareContextMenuBeforeOpen$:function($e$$135_tile$$5$$) {
      $e$$135_tile$$5$$ = $_findContainingTile$$($e$$135_tile$$5$$.originalEvent.target, this.element[0]);
      this.$_menu$.tile = $e$$135_tile$$5$$;
      if (this.$_menu$.$usermenu$) {
        var $cutTile$$ = this.$_menu$.$cutTile$, $bRefreshMenu$$ = !1, $elemCut_elemPasteAfter_elemPasteBefore$$ = this.$_menu$.$$elemCut$;
        if ($elemCut_elemPasteAfter_elemPasteBefore$$) {
          var $cutDisabled_pasteAfterDisabled_pasteBeforeDisabled$$ = $elemCut_elemPasteAfter_elemPasteBefore$$.hasClass($_OJ_DISABLED$$), $bDisable$$ = !1;
          $cutTile$$ && $e$$135_tile$$5$$ === $cutTile$$ && ($bDisable$$ = !0);
          $bDisable$$ && !$cutDisabled_pasteAfterDisabled_pasteBeforeDisabled$$ ? ($elemCut_elemPasteAfter_elemPasteBefore$$.addClass($_OJ_DISABLED$$), $bRefreshMenu$$ = !0) : !$bDisable$$ && $cutDisabled_pasteAfterDisabled_pasteBeforeDisabled$$ && ($elemCut_elemPasteAfter_elemPasteBefore$$.removeClass($_OJ_DISABLED$$), $bRefreshMenu$$ = !0);
        }
        if ($elemCut_elemPasteAfter_elemPasteBefore$$ = this.$_menu$.$$elemPasteBefore$) {
          $cutDisabled_pasteAfterDisabled_pasteBeforeDisabled$$ = $elemCut_elemPasteAfter_elemPasteBefore$$.hasClass($_OJ_DISABLED$$), $bDisable$$ = !1, $cutTile$$ && $e$$135_tile$$5$$ !== $cutTile$$ && $e$$135_tile$$5$$ !== $_getNextElement$$($cutTile$$) || ($bDisable$$ = !0), $bDisable$$ && !$cutDisabled_pasteAfterDisabled_pasteBeforeDisabled$$ ? ($elemCut_elemPasteAfter_elemPasteBefore$$.addClass($_OJ_DISABLED$$), $bRefreshMenu$$ = !0) : !$bDisable$$ && $cutDisabled_pasteAfterDisabled_pasteBeforeDisabled$$ && 
          ($elemCut_elemPasteAfter_elemPasteBefore$$.removeClass($_OJ_DISABLED$$), $bRefreshMenu$$ = !0);
        }
        if ($elemCut_elemPasteAfter_elemPasteBefore$$ = this.$_menu$.$$elemPasteAfter$) {
          $cutDisabled_pasteAfterDisabled_pasteBeforeDisabled$$ = $elemCut_elemPasteAfter_elemPasteBefore$$.hasClass($_OJ_DISABLED$$), $bDisable$$ = !1, $cutTile$$ && $cutTile$$ !== $e$$135_tile$$5$$ && $cutTile$$ !== $_getNextElement$$($e$$135_tile$$5$$) || ($bDisable$$ = !0), $bDisable$$ && !$cutDisabled_pasteAfterDisabled_pasteBeforeDisabled$$ ? ($elemCut_elemPasteAfter_elemPasteBefore$$.addClass($_OJ_DISABLED$$), $bRefreshMenu$$ = !0) : !$bDisable$$ && $cutDisabled_pasteAfterDisabled_pasteBeforeDisabled$$ && 
          ($elemCut_elemPasteAfter_elemPasteBefore$$.removeClass($_OJ_DISABLED$$), $bRefreshMenu$$ = !0);
        }
        $bRefreshMenu$$ && this.$_menu$.$$container$.ojMenu("refresh");
      }
    }, $_buildContextMenuItem$:function($cmd$$5_transKey$$) {
      var $id$$66$$ = $_MENU_CMD_MAP$$[$cmd$$5_transKey$$];
      $cmd$$5_transKey$$ = $_MENU_TRANSLATION_MAP$$[$cmd$$5_transKey$$];
      var $label$$20$$ = $$$$62$$('\x3ca href\x3d"#"\x3e\x3c/a\x3e');
      $label$$20$$.text(this.$getTranslatedString$($cmd$$5_transKey$$));
      $label$$20$$.wrap("\x3cli id\x3d" + $id$$66$$ + "\x3e\x3c/li\x3e");
      return $label$$20$$.parent();
    }, $_menuCut$:function($obj$$120$$) {
      $obj$$120$$ && (this.$_menu$.$cutTile$ = $obj$$120$$);
    }, $_menuPaste$:function($obj$$121$$, $pasteBefore$$2$$) {
      if ($obj$$121$$ && this.$_menu$.$cutTile$) {
        var $cutTile$$1$$ = this.$_menu$.$cutTile$;
        this.$_menu$.$cutTile$ = !1;
        this.$_doPaste$($cutTile$$1$$, $obj$$121$$, $pasteBefore$$2$$);
      }
    }, $_doPaste$:function($cutTile$$2$$, $nextElem_pasteTile$$, $pasteBefore$$3$$) {
      var $fromIndex$$3$$ = $cutTile$$2$$.$_jetDataMasonryOriginalOrder$ - 1, $jqCutTile$$ = $$$$62$$($cutTile$$2$$);
      if (!1 !== this._trigger("beforeReorder", null, {tile:$jqCutTile$$, fromIndex:$fromIndex$$3$$})) {
        this.$_removeTileOriginalOrder$($cutTile$$2$$);
        var $toIndex$$ = $nextElem_pasteTile$$.$_jetDataMasonryOriginalOrder$ - 1;
        $pasteBefore$$3$$ || $toIndex$$++;
        var $elem$$128$$ = this.element[0];
        $pasteBefore$$3$$ || ($nextElem_pasteTile$$ = $_getNextElement$$($nextElem_pasteTile$$));
        this.$_insertTileOriginalOrder$($cutTile$$2$$, $toIndex$$);
        $elem$$128$$.insertBefore($cutTile$$2$$, $nextElem_pasteTile$$);
        this.$_mlCommon$.$setup$(!0);
        this._trigger("reorder", null, {tile:$jqCutTile$$, fromIndex:$fromIndex$$3$$, toIndex:$toIndex$$});
      }
    }, $_handleContextMenuSelect$:function($ev$$8$$, $ui$$52$$) {
      var $id$$67$$ = $ui$$52$$ ? $ui$$52$$.item.attr("id") : void 0;
      $id$$67$$ === $_OJMASONRYLAYOUTCUT$$ ? this.$_menuCut$(this.$_menu$.tile) : $id$$67$$ === $_OJMASONRYLAYOUTPASTEBEFORE$$ ? this.$_menuPaste$(this.$_menu$.tile, !0) : $id$$67$$ === $_OJMASONRYLAYOUTPASTEAFTER$$ && this.$_menuPaste$(this.$_menu$.tile, !1);
    }, $_getTileIndex$:function($tile$$6$$) {
      var $children$$21$$ = this.$_getTileElements$(!0);
      $_sortTilesOriginalOrder$$($children$$21$$);
      for (var $numChildren$$2$$ = $children$$21$$.length, $i$$488$$ = 0;$i$$488$$ < $numChildren$$2$$;$i$$488$$++) {
        if ($children$$21$$[$i$$488$$] === $tile$$6$$) {
          return $i$$488$$;
        }
      }
      return-1;
    }, $_setupReorderHandles$:function() {
      var $elem$$129$$ = this.element, $children$$22$$ = $elem$$129$$.children();
      this.$_setupReorderHandlesForElem$($children$$22$$);
      $elem$$129$$.on("dragstart" + this.$reorderHandleEventNamespace$, this.$_handleDragStartFunc$).on("dragenter" + this.$reorderHandleEventNamespace$, this.$_handleDragEnterFunc$).on("dragover" + this.$reorderHandleEventNamespace$, this.$_handleDragOverFunc$).on("dragleave" + this.$reorderHandleEventNamespace$, this.$_handleDragLeaveFunc$).on("dragend" + this.$reorderHandleEventNamespace$, this.$_handleDragEndFunc$).on("drop" + this.$reorderHandleEventNamespace$, this.$_handleDropFunc$);
    }, $_setupReorderHandlesForElem$:function($jqElem$$5$$) {
      var $options$$367$$ = this.options;
      $jqElem$$5$$.filter($options$$367$$.reorderHandle).attr($_DRAGGABLE$$, "true").addClass($_OJ_DRAGGABLE$$);
      $jqElem$$5$$.find($options$$367$$.reorderHandle).attr($_DRAGGABLE$$, "true").addClass($_OJ_DRAGGABLE$$);
    }, $_tearDownReorderHandles$:function() {
      var $elem$$130$$ = this.element, $children$$23$$ = $elem$$130$$.children();
      this.$_tearDownReorderHandlesForElem$($children$$23$$);
      $elem$$130$$.off(this.$reorderHandleEventNamespace$);
    }, $_tearDownReorderHandlesForElem$:function($jqElem$$6$$) {
      var $options$$368$$ = this.options;
      $jqElem$$6$$.filter($options$$368$$.reorderHandle).removeAttr($_DRAGGABLE$$).removeClass($_OJ_DRAGGABLE$$);
      $jqElem$$6$$.find($options$$368$$.reorderHandle).removeAttr($_DRAGGABLE$$).removeClass($_OJ_DRAGGABLE$$);
    }, $_handleDragStart$:function($event$$720_originalEvent$$6$$) {
      if (this.options.reorderHandle && !this.$_bDragging$) {
        var $tile$$7$$ = $_findContainingTile$$($event$$720_originalEvent$$6$$.target, this.element[0]);
        if ($tile$$7$$) {
          var $eventData$$28_index$$318$$ = this.$_getTileIndex$($tile$$7$$);
          $tile$$7$$.$_jetDataMasonryDragSourceIndex$ = $eventData$$28_index$$318$$;
          $eventData$$28_index$$318$$ = {tile:$$$$62$$($tile$$7$$), fromIndex:$eventData$$28_index$$318$$};
          !1 !== this._trigger("beforeReorder", null, $eventData$$28_index$$318$$) && ($event$$720_originalEvent$$6$$ = $event$$720_originalEvent$$6$$.originalEvent, this.$_dragStart$($tile$$7$$, $event$$720_originalEvent$$6$$.pageX, $event$$720_originalEvent$$6$$.pageY, $event$$720_originalEvent$$6$$.dataTransfer));
        }
      }
    }, $_handleDragEnter$:function($event$$721_originalEvent$$7$$) {
      $event$$721_originalEvent$$7$$ = $event$$721_originalEvent$$7$$.originalEvent;
      var $elemUnderPoint_relatedTarget$$1$$ = $event$$721_originalEvent$$7$$.relatedTarget, $elem$$132$$ = this.element[0], $enteringMasonryLayout$$ = !1;
      $elemUnderPoint_relatedTarget$$1$$ ? $enteringMasonryLayout$$ = $elem$$132$$ != $elemUnderPoint_relatedTarget$$1$$ && !$oj$$67$$.$DomUtils$.$isAncestor$($elem$$132$$, $elemUnderPoint_relatedTarget$$1$$) : this.$_dragLeftMasonryLayout$ && ($enteringMasonryLayout$$ = ($elemUnderPoint_relatedTarget$$1$$ = document.elementFromPoint($event$$721_originalEvent$$7$$.clientX, $event$$721_originalEvent$$7$$.clientY)) && ($elemUnderPoint_relatedTarget$$1$$ == $elem$$132$$ || $oj$$67$$.$DomUtils$.$isAncestor$($elem$$132$$, 
      $elemUnderPoint_relatedTarget$$1$$)));
      $enteringMasonryLayout$$ && ((this.$_dragLeftMasonryLayout$ = !1, this.$_draggedTile$) ? this.$_dropSite$ && ($$$$62$$(this.$_dropSite$).css("display", ""), this.$_mlCommon$.$setup$(!1, !0)) : $event$$721_originalEvent$$7$$.dataTransfer.dropEffect = "none");
    }, $_handleDragOver$:function($event$$722$$) {
      var $originalEvent$$8$$ = $event$$722$$.originalEvent;
      $originalEvent$$8$$.dataTransfer.dropEffect = "move";
      this.$_dragMove$($originalEvent$$8$$.pageX, $originalEvent$$8$$.clientX, $originalEvent$$8$$.clientY);
      $event$$722$$.preventDefault();
      return!1;
    }, $_handleDragLeave$:function($elem$$133_event$$723$$) {
      var $elemUnderPoint$$1_originalEvent$$9$$ = $elem$$133_event$$723$$.originalEvent, $relatedTarget$$2$$ = $elemUnderPoint$$1_originalEvent$$9$$.relatedTarget;
      $elem$$133_event$$723$$ = this.element[0];
      var $leavingMasonryLayout$$ = !1;
      $leavingMasonryLayout$$ = $relatedTarget$$2$$ ? $elem$$133_event$$723$$ != $relatedTarget$$2$$ && !$oj$$67$$.$DomUtils$.$isAncestor$($elem$$133_event$$723$$, $relatedTarget$$2$$) : ($elemUnderPoint$$1_originalEvent$$9$$ = document.elementFromPoint($elemUnderPoint$$1_originalEvent$$9$$.clientX, $elemUnderPoint$$1_originalEvent$$9$$.clientY)) && $elemUnderPoint$$1_originalEvent$$9$$ != $elem$$133_event$$723$$ && !$oj$$67$$.$DomUtils$.$isAncestor$($elem$$133_event$$723$$, $elemUnderPoint$$1_originalEvent$$9$$);
      $leavingMasonryLayout$$ && (this.$_dragLeftMasonryLayout$ = !0, this.$_dropSite$ && ($$$$62$$(this.$_dropSite$).css("display", $_NONE$$), this.$_mlCommon$.$setup$(!1, !0)));
    }, $_clearDragStartHideTileTimeout$:function() {
      if (this.$_dragStartHideTileTimeout$) {
        clearTimeout(this.$_dragStartHideTileTimeout$);
        this.$_dragStartHideTileTimeout$ = null;
        var $draggedTile$$ = this.$_draggedTile$;
        $draggedTile$$ && $$$$62$$($draggedTile$$).removeClass("oj-drag");
      }
    }, $_handleDragEnd$:function() {
      this.$_clearDragStartHideTileTimeout$();
      if (!this.$_bDropping$) {
        var $draggedTile$$1$$ = this.$_draggedTile$;
        if ($draggedTile$$1$$ && this.$_dropSite$) {
          var $dropSite$$ = this.$_dropSite$;
          $oj$$67$$.$DomUtils$.$isAncestor$(this.element[0], $draggedTile$$1$$) && ($$$$62$$($dropSite$$).css("display", ""), this.$_removeTileOriginalOrder$($dropSite$$), $dropSite$$.parentNode.removeChild($dropSite$$), $$$$62$$($draggedTile$$1$$).css("display", ""), this.$_insertTileOriginalOrder$($draggedTile$$1$$, $draggedTile$$1$$.$_jetDataMasonryOriginalOrder$ - 1), this.$_mlCommon$.$setup$(!1, !0));
          delete $draggedTile$$1$$.$_jetDataMasonryDragSourceIndex$;
        }
        this.$_dropSite$ = this.$_draggedTile$ = null;
        this.$_bMouseMoved$ = this.$_bDragMoveTransition$ = !1;
        this.$_dragOffset$ = null;
        this.$_bDragging$ = this.$_bDragEndTransition$ = !1;
      }
    }, $_handleDrop$:function($event$$725$$) {
      var $mlCommon$$11_originalEvent$$10$$ = this.$_mlCommon$;
      $mlCommon$$11_originalEvent$$10$$.$isInLayoutCycle$() && $mlCommon$$11_originalEvent$$10$$.$finishLayoutCycle$();
      this.$_clearDragStartHideTileTimeout$();
      $mlCommon$$11_originalEvent$$10$$ = $event$$725$$.originalEvent;
      this.$_drop$(this.$_draggedTile$, $mlCommon$$11_originalEvent$$10$$.pageX, $mlCommon$$11_originalEvent$$10$$.pageY);
      $event$$725$$.stopPropagation();
      return!1;
    }, $_dragStart$:function($tile$$8$$, $dragOffset_pageX$$1$$, $pageY$$1$$, $dataTransfer$$5$$) {
      this.$_bDragging$ = !0;
      this.$_bDragStartTileHidden$ = this.$_bMouseMoved$ = this.$_bDropping$ = !1;
      this.$_draggedTile$ = $tile$$8$$;
      var $elem$$135$$ = this.element[0], $offset$$26_sizeClass_style$$13$$ = $_getSizeStyleClassName$$($tile$$8$$), $dropSite$$1$$ = this.$_dropSite$ = document.createElement("div");
      $dropSite$$1$$.$_jetDataMasonryOriginalOrder$ = $tile$$8$$.$_jetDataMasonryOriginalOrder$;
      $dropSite$$1$$.className = $offset$$26_sizeClass_style$$13$$ + " oj-drop";
      var $offset$$26_sizeClass_style$$13$$ = $dropSite$$1$$.style, $tileStyle$$ = $tile$$8$$.style;
      $offset$$26_sizeClass_style$$13$$.top = $tileStyle$$.top;
      this.$_bRTL$ ? $offset$$26_sizeClass_style$$13$$.right = $tileStyle$$.right : $offset$$26_sizeClass_style$$13$$.left = $tileStyle$$.left;
      $offset$$26_sizeClass_style$$13$$ = $$$$62$$($tile$$8$$).offset();
      $elem$$135$$.insertBefore($dropSite$$1$$, $tile$$8$$);
      this.$_dragOffset$ = $dragOffset_pageX$$1$$ = {left:$dragOffset_pageX$$1$$ - $offset$$26_sizeClass_style$$13$$.left, top:$pageY$$1$$ - $offset$$26_sizeClass_style$$13$$.top};
      $$$$62$$($tile$$8$$).addClass("oj-drag");
      $dataTransfer$$5$$.effectAllowed = "move";
      $dataTransfer$$5$$.setData("text/html", $tile$$8$$.outerHTML);
      $dataTransfer$$5$$.setDragImage($tile$$8$$, $dragOffset_pageX$$1$$.left, $dragOffset_pageX$$1$$.top);
      var $self$$219$$ = this;
      this.$_dragStartHideTileTimeout$ = setTimeout(function() {
        $self$$219$$.$_bDragStartTileHidden$ = !0;
        $tileStyle$$.display = $_NONE$$;
        $$$$62$$($tile$$8$$).removeClass("oj-drag");
        $self$$219$$.$_dragStartHideTileTimeout$ = null;
        $oj$$67$$.Components.$subtreeHidden$($tile$$8$$);
      }, 0);
    }, $_dragMove$:function($bRightSide_nextElem$$1_pageX$$2$$, $clientX$$2_elemUnderPoint$$2_tileUnderPoint$$, $clientY$$2_oldNextSibling$$) {
      this.$_bMouseMoved$ = !0;
      if (this.$_bDragStartTileHidden$ && !this.$_bDragMoveTransition$) {
        var $elem$$136$$ = this.element[0];
        $clientX$$2_elemUnderPoint$$2_tileUnderPoint$$ = document.elementFromPoint($clientX$$2_elemUnderPoint$$2_tileUnderPoint$$, $clientY$$2_oldNextSibling$$);
        if (($clientX$$2_elemUnderPoint$$2_tileUnderPoint$$ = $_findContainingTile$$($clientX$$2_elemUnderPoint$$2_tileUnderPoint$$, $elem$$136$$)) && $clientX$$2_elemUnderPoint$$2_tileUnderPoint$$ !== this.$_dropSite$ && $clientX$$2_elemUnderPoint$$2_tileUnderPoint$$ !== this.$_draggedTile$) {
          var $offset$$27$$ = $$$$62$$($elem$$136$$).offset();
          $clientY$$2_oldNextSibling$$ = $_getNextElement$$(this.$_dropSite$);
          $bRightSide_nextElem$$1_pageX$$2$$ = $bRightSide_nextElem$$1_pageX$$2$$ - $offset$$27$$.left >= $clientX$$2_elemUnderPoint$$2_tileUnderPoint$$.offsetLeft + .5 * $clientX$$2_elemUnderPoint$$2_tileUnderPoint$$.offsetWidth;
          this.$_removeTileOriginalOrder$(this.$_dropSite$);
          $bRightSide_nextElem$$1_pageX$$2$$ && !this.$_bRTL$ || !$bRightSide_nextElem$$1_pageX$$2$$ && this.$_bRTL$ ? ($bRightSide_nextElem$$1_pageX$$2$$ = $_getNextElement$$($clientX$$2_elemUnderPoint$$2_tileUnderPoint$$)) ? (this.$_insertTileOriginalOrder$(this.$_dropSite$, $bRightSide_nextElem$$1_pageX$$2$$.$_jetDataMasonryOriginalOrder$ - 1), $elem$$136$$.insertBefore(this.$_dropSite$, $bRightSide_nextElem$$1_pageX$$2$$)) : (this.$_insertTileOriginalOrder$(this.$_dropSite$, $clientX$$2_elemUnderPoint$$2_tileUnderPoint$$.$_jetDataMasonryOriginalOrder$), 
          $elem$$136$$.appendChild(this.$_dropSite$)) : (this.$_insertTileOriginalOrder$(this.$_dropSite$, $clientX$$2_elemUnderPoint$$2_tileUnderPoint$$.$_jetDataMasonryOriginalOrder$ - 1), $elem$$136$$.insertBefore(this.$_dropSite$, $clientX$$2_elemUnderPoint$$2_tileUnderPoint$$));
          $clientY$$2_oldNextSibling$$ !== $_getNextElement$$(this.$_dropSite$) && (this.$_bDragMoveTransition$ = this.$_mlCommon$.$setup$(!1, !0));
        }
      }
    }, $_handleDragMoveTransitionEnd$:function() {
      this.$_bDragMoveTransition$ = !1;
    }, $_drop$:function($tile$$9$$, $newLeft$$1_pageX$$3$$, $pageY$$2$$) {
      this.$_bDropping$ = !0;
      var $elem$$137$$ = this.element[0], $dropSite$$2_style$$14$$ = this.$_dropSite$;
      this.$_dropSite$ = null;
      $oj$$67$$.Components.$subtreeDetached$($tile$$9$$);
      $elem$$137$$.replaceChild($tile$$9$$, $dropSite$$2_style$$14$$);
      $oj$$67$$.Components.$subtreeAttached$($tile$$9$$);
      $tile$$9$$.$_jetDataMasonryOriginalOrder$ = $dropSite$$2_style$$14$$.$_jetDataMasonryOriginalOrder$;
      $dropSite$$2_style$$14$$ = $tile$$9$$.style;
      $dropSite$$2_style$$14$$.display = "";
      $oj$$67$$.Components.$subtreeShown$($tile$$9$$);
      var $offset$$28$$ = $$$$62$$($elem$$137$$).offset(), $dragOffset$$1$$ = this.$_dragOffset$;
      $dropSite$$2_style$$14$$.top = $pageY$$2$$ - $dragOffset$$1$$.top - $offset$$28$$.top + $_PX$$;
      $newLeft$$1_pageX$$3$$ = $newLeft$$1_pageX$$3$$ - $dragOffset$$1$$.left - $offset$$28$$.left;
      this.$_bRTL$ ? ($dropSite$$2_style$$14$$.right = $elem$$137$$.offsetWidth - ($newLeft$$1_pageX$$3$$ + $$$$62$$($tile$$9$$).outerWidth(!0)) + $_PX$$, $dropSite$$2_style$$14$$.left = "") : $dropSite$$2_style$$14$$.left = $newLeft$$1_pageX$$3$$ + $_PX$$;
      this.$_dragOffset$ = null;
      this.$_bMouseMoved$ ? this.$_bDragEndTransition$ = this.$_mlCommon$.$setup$(!1, !0) : this.$_handleDragEndTransitionEnd$();
    }, $_handleDragEndTransitionEnd$:function() {
      this.$_bDragStartTileHidden$ = this.$_bMouseMoved$ = this.$_bDropping$ = this.$_bDragging$ = this.$_bDragEndTransition$ = !1;
      var $eventData$$29_tile$$10$$ = this.$_draggedTile$;
      this.$_draggedTile$ = null;
      var $fromIndex$$4$$ = $eventData$$29_tile$$10$$.$_jetDataMasonryDragSourceIndex$;
      delete $eventData$$29_tile$$10$$.$_jetDataMasonryDragSourceIndex$;
      var $toIndex$$1$$ = this.$_getTileIndex$($eventData$$29_tile$$10$$), $eventData$$29_tile$$10$$ = {tile:$$$$62$$($eventData$$29_tile$$10$$), fromIndex:$fromIndex$$4$$, toIndex:$toIndex$$1$$};
      this._trigger("reorder", null, $eventData$$29_tile$$10$$);
    }, getNodeBySubId:function($locator$$63$$) {
      return this._super($locator$$63$$);
    }, getSubIdByNode:function($node$$166$$) {
      return this._super($node$$166$$);
    }});
    var $_PX$$ = "px", $_HIDDEN$$ = "hidden", $_NONE$$ = "none", $_DRAGGABLE$$ = "draggable", $_OJ_DISABLED$$ = "oj-disabled", $_OJ_DRAGGABLE$$ = "oj-draggable", $_TILE_SELECTOR$$ = ".oj-masonrylayout-tile-1x1, .oj-masonrylayout-tile-1x2, .oj-masonrylayout-tile-1x3, .oj-masonrylayout-tile-2x1, .oj-masonrylayout-tile-2x2, .oj-masonrylayout-tile-2x3, .oj-masonrylayout-tile-3x1, .oj-masonrylayout-tile-3x2", $_OJ_MASONRYLAYOUT_TILE_TRANSITION_SHOW_FROM_CLASS$$ = "oj-masonrylayout-tile-transition-show-from", 
    $_WARNING_DISABLED_OPTION$$ = "JET MasonryLayout: 'disabled' option not supported", $_OJMASONRYLAYOUTCUT$$ = "ojmasonrylayoutcut", $_OJMASONRYLAYOUTPASTEBEFORE$$ = "ojmasonrylayoutpastebefore", $_OJMASONRYLAYOUTPASTEAFTER$$ = "ojmasonrylayoutpasteafter", $_MENU_CMD_MAP$$ = {cut:$_OJMASONRYLAYOUTCUT$$, "paste-before":$_OJMASONRYLAYOUTPASTEBEFORE$$, "paste-after":$_OJMASONRYLAYOUTPASTEAFTER$$}, $_MENU_TRANSLATION_MAP$$ = {cut:"labelCut", "paste-before":"labelPasteBefore", "paste-after":"labelPasteAfter"};
  })();
  $MasonryLayoutCommon$$.prototype.$setup$ = function $$MasonryLayoutCommon$$$$$setup$$($init$$, $reorder$$1$$) {
    var $ret$$79$$ = !1;
    $init$$ ? ($ret$$79$$ = this.$_layout$() ? !0 : !1, this.$_reorderTilesForLayout$()) : (this.$_layoutCycleOnStartFunc$ && this.$_layoutCycleOnStartFunc$(), this.$_transitionStart$($reorder$$1$$), $ret$$79$$ = this.$_transitionLayout$());
    return $ret$$79$$;
  };
  $MasonryLayoutCommon$$.prototype.destroy = function $$MasonryLayoutCommon$$$$destroy$() {
    for (var $elem$$145$$ = this.$_elem$, $children$$24$$ = this.$_getTileChildren$(), $i$$489$$ = 0;$i$$489$$ < $children$$24$$.length;$i$$489$$++) {
      var $style$$17$$ = $children$$24$$[$i$$489$$].style;
      this.$_rtl$ ? $style$$17$$.right = "" : $style$$17$$.left = "";
      $style$$17$$.top = "";
    }
    $elem$$145$$.removeChild(this.$_sizeDivWrapper$);
    this.$_subtreeDetachedFunc$ = this.$_subtreeAttachedFunc$ = this.$_sortTilesOriginalOrderFunc$ = this.$_layoutCycleOnEndFunc$ = this.$_layoutCycleOnStartFunc$ = this.$_layoutOnEndFunc$ = this.$_hideTileOnEndFunc$ = this.$_showTileOnEndFunc$ = this.$_getTileSpanFunc$ = this.$_getSizeStyleClassNameFunc$ = this.$_removeStyleClassNameFunc$ = this.$_addStyleClassNameFunc$ = this.$_elem$ = this.$_arFireHideOnEnd$ = this.$_arInfoletsToHide$ = this.$_arInfoletsToShow$ = this.$_arInfoletsToResize$ = this.$_arMovedInfolets$ = 
    this.$_handleShowTransitionEndFunc$ = this.$_handleHideTransitionEndFunc$ = this.$_hideTilesFunc$ = this.$_handleTransitionEndFunc$ = this.$_sizeDiv$ = this.$_sizeDivWrapper$ = null;
  };
  $MasonryLayoutCommon$$.prototype.resizeTile = function $$MasonryLayoutCommon$$$$resizeTile$($selector$$43$$, $sizeStyleClass$$2$$) {
    var $infolet$$1$$ = this.$_elem$.querySelector($selector$$43$$);
    if ($infolet$$1$$) {
      this.$_arInfoletsToResize$ || (this.$_arInfoletsToResize$ = []);
      var $arInfoletsToResize$$ = this.$_arInfoletsToResize$;
      $arInfoletsToResize$$.push($infolet$$1$$);
      $arInfoletsToResize$$.push($sizeStyleClass$$2$$);
      this.$_resizingInfolet$ = !0;
      this.$_queueRelayout$();
    }
  };
  $MasonryLayoutCommon$$.prototype.$insertTileDomElem$ = function $$MasonryLayoutCommon$$$$$insertTileDomElem$$($tileDomElem$$, $index$$319$$) {
    var $arChildren$$1$$ = this.$_getTileChildren$();
    this.$_sortTilesOriginalOrderFunc$ && this.$_sortTilesOriginalOrderFunc$($arChildren$$1$$);
    var $currChildAtIndex$$ = null;
    0 <= $index$$319$$ && $index$$319$$ < $arChildren$$1$$.length && ($currChildAtIndex$$ = $arChildren$$1$$[$index$$319$$]);
    this.$_elem$.insertBefore($tileDomElem$$, $currChildAtIndex$$);
    this.$_queueRelayout$();
  };
  $MasonryLayoutCommon$$.prototype.$showTile$ = function $$MasonryLayoutCommon$$$$$showTile$$($infolet$$2_selector$$44$$) {
    if ($infolet$$2_selector$$44$$ = this.$_elem$.querySelector($infolet$$2_selector$$44$$)) {
      this.$_arInfoletsToShow$ || (this.$_arInfoletsToShow$ = []), this.$_arInfoletsToShow$.push($infolet$$2_selector$$44$$), this.$_showingInfolets$ = !0, this.$_layoutPhase$ !== $MasonryLayoutCommon$$.$_PHASE_HIDE$ && this.$_layoutPhase$ !== $MasonryLayoutCommon$$.$_PHASE_LAYOUT$ ? this.$_queueRelayout$() : this.$_showingInfolets$ = !1;
    }
  };
  $MasonryLayoutCommon$$.prototype.$hideTile$ = function $$MasonryLayoutCommon$$$$$hideTile$$($infolet$$3_selector$$45$$) {
    if ($infolet$$3_selector$$45$$ = this.$_elem$.querySelector($infolet$$3_selector$$45$$)) {
      this.$_arInfoletsToHide$ || (this.$_arInfoletsToHide$ = []), this.$_arInfoletsToHide$.push($infolet$$3_selector$$45$$), this.$_hidingInfolets$ = !0, this.$_queueRelayout$();
    }
  };
  $MasonryLayoutCommon$$.prototype.$resizeNotify$ = function $$MasonryLayoutCommon$$$$$resizeNotify$$() {
    this.$_resizingInfolet$ || this.$_hidingInfolets$ || this.$_showingInfolets$ || (this.$_layoutCycleOnStartFunc$ && this.$_layoutCycleOnStartFunc$(), this.$_transitionStart$(!1), this.$_transitionLayout$());
  };
  $MasonryLayoutCommon$$.prototype.$isAnimationEnabled$ = function $$MasonryLayoutCommon$$$$$isAnimationEnabled$$() {
    if (this.$_temporarilyDisableAnimation$) {
      return!1;
    }
    this.$_cachedAnimationEnabled$ || (this.$_animationEnabled$ = this.$_automationEnabled$ ? !1 : $MasonryLayoutCommon$$.$_isMinimumAgentMet$($MasonryLayoutCommon$$.$_agentTypeAndVersion$[0], $MasonryLayoutCommon$$.$_agentTypeAndVersion$[1]), this.$_cachedAnimationEnabled$ = !0);
    return this.$_animationEnabled$;
  };
  $MasonryLayoutCommon$$.prototype.$isInLayoutCycle$ = function $$MasonryLayoutCommon$$$$$isInLayoutCycle$$() {
    return null != this.$_layoutPhase$ || null != this.$_arMovedInfolets$ && 0 < this.$_arMovedInfolets$.length;
  };
  $MasonryLayoutCommon$$.prototype.$finishLayoutCycle$ = function $$MasonryLayoutCommon$$$$$finishLayoutCycle$$() {
    this.$_temporarilyDisableAnimation$ = !0;
    this.$_removeStyleClassFromTiles$(this.$_transitionMoveToStyleClass$);
    this.$_removeStyleClassFromTiles$(this.$_transitionMoveToFastStyleClass$);
    this.$_removeStyleClassFromTiles$(this.$_transitionHideFromStyleClass$);
    this.$_removeStyleClassFromTiles$(this.$_transitionHideToStyleClass$);
    this.$_removeStyleClassFromTiles$(this.$_transitionShowFromStyleClass$);
    this.$_removeStyleClassFromTiles$(this.$_transitionShowToStyleClass$);
    this.$_removeStyleClassFromTiles$(this.$_transitionResizeToStyleClass$);
    this.$_removeStyleClassNameFunc$(this.$_sizeDiv$, this.$_transitionComponentResizeToStyleClass$);
    this.$_removeStyleClassNameFunc$(this.$_sizeDiv$, this.$_transitionComponentResizeToFastStyleClass$);
    $MasonryLayoutCommon$$.$_removeBubbleEventListener$(this.$_elem$, "transitionend", this.$_handleTransitionEndFunc$);
    $MasonryLayoutCommon$$.$_removeBubbleEventListener$(this.$_elem$, "webkitTransitionEnd", this.$_handleTransitionEndFunc$);
    for (var $tileChildren$$ = this.$_getTileChildren$(), $i$$490$$ = 0;$i$$490$$ < $tileChildren$$.length;$i$$490$$++) {
      var $child$$18$$ = $tileChildren$$[$i$$490$$];
      $child$$18$$.$_afrOldSizeStyleClass$ && delete $child$$18$$.$_afrOldSizeStyleClass$;
      $MasonryLayoutCommon$$.$_removeBubbleEventListener$($child$$18$$, "transitionend", this.$_handleHideTransitionEndFunc$);
      $MasonryLayoutCommon$$.$_removeBubbleEventListener$($child$$18$$, "webkitTransitionEnd", this.$_handleHideTransitionEndFunc$);
      $MasonryLayoutCommon$$.$_removeBubbleEventListener$($child$$18$$, "transitionend", this.$_handleShowTransitionEndFunc$);
      $MasonryLayoutCommon$$.$_removeBubbleEventListener$($child$$18$$, "webkitTransitionEnd", this.$_handleShowTransitionEndFunc$);
    }
    this.$_hideTilesInternalTimeout$ ? (clearTimeout(this.$_hideTilesInternalTimeout$), this.$_hideTilesInternalTimeout$ = null, this.$_handleHideTransitionEnd$(null)) : this.$_showTilesTimeout$ ? (clearTimeout(this.$_showTilesTimeout$), this.$_showTilesTimeout$ = null, this.$_showTiles$()) : this.$_layoutPhase$ === $MasonryLayoutCommon$$.$_PHASE_LAYOUT$ || null != this.$_arMovedInfolets$ && 0 < this.$_arMovedInfolets$.length ? this.$_handleTransitionEnd$(null) : this.$_layoutPhase$ === $MasonryLayoutCommon$$.$_PHASE_SHOW$ && 
    this.$_handleShowTransitionEnd$(null);
    this.$_temporarilyDisableAnimation$ = !1;
  };
  $MasonryLayoutCommon$$.$_getElemSize$ = function $$MasonryLayoutCommon$$$$_getElemSize$$($elem$$150$$) {
    var $computedStyle$$ = $MasonryLayoutCommon$$.$_getComputedStyle$($elem$$150$$);
    return{$w$:$elem$$150$$.offsetWidth + ($MasonryLayoutCommon$$.$_getCSSLengthAsInt$($computedStyle$$.marginLeft) + $MasonryLayoutCommon$$.$_getCSSLengthAsInt$($computedStyle$$.marginRight)), $h$:$elem$$150$$.offsetHeight + ($MasonryLayoutCommon$$.$_getCSSLengthAsInt$($computedStyle$$.marginTop) + $MasonryLayoutCommon$$.$_getCSSLengthAsInt$($computedStyle$$.marginBottom))};
  };
  $MasonryLayoutCommon$$.$_getElemInsets$ = function $$MasonryLayoutCommon$$$$_getElemInsets$$($computedStyle$$1_elem$$151$$) {
    $computedStyle$$1_elem$$151$$ = $MasonryLayoutCommon$$.$_getComputedStyle$($computedStyle$$1_elem$$151$$);
    return{paddingLeft:$MasonryLayoutCommon$$.$_getCSSLengthAsInt$($computedStyle$$1_elem$$151$$.paddingLeft), paddingRight:$MasonryLayoutCommon$$.$_getCSSLengthAsInt$($computedStyle$$1_elem$$151$$.paddingRight), paddingTop:$MasonryLayoutCommon$$.$_getCSSLengthAsInt$($computedStyle$$1_elem$$151$$.paddingTop), paddingBottom:$MasonryLayoutCommon$$.$_getCSSLengthAsInt$($computedStyle$$1_elem$$151$$.paddingBottom), borderLeftWidth:$MasonryLayoutCommon$$.$_getCSSLengthAsInt$($computedStyle$$1_elem$$151$$.borderLeftWidth), 
    borderRightWidth:$MasonryLayoutCommon$$.$_getCSSLengthAsInt$($computedStyle$$1_elem$$151$$.borderRightWidth), borderTopWidth:$MasonryLayoutCommon$$.$_getCSSLengthAsInt$($computedStyle$$1_elem$$151$$.borderTopWidth), borderBottomWidth:$MasonryLayoutCommon$$.$_getCSSLengthAsInt$($computedStyle$$1_elem$$151$$.borderBottomWidth)};
  };
  $MasonryLayoutCommon$$.$_getComputedStyle$ = function $$MasonryLayoutCommon$$$$_getComputedStyle$$($elem$$152$$) {
    var $defView$$ = $elem$$152$$.ownerDocument.defaultView, $computedStyle$$2$$ = null;
    return $computedStyle$$2$$ = $defView$$ ? $defView$$.getComputedStyle($elem$$152$$, null) : $elem$$152$$.currentStyle;
  };
  $MasonryLayoutCommon$$.$_getCSSLengthAsInt$ = function $$MasonryLayoutCommon$$$$_getCSSLengthAsInt$$($cssLength$$2_intLength$$1$$) {
    return 0 < $cssLength$$2_intLength$$1$$.length && "auto" != $cssLength$$2_intLength$$1$$ ? ($cssLength$$2_intLength$$1$$ = parseInt($cssLength$$2_intLength$$1$$, 10), isNaN($cssLength$$2_intLength$$1$$) && ($cssLength$$2_intLength$$1$$ = 0), $cssLength$$2_intLength$$1$$) : 0;
  };
  $MasonryLayoutCommon$$.$_addBubbleEventListener$ = function $$MasonryLayoutCommon$$$$_addBubbleEventListener$$($node$$167$$, $type$$104$$, $listener$$42$$) {
    $node$$167$$.addEventListener ? $node$$167$$.addEventListener($type$$104$$, $listener$$42$$, !1) : $node$$167$$.attachEvent && $node$$167$$.attachEvent("on" + $type$$104$$, $listener$$42$$);
  };
  $MasonryLayoutCommon$$.$_removeBubbleEventListener$ = function $$MasonryLayoutCommon$$$$_removeBubbleEventListener$$($node$$168$$, $type$$105$$, $listener$$43$$) {
    $node$$168$$.removeEventListener ? $node$$168$$.removeEventListener($type$$105$$, $listener$$43$$, !1) : $node$$168$$.detachEvent && $node$$168$$.detachEvent("on" + $type$$105$$, $listener$$43$$);
  };
  $MasonryLayoutCommon$$.$_arrayIndexOf$ = function $$MasonryLayoutCommon$$$$_arrayIndexOf$$($array$$17$$, $item$$134$$) {
    if ($array$$17$$) {
      for (var $i$$491$$ = 0;$i$$491$$ < $array$$17$$.length;$i$$491$$++) {
        if ($array$$17$$[$i$$491$$] == $item$$134$$) {
          return $i$$491$$;
        }
      }
    }
    return-1;
  };
  $MasonryLayoutCommon$$.$_isMinimumAgentMet$ = function $$MasonryLayoutCommon$$$$_isMinimumAgentMet$$($actualAgentType$$, $actualAgentVersion$$) {
    var $agentRequirements$$ = ["gecko", 16, "trident", 6, "webkit", 533.1], $argCount$$ = $agentRequirements$$.length;
    if (0 == $argCount$$ % 2) {
      for (var $i$$492$$ = 0;$i$$492$$ <= $argCount$$ - 2;$i$$492$$ += 2) {
        if ($actualAgentType$$ == $agentRequirements$$[$i$$492$$]) {
          if ($actualAgentVersion$$ >= $agentRequirements$$[1 + $i$$492$$]) {
            return!0;
          }
          break;
        }
      }
    }
    return!1;
  };
  $MasonryLayoutCommon$$.$_getAgentTypeAndVersion$ = function $$MasonryLayoutCommon$$$$_getAgentTypeAndVersion$$() {
    var $versionParser$$ = $MasonryLayoutCommon$$.$_parseFloatVersion$, $agentType$$1$$ = null, $agentVersion$$1_possibleVersion$$ = -1, $userAgent$$6$$ = navigator.userAgent.toLowerCase();
    -1 != $userAgent$$6$$.indexOf("msie") || -1 != $userAgent$$6$$.indexOf("trident") ? ($agentType$$1$$ = "trident", $agentVersion$$1_possibleVersion$$ = $versionParser$$($userAgent$$6$$, /trident\/(\d+[.]\d+)/), -1 == $agentVersion$$1_possibleVersion$$ && ($agentVersion$$1_possibleVersion$$ = $versionParser$$($userAgent$$6$$, /msie (\d+\.\d+);/), -1 == $agentVersion$$1_possibleVersion$$ && ($agentVersion$$1_possibleVersion$$ = $versionParser$$($userAgent$$6$$, /msie (\d+\.\d+)b;/)), $agentVersion$$1_possibleVersion$$ -= 
    4), null != document.documentMode && ($agentVersion$$1_possibleVersion$$ = Math.min($agentVersion$$1_possibleVersion$$, document.documentMode - 4))) : -1 != $userAgent$$6$$.indexOf("applewebkit") ? ($agentType$$1$$ = "webkit", $agentVersion$$1_possibleVersion$$ = $versionParser$$($userAgent$$6$$, /applewebkit\/(\d+([.]\d+)*)/)) : -1 != $userAgent$$6$$.indexOf("gecko/") && ($agentType$$1$$ = "gecko", $agentVersion$$1_possibleVersion$$ = $versionParser$$($userAgent$$6$$, /rv:(\d+[.]\d+)/));
    return[$agentType$$1$$, $agentVersion$$1_possibleVersion$$];
  };
  $MasonryLayoutCommon$$.$_parseFloatVersion$ = function $$MasonryLayoutCommon$$$$_parseFloatVersion$$($userAgent$$7$$, $versionNumberPattern$$1$$) {
    var $matches$$5_versionString$$1$$ = $userAgent$$7$$.match($versionNumberPattern$$1$$);
    return $matches$$5_versionString$$1$$ && ($matches$$5_versionString$$1$$ = $matches$$5_versionString$$1$$[1]) ? parseFloat($matches$$5_versionString$$1$$) : -1;
  };
  $MasonryLayoutCommon$$.$_compareTilePositions$ = function $$MasonryLayoutCommon$$$$_compareTilePositions$$($pos1$$1$$, $pos2$$1$$) {
    return $pos1$$1$$.$startRow$ > $pos2$$1$$.$startRow$ ? 1 : $pos1$$1$$.$startRow$ < $pos2$$1$$.$startRow$ ? -1 : $pos1$$1$$.$startCol$ > $pos2$$1$$.$startCol$ ? 1 : $pos1$$1$$.$startCol$ < $pos2$$1$$.$startCol$ ? -1 : 0;
  };
  $MasonryLayoutCommon$$.prototype.$_queueRelayout$ = function $$MasonryLayoutCommon$$$$$_queueRelayout$$() {
    this.$_hideTilesTimeout$ || (this.$_layoutPhase$ ? this.$_queuedRelayout$ || (this.$_queuedRelayout$ = !0) : this.$_hideTilesTimeout$ = setTimeout(this.$_hideTilesFunc$, 0));
  };
  $MasonryLayoutCommon$$.prototype.$_getTileChildren$ = function $$MasonryLayoutCommon$$$$$_getTileChildren$$() {
    for (var $children$$25$$ = this.$_elem$.querySelectorAll(this.$_tilesSelector$), $arChildren$$2$$ = [], $i$$493$$ = 0;$i$$493$$ < $children$$25$$.length;$i$$493$$++) {
      var $child$$19$$ = $children$$25$$[$i$$493$$], $childStyle$$ = $child$$19$$.style;
      0 < $child$$19$$.offsetWidth && 0 < $child$$19$$.offsetHeight && "hidden" != $childStyle$$.visibility && $arChildren$$2$$.push($child$$19$$);
    }
    return $arChildren$$2$$;
  };
  $MasonryLayoutCommon$$.prototype.$_transitionLayout$ = function $$MasonryLayoutCommon$$$$$_transitionLayout$$() {
    var $oldMovedInfolets_ret$$80$$ = this.$_arMovedInfolets$, $newMovedInfolets$$ = this.$_layout$();
    if (this.$_arInfoletsToResize$) {
      var $arInfoletsToResize$$1_calledHandleTransitionEnd$$ = this.$_arInfoletsToResize$;
      $newMovedInfolets$$ || ($newMovedInfolets$$ = []);
      for (var $i$$494$$ = 0;$i$$494$$ < $arInfoletsToResize$$1_calledHandleTransitionEnd$$.length;$i$$494$$ += 2) {
        var $resizedInfolet$$ = $arInfoletsToResize$$1_calledHandleTransitionEnd$$[$i$$494$$];
        0 > $MasonryLayoutCommon$$.$_arrayIndexOf$($newMovedInfolets$$, $resizedInfolet$$) && $newMovedInfolets$$.push($resizedInfolet$$);
      }
    }
    $arInfoletsToResize$$1_calledHandleTransitionEnd$$ = !1;
    if (!$newMovedInfolets$$ || 1 > $newMovedInfolets$$.length) {
      if (!$oldMovedInfolets_ret$$80$$ || 1 > $oldMovedInfolets_ret$$80$$.length) {
        this.$_arMovedInfolets$ = null, this.$_handleTransitionEnd$(null), $arInfoletsToResize$$1_calledHandleTransitionEnd$$ = !0;
      }
    } else {
      this.$_arMovedInfolets$ = $newMovedInfolets$$;
    }
    $oldMovedInfolets_ret$$80$$ = null != $newMovedInfolets$$ && 0 < $newMovedInfolets$$.length;
    this.$isAnimationEnabled$() || $arInfoletsToResize$$1_calledHandleTransitionEnd$$ || this.$_handleTransitionEnd$(null);
    return $oldMovedInfolets_ret$$80$$;
  };
  $MasonryLayoutCommon$$.prototype.$_layout$ = function $$MasonryLayoutCommon$$$$$_layout$$() {
    var $elem$$154_style$$18$$ = this.$_elem$, $children$$26$$ = this.$_getTileChildren$();
    this.$_sortTilesOriginalOrderFunc$ && this.$_sortTilesOriginalOrderFunc$($children$$26$$);
    var $cellSize_oldSizeStyleClass$$ = this.$_cellSize$ = null;
    this.$_cols$ = 0;
    this.$_rows$ = 1;
    this.$_occupancyMap$ = null;
    var $arMovedInfolets$$ = [], $arOldPositions$$ = [], $arCols$$ = [], $rtl$$9$$ = this.$_rtl$, $insets$$ = $MasonryLayoutCommon$$.$_getElemInsets$($elem$$154_style$$18$$), $maxColSpan$$ = 0, $arTilePositions$$ = [];
    this.$_arTilePositions$ = $arTilePositions$$;
    for (var $i$$495$$ = 0;$i$$495$$ < $children$$26$$.length;$i$$495$$++) {
      var $child$$20$$ = $children$$26$$[$i$$495$$], $childSpan$$ = this.$_getTileSpanFunc$($child$$20$$);
      ($cellSize_oldSizeStyleClass$$ = $child$$20$$.$_afrOldSizeStyleClass$) && delete $child$$20$$.$_afrOldSizeStyleClass$;
      if (!this.$_cellSize$) {
        var $r$$6_spanForCellSize_tmpDiv$$ = $childSpan$$;
        $cellSize_oldSizeStyleClass$$ && ($r$$6_spanForCellSize_tmpDiv$$ = document.createElement("div"), $r$$6_spanForCellSize_tmpDiv$$.className = $cellSize_oldSizeStyleClass$$, $r$$6_spanForCellSize_tmpDiv$$ = this.$_getTileSpanFunc$($r$$6_spanForCellSize_tmpDiv$$));
        this.$_cellSize$ = this.$_calcCellSize$($child$$20$$, $r$$6_spanForCellSize_tmpDiv$$);
      }
      $cellSize_oldSizeStyleClass$$ = this.$_cellSize$;
      this.$_occupancyMap$ || (this.$_cols$ = Math.max(Math.floor(($elem$$154_style$$18$$.offsetWidth - $insets$$.paddingLeft - $insets$$.paddingRight - $insets$$.borderLeftWidth - $insets$$.borderRightWidth) / $cellSize_oldSizeStyleClass$$.$w$), 1), this.$_initOccupancyMap$(this.$_cols$, this.$_rows$), $maxColSpan$$ = this.$_cols$);
      $childSpan$$.colSpan > $maxColSpan$$ && ($maxColSpan$$ = $childSpan$$.colSpan);
      $childSpan$$.colSpan > this.$_cols$ && ($childSpan$$.colSpan = this.$_cols$);
      for (var $childStyle$$1_next$$9$$ = !1, $r$$6_spanForCellSize_tmpDiv$$ = 0;$r$$6_spanForCellSize_tmpDiv$$ < this.$_rows$;$r$$6_spanForCellSize_tmpDiv$$++) {
        for (var $c$$56$$ = 0;$c$$56$$ < this.$_cols$;$c$$56$$++) {
          if (this.$_fits$($c$$56$$, $r$$6_spanForCellSize_tmpDiv$$, $childSpan$$)) {
            var $childStyle$$1_next$$9$$ = $child$$20$$.style, $oldPosition$$ = {top:$childStyle$$1_next$$9$$.top};
            $rtl$$9$$ ? $oldPosition$$.right = $childStyle$$1_next$$9$$.right : $oldPosition$$.left = $childStyle$$1_next$$9$$.left;
            $arOldPositions$$.push($oldPosition$$);
            this.$_position$($child$$20$$, $c$$56$$, $r$$6_spanForCellSize_tmpDiv$$, $childSpan$$, $cellSize_oldSizeStyleClass$$, $insets$$);
            $rtl$$9$$ && $arCols$$.push($c$$56$$);
            $childStyle$$1_next$$9$$ = !0;
            $arTilePositions$$.push({$startCol$:$c$$56$$, $startRow$:$r$$6_spanForCellSize_tmpDiv$$, tile:$child$$20$$});
            break;
          }
        }
        if ($childStyle$$1_next$$9$$) {
          break;
        }
        $r$$6_spanForCellSize_tmpDiv$$ === this.$_rows$ - 1 && this.$_addRow$();
      }
    }
    $cellSize_oldSizeStyleClass$$ && ($elem$$154_style$$18$$ = this.$_sizeDiv$.style, $elem$$154_style$$18$$.width = $maxColSpan$$ * $cellSize_oldSizeStyleClass$$.$w$ + "px", $elem$$154_style$$18$$.height = this.$_rows$ * $cellSize_oldSizeStyleClass$$.$h$ + "px");
    for ($i$$495$$ = 0;$i$$495$$ < $children$$26$$.length;$i$$495$$++) {
      $child$$20$$ = $children$$26$$[$i$$495$$], $childStyle$$1_next$$9$$ = $child$$20$$.style, $oldPosition$$ = $arOldPositions$$[$i$$495$$], "" != $oldPosition$$.top && ($rtl$$9$$ && parseInt($childStyle$$1_next$$9$$.right, 10) !== parseInt($oldPosition$$.right, 10) || !$rtl$$9$$ && parseInt($childStyle$$1_next$$9$$.left, 10) !== parseInt($oldPosition$$.left, 10) || parseInt($childStyle$$1_next$$9$$.top, 10) !== parseInt($oldPosition$$.top, 10)) && $arMovedInfolets$$.push($child$$20$$);
    }
    1 > $arMovedInfolets$$.length && ($arMovedInfolets$$ = null);
    return $arMovedInfolets$$;
  };
  $MasonryLayoutCommon$$.prototype.$_reorderTilesForLayout$ = function $$MasonryLayoutCommon$$$$$_reorderTilesForLayout$$() {
    var $arTilePositions$$1$$ = this.$_arTilePositions$;
    this.$_arTilePositions$ = null;
    for (var $arTilePositions$$1$$ = $arTilePositions$$1$$.sort($MasonryLayoutCommon$$.$_compareTilePositions$), $children$$27$$ = this.$_getTileChildren$(), $i$$496$$ = 0;$i$$496$$ < $children$$27$$.length;$i$$496$$++) {
      var $child$$21_posTileIndex$$ = $children$$27$$[$i$$496$$], $posTile$$ = $arTilePositions$$1$$[$i$$496$$].tile;
      $child$$21_posTileIndex$$ != $posTile$$ && (this.$_subtreeDetachedFunc$($posTile$$), $child$$21_posTileIndex$$.parentNode.insertBefore($posTile$$, $child$$21_posTileIndex$$), this.$_subtreeAttachedFunc$($posTile$$), $child$$21_posTileIndex$$ = $MasonryLayoutCommon$$.$_arrayIndexOf$($children$$27$$, $posTile$$), $child$$21_posTileIndex$$ > $i$$496$$ && ($children$$27$$.splice($child$$21_posTileIndex$$, 1), $children$$27$$.splice($i$$496$$, 0, $posTile$$)));
    }
  };
  $MasonryLayoutCommon$$.prototype.$_initOccupancyMap$ = function $$MasonryLayoutCommon$$$$$_initOccupancyMap$$($cols$$1$$, $rows$$17$$) {
    for (var $occupancyMap$$ = this.$_occupancyMap$ = [], $row$$90$$ = 0;$row$$90$$ < $rows$$17$$;$row$$90$$++) {
      var $arCols$$1$$ = [];
      $occupancyMap$$.push($arCols$$1$$);
      for (var $col$$4$$ = 0;$col$$4$$ < $cols$$1$$;$col$$4$$++) {
        $arCols$$1$$[$col$$4$$] = !1;
      }
    }
  };
  $MasonryLayoutCommon$$.prototype.$_addRow$ = function $$MasonryLayoutCommon$$$$$_addRow$$() {
    this.$_rows$++;
    var $arCols$$2$$ = [];
    this.$_occupancyMap$.push($arCols$$2$$);
    for (var $col$$5$$ = 0;$col$$5$$ < this.$_cols$;$col$$5$$++) {
      $arCols$$2$$[$col$$5$$] = !1;
    }
  };
  $MasonryLayoutCommon$$.prototype.$_fits$ = function $$MasonryLayoutCommon$$$$$_fits$$($col$$6$$, $row$$91$$, $childSpan$$1_rowSpan$$) {
    var $colSpan$$2$$ = $childSpan$$1_rowSpan$$.colSpan;
    $childSpan$$1_rowSpan$$ = $childSpan$$1_rowSpan$$.rowSpan;
    for (var $r$$7$$ = $row$$91$$;$r$$7$$ < $row$$91$$ + $childSpan$$1_rowSpan$$;$r$$7$$++) {
      $r$$7$$ >= this.$_rows$ && this.$_addRow$();
      for (var $c$$57$$ = $col$$6$$;$c$$57$$ < $col$$6$$ + $colSpan$$2$$;$c$$57$$++) {
        if ($c$$57$$ >= this.$_cols$ || this.$_occupancyMap$[$r$$7$$][$c$$57$$]) {
          return!1;
        }
      }
    }
    return!0;
  };
  $MasonryLayoutCommon$$.prototype.$_position$ = function $$MasonryLayoutCommon$$$$$_position$$($child$$22_style$$19$$, $col$$7$$, $row$$92$$, $childSpan$$2_rowSpan$$1$$, $cellSize$$1$$, $insets$$1$$) {
    var $colSpan$$3$$ = $childSpan$$2_rowSpan$$1$$.colSpan;
    $childSpan$$2_rowSpan$$1$$ = $childSpan$$2_rowSpan$$1$$.rowSpan;
    for (var $occupancyMap$$2$$ = this.$_occupancyMap$, $r$$8$$ = $row$$92$$;$r$$8$$ < $row$$92$$ + $childSpan$$2_rowSpan$$1$$;$r$$8$$++) {
      for (var $c$$58$$ = $col$$7$$;$c$$58$$ < $col$$7$$ + $colSpan$$3$$;$c$$58$$++) {
        $occupancyMap$$2$$[$r$$8$$][$c$$58$$] = !0;
      }
    }
    $child$$22_style$$19$$ = $child$$22_style$$19$$.style;
    $child$$22_style$$19$$.top = $insets$$1$$.paddingTop + $row$$92$$ * $cellSize$$1$$.$h$ + "px";
    this.$_rtl$ ? $child$$22_style$$19$$.right = $insets$$1$$.paddingRight + $col$$7$$ * $cellSize$$1$$.$w$ + "px" : $child$$22_style$$19$$.left = $insets$$1$$.paddingLeft + $col$$7$$ * $cellSize$$1$$.$w$ + "px";
  };
  $MasonryLayoutCommon$$.prototype.$_addStyleClassToTiles$ = function $$MasonryLayoutCommon$$$$$_addStyleClassToTiles$$($styleClassName$$) {
    for (var $children$$28$$ = this.$_getTileChildren$(), $i$$497$$ = 0;$i$$497$$ < $children$$28$$.length;$i$$497$$++) {
      this.$_addStyleClassNameFunc$($children$$28$$[$i$$497$$], $styleClassName$$);
    }
  };
  $MasonryLayoutCommon$$.prototype.$_removeStyleClassFromTiles$ = function $$MasonryLayoutCommon$$$$$_removeStyleClassFromTiles$$($styleClassName$$1$$) {
    for (var $children$$29$$ = this.$_getTileChildren$(), $i$$498$$ = 0;$i$$498$$ < $children$$29$$.length;$i$$498$$++) {
      this.$_removeStyleClassNameFunc$($children$$29$$[$i$$498$$], $styleClassName$$1$$);
    }
  };
  $MasonryLayoutCommon$$.prototype.$_transitionStart$ = function $$MasonryLayoutCommon$$$$$_transitionStart$$($reorder$$2$$) {
    this.$_layoutTransition$ || (this.$_reorderTransitionStarted$ = $reorder$$2$$, this.$isAnimationEnabled$() && (this.$_addStyleClassToTiles$($reorder$$2$$ ? this.$_transitionMoveToFastStyleClass$ : this.$_transitionMoveToStyleClass$), this.$_addStyleClassNameFunc$(this.$_sizeDiv$, $reorder$$2$$ ? this.$_transitionComponentResizeToFastStyleClass$ : this.$_transitionComponentResizeToStyleClass$), $MasonryLayoutCommon$$.$_addBubbleEventListener$(this.$_elem$, "transitionend", this.$_handleTransitionEndFunc$), 
    $MasonryLayoutCommon$$.$_addBubbleEventListener$(this.$_elem$, "webkitTransitionEnd", this.$_handleTransitionEndFunc$)), this.$_layoutTransition$ = !0);
  };
  $MasonryLayoutCommon$$.prototype.$_handleTransitionEnd$ = function $$MasonryLayoutCommon$$$$$_handleTransitionEnd$$($event$$726_i$$499$$) {
    var $arInfoletsToResize$$2_doneTransitioning$$ = !0;
    if (this.$_arMovedInfolets$) {
      var $arMovedInfolets$$1$$ = this.$_arMovedInfolets$;
      if ($event$$726_i$$499$$) {
        var $target$$135$$ = $event$$726_i$$499$$.target;
        for ($event$$726_i$$499$$ = 0;$event$$726_i$$499$$ < $arMovedInfolets$$1$$.length;$event$$726_i$$499$$++) {
          if ($target$$135$$ === $arMovedInfolets$$1$$[$event$$726_i$$499$$]) {
            $arMovedInfolets$$1$$.splice($event$$726_i$$499$$, 1);
            break;
          }
        }
      } else {
        this.$isAnimationEnabled$() || ($arMovedInfolets$$1$$ = this.$_arMovedInfolets$ = []);
      }
      0 < $arMovedInfolets$$1$$.length && ($arInfoletsToResize$$2_doneTransitioning$$ = !1);
    }
    if ($arInfoletsToResize$$2_doneTransitioning$$) {
      if (this.$_arInfoletsToResize$ && ($arInfoletsToResize$$2_doneTransitioning$$ = this.$_arInfoletsToResize$, this.$_arInfoletsToResize$ = null, this.$isAnimationEnabled$())) {
        for ($event$$726_i$$499$$ = 0;$event$$726_i$$499$$ < $arInfoletsToResize$$2_doneTransitioning$$.length;$event$$726_i$$499$$ += 2) {
          this.$_removeStyleClassNameFunc$($arInfoletsToResize$$2_doneTransitioning$$[$event$$726_i$$499$$], this.$_transitionResizeToStyleClass$);
        }
      }
      this.$_reorderTransitionStarted$ ? (this.$isAnimationEnabled$() && (this.$_removeStyleClassFromTiles$(this.$_transitionMoveToFastStyleClass$), this.$_removeStyleClassNameFunc$(this.$_sizeDiv$, this.$_transitionComponentResizeToFastStyleClass$)), this.$_reorderTransitionStarted$ = !1) : this.$isAnimationEnabled$() && (this.$_removeStyleClassFromTiles$(this.$_transitionMoveToStyleClass$), this.$_removeStyleClassNameFunc$(this.$_sizeDiv$, this.$_transitionComponentResizeToStyleClass$));
      this.$isAnimationEnabled$() && ($MasonryLayoutCommon$$.$_removeBubbleEventListener$(this.$_elem$, "transitionend", this.$_handleTransitionEndFunc$), $MasonryLayoutCommon$$.$_removeBubbleEventListener$(this.$_elem$, "webkitTransitionEnd", this.$_handleTransitionEndFunc$));
      this.$_showingInfolets$ = this.$_hidingInfolets$ = this.$_resizingInfolet$ = this.$_layoutTransition$ = !1;
      this.$_reorderTilesForLayout$();
      this.$_layoutOnEndFunc$ && this.$_layoutOnEndFunc$();
      if (this.$_layoutPhase$ === $MasonryLayoutCommon$$.$_PHASE_LAYOUT$) {
        if (this.$isAnimationEnabled$()) {
          var $self$$220$$ = this;
          this.$_showTilesTimeout$ = setTimeout(function() {
            $self$$220$$.$_showTiles$();
          }, 0);
        } else {
          this.$_showTiles$();
        }
      } else {
        this.$_layoutPhase$ || this.$_layoutCycleOnEndFunc$ && this.$_layoutCycleOnEndFunc$();
      }
    }
  };
  $MasonryLayoutCommon$$.prototype.$_calcCellSize$ = function $$MasonryLayoutCommon$$$$$_calcCellSize$$($child$$23$$, $childSpan$$3$$) {
    var $childSize$$ = $MasonryLayoutCommon$$.$_getElemSize$($child$$23$$);
    return{$w$:$childSize$$.$w$ / $childSpan$$3$$.colSpan, $h$:$childSize$$.$h$ / $childSpan$$3$$.rowSpan};
  };
  $MasonryLayoutCommon$$.prototype.$_hideTiles$ = function $$MasonryLayoutCommon$$$$$_hideTiles$$() {
    this.$_hideTilesTimeout$ && (clearTimeout(this.$_hideTilesTimeout$), this.$_hideTilesTimeout$ = null);
    this.$_layoutCycleOnStartFunc$ && this.$_layoutCycleOnStartFunc$();
    this.$_layoutPhase$ = $MasonryLayoutCommon$$.$_PHASE_HIDE$;
    if (this.$_arInfoletsToHide$ && this.$isAnimationEnabled$()) {
      for (var $arInfoletsToHide$$1$$ = this.$_arInfoletsToHide$, $i$$500$$ = 0;$i$$500$$ < $arInfoletsToHide$$1$$.length;$i$$500$$++) {
        var $infolet$$5$$ = $arInfoletsToHide$$1$$[$i$$500$$];
        $MasonryLayoutCommon$$.$_addBubbleEventListener$($infolet$$5$$, "transitionend", this.$_handleHideTransitionEndFunc$);
        $MasonryLayoutCommon$$.$_addBubbleEventListener$($infolet$$5$$, "webkitTransitionEnd", this.$_handleHideTransitionEndFunc$);
        this.$_addStyleClassNameFunc$($infolet$$5$$, this.$_transitionHideFromStyleClass$);
      }
      var $self$$221$$ = this;
      this.$_hideTilesInternalTimeout$ = setTimeout(function() {
        for (var $i$$501$$ = 0;$i$$501$$ < $arInfoletsToHide$$1$$.length;$i$$501$$++) {
          var $infolet$$6$$ = $arInfoletsToHide$$1$$[$i$$501$$];
          $self$$221$$.$_removeStyleClassNameFunc$($infolet$$6$$, $self$$221$$.$_transitionHideFromStyleClass$);
          $self$$221$$.$_addStyleClassNameFunc$($infolet$$6$$, $self$$221$$.$_transitionHideToStyleClass$);
        }
      }, 0);
    } else {
      this.$_handleHideTransitionEnd$(null);
    }
  };
  $MasonryLayoutCommon$$.prototype.$_handleHideTransitionEnd$ = function $$MasonryLayoutCommon$$$$$_handleHideTransitionEnd$$($event$$727_infolet$$7$$) {
    this.$_hideTilesInternalTimeout$ && (clearTimeout(this.$_hideTilesInternalTimeout$), this.$_hideTilesInternalTimeout$ = null);
    if ($event$$727_infolet$$7$$) {
      $event$$727_infolet$$7$$.preventDefault();
      $event$$727_infolet$$7$$.stopPropagation();
      $event$$727_infolet$$7$$ = $event$$727_infolet$$7$$.target;
      this.$_removeStyleClassNameFunc$($event$$727_infolet$$7$$, this.$_transitionHideToStyleClass$);
      $MasonryLayoutCommon$$.$_removeBubbleEventListener$($event$$727_infolet$$7$$, "transitionend", this.$_handleHideTransitionEndFunc$);
      $MasonryLayoutCommon$$.$_removeBubbleEventListener$($event$$727_infolet$$7$$, "webkitTransitionEnd", this.$_handleHideTransitionEndFunc$);
      var $arInfoletsToHide$$2_newSizeStyleClass_style$$20$$ = this.$_arInfoletsToHide$;
      if ($arInfoletsToHide$$2_newSizeStyleClass_style$$20$$) {
        for (var $i$$502$$ = 0;$i$$502$$ < $arInfoletsToHide$$2_newSizeStyleClass_style$$20$$.length;$i$$502$$++) {
          var $oldSizeStyleClass$$1_tmpInfolet$$ = $arInfoletsToHide$$2_newSizeStyleClass_style$$20$$[$i$$502$$];
          if ($oldSizeStyleClass$$1_tmpInfolet$$ === $event$$727_infolet$$7$$) {
            $arInfoletsToHide$$2_newSizeStyleClass_style$$20$$.splice($i$$502$$, 1);
            this.$_arFireHideOnEnd$ || (this.$_arFireHideOnEnd$ = []);
            var $arFireHideOnEnd_arInfoletsToResize$$3$$ = this.$_arFireHideOnEnd$;
            $arFireHideOnEnd_arInfoletsToResize$$3$$.push($event$$727_infolet$$7$$);
            break;
          }
        }
        1 > $arInfoletsToHide$$2_newSizeStyleClass_style$$20$$.length && (this.$_arInfoletsToHide$ = null);
      }
    } else {
      if (!this.$isAnimationEnabled$() && ($arInfoletsToHide$$2_newSizeStyleClass_style$$20$$ = this.$_arInfoletsToHide$)) {
        for ($i$$502$$ = 0;$i$$502$$ < $arInfoletsToHide$$2_newSizeStyleClass_style$$20$$.length;$i$$502$$++) {
          $oldSizeStyleClass$$1_tmpInfolet$$ = $arInfoletsToHide$$2_newSizeStyleClass_style$$20$$[$i$$502$$], this.$_arFireHideOnEnd$ || (this.$_arFireHideOnEnd$ = []), $arFireHideOnEnd_arInfoletsToResize$$3$$ = this.$_arFireHideOnEnd$, $arFireHideOnEnd_arInfoletsToResize$$3$$.push($oldSizeStyleClass$$1_tmpInfolet$$);
        }
        this.$_arInfoletsToHide$ = null;
      }
    }
    if (!this.$_arInfoletsToHide$) {
      if (this.$_arFireHideOnEnd$) {
        $arFireHideOnEnd_arInfoletsToResize$$3$$ = this.$_arFireHideOnEnd$;
        for ($i$$502$$ = 0;$i$$502$$ < $arFireHideOnEnd_arInfoletsToResize$$3$$.length;$i$$502$$++) {
          $event$$727_infolet$$7$$ = $arFireHideOnEnd_arInfoletsToResize$$3$$[$i$$502$$], this.$isAnimationEnabled$() && this.$_removeStyleClassNameFunc$($event$$727_infolet$$7$$, this.$_transitionHideToStyleClass$), $arInfoletsToHide$$2_newSizeStyleClass_style$$20$$ = $event$$727_infolet$$7$$.style, this.$_rtl$ ? $arInfoletsToHide$$2_newSizeStyleClass_style$$20$$.right = "" : $arInfoletsToHide$$2_newSizeStyleClass_style$$20$$.left = "", $arInfoletsToHide$$2_newSizeStyleClass_style$$20$$.top = "", 
          this.$_hideTileOnEndFunc$ && this.$_hideTileOnEndFunc$($event$$727_infolet$$7$$);
        }
        this.$_arFireHideOnEnd$ = null;
      }
      this.$_layoutPhase$ = $MasonryLayoutCommon$$.$_PHASE_LAYOUT$;
      this.$_transitionStart$(!1);
      if (this.$_arInfoletsToResize$) {
        for ($arFireHideOnEnd_arInfoletsToResize$$3$$ = this.$_arInfoletsToResize$, $i$$502$$ = 0;$i$$502$$ < $arFireHideOnEnd_arInfoletsToResize$$3$$.length;$i$$502$$ += 2) {
          $event$$727_infolet$$7$$ = $arFireHideOnEnd_arInfoletsToResize$$3$$[$i$$502$$], $arInfoletsToHide$$2_newSizeStyleClass_style$$20$$ = $arFireHideOnEnd_arInfoletsToResize$$3$$[$i$$502$$ + 1], $oldSizeStyleClass$$1_tmpInfolet$$ = this.$_getSizeStyleClassNameFunc$($event$$727_infolet$$7$$), this.$_removeStyleClassNameFunc$($event$$727_infolet$$7$$, $oldSizeStyleClass$$1_tmpInfolet$$), this.$_addStyleClassNameFunc$($event$$727_infolet$$7$$, $arInfoletsToHide$$2_newSizeStyleClass_style$$20$$), 
          this.$isAnimationEnabled$() && (this.$_addStyleClassNameFunc$($event$$727_infolet$$7$$, this.$_transitionResizeToStyleClass$), $event$$727_infolet$$7$$.$_afrOldSizeStyleClass$ = $oldSizeStyleClass$$1_tmpInfolet$$);
        }
      }
      this.$_transitionLayout$();
    }
  };
  $MasonryLayoutCommon$$.prototype.$_showTiles$ = function $$MasonryLayoutCommon$$$$$_showTiles$$() {
    this.$_showTilesTimeout$ && (clearTimeout(this.$_showTilesTimeout$), this.$_showTilesTimeout$ = null);
    this.$_layoutPhase$ = $MasonryLayoutCommon$$.$_PHASE_SHOW$;
    if (this.$_arInfoletsToShow$ && this.$isAnimationEnabled$()) {
      for (var $arInfoletsToShow$$1$$ = this.$_arInfoletsToShow$, $i$$503$$ = 0;$i$$503$$ < $arInfoletsToShow$$1$$.length;$i$$503$$++) {
        var $infolet$$8$$ = $arInfoletsToShow$$1$$[$i$$503$$];
        $MasonryLayoutCommon$$.$_addBubbleEventListener$($infolet$$8$$, "transitionend", this.$_handleShowTransitionEndFunc$);
        $MasonryLayoutCommon$$.$_addBubbleEventListener$($infolet$$8$$, "webkitTransitionEnd", this.$_handleShowTransitionEndFunc$);
        this.$_addStyleClassNameFunc$($infolet$$8$$, this.$_transitionShowToStyleClass$);
        this.$_removeStyleClassNameFunc$($infolet$$8$$, this.$_transitionShowFromStyleClass$);
      }
    } else {
      if (this.$_arInfoletsToShow$) {
        for ($arInfoletsToShow$$1$$ = this.$_arInfoletsToShow$, $i$$503$$ = 0;$i$$503$$ < $arInfoletsToShow$$1$$.length;$i$$503$$++) {
          $infolet$$8$$ = $arInfoletsToShow$$1$$[$i$$503$$], this.$_removeStyleClassNameFunc$($infolet$$8$$, this.$_transitionShowFromStyleClass$);
        }
      }
      this.$_handleShowTransitionEnd$(null);
    }
  };
  $MasonryLayoutCommon$$.prototype.$_handleShowTransitionEnd$ = function $$MasonryLayoutCommon$$$$$_handleShowTransitionEnd$$($event$$728_infolet$$9$$) {
    if ($event$$728_infolet$$9$$) {
      $event$$728_infolet$$9$$.preventDefault();
      $event$$728_infolet$$9$$.stopPropagation();
      $event$$728_infolet$$9$$ = $event$$728_infolet$$9$$.target;
      this.$_removeStyleClassNameFunc$($event$$728_infolet$$9$$, this.$_transitionShowToStyleClass$);
      $MasonryLayoutCommon$$.$_removeBubbleEventListener$($event$$728_infolet$$9$$, "transitionend", this.$_handleShowTransitionEndFunc$);
      $MasonryLayoutCommon$$.$_removeBubbleEventListener$($event$$728_infolet$$9$$, "webkitTransitionEnd", this.$_handleShowTransitionEndFunc$);
      var $arInfoletsToShow$$2$$ = this.$_arInfoletsToShow$;
      if ($arInfoletsToShow$$2$$) {
        for (var $i$$504$$ = 0;$i$$504$$ < $arInfoletsToShow$$2$$.length;$i$$504$$++) {
          var $tmpInfolet$$1$$ = $arInfoletsToShow$$2$$[$i$$504$$];
          if ($tmpInfolet$$1$$ === $event$$728_infolet$$9$$) {
            $arInfoletsToShow$$2$$.splice($i$$504$$, 1);
            this.$_showTileOnEndFunc$ && this.$_showTileOnEndFunc$($event$$728_infolet$$9$$);
            break;
          }
        }
        1 > $arInfoletsToShow$$2$$.length && (this.$_arInfoletsToShow$ = null);
      }
    } else {
      if (!this.$isAnimationEnabled$() && ($arInfoletsToShow$$2$$ = this.$_arInfoletsToShow$)) {
        for ($i$$504$$ = 0;$i$$504$$ < $arInfoletsToShow$$2$$.length;$i$$504$$++) {
          $tmpInfolet$$1$$ = $arInfoletsToShow$$2$$[$i$$504$$], this.$_showTileOnEndFunc$ && this.$_showTileOnEndFunc$($tmpInfolet$$1$$);
        }
        this.$_arInfoletsToShow$ = null;
      }
    }
    this.$_arInfoletsToShow$ || (this.$_layoutPhase$ = null, this.$_layoutCycleOnEndFunc$ && this.$_layoutCycleOnEndFunc$(), this.$_queuedRelayout$ && (this.$_queuedRelayout$ = !1, this.$_queueRelayout$()));
  };
  $MasonryLayoutCommon$$.$_PHASE_HIDE$ = 1;
  $MasonryLayoutCommon$$.$_PHASE_LAYOUT$ = 2;
  $MasonryLayoutCommon$$.$_PHASE_SHOW$ = 3;
});

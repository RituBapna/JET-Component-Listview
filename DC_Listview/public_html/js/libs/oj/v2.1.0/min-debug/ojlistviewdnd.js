/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
/*
 Copyright 2013 jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license
*/
define(["ojs/ojcore", "jquery", "ojdnd", "ojs/ojlistview"], function($oj$$64$$, $$$$59$$) {
  $oj$$64$$.$ListViewDndContext$ = function $$oj$$64$$$$ListViewDndContext$$($listview$$1$$) {
    this.$listview$ = $listview$$1$$;
  };
  $goog$exportPath_$$("ListViewDndContext", $oj$$64$$.$ListViewDndContext$, $oj$$64$$);
  $oj$$64$$.$Object$.$createSubclass$($oj$$64$$.$ListViewDndContext$, $oj$$64$$.$Object$, "oj.ListViewDndContext");
  $oj$$64$$.$ListViewDndContext$.$C_KEY$ = 67;
  $oj$$64$$.$ListViewDndContext$.$V_KEY$ = 86;
  $oj$$64$$.$ListViewDndContext$.$X_KEY$ = 88;
  $oj$$64$$.$ListViewDndContext$.prototype.$_getDndOptions$ = function $$oj$$64$$$$ListViewDndContext$$$$_getDndOptions$$($op$$1$$) {
    var $dnd$$ = this.$listview$.$GetOption$("dnd");
    return null != $dnd$$ && $dnd$$[$op$$1$$] ? $dnd$$[$op$$1$$].items : null;
  };
  $oj$$64$$.$ListViewDndContext$.prototype.$_getDragOptions$ = function $$oj$$64$$$$ListViewDndContext$$$$_getDragOptions$$() {
    return this.$_getDndOptions$("drag");
  };
  $oj$$64$$.$ListViewDndContext$.prototype.$_getDropOptions$ = function $$oj$$64$$$$ListViewDndContext$$$$_getDropOptions$$() {
    return this.$_getDndOptions$("drop");
  };
  $oj$$64$$.$ListViewDndContext$.prototype.$_isItemReordering$ = function $$oj$$64$$$$ListViewDndContext$$$$_isItemReordering$$() {
    return "enabled" == this.$_getDndOptions$("reorder");
  };
  $oj$$64$$.$ListViewDndContext$.prototype.$_findItem$ = function $$oj$$64$$$$ListViewDndContext$$$$_findItem$$($target$$130$$) {
    return this.$listview$.$FindItem$($target$$130$$);
  };
  $oj$$64$$.$ListViewDndContext$.prototype.$_getSelectedItems$ = function $$oj$$64$$$$ListViewDndContext$$$$_getSelectedItems$$() {
    var $items$$9$$, $selection$$27$$, $i$$435$$, $elem$$107$$;
    $items$$9$$ = [];
    if (this.$listview$.$_isSelectionEnabled$()) {
      for ($selection$$27$$ = this.$listview$.$GetOption$("selection"), $i$$435$$ = 0;$i$$435$$ < $selection$$27$$.length;$i$$435$$++) {
        $elem$$107$$ = this.$listview$.$FindElementByKey$($selection$$27$$[$i$$435$$]), null == $elem$$107$$ || this.$listview$.$SkipFocus$($$$$59$$($elem$$107$$)) || $items$$9$$.push($elem$$107$$);
      }
    } else {
      $elem$$107$$ = this.$_getActiveItem$(), null != $elem$$107$$ && $items$$9$$.push($elem$$107$$);
    }
    null != this.$m_contextMenuItem$ && 0 < this.$m_contextMenuItem$.length && -1 == $items$$9$$.indexOf(this.$m_contextMenuItem$.get(0)) && $items$$9$$.push(this.$m_contextMenuItem$.get(0));
    return $items$$9$$;
  };
  $oj$$64$$.$ListViewDndContext$.prototype.$_getActiveItem$ = function $$oj$$64$$$$ListViewDndContext$$$$_getActiveItem$$() {
    return null == this.$listview$.$m_active$ ? null : this.$listview$.$m_active$.elem[0];
  };
  $oj$$64$$.$ListViewDndContext$.prototype.$itemRenderComplete$ = function $$oj$$64$$$$ListViewDndContext$$$$itemRenderComplete$$($dragHandle_elem$$108$$) {
    var $ariaLabelledBy$$1$$;
    $$$$59$$($dragHandle_elem$$108$$).hasClass(this.$listview$.$getItemStyleClass$()) || ($dragHandle_elem$$108$$ = $dragHandle_elem$$108$$.firstElementChild);
    $dragHandle_elem$$108$$ = $$$$59$$($dragHandle_elem$$108$$).find(".oj-listview-drag-handle");
    null != $dragHandle_elem$$108$$ && 0 < $dragHandle_elem$$108$$.length && ($ariaLabelledBy$$1$$ = $dragHandle_elem$$108$$.attr("aria-labelledby"), null == $ariaLabelledBy$$1$$ ? $dragHandle_elem$$108$$.attr("aria-labelledby", this.$listview$.$_createSubId$("instr")) : $dragHandle_elem$$108$$.attr("aria-labelledby", $ariaLabelledBy$$1$$ + " " + this.$listview$.$_createSubId$("instr")), this.$listview$.$_isTouchSupport$() && $dragHandle_elem$$108$$.attr("draggable", "true"));
  };
  $oj$$64$$.$ListViewDndContext$.prototype.$_setDraggable$ = function $$oj$$64$$$$ListViewDndContext$$$$_setDraggable$$($item$$123_target$$131$$) {
    var $dragger$$, $activeItem$$1_dragHandle$$1$$;
    if (null != this.$_getDragOptions$() || this.$_isItemReordering$()) {
      if ($item$$123_target$$131$$.hasClass("oj-listview-drag-handle")) {
        $dragger$$ = $$$$59$$($item$$123_target$$131$$);
      } else {
        $item$$123_target$$131$$ = this.$_findItem$($item$$123_target$$131$$);
        if (null != $item$$123_target$$131$$) {
          $activeItem$$1_dragHandle$$1$$ = $item$$123_target$$131$$.find(".oj-listview-drag-handle");
          if (null != $activeItem$$1_dragHandle$$1$$ && 0 < $activeItem$$1_dragHandle$$1$$.length) {
            return;
          }
          $item$$123_target$$131$$.addClass("oj-draggable");
        }
        $activeItem$$1_dragHandle$$1$$ = this.$_getActiveItem$();
        null != $activeItem$$1_dragHandle$$1$$ && (null != $item$$123_target$$131$$ && 0 == $item$$123_target$$131$$.find(".oj-listview-drag-handle").length && $item$$123_target$$131$$[0] == $activeItem$$1_dragHandle$$1$$ ? $dragger$$ = $item$$123_target$$131$$ : $$$$59$$($activeItem$$1_dragHandle$$1$$).removeClass("oj-draggable"));
      }
      null != $dragger$$ && $dragger$$.attr("draggable", !0);
    }
  };
  $oj$$64$$.$ListViewDndContext$.prototype.$_unsetDraggable$ = function $$oj$$64$$$$ListViewDndContext$$$$_unsetDraggable$$($dragger$$1_target$$132$$) {
    if (null != this.$_getDragOptions$() || this.$_isItemReordering$()) {
      $dragger$$1_target$$132$$ = $dragger$$1_target$$132$$.hasClass("oj-listview-drag-handle") ? $$$$59$$($dragger$$1_target$$132$$) : this.$_findItem$($dragger$$1_target$$132$$), null != $dragger$$1_target$$132$$ && $dragger$$1_target$$132$$.removeAttr("draggable");
    }
  };
  $oj$$64$$.$ListViewDndContext$.prototype.$_invokeDndCallback$ = function $$oj$$64$$$$ListViewDndContext$$$$_invokeDndCallback$$($dndType$$1_options$$350$$, $callback$$134_callbackType$$2$$, $event$$662$$, $ui$$40$$) {
    var $returnValue$$9$$;
    if ($dndType$$1_options$$350$$ = "drag" === $dndType$$1_options$$350$$ ? this.$_getDragOptions$() : this.$_getDropOptions$()) {
      if (($callback$$134_callbackType$$2$$ = $dndType$$1_options$$350$$[$callback$$134_callbackType$$2$$]) && "function" == typeof $callback$$134_callbackType$$2$$) {
        try {
          $event$$662$$.dataTransfer = $event$$662$$.originalEvent.dataTransfer, $returnValue$$9$$ = $callback$$134_callbackType$$2$$($event$$662$$, $ui$$40$$);
        } catch ($e$$105$$) {
          $oj$$64$$.$Logger$.error("Error: " + $e$$105$$);
        }
      } else {
        return-1;
      }
    }
    return $returnValue$$9$$;
  };
  $oj$$64$$.$ListViewDndContext$.prototype.$_setDragItemDataTransfer$ = function $$oj$$64$$$$ListViewDndContext$$$$_setDragItemDataTransfer$$($event$$663$$, $dataTypes$$4$$, $items$$11$$) {
    var $i$$436$$, $itemDataArray$$ = [], $data$$166$$;
    for ($i$$436$$ = 0;$i$$436$$ < $items$$11$$.length;$i$$436$$++) {
      ($data$$166$$ = this.$listview$.$_getDataForItem$($items$$11$$[$i$$436$$])) && ($data$$166$$.innerHTML && $data$$166$$.tagName && "LI" == $data$$166$$.tagName ? $itemDataArray$$.push($data$$166$$.innerHTML) : $itemDataArray$$.push($data$$166$$));
    }
    return 0 < $itemDataArray$$.length ? (this.$_setDragItemData$($event$$663$$.originalEvent, $dataTypes$$4$$, $itemDataArray$$), this.$_setDragItemImage$($event$$663$$.originalEvent, $items$$11$$), {items:$itemDataArray$$}) : null;
  };
  $oj$$64$$.$ListViewDndContext$.prototype.$_setDragItemData$ = function $$oj$$64$$$$ListViewDndContext$$$$_setDragItemData$$($dataTransfer$$2_nativeEvent$$2$$, $dataTypes$$5$$, $itemDataArray$$1_jsonStr$$2$$) {
    var $i$$437$$;
    $dataTransfer$$2_nativeEvent$$2$$ = $dataTransfer$$2_nativeEvent$$2$$.dataTransfer;
    $itemDataArray$$1_jsonStr$$2$$ = JSON.stringify($itemDataArray$$1_jsonStr$$2$$);
    if ("string" == typeof $dataTypes$$5$$) {
      $dataTransfer$$2_nativeEvent$$2$$.setData($dataTypes$$5$$, $itemDataArray$$1_jsonStr$$2$$);
    } else {
      if ($dataTypes$$5$$) {
        for ($i$$437$$ = 0;$i$$437$$ < $dataTypes$$5$$.length;$i$$437$$++) {
          $dataTransfer$$2_nativeEvent$$2$$.setData($dataTypes$$5$$[$i$$437$$], $itemDataArray$$1_jsonStr$$2$$);
        }
      }
    }
    $dataTransfer$$2_nativeEvent$$2$$.setData("text/ojlistview-dragsource-id", this.$listview$.element.get(0).id);
  };
  $oj$$64$$.$ListViewDndContext$.prototype.$_setDragItemImage$ = function $$oj$$64$$$$ListViewDndContext$$$$_setDragItemImage$$($nativeEvent$$3$$, $items$$12$$) {
    var $dragImage$$1_target$$133$$, $i$$438$$, $minTop$$ = Number.MAX_VALUE, $offsetTop$$1$$, $offsetWidth$$, $clone$$5$$, $left$$11$$ = 0, $top$$12$$ = 0;
    $dragImage$$1_target$$133$$ = $nativeEvent$$3$$.target;
    if (1 < $items$$12$$.length) {
      $dragImage$$1_target$$133$$ = $$$$59$$(document.createElement("ul"));
      $dragImage$$1_target$$133$$.get(0).className = this.$listview$.element.get(0).className;
      $dragImage$$1_target$$133$$.addClass("oj-listview-drag-image").css({width:this.$listview$.element.css("width"), height:this.$listview$.element.css("height")});
      for ($i$$438$$ = 0;$i$$438$$ < $items$$12$$.length;$i$$438$$++) {
        $minTop$$ = Math.min($minTop$$, $items$$12$$[$i$$438$$].offsetTop);
      }
      for ($i$$438$$ = 0;$i$$438$$ < $items$$12$$.length;$i$$438$$++) {
        $offsetTop$$1$$ = $items$$12$$[$i$$438$$].offsetTop - $minTop$$, $offsetWidth$$ = $items$$12$$[$i$$438$$].offsetWidth, $clone$$5$$ = $$$$59$$($items$$12$$[$i$$438$$].cloneNode(!0)), $clone$$5$$.removeClass("oj-selected oj-focus oj-hover").css({position:"absolute", top:$offsetTop$$1$$, width:$offsetWidth$$}), $dragImage$$1_target$$133$$.append($clone$$5$$);
      }
    } else {
      $$$$59$$($dragImage$$1_target$$133$$).hasClass("oj-listview-drag-handle") && ($left$$11$$ = Math.max(0, $dragImage$$1_target$$133$$.offsetLeft - $items$$12$$[0].offsetLeft) + $dragImage$$1_target$$133$$.offsetWidth / 2, $top$$12$$ = $dragImage$$1_target$$133$$.offsetTop + $dragImage$$1_target$$133$$.offsetHeight / 2), $clone$$5$$ = $$$$59$$($items$$12$$[0].cloneNode(!0)), $clone$$5$$.removeClass("oj-selected oj-focus oj-hover").addClass("oj-drag"), $dragImage$$1_target$$133$$ = $$$$59$$(document.createElement("ul")), 
      $dragImage$$1_target$$133$$.get(0).className = this.$listview$.element.get(0).className, $dragImage$$1_target$$133$$.addClass("oj-listview-drag-image").css({width:this.$listview$.element.css("width"), height:2 * $items$$12$$[0].offsetHeight}).append($clone$$5$$);
    }
    $$$$59$$("body").append($dragImage$$1_target$$133$$);
    this.$m_dragImage$ = $dragImage$$1_target$$133$$;
    $nativeEvent$$3$$.dataTransfer.setDragImage($dragImage$$1_target$$133$$.get(0), $left$$11$$, $top$$12$$);
  };
  $oj$$64$$.$ListViewDndContext$.prototype.$_handleDragStart$ = function $$oj$$64$$$$ListViewDndContext$$$$_handleDragStart$$($event$$664_ret$$62$$) {
    var $options$$351_ui$$41$$, $dataTypes$$6$$, $items$$13$$;
    $options$$351_ui$$41$$ = this.$_getDragOptions$();
    if (null != $options$$351_ui$$41$$ || this.$_isItemReordering$()) {
      if ($dataTypes$$6$$ = null != $options$$351_ui$$41$$ ? $options$$351_ui$$41$$.dataTypes : "text/ojlistview-items-data", $$$$59$$($event$$664_ret$$62$$.target).hasClass("oj-listview-drag-handle") ? ($items$$13$$ = [], $items$$13$$.push(this.$_findItem$($event$$664_ret$$62$$.target)[0])) : $items$$13$$ = this.$_getSelectedItems$(), 0 < $items$$13$$.length) {
        if (null == $options$$351_ui$$41$$ && 1 < $items$$13$$.length) {
          return!1;
        }
        this.$m_dragItems$ = $items$$13$$;
        this.$m_currentDragItem$ = $$$$59$$($items$$13$$[0]);
        if ($options$$351_ui$$41$$ = this.$_setDragItemDataTransfer$($event$$664_ret$$62$$, $dataTypes$$6$$, $items$$13$$)) {
          if ($event$$664_ret$$62$$ = this.$_invokeDndCallback$("drag", "dragStart", $event$$664_ret$$62$$, $options$$351_ui$$41$$), -1 !== $event$$664_ret$$62$$) {
            return $event$$664_ret$$62$$;
          }
        } else {
          return!1;
        }
      }
    }
  };
  $oj$$64$$.$ListViewDndContext$.prototype.$_handleDrag$ = function $$oj$$64$$$$ListViewDndContext$$$$_handleDrag$$($event$$665$$) {
    return this.$_invokeDndCallback$("drag", "drag", $event$$665$$);
  };
  $oj$$64$$.$ListViewDndContext$.prototype.$_destroyDragImage$ = function $$oj$$64$$$$ListViewDndContext$$$$_destroyDragImage$$() {
    null != this.$m_dragImage$ && (this.$m_dragImage$.remove(), this.$m_dragImage$ = null);
  };
  $oj$$64$$.$ListViewDndContext$.prototype.$_handleDragEnd$ = function $$oj$$64$$$$ListViewDndContext$$$$_handleDragEnd$$($event$$666$$) {
    var $i$$439$$;
    if (null != this.$m_currentDragItem$ && null != this.$m_dragItems$) {
      for (this.$m_currentDragItem$.find(".oj-listview-drag-handle").removeAttr("draggable"), this.$m_currentDragItem$.removeClass("oj-drag oj-draggable").removeAttr("draggable"), $i$$439$$ = 0;$i$$439$$ < this.$m_dragItems$.length;$i$$439$$++) {
        $$$$59$$(this.$m_dragItems$[$i$$439$$]).css("display", "block");
      }
    }
    this.$_cleanupDropTarget$();
    this.$_destroyDragImage$();
    this.$_invokeDndCallback$("drag", "dragEnd", $event$$666$$);
    this.$m_currentDragItem$ = this.$m_dragImage$ = null;
  };
  $oj$$64$$.$ListViewDndContext$.prototype.$_matchDragDataType$ = function $$oj$$64$$$$ListViewDndContext$$$$_matchDragDataType$$($dragDataTypes$$1_event$$667$$) {
    var $allowedTypeArray$$1_allowedTypes$$1_options$$352$$, $i$$440$$;
    $allowedTypeArray$$1_allowedTypes$$1_options$$352$$ = this.$_getDropOptions$();
    if (this.$_isItemReordering$() && null == $allowedTypeArray$$1_allowedTypes$$1_options$$352$$) {
      return!0;
    }
    if ($allowedTypeArray$$1_allowedTypes$$1_options$$352$$ && $allowedTypeArray$$1_allowedTypes$$1_options$$352$$.dataTypes) {
      for ($allowedTypeArray$$1_allowedTypes$$1_options$$352$$ = $allowedTypeArray$$1_allowedTypes$$1_options$$352$$.dataTypes, $allowedTypeArray$$1_allowedTypes$$1_options$$352$$ = "string" == typeof $allowedTypeArray$$1_allowedTypes$$1_options$$352$$ ? [$allowedTypeArray$$1_allowedTypes$$1_options$$352$$] : $allowedTypeArray$$1_allowedTypes$$1_options$$352$$, $dragDataTypes$$1_event$$667$$ = $dragDataTypes$$1_event$$667$$.originalEvent.dataTransfer.types, $i$$440$$ = 0;$i$$440$$ < $dragDataTypes$$1_event$$667$$.length;$i$$440$$++) {
        if (0 <= $allowedTypeArray$$1_allowedTypes$$1_options$$352$$.indexOf($dragDataTypes$$1_event$$667$$[$i$$440$$])) {
          return!0;
        }
      }
    }
    return!1;
  };
  $oj$$64$$.$ListViewDndContext$.prototype.$_invokeDropCallback$ = function $$oj$$64$$$$ListViewDndContext$$$$_invokeDropCallback$$($callbackType$$3_returnValue$$10$$, $event$$668$$, $ui$$42$$) {
    $callbackType$$3_returnValue$$10$$ = this.$_invokeDndCallback$("drop", $callbackType$$3_returnValue$$10$$, $event$$668$$, $ui$$42$$);
    (void 0 === $callbackType$$3_returnValue$$10$$ || -1 === $callbackType$$3_returnValue$$10$$) && this.$_matchDragDataType$($event$$668$$) && $event$$668$$.preventDefault();
    return $callbackType$$3_returnValue$$10$$;
  };
  $oj$$64$$.$ListViewDndContext$.prototype.$_createDropTarget$ = function $$oj$$64$$$$ListViewDndContext$$$$_createDropTarget$$($item$$124$$) {
    var $dropTarget$$;
    null == this.$m_dropTarget$ && ($dropTarget$$ = $$$$59$$($item$$124$$.get(0).cloneNode(!1)), $dropTarget$$.addClass("oj-drop").removeClass("oj-drag oj-draggable oj-hover oj-focus oj-selected").css({display:"block", height:$item$$124$$.outerHeight()}), this.$m_dropTarget$ = $dropTarget$$);
    return this.$m_dropTarget$;
  };
  $oj$$64$$.$ListViewDndContext$.prototype.$_cleanupGroupItem$ = function $$oj$$64$$$$ListViewDndContext$$$$_cleanupGroupItem$$() {
    null != this.$m_currentDropItem$ && -1 === this.$m_dropTargetIndex$ && this.$m_currentDropItem$.children("." + this.$listview$.$getGroupItemStyleClass$()).removeClass("oj-drop");
  };
  $oj$$64$$.$ListViewDndContext$.prototype.$_cleanupDropTarget$ = function $$oj$$64$$$$ListViewDndContext$$$$_cleanupDropTarget$$() {
    null != this.$m_dropTarget$ && (this.$m_dropTarget$.css("height", "0"), this.$m_dropTarget$.remove(), this.$m_dropTarget$ = null);
    this.$_cleanupGroupItem$();
  };
  $oj$$64$$.$ListViewDndContext$.prototype.$_handleDragEnter$ = function $$oj$$64$$$$ListViewDndContext$$$$_handleDragEnter$$($event$$669_returnValue$$11$$) {
    var $item$$125$$;
    $item$$125$$ = this.$_findItem$($event$$669_returnValue$$11$$.target);
    $event$$669_returnValue$$11$$ = this.$_invokeDropCallback$("dragEnter", $event$$669_returnValue$$11$$, {item:$item$$125$$.get(0)});
    if (-1 != $event$$669_returnValue$$11$$) {
      return $event$$669_returnValue$$11$$;
    }
  };
  $oj$$64$$.$ListViewDndContext$.prototype.$_setCurrentDropItem$ = function $$oj$$64$$$$ListViewDndContext$$$$_setCurrentDropItem$$($item$$126$$) {
    null != this.$m_currentDropItem$ && this.$m_currentDropItem$.removeClass("oj-valid-drop oj-invalid-drop");
    this.$m_currentDropItem$ = $item$$126$$;
    this.$m_currentDropItem$.addClass("oj-valid-drop");
  };
  $oj$$64$$.$ListViewDndContext$.prototype.$_setAccInfo$ = function $$oj$$64$$$$ListViewDndContext$$$$_setAccInfo$$($item$$127$$, $position$$35$$) {
    var $label$$19_msg$$26$$;
    $label$$19_msg$$26$$ = $item$$127$$.attr("aria-label");
    null == $label$$19_msg$$26$$ && ($label$$19_msg$$26$$ = $item$$127$$.text());
    $label$$19_msg$$26$$ = this.$listview$.$ojContext$.$getTranslatedString$("accessibleReorder" + $position$$35$$.charAt(0).toUpperCase() + $position$$35$$.substr(1) + "Item", {item:$label$$19_msg$$26$$});
    this.$listview$.$_setAccInfoText$($label$$19_msg$$26$$);
  };
  $oj$$64$$.$ListViewDndContext$.prototype.$_adjustGroupItemStyle$ = function $$oj$$64$$$$ListViewDndContext$$$$_adjustGroupItemStyle$$() {
    null == this.$m_maxHeightAdjusted$ && this.$listview$.$_isTouchSupport$() && (this.$listview$.element.find("ul." + this.$listview$.$getGroupStyleClass$()).each(function() {
      $$$$59$$(this).attr("oldMaxHeight", $$$$59$$(this).css("maxHeight").toString());
      $$$$59$$(this).css("maxHeight", 1E4);
    }), this.$m_maxHeightAdjusted$ = "adjusted");
  };
  $oj$$64$$.$ListViewDndContext$.prototype.$_restoreGroupItemStyle$ = function $$oj$$64$$$$ListViewDndContext$$$$_restoreGroupItemStyle$$() {
    this.$listview$.$_isTouchSupport$() && this.$listview$.element.find("ul." + this.$listview$.$getGroupStyleClass$()).each(function() {
      $$$$59$$(this).css("maxHeight", parseInt($$$$59$$(this).attr("oldMaxHeight"), 10));
      $$$$59$$(this).removeAttr("oldMaxHeight");
    });
    this.$m_maxHeightAdjusted$ = null;
  };
  $oj$$64$$.$ListViewDndContext$.prototype.$_handleDragOver$ = function $$oj$$64$$$$ListViewDndContext$$$$_handleDragOver$$($event$$670_i$$441$$) {
    var $item$$128$$, $dropTarget$$1$$, $returnValue$$12$$, $index$$311$$;
    if (null != this.$_getDropOptions$() || this.$_isItemReordering$()) {
      this.$_adjustGroupItemStyle$();
      if (null != this.$m_dragItems$ && "none" != $$$$59$$(this.$m_dragItems$[0]).css("display")) {
        $item$$128$$ = $$$$59$$(this.$m_dragItems$[0]);
        $dropTarget$$1$$ = this.$_createDropTarget$($item$$128$$);
        for ($event$$670_i$$441$$ = 0;$event$$670_i$$441$$ < this.$m_dragItems$.length;$event$$670_i$$441$$++) {
          $$$$59$$(this.$m_dragItems$[$event$$670_i$$441$$]).css("display", "none");
        }
        $dropTarget$$1$$.insertBefore($item$$128$$);
        this.$m_dropTargetIndex$ = $dropTarget$$1$$.index();
      } else {
        $item$$128$$ = this.$_findItem$($event$$670_i$$441$$.target), null != $item$$128$$ && 0 < $item$$128$$.length && ($returnValue$$12$$ = this.$_invokeDropCallback$("dragOver", $event$$670_i$$441$$, {item:$item$$128$$.get(0)}), -1 === $returnValue$$12$$ && this.$_isItemReordering$() || !1 === $returnValue$$12$$ || $event$$670_i$$441$$.isDefaultPrevented() ? ($item$$128$$.hasClass(this.$listview$.$getItemStyleClass$()) ? (this.$_cleanupGroupItem$(), $item$$128$$.hasClass("oj-drop") || ($dropTarget$$1$$ = 
        this.$_createDropTarget$($item$$128$$), $index$$311$$ = $item$$128$$.index(), null == this.$m_dropTargetIndex$ || this.$m_dropTargetIndex$ < $index$$311$$ ? ($dropTarget$$1$$.insertAfter($item$$128$$), this.$m_dropPosition$ = "after") : ($dropTarget$$1$$.insertBefore($item$$128$$), this.$m_dropPosition$ = "before"), this.$_setAccInfo$($item$$128$$, this.$m_dropPosition$), this.$_setCurrentDropItem$($item$$128$$), this.$m_dropTargetIndex$ = $dropTarget$$1$$.index())) : (this.$_cleanupDropTarget$(), 
        $item$$128$$.children("." + this.$listview$.$getGroupItemStyleClass$()).addClass("oj-drop"), this.$_setCurrentDropItem$($item$$128$$), this.$m_dropTargetIndex$ = -1, this.$m_dropPosition$ = "inside", this.$_setAccInfo$($item$$128$$, this.$m_dropPosition$)), $event$$670_i$$441$$.preventDefault()) : $$$$59$$($event$$670_i$$441$$.target).hasClass(this.$listview$.$getGroupStyleClass$()) || ($item$$128$$.addClass("oj-invalid-drop"), this.$_cleanupDropTarget$()));
      }
      return $returnValue$$12$$;
    }
  };
  $oj$$64$$.$ListViewDndContext$.prototype.$_isDndEventInElement$ = function $$oj$$64$$$$ListViewDndContext$$$$_isDndEventInElement$$($event$$671$$, $element$$173$$) {
    var $rect$$3$$, $domEvent$$1$$;
    $rect$$3$$ = $element$$173$$.getBoundingClientRect();
    $domEvent$$1$$ = $event$$671$$.originalEvent;
    return $domEvent$$1$$.clientX >= $rect$$3$$.left && $domEvent$$1$$.clientX < $rect$$3$$.right && $domEvent$$1$$.clientY >= $rect$$3$$.top && $domEvent$$1$$.clientY < $rect$$3$$.bottom;
  };
  $oj$$64$$.$ListViewDndContext$.prototype.$_handleDragLeave$ = function $$oj$$64$$$$ListViewDndContext$$$$_handleDragLeave$$($event$$672$$) {
    var $item$$129$$, $returnValue$$13$$;
    if (null != this.$m_currentDropItem$ && ($item$$129$$ = this.$_findItem$($event$$672$$.target), null != $item$$129$$ && 0 < $item$$129$$.length && ($item$$129$$.removeClass("oj-valid-drop oj-invalid-drop"), $returnValue$$13$$ = this.$_invokeDropCallback$("dragLeave", $event$$672$$, {item:$item$$129$$.get(0)}), this.$_isDndEventInElement$($event$$672$$, $event$$672$$.currentTarget) || (this.$_cleanupDropTarget$(), this.$_restoreGroupItemStyle$())), -1 != $returnValue$$13$$)) {
      return $returnValue$$13$$;
    }
  };
  $oj$$64$$.$ListViewDndContext$.prototype.$_handleDrop$ = function $$oj$$64$$$$ListViewDndContext$$$$_handleDrop$$($event$$673$$) {
    var $returnValue$$14_source$$13$$, $ui$$43$$;
    if (null != this.$m_currentDropItem$ && ($returnValue$$14_source$$13$$ = $event$$673$$.originalEvent.dataTransfer.getData("text/ojlistview-dragsource-id"), $ui$$43$$ = {item:this.$m_currentDropItem$.get(0), position:this.$m_dropPosition$}, this.$_isItemReordering$() && $returnValue$$14_source$$13$$ === this.$listview$.element.get(0).id ? $ui$$43$$.reorder = !0 : $ui$$43$$.reorder = !1, $returnValue$$14_source$$13$$ = this.$_invokeDropCallback$("drop", $event$$673$$, $ui$$43$$), $ui$$43$$.reorder && 
    ($ui$$43$$.items = this.$m_dragItems$, $ui$$43$$.reference = $ui$$43$$.item, this.$listview$.$Trigger$("reorder", $event$$673$$, $ui$$43$$), $event$$673$$.preventDefault()), null != this.$m_currentDropItem$ && this.$m_currentDropItem$.removeClass("oj-valid-drop"), this.$_cleanupDropTarget$(), this.$_restoreGroupItemStyle$(), this.$_destroyDragImage$(), this.$m_currentDropItem$ = null, this.$m_dropTargetIndex$ = -1, this.$m_dropPosition$ = null, -1 !== $returnValue$$14_source$$13$$)) {
      return $returnValue$$14_source$$13$$;
    }
  };
  $oj$$64$$.$ListViewDndContext$.prototype.$addContextMenu$ = function $$oj$$64$$$$ListViewDndContext$$$$addContextMenu$$($contextMenu$$4_menuContainer$$3$$) {
    var $self$$210$$ = this, $listItems$$3$$, $menuItemsSet$$;
    this.$_isItemReordering$() && (void 0 == $contextMenu$$4_menuContainer$$3$$ && ($contextMenu$$4_menuContainer$$3$$ = this.$listview$.$GetOption$("contextMenu")), null != $contextMenu$$4_menuContainer$$3$$ && (null == this.$m_menuItemsSet$ && (this.$m_menuItemsSet$ = []), $contextMenu$$4_menuContainer$$3$$ = $$$$59$$($contextMenu$$4_menuContainer$$3$$), $listItems$$3$$ = $contextMenu$$4_menuContainer$$3$$.find("[data-oj-command]"), $menuItemsSet$$ = [], $listItems$$3$$.each(function() {
      var $command$$14$$, $newListItem$$1$$;
      0 === $$$$59$$(this).children("a").length ? 0 == $$$$59$$(this).attr("data-oj-command").indexOf("oj-listview-") && ($command$$14$$ = $$$$59$$(this).attr("data-oj-command").substring(12), $newListItem$$1$$ = $self$$210$$.$_buildContextMenuItem$($command$$14$$), $newListItem$$1$$.get(0).className = $$$$59$$(this).get(0).className, $$$$59$$(this).replaceWith($newListItem$$1$$)) : ($command$$14$$ = $$$$59$$(this).attr("data-oj-command"), "pasteBefore" == $command$$14$$ ? $command$$14$$ = "paste-before" : 
      "pasteAfter" == $command$$14$$ && ($command$$14$$ = "paste-after"));
      null != $command$$14$$ && $menuItemsSet$$.push($command$$14$$);
    }), this.$m_menuItemsSet$ = $menuItemsSet$$, 0 < $menuItemsSet$$.length && ($contextMenu$$4_menuContainer$$3$$.data("oj-ojMenu") && $contextMenu$$4_menuContainer$$3$$.ojMenu("refresh"), $contextMenu$$4_menuContainer$$3$$.on("ojselect", this.$_handleContextMenuSelect$.bind(this)))));
  };
  $oj$$64$$.$ListViewDndContext$.prototype.$_buildContextMenuItem$ = function $$oj$$64$$$$ListViewDndContext$$$$_buildContextMenuItem$$($command$$15$$) {
    return "paste-before" === $command$$15$$ ? this.$_buildContextMenuListItem$("pasteBefore") : "paste-after" === $command$$15$$ ? this.$_buildContextMenuListItem$("pasteAfter") : this.$_buildContextMenuListItem$($command$$15$$);
  };
  $oj$$64$$.$ListViewDndContext$.prototype.$_buildContextMenuListItem$ = function $$oj$$64$$$$ListViewDndContext$$$$_buildContextMenuListItem$$($command$$16$$) {
    var $listItem$$1$$ = $$$$59$$("\x3cli\x3e\x3c/li\x3e");
    $listItem$$1$$.attr("data-oj-command", $command$$16$$);
    $listItem$$1$$.append(this.$_buildContextMenuLabel$($command$$16$$));
    return $listItem$$1$$;
  };
  $oj$$64$$.$ListViewDndContext$.prototype.$_buildContextMenuLabel$ = function $$oj$$64$$$$ListViewDndContext$$$$_buildContextMenuLabel$$($command$$17_key$$191$$) {
    $command$$17_key$$191$$ = "label" + $command$$17_key$$191$$.charAt(0).toUpperCase() + $command$$17_key$$191$$.slice(1);
    return $$$$59$$('\x3ca href\x3d"#"\x3e\x3c/a\x3e').text(this.$listview$.$ojContext$.$getTranslatedString$($command$$17_key$$191$$));
  };
  $oj$$64$$.$ListViewDndContext$.prototype.$_handleCut$ = function $$oj$$64$$$$ListViewDndContext$$$$_handleCut$$($event$$674$$) {
    var $items$$14$$;
    null != this.$m_clipboard$ && $$$$59$$(this.$m_clipboard$).removeClass("oj-listview-cut");
    $items$$14$$ = this.$_getSelectedItems$();
    $$$$59$$($items$$14$$).addClass("oj-listview-cut");
    this.$m_clipboard$ = $items$$14$$;
    this.$listview$.$Trigger$("cut", $event$$674$$, {items:$items$$14$$});
  };
  $oj$$64$$.$ListViewDndContext$.prototype.$_handleCopy$ = function $$oj$$64$$$$ListViewDndContext$$$$_handleCopy$$($event$$675$$) {
    var $items$$15$$;
    null != this.$m_clipboard$ && $$$$59$$(this.$m_clipboard$).removeClass("oj-listview-cut");
    this.$m_clipboard$ = $items$$15$$ = this.$_getSelectedItems$();
    this.$listview$.$Trigger$("copy", $event$$675$$, {items:$items$$15$$});
  };
  $oj$$64$$.$ListViewDndContext$.prototype.$_handlePaste$ = function $$oj$$64$$$$ListViewDndContext$$$$_handlePaste$$($event$$676$$, $item$$131$$, $position$$36$$) {
    this.$listview$.$Trigger$("paste", $event$$676$$, {item:$item$$131$$.get(0)});
    $$$$59$$(this.$m_clipboard$).removeClass("oj-listview-cut");
    this.$listview$.$Trigger$("reorder", $event$$676$$, {items:this.$m_clipboard$, position:$position$$36$$, reference:$item$$131$$.get(0)});
    this.$m_clipboard$ = null;
  };
  $oj$$64$$.$ListViewDndContext$.prototype.$_handleContextMenuSelect$ = function $$oj$$64$$$$ListViewDndContext$$$$_handleContextMenuSelect$$($event$$677$$, $ui$$44$$) {
    if (null != this.$m_contextMenuItem$) {
      switch($ui$$44$$.item.attr("data-oj-command")) {
        case "cut":
          this.$_handleCut$($event$$677$$);
          break;
        case "copy":
          this.$_handleCopy$($event$$677$$);
          break;
        case "paste":
          var $inside$$ = !0;
        case "pasteBefore":
          var $before$$4$$ = !0;
        case "pasteAfter":
          var $position$$37$$ = "after";
          $inside$$ ? $position$$37$$ = "inside" : $before$$4$$ && ($position$$37$$ = "before");
          this.$_handlePaste$($event$$677$$, this.$m_contextMenuItem$, $position$$37$$);
          this.$m_contextMenuItem$ = null;
      }
    }
  };
  $oj$$64$$.$ListViewDndContext$.prototype.$_appendToMenuContainer$ = function $$oj$$64$$$$ListViewDndContext$$$$_appendToMenuContainer$$($menuContainer$$4$$, $command$$18$$) {
    null != this.$m_menuItemsSet$ && ("paste-before" == $command$$18$$ ? $command$$18$$ = "pasteBefore" : "paste-after" == $command$$18$$ && ($command$$18$$ = "pasteAfter"), $menuContainer$$4$$.find("[data-oj-command\x3d'" + $command$$18$$ + "']").removeClass("oj-disabled"));
  };
  $oj$$64$$.$ListViewDndContext$.prototype.$_handleContextMenuBeforeOpen$ = function $$oj$$64$$$$ListViewDndContext$$$$_handleContextMenuBeforeOpen$$($menuContainer$$5$$, $event$$678$$) {
    var $item$$132$$;
    $menuContainer$$5$$.find("[data-oj-command]").addClass("oj-disabled");
    $item$$132$$ = this.$_findItem$($event$$678$$.originalEvent.target);
    null == $item$$132$$ || null == this.$m_menuItemsSet$ || 0 == this.$m_menuItemsSet$.length ? $menuContainer$$5$$.ojMenu("refresh") : ($item$$132$$.children().first().hasClass(this.$listview$.$getGroupItemStyleClass$()) ? null != this.$m_clipboard$ && this.$_appendToMenuContainer$($menuContainer$$5$$, "paste") : (this.$_appendToMenuContainer$($menuContainer$$5$$, "cut"), this.$_appendToMenuContainer$($menuContainer$$5$$, "copy"), null != this.$m_clipboard$ && (this.$_appendToMenuContainer$($menuContainer$$5$$, 
    "paste-before"), this.$_appendToMenuContainer$($menuContainer$$5$$, "paste-after"))), $menuContainer$$5$$.ojMenu("refresh"), this.$m_contextMenuItem$ = $item$$132$$);
  };
  $oj$$64$$.$ListViewDndContext$.prototype.$HandleKeyDown$ = function $$oj$$64$$$$ListViewDndContext$$$$HandleKeyDown$$($event$$679$$) {
    var $active$$8_keyCode$$29$$, $position$$38$$;
    if (!this.$_isItemReordering$() || null == this.$m_menuItemsSet$ || 0 == this.$m_menuItemsSet$.length) {
      return!1;
    }
    if ($event$$679$$.ctrlKey || $event$$679$$.metaKey) {
      $active$$8_keyCode$$29$$ = $event$$679$$.keyCode;
      if ($active$$8_keyCode$$29$$ === $oj$$64$$.$ListViewDndContext$.$X_KEY$ && -1 < this.$m_menuItemsSet$.indexOf("cut")) {
        return this.$_handleCut$($event$$679$$), !0;
      }
      if ($active$$8_keyCode$$29$$ === $oj$$64$$.$ListViewDndContext$.$C_KEY$ && -1 < this.$m_menuItemsSet$.indexOf("copy")) {
        return this.$_handleCopy$($event$$679$$), !0;
      }
      if ($active$$8_keyCode$$29$$ === $oj$$64$$.$ListViewDndContext$.$V_KEY$ && null != this.$m_clipboard$ && ($active$$8_keyCode$$29$$ = $$$$59$$(this.$_getActiveItem$()), $active$$8_keyCode$$29$$.children().first().hasClass(this.$listview$.$getGroupItemStyleClass$()) ? -1 < this.$m_menuItemsSet$.indexOf("paste") && ($position$$38$$ = "inside") : -1 < this.$m_menuItemsSet$.indexOf("paste-before") ? $position$$38$$ = "before" : -1 < this.$m_menuItemsSet$.indexOf("paste-after") && ($position$$38$$ = 
      "after"), null != $position$$38$$)) {
        return this.$_handlePaste$($event$$679$$, $active$$8_keyCode$$29$$, $position$$38$$), !0;
      }
    }
    return!1;
  };
});

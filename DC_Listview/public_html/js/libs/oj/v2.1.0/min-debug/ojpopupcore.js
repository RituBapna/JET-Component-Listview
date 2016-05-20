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
define(["ojs/ojcore", "jquery", "ojs/ojcomponentcore", "jqueryui-amd/position"], function($oj$$28$$, $$$$25$$) {
  $oj$$28$$.$PositionUtils$ = {};
  $oj$$28$$.$PositionUtils$.$normalizeHorizontalAlignment$ = function $$oj$$28$$$$PositionUtils$$$normalizeHorizontalAlignment$$($position$$16$$, $isRtl$$2$$) {
    for (var $target$$122$$ = $$$$25$$.extend({}, $position$$16$$), $i$$379$$ = 0;$i$$379$$ < $oj$$28$$.$PositionUtils$.$_ALIGN_RULE_PROPERTIES$.length;$i$$379$$++) {
      var $propName$$4$$ = $oj$$28$$.$PositionUtils$.$_ALIGN_RULE_PROPERTIES$[$i$$379$$], $align$$ = $target$$122$$[$propName$$4$$];
      $align$$ && ($target$$122$$[$propName$$4$$] = $align$$.replace("start", $isRtl$$2$$ ? "right" : "left").replace("end", $isRtl$$2$$ ? "left" : "right").replace("\x3c", $isRtl$$2$$ ? "+" : "-").replace("\x3e", $isRtl$$2$$ ? "-" : "+"));
    }
    return $target$$122$$;
  };
  $oj$$28$$.$PositionUtils$.$normalizePositionOf$ = function $$oj$$28$$$$PositionUtils$$$normalizePositionOf$$($of$$, $launcher$$10$$, $event$$478$$) {
    return "event" === $of$$ ? $event$$478$$ : null == $of$$ || "launcher" === $of$$ ? $launcher$$10$$ : $of$$;
  };
  $oj$$28$$.$PositionUtils$.$_normalizeEventForPosition$ = function $$oj$$28$$$$PositionUtils$$$_normalizeEventForPosition$$($event$$479$$) {
    $$$$25$$.each(["pageX", "pageY"], function($index$$231$$, $pagePos$$) {
      if ($event$$479$$ && void 0 === $event$$479$$[$pagePos$$] && $event$$479$$.originalEvent) {
        var $firstTouch$$2_originalEvent$$2$$ = $event$$479$$.originalEvent, $touchList_type$$88$$ = $firstTouch$$2_originalEvent$$2$$.type;
        ($touchList_type$$88$$ = "touchstart" === $touchList_type$$88$$ || "touchmove" === $touchList_type$$88$$ ? "touches" : "touchend" === $touchList_type$$88$$ ? "changedTouches" : null) && ($firstTouch$$2_originalEvent$$2$$ = $firstTouch$$2_originalEvent$$2$$[$touchList_type$$88$$][0]) && ($event$$479$$[$pagePos$$] = $firstTouch$$2_originalEvent$$2$$[$pagePos$$]);
      }
    });
  };
  $oj$$28$$.$PositionUtils$.$_ALIGN_RULE_PROPERTIES$ = ["my", "at"];
  $oj$$28$$.$PositionUtils$.$isAligningPositionClipped$ = function $$oj$$28$$$$PositionUtils$$$isAligningPositionClipped$$($props$$15$$) {
    return $props$$15$$.target && 0 < $props$$15$$.target.height && 0 < $props$$15$$.target.width ? !$oj$$28$$.$DomUtils$.$isWithinViewport$($props$$15$$.target.element) : !1;
  };
  $$$$25$$.ui.position.flipcenter = {left:function $$$$$25$$$ui$position$flipcenter$left$($position$$17$$, $data$$142$$) {
    var $posLeft$$ = $position$$17$$.left;
    $$$$25$$.ui.position.flip.left.call(this, $position$$17$$, $data$$142$$);
    var $overRight_within$$ = $data$$142$$.within, $dirFactor_withinOffset$$ = $overRight_within$$.isWindow ? $overRight_within$$.scrollLeft : $overRight_within$$.offset.left, $collisionPosLeft$$ = $position$$17$$.left - $data$$142$$.collisionPosition.marginLeft, $overRight_within$$ = $collisionPosLeft$$ + $data$$142$$.collisionWidth - $overRight_within$$.width - $dirFactor_withinOffset$$;
    if (0 < $dirFactor_withinOffset$$ - $collisionPosLeft$$ || 0 < $overRight_within$$) {
      "right" === $data$$142$$.at[0] ? $posLeft$$ -= $data$$142$$.targetWidth / 2 : "left" === $data$$142$$.at[0] && ($posLeft$$ += $data$$142$$.targetWidth / 2), $dirFactor_withinOffset$$ = "rtl" === $oj$$28$$.$DomUtils$.$getReadingDirection$() ? -1 : 1, $posLeft$$ -= $data$$142$$.elemWidth / 2 * $dirFactor_withinOffset$$, $position$$17$$.left = $posLeft$$;
    }
  }, top:function $$$$$25$$$ui$position$flipcenter$top$($position$$18$$, $data$$143$$) {
    var $posTop$$ = $position$$18$$.top;
    $$$$25$$.ui.position.flip.top.call(this, $position$$18$$, $data$$143$$);
    var $within$$1_withinOffset$$1$$ = $data$$143$$.within, $within$$1_withinOffset$$1$$ = $within$$1_withinOffset$$1$$.isWindow ? $within$$1_withinOffset$$1$$.scrollTop : $within$$1_withinOffset$$1$$.offset.top, $collisionPosTop$$ = $position$$18$$.top - $data$$143$$.collisionPosition.marginTop, $overBottom$$ = $collisionPosTop$$ + $data$$143$$.collisionHeight - $data$$143$$.within.height - $within$$1_withinOffset$$1$$;
    if (0 < $within$$1_withinOffset$$1$$ - $collisionPosTop$$ || 0 < $overBottom$$) {
      "top" === $data$$143$$.at[1] ? $posTop$$ += $data$$143$$.targetHeight / 2 : "bottom" === $data$$143$$.at[1] && ($posTop$$ -= $data$$143$$.targetHeight / 2), $posTop$$ += $data$$143$$.elemHeight / 2, $position$$18$$.top = $posTop$$;
    }
  }};
  $$$$25$$.ui.position.flip = {left:function $$$$$25$$$ui$position$flip$left$($position$$19$$, $data$$144$$) {
    var $offsetLeft_within$$2$$ = $data$$144$$.within, $withinOffset$$2$$ = $offsetLeft_within$$2$$.offset.left + $offsetLeft_within$$2$$.scrollLeft, $outerWidth$$1$$ = $offsetLeft_within$$2$$.width, $offsetLeft_within$$2$$ = $offsetLeft_within$$2$$.isWindow ? $offsetLeft_within$$2$$.scrollLeft : $offsetLeft_within$$2$$.offset.left, $collisionPosLeft$$1_overRight$$1$$ = $position$$19$$.left - $data$$144$$.collisionPosition.marginLeft, $overLeft$$1$$ = $collisionPosLeft$$1_overRight$$1$$ - $offsetLeft_within$$2$$, 
    $collisionPosLeft$$1_overRight$$1$$ = $collisionPosLeft$$1_overRight$$1$$ + $data$$144$$.collisionWidth - $outerWidth$$1$$ - $offsetLeft_within$$2$$, $myOffset$$ = "left" === $data$$144$$.my[0] ? -$data$$144$$.elemWidth : "right" === $data$$144$$.my[0] ? $data$$144$$.elemWidth : 0, $atOffset$$ = "left" === $data$$144$$.at[0] ? $data$$144$$.targetWidth : "right" === $data$$144$$.at[0] ? -$data$$144$$.targetWidth : 0, $offset$$23$$ = -2 * $data$$144$$.offset[0], $newOverRight$$, $newOverLeft$$;
    if (0 > $overLeft$$1$$ && Math.abs($newOverRight$$) < Math.abs($newOverLeft$$)) {
      if ($newOverRight$$ = $position$$19$$.left + $myOffset$$ + $atOffset$$ + $offset$$23$$ + $data$$144$$.collisionWidth - $outerWidth$$1$$ - $withinOffset$$2$$, 0 > $newOverRight$$ || $newOverRight$$ < Math.abs($overLeft$$1$$)) {
        $position$$19$$.left += $myOffset$$ + $atOffset$$ + $offset$$23$$;
      }
    } else {
      0 < $collisionPosLeft$$1_overRight$$1$$ && ($newOverLeft$$ = $position$$19$$.left - $data$$144$$.collisionPosition.marginLeft + $myOffset$$ + $atOffset$$ + $offset$$23$$ - $offsetLeft_within$$2$$, 0 < $newOverLeft$$ || Math.abs($newOverLeft$$) < $collisionPosLeft$$1_overRight$$1$$) && ($position$$19$$.left += $myOffset$$ + $atOffset$$ + $offset$$23$$);
    }
  }, top:function $$$$$25$$$ui$position$flip$top$($position$$20$$, $data$$145$$) {
    var $overTop$$1_within$$3$$ = $data$$145$$.within, $newOverBottom_newOverTop_withinOffset$$3$$ = $overTop$$1_within$$3$$.offset.top + $overTop$$1_within$$3$$.scrollTop, $outerHeight$$1$$ = $overTop$$1_within$$3$$.height, $offsetTop$$ = $overTop$$1_within$$3$$.isWindow ? $overTop$$1_within$$3$$.scrollTop : $overTop$$1_within$$3$$.offset.top, $collisionPosTop$$1_overBottom$$1$$ = $position$$20$$.top - $data$$145$$.collisionPosition.marginTop, $overTop$$1_within$$3$$ = $collisionPosTop$$1_overBottom$$1$$ - 
    $offsetTop$$, $collisionPosTop$$1_overBottom$$1$$ = $collisionPosTop$$1_overBottom$$1$$ + $data$$145$$.collisionHeight - $outerHeight$$1$$ - $offsetTop$$, $myOffset$$1$$ = "top" === $data$$145$$.my[1] ? -$data$$145$$.elemHeight : "bottom" === $data$$145$$.my[1] ? $data$$145$$.elemHeight : 0, $atOffset$$1$$ = "top" === $data$$145$$.at[1] ? $data$$145$$.targetHeight : "bottom" === $data$$145$$.at[1] ? -$data$$145$$.targetHeight : 0, $offset$$24$$ = -2 * $data$$145$$.offset[1];
    0 > $overTop$$1_within$$3$$ ? ($newOverBottom_newOverTop_withinOffset$$3$$ = $position$$20$$.top + $myOffset$$1$$ + $atOffset$$1$$ + $offset$$24$$ + $data$$145$$.collisionHeight - $outerHeight$$1$$ - $newOverBottom_newOverTop_withinOffset$$3$$, (0 > $newOverBottom_newOverTop_withinOffset$$3$$ || $newOverBottom_newOverTop_withinOffset$$3$$ < Math.abs($overTop$$1_within$$3$$)) && 0 > $collisionPosTop$$1_overBottom$$1$$ && $overTop$$1_within$$3$$ > $collisionPosTop$$1_overBottom$$1$$ && ($position$$20$$.top += 
    $myOffset$$1$$ + $atOffset$$1$$ + $offset$$24$$)) : 0 < $collisionPosTop$$1_overBottom$$1$$ && ($newOverBottom_newOverTop_withinOffset$$3$$ = $position$$20$$.top - $data$$145$$.collisionPosition.marginTop + $myOffset$$1$$ + $atOffset$$1$$ + $offset$$24$$ - $offsetTop$$, 0 < $newOverBottom_newOverTop_withinOffset$$3$$ || Math.abs($newOverBottom_newOverTop_withinOffset$$3$$) < $collisionPosTop$$1_overBottom$$1$$) && ($position$$20$$.top += $myOffset$$1$$ + $atOffset$$1$$ + $offset$$24$$);
  }};
  $oj$$28$$.$PopupService$ = function $$oj$$28$$$$PopupService$$() {
    this.Init();
  };
  $oj$$28$$.$Object$.$createSubclass$($oj$$28$$.$PopupService$, $oj$$28$$.$Object$, "oj.PopupService");
  $oj$$28$$.$PopupService$.prototype.Init = function $$oj$$28$$$$PopupService$$$Init$() {
    $oj$$28$$.$PopupService$.$superclass$.Init.call(this);
  };
  $oj$$28$$.$PopupService$.$getInstance$ = function $$oj$$28$$$$PopupService$$$getInstance$$() {
    $oj$$28$$.$PopupService$.$_popupService$ || ($oj$$28$$.$PopupService$.$_popupService$ = new $oj$$28$$.$PopupServiceImpl$);
    return $oj$$28$$.$PopupService$.$_popupService$;
  };
  $oj$$28$$.$PopupService$.prototype.open = function $$oj$$28$$$$PopupService$$$open$() {
    $oj$$28$$.$Assert$.$failedInAbstractFunction$();
  };
  $oj$$28$$.$PopupService$.prototype.close = function $$oj$$28$$$$PopupService$$$close$() {
    $oj$$28$$.$Assert$.$failedInAbstractFunction$();
  };
  $oj$$28$$.$PopupService$.prototype.$changeOptions$ = function $$oj$$28$$$$PopupService$$$$changeOptions$$() {
    $oj$$28$$.$Assert$.$failedInAbstractFunction$();
  };
  $oj$$28$$.$PopupService$.prototype.$triggerOnDescendents$ = function $$oj$$28$$$$PopupService$$$$triggerOnDescendents$$() {
    $oj$$28$$.$Assert$.$failedInAbstractFunction$();
  };
  $oj$$28$$.$PopupService$.prototype.destroy = function $$oj$$28$$$$PopupService$$$destroy$() {
    delete $oj$$28$$.$PopupService$.$_popupService$;
  };
  $oj$$28$$.$PopupService$.$MODALITY$ = {NONE:"none", $MODAL$:"modal", $MODELESS$:"modeless"};
  $oj$$28$$.$PopupService$.$EVENT$ = {$POPUP_REMOVE$:"ojPopupRemove", $POPUP_CLOSE$:"ojPopupClose", $POPUP_REFRESH$:"ojPopupRefresh", $POPUP_AUTODISMISS$:"ojPopupAutoDismiss"};
  $oj$$28$$.$PopupService$.$LAYER_LEVEL$ = {$TOP_LEVEL$:"topLevel", $NEAREST_ANCESTOR$:"nearestAncestor"};
  $oj$$28$$.$PopupService$.$OPTION$ = {$POPUP$:"popup", $EVENTS$:"events", $MODALITY$:"modality", $LAUNCHER$:"launcher", $POSITION$:"position", $LAYER_SELECTORS$:"layerSelectors", $LAYER_LEVEL$:"layerLevel"};
  $oj$$28$$.$PopupServiceImpl$ = function $$oj$$28$$$$PopupServiceImpl$$() {
    this.Init();
  };
  $oj$$28$$.$Object$.$createSubclass$($oj$$28$$.$PopupServiceImpl$, $oj$$28$$.$PopupService$, "oj.PopupServiceImpl");
  $oj$$28$$.$PopupServiceImpl$.prototype.open = function $$oj$$28$$$$PopupServiceImpl$$$open$($layerLevel_options$$301$$) {
    $oj$$28$$.$Assert$.$assertObject$($layerLevel_options$$301$$);
    var $popup$$4$$ = $layerLevel_options$$301$$[$oj$$28$$.$PopupService$.$OPTION$.$POPUP$];
    $oj$$28$$.$Assert$.$assertPrototype$($popup$$4$$, jQuery);
    var $launcher$$11$$ = $layerLevel_options$$301$$[$oj$$28$$.$PopupService$.$OPTION$.$LAUNCHER$];
    $oj$$28$$.$Assert$.$assertPrototype$($launcher$$11$$, jQuery);
    var $position$$21$$ = $layerLevel_options$$301$$[$oj$$28$$.$PopupService$.$OPTION$.$POSITION$];
    $oj$$28$$.$Assert$.$assertObjectOrNull$($position$$21$$);
    var $events$$2$$ = $layerLevel_options$$301$$[$oj$$28$$.$PopupService$.$OPTION$.$EVENTS$];
    $oj$$28$$.$Assert$.$assertObject$($events$$2$$);
    var $modality$$ = $layerLevel_options$$301$$[$oj$$28$$.$PopupService$.$OPTION$.$MODALITY$];
    if (!$modality$$ || $oj$$28$$.$PopupService$.$MODALITY$.$MODELESS$ !== $modality$$ && $oj$$28$$.$PopupService$.$MODALITY$.$MODAL$ !== $modality$$) {
      $modality$$ = $oj$$28$$.$PopupService$.$MODALITY$.NONE;
    }
    var $layerClass$$ = $layerLevel_options$$301$$[$oj$$28$$.$PopupService$.$OPTION$.$LAYER_SELECTORS$];
    $oj$$28$$.$Assert$.$assertString$($layerClass$$);
    $layerLevel_options$$301$$ = $layerLevel_options$$301$$[$oj$$28$$.$PopupService$.$OPTION$.$LAYER_LEVEL$];
    if (!$layerLevel_options$$301$$ || $oj$$28$$.$PopupService$.$LAYER_LEVEL$.$TOP_LEVEL$ !== $layerLevel_options$$301$$ && $oj$$28$$.$PopupService$.$LAYER_LEVEL$.$NEAREST_ANCESTOR$ !== $layerLevel_options$$301$$) {
      $layerLevel_options$$301$$ = $oj$$28$$.$PopupService$.$LAYER_LEVEL$.$NEAREST_ANCESTOR$;
    }
    $oj$$28$$.$DomUtils$.$setLogicalParent$($popup$$4$$, $launcher$$11$$);
    $oj$$28$$.$ZOrderUtils$.$addToAncestorLayer$($popup$$4$$, $launcher$$11$$, $events$$2$$, $modality$$, $layerClass$$, $layerLevel_options$$301$$);
    $popup$$4$$.show();
    $popup$$4$$.removeAttr("aria-hidden");
    $position$$21$$ && $popup$$4$$.position($position$$21$$);
    this.$_assertEventSink$();
    $oj$$28$$.Components.$subtreeShown$($popup$$4$$[0]);
  };
  $oj$$28$$.$PopupServiceImpl$.prototype.close = function $$oj$$28$$$$PopupServiceImpl$$$close$($options$$302_popup$$5$$) {
    $oj$$28$$.$Assert$.$assertObject$($options$$302_popup$$5$$);
    $options$$302_popup$$5$$ = $options$$302_popup$$5$$[$oj$$28$$.$PopupService$.$OPTION$.$POPUP$];
    $oj$$28$$.$Assert$.$assertPrototype$($options$$302_popup$$5$$, jQuery);
    $oj$$28$$.$ZOrderUtils$.$removeFromAncestorLayer$($options$$302_popup$$5$$);
    $options$$302_popup$$5$$.hide();
    $options$$302_popup$$5$$.attr("aria-hidden", "true");
    $oj$$28$$.$DomUtils$.$setLogicalParent$($options$$302_popup$$5$$, null);
    this.$_assertEventSink$();
    $oj$$28$$.Components.$subtreeHidden$($options$$302_popup$$5$$[0]);
  };
  $oj$$28$$.$PopupServiceImpl$.prototype.$changeOptions$ = function $$oj$$28$$$$PopupServiceImpl$$$$changeOptions$$($layerClass$$1_options$$303$$) {
    $oj$$28$$.$Assert$.$assertObject$($layerClass$$1_options$$303$$);
    var $layer_popup$$6$$ = $layerClass$$1_options$$303$$[$oj$$28$$.$PopupService$.$OPTION$.$POPUP$];
    $oj$$28$$.$Assert$.$assertPrototype$($layer_popup$$6$$, jQuery);
    $layer_popup$$6$$ = $oj$$28$$.$ZOrderUtils$.$getFirstAncestorLayer$($layer_popup$$6$$);
    $oj$$28$$.$Assert$.$assertPrototype$($layer_popup$$6$$, jQuery);
    var $events$$3_modality$$1$$ = $layerClass$$1_options$$303$$[$oj$$28$$.$PopupService$.$OPTION$.$EVENTS$];
    $events$$3_modality$$1$$ && $oj$$28$$.$ZOrderUtils$.$applyEvents$($layer_popup$$6$$, $events$$3_modality$$1$$);
    ($events$$3_modality$$1$$ = $layerClass$$1_options$$303$$[$oj$$28$$.$PopupService$.$OPTION$.$MODALITY$]) && $oj$$28$$.$ZOrderUtils$.$applyModality$($layer_popup$$6$$, $events$$3_modality$$1$$);
    $layerClass$$1_options$$303$$ = $layerClass$$1_options$$303$$[$oj$$28$$.$PopupService$.$OPTION$.$LAYER_SELECTORS$];
    $oj$$28$$.$StringUtils$.$isEmptyOrUndefined$($layerClass$$1_options$$303$$) || $layer_popup$$6$$.attr("class", $layerClass$$1_options$$303$$);
  };
  $oj$$28$$.$PopupServiceImpl$.prototype.$triggerOnDescendents$ = function $$oj$$28$$$$PopupServiceImpl$$$$triggerOnDescendents$$($layer$$1_popup$$7$$, $event$$481$$, $argsArray$$1$$) {
    var $context$$113$$ = {};
    $context$$113$$.event = $event$$481$$;
    $context$$113$$.argsArray = $argsArray$$1$$;
    $layer$$1_popup$$7$$ = $oj$$28$$.$ZOrderUtils$.$getFirstAncestorLayer$($layer$$1_popup$$7$$);
    $oj$$28$$.$ZOrderUtils$.$postOrderVisit$($layer$$1_popup$$7$$, this.$_triggerOnDescendentsVisitCallback$, $context$$113$$);
  };
  $oj$$28$$.$PopupServiceImpl$.prototype.$_triggerOnDescendentsVisitCallback$ = function $$oj$$28$$$$PopupServiceImpl$$$$_triggerOnDescendentsVisitCallback$$($layer$$2$$, $context$$114$$) {
    var $event$$482$$ = $context$$114$$.event, $argsArray$$2$$ = $context$$114$$.argsArray, $events$$4$$ = $oj$$28$$.$ZOrderUtils$.$getEvents$($layer$$2$$);
    $events$$4$$ && $$$$25$$.isFunction($events$$4$$[$event$$482$$]) && $events$$4$$[$event$$482$$].apply(this, $argsArray$$2$$);
    return $oj$$28$$.$ZOrderUtils$.$VISIT_RESULT$.$ACCEPT$;
  };
  $oj$$28$$.$PopupServiceImpl$.prototype.$_assertEventSink$ = function $$oj$$28$$$$PopupServiceImpl$$$$_assertEventSink$$() {
    var $docElement_hasPopupsOpen$$ = $oj$$28$$.$ZOrderUtils$.$hasPopupsOpen$(), $callbackEventFilter_simpleTapRecognizer$$ = this.$_callbackEventFilter$;
    if (!$docElement_hasPopupsOpen$$ && $callbackEventFilter_simpleTapRecognizer$$) {
      window.removeEventListener("resize", $oj$$28$$.$PopupServiceImpl$.$_refreshCallback$, !0);
      window.removeEventListener("scroll", $oj$$28$$.$PopupServiceImpl$.$_refreshCallback$, !0);
      $docElement_hasPopupsOpen$$ = document.documentElement;
      $docElement_hasPopupsOpen$$.removeEventListener("mousewheel", $oj$$28$$.$PopupServiceImpl$.$_refreshCallback$, !0);
      $docElement_hasPopupsOpen$$.removeEventListener("DOMMouseScroll", $oj$$28$$.$PopupServiceImpl$.$_refreshCallback$, !0);
      delete this.$_callbackEventFilter$;
      for (var $i$$380$$ = 0;$i$$380$$ < $oj$$28$$.$PopupServiceImpl$.$_REDISTRIBUTE_EVENTS$.length;$i$$380$$++) {
        var $event$$483$$ = $oj$$28$$.$PopupServiceImpl$.$_REDISTRIBUTE_EVENTS$[$i$$380$$];
        $docElement_hasPopupsOpen$$.removeEventListener($event$$483$$, $callbackEventFilter_simpleTapRecognizer$$, !0);
      }
      if ($callbackEventFilter_simpleTapRecognizer$$ = this.$_simpleTapRecognizer$) {
        $callbackEventFilter_simpleTapRecognizer$$.destroy(), delete this.$_simpleTapRecognizer$;
      }
    } else {
      if ($docElement_hasPopupsOpen$$ && !$callbackEventFilter_simpleTapRecognizer$$) {
        window.addEventListener("resize", $oj$$28$$.$PopupServiceImpl$.$_refreshCallback$, !0);
        window.addEventListener("scroll", $oj$$28$$.$PopupServiceImpl$.$_refreshCallback$, !0);
        $docElement_hasPopupsOpen$$ = document.documentElement;
        $docElement_hasPopupsOpen$$.addEventListener("mousewheel", $oj$$28$$.$PopupServiceImpl$.$_refreshCallback$, !0);
        $docElement_hasPopupsOpen$$.addEventListener("DOMMouseScroll", $oj$$28$$.$PopupServiceImpl$.$_refreshCallback$, !0);
        $callbackEventFilter_simpleTapRecognizer$$ = this.$_callbackEventFilter$ = $$$$25$$.proxy(this.$_eventFilterCallback$, this);
        for ($i$$380$$ = 0;$i$$380$$ < $oj$$28$$.$PopupServiceImpl$.$_REDISTRIBUTE_EVENTS$.length;$i$$380$$++) {
          $event$$483$$ = $oj$$28$$.$PopupServiceImpl$.$_REDISTRIBUTE_EVENTS$[$i$$380$$], $docElement_hasPopupsOpen$$.addEventListener($event$$483$$, $callbackEventFilter_simpleTapRecognizer$$, !0);
        }
        $oj$$28$$.$DomUtils$.$isTouchSupported$() && (this.$_simpleTapRecognizer$ = new $oj$$28$$.$SimpleTapRecognizer$($callbackEventFilter_simpleTapRecognizer$$));
      }
    }
  };
  $oj$$28$$.$PopupServiceImpl$.prototype.$_eventFilterCallback$ = function $$oj$$28$$$$PopupServiceImpl$$$$_eventFilterCallback$$($event$$484$$) {
    var $context$$115_target$$123$$ = $$$$25$$($event$$484$$.target);
    if (!$oj$$28$$.$ZOrderUtils$.$hasPopupsOpen$()) {
      this.$_assertEventSink$();
    } else {
      if (!$oj$$28$$.$DomUtils$.$isChromeEvent$($event$$484$$) && ("focus" !== $event$$484$$.type || $context$$115_target$$123$$.is(":focusable"))) {
        var $defaultLayer$$ = $oj$$28$$.$ZOrderUtils$.$getDefaultLayer$();
        if ("keydown" === $event$$484$$.type && $oj$$28$$.$ZOrderUtils$.$hasModalDialogOpen$() && !$oj$$28$$.$DomUtils$.$isAncestor$($defaultLayer$$[0], $context$$115_target$$123$$[0])) {
          $oj$$28$$.$ZOrderUtils$.$eatEvent$($$$$25$$.Event($event$$484$$));
        } else {
          var $props$$16_targetWitinLayer$$ = $oj$$28$$.$ZOrderUtils$.$getFirstAncestorLayer$($context$$115_target$$123$$);
          if ($defaultLayer$$[0] !== $props$$16_targetWitinLayer$$[0]) {
            if (!$props$$16_targetWitinLayer$$.hasClass($oj$$28$$.$PopupServiceImpl$.$_FOCUS_WITHIN_SELECTOR$)) {
              var $lastFocusLayer$$ = this.$_lastFocusLayer$;
              $lastFocusLayer$$ && $lastFocusLayer$$.removeClass($oj$$28$$.$PopupServiceImpl$.$_FOCUS_WITHIN_SELECTOR$);
              $props$$16_targetWitinLayer$$.addClass($oj$$28$$.$PopupServiceImpl$.$_FOCUS_WITHIN_SELECTOR$);
              this.$_lastFocusLayer$ = $props$$16_targetWitinLayer$$;
            }
          } else {
            if ($lastFocusLayer$$ = this.$_lastFocusLayer$) {
              $lastFocusLayer$$.removeClass($oj$$28$$.$PopupServiceImpl$.$_FOCUS_WITHIN_SELECTOR$), delete this.$_lastFocusLayer$;
            }
          }
          if ("focus" !== $event$$484$$.type || "-1" !== $context$$115_target$$123$$.attr("tabindex")) {
            var $context$$115_target$$123$$ = {}, $props$$16_targetWitinLayer$$ = {}, $key$$155$$;
            for ($key$$155$$ in $event$$484$$) {
              $oj$$28$$.$PopupServiceImpl$.$_COPY_SAFE_EVENT_PROPERTIES$[$key$$155$$] && !$$$$25$$.isFunction($event$$484$$[$key$$155$$]) && ($props$$16_targetWitinLayer$$[$key$$155$$] = $event$$484$$[$key$$155$$]);
            }
            $context$$115_target$$123$$.event = $$$$25$$.Event($event$$484$$, $props$$16_targetWitinLayer$$);
            $oj$$28$$.$ZOrderUtils$.$postOrderVisit$($defaultLayer$$, $oj$$28$$.$PopupServiceImpl$.$_redistributeVisitCallback$, $context$$115_target$$123$$);
          }
        }
      }
    }
  };
  $oj$$28$$.$PopupServiceImpl$.$_redistributeVisitCallback$ = function $$oj$$28$$$$PopupServiceImpl$$$_redistributeVisitCallback$$($layer$$3$$, $context$$116$$) {
    var $events$$5$$ = $oj$$28$$.$ZOrderUtils$.$getEvents$($layer$$3$$), $event$$485$$ = $context$$116$$.event;
    if ($events$$5$$ && $$$$25$$.isFunction($events$$5$$[$oj$$28$$.$PopupService$.$EVENT$.$POPUP_AUTODISMISS$])) {
      $events$$5$$[$oj$$28$$.$PopupService$.$EVENT$.$POPUP_AUTODISMISS$]($event$$485$$);
    }
    return $oj$$28$$.$ZOrderUtils$.$VISIT_RESULT$.$ACCEPT$;
  };
  $oj$$28$$.$PopupServiceImpl$.$_refreshCallback$ = function $$oj$$28$$$$PopupServiceImpl$$$_refreshCallback$$() {
    isNaN($oj$$28$$.$PopupServiceImpl$.$_refreshTimmer$) && ($oj$$28$$.$PopupServiceImpl$.$_refreshTimmer$ = window.setTimeout(function() {
      delete $oj$$28$$.$PopupServiceImpl$.$_refreshTimmer$;
      var $defaultLayer$$1$$ = $oj$$28$$.$ZOrderUtils$.$getDefaultLayer$();
      $oj$$28$$.$ZOrderUtils$.$postOrderVisit$($defaultLayer$$1$$, $oj$$28$$.$PopupServiceImpl$.$_refreshVisitCallback$);
    }, $oj$$28$$.$PopupServiceImpl$.$_REFRESH_DELAY$));
  };
  $oj$$28$$.$PopupServiceImpl$.$_refreshVisitCallback$ = function $$oj$$28$$$$PopupServiceImpl$$$_refreshVisitCallback$$($layer$$4$$, $context$$117$$) {
    if (0 < $context$$117$$.level) {
      return $oj$$28$$.$ZOrderUtils$.$VISIT_RESULT$.$REJECT$;
    }
    var $events$$6$$ = $oj$$28$$.$ZOrderUtils$.$getEvents$($layer$$4$$);
    if ($events$$6$$ && $$$$25$$.isFunction($events$$6$$[$oj$$28$$.$PopupService$.$EVENT$.$POPUP_REFRESH$])) {
      $events$$6$$[$oj$$28$$.$PopupService$.$EVENT$.$POPUP_REFRESH$]();
    }
    return $oj$$28$$.$ZOrderUtils$.$VISIT_RESULT$.$ACCEPT$;
  };
  $oj$$28$$.$PopupServiceImpl$.prototype.destroy = function $$oj$$28$$$$PopupServiceImpl$$$destroy$() {
    $oj$$28$$.$PopupServiceImpl$.$superclass$.destroy.call(this);
  };
  $oj$$28$$.$PopupServiceImpl$.$_FOCUS_WITHIN_SELECTOR$ = "oj-focus-within";
  $oj$$28$$.$PopupServiceImpl$.$_REDISTRIBUTE_EVENTS$ = ["focus", "mousedown", "keydown"];
  $oj$$28$$.$PopupServiceImpl$.$_COPY_SAFE_EVENT_PROPERTIES$ = {altKey:!0, bubbles:!0, cancelable:!0, ctrlKey:!0, currentTarget:!0, eventPhase:!0, metaKey:!0, relatedTarget:!0, shiftKey:!0, target:!0, timeStamp:!0, view:!0, which:!0, button:!0, buttons:!0, clientX:!0, clientY:!0, offsetX:!0, offsetY:!0, pageX:!0, pageY:!0, screenX:!0, screenY:!0, toElement:!0, "char":!0, charCode:!0, key:!0, keyCode:!0};
  $oj$$28$$.$PopupServiceImpl$.$_REFRESH_DELAY$ = 100;
  $oj$$28$$.$ZOrderUtils$ = {};
  $oj$$28$$.$ZOrderUtils$.$getFirstAncestorLayer$ = function $$oj$$28$$$$ZOrderUtils$$$getFirstAncestorLayer$$($launcher$$12_parent$$35$$) {
    if (!$launcher$$12_parent$$35$$) {
      return $oj$$28$$.$ZOrderUtils$.$getDefaultLayer$();
    }
    for (;$launcher$$12_parent$$35$$ && 0 < $launcher$$12_parent$$35$$.length && $launcher$$12_parent$$35$$.attr("oj.ZOrderUtils._SURROGATE_ATTR") !== $oj$$28$$.$ZOrderUtils$.$_DEFAULT_LAYER_ID$;) {
      if ($oj$$28$$.$ZOrderUtils$.$_hasSurrogate$($launcher$$12_parent$$35$$[0])) {
        return $launcher$$12_parent$$35$$;
      }
      $launcher$$12_parent$$35$$ = $launcher$$12_parent$$35$$.parent();
    }
    return $oj$$28$$.$ZOrderUtils$.$getDefaultLayer$();
  };
  $oj$$28$$.$ZOrderUtils$.$getDefaultLayer$ = function $$oj$$28$$$$ZOrderUtils$$$getDefaultLayer$$() {
    var $defaultLayer$$2$$ = $$$$25$$(document.getElementById($oj$$28$$.$ZOrderUtils$.$_DEFAULT_LAYER_ID$));
    if (0 < $defaultLayer$$2$$.length) {
      return $defaultLayer$$2$$;
    }
    $defaultLayer$$2$$ = $$$$25$$("\x3cdiv\x3e");
    $defaultLayer$$2$$.attr("role", "presentation");
    $defaultLayer$$2$$.attr("id", $oj$$28$$.$ZOrderUtils$.$_DEFAULT_LAYER_ID$);
    $defaultLayer$$2$$.prependTo($$$$25$$(document.body));
    return $defaultLayer$$2$$;
  };
  $oj$$28$$.$ZOrderUtils$.$addToAncestorLayer$ = function $$oj$$28$$$$ZOrderUtils$$$addToAncestorLayer$$($popup$$8$$, $ancestorLayer_launcher$$13$$, $events$$7$$, $modality$$2$$, $layerClass$$2_surrogate$$, $layer$$5_layerLevel$$1$$) {
    var $popupDom$$ = $popup$$8$$[0];
    if ($oj$$28$$.$ZOrderUtils$.$_hasSurrogate$($popupDom$$.parentNode)) {
      throw Error("JET Popup is already open - id: " + $popupDom$$.getAttribute("id"));
    }
    $ancestorLayer_launcher$$13$$ = $oj$$28$$.$ZOrderUtils$.$getFirstAncestorLayer$($layer$$5_layerLevel$$1$$ === $oj$$28$$.$PopupService$.$LAYER_LEVEL$.$TOP_LEVEL$ ? null : $ancestorLayer_launcher$$13$$);
    $layer$$5_layerLevel$$1$$ = $$$$25$$("\x3cdiv\x3e");
    var $popupId$$ = $popup$$8$$.attr("id");
    $oj$$28$$.$StringUtils$.$isEmptyOrUndefined$($popupId$$) ? $layer$$5_layerLevel$$1$$.uniqueId() : $layer$$5_layerLevel$$1$$.attr("id", [$popupId$$, "layer"].join("_"));
    $layer$$5_layerLevel$$1$$.attr("role", "presentation");
    $layer$$5_layerLevel$$1$$.addClass($layerClass$$2_surrogate$$);
    $popup$$8$$.after($layer$$5_layerLevel$$1$$);
    $layerClass$$2_surrogate$$ = $oj$$28$$.$ZOrderUtils$.$_createSurrogate$($layer$$5_layerLevel$$1$$);
    $oj$$28$$.Components.$subtreeDetached$($popupDom$$);
    $popup$$8$$.appendTo($layer$$5_layerLevel$$1$$);
    $layer$$5_layerLevel$$1$$.appendTo($ancestorLayer_launcher$$13$$);
    $oj$$28$$.Components.$subtreeAttached$($popupDom$$);
    $oj$$28$$.$ZOrderUtils$.$applyModality$($layer$$5_layerLevel$$1$$, $modality$$2$$);
    $oj$$28$$.$ZOrderUtils$.$applyEvents$($layer$$5_layerLevel$$1$$, $events$$7$$, $layerClass$$2_surrogate$$);
  };
  $oj$$28$$.$ZOrderUtils$.$applyEvents$ = function $$oj$$28$$$$ZOrderUtils$$$applyEvents$$($layer$$6$$, $events$$8$$, $surrogate$$1$$) {
    if (!$surrogate$$1$$) {
      var $surrogateId$$ = $layer$$6$$.attr($oj$$28$$.$ZOrderUtils$.$_SURROGATE_ATTR$);
      $surrogateId$$ && ($surrogate$$1$$ = $$$$25$$(document.getElementById($surrogateId$$)));
    }
    $layer$$6$$.data($oj$$28$$.$ZOrderUtils$.$_EVENTS_DATA$, $events$$8$$);
    $surrogate$$1$$ && $events$$8$$ && $$$$25$$.isFunction($events$$8$$[$oj$$28$$.$PopupService$.$EVENT$.$POPUP_REMOVE$]) && ($surrogate$$1$$.surrogate(), $surrogate$$1$$.surrogate("option", "beforeDestroy", $events$$8$$[$oj$$28$$.$PopupService$.$EVENT$.$POPUP_REMOVE$]));
  };
  $oj$$28$$.$ZOrderUtils$.$getEvents$ = function $$oj$$28$$$$ZOrderUtils$$$getEvents$$($layer$$7$$) {
    return $layer$$7$$.data($oj$$28$$.$ZOrderUtils$.$_EVENTS_DATA$);
  };
  $oj$$28$$.$ZOrderUtils$.$_createSurrogate$ = function $$oj$$28$$$$ZOrderUtils$$$_createSurrogate$$($layer$$8$$) {
    var $surrogate$$2$$ = $$$$25$$("\x3cscript\x3e"), $layerId_surrogateId$$1$$ = $layer$$8$$.attr("id");
    $oj$$28$$.$StringUtils$.$isEmptyOrUndefined$($layerId_surrogateId$$1$$) ? $surrogate$$2$$.uniqueId() : $surrogate$$2$$.attr("id", [$layerId_surrogateId$$1$$, "surrogate"].join("_"));
    $surrogate$$2$$.insertBefore($layer$$8$$);
    $layerId_surrogateId$$1$$ = $surrogate$$2$$.attr("id");
    $layer$$8$$.attr($oj$$28$$.$ZOrderUtils$.$_SURROGATE_ATTR$, $layerId_surrogateId$$1$$);
    return $surrogate$$2$$;
  };
  $oj$$28$$.$ZOrderUtils$.$_removeSurrogate$ = function $$oj$$28$$$$ZOrderUtils$$$_removeSurrogate$$($layer$$9$$) {
    var $surrogate$$3_surrogateId$$2$$ = $layer$$9$$.attr($oj$$28$$.$ZOrderUtils$.$_SURROGATE_ATTR$);
    $layer$$9$$.removeAttr($oj$$28$$.$ZOrderUtils$.$_SURROGATE_ATTR$);
    $surrogate$$3_surrogateId$$2$$ = $$$$25$$(document.getElementById($surrogate$$3_surrogateId$$2$$));
    $layer$$9$$.insertAfter($surrogate$$3_surrogateId$$2$$);
    $surrogate$$3_surrogateId$$2$$.surrogate("option", "beforeDestroy", null);
    $surrogate$$3_surrogateId$$2$$.remove();
  };
  $oj$$28$$.$ZOrderUtils$.$removeFromAncestorLayer$ = function $$oj$$28$$$$ZOrderUtils$$$removeFromAncestorLayer$$($popup$$9$$) {
    var $layer$$10$$ = $oj$$28$$.$ZOrderUtils$.$getFirstAncestorLayer$($popup$$9$$);
    $oj$$28$$.$ZOrderUtils$.$preOrderVisit$($layer$$10$$, $oj$$28$$.$ZOrderUtils$.$_closeDescendantPopupsCallback$);
    $oj$$28$$.$ZOrderUtils$.$_removeOverlayFromAncestorLayer$($layer$$10$$);
    $layer$$10$$.removeData($oj$$28$$.$ZOrderUtils$.$_EVENTS_DATA$);
    $layer$$10$$.removeData($oj$$28$$.$ZOrderUtils$.$_MODALITY_DATA$);
    var $popupDom$$1$$ = $popup$$9$$[0];
    $oj$$28$$.Components.$subtreeDetached$($popupDom$$1$$);
    $oj$$28$$.$ZOrderUtils$.$_removeSurrogate$($layer$$10$$);
    $oj$$28$$.$DomUtils$.unwrap($popup$$9$$, $layer$$10$$);
    $oj$$28$$.Components.$subtreeAttached$($popupDom$$1$$);
  };
  $oj$$28$$.$ZOrderUtils$.$_closeDescendantPopupsCallback$ = function $$oj$$28$$$$ZOrderUtils$$$_closeDescendantPopupsCallback$$($layer$$11$$, $context$$118$$) {
    if (0 < $context$$118$$.level) {
      return $oj$$28$$.$ZOrderUtils$.$VISIT_RESULT$.$REJECT$;
    }
    var $events$$10$$ = $layer$$11$$.data($oj$$28$$.$ZOrderUtils$.$_EVENTS_DATA$);
    if ($events$$10$$ && $$$$25$$.isFunction($events$$10$$[$oj$$28$$.$PopupService$.$EVENT$.$POPUP_CLOSE$])) {
      $events$$10$$[$oj$$28$$.$PopupService$.$EVENT$.$POPUP_CLOSE$]();
    }
    return $oj$$28$$.$ZOrderUtils$.$VISIT_RESULT$.$ACCEPT$;
  };
  $oj$$28$$.$ZOrderUtils$.$applyModality$ = function $$oj$$28$$$$ZOrderUtils$$$applyModality$$($layer$$12$$, $modality$$3$$) {
    var $currModality$$ = $layer$$12$$.data($oj$$28$$.$ZOrderUtils$.$_MODALITY_DATA$);
    $layer$$12$$.data($oj$$28$$.$ZOrderUtils$.$_MODALITY_DATA$, $modality$$3$$);
    $oj$$28$$.$StringUtils$.$isEmptyOrUndefined$($currModality$$) ? $oj$$28$$.$PopupService$.$MODALITY$.$MODAL$ === $modality$$3$$ ? $oj$$28$$.$ZOrderUtils$.$_addOverlayToAncestorLayer$($layer$$12$$) : $oj$$28$$.$ZOrderUtils$.$_removeOverlayFromAncestorLayer$($layer$$12$$) : $currModality$$ !== $modality$$3$$ && ($modality$$3$$ !== $currModality$$ && $modality$$3$$ === $oj$$28$$.$PopupService$.$MODALITY$.$MODAL$ ? $oj$$28$$.$ZOrderUtils$.$_addOverlayToAncestorLayer$($layer$$12$$) : $oj$$28$$.$ZOrderUtils$.$_removeOverlayFromAncestorLayer$($layer$$12$$));
  };
  $oj$$28$$.$ZOrderUtils$.$hasModalDialogOpen$ = function $$oj$$28$$$$ZOrderUtils$$$hasModalDialogOpen$$() {
    for (var $children$$9$$ = $oj$$28$$.$ZOrderUtils$.$getDefaultLayer$().children(), $i$$381$$ = $children$$9$$.length - 1;-1 < $i$$381$$;$i$$381$$--) {
      if ($$$$25$$($children$$9$$[$i$$381$$]).hasClass($oj$$28$$.$ZOrderUtils$.$_OVERLAY_SELECTOR$)) {
        return!0;
      }
    }
    return!1;
  };
  $oj$$28$$.$ZOrderUtils$.$_addOverlayToAncestorLayer$ = function $$oj$$28$$$$ZOrderUtils$$$_addOverlayToAncestorLayer$$($layer$$13$$) {
    var $overlay_overlayId$$ = $$$$25$$("\x3cdiv\x3e");
    $overlay_overlayId$$.addClass($oj$$28$$.$ZOrderUtils$.$_OVERLAY_SELECTOR$);
    $overlay_overlayId$$.addClass($layer$$13$$[0].className);
    $overlay_overlayId$$.attr("role", "presentation");
    var $layerId$$1$$ = $layer$$13$$.attr("id");
    $oj$$28$$.$StringUtils$.$isEmptyOrUndefined$($layerId$$1$$) ? $overlay_overlayId$$.uniqueId() : $overlay_overlayId$$.attr("id", [$layerId$$1$$, "overlay"].join("_"));
    $layer$$13$$.before($overlay_overlayId$$);
    $overlay_overlayId$$ = $overlay_overlayId$$.attr("id");
    $layer$$13$$.attr($oj$$28$$.$ZOrderUtils$.$_OVERLAY_ATTR$, $overlay_overlayId$$);
  };
  $oj$$28$$.$ZOrderUtils$.$_removeOverlayFromAncestorLayer$ = function $$oj$$28$$$$ZOrderUtils$$$_removeOverlayFromAncestorLayer$$($layer$$14$$) {
    var $overlayId$$1$$ = $layer$$14$$.attr($oj$$28$$.$ZOrderUtils$.$_OVERLAY_ATTR$);
    $oj$$28$$.$StringUtils$.$isEmptyOrUndefined$($overlayId$$1$$) || ($layer$$14$$.removeAttr($oj$$28$$.$ZOrderUtils$.$_OVERLAY_ATTR$), $$$$25$$(document.getElementById($overlayId$$1$$)).remove());
  };
  $oj$$28$$.$ZOrderUtils$.$VISIT_RESULT$ = {$ACCEPT$:0, $REJECT$:1, $COMPLETE$:2};
  $oj$$28$$.$ZOrderUtils$.$_VISIT_TRAVERSAL$ = {$PRE_ORDER$:0, $POST_ORDER$:1};
  $oj$$28$$.$ZOrderUtils$.$postOrderVisit$ = function $$oj$$28$$$$ZOrderUtils$$$postOrderVisit$$($layer$$15$$, $callback$$113$$, $context$$119$$) {
    $context$$119$$ || ($context$$119$$ = {});
    $context$$119$$.level = 0;
    $context$$119$$.type = $oj$$28$$.$ZOrderUtils$.$_VISIT_TRAVERSAL$.$POST_ORDER$;
    $oj$$28$$.$ZOrderUtils$.$_visitTree$($layer$$15$$, $callback$$113$$, $context$$119$$);
  };
  $oj$$28$$.$ZOrderUtils$.$preOrderVisit$ = function $$oj$$28$$$$ZOrderUtils$$$preOrderVisit$$($layer$$16$$, $callback$$114$$, $context$$120$$) {
    $context$$120$$ || ($context$$120$$ = {});
    $context$$120$$.level = 0;
    $context$$120$$.type = $oj$$28$$.$ZOrderUtils$.$_VISIT_TRAVERSAL$.$PRE_ORDER$;
    $oj$$28$$.$ZOrderUtils$.$_visitTree$($layer$$16$$, $callback$$114$$, $context$$120$$);
  };
  $oj$$28$$.$ZOrderUtils$.$_visitTree$ = function $$oj$$28$$$$ZOrderUtils$$$_visitTree$$($children$$10_layer$$17$$, $callback$$115$$, $context$$121$$) {
    var $level$$51$$ = $context$$121$$.level;
    $children$$10_layer$$17$$ = $children$$10_layer$$17$$.children();
    for (var $i$$382$$ = $children$$10_layer$$17$$.length - 1;-1 < $i$$382$$;$i$$382$$--) {
      var $child$$10$$ = $$$$25$$($children$$10_layer$$17$$[$i$$382$$]);
      if ($oj$$28$$.$ZOrderUtils$.$_hasSurrogate$($child$$10$$[0])) {
        var $vrtn$$;
        if ($context$$121$$.type === $oj$$28$$.$ZOrderUtils$.$_VISIT_TRAVERSAL$.$PRE_ORDER$) {
          $vrtn$$ = $callback$$115$$($child$$10$$, $context$$121$$);
          if ($vrtn$$ === $oj$$28$$.$ZOrderUtils$.$VISIT_RESULT$.$COMPLETE$) {
            return $vrtn$$;
          }
          if ($vrtn$$ === $oj$$28$$.$ZOrderUtils$.$VISIT_RESULT$.$REJECT$) {
            break;
          }
        }
        $context$$121$$.level = $level$$51$$ + 1;
        $vrtn$$ = $oj$$28$$.$ZOrderUtils$.$_visitTree$($child$$10$$, $callback$$115$$, $context$$121$$);
        $context$$121$$.level = $level$$51$$;
        if ($vrtn$$ === $oj$$28$$.$ZOrderUtils$.$VISIT_RESULT$.$COMPLETE$) {
          return $vrtn$$;
        }
        if ($context$$121$$.type === $oj$$28$$.$ZOrderUtils$.$_VISIT_TRAVERSAL$.$POST_ORDER$) {
          $vrtn$$ = $callback$$115$$($child$$10$$, $context$$121$$);
          if ($vrtn$$ === $oj$$28$$.$ZOrderUtils$.$VISIT_RESULT$.$COMPLETE$) {
            return $vrtn$$;
          }
          if ($vrtn$$ === $oj$$28$$.$ZOrderUtils$.$VISIT_RESULT$.$REJECT$) {
            break;
          }
        }
      }
    }
    return $oj$$28$$.$ZOrderUtils$.$VISIT_RESULT$.$ACCEPT$;
  };
  $oj$$28$$.$ZOrderUtils$.$_hasSurrogate$ = function $$oj$$28$$$$ZOrderUtils$$$_hasSurrogate$$($element$$152$$) {
    return 1 === $element$$152$$.nodeType && $element$$152$$.hasAttribute($oj$$28$$.$ZOrderUtils$.$_SURROGATE_ATTR$) ? !0 : !1;
  };
  $oj$$28$$.$ZOrderUtils$.$hasPopupsOpen$ = function $$oj$$28$$$$ZOrderUtils$$$hasPopupsOpen$$() {
    return 0 < $oj$$28$$.$ZOrderUtils$.$getDefaultLayer$().children().length;
  };
  $oj$$28$$.$ZOrderUtils$.$getOpenPopupCount$ = function $$oj$$28$$$$ZOrderUtils$$$getOpenPopupCount$$() {
    var $context$$122$$ = {popupCount:0}, $defaultLayer$$5$$ = $oj$$28$$.$ZOrderUtils$.$getDefaultLayer$();
    $oj$$28$$.$ZOrderUtils$.$preOrderVisit$($defaultLayer$$5$$, $oj$$28$$.$ZOrderUtils$.$_openPopupCountCallback$, $context$$122$$);
    return $context$$122$$.popupCount;
  };
  $oj$$28$$.$ZOrderUtils$.$_openPopupCountCallback$ = function $$oj$$28$$$$ZOrderUtils$$$_openPopupCountCallback$$($layer$$18$$, $context$$123$$) {
    $context$$123$$.popupCount += 1;
    return $oj$$28$$.$ZOrderUtils$.$VISIT_RESULT$.$ACCEPT$;
  };
  $oj$$28$$.$ZOrderUtils$.$findOpenPopups$ = function $$oj$$28$$$$ZOrderUtils$$$findOpenPopups$$() {
    var $context$$124$$ = {}, $defaultLayer$$6_popups$$2$$ = [];
    $context$$124$$.popups = $defaultLayer$$6_popups$$2$$;
    $defaultLayer$$6_popups$$2$$ = $oj$$28$$.$ZOrderUtils$.$getDefaultLayer$();
    $oj$$28$$.$ZOrderUtils$.$preOrderVisit$($defaultLayer$$6_popups$$2$$, $oj$$28$$.$ZOrderUtils$.$_openPopupsCallback$, $context$$124$$);
    $defaultLayer$$6_popups$$2$$ = $context$$124$$.popups;
    return $$$$25$$($defaultLayer$$6_popups$$2$$);
  };
  $oj$$28$$.$ZOrderUtils$.$_openPopupsCallback$ = function $$oj$$28$$$$ZOrderUtils$$$_openPopupsCallback$$($layer$$19$$, $context$$125$$) {
    $context$$125$$.popups.push($layer$$19$$[0]);
    return $oj$$28$$.$ZOrderUtils$.$VISIT_RESULT$.$ACCEPT$;
  };
  $oj$$28$$.$ZOrderUtils$.$compareStackingContexts$ = function $$oj$$28$$$$ZOrderUtils$$$compareStackingContexts$$($el1$$1$$, $el2$$1$$) {
    function $describeStackingContext$$($element$$153$$, $allLevels$$) {
      for (var $positions$$ = ["absolute", "relative", "fixed"], $parents$$5$$ = $element$$153$$.parents(), $stack_tmp$$2$$ = [], $i$$384$$ = $parents$$5$$.length - 1;-1 < $i$$384$$;$i$$384$$--) {
        $stack_tmp$$2$$.push($$$$25$$($parents$$5$$[$i$$384$$]));
      }
      $parents$$5$$ = $stack_tmp$$2$$;
      $parents$$5$$.push($element$$153$$);
      for (var $stack_tmp$$2$$ = [], $level$$52$$ = 0, $i$$384$$ = 0;$i$$384$$ < $parents$$5$$.length;$i$$384$$++) {
        var $order_parent$$36$$ = $parents$$5$$[$i$$384$$], $position$$22$$ = $order_parent$$36$$.css("position"), $opacity$$2$$ = $oj$$28$$.$DomUtils$.$getCSSLengthAsFloat$($order_parent$$36$$.css("opacity")), $zindex$$ = $oj$$28$$.$DomUtils$.$getCSSLengthAsInt$($order_parent$$36$$.css("z-index")), $order_parent$$36$$ = $$$$25$$.inArray($order_parent$$36$$[0], $order_parent$$36$$.parent().children());
        -1 < $$$$25$$.inArray($position$$22$$, $positions$$) ? $stack_tmp$$2$$.push({weight:[$level$$52$$++, $zindex$$, $order_parent$$36$$], order:[$order_parent$$36$$]}) : 1 > $opacity$$2$$ ? $stack_tmp$$2$$.push({weight:[$level$$52$$++, 1, $order_parent$$36$$], order:[$order_parent$$36$$]}) : $allLevels$$ && $stack_tmp$$2$$.push({weight:[0, 0, $order_parent$$36$$], order:[$order_parent$$36$$]});
      }
      return $stack_tmp$$2$$;
    }
    function $compareSets$$($n1$$3$$, $n2$$3$$) {
      for (var $maxLen$$1$$ = Math.max($n1$$3$$.length, $n2$$3$$.length), $i$$385$$ = 0;$i$$385$$ < $maxLen$$1$$;$i$$385$$++) {
        var $e1$$1$$ = $i$$385$$ < $n1$$3$$.length ? $n1$$3$$[$i$$385$$] : -1, $e2$$1$$ = $i$$385$$ < $n2$$3$$.length ? $n2$$3$$[$i$$385$$] : -1;
        if ($e1$$1$$ !== $e2$$1$$) {
          return $e1$$1$$ < $e2$$1$$ ? -1 : 1;
        }
      }
      return 0;
    }
    $oj$$28$$.$Assert$.$assertPrototype$($el1$$1$$, jQuery);
    $oj$$28$$.$Assert$.$assertPrototype$($el2$$1$$, jQuery);
    for (var $n1$$2$$ = $describeStackingContext$$($el1$$1$$, !1), $n2$$2$$ = $describeStackingContext$$($el2$$1$$, !1), $maxLen$$ = Math.max($n1$$2$$.length, $n2$$2$$.length), $i$$383$$ = 0;$i$$383$$ < $maxLen$$;$i$$383$$++) {
      var $c$$48_e1$$ = $i$$383$$ < $n1$$2$$.length ? $n1$$2$$[$i$$383$$].weight : [-1], $e2$$ = $i$$383$$ < $n2$$2$$.length ? $n2$$2$$[$i$$383$$].weight : [-1], $c$$48_e1$$ = $compareSets$$($c$$48_e1$$, $e2$$);
      if (0 !== $c$$48_e1$$) {
        return $c$$48_e1$$;
      }
    }
    $n1$$2$$ = $describeStackingContext$$($el1$$1$$, !0);
    $n2$$2$$ = $describeStackingContext$$($el2$$1$$, !0);
    $maxLen$$ = Math.max($n1$$2$$.length, $n2$$2$$.length);
    for ($i$$383$$ = 0;$i$$383$$ < $maxLen$$;$i$$383$$++) {
      if ($c$$48_e1$$ = $i$$383$$ < $n1$$2$$.length ? $n1$$2$$[$i$$383$$].order : [-1], $e2$$ = $i$$383$$ < $n2$$2$$.length ? $n2$$2$$[$i$$383$$].order : [-1], $c$$48_e1$$ = $compareSets$$($c$$48_e1$$, $e2$$), 0 !== $c$$48_e1$$) {
        return $c$$48_e1$$;
      }
    }
    return 0;
  };
  $oj$$28$$.$ZOrderUtils$.$eatEvent$ = function $$oj$$28$$$$ZOrderUtils$$$eatEvent$$($event$$487$$) {
    $event$$487$$.stopPropagation();
    $event$$487$$.preventDefault();
  };
  $oj$$28$$.$ZOrderUtils$.$_EVENTS_DATA$ = "oj-popup-events";
  $oj$$28$$.$ZOrderUtils$.$_MODALITY_DATA$ = "oj-popup-modality";
  $oj$$28$$.$ZOrderUtils$.$_DEFAULT_LAYER_ID$ = "__oj_zorder_container";
  $oj$$28$$.$ZOrderUtils$.$_SURROGATE_ATTR$ = "data-oj-surrogate-id";
  $oj$$28$$.$ZOrderUtils$.$_OVERLAY_ATTR$ = "data-oj-overlayid";
  $oj$$28$$.$ZOrderUtils$.$_OVERLAY_SELECTOR$ = "oj-component-overlay";
  $$$$25$$.widget("oj.surrogate", {options:{create:null, beforeDestroy:null}, _create:function() {
    this._super();
    this.element.uniqueId();
  }, _destroy:function() {
    this._trigger("beforeDestroy");
    this.element.removeUniqueId();
    this._super();
  }});
  $oj$$28$$.$SimpleTapRecognizer$ = function $$oj$$28$$$$SimpleTapRecognizer$$($tapCallback$$) {
    this.$_tapCallback$ = $tapCallback$$;
    this.Init();
  };
  $oj$$28$$.$Object$.$createSubclass$($oj$$28$$.$SimpleTapRecognizer$, $oj$$28$$.$Object$, "oj.SimpleTapRecognizer");
  $oj$$28$$.$SimpleTapRecognizer$.prototype.Init = function $$oj$$28$$$$SimpleTapRecognizer$$$Init$() {
    $oj$$28$$.$SimpleTapRecognizer$.$superclass$.Init.call(this);
    for (var $eventHandlerCallback$$ = this.$_eventHandlerCallback$ = $$$$25$$.proxy(this.$_eventHandler$, this), $docElement$$1$$ = document.documentElement, $i$$386$$ = 0;$i$$386$$ < $oj$$28$$.$SimpleTapRecognizer$.$_TOUCHEVENTS$.length;$i$$386$$++) {
      $docElement$$1$$.addEventListener($oj$$28$$.$SimpleTapRecognizer$.$_TOUCHEVENTS$[$i$$386$$], $eventHandlerCallback$$, !0);
    }
  };
  $oj$$28$$.$SimpleTapRecognizer$.prototype.$_eventHandler$ = function $$oj$$28$$$$SimpleTapRecognizer$$$$_eventHandler$$($event$$488_tapStart$$) {
    var $tapCallback$$1$$ = this.$_tapCallback$, $eventType$$43$$ = $event$$488_tapStart$$.type;
    "touchstart" === $eventType$$43$$ ? (this.$_touchStartEvent$ = $event$$488_tapStart$$, this.$_touchStartEvent$.$_tapStart$ = (new Date).getTime()) : "touchmove" === $eventType$$43$$ || "touchcancel" === $eventType$$43$$ ? delete this.$_touchStartEvent$ : "touchend" === $eventType$$43$$ && (this.$_touchStartEvent$ && ($event$$488_tapStart$$ = this.$_touchStartEvent$.$_tapStart$, isNaN($event$$488_tapStart$$) ? $tapCallback$$1$$(this.$_touchStartEvent$) : (new Date).getTime() - $event$$488_tapStart$$ < 
    $oj$$28$$.$SimpleTapRecognizer$.$_PRESSHOLDTHRESSHOLD$ && $tapCallback$$1$$(this.$_touchStartEvent$)), delete this.$_touchStartEvent$);
  };
  $oj$$28$$.$SimpleTapRecognizer$.prototype.destroy = function $$oj$$28$$$$SimpleTapRecognizer$$$destroy$() {
    delete this.$_tapCallback$;
    var $eventHandlerCallback$$1$$ = this.$_eventHandlerCallback$;
    delete this.$_eventHandlerCallback$;
    for (var $docElement$$2$$ = document.documentElement, $i$$387$$ = 0;$i$$387$$ < $oj$$28$$.$SimpleTapRecognizer$.$_TOUCHEVENTS$.length;$i$$387$$++) {
      $docElement$$2$$.removeEventListener($oj$$28$$.$SimpleTapRecognizer$.$_TOUCHEVENTS$[$i$$387$$], $eventHandlerCallback$$1$$, !0);
    }
  };
  $oj$$28$$.$SimpleTapRecognizer$.$_TOUCHEVENTS$ = ["touchstart", "touchmove", "touchcancel", "touchend"];
  $oj$$28$$.$SimpleTapRecognizer$.$_PRESSHOLDTHRESSHOLD$ = 700;
  $oj$$28$$.$PopupLiveRegion$ = function $$oj$$28$$$$PopupLiveRegion$$() {
    this.Init();
  };
  $oj$$28$$.$Object$.$createSubclass$($oj$$28$$.$PopupLiveRegion$, $oj$$28$$.$Object$, "oj.PopupLiveRegion");
  $oj$$28$$.$PopupLiveRegion$.prototype.Init = function $$oj$$28$$$$PopupLiveRegion$$$Init$() {
    $oj$$28$$.$PopupLiveRegion$.$superclass$.Init.call(this);
    isNaN($oj$$28$$.$PopupLiveRegion$.$_refCounter$) ? $oj$$28$$.$PopupLiveRegion$.$_refCounter$ = 1 : ++$oj$$28$$.$PopupLiveRegion$.$_refCounter$;
  };
  $oj$$28$$.$PopupLiveRegion$.prototype.destroy = function $$oj$$28$$$$PopupLiveRegion$$$destroy$() {
    if (!isNaN($oj$$28$$.$PopupLiveRegion$.$_refCounter$) && (--$oj$$28$$.$PopupLiveRegion$.$_refCounter$, 1 > $oj$$28$$.$PopupLiveRegion$.$_refCounter$)) {
      var $liveRegion$$ = $$$$25$$(document.getElementById($oj$$28$$.$PopupLiveRegion$.$_POPUP_LIVE_REGION_ID$));
      0 < $liveRegion$$.length && $liveRegion$$.remove();
    }
  };
  $oj$$28$$.$PopupLiveRegion$.prototype.$announce$ = function $$oj$$28$$$$PopupLiveRegion$$$$announce$$($message$$34$$) {
    if (!$oj$$28$$.$StringUtils$.$isEmpty$($message$$34$$)) {
      var $liveRegion$$1$$ = $oj$$28$$.$PopupLiveRegion$.$_getLiveRegion$();
      $liveRegion$$1$$.children().remove();
      $$$$25$$("\x3cdiv\x3e").text($message$$34$$).appendTo($liveRegion$$1$$);
    }
  };
  $oj$$28$$.$PopupLiveRegion$.$_getLiveRegion$ = function $$oj$$28$$$$PopupLiveRegion$$$_getLiveRegion$$() {
    var $liveRegion$$2$$ = $$$$25$$(document.getElementById($oj$$28$$.$PopupLiveRegion$.$_POPUP_LIVE_REGION_ID$));
    0 === $liveRegion$$2$$.length && ($liveRegion$$2$$ = $$$$25$$("\x3cdiv\x3e"), $liveRegion$$2$$.attr({id:$oj$$28$$.$PopupLiveRegion$.$_POPUP_LIVE_REGION_ID$, role:"log", "aria-live":"polite", "aria-relevant":"additions"}), $liveRegion$$2$$.addClass("oj-helper-hidden-accessible"), $liveRegion$$2$$.appendTo(document.body));
    return $liveRegion$$2$$;
  };
  $oj$$28$$.$PopupLiveRegion$.$_POPUP_LIVE_REGION_ID$ = "__oj_popup_arialiveregion";
  $oj$$28$$.$PopupSkipLink$ = function $$oj$$28$$$$PopupSkipLink$$($sibling$$2$$, $message$$35$$, $callback$$116$$, $id$$45$$) {
    $oj$$28$$.$Assert$.$assertPrototype$($sibling$$2$$, jQuery);
    $oj$$28$$.$Assert$.$assertString$($message$$35$$);
    $oj$$28$$.$Assert$.$assertFunction$($callback$$116$$);
    $oj$$28$$.$Assert$.$assertStringOrNull$($id$$45$$);
    this.$_sibling$ = $sibling$$2$$;
    this.$_message$ = $message$$35$$;
    this.$_callback$ = $callback$$116$$;
    this.$_id$ = $id$$45$$ ? $id$$45$$ : "";
    this.Init();
  };
  $oj$$28$$.$Object$.$createSubclass$($oj$$28$$.$PopupSkipLink$, $oj$$28$$.$Object$, "oj.PopupSkipLink");
  $oj$$28$$.$PopupSkipLink$.prototype.Init = function $$oj$$28$$$$PopupSkipLink$$$Init$() {
    $oj$$28$$.$PopupSkipLink$.$superclass$.Init.call(this);
    var $sibling$$3$$ = this.$_sibling$, $callback$$117$$ = this.$_callback$, $message$$36$$ = this.$_message$;
    delete this.$_message$;
    var $id$$46$$ = this.$_id$;
    delete this.$_id$;
    var $link$$1$$ = $$$$25$$("\x3ca\x3e").attr({tabindex:"-1", href:"#"});
    $oj$$28$$.$StringUtils$.$isEmpty$($id$$46$$) || $link$$1$$.attr("id", $id$$46$$);
    $link$$1$$.addClass("oj-helper-hidden-accessible");
    $link$$1$$.text($message$$36$$);
    $link$$1$$.insertAfter($sibling$$3$$);
    $link$$1$$.on("click", $callback$$117$$);
    $sibling$$3$$.data($oj$$28$$.$PopupSkipLink$.$_SKIPLINK_ATTR$, $link$$1$$);
  };
  $oj$$28$$.$PopupSkipLink$.prototype.destroy = function $$oj$$28$$$$PopupSkipLink$$$destroy$() {
    var $sibling$$4$$ = this.$_sibling$;
    delete this.$_sibling$;
    var $callback$$118$$ = this.$_callback$;
    delete this.$_callback$;
    if ($sibling$$4$$) {
      var $link$$2$$ = $sibling$$4$$.data($oj$$28$$.$PopupSkipLink$.$_SKIPLINK_ATTR$);
      $sibling$$4$$.removeData($oj$$28$$.$PopupSkipLink$.$_SKIPLINK_ATTR$);
      $link$$2$$ && ($link$$2$$.off("click", $callback$$118$$), $link$$2$$.remove());
    }
  };
  $oj$$28$$.$PopupSkipLink$.prototype.getLink = function $$oj$$28$$$$PopupSkipLink$$$getLink$() {
    var $sibling$$5$$ = this.$_sibling$, $link$$3$$;
    $sibling$$5$$ && ($link$$3$$ = $sibling$$5$$.data($oj$$28$$.$PopupSkipLink$.$_SKIPLINK_ATTR$));
    return $link$$3$$;
  };
  $oj$$28$$.$PopupSkipLink$.$_SKIPLINK_ATTR$ = "oj-skiplink";
});

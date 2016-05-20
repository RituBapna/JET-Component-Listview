/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
define(["ojs/ojcore", "jquery", "hammerjs", "promise", "ojs/ojjquery-hammer", "ojs/ojcomponentcore"], function($oj$$35$$, $$$$32$$, $Hammer$$5$$) {
  $oj$$35$$.$OffcanvasUtils$ = {};
  $goog$exportPath_$$("OffcanvasUtils", $oj$$35$$.$OffcanvasUtils$, $oj$$35$$);
  $oj$$35$$.$OffcanvasUtils$.$_DATA_EDGE_KEY$ = "oj-offcanvasEdge";
  $oj$$35$$.$OffcanvasUtils$.$_DATA_OFFCANVAS_KEY$ = "oj-offcanvas";
  $oj$$35$$.$OffcanvasUtils$.$_DATA_MEDIA_QUERY_KEY$ = "oj-mediaQueryListener";
  $oj$$35$$.$OffcanvasUtils$.$_DATA_HAMMER_KEY$ = "oj-offcanvasHammer";
  $oj$$35$$.$OffcanvasUtils$.$SELECTOR_KEY$ = "selector";
  $oj$$35$$.$OffcanvasUtils$.$EDGE_START$ = "start";
  $oj$$35$$.$OffcanvasUtils$.$EDGE_END$ = "end";
  $oj$$35$$.$OffcanvasUtils$.$EDGE_TOP$ = "top";
  $oj$$35$$.$OffcanvasUtils$.$EDGE_BOTTOM$ = "bottom";
  $oj$$35$$.$OffcanvasUtils$.$DISPLAY_MODE_KEY$ = "displayMode";
  $oj$$35$$.$OffcanvasUtils$.$DISPLAY_MODE_PUSH$ = "push";
  $oj$$35$$.$OffcanvasUtils$.$DISPLAY_MODE_OVERLAY$ = "overlay";
  $oj$$35$$.$OffcanvasUtils$.$MODALITY_KEY$ = "modality";
  $oj$$35$$.$OffcanvasUtils$.$MODALITY_NONE$ = "none";
  $oj$$35$$.$OffcanvasUtils$.$MODALITY_MODAL$ = "modal";
  $oj$$35$$.$OffcanvasUtils$.$DISMISS_HANDLER_KEY$ = "_dismissHandler";
  $oj$$35$$.$OffcanvasUtils$.$OPEN_PROMISE_KEY$ = "_openPromise";
  $oj$$35$$.$OffcanvasUtils$.$CLOSE_PROMISE_KEY$ = "_closePromise";
  $oj$$35$$.$OffcanvasUtils$.$GLASS_PANE_KEY$ = "_glassPane";
  $oj$$35$$.$OffcanvasUtils$.$SURROGATE_KEY$ = "_surrogate";
  $oj$$35$$.$OffcanvasUtils$.$SURROGATE_ATTR$ = "data-oj-surrogate-id";
  $oj$$35$$.$OffcanvasUtils$.$OUTER_WRAPPER_SELECTOR$ = "oj-offcanvas-outer-wrapper";
  $oj$$35$$.$OffcanvasUtils$.$OPEN_SELECTOR$ = "oj-offcanvas-open";
  $oj$$35$$.$OffcanvasUtils$.$TRANSITION_SELECTOR$ = "oj-offcanvas-transition";
  $oj$$35$$.$OffcanvasUtils$.$GLASSPANE_SELECTOR$ = "oj-offcanvas-glasspane";
  $oj$$35$$.$OffcanvasUtils$.$GLASSPANE_DIM_SELECTOR$ = "oj-offcanvas-glasspane-dim";
  $oj$$35$$.$OffcanvasUtils$.$WRAPPER_GENERATED_SELECTOR$ = "oj-offcanvas-generated";
  $oj$$35$$.$OffcanvasUtils$.$_shiftSelector$ = {start:"oj-offcanvas-shift-start", end:"oj-offcanvas-shift-end", top:"oj-offcanvas-shift-down", bottom:"oj-offcanvas-shift-up"};
  $oj$$35$$.$OffcanvasUtils$.$_drawerSelector$ = {start:"oj-offcanvas-start", end:"oj-offcanvas-end", top:"oj-offcanvas-top", bottom:"oj-offcanvas-bottom"};
  $oj$$35$$.$OffcanvasUtils$.$_getDisplayMode$ = function $$oj$$35$$$$OffcanvasUtils$$$_getDisplayMode$$($displayMode_offcanvas$$) {
    $displayMode_offcanvas$$ = $displayMode_offcanvas$$[$oj$$35$$.$OffcanvasUtils$.$DISPLAY_MODE_KEY$];
    $displayMode_offcanvas$$ !== $oj$$35$$.$OffcanvasUtils$.$DISPLAY_MODE_OVERLAY$ && $displayMode_offcanvas$$ !== $oj$$35$$.$OffcanvasUtils$.$DISPLAY_MODE_PUSH$ && ($displayMode_offcanvas$$ = $oj$$35$$.$ThemeUtils$.$getOptionDefaultMap$("offcanvas").displayMode);
    return $displayMode_offcanvas$$;
  };
  $oj$$35$$.$OffcanvasUtils$.$_getDrawer$ = function $$oj$$35$$$$OffcanvasUtils$$$_getDrawer$$($offcanvas$$1$$) {
    return $$$$32$$($offcanvas$$1$$[$oj$$35$$.$OffcanvasUtils$.$SELECTOR_KEY$]);
  };
  $oj$$35$$.$OffcanvasUtils$.$_isModal$ = function $$oj$$35$$$$OffcanvasUtils$$$_isModal$$($offcanvas$$2$$) {
    return $offcanvas$$2$$[$oj$$35$$.$OffcanvasUtils$.$MODALITY_KEY$] === $oj$$35$$.$OffcanvasUtils$.$MODALITY_MODAL$;
  };
  $oj$$35$$.$OffcanvasUtils$.$_isOpen$ = function $$oj$$35$$$$OffcanvasUtils$$$_isOpen$$($drawer$$) {
    return $drawer$$.hasClass($oj$$35$$.$OffcanvasUtils$.$OPEN_SELECTOR$);
  };
  $oj$$35$$.$OffcanvasUtils$.$_getOuterWrapper$ = function $$oj$$35$$$$OffcanvasUtils$$$_getOuterWrapper$$($drawer$$1$$) {
    return $drawer$$1$$.closest("." + $oj$$35$$.$OffcanvasUtils$.$OUTER_WRAPPER_SELECTOR$);
  };
  $oj$$35$$.$OffcanvasUtils$.$_getAnimateWrapper$ = function $$oj$$35$$$$OffcanvasUtils$$$_getAnimateWrapper$$($offcanvas$$3$$) {
    var $wrapper$$1$$ = $oj$$35$$.$OffcanvasUtils$.$_getDrawer$($offcanvas$$3$$);
    return $offcanvas$$3$$[$oj$$35$$.$OffcanvasUtils$.$DISPLAY_MODE_KEY$] === $oj$$35$$.$OffcanvasUtils$.$DISPLAY_MODE_PUSH$ ? $wrapper$$1$$.parent() : $wrapper$$1$$;
  };
  $oj$$35$$.$OffcanvasUtils$.$_getShiftSelector$ = function $$oj$$35$$$$OffcanvasUtils$$$_getShiftSelector$$($edge$$2$$) {
    var $selector$$31$$ = $oj$$35$$.$OffcanvasUtils$.$_shiftSelector$[$edge$$2$$];
    if (!$selector$$31$$) {
      throw "Invalid edge: " + $edge$$2$$;
    }
    return $selector$$31$$;
  };
  $oj$$35$$.$OffcanvasUtils$.$_isRTL$ = function $$oj$$35$$$$OffcanvasUtils$$$_isRTL$$() {
    return "rtl" === $oj$$35$$.$DomUtils$.$getReadingDirection$();
  };
  $oj$$35$$.$OffcanvasUtils$.$_setTransform$ = function $$oj$$35$$$$OffcanvasUtils$$$_setTransform$$($wrapper$$2$$, $transform$$3$$) {
    $wrapper$$2$$.css({"-webkit-transform":$transform$$3$$, "-ms-transform":$transform$$3$$, transform:$transform$$3$$});
  };
  $oj$$35$$.$OffcanvasUtils$.$_setTranslationX$ = function $$oj$$35$$$$OffcanvasUtils$$$_setTranslationX$$($wrapper$$3$$, $edge$$3_minus$$, $width$$43$$) {
    $edge$$3_minus$$ = $edge$$3_minus$$ === $oj$$35$$.$OffcanvasUtils$.$EDGE_END$;
    $oj$$35$$.$OffcanvasUtils$.$_isRTL$() && ($edge$$3_minus$$ = !$edge$$3_minus$$);
    $oj$$35$$.$OffcanvasUtils$.$_setTransform$($wrapper$$3$$, "translate3d(" + ($edge$$3_minus$$ ? "-" : "") + $width$$43$$ + ", 0, 0)");
  };
  $oj$$35$$.$OffcanvasUtils$.$_setTranslationY$ = function $$oj$$35$$$$OffcanvasUtils$$$_setTranslationY$$($wrapper$$4$$, $edge$$4$$, $height$$48$$) {
    $oj$$35$$.$OffcanvasUtils$.$_setTransform$($wrapper$$4$$, "translate3d(0, " + ($edge$$4$$ === $oj$$35$$.$OffcanvasUtils$.$EDGE_BOTTOM$ ? "-" : "") + $height$$48$$ + ", 0)");
  };
  $oj$$35$$.$OffcanvasUtils$.$_saveEdge$ = function $$oj$$35$$$$OffcanvasUtils$$$_saveEdge$$($drawer$$2_offcanvas$$4$$) {
    var $edge$$5$$ = $drawer$$2_offcanvas$$4$$.edge;
    $drawer$$2_offcanvas$$4$$ = $oj$$35$$.$OffcanvasUtils$.$_getDrawer$($drawer$$2_offcanvas$$4$$);
    $edge$$5$$ && $edge$$5$$.length || ($edge$$5$$ = $drawer$$2_offcanvas$$4$$.hasClass("oj-offcanvas-start") ? $oj$$35$$.$OffcanvasUtils$.$EDGE_START$ : $drawer$$2_offcanvas$$4$$.hasClass("oj-offcanvas-end") ? $oj$$35$$.$OffcanvasUtils$.$EDGE_END$ : $drawer$$2_offcanvas$$4$$.hasClass("oj-offcanvas-top") ? $oj$$35$$.$OffcanvasUtils$.$EDGE_TOP$ : $drawer$$2_offcanvas$$4$$.hasClass("oj-offcanvas-bottom") ? $oj$$35$$.$OffcanvasUtils$.$EDGE_BOTTOM$ : $oj$$35$$.$OffcanvasUtils$.$EDGE_START$);
    $$$$32$$.data($drawer$$2_offcanvas$$4$$[0], $oj$$35$$.$OffcanvasUtils$.$_DATA_EDGE_KEY$, $edge$$5$$);
    return $edge$$5$$;
  };
  $oj$$35$$.$OffcanvasUtils$.$_getEdge$ = function $$oj$$35$$$$OffcanvasUtils$$$_getEdge$$($drawer$$3$$) {
    return $$$$32$$.data($drawer$$3$$[0], $oj$$35$$.$OffcanvasUtils$.$_DATA_EDGE_KEY$);
  };
  $oj$$35$$.$OffcanvasUtils$.$_toggleClass$ = function $$oj$$35$$$$OffcanvasUtils$$$_toggleClass$$($oTabIndex_offcanvas$$5$$, $wrapper$$5$$, $isOpen$$1$$) {
    var $displayMode$$1_wrapperClass$$ = $oTabIndex_offcanvas$$5$$[$oj$$35$$.$OffcanvasUtils$.$DISPLAY_MODE_KEY$], $drawer$$4$$ = $oj$$35$$.$OffcanvasUtils$.$_getDrawer$($oTabIndex_offcanvas$$5$$), $drawerClass$$ = $oj$$35$$.$OffcanvasUtils$.$OPEN_SELECTOR$, $displayMode$$1_wrapperClass$$ = $displayMode$$1_wrapperClass$$ === $oj$$35$$.$OffcanvasUtils$.$DISPLAY_MODE_OVERLAY$ ? $oj$$35$$.$OffcanvasUtils$.$TRANSITION_SELECTOR$ + " oj-offcanvas-overlay" : $oj$$35$$.$OffcanvasUtils$.$TRANSITION_SELECTOR$;
    $isOpen$$1$$ ? ($drawer$$4$$.addClass($drawerClass$$), $wrapper$$5$$.addClass($displayMode$$1_wrapperClass$$)) : ($oTabIndex_offcanvas$$5$$ = $oTabIndex_offcanvas$$5$$.tabindex, void 0 === $oTabIndex_offcanvas$$5$$ ? $drawer$$4$$.removeAttr("tabindex") : $drawer$$4$$.attr("tabindex", $oTabIndex_offcanvas$$5$$), $drawer$$4$$.removeClass($drawerClass$$), $wrapper$$5$$.removeClass($displayMode$$1_wrapperClass$$));
  };
  $oj$$35$$.$OffcanvasUtils$.$_setFocus$ = function $$oj$$35$$$$OffcanvasUtils$$$_setFocus$$($focusNode_offcanvas$$6$$) {
    var $drawer$$5$$ = $oj$$35$$.$OffcanvasUtils$.$_getDrawer$($focusNode_offcanvas$$6$$), $nodes$$6_oTabIndex$$1$$ = $drawer$$5$$.find(":focusable");
    0 < $nodes$$6_oTabIndex$$1$$.length ? $focusNode_offcanvas$$6$$ = $nodes$$6_oTabIndex$$1$$[0] : ($nodes$$6_oTabIndex$$1$$ = $drawer$$5$$.attr("tabindex"), void 0 !== $nodes$$6_oTabIndex$$1$$ && ($focusNode_offcanvas$$6$$.tabindex = $nodes$$6_oTabIndex$$1$$), $drawer$$5$$.attr("tabindex", "-1"), $focusNode_offcanvas$$6$$ = $drawer$$5$$);
    $oj$$35$$.$FocusUtils$.$focusElement$($focusNode_offcanvas$$6$$);
  };
  $oj$$35$$.$OffcanvasUtils$.$_isAutoDismiss$ = function $$oj$$35$$$$OffcanvasUtils$$$_isAutoDismiss$$($offcanvas$$7$$) {
    return "none" != $offcanvas$$7$$.autoDismiss;
  };
  $oj$$35$$.$OffcanvasUtils$.$_onTransitionEnd$ = function $$oj$$35$$$$OffcanvasUtils$$$_onTransitionEnd$$($wrapper$$6$$, $handler$$52$$) {
    function $listener$$40$$() {
      $handler$$52$$();
      $wrapper$$6$$.off("transitionend webkitTransitionEnd otransitionend oTransitionEnd", $listener$$40$$);
    }
    $wrapper$$6$$.on("transitionend webkitTransitionEnd otransitionend oTransitionEnd", $listener$$40$$);
  };
  $oj$$35$$.$OffcanvasUtils$.$_registerCloseHandler$ = function $$oj$$35$$$$OffcanvasUtils$$$_registerCloseHandler$$($offcanvas$$8$$) {
    $oj$$35$$.$OffcanvasUtils$.$_unregisterCloseHandler$($offcanvas$$8$$);
    if ($oj$$35$$.$OffcanvasUtils$.$_isAutoDismiss$($offcanvas$$8$$)) {
      var $drawer$$6$$ = $oj$$35$$.$OffcanvasUtils$.$_getDrawer$($offcanvas$$8$$), $dismisHandler$$ = $offcanvas$$8$$[$oj$$35$$.$OffcanvasUtils$.$DISMISS_HANDLER_KEY$] = function $$offcanvas$$8$$$$oj$$35$$$$OffcanvasUtils$$$DISMISS_HANDLER_KEY$$($event$$520$$) {
        var $target$$126$$ = $event$$520$$.target;
        $oj$$35$$.$DomUtils$.$isChromeEvent$($event$$520$$) || "focus" === $event$$520$$.type && !$$$$32$$($target$$126$$).is(":focusable") || (null == $$$$32$$.data($drawer$$6$$[0], $oj$$35$$.$OffcanvasUtils$.$_DATA_OFFCANVAS_KEY$) ? $oj$$35$$.$OffcanvasUtils$.$_unregisterCloseHandler$($offcanvas$$8$$) : $oj$$35$$.$DomUtils$.$isLogicalAncestorOrSelf$($drawer$$6$$[0], $target$$126$$) || $oj$$35$$.$OffcanvasUtils$.close($offcanvas$$8$$));
      }, $documentElement$$1$$ = document.documentElement;
      $oj$$35$$.$DomUtils$.$isTouchSupported$() && $documentElement$$1$$.addEventListener("touchstart", $dismisHandler$$, !0);
      $documentElement$$1$$.addEventListener("mousedown", $dismisHandler$$, !0);
      $documentElement$$1$$.addEventListener("focus", $dismisHandler$$, !0);
    }
    $oj$$35$$.$OffcanvasUtils$.$_registerSwipeHandler$($offcanvas$$8$$);
  };
  $oj$$35$$.$OffcanvasUtils$.$_unregisterCloseHandler$ = function $$oj$$35$$$$OffcanvasUtils$$$_unregisterCloseHandler$$($offcanvas$$9$$) {
    var $dismisHandler$$1$$ = $offcanvas$$9$$[$oj$$35$$.$OffcanvasUtils$.$DISMISS_HANDLER_KEY$];
    if ($dismisHandler$$1$$) {
      var $documentElement$$2$$ = document.documentElement;
      $oj$$35$$.$DomUtils$.$isTouchSupported$() && $documentElement$$2$$.removeEventListener("touchstart", $dismisHandler$$1$$, !0);
      $documentElement$$2$$.removeEventListener("mousedown", $dismisHandler$$1$$, !0);
      $documentElement$$2$$.removeEventListener("focus", $dismisHandler$$1$$, !0);
      delete $offcanvas$$9$$[$oj$$35$$.$OffcanvasUtils$.$DISMISS_HANDLER_KEY$];
      $offcanvas$$9$$[$oj$$35$$.$OffcanvasUtils$.$DISMISS_HANDLER_KEY$] = null;
    }
    $oj$$35$$.$OffcanvasUtils$.$_unregisterSwipeHandler$($offcanvas$$9$$);
  };
  $oj$$35$$.$OffcanvasUtils$.$_registerSwipeHandler$ = function $$oj$$35$$$$OffcanvasUtils$$$_registerSwipeHandler$$($offcanvas$$10$$) {
    if ($oj$$35$$.$DomUtils$.$isTouchSupported$()) {
      var $selector$$32$$ = $offcanvas$$10$$[$oj$$35$$.$OffcanvasUtils$.$SELECTOR_KEY$], $drawer$$7_drawerHammer$$ = $$$$32$$($selector$$32$$), $edge$$6$$ = $oj$$35$$.$OffcanvasUtils$.$_getEdge$($drawer$$7_drawerHammer$$), $swipeEvent$$, $options$$311$$;
      $edge$$6$$ === $oj$$35$$.$OffcanvasUtils$.$EDGE_START$ && !$oj$$35$$.$OffcanvasUtils$.$_isRTL$() || $edge$$6$$ === $oj$$35$$.$OffcanvasUtils$.$EDGE_END$ && $oj$$35$$.$OffcanvasUtils$.$_isRTL$() ? ($options$$311$$ = {recognizers:[[$Hammer$$5$$.Swipe, {direction:$Hammer$$5$$.DIRECTION_LEFT}]]}, $swipeEvent$$ = "swipeleft") : $edge$$6$$ === $oj$$35$$.$OffcanvasUtils$.$EDGE_START$ && $oj$$35$$.$OffcanvasUtils$.$_isRTL$() || $edge$$6$$ === $oj$$35$$.$OffcanvasUtils$.$EDGE_END$ && !$oj$$35$$.$OffcanvasUtils$.$_isRTL$() ? 
      ($options$$311$$ = {recognizers:[[$Hammer$$5$$.Swipe, {direction:$Hammer$$5$$.DIRECTION_RIGHT}]]}, $swipeEvent$$ = "swiperight") : $edge$$6$$ === $oj$$35$$.$OffcanvasUtils$.$EDGE_TOP$ ? ($options$$311$$ = {recognizers:[[$Hammer$$5$$.Swipe, {direction:$Hammer$$5$$.DIRECTION_UP}]]}, $swipeEvent$$ = "swipeup") : $edge$$6$$ === $oj$$35$$.$OffcanvasUtils$.$EDGE_BOTTOM$ && ($options$$311$$ = {recognizers:[[$Hammer$$5$$.Swipe, {direction:$Hammer$$5$$.DIRECTION_DOWN}]]}, $swipeEvent$$ = "swipedown");
      $drawer$$7_drawerHammer$$ = $drawer$$7_drawerHammer$$.$ojHammer$($options$$311$$).on($swipeEvent$$, function($event$$521$$) {
        $event$$521$$.preventDefault();
        $oj$$35$$.$OffcanvasUtils$.close($offcanvas$$10$$);
      });
      $$$$32$$.data($$$$32$$($selector$$32$$)[0], $oj$$35$$.$OffcanvasUtils$.$_DATA_HAMMER_KEY$, {event:$swipeEvent$$, hammer:$drawer$$7_drawerHammer$$});
    }
  };
  $oj$$35$$.$OffcanvasUtils$.$_unregisterSwipeHandler$ = function $$oj$$35$$$$OffcanvasUtils$$$_unregisterSwipeHandler$$($dHammer_drawer$$8_offcanvas$$11$$) {
    $dHammer_drawer$$8_offcanvas$$11$$ = $oj$$35$$.$OffcanvasUtils$.$_getDrawer$($dHammer_drawer$$8_offcanvas$$11$$);
    0 < $dHammer_drawer$$8_offcanvas$$11$$.length && ($dHammer_drawer$$8_offcanvas$$11$$ = $$$$32$$.data($dHammer_drawer$$8_offcanvas$$11$$[0], $oj$$35$$.$OffcanvasUtils$.$_DATA_HAMMER_KEY$)) && $dHammer_drawer$$8_offcanvas$$11$$.hammer.off($dHammer_drawer$$8_offcanvas$$11$$.event);
  };
  $oj$$35$$.$OffcanvasUtils$.$_afterCloseHandler$ = function $$oj$$35$$$$OffcanvasUtils$$$_afterCloseHandler$$($offcanvas$$12$$) {
    var $drawer$$9$$ = $oj$$35$$.$OffcanvasUtils$.$_getDrawer$($offcanvas$$12$$);
    if ($$$$32$$.data($drawer$$9$$[0], $oj$$35$$.$OffcanvasUtils$.$_DATA_OFFCANVAS_KEY$) === $offcanvas$$12$$) {
      $oj$$35$$.$OffcanvasUtils$.$_getEdge$($drawer$$9$$);
      var $wrapper$$7$$ = $oj$$35$$.$OffcanvasUtils$.$_getAnimateWrapper$($offcanvas$$12$$);
      $oj$$35$$.$OffcanvasUtils$.$_toggleClass$($offcanvas$$12$$, $wrapper$$7$$, !1);
      $oj$$35$$.$OffcanvasUtils$.$_removeModality$($offcanvas$$12$$);
      $oj$$35$$.$OffcanvasUtils$.$_unregisterCloseHandler$($offcanvas$$12$$);
      $drawer$$9$$.trigger("ojclose", $offcanvas$$12$$);
      $$$$32$$.removeData($drawer$$9$$[0], $oj$$35$$.$OffcanvasUtils$.$_DATA_OFFCANVAS_KEY$);
    }
  };
  $oj$$35$$.$OffcanvasUtils$.$_setVisible$ = function $$oj$$35$$$$OffcanvasUtils$$$_setVisible$$($selector$$33$$, $visible$$1$$, $edge$$8$$) {
    var $drawer$$10$$ = $$$$32$$($selector$$33$$);
    ($visible$$1$$ = !!$visible$$1$$) && $oj$$35$$.$OffcanvasUtils$.$_isOpen$($drawer$$10$$) && $oj$$35$$.$OffcanvasUtils$.$_close$($selector$$33$$, !1);
    $drawer$$10$$.toggleClass($oj$$35$$.$OffcanvasUtils$.$_drawerSelector$[$edge$$8$$], !$visible$$1$$);
  };
  $oj$$35$$.$OffcanvasUtils$.$setupResponsive$ = function $$oj$$35$$$$OffcanvasUtils$$$setupResponsive$$($mqListener_offcanvas$$13$$) {
    var $mqs_query$$11$$ = $mqListener_offcanvas$$13$$.query;
    if (null !== $mqs_query$$11$$) {
      var $selector$$34$$ = $mqListener_offcanvas$$13$$[$oj$$35$$.$OffcanvasUtils$.$SELECTOR_KEY$], $mqs_query$$11$$ = window.matchMedia($mqs_query$$11$$), $edge$$9$$ = $oj$$35$$.$OffcanvasUtils$.$_saveEdge$($mqListener_offcanvas$$13$$);
      $mqListener_offcanvas$$13$$ = function $$mqListener_offcanvas$$13$$$($event$$522$$) {
        $oj$$35$$.$OffcanvasUtils$.$_setVisible$($selector$$34$$, $event$$522$$.matches, $edge$$9$$);
      };
      $mqs_query$$11$$.addListener($mqListener_offcanvas$$13$$);
      $oj$$35$$.$OffcanvasUtils$.$_setVisible$($selector$$34$$, $mqs_query$$11$$.matches, $edge$$9$$);
      $$$$32$$.data($$$$32$$($selector$$34$$)[0], $oj$$35$$.$OffcanvasUtils$.$_DATA_MEDIA_QUERY_KEY$, {mqList:$mqs_query$$11$$, mqListener:$mqListener_offcanvas$$13$$});
    }
  };
  $goog$exportPath_$$("OffcanvasUtils.setupResponsive", $oj$$35$$.$OffcanvasUtils$.$setupResponsive$, $oj$$35$$);
  $oj$$35$$.$OffcanvasUtils$.$tearDownResponsive$ = function $$oj$$35$$$$OffcanvasUtils$$$tearDownResponsive$$($drawer$$11_offcanvas$$14$$) {
    $drawer$$11_offcanvas$$14$$ = $oj$$35$$.$OffcanvasUtils$.$_getDrawer$($drawer$$11_offcanvas$$14$$);
    var $mql$$ = $$$$32$$.data($drawer$$11_offcanvas$$14$$[0], $oj$$35$$.$OffcanvasUtils$.$_DATA_MEDIA_QUERY_KEY$);
    $mql$$ && ($mql$$.mqList.removeListener($mql$$.mqListener), $$$$32$$.removeData($drawer$$11_offcanvas$$14$$[0], $oj$$35$$.$OffcanvasUtils$.$_DATA_MEDIA_QUERY_KEY$));
  };
  $goog$exportPath_$$("OffcanvasUtils.tearDownResponsive", $oj$$35$$.$OffcanvasUtils$.$tearDownResponsive$, $oj$$35$$);
  $oj$$35$$.$OffcanvasUtils$.open = function $$oj$$35$$$$OffcanvasUtils$$open$($offcanvas$$15$$) {
    var $drawer$$12$$ = $oj$$35$$.$OffcanvasUtils$.$_getDrawer$($offcanvas$$15$$), $oldOffcanvas_promise$$7$$ = $$$$32$$.data($drawer$$12$$[0], $oj$$35$$.$OffcanvasUtils$.$_DATA_OFFCANVAS_KEY$);
    if ($oldOffcanvas_promise$$7$$) {
      if ($oldOffcanvas_promise$$7$$[$oj$$35$$.$OffcanvasUtils$.$CLOSE_PROMISE_KEY$]) {
        return $oldOffcanvas_promise$$7$$[$oj$$35$$.$OffcanvasUtils$.$CLOSE_PROMISE_KEY$];
      }
      if ($oldOffcanvas_promise$$7$$[$oj$$35$$.$OffcanvasUtils$.$OPEN_PROMISE_KEY$]) {
        return $oldOffcanvas_promise$$7$$[$oj$$35$$.$OffcanvasUtils$.$OPEN_PROMISE_KEY$];
      }
    }
    var $oldOffcanvas_promise$$7$$ = new Promise(function($resolve$$43$$, $reject$$40$$) {
      $oj$$35$$.$Assert$.$assertPrototype$($drawer$$12$$, jQuery);
      var $edge$$10$$ = $oj$$35$$.$OffcanvasUtils$.$_saveEdge$($offcanvas$$15$$), $displayMode$$2_event$$523$$ = $$$$32$$.Event("ojbeforeopen");
      $drawer$$12$$.trigger($displayMode$$2_event$$523$$, $offcanvas$$15$$);
      if (!1 === $displayMode$$2_event$$523$$.result) {
        $reject$$40$$("ojbeforeopen veto");
      } else {
        var $size$$26$$, $displayMode$$2_event$$523$$ = $oj$$35$$.$OffcanvasUtils$.$_getDisplayMode$($offcanvas$$15$$), $myOffcanvas$$ = $$$$32$$.extend({}, $offcanvas$$15$$);
        $myOffcanvas$$[$oj$$35$$.$OffcanvasUtils$.$DISPLAY_MODE_KEY$] = $displayMode$$2_event$$523$$;
        $$$$32$$.data($drawer$$12$$[0], $oj$$35$$.$OffcanvasUtils$.$_DATA_OFFCANVAS_KEY$, $myOffcanvas$$);
        var $wrapper$$8$$;
        $wrapper$$8$$ = $oj$$35$$.$OffcanvasUtils$.$_getAnimateWrapper$($myOffcanvas$$);
        $oj$$35$$.$Assert$.$assertPrototype$($wrapper$$8$$, jQuery);
        $oj$$35$$.$OffcanvasUtils$.$_toggleClass$($myOffcanvas$$, $wrapper$$8$$, !0);
        $edge$$10$$ === $oj$$35$$.$OffcanvasUtils$.$EDGE_START$ || $edge$$10$$ === $oj$$35$$.$OffcanvasUtils$.$EDGE_END$ ? ($size$$26$$ = void 0 === $size$$26$$ ? $drawer$$12$$.outerWidth(!0) + "px" : $size$$26$$, $displayMode$$2_event$$523$$ === $oj$$35$$.$OffcanvasUtils$.$DISPLAY_MODE_PUSH$ && $oj$$35$$.$OffcanvasUtils$.$_setTranslationX$($wrapper$$8$$, $edge$$10$$, $size$$26$$)) : ($size$$26$$ = void 0 === $size$$26$$ ? $drawer$$12$$.outerHeight(!0) + "px" : $size$$26$$, $displayMode$$2_event$$523$$ === 
        $oj$$35$$.$OffcanvasUtils$.$DISPLAY_MODE_PUSH$ && $oj$$35$$.$OffcanvasUtils$.$_setTranslationY$($wrapper$$8$$, $edge$$10$$, $size$$26$$));
        var $outerWrapper$$;
        window.setTimeout(function() {
          $outerWrapper$$ = $oj$$35$$.$OffcanvasUtils$.$_getOuterWrapper$($drawer$$12$$);
          $oj$$35$$.$Assert$.$assertPrototype$($outerWrapper$$, jQuery);
          $outerWrapper$$.addClass($oj$$35$$.$OffcanvasUtils$.$_getShiftSelector$($edge$$10$$));
        }, 10);
        $oj$$35$$.$OffcanvasUtils$.$_applyModality$($myOffcanvas$$, $drawer$$12$$);
        $oj$$35$$.$OffcanvasUtils$.$_onTransitionEnd$($wrapper$$8$$, function() {
          $wrapper$$8$$.removeClass($oj$$35$$.$OffcanvasUtils$.$TRANSITION_SELECTOR$);
          $oj$$35$$.$OffcanvasUtils$.$_setFocus$($myOffcanvas$$);
          $drawer$$12$$.trigger("ojopen", $myOffcanvas$$);
          $oj$$35$$.$OffcanvasUtils$.$_registerCloseHandler$($myOffcanvas$$);
          $resolve$$43$$(!0);
        });
      }
    }), $nOffcanvas$$ = $$$$32$$.data($drawer$$12$$[0], $oj$$35$$.$OffcanvasUtils$.$_DATA_OFFCANVAS_KEY$);
    $nOffcanvas$$ && ($nOffcanvas$$[$oj$$35$$.$OffcanvasUtils$.$OPEN_PROMISE_KEY$] = $oldOffcanvas_promise$$7$$);
    return $oldOffcanvas_promise$$7$$;
  };
  $goog$exportPath_$$("OffcanvasUtils.open", $oj$$35$$.$OffcanvasUtils$.open, $oj$$35$$);
  $oj$$35$$.$OffcanvasUtils$.close = function $$oj$$35$$$$OffcanvasUtils$$close$($offcanvas$$16$$) {
    return $oj$$35$$.$OffcanvasUtils$.$_close$($offcanvas$$16$$[$oj$$35$$.$OffcanvasUtils$.$SELECTOR_KEY$], !0);
  };
  $goog$exportPath_$$("OffcanvasUtils.close", $oj$$35$$.$OffcanvasUtils$.close, $oj$$35$$);
  $oj$$35$$.$OffcanvasUtils$.$_close$ = function $$oj$$35$$$$OffcanvasUtils$$$_close$$($selector$$35$$, $animation$$3$$) {
    var $drawer$$13$$ = $$$$32$$($selector$$35$$);
    $oj$$35$$.$Assert$.$assertPrototype$($drawer$$13$$, jQuery);
    var $offcanvas$$17$$ = $$$$32$$.data($drawer$$13$$[0], $oj$$35$$.$OffcanvasUtils$.$_DATA_OFFCANVAS_KEY$);
    if ($offcanvas$$17$$ && $offcanvas$$17$$[$oj$$35$$.$OffcanvasUtils$.$CLOSE_PROMISE_KEY$]) {
      return $offcanvas$$17$$[$oj$$35$$.$OffcanvasUtils$.$CLOSE_PROMISE_KEY$];
    }
    var $promise$$8$$ = new Promise(function($resolve$$44$$, $reject$$41$$) {
      if ($oj$$35$$.$OffcanvasUtils$.$_isOpen$($drawer$$13$$)) {
        $selector$$35$$ != $offcanvas$$17$$[$oj$$35$$.$OffcanvasUtils$.$SELECTOR_KEY$] && $resolve$$44$$(!0);
        var $edge$$11_shiftSelector$$ = $oj$$35$$.$OffcanvasUtils$.$_getEdge$($drawer$$13$$), $displayMode$$3$$ = $offcanvas$$17$$[$oj$$35$$.$OffcanvasUtils$.$DISPLAY_MODE_KEY$], $edge$$11_shiftSelector$$ = $oj$$35$$.$OffcanvasUtils$.$_getShiftSelector$($edge$$11_shiftSelector$$), $outerWrapper$$1$$ = $oj$$35$$.$OffcanvasUtils$.$_getOuterWrapper$($drawer$$13$$);
        $oj$$35$$.$Assert$.$assertPrototype$($outerWrapper$$1$$, jQuery);
        $outerWrapper$$1$$.hasClass($edge$$11_shiftSelector$$) || $resolve$$44$$(!0);
        var $event$$524_wrapper$$9$$ = $$$$32$$.Event("ojbeforeclose");
        $drawer$$13$$.trigger($event$$524_wrapper$$9$$, $offcanvas$$17$$);
        if (!1 === $event$$524_wrapper$$9$$.result) {
          $reject$$41$$("beforeClose veto");
        } else {
          $event$$524_wrapper$$9$$ = $oj$$35$$.$OffcanvasUtils$.$_getAnimateWrapper$($offcanvas$$17$$);
          if ($animation$$3$$) {
            var $rafId$$ = 0, $endHandler$$1$$ = function $$endHandler$$1$$$() {
              $oj$$35$$.$OffcanvasUtils$.$_afterCloseHandler$($offcanvas$$17$$);
              0 !== $rafId$$ && window.cancelAnimationFrame($rafId$$);
              $resolve$$44$$(!0);
            }, $checkDetachedHandler$$ = function $$checkDetachedHandler$$$() {
              null == $drawer$$13$$[0].offsetParent ? $endHandler$$1$$() : $rafId$$ = window.requestAnimationFrame($checkDetachedHandler$$);
            };
            $oj$$35$$.$OffcanvasUtils$.$_onTransitionEnd$($event$$524_wrapper$$9$$, $endHandler$$1$$);
            $rafId$$ = window.requestAnimationFrame($checkDetachedHandler$$);
          }
          $displayMode$$3$$ === $oj$$35$$.$OffcanvasUtils$.$DISPLAY_MODE_PUSH$ && $oj$$35$$.$OffcanvasUtils$.$_setTransform$($event$$524_wrapper$$9$$, "");
          $outerWrapper$$1$$.removeClass($edge$$11_shiftSelector$$);
          $oj$$35$$.$OffcanvasUtils$.$_isModal$($offcanvas$$17$$) && $offcanvas$$17$$[$oj$$35$$.$OffcanvasUtils$.$GLASS_PANE_KEY$].removeClass($oj$$35$$.$OffcanvasUtils$.$GLASSPANE_DIM_SELECTOR$);
          $animation$$3$$ ? $event$$524_wrapper$$9$$.addClass($oj$$35$$.$OffcanvasUtils$.$TRANSITION_SELECTOR$) : ($oj$$35$$.$OffcanvasUtils$.$_afterCloseHandler$($offcanvas$$17$$), $resolve$$44$$(!0));
        }
      } else {
        $resolve$$44$$(!0);
      }
    });
    ($offcanvas$$17$$ = $$$$32$$.data($drawer$$13$$[0], $oj$$35$$.$OffcanvasUtils$.$_DATA_OFFCANVAS_KEY$)) && ($offcanvas$$17$$[$oj$$35$$.$OffcanvasUtils$.$CLOSE_PROMISE_KEY$] = $promise$$8$$);
    return $promise$$8$$;
  };
  $oj$$35$$.$OffcanvasUtils$.toggle = function $$oj$$35$$$$OffcanvasUtils$$toggle$($offcanvas$$18$$) {
    var $drawer$$14$$ = $oj$$35$$.$OffcanvasUtils$.$_getDrawer$($offcanvas$$18$$);
    $oj$$35$$.$Assert$.$assertPrototype$($drawer$$14$$, jQuery);
    return $oj$$35$$.$OffcanvasUtils$.$_isOpen$($drawer$$14$$) ? $oj$$35$$.$OffcanvasUtils$.close($offcanvas$$18$$) : $oj$$35$$.$OffcanvasUtils$.open($offcanvas$$18$$);
  };
  $goog$exportPath_$$("OffcanvasUtils.toggle", $oj$$35$$.$OffcanvasUtils$.toggle, $oj$$35$$);
  $oj$$35$$.$OffcanvasUtils$.$_addGlassPane$ = function $$oj$$35$$$$OffcanvasUtils$$$_addGlassPane$$($drawer$$15$$) {
    var $overlay$$2$$ = $$$$32$$("\x3cdiv\x3e");
    $overlay$$2$$.addClass($oj$$35$$.$OffcanvasUtils$.$GLASSPANE_SELECTOR$);
    $overlay$$2$$.attr("role", "presentation");
    $overlay$$2$$.attr("aria-hidden", "true");
    $overlay$$2$$.appendTo($drawer$$15$$.parent());
    $overlay$$2$$.on("keydown keyup keypress mousedown mouseup mouseover mouseout click focusin focus", function($event$$525$$) {
      $event$$525$$.stopPropagation();
      $event$$525$$.preventDefault();
    });
    return $overlay$$2$$;
  };
  $oj$$35$$.$OffcanvasUtils$.$_createSurrogate$ = function $$oj$$35$$$$OffcanvasUtils$$$_createSurrogate$$($layer$$20$$) {
    var $surrogate$$4$$ = $$$$32$$("\x3cscript\x3e"), $layerId$$2_surrogateId$$3$$ = $layer$$20$$.attr("id");
    $layerId$$2_surrogateId$$3$$ ? ($layerId$$2_surrogateId$$3$$ = [$layerId$$2_surrogateId$$3$$, "surrogate"].join("_"), $surrogate$$4$$.attr("id", $layerId$$2_surrogateId$$3$$)) : $layerId$$2_surrogateId$$3$$ = $surrogate$$4$$.uniqueId();
    $surrogate$$4$$.insertBefore($layer$$20$$);
    $layer$$20$$.attr($oj$$35$$.$OffcanvasUtils$.$SURROGATE_ATTR$, $layerId$$2_surrogateId$$3$$);
    return $surrogate$$4$$;
  };
  $oj$$35$$.$OffcanvasUtils$.$_swapOrder$ = function $$oj$$35$$$$OffcanvasUtils$$$_swapOrder$$($offcanvas$$19$$, $drawer$$16$$) {
    $offcanvas$$19$$[$oj$$35$$.$OffcanvasUtils$.$SURROGATE_KEY$] = $oj$$35$$.$OffcanvasUtils$.$_createSurrogate$($drawer$$16$$);
    $drawer$$16$$.appendTo($drawer$$16$$.parent());
  };
  $oj$$35$$.$OffcanvasUtils$.$_restoreOrder$ = function $$oj$$35$$$$OffcanvasUtils$$$_restoreOrder$$($offcanvas$$20_surrogate$$5$$) {
    var $drawer$$17$$ = $oj$$35$$.$OffcanvasUtils$.$_getDrawer$($offcanvas$$20_surrogate$$5$$);
    $offcanvas$$20_surrogate$$5$$ = $offcanvas$$20_surrogate$$5$$[$oj$$35$$.$OffcanvasUtils$.$SURROGATE_KEY$];
    $drawer$$17$$ && $offcanvas$$20_surrogate$$5$$ && $drawer$$17$$.attr($oj$$35$$.$OffcanvasUtils$.$SURROGATE_ATTR$) === $offcanvas$$20_surrogate$$5$$.attr("id") && ($drawer$$17$$.insertAfter($offcanvas$$20_surrogate$$5$$), $drawer$$17$$.removeAttr($oj$$35$$.$OffcanvasUtils$.$SURROGATE_ATTR$), $offcanvas$$20_surrogate$$5$$.remove());
  };
  $oj$$35$$.$OffcanvasUtils$.$_applyModality$ = function $$oj$$35$$$$OffcanvasUtils$$$_applyModality$$($offcanvas$$21$$, $drawer$$18$$) {
    $oj$$35$$.$OffcanvasUtils$.$_isModal$($offcanvas$$21$$) && ($offcanvas$$21$$[$oj$$35$$.$OffcanvasUtils$.$GLASS_PANE_KEY$] = $oj$$35$$.$OffcanvasUtils$.$_addGlassPane$($drawer$$18$$), $oj$$35$$.$OffcanvasUtils$.$_swapOrder$($offcanvas$$21$$, $drawer$$18$$), window.setTimeout(function() {
      $offcanvas$$21$$[$oj$$35$$.$OffcanvasUtils$.$GLASS_PANE_KEY$].addClass($oj$$35$$.$OffcanvasUtils$.$GLASSPANE_DIM_SELECTOR$);
    }, 0));
  };
  $oj$$35$$.$OffcanvasUtils$.$_removeModality$ = function $$oj$$35$$$$OffcanvasUtils$$$_removeModality$$($offcanvas$$22$$) {
    $oj$$35$$.$OffcanvasUtils$.$_isModal$($offcanvas$$22$$) && ($offcanvas$$22$$[$oj$$35$$.$OffcanvasUtils$.$GLASS_PANE_KEY$].remove(), $oj$$35$$.$OffcanvasUtils$.$_restoreOrder$($offcanvas$$22$$));
  };
  $oj$$35$$.$OffcanvasUtils$.$setupPanToReveal$ = function $$oj$$35$$$$OffcanvasUtils$$$setupPanToReveal$$($offcanvas$$23$$) {
    var $drawer$$20$$, $size$$27$$, $outerWrapper$$2$$, $wrapper$$10$$, $mOptions$$, $proceed$$, $direction$$15$$, $ui$$21$$, $evt$$26$$, $delta$$8$$, $edge$$12$$, $listener$$41$$;
    null == $$$$32$$($offcanvas$$23$$).attr("oj-data-pansetup") && ($$$$32$$($offcanvas$$23$$).attr("oj-data-pansetup", "true"), $offcanvas$$23$$.displayMode = "push", $drawer$$20$$ = $oj$$35$$.$OffcanvasUtils$.$_getDrawer$($offcanvas$$23$$), $size$$27$$ = $offcanvas$$23$$.size, null == $size$$27$$ && ($size$$27$$ = $drawer$$20$$.outerWidth()), $outerWrapper$$2$$ = $oj$$35$$.$OffcanvasUtils$.$_getOuterWrapper$($drawer$$20$$), $wrapper$$10$$ = $oj$$35$$.$OffcanvasUtils$.$_getAnimateWrapper$($offcanvas$$23$$), 
    $mOptions$$ = {recognizers:[[$Hammer$$5$$.Pan, {direction:$Hammer$$5$$.DIRECTION_HORIZONTAL}]]}, $proceed$$ = !1, $$$$32$$($outerWrapper$$2$$).$ojHammer$($mOptions$$).on("panstart", function($event$$526$$) {
      $direction$$15$$ = null;
      switch($event$$526$$.gesture.direction) {
        case $Hammer$$5$$.DIRECTION_LEFT:
          Math.abs($event$$526$$.gesture.deltaY) < Math.abs($event$$526$$.gesture.deltaX) && ($direction$$15$$ = $oj$$35$$.$OffcanvasUtils$.$_isRTL$() ? "end" : "start");
          break;
        case $Hammer$$5$$.DIRECTION_RIGHT:
          Math.abs($event$$526$$.gesture.deltaY) < Math.abs($event$$526$$.gesture.deltaX) && ($direction$$15$$ = $oj$$35$$.$OffcanvasUtils$.$_isRTL$() ? "start" : "end");
      }
      null != $direction$$15$$ && ($ui$$21$$ = {direction:$direction$$15$$, distance:Math.abs($event$$526$$.gesture.deltaX)}, $evt$$26$$ = $$$$32$$.Event("ojpanstart"), $drawer$$20$$.trigger($evt$$26$$, $ui$$21$$), $evt$$26$$.isDefaultPrevented() || ($offcanvas$$23$$._closePromise = null, $oj$$35$$.$OffcanvasUtils$.$_toggleClass$($offcanvas$$23$$, $wrapper$$10$$, !0), $proceed$$ = !0, $event$$526$$.stopPropagation()));
    }).on("panmove", function($event$$527$$) {
      $proceed$$ && ($delta$$8$$ = Math.abs($event$$527$$.gesture.deltaX), $drawer$$20$$.css("width", $delta$$8$$), $wrapper$$10$$.removeClass($oj$$35$$.$OffcanvasUtils$.$TRANSITION_SELECTOR$), $oj$$35$$.$OffcanvasUtils$.$_setTranslationX$($wrapper$$10$$, "start", $event$$527$$.gesture.deltaX + "px"), $ui$$21$$ = {direction:$direction$$15$$, distance:$delta$$8$$}, $evt$$26$$ = $$$$32$$.Event("ojpanmove"), $drawer$$20$$.trigger($evt$$26$$, $ui$$21$$), $event$$527$$.stopPropagation());
    }).on("panend", function($event$$528$$) {
      $proceed$$ && ($proceed$$ = !1, $delta$$8$$ = Math.abs($event$$528$$.gesture.deltaX), $ui$$21$$ = {distance:$delta$$8$$}, $evt$$26$$ = $$$$32$$.Event("ojpanend"), $drawer$$20$$.trigger($evt$$26$$, $ui$$21$$), $event$$528$$.stopPropagation(), $evt$$26$$.isDefaultPrevented() ? ($listener$$41$$ = function $$listener$$41$$$() {
        $oj$$35$$.$OffcanvasUtils$.$_toggleClass$($offcanvas$$23$$, $wrapper$$10$$, !1);
        $wrapper$$10$$.removeClass($oj$$35$$.$OffcanvasUtils$.$TRANSITION_SELECTOR$);
        $wrapper$$10$$.off("transitionend webkitTransitionEnd otransitionend oTransitionEnd", $listener$$41$$);
      }, $wrapper$$10$$.on("transitionend webkitTransitionEnd otransitionend oTransitionEnd", $listener$$41$$), $wrapper$$10$$.addClass($oj$$35$$.$OffcanvasUtils$.$TRANSITION_SELECTOR$), $oj$$35$$.$OffcanvasUtils$.$_setTranslationX$($wrapper$$10$$, "start", "0px")) : ($wrapper$$10$$.addClass($oj$$35$$.$OffcanvasUtils$.$TRANSITION_SELECTOR$), $drawer$$20$$.css("width", $size$$27$$ + "px"), $edge$$12$$ = $offcanvas$$23$$.edge, null == $edge$$12$$ && ($edge$$12$$ = $drawer$$20$$.hasClass("oj-offcanvas-start") ? 
      "start" : "end"), $oj$$35$$.$OffcanvasUtils$.$_setTranslationX$($wrapper$$10$$, $edge$$12$$, $size$$27$$ + "px"), $$$$32$$.data($drawer$$20$$[0], $oj$$35$$.$OffcanvasUtils$.$_DATA_OFFCANVAS_KEY$, $offcanvas$$23$$), $$$$32$$.data($drawer$$20$$[0], $oj$$35$$.$OffcanvasUtils$.$_DATA_EDGE_KEY$, $edge$$12$$), $oj$$35$$.$OffcanvasUtils$.$_registerCloseHandler$($offcanvas$$23$$)));
    }));
  };
  $goog$exportPath_$$("OffcanvasUtils.setupPanToReveal", $oj$$35$$.$OffcanvasUtils$.$setupPanToReveal$, $oj$$35$$);
  $oj$$35$$.$OffcanvasUtils$.$tearDownPanToReveal$ = function $$oj$$35$$$$OffcanvasUtils$$$tearDownPanToReveal$$($drawer$$21_offcanvas$$24$$) {
    $drawer$$21_offcanvas$$24$$ = $oj$$35$$.$OffcanvasUtils$.$_getDrawer$($drawer$$21_offcanvas$$24$$);
    $$$$32$$($oj$$35$$.$OffcanvasUtils$.$_getOuterWrapper$($drawer$$21_offcanvas$$24$$)).off("panstart panmove panend");
  };
  $goog$exportPath_$$("OffcanvasUtils.tearDownPanToReveal", $oj$$35$$.$OffcanvasUtils$.$tearDownPanToReveal$, $oj$$35$$);
});

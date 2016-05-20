/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
define(['./DvtToolkit'], function(dvt) {
  // Internal use only.  All APIs and functionality are subject to change at any time.

var $JSCompiler_alias_VOID$$ = void 0, $JSCompiler_alias_TRUE$$ = !0, $JSCompiler_alias_NULL$$ = null, $JSCompiler_alias_FALSE$$ = !1;
function $JSCompiler_identityFn$$() {
  return function($JSCompiler_identityFn_value$$) {
    return $JSCompiler_identityFn_value$$
  }
}
function $JSCompiler_emptyFn$$() {
  return function() {
  }
}
function $JSCompiler_set$$($JSCompiler_set_name$$) {
  return function($JSCompiler_set_value$$) {
    this[$JSCompiler_set_name$$] = $JSCompiler_set_value$$
  }
}
function $JSCompiler_get$$($JSCompiler_get_name$$) {
  return function() {
    return this[$JSCompiler_get_name$$]
  }
}
function $JSCompiler_returnArg$$($JSCompiler_returnArg_value$$) {
  return function() {
    return $JSCompiler_returnArg_value$$
  }
}
var $JSCompiler_prototypeAlias$$;
function $goog$exportPath_$$($name$$56$$, $opt_object$$) {
  0 == $name$$56$$.indexOf("dvt.") && ($name$$56$$ = $name$$56$$.substring(4));
  var $parts$$ = $name$$56$$.split("."), $cur$$ = eval("dvt");
  !($parts$$[0] in $cur$$) && $cur$$.execScript && $cur$$.execScript("var " + $parts$$[0]);
  for(var $part$$;$parts$$.length && ($part$$ = $parts$$.shift());) {
    !$parts$$.length && $opt_object$$ !== $JSCompiler_alias_VOID$$ ? $cur$$[$part$$] = $opt_object$$ : $cur$$ = $cur$$[$part$$] ? $cur$$[$part$$] : $cur$$[$part$$] = {}
  }
}
Math.floor(2147483648 * Math.random()).toString(36);

(function() {
  function $DvtOverviewEventManager$$($DvtOverviewEventManager$$) {
    this.Init($DvtOverviewEventManager$$.$getCtx$(), $DvtOverviewEventManager$$.$processEvent$, $DvtOverviewEventManager$$);
    this.$_overview$ = $DvtOverviewEventManager$$
  }
  function $DvtOverviewParser$$($DvtOverviewEventManager$$) {
    this.Init($DvtOverviewEventManager$$)
  }
  dvt.$OverviewUtils$ = {};
  dvt.$OverviewUtils$.$supportsTouch$ = function $dvt$$OverviewUtils$$$supportsTouch$$() {
    return dvt.$Agent$.$isTouchDevice$()
  };
  dvt.$Obj$.$createSubclass$(dvt.$OverviewUtils$, dvt.$Obj$);
  dvt.$OverviewUtils$.$getDatePosition$ = function $dvt$$OverviewUtils$$$getDatePosition$$($DvtOverviewEventManager$$, $DvtOverviewParser$$, $number_time$$5$$, $width$$87$$) {
    $number_time$$5$$ = ($number_time$$5$$ - $DvtOverviewEventManager$$) * $width$$87$$;
    $DvtOverviewEventManager$$ = $DvtOverviewParser$$ - $DvtOverviewEventManager$$;
    return 0 == $number_time$$5$$ || 0 == $DvtOverviewEventManager$$ ? 0 : $number_time$$5$$ / $DvtOverviewEventManager$$
  };
  dvt.$OverviewUtils$.$getPositionDate$ = function $dvt$$OverviewUtils$$$getPositionDate$$($DvtOverviewEventManager$$, $DvtOverviewParser$$, $pos$$50$$, $width$$88$$) {
    $DvtOverviewParser$$ = $pos$$50$$ * ($DvtOverviewParser$$ - $DvtOverviewEventManager$$);
    return 0 == $DvtOverviewParser$$ || 0 == $width$$88$$ ? $DvtOverviewEventManager$$ : $DvtOverviewParser$$ / $width$$88$$ + $DvtOverviewEventManager$$
  };
  dvt.$Overview$ = function $dvt$$Overview$$($DvtOverviewEventManager$$, $DvtOverviewParser$$, $callbackObj$$59$$) {
    this.Init($DvtOverviewEventManager$$, $DvtOverviewParser$$, $callbackObj$$59$$)
  };
  dvt.$Obj$.$createSubclass$(dvt.$Overview$, dvt.$Container$);
  dvt.$Overview$.$MIN_WINDOW_SIZE$ = 10;
  dvt.$Overview$.$DEFAULT_VERTICAL_TIMEAXIS_SIZE$ = 40;
  dvt.$Overview$.$DEFAULT_HORIZONTAL_TIMEAXIS_SIZE$ = 20;
  dvt.$Overview$.$HANDLE_PADDING_SIZE$ = 20;
  dvt.$Overview$.$_DEFAULT_AXIS_LABEL_PADDING$ = 5;
  dvt.$Overview$.$_DEFAULT_WINDOW_BORDER_WIDTH$ = 1;
  dvt.$Overview$.prototype.Init = function $dvt$$Overview$$$Init$($DvtOverviewParser$$, $callback$$92$$, $callbackObj$$60$$) {
    dvt.$Overview$.$superclass$.Init.call(this, $DvtOverviewParser$$);
    this.$_callback$ = $callback$$92$$;
    this.$_callbackObj$ = $callbackObj$$60$$;
    this.$_lastChildIndex$ = this.$isFlashEnvironment$() ? 7 : 6;
    if(this.$_callback$ != $JSCompiler_alias_NULL$$ || this.$_callbackObj$ != $JSCompiler_alias_NULL$$) {
      this.$EventManager$ = new $DvtOverviewEventManager$$(this), this.$EventManager$.$addListeners$(this), dvt.$OverviewUtils$.$supportsTouch$() ? (this.$addEvtListener$(dvt.$TouchEvent$.$TOUCHSTART$, this.$HandleTouchStart$, $JSCompiler_alias_FALSE$$, this), this.$addEvtListener$(dvt.$TouchEvent$.$TOUCHMOVE$, this.$HandleTouchMove$, $JSCompiler_alias_FALSE$$, this), this.$addEvtListener$(dvt.$TouchEvent$.$TOUCHEND$, this.$HandleTouchEnd$, $JSCompiler_alias_FALSE$$, this), this.$addEvtListener$(dvt.$MouseEvent$.$CLICK$, 
      this.$HandleShapeClick$, $JSCompiler_alias_FALSE$$, this)) : (this.$addEvtListener$(dvt.$MouseEvent$.$MOUSEOVER$, this.$HandleShapeMouseOver$, $JSCompiler_alias_FALSE$$, this), this.$addEvtListener$(dvt.$MouseEvent$.$MOUSEOUT$, this.$HandleShapeMouseOut$, $JSCompiler_alias_FALSE$$, this), this.$addEvtListener$(dvt.$MouseEvent$.$CLICK$, this.$HandleShapeClick$, $JSCompiler_alias_FALSE$$, this), this.$addEvtListener$(dvt.$KeyboardEvent$.$KEYDOWN$, this.$HandleKeyDown$, $JSCompiler_alias_FALSE$$, 
      this), this.$addEvtListener$(dvt.$KeyboardEvent$.$KEYUP$, this.$HandleKeyUp$, $JSCompiler_alias_FALSE$$, this))
    }
    this.$_initPos$ = 0
  };
  dvt.$Overview$.prototype.$setViewportRange$ = function $dvt$$Overview$$$$setViewportRange$$($DvtOverviewEventManager$$, $DvtOverviewParser$$, $overviewLength$$) {
    $overviewLength$$ == $JSCompiler_alias_NULL$$ && ($overviewLength$$ = this.$Width$);
    $DvtOverviewEventManager$$ = this.$getDatePosition$($DvtOverviewEventManager$$);
    var $slidingWindow_viewportEnd$$ = this.$getDatePosition$($DvtOverviewParser$$);
    $DvtOverviewEventManager$$ < this.$_leftMargin$ || $slidingWindow_viewportEnd$$ > this.$getMaximumPosition$() || ($DvtOverviewParser$$ = Math.max($slidingWindow_viewportEnd$$ - $DvtOverviewEventManager$$, this.$getMinimumWindowSize$()), 0 < $DvtOverviewParser$$ && (0 <= $DvtOverviewEventManager$$ && $slidingWindow_viewportEnd$$ <= $overviewLength$$) && ($slidingWindow_viewportEnd$$ = this.$getSlidingWindow$(), this.$isHorizontalRTL$() ? this.$setSlidingWindowPos$($slidingWindow_viewportEnd$$, 
    $overviewLength$$ - ($DvtOverviewEventManager$$ + $DvtOverviewParser$$)) : this.$setSlidingWindowPos$($slidingWindow_viewportEnd$$, $DvtOverviewEventManager$$), this.$setSlidingWindowSize$($slidingWindow_viewportEnd$$, $DvtOverviewParser$$), this.$ScrollTimeAxis$()))
  };
  dvt.$Overview$.prototype.$isFeatureOff$ = function $dvt$$Overview$$$$isFeatureOff$$() {
    return this.$_featuresOff$ == $JSCompiler_alias_NULL$$ ? $JSCompiler_alias_FALSE$$ : -1 != dvt.$ArrayUtils$.$getIndex$(this.$_featuresOff$, "zoom")
  };
  dvt.$Overview$.prototype.$isAnimationOnClick$ = function $dvt$$Overview$$$$isAnimationOnClick$$() {
    return"off" !== this.$_animationOnClick$
  };
  dvt.$Overview$.prototype.$render$ = function $dvt$$Overview$$$$render$$($DvtOverviewEventManager$$, $DvtOverviewParser$$, $height$$76$$) {
    if($DvtOverviewEventManager$$ == $JSCompiler_alias_NULL$$) {
      var $start$$27$$ = this.$_start$, $end$$18$$ = this.$_end$, $slidingWindow$$1$$ = this.$getSlidingWindow$(), $slidingWindowPos$$ = this.$getSlidingWindowPos$($slidingWindow$$1$$);
      $slidingWindow$$1$$ != $JSCompiler_alias_NULL$$ && 0 != $slidingWindowPos$$ && (this.$_renderStart$ = dvt.$OverviewUtils$.$getPositionDate$($start$$27$$, $end$$18$$, $slidingWindowPos$$, this.$Width$));
      this.$removeChildren$()
    }
    $DvtOverviewParser$$ != $JSCompiler_alias_NULL$$ && $height$$76$$ != $JSCompiler_alias_NULL$$ && (this.$Width$ = $DvtOverviewParser$$, this.$Height$ = $height$$76$$);
    $DvtOverviewEventManager$$ && ($DvtOverviewEventManager$$ = this.$Parse$($DvtOverviewEventManager$$), this.$_applyParsedProperties$($DvtOverviewEventManager$$));
    $DvtOverviewEventManager$$ = this.$_callback$ != $JSCompiler_alias_NULL$$ || this.$_callbackObj$ != $JSCompiler_alias_NULL$$;
    this.$createBackground$($DvtOverviewParser$$, $height$$76$$);
    $DvtOverviewEventManager$$ && this.$createSlidingWindow$($DvtOverviewParser$$, $height$$76$$);
    this.$updateTimeAxis$($DvtOverviewParser$$, $height$$76$$);
    this.$parseFilledTimeRangesXML$($DvtOverviewParser$$, $height$$76$$);
    this.$updateCurrentTime$($DvtOverviewParser$$, $height$$76$$);
    this.$parseDataXML$($DvtOverviewParser$$, $height$$76$$);
    $DvtOverviewEventManager$$ && (this.$createBorderAroundSlidingWindow$($DvtOverviewParser$$, $height$$76$$), this.$isFlashEnvironment$() && (this.$_resizeArrow$ = this.$createResizeArrow$()), this.$updateSlidingWindow$());
    this.$_initialFocusTime$ != $JSCompiler_alias_NULL$$ && (this.$_initPos$ = Math.max(0, dvt.$OverviewUtils$.$getDatePosition$(this.$_start$, this.$_end$, this.$_initialFocusTime$, this.$_width$)));
    0 < this.$_initPos$ && this.$longScrollToPos$(this.$_initPos$)
  };
  dvt.$Overview$.prototype.$getParser$ = function $dvt$$Overview$$$$getParser$$() {
    return new $DvtOverviewParser$$(this)
  };
  dvt.$Overview$.prototype.$Parse$ = function $dvt$$Overview$$$$Parse$$($DvtOverviewEventManager$$) {
    return this.$getParser$($DvtOverviewEventManager$$).parse($DvtOverviewEventManager$$)
  };
  dvt.$Overview$.prototype.$_applyParsedProperties$ = function $dvt$$Overview$$$$_applyParsedProperties$$($DvtOverviewEventManager$$) {
    this.$_start$ = $DvtOverviewEventManager$$.start;
    this.$_end$ = $DvtOverviewEventManager$$.end;
    this.$_width$ = $DvtOverviewEventManager$$.width;
    this.$_renderStart$ = $DvtOverviewEventManager$$.$renderStart$;
    this.$_currentTime$ = $DvtOverviewEventManager$$.currentTime;
    this.$_initialFocusTime$ = $DvtOverviewEventManager$$.$initialFocusTime$;
    this.$_animationOnClick$ = $DvtOverviewEventManager$$.$animationOnClick$;
    this.$_leftMargin$ = Math.max(0, $DvtOverviewEventManager$$.$leftMargin$);
    this.$_rightMargin$ = Math.max(0, $DvtOverviewEventManager$$.$rightMargin$);
    isNaN(this.$_leftMargin$) && (this.$_leftMargin$ = 0);
    isNaN(this.$_rightMargin$) && (this.$_rightMargin$ = 0);
    this.$_orientation$ = $DvtOverviewEventManager$$.orientation;
    this.$_overviewPosition$ = $DvtOverviewEventManager$$.$overviewPosition$;
    this.$_isRtl$ = $DvtOverviewEventManager$$.$isRtl$;
    $DvtOverviewEventManager$$.$featuresOff$ != $JSCompiler_alias_NULL$$ && (this.$_featuresOff$ = $DvtOverviewEventManager$$.$featuresOff$.split(" "));
    $DvtOverviewEventManager$$.$minimumWindowSize$ != $JSCompiler_alias_NULL$$ && 0 < $DvtOverviewEventManager$$.$minimumWindowSize$ && (this.$_minimumWindowSize$ = $DvtOverviewEventManager$$.$minimumWindowSize$);
    this.$_borderStyles$ = $DvtOverviewEventManager$$.$borderStyles$;
    this.$_timeAxisInfo$ = $DvtOverviewEventManager$$.$timeAxisInfo$;
    $DvtOverviewEventManager$$.$timeAxisInfo$ != $JSCompiler_alias_NULL$$ && (this.$_ticks$ = this.$_timeAxisInfo$.$ticks$);
    this.$_formattedTimeRanges$ = $DvtOverviewEventManager$$.$formattedTimeRanges$;
    this.$_borderTopStyle$ = $DvtOverviewEventManager$$.borderTopStyle;
    this.$_borderTopColor$ = $DvtOverviewEventManager$$.borderTopColor;
    this.$_windowBackgroundColor$ = $DvtOverviewEventManager$$.$windowBackgroundColor$;
    this.$_windowBackgroundAlpha$ = $DvtOverviewEventManager$$.$windowBackgroundAlpha$;
    this.$_windowBorderTopStyle$ = $DvtOverviewEventManager$$.$windowBorderTopStyle$;
    this.$_windowBorderRightStyle$ = $DvtOverviewEventManager$$.$windowBorderRightStyle$;
    this.$_windowBorderBottomStyle$ = $DvtOverviewEventManager$$.$windowBorderBottomStyle$;
    this.$_windowBorderLeftStyle$ = $DvtOverviewEventManager$$.$windowBorderLeftStyle$;
    this.$_windowBorderTopColor$ = $DvtOverviewEventManager$$.$windowBorderTopColor$;
    this.$_windowBorderRightColor$ = $DvtOverviewEventManager$$.$windowBorderRightColor$;
    this.$_windowBorderBottomColor$ = $DvtOverviewEventManager$$.$windowBorderBottomColor$;
    this.$_windowBorderLeftColor$ = $DvtOverviewEventManager$$.$windowBorderLeftColor$;
    this.$_handleTextureColor$ = $DvtOverviewEventManager$$.$handleTextureColor$;
    this.$_handleFillColor$ = $DvtOverviewEventManager$$.$handleFillColor$;
    this.$_handleBackgroundImage$ = $DvtOverviewEventManager$$.$handleBackgroundImage$;
    this.$_handleWidth$ = $DvtOverviewEventManager$$.$handleWidth$;
    this.$_handleHeight$ = $DvtOverviewEventManager$$.$handleHeight$;
    this.$_overviewBackgroundColor$ = $DvtOverviewEventManager$$.$overviewBackgroundColor$;
    this.$_currentTimeIndicatorColor$ = $DvtOverviewEventManager$$.$currentTimeIndicatorColor$;
    this.$_timeIndicatorColor$ = $DvtOverviewEventManager$$.$timeIndicatorColor$;
    this.$_timeAxisBarColor$ = $DvtOverviewEventManager$$.$timeAxisBarColor$;
    this.$_timeAxisBarOpacity$ = $DvtOverviewEventManager$$.$timeAxisBarOpacity$;
    this.$_leftFilterPanelColor$ = $DvtOverviewEventManager$$.$leftFilterPanelColor$;
    this.$_leftFilterPanelAlpha$ = $DvtOverviewEventManager$$.$leftFilterPanelAlpha$;
    this.$_rightFilterPanelColor$ = $DvtOverviewEventManager$$.$rightFilterPanelColor$;
    this.$_rightFilterPanelAlpha$ = $DvtOverviewEventManager$$.$rightFilterPanelAlpha$
  };
  dvt.$Overview$.prototype.$getDatePosition$ = function $dvt$$Overview$$$$getDatePosition$$($DvtOverviewEventManager$$) {
    return Math.max(0, dvt.$OverviewUtils$.$getDatePosition$(this.$_start$, this.$_end$, $DvtOverviewEventManager$$, this.$getOverviewSize$())) + this.$_leftMargin$
  };
  dvt.$Overview$.prototype.$getPositionDate$ = function $dvt$$Overview$$$$getPositionDate$$($DvtOverviewEventManager$$) {
    return dvt.$OverviewUtils$.$getPositionDate$(this.$_start$, this.$_end$, Math.max(0, $DvtOverviewEventManager$$ - this.$_leftMargin$), this.$getOverviewSize$())
  };
  dvt.$Overview$.prototype.$isRTL$ = function $dvt$$Overview$$$$isRTL$$() {
    return"true" == this.$_isRtl$
  };
  dvt.$Overview$.prototype.$isHorizontalRTL$ = function $dvt$$Overview$$$$isHorizontalRTL$$() {
    return this.$isRTL$() && !this.$isVertical$()
  };
  dvt.$Overview$.prototype.$isVertical$ = function $dvt$$Overview$$$$isVertical$$() {
    return"vertical" == this.$_orientation$
  };
  dvt.$Overview$.prototype.$isOverviewAbove$ = function $dvt$$Overview$$$$isOverviewAbove$$() {
    return"above" == this.$_overviewPosition$
  };
  dvt.$Overview$.prototype.$getOverviewSize$ = function $dvt$$Overview$$$$getOverviewSize$$() {
    return this.$isVertical$() ? this.$Height$ - this.$_leftMargin$ - this.$_rightMargin$ : this.$Width$ - this.$_leftMargin$ - this.$_rightMargin$
  };
  dvt.$Overview$.prototype.$getMaximumPosition$ = function $dvt$$Overview$$$$getMaximumPosition$$() {
    return this.$isVertical$() ? this.$Height$ - this.$_rightMargin$ : this.$Width$ - this.$_rightMargin$
  };
  dvt.$Overview$.prototype.$getMinimumWindowSize$ = function $dvt$$Overview$$$$getMinimumWindowSize$$() {
    return this.$_minWinSize$ != $JSCompiler_alias_NULL$$ ? this.$_minWinSize$ : this.$_minimumWindowSize$ != $JSCompiler_alias_NULL$$ ? this.$_minWinSize$ = dvt.$OverviewUtils$.$getDatePosition$(this.$_start$, this.$_end$, this.$_start$ + this.$_minimumWindowSize$, this.$getOverviewSize$()) : dvt.$Overview$.$MIN_WINDOW_SIZE$
  };
  dvt.$Overview$.prototype.$getHandleStart$ = function $dvt$$Overview$$$$getHandleStart$$() {
    return dvt.$OverviewUtils$.$supportsTouch$() ? this.$getHandleSize$() / 2 : 0
  };
  dvt.$Overview$.prototype.$getHandleSize$ = function $dvt$$Overview$$$$getHandleSize$$() {
    return dvt.$OverviewUtils$.$supportsTouch$() ? 30 : 10
  };
  dvt.$Overview$.prototype.$isHandle$ = function $dvt$$Overview$$$$isHandle$$($DvtOverviewEventManager$$) {
    var $DvtOverviewParser$$ = $DvtOverviewEventManager$$.getId();
    return"lh" == $DvtOverviewParser$$ || "rh" == $DvtOverviewParser$$ || "lhb" == $DvtOverviewParser$$ || "rhb" == $DvtOverviewParser$$ || "grpy" == $DvtOverviewParser$$ || "lbgrh" == $DvtOverviewParser$$ || "rbgrh" == $DvtOverviewParser$$ || $DvtOverviewEventManager$$.getParent() != $JSCompiler_alias_NULL$$ && "grpy" == $DvtOverviewEventManager$$.getParent().getId()
  };
  dvt.$Overview$.prototype.$getTimeAxisWidth$ = function $dvt$$Overview$$$$getTimeAxisWidth$$() {
    if(this.$_timeAxisInfo$ == $JSCompiler_alias_NULL$$) {
      return 0
    }
    if(this.$_timeAxisWidth$ == $JSCompiler_alias_NULL$$) {
      var $DvtOverviewEventManager$$ = parseInt(this.$_timeAxisInfo$.width, 10);
      this.$_timeAxisWidth$ = !isNaN($DvtOverviewEventManager$$) && $DvtOverviewEventManager$$ < this.$Width$ ? $DvtOverviewEventManager$$ : dvt.$Overview$.$DEFAULT_VERTICAL_TIMEAXIS_SIZE$
    }
    return this.$_timeAxisWidth$
  };
  dvt.$Overview$.prototype.$getTimeAxisHeight$ = function $dvt$$Overview$$$$getTimeAxisHeight$$() {
    if(this.$_timeAxisInfo$ == $JSCompiler_alias_NULL$$) {
      return 0
    }
    if(this.$_timeAxisHeight$ == $JSCompiler_alias_NULL$$) {
      var $DvtOverviewEventManager$$ = parseInt(this.$_timeAxisInfo$.height, 10);
      this.$_timeAxisHeight$ = !isNaN($DvtOverviewEventManager$$) && $DvtOverviewEventManager$$ < this.$Height$ ? $DvtOverviewEventManager$$ : dvt.$Overview$.$DEFAULT_HORIZONTAL_TIMEAXIS_SIZE$
    }
    return this.$_timeAxisHeight$
  };
  dvt.$Overview$.prototype.$getPageX$ = function $dvt$$Overview$$$$getPageX$$($DvtOverviewEventManager$$) {
    return dvt.$OverviewUtils$.$supportsTouch$() && $DvtOverviewEventManager$$.targetTouches != $JSCompiler_alias_NULL$$ ? 0 < $DvtOverviewEventManager$$.targetTouches.length ? $DvtOverviewEventManager$$.targetTouches[0].pageX : $JSCompiler_alias_NULL$$ : $DvtOverviewEventManager$$.pageX
  };
  dvt.$Overview$.prototype.$getPageY$ = function $dvt$$Overview$$$$getPageY$$($DvtOverviewEventManager$$) {
    return dvt.$OverviewUtils$.$supportsTouch$() && $DvtOverviewEventManager$$.targetTouches != $JSCompiler_alias_NULL$$ ? 0 < $DvtOverviewEventManager$$.targetTouches.length ? $DvtOverviewEventManager$$.targetTouches[0].pageY : $JSCompiler_alias_NULL$$ : $DvtOverviewEventManager$$.pageY
  };
  dvt.$Overview$.prototype.$isLeftAndRightFilterRendered$ = $JSCompiler_returnArg$$($JSCompiler_alias_FALSE$$);
  dvt.$Overview$.prototype.$getSlidingWindow$ = function $dvt$$Overview$$$$getSlidingWindow$$() {
    return this.$getChildAt$(1)
  };
  dvt.$Overview$.prototype.$getLeftBackground$ = function $dvt$$Overview$$$$getLeftBackground$$() {
    return this.$isLeftAndRightFilterRendered$() ? this.$getChildAt$(3) : $JSCompiler_alias_NULL$$
  };
  dvt.$Overview$.prototype.$getRightBackground$ = function $dvt$$Overview$$$$getRightBackground$$() {
    return this.$isLeftAndRightFilterRendered$() ? this.$getChildAt$(4) : $JSCompiler_alias_NULL$$
  };
  dvt.$Overview$.prototype.$getLeftBackgroundHandle$ = function $dvt$$Overview$$$$getLeftBackgroundHandle$$() {
    return this.$isLeftAndRightFilterRendered$() && !this.$isFeatureOff$() ? this.$getChildAt$(5) : $JSCompiler_alias_NULL$$
  };
  dvt.$Overview$.prototype.$getRightBackgroundHandle$ = function $dvt$$Overview$$$$getRightBackgroundHandle$$() {
    return this.$isLeftAndRightFilterRendered$() && !this.$isFeatureOff$() ? this.$getChildAt$(6) : $JSCompiler_alias_NULL$$
  };
  dvt.$Overview$.prototype.$getLeftHandle$ = function $dvt$$Overview$$$$getLeftHandle$$() {
    return this.$getChildAt$(this.$getNumChildren$() - this.$_lastChildIndex$)
  };
  dvt.$Overview$.prototype.$getRightHandle$ = function $dvt$$Overview$$$$getRightHandle$$() {
    return this.$getChildAt$(this.$getNumChildren$() - (this.$_lastChildIndex$ - 1))
  };
  dvt.$Overview$.prototype.$getLeftTopBar$ = function $dvt$$Overview$$$$getLeftTopBar$$() {
    return this.$getChildAt$(this.$getNumChildren$() - (this.$_lastChildIndex$ - 2))
  };
  dvt.$Overview$.prototype.$getRightTopBar$ = function $dvt$$Overview$$$$getRightTopBar$$() {
    return this.$getChildAt$(this.$getNumChildren$() - (this.$_lastChildIndex$ - 3))
  };
  dvt.$Overview$.prototype.$getBottomBar$ = function $dvt$$Overview$$$$getBottomBar$$() {
    return this.$getChildAt$(this.$getNumChildren$() - (this.$_lastChildIndex$ - 4))
  };
  dvt.$Overview$.prototype.$getTopBar$ = function $dvt$$Overview$$$$getTopBar$$() {
    return this.$getChildAt$(this.$getNumChildren$() - (this.$_lastChildIndex$ - 5))
  };
  dvt.$Overview$.prototype.$setLinePos$ = function $dvt$$Overview$$$$setLinePos$$($DvtOverviewEventManager$$, $DvtOverviewParser$$, $pos2$$) {
    this.$isVertical$() ? (-1 != $DvtOverviewParser$$ && $DvtOverviewEventManager$$.$setY1$($DvtOverviewParser$$), -1 != $pos2$$ && $DvtOverviewEventManager$$.$setY2$($pos2$$)) : (-1 != $DvtOverviewParser$$ && $DvtOverviewEventManager$$.$setX1$($DvtOverviewParser$$), -1 != $pos2$$ && $DvtOverviewEventManager$$.$setX2$($pos2$$))
  };
  dvt.$Overview$.prototype.$getLinePos1$ = function $dvt$$Overview$$$$getLinePos1$$($DvtOverviewEventManager$$) {
    return this.$isVertical$() ? $DvtOverviewEventManager$$.$getY1$() : $DvtOverviewEventManager$$.$getX1$()
  };
  dvt.$Overview$.prototype.$_findDrawable$ = function $dvt$$Overview$$$$_findDrawable$$($DvtOverviewEventManager$$) {
    $DvtOverviewEventManager$$ = $DvtOverviewEventManager$$.target;
    if($DvtOverviewEventManager$$ != $JSCompiler_alias_NULL$$) {
      var $DvtOverviewParser$$ = $DvtOverviewEventManager$$.getId();
      if($DvtOverviewParser$$ == $JSCompiler_alias_NULL$$) {
        return $JSCompiler_alias_NULL$$
      }
      if("_border" == $DvtOverviewParser$$.substr($DvtOverviewParser$$.length - 7)) {
        return this.$getChildAfter$($DvtOverviewEventManager$$)
      }
      if("tick" != $DvtOverviewParser$$.substr(0, 4) && "ltb" != $DvtOverviewParser$$ && "rtb" != $DvtOverviewParser$$ && "bb" != $DvtOverviewParser$$ && "tab" != $DvtOverviewParser$$) {
        return $DvtOverviewEventManager$$
      }
    }
    return $JSCompiler_alias_NULL$$
  };
  dvt.$Overview$.prototype.$isMovable$ = function $dvt$$Overview$$$$isMovable$$($DvtOverviewEventManager$$) {
    return"window" == $DvtOverviewEventManager$$.getId() || "ftr" == $DvtOverviewEventManager$$.getId() || "sta" == $DvtOverviewEventManager$$.getId() || this.$isHandle$($DvtOverviewEventManager$$) ? $JSCompiler_alias_TRUE$$ : $JSCompiler_alias_FALSE$$
  };
  dvt.$Overview$.prototype.$isFlashEnvironment$ = function $dvt$$Overview$$$$isFlashEnvironment$$() {
    return window && window.$isFlashEnvironment$
  };
  dvt.$Overview$.prototype.$createBackground$ = function $dvt$$Overview$$$$createBackground$$($DvtOverviewEventManager$$, $DvtOverviewParser$$) {
    var $background$$11$$ = new dvt.$Rect$(this.$getCtx$(), 0, 0, $DvtOverviewEventManager$$, $DvtOverviewParser$$, "bg");
    $background$$11$$.$setSolidFill$(this.$_overviewBackgroundColor$);
    $background$$11$$.$setPixelHinting$();
    this.$addChild$($background$$11$$);
    return $background$$11$$
  };
  dvt.$Overview$.prototype.$createSlidingWindow$ = function $dvt$$Overview$$$$createSlidingWindow$$($DvtOverviewEventManager$$, $DvtOverviewParser$$) {
    var $leftBackgroundResizeHandle_vertical$$ = this.$isVertical$(), $leftBackground_slidingWindow$$2_timeAxisTopBar$$ = $leftBackgroundResizeHandle_vertical$$ ? new dvt.$Rect$(this.$getCtx$(), 0, 0, $DvtOverviewEventManager$$, 0, "window") : new dvt.$Rect$(this.$getCtx$(), 0, 0, 0, $DvtOverviewParser$$, "window");
    $leftBackground_slidingWindow$$2_timeAxisTopBar$$.$setSolidFill$(this.$_windowBackgroundColor$, this.$_windowBackgroundAlpha$);
    $leftBackground_slidingWindow$$2_timeAxisTopBar$$.$setPixelHinting$();
    if(!this.$isFeatureOff$()) {
      var $handleSize_rightHandleBackground$$ = this.$getHandleSize$(), $handleStart_rightBackgroundResizeHandle$$ = this.$getHandleStart$();
      if($leftBackgroundResizeHandle_vertical$$) {
        var $handleX_handleY_rightGrippy$$ = ($DvtOverviewEventManager$$ - 36) / 2, $leftHandle_leftHandleCmds$$ = dvt.$PathUtils$.moveTo($handleX_handleY_rightGrippy$$, 0) + dvt.$PathUtils$.$quadTo$($handleX_handleY_rightGrippy$$ + 3, 6, $handleX_handleY_rightGrippy$$ + 8, 8) + dvt.$PathUtils$.lineTo($handleX_handleY_rightGrippy$$ + 28, 8) + dvt.$PathUtils$.$quadTo$($handleX_handleY_rightGrippy$$ + 33, 6, $handleX_handleY_rightGrippy$$ + 36, 0);
        dvt.$PathUtils$.closePath();
        var $rightHandle_rightHandleCmds$$ = dvt.$PathUtils$.moveTo($handleX_handleY_rightGrippy$$, 0) + dvt.$PathUtils$.$quadTo$($handleX_handleY_rightGrippy$$ + 3, -6, $handleX_handleY_rightGrippy$$ + 8, -8) + dvt.$PathUtils$.lineTo($handleX_handleY_rightGrippy$$ + 28, -8) + dvt.$PathUtils$.$quadTo$($handleX_handleY_rightGrippy$$ + 33, -6, $handleX_handleY_rightGrippy$$ + 36, 0);
        dvt.$PathUtils$.closePath();
        var $leftHandleBackground_rightBackground$$ = new dvt.$Rect$(this.$getCtx$(), 0, 0, $DvtOverviewEventManager$$, $handleSize_rightHandleBackground$$, "lhb"), $handleSize_rightHandleBackground$$ = new dvt.$Rect$(this.$getCtx$(), 0, 0, $DvtOverviewEventManager$$, $handleSize_rightHandleBackground$$, "rhb"), $cursor$$ = "row-resize";
        if(this.$_handleBackgroundImage$) {
          var $leftGrippy$$ = this.$createGrippyImage$($DvtOverviewEventManager$$, 10), $handleX_handleY_rightGrippy$$ = this.$createGrippyImage$($DvtOverviewEventManager$$, 10)
        }else {
          $leftGrippy$$ = this.$createGrippy$($handleX_handleY_rightGrippy$$), $handleX_handleY_rightGrippy$$ = this.$createGrippy$($handleX_handleY_rightGrippy$$)
        }
      }else {
        $handleX_handleY_rightGrippy$$ = ($DvtOverviewParser$$ - 36) / 2, $leftHandle_leftHandleCmds$$ = dvt.$PathUtils$.moveTo(0, $handleX_handleY_rightGrippy$$) + dvt.$PathUtils$.$quadTo$(6, $handleX_handleY_rightGrippy$$ + 3, 8, $handleX_handleY_rightGrippy$$ + 8) + dvt.$PathUtils$.lineTo(8, $handleX_handleY_rightGrippy$$ + 28) + dvt.$PathUtils$.$quadTo$(6, $handleX_handleY_rightGrippy$$ + 33, 0, $handleX_handleY_rightGrippy$$ + 36), dvt.$PathUtils$.closePath(), $rightHandle_rightHandleCmds$$ = 
        dvt.$PathUtils$.moveTo(0, $handleX_handleY_rightGrippy$$) + dvt.$PathUtils$.$quadTo$(-6, $handleX_handleY_rightGrippy$$ + 3, -8, $handleX_handleY_rightGrippy$$ + 8) + dvt.$PathUtils$.lineTo(-8, $handleX_handleY_rightGrippy$$ + 28) + dvt.$PathUtils$.$quadTo$(-6, $handleX_handleY_rightGrippy$$ + 33, 0, $handleX_handleY_rightGrippy$$ + 36), dvt.$PathUtils$.closePath(), $leftHandleBackground_rightBackground$$ = new dvt.$Rect$(this.$getCtx$(), 0 - $handleStart_rightBackgroundResizeHandle$$, 0, 
        $handleSize_rightHandleBackground$$, $DvtOverviewParser$$, "lhb"), $handleSize_rightHandleBackground$$ = new dvt.$Rect$(this.$getCtx$(), $handleStart_rightBackgroundResizeHandle$$, 0, $handleSize_rightHandleBackground$$, $DvtOverviewParser$$, "rhb"), $cursor$$ = "col-resize", this.$_handleBackgroundImage$ ? ($leftGrippy$$ = this.$createGrippyImage$(10, $DvtOverviewParser$$), $handleX_handleY_rightGrippy$$ = this.$createGrippyImage$(10, $DvtOverviewParser$$)) : ($leftGrippy$$ = this.$createGrippy$($handleX_handleY_rightGrippy$$), 
        $handleX_handleY_rightGrippy$$ = this.$createGrippy$($handleX_handleY_rightGrippy$$))
      }
      $leftHandleBackground_rightBackground$$.$setSolidFill$(this.$_windowBackgroundColor$, 0);
      $handleSize_rightHandleBackground$$.$setSolidFill$(this.$_windowBackgroundColor$, 0);
      $leftHandleBackground_rightBackground$$.$setPixelHinting$();
      $handleSize_rightHandleBackground$$.$setPixelHinting$();
      $leftHandle_leftHandleCmds$$ = new dvt.$Path$(this.$getCtx$(), $leftHandle_leftHandleCmds$$, "lh");
      $rightHandle_rightHandleCmds$$ = new dvt.$Path$(this.$getCtx$(), $rightHandle_rightHandleCmds$$, "rh");
      $leftHandle_leftHandleCmds$$.$setSolidFill$(this.$_handleFillColor$);
      $leftHandle_leftHandleCmds$$.$setSolidStroke$(this.$_handleFillColor$);
      $rightHandle_rightHandleCmds$$.$setSolidFill$(this.$_handleFillColor$);
      $rightHandle_rightHandleCmds$$.$setSolidStroke$(this.$_handleFillColor$);
      this.$_windowBackgroundColor$ == this.$_handleFillColor$ && ($leftHandle_leftHandleCmds$$.$setPixelHinting$(), $rightHandle_rightHandleCmds$$.$setPixelHinting$());
      $leftHandleBackground_rightBackground$$.setCursor($cursor$$);
      $handleSize_rightHandleBackground$$.setCursor($cursor$$);
      $leftHandle_leftHandleCmds$$.setCursor($cursor$$);
      $rightHandle_rightHandleCmds$$.setCursor($cursor$$);
      $leftGrippy$$.setCursor($cursor$$);
      $handleX_handleY_rightGrippy$$.setCursor($cursor$$);
      $leftBackground_slidingWindow$$2_timeAxisTopBar$$.$addChild$($leftHandleBackground_rightBackground$$);
      $leftBackground_slidingWindow$$2_timeAxisTopBar$$.$addChild$($leftHandle_leftHandleCmds$$);
      $leftBackground_slidingWindow$$2_timeAxisTopBar$$.$addChild$($leftGrippy$$);
      $leftBackground_slidingWindow$$2_timeAxisTopBar$$.$addChild$($handleSize_rightHandleBackground$$);
      $leftBackground_slidingWindow$$2_timeAxisTopBar$$.$addChild$($rightHandle_rightHandleCmds$$);
      $leftBackground_slidingWindow$$2_timeAxisTopBar$$.$addChild$($handleX_handleY_rightGrippy$$)
    }
    $leftBackground_slidingWindow$$2_timeAxisTopBar$$.setCursor("move");
    this.$addChild$($leftBackground_slidingWindow$$2_timeAxisTopBar$$);
    $leftBackground_slidingWindow$$2_timeAxisTopBar$$ = $leftBackgroundResizeHandle_vertical$$ ? this.$isRTL$() ? new dvt.$Line$(this.$getCtx$(), this.$getTimeAxisWidth$(), 0, this.$getTimeAxisWidth$(), $DvtOverviewParser$$, "tab") : new dvt.$Line$(this.$getCtx$(), $DvtOverviewEventManager$$ - this.$getTimeAxisWidth$(), 0, $DvtOverviewEventManager$$ - this.$getTimeAxisWidth$(), $DvtOverviewParser$$, "tab") : this.$isOverviewAbove$() ? new dvt.$Line$(this.$getCtx$(), 0, this.$getTimeAxisHeight$(), 
    $DvtOverviewEventManager$$, this.$getTimeAxisHeight$(), "tab") : new dvt.$Line$(this.$getCtx$(), 0, $DvtOverviewParser$$ - this.$getTimeAxisHeight$(), $DvtOverviewEventManager$$, $DvtOverviewParser$$ - this.$getTimeAxisHeight$(), "tab");
    $leftBackground_slidingWindow$$2_timeAxisTopBar$$.$setSolidStroke$(this.$_timeAxisBarColor$, this.$_timeAxisBarOpacity$);
    $leftBackground_slidingWindow$$2_timeAxisTopBar$$.$setPixelHinting$();
    this.$_timeAxisTopBar$ = $leftBackground_slidingWindow$$2_timeAxisTopBar$$;
    this.$addChild$($leftBackground_slidingWindow$$2_timeAxisTopBar$$);
    this.$isLeftAndRightFilterRendered$() && ($leftBackgroundResizeHandle_vertical$$ ? ($leftBackground_slidingWindow$$2_timeAxisTopBar$$ = new dvt.$Rect$(this.$getCtx$(), 0, 0, $DvtOverviewEventManager$$, 0, "lbg"), $leftHandleBackground_rightBackground$$ = new dvt.$Rect$(this.$getCtx$(), 0, 0, $DvtOverviewEventManager$$, 0, "rbg")) : ($leftBackground_slidingWindow$$2_timeAxisTopBar$$ = new dvt.$Rect$(this.$getCtx$(), 0, 0, 0, $DvtOverviewParser$$, "lbg"), $leftHandleBackground_rightBackground$$ = 
    new dvt.$Rect$(this.$getCtx$(), 0, 0, 0, $DvtOverviewParser$$, "rbg")), $leftBackground_slidingWindow$$2_timeAxisTopBar$$.$setSolidFill$(this.$_leftFilterPanelColor$, this.$_leftFilterPanelAlpha$), this.$addChild$($leftBackground_slidingWindow$$2_timeAxisTopBar$$), $leftHandleBackground_rightBackground$$.$setSolidFill$(this.$_rightFilterPanelColor$, this.$_rightFilterPanelAlpha$), this.$addChild$($leftHandleBackground_rightBackground$$), dvt.$OverviewUtils$.$supportsTouch$() && $handleStart_rightBackgroundResizeHandle$$ != 
    $JSCompiler_alias_VOID$$ && (this.$getHandleStart$(), $leftBackgroundResizeHandle_vertical$$ ? ($leftBackgroundResizeHandle_vertical$$ = new dvt.$Rect$(this.$getCtx$(), 0, 0, $DvtOverviewEventManager$$, $handleStart_rightBackgroundResizeHandle$$, "lbgrh"), $handleStart_rightBackgroundResizeHandle$$ = new dvt.$Rect$(this.$getCtx$(), 0, 0, $DvtOverviewEventManager$$, $handleStart_rightBackgroundResizeHandle$$, "rbgrh")) : ($leftBackgroundResizeHandle_vertical$$ = new dvt.$Rect$(this.$getCtx$(), 
    0, 0, $handleStart_rightBackgroundResizeHandle$$, $DvtOverviewParser$$, "lbgrh"), $handleStart_rightBackgroundResizeHandle$$ = new dvt.$Rect$(this.$getCtx$(), 0, 0, $handleStart_rightBackgroundResizeHandle$$, $DvtOverviewParser$$, "rbgrh")), $leftBackgroundResizeHandle_vertical$$.$setSolidFill$(this.$_leftFilterPanelColor$, 0), this.$addChild$($leftBackgroundResizeHandle_vertical$$), $handleStart_rightBackgroundResizeHandle$$.$setSolidFill$(this.$_rightFilterPanelColor$, 0), this.$addChild$($handleStart_rightBackgroundResizeHandle$$)))
  };
  dvt.$Overview$.prototype.$createGrippyImage$ = function $dvt$$Overview$$$$createGrippyImage$$($DvtOverviewEventManager$$, $DvtOverviewParser$$) {
    var $grippy$$ = new dvt.$Image$(this.$getCtx$(), this.$_handleBackgroundImage$, ($DvtOverviewEventManager$$ - this.$_handleWidth$) / 2, ($DvtOverviewParser$$ - this.$_handleHeight$) / 2, this.$_handleWidth$, this.$_handleHeight$, "grpy");
    $grippy$$.$setMouseEnabled$($JSCompiler_alias_FALSE$$);
    return $grippy$$
  };
  dvt.$Overview$.prototype.$createGrippy$ = function $dvt$$Overview$$$$createGrippy$$($DvtOverviewEventManager$$) {
    var $DvtOverviewParser$$ = new dvt.$Container$(this.$getCtx$(), "grpy"), $color$$55$$ = this.$_handleTextureColor$;
    if(this.$isVertical$()) {
      var $startx$$1$$ = 8 + $DvtOverviewEventManager$$;
      $DvtOverviewEventManager$$ = 3;
      for(var $i$$532$$ = 0;9 > $i$$532$$;$i$$532$$++) {
        var $dot$$ = new dvt.$Line$(this.$getCtx$(), $startx$$1$$ + 2 * $i$$532$$, $DvtOverviewEventManager$$, $startx$$1$$ + 2 * $i$$532$$ + 1, $DvtOverviewEventManager$$, "dot1" + $i$$532$$);
        $dot$$.$setSolidStroke$($color$$55$$);
        $DvtOverviewParser$$.$addChild$($dot$$);
        $DvtOverviewEventManager$$ += 2;
        $dot$$ = new dvt.$Line$(this.$getCtx$(), $startx$$1$$ + 1 + 2 * $i$$532$$, $DvtOverviewEventManager$$, $startx$$1$$ + 1 + 2 * $i$$532$$ + 1, $DvtOverviewEventManager$$, "dot2" + $i$$532$$);
        $dot$$.$setSolidStroke$($color$$55$$);
        $DvtOverviewParser$$.$addChild$($dot$$);
        $DvtOverviewEventManager$$ += 2;
        $dot$$ = new dvt.$Line$(this.$getCtx$(), $startx$$1$$ + 2 * $i$$532$$, $DvtOverviewEventManager$$, $startx$$1$$ + 2 * $i$$532$$ + 1, $DvtOverviewEventManager$$, "dot3" + $i$$532$$);
        $dot$$.$setSolidStroke$($color$$55$$);
        $DvtOverviewParser$$.$addChild$($dot$$);
        $DvtOverviewEventManager$$ = 3
      }
      $dot$$ = new dvt.$Line$(this.$getCtx$(), $startx$$1$$ + 18, $DvtOverviewEventManager$$, $startx$$1$$ + 18 + 1, $DvtOverviewEventManager$$, "dot4");
      $dot$$.$setSolidStroke$($color$$55$$);
      $DvtOverviewParser$$.$addChild$($dot$$);
      $DvtOverviewEventManager$$ += 4;
      $dot$$ = new dvt.$Line$(this.$getCtx$(), $startx$$1$$ + 18, $DvtOverviewEventManager$$, $startx$$1$$ + 18 + 1, $DvtOverviewEventManager$$, "dot5")
    }else {
      $startx$$1$$ = 3;
      $DvtOverviewEventManager$$ = 8 + $DvtOverviewEventManager$$;
      for($i$$532$$ = 0;9 > $i$$532$$;$i$$532$$++) {
        $dot$$ = new dvt.$Line$(this.$getCtx$(), $startx$$1$$, $DvtOverviewEventManager$$ + 2 * $i$$532$$, $startx$$1$$, $DvtOverviewEventManager$$ + 2 * $i$$532$$ + 1, "dot1" + $i$$532$$), $dot$$.$setSolidStroke$($color$$55$$), $DvtOverviewParser$$.$addChild$($dot$$), $startx$$1$$ += 2, $dot$$ = new dvt.$Line$(this.$getCtx$(), $startx$$1$$, $DvtOverviewEventManager$$ + 1 + 2 * $i$$532$$, $startx$$1$$, $DvtOverviewEventManager$$ + 1 + 2 * $i$$532$$ + 1, "dot2" + $i$$532$$), $dot$$.$setSolidStroke$($color$$55$$), 
        $DvtOverviewParser$$.$addChild$($dot$$), $startx$$1$$ += 2, $dot$$ = new dvt.$Line$(this.$getCtx$(), $startx$$1$$, $DvtOverviewEventManager$$ + 2 * $i$$532$$, $startx$$1$$, $DvtOverviewEventManager$$ + 2 * $i$$532$$ + 1, "dot3" + $i$$532$$), $dot$$.$setSolidStroke$($color$$55$$), $DvtOverviewParser$$.$addChild$($dot$$), $startx$$1$$ = 3
      }
      $dot$$ = new dvt.$Line$(this.$getCtx$(), $startx$$1$$, $DvtOverviewEventManager$$ + 18, $startx$$1$$, $DvtOverviewEventManager$$ + 18 + 1, "dot4");
      $dot$$.$setSolidStroke$($color$$55$$);
      $DvtOverviewParser$$.$addChild$($dot$$);
      $startx$$1$$ += 4;
      $dot$$ = new dvt.$Line$(this.$getCtx$(), $startx$$1$$, $DvtOverviewEventManager$$ + 18, $startx$$1$$, $DvtOverviewEventManager$$ + 18 + 1, "dot5")
    }
    $dot$$.$setSolidStroke$($color$$55$$);
    $DvtOverviewParser$$.$addChild$($dot$$);
    $DvtOverviewParser$$.$setPixelHinting$();
    return $DvtOverviewParser$$
  };
  dvt.$Overview$.prototype.$updateSlidingWindow$ = function $dvt$$Overview$$$$updateSlidingWindow$$() {
    var $DvtOverviewEventManager$$ = this.$isVertical$(), $DvtOverviewParser$$ = this.$getSlidingWindow$(), $size$$28$$ = this.$getOverviewSize$(), $actualSize$$1_newWidth$$3_rangeEndPos$$ = $DvtOverviewEventManager$$ ? this.$Height$ : this.$Width$, $rangeEndTime_timelineWidth$$ = this.$_width$, $start$$28$$ = this.$_start$, $end$$19$$ = this.$_end$, $DvtOverviewEventManager$$ = this.$_renderStart$, $rangeStartPos_rangeStartTime$$ = dvt.$OverviewUtils$.$getPositionDate$($start$$28$$, $end$$19$$, 
    0, $rangeEndTime_timelineWidth$$), $rangeEndTime_timelineWidth$$ = dvt.$OverviewUtils$.$getPositionDate$($start$$28$$, $end$$19$$, $actualSize$$1_newWidth$$3_rangeEndPos$$, $rangeEndTime_timelineWidth$$), $rangeStartPos_rangeStartTime$$ = this.$getDatePosition$($rangeStartPos_rangeStartTime$$), $actualSize$$1_newWidth$$3_rangeEndPos$$ = Math.min($actualSize$$1_newWidth$$3_rangeEndPos$$, this.$getDatePosition$($rangeEndTime_timelineWidth$$)), $DvtOverviewEventManager$$ = this.$getDatePosition$($DvtOverviewEventManager$$), 
    $actualSize$$1_newWidth$$3_rangeEndPos$$ = $actualSize$$1_newWidth$$3_rangeEndPos$$ - $rangeStartPos_rangeStartTime$$;
    this.$isHorizontalRTL$() ? this.$setSlidingWindowPos$($DvtOverviewParser$$, $size$$28$$ - $DvtOverviewEventManager$$ - $actualSize$$1_newWidth$$3_rangeEndPos$$) : this.$setSlidingWindowPos$($DvtOverviewParser$$, $DvtOverviewEventManager$$);
    this.$setSlidingWindowSize$($DvtOverviewParser$$, $actualSize$$1_newWidth$$3_rangeEndPos$$);
    this.$ScrollTimeAxis$();
    this.$_increment$ = this.$calculateIncrement$($size$$28$$)
  };
  dvt.$Overview$.prototype.$createBorderAroundSlidingWindow$ = function $dvt$$Overview$$$$createBorderAroundSlidingWindow$$($DvtOverviewEventManager$$, $DvtOverviewParser$$) {
    var $right$$12_slidingWindow$$3$$ = this.$getSlidingWindow$(), $halfBorderWidth_leftHandle$$1$$ = dvt.$Overview$.$_DEFAULT_WINDOW_BORDER_WIDTH$ / 2;
    if(this.$isVertical$()) {
      var $top$$9_topBar$$ = $right$$12_slidingWindow$$3$$.$getY$(), $topCenter$$ = $top$$9_topBar$$ + $halfBorderWidth_leftHandle$$1$$, $bottom$$9$$ = $top$$9_topBar$$ + $right$$12_slidingWindow$$3$$.getHeight(), $bottomBar_bottomCenter$$ = $bottom$$9$$ - $halfBorderWidth_leftHandle$$1$$, $left$$12$$ = 0, $leftCenter$$ = $halfBorderWidth_leftHandle$$1$$, $rightCenter$$ = $DvtOverviewEventManager$$ - $halfBorderWidth_leftHandle$$1$$, $halfBorderWidth_leftHandle$$1$$ = new dvt.$Line$(this.$getCtx$(), 
      $left$$12$$, $topCenter$$, $DvtOverviewEventManager$$, $topCenter$$, "lh"), $rightHandle$$1$$ = new dvt.$Line$(this.$getCtx$(), $left$$12$$, $bottomBar_bottomCenter$$, $DvtOverviewEventManager$$, $bottomBar_bottomCenter$$, "rh"), $leftTopBar$$ = new dvt.$Line$(this.$getCtx$(), $leftCenter$$, 0, $leftCenter$$, $top$$9_topBar$$, "ltb"), $rightTopBar$$ = new dvt.$Line$(this.$getCtx$(), $leftCenter$$, $bottom$$9$$, $leftCenter$$, $DvtOverviewParser$$, "rtb"), $bottomBar_bottomCenter$$ = new dvt.$Line$(this.$getCtx$(), 
      $rightCenter$$, $top$$9_topBar$$, $rightCenter$$, $bottom$$9$$, "bb"), $top$$9_topBar$$ = new dvt.$Line$(this.$getCtx$(), $leftCenter$$, $top$$9_topBar$$, $leftCenter$$, $bottom$$9$$, "tb")
    }else {
      $top$$9_topBar$$ = 0, $topCenter$$ = $top$$9_topBar$$ + $halfBorderWidth_leftHandle$$1$$, $bottom$$9$$ = $DvtOverviewParser$$, $bottomBar_bottomCenter$$ = $bottom$$9$$ - $halfBorderWidth_leftHandle$$1$$, $left$$12$$ = $right$$12_slidingWindow$$3$$.$getX$(), $leftCenter$$ = $left$$12$$ + $halfBorderWidth_leftHandle$$1$$, $right$$12_slidingWindow$$3$$ = $left$$12$$ + $right$$12_slidingWindow$$3$$.getWidth(), $rightCenter$$ = $right$$12_slidingWindow$$3$$ - $halfBorderWidth_leftHandle$$1$$, $halfBorderWidth_leftHandle$$1$$ = 
      new dvt.$Line$(this.$getCtx$(), $leftCenter$$, $top$$9_topBar$$, $leftCenter$$, $bottom$$9$$, "lh"), $rightHandle$$1$$ = new dvt.$Line$(this.$getCtx$(), $rightCenter$$, $top$$9_topBar$$, $rightCenter$$, $bottom$$9$$, "rh"), $leftTopBar$$ = new dvt.$Line$(this.$getCtx$(), 0, $topCenter$$, $left$$12$$ + 1, $topCenter$$, "ltb"), $rightTopBar$$ = new dvt.$Line$(this.$getCtx$(), $right$$12_slidingWindow$$3$$ - 1, $topCenter$$, $DvtOverviewEventManager$$, $topCenter$$, "rtb"), $bottomBar_bottomCenter$$ = 
      new dvt.$Line$(this.$getCtx$(), $left$$12$$, $bottomBar_bottomCenter$$, $right$$12_slidingWindow$$3$$, $bottomBar_bottomCenter$$, "bb"), $top$$9_topBar$$ = new dvt.$Line$(this.$getCtx$(), $left$$12$$, $topCenter$$, $right$$12_slidingWindow$$3$$, $topCenter$$, "tb")
    }
    $halfBorderWidth_leftHandle$$1$$.$setPixelHinting$();
    $rightHandle$$1$$.$setPixelHinting$();
    $leftTopBar$$.$setPixelHinting$();
    $rightTopBar$$.$setPixelHinting$();
    $bottomBar_bottomCenter$$.$setPixelHinting$();
    $top$$9_topBar$$.$setPixelHinting$();
    "none" != this.$_windowBorderLeftStyle$ && $halfBorderWidth_leftHandle$$1$$.$setSolidStroke$(this.$_windowBorderLeftColor$);
    this.$addChild$($halfBorderWidth_leftHandle$$1$$);
    "none" != this.$_windowBorderRightStyle$ && $rightHandle$$1$$.$setSolidStroke$(this.$_windowBorderRightColor$);
    this.$addChild$($rightHandle$$1$$);
    "none" != this.$_borderTopStyle$ && this.$_borderTopColor$ && ($leftTopBar$$.$setSolidStroke$(this.$_borderTopColor$), $rightTopBar$$.$setSolidStroke$(this.$_borderTopColor$));
    this.$addChild$($leftTopBar$$);
    this.$addChild$($rightTopBar$$);
    "none" != this.$_windowBorderBottomStyle$ && $bottomBar_bottomCenter$$.$setSolidStroke$(this.$_windowBorderBottomColor$);
    this.$addChild$($bottomBar_bottomCenter$$);
    "none" != this.$_windowBorderTopStyle$ && $top$$9_topBar$$.$setSolidStroke$(this.$_windowBorderTopColor$);
    this.$addChild$($top$$9_topBar$$)
  };
  dvt.$Overview$.prototype.$createResizeArrow$ = function $dvt$$Overview$$$$createResizeArrow$$() {
    var $DvtOverviewEventManager$$ = this.$isVertical$() ? dvt.$PathUtils$.moveTo(6, 0) + dvt.$PathUtils$.lineTo(0, 5) + dvt.$PathUtils$.lineTo(5, 5) + dvt.$PathUtils$.lineTo(5, 17) + dvt.$PathUtils$.lineTo(0, 17) + dvt.$PathUtils$.lineTo(6, 22) + dvt.$PathUtils$.lineTo(12, 17) + dvt.$PathUtils$.lineTo(7, 17) + dvt.$PathUtils$.lineTo(7, 5) + dvt.$PathUtils$.lineTo(12, 5) + dvt.$PathUtils$.closePath() : dvt.$PathUtils$.moveTo(5, 0) + dvt.$PathUtils$.lineTo(0, 6) + dvt.$PathUtils$.lineTo(5, 12) + dvt.$PathUtils$.lineTo(5, 
    7) + dvt.$PathUtils$.lineTo(17, 7) + dvt.$PathUtils$.lineTo(17, 12) + dvt.$PathUtils$.lineTo(22, 6) + dvt.$PathUtils$.lineTo(17, 0) + dvt.$PathUtils$.lineTo(17, 4) + dvt.$PathUtils$.lineTo(5, 4) + dvt.$PathUtils$.lineTo(5, 0) + dvt.$PathUtils$.closePath(), $DvtOverviewEventManager$$ = new dvt.$Path$(this.$getCtx$(), $DvtOverviewEventManager$$, "arr");
    $DvtOverviewEventManager$$.$setSolidFill$("#ffffff");
    $DvtOverviewEventManager$$.$setSolidStroke$("#000000");
    $DvtOverviewEventManager$$.$setVisible$($JSCompiler_alias_FALSE$$);
    this.$addChild$($DvtOverviewEventManager$$);
    return $DvtOverviewEventManager$$
  };
  dvt.$Overview$.prototype.$getRectSize$ = function $dvt$$Overview$$$$getRectSize$$($DvtOverviewEventManager$$) {
    return this.$isVertical$() ? $DvtOverviewEventManager$$.getHeight() : $DvtOverviewEventManager$$.getWidth()
  };
  dvt.$Overview$.prototype.$setRectSize$ = function $dvt$$Overview$$$$setRectSize$$($DvtOverviewEventManager$$, $DvtOverviewParser$$) {
    this.$isVertical$() ? $DvtOverviewEventManager$$.$setHeight$($DvtOverviewParser$$) : $DvtOverviewEventManager$$.$setWidth$($DvtOverviewParser$$)
  };
  dvt.$Overview$.prototype.$getSlidingWindowPos$ = function $dvt$$Overview$$$$getSlidingWindowPos$$($DvtOverviewEventManager$$) {
    return this.$isVertical$() ? $DvtOverviewEventManager$$.$getTranslateY$() : $DvtOverviewEventManager$$.$getTranslateX$()
  };
  dvt.$Overview$.prototype.$setSlidingWindowPos$ = function $dvt$$Overview$$$$setSlidingWindowPos$$($DvtOverviewEventManager$$, $DvtOverviewParser$$) {
    $DvtOverviewParser$$ = Math.max(0, $DvtOverviewParser$$);
    this.$isVertical$() ? $DvtOverviewEventManager$$.$setTranslateY$($DvtOverviewParser$$) : $DvtOverviewEventManager$$.$setTranslateX$($DvtOverviewParser$$);
    if(this.$isLeftAndRightFilterRendered$()) {
      this.$getLeftBackground$().$setWidth$($DvtOverviewParser$$);
      var $rightStart$$ = $DvtOverviewParser$$ + this.$getSlidingWindowSize$($DvtOverviewEventManager$$), $handleStart$$1_rightBackground$$1$$ = this.$getRightBackground$();
      $handleStart$$1_rightBackground$$1$$.$setX$($rightStart$$);
      $handleStart$$1_rightBackground$$1$$.$setWidth$(Math.max(0, this.$Width$ - $rightStart$$));
      dvt.$OverviewUtils$.$supportsTouch$() && !this.$isFeatureOff$() && ($handleStart$$1_rightBackground$$1$$ = this.$getHandleStart$(), this.$getLeftBackgroundHandle$().$setX$($DvtOverviewParser$$ - $handleStart$$1_rightBackground$$1$$), this.$getRightBackgroundHandle$().$setX$($rightStart$$))
    }
  };
  dvt.$Overview$.prototype.$getSlidingWindowSize$ = function $dvt$$Overview$$$$getSlidingWindowSize$$($DvtOverviewEventManager$$) {
    return this.$getRectSize$($DvtOverviewEventManager$$)
  };
  dvt.$Overview$.prototype.$setSlidingWindowSize$ = function $dvt$$Overview$$$$setSlidingWindowSize$$($DvtOverviewEventManager$$, $DvtOverviewParser$$) {
    $DvtOverviewParser$$ = Math.max(this.$getMinimumWindowSize$(), $DvtOverviewParser$$);
    $DvtOverviewParser$$ = Math.min(this.$isVertical$() ? this.$Height$ : this.$Width$, $DvtOverviewParser$$);
    this.$setRectSize$($DvtOverviewEventManager$$, $DvtOverviewParser$$);
    if(this.$isLeftAndRightFilterRendered$()) {
      var $rightHandleBackground$$1_rightStart$$1$$ = this.$getSlidingWindowPos$($DvtOverviewEventManager$$) + $DvtOverviewParser$$, $rightBackground$$2_rightHandle$$2$$ = this.$getRightBackground$();
      $rightBackground$$2_rightHandle$$2$$.$setX$($rightHandleBackground$$1_rightStart$$1$$);
      $rightBackground$$2_rightHandle$$2$$.$setWidth$(Math.max(0, this.$Width$ - $rightHandleBackground$$1_rightStart$$1$$));
      dvt.$OverviewUtils$.$supportsTouch$() && !this.$isFeatureOff$() && this.$getRightBackgroundHandle$().$setX$($rightHandleBackground$$1_rightStart$$1$$)
    }
    if(!this.$isFeatureOff$()) {
      var $rightHandleBackground$$1_rightStart$$1$$ = $DvtOverviewEventManager$$.$getChildAt$(3), $rightBackground$$2_rightHandle$$2$$ = $DvtOverviewEventManager$$.$getChildAt$(4), $rightGrippy$$1$$ = $DvtOverviewEventManager$$.$getChildAt$(5);
      this.$isVertical$() ? ($rightBackground$$2_rightHandle$$2$$.$setTranslateY$($DvtOverviewParser$$), $rightHandleBackground$$1_rightStart$$1$$.$setTranslateY$($DvtOverviewParser$$ - this.$getHandleSize$()), $rightGrippy$$1$$.$setTranslateY$($DvtOverviewParser$$ - 10)) : ($rightBackground$$2_rightHandle$$2$$.$setTranslateX$($DvtOverviewParser$$), $rightHandleBackground$$1_rightStart$$1$$.$setTranslateX$($DvtOverviewParser$$ - this.$getHandleSize$()), $rightGrippy$$1$$.$setTranslateX$($DvtOverviewParser$$ - 
      10))
    }
  };
  dvt.$Overview$.prototype.$calculateIncrement$ = function $dvt$$Overview$$$$calculateIncrement$$($DvtOverviewEventManager$$) {
    var $DvtOverviewParser$$ = this.$_width$, $start$$29$$ = this.$_start$, $end$$20$$ = this.$_end$, $day1_pos1$$1$$ = dvt.$OverviewUtils$.$getPositionDate$($start$$29$$, $end$$20$$, 1, $DvtOverviewEventManager$$);
    $DvtOverviewEventManager$$ = dvt.$OverviewUtils$.$getPositionDate$($start$$29$$, $end$$20$$, 2, $DvtOverviewEventManager$$);
    $day1_pos1$$1$$ = dvt.$OverviewUtils$.$getDatePosition$($start$$29$$, $end$$20$$, $day1_pos1$$1$$, $DvtOverviewParser$$);
    return dvt.$OverviewUtils$.$getDatePosition$($start$$29$$, $end$$20$$, $DvtOverviewEventManager$$, $DvtOverviewParser$$) - $day1_pos1$$1$$
  };
  dvt.$Overview$.prototype.$updateTimeAxis$ = function $dvt$$Overview$$$$updateTimeAxis$$($DvtOverviewEventManager$$, $DvtOverviewParser$$) {
    if(this.$_ticks$ != $JSCompiler_alias_NULL$$) {
      for(var $vertical$$2$$ = this.$isVertical$(), $size$$31$$ = this.$getOverviewSize$(), $i$$533$$ = 0;$i$$533$$ < this.$_ticks$.length;$i$$533$$++) {
        var $child$$60_label$$66$$ = this.$_ticks$[$i$$533$$], $time$$6_time_pos$$ = parseInt($child$$60_label$$66$$.$getAttr$("time"), 10), $time$$6_time_pos$$ = this.$getDatePosition$($time$$6_time_pos$$), $child$$60_label$$66$$ = $child$$60_label$$66$$.$getAttr$("label"), $maxWidth$$15_next_time$$ = 0;
        $i$$533$$ + 1 < this.$_ticks$.length ? ($maxWidth$$15_next_time$$ = parseInt(this.$_ticks$[$i$$533$$ + 1].$getAttr$("time"), 10), $maxWidth$$15_next_time$$ = this.$getDatePosition$($maxWidth$$15_next_time$$) - $time$$6_time_pos$$) : $maxWidth$$15_next_time$$ = $size$$31$$ - $time$$6_time_pos$$;
        this.$isHorizontalRTL$() && ($time$$6_time_pos$$ = $size$$31$$ - $time$$6_time_pos$$);
        $vertical$$2$$ && ($maxWidth$$15_next_time$$ = this.$Width$);
        $maxWidth$$15_next_time$$ -= 2 * dvt.$Overview$.$_DEFAULT_AXIS_LABEL_PADDING$;
        this.$addTick$($time$$6_time_pos$$, $DvtOverviewEventManager$$, $DvtOverviewParser$$, "tick" + $i$$533$$);
        this.$addLabel$($time$$6_time_pos$$, $child$$60_label$$66$$, $DvtOverviewEventManager$$, $DvtOverviewParser$$, $maxWidth$$15_next_time$$, "label" + $i$$533$$)
      }
    }
  };
  dvt.$Overview$.prototype.$addTick$ = function $dvt$$Overview$$$$addTick$$($DvtOverviewEventManager$$, $DvtOverviewParser$$, $height$$84$$, $id$$142$$) {
    $DvtOverviewEventManager$$ = this.$isVertical$() ? new dvt.$Line$(this.$getCtx$(), 0, $DvtOverviewEventManager$$, $DvtOverviewParser$$, $DvtOverviewEventManager$$, $id$$142$$) : new dvt.$Line$(this.$getCtx$(), $DvtOverviewEventManager$$, 0, $DvtOverviewEventManager$$, $height$$84$$, $id$$142$$);
    $DvtOverviewParser$$ = new dvt.$SolidStroke$(this.$_timeIndicatorColor$);
    $DvtOverviewParser$$.$setStyle$(dvt.$Stroke$.$DASHED$, 3);
    $DvtOverviewEventManager$$.$setStroke$($DvtOverviewParser$$);
    $DvtOverviewEventManager$$.$setPixelHinting$();
    this.$addChild$($DvtOverviewEventManager$$)
  };
  dvt.$Overview$.prototype.$addLabel$ = function $dvt$$Overview$$$$addLabel$$($DvtOverviewEventManager$$, $DvtOverviewParser$$, $padding$$23_width$$98$$, $height$$85_y$$147$$, $maxWidth$$16$$, $id$$143$$, $dim$$53_labelStyle$$19$$) {
    $dim$$53_labelStyle$$19$$ = $dim$$53_labelStyle$$19$$ || new dvt.$CSSStyle$("font-weight:bold");
    this.$isVertical$() ? ($DvtOverviewParser$$ = new dvt.$OutputText$(this.$getCtx$(), $DvtOverviewParser$$, 4, $DvtOverviewEventManager$$, $id$$143$$), $DvtOverviewParser$$.$setCSSStyle$($dim$$53_labelStyle$$19$$), this.$isRTL$() && (this.$addChild$($DvtOverviewParser$$), $dim$$53_labelStyle$$19$$ = $DvtOverviewParser$$.$getDimensions$(), this.removeChild($DvtOverviewParser$$), $DvtOverviewParser$$.$setX$(Math.max(4, this.$Width$ - $dim$$53_labelStyle$$19$$.$w$ - 4)))) : ($height$$85_y$$147$$ = 
    this.$isOverviewAbove$() ? 2 : $height$$85_y$$147$$ - this.$getTimeAxisHeight$() + 2, $padding$$23_width$$98$$ = dvt.$Overview$.$_DEFAULT_AXIS_LABEL_PADDING$, $DvtOverviewParser$$ = new dvt.$OutputText$(this.$getCtx$(), $DvtOverviewParser$$, $DvtOverviewEventManager$$ + $padding$$23_width$$98$$, $height$$85_y$$147$$, $id$$143$$), $DvtOverviewParser$$.$setCSSStyle$($dim$$53_labelStyle$$19$$), this.$isHorizontalRTL$() && (this.$addChild$($DvtOverviewParser$$), $dim$$53_labelStyle$$19$$ = $DvtOverviewParser$$.$getDimensions$(), 
    this.removeChild($DvtOverviewParser$$), $DvtOverviewParser$$.$setX$($DvtOverviewEventManager$$ - Math.min($dim$$53_labelStyle$$19$$.$w$, $maxWidth$$16$$) - $padding$$23_width$$98$$)));
    dvt.$TextUtils$.$fitText$($DvtOverviewParser$$, $maxWidth$$16$$, Infinity, this);
    $DvtOverviewParser$$.$_rawText$ = $DvtOverviewParser$$.$getUntruncatedTextString$()
  };
  dvt.$Overview$.prototype.$updateCurrentTime$ = function $dvt$$Overview$$$$updateCurrentTime$$($DvtOverviewEventManager$$, $DvtOverviewParser$$) {
    if(!(this.$_currentTime$ == $JSCompiler_alias_NULL$$ || isNaN(this.$_currentTime$))) {
      var $line$$15_time_pos$$1$$ = this.$getDatePosition$(this.$_currentTime$);
      this.$isVertical$() ? $line$$15_time_pos$$1$$ = new dvt.$Line$(this.$getCtx$(), 0, $line$$15_time_pos$$1$$, $DvtOverviewEventManager$$, $line$$15_time_pos$$1$$, "ocd") : (this.$isRTL$() && ($line$$15_time_pos$$1$$ = $DvtOverviewEventManager$$ - $line$$15_time_pos$$1$$), $line$$15_time_pos$$1$$ = new dvt.$Line$(this.$getCtx$(), $line$$15_time_pos$$1$$, 0, $line$$15_time_pos$$1$$, $DvtOverviewParser$$, "ocd"));
      $line$$15_time_pos$$1$$.$setSolidStroke$(this.$_currentTimeIndicatorColor$);
      $line$$15_time_pos$$1$$.$setPixelHinting$();
      this.$addChild$($line$$15_time_pos$$1$$)
    }
  };
  dvt.$Overview$.prototype.$parseFilledTimeRangesXML$ = function $dvt$$Overview$$$$parseFilledTimeRangesXML$$($DvtOverviewEventManager$$, $DvtOverviewParser$$) {
    if(this.$_formattedTimeRanges$ != $JSCompiler_alias_NULL$$) {
      for(var $i$$534$$ = 0;$i$$534$$ < this.$_formattedTimeRanges$.length;$i$$534$$++) {
        this.$addFilledTimeRange$(this.$_formattedTimeRanges$[$i$$534$$], $DvtOverviewEventManager$$, $DvtOverviewParser$$)
      }
    }
  };
  dvt.$Overview$.prototype.$addFilledTimeRange$ = function $dvt$$Overview$$$$addFilledTimeRange$$($DvtOverviewEventManager$$, $DvtOverviewParser$$, $height$$88$$) {
    var $rangeStart_rangeStart_pos$$ = parseInt($DvtOverviewEventManager$$.$getAttr$("rs"), 10), $rangeEnd_rangeWidth$$1$$ = parseInt($DvtOverviewEventManager$$.$getAttr$("re"), 10);
    $DvtOverviewEventManager$$ = $DvtOverviewEventManager$$.$getAttr$("c");
    if($rangeStart_rangeStart_pos$$ != $JSCompiler_alias_NULL$$ && $rangeEnd_rangeWidth$$1$$ != $JSCompiler_alias_NULL$$) {
      var $size$$32$$ = this.$getOverviewSize$(), $rangeStart_rangeStart_pos$$ = this.$getDatePosition$($rangeStart_rangeStart_pos$$), $rangeEnd_rangeWidth$$1$$ = this.$getDatePosition$($rangeEnd_rangeWidth$$1$$) - $rangeStart_rangeStart_pos$$;
      this.$isHorizontalRTL$() && ($rangeStart_rangeStart_pos$$ = $size$$32$$ - $rangeStart_rangeStart_pos$$ - $rangeEnd_rangeWidth$$1$$);
      $DvtOverviewParser$$ = this.$isVertical$() ? new dvt.$Rect$(this.$getCtx$(), 0, $rangeStart_rangeStart_pos$$, $DvtOverviewParser$$ - this.$getTimeAxisWidth$(), $rangeEnd_rangeWidth$$1$$, "ftr") : new dvt.$Rect$(this.$getCtx$(), $rangeStart_rangeStart_pos$$, this.$isOverviewAbove$() ? this.$getTimeAxisHeight$() : 0, $rangeEnd_rangeWidth$$1$$, $height$$88$$ - this.$getTimeAxisHeight$(), "ftr");
      $DvtOverviewEventManager$$ != $JSCompiler_alias_NULL$$ && $DvtOverviewParser$$.$setSolidFill$($DvtOverviewEventManager$$, 0.4);
      $DvtOverviewParser$$.setCursor("move");
      $DvtOverviewParser$$.$setPixelHinting$();
      this.$addChild$($DvtOverviewParser$$)
    }
  };
  dvt.$Overview$.prototype.$parseDataXML$ = $JSCompiler_emptyFn$$();
  dvt.$Overview$.prototype.$animateSlidingWindow$ = function $dvt$$Overview$$$$animateSlidingWindow$$($DvtOverviewEventManager$$) {
    var $DvtOverviewParser$$ = this.$getSlidingWindow$();
    $DvtOverviewParser$$.$getChildAt$(3);
    $DvtOverviewParser$$.$getChildAt$(4);
    $DvtOverviewParser$$.$getChildAt$(5);
    if($DvtOverviewEventManager$$ != this.$getSlidingWindowPos$($DvtOverviewParser$$)) {
      var $leftBackgroundHandle$$1_leftHandle$$2_rightBackgroundGetter$$ = this.$getLeftHandle$(), $leftBackgroundHandleGetter_rightBackgroundSetter_rightHandle$$3$$ = this.$getRightHandle$(), $leftBackgroundHandleSetter_leftTopBar$$1_rightBackgroundPosGetter$$ = this.$getLeftTopBar$(), $rightBackgroundHandle$$2_rightBackgroundPosSetter_rightTopBar$$1$$ = this.$getRightTopBar$(), $bottomBar$$1_rightBackgroundHandleGetter_timelineSize$$ = this.$getBottomBar$(), $rightBackgroundHandleSetter_topBar$$1$$ = 
      this.$getTopBar$();
      if(this.$isVertical$()) {
        var $posGetter$$ = $DvtOverviewParser$$.$getTranslateY$, $posSetter$$ = $DvtOverviewParser$$.$setTranslateY$, $leftHandlePos1Getter$$ = $leftBackgroundHandle$$1_leftHandle$$2_rightBackgroundGetter$$.$getY1$, $leftHandlePos1Setter$$ = $leftBackgroundHandle$$1_leftHandle$$2_rightBackgroundGetter$$.$setY1$, $leftHandlePos2Getter$$ = $leftBackgroundHandle$$1_leftHandle$$2_rightBackgroundGetter$$.$getY2$, $leftHandlePos2Setter$$ = $leftBackgroundHandle$$1_leftHandle$$2_rightBackgroundGetter$$.$setY2$, 
        $rightHandlePos1Getter$$ = $leftBackgroundHandleGetter_rightBackgroundSetter_rightHandle$$3$$.$getY1$, $rightHandlePos1Setter$$ = $leftBackgroundHandleGetter_rightBackgroundSetter_rightHandle$$3$$.$setY1$, $rightHandlePos2Getter$$ = $leftBackgroundHandleGetter_rightBackgroundSetter_rightHandle$$3$$.$getY2$, $rightHandlePos2Setter$$ = $leftBackgroundHandleGetter_rightBackgroundSetter_rightHandle$$3$$.$setY2$, $leftTopBarPosGetter$$ = $leftBackgroundHandleSetter_leftTopBar$$1_rightBackgroundPosGetter$$.$getY2$, 
        $leftTopBarPosSetter$$ = $leftBackgroundHandleSetter_leftTopBar$$1_rightBackgroundPosGetter$$.$setY2$, $rightTopBarPosGetter$$ = $rightBackgroundHandle$$2_rightBackgroundPosSetter_rightTopBar$$1$$.$getY1$, $rightTopBarPosSetter$$ = $rightBackgroundHandle$$2_rightBackgroundPosSetter_rightTopBar$$1$$.$setY1$, $bottomBarPos1Getter$$ = $bottomBar$$1_rightBackgroundHandleGetter_timelineSize$$.$getY1$, $bottomBarPos1Setter$$ = $bottomBar$$1_rightBackgroundHandleGetter_timelineSize$$.$setY1$, $bottomBarPos2Getter$$ = 
        $bottomBar$$1_rightBackgroundHandleGetter_timelineSize$$.$getY2$, $bottomBarPos2Setter$$ = $bottomBar$$1_rightBackgroundHandleGetter_timelineSize$$.$setY2$, $topBarPos1Getter$$ = $rightBackgroundHandleSetter_topBar$$1$$.$getY1$, $topBarPos1Setter$$ = $rightBackgroundHandleSetter_topBar$$1$$.$setY1$, $topBarPos2Getter$$ = $rightBackgroundHandleSetter_topBar$$1$$.$getY2$, $topBarPos2Setter$$ = $rightBackgroundHandleSetter_topBar$$1$$.$setY2$
      }else {
        $posGetter$$ = $DvtOverviewParser$$.$getTranslateX$, $posSetter$$ = $DvtOverviewParser$$.$setTranslateX$, $leftHandlePos1Getter$$ = $leftBackgroundHandle$$1_leftHandle$$2_rightBackgroundGetter$$.$getX1$, $leftHandlePos1Setter$$ = $leftBackgroundHandle$$1_leftHandle$$2_rightBackgroundGetter$$.$setX1$, $leftHandlePos2Getter$$ = $leftBackgroundHandle$$1_leftHandle$$2_rightBackgroundGetter$$.$getX2$, $leftHandlePos2Setter$$ = $leftBackgroundHandle$$1_leftHandle$$2_rightBackgroundGetter$$.$setX2$, 
        $rightHandlePos1Getter$$ = $leftBackgroundHandleGetter_rightBackgroundSetter_rightHandle$$3$$.$getX1$, $rightHandlePos1Setter$$ = $leftBackgroundHandleGetter_rightBackgroundSetter_rightHandle$$3$$.$setX1$, $rightHandlePos2Getter$$ = $leftBackgroundHandleGetter_rightBackgroundSetter_rightHandle$$3$$.$getX2$, $rightHandlePos2Setter$$ = $leftBackgroundHandleGetter_rightBackgroundSetter_rightHandle$$3$$.$setX2$, $leftTopBarPosGetter$$ = $leftBackgroundHandleSetter_leftTopBar$$1_rightBackgroundPosGetter$$.$getX2$, 
        $leftTopBarPosSetter$$ = $leftBackgroundHandleSetter_leftTopBar$$1_rightBackgroundPosGetter$$.$setX2$, $rightTopBarPosGetter$$ = $rightBackgroundHandle$$2_rightBackgroundPosSetter_rightTopBar$$1$$.$getX1$, $rightTopBarPosSetter$$ = $rightBackgroundHandle$$2_rightBackgroundPosSetter_rightTopBar$$1$$.$setX1$, $bottomBarPos1Getter$$ = $bottomBar$$1_rightBackgroundHandleGetter_timelineSize$$.$getX1$, $bottomBarPos1Setter$$ = $bottomBar$$1_rightBackgroundHandleGetter_timelineSize$$.$setX1$, $bottomBarPos2Getter$$ = 
        $bottomBar$$1_rightBackgroundHandleGetter_timelineSize$$.$getX2$, $bottomBarPos2Setter$$ = $bottomBar$$1_rightBackgroundHandleGetter_timelineSize$$.$setX2$, $topBarPos1Getter$$ = $rightBackgroundHandleSetter_topBar$$1$$.$getX1$, $topBarPos1Setter$$ = $rightBackgroundHandleSetter_topBar$$1$$.$setX1$, $topBarPos2Getter$$ = $rightBackgroundHandleSetter_topBar$$1$$.$getX2$, $topBarPos2Setter$$ = $rightBackgroundHandleSetter_topBar$$1$$.$setX2$
      }
      var $animator$$106_minPos$$ = this.$_leftMargin$, $maxPos$$ = this.$getMaximumPosition$(), $rightStart$$2_slidingWindowSize$$ = this.$getSlidingWindowSize$($DvtOverviewParser$$);
      $DvtOverviewEventManager$$ = Math.max($animator$$106_minPos$$, Math.min($maxPos$$ - $rightStart$$2_slidingWindowSize$$, $DvtOverviewEventManager$$));
      $animator$$106_minPos$$ = this.$isAnimationOnClick$() ? new dvt.$Animator$(this.$getCtx$(), 0.5, 0, dvt.$Easing$.$linear$) : $JSCompiler_alias_NULL$$;
      this.$animateProperty$($animator$$106_minPos$$, $DvtOverviewParser$$, $posGetter$$, $posSetter$$, $DvtOverviewEventManager$$);
      this.$animateProperty$($animator$$106_minPos$$, $leftBackgroundHandle$$1_leftHandle$$2_rightBackgroundGetter$$, $leftHandlePos1Getter$$, $leftHandlePos1Setter$$, $DvtOverviewEventManager$$);
      this.$animateProperty$($animator$$106_minPos$$, $leftBackgroundHandle$$1_leftHandle$$2_rightBackgroundGetter$$, $leftHandlePos2Getter$$, $leftHandlePos2Setter$$, $DvtOverviewEventManager$$);
      this.$animateProperty$($animator$$106_minPos$$, $leftBackgroundHandleGetter_rightBackgroundSetter_rightHandle$$3$$, $rightHandlePos1Getter$$, $rightHandlePos1Setter$$, $DvtOverviewEventManager$$ + $rightStart$$2_slidingWindowSize$$);
      this.$animateProperty$($animator$$106_minPos$$, $leftBackgroundHandleGetter_rightBackgroundSetter_rightHandle$$3$$, $rightHandlePos2Getter$$, $rightHandlePos2Setter$$, $DvtOverviewEventManager$$ + $rightStart$$2_slidingWindowSize$$);
      this.$animateProperty$($animator$$106_minPos$$, $leftBackgroundHandleSetter_leftTopBar$$1_rightBackgroundPosGetter$$, $leftTopBarPosGetter$$, $leftTopBarPosSetter$$, $DvtOverviewEventManager$$ + 1);
      this.$animateProperty$($animator$$106_minPos$$, $rightBackgroundHandle$$2_rightBackgroundPosSetter_rightTopBar$$1$$, $rightTopBarPosGetter$$, $rightTopBarPosSetter$$, $DvtOverviewEventManager$$ + $rightStart$$2_slidingWindowSize$$ - 1);
      this.$animateProperty$($animator$$106_minPos$$, $bottomBar$$1_rightBackgroundHandleGetter_timelineSize$$, $bottomBarPos1Getter$$, $bottomBarPos1Setter$$, $DvtOverviewEventManager$$);
      this.$animateProperty$($animator$$106_minPos$$, $rightBackgroundHandleSetter_topBar$$1$$, $topBarPos1Getter$$, $topBarPos1Setter$$, $DvtOverviewEventManager$$);
      this.$animateProperty$($animator$$106_minPos$$, $bottomBar$$1_rightBackgroundHandleGetter_timelineSize$$, $bottomBarPos2Getter$$, $bottomBarPos2Setter$$, $DvtOverviewEventManager$$ + $rightStart$$2_slidingWindowSize$$);
      this.$animateProperty$($animator$$106_minPos$$, $rightBackgroundHandleSetter_topBar$$1$$, $topBarPos2Getter$$, $topBarPos2Setter$$, $DvtOverviewEventManager$$ + $rightStart$$2_slidingWindowSize$$);
      this.$isLeftAndRightFilterRendered$() && ($DvtOverviewParser$$ = this.$getLeftBackground$(), this.$animateProperty$($animator$$106_minPos$$, $DvtOverviewParser$$, $DvtOverviewParser$$.getWidth, $DvtOverviewParser$$.$setWidth$, $DvtOverviewEventManager$$), $rightStart$$2_slidingWindowSize$$ = $DvtOverviewEventManager$$ + $rightStart$$2_slidingWindowSize$$, $DvtOverviewParser$$ = this.$getRightBackground$(), $leftBackgroundHandle$$1_leftHandle$$2_rightBackgroundGetter$$ = $DvtOverviewParser$$.getWidth, 
      $leftBackgroundHandleGetter_rightBackgroundSetter_rightHandle$$3$$ = $DvtOverviewParser$$.$setWidth$, $leftBackgroundHandleSetter_leftTopBar$$1_rightBackgroundPosGetter$$ = $DvtOverviewParser$$.$getX$, $rightBackgroundHandle$$2_rightBackgroundPosSetter_rightTopBar$$1$$ = $DvtOverviewParser$$.$setX$, $bottomBar$$1_rightBackgroundHandleGetter_timelineSize$$ = this.$isVertical$() ? this.$Height$ : this.$Width$, this.$animateProperty$($animator$$106_minPos$$, $DvtOverviewParser$$, $leftBackgroundHandle$$1_leftHandle$$2_rightBackgroundGetter$$, 
      $leftBackgroundHandleGetter_rightBackgroundSetter_rightHandle$$3$$, $bottomBar$$1_rightBackgroundHandleGetter_timelineSize$$ - $rightStart$$2_slidingWindowSize$$), this.$animateProperty$($animator$$106_minPos$$, $DvtOverviewParser$$, $leftBackgroundHandleSetter_leftTopBar$$1_rightBackgroundPosGetter$$, $rightBackgroundHandle$$2_rightBackgroundPosSetter_rightTopBar$$1$$, $rightStart$$2_slidingWindowSize$$), dvt.$OverviewUtils$.$supportsTouch$() && !this.$isFeatureOff$() && ($DvtOverviewParser$$ = 
      this.$getHandleStart$(), $leftBackgroundHandle$$1_leftHandle$$2_rightBackgroundGetter$$ = this.$getLeftBackgroundHandle$(), $leftBackgroundHandleGetter_rightBackgroundSetter_rightHandle$$3$$ = $leftBackgroundHandle$$1_leftHandle$$2_rightBackgroundGetter$$.$getX$, $leftBackgroundHandleSetter_leftTopBar$$1_rightBackgroundPosGetter$$ = $leftBackgroundHandle$$1_leftHandle$$2_rightBackgroundGetter$$.$setX$, $rightBackgroundHandle$$2_rightBackgroundPosSetter_rightTopBar$$1$$ = this.$getRightBackgroundHandle$(), 
      $bottomBar$$1_rightBackgroundHandleGetter_timelineSize$$ = $rightBackgroundHandle$$2_rightBackgroundPosSetter_rightTopBar$$1$$.$getX$, $rightBackgroundHandleSetter_topBar$$1$$ = $rightBackgroundHandle$$2_rightBackgroundPosSetter_rightTopBar$$1$$.$setX$, this.$animateProperty$($animator$$106_minPos$$, $leftBackgroundHandle$$1_leftHandle$$2_rightBackgroundGetter$$, $leftBackgroundHandleGetter_rightBackgroundSetter_rightHandle$$3$$, $leftBackgroundHandleSetter_leftTopBar$$1_rightBackgroundPosGetter$$, 
      $DvtOverviewEventManager$$ - $DvtOverviewParser$$), this.$animateProperty$($animator$$106_minPos$$, $rightBackgroundHandle$$2_rightBackgroundPosSetter_rightTopBar$$1$$, $bottomBar$$1_rightBackgroundHandleGetter_timelineSize$$, $rightBackgroundHandleSetter_topBar$$1$$, $rightStart$$2_slidingWindowSize$$)));
      $animator$$106_minPos$$ != $JSCompiler_alias_NULL$$ && $animator$$106_minPos$$.play()
    }
  };
  dvt.$Overview$.prototype.$animateProperty$ = function $dvt$$Overview$$$$animateProperty$$($DvtOverviewEventManager$$, $DvtOverviewParser$$, $getter$$, $setter$$, $value$$153$$) {
    $DvtOverviewEventManager$$ != $JSCompiler_alias_NULL$$ ? $DvtOverviewEventManager$$.$addProp$(dvt.$Animator$.$TYPE_NUMBER$, $DvtOverviewParser$$, $getter$$, $setter$$, $value$$153$$) : $setter$$.call($DvtOverviewParser$$, $value$$153$$)
  };
  dvt.$Overview$.prototype.$HandleShapeMouseOver$ = function $dvt$$Overview$$$$HandleShapeMouseOver$$($DvtOverviewEventManager$$) {
    var $DvtOverviewParser$$ = this.$_findDrawable$($DvtOverviewEventManager$$);
    if($DvtOverviewParser$$ && !("bg" == $DvtOverviewParser$$.getId() || "ocd" == $DvtOverviewParser$$.getId())) {
      if("label" == $DvtOverviewParser$$.getId().substr(0, 5) && ($DvtOverviewParser$$ instanceof dvt.$OutputText$ || $DvtOverviewParser$$ instanceof dvt.$BackgroundOutputText$)) {
        $DvtOverviewParser$$.$isTruncated$() && this.$getCtx$().$getTooltipManager$().$showDatatip$($DvtOverviewEventManager$$.pageX, $DvtOverviewEventManager$$.pageY, $DvtOverviewParser$$.$_rawText$, "#000000")
      }else {
        if(this.$_resizeArrow$ != $JSCompiler_alias_NULL$$ && this.$isHandle$($DvtOverviewParser$$) && ($DvtOverviewEventManager$$ = this.$getCtx$().$pageToStageCoords$($DvtOverviewEventManager$$.pageX, $DvtOverviewEventManager$$.pageY), $DvtOverviewEventManager$$ = this.$stageToLocal$($DvtOverviewEventManager$$), this.$isVertical$() ? this.$_resizeArrow$.$setTranslate$($DvtOverviewEventManager$$.x + 6, $DvtOverviewEventManager$$.y - 10) : this.$_resizeArrow$.$setTranslate$($DvtOverviewEventManager$$.x - 
        6, $DvtOverviewEventManager$$.y - 20), this.$_resizeArrow$.$setVisible$($JSCompiler_alias_TRUE$$)), "window" == $DvtOverviewParser$$.getId() || "ftr" == $DvtOverviewParser$$.getId() || "arr" == $DvtOverviewParser$$.getId() || this.$isHandle$($DvtOverviewParser$$)) {
          this.$isFlashEnvironment$() && this.setCursor("move")
        }else {
          return $DvtOverviewParser$$
        }
      }
    }
  };
  dvt.$Overview$.prototype.$HandleShapeMouseOut$ = function $dvt$$Overview$$$$HandleShapeMouseOut$$($DvtOverviewEventManager$$) {
    this.$_moveDrawable$ == $JSCompiler_alias_NULL$$ && this.setCursor("default");
    $DvtOverviewEventManager$$ = this.$_findDrawable$($DvtOverviewEventManager$$);
    if($DvtOverviewEventManager$$ != $JSCompiler_alias_NULL$$) {
      return this.$isHandle$($DvtOverviewEventManager$$) && this.$_resizeArrow$ != $JSCompiler_alias_NULL$$ && this.$_resizeArrow$.$setVisible$($JSCompiler_alias_FALSE$$), $DvtOverviewEventManager$$
    }
  };
  dvt.$Overview$.prototype.$HandleShapeClick$ = function $dvt$$Overview$$$$HandleShapeClick$$($DvtOverviewEventManager$$, $DvtOverviewParser$$, $evt$$42_pageY$$3_pos$$57$$) {
    $DvtOverviewEventManager$$.stopPropagation();
    var $drawable$$4_newStartTime_size$$33$$ = this.$_findDrawable$($DvtOverviewEventManager$$);
    if($drawable$$4_newStartTime_size$$33$$ && !("window" == $drawable$$4_newStartTime_size$$33$$.getId() || this.$isHandle$($drawable$$4_newStartTime_size$$33$$))) {
      if("bg" == $drawable$$4_newStartTime_size$$33$$.getId() || "label" == $drawable$$4_newStartTime_size$$33$$.getId().substr(0, 5) || "ocd" == $drawable$$4_newStartTime_size$$33$$.getId() || "lbg" == $drawable$$4_newStartTime_size$$33$$.getId() || "rbg" == $drawable$$4_newStartTime_size$$33$$.getId()) {
        $DvtOverviewParser$$ == $JSCompiler_alias_VOID$$ && ($DvtOverviewParser$$ = $DvtOverviewEventManager$$.pageX);
        $evt$$42_pageY$$3_pos$$57$$ == $JSCompiler_alias_VOID$$ && ($evt$$42_pageY$$3_pos$$57$$ = $DvtOverviewEventManager$$.pageY);
        $DvtOverviewEventManager$$ = this.$getCtx$().$pageToStageCoords$($DvtOverviewParser$$, $evt$$42_pageY$$3_pos$$57$$);
        $DvtOverviewEventManager$$ = this.$stageToLocal$($DvtOverviewEventManager$$);
        this.$isVertical$() ? ($evt$$42_pageY$$3_pos$$57$$ = $DvtOverviewEventManager$$.y, $drawable$$4_newStartTime_size$$33$$ = this.$Height$) : ($evt$$42_pageY$$3_pos$$57$$ = $DvtOverviewEventManager$$.x, $drawable$$4_newStartTime_size$$33$$ = this.$Width$);
        $DvtOverviewEventManager$$ = this.$getSlidingWindow$();
        $DvtOverviewParser$$ = $evt$$42_pageY$$3_pos$$57$$ - this.$getRectSize$($DvtOverviewEventManager$$) / 2;
        this.$animateSlidingWindow$($DvtOverviewParser$$);
        this.$isHorizontalRTL$() && ($evt$$42_pageY$$3_pos$$57$$ = this.$Width$ - $evt$$42_pageY$$3_pos$$57$$);
        var $time$$7$$ = this.$getPositionDate$($evt$$42_pageY$$3_pos$$57$$);
        $evt$$42_pageY$$3_pos$$57$$ = new dvt.$OverviewEvent$(dvt.$OverviewEvent$.$SUBTYPE_SCROLL_TIME$);
        $evt$$42_pageY$$3_pos$$57$$.setTime($time$$7$$);
        $DvtOverviewParser$$ = Math.max(0, Math.min($DvtOverviewParser$$, $drawable$$4_newStartTime_size$$33$$ - this.$getRectSize$($DvtOverviewEventManager$$)));
        this.$isHorizontalRTL$() ? ($drawable$$4_newStartTime_size$$33$$ = this.$getPositionDate$(this.$Width$ - ($DvtOverviewParser$$ + this.$getRectSize$($DvtOverviewEventManager$$))), $DvtOverviewEventManager$$ = this.$getPositionDate$(this.$Width$ - $DvtOverviewParser$$)) : ($drawable$$4_newStartTime_size$$33$$ = this.$getPositionDate$($DvtOverviewParser$$), $DvtOverviewEventManager$$ = this.$getPositionDate$($DvtOverviewParser$$ + this.$getRectSize$($DvtOverviewEventManager$$)));
        $evt$$42_pageY$$3_pos$$57$$.$setNewStartTime$($drawable$$4_newStartTime_size$$33$$);
        $evt$$42_pageY$$3_pos$$57$$.$setNewEndTime$($DvtOverviewEventManager$$);
        this.dispatchEvent($evt$$42_pageY$$3_pos$$57$$)
      }else {
        return $drawable$$4_newStartTime_size$$33$$
      }
    }
  };
  dvt.$Overview$.prototype.$beginDragPan$ = function $dvt$$Overview$$$$beginDragPan$$($DvtOverviewEventManager$$, $DvtOverviewParser$$, $compY_drawableId$$) {
    $DvtOverviewEventManager$$ = this.$_findDrawable$($DvtOverviewEventManager$$);
    if($DvtOverviewEventManager$$ != $JSCompiler_alias_NULL$$ && this.$isMovable$($DvtOverviewEventManager$$)) {
      if("ftr" == $DvtOverviewEventManager$$.getId() || "sta" == $DvtOverviewEventManager$$.getId()) {
        $DvtOverviewEventManager$$ = this.$getSlidingWindow$()
      }
      this.$_initX$ = $DvtOverviewParser$$;
      this.$_initY$ = $compY_drawableId$$;
      if(this.$isHandle$($DvtOverviewEventManager$$)) {
        $DvtOverviewParser$$ = this.$getSlidingWindow$();
        this.$isHorizontalRTL$() ? (this.$_oldEndPos$ = this.$Width$ - $DvtOverviewParser$$.$getX$(), this.$_oldStartPos$ = this.$_oldEndPos$ - $DvtOverviewParser$$.getWidth()) : (this.$_oldStartPos$ = $DvtOverviewParser$$.$getX$(), this.$_oldEndPos$ = this.$_oldStartPos$ + $DvtOverviewParser$$.getWidth());
        "grpy" == $DvtOverviewEventManager$$.getParent().getId() && ($DvtOverviewEventManager$$ = $DvtOverviewEventManager$$.getParent());
        $compY_drawableId$$ = $DvtOverviewEventManager$$.getId();
        "grpy" == $compY_drawableId$$ && ($DvtOverviewEventManager$$ = $DvtOverviewParser$$.$getChildBefore$($DvtOverviewEventManager$$), $compY_drawableId$$ = $DvtOverviewEventManager$$.getId());
        if("lh" == $compY_drawableId$$ || "rh" == $compY_drawableId$$) {
          $DvtOverviewEventManager$$ = $DvtOverviewParser$$.$getChildBefore$($DvtOverviewEventManager$$), $compY_drawableId$$ = $DvtOverviewEventManager$$.getId()
        }
        "lbgrh" == $compY_drawableId$$ && ($DvtOverviewEventManager$$ = $DvtOverviewParser$$.$getChildAt$(0));
        "rbgrh" == $compY_drawableId$$ && ($DvtOverviewEventManager$$ = $DvtOverviewParser$$.$getChildAt$($DvtOverviewParser$$.$getNumChildren$() - 3));
        dvt.$OverviewUtils$.$supportsTouch$() || (this.$isVertical$() ? ($DvtOverviewEventManager$$.$setY$(0 - dvt.$Overview$.$HANDLE_PADDING_SIZE$), $DvtOverviewEventManager$$.$setHeight$(2 * ($DvtOverviewEventManager$$.getHeight() + dvt.$Overview$.$HANDLE_PADDING_SIZE$))) : ($DvtOverviewEventManager$$.$setX$(0 - dvt.$Overview$.$HANDLE_PADDING_SIZE$), $DvtOverviewEventManager$$.$setWidth$(2 * ($DvtOverviewEventManager$$.getWidth() + dvt.$Overview$.$HANDLE_PADDING_SIZE$))));
        this.$overrideCursors$($DvtOverviewEventManager$$.getCursor())
      }
      this.$_moveDrawable$ = $DvtOverviewEventManager$$;
      $DvtOverviewEventManager$$ = new dvt.$OverviewEvent$(dvt.$OverviewEvent$.$SUBTYPE_PRE_RANGECHANGE$);
      this.dispatchEvent($DvtOverviewEventManager$$);
      return $JSCompiler_alias_TRUE$$
    }
    return $JSCompiler_alias_FALSE$$
  };
  dvt.$Overview$.prototype.$overrideCursors$ = function $dvt$$Overview$$$$overrideCursors$$($DvtOverviewEventManager$$) {
    var $DvtOverviewParser$$ = this.$getSlidingWindow$();
    $DvtOverviewParser$$ != $JSCompiler_alias_NULL$$ && $DvtOverviewParser$$.setCursor($DvtOverviewEventManager$$);
    if(this.$isLeftAndRightFilterRendered$()) {
      var $DvtOverviewParser$$ = this.$getLeftBackground$(), $rightBackground$$4$$ = this.$getRightBackground$();
      $DvtOverviewParser$$ != $JSCompiler_alias_NULL$$ && $rightBackground$$4$$ != $JSCompiler_alias_NULL$$ && ($DvtOverviewParser$$.setCursor($DvtOverviewEventManager$$), $rightBackground$$4$$.setCursor($DvtOverviewEventManager$$))
    }
  };
  dvt.$Overview$.prototype.$resetCursors$ = function $dvt$$Overview$$$$resetCursors$$() {
    var $DvtOverviewEventManager$$ = this.$getSlidingWindow$();
    $DvtOverviewEventManager$$ != $JSCompiler_alias_NULL$$ && $DvtOverviewEventManager$$.setCursor("move");
    if(this.$isLeftAndRightFilterRendered$()) {
      var $DvtOverviewEventManager$$ = this.$getLeftBackground$(), $DvtOverviewParser$$ = this.$getRightBackground$();
      $DvtOverviewEventManager$$ != $JSCompiler_alias_NULL$$ && $DvtOverviewParser$$ != $JSCompiler_alias_NULL$$ && ($DvtOverviewEventManager$$.setCursor("default"), $DvtOverviewParser$$.setCursor("default"))
    }
  };
  dvt.$Overview$.prototype.$endDragPan$ = function $dvt$$Overview$$$$endDragPan$$() {
    this.$_moveDrawable$ != $JSCompiler_alias_NULL$$ && ("window" == this.$_moveDrawable$.getId() ? this.$finishWindowDrag$(0, 0) : this.$isHandle$(this.$_moveDrawable$) && (this.$finishHandleDrag$(), dvt.$OverviewUtils$.$supportsTouch$() || (this.$isVertical$() ? (this.$_moveDrawable$.$setY$(0), this.$_moveDrawable$.$setHeight$(this.$getHandleSize$())) : (this.$_moveDrawable$.$setX$(0), this.$_moveDrawable$.$setWidth$(this.$getHandleSize$()))), this.$resetCursors$()), this.$_moveDrawable$ = $JSCompiler_alias_NULL$$, 
    this.$_initX$ = -1)
  };
  dvt.$Overview$.prototype.$contDragPan$ = function $dvt$$Overview$$$$contDragPan$$($DvtOverviewEventManager$$, $DvtOverviewParser$$, $compY$$1$$) {
    if(this.$_moveDrawable$ != $JSCompiler_alias_NULL$$ && -1 != this.$_initX$) {
      var $diffX$$4$$ = $DvtOverviewParser$$ - this.$_initX$, $diffY$$5$$ = $compY$$1$$ - this.$_initY$;
      this.$_initX$ = $DvtOverviewParser$$;
      this.$_initY$ = $compY$$1$$;
      "window" == this.$_moveDrawable$.getId() ? this.$handleWindowDragPositioning$(0, $diffX$$4$$, $diffY$$5$$) : "lh" == this.$_moveDrawable$.getId() || "lhb" == this.$_moveDrawable$.getId() ? this.$handleLeftHandleDragPositioning$($DvtOverviewEventManager$$, $diffX$$4$$, $diffY$$5$$) : ("rh" == this.$_moveDrawable$.getId() || "rhb" == this.$_moveDrawable$.getId()) && this.$handleRightHandleDragPositioning$($DvtOverviewEventManager$$, $diffX$$4$$, $diffY$$5$$)
    }
  };
  dvt.$Overview$.prototype.$HandleTouchStart$ = function $dvt$$Overview$$$$HandleTouchStart$$($DvtOverviewEventManager$$) {
    var $DvtOverviewParser$$ = $DvtOverviewEventManager$$.touches;
    this.$_touchStartX$ = $DvtOverviewParser$$[0].pageX;
    this.$_touchStartY$ = $DvtOverviewParser$$[0].pageY;
    2 == $DvtOverviewParser$$.length && ($DvtOverviewEventManager$$.preventDefault(), this.$_touchStartX2$ = $DvtOverviewParser$$[1].pageX, this.$_touchStartY2$ = $DvtOverviewParser$$[1].pageY, 20 > Math.abs(this.$_touchStartY$ - this.$_touchStartY2$) ? this.$_counter$ = 0 : this.$_touchStartY2$ = this.$_touchStartX2$ = this.$_touchStartY$ = this.$_touchStartX$ = $JSCompiler_alias_NULL$$)
  };
  dvt.$Overview$.prototype.$HandleTouchMove$ = function $dvt$$Overview$$$$HandleTouchMove$$($DvtOverviewEventManager$$) {
    $DvtOverviewEventManager$$.preventDefault();
    $DvtOverviewEventManager$$ = $DvtOverviewEventManager$$.touches;
    if(this.$_touchStartX2$ != $JSCompiler_alias_NULL$$ && this.$_touchStartY2$ != $JSCompiler_alias_NULL$$) {
      50 > this.$_counter$ ? this.$_counter$++ : (this.$handleRightHandleDragPositioning$($JSCompiler_alias_NULL$$, $DvtOverviewEventManager$$[1].pageX - this.$_touchStartX2$, 0), this.$_touchStartX2$ = $DvtOverviewEventManager$$[1].pageX, this.$_counter$ = 0)
    }else {
      var $DvtOverviewParser$$ = Math.abs(this.$_touchStartY$ - $DvtOverviewEventManager$$[0].pageY);
      if(3 < Math.abs(this.$_touchStartX$ - $DvtOverviewEventManager$$[0].pageX) || 3 < $DvtOverviewParser$$) {
        this.$_touchStartY$ = this.$_touchStartX$ = $JSCompiler_alias_NULL$$
      }
    }
  };
  dvt.$Overview$.prototype.$HandleTouchEnd$ = function $dvt$$Overview$$$$HandleTouchEnd$$($DvtOverviewEventManager$$) {
    this.$_touchStartX2$ != $JSCompiler_alias_NULL$$ && this.$_touchStartY2$ != $JSCompiler_alias_NULL$$ ? this.$finishHandleDrag$() : this.$_touchStartX$ != $JSCompiler_alias_NULL$$ && this.$_touchStartY$ != $JSCompiler_alias_NULL$$ && this.$HandleShapeClick$($DvtOverviewEventManager$$, this.$_touchStartX$, this.$_touchStartY$);
    this.$_touchStartY2$ = this.$_touchStartX2$ = this.$_touchStartY$ = this.$_touchStartX$ = $JSCompiler_alias_NULL$$
  };
  dvt.$Overview$.prototype.$HandleKeyDown$ = function $dvt$$Overview$$$$HandleKeyDown$$($DvtOverviewEventManager$$) {
    var $DvtOverviewParser$$ = $DvtOverviewEventManager$$.keyCode;
    if($DvtOverviewParser$$ === dvt.$KeyboardEvent$.$LEFT_ARROW$ || $DvtOverviewParser$$ === dvt.$KeyboardEvent$.$RIGHT_ARROW$) {
      $DvtOverviewParser$$ = $DvtOverviewParser$$ === dvt.$KeyboardEvent$.$LEFT_ARROW$ ? -1 : 1, ($DvtOverviewEventManager$$.shiftKey ? this.$handleRightHandleDragPositioning$ : this.$handleWindowDragPositioning$).call(this, $DvtOverviewEventManager$$, $DvtOverviewParser$$, $DvtOverviewParser$$)
    }
  };
  dvt.$Overview$.prototype.$HandleKeyUp$ = function $dvt$$Overview$$$$HandleKeyUp$$($DvtOverviewEventManager$$) {
    var $DvtOverviewParser$$ = $DvtOverviewEventManager$$.keyCode;
    if($DvtOverviewParser$$ === dvt.$KeyboardEvent$.$LEFT_ARROW$ || $DvtOverviewParser$$ === dvt.$KeyboardEvent$.$RIGHT_ARROW$) {
      $DvtOverviewParser$$ = $DvtOverviewParser$$ === dvt.$KeyboardEvent$.$LEFT_ARROW$ ? -1 : 1, ($DvtOverviewEventManager$$.shiftKey ? this.$finishHandleDrag$ : this.$finishWindowDrag$).call(this, $DvtOverviewParser$$, $DvtOverviewParser$$)
    }
  };
  dvt.$Overview$.prototype.$longScrollToPos$ = function $dvt$$Overview$$$$longScrollToPos$$($DvtOverviewEventManager$$) {
    $DvtOverviewEventManager$$ /= this.$_increment$;
    this.$isHorizontalRTL$() && ($DvtOverviewEventManager$$ = 0 - $DvtOverviewEventManager$$);
    this.$animateSlidingWindow$($DvtOverviewEventManager$$)
  };
  dvt.$Overview$.prototype.$handleWindowDragPositioning$ = function $dvt$$Overview$$$$handleWindowDragPositioning$$($DvtOverviewEventManager$$, $DvtOverviewParser$$, $deltaY$$7$$) {
    this.$fireScrollEvent$(dvt.$OverviewEvent$.$SUBTYPE_SCROLL_POS$, $DvtOverviewParser$$, $deltaY$$7$$)
  };
  dvt.$Overview$.prototype.$finishWindowDrag$ = function $dvt$$Overview$$$$finishWindowDrag$$($DvtOverviewEventManager$$, $DvtOverviewParser$$) {
    this.$fireScrollEvent$(dvt.$OverviewEvent$.$SUBTYPE_SCROLL_END$, $DvtOverviewEventManager$$, $DvtOverviewParser$$)
  };
  dvt.$Overview$.prototype.$fireScrollEvent$ = function $dvt$$Overview$$$$fireScrollEvent$$($DvtOverviewEventManager$$, $DvtOverviewParser$$, $deltaY$$9$$) {
    var $newEndTime$$1_slidingWindow$$17$$ = this.$getSlidingWindow$(), $pos$$61$$ = this.$getSlidingWindowPos$($newEndTime$$1_slidingWindow$$17$$), $newStartTime$$1_scrollTo_size$$34$$ = this.$getRectSize$($newEndTime$$1_slidingWindow$$17$$), $minPos$$1$$ = this.$_leftMargin$, $maxPos$$1$$ = this.$getMaximumPosition$();
    $DvtOverviewParser$$ = this.$isVertical$() ? $deltaY$$9$$ : $DvtOverviewParser$$;
    $pos$$61$$ + $DvtOverviewParser$$ <= $minPos$$1$$ ? (this.$setSlidingWindowPos$($newEndTime$$1_slidingWindow$$17$$, $minPos$$1$$), $newStartTime$$1_scrollTo_size$$34$$ = this.$isHorizontalRTL$() ? dvt.$OverviewEvent$.$END_POS$ : dvt.$OverviewEvent$.$START_POS$) : $pos$$61$$ + $newStartTime$$1_scrollTo_size$$34$$ + $DvtOverviewParser$$ >= $maxPos$$1$$ ? (this.$setSlidingWindowPos$($newEndTime$$1_slidingWindow$$17$$, $maxPos$$1$$ - $newStartTime$$1_scrollTo_size$$34$$), $newStartTime$$1_scrollTo_size$$34$$ = 
    this.$isHorizontalRTL$() ? dvt.$OverviewEvent$.$START_POS$ : dvt.$OverviewEvent$.$END_POS$) : (this.$setSlidingWindowPos$($newEndTime$$1_slidingWindow$$17$$, $pos$$61$$ + $DvtOverviewParser$$), $newStartTime$$1_scrollTo_size$$34$$ = this.$isHorizontalRTL$() ? ($maxPos$$1$$ - $newStartTime$$1_scrollTo_size$$34$$ - $pos$$61$$ - this.$_leftMargin$) * this.$_increment$ : ($pos$$61$$ - this.$_leftMargin$) * this.$_increment$);
    this.$ScrollTimeAxis$();
    $DvtOverviewEventManager$$ = new dvt.$OverviewEvent$($DvtOverviewEventManager$$);
    $DvtOverviewEventManager$$.$setPosition$($newStartTime$$1_scrollTo_size$$34$$);
    this.$isHorizontalRTL$() ? ($newStartTime$$1_scrollTo_size$$34$$ = this.$getPositionDate$(this.$Width$ - ($pos$$61$$ + this.$getRectSize$($newEndTime$$1_slidingWindow$$17$$))), $newEndTime$$1_slidingWindow$$17$$ = this.$getPositionDate$(this.$Width$ - $pos$$61$$)) : ($newStartTime$$1_scrollTo_size$$34$$ = this.$getPositionDate$($pos$$61$$), $newEndTime$$1_slidingWindow$$17$$ = this.$getPositionDate$($pos$$61$$ + this.$getRectSize$($newEndTime$$1_slidingWindow$$17$$)));
    $DvtOverviewEventManager$$.$setNewStartTime$($newStartTime$$1_scrollTo_size$$34$$);
    $DvtOverviewEventManager$$.$setNewEndTime$($newEndTime$$1_slidingWindow$$17$$);
    this.dispatchEvent($DvtOverviewEventManager$$)
  };
  dvt.$Overview$.prototype.$handleLeftHandleDragPositioning$ = function $dvt$$Overview$$$$handleLeftHandleDragPositioning$$($DvtOverviewEventManager$$, $DvtOverviewParser$$, $deltaY$$10$$) {
    this.$handleLeftOrRightHandleDragPositioning$($DvtOverviewEventManager$$, $DvtOverviewParser$$, $deltaY$$10$$, $JSCompiler_alias_TRUE$$)
  };
  dvt.$Overview$.prototype.$handleRightHandleDragPositioning$ = function $dvt$$Overview$$$$handleRightHandleDragPositioning$$($DvtOverviewEventManager$$, $DvtOverviewParser$$, $deltaY$$11$$) {
    this.$handleLeftOrRightHandleDragPositioning$($DvtOverviewEventManager$$, $DvtOverviewParser$$, $deltaY$$11$$, $JSCompiler_alias_FALSE$$)
  };
  dvt.$Overview$.prototype.$handleLeftOrRightHandleDragPositioning$ = function $dvt$$Overview$$$$handleLeftOrRightHandleDragPositioning$$($DvtOverviewEventManager$$, $DvtOverviewParser$$, $delta$$11_deltaY$$12$$, $isLeft$$5_newStartTime$$2$$) {
    var $evt$$45_size$$35$$ = this.$getOverviewSize$();
    $delta$$11_deltaY$$12$$ = this.$isVertical$() ? $delta$$11_deltaY$$12$$ : $DvtOverviewParser$$;
    if(0 != $delta$$11_deltaY$$12$$) {
      $DvtOverviewParser$$ = this.$getSlidingWindow$();
      var $windowPos$$ = this.$getSlidingWindowPos$($DvtOverviewParser$$), $windowSize$$ = this.$getSlidingWindowSize$($DvtOverviewParser$$);
      if($isLeft$$5_newStartTime$$2$$) {
        if($windowSize$$ - $delta$$11_deltaY$$12$$ <= this.$getMinimumWindowSize$() || $windowPos$$ + $delta$$11_deltaY$$12$$ <= this.$_leftMargin$) {
          return
        }
        $DvtOverviewEventManager$$ = this.$isVertical$() ? this.$getCtx$().$pageToStageCoords$(this.$getPageX$($DvtOverviewEventManager$$), this.$getPageY$($DvtOverviewEventManager$$)).y : this.$getCtx$().$pageToStageCoords$(this.$getPageX$($DvtOverviewEventManager$$), this.$getPageY$($DvtOverviewEventManager$$)).x;
        $DvtOverviewEventManager$$ = this.$stageToLocal$($DvtOverviewEventManager$$);
        if(0 < $delta$$11_deltaY$$12$$ && $DvtOverviewEventManager$$ <= $windowPos$$ || 0 > $delta$$11_deltaY$$12$$ && $DvtOverviewEventManager$$ >= $windowPos$$) {
          return
        }
        this.$setSlidingWindowPos$($DvtOverviewParser$$, $windowPos$$ + $delta$$11_deltaY$$12$$);
        this.$setSlidingWindowSize$($DvtOverviewParser$$, $windowSize$$ - $delta$$11_deltaY$$12$$)
      }else {
        if($windowSize$$ + $delta$$11_deltaY$$12$$ <= this.$getMinimumWindowSize$() || $windowPos$$ + $windowSize$$ + $delta$$11_deltaY$$12$$ >= this.$getMaximumPosition$()) {
          return
        }
        $DvtOverviewEventManager$$ = this.$isVertical$() ? this.$getCtx$().$pageToStageCoords$(this.$getPageX$($DvtOverviewEventManager$$), this.$getPageY$($DvtOverviewEventManager$$)).y : this.$getCtx$().$pageToStageCoords$(this.$getPageX$($DvtOverviewEventManager$$), this.$getPageY$($DvtOverviewEventManager$$)).x;
        $DvtOverviewEventManager$$ = this.$stageToLocal$($DvtOverviewEventManager$$);
        if(0 < $delta$$11_deltaY$$12$$ && $DvtOverviewEventManager$$ <= $windowPos$$ + $windowSize$$ || 0 > $delta$$11_deltaY$$12$$ && $DvtOverviewEventManager$$ >= $windowPos$$ + $windowSize$$) {
          return
        }
        this.$setSlidingWindowSize$($DvtOverviewParser$$, $windowSize$$ + $delta$$11_deltaY$$12$$)
      }
      this.$ScrollTimeAxis$();
      $DvtOverviewEventManager$$ = this.$getPositionDate$(this.$getSlidingWindowSize$($DvtOverviewParser$$));
      $DvtOverviewEventManager$$ = $evt$$45_size$$35$$ * (this.$_end$ - this.$_start$) / ($DvtOverviewEventManager$$ - this.$_start$);
      $evt$$45_size$$35$$ = new dvt.$OverviewEvent$(dvt.$OverviewEvent$.$SUBTYPE_RANGECHANGING$);
      $evt$$45_size$$35$$.$setNewSize$($DvtOverviewEventManager$$);
      $evt$$45_size$$35$$.$setEndHandle$(this.$isHorizontalRTL$() ? $isLeft$$5_newStartTime$$2$$ : !$isLeft$$5_newStartTime$$2$$);
      $isLeft$$5_newStartTime$$2$$ ? $evt$$45_size$$35$$.$setExpand$(0 > $delta$$11_deltaY$$12$$) : $evt$$45_size$$35$$.$setExpand$(0 < $delta$$11_deltaY$$12$$);
      this.$isHorizontalRTL$() ? ($isLeft$$5_newStartTime$$2$$ = this.$getPositionDate$(this.$Width$ - (this.$getSlidingWindowPos$($DvtOverviewParser$$) + this.$getRectSize$($DvtOverviewParser$$))), $DvtOverviewParser$$ = this.$getPositionDate$(this.$Width$ - this.$getSlidingWindowPos$($DvtOverviewParser$$))) : ($isLeft$$5_newStartTime$$2$$ = this.$getPositionDate$(this.$getSlidingWindowPos$($DvtOverviewParser$$)), $DvtOverviewParser$$ = this.$getPositionDate$(this.$getSlidingWindowPos$($DvtOverviewParser$$) + 
      this.$getRectSize$($DvtOverviewParser$$)));
      $evt$$45_size$$35$$.$setNewStartTime$($isLeft$$5_newStartTime$$2$$);
      $evt$$45_size$$35$$.$setNewEndTime$($DvtOverviewParser$$);
      this.dispatchEvent($evt$$45_size$$35$$)
    }
  };
  dvt.$Overview$.prototype.$finishHandleDrag$ = function $dvt$$Overview$$$$finishHandleDrag$$() {
    var $DvtOverviewEventManager$$ = this.$_start$, $DvtOverviewParser$$ = this.$_end$, $oldSize$$ = this.$_width$, $oldEndTime_size$$36$$ = this.$getOverviewSize$(), $newEndTime$$3_slidingWindow$$19$$ = this.$getSlidingWindow$(), $newStartTime$$3_time$$10$$ = this.$getPositionDate$(this.$getRectSize$($newEndTime$$3_slidingWindow$$19$$)), $DvtOverviewEventManager$$ = $oldEndTime_size$$36$$ * ($DvtOverviewParser$$ - $DvtOverviewEventManager$$) / ($newStartTime$$3_time$$10$$ - $DvtOverviewEventManager$$), 
    $DvtOverviewParser$$ = this.$getPositionDate$(this.$_oldStartPos$), $oldEndTime_size$$36$$ = this.$getPositionDate$(this.$_oldEndPos$);
    this.$isHorizontalRTL$() ? ($newStartTime$$3_time$$10$$ = this.$getPositionDate$(this.$Width$ - (this.$getSlidingWindowPos$($newEndTime$$3_slidingWindow$$19$$) + this.$getRectSize$($newEndTime$$3_slidingWindow$$19$$))), $newEndTime$$3_slidingWindow$$19$$ = this.$getPositionDate$(this.$Width$ - this.$getSlidingWindowPos$($newEndTime$$3_slidingWindow$$19$$))) : ($newStartTime$$3_time$$10$$ = this.$getPositionDate$(this.$getSlidingWindowPos$($newEndTime$$3_slidingWindow$$19$$)), $newEndTime$$3_slidingWindow$$19$$ = 
    this.$getPositionDate$(this.$getSlidingWindowPos$($newEndTime$$3_slidingWindow$$19$$) + this.$getRectSize$($newEndTime$$3_slidingWindow$$19$$)));
    var $evt$$46$$ = new dvt.$OverviewEvent$(dvt.$OverviewEvent$.$SUBTYPE_RANGECHANGE$);
    $evt$$46$$.$setOldSize$($oldSize$$);
    $evt$$46$$.$setNewSize$($DvtOverviewEventManager$$);
    $evt$$46$$.$setOldStartTime$($DvtOverviewParser$$);
    $evt$$46$$.$setOldEndTime$($oldEndTime_size$$36$$);
    $evt$$46$$.$setNewStartTime$($newStartTime$$3_time$$10$$);
    $evt$$46$$.$setNewEndTime$($newEndTime$$3_slidingWindow$$19$$);
    this.dispatchEvent($evt$$46$$)
  };
  dvt.$Overview$.prototype.$ScrollTimeAxis$ = function $dvt$$Overview$$$$ScrollTimeAxis$$() {
    var $DvtOverviewEventManager$$ = this.$getSlidingWindow$(), $DvtOverviewParser$$ = dvt.$Overview$.$_DEFAULT_WINDOW_BORDER_WIDTH$ / 2, $left$$13$$ = this.$getSlidingWindowPos$($DvtOverviewEventManager$$), $leftCenter$$1$$ = $left$$13$$ + $DvtOverviewParser$$, $DvtOverviewEventManager$$ = $left$$13$$ + this.$getSlidingWindowSize$($DvtOverviewEventManager$$) - $DvtOverviewParser$$, $DvtOverviewParser$$ = this.$getLeftHandle$(), $rightHandle$$4$$ = this.$getRightHandle$(), $leftTopBar$$2$$ = this.$getLeftTopBar$(), 
    $rightTopBar$$2$$ = this.$getRightTopBar$(), $bottomBar$$2$$ = this.$getBottomBar$(), $topBar$$2$$ = this.$getTopBar$();
    this.$setLinePos$($DvtOverviewParser$$, $leftCenter$$1$$, $leftCenter$$1$$);
    this.$setLinePos$($rightHandle$$4$$, $DvtOverviewEventManager$$, $DvtOverviewEventManager$$);
    this.$setLinePos$($leftTopBar$$2$$, -1, $left$$13$$);
    this.$setLinePos$($rightTopBar$$2$$, this.$getLinePos1$($rightHandle$$4$$), -1);
    this.$setLinePos$($bottomBar$$2$$, this.$getLinePos1$($DvtOverviewParser$$), this.$getLinePos1$($rightHandle$$4$$));
    this.$setLinePos$($topBar$$2$$, this.$getLinePos1$($DvtOverviewParser$$), this.$getLinePos1$($rightHandle$$4$$))
  };
  dvt.$Overview$.prototype.dispatchEvent = function $dvt$$Overview$$$dispatchEvent$($DvtOverviewEventManager$$) {
    dvt.$EventDispatcher$.dispatchEvent(this.$_callback$, this.$_callbackObj$, this, $DvtOverviewEventManager$$)
  };
  dvt.$Overview$.prototype.$destroy$ = function $dvt$$Overview$$$$destroy$$() {
    this.$EventManager$ && (this.$EventManager$.$removeListeners$(this), this.$EventManager$.$destroy$(), this.$EventManager$ = $JSCompiler_alias_NULL$$);
    dvt.$OverviewUtils$.$supportsTouch$() ? (this.$removeEvtListener$(dvt.$TouchEvent$.$TOUCHSTART$, this.$HandleTouchStart$, $JSCompiler_alias_FALSE$$, this), this.$removeEvtListener$(dvt.$TouchEvent$.$TOUCHMOVE$, this.$HandleTouchMove$, $JSCompiler_alias_FALSE$$, this), this.$removeEvtListener$(dvt.$TouchEvent$.$TOUCHEND$, this.$HandleTouchEnd$, $JSCompiler_alias_FALSE$$, this), this.$removeEvtListener$(dvt.$MouseEvent$.$CLICK$, this.$HandleShapeClick$, $JSCompiler_alias_FALSE$$, this)) : (this.$removeEvtListener$(dvt.$MouseEvent$.$MOUSEOVER$, 
    this.$HandleShapeMouseOver$, $JSCompiler_alias_FALSE$$, this), this.$removeEvtListener$(dvt.$MouseEvent$.$MOUSEOUT$, this.$HandleShapeMouseOut$, $JSCompiler_alias_FALSE$$, this), this.$removeEvtListener$(dvt.$MouseEvent$.$CLICK$, this.$HandleShapeClick$, $JSCompiler_alias_FALSE$$, this), this.$removeEvtListener$(dvt.$KeyboardEvent$.$KEYDOWN$, this.$HandleKeyDown$, $JSCompiler_alias_FALSE$$, this), this.$removeEvtListener$(dvt.$KeyboardEvent$.$KEYUP$, this.$HandleKeyUp$, $JSCompiler_alias_FALSE$$, 
    this));
    dvt.$Overview$.$superclass$.$destroy$.call(this)
  };
  dvt.$Obj$.$createSubclass$($DvtOverviewParser$$, dvt.$Obj$);
  $DvtOverviewParser$$.prototype.Init = $JSCompiler_set$$("$_view$");
  $DvtOverviewParser$$.prototype.parse = function $$DvtOverviewParser$$$$parse$($DvtOverviewEventManager$$) {
    return this.$ParseRootAttributes$($DvtOverviewEventManager$$)
  };
  $DvtOverviewParser$$.prototype.$ParseRootAttributes$ = function $$DvtOverviewParser$$$$$ParseRootAttributes$$($DvtOverviewEventManager$$) {
    var $DvtOverviewParser$$ = {};
    $DvtOverviewParser$$.$animationOnClick$ = $DvtOverviewEventManager$$.animationOnClick;
    $DvtOverviewEventManager$$.startTime != $JSCompiler_alias_NULL$$ && ($DvtOverviewParser$$.start = $DvtOverviewEventManager$$.startTime);
    $DvtOverviewEventManager$$.endTime != $JSCompiler_alias_NULL$$ && ($DvtOverviewParser$$.end = $DvtOverviewEventManager$$.endTime);
    $DvtOverviewParser$$.start == $JSCompiler_alias_NULL$$ && ($DvtOverviewParser$$.start = (new Date).getTime());
    if($DvtOverviewParser$$.end == $JSCompiler_alias_NULL$$ || $DvtOverviewParser$$.end <= $DvtOverviewParser$$.start) {
      $DvtOverviewParser$$.end = $DvtOverviewParser$$.start + 864E5
    }
    $DvtOverviewEventManager$$.currentTime != $JSCompiler_alias_NULL$$ && ($DvtOverviewParser$$.currentTime = $DvtOverviewEventManager$$.currentTime);
    $DvtOverviewEventManager$$.initialFocusTime != $JSCompiler_alias_NULL$$ && ($DvtOverviewParser$$.$initialFocusTime$ = $DvtOverviewEventManager$$.initialFocusTime);
    $DvtOverviewParser$$.orientation = "horizontal";
    $DvtOverviewEventManager$$.orientation != $JSCompiler_alias_NULL$$ && ($DvtOverviewParser$$.orientation = $DvtOverviewEventManager$$.orientation);
    $DvtOverviewParser$$.$featuresOff$ = $DvtOverviewEventManager$$.featuresOff;
    $DvtOverviewParser$$.$minimumWindowSize$ = $DvtOverviewEventManager$$.minimumWindowSize;
    $DvtOverviewParser$$.$leftMargin$ = $DvtOverviewEventManager$$.leftMargin;
    $DvtOverviewParser$$.$rightMargin$ = $DvtOverviewEventManager$$.rightMargin;
    if($DvtOverviewEventManager$$.viewportEndTime != $JSCompiler_alias_NULL$$) {
      var $viewportEndTime$$ = $DvtOverviewEventManager$$.viewportEndTime, $viewportStartTime$$ = $DvtOverviewParser$$.start;
      $DvtOverviewEventManager$$.viewportStartTime != $JSCompiler_alias_NULL$$ && $DvtOverviewEventManager$$.viewportStartTime < $viewportEndTime$$ && ($viewportStartTime$$ = $DvtOverviewEventManager$$.viewportStartTime);
      $DvtOverviewParser$$.width = $DvtOverviewEventManager$$.viewportEndPos != $JSCompiler_alias_NULL$$ ? this.$calculateWidth$($DvtOverviewParser$$.start, $DvtOverviewParser$$.end, $viewportStartTime$$, $viewportEndTime$$, $DvtOverviewEventManager$$.viewportEndPos) : this.$calculateWidth$($DvtOverviewParser$$.start, $DvtOverviewParser$$.end, $viewportStartTime$$, $viewportEndTime$$, this.$_view$.$Width$);
      $DvtOverviewParser$$.$renderStart$ = $viewportStartTime$$
    }else {
      $DvtOverviewParser$$.$renderStart$ = $DvtOverviewParser$$.start
    }
    0 == $DvtOverviewParser$$.width && ($DvtOverviewParser$$.width = 1E3);
    $DvtOverviewParser$$.$overviewPosition$ = "below";
    $DvtOverviewParser$$.$selectionMode$ = "none";
    $DvtOverviewParser$$.$isRtl$ = dvt.$Agent$.$isRightToLeft$(this.$_view$.$getCtx$()).toString();
    $DvtOverviewEventManager$$.rtl != $JSCompiler_alias_NULL$$ && ($DvtOverviewParser$$.$isRtl$ = $DvtOverviewEventManager$$.rtl.toString());
    $DvtOverviewParser$$.$handleFillColor$ = "#FFFFFF";
    $DvtOverviewParser$$.$handleTextureColor$ = "#B3C6DB";
    $DvtOverviewParser$$.$windowBackgroundColor$ = "#FFFFFF";
    $DvtOverviewParser$$.$windowBackgroundAlpha$ = 1;
    $DvtOverviewParser$$.$windowBorderTopStyle$ = "solid";
    $DvtOverviewParser$$.$windowBorderRightStyle$ = "solid";
    $DvtOverviewParser$$.$windowBorderBottomStyle$ = "solid";
    $DvtOverviewParser$$.$windowBorderLeftStyle$ = "solid";
    $DvtOverviewParser$$.$windowBorderTopColor$ = "#4F4F4F";
    $DvtOverviewParser$$.$windowBorderRightColor$ = "#4F4F4F";
    $DvtOverviewParser$$.$windowBorderBottomColor$ = "#4F4F4F";
    $DvtOverviewParser$$.$windowBorderLeftColor$ = "#4F4F4F";
    $DvtOverviewParser$$.$overviewBackgroundColor$ = "#E6ECF3";
    $DvtOverviewParser$$.$currentTimeIndicatorColor$ = "#C000D1";
    $DvtOverviewParser$$.$timeIndicatorColor$ = "#BCC7D2";
    $DvtOverviewParser$$.$timeAxisBarColor$ = "#e5e5e5";
    $DvtOverviewParser$$.$timeAxisBarOpacity$ = 1;
    $DvtOverviewParser$$.$leftFilterPanelColor$ = "#FFFFFF";
    $DvtOverviewParser$$.$leftFilterPanelAlpha$ = 0.7;
    $DvtOverviewParser$$.$rightFilterPanelColor$ = "#FFFFFF";
    $DvtOverviewParser$$.$rightFilterPanelAlpha$ = 0.7;
    $DvtOverviewEventManager$$.style != $JSCompiler_alias_NULL$$ && ($DvtOverviewEventManager$$.style.handleFillColor != $JSCompiler_alias_NULL$$ && ($DvtOverviewParser$$.$handleFillColor$ = $DvtOverviewEventManager$$.style.handleFillColor), $DvtOverviewEventManager$$.style.handleTextureColor != $JSCompiler_alias_NULL$$ && ($DvtOverviewParser$$.$handleTextureColor$ = $DvtOverviewEventManager$$.style.handleTextureColor), $DvtOverviewEventManager$$.style.handleBackgroundImage != $JSCompiler_alias_NULL$$ && 
    ($DvtOverviewParser$$.$handleBackgroundImage$ = $DvtOverviewEventManager$$.style.handleBackgroundImage), $DvtOverviewEventManager$$.style.handleWidth != $JSCompiler_alias_NULL$$ && ($DvtOverviewParser$$.$handleWidth$ = $DvtOverviewEventManager$$.style.handleWidth), $DvtOverviewEventManager$$.style.handleHeight != $JSCompiler_alias_NULL$$ && ($DvtOverviewParser$$.$handleHeight$ = $DvtOverviewEventManager$$.style.handleHeight), $DvtOverviewEventManager$$.style.windowBackgroundColor != $JSCompiler_alias_NULL$$ && 
    ($DvtOverviewParser$$.$windowBackgroundColor$ = $DvtOverviewEventManager$$.style.windowBackgroundColor), $DvtOverviewEventManager$$.style.windowBackgroundAlpha != $JSCompiler_alias_NULL$$ && ($DvtOverviewParser$$.$windowBackgroundAlpha$ = $DvtOverviewEventManager$$.style.windowBackgroundAlpha), $DvtOverviewEventManager$$.style.windowBorderTopStyle != $JSCompiler_alias_NULL$$ && ($DvtOverviewParser$$.$windowBorderTopStyle$ = $DvtOverviewEventManager$$.style.windowBorderTopStyle), $DvtOverviewEventManager$$.style.windowBorderRightStyle != 
    $JSCompiler_alias_NULL$$ && ($DvtOverviewParser$$.$windowBorderRightStyle$ = $DvtOverviewEventManager$$.style.windowBorderRightStyle), $DvtOverviewEventManager$$.style.windowBorderBottomStyle != $JSCompiler_alias_NULL$$ && ($DvtOverviewParser$$.$windowBorderBottomStyle$ = $DvtOverviewEventManager$$.style.windowBorderBottomStyle), $DvtOverviewEventManager$$.style.windowBorderLeftStyle != $JSCompiler_alias_NULL$$ && ($DvtOverviewParser$$.$windowBorderLeftStyle$ = $DvtOverviewEventManager$$.style.windowBorderLeftStyle), 
    $DvtOverviewEventManager$$.style.windowBorderTopColor != $JSCompiler_alias_NULL$$ && ($DvtOverviewParser$$.$windowBorderTopColor$ = $DvtOverviewEventManager$$.style.windowBorderTopColor), $DvtOverviewEventManager$$.style.windowBorderRightColor != $JSCompiler_alias_NULL$$ && ($DvtOverviewParser$$.$windowBorderRightColor$ = $DvtOverviewEventManager$$.style.windowBorderRightColor), $DvtOverviewEventManager$$.style.windowBorderBottomColor != $JSCompiler_alias_NULL$$ && ($DvtOverviewParser$$.$windowBorderBottomColor$ = 
    $DvtOverviewEventManager$$.style.windowBorderBottomColor), $DvtOverviewEventManager$$.style.windowBorderLeftColor != $JSCompiler_alias_NULL$$ && ($DvtOverviewParser$$.$windowBorderLeftColor$ = $DvtOverviewEventManager$$.style.windowBorderLeftColor), $DvtOverviewEventManager$$.style.overviewBackgroundColor != $JSCompiler_alias_NULL$$ && ($DvtOverviewParser$$.$overviewBackgroundColor$ = $DvtOverviewEventManager$$.style.overviewBackgroundColor), $DvtOverviewEventManager$$.style.currentTimeIndicatorColor != 
    $JSCompiler_alias_NULL$$ && ($DvtOverviewParser$$.$currentTimeIndicatorColor$ = $DvtOverviewEventManager$$.style.currentTimeIndicatorColor), $DvtOverviewEventManager$$.style.timeIndicatorColor != $JSCompiler_alias_NULL$$ && ($DvtOverviewParser$$.$timeIndicatorColor$ = $DvtOverviewEventManager$$.style.timeIndicatorColor), $DvtOverviewEventManager$$.style.leftFilterPanelColor != $JSCompiler_alias_NULL$$ && ($DvtOverviewParser$$.$leftFilterPanelColor$ = $DvtOverviewEventManager$$.style.leftFilterPanelColor), 
    $DvtOverviewEventManager$$.style.leftFilterPanelAlpha != $JSCompiler_alias_NULL$$ && ($DvtOverviewParser$$.$leftFilterPanelAlpha$ = $DvtOverviewEventManager$$.style.leftFilterPanelAlpha), $DvtOverviewEventManager$$.style.rightFilterPanelColor != $JSCompiler_alias_NULL$$ && ($DvtOverviewParser$$.$rightFilterPanelColor$ = $DvtOverviewEventManager$$.style.rightFilterPanelColor), $DvtOverviewEventManager$$.style.rightFilterPanelAlpha != $JSCompiler_alias_NULL$$ && ($DvtOverviewParser$$.$rightFilterPanelAlpha$ = 
    $DvtOverviewEventManager$$.style.rightFilterPanelAlpha));
    return $DvtOverviewParser$$
  };
  $DvtOverviewParser$$.prototype.$calculateWidth$ = function $$DvtOverviewParser$$$$$calculateWidth$$($DvtOverviewEventManager$$, $DvtOverviewParser$$, $denominator$$1_viewportStartTime$$1$$, $viewportEndTime$$1$$, $viewportEndPos$$) {
    $DvtOverviewEventManager$$ = $viewportEndPos$$ * ($DvtOverviewParser$$ - $DvtOverviewEventManager$$);
    $denominator$$1_viewportStartTime$$1$$ = $viewportEndTime$$1$$ - $denominator$$1_viewportStartTime$$1$$;
    return 0 == $DvtOverviewEventManager$$ || 0 == $denominator$$1_viewportStartTime$$1$$ ? 0 : $DvtOverviewEventManager$$ / $denominator$$1_viewportStartTime$$1$$
  };
  dvt.$OverviewEvent$ = function $dvt$$OverviewEvent$$($DvtOverviewEventManager$$) {
    this.Init(dvt.$OverviewEvent$.$TYPE$);
    this.$_subtype$ = $DvtOverviewEventManager$$
  };
  dvt.$Obj$.$createSubclass$(dvt.$OverviewEvent$, dvt.$BaseComponentEvent$);
  dvt.$OverviewEvent$.$TYPE$ = "overview";
  dvt.$OverviewEvent$.$SUBTYPE_PRE_RANGECHANGE$ = "dropCallback";
  dvt.$OverviewEvent$.$SUBTYPE_SCROLL_TIME$ = "scrollTime";
  dvt.$OverviewEvent$.$SUBTYPE_SCROLL_POS$ = "scrollPos";
  dvt.$OverviewEvent$.$SUBTYPE_SCROLL_END$ = "scrollEnd";
  dvt.$OverviewEvent$.$SUBTYPE_RANGECHANGE$ = "rangeChange";
  dvt.$OverviewEvent$.$SUBTYPE_RANGECHANGING$ = "rangeChanging";
  dvt.$OverviewEvent$.$TIME_KEY$ = "time";
  dvt.$OverviewEvent$.$POS_KEY$ = "pos";
  dvt.$OverviewEvent$.$OLD_SIZE_KEY$ = "oldSize";
  dvt.$OverviewEvent$.$NEW_SIZE_KEY$ = "newSize";
  dvt.$OverviewEvent$.$OLD_START_TIME_KEY$ = "oldStartTime";
  dvt.$OverviewEvent$.$NEW_START_TIME_KEY$ = "newStartTime";
  dvt.$OverviewEvent$.$OLD_END_TIME_KEY$ = "oldEndTime";
  dvt.$OverviewEvent$.$NEW_END_TIME_KEY$ = "newEndTime";
  dvt.$OverviewEvent$.$EXPAND_KEY$ = "expand";
  dvt.$OverviewEvent$.$END_HANDLE_KEY$ = "endHandle";
  dvt.$OverviewEvent$.$START_POS$ = -1;
  dvt.$OverviewEvent$.$END_POS$ = -2;
  dvt.$OverviewEvent$.prototype.$getSubType$ = $JSCompiler_get$$("$_subtype$");
  dvt.$OverviewEvent$.prototype.setTime = function $dvt$$OverviewEvent$$$setTime$($DvtOverviewEventManager$$) {
    this.$addParam$(dvt.$OverviewEvent$.$TIME_KEY$, $DvtOverviewEventManager$$)
  };
  dvt.$OverviewEvent$.prototype.getTime = function $dvt$$OverviewEvent$$$getTime$() {
    return this.$getParamValue$(dvt.$OverviewEvent$.$TIME_KEY$)
  };
  dvt.$OverviewEvent$.prototype.$setOldSize$ = function $dvt$$OverviewEvent$$$$setOldSize$$($DvtOverviewEventManager$$) {
    this.$addParam$(dvt.$OverviewEvent$.$OLD_SIZE_KEY$, $DvtOverviewEventManager$$)
  };
  dvt.$OverviewEvent$.prototype.$setNewSize$ = function $dvt$$OverviewEvent$$$$setNewSize$$($DvtOverviewEventManager$$) {
    this.$addParam$(dvt.$OverviewEvent$.$NEW_SIZE_KEY$, $DvtOverviewEventManager$$)
  };
  dvt.$OverviewEvent$.prototype.$setOldStartTime$ = function $dvt$$OverviewEvent$$$$setOldStartTime$$($DvtOverviewEventManager$$) {
    this.$addParam$(dvt.$OverviewEvent$.$OLD_START_TIME_KEY$, $DvtOverviewEventManager$$)
  };
  dvt.$OverviewEvent$.prototype.$setNewStartTime$ = function $dvt$$OverviewEvent$$$$setNewStartTime$$($DvtOverviewEventManager$$) {
    this.$addParam$(dvt.$OverviewEvent$.$NEW_START_TIME_KEY$, $DvtOverviewEventManager$$)
  };
  dvt.$OverviewEvent$.prototype.$getNewStartTime$ = function $dvt$$OverviewEvent$$$$getNewStartTime$$() {
    return this.$getParamValue$(dvt.$OverviewEvent$.$NEW_START_TIME_KEY$)
  };
  dvt.$OverviewEvent$.prototype.$setOldEndTime$ = function $dvt$$OverviewEvent$$$$setOldEndTime$$($DvtOverviewEventManager$$) {
    this.$addParam$(dvt.$OverviewEvent$.$OLD_END_TIME_KEY$, $DvtOverviewEventManager$$)
  };
  dvt.$OverviewEvent$.prototype.$setNewEndTime$ = function $dvt$$OverviewEvent$$$$setNewEndTime$$($DvtOverviewEventManager$$) {
    this.$addParam$(dvt.$OverviewEvent$.$NEW_END_TIME_KEY$, $DvtOverviewEventManager$$)
  };
  dvt.$OverviewEvent$.prototype.$getNewEndTime$ = function $dvt$$OverviewEvent$$$$getNewEndTime$$() {
    return this.$getParamValue$(dvt.$OverviewEvent$.$NEW_END_TIME_KEY$)
  };
  dvt.$OverviewEvent$.prototype.$setExpand$ = function $dvt$$OverviewEvent$$$$setExpand$$($DvtOverviewEventManager$$) {
    this.$addParam$(dvt.$OverviewEvent$.$EXPAND_KEY$, $DvtOverviewEventManager$$)
  };
  dvt.$OverviewEvent$.prototype.$setEndHandle$ = function $dvt$$OverviewEvent$$$$setEndHandle$$($DvtOverviewEventManager$$) {
    this.$addParam$(dvt.$OverviewEvent$.$END_HANDLE_KEY$, $DvtOverviewEventManager$$)
  };
  dvt.$OverviewEvent$.prototype.$setPosition$ = function $dvt$$OverviewEvent$$$$setPosition$$($DvtOverviewEventManager$$) {
    this.$addParam$(dvt.$OverviewEvent$.$POS_KEY$, $DvtOverviewEventManager$$)
  };
  dvt.$OverviewEvent$.prototype.$getPosition$ = function $dvt$$OverviewEvent$$$$getPosition$$() {
    return this.$getParamValue$(dvt.$OverviewEvent$.$POS_KEY$)
  };
  dvt.$Obj$.$createSubclass$($DvtOverviewEventManager$$, dvt.$EventManager$);
  $DvtOverviewEventManager$$.prototype.$addListeners$ = function $$DvtOverviewEventManager$$$$$addListeners$$($DvtOverviewParser$$) {
    $DvtOverviewEventManager$$.$superclass$.$addListeners$.call(this, $DvtOverviewParser$$);
    dvt.$SvgDocumentUtils$.$addDragListeners$(this.$_overview$, this.$_onDragStart$, this.$_onDragMove$, this.$_onDragEnd$, this)
  };
  $DvtOverviewEventManager$$.prototype.$_onDragStart$ = function $$DvtOverviewEventManager$$$$$_onDragStart$$($DvtOverviewEventManager$$) {
    return dvt.$Agent$.$isTouchDevice$() ? this.$_onTouchDragStart$($DvtOverviewEventManager$$) : this.$_onMouseDragStart$($DvtOverviewEventManager$$)
  };
  $DvtOverviewEventManager$$.prototype.$_onDragMove$ = function $$DvtOverviewEventManager$$$$$_onDragMove$$($DvtOverviewEventManager$$) {
    return dvt.$Agent$.$isTouchDevice$() ? this.$_onTouchDragMove$($DvtOverviewEventManager$$) : this.$_onMouseDragMove$($DvtOverviewEventManager$$)
  };
  $DvtOverviewEventManager$$.prototype.$_onDragEnd$ = function $$DvtOverviewEventManager$$$$$_onDragEnd$$($DvtOverviewEventManager$$) {
    return dvt.$Agent$.$isTouchDevice$() ? this.$_onTouchDragEnd$($DvtOverviewEventManager$$) : this.$_onMouseDragEnd$($DvtOverviewEventManager$$)
  };
  $DvtOverviewEventManager$$.prototype.$_getRelativePosition$ = function $$DvtOverviewEventManager$$$$$_getRelativePosition$$($DvtOverviewEventManager$$, $DvtOverviewParser$$) {
    this.$_stageAbsolutePosition$ || (this.$_stageAbsolutePosition$ = this.$_context$.$getStageAbsolutePosition$());
    return new dvt.$Point$($DvtOverviewEventManager$$ - this.$_stageAbsolutePosition$.x, $DvtOverviewParser$$ - this.$_stageAbsolutePosition$.y)
  };
  $DvtOverviewEventManager$$.prototype.$_onMouseDragStart$ = function $$DvtOverviewEventManager$$$$$_onMouseDragStart$$($DvtOverviewEventManager$$) {
    if($DvtOverviewEventManager$$.button != dvt.$MouseEvent$.$RIGHT_CLICK_BUTTON$) {
      var $DvtOverviewParser$$ = this.$_getRelativePosition$($DvtOverviewEventManager$$.pageX, $DvtOverviewEventManager$$.pageY);
      dvt.$EventManager$.$consumeEvent$($DvtOverviewEventManager$$);
      this.$getCtx$().$_stage$.$_SVGRoot$.parentNode.focus();
      return this.$_overview$.$beginDragPan$($DvtOverviewEventManager$$, $DvtOverviewParser$$.x, $DvtOverviewParser$$.y)
    }
    return $JSCompiler_alias_FALSE$$
  };
  $DvtOverviewEventManager$$.prototype.$_onMouseDragMove$ = function $$DvtOverviewEventManager$$$$$_onMouseDragMove$$($DvtOverviewEventManager$$) {
    var $DvtOverviewParser$$ = this.$_getRelativePosition$($DvtOverviewEventManager$$.pageX, $DvtOverviewEventManager$$.pageY);
    $DvtOverviewEventManager$$.stopPropagation();
    this.$_overview$.$contDragPan$($DvtOverviewEventManager$$, $DvtOverviewParser$$.x, $DvtOverviewParser$$.y);
    return $JSCompiler_alias_TRUE$$
  };
  $DvtOverviewEventManager$$.prototype.$_onMouseDragEnd$ = function $$DvtOverviewEventManager$$$$$_onMouseDragEnd$$($DvtOverviewEventManager$$) {
    $DvtOverviewEventManager$$.stopPropagation();
    this.$_overview$.$endDragPan$();
    this.$_stageAbsolutePosition$ = $JSCompiler_alias_NULL$$
  };
  $DvtOverviewEventManager$$.prototype.$_onTouchDragStart$ = function $$DvtOverviewEventManager$$$$$_onTouchDragStart$$($DvtOverviewEventManager$$) {
    var $DvtOverviewParser$$ = $DvtOverviewEventManager$$.touches;
    $DvtOverviewEventManager$$.stopPropagation();
    return 1 == $DvtOverviewParser$$.length ? ($DvtOverviewParser$$ = this.$_getRelativePosition$($DvtOverviewParser$$[0].pageX, $DvtOverviewParser$$[0].pageY), $DvtOverviewEventManager$$.preventDefault(), this.$_overview$.$beginDragPan$($DvtOverviewEventManager$$, $DvtOverviewParser$$.x, $DvtOverviewParser$$.y)) : $JSCompiler_alias_FALSE$$
  };
  $DvtOverviewEventManager$$.prototype.$_onTouchDragMove$ = function $$DvtOverviewEventManager$$$$$_onTouchDragMove$$($DvtOverviewEventManager$$) {
    var $DvtOverviewParser$$ = $DvtOverviewEventManager$$.touches;
    1 == $DvtOverviewParser$$.length && ($DvtOverviewParser$$ = this.$_getRelativePosition$($DvtOverviewParser$$[0].pageX, $DvtOverviewParser$$[0].pageY), this.$_overview$.$contDragPan$($DvtOverviewEventManager$$, $DvtOverviewParser$$.x, $DvtOverviewParser$$.y), $DvtOverviewEventManager$$.preventDefault());
    $DvtOverviewEventManager$$.stopPropagation()
  };
  $DvtOverviewEventManager$$.prototype.$_onTouchDragEnd$ = function $$DvtOverviewEventManager$$$$$_onTouchDragEnd$$($DvtOverviewEventManager$$) {
    this.$_overview$.$endDragPan$();
    dvt.$EventManager$.$consumeEvent$($DvtOverviewEventManager$$);
    this.$_stageAbsolutePosition$ = $JSCompiler_alias_NULL$$
  };
  dvt.$exportProperty$(dvt, "Overview", dvt.$Overview$);
  dvt.$exportProperty$(dvt.$Overview$.prototype, "render", dvt.$Overview$.prototype.$render$)
})();

  return dvt;
});

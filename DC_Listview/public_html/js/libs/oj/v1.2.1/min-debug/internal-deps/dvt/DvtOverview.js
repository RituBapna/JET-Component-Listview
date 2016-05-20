/**
 * Copyright (c) 2014, Oracle and/or its affiliates.
 * All rights reserved.
 */
"use strict";
define(['./DvtToolkit'], function(dvt) {
  // Internal use only.  All APIs and functionality are subject to change at any time.
  
  // Map the D namespace to dvt, which is used to provide access across partitions.
  var D = dvt;
  
D.$DvtTimeUtils$$ = {$supportsTouch$:function() {
  return(0,D.$DvtAgent$isTouchDevice$$)()
}};
D.$DvtObj$$.$createSubclass$(D.$DvtTimeUtils$$, D.$DvtObj$$, "DvtTimeUtils");
D.$DvtTimeUtils$$.$getDatePosition$ = function $$DvtTimeUtils$$$$getDatePosition$$($denominator$$1_startTime$$4$$, $endTime$$4$$, $number$$2_time$$15$$, $width$$135$$) {
  $number$$2_time$$15$$ = ($number$$2_time$$15$$ - $denominator$$1_startTime$$4$$) * $width$$135$$;
  $denominator$$1_startTime$$4$$ = $endTime$$4$$ - $denominator$$1_startTime$$4$$;
  return 0 == $number$$2_time$$15$$ || 0 == $denominator$$1_startTime$$4$$ ? 0 : $number$$2_time$$15$$ / $denominator$$1_startTime$$4$$
};
D.$DvtTimeUtils$$.$getPositionDate$ = function $$DvtTimeUtils$$$$getPositionDate$$($startTime$$5$$, $endTime$$5_number$$3$$, $pos$$66$$, $width$$136$$) {
  $endTime$$5_number$$3$$ = $pos$$66$$ * ($endTime$$5_number$$3$$ - $startTime$$5$$);
  return 0 == $endTime$$5_number$$3$$ || 0 == $width$$136$$ ? $startTime$$5$$ : $endTime$$5_number$$3$$ / $width$$136$$ + $startTime$$5$$
};
D.$DvtOverview$$ = function $$DvtOverview$$$($context$$469$$, $callback$$123$$, $callbackObj$$77$$) {
  this.Init($context$$469$$, $callback$$123$$, $callbackObj$$77$$)
};
(0,D.$goog$exportPath_$$)("DvtOverview", D.$DvtOverview$$);
D.$DvtObj$$.$createSubclass$(D.$DvtOverview$$, D.$DvtContainer$$, "DvtOverview");
D.$DvtOverview$$.prototype.Init = function $$DvtOverview$$$$Init$($context$$470$$, $callback$$124$$, $callbackObj$$78$$) {
  D.$DvtOverview$$.$superclass$.Init.call(this, $context$$470$$);
  this.$_callback$ = $callback$$124$$;
  this.$_callbackObj$ = $callbackObj$$78$$;
  this.$_lastChildIndex$ = this.$isFlashEnvironment$() ? 7 : 6;
  if(this.$_callback$ != D.$JSCompiler_alias_NULL$$ || this.$_callbackObj$ != D.$JSCompiler_alias_NULL$$) {
    this.$EventManager$ = new D.$DvtOverviewEventManager$$(this), this.$EventManager$.$addListeners$(this), D.$DvtTimeUtils$$.$supportsTouch$() ? (this.$addEvtListener$(D.$DvtTouchEvent$$.$TOUCHSTART$, this.$HandleTouchStart$, D.$JSCompiler_alias_FALSE$$, this), this.$addEvtListener$(D.$DvtTouchEvent$$.$TOUCHMOVE$, this.$HandleTouchMove$, D.$JSCompiler_alias_FALSE$$, this), this.$addEvtListener$(D.$DvtTouchEvent$$.$TOUCHEND$, this.$HandleTouchEnd$, D.$JSCompiler_alias_FALSE$$, this), this.$addEvtListener$(D.$DvtMouseEvent$CLICK$$, 
    this.$HandleShapeClick$, D.$JSCompiler_alias_FALSE$$, this)) : (this.$addEvtListener$(D.$DvtMouseEvent$MOUSEOVER$$, this.$HandleShapeMouseOver$, D.$JSCompiler_alias_FALSE$$, this), this.$addEvtListener$(D.$DvtMouseEvent$MOUSEOUT$$, this.$HandleShapeMouseOut$, D.$JSCompiler_alias_FALSE$$, this), this.$addEvtListener$(D.$DvtMouseEvent$CLICK$$, this.$HandleShapeClick$, D.$JSCompiler_alias_FALSE$$, this), this.$addEvtListener$(D.$DvtKeyboardEvent$KEYDOWN$$, this.$HandleKeyDown$, D.$JSCompiler_alias_FALSE$$, 
    this), this.$addEvtListener$(D.$DvtKeyboardEvent$KEYUP$$, this.$HandleKeyUp$, D.$JSCompiler_alias_FALSE$$, this))
  }
  this.$_initPos$ = 0
};
D.$DvtOverview$$.prototype.$setViewportRange$ = function $$DvtOverview$$$$$setViewportRange$$($start$$37_viewportStart$$, $end$$21_size$$38$$, $overviewLength$$) {
  $overviewLength$$ == D.$JSCompiler_alias_NULL$$ && ($overviewLength$$ = this.$Width$);
  $start$$37_viewportStart$$ = this.$getDatePosition$($start$$37_viewportStart$$);
  var $slidingWindow_viewportEnd$$ = this.$getDatePosition$($end$$21_size$$38$$);
  $start$$37_viewportStart$$ < this.$_leftMargin$ || $slidingWindow_viewportEnd$$ > (0,D.$JSCompiler_StaticMethods_getMaximumPosition$$)(this) || ($end$$21_size$$38$$ = window.Math.max($slidingWindow_viewportEnd$$ - $start$$37_viewportStart$$, (0,D.$JSCompiler_StaticMethods_getMinimumWindowSize$$)(this)), 0 < $end$$21_size$$38$$ && (0 <= $start$$37_viewportStart$$ && $slidingWindow_viewportEnd$$ <= $overviewLength$$) && ($slidingWindow_viewportEnd$$ = this.$getChildAt$(1), (0,D.$JSCompiler_StaticMethods_isHorizontalRTL$$)(this) ? 
  (0,D.$JSCompiler_StaticMethods_setSlidingWindowPos$$)(this, $slidingWindow_viewportEnd$$, $overviewLength$$ - ($start$$37_viewportStart$$ + $end$$21_size$$38$$)) : (0,D.$JSCompiler_StaticMethods_setSlidingWindowPos$$)(this, $slidingWindow_viewportEnd$$, $start$$37_viewportStart$$), (0,D.$JSCompiler_StaticMethods_setSlidingWindowSize$$)(this, $slidingWindow_viewportEnd$$, $end$$21_size$$38$$), (0,D.$JSCompiler_StaticMethods_ScrollTimeAxis$$)(this)))
};
D.$JSCompiler_StaticMethods_isFeatureOff$$ = function $$JSCompiler_StaticMethods_isFeatureOff$$$($JSCompiler_StaticMethods_isFeatureOff$self$$) {
  return $JSCompiler_StaticMethods_isFeatureOff$self$$.$_featuresOff$ == D.$JSCompiler_alias_NULL$$ ? D.$JSCompiler_alias_FALSE$$ : -1 != $JSCompiler_StaticMethods_isFeatureOff$self$$.$_featuresOff$.indexOf("zoom")
};
D.$DvtOverview$$.prototype.$render$ = function $$DvtOverview$$$$$render$$($interactive$$1_obj$$310_props$$2_renderStart$$inline_7495_renderStartPos$$inline_7500_start$$inline_11197_top$$inline_7468_vertical$$inline_7488$$, $actualAmount$$inline_7505_arrow$$inline_7485_arrowCmds$$inline_7484_day2$$inline_11200_rightTopBar$$inline_7479_size$$inline_7490_width$$121$$, $height$$111_right$$inline_7474_timelineWidth$$inline_11196_topBar$$inline_7481_window$$inline_7489$$) {
  if($interactive$$1_obj$$310_props$$2_renderStart$$inline_7495_renderStartPos$$inline_7500_start$$inline_11197_top$$inline_7468_vertical$$inline_7488$$ == D.$JSCompiler_alias_NULL$$) {
    var $bottom$$inline_7470_day1$$inline_11199_displayable$$inline_11192_leftBackgroundResizeHandle$$inline_7435_pos1$$inline_11201_rangeStartPos$$inline_7498_rangeStartTime$$inline_7496_size$$inline_7442_start$$38_vertical$$inline_7416_width$$inline_11184$$ = this.$_start$, $end$$22_height$$inline_11185_i$$inline_7443_left$$inline_7472_leftBackground$$inline_7433_rangeEndTime$$inline_7497_slidingWindow$$inline_7417_timeAxisTopBar$$inline_7432_timelineWidth$$inline_7492$$ = this.$_end$, $color$$inline_11188_elem$$inline_11183_leftCenter$$inline_7473_leftHandleBackground$$inline_7424_rightBackground$$inline_7434_slidingWindow$$1_start$$inline_7493_time$$inline_7445_time_pos$$inline_7446$$ = 
    this.$getChildAt$(1), $child$$inline_7444_end$$inline_7494_label$$inline_7447_leftHandle$$inline_7476_rangeEnd$$inline_11187_rangeWidth$$inline_11191_rightHandle$$inline_7431_rightHandleCmds$$inline_7423_slidingWindow$$inline_7467_slidingWindowPos$$ = (0,D.$JSCompiler_StaticMethods_getSlidingWindowPos$$)(this, $color$$inline_11188_elem$$inline_11183_leftCenter$$inline_7473_leftHandleBackground$$inline_7424_rightBackground$$inline_7434_slidingWindow$$1_start$$inline_7493_time$$inline_7445_time_pos$$inline_7446$$);
    $color$$inline_11188_elem$$inline_11183_leftCenter$$inline_7473_leftHandleBackground$$inline_7424_rightBackground$$inline_7434_slidingWindow$$1_start$$inline_7493_time$$inline_7445_time_pos$$inline_7446$$ != D.$JSCompiler_alias_NULL$$ && 0 != $child$$inline_7444_end$$inline_7494_label$$inline_7447_leftHandle$$inline_7476_rangeEnd$$inline_11187_rangeWidth$$inline_11191_rightHandle$$inline_7431_rightHandleCmds$$inline_7423_slidingWindow$$inline_7467_slidingWindowPos$$ && (this.$_renderStart$ = 
    D.$DvtTimeUtils$$.$getPositionDate$($bottom$$inline_7470_day1$$inline_11199_displayable$$inline_11192_leftBackgroundResizeHandle$$inline_7435_pos1$$inline_11201_rangeStartPos$$inline_7498_rangeStartTime$$inline_7496_size$$inline_7442_start$$38_vertical$$inline_7416_width$$inline_11184$$, $end$$22_height$$inline_11185_i$$inline_7443_left$$inline_7472_leftBackground$$inline_7433_rangeEndTime$$inline_7497_slidingWindow$$inline_7417_timeAxisTopBar$$inline_7432_timelineWidth$$inline_7492$$, $child$$inline_7444_end$$inline_7494_label$$inline_7447_leftHandle$$inline_7476_rangeEnd$$inline_11187_rangeWidth$$inline_11191_rightHandle$$inline_7431_rightHandleCmds$$inline_7423_slidingWindow$$inline_7467_slidingWindowPos$$, 
    this.$Width$));
    this.$removeChildren$()
  }
  $actualAmount$$inline_7505_arrow$$inline_7485_arrowCmds$$inline_7484_day2$$inline_11200_rightTopBar$$inline_7479_size$$inline_7490_width$$121$$ != D.$JSCompiler_alias_NULL$$ && $height$$111_right$$inline_7474_timelineWidth$$inline_11196_topBar$$inline_7481_window$$inline_7489$$ != D.$JSCompiler_alias_NULL$$ && (this.$Width$ = $actualAmount$$inline_7505_arrow$$inline_7485_arrowCmds$$inline_7484_day2$$inline_11200_rightTopBar$$inline_7479_size$$inline_7490_width$$121$$, this.$Height$ = $height$$111_right$$inline_7474_timelineWidth$$inline_11196_topBar$$inline_7481_window$$inline_7489$$);
  $interactive$$1_obj$$310_props$$2_renderStart$$inline_7495_renderStartPos$$inline_7500_start$$inline_11197_top$$inline_7468_vertical$$inline_7488$$ && ($interactive$$1_obj$$310_props$$2_renderStart$$inline_7495_renderStartPos$$inline_7500_start$$inline_11197_top$$inline_7468_vertical$$inline_7488$$ = this.$Parse$($interactive$$1_obj$$310_props$$2_renderStart$$inline_7495_renderStartPos$$inline_7500_start$$inline_11197_top$$inline_7468_vertical$$inline_7488$$), this.$_applyParsedProperties$($interactive$$1_obj$$310_props$$2_renderStart$$inline_7495_renderStartPos$$inline_7500_start$$inline_11197_top$$inline_7468_vertical$$inline_7488$$));
  $interactive$$1_obj$$310_props$$2_renderStart$$inline_7495_renderStartPos$$inline_7500_start$$inline_11197_top$$inline_7468_vertical$$inline_7488$$ = this.$_callback$ != D.$JSCompiler_alias_NULL$$ || this.$_callbackObj$ != D.$JSCompiler_alias_NULL$$;
  this.$createBackground$($actualAmount$$inline_7505_arrow$$inline_7485_arrowCmds$$inline_7484_day2$$inline_11200_rightTopBar$$inline_7479_size$$inline_7490_width$$121$$, $height$$111_right$$inline_7474_timelineWidth$$inline_11196_topBar$$inline_7481_window$$inline_7489$$);
  if($interactive$$1_obj$$310_props$$2_renderStart$$inline_7495_renderStartPos$$inline_7500_start$$inline_11197_top$$inline_7468_vertical$$inline_7488$$) {
    $end$$22_height$$inline_11185_i$$inline_7443_left$$inline_7472_leftBackground$$inline_7433_rangeEndTime$$inline_7497_slidingWindow$$inline_7417_timeAxisTopBar$$inline_7432_timelineWidth$$inline_7492$$ = ($bottom$$inline_7470_day1$$inline_11199_displayable$$inline_11192_leftBackgroundResizeHandle$$inline_7435_pos1$$inline_11201_rangeStartPos$$inline_7498_rangeStartTime$$inline_7496_size$$inline_7442_start$$38_vertical$$inline_7416_width$$inline_11184$$ = this.$isVertical$()) ? new D.$DvtRect$$(this.$getCtx$(), 
    0, 0, $actualAmount$$inline_7505_arrow$$inline_7485_arrowCmds$$inline_7484_day2$$inline_11200_rightTopBar$$inline_7479_size$$inline_7490_width$$121$$, 0, "window") : new D.$DvtRect$$(this.$getCtx$(), 0, 0, 0, $height$$111_right$$inline_7474_timelineWidth$$inline_11196_topBar$$inline_7481_window$$inline_7489$$, "window");
    $end$$22_height$$inline_11185_i$$inline_7443_left$$inline_7472_leftBackground$$inline_7433_rangeEndTime$$inline_7497_slidingWindow$$inline_7417_timeAxisTopBar$$inline_7432_timelineWidth$$inline_7492$$.$setSolidFill$(this.$_windowBackgroundColor$, this.$_windowBackgroundAlpha$);
    (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)($end$$22_height$$inline_11185_i$$inline_7443_left$$inline_7472_leftBackground$$inline_7433_rangeEndTime$$inline_7497_slidingWindow$$inline_7417_timeAxisTopBar$$inline_7432_timelineWidth$$inline_7492$$);
    if(!(0,D.$JSCompiler_StaticMethods_isFeatureOff$$)(this)) {
      var $handleSize$$inline_7418_maxWidth$$inline_7448_next_time$$inline_7449_rightHandle$$inline_7477_rightHandleBackground$$inline_7425_size$$inline_11189$$ = (0,D.$JSCompiler_StaticMethods_getHandleSize$$)(), $actualSize$$inline_7491_end$$inline_11198_handleStart$$inline_7419_i$$inline_7456_line$$inline_7462_newWidth$$inline_7501_rangeEndPos$$inline_7499_rightBackgroundResizeHandle$$inline_7436_time_pos$$inline_7461_topCenter$$inline_7469_vertical$$inline_7441$$ = (0,D.$JSCompiler_StaticMethods_getHandleStart$$)();
      if($bottom$$inline_7470_day1$$inline_11199_displayable$$inline_11192_leftBackgroundResizeHandle$$inline_7435_pos1$$inline_11201_rangeStartPos$$inline_7498_rangeStartTime$$inline_7496_size$$inline_7442_start$$38_vertical$$inline_7416_width$$inline_11184$$) {
        var $handleX$$inline_7421_handleY$$inline_7429_rightGrippy$$inline_7428$$ = ($actualAmount$$inline_7505_arrow$$inline_7485_arrowCmds$$inline_7484_day2$$inline_11200_rightTopBar$$inline_7479_size$$inline_7490_width$$121$$ - 36) / 2, $leftHandle$$inline_7430_leftHandleCmds$$inline_7422_rightCenter$$inline_7475$$ = D.$DvtPathUtils$$.moveTo($handleX$$inline_7421_handleY$$inline_7429_rightGrippy$$inline_7428$$, 0) + D.$DvtPathUtils$$.$quadTo$($handleX$$inline_7421_handleY$$inline_7429_rightGrippy$$inline_7428$$ + 
        3, 6, $handleX$$inline_7421_handleY$$inline_7429_rightGrippy$$inline_7428$$ + 8, 8) + D.$DvtPathUtils$$.lineTo($handleX$$inline_7421_handleY$$inline_7429_rightGrippy$$inline_7428$$ + 28, 8) + D.$DvtPathUtils$$.$quadTo$($handleX$$inline_7421_handleY$$inline_7429_rightGrippy$$inline_7428$$ + 33, 6, $handleX$$inline_7421_handleY$$inline_7429_rightGrippy$$inline_7428$$ + 36, 0);
        D.$DvtPathUtils$$.closePath();
        $child$$inline_7444_end$$inline_7494_label$$inline_7447_leftHandle$$inline_7476_rangeEnd$$inline_11187_rangeWidth$$inline_11191_rightHandle$$inline_7431_rightHandleCmds$$inline_7423_slidingWindow$$inline_7467_slidingWindowPos$$ = D.$DvtPathUtils$$.moveTo($handleX$$inline_7421_handleY$$inline_7429_rightGrippy$$inline_7428$$, 0) + D.$DvtPathUtils$$.$quadTo$($handleX$$inline_7421_handleY$$inline_7429_rightGrippy$$inline_7428$$ + 3, -6, $handleX$$inline_7421_handleY$$inline_7429_rightGrippy$$inline_7428$$ + 
        8, -8) + D.$DvtPathUtils$$.lineTo($handleX$$inline_7421_handleY$$inline_7429_rightGrippy$$inline_7428$$ + 28, -8) + D.$DvtPathUtils$$.$quadTo$($handleX$$inline_7421_handleY$$inline_7429_rightGrippy$$inline_7428$$ + 33, -6, $handleX$$inline_7421_handleY$$inline_7429_rightGrippy$$inline_7428$$ + 36, 0);
        D.$DvtPathUtils$$.closePath();
        var $color$$inline_11188_elem$$inline_11183_leftCenter$$inline_7473_leftHandleBackground$$inline_7424_rightBackground$$inline_7434_slidingWindow$$1_start$$inline_7493_time$$inline_7445_time_pos$$inline_7446$$ = new D.$DvtRect$$(this.$getCtx$(), 0, 0, $actualAmount$$inline_7505_arrow$$inline_7485_arrowCmds$$inline_7484_day2$$inline_11200_rightTopBar$$inline_7479_size$$inline_7490_width$$121$$, $handleSize$$inline_7418_maxWidth$$inline_7448_next_time$$inline_7449_rightHandle$$inline_7477_rightHandleBackground$$inline_7425_size$$inline_11189$$, 
        "lhb"), $handleSize$$inline_7418_maxWidth$$inline_7448_next_time$$inline_7449_rightHandle$$inline_7477_rightHandleBackground$$inline_7425_size$$inline_11189$$ = new D.$DvtRect$$(this.$getCtx$(), 0, 0, $actualAmount$$inline_7505_arrow$$inline_7485_arrowCmds$$inline_7484_day2$$inline_11200_rightTopBar$$inline_7479_size$$inline_7490_width$$121$$, $handleSize$$inline_7418_maxWidth$$inline_7448_next_time$$inline_7449_rightHandle$$inline_7477_rightHandleBackground$$inline_7425_size$$inline_11189$$, 
        "rhb"), $cursor$$inline_7426_leftTopBar$$inline_7478_rangeStart$$inline_11186_rangeStart_pos$$inline_11190$$ = "row-resize";
        if(this.$_handleBackgroundImage$) {
          var $bottomBar$$inline_7480_bottomCenter$$inline_7471_leftGrippy$$inline_7427$$ = (0,D.$JSCompiler_StaticMethods_createGrippyImage$$)(this, $actualAmount$$inline_7505_arrow$$inline_7485_arrowCmds$$inline_7484_day2$$inline_11200_rightTopBar$$inline_7479_size$$inline_7490_width$$121$$, 10), $handleX$$inline_7421_handleY$$inline_7429_rightGrippy$$inline_7428$$ = (0,D.$JSCompiler_StaticMethods_createGrippyImage$$)(this, $actualAmount$$inline_7505_arrow$$inline_7485_arrowCmds$$inline_7484_day2$$inline_11200_rightTopBar$$inline_7479_size$$inline_7490_width$$121$$, 
          10)
        }else {
          $bottomBar$$inline_7480_bottomCenter$$inline_7471_leftGrippy$$inline_7427$$ = (0,D.$JSCompiler_StaticMethods_createGrippy$$)(this, $handleX$$inline_7421_handleY$$inline_7429_rightGrippy$$inline_7428$$), $handleX$$inline_7421_handleY$$inline_7429_rightGrippy$$inline_7428$$ = (0,D.$JSCompiler_StaticMethods_createGrippy$$)(this, $handleX$$inline_7421_handleY$$inline_7429_rightGrippy$$inline_7428$$)
        }
      }else {
        $handleX$$inline_7421_handleY$$inline_7429_rightGrippy$$inline_7428$$ = ($height$$111_right$$inline_7474_timelineWidth$$inline_11196_topBar$$inline_7481_window$$inline_7489$$ - 36) / 2, $leftHandle$$inline_7430_leftHandleCmds$$inline_7422_rightCenter$$inline_7475$$ = D.$DvtPathUtils$$.moveTo(0, $handleX$$inline_7421_handleY$$inline_7429_rightGrippy$$inline_7428$$) + D.$DvtPathUtils$$.$quadTo$(6, $handleX$$inline_7421_handleY$$inline_7429_rightGrippy$$inline_7428$$ + 3, 8, $handleX$$inline_7421_handleY$$inline_7429_rightGrippy$$inline_7428$$ + 
        8) + D.$DvtPathUtils$$.lineTo(8, $handleX$$inline_7421_handleY$$inline_7429_rightGrippy$$inline_7428$$ + 28) + D.$DvtPathUtils$$.$quadTo$(6, $handleX$$inline_7421_handleY$$inline_7429_rightGrippy$$inline_7428$$ + 33, 0, $handleX$$inline_7421_handleY$$inline_7429_rightGrippy$$inline_7428$$ + 36), D.$DvtPathUtils$$.closePath(), $child$$inline_7444_end$$inline_7494_label$$inline_7447_leftHandle$$inline_7476_rangeEnd$$inline_11187_rangeWidth$$inline_11191_rightHandle$$inline_7431_rightHandleCmds$$inline_7423_slidingWindow$$inline_7467_slidingWindowPos$$ = 
        D.$DvtPathUtils$$.moveTo(0, $handleX$$inline_7421_handleY$$inline_7429_rightGrippy$$inline_7428$$) + D.$DvtPathUtils$$.$quadTo$(-6, $handleX$$inline_7421_handleY$$inline_7429_rightGrippy$$inline_7428$$ + 3, -8, $handleX$$inline_7421_handleY$$inline_7429_rightGrippy$$inline_7428$$ + 8) + D.$DvtPathUtils$$.lineTo(-8, $handleX$$inline_7421_handleY$$inline_7429_rightGrippy$$inline_7428$$ + 28) + D.$DvtPathUtils$$.$quadTo$(-6, $handleX$$inline_7421_handleY$$inline_7429_rightGrippy$$inline_7428$$ + 
        33, 0, $handleX$$inline_7421_handleY$$inline_7429_rightGrippy$$inline_7428$$ + 36), D.$DvtPathUtils$$.closePath(), $color$$inline_11188_elem$$inline_11183_leftCenter$$inline_7473_leftHandleBackground$$inline_7424_rightBackground$$inline_7434_slidingWindow$$1_start$$inline_7493_time$$inline_7445_time_pos$$inline_7446$$ = new D.$DvtRect$$(this.$getCtx$(), 0 - $actualSize$$inline_7491_end$$inline_11198_handleStart$$inline_7419_i$$inline_7456_line$$inline_7462_newWidth$$inline_7501_rangeEndPos$$inline_7499_rightBackgroundResizeHandle$$inline_7436_time_pos$$inline_7461_topCenter$$inline_7469_vertical$$inline_7441$$, 
        0, $handleSize$$inline_7418_maxWidth$$inline_7448_next_time$$inline_7449_rightHandle$$inline_7477_rightHandleBackground$$inline_7425_size$$inline_11189$$, $height$$111_right$$inline_7474_timelineWidth$$inline_11196_topBar$$inline_7481_window$$inline_7489$$, "lhb"), $handleSize$$inline_7418_maxWidth$$inline_7448_next_time$$inline_7449_rightHandle$$inline_7477_rightHandleBackground$$inline_7425_size$$inline_11189$$ = new D.$DvtRect$$(this.$getCtx$(), $actualSize$$inline_7491_end$$inline_11198_handleStart$$inline_7419_i$$inline_7456_line$$inline_7462_newWidth$$inline_7501_rangeEndPos$$inline_7499_rightBackgroundResizeHandle$$inline_7436_time_pos$$inline_7461_topCenter$$inline_7469_vertical$$inline_7441$$, 
        0, $handleSize$$inline_7418_maxWidth$$inline_7448_next_time$$inline_7449_rightHandle$$inline_7477_rightHandleBackground$$inline_7425_size$$inline_11189$$, $height$$111_right$$inline_7474_timelineWidth$$inline_11196_topBar$$inline_7481_window$$inline_7489$$, "rhb"), $cursor$$inline_7426_leftTopBar$$inline_7478_rangeStart$$inline_11186_rangeStart_pos$$inline_11190$$ = "col-resize", this.$_handleBackgroundImage$ ? ($bottomBar$$inline_7480_bottomCenter$$inline_7471_leftGrippy$$inline_7427$$ = 
        (0,D.$JSCompiler_StaticMethods_createGrippyImage$$)(this, 10, $height$$111_right$$inline_7474_timelineWidth$$inline_11196_topBar$$inline_7481_window$$inline_7489$$), $handleX$$inline_7421_handleY$$inline_7429_rightGrippy$$inline_7428$$ = (0,D.$JSCompiler_StaticMethods_createGrippyImage$$)(this, 10, $height$$111_right$$inline_7474_timelineWidth$$inline_11196_topBar$$inline_7481_window$$inline_7489$$)) : ($bottomBar$$inline_7480_bottomCenter$$inline_7471_leftGrippy$$inline_7427$$ = (0,D.$JSCompiler_StaticMethods_createGrippy$$)(this, 
        $handleX$$inline_7421_handleY$$inline_7429_rightGrippy$$inline_7428$$), $handleX$$inline_7421_handleY$$inline_7429_rightGrippy$$inline_7428$$ = (0,D.$JSCompiler_StaticMethods_createGrippy$$)(this, $handleX$$inline_7421_handleY$$inline_7429_rightGrippy$$inline_7428$$))
      }
      $color$$inline_11188_elem$$inline_11183_leftCenter$$inline_7473_leftHandleBackground$$inline_7424_rightBackground$$inline_7434_slidingWindow$$1_start$$inline_7493_time$$inline_7445_time_pos$$inline_7446$$.$setSolidFill$(this.$_windowBackgroundColor$, 0);
      $handleSize$$inline_7418_maxWidth$$inline_7448_next_time$$inline_7449_rightHandle$$inline_7477_rightHandleBackground$$inline_7425_size$$inline_11189$$.$setSolidFill$(this.$_windowBackgroundColor$, 0);
      (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)($color$$inline_11188_elem$$inline_11183_leftCenter$$inline_7473_leftHandleBackground$$inline_7424_rightBackground$$inline_7434_slidingWindow$$1_start$$inline_7493_time$$inline_7445_time_pos$$inline_7446$$);
      (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)($handleSize$$inline_7418_maxWidth$$inline_7448_next_time$$inline_7449_rightHandle$$inline_7477_rightHandleBackground$$inline_7425_size$$inline_11189$$);
      $leftHandle$$inline_7430_leftHandleCmds$$inline_7422_rightCenter$$inline_7475$$ = new D.$DvtPath$$(this.$getCtx$(), $leftHandle$$inline_7430_leftHandleCmds$$inline_7422_rightCenter$$inline_7475$$, "lh");
      $child$$inline_7444_end$$inline_7494_label$$inline_7447_leftHandle$$inline_7476_rangeEnd$$inline_11187_rangeWidth$$inline_11191_rightHandle$$inline_7431_rightHandleCmds$$inline_7423_slidingWindow$$inline_7467_slidingWindowPos$$ = new D.$DvtPath$$(this.$getCtx$(), $child$$inline_7444_end$$inline_7494_label$$inline_7447_leftHandle$$inline_7476_rangeEnd$$inline_11187_rangeWidth$$inline_11191_rightHandle$$inline_7431_rightHandleCmds$$inline_7423_slidingWindow$$inline_7467_slidingWindowPos$$, "rh");
      $leftHandle$$inline_7430_leftHandleCmds$$inline_7422_rightCenter$$inline_7475$$.$setSolidFill$(this.$_handleFillColor$);
      $leftHandle$$inline_7430_leftHandleCmds$$inline_7422_rightCenter$$inline_7475$$.$setSolidStroke$(this.$_handleFillColor$);
      $child$$inline_7444_end$$inline_7494_label$$inline_7447_leftHandle$$inline_7476_rangeEnd$$inline_11187_rangeWidth$$inline_11191_rightHandle$$inline_7431_rightHandleCmds$$inline_7423_slidingWindow$$inline_7467_slidingWindowPos$$.$setSolidFill$(this.$_handleFillColor$);
      $child$$inline_7444_end$$inline_7494_label$$inline_7447_leftHandle$$inline_7476_rangeEnd$$inline_11187_rangeWidth$$inline_11191_rightHandle$$inline_7431_rightHandleCmds$$inline_7423_slidingWindow$$inline_7467_slidingWindowPos$$.$setSolidStroke$(this.$_handleFillColor$);
      this.$_windowBackgroundColor$ == this.$_handleFillColor$ && ((0,D.$JSCompiler_StaticMethods_setPixelHinting$$)($leftHandle$$inline_7430_leftHandleCmds$$inline_7422_rightCenter$$inline_7475$$), (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)($child$$inline_7444_end$$inline_7494_label$$inline_7447_leftHandle$$inline_7476_rangeEnd$$inline_11187_rangeWidth$$inline_11191_rightHandle$$inline_7431_rightHandleCmds$$inline_7423_slidingWindow$$inline_7467_slidingWindowPos$$));
      $color$$inline_11188_elem$$inline_11183_leftCenter$$inline_7473_leftHandleBackground$$inline_7424_rightBackground$$inline_7434_slidingWindow$$1_start$$inline_7493_time$$inline_7445_time_pos$$inline_7446$$.setCursor($cursor$$inline_7426_leftTopBar$$inline_7478_rangeStart$$inline_11186_rangeStart_pos$$inline_11190$$);
      $handleSize$$inline_7418_maxWidth$$inline_7448_next_time$$inline_7449_rightHandle$$inline_7477_rightHandleBackground$$inline_7425_size$$inline_11189$$.setCursor($cursor$$inline_7426_leftTopBar$$inline_7478_rangeStart$$inline_11186_rangeStart_pos$$inline_11190$$);
      $leftHandle$$inline_7430_leftHandleCmds$$inline_7422_rightCenter$$inline_7475$$.setCursor($cursor$$inline_7426_leftTopBar$$inline_7478_rangeStart$$inline_11186_rangeStart_pos$$inline_11190$$);
      $child$$inline_7444_end$$inline_7494_label$$inline_7447_leftHandle$$inline_7476_rangeEnd$$inline_11187_rangeWidth$$inline_11191_rightHandle$$inline_7431_rightHandleCmds$$inline_7423_slidingWindow$$inline_7467_slidingWindowPos$$.setCursor($cursor$$inline_7426_leftTopBar$$inline_7478_rangeStart$$inline_11186_rangeStart_pos$$inline_11190$$);
      $bottomBar$$inline_7480_bottomCenter$$inline_7471_leftGrippy$$inline_7427$$.setCursor($cursor$$inline_7426_leftTopBar$$inline_7478_rangeStart$$inline_11186_rangeStart_pos$$inline_11190$$);
      $handleX$$inline_7421_handleY$$inline_7429_rightGrippy$$inline_7428$$.setCursor($cursor$$inline_7426_leftTopBar$$inline_7478_rangeStart$$inline_11186_rangeStart_pos$$inline_11190$$);
      $end$$22_height$$inline_11185_i$$inline_7443_left$$inline_7472_leftBackground$$inline_7433_rangeEndTime$$inline_7497_slidingWindow$$inline_7417_timeAxisTopBar$$inline_7432_timelineWidth$$inline_7492$$.$addChild$($color$$inline_11188_elem$$inline_11183_leftCenter$$inline_7473_leftHandleBackground$$inline_7424_rightBackground$$inline_7434_slidingWindow$$1_start$$inline_7493_time$$inline_7445_time_pos$$inline_7446$$);
      $end$$22_height$$inline_11185_i$$inline_7443_left$$inline_7472_leftBackground$$inline_7433_rangeEndTime$$inline_7497_slidingWindow$$inline_7417_timeAxisTopBar$$inline_7432_timelineWidth$$inline_7492$$.$addChild$($leftHandle$$inline_7430_leftHandleCmds$$inline_7422_rightCenter$$inline_7475$$);
      $end$$22_height$$inline_11185_i$$inline_7443_left$$inline_7472_leftBackground$$inline_7433_rangeEndTime$$inline_7497_slidingWindow$$inline_7417_timeAxisTopBar$$inline_7432_timelineWidth$$inline_7492$$.$addChild$($bottomBar$$inline_7480_bottomCenter$$inline_7471_leftGrippy$$inline_7427$$);
      $end$$22_height$$inline_11185_i$$inline_7443_left$$inline_7472_leftBackground$$inline_7433_rangeEndTime$$inline_7497_slidingWindow$$inline_7417_timeAxisTopBar$$inline_7432_timelineWidth$$inline_7492$$.$addChild$($handleSize$$inline_7418_maxWidth$$inline_7448_next_time$$inline_7449_rightHandle$$inline_7477_rightHandleBackground$$inline_7425_size$$inline_11189$$);
      $end$$22_height$$inline_11185_i$$inline_7443_left$$inline_7472_leftBackground$$inline_7433_rangeEndTime$$inline_7497_slidingWindow$$inline_7417_timeAxisTopBar$$inline_7432_timelineWidth$$inline_7492$$.$addChild$($child$$inline_7444_end$$inline_7494_label$$inline_7447_leftHandle$$inline_7476_rangeEnd$$inline_11187_rangeWidth$$inline_11191_rightHandle$$inline_7431_rightHandleCmds$$inline_7423_slidingWindow$$inline_7467_slidingWindowPos$$);
      $end$$22_height$$inline_11185_i$$inline_7443_left$$inline_7472_leftBackground$$inline_7433_rangeEndTime$$inline_7497_slidingWindow$$inline_7417_timeAxisTopBar$$inline_7432_timelineWidth$$inline_7492$$.$addChild$($handleX$$inline_7421_handleY$$inline_7429_rightGrippy$$inline_7428$$)
    }
    $end$$22_height$$inline_11185_i$$inline_7443_left$$inline_7472_leftBackground$$inline_7433_rangeEndTime$$inline_7497_slidingWindow$$inline_7417_timeAxisTopBar$$inline_7432_timelineWidth$$inline_7492$$.setCursor("move");
    this.$addChild$($end$$22_height$$inline_11185_i$$inline_7443_left$$inline_7472_leftBackground$$inline_7433_rangeEndTime$$inline_7497_slidingWindow$$inline_7417_timeAxisTopBar$$inline_7432_timelineWidth$$inline_7492$$);
    $end$$22_height$$inline_11185_i$$inline_7443_left$$inline_7472_leftBackground$$inline_7433_rangeEndTime$$inline_7497_slidingWindow$$inline_7417_timeAxisTopBar$$inline_7432_timelineWidth$$inline_7492$$ = $bottom$$inline_7470_day1$$inline_11199_displayable$$inline_11192_leftBackgroundResizeHandle$$inline_7435_pos1$$inline_11201_rangeStartPos$$inline_7498_rangeStartTime$$inline_7496_size$$inline_7442_start$$38_vertical$$inline_7416_width$$inline_11184$$ ? this.$isRTL$() ? new D.$DvtLine$$(this.$getCtx$(), 
    this.$getTimeAxisWidth$(), 0, this.$getTimeAxisWidth$(), $height$$111_right$$inline_7474_timelineWidth$$inline_11196_topBar$$inline_7481_window$$inline_7489$$, "tab") : new D.$DvtLine$$(this.$getCtx$(), $actualAmount$$inline_7505_arrow$$inline_7485_arrowCmds$$inline_7484_day2$$inline_11200_rightTopBar$$inline_7479_size$$inline_7490_width$$121$$ - this.$getTimeAxisWidth$(), 0, $actualAmount$$inline_7505_arrow$$inline_7485_arrowCmds$$inline_7484_day2$$inline_11200_rightTopBar$$inline_7479_size$$inline_7490_width$$121$$ - 
    this.$getTimeAxisWidth$(), $height$$111_right$$inline_7474_timelineWidth$$inline_11196_topBar$$inline_7481_window$$inline_7489$$, "tab") : "above" == this.$_overviewPosition$ ? new D.$DvtLine$$(this.$getCtx$(), 0, (0,D.$JSCompiler_StaticMethods_getTimeAxisHeight$$)(this), $actualAmount$$inline_7505_arrow$$inline_7485_arrowCmds$$inline_7484_day2$$inline_11200_rightTopBar$$inline_7479_size$$inline_7490_width$$121$$, (0,D.$JSCompiler_StaticMethods_getTimeAxisHeight$$)(this), "tab") : new D.$DvtLine$$(this.$getCtx$(), 
    0, $height$$111_right$$inline_7474_timelineWidth$$inline_11196_topBar$$inline_7481_window$$inline_7489$$ - (0,D.$JSCompiler_StaticMethods_getTimeAxisHeight$$)(this), $actualAmount$$inline_7505_arrow$$inline_7485_arrowCmds$$inline_7484_day2$$inline_11200_rightTopBar$$inline_7479_size$$inline_7490_width$$121$$, $height$$111_right$$inline_7474_timelineWidth$$inline_11196_topBar$$inline_7481_window$$inline_7489$$ - (0,D.$JSCompiler_StaticMethods_getTimeAxisHeight$$)(this), "tab");
    $end$$22_height$$inline_11185_i$$inline_7443_left$$inline_7472_leftBackground$$inline_7433_rangeEndTime$$inline_7497_slidingWindow$$inline_7417_timeAxisTopBar$$inline_7432_timelineWidth$$inline_7492$$.$setSolidStroke$(this.$_timeAxisBarColor$, this.$_timeAxisBarOpacity$);
    (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)($end$$22_height$$inline_11185_i$$inline_7443_left$$inline_7472_leftBackground$$inline_7433_rangeEndTime$$inline_7497_slidingWindow$$inline_7417_timeAxisTopBar$$inline_7432_timelineWidth$$inline_7492$$);
    this.$_timeAxisTopBar$ = $end$$22_height$$inline_11185_i$$inline_7443_left$$inline_7472_leftBackground$$inline_7433_rangeEndTime$$inline_7497_slidingWindow$$inline_7417_timeAxisTopBar$$inline_7432_timelineWidth$$inline_7492$$;
    this.$addChild$($end$$22_height$$inline_11185_i$$inline_7443_left$$inline_7472_leftBackground$$inline_7433_rangeEndTime$$inline_7497_slidingWindow$$inline_7417_timeAxisTopBar$$inline_7432_timelineWidth$$inline_7492$$);
    this.$isLeftAndRightFilterRendered$() && ($bottom$$inline_7470_day1$$inline_11199_displayable$$inline_11192_leftBackgroundResizeHandle$$inline_7435_pos1$$inline_11201_rangeStartPos$$inline_7498_rangeStartTime$$inline_7496_size$$inline_7442_start$$38_vertical$$inline_7416_width$$inline_11184$$ ? ($end$$22_height$$inline_11185_i$$inline_7443_left$$inline_7472_leftBackground$$inline_7433_rangeEndTime$$inline_7497_slidingWindow$$inline_7417_timeAxisTopBar$$inline_7432_timelineWidth$$inline_7492$$ = 
    new D.$DvtRect$$(this.$getCtx$(), 0, 0, $actualAmount$$inline_7505_arrow$$inline_7485_arrowCmds$$inline_7484_day2$$inline_11200_rightTopBar$$inline_7479_size$$inline_7490_width$$121$$, 0, "lbg"), $color$$inline_11188_elem$$inline_11183_leftCenter$$inline_7473_leftHandleBackground$$inline_7424_rightBackground$$inline_7434_slidingWindow$$1_start$$inline_7493_time$$inline_7445_time_pos$$inline_7446$$ = new D.$DvtRect$$(this.$getCtx$(), 0, 0, $actualAmount$$inline_7505_arrow$$inline_7485_arrowCmds$$inline_7484_day2$$inline_11200_rightTopBar$$inline_7479_size$$inline_7490_width$$121$$, 
    0, "rbg")) : ($end$$22_height$$inline_11185_i$$inline_7443_left$$inline_7472_leftBackground$$inline_7433_rangeEndTime$$inline_7497_slidingWindow$$inline_7417_timeAxisTopBar$$inline_7432_timelineWidth$$inline_7492$$ = new D.$DvtRect$$(this.$getCtx$(), 0, 0, 0, $height$$111_right$$inline_7474_timelineWidth$$inline_11196_topBar$$inline_7481_window$$inline_7489$$, "lbg"), $color$$inline_11188_elem$$inline_11183_leftCenter$$inline_7473_leftHandleBackground$$inline_7424_rightBackground$$inline_7434_slidingWindow$$1_start$$inline_7493_time$$inline_7445_time_pos$$inline_7446$$ = 
    new D.$DvtRect$$(this.$getCtx$(), 0, 0, 0, $height$$111_right$$inline_7474_timelineWidth$$inline_11196_topBar$$inline_7481_window$$inline_7489$$, "rbg")), $end$$22_height$$inline_11185_i$$inline_7443_left$$inline_7472_leftBackground$$inline_7433_rangeEndTime$$inline_7497_slidingWindow$$inline_7417_timeAxisTopBar$$inline_7432_timelineWidth$$inline_7492$$.$setSolidFill$(this.$_leftFilterPanelColor$, this.$_leftFilterPanelAlpha$), this.$addChild$($end$$22_height$$inline_11185_i$$inline_7443_left$$inline_7472_leftBackground$$inline_7433_rangeEndTime$$inline_7497_slidingWindow$$inline_7417_timeAxisTopBar$$inline_7432_timelineWidth$$inline_7492$$), 
    $color$$inline_11188_elem$$inline_11183_leftCenter$$inline_7473_leftHandleBackground$$inline_7424_rightBackground$$inline_7434_slidingWindow$$1_start$$inline_7493_time$$inline_7445_time_pos$$inline_7446$$.$setSolidFill$(this.$_rightFilterPanelColor$, this.$_rightFilterPanelAlpha$), this.$addChild$($color$$inline_11188_elem$$inline_11183_leftCenter$$inline_7473_leftHandleBackground$$inline_7424_rightBackground$$inline_7434_slidingWindow$$1_start$$inline_7493_time$$inline_7445_time_pos$$inline_7446$$), 
    D.$DvtTimeUtils$$.$supportsTouch$() && $actualSize$$inline_7491_end$$inline_11198_handleStart$$inline_7419_i$$inline_7456_line$$inline_7462_newWidth$$inline_7501_rangeEndPos$$inline_7499_rightBackgroundResizeHandle$$inline_7436_time_pos$$inline_7461_topCenter$$inline_7469_vertical$$inline_7441$$ != D.$JSCompiler_alias_VOID$$ && ((0,D.$JSCompiler_StaticMethods_getHandleStart$$)(), $bottom$$inline_7470_day1$$inline_11199_displayable$$inline_11192_leftBackgroundResizeHandle$$inline_7435_pos1$$inline_11201_rangeStartPos$$inline_7498_rangeStartTime$$inline_7496_size$$inline_7442_start$$38_vertical$$inline_7416_width$$inline_11184$$ ? 
    ($bottom$$inline_7470_day1$$inline_11199_displayable$$inline_11192_leftBackgroundResizeHandle$$inline_7435_pos1$$inline_11201_rangeStartPos$$inline_7498_rangeStartTime$$inline_7496_size$$inline_7442_start$$38_vertical$$inline_7416_width$$inline_11184$$ = new D.$DvtRect$$(this.$getCtx$(), 0, 0, $actualAmount$$inline_7505_arrow$$inline_7485_arrowCmds$$inline_7484_day2$$inline_11200_rightTopBar$$inline_7479_size$$inline_7490_width$$121$$, $actualSize$$inline_7491_end$$inline_11198_handleStart$$inline_7419_i$$inline_7456_line$$inline_7462_newWidth$$inline_7501_rangeEndPos$$inline_7499_rightBackgroundResizeHandle$$inline_7436_time_pos$$inline_7461_topCenter$$inline_7469_vertical$$inline_7441$$, 
    "lbgrh"), $actualSize$$inline_7491_end$$inline_11198_handleStart$$inline_7419_i$$inline_7456_line$$inline_7462_newWidth$$inline_7501_rangeEndPos$$inline_7499_rightBackgroundResizeHandle$$inline_7436_time_pos$$inline_7461_topCenter$$inline_7469_vertical$$inline_7441$$ = new D.$DvtRect$$(this.$getCtx$(), 0, 0, $actualAmount$$inline_7505_arrow$$inline_7485_arrowCmds$$inline_7484_day2$$inline_11200_rightTopBar$$inline_7479_size$$inline_7490_width$$121$$, $actualSize$$inline_7491_end$$inline_11198_handleStart$$inline_7419_i$$inline_7456_line$$inline_7462_newWidth$$inline_7501_rangeEndPos$$inline_7499_rightBackgroundResizeHandle$$inline_7436_time_pos$$inline_7461_topCenter$$inline_7469_vertical$$inline_7441$$, 
    "rbgrh")) : ($bottom$$inline_7470_day1$$inline_11199_displayable$$inline_11192_leftBackgroundResizeHandle$$inline_7435_pos1$$inline_11201_rangeStartPos$$inline_7498_rangeStartTime$$inline_7496_size$$inline_7442_start$$38_vertical$$inline_7416_width$$inline_11184$$ = new D.$DvtRect$$(this.$getCtx$(), 0, 0, $actualSize$$inline_7491_end$$inline_11198_handleStart$$inline_7419_i$$inline_7456_line$$inline_7462_newWidth$$inline_7501_rangeEndPos$$inline_7499_rightBackgroundResizeHandle$$inline_7436_time_pos$$inline_7461_topCenter$$inline_7469_vertical$$inline_7441$$, 
    $height$$111_right$$inline_7474_timelineWidth$$inline_11196_topBar$$inline_7481_window$$inline_7489$$, "lbgrh"), $actualSize$$inline_7491_end$$inline_11198_handleStart$$inline_7419_i$$inline_7456_line$$inline_7462_newWidth$$inline_7501_rangeEndPos$$inline_7499_rightBackgroundResizeHandle$$inline_7436_time_pos$$inline_7461_topCenter$$inline_7469_vertical$$inline_7441$$ = new D.$DvtRect$$(this.$getCtx$(), 0, 0, $actualSize$$inline_7491_end$$inline_11198_handleStart$$inline_7419_i$$inline_7456_line$$inline_7462_newWidth$$inline_7501_rangeEndPos$$inline_7499_rightBackgroundResizeHandle$$inline_7436_time_pos$$inline_7461_topCenter$$inline_7469_vertical$$inline_7441$$, 
    $height$$111_right$$inline_7474_timelineWidth$$inline_11196_topBar$$inline_7481_window$$inline_7489$$, "rbgrh")), $bottom$$inline_7470_day1$$inline_11199_displayable$$inline_11192_leftBackgroundResizeHandle$$inline_7435_pos1$$inline_11201_rangeStartPos$$inline_7498_rangeStartTime$$inline_7496_size$$inline_7442_start$$38_vertical$$inline_7416_width$$inline_11184$$.$setSolidFill$(this.$_leftFilterPanelColor$, 0), this.$addChild$($bottom$$inline_7470_day1$$inline_11199_displayable$$inline_11192_leftBackgroundResizeHandle$$inline_7435_pos1$$inline_11201_rangeStartPos$$inline_7498_rangeStartTime$$inline_7496_size$$inline_7442_start$$38_vertical$$inline_7416_width$$inline_11184$$), 
    $actualSize$$inline_7491_end$$inline_11198_handleStart$$inline_7419_i$$inline_7456_line$$inline_7462_newWidth$$inline_7501_rangeEndPos$$inline_7499_rightBackgroundResizeHandle$$inline_7436_time_pos$$inline_7461_topCenter$$inline_7469_vertical$$inline_7441$$.$setSolidFill$(this.$_rightFilterPanelColor$, 0), this.$addChild$($actualSize$$inline_7491_end$$inline_11198_handleStart$$inline_7419_i$$inline_7456_line$$inline_7462_newWidth$$inline_7501_rangeEndPos$$inline_7499_rightBackgroundResizeHandle$$inline_7436_time_pos$$inline_7461_topCenter$$inline_7469_vertical$$inline_7441$$)))
  }
  if(this.$_ticks$ != D.$JSCompiler_alias_NULL$$) {
    $actualSize$$inline_7491_end$$inline_11198_handleStart$$inline_7419_i$$inline_7456_line$$inline_7462_newWidth$$inline_7501_rangeEndPos$$inline_7499_rightBackgroundResizeHandle$$inline_7436_time_pos$$inline_7461_topCenter$$inline_7469_vertical$$inline_7441$$ = this.$isVertical$();
    $bottom$$inline_7470_day1$$inline_11199_displayable$$inline_11192_leftBackgroundResizeHandle$$inline_7435_pos1$$inline_11201_rangeStartPos$$inline_7498_rangeStartTime$$inline_7496_size$$inline_7442_start$$38_vertical$$inline_7416_width$$inline_11184$$ = (0,D.$JSCompiler_StaticMethods_getOverviewSize$$)(this);
    for($end$$22_height$$inline_11185_i$$inline_7443_left$$inline_7472_leftBackground$$inline_7433_rangeEndTime$$inline_7497_slidingWindow$$inline_7417_timeAxisTopBar$$inline_7432_timelineWidth$$inline_7492$$ = 0;$end$$22_height$$inline_11185_i$$inline_7443_left$$inline_7472_leftBackground$$inline_7433_rangeEndTime$$inline_7497_slidingWindow$$inline_7417_timeAxisTopBar$$inline_7432_timelineWidth$$inline_7492$$ < this.$_ticks$.length;$end$$22_height$$inline_11185_i$$inline_7443_left$$inline_7472_leftBackground$$inline_7433_rangeEndTime$$inline_7497_slidingWindow$$inline_7417_timeAxisTopBar$$inline_7432_timelineWidth$$inline_7492$$++) {
      $child$$inline_7444_end$$inline_7494_label$$inline_7447_leftHandle$$inline_7476_rangeEnd$$inline_11187_rangeWidth$$inline_11191_rightHandle$$inline_7431_rightHandleCmds$$inline_7423_slidingWindow$$inline_7467_slidingWindowPos$$ = this.$_ticks$[$end$$22_height$$inline_11185_i$$inline_7443_left$$inline_7472_leftBackground$$inline_7433_rangeEndTime$$inline_7497_slidingWindow$$inline_7417_timeAxisTopBar$$inline_7432_timelineWidth$$inline_7492$$], $color$$inline_11188_elem$$inline_11183_leftCenter$$inline_7473_leftHandleBackground$$inline_7424_rightBackground$$inline_7434_slidingWindow$$1_start$$inline_7493_time$$inline_7445_time_pos$$inline_7446$$ = 
      (0,window.parseInt)($child$$inline_7444_end$$inline_7494_label$$inline_7447_leftHandle$$inline_7476_rangeEnd$$inline_11187_rangeWidth$$inline_11191_rightHandle$$inline_7431_rightHandleCmds$$inline_7423_slidingWindow$$inline_7467_slidingWindowPos$$.$getAttr$("time"), 10), $color$$inline_11188_elem$$inline_11183_leftCenter$$inline_7473_leftHandleBackground$$inline_7424_rightBackground$$inline_7434_slidingWindow$$1_start$$inline_7493_time$$inline_7445_time_pos$$inline_7446$$ = this.$getDatePosition$($color$$inline_11188_elem$$inline_11183_leftCenter$$inline_7473_leftHandleBackground$$inline_7424_rightBackground$$inline_7434_slidingWindow$$1_start$$inline_7493_time$$inline_7445_time_pos$$inline_7446$$), 
      $child$$inline_7444_end$$inline_7494_label$$inline_7447_leftHandle$$inline_7476_rangeEnd$$inline_11187_rangeWidth$$inline_11191_rightHandle$$inline_7431_rightHandleCmds$$inline_7423_slidingWindow$$inline_7467_slidingWindowPos$$ = $child$$inline_7444_end$$inline_7494_label$$inline_7447_leftHandle$$inline_7476_rangeEnd$$inline_11187_rangeWidth$$inline_11191_rightHandle$$inline_7431_rightHandleCmds$$inline_7423_slidingWindow$$inline_7467_slidingWindowPos$$.$getAttr$("label"), $handleSize$$inline_7418_maxWidth$$inline_7448_next_time$$inline_7449_rightHandle$$inline_7477_rightHandleBackground$$inline_7425_size$$inline_11189$$ = 
      0, $end$$22_height$$inline_11185_i$$inline_7443_left$$inline_7472_leftBackground$$inline_7433_rangeEndTime$$inline_7497_slidingWindow$$inline_7417_timeAxisTopBar$$inline_7432_timelineWidth$$inline_7492$$ + 1 < this.$_ticks$.length ? ($handleSize$$inline_7418_maxWidth$$inline_7448_next_time$$inline_7449_rightHandle$$inline_7477_rightHandleBackground$$inline_7425_size$$inline_11189$$ = (0,window.parseInt)(this.$_ticks$[$end$$22_height$$inline_11185_i$$inline_7443_left$$inline_7472_leftBackground$$inline_7433_rangeEndTime$$inline_7497_slidingWindow$$inline_7417_timeAxisTopBar$$inline_7432_timelineWidth$$inline_7492$$ + 
      1].$getAttr$("time"), 10), $handleSize$$inline_7418_maxWidth$$inline_7448_next_time$$inline_7449_rightHandle$$inline_7477_rightHandleBackground$$inline_7425_size$$inline_11189$$ = this.$getDatePosition$($handleSize$$inline_7418_maxWidth$$inline_7448_next_time$$inline_7449_rightHandle$$inline_7477_rightHandleBackground$$inline_7425_size$$inline_11189$$) - $color$$inline_11188_elem$$inline_11183_leftCenter$$inline_7473_leftHandleBackground$$inline_7424_rightBackground$$inline_7434_slidingWindow$$1_start$$inline_7493_time$$inline_7445_time_pos$$inline_7446$$) : 
      $handleSize$$inline_7418_maxWidth$$inline_7448_next_time$$inline_7449_rightHandle$$inline_7477_rightHandleBackground$$inline_7425_size$$inline_11189$$ = $bottom$$inline_7470_day1$$inline_11199_displayable$$inline_11192_leftBackgroundResizeHandle$$inline_7435_pos1$$inline_11201_rangeStartPos$$inline_7498_rangeStartTime$$inline_7496_size$$inline_7442_start$$38_vertical$$inline_7416_width$$inline_11184$$ - $color$$inline_11188_elem$$inline_11183_leftCenter$$inline_7473_leftHandleBackground$$inline_7424_rightBackground$$inline_7434_slidingWindow$$1_start$$inline_7493_time$$inline_7445_time_pos$$inline_7446$$, 
      (0,D.$JSCompiler_StaticMethods_isHorizontalRTL$$)(this) && ($color$$inline_11188_elem$$inline_11183_leftCenter$$inline_7473_leftHandleBackground$$inline_7424_rightBackground$$inline_7434_slidingWindow$$1_start$$inline_7493_time$$inline_7445_time_pos$$inline_7446$$ = $bottom$$inline_7470_day1$$inline_11199_displayable$$inline_11192_leftBackgroundResizeHandle$$inline_7435_pos1$$inline_11201_rangeStartPos$$inline_7498_rangeStartTime$$inline_7496_size$$inline_7442_start$$38_vertical$$inline_7416_width$$inline_11184$$ - 
      $color$$inline_11188_elem$$inline_11183_leftCenter$$inline_7473_leftHandleBackground$$inline_7424_rightBackground$$inline_7434_slidingWindow$$1_start$$inline_7493_time$$inline_7445_time_pos$$inline_7446$$), $actualSize$$inline_7491_end$$inline_11198_handleStart$$inline_7419_i$$inline_7456_line$$inline_7462_newWidth$$inline_7501_rangeEndPos$$inline_7499_rightBackgroundResizeHandle$$inline_7436_time_pos$$inline_7461_topCenter$$inline_7469_vertical$$inline_7441$$ && ($handleSize$$inline_7418_maxWidth$$inline_7448_next_time$$inline_7449_rightHandle$$inline_7477_rightHandleBackground$$inline_7425_size$$inline_11189$$ = 
      this.$Width$), $handleSize$$inline_7418_maxWidth$$inline_7448_next_time$$inline_7449_rightHandle$$inline_7477_rightHandleBackground$$inline_7425_size$$inline_11189$$ -= 10, this.$addTick$($color$$inline_11188_elem$$inline_11183_leftCenter$$inline_7473_leftHandleBackground$$inline_7424_rightBackground$$inline_7434_slidingWindow$$1_start$$inline_7493_time$$inline_7445_time_pos$$inline_7446$$, $actualAmount$$inline_7505_arrow$$inline_7485_arrowCmds$$inline_7484_day2$$inline_11200_rightTopBar$$inline_7479_size$$inline_7490_width$$121$$, 
      $height$$111_right$$inline_7474_timelineWidth$$inline_11196_topBar$$inline_7481_window$$inline_7489$$, "tick" + $end$$22_height$$inline_11185_i$$inline_7443_left$$inline_7472_leftBackground$$inline_7433_rangeEndTime$$inline_7497_slidingWindow$$inline_7417_timeAxisTopBar$$inline_7432_timelineWidth$$inline_7492$$), this.$addLabel$($color$$inline_11188_elem$$inline_11183_leftCenter$$inline_7473_leftHandleBackground$$inline_7424_rightBackground$$inline_7434_slidingWindow$$1_start$$inline_7493_time$$inline_7445_time_pos$$inline_7446$$, 
      $child$$inline_7444_end$$inline_7494_label$$inline_7447_leftHandle$$inline_7476_rangeEnd$$inline_11187_rangeWidth$$inline_11191_rightHandle$$inline_7431_rightHandleCmds$$inline_7423_slidingWindow$$inline_7467_slidingWindowPos$$, $actualAmount$$inline_7505_arrow$$inline_7485_arrowCmds$$inline_7484_day2$$inline_11200_rightTopBar$$inline_7479_size$$inline_7490_width$$121$$, $height$$111_right$$inline_7474_timelineWidth$$inline_11196_topBar$$inline_7481_window$$inline_7489$$, $handleSize$$inline_7418_maxWidth$$inline_7448_next_time$$inline_7449_rightHandle$$inline_7477_rightHandleBackground$$inline_7425_size$$inline_11189$$, 
      "label" + $end$$22_height$$inline_11185_i$$inline_7443_left$$inline_7472_leftBackground$$inline_7433_rangeEndTime$$inline_7497_slidingWindow$$inline_7417_timeAxisTopBar$$inline_7432_timelineWidth$$inline_7492$$)
    }
  }
  if(this.$_formattedTimeRanges$ != D.$JSCompiler_alias_NULL$$) {
    for($actualSize$$inline_7491_end$$inline_11198_handleStart$$inline_7419_i$$inline_7456_line$$inline_7462_newWidth$$inline_7501_rangeEndPos$$inline_7499_rightBackgroundResizeHandle$$inline_7436_time_pos$$inline_7461_topCenter$$inline_7469_vertical$$inline_7441$$ = 0;$actualSize$$inline_7491_end$$inline_11198_handleStart$$inline_7419_i$$inline_7456_line$$inline_7462_newWidth$$inline_7501_rangeEndPos$$inline_7499_rightBackgroundResizeHandle$$inline_7436_time_pos$$inline_7461_topCenter$$inline_7469_vertical$$inline_7441$$ < 
    this.$_formattedTimeRanges$.length;$actualSize$$inline_7491_end$$inline_11198_handleStart$$inline_7419_i$$inline_7456_line$$inline_7462_newWidth$$inline_7501_rangeEndPos$$inline_7499_rightBackgroundResizeHandle$$inline_7436_time_pos$$inline_7461_topCenter$$inline_7469_vertical$$inline_7441$$++) {
      $color$$inline_11188_elem$$inline_11183_leftCenter$$inline_7473_leftHandleBackground$$inline_7424_rightBackground$$inline_7434_slidingWindow$$1_start$$inline_7493_time$$inline_7445_time_pos$$inline_7446$$ = this.$_formattedTimeRanges$[$actualSize$$inline_7491_end$$inline_11198_handleStart$$inline_7419_i$$inline_7456_line$$inline_7462_newWidth$$inline_7501_rangeEndPos$$inline_7499_rightBackgroundResizeHandle$$inline_7436_time_pos$$inline_7461_topCenter$$inline_7469_vertical$$inline_7441$$], 
      $bottom$$inline_7470_day1$$inline_11199_displayable$$inline_11192_leftBackgroundResizeHandle$$inline_7435_pos1$$inline_11201_rangeStartPos$$inline_7498_rangeStartTime$$inline_7496_size$$inline_7442_start$$38_vertical$$inline_7416_width$$inline_11184$$ = $actualAmount$$inline_7505_arrow$$inline_7485_arrowCmds$$inline_7484_day2$$inline_11200_rightTopBar$$inline_7479_size$$inline_7490_width$$121$$, $end$$22_height$$inline_11185_i$$inline_7443_left$$inline_7472_leftBackground$$inline_7433_rangeEndTime$$inline_7497_slidingWindow$$inline_7417_timeAxisTopBar$$inline_7432_timelineWidth$$inline_7492$$ = 
      $height$$111_right$$inline_7474_timelineWidth$$inline_11196_topBar$$inline_7481_window$$inline_7489$$, $cursor$$inline_7426_leftTopBar$$inline_7478_rangeStart$$inline_11186_rangeStart_pos$$inline_11190$$ = (0,window.parseInt)($color$$inline_11188_elem$$inline_11183_leftCenter$$inline_7473_leftHandleBackground$$inline_7424_rightBackground$$inline_7434_slidingWindow$$1_start$$inline_7493_time$$inline_7445_time_pos$$inline_7446$$.$getAttr$("rs"), 10), $child$$inline_7444_end$$inline_7494_label$$inline_7447_leftHandle$$inline_7476_rangeEnd$$inline_11187_rangeWidth$$inline_11191_rightHandle$$inline_7431_rightHandleCmds$$inline_7423_slidingWindow$$inline_7467_slidingWindowPos$$ = 
      (0,window.parseInt)($color$$inline_11188_elem$$inline_11183_leftCenter$$inline_7473_leftHandleBackground$$inline_7424_rightBackground$$inline_7434_slidingWindow$$1_start$$inline_7493_time$$inline_7445_time_pos$$inline_7446$$.$getAttr$("re"), 10), $color$$inline_11188_elem$$inline_11183_leftCenter$$inline_7473_leftHandleBackground$$inline_7424_rightBackground$$inline_7434_slidingWindow$$1_start$$inline_7493_time$$inline_7445_time_pos$$inline_7446$$ = $color$$inline_11188_elem$$inline_11183_leftCenter$$inline_7473_leftHandleBackground$$inline_7424_rightBackground$$inline_7434_slidingWindow$$1_start$$inline_7493_time$$inline_7445_time_pos$$inline_7446$$.$getAttr$("c"), 
      $cursor$$inline_7426_leftTopBar$$inline_7478_rangeStart$$inline_11186_rangeStart_pos$$inline_11190$$ != D.$JSCompiler_alias_NULL$$ && $child$$inline_7444_end$$inline_7494_label$$inline_7447_leftHandle$$inline_7476_rangeEnd$$inline_11187_rangeWidth$$inline_11191_rightHandle$$inline_7431_rightHandleCmds$$inline_7423_slidingWindow$$inline_7467_slidingWindowPos$$ != D.$JSCompiler_alias_NULL$$ && ($handleSize$$inline_7418_maxWidth$$inline_7448_next_time$$inline_7449_rightHandle$$inline_7477_rightHandleBackground$$inline_7425_size$$inline_11189$$ = 
      (0,D.$JSCompiler_StaticMethods_getOverviewSize$$)(this), $cursor$$inline_7426_leftTopBar$$inline_7478_rangeStart$$inline_11186_rangeStart_pos$$inline_11190$$ = this.$getDatePosition$($cursor$$inline_7426_leftTopBar$$inline_7478_rangeStart$$inline_11186_rangeStart_pos$$inline_11190$$), $child$$inline_7444_end$$inline_7494_label$$inline_7447_leftHandle$$inline_7476_rangeEnd$$inline_11187_rangeWidth$$inline_11191_rightHandle$$inline_7431_rightHandleCmds$$inline_7423_slidingWindow$$inline_7467_slidingWindowPos$$ = 
      this.$getDatePosition$($child$$inline_7444_end$$inline_7494_label$$inline_7447_leftHandle$$inline_7476_rangeEnd$$inline_11187_rangeWidth$$inline_11191_rightHandle$$inline_7431_rightHandleCmds$$inline_7423_slidingWindow$$inline_7467_slidingWindowPos$$) - $cursor$$inline_7426_leftTopBar$$inline_7478_rangeStart$$inline_11186_rangeStart_pos$$inline_11190$$, (0,D.$JSCompiler_StaticMethods_isHorizontalRTL$$)(this) && ($cursor$$inline_7426_leftTopBar$$inline_7478_rangeStart$$inline_11186_rangeStart_pos$$inline_11190$$ = 
      $handleSize$$inline_7418_maxWidth$$inline_7448_next_time$$inline_7449_rightHandle$$inline_7477_rightHandleBackground$$inline_7425_size$$inline_11189$$ - $cursor$$inline_7426_leftTopBar$$inline_7478_rangeStart$$inline_11186_rangeStart_pos$$inline_11190$$ - $child$$inline_7444_end$$inline_7494_label$$inline_7447_leftHandle$$inline_7476_rangeEnd$$inline_11187_rangeWidth$$inline_11191_rightHandle$$inline_7431_rightHandleCmds$$inline_7423_slidingWindow$$inline_7467_slidingWindowPos$$), $bottom$$inline_7470_day1$$inline_11199_displayable$$inline_11192_leftBackgroundResizeHandle$$inline_7435_pos1$$inline_11201_rangeStartPos$$inline_7498_rangeStartTime$$inline_7496_size$$inline_7442_start$$38_vertical$$inline_7416_width$$inline_11184$$ = 
      this.$isVertical$() ? new D.$DvtRect$$(this.$getCtx$(), 0, $cursor$$inline_7426_leftTopBar$$inline_7478_rangeStart$$inline_11186_rangeStart_pos$$inline_11190$$, $bottom$$inline_7470_day1$$inline_11199_displayable$$inline_11192_leftBackgroundResizeHandle$$inline_7435_pos1$$inline_11201_rangeStartPos$$inline_7498_rangeStartTime$$inline_7496_size$$inline_7442_start$$38_vertical$$inline_7416_width$$inline_11184$$ - this.$getTimeAxisWidth$(), $child$$inline_7444_end$$inline_7494_label$$inline_7447_leftHandle$$inline_7476_rangeEnd$$inline_11187_rangeWidth$$inline_11191_rightHandle$$inline_7431_rightHandleCmds$$inline_7423_slidingWindow$$inline_7467_slidingWindowPos$$, 
      "ftr") : new D.$DvtRect$$(this.$getCtx$(), $cursor$$inline_7426_leftTopBar$$inline_7478_rangeStart$$inline_11186_rangeStart_pos$$inline_11190$$, "above" == this.$_overviewPosition$ ? (0,D.$JSCompiler_StaticMethods_getTimeAxisHeight$$)(this) : 0, $child$$inline_7444_end$$inline_7494_label$$inline_7447_leftHandle$$inline_7476_rangeEnd$$inline_11187_rangeWidth$$inline_11191_rightHandle$$inline_7431_rightHandleCmds$$inline_7423_slidingWindow$$inline_7467_slidingWindowPos$$, $end$$22_height$$inline_11185_i$$inline_7443_left$$inline_7472_leftBackground$$inline_7433_rangeEndTime$$inline_7497_slidingWindow$$inline_7417_timeAxisTopBar$$inline_7432_timelineWidth$$inline_7492$$ - 
      (0,D.$JSCompiler_StaticMethods_getTimeAxisHeight$$)(this), "ftr"), $color$$inline_11188_elem$$inline_11183_leftCenter$$inline_7473_leftHandleBackground$$inline_7424_rightBackground$$inline_7434_slidingWindow$$1_start$$inline_7493_time$$inline_7445_time_pos$$inline_7446$$ != D.$JSCompiler_alias_NULL$$ && $bottom$$inline_7470_day1$$inline_11199_displayable$$inline_11192_leftBackgroundResizeHandle$$inline_7435_pos1$$inline_11201_rangeStartPos$$inline_7498_rangeStartTime$$inline_7496_size$$inline_7442_start$$38_vertical$$inline_7416_width$$inline_11184$$.$setSolidFill$($color$$inline_11188_elem$$inline_11183_leftCenter$$inline_7473_leftHandleBackground$$inline_7424_rightBackground$$inline_7434_slidingWindow$$1_start$$inline_7493_time$$inline_7445_time_pos$$inline_7446$$, 
      0.4), $bottom$$inline_7470_day1$$inline_11199_displayable$$inline_11192_leftBackgroundResizeHandle$$inline_7435_pos1$$inline_11201_rangeStartPos$$inline_7498_rangeStartTime$$inline_7496_size$$inline_7442_start$$38_vertical$$inline_7416_width$$inline_11184$$.setCursor("move"), (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)($bottom$$inline_7470_day1$$inline_11199_displayable$$inline_11192_leftBackgroundResizeHandle$$inline_7435_pos1$$inline_11201_rangeStartPos$$inline_7498_rangeStartTime$$inline_7496_size$$inline_7442_start$$38_vertical$$inline_7416_width$$inline_11184$$), 
      this.$addChild$($bottom$$inline_7470_day1$$inline_11199_displayable$$inline_11192_leftBackgroundResizeHandle$$inline_7435_pos1$$inline_11201_rangeStartPos$$inline_7498_rangeStartTime$$inline_7496_size$$inline_7442_start$$38_vertical$$inline_7416_width$$inline_11184$$))
    }
  }
  this.$_currentTime$ == D.$JSCompiler_alias_NULL$$ || (0,window.isNaN)(this.$_currentTime$) || ($actualSize$$inline_7491_end$$inline_11198_handleStart$$inline_7419_i$$inline_7456_line$$inline_7462_newWidth$$inline_7501_rangeEndPos$$inline_7499_rightBackgroundResizeHandle$$inline_7436_time_pos$$inline_7461_topCenter$$inline_7469_vertical$$inline_7441$$ = this.$getDatePosition$(this.$_currentTime$), this.$isVertical$() ? $actualSize$$inline_7491_end$$inline_11198_handleStart$$inline_7419_i$$inline_7456_line$$inline_7462_newWidth$$inline_7501_rangeEndPos$$inline_7499_rightBackgroundResizeHandle$$inline_7436_time_pos$$inline_7461_topCenter$$inline_7469_vertical$$inline_7441$$ = 
  new D.$DvtLine$$(this.$getCtx$(), 0, $actualSize$$inline_7491_end$$inline_11198_handleStart$$inline_7419_i$$inline_7456_line$$inline_7462_newWidth$$inline_7501_rangeEndPos$$inline_7499_rightBackgroundResizeHandle$$inline_7436_time_pos$$inline_7461_topCenter$$inline_7469_vertical$$inline_7441$$, $actualAmount$$inline_7505_arrow$$inline_7485_arrowCmds$$inline_7484_day2$$inline_11200_rightTopBar$$inline_7479_size$$inline_7490_width$$121$$, $actualSize$$inline_7491_end$$inline_11198_handleStart$$inline_7419_i$$inline_7456_line$$inline_7462_newWidth$$inline_7501_rangeEndPos$$inline_7499_rightBackgroundResizeHandle$$inline_7436_time_pos$$inline_7461_topCenter$$inline_7469_vertical$$inline_7441$$, 
  "ocd") : (this.$isRTL$() && ($actualSize$$inline_7491_end$$inline_11198_handleStart$$inline_7419_i$$inline_7456_line$$inline_7462_newWidth$$inline_7501_rangeEndPos$$inline_7499_rightBackgroundResizeHandle$$inline_7436_time_pos$$inline_7461_topCenter$$inline_7469_vertical$$inline_7441$$ = $actualAmount$$inline_7505_arrow$$inline_7485_arrowCmds$$inline_7484_day2$$inline_11200_rightTopBar$$inline_7479_size$$inline_7490_width$$121$$ - $actualSize$$inline_7491_end$$inline_11198_handleStart$$inline_7419_i$$inline_7456_line$$inline_7462_newWidth$$inline_7501_rangeEndPos$$inline_7499_rightBackgroundResizeHandle$$inline_7436_time_pos$$inline_7461_topCenter$$inline_7469_vertical$$inline_7441$$), 
  $actualSize$$inline_7491_end$$inline_11198_handleStart$$inline_7419_i$$inline_7456_line$$inline_7462_newWidth$$inline_7501_rangeEndPos$$inline_7499_rightBackgroundResizeHandle$$inline_7436_time_pos$$inline_7461_topCenter$$inline_7469_vertical$$inline_7441$$ = new D.$DvtLine$$(this.$getCtx$(), $actualSize$$inline_7491_end$$inline_11198_handleStart$$inline_7419_i$$inline_7456_line$$inline_7462_newWidth$$inline_7501_rangeEndPos$$inline_7499_rightBackgroundResizeHandle$$inline_7436_time_pos$$inline_7461_topCenter$$inline_7469_vertical$$inline_7441$$, 
  0, $actualSize$$inline_7491_end$$inline_11198_handleStart$$inline_7419_i$$inline_7456_line$$inline_7462_newWidth$$inline_7501_rangeEndPos$$inline_7499_rightBackgroundResizeHandle$$inline_7436_time_pos$$inline_7461_topCenter$$inline_7469_vertical$$inline_7441$$, $height$$111_right$$inline_7474_timelineWidth$$inline_11196_topBar$$inline_7481_window$$inline_7489$$, "ocd")), $actualSize$$inline_7491_end$$inline_11198_handleStart$$inline_7419_i$$inline_7456_line$$inline_7462_newWidth$$inline_7501_rangeEndPos$$inline_7499_rightBackgroundResizeHandle$$inline_7436_time_pos$$inline_7461_topCenter$$inline_7469_vertical$$inline_7441$$.$setSolidStroke$(this.$_currentTimeIndicatorColor$), 
  (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)($actualSize$$inline_7491_end$$inline_11198_handleStart$$inline_7419_i$$inline_7456_line$$inline_7462_newWidth$$inline_7501_rangeEndPos$$inline_7499_rightBackgroundResizeHandle$$inline_7436_time_pos$$inline_7461_topCenter$$inline_7469_vertical$$inline_7441$$), this.$addChild$($actualSize$$inline_7491_end$$inline_11198_handleStart$$inline_7419_i$$inline_7456_line$$inline_7462_newWidth$$inline_7501_rangeEndPos$$inline_7499_rightBackgroundResizeHandle$$inline_7436_time_pos$$inline_7461_topCenter$$inline_7469_vertical$$inline_7441$$));
  this.$parseDataXML$($actualAmount$$inline_7505_arrow$$inline_7485_arrowCmds$$inline_7484_day2$$inline_11200_rightTopBar$$inline_7479_size$$inline_7490_width$$121$$, $height$$111_right$$inline_7474_timelineWidth$$inline_11196_topBar$$inline_7481_window$$inline_7489$$);
  $interactive$$1_obj$$310_props$$2_renderStart$$inline_7495_renderStartPos$$inline_7500_start$$inline_11197_top$$inline_7468_vertical$$inline_7488$$ && ($child$$inline_7444_end$$inline_7494_label$$inline_7447_leftHandle$$inline_7476_rangeEnd$$inline_11187_rangeWidth$$inline_11191_rightHandle$$inline_7431_rightHandleCmds$$inline_7423_slidingWindow$$inline_7467_slidingWindowPos$$ = this.$getChildAt$(1), this.$isVertical$() ? ($interactive$$1_obj$$310_props$$2_renderStart$$inline_7495_renderStartPos$$inline_7500_start$$inline_11197_top$$inline_7468_vertical$$inline_7488$$ = 
  $child$$inline_7444_end$$inline_7494_label$$inline_7447_leftHandle$$inline_7476_rangeEnd$$inline_11187_rangeWidth$$inline_11191_rightHandle$$inline_7431_rightHandleCmds$$inline_7423_slidingWindow$$inline_7467_slidingWindowPos$$.$getY$(), $actualSize$$inline_7491_end$$inline_11198_handleStart$$inline_7419_i$$inline_7456_line$$inline_7462_newWidth$$inline_7501_rangeEndPos$$inline_7499_rightBackgroundResizeHandle$$inline_7436_time_pos$$inline_7461_topCenter$$inline_7469_vertical$$inline_7441$$ = $interactive$$1_obj$$310_props$$2_renderStart$$inline_7495_renderStartPos$$inline_7500_start$$inline_11197_top$$inline_7468_vertical$$inline_7488$$ + 
  0.5, $bottom$$inline_7470_day1$$inline_11199_displayable$$inline_11192_leftBackgroundResizeHandle$$inline_7435_pos1$$inline_11201_rangeStartPos$$inline_7498_rangeStartTime$$inline_7496_size$$inline_7442_start$$38_vertical$$inline_7416_width$$inline_11184$$ = $interactive$$1_obj$$310_props$$2_renderStart$$inline_7495_renderStartPos$$inline_7500_start$$inline_11197_top$$inline_7468_vertical$$inline_7488$$ + $child$$inline_7444_end$$inline_7494_label$$inline_7447_leftHandle$$inline_7476_rangeEnd$$inline_11187_rangeWidth$$inline_11191_rightHandle$$inline_7431_rightHandleCmds$$inline_7423_slidingWindow$$inline_7467_slidingWindowPos$$.getHeight(), 
  $bottomBar$$inline_7480_bottomCenter$$inline_7471_leftGrippy$$inline_7427$$ = $bottom$$inline_7470_day1$$inline_11199_displayable$$inline_11192_leftBackgroundResizeHandle$$inline_7435_pos1$$inline_11201_rangeStartPos$$inline_7498_rangeStartTime$$inline_7496_size$$inline_7442_start$$38_vertical$$inline_7416_width$$inline_11184$$ - 0.5, $end$$22_height$$inline_11185_i$$inline_7443_left$$inline_7472_leftBackground$$inline_7433_rangeEndTime$$inline_7497_slidingWindow$$inline_7417_timeAxisTopBar$$inline_7432_timelineWidth$$inline_7492$$ = 
  0, $color$$inline_11188_elem$$inline_11183_leftCenter$$inline_7473_leftHandleBackground$$inline_7424_rightBackground$$inline_7434_slidingWindow$$1_start$$inline_7493_time$$inline_7445_time_pos$$inline_7446$$ = 0.5, $leftHandle$$inline_7430_leftHandleCmds$$inline_7422_rightCenter$$inline_7475$$ = $actualAmount$$inline_7505_arrow$$inline_7485_arrowCmds$$inline_7484_day2$$inline_11200_rightTopBar$$inline_7479_size$$inline_7490_width$$121$$ - 0.5, $child$$inline_7444_end$$inline_7494_label$$inline_7447_leftHandle$$inline_7476_rangeEnd$$inline_11187_rangeWidth$$inline_11191_rightHandle$$inline_7431_rightHandleCmds$$inline_7423_slidingWindow$$inline_7467_slidingWindowPos$$ = 
  new D.$DvtLine$$(this.$getCtx$(), $end$$22_height$$inline_11185_i$$inline_7443_left$$inline_7472_leftBackground$$inline_7433_rangeEndTime$$inline_7497_slidingWindow$$inline_7417_timeAxisTopBar$$inline_7432_timelineWidth$$inline_7492$$, $actualSize$$inline_7491_end$$inline_11198_handleStart$$inline_7419_i$$inline_7456_line$$inline_7462_newWidth$$inline_7501_rangeEndPos$$inline_7499_rightBackgroundResizeHandle$$inline_7436_time_pos$$inline_7461_topCenter$$inline_7469_vertical$$inline_7441$$, $actualAmount$$inline_7505_arrow$$inline_7485_arrowCmds$$inline_7484_day2$$inline_11200_rightTopBar$$inline_7479_size$$inline_7490_width$$121$$, 
  $actualSize$$inline_7491_end$$inline_11198_handleStart$$inline_7419_i$$inline_7456_line$$inline_7462_newWidth$$inline_7501_rangeEndPos$$inline_7499_rightBackgroundResizeHandle$$inline_7436_time_pos$$inline_7461_topCenter$$inline_7469_vertical$$inline_7441$$, "lh"), $handleSize$$inline_7418_maxWidth$$inline_7448_next_time$$inline_7449_rightHandle$$inline_7477_rightHandleBackground$$inline_7425_size$$inline_11189$$ = new D.$DvtLine$$(this.$getCtx$(), $end$$22_height$$inline_11185_i$$inline_7443_left$$inline_7472_leftBackground$$inline_7433_rangeEndTime$$inline_7497_slidingWindow$$inline_7417_timeAxisTopBar$$inline_7432_timelineWidth$$inline_7492$$, 
  $bottomBar$$inline_7480_bottomCenter$$inline_7471_leftGrippy$$inline_7427$$, $actualAmount$$inline_7505_arrow$$inline_7485_arrowCmds$$inline_7484_day2$$inline_11200_rightTopBar$$inline_7479_size$$inline_7490_width$$121$$, $bottomBar$$inline_7480_bottomCenter$$inline_7471_leftGrippy$$inline_7427$$, "rh"), $cursor$$inline_7426_leftTopBar$$inline_7478_rangeStart$$inline_11186_rangeStart_pos$$inline_11190$$ = new D.$DvtLine$$(this.$getCtx$(), $color$$inline_11188_elem$$inline_11183_leftCenter$$inline_7473_leftHandleBackground$$inline_7424_rightBackground$$inline_7434_slidingWindow$$1_start$$inline_7493_time$$inline_7445_time_pos$$inline_7446$$, 
  0, $color$$inline_11188_elem$$inline_11183_leftCenter$$inline_7473_leftHandleBackground$$inline_7424_rightBackground$$inline_7434_slidingWindow$$1_start$$inline_7493_time$$inline_7445_time_pos$$inline_7446$$, $interactive$$1_obj$$310_props$$2_renderStart$$inline_7495_renderStartPos$$inline_7500_start$$inline_11197_top$$inline_7468_vertical$$inline_7488$$, "ltb"), $actualAmount$$inline_7505_arrow$$inline_7485_arrowCmds$$inline_7484_day2$$inline_11200_rightTopBar$$inline_7479_size$$inline_7490_width$$121$$ = 
  new D.$DvtLine$$(this.$getCtx$(), $color$$inline_11188_elem$$inline_11183_leftCenter$$inline_7473_leftHandleBackground$$inline_7424_rightBackground$$inline_7434_slidingWindow$$1_start$$inline_7493_time$$inline_7445_time_pos$$inline_7446$$, $bottom$$inline_7470_day1$$inline_11199_displayable$$inline_11192_leftBackgroundResizeHandle$$inline_7435_pos1$$inline_11201_rangeStartPos$$inline_7498_rangeStartTime$$inline_7496_size$$inline_7442_start$$38_vertical$$inline_7416_width$$inline_11184$$, $color$$inline_11188_elem$$inline_11183_leftCenter$$inline_7473_leftHandleBackground$$inline_7424_rightBackground$$inline_7434_slidingWindow$$1_start$$inline_7493_time$$inline_7445_time_pos$$inline_7446$$, 
  $height$$111_right$$inline_7474_timelineWidth$$inline_11196_topBar$$inline_7481_window$$inline_7489$$, "rtb"), $bottomBar$$inline_7480_bottomCenter$$inline_7471_leftGrippy$$inline_7427$$ = new D.$DvtLine$$(this.$getCtx$(), $leftHandle$$inline_7430_leftHandleCmds$$inline_7422_rightCenter$$inline_7475$$, $interactive$$1_obj$$310_props$$2_renderStart$$inline_7495_renderStartPos$$inline_7500_start$$inline_11197_top$$inline_7468_vertical$$inline_7488$$, $leftHandle$$inline_7430_leftHandleCmds$$inline_7422_rightCenter$$inline_7475$$, 
  $bottom$$inline_7470_day1$$inline_11199_displayable$$inline_11192_leftBackgroundResizeHandle$$inline_7435_pos1$$inline_11201_rangeStartPos$$inline_7498_rangeStartTime$$inline_7496_size$$inline_7442_start$$38_vertical$$inline_7416_width$$inline_11184$$, "bb"), $height$$111_right$$inline_7474_timelineWidth$$inline_11196_topBar$$inline_7481_window$$inline_7489$$ = new D.$DvtLine$$(this.$getCtx$(), $color$$inline_11188_elem$$inline_11183_leftCenter$$inline_7473_leftHandleBackground$$inline_7424_rightBackground$$inline_7434_slidingWindow$$1_start$$inline_7493_time$$inline_7445_time_pos$$inline_7446$$, 
  $interactive$$1_obj$$310_props$$2_renderStart$$inline_7495_renderStartPos$$inline_7500_start$$inline_11197_top$$inline_7468_vertical$$inline_7488$$, $color$$inline_11188_elem$$inline_11183_leftCenter$$inline_7473_leftHandleBackground$$inline_7424_rightBackground$$inline_7434_slidingWindow$$1_start$$inline_7493_time$$inline_7445_time_pos$$inline_7446$$, $bottom$$inline_7470_day1$$inline_11199_displayable$$inline_11192_leftBackgroundResizeHandle$$inline_7435_pos1$$inline_11201_rangeStartPos$$inline_7498_rangeStartTime$$inline_7496_size$$inline_7442_start$$38_vertical$$inline_7416_width$$inline_11184$$, 
  "tb")) : ($interactive$$1_obj$$310_props$$2_renderStart$$inline_7495_renderStartPos$$inline_7500_start$$inline_11197_top$$inline_7468_vertical$$inline_7488$$ = 0, $actualSize$$inline_7491_end$$inline_11198_handleStart$$inline_7419_i$$inline_7456_line$$inline_7462_newWidth$$inline_7501_rangeEndPos$$inline_7499_rightBackgroundResizeHandle$$inline_7436_time_pos$$inline_7461_topCenter$$inline_7469_vertical$$inline_7441$$ = $interactive$$1_obj$$310_props$$2_renderStart$$inline_7495_renderStartPos$$inline_7500_start$$inline_11197_top$$inline_7468_vertical$$inline_7488$$ + 
  0.5, $bottom$$inline_7470_day1$$inline_11199_displayable$$inline_11192_leftBackgroundResizeHandle$$inline_7435_pos1$$inline_11201_rangeStartPos$$inline_7498_rangeStartTime$$inline_7496_size$$inline_7442_start$$38_vertical$$inline_7416_width$$inline_11184$$ = $height$$111_right$$inline_7474_timelineWidth$$inline_11196_topBar$$inline_7481_window$$inline_7489$$, $bottomBar$$inline_7480_bottomCenter$$inline_7471_leftGrippy$$inline_7427$$ = $bottom$$inline_7470_day1$$inline_11199_displayable$$inline_11192_leftBackgroundResizeHandle$$inline_7435_pos1$$inline_11201_rangeStartPos$$inline_7498_rangeStartTime$$inline_7496_size$$inline_7442_start$$38_vertical$$inline_7416_width$$inline_11184$$ - 
  0.5, $end$$22_height$$inline_11185_i$$inline_7443_left$$inline_7472_leftBackground$$inline_7433_rangeEndTime$$inline_7497_slidingWindow$$inline_7417_timeAxisTopBar$$inline_7432_timelineWidth$$inline_7492$$ = $child$$inline_7444_end$$inline_7494_label$$inline_7447_leftHandle$$inline_7476_rangeEnd$$inline_11187_rangeWidth$$inline_11191_rightHandle$$inline_7431_rightHandleCmds$$inline_7423_slidingWindow$$inline_7467_slidingWindowPos$$.$getX$(), $color$$inline_11188_elem$$inline_11183_leftCenter$$inline_7473_leftHandleBackground$$inline_7424_rightBackground$$inline_7434_slidingWindow$$1_start$$inline_7493_time$$inline_7445_time_pos$$inline_7446$$ = 
  $end$$22_height$$inline_11185_i$$inline_7443_left$$inline_7472_leftBackground$$inline_7433_rangeEndTime$$inline_7497_slidingWindow$$inline_7417_timeAxisTopBar$$inline_7432_timelineWidth$$inline_7492$$ + 0.5, $height$$111_right$$inline_7474_timelineWidth$$inline_11196_topBar$$inline_7481_window$$inline_7489$$ = $end$$22_height$$inline_11185_i$$inline_7443_left$$inline_7472_leftBackground$$inline_7433_rangeEndTime$$inline_7497_slidingWindow$$inline_7417_timeAxisTopBar$$inline_7432_timelineWidth$$inline_7492$$ + 
  $child$$inline_7444_end$$inline_7494_label$$inline_7447_leftHandle$$inline_7476_rangeEnd$$inline_11187_rangeWidth$$inline_11191_rightHandle$$inline_7431_rightHandleCmds$$inline_7423_slidingWindow$$inline_7467_slidingWindowPos$$.getWidth(), $leftHandle$$inline_7430_leftHandleCmds$$inline_7422_rightCenter$$inline_7475$$ = $height$$111_right$$inline_7474_timelineWidth$$inline_11196_topBar$$inline_7481_window$$inline_7489$$ - 0.5, $child$$inline_7444_end$$inline_7494_label$$inline_7447_leftHandle$$inline_7476_rangeEnd$$inline_11187_rangeWidth$$inline_11191_rightHandle$$inline_7431_rightHandleCmds$$inline_7423_slidingWindow$$inline_7467_slidingWindowPos$$ = 
  new D.$DvtLine$$(this.$getCtx$(), $color$$inline_11188_elem$$inline_11183_leftCenter$$inline_7473_leftHandleBackground$$inline_7424_rightBackground$$inline_7434_slidingWindow$$1_start$$inline_7493_time$$inline_7445_time_pos$$inline_7446$$, $interactive$$1_obj$$310_props$$2_renderStart$$inline_7495_renderStartPos$$inline_7500_start$$inline_11197_top$$inline_7468_vertical$$inline_7488$$, $color$$inline_11188_elem$$inline_11183_leftCenter$$inline_7473_leftHandleBackground$$inline_7424_rightBackground$$inline_7434_slidingWindow$$1_start$$inline_7493_time$$inline_7445_time_pos$$inline_7446$$, 
  $bottom$$inline_7470_day1$$inline_11199_displayable$$inline_11192_leftBackgroundResizeHandle$$inline_7435_pos1$$inline_11201_rangeStartPos$$inline_7498_rangeStartTime$$inline_7496_size$$inline_7442_start$$38_vertical$$inline_7416_width$$inline_11184$$, "lh"), $handleSize$$inline_7418_maxWidth$$inline_7448_next_time$$inline_7449_rightHandle$$inline_7477_rightHandleBackground$$inline_7425_size$$inline_11189$$ = new D.$DvtLine$$(this.$getCtx$(), $leftHandle$$inline_7430_leftHandleCmds$$inline_7422_rightCenter$$inline_7475$$, 
  $interactive$$1_obj$$310_props$$2_renderStart$$inline_7495_renderStartPos$$inline_7500_start$$inline_11197_top$$inline_7468_vertical$$inline_7488$$, $leftHandle$$inline_7430_leftHandleCmds$$inline_7422_rightCenter$$inline_7475$$, $bottom$$inline_7470_day1$$inline_11199_displayable$$inline_11192_leftBackgroundResizeHandle$$inline_7435_pos1$$inline_11201_rangeStartPos$$inline_7498_rangeStartTime$$inline_7496_size$$inline_7442_start$$38_vertical$$inline_7416_width$$inline_11184$$, "rh"), $cursor$$inline_7426_leftTopBar$$inline_7478_rangeStart$$inline_11186_rangeStart_pos$$inline_11190$$ = 
  new D.$DvtLine$$(this.$getCtx$(), 0, $actualSize$$inline_7491_end$$inline_11198_handleStart$$inline_7419_i$$inline_7456_line$$inline_7462_newWidth$$inline_7501_rangeEndPos$$inline_7499_rightBackgroundResizeHandle$$inline_7436_time_pos$$inline_7461_topCenter$$inline_7469_vertical$$inline_7441$$, $end$$22_height$$inline_11185_i$$inline_7443_left$$inline_7472_leftBackground$$inline_7433_rangeEndTime$$inline_7497_slidingWindow$$inline_7417_timeAxisTopBar$$inline_7432_timelineWidth$$inline_7492$$ + 
  1, $actualSize$$inline_7491_end$$inline_11198_handleStart$$inline_7419_i$$inline_7456_line$$inline_7462_newWidth$$inline_7501_rangeEndPos$$inline_7499_rightBackgroundResizeHandle$$inline_7436_time_pos$$inline_7461_topCenter$$inline_7469_vertical$$inline_7441$$, "ltb"), $actualAmount$$inline_7505_arrow$$inline_7485_arrowCmds$$inline_7484_day2$$inline_11200_rightTopBar$$inline_7479_size$$inline_7490_width$$121$$ = new D.$DvtLine$$(this.$getCtx$(), $height$$111_right$$inline_7474_timelineWidth$$inline_11196_topBar$$inline_7481_window$$inline_7489$$ - 
  1, $actualSize$$inline_7491_end$$inline_11198_handleStart$$inline_7419_i$$inline_7456_line$$inline_7462_newWidth$$inline_7501_rangeEndPos$$inline_7499_rightBackgroundResizeHandle$$inline_7436_time_pos$$inline_7461_topCenter$$inline_7469_vertical$$inline_7441$$, $actualAmount$$inline_7505_arrow$$inline_7485_arrowCmds$$inline_7484_day2$$inline_11200_rightTopBar$$inline_7479_size$$inline_7490_width$$121$$, $actualSize$$inline_7491_end$$inline_11198_handleStart$$inline_7419_i$$inline_7456_line$$inline_7462_newWidth$$inline_7501_rangeEndPos$$inline_7499_rightBackgroundResizeHandle$$inline_7436_time_pos$$inline_7461_topCenter$$inline_7469_vertical$$inline_7441$$, 
  "rtb"), $bottomBar$$inline_7480_bottomCenter$$inline_7471_leftGrippy$$inline_7427$$ = new D.$DvtLine$$(this.$getCtx$(), $end$$22_height$$inline_11185_i$$inline_7443_left$$inline_7472_leftBackground$$inline_7433_rangeEndTime$$inline_7497_slidingWindow$$inline_7417_timeAxisTopBar$$inline_7432_timelineWidth$$inline_7492$$, $bottomBar$$inline_7480_bottomCenter$$inline_7471_leftGrippy$$inline_7427$$, $height$$111_right$$inline_7474_timelineWidth$$inline_11196_topBar$$inline_7481_window$$inline_7489$$, 
  $bottomBar$$inline_7480_bottomCenter$$inline_7471_leftGrippy$$inline_7427$$, "bb"), $height$$111_right$$inline_7474_timelineWidth$$inline_11196_topBar$$inline_7481_window$$inline_7489$$ = new D.$DvtLine$$(this.$getCtx$(), $end$$22_height$$inline_11185_i$$inline_7443_left$$inline_7472_leftBackground$$inline_7433_rangeEndTime$$inline_7497_slidingWindow$$inline_7417_timeAxisTopBar$$inline_7432_timelineWidth$$inline_7492$$, $actualSize$$inline_7491_end$$inline_11198_handleStart$$inline_7419_i$$inline_7456_line$$inline_7462_newWidth$$inline_7501_rangeEndPos$$inline_7499_rightBackgroundResizeHandle$$inline_7436_time_pos$$inline_7461_topCenter$$inline_7469_vertical$$inline_7441$$, 
  $height$$111_right$$inline_7474_timelineWidth$$inline_11196_topBar$$inline_7481_window$$inline_7489$$, $actualSize$$inline_7491_end$$inline_11198_handleStart$$inline_7419_i$$inline_7456_line$$inline_7462_newWidth$$inline_7501_rangeEndPos$$inline_7499_rightBackgroundResizeHandle$$inline_7436_time_pos$$inline_7461_topCenter$$inline_7469_vertical$$inline_7441$$, "tb")), (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)($child$$inline_7444_end$$inline_7494_label$$inline_7447_leftHandle$$inline_7476_rangeEnd$$inline_11187_rangeWidth$$inline_11191_rightHandle$$inline_7431_rightHandleCmds$$inline_7423_slidingWindow$$inline_7467_slidingWindowPos$$), 
  (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)($handleSize$$inline_7418_maxWidth$$inline_7448_next_time$$inline_7449_rightHandle$$inline_7477_rightHandleBackground$$inline_7425_size$$inline_11189$$), (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)($cursor$$inline_7426_leftTopBar$$inline_7478_rangeStart$$inline_11186_rangeStart_pos$$inline_11190$$), (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)($actualAmount$$inline_7505_arrow$$inline_7485_arrowCmds$$inline_7484_day2$$inline_11200_rightTopBar$$inline_7479_size$$inline_7490_width$$121$$), 
  (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)($bottomBar$$inline_7480_bottomCenter$$inline_7471_leftGrippy$$inline_7427$$), (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)($height$$111_right$$inline_7474_timelineWidth$$inline_11196_topBar$$inline_7481_window$$inline_7489$$), "none" != this.$_windowBorderLeftStyle$ && $child$$inline_7444_end$$inline_7494_label$$inline_7447_leftHandle$$inline_7476_rangeEnd$$inline_11187_rangeWidth$$inline_11191_rightHandle$$inline_7431_rightHandleCmds$$inline_7423_slidingWindow$$inline_7467_slidingWindowPos$$.$setSolidStroke$(this.$_windowBorderLeftColor$), 
  this.$addChild$($child$$inline_7444_end$$inline_7494_label$$inline_7447_leftHandle$$inline_7476_rangeEnd$$inline_11187_rangeWidth$$inline_11191_rightHandle$$inline_7431_rightHandleCmds$$inline_7423_slidingWindow$$inline_7467_slidingWindowPos$$), "none" != this.$_windowBorderRightStyle$ && $handleSize$$inline_7418_maxWidth$$inline_7448_next_time$$inline_7449_rightHandle$$inline_7477_rightHandleBackground$$inline_7425_size$$inline_11189$$.$setSolidStroke$(this.$_windowBorderRightColor$), this.$addChild$($handleSize$$inline_7418_maxWidth$$inline_7448_next_time$$inline_7449_rightHandle$$inline_7477_rightHandleBackground$$inline_7425_size$$inline_11189$$), 
  "none" != this.$_borderTopStyle$ && this.$_borderTopColor$ && ($cursor$$inline_7426_leftTopBar$$inline_7478_rangeStart$$inline_11186_rangeStart_pos$$inline_11190$$.$setSolidStroke$(this.$_borderTopColor$), $actualAmount$$inline_7505_arrow$$inline_7485_arrowCmds$$inline_7484_day2$$inline_11200_rightTopBar$$inline_7479_size$$inline_7490_width$$121$$.$setSolidStroke$(this.$_borderTopColor$)), this.$addChild$($cursor$$inline_7426_leftTopBar$$inline_7478_rangeStart$$inline_11186_rangeStart_pos$$inline_11190$$), 
  this.$addChild$($actualAmount$$inline_7505_arrow$$inline_7485_arrowCmds$$inline_7484_day2$$inline_11200_rightTopBar$$inline_7479_size$$inline_7490_width$$121$$), "none" != this.$_windowBorderBottomStyle$ && $bottomBar$$inline_7480_bottomCenter$$inline_7471_leftGrippy$$inline_7427$$.$setSolidStroke$(this.$_windowBorderBottomColor$), this.$addChild$($bottomBar$$inline_7480_bottomCenter$$inline_7471_leftGrippy$$inline_7427$$), "none" != this.$_windowBorderTopStyle$ && $height$$111_right$$inline_7474_timelineWidth$$inline_11196_topBar$$inline_7481_window$$inline_7489$$.$setSolidStroke$(this.$_windowBorderTopColor$), 
  this.$addChild$($height$$111_right$$inline_7474_timelineWidth$$inline_11196_topBar$$inline_7481_window$$inline_7489$$), this.$isFlashEnvironment$() && ($actualAmount$$inline_7505_arrow$$inline_7485_arrowCmds$$inline_7484_day2$$inline_11200_rightTopBar$$inline_7479_size$$inline_7490_width$$121$$ = this.$isVertical$() ? D.$DvtPathUtils$$.moveTo(6, 0) + D.$DvtPathUtils$$.lineTo(0, 5) + D.$DvtPathUtils$$.lineTo(5, 5) + D.$DvtPathUtils$$.lineTo(5, 17) + D.$DvtPathUtils$$.lineTo(0, 17) + D.$DvtPathUtils$$.lineTo(6, 
  22) + D.$DvtPathUtils$$.lineTo(12, 17) + D.$DvtPathUtils$$.lineTo(7, 17) + D.$DvtPathUtils$$.lineTo(7, 5) + D.$DvtPathUtils$$.lineTo(12, 5) + D.$DvtPathUtils$$.closePath() : D.$DvtPathUtils$$.moveTo(5, 0) + D.$DvtPathUtils$$.lineTo(0, 6) + D.$DvtPathUtils$$.lineTo(5, 12) + D.$DvtPathUtils$$.lineTo(5, 7) + D.$DvtPathUtils$$.lineTo(17, 7) + D.$DvtPathUtils$$.lineTo(17, 12) + D.$DvtPathUtils$$.lineTo(22, 6) + D.$DvtPathUtils$$.lineTo(17, 0) + D.$DvtPathUtils$$.lineTo(17, 4) + D.$DvtPathUtils$$.lineTo(5, 
  4) + D.$DvtPathUtils$$.lineTo(5, 0) + D.$DvtPathUtils$$.closePath(), $actualAmount$$inline_7505_arrow$$inline_7485_arrowCmds$$inline_7484_day2$$inline_11200_rightTopBar$$inline_7479_size$$inline_7490_width$$121$$ = new D.$DvtPath$$(this.$getCtx$(), $actualAmount$$inline_7505_arrow$$inline_7485_arrowCmds$$inline_7484_day2$$inline_11200_rightTopBar$$inline_7479_size$$inline_7490_width$$121$$, "arr"), $actualAmount$$inline_7505_arrow$$inline_7485_arrowCmds$$inline_7484_day2$$inline_11200_rightTopBar$$inline_7479_size$$inline_7490_width$$121$$.$setSolidFill$("#ffffff"), 
  $actualAmount$$inline_7505_arrow$$inline_7485_arrowCmds$$inline_7484_day2$$inline_11200_rightTopBar$$inline_7479_size$$inline_7490_width$$121$$.$setSolidStroke$("#000000"), $actualAmount$$inline_7505_arrow$$inline_7485_arrowCmds$$inline_7484_day2$$inline_11200_rightTopBar$$inline_7479_size$$inline_7490_width$$121$$.$setVisible$(D.$JSCompiler_alias_FALSE$$), this.$addChild$($actualAmount$$inline_7505_arrow$$inline_7485_arrowCmds$$inline_7484_day2$$inline_11200_rightTopBar$$inline_7479_size$$inline_7490_width$$121$$), 
  this.$_resizeArrow$ = $actualAmount$$inline_7505_arrow$$inline_7485_arrowCmds$$inline_7484_day2$$inline_11200_rightTopBar$$inline_7479_size$$inline_7490_width$$121$$), $interactive$$1_obj$$310_props$$2_renderStart$$inline_7495_renderStartPos$$inline_7500_start$$inline_11197_top$$inline_7468_vertical$$inline_7488$$ = this.$isVertical$(), $height$$111_right$$inline_7474_timelineWidth$$inline_11196_topBar$$inline_7481_window$$inline_7489$$ = this.$getChildAt$(1), $actualAmount$$inline_7505_arrow$$inline_7485_arrowCmds$$inline_7484_day2$$inline_11200_rightTopBar$$inline_7479_size$$inline_7490_width$$121$$ = 
  (0,D.$JSCompiler_StaticMethods_getOverviewSize$$)(this), $actualSize$$inline_7491_end$$inline_11198_handleStart$$inline_7419_i$$inline_7456_line$$inline_7462_newWidth$$inline_7501_rangeEndPos$$inline_7499_rightBackgroundResizeHandle$$inline_7436_time_pos$$inline_7461_topCenter$$inline_7469_vertical$$inline_7441$$ = $interactive$$1_obj$$310_props$$2_renderStart$$inline_7495_renderStartPos$$inline_7500_start$$inline_11197_top$$inline_7468_vertical$$inline_7488$$ ? this.$Height$ : this.$Width$, $end$$22_height$$inline_11185_i$$inline_7443_left$$inline_7472_leftBackground$$inline_7433_rangeEndTime$$inline_7497_slidingWindow$$inline_7417_timeAxisTopBar$$inline_7432_timelineWidth$$inline_7492$$ = 
  this.$_width$, $color$$inline_11188_elem$$inline_11183_leftCenter$$inline_7473_leftHandleBackground$$inline_7424_rightBackground$$inline_7434_slidingWindow$$1_start$$inline_7493_time$$inline_7445_time_pos$$inline_7446$$ = this.$_start$, $child$$inline_7444_end$$inline_7494_label$$inline_7447_leftHandle$$inline_7476_rangeEnd$$inline_11187_rangeWidth$$inline_11191_rightHandle$$inline_7431_rightHandleCmds$$inline_7423_slidingWindow$$inline_7467_slidingWindowPos$$ = this.$_end$, $interactive$$1_obj$$310_props$$2_renderStart$$inline_7495_renderStartPos$$inline_7500_start$$inline_11197_top$$inline_7468_vertical$$inline_7488$$ = 
  this.$_renderStart$, $bottom$$inline_7470_day1$$inline_11199_displayable$$inline_11192_leftBackgroundResizeHandle$$inline_7435_pos1$$inline_11201_rangeStartPos$$inline_7498_rangeStartTime$$inline_7496_size$$inline_7442_start$$38_vertical$$inline_7416_width$$inline_11184$$ = D.$DvtTimeUtils$$.$getPositionDate$($color$$inline_11188_elem$$inline_11183_leftCenter$$inline_7473_leftHandleBackground$$inline_7424_rightBackground$$inline_7434_slidingWindow$$1_start$$inline_7493_time$$inline_7445_time_pos$$inline_7446$$, 
  $child$$inline_7444_end$$inline_7494_label$$inline_7447_leftHandle$$inline_7476_rangeEnd$$inline_11187_rangeWidth$$inline_11191_rightHandle$$inline_7431_rightHandleCmds$$inline_7423_slidingWindow$$inline_7467_slidingWindowPos$$, 0, $end$$22_height$$inline_11185_i$$inline_7443_left$$inline_7472_leftBackground$$inline_7433_rangeEndTime$$inline_7497_slidingWindow$$inline_7417_timeAxisTopBar$$inline_7432_timelineWidth$$inline_7492$$), $end$$22_height$$inline_11185_i$$inline_7443_left$$inline_7472_leftBackground$$inline_7433_rangeEndTime$$inline_7497_slidingWindow$$inline_7417_timeAxisTopBar$$inline_7432_timelineWidth$$inline_7492$$ = 
  D.$DvtTimeUtils$$.$getPositionDate$($color$$inline_11188_elem$$inline_11183_leftCenter$$inline_7473_leftHandleBackground$$inline_7424_rightBackground$$inline_7434_slidingWindow$$1_start$$inline_7493_time$$inline_7445_time_pos$$inline_7446$$, $child$$inline_7444_end$$inline_7494_label$$inline_7447_leftHandle$$inline_7476_rangeEnd$$inline_11187_rangeWidth$$inline_11191_rightHandle$$inline_7431_rightHandleCmds$$inline_7423_slidingWindow$$inline_7467_slidingWindowPos$$, $actualSize$$inline_7491_end$$inline_11198_handleStart$$inline_7419_i$$inline_7456_line$$inline_7462_newWidth$$inline_7501_rangeEndPos$$inline_7499_rightBackgroundResizeHandle$$inline_7436_time_pos$$inline_7461_topCenter$$inline_7469_vertical$$inline_7441$$, 
  $end$$22_height$$inline_11185_i$$inline_7443_left$$inline_7472_leftBackground$$inline_7433_rangeEndTime$$inline_7497_slidingWindow$$inline_7417_timeAxisTopBar$$inline_7432_timelineWidth$$inline_7492$$), $bottom$$inline_7470_day1$$inline_11199_displayable$$inline_11192_leftBackgroundResizeHandle$$inline_7435_pos1$$inline_11201_rangeStartPos$$inline_7498_rangeStartTime$$inline_7496_size$$inline_7442_start$$38_vertical$$inline_7416_width$$inline_11184$$ = this.$getDatePosition$($bottom$$inline_7470_day1$$inline_11199_displayable$$inline_11192_leftBackgroundResizeHandle$$inline_7435_pos1$$inline_11201_rangeStartPos$$inline_7498_rangeStartTime$$inline_7496_size$$inline_7442_start$$38_vertical$$inline_7416_width$$inline_11184$$), 
  $actualSize$$inline_7491_end$$inline_11198_handleStart$$inline_7419_i$$inline_7456_line$$inline_7462_newWidth$$inline_7501_rangeEndPos$$inline_7499_rightBackgroundResizeHandle$$inline_7436_time_pos$$inline_7461_topCenter$$inline_7469_vertical$$inline_7441$$ = window.Math.min($actualSize$$inline_7491_end$$inline_11198_handleStart$$inline_7419_i$$inline_7456_line$$inline_7462_newWidth$$inline_7501_rangeEndPos$$inline_7499_rightBackgroundResizeHandle$$inline_7436_time_pos$$inline_7461_topCenter$$inline_7469_vertical$$inline_7441$$, 
  this.$getDatePosition$($end$$22_height$$inline_11185_i$$inline_7443_left$$inline_7472_leftBackground$$inline_7433_rangeEndTime$$inline_7497_slidingWindow$$inline_7417_timeAxisTopBar$$inline_7432_timelineWidth$$inline_7492$$)), $interactive$$1_obj$$310_props$$2_renderStart$$inline_7495_renderStartPos$$inline_7500_start$$inline_11197_top$$inline_7468_vertical$$inline_7488$$ = this.$getDatePosition$($interactive$$1_obj$$310_props$$2_renderStart$$inline_7495_renderStartPos$$inline_7500_start$$inline_11197_top$$inline_7468_vertical$$inline_7488$$), 
  $actualSize$$inline_7491_end$$inline_11198_handleStart$$inline_7419_i$$inline_7456_line$$inline_7462_newWidth$$inline_7501_rangeEndPos$$inline_7499_rightBackgroundResizeHandle$$inline_7436_time_pos$$inline_7461_topCenter$$inline_7469_vertical$$inline_7441$$ -= $bottom$$inline_7470_day1$$inline_11199_displayable$$inline_11192_leftBackgroundResizeHandle$$inline_7435_pos1$$inline_11201_rangeStartPos$$inline_7498_rangeStartTime$$inline_7496_size$$inline_7442_start$$38_vertical$$inline_7416_width$$inline_11184$$, 
  (0,D.$JSCompiler_StaticMethods_isHorizontalRTL$$)(this) ? (0,D.$JSCompiler_StaticMethods_setSlidingWindowPos$$)(this, $height$$111_right$$inline_7474_timelineWidth$$inline_11196_topBar$$inline_7481_window$$inline_7489$$, $actualAmount$$inline_7505_arrow$$inline_7485_arrowCmds$$inline_7484_day2$$inline_11200_rightTopBar$$inline_7479_size$$inline_7490_width$$121$$ - $interactive$$1_obj$$310_props$$2_renderStart$$inline_7495_renderStartPos$$inline_7500_start$$inline_11197_top$$inline_7468_vertical$$inline_7488$$ - 
  $actualSize$$inline_7491_end$$inline_11198_handleStart$$inline_7419_i$$inline_7456_line$$inline_7462_newWidth$$inline_7501_rangeEndPos$$inline_7499_rightBackgroundResizeHandle$$inline_7436_time_pos$$inline_7461_topCenter$$inline_7469_vertical$$inline_7441$$) : (0,D.$JSCompiler_StaticMethods_setSlidingWindowPos$$)(this, $height$$111_right$$inline_7474_timelineWidth$$inline_11196_topBar$$inline_7481_window$$inline_7489$$, $interactive$$1_obj$$310_props$$2_renderStart$$inline_7495_renderStartPos$$inline_7500_start$$inline_11197_top$$inline_7468_vertical$$inline_7488$$), 
  (0,D.$JSCompiler_StaticMethods_setSlidingWindowSize$$)(this, $height$$111_right$$inline_7474_timelineWidth$$inline_11196_topBar$$inline_7481_window$$inline_7489$$, $actualSize$$inline_7491_end$$inline_11198_handleStart$$inline_7419_i$$inline_7456_line$$inline_7462_newWidth$$inline_7501_rangeEndPos$$inline_7499_rightBackgroundResizeHandle$$inline_7436_time_pos$$inline_7461_topCenter$$inline_7469_vertical$$inline_7441$$), (0,D.$JSCompiler_StaticMethods_ScrollTimeAxis$$)(this), $height$$111_right$$inline_7474_timelineWidth$$inline_11196_topBar$$inline_7481_window$$inline_7489$$ = 
  this.$_width$, $interactive$$1_obj$$310_props$$2_renderStart$$inline_7495_renderStartPos$$inline_7500_start$$inline_11197_top$$inline_7468_vertical$$inline_7488$$ = this.$_start$, $actualSize$$inline_7491_end$$inline_11198_handleStart$$inline_7419_i$$inline_7456_line$$inline_7462_newWidth$$inline_7501_rangeEndPos$$inline_7499_rightBackgroundResizeHandle$$inline_7436_time_pos$$inline_7461_topCenter$$inline_7469_vertical$$inline_7441$$ = this.$_end$, $bottom$$inline_7470_day1$$inline_11199_displayable$$inline_11192_leftBackgroundResizeHandle$$inline_7435_pos1$$inline_11201_rangeStartPos$$inline_7498_rangeStartTime$$inline_7496_size$$inline_7442_start$$38_vertical$$inline_7416_width$$inline_11184$$ = 
  D.$DvtTimeUtils$$.$getPositionDate$($interactive$$1_obj$$310_props$$2_renderStart$$inline_7495_renderStartPos$$inline_7500_start$$inline_11197_top$$inline_7468_vertical$$inline_7488$$, $actualSize$$inline_7491_end$$inline_11198_handleStart$$inline_7419_i$$inline_7456_line$$inline_7462_newWidth$$inline_7501_rangeEndPos$$inline_7499_rightBackgroundResizeHandle$$inline_7436_time_pos$$inline_7461_topCenter$$inline_7469_vertical$$inline_7441$$, 1, $actualAmount$$inline_7505_arrow$$inline_7485_arrowCmds$$inline_7484_day2$$inline_11200_rightTopBar$$inline_7479_size$$inline_7490_width$$121$$), 
  $actualAmount$$inline_7505_arrow$$inline_7485_arrowCmds$$inline_7484_day2$$inline_11200_rightTopBar$$inline_7479_size$$inline_7490_width$$121$$ = D.$DvtTimeUtils$$.$getPositionDate$($interactive$$1_obj$$310_props$$2_renderStart$$inline_7495_renderStartPos$$inline_7500_start$$inline_11197_top$$inline_7468_vertical$$inline_7488$$, $actualSize$$inline_7491_end$$inline_11198_handleStart$$inline_7419_i$$inline_7456_line$$inline_7462_newWidth$$inline_7501_rangeEndPos$$inline_7499_rightBackgroundResizeHandle$$inline_7436_time_pos$$inline_7461_topCenter$$inline_7469_vertical$$inline_7441$$, 
  2, $actualAmount$$inline_7505_arrow$$inline_7485_arrowCmds$$inline_7484_day2$$inline_11200_rightTopBar$$inline_7479_size$$inline_7490_width$$121$$), $bottom$$inline_7470_day1$$inline_11199_displayable$$inline_11192_leftBackgroundResizeHandle$$inline_7435_pos1$$inline_11201_rangeStartPos$$inline_7498_rangeStartTime$$inline_7496_size$$inline_7442_start$$38_vertical$$inline_7416_width$$inline_11184$$ = D.$DvtTimeUtils$$.$getDatePosition$($interactive$$1_obj$$310_props$$2_renderStart$$inline_7495_renderStartPos$$inline_7500_start$$inline_11197_top$$inline_7468_vertical$$inline_7488$$, 
  $actualSize$$inline_7491_end$$inline_11198_handleStart$$inline_7419_i$$inline_7456_line$$inline_7462_newWidth$$inline_7501_rangeEndPos$$inline_7499_rightBackgroundResizeHandle$$inline_7436_time_pos$$inline_7461_topCenter$$inline_7469_vertical$$inline_7441$$, $bottom$$inline_7470_day1$$inline_11199_displayable$$inline_11192_leftBackgroundResizeHandle$$inline_7435_pos1$$inline_11201_rangeStartPos$$inline_7498_rangeStartTime$$inline_7496_size$$inline_7442_start$$38_vertical$$inline_7416_width$$inline_11184$$, 
  $height$$111_right$$inline_7474_timelineWidth$$inline_11196_topBar$$inline_7481_window$$inline_7489$$), this.$_increment$ = D.$DvtTimeUtils$$.$getDatePosition$($interactive$$1_obj$$310_props$$2_renderStart$$inline_7495_renderStartPos$$inline_7500_start$$inline_11197_top$$inline_7468_vertical$$inline_7488$$, $actualSize$$inline_7491_end$$inline_11198_handleStart$$inline_7419_i$$inline_7456_line$$inline_7462_newWidth$$inline_7501_rangeEndPos$$inline_7499_rightBackgroundResizeHandle$$inline_7436_time_pos$$inline_7461_topCenter$$inline_7469_vertical$$inline_7441$$, 
  $actualAmount$$inline_7505_arrow$$inline_7485_arrowCmds$$inline_7484_day2$$inline_11200_rightTopBar$$inline_7479_size$$inline_7490_width$$121$$, $height$$111_right$$inline_7474_timelineWidth$$inline_11196_topBar$$inline_7481_window$$inline_7489$$) - $bottom$$inline_7470_day1$$inline_11199_displayable$$inline_11192_leftBackgroundResizeHandle$$inline_7435_pos1$$inline_11201_rangeStartPos$$inline_7498_rangeStartTime$$inline_7496_size$$inline_7442_start$$38_vertical$$inline_7416_width$$inline_11184$$);
  this.$_initialFocusTime$ != D.$JSCompiler_alias_NULL$$ && (this.$_initPos$ = window.Math.max(0, D.$DvtTimeUtils$$.$getDatePosition$(this.$_start$, this.$_end$, this.$_initialFocusTime$, this.$_width$)));
  0 < this.$_initPos$ && ($actualAmount$$inline_7505_arrow$$inline_7485_arrowCmds$$inline_7484_day2$$inline_11200_rightTopBar$$inline_7479_size$$inline_7490_width$$121$$ = this.$_initPos$ / this.$_increment$, (0,D.$JSCompiler_StaticMethods_isHorizontalRTL$$)(this) && ($actualAmount$$inline_7505_arrow$$inline_7485_arrowCmds$$inline_7484_day2$$inline_11200_rightTopBar$$inline_7479_size$$inline_7490_width$$121$$ = 0 - $actualAmount$$inline_7505_arrow$$inline_7485_arrowCmds$$inline_7484_day2$$inline_11200_rightTopBar$$inline_7479_size$$inline_7490_width$$121$$), 
  (0,D.$JSCompiler_StaticMethods_animateSlidingWindow$$)(this, $actualAmount$$inline_7505_arrow$$inline_7485_arrowCmds$$inline_7484_day2$$inline_11200_rightTopBar$$inline_7479_size$$inline_7490_width$$121$$))
};
D.$DvtOverview$$.prototype.render = D.$DvtOverview$$.prototype.$render$;
D.$JSCompiler_prototypeAlias$$ = D.$DvtOverview$$.prototype;
D.$JSCompiler_prototypeAlias$$.$getParser$ = function $$JSCompiler_prototypeAlias$$$$getParser$$() {
  return new D.$DvtOverviewParser$$(this)
};
D.$JSCompiler_prototypeAlias$$.$Parse$ = function $$JSCompiler_prototypeAlias$$$$Parse$$($obj$$312$$) {
  return this.$getParser$($obj$$312$$).parse($obj$$312$$)
};
D.$JSCompiler_prototypeAlias$$.$_applyParsedProperties$ = function $$JSCompiler_prototypeAlias$$$$_applyParsedProperties$$($props$$3$$) {
  this.$_start$ = $props$$3$$.start;
  this.$_end$ = $props$$3$$.end;
  this.$_width$ = $props$$3$$.width;
  this.$_renderStart$ = $props$$3$$.$renderStart$;
  this.$_currentTime$ = $props$$3$$.currentTime;
  this.$_initialFocusTime$ = $props$$3$$.$initialFocusTime$;
  this.$_animationOnClick$ = $props$$3$$.$animationOnClick$;
  this.$_leftMargin$ = window.Math.max(0, $props$$3$$.$leftMargin$);
  this.$_rightMargin$ = window.Math.max(0, $props$$3$$.$rightMargin$);
  (0,window.isNaN)(this.$_leftMargin$) && (this.$_leftMargin$ = 0);
  (0,window.isNaN)(this.$_rightMargin$) && (this.$_rightMargin$ = 0);
  this.$_orientation$ = $props$$3$$.orientation;
  this.$_overviewPosition$ = $props$$3$$.$overviewPosition$;
  this.$_isRtl$ = $props$$3$$.$isRtl$;
  $props$$3$$.$featuresOff$ != D.$JSCompiler_alias_NULL$$ && (this.$_featuresOff$ = $props$$3$$.$featuresOff$.split(" "));
  $props$$3$$.$minimumWindowSize$ != D.$JSCompiler_alias_NULL$$ && 0 < $props$$3$$.$minimumWindowSize$ && (this.$_minimumWindowSize$ = $props$$3$$.$minimumWindowSize$);
  this.$_borderStyles$ = $props$$3$$.$borderStyles$;
  this.$_timeAxisInfo$ = $props$$3$$.$timeAxisInfo$;
  $props$$3$$.$timeAxisInfo$ != D.$JSCompiler_alias_NULL$$ && (this.$_ticks$ = this.$_timeAxisInfo$.$ticks$);
  this.$_formattedTimeRanges$ = $props$$3$$.$formattedTimeRanges$;
  this.$_borderTopStyle$ = $props$$3$$.borderTopStyle;
  this.$_borderTopColor$ = $props$$3$$.borderTopColor;
  this.$_windowBackgroundColor$ = $props$$3$$.$windowBackgroundColor$;
  this.$_windowBackgroundAlpha$ = $props$$3$$.$windowBackgroundAlpha$;
  this.$_windowBorderTopStyle$ = $props$$3$$.$windowBorderTopStyle$;
  this.$_windowBorderRightStyle$ = $props$$3$$.$windowBorderRightStyle$;
  this.$_windowBorderBottomStyle$ = $props$$3$$.$windowBorderBottomStyle$;
  this.$_windowBorderLeftStyle$ = $props$$3$$.$windowBorderLeftStyle$;
  this.$_windowBorderTopColor$ = $props$$3$$.$windowBorderTopColor$;
  this.$_windowBorderRightColor$ = $props$$3$$.$windowBorderRightColor$;
  this.$_windowBorderBottomColor$ = $props$$3$$.$windowBorderBottomColor$;
  this.$_windowBorderLeftColor$ = $props$$3$$.$windowBorderLeftColor$;
  this.$_handleTextureColor$ = $props$$3$$.$handleTextureColor$;
  this.$_handleFillColor$ = $props$$3$$.$handleFillColor$;
  this.$_handleBackgroundImage$ = $props$$3$$.$handleBackgroundImage$;
  this.$_handleWidth$ = $props$$3$$.$handleWidth$;
  this.$_handleHeight$ = $props$$3$$.$handleHeight$;
  this.$_overviewBackgroundColor$ = $props$$3$$.$overviewBackgroundColor$;
  this.$_currentTimeIndicatorColor$ = $props$$3$$.$currentTimeIndicatorColor$;
  this.$_timeIndicatorColor$ = $props$$3$$.$timeIndicatorColor$;
  this.$_timeAxisBarColor$ = $props$$3$$.$timeAxisBarColor$;
  this.$_timeAxisBarOpacity$ = $props$$3$$.$timeAxisBarOpacity$;
  this.$_leftFilterPanelColor$ = $props$$3$$.$leftFilterPanelColor$;
  this.$_leftFilterPanelAlpha$ = $props$$3$$.$leftFilterPanelAlpha$;
  this.$_rightFilterPanelColor$ = $props$$3$$.$rightFilterPanelColor$;
  this.$_rightFilterPanelAlpha$ = $props$$3$$.$rightFilterPanelAlpha$
};
D.$JSCompiler_prototypeAlias$$.$getDatePosition$ = function $$JSCompiler_prototypeAlias$$$$getDatePosition$$($date$$10$$) {
  return window.Math.max(0, D.$DvtTimeUtils$$.$getDatePosition$(this.$_start$, this.$_end$, $date$$10$$, (0,D.$JSCompiler_StaticMethods_getOverviewSize$$)(this))) + this.$_leftMargin$
};
D.$JSCompiler_prototypeAlias$$.$getPositionDate$ = function $$JSCompiler_prototypeAlias$$$$getPositionDate$$($pos$$55$$) {
  return D.$DvtTimeUtils$$.$getPositionDate$(this.$_start$, this.$_end$, window.Math.max(0, $pos$$55$$ - this.$_leftMargin$), (0,D.$JSCompiler_StaticMethods_getOverviewSize$$)(this))
};
D.$JSCompiler_prototypeAlias$$.$isRTL$ = function $$JSCompiler_prototypeAlias$$$$isRTL$$() {
  return"true" == this.$_isRtl$
};
D.$JSCompiler_StaticMethods_isHorizontalRTL$$ = function $$JSCompiler_StaticMethods_isHorizontalRTL$$$($JSCompiler_StaticMethods_isHorizontalRTL$self$$) {
  return $JSCompiler_StaticMethods_isHorizontalRTL$self$$.$isRTL$() && !$JSCompiler_StaticMethods_isHorizontalRTL$self$$.$isVertical$()
};
D.$DvtOverview$$.prototype.$isVertical$ = function $$DvtOverview$$$$$isVertical$$() {
  return"vertical" == this.$_orientation$
};
D.$JSCompiler_StaticMethods_getOverviewSize$$ = function $$JSCompiler_StaticMethods_getOverviewSize$$$($JSCompiler_StaticMethods_getOverviewSize$self$$) {
  return $JSCompiler_StaticMethods_getOverviewSize$self$$.$isVertical$() ? $JSCompiler_StaticMethods_getOverviewSize$self$$.$Height$ - $JSCompiler_StaticMethods_getOverviewSize$self$$.$_leftMargin$ - $JSCompiler_StaticMethods_getOverviewSize$self$$.$_rightMargin$ : $JSCompiler_StaticMethods_getOverviewSize$self$$.$Width$ - $JSCompiler_StaticMethods_getOverviewSize$self$$.$_leftMargin$ - $JSCompiler_StaticMethods_getOverviewSize$self$$.$_rightMargin$
};
D.$JSCompiler_StaticMethods_getMaximumPosition$$ = function $$JSCompiler_StaticMethods_getMaximumPosition$$$($JSCompiler_StaticMethods_getMaximumPosition$self$$) {
  return $JSCompiler_StaticMethods_getMaximumPosition$self$$.$isVertical$() ? $JSCompiler_StaticMethods_getMaximumPosition$self$$.$Height$ - $JSCompiler_StaticMethods_getMaximumPosition$self$$.$_rightMargin$ : $JSCompiler_StaticMethods_getMaximumPosition$self$$.$Width$ - $JSCompiler_StaticMethods_getMaximumPosition$self$$.$_rightMargin$
};
D.$JSCompiler_StaticMethods_getMinimumWindowSize$$ = function $$JSCompiler_StaticMethods_getMinimumWindowSize$$$($JSCompiler_StaticMethods_getMinimumWindowSize$self$$) {
  return $JSCompiler_StaticMethods_getMinimumWindowSize$self$$.$_minWinSize$ != D.$JSCompiler_alias_NULL$$ ? $JSCompiler_StaticMethods_getMinimumWindowSize$self$$.$_minWinSize$ : $JSCompiler_StaticMethods_getMinimumWindowSize$self$$.$_minimumWindowSize$ != D.$JSCompiler_alias_NULL$$ ? ($JSCompiler_StaticMethods_getMinimumWindowSize$self$$.$_minWinSize$ = D.$DvtTimeUtils$$.$getDatePosition$($JSCompiler_StaticMethods_getMinimumWindowSize$self$$.$_start$, $JSCompiler_StaticMethods_getMinimumWindowSize$self$$.$_end$, 
  $JSCompiler_StaticMethods_getMinimumWindowSize$self$$.$_start$ + $JSCompiler_StaticMethods_getMinimumWindowSize$self$$.$_minimumWindowSize$, (0,D.$JSCompiler_StaticMethods_getOverviewSize$$)($JSCompiler_StaticMethods_getMinimumWindowSize$self$$)), $JSCompiler_StaticMethods_getMinimumWindowSize$self$$.$_minWinSize$) : 10
};
D.$JSCompiler_StaticMethods_getHandleStart$$ = function $$JSCompiler_StaticMethods_getHandleStart$$$() {
  return D.$DvtTimeUtils$$.$supportsTouch$() ? (0,D.$JSCompiler_StaticMethods_getHandleSize$$)() / 2 : 0
};
D.$JSCompiler_StaticMethods_getHandleSize$$ = function $$JSCompiler_StaticMethods_getHandleSize$$$() {
  return D.$DvtTimeUtils$$.$supportsTouch$() ? 30 : 10
};
D.$JSCompiler_StaticMethods_isHandle$$ = function $$JSCompiler_StaticMethods_isHandle$$$($drawable$$) {
  var $id$$243$$ = $drawable$$.getId();
  return"lh" == $id$$243$$ || "rh" == $id$$243$$ || "lhb" == $id$$243$$ || "rhb" == $id$$243$$ || "grpy" == $id$$243$$ || "lbgrh" == $id$$243$$ || "rbgrh" == $id$$243$$ || $drawable$$.getParent() != D.$JSCompiler_alias_NULL$$ && "grpy" == $drawable$$.getParent().getId()
};
D.$DvtOverview$$.prototype.$getTimeAxisWidth$ = function $$DvtOverview$$$$$getTimeAxisWidth$$() {
  if(this.$_timeAxisInfo$ == D.$JSCompiler_alias_NULL$$) {
    return 0
  }
  if(this.$_timeAxisWidth$ == D.$JSCompiler_alias_NULL$$) {
    var $width$$122$$ = (0,window.parseInt)(this.$_timeAxisInfo$.width, 10);
    this.$_timeAxisWidth$ = !(0,window.isNaN)($width$$122$$) && $width$$122$$ < this.$Width$ ? $width$$122$$ : 40
  }
  return this.$_timeAxisWidth$
};
D.$JSCompiler_StaticMethods_getTimeAxisHeight$$ = function $$JSCompiler_StaticMethods_getTimeAxisHeight$$$($JSCompiler_StaticMethods_getTimeAxisHeight$self$$) {
  if($JSCompiler_StaticMethods_getTimeAxisHeight$self$$.$_timeAxisInfo$ == D.$JSCompiler_alias_NULL$$) {
    return 0
  }
  if($JSCompiler_StaticMethods_getTimeAxisHeight$self$$.$_timeAxisHeight$ == D.$JSCompiler_alias_NULL$$) {
    var $height$$112$$ = (0,window.parseInt)($JSCompiler_StaticMethods_getTimeAxisHeight$self$$.$_timeAxisInfo$.height, 10);
    $JSCompiler_StaticMethods_getTimeAxisHeight$self$$.$_timeAxisHeight$ = !(0,window.isNaN)($height$$112$$) && $height$$112$$ < $JSCompiler_StaticMethods_getTimeAxisHeight$self$$.$Height$ ? $height$$112$$ : 20
  }
  return $JSCompiler_StaticMethods_getTimeAxisHeight$self$$.$_timeAxisHeight$
};
D.$JSCompiler_StaticMethods_getPageX$$ = function $$JSCompiler_StaticMethods_getPageX$$$($event$$598$$) {
  return D.$DvtTimeUtils$$.$supportsTouch$() && $event$$598$$.targetTouches != D.$JSCompiler_alias_NULL$$ ? 0 < $event$$598$$.targetTouches.length ? $event$$598$$.targetTouches[0].pageX : D.$JSCompiler_alias_NULL$$ : $event$$598$$.pageX
};
D.$JSCompiler_StaticMethods_getPageY$$ = function $$JSCompiler_StaticMethods_getPageY$$$($event$$599$$) {
  return D.$DvtTimeUtils$$.$supportsTouch$() && $event$$599$$.targetTouches != D.$JSCompiler_alias_NULL$$ ? 0 < $event$$599$$.targetTouches.length ? $event$$599$$.targetTouches[0].pageY : D.$JSCompiler_alias_NULL$$ : $event$$599$$.pageY
};
D.$DvtOverview$$.prototype.$isLeftAndRightFilterRendered$ = (0,D.$JSCompiler_returnArg$$)(D.$JSCompiler_alias_FALSE$$);
D.$JSCompiler_StaticMethods_getLeftBackground$$ = function $$JSCompiler_StaticMethods_getLeftBackground$$$($JSCompiler_StaticMethods_getLeftBackground$self$$) {
  return $JSCompiler_StaticMethods_getLeftBackground$self$$.$isLeftAndRightFilterRendered$() ? $JSCompiler_StaticMethods_getLeftBackground$self$$.$getChildAt$(3) : D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_StaticMethods_getRightBackground$$ = function $$JSCompiler_StaticMethods_getRightBackground$$$($JSCompiler_StaticMethods_getRightBackground$self$$) {
  return $JSCompiler_StaticMethods_getRightBackground$self$$.$isLeftAndRightFilterRendered$() ? $JSCompiler_StaticMethods_getRightBackground$self$$.$getChildAt$(4) : D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_StaticMethods_getRightBackgroundHandle$$ = function $$JSCompiler_StaticMethods_getRightBackgroundHandle$$$($JSCompiler_StaticMethods_getRightBackgroundHandle$self$$) {
  return $JSCompiler_StaticMethods_getRightBackgroundHandle$self$$.$isLeftAndRightFilterRendered$() && !(0,D.$JSCompiler_StaticMethods_isFeatureOff$$)($JSCompiler_StaticMethods_getRightBackgroundHandle$self$$) ? $JSCompiler_StaticMethods_getRightBackgroundHandle$self$$.$getChildAt$(6) : D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_StaticMethods_getRightHandle$$ = function $$JSCompiler_StaticMethods_getRightHandle$$$($JSCompiler_StaticMethods_getRightHandle$self$$) {
  return $JSCompiler_StaticMethods_getRightHandle$self$$.$getChildAt$($JSCompiler_StaticMethods_getRightHandle$self$$.$getNumChildren$() - ($JSCompiler_StaticMethods_getRightHandle$self$$.$_lastChildIndex$ - 1))
};
D.$JSCompiler_StaticMethods_setLinePos$$ = function $$JSCompiler_StaticMethods_setLinePos$$$($JSCompiler_StaticMethods_setLinePos$self$$, $line$$12$$, $pos1$$1$$, $pos2$$1$$) {
  $JSCompiler_StaticMethods_setLinePos$self$$.$isVertical$() ? (-1 != $pos1$$1$$ && $line$$12$$.$setY1$($pos1$$1$$), -1 != $pos2$$1$$ && $line$$12$$.$setY2$($pos2$$1$$)) : (-1 != $pos1$$1$$ && $line$$12$$.$setX1$($pos1$$1$$), -1 != $pos2$$1$$ && $line$$12$$.$setX2$($pos2$$1$$))
};
D.$JSCompiler_StaticMethods_getLinePos1$$ = function $$JSCompiler_StaticMethods_getLinePos1$$$($JSCompiler_StaticMethods_getLinePos1$self$$, $line$$13$$) {
  return $JSCompiler_StaticMethods_getLinePos1$self$$.$isVertical$() ? $line$$13$$.$getY1$() : $line$$13$$.$getX1$()
};
D.$DvtOverview$$.prototype.$_findDrawable$ = function $$DvtOverview$$$$$_findDrawable$$($event$$600_target$$126$$) {
  $event$$600_target$$126$$ = $event$$600_target$$126$$.target;
  if($event$$600_target$$126$$ != D.$JSCompiler_alias_NULL$$) {
    var $id$$244$$ = $event$$600_target$$126$$.getId();
    if($id$$244$$ == D.$JSCompiler_alias_NULL$$) {
      return D.$JSCompiler_alias_NULL$$
    }
    if("_border" == $id$$244$$.substr($id$$244$$.length - 7)) {
      return this.$getChildAfter$($event$$600_target$$126$$)
    }
    if("tick" != $id$$244$$.substr(0, 4) && "ltb" != $id$$244$$ && "rtb" != $id$$244$$ && "bb" != $id$$244$$ && "tab" != $id$$244$$) {
      return $event$$600_target$$126$$
    }
  }
  return D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_StaticMethods_isMovable$$ = function $$JSCompiler_StaticMethods_isMovable$$$($drawable$$1$$) {
  return"window" == $drawable$$1$$.getId() || "ftr" == $drawable$$1$$.getId() || "sta" == $drawable$$1$$.getId() || (0,D.$JSCompiler_StaticMethods_isHandle$$)($drawable$$1$$) ? D.$JSCompiler_alias_TRUE$$ : D.$JSCompiler_alias_FALSE$$
};
D.$DvtOverview$$.prototype.$isFlashEnvironment$ = function $$DvtOverview$$$$$isFlashEnvironment$$() {
  return window && window.$isFlashEnvironment$
};
D.$DvtOverview$$.prototype.$createBackground$ = function $$DvtOverview$$$$$createBackground$$($width$$123$$, $height$$113$$) {
  var $background$$12$$ = new D.$DvtRect$$(this.$getCtx$(), 0, 0, $width$$123$$, $height$$113$$, "bg");
  $background$$12$$.$setSolidFill$(this.$_overviewBackgroundColor$);
  (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)($background$$12$$);
  this.$addChild$($background$$12$$);
  return $background$$12$$
};
D.$JSCompiler_StaticMethods_createGrippyImage$$ = function $$JSCompiler_StaticMethods_createGrippyImage$$$($JSCompiler_StaticMethods_createGrippyImage$self_grippy$$, $width$$125$$, $height$$115$$) {
  $JSCompiler_StaticMethods_createGrippyImage$self_grippy$$ = new D.$DvtImage$$($JSCompiler_StaticMethods_createGrippyImage$self_grippy$$.$getCtx$(), $JSCompiler_StaticMethods_createGrippyImage$self_grippy$$.$_handleBackgroundImage$, ($width$$125$$ - $JSCompiler_StaticMethods_createGrippyImage$self_grippy$$.$_handleWidth$) / 2, ($height$$115$$ - $JSCompiler_StaticMethods_createGrippyImage$self_grippy$$.$_handleHeight$) / 2, $JSCompiler_StaticMethods_createGrippyImage$self_grippy$$.$_handleWidth$, 
  $JSCompiler_StaticMethods_createGrippyImage$self_grippy$$.$_handleHeight$, "grpy");
  $JSCompiler_StaticMethods_createGrippyImage$self_grippy$$.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$);
  return $JSCompiler_StaticMethods_createGrippyImage$self_grippy$$
};
D.$JSCompiler_StaticMethods_createGrippy$$ = function $$JSCompiler_StaticMethods_createGrippy$$$($JSCompiler_StaticMethods_createGrippy$self$$, $handlePos$$) {
  var $grippy$$1$$ = new D.$DvtContainer$$($JSCompiler_StaticMethods_createGrippy$self$$.$getCtx$(), "grpy"), $color$$77$$ = $JSCompiler_StaticMethods_createGrippy$self$$.$_handleTextureColor$;
  if($JSCompiler_StaticMethods_createGrippy$self$$.$isVertical$()) {
    for(var $startx$$2$$ = 8 + $handlePos$$, $starty$$1$$ = 3, $i$$747$$ = 0;9 > $i$$747$$;$i$$747$$++) {
      var $dot$$ = new D.$DvtLine$$($JSCompiler_StaticMethods_createGrippy$self$$.$getCtx$(), $startx$$2$$ + 2 * $i$$747$$, $starty$$1$$, $startx$$2$$ + 2 * $i$$747$$ + 1, $starty$$1$$, "dot1" + $i$$747$$);
      $dot$$.$setSolidStroke$($color$$77$$);
      $grippy$$1$$.$addChild$($dot$$);
      $starty$$1$$ += 2;
      $dot$$ = new D.$DvtLine$$($JSCompiler_StaticMethods_createGrippy$self$$.$getCtx$(), $startx$$2$$ + 1 + 2 * $i$$747$$, $starty$$1$$, $startx$$2$$ + 1 + 2 * $i$$747$$ + 1, $starty$$1$$, "dot2" + $i$$747$$);
      $dot$$.$setSolidStroke$($color$$77$$);
      $grippy$$1$$.$addChild$($dot$$);
      $starty$$1$$ += 2;
      $dot$$ = new D.$DvtLine$$($JSCompiler_StaticMethods_createGrippy$self$$.$getCtx$(), $startx$$2$$ + 2 * $i$$747$$, $starty$$1$$, $startx$$2$$ + 2 * $i$$747$$ + 1, $starty$$1$$, "dot3" + $i$$747$$);
      $dot$$.$setSolidStroke$($color$$77$$);
      $grippy$$1$$.$addChild$($dot$$);
      $starty$$1$$ = 3
    }
    $dot$$ = new D.$DvtLine$$($JSCompiler_StaticMethods_createGrippy$self$$.$getCtx$(), $startx$$2$$ + 18, $starty$$1$$, $startx$$2$$ + 18 + 1, $starty$$1$$, "dot4");
    $dot$$.$setSolidStroke$($color$$77$$);
    $grippy$$1$$.$addChild$($dot$$);
    $starty$$1$$ += 4;
    $dot$$ = new D.$DvtLine$$($JSCompiler_StaticMethods_createGrippy$self$$.$getCtx$(), $startx$$2$$ + 18, $starty$$1$$, $startx$$2$$ + 18 + 1, $starty$$1$$, "dot5")
  }else {
    $startx$$2$$ = 3;
    $starty$$1$$ = 8 + $handlePos$$;
    for($i$$747$$ = 0;9 > $i$$747$$;$i$$747$$++) {
      $dot$$ = new D.$DvtLine$$($JSCompiler_StaticMethods_createGrippy$self$$.$getCtx$(), $startx$$2$$, $starty$$1$$ + 2 * $i$$747$$, $startx$$2$$, $starty$$1$$ + 2 * $i$$747$$ + 1, "dot1" + $i$$747$$), $dot$$.$setSolidStroke$($color$$77$$), $grippy$$1$$.$addChild$($dot$$), $startx$$2$$ += 2, $dot$$ = new D.$DvtLine$$($JSCompiler_StaticMethods_createGrippy$self$$.$getCtx$(), $startx$$2$$, $starty$$1$$ + 1 + 2 * $i$$747$$, $startx$$2$$, $starty$$1$$ + 1 + 2 * $i$$747$$ + 1, "dot2" + $i$$747$$), $dot$$.$setSolidStroke$($color$$77$$), 
      $grippy$$1$$.$addChild$($dot$$), $startx$$2$$ += 2, $dot$$ = new D.$DvtLine$$($JSCompiler_StaticMethods_createGrippy$self$$.$getCtx$(), $startx$$2$$, $starty$$1$$ + 2 * $i$$747$$, $startx$$2$$, $starty$$1$$ + 2 * $i$$747$$ + 1, "dot3" + $i$$747$$), $dot$$.$setSolidStroke$($color$$77$$), $grippy$$1$$.$addChild$($dot$$), $startx$$2$$ = 3
    }
    $dot$$ = new D.$DvtLine$$($JSCompiler_StaticMethods_createGrippy$self$$.$getCtx$(), $startx$$2$$, $starty$$1$$ + 18, $startx$$2$$, $starty$$1$$ + 18 + 1, "dot4");
    $dot$$.$setSolidStroke$($color$$77$$);
    $grippy$$1$$.$addChild$($dot$$);
    $startx$$2$$ += 4;
    $dot$$ = new D.$DvtLine$$($JSCompiler_StaticMethods_createGrippy$self$$.$getCtx$(), $startx$$2$$, $starty$$1$$ + 18, $startx$$2$$, $starty$$1$$ + 18 + 1, "dot5")
  }
  $dot$$.$setSolidStroke$($color$$77$$);
  $grippy$$1$$.$addChild$($dot$$);
  (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)($grippy$$1$$);
  return $grippy$$1$$
};
D.$JSCompiler_StaticMethods_getRectSize$$ = function $$JSCompiler_StaticMethods_getRectSize$$$($JSCompiler_StaticMethods_getRectSize$self$$, $rect$$41$$) {
  return $JSCompiler_StaticMethods_getRectSize$self$$.$isVertical$() ? $rect$$41$$.getHeight() : $rect$$41$$.getWidth()
};
D.$JSCompiler_StaticMethods_getSlidingWindowPos$$ = function $$JSCompiler_StaticMethods_getSlidingWindowPos$$$($JSCompiler_StaticMethods_getSlidingWindowPos$self$$, $slidingWindow$$4$$) {
  return $JSCompiler_StaticMethods_getSlidingWindowPos$self$$.$isVertical$() ? $slidingWindow$$4$$.$getTranslateY$() : $slidingWindow$$4$$.$getTranslateX$()
};
D.$JSCompiler_StaticMethods_setSlidingWindowPos$$ = function $$JSCompiler_StaticMethods_setSlidingWindowPos$$$($JSCompiler_StaticMethods_setSlidingWindowPos$self$$, $rightStart_slidingWindow$$5$$, $pos$$57$$) {
  $pos$$57$$ = window.Math.max(0, $pos$$57$$);
  $JSCompiler_StaticMethods_setSlidingWindowPos$self$$.$isVertical$() ? $rightStart_slidingWindow$$5$$.$setTranslateY$($pos$$57$$) : $rightStart_slidingWindow$$5$$.$setTranslateX$($pos$$57$$);
  if($JSCompiler_StaticMethods_setSlidingWindowPos$self$$.$isLeftAndRightFilterRendered$()) {
    (0,D.$JSCompiler_StaticMethods_getLeftBackground$$)($JSCompiler_StaticMethods_setSlidingWindowPos$self$$).$setWidth$($pos$$57$$);
    $rightStart_slidingWindow$$5$$ = $pos$$57$$ + (0,D.$JSCompiler_StaticMethods_getRectSize$$)($JSCompiler_StaticMethods_setSlidingWindowPos$self$$, $rightStart_slidingWindow$$5$$);
    var $handleStart$$1_rightBackground$$1$$ = (0,D.$JSCompiler_StaticMethods_getRightBackground$$)($JSCompiler_StaticMethods_setSlidingWindowPos$self$$);
    $handleStart$$1_rightBackground$$1$$.$setX$($rightStart_slidingWindow$$5$$);
    $handleStart$$1_rightBackground$$1$$.$setWidth$(window.Math.max(0, $JSCompiler_StaticMethods_setSlidingWindowPos$self$$.$Width$ - $rightStart_slidingWindow$$5$$));
    D.$DvtTimeUtils$$.$supportsTouch$() && !(0,D.$JSCompiler_StaticMethods_isFeatureOff$$)($JSCompiler_StaticMethods_setSlidingWindowPos$self$$) && ($handleStart$$1_rightBackground$$1$$ = (0,D.$JSCompiler_StaticMethods_getHandleStart$$)(), ($JSCompiler_StaticMethods_setSlidingWindowPos$self$$.$isLeftAndRightFilterRendered$() && !(0,D.$JSCompiler_StaticMethods_isFeatureOff$$)($JSCompiler_StaticMethods_setSlidingWindowPos$self$$) ? $JSCompiler_StaticMethods_setSlidingWindowPos$self$$.$getChildAt$(5) : 
    D.$JSCompiler_alias_NULL$$).$setX$($pos$$57$$ - $handleStart$$1_rightBackground$$1$$), (0,D.$JSCompiler_StaticMethods_getRightBackgroundHandle$$)($JSCompiler_StaticMethods_setSlidingWindowPos$self$$).$setX$($rightStart_slidingWindow$$5$$))
  }
};
D.$JSCompiler_StaticMethods_setSlidingWindowSize$$ = function $$JSCompiler_StaticMethods_setSlidingWindowSize$$$($JSCompiler_StaticMethods_setSlidingWindowSize$self$$, $rightGrippy$$1_slidingWindow$$7$$, $size$$41$$) {
  $size$$41$$ = window.Math.max((0,D.$JSCompiler_StaticMethods_getMinimumWindowSize$$)($JSCompiler_StaticMethods_setSlidingWindowSize$self$$), $size$$41$$);
  var $rightHandleBackground$$1_rightStart$$1_size$$inline_7513$$ = $size$$41$$ = window.Math.min($JSCompiler_StaticMethods_setSlidingWindowSize$self$$.$isVertical$() ? $JSCompiler_StaticMethods_setSlidingWindowSize$self$$.$Height$ : $JSCompiler_StaticMethods_setSlidingWindowSize$self$$.$Width$, $size$$41$$);
  $JSCompiler_StaticMethods_setSlidingWindowSize$self$$.$isVertical$() ? $rightGrippy$$1_slidingWindow$$7$$.$setHeight$($rightHandleBackground$$1_rightStart$$1_size$$inline_7513$$) : $rightGrippy$$1_slidingWindow$$7$$.$setWidth$($rightHandleBackground$$1_rightStart$$1_size$$inline_7513$$);
  if($JSCompiler_StaticMethods_setSlidingWindowSize$self$$.$isLeftAndRightFilterRendered$()) {
    var $rightHandleBackground$$1_rightStart$$1_size$$inline_7513$$ = (0,D.$JSCompiler_StaticMethods_getSlidingWindowPos$$)($JSCompiler_StaticMethods_setSlidingWindowSize$self$$, $rightGrippy$$1_slidingWindow$$7$$) + $size$$41$$, $rightBackground$$2_rightHandle$$2$$ = (0,D.$JSCompiler_StaticMethods_getRightBackground$$)($JSCompiler_StaticMethods_setSlidingWindowSize$self$$);
    $rightBackground$$2_rightHandle$$2$$.$setX$($rightHandleBackground$$1_rightStart$$1_size$$inline_7513$$);
    $rightBackground$$2_rightHandle$$2$$.$setWidth$(window.Math.max(0, $JSCompiler_StaticMethods_setSlidingWindowSize$self$$.$Width$ - $rightHandleBackground$$1_rightStart$$1_size$$inline_7513$$));
    D.$DvtTimeUtils$$.$supportsTouch$() && !(0,D.$JSCompiler_StaticMethods_isFeatureOff$$)($JSCompiler_StaticMethods_setSlidingWindowSize$self$$) && (0,D.$JSCompiler_StaticMethods_getRightBackgroundHandle$$)($JSCompiler_StaticMethods_setSlidingWindowSize$self$$).$setX$($rightHandleBackground$$1_rightStart$$1_size$$inline_7513$$)
  }
  (0,D.$JSCompiler_StaticMethods_isFeatureOff$$)($JSCompiler_StaticMethods_setSlidingWindowSize$self$$) || ($rightHandleBackground$$1_rightStart$$1_size$$inline_7513$$ = $rightGrippy$$1_slidingWindow$$7$$.$getChildAt$(3), $rightBackground$$2_rightHandle$$2$$ = $rightGrippy$$1_slidingWindow$$7$$.$getChildAt$(4), $rightGrippy$$1_slidingWindow$$7$$ = $rightGrippy$$1_slidingWindow$$7$$.$getChildAt$(5), $JSCompiler_StaticMethods_setSlidingWindowSize$self$$.$isVertical$() ? ($rightBackground$$2_rightHandle$$2$$.$setTranslateY$($size$$41$$), 
  $rightHandleBackground$$1_rightStart$$1_size$$inline_7513$$.$setTranslateY$($size$$41$$ - (0,D.$JSCompiler_StaticMethods_getHandleSize$$)()), $rightGrippy$$1_slidingWindow$$7$$.$setTranslateY$($size$$41$$ - 10)) : ($rightBackground$$2_rightHandle$$2$$.$setTranslateX$($size$$41$$), $rightHandleBackground$$1_rightStart$$1_size$$inline_7513$$.$setTranslateX$($size$$41$$ - (0,D.$JSCompiler_StaticMethods_getHandleSize$$)()), $rightGrippy$$1_slidingWindow$$7$$.$setTranslateX$($size$$41$$ - 10)))
};
D.$DvtOverview$$.prototype.$addTick$ = function $$DvtOverview$$$$$addTick$$($line$$14_pos$$58$$, $stroke$$99_width$$129$$, $height$$119$$, $id$$245$$) {
  $line$$14_pos$$58$$ = this.$isVertical$() ? new D.$DvtLine$$(this.$getCtx$(), 0, $line$$14_pos$$58$$, $stroke$$99_width$$129$$, $line$$14_pos$$58$$, $id$$245$$) : new D.$DvtLine$$(this.$getCtx$(), $line$$14_pos$$58$$, 0, $line$$14_pos$$58$$, $height$$119$$, $id$$245$$);
  $stroke$$99_width$$129$$ = new D.$DvtSolidStroke$$(this.$_timeIndicatorColor$);
  $stroke$$99_width$$129$$.$setStyle$(1, 3);
  $line$$14_pos$$58$$.$setStroke$($stroke$$99_width$$129$$);
  (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)($line$$14_pos$$58$$);
  this.$addChild$($line$$14_pos$$58$$)
};
D.$DvtOverview$$.prototype.$addLabel$ = function $$DvtOverview$$$$$addLabel$$($pos$$59$$, $label$$72_text$$102$$, $width$$130_y$$225$$, $height$$120$$, $maxWidth$$25$$, $id$$246$$, $dim$$64_labelStyle$$19$$) {
  $dim$$64_labelStyle$$19$$ = $dim$$64_labelStyle$$19$$ || new D.$DvtCSSStyle$$("font-weight:bold");
  this.$isVertical$() ? ($label$$72_text$$102$$ = new D.$DvtOutputText$$(this.$getCtx$(), $label$$72_text$$102$$, 4, $pos$$59$$, $id$$246$$), $label$$72_text$$102$$.$setCSSStyle$($dim$$64_labelStyle$$19$$), this.$isRTL$() && (this.$addChild$($label$$72_text$$102$$), $dim$$64_labelStyle$$19$$ = $label$$72_text$$102$$.$getDimensions$(), this.removeChild($label$$72_text$$102$$), $label$$72_text$$102$$.$setX$(window.Math.max(4, this.$Width$ - $dim$$64_labelStyle$$19$$.$w$ - 4)))) : ($width$$130_y$$225$$ = 
  "above" == this.$_overviewPosition$ ? 2 : $height$$120$$ - (0,D.$JSCompiler_StaticMethods_getTimeAxisHeight$$)(this) + 2, $label$$72_text$$102$$ = new D.$DvtOutputText$$(this.$getCtx$(), $label$$72_text$$102$$, $pos$$59$$ + 5, $width$$130_y$$225$$, $id$$246$$), $label$$72_text$$102$$.$setCSSStyle$($dim$$64_labelStyle$$19$$), (0,D.$JSCompiler_StaticMethods_isHorizontalRTL$$)(this) && (this.$addChild$($label$$72_text$$102$$), $dim$$64_labelStyle$$19$$ = $label$$72_text$$102$$.$getDimensions$(), this.removeChild($label$$72_text$$102$$), 
  $label$$72_text$$102$$.$setX$($pos$$59$$ - window.Math.min($dim$$64_labelStyle$$19$$.$w$, $maxWidth$$25$$) - 5)));
  D.$DvtTextUtils$$.$fitText$($label$$72_text$$102$$, $maxWidth$$25$$, window.Infinity, this);
  $label$$72_text$$102$$.$_rawText$ = $label$$72_text$$102$$.$getUntruncatedTextString$()
};
D.$DvtOverview$$.prototype.$parseDataXML$ = (0,D.$JSCompiler_emptyFn$$)();
D.$JSCompiler_StaticMethods_animateSlidingWindow$$ = function $$JSCompiler_StaticMethods_animateSlidingWindow$$$($JSCompiler_StaticMethods_animateSlidingWindow$self$$, $newLeft$$2$$) {
  var $handleStart$$2_leftBackground$$2_rightBackground$$3_slidingWindow$$8$$ = $JSCompiler_StaticMethods_animateSlidingWindow$self$$.$getChildAt$(1);
  $handleStart$$2_leftBackground$$2_rightBackground$$3_slidingWindow$$8$$.$getChildAt$(3);
  $handleStart$$2_leftBackground$$2_rightBackground$$3_slidingWindow$$8$$.$getChildAt$(4);
  $handleStart$$2_leftBackground$$2_rightBackground$$3_slidingWindow$$8$$.$getChildAt$(5);
  if($newLeft$$2$$ != (0,D.$JSCompiler_StaticMethods_getSlidingWindowPos$$)($JSCompiler_StaticMethods_animateSlidingWindow$self$$, $handleStart$$2_leftBackground$$2_rightBackground$$3_slidingWindow$$8$$)) {
    var $leftBackgroundHandle$$1_leftHandle$$2_rightBackgroundGetter$$ = $JSCompiler_StaticMethods_animateSlidingWindow$self$$.$getChildAt$($JSCompiler_StaticMethods_animateSlidingWindow$self$$.$getNumChildren$() - $JSCompiler_StaticMethods_animateSlidingWindow$self$$.$_lastChildIndex$), $leftBackgroundHandleGetter_rightBackgroundSetter_rightHandle$$3$$ = (0,D.$JSCompiler_StaticMethods_getRightHandle$$)($JSCompiler_StaticMethods_animateSlidingWindow$self$$), $leftBackgroundHandleSetter_leftTopBar$$1_rightBackgroundPosGetter$$ = 
    $JSCompiler_StaticMethods_animateSlidingWindow$self$$.$getChildAt$($JSCompiler_StaticMethods_animateSlidingWindow$self$$.$getNumChildren$() - ($JSCompiler_StaticMethods_animateSlidingWindow$self$$.$_lastChildIndex$ - 2)), $rightBackgroundHandle$$2_rightBackgroundPosSetter_rightTopBar$$1$$ = $JSCompiler_StaticMethods_animateSlidingWindow$self$$.$getChildAt$($JSCompiler_StaticMethods_animateSlidingWindow$self$$.$getNumChildren$() - ($JSCompiler_StaticMethods_animateSlidingWindow$self$$.$_lastChildIndex$ - 
    3)), $bottomBar$$1_rightBackgroundHandleGetter_timelineSize$$ = $JSCompiler_StaticMethods_animateSlidingWindow$self$$.$getChildAt$($JSCompiler_StaticMethods_animateSlidingWindow$self$$.$getNumChildren$() - ($JSCompiler_StaticMethods_animateSlidingWindow$self$$.$_lastChildIndex$ - 4)), $rightBackgroundHandleSetter_topBar$$1$$ = $JSCompiler_StaticMethods_animateSlidingWindow$self$$.$getChildAt$($JSCompiler_StaticMethods_animateSlidingWindow$self$$.$getNumChildren$() - ($JSCompiler_StaticMethods_animateSlidingWindow$self$$.$_lastChildIndex$ - 
    5));
    if($JSCompiler_StaticMethods_animateSlidingWindow$self$$.$isVertical$()) {
      var $posGetter$$ = $handleStart$$2_leftBackground$$2_rightBackground$$3_slidingWindow$$8$$.$getTranslateY$, $posSetter$$ = $handleStart$$2_leftBackground$$2_rightBackground$$3_slidingWindow$$8$$.$setTranslateY$, $leftHandlePos1Getter$$ = $leftBackgroundHandle$$1_leftHandle$$2_rightBackgroundGetter$$.$getY1$, $leftHandlePos1Setter$$ = $leftBackgroundHandle$$1_leftHandle$$2_rightBackgroundGetter$$.$setY1$, $leftHandlePos2Getter$$ = $leftBackgroundHandle$$1_leftHandle$$2_rightBackgroundGetter$$.$getY2$, 
      $leftHandlePos2Setter$$ = $leftBackgroundHandle$$1_leftHandle$$2_rightBackgroundGetter$$.$setY2$, $rightHandlePos1Getter$$ = $leftBackgroundHandleGetter_rightBackgroundSetter_rightHandle$$3$$.$getY1$, $rightHandlePos1Setter$$ = $leftBackgroundHandleGetter_rightBackgroundSetter_rightHandle$$3$$.$setY1$, $rightHandlePos2Getter$$ = $leftBackgroundHandleGetter_rightBackgroundSetter_rightHandle$$3$$.$getY2$, $rightHandlePos2Setter$$ = $leftBackgroundHandleGetter_rightBackgroundSetter_rightHandle$$3$$.$setY2$, 
      $leftTopBarPosGetter$$ = $leftBackgroundHandleSetter_leftTopBar$$1_rightBackgroundPosGetter$$.$getY2$, $leftTopBarPosSetter$$ = $leftBackgroundHandleSetter_leftTopBar$$1_rightBackgroundPosGetter$$.$setY2$, $rightTopBarPosGetter$$ = $rightBackgroundHandle$$2_rightBackgroundPosSetter_rightTopBar$$1$$.$getY1$, $rightTopBarPosSetter$$ = $rightBackgroundHandle$$2_rightBackgroundPosSetter_rightTopBar$$1$$.$setY1$, $bottomBarPos1Getter$$ = $bottomBar$$1_rightBackgroundHandleGetter_timelineSize$$.$getY1$, 
      $bottomBarPos1Setter$$ = $bottomBar$$1_rightBackgroundHandleGetter_timelineSize$$.$setY1$, $bottomBarPos2Getter$$ = $bottomBar$$1_rightBackgroundHandleGetter_timelineSize$$.$getY2$, $bottomBarPos2Setter$$ = $bottomBar$$1_rightBackgroundHandleGetter_timelineSize$$.$setY2$, $topBarPos1Getter$$ = $rightBackgroundHandleSetter_topBar$$1$$.$getY1$, $topBarPos1Setter$$ = $rightBackgroundHandleSetter_topBar$$1$$.$setY1$, $topBarPos2Getter$$ = $rightBackgroundHandleSetter_topBar$$1$$.$getY2$, $topBarPos2Setter$$ = 
      $rightBackgroundHandleSetter_topBar$$1$$.$setY2$
    }else {
      $posGetter$$ = $handleStart$$2_leftBackground$$2_rightBackground$$3_slidingWindow$$8$$.$getTranslateX$, $posSetter$$ = $handleStart$$2_leftBackground$$2_rightBackground$$3_slidingWindow$$8$$.$setTranslateX$, $leftHandlePos1Getter$$ = $leftBackgroundHandle$$1_leftHandle$$2_rightBackgroundGetter$$.$getX1$, $leftHandlePos1Setter$$ = $leftBackgroundHandle$$1_leftHandle$$2_rightBackgroundGetter$$.$setX1$, $leftHandlePos2Getter$$ = $leftBackgroundHandle$$1_leftHandle$$2_rightBackgroundGetter$$.$getX2$, 
      $leftHandlePos2Setter$$ = $leftBackgroundHandle$$1_leftHandle$$2_rightBackgroundGetter$$.$setX2$, $rightHandlePos1Getter$$ = $leftBackgroundHandleGetter_rightBackgroundSetter_rightHandle$$3$$.$getX1$, $rightHandlePos1Setter$$ = $leftBackgroundHandleGetter_rightBackgroundSetter_rightHandle$$3$$.$setX1$, $rightHandlePos2Getter$$ = $leftBackgroundHandleGetter_rightBackgroundSetter_rightHandle$$3$$.$getX2$, $rightHandlePos2Setter$$ = $leftBackgroundHandleGetter_rightBackgroundSetter_rightHandle$$3$$.$setX2$, 
      $leftTopBarPosGetter$$ = $leftBackgroundHandleSetter_leftTopBar$$1_rightBackgroundPosGetter$$.$getX2$, $leftTopBarPosSetter$$ = $leftBackgroundHandleSetter_leftTopBar$$1_rightBackgroundPosGetter$$.$setX2$, $rightTopBarPosGetter$$ = $rightBackgroundHandle$$2_rightBackgroundPosSetter_rightTopBar$$1$$.$getX1$, $rightTopBarPosSetter$$ = $rightBackgroundHandle$$2_rightBackgroundPosSetter_rightTopBar$$1$$.$setX1$, $bottomBarPos1Getter$$ = $bottomBar$$1_rightBackgroundHandleGetter_timelineSize$$.$getX1$, 
      $bottomBarPos1Setter$$ = $bottomBar$$1_rightBackgroundHandleGetter_timelineSize$$.$setX1$, $bottomBarPos2Getter$$ = $bottomBar$$1_rightBackgroundHandleGetter_timelineSize$$.$getX2$, $bottomBarPos2Setter$$ = $bottomBar$$1_rightBackgroundHandleGetter_timelineSize$$.$setX2$, $topBarPos1Getter$$ = $rightBackgroundHandleSetter_topBar$$1$$.$getX1$, $topBarPos1Setter$$ = $rightBackgroundHandleSetter_topBar$$1$$.$setX1$, $topBarPos2Getter$$ = $rightBackgroundHandleSetter_topBar$$1$$.$getX2$, $topBarPos2Setter$$ = 
      $rightBackgroundHandleSetter_topBar$$1$$.$setX2$
    }
    var $animator$$105_minPos$$ = $JSCompiler_StaticMethods_animateSlidingWindow$self$$.$_leftMargin$, $maxPos$$ = (0,D.$JSCompiler_StaticMethods_getMaximumPosition$$)($JSCompiler_StaticMethods_animateSlidingWindow$self$$), $rightStart$$2_slidingWindowSize$$ = (0,D.$JSCompiler_StaticMethods_getRectSize$$)($JSCompiler_StaticMethods_animateSlidingWindow$self$$, $handleStart$$2_leftBackground$$2_rightBackground$$3_slidingWindow$$8$$);
    $newLeft$$2$$ = window.Math.max($animator$$105_minPos$$, window.Math.min($maxPos$$ - $rightStart$$2_slidingWindowSize$$, $newLeft$$2$$));
    $animator$$105_minPos$$ = "off" !== $JSCompiler_StaticMethods_animateSlidingWindow$self$$.$_animationOnClick$ ? new D.$DvtAnimator$$($JSCompiler_StaticMethods_animateSlidingWindow$self$$.$getCtx$(), 0.5, 0, D.$DvtEasing$linear$$) : D.$JSCompiler_alias_NULL$$;
    (0,D.$JSCompiler_StaticMethods_animateProperty$$)($animator$$105_minPos$$, $handleStart$$2_leftBackground$$2_rightBackground$$3_slidingWindow$$8$$, $posGetter$$, $posSetter$$, $newLeft$$2$$);
    (0,D.$JSCompiler_StaticMethods_animateProperty$$)($animator$$105_minPos$$, $leftBackgroundHandle$$1_leftHandle$$2_rightBackgroundGetter$$, $leftHandlePos1Getter$$, $leftHandlePos1Setter$$, $newLeft$$2$$);
    (0,D.$JSCompiler_StaticMethods_animateProperty$$)($animator$$105_minPos$$, $leftBackgroundHandle$$1_leftHandle$$2_rightBackgroundGetter$$, $leftHandlePos2Getter$$, $leftHandlePos2Setter$$, $newLeft$$2$$);
    (0,D.$JSCompiler_StaticMethods_animateProperty$$)($animator$$105_minPos$$, $leftBackgroundHandleGetter_rightBackgroundSetter_rightHandle$$3$$, $rightHandlePos1Getter$$, $rightHandlePos1Setter$$, $newLeft$$2$$ + $rightStart$$2_slidingWindowSize$$);
    (0,D.$JSCompiler_StaticMethods_animateProperty$$)($animator$$105_minPos$$, $leftBackgroundHandleGetter_rightBackgroundSetter_rightHandle$$3$$, $rightHandlePos2Getter$$, $rightHandlePos2Setter$$, $newLeft$$2$$ + $rightStart$$2_slidingWindowSize$$);
    (0,D.$JSCompiler_StaticMethods_animateProperty$$)($animator$$105_minPos$$, $leftBackgroundHandleSetter_leftTopBar$$1_rightBackgroundPosGetter$$, $leftTopBarPosGetter$$, $leftTopBarPosSetter$$, $newLeft$$2$$ + 1);
    (0,D.$JSCompiler_StaticMethods_animateProperty$$)($animator$$105_minPos$$, $rightBackgroundHandle$$2_rightBackgroundPosSetter_rightTopBar$$1$$, $rightTopBarPosGetter$$, $rightTopBarPosSetter$$, $newLeft$$2$$ + $rightStart$$2_slidingWindowSize$$ - 1);
    (0,D.$JSCompiler_StaticMethods_animateProperty$$)($animator$$105_minPos$$, $bottomBar$$1_rightBackgroundHandleGetter_timelineSize$$, $bottomBarPos1Getter$$, $bottomBarPos1Setter$$, $newLeft$$2$$);
    (0,D.$JSCompiler_StaticMethods_animateProperty$$)($animator$$105_minPos$$, $rightBackgroundHandleSetter_topBar$$1$$, $topBarPos1Getter$$, $topBarPos1Setter$$, $newLeft$$2$$);
    (0,D.$JSCompiler_StaticMethods_animateProperty$$)($animator$$105_minPos$$, $bottomBar$$1_rightBackgroundHandleGetter_timelineSize$$, $bottomBarPos2Getter$$, $bottomBarPos2Setter$$, $newLeft$$2$$ + $rightStart$$2_slidingWindowSize$$);
    (0,D.$JSCompiler_StaticMethods_animateProperty$$)($animator$$105_minPos$$, $rightBackgroundHandleSetter_topBar$$1$$, $topBarPos2Getter$$, $topBarPos2Setter$$, $newLeft$$2$$ + $rightStart$$2_slidingWindowSize$$);
    $JSCompiler_StaticMethods_animateSlidingWindow$self$$.$isLeftAndRightFilterRendered$() && ($handleStart$$2_leftBackground$$2_rightBackground$$3_slidingWindow$$8$$ = (0,D.$JSCompiler_StaticMethods_getLeftBackground$$)($JSCompiler_StaticMethods_animateSlidingWindow$self$$), (0,D.$JSCompiler_StaticMethods_animateProperty$$)($animator$$105_minPos$$, $handleStart$$2_leftBackground$$2_rightBackground$$3_slidingWindow$$8$$, $handleStart$$2_leftBackground$$2_rightBackground$$3_slidingWindow$$8$$.getWidth, 
    $handleStart$$2_leftBackground$$2_rightBackground$$3_slidingWindow$$8$$.$setWidth$, $newLeft$$2$$), $rightStart$$2_slidingWindowSize$$ = $newLeft$$2$$ + $rightStart$$2_slidingWindowSize$$, $handleStart$$2_leftBackground$$2_rightBackground$$3_slidingWindow$$8$$ = (0,D.$JSCompiler_StaticMethods_getRightBackground$$)($JSCompiler_StaticMethods_animateSlidingWindow$self$$), $leftBackgroundHandle$$1_leftHandle$$2_rightBackgroundGetter$$ = $handleStart$$2_leftBackground$$2_rightBackground$$3_slidingWindow$$8$$.getWidth, 
    $leftBackgroundHandleGetter_rightBackgroundSetter_rightHandle$$3$$ = $handleStart$$2_leftBackground$$2_rightBackground$$3_slidingWindow$$8$$.$setWidth$, $leftBackgroundHandleSetter_leftTopBar$$1_rightBackgroundPosGetter$$ = $handleStart$$2_leftBackground$$2_rightBackground$$3_slidingWindow$$8$$.$getX$, $rightBackgroundHandle$$2_rightBackgroundPosSetter_rightTopBar$$1$$ = $handleStart$$2_leftBackground$$2_rightBackground$$3_slidingWindow$$8$$.$setX$, $bottomBar$$1_rightBackgroundHandleGetter_timelineSize$$ = 
    $JSCompiler_StaticMethods_animateSlidingWindow$self$$.$isVertical$() ? $JSCompiler_StaticMethods_animateSlidingWindow$self$$.$Height$ : $JSCompiler_StaticMethods_animateSlidingWindow$self$$.$Width$, (0,D.$JSCompiler_StaticMethods_animateProperty$$)($animator$$105_minPos$$, $handleStart$$2_leftBackground$$2_rightBackground$$3_slidingWindow$$8$$, $leftBackgroundHandle$$1_leftHandle$$2_rightBackgroundGetter$$, $leftBackgroundHandleGetter_rightBackgroundSetter_rightHandle$$3$$, $bottomBar$$1_rightBackgroundHandleGetter_timelineSize$$ - 
    $rightStart$$2_slidingWindowSize$$), (0,D.$JSCompiler_StaticMethods_animateProperty$$)($animator$$105_minPos$$, $handleStart$$2_leftBackground$$2_rightBackground$$3_slidingWindow$$8$$, $leftBackgroundHandleSetter_leftTopBar$$1_rightBackgroundPosGetter$$, $rightBackgroundHandle$$2_rightBackgroundPosSetter_rightTopBar$$1$$, $rightStart$$2_slidingWindowSize$$), D.$DvtTimeUtils$$.$supportsTouch$() && !(0,D.$JSCompiler_StaticMethods_isFeatureOff$$)($JSCompiler_StaticMethods_animateSlidingWindow$self$$) && 
    ($handleStart$$2_leftBackground$$2_rightBackground$$3_slidingWindow$$8$$ = (0,D.$JSCompiler_StaticMethods_getHandleStart$$)(), $leftBackgroundHandle$$1_leftHandle$$2_rightBackgroundGetter$$ = $JSCompiler_StaticMethods_animateSlidingWindow$self$$.$isLeftAndRightFilterRendered$() && !(0,D.$JSCompiler_StaticMethods_isFeatureOff$$)($JSCompiler_StaticMethods_animateSlidingWindow$self$$) ? $JSCompiler_StaticMethods_animateSlidingWindow$self$$.$getChildAt$(5) : D.$JSCompiler_alias_NULL$$, $leftBackgroundHandleGetter_rightBackgroundSetter_rightHandle$$3$$ = 
    $leftBackgroundHandle$$1_leftHandle$$2_rightBackgroundGetter$$.$getX$, $leftBackgroundHandleSetter_leftTopBar$$1_rightBackgroundPosGetter$$ = $leftBackgroundHandle$$1_leftHandle$$2_rightBackgroundGetter$$.$setX$, $rightBackgroundHandle$$2_rightBackgroundPosSetter_rightTopBar$$1$$ = (0,D.$JSCompiler_StaticMethods_getRightBackgroundHandle$$)($JSCompiler_StaticMethods_animateSlidingWindow$self$$), $bottomBar$$1_rightBackgroundHandleGetter_timelineSize$$ = $rightBackgroundHandle$$2_rightBackgroundPosSetter_rightTopBar$$1$$.$getX$, 
    $rightBackgroundHandleSetter_topBar$$1$$ = $rightBackgroundHandle$$2_rightBackgroundPosSetter_rightTopBar$$1$$.$setX$, (0,D.$JSCompiler_StaticMethods_animateProperty$$)($animator$$105_minPos$$, $leftBackgroundHandle$$1_leftHandle$$2_rightBackgroundGetter$$, $leftBackgroundHandleGetter_rightBackgroundSetter_rightHandle$$3$$, $leftBackgroundHandleSetter_leftTopBar$$1_rightBackgroundPosGetter$$, $newLeft$$2$$ - $handleStart$$2_leftBackground$$2_rightBackground$$3_slidingWindow$$8$$), (0,D.$JSCompiler_StaticMethods_animateProperty$$)($animator$$105_minPos$$, 
    $rightBackgroundHandle$$2_rightBackgroundPosSetter_rightTopBar$$1$$, $bottomBar$$1_rightBackgroundHandleGetter_timelineSize$$, $rightBackgroundHandleSetter_topBar$$1$$, $rightStart$$2_slidingWindowSize$$)));
    $animator$$105_minPos$$ != D.$JSCompiler_alias_NULL$$ && $animator$$105_minPos$$.play()
  }
};
D.$JSCompiler_StaticMethods_animateProperty$$ = function $$JSCompiler_StaticMethods_animateProperty$$$($animator$$106$$, $obj$$313$$, $getter$$5$$, $setter$$3$$, $value$$184$$) {
  $animator$$106$$ != D.$JSCompiler_alias_NULL$$ ? (0,D.$JSCompiler_StaticMethods_addProp$$)($animator$$106$$, "typeNumber", $obj$$313$$, $getter$$5$$, $setter$$3$$, $value$$184$$) : $setter$$3$$.call($obj$$313$$, $value$$184$$)
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtOverview$$.prototype;
D.$JSCompiler_prototypeAlias$$.$HandleShapeMouseOver$ = function $$JSCompiler_prototypeAlias$$$$HandleShapeMouseOver$$($event$$601_relPos$$56$$) {
  var $drawable$$2$$ = this.$_findDrawable$($event$$601_relPos$$56$$);
  if($drawable$$2$$ && !("bg" == $drawable$$2$$.getId() || "ocd" == $drawable$$2$$.getId())) {
    if("label" == $drawable$$2$$.getId().substr(0, 5) && ($drawable$$2$$ instanceof D.$DvtOutputText$$ || $drawable$$2$$ instanceof D.$DvtBackgroundOutputText$$)) {
      $drawable$$2$$.$isTruncated$() && this.$getCtx$().$getTooltipManager$().$showDatatip$($event$$601_relPos$$56$$.pageX, $event$$601_relPos$$56$$.pageY, $drawable$$2$$.$_rawText$, "#000000")
    }else {
      if(this.$_resizeArrow$ != D.$JSCompiler_alias_NULL$$ && (0,D.$JSCompiler_StaticMethods_isHandle$$)($drawable$$2$$) && ($event$$601_relPos$$56$$ = (0,D.$JSCompiler_StaticMethods_pageToStageCoords$$)(this.$getCtx$(), $event$$601_relPos$$56$$.pageX, $event$$601_relPos$$56$$.pageY), $event$$601_relPos$$56$$ = this.$stageToLocal$($event$$601_relPos$$56$$), this.$isVertical$() ? (0,D.$JSCompiler_StaticMethods_setTranslate$$)(this.$_resizeArrow$, $event$$601_relPos$$56$$.x + 6, $event$$601_relPos$$56$$.y - 
      10) : (0,D.$JSCompiler_StaticMethods_setTranslate$$)(this.$_resizeArrow$, $event$$601_relPos$$56$$.x - 6, $event$$601_relPos$$56$$.y - 20), this.$_resizeArrow$.$setVisible$(D.$JSCompiler_alias_TRUE$$)), "window" == $drawable$$2$$.getId() || "ftr" == $drawable$$2$$.getId() || "arr" == $drawable$$2$$.getId() || (0,D.$JSCompiler_StaticMethods_isHandle$$)($drawable$$2$$)) {
        this.$isFlashEnvironment$() && this.setCursor("move")
      }else {
        return $drawable$$2$$
      }
    }
  }
};
D.$JSCompiler_prototypeAlias$$.$HandleShapeMouseOut$ = function $$JSCompiler_prototypeAlias$$$$HandleShapeMouseOut$$($drawable$$3_event$$602$$) {
  this.$_moveDrawable$ == D.$JSCompiler_alias_NULL$$ && this.setCursor("default");
  $drawable$$3_event$$602$$ = this.$_findDrawable$($drawable$$3_event$$602$$);
  if($drawable$$3_event$$602$$ != D.$JSCompiler_alias_NULL$$) {
    return(0,D.$JSCompiler_StaticMethods_isHandle$$)($drawable$$3_event$$602$$) && this.$_resizeArrow$ != D.$JSCompiler_alias_NULL$$ && this.$_resizeArrow$.$setVisible$(D.$JSCompiler_alias_FALSE$$), $drawable$$3_event$$602$$
  }
};
D.$JSCompiler_prototypeAlias$$.$HandleShapeClick$ = function $$JSCompiler_prototypeAlias$$$$HandleShapeClick$$($event$$603_newEndTime_relPos$$57_slidingWindow$$9$$, $newPos$$1_pageX$$10$$, $evt$$53_pageY$$10_pos$$60$$) {
  $event$$603_newEndTime_relPos$$57_slidingWindow$$9$$.stopPropagation();
  var $drawable$$4_newStartTime_size$$44$$ = this.$_findDrawable$($event$$603_newEndTime_relPos$$57_slidingWindow$$9$$);
  if($drawable$$4_newStartTime_size$$44$$ && !("window" == $drawable$$4_newStartTime_size$$44$$.getId() || (0,D.$JSCompiler_StaticMethods_isHandle$$)($drawable$$4_newStartTime_size$$44$$))) {
    if("bg" == $drawable$$4_newStartTime_size$$44$$.getId() || "label" == $drawable$$4_newStartTime_size$$44$$.getId().substr(0, 5) || "ocd" == $drawable$$4_newStartTime_size$$44$$.getId() || "lbg" == $drawable$$4_newStartTime_size$$44$$.getId() || "rbg" == $drawable$$4_newStartTime_size$$44$$.getId()) {
      $newPos$$1_pageX$$10$$ == D.$JSCompiler_alias_VOID$$ && ($newPos$$1_pageX$$10$$ = $event$$603_newEndTime_relPos$$57_slidingWindow$$9$$.pageX);
      $evt$$53_pageY$$10_pos$$60$$ == D.$JSCompiler_alias_VOID$$ && ($evt$$53_pageY$$10_pos$$60$$ = $event$$603_newEndTime_relPos$$57_slidingWindow$$9$$.pageY);
      $event$$603_newEndTime_relPos$$57_slidingWindow$$9$$ = (0,D.$JSCompiler_StaticMethods_pageToStageCoords$$)(this.$getCtx$(), $newPos$$1_pageX$$10$$, $evt$$53_pageY$$10_pos$$60$$);
      $event$$603_newEndTime_relPos$$57_slidingWindow$$9$$ = this.$stageToLocal$($event$$603_newEndTime_relPos$$57_slidingWindow$$9$$);
      this.$isVertical$() ? ($evt$$53_pageY$$10_pos$$60$$ = $event$$603_newEndTime_relPos$$57_slidingWindow$$9$$.y, $drawable$$4_newStartTime_size$$44$$ = this.$Height$) : ($evt$$53_pageY$$10_pos$$60$$ = $event$$603_newEndTime_relPos$$57_slidingWindow$$9$$.x, $drawable$$4_newStartTime_size$$44$$ = this.$Width$);
      $event$$603_newEndTime_relPos$$57_slidingWindow$$9$$ = this.$getChildAt$(1);
      $newPos$$1_pageX$$10$$ = $evt$$53_pageY$$10_pos$$60$$ - (0,D.$JSCompiler_StaticMethods_getRectSize$$)(this, $event$$603_newEndTime_relPos$$57_slidingWindow$$9$$) / 2;
      (0,D.$JSCompiler_StaticMethods_animateSlidingWindow$$)(this, $newPos$$1_pageX$$10$$);
      (0,D.$JSCompiler_StaticMethods_isHorizontalRTL$$)(this) && ($evt$$53_pageY$$10_pos$$60$$ = this.$Width$ - $evt$$53_pageY$$10_pos$$60$$);
      var $time$$10$$ = this.$getPositionDate$($evt$$53_pageY$$10_pos$$60$$);
      $evt$$53_pageY$$10_pos$$60$$ = new D.$DvtOverviewEvent$$("scrollTime");
      $evt$$53_pageY$$10_pos$$60$$.setTime($time$$10$$);
      $newPos$$1_pageX$$10$$ = window.Math.max(0, window.Math.min($newPos$$1_pageX$$10$$, $drawable$$4_newStartTime_size$$44$$ - (0,D.$JSCompiler_StaticMethods_getRectSize$$)(this, $event$$603_newEndTime_relPos$$57_slidingWindow$$9$$)));
      (0,D.$JSCompiler_StaticMethods_isHorizontalRTL$$)(this) ? ($drawable$$4_newStartTime_size$$44$$ = this.$getPositionDate$(this.$Width$ - ($newPos$$1_pageX$$10$$ + (0,D.$JSCompiler_StaticMethods_getRectSize$$)(this, $event$$603_newEndTime_relPos$$57_slidingWindow$$9$$))), $event$$603_newEndTime_relPos$$57_slidingWindow$$9$$ = this.$getPositionDate$(this.$Width$ - $newPos$$1_pageX$$10$$)) : ($drawable$$4_newStartTime_size$$44$$ = this.$getPositionDate$($newPos$$1_pageX$$10$$), $event$$603_newEndTime_relPos$$57_slidingWindow$$9$$ = 
      this.$getPositionDate$($newPos$$1_pageX$$10$$ + (0,D.$JSCompiler_StaticMethods_getRectSize$$)(this, $event$$603_newEndTime_relPos$$57_slidingWindow$$9$$)));
      (0,D.$JSCompiler_StaticMethods_setNewStartTime$$)($evt$$53_pageY$$10_pos$$60$$, $drawable$$4_newStartTime_size$$44$$);
      (0,D.$JSCompiler_StaticMethods_setNewEndTime$$)($evt$$53_pageY$$10_pos$$60$$, $event$$603_newEndTime_relPos$$57_slidingWindow$$9$$);
      this.dispatchEvent($evt$$53_pageY$$10_pos$$60$$)
    }else {
      return $drawable$$4_newStartTime_size$$44$$
    }
  }
};
D.$JSCompiler_prototypeAlias$$.$beginDragPan$ = function $$JSCompiler_prototypeAlias$$$$beginDragPan$$($drawable$$5_event$$604_evt$$54$$, $compX_cursor$$inline_7516_slidingWindow$$10$$, $compY_drawableId_leftBackground$$inline_7518_slidingWindow$$inline_7517$$) {
  $drawable$$5_event$$604_evt$$54$$ = this.$_findDrawable$($drawable$$5_event$$604_evt$$54$$);
  if($drawable$$5_event$$604_evt$$54$$ != D.$JSCompiler_alias_NULL$$ && (0,D.$JSCompiler_StaticMethods_isMovable$$)($drawable$$5_event$$604_evt$$54$$)) {
    if("ftr" == $drawable$$5_event$$604_evt$$54$$.getId() || "sta" == $drawable$$5_event$$604_evt$$54$$.getId()) {
      $drawable$$5_event$$604_evt$$54$$ = this.$getChildAt$(1)
    }
    this.$_initX$ = $compX_cursor$$inline_7516_slidingWindow$$10$$;
    this.$_initY$ = $compY_drawableId_leftBackground$$inline_7518_slidingWindow$$inline_7517$$;
    if((0,D.$JSCompiler_StaticMethods_isHandle$$)($drawable$$5_event$$604_evt$$54$$)) {
      $compX_cursor$$inline_7516_slidingWindow$$10$$ = this.$getChildAt$(1);
      (0,D.$JSCompiler_StaticMethods_isHorizontalRTL$$)(this) ? (this.$_oldEndPos$ = this.$Width$ - $compX_cursor$$inline_7516_slidingWindow$$10$$.$getX$(), this.$_oldStartPos$ = this.$_oldEndPos$ - $compX_cursor$$inline_7516_slidingWindow$$10$$.getWidth()) : (this.$_oldStartPos$ = $compX_cursor$$inline_7516_slidingWindow$$10$$.$getX$(), this.$_oldEndPos$ = this.$_oldStartPos$ + $compX_cursor$$inline_7516_slidingWindow$$10$$.getWidth());
      "grpy" == $drawable$$5_event$$604_evt$$54$$.getParent().getId() && ($drawable$$5_event$$604_evt$$54$$ = $drawable$$5_event$$604_evt$$54$$.getParent());
      $compY_drawableId_leftBackground$$inline_7518_slidingWindow$$inline_7517$$ = $drawable$$5_event$$604_evt$$54$$.getId();
      "grpy" == $compY_drawableId_leftBackground$$inline_7518_slidingWindow$$inline_7517$$ && ($drawable$$5_event$$604_evt$$54$$ = $compX_cursor$$inline_7516_slidingWindow$$10$$.$getChildBefore$($drawable$$5_event$$604_evt$$54$$), $compY_drawableId_leftBackground$$inline_7518_slidingWindow$$inline_7517$$ = $drawable$$5_event$$604_evt$$54$$.getId());
      if("lh" == $compY_drawableId_leftBackground$$inline_7518_slidingWindow$$inline_7517$$ || "rh" == $compY_drawableId_leftBackground$$inline_7518_slidingWindow$$inline_7517$$) {
        $drawable$$5_event$$604_evt$$54$$ = $compX_cursor$$inline_7516_slidingWindow$$10$$.$getChildBefore$($drawable$$5_event$$604_evt$$54$$), $compY_drawableId_leftBackground$$inline_7518_slidingWindow$$inline_7517$$ = $drawable$$5_event$$604_evt$$54$$.getId()
      }
      "lbgrh" == $compY_drawableId_leftBackground$$inline_7518_slidingWindow$$inline_7517$$ && ($drawable$$5_event$$604_evt$$54$$ = $compX_cursor$$inline_7516_slidingWindow$$10$$.$getChildAt$(0));
      "rbgrh" == $compY_drawableId_leftBackground$$inline_7518_slidingWindow$$inline_7517$$ && ($drawable$$5_event$$604_evt$$54$$ = $compX_cursor$$inline_7516_slidingWindow$$10$$.$getChildAt$($compX_cursor$$inline_7516_slidingWindow$$10$$.$getNumChildren$() - 3));
      D.$DvtTimeUtils$$.$supportsTouch$() || (this.$isVertical$() ? ($drawable$$5_event$$604_evt$$54$$.$setY$(-20), $drawable$$5_event$$604_evt$$54$$.$setHeight$(2 * ($drawable$$5_event$$604_evt$$54$$.getHeight() + 20))) : ($drawable$$5_event$$604_evt$$54$$.$setX$(-20), $drawable$$5_event$$604_evt$$54$$.$setWidth$(2 * ($drawable$$5_event$$604_evt$$54$$.getWidth() + 20))));
      $compX_cursor$$inline_7516_slidingWindow$$10$$ = $drawable$$5_event$$604_evt$$54$$.getCursor();
      $compY_drawableId_leftBackground$$inline_7518_slidingWindow$$inline_7517$$ = this.$getChildAt$(1);
      $compY_drawableId_leftBackground$$inline_7518_slidingWindow$$inline_7517$$ != D.$JSCompiler_alias_NULL$$ && $compY_drawableId_leftBackground$$inline_7518_slidingWindow$$inline_7517$$.setCursor($compX_cursor$$inline_7516_slidingWindow$$10$$);
      if(this.$isLeftAndRightFilterRendered$()) {
        $compY_drawableId_leftBackground$$inline_7518_slidingWindow$$inline_7517$$ = (0,D.$JSCompiler_StaticMethods_getLeftBackground$$)(this);
        var $rightBackground$$inline_7519$$ = (0,D.$JSCompiler_StaticMethods_getRightBackground$$)(this);
        $compY_drawableId_leftBackground$$inline_7518_slidingWindow$$inline_7517$$ != D.$JSCompiler_alias_NULL$$ && $rightBackground$$inline_7519$$ != D.$JSCompiler_alias_NULL$$ && ($compY_drawableId_leftBackground$$inline_7518_slidingWindow$$inline_7517$$.setCursor($compX_cursor$$inline_7516_slidingWindow$$10$$), $rightBackground$$inline_7519$$.setCursor($compX_cursor$$inline_7516_slidingWindow$$10$$))
      }
    }
    this.$_moveDrawable$ = $drawable$$5_event$$604_evt$$54$$;
    $drawable$$5_event$$604_evt$$54$$ = new D.$DvtOverviewEvent$$("dropCallback");
    this.dispatchEvent($drawable$$5_event$$604_evt$$54$$);
    return D.$JSCompiler_alias_TRUE$$
  }
  return D.$JSCompiler_alias_FALSE$$
};
D.$JSCompiler_prototypeAlias$$.$endDragPan$ = function $$JSCompiler_prototypeAlias$$$$endDragPan$$() {
  if(this.$_moveDrawable$ != D.$JSCompiler_alias_NULL$$) {
    if("window" == this.$_moveDrawable$.getId()) {
      this.$finishWindowDrag$(0, 0)
    }else {
      if((0,D.$JSCompiler_StaticMethods_isHandle$$)(this.$_moveDrawable$)) {
        this.$finishHandleDrag$();
        D.$DvtTimeUtils$$.$supportsTouch$() || (this.$isVertical$() ? (this.$_moveDrawable$.$setY$(0), this.$_moveDrawable$.$setHeight$((0,D.$JSCompiler_StaticMethods_getHandleSize$$)())) : (this.$_moveDrawable$.$setX$(0), this.$_moveDrawable$.$setWidth$((0,D.$JSCompiler_StaticMethods_getHandleSize$$)())));
        var $leftBackground$$inline_7523_slidingWindow$$inline_7522$$ = this.$getChildAt$(1);
        $leftBackground$$inline_7523_slidingWindow$$inline_7522$$ != D.$JSCompiler_alias_NULL$$ && $leftBackground$$inline_7523_slidingWindow$$inline_7522$$.setCursor("move");
        if(this.$isLeftAndRightFilterRendered$()) {
          var $leftBackground$$inline_7523_slidingWindow$$inline_7522$$ = (0,D.$JSCompiler_StaticMethods_getLeftBackground$$)(this), $rightBackground$$inline_7524$$ = (0,D.$JSCompiler_StaticMethods_getRightBackground$$)(this);
          $leftBackground$$inline_7523_slidingWindow$$inline_7522$$ != D.$JSCompiler_alias_NULL$$ && $rightBackground$$inline_7524$$ != D.$JSCompiler_alias_NULL$$ && ($leftBackground$$inline_7523_slidingWindow$$inline_7522$$.setCursor("default"), $rightBackground$$inline_7524$$.setCursor("default"))
        }
      }
    }
    this.$_moveDrawable$ = D.$JSCompiler_alias_NULL$$;
    this.$_initX$ = -1
  }
};
D.$JSCompiler_prototypeAlias$$.$contDragPan$ = function $$JSCompiler_prototypeAlias$$$$contDragPan$$($event$$605$$, $compX$$1$$, $compY$$1$$) {
  if(this.$_moveDrawable$ != D.$JSCompiler_alias_NULL$$ && -1 != this.$_initX$) {
    var $diffX$$11$$ = $compX$$1$$ - this.$_initX$, $diffY$$12$$ = $compY$$1$$ - this.$_initY$;
    this.$_initX$ = $compX$$1$$;
    this.$_initY$ = $compY$$1$$;
    "window" == this.$_moveDrawable$.getId() ? this.$handleWindowDragPositioning$(0, $diffX$$11$$, $diffY$$12$$) : "lh" == this.$_moveDrawable$.getId() || "lhb" == this.$_moveDrawable$.getId() ? (0,D.$JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$$)(this, $event$$605$$, $diffX$$11$$, $diffY$$12$$, D.$JSCompiler_alias_TRUE$$) : ("rh" == this.$_moveDrawable$.getId() || "rhb" == this.$_moveDrawable$.getId()) && this.$handleRightHandleDragPositioning$($event$$605$$, $diffX$$11$$, $diffY$$12$$)
  }
};
D.$JSCompiler_prototypeAlias$$.$HandleTouchStart$ = function $$JSCompiler_prototypeAlias$$$$HandleTouchStart$$($event$$606$$) {
  var $touches$$10$$ = $event$$606$$.touches;
  this.$_touchStartX$ = $touches$$10$$[0].pageX;
  this.$_touchStartY$ = $touches$$10$$[0].pageY;
  2 == $touches$$10$$.length && ($event$$606$$.preventDefault(), this.$_touchStartX2$ = $touches$$10$$[1].pageX, this.$_touchStartY2$ = $touches$$10$$[1].pageY, 20 > window.Math.abs(this.$_touchStartY$ - this.$_touchStartY2$) ? this.$_counter$ = 0 : this.$_touchStartY2$ = this.$_touchStartX2$ = this.$_touchStartY$ = this.$_touchStartX$ = D.$JSCompiler_alias_NULL$$)
};
D.$JSCompiler_prototypeAlias$$.$HandleTouchMove$ = function $$JSCompiler_prototypeAlias$$$$HandleTouchMove$$($event$$607_touches$$11$$) {
  $event$$607_touches$$11$$.preventDefault();
  $event$$607_touches$$11$$ = $event$$607_touches$$11$$.touches;
  if(this.$_touchStartX2$ != D.$JSCompiler_alias_NULL$$ && this.$_touchStartY2$ != D.$JSCompiler_alias_NULL$$) {
    50 > this.$_counter$ ? this.$_counter$++ : (this.$handleRightHandleDragPositioning$(D.$JSCompiler_alias_NULL$$, $event$$607_touches$$11$$[1].pageX - this.$_touchStartX2$, 0), this.$_touchStartX2$ = $event$$607_touches$$11$$[1].pageX, this.$_counter$ = 0)
  }else {
    var $pageDy$$1$$ = window.Math.abs(this.$_touchStartY$ - $event$$607_touches$$11$$[0].pageY);
    if(3 < window.Math.abs(this.$_touchStartX$ - $event$$607_touches$$11$$[0].pageX) || 3 < $pageDy$$1$$) {
      this.$_touchStartY$ = this.$_touchStartX$ = D.$JSCompiler_alias_NULL$$
    }
  }
};
D.$JSCompiler_prototypeAlias$$.$HandleTouchEnd$ = function $$JSCompiler_prototypeAlias$$$$HandleTouchEnd$$($event$$608$$) {
  this.$_touchStartX2$ != D.$JSCompiler_alias_NULL$$ && this.$_touchStartY2$ != D.$JSCompiler_alias_NULL$$ ? this.$finishHandleDrag$() : this.$_touchStartX$ != D.$JSCompiler_alias_NULL$$ && this.$_touchStartY$ != D.$JSCompiler_alias_NULL$$ && this.$HandleShapeClick$($event$$608$$, this.$_touchStartX$, this.$_touchStartY$);
  this.$_touchStartY2$ = this.$_touchStartX2$ = this.$_touchStartY$ = this.$_touchStartX$ = D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.$HandleKeyDown$ = function $$JSCompiler_prototypeAlias$$$$HandleKeyDown$$($event$$609$$) {
  var $delta$$17_keyCode$$42$$ = $event$$609$$.keyCode;
  if(37 === $delta$$17_keyCode$$42$$ || 39 === $delta$$17_keyCode$$42$$) {
    $delta$$17_keyCode$$42$$ = 37 === $delta$$17_keyCode$$42$$ ? -1 : 1, ($event$$609$$.shiftKey ? this.$handleRightHandleDragPositioning$ : this.$handleWindowDragPositioning$).call(this, $event$$609$$, $delta$$17_keyCode$$42$$, $delta$$17_keyCode$$42$$)
  }
};
D.$JSCompiler_prototypeAlias$$.$HandleKeyUp$ = function $$JSCompiler_prototypeAlias$$$$HandleKeyUp$$($event$$610$$) {
  var $delta$$18_keyCode$$43$$ = $event$$610$$.keyCode;
  if(37 === $delta$$18_keyCode$$43$$ || 39 === $delta$$18_keyCode$$43$$) {
    $delta$$18_keyCode$$43$$ = 37 === $delta$$18_keyCode$$43$$ ? -1 : 1, ($event$$610$$.shiftKey ? this.$finishHandleDrag$ : this.$finishWindowDrag$).call(this, $delta$$18_keyCode$$43$$, $delta$$18_keyCode$$43$$)
  }
};
D.$JSCompiler_prototypeAlias$$.$handleWindowDragPositioning$ = function $$JSCompiler_prototypeAlias$$$$handleWindowDragPositioning$$($event$$611$$, $deltaX$$16$$, $deltaY$$19$$) {
  (0,D.$JSCompiler_StaticMethods_fireScrollEvent$$)(this, "scrollPos", $deltaX$$16$$, $deltaY$$19$$)
};
D.$JSCompiler_prototypeAlias$$.$finishWindowDrag$ = function $$JSCompiler_prototypeAlias$$$$finishWindowDrag$$($deltaX$$17$$, $deltaY$$20$$) {
  (0,D.$JSCompiler_StaticMethods_fireScrollEvent$$)(this, "scrollEnd", $deltaX$$17$$, $deltaY$$20$$)
};
D.$JSCompiler_StaticMethods_fireScrollEvent$$ = function $$JSCompiler_StaticMethods_fireScrollEvent$$$($JSCompiler_StaticMethods_fireScrollEvent$self$$, $evt$$55_type$$242$$, $delta$$19_deltaX$$18$$, $deltaY$$21$$) {
  var $newEndTime$$1_slidingWindow$$17$$ = $JSCompiler_StaticMethods_fireScrollEvent$self$$.$getChildAt$(1), $pos$$64$$ = (0,D.$JSCompiler_StaticMethods_getSlidingWindowPos$$)($JSCompiler_StaticMethods_fireScrollEvent$self$$, $newEndTime$$1_slidingWindow$$17$$), $newStartTime$$1_scrollTo_size$$45$$ = (0,D.$JSCompiler_StaticMethods_getRectSize$$)($JSCompiler_StaticMethods_fireScrollEvent$self$$, $newEndTime$$1_slidingWindow$$17$$), $minPos$$1$$ = $JSCompiler_StaticMethods_fireScrollEvent$self$$.$_leftMargin$, 
  $maxPos$$1$$ = (0,D.$JSCompiler_StaticMethods_getMaximumPosition$$)($JSCompiler_StaticMethods_fireScrollEvent$self$$);
  $delta$$19_deltaX$$18$$ = $JSCompiler_StaticMethods_fireScrollEvent$self$$.$isVertical$() ? $deltaY$$21$$ : $delta$$19_deltaX$$18$$;
  $pos$$64$$ + $delta$$19_deltaX$$18$$ <= $minPos$$1$$ ? ((0,D.$JSCompiler_StaticMethods_setSlidingWindowPos$$)($JSCompiler_StaticMethods_fireScrollEvent$self$$, $newEndTime$$1_slidingWindow$$17$$, $minPos$$1$$), $newStartTime$$1_scrollTo_size$$45$$ = (0,D.$JSCompiler_StaticMethods_isHorizontalRTL$$)($JSCompiler_StaticMethods_fireScrollEvent$self$$) ? -2 : -1) : $pos$$64$$ + $newStartTime$$1_scrollTo_size$$45$$ + $delta$$19_deltaX$$18$$ >= $maxPos$$1$$ ? ((0,D.$JSCompiler_StaticMethods_setSlidingWindowPos$$)($JSCompiler_StaticMethods_fireScrollEvent$self$$, 
  $newEndTime$$1_slidingWindow$$17$$, $maxPos$$1$$ - $newStartTime$$1_scrollTo_size$$45$$), $newStartTime$$1_scrollTo_size$$45$$ = (0,D.$JSCompiler_StaticMethods_isHorizontalRTL$$)($JSCompiler_StaticMethods_fireScrollEvent$self$$) ? -1 : -2) : ((0,D.$JSCompiler_StaticMethods_setSlidingWindowPos$$)($JSCompiler_StaticMethods_fireScrollEvent$self$$, $newEndTime$$1_slidingWindow$$17$$, $pos$$64$$ + $delta$$19_deltaX$$18$$), $newStartTime$$1_scrollTo_size$$45$$ = (0,D.$JSCompiler_StaticMethods_isHorizontalRTL$$)($JSCompiler_StaticMethods_fireScrollEvent$self$$) ? 
  ($maxPos$$1$$ - $newStartTime$$1_scrollTo_size$$45$$ - $pos$$64$$ - $JSCompiler_StaticMethods_fireScrollEvent$self$$.$_leftMargin$) * $JSCompiler_StaticMethods_fireScrollEvent$self$$.$_increment$ : ($pos$$64$$ - $JSCompiler_StaticMethods_fireScrollEvent$self$$.$_leftMargin$) * $JSCompiler_StaticMethods_fireScrollEvent$self$$.$_increment$);
  (0,D.$JSCompiler_StaticMethods_ScrollTimeAxis$$)($JSCompiler_StaticMethods_fireScrollEvent$self$$);
  $evt$$55_type$$242$$ = new D.$DvtOverviewEvent$$($evt$$55_type$$242$$);
  $evt$$55_type$$242$$.$setPosition$($newStartTime$$1_scrollTo_size$$45$$);
  (0,D.$JSCompiler_StaticMethods_isHorizontalRTL$$)($JSCompiler_StaticMethods_fireScrollEvent$self$$) ? ($newStartTime$$1_scrollTo_size$$45$$ = $JSCompiler_StaticMethods_fireScrollEvent$self$$.$getPositionDate$($JSCompiler_StaticMethods_fireScrollEvent$self$$.$Width$ - ($pos$$64$$ + (0,D.$JSCompiler_StaticMethods_getRectSize$$)($JSCompiler_StaticMethods_fireScrollEvent$self$$, $newEndTime$$1_slidingWindow$$17$$))), $newEndTime$$1_slidingWindow$$17$$ = $JSCompiler_StaticMethods_fireScrollEvent$self$$.$getPositionDate$($JSCompiler_StaticMethods_fireScrollEvent$self$$.$Width$ - 
  $pos$$64$$)) : ($newStartTime$$1_scrollTo_size$$45$$ = $JSCompiler_StaticMethods_fireScrollEvent$self$$.$getPositionDate$($pos$$64$$), $newEndTime$$1_slidingWindow$$17$$ = $JSCompiler_StaticMethods_fireScrollEvent$self$$.$getPositionDate$($pos$$64$$ + (0,D.$JSCompiler_StaticMethods_getRectSize$$)($JSCompiler_StaticMethods_fireScrollEvent$self$$, $newEndTime$$1_slidingWindow$$17$$)));
  (0,D.$JSCompiler_StaticMethods_setNewStartTime$$)($evt$$55_type$$242$$, $newStartTime$$1_scrollTo_size$$45$$);
  (0,D.$JSCompiler_StaticMethods_setNewEndTime$$)($evt$$55_type$$242$$, $newEndTime$$1_slidingWindow$$17$$);
  $JSCompiler_StaticMethods_fireScrollEvent$self$$.dispatchEvent($evt$$55_type$$242$$)
};
D.$DvtOverview$$.prototype.$handleRightHandleDragPositioning$ = function $$DvtOverview$$$$$handleRightHandleDragPositioning$$($event$$613$$, $deltaX$$20$$, $deltaY$$23$$) {
  (0,D.$JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$$)(this, $event$$613$$, $deltaX$$20$$, $deltaY$$23$$, D.$JSCompiler_alias_FALSE$$)
};
D.$JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$$ = function $$JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$$$($JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$, $endHandle$$inline_7535_event$$614_newSize$$1_relPos$$58_time$$12$$, $deltaX$$21_newEndTime$$2_slidingWindow$$18$$, $delta$$20_deltaY$$24$$, $isLeft$$5_newStartTime$$2$$) {
  var $evt$$56_size$$46$$ = (0,D.$JSCompiler_StaticMethods_getOverviewSize$$)($JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$);
  $delta$$20_deltaY$$24$$ = $JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$.$isVertical$() ? $delta$$20_deltaY$$24$$ : $deltaX$$21_newEndTime$$2_slidingWindow$$18$$;
  if(0 != $delta$$20_deltaY$$24$$) {
    $deltaX$$21_newEndTime$$2_slidingWindow$$18$$ = $JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$.$getChildAt$(1);
    var $windowPos$$ = (0,D.$JSCompiler_StaticMethods_getSlidingWindowPos$$)($JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$, $deltaX$$21_newEndTime$$2_slidingWindow$$18$$), $windowSize$$ = (0,D.$JSCompiler_StaticMethods_getRectSize$$)($JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$, $deltaX$$21_newEndTime$$2_slidingWindow$$18$$);
    if($isLeft$$5_newStartTime$$2$$) {
      if($windowSize$$ - $delta$$20_deltaY$$24$$ <= (0,D.$JSCompiler_StaticMethods_getMinimumWindowSize$$)($JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$) || $windowPos$$ + $delta$$20_deltaY$$24$$ <= $JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$.$_leftMargin$) {
        return
      }
      $endHandle$$inline_7535_event$$614_newSize$$1_relPos$$58_time$$12$$ = $JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$.$isVertical$() ? (0,D.$JSCompiler_StaticMethods_pageToStageCoords$$)($JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$.$getCtx$(), (0,D.$JSCompiler_StaticMethods_getPageX$$)($endHandle$$inline_7535_event$$614_newSize$$1_relPos$$58_time$$12$$), (0,D.$JSCompiler_StaticMethods_getPageY$$)($endHandle$$inline_7535_event$$614_newSize$$1_relPos$$58_time$$12$$)).y : 
      (0,D.$JSCompiler_StaticMethods_pageToStageCoords$$)($JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$.$getCtx$(), (0,D.$JSCompiler_StaticMethods_getPageX$$)($endHandle$$inline_7535_event$$614_newSize$$1_relPos$$58_time$$12$$), (0,D.$JSCompiler_StaticMethods_getPageY$$)($endHandle$$inline_7535_event$$614_newSize$$1_relPos$$58_time$$12$$)).x;
      $endHandle$$inline_7535_event$$614_newSize$$1_relPos$$58_time$$12$$ = $JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$.$stageToLocal$($endHandle$$inline_7535_event$$614_newSize$$1_relPos$$58_time$$12$$);
      if(0 < $delta$$20_deltaY$$24$$ && $endHandle$$inline_7535_event$$614_newSize$$1_relPos$$58_time$$12$$ <= $windowPos$$ || 0 > $delta$$20_deltaY$$24$$ && $endHandle$$inline_7535_event$$614_newSize$$1_relPos$$58_time$$12$$ >= $windowPos$$) {
        return
      }
      (0,D.$JSCompiler_StaticMethods_setSlidingWindowPos$$)($JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$, $deltaX$$21_newEndTime$$2_slidingWindow$$18$$, $windowPos$$ + $delta$$20_deltaY$$24$$);
      (0,D.$JSCompiler_StaticMethods_setSlidingWindowSize$$)($JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$, $deltaX$$21_newEndTime$$2_slidingWindow$$18$$, $windowSize$$ - $delta$$20_deltaY$$24$$)
    }else {
      if($windowSize$$ + $delta$$20_deltaY$$24$$ <= (0,D.$JSCompiler_StaticMethods_getMinimumWindowSize$$)($JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$) || $windowPos$$ + $windowSize$$ + $delta$$20_deltaY$$24$$ >= (0,D.$JSCompiler_StaticMethods_getMaximumPosition$$)($JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$)) {
        return
      }
      $endHandle$$inline_7535_event$$614_newSize$$1_relPos$$58_time$$12$$ = $JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$.$isVertical$() ? (0,D.$JSCompiler_StaticMethods_pageToStageCoords$$)($JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$.$getCtx$(), (0,D.$JSCompiler_StaticMethods_getPageX$$)($endHandle$$inline_7535_event$$614_newSize$$1_relPos$$58_time$$12$$), (0,D.$JSCompiler_StaticMethods_getPageY$$)($endHandle$$inline_7535_event$$614_newSize$$1_relPos$$58_time$$12$$)).y : 
      (0,D.$JSCompiler_StaticMethods_pageToStageCoords$$)($JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$.$getCtx$(), (0,D.$JSCompiler_StaticMethods_getPageX$$)($endHandle$$inline_7535_event$$614_newSize$$1_relPos$$58_time$$12$$), (0,D.$JSCompiler_StaticMethods_getPageY$$)($endHandle$$inline_7535_event$$614_newSize$$1_relPos$$58_time$$12$$)).x;
      $endHandle$$inline_7535_event$$614_newSize$$1_relPos$$58_time$$12$$ = $JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$.$stageToLocal$($endHandle$$inline_7535_event$$614_newSize$$1_relPos$$58_time$$12$$);
      if(0 < $delta$$20_deltaY$$24$$ && $endHandle$$inline_7535_event$$614_newSize$$1_relPos$$58_time$$12$$ <= $windowPos$$ + $windowSize$$ || 0 > $delta$$20_deltaY$$24$$ && $endHandle$$inline_7535_event$$614_newSize$$1_relPos$$58_time$$12$$ >= $windowPos$$ + $windowSize$$) {
        return
      }
      (0,D.$JSCompiler_StaticMethods_setSlidingWindowSize$$)($JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$, $deltaX$$21_newEndTime$$2_slidingWindow$$18$$, $windowSize$$ + $delta$$20_deltaY$$24$$)
    }
    (0,D.$JSCompiler_StaticMethods_ScrollTimeAxis$$)($JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$);
    $endHandle$$inline_7535_event$$614_newSize$$1_relPos$$58_time$$12$$ = $JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$.$getPositionDate$((0,D.$JSCompiler_StaticMethods_getRectSize$$)($JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$, $deltaX$$21_newEndTime$$2_slidingWindow$$18$$));
    $endHandle$$inline_7535_event$$614_newSize$$1_relPos$$58_time$$12$$ = $evt$$56_size$$46$$ * ($JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$.$_end$ - $JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$.$_start$) / ($endHandle$$inline_7535_event$$614_newSize$$1_relPos$$58_time$$12$$ - $JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$.$_start$);
    $evt$$56_size$$46$$ = new D.$DvtOverviewEvent$$("rangeChanging");
    (0,D.$JSCompiler_StaticMethods_addParam$$)($evt$$56_size$$46$$, "newSize", $endHandle$$inline_7535_event$$614_newSize$$1_relPos$$58_time$$12$$);
    $endHandle$$inline_7535_event$$614_newSize$$1_relPos$$58_time$$12$$ = (0,D.$JSCompiler_StaticMethods_isHorizontalRTL$$)($JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$) ? $isLeft$$5_newStartTime$$2$$ : !$isLeft$$5_newStartTime$$2$$;
    (0,D.$JSCompiler_StaticMethods_addParam$$)($evt$$56_size$$46$$, "endHandle", $endHandle$$inline_7535_event$$614_newSize$$1_relPos$$58_time$$12$$);
    $isLeft$$5_newStartTime$$2$$ ? (0,D.$JSCompiler_StaticMethods_addParam$$)($evt$$56_size$$46$$, "expand", 0 > $delta$$20_deltaY$$24$$) : (0,D.$JSCompiler_StaticMethods_addParam$$)($evt$$56_size$$46$$, "expand", 0 < $delta$$20_deltaY$$24$$);
    (0,D.$JSCompiler_StaticMethods_isHorizontalRTL$$)($JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$) ? ($isLeft$$5_newStartTime$$2$$ = $JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$.$getPositionDate$($JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$.$Width$ - ((0,D.$JSCompiler_StaticMethods_getSlidingWindowPos$$)($JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$, $deltaX$$21_newEndTime$$2_slidingWindow$$18$$) + 
    (0,D.$JSCompiler_StaticMethods_getRectSize$$)($JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$, $deltaX$$21_newEndTime$$2_slidingWindow$$18$$))), $deltaX$$21_newEndTime$$2_slidingWindow$$18$$ = $JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$.$getPositionDate$($JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$.$Width$ - (0,D.$JSCompiler_StaticMethods_getSlidingWindowPos$$)($JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$, 
    $deltaX$$21_newEndTime$$2_slidingWindow$$18$$))) : ($isLeft$$5_newStartTime$$2$$ = $JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$.$getPositionDate$((0,D.$JSCompiler_StaticMethods_getSlidingWindowPos$$)($JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$, $deltaX$$21_newEndTime$$2_slidingWindow$$18$$)), $deltaX$$21_newEndTime$$2_slidingWindow$$18$$ = $JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$.$getPositionDate$((0,D.$JSCompiler_StaticMethods_getSlidingWindowPos$$)($JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$, 
    $deltaX$$21_newEndTime$$2_slidingWindow$$18$$) + (0,D.$JSCompiler_StaticMethods_getRectSize$$)($JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$, $deltaX$$21_newEndTime$$2_slidingWindow$$18$$)));
    (0,D.$JSCompiler_StaticMethods_setNewStartTime$$)($evt$$56_size$$46$$, $isLeft$$5_newStartTime$$2$$);
    (0,D.$JSCompiler_StaticMethods_setNewEndTime$$)($evt$$56_size$$46$$, $deltaX$$21_newEndTime$$2_slidingWindow$$18$$);
    $JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$.dispatchEvent($evt$$56_size$$46$$)
  }
};
D.$DvtOverview$$.prototype.$finishHandleDrag$ = function $$DvtOverview$$$$$finishHandleDrag$$() {
  var $newSize$$2_start$$44$$ = this.$_start$, $end$$28_oldStartTime$$ = this.$_end$, $oldSize$$ = this.$_width$, $oldEndTime_size$$47$$ = (0,D.$JSCompiler_StaticMethods_getOverviewSize$$)(this), $newEndTime$$3_slidingWindow$$19$$ = this.$getChildAt$(1), $newStartTime$$3_time$$13$$ = this.$getPositionDate$((0,D.$JSCompiler_StaticMethods_getRectSize$$)(this, $newEndTime$$3_slidingWindow$$19$$)), $newSize$$2_start$$44$$ = $oldEndTime_size$$47$$ * ($end$$28_oldStartTime$$ - $newSize$$2_start$$44$$) / 
  ($newStartTime$$3_time$$13$$ - $newSize$$2_start$$44$$), $end$$28_oldStartTime$$ = this.$getPositionDate$(this.$_oldStartPos$), $oldEndTime_size$$47$$ = this.$getPositionDate$(this.$_oldEndPos$);
  (0,D.$JSCompiler_StaticMethods_isHorizontalRTL$$)(this) ? ($newStartTime$$3_time$$13$$ = this.$getPositionDate$(this.$Width$ - ((0,D.$JSCompiler_StaticMethods_getSlidingWindowPos$$)(this, $newEndTime$$3_slidingWindow$$19$$) + (0,D.$JSCompiler_StaticMethods_getRectSize$$)(this, $newEndTime$$3_slidingWindow$$19$$))), $newEndTime$$3_slidingWindow$$19$$ = this.$getPositionDate$(this.$Width$ - (0,D.$JSCompiler_StaticMethods_getSlidingWindowPos$$)(this, $newEndTime$$3_slidingWindow$$19$$))) : ($newStartTime$$3_time$$13$$ = 
  this.$getPositionDate$((0,D.$JSCompiler_StaticMethods_getSlidingWindowPos$$)(this, $newEndTime$$3_slidingWindow$$19$$)), $newEndTime$$3_slidingWindow$$19$$ = this.$getPositionDate$((0,D.$JSCompiler_StaticMethods_getSlidingWindowPos$$)(this, $newEndTime$$3_slidingWindow$$19$$) + (0,D.$JSCompiler_StaticMethods_getRectSize$$)(this, $newEndTime$$3_slidingWindow$$19$$)));
  var $evt$$57$$ = new D.$DvtOverviewEvent$$("rangeChange");
  (0,D.$JSCompiler_StaticMethods_addParam$$)($evt$$57$$, "oldSize", $oldSize$$);
  (0,D.$JSCompiler_StaticMethods_addParam$$)($evt$$57$$, "newSize", $newSize$$2_start$$44$$);
  (0,D.$JSCompiler_StaticMethods_addParam$$)($evt$$57$$, "oldStartTime", $end$$28_oldStartTime$$);
  (0,D.$JSCompiler_StaticMethods_addParam$$)($evt$$57$$, "oldEndTime", $oldEndTime_size$$47$$);
  (0,D.$JSCompiler_StaticMethods_setNewStartTime$$)($evt$$57$$, $newStartTime$$3_time$$13$$);
  (0,D.$JSCompiler_StaticMethods_setNewEndTime$$)($evt$$57$$, $newEndTime$$3_slidingWindow$$19$$);
  this.dispatchEvent($evt$$57$$)
};
D.$JSCompiler_StaticMethods_ScrollTimeAxis$$ = function $$JSCompiler_StaticMethods_ScrollTimeAxis$$$($JSCompiler_StaticMethods_ScrollTimeAxis$self$$) {
  var $rightCenter$$1_slidingWindow$$20$$ = $JSCompiler_StaticMethods_ScrollTimeAxis$self$$.$getChildAt$(1), $left$$18$$ = (0,D.$JSCompiler_StaticMethods_getSlidingWindowPos$$)($JSCompiler_StaticMethods_ScrollTimeAxis$self$$, $rightCenter$$1_slidingWindow$$20$$), $leftCenter$$1$$ = $left$$18$$ + 0.5, $rightCenter$$1_slidingWindow$$20$$ = $left$$18$$ + (0,D.$JSCompiler_StaticMethods_getRectSize$$)($JSCompiler_StaticMethods_ScrollTimeAxis$self$$, $rightCenter$$1_slidingWindow$$20$$) - 0.5, $leftHandle$$3$$ = 
  $JSCompiler_StaticMethods_ScrollTimeAxis$self$$.$getChildAt$($JSCompiler_StaticMethods_ScrollTimeAxis$self$$.$getNumChildren$() - $JSCompiler_StaticMethods_ScrollTimeAxis$self$$.$_lastChildIndex$), $rightHandle$$4$$ = (0,D.$JSCompiler_StaticMethods_getRightHandle$$)($JSCompiler_StaticMethods_ScrollTimeAxis$self$$), $leftTopBar$$2$$ = $JSCompiler_StaticMethods_ScrollTimeAxis$self$$.$getChildAt$($JSCompiler_StaticMethods_ScrollTimeAxis$self$$.$getNumChildren$() - ($JSCompiler_StaticMethods_ScrollTimeAxis$self$$.$_lastChildIndex$ - 
  2)), $rightTopBar$$2$$ = $JSCompiler_StaticMethods_ScrollTimeAxis$self$$.$getChildAt$($JSCompiler_StaticMethods_ScrollTimeAxis$self$$.$getNumChildren$() - ($JSCompiler_StaticMethods_ScrollTimeAxis$self$$.$_lastChildIndex$ - 3)), $bottomBar$$2$$ = $JSCompiler_StaticMethods_ScrollTimeAxis$self$$.$getChildAt$($JSCompiler_StaticMethods_ScrollTimeAxis$self$$.$getNumChildren$() - ($JSCompiler_StaticMethods_ScrollTimeAxis$self$$.$_lastChildIndex$ - 4)), $topBar$$2$$ = $JSCompiler_StaticMethods_ScrollTimeAxis$self$$.$getChildAt$($JSCompiler_StaticMethods_ScrollTimeAxis$self$$.$getNumChildren$() - 
  ($JSCompiler_StaticMethods_ScrollTimeAxis$self$$.$_lastChildIndex$ - 5));
  (0,D.$JSCompiler_StaticMethods_setLinePos$$)($JSCompiler_StaticMethods_ScrollTimeAxis$self$$, $leftHandle$$3$$, $leftCenter$$1$$, $leftCenter$$1$$);
  (0,D.$JSCompiler_StaticMethods_setLinePos$$)($JSCompiler_StaticMethods_ScrollTimeAxis$self$$, $rightHandle$$4$$, $rightCenter$$1_slidingWindow$$20$$, $rightCenter$$1_slidingWindow$$20$$);
  (0,D.$JSCompiler_StaticMethods_setLinePos$$)($JSCompiler_StaticMethods_ScrollTimeAxis$self$$, $leftTopBar$$2$$, -1, $left$$18$$);
  (0,D.$JSCompiler_StaticMethods_setLinePos$$)($JSCompiler_StaticMethods_ScrollTimeAxis$self$$, $rightTopBar$$2$$, (0,D.$JSCompiler_StaticMethods_getLinePos1$$)($JSCompiler_StaticMethods_ScrollTimeAxis$self$$, $rightHandle$$4$$), -1);
  (0,D.$JSCompiler_StaticMethods_setLinePos$$)($JSCompiler_StaticMethods_ScrollTimeAxis$self$$, $bottomBar$$2$$, (0,D.$JSCompiler_StaticMethods_getLinePos1$$)($JSCompiler_StaticMethods_ScrollTimeAxis$self$$, $leftHandle$$3$$), (0,D.$JSCompiler_StaticMethods_getLinePos1$$)($JSCompiler_StaticMethods_ScrollTimeAxis$self$$, $rightHandle$$4$$));
  (0,D.$JSCompiler_StaticMethods_setLinePos$$)($JSCompiler_StaticMethods_ScrollTimeAxis$self$$, $topBar$$2$$, (0,D.$JSCompiler_StaticMethods_getLinePos1$$)($JSCompiler_StaticMethods_ScrollTimeAxis$self$$, $leftHandle$$3$$), (0,D.$JSCompiler_StaticMethods_getLinePos1$$)($JSCompiler_StaticMethods_ScrollTimeAxis$self$$, $rightHandle$$4$$))
};
D.$DvtOverview$$.prototype.dispatchEvent = function $$DvtOverview$$$$dispatchEvent$($event$$615$$) {
  D.$DvtEventDispatcher$$.dispatchEvent(this.$_callback$, this.$_callbackObj$, this, $event$$615$$)
};
D.$DvtOverview$$.prototype.$destroy$ = function $$DvtOverview$$$$$destroy$$() {
  this.$EventManager$ && (this.$EventManager$.$removeListeners$(this), this.$EventManager$.$destroy$(), this.$EventManager$ = D.$JSCompiler_alias_NULL$$);
  D.$DvtTimeUtils$$.$supportsTouch$() ? (this.$removeEvtListener$(D.$DvtTouchEvent$$.$TOUCHSTART$, this.$HandleTouchStart$, D.$JSCompiler_alias_FALSE$$, this), this.$removeEvtListener$(D.$DvtTouchEvent$$.$TOUCHMOVE$, this.$HandleTouchMove$, D.$JSCompiler_alias_FALSE$$, this), this.$removeEvtListener$(D.$DvtTouchEvent$$.$TOUCHEND$, this.$HandleTouchEnd$, D.$JSCompiler_alias_FALSE$$, this), this.$removeEvtListener$(D.$DvtMouseEvent$CLICK$$, this.$HandleShapeClick$, D.$JSCompiler_alias_FALSE$$, this)) : 
  (this.$removeEvtListener$(D.$DvtMouseEvent$MOUSEOVER$$, this.$HandleShapeMouseOver$, D.$JSCompiler_alias_FALSE$$, this), this.$removeEvtListener$(D.$DvtMouseEvent$MOUSEOUT$$, this.$HandleShapeMouseOut$, D.$JSCompiler_alias_FALSE$$, this), this.$removeEvtListener$(D.$DvtMouseEvent$CLICK$$, this.$HandleShapeClick$, D.$JSCompiler_alias_FALSE$$, this), this.$removeEvtListener$(D.$DvtKeyboardEvent$KEYDOWN$$, this.$HandleKeyDown$, D.$JSCompiler_alias_FALSE$$, this), this.$removeEvtListener$(D.$DvtKeyboardEvent$KEYUP$$, 
  this.$HandleKeyUp$, D.$JSCompiler_alias_FALSE$$, this));
  D.$DvtOverview$$.$superclass$.$destroy$.call(this)
};
D.$DvtOverviewParser$$ = function $$DvtOverviewParser$$$($view$$54$$) {
  this.Init($view$$54$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtOverviewParser$$, D.$DvtObj$$, "DvtOverviewParser");
D.$DvtOverviewParser$$.prototype.Init = (0,D.$JSCompiler_set$$)("$_view$");
D.$DvtOverviewParser$$.prototype.parse = function $$DvtOverviewParser$$$$parse$($data$$90$$) {
  return this.$ParseRootAttributes$($data$$90$$)
};
D.$DvtOverviewParser$$.prototype.$ParseRootAttributes$ = function $$DvtOverviewParser$$$$$ParseRootAttributes$$($options$$227$$) {
  var $ret$$92$$ = {};
  $ret$$92$$.$animationOnClick$ = $options$$227$$.animationOnClick;
  $options$$227$$.startTime != D.$JSCompiler_alias_NULL$$ && ($ret$$92$$.start = $options$$227$$.startTime);
  $options$$227$$.endTime != D.$JSCompiler_alias_NULL$$ && ($ret$$92$$.end = $options$$227$$.endTime);
  $ret$$92$$.start == D.$JSCompiler_alias_NULL$$ && ($ret$$92$$.start = (new window.Date).getTime());
  if($ret$$92$$.end == D.$JSCompiler_alias_NULL$$ || $ret$$92$$.end <= $ret$$92$$.start) {
    $ret$$92$$.end = $ret$$92$$.start + 864E5
  }
  $options$$227$$.currentTime != D.$JSCompiler_alias_NULL$$ && ($ret$$92$$.currentTime = $options$$227$$.currentTime);
  $options$$227$$.initialFocusTime != D.$JSCompiler_alias_NULL$$ && ($ret$$92$$.$initialFocusTime$ = $options$$227$$.initialFocusTime);
  $ret$$92$$.orientation = "horizontal";
  $options$$227$$.orientation != D.$JSCompiler_alias_NULL$$ && ($ret$$92$$.orientation = $options$$227$$.orientation);
  $ret$$92$$.$featuresOff$ = $options$$227$$.featuresOff;
  $ret$$92$$.$minimumWindowSize$ = $options$$227$$.minimumWindowSize;
  $ret$$92$$.$leftMargin$ = $options$$227$$.leftMargin;
  $ret$$92$$.$rightMargin$ = $options$$227$$.rightMargin;
  if($options$$227$$.viewportEndTime != D.$JSCompiler_alias_NULL$$) {
    var $viewportEndTime$$ = $options$$227$$.viewportEndTime, $viewportStartTime$$ = $ret$$92$$.start;
    $options$$227$$.viewportStartTime != D.$JSCompiler_alias_NULL$$ && $options$$227$$.viewportStartTime < $viewportEndTime$$ && ($viewportStartTime$$ = $options$$227$$.viewportStartTime);
    $ret$$92$$.width = $options$$227$$.viewportEndPos != D.$JSCompiler_alias_NULL$$ ? (0,D.$JSCompiler_StaticMethods_calculateWidth$$)($ret$$92$$.start, $ret$$92$$.end, $viewportStartTime$$, $viewportEndTime$$, $options$$227$$.viewportEndPos) : (0,D.$JSCompiler_StaticMethods_calculateWidth$$)($ret$$92$$.start, $ret$$92$$.end, $viewportStartTime$$, $viewportEndTime$$, this.$_view$.$Width$);
    $ret$$92$$.$renderStart$ = $viewportStartTime$$
  }else {
    $ret$$92$$.$renderStart$ = $ret$$92$$.start
  }
  0 == $ret$$92$$.width && ($ret$$92$$.width = 1E3);
  $ret$$92$$.$overviewPosition$ = "below";
  $ret$$92$$.$selectionMode$ = "none";
  $ret$$92$$.$isRtl$ = (0,D.$DvtAgent$isRightToLeft$$)(this.$_view$.$getCtx$()).toString();
  $options$$227$$.rtl != D.$JSCompiler_alias_NULL$$ && ($ret$$92$$.$isRtl$ = $options$$227$$.rtl.toString());
  $ret$$92$$.$handleFillColor$ = "#FFFFFF";
  $ret$$92$$.$handleTextureColor$ = "#B3C6DB";
  $ret$$92$$.$windowBackgroundColor$ = "#FFFFFF";
  $ret$$92$$.$windowBackgroundAlpha$ = 1;
  $ret$$92$$.$windowBorderTopStyle$ = "solid";
  $ret$$92$$.$windowBorderRightStyle$ = "solid";
  $ret$$92$$.$windowBorderBottomStyle$ = "solid";
  $ret$$92$$.$windowBorderLeftStyle$ = "solid";
  $ret$$92$$.$windowBorderTopColor$ = "#4F4F4F";
  $ret$$92$$.$windowBorderRightColor$ = "#4F4F4F";
  $ret$$92$$.$windowBorderBottomColor$ = "#4F4F4F";
  $ret$$92$$.$windowBorderLeftColor$ = "#4F4F4F";
  $ret$$92$$.$overviewBackgroundColor$ = "#E6ECF3";
  $ret$$92$$.$currentTimeIndicatorColor$ = "#C000D1";
  $ret$$92$$.$timeIndicatorColor$ = "#BCC7D2";
  $ret$$92$$.$timeAxisBarColor$ = "#e5e5e5";
  $ret$$92$$.$timeAxisBarOpacity$ = 1;
  $ret$$92$$.$leftFilterPanelColor$ = "#FFFFFF";
  $ret$$92$$.$leftFilterPanelAlpha$ = 0.7;
  $ret$$92$$.$rightFilterPanelColor$ = "#FFFFFF";
  $ret$$92$$.$rightFilterPanelAlpha$ = 0.7;
  $options$$227$$.style != D.$JSCompiler_alias_NULL$$ && ($options$$227$$.style.handleFillColor != D.$JSCompiler_alias_NULL$$ && ($ret$$92$$.$handleFillColor$ = $options$$227$$.style.handleFillColor), $options$$227$$.style.handleTextureColor != D.$JSCompiler_alias_NULL$$ && ($ret$$92$$.$handleTextureColor$ = $options$$227$$.style.handleTextureColor), $options$$227$$.style.handleBackgroundImage != D.$JSCompiler_alias_NULL$$ && ($ret$$92$$.$handleBackgroundImage$ = $options$$227$$.style.handleBackgroundImage), 
  $options$$227$$.style.handleWidth != D.$JSCompiler_alias_NULL$$ && ($ret$$92$$.$handleWidth$ = $options$$227$$.style.handleWidth), $options$$227$$.style.handleHeight != D.$JSCompiler_alias_NULL$$ && ($ret$$92$$.$handleHeight$ = $options$$227$$.style.handleHeight), $options$$227$$.style.windowBackgroundColor != D.$JSCompiler_alias_NULL$$ && ($ret$$92$$.$windowBackgroundColor$ = $options$$227$$.style.windowBackgroundColor), $options$$227$$.style.windowBackgroundAlpha != D.$JSCompiler_alias_NULL$$ && 
  ($ret$$92$$.$windowBackgroundAlpha$ = $options$$227$$.style.windowBackgroundAlpha), $options$$227$$.style.windowBorderTopStyle != D.$JSCompiler_alias_NULL$$ && ($ret$$92$$.$windowBorderTopStyle$ = $options$$227$$.style.windowBorderTopStyle), $options$$227$$.style.windowBorderRightStyle != D.$JSCompiler_alias_NULL$$ && ($ret$$92$$.$windowBorderRightStyle$ = $options$$227$$.style.windowBorderRightStyle), $options$$227$$.style.windowBorderBottomStyle != D.$JSCompiler_alias_NULL$$ && ($ret$$92$$.$windowBorderBottomStyle$ = 
  $options$$227$$.style.windowBorderBottomStyle), $options$$227$$.style.windowBorderLeftStyle != D.$JSCompiler_alias_NULL$$ && ($ret$$92$$.$windowBorderLeftStyle$ = $options$$227$$.style.windowBorderLeftStyle), $options$$227$$.style.windowBorderTopColor != D.$JSCompiler_alias_NULL$$ && ($ret$$92$$.$windowBorderTopColor$ = $options$$227$$.style.windowBorderTopColor), $options$$227$$.style.windowBorderRightColor != D.$JSCompiler_alias_NULL$$ && ($ret$$92$$.$windowBorderRightColor$ = $options$$227$$.style.windowBorderRightColor), 
  $options$$227$$.style.windowBorderBottomColor != D.$JSCompiler_alias_NULL$$ && ($ret$$92$$.$windowBorderBottomColor$ = $options$$227$$.style.windowBorderBottomColor), $options$$227$$.style.windowBorderLeftColor != D.$JSCompiler_alias_NULL$$ && ($ret$$92$$.$windowBorderLeftColor$ = $options$$227$$.style.windowBorderLeftColor), $options$$227$$.style.overviewBackgroundColor != D.$JSCompiler_alias_NULL$$ && ($ret$$92$$.$overviewBackgroundColor$ = $options$$227$$.style.overviewBackgroundColor), $options$$227$$.style.currentTimeIndicatorColor != 
  D.$JSCompiler_alias_NULL$$ && ($ret$$92$$.$currentTimeIndicatorColor$ = $options$$227$$.style.currentTimeIndicatorColor), $options$$227$$.style.timeIndicatorColor != D.$JSCompiler_alias_NULL$$ && ($ret$$92$$.$timeIndicatorColor$ = $options$$227$$.style.timeIndicatorColor), $options$$227$$.style.leftFilterPanelColor != D.$JSCompiler_alias_NULL$$ && ($ret$$92$$.$leftFilterPanelColor$ = $options$$227$$.style.leftFilterPanelColor), $options$$227$$.style.leftFilterPanelAlpha != D.$JSCompiler_alias_NULL$$ && 
  ($ret$$92$$.$leftFilterPanelAlpha$ = $options$$227$$.style.leftFilterPanelAlpha), $options$$227$$.style.rightFilterPanelColor != D.$JSCompiler_alias_NULL$$ && ($ret$$92$$.$rightFilterPanelColor$ = $options$$227$$.style.rightFilterPanelColor), $options$$227$$.style.rightFilterPanelAlpha != D.$JSCompiler_alias_NULL$$ && ($ret$$92$$.$rightFilterPanelAlpha$ = $options$$227$$.style.rightFilterPanelAlpha));
  return $ret$$92$$
};
D.$JSCompiler_StaticMethods_calculateWidth$$ = function $$JSCompiler_StaticMethods_calculateWidth$$$($number$$1_startTime$$3$$, $endTime$$3$$, $denominator_viewportStartTime$$1$$, $viewportEndTime$$1$$, $viewportEndPos$$) {
  $number$$1_startTime$$3$$ = $viewportEndPos$$ * ($endTime$$3$$ - $number$$1_startTime$$3$$);
  $denominator_viewportStartTime$$1$$ = $viewportEndTime$$1$$ - $denominator_viewportStartTime$$1$$;
  return 0 == $number$$1_startTime$$3$$ || 0 == $denominator_viewportStartTime$$1$$ ? 0 : $number$$1_startTime$$3$$ / $denominator_viewportStartTime$$1$$
};
D.$DvtOverviewEvent$$ = function $$DvtOverviewEvent$$$($type$$243$$) {
  this.Init("overview");
  this.$_subtype$ = $type$$243$$
};
D.$DvtObj$$.$createSubclass$(D.$DvtOverviewEvent$$, D.$DvtBaseComponentEvent$$, "DvtOverviewEvent");
D.$DvtOverviewEvent$$.prototype.$getSubType$ = (0,D.$JSCompiler_get$$)("$_subtype$");
D.$DvtOverviewEvent$$.prototype.setTime = function $$DvtOverviewEvent$$$$setTime$($time$$14$$) {
  (0,D.$JSCompiler_StaticMethods_addParam$$)(this, "time", $time$$14$$)
};
D.$DvtOverviewEvent$$.prototype.getTime = function $$DvtOverviewEvent$$$$getTime$() {
  return this.$getParamValue$("time")
};
D.$JSCompiler_StaticMethods_setNewStartTime$$ = function $$JSCompiler_StaticMethods_setNewStartTime$$$($JSCompiler_StaticMethods_setNewStartTime$self$$, $newStartTime$$4$$) {
  (0,D.$JSCompiler_StaticMethods_addParam$$)($JSCompiler_StaticMethods_setNewStartTime$self$$, "newStartTime", $newStartTime$$4$$)
};
D.$JSCompiler_StaticMethods_setNewEndTime$$ = function $$JSCompiler_StaticMethods_setNewEndTime$$$($JSCompiler_StaticMethods_setNewEndTime$self$$, $newEndTime$$4$$) {
  (0,D.$JSCompiler_StaticMethods_addParam$$)($JSCompiler_StaticMethods_setNewEndTime$self$$, "newEndTime", $newEndTime$$4$$)
};
D.$DvtOverviewEvent$$.prototype.$setPosition$ = function $$DvtOverviewEvent$$$$$setPosition$$($pos$$65$$) {
  (0,D.$JSCompiler_StaticMethods_addParam$$)(this, "pos", $pos$$65$$)
};
D.$DvtOverviewEvent$$.prototype.$getPosition$ = function $$DvtOverviewEvent$$$$$getPosition$$() {
  return this.$getParamValue$("pos")
};
D.$DvtOverviewEventManager$$ = function $$DvtOverviewEventManager$$$($overview$$1$$) {
  this.Init($overview$$1$$.$getCtx$(), $overview$$1$$.$processEvent$, $overview$$1$$);
  this.$_overview$ = $overview$$1$$
};
D.$DvtObj$$.$createSubclass$(D.$DvtOverviewEventManager$$, D.$DvtEventManager$$, "DvtOverviewEventManager");
D.$JSCompiler_prototypeAlias$$ = D.$DvtOverviewEventManager$$.prototype;
D.$JSCompiler_prototypeAlias$$.$addListeners$ = function $$JSCompiler_prototypeAlias$$$$addListeners$$($displayable$$75$$) {
  D.$DvtOverviewEventManager$$.$superclass$.$addListeners$.call(this, $displayable$$75$$);
  D.$DvtSvgDocumentUtils$$.$addDragListeners$(this.$_overview$, this.$_onDragStart$, this.$_onDragMove$, this.$_onDragEnd$, this)
};
D.$JSCompiler_prototypeAlias$$.$_onDragStart$ = function $$JSCompiler_prototypeAlias$$$$_onDragStart$$($event$$616$$) {
  return(0,D.$DvtAgent$isTouchDevice$$)() ? this.$_onTouchDragStart$($event$$616$$) : this.$_onMouseDragStart$($event$$616$$)
};
D.$JSCompiler_prototypeAlias$$.$_onDragMove$ = function $$JSCompiler_prototypeAlias$$$$_onDragMove$$($event$$617$$) {
  return(0,D.$DvtAgent$isTouchDevice$$)() ? this.$_onTouchDragMove$($event$$617$$) : this.$_onMouseDragMove$($event$$617$$)
};
D.$JSCompiler_prototypeAlias$$.$_onDragEnd$ = function $$JSCompiler_prototypeAlias$$$$_onDragEnd$$($event$$618$$) {
  return(0,D.$DvtAgent$isTouchDevice$$)() ? this.$_onTouchDragEnd$($event$$618$$) : this.$_onMouseDragEnd$($event$$618$$)
};
D.$JSCompiler_prototypeAlias$$.$_getRelativePosition$ = function $$JSCompiler_prototypeAlias$$$$_getRelativePosition$$($pageX$$11$$, $pageY$$11$$) {
  this.$_stageAbsolutePosition$ || (this.$_stageAbsolutePosition$ = (0,D.$JSCompiler_StaticMethods_getStageAbsolutePosition$$)(this.$_context$));
  return new D.$DvtPoint$$($pageX$$11$$ - this.$_stageAbsolutePosition$.x, $pageY$$11$$ - this.$_stageAbsolutePosition$.y)
};
D.$JSCompiler_prototypeAlias$$.$_onMouseDragStart$ = function $$JSCompiler_prototypeAlias$$$$_onMouseDragStart$$($event$$619$$) {
  if(2 != $event$$619$$.button) {
    var $relPos$$59$$ = this.$_getRelativePosition$($event$$619$$.pageX, $event$$619$$.pageY);
    (0,D.$DvtEventManager$consumeEvent$$)($event$$619$$);
    this.$getCtx$().$_stage$.$_SVGRoot$.parentNode.focus();
    return this.$_overview$.$beginDragPan$($event$$619$$, $relPos$$59$$.x, $relPos$$59$$.y)
  }
  return D.$JSCompiler_alias_FALSE$$
};
D.$JSCompiler_prototypeAlias$$.$_onMouseDragMove$ = function $$JSCompiler_prototypeAlias$$$$_onMouseDragMove$$($event$$620$$) {
  var $relPos$$60$$ = this.$_getRelativePosition$($event$$620$$.pageX, $event$$620$$.pageY);
  $event$$620$$.stopPropagation();
  this.$_overview$.$contDragPan$($event$$620$$, $relPos$$60$$.x, $relPos$$60$$.y);
  return D.$JSCompiler_alias_TRUE$$
};
D.$JSCompiler_prototypeAlias$$.$_onMouseDragEnd$ = function $$JSCompiler_prototypeAlias$$$$_onMouseDragEnd$$($event$$621$$) {
  $event$$621$$.stopPropagation();
  this.$_overview$.$endDragPan$();
  this.$_stageAbsolutePosition$ = D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.$_onTouchDragStart$ = function $$JSCompiler_prototypeAlias$$$$_onTouchDragStart$$($event$$622$$) {
  var $relPos$$61_touches$$12$$ = $event$$622$$.touches;
  $event$$622$$.stopPropagation();
  return 1 == $relPos$$61_touches$$12$$.length ? ($relPos$$61_touches$$12$$ = this.$_getRelativePosition$($relPos$$61_touches$$12$$[0].pageX, $relPos$$61_touches$$12$$[0].pageY), $event$$622$$.preventDefault(), this.$_overview$.$beginDragPan$($event$$622$$, $relPos$$61_touches$$12$$.x, $relPos$$61_touches$$12$$.y)) : D.$JSCompiler_alias_FALSE$$
};
D.$JSCompiler_prototypeAlias$$.$_onTouchDragMove$ = function $$JSCompiler_prototypeAlias$$$$_onTouchDragMove$$($event$$623$$) {
  var $relPos$$62_touches$$13$$ = $event$$623$$.touches;
  1 == $relPos$$62_touches$$13$$.length && ($relPos$$62_touches$$13$$ = this.$_getRelativePosition$($relPos$$62_touches$$13$$[0].pageX, $relPos$$62_touches$$13$$[0].pageY), this.$_overview$.$contDragPan$($event$$623$$, $relPos$$62_touches$$13$$.x, $relPos$$62_touches$$13$$.y), $event$$623$$.preventDefault());
  $event$$623$$.stopPropagation()
};
D.$JSCompiler_prototypeAlias$$.$_onTouchDragEnd$ = function $$JSCompiler_prototypeAlias$$$$_onTouchDragEnd$$($event$$624$$) {
  this.$_overview$.$endDragPan$();
  (0,D.$DvtEventManager$consumeEvent$$)($event$$624$$);
  this.$_stageAbsolutePosition$ = D.$JSCompiler_alias_NULL$$
};

  return D;
});
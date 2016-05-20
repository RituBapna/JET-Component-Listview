/**
 * Copyright (c) 2014, Oracle and/or its affiliates.
 * All rights reserved.
 */
"use strict";
define(['./DvtToolkit', './DvtOverview'], function(dvt) {
  // Internal use only.  All APIs and functionality are subject to change at any time.
  
  // Map the D namespace to dvt, which is used to provide access across partitions.
  var D = dvt;
  
D.$DvtTimelineOverview$$ = function $$DvtTimelineOverview$$$($context$$632$$, $callback$$169$$, $callbackObj$$119$$) {
  this.Init($context$$632$$, $callback$$169$$, $callbackObj$$119$$)
};
(0,D.$goog$exportPath_$$)("DvtTimelineOverview", D.$DvtTimelineOverview$$);
D.$DvtObj$$.$createSubclass$(D.$DvtTimelineOverview$$, D.$DvtOverview$$, "DvtTimelineOverview");
D.$DvtTimelineOverview$$.prototype.Init = function $$DvtTimelineOverview$$$$Init$($colors$$5_context$$633$$, $callback$$170$$, $callbackObj$$120$$) {
  D.$DvtTimelineOverview$$.$superclass$.Init.call(this, $colors$$5_context$$633$$, $callback$$170$$, $callbackObj$$120$$);
  $colors$$5_context$$633$$ = [D.$DvtColorUtils$$.$getPound$(D.$DvtColorUtils$$.$getPastel$("#aadd77", 0.35)), "#aadd77", D.$DvtColorUtils$$.$getPound$(D.$DvtColorUtils$$.$getDarker$("#aadd77", 0.5))];
  D.$DvtTimeUtils$$.$supportsTouch$() && ($colors$$5_context$$633$$ = ["#aadd77"]);
  this.$_defColors$ = $colors$$5_context$$633$$;
  this.$_markerBorderFill$ = (0,D.$DvtSolidFill$invisibleFill$$)();
  this.$_markerSize$ = 12
};
D.$DvtTimelineOverview$$.prototype.$getParser$ = function $$DvtTimelineOverview$$$$$getParser$$() {
  return new D.$DvtTimelineOverviewParser$$(this)
};
D.$DvtTimelineOverview$$.prototype.$_applyParsedProperties$ = function $$DvtTimelineOverview$$$$$_applyParsedProperties$$($_eOffset_borderOpacity_props$$10$$) {
  D.$DvtTimelineOverview$$.$superclass$.$_applyParsedProperties$.call(this, $_eOffset_borderOpacity_props$$10$$);
  this.$_selectionMode$ = $_eOffset_borderOpacity_props$$10$$.$selectionMode$;
  this.$_markers$ = $_eOffset_borderOpacity_props$$10$$.$markers$;
  this.$_seriesIds$ = $_eOffset_borderOpacity_props$$10$$.$seriesIds$;
  this.$_defaultMarkerStyles$ = $_eOffset_borderOpacity_props$$10$$.$defaultMarkerStyles$;
  this.$_durationColors$ = "#267DB3 #68C182 #FAD55C #ED6647 #8561C8 #6DDBDB #FFB54D #E371B2 #47BDEF #A2BF39 #A75DBA #F7F37B".split(" ");
  $_eOffset_borderOpacity_props$$10$$.$labelStyle$ && (this.$_labelStyle$ = new D.$DvtCSSStyle$$($_eOffset_borderOpacity_props$$10$$.$labelStyle$));
  $_eOffset_borderOpacity_props$$10$$ = "solid" == this.$getStyle$("_", "bs") ? (0,window.parseInt)(this.$getStyle$("_", "bof"), 10) : 1;
  var $_asOffset$$ = "solid" == this.$getStyle$("_as", "bs") ? (0,window.parseInt)(this.$getStyle$("_as", "bof"), 10) : 1, $_sOffset$$ = "solid" == this.$getStyle$("_s", "bs") ? (0,window.parseInt)(this.$getStyle$("_s", "bof"), 10) : 1;
  this.$_markerSpacingOffset$ = "none" != this.$_selectionMode$ ? window.Math.max($_asOffset$$, $_sOffset$$, $_eOffset_borderOpacity_props$$10$$, 1) / 2 + 1 : 1;
  this.$_defOpacity$ = this.$isVertical$() ? 0 : 0.75;
  this.$_defAlphas$ = [this.$_defOpacity$, this.$_defOpacity$, this.$_defOpacity$];
  this.$_radialFill$ = new D.$DvtLinearGradientFill$$(250, this.$_defColors$, this.$_defAlphas$);
  this.$_linearFill$ = new D.$DvtLinearGradientFill$$(180, this.$_defColors$, this.$_defAlphas$);
  $_eOffset_borderOpacity_props$$10$$ = this.$isVertical$() ? 0 : 1;
  this.$_border$ = new D.$DvtSolidStroke$$("#aadd77", $_eOffset_borderOpacity_props$$10$$)
};
D.$DvtTimelineOverview$$.prototype.$addLabel$ = function $$DvtTimelineOverview$$$$$addLabel$$($pos$$77$$, $text$$115$$, $width$$166$$, $height$$150$$, $maxWidth$$33$$, $id$$310$$) {
  D.$DvtTimelineOverview$$.$superclass$.$addLabel$.call(this, $pos$$77$$, $text$$115$$, $width$$166$$, $height$$150$$, $maxWidth$$33$$, $id$$310$$, this.$_labelStyle$)
};
D.$JSCompiler_StaticMethods_getDrawableById$$ = function $$JSCompiler_StaticMethods_getDrawableById$$$($JSCompiler_StaticMethods_getDrawableById$self$$, $id$$311$$) {
  for(var $drawableId$$1$$ = "_mrk_" + $id$$311$$, $durationId$$ = "_drn_" + $id$$311$$, $numChildren$$16$$ = $JSCompiler_StaticMethods_getDrawableById$self$$.$getNumChildren$(), $childIndex$$11$$ = 0;$childIndex$$11$$ < $numChildren$$16$$;$childIndex$$11$$++) {
    var $drawable$$7$$ = $JSCompiler_StaticMethods_getDrawableById$self$$.$getChildAt$($childIndex$$11$$);
    if($drawable$$7$$ != D.$JSCompiler_alias_NULL$$ && ($drawableId$$1$$ == $drawable$$7$$.getId() || $durationId$$ == $drawable$$7$$.getId())) {
      return $drawable$$7$$
    }
  }
  return D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtTimelineOverview$$.prototype;
D.$JSCompiler_prototypeAlias$$.$getItemId$ = function $$JSCompiler_prototypeAlias$$$$getItemId$$($drawable$$8$$) {
  return $drawable$$8$$.getId().substr(5)
};
D.$JSCompiler_prototypeAlias$$.$getStyle$ = function $$JSCompiler_prototypeAlias$$$$getStyle$$($state$$100$$, $style$$121$$) {
  return this.$_borderStyles$[$state$$100$$ + $style$$121$$]
};
D.$JSCompiler_prototypeAlias$$.$getX$ = function $$JSCompiler_prototypeAlias$$$$getX$$($drawable$$9$$) {
  return $drawable$$9$$.$_node$ != D.$JSCompiler_alias_NULL$$ ? $drawable$$9$$.$_node$.$getX$() : $drawable$$9$$.$getMatrix$().$_tx$
};
D.$JSCompiler_prototypeAlias$$.$getY$ = function $$JSCompiler_prototypeAlias$$$$getY$$($drawable$$10$$) {
  return $drawable$$10$$.$_node$ != D.$JSCompiler_alias_NULL$$ ? $drawable$$10$$.$_node$.$getY$() : $drawable$$10$$.$getMatrix$().$_ty$
};
D.$JSCompiler_prototypeAlias$$.$getScaleX$ = function $$JSCompiler_prototypeAlias$$$$getScaleX$$($node$$303_scaleX$$7$$) {
  $node$$303_scaleX$$7$$ = $node$$303_scaleX$$7$$.$getScaleX$();
  $node$$303_scaleX$$7$$ == D.$JSCompiler_alias_NULL$$ && ($node$$303_scaleX$$7$$ = this.$isVertical$() ? (this.$Width$ - this.$getTimeAxisWidth$() - 4) / 2 : 1);
  return $node$$303_scaleX$$7$$
};
D.$JSCompiler_prototypeAlias$$.$getScaleY$ = function $$JSCompiler_prototypeAlias$$$$getScaleY$$($node$$304_scaleY$$7$$) {
  $node$$304_scaleY$$7$$ = $node$$304_scaleY$$7$$.$getScaleY$();
  $node$$304_scaleY$$7$$ == D.$JSCompiler_alias_NULL$$ && ($node$$304_scaleY$$7$$ = 1);
  return $node$$304_scaleY$$7$$
};
D.$JSCompiler_prototypeAlias$$.$parseDataXML$ = function $$JSCompiler_prototypeAlias$$$$parseDataXML$$($width$$167$$, $height$$151$$) {
  D.$DvtTimelineOverview$$.$superclass$.$parseDataXML$.call(this, $width$$167$$, $height$$151$$);
  if(this.$_markers$ != D.$JSCompiler_alias_NULL$$) {
    for(var $opt$$2$$ = (0,D.$JSCompiler_StaticMethods_calculateOptimalSize$$)(this, this.$_start$, this.$_end$, $width$$167$$, $height$$151$$, this.$_markerSize$), $durationMarkers$$ = [], $context$$inline_8885_j$$120$$ = 0;$context$$inline_8885_j$$120$$ < this.$_markers$.length;$context$$inline_8885_j$$120$$++) {
      var $i$$inline_8886_marker$$19_node$$inline_8860$$ = this.$_markers$[$context$$inline_8885_j$$120$$];
      if($i$$inline_8886_marker$$19_node$$inline_8860$$.$_endTime$ == D.$JSCompiler_alias_NULL$$) {
        var $alphas$$inline_8877_darker$$inline_8876_height$$inline_8870_sz$$inline_8861$$ = $opt$$2$$, $displayable$$inline_8873_durationId$$inline_8890_feelerStroke$$inline_8894_itemId$$inline_8862$$ = "_mrk_" + $i$$inline_8886_marker$$19_node$$inline_8860$$.getId(), $color$$inline_8863_count$$inline_8880_node$$inline_8888_stroke$$inline_8879$$ = $i$$inline_8886_marker$$19_node$$inline_8860$$.$getColor$(), $duration$$inline_8893_fill$$inline_8878_isGradient$$inline_8864_x$$inline_8889$$ = $i$$inline_8886_marker$$19_node$$inline_8860$$.$_gradient$, 
        $durationY$$inline_8891_lastChild$$inline_8881_opacity$$inline_8865$$ = $i$$inline_8886_marker$$19_node$$inline_8860$$.$getOpacity$();
        $durationY$$inline_8891_lastChild$$inline_8881_opacity$$inline_8865$$ == D.$JSCompiler_alias_NULL$$ && ($durationY$$inline_8891_lastChild$$inline_8881_opacity$$inline_8865$$ = this.$_defOpacity$, 0 == $durationY$$inline_8891_lastChild$$inline_8881_opacity$$inline_8865$$ && $color$$inline_8863_count$$inline_8880_node$$inline_8888_stroke$$inline_8879$$ != D.$JSCompiler_alias_NULL$$ && ($durationY$$inline_8891_lastChild$$inline_8881_opacity$$inline_8865$$ = 1));
        var $colors$$inline_8874_lighter$$inline_8875_scaleX$$inline_8866_width$$inline_8869_x2$$inline_8892$$ = this.$getScaleX$($i$$inline_8886_marker$$19_node$$inline_8860$$), $cx$$inline_8871_scaleY$$inline_8867$$ = this.$getScaleY$($i$$inline_8886_marker$$19_node$$inline_8860$$), $j$$inline_8887_marker$$inline_8868$$ = $i$$inline_8886_marker$$19_node$$inline_8860$$.$getShape$();
        if(this.$isVertical$()) {
          var $j$$inline_8887_marker$$inline_8868$$ = "rectangle", $colors$$inline_8874_lighter$$inline_8875_scaleX$$inline_8866_width$$inline_8869_x2$$inline_8892$$ = 2 * $colors$$inline_8874_lighter$$inline_8875_scaleX$$inline_8866_width$$inline_8869_x2$$inline_8892$$, $alphas$$inline_8877_darker$$inline_8876_height$$inline_8870_sz$$inline_8861$$ = 2 * $cx$$inline_8871_scaleY$$inline_8867$$, $cx$$inline_8871_scaleY$$inline_8867$$ = $i$$inline_8886_marker$$19_node$$inline_8860$$.$getY$() + $colors$$inline_8874_lighter$$inline_8875_scaleX$$inline_8866_width$$inline_8869_x2$$inline_8892$$ / 
          2, $cy$$inline_8872$$ = $i$$inline_8886_marker$$19_node$$inline_8860$$.$getX$() + $alphas$$inline_8877_darker$$inline_8876_height$$inline_8870_sz$$inline_8861$$ / 2
        }else {
          $colors$$inline_8874_lighter$$inline_8875_scaleX$$inline_8866_width$$inline_8869_x2$$inline_8892$$ *= $alphas$$inline_8877_darker$$inline_8876_height$$inline_8870_sz$$inline_8861$$, $alphas$$inline_8877_darker$$inline_8876_height$$inline_8870_sz$$inline_8861$$ *= $cx$$inline_8871_scaleY$$inline_8867$$, $cx$$inline_8871_scaleY$$inline_8867$$ = $i$$inline_8886_marker$$19_node$$inline_8860$$.$getX$() + $colors$$inline_8874_lighter$$inline_8875_scaleX$$inline_8866_width$$inline_8869_x2$$inline_8892$$ / 
          2, $cy$$inline_8872$$ = $i$$inline_8886_marker$$19_node$$inline_8860$$.$getY$() + $alphas$$inline_8877_darker$$inline_8876_height$$inline_8870_sz$$inline_8861$$ / 2
        }
        $displayable$$inline_8873_durationId$$inline_8890_feelerStroke$$inline_8894_itemId$$inline_8862$$ = new D.$DvtSimpleMarker$$(this.$getCtx$(), $j$$inline_8887_marker$$inline_8868$$, D.$JSCompiler_alias_NULL$$, $cx$$inline_8871_scaleY$$inline_8867$$, $cy$$inline_8872$$, $colors$$inline_8874_lighter$$inline_8875_scaleX$$inline_8866_width$$inline_8869_x2$$inline_8892$$, $alphas$$inline_8877_darker$$inline_8876_height$$inline_8870_sz$$inline_8861$$, D.$JSCompiler_alias_NULL$$, $displayable$$inline_8873_durationId$$inline_8890_feelerStroke$$inline_8894_itemId$$inline_8862$$);
        $displayable$$inline_8873_durationId$$inline_8890_feelerStroke$$inline_8894_itemId$$inline_8862$$.$_node$ = $i$$inline_8886_marker$$19_node$$inline_8860$$;
        $color$$inline_8863_count$$inline_8880_node$$inline_8888_stroke$$inline_8879$$ == D.$JSCompiler_alias_NULL$$ && $durationY$$inline_8891_lastChild$$inline_8881_opacity$$inline_8865$$ == this.$_defOpacity$ && $duration$$inline_8893_fill$$inline_8878_isGradient$$inline_8864_x$$inline_8889$$ == D.$JSCompiler_alias_NULL$$ ? ($duration$$inline_8893_fill$$inline_8878_isGradient$$inline_8864_x$$inline_8889$$ = "circle" == $j$$inline_8887_marker$$inline_8868$$ ? this.$_radialFill$ : this.$_linearFill$, 
        $color$$inline_8863_count$$inline_8880_node$$inline_8888_stroke$$inline_8879$$ = this.$_border$) : ($colors$$inline_8874_lighter$$inline_8875_scaleX$$inline_8866_width$$inline_8869_x2$$inline_8892$$ = this.$_defColors$, $color$$inline_8863_count$$inline_8880_node$$inline_8888_stroke$$inline_8879$$ != D.$JSCompiler_alias_NULL$$ && (D.$DvtTimeUtils$$.$supportsTouch$() ? $colors$$inline_8874_lighter$$inline_8875_scaleX$$inline_8866_width$$inline_8869_x2$$inline_8892$$ = [$color$$inline_8863_count$$inline_8880_node$$inline_8888_stroke$$inline_8879$$] : 
        ($colors$$inline_8874_lighter$$inline_8875_scaleX$$inline_8866_width$$inline_8869_x2$$inline_8892$$ = D.$DvtColorUtils$$.$getPastel$($color$$inline_8863_count$$inline_8880_node$$inline_8888_stroke$$inline_8879$$, 0.5), $alphas$$inline_8877_darker$$inline_8876_height$$inline_8870_sz$$inline_8861$$ = D.$DvtColorUtils$$.$getDarker$($color$$inline_8863_count$$inline_8880_node$$inline_8888_stroke$$inline_8879$$, 0.5), $colors$$inline_8874_lighter$$inline_8875_scaleX$$inline_8866_width$$inline_8869_x2$$inline_8892$$ = 
        [$colors$$inline_8874_lighter$$inline_8875_scaleX$$inline_8866_width$$inline_8869_x2$$inline_8892$$, $color$$inline_8863_count$$inline_8880_node$$inline_8888_stroke$$inline_8879$$, $alphas$$inline_8877_darker$$inline_8876_height$$inline_8870_sz$$inline_8861$$])), $alphas$$inline_8877_darker$$inline_8876_height$$inline_8870_sz$$inline_8861$$ = [$durationY$$inline_8891_lastChild$$inline_8881_opacity$$inline_8865$$, $durationY$$inline_8891_lastChild$$inline_8881_opacity$$inline_8865$$, $durationY$$inline_8891_lastChild$$inline_8881_opacity$$inline_8865$$], 
        $duration$$inline_8893_fill$$inline_8878_isGradient$$inline_8864_x$$inline_8889$$ = $duration$$inline_8893_fill$$inline_8878_isGradient$$inline_8864_x$$inline_8889$$ == D.$JSCompiler_alias_NULL$$ ? "circle" == $j$$inline_8887_marker$$inline_8868$$ ? new D.$DvtLinearGradientFill$$(250, $colors$$inline_8874_lighter$$inline_8875_scaleX$$inline_8866_width$$inline_8869_x2$$inline_8892$$, $alphas$$inline_8877_darker$$inline_8876_height$$inline_8870_sz$$inline_8861$$) : new D.$DvtLinearGradientFill$$(180, 
        $colors$$inline_8874_lighter$$inline_8875_scaleX$$inline_8866_width$$inline_8869_x2$$inline_8892$$, $alphas$$inline_8877_darker$$inline_8876_height$$inline_8870_sz$$inline_8861$$) : new D.$DvtSolidFill$$($color$$inline_8863_count$$inline_8880_node$$inline_8888_stroke$$inline_8879$$, $alphas$$inline_8877_darker$$inline_8876_height$$inline_8870_sz$$inline_8861$$[0]), $color$$inline_8863_count$$inline_8880_node$$inline_8888_stroke$$inline_8879$$ = new D.$DvtSolidStroke$$($color$$inline_8863_count$$inline_8880_node$$inline_8888_stroke$$inline_8879$$, 
        $durationY$$inline_8891_lastChild$$inline_8881_opacity$$inline_8865$$));
        $displayable$$inline_8873_durationId$$inline_8890_feelerStroke$$inline_8894_itemId$$inline_8862$$.$setFill$($duration$$inline_8893_fill$$inline_8878_isGradient$$inline_8864_x$$inline_8889$$);
        $displayable$$inline_8873_durationId$$inline_8890_feelerStroke$$inline_8894_itemId$$inline_8862$$.$setStroke$($color$$inline_8863_count$$inline_8880_node$$inline_8888_stroke$$inline_8879$$);
        "none" != this.$_selectionMode$ && $displayable$$inline_8873_durationId$$inline_8890_feelerStroke$$inline_8894_itemId$$inline_8862$$.$setSelectable$(D.$JSCompiler_alias_TRUE$$);
        $color$$inline_8863_count$$inline_8880_node$$inline_8888_stroke$$inline_8879$$ = this.$getNumChildren$();
        $durationY$$inline_8891_lastChild$$inline_8881_opacity$$inline_8865$$ = this.$getChildAt$($color$$inline_8863_count$$inline_8880_node$$inline_8888_stroke$$inline_8879$$ - 1);
        $color$$inline_8863_count$$inline_8880_node$$inline_8888_stroke$$inline_8879$$ > this.$_lastChildIndex$ && ("tb" == $durationY$$inline_8891_lastChild$$inline_8881_opacity$$inline_8865$$.getId() || "arr" == $durationY$$inline_8891_lastChild$$inline_8881_opacity$$inline_8865$$.getId()) ? this.$addChildAt$($displayable$$inline_8873_durationId$$inline_8890_feelerStroke$$inline_8894_itemId$$inline_8862$$, $color$$inline_8863_count$$inline_8880_node$$inline_8888_stroke$$inline_8879$$ - this.$_lastChildIndex$) : 
        this.$addChild$($displayable$$inline_8873_durationId$$inline_8890_feelerStroke$$inline_8894_itemId$$inline_8862$$);
        $i$$inline_8886_marker$$19_node$$inline_8860$$.$setDisplayable$($displayable$$inline_8873_durationId$$inline_8890_feelerStroke$$inline_8894_itemId$$inline_8862$$);
        this.$applyState$($displayable$$inline_8873_durationId$$inline_8890_feelerStroke$$inline_8894_itemId$$inline_8862$$, "_");
        (this.$isVertical$() || "rectangle" == $j$$inline_8887_marker$$inline_8868$$ || "diamond" == $j$$inline_8887_marker$$inline_8868$$ || "triangleUp" == $j$$inline_8887_marker$$inline_8868$$ || "triangleDown" == $j$$inline_8887_marker$$inline_8868$$ || "plus" == $j$$inline_8887_marker$$inline_8868$$) && "false" != this.$_defaultMarkerStyles$.$pixelHinting$ && (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)($displayable$$inline_8873_durationId$$inline_8890_feelerStroke$$inline_8894_itemId$$inline_8862$$)
      }else {
        $durationMarkers$$[$durationMarkers$$.length] = $i$$inline_8886_marker$$19_node$$inline_8860$$
      }
    }
    this.$prepareDurations$($durationMarkers$$);
    $context$$inline_8885_j$$120$$ = this.$getCtx$();
    for($i$$inline_8886_marker$$19_node$$inline_8860$$ = this.$_maxDurationY$;0 < $i$$inline_8886_marker$$19_node$$inline_8860$$;$i$$inline_8886_marker$$19_node$$inline_8860$$--) {
      for($j$$inline_8887_marker$$inline_8868$$ = 0;$j$$inline_8887_marker$$inline_8868$$ < $durationMarkers$$.length;$j$$inline_8887_marker$$inline_8868$$++) {
        $color$$inline_8863_count$$inline_8880_node$$inline_8888_stroke$$inline_8879$$ = $durationMarkers$$[$j$$inline_8887_marker$$inline_8868$$], $i$$inline_8886_marker$$19_node$$inline_8860$$ == $color$$inline_8863_count$$inline_8880_node$$inline_8888_stroke$$inline_8879$$.$_durationLevel$ && ($duration$$inline_8893_fill$$inline_8878_isGradient$$inline_8864_x$$inline_8889$$ = D.$DvtTimeUtils$$.$getDatePosition$(this.$_start$, this.$_end$, $color$$inline_8863_count$$inline_8880_node$$inline_8888_stroke$$inline_8879$$.getTime(), 
        this.$isVertical$() ? this.$Height$ : this.$Width$), $displayable$$inline_8873_durationId$$inline_8890_feelerStroke$$inline_8894_itemId$$inline_8862$$ = "_drn_" + $color$$inline_8863_count$$inline_8880_node$$inline_8888_stroke$$inline_8879$$.getId(), $durationY$$inline_8891_lastChild$$inline_8881_opacity$$inline_8865$$ = 9 + 5 * $color$$inline_8863_count$$inline_8880_node$$inline_8888_stroke$$inline_8879$$.$_durationLevel$, $colors$$inline_8874_lighter$$inline_8875_scaleX$$inline_8866_width$$inline_8869_x2$$inline_8892$$ = 
        D.$DvtTimeUtils$$.$getDatePosition$(this.$_start$, this.$_end$, $color$$inline_8863_count$$inline_8880_node$$inline_8888_stroke$$inline_8879$$.$_endTime$, this.$isVertical$() ? this.$Height$ : this.$Width$), $duration$$inline_8893_fill$$inline_8878_isGradient$$inline_8864_x$$inline_8889$$ = this.$isVertical$() ? this.$isRTL$() ? new D.$DvtRect$$($context$$inline_8885_j$$120$$, 0, $duration$$inline_8893_fill$$inline_8878_isGradient$$inline_8864_x$$inline_8889$$, $durationY$$inline_8891_lastChild$$inline_8881_opacity$$inline_8865$$, 
        $colors$$inline_8874_lighter$$inline_8875_scaleX$$inline_8866_width$$inline_8869_x2$$inline_8892$$ - $duration$$inline_8893_fill$$inline_8878_isGradient$$inline_8864_x$$inline_8889$$, $displayable$$inline_8873_durationId$$inline_8890_feelerStroke$$inline_8894_itemId$$inline_8862$$) : new D.$DvtRect$$($context$$inline_8885_j$$120$$, this.$Width$ - $durationY$$inline_8891_lastChild$$inline_8881_opacity$$inline_8865$$, $duration$$inline_8893_fill$$inline_8878_isGradient$$inline_8864_x$$inline_8889$$, 
        $durationY$$inline_8891_lastChild$$inline_8881_opacity$$inline_8865$$, $colors$$inline_8874_lighter$$inline_8875_scaleX$$inline_8866_width$$inline_8869_x2$$inline_8892$$ - $duration$$inline_8893_fill$$inline_8878_isGradient$$inline_8864_x$$inline_8889$$, $displayable$$inline_8873_durationId$$inline_8890_feelerStroke$$inline_8894_itemId$$inline_8862$$) : this.$isRTL$() ? new D.$DvtRect$$($context$$inline_8885_j$$120$$, this.$Width$ - $colors$$inline_8874_lighter$$inline_8875_scaleX$$inline_8866_width$$inline_8869_x2$$inline_8892$$, 
        this.$Height$ - $durationY$$inline_8891_lastChild$$inline_8881_opacity$$inline_8865$$ - 20, $colors$$inline_8874_lighter$$inline_8875_scaleX$$inline_8866_width$$inline_8869_x2$$inline_8892$$ - $duration$$inline_8893_fill$$inline_8878_isGradient$$inline_8864_x$$inline_8889$$, $durationY$$inline_8891_lastChild$$inline_8881_opacity$$inline_8865$$, $displayable$$inline_8873_durationId$$inline_8890_feelerStroke$$inline_8894_itemId$$inline_8862$$) : new D.$DvtRect$$($context$$inline_8885_j$$120$$, 
        $duration$$inline_8893_fill$$inline_8878_isGradient$$inline_8864_x$$inline_8889$$, this.$Height$ - $durationY$$inline_8891_lastChild$$inline_8881_opacity$$inline_8865$$ - 20, $colors$$inline_8874_lighter$$inline_8875_scaleX$$inline_8866_width$$inline_8869_x2$$inline_8892$$ - $duration$$inline_8893_fill$$inline_8878_isGradient$$inline_8864_x$$inline_8889$$, $durationY$$inline_8891_lastChild$$inline_8881_opacity$$inline_8865$$, $displayable$$inline_8873_durationId$$inline_8890_feelerStroke$$inline_8894_itemId$$inline_8862$$), 
        $duration$$inline_8893_fill$$inline_8878_isGradient$$inline_8864_x$$inline_8889$$.$setFill$(new D.$DvtSolidFill$$($color$$inline_8863_count$$inline_8880_node$$inline_8888_stroke$$inline_8879$$.$_durationFillColor$)), $displayable$$inline_8873_durationId$$inline_8890_feelerStroke$$inline_8894_itemId$$inline_8862$$ = new D.$DvtSolidStroke$$(this.$getStyle$("_", "dbc"), 1, 1), $duration$$inline_8893_fill$$inline_8878_isGradient$$inline_8864_x$$inline_8889$$.$setStroke$($displayable$$inline_8873_durationId$$inline_8890_feelerStroke$$inline_8894_itemId$$inline_8862$$), 
        (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)($duration$$inline_8893_fill$$inline_8878_isGradient$$inline_8864_x$$inline_8889$$), $duration$$inline_8893_fill$$inline_8878_isGradient$$inline_8864_x$$inline_8889$$.$_node$ = $color$$inline_8863_count$$inline_8880_node$$inline_8888_stroke$$inline_8879$$, this.$addChild$($duration$$inline_8893_fill$$inline_8878_isGradient$$inline_8864_x$$inline_8889$$), $color$$inline_8863_count$$inline_8880_node$$inline_8888_stroke$$inline_8879$$.$_durationBar$ = 
        $duration$$inline_8893_fill$$inline_8878_isGradient$$inline_8864_x$$inline_8889$$, $color$$inline_8863_count$$inline_8880_node$$inline_8888_stroke$$inline_8879$$.$_durationY$ = $durationY$$inline_8891_lastChild$$inline_8881_opacity$$inline_8865$$ - 2)
      }
    }
    this.removeChild(this.$_timeAxisTopBar$);
    this.$addChild$(this.$_timeAxisTopBar$);
    this.$_markerSize$ = $opt$$2$$
  }
};
D.$JSCompiler_prototypeAlias$$.$prepareDurations$ = function $$JSCompiler_prototypeAlias$$$$prepareDurations$$($durationMarkers$$1$$) {
  this.$_maxDurationY$ = 0;
  var $markerSeries$$ = D.$JSCompiler_alias_NULL$$;
  this.$_durationColorMap$ == D.$JSCompiler_alias_NULL$$ && (this.$_durationColorMap$ = {});
  for(var $i$$856$$ = 0;$i$$856$$ < $durationMarkers$$1$$.length;$i$$856$$++) {
    var $marker$$20$$ = $durationMarkers$$1$$[$i$$856$$], $id$$312$$ = $marker$$20$$.getId(), $sId$$2$$ = $id$$312$$.substring($id$$312$$.indexOf(":") + 1, $id$$312$$.length), $sId$$2$$ = $sId$$2$$.substring(0, $sId$$2$$.indexOf(":"));
    $sId$$2$$ != $markerSeries$$ && (this.$_colorCount$ = 0, $markerSeries$$ = $sId$$2$$);
    $marker$$20$$.$_durationLevel$ = (0,D.$JSCompiler_StaticMethods_calculateDurationY$$)(this, $marker$$20$$, $durationMarkers$$1$$);
    $marker$$20$$.$_durationFillColor$ == D.$JSCompiler_alias_NULL$$ && (this.$_durationColorMap$[$id$$312$$] == D.$JSCompiler_alias_NULL$$ ? (this.$_durationColorMap$[$id$$312$$] = this.$_colorCount$, $marker$$20$$.$_durationFillColor$ = this.$_durationColors$[this.$_colorCount$], this.$_colorCount$++, this.$_colorCount$ == this.$_durationColors$.length && (this.$_colorCount$ = 0)) : $marker$$20$$.$_durationFillColor$ = this.$_durationColors$[this.$_durationColorMap$[$id$$312$$]])
  }
};
D.$JSCompiler_prototypeAlias$$.$getDurationColorMap$ = function $$JSCompiler_prototypeAlias$$$$getDurationColorMap$$() {
  return this.$_durationColorMap$ ? this.$_durationColorMap$ : D.$JSCompiler_alias_NULL$$
};
D.$DvtTimelineOverview$$.prototype.getDurationColorMap = D.$DvtTimelineOverview$$.prototype.$getDurationColorMap$;
D.$JSCompiler_StaticMethods_calculateOptimalSize$$ = function $$JSCompiler_StaticMethods_calculateOptimalSize$$$($JSCompiler_StaticMethods_calculateOptimalSize$self$$, $start$$48$$, $end$$32$$, $width$$168$$, $height$$152$$, $size$$49$$) {
  for(var $JSCompiler_StaticMethods_calculateY$self$$inline_11487_JSCompiler_object_inline_cy_11598$$, $JSCompiler_object_inline_maxy_11599_result$$inline_11488$$, $result$$3$$ = {max:1, $arr$:[]}, $canvasSize$$ = $JSCompiler_StaticMethods_calculateOptimalSize$self$$.$isVertical$() ? $height$$152$$ : $width$$168$$, $i$$857$$ = 0;$i$$857$$ < $JSCompiler_StaticMethods_calculateOptimalSize$self$$.$_markers$.length;$i$$857$$++) {
    var $marker$$21_node$$inline_8901$$ = $JSCompiler_StaticMethods_calculateOptimalSize$self$$.$_markers$[$i$$857$$];
    if($marker$$21_node$$inline_8901$$.$_endTime$ != D.$JSCompiler_alias_NULL$$) {
      var $JSCompiler_StaticMethods_calculateSize$self$$inline_8900_x$$300$$ = D.$DvtTimeUtils$$.$getDatePosition$($start$$48$$, $end$$32$$, $marker$$21_node$$inline_8901$$.getTime(), $canvasSize$$);
      (0,D.$JSCompiler_StaticMethods_isHorizontalRTL$$)($JSCompiler_StaticMethods_calculateOptimalSize$self$$) && ($JSCompiler_StaticMethods_calculateSize$self$$inline_8900_x$$300$$ = $canvasSize$$ - $JSCompiler_StaticMethods_calculateSize$self$$inline_8900_x$$300$$);
      $marker$$21_node$$inline_8901$$.$setX$($JSCompiler_StaticMethods_calculateSize$self$$inline_8900_x$$300$$)
    }else {
      var $JSCompiler_StaticMethods_calculateSize$self$$inline_8900_x$$300$$ = $JSCompiler_StaticMethods_calculateOptimalSize$self$$, $cx$$inline_8910_start$$inline_8902$$ = $start$$48$$, $counter$$inline_8914_end$$inline_8903$$ = $end$$32$$, $cy$$inline_8912_size$$inline_8904$$ = $canvasSize$$, $borderOffset$$inline_8911_hsz$$inline_8905$$ = $size$$49$$ / 2, $result$$inline_8906$$ = $result$$3$$, $maxHeight$$inline_8907$$ = $height$$152$$, $hszx$$inline_8908$$ = $borderOffset$$inline_8911_hsz$$inline_8905$$ * 
      $JSCompiler_StaticMethods_calculateSize$self$$inline_8900_x$$300$$.$getScaleX$($marker$$21_node$$inline_8901$$) + $JSCompiler_StaticMethods_calculateSize$self$$inline_8900_x$$300$$.$_markerSpacingOffset$, $hszy$$inline_8909$$ = $borderOffset$$inline_8911_hsz$$inline_8905$$ * $JSCompiler_StaticMethods_calculateSize$self$$inline_8900_x$$300$$.$getScaleY$($marker$$21_node$$inline_8901$$) + $JSCompiler_StaticMethods_calculateSize$self$$inline_8900_x$$300$$.$_markerSpacingOffset$, $cx$$inline_8910_start$$inline_8902$$ = 
      D.$DvtTimeUtils$$.$getDatePosition$($cx$$inline_8910_start$$inline_8902$$, $counter$$inline_8914_end$$inline_8903$$, $marker$$21_node$$inline_8901$$.getTime(), $cy$$inline_8912_size$$inline_8904$$);
      (0,D.$JSCompiler_StaticMethods_isHorizontalRTL$$)($JSCompiler_StaticMethods_calculateSize$self$$inline_8900_x$$300$$) && ($cx$$inline_8910_start$$inline_8902$$ = $cy$$inline_8912_size$$inline_8904$$ - $cx$$inline_8910_start$$inline_8902$$ - 2 * $hszx$$inline_8908$$);
      if($JSCompiler_StaticMethods_calculateSize$self$$inline_8900_x$$300$$.$isVertical$()) {
        $borderOffset$$inline_8911_hsz$$inline_8905$$ = 0, "solid" == $JSCompiler_StaticMethods_calculateSize$self$$inline_8900_x$$300$$.$getStyle$("_", "bs") && ($borderOffset$$inline_8911_hsz$$inline_8905$$ = (0,window.parseInt)($JSCompiler_StaticMethods_calculateSize$self$$inline_8900_x$$300$$.$getStyle$("_", "bw"), 10)), $cy$$inline_8912_size$$inline_8904$$ = $JSCompiler_StaticMethods_calculateSize$self$$inline_8900_x$$300$$.$isRTL$() ? $borderOffset$$inline_8911_hsz$$inline_8905$$ + 4 : $JSCompiler_StaticMethods_calculateSize$self$$inline_8900_x$$300$$.$Width$ - 
        2 * $JSCompiler_StaticMethods_calculateSize$self$$inline_8900_x$$300$$.$getScaleX$($marker$$21_node$$inline_8901$$) - $borderOffset$$inline_8911_hsz$$inline_8905$$ - 4
      }else {
        for(var $cy$$inline_8912_size$$inline_8904$$ = 3, $maxy$$inline_11494_maxy$$inline_8913$$ = 0, $counter$$inline_8914_end$$inline_8903$$ = 0;1 > $counter$$inline_8914_end$$inline_8903$$;) {
          $JSCompiler_StaticMethods_calculateY$self$$inline_11487_JSCompiler_object_inline_cy_11598$$ = $JSCompiler_StaticMethods_calculateSize$self$$inline_8900_x$$300$$;
          $JSCompiler_object_inline_maxy_11599_result$$inline_11488$$ = $result$$inline_8906$$;
          var $shape$$inline_11489$$ = $marker$$21_node$$inline_8901$$.$getShape$(), $cx$$inline_11490$$ = $cx$$inline_8910_start$$inline_8902$$, $cy$$inline_11491$$ = $cy$$inline_8912_size$$inline_8904$$, $hszx$$inline_11492$$ = $hszx$$inline_8908$$, $hszy$$inline_11493$$ = $hszy$$inline_8909$$, $hsz$$inline_11495$$ = $borderOffset$$inline_8911_hsz$$inline_8905$$, $maxHeight$$inline_11496$$ = $maxHeight$$inline_8907$$;
          "above" == $JSCompiler_StaticMethods_calculateY$self$$inline_11487_JSCompiler_object_inline_cy_11598$$.$_overviewPosition$ && ($cy$$inline_11491$$ += (0,D.$JSCompiler_StaticMethods_getTimeAxisHeight$$)($JSCompiler_StaticMethods_calculateY$self$$inline_11487_JSCompiler_object_inline_cy_11598$$));
          for(var $i$$inline_11497$$ = 0;$i$$inline_11497$$ < $JSCompiler_object_inline_maxy_11599_result$$inline_11488$$.$arr$.length;$i$$inline_11497$$++) {
            var $prevMarker$$inline_11498_prevScaleY$$inline_11503$$ = $JSCompiler_object_inline_maxy_11599_result$$inline_11488$$.$arr$[$i$$inline_11497$$], $prevX$$inline_11499_xDist$$inline_11504$$ = $prevMarker$$inline_11498_prevScaleY$$inline_11503$$.$getX$(), $prevY$$inline_11500$$ = $prevMarker$$inline_11498_prevScaleY$$inline_11503$$.$getY$(), $height$$inline_11506_prevShape$$inline_11501$$ = $prevMarker$$inline_11498_prevScaleY$$inline_11503$$.$getShape$(), $prevScaleX$$inline_11502$$ = 
            $JSCompiler_StaticMethods_calculateY$self$$inline_11487_JSCompiler_object_inline_cy_11598$$.$getScaleX$($prevMarker$$inline_11498_prevScaleY$$inline_11503$$), $prevMarker$$inline_11498_prevScaleY$$inline_11503$$ = $JSCompiler_StaticMethods_calculateY$self$$inline_11487_JSCompiler_object_inline_cy_11598$$.$getScaleY$($prevMarker$$inline_11498_prevScaleY$$inline_11503$$), $prevX$$inline_11499_xDist$$inline_11504$$ = window.Math.abs($cx$$inline_11490$$ - $prevX$$inline_11499_xDist$$inline_11504$$), 
            $minDist$$inline_11505$$ = $hsz$$inline_11495$$ * $prevScaleX$$inline_11502$$ + $JSCompiler_StaticMethods_calculateY$self$$inline_11487_JSCompiler_object_inline_cy_11598$$.$_markerSpacingOffset$ + $hszx$$inline_11492$$;
            if(!($prevX$$inline_11499_xDist$$inline_11504$$ >= $minDist$$inline_11505$$) && ($height$$inline_11506_prevShape$$inline_11501$$ = "circle" == $shape$$inline_11489$$ && "circle" == $height$$inline_11506_prevShape$$inline_11501$$ && $hszx$$inline_11492$$ == $hszy$$inline_11493$$ && $prevScaleX$$inline_11502$$ == $prevMarker$$inline_11498_prevScaleY$$inline_11503$$ ? window.Math.sqrt($minDist$$inline_11505$$ * $minDist$$inline_11505$$ - $prevX$$inline_11499_xDist$$inline_11504$$ * $prevX$$inline_11499_xDist$$inline_11504$$) : 
            $hsz$$inline_11495$$ * $prevMarker$$inline_11498_prevScaleY$$inline_11503$$ + $JSCompiler_StaticMethods_calculateY$self$$inline_11487_JSCompiler_object_inline_cy_11598$$.$_markerSpacingOffset$ + $hszy$$inline_11493$$, $height$$inline_11506_prevShape$$inline_11501$$ > window.Math.abs($cy$$inline_11491$$ - $prevY$$inline_11500$$) && ($cy$$inline_11491$$ = $prevY$$inline_11500$$ + $height$$inline_11506_prevShape$$inline_11501$$, $maxy$$inline_11494_maxy$$inline_8913$$ = window.Math.max($maxy$$inline_11494_maxy$$inline_8913$$, 
            $cy$$inline_11491$$ + $height$$inline_11506_prevShape$$inline_11501$$), 1 <= $hsz$$inline_11495$$ && $maxHeight$$inline_11496$$ != D.$JSCompiler_alias_VOID$$ && $maxy$$inline_11494_maxy$$inline_8913$$ > $maxHeight$$inline_11496$$))) {
              break
            }
          }
          $JSCompiler_StaticMethods_calculateY$self$$inline_11487_JSCompiler_object_inline_cy_11598$$ = $cy$$inline_11491$$;
          $JSCompiler_object_inline_maxy_11599_result$$inline_11488$$ = $maxy$$inline_11494_maxy$$inline_8913$$;
          $JSCompiler_StaticMethods_calculateY$self$$inline_11487_JSCompiler_object_inline_cy_11598$$ == $cy$$inline_8912_size$$inline_8904$$ && ($counter$$inline_8914_end$$inline_8903$$ = 1);
          $maxy$$inline_11494_maxy$$inline_8913$$ = $JSCompiler_object_inline_maxy_11599_result$$inline_11488$$;
          $cy$$inline_8912_size$$inline_8904$$ = $JSCompiler_StaticMethods_calculateY$self$$inline_11487_JSCompiler_object_inline_cy_11598$$;
          $counter$$inline_8914_end$$inline_8903$$++
        }
      }
      $marker$$21_node$$inline_8901$$.$setX$($cx$$inline_8910_start$$inline_8902$$);
      $marker$$21_node$$inline_8901$$.$setY$($cy$$inline_8912_size$$inline_8904$$);
      $result$$inline_8906$$.$arr$.push($marker$$21_node$$inline_8901$$);
      $maxy$$inline_11494_maxy$$inline_8913$$ > $result$$inline_8906$$.max && ($result$$inline_8906$$.max = $maxy$$inline_11494_maxy$$inline_8913$$);
      if($result$$3$$.max > $height$$152$$) {
        break
      }
    }
  }
  return $result$$3$$.max > $height$$152$$ && 1 < $size$$49$$ ? (0,D.$JSCompiler_StaticMethods_calculateOptimalSize$$)($JSCompiler_StaticMethods_calculateOptimalSize$self$$, $start$$48$$, $end$$32$$, $width$$168$$, $height$$152$$, $size$$49$$ - 1) : $size$$49$$
};
D.$JSCompiler_StaticMethods_calculateDurationY$$ = function $$JSCompiler_StaticMethods_calculateDurationY$$$($JSCompiler_StaticMethods_calculateDurationY$self$$, $item$$63$$, $durationMarkers$$3$$) {
  var $index$$252$$ = $durationMarkers$$3$$.length, $startTime$$6$$ = $item$$63$$.getTime(), $y$$269$$ = $item$$63$$.$_durationLevel$;
  $y$$269$$ == D.$JSCompiler_alias_NULL$$ && ($y$$269$$ = 1);
  for(var $i$$860$$ = 0;$i$$860$$ < $index$$252$$;$i$$860$$++) {
    var $currItem_curry$$ = $durationMarkers$$3$$[$i$$860$$];
    if($currItem_curry$$ != $item$$63$$) {
      var $currEndTime$$ = $currItem_curry$$.$_endTime$;
      if($currEndTime$$ != D.$JSCompiler_alias_NULL$$) {
        var $currStartTime$$ = $currItem_curry$$.getTime(), $currItem_curry$$ = $currItem_curry$$.$_durationLevel$;
        $currItem_curry$$ == D.$JSCompiler_alias_NULL$$ && ($currItem_curry$$ = 1);
        $startTime$$6$$ >= $currStartTime$$ && ($startTime$$6$$ <= $currEndTime$$ && $y$$269$$ == $currItem_curry$$) && ($y$$269$$ = $currItem_curry$$ + 1, $item$$63$$.$_durationLevel$ = $y$$269$$, $y$$269$$ = (0,D.$JSCompiler_StaticMethods_calculateDurationY$$)($JSCompiler_StaticMethods_calculateDurationY$self$$, $item$$63$$, $durationMarkers$$3$$))
      }
    }
  }
  $y$$269$$ > $JSCompiler_StaticMethods_calculateDurationY$self$$.$_maxDurationY$ && ($JSCompiler_StaticMethods_calculateDurationY$self$$.$_maxDurationY$ = $y$$269$$);
  return $y$$269$$
};
D.$DvtTimelineOverview$$.prototype.$HandleShapeMouseOver$ = function $$DvtTimelineOverview$$$$$HandleShapeMouseOver$$($event$$821_isSelected$$1_itemId$$3$$) {
  var $drawable$$11$$ = D.$DvtTimelineOverview$$.$superclass$.$HandleShapeMouseOver$.call(this, $event$$821_isSelected$$1_itemId$$3$$);
  if($drawable$$11$$ != D.$JSCompiler_alias_NULL$$) {
    if($drawable$$11$$.$_node$ != D.$JSCompiler_alias_NULL$$) {
      var $evt$$68_i$$861_tooltip$$50$$ = $drawable$$11$$.$_node$.$_desc$;
      $evt$$68_i$$861_tooltip$$50$$ != D.$JSCompiler_alias_NULL$$ && this.$getCtx$().$getTooltipManager$().$showDatatip$($event$$821_isSelected$$1_itemId$$3$$.pageX, $event$$821_isSelected$$1_itemId$$3$$.pageY, $evt$$68_i$$861_tooltip$$50$$, "#000000");
      this.$isFlashEnvironment$() && this.setCursor("pointer")
    }
    if("none" != this.$_selectionMode$) {
      $event$$821_isSelected$$1_itemId$$3$$ = D.$JSCompiler_alias_FALSE$$;
      if(this.$_selectedMarkers$ != D.$JSCompiler_alias_NULL$$) {
        for($evt$$68_i$$861_tooltip$$50$$ = 0;$evt$$68_i$$861_tooltip$$50$$ < this.$_selectedMarkers$.length;$evt$$68_i$$861_tooltip$$50$$++) {
          if($drawable$$11$$ == this.$_selectedMarkers$[$evt$$68_i$$861_tooltip$$50$$]) {
            $event$$821_isSelected$$1_itemId$$3$$ = D.$JSCompiler_alias_TRUE$$;
            break
          }
        }
      }
      $event$$821_isSelected$$1_itemId$$3$$ || ($event$$821_isSelected$$1_itemId$$3$$ = this.$getItemId$($drawable$$11$$), $evt$$68_i$$861_tooltip$$50$$ = new D.$DvtTimelineOverviewEvent$$("highlight"), (0,D.$JSCompiler_StaticMethods_addParam$$)($evt$$68_i$$861_tooltip$$50$$, "itemId", $event$$821_isSelected$$1_itemId$$3$$), this.dispatchEvent($evt$$68_i$$861_tooltip$$50$$), (0,D.$JSCompiler_StaticMethods_highlightMarker$$)(this, $drawable$$11$$))
    }
  }
};
D.$DvtTimelineOverview$$.prototype.$HandleShapeMouseOut$ = function $$DvtTimelineOverview$$$$$HandleShapeMouseOut$$($drawable$$12_event$$822$$) {
  $drawable$$12_event$$822$$ = D.$DvtTimelineOverview$$.$superclass$.$HandleShapeMouseOut$.call(this, $drawable$$12_event$$822$$);
  if($drawable$$12_event$$822$$ != D.$JSCompiler_alias_NULL$$ && !(0,D.$JSCompiler_StaticMethods_isMovable$$)($drawable$$12_event$$822$$)) {
    this.$getCtx$().$getTooltipManager$().$hideTooltip$();
    var $isSelected$$2_itemId$$4$$ = D.$JSCompiler_alias_FALSE$$;
    if(this.$_selectedMarkers$ != D.$JSCompiler_alias_NULL$$) {
      for(var $evt$$69_i$$862$$ = 0;$evt$$69_i$$862$$ < this.$_selectedMarkers$.length;$evt$$69_i$$862$$++) {
        if($drawable$$12_event$$822$$ == this.$_selectedMarkers$[$evt$$69_i$$862$$]) {
          $isSelected$$2_itemId$$4$$ = D.$JSCompiler_alias_TRUE$$;
          break
        }
      }
    }
    $isSelected$$2_itemId$$4$$ || ($isSelected$$2_itemId$$4$$ = this.$getItemId$($drawable$$12_event$$822$$), $evt$$69_i$$862$$ = new D.$DvtTimelineOverviewEvent$$("unhighlight"), (0,D.$JSCompiler_StaticMethods_addParam$$)($evt$$69_i$$862$$, "itemId", $isSelected$$2_itemId$$4$$), this.dispatchEvent($evt$$69_i$$862$$), (0,D.$JSCompiler_StaticMethods_unhighlightMarker$$)(this, $drawable$$12_event$$822$$))
  }
};
D.$DvtTimelineOverview$$.prototype.$HandleShapeClick$ = function $$DvtTimelineOverview$$$$$HandleShapeClick$$($event$$823_isMultiSelect$$inline_8919_slidingWindow$$inline_8922_time$$inline_8920$$, $drawable$$13_newPos$$inline_8923_pageX$$16$$, $evt$$inline_8921_itemId$$inline_11511_pageY$$16$$) {
  $drawable$$13_newPos$$inline_8923_pageX$$16$$ = D.$DvtTimelineOverview$$.$superclass$.$HandleShapeClick$.call(this, $event$$823_isMultiSelect$$inline_8919_slidingWindow$$inline_8922_time$$inline_8920$$, $drawable$$13_newPos$$inline_8923_pageX$$16$$, $evt$$inline_8921_itemId$$inline_11511_pageY$$16$$);
  if($drawable$$13_newPos$$inline_8923_pageX$$16$$ != D.$JSCompiler_alias_NULL$$ && ($event$$823_isMultiSelect$$inline_8919_slidingWindow$$inline_8922_time$$inline_8920$$ = $event$$823_isMultiSelect$$inline_8919_slidingWindow$$inline_8922_time$$inline_8920$$.ctrlKey || $event$$823_isMultiSelect$$inline_8919_slidingWindow$$inline_8922_time$$inline_8920$$.shiftKey || (0,D.$DvtAgent$isTouchDevice$$)(), "none" != this.$_selectionMode$)) {
    $evt$$inline_8921_itemId$$inline_11511_pageY$$16$$ = this.$getItemId$($drawable$$13_newPos$$inline_8923_pageX$$16$$);
    var $evt$$inline_11512$$ = new D.$DvtTimelineOverviewEvent$$("selection");
    (0,D.$JSCompiler_StaticMethods_addParam$$)($evt$$inline_11512$$, "itemId", $evt$$inline_8921_itemId$$inline_11511_pageY$$16$$);
    (0,D.$JSCompiler_StaticMethods_addParam$$)($evt$$inline_11512$$, "multiSelect", $event$$823_isMultiSelect$$inline_8919_slidingWindow$$inline_8922_time$$inline_8920$$);
    this.dispatchEvent($evt$$inline_11512$$);
    $event$$823_isMultiSelect$$inline_8919_slidingWindow$$inline_8922_time$$inline_8920$$ = $drawable$$13_newPos$$inline_8923_pageX$$16$$.$_node$.getTime();
    $event$$823_isMultiSelect$$inline_8919_slidingWindow$$inline_8922_time$$inline_8920$$ != D.$JSCompiler_alias_NULL$$ && ($evt$$inline_8921_itemId$$inline_11511_pageY$$16$$ = new D.$DvtTimelineOverviewEvent$$("scrollTime"), $evt$$inline_8921_itemId$$inline_11511_pageY$$16$$.setTime($event$$823_isMultiSelect$$inline_8919_slidingWindow$$inline_8922_time$$inline_8920$$), this.dispatchEvent($evt$$inline_8921_itemId$$inline_11511_pageY$$16$$), $event$$823_isMultiSelect$$inline_8919_slidingWindow$$inline_8922_time$$inline_8920$$ = 
    this.$getChildAt$(1), $drawable$$13_newPos$$inline_8923_pageX$$16$$ = this.$isVertical$() ? this.$getX$($drawable$$13_newPos$$inline_8923_pageX$$16$$) - $event$$823_isMultiSelect$$inline_8919_slidingWindow$$inline_8922_time$$inline_8920$$.getHeight() / 2 : this.$getX$($drawable$$13_newPos$$inline_8923_pageX$$16$$) - $event$$823_isMultiSelect$$inline_8919_slidingWindow$$inline_8922_time$$inline_8920$$.getWidth() / 2, (0,D.$JSCompiler_StaticMethods_animateSlidingWindow$$)(this, $drawable$$13_newPos$$inline_8923_pageX$$16$$))
  }
};
D.$JSCompiler_StaticMethods_highlightMarker$$ = function $$JSCompiler_StaticMethods_highlightMarker$$$($JSCompiler_StaticMethods_highlightMarker$self$$, $drawable$$17$$) {
  if($JSCompiler_StaticMethods_highlightMarker$self$$.$_selectedMarkers$ != D.$JSCompiler_alias_NULL$$) {
    for(var $i$$863$$ = 0;$i$$863$$ < $JSCompiler_StaticMethods_highlightMarker$self$$.$_selectedMarkers$.length;$i$$863$$++) {
      if($drawable$$17$$ == $JSCompiler_StaticMethods_highlightMarker$self$$.$_selectedMarkers$[$i$$863$$]) {
        return
      }
    }
  }
  $JSCompiler_StaticMethods_highlightMarker$self$$.$applyState$($drawable$$17$$, "_h")
};
D.$JSCompiler_StaticMethods_unhighlightMarker$$ = function $$JSCompiler_StaticMethods_unhighlightMarker$$$($JSCompiler_StaticMethods_unhighlightMarker$self$$, $drawable$$18$$) {
  if($JSCompiler_StaticMethods_unhighlightMarker$self$$.$_selectedMarkers$ != D.$JSCompiler_alias_NULL$$) {
    for(var $i$$864$$ = 0;$i$$864$$ < $JSCompiler_StaticMethods_unhighlightMarker$self$$.$_selectedMarkers$.length;$i$$864$$++) {
      if($drawable$$18$$ == $JSCompiler_StaticMethods_unhighlightMarker$self$$.$_selectedMarkers$[$i$$864$$]) {
        return
      }
    }
  }
  $JSCompiler_StaticMethods_unhighlightMarker$self$$.$applyState$($drawable$$18$$, "_")
};
D.$JSCompiler_StaticMethods_addSelectedMarker$$ = function $$JSCompiler_StaticMethods_addSelectedMarker$$$($JSCompiler_StaticMethods_addSelectedMarker$self$$, $drawable$$22$$) {
  $JSCompiler_StaticMethods_addSelectedMarker$self$$.$_selectedMarkers$ == D.$JSCompiler_alias_NULL$$ && ($JSCompiler_StaticMethods_addSelectedMarker$self$$.$_selectedMarkers$ = []);
  var $lastSelectedMarker$$ = D.$JSCompiler_alias_NULL$$;
  0 < $JSCompiler_StaticMethods_addSelectedMarker$self$$.$_selectedMarkers$.length && ($lastSelectedMarker$$ = $JSCompiler_StaticMethods_addSelectedMarker$self$$.$_selectedMarkers$[$JSCompiler_StaticMethods_addSelectedMarker$self$$.$_selectedMarkers$.length - 1]);
  $JSCompiler_StaticMethods_addSelectedMarker$self$$.$_selectedMarkers$.push($drawable$$22$$);
  $lastSelectedMarker$$ != D.$JSCompiler_alias_NULL$$ && $JSCompiler_StaticMethods_addSelectedMarker$self$$.$applyState$($lastSelectedMarker$$, "_s");
  $JSCompiler_StaticMethods_addSelectedMarker$self$$.$applyState$($drawable$$22$$, "_as")
};
D.$DvtTimelineOverview$$.prototype.$applyState$ = function $$DvtTimelineOverview$$$$$applyState$$($drawable$$25$$, $state$$101$$) {
  if($drawable$$25$$ instanceof D.$DvtSimpleMarker$$) {
    var $borderWidth$$19_requiresBorderMarker$$ = D.$JSCompiler_alias_FALSE$$, $requiresGlowMarker$$ = D.$JSCompiler_alias_FALSE$$;
    if("solid" == this.$getStyle$($state$$101$$, "bs")) {
      var $borderWidth$$19_requiresBorderMarker$$ = D.$JSCompiler_alias_TRUE$$, $borderColor$$62_stroke$$119$$ = this.$getStyle$($state$$101$$, "bc");
      $borderColor$$62_stroke$$119$$ == D.$JSCompiler_alias_NULL$$ && ($borderColor$$62_stroke$$119$$ = "#000000");
      var $glowColor_glowStroke_width$$inline_8929$$ = this.$getStyle$($state$$101$$, "gc");
      $glowColor_glowStroke_width$$inline_8929$$ != D.$JSCompiler_alias_NULL$$ && "none" != $glowColor_glowStroke_width$$inline_8929$$ && ($requiresGlowMarker$$ = D.$JSCompiler_alias_TRUE$$)
    }
    var $borderMarker$$ = $drawable$$25$$.$_borderMarker$, $glowMarker_glowOffset$$ = $drawable$$25$$.$_glowMarker$;
    !$borderWidth$$19_requiresBorderMarker$$ && $borderMarker$$ != D.$JSCompiler_alias_NULL$$ ? (this.removeChild($borderMarker$$), $drawable$$25$$.$_borderMarker$ = D.$JSCompiler_alias_NULL$$, $glowMarker_glowOffset$$ != D.$JSCompiler_alias_NULL$$ && (this.removeChild($glowMarker_glowOffset$$), $drawable$$25$$.$_glowMarker$ = D.$JSCompiler_alias_NULL$$)) : !$requiresGlowMarker$$ && $glowMarker_glowOffset$$ != D.$JSCompiler_alias_NULL$$ && (this.removeChild($glowMarker_glowOffset$$), $drawable$$25$$.$_glowMarker$ = 
    D.$JSCompiler_alias_NULL$$);
    var $borderColor$$inline_8928_id$$313_markerType$$2$$ = $drawable$$25$$.$getType$();
    if($borderWidth$$19_requiresBorderMarker$$) {
      var $borderWidth$$19_requiresBorderMarker$$ = (0,window.parseInt)(this.$getStyle$($state$$101$$, "bw"), 10), $borderOffset$$1$$ = (0,window.parseInt)(this.$getStyle$($state$$101$$, "bof"), 10);
      if($borderMarker$$ == D.$JSCompiler_alias_NULL$$) {
        if("circle" == $borderColor$$inline_8928_id$$313_markerType$$2$$) {
          this.$isFlashEnvironment$() && ($borderOffset$$1$$ = 0);
          var $width$$171$$ = ($drawable$$25$$.$getDimensions$().$w$ + 2 * $borderOffset$$1$$) * $drawable$$25$$.$getScaleX$(), $height$$155$$ = ($drawable$$25$$.$getDimensions$().$h$ + 2 * $borderOffset$$1$$) * $drawable$$25$$.$getScaleY$(), $cx$$65$$ = this.$getX$($drawable$$25$$) - $borderOffset$$1$$ + $width$$171$$ / 2, $cy$$66$$ = this.$getY$($drawable$$25$$) - $borderOffset$$1$$ + $height$$155$$ / 2
        }else {
          this.$isVertical$() ? ($width$$171$$ = ($drawable$$25$$.$getDimensions$().$w$ + ($borderWidth$$19_requiresBorderMarker$$ + 1)) * $drawable$$25$$.$getScaleX$(), $height$$155$$ = ($drawable$$25$$.$getDimensions$().$h$ + ($borderWidth$$19_requiresBorderMarker$$ + 1)) * $drawable$$25$$.$getScaleY$(), $cx$$65$$ = this.$getY$($drawable$$25$$) - ($borderWidth$$19_requiresBorderMarker$$ + 1) / 2 + $width$$171$$ / 2, $cy$$66$$ = this.$getX$($drawable$$25$$) - ($borderWidth$$19_requiresBorderMarker$$ + 
          1) / 2 + $height$$155$$ / 2) : ($width$$171$$ = ($drawable$$25$$.$getDimensions$().$w$ + 2 * $borderOffset$$1$$) * $drawable$$25$$.$getScaleX$(), $height$$155$$ = ($drawable$$25$$.$getDimensions$().$h$ + 2 * $borderOffset$$1$$) * $drawable$$25$$.$getScaleY$(), $cx$$65$$ = this.$getX$($drawable$$25$$) - $borderOffset$$1$$ + $width$$171$$ / 2, $cy$$66$$ = this.$getY$($drawable$$25$$) - $borderOffset$$1$$ + $height$$155$$ / 2)
        }
        $borderMarker$$ = new D.$DvtSimpleMarker$$(this.$getCtx$(), $borderColor$$inline_8928_id$$313_markerType$$2$$, D.$JSCompiler_alias_NULL$$, $cx$$65$$, $cy$$66$$, $width$$171$$, $height$$155$$, D.$JSCompiler_alias_NULL$$, $drawable$$25$$.getId() + "_border");
        this.$addChildAt$($borderMarker$$, this.$getChildIndex$($drawable$$25$$));
        $drawable$$25$$.$_borderMarker$ = $borderMarker$$;
        $borderMarker$$.$setFill$(this.$_markerBorderFill$)
      }
      $borderColor$$62_stroke$$119$$ = new D.$DvtSolidStroke$$($borderColor$$62_stroke$$119$$, this.$getStyle$($state$$101$$, "bo"), $borderWidth$$19_requiresBorderMarker$$);
      $borderMarker$$.$setStroke$($borderColor$$62_stroke$$119$$);
      (this.$isVertical$() || "rectangle" == $borderColor$$inline_8928_id$$313_markerType$$2$$ || "diamond" == $borderColor$$inline_8928_id$$313_markerType$$2$$ || "triangleUp" == $borderColor$$inline_8928_id$$313_markerType$$2$$ || "triangleDown" == $borderColor$$inline_8928_id$$313_markerType$$2$$ || "plus" == $borderColor$$inline_8928_id$$313_markerType$$2$$) && "false" != this.$_defaultMarkerStyles$.$pixelHinting$ && (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)($borderMarker$$);
      $requiresGlowMarker$$ && ($glowMarker_glowOffset$$ == D.$JSCompiler_alias_NULL$$ && ($glowMarker_glowOffset$$ = $borderOffset$$1$$ - $borderWidth$$19_requiresBorderMarker$$, "circle" == $borderColor$$inline_8928_id$$313_markerType$$2$$ ? (this.$isFlashEnvironment$() && ($glowMarker_glowOffset$$ = 0), $width$$171$$ = ($drawable$$25$$.$getDimensions$().$w$ + 2 * $glowMarker_glowOffset$$) * $drawable$$25$$.$getScaleX$(), $height$$155$$ = ($drawable$$25$$.$getDimensions$().$h$ + 2 * $glowMarker_glowOffset$$) * 
      $drawable$$25$$.$getScaleY$(), $cx$$65$$ = this.$getX$($drawable$$25$$) - $glowMarker_glowOffset$$ + $width$$171$$ / 2, $cy$$66$$ = this.$getY$($drawable$$25$$) - $glowMarker_glowOffset$$ + $height$$155$$ / 2) : this.$isVertical$() ? ($width$$171$$ = ($drawable$$25$$.$getDimensions$().$w$ + 3) * $drawable$$25$$.$getScaleX$(), $height$$155$$ = ($drawable$$25$$.$getDimensions$().$h$ + 3) * $drawable$$25$$.$getScaleY$(), $cx$$65$$ = this.$getY$($drawable$$25$$) + $width$$171$$ / 2, $cy$$66$$ = 
      this.$getX$($drawable$$25$$) - 1 + $height$$155$$ / 2) : ($width$$171$$ = ($drawable$$25$$.$getDimensions$().$w$ + 2 * $glowMarker_glowOffset$$) * $drawable$$25$$.$getScaleX$(), $height$$155$$ = ($drawable$$25$$.$getDimensions$().$h$ + 2 * $glowMarker_glowOffset$$) * $drawable$$25$$.$getScaleY$(), $cx$$65$$ = this.$getX$($drawable$$25$$) - $glowMarker_glowOffset$$ + $width$$171$$ / 2, $cy$$66$$ = this.$getY$($drawable$$25$$) - $glowMarker_glowOffset$$ + $height$$155$$ / 2), $glowMarker_glowOffset$$ = 
      new D.$DvtSimpleMarker$$(this.$getCtx$(), $borderColor$$inline_8928_id$$313_markerType$$2$$, D.$JSCompiler_alias_NULL$$, $cx$$65$$, $cy$$66$$, $width$$171$$, $height$$155$$, D.$JSCompiler_alias_NULL$$, $drawable$$25$$.getId() + "_glow"), this.$addChildAt$($glowMarker_glowOffset$$, this.$getChildIndex$($borderMarker$$)), $drawable$$25$$.$_glowMarker$ = $glowMarker_glowOffset$$, $glowMarker_glowOffset$$.$setFill$(this.$_markerBorderFill$)), $glowColor_glowStroke_width$$inline_8929$$ = new D.$DvtSolidStroke$$($glowColor_glowStroke_width$$inline_8929$$, 
      this.$getStyle$($state$$101$$, "go"), 4), $glowMarker_glowOffset$$.$setStroke$($glowColor_glowStroke_width$$inline_8929$$), (this.$isVertical$() || "rectangle" == $borderColor$$inline_8928_id$$313_markerType$$2$$ || "diamond" == $borderColor$$inline_8928_id$$313_markerType$$2$$ || "triangleUp" == $borderColor$$inline_8928_id$$313_markerType$$2$$ || "triangleDown" == $borderColor$$inline_8928_id$$313_markerType$$2$$ || "plus" == $borderColor$$inline_8928_id$$313_markerType$$2$$) && "false" != 
      this.$_defaultMarkerStyles$.$pixelHinting$ && (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)($glowMarker_glowOffset$$))
    }
  }else {
    if(($borderColor$$inline_8928_id$$313_markerType$$2$$ = $drawable$$25$$.getId()) && "_drn_" == $borderColor$$inline_8928_id$$313_markerType$$2$$.substring(0, 5)) {
      $borderColor$$inline_8928_id$$313_markerType$$2$$ = this.$getStyle$($state$$101$$, "dbc"), $borderColor$$inline_8928_id$$313_markerType$$2$$ == D.$JSCompiler_alias_NULL$$ && ($borderColor$$inline_8928_id$$313_markerType$$2$$ = "#000000"), $glowColor_glowStroke_width$$inline_8929$$ = (0,window.parseInt)(this.$getStyle$($state$$101$$, "dbw"), 10), $drawable$$25$$.$setStroke$(new D.$DvtSolidStroke$$($borderColor$$inline_8928_id$$313_markerType$$2$$, 1, $glowColor_glowStroke_width$$inline_8929$$))
    }
  }
};
D.$DvtTimelineOverview$$.prototype.$getAutomation$ = function $$DvtTimelineOverview$$$$$getAutomation$$() {
  this.$_Automation$ || (this.$_Automation$ = new D.$DvtTimelineOverviewAutomation$$(this));
  return this.$_Automation$
};
D.$DvtTimelineOverview$$.prototype.getAutomation = D.$DvtTimelineOverview$$.prototype.$getAutomation$;
D.$DvtTimelineOverviewParser$$ = function $$DvtTimelineOverviewParser$$$($timelineOverview$$) {
  this.Init($timelineOverview$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtTimelineOverviewParser$$, D.$DvtObj$$, "DvtTimelineOverviewParser");
D.$JSCompiler_prototypeAlias$$ = D.$DvtTimelineOverviewParser$$.prototype;
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($overview$$6$$) {
  this.$_view$ = $overview$$6$$;
  this.$_parser$ = new D.$DvtXmlParser$$
};
D.$JSCompiler_prototypeAlias$$.parse = function $$JSCompiler_prototypeAlias$$$parse$($ret$$96_xmlString$$9$$) {
  var $childNodes$$26_rootNode$$3$$ = this.$_parser$.parse($ret$$96_xmlString$$9$$);
  $ret$$96_xmlString$$9$$ = this.$ParseRootAttributes$($childNodes$$26_rootNode$$3$$);
  var $childNodes$$26_rootNode$$3$$ = $childNodes$$26_rootNode$$3$$.$getChildNodes$(), $JSCompiler_inline_result$$70_xmlNode$$inline_8951$$;
  if($JSCompiler_inline_result$$70_xmlNode$$inline_8951$$ = $childNodes$$26_rootNode$$3$$[0]) {
    var $ret$$inline_8952$$ = {};
    $ret$$inline_8952$$.width = $JSCompiler_inline_result$$70_xmlNode$$inline_8951$$.$getAttr$("width");
    $ret$$inline_8952$$.height = $JSCompiler_inline_result$$70_xmlNode$$inline_8951$$.$getAttr$("height");
    $ret$$inline_8952$$.$ticks$ = $JSCompiler_inline_result$$70_xmlNode$$inline_8951$$.$getChildNodes$();
    $JSCompiler_inline_result$$70_xmlNode$$inline_8951$$ = $ret$$inline_8952$$
  }else {
    $JSCompiler_inline_result$$70_xmlNode$$inline_8951$$ = D.$JSCompiler_alias_NULL$$
  }
  $ret$$96_xmlString$$9$$.$timeAxisInfo$ = $JSCompiler_inline_result$$70_xmlNode$$inline_8951$$;
  $ret$$96_xmlString$$9$$.$markers$ = this.$_parseDataNode$($childNodes$$26_rootNode$$3$$[1], $ret$$96_xmlString$$9$$.$defaultMarkerStyles$);
  2 < $childNodes$$26_rootNode$$3$$.length && ($ret$$96_xmlString$$9$$.$formattedTimeRanges$ = !$childNodes$$26_rootNode$$3$$[2] ? D.$JSCompiler_alias_NULL$$ : $childNodes$$26_rootNode$$3$$[2].$getChildNodes$());
  return $ret$$96_xmlString$$9$$
};
D.$JSCompiler_prototypeAlias$$.$ParseRootAttributes$ = function $$JSCompiler_prototypeAlias$$$$ParseRootAttributes$$($xmlNode$$72$$) {
  var $ret$$97$$ = {};
  $ret$$97$$.start = (0,window.parseInt)($xmlNode$$72$$.$getAttr$("start"));
  $ret$$97$$.end = (0,window.parseInt)($xmlNode$$72$$.$getAttr$("end"));
  $ret$$97$$.width = (0,window.parseInt)($xmlNode$$72$$.$getAttr$("width"));
  $ret$$97$$.$renderStart$ = (0,window.parseInt)($xmlNode$$72$$.$getAttr$("renstart"));
  $ret$$97$$.currentTime = (0,window.parseInt)($xmlNode$$72$$.$getAttr$("ocd"));
  $ret$$97$$.orientation = $xmlNode$$72$$.$getAttr$("orn");
  $ret$$97$$.$overviewPosition$ = $xmlNode$$72$$.$getAttr$("ovp");
  $ret$$97$$.$selectionMode$ = $xmlNode$$72$$.$getAttr$("selmode");
  $ret$$97$$.$isRtl$ = $xmlNode$$72$$.$getAttr$("rtl");
  $ret$$97$$.borderTopStyle = $xmlNode$$72$$.$getAttr$("_bts");
  $ret$$97$$.borderTopColor = $xmlNode$$72$$.$getAttr$("_btc");
  $ret$$97$$.$seriesIds$ = $xmlNode$$72$$.$getAttr$("sid");
  $ret$$97$$.$animationOnClick$ = $xmlNode$$72$$.$getAttr$("_aoc");
  var $borderStyles_defaultMarkerStyles$$ = {};
  $borderStyles_defaultMarkerStyles$$.shape = $xmlNode$$72$$.$getAttr$("_ds");
  $borderStyles_defaultMarkerStyles$$.$scaleX$ = $xmlNode$$72$$.$getAttr$("_dsx");
  $borderStyles_defaultMarkerStyles$$.$scaleY$ = $xmlNode$$72$$.$getAttr$("_dsy");
  $borderStyles_defaultMarkerStyles$$.opacity = $xmlNode$$72$$.$getAttr$("_do");
  $borderStyles_defaultMarkerStyles$$.color = $xmlNode$$72$$.$getAttr$("_fc");
  $borderStyles_defaultMarkerStyles$$.$pixelHinting$ = $xmlNode$$72$$.$getAttr$("_ph");
  $ret$$97$$.$defaultMarkerStyles$ = $borderStyles_defaultMarkerStyles$$;
  $ret$$97$$.$handleFillColor$ = $xmlNode$$72$$.$getAttr$("_hfc");
  $ret$$97$$.$handleTextureColor$ = $xmlNode$$72$$.$getAttr$("_htc");
  $ret$$97$$.$handleBackgroundImage$ = $xmlNode$$72$$.$getAttr$("_hbi");
  $ret$$97$$.$handleWidth$ = $xmlNode$$72$$.$getAttr$("_hw");
  $ret$$97$$.$handleHeight$ = $xmlNode$$72$$.$getAttr$("_hh");
  $ret$$97$$.$windowBackgroundColor$ = $xmlNode$$72$$.$getAttr$("_wbc");
  $ret$$97$$.$windowBorderTopStyle$ = $xmlNode$$72$$.$getAttr$("_wbts");
  $ret$$97$$.$windowBorderRightStyle$ = $xmlNode$$72$$.$getAttr$("_wbrs");
  $ret$$97$$.$windowBorderBottomStyle$ = $xmlNode$$72$$.$getAttr$("_wbbs");
  $ret$$97$$.$windowBorderLeftStyle$ = $xmlNode$$72$$.$getAttr$("_wbls");
  $ret$$97$$.$windowBorderTopColor$ = $xmlNode$$72$$.$getAttr$("_wbtc");
  $ret$$97$$.$windowBorderRightColor$ = $xmlNode$$72$$.$getAttr$("_wbrc");
  $ret$$97$$.$windowBorderBottomColor$ = $xmlNode$$72$$.$getAttr$("_wbbc");
  $ret$$97$$.$windowBorderLeftColor$ = $xmlNode$$72$$.$getAttr$("_wblc");
  $ret$$97$$.$overviewBackgroundColor$ = $xmlNode$$72$$.$getAttr$("_obc");
  $ret$$97$$.$currentTimeIndicatorColor$ = $xmlNode$$72$$.$getAttr$("_ctic");
  $ret$$97$$.$timeIndicatorColor$ = $xmlNode$$72$$.$getAttr$("_tic");
  $ret$$97$$.$timeAxisBarColor$ = $xmlNode$$72$$.$getAttr$("_tabc");
  $ret$$97$$.$timeAxisBarOpacity$ = $xmlNode$$72$$.$getAttr$("_tabo");
  $ret$$97$$.$labelStyle$ = $xmlNode$$72$$.$getAttr$("_ls");
  $borderStyles_defaultMarkerStyles$$ = {};
  $borderStyles_defaultMarkerStyles$$._bs = $xmlNode$$72$$.$getAttr$("_bs");
  $borderStyles_defaultMarkerStyles$$._bc = $xmlNode$$72$$.$getAttr$("_bc");
  $borderStyles_defaultMarkerStyles$$._bw = $xmlNode$$72$$.$getAttr$("_bw");
  $borderStyles_defaultMarkerStyles$$._bof = $xmlNode$$72$$.$getAttr$("_bof");
  $borderStyles_defaultMarkerStyles$$._bo = $xmlNode$$72$$.$getAttr$("_bo");
  $borderStyles_defaultMarkerStyles$$._gc = $xmlNode$$72$$.$getAttr$("_gc");
  $borderStyles_defaultMarkerStyles$$._go = $xmlNode$$72$$.$getAttr$("_go");
  $borderStyles_defaultMarkerStyles$$._dbs = $xmlNode$$72$$.$getAttr$("_dbs");
  $borderStyles_defaultMarkerStyles$$._dbc = $xmlNode$$72$$.$getAttr$("_dbc");
  $borderStyles_defaultMarkerStyles$$._dbw = $xmlNode$$72$$.$getAttr$("_dbw");
  $borderStyles_defaultMarkerStyles$$._hbs = $xmlNode$$72$$.$getAttr$("_hbs");
  $borderStyles_defaultMarkerStyles$$._hbc = $xmlNode$$72$$.$getAttr$("_hbc");
  $borderStyles_defaultMarkerStyles$$._hbw = $xmlNode$$72$$.$getAttr$("_hbw");
  $borderStyles_defaultMarkerStyles$$._hbof = $xmlNode$$72$$.$getAttr$("_hbof");
  $borderStyles_defaultMarkerStyles$$._hbo = $xmlNode$$72$$.$getAttr$("_hbo");
  $borderStyles_defaultMarkerStyles$$._hgc = $xmlNode$$72$$.$getAttr$("_hgc");
  $borderStyles_defaultMarkerStyles$$._hgo = $xmlNode$$72$$.$getAttr$("_hgo");
  $borderStyles_defaultMarkerStyles$$._hdbs = $xmlNode$$72$$.$getAttr$("_hdbs");
  $borderStyles_defaultMarkerStyles$$._hdbc = $xmlNode$$72$$.$getAttr$("_hdbc");
  $borderStyles_defaultMarkerStyles$$._hdbw = $xmlNode$$72$$.$getAttr$("_hdbw");
  $borderStyles_defaultMarkerStyles$$._sbs = $xmlNode$$72$$.$getAttr$("_sbs");
  $borderStyles_defaultMarkerStyles$$._sbc = $xmlNode$$72$$.$getAttr$("_sbc");
  $borderStyles_defaultMarkerStyles$$._sbw = $xmlNode$$72$$.$getAttr$("_sbw");
  $borderStyles_defaultMarkerStyles$$._sbof = $xmlNode$$72$$.$getAttr$("_sbof");
  $borderStyles_defaultMarkerStyles$$._sbo = $xmlNode$$72$$.$getAttr$("_sbo");
  $borderStyles_defaultMarkerStyles$$._sgc = $xmlNode$$72$$.$getAttr$("_sgc");
  $borderStyles_defaultMarkerStyles$$._sgo = $xmlNode$$72$$.$getAttr$("_sgo");
  $borderStyles_defaultMarkerStyles$$._sdbs = $xmlNode$$72$$.$getAttr$("_sdbs");
  $borderStyles_defaultMarkerStyles$$._sdbc = $xmlNode$$72$$.$getAttr$("_sdbc");
  $borderStyles_defaultMarkerStyles$$._sdbw = $xmlNode$$72$$.$getAttr$("_sdbw");
  $borderStyles_defaultMarkerStyles$$._asbs = $xmlNode$$72$$.$getAttr$("_asbs");
  $borderStyles_defaultMarkerStyles$$._asbc = $xmlNode$$72$$.$getAttr$("_asbc");
  $borderStyles_defaultMarkerStyles$$._asbw = $xmlNode$$72$$.$getAttr$("_asbw");
  $borderStyles_defaultMarkerStyles$$._asbof = $xmlNode$$72$$.$getAttr$("_asbof");
  $borderStyles_defaultMarkerStyles$$._asbo = $xmlNode$$72$$.$getAttr$("_asbo");
  $borderStyles_defaultMarkerStyles$$._asgc = $xmlNode$$72$$.$getAttr$("_asgc");
  $borderStyles_defaultMarkerStyles$$._asgo = $xmlNode$$72$$.$getAttr$("_asgo");
  $borderStyles_defaultMarkerStyles$$._asdbs = $xmlNode$$72$$.$getAttr$("_asdbs");
  $borderStyles_defaultMarkerStyles$$._asdbc = $xmlNode$$72$$.$getAttr$("_asdbc");
  $borderStyles_defaultMarkerStyles$$._asdbw = $xmlNode$$72$$.$getAttr$("_asdbw");
  $ret$$97$$.$borderStyles$ = $borderStyles_defaultMarkerStyles$$;
  return $ret$$97$$
};
D.$JSCompiler_prototypeAlias$$.$_parseDataNode$ = function $$JSCompiler_prototypeAlias$$$$_parseDataNode$$($xmlNode$$73$$, $defaultMarkerStyles$$1$$) {
  if(!$xmlNode$$73$$) {
    return D.$JSCompiler_alias_NULL$$
  }
  for(var $treeNodes$$ = [], $markers$$12$$ = $xmlNode$$73$$.$getChildNodes$(), $i$$872$$ = 0;$i$$872$$ < $markers$$12$$.length;$i$$872$$++) {
    var $props$$14_treeNode$$1$$ = this.$ParseNodeAttributes$($markers$$12$$[$i$$872$$], $defaultMarkerStyles$$1$$), $props$$14_treeNode$$1$$ = new D.$DvtTimelineOverviewNode$$(this.$_view$, $props$$14_treeNode$$1$$);
    $treeNodes$$.push($props$$14_treeNode$$1$$)
  }
  return $treeNodes$$
};
D.$JSCompiler_prototypeAlias$$.$ParseNodeAttributes$ = function $$JSCompiler_prototypeAlias$$$$ParseNodeAttributes$$($xmlNode$$74$$, $defaultMarkerStyles$$2$$) {
  var $ret$$98$$ = {}, $useSkinningDefaults$$ = "true" == $xmlNode$$74$$.$getAttr$("_sd");
  $ret$$98$$.id = $xmlNode$$74$$.$getAttr$("tid");
  $ret$$98$$.$rowKey$ = $xmlNode$$74$$.$getAttr$("rk");
  $ret$$98$$.time = $xmlNode$$74$$.$getAttr$("t");
  $ret$$98$$.$endTime$ = $xmlNode$$74$$.$getAttr$("et");
  $ret$$98$$.shape = $xmlNode$$74$$.$getAttr$("s");
  $useSkinningDefaults$$ && $ret$$98$$.shape == D.$JSCompiler_alias_NULL$$ && ($ret$$98$$.shape = $defaultMarkerStyles$$2$$.shape);
  $ret$$98$$.$desc$ = $xmlNode$$74$$.$getAttr$("d");
  $ret$$98$$.color = $xmlNode$$74$$.$getAttr$("c");
  $ret$$98$$.$durationFillColor$ = $xmlNode$$74$$.$getAttr$("dfc");
  $useSkinningDefaults$$ && $ret$$98$$.color == D.$JSCompiler_alias_NULL$$ && ($ret$$98$$.color = $defaultMarkerStyles$$2$$.color);
  $ret$$98$$.$scaleX$ = $xmlNode$$74$$.$getAttr$("sx");
  $useSkinningDefaults$$ && $ret$$98$$.$scaleX$ == D.$JSCompiler_alias_NULL$$ && ($ret$$98$$.$scaleX$ = $defaultMarkerStyles$$2$$.$scaleX$);
  $ret$$98$$.$scaleY$ = $xmlNode$$74$$.$getAttr$("sy");
  $useSkinningDefaults$$ && $ret$$98$$.$scaleY$ == D.$JSCompiler_alias_NULL$$ && ($ret$$98$$.$scaleY$ = $defaultMarkerStyles$$2$$.$scaleY$);
  $ret$$98$$.$gradient$ = $xmlNode$$74$$.$getAttr$("g");
  $ret$$98$$.opacity = $xmlNode$$74$$.$getAttr$("o");
  $useSkinningDefaults$$ && $ret$$98$$.opacity == D.$JSCompiler_alias_NULL$$ && ($ret$$98$$.opacity = $defaultMarkerStyles$$2$$.opacity);
  return $ret$$98$$
};
D.$DvtTimelineOverviewNode$$ = function $$DvtTimelineOverviewNode$$$($overview$$4$$, $props$$11$$) {
  this.Init($overview$$4$$, $props$$11$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtTimelineOverviewNode$$, D.$DvtObj$$, "DvtTimelineOverviewNode");
D.$JSCompiler_prototypeAlias$$ = D.$DvtTimelineOverviewNode$$.prototype;
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($overview$$5$$, $props$$12$$) {
  this.$_view$ = $overview$$5$$;
  this.$_rowKey$ = $props$$12$$.$rowKey$;
  this.$_id$ = $props$$12$$.id;
  this.$_time$ = (0,window.parseInt)($props$$12$$.time);
  this.$_endTime$ = $props$$12$$.$endTime$ == D.$JSCompiler_alias_NULL$$ ? D.$JSCompiler_alias_NULL$$ : (0,window.parseInt)($props$$12$$.$endTime$);
  this.$_shape$ = "circle";
  "square" == $props$$12$$.shape ? this.$_shape$ = "rectangle" : "plus" == $props$$12$$.shape ? this.$_shape$ = "plus" : "diamond" == $props$$12$$.shape ? this.$_shape$ = "diamond" : "triangleUp" == $props$$12$$.shape ? this.$_shape$ = "triangleUp" : "triangleDown" == $props$$12$$.shape && (this.$_shape$ = "triangleDown");
  this.$_desc$ = $props$$12$$.$desc$;
  this.$_color$ = $props$$12$$.color;
  this.$_gradient$ = $props$$12$$.$gradient$;
  $props$$12$$.opacity != D.$JSCompiler_alias_NULL$$ && (this.$_opacity$ = (0,window.parseFloat)($props$$12$$.opacity));
  $props$$12$$.$scaleX$ != D.$JSCompiler_alias_NULL$$ && (this.$_scaleX$ = (0,window.parseFloat)($props$$12$$.$scaleX$));
  $props$$12$$.$scaleY$ != D.$JSCompiler_alias_NULL$$ && (this.$_scaleY$ = (0,window.parseFloat)($props$$12$$.$scaleY$));
  $props$$12$$.$durationFillColor$ != D.$JSCompiler_alias_NULL$$ && (this.$_durationFillColor$ = $props$$12$$.$durationFillColor$)
};
D.$JSCompiler_prototypeAlias$$.getId = (0,D.$JSCompiler_get$$)("$_id$");
D.$JSCompiler_prototypeAlias$$.$getRowKey$ = (0,D.$JSCompiler_get$$)("$_rowKey$");
D.$JSCompiler_prototypeAlias$$.getTime = (0,D.$JSCompiler_get$$)("$_time$");
D.$JSCompiler_prototypeAlias$$.$getScaleX$ = (0,D.$JSCompiler_get$$)("$_scaleX$");
D.$JSCompiler_prototypeAlias$$.$getScaleY$ = (0,D.$JSCompiler_get$$)("$_scaleY$");
D.$JSCompiler_prototypeAlias$$.$getColor$ = (0,D.$JSCompiler_get$$)("$_color$");
D.$JSCompiler_prototypeAlias$$.$getShape$ = (0,D.$JSCompiler_get$$)("$_shape$");
D.$JSCompiler_prototypeAlias$$.$getOpacity$ = (0,D.$JSCompiler_get$$)("$_opacity$");
D.$JSCompiler_prototypeAlias$$.$getDisplayable$ = (0,D.$JSCompiler_get$$)("$_displayable$");
D.$JSCompiler_prototypeAlias$$.$setDisplayable$ = (0,D.$JSCompiler_set$$)("$_displayable$");
D.$JSCompiler_prototypeAlias$$.$getX$ = (0,D.$JSCompiler_get$$)("$_x$");
D.$JSCompiler_prototypeAlias$$.$setX$ = (0,D.$JSCompiler_set$$)("$_x$");
D.$JSCompiler_prototypeAlias$$.$getY$ = (0,D.$JSCompiler_get$$)("$_y$");
D.$JSCompiler_prototypeAlias$$.$setY$ = (0,D.$JSCompiler_set$$)("$_y$");
D.$DvtTimelineOverviewEvent$$ = function $$DvtTimelineOverviewEvent$$$($type$$257$$) {
  this.Init("timeline");
  this.$_subtype$ = $type$$257$$
};
D.$DvtObj$$.$createSubclass$(D.$DvtTimelineOverviewEvent$$, D.$DvtOverviewEvent$$, "DvtTimelineOverviewEvent");
D.$DvtTimelineOverviewEvent$$.prototype.$getItemId$ = function $$DvtTimelineOverviewEvent$$$$$getItemId$$() {
  return this.$getParamValue$("itemId")
};
D.$DvtTimelineOverviewAutomation$$ = function $$DvtTimelineOverviewAutomation$$$($overview$$2$$) {
  this.$_Init$($overview$$2$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtTimelineOverviewAutomation$$, D.$DvtAutomation$$, "DvtTimelineOverviewAutomation");
D.$DvtTimelineOverviewAutomation$$.prototype.$_Init$ = (0,D.$JSCompiler_set$$)("$_overview$");
D.$DvtTimelineOverviewAutomation$$.prototype.$GetSubIdForDomElement$ = function $$DvtTimelineOverviewAutomation$$$$$GetSubIdForDomElement$$($arr$$17_displayable$$106_prev$$4$$) {
  var $id$$314_seriesIds$$1_seriesIndex$$119$$ = $arr$$17_displayable$$106_prev$$4$$.getId();
  if($arr$$17_displayable$$106_prev$$4$$ instanceof D.$DvtSimpleMarker$$) {
    $arr$$17_displayable$$106_prev$$4$$ = $id$$314_seriesIds$$1_seriesIndex$$119$$.split(":");
    if(4 != $arr$$17_displayable$$106_prev$$4$$.length) {
      return D.$JSCompiler_alias_NULL$$
    }
    $id$$314_seriesIds$$1_seriesIndex$$119$$ = this.$_overview$.$_seriesIds$ == D.$JSCompiler_alias_NULL$$ ? D.$JSCompiler_alias_NULL$$ : this.$_overview$.$_seriesIds$.split(" ");
    if($id$$314_seriesIds$$1_seriesIndex$$119$$ != D.$JSCompiler_alias_NULL$$ && ($id$$314_seriesIds$$1_seriesIndex$$119$$ = $id$$314_seriesIds$$1_seriesIndex$$119$$.indexOf($arr$$17_displayable$$106_prev$$4$$[1]), -1 < $id$$314_seriesIds$$1_seriesIndex$$119$$)) {
      return"marker[" + $id$$314_seriesIds$$1_seriesIndex$$119$$ + "][" + $arr$$17_displayable$$106_prev$$4$$[2] + "]"
    }
  }else {
    if("window" == $id$$314_seriesIds$$1_seriesIndex$$119$$) {
      return"range_window"
    }
    if("lh" == $id$$314_seriesIds$$1_seriesIndex$$119$$ || "lhb" == $id$$314_seriesIds$$1_seriesIndex$$119$$ || "lbgrh" == $id$$314_seriesIds$$1_seriesIndex$$119$$) {
      return"range_start_handle"
    }
    if("rh" == $id$$314_seriesIds$$1_seriesIndex$$119$$ || "rhb" == $id$$314_seriesIds$$1_seriesIndex$$119$$ || "rbgrh" == $id$$314_seriesIds$$1_seriesIndex$$119$$) {
      return"range_end_handle"
    }
    if("grpy" == $id$$314_seriesIds$$1_seriesIndex$$119$$) {
      return $arr$$17_displayable$$106_prev$$4$$ = $arr$$17_displayable$$106_prev$$4$$.getParent().$getChildBefore$($arr$$17_displayable$$106_prev$$4$$), this.$GetSubIdForDomElement$($arr$$17_displayable$$106_prev$$4$$)
    }
  }
  return D.$JSCompiler_alias_NULL$$
};
D.$DvtTimelineOverviewAutomation$$.prototype.$getDomElementForSubId$ = function $$DvtTimelineOverviewAutomation$$$$$getDomElementForSubId$$($markers$$inline_8943_subId$$28$$) {
  for(var $array$$inline_8936_marker$$32_markerId$$inline_8946$$ = $markers$$inline_8943_subId$$28$$.split("["), $i$$inline_8947_len$$inline_8937_seriesIds$$2$$ = $array$$inline_8936_marker$$32_markerId$$inline_8946$$.length, $i$$inline_8938_index$$254_marker$$inline_8948$$ = 1;$i$$inline_8938_index$$254_marker$$inline_8948$$ < $i$$inline_8947_len$$inline_8937_seriesIds$$2$$;$i$$inline_8938_index$$254_marker$$inline_8948$$++) {
    var $elem$$inline_8939_id$$inline_8949_tempId$$inline_8940$$ = $array$$inline_8936_marker$$32_markerId$$inline_8946$$[$i$$inline_8938_index$$254_marker$$inline_8948$$], $elem$$inline_8939_id$$inline_8949_tempId$$inline_8940$$ = $elem$$inline_8939_id$$inline_8949_tempId$$inline_8940$$.substr(0, $elem$$inline_8939_id$$inline_8949_tempId$$inline_8940$$.length - 1), $tempIdAsNumber$$inline_8941$$ = (0,window.parseFloat)($elem$$inline_8939_id$$inline_8949_tempId$$inline_8940$$), $elem$$inline_8939_id$$inline_8949_tempId$$inline_8940$$ = 
    (0,window.isNaN)($tempIdAsNumber$$inline_8941$$) ? $elem$$inline_8939_id$$inline_8949_tempId$$inline_8940$$ : $tempIdAsNumber$$inline_8941$$;
    $array$$inline_8936_marker$$32_markerId$$inline_8946$$[$i$$inline_8938_index$$254_marker$$inline_8948$$] = $elem$$inline_8939_id$$inline_8949_tempId$$inline_8940$$
  }
  if($array$$inline_8936_marker$$32_markerId$$inline_8946$$ && 3 == $array$$inline_8936_marker$$32_markerId$$inline_8946$$.length && "marker" == $array$$inline_8936_marker$$32_markerId$$inline_8946$$[0]) {
    if($i$$inline_8947_len$$inline_8937_seriesIds$$2$$ = this.$_overview$.$_seriesIds$ == D.$JSCompiler_alias_NULL$$ ? D.$JSCompiler_alias_NULL$$ : this.$_overview$.$_seriesIds$.split(" "), $i$$inline_8947_len$$inline_8937_seriesIds$$2$$ != D.$JSCompiler_alias_NULL$$ && ($i$$inline_8938_index$$254_marker$$inline_8948$$ = (0,window.parseInt)($array$$inline_8936_marker$$32_markerId$$inline_8946$$[1], 10), -1 < $i$$inline_8938_index$$254_marker$$inline_8948$$ && $i$$inline_8938_index$$254_marker$$inline_8948$$ < 
    $i$$inline_8947_len$$inline_8937_seriesIds$$2$$.length)) {
      a: {
        $markers$$inline_8943_subId$$28$$ = this.$_overview$.$_markers$;
        $array$$inline_8936_marker$$32_markerId$$inline_8946$$ = "tl1:" + $i$$inline_8947_len$$inline_8937_seriesIds$$2$$[$i$$inline_8938_index$$254_marker$$inline_8948$$] + ":" + $array$$inline_8936_marker$$32_markerId$$inline_8946$$[2] + ":";
        for($i$$inline_8947_len$$inline_8937_seriesIds$$2$$ = 0;$i$$inline_8947_len$$inline_8937_seriesIds$$2$$ < $markers$$inline_8943_subId$$28$$.length;$i$$inline_8947_len$$inline_8937_seriesIds$$2$$++) {
          if($i$$inline_8938_index$$254_marker$$inline_8948$$ = $markers$$inline_8943_subId$$28$$[$i$$inline_8947_len$$inline_8937_seriesIds$$2$$], $elem$$inline_8939_id$$inline_8949_tempId$$inline_8940$$ = $i$$inline_8938_index$$254_marker$$inline_8948$$.getId(), $elem$$inline_8939_id$$inline_8949_tempId$$inline_8940$$ != D.$JSCompiler_alias_NULL$$ && 0 == $elem$$inline_8939_id$$inline_8949_tempId$$inline_8940$$.indexOf($array$$inline_8936_marker$$32_markerId$$inline_8946$$)) {
            $array$$inline_8936_marker$$32_markerId$$inline_8946$$ = $i$$inline_8938_index$$254_marker$$inline_8948$$;
            break a
          }
        }
        $array$$inline_8936_marker$$32_markerId$$inline_8946$$ = D.$JSCompiler_alias_NULL$$
      }
      return $array$$inline_8936_marker$$32_markerId$$inline_8946$$ ? $array$$inline_8936_marker$$32_markerId$$inline_8946$$.$getDisplayable$().$getElem$() : D.$JSCompiler_alias_NULL$$
    }
  }else {
    if("range_window" == $markers$$inline_8943_subId$$28$$) {
      return this.$_overview$.$getChildAt$(1).$getElem$()
    }
    if("range_start_handle" == $markers$$inline_8943_subId$$28$$) {
      return this.$_overview$.$getChildAt$(this.$_overview$.$getNumChildren$() - this.$_overview$.$_lastChildIndex$).$getElem$()
    }
    if("range_end_handle" == $markers$$inline_8943_subId$$28$$) {
      return(0,D.$JSCompiler_StaticMethods_getRightHandle$$)(this.$_overview$).$getElem$()
    }
  }
  return D.$JSCompiler_alias_NULL$$
};
(0,D.$goog$exportPath_$$)("DvtTimelineOverviewAutomation.prototype.getDomElementForSubId", D.$DvtTimelineOverviewAutomation$$.prototype.$getDomElementForSubId$);

  return D;
});
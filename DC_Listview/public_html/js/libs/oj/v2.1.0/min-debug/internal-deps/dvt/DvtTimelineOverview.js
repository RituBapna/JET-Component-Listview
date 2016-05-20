/**
 * Copyright (c) 2014, Oracle and/or its affiliates.
 * All rights reserved.
 */
"use strict";
define(['./DvtToolkit', './DvtOverview'], function(dvt) {
  // Internal use only.  All APIs and functionality are subject to change at any time.
  
  // Map the D namespace to dvt, which is used to provide access across partitions.
  var D = dvt;
  
D.$DvtTimelineOverview$$ = function $$DvtTimelineOverview$$$($context$$620$$, $callback$$171$$, $callbackObj$$118$$) {
  this.Init($context$$620$$, $callback$$171$$, $callbackObj$$118$$)
};
(0,D.$goog$exportPath_$$)("DvtTimelineOverview", D.$DvtTimelineOverview$$);
D.$DvtObj$$.$createSubclass$(D.$DvtTimelineOverview$$, D.$DvtOverview$$, "DvtTimelineOverview");
D.$DvtTimelineOverview$$.prototype.Init = function $$DvtTimelineOverview$$$$Init$($colors$$5_context$$621$$, $callback$$172$$, $callbackObj$$119$$) {
  D.$DvtTimelineOverview$$.$superclass$.Init.call(this, $colors$$5_context$$621$$, $callback$$172$$, $callbackObj$$119$$);
  $colors$$5_context$$621$$ = [D.$DvtColorUtils$$.$getPound$(D.$DvtColorUtils$$.$getPastel$("#aadd77", 0.35)), "#aadd77", D.$DvtColorUtils$$.$getPound$(D.$DvtColorUtils$$.$getDarker$("#aadd77", 0.5))];
  D.$DvtTimeUtils$$.$supportsTouch$() && ($colors$$5_context$$621$$ = ["#aadd77"]);
  this.$_defColors$ = $colors$$5_context$$621$$;
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
D.$DvtTimelineOverview$$.prototype.$addLabel$ = function $$DvtTimelineOverview$$$$$addLabel$$($pos$$77$$, $text$$114$$, $width$$167$$, $height$$150$$, $maxWidth$$34$$, $id$$311$$) {
  D.$DvtTimelineOverview$$.$superclass$.$addLabel$.call(this, $pos$$77$$, $text$$114$$, $width$$167$$, $height$$150$$, $maxWidth$$34$$, $id$$311$$, this.$_labelStyle$)
};
D.$JSCompiler_StaticMethods_getDrawableById$$ = function $$JSCompiler_StaticMethods_getDrawableById$$$($JSCompiler_StaticMethods_getDrawableById$self$$, $id$$312$$) {
  for(var $drawableId$$1$$ = "_mrk_" + $id$$312$$, $durationId$$ = "_drn_" + $id$$312$$, $numChildren$$16$$ = $JSCompiler_StaticMethods_getDrawableById$self$$.$getNumChildren$(), $childIndex$$11$$ = 0;$childIndex$$11$$ < $numChildren$$16$$;$childIndex$$11$$++) {
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
D.$JSCompiler_prototypeAlias$$.$getScaleX$ = function $$JSCompiler_prototypeAlias$$$$getScaleX$$($node$$311_scaleX$$7$$) {
  $node$$311_scaleX$$7$$ = $node$$311_scaleX$$7$$.$getScaleX$();
  $node$$311_scaleX$$7$$ == D.$JSCompiler_alias_NULL$$ && ($node$$311_scaleX$$7$$ = this.$isVertical$() ? (this.$Width$ - this.$getTimeAxisWidth$() - 4) / 2 : 1);
  return $node$$311_scaleX$$7$$
};
D.$JSCompiler_prototypeAlias$$.$getScaleY$ = function $$JSCompiler_prototypeAlias$$$$getScaleY$$($node$$312_scaleY$$7$$) {
  $node$$312_scaleY$$7$$ = $node$$312_scaleY$$7$$.$getScaleY$();
  $node$$312_scaleY$$7$$ == D.$JSCompiler_alias_NULL$$ && ($node$$312_scaleY$$7$$ = 1);
  return $node$$312_scaleY$$7$$
};
D.$JSCompiler_prototypeAlias$$.$parseDataXML$ = function $$JSCompiler_prototypeAlias$$$$parseDataXML$$($width$$168$$, $height$$151$$) {
  D.$DvtTimelineOverview$$.$superclass$.$parseDataXML$.call(this, $width$$168$$, $height$$151$$);
  if(this.$_markers$ != D.$JSCompiler_alias_NULL$$) {
    for(var $opt$$2$$ = (0,D.$JSCompiler_StaticMethods_calculateOptimalSize$$)(this, this.$_start$, this.$_end$, $width$$168$$, $height$$151$$, this.$_markerSize$), $durationMarkers$$ = [], $context$$inline_8940_j$$124$$ = 0;$context$$inline_8940_j$$124$$ < this.$_markers$.length;$context$$inline_8940_j$$124$$++) {
      var $i$$inline_8941_marker$$19_node$$inline_8915$$ = this.$_markers$[$context$$inline_8940_j$$124$$];
      if($i$$inline_8941_marker$$19_node$$inline_8915$$.$_endTime$ == D.$JSCompiler_alias_NULL$$) {
        var $alphas$$inline_8932_darker$$inline_8931_height$$inline_8925_sz$$inline_8916$$ = $opt$$2$$, $displayable$$inline_8928_durationId$$inline_8945_feelerStroke$$inline_8949_itemId$$inline_8917$$ = "_mrk_" + $i$$inline_8941_marker$$19_node$$inline_8915$$.getId(), $color$$inline_8918_count$$inline_8935_node$$inline_8943_stroke$$inline_8934$$ = $i$$inline_8941_marker$$19_node$$inline_8915$$.$getColor$(), $duration$$inline_8948_fill$$inline_8933_isGradient$$inline_8919_x$$inline_8944$$ = $i$$inline_8941_marker$$19_node$$inline_8915$$.$_gradient$, 
        $durationY$$inline_8946_lastChild$$inline_8936_opacity$$inline_8920$$ = $i$$inline_8941_marker$$19_node$$inline_8915$$.$getOpacity$();
        $durationY$$inline_8946_lastChild$$inline_8936_opacity$$inline_8920$$ == D.$JSCompiler_alias_NULL$$ && ($durationY$$inline_8946_lastChild$$inline_8936_opacity$$inline_8920$$ = this.$_defOpacity$, 0 == $durationY$$inline_8946_lastChild$$inline_8936_opacity$$inline_8920$$ && $color$$inline_8918_count$$inline_8935_node$$inline_8943_stroke$$inline_8934$$ != D.$JSCompiler_alias_NULL$$ && ($durationY$$inline_8946_lastChild$$inline_8936_opacity$$inline_8920$$ = 1));
        var $colors$$inline_8929_lighter$$inline_8930_scaleX$$inline_8921_width$$inline_8924_x2$$inline_8947$$ = this.$getScaleX$($i$$inline_8941_marker$$19_node$$inline_8915$$), $cx$$inline_8926_scaleY$$inline_8922$$ = this.$getScaleY$($i$$inline_8941_marker$$19_node$$inline_8915$$), $j$$inline_8942_marker$$inline_8923$$ = $i$$inline_8941_marker$$19_node$$inline_8915$$.$getShape$();
        if(this.$isVertical$()) {
          var $j$$inline_8942_marker$$inline_8923$$ = "rectangle", $colors$$inline_8929_lighter$$inline_8930_scaleX$$inline_8921_width$$inline_8924_x2$$inline_8947$$ = 2 * $colors$$inline_8929_lighter$$inline_8930_scaleX$$inline_8921_width$$inline_8924_x2$$inline_8947$$, $alphas$$inline_8932_darker$$inline_8931_height$$inline_8925_sz$$inline_8916$$ = 2 * $cx$$inline_8926_scaleY$$inline_8922$$, $cx$$inline_8926_scaleY$$inline_8922$$ = $i$$inline_8941_marker$$19_node$$inline_8915$$.$getY$() + $colors$$inline_8929_lighter$$inline_8930_scaleX$$inline_8921_width$$inline_8924_x2$$inline_8947$$ / 
          2, $cy$$inline_8927$$ = $i$$inline_8941_marker$$19_node$$inline_8915$$.$getX$() + $alphas$$inline_8932_darker$$inline_8931_height$$inline_8925_sz$$inline_8916$$ / 2
        }else {
          $colors$$inline_8929_lighter$$inline_8930_scaleX$$inline_8921_width$$inline_8924_x2$$inline_8947$$ *= $alphas$$inline_8932_darker$$inline_8931_height$$inline_8925_sz$$inline_8916$$, $alphas$$inline_8932_darker$$inline_8931_height$$inline_8925_sz$$inline_8916$$ *= $cx$$inline_8926_scaleY$$inline_8922$$, $cx$$inline_8926_scaleY$$inline_8922$$ = $i$$inline_8941_marker$$19_node$$inline_8915$$.$getX$() + $colors$$inline_8929_lighter$$inline_8930_scaleX$$inline_8921_width$$inline_8924_x2$$inline_8947$$ / 
          2, $cy$$inline_8927$$ = $i$$inline_8941_marker$$19_node$$inline_8915$$.$getY$() + $alphas$$inline_8932_darker$$inline_8931_height$$inline_8925_sz$$inline_8916$$ / 2
        }
        $displayable$$inline_8928_durationId$$inline_8945_feelerStroke$$inline_8949_itemId$$inline_8917$$ = new D.$DvtSimpleMarker$$(this.$getCtx$(), $j$$inline_8942_marker$$inline_8923$$, D.$JSCompiler_alias_NULL$$, $cx$$inline_8926_scaleY$$inline_8922$$, $cy$$inline_8927$$, $colors$$inline_8929_lighter$$inline_8930_scaleX$$inline_8921_width$$inline_8924_x2$$inline_8947$$, $alphas$$inline_8932_darker$$inline_8931_height$$inline_8925_sz$$inline_8916$$, D.$JSCompiler_alias_NULL$$, $displayable$$inline_8928_durationId$$inline_8945_feelerStroke$$inline_8949_itemId$$inline_8917$$);
        $displayable$$inline_8928_durationId$$inline_8945_feelerStroke$$inline_8949_itemId$$inline_8917$$.$_node$ = $i$$inline_8941_marker$$19_node$$inline_8915$$;
        $color$$inline_8918_count$$inline_8935_node$$inline_8943_stroke$$inline_8934$$ == D.$JSCompiler_alias_NULL$$ && $durationY$$inline_8946_lastChild$$inline_8936_opacity$$inline_8920$$ == this.$_defOpacity$ && $duration$$inline_8948_fill$$inline_8933_isGradient$$inline_8919_x$$inline_8944$$ == D.$JSCompiler_alias_NULL$$ ? ($duration$$inline_8948_fill$$inline_8933_isGradient$$inline_8919_x$$inline_8944$$ = "circle" == $j$$inline_8942_marker$$inline_8923$$ ? this.$_radialFill$ : this.$_linearFill$, 
        $color$$inline_8918_count$$inline_8935_node$$inline_8943_stroke$$inline_8934$$ = this.$_border$) : ($colors$$inline_8929_lighter$$inline_8930_scaleX$$inline_8921_width$$inline_8924_x2$$inline_8947$$ = this.$_defColors$, $color$$inline_8918_count$$inline_8935_node$$inline_8943_stroke$$inline_8934$$ != D.$JSCompiler_alias_NULL$$ && (D.$DvtTimeUtils$$.$supportsTouch$() ? $colors$$inline_8929_lighter$$inline_8930_scaleX$$inline_8921_width$$inline_8924_x2$$inline_8947$$ = [$color$$inline_8918_count$$inline_8935_node$$inline_8943_stroke$$inline_8934$$] : 
        ($colors$$inline_8929_lighter$$inline_8930_scaleX$$inline_8921_width$$inline_8924_x2$$inline_8947$$ = D.$DvtColorUtils$$.$getPastel$($color$$inline_8918_count$$inline_8935_node$$inline_8943_stroke$$inline_8934$$, 0.5), $alphas$$inline_8932_darker$$inline_8931_height$$inline_8925_sz$$inline_8916$$ = D.$DvtColorUtils$$.$getDarker$($color$$inline_8918_count$$inline_8935_node$$inline_8943_stroke$$inline_8934$$, 0.5), $colors$$inline_8929_lighter$$inline_8930_scaleX$$inline_8921_width$$inline_8924_x2$$inline_8947$$ = 
        [$colors$$inline_8929_lighter$$inline_8930_scaleX$$inline_8921_width$$inline_8924_x2$$inline_8947$$, $color$$inline_8918_count$$inline_8935_node$$inline_8943_stroke$$inline_8934$$, $alphas$$inline_8932_darker$$inline_8931_height$$inline_8925_sz$$inline_8916$$])), $alphas$$inline_8932_darker$$inline_8931_height$$inline_8925_sz$$inline_8916$$ = [$durationY$$inline_8946_lastChild$$inline_8936_opacity$$inline_8920$$, $durationY$$inline_8946_lastChild$$inline_8936_opacity$$inline_8920$$, $durationY$$inline_8946_lastChild$$inline_8936_opacity$$inline_8920$$], 
        $duration$$inline_8948_fill$$inline_8933_isGradient$$inline_8919_x$$inline_8944$$ = $duration$$inline_8948_fill$$inline_8933_isGradient$$inline_8919_x$$inline_8944$$ == D.$JSCompiler_alias_NULL$$ ? "circle" == $j$$inline_8942_marker$$inline_8923$$ ? new D.$DvtLinearGradientFill$$(250, $colors$$inline_8929_lighter$$inline_8930_scaleX$$inline_8921_width$$inline_8924_x2$$inline_8947$$, $alphas$$inline_8932_darker$$inline_8931_height$$inline_8925_sz$$inline_8916$$) : new D.$DvtLinearGradientFill$$(180, 
        $colors$$inline_8929_lighter$$inline_8930_scaleX$$inline_8921_width$$inline_8924_x2$$inline_8947$$, $alphas$$inline_8932_darker$$inline_8931_height$$inline_8925_sz$$inline_8916$$) : new D.$DvtSolidFill$$($color$$inline_8918_count$$inline_8935_node$$inline_8943_stroke$$inline_8934$$, $alphas$$inline_8932_darker$$inline_8931_height$$inline_8925_sz$$inline_8916$$[0]), $color$$inline_8918_count$$inline_8935_node$$inline_8943_stroke$$inline_8934$$ = new D.$DvtSolidStroke$$($color$$inline_8918_count$$inline_8935_node$$inline_8943_stroke$$inline_8934$$, 
        $durationY$$inline_8946_lastChild$$inline_8936_opacity$$inline_8920$$));
        $displayable$$inline_8928_durationId$$inline_8945_feelerStroke$$inline_8949_itemId$$inline_8917$$.$setFill$($duration$$inline_8948_fill$$inline_8933_isGradient$$inline_8919_x$$inline_8944$$);
        $displayable$$inline_8928_durationId$$inline_8945_feelerStroke$$inline_8949_itemId$$inline_8917$$.$setStroke$($color$$inline_8918_count$$inline_8935_node$$inline_8943_stroke$$inline_8934$$);
        "none" != this.$_selectionMode$ && $displayable$$inline_8928_durationId$$inline_8945_feelerStroke$$inline_8949_itemId$$inline_8917$$.$setSelectable$(D.$JSCompiler_alias_TRUE$$);
        $color$$inline_8918_count$$inline_8935_node$$inline_8943_stroke$$inline_8934$$ = this.$getNumChildren$();
        $durationY$$inline_8946_lastChild$$inline_8936_opacity$$inline_8920$$ = this.$getChildAt$($color$$inline_8918_count$$inline_8935_node$$inline_8943_stroke$$inline_8934$$ - 1);
        $color$$inline_8918_count$$inline_8935_node$$inline_8943_stroke$$inline_8934$$ > this.$_lastChildIndex$ && ("tb" == $durationY$$inline_8946_lastChild$$inline_8936_opacity$$inline_8920$$.getId() || "arr" == $durationY$$inline_8946_lastChild$$inline_8936_opacity$$inline_8920$$.getId()) ? this.$addChildAt$($displayable$$inline_8928_durationId$$inline_8945_feelerStroke$$inline_8949_itemId$$inline_8917$$, $color$$inline_8918_count$$inline_8935_node$$inline_8943_stroke$$inline_8934$$ - this.$_lastChildIndex$) : 
        this.$addChild$($displayable$$inline_8928_durationId$$inline_8945_feelerStroke$$inline_8949_itemId$$inline_8917$$);
        $i$$inline_8941_marker$$19_node$$inline_8915$$.$setDisplayable$($displayable$$inline_8928_durationId$$inline_8945_feelerStroke$$inline_8949_itemId$$inline_8917$$);
        this.$applyState$($displayable$$inline_8928_durationId$$inline_8945_feelerStroke$$inline_8949_itemId$$inline_8917$$, "_");
        (this.$isVertical$() || "rectangle" == $j$$inline_8942_marker$$inline_8923$$ || "diamond" == $j$$inline_8942_marker$$inline_8923$$ || "triangleUp" == $j$$inline_8942_marker$$inline_8923$$ || "triangleDown" == $j$$inline_8942_marker$$inline_8923$$ || "plus" == $j$$inline_8942_marker$$inline_8923$$) && "false" != this.$_defaultMarkerStyles$.$pixelHinting$ && (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)($displayable$$inline_8928_durationId$$inline_8945_feelerStroke$$inline_8949_itemId$$inline_8917$$)
      }else {
        $durationMarkers$$[$durationMarkers$$.length] = $i$$inline_8941_marker$$19_node$$inline_8915$$
      }
    }
    this.$prepareDurations$($durationMarkers$$);
    $context$$inline_8940_j$$124$$ = this.$getCtx$();
    for($i$$inline_8941_marker$$19_node$$inline_8915$$ = this.$_maxDurationY$;0 < $i$$inline_8941_marker$$19_node$$inline_8915$$;$i$$inline_8941_marker$$19_node$$inline_8915$$--) {
      for($j$$inline_8942_marker$$inline_8923$$ = 0;$j$$inline_8942_marker$$inline_8923$$ < $durationMarkers$$.length;$j$$inline_8942_marker$$inline_8923$$++) {
        $color$$inline_8918_count$$inline_8935_node$$inline_8943_stroke$$inline_8934$$ = $durationMarkers$$[$j$$inline_8942_marker$$inline_8923$$], $i$$inline_8941_marker$$19_node$$inline_8915$$ == $color$$inline_8918_count$$inline_8935_node$$inline_8943_stroke$$inline_8934$$.$_durationLevel$ && ($duration$$inline_8948_fill$$inline_8933_isGradient$$inline_8919_x$$inline_8944$$ = D.$DvtTimeUtils$$.$getDatePosition$(this.$_start$, this.$_end$, $color$$inline_8918_count$$inline_8935_node$$inline_8943_stroke$$inline_8934$$.getTime(), 
        this.$isVertical$() ? this.$Height$ : this.$Width$), $displayable$$inline_8928_durationId$$inline_8945_feelerStroke$$inline_8949_itemId$$inline_8917$$ = "_drn_" + $color$$inline_8918_count$$inline_8935_node$$inline_8943_stroke$$inline_8934$$.getId(), $durationY$$inline_8946_lastChild$$inline_8936_opacity$$inline_8920$$ = 9 + 5 * $color$$inline_8918_count$$inline_8935_node$$inline_8943_stroke$$inline_8934$$.$_durationLevel$, $colors$$inline_8929_lighter$$inline_8930_scaleX$$inline_8921_width$$inline_8924_x2$$inline_8947$$ = 
        D.$DvtTimeUtils$$.$getDatePosition$(this.$_start$, this.$_end$, $color$$inline_8918_count$$inline_8935_node$$inline_8943_stroke$$inline_8934$$.$_endTime$, this.$isVertical$() ? this.$Height$ : this.$Width$), $duration$$inline_8948_fill$$inline_8933_isGradient$$inline_8919_x$$inline_8944$$ = this.$isVertical$() ? this.$isRTL$() ? new D.$DvtRect$$($context$$inline_8940_j$$124$$, 0, $duration$$inline_8948_fill$$inline_8933_isGradient$$inline_8919_x$$inline_8944$$, $durationY$$inline_8946_lastChild$$inline_8936_opacity$$inline_8920$$, 
        $colors$$inline_8929_lighter$$inline_8930_scaleX$$inline_8921_width$$inline_8924_x2$$inline_8947$$ - $duration$$inline_8948_fill$$inline_8933_isGradient$$inline_8919_x$$inline_8944$$, $displayable$$inline_8928_durationId$$inline_8945_feelerStroke$$inline_8949_itemId$$inline_8917$$) : new D.$DvtRect$$($context$$inline_8940_j$$124$$, this.$Width$ - $durationY$$inline_8946_lastChild$$inline_8936_opacity$$inline_8920$$, $duration$$inline_8948_fill$$inline_8933_isGradient$$inline_8919_x$$inline_8944$$, 
        $durationY$$inline_8946_lastChild$$inline_8936_opacity$$inline_8920$$, $colors$$inline_8929_lighter$$inline_8930_scaleX$$inline_8921_width$$inline_8924_x2$$inline_8947$$ - $duration$$inline_8948_fill$$inline_8933_isGradient$$inline_8919_x$$inline_8944$$, $displayable$$inline_8928_durationId$$inline_8945_feelerStroke$$inline_8949_itemId$$inline_8917$$) : this.$isRTL$() ? new D.$DvtRect$$($context$$inline_8940_j$$124$$, this.$Width$ - $colors$$inline_8929_lighter$$inline_8930_scaleX$$inline_8921_width$$inline_8924_x2$$inline_8947$$, 
        this.$Height$ - $durationY$$inline_8946_lastChild$$inline_8936_opacity$$inline_8920$$ - 20, $colors$$inline_8929_lighter$$inline_8930_scaleX$$inline_8921_width$$inline_8924_x2$$inline_8947$$ - $duration$$inline_8948_fill$$inline_8933_isGradient$$inline_8919_x$$inline_8944$$, $durationY$$inline_8946_lastChild$$inline_8936_opacity$$inline_8920$$, $displayable$$inline_8928_durationId$$inline_8945_feelerStroke$$inline_8949_itemId$$inline_8917$$) : new D.$DvtRect$$($context$$inline_8940_j$$124$$, 
        $duration$$inline_8948_fill$$inline_8933_isGradient$$inline_8919_x$$inline_8944$$, this.$Height$ - $durationY$$inline_8946_lastChild$$inline_8936_opacity$$inline_8920$$ - 20, $colors$$inline_8929_lighter$$inline_8930_scaleX$$inline_8921_width$$inline_8924_x2$$inline_8947$$ - $duration$$inline_8948_fill$$inline_8933_isGradient$$inline_8919_x$$inline_8944$$, $durationY$$inline_8946_lastChild$$inline_8936_opacity$$inline_8920$$, $displayable$$inline_8928_durationId$$inline_8945_feelerStroke$$inline_8949_itemId$$inline_8917$$), 
        $duration$$inline_8948_fill$$inline_8933_isGradient$$inline_8919_x$$inline_8944$$.$setFill$(new D.$DvtSolidFill$$($color$$inline_8918_count$$inline_8935_node$$inline_8943_stroke$$inline_8934$$.$_durationFillColor$)), $displayable$$inline_8928_durationId$$inline_8945_feelerStroke$$inline_8949_itemId$$inline_8917$$ = new D.$DvtSolidStroke$$(this.$getStyle$("_", "dbc"), 1, 1), $duration$$inline_8948_fill$$inline_8933_isGradient$$inline_8919_x$$inline_8944$$.$setStroke$($displayable$$inline_8928_durationId$$inline_8945_feelerStroke$$inline_8949_itemId$$inline_8917$$), 
        (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)($duration$$inline_8948_fill$$inline_8933_isGradient$$inline_8919_x$$inline_8944$$), $duration$$inline_8948_fill$$inline_8933_isGradient$$inline_8919_x$$inline_8944$$.$_node$ = $color$$inline_8918_count$$inline_8935_node$$inline_8943_stroke$$inline_8934$$, this.$addChild$($duration$$inline_8948_fill$$inline_8933_isGradient$$inline_8919_x$$inline_8944$$), $color$$inline_8918_count$$inline_8935_node$$inline_8943_stroke$$inline_8934$$.$_durationBar$ = 
        $duration$$inline_8948_fill$$inline_8933_isGradient$$inline_8919_x$$inline_8944$$, $color$$inline_8918_count$$inline_8935_node$$inline_8943_stroke$$inline_8934$$.$_durationY$ = $durationY$$inline_8946_lastChild$$inline_8936_opacity$$inline_8920$$ - 2)
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
    var $marker$$20$$ = $durationMarkers$$1$$[$i$$856$$], $id$$313$$ = $marker$$20$$.getId(), $sId$$2$$ = $id$$313$$.substring($id$$313$$.indexOf(":") + 1, $id$$313$$.length), $sId$$2$$ = $sId$$2$$.substring(0, $sId$$2$$.indexOf(":"));
    $sId$$2$$ != $markerSeries$$ && (this.$_colorCount$ = 0, $markerSeries$$ = $sId$$2$$);
    $marker$$20$$.$_durationLevel$ = (0,D.$JSCompiler_StaticMethods_calculateDurationY$$)(this, $marker$$20$$, $durationMarkers$$1$$);
    $marker$$20$$.$_durationFillColor$ == D.$JSCompiler_alias_NULL$$ && (this.$_durationColorMap$[$id$$313$$] == D.$JSCompiler_alias_NULL$$ ? (this.$_durationColorMap$[$id$$313$$] = this.$_colorCount$, $marker$$20$$.$_durationFillColor$ = this.$_durationColors$[this.$_colorCount$], this.$_colorCount$++, this.$_colorCount$ == this.$_durationColors$.length && (this.$_colorCount$ = 0)) : $marker$$20$$.$_durationFillColor$ = this.$_durationColors$[this.$_durationColorMap$[$id$$313$$]])
  }
};
D.$JSCompiler_prototypeAlias$$.$getDurationColorMap$ = function $$JSCompiler_prototypeAlias$$$$getDurationColorMap$$() {
  return this.$_durationColorMap$ ? this.$_durationColorMap$ : D.$JSCompiler_alias_NULL$$
};
D.$DvtTimelineOverview$$.prototype.getDurationColorMap = D.$DvtTimelineOverview$$.prototype.$getDurationColorMap$;
D.$JSCompiler_StaticMethods_calculateOptimalSize$$ = function $$JSCompiler_StaticMethods_calculateOptimalSize$$$($JSCompiler_StaticMethods_calculateOptimalSize$self$$, $start$$48$$, $end$$32$$, $width$$169$$, $height$$152$$, $size$$50$$) {
  for(var $JSCompiler_StaticMethods_calculateY$self$$inline_11553_JSCompiler_object_inline_cy_11663$$, $JSCompiler_object_inline_maxy_11664_result$$inline_11554$$, $result$$3$$ = {max:1, $arr$:[]}, $canvasSize$$ = $JSCompiler_StaticMethods_calculateOptimalSize$self$$.$isVertical$() ? $height$$152$$ : $width$$169$$, $i$$857$$ = 0;$i$$857$$ < $JSCompiler_StaticMethods_calculateOptimalSize$self$$.$_markers$.length;$i$$857$$++) {
    var $marker$$21_node$$inline_8956$$ = $JSCompiler_StaticMethods_calculateOptimalSize$self$$.$_markers$[$i$$857$$];
    if($marker$$21_node$$inline_8956$$.$_endTime$ != D.$JSCompiler_alias_NULL$$) {
      var $JSCompiler_StaticMethods_calculateSize$self$$inline_8955_x$$300$$ = D.$DvtTimeUtils$$.$getDatePosition$($start$$48$$, $end$$32$$, $marker$$21_node$$inline_8956$$.getTime(), $canvasSize$$);
      (0,D.$JSCompiler_StaticMethods_isHorizontalRTL$$)($JSCompiler_StaticMethods_calculateOptimalSize$self$$) && ($JSCompiler_StaticMethods_calculateSize$self$$inline_8955_x$$300$$ = $canvasSize$$ - $JSCompiler_StaticMethods_calculateSize$self$$inline_8955_x$$300$$);
      $marker$$21_node$$inline_8956$$.$setX$($JSCompiler_StaticMethods_calculateSize$self$$inline_8955_x$$300$$)
    }else {
      var $JSCompiler_StaticMethods_calculateSize$self$$inline_8955_x$$300$$ = $JSCompiler_StaticMethods_calculateOptimalSize$self$$, $cx$$inline_8965_start$$inline_8957$$ = $start$$48$$, $counter$$inline_8969_end$$inline_8958$$ = $end$$32$$, $cy$$inline_8967_size$$inline_8959$$ = $canvasSize$$, $borderOffset$$inline_8966_hsz$$inline_8960$$ = $size$$50$$ / 2, $result$$inline_8961$$ = $result$$3$$, $maxHeight$$inline_8962$$ = $height$$152$$, $hszx$$inline_8963$$ = $borderOffset$$inline_8966_hsz$$inline_8960$$ * 
      $JSCompiler_StaticMethods_calculateSize$self$$inline_8955_x$$300$$.$getScaleX$($marker$$21_node$$inline_8956$$) + $JSCompiler_StaticMethods_calculateSize$self$$inline_8955_x$$300$$.$_markerSpacingOffset$, $hszy$$inline_8964$$ = $borderOffset$$inline_8966_hsz$$inline_8960$$ * $JSCompiler_StaticMethods_calculateSize$self$$inline_8955_x$$300$$.$getScaleY$($marker$$21_node$$inline_8956$$) + $JSCompiler_StaticMethods_calculateSize$self$$inline_8955_x$$300$$.$_markerSpacingOffset$, $cx$$inline_8965_start$$inline_8957$$ = 
      D.$DvtTimeUtils$$.$getDatePosition$($cx$$inline_8965_start$$inline_8957$$, $counter$$inline_8969_end$$inline_8958$$, $marker$$21_node$$inline_8956$$.getTime(), $cy$$inline_8967_size$$inline_8959$$);
      (0,D.$JSCompiler_StaticMethods_isHorizontalRTL$$)($JSCompiler_StaticMethods_calculateSize$self$$inline_8955_x$$300$$) && ($cx$$inline_8965_start$$inline_8957$$ = $cy$$inline_8967_size$$inline_8959$$ - $cx$$inline_8965_start$$inline_8957$$ - 2 * $hszx$$inline_8963$$);
      if($JSCompiler_StaticMethods_calculateSize$self$$inline_8955_x$$300$$.$isVertical$()) {
        $borderOffset$$inline_8966_hsz$$inline_8960$$ = 0, "solid" == $JSCompiler_StaticMethods_calculateSize$self$$inline_8955_x$$300$$.$getStyle$("_", "bs") && ($borderOffset$$inline_8966_hsz$$inline_8960$$ = (0,window.parseInt)($JSCompiler_StaticMethods_calculateSize$self$$inline_8955_x$$300$$.$getStyle$("_", "bw"), 10)), $cy$$inline_8967_size$$inline_8959$$ = $JSCompiler_StaticMethods_calculateSize$self$$inline_8955_x$$300$$.$isRTL$() ? $borderOffset$$inline_8966_hsz$$inline_8960$$ + 4 : $JSCompiler_StaticMethods_calculateSize$self$$inline_8955_x$$300$$.$Width$ - 
        2 * $JSCompiler_StaticMethods_calculateSize$self$$inline_8955_x$$300$$.$getScaleX$($marker$$21_node$$inline_8956$$) - $borderOffset$$inline_8966_hsz$$inline_8960$$ - 4
      }else {
        for(var $cy$$inline_8967_size$$inline_8959$$ = 3, $maxy$$inline_11560_maxy$$inline_8968$$ = 0, $counter$$inline_8969_end$$inline_8958$$ = 0;1 > $counter$$inline_8969_end$$inline_8958$$;) {
          $JSCompiler_StaticMethods_calculateY$self$$inline_11553_JSCompiler_object_inline_cy_11663$$ = $JSCompiler_StaticMethods_calculateSize$self$$inline_8955_x$$300$$;
          $JSCompiler_object_inline_maxy_11664_result$$inline_11554$$ = $result$$inline_8961$$;
          var $shape$$inline_11555$$ = $marker$$21_node$$inline_8956$$.$getShape$(), $cx$$inline_11556$$ = $cx$$inline_8965_start$$inline_8957$$, $cy$$inline_11557$$ = $cy$$inline_8967_size$$inline_8959$$, $hszx$$inline_11558$$ = $hszx$$inline_8963$$, $hszy$$inline_11559$$ = $hszy$$inline_8964$$, $hsz$$inline_11561$$ = $borderOffset$$inline_8966_hsz$$inline_8960$$, $maxHeight$$inline_11562$$ = $maxHeight$$inline_8962$$;
          "above" == $JSCompiler_StaticMethods_calculateY$self$$inline_11553_JSCompiler_object_inline_cy_11663$$.$_overviewPosition$ && ($cy$$inline_11557$$ += (0,D.$JSCompiler_StaticMethods_getTimeAxisHeight$$)($JSCompiler_StaticMethods_calculateY$self$$inline_11553_JSCompiler_object_inline_cy_11663$$));
          for(var $i$$inline_11563$$ = 0;$i$$inline_11563$$ < $JSCompiler_object_inline_maxy_11664_result$$inline_11554$$.$arr$.length;$i$$inline_11563$$++) {
            var $prevMarker$$inline_11564_prevScaleY$$inline_11569$$ = $JSCompiler_object_inline_maxy_11664_result$$inline_11554$$.$arr$[$i$$inline_11563$$], $prevX$$inline_11565_xDist$$inline_11570$$ = $prevMarker$$inline_11564_prevScaleY$$inline_11569$$.$getX$(), $prevY$$inline_11566$$ = $prevMarker$$inline_11564_prevScaleY$$inline_11569$$.$getY$(), $height$$inline_11572_prevShape$$inline_11567$$ = $prevMarker$$inline_11564_prevScaleY$$inline_11569$$.$getShape$(), $prevScaleX$$inline_11568$$ = 
            $JSCompiler_StaticMethods_calculateY$self$$inline_11553_JSCompiler_object_inline_cy_11663$$.$getScaleX$($prevMarker$$inline_11564_prevScaleY$$inline_11569$$), $prevMarker$$inline_11564_prevScaleY$$inline_11569$$ = $JSCompiler_StaticMethods_calculateY$self$$inline_11553_JSCompiler_object_inline_cy_11663$$.$getScaleY$($prevMarker$$inline_11564_prevScaleY$$inline_11569$$), $prevX$$inline_11565_xDist$$inline_11570$$ = window.Math.abs($cx$$inline_11556$$ - $prevX$$inline_11565_xDist$$inline_11570$$), 
            $minDist$$inline_11571$$ = $hsz$$inline_11561$$ * $prevScaleX$$inline_11568$$ + $JSCompiler_StaticMethods_calculateY$self$$inline_11553_JSCompiler_object_inline_cy_11663$$.$_markerSpacingOffset$ + $hszx$$inline_11558$$;
            if(!($prevX$$inline_11565_xDist$$inline_11570$$ >= $minDist$$inline_11571$$) && ($height$$inline_11572_prevShape$$inline_11567$$ = "circle" == $shape$$inline_11555$$ && "circle" == $height$$inline_11572_prevShape$$inline_11567$$ && $hszx$$inline_11558$$ == $hszy$$inline_11559$$ && $prevScaleX$$inline_11568$$ == $prevMarker$$inline_11564_prevScaleY$$inline_11569$$ ? window.Math.sqrt($minDist$$inline_11571$$ * $minDist$$inline_11571$$ - $prevX$$inline_11565_xDist$$inline_11570$$ * $prevX$$inline_11565_xDist$$inline_11570$$) : 
            $hsz$$inline_11561$$ * $prevMarker$$inline_11564_prevScaleY$$inline_11569$$ + $JSCompiler_StaticMethods_calculateY$self$$inline_11553_JSCompiler_object_inline_cy_11663$$.$_markerSpacingOffset$ + $hszy$$inline_11559$$, $height$$inline_11572_prevShape$$inline_11567$$ > window.Math.abs($cy$$inline_11557$$ - $prevY$$inline_11566$$) && ($cy$$inline_11557$$ = $prevY$$inline_11566$$ + $height$$inline_11572_prevShape$$inline_11567$$, $maxy$$inline_11560_maxy$$inline_8968$$ = window.Math.max($maxy$$inline_11560_maxy$$inline_8968$$, 
            $cy$$inline_11557$$ + $height$$inline_11572_prevShape$$inline_11567$$), 1 <= $hsz$$inline_11561$$ && $maxHeight$$inline_11562$$ != D.$JSCompiler_alias_VOID$$ && $maxy$$inline_11560_maxy$$inline_8968$$ > $maxHeight$$inline_11562$$))) {
              break
            }
          }
          $JSCompiler_StaticMethods_calculateY$self$$inline_11553_JSCompiler_object_inline_cy_11663$$ = $cy$$inline_11557$$;
          $JSCompiler_object_inline_maxy_11664_result$$inline_11554$$ = $maxy$$inline_11560_maxy$$inline_8968$$;
          $JSCompiler_StaticMethods_calculateY$self$$inline_11553_JSCompiler_object_inline_cy_11663$$ == $cy$$inline_8967_size$$inline_8959$$ && ($counter$$inline_8969_end$$inline_8958$$ = 1);
          $maxy$$inline_11560_maxy$$inline_8968$$ = $JSCompiler_object_inline_maxy_11664_result$$inline_11554$$;
          $cy$$inline_8967_size$$inline_8959$$ = $JSCompiler_StaticMethods_calculateY$self$$inline_11553_JSCompiler_object_inline_cy_11663$$;
          $counter$$inline_8969_end$$inline_8958$$++
        }
      }
      $marker$$21_node$$inline_8956$$.$setX$($cx$$inline_8965_start$$inline_8957$$);
      $marker$$21_node$$inline_8956$$.$setY$($cy$$inline_8967_size$$inline_8959$$);
      $result$$inline_8961$$.$arr$.push($marker$$21_node$$inline_8956$$);
      $maxy$$inline_11560_maxy$$inline_8968$$ > $result$$inline_8961$$.max && ($result$$inline_8961$$.max = $maxy$$inline_11560_maxy$$inline_8968$$);
      if($result$$3$$.max > $height$$152$$) {
        break
      }
    }
  }
  return $result$$3$$.max > $height$$152$$ && 1 < $size$$50$$ ? (0,D.$JSCompiler_StaticMethods_calculateOptimalSize$$)($JSCompiler_StaticMethods_calculateOptimalSize$self$$, $start$$48$$, $end$$32$$, $width$$169$$, $height$$152$$, $size$$50$$ - 1) : $size$$50$$
};
D.$JSCompiler_StaticMethods_calculateDurationY$$ = function $$JSCompiler_StaticMethods_calculateDurationY$$$($JSCompiler_StaticMethods_calculateDurationY$self$$, $item$$63$$, $durationMarkers$$3$$) {
  var $index$$250$$ = $durationMarkers$$3$$.length, $startTime$$7$$ = $item$$63$$.getTime(), $y$$268$$ = $item$$63$$.$_durationLevel$;
  $y$$268$$ == D.$JSCompiler_alias_NULL$$ && ($y$$268$$ = 1);
  for(var $i$$860$$ = 0;$i$$860$$ < $index$$250$$;$i$$860$$++) {
    var $currItem_curry$$ = $durationMarkers$$3$$[$i$$860$$];
    if($currItem_curry$$ != $item$$63$$) {
      var $currEndTime$$ = $currItem_curry$$.$_endTime$;
      if($currEndTime$$ != D.$JSCompiler_alias_NULL$$) {
        var $currStartTime$$ = $currItem_curry$$.getTime(), $currItem_curry$$ = $currItem_curry$$.$_durationLevel$;
        $currItem_curry$$ == D.$JSCompiler_alias_NULL$$ && ($currItem_curry$$ = 1);
        $startTime$$7$$ >= $currStartTime$$ && ($startTime$$7$$ <= $currEndTime$$ && $y$$268$$ == $currItem_curry$$) && ($y$$268$$ = $currItem_curry$$ + 1, $item$$63$$.$_durationLevel$ = $y$$268$$, $y$$268$$ = (0,D.$JSCompiler_StaticMethods_calculateDurationY$$)($JSCompiler_StaticMethods_calculateDurationY$self$$, $item$$63$$, $durationMarkers$$3$$))
      }
    }
  }
  $y$$268$$ > $JSCompiler_StaticMethods_calculateDurationY$self$$.$_maxDurationY$ && ($JSCompiler_StaticMethods_calculateDurationY$self$$.$_maxDurationY$ = $y$$268$$);
  return $y$$268$$
};
D.$DvtTimelineOverview$$.prototype.$HandleShapeMouseOver$ = function $$DvtTimelineOverview$$$$$HandleShapeMouseOver$$($event$$808_isSelected$$1_itemId$$3$$) {
  var $drawable$$11$$ = D.$DvtTimelineOverview$$.$superclass$.$HandleShapeMouseOver$.call(this, $event$$808_isSelected$$1_itemId$$3$$);
  if($drawable$$11$$ != D.$JSCompiler_alias_NULL$$) {
    if($drawable$$11$$.$_node$ != D.$JSCompiler_alias_NULL$$) {
      var $evt$$66_i$$861_tooltip$$48$$ = $drawable$$11$$.$_node$.$_desc$;
      $evt$$66_i$$861_tooltip$$48$$ != D.$JSCompiler_alias_NULL$$ && this.$getCtx$().$getTooltipManager$().$showDatatip$($event$$808_isSelected$$1_itemId$$3$$.pageX, $event$$808_isSelected$$1_itemId$$3$$.pageY, $evt$$66_i$$861_tooltip$$48$$, "#000000");
      this.$isFlashEnvironment$() && this.setCursor("pointer")
    }
    if("none" != this.$_selectionMode$) {
      $event$$808_isSelected$$1_itemId$$3$$ = D.$JSCompiler_alias_FALSE$$;
      if(this.$_selectedMarkers$ != D.$JSCompiler_alias_NULL$$) {
        for($evt$$66_i$$861_tooltip$$48$$ = 0;$evt$$66_i$$861_tooltip$$48$$ < this.$_selectedMarkers$.length;$evt$$66_i$$861_tooltip$$48$$++) {
          if($drawable$$11$$ == this.$_selectedMarkers$[$evt$$66_i$$861_tooltip$$48$$]) {
            $event$$808_isSelected$$1_itemId$$3$$ = D.$JSCompiler_alias_TRUE$$;
            break
          }
        }
      }
      $event$$808_isSelected$$1_itemId$$3$$ || ($event$$808_isSelected$$1_itemId$$3$$ = this.$getItemId$($drawable$$11$$), $evt$$66_i$$861_tooltip$$48$$ = new D.$DvtTimelineOverviewEvent$$("highlight"), (0,D.$JSCompiler_StaticMethods_addParam$$)($evt$$66_i$$861_tooltip$$48$$, "itemId", $event$$808_isSelected$$1_itemId$$3$$), this.dispatchEvent($evt$$66_i$$861_tooltip$$48$$), (0,D.$JSCompiler_StaticMethods_highlightMarker$$)(this, $drawable$$11$$))
    }
  }
};
D.$DvtTimelineOverview$$.prototype.$HandleShapeMouseOut$ = function $$DvtTimelineOverview$$$$$HandleShapeMouseOut$$($drawable$$12_event$$809$$) {
  $drawable$$12_event$$809$$ = D.$DvtTimelineOverview$$.$superclass$.$HandleShapeMouseOut$.call(this, $drawable$$12_event$$809$$);
  if($drawable$$12_event$$809$$ != D.$JSCompiler_alias_NULL$$ && !(0,D.$JSCompiler_StaticMethods_isMovable$$)($drawable$$12_event$$809$$)) {
    this.$getCtx$().$getTooltipManager$().$hideTooltip$();
    var $isSelected$$2_itemId$$4$$ = D.$JSCompiler_alias_FALSE$$;
    if(this.$_selectedMarkers$ != D.$JSCompiler_alias_NULL$$) {
      for(var $evt$$67_i$$862$$ = 0;$evt$$67_i$$862$$ < this.$_selectedMarkers$.length;$evt$$67_i$$862$$++) {
        if($drawable$$12_event$$809$$ == this.$_selectedMarkers$[$evt$$67_i$$862$$]) {
          $isSelected$$2_itemId$$4$$ = D.$JSCompiler_alias_TRUE$$;
          break
        }
      }
    }
    $isSelected$$2_itemId$$4$$ || ($isSelected$$2_itemId$$4$$ = this.$getItemId$($drawable$$12_event$$809$$), $evt$$67_i$$862$$ = new D.$DvtTimelineOverviewEvent$$("unhighlight"), (0,D.$JSCompiler_StaticMethods_addParam$$)($evt$$67_i$$862$$, "itemId", $isSelected$$2_itemId$$4$$), this.dispatchEvent($evt$$67_i$$862$$), (0,D.$JSCompiler_StaticMethods_unhighlightMarker$$)(this, $drawable$$12_event$$809$$))
  }
};
D.$DvtTimelineOverview$$.prototype.$HandleShapeClick$ = function $$DvtTimelineOverview$$$$$HandleShapeClick$$($event$$810_isMultiSelect$$inline_8974_slidingWindow$$inline_8977_time$$inline_8975$$, $drawable$$13_newPos$$inline_8978_pageX$$14$$, $evt$$inline_8976_itemId$$inline_11577_pageY$$14$$) {
  $drawable$$13_newPos$$inline_8978_pageX$$14$$ = D.$DvtTimelineOverview$$.$superclass$.$HandleShapeClick$.call(this, $event$$810_isMultiSelect$$inline_8974_slidingWindow$$inline_8977_time$$inline_8975$$, $drawable$$13_newPos$$inline_8978_pageX$$14$$, $evt$$inline_8976_itemId$$inline_11577_pageY$$14$$);
  if($drawable$$13_newPos$$inline_8978_pageX$$14$$ != D.$JSCompiler_alias_NULL$$ && ($event$$810_isMultiSelect$$inline_8974_slidingWindow$$inline_8977_time$$inline_8975$$ = $event$$810_isMultiSelect$$inline_8974_slidingWindow$$inline_8977_time$$inline_8975$$.ctrlKey || $event$$810_isMultiSelect$$inline_8974_slidingWindow$$inline_8977_time$$inline_8975$$.shiftKey || (0,D.$DvtAgent$isTouchDevice$$)(), "none" != this.$_selectionMode$)) {
    $evt$$inline_8976_itemId$$inline_11577_pageY$$14$$ = this.$getItemId$($drawable$$13_newPos$$inline_8978_pageX$$14$$);
    var $evt$$inline_11578$$ = new D.$DvtTimelineOverviewEvent$$("selection");
    (0,D.$JSCompiler_StaticMethods_addParam$$)($evt$$inline_11578$$, "itemId", $evt$$inline_8976_itemId$$inline_11577_pageY$$14$$);
    (0,D.$JSCompiler_StaticMethods_addParam$$)($evt$$inline_11578$$, "multiSelect", $event$$810_isMultiSelect$$inline_8974_slidingWindow$$inline_8977_time$$inline_8975$$);
    this.dispatchEvent($evt$$inline_11578$$);
    $event$$810_isMultiSelect$$inline_8974_slidingWindow$$inline_8977_time$$inline_8975$$ = $drawable$$13_newPos$$inline_8978_pageX$$14$$.$_node$.getTime();
    $event$$810_isMultiSelect$$inline_8974_slidingWindow$$inline_8977_time$$inline_8975$$ != D.$JSCompiler_alias_NULL$$ && ($evt$$inline_8976_itemId$$inline_11577_pageY$$14$$ = new D.$DvtTimelineOverviewEvent$$("scrollTime"), $evt$$inline_8976_itemId$$inline_11577_pageY$$14$$.setTime($event$$810_isMultiSelect$$inline_8974_slidingWindow$$inline_8977_time$$inline_8975$$), this.dispatchEvent($evt$$inline_8976_itemId$$inline_11577_pageY$$14$$), $event$$810_isMultiSelect$$inline_8974_slidingWindow$$inline_8977_time$$inline_8975$$ = 
    this.$getChildAt$(1), $drawable$$13_newPos$$inline_8978_pageX$$14$$ = this.$isVertical$() ? this.$getX$($drawable$$13_newPos$$inline_8978_pageX$$14$$) - $event$$810_isMultiSelect$$inline_8974_slidingWindow$$inline_8977_time$$inline_8975$$.getHeight() / 2 : this.$getX$($drawable$$13_newPos$$inline_8978_pageX$$14$$) - $event$$810_isMultiSelect$$inline_8974_slidingWindow$$inline_8977_time$$inline_8975$$.getWidth() / 2, (0,D.$JSCompiler_StaticMethods_animateSlidingWindow$$)(this, $drawable$$13_newPos$$inline_8978_pageX$$14$$))
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
      var $glowColor_glowStroke_width$$inline_8984$$ = this.$getStyle$($state$$101$$, "gc");
      $glowColor_glowStroke_width$$inline_8984$$ != D.$JSCompiler_alias_NULL$$ && "none" != $glowColor_glowStroke_width$$inline_8984$$ && ($requiresGlowMarker$$ = D.$JSCompiler_alias_TRUE$$)
    }
    var $borderMarker$$ = $drawable$$25$$.$_borderMarker$, $glowMarker_glowOffset$$ = $drawable$$25$$.$_glowMarker$;
    !$borderWidth$$19_requiresBorderMarker$$ && $borderMarker$$ != D.$JSCompiler_alias_NULL$$ ? (this.removeChild($borderMarker$$), $drawable$$25$$.$_borderMarker$ = D.$JSCompiler_alias_NULL$$, $glowMarker_glowOffset$$ != D.$JSCompiler_alias_NULL$$ && (this.removeChild($glowMarker_glowOffset$$), $drawable$$25$$.$_glowMarker$ = D.$JSCompiler_alias_NULL$$)) : !$requiresGlowMarker$$ && $glowMarker_glowOffset$$ != D.$JSCompiler_alias_NULL$$ && (this.removeChild($glowMarker_glowOffset$$), $drawable$$25$$.$_glowMarker$ = 
    D.$JSCompiler_alias_NULL$$);
    var $borderColor$$inline_8983_id$$314_markerType$$2$$ = $drawable$$25$$.$getType$();
    if($borderWidth$$19_requiresBorderMarker$$) {
      var $borderWidth$$19_requiresBorderMarker$$ = (0,window.parseInt)(this.$getStyle$($state$$101$$, "bw"), 10), $borderOffset$$1$$ = (0,window.parseInt)(this.$getStyle$($state$$101$$, "bof"), 10);
      if($borderMarker$$ == D.$JSCompiler_alias_NULL$$) {
        if("circle" == $borderColor$$inline_8983_id$$314_markerType$$2$$) {
          this.$isFlashEnvironment$() && ($borderOffset$$1$$ = 0);
          var $width$$172$$ = ($drawable$$25$$.$getDimensions$().$w$ + 2 * $borderOffset$$1$$) * $drawable$$25$$.$getScaleX$(), $height$$155$$ = ($drawable$$25$$.$getDimensions$().$h$ + 2 * $borderOffset$$1$$) * $drawable$$25$$.$getScaleY$(), $cx$$66$$ = this.$getX$($drawable$$25$$) - $borderOffset$$1$$ + $width$$172$$ / 2, $cy$$67$$ = this.$getY$($drawable$$25$$) - $borderOffset$$1$$ + $height$$155$$ / 2
        }else {
          this.$isVertical$() ? ($width$$172$$ = ($drawable$$25$$.$getDimensions$().$w$ + ($borderWidth$$19_requiresBorderMarker$$ + 1)) * $drawable$$25$$.$getScaleX$(), $height$$155$$ = ($drawable$$25$$.$getDimensions$().$h$ + ($borderWidth$$19_requiresBorderMarker$$ + 1)) * $drawable$$25$$.$getScaleY$(), $cx$$66$$ = this.$getY$($drawable$$25$$) - ($borderWidth$$19_requiresBorderMarker$$ + 1) / 2 + $width$$172$$ / 2, $cy$$67$$ = this.$getX$($drawable$$25$$) - ($borderWidth$$19_requiresBorderMarker$$ + 
          1) / 2 + $height$$155$$ / 2) : ($width$$172$$ = ($drawable$$25$$.$getDimensions$().$w$ + 2 * $borderOffset$$1$$) * $drawable$$25$$.$getScaleX$(), $height$$155$$ = ($drawable$$25$$.$getDimensions$().$h$ + 2 * $borderOffset$$1$$) * $drawable$$25$$.$getScaleY$(), $cx$$66$$ = this.$getX$($drawable$$25$$) - $borderOffset$$1$$ + $width$$172$$ / 2, $cy$$67$$ = this.$getY$($drawable$$25$$) - $borderOffset$$1$$ + $height$$155$$ / 2)
        }
        $borderMarker$$ = new D.$DvtSimpleMarker$$(this.$getCtx$(), $borderColor$$inline_8983_id$$314_markerType$$2$$, D.$JSCompiler_alias_NULL$$, $cx$$66$$, $cy$$67$$, $width$$172$$, $height$$155$$, D.$JSCompiler_alias_NULL$$, $drawable$$25$$.getId() + "_border");
        this.$addChildAt$($borderMarker$$, this.$getChildIndex$($drawable$$25$$));
        $drawable$$25$$.$_borderMarker$ = $borderMarker$$;
        $borderMarker$$.$setFill$(this.$_markerBorderFill$)
      }
      $borderColor$$62_stroke$$119$$ = new D.$DvtSolidStroke$$($borderColor$$62_stroke$$119$$, this.$getStyle$($state$$101$$, "bo"), $borderWidth$$19_requiresBorderMarker$$);
      $borderMarker$$.$setStroke$($borderColor$$62_stroke$$119$$);
      (this.$isVertical$() || "rectangle" == $borderColor$$inline_8983_id$$314_markerType$$2$$ || "diamond" == $borderColor$$inline_8983_id$$314_markerType$$2$$ || "triangleUp" == $borderColor$$inline_8983_id$$314_markerType$$2$$ || "triangleDown" == $borderColor$$inline_8983_id$$314_markerType$$2$$ || "plus" == $borderColor$$inline_8983_id$$314_markerType$$2$$) && "false" != this.$_defaultMarkerStyles$.$pixelHinting$ && (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)($borderMarker$$);
      $requiresGlowMarker$$ && ($glowMarker_glowOffset$$ == D.$JSCompiler_alias_NULL$$ && ($glowMarker_glowOffset$$ = $borderOffset$$1$$ - $borderWidth$$19_requiresBorderMarker$$, "circle" == $borderColor$$inline_8983_id$$314_markerType$$2$$ ? (this.$isFlashEnvironment$() && ($glowMarker_glowOffset$$ = 0), $width$$172$$ = ($drawable$$25$$.$getDimensions$().$w$ + 2 * $glowMarker_glowOffset$$) * $drawable$$25$$.$getScaleX$(), $height$$155$$ = ($drawable$$25$$.$getDimensions$().$h$ + 2 * $glowMarker_glowOffset$$) * 
      $drawable$$25$$.$getScaleY$(), $cx$$66$$ = this.$getX$($drawable$$25$$) - $glowMarker_glowOffset$$ + $width$$172$$ / 2, $cy$$67$$ = this.$getY$($drawable$$25$$) - $glowMarker_glowOffset$$ + $height$$155$$ / 2) : this.$isVertical$() ? ($width$$172$$ = ($drawable$$25$$.$getDimensions$().$w$ + 3) * $drawable$$25$$.$getScaleX$(), $height$$155$$ = ($drawable$$25$$.$getDimensions$().$h$ + 3) * $drawable$$25$$.$getScaleY$(), $cx$$66$$ = this.$getY$($drawable$$25$$) + $width$$172$$ / 2, $cy$$67$$ = 
      this.$getX$($drawable$$25$$) - 1 + $height$$155$$ / 2) : ($width$$172$$ = ($drawable$$25$$.$getDimensions$().$w$ + 2 * $glowMarker_glowOffset$$) * $drawable$$25$$.$getScaleX$(), $height$$155$$ = ($drawable$$25$$.$getDimensions$().$h$ + 2 * $glowMarker_glowOffset$$) * $drawable$$25$$.$getScaleY$(), $cx$$66$$ = this.$getX$($drawable$$25$$) - $glowMarker_glowOffset$$ + $width$$172$$ / 2, $cy$$67$$ = this.$getY$($drawable$$25$$) - $glowMarker_glowOffset$$ + $height$$155$$ / 2), $glowMarker_glowOffset$$ = 
      new D.$DvtSimpleMarker$$(this.$getCtx$(), $borderColor$$inline_8983_id$$314_markerType$$2$$, D.$JSCompiler_alias_NULL$$, $cx$$66$$, $cy$$67$$, $width$$172$$, $height$$155$$, D.$JSCompiler_alias_NULL$$, $drawable$$25$$.getId() + "_glow"), this.$addChildAt$($glowMarker_glowOffset$$, this.$getChildIndex$($borderMarker$$)), $drawable$$25$$.$_glowMarker$ = $glowMarker_glowOffset$$, $glowMarker_glowOffset$$.$setFill$(this.$_markerBorderFill$)), $glowColor_glowStroke_width$$inline_8984$$ = new D.$DvtSolidStroke$$($glowColor_glowStroke_width$$inline_8984$$, 
      this.$getStyle$($state$$101$$, "go"), 4), $glowMarker_glowOffset$$.$setStroke$($glowColor_glowStroke_width$$inline_8984$$), (this.$isVertical$() || "rectangle" == $borderColor$$inline_8983_id$$314_markerType$$2$$ || "diamond" == $borderColor$$inline_8983_id$$314_markerType$$2$$ || "triangleUp" == $borderColor$$inline_8983_id$$314_markerType$$2$$ || "triangleDown" == $borderColor$$inline_8983_id$$314_markerType$$2$$ || "plus" == $borderColor$$inline_8983_id$$314_markerType$$2$$) && "false" != 
      this.$_defaultMarkerStyles$.$pixelHinting$ && (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)($glowMarker_glowOffset$$))
    }
  }else {
    if(($borderColor$$inline_8983_id$$314_markerType$$2$$ = $drawable$$25$$.getId()) && "_drn_" == $borderColor$$inline_8983_id$$314_markerType$$2$$.substring(0, 5)) {
      $borderColor$$inline_8983_id$$314_markerType$$2$$ = this.$getStyle$($state$$101$$, "dbc"), $borderColor$$inline_8983_id$$314_markerType$$2$$ == D.$JSCompiler_alias_NULL$$ && ($borderColor$$inline_8983_id$$314_markerType$$2$$ = "#000000"), $glowColor_glowStroke_width$$inline_8984$$ = (0,window.parseInt)(this.$getStyle$($state$$101$$, "dbw"), 10), $drawable$$25$$.$setStroke$(new D.$DvtSolidStroke$$($borderColor$$inline_8983_id$$314_markerType$$2$$, 1, $glowColor_glowStroke_width$$inline_8984$$))
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
  var $childNodes$$24_rootNode$$4$$ = this.$_parser$.parse($ret$$96_xmlString$$9$$);
  $ret$$96_xmlString$$9$$ = this.$ParseRootAttributes$($childNodes$$24_rootNode$$4$$);
  var $childNodes$$24_rootNode$$4$$ = $childNodes$$24_rootNode$$4$$.$getChildNodes$(), $JSCompiler_inline_result$$68_xmlNode$$inline_9006$$;
  if($JSCompiler_inline_result$$68_xmlNode$$inline_9006$$ = $childNodes$$24_rootNode$$4$$[0]) {
    var $ret$$inline_9007$$ = {};
    $ret$$inline_9007$$.width = $JSCompiler_inline_result$$68_xmlNode$$inline_9006$$.$getAttr$("width");
    $ret$$inline_9007$$.height = $JSCompiler_inline_result$$68_xmlNode$$inline_9006$$.$getAttr$("height");
    $ret$$inline_9007$$.$ticks$ = $JSCompiler_inline_result$$68_xmlNode$$inline_9006$$.$getChildNodes$();
    $JSCompiler_inline_result$$68_xmlNode$$inline_9006$$ = $ret$$inline_9007$$
  }else {
    $JSCompiler_inline_result$$68_xmlNode$$inline_9006$$ = D.$JSCompiler_alias_NULL$$
  }
  $ret$$96_xmlString$$9$$.$timeAxisInfo$ = $JSCompiler_inline_result$$68_xmlNode$$inline_9006$$;
  $ret$$96_xmlString$$9$$.$markers$ = this.$_parseDataNode$($childNodes$$24_rootNode$$4$$[1], $ret$$96_xmlString$$9$$.$defaultMarkerStyles$);
  2 < $childNodes$$24_rootNode$$4$$.length && ($ret$$96_xmlString$$9$$.$formattedTimeRanges$ = !$childNodes$$24_rootNode$$4$$[2] ? D.$JSCompiler_alias_NULL$$ : $childNodes$$24_rootNode$$4$$[2].$getChildNodes$());
  return $ret$$96_xmlString$$9$$
};
D.$JSCompiler_prototypeAlias$$.$ParseRootAttributes$ = function $$JSCompiler_prototypeAlias$$$$ParseRootAttributes$$($xmlNode$$71$$) {
  var $ret$$97$$ = {};
  $ret$$97$$.start = (0,window.parseInt)($xmlNode$$71$$.$getAttr$("start"));
  $ret$$97$$.end = (0,window.parseInt)($xmlNode$$71$$.$getAttr$("end"));
  $ret$$97$$.width = (0,window.parseInt)($xmlNode$$71$$.$getAttr$("width"));
  $ret$$97$$.$renderStart$ = (0,window.parseInt)($xmlNode$$71$$.$getAttr$("renstart"));
  $ret$$97$$.currentTime = (0,window.parseInt)($xmlNode$$71$$.$getAttr$("ocd"));
  $ret$$97$$.orientation = $xmlNode$$71$$.$getAttr$("orn");
  $ret$$97$$.$overviewPosition$ = $xmlNode$$71$$.$getAttr$("ovp");
  $ret$$97$$.$selectionMode$ = $xmlNode$$71$$.$getAttr$("selmode");
  $ret$$97$$.$isRtl$ = $xmlNode$$71$$.$getAttr$("rtl");
  $ret$$97$$.borderTopStyle = $xmlNode$$71$$.$getAttr$("_bts");
  $ret$$97$$.borderTopColor = $xmlNode$$71$$.$getAttr$("_btc");
  $ret$$97$$.$seriesIds$ = $xmlNode$$71$$.$getAttr$("sid");
  $ret$$97$$.$animationOnClick$ = $xmlNode$$71$$.$getAttr$("_aoc");
  var $borderStyles_defaultMarkerStyles$$ = {};
  $borderStyles_defaultMarkerStyles$$.shape = $xmlNode$$71$$.$getAttr$("_ds");
  $borderStyles_defaultMarkerStyles$$.$scaleX$ = $xmlNode$$71$$.$getAttr$("_dsx");
  $borderStyles_defaultMarkerStyles$$.$scaleY$ = $xmlNode$$71$$.$getAttr$("_dsy");
  $borderStyles_defaultMarkerStyles$$.opacity = $xmlNode$$71$$.$getAttr$("_do");
  $borderStyles_defaultMarkerStyles$$.color = $xmlNode$$71$$.$getAttr$("_fc");
  $borderStyles_defaultMarkerStyles$$.$pixelHinting$ = $xmlNode$$71$$.$getAttr$("_ph");
  $ret$$97$$.$defaultMarkerStyles$ = $borderStyles_defaultMarkerStyles$$;
  $ret$$97$$.$handleFillColor$ = $xmlNode$$71$$.$getAttr$("_hfc");
  $ret$$97$$.$handleTextureColor$ = $xmlNode$$71$$.$getAttr$("_htc");
  $ret$$97$$.$handleBackgroundImage$ = $xmlNode$$71$$.$getAttr$("_hbi");
  $ret$$97$$.$handleWidth$ = $xmlNode$$71$$.$getAttr$("_hw");
  $ret$$97$$.$handleHeight$ = $xmlNode$$71$$.$getAttr$("_hh");
  $ret$$97$$.$windowBackgroundColor$ = $xmlNode$$71$$.$getAttr$("_wbc");
  $ret$$97$$.$windowBorderTopStyle$ = $xmlNode$$71$$.$getAttr$("_wbts");
  $ret$$97$$.$windowBorderRightStyle$ = $xmlNode$$71$$.$getAttr$("_wbrs");
  $ret$$97$$.$windowBorderBottomStyle$ = $xmlNode$$71$$.$getAttr$("_wbbs");
  $ret$$97$$.$windowBorderLeftStyle$ = $xmlNode$$71$$.$getAttr$("_wbls");
  $ret$$97$$.$windowBorderTopColor$ = $xmlNode$$71$$.$getAttr$("_wbtc");
  $ret$$97$$.$windowBorderRightColor$ = $xmlNode$$71$$.$getAttr$("_wbrc");
  $ret$$97$$.$windowBorderBottomColor$ = $xmlNode$$71$$.$getAttr$("_wbbc");
  $ret$$97$$.$windowBorderLeftColor$ = $xmlNode$$71$$.$getAttr$("_wblc");
  $ret$$97$$.$overviewBackgroundColor$ = $xmlNode$$71$$.$getAttr$("_obc");
  $ret$$97$$.$currentTimeIndicatorColor$ = $xmlNode$$71$$.$getAttr$("_ctic");
  $ret$$97$$.$timeIndicatorColor$ = $xmlNode$$71$$.$getAttr$("_tic");
  $ret$$97$$.$timeAxisBarColor$ = $xmlNode$$71$$.$getAttr$("_tabc");
  $ret$$97$$.$timeAxisBarOpacity$ = $xmlNode$$71$$.$getAttr$("_tabo");
  $ret$$97$$.$labelStyle$ = $xmlNode$$71$$.$getAttr$("_ls");
  $borderStyles_defaultMarkerStyles$$ = {};
  $borderStyles_defaultMarkerStyles$$._bs = $xmlNode$$71$$.$getAttr$("_bs");
  $borderStyles_defaultMarkerStyles$$._bc = $xmlNode$$71$$.$getAttr$("_bc");
  $borderStyles_defaultMarkerStyles$$._bw = $xmlNode$$71$$.$getAttr$("_bw");
  $borderStyles_defaultMarkerStyles$$._bof = $xmlNode$$71$$.$getAttr$("_bof");
  $borderStyles_defaultMarkerStyles$$._bo = $xmlNode$$71$$.$getAttr$("_bo");
  $borderStyles_defaultMarkerStyles$$._gc = $xmlNode$$71$$.$getAttr$("_gc");
  $borderStyles_defaultMarkerStyles$$._go = $xmlNode$$71$$.$getAttr$("_go");
  $borderStyles_defaultMarkerStyles$$._dbs = $xmlNode$$71$$.$getAttr$("_dbs");
  $borderStyles_defaultMarkerStyles$$._dbc = $xmlNode$$71$$.$getAttr$("_dbc");
  $borderStyles_defaultMarkerStyles$$._dbw = $xmlNode$$71$$.$getAttr$("_dbw");
  $borderStyles_defaultMarkerStyles$$._hbs = $xmlNode$$71$$.$getAttr$("_hbs");
  $borderStyles_defaultMarkerStyles$$._hbc = $xmlNode$$71$$.$getAttr$("_hbc");
  $borderStyles_defaultMarkerStyles$$._hbw = $xmlNode$$71$$.$getAttr$("_hbw");
  $borderStyles_defaultMarkerStyles$$._hbof = $xmlNode$$71$$.$getAttr$("_hbof");
  $borderStyles_defaultMarkerStyles$$._hbo = $xmlNode$$71$$.$getAttr$("_hbo");
  $borderStyles_defaultMarkerStyles$$._hgc = $xmlNode$$71$$.$getAttr$("_hgc");
  $borderStyles_defaultMarkerStyles$$._hgo = $xmlNode$$71$$.$getAttr$("_hgo");
  $borderStyles_defaultMarkerStyles$$._hdbs = $xmlNode$$71$$.$getAttr$("_hdbs");
  $borderStyles_defaultMarkerStyles$$._hdbc = $xmlNode$$71$$.$getAttr$("_hdbc");
  $borderStyles_defaultMarkerStyles$$._hdbw = $xmlNode$$71$$.$getAttr$("_hdbw");
  $borderStyles_defaultMarkerStyles$$._sbs = $xmlNode$$71$$.$getAttr$("_sbs");
  $borderStyles_defaultMarkerStyles$$._sbc = $xmlNode$$71$$.$getAttr$("_sbc");
  $borderStyles_defaultMarkerStyles$$._sbw = $xmlNode$$71$$.$getAttr$("_sbw");
  $borderStyles_defaultMarkerStyles$$._sbof = $xmlNode$$71$$.$getAttr$("_sbof");
  $borderStyles_defaultMarkerStyles$$._sbo = $xmlNode$$71$$.$getAttr$("_sbo");
  $borderStyles_defaultMarkerStyles$$._sgc = $xmlNode$$71$$.$getAttr$("_sgc");
  $borderStyles_defaultMarkerStyles$$._sgo = $xmlNode$$71$$.$getAttr$("_sgo");
  $borderStyles_defaultMarkerStyles$$._sdbs = $xmlNode$$71$$.$getAttr$("_sdbs");
  $borderStyles_defaultMarkerStyles$$._sdbc = $xmlNode$$71$$.$getAttr$("_sdbc");
  $borderStyles_defaultMarkerStyles$$._sdbw = $xmlNode$$71$$.$getAttr$("_sdbw");
  $borderStyles_defaultMarkerStyles$$._asbs = $xmlNode$$71$$.$getAttr$("_asbs");
  $borderStyles_defaultMarkerStyles$$._asbc = $xmlNode$$71$$.$getAttr$("_asbc");
  $borderStyles_defaultMarkerStyles$$._asbw = $xmlNode$$71$$.$getAttr$("_asbw");
  $borderStyles_defaultMarkerStyles$$._asbof = $xmlNode$$71$$.$getAttr$("_asbof");
  $borderStyles_defaultMarkerStyles$$._asbo = $xmlNode$$71$$.$getAttr$("_asbo");
  $borderStyles_defaultMarkerStyles$$._asgc = $xmlNode$$71$$.$getAttr$("_asgc");
  $borderStyles_defaultMarkerStyles$$._asgo = $xmlNode$$71$$.$getAttr$("_asgo");
  $borderStyles_defaultMarkerStyles$$._asdbs = $xmlNode$$71$$.$getAttr$("_asdbs");
  $borderStyles_defaultMarkerStyles$$._asdbc = $xmlNode$$71$$.$getAttr$("_asdbc");
  $borderStyles_defaultMarkerStyles$$._asdbw = $xmlNode$$71$$.$getAttr$("_asdbw");
  $ret$$97$$.$borderStyles$ = $borderStyles_defaultMarkerStyles$$;
  return $ret$$97$$
};
D.$JSCompiler_prototypeAlias$$.$_parseDataNode$ = function $$JSCompiler_prototypeAlias$$$$_parseDataNode$$($xmlNode$$72$$, $defaultMarkerStyles$$1$$) {
  if(!$xmlNode$$72$$) {
    return D.$JSCompiler_alias_NULL$$
  }
  for(var $treeNodes$$ = [], $markers$$12$$ = $xmlNode$$72$$.$getChildNodes$(), $i$$872$$ = 0;$i$$872$$ < $markers$$12$$.length;$i$$872$$++) {
    var $props$$14_treeNode$$1$$ = this.$ParseNodeAttributes$($markers$$12$$[$i$$872$$], $defaultMarkerStyles$$1$$), $props$$14_treeNode$$1$$ = new D.$DvtTimelineOverviewNode$$(this.$_view$, $props$$14_treeNode$$1$$);
    $treeNodes$$.push($props$$14_treeNode$$1$$)
  }
  return $treeNodes$$
};
D.$JSCompiler_prototypeAlias$$.$ParseNodeAttributes$ = function $$JSCompiler_prototypeAlias$$$$ParseNodeAttributes$$($xmlNode$$73$$, $defaultMarkerStyles$$2$$) {
  var $ret$$98$$ = {}, $useSkinningDefaults$$ = "true" == $xmlNode$$73$$.$getAttr$("_sd");
  $ret$$98$$.id = $xmlNode$$73$$.$getAttr$("tid");
  $ret$$98$$.$rowKey$ = $xmlNode$$73$$.$getAttr$("rk");
  $ret$$98$$.time = $xmlNode$$73$$.$getAttr$("t");
  $ret$$98$$.$endTime$ = $xmlNode$$73$$.$getAttr$("et");
  $ret$$98$$.shape = $xmlNode$$73$$.$getAttr$("s");
  $useSkinningDefaults$$ && $ret$$98$$.shape == D.$JSCompiler_alias_NULL$$ && ($ret$$98$$.shape = $defaultMarkerStyles$$2$$.shape);
  $ret$$98$$.$desc$ = $xmlNode$$73$$.$getAttr$("d");
  $ret$$98$$.color = $xmlNode$$73$$.$getAttr$("c");
  $ret$$98$$.$durationFillColor$ = $xmlNode$$73$$.$getAttr$("dfc");
  $useSkinningDefaults$$ && $ret$$98$$.color == D.$JSCompiler_alias_NULL$$ && ($ret$$98$$.color = $defaultMarkerStyles$$2$$.color);
  $ret$$98$$.$scaleX$ = $xmlNode$$73$$.$getAttr$("sx");
  $useSkinningDefaults$$ && $ret$$98$$.$scaleX$ == D.$JSCompiler_alias_NULL$$ && ($ret$$98$$.$scaleX$ = $defaultMarkerStyles$$2$$.$scaleX$);
  $ret$$98$$.$scaleY$ = $xmlNode$$73$$.$getAttr$("sy");
  $useSkinningDefaults$$ && $ret$$98$$.$scaleY$ == D.$JSCompiler_alias_NULL$$ && ($ret$$98$$.$scaleY$ = $defaultMarkerStyles$$2$$.$scaleY$);
  $ret$$98$$.$gradient$ = $xmlNode$$73$$.$getAttr$("g");
  $ret$$98$$.opacity = $xmlNode$$73$$.$getAttr$("o");
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
D.$DvtTimelineOverviewEvent$$ = function $$DvtTimelineOverviewEvent$$$($type$$254$$) {
  this.Init("timeline");
  this.$_subtype$ = $type$$254$$
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
D.$DvtTimelineOverviewAutomation$$.prototype.$GetSubIdForDomElement$ = function $$DvtTimelineOverviewAutomation$$$$$GetSubIdForDomElement$$($arr$$17_displayable$$114_prev$$4$$) {
  var $id$$315_seriesIds$$1_seriesIndex$$124$$ = $arr$$17_displayable$$114_prev$$4$$.getId();
  if($arr$$17_displayable$$114_prev$$4$$ instanceof D.$DvtSimpleMarker$$) {
    $arr$$17_displayable$$114_prev$$4$$ = $id$$315_seriesIds$$1_seriesIndex$$124$$.split(":");
    if(4 != $arr$$17_displayable$$114_prev$$4$$.length) {
      return D.$JSCompiler_alias_NULL$$
    }
    $id$$315_seriesIds$$1_seriesIndex$$124$$ = this.$_overview$.$_seriesIds$ == D.$JSCompiler_alias_NULL$$ ? D.$JSCompiler_alias_NULL$$ : this.$_overview$.$_seriesIds$.split(" ");
    if($id$$315_seriesIds$$1_seriesIndex$$124$$ != D.$JSCompiler_alias_NULL$$ && ($id$$315_seriesIds$$1_seriesIndex$$124$$ = D.$DvtArrayUtils$$.$getIndex$($id$$315_seriesIds$$1_seriesIndex$$124$$, $arr$$17_displayable$$114_prev$$4$$[1]), -1 < $id$$315_seriesIds$$1_seriesIndex$$124$$)) {
      return"marker[" + $id$$315_seriesIds$$1_seriesIndex$$124$$ + "][" + $arr$$17_displayable$$114_prev$$4$$[2] + "]"
    }
  }else {
    if("window" == $id$$315_seriesIds$$1_seriesIndex$$124$$) {
      return"range_window"
    }
    if("lh" == $id$$315_seriesIds$$1_seriesIndex$$124$$ || "lhb" == $id$$315_seriesIds$$1_seriesIndex$$124$$ || "lbgrh" == $id$$315_seriesIds$$1_seriesIndex$$124$$) {
      return"range_start_handle"
    }
    if("rh" == $id$$315_seriesIds$$1_seriesIndex$$124$$ || "rhb" == $id$$315_seriesIds$$1_seriesIndex$$124$$ || "rbgrh" == $id$$315_seriesIds$$1_seriesIndex$$124$$) {
      return"range_end_handle"
    }
    if("grpy" == $id$$315_seriesIds$$1_seriesIndex$$124$$) {
      return $arr$$17_displayable$$114_prev$$4$$ = $arr$$17_displayable$$114_prev$$4$$.getParent().$getChildBefore$($arr$$17_displayable$$114_prev$$4$$), this.$GetSubIdForDomElement$($arr$$17_displayable$$114_prev$$4$$)
    }
  }
  return D.$JSCompiler_alias_NULL$$
};
D.$DvtTimelineOverviewAutomation$$.prototype.$getDomElementForSubId$ = function $$DvtTimelineOverviewAutomation$$$$$getDomElementForSubId$$($markers$$inline_8998_subId$$33$$) {
  for(var $array$$inline_8991_marker$$32_markerId$$inline_9001$$ = $markers$$inline_8998_subId$$33$$.split("["), $i$$inline_9002_len$$inline_8992_seriesIds$$2$$ = $array$$inline_8991_marker$$32_markerId$$inline_9001$$.length, $i$$inline_8993_index$$252_marker$$inline_9003$$ = 1;$i$$inline_8993_index$$252_marker$$inline_9003$$ < $i$$inline_9002_len$$inline_8992_seriesIds$$2$$;$i$$inline_8993_index$$252_marker$$inline_9003$$++) {
    var $elem$$inline_8994_id$$inline_9004_tempId$$inline_8995$$ = $array$$inline_8991_marker$$32_markerId$$inline_9001$$[$i$$inline_8993_index$$252_marker$$inline_9003$$], $elem$$inline_8994_id$$inline_9004_tempId$$inline_8995$$ = $elem$$inline_8994_id$$inline_9004_tempId$$inline_8995$$.substr(0, $elem$$inline_8994_id$$inline_9004_tempId$$inline_8995$$.length - 1), $tempIdAsNumber$$inline_8996$$ = (0,window.parseFloat)($elem$$inline_8994_id$$inline_9004_tempId$$inline_8995$$), $elem$$inline_8994_id$$inline_9004_tempId$$inline_8995$$ = 
    (0,window.isNaN)($tempIdAsNumber$$inline_8996$$) ? $elem$$inline_8994_id$$inline_9004_tempId$$inline_8995$$ : $tempIdAsNumber$$inline_8996$$;
    $array$$inline_8991_marker$$32_markerId$$inline_9001$$[$i$$inline_8993_index$$252_marker$$inline_9003$$] = $elem$$inline_8994_id$$inline_9004_tempId$$inline_8995$$
  }
  if($array$$inline_8991_marker$$32_markerId$$inline_9001$$ && 3 == $array$$inline_8991_marker$$32_markerId$$inline_9001$$.length && "marker" == $array$$inline_8991_marker$$32_markerId$$inline_9001$$[0]) {
    if($i$$inline_9002_len$$inline_8992_seriesIds$$2$$ = this.$_overview$.$_seriesIds$ == D.$JSCompiler_alias_NULL$$ ? D.$JSCompiler_alias_NULL$$ : this.$_overview$.$_seriesIds$.split(" "), $i$$inline_9002_len$$inline_8992_seriesIds$$2$$ != D.$JSCompiler_alias_NULL$$ && ($i$$inline_8993_index$$252_marker$$inline_9003$$ = (0,window.parseInt)($array$$inline_8991_marker$$32_markerId$$inline_9001$$[1], 10), -1 < $i$$inline_8993_index$$252_marker$$inline_9003$$ && $i$$inline_8993_index$$252_marker$$inline_9003$$ < 
    $i$$inline_9002_len$$inline_8992_seriesIds$$2$$.length)) {
      a: {
        $markers$$inline_8998_subId$$33$$ = this.$_overview$.$_markers$;
        $array$$inline_8991_marker$$32_markerId$$inline_9001$$ = "tl1:" + $i$$inline_9002_len$$inline_8992_seriesIds$$2$$[$i$$inline_8993_index$$252_marker$$inline_9003$$] + ":" + $array$$inline_8991_marker$$32_markerId$$inline_9001$$[2] + ":";
        for($i$$inline_9002_len$$inline_8992_seriesIds$$2$$ = 0;$i$$inline_9002_len$$inline_8992_seriesIds$$2$$ < $markers$$inline_8998_subId$$33$$.length;$i$$inline_9002_len$$inline_8992_seriesIds$$2$$++) {
          if($i$$inline_8993_index$$252_marker$$inline_9003$$ = $markers$$inline_8998_subId$$33$$[$i$$inline_9002_len$$inline_8992_seriesIds$$2$$], $elem$$inline_8994_id$$inline_9004_tempId$$inline_8995$$ = $i$$inline_8993_index$$252_marker$$inline_9003$$.getId(), $elem$$inline_8994_id$$inline_9004_tempId$$inline_8995$$ != D.$JSCompiler_alias_NULL$$ && 0 == $elem$$inline_8994_id$$inline_9004_tempId$$inline_8995$$.indexOf($array$$inline_8991_marker$$32_markerId$$inline_9001$$)) {
            $array$$inline_8991_marker$$32_markerId$$inline_9001$$ = $i$$inline_8993_index$$252_marker$$inline_9003$$;
            break a
          }
        }
        $array$$inline_8991_marker$$32_markerId$$inline_9001$$ = D.$JSCompiler_alias_NULL$$
      }
      return $array$$inline_8991_marker$$32_markerId$$inline_9001$$ ? $array$$inline_8991_marker$$32_markerId$$inline_9001$$.$getDisplayable$().$getElem$() : D.$JSCompiler_alias_NULL$$
    }
  }else {
    if("range_window" == $markers$$inline_8998_subId$$33$$) {
      return this.$_overview$.$getChildAt$(1).$getElem$()
    }
    if("range_start_handle" == $markers$$inline_8998_subId$$33$$) {
      return this.$_overview$.$getChildAt$(this.$_overview$.$getNumChildren$() - this.$_overview$.$_lastChildIndex$).$getElem$()
    }
    if("range_end_handle" == $markers$$inline_8998_subId$$33$$) {
      return(0,D.$JSCompiler_StaticMethods_getRightHandle$$)(this.$_overview$).$getElem$()
    }
  }
  return D.$JSCompiler_alias_NULL$$
};
(0,D.$goog$exportPath_$$)("DvtTimelineOverviewAutomation.prototype.getDomElementForSubId", D.$DvtTimelineOverviewAutomation$$.prototype.$getDomElementForSubId$);

  return D;
});
/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
define(['./DvtToolkit', './DvtOverview'], function(dvt) {
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

dvt.$TimelineOverview$ = function $dvt$$TimelineOverview$$($context$$424$$, $callback$$131$$, $callbackObj$$95$$) {
  this.Init($context$$424$$, $callback$$131$$, $callbackObj$$95$$)
};
$goog$exportPath_$$("dvt.TimelineOverview", dvt.$TimelineOverview$);
dvt.$Obj$.$createSubclass$(dvt.$TimelineOverview$, dvt.$Overview$);
dvt.$TimelineOverview$.$ENABLED_STATE$ = "_";
dvt.$TimelineOverview$.$HOVER_STATE$ = "_h";
dvt.$TimelineOverview$.$SELECTED_STATE$ = "_s";
dvt.$TimelineOverview$.$ACTIVE_SELECTED_STATE$ = "_as";
dvt.$TimelineOverview$.$BORDER_STYLE$ = "bs";
dvt.$TimelineOverview$.$BORDER_COLOR$ = "bc";
dvt.$TimelineOverview$.$BORDER_WIDTH$ = "bw";
dvt.$TimelineOverview$.$DURATION_BORDER_STYLE$ = "dbs";
dvt.$TimelineOverview$.$DURATION_BORDER_COLOR$ = "dbc";
dvt.$TimelineOverview$.$DURATION_BORDER_WIDTH$ = "dbw";
dvt.$TimelineOverview$.$BORDER_OFFSET$ = "bof";
dvt.$TimelineOverview$.$BORDER_OPACITY$ = "bo";
dvt.$TimelineOverview$.$GLOW_COLOR$ = "gc";
dvt.$TimelineOverview$.$GLOW_OPACITY$ = "go";
dvt.$TimelineOverview$.$FILL_COLOR$ = "fc";
$JSCompiler_prototypeAlias$$ = dvt.$TimelineOverview$.prototype;
$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($colors$$4_context$$425$$, $callback$$132$$, $callbackObj$$96$$) {
  dvt.$TimelineOverview$.$superclass$.Init.call(this, $colors$$4_context$$425$$, $callback$$132$$, $callbackObj$$96$$);
  $colors$$4_context$$425$$ = [dvt.$ColorUtils$.$getPound$(dvt.$ColorUtils$.$getPastel$("#aadd77", 0.35)), "#aadd77", dvt.$ColorUtils$.$getPound$(dvt.$ColorUtils$.$getDarker$("#aadd77", 0.5))];
  dvt.$OverviewUtils$.$supportsTouch$() && ($colors$$4_context$$425$$ = ["#aadd77"]);
  this.$_defColors$ = $colors$$4_context$$425$$;
  this.$_markerBorderFill$ = dvt.$SolidFill$.$invisibleFill$();
  this.$_markerSize$ = 12
};
$JSCompiler_prototypeAlias$$.$getParser$ = function $$JSCompiler_prototypeAlias$$$$getParser$$() {
  return new $DvtTimelineOverviewParser$$(this)
};
$JSCompiler_prototypeAlias$$.$_applyParsedProperties$ = function $$JSCompiler_prototypeAlias$$$$_applyParsedProperties$$($_eOffset_borderOpacity_props$$13$$) {
  dvt.$TimelineOverview$.$superclass$.$_applyParsedProperties$.call(this, $_eOffset_borderOpacity_props$$13$$);
  this.$_selectionMode$ = $_eOffset_borderOpacity_props$$13$$.$selectionMode$;
  this.$_markers$ = $_eOffset_borderOpacity_props$$13$$.$markers$;
  this.$_seriesIds$ = $_eOffset_borderOpacity_props$$13$$.$seriesIds$;
  this.$_defaultMarkerStyles$ = $_eOffset_borderOpacity_props$$13$$.$defaultMarkerStyles$;
  this.$_durationColors$ = "#267DB3 #68C182 #FAD55C #ED6647 #8561C8 #6DDBDB #FFB54D #E371B2 #47BDEF #A2BF39 #A75DBA #F7F37B".split(" ");
  $_eOffset_borderOpacity_props$$13$$.$labelStyle$ && (this.$_labelStyle$ = new dvt.$CSSStyle$($_eOffset_borderOpacity_props$$13$$.$labelStyle$));
  $_eOffset_borderOpacity_props$$13$$ = "solid" == this.$getStyle$(dvt.$TimelineOverview$.$ENABLED_STATE$, dvt.$TimelineOverview$.$BORDER_STYLE$) ? parseInt(this.$getStyle$(dvt.$TimelineOverview$.$ENABLED_STATE$, dvt.$TimelineOverview$.$BORDER_OFFSET$), 10) : 1;
  var $_asOffset$$ = "solid" == this.$getStyle$(dvt.$TimelineOverview$.$ACTIVE_SELECTED_STATE$, dvt.$TimelineOverview$.$BORDER_STYLE$) ? parseInt(this.$getStyle$(dvt.$TimelineOverview$.$ACTIVE_SELECTED_STATE$, dvt.$TimelineOverview$.$BORDER_OFFSET$), 10) : 1, $_sOffset$$ = "solid" == this.$getStyle$(dvt.$TimelineOverview$.$SELECTED_STATE$, dvt.$TimelineOverview$.$BORDER_STYLE$) ? parseInt(this.$getStyle$(dvt.$TimelineOverview$.$SELECTED_STATE$, dvt.$TimelineOverview$.$BORDER_OFFSET$), 10) : 1;
  this.$_markerSpacingOffset$ = "none" != this.$_selectionMode$ ? Math.max($_asOffset$$, $_sOffset$$, $_eOffset_borderOpacity_props$$13$$, 1) / 2 + 1 : 1;
  this.$_defOpacity$ = this.$isVertical$() ? 0 : 0.75;
  this.$_defAlphas$ = [this.$_defOpacity$, this.$_defOpacity$, this.$_defOpacity$];
  this.$_radialFill$ = new dvt.$LinearGradientFill$(250, this.$_defColors$, this.$_defAlphas$);
  this.$_linearFill$ = new dvt.$LinearGradientFill$(180, this.$_defColors$, this.$_defAlphas$);
  $_eOffset_borderOpacity_props$$13$$ = this.$isVertical$() ? 0 : 1;
  this.$_border$ = new dvt.$SolidStroke$("#aadd77", $_eOffset_borderOpacity_props$$13$$)
};
$JSCompiler_prototypeAlias$$.$addLabel$ = function $$JSCompiler_prototypeAlias$$$$addLabel$$($pos$$75$$, $text$$77$$, $width$$142$$, $height$$119$$, $maxWidth$$24$$, $id$$208$$) {
  dvt.$TimelineOverview$.$superclass$.$addLabel$.call(this, $pos$$75$$, $text$$77$$, $width$$142$$, $height$$119$$, $maxWidth$$24$$, $id$$208$$, this.$_labelStyle$)
};
function $JSCompiler_StaticMethods_getDrawableById$$($JSCompiler_StaticMethods_getDrawableById$self$$, $id$$209$$) {
  for(var $drawableId$$1$$ = "_mrk_" + $id$$209$$, $durationId$$1$$ = "_drn_" + $id$$209$$, $numChildren$$15$$ = $JSCompiler_StaticMethods_getDrawableById$self$$.$getNumChildren$(), $childIndex$$8$$ = 0;$childIndex$$8$$ < $numChildren$$15$$;$childIndex$$8$$++) {
    var $drawable$$7$$ = $JSCompiler_StaticMethods_getDrawableById$self$$.$getChildAt$($childIndex$$8$$);
    if($drawable$$7$$ != $JSCompiler_alias_NULL$$ && ($drawableId$$1$$ == $drawable$$7$$.getId() || $durationId$$1$$ == $drawable$$7$$.getId())) {
      return $drawable$$7$$
    }
  }
  return $JSCompiler_alias_NULL$$
}
$JSCompiler_prototypeAlias$$.$getItemId$ = function $$JSCompiler_prototypeAlias$$$$getItemId$$($drawable$$8$$) {
  return $drawable$$8$$.getId().substr(5)
};
$JSCompiler_prototypeAlias$$.$getStyle$ = function $$JSCompiler_prototypeAlias$$$$getStyle$$($state$$98$$, $style$$104$$) {
  return this.$_borderStyles$[$state$$98$$ + $style$$104$$]
};
$JSCompiler_prototypeAlias$$.$getX$ = function $$JSCompiler_prototypeAlias$$$$getX$$($drawable$$9$$) {
  return $drawable$$9$$.$_node$ != $JSCompiler_alias_NULL$$ ? $drawable$$9$$.$_node$.$getX$() : $drawable$$9$$.$getMatrix$().$_tx$
};
$JSCompiler_prototypeAlias$$.$getY$ = function $$JSCompiler_prototypeAlias$$$$getY$$($drawable$$10$$) {
  return $drawable$$10$$.$_node$ != $JSCompiler_alias_NULL$$ ? $drawable$$10$$.$_node$.$getY$() : $drawable$$10$$.$getMatrix$().$_ty$
};
$JSCompiler_prototypeAlias$$.$getScaleX$ = function $$JSCompiler_prototypeAlias$$$$getScaleX$$($node$$300_scaleX$$5$$) {
  $node$$300_scaleX$$5$$ = $node$$300_scaleX$$5$$.$getScaleX$();
  $node$$300_scaleX$$5$$ == $JSCompiler_alias_NULL$$ && ($node$$300_scaleX$$5$$ = this.$isVertical$() ? (this.$Width$ - this.$getTimeAxisWidth$() - 4) / 2 : 1);
  return $node$$300_scaleX$$5$$
};
$JSCompiler_prototypeAlias$$.$getScaleY$ = function $$JSCompiler_prototypeAlias$$$$getScaleY$$($node$$301_scaleY$$5$$) {
  $node$$301_scaleY$$5$$ = $node$$301_scaleY$$5$$.$getScaleY$();
  $node$$301_scaleY$$5$$ == $JSCompiler_alias_NULL$$ && ($node$$301_scaleY$$5$$ = 1);
  return $node$$301_scaleY$$5$$
};
$JSCompiler_prototypeAlias$$.$parseDataXML$ = function $$JSCompiler_prototypeAlias$$$$parseDataXML$$($width$$143$$, $height$$120$$) {
  dvt.$TimelineOverview$.$superclass$.$parseDataXML$.call(this, $width$$143$$, $height$$120$$);
  if(this.$_markers$ != $JSCompiler_alias_NULL$$) {
    for(var $opt$$ = $JSCompiler_StaticMethods_calculateOptimalSize$$(this, this.$_start$, this.$_end$, $width$$143$$, $height$$120$$, this.$_markerSize$), $durationMarkers$$ = [], $context$$inline_5223_j$$104$$ = 0;$context$$inline_5223_j$$104$$ < this.$_markers$.length;$context$$inline_5223_j$$104$$++) {
      var $i$$inline_5224_marker$$14_node$$inline_5198$$ = this.$_markers$[$context$$inline_5223_j$$104$$];
      if($i$$inline_5224_marker$$14_node$$inline_5198$$.$_endTime$ == $JSCompiler_alias_NULL$$) {
        var $alphas$$inline_5215_darker$$inline_5214_height$$inline_5208_sz$$inline_5199$$ = $opt$$, $displayable$$inline_5211_durationId$$inline_5228_feelerStroke$$inline_5232_itemId$$inline_5200$$ = "_mrk_" + $i$$inline_5224_marker$$14_node$$inline_5198$$.getId(), $color$$inline_5201_count$$inline_5218_node$$inline_5226_stroke$$inline_5217$$ = $i$$inline_5224_marker$$14_node$$inline_5198$$.$getColor$(), $duration$$inline_5231_fill$$inline_5216_isGradient$$inline_5202_x$$inline_5227$$ = $i$$inline_5224_marker$$14_node$$inline_5198$$.$_gradient$, 
        $durationY$$inline_5229_lastChild$$inline_5219_opacity$$inline_5203$$ = $i$$inline_5224_marker$$14_node$$inline_5198$$.$getOpacity$();
        $durationY$$inline_5229_lastChild$$inline_5219_opacity$$inline_5203$$ == $JSCompiler_alias_NULL$$ && ($durationY$$inline_5229_lastChild$$inline_5219_opacity$$inline_5203$$ = this.$_defOpacity$, 0 == $durationY$$inline_5229_lastChild$$inline_5219_opacity$$inline_5203$$ && $color$$inline_5201_count$$inline_5218_node$$inline_5226_stroke$$inline_5217$$ != $JSCompiler_alias_NULL$$ && ($durationY$$inline_5229_lastChild$$inline_5219_opacity$$inline_5203$$ = 1));
        var $colors$$inline_5212_lighter$$inline_5213_scaleX$$inline_5204_width$$inline_5207_x2$$inline_5230$$ = this.$getScaleX$($i$$inline_5224_marker$$14_node$$inline_5198$$), $cx$$inline_5209_scaleY$$inline_5205$$ = this.$getScaleY$($i$$inline_5224_marker$$14_node$$inline_5198$$), $j$$inline_5225_marker$$inline_5206$$ = $i$$inline_5224_marker$$14_node$$inline_5198$$.$getShape$();
        if(this.$isVertical$()) {
          var $j$$inline_5225_marker$$inline_5206$$ = dvt.$SimpleMarker$.$RECTANGLE$, $colors$$inline_5212_lighter$$inline_5213_scaleX$$inline_5204_width$$inline_5207_x2$$inline_5230$$ = 2 * $colors$$inline_5212_lighter$$inline_5213_scaleX$$inline_5204_width$$inline_5207_x2$$inline_5230$$, $alphas$$inline_5215_darker$$inline_5214_height$$inline_5208_sz$$inline_5199$$ = 2 * $cx$$inline_5209_scaleY$$inline_5205$$, $cx$$inline_5209_scaleY$$inline_5205$$ = $i$$inline_5224_marker$$14_node$$inline_5198$$.$getY$() + 
          $colors$$inline_5212_lighter$$inline_5213_scaleX$$inline_5204_width$$inline_5207_x2$$inline_5230$$ / 2, $cy$$inline_5210$$ = $i$$inline_5224_marker$$14_node$$inline_5198$$.$getX$() + $alphas$$inline_5215_darker$$inline_5214_height$$inline_5208_sz$$inline_5199$$ / 2
        }else {
          $colors$$inline_5212_lighter$$inline_5213_scaleX$$inline_5204_width$$inline_5207_x2$$inline_5230$$ *= $alphas$$inline_5215_darker$$inline_5214_height$$inline_5208_sz$$inline_5199$$, $alphas$$inline_5215_darker$$inline_5214_height$$inline_5208_sz$$inline_5199$$ *= $cx$$inline_5209_scaleY$$inline_5205$$, $cx$$inline_5209_scaleY$$inline_5205$$ = $i$$inline_5224_marker$$14_node$$inline_5198$$.$getX$() + $colors$$inline_5212_lighter$$inline_5213_scaleX$$inline_5204_width$$inline_5207_x2$$inline_5230$$ / 
          2, $cy$$inline_5210$$ = $i$$inline_5224_marker$$14_node$$inline_5198$$.$getY$() + $alphas$$inline_5215_darker$$inline_5214_height$$inline_5208_sz$$inline_5199$$ / 2
        }
        $displayable$$inline_5211_durationId$$inline_5228_feelerStroke$$inline_5232_itemId$$inline_5200$$ = new dvt.$SimpleMarker$(this.$getCtx$(), $j$$inline_5225_marker$$inline_5206$$, $JSCompiler_alias_NULL$$, $cx$$inline_5209_scaleY$$inline_5205$$, $cy$$inline_5210$$, $colors$$inline_5212_lighter$$inline_5213_scaleX$$inline_5204_width$$inline_5207_x2$$inline_5230$$, $alphas$$inline_5215_darker$$inline_5214_height$$inline_5208_sz$$inline_5199$$, $JSCompiler_alias_NULL$$, $displayable$$inline_5211_durationId$$inline_5228_feelerStroke$$inline_5232_itemId$$inline_5200$$);
        $displayable$$inline_5211_durationId$$inline_5228_feelerStroke$$inline_5232_itemId$$inline_5200$$.$_node$ = $i$$inline_5224_marker$$14_node$$inline_5198$$;
        $color$$inline_5201_count$$inline_5218_node$$inline_5226_stroke$$inline_5217$$ == $JSCompiler_alias_NULL$$ && $durationY$$inline_5229_lastChild$$inline_5219_opacity$$inline_5203$$ == this.$_defOpacity$ && $duration$$inline_5231_fill$$inline_5216_isGradient$$inline_5202_x$$inline_5227$$ == $JSCompiler_alias_NULL$$ ? ($duration$$inline_5231_fill$$inline_5216_isGradient$$inline_5202_x$$inline_5227$$ = $j$$inline_5225_marker$$inline_5206$$ == dvt.$SimpleMarker$.$CIRCLE$ ? this.$_radialFill$ : 
        this.$_linearFill$, $color$$inline_5201_count$$inline_5218_node$$inline_5226_stroke$$inline_5217$$ = this.$_border$) : ($colors$$inline_5212_lighter$$inline_5213_scaleX$$inline_5204_width$$inline_5207_x2$$inline_5230$$ = this.$_defColors$, $color$$inline_5201_count$$inline_5218_node$$inline_5226_stroke$$inline_5217$$ != $JSCompiler_alias_NULL$$ && (dvt.$OverviewUtils$.$supportsTouch$() ? $colors$$inline_5212_lighter$$inline_5213_scaleX$$inline_5204_width$$inline_5207_x2$$inline_5230$$ = [$color$$inline_5201_count$$inline_5218_node$$inline_5226_stroke$$inline_5217$$] : 
        ($colors$$inline_5212_lighter$$inline_5213_scaleX$$inline_5204_width$$inline_5207_x2$$inline_5230$$ = dvt.$ColorUtils$.$getPastel$($color$$inline_5201_count$$inline_5218_node$$inline_5226_stroke$$inline_5217$$, 0.5), $alphas$$inline_5215_darker$$inline_5214_height$$inline_5208_sz$$inline_5199$$ = dvt.$ColorUtils$.$getDarker$($color$$inline_5201_count$$inline_5218_node$$inline_5226_stroke$$inline_5217$$, 0.5), $colors$$inline_5212_lighter$$inline_5213_scaleX$$inline_5204_width$$inline_5207_x2$$inline_5230$$ = 
        [$colors$$inline_5212_lighter$$inline_5213_scaleX$$inline_5204_width$$inline_5207_x2$$inline_5230$$, $color$$inline_5201_count$$inline_5218_node$$inline_5226_stroke$$inline_5217$$, $alphas$$inline_5215_darker$$inline_5214_height$$inline_5208_sz$$inline_5199$$])), $alphas$$inline_5215_darker$$inline_5214_height$$inline_5208_sz$$inline_5199$$ = [$durationY$$inline_5229_lastChild$$inline_5219_opacity$$inline_5203$$, $durationY$$inline_5229_lastChild$$inline_5219_opacity$$inline_5203$$, $durationY$$inline_5229_lastChild$$inline_5219_opacity$$inline_5203$$], 
        $duration$$inline_5231_fill$$inline_5216_isGradient$$inline_5202_x$$inline_5227$$ = $duration$$inline_5231_fill$$inline_5216_isGradient$$inline_5202_x$$inline_5227$$ == $JSCompiler_alias_NULL$$ ? $j$$inline_5225_marker$$inline_5206$$ == dvt.$SimpleMarker$.$CIRCLE$ ? new dvt.$LinearGradientFill$(250, $colors$$inline_5212_lighter$$inline_5213_scaleX$$inline_5204_width$$inline_5207_x2$$inline_5230$$, $alphas$$inline_5215_darker$$inline_5214_height$$inline_5208_sz$$inline_5199$$) : new dvt.$LinearGradientFill$(180, 
        $colors$$inline_5212_lighter$$inline_5213_scaleX$$inline_5204_width$$inline_5207_x2$$inline_5230$$, $alphas$$inline_5215_darker$$inline_5214_height$$inline_5208_sz$$inline_5199$$) : new dvt.$SolidFill$($color$$inline_5201_count$$inline_5218_node$$inline_5226_stroke$$inline_5217$$, $alphas$$inline_5215_darker$$inline_5214_height$$inline_5208_sz$$inline_5199$$[0]), $color$$inline_5201_count$$inline_5218_node$$inline_5226_stroke$$inline_5217$$ = new dvt.$SolidStroke$($color$$inline_5201_count$$inline_5218_node$$inline_5226_stroke$$inline_5217$$, 
        $durationY$$inline_5229_lastChild$$inline_5219_opacity$$inline_5203$$));
        $displayable$$inline_5211_durationId$$inline_5228_feelerStroke$$inline_5232_itemId$$inline_5200$$.$setFill$($duration$$inline_5231_fill$$inline_5216_isGradient$$inline_5202_x$$inline_5227$$);
        $displayable$$inline_5211_durationId$$inline_5228_feelerStroke$$inline_5232_itemId$$inline_5200$$.$setStroke$($color$$inline_5201_count$$inline_5218_node$$inline_5226_stroke$$inline_5217$$);
        "none" != this.$_selectionMode$ && $displayable$$inline_5211_durationId$$inline_5228_feelerStroke$$inline_5232_itemId$$inline_5200$$.$setSelectable$($JSCompiler_alias_TRUE$$);
        $color$$inline_5201_count$$inline_5218_node$$inline_5226_stroke$$inline_5217$$ = this.$getNumChildren$();
        $durationY$$inline_5229_lastChild$$inline_5219_opacity$$inline_5203$$ = this.$getChildAt$($color$$inline_5201_count$$inline_5218_node$$inline_5226_stroke$$inline_5217$$ - 1);
        $color$$inline_5201_count$$inline_5218_node$$inline_5226_stroke$$inline_5217$$ > this.$_lastChildIndex$ && ("tb" == $durationY$$inline_5229_lastChild$$inline_5219_opacity$$inline_5203$$.getId() || "arr" == $durationY$$inline_5229_lastChild$$inline_5219_opacity$$inline_5203$$.getId()) ? this.$addChildAt$($displayable$$inline_5211_durationId$$inline_5228_feelerStroke$$inline_5232_itemId$$inline_5200$$, $color$$inline_5201_count$$inline_5218_node$$inline_5226_stroke$$inline_5217$$ - this.$_lastChildIndex$) : 
        this.$addChild$($displayable$$inline_5211_durationId$$inline_5228_feelerStroke$$inline_5232_itemId$$inline_5200$$);
        $i$$inline_5224_marker$$14_node$$inline_5198$$.$setDisplayable$($displayable$$inline_5211_durationId$$inline_5228_feelerStroke$$inline_5232_itemId$$inline_5200$$);
        this.$applyState$($displayable$$inline_5211_durationId$$inline_5228_feelerStroke$$inline_5232_itemId$$inline_5200$$, dvt.$TimelineOverview$.$ENABLED_STATE$);
        (this.$isVertical$() || $j$$inline_5225_marker$$inline_5206$$ == dvt.$SimpleMarker$.$RECTANGLE$ || $j$$inline_5225_marker$$inline_5206$$ == dvt.$SimpleMarker$.$DIAMOND$ || $j$$inline_5225_marker$$inline_5206$$ == dvt.$SimpleMarker$.$TRIANGLE_UP$ || $j$$inline_5225_marker$$inline_5206$$ == dvt.$SimpleMarker$.$TRIANGLE_DOWN$ || $j$$inline_5225_marker$$inline_5206$$ == dvt.$SimpleMarker$.$PLUS$) && "false" != this.$_defaultMarkerStyles$.$pixelHinting$ && $displayable$$inline_5211_durationId$$inline_5228_feelerStroke$$inline_5232_itemId$$inline_5200$$.$setPixelHinting$()
      }else {
        $durationMarkers$$[$durationMarkers$$.length] = $i$$inline_5224_marker$$14_node$$inline_5198$$
      }
    }
    this.$prepareDurations$($durationMarkers$$);
    $context$$inline_5223_j$$104$$ = this.$getCtx$();
    for($i$$inline_5224_marker$$14_node$$inline_5198$$ = this.$_maxDurationY$;0 < $i$$inline_5224_marker$$14_node$$inline_5198$$;$i$$inline_5224_marker$$14_node$$inline_5198$$--) {
      for($j$$inline_5225_marker$$inline_5206$$ = 0;$j$$inline_5225_marker$$inline_5206$$ < $durationMarkers$$.length;$j$$inline_5225_marker$$inline_5206$$++) {
        $color$$inline_5201_count$$inline_5218_node$$inline_5226_stroke$$inline_5217$$ = $durationMarkers$$[$j$$inline_5225_marker$$inline_5206$$], $i$$inline_5224_marker$$14_node$$inline_5198$$ == $color$$inline_5201_count$$inline_5218_node$$inline_5226_stroke$$inline_5217$$.$_durationLevel$ && ($duration$$inline_5231_fill$$inline_5216_isGradient$$inline_5202_x$$inline_5227$$ = dvt.$OverviewUtils$.$getDatePosition$(this.$_start$, this.$_end$, $color$$inline_5201_count$$inline_5218_node$$inline_5226_stroke$$inline_5217$$.getTime(), 
        this.$isVertical$() ? this.$Height$ : this.$Width$), $displayable$$inline_5211_durationId$$inline_5228_feelerStroke$$inline_5232_itemId$$inline_5200$$ = "_drn_" + $color$$inline_5201_count$$inline_5218_node$$inline_5226_stroke$$inline_5217$$.getId(), $durationY$$inline_5229_lastChild$$inline_5219_opacity$$inline_5203$$ = 9 + 5 * $color$$inline_5201_count$$inline_5218_node$$inline_5226_stroke$$inline_5217$$.$_durationLevel$, $colors$$inline_5212_lighter$$inline_5213_scaleX$$inline_5204_width$$inline_5207_x2$$inline_5230$$ = 
        dvt.$OverviewUtils$.$getDatePosition$(this.$_start$, this.$_end$, $color$$inline_5201_count$$inline_5218_node$$inline_5226_stroke$$inline_5217$$.$_endTime$, this.$isVertical$() ? this.$Height$ : this.$Width$), $duration$$inline_5231_fill$$inline_5216_isGradient$$inline_5202_x$$inline_5227$$ = this.$isVertical$() ? this.$isRTL$() ? new dvt.$Rect$($context$$inline_5223_j$$104$$, 0, $duration$$inline_5231_fill$$inline_5216_isGradient$$inline_5202_x$$inline_5227$$, $durationY$$inline_5229_lastChild$$inline_5219_opacity$$inline_5203$$, 
        $colors$$inline_5212_lighter$$inline_5213_scaleX$$inline_5204_width$$inline_5207_x2$$inline_5230$$ - $duration$$inline_5231_fill$$inline_5216_isGradient$$inline_5202_x$$inline_5227$$, $displayable$$inline_5211_durationId$$inline_5228_feelerStroke$$inline_5232_itemId$$inline_5200$$) : new dvt.$Rect$($context$$inline_5223_j$$104$$, this.$Width$ - $durationY$$inline_5229_lastChild$$inline_5219_opacity$$inline_5203$$, $duration$$inline_5231_fill$$inline_5216_isGradient$$inline_5202_x$$inline_5227$$, 
        $durationY$$inline_5229_lastChild$$inline_5219_opacity$$inline_5203$$, $colors$$inline_5212_lighter$$inline_5213_scaleX$$inline_5204_width$$inline_5207_x2$$inline_5230$$ - $duration$$inline_5231_fill$$inline_5216_isGradient$$inline_5202_x$$inline_5227$$, $displayable$$inline_5211_durationId$$inline_5228_feelerStroke$$inline_5232_itemId$$inline_5200$$) : this.$isRTL$() ? new dvt.$Rect$($context$$inline_5223_j$$104$$, this.$Width$ - $colors$$inline_5212_lighter$$inline_5213_scaleX$$inline_5204_width$$inline_5207_x2$$inline_5230$$, 
        this.$Height$ - $durationY$$inline_5229_lastChild$$inline_5219_opacity$$inline_5203$$ - 20, $colors$$inline_5212_lighter$$inline_5213_scaleX$$inline_5204_width$$inline_5207_x2$$inline_5230$$ - $duration$$inline_5231_fill$$inline_5216_isGradient$$inline_5202_x$$inline_5227$$, $durationY$$inline_5229_lastChild$$inline_5219_opacity$$inline_5203$$, $displayable$$inline_5211_durationId$$inline_5228_feelerStroke$$inline_5232_itemId$$inline_5200$$) : new dvt.$Rect$($context$$inline_5223_j$$104$$, 
        $duration$$inline_5231_fill$$inline_5216_isGradient$$inline_5202_x$$inline_5227$$, this.$Height$ - $durationY$$inline_5229_lastChild$$inline_5219_opacity$$inline_5203$$ - 20, $colors$$inline_5212_lighter$$inline_5213_scaleX$$inline_5204_width$$inline_5207_x2$$inline_5230$$ - $duration$$inline_5231_fill$$inline_5216_isGradient$$inline_5202_x$$inline_5227$$, $durationY$$inline_5229_lastChild$$inline_5219_opacity$$inline_5203$$, $displayable$$inline_5211_durationId$$inline_5228_feelerStroke$$inline_5232_itemId$$inline_5200$$), 
        $duration$$inline_5231_fill$$inline_5216_isGradient$$inline_5202_x$$inline_5227$$.$setFill$(new dvt.$SolidFill$($color$$inline_5201_count$$inline_5218_node$$inline_5226_stroke$$inline_5217$$.$_durationFillColor$)), $displayable$$inline_5211_durationId$$inline_5228_feelerStroke$$inline_5232_itemId$$inline_5200$$ = new dvt.$SolidStroke$(this.$getStyle$(dvt.$TimelineOverview$.$ENABLED_STATE$, dvt.$TimelineOverview$.$DURATION_BORDER_COLOR$), 1, 1), $duration$$inline_5231_fill$$inline_5216_isGradient$$inline_5202_x$$inline_5227$$.$setStroke$($displayable$$inline_5211_durationId$$inline_5228_feelerStroke$$inline_5232_itemId$$inline_5200$$), 
        $duration$$inline_5231_fill$$inline_5216_isGradient$$inline_5202_x$$inline_5227$$.$setPixelHinting$(), $duration$$inline_5231_fill$$inline_5216_isGradient$$inline_5202_x$$inline_5227$$.$_node$ = $color$$inline_5201_count$$inline_5218_node$$inline_5226_stroke$$inline_5217$$, this.$addChild$($duration$$inline_5231_fill$$inline_5216_isGradient$$inline_5202_x$$inline_5227$$), $color$$inline_5201_count$$inline_5218_node$$inline_5226_stroke$$inline_5217$$.$_durationBar$ = $duration$$inline_5231_fill$$inline_5216_isGradient$$inline_5202_x$$inline_5227$$, 
        $color$$inline_5201_count$$inline_5218_node$$inline_5226_stroke$$inline_5217$$.$_durationY$ = $durationY$$inline_5229_lastChild$$inline_5219_opacity$$inline_5203$$ - 2)
      }
    }
    this.removeChild(this.$_timeAxisTopBar$);
    this.$addChild$(this.$_timeAxisTopBar$);
    this.$_markerSize$ = $opt$$
  }
};
$JSCompiler_prototypeAlias$$.$prepareDurations$ = function $$JSCompiler_prototypeAlias$$$$prepareDurations$$($durationMarkers$$1$$) {
  this.$_maxDurationY$ = 0;
  var $markerSeries$$ = $JSCompiler_alias_NULL$$;
  this.$_durationColorMap$ == $JSCompiler_alias_NULL$$ && (this.$_durationColorMap$ = {});
  for(var $i$$657$$ = 0;$i$$657$$ < $durationMarkers$$1$$.length;$i$$657$$++) {
    var $marker$$15$$ = $durationMarkers$$1$$[$i$$657$$], $id$$210$$ = $marker$$15$$.getId(), $sId$$2$$ = $id$$210$$.substring($id$$210$$.indexOf(":") + 1, $id$$210$$.length), $sId$$2$$ = $sId$$2$$.substring(0, $sId$$2$$.indexOf(":"));
    $sId$$2$$ != $markerSeries$$ && (this.$_colorCount$ = 0, $markerSeries$$ = $sId$$2$$);
    $marker$$15$$.$_durationLevel$ = $JSCompiler_StaticMethods_calculateDurationY$$(this, $marker$$15$$, $durationMarkers$$1$$);
    $marker$$15$$.$_durationFillColor$ == $JSCompiler_alias_NULL$$ && (this.$_durationColorMap$[$id$$210$$] == $JSCompiler_alias_NULL$$ ? (this.$_durationColorMap$[$id$$210$$] = this.$_colorCount$, $marker$$15$$.$_durationFillColor$ = this.$_durationColors$[this.$_colorCount$], this.$_colorCount$++, this.$_colorCount$ == this.$_durationColors$.length && (this.$_colorCount$ = 0)) : $marker$$15$$.$_durationFillColor$ = this.$_durationColors$[this.$_durationColorMap$[$id$$210$$]])
  }
};
$JSCompiler_prototypeAlias$$.$getDurationColorMap$ = function $$JSCompiler_prototypeAlias$$$$getDurationColorMap$$() {
  return this.$_durationColorMap$ ? this.$_durationColorMap$ : $JSCompiler_alias_NULL$$
};
dvt.$TimelineOverview$.prototype.getDurationColorMap = dvt.$TimelineOverview$.prototype.$getDurationColorMap$;
function $JSCompiler_StaticMethods_calculateOptimalSize$$($JSCompiler_StaticMethods_calculateOptimalSize$self$$, $start$$39$$, $end$$30$$, $width$$144$$, $height$$121$$, $size$$38$$) {
  for(var $JSCompiler_StaticMethods_calculateY$self$$inline_6763_JSCompiler_object_inline_cy_6838_prevMarker$$inline_5254$$, $JSCompiler_object_inline_maxy_6839_overlappingMarkers$$inline_6764_prevX$$inline_5255$$, $result$$2$$ = {max:1, $arr$:[]}, $canvasSize$$ = $JSCompiler_StaticMethods_calculateOptimalSize$self$$.$isVertical$() ? $height$$121$$ : $width$$144$$, $i$$658$$ = 0;$i$$658$$ < $JSCompiler_StaticMethods_calculateOptimalSize$self$$.$_markers$.length;$i$$658$$++) {
    var $marker$$16_node$$inline_5239$$ = $JSCompiler_StaticMethods_calculateOptimalSize$self$$.$_markers$[$i$$658$$];
    if($marker$$16_node$$inline_5239$$.$_endTime$ != $JSCompiler_alias_NULL$$) {
      var $JSCompiler_StaticMethods_calculateSize$self$$inline_5238_x$$212$$ = dvt.$OverviewUtils$.$getDatePosition$($start$$39$$, $end$$30$$, $marker$$16_node$$inline_5239$$.getTime(), $canvasSize$$);
      $JSCompiler_StaticMethods_calculateOptimalSize$self$$.$isHorizontalRTL$() && ($JSCompiler_StaticMethods_calculateSize$self$$inline_5238_x$$212$$ = $canvasSize$$ - $JSCompiler_StaticMethods_calculateSize$self$$inline_5238_x$$212$$);
      $marker$$16_node$$inline_5239$$.$setX$($JSCompiler_StaticMethods_calculateSize$self$$inline_5238_x$$212$$)
    }else {
      var $JSCompiler_StaticMethods_calculateSize$self$$inline_5238_x$$212$$ = $JSCompiler_StaticMethods_calculateOptimalSize$self$$, $cx$$inline_5248_start$$inline_5240$$ = $start$$39$$, $end$$inline_5241_overlappingMarkers$$inline_5252$$ = $end$$30$$, $cy$$inline_5250_size$$inline_5242$$ = $canvasSize$$, $borderOffset$$inline_5249_hsz$$inline_5243$$ = $size$$38$$ / 2, $result$$inline_5244$$ = $result$$2$$, $maxHeight$$inline_5245$$ = $height$$121$$, $hszx$$inline_5246$$ = $borderOffset$$inline_5249_hsz$$inline_5243$$ * 
      $JSCompiler_StaticMethods_calculateSize$self$$inline_5238_x$$212$$.$getScaleX$($marker$$16_node$$inline_5239$$) + $JSCompiler_StaticMethods_calculateSize$self$$inline_5238_x$$212$$.$_markerSpacingOffset$, $hszy$$inline_5247$$ = $borderOffset$$inline_5249_hsz$$inline_5243$$ * $JSCompiler_StaticMethods_calculateSize$self$$inline_5238_x$$212$$.$getScaleY$($marker$$16_node$$inline_5239$$) + $JSCompiler_StaticMethods_calculateSize$self$$inline_5238_x$$212$$.$_markerSpacingOffset$, $cx$$inline_5248_start$$inline_5240$$ = 
      dvt.$OverviewUtils$.$getDatePosition$($cx$$inline_5248_start$$inline_5240$$, $end$$inline_5241_overlappingMarkers$$inline_5252$$, $marker$$16_node$$inline_5239$$.getTime(), $cy$$inline_5250_size$$inline_5242$$);
      $JSCompiler_StaticMethods_calculateSize$self$$inline_5238_x$$212$$.$isHorizontalRTL$() && ($cx$$inline_5248_start$$inline_5240$$ = $cy$$inline_5250_size$$inline_5242$$ - $cx$$inline_5248_start$$inline_5240$$ - 2 * $hszx$$inline_5246$$);
      if($JSCompiler_StaticMethods_calculateSize$self$$inline_5238_x$$212$$.$isVertical$()) {
        $borderOffset$$inline_5249_hsz$$inline_5243$$ = 0, "solid" == $JSCompiler_StaticMethods_calculateSize$self$$inline_5238_x$$212$$.$getStyle$(dvt.$TimelineOverview$.$ENABLED_STATE$, dvt.$TimelineOverview$.$BORDER_STYLE$) && ($borderOffset$$inline_5249_hsz$$inline_5243$$ = parseInt($JSCompiler_StaticMethods_calculateSize$self$$inline_5238_x$$212$$.$getStyle$(dvt.$TimelineOverview$.$ENABLED_STATE$, dvt.$TimelineOverview$.$BORDER_WIDTH$), 10)), $cy$$inline_5250_size$$inline_5242$$ = $JSCompiler_StaticMethods_calculateSize$self$$inline_5238_x$$212$$.$isRTL$() ? 
        $borderOffset$$inline_5249_hsz$$inline_5243$$ + 4 : $JSCompiler_StaticMethods_calculateSize$self$$inline_5238_x$$212$$.$Width$ - 2 * $JSCompiler_StaticMethods_calculateSize$self$$inline_5238_x$$212$$.$getScaleX$($marker$$16_node$$inline_5239$$) - $borderOffset$$inline_5249_hsz$$inline_5243$$ - 4
      }else {
        $cy$$inline_5250_size$$inline_5242$$ = 3;
        $JSCompiler_StaticMethods_calculateSize$self$$inline_5238_x$$212$$.$isOverviewAbove$() && ($cy$$inline_5250_size$$inline_5242$$ += $JSCompiler_StaticMethods_calculateSize$self$$inline_5238_x$$212$$.$getTimeAxisHeight$());
        for(var $maxy$$inline_5251_maxy$$inline_6770$$ = 0, $end$$inline_5241_overlappingMarkers$$inline_5252$$ = [], $i$$inline_5253$$ = 0;$i$$inline_5253$$ < $result$$inline_5244$$.$arr$.length;$i$$inline_5253$$++) {
          $JSCompiler_StaticMethods_calculateY$self$$inline_6763_JSCompiler_object_inline_cy_6838_prevMarker$$inline_5254$$ = $result$$inline_5244$$.$arr$[$i$$inline_5253$$];
          $JSCompiler_object_inline_maxy_6839_overlappingMarkers$$inline_6764_prevX$$inline_5255$$ = $JSCompiler_StaticMethods_calculateY$self$$inline_6763_JSCompiler_object_inline_cy_6838_prevMarker$$inline_5254$$.$getX$();
          var $prevScaleX$$inline_5256_shape$$inline_6765$$ = $JSCompiler_StaticMethods_calculateSize$self$$inline_5238_x$$212$$.$getScaleX$($JSCompiler_StaticMethods_calculateY$self$$inline_6763_JSCompiler_object_inline_cy_6838_prevMarker$$inline_5254$$);
          Math.abs($cx$$inline_5248_start$$inline_5240$$ - $JSCompiler_object_inline_maxy_6839_overlappingMarkers$$inline_6764_prevX$$inline_5255$$) < $borderOffset$$inline_5249_hsz$$inline_5243$$ * $prevScaleX$$inline_5256_shape$$inline_6765$$ + $JSCompiler_StaticMethods_calculateSize$self$$inline_5238_x$$212$$.$_markerSpacingOffset$ + $hszx$$inline_5246$$ && $end$$inline_5241_overlappingMarkers$$inline_5252$$.push($JSCompiler_StaticMethods_calculateY$self$$inline_6763_JSCompiler_object_inline_cy_6838_prevMarker$$inline_5254$$)
        }
        for($i$$inline_5253$$ = 0;$i$$inline_5253$$ < $end$$inline_5241_overlappingMarkers$$inline_5252$$.length;$i$$inline_5253$$++) {
          $JSCompiler_StaticMethods_calculateY$self$$inline_6763_JSCompiler_object_inline_cy_6838_prevMarker$$inline_5254$$ = $JSCompiler_StaticMethods_calculateSize$self$$inline_5238_x$$212$$;
          $JSCompiler_object_inline_maxy_6839_overlappingMarkers$$inline_6764_prevX$$inline_5255$$ = $end$$inline_5241_overlappingMarkers$$inline_5252$$;
          for(var $prevScaleX$$inline_5256_shape$$inline_6765$$ = $marker$$16_node$$inline_5239$$.$getShape$(), $cx$$inline_6766$$ = $cx$$inline_5248_start$$inline_5240$$, $cy$$inline_6767$$ = $cy$$inline_5250_size$$inline_5242$$, $hszx$$inline_6768$$ = $hszx$$inline_5246$$, $hszy$$inline_6769$$ = $hszy$$inline_5247$$, $hsz$$inline_6771$$ = $borderOffset$$inline_5249_hsz$$inline_5243$$, $maxHeight$$inline_6772$$ = $maxHeight$$inline_5245$$, $i$$inline_6773$$ = 0;$i$$inline_6773$$ < $JSCompiler_object_inline_maxy_6839_overlappingMarkers$$inline_6764_prevX$$inline_5255$$.length;$i$$inline_6773$$++) {
            var $prevMarker$$inline_6774_prevScaleY$$inline_6779$$ = $JSCompiler_object_inline_maxy_6839_overlappingMarkers$$inline_6764_prevX$$inline_5255$$[$i$$inline_6773$$], $prevX$$inline_6775_xDist$$inline_6780$$ = $prevMarker$$inline_6774_prevScaleY$$inline_6779$$.$getX$(), $prevY$$inline_6776$$ = $prevMarker$$inline_6774_prevScaleY$$inline_6779$$.$getY$(), $prevShape$$inline_6777$$ = $prevMarker$$inline_6774_prevScaleY$$inline_6779$$.$getShape$(), $height$$inline_6782_minDist$$inline_6781_prevScaleX$$inline_6778$$ = 
            $JSCompiler_StaticMethods_calculateY$self$$inline_6763_JSCompiler_object_inline_cy_6838_prevMarker$$inline_5254$$.$getScaleX$($prevMarker$$inline_6774_prevScaleY$$inline_6779$$), $prevMarker$$inline_6774_prevScaleY$$inline_6779$$ = $JSCompiler_StaticMethods_calculateY$self$$inline_6763_JSCompiler_object_inline_cy_6838_prevMarker$$inline_5254$$.$getScaleY$($prevMarker$$inline_6774_prevScaleY$$inline_6779$$);
            $prevScaleX$$inline_5256_shape$$inline_6765$$ == dvt.$SimpleMarker$.$CIRCLE$ && $prevShape$$inline_6777$$ == dvt.$SimpleMarker$.$CIRCLE$ && $hszx$$inline_6768$$ == $hszy$$inline_6769$$ && $height$$inline_6782_minDist$$inline_6781_prevScaleX$$inline_6778$$ == $prevMarker$$inline_6774_prevScaleY$$inline_6779$$ ? ($prevX$$inline_6775_xDist$$inline_6780$$ = Math.abs($cx$$inline_6766$$ - $prevX$$inline_6775_xDist$$inline_6780$$), $height$$inline_6782_minDist$$inline_6781_prevScaleX$$inline_6778$$ = 
            $hsz$$inline_6771$$ * $height$$inline_6782_minDist$$inline_6781_prevScaleX$$inline_6778$$ + $JSCompiler_StaticMethods_calculateY$self$$inline_6763_JSCompiler_object_inline_cy_6838_prevMarker$$inline_5254$$.$_markerSpacingOffset$ + $hszx$$inline_6768$$, $height$$inline_6782_minDist$$inline_6781_prevScaleX$$inline_6778$$ = Math.sqrt($height$$inline_6782_minDist$$inline_6781_prevScaleX$$inline_6778$$ * $height$$inline_6782_minDist$$inline_6781_prevScaleX$$inline_6778$$ - $prevX$$inline_6775_xDist$$inline_6780$$ * 
            $prevX$$inline_6775_xDist$$inline_6780$$)) : $height$$inline_6782_minDist$$inline_6781_prevScaleX$$inline_6778$$ = $hsz$$inline_6771$$ * $prevMarker$$inline_6774_prevScaleY$$inline_6779$$ + $JSCompiler_StaticMethods_calculateY$self$$inline_6763_JSCompiler_object_inline_cy_6838_prevMarker$$inline_5254$$.$_markerSpacingOffset$ + $hszy$$inline_6769$$;
            if($height$$inline_6782_minDist$$inline_6781_prevScaleX$$inline_6778$$ > Math.abs($cy$$inline_6767$$ - $prevY$$inline_6776$$) && ($cy$$inline_6767$$ = $prevY$$inline_6776$$ + $height$$inline_6782_minDist$$inline_6781_prevScaleX$$inline_6778$$, $maxy$$inline_5251_maxy$$inline_6770$$ = Math.max($maxy$$inline_5251_maxy$$inline_6770$$, $cy$$inline_6767$$ + $height$$inline_6782_minDist$$inline_6781_prevScaleX$$inline_6778$$), 1 <= $hsz$$inline_6771$$ && $maxHeight$$inline_6772$$ != $JSCompiler_alias_VOID$$ && 
            $maxy$$inline_5251_maxy$$inline_6770$$ > $maxHeight$$inline_6772$$)) {
              break
            }
          }
          $JSCompiler_StaticMethods_calculateY$self$$inline_6763_JSCompiler_object_inline_cy_6838_prevMarker$$inline_5254$$ = $cy$$inline_6767$$;
          $maxy$$inline_5251_maxy$$inline_6770$$ = $JSCompiler_object_inline_maxy_6839_overlappingMarkers$$inline_6764_prevX$$inline_5255$$ = $maxy$$inline_5251_maxy$$inline_6770$$;
          if($JSCompiler_StaticMethods_calculateY$self$$inline_6763_JSCompiler_object_inline_cy_6838_prevMarker$$inline_5254$$ == $cy$$inline_5250_size$$inline_5242$$) {
            $cy$$inline_5250_size$$inline_5242$$ = $JSCompiler_StaticMethods_calculateY$self$$inline_6763_JSCompiler_object_inline_cy_6838_prevMarker$$inline_5254$$;
            break
          }else {
            $cy$$inline_5250_size$$inline_5242$$ = $JSCompiler_StaticMethods_calculateY$self$$inline_6763_JSCompiler_object_inline_cy_6838_prevMarker$$inline_5254$$
          }
        }
      }
      $marker$$16_node$$inline_5239$$.$setX$($cx$$inline_5248_start$$inline_5240$$);
      $marker$$16_node$$inline_5239$$.$setY$($cy$$inline_5250_size$$inline_5242$$);
      $result$$inline_5244$$.$arr$.push($marker$$16_node$$inline_5239$$);
      $maxy$$inline_5251_maxy$$inline_6770$$ > $result$$inline_5244$$.max && ($result$$inline_5244$$.max = $maxy$$inline_5251_maxy$$inline_6770$$);
      if($result$$2$$.max > $height$$121$$) {
        break
      }
    }
  }
  return $result$$2$$.max > $height$$121$$ && 1 < $size$$38$$ ? $JSCompiler_StaticMethods_calculateOptimalSize$$($JSCompiler_StaticMethods_calculateOptimalSize$self$$, $start$$39$$, $end$$30$$, $width$$144$$, $height$$121$$, $size$$38$$ - 1) : $size$$38$$
}
function $JSCompiler_StaticMethods_calculateDurationY$$($JSCompiler_StaticMethods_calculateDurationY$self$$, $item$$90$$, $durationMarkers$$3$$) {
  var $index$$198$$ = $durationMarkers$$3$$.length, $startTime$$17$$ = $item$$90$$.getTime(), $y$$185$$ = $item$$90$$.$_durationLevel$;
  $y$$185$$ == $JSCompiler_alias_NULL$$ && ($y$$185$$ = 1);
  for(var $i$$662$$ = 0;$i$$662$$ < $index$$198$$;$i$$662$$++) {
    var $currItem$$2_curry$$2$$ = $durationMarkers$$3$$[$i$$662$$];
    if($currItem$$2_curry$$2$$ != $item$$90$$) {
      var $currEndTime$$1$$ = $currItem$$2_curry$$2$$.$_endTime$;
      if($currEndTime$$1$$ != $JSCompiler_alias_NULL$$) {
        var $currStartTime$$1$$ = $currItem$$2_curry$$2$$.getTime(), $currItem$$2_curry$$2$$ = $currItem$$2_curry$$2$$.$_durationLevel$;
        $currItem$$2_curry$$2$$ == $JSCompiler_alias_NULL$$ && ($currItem$$2_curry$$2$$ = 1);
        $startTime$$17$$ >= $currStartTime$$1$$ && ($startTime$$17$$ <= $currEndTime$$1$$ && $y$$185$$ == $currItem$$2_curry$$2$$) && ($y$$185$$ = $currItem$$2_curry$$2$$ + 1, $item$$90$$.$_durationLevel$ = $y$$185$$, $y$$185$$ = $JSCompiler_StaticMethods_calculateDurationY$$($JSCompiler_StaticMethods_calculateDurationY$self$$, $item$$90$$, $durationMarkers$$3$$))
      }
    }
  }
  $y$$185$$ > $JSCompiler_StaticMethods_calculateDurationY$self$$.$_maxDurationY$ && ($JSCompiler_StaticMethods_calculateDurationY$self$$.$_maxDurationY$ = $y$$185$$);
  return $y$$185$$
}
$JSCompiler_prototypeAlias$$ = dvt.$TimelineOverview$.prototype;
$JSCompiler_prototypeAlias$$.$HandleShapeMouseOver$ = function $$JSCompiler_prototypeAlias$$$$HandleShapeMouseOver$$($event$$545_isSelected$$3_itemId$$4$$) {
  var $drawable$$11$$ = dvt.$TimelineOverview$.$superclass$.$HandleShapeMouseOver$.call(this, $event$$545_isSelected$$3_itemId$$4$$);
  if($drawable$$11$$ != $JSCompiler_alias_NULL$$) {
    if($drawable$$11$$.$_node$ != $JSCompiler_alias_NULL$$) {
      var $evt$$55_i$$663_tooltip$$30$$ = $drawable$$11$$.$_node$.$_desc$;
      $evt$$55_i$$663_tooltip$$30$$ != $JSCompiler_alias_NULL$$ && this.$getCtx$().$getTooltipManager$().$showDatatip$($event$$545_isSelected$$3_itemId$$4$$.pageX, $event$$545_isSelected$$3_itemId$$4$$.pageY, $evt$$55_i$$663_tooltip$$30$$, "#000000");
      this.$isFlashEnvironment$() && this.setCursor("pointer")
    }
    if("none" != this.$_selectionMode$) {
      $event$$545_isSelected$$3_itemId$$4$$ = $JSCompiler_alias_FALSE$$;
      if(this.$_selectedMarkers$ != $JSCompiler_alias_NULL$$) {
        for($evt$$55_i$$663_tooltip$$30$$ = 0;$evt$$55_i$$663_tooltip$$30$$ < this.$_selectedMarkers$.length;$evt$$55_i$$663_tooltip$$30$$++) {
          if($drawable$$11$$ == this.$_selectedMarkers$[$evt$$55_i$$663_tooltip$$30$$]) {
            $event$$545_isSelected$$3_itemId$$4$$ = $JSCompiler_alias_TRUE$$;
            break
          }
        }
      }
      $event$$545_isSelected$$3_itemId$$4$$ || ($event$$545_isSelected$$3_itemId$$4$$ = this.$getItemId$($drawable$$11$$), $evt$$55_i$$663_tooltip$$30$$ = new $DvtTimelineOverviewEvent$$("highlight"), $evt$$55_i$$663_tooltip$$30$$.$addParam$("itemId", $event$$545_isSelected$$3_itemId$$4$$), this.dispatchEvent($evt$$55_i$$663_tooltip$$30$$), $JSCompiler_StaticMethods_highlightMarker$$(this, $drawable$$11$$))
    }
  }
};
$JSCompiler_prototypeAlias$$.$HandleShapeMouseOut$ = function $$JSCompiler_prototypeAlias$$$$HandleShapeMouseOut$$($drawable$$12_event$$546$$) {
  $drawable$$12_event$$546$$ = dvt.$TimelineOverview$.$superclass$.$HandleShapeMouseOut$.call(this, $drawable$$12_event$$546$$);
  if($drawable$$12_event$$546$$ != $JSCompiler_alias_NULL$$ && !this.$isMovable$($drawable$$12_event$$546$$)) {
    this.$getCtx$().$getTooltipManager$().$hideTooltip$();
    var $isSelected$$4_itemId$$5$$ = $JSCompiler_alias_FALSE$$;
    if(this.$_selectedMarkers$ != $JSCompiler_alias_NULL$$) {
      for(var $evt$$56_i$$664$$ = 0;$evt$$56_i$$664$$ < this.$_selectedMarkers$.length;$evt$$56_i$$664$$++) {
        if($drawable$$12_event$$546$$ == this.$_selectedMarkers$[$evt$$56_i$$664$$]) {
          $isSelected$$4_itemId$$5$$ = $JSCompiler_alias_TRUE$$;
          break
        }
      }
    }
    $isSelected$$4_itemId$$5$$ || ($isSelected$$4_itemId$$5$$ = this.$getItemId$($drawable$$12_event$$546$$), $evt$$56_i$$664$$ = new $DvtTimelineOverviewEvent$$("unhighlight"), $evt$$56_i$$664$$.$addParam$("itemId", $isSelected$$4_itemId$$5$$), this.dispatchEvent($evt$$56_i$$664$$), $JSCompiler_StaticMethods_unhighlightMarker$$(this, $drawable$$12_event$$546$$))
  }
};
$JSCompiler_prototypeAlias$$.$HandleShapeClick$ = function $$JSCompiler_prototypeAlias$$$$HandleShapeClick$$($event$$547_isMultiSelect$$inline_5261_slidingWindow$$inline_5264_time$$inline_5262$$, $drawable$$13_newPos$$inline_5265_pageX$$9$$, $evt$$inline_5263_itemId$$inline_6787_pageY$$9$$) {
  $drawable$$13_newPos$$inline_5265_pageX$$9$$ = dvt.$TimelineOverview$.$superclass$.$HandleShapeClick$.call(this, $event$$547_isMultiSelect$$inline_5261_slidingWindow$$inline_5264_time$$inline_5262$$, $drawable$$13_newPos$$inline_5265_pageX$$9$$, $evt$$inline_5263_itemId$$inline_6787_pageY$$9$$);
  if($drawable$$13_newPos$$inline_5265_pageX$$9$$ != $JSCompiler_alias_NULL$$ && ($event$$547_isMultiSelect$$inline_5261_slidingWindow$$inline_5264_time$$inline_5262$$ = $event$$547_isMultiSelect$$inline_5261_slidingWindow$$inline_5264_time$$inline_5262$$.ctrlKey || $event$$547_isMultiSelect$$inline_5261_slidingWindow$$inline_5264_time$$inline_5262$$.shiftKey || dvt.$Agent$.$isTouchDevice$(), "none" != this.$_selectionMode$)) {
    $evt$$inline_5263_itemId$$inline_6787_pageY$$9$$ = this.$getItemId$($drawable$$13_newPos$$inline_5265_pageX$$9$$);
    var $evt$$inline_6788$$ = new $DvtTimelineOverviewEvent$$("selection");
    $evt$$inline_6788$$.$addParam$("itemId", $evt$$inline_5263_itemId$$inline_6787_pageY$$9$$);
    $evt$$inline_6788$$.$addParam$("multiSelect", $event$$547_isMultiSelect$$inline_5261_slidingWindow$$inline_5264_time$$inline_5262$$);
    this.dispatchEvent($evt$$inline_6788$$);
    $event$$547_isMultiSelect$$inline_5261_slidingWindow$$inline_5264_time$$inline_5262$$ = $drawable$$13_newPos$$inline_5265_pageX$$9$$.$_node$.getTime();
    $event$$547_isMultiSelect$$inline_5261_slidingWindow$$inline_5264_time$$inline_5262$$ != $JSCompiler_alias_NULL$$ && ($evt$$inline_5263_itemId$$inline_6787_pageY$$9$$ = new $DvtTimelineOverviewEvent$$($DvtTimelineOverviewEvent$SUBTYPE_SCROLL_TIME$$), $evt$$inline_5263_itemId$$inline_6787_pageY$$9$$.setTime($event$$547_isMultiSelect$$inline_5261_slidingWindow$$inline_5264_time$$inline_5262$$), this.dispatchEvent($evt$$inline_5263_itemId$$inline_6787_pageY$$9$$), $event$$547_isMultiSelect$$inline_5261_slidingWindow$$inline_5264_time$$inline_5262$$ = 
    this.$getSlidingWindow$(), $drawable$$13_newPos$$inline_5265_pageX$$9$$ = this.$isVertical$() ? this.$getX$($drawable$$13_newPos$$inline_5265_pageX$$9$$) - $event$$547_isMultiSelect$$inline_5261_slidingWindow$$inline_5264_time$$inline_5262$$.getHeight() / 2 : this.$getX$($drawable$$13_newPos$$inline_5265_pageX$$9$$) - $event$$547_isMultiSelect$$inline_5261_slidingWindow$$inline_5264_time$$inline_5262$$.getWidth() / 2, this.$animateSlidingWindow$($drawable$$13_newPos$$inline_5265_pageX$$9$$))
  }
};
function $JSCompiler_StaticMethods_highlightMarker$$($JSCompiler_StaticMethods_highlightMarker$self$$, $drawable$$17$$) {
  if($JSCompiler_StaticMethods_highlightMarker$self$$.$_selectedMarkers$ != $JSCompiler_alias_NULL$$) {
    for(var $i$$665$$ = 0;$i$$665$$ < $JSCompiler_StaticMethods_highlightMarker$self$$.$_selectedMarkers$.length;$i$$665$$++) {
      if($drawable$$17$$ == $JSCompiler_StaticMethods_highlightMarker$self$$.$_selectedMarkers$[$i$$665$$]) {
        return
      }
    }
  }
  $JSCompiler_StaticMethods_highlightMarker$self$$.$applyState$($drawable$$17$$, dvt.$TimelineOverview$.$HOVER_STATE$)
}
function $JSCompiler_StaticMethods_unhighlightMarker$$($JSCompiler_StaticMethods_unhighlightMarker$self$$, $drawable$$18$$) {
  if($JSCompiler_StaticMethods_unhighlightMarker$self$$.$_selectedMarkers$ != $JSCompiler_alias_NULL$$) {
    for(var $i$$666$$ = 0;$i$$666$$ < $JSCompiler_StaticMethods_unhighlightMarker$self$$.$_selectedMarkers$.length;$i$$666$$++) {
      if($drawable$$18$$ == $JSCompiler_StaticMethods_unhighlightMarker$self$$.$_selectedMarkers$[$i$$666$$]) {
        return
      }
    }
  }
  $JSCompiler_StaticMethods_unhighlightMarker$self$$.$applyState$($drawable$$18$$, dvt.$TimelineOverview$.$ENABLED_STATE$)
}
function $JSCompiler_StaticMethods_addSelectedMarker$$($JSCompiler_StaticMethods_addSelectedMarker$self$$, $drawable$$22$$) {
  $JSCompiler_StaticMethods_addSelectedMarker$self$$.$_selectedMarkers$ == $JSCompiler_alias_NULL$$ && ($JSCompiler_StaticMethods_addSelectedMarker$self$$.$_selectedMarkers$ = []);
  var $lastSelectedMarker$$ = $JSCompiler_alias_NULL$$;
  0 < $JSCompiler_StaticMethods_addSelectedMarker$self$$.$_selectedMarkers$.length && ($lastSelectedMarker$$ = $JSCompiler_StaticMethods_addSelectedMarker$self$$.$_selectedMarkers$[$JSCompiler_StaticMethods_addSelectedMarker$self$$.$_selectedMarkers$.length - 1]);
  $JSCompiler_StaticMethods_addSelectedMarker$self$$.$_selectedMarkers$.push($drawable$$22$$);
  $lastSelectedMarker$$ != $JSCompiler_alias_NULL$$ && $JSCompiler_StaticMethods_addSelectedMarker$self$$.$applyState$($lastSelectedMarker$$, dvt.$TimelineOverview$.$SELECTED_STATE$);
  $JSCompiler_StaticMethods_addSelectedMarker$self$$.$applyState$($drawable$$22$$, dvt.$TimelineOverview$.$ACTIVE_SELECTED_STATE$)
}
$JSCompiler_prototypeAlias$$.$applyState$ = function $$JSCompiler_prototypeAlias$$$$applyState$$($drawable$$25$$, $state$$99$$) {
  if($drawable$$25$$ instanceof dvt.$SimpleMarker$) {
    var $borderWidth$$18_requiresBorderMarker$$ = $JSCompiler_alias_FALSE$$, $requiresGlowMarker$$ = $JSCompiler_alias_FALSE$$;
    if("solid" == this.$getStyle$($state$$99$$, dvt.$TimelineOverview$.$BORDER_STYLE$)) {
      var $borderWidth$$18_requiresBorderMarker$$ = $JSCompiler_alias_TRUE$$, $borderColor$$47_stroke$$102$$ = this.$getStyle$($state$$99$$, dvt.$TimelineOverview$.$BORDER_COLOR$);
      $borderColor$$47_stroke$$102$$ == $JSCompiler_alias_NULL$$ && ($borderColor$$47_stroke$$102$$ = "#000000");
      var $glowColor_glowStroke_width$$inline_5271$$ = this.$getStyle$($state$$99$$, dvt.$TimelineOverview$.$GLOW_COLOR$);
      $glowColor_glowStroke_width$$inline_5271$$ != $JSCompiler_alias_NULL$$ && "none" != $glowColor_glowStroke_width$$inline_5271$$ && ($requiresGlowMarker$$ = $JSCompiler_alias_TRUE$$)
    }
    var $borderMarker$$ = $drawable$$25$$.$_borderMarker$, $glowMarker_glowOffset$$ = $drawable$$25$$.$_glowMarker$;
    !$borderWidth$$18_requiresBorderMarker$$ && $borderMarker$$ != $JSCompiler_alias_NULL$$ ? (this.removeChild($borderMarker$$), $drawable$$25$$.$_borderMarker$ = $JSCompiler_alias_NULL$$, $glowMarker_glowOffset$$ != $JSCompiler_alias_NULL$$ && (this.removeChild($glowMarker_glowOffset$$), $drawable$$25$$.$_glowMarker$ = $JSCompiler_alias_NULL$$)) : !$requiresGlowMarker$$ && $glowMarker_glowOffset$$ != $JSCompiler_alias_NULL$$ && (this.removeChild($glowMarker_glowOffset$$), $drawable$$25$$.$_glowMarker$ = 
    $JSCompiler_alias_NULL$$);
    var $borderColor$$inline_5270_id$$211_markerType$$1$$ = $drawable$$25$$.$getType$();
    if($borderWidth$$18_requiresBorderMarker$$) {
      var $borderWidth$$18_requiresBorderMarker$$ = parseInt(this.$getStyle$($state$$99$$, dvt.$TimelineOverview$.$BORDER_WIDTH$), 10), $borderOffset$$1$$ = parseInt(this.$getStyle$($state$$99$$, dvt.$TimelineOverview$.$BORDER_OFFSET$), 10);
      if($borderMarker$$ == $JSCompiler_alias_NULL$$) {
        if($borderColor$$inline_5270_id$$211_markerType$$1$$ == dvt.$SimpleMarker$.$CIRCLE$) {
          this.$isFlashEnvironment$() && ($borderOffset$$1$$ = 0);
          var $width$$147$$ = ($drawable$$25$$.$getDimensions$().$w$ + 2 * $borderOffset$$1$$) * $drawable$$25$$.$getScaleX$(), $height$$124$$ = ($drawable$$25$$.$getDimensions$().$h$ + 2 * $borderOffset$$1$$) * $drawable$$25$$.$getScaleY$(), $cx$$38$$ = this.$getX$($drawable$$25$$) - $borderOffset$$1$$ + $width$$147$$ / 2, $cy$$39$$ = this.$getY$($drawable$$25$$) - $borderOffset$$1$$ + $height$$124$$ / 2
        }else {
          this.$isVertical$() ? ($width$$147$$ = ($drawable$$25$$.$getDimensions$().$w$ + ($borderWidth$$18_requiresBorderMarker$$ + 1)) * $drawable$$25$$.$getScaleX$(), $height$$124$$ = ($drawable$$25$$.$getDimensions$().$h$ + ($borderWidth$$18_requiresBorderMarker$$ + 1)) * $drawable$$25$$.$getScaleY$(), $cx$$38$$ = this.$getY$($drawable$$25$$) - ($borderWidth$$18_requiresBorderMarker$$ + 1) / 2 + $width$$147$$ / 2, $cy$$39$$ = this.$getX$($drawable$$25$$) - ($borderWidth$$18_requiresBorderMarker$$ + 
          1) / 2 + $height$$124$$ / 2) : ($width$$147$$ = ($drawable$$25$$.$getDimensions$().$w$ + 2 * $borderOffset$$1$$) * $drawable$$25$$.$getScaleX$(), $height$$124$$ = ($drawable$$25$$.$getDimensions$().$h$ + 2 * $borderOffset$$1$$) * $drawable$$25$$.$getScaleY$(), $cx$$38$$ = this.$getX$($drawable$$25$$) - $borderOffset$$1$$ + $width$$147$$ / 2, $cy$$39$$ = this.$getY$($drawable$$25$$) - $borderOffset$$1$$ + $height$$124$$ / 2)
        }
        $borderMarker$$ = new dvt.$SimpleMarker$(this.$getCtx$(), $borderColor$$inline_5270_id$$211_markerType$$1$$, $JSCompiler_alias_NULL$$, $cx$$38$$, $cy$$39$$, $width$$147$$, $height$$124$$, $JSCompiler_alias_NULL$$, $drawable$$25$$.getId() + "_border");
        this.$addChildAt$($borderMarker$$, this.$getChildIndex$($drawable$$25$$));
        $drawable$$25$$.$_borderMarker$ = $borderMarker$$;
        $borderMarker$$.$setFill$(this.$_markerBorderFill$)
      }
      $borderColor$$47_stroke$$102$$ = new dvt.$SolidStroke$($borderColor$$47_stroke$$102$$, this.$getStyle$($state$$99$$, dvt.$TimelineOverview$.$BORDER_OPACITY$), $borderWidth$$18_requiresBorderMarker$$);
      $borderMarker$$.$setStroke$($borderColor$$47_stroke$$102$$);
      (this.$isVertical$() || $borderColor$$inline_5270_id$$211_markerType$$1$$ == dvt.$SimpleMarker$.$RECTANGLE$ || $borderColor$$inline_5270_id$$211_markerType$$1$$ == dvt.$SimpleMarker$.$DIAMOND$ || $borderColor$$inline_5270_id$$211_markerType$$1$$ == dvt.$SimpleMarker$.$TRIANGLE_UP$ || $borderColor$$inline_5270_id$$211_markerType$$1$$ == dvt.$SimpleMarker$.$TRIANGLE_DOWN$ || $borderColor$$inline_5270_id$$211_markerType$$1$$ == dvt.$SimpleMarker$.$PLUS$) && "false" != this.$_defaultMarkerStyles$.$pixelHinting$ && 
      $borderMarker$$.$setPixelHinting$();
      $requiresGlowMarker$$ && ($glowMarker_glowOffset$$ == $JSCompiler_alias_NULL$$ && ($glowMarker_glowOffset$$ = $borderOffset$$1$$ - $borderWidth$$18_requiresBorderMarker$$, $borderColor$$inline_5270_id$$211_markerType$$1$$ == dvt.$SimpleMarker$.$CIRCLE$ ? (this.$isFlashEnvironment$() && ($glowMarker_glowOffset$$ = 0), $width$$147$$ = ($drawable$$25$$.$getDimensions$().$w$ + 2 * $glowMarker_glowOffset$$) * $drawable$$25$$.$getScaleX$(), $height$$124$$ = ($drawable$$25$$.$getDimensions$().$h$ + 
      2 * $glowMarker_glowOffset$$) * $drawable$$25$$.$getScaleY$(), $cx$$38$$ = this.$getX$($drawable$$25$$) - $glowMarker_glowOffset$$ + $width$$147$$ / 2, $cy$$39$$ = this.$getY$($drawable$$25$$) - $glowMarker_glowOffset$$ + $height$$124$$ / 2) : this.$isVertical$() ? ($width$$147$$ = ($drawable$$25$$.$getDimensions$().$w$ + 3) * $drawable$$25$$.$getScaleX$(), $height$$124$$ = ($drawable$$25$$.$getDimensions$().$h$ + 3) * $drawable$$25$$.$getScaleY$(), $cx$$38$$ = this.$getY$($drawable$$25$$) + 
      $width$$147$$ / 2, $cy$$39$$ = this.$getX$($drawable$$25$$) - 1 + $height$$124$$ / 2) : ($width$$147$$ = ($drawable$$25$$.$getDimensions$().$w$ + 2 * $glowMarker_glowOffset$$) * $drawable$$25$$.$getScaleX$(), $height$$124$$ = ($drawable$$25$$.$getDimensions$().$h$ + 2 * $glowMarker_glowOffset$$) * $drawable$$25$$.$getScaleY$(), $cx$$38$$ = this.$getX$($drawable$$25$$) - $glowMarker_glowOffset$$ + $width$$147$$ / 2, $cy$$39$$ = this.$getY$($drawable$$25$$) - $glowMarker_glowOffset$$ + $height$$124$$ / 
      2), $glowMarker_glowOffset$$ = new dvt.$SimpleMarker$(this.$getCtx$(), $borderColor$$inline_5270_id$$211_markerType$$1$$, $JSCompiler_alias_NULL$$, $cx$$38$$, $cy$$39$$, $width$$147$$, $height$$124$$, $JSCompiler_alias_NULL$$, $drawable$$25$$.getId() + "_glow"), this.$addChildAt$($glowMarker_glowOffset$$, this.$getChildIndex$($borderMarker$$)), $drawable$$25$$.$_glowMarker$ = $glowMarker_glowOffset$$, $glowMarker_glowOffset$$.$setFill$(this.$_markerBorderFill$)), $glowColor_glowStroke_width$$inline_5271$$ = 
      new dvt.$SolidStroke$($glowColor_glowStroke_width$$inline_5271$$, this.$getStyle$($state$$99$$, dvt.$TimelineOverview$.$GLOW_OPACITY$), 4), $glowMarker_glowOffset$$.$setStroke$($glowColor_glowStroke_width$$inline_5271$$), (this.$isVertical$() || $borderColor$$inline_5270_id$$211_markerType$$1$$ == dvt.$SimpleMarker$.$RECTANGLE$ || $borderColor$$inline_5270_id$$211_markerType$$1$$ == dvt.$SimpleMarker$.$DIAMOND$ || $borderColor$$inline_5270_id$$211_markerType$$1$$ == dvt.$SimpleMarker$.$TRIANGLE_UP$ || 
      $borderColor$$inline_5270_id$$211_markerType$$1$$ == dvt.$SimpleMarker$.$TRIANGLE_DOWN$ || $borderColor$$inline_5270_id$$211_markerType$$1$$ == dvt.$SimpleMarker$.$PLUS$) && "false" != this.$_defaultMarkerStyles$.$pixelHinting$ && $glowMarker_glowOffset$$.$setPixelHinting$())
    }
  }else {
    if(($borderColor$$inline_5270_id$$211_markerType$$1$$ = $drawable$$25$$.getId()) && "_drn_" == $borderColor$$inline_5270_id$$211_markerType$$1$$.substring(0, 5)) {
      $borderColor$$inline_5270_id$$211_markerType$$1$$ = this.$getStyle$($state$$99$$, dvt.$TimelineOverview$.$DURATION_BORDER_COLOR$), $borderColor$$inline_5270_id$$211_markerType$$1$$ == $JSCompiler_alias_NULL$$ && ($borderColor$$inline_5270_id$$211_markerType$$1$$ = "#000000"), $glowColor_glowStroke_width$$inline_5271$$ = parseInt(this.$getStyle$($state$$99$$, dvt.$TimelineOverview$.$DURATION_BORDER_WIDTH$), 10), $drawable$$25$$.$setStroke$(new dvt.$SolidStroke$($borderColor$$inline_5270_id$$211_markerType$$1$$, 
      1, $glowColor_glowStroke_width$$inline_5271$$))
    }
  }
};
$JSCompiler_prototypeAlias$$.$getAutomation$ = function $$JSCompiler_prototypeAlias$$$$getAutomation$$() {
  this.$_Automation$ || (this.$_Automation$ = new $DvtTimelineOverviewAutomation$$(this));
  return this.$_Automation$
};
dvt.$TimelineOverview$.prototype.getAutomation = dvt.$TimelineOverview$.prototype.$getAutomation$;
function $DvtTimelineOverviewParser$$($timelineOverview$$) {
  this.Init($timelineOverview$$)
}
dvt.$Obj$.$createSubclass$($DvtTimelineOverviewParser$$, dvt.$Obj$, "DvtTimelineOverviewParser");
$JSCompiler_prototypeAlias$$ = $DvtTimelineOverviewParser$$.prototype;
$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($overview$$3$$) {
  this.$_view$ = $overview$$3$$;
  this.$_parser$ = new dvt.$XmlParser$($overview$$3$$.$getCtx$())
};
$JSCompiler_prototypeAlias$$.parse = function $$JSCompiler_prototypeAlias$$$parse$($ret$$68_xmlString$$7$$) {
  var $childNodes$$21_rootNode$$4$$ = this.$_parser$.parse($ret$$68_xmlString$$7$$);
  $ret$$68_xmlString$$7$$ = this.$ParseRootAttributes$($childNodes$$21_rootNode$$4$$);
  var $childNodes$$21_rootNode$$4$$ = $childNodes$$21_rootNode$$4$$.$getChildNodes$(), $JSCompiler_inline_result$$98_xmlNode$$inline_5277$$;
  if($JSCompiler_inline_result$$98_xmlNode$$inline_5277$$ = $childNodes$$21_rootNode$$4$$[0]) {
    var $ret$$inline_5278$$ = {};
    $ret$$inline_5278$$.width = $JSCompiler_inline_result$$98_xmlNode$$inline_5277$$.$getAttr$("width");
    $ret$$inline_5278$$.height = $JSCompiler_inline_result$$98_xmlNode$$inline_5277$$.$getAttr$("height");
    $ret$$inline_5278$$.$ticks$ = $JSCompiler_inline_result$$98_xmlNode$$inline_5277$$.$getChildNodes$();
    $JSCompiler_inline_result$$98_xmlNode$$inline_5277$$ = $ret$$inline_5278$$
  }else {
    $JSCompiler_inline_result$$98_xmlNode$$inline_5277$$ = $JSCompiler_alias_NULL$$
  }
  $ret$$68_xmlString$$7$$.$timeAxisInfo$ = $JSCompiler_inline_result$$98_xmlNode$$inline_5277$$;
  $ret$$68_xmlString$$7$$.$markers$ = this.$_parseDataNode$($childNodes$$21_rootNode$$4$$[1], $ret$$68_xmlString$$7$$.$defaultMarkerStyles$);
  2 < $childNodes$$21_rootNode$$4$$.length && ($ret$$68_xmlString$$7$$.$formattedTimeRanges$ = !$childNodes$$21_rootNode$$4$$[2] ? $JSCompiler_alias_NULL$$ : $childNodes$$21_rootNode$$4$$[2].$getChildNodes$());
  return $ret$$68_xmlString$$7$$
};
$JSCompiler_prototypeAlias$$.$ParseRootAttributes$ = function $$JSCompiler_prototypeAlias$$$$ParseRootAttributes$$($xmlNode$$70$$) {
  var $ret$$69$$ = {};
  $ret$$69$$.start = parseInt($xmlNode$$70$$.$getAttr$("start"));
  $ret$$69$$.end = parseInt($xmlNode$$70$$.$getAttr$("end"));
  $ret$$69$$.width = parseInt($xmlNode$$70$$.$getAttr$("width"));
  $ret$$69$$.$renderStart$ = parseInt($xmlNode$$70$$.$getAttr$("renstart"));
  $ret$$69$$.currentTime = parseInt($xmlNode$$70$$.$getAttr$("ocd"));
  $ret$$69$$.orientation = $xmlNode$$70$$.$getAttr$("orn");
  $ret$$69$$.$overviewPosition$ = $xmlNode$$70$$.$getAttr$("ovp");
  $ret$$69$$.$selectionMode$ = $xmlNode$$70$$.$getAttr$("selmode");
  $ret$$69$$.$isRtl$ = $xmlNode$$70$$.$getAttr$("rtl");
  $ret$$69$$.borderTopStyle = $xmlNode$$70$$.$getAttr$("_bts");
  $ret$$69$$.borderTopColor = $xmlNode$$70$$.$getAttr$("_btc");
  $ret$$69$$.$seriesIds$ = $xmlNode$$70$$.$getAttr$("sid");
  $ret$$69$$.$animationOnClick$ = $xmlNode$$70$$.$getAttr$("_aoc");
  var $borderStyles_defaultMarkerStyles$$ = {};
  $borderStyles_defaultMarkerStyles$$.shape = $xmlNode$$70$$.$getAttr$("_ds");
  $borderStyles_defaultMarkerStyles$$.$scaleX$ = $xmlNode$$70$$.$getAttr$("_dsx");
  $borderStyles_defaultMarkerStyles$$.$scaleY$ = $xmlNode$$70$$.$getAttr$("_dsy");
  $borderStyles_defaultMarkerStyles$$.opacity = $xmlNode$$70$$.$getAttr$("_do");
  $borderStyles_defaultMarkerStyles$$.color = $xmlNode$$70$$.$getAttr$("_fc");
  $borderStyles_defaultMarkerStyles$$.$pixelHinting$ = $xmlNode$$70$$.$getAttr$("_ph");
  $ret$$69$$.$defaultMarkerStyles$ = $borderStyles_defaultMarkerStyles$$;
  $ret$$69$$.$handleFillColor$ = $xmlNode$$70$$.$getAttr$("_hfc");
  $ret$$69$$.$handleTextureColor$ = $xmlNode$$70$$.$getAttr$("_htc");
  $ret$$69$$.$handleBackgroundImage$ = $xmlNode$$70$$.$getAttr$("_hbi");
  $ret$$69$$.$handleWidth$ = $xmlNode$$70$$.$getAttr$("_hw");
  $ret$$69$$.$handleHeight$ = $xmlNode$$70$$.$getAttr$("_hh");
  $ret$$69$$.$windowBackgroundColor$ = $xmlNode$$70$$.$getAttr$("_wbc");
  $ret$$69$$.$windowBorderTopStyle$ = $xmlNode$$70$$.$getAttr$("_wbts");
  $ret$$69$$.$windowBorderRightStyle$ = $xmlNode$$70$$.$getAttr$("_wbrs");
  $ret$$69$$.$windowBorderBottomStyle$ = $xmlNode$$70$$.$getAttr$("_wbbs");
  $ret$$69$$.$windowBorderLeftStyle$ = $xmlNode$$70$$.$getAttr$("_wbls");
  $ret$$69$$.$windowBorderTopColor$ = $xmlNode$$70$$.$getAttr$("_wbtc");
  $ret$$69$$.$windowBorderRightColor$ = $xmlNode$$70$$.$getAttr$("_wbrc");
  $ret$$69$$.$windowBorderBottomColor$ = $xmlNode$$70$$.$getAttr$("_wbbc");
  $ret$$69$$.$windowBorderLeftColor$ = $xmlNode$$70$$.$getAttr$("_wblc");
  $ret$$69$$.$overviewBackgroundColor$ = $xmlNode$$70$$.$getAttr$("_obc");
  $ret$$69$$.$currentTimeIndicatorColor$ = $xmlNode$$70$$.$getAttr$("_ctic");
  $ret$$69$$.$timeIndicatorColor$ = $xmlNode$$70$$.$getAttr$("_tic");
  $ret$$69$$.$timeAxisBarColor$ = $xmlNode$$70$$.$getAttr$("_tabc");
  $ret$$69$$.$timeAxisBarOpacity$ = $xmlNode$$70$$.$getAttr$("_tabo");
  $ret$$69$$.$labelStyle$ = $xmlNode$$70$$.$getAttr$("_ls");
  $borderStyles_defaultMarkerStyles$$ = {};
  $borderStyles_defaultMarkerStyles$$._bs = $xmlNode$$70$$.$getAttr$("_bs");
  $borderStyles_defaultMarkerStyles$$._bc = $xmlNode$$70$$.$getAttr$("_bc");
  $borderStyles_defaultMarkerStyles$$._bw = $xmlNode$$70$$.$getAttr$("_bw");
  $borderStyles_defaultMarkerStyles$$._bof = $xmlNode$$70$$.$getAttr$("_bof");
  $borderStyles_defaultMarkerStyles$$._bo = $xmlNode$$70$$.$getAttr$("_bo");
  $borderStyles_defaultMarkerStyles$$._gc = $xmlNode$$70$$.$getAttr$("_gc");
  $borderStyles_defaultMarkerStyles$$._go = $xmlNode$$70$$.$getAttr$("_go");
  $borderStyles_defaultMarkerStyles$$._dbs = $xmlNode$$70$$.$getAttr$("_dbs");
  $borderStyles_defaultMarkerStyles$$._dbc = $xmlNode$$70$$.$getAttr$("_dbc");
  $borderStyles_defaultMarkerStyles$$._dbw = $xmlNode$$70$$.$getAttr$("_dbw");
  $borderStyles_defaultMarkerStyles$$._hbs = $xmlNode$$70$$.$getAttr$("_hbs");
  $borderStyles_defaultMarkerStyles$$._hbc = $xmlNode$$70$$.$getAttr$("_hbc");
  $borderStyles_defaultMarkerStyles$$._hbw = $xmlNode$$70$$.$getAttr$("_hbw");
  $borderStyles_defaultMarkerStyles$$._hbof = $xmlNode$$70$$.$getAttr$("_hbof");
  $borderStyles_defaultMarkerStyles$$._hbo = $xmlNode$$70$$.$getAttr$("_hbo");
  $borderStyles_defaultMarkerStyles$$._hgc = $xmlNode$$70$$.$getAttr$("_hgc");
  $borderStyles_defaultMarkerStyles$$._hgo = $xmlNode$$70$$.$getAttr$("_hgo");
  $borderStyles_defaultMarkerStyles$$._hdbs = $xmlNode$$70$$.$getAttr$("_hdbs");
  $borderStyles_defaultMarkerStyles$$._hdbc = $xmlNode$$70$$.$getAttr$("_hdbc");
  $borderStyles_defaultMarkerStyles$$._hdbw = $xmlNode$$70$$.$getAttr$("_hdbw");
  $borderStyles_defaultMarkerStyles$$._sbs = $xmlNode$$70$$.$getAttr$("_sbs");
  $borderStyles_defaultMarkerStyles$$._sbc = $xmlNode$$70$$.$getAttr$("_sbc");
  $borderStyles_defaultMarkerStyles$$._sbw = $xmlNode$$70$$.$getAttr$("_sbw");
  $borderStyles_defaultMarkerStyles$$._sbof = $xmlNode$$70$$.$getAttr$("_sbof");
  $borderStyles_defaultMarkerStyles$$._sbo = $xmlNode$$70$$.$getAttr$("_sbo");
  $borderStyles_defaultMarkerStyles$$._sgc = $xmlNode$$70$$.$getAttr$("_sgc");
  $borderStyles_defaultMarkerStyles$$._sgo = $xmlNode$$70$$.$getAttr$("_sgo");
  $borderStyles_defaultMarkerStyles$$._sdbs = $xmlNode$$70$$.$getAttr$("_sdbs");
  $borderStyles_defaultMarkerStyles$$._sdbc = $xmlNode$$70$$.$getAttr$("_sdbc");
  $borderStyles_defaultMarkerStyles$$._sdbw = $xmlNode$$70$$.$getAttr$("_sdbw");
  $borderStyles_defaultMarkerStyles$$._asbs = $xmlNode$$70$$.$getAttr$("_asbs");
  $borderStyles_defaultMarkerStyles$$._asbc = $xmlNode$$70$$.$getAttr$("_asbc");
  $borderStyles_defaultMarkerStyles$$._asbw = $xmlNode$$70$$.$getAttr$("_asbw");
  $borderStyles_defaultMarkerStyles$$._asbof = $xmlNode$$70$$.$getAttr$("_asbof");
  $borderStyles_defaultMarkerStyles$$._asbo = $xmlNode$$70$$.$getAttr$("_asbo");
  $borderStyles_defaultMarkerStyles$$._asgc = $xmlNode$$70$$.$getAttr$("_asgc");
  $borderStyles_defaultMarkerStyles$$._asgo = $xmlNode$$70$$.$getAttr$("_asgo");
  $borderStyles_defaultMarkerStyles$$._asdbs = $xmlNode$$70$$.$getAttr$("_asdbs");
  $borderStyles_defaultMarkerStyles$$._asdbc = $xmlNode$$70$$.$getAttr$("_asdbc");
  $borderStyles_defaultMarkerStyles$$._asdbw = $xmlNode$$70$$.$getAttr$("_asdbw");
  $ret$$69$$.$borderStyles$ = $borderStyles_defaultMarkerStyles$$;
  return $ret$$69$$
};
$JSCompiler_prototypeAlias$$.$_parseDataNode$ = function $$JSCompiler_prototypeAlias$$$$_parseDataNode$$($xmlNode$$71$$, $defaultMarkerStyles$$1$$) {
  if(!$xmlNode$$71$$) {
    return $JSCompiler_alias_NULL$$
  }
  for(var $treeNodes$$1$$ = [], $markers$$11$$ = $xmlNode$$71$$.$getChildNodes$(), $i$$672$$ = 0;$i$$672$$ < $markers$$11$$.length;$i$$672$$++) {
    var $props$$15_treeNode$$1$$ = this.$ParseNodeAttributes$($markers$$11$$[$i$$672$$], $defaultMarkerStyles$$1$$), $props$$15_treeNode$$1$$ = new $DvtTimelineOverviewNode$$(this.$_view$, $props$$15_treeNode$$1$$);
    $treeNodes$$1$$.push($props$$15_treeNode$$1$$)
  }
  return $treeNodes$$1$$
};
$JSCompiler_prototypeAlias$$.$ParseNodeAttributes$ = function $$JSCompiler_prototypeAlias$$$$ParseNodeAttributes$$($xmlNode$$72$$, $defaultMarkerStyles$$2$$) {
  var $ret$$70$$ = {}, $useSkinningDefaults$$ = "true" == $xmlNode$$72$$.$getAttr$("_sd");
  $ret$$70$$.id = $xmlNode$$72$$.$getAttr$("tid");
  $ret$$70$$.$rowKey$ = $xmlNode$$72$$.$getAttr$("rk");
  $ret$$70$$.time = $xmlNode$$72$$.$getAttr$("t");
  $ret$$70$$.$endTime$ = $xmlNode$$72$$.$getAttr$("et");
  $ret$$70$$.shape = $xmlNode$$72$$.$getAttr$("s");
  $useSkinningDefaults$$ && $ret$$70$$.shape == $JSCompiler_alias_NULL$$ && ($ret$$70$$.shape = $defaultMarkerStyles$$2$$.shape);
  $ret$$70$$.$desc$ = $xmlNode$$72$$.$getAttr$("d");
  $ret$$70$$.color = $xmlNode$$72$$.$getAttr$("c");
  $ret$$70$$.$durationFillColor$ = $xmlNode$$72$$.$getAttr$("dfc");
  $useSkinningDefaults$$ && $ret$$70$$.color == $JSCompiler_alias_NULL$$ && ($ret$$70$$.color = $defaultMarkerStyles$$2$$.color);
  $ret$$70$$.$scaleX$ = $xmlNode$$72$$.$getAttr$("sx");
  $useSkinningDefaults$$ && $ret$$70$$.$scaleX$ == $JSCompiler_alias_NULL$$ && ($ret$$70$$.$scaleX$ = $defaultMarkerStyles$$2$$.$scaleX$);
  $ret$$70$$.$scaleY$ = $xmlNode$$72$$.$getAttr$("sy");
  $useSkinningDefaults$$ && $ret$$70$$.$scaleY$ == $JSCompiler_alias_NULL$$ && ($ret$$70$$.$scaleY$ = $defaultMarkerStyles$$2$$.$scaleY$);
  $ret$$70$$.$gradient$ = $xmlNode$$72$$.$getAttr$("g");
  $ret$$70$$.opacity = $xmlNode$$72$$.$getAttr$("o");
  $useSkinningDefaults$$ && $ret$$70$$.opacity == $JSCompiler_alias_NULL$$ && ($ret$$70$$.opacity = $defaultMarkerStyles$$2$$.opacity);
  return $ret$$70$$
};
function $DvtTimelineOverviewNode$$($overview$$4$$, $props$$16$$) {
  this.Init($overview$$4$$, $props$$16$$)
}
dvt.$Obj$.$createSubclass$($DvtTimelineOverviewNode$$, dvt.$Obj$, "DvtTimelineOverviewNode");
$JSCompiler_prototypeAlias$$ = $DvtTimelineOverviewNode$$.prototype;
$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($overview$$5$$, $props$$17$$) {
  this.$_view$ = $overview$$5$$;
  this.$_rowKey$ = $props$$17$$.$rowKey$;
  this.$_id$ = $props$$17$$.id;
  this.$_time$ = parseInt($props$$17$$.time);
  this.$_endTime$ = $props$$17$$.$endTime$ == $JSCompiler_alias_NULL$$ ? $JSCompiler_alias_NULL$$ : parseInt($props$$17$$.$endTime$);
  this.$_shape$ = dvt.$SimpleMarker$.$CIRCLE$;
  "square" == $props$$17$$.shape ? this.$_shape$ = dvt.$SimpleMarker$.$RECTANGLE$ : "plus" == $props$$17$$.shape ? this.$_shape$ = dvt.$SimpleMarker$.$PLUS$ : "diamond" == $props$$17$$.shape ? this.$_shape$ = dvt.$SimpleMarker$.$DIAMOND$ : "triangleUp" == $props$$17$$.shape ? this.$_shape$ = dvt.$SimpleMarker$.$TRIANGLE_UP$ : "triangleDown" == $props$$17$$.shape && (this.$_shape$ = dvt.$SimpleMarker$.$TRIANGLE_DOWN$);
  this.$_desc$ = $props$$17$$.$desc$;
  this.$_color$ = $props$$17$$.color;
  this.$_gradient$ = $props$$17$$.$gradient$;
  $props$$17$$.opacity != $JSCompiler_alias_NULL$$ && (this.$_opacity$ = parseFloat($props$$17$$.opacity));
  $props$$17$$.$scaleX$ != $JSCompiler_alias_NULL$$ && (this.$_scaleX$ = parseFloat($props$$17$$.$scaleX$));
  $props$$17$$.$scaleY$ != $JSCompiler_alias_NULL$$ && (this.$_scaleY$ = parseFloat($props$$17$$.$scaleY$));
  $props$$17$$.$durationFillColor$ != $JSCompiler_alias_NULL$$ && (this.$_durationFillColor$ = $props$$17$$.$durationFillColor$)
};
$JSCompiler_prototypeAlias$$.getId = $JSCompiler_get$$("$_id$");
$JSCompiler_prototypeAlias$$.$getRowKey$ = $JSCompiler_get$$("$_rowKey$");
$JSCompiler_prototypeAlias$$.getTime = $JSCompiler_get$$("$_time$");
$JSCompiler_prototypeAlias$$.$getScaleX$ = $JSCompiler_get$$("$_scaleX$");
$JSCompiler_prototypeAlias$$.$getScaleY$ = $JSCompiler_get$$("$_scaleY$");
$JSCompiler_prototypeAlias$$.$getColor$ = $JSCompiler_get$$("$_color$");
$JSCompiler_prototypeAlias$$.$getShape$ = $JSCompiler_get$$("$_shape$");
$JSCompiler_prototypeAlias$$.$getOpacity$ = $JSCompiler_get$$("$_opacity$");
$JSCompiler_prototypeAlias$$.$getDisplayable$ = $JSCompiler_get$$("$_displayable$");
$JSCompiler_prototypeAlias$$.$setDisplayable$ = $JSCompiler_set$$("$_displayable$");
$JSCompiler_prototypeAlias$$.$getX$ = $JSCompiler_get$$("$_x$");
$JSCompiler_prototypeAlias$$.$setX$ = $JSCompiler_set$$("$_x$");
$JSCompiler_prototypeAlias$$.$getY$ = $JSCompiler_get$$("$_y$");
$JSCompiler_prototypeAlias$$.$setY$ = $JSCompiler_set$$("$_y$");
function $DvtTimelineOverviewEvent$$($type$$164$$) {
  this.Init("timeline");
  this.$_subtype$ = $type$$164$$
}
dvt.$Obj$.$createSubclass$($DvtTimelineOverviewEvent$$, dvt.$OverviewEvent$, "DvtTimelineOverviewEvent");
var $DvtTimelineOverviewEvent$SUBTYPE_SCROLL_TIME$$ = dvt.$OverviewEvent$.$SUBTYPE_SCROLL_TIME$;
$DvtTimelineOverviewEvent$$.prototype.$getItemId$ = function $$DvtTimelineOverviewEvent$$$$$getItemId$$() {
  return this.$getParamValue$("itemId")
};
function $DvtTimelineOverviewAutomation$$($overview$$6$$) {
  this.$_Init$($overview$$6$$)
}
dvt.$Obj$.$createSubclass$($DvtTimelineOverviewAutomation$$, dvt.$Automation$, "DvtTimelineOverviewAutomation");
$DvtTimelineOverviewAutomation$$.prototype.$_Init$ = $JSCompiler_set$$("$_overview$");
$DvtTimelineOverviewAutomation$$.prototype.$GetSubIdForDomElement$ = function $$DvtTimelineOverviewAutomation$$$$$GetSubIdForDomElement$$($arr$$15_displayable$$89_prev$$1$$) {
  var $id$$212_seriesIds$$1_seriesIndex$$127$$ = $arr$$15_displayable$$89_prev$$1$$.getId();
  if($arr$$15_displayable$$89_prev$$1$$ instanceof dvt.$SimpleMarker$) {
    $arr$$15_displayable$$89_prev$$1$$ = $id$$212_seriesIds$$1_seriesIndex$$127$$.split(":");
    if(4 != $arr$$15_displayable$$89_prev$$1$$.length) {
      return $JSCompiler_alias_NULL$$
    }
    $id$$212_seriesIds$$1_seriesIndex$$127$$ = this.$_overview$.$_seriesIds$ == $JSCompiler_alias_NULL$$ ? $JSCompiler_alias_NULL$$ : this.$_overview$.$_seriesIds$.split(" ");
    if($id$$212_seriesIds$$1_seriesIndex$$127$$ != $JSCompiler_alias_NULL$$ && ($id$$212_seriesIds$$1_seriesIndex$$127$$ = dvt.$ArrayUtils$.$getIndex$($id$$212_seriesIds$$1_seriesIndex$$127$$, $arr$$15_displayable$$89_prev$$1$$[1]), -1 < $id$$212_seriesIds$$1_seriesIndex$$127$$)) {
      return"marker[" + $id$$212_seriesIds$$1_seriesIndex$$127$$ + "][" + $arr$$15_displayable$$89_prev$$1$$[2] + "]"
    }
  }else {
    if("window" == $id$$212_seriesIds$$1_seriesIndex$$127$$) {
      return"range_window"
    }
    if("lh" == $id$$212_seriesIds$$1_seriesIndex$$127$$ || "lhb" == $id$$212_seriesIds$$1_seriesIndex$$127$$ || "lbgrh" == $id$$212_seriesIds$$1_seriesIndex$$127$$) {
      return"range_start_handle"
    }
    if("rh" == $id$$212_seriesIds$$1_seriesIndex$$127$$ || "rhb" == $id$$212_seriesIds$$1_seriesIndex$$127$$ || "rbgrh" == $id$$212_seriesIds$$1_seriesIndex$$127$$) {
      return"range_end_handle"
    }
    if("grpy" == $id$$212_seriesIds$$1_seriesIndex$$127$$) {
      return $arr$$15_displayable$$89_prev$$1$$ = $arr$$15_displayable$$89_prev$$1$$.getParent().$getChildBefore$($arr$$15_displayable$$89_prev$$1$$), this.$GetSubIdForDomElement$($arr$$15_displayable$$89_prev$$1$$)
    }
  }
  return $JSCompiler_alias_NULL$$
};
$DvtTimelineOverviewAutomation$$.prototype.$getDomElementForSubId$ = function $$DvtTimelineOverviewAutomation$$$$$getDomElementForSubId$$($markers$$inline_5288_subId$$31$$) {
  for(var $array$$inline_5281_marker$$27_markerId$$inline_5291$$ = $markers$$inline_5288_subId$$31$$.split("["), $i$$inline_5292_len$$inline_5282_seriesIds$$2$$ = $array$$inline_5281_marker$$27_markerId$$inline_5291$$.length, $i$$inline_5283_index$$200_marker$$inline_5293$$ = 1;$i$$inline_5283_index$$200_marker$$inline_5293$$ < $i$$inline_5292_len$$inline_5282_seriesIds$$2$$;$i$$inline_5283_index$$200_marker$$inline_5293$$++) {
    var $elem$$inline_5284_id$$inline_5294_tempId$$inline_5285$$ = $array$$inline_5281_marker$$27_markerId$$inline_5291$$[$i$$inline_5283_index$$200_marker$$inline_5293$$], $elem$$inline_5284_id$$inline_5294_tempId$$inline_5285$$ = $elem$$inline_5284_id$$inline_5294_tempId$$inline_5285$$.substr(0, $elem$$inline_5284_id$$inline_5294_tempId$$inline_5285$$.length - 1), $tempIdAsNumber$$inline_5286$$ = parseFloat($elem$$inline_5284_id$$inline_5294_tempId$$inline_5285$$), $elem$$inline_5284_id$$inline_5294_tempId$$inline_5285$$ = 
    isNaN($tempIdAsNumber$$inline_5286$$) ? $elem$$inline_5284_id$$inline_5294_tempId$$inline_5285$$ : $tempIdAsNumber$$inline_5286$$;
    $array$$inline_5281_marker$$27_markerId$$inline_5291$$[$i$$inline_5283_index$$200_marker$$inline_5293$$] = $elem$$inline_5284_id$$inline_5294_tempId$$inline_5285$$
  }
  if($array$$inline_5281_marker$$27_markerId$$inline_5291$$ && 3 == $array$$inline_5281_marker$$27_markerId$$inline_5291$$.length && "marker" == $array$$inline_5281_marker$$27_markerId$$inline_5291$$[0]) {
    if($i$$inline_5292_len$$inline_5282_seriesIds$$2$$ = this.$_overview$.$_seriesIds$ == $JSCompiler_alias_NULL$$ ? $JSCompiler_alias_NULL$$ : this.$_overview$.$_seriesIds$.split(" "), $i$$inline_5292_len$$inline_5282_seriesIds$$2$$ != $JSCompiler_alias_NULL$$ && ($i$$inline_5283_index$$200_marker$$inline_5293$$ = parseInt($array$$inline_5281_marker$$27_markerId$$inline_5291$$[1], 10), -1 < $i$$inline_5283_index$$200_marker$$inline_5293$$ && $i$$inline_5283_index$$200_marker$$inline_5293$$ < $i$$inline_5292_len$$inline_5282_seriesIds$$2$$.length)) {
      a: {
        $markers$$inline_5288_subId$$31$$ = this.$_overview$.$_markers$;
        $array$$inline_5281_marker$$27_markerId$$inline_5291$$ = "tl1:" + $i$$inline_5292_len$$inline_5282_seriesIds$$2$$[$i$$inline_5283_index$$200_marker$$inline_5293$$] + ":" + $array$$inline_5281_marker$$27_markerId$$inline_5291$$[2] + ":";
        for($i$$inline_5292_len$$inline_5282_seriesIds$$2$$ = 0;$i$$inline_5292_len$$inline_5282_seriesIds$$2$$ < $markers$$inline_5288_subId$$31$$.length;$i$$inline_5292_len$$inline_5282_seriesIds$$2$$++) {
          if($i$$inline_5283_index$$200_marker$$inline_5293$$ = $markers$$inline_5288_subId$$31$$[$i$$inline_5292_len$$inline_5282_seriesIds$$2$$], $elem$$inline_5284_id$$inline_5294_tempId$$inline_5285$$ = $i$$inline_5283_index$$200_marker$$inline_5293$$.getId(), $elem$$inline_5284_id$$inline_5294_tempId$$inline_5285$$ != $JSCompiler_alias_NULL$$ && 0 == $elem$$inline_5284_id$$inline_5294_tempId$$inline_5285$$.indexOf($array$$inline_5281_marker$$27_markerId$$inline_5291$$)) {
            $array$$inline_5281_marker$$27_markerId$$inline_5291$$ = $i$$inline_5283_index$$200_marker$$inline_5293$$;
            break a
          }
        }
        $array$$inline_5281_marker$$27_markerId$$inline_5291$$ = $JSCompiler_alias_NULL$$
      }
      return $array$$inline_5281_marker$$27_markerId$$inline_5291$$ ? $array$$inline_5281_marker$$27_markerId$$inline_5291$$.$getDisplayable$().$getElem$() : $JSCompiler_alias_NULL$$
    }
  }else {
    if("range_window" == $markers$$inline_5288_subId$$31$$) {
      return this.$_overview$.$getSlidingWindow$().$getElem$()
    }
    if("range_start_handle" == $markers$$inline_5288_subId$$31$$) {
      return this.$_overview$.$getLeftHandle$().$getElem$()
    }
    if("range_end_handle" == $markers$$inline_5288_subId$$31$$) {
      return this.$_overview$.$getRightHandle$().$getElem$()
    }
  }
  return $JSCompiler_alias_NULL$$
};
$goog$exportPath_$$("DvtTimelineOverviewAutomation.prototype.getDomElementForSubId", $DvtTimelineOverviewAutomation$$.prototype.$getDomElementForSubId$);

var $DvtTimeUtils$$ = {$supportsTouch$:function() {
  return dvt.$Agent$.$isTouchDevice$()
}};
dvt.$Obj$.$createSubclass$($DvtTimeUtils$$, dvt.$Obj$, "DvtTimeUtils");
$DvtTimeUtils$$.$getDatePosition$ = function $$DvtTimeUtils$$$$getDatePosition$$($denominator$$2_startTime$$5$$, $endTime$$5$$, $number$$3_time$$13$$, $width$$125$$) {
  $number$$3_time$$13$$ = ($number$$3_time$$13$$ - $denominator$$2_startTime$$5$$) * $width$$125$$;
  $denominator$$2_startTime$$5$$ = $endTime$$5$$ - $denominator$$2_startTime$$5$$;
  return 0 == $number$$3_time$$13$$ || 0 == $denominator$$2_startTime$$5$$ ? 0 : $number$$3_time$$13$$ / $denominator$$2_startTime$$5$$
};
$DvtTimeUtils$$.$getPositionDate$ = function $$DvtTimeUtils$$$$getPositionDate$$($startTime$$6$$, $endTime$$6_number$$4$$, $pos$$67$$, $width$$126$$) {
  $endTime$$6_number$$4$$ = $pos$$67$$ * ($endTime$$6_number$$4$$ - $startTime$$6$$);
  return 0 == $endTime$$6_number$$4$$ || 0 == $width$$126$$ ? $startTime$$6$$ : $endTime$$6_number$$4$$ / $width$$126$$ + $startTime$$6$$
};
function $DvtTimeComponent$$($context$$391$$, $callback$$123$$, $callbackObj$$87$$) {
  this.Init($context$$391$$, $callback$$123$$, $callbackObj$$87$$)
}
$goog$exportPath_$$("DvtTimeComponent", $DvtTimeComponent$$);
dvt.$Obj$.$createSubclass$($DvtTimeComponent$$, dvt.$BaseComponent$, "DvtTimeComponent");
$DvtTimeComponent$$.prototype.Init = function $$DvtTimeComponent$$$$Init$($context$$392$$, $callback$$124$$, $callbackObj$$88$$) {
  $DvtTimeComponent$$.$superclass$.Init.call(this, $context$$392$$);
  this.$_callback$ = $callback$$124$$;
  this.$_callbackObj$ = $callbackObj$$88$$;
  this.$_virtualize$ = $JSCompiler_alias_FALSE$$
};
$DvtTimeComponent$$.prototype.$render$ = function $$DvtTimeComponent$$$$$render$$($props$$3_width$$127$$, $height$$109$$, $options$$262$$) {
  $options$$262$$ && this.$SetOptions$($options$$262$$);
  this.$Width$ = $props$$3_width$$127$$;
  this.$Height$ = $height$$109$$;
  this.$Options$ && ($props$$3_width$$127$$ = this.$Parse$(this.$Options$), this.$_applyParsedProperties$($props$$3_width$$127$$))
};
$DvtTimeComponent$$.prototype.render = $DvtTimeComponent$$.prototype.$render$;
$JSCompiler_prototypeAlias$$ = $DvtTimeComponent$$.prototype;
$JSCompiler_prototypeAlias$$.$SetOptions$ = function $$JSCompiler_prototypeAlias$$$$SetOptions$$($options$$263$$) {
  this.$Options$ = dvt.$JsonUtils$.$clone$($options$$263$$)
};
$JSCompiler_prototypeAlias$$.$addTick$ = function $$JSCompiler_prototypeAlias$$$$addTick$$($container$$175$$, $line$$17_x1$$34$$, $x2$$32$$, $y1$$27$$, $y2$$26$$, $stroke$$99$$, $id$$199$$) {
  $line$$17_x1$$34$$ = new dvt.$Line$(this.$getCtx$(), $line$$17_x1$$34$$, $y1$$27$$, $x2$$32$$, $y2$$26$$, $id$$199$$);
  $line$$17_x1$$34$$.$setStroke$($stroke$$99$$);
  $line$$17_x1$$34$$.$setPixelHinting$();
  $container$$175$$.$addChild$($line$$17_x1$$34$$);
  return $line$$17_x1$$34$$
};
function $JSCompiler_StaticMethods_addAxisLabel$$($container$$176$$, $label$$101$$, $x$$209$$, $y$$181$$, $maxLength$$) {
  $label$$101$$.$setX$($x$$209$$);
  $label$$101$$.$setY$($y$$181$$);
  $label$$101$$.$isTruncated$() && $label$$101$$.$setTextString$($label$$101$$.$getUntruncatedTextString$());
  dvt.$TextUtils$.$fitText$($label$$101$$, $maxLength$$, Infinity, $container$$176$$);
  $label$$101$$.$alignCenter$()
}
$JSCompiler_prototypeAlias$$.$addLabel$ = function $$JSCompiler_prototypeAlias$$$$addLabel$$($container$$177$$, $backgroundRect$$1_pos$$68$$, $label$$102_text$$76$$, $maxLength$$1$$, $y$$182$$, $labelStyle$$22$$, $id$$200$$, $renderBackground_width$$128$$, $labelPadding$$, $labelList$$, $isRTL$$41$$) {
  $label$$102_text$$76$$ = new dvt.$OutputText$(this.$getCtx$(), $label$$102_text$$76$$, $backgroundRect$$1_pos$$68$$, 0, $id$$200$$);
  $labelStyle$$22$$ != $JSCompiler_alias_NULL$$ && $label$$102_text$$76$$.$setCSSStyle$($labelStyle$$22$$);
  $container$$177$$.$addChild$($label$$102_text$$76$$);
  var $dim$$75$$ = $label$$102_text$$76$$.$getDimensions$();
  $container$$177$$.removeChild($label$$102_text$$76$$);
  $y$$182$$ -= $dim$$75$$.$h$;
  $label$$102_text$$76$$.$setY$($y$$182$$);
  $isRTL$$41$$ && $label$$102_text$$76$$.$setX$($backgroundRect$$1_pos$$68$$ - $dim$$75$$.$w$);
  $renderBackground_width$$128$$ && ($renderBackground_width$$128$$ = Math.min($dim$$75$$.$w$ + 2 * $labelPadding$$, $maxLength$$1$$), $backgroundRect$$1_pos$$68$$ = new dvt.$Rect$(this.$getCtx$(), ($isRTL$$41$$ ? $backgroundRect$$1_pos$$68$$ - $renderBackground_width$$128$$ + 2 * $labelPadding$$ : $backgroundRect$$1_pos$$68$$) - $labelPadding$$, $y$$182$$ - $labelPadding$$, $renderBackground_width$$128$$, $dim$$75$$.$h$ + 2 * $labelPadding$$, "ob_" + $id$$200$$), $backgroundRect$$1_pos$$68$$.$setCSSStyle$($labelStyle$$22$$), 
  $backgroundRect$$1_pos$$68$$.$setCornerRadius$(3), $container$$177$$.$addChild$($backgroundRect$$1_pos$$68$$), $labelList$$ && $labelList$$.push($backgroundRect$$1_pos$$68$$));
  dvt.$TextUtils$.$fitText$($label$$102_text$$76$$, $maxLength$$1$$, Infinity, $container$$177$$);
  $labelList$$ && $labelList$$.push($label$$102_text$$76$$);
  return $label$$102_text$$76$$
};
$JSCompiler_prototypeAlias$$.$_applyParsedProperties$ = function $$JSCompiler_prototypeAlias$$$$_applyParsedProperties$$($props$$4$$) {
  this.$_origStart$ = $props$$4$$.$origStart$;
  this.$_origEnd$ = $props$$4$$.$origEnd$;
  this.$_start$ = $props$$4$$.start;
  this.$_end$ = $props$$4$$.end;
  this.$_inlineStyle$ = $props$$4$$.$inlineStyle$;
  this.$_scale$ = $props$$4$$.scale;
  this.$_converter$ = $props$$4$$.$converter$;
  this.$applyStyleValues$()
};
$JSCompiler_prototypeAlias$$.$applyStyleValues$ = function $$JSCompiler_prototypeAlias$$$$applyStyleValues$$() {
  this.$_style$.$parseInlineStyle$(this.$_inlineStyle$)
};
function $JSCompiler_StaticMethods_setContentLength$$($JSCompiler_StaticMethods_setContentLength$self$$, $length$$19$$) {
  $JSCompiler_StaticMethods_setContentLength$self$$.$_contentLength$ = $JSCompiler_StaticMethods_setContentLength$self$$.$_canvasLength$ < $length$$19$$ ? $length$$19$$ : $JSCompiler_StaticMethods_setContentLength$self$$.$_canvasLength$;
  $JSCompiler_StaticMethods_setContentLength$self$$.$_virtualize$ || ($JSCompiler_StaticMethods_setContentLength$self$$.$_fetchStartPos$ = 0, $JSCompiler_StaticMethods_setContentLength$self$$.$_fetchEndPos$ = $JSCompiler_StaticMethods_setContentLength$self$$.$_contentLength$)
}
$JSCompiler_prototypeAlias$$.$isRTL$ = function $$JSCompiler_prototypeAlias$$$$isRTL$$() {
  return dvt.$Agent$.$isRightToLeft$(this.$getCtx$())
};
$JSCompiler_prototypeAlias$$.$isVertical$ = $JSCompiler_get$$("$_isVertical$");
function $DvtTimeComponentAxis$$($context$$393$$, $callback$$125$$, $callbackObj$$89$$, $isVertical$$1$$, $zoomOrder$$, $maxZoomOrder$$) {
  this.Init($context$$393$$, $callback$$125$$, $callbackObj$$89$$, $isVertical$$1$$, $zoomOrder$$, $maxZoomOrder$$)
}
dvt.$Obj$.$createSubclass$($DvtTimeComponentAxis$$, dvt.$Container$, "DvtTimeComponentAxis");
$DvtTimeComponentAxis$$.$DEFAULT_INTERVAL_WIDTH$ = 50;
$DvtTimeComponentAxis$$.$DEFAULT_INTERVAL_HEIGHT$ = 21;
$DvtTimeComponentAxis$$.$DEFAULT_INTERVAL_PADDING$ = 2;
$DvtTimeComponentAxis$$.$DEFAULT_BORDER_WIDTH$ = 1;
$DvtTimeComponentAxis$$.$DEFAULT_SEPARATOR_WIDTH$ = 1;
$DvtTimeComponentAxis$$.$_VALID_SCALES$ = "seconds minutes hours days weeks months quarters years".split(" ");
$JSCompiler_prototypeAlias$$ = $DvtTimeComponentAxis$$.prototype;
$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($context$$394$$, $callback$$126$$, $callbackObj$$90$$, $isVertical$$2$$, $zoomOrder$$1$$, $dateFormatStrings$$) {
  $DvtTimeComponentAxis$$.$superclass$.Init.call(this, $context$$394$$);
  this.$_calendar$ = new $DvtTimeComponentCalendar$$;
  this.$_formatter$ = new $DvtTimeComponentAxisFormatter$$($DvtTimeComponentAxisFormatter$$.SHORT, $dateFormatStrings$$);
  this.$_contentSize$ = $isVertical$$2$$ ? $DvtTimeComponentAxis$$.$DEFAULT_INTERVAL_WIDTH$ : $DvtTimeComponentAxis$$.$DEFAULT_INTERVAL_HEIGHT$;
  this.$_borderWidth$ = $DvtTimeComponentAxis$$.$DEFAULT_BORDER_WIDTH$;
  this.$_zoomOrder$ = $zoomOrder$$1$$;
  this.$_dateToIsoConverter$ = $context$$394$$.$getLocaleHelpers$().dateToIsoConverter
};
$JSCompiler_prototypeAlias$$.$setScale$ = $JSCompiler_set$$("$_scale$");
$JSCompiler_prototypeAlias$$.$getTimeAxisWidth$ = function $$JSCompiler_prototypeAlias$$$$getTimeAxisWidth$$() {
  this.$_timeAxisWidth$ == $JSCompiler_alias_NULL$$ && (this.$_timeAxisWidth$ = 30);
  return this.$_timeAxisWidth$
};
$JSCompiler_prototypeAlias$$.$setBorderWidth$ = $JSCompiler_set$$("$_borderWidth$");
$JSCompiler_prototypeAlias$$.$getBorderWidth$ = $JSCompiler_get$$("$_borderWidth$");
$JSCompiler_prototypeAlias$$.$getSize$ = function $$JSCompiler_prototypeAlias$$$$getSize$$() {
  return this.$_contentSize$ + 2 * this.$_borderWidth$
};
$JSCompiler_prototypeAlias$$.$setType$ = function $$JSCompiler_prototypeAlias$$$$setType$$($type$$160$$, $dateFormatStrings$$1$$) {
  this.$_formatter$ = new $DvtTimeComponentAxisFormatter$$($type$$160$$, $dateFormatStrings$$1$$)
};
$JSCompiler_prototypeAlias$$.$adjustDate$ = function $$JSCompiler_prototypeAlias$$$$adjustDate$$($date$$11$$) {
  return this.$_calendar$.$adjustDate$(new Date($date$$11$$), this.$_scale$)
};
$JSCompiler_prototypeAlias$$.$getNextDate$ = function $$JSCompiler_prototypeAlias$$$$getNextDate$$($time$$14$$) {
  return this.$_calendar$.$getNextDate$($time$$14$$, this.$_scale$)
};
function $JSCompiler_StaticMethods_formatDate$$($JSCompiler_StaticMethods_formatDate$self$$, $date$$12$$) {
  if($JSCompiler_StaticMethods_formatDate$self$$.$_converter$) {
    var $converter$$9$$;
    $converter$$9$$ = $JSCompiler_StaticMethods_formatDate$self$$.$_converter$[$JSCompiler_StaticMethods_formatDate$self$$.$_scale$] ? $JSCompiler_StaticMethods_formatDate$self$$.$_converter$[$JSCompiler_StaticMethods_formatDate$self$$.$_scale$] : $JSCompiler_StaticMethods_formatDate$self$$.$_converter$["default"] ? $JSCompiler_StaticMethods_formatDate$self$$.$_converter$["default"] : $JSCompiler_StaticMethods_formatDate$self$$.$_converter$;
    if($converter$$9$$.format) {
      return $converter$$9$$.format($JSCompiler_StaticMethods_formatDate$self$$.$_dateToIsoConverter$ ? $JSCompiler_StaticMethods_formatDate$self$$.$_dateToIsoConverter$($date$$12$$) : $date$$12$$)
    }
    if($converter$$9$$.getAsString) {
      return $converter$$9$$.getAsString($date$$12$$)
    }
  }
  if($JSCompiler_StaticMethods_formatDate$self$$.$_defaultConverter$ && $JSCompiler_StaticMethods_formatDate$self$$.$_defaultConverter$[$JSCompiler_StaticMethods_formatDate$self$$.$_scale$]) {
    $converter$$9$$ = $JSCompiler_StaticMethods_formatDate$self$$.$_defaultConverter$[$JSCompiler_StaticMethods_formatDate$self$$.$_scale$];
    if($converter$$9$$.format) {
      return $converter$$9$$.format($JSCompiler_StaticMethods_formatDate$self$$.$_dateToIsoConverter$ ? $JSCompiler_StaticMethods_formatDate$self$$.$_dateToIsoConverter$($date$$12$$) : $date$$12$$)
    }
    if($converter$$9$$.getAsString) {
      return $converter$$9$$.getAsString($date$$12$$)
    }
  }
  return $JSCompiler_StaticMethods_formatDate$self$$.$_formatter$.$format$($date$$12$$, $JSCompiler_StaticMethods_formatDate$self$$.$_scale$, $JSCompiler_StaticMethods_formatDate$self$$.$_timeZoneOffsets$)
}
function $DvtTimeComponentAxisFormatter$$($type$$161$$, $locale$$6$$) {
  this.Init($type$$161$$, $locale$$6$$)
}
dvt.$Obj$.$createSubclass$($DvtTimeComponentAxisFormatter$$, dvt.$Obj$, "DvtTimeComponentAxisFormatter");
$DvtTimeComponentAxisFormatter$$.$LONG$ = 0;
$DvtTimeComponentAxisFormatter$$.SHORT = 1;
$DvtTimeComponentAxisFormatter$$.prototype.Init = function $$DvtTimeComponentAxisFormatter$$$$Init$($type$$162$$, $dateFormatStrings$$2$$) {
  this.$_type$ = $type$$162$$;
  this.$_dateFormatStrings$ = $dateFormatStrings$$2$$;
  this.$_formats$ = [];
  this.$_formats$[0] = {};
  this.$_formats$[0].seconds = "HH:MM:ss";
  this.$_formats$[0].minutes = "HH:MM";
  this.$_formats$[0].hours = "HH:MM";
  this.$_formats$[0].days = "dddd";
  this.$_formats$[0].weeks = "m/dd";
  this.$_formats$[0].months = "mmmm";
  this.$_formats$[0].quarters = "mmmm";
  this.$_formats$[0].halfyears = "yyyy";
  this.$_formats$[0].years = "yyyy";
  this.$_formats$[0].twoyears = "yyyy";
  this.$_formats$[1] = {};
  this.$_formats$[1].seconds = "HH:MM:ss";
  this.$_formats$[1].minutes = "HH:MM";
  this.$_formats$[1].hours = "HH:MM";
  this.$_formats$[1].days = "m/dd";
  this.$_formats$[1].weeks = "m/dd";
  this.$_formats$[1].months = "mmm";
  this.$_formats$[1].quarters = "mmm";
  this.$_formats$[1].halfyears = "yy";
  this.$_formats$[1].years = "yy";
  this.$_formats$[1].twoyears = "yy"
};
$DvtTimeComponentAxisFormatter$$.prototype.$format$ = function $$DvtTimeComponentAxisFormatter$$$$$format$$($date$$13_timeInMS$$, $mask$$5_scale$$56$$, $newString_timeZoneOffsets$$1$$) {
  $mask$$5_scale$$56$$ = this.$_formats$[this.$_type$][$mask$$5_scale$$56$$];
  if($mask$$5_scale$$56$$ != $JSCompiler_alias_NULL$$) {
    var $dates_isUTC$$ = $JSCompiler_alias_FALSE$$;
    if($newString_timeZoneOffsets$$1$$) {
      $date$$13_timeInMS$$ = $date$$13_timeInMS$$.getTime();
      for(var $dates_isUTC$$ = Object.keys($newString_timeZoneOffsets$$1$$), $offset$$33$$ = 0, $i$$618$$ = 0;$i$$618$$ < $dates_isUTC$$.length;$i$$618$$++) {
        $date$$13_timeInMS$$ >= parseInt($dates_isUTC$$[$i$$618$$], 10) && ($offset$$33$$ = $newString_timeZoneOffsets$$1$$[$dates_isUTC$$[$i$$618$$]])
      }
      $date$$13_timeInMS$$ = new Date($date$$13_timeInMS$$ + $offset$$33$$);
      $dates_isUTC$$ = $JSCompiler_alias_TRUE$$
    }
    if(-1 != $mask$$5_scale$$56$$.indexOf(":")) {
      var $separator$$3$$ = ":"
    }else {
      -1 != $mask$$5_scale$$56$$.indexOf("/") && ($separator$$3$$ = "/")
    }
    if($separator$$3$$) {
      $mask$$5_scale$$56$$ = $mask$$5_scale$$56$$.split($separator$$3$$);
      $newString_timeZoneOffsets$$1$$ = $JSCompiler_StaticMethods_getDateFormatValue$$(this, $date$$13_timeInMS$$, $mask$$5_scale$$56$$[0], $dates_isUTC$$);
      for($i$$618$$ = 1;$i$$618$$ < $mask$$5_scale$$56$$.length;$i$$618$$++) {
        $newString_timeZoneOffsets$$1$$ += $separator$$3$$ + $JSCompiler_StaticMethods_getDateFormatValue$$(this, $date$$13_timeInMS$$, $mask$$5_scale$$56$$[$i$$618$$], $dates_isUTC$$)
      }
      return $newString_timeZoneOffsets$$1$$
    }
    return $JSCompiler_StaticMethods_getDateFormatValue$$(this, $date$$13_timeInMS$$, $mask$$5_scale$$56$$, $dates_isUTC$$)
  }
  return $date$$13_timeInMS$$.toLocaleString()
};
function $JSCompiler_StaticMethods_getDateFormatValue$$($JSCompiler_StaticMethods_getDateFormatValue$self_value$$159$$, $date$$14$$, $mask$$6$$, $isUTC$$1$$) {
  if($isUTC$$1$$) {
    switch($mask$$6$$) {
      case "ss":
        return $JSCompiler_StaticMethods_getDateFormatValue$self_value$$159$$ = $date$$14$$.getUTCSeconds(), 10 > $JSCompiler_StaticMethods_getDateFormatValue$self_value$$159$$ ? "0" + $JSCompiler_StaticMethods_getDateFormatValue$self_value$$159$$ : $JSCompiler_StaticMethods_getDateFormatValue$self_value$$159$$;
      case "HH":
        return $JSCompiler_StaticMethods_getDateFormatValue$self_value$$159$$ = $date$$14$$.getUTCHours(), 10 > $JSCompiler_StaticMethods_getDateFormatValue$self_value$$159$$ ? "0" + $JSCompiler_StaticMethods_getDateFormatValue$self_value$$159$$ : $JSCompiler_StaticMethods_getDateFormatValue$self_value$$159$$;
      case "MM":
        return $JSCompiler_StaticMethods_getDateFormatValue$self_value$$159$$ = $date$$14$$.getUTCMinutes(), 10 > $JSCompiler_StaticMethods_getDateFormatValue$self_value$$159$$ ? "0" + $JSCompiler_StaticMethods_getDateFormatValue$self_value$$159$$ : $JSCompiler_StaticMethods_getDateFormatValue$self_value$$159$$;
      case "dd":
        return $JSCompiler_StaticMethods_getDateFormatValue$self_value$$159$$ = $date$$14$$.getUTCDate(), 10 > $JSCompiler_StaticMethods_getDateFormatValue$self_value$$159$$ ? "0" + $JSCompiler_StaticMethods_getDateFormatValue$self_value$$159$$ : $JSCompiler_StaticMethods_getDateFormatValue$self_value$$159$$;
      case "dddd":
        return $JSCompiler_StaticMethods_getDateFormatValue$self_value$$159$$.$_dateFormatStrings$.$dayNames$[$date$$14$$.getUTCDay() + 7];
      case "m":
        return $date$$14$$.getUTCMonth() + 1;
      case "mmm":
        return $JSCompiler_StaticMethods_getDateFormatValue$self_value$$159$$.$_dateFormatStrings$.$monthNames$[$date$$14$$.getUTCMonth()];
      case "mmmm":
        return $JSCompiler_StaticMethods_getDateFormatValue$self_value$$159$$.$_dateFormatStrings$.$monthNames$[$date$$14$$.getUTCMonth() + 12];
      case "yy":
        return $date$$14$$.getUTCFullYear().toString().substring(2, 4);
      default:
        return $date$$14$$.getUTCFullYear()
    }
  }else {
    switch($mask$$6$$) {
      case "ss":
        return $JSCompiler_StaticMethods_getDateFormatValue$self_value$$159$$ = $date$$14$$.getSeconds(), 10 > $JSCompiler_StaticMethods_getDateFormatValue$self_value$$159$$ ? "0" + $JSCompiler_StaticMethods_getDateFormatValue$self_value$$159$$ : $JSCompiler_StaticMethods_getDateFormatValue$self_value$$159$$;
      case "HH":
        return $JSCompiler_StaticMethods_getDateFormatValue$self_value$$159$$ = $date$$14$$.getHours(), 10 > $JSCompiler_StaticMethods_getDateFormatValue$self_value$$159$$ ? "0" + $JSCompiler_StaticMethods_getDateFormatValue$self_value$$159$$ : $JSCompiler_StaticMethods_getDateFormatValue$self_value$$159$$;
      case "MM":
        return $JSCompiler_StaticMethods_getDateFormatValue$self_value$$159$$ = $date$$14$$.getMinutes(), 10 > $JSCompiler_StaticMethods_getDateFormatValue$self_value$$159$$ ? "0" + $JSCompiler_StaticMethods_getDateFormatValue$self_value$$159$$ : $JSCompiler_StaticMethods_getDateFormatValue$self_value$$159$$;
      case "dd":
        return $JSCompiler_StaticMethods_getDateFormatValue$self_value$$159$$ = $date$$14$$.getDate(), 10 > $JSCompiler_StaticMethods_getDateFormatValue$self_value$$159$$ ? "0" + $JSCompiler_StaticMethods_getDateFormatValue$self_value$$159$$ : $JSCompiler_StaticMethods_getDateFormatValue$self_value$$159$$;
      case "dddd":
        return $JSCompiler_StaticMethods_getDateFormatValue$self_value$$159$$.$_dateFormatStrings$.$dayNames$[$date$$14$$.getDay() + 7];
      case "m":
        return $date$$14$$.getMonth() + 1;
      case "mmm":
        return $JSCompiler_StaticMethods_getDateFormatValue$self_value$$159$$.$_dateFormatStrings$.$monthNames$[$date$$14$$.getMonth()];
      case "mmmm":
        return $JSCompiler_StaticMethods_getDateFormatValue$self_value$$159$$.$_dateFormatStrings$.$monthNames$[$date$$14$$.getMonth() + 12];
      case "yy":
        return $date$$14$$.getFullYear().toString().substring(2, 4);
      default:
        return $date$$14$$.getFullYear()
    }
  }
}
function $DvtTimeComponentCalendar$$($options$$264$$) {
  this.Init($options$$264$$)
}
dvt.$Obj$.$createSubclass$($DvtTimeComponentCalendar$$, dvt.$Obj$, "DvtTimeComponentCalendar");
$DvtTimeComponentCalendar$$.prototype.Init = function $$DvtTimeComponentCalendar$$$$Init$() {
  this.$_dayInMillis$ = 864E5
};
$DvtTimeComponentCalendar$$.prototype.$adjustDate$ = function $$DvtTimeComponentCalendar$$$$$adjustDate$$($date$$15$$, $scale$$57$$) {
  var $_adjustedDate$$ = new Date($date$$15$$.getTime());
  if("weeks" == $scale$$57$$) {
    $_adjustedDate$$.setHours(0, 0, 0);
    var $roll_amt$$ = ($date$$15$$.getDay() - 0 + 7) % 7;
    0 < $roll_amt$$ && $_adjustedDate$$.setTime($_adjustedDate$$.getTime() - $roll_amt$$ * this.$_dayInMillis$)
  }else {
    "months" == $scale$$57$$ ? $_adjustedDate$$.setDate(1) : "days" == $scale$$57$$ ? $_adjustedDate$$.setHours(0, 0, 0) : "hours" == $scale$$57$$ ? $_adjustedDate$$.setMinutes(0, 0, 0) : "minutes" == $scale$$57$$ ? $_adjustedDate$$.setSeconds(0, 0) : "seconds" == $scale$$57$$ ? $_adjustedDate$$.setMilliseconds(0) : "quarters" == $scale$$57$$ ? ($_adjustedDate$$.setDate(1), $roll_amt$$ = 2 - ($date$$15$$.getMonth() + 11) % 3, 0 < $roll_amt$$ && $_adjustedDate$$.setMonth($_adjustedDate$$.getMonth() + 
    $roll_amt$$)) : "halfyears" == $scale$$57$$ ? ($_adjustedDate$$.setDate(1), $roll_amt$$ = 5 - ($date$$15$$.getMonth() + 11) % 6, 0 < $roll_amt$$ && $_adjustedDate$$.setMonth($_adjustedDate$$.getMonth() + $roll_amt$$)) : "years" == $scale$$57$$ ? ($_adjustedDate$$.setMonth(0), $_adjustedDate$$.setDate(1)) : "twoyears" == $scale$$57$$ && ($_adjustedDate$$.setMonth(0), $_adjustedDate$$.setDate(1))
  }
  return $_adjustedDate$$
};
$DvtTimeComponentCalendar$$.prototype.$getNextDate$ = function $$DvtTimeComponentCalendar$$$$$getNextDate$$($time$$15$$, $scale$$58$$) {
  if("seconds" == $scale$$58$$) {
    return new Date($time$$15$$ + 1E3)
  }
  if("minutes" == $scale$$58$$) {
    return new Date($time$$15$$ + 6E4)
  }
  if("hours" == $scale$$58$$) {
    return new Date($time$$15$$ + 36E5)
  }
  var $_nextDate$$ = new Date($time$$15$$);
  "days" == $scale$$58$$ ? $_nextDate$$.setDate($_nextDate$$.getDate() + 1) : "weeks" == $scale$$58$$ ? $_nextDate$$.setDate($_nextDate$$.getDate() + 7) : "months" == $scale$$58$$ ? $_nextDate$$.setMonth($_nextDate$$.getMonth() + 1) : "quarters" == $scale$$58$$ ? $_nextDate$$.setMonth($_nextDate$$.getMonth() + 3) : "halfyears" == $scale$$58$$ ? $_nextDate$$.setMonth($_nextDate$$.getMonth() + 6) : "years" == $scale$$58$$ ? $_nextDate$$.setFullYear($_nextDate$$.getFullYear() + 1) : "twoyears" == $scale$$58$$ ? 
  $_nextDate$$.setFullYear($_nextDate$$.getFullYear() + 2) : $_nextDate$$.setYear($_nextDate$$.getYear() + 1);
  return $_nextDate$$
};
function $DvtTimelineKeyboardHandler$$($manager$$28$$) {
  this.Init($manager$$28$$)
}
dvt.$Obj$.$createSubclass$($DvtTimelineKeyboardHandler$$, dvt.$KeyboardHandler$, "DvtTimelineKeyboardHandler");
$DvtTimelineKeyboardHandler$$.prototype.Init = function $$DvtTimelineKeyboardHandler$$$$Init$($manager$$29$$) {
  $DvtTimelineKeyboardHandler$$.$superclass$.Init.call(this, $manager$$29$$)
};
$DvtTimelineKeyboardHandler$$.prototype.$isSelectionEvent$ = function $$DvtTimelineKeyboardHandler$$$$$isSelectionEvent$$($event$$509$$) {
  return this.$isNavigationEvent$($event$$509$$) && !$event$$509$$.ctrlKey
};
$DvtTimelineKeyboardHandler$$.prototype.$isMultiSelectEvent$ = function $$DvtTimelineKeyboardHandler$$$$$isMultiSelectEvent$$($event$$510$$) {
  return $event$$510$$.keyCode == dvt.$KeyboardEvent$.$SPACE$ && $event$$510$$.ctrlKey
};
$DvtTimelineKeyboardHandler$$.prototype.$processKeyDown$ = function $$DvtTimelineKeyboardHandler$$$$$processKeyDown$$($event$$511$$) {
  var $keyCode$$34$$ = $event$$511$$.keyCode;
  dvt.$KeyboardEvent$.$isEquals$($event$$511$$) || dvt.$KeyboardEvent$.$isPlus$($event$$511$$) ? this.$_eventManager$.$zoomBy$(1 / dvt.$Timeline$.$ZOOM_BY_VALUE$) : dvt.$KeyboardEvent$.$isMinus$($event$$511$$) || dvt.$KeyboardEvent$.$isUnderscore$($event$$511$$) ? this.$_eventManager$.$zoomBy$(dvt.$Timeline$.$ZOOM_BY_VALUE$) : $keyCode$$34$$ == dvt.$KeyboardEvent$.$PAGE_UP$ ? ($event$$511$$.shiftKey ? this.$_eventManager$.$panBy$(-0.25, 0) : this.$_eventManager$.$panBy$(0, -0.25), dvt.$EventManager$.$consumeEvent$($event$$511$$)) : 
  $keyCode$$34$$ == dvt.$KeyboardEvent$.$PAGE_DOWN$ && ($event$$511$$.shiftKey ? this.$_eventManager$.$panBy$(0.25, 0) : this.$_eventManager$.$panBy$(0, 0.25), dvt.$EventManager$.$consumeEvent$($event$$511$$));
  return $DvtTimelineKeyboardHandler$$.$superclass$.$processKeyDown$.call(this, $event$$511$$)
};
function $DvtTimelineKeyboardHandler$getNextNavigable$$($currentNavigable$$13$$, $event$$512$$, $navigableItems$$4$$) {
  var $isVertical$$3_series$$16$$ = $currentNavigable$$13$$.$getSeries$(), $seriesIndex$$123$$ = $currentNavigable$$13$$.$getSeriesIndex$(), $isRTL$$42$$ = dvt.$Agent$.$isRightToLeft$($isVertical$$3_series$$16$$.$getCtx$()), $isVertical$$3_series$$16$$ = $isVertical$$3_series$$16$$.$isVertical$(), $isDualSeries$$ = 1 < $navigableItems$$4$$.length;
  if(!$isRTL$$42$$ && dvt.$KeyboardEvent$.$RIGHT_ARROW$ == $event$$512$$.keyCode || $isRTL$$42$$ && dvt.$KeyboardEvent$.$LEFT_ARROW$ == $event$$512$$.keyCode) {
    if($isVertical$$3_series$$16$$) {
      if($isDualSeries$$ && 1 != $seriesIndex$$123$$) {
        return $DvtTimelineKeyboardHandler$getClosestItem$$($currentNavigable$$13$$, $navigableItems$$4$$[1])
      }
    }else {
      return $DvtTimelineKeyboardHandler$getNextItem$$($currentNavigable$$13$$, $navigableItems$$4$$[$seriesIndex$$123$$], $JSCompiler_alias_TRUE$$)
    }
  }else {
    if(!$isRTL$$42$$ && dvt.$KeyboardEvent$.$LEFT_ARROW$ == $event$$512$$.keyCode || $isRTL$$42$$ && dvt.$KeyboardEvent$.$RIGHT_ARROW$ == $event$$512$$.keyCode) {
      if($isVertical$$3_series$$16$$) {
        if($isDualSeries$$ && 0 != $seriesIndex$$123$$) {
          return $DvtTimelineKeyboardHandler$getClosestItem$$($currentNavigable$$13$$, $navigableItems$$4$$[0])
        }
      }else {
        return $DvtTimelineKeyboardHandler$getNextItem$$($currentNavigable$$13$$, $navigableItems$$4$$[$seriesIndex$$123$$], $JSCompiler_alias_FALSE$$)
      }
    }else {
      if(dvt.$KeyboardEvent$.$DOWN_ARROW$ == $event$$512$$.keyCode) {
        if($isVertical$$3_series$$16$$) {
          return $DvtTimelineKeyboardHandler$getNextItem$$($currentNavigable$$13$$, $navigableItems$$4$$[$seriesIndex$$123$$], $JSCompiler_alias_TRUE$$)
        }
        if($isDualSeries$$ && 1 != $seriesIndex$$123$$) {
          return $DvtTimelineKeyboardHandler$getClosestItem$$($currentNavigable$$13$$, $navigableItems$$4$$[1])
        }
      }else {
        if(dvt.$KeyboardEvent$.$UP_ARROW$ == $event$$512$$.keyCode) {
          if($isVertical$$3_series$$16$$) {
            return $DvtTimelineKeyboardHandler$getNextItem$$($currentNavigable$$13$$, $navigableItems$$4$$[$seriesIndex$$123$$], $JSCompiler_alias_FALSE$$)
          }
          if($isDualSeries$$ && 0 != $seriesIndex$$123$$) {
            return $DvtTimelineKeyboardHandler$getClosestItem$$($currentNavigable$$13$$, $navigableItems$$4$$[0])
          }
        }
      }
    }
  }
  return $JSCompiler_alias_NULL$$
}
function $DvtTimelineKeyboardHandler$getNextItem$$($item$$49_nextIndex$$5$$, $navigableItems$$5$$, $isNext$$) {
  $item$$49_nextIndex$$5$$ = dvt.$ArrayUtils$.$getIndex$($navigableItems$$5$$, $item$$49_nextIndex$$5$$) + ($isNext$$ ? 1 : -1);
  return 0 <= $item$$49_nextIndex$$5$$ && $item$$49_nextIndex$$5$$ < $navigableItems$$5$$.length ? $navigableItems$$5$$[$item$$49_nextIndex$$5$$] : $JSCompiler_alias_NULL$$
}
function $DvtTimelineKeyboardHandler$getClosestItem$$($item$$50$$, $navigableItems$$6$$) {
  if(0 < $navigableItems$$6$$.length) {
    for(var $closest$$ = $navigableItems$$6$$[0], $itemLoc$$ = $item$$50$$.$_loc$, $dist$$1$$ = Math.abs($itemLoc$$ - $closest$$.$_loc$), $i$$619$$ = 1;$i$$619$$ < $navigableItems$$6$$.length;$i$$619$$++) {
      var $testDist$$ = Math.abs($itemLoc$$ - $navigableItems$$6$$[$i$$619$$].$_loc$);
      $testDist$$ < $dist$$1$$ && ($dist$$1$$ = $testDist$$, $closest$$ = $navigableItems$$6$$[$i$$619$$])
    }
    return $closest$$
  }
  return $JSCompiler_alias_NULL$$
}
function $DvtTimelineEventManager$$($timeline$$) {
  this.Init($timeline$$.$getCtx$(), $timeline$$.$processEvent$, $timeline$$);
  this.$_timeline$ = $timeline$$;
  this.$_isPinchZoom$ = this.$_isDragPanning$ = $JSCompiler_alias_FALSE$$
}
dvt.$Obj$.$createSubclass$($DvtTimelineEventManager$$, dvt.$EventManager$, "DvtTimelineEventManager");
$JSCompiler_prototypeAlias$$ = $DvtTimelineEventManager$$.prototype;
$JSCompiler_prototypeAlias$$.$addListeners$ = function $$JSCompiler_prototypeAlias$$$$addListeners$$($displayable$$83_stage$$11$$) {
  $DvtTimelineEventManager$$.$superclass$.$addListeners$.call(this, $displayable$$83_stage$$11$$);
  dvt.$SvgDocumentUtils$.$addDragListeners$(this.$_timeline$, this.$_onDragStart$, this.$_onDragMove$, this.$_onDragEnd$, this);
  dvt.$Agent$.$isTouchDevice$() || (dvt.$Agent$.$isPlatformGecko$() ? $displayable$$83_stage$$11$$.$addEvtListener$("wheel", this.$OnMouseWheel$, $JSCompiler_alias_FALSE$$, this) : $displayable$$83_stage$$11$$.$addEvtListener$(dvt.$MouseEvent$.$MOUSEWHEEL$, this.$OnMouseWheel$, $JSCompiler_alias_FALSE$$, this), dvt.$Agent$.$isPlatformIE$() && ($displayable$$83_stage$$11$$ = this.$getCtx$().$_stage$, $displayable$$83_stage$$11$$.$addEvtListener$("mouseenter", this.$OnMouseEnter$, $JSCompiler_alias_FALSE$$, 
  this), $displayable$$83_stage$$11$$.$addEvtListener$("mouseleave", this.$OnMouseLeave$, $JSCompiler_alias_FALSE$$, this)))
};
$JSCompiler_prototypeAlias$$.$removeListeners$ = function $$JSCompiler_prototypeAlias$$$$removeListeners$$($displayable$$84_stage$$12$$) {
  $DvtTimelineEventManager$$.$superclass$.$removeListeners$.call(this, $displayable$$84_stage$$12$$);
  dvt.$Agent$.$isTouchDevice$() || (dvt.$Agent$.$isPlatformGecko$() ? $displayable$$84_stage$$12$$.$removeEvtListener$("wheel", this.$OnMouseWheel$, $JSCompiler_alias_FALSE$$, this) : $displayable$$84_stage$$12$$.$removeEvtListener$(dvt.$MouseEvent$.$MOUSEWHEEL$, this.$OnMouseWheel$, $JSCompiler_alias_FALSE$$, this), dvt.$Agent$.$isPlatformIE$() && ($displayable$$84_stage$$12$$ = this.$getCtx$().$_stage$, $displayable$$84_stage$$12$$.$removeEvtListener$("mouseenter", this.$OnMouseEnter$, $JSCompiler_alias_FALSE$$, 
  this), $displayable$$84_stage$$12$$.$removeEvtListener$("mouseleave", this.$OnMouseLeave$, $JSCompiler_alias_FALSE$$, this)))
};
$JSCompiler_prototypeAlias$$.$OnKeyDown$ = function $$JSCompiler_prototypeAlias$$$$OnKeyDown$$($event$$513$$) {
  $DvtTimelineEventManager$$.$superclass$.$OnKeyDown$.call(this, $event$$513$$);
  this.$_timeline$.$HandleKeyDown$($event$$513$$)
};
$JSCompiler_prototypeAlias$$.$OnClick$ = function $$JSCompiler_prototypeAlias$$$$OnClick$$($event$$514$$) {
  this.$_isDragPanning$ || ($DvtTimelineEventManager$$.$superclass$.$OnClick$.call(this, $event$$514$$), $JSCompiler_StaticMethods_handleShapeClick$$(this.$_timeline$, $event$$514$$))
};
$JSCompiler_prototypeAlias$$.$PreOnMouseOver$ = function $$JSCompiler_prototypeAlias$$$$PreOnMouseOver$$($event$$515$$) {
  this.$_mouseOutTimer$ && this.$_mouseOutTimer$.$isRunning$() && this.$_mouseOutTimer$.stop();
  $DvtTimelineEventManager$$.$superclass$.$PreOnMouseOver$.call(this, $event$$515$$);
  !dvt.$Agent$.$isPlatformIE$() && !this.$isMouseOver$ && (this.$isMouseOver$ = $JSCompiler_alias_TRUE$$, $JSCompiler_StaticMethods_isAnimating$$(this.$_timeline$) || $JSCompiler_StaticMethods_showThenHideHotspots$$(this.$_timeline$))
};
$JSCompiler_prototypeAlias$$.$OnMouseEnter$ = function $$JSCompiler_prototypeAlias$$$$OnMouseEnter$$() {
  this.$_mouseOutTimer$ && this.$_mouseOutTimer$.$isRunning$() && this.$_mouseOutTimer$.stop();
  this.$isMouseOver$ || (this.$isMouseOver$ = $JSCompiler_alias_TRUE$$, $JSCompiler_StaticMethods_isAnimating$$(this.$_timeline$) || $JSCompiler_StaticMethods_showThenHideHotspots$$(this.$_timeline$))
};
$JSCompiler_prototypeAlias$$.$OnMouseLeave$ = function $$JSCompiler_prototypeAlias$$$$OnMouseLeave$$() {
  this.$_mouseOutTimer$ || (this.$_mouseOutTimer$ = new dvt.$Timer$(this.$getCtx$(), 10, this.$_onMouseOutTimerEnd$, this, 1));
  this.$_mouseOutTimer$.reset();
  this.$_mouseOutTimer$.start()
};
$JSCompiler_prototypeAlias$$.$PreOnMouseOut$ = function $$JSCompiler_prototypeAlias$$$$PreOnMouseOut$$($event$$518$$) {
  $DvtTimelineEventManager$$.$superclass$.$PreOnMouseOut$.call(this, $event$$518$$);
  dvt.$Agent$.$isPlatformIE$() || (this.$_mouseOutTimer$ || (this.$_mouseOutTimer$ = new dvt.$Timer$(this.$getCtx$(), 10, this.$_onMouseOutTimerEnd$, this, 1)), this.$_mouseOutTimer$.reset(), this.$_mouseOutTimer$.start())
};
$JSCompiler_prototypeAlias$$.$_onMouseOutTimerEnd$ = function $$JSCompiler_prototypeAlias$$$$_onMouseOutTimerEnd$$() {
  this.$isMouseOver$ = $JSCompiler_alias_FALSE$$
};
$JSCompiler_prototypeAlias$$.$PreOnMouseDown$ = function $$JSCompiler_prototypeAlias$$$$PreOnMouseDown$$($event$$519$$) {
  this.$_isDragPanning$ = $JSCompiler_alias_FALSE$$;
  $DvtTimelineEventManager$$.$superclass$.$PreOnMouseDown$.call(this, $event$$519$$);
  this.$_timeline$.$HandleMouseDown$($event$$519$$)
};
$JSCompiler_prototypeAlias$$.$OnMouseWheel$ = function $$JSCompiler_prototypeAlias$$$$OnMouseWheel$$($compLoc$$inline_4948_event$$520$$) {
  var $JSCompiler_StaticMethods_HandleMouseWheel$self$$inline_4944$$ = this.$_timeline$;
  dvt.$EventManager$.$consumeEvent$($compLoc$$inline_4948_event$$520$$);
  var $wheelDelta$$inline_4946$$ = $compLoc$$inline_4948_event$$520$$.wheelDelta;
  if($JSCompiler_StaticMethods_hasValidOptions$$($JSCompiler_StaticMethods_HandleMouseWheel$self$$inline_4944$$) && $wheelDelta$$inline_4946$$) {
    var $compPagePos$$inline_4947_time$$inline_4949$$ = $JSCompiler_StaticMethods_HandleMouseWheel$self$$inline_4944$$.$getCtx$().$getStageAbsolutePosition$();
    $compLoc$$inline_4948_event$$520$$ = $JSCompiler_StaticMethods_HandleMouseWheel$self$$inline_4944$$.$_isVertical$ ? $compLoc$$inline_4948_event$$520$$.pageY - $compPagePos$$inline_4947_time$$inline_4949$$.y : $compLoc$$inline_4948_event$$520$$.pageX - $compPagePos$$inline_4947_time$$inline_4949$$.x;
    $compPagePos$$inline_4947_time$$inline_4949$$ = ($JSCompiler_StaticMethods_HandleMouseWheel$self$$inline_4944$$.$_end$ - $JSCompiler_StaticMethods_HandleMouseWheel$self$$inline_4944$$.$_start$) / $JSCompiler_StaticMethods_HandleMouseWheel$self$$inline_4944$$.$_contentLength$ * $compLoc$$inline_4948_event$$520$$ + $JSCompiler_StaticMethods_HandleMouseWheel$self$$inline_4944$$.$_viewStartTime$;
    $JSCompiler_StaticMethods_handleZoomWheel$$($JSCompiler_StaticMethods_HandleMouseWheel$self$$inline_4944$$, $JSCompiler_StaticMethods_HandleMouseWheel$self$$inline_4944$$.$_contentLength$ * (0.02 * $wheelDelta$$inline_4946$$ + 1), $compPagePos$$inline_4947_time$$inline_4949$$, $compLoc$$inline_4948_event$$520$$, $JSCompiler_alias_TRUE$$)
  }
};
$JSCompiler_prototypeAlias$$.$OnTouchStartBubble$ = function $$JSCompiler_prototypeAlias$$$$OnTouchStartBubble$$($event$$521$$) {
  $DvtTimelineEventManager$$.$superclass$.$OnTouchStartBubble$.call(this, $event$$521$$);
  this.$_timeline$.$HandleTouchStart$($event$$521$$);
  this.$_timeline$.$getCtx$().$_stage$.$_SVGRoot$.parentNode.focus()
};
$JSCompiler_prototypeAlias$$.$OnTouchEndBubble$ = function $$JSCompiler_prototypeAlias$$$$OnTouchEndBubble$$($event$$522$$) {
  $DvtTimelineEventManager$$.$superclass$.$OnTouchEndBubble$.call(this, $event$$522$$);
  this.$_timeline$.$HandleTouchEnd$($event$$522$$)
};
$JSCompiler_prototypeAlias$$.$_onDragStart$ = function $$JSCompiler_prototypeAlias$$$$_onDragStart$$($event$$523$$) {
  if($JSCompiler_StaticMethods_hasValidOptions$$(this.$_timeline$)) {
    return dvt.$Agent$.$isTouchDevice$() ? this.$_onTouchDragStart$($event$$523$$) : this.$_onMouseDragStart$($event$$523$$)
  }
};
$JSCompiler_prototypeAlias$$.$_onDragMove$ = function $$JSCompiler_prototypeAlias$$$$_onDragMove$$($event$$524$$) {
  return dvt.$Agent$.$isTouchDevice$() ? this.$_onTouchDragMove$($event$$524$$) : this.$_onMouseDragMove$($event$$524$$)
};
$JSCompiler_prototypeAlias$$.$_onDragEnd$ = function $$JSCompiler_prototypeAlias$$$$_onDragEnd$$($event$$525$$) {
  return dvt.$Agent$.$isTouchDevice$() ? this.$_onTouchDragEnd$($event$$525$$) : this.$_onMouseDragEnd$($event$$525$$)
};
$JSCompiler_prototypeAlias$$.$_getRelativePosition$ = function $$JSCompiler_prototypeAlias$$$$_getRelativePosition$$($pageX$$8$$, $pageY$$8$$) {
  this.$_stageAbsolutePosition$ || (this.$_stageAbsolutePosition$ = this.$_context$.$getStageAbsolutePosition$());
  return new dvt.$Point$($pageX$$8$$ - this.$_stageAbsolutePosition$.x, $pageY$$8$$ - this.$_stageAbsolutePosition$.y)
};
$JSCompiler_prototypeAlias$$.$_onMouseDragStart$ = function $$JSCompiler_prototypeAlias$$$$_onMouseDragStart$$($event$$526_relPos$$46$$) {
  return $event$$526_relPos$$46$$.button != dvt.$MouseEvent$.$RIGHT_CLICK_BUTTON$ ? ($event$$526_relPos$$46$$ = this.$_getRelativePosition$($event$$526_relPos$$46$$.pageX, $event$$526_relPos$$46$$.pageY), this.$_timeline$.$beginDragPan$($event$$526_relPos$$46$$.x, $event$$526_relPos$$46$$.y), $JSCompiler_alias_TRUE$$) : $JSCompiler_alias_FALSE$$
};
$JSCompiler_prototypeAlias$$.$_onMouseDragMove$ = function $$JSCompiler_prototypeAlias$$$$_onMouseDragMove$$($event$$527_relPos$$47$$) {
  $event$$527_relPos$$47$$ = this.$_getRelativePosition$($event$$527_relPos$$47$$.pageX, $event$$527_relPos$$47$$.pageY);
  this.$_timeline$.$contDragPan$($event$$527_relPos$$47$$.x, $event$$527_relPos$$47$$.y) && (this.$_isDragPanning$ = $JSCompiler_alias_TRUE$$)
};
$JSCompiler_prototypeAlias$$.$_onMouseDragEnd$ = function $$JSCompiler_prototypeAlias$$$$_onMouseDragEnd$$() {
  this.$_timeline$.$endDragPan$();
  this.$_stageAbsolutePosition$ = $JSCompiler_alias_NULL$$
};
$JSCompiler_prototypeAlias$$.$_onTouchDragStart$ = function $$JSCompiler_prototypeAlias$$$$_onTouchDragStart$$($event$$529_relPos$$48$$) {
  var $JSCompiler_StaticMethods_beginPinchZoom$self$$inline_4951_touches$$9$$ = $event$$529_relPos$$48$$.touches;
  if(1 == $JSCompiler_StaticMethods_beginPinchZoom$self$$inline_4951_touches$$9$$.length) {
    return $event$$529_relPos$$48$$ = this.$_getRelativePosition$($JSCompiler_StaticMethods_beginPinchZoom$self$$inline_4951_touches$$9$$[0].pageX, $JSCompiler_StaticMethods_beginPinchZoom$self$$inline_4951_touches$$9$$[0].pageY), this.$_timeline$.$beginDragPan$($event$$529_relPos$$48$$.x, $event$$529_relPos$$48$$.y), $JSCompiler_alias_TRUE$$
  }
  if(2 == $JSCompiler_StaticMethods_beginPinchZoom$self$$inline_4951_touches$$9$$.length) {
    this.$_timeline$.$endDragPan$();
    this.$_isPinchZoom$ = $JSCompiler_alias_TRUE$$;
    var $relPos1$$2_y1$$inline_4953$$ = this.$_getRelativePosition$($JSCompiler_StaticMethods_beginPinchZoom$self$$inline_4951_touches$$9$$[0].pageX, $JSCompiler_StaticMethods_beginPinchZoom$self$$inline_4951_touches$$9$$[0].pageY), $relPos2$$2_y2$$inline_4955$$ = this.$_getRelativePosition$($JSCompiler_StaticMethods_beginPinchZoom$self$$inline_4951_touches$$9$$[1].pageX, $JSCompiler_StaticMethods_beginPinchZoom$self$$inline_4951_touches$$9$$[1].pageY), $JSCompiler_StaticMethods_beginPinchZoom$self$$inline_4951_touches$$9$$ = 
    this.$_timeline$, $x1$$inline_4952$$ = $relPos1$$2_y1$$inline_4953$$.x, $relPos1$$2_y1$$inline_4953$$ = $relPos1$$2_y1$$inline_4953$$.y, $x2$$inline_4954$$ = $relPos2$$2_y2$$inline_4955$$.x, $relPos2$$2_y2$$inline_4955$$ = $relPos2$$2_y2$$inline_4955$$.y;
    $JSCompiler_StaticMethods_beginPinchZoom$self$$inline_4951_touches$$9$$.$_initialPinchZoomLoc$ = $JSCompiler_StaticMethods_beginPinchZoom$self$$inline_4951_touches$$9$$.$_isVertical$ ? Math.sqrt(($relPos1$$2_y1$$inline_4953$$ - $relPos2$$2_y2$$inline_4955$$) * ($relPos1$$2_y1$$inline_4953$$ - $relPos2$$2_y2$$inline_4955$$)) + ($relPos1$$2_y1$$inline_4953$$ < $relPos2$$2_y2$$inline_4955$$ ? $relPos1$$2_y1$$inline_4953$$ : $relPos2$$2_y2$$inline_4955$$) : Math.sqrt(($x1$$inline_4952$$ - $x2$$inline_4954$$) * 
    ($x1$$inline_4952$$ - $x2$$inline_4954$$)) + ($x1$$inline_4952$$ < $x2$$inline_4954$$ ? $x1$$inline_4952$$ : $x2$$inline_4954$$);
    $JSCompiler_StaticMethods_beginPinchZoom$self$$inline_4951_touches$$9$$.$_initialPinchZoomTime$ = ($JSCompiler_StaticMethods_beginPinchZoom$self$$inline_4951_touches$$9$$.$_end$ - $JSCompiler_StaticMethods_beginPinchZoom$self$$inline_4951_touches$$9$$.$_start$) / $JSCompiler_StaticMethods_beginPinchZoom$self$$inline_4951_touches$$9$$.$_contentLength$ * $JSCompiler_StaticMethods_beginPinchZoom$self$$inline_4951_touches$$9$$.$_initialPinchZoomLoc$ + $JSCompiler_StaticMethods_beginPinchZoom$self$$inline_4951_touches$$9$$.$_viewStartTime$;
    $JSCompiler_StaticMethods_beginPinchZoom$self$$inline_4951_touches$$9$$.$_initialPinchZoomDist$ = Math.sqrt(($x1$$inline_4952$$ - $x2$$inline_4954$$) * ($x1$$inline_4952$$ - $x2$$inline_4954$$) + ($relPos1$$2_y1$$inline_4953$$ - $relPos2$$2_y2$$inline_4955$$) * ($relPos1$$2_y1$$inline_4953$$ - $relPos2$$2_y2$$inline_4955$$));
    $JSCompiler_StaticMethods_beginPinchZoom$self$$inline_4951_touches$$9$$.$_initialPinchZoomLength$ = $JSCompiler_StaticMethods_beginPinchZoom$self$$inline_4951_touches$$9$$.$_contentLength$;
    dvt.$EventManager$.$consumeEvent$($event$$529_relPos$$48$$);
    return $JSCompiler_alias_TRUE$$
  }
  return $JSCompiler_alias_FALSE$$
};
$JSCompiler_prototypeAlias$$.$_onTouchDragMove$ = function $$JSCompiler_prototypeAlias$$$$_onTouchDragMove$$($event$$530$$) {
  var $JSCompiler_StaticMethods_contPinchZoom$self$$inline_4957_relPos$$49_touches$$10$$ = $event$$530$$.touches;
  if(1 == $JSCompiler_StaticMethods_contPinchZoom$self$$inline_4957_relPos$$49_touches$$10$$.length) {
    $JSCompiler_StaticMethods_contPinchZoom$self$$inline_4957_relPos$$49_touches$$10$$ = this.$_getRelativePosition$($JSCompiler_StaticMethods_contPinchZoom$self$$inline_4957_relPos$$49_touches$$10$$[0].pageX, $JSCompiler_StaticMethods_contPinchZoom$self$$inline_4957_relPos$$49_touches$$10$$[0].pageY), this.$_timeline$.$contDragPan$($JSCompiler_StaticMethods_contPinchZoom$self$$inline_4957_relPos$$49_touches$$10$$.x, $JSCompiler_StaticMethods_contPinchZoom$self$$inline_4957_relPos$$49_touches$$10$$.y), 
    $event$$530$$.preventDefault()
  }else {
    if(2 == $JSCompiler_StaticMethods_contPinchZoom$self$$inline_4957_relPos$$49_touches$$10$$.length) {
      var $relPos1$$3_y1$$inline_4959$$ = this.$_getRelativePosition$($JSCompiler_StaticMethods_contPinchZoom$self$$inline_4957_relPos$$49_touches$$10$$[0].pageX, $JSCompiler_StaticMethods_contPinchZoom$self$$inline_4957_relPos$$49_touches$$10$$[0].pageY), $relPos2$$3_y2$$inline_4961$$ = this.$_getRelativePosition$($JSCompiler_StaticMethods_contPinchZoom$self$$inline_4957_relPos$$49_touches$$10$$[1].pageX, $JSCompiler_StaticMethods_contPinchZoom$self$$inline_4957_relPos$$49_touches$$10$$[1].pageY), 
      $JSCompiler_StaticMethods_contPinchZoom$self$$inline_4957_relPos$$49_touches$$10$$ = this.$_timeline$, $currPinchZoomDist$$inline_4962_x1$$inline_4958$$ = $relPos1$$3_y1$$inline_4959$$.x, $relPos1$$3_y1$$inline_4959$$ = $relPos1$$3_y1$$inline_4959$$.y, $x2$$inline_4960$$ = $relPos2$$3_y2$$inline_4961$$.x, $relPos2$$3_y2$$inline_4961$$ = $relPos2$$3_y2$$inline_4961$$.y, $currPinchZoomDist$$inline_4962_x1$$inline_4958$$ = Math.sqrt(($currPinchZoomDist$$inline_4962_x1$$inline_4958$$ - $x2$$inline_4960$$) * 
      ($currPinchZoomDist$$inline_4962_x1$$inline_4958$$ - $x2$$inline_4960$$) + ($relPos1$$3_y1$$inline_4959$$ - $relPos2$$3_y2$$inline_4961$$) * ($relPos1$$3_y1$$inline_4959$$ - $relPos2$$3_y2$$inline_4961$$));
      $currPinchZoomDist$$inline_4962_x1$$inline_4958$$ != $JSCompiler_StaticMethods_contPinchZoom$self$$inline_4957_relPos$$49_touches$$10$$.$_initialPinchZoomDist$ && ($JSCompiler_StaticMethods_contPinchZoom$self$$inline_4957_relPos$$49_touches$$10$$.$_triggerViewportChange$ = $JSCompiler_alias_TRUE$$);
      $JSCompiler_StaticMethods_handleZoomWheel$$($JSCompiler_StaticMethods_contPinchZoom$self$$inline_4957_relPos$$49_touches$$10$$, $currPinchZoomDist$$inline_4962_x1$$inline_4958$$ / $JSCompiler_StaticMethods_contPinchZoom$self$$inline_4957_relPos$$49_touches$$10$$.$_initialPinchZoomDist$ * $JSCompiler_StaticMethods_contPinchZoom$self$$inline_4957_relPos$$49_touches$$10$$.$_initialPinchZoomLength$, $JSCompiler_StaticMethods_contPinchZoom$self$$inline_4957_relPos$$49_touches$$10$$.$_initialPinchZoomTime$, 
      $JSCompiler_StaticMethods_contPinchZoom$self$$inline_4957_relPos$$49_touches$$10$$.$_initialPinchZoomLoc$, $JSCompiler_alias_FALSE$$);
      $event$$530$$.preventDefault()
    }
  }
};
$JSCompiler_prototypeAlias$$.$_onTouchDragEnd$ = function $$JSCompiler_prototypeAlias$$$$_onTouchDragEnd$$($event$$531$$) {
  if(this.$_isPinchZoom$) {
    this.$_isPinchZoom$ = $JSCompiler_alias_FALSE$$;
    var $JSCompiler_StaticMethods_endPinchZoom$self$$inline_4964$$ = this.$_timeline$;
    $JSCompiler_StaticMethods_endPinchZoom$self$$inline_4964$$.$_initialPinchZoomDist$ = $JSCompiler_alias_NULL$$;
    $JSCompiler_StaticMethods_endPinchZoom$self$$inline_4964$$.$_initialPinchZoomLoc$ = $JSCompiler_alias_NULL$$;
    $JSCompiler_StaticMethods_endPinchZoom$self$$inline_4964$$.$_initialPinchZoomLength$ = $JSCompiler_alias_NULL$$;
    $JSCompiler_StaticMethods_endPinchZoom$self$$inline_4964$$.$_initialPinchZoomTime$ = $JSCompiler_alias_NULL$$;
    $JSCompiler_StaticMethods_endPinchZoom$self$$inline_4964$$.$_triggerViewportChange$ && ($JSCompiler_StaticMethods_endPinchZoom$self$$inline_4964$$.$_triggerViewportChange$ = $JSCompiler_alias_FALSE$$, $JSCompiler_StaticMethods_endPinchZoom$self$$inline_4964$$.dispatchEvent(dvt.$EventFactory$.$newTimelineViewportChangeEvent$($JSCompiler_StaticMethods_endPinchZoom$self$$inline_4964$$.$_viewStartTime$, $JSCompiler_StaticMethods_endPinchZoom$self$$inline_4964$$.$_viewEndTime$, $JSCompiler_StaticMethods_endPinchZoom$self$$inline_4964$$.$_scale$)))
  }else {
    this.$_timeline$.$endDragPan$()
  }
  $event$$531$$.preventDefault();
  this.$_stageAbsolutePosition$ = $JSCompiler_alias_NULL$$
};
$JSCompiler_prototypeAlias$$.$zoomBy$ = function $$JSCompiler_prototypeAlias$$$$zoomBy$$($dz$$11$$) {
  this.$_timeline$.$zoomBy$($dz$$11$$)
};
$JSCompiler_prototypeAlias$$.$panBy$ = function $$JSCompiler_prototypeAlias$$$$panBy$$($dx$$22$$, $dy$$24$$) {
  var $deltaX$$16$$ = $dx$$22$$ * this.$_timeline$.$_canvasLength$ * (dvt.$Agent$.$isRightToLeft$(this.$_context$) ? -1 : 1), $deltaY$$16$$ = $dy$$24$$ * this.$_timeline$.$_seriesSize$;
  0 != $deltaX$$16$$ && (this.$_timeline$.$_triggerViewportChange$ = $JSCompiler_alias_TRUE$$);
  var $focusObj$$4$$ = this.$getFocus$();
  $focusObj$$4$$ && (this.$_timeline$.$_dragPanSeries$ = $focusObj$$4$$.$_series$);
  this.$_timeline$.$panBy$($deltaX$$16$$, $deltaY$$16$$);
  $JSCompiler_StaticMethods_endPan$$(this.$_timeline$)
};
$JSCompiler_prototypeAlias$$.$HandleZoomInClick$ = function $$JSCompiler_prototypeAlias$$$$HandleZoomInClick$$() {
  this.$_timeline$.$zoomBy$(1 / dvt.$Timeline$.$ZOOM_BY_VALUE$)
};
$JSCompiler_prototypeAlias$$.$HandleZoomOutClick$ = function $$JSCompiler_prototypeAlias$$$$HandleZoomOutClick$$() {
  this.$_timeline$.$zoomBy$(dvt.$Timeline$.$ZOOM_BY_VALUE$)
};
$JSCompiler_prototypeAlias$$.$GetTouchResponse$ = function $$JSCompiler_prototypeAlias$$$$GetTouchResponse$$() {
  return dvt.$EventManager$.$TOUCH_RESPONSE_TOUCH_HOLD$
};
dvt.$Timeline$ = $JSCompiler_emptyFn$$();
$goog$exportPath_$$("dvt.Timeline", dvt.$Timeline$);
dvt.$Obj$.$createSubclass$(dvt.$Timeline$, $DvtTimeComponent$$);
dvt.$Timeline$.$ZOOM_BY_VALUE$ = 1.5;
dvt.$Timeline$.$ORIENTATION_VERTICAL$ = "vertical";
dvt.$Timeline$.newInstance = function $dvt$$Timeline$$newInstance$($context$$395$$, $callback$$127$$, $callbackObj$$91$$) {
  var $timeline$$1$$ = new dvt.$Timeline$;
  $timeline$$1$$.Init($context$$395$$, $callback$$127$$, $callbackObj$$91$$);
  return $timeline$$1$$
};
dvt.$Timeline$.newInstance = dvt.$Timeline$.newInstance;
$JSCompiler_prototypeAlias$$ = dvt.$Timeline$.prototype;
$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($context$$396$$, $callback$$128$$, $callbackObj$$92$$) {
  dvt.$Timeline$.$superclass$.Init.call(this, $context$$396$$, $callback$$128$$, $callbackObj$$92$$);
  this.$Defaults$ = new $DvtTimelineDefaults$$;
  this.$EventManager$ = new $DvtTimelineEventManager$$(this);
  this.$EventManager$.$addListeners$(this);
  dvt.$Agent$.$isTouchDevice$() ? this.$_keyboardHandler$ = $JSCompiler_alias_NULL$$ : (this.$_keyboardHandler$ = new $DvtTimelineKeyboardHandler$$(this.$EventManager$), this.$EventManager$.$setKeyboardHandler$(this.$_keyboardHandler$))
};
$JSCompiler_prototypeAlias$$.$SetOptions$ = function $$JSCompiler_prototypeAlias$$$$SetOptions$$($options$$265$$) {
  this.$Options$ = this.$Defaults$.$calcOptions$($options$$265$$);
  dvt.$Agent$.$isEnvironmentBrowser$() || (this.$Options$.animationOnDisplay = "none", this.$Options$.animationOnDataChange = "none")
};
$JSCompiler_prototypeAlias$$.$Parse$ = function $$JSCompiler_prototypeAlias$$$$Parse$$($options$$266$$) {
  this.$_parser$ = new $DvtTimelineParser$$;
  return this.$_parser$.parse($options$$266$$)
};
$JSCompiler_prototypeAlias$$.$_applyParsedProperties$ = function $$JSCompiler_prototypeAlias$$$$_applyParsedProperties$$($props$$5$$) {
  var $orientation$$3$$ = $props$$5$$.orientation;
  this.$_isVertical$ = $orientation$$3$$ && $orientation$$3$$ == dvt.$Timeline$.$ORIENTATION_VERTICAL$ ? $JSCompiler_alias_TRUE$$ : $JSCompiler_alias_FALSE$$;
  this.$_hasOverview$ = $props$$5$$.$hasOverview$;
  this.$_viewStartTime$ = $props$$5$$.$viewStart$;
  this.$_viewEndTime$ = $props$$5$$.$viewEnd$;
  this.$_selectionMode$ = $props$$5$$.$selectionMode$;
  this.$SelectionHandler$ = "single" == this.$_selectionMode$ ? new dvt.$SelectionHandler$(dvt.$SelectionHandler$.$TYPE_SINGLE$) : "multiple" == this.$_selectionMode$ ? new dvt.$SelectionHandler$(dvt.$SelectionHandler$.$TYPE_MULTIPLE$) : $JSCompiler_alias_NULL$$;
  this.$EventManager$.$setSelectionHandler$(this.$SelectionHandler$);
  this.$_axisInlineStyle$ = $props$$5$$.$axisStyle$;
  this.$_shortDesc$ = $props$$5$$.$shortDesc$;
  this.$_id$ = $props$$5$$.id;
  this.$_referenceObjects$ = $props$$5$$.$referenceObjects$;
  this.$_zoomOrder$ = $props$$5$$.$zoomOrder$;
  this.$_seriesScale$ = $props$$5$$.$seriesScale$;
  this.$_dateFormatStrings$ = {$dayNames$:[dvt.$Bundle$.$getTranslatedString$(dvt.$Bundle$.$UTIL_PREFIX$, "DAY_SHORT_SUNDAY", $JSCompiler_alias_NULL$$), dvt.$Bundle$.$getTranslatedString$(dvt.$Bundle$.$UTIL_PREFIX$, "DAY_SHORT_MONDAY", $JSCompiler_alias_NULL$$), dvt.$Bundle$.$getTranslatedString$(dvt.$Bundle$.$UTIL_PREFIX$, "DAY_SHORT_TUESDAY", $JSCompiler_alias_NULL$$), dvt.$Bundle$.$getTranslatedString$(dvt.$Bundle$.$UTIL_PREFIX$, "DAY_SHORT_WEDNESDAY", $JSCompiler_alias_NULL$$), dvt.$Bundle$.$getTranslatedString$(dvt.$Bundle$.$UTIL_PREFIX$, 
  "DAY_SHORT_THURSDAY", $JSCompiler_alias_NULL$$), dvt.$Bundle$.$getTranslatedString$(dvt.$Bundle$.$UTIL_PREFIX$, "DAY_SHORT_FRIDAY", $JSCompiler_alias_NULL$$), dvt.$Bundle$.$getTranslatedString$(dvt.$Bundle$.$UTIL_PREFIX$, "DAY_SHORT_SATURDAY", $JSCompiler_alias_NULL$$), dvt.$Bundle$.$getTranslatedString$(dvt.$Bundle$.$UTIL_PREFIX$, "DAY_SUNDAY", $JSCompiler_alias_NULL$$), dvt.$Bundle$.$getTranslatedString$(dvt.$Bundle$.$UTIL_PREFIX$, "DAY_MONDAY", $JSCompiler_alias_NULL$$), dvt.$Bundle$.$getTranslatedString$(dvt.$Bundle$.$UTIL_PREFIX$, 
  "DAY_TUESDAY", $JSCompiler_alias_NULL$$), dvt.$Bundle$.$getTranslatedString$(dvt.$Bundle$.$UTIL_PREFIX$, "DAY_WEDNESDAY", $JSCompiler_alias_NULL$$), dvt.$Bundle$.$getTranslatedString$(dvt.$Bundle$.$UTIL_PREFIX$, "DAY_THURSDAY", $JSCompiler_alias_NULL$$), dvt.$Bundle$.$getTranslatedString$(dvt.$Bundle$.$UTIL_PREFIX$, "DAY_FRIDAY", $JSCompiler_alias_NULL$$), dvt.$Bundle$.$getTranslatedString$(dvt.$Bundle$.$UTIL_PREFIX$, "DAY_SATURDAY", $JSCompiler_alias_NULL$$)], $monthNames$:[dvt.$Bundle$.$getTranslatedString$(dvt.$Bundle$.$UTIL_PREFIX$, 
  "MONTH_SHORT_JANUARY", $JSCompiler_alias_NULL$$), dvt.$Bundle$.$getTranslatedString$(dvt.$Bundle$.$UTIL_PREFIX$, "MONTH_SHORT_FEBRUARY", $JSCompiler_alias_NULL$$), dvt.$Bundle$.$getTranslatedString$(dvt.$Bundle$.$UTIL_PREFIX$, "MONTH_SHORT_MARCH", $JSCompiler_alias_NULL$$), dvt.$Bundle$.$getTranslatedString$(dvt.$Bundle$.$UTIL_PREFIX$, "MONTH_SHORT_APRIL", $JSCompiler_alias_NULL$$), dvt.$Bundle$.$getTranslatedString$(dvt.$Bundle$.$UTIL_PREFIX$, "MONTH_SHORT_MAY", $JSCompiler_alias_NULL$$), dvt.$Bundle$.$getTranslatedString$(dvt.$Bundle$.$UTIL_PREFIX$, 
  "MONTH_SHORT_JUNE", $JSCompiler_alias_NULL$$), dvt.$Bundle$.$getTranslatedString$(dvt.$Bundle$.$UTIL_PREFIX$, "MONTH_SHORT_JULY", $JSCompiler_alias_NULL$$), dvt.$Bundle$.$getTranslatedString$(dvt.$Bundle$.$UTIL_PREFIX$, "MONTH_SHORT_AUGUST", $JSCompiler_alias_NULL$$), dvt.$Bundle$.$getTranslatedString$(dvt.$Bundle$.$UTIL_PREFIX$, "MONTH_SHORT_SEPTEMBER", $JSCompiler_alias_NULL$$), dvt.$Bundle$.$getTranslatedString$(dvt.$Bundle$.$UTIL_PREFIX$, "MONTH_SHORT_OCTOBER", $JSCompiler_alias_NULL$$), dvt.$Bundle$.$getTranslatedString$(dvt.$Bundle$.$UTIL_PREFIX$, 
  "MONTH_SHORT_NOVEMBER", $JSCompiler_alias_NULL$$), dvt.$Bundle$.$getTranslatedString$(dvt.$Bundle$.$UTIL_PREFIX$, "MONTH_SHORT_DECEMBER", $JSCompiler_alias_NULL$$), dvt.$Bundle$.$getTranslatedString$(dvt.$Bundle$.$UTIL_PREFIX$, "MONTH_JANUARY", $JSCompiler_alias_NULL$$), dvt.$Bundle$.$getTranslatedString$(dvt.$Bundle$.$UTIL_PREFIX$, "MONTH_FEBRUARY", $JSCompiler_alias_NULL$$), dvt.$Bundle$.$getTranslatedString$(dvt.$Bundle$.$UTIL_PREFIX$, "MONTH_MARCH", $JSCompiler_alias_NULL$$), dvt.$Bundle$.$getTranslatedString$(dvt.$Bundle$.$UTIL_PREFIX$, 
  "MONTH_APRIL", $JSCompiler_alias_NULL$$), dvt.$Bundle$.$getTranslatedString$(dvt.$Bundle$.$UTIL_PREFIX$, "MONTH_MAY", $JSCompiler_alias_NULL$$), dvt.$Bundle$.$getTranslatedString$(dvt.$Bundle$.$UTIL_PREFIX$, "MONTH_JUNE", $JSCompiler_alias_NULL$$), dvt.$Bundle$.$getTranslatedString$(dvt.$Bundle$.$UTIL_PREFIX$, "MONTH_JULY", $JSCompiler_alias_NULL$$), dvt.$Bundle$.$getTranslatedString$(dvt.$Bundle$.$UTIL_PREFIX$, "MONTH_AUGUST", $JSCompiler_alias_NULL$$), dvt.$Bundle$.$getTranslatedString$(dvt.$Bundle$.$UTIL_PREFIX$, 
  "MONTH_SEPTEMBER", $JSCompiler_alias_NULL$$), dvt.$Bundle$.$getTranslatedString$(dvt.$Bundle$.$UTIL_PREFIX$, "MONTH_OCTOBER", $JSCompiler_alias_NULL$$), dvt.$Bundle$.$getTranslatedString$(dvt.$Bundle$.$UTIL_PREFIX$, "MONTH_NOVEMBER", $JSCompiler_alias_NULL$$), dvt.$Bundle$.$getTranslatedString$(dvt.$Bundle$.$UTIL_PREFIX$, "MONTH_DECEMBER", $JSCompiler_alias_NULL$$)]};
  this.$_seriesScale$ ? (this.$_seriesConverter$ = $props$$5$$.$seriesConverter$, this.$_seriesTimeAxis$ = new $DvtTimeComponentAxis$$(this.$getCtx$(), $JSCompiler_alias_NULL$$, $JSCompiler_alias_NULL$$, this.$_isVertical$), this.$_seriesTimeAxis$.$setScale$(this.$_seriesScale$), this.$_seriesTimeAxis$.$_converter$ = this.$_seriesConverter$, this.$_isVertical$ ? (this.$_seriesTimeAxis$.$setType$($DvtTimeComponentAxisFormatter$$.SHORT, this.$_dateFormatStrings$), this.$_seriesTimeAxis$.$_defaultConverter$ = 
  this.$_resources$.converterVert) : (this.$_seriesTimeAxis$.$setType$($DvtTimeComponentAxisFormatter$$.$LONG$, this.$_dateFormatStrings$), this.$_seriesTimeAxis$.$_defaultConverter$ = this.$_resources$.converter)) : this.$_seriesTimeAxis$ = $JSCompiler_alias_NULL$$;
  this.$_defaultInversions$ = [$JSCompiler_alias_FALSE$$, $JSCompiler_alias_TRUE$$];
  this.$_timeZoneOffsets$ = $props$$5$$.$timeZoneOffsets$;
  this.$_itemPosition$ = $props$$5$$.$itemPosition$;
  dvt.$Timeline$.$superclass$.$_applyParsedProperties$.call(this, $props$$5$$)
};
function $JSCompiler_StaticMethods_getTimeAxisVisibleSize$$($JSCompiler_StaticMethods_getTimeAxisVisibleSize$self$$, $seriesCount$$25$$) {
  return!$JSCompiler_StaticMethods_getTimeAxisVisibleSize$self$$.$_hasOverview$ && 1 == $seriesCount$$25$$ ? $JSCompiler_StaticMethods_getTimeAxisVisibleSize$self$$.$_timeAxis$.$getSize$() - $JSCompiler_StaticMethods_getTimeAxisVisibleSize$self$$.$_timeAxis$.$getBorderWidth$() : $JSCompiler_StaticMethods_getTimeAxisVisibleSize$self$$.$_timeAxis$.$getSize$()
}
$JSCompiler_prototypeAlias$$.select = function $$JSCompiler_prototypeAlias$$$select$($selection$$24$$) {
  this.$Options$.selection = dvt.$JsonUtils$.$clone$($selection$$24$$);
  this.$SelectionHandler$ && $JSCompiler_StaticMethods_applyInitialSelections$$(this)
};
dvt.$Timeline$.prototype.select = dvt.$Timeline$.prototype.select;
dvt.$Timeline$.prototype.$render$ = function $dvt$$Timeline$$$$render$$($context$$inline_4992_i$$inline_5018_options$$267_props$$6$$, $series$$inline_5016_startTime$$inline_4990_width$$129$$, $endTime$$inline_4991_height$$110_seriesCount$$inline_5017$$) {
  if($context$$inline_4992_i$$inline_5018_options$$267_props$$6$$) {
    this.$SetOptions$($context$$inline_4992_i$$inline_5018_options$$267_props$$6$$);
    this.$Options$ && (this.$_resources$ = this.$Options$._resources, this.$_resources$ == $JSCompiler_alias_NULL$$ && (this.$_resources$ = []));
    this.$Width$ = $series$$inline_5016_startTime$$inline_4990_width$$129$$;
    this.$Height$ = $endTime$$inline_4991_height$$110_seriesCount$$inline_5017$$;
    $context$$inline_4992_i$$inline_5018_options$$267_props$$6$$ = this.$Parse$(this.$Options$);
    this.$_applyParsedProperties$($context$$inline_4992_i$$inline_5018_options$$267_props$$6$$);
    this.$_fetchStartPos$ = 0;
    this.$_fetchEndPos$ = this.$_isVertical$ ? $endTime$$inline_4991_height$$110_seriesCount$$inline_5017$$ : $series$$inline_5016_startTime$$inline_4990_width$$129$$;
    this.$Options$.styleDefaults && (this.$_axisStyleDefaults$ = this.$Options$.styleDefaults.minorAxis, this.$_majorAxisStyleDefaults$ = this.$Options$.styleDefaults.majorAxis, this.$_seriesStyleDefaults$ = this.$Options$.styleDefaults.series);
    $JSCompiler_StaticMethods_prepareViewportLength$$(this);
    if(this.$_scale$) {
      $series$$inline_5016_startTime$$inline_4990_width$$129$$ = this.$_start$;
      $endTime$$inline_4991_height$$110_seriesCount$$inline_5017$$ = this.$_end$;
      $context$$inline_4992_i$$inline_5018_options$$267_props$$6$$ = this.$getCtx$();
      var $axisLabelStyle$$inline_4993_s$$inline_5020_seriesOptions$$inline_5019$$ = $DvtTimelineStyleUtils$$.$getAxisLabelStyle$(this.$Options$);
      this.$_timeAxis$ = new $DvtTimeComponentAxis$$($context$$inline_4992_i$$inline_5018_options$$267_props$$6$$, $JSCompiler_alias_NULL$$, $JSCompiler_alias_NULL$$, this.$_isVertical$, this.$_zoomOrder$);
      this.$_timeAxis$.$_converter$ = this.$_converter$;
      this.$_timeAxis$.$setType$($DvtTimeComponentAxisFormatter$$.SHORT, this.$_dateFormatStrings$);
      this.$_dates$ = [];
      this.$_labels$ = [];
      this.$_zoomLevelLengths$ = [];
      if(this.$_isVertical$) {
        var $defaultLength$$inline_4994$$ = $DvtTimeComponentAxis$$.$DEFAULT_INTERVAL_HEIGHT$;
        this.$_timeAxis$.$_defaultConverter$ = this.$_resources$.converterVert
      }else {
        $defaultLength$$inline_4994$$ = $DvtTimeComponentAxis$$.$DEFAULT_INTERVAL_WIDTH$, this.$_timeAxis$.$_defaultConverter$ = this.$_resources$.converter
      }
      this.$_timeZoneOffsets$ && (this.$_timeAxis$.$_timeZoneOffsets$ = this.$_timeZoneOffsets$);
      for(var $i$$inline_4995$$ = 0;$i$$inline_4995$$ < this.$_timeAxis$.$_zoomOrder$.length;$i$$inline_4995$$++) {
        var $scale$$inline_4996_viewTime$$inline_5012_widthFactor$$inline_5013$$ = this.$_timeAxis$.$_zoomOrder$[$i$$inline_4995$$];
        this.$_timeAxis$.$setScale$($scale$$inline_4996_viewTime$$inline_5012_widthFactor$$inline_5013$$);
        var $JSCompiler_StaticMethods_setContentSize$self$$inline_6721_axis$$inline_4997$$ = new dvt.$Rect$($context$$inline_4992_i$$inline_5018_options$$267_props$$6$$, 0, 0, 0, 0, "tempAxis"), $minLength$$inline_4998_zoomLevelLength$$inline_5011$$ = Infinity, $contentSize$$inline_6722_maxSize$$inline_4999$$ = 0, $dates$$inline_5000$$ = [], $labels$$inline_5001$$ = [], $currentTime$$inline_5002_lengthFactor$$inline_5010$$ = this.$_timeAxis$.$adjustDate$($series$$inline_5016_startTime$$inline_4990_width$$129$$).getTime();
        for($dates$$inline_5000$$.push($currentTime$$inline_5002_lengthFactor$$inline_5010$$);$currentTime$$inline_5002_lengthFactor$$inline_5010$$ < $endTime$$inline_4991_height$$110_seriesCount$$inline_5017$$;) {
          var $labelText$$inline_5003_nextTime$$inline_5005$$ = $JSCompiler_StaticMethods_formatDate$$(this.$_timeAxis$, new Date($currentTime$$inline_5002_lengthFactor$$inline_5010$$)), $label$$inline_5004_labelLength$$inline_5009_lengthDim$$inline_5007$$ = new dvt.$OutputText$($context$$inline_4992_i$$inline_5018_options$$267_props$$6$$, $labelText$$inline_5003_nextTime$$inline_5005$$, 0, 0, "s_label" + $currentTime$$inline_5002_lengthFactor$$inline_5010$$);
          $label$$inline_5004_labelLength$$inline_5009_lengthDim$$inline_5007$$.$setCSSStyle$($axisLabelStyle$$inline_4993_s$$inline_5020_seriesOptions$$inline_5019$$);
          $label$$inline_5004_labelLength$$inline_5009_lengthDim$$inline_5007$$.time = $currentTime$$inline_5002_lengthFactor$$inline_5010$$;
          $labels$$inline_5001$$.push($label$$inline_5004_labelLength$$inline_5009_lengthDim$$inline_5007$$);
          $labelText$$inline_5003_nextTime$$inline_5005$$ = this.$_timeAxis$.$getNextDate$($currentTime$$inline_5002_lengthFactor$$inline_5010$$).getTime();
          $JSCompiler_StaticMethods_setContentSize$self$$inline_6721_axis$$inline_4997$$.$addChild$($label$$inline_5004_labelLength$$inline_5009_lengthDim$$inline_5007$$);
          var $dim$$inline_5006_sizeDim$$inline_5008$$ = $label$$inline_5004_labelLength$$inline_5009_lengthDim$$inline_5007$$.$getDimensions$();
          $JSCompiler_StaticMethods_setContentSize$self$$inline_6721_axis$$inline_4997$$.removeChild($label$$inline_5004_labelLength$$inline_5009_lengthDim$$inline_5007$$);
          this.$_isVertical$ ? ($label$$inline_5004_labelLength$$inline_5009_lengthDim$$inline_5007$$ = $dim$$inline_5006_sizeDim$$inline_5008$$.$h$, $dim$$inline_5006_sizeDim$$inline_5008$$ = $dim$$inline_5006_sizeDim$$inline_5008$$.$w$) : ($label$$inline_5004_labelLength$$inline_5009_lengthDim$$inline_5007$$ = $dim$$inline_5006_sizeDim$$inline_5008$$.$w$, $dim$$inline_5006_sizeDim$$inline_5008$$ = $dim$$inline_5006_sizeDim$$inline_5008$$.$h$);
          $label$$inline_5004_labelLength$$inline_5009_lengthDim$$inline_5007$$ = Math.max($defaultLength$$inline_4994$$, $label$$inline_5004_labelLength$$inline_5009_lengthDim$$inline_5007$$ + 2 * $DvtTimeComponentAxis$$.$DEFAULT_INTERVAL_PADDING$);
          $currentTime$$inline_5002_lengthFactor$$inline_5010$$ = ($labelText$$inline_5003_nextTime$$inline_5005$$ - $currentTime$$inline_5002_lengthFactor$$inline_5010$$) / $label$$inline_5004_labelLength$$inline_5009_lengthDim$$inline_5007$$;
          $currentTime$$inline_5002_lengthFactor$$inline_5010$$ < $minLength$$inline_4998_zoomLevelLength$$inline_5011$$ && ($minLength$$inline_4998_zoomLevelLength$$inline_5011$$ = $currentTime$$inline_5002_lengthFactor$$inline_5010$$);
          $dim$$inline_5006_sizeDim$$inline_5008$$ > $contentSize$$inline_6722_maxSize$$inline_4999$$ && ($contentSize$$inline_6722_maxSize$$inline_4999$$ = $dim$$inline_5006_sizeDim$$inline_5008$$);
          $currentTime$$inline_5002_lengthFactor$$inline_5010$$ = $labelText$$inline_5003_nextTime$$inline_5005$$;
          $dates$$inline_5000$$.push($currentTime$$inline_5002_lengthFactor$$inline_5010$$)
        }
        $JSCompiler_StaticMethods_setContentSize$self$$inline_6721_axis$$inline_4997$$ = this.$_timeAxis$;
        $contentSize$$inline_6722_maxSize$$inline_4999$$ += 2 * $DvtTimeComponentAxis$$.$DEFAULT_INTERVAL_PADDING$;
        $contentSize$$inline_6722_maxSize$$inline_4999$$ > $JSCompiler_StaticMethods_setContentSize$self$$inline_6721_axis$$inline_4997$$.$_contentSize$ && ($JSCompiler_StaticMethods_setContentSize$self$$inline_6721_axis$$inline_4997$$.$_contentSize$ = $contentSize$$inline_6722_maxSize$$inline_4999$$);
        this.$_dates$.push($dates$$inline_5000$$);
        this.$_labels$.push($labels$$inline_5001$$);
        $minLength$$inline_4998_zoomLevelLength$$inline_5011$$ = ($endTime$$inline_4991_height$$110_seriesCount$$inline_5017$$ - $series$$inline_5016_startTime$$inline_4990_width$$129$$) / $minLength$$inline_4998_zoomLevelLength$$inline_5011$$;
        this.$_zoomLevelLengths$.push($minLength$$inline_4998_zoomLevelLength$$inline_5011$$);
        $scale$$inline_4996_viewTime$$inline_5012_widthFactor$$inline_5013$$ == this.$_scale$ && (this.$_zoomLevelOrder$ = $i$$inline_4995$$, this.$_setLength$ && ($JSCompiler_StaticMethods_setContentLength$$(this, $minLength$$inline_4998_zoomLevelLength$$inline_5011$$), this.$_setLength$ = $JSCompiler_alias_FALSE$$, this.$_viewStartTime$ == $JSCompiler_alias_NULL$$ ? this.$_viewEndTime$ != $JSCompiler_alias_NULL$$ ? (this.$_viewStartTime$ = this.$_viewEndTime$ - this.$_canvasLength$ / $minLength$$inline_4998_zoomLevelLength$$inline_5011$$ * 
        ($endTime$$inline_4991_height$$110_seriesCount$$inline_5017$$ - $series$$inline_5016_startTime$$inline_4990_width$$129$$), this.$_viewStartTime$ < this.$_start$ && (this.$_viewStartTime$ = this.$_start$), $scale$$inline_4996_viewTime$$inline_5012_widthFactor$$inline_5013$$ = this.$_viewEndTime$ - this.$_viewStartTime$, $scale$$inline_4996_viewTime$$inline_5012_widthFactor$$inline_5013$$ = this.$_canvasLength$ / $scale$$inline_4996_viewTime$$inline_5012_widthFactor$$inline_5013$$, $JSCompiler_StaticMethods_setContentLength$$(this, 
        $scale$$inline_4996_viewTime$$inline_5012_widthFactor$$inline_5013$$ * (this.$_end$ - this.$_start$)), this.$_startPos$ = $scale$$inline_4996_viewTime$$inline_5012_widthFactor$$inline_5013$$ * (this.$_start$ - this.$_viewStartTime$), this.$isRTL$() && !this.$_isVertical$ && (this.$_startPos$ = this.$_backgroundWidth$ - this.$_contentLength$ - this.$_startPos$)) : (this.$_viewStartTime$ = this.$_start$, this.$_startPos$ = 0, this.$isRTL$() && !this.$_isVertical$ && (this.$_startPos$ = this.$_backgroundWidth$ - 
        this.$_contentLength$ - this.$_startPos$), this.$_viewEndTime$ = this.$_canvasLength$ / $minLength$$inline_4998_zoomLevelLength$$inline_5011$$ * ($endTime$$inline_4991_height$$110_seriesCount$$inline_5017$$ - $series$$inline_5016_startTime$$inline_4990_width$$129$$) + this.$_viewStartTime$, this.$_viewEndTime$ > this.$_end$ && (this.$_viewEndTime$ = this.$_end$)) : (this.$_viewEndTime$ = this.$_canvasLength$ / $minLength$$inline_4998_zoomLevelLength$$inline_5011$$ * ($endTime$$inline_4991_height$$110_seriesCount$$inline_5017$$ - 
        $series$$inline_5016_startTime$$inline_4990_width$$129$$) + this.$_viewStartTime$, this.$_viewEndTime$ > this.$_end$ && (this.$_viewEndTime$ = this.$_end$), $scale$$inline_4996_viewTime$$inline_5012_widthFactor$$inline_5013$$ = this.$_viewEndTime$ - this.$_viewStartTime$, $scale$$inline_4996_viewTime$$inline_5012_widthFactor$$inline_5013$$ = this.$_canvasLength$ / $scale$$inline_4996_viewTime$$inline_5012_widthFactor$$inline_5013$$, $JSCompiler_StaticMethods_setContentLength$$(this, $scale$$inline_4996_viewTime$$inline_5012_widthFactor$$inline_5013$$ * 
        (this.$_end$ - this.$_start$)), this.$_startPos$ = $scale$$inline_4996_viewTime$$inline_5012_widthFactor$$inline_5013$$ * (this.$_start$ - this.$_viewStartTime$), this.$isRTL$() && !this.$_isVertical$ && (this.$_startPos$ = this.$_backgroundWidth$ - this.$_contentLength$ - this.$_startPos$))));
        0 == $i$$inline_4995$$ && (this.$_maxContentLength$ = $labels$$inline_5001$$.length * this.$_canvasLength$)
      }
      this.$_timeAxis$.$setScale$(this.$_scale$);
      $JSCompiler_StaticMethods_applyAxisStyleValues$$(this)
    }
    if($series$$inline_5016_startTime$$inline_4990_width$$129$$ = this.$Options$.series) {
      $endTime$$inline_4991_height$$110_seriesCount$$inline_5017$$ = Math.min($series$$inline_5016_startTime$$inline_4990_width$$129$$.length, 2);
      this.$_seriesOptions$ = [];
      if(this.$_series$) {
        if($endTime$$inline_4991_height$$110_seriesCount$$inline_5017$$ != this.$_series$.length) {
          for($context$$inline_4992_i$$inline_5018_options$$267_props$$6$$ = 0;$context$$inline_4992_i$$inline_5018_options$$267_props$$6$$ < this.$_series$.length;$context$$inline_4992_i$$inline_5018_options$$267_props$$6$$++) {
            this.$_innerCanvas$.removeChild(this.$_series$[$context$$inline_4992_i$$inline_5018_options$$267_props$$6$$])
          }
          this.$_series$ = []
        }
      }else {
        this.$_series$ = []
      }
      for($context$$inline_4992_i$$inline_5018_options$$267_props$$6$$ = 0;$context$$inline_4992_i$$inline_5018_options$$267_props$$6$$ < $endTime$$inline_4991_height$$110_seriesCount$$inline_5017$$;$context$$inline_4992_i$$inline_5018_options$$267_props$$6$$++) {
        $axisLabelStyle$$inline_4993_s$$inline_5020_seriesOptions$$inline_5019$$ = $series$$inline_5016_startTime$$inline_4990_width$$129$$[$context$$inline_4992_i$$inline_5018_options$$267_props$$6$$];
        $axisLabelStyle$$inline_4993_s$$inline_5020_seriesOptions$$inline_5019$$.start = this.$_start$;
        $axisLabelStyle$$inline_4993_s$$inline_5020_seriesOptions$$inline_5019$$.end = this.$_end$;
        $axisLabelStyle$$inline_4993_s$$inline_5020_seriesOptions$$inline_5019$$.inverted = this.$_defaultInversions$[$context$$inline_4992_i$$inline_5018_options$$267_props$$6$$];
        $axisLabelStyle$$inline_4993_s$$inline_5020_seriesOptions$$inline_5019$$.orientation = this.$Options$.orientation;
        $axisLabelStyle$$inline_4993_s$$inline_5020_seriesOptions$$inline_5019$$.referenceObjects = this.$_referenceObjects$;
        $axisLabelStyle$$inline_4993_s$$inline_5020_seriesOptions$$inline_5019$$.timeline = this;
        $axisLabelStyle$$inline_4993_s$$inline_5020_seriesOptions$$inline_5019$$.index = $context$$inline_4992_i$$inline_5018_options$$267_props$$6$$;
        $axisLabelStyle$$inline_4993_s$$inline_5020_seriesOptions$$inline_5019$$.animationOnDisplay = this.$Options$.animationOnDisplay;
        $axisLabelStyle$$inline_4993_s$$inline_5020_seriesOptions$$inline_5019$$.animationOnDataChange = this.$Options$.animationOnDataChange;
        this.$Options$.majorAxis && ($axisLabelStyle$$inline_4993_s$$inline_5020_seriesOptions$$inline_5019$$.scale = this.$Options$.majorAxis.scale, $axisLabelStyle$$inline_4993_s$$inline_5020_seriesOptions$$inline_5019$$.timeAxis = this.$_seriesTimeAxis$);
        if($axisLabelStyle$$inline_4993_s$$inline_5020_seriesOptions$$inline_5019$$.styleDefaults = this.$Options$.styleDefaults) {
          $axisLabelStyle$$inline_4993_s$$inline_5020_seriesOptions$$inline_5019$$.seriesStyleDefaults = this.$_seriesStyleDefaults$, $axisLabelStyle$$inline_4993_s$$inline_5020_seriesOptions$$inline_5019$$.axisStyleDefaults = this.$_majorAxisStyleDefaults$
        }
        $axisLabelStyle$$inline_4993_s$$inline_5020_seriesOptions$$inline_5019$$._isRandomItemLayout = "random" == this.$_itemPosition$;
        this.$_seriesOptions$.push($axisLabelStyle$$inline_4993_s$$inline_5020_seriesOptions$$inline_5019$$);
        this.$_series$[$context$$inline_4992_i$$inline_5018_options$$267_props$$6$$] == $JSCompiler_alias_NULL$$ && ($axisLabelStyle$$inline_4993_s$$inline_5020_seriesOptions$$inline_5019$$ = new $DvtTimelineSeries$$(this.$getCtx$(), this.$HandleEvent$, this), this.$_series$.push($axisLabelStyle$$inline_4993_s$$inline_5020_seriesOptions$$inline_5019$$))
      }
    }else {
      this.$_series$ = []
    }
    $DvtTimelineRenderer$$.$renderTimeline$(this);
    this.$UpdateAriaAttributes$();
    this.$getCtx$().$setKeyboardFocusArray$([this])
  }else {
    this.$_handleResize$($series$$inline_5016_startTime$$inline_4990_width$$129$$, $endTime$$inline_4991_height$$110_seriesCount$$inline_5017$$)
  }
};
dvt.$Timeline$.prototype.render = dvt.$Timeline$.prototype.$render$;
function $JSCompiler_StaticMethods_hasValidOptions$$($JSCompiler_StaticMethods_hasValidOptions$self_hasValidViewEnd$$) {
  var $hasValidScale$$ = $JSCompiler_StaticMethods_hasValidOptions$self_hasValidViewEnd$$.$_scale$ && -1 != dvt.$ArrayUtils$.$getIndex$($DvtTimeComponentAxis$$.$_VALID_SCALES$, $JSCompiler_StaticMethods_hasValidOptions$self_hasValidViewEnd$$.$_scale$), $hasValidStartAndEnd$$ = $JSCompiler_StaticMethods_hasValidOptions$self_hasValidViewEnd$$.$_start$ && $JSCompiler_StaticMethods_hasValidOptions$self_hasValidViewEnd$$.$_end$ && $JSCompiler_StaticMethods_hasValidOptions$self_hasValidViewEnd$$.$_end$ > 
  $JSCompiler_StaticMethods_hasValidOptions$self_hasValidViewEnd$$.$_start$, $hasValidSeries$$ = $JSCompiler_StaticMethods_hasValidOptions$self_hasValidViewEnd$$.$_series$ && 0 < $JSCompiler_StaticMethods_hasValidOptions$self_hasValidViewEnd$$.$_series$.length, $JSCompiler_temp$$26_hasValidSeriesItems_i$$inline_5027$$;
  if($hasValidSeries$$) {
    a: {
      for($JSCompiler_temp$$26_hasValidSeriesItems_i$$inline_5027$$ = 0;$JSCompiler_temp$$26_hasValidSeriesItems_i$$inline_5027$$ < $JSCompiler_StaticMethods_hasValidOptions$self_hasValidViewEnd$$.$_seriesOptions$.length;$JSCompiler_temp$$26_hasValidSeriesItems_i$$inline_5027$$++) {
        var $hasValidSeriesScale_seriesOptions$$inline_5028$$ = $JSCompiler_StaticMethods_hasValidOptions$self_hasValidViewEnd$$.$_seriesOptions$[$JSCompiler_temp$$26_hasValidSeriesItems_i$$inline_5027$$];
        if($hasValidSeriesScale_seriesOptions$$inline_5028$$.$items$) {
          for(var $hasValidViewport_j$$inline_5029$$ = 0;$hasValidViewport_j$$inline_5029$$ < $hasValidSeriesScale_seriesOptions$$inline_5028$$.$items$.length;$hasValidViewport_j$$inline_5029$$++) {
            var $end$$inline_5032_item$$inline_5030$$ = $hasValidSeriesScale_seriesOptions$$inline_5028$$.$items$[$hasValidViewport_j$$inline_5029$$], $hasValidViewStart_start$$inline_5031$$ = (new Date($end$$inline_5032_item$$inline_5030$$.start)).getTime();
            if(!$hasValidViewStart_start$$inline_5031$$) {
              $JSCompiler_temp$$26_hasValidSeriesItems_i$$inline_5027$$ = $JSCompiler_alias_FALSE$$;
              break a
            }
            if($end$$inline_5032_item$$inline_5030$$.hasOwnProperty("end") && ($end$$inline_5032_item$$inline_5030$$ = (new Date($end$$inline_5032_item$$inline_5030$$.end)).getTime(), !($end$$inline_5032_item$$inline_5030$$ && $end$$inline_5032_item$$inline_5030$$ > $hasValidViewStart_start$$inline_5031$$))) {
              $JSCompiler_temp$$26_hasValidSeriesItems_i$$inline_5027$$ = $JSCompiler_alias_FALSE$$;
              break a
            }
          }
        }
      }
      $JSCompiler_temp$$26_hasValidSeriesItems_i$$inline_5027$$ = $JSCompiler_alias_TRUE$$
    }
  }else {
    $JSCompiler_temp$$26_hasValidSeriesItems_i$$inline_5027$$ = $JSCompiler_alias_FALSE$$
  }
  $hasValidSeriesScale_seriesOptions$$inline_5028$$ = $JSCompiler_StaticMethods_hasValidOptions$self_hasValidViewEnd$$.$_seriesScale$ ? -1 != dvt.$ArrayUtils$.$getIndex$($DvtTimeComponentAxis$$.$_VALID_SCALES$, $JSCompiler_StaticMethods_hasValidOptions$self_hasValidViewEnd$$.$_seriesScale$) : $JSCompiler_alias_TRUE$$;
  $hasValidViewport_j$$inline_5029$$ = $JSCompiler_StaticMethods_hasValidOptions$self_hasValidViewEnd$$.$_viewStartTime$ && $JSCompiler_StaticMethods_hasValidOptions$self_hasValidViewEnd$$.$_viewEndTime$ ? $JSCompiler_StaticMethods_hasValidOptions$self_hasValidViewEnd$$.$_viewEndTime$ > $JSCompiler_StaticMethods_hasValidOptions$self_hasValidViewEnd$$.$_viewStartTime$ : $JSCompiler_alias_TRUE$$;
  $hasValidViewStart_start$$inline_5031$$ = $JSCompiler_StaticMethods_hasValidOptions$self_hasValidViewEnd$$.$_viewStartTime$ ? $JSCompiler_StaticMethods_hasValidOptions$self_hasValidViewEnd$$.$_viewStartTime$ >= $JSCompiler_StaticMethods_hasValidOptions$self_hasValidViewEnd$$.$_start$ && $JSCompiler_StaticMethods_hasValidOptions$self_hasValidViewEnd$$.$_viewStartTime$ < $JSCompiler_StaticMethods_hasValidOptions$self_hasValidViewEnd$$.$_end$ : $JSCompiler_alias_TRUE$$;
  $JSCompiler_StaticMethods_hasValidOptions$self_hasValidViewEnd$$ = $JSCompiler_StaticMethods_hasValidOptions$self_hasValidViewEnd$$.$_viewEndTime$ ? $JSCompiler_StaticMethods_hasValidOptions$self_hasValidViewEnd$$.$_viewEndTime$ > $JSCompiler_StaticMethods_hasValidOptions$self_hasValidViewEnd$$.$_start$ && $JSCompiler_StaticMethods_hasValidOptions$self_hasValidViewEnd$$.$_viewEndTime$ <= $JSCompiler_StaticMethods_hasValidOptions$self_hasValidViewEnd$$.$_end$ : $JSCompiler_alias_TRUE$$;
  return $hasValidScale$$ && $hasValidStartAndEnd$$ && $hasValidSeries$$ && $JSCompiler_temp$$26_hasValidSeriesItems_i$$inline_5027$$ && $hasValidSeriesScale_seriesOptions$$inline_5028$$ && $hasValidViewport_j$$inline_5029$$ && $hasValidViewStart_start$$inline_5031$$ && $JSCompiler_StaticMethods_hasValidOptions$self_hasValidViewEnd$$
}
$JSCompiler_prototypeAlias$$ = dvt.$Timeline$.prototype;
$JSCompiler_prototypeAlias$$.$GetComponentDescription$ = function $$JSCompiler_prototypeAlias$$$$GetComponentDescription$$() {
  return this.$_shortDesc$ ? this.$_shortDesc$ : dvt.$Bundle$.$getTranslatedString$(dvt.$Bundle$.$UTIL_PREFIX$, "TIMELINE")
};
function $JSCompiler_StaticMethods_isAnimating$$($JSCompiler_StaticMethods_isAnimating$self$$) {
  for(var $i$$621$$ = 0;$i$$621$$ < $JSCompiler_StaticMethods_isAnimating$self$$.$_series$.length;$i$$621$$++) {
    if($JSCompiler_StaticMethods_isAnimating$self$$.$_series$[$i$$621$$].$_isAnimating$) {
      return $JSCompiler_alias_TRUE$$
    }
  }
  return $JSCompiler_alias_FALSE$$
}
function $JSCompiler_StaticMethods_showThenHideHotspots$$($JSCompiler_StaticMethods_showThenHideHotspots$self$$, $series$$17$$) {
  if($JSCompiler_StaticMethods_hasValidOptions$$($JSCompiler_StaticMethods_showThenHideHotspots$self$$)) {
    for(var $animator$$134$$ = new dvt.$Animator$($JSCompiler_StaticMethods_showThenHideHotspots$self$$.$getCtx$(), $DvtTimelineStyleUtils$$.$getHotspotAnimationDuration$(), 0, dvt.$Easing$.$linear$), $i$$622$$ = 0;$i$$622$$ < $JSCompiler_StaticMethods_showThenHideHotspots$self$$.$_scrollHotspots$.length;$i$$622$$++) {
      var $hotspot$$ = $JSCompiler_StaticMethods_showThenHideHotspots$self$$.$_scrollHotspots$[$i$$622$$], $id$$201$$ = $hotspot$$.getId(), $show$$2$$ = $JSCompiler_alias_TRUE$$;
      if($JSCompiler_StaticMethods_showThenHideHotspots$self$$.$_contentLength$ <= $JSCompiler_StaticMethods_showThenHideHotspots$self$$.$_canvasLength$ && ("lhs" == $id$$201$$ || "rhs" == $id$$201$$)) {
        $show$$2$$ = $JSCompiler_alias_FALSE$$
      }
      var $pId$$1_parentSeries$$ = $hotspot$$.getParent().getId();
      if($pId$$1_parentSeries$$ && ($pId$$1_parentSeries$$ = $pId$$1_parentSeries$$.substring($pId$$1_parentSeries$$.length - 1), $series$$17$$ != $JSCompiler_alias_NULL$$ && $series$$17$$ != $pId$$1_parentSeries$$ && ($show$$2$$ = $JSCompiler_alias_FALSE$$), $JSCompiler_StaticMethods_showThenHideHotspots$self$$.$_series$[$pId$$1_parentSeries$$].$_maxOverflowValue$ <= $JSCompiler_StaticMethods_showThenHideHotspots$self$$.$_seriesSize$ && ("ths" == $id$$201$$ || "bhs" == $id$$201$$))) {
        $show$$2$$ = $JSCompiler_alias_FALSE$$
      }
      $show$$2$$ && $animator$$134$$.$addProp$(dvt.$Animator$.$TYPE_NUMBER$, $hotspot$$, $hotspot$$.$getAlpha$, $hotspot$$.$setAlpha$, $DvtTimelineStyleUtils$$.$getHotspotOpacity$())
    }
    dvt.$Playable$.$appendOnEnd$($animator$$134$$, $JSCompiler_StaticMethods_showThenHideHotspots$self$$.$hideHotspots$, $JSCompiler_StaticMethods_showThenHideHotspots$self$$);
    $animator$$134$$.play()
  }
}
$JSCompiler_prototypeAlias$$.$hideHotspots$ = function $$JSCompiler_prototypeAlias$$$$hideHotspots$$() {
  var $hotSpotsLength$$ = this.$_scrollHotspots$.length;
  if(0 != $hotSpotsLength$$) {
    for(var $animator$$135$$ = new dvt.$Animator$(this.$getCtx$(), $DvtTimelineStyleUtils$$.$getHotspotAnimationDuration$(), 0, dvt.$Easing$.$linear$), $i$$623$$ = 0;$i$$623$$ < $hotSpotsLength$$;$i$$623$$++) {
      var $hotspot$$1$$ = this.$_scrollHotspots$[$i$$623$$];
      $animator$$135$$.$addProp$(dvt.$Animator$.$TYPE_NUMBER$, $hotspot$$1$$, $hotspot$$1$$.$getAlpha$, $hotspot$$1$$.$setAlpha$, 0)
    }
    $animator$$135$$.play()
  }
};
$JSCompiler_prototypeAlias$$.$applyStyleValues$ = function $$JSCompiler_prototypeAlias$$$$applyStyleValues$$() {
  this.$_style$ = new dvt.$CSSStyle$($DvtTimelineStyleUtils$$.$getTimelineStyle$());
  if(this.$Options$.styleDefaults) {
    var $borderWidth$$16_overviewStyle$$6_splits_style$$97$$ = this.$Options$.styleDefaults.borderColor;
    $borderWidth$$16_overviewStyle$$6_splits_style$$97$$ && this.$_style$.$parseInlineStyle$("border-color:" + $borderWidth$$16_overviewStyle$$6_splits_style$$97$$ + ";")
  }
  if(this.$_hasOverview$ && (this.$_overviewSize$ = this.$_isVertical$ ? $DvtTimelineStyleUtils$$.$getOverviewWidth$() : $DvtTimelineStyleUtils$$.$getOverviewHeight$(), $borderWidth$$16_overviewStyle$$6_splits_style$$97$$ = this.$Options$.overview.style)) {
    for(var $borderWidth$$16_overviewStyle$$6_splits_style$$97$$ = $borderWidth$$16_overviewStyle$$6_splits_style$$97$$.split(";"), $doubleBorderWidth_i$$624$$ = 0;$doubleBorderWidth_i$$624$$ < $borderWidth$$16_overviewStyle$$6_splits_style$$97$$.length;$doubleBorderWidth_i$$624$$++) {
      var $s$$134$$ = $borderWidth$$16_overviewStyle$$6_splits_style$$97$$[$doubleBorderWidth_i$$624$$];
      if($s$$134$$ && 0 < $s$$134$$.length) {
        var $colonIndex$$2$$ = $s$$134$$.indexOf(":");
        if(-1 < $colonIndex$$2$$) {
          var $attrName$$1$$ = dvt.$StringUtils$.trim($s$$134$$.substring(0, $colonIndex$$2$$));
          if(this.$_isVertical$ && "width" == $attrName$$1$$ || !this.$_isVertical$ && "height" == $attrName$$1$$) {
            this.$_overviewSize$ = parseInt(dvt.$StringUtils$.trim($s$$134$$.substring($colonIndex$$2$$ + 1)), 10);
            break
          }
        }
      }
    }
  }
  dvt.$Timeline$.$superclass$.$applyStyleValues$.call(this);
  $borderWidth$$16_overviewStyle$$6_splits_style$$97$$ = this.$_style$.$getBorderWidth$();
  $doubleBorderWidth_i$$624$$ = 2 * $borderWidth$$16_overviewStyle$$6_splits_style$$97$$;
  this.$_style$.$parseInlineStyle$("border:" + $doubleBorderWidth_i$$624$$ + "px;");
  this.$_startY$ = this.$_startX$ = $borderWidth$$16_overviewStyle$$6_splits_style$$97$$;
  this.$_backgroundWidth$ = this.$Width$;
  this.$_backgroundHeight$ = this.$Height$;
  this.$_isVertical$ ? (this.$_canvasLength$ = this.$_backgroundHeight$ - $doubleBorderWidth_i$$624$$, this.$_hasOverview$ ? (this.$_canvasSize$ = this.$_backgroundWidth$ - this.$_overviewSize$ - $doubleBorderWidth_i$$624$$, this.$isRTL$() && (this.$_startX$ += this.$_overviewSize$)) : this.$_canvasSize$ = this.$_backgroundWidth$ - $doubleBorderWidth_i$$624$$) : (this.$_canvasLength$ = this.$_backgroundWidth$ - $doubleBorderWidth_i$$624$$, this.$_canvasSize$ = this.$_hasOverview$ ? this.$Height$ - 
  this.$_overviewSize$ - $doubleBorderWidth_i$$624$$ : this.$Height$ - $doubleBorderWidth_i$$624$$)
};
function $JSCompiler_StaticMethods_applyAxisStyleValues$$($JSCompiler_StaticMethods_applyAxisStyleValues$self$$) {
  $JSCompiler_StaticMethods_applyAxisStyleValues$self$$.$_axisStyle$ = new dvt.$CSSStyle$($DvtTimelineStyleUtils$$.$getAxisStyle$());
  if($JSCompiler_StaticMethods_applyAxisStyleValues$self$$.$_axisStyleDefaults$) {
    var $axisStyles_r$$64$$ = "", $g$$10_style$$98$$ = $JSCompiler_StaticMethods_applyAxisStyleValues$self$$.$_axisStyleDefaults$.backgroundColor;
    $g$$10_style$$98$$ && ($axisStyles_r$$64$$ = $axisStyles_r$$64$$ + "background-color:" + $g$$10_style$$98$$ + ";");
    ($g$$10_style$$98$$ = $JSCompiler_StaticMethods_applyAxisStyleValues$self$$.$_axisStyleDefaults$.borderColor) && ($axisStyles_r$$64$$ = $axisStyles_r$$64$$ + "border-color:" + $g$$10_style$$98$$ + ";");
    ($g$$10_style$$98$$ = $JSCompiler_StaticMethods_applyAxisStyleValues$self$$.$_axisStyleDefaults$.borderWidth) && ($axisStyles_r$$64$$ = $axisStyles_r$$64$$ + "border-width:" + $g$$10_style$$98$$ + ";");
    $JSCompiler_StaticMethods_applyAxisStyleValues$self$$.$_axisStyle$.$parseInlineStyle$($axisStyles_r$$64$$)
  }
  $JSCompiler_StaticMethods_applyAxisStyleValues$self$$.$_axisStyle$.$parseInlineStyle$($JSCompiler_StaticMethods_applyAxisStyleValues$self$$.$_axisInlineStyle$);
  $JSCompiler_StaticMethods_applyAxisStyleValues$self$$.$_axisBorderWidth$ = $JSCompiler_StaticMethods_applyAxisStyleValues$self$$.$_axisStyle$.$getBorderWidth$();
  $JSCompiler_StaticMethods_applyAxisStyleValues$self$$.$_axisStyle$.$parseInlineStyle$("border:" + 2 * $JSCompiler_StaticMethods_applyAxisStyleValues$self$$.$_axisBorderWidth$ + "px;");
  $JSCompiler_StaticMethods_applyAxisStyleValues$self$$.$_timeAxis$.$setBorderWidth$($JSCompiler_StaticMethods_applyAxisStyleValues$self$$.$_axisBorderWidth$);
  $JSCompiler_StaticMethods_applyAxisStyleValues$self$$.$_axisLength$ = $JSCompiler_StaticMethods_applyAxisStyleValues$self$$.$_contentLength$ + 2 * $JSCompiler_StaticMethods_applyAxisStyleValues$self$$.$_axisBorderWidth$ - $DvtTimeComponentAxis$$.$DEFAULT_SEPARATOR_WIDTH$;
  if($JSCompiler_StaticMethods_applyAxisStyleValues$self$$.$_seriesStyleDefaults$ && $JSCompiler_StaticMethods_applyAxisStyleValues$self$$.$_seriesStyleDefaults$.backgroundColor) {
    var $b$$36_bgColor$$15$$ = $JSCompiler_StaticMethods_applyAxisStyleValues$self$$.$_seriesStyleDefaults$.backgroundColor, $axisStyles_r$$64$$ = dvt.$ColorUtils$.$getRed$($b$$36_bgColor$$15$$), $g$$10_style$$98$$ = dvt.$ColorUtils$.$getGreen$($b$$36_bgColor$$15$$), $b$$36_bgColor$$15$$ = dvt.$ColorUtils$.$getBlue$($b$$36_bgColor$$15$$);
    $JSCompiler_StaticMethods_applyAxisStyleValues$self$$.$_seriesBackgroundOverlayStyle$ = "background-color:rgba(" + $axisStyles_r$$64$$ + "," + $g$$10_style$$98$$ + "," + $b$$36_bgColor$$15$$ + ",0.8);"
  }
}
function $JSCompiler_StaticMethods_prepareViewportLength$$($JSCompiler_StaticMethods_prepareViewportLength$self$$) {
  $JSCompiler_StaticMethods_prepareViewportLength$self$$.$_setLength$ = $JSCompiler_alias_TRUE$$;
  $JSCompiler_StaticMethods_prepareViewportLength$self$$.$_startPos$ = 0;
  $JSCompiler_StaticMethods_prepareViewportLength$self$$.$isRTL$() && !$JSCompiler_StaticMethods_prepareViewportLength$self$$.$_isVertical$ && ($JSCompiler_StaticMethods_prepareViewportLength$self$$.$_startPos$ = $JSCompiler_StaticMethods_prepareViewportLength$self$$.$_backgroundWidth$ - $JSCompiler_StaticMethods_prepareViewportLength$self$$.$_contentLength$ - $JSCompiler_StaticMethods_prepareViewportLength$self$$.$_startPos$);
  if($JSCompiler_StaticMethods_prepareViewportLength$self$$.$_viewStartTime$ && $JSCompiler_StaticMethods_prepareViewportLength$self$$.$_viewEndTime$) {
    var $viewTime_widthFactor$$ = $JSCompiler_StaticMethods_prepareViewportLength$self$$.$_viewEndTime$ - $JSCompiler_StaticMethods_prepareViewportLength$self$$.$_viewStartTime$;
    0 < $viewTime_widthFactor$$ && ($JSCompiler_StaticMethods_prepareViewportLength$self$$.$_setLength$ = $JSCompiler_alias_FALSE$$, $viewTime_widthFactor$$ = $JSCompiler_StaticMethods_prepareViewportLength$self$$.$_canvasLength$ / $viewTime_widthFactor$$, $JSCompiler_StaticMethods_setContentLength$$($JSCompiler_StaticMethods_prepareViewportLength$self$$, $viewTime_widthFactor$$ * ($JSCompiler_StaticMethods_prepareViewportLength$self$$.$_end$ - $JSCompiler_StaticMethods_prepareViewportLength$self$$.$_start$)), 
    $JSCompiler_StaticMethods_prepareViewportLength$self$$.$_startPos$ = $viewTime_widthFactor$$ * ($JSCompiler_StaticMethods_prepareViewportLength$self$$.$_start$ - $JSCompiler_StaticMethods_prepareViewportLength$self$$.$_viewStartTime$), $JSCompiler_StaticMethods_prepareViewportLength$self$$.$isRTL$() && !$JSCompiler_StaticMethods_prepareViewportLength$self$$.$_isVertical$ && ($JSCompiler_StaticMethods_prepareViewportLength$self$$.$_startPos$ = $JSCompiler_StaticMethods_prepareViewportLength$self$$.$_backgroundWidth$ - 
    $JSCompiler_StaticMethods_prepareViewportLength$self$$.$_contentLength$ - $JSCompiler_StaticMethods_prepareViewportLength$self$$.$_startPos$))
  }
}
$JSCompiler_prototypeAlias$$.$HandleTouchStart$ = function $$JSCompiler_prototypeAlias$$$$HandleTouchStart$$($event$$534$$) {
  if(1 == $event$$534$$.touches.length) {
    if(this.$_dragPanSeries$ = $JSCompiler_StaticMethods__findSeries$$(this, $event$$534$$.target)) {
      var $series$$19$$ = this.$_series$[0] == this.$_dragPanSeries$ ? 0 : 1
    }
    $JSCompiler_StaticMethods_showThenHideHotspots$$(this, $series$$19$$)
  }
};
function $JSCompiler_StaticMethods_handleZoomWheel$$($JSCompiler_StaticMethods_handleZoomWheel$self$$, $newLength_viewTime$$2$$, $JSCompiler_StaticMethods_decreaseScale$self$$inline_5046_JSCompiler_StaticMethods_increaseScale$self$$inline_5049_minLength$$1_time$$17$$, $compLoc$$1_s$$inline_5047_s$$inline_5050$$, $triggerViewportChangeEvent$$) {
  $newLength_viewTime$$2$$ > $JSCompiler_StaticMethods_handleZoomWheel$self$$.$_maxContentLength$ ? ($newLength_viewTime$$2$$ = $JSCompiler_StaticMethods_handleZoomWheel$self$$.$_maxContentLength$, $JSCompiler_StaticMethods_disableZoomButton$$($JSCompiler_StaticMethods_handleZoomWheel$self$$, $JSCompiler_alias_TRUE$$)) : $JSCompiler_StaticMethods_enableZoomButton$$($JSCompiler_StaticMethods_handleZoomWheel$self$$, $JSCompiler_alias_TRUE$$);
  $JSCompiler_StaticMethods_handleZoomWheel$self$$.$_canvasLength$ > $newLength_viewTime$$2$$ ? ($newLength_viewTime$$2$$ = $JSCompiler_StaticMethods_handleZoomWheel$self$$.$_canvasLength$, $JSCompiler_StaticMethods_disableZoomButton$$($JSCompiler_StaticMethods_handleZoomWheel$self$$, $JSCompiler_alias_FALSE$$)) : $JSCompiler_StaticMethods_enableZoomButton$$($JSCompiler_StaticMethods_handleZoomWheel$self$$, $JSCompiler_alias_FALSE$$);
  var $zoomIn$$ = $JSCompiler_StaticMethods_handleZoomWheel$self$$.$_contentLength$ <= $newLength_viewTime$$2$$, $viewLength_widthFactor$$4$$ = ($JSCompiler_StaticMethods_handleZoomWheel$self$$.$_viewEndTime$ - $JSCompiler_StaticMethods_handleZoomWheel$self$$.$_viewStartTime$) / ($JSCompiler_StaticMethods_handleZoomWheel$self$$.$_end$ - $JSCompiler_StaticMethods_handleZoomWheel$self$$.$_start$) * $JSCompiler_StaticMethods_handleZoomWheel$self$$.$_contentLength$;
  $JSCompiler_StaticMethods_setContentLength$$($JSCompiler_StaticMethods_handleZoomWheel$self$$, $newLength_viewTime$$2$$);
  $newLength_viewTime$$2$$ = $viewLength_widthFactor$$4$$ / $JSCompiler_StaticMethods_handleZoomWheel$self$$.$_contentLength$ * ($JSCompiler_StaticMethods_handleZoomWheel$self$$.$_end$ - $JSCompiler_StaticMethods_handleZoomWheel$self$$.$_start$);
  $JSCompiler_StaticMethods_decreaseScale$self$$inline_5046_JSCompiler_StaticMethods_increaseScale$self$$inline_5049_minLength$$1_time$$17$$ ? ($viewLength_widthFactor$$4$$ = ($JSCompiler_StaticMethods_handleZoomWheel$self$$.$_end$ - $JSCompiler_StaticMethods_handleZoomWheel$self$$.$_start$) / $JSCompiler_StaticMethods_handleZoomWheel$self$$.$_contentLength$, $JSCompiler_StaticMethods_handleZoomWheel$self$$.$_viewStartTime$ = $JSCompiler_StaticMethods_decreaseScale$self$$inline_5046_JSCompiler_StaticMethods_increaseScale$self$$inline_5049_minLength$$1_time$$17$$ - 
  $compLoc$$1_s$$inline_5047_s$$inline_5050$$ * $viewLength_widthFactor$$4$$, $JSCompiler_StaticMethods_handleZoomWheel$self$$.$_viewStartTime$ < $JSCompiler_StaticMethods_handleZoomWheel$self$$.$_start$ && ($JSCompiler_StaticMethods_handleZoomWheel$self$$.$_viewStartTime$ = $JSCompiler_StaticMethods_handleZoomWheel$self$$.$_start$), $JSCompiler_StaticMethods_handleZoomWheel$self$$.$_viewEndTime$ = $JSCompiler_StaticMethods_handleZoomWheel$self$$.$_viewStartTime$ + $newLength_viewTime$$2$$, $JSCompiler_StaticMethods_handleZoomWheel$self$$.$_viewEndTime$ > 
  $JSCompiler_StaticMethods_handleZoomWheel$self$$.$_end$ && ($JSCompiler_StaticMethods_handleZoomWheel$self$$.$_viewEndTime$ = $JSCompiler_StaticMethods_handleZoomWheel$self$$.$_end$, $JSCompiler_StaticMethods_handleZoomWheel$self$$.$_viewStartTime$ = $JSCompiler_StaticMethods_handleZoomWheel$self$$.$_viewEndTime$ - $newLength_viewTime$$2$$, $JSCompiler_StaticMethods_handleZoomWheel$self$$.$_viewStartTime$ < $JSCompiler_StaticMethods_handleZoomWheel$self$$.$_start$ && ($JSCompiler_StaticMethods_handleZoomWheel$self$$.$_viewStartTime$ = 
  $JSCompiler_StaticMethods_handleZoomWheel$self$$.$_start$)), $JSCompiler_StaticMethods_handleZoomWheel$self$$.$_startPos$ = 1 / $viewLength_widthFactor$$4$$ * ($JSCompiler_StaticMethods_handleZoomWheel$self$$.$_start$ - $JSCompiler_StaticMethods_handleZoomWheel$self$$.$_viewStartTime$)) : ($JSCompiler_StaticMethods_handleZoomWheel$self$$.$_viewStartTime$ = $JSCompiler_StaticMethods_handleZoomWheel$self$$.$_start$, $JSCompiler_StaticMethods_handleZoomWheel$self$$.$_viewEndTime$ = $JSCompiler_StaticMethods_handleZoomWheel$self$$.$_viewStartTime$ + 
  $newLength_viewTime$$2$$, $JSCompiler_StaticMethods_handleZoomWheel$self$$.$_viewStartTime$ < $JSCompiler_StaticMethods_handleZoomWheel$self$$.$_start$ && ($JSCompiler_StaticMethods_handleZoomWheel$self$$.$_viewStartTime$ = $JSCompiler_StaticMethods_handleZoomWheel$self$$.$_start$), $JSCompiler_StaticMethods_handleZoomWheel$self$$.$_startPos$ = 0);
  $JSCompiler_StaticMethods_handleZoomWheel$self$$.$isRTL$() && !$JSCompiler_StaticMethods_handleZoomWheel$self$$.$_isVertical$ && ($JSCompiler_StaticMethods_handleZoomWheel$self$$.$_startPos$ = $JSCompiler_StaticMethods_handleZoomWheel$self$$.$_backgroundWidth$ - $JSCompiler_StaticMethods_handleZoomWheel$self$$.$_contentLength$ - $JSCompiler_StaticMethods_handleZoomWheel$self$$.$_startPos$);
  $JSCompiler_StaticMethods_handleZoomWheel$self$$.$_hasOverview$ && $JSCompiler_StaticMethods_handleZoomWheel$self$$.$_overview$.$setViewportRange$($JSCompiler_StaticMethods_handleZoomWheel$self$$.$_viewStartTime$, $JSCompiler_StaticMethods_handleZoomWheel$self$$.$_viewEndTime$, $JSCompiler_StaticMethods_handleZoomWheel$self$$.$_isVertical$ ? $JSCompiler_StaticMethods_handleZoomWheel$self$$.$_overview$.$Height$ : $JSCompiler_StaticMethods_handleZoomWheel$self$$.$_overview$.$Width$);
  if($zoomIn$$) {
    for(;0 < $JSCompiler_StaticMethods_handleZoomWheel$self$$.$_zoomLevelOrder$;) {
      if($JSCompiler_StaticMethods_decreaseScale$self$$inline_5046_JSCompiler_StaticMethods_increaseScale$self$$inline_5049_minLength$$1_time$$17$$ = $JSCompiler_StaticMethods_handleZoomWheel$self$$.$_zoomLevelLengths$[$JSCompiler_StaticMethods_handleZoomWheel$self$$.$_zoomLevelOrder$ - 1], $JSCompiler_StaticMethods_handleZoomWheel$self$$.$_contentLength$ >= $JSCompiler_StaticMethods_decreaseScale$self$$inline_5046_JSCompiler_StaticMethods_increaseScale$self$$inline_5049_minLength$$1_time$$17$$) {
        $JSCompiler_StaticMethods_handleZoomWheel$self$$.$_zoomLevelOrder$--;
        a: {
          $JSCompiler_StaticMethods_decreaseScale$self$$inline_5046_JSCompiler_StaticMethods_increaseScale$self$$inline_5049_minLength$$1_time$$17$$ = $JSCompiler_StaticMethods_handleZoomWheel$self$$.$_timeAxis$;
          for($compLoc$$1_s$$inline_5047_s$$inline_5050$$ = 1;$compLoc$$1_s$$inline_5047_s$$inline_5050$$ < $JSCompiler_StaticMethods_decreaseScale$self$$inline_5046_JSCompiler_StaticMethods_increaseScale$self$$inline_5049_minLength$$1_time$$17$$.$_zoomOrder$.length;$compLoc$$1_s$$inline_5047_s$$inline_5050$$++) {
            if($JSCompiler_StaticMethods_decreaseScale$self$$inline_5046_JSCompiler_StaticMethods_increaseScale$self$$inline_5049_minLength$$1_time$$17$$.$_zoomOrder$[$compLoc$$1_s$$inline_5047_s$$inline_5050$$] == $JSCompiler_StaticMethods_decreaseScale$self$$inline_5046_JSCompiler_StaticMethods_increaseScale$self$$inline_5049_minLength$$1_time$$17$$.$_scale$) {
              $JSCompiler_StaticMethods_decreaseScale$self$$inline_5046_JSCompiler_StaticMethods_increaseScale$self$$inline_5049_minLength$$1_time$$17$$.$_scale$ = $JSCompiler_StaticMethods_decreaseScale$self$$inline_5046_JSCompiler_StaticMethods_increaseScale$self$$inline_5049_minLength$$1_time$$17$$.$_zoomOrder$[$compLoc$$1_s$$inline_5047_s$$inline_5050$$ - 1];
              break a
            }
          }
        }
        $JSCompiler_StaticMethods_handleZoomWheel$self$$.$_scale$ = $JSCompiler_StaticMethods_handleZoomWheel$self$$.$_timeAxis$.$_scale$
      }else {
        break
      }
    }
  }else {
    for(;$JSCompiler_StaticMethods_handleZoomWheel$self$$.$_zoomLevelOrder$ < $JSCompiler_StaticMethods_handleZoomWheel$self$$.$_zoomLevelLengths$.length - 1;) {
      if($JSCompiler_StaticMethods_decreaseScale$self$$inline_5046_JSCompiler_StaticMethods_increaseScale$self$$inline_5049_minLength$$1_time$$17$$ = $JSCompiler_StaticMethods_handleZoomWheel$self$$.$_zoomLevelLengths$[$JSCompiler_StaticMethods_handleZoomWheel$self$$.$_zoomLevelOrder$], $JSCompiler_StaticMethods_handleZoomWheel$self$$.$_contentLength$ < $JSCompiler_StaticMethods_decreaseScale$self$$inline_5046_JSCompiler_StaticMethods_increaseScale$self$$inline_5049_minLength$$1_time$$17$$) {
        $JSCompiler_StaticMethods_handleZoomWheel$self$$.$_zoomLevelOrder$++;
        a: {
          $JSCompiler_StaticMethods_decreaseScale$self$$inline_5046_JSCompiler_StaticMethods_increaseScale$self$$inline_5049_minLength$$1_time$$17$$ = $JSCompiler_StaticMethods_handleZoomWheel$self$$.$_timeAxis$;
          for($compLoc$$1_s$$inline_5047_s$$inline_5050$$ = 0;$compLoc$$1_s$$inline_5047_s$$inline_5050$$ < $JSCompiler_StaticMethods_decreaseScale$self$$inline_5046_JSCompiler_StaticMethods_increaseScale$self$$inline_5049_minLength$$1_time$$17$$.$_zoomOrder$.length - 1;$compLoc$$1_s$$inline_5047_s$$inline_5050$$++) {
            if($JSCompiler_StaticMethods_decreaseScale$self$$inline_5046_JSCompiler_StaticMethods_increaseScale$self$$inline_5049_minLength$$1_time$$17$$.$_zoomOrder$[$compLoc$$1_s$$inline_5047_s$$inline_5050$$] == $JSCompiler_StaticMethods_decreaseScale$self$$inline_5046_JSCompiler_StaticMethods_increaseScale$self$$inline_5049_minLength$$1_time$$17$$.$_scale$) {
              $JSCompiler_StaticMethods_decreaseScale$self$$inline_5046_JSCompiler_StaticMethods_increaseScale$self$$inline_5049_minLength$$1_time$$17$$.$_scale$ = $JSCompiler_StaticMethods_decreaseScale$self$$inline_5046_JSCompiler_StaticMethods_increaseScale$self$$inline_5049_minLength$$1_time$$17$$.$_zoomOrder$[$compLoc$$1_s$$inline_5047_s$$inline_5050$$ + 1];
              break a
            }
          }
        }
        $JSCompiler_StaticMethods_handleZoomWheel$self$$.$_scale$ = $JSCompiler_StaticMethods_handleZoomWheel$self$$.$_timeAxis$.$_scale$
      }else {
        break
      }
    }
  }
  $JSCompiler_StaticMethods_applyAxisStyleValues$$($JSCompiler_StaticMethods_handleZoomWheel$self$$);
  $DvtTimelineRenderer$$.$_renderAxis$($JSCompiler_StaticMethods_handleZoomWheel$self$$, $JSCompiler_StaticMethods_handleZoomWheel$self$$.$_innerCanvas$);
  $JSCompiler_StaticMethods_updateSeries$$($JSCompiler_StaticMethods_handleZoomWheel$self$$);
  $JSCompiler_StaticMethods_handleZoomWheel$self$$.$_isVertical$ ? $JSCompiler_StaticMethods_handleZoomWheel$self$$.$_innerCanvas$.$setTranslateY$($JSCompiler_StaticMethods_handleZoomWheel$self$$.$_startY$ + $JSCompiler_StaticMethods_handleZoomWheel$self$$.$_startPos$) : $JSCompiler_StaticMethods_handleZoomWheel$self$$.$_innerCanvas$.$setTranslateX$($JSCompiler_StaticMethods_handleZoomWheel$self$$.$_startX$ + $JSCompiler_StaticMethods_handleZoomWheel$self$$.$_startPos$);
  $triggerViewportChangeEvent$$ && $JSCompiler_StaticMethods_handleZoomWheel$self$$.dispatchEvent(dvt.$EventFactory$.$newTimelineViewportChangeEvent$($JSCompiler_StaticMethods_handleZoomWheel$self$$.$_viewStartTime$, $JSCompiler_StaticMethods_handleZoomWheel$self$$.$_viewEndTime$, $JSCompiler_StaticMethods_handleZoomWheel$self$$.$_scale$))
}
$JSCompiler_prototypeAlias$$.$zoomBy$ = function $$JSCompiler_prototypeAlias$$$$zoomBy$$($dz$$12$$) {
  var $compLoc$$2$$ = this.$_isVertical$ ? this.$Height$ / 2 : this.$Width$ / 2;
  $JSCompiler_StaticMethods_handleZoomWheel$$(this, this.$_contentLength$ * ((1 / $dz$$12$$ - 1) / 2 + 1), (this.$_end$ - this.$_start$) / this.$_contentLength$ * $compLoc$$2$$ + this.$_viewStartTime$, $compLoc$$2$$, $JSCompiler_alias_TRUE$$)
};
function $JSCompiler_StaticMethods_updateSeries$$($JSCompiler_StaticMethods_updateSeries$self$$) {
  if($JSCompiler_StaticMethods_updateSeries$self$$.$_series$) {
    var $seriesCount$$28$$ = $JSCompiler_StaticMethods_updateSeries$self$$.$_series$.length, $axisSize$$1$$ = $JSCompiler_StaticMethods_getTimeAxisVisibleSize$$($JSCompiler_StaticMethods_updateSeries$self$$, $seriesCount$$28$$);
    $JSCompiler_StaticMethods_updateSeries$self$$.$_seriesSize$ = ($JSCompiler_StaticMethods_updateSeries$self$$.$_canvasSize$ - $axisSize$$1$$) / $seriesCount$$28$$;
    for(var $i$$628$$ = 0;$i$$628$$ < $seriesCount$$28$$;$i$$628$$++) {
      var $JSCompiler_StaticMethods_reRender$self$$inline_5052_series$$20$$ = $JSCompiler_StaticMethods_updateSeries$self$$.$_series$[$i$$628$$];
      $JSCompiler_StaticMethods_reRender$self$$inline_5052_series$$20$$.$setClipPath$($JSCompiler_alias_NULL$$);
      var $cp$$7_width$$inline_5053$$ = new dvt.$ClipPath$;
      if($JSCompiler_StaticMethods_updateSeries$self$$.$_isVertical$) {
        var $height$$111_height$$inline_5054_key$$69$$ = $JSCompiler_StaticMethods_updateSeries$self$$.$isRTL$() ? Math.abs($i$$628$$ - 1) : $i$$628$$;
        if($JSCompiler_StaticMethods_updateSeries$self$$.$isRTL$() && 1 == $JSCompiler_StaticMethods_updateSeries$self$$.$_series$.length) {
          $cp$$7_width$$inline_5053$$.$addRect$($axisSize$$1$$, 0, $JSCompiler_StaticMethods_updateSeries$self$$.$_seriesSize$, $JSCompiler_StaticMethods_updateSeries$self$$.$_contentLength$);
          var $posMatrix$$ = new dvt.$Matrix$(1, 0, 0, 1, $axisSize$$1$$, 0)
        }else {
          $cp$$7_width$$inline_5053$$.$addRect$($height$$111_height$$inline_5054_key$$69$$ * ($JSCompiler_StaticMethods_updateSeries$self$$.$_seriesSize$ + $axisSize$$1$$), 0, $JSCompiler_StaticMethods_updateSeries$self$$.$_seriesSize$, $JSCompiler_StaticMethods_updateSeries$self$$.$_contentLength$), $posMatrix$$ = new dvt.$Matrix$(1, 0, 0, 1, $height$$111_height$$inline_5054_key$$69$$ * ($JSCompiler_StaticMethods_updateSeries$self$$.$_seriesSize$ + $axisSize$$1$$), 0)
        }
        var $width$$130$$ = $JSCompiler_StaticMethods_updateSeries$self$$.$_seriesSize$, $height$$111_height$$inline_5054_key$$69$$ = $JSCompiler_StaticMethods_updateSeries$self$$.$_contentLength$
      }else {
        $cp$$7_width$$inline_5053$$.$addRect$(0, $i$$628$$ * ($JSCompiler_StaticMethods_updateSeries$self$$.$_seriesSize$ + $axisSize$$1$$), $JSCompiler_StaticMethods_updateSeries$self$$.$_contentLength$, $JSCompiler_StaticMethods_updateSeries$self$$.$_seriesSize$), $posMatrix$$ = new dvt.$Matrix$(1, 0, 0, 1, 0, $i$$628$$ * ($JSCompiler_StaticMethods_updateSeries$self$$.$_seriesSize$ + $axisSize$$1$$)), $width$$130$$ = $JSCompiler_StaticMethods_updateSeries$self$$.$_contentLength$, $height$$111_height$$inline_5054_key$$69$$ = 
        $JSCompiler_StaticMethods_updateSeries$self$$.$_seriesSize$
      }
      $JSCompiler_StaticMethods_reRender$self$$inline_5052_series$$20$$.$setClipPath$($cp$$7_width$$inline_5053$$);
      $JSCompiler_StaticMethods_reRender$self$$inline_5052_series$$20$$.$setMatrix$($posMatrix$$);
      $cp$$7_width$$inline_5053$$ = $width$$130$$;
      $JSCompiler_StaticMethods_reRender$self$$inline_5052_series$$20$$.$_canvas$.$setTranslateY$(0);
      $JSCompiler_StaticMethods_reRender$self$$inline_5052_series$$20$$.$_canvas$.$setTranslateX$(0);
      $JSCompiler_StaticMethods_reRender$self$$inline_5052_series$$20$$.$Width$ = $cp$$7_width$$inline_5053$$;
      $JSCompiler_StaticMethods_reRender$self$$inline_5052_series$$20$$.$Height$ = $height$$111_height$$inline_5054_key$$69$$;
      $JSCompiler_StaticMethods_reRender$self$$inline_5052_series$$20$$.$_fetchStartPos$ = 0;
      $JSCompiler_StaticMethods_reRender$self$$inline_5052_series$$20$$.$_isVertical$ ? ($JSCompiler_StaticMethods_reRender$self$$inline_5052_series$$20$$.$_fetchEndPos$ = $height$$111_height$$inline_5054_key$$69$$, $JSCompiler_StaticMethods_reRender$self$$inline_5052_series$$20$$.$_maxOverflowValue$ = $cp$$7_width$$inline_5053$$, $JSCompiler_StaticMethods_reRender$self$$inline_5052_series$$20$$.$_length$ = $height$$111_height$$inline_5054_key$$69$$, $JSCompiler_StaticMethods_reRender$self$$inline_5052_series$$20$$.$_size$ = 
      $cp$$7_width$$inline_5053$$) : ($JSCompiler_StaticMethods_reRender$self$$inline_5052_series$$20$$.$_fetchEndPos$ = $cp$$7_width$$inline_5053$$, $JSCompiler_StaticMethods_reRender$self$$inline_5052_series$$20$$.$_maxOverflowValue$ = $height$$111_height$$inline_5054_key$$69$$, $JSCompiler_StaticMethods_reRender$self$$inline_5052_series$$20$$.$_length$ = $cp$$7_width$$inline_5053$$, $JSCompiler_StaticMethods_reRender$self$$inline_5052_series$$20$$.$_size$ = $height$$111_height$$inline_5054_key$$69$$);
      $JSCompiler_StaticMethods_reRender$self$$inline_5052_series$$20$$.$_background$.$setWidth$($cp$$7_width$$inline_5053$$);
      $JSCompiler_StaticMethods_reRender$self$$inline_5052_series$$20$$.$_background$.$setHeight$($height$$111_height$$inline_5054_key$$69$$);
      $DvtTimelineSeriesRenderer$$.$updateSeriesForZoom$($JSCompiler_StaticMethods_reRender$self$$inline_5052_series$$20$$)
    }
  }
}
$JSCompiler_prototypeAlias$$.$_handleResize$ = function $$JSCompiler_prototypeAlias$$$$_handleResize$$($width$$131$$, $height$$112$$) {
  this.$Width$ = $width$$131$$;
  this.$Height$ = $height$$112$$;
  this.$applyStyleValues$();
  this.$_fetchStartPos$ = 0;
  this.$_fetchEndPos$ = this.$_isVertical$ ? $height$$112$$ : $width$$131$$;
  $JSCompiler_StaticMethods_prepareViewportLength$$(this);
  $DvtTimelineRenderer$$.$_renderBackground$(this);
  if($JSCompiler_StaticMethods_hasValidOptions$$(this)) {
    if($DvtTimelineRenderer$$.$_renderInnerCanvas$(this, this.$_canvas$), $JSCompiler_StaticMethods_applyAxisStyleValues$$(this), $JSCompiler_StaticMethods_updateSeries$$(this), $DvtTimelineRenderer$$.$_renderAxis$(this, this.$_innerCanvas$), $DvtTimelineRenderer$$.$_renderSeriesLabels$(this), $DvtTimelineRenderer$$.$_renderScrollHotspots$(this), $DvtTimelineRenderer$$.$_renderZoomControls$(this), this.$_hasOverview$ && ($DvtTimelineRenderer$$.$_renderOverview$(this), this.$SelectionHandler$)) {
      var $selection$$25$$ = this.$SelectionHandler$.$getSelectedIds$();
      if($selection$$25$$ && 0 != $selection$$25$$.length) {
        for(var $i$$629$$ = 0;$i$$629$$ < $selection$$25$$.length;$i$$629$$++) {
          var $JSCompiler_StaticMethods_selSelectItem$self$$inline_5056$$ = this.$_overview$, $drawable$$inline_5058$$ = $JSCompiler_StaticMethods_getDrawableById$$($JSCompiler_StaticMethods_selSelectItem$self$$inline_5056$$, $selection$$25$$[$i$$629$$]);
          $drawable$$inline_5058$$ != $JSCompiler_alias_NULL$$ && $JSCompiler_StaticMethods_addSelectedMarker$$($JSCompiler_StaticMethods_selSelectItem$self$$inline_5056$$, $drawable$$inline_5058$$)
        }
      }
    }
  }else {
    $DvtTimelineRenderer$$.$_renderEmptyText$(this)
  }
};
$JSCompiler_prototypeAlias$$.$HandleKeyDown$ = function $$JSCompiler_prototypeAlias$$$$HandleKeyDown$$($event$$536$$) {
  (dvt.$KeyboardEvent$.$RIGHT_ARROW$ == $event$$536$$.keyCode || dvt.$KeyboardEvent$.$LEFT_ARROW$ == $event$$536$$.keyCode || dvt.$KeyboardEvent$.$DOWN_ARROW$ == $event$$536$$.keyCode || dvt.$KeyboardEvent$.$UP_ARROW$ == $event$$536$$.keyCode) && $JSCompiler_StaticMethods_updateScrollForItemNavigation$$(this, this.$EventManager$.$getFocus$())
};
$JSCompiler_prototypeAlias$$.$HandleMouseDown$ = function $$JSCompiler_prototypeAlias$$$$HandleMouseDown$$($event$$537$$) {
  this.$_dragPanSeries$ = $JSCompiler_StaticMethods__findSeries$$(this, $event$$537$$.target)
};
$JSCompiler_prototypeAlias$$.$beginDragPan$ = function $$JSCompiler_prototypeAlias$$$$beginDragPan$$($compX$$2$$, $compY$$2$$) {
  this.$_currentX$ = $compX$$2$$;
  this.$_currentY$ = $compY$$2$$
};
$JSCompiler_prototypeAlias$$.$HandleTouchEnd$ = function $$JSCompiler_prototypeAlias$$$$HandleTouchEnd$$($event$$538$$) {
  "none" != this.$_selectionMode$ && $JSCompiler_StaticMethods_handleShapeClick$$(this, $event$$538$$)
};
$JSCompiler_prototypeAlias$$.$endDragPan$ = function $$JSCompiler_prototypeAlias$$$$endDragPan$$() {
  this.$_dragPanSeries$ = $JSCompiler_alias_NULL$$;
  $JSCompiler_StaticMethods_endPan$$(this)
};
function $JSCompiler_StaticMethods_endPan$$($JSCompiler_StaticMethods_endPan$self$$) {
  $JSCompiler_StaticMethods_endPan$self$$.$_triggerViewportChange$ && ($JSCompiler_StaticMethods_endPan$self$$.$_triggerViewportChange$ = $JSCompiler_alias_FALSE$$, $JSCompiler_StaticMethods_endPan$self$$.dispatchEvent(dvt.$EventFactory$.$newTimelineViewportChangeEvent$($JSCompiler_StaticMethods_endPan$self$$.$_viewStartTime$, $JSCompiler_StaticMethods_endPan$self$$.$_viewEndTime$, $JSCompiler_StaticMethods_endPan$self$$.$_scale$)))
}
$JSCompiler_prototypeAlias$$.$contDragPan$ = function $$JSCompiler_prototypeAlias$$$$contDragPan$$($compX$$3$$, $compY$$3$$) {
  if(this.$_currentX$ && this.$_currentY$) {
    var $deltaX$$17$$ = this.$_currentX$ - $compX$$3$$, $deltaY$$17$$ = this.$_currentY$ - $compY$$3$$;
    if(0 == $deltaX$$17$$ && 0 == $deltaY$$17$$) {
      return $JSCompiler_alias_FALSE$$
    }
    this.$_triggerViewportChange$ = $JSCompiler_alias_TRUE$$;
    this.$_currentX$ = $compX$$3$$;
    this.$_currentY$ = $compY$$3$$;
    this.$panBy$($deltaX$$17$$, $deltaY$$17$$);
    return $JSCompiler_alias_TRUE$$
  }
  return $JSCompiler_alias_FALSE$$
};
$JSCompiler_prototypeAlias$$.$panBy$ = function $$JSCompiler_prototypeAlias$$$$panBy$$($deltaX$$18$$, $deltaY$$18$$) {
  var $axisSize$$2_maxTranslateY$$ = $JSCompiler_StaticMethods_getTimeAxisVisibleSize$$(this, this.$_series$.length);
  if(this.$_isVertical$) {
    var $minTranslateX_newTranslateY_overviewLength$$2_widthFactor$$6$$, $maxTranslateX_minTranslateY_viewTime$$3$$;
    if(this.$_dragPanSeries$) {
      var $newTranslateX$$ = this.$_dragPanSeries$.$getTranslateX$() - $deltaX$$18$$;
      1 < this.$_series$.length && (!this.$isRTL$() && this.$_dragPanSeries$.$_isInverted$ || this.$isRTL$() && !this.$_dragPanSeries$.$_isInverted$) ? ($minTranslateX_newTranslateY_overviewLength$$2_widthFactor$$6$$ = $axisSize$$2_maxTranslateY$$ + 2 * this.$_dragPanSeries$.$Width$ - this.$_dragPanSeries$.$_maxOverflowValue$, $maxTranslateX_minTranslateY_viewTime$$3$$ = this.$_dragPanSeries$.$Width$ + $axisSize$$2_maxTranslateY$$) : this.$isRTL$() && !this.$_dragPanSeries$.$_isInverted$ ? ($minTranslateX_newTranslateY_overviewLength$$2_widthFactor$$6$$ = 
      this.$_dragPanSeries$.$Width$ - this.$_dragPanSeries$.$_maxOverflowValue$ + $axisSize$$2_maxTranslateY$$, $maxTranslateX_minTranslateY_viewTime$$3$$ = $axisSize$$2_maxTranslateY$$) : ($minTranslateX_newTranslateY_overviewLength$$2_widthFactor$$6$$ = 0, $maxTranslateX_minTranslateY_viewTime$$3$$ = this.$_dragPanSeries$.$_maxOverflowValue$ - this.$_dragPanSeries$.$Width$);
      $newTranslateX$$ < $minTranslateX_newTranslateY_overviewLength$$2_widthFactor$$6$$ ? $newTranslateX$$ = $minTranslateX_newTranslateY_overviewLength$$2_widthFactor$$6$$ : $newTranslateX$$ > $maxTranslateX_minTranslateY_viewTime$$3$$ && ($newTranslateX$$ = $maxTranslateX_minTranslateY_viewTime$$3$$);
      this.$_dragPanSeries$.$setTranslateX$($newTranslateX$$)
    }
    $minTranslateX_newTranslateY_overviewLength$$2_widthFactor$$6$$ = this.$_innerCanvas$.$getTranslateY$() - $deltaY$$18$$;
    $maxTranslateX_minTranslateY_viewTime$$3$$ = -(this.$_contentLength$ - this.$_canvasLength$ - this.$_startY$);
    $axisSize$$2_maxTranslateY$$ = this.$_startY$;
    $minTranslateX_newTranslateY_overviewLength$$2_widthFactor$$6$$ < $maxTranslateX_minTranslateY_viewTime$$3$$ ? $minTranslateX_newTranslateY_overviewLength$$2_widthFactor$$6$$ = $maxTranslateX_minTranslateY_viewTime$$3$$ : $minTranslateX_newTranslateY_overviewLength$$2_widthFactor$$6$$ > $axisSize$$2_maxTranslateY$$ && ($minTranslateX_newTranslateY_overviewLength$$2_widthFactor$$6$$ = $axisSize$$2_maxTranslateY$$);
    this.$_innerCanvas$.$setTranslateY$($minTranslateX_newTranslateY_overviewLength$$2_widthFactor$$6$$);
    this.$_startPos$ = $minTranslateX_newTranslateY_overviewLength$$2_widthFactor$$6$$ - this.$_startY$;
    $minTranslateX_newTranslateY_overviewLength$$2_widthFactor$$6$$ = this.$_contentLength$ / (this.$_end$ - this.$_start$);
    $maxTranslateX_minTranslateY_viewTime$$3$$ = this.$_viewEndTime$ - this.$_viewStartTime$;
    this.$_viewStartTime$ = this.$_start$ - this.$_startPos$ / $minTranslateX_newTranslateY_overviewLength$$2_widthFactor$$6$$;
    this.$_viewEndTime$ = this.$_viewStartTime$ + $maxTranslateX_minTranslateY_viewTime$$3$$;
    this.$_hasOverview$ && ($minTranslateX_newTranslateY_overviewLength$$2_widthFactor$$6$$ = this.$_overview$.$Height$, this.$_overview$.$setViewportRange$(this.$_viewStartTime$, this.$_viewEndTime$, $minTranslateX_newTranslateY_overviewLength$$2_widthFactor$$6$$))
  }else {
    $newTranslateX$$ = this.$_innerCanvas$.$getTranslateX$() - $deltaX$$18$$, $minTranslateX_newTranslateY_overviewLength$$2_widthFactor$$6$$ = -(this.$_contentLength$ - this.$_canvasLength$ - this.$_startX$), $maxTranslateX_minTranslateY_viewTime$$3$$ = this.$_startX$, $newTranslateX$$ < $minTranslateX_newTranslateY_overviewLength$$2_widthFactor$$6$$ ? $newTranslateX$$ = $minTranslateX_newTranslateY_overviewLength$$2_widthFactor$$6$$ : $newTranslateX$$ > $maxTranslateX_minTranslateY_viewTime$$3$$ && 
    ($newTranslateX$$ = $maxTranslateX_minTranslateY_viewTime$$3$$), this.$_innerCanvas$.$setTranslateX$($newTranslateX$$), this.$_startPos$ = $newTranslateX$$ - this.$_startX$, this.$isRTL$() && (this.$_startPos$ = this.$_backgroundWidth$ - this.$_contentLength$ - this.$_startPos$), $minTranslateX_newTranslateY_overviewLength$$2_widthFactor$$6$$ = this.$_contentLength$ / (this.$_end$ - this.$_start$), $maxTranslateX_minTranslateY_viewTime$$3$$ = this.$_viewEndTime$ - this.$_viewStartTime$, this.$_viewStartTime$ = 
    this.$_start$ - this.$_startPos$ / $minTranslateX_newTranslateY_overviewLength$$2_widthFactor$$6$$, this.$_viewEndTime$ = this.$_viewStartTime$ + $maxTranslateX_minTranslateY_viewTime$$3$$, this.$isRTL$() && (this.$_startPos$ = this.$_backgroundWidth$ - this.$_contentLength$ - this.$_startPos$), this.$_hasOverview$ && ($minTranslateX_newTranslateY_overviewLength$$2_widthFactor$$6$$ = this.$_overview$.$Width$, this.$_overview$.$setViewportRange$(this.$_viewStartTime$, this.$_viewEndTime$, $minTranslateX_newTranslateY_overviewLength$$2_widthFactor$$6$$)), 
    this.$_dragPanSeries$ && ($minTranslateX_newTranslateY_overviewLength$$2_widthFactor$$6$$ = this.$_dragPanSeries$.$getTranslateY$() - $deltaY$$18$$, this.$_dragPanSeries$.$_isInverted$ ? ($maxTranslateX_minTranslateY_viewTime$$3$$ = $axisSize$$2_maxTranslateY$$ + 2 * this.$_dragPanSeries$.$Height$ - this.$_dragPanSeries$.$_maxOverflowValue$, $axisSize$$2_maxTranslateY$$ = this.$_dragPanSeries$.$Height$ + $axisSize$$2_maxTranslateY$$) : ($maxTranslateX_minTranslateY_viewTime$$3$$ = 0, $axisSize$$2_maxTranslateY$$ = 
    this.$_dragPanSeries$.$_maxOverflowValue$ - this.$_dragPanSeries$.$Height$), $minTranslateX_newTranslateY_overviewLength$$2_widthFactor$$6$$ < $maxTranslateX_minTranslateY_viewTime$$3$$ ? $minTranslateX_newTranslateY_overviewLength$$2_widthFactor$$6$$ = $maxTranslateX_minTranslateY_viewTime$$3$$ : $minTranslateX_newTranslateY_overviewLength$$2_widthFactor$$6$$ > $axisSize$$2_maxTranslateY$$ && ($minTranslateX_newTranslateY_overviewLength$$2_widthFactor$$6$$ = $axisSize$$2_maxTranslateY$$), this.$_dragPanSeries$.$setTranslateY$($minTranslateX_newTranslateY_overviewLength$$2_widthFactor$$6$$))
  }
};
$JSCompiler_prototypeAlias$$.$HandleEvent$ = function $$JSCompiler_prototypeAlias$$$$HandleEvent$$($event$$540_i$$630_isMultiSelect$$inline_5061$$) {
  var $itemId$$1_selectedItemId$$1_subType$$8_type$$163$$ = $event$$540_i$$630_isMultiSelect$$inline_5061$$.type;
  if("selection" == $itemId$$1_selectedItemId$$1_subType$$8_type$$163$$ || "action" == $itemId$$1_selectedItemId$$1_subType$$8_type$$163$$) {
    dvt.$EventDispatcher$.dispatchEvent(this.$_callback$, this.$_callbackObj$, this, $event$$540_i$$630_isMultiSelect$$inline_5061$$)
  }else {
    if("overview" == $itemId$$1_selectedItemId$$1_subType$$8_type$$163$$) {
      $itemId$$1_selectedItemId$$1_subType$$8_type$$163$$ = $event$$540_i$$630_isMultiSelect$$inline_5061$$.$getSubType$();
      if("rangeChanging" == $itemId$$1_selectedItemId$$1_subType$$8_type$$163$$ || "rangeChange" == $itemId$$1_selectedItemId$$1_subType$$8_type$$163$$) {
        var $item$$53_oldViewTime$$1_zoomLevelOrder$$ = this.$_viewEndTime$ - this.$_viewStartTime$;
        this.$_viewStartTime$ = $event$$540_i$$630_isMultiSelect$$inline_5061$$.$getNewStartTime$();
        this.$_viewEndTime$ = $event$$540_i$$630_isMultiSelect$$inline_5061$$.$getNewEndTime$();
        var $isMultiSelect$$1_minLength$$2_viewTime$$4$$ = this.$_viewEndTime$ - this.$_viewStartTime$;
        if(0 < $isMultiSelect$$1_minLength$$2_viewTime$$4$$) {
          var $s$$136_viewSize$$inline_5065_widthFactor$$7$$ = this.$_canvasLength$ / $isMultiSelect$$1_minLength$$2_viewTime$$4$$;
          $JSCompiler_StaticMethods_setContentLength$$(this, $s$$136_viewSize$$inline_5065_widthFactor$$7$$ * (this.$_end$ - this.$_start$));
          this.$_startPos$ = $s$$136_viewSize$$inline_5065_widthFactor$$7$$ * (this.$_start$ - this.$_viewStartTime$);
          this.$isRTL$() && !this.$_isVertical$ && (this.$_startPos$ = this.$_backgroundWidth$ - this.$_contentLength$ - this.$_startPos$);
          if($item$$53_oldViewTime$$1_zoomLevelOrder$$ > $isMultiSelect$$1_minLength$$2_viewTime$$4$$) {
            $item$$53_oldViewTime$$1_zoomLevelOrder$$ = this.$_zoomLevelLengths$.length;
            for($isMultiSelect$$1_minLength$$2_viewTime$$4$$ = this.$_zoomLevelLengths$[$item$$53_oldViewTime$$1_zoomLevelOrder$$ - 1];this.$_contentLength$ >= $isMultiSelect$$1_minLength$$2_viewTime$$4$$ && 0 < $item$$53_oldViewTime$$1_zoomLevelOrder$$;) {
              $item$$53_oldViewTime$$1_zoomLevelOrder$$--, $isMultiSelect$$1_minLength$$2_viewTime$$4$$ = this.$_zoomLevelLengths$[$item$$53_oldViewTime$$1_zoomLevelOrder$$ - 1]
            }
            $item$$53_oldViewTime$$1_zoomLevelOrder$$ == this.$_zoomLevelLengths$.length && $item$$53_oldViewTime$$1_zoomLevelOrder$$--
          }else {
            $item$$53_oldViewTime$$1_zoomLevelOrder$$ = 0;
            for($isMultiSelect$$1_minLength$$2_viewTime$$4$$ = this.$_zoomLevelLengths$[$item$$53_oldViewTime$$1_zoomLevelOrder$$];this.$_contentLength$ < $isMultiSelect$$1_minLength$$2_viewTime$$4$$ && $item$$53_oldViewTime$$1_zoomLevelOrder$$ < this.$_zoomLevelLengths$.length - 1;) {
              $item$$53_oldViewTime$$1_zoomLevelOrder$$++, $isMultiSelect$$1_minLength$$2_viewTime$$4$$ = this.$_zoomLevelLengths$[$item$$53_oldViewTime$$1_zoomLevelOrder$$]
            }
          }
          this.$_zoomLevelOrder$ = $item$$53_oldViewTime$$1_zoomLevelOrder$$;
          this.$_timeAxis$.$setScale$(this.$_timeAxis$.$_zoomOrder$[$item$$53_oldViewTime$$1_zoomLevelOrder$$]);
          this.$_scale$ = this.$_timeAxis$.$_scale$;
          $JSCompiler_StaticMethods_applyAxisStyleValues$$(this);
          $DvtTimelineRenderer$$.$_renderAxis$(this, this.$_innerCanvas$);
          $JSCompiler_StaticMethods_updateSeries$$(this);
          this.$_isVertical$ ? this.$_innerCanvas$.$setTranslateY$(this.$_startY$ + this.$_startPos$) : this.$_innerCanvas$.$setTranslateX$(this.$_startX$ + this.$_startPos$)
        }
        "rangeChange" == $itemId$$1_selectedItemId$$1_subType$$8_type$$163$$ && this.dispatchEvent(dvt.$EventFactory$.$newTimelineViewportChangeEvent$(this.$_viewStartTime$, this.$_viewEndTime$, this.$_scale$))
      }
      if("scrollPos" == $itemId$$1_selectedItemId$$1_subType$$8_type$$163$$ || "scrollTime" == $itemId$$1_selectedItemId$$1_subType$$8_type$$163$$) {
        this.$_viewStartTime$ = $event$$540_i$$630_isMultiSelect$$inline_5061$$.$getNewStartTime$(), this.$_viewEndTime$ = $event$$540_i$$630_isMultiSelect$$inline_5061$$.$getNewEndTime$(), $s$$136_viewSize$$inline_5065_widthFactor$$7$$ = this.$_contentLength$ / (this.$_end$ - this.$_start$), this.$_startPos$ = $s$$136_viewSize$$inline_5065_widthFactor$$7$$ * (this.$_start$ - this.$_viewStartTime$), this.$isRTL$() && !this.$_isVertical$ && (this.$_startPos$ = this.$_backgroundWidth$ - this.$_contentLength$ - 
        this.$_startPos$), this.$_isVertical$ ? this.$_innerCanvas$.$setTranslateY$(this.$_startY$ + this.$_startPos$) : this.$_innerCanvas$.$setTranslateX$(this.$_startX$ + this.$_startPos$), this.dispatchEvent(dvt.$EventFactory$.$newTimelineViewportChangeEvent$(this.$_viewStartTime$, this.$_viewEndTime$, this.$_scale$))
      }
    }else {
      if($itemId$$1_selectedItemId$$1_subType$$8_type$$163$$ = $event$$540_i$$630_isMultiSelect$$inline_5061$$.$getSubType$(), "selection" == $itemId$$1_selectedItemId$$1_subType$$8_type$$163$$) {
        $itemId$$1_selectedItemId$$1_subType$$8_type$$163$$ = $event$$540_i$$630_isMultiSelect$$inline_5061$$.$getItemId$();
        $event$$540_i$$630_isMultiSelect$$inline_5061$$ = $event$$540_i$$630_isMultiSelect$$inline_5061$$.$getParamValue$("multiSelect");
        $isMultiSelect$$1_minLength$$2_viewTime$$4$$ = ($event$$540_i$$630_isMultiSelect$$inline_5061$$ != $JSCompiler_alias_NULL$$ ? $event$$540_i$$630_isMultiSelect$$inline_5061$$ : $JSCompiler_alias_FALSE$$) && "multiple" == this.$_selectionMode$;
        for($event$$540_i$$630_isMultiSelect$$inline_5061$$ = 0;$event$$540_i$$630_isMultiSelect$$inline_5061$$ < this.$_series$.length;$event$$540_i$$630_isMultiSelect$$inline_5061$$++) {
          for(var $s$$136_viewSize$$inline_5065_widthFactor$$7$$ = this.$_series$[$event$$540_i$$630_isMultiSelect$$inline_5061$$], $j$$98$$ = 0;$j$$98$$ < $s$$136_viewSize$$inline_5065_widthFactor$$7$$.$_items$.length;$j$$98$$++) {
            if($item$$53_oldViewTime$$1_zoomLevelOrder$$ = $s$$136_viewSize$$inline_5065_widthFactor$$7$$.$_items$[$j$$98$$], $item$$53_oldViewTime$$1_zoomLevelOrder$$.getId() == $itemId$$1_selectedItemId$$1_subType$$8_type$$163$$) {
              this.$SelectionHandler$.$_addToSelection$($item$$53_oldViewTime$$1_zoomLevelOrder$$, $isMultiSelect$$1_minLength$$2_viewTime$$4$$);
              this.$EventManager$.$setFocusObj$($item$$53_oldViewTime$$1_zoomLevelOrder$$);
              $s$$136_viewSize$$inline_5065_widthFactor$$7$$ = this.$_viewEndTime$ - this.$_viewStartTime$;
              this.$_viewStartTime$ = $item$$53_oldViewTime$$1_zoomLevelOrder$$.$_startTime$ - $s$$136_viewSize$$inline_5065_widthFactor$$7$$ / 2;
              this.$_viewStartTime$ < this.$_start$ ? this.$_viewStartTime$ = this.$_start$ : this.$_viewStartTime$ + $s$$136_viewSize$$inline_5065_widthFactor$$7$$ > this.$_end$ && (this.$_viewStartTime$ = this.$_end$ - $s$$136_viewSize$$inline_5065_widthFactor$$7$$);
              this.$_viewEndTime$ = this.$_viewStartTime$ + $s$$136_viewSize$$inline_5065_widthFactor$$7$$;
              this.$_startPos$ = this.$_contentLength$ / (this.$_end$ - this.$_start$) * (this.$_start$ - this.$_viewStartTime$);
              this.$isRTL$() && !this.$_isVertical$ && (this.$_startPos$ = this.$_backgroundWidth$ - this.$_contentLength$ - this.$_startPos$);
              this.$_isVertical$ ? this.$_innerCanvas$.$setTranslateY$(this.$_startY$ + this.$_startPos$) : this.$_innerCanvas$.$setTranslateX$(this.$_startX$ + this.$_startPos$);
              this.dispatchEvent(dvt.$EventFactory$.$newTimelineViewportChangeEvent$(this.$_viewStartTime$, this.$_viewEndTime$, this.$_scale$));
              break
            }
          }
        }
      }else {
        if("highlight" == $itemId$$1_selectedItemId$$1_subType$$8_type$$163$$) {
          $itemId$$1_selectedItemId$$1_subType$$8_type$$163$$ = $event$$540_i$$630_isMultiSelect$$inline_5061$$.$getItemId$();
          for($event$$540_i$$630_isMultiSelect$$inline_5061$$ = 0;$event$$540_i$$630_isMultiSelect$$inline_5061$$ < this.$_series$.length;$event$$540_i$$630_isMultiSelect$$inline_5061$$++) {
            $s$$136_viewSize$$inline_5065_widthFactor$$7$$ = this.$_series$[$event$$540_i$$630_isMultiSelect$$inline_5061$$];
            for($j$$98$$ = 0;$j$$98$$ < $s$$136_viewSize$$inline_5065_widthFactor$$7$$.$_items$.length;$j$$98$$++) {
              if($item$$53_oldViewTime$$1_zoomLevelOrder$$ = $s$$136_viewSize$$inline_5065_widthFactor$$7$$.$_items$[$j$$98$$], $item$$53_oldViewTime$$1_zoomLevelOrder$$.getId() == $itemId$$1_selectedItemId$$1_subType$$8_type$$163$$) {
                $item$$53_oldViewTime$$1_zoomLevelOrder$$.$showHoverEffect$($JSCompiler_alias_TRUE$$);
                break
              }
            }
          }
        }else {
          if("unhighlight" == $itemId$$1_selectedItemId$$1_subType$$8_type$$163$$) {
            $itemId$$1_selectedItemId$$1_subType$$8_type$$163$$ = $event$$540_i$$630_isMultiSelect$$inline_5061$$.$getItemId$();
            for($event$$540_i$$630_isMultiSelect$$inline_5061$$ = 0;$event$$540_i$$630_isMultiSelect$$inline_5061$$ < this.$_series$.length;$event$$540_i$$630_isMultiSelect$$inline_5061$$++) {
              $s$$136_viewSize$$inline_5065_widthFactor$$7$$ = this.$_series$[$event$$540_i$$630_isMultiSelect$$inline_5061$$];
              for($j$$98$$ = 0;$j$$98$$ < $s$$136_viewSize$$inline_5065_widthFactor$$7$$.$_items$.length;$j$$98$$++) {
                if($item$$53_oldViewTime$$1_zoomLevelOrder$$ = $s$$136_viewSize$$inline_5065_widthFactor$$7$$.$_items$[$j$$98$$], $item$$53_oldViewTime$$1_zoomLevelOrder$$.getId() == $itemId$$1_selectedItemId$$1_subType$$8_type$$163$$) {
                  $item$$53_oldViewTime$$1_zoomLevelOrder$$.$hideHoverEffect$($JSCompiler_alias_TRUE$$);
                  break
                }
              }
            }
          }
        }
      }
    }
  }
};
function $JSCompiler_StaticMethods_enableZoomButton$$($JSCompiler_StaticMethods_enableZoomButton$self$$, $isZoomIn$$) {
  $isZoomIn$$ ? ($JSCompiler_StaticMethods_enableZoomButton$self$$.$zoomin$.$setEnabled$($JSCompiler_alias_TRUE$$), $JSCompiler_StaticMethods_enableZoomButton$self$$.$zoomin$.$drawUpState$()) : ($JSCompiler_StaticMethods_enableZoomButton$self$$.$zoomout$.$setEnabled$($JSCompiler_alias_TRUE$$), $JSCompiler_StaticMethods_enableZoomButton$self$$.$zoomout$.$drawUpState$())
}
function $JSCompiler_StaticMethods_disableZoomButton$$($JSCompiler_StaticMethods_disableZoomButton$self$$, $isZoomIn$$1$$) {
  $isZoomIn$$1$$ ? ($JSCompiler_StaticMethods_disableZoomButton$self$$.$zoomin$.$setEnabled$($JSCompiler_alias_FALSE$$), $JSCompiler_StaticMethods_disableZoomButton$self$$.$zoomin$.$drawDisabledState$(), $JSCompiler_StaticMethods_disableZoomButton$self$$.$zoomin$.setCursor($JSCompiler_alias_NULL$$)) : ($JSCompiler_StaticMethods_disableZoomButton$self$$.$zoomout$.$setEnabled$($JSCompiler_alias_FALSE$$), $JSCompiler_StaticMethods_disableZoomButton$self$$.$zoomout$.$drawDisabledState$(), $JSCompiler_StaticMethods_disableZoomButton$self$$.$zoomout$.setCursor($JSCompiler_alias_NULL$$))
}
function $JSCompiler_StaticMethods_updateScrollForItemNavigation$$($JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$, $item$$55$$) {
  var $itemEnd_itemSize_viewTime$$5$$ = $JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_isVertical$ ? $item$$55$$.getHeight() : $item$$55$$.getWidth(), $endPos$$4_itemHoverStrokeWidth$$ = $DvtTimelineStyleUtils$$.$getItemHoverStrokeWidth$(), $itemStart_widthFactor$$9$$ = $item$$55$$.$_loc$ - ($JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_isVertical$ ? $itemEnd_itemSize_viewTime$$5$$ / 2 + $endPos$$4_itemHoverStrokeWidth$$ : $DvtTimelineStyleUtils$$.$getBubbleOffset$() + 
  $endPos$$4_itemHoverStrokeWidth$$);
  $JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$isRTL$() && !$JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_isVertical$ && ($itemStart_widthFactor$$9$$ -= $endPos$$4_itemHoverStrokeWidth$$, $JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_startPos$ = $JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_backgroundWidth$ - $JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_contentLength$ - $JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_startPos$);
  $itemEnd_itemSize_viewTime$$5$$ = $itemStart_widthFactor$$9$$ + $itemEnd_itemSize_viewTime$$5$$ + 2 * $endPos$$4_itemHoverStrokeWidth$$;
  $endPos$$4_itemHoverStrokeWidth$$ = $JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_startPos$ - $JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_canvasLength$;
  -$itemStart_widthFactor$$9$$ > $JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_startPos$ ? $JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_startPos$ = -$itemStart_widthFactor$$9$$ : -$itemEnd_itemSize_viewTime$$5$$ < $endPos$$4_itemHoverStrokeWidth$$ && ($JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_startPos$ = -$itemEnd_itemSize_viewTime$$5$$ + $JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_canvasLength$);
  $itemStart_widthFactor$$9$$ = $JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_contentLength$ / ($JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_end$ - $JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_start$);
  $itemEnd_itemSize_viewTime$$5$$ = $JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_viewEndTime$ - $JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_viewStartTime$;
  $JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_viewStartTime$ = $JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_start$ - $JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_startPos$ / $itemStart_widthFactor$$9$$;
  $JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_viewStartTime$ < $JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_start$ && ($JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_viewStartTime$ = $JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_start$, $JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_startPos$ = ($JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_start$ - $JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_viewStartTime$) * 
  $itemStart_widthFactor$$9$$);
  $JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_viewEndTime$ = $JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_viewStartTime$ + $itemEnd_itemSize_viewTime$$5$$;
  $JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_viewEndTime$ > $JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_end$ && ($JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_viewEndTime$ = $JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_end$, $JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_viewStartTime$ = $JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_viewEndTime$ - $itemEnd_itemSize_viewTime$$5$$, 
  $JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_startPos$ = ($JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_start$ - $JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_viewStartTime$) * $itemStart_widthFactor$$9$$);
  $JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$isRTL$() && !$JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_isVertical$ && ($JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_startPos$ = $JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_backgroundWidth$ - $JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_contentLength$ - $JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_startPos$);
  $JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_isVertical$ ? $JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_innerCanvas$.$setTranslateY$($JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_startY$ + $JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_startPos$) : $JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_innerCanvas$.$setTranslateX$($JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_startX$ + $JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_startPos$);
  $JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_hasOverview$ && $JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_overview$.$setViewportRange$($JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_viewStartTime$, $JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_viewEndTime$, $JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_isVertical$ ? $JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_overview$.$Height$ : 
  $JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_overview$.$Width$);
  $JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.dispatchEvent(dvt.$EventFactory$.$newTimelineViewportChangeEvent$($JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_viewStartTime$, $JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_viewEndTime$, $JSCompiler_StaticMethods_updateScrollForItemNavigation$self$$.$_scale$))
}
function $JSCompiler_StaticMethods_handleShapeClick$$($JSCompiler_StaticMethods_handleShapeClick$self$$, $event$$541$$) {
  if($event$$541$$) {
    var $drawable$$6_event$$inline_5070_item$$inline_5068$$ = $JSCompiler_StaticMethods_handleShapeClick$self$$.$_findDrawable$($event$$541$$.target);
    if($drawable$$6_event$$inline_5070_item$$inline_5068$$) {
      var $JSCompiler_StaticMethods_HandleItemAction$self$$inline_5067_series$$21$$ = $JSCompiler_StaticMethods__findSeries$$($JSCompiler_StaticMethods_handleShapeClick$self$$, $drawable$$6_event$$inline_5070_item$$inline_5068$$);
      if($drawable$$6_event$$inline_5070_item$$inline_5068$$.$_node$) {
        var $JSCompiler_StaticMethods_HandleItemAction$self$$inline_5067_series$$21$$ = $JSCompiler_StaticMethods__findSeries$$($JSCompiler_StaticMethods_handleShapeClick$self$$, $drawable$$6_event$$inline_5070_item$$inline_5068$$), $drawable$$6_event$$inline_5070_item$$inline_5068$$ = $drawable$$6_event$$inline_5070_item$$inline_5068$$.$_node$, $action$$inline_5069$$ = $drawable$$6_event$$inline_5070_item$$inline_5068$$.$getAction$();
        $action$$inline_5069$$ && ($drawable$$6_event$$inline_5070_item$$inline_5068$$ = dvt.$EventFactory$.$newActionEvent$("action", $action$$inline_5069$$, $drawable$$6_event$$inline_5070_item$$inline_5068$$.getId()), dvt.$EventDispatcher$.dispatchEvent($JSCompiler_StaticMethods_HandleItemAction$self$$inline_5067_series$$21$$.$_callback$, $JSCompiler_StaticMethods_HandleItemAction$self$$inline_5067_series$$21$$.$_callbackObj$, $JSCompiler_StaticMethods_HandleItemAction$self$$inline_5067_series$$21$$, 
        $drawable$$6_event$$inline_5070_item$$inline_5068$$))
      }
    }
  }
}
function $JSCompiler_StaticMethods_applyInitialSelections$$($JSCompiler_StaticMethods_applyInitialSelections$self$$) {
  if($JSCompiler_StaticMethods_applyInitialSelections$self$$.$Options$.selection) {
    for(var $items$$37$$ = [], $i$$631$$ = 0;$i$$631$$ < $JSCompiler_StaticMethods_applyInitialSelections$self$$.$_series$.length;$i$$631$$++) {
      for(var $s$$137$$ = $JSCompiler_StaticMethods_applyInitialSelections$self$$.$_series$[$i$$631$$], $j$$99$$ = 0;$j$$99$$ < $s$$137$$.$_items$.length;$j$$99$$++) {
        $items$$37$$.push($s$$137$$.$_items$[$j$$99$$])
      }
    }
  }
  $JSCompiler_StaticMethods_applyInitialSelections$self$$.$SelectionHandler$.$processInitialSelections$($JSCompiler_StaticMethods_applyInitialSelections$self$$.$Options$.selection, $items$$37$$)
}
$JSCompiler_prototypeAlias$$.$processEvent$ = function $$JSCompiler_prototypeAlias$$$$processEvent$$($event$$542$$) {
  $event$$542$$ && this.dispatchEvent($event$$542$$)
};
function $JSCompiler_StaticMethods__findSeries$$($JSCompiler_StaticMethods__findSeries$self$$, $target$$71$$) {
  if($JSCompiler_StaticMethods_hasValidOptions$$($JSCompiler_StaticMethods__findSeries$self$$) && $target$$71$$ && $target$$71$$ != $JSCompiler_StaticMethods__findSeries$self$$) {
    var $id$$202$$ = $target$$71$$.getId();
    return $target$$71$$ == $JSCompiler_StaticMethods__findSeries$self$$.$_series$[0] || 1 < $JSCompiler_StaticMethods__findSeries$self$$.$_series$.length && $target$$71$$ == $JSCompiler_StaticMethods__findSeries$self$$.$_series$[1] ? $target$$71$$ : $id$$202$$ && "_s0" == $id$$202$$.substring($id$$202$$.length - 3, $id$$202$$.length) ? $JSCompiler_StaticMethods__findSeries$self$$.$_series$[0] : $id$$202$$ && "_s1" == $id$$202$$.substring($id$$202$$.length - 3, $id$$202$$.length) ? $JSCompiler_StaticMethods__findSeries$self$$.$_series$[1] : 
    $JSCompiler_StaticMethods__findSeries$$($JSCompiler_StaticMethods__findSeries$self$$, $target$$71$$.getParent())
  }
  return $JSCompiler_alias_NULL$$
}
$JSCompiler_prototypeAlias$$.$_findDrawable$ = function $$JSCompiler_prototypeAlias$$$$_findDrawable$$($grandParent_target$$72$$) {
  if($grandParent_target$$72$$) {
    var $id$$203$$ = $grandParent_target$$72$$.getId();
    if($id$$203$$ && "_duration_" == $id$$203$$.substring(0, 10) && $grandParent_target$$72$$.$_node$) {
      return $grandParent_target$$72$$
    }
    var $parent$$76$$ = $grandParent_target$$72$$.getParent();
    if($parent$$76$$) {
      if($id$$203$$ && "zoom" == $id$$203$$.substring(0, 4)) {
        return $grandParent_target$$72$$
      }
      if($id$$203$$ && "_bubble_" == $id$$203$$.substring(0, 8) && $parent$$76$$.$_node$) {
        return $parent$$76$$
      }
      if($grandParent_target$$72$$ = $parent$$76$$.getParent()) {
        if($id$$203$$ && "_bubble_" == $id$$203$$.substring(0, 8) && $grandParent_target$$72$$.$_node$) {
          return $grandParent_target$$72$$
        }
        if(($id$$203$$ = $grandParent_target$$72$$.getId()) && "_bubble_" == $id$$203$$.substring(0, 8) && $grandParent_target$$72$$.getParent()) {
          return $grandParent_target$$72$$.getParent()
        }
      }
    }
  }
  return $JSCompiler_alias_NULL$$
};
$JSCompiler_prototypeAlias$$.$getAutomation$ = function $$JSCompiler_prototypeAlias$$$$getAutomation$$() {
  this.$Automation$ || (this.$Automation$ = new $DvtTimelineAutomation$$(this));
  return this.$Automation$
};
dvt.$Timeline$.prototype.getAutomation = dvt.$Timeline$.prototype.$getAutomation$;
dvt.$Timeline$.prototype.$getEventManager$ = $JSCompiler_get$$("$EventManager$");
function $JSCompiler_StaticMethods_clearOverview$$($JSCompiler_StaticMethods_clearOverview$self$$) {
  $JSCompiler_StaticMethods_clearOverview$self$$.$_overviewCanvas$ && ($JSCompiler_StaticMethods_clearOverview$self$$.removeChild($JSCompiler_StaticMethods_clearOverview$self$$.$_overviewCanvas$), $JSCompiler_StaticMethods_clearOverview$self$$.$_overviewCanvas$ = $JSCompiler_alias_NULL$$)
}
function $DvtTimelineAutomation$$($timeline$$2$$) {
  this.$_timeline$ = $timeline$$2$$
}
$goog$exportPath_$$("DvtTimelineAutomation", $DvtTimelineAutomation$$);
dvt.$Obj$.$createSubclass$($DvtTimelineAutomation$$, dvt.$Automation$, "DvtTimelineAutomation");
$DvtTimelineAutomation$$.prototype.$GetSubIdForDomElement$ = function $$DvtTimelineAutomation$$$$$GetSubIdForDomElement$$($displayable$$85_logicalObj$$12$$) {
  if(($displayable$$85_logicalObj$$12$$ = this.$_timeline$.$EventManager$.$GetLogicalObject$($displayable$$85_logicalObj$$12$$)) && $displayable$$85_logicalObj$$12$$ instanceof $DvtTimelineSeriesNode$$) {
    for(var $i$$632$$ = 0;$i$$632$$ < this.$_timeline$.$_series$.length;$i$$632$$++) {
      var $itemIndex$$11$$ = dvt.$ArrayUtils$.$getIndex$(this.$_timeline$.$_series$[$i$$632$$].$_items$, $displayable$$85_logicalObj$$12$$);
      if(-1 != $itemIndex$$11$$) {
        return"timelineItem[" + $i$$632$$ + "][" + $itemIndex$$11$$ + "]"
      }
    }
  }
  return $JSCompiler_alias_NULL$$
};
$DvtTimelineAutomation$$.prototype.$getDomElementForSubId$ = function $$DvtTimelineAutomation$$$$$getDomElementForSubId$$($series$$23_subId$$30$$) {
  if($series$$23_subId$$30$$) {
    var $parenIndex$$ = $series$$23_subId$$30$$.indexOf("[");
    if(0 < $parenIndex$$ && "timelineItem" === $series$$23_subId$$30$$.substring(0, $parenIndex$$)) {
      var $endParenIndex$$ = $series$$23_subId$$30$$.indexOf("]");
      if(0 < $endParenIndex$$) {
        var $itemIndex$$12_node$$298$$ = parseInt($series$$23_subId$$30$$.substring($endParenIndex$$ + 2, $series$$23_subId$$30$$.length - 1));
        if($series$$23_subId$$30$$ = this.$_timeline$.$_series$[parseInt($series$$23_subId$$30$$.substring($parenIndex$$ + 1, $endParenIndex$$))]) {
          if($itemIndex$$12_node$$298$$ = $series$$23_subId$$30$$.$_items$[$itemIndex$$12_node$$298$$]) {
            return $itemIndex$$12_node$$298$$.$getDisplayables$()[0].$getElem$()
          }
        }
      }
    }
  }
  return $JSCompiler_alias_NULL$$
};
$DvtTimelineAutomation$$.prototype.getDomElementForSubId = $DvtTimelineAutomation$$.prototype.$getDomElementForSubId$;
function $DvtTimelineDefaults$$() {
  this.Init({alta:$DvtTimelineDefaults$VERSION_1$$})
}
dvt.$Obj$.$createSubclass$($DvtTimelineDefaults$$, dvt.$BaseComponentDefaults$, "DvtTimelineDefaults");
var $DvtTimelineDefaults$VERSION_1$$ = {animationOnDataChange:"none", animationOnDisplay:"none", orientation:"horizontal", overview:{rendered:"off"}, selectionMode:"none", styleDefaults:{animationDuration:500, borderColor:"#d9dfe3", item:{backgroundColor:"#ffffff", borderColor:"#648baf", descriptionStyle:new dvt.$CSSStyle$("font-family: Helvetica Neue, Helvetica, Arial, sans-serif; font-size: 12px; color: #084B8A; white-space: nowrap;"), hoverBorderColor:"#85bbe7", selectedBorderColor:"#000000", 
titleStyle:new dvt.$CSSStyle$("font-family: Helvetica Neue, Helvetica, Arial, sans-serif; font-size: 12px; font-weight: bold; color: #000000; white-space: nowrap;")}, majorAxis:{labelStyle:new dvt.$CSSStyle$("font-family: Helvetica Neue, Helvetica, Arial, sans-serif; font-size: 14px; font-weight: bold; color: #4f4f4f; background-color: rgba(249,249,249,0.8); white-space: nowrap;"), separatorColor:"#bcc7d2"}, minorAxis:{backgroundColor:"#f9f9f9", borderColor:"#d9dfe3", labelStyle:new dvt.$CSSStyle$("font-family: Helvetica Neue, Helvetica, Arial, sans-serif; font-size: 12px; color: #333333;"), 
separatorColor:"#bcc7d2"}, overview:{backgroundColor:"#e6ecf3", labelStyle:new dvt.$CSSStyle$("font-family: Helvetica Neue, Helvetica, Arial, sans-serif; font-size: 12px; font-weight: bold; color: #4f4f4f;"), window:{backgroundColor:"#ffffff", borderColor:"#4f4f4f"}}, referenceObject:{color:"#ff591f"}, series:{backgroundColor:"#f9f9f9", colors:dvt.$CSSStyle$.$COLORS_ALTA$, emptyTextStyle:new dvt.$CSSStyle$("font-family: Helvetica Neue, Helvetica, Arial, sans-serif; font-size: 12px; font-weight: normal; color: #333333; white-space: nowrap;"), 
labelStyle:new dvt.$CSSStyle$("font-family: Helvetica Neue, Helvetica, Arial, sans-serif; font-size: 13px; font-weight: bold; color: #252525; background-color: rgba(249,249,249,0.8); white-space: nowrap;")}}};
function $DvtTimelineParser$$() {
}
dvt.$Obj$.$createSubclass$($DvtTimelineParser$$, dvt.$Obj$, "DvtTimelineParser");
$DvtTimelineParser$$.prototype.parse = function $$DvtTimelineParser$$$$parse$($options$$268$$) {
  this.$_itemSelection$ = $options$$268$$.selectionMode;
  $options$$268$$.viewportStart && (this.$_viewStartTime$ = new Date($options$$268$$.viewportStart));
  $options$$268$$.viewportEnd && (this.$_viewEndTime$ = new Date($options$$268$$.viewportEnd));
  this.$_startTime$ = new Date($options$$268$$.start);
  this.$_endTime$ = new Date($options$$268$$.end);
  var $ret$$63$$ = this.$ParseRootAttributes$();
  $ret$$63$$.$inlineStyle$ = $options$$268$$.style;
  var $majorAxis_minorAxis_overview$$2_referenceObjects$$3$$ = $options$$268$$.minorAxis;
  if($majorAxis_minorAxis_overview$$2_referenceObjects$$3$$) {
    var $referenceObjectsValueArray_scale$$60$$ = $majorAxis_minorAxis_overview$$2_referenceObjects$$3$$.scale;
    $ret$$63$$.scale = $referenceObjectsValueArray_scale$$60$$;
    var $i$$633_zoomOrder$$3$$ = $majorAxis_minorAxis_overview$$2_referenceObjects$$3$$.zoomOrder;
    $i$$633_zoomOrder$$3$$ == $JSCompiler_alias_NULL$$ ? $i$$633_zoomOrder$$3$$ = [$referenceObjectsValueArray_scale$$60$$] : $i$$633_zoomOrder$$3$$.reverse();
    $ret$$63$$.$zoomOrder$ = $i$$633_zoomOrder$$3$$;
    $ret$$63$$.$converter$ = $majorAxis_minorAxis_overview$$2_referenceObjects$$3$$.converter;
    $ret$$63$$.$axisStyle$ = $majorAxis_minorAxis_overview$$2_referenceObjects$$3$$.style
  }
  if($majorAxis_minorAxis_overview$$2_referenceObjects$$3$$ = $options$$268$$.majorAxis) {
    $ret$$63$$.$seriesScale$ = $majorAxis_minorAxis_overview$$2_referenceObjects$$3$$.scale, $ret$$63$$.$seriesConverter$ = $majorAxis_minorAxis_overview$$2_referenceObjects$$3$$.converter
  }
  $ret$$63$$.$shortDesc$ = $options$$268$$.shortDesc;
  $ret$$63$$.id = $options$$268$$.id;
  $ret$$63$$.orientation = $options$$268$$.orientation;
  if(($majorAxis_minorAxis_overview$$2_referenceObjects$$3$$ = $options$$268$$.referenceObjects) && 0 < $majorAxis_minorAxis_overview$$2_referenceObjects$$3$$.length) {
    $referenceObjectsValueArray_scale$$60$$ = [];
    for($i$$633_zoomOrder$$3$$ = 0;$i$$633_zoomOrder$$3$$ < $majorAxis_minorAxis_overview$$2_referenceObjects$$3$$.length;$i$$633_zoomOrder$$3$$++) {
      $referenceObjectsValueArray_scale$$60$$.push(new Date($majorAxis_minorAxis_overview$$2_referenceObjects$$3$$[$i$$633_zoomOrder$$3$$].value))
    }
    $ret$$63$$.$referenceObjects$ = $referenceObjectsValueArray_scale$$60$$
  }
  $majorAxis_minorAxis_overview$$2_referenceObjects$$3$$ = $options$$268$$.overview;
  $ret$$63$$.$hasOverview$ = $majorAxis_minorAxis_overview$$2_referenceObjects$$3$$ != $JSCompiler_alias_NULL$$ && "on" == $majorAxis_minorAxis_overview$$2_referenceObjects$$3$$.rendered ? $JSCompiler_alias_TRUE$$ : $JSCompiler_alias_FALSE$$;
  $ret$$63$$.$timeZoneOffsets$ = $options$$268$$._tzo;
  $ret$$63$$.$itemPosition$ = $options$$268$$._ip;
  return $ret$$63$$
};
$DvtTimelineParser$$.prototype.$ParseRootAttributes$ = function $$DvtTimelineParser$$$$$ParseRootAttributes$$() {
  var $ret$$64$$ = {};
  $ret$$64$$.$origStart$ = this.$_startTime$;
  $ret$$64$$.$origEnd$ = this.$_endTime$;
  $ret$$64$$.orientation = "horizontal";
  $ret$$64$$.start = this.$_startTime$.getTime();
  $ret$$64$$.end = this.$_endTime$.getTime();
  this.$_viewStartTime$ && ($ret$$64$$.$viewStart$ = this.$_viewStartTime$.getTime());
  this.$_viewEndTime$ && ($ret$$64$$.$viewEnd$ = this.$_viewEndTime$.getTime());
  $ret$$64$$.$selectionMode$ = "none";
  this.$_itemSelection$ != $JSCompiler_alias_NULL$$ && ($ret$$64$$.$selectionMode$ = this.$_itemSelection$);
  return $ret$$64$$
};
var $DvtTimelineRenderer$$ = {};
dvt.$Obj$.$createSubclass$($DvtTimelineRenderer$$, dvt.$Obj$, "DvtTimelineRenderer");
$DvtTimelineRenderer$$.$renderTimeline$ = function $$DvtTimelineRenderer$$$$renderTimeline$$($timeline$$3$$) {
  $DvtTimelineRenderer$$.$_renderBackground$($timeline$$3$$);
  $DvtTimelineRenderer$$.$_renderScrollableCanvas$($timeline$$3$$);
  if($JSCompiler_StaticMethods_hasValidOptions$$($timeline$$3$$)) {
    $DvtTimelineRenderer$$.$_renderInnerCanvas$($timeline$$3$$, $timeline$$3$$.$_canvas$);
    $DvtTimelineRenderer$$.$_renderSeries$($timeline$$3$$, $timeline$$3$$.$_innerCanvas$);
    $DvtTimelineRenderer$$.$_renderSeriesLabels$($timeline$$3$$);
    $DvtTimelineRenderer$$.$_renderAxis$($timeline$$3$$, $timeline$$3$$.$_innerCanvas$);
    $timeline$$3$$.$_hasOverview$ ? $DvtTimelineRenderer$$.$_renderOverview$($timeline$$3$$) : $JSCompiler_StaticMethods_clearOverview$$($timeline$$3$$);
    if($timeline$$3$$.$_keyboardHandler$) {
      for(var $i$$634$$ = 0;$i$$634$$ < $timeline$$3$$.$_series$.length;$i$$634$$++) {
        var $JSCompiler_StaticMethods_triggerAnimations$self$$inline_5080_series$$24$$ = $timeline$$3$$.$_series$[$i$$634$$];
        if($JSCompiler_StaticMethods_triggerAnimations$self$$inline_5080_series$$24$$.$_items$ && 0 < $JSCompiler_StaticMethods_triggerAnimations$self$$inline_5080_series$$24$$.$_items$.length) {
          $timeline$$3$$.$EventManager$.$setFocusObj$($JSCompiler_StaticMethods_triggerAnimations$self$$inline_5080_series$$24$$.$_items$[0]);
          break
        }
      }
    }
    $DvtTimelineRenderer$$.$_renderScrollHotspots$($timeline$$3$$);
    $DvtTimelineRenderer$$.$_renderZoomControls$($timeline$$3$$);
    $timeline$$3$$.$SelectionHandler$ && $JSCompiler_StaticMethods_applyInitialSelections$$($timeline$$3$$);
    $DvtTimeUtils$$.$supportsTouch$() && $timeline$$3$$.$_setAriaProperty$("flowto", $timeline$$3$$.$_series$[0].getId());
    for($i$$634$$ = 0;$i$$634$$ < $timeline$$3$$.$_series$.length;$i$$634$$++) {
      var $JSCompiler_StaticMethods_triggerAnimations$self$$inline_5080_series$$24$$ = $timeline$$3$$.$_series$[$i$$634$$], $context$$inline_5081_fadeInAnimator$$inline_5083_fadeOutAnimator$$inline_5082$$ = $JSCompiler_StaticMethods_triggerAnimations$self$$inline_5080_series$$24$$.$getCtx$();
      $JSCompiler_StaticMethods_triggerAnimations$self$$inline_5080_series$$24$$.$_rmAnimationElems$ && 0 != $JSCompiler_StaticMethods_triggerAnimations$self$$inline_5080_series$$24$$.$_rmAnimationElems$.length ? ($JSCompiler_StaticMethods_triggerAnimations$self$$inline_5080_series$$24$$.$_isAnimating$ = $JSCompiler_alias_TRUE$$, $context$$inline_5081_fadeInAnimator$$inline_5083_fadeOutAnimator$$inline_5082$$ = new dvt.$ParallelPlayable$($context$$inline_5081_fadeInAnimator$$inline_5083_fadeOutAnimator$$inline_5082$$, 
      new dvt.$AnimFadeOut$($context$$inline_5081_fadeInAnimator$$inline_5083_fadeOutAnimator$$inline_5082$$, $JSCompiler_StaticMethods_triggerAnimations$self$$inline_5080_series$$24$$.$_rmAnimationElems$, $DvtTimelineStyleUtils$$.$getAnimationDuration$($JSCompiler_StaticMethods_triggerAnimations$self$$inline_5080_series$$24$$.$Options$))), $context$$inline_5081_fadeInAnimator$$inline_5083_fadeOutAnimator$$inline_5082$$.play(), dvt.$Playable$.$appendOnEnd$($context$$inline_5081_fadeInAnimator$$inline_5083_fadeOutAnimator$$inline_5082$$, 
      $JSCompiler_StaticMethods_triggerAnimations$self$$inline_5080_series$$24$$.$_onRmAnimationEnd$, $JSCompiler_StaticMethods_triggerAnimations$self$$inline_5080_series$$24$$)) : $JSCompiler_StaticMethods_triggerAnimations$self$$inline_5080_series$$24$$.$_mvAnimator$ ? ($JSCompiler_StaticMethods_triggerAnimations$self$$inline_5080_series$$24$$.$_isAnimating$ = $JSCompiler_alias_TRUE$$, $JSCompiler_StaticMethods_triggerAnimations$self$$inline_5080_series$$24$$.$_mvAnimator$.play(), dvt.$Playable$.$appendOnEnd$($JSCompiler_StaticMethods_triggerAnimations$self$$inline_5080_series$$24$$.$_mvAnimator$, 
      $JSCompiler_StaticMethods_triggerAnimations$self$$inline_5080_series$$24$$.$_onMvAnimationEnd$, $JSCompiler_StaticMethods_triggerAnimations$self$$inline_5080_series$$24$$)) : $JSCompiler_StaticMethods_triggerAnimations$self$$inline_5080_series$$24$$.$_frAnimationElems$ && 0 != $JSCompiler_StaticMethods_triggerAnimations$self$$inline_5080_series$$24$$.$_frAnimationElems$.length && ($JSCompiler_StaticMethods_triggerAnimations$self$$inline_5080_series$$24$$.$_isAnimating$ = $JSCompiler_alias_TRUE$$, 
      $context$$inline_5081_fadeInAnimator$$inline_5083_fadeOutAnimator$$inline_5082$$ = new dvt.$ParallelPlayable$($context$$inline_5081_fadeInAnimator$$inline_5083_fadeOutAnimator$$inline_5082$$, new dvt.$AnimFadeIn$($context$$inline_5081_fadeInAnimator$$inline_5083_fadeOutAnimator$$inline_5082$$, $JSCompiler_StaticMethods_triggerAnimations$self$$inline_5080_series$$24$$.$_frAnimationElems$, $DvtTimelineStyleUtils$$.$getAnimationDuration$($JSCompiler_StaticMethods_triggerAnimations$self$$inline_5080_series$$24$$.$Options$), 
      0)), $context$$inline_5081_fadeInAnimator$$inline_5083_fadeOutAnimator$$inline_5082$$.play(), dvt.$Playable$.$appendOnEnd$($context$$inline_5081_fadeInAnimator$$inline_5083_fadeOutAnimator$$inline_5082$$, $JSCompiler_StaticMethods_triggerAnimations$self$$inline_5080_series$$24$$.$_onAnimationEnd$, $JSCompiler_StaticMethods_triggerAnimations$self$$inline_5080_series$$24$$))
    }
    dvt.$Agent$.$isEnvironmentBrowser$() && !$JSCompiler_StaticMethods_isAnimating$$($timeline$$3$$) && $JSCompiler_StaticMethods_showThenHideHotspots$$($timeline$$3$$)
  }else {
    $DvtTimelineRenderer$$.$_renderEmptyText$($timeline$$3$$)
  }
};
$DvtTimelineRenderer$$.$_renderBackground$ = function $$DvtTimelineRenderer$$$$_renderBackground$$($timeline$$4$$) {
  $timeline$$4$$.$_background$ ? ($timeline$$4$$.$_background$.$setClipPath$($JSCompiler_alias_NULL$$), $timeline$$4$$.$_background$.$setWidth$($timeline$$4$$.$_backgroundWidth$), $timeline$$4$$.$_background$.$setHeight$($timeline$$4$$.$_backgroundHeight$)) : $timeline$$4$$.$_background$ = new dvt.$Rect$($timeline$$4$$.$getCtx$(), 0, 0, $timeline$$4$$.$_backgroundWidth$, $timeline$$4$$.$_backgroundHeight$, "bg");
  $timeline$$4$$.$_background$.$setCSSStyle$($timeline$$4$$.$_style$);
  $timeline$$4$$.$_background$.$setPixelHinting$();
  var $cp$$8$$ = new dvt.$ClipPath$;
  $cp$$8$$.$addRect$(0, 0, $timeline$$4$$.$_backgroundWidth$, $timeline$$4$$.$_backgroundHeight$);
  $timeline$$4$$.$_background$.$setClipPath$($cp$$8$$);
  $timeline$$4$$.$_background$.getParent() != $timeline$$4$$ && $timeline$$4$$.$addChild$($timeline$$4$$.$_background$)
};
$DvtTimelineRenderer$$.$_renderScrollableCanvas$ = function $$DvtTimelineRenderer$$$$_renderScrollableCanvas$$($timeline$$5$$) {
  $timeline$$5$$.$_canvas$ || ($timeline$$5$$.$_canvas$ = new dvt.$Container$($timeline$$5$$.$getCtx$(), "canvas"), $timeline$$5$$.$addChild$($timeline$$5$$.$_canvas$))
};
$DvtTimelineRenderer$$.$_renderInnerCanvas$ = function $$DvtTimelineRenderer$$$$_renderInnerCanvas$$($timeline$$6$$, $container$$178$$) {
  $timeline$$6$$.$_innerCanvas$ ? $timeline$$6$$.$_innerCanvas$.$setClipPath$($JSCompiler_alias_NULL$$) : $timeline$$6$$.$_innerCanvas$ = new dvt.$Container$($timeline$$6$$.$getCtx$(), "iCanvas");
  var $cp$$9$$ = new dvt.$ClipPath$;
  $timeline$$6$$.$isVertical$() ? ($cp$$9$$.$addRect$($timeline$$6$$.$_startX$, $timeline$$6$$.$_startY$, $timeline$$6$$.$_canvasSize$, $timeline$$6$$.$_canvasLength$), $timeline$$6$$.$_innerCanvas$.$setTranslateX$($timeline$$6$$.$_startX$), $timeline$$6$$.$_innerCanvas$.$setTranslateY$($timeline$$6$$.$_startY$ + $timeline$$6$$.$_startPos$)) : ($cp$$9$$.$addRect$($timeline$$6$$.$_startX$, $timeline$$6$$.$_startY$, $timeline$$6$$.$_canvasLength$, $timeline$$6$$.$_canvasSize$), $timeline$$6$$.$_innerCanvas$.$setTranslateX$($timeline$$6$$.$_startX$ + 
  $timeline$$6$$.$_startPos$), $timeline$$6$$.$_innerCanvas$.$setTranslateY$($timeline$$6$$.$_startY$));
  $container$$178$$.$setClipPath$($cp$$9$$);
  $timeline$$6$$.$_innerCanvas$.getParent() != $container$$178$$ && $container$$178$$.$addChild$($timeline$$6$$.$_innerCanvas$)
};
$DvtTimelineRenderer$$.$_renderSeries$ = function $$DvtTimelineRenderer$$$$_renderSeries$$($timeline$$7$$, $container$$179$$) {
  if($timeline$$7$$.$_series$) {
    var $isRTL$$43$$ = dvt.$Agent$.$isRightToLeft$($timeline$$7$$.$getCtx$()), $seriesCount$$30$$ = $timeline$$7$$.$_series$.length, $JSCompiler_StaticMethods_setContentSize$self$$inline_6727_axisSize$$3$$ = $JSCompiler_StaticMethods_getTimeAxisVisibleSize$$($timeline$$7$$, $seriesCount$$30$$);
    if(!$timeline$$7$$.$isVertical$() && 1 < $seriesCount$$30$$ && $timeline$$7$$.$_canvasSize$ % 2 != $JSCompiler_StaticMethods_setContentSize$self$$inline_6727_axisSize$$3$$ % 2) {
      var $JSCompiler_StaticMethods_setContentSize$self$$inline_6727_axisSize$$3$$ = $timeline$$7$$.$_timeAxis$, $contentSize$$inline_6728_i$$635$$ = $timeline$$7$$.$_timeAxis$.$_contentSize$ + 1;
      $contentSize$$inline_6728_i$$635$$ > $JSCompiler_StaticMethods_setContentSize$self$$inline_6727_axisSize$$3$$.$_contentSize$ && ($JSCompiler_StaticMethods_setContentSize$self$$inline_6727_axisSize$$3$$.$_contentSize$ = $contentSize$$inline_6728_i$$635$$);
      $JSCompiler_StaticMethods_setContentSize$self$$inline_6727_axisSize$$3$$ = $JSCompiler_StaticMethods_getTimeAxisVisibleSize$$($timeline$$7$$, $seriesCount$$30$$)
    }
    $timeline$$7$$.$_seriesSize$ = ($timeline$$7$$.$_canvasSize$ - $JSCompiler_StaticMethods_setContentSize$self$$inline_6727_axisSize$$3$$) / $seriesCount$$30$$;
    for($contentSize$$inline_6728_i$$635$$ = 0;$contentSize$$inline_6728_i$$635$$ < $seriesCount$$30$$;$contentSize$$inline_6728_i$$635$$++) {
      var $series$$25$$ = $timeline$$7$$.$_series$[$contentSize$$inline_6728_i$$635$$];
      $series$$25$$.$setClipPath$($JSCompiler_alias_NULL$$);
      var $cp$$10$$ = new dvt.$ClipPath$;
      if($timeline$$7$$.$isVertical$()) {
        var $key$$70_posMatrix$$1$$ = $isRTL$$43$$ ? Math.abs($contentSize$$inline_6728_i$$635$$ - 1) : $contentSize$$inline_6728_i$$635$$;
        $isRTL$$43$$ && 1 == $timeline$$7$$.$_series$.length ? ($cp$$10$$.$addRect$($JSCompiler_StaticMethods_setContentSize$self$$inline_6727_axisSize$$3$$, 0, $timeline$$7$$.$_seriesSize$, $timeline$$7$$.$_contentLength$), $key$$70_posMatrix$$1$$ = new dvt.$Matrix$(1, 0, 0, 1, $JSCompiler_StaticMethods_setContentSize$self$$inline_6727_axisSize$$3$$, 0)) : ($cp$$10$$.$addRect$($key$$70_posMatrix$$1$$ * ($timeline$$7$$.$_seriesSize$ + $JSCompiler_StaticMethods_setContentSize$self$$inline_6727_axisSize$$3$$), 
        0, $timeline$$7$$.$_seriesSize$, $timeline$$7$$.$_contentLength$), $key$$70_posMatrix$$1$$ = new dvt.$Matrix$(1, 0, 0, 1, $key$$70_posMatrix$$1$$ * ($timeline$$7$$.$_seriesSize$ + $JSCompiler_StaticMethods_setContentSize$self$$inline_6727_axisSize$$3$$), 0));
        var $width$$132$$ = $timeline$$7$$.$_seriesSize$, $height$$113$$ = $timeline$$7$$.$_contentLength$
      }else {
        $cp$$10$$.$addRect$(0, $contentSize$$inline_6728_i$$635$$ * ($timeline$$7$$.$_seriesSize$ + $JSCompiler_StaticMethods_setContentSize$self$$inline_6727_axisSize$$3$$), $timeline$$7$$.$_contentLength$, $timeline$$7$$.$_seriesSize$), $key$$70_posMatrix$$1$$ = new dvt.$Matrix$(1, 0, 0, 1, 0, $contentSize$$inline_6728_i$$635$$ * ($timeline$$7$$.$_seriesSize$ + $JSCompiler_StaticMethods_setContentSize$self$$inline_6727_axisSize$$3$$)), $width$$132$$ = $timeline$$7$$.$_contentLength$, $height$$113$$ = 
        $timeline$$7$$.$_seriesSize$
      }
      $series$$25$$.$setClipPath$($cp$$10$$);
      $series$$25$$.$setMatrix$($key$$70_posMatrix$$1$$);
      $series$$25$$.getParent() != $container$$179$$ && $container$$179$$.$addChild$($series$$25$$);
      $series$$25$$.$render$($timeline$$7$$.$_seriesOptions$[$contentSize$$inline_6728_i$$635$$], $width$$132$$, $height$$113$$)
    }
  }
};
$DvtTimelineRenderer$$.$_renderSeriesLabels$ = function $$DvtTimelineRenderer$$$$_renderSeriesLabels$$($timeline$$8$$) {
  if($timeline$$8$$.$_series$) {
    var $context$$399$$ = $timeline$$8$$.$getCtx$(), $isRTL$$44$$ = dvt.$Agent$.$isRightToLeft$($context$$399$$);
    if($timeline$$8$$.$_seriesLabels$) {
      for(var $i$$636$$ = 0;$i$$636$$ < $timeline$$8$$.$_seriesLabels$.length;$i$$636$$++) {
        $timeline$$8$$.removeChild($timeline$$8$$.$_seriesLabels$[$i$$636$$])
      }
    }
    $timeline$$8$$.$_seriesLabels$ = [];
    for(var $seriesCount$$31$$ = $timeline$$8$$.$_series$.length, $labelSpacing$$ = $DvtTimelineStyleUtils$$.$getSeriesLabelSpacing$(), $zoomControlSpacing$$ = 2 * dvt.$TransientButton$.$_DEFAULT_RADIUS$ + 6, $doubleLabelSpacing$$ = 2 * $labelSpacing$$, $i$$636$$ = 0;$i$$636$$ < $seriesCount$$31$$;$i$$636$$++) {
      var $series$$26_seriesEmptyText_seriesEmptyTextElem$$ = $timeline$$8$$.$_series$[$i$$636$$], $seriesLabel$$2_seriesLabelElem$$ = $series$$26_seriesEmptyText_seriesEmptyTextElem$$.$getLabel$();
      if($seriesLabel$$2_seriesLabelElem$$ != $JSCompiler_alias_NULL$$) {
        var $posX$$4_seriesLabelStyle$$ = $DvtTimelineStyleUtils$$.$getSeriesLabelStyle$($timeline$$8$$.$Options$), $seriesLabel$$2_seriesLabelElem$$ = new dvt.$OutputText$($context$$399$$, $seriesLabel$$2_seriesLabelElem$$, 0, 0, "sl_s" + $i$$636$$);
        $seriesLabel$$2_seriesLabelElem$$.$setCSSStyle$($posX$$4_seriesLabelStyle$$);
        $timeline$$8$$.$addChild$($seriesLabel$$2_seriesLabelElem$$);
        var $dim$$77_posMatrix$$2$$ = $seriesLabel$$2_seriesLabelElem$$.$getDimensions$();
        $timeline$$8$$.removeChild($seriesLabel$$2_seriesLabelElem$$);
        var $totalSpace$$2_width$$133$$ = $timeline$$8$$.$isVertical$() ? $timeline$$8$$.$_seriesSize$ : $timeline$$8$$.$_canvasLength$, $totalSpace$$2_width$$133$$ = Math.min($dim$$77_posMatrix$$2$$.$w$, $totalSpace$$2_width$$133$$ - ($i$$636$$ - 1) * -$zoomControlSpacing$$ - $doubleLabelSpacing$$), $seriesLabelPadding$$ = $DvtTimelineStyleUtils$$.$getSeriesLabelPadding$(), $backgroundRect$$2$$ = new dvt.$Rect$($context$$399$$, 0, 0, $totalSpace$$2_width$$133$$ + 2 * $seriesLabelPadding$$, $dim$$77_posMatrix$$2$$.$h$ + 
        2 * $seriesLabelPadding$$, "slb_s" + $i$$636$$);
        $backgroundRect$$2$$.$setCSSStyle$($posX$$4_seriesLabelStyle$$);
        $backgroundRect$$2$$.$setCornerRadius$(3);
        if($timeline$$8$$.$isVertical$()) {
          $posX$$4_seriesLabelStyle$$ = $isRTL$$44$$ ? Math.abs($i$$636$$ - 1) * ($timeline$$8$$.$_canvasSize$ - $totalSpace$$2_width$$133$$ - $doubleLabelSpacing$$) + $labelSpacing$$ + $timeline$$8$$.$_startX$ + ($i$$636$$ - 1) * $zoomControlSpacing$$ : $i$$636$$ * ($timeline$$8$$.$_canvasSize$ - $totalSpace$$2_width$$133$$ - $doubleLabelSpacing$$) + $labelSpacing$$ + $timeline$$8$$.$_startX$ + ($i$$636$$ - 1) * -$zoomControlSpacing$$, $posY$$3$$ = $timeline$$8$$.$_startY$ + $labelSpacing$$
        }else {
          var $posX$$4_seriesLabelStyle$$ = $isRTL$$44$$ ? $timeline$$8$$.$_canvasLength$ - $totalSpace$$2_width$$133$$ - $labelSpacing$$ - ($i$$636$$ - 1) * -$zoomControlSpacing$$ : $timeline$$8$$.$_startX$ + $labelSpacing$$ + ($i$$636$$ - 1) * -$zoomControlSpacing$$, $posY$$3$$ = $i$$636$$ * ($timeline$$8$$.$_canvasSize$ - $dim$$77_posMatrix$$2$$.$h$ - $doubleLabelSpacing$$) + $labelSpacing$$ + $timeline$$8$$.$_startY$
        }
        $dim$$77_posMatrix$$2$$ = new dvt.$Matrix$(1, 0, 0, 1, $posX$$4_seriesLabelStyle$$, $posY$$3$$);
        $seriesLabel$$2_seriesLabelElem$$.$setMatrix$($dim$$77_posMatrix$$2$$);
        $dim$$77_posMatrix$$2$$ = new dvt.$Matrix$(1, 0, 0, 1, $posX$$4_seriesLabelStyle$$ - $seriesLabelPadding$$, $posY$$3$$ - $seriesLabelPadding$$);
        $backgroundRect$$2$$.$setMatrix$($dim$$77_posMatrix$$2$$);
        $timeline$$8$$.$addChild$($backgroundRect$$2$$);
        dvt.$TextUtils$.$fitText$($seriesLabel$$2_seriesLabelElem$$, $totalSpace$$2_width$$133$$, Infinity, $timeline$$8$$);
        $timeline$$8$$.$_seriesLabels$.push($backgroundRect$$2$$);
        $timeline$$8$$.$_seriesLabels$.push($seriesLabel$$2_seriesLabelElem$$)
      }
      $series$$26_seriesEmptyText_seriesEmptyTextElem$$.$_isEmpty$ && ($series$$26_seriesEmptyText_seriesEmptyTextElem$$ = $series$$26_seriesEmptyText_seriesEmptyTextElem$$.$_emptyText$, $series$$26_seriesEmptyText_seriesEmptyTextElem$$ != $JSCompiler_alias_NULL$$ && ($series$$26_seriesEmptyText_seriesEmptyTextElem$$ = new dvt.$OutputText$($context$$399$$, $series$$26_seriesEmptyText_seriesEmptyTextElem$$, 0, 0, "et_s" + $i$$636$$), $series$$26_seriesEmptyText_seriesEmptyTextElem$$.$setCSSStyle$($DvtTimelineStyleUtils$$.$getEmptyTextStyle$($timeline$$8$$.$Options$)), 
      $timeline$$8$$.$addChild$($series$$26_seriesEmptyText_seriesEmptyTextElem$$), $dim$$77_posMatrix$$2$$ = $series$$26_seriesEmptyText_seriesEmptyTextElem$$.$getDimensions$(), $timeline$$8$$.removeChild($series$$26_seriesEmptyText_seriesEmptyTextElem$$), $dim$$77_posMatrix$$2$$ = new dvt.$Matrix$(1, 0, 0, 1, ($timeline$$8$$.$_canvasLength$ - $dim$$77_posMatrix$$2$$.$w$) / 2 + $timeline$$8$$.$_startX$, $i$$636$$ * ($timeline$$8$$.$_seriesSize$ + $JSCompiler_StaticMethods_getTimeAxisVisibleSize$$($timeline$$8$$, 
      $seriesCount$$31$$)) + ($timeline$$8$$.$_seriesSize$ - $dim$$77_posMatrix$$2$$.$h$) / 2 + $timeline$$8$$.$_startY$), $series$$26_seriesEmptyText_seriesEmptyTextElem$$.$setMatrix$($dim$$77_posMatrix$$2$$), $timeline$$8$$.$addChild$($series$$26_seriesEmptyText_seriesEmptyTextElem$$), $timeline$$8$$.$_seriesLabels$.push($series$$26_seriesEmptyText_seriesEmptyTextElem$$)))
    }
  }
};
$DvtTimelineRenderer$$.$_renderAxis$ = function $$DvtTimelineRenderer$$$$_renderAxis$$($timeline$$9$$, $container$$180$$) {
  var $context$$400$$ = $timeline$$9$$.$getCtx$(), $cp$$11_isRTL$$45$$ = dvt.$Agent$.$isRightToLeft$($context$$400$$), $axisStart_seriesCount$$32$$ = $timeline$$9$$.$_series$.length, $axisSize$$4$$ = $timeline$$9$$.$_timeAxis$.$getSize$(), $axisVisibleSize$$ = $JSCompiler_StaticMethods_getTimeAxisVisibleSize$$($timeline$$9$$, $axisStart_seriesCount$$32$$), $axisStart_seriesCount$$32$$ = 1 == $axisStart_seriesCount$$32$$ ? $timeline$$9$$.$_canvasSize$ - $axisVisibleSize$$ : $timeline$$9$$.$_canvasSize$ / 
  $axisStart_seriesCount$$32$$ - $axisVisibleSize$$ / 2;
  $cp$$11_isRTL$$45$$ && ($timeline$$9$$.$isVertical$() && 1 == $timeline$$9$$.$_series$.length) && ($axisStart_seriesCount$$32$$ = 0);
  $timeline$$9$$.$_axis$ == $JSCompiler_alias_NULL$$ ? ($cp$$11_isRTL$$45$$ = new dvt.$ClipPath$, $timeline$$9$$.$isVertical$() ? ($timeline$$9$$.$_axis$ = new dvt.$Rect$($context$$400$$, $axisStart_seriesCount$$32$$, -$timeline$$9$$.$_axisBorderWidth$, $axisSize$$4$$, $timeline$$9$$.$_axisLength$, "axis"), $cp$$11_isRTL$$45$$.$addRect$($axisStart_seriesCount$$32$$, 0, $axisSize$$4$$, $timeline$$9$$.$_contentLength$)) : ($timeline$$9$$.$_axis$ = new dvt.$Rect$($context$$400$$, -$timeline$$9$$.$_axisBorderWidth$, 
  $axisStart_seriesCount$$32$$, $timeline$$9$$.$_axisLength$, $axisSize$$4$$, "axis"), $cp$$11_isRTL$$45$$.$addRect$(0, $axisStart_seriesCount$$32$$, $timeline$$9$$.$_contentLength$, $axisSize$$4$$)), $timeline$$9$$.$_axis$.$setCSSStyle$($timeline$$9$$.$_axisStyle$), $timeline$$9$$.$_axis$.$setPixelHinting$(), $timeline$$9$$.$_axis$.$setClipPath$($cp$$11_isRTL$$45$$), $container$$180$$.$addChild$($timeline$$9$$.$_axis$)) : ($timeline$$9$$.$_axis$.$setClipPath$($JSCompiler_alias_NULL$$), $cp$$11_isRTL$$45$$ = 
  new dvt.$ClipPath$, $timeline$$9$$.$isVertical$() ? ($timeline$$9$$.$_axis$.$setX$($axisStart_seriesCount$$32$$), $timeline$$9$$.$_axis$.$setY$(-$timeline$$9$$.$_axisBorderWidth$), $timeline$$9$$.$_axis$.$setWidth$($axisSize$$4$$), $timeline$$9$$.$_axis$.$setHeight$($timeline$$9$$.$_axisLength$), $cp$$11_isRTL$$45$$.$addRect$($axisStart_seriesCount$$32$$, 0, $axisSize$$4$$, $timeline$$9$$.$_contentLength$)) : ($timeline$$9$$.$_axis$.$setX$(-$timeline$$9$$.$_axisBorderWidth$), $timeline$$9$$.$_axis$.$setY$($axisStart_seriesCount$$32$$), 
  $timeline$$9$$.$_axis$.$setWidth$($timeline$$9$$.$_axisLength$), $timeline$$9$$.$_axis$.$setHeight$($axisSize$$4$$), $cp$$11_isRTL$$45$$.$addRect$(0, $axisStart_seriesCount$$32$$, $timeline$$9$$.$_contentLength$, $axisSize$$4$$)), $timeline$$9$$.$_axis$.$setClipPath$($cp$$11_isRTL$$45$$));
  $DvtTimelineRenderer$$.$_renderSeriesTicks$($timeline$$9$$, $axisStart_seriesCount$$32$$)
};
$DvtTimelineRenderer$$.$_renderSeriesTicks$ = function $$DvtTimelineRenderer$$$$_renderSeriesTicks$$($timeline$$10$$, $axisStartPos$$) {
  $timeline$$10$$.$_axis$.$removeChildren$();
  var $axisStart$$1_separatorStyle$$ = new dvt.$CSSStyle$($DvtTimelineStyleUtils$$.$getAxisSeparatorStyle$());
  if($timeline$$10$$.$_axisStyleDefaults$) {
    var $separatorColor$$ = $timeline$$10$$.$_axisStyleDefaults$.separatorColor;
    $separatorColor$$ && $axisStart$$1_separatorStyle$$.$parseInlineStyle$("color:" + $separatorColor$$ + ";")
  }
  $timeline$$10$$.$_separatorStroke$ = new dvt.$SolidStroke$($axisStart$$1_separatorStyle$$.$getStyle$(dvt.$CSSStyle$.$COLOR$));
  $axisStart$$1_separatorStyle$$ = $axisStartPos$$ + $timeline$$10$$.$_timeAxis$.$_borderWidth$;
  $DvtTimelineRenderer$$.$_renderTimeAxis$($timeline$$10$$, $timeline$$10$$.$_fetchStartPos$, $timeline$$10$$.$_fetchEndPos$, $timeline$$10$$.$_axis$, $timeline$$10$$.$_contentLength$, $axisStart$$1_separatorStyle$$ + $timeline$$10$$.$_timeAxis$.$_contentSize$, $axisStart$$1_separatorStyle$$, $axisStart$$1_separatorStyle$$);
  $DvtTimelineRenderer$$.$_renderSeriesTimeAxis$($timeline$$10$$, $timeline$$10$$.$_fetchStartPos$, $timeline$$10$$.$_fetchEndPos$, $timeline$$10$$.$_innerCanvas$, $timeline$$10$$.$_contentLength$)
};
$DvtTimelineRenderer$$.$_renderTimeAxis$ = function $$DvtTimelineRenderer$$$$_renderTimeAxis$$($timeline$$11$$, $dates$$2_startPos$$2$$, $endPos$$5_labels$$31$$, $container$$181_i$$637$$, $length$$21$$, $axisEnd$$1$$, $tickStart$$, $labelStart$$) {
  var $block_context$$401$$ = $timeline$$11$$.$getCtx$(), $isRTL$$46$$ = dvt.$Agent$.$isRightToLeft$($block_context$$401$$), $block_context$$401$$ = new dvt.$Container$($block_context$$401$$, "block_" + $dates$$2_startPos$$2$$ + "_" + $endPos$$5_labels$$31$$);
  $block_context$$401$$.$startPos$ = $dates$$2_startPos$$2$$;
  $block_context$$401$$.$endPos$ = $endPos$$5_labels$$31$$;
  $container$$181_i$$637$$.$addChild$($block_context$$401$$);
  $dates$$2_startPos$$2$$ = $timeline$$11$$.$_dates$[$timeline$$11$$.$_zoomLevelOrder$];
  $endPos$$5_labels$$31$$ = $timeline$$11$$.$_labels$[$timeline$$11$$.$_zoomLevelOrder$];
  for($container$$181_i$$637$$ = 0;$container$$181_i$$637$$ < $dates$$2_startPos$$2$$.length - 1;$container$$181_i$$637$$++) {
    var $date$$16$$ = $dates$$2_startPos$$2$$[$container$$181_i$$637$$], $next$$16_nextPos$$ = $dates$$2_startPos$$2$$[$container$$181_i$$637$$ + 1], $currentPos$$1$$ = $DvtTimeUtils$$.$getDatePosition$($timeline$$11$$.$_start$, $timeline$$11$$.$_end$, $date$$16$$, $length$$21$$), $next$$16_nextPos$$ = $DvtTimeUtils$$.$getDatePosition$($timeline$$11$$.$_start$, $timeline$$11$$.$_end$, $next$$16_nextPos$$, $length$$21$$), $maxLength$$2$$ = $next$$16_nextPos$$ - $currentPos$$1$$;
    0 != $currentPos$$1$$ && (($timeline$$11$$.$isVertical$() ? $timeline$$11$$.$addTick$($block_context$$401$$, $axisEnd$$1$$, $tickStart$$, $currentPos$$1$$, $currentPos$$1$$, $timeline$$11$$.$_separatorStroke$, "s_tick" + $date$$16$$) : $isRTL$$46$$ ? $timeline$$11$$.$addTick$($block_context$$401$$, $length$$21$$ - $currentPos$$1$$, $length$$21$$ - $currentPos$$1$$, $axisEnd$$1$$, $tickStart$$, $timeline$$11$$.$_separatorStroke$, "s_tick" + $date$$16$$) : $timeline$$11$$.$addTick$($block_context$$401$$, 
    $currentPos$$1$$, $currentPos$$1$$, $axisEnd$$1$$, $tickStart$$, $timeline$$11$$.$_separatorStroke$, "s_tick" + $date$$16$$)).time = $date$$16$$);
    $timeline$$11$$.$isVertical$() ? $JSCompiler_StaticMethods_addAxisLabel$$($block_context$$401$$, $endPos$$5_labels$$31$$[$container$$181_i$$637$$], $labelStart$$ + ($axisEnd$$1$$ - $labelStart$$) / 2, $currentPos$$1$$ + ($next$$16_nextPos$$ - $currentPos$$1$$) / 2 - 7, $axisEnd$$1$$ - $labelStart$$) : $isRTL$$46$$ ? $JSCompiler_StaticMethods_addAxisLabel$$($block_context$$401$$, $endPos$$5_labels$$31$$[$container$$181_i$$637$$], $length$$21$$ - ($currentPos$$1$$ + ($next$$16_nextPos$$ - $currentPos$$1$$) / 
    2), $labelStart$$ + 2, $maxLength$$2$$) : $JSCompiler_StaticMethods_addAxisLabel$$($block_context$$401$$, $endPos$$5_labels$$31$$[$container$$181_i$$637$$], $currentPos$$1$$ + ($next$$16_nextPos$$ - $currentPos$$1$$) / 2, $labelStart$$ + 2, $maxLength$$2$$)
  }
};
$DvtTimelineRenderer$$.$_renderSeriesTimeAxis$ = function $$DvtTimelineRenderer$$$$_renderSeriesTimeAxis$$($timeline$$12$$, $currentDate$$1_startDate$$1_startPos$$3$$, $endPos$$6$$, $container$$182$$, $length$$22$$) {
  var $isRTL$$47$$ = dvt.$Agent$.$isRightToLeft$($timeline$$12$$.$getCtx$());
  if($timeline$$12$$.$_majorAxisLabels$) {
    for(var $i$$638_start$$36$$ = 0;$i$$638_start$$36$$ < $timeline$$12$$.$_majorAxisLabels$.length;$i$$638_start$$36$$++) {
      $container$$182$$.removeChild($timeline$$12$$.$_majorAxisLabels$[$i$$638_start$$36$$])
    }
  }
  $timeline$$12$$.$_majorAxisLabels$ = [];
  if($timeline$$12$$.$_seriesScale$) {
    var $i$$638_start$$36$$ = $timeline$$12$$.$_start$, $end$$27$$ = $timeline$$12$$.$_end$;
    $currentDate$$1_startDate$$1_startPos$$3$$ = $DvtTimeUtils$$.$getPositionDate$($i$$638_start$$36$$, $end$$27$$, $currentDate$$1_startDate$$1_startPos$$3$$, $length$$22$$);
    $currentDate$$1_startDate$$1_startPos$$3$$ = $timeline$$12$$.$_seriesTimeAxis$.$adjustDate$($currentDate$$1_startDate$$1_startPos$$3$$);
    for(var $currentPos$$2$$ = $DvtTimeUtils$$.$getDatePosition$($i$$638_start$$36$$, $end$$27$$, $currentDate$$1_startDate$$1_startPos$$3$$, $length$$22$$);$currentPos$$2$$ < $endPos$$6$$;) {
      var $label$$105$$ = $JSCompiler_StaticMethods_formatDate$$($timeline$$12$$.$_seriesTimeAxis$, $currentDate$$1_startDate$$1_startPos$$3$$), $nextDate$$1$$ = $timeline$$12$$.$_seriesTimeAxis$.$getNextDate$($currentDate$$1_startDate$$1_startPos$$3$$.getTime()), $next_time_pos$$2$$ = $DvtTimeUtils$$.$getDatePosition$($i$$638_start$$36$$, $end$$27$$, $nextDate$$1$$, $length$$22$$), $maxLength$$3$$ = $next_time_pos$$2$$ - $currentPos$$2$$, $time_pos$$2$$ = $currentPos$$2$$;
      ($isRTL$$47$$ ? $timeline$$12$$.$isVertical$() ? $timeline$$12$$.$addLabel$($container$$182$$, $timeline$$12$$.$_canvasSize$ - 5, $label$$105$$, $maxLength$$3$$, $time_pos$$2$$ + 18, $DvtTimelineStyleUtils$$.$getSeriesAxisLabelStyle$($timeline$$12$$.$Options$), "o_label" + $currentPos$$2$$ + "_s0", $JSCompiler_alias_TRUE$$, $DvtTimelineStyleUtils$$.$getSeriesAxisLabelPadding$(), $timeline$$12$$.$_majorAxisLabels$, $isRTL$$47$$) : $timeline$$12$$.$addLabel$($container$$182$$, $length$$22$$ - 
      ($time_pos$$2$$ + 5), $label$$105$$, $maxLength$$3$$, $timeline$$12$$.$_seriesSize$ - 2, $DvtTimelineStyleUtils$$.$getSeriesAxisLabelStyle$($timeline$$12$$.$Options$), "o_label" + $currentPos$$2$$ + "_s0", $JSCompiler_alias_TRUE$$, $DvtTimelineStyleUtils$$.$getSeriesAxisLabelPadding$(), $timeline$$12$$.$_majorAxisLabels$, $isRTL$$47$$) : $timeline$$12$$.$isVertical$() ? $timeline$$12$$.$addLabel$($container$$182$$, 5, $label$$105$$, $maxLength$$3$$, $time_pos$$2$$ + 18, $DvtTimelineStyleUtils$$.$getSeriesAxisLabelStyle$($timeline$$12$$.$Options$), 
      "o_label" + $currentPos$$2$$ + "_s0", $JSCompiler_alias_TRUE$$, $DvtTimelineStyleUtils$$.$getSeriesAxisLabelPadding$(), $timeline$$12$$.$_majorAxisLabels$, $isRTL$$47$$) : $timeline$$12$$.$addLabel$($container$$182$$, $time_pos$$2$$ + 5, $label$$105$$, $maxLength$$3$$, $timeline$$12$$.$_seriesSize$ - 2, $DvtTimelineStyleUtils$$.$getSeriesAxisLabelStyle$($timeline$$12$$.$Options$), "o_label" + $currentPos$$2$$ + "_s0", $JSCompiler_alias_TRUE$$, $DvtTimelineStyleUtils$$.$getSeriesAxisLabelPadding$(), 
      $timeline$$12$$.$_majorAxisLabels$, $isRTL$$47$$)).time = $currentDate$$1_startDate$$1_startPos$$3$$.getTime();
      $currentDate$$1_startDate$$1_startPos$$3$$ = $nextDate$$1$$;
      $currentPos$$2$$ = $next_time_pos$$2$$
    }
  }
};
$DvtTimelineRenderer$$.$_renderOverview$ = function $$DvtTimelineRenderer$$$$_renderOverview$$($timeline$$13$$) {
  var $JSCompiler_temp_const$$5552_JSCompiler_temp_const$$5563_context$$403_sizing$$inline_5086$$ = $timeline$$13$$.$getCtx$(), $JSCompiler_inline_result$$5564_backgroundColor$$inline_5087_isRTL$$48_overviewMarkers$$inline_6743_xml$$inline_6731$$ = dvt.$Agent$.$isRightToLeft$($JSCompiler_temp_const$$5552_JSCompiler_temp_const$$5563_context$$403_sizing$$inline_5086$$);
  if($timeline$$13$$.$_overviewCanvas$ == $JSCompiler_alias_NULL$$) {
    var $addOverviewCanvas_labelStyle$$inline_5088_seriesCount$$inline_6744_start$$inline_6732$$ = $JSCompiler_alias_TRUE$$;
    $timeline$$13$$.$_overviewCanvas$ = new dvt.$Container$($JSCompiler_temp_const$$5552_JSCompiler_temp_const$$5563_context$$403_sizing$$inline_5086$$, "oCanvas")
  }else {
    $timeline$$13$$.$_overviewCanvas$.$removeChildren$()
  }
  var $borderWidth$$17_height$$114$$ = $timeline$$13$$.$_style$.$getBorderWidth$(), $end$$inline_6733_halfBorderWidth$$2_i$$inline_6745_windowBackgroundColor$$inline_5089$$ = $borderWidth$$17_height$$114$$ / 2;
  if($timeline$$13$$.$isVertical$()) {
    var $width$$134$$ = $timeline$$13$$.$_overviewSize$, $borderWidth$$17_height$$114$$ = $timeline$$13$$.$Height$ - $borderWidth$$17_height$$114$$;
    $JSCompiler_inline_result$$5564_backgroundColor$$inline_5087_isRTL$$48_overviewMarkers$$inline_6743_xml$$inline_6731$$ ? $timeline$$13$$.$_overviewCanvas$.$setTranslateX$($end$$inline_6733_halfBorderWidth$$2_i$$inline_6745_windowBackgroundColor$$inline_5089$$) : $timeline$$13$$.$_overviewCanvas$.$setTranslateX$($timeline$$13$$.$Width$ - $timeline$$13$$.$_overviewSize$ - $end$$inline_6733_halfBorderWidth$$2_i$$inline_6745_windowBackgroundColor$$inline_5089$$);
    $timeline$$13$$.$_overviewCanvas$.$setTranslateY$($end$$inline_6733_halfBorderWidth$$2_i$$inline_6745_windowBackgroundColor$$inline_5089$$)
  }else {
    $width$$134$$ = $timeline$$13$$.$Width$ - $borderWidth$$17_height$$114$$, $borderWidth$$17_height$$114$$ = $timeline$$13$$.$_overviewSize$, $timeline$$13$$.$_overviewCanvas$.$setTranslateY$($timeline$$13$$.$Height$ - $timeline$$13$$.$_overviewSize$ - $end$$inline_6733_halfBorderWidth$$2_i$$inline_6745_windowBackgroundColor$$inline_5089$$), $timeline$$13$$.$_overviewCanvas$.$setTranslateX$($end$$inline_6733_halfBorderWidth$$2_i$$inline_6745_windowBackgroundColor$$inline_5089$$)
  }
  $addOverviewCanvas_labelStyle$$inline_5088_seriesCount$$inline_6744_start$$inline_6732$$ && $timeline$$13$$.$addChild$($timeline$$13$$.$_overviewCanvas$);
  $timeline$$13$$.$_overview$ = new dvt.$TimelineOverview$($JSCompiler_temp_const$$5552_JSCompiler_temp_const$$5563_context$$403_sizing$$inline_5086$$, $timeline$$13$$.$HandleEvent$, $timeline$$13$$);
  $timeline$$13$$.$_overviewCanvas$.$addChild$($timeline$$13$$.$_overview$);
  var $JSCompiler_temp_const$$5552_JSCompiler_temp_const$$5563_context$$403_sizing$$inline_5086$$ = $timeline$$13$$.$_isVertical$ ? "" : '_ds\x3d"square" _dsx\x3d"1.3d" _dsy\x3d"0.9d" ', $JSCompiler_inline_result$$5564_backgroundColor$$inline_5087_isRTL$$48_overviewMarkers$$inline_6743_xml$$inline_6731$$ = $DvtTimelineStyleUtils$$.$getOverviewBackgroundColor$($timeline$$13$$.$Options$), $addOverviewCanvas_labelStyle$$inline_5088_seriesCount$$inline_6744_start$$inline_6732$$ = $DvtTimelineStyleUtils$$.$getOverviewLabelStyle$($timeline$$13$$.$Options$), 
  $end$$inline_6733_halfBorderWidth$$2_i$$inline_6745_windowBackgroundColor$$inline_5089$$ = $DvtTimelineStyleUtils$$.$getOverviewWindowBackgroundColor$($timeline$$13$$.$Options$), $items$$inline_6746_length$$inline_6734_windowBorderColor$$inline_5090$$ = $DvtTimelineStyleUtils$$.$getOverviewWindowBorderColor$($timeline$$13$$.$Options$), $currentDate$$inline_6736_j$$inline_6747_referenceObjectColor$$inline_5091_startDate$$inline_6735$$ = $DvtTimelineStyleUtils$$.$getReferenceObjectColor$($timeline$$13$$.$Options$), 
  $JSCompiler_temp_const$$5552_JSCompiler_temp_const$$5563_context$$403_sizing$$inline_5086$$ = '\x3ctimelineOverview renstart\x3d"' + $timeline$$13$$.$_viewStartTime$ + '" start\x3d"' + $timeline$$13$$.$_start$ + '" end\x3d"' + $timeline$$13$$.$_end$ + '" width\x3d"' + $timeline$$13$$.$_contentLength$ + '" orn\x3d"' + ($timeline$$13$$.$_isVertical$ ? "vertical" : "horizontal") + ($timeline$$13$$.$_referenceObjects$ && 0 < $timeline$$13$$.$_referenceObjects$.length && $timeline$$13$$.$_referenceObjects$[0] ? 
  '" ocd\x3d"' + $timeline$$13$$.$_referenceObjects$[0].getTime() : "") + '" _hbi\x3d"' + ($timeline$$13$$.$_isVertical$ ? $timeline$$13$$.$_resources$.overviewHandleVert + '" _hw\x3d"15" _hh\x3d"3"' : $timeline$$13$$.$_resources$.overviewHandleHor + '" _hw\x3d"3" _hh\x3d"15"') + ' ovp\x3d"below" selmode\x3d"' + $timeline$$13$$.$_selectionMode$ + '" rtl\x3d"' + $timeline$$13$$.$isRTL$() + '" sid\x3d"ts1" _bts\x3d"none" _btc\x3d"#4f4f4f" _fc\x3d"#aadd77" ' + $JSCompiler_temp_const$$5552_JSCompiler_temp_const$$5563_context$$403_sizing$$inline_5086$$ + 
  '_do\x3d"0" _wbc\x3d"' + $end$$inline_6733_halfBorderWidth$$2_i$$inline_6745_windowBackgroundColor$$inline_5089$$ + '" _wbts\x3d"solid" _wbrs\x3d"solid" _wbbs\x3d"solid" _wbls\x3d"solid" _wbtc\x3d"' + $items$$inline_6746_length$$inline_6734_windowBorderColor$$inline_5090$$ + '" _wbrc\x3d"' + $items$$inline_6746_length$$inline_6734_windowBorderColor$$inline_5090$$ + '" _wbbc\x3d"' + $items$$inline_6746_length$$inline_6734_windowBorderColor$$inline_5090$$ + '" _wblc\x3d"' + $items$$inline_6746_length$$inline_6734_windowBorderColor$$inline_5090$$ + 
  '" _hfc\x3d"' + $end$$inline_6733_halfBorderWidth$$2_i$$inline_6745_windowBackgroundColor$$inline_5089$$ + '" _obc\x3d"' + $JSCompiler_inline_result$$5564_backgroundColor$$inline_5087_isRTL$$48_overviewMarkers$$inline_6743_xml$$inline_6731$$ + '" _ctic\x3d"' + $currentDate$$inline_6736_j$$inline_6747_referenceObjectColor$$inline_5091_startDate$$inline_6735$$ + '" _ls\x3d"' + $addOverviewCanvas_labelStyle$$inline_5088_seriesCount$$inline_6744_start$$inline_6732$$ + '" _tic\x3d"#BCC7D2" _tabc\x3d"#D9DFE3" _tabo\x3d"0" _bs\x3d"solid" _bc\x3d"#648BAF" _bw\x3d"1px" _bof\x3d"0px" _dbs\x3d"solid" _dbc\x3d"#648BAF" _dbw\x3d"1px" _hbs\x3d"solid" _hbc\x3d"#85bbe7" _hbw\x3d"2px" _hbof\x3d"0px" _hgc\x3d"#ebeced" _hgo\x3d"1" _hdbs\x3d"solid" _hdbc\x3d"#85bbe7" _hdbw\x3d"2px" _sbs\x3d"solid" _sbc\x3d"#000000" _sbw\x3d"2px" _sbof\x3d"0px" _sbo\x3d"1" _sdbs\x3d"solid" _sdbc\x3d"#000000" _sdbw\x3d"2px" _asbs\x3d"solid" _asbc\x3d"#000000" _asbw\x3d"2px" _asbof\x3d"0px" _asbo\x3d"1" _asgc\x3d"#e4f0fa" _asgo\x3d"1" _asdbs\x3d"solid" _asdbc\x3d"#000000" _asdbw\x3d"2px" _aoc\x3d"off"\x3e', 
  $JSCompiler_inline_result$$5564_backgroundColor$$inline_5087_isRTL$$48_overviewMarkers$$inline_6743_xml$$inline_6731$$ = "\x3cticks\x3e";
  if($timeline$$13$$.$_seriesTimeAxis$) {
    for(var $addOverviewCanvas_labelStyle$$inline_5088_seriesCount$$inline_6744_start$$inline_6732$$ = $timeline$$13$$.$_start$, $end$$inline_6733_halfBorderWidth$$2_i$$inline_6745_windowBackgroundColor$$inline_5089$$ = $timeline$$13$$.$_end$, $items$$inline_6746_length$$inline_6734_windowBorderColor$$inline_5090$$ = $timeline$$13$$.$_isVertical$ ? $timeline$$13$$.$Height$ : $timeline$$13$$.$Width$, $currentDate$$inline_6736_j$$inline_6747_referenceObjectColor$$inline_5091_startDate$$inline_6735$$ = 
    $DvtTimeUtils$$.$getPositionDate$($addOverviewCanvas_labelStyle$$inline_5088_seriesCount$$inline_6744_start$$inline_6732$$, $end$$inline_6733_halfBorderWidth$$2_i$$inline_6745_windowBackgroundColor$$inline_5089$$, $timeline$$13$$.$_fetchStartPos$, $items$$inline_6746_length$$inline_6734_windowBorderColor$$inline_5090$$), $currentDate$$inline_6736_j$$inline_6747_referenceObjectColor$$inline_5091_startDate$$inline_6735$$ = $timeline$$13$$.$_seriesTimeAxis$.$adjustDate$($currentDate$$inline_6736_j$$inline_6747_referenceObjectColor$$inline_5091_startDate$$inline_6735$$), 
    $currentPos$$inline_6737_durationFillColor$$inline_6750_item$$inline_6748_label$$inline_6738$$ = $DvtTimeUtils$$.$getDatePosition$($addOverviewCanvas_labelStyle$$inline_5088_seriesCount$$inline_6744_start$$inline_6732$$, $end$$inline_6733_halfBorderWidth$$2_i$$inline_6745_windowBackgroundColor$$inline_5089$$, $currentDate$$inline_6736_j$$inline_6747_referenceObjectColor$$inline_5091_startDate$$inline_6735$$, $items$$inline_6746_length$$inline_6734_windowBorderColor$$inline_5090$$);$currentPos$$inline_6737_durationFillColor$$inline_6750_item$$inline_6748_label$$inline_6738$$ < 
    $timeline$$13$$.$_fetchEndPos$;) {
      var $currentPos$$inline_6737_durationFillColor$$inline_6750_item$$inline_6748_label$$inline_6738$$ = $JSCompiler_StaticMethods_formatDate$$($timeline$$13$$.$_seriesTimeAxis$, $currentDate$$inline_6736_j$$inline_6747_referenceObjectColor$$inline_5091_startDate$$inline_6735$$), $endTime$$inline_6749_nextDate$$inline_6739$$ = $timeline$$13$$.$_seriesTimeAxis$.$getNextDate$($currentDate$$inline_6736_j$$inline_6747_referenceObjectColor$$inline_5091_startDate$$inline_6735$$.getTime()), $next_time_pos$$inline_6740$$ = 
      $DvtTimeUtils$$.$getDatePosition$($addOverviewCanvas_labelStyle$$inline_5088_seriesCount$$inline_6744_start$$inline_6732$$, $end$$inline_6733_halfBorderWidth$$2_i$$inline_6745_windowBackgroundColor$$inline_5089$$, $endTime$$inline_6749_nextDate$$inline_6739$$, $items$$inline_6746_length$$inline_6734_windowBorderColor$$inline_5090$$), $JSCompiler_inline_result$$5564_backgroundColor$$inline_5087_isRTL$$48_overviewMarkers$$inline_6743_xml$$inline_6731$$ = $JSCompiler_inline_result$$5564_backgroundColor$$inline_5087_isRTL$$48_overviewMarkers$$inline_6743_xml$$inline_6731$$ + 
      ('\x3ctick time\x3d"' + $currentDate$$inline_6736_j$$inline_6747_referenceObjectColor$$inline_5091_startDate$$inline_6735$$.getTime() + '" label\x3d"' + $currentPos$$inline_6737_durationFillColor$$inline_6750_item$$inline_6748_label$$inline_6738$$ + '"/\x3e'), $currentDate$$inline_6736_j$$inline_6747_referenceObjectColor$$inline_5091_startDate$$inline_6735$$ = $endTime$$inline_6749_nextDate$$inline_6739$$, $currentPos$$inline_6737_durationFillColor$$inline_6750_item$$inline_6748_label$$inline_6738$$ = 
      $next_time_pos$$inline_6740$$
    }
  }
  $JSCompiler_temp_const$$5552_JSCompiler_temp_const$$5563_context$$403_sizing$$inline_5086$$ += $JSCompiler_inline_result$$5564_backgroundColor$$inline_5087_isRTL$$48_overviewMarkers$$inline_6743_xml$$inline_6731$$ + "\x3c/ticks\x3e";
  if($timeline$$13$$.$_series$) {
    $JSCompiler_inline_result$$5564_backgroundColor$$inline_5087_isRTL$$48_overviewMarkers$$inline_6743_xml$$inline_6731$$ = "\x3cmarkers\x3e";
    $addOverviewCanvas_labelStyle$$inline_5088_seriesCount$$inline_6744_start$$inline_6732$$ = $timeline$$13$$.$_series$.length;
    for($end$$inline_6733_halfBorderWidth$$2_i$$inline_6745_windowBackgroundColor$$inline_5089$$ = 0;$end$$inline_6733_halfBorderWidth$$2_i$$inline_6745_windowBackgroundColor$$inline_5089$$ < $addOverviewCanvas_labelStyle$$inline_5088_seriesCount$$inline_6744_start$$inline_6732$$;$end$$inline_6733_halfBorderWidth$$2_i$$inline_6745_windowBackgroundColor$$inline_5089$$++) {
      $items$$inline_6746_length$$inline_6734_windowBorderColor$$inline_5090$$ = $timeline$$13$$.$_series$[$end$$inline_6733_halfBorderWidth$$2_i$$inline_6745_windowBackgroundColor$$inline_5089$$].$_items$;
      for($currentDate$$inline_6736_j$$inline_6747_referenceObjectColor$$inline_5091_startDate$$inline_6735$$ = 0;$currentDate$$inline_6736_j$$inline_6747_referenceObjectColor$$inline_5091_startDate$$inline_6735$$ < $items$$inline_6746_length$$inline_6734_windowBorderColor$$inline_5090$$.length;$currentDate$$inline_6736_j$$inline_6747_referenceObjectColor$$inline_5091_startDate$$inline_6735$$++) {
        $currentPos$$inline_6737_durationFillColor$$inline_6750_item$$inline_6748_label$$inline_6738$$ = $items$$inline_6746_length$$inline_6734_windowBorderColor$$inline_5090$$[$currentDate$$inline_6736_j$$inline_6747_referenceObjectColor$$inline_5091_startDate$$inline_6735$$];
        $JSCompiler_inline_result$$5564_backgroundColor$$inline_5087_isRTL$$48_overviewMarkers$$inline_6743_xml$$inline_6731$$ += '\x3cti rk\x3d"' + $currentDate$$inline_6736_j$$inline_6747_referenceObjectColor$$inline_5091_startDate$$inline_6735$$;
        $JSCompiler_inline_result$$5564_backgroundColor$$inline_5087_isRTL$$48_overviewMarkers$$inline_6743_xml$$inline_6731$$ += '" tid\x3d"' + $currentPos$$inline_6737_durationFillColor$$inline_6750_item$$inline_6748_label$$inline_6738$$.getId();
        $JSCompiler_inline_result$$5564_backgroundColor$$inline_5087_isRTL$$48_overviewMarkers$$inline_6743_xml$$inline_6731$$ += '" t\x3d"' + $currentPos$$inline_6737_durationFillColor$$inline_6750_item$$inline_6748_label$$inline_6738$$.$_startTime$;
        if($endTime$$inline_6749_nextDate$$inline_6739$$ = $currentPos$$inline_6737_durationFillColor$$inline_6750_item$$inline_6748_label$$inline_6738$$.$_endTime$) {
          $JSCompiler_inline_result$$5564_backgroundColor$$inline_5087_isRTL$$48_overviewMarkers$$inline_6743_xml$$inline_6731$$ += '" et\x3d"' + $endTime$$inline_6749_nextDate$$inline_6739$$, ($currentPos$$inline_6737_durationFillColor$$inline_6750_item$$inline_6748_label$$inline_6738$$ = $currentPos$$inline_6737_durationFillColor$$inline_6750_item$$inline_6748_label$$inline_6738$$.$_durationFillColor$) && ($JSCompiler_inline_result$$5564_backgroundColor$$inline_5087_isRTL$$48_overviewMarkers$$inline_6743_xml$$inline_6731$$ += 
          '" dfc\x3d"' + $currentPos$$inline_6737_durationFillColor$$inline_6750_item$$inline_6748_label$$inline_6738$$)
        }
        $JSCompiler_inline_result$$5564_backgroundColor$$inline_5087_isRTL$$48_overviewMarkers$$inline_6743_xml$$inline_6731$$ += '" _sd\x3d"true"/\x3e'
      }
    }
    $JSCompiler_inline_result$$5564_backgroundColor$$inline_5087_isRTL$$48_overviewMarkers$$inline_6743_xml$$inline_6731$$ += "\x3c/markers\x3e"
  }else {
    $JSCompiler_inline_result$$5564_backgroundColor$$inline_5087_isRTL$$48_overviewMarkers$$inline_6743_xml$$inline_6731$$ = $JSCompiler_alias_VOID$$
  }
  $timeline$$13$$.$_overview$.$render$($JSCompiler_temp_const$$5552_JSCompiler_temp_const$$5563_context$$403_sizing$$inline_5086$$ + $JSCompiler_inline_result$$5564_backgroundColor$$inline_5087_isRTL$$48_overviewMarkers$$inline_6743_xml$$inline_6731$$ + "\x3c/timelineOverview\x3e", $width$$134$$, $borderWidth$$17_height$$114$$)
};
$DvtTimelineRenderer$$.$_renderScrollHotspots$ = function $$DvtTimelineRenderer$$$$_renderScrollHotspots$$($timeline$$14$$) {
  if($timeline$$14$$.$_series$) {
    var $context$$404$$ = $timeline$$14$$.$getCtx$(), $isRTL$$49$$ = dvt.$Agent$.$isRightToLeft$($context$$404$$), $seriesCount$$33$$ = $timeline$$14$$.$_series$.length, $axisSize$$6$$ = $JSCompiler_StaticMethods_getTimeAxisVisibleSize$$($timeline$$14$$, $seriesCount$$33$$);
    if($timeline$$14$$.$_scrollHotspotsContainers$) {
      for(var $i$$639$$ = 0;$i$$639$$ < $timeline$$14$$.$_scrollHotspotsContainers$.length;$i$$639$$++) {
        $timeline$$14$$.$_scrollHotspotsContainers$[$i$$639$$].$removeChildren$()
      }
    }else {
      var $addHotspotsContainers$$ = $JSCompiler_alias_TRUE$$;
      $timeline$$14$$.$_scrollHotspotsContainers$ = []
    }
    $timeline$$14$$.$_scrollHotspots$ = [];
    for(var $hotspotPadding$$ = $DvtTimelineStyleUtils$$.$getHotspotPadding$(), $hotspotWidth$$ = $DvtTimelineStyleUtils$$.$getHotspotWidth$(), $hotspotHeight$$ = $DvtTimelineStyleUtils$$.$getHotspotHeight$(), $hotspotArrowWidth$$ = $DvtTimelineStyleUtils$$.$getHotspotArrowWidth$(), $hotspotArrowHeight$$ = $DvtTimelineStyleUtils$$.$getHotspotArrowHeight$(), $hotspotBackgroundColor$$ = $DvtTimelineStyleUtils$$.$getHotspotBackgroundColor$(), $hotspotBorderRadius$$ = $DvtTimelineStyleUtils$$.$getHotspotBorderRadius$(), 
    $i$$639$$ = 0;$i$$639$$ < $seriesCount$$33$$;$i$$639$$++) {
      if($addHotspotsContainers$$) {
        var $scrollHotspots$$ = new dvt.$Container$($context$$404$$, "hotspots_s" + $i$$639$$);
        $timeline$$14$$.$addChild$($scrollHotspots$$);
        $timeline$$14$$.$_scrollHotspotsContainers$.push($scrollHotspots$$)
      }else {
        $scrollHotspots$$ = $timeline$$14$$.$_scrollHotspotsContainers$[$i$$639$$]
      }
      if($timeline$$14$$.$isVertical$()) {
        var $arrowBottomX_arrowForwardX_downArrow_key$$72_rightArrow$$ = $isRTL$$49$$ ? Math.abs($i$$639$$ - 1) : $i$$639$$, $bottomHotspot_bottomX_forwardX_rightHotspot$$ = $backX_leftHotspot_topHotspot_topX$$ = $timeline$$14$$.$_startX$ + $arrowBottomX_arrowForwardX_downArrow_key$$72_rightArrow$$ * ($timeline$$14$$.$_seriesSize$ + $axisSize$$6$$) + ($timeline$$14$$.$_seriesSize$ - $hotspotWidth$$) / 2, $backY_topY$$1$$ = $timeline$$14$$.$_startY$ + $hotspotPadding$$, $bottomY$$2_forwardY$$ = $timeline$$14$$.$_startY$ + 
        $timeline$$14$$.$_canvasLength$ - $hotspotHeight$$ - $hotspotPadding$$, $arrowBottomX_arrowForwardX_downArrow_key$$72_rightArrow$$ = $arrowBackX_arrowTopX_leftArrow_upArrow$$ = $backX_leftHotspot_topHotspot_topX$$ + $hotspotArrowWidth$$ / 2, $arrowBackY_arrowTopY$$ = $backY_topY$$1$$ + $hotspotArrowHeight$$ / 2, $arrowBottomY_arrowForwardY$$ = $bottomY$$2_forwardY$$ + $hotspotArrowHeight$$ / 2, $arrowBackResource_arrowTopResource$$ = $timeline$$14$$.$_resources$.scrollUp, $arrowBottomResource_arrowForwardResource$$ = 
        $timeline$$14$$.$_resources$.scrollDown
      }else {
        var $backX_leftHotspot_topHotspot_topX$$ = $timeline$$14$$.$_startX$ + $hotspotPadding$$, $bottomHotspot_bottomX_forwardX_rightHotspot$$ = $timeline$$14$$.$_startX$ + $timeline$$14$$.$_canvasLength$ - $hotspotWidth$$ - $hotspotPadding$$, $backY_topY$$1$$ = $timeline$$14$$.$_startY$ + $i$$639$$ * ($timeline$$14$$.$_seriesSize$ + $axisSize$$6$$) + ($timeline$$14$$.$_seriesSize$ - $hotspotHeight$$) / 2, $bottomY$$2_forwardY$$ = $backY_topY$$1$$, $arrowBackX_arrowTopX_leftArrow_upArrow$$ = $backX_leftHotspot_topHotspot_topX$$ + 
        $hotspotArrowWidth$$ / 2, $arrowBottomX_arrowForwardX_downArrow_key$$72_rightArrow$$ = $bottomHotspot_bottomX_forwardX_rightHotspot$$ + $hotspotArrowWidth$$ / 2, $arrowBackY_arrowTopY$$ = $backY_topY$$1$$ + $hotspotArrowHeight$$ / 2, $arrowBottomY_arrowForwardY$$ = $arrowBackY_arrowTopY$$, $arrowBackResource_arrowTopResource$$ = $timeline$$14$$.$_resources$.scrollLeft, $arrowBottomResource_arrowForwardResource$$ = $timeline$$14$$.$_resources$.scrollRight
      }
      $backX_leftHotspot_topHotspot_topX$$ = new dvt.$Rect$($context$$404$$, $backX_leftHotspot_topHotspot_topX$$, $backY_topY$$1$$, $hotspotWidth$$, $hotspotHeight$$, "lhs");
      $backX_leftHotspot_topHotspot_topX$$.$setSolidFill$($hotspotBackgroundColor$$, 1);
      $backX_leftHotspot_topHotspot_topX$$.$setCornerRadius$($hotspotBorderRadius$$);
      $backX_leftHotspot_topHotspot_topX$$.$hotspot$ = "left";
      $backX_leftHotspot_topHotspot_topX$$.$setAlpha$(0);
      $backX_leftHotspot_topHotspot_topX$$.$setMouseEnabled$($JSCompiler_alias_FALSE$$);
      $arrowBackX_arrowTopX_leftArrow_upArrow$$ = new dvt.$Image$($context$$404$$, $arrowBackResource_arrowTopResource$$, $arrowBackX_arrowTopX_leftArrow_upArrow$$, $arrowBackY_arrowTopY$$, $hotspotArrowWidth$$, $hotspotArrowHeight$$, "lhs_arr");
      $arrowBackX_arrowTopX_leftArrow_upArrow$$.$hotspot$ = "left";
      $backX_leftHotspot_topHotspot_topX$$.$addChild$($arrowBackX_arrowTopX_leftArrow_upArrow$$);
      $bottomHotspot_bottomX_forwardX_rightHotspot$$ = new dvt.$Rect$($context$$404$$, $bottomHotspot_bottomX_forwardX_rightHotspot$$, $bottomY$$2_forwardY$$, $hotspotWidth$$, $hotspotHeight$$, "rhs");
      $bottomHotspot_bottomX_forwardX_rightHotspot$$.$setSolidFill$($hotspotBackgroundColor$$, 1);
      $bottomHotspot_bottomX_forwardX_rightHotspot$$.$setCornerRadius$($hotspotBorderRadius$$);
      $bottomHotspot_bottomX_forwardX_rightHotspot$$.$hotspot$ = "right";
      $bottomHotspot_bottomX_forwardX_rightHotspot$$.$setAlpha$(0);
      $bottomHotspot_bottomX_forwardX_rightHotspot$$.$setMouseEnabled$($JSCompiler_alias_FALSE$$);
      $arrowBottomX_arrowForwardX_downArrow_key$$72_rightArrow$$ = new dvt.$Image$($context$$404$$, $arrowBottomResource_arrowForwardResource$$, $arrowBottomX_arrowForwardX_downArrow_key$$72_rightArrow$$, $arrowBottomY_arrowForwardY$$, $hotspotArrowWidth$$, $hotspotArrowHeight$$, "rhs_arr");
      $arrowBottomX_arrowForwardX_downArrow_key$$72_rightArrow$$.$hotspot$ = "right";
      $bottomHotspot_bottomX_forwardX_rightHotspot$$.$addChild$($arrowBottomX_arrowForwardX_downArrow_key$$72_rightArrow$$);
      $scrollHotspots$$.$addChild$($backX_leftHotspot_topHotspot_topX$$);
      $timeline$$14$$.$_scrollHotspots$.push($backX_leftHotspot_topHotspot_topX$$);
      $scrollHotspots$$.$addChild$($bottomHotspot_bottomX_forwardX_rightHotspot$$);
      $timeline$$14$$.$_scrollHotspots$.push($bottomHotspot_bottomX_forwardX_rightHotspot$$);
      $timeline$$14$$.$isVertical$() ? ($arrowBottomX_arrowForwardX_downArrow_key$$72_rightArrow$$ = $isRTL$$49$$ ? Math.abs($i$$639$$ - 1) : $i$$639$$, $backX_leftHotspot_topHotspot_topX$$ = $timeline$$14$$.$_startX$ + $arrowBottomX_arrowForwardX_downArrow_key$$72_rightArrow$$ * ($timeline$$14$$.$_seriesSize$ + $axisSize$$6$$) + $hotspotPadding$$, $bottomHotspot_bottomX_forwardX_rightHotspot$$ = $timeline$$14$$.$_startX$ + ($arrowBottomX_arrowForwardX_downArrow_key$$72_rightArrow$$ + 1) * $timeline$$14$$.$_seriesSize$ + 
      $arrowBottomX_arrowForwardX_downArrow_key$$72_rightArrow$$ * $axisSize$$6$$ - $hotspotWidth$$ - $hotspotPadding$$, $bottomY$$2_forwardY$$ = $backY_topY$$1$$ = $timeline$$14$$.$_startY$ + ($timeline$$14$$.$_canvasLength$ - $hotspotHeight$$) / 2, $arrowBackX_arrowTopX_leftArrow_upArrow$$ = $backX_leftHotspot_topHotspot_topX$$ + $hotspotArrowWidth$$ / 2, $arrowBottomX_arrowForwardX_downArrow_key$$72_rightArrow$$ = $bottomHotspot_bottomX_forwardX_rightHotspot$$ + $hotspotArrowWidth$$ / 2, $arrowBottomY_arrowForwardY$$ = 
      $arrowBackY_arrowTopY$$ = $backY_topY$$1$$ + $hotspotArrowHeight$$ / 2, $arrowBackResource_arrowTopResource$$ = $timeline$$14$$.$_resources$.scrollLeft, $arrowBottomResource_arrowForwardResource$$ = $timeline$$14$$.$_resources$.scrollRight) : ($bottomHotspot_bottomX_forwardX_rightHotspot$$ = $backX_leftHotspot_topHotspot_topX$$ = $timeline$$14$$.$_startX$ + ($timeline$$14$$.$_canvasLength$ - $hotspotWidth$$) / 2, $backY_topY$$1$$ = $timeline$$14$$.$_startY$ + $i$$639$$ * ($timeline$$14$$.$_seriesSize$ + 
      $axisSize$$6$$) + $hotspotPadding$$, $bottomY$$2_forwardY$$ = $timeline$$14$$.$_startY$ + ($i$$639$$ + 1) * $timeline$$14$$.$_seriesSize$ + $i$$639$$ * $axisSize$$6$$ - $hotspotHeight$$ - $hotspotPadding$$, $arrowBottomX_arrowForwardX_downArrow_key$$72_rightArrow$$ = $arrowBackX_arrowTopX_leftArrow_upArrow$$ = $backX_leftHotspot_topHotspot_topX$$ + $hotspotArrowWidth$$ / 2, $arrowBackY_arrowTopY$$ = $backY_topY$$1$$ + $hotspotArrowHeight$$ / 2, $arrowBottomY_arrowForwardY$$ = $bottomY$$2_forwardY$$ + 
      $hotspotArrowHeight$$ / 2, $arrowBackResource_arrowTopResource$$ = $timeline$$14$$.$_resources$.scrollUp, $arrowBottomResource_arrowForwardResource$$ = $timeline$$14$$.$_resources$.scrollDown);
      $backX_leftHotspot_topHotspot_topX$$ = new dvt.$Rect$($context$$404$$, $backX_leftHotspot_topHotspot_topX$$, $backY_topY$$1$$, $hotspotWidth$$, $hotspotHeight$$, "ths");
      $backX_leftHotspot_topHotspot_topX$$.$setSolidFill$($hotspotBackgroundColor$$, 1);
      $backX_leftHotspot_topHotspot_topX$$.$setCornerRadius$($hotspotBorderRadius$$);
      $backX_leftHotspot_topHotspot_topX$$.$hotspot$ = "top";
      $backX_leftHotspot_topHotspot_topX$$.$setAlpha$(0);
      $backX_leftHotspot_topHotspot_topX$$.$setMouseEnabled$($JSCompiler_alias_FALSE$$);
      $arrowBackX_arrowTopX_leftArrow_upArrow$$ = new dvt.$Image$($context$$404$$, $arrowBackResource_arrowTopResource$$, $arrowBackX_arrowTopX_leftArrow_upArrow$$, $arrowBackY_arrowTopY$$, $hotspotArrowWidth$$, $hotspotArrowHeight$$, "ths_arr");
      $arrowBackX_arrowTopX_leftArrow_upArrow$$.$hotspot$ = "top";
      $backX_leftHotspot_topHotspot_topX$$.$addChild$($arrowBackX_arrowTopX_leftArrow_upArrow$$);
      $bottomHotspot_bottomX_forwardX_rightHotspot$$ = new dvt.$Rect$($context$$404$$, $bottomHotspot_bottomX_forwardX_rightHotspot$$, $bottomY$$2_forwardY$$, $hotspotWidth$$, $hotspotHeight$$, "bhs");
      $bottomHotspot_bottomX_forwardX_rightHotspot$$.$setSolidFill$($hotspotBackgroundColor$$, 1);
      $bottomHotspot_bottomX_forwardX_rightHotspot$$.$setCornerRadius$($hotspotBorderRadius$$);
      $bottomHotspot_bottomX_forwardX_rightHotspot$$.$hotspot$ = "bottom";
      $bottomHotspot_bottomX_forwardX_rightHotspot$$.$setAlpha$(0);
      $bottomHotspot_bottomX_forwardX_rightHotspot$$.$setMouseEnabled$($JSCompiler_alias_FALSE$$);
      $arrowBottomX_arrowForwardX_downArrow_key$$72_rightArrow$$ = new dvt.$Image$($context$$404$$, $arrowBottomResource_arrowForwardResource$$, $arrowBottomX_arrowForwardX_downArrow_key$$72_rightArrow$$, $arrowBottomY_arrowForwardY$$, $hotspotArrowWidth$$, $hotspotArrowHeight$$, "bhs_arr");
      $arrowBottomX_arrowForwardX_downArrow_key$$72_rightArrow$$.$hotspot$ = "bottom";
      $bottomHotspot_bottomX_forwardX_rightHotspot$$.$addChild$($arrowBottomX_arrowForwardX_downArrow_key$$72_rightArrow$$);
      $scrollHotspots$$.$addChild$($backX_leftHotspot_topHotspot_topX$$);
      $timeline$$14$$.$_scrollHotspots$.push($backX_leftHotspot_topHotspot_topX$$);
      $scrollHotspots$$.$addChild$($bottomHotspot_bottomX_forwardX_rightHotspot$$);
      $timeline$$14$$.$_scrollHotspots$.push($bottomHotspot_bottomX_forwardX_rightHotspot$$)
    }
  }
};
$DvtTimelineRenderer$$.$_renderZoomControls$ = function $$DvtTimelineRenderer$$$$_renderZoomControls$$($timeline$$15$$) {
  var $contentLength_context$$405$$ = $timeline$$15$$.$getCtx$(), $isRTL$$50$$ = dvt.$Agent$.$isRightToLeft$($contentLength_context$$405$$), $upState$$17$$ = dvt.$TransientButton$.$getStateFromURL$($contentLength_context$$405$$, $timeline$$15$$.$_resources$.zoomIn), $overState$$14$$ = dvt.$TransientButton$.$getStateFromURL$($contentLength_context$$405$$, $timeline$$15$$.$_resources$.zoomIn_h), $downState$$14$$ = dvt.$TransientButton$.$getStateFromURL$($contentLength_context$$405$$, $timeline$$15$$.$_resources$.zoomIn_a), 
  $disabledState$$ = dvt.$TransientButton$.$getStateFromURL$($contentLength_context$$405$$, $timeline$$15$$.$_resources$.zoomIn_d);
  $timeline$$15$$.$zoomin$ == $JSCompiler_alias_NULL$$ ? ($timeline$$15$$.$zoomin$ = new dvt.$TransientButton$($contentLength_context$$405$$, $upState$$17$$, $overState$$14$$, $downState$$14$$, $disabledState$$, $timeline$$15$$.$EventManager$, $timeline$$15$$.$EventManager$.$HandleZoomInClick$), $timeline$$15$$.$EventManager$.$associate$($timeline$$15$$.$zoomin$, $timeline$$15$$.$zoomin$)) : ($timeline$$15$$.$zoomin$.$setUpState$($upState$$17$$), $timeline$$15$$.$zoomin$.$setOverState$($overState$$14$$), 
  $timeline$$15$$.$zoomin$.$setDownState$($downState$$14$$), $timeline$$15$$.$zoomin$.$setDisabledState$($disabledState$$));
  $upState$$17$$ = dvt.$TransientButton$.$getStateFromURL$($contentLength_context$$405$$, $timeline$$15$$.$_resources$.zoomOut);
  $overState$$14$$ = dvt.$TransientButton$.$getStateFromURL$($contentLength_context$$405$$, $timeline$$15$$.$_resources$.zoomOut_h);
  $downState$$14$$ = dvt.$TransientButton$.$getStateFromURL$($contentLength_context$$405$$, $timeline$$15$$.$_resources$.zoomOut_a);
  $disabledState$$ = dvt.$TransientButton$.$getStateFromURL$($contentLength_context$$405$$, $timeline$$15$$.$_resources$.zoomOut_d);
  $timeline$$15$$.$zoomout$ == $JSCompiler_alias_NULL$$ ? ($timeline$$15$$.$zoomout$ = new dvt.$TransientButton$($contentLength_context$$405$$, $upState$$17$$, $overState$$14$$, $downState$$14$$, $disabledState$$, $timeline$$15$$.$EventManager$, $timeline$$15$$.$EventManager$.$HandleZoomOutClick$), $timeline$$15$$.$EventManager$.$associate$($timeline$$15$$.$zoomout$, $timeline$$15$$.$zoomout$)) : ($timeline$$15$$.$zoomout$.$setUpState$($upState$$17$$), $timeline$$15$$.$zoomout$.$setOverState$($overState$$14$$), 
  $timeline$$15$$.$zoomout$.$setDownState$($downState$$14$$), $timeline$$15$$.$zoomout$.$setDisabledState$($disabledState$$));
  $timeline$$15$$.$zoomin$.$setTooltip$(dvt.$Bundle$.$getTranslatedString$(dvt.$Bundle$.$UTIL_PREFIX$, "ZOOM_IN", $JSCompiler_alias_NULL$$));
  $timeline$$15$$.$zoomout$.$setTooltip$(dvt.$Bundle$.$getTranslatedString$(dvt.$Bundle$.$UTIL_PREFIX$, "ZOOM_OUT", $JSCompiler_alias_NULL$$));
  $timeline$$15$$.$zoomin$.$hide$();
  $timeline$$15$$.$zoomout$.$hide$();
  $DvtTimeUtils$$.$supportsTouch$() && (dvt.$ToolkitUtils$.$setAttrNullNS$($timeline$$15$$.$zoomin$.$getElem$(), "role", "button"), dvt.$ToolkitUtils$.$setAttrNullNS$($timeline$$15$$.$zoomin$.$getElem$(), "aria-label", dvt.$Bundle$.$getTranslatedString$(dvt.$Bundle$.$UTIL_PREFIX$, "ZOOM_IN", $JSCompiler_alias_NULL$$)), dvt.$ToolkitUtils$.$setAttrNullNS$($timeline$$15$$.$zoomout$.$getElem$(), "role", "button"), dvt.$ToolkitUtils$.$setAttrNullNS$($timeline$$15$$.$zoomout$.$getElem$(), "aria-label", 
  dvt.$Bundle$.$getTranslatedString$(dvt.$Bundle$.$UTIL_PREFIX$, "ZOOM_OUT", $JSCompiler_alias_NULL$$)));
  $isRTL$$50$$ ? ($timeline$$15$$.$zoomin$.$setTranslateX$($timeline$$15$$.$_backgroundWidth$ - 44), $timeline$$15$$.$zoomout$.$setTranslateX$($timeline$$15$$.$_backgroundWidth$ - 44)) : ($timeline$$15$$.$zoomin$.$setTranslateX$($timeline$$15$$.$_startX$ + 11), $timeline$$15$$.$zoomout$.$setTranslateX$($timeline$$15$$.$_startX$ + 11));
  $timeline$$15$$.$zoomin$.$setTranslateY$($timeline$$15$$.$_startY$ + 11);
  $timeline$$15$$.$zoomout$.$setTranslateY$($timeline$$15$$.$_startY$ + 48);
  $timeline$$15$$.$zoomin$.getParent() != $timeline$$15$$.$_canvas$ && $timeline$$15$$.$_canvas$.$addChild$($timeline$$15$$.$zoomin$);
  $timeline$$15$$.$zoomout$.getParent() != $timeline$$15$$.$_canvas$ && $timeline$$15$$.$_canvas$.$addChild$($timeline$$15$$.$zoomout$);
  $contentLength_context$$405$$ = $timeline$$15$$.$_contentLength$;
  $contentLength_context$$405$$ >= $timeline$$15$$.$_maxContentLength$ && $JSCompiler_StaticMethods_disableZoomButton$$($timeline$$15$$, $JSCompiler_alias_TRUE$$);
  $timeline$$15$$.$_canvasLength$ >= $contentLength_context$$405$$ && $JSCompiler_StaticMethods_disableZoomButton$$($timeline$$15$$, $JSCompiler_alias_FALSE$$)
};
$DvtTimelineRenderer$$.$_renderEmptyText$ = function $$DvtTimelineRenderer$$$$_renderEmptyText$$($timeline$$16$$) {
  var $emptyTextStr$$4$$ = $timeline$$16$$.$Options$.series ? dvt.$Bundle$.$getTranslatedString$(dvt.$Bundle$.$UTIL_PREFIX$, "INVALID_DATA", $JSCompiler_alias_NULL$$) : dvt.$Bundle$.$getTranslatedString$(dvt.$Bundle$.$UTIL_PREFIX$, "NO_DATA", $JSCompiler_alias_NULL$$);
  $timeline$$16$$.$_canvas$ && $timeline$$16$$.$_canvas$.$removeChildren$();
  $JSCompiler_StaticMethods_clearOverview$$($timeline$$16$$);
  dvt.$TextUtils$.$renderEmptyText$($timeline$$16$$.$_canvas$, $emptyTextStr$$4$$, new dvt.$Rectangle$(0, 0, $timeline$$16$$.$_backgroundWidth$, $timeline$$16$$.$_backgroundHeight$), $timeline$$16$$.$EventManager$, $DvtTimelineStyleUtils$$.$getEmptyTextStyle$($timeline$$16$$.$Options$))
};
var $DvtTimelineStyleUtils$$ = {};
dvt.$Obj$.$createSubclass$($DvtTimelineStyleUtils$$, dvt.$Obj$, "DvtTimelineStyleUtils");
$DvtTimelineStyleUtils$$.$_DEFAULT_TIMELINE_STYLE$ = "border:1px #d9dfe3;background-color:#f9f9f9;";
$DvtTimelineStyleUtils$$.$_DEFAULT_AXIS_STYLE$ = "background-color:#f9f9f9;border:1px #d9dfe3;";
$DvtTimelineStyleUtils$$.$_DEFAULT_AXIS_SEPARATOR_STYLE$ = "color:#bcc7d2;";
$DvtTimelineStyleUtils$$.$_DEFAULT_SERIES_STYLE$ = "background-color:#f9f9f9;";
$DvtTimelineStyleUtils$$.$_DEFAULT_SERIES_LABEL_SPACING$ = 20;
$DvtTimelineStyleUtils$$.$_DEFAULT_SERIES_LABEL_PADDING$ = 2;
$DvtTimelineStyleUtils$$.$_DEFAULT_SERIES_AXIS_SEPARATOR_STYLE$ = "color:#bcc7d2";
$DvtTimelineStyleUtils$$.$_DEFAULT_SERIES_AXIS_LABEL_PADDING$ = 1;
$DvtTimelineStyleUtils$$.$_DEFAULT_OVERVIEW_WIDTH$ = 60;
$DvtTimelineStyleUtils$$.$_DEFAULT_OVERVIEW_HEIGHT$ = 100;
$DvtTimelineStyleUtils$$.$_DEFAULT_HOTSPOT_BACKGROUND_COLOR$ = "#000000";
$DvtTimelineStyleUtils$$.$_DEFAULT_HOTSPOT_BORDER_RADIUS$ = 2;
$DvtTimelineStyleUtils$$.$_DEFAULT_HOTSPOT_OPACITY$ = 0.6;
$DvtTimelineStyleUtils$$.$_DEFAULT_HOTSPOT_WIDTH$ = 28;
$DvtTimelineStyleUtils$$.$_DEFAULT_HOTSPOT_HEIGHT$ = 28;
$DvtTimelineStyleUtils$$.$_DEFAULT_HOTSPOT_PADDING$ = 3;
$DvtTimelineStyleUtils$$.$_DEFAULT_HOTSPOT_ARROW_WIDTH$ = 14;
$DvtTimelineStyleUtils$$.$_DEFAULT_HOTSPOT_ARROW_HEIGHT$ = 14;
$DvtTimelineStyleUtils$$.$_DEFAULT_HOTSPOT_ANIMATION_DURATION$ = 0.3;
$DvtTimelineStyleUtils$$.$_DEFAULT_ITEM_ENABLED_STROKE_WIDTH$ = 1;
$DvtTimelineStyleUtils$$.$_DEFAULT_ITEM_HOVER_STROKE_WIDTH$ = 2;
$DvtTimelineStyleUtils$$.$_DEFAULT_ITEM_SELECTED_STROKE_WIDTH$ = 2;
$DvtTimelineStyleUtils$$.$_DEFAULT_ITEM_INNER_FILL_COLOR$ = "rgba(249,249,249,0)";
$DvtTimelineStyleUtils$$.$_DEFAULT_ITEM_ACTIVE_INNER_STROKE_COLOR$ = "#e4f0fa";
$DvtTimelineStyleUtils$$.$_DEFAULT_ITEM_ENABLED_INNER_STROKE_COLOR$ = "rgba(249,249,249,0)";
$DvtTimelineStyleUtils$$.$_DEFAULT_ITEM_INNER_STROKE_WIDTH$ = 2;
$DvtTimelineStyleUtils$$.$_DEFAULT_BUBBLE_OFFSET$ = 20;
$DvtTimelineStyleUtils$$.$_DEFAULT_BUBBLE_SPACING$ = 15;
$DvtTimelineStyleUtils$$.$_DEFAULT_DURATION_FEELER_OFFSET$ = 10;
$DvtTimelineStyleUtils$$.$_DEFAULT_THUMBNAIL_WIDTH$ = 32;
$DvtTimelineStyleUtils$$.$_DEFAULT_THUMBNAIL_HEIGHT$ = 32;
$DvtTimelineStyleUtils$$.$getItemDescriptionStyle$ = function $$DvtTimelineStyleUtils$$$$getItemDescriptionStyle$$($cssStyle$$33_item$$56_style$$99$$) {
  var $descriptionStyle$$ = $cssStyle$$33_item$$56_style$$99$$.$_series$.$getOptions$().styleDefaults.item.descriptionStyle;
  if($cssStyle$$33_item$$56_style$$99$$ = $cssStyle$$33_item$$56_style$$99$$.$getStyle$()) {
    $cssStyle$$33_item$$56_style$$99$$ = new dvt.$CSSStyle$($cssStyle$$33_item$$56_style$$99$$), $descriptionStyle$$.$parseInlineStyle$($cssStyle$$33_item$$56_style$$99$$)
  }
  return $descriptionStyle$$
};
$DvtTimelineStyleUtils$$.$getItemTitleStyle$ = function $$DvtTimelineStyleUtils$$$$getItemTitleStyle$$($cssStyle$$34_item$$57_style$$100$$) {
  var $titleStyle$$3$$ = $cssStyle$$34_item$$57_style$$100$$.$_series$.$getOptions$().styleDefaults.item.titleStyle;
  if($cssStyle$$34_item$$57_style$$100$$ = $cssStyle$$34_item$$57_style$$100$$.$getStyle$()) {
    $cssStyle$$34_item$$57_style$$100$$ = new dvt.$CSSStyle$($cssStyle$$34_item$$57_style$$100$$), $titleStyle$$3$$.$parseInlineStyle$($cssStyle$$34_item$$57_style$$100$$)
  }
  return $titleStyle$$3$$
};
$DvtTimelineStyleUtils$$.$getReferenceObjectColor$ = function $$DvtTimelineStyleUtils$$$$getReferenceObjectColor$$($options$$271$$) {
  return $options$$271$$.styleDefaults.referenceObject.color
};
$DvtTimelineStyleUtils$$.$getSeriesLabelStyle$ = function $$DvtTimelineStyleUtils$$$$getSeriesLabelStyle$$($options$$272$$) {
  return $options$$272$$.styleDefaults.series.labelStyle
};
$DvtTimelineStyleUtils$$.$getSeriesLabelPadding$ = function $$DvtTimelineStyleUtils$$$$getSeriesLabelPadding$$() {
  return $DvtTimelineStyleUtils$$.$_DEFAULT_SERIES_LABEL_PADDING$
};
$DvtTimelineStyleUtils$$.$getSeriesLabelSpacing$ = function $$DvtTimelineStyleUtils$$$$getSeriesLabelSpacing$$() {
  return $DvtTimelineStyleUtils$$.$_DEFAULT_SERIES_LABEL_SPACING$
};
$DvtTimelineStyleUtils$$.$getEmptyTextStyle$ = function $$DvtTimelineStyleUtils$$$$getEmptyTextStyle$$($options$$273$$) {
  return $options$$273$$.styleDefaults.series.emptyTextStyle
};
$DvtTimelineStyleUtils$$.$getBubbleOffset$ = function $$DvtTimelineStyleUtils$$$$getBubbleOffset$$() {
  return $DvtTimelineStyleUtils$$.$_DEFAULT_BUBBLE_OFFSET$
};
$DvtTimelineStyleUtils$$.$getBubbleSpacing$ = function $$DvtTimelineStyleUtils$$$$getBubbleSpacing$$() {
  return $DvtTimelineStyleUtils$$.$_DEFAULT_BUBBLE_SPACING$
};
$DvtTimelineStyleUtils$$.$getItemFillColor$ = function $$DvtTimelineStyleUtils$$$$getItemFillColor$$($item$$58$$) {
  var $fillColor$$7_style$$101$$ = $item$$58$$.$getStyle$();
  return $fillColor$$7_style$$101$$ && ($fillColor$$7_style$$101$$ = (new dvt.$CSSStyle$($fillColor$$7_style$$101$$)).$getStyle$(dvt.$CSSStyle$.$BACKGROUND_COLOR$)) ? $fillColor$$7_style$$101$$ : $item$$58$$.$_series$.$getOptions$().styleDefaults.item.backgroundColor
};
$DvtTimelineStyleUtils$$.$getItemStrokeColor$ = function $$DvtTimelineStyleUtils$$$$getItemStrokeColor$$($item$$59$$) {
  var $strokeColor$$6_style$$102$$ = $item$$59$$.$getStyle$();
  return $strokeColor$$6_style$$102$$ && ($strokeColor$$6_style$$102$$ = (new dvt.$CSSStyle$($strokeColor$$6_style$$102$$)).$getStyle$(dvt.$CSSStyle$.$BORDER_COLOR$)) ? $strokeColor$$6_style$$102$$ : $item$$59$$.$_series$.$getOptions$().styleDefaults.item.borderColor
};
$DvtTimelineStyleUtils$$.$getItemStrokeWidth$ = function $$DvtTimelineStyleUtils$$$$getItemStrokeWidth$$() {
  return $DvtTimelineStyleUtils$$.$_DEFAULT_ITEM_ENABLED_STROKE_WIDTH$
};
$DvtTimelineStyleUtils$$.$getItemHoverFillColor$ = function $$DvtTimelineStyleUtils$$$$getItemHoverFillColor$$($item$$60$$) {
  var $hoverDefault$$ = $item$$60$$.$_series$.$getOptions$().styleDefaults.item.hoverBackgroundColor;
  return $hoverDefault$$ ? $hoverDefault$$ : $DvtTimelineStyleUtils$$.$getItemFillColor$($item$$60$$)
};
$DvtTimelineStyleUtils$$.$getItemHoverStrokeColor$ = function $$DvtTimelineStyleUtils$$$$getItemHoverStrokeColor$$($item$$61$$) {
  var $hoverDefault$$1$$ = $item$$61$$.$_series$.$getOptions$().styleDefaults.item.hoverBorderColor;
  return $hoverDefault$$1$$ ? $hoverDefault$$1$$ : $DvtTimelineStyleUtils$$.$getItemStrokeColor$($item$$61$$)
};
$DvtTimelineStyleUtils$$.$getItemHoverStrokeWidth$ = function $$DvtTimelineStyleUtils$$$$getItemHoverStrokeWidth$$() {
  return $DvtTimelineStyleUtils$$.$_DEFAULT_ITEM_HOVER_STROKE_WIDTH$
};
$DvtTimelineStyleUtils$$.$getItemSelectedFillColor$ = function $$DvtTimelineStyleUtils$$$$getItemSelectedFillColor$$($item$$62$$) {
  var $selectedDefault$$ = $item$$62$$.$_series$.$getOptions$().styleDefaults.item.selectedBackgroundColor;
  return $selectedDefault$$ ? $selectedDefault$$ : $DvtTimelineStyleUtils$$.$getItemFillColor$($item$$62$$)
};
$DvtTimelineStyleUtils$$.$getItemSelectedStrokeColor$ = function $$DvtTimelineStyleUtils$$$$getItemSelectedStrokeColor$$($item$$63$$) {
  var $selectedDefault$$1$$ = $item$$63$$.$_series$.$getOptions$().styleDefaults.item.selectedBorderColor;
  return $selectedDefault$$1$$ ? $selectedDefault$$1$$ : $DvtTimelineStyleUtils$$.$getItemStrokeColor$($item$$63$$)
};
$DvtTimelineStyleUtils$$.$getItemSelectedStrokeWidth$ = function $$DvtTimelineStyleUtils$$$$getItemSelectedStrokeWidth$$() {
  return $DvtTimelineStyleUtils$$.$_DEFAULT_ITEM_SELECTED_STROKE_WIDTH$
};
$DvtTimelineStyleUtils$$.$getSeriesStyle$ = function $$DvtTimelineStyleUtils$$$$getSeriesStyle$$() {
  return $DvtTimelineStyleUtils$$.$_DEFAULT_SERIES_STYLE$
};
$DvtTimelineStyleUtils$$.$getColorsArray$ = function $$DvtTimelineStyleUtils$$$$getColorsArray$$($options$$280$$) {
  return $options$$280$$.styleDefaults.series.colors
};
$DvtTimelineStyleUtils$$.$getDurationFeelerOffset$ = function $$DvtTimelineStyleUtils$$$$getDurationFeelerOffset$$() {
  return $DvtTimelineStyleUtils$$.$_DEFAULT_DURATION_FEELER_OFFSET$
};
$DvtTimelineStyleUtils$$.$getThumbnailWidth$ = function $$DvtTimelineStyleUtils$$$$getThumbnailWidth$$() {
  return $DvtTimelineStyleUtils$$.$_DEFAULT_THUMBNAIL_WIDTH$
};
$DvtTimelineStyleUtils$$.$getThumbnailHeight$ = function $$DvtTimelineStyleUtils$$$$getThumbnailHeight$$() {
  return $DvtTimelineStyleUtils$$.$_DEFAULT_THUMBNAIL_HEIGHT$
};
$DvtTimelineStyleUtils$$.$getSeriesAxisSeparatorStyle$ = function $$DvtTimelineStyleUtils$$$$getSeriesAxisSeparatorStyle$$() {
  return $DvtTimelineStyleUtils$$.$_DEFAULT_SERIES_AXIS_SEPARATOR_STYLE$
};
$DvtTimelineStyleUtils$$.$getItemInnerActiveStrokeColor$ = function $$DvtTimelineStyleUtils$$$$getItemInnerActiveStrokeColor$$() {
  return $DvtTimelineStyleUtils$$.$_DEFAULT_ITEM_ACTIVE_INNER_STROKE_COLOR$
};
$DvtTimelineStyleUtils$$.$getItemInnerFillColor$ = function $$DvtTimelineStyleUtils$$$$getItemInnerFillColor$$() {
  return $DvtTimelineStyleUtils$$.$_DEFAULT_ITEM_INNER_FILL_COLOR$
};
$DvtTimelineStyleUtils$$.$getItemInnerStrokeColor$ = function $$DvtTimelineStyleUtils$$$$getItemInnerStrokeColor$$() {
  return $DvtTimelineStyleUtils$$.$_DEFAULT_ITEM_ENABLED_INNER_STROKE_COLOR$
};
$DvtTimelineStyleUtils$$.$getItemInnerStrokeWidth$ = function $$DvtTimelineStyleUtils$$$$getItemInnerStrokeWidth$$() {
  return $DvtTimelineStyleUtils$$.$_DEFAULT_ITEM_INNER_STROKE_WIDTH$
};
$DvtTimelineStyleUtils$$.$getHotspotAnimationDuration$ = function $$DvtTimelineStyleUtils$$$$getHotspotAnimationDuration$$() {
  return $DvtTimelineStyleUtils$$.$_DEFAULT_HOTSPOT_ANIMATION_DURATION$
};
$DvtTimelineStyleUtils$$.$getHotspotOpacity$ = function $$DvtTimelineStyleUtils$$$$getHotspotOpacity$$() {
  return $DvtTimelineStyleUtils$$.$_DEFAULT_HOTSPOT_OPACITY$
};
$DvtTimelineStyleUtils$$.$getTimelineStyle$ = function $$DvtTimelineStyleUtils$$$$getTimelineStyle$$() {
  return $DvtTimelineStyleUtils$$.$_DEFAULT_TIMELINE_STYLE$
};
$DvtTimelineStyleUtils$$.$getOverviewWidth$ = function $$DvtTimelineStyleUtils$$$$getOverviewWidth$$() {
  return $DvtTimelineStyleUtils$$.$_DEFAULT_OVERVIEW_WIDTH$
};
$DvtTimelineStyleUtils$$.$getOverviewHeight$ = function $$DvtTimelineStyleUtils$$$$getOverviewHeight$$() {
  return $DvtTimelineStyleUtils$$.$_DEFAULT_OVERVIEW_HEIGHT$
};
$DvtTimelineStyleUtils$$.$getAxisStyle$ = function $$DvtTimelineStyleUtils$$$$getAxisStyle$$() {
  return $DvtTimelineStyleUtils$$.$_DEFAULT_AXIS_STYLE$
};
$DvtTimelineStyleUtils$$.$getAxisLabelStyle$ = function $$DvtTimelineStyleUtils$$$$getAxisLabelStyle$$($options$$281$$) {
  return $options$$281$$.styleDefaults.minorAxis.labelStyle
};
$DvtTimelineStyleUtils$$.$getOverviewWindowBackgroundColor$ = function $$DvtTimelineStyleUtils$$$$getOverviewWindowBackgroundColor$$($options$$282$$) {
  return $options$$282$$.styleDefaults.overview.window.backgroundColor
};
$DvtTimelineStyleUtils$$.$getOverviewWindowBorderColor$ = function $$DvtTimelineStyleUtils$$$$getOverviewWindowBorderColor$$($options$$283$$) {
  return $options$$283$$.styleDefaults.overview.window.borderColor
};
$DvtTimelineStyleUtils$$.$getOverviewBackgroundColor$ = function $$DvtTimelineStyleUtils$$$$getOverviewBackgroundColor$$($options$$284$$) {
  return $options$$284$$.styleDefaults.overview.backgroundColor
};
$DvtTimelineStyleUtils$$.$getOverviewLabelStyle$ = function $$DvtTimelineStyleUtils$$$$getOverviewLabelStyle$$($options$$285$$) {
  return $options$$285$$.styleDefaults.overview.labelStyle
};
$DvtTimelineStyleUtils$$.$getSeriesAxisLabelStyle$ = function $$DvtTimelineStyleUtils$$$$getSeriesAxisLabelStyle$$($options$$286$$) {
  return $options$$286$$.styleDefaults.majorAxis.labelStyle
};
$DvtTimelineStyleUtils$$.$getAxisSeparatorStyle$ = function $$DvtTimelineStyleUtils$$$$getAxisSeparatorStyle$$() {
  return $DvtTimelineStyleUtils$$.$_DEFAULT_AXIS_SEPARATOR_STYLE$
};
$DvtTimelineStyleUtils$$.$getSeriesAxisLabelPadding$ = function $$DvtTimelineStyleUtils$$$$getSeriesAxisLabelPadding$$() {
  return $DvtTimelineStyleUtils$$.$_DEFAULT_SERIES_AXIS_LABEL_PADDING$
};
$DvtTimelineStyleUtils$$.$getHotspotPadding$ = function $$DvtTimelineStyleUtils$$$$getHotspotPadding$$() {
  return $DvtTimelineStyleUtils$$.$_DEFAULT_HOTSPOT_PADDING$
};
$DvtTimelineStyleUtils$$.$getHotspotWidth$ = function $$DvtTimelineStyleUtils$$$$getHotspotWidth$$() {
  return $DvtTimelineStyleUtils$$.$_DEFAULT_HOTSPOT_WIDTH$
};
$DvtTimelineStyleUtils$$.$getHotspotHeight$ = function $$DvtTimelineStyleUtils$$$$getHotspotHeight$$() {
  return $DvtTimelineStyleUtils$$.$_DEFAULT_HOTSPOT_HEIGHT$
};
$DvtTimelineStyleUtils$$.$getHotspotArrowWidth$ = function $$DvtTimelineStyleUtils$$$$getHotspotArrowWidth$$() {
  return $DvtTimelineStyleUtils$$.$_DEFAULT_HOTSPOT_ARROW_WIDTH$
};
$DvtTimelineStyleUtils$$.$getHotspotArrowHeight$ = function $$DvtTimelineStyleUtils$$$$getHotspotArrowHeight$$() {
  return $DvtTimelineStyleUtils$$.$_DEFAULT_HOTSPOT_ARROW_HEIGHT$
};
$DvtTimelineStyleUtils$$.$getHotspotBackgroundColor$ = function $$DvtTimelineStyleUtils$$$$getHotspotBackgroundColor$$() {
  return $DvtTimelineStyleUtils$$.$_DEFAULT_HOTSPOT_BACKGROUND_COLOR$
};
$DvtTimelineStyleUtils$$.$getHotspotBorderRadius$ = function $$DvtTimelineStyleUtils$$$$getHotspotBorderRadius$$() {
  return $DvtTimelineStyleUtils$$.$_DEFAULT_HOTSPOT_BORDER_RADIUS$
};
$DvtTimelineStyleUtils$$.$getAnimationDuration$ = function $$DvtTimelineStyleUtils$$$$getAnimationDuration$$($options$$287$$) {
  return dvt.$StyleUtils$.$getTimeMilliseconds$($options$$287$$.styleDefaults.animationDuration) / 1E3
};
function $DvtTimelineSeries$$($context$$406$$, $callback$$129$$, $callbackObj$$93$$) {
  this.Init($context$$406$$, $callback$$129$$, $callbackObj$$93$$)
}
dvt.$Obj$.$createSubclass$($DvtTimelineSeries$$, $DvtTimeComponent$$, "DvtTimelineSeries");
$JSCompiler_prototypeAlias$$ = $DvtTimelineSeries$$.prototype;
$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($context$$407$$, $callback$$130$$, $callbackObj$$94$$) {
  $DvtTimelineSeries$$.$superclass$.Init.call(this, $context$$407$$, $callback$$130$$, $callbackObj$$94$$);
  this.$_blocks$ = [];
  this.$_renderedReferenceObjects$ = [];
  this.$_seriesTicksArray$ = [];
  this.$_itemListeners$ = []
};
$JSCompiler_prototypeAlias$$.$_onRmAnimationEnd$ = function $$JSCompiler_prototypeAlias$$$$_onRmAnimationEnd$$() {
  for(var $i$$640$$ = 0;$i$$640$$ < this.$_rmAnimationElems$.length;$i$$640$$++) {
    var $elem$$8$$ = this.$_rmAnimationElems$[$i$$640$$];
    $elem$$8$$.getParent().removeChild($elem$$8$$)
  }
  this.$_mvAnimator$ && this.$_hasMvAnimations$ ? (this.$_mvAnimator$.play(), dvt.$Playable$.$appendOnEnd$(this.$_mvAnimator$, this.$_onMvAnimationEnd$, this)) : this.$_onMvAnimationEnd$()
};
$JSCompiler_prototypeAlias$$.$_onMvAnimationEnd$ = function $$JSCompiler_prototypeAlias$$$$_onMvAnimationEnd$$() {
  if(this.$_frAnimationElems$ && 0 != this.$_frAnimationElems$.length) {
    var $fadeInAnimator$$1$$ = new dvt.$ParallelPlayable$(this.$getCtx$(), new dvt.$AnimFadeIn$(this.$getCtx$(), this.$_frAnimationElems$, $DvtTimelineStyleUtils$$.$getAnimationDuration$(this.$Options$), 0));
    $fadeInAnimator$$1$$.play();
    dvt.$Playable$.$appendOnEnd$($fadeInAnimator$$1$$, this.$_onAnimationEnd$, this)
  }else {
    this.$_onAnimationEnd$()
  }
};
$JSCompiler_prototypeAlias$$.$_onAnimationEnd$ = function $$JSCompiler_prototypeAlias$$$$_onAnimationEnd$$() {
  this.$_isAnimating$ = $JSCompiler_alias_FALSE$$;
  dvt.$Agent$.$isEnvironmentBrowser$() && $JSCompiler_StaticMethods_showThenHideHotspots$$(this.$_callbackObj$)
};
$JSCompiler_prototypeAlias$$.$render$ = function $$JSCompiler_prototypeAlias$$$$render$$($options$$288_orientation$$5_props$$7$$, $desc$$28_width$$135$$, $height$$115$$) {
  $options$$288_orientation$$5_props$$7$$ && this.$SetOptions$($options$$288_orientation$$5_props$$7$$);
  this.$_isInitialRender$ = this.$Width$ ? $JSCompiler_alias_FALSE$$ : $JSCompiler_alias_TRUE$$;
  this.$Width$ = $desc$$28_width$$135$$;
  this.$Height$ = $height$$115$$;
  ($options$$288_orientation$$5_props$$7$$ = this.$Options$.orientation) && $options$$288_orientation$$5_props$$7$$ == dvt.$Timeline$.$ORIENTATION_VERTICAL$ ? (this.$_allowUpdates$ = this.$_isVertical$ == $JSCompiler_alias_FALSE$$ ? $JSCompiler_alias_FALSE$$ : $JSCompiler_alias_TRUE$$, this.$_isVertical$ = $JSCompiler_alias_TRUE$$) : (this.$_allowUpdates$ = this.$_isVertical$ ? $JSCompiler_alias_FALSE$$ : $JSCompiler_alias_TRUE$$, this.$_isVertical$ = $JSCompiler_alias_FALSE$$);
  this.$Options$ && ($options$$288_orientation$$5_props$$7$$ = this.$Parse$(this.$Options$), this.$_applyParsedProperties$($options$$288_orientation$$5_props$$7$$));
  this.$_fetchStartPos$ = 0;
  this.$_isVertical$ ? (this.$_fetchEndPos$ = $height$$115$$, this.$_maxOverflowValue$ = $desc$$28_width$$135$$, this.$_length$ = $height$$115$$, this.$_size$ = $desc$$28_width$$135$$) : (this.$_fetchEndPos$ = $desc$$28_width$$135$$, this.$_maxOverflowValue$ = $height$$115$$, this.$_length$ = $desc$$28_width$$135$$, this.$_size$ = $height$$115$$);
  this.$_isInverted$ = this.$Options$.inverted;
  this.$_maxDurationSize$ = this.$_colorCount$ = 0;
  $DvtTimelineSeriesRenderer$$.$renderSeries$(this, $desc$$28_width$$135$$, $height$$115$$);
  $DvtTimeUtils$$.$supportsTouch$() && 0 < this.$_items$.length && this.$_setAriaProperty$("flowto", "_bt_" + this.$_items$[0].getId());
  if($desc$$28_width$$135$$ = this.$GetComponentDescription$()) {
    dvt.$ToolkitUtils$.$setAttrNullNS$(this.$getElem$(), "role", "group"), dvt.$ToolkitUtils$.$setAttrNullNS$(this.$getElem$(), "aria-label", dvt.$StringUtils$.$processAriaLabel$($desc$$28_width$$135$$))
  }
};
$JSCompiler_prototypeAlias$$.$GetComponentDescription$ = function $$JSCompiler_prototypeAlias$$$$GetComponentDescription$$() {
  var $seriesDescArray$$ = [dvt.$Bundle$.$getTranslatedString$(dvt.$Bundle$.$UTIL_PREFIX$, "TIMELINE_SERIES")];
  this.$_label$ ? $seriesDescArray$$.push(this.$_label$) : $seriesDescArray$$.push(this.$Options$.index + 1);
  return dvt.$Bundle$.$getTranslatedString$(dvt.$Bundle$.$UTIL_PREFIX$, "COLON_SEP_LIST", $seriesDescArray$$)
};
$JSCompiler_prototypeAlias$$.$applyStyleValues$ = function $$JSCompiler_prototypeAlias$$$$applyStyleValues$$() {
  this.$_style$ = new dvt.$CSSStyle$($DvtTimelineStyleUtils$$.$getSeriesStyle$());
  this.$_seriesStyleDefaults$ = this.$Options$.seriesStyleDefaults;
  this.$_axisStyleDefaults$ = this.$Options$.axisStyleDefaults;
  this.$_colors$ = $DvtTimelineStyleUtils$$.$getColorsArray$(this.$Options$);
  this.$_referenceObjects$ = this.$Options$.referenceObjects;
  if(this.$_seriesStyleDefaults$) {
    var $style$$103$$ = this.$_seriesStyleDefaults$.backgroundColor;
    $style$$103$$ && this.$_style$.$parseInlineStyle$("background-color:" + $style$$103$$ + ";")
  }
  dvt.$Timeline$.$superclass$.$applyStyleValues$.call(this)
};
$JSCompiler_prototypeAlias$$.$SetOptions$ = $JSCompiler_set$$("$Options$");
$JSCompiler_prototypeAlias$$.$Parse$ = function $$JSCompiler_prototypeAlias$$$$Parse$$($options$$290$$) {
  this.$_parser$ = new $DvtTimelineSeriesParser$$;
  return this.$_parser$.parse($options$$290$$, this.$_items$)
};
$JSCompiler_prototypeAlias$$.$_applyParsedProperties$ = function $$JSCompiler_prototypeAlias$$$$_applyParsedProperties$$($props$$8$$) {
  this.$_items$ && (this.$_oldItems$ = this.$_items$);
  this.$_isEmpty$ = (this.$_items$ = $props$$8$$.$items$) && 0 < this.$_items$.length ? $JSCompiler_alias_FALSE$$ : $JSCompiler_alias_TRUE$$;
  this.$_isIRAnimationEnabled$ = $props$$8$$.$isIRAnimationEnabled$;
  this.$_isDCAnimationEnabled$ = $props$$8$$.$isDCAnimationEnabled$;
  this.$_label$ = $props$$8$$.label;
  this.$_timeAxis$ = $props$$8$$.$timeAxis$;
  this.$_emptyText$ = $props$$8$$.$emptyText$;
  this.$_emptyText$ == $JSCompiler_alias_NULL$$ && (this.$_emptyText$ = dvt.$Bundle$.$getTranslatedString$(dvt.$Bundle$.$UTIL_PREFIX$, "NO_DATA", $JSCompiler_alias_NULL$$));
  this.$_isTopToBottom$ = $props$$8$$.$isTopToBottom$;
  this.$_isRandomItemLayout$ = $props$$8$$.$isRandomItemLayout$;
  $DvtTimelineSeries$$.$superclass$.$_applyParsedProperties$.call(this, $props$$8$$)
};
function $JSCompiler_StaticMethods_calculateSpacing$$($JSCompiler_StaticMethods_calculateSpacing$self$$, $item$$64_itemHeight$$3$$, $index$$195_top$$10$$) {
  if(!($JSCompiler_StaticMethods_calculateSpacing$self$$.$_layoutItems$ == $JSCompiler_alias_NULL$$ || 0 == $JSCompiler_StaticMethods_calculateSpacing$self$$.$_layoutItems$.length)) {
    var $maxOverflowValue$$ = $JSCompiler_StaticMethods_calculateSpacing$self$$.$_maxOverflowValue$, $x$$211$$ = $item$$64_itemHeight$$3$$.$_loc$, $bottom$$10_y$$183$$ = $item$$64_itemHeight$$3$$.$_spacing$;
    if($JSCompiler_StaticMethods_calculateSpacing$self$$.$_isRandomItemLayout$) {
      return $bottom$$10_y$$183$$ == $JSCompiler_alias_NULL$$ && ($item$$64_itemHeight$$3$$ = $item$$64_itemHeight$$3$$.getHeight(), $bottom$$10_y$$183$$ = $JSCompiler_StaticMethods_calculateSpacing$self$$.$_initialSpacing$, $index$$195_top$$10$$ = $JSCompiler_StaticMethods_calculateSpacing$self$$.$_maxOverflowValue$ - $item$$64_itemHeight$$3$$ - $bottom$$10_y$$183$$, 0 > $index$$195_top$$10$$ && ($index$$195_top$$10$$ = 0), $bottom$$10_y$$183$$ = Math.round(Math.random() * $index$$195_top$$10$$) + 
      $bottom$$10_y$$183$$, $JSCompiler_StaticMethods_calculateSpacing$self$$.$_maxOverflowValue$ < $bottom$$10_y$$183$$ + $item$$64_itemHeight$$3$$ && ($JSCompiler_StaticMethods_calculateSpacing$self$$.$_maxOverflowValue$ = $bottom$$10_y$$183$$ + $item$$64_itemHeight$$3$$ + $DvtTimelineStyleUtils$$.$getBubbleSpacing$())), $bottom$$10_y$$183$$
    }
    $bottom$$10_y$$183$$ == $JSCompiler_alias_NULL$$ && ($bottom$$10_y$$183$$ = $JSCompiler_StaticMethods_calculateSpacing$self$$.$_initialSpacing$);
    if($JSCompiler_StaticMethods_calculateSpacing$self$$.$_isVertical$) {
      for($i$$641$$ = 0;$i$$641$$ < $index$$195_top$$10$$;$i$$641$$++) {
        $currItem_curry$$ = $JSCompiler_StaticMethods_calculateSpacing$self$$.$_layoutItems$[$i$$641$$], $currWidth$$ = $currItem_curry$$.getWidth() + 10, $maxOverflowValue$$ < $bottom$$10_y$$183$$ + $currWidth$$ && ($maxOverflowValue$$ = $bottom$$10_y$$183$$ + $currWidth$$)
      }
    }else {
      for(var $hOffset$$2$$ = $DvtTimelineStyleUtils$$.$getBubbleSpacing$(), $i$$641$$ = 0;$i$$641$$ < $index$$195_top$$10$$;$i$$641$$++) {
        var $currItem_curry$$ = $JSCompiler_StaticMethods_calculateSpacing$self$$.$_layoutItems$[$i$$641$$], $currWidth$$ = $currItem_curry$$.getWidth() + 10, $currHeight$$ = $currItem_curry$$.getHeight();
        if($currItem_curry$$.$_loc$ != $JSCompiler_alias_NULL$$ && $currItem_curry$$ != $item$$64_itemHeight$$3$$) {
          var $currx$$ = $currItem_curry$$.$_loc$;
          $currx$$ == $JSCompiler_alias_NULL$$ && ($currx$$ = 0);
          $currItem_curry$$ = $currItem_curry$$.$_spacing$;
          $currItem_curry$$ == $JSCompiler_alias_NULL$$ && ($currItem_curry$$ = $JSCompiler_StaticMethods_calculateSpacing$self$$.$_initialSpacing$);
          $x$$211$$ >= $currx$$ && ($x$$211$$ <= $currx$$ + $currWidth$$ && $bottom$$10_y$$183$$ >= $currItem_curry$$ && $bottom$$10_y$$183$$ <= $currItem_curry$$ + $currHeight$$) && ($bottom$$10_y$$183$$ = $currItem_curry$$ + $currHeight$$ + $hOffset$$2$$, $item$$64_itemHeight$$3$$.$_spacing$ = $bottom$$10_y$$183$$, $bottom$$10_y$$183$$ = $JSCompiler_StaticMethods_calculateSpacing$$($JSCompiler_StaticMethods_calculateSpacing$self$$, $item$$64_itemHeight$$3$$, $index$$195_top$$10$$))
        }
        $maxOverflowValue$$ < $bottom$$10_y$$183$$ + $currHeight$$ && ($maxOverflowValue$$ = $bottom$$10_y$$183$$ + $currHeight$$)
      }
    }
    $maxOverflowValue$$ > $JSCompiler_StaticMethods_calculateSpacing$self$$.$_maxOverflowValue$ && ($JSCompiler_StaticMethods_calculateSpacing$self$$.$_maxOverflowValue$ = $maxOverflowValue$$ + $DvtTimelineStyleUtils$$.$getBubbleSpacing$());
    return $bottom$$10_y$$183$$
  }
}
function $JSCompiler_StaticMethods_calculateDurationSize$$($JSCompiler_StaticMethods_calculateDurationSize$self$$, $item$$65$$, $index$$196$$) {
  if(!($JSCompiler_StaticMethods_calculateDurationSize$self$$.$_items$ == $JSCompiler_alias_NULL$$ || 0 == $JSCompiler_StaticMethods_calculateDurationSize$self$$.$_items$.length)) {
    var $startTime$$8$$ = $item$$65$$.$_startTime$, $endTime$$9_y$$184$$ = $item$$65$$.$_endTime$;
    if($endTime$$9_y$$184$$ && $endTime$$9_y$$184$$ != $startTime$$8$$) {
      $endTime$$9_y$$184$$ = $item$$65$$.$_durationLevel$;
      $endTime$$9_y$$184$$ == $JSCompiler_alias_NULL$$ && ($endTime$$9_y$$184$$ = 1);
      for(var $i$$642$$ = 0;$i$$642$$ < $index$$196$$;$i$$642$$++) {
        var $currItem$$1_curry$$1$$ = $JSCompiler_StaticMethods_calculateDurationSize$self$$.$_items$[$i$$642$$];
        if($currItem$$1_curry$$1$$ != $item$$65$$) {
          var $currStartTime$$ = $currItem$$1_curry$$1$$.$_startTime$, $currEndTime$$ = $currItem$$1_curry$$1$$.$_endTime$;
          $currEndTime$$ && $currEndTime$$ != $currStartTime$$ && ($currItem$$1_curry$$1$$ = $currItem$$1_curry$$1$$.$_durationLevel$, $currItem$$1_curry$$1$$ == $JSCompiler_alias_NULL$$ && ($currItem$$1_curry$$1$$ = 1), $startTime$$8$$ >= $currStartTime$$ && ($startTime$$8$$ <= $currEndTime$$ && $endTime$$9_y$$184$$ == $currItem$$1_curry$$1$$) && ($endTime$$9_y$$184$$ = $currItem$$1_curry$$1$$ + 1, $item$$65$$.$_durationLevel$ = $endTime$$9_y$$184$$, $endTime$$9_y$$184$$ = $JSCompiler_StaticMethods_calculateDurationSize$$($JSCompiler_StaticMethods_calculateDurationSize$self$$, 
          $item$$65$$, $index$$196$$)))
        }
      }
      $endTime$$9_y$$184$$ > $JSCompiler_StaticMethods_calculateDurationSize$self$$.$_maxDurationSize$ && ($JSCompiler_StaticMethods_calculateDurationSize$self$$.$_maxDurationSize$ = $endTime$$9_y$$184$$);
      return $endTime$$9_y$$184$$
    }
  }
}
$JSCompiler_prototypeAlias$$.$prepareDurations$ = function $$JSCompiler_prototypeAlias$$$$prepareDurations$$() {
  for(var $i$$643$$ = 0;$i$$643$$ < this.$_items$.length;$i$$643$$++) {
    var $node$$299$$ = this.$_items$[$i$$643$$], $durationLevel$$inline_5104_startTime$$9$$ = $node$$299$$.$_startTime$, $endTime$$10$$ = $node$$299$$.$_endTime$;
    $endTime$$10$$ && $endTime$$10$$ != $durationLevel$$inline_5104_startTime$$9$$ && ($durationLevel$$inline_5104_startTime$$9$$ = $JSCompiler_StaticMethods_calculateDurationSize$$(this, $node$$299$$, this.$_items$.length), $node$$299$$.$_durationLevel$ = $durationLevel$$inline_5104_startTime$$9$$, $node$$299$$.$_durationSize$ = 22 + 10 * $node$$299$$.$_durationLevel$ - 5, $node$$299$$.$_durationFillColor$ == $JSCompiler_alias_NULL$$ && ($node$$299$$.$_durationFillColor$ = this.$_colors$[this.$_colorCount$], 
    this.$_colorCount$++, this.$_colorCount$ == this.$_colors$.length && (this.$_colorCount$ = 0)))
  }
};
$JSCompiler_prototypeAlias$$.$getLabel$ = $JSCompiler_get$$("$_label$");
$JSCompiler_prototypeAlias$$.$isTopToBottom$ = $JSCompiler_get$$("$_isTopToBottom$");
function $DvtTimelineSeriesItem$$($context$$409$$, $id$$204$$) {
  this.Init($context$$409$$, $id$$204$$)
}
dvt.$Obj$.$createSubclass$($DvtTimelineSeriesItem$$, dvt.$Container$, "DvtTimelineSeriesItem");
$JSCompiler_prototypeAlias$$ = $DvtTimelineSeriesItem$$.prototype;
$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($context$$410$$, $id$$205$$) {
  $DvtTimelineSeriesItem$$.$superclass$.Init.call(this, $context$$410$$, "g", $id$$205$$)
};
$JSCompiler_prototypeAlias$$.$setSelected$ = function $$JSCompiler_prototypeAlias$$$$setSelected$$($isSelected$$1$$) {
  this.$_isSelected$ != $isSelected$$1$$ && ((this.$_isSelected$ = $isSelected$$1$$) ? this.$_isShowingHoverEffect$ ? this.$applyState$("asel") : this.$applyState$("sel") : this.$applyState$("en"))
};
$JSCompiler_prototypeAlias$$.$showHoverEffect$ = function $$JSCompiler_prototypeAlias$$$$showHoverEffect$$($isFocused$$1$$) {
  this.$_isShowingHoverEffect$ || (this.$_isShowingHoverEffect$ = $JSCompiler_alias_TRUE$$, this.$_isSelected$ && $isFocused$$1$$ ? this.$applyState$("asel") : this.$_isSelected$ ? this.$applyState$("sel") : this.$applyState$("hl"))
};
$JSCompiler_prototypeAlias$$.$hideHoverEffect$ = function $$JSCompiler_prototypeAlias$$$$hideHoverEffect$$($isFocused$$2$$) {
  this.$_isSelected$ && $isFocused$$2$$ ? this.$applyState$("asel") : this.$_isSelected$ ? this.$applyState$("sel") : this.$applyState$("en");
  this.$_isShowingHoverEffect$ = $JSCompiler_alias_FALSE$$
};
$JSCompiler_prototypeAlias$$.$applyState$ = function $$JSCompiler_prototypeAlias$$$$applyState$$($bubbleFillColor_state$$97$$) {
  var $feeler$$1_item$$69$$ = this.$_node$, $duration$$34_itemElem$$ = $feeler$$1_item$$69$$.$_displayable$;
  if($duration$$34_itemElem$$ != $JSCompiler_alias_NULL$$) {
    var $bubble$$ = $duration$$34_itemElem$$.$getChildAt$(0), $bubbleInner$$ = $bubble$$.$getChildAt$(0), $duration$$34_itemElem$$ = $feeler$$1_item$$69$$.$_durationBar$;
    if("asel" == $bubbleFillColor_state$$97$$) {
      $bubbleFillColor_state$$97$$ = $DvtTimelineStyleUtils$$.$getItemSelectedFillColor$($feeler$$1_item$$69$$);
      var $bubbleStroke_bubbleStrokeColor$$ = $DvtTimelineStyleUtils$$.$getItemSelectedStrokeColor$($feeler$$1_item$$69$$), $bubbleStrokeWidth$$ = $DvtTimelineStyleUtils$$.$getItemSelectedStrokeWidth$(), $bubbleInnerStroke_bubbleInnerStrokeColor$$ = $DvtTimelineStyleUtils$$.$getItemInnerActiveStrokeColor$()
    }else {
      "sel" == $bubbleFillColor_state$$97$$ ? ($bubbleFillColor_state$$97$$ = $DvtTimelineStyleUtils$$.$getItemSelectedFillColor$($feeler$$1_item$$69$$), $bubbleStroke_bubbleStrokeColor$$ = $DvtTimelineStyleUtils$$.$getItemSelectedStrokeColor$($feeler$$1_item$$69$$), $bubbleStrokeWidth$$ = $DvtTimelineStyleUtils$$.$getItemSelectedStrokeWidth$(), $bubbleInnerStroke_bubbleInnerStrokeColor$$ = $DvtTimelineStyleUtils$$.$getItemInnerStrokeColor$()) : "hl" == $bubbleFillColor_state$$97$$ ? ($bubbleFillColor_state$$97$$ = 
      $DvtTimelineStyleUtils$$.$getItemHoverFillColor$($feeler$$1_item$$69$$), $bubbleStroke_bubbleStrokeColor$$ = $DvtTimelineStyleUtils$$.$getItemHoverStrokeColor$($feeler$$1_item$$69$$), $bubbleStrokeWidth$$ = $DvtTimelineStyleUtils$$.$getItemHoverStrokeWidth$(), $bubbleInnerStroke_bubbleInnerStrokeColor$$ = $DvtTimelineStyleUtils$$.$getItemInnerActiveStrokeColor$()) : ($bubbleFillColor_state$$97$$ = $DvtTimelineStyleUtils$$.$getItemFillColor$($feeler$$1_item$$69$$), $bubbleStroke_bubbleStrokeColor$$ = 
      $DvtTimelineStyleUtils$$.$getItemStrokeColor$($feeler$$1_item$$69$$), $bubbleStrokeWidth$$ = $DvtTimelineStyleUtils$$.$getItemStrokeWidth$(), $bubbleInnerStroke_bubbleInnerStrokeColor$$ = $DvtTimelineStyleUtils$$.$getItemInnerStrokeColor$())
    }
    var $bubbleInnerStrokeWidth$$ = $DvtTimelineStyleUtils$$.$getItemInnerStrokeWidth$(), $bubbleStroke_bubbleStrokeColor$$ = new dvt.$SolidStroke$($bubbleStroke_bubbleStrokeColor$$, 1, $bubbleStrokeWidth$$), $bubbleInnerStroke_bubbleInnerStrokeColor$$ = new dvt.$SolidStroke$($bubbleInnerStroke_bubbleInnerStrokeColor$$, 1, $bubbleInnerStrokeWidth$$);
    $bubble$$.$setSolidFill$($bubbleFillColor_state$$97$$);
    $bubble$$.$setStroke$($bubbleStroke_bubbleStrokeColor$$);
    $bubbleInner$$.$setStroke$($bubbleInnerStroke_bubbleInnerStrokeColor$$);
    ($feeler$$1_item$$69$$ = $feeler$$1_item$$69$$.$_feeler$) && $feeler$$1_item$$69$$.$setStroke$($bubbleStroke_bubbleStrokeColor$$);
    $duration$$34_itemElem$$ && $duration$$34_itemElem$$.$setStroke$($bubbleStroke_bubbleStrokeColor$$)
  }
};
var $DvtTimelineSeriesItemRenderer$$ = {};
dvt.$Obj$.$createSubclass$($DvtTimelineSeriesItemRenderer$$, dvt.$Obj$, "DvtTimelineSeriesItemRenderer");
$DvtTimelineSeriesItemRenderer$$.$renderItem$ = function $$DvtTimelineSeriesItemRenderer$$$$renderItem$$($item$$70$$, $series$$27$$, $container$$183$$, $overflowOffset$$, $frAnimationElems$$, $mvAnimator$$) {
  $item$$70$$.$_content$ ? ($DvtTimelineSeriesItemRenderer$$.$_renderBubble$($item$$70$$, $series$$27$$, $container$$183$$, $frAnimationElems$$), $DvtTimelineSeriesItemRenderer$$.$_displayBubble$($item$$70$$, $series$$27$$, $overflowOffset$$, $JSCompiler_alias_NULL$$)) : ($series$$27$$.$_hasMvAnimations$ = $JSCompiler_alias_TRUE$$, $DvtTimelineSeriesItemRenderer$$.$_displayBubble$($item$$70$$, $series$$27$$, $overflowOffset$$, $mvAnimator$$));
  $series$$27$$.$isVertical$() || ($item$$70$$.$_feeler$ && $series$$27$$.$_allowUpdates$ ? $DvtTimelineSeriesItemRenderer$$.$_updateFeeler$($item$$70$$, $series$$27$$, $overflowOffset$$, $mvAnimator$$) : $DvtTimelineSeriesItemRenderer$$.$_renderFeeler$($item$$70$$, $series$$27$$, $container$$183$$.$feelers$, $overflowOffset$$, $frAnimationElems$$))
};
$DvtTimelineSeriesItemRenderer$$.$initializeItem$ = function $$DvtTimelineSeriesItemRenderer$$$$initializeItem$$($item$$71$$, $series$$28$$) {
  $item$$71$$.$_displayable$ && $series$$28$$.$_allowUpdates$ ? $DvtTimelineSeriesItemRenderer$$.$_updateBubble$($item$$71$$, $series$$28$$) : $DvtTimelineSeriesItemRenderer$$.$_createBubble$($item$$71$$, $series$$28$$)
};
$DvtTimelineSeriesItemRenderer$$.$_createBubble$ = function $$DvtTimelineSeriesItemRenderer$$$$_createBubble$$($item$$72$$, $series$$29$$) {
  var $content$$8_spacing$$2$$ = $DvtTimelineSeriesItemRenderer$$.$_getBubbleContent$($item$$72$$, $series$$29$$);
  $series$$29$$.$addChild$($content$$8_spacing$$2$$);
  var $dim$$78$$ = $content$$8_spacing$$2$$.$getDimensions$();
  $series$$29$$.removeChild($content$$8_spacing$$2$$);
  $item$$72$$.$setWidth$($dim$$78$$.$w$ + 10);
  $item$$72$$.$setHeight$($dim$$78$$.$h$ + 10);
  $item$$72$$.$_content$ = $content$$8_spacing$$2$$;
  $content$$8_spacing$$2$$ = $JSCompiler_StaticMethods_calculateSpacing$$($series$$29$$, $item$$72$$, $series$$29$$.$_items$.length);
  $item$$72$$.$_spacing$ = $content$$8_spacing$$2$$
};
$DvtTimelineSeriesItemRenderer$$.$_renderBubble$ = function $$DvtTimelineSeriesItemRenderer$$$$_renderBubble$$($item$$73$$, $series$$30$$, $container$$184$$, $animationElems$$) {
  var $bubbleContainer_context$$411$$ = $series$$30$$.$getCtx$(), $bubbleArray_isRTL$$51$$ = dvt.$Agent$.$isRightToLeft$($bubbleContainer_context$$411$$), $id$$206$$ = $item$$73$$.getId(), $content$$9$$ = $item$$73$$.$_content$;
  $item$$73$$.$_content$ = $JSCompiler_alias_NULL$$;
  var $bubble$$1_nodeWidth$$4$$ = $item$$73$$.getWidth(), $innerBubbleArray_nodeHeight$$7$$ = $item$$73$$.getHeight(), $bubbleId_innerBubble$$ = "_bubble_" + $id$$206$$;
  if($series$$30$$.$isVertical$()) {
    var $offset$$34$$ = $innerBubbleArray_nodeHeight$$7$$ / 2, $startOffset$$3$$ = $offset$$34$$ - 6, $endOffset$$3$$ = $offset$$34$$ + 6;
    !$bubbleArray_isRTL$$51$$ && $series$$30$$.$_isInverted$ || $bubbleArray_isRTL$$51$$ && !$series$$30$$.$_isInverted$ ? ($bubbleArray_isRTL$$51$$ = [0, 0, 0, $startOffset$$3$$, -6, $offset$$34$$, 0, $endOffset$$3$$, 0, $innerBubbleArray_nodeHeight$$7$$, $bubble$$1_nodeWidth$$4$$, $innerBubbleArray_nodeHeight$$7$$, $bubble$$1_nodeWidth$$4$$, 0, 0, 0], $innerBubbleArray_nodeHeight$$7$$ = [2, 2, 2, $startOffset$$3$$, -4, $offset$$34$$, 2, $endOffset$$3$$, 2, $innerBubbleArray_nodeHeight$$7$$ - 2, 
    $bubble$$1_nodeWidth$$4$$ - 2, $innerBubbleArray_nodeHeight$$7$$ - 2, $bubble$$1_nodeWidth$$4$$ - 2, 2, 2, 2]) : ($bubbleArray_isRTL$$51$$ = [0, 0, 0, $innerBubbleArray_nodeHeight$$7$$, $bubble$$1_nodeWidth$$4$$, $innerBubbleArray_nodeHeight$$7$$, $bubble$$1_nodeWidth$$4$$, $endOffset$$3$$, $bubble$$1_nodeWidth$$4$$ + 6, $offset$$34$$, $bubble$$1_nodeWidth$$4$$, $startOffset$$3$$, $bubble$$1_nodeWidth$$4$$, 0, 0, 0], $innerBubbleArray_nodeHeight$$7$$ = [2, 2, 2, $innerBubbleArray_nodeHeight$$7$$ - 
    2, $bubble$$1_nodeWidth$$4$$ - 2, $innerBubbleArray_nodeHeight$$7$$ - 2, $bubble$$1_nodeWidth$$4$$ - 2, $endOffset$$3$$, $bubble$$1_nodeWidth$$4$$ + 4, $offset$$34$$, $bubble$$1_nodeWidth$$4$$ - 2, $startOffset$$3$$, $bubble$$1_nodeWidth$$4$$ - 2, 2, 2, 2])
  }else {
    $offset$$34$$ = $bubbleArray_isRTL$$51$$ ? $bubble$$1_nodeWidth$$4$$ - $DvtTimelineStyleUtils$$.$getBubbleOffset$() : $DvtTimelineStyleUtils$$.$getBubbleOffset$(), $startOffset$$3$$ = $offset$$34$$ - 6, $endOffset$$3$$ = $offset$$34$$ + 6, $series$$30$$.$_isInverted$ ? ($bubbleArray_isRTL$$51$$ = [0, 0, $startOffset$$3$$, 0, $offset$$34$$, -6, $endOffset$$3$$, 0, $bubble$$1_nodeWidth$$4$$, 0, $bubble$$1_nodeWidth$$4$$, $innerBubbleArray_nodeHeight$$7$$, 0, $innerBubbleArray_nodeHeight$$7$$, 0, 
    0], $innerBubbleArray_nodeHeight$$7$$ = [2, 2, $startOffset$$3$$, 2, $offset$$34$$, -4, $endOffset$$3$$, 2, $bubble$$1_nodeWidth$$4$$ - 2, 2, $bubble$$1_nodeWidth$$4$$ - 2, $innerBubbleArray_nodeHeight$$7$$ - 2, 2, $innerBubbleArray_nodeHeight$$7$$ - 2, 2, 2]) : ($bubbleArray_isRTL$$51$$ = [0, 0, 0, $innerBubbleArray_nodeHeight$$7$$, $startOffset$$3$$, $innerBubbleArray_nodeHeight$$7$$, $offset$$34$$, $innerBubbleArray_nodeHeight$$7$$ + 6, $endOffset$$3$$, $innerBubbleArray_nodeHeight$$7$$, $bubble$$1_nodeWidth$$4$$, 
    $innerBubbleArray_nodeHeight$$7$$, $bubble$$1_nodeWidth$$4$$, 0, 0, 0], $innerBubbleArray_nodeHeight$$7$$ = [2, 2, 2, $innerBubbleArray_nodeHeight$$7$$ - 2, $startOffset$$3$$, $innerBubbleArray_nodeHeight$$7$$ - 2, $offset$$34$$, $innerBubbleArray_nodeHeight$$7$$ + 4, $endOffset$$3$$, $innerBubbleArray_nodeHeight$$7$$ - 2, $bubble$$1_nodeWidth$$4$$ - 2, $innerBubbleArray_nodeHeight$$7$$ - 2, $bubble$$1_nodeWidth$$4$$ - 2, 2, 2, 2])
  }
  $bubble$$1_nodeWidth$$4$$ = new dvt.$Polygon$($bubbleContainer_context$$411$$, $bubbleArray_isRTL$$51$$, $bubbleId_innerBubble$$);
  $bubbleId_innerBubble$$ = new dvt.$Polygon$($bubbleContainer_context$$411$$, $innerBubbleArray_nodeHeight$$7$$, $bubbleId_innerBubble$$ + "_i");
  $bubbleId_innerBubble$$.$setSolidFill$($DvtTimelineStyleUtils$$.$getItemInnerFillColor$());
  $content$$9$$.$setTranslate$(5, 5);
  $bubble$$1_nodeWidth$$4$$.$addChild$($bubbleId_innerBubble$$);
  $bubble$$1_nodeWidth$$4$$.$addChild$($content$$9$$);
  $bubbleContainer_context$$411$$ = new $DvtTimelineSeriesItem$$($bubbleContainer_context$$411$$, "_bt_" + $id$$206$$);
  $animationElems$$ && ($bubbleContainer_context$$411$$.$setAlpha$(0), $animationElems$$.push($bubbleContainer_context$$411$$));
  $bubbleContainer_context$$411$$.$addChild$($bubble$$1_nodeWidth$$4$$);
  $DvtTimeUtils$$.$supportsTouch$() && dvt.$ToolkitUtils$.$setAttrNullNS$($bubbleContainer_context$$411$$.$_elem$, "id", $bubbleContainer_context$$411$$.$_id$);
  $bubbleContainer_context$$411$$.$_node$ = $item$$73$$;
  $item$$73$$.$_displayable$ = $bubbleContainer_context$$411$$;
  $bubbleContainer_context$$411$$.$applyState$("en");
  0 <= $item$$73$$.$_loc$ && $container$$184$$.$addChild$($bubbleContainer_context$$411$$);
  $bubbleContainer_context$$411$$.$setAriaRole$("group");
  $item$$73$$.$_updateAriaLabel$();
  $series$$30$$.$_callbackObj$.$EventManager$.$associate$($bubbleContainer_context$$411$$, $item$$73$$)
};
$DvtTimelineSeriesItemRenderer$$.$_displayBubble$ = function $$DvtTimelineSeriesItemRenderer$$$$_displayBubble$$($bubbleContainer$$1_item$$74$$, $series$$31$$, $overflowOffset$$1$$, $animator$$136$$) {
  var $isRTL$$52_transX$$6$$ = dvt.$Agent$.$isRightToLeft$($series$$31$$.$getCtx$()), $loc$$1$$ = $bubbleContainer$$1_item$$74$$.$_loc$, $nodeWidth$$5$$ = $bubbleContainer$$1_item$$74$$.getWidth(), $nodeHeight$$8_transY$$ = $bubbleContainer$$1_item$$74$$.getHeight(), $spacing$$3$$ = $bubbleContainer$$1_item$$74$$.$_spacing$;
  $bubbleContainer$$1_item$$74$$ = $bubbleContainer$$1_item$$74$$.$_displayable$;
  $series$$31$$.$isVertical$() ? ($nodeHeight$$8_transY$$ = $loc$$1$$ - $nodeHeight$$8_transY$$ / 2, $isRTL$$52_transX$$6$$ && $series$$31$$.$_isInverted$ || !$isRTL$$52_transX$$6$$ && !$series$$31$$.$_isInverted$ ? $isRTL$$52_transX$$6$$ = $series$$31$$.$_size$ - ($nodeWidth$$5$$ + $series$$31$$.$_initialSpacing$) + $overflowOffset$$1$$ : ($isRTL$$52_transX$$6$$ = $series$$31$$.$_initialSpacing$, $overflowOffset$$1$$ = 0)) : ($isRTL$$52_transX$$6$$ = $isRTL$$52_transX$$6$$ ? $series$$31$$.$_length$ - 
  $loc$$1$$ - $nodeWidth$$5$$ + $DvtTimelineStyleUtils$$.$getBubbleOffset$() : $loc$$1$$ - $DvtTimelineStyleUtils$$.$getBubbleOffset$(), $series$$31$$.$_isInverted$ ? ($nodeHeight$$8_transY$$ = $series$$31$$.$isTopToBottom$() ? $spacing$$3$$ : $series$$31$$.$Height$ - $spacing$$3$$ - $nodeHeight$$8_transY$$ + $overflowOffset$$1$$ + $series$$31$$.$_initialSpacing$ - $DvtTimelineStyleUtils$$.$getBubbleSpacing$(), $overflowOffset$$1$$ = 0) : $nodeHeight$$8_transY$$ = $series$$31$$.$isTopToBottom$() ? 
  $spacing$$3$$ - $series$$31$$.$_initialSpacing$ + $DvtTimelineStyleUtils$$.$getBubbleSpacing$() : $series$$31$$.$Height$ - $spacing$$3$$ - $nodeHeight$$8_transY$$ + $overflowOffset$$1$$);
  $animator$$136$$ ? ($series$$31$$.$isVertical$() ? $bubbleContainer$$1_item$$74$$.$setTranslateX$($bubbleContainer$$1_item$$74$$.$getTranslateX$() + $series$$31$$.$_canvasOffsetX$ + $overflowOffset$$1$$) : $bubbleContainer$$1_item$$74$$.$setTranslateY$($bubbleContainer$$1_item$$74$$.$getTranslateY$() + $series$$31$$.$_canvasOffsetY$ + $overflowOffset$$1$$), $animator$$136$$.$addProp$(dvt.$Animator$.$TYPE_NUMBER$, $bubbleContainer$$1_item$$74$$, $bubbleContainer$$1_item$$74$$.$getTranslateX$, $bubbleContainer$$1_item$$74$$.$setTranslateX$, 
  $isRTL$$52_transX$$6$$), $animator$$136$$.$addProp$(dvt.$Animator$.$TYPE_NUMBER$, $bubbleContainer$$1_item$$74$$, $bubbleContainer$$1_item$$74$$.$getTranslateY$, $bubbleContainer$$1_item$$74$$.$setTranslateY$, $nodeHeight$$8_transY$$)) : $bubbleContainer$$1_item$$74$$.$setTranslate$($isRTL$$52_transX$$6$$, $nodeHeight$$8_transY$$)
};
$DvtTimelineSeriesItemRenderer$$.$_getBubbleContent$ = function $$DvtTimelineSeriesItemRenderer$$$$_getBubbleContent$$($item$$75$$, $series$$32$$) {
  var $context$$413$$ = $series$$32$$.$getCtx$(), $isRTL$$53$$ = dvt.$Agent$.$isRightToLeft$($context$$413$$), $title$$21_width$$137$$ = $item$$75$$.$getTitle$(), $desc$$29_descText$$ = $item$$75$$.$_desc$, $thumbImage_thumbnail$$ = $item$$75$$.$_thumbnail$, $container$$185$$ = new dvt.$Container$($context$$413$$), $offsetX$$9$$ = 0, $offsetY$$6$$ = 0;
  if($isRTL$$53$$) {
    $title$$21_width$$137$$ && ($titleText$$ = new dvt.$OutputText$($context$$413$$, $title$$21_width$$137$$, 0, $offsetY$$6$$), $titleText$$.$setCSSStyle$($DvtTimelineStyleUtils$$.$getItemTitleStyle$($item$$75$$)), $offsetX$$9$$ = $titleText$$.$measureDimensions$().$w$ + 2, $offsetY$$6$$ = 15, $container$$185$$.$addChild$($titleText$$)), $desc$$29_descText$$ && ($desc$$29_descText$$ = new dvt.$OutputText$($context$$413$$, $desc$$29_descText$$, 0, $offsetY$$6$$), $desc$$29_descText$$.$setCSSStyle$($DvtTimelineStyleUtils$$.$getItemDescriptionStyle$($item$$75$$)), 
    $title$$21_width$$137$$ = $desc$$29_descText$$.$measureDimensions$().$w$ + 2, 0 != $offsetX$$9$$ && $title$$21_width$$137$$ != $offsetX$$9$$ ? $title$$21_width$$137$$ > $offsetX$$9$$ ? ($titleText$$.$setX$($title$$21_width$$137$$ - $offsetX$$9$$), $offsetX$$9$$ = $title$$21_width$$137$$) : $desc$$29_descText$$.$setX$($offsetX$$9$$ - $title$$21_width$$137$$) : $offsetX$$9$$ = $title$$21_width$$137$$, $container$$185$$.$addChild$($desc$$29_descText$$)), $thumbImage_thumbnail$$ && ($thumbImage_thumbnail$$ = 
    new dvt.$Image$($context$$413$$, $thumbImage_thumbnail$$, $offsetX$$9$$, 0, $DvtTimelineStyleUtils$$.$getThumbnailWidth$(), $DvtTimelineStyleUtils$$.$getThumbnailHeight$(), "_tn"), $thumbImage_thumbnail$$.$setMouseEnabled$($JSCompiler_alias_FALSE$$), $container$$185$$.$addChild$($thumbImage_thumbnail$$))
  }else {
    $thumbImage_thumbnail$$ && ($thumbImage_thumbnail$$ = new dvt.$Image$($context$$413$$, $thumbImage_thumbnail$$, 0, 0, $DvtTimelineStyleUtils$$.$getThumbnailWidth$(), $DvtTimelineStyleUtils$$.$getThumbnailHeight$(), "_tn"), $thumbImage_thumbnail$$.$setMouseEnabled$($JSCompiler_alias_FALSE$$), $container$$185$$.$addChild$($thumbImage_thumbnail$$), $offsetX$$9$$ = $DvtTimelineStyleUtils$$.$getThumbnailWidth$() + 2);
    if($title$$21_width$$137$$) {
      var $titleText$$ = new dvt.$OutputText$($context$$413$$, $title$$21_width$$137$$, $offsetX$$9$$, $offsetY$$6$$);
      $titleText$$.$setCSSStyle$($DvtTimelineStyleUtils$$.$getItemTitleStyle$($item$$75$$));
      $offsetY$$6$$ = 15;
      $container$$185$$.$addChild$($titleText$$)
    }
    $desc$$29_descText$$ && ($desc$$29_descText$$ = new dvt.$OutputText$($context$$413$$, $desc$$29_descText$$, $offsetX$$9$$, $offsetY$$6$$), $desc$$29_descText$$.$setCSSStyle$($DvtTimelineStyleUtils$$.$getItemDescriptionStyle$($item$$75$$)), $container$$185$$.$addChild$($desc$$29_descText$$))
  }
  return $container$$185$$
};
$DvtTimelineSeriesItemRenderer$$.$_updateBubble$ = function $$DvtTimelineSeriesItemRenderer$$$$_updateBubble$$($item$$76$$, $series$$33$$) {
  var $spacing$$4$$ = $JSCompiler_StaticMethods_calculateSpacing$$($series$$33$$, $item$$76$$, $series$$33$$.$_items$.length);
  $item$$76$$.$_spacing$ = $spacing$$4$$
};
$DvtTimelineSeriesItemRenderer$$.$_renderFeeler$ = function $$DvtTimelineSeriesItemRenderer$$$$_renderFeeler$$($item$$77$$, $feelerX$$1_series$$34$$, $container$$186_feelerWidth_stroke$$100$$, $feelerHeight_overflowOffset$$2$$, $animationElems$$1_feelerColor$$) {
  var $context$$414_feeler$$2$$ = $feelerX$$1_series$$34$$.$getCtx$(), $isRTL$$54$$ = dvt.$Agent$.$isRightToLeft$($context$$414_feeler$$2$$), $feelerId_id$$207$$ = $item$$77$$.getId(), $loc$$2$$ = $item$$77$$.$_loc$, $spacing$$5$$ = $item$$77$$.$_spacing$, $feelerId_id$$207$$ = "_feeler_" + $feelerId_id$$207$$;
  if($feelerX$$1_series$$34$$.$_isInverted$) {
    $feelerY$$ = $item$$77$$.$_durationSize$, $feelerHeight_overflowOffset$$2$$ = $feelerX$$1_series$$34$$.$isTopToBottom$() ? $spacing$$5$$ : $feelerX$$1_series$$34$$.$Height$ - $spacing$$5$$ - $item$$77$$.getHeight() + $feelerHeight_overflowOffset$$2$$ + $feelerX$$1_series$$34$$.$_initialSpacing$ - $DvtTimelineStyleUtils$$.$getBubbleSpacing$()
  }else {
    var $feelerY$$ = $feelerX$$1_series$$34$$.$Height$ + $feelerHeight_overflowOffset$$2$$ - $item$$77$$.$_durationSize$;
    $feelerHeight_overflowOffset$$2$$ = $feelerX$$1_series$$34$$.$isTopToBottom$() ? $spacing$$5$$ - $feelerX$$1_series$$34$$.$_initialSpacing$ + $DvtTimelineStyleUtils$$.$getBubbleSpacing$() + $item$$77$$.getHeight() : $feelerX$$1_series$$34$$.$Height$ - $spacing$$5$$ + $feelerHeight_overflowOffset$$2$$
  }
  $feelerX$$1_series$$34$$ = $isRTL$$54$$ ? $feelerX$$1_series$$34$$.$_length$ - $loc$$2$$ : $loc$$2$$;
  $context$$414_feeler$$2$$ = new dvt.$Line$($context$$414_feeler$$2$$, $feelerX$$1_series$$34$$, $feelerY$$, $feelerX$$1_series$$34$$, $feelerHeight_overflowOffset$$2$$, $feelerId_id$$207$$);
  $animationElems$$1_feelerColor$$ && ($context$$414_feeler$$2$$.$setAlpha$(0), $animationElems$$1_feelerColor$$.push($context$$414_feeler$$2$$));
  $container$$186_feelerWidth_stroke$$100$$.$addChild$($context$$414_feeler$$2$$);
  $container$$186_feelerWidth_stroke$$100$$ = $DvtTimelineStyleUtils$$.$getItemStrokeWidth$();
  $animationElems$$1_feelerColor$$ = $DvtTimelineStyleUtils$$.$getItemStrokeColor$($item$$77$$);
  $container$$186_feelerWidth_stroke$$100$$ = new dvt.$SolidStroke$($animationElems$$1_feelerColor$$, 1, $container$$186_feelerWidth_stroke$$100$$);
  $context$$414_feeler$$2$$.$setStroke$($container$$186_feelerWidth_stroke$$100$$);
  $context$$414_feeler$$2$$.$_node$ = $item$$77$$;
  $item$$77$$.$_feeler$ = $context$$414_feeler$$2$$
};
$DvtTimelineSeriesItemRenderer$$.$_updateFeeler$ = function $$DvtTimelineSeriesItemRenderer$$$$_updateFeeler$$($feelerX$$2_item$$78$$, $series$$35$$, $overflowOffset$$3$$, $animator$$137$$) {
  if($series$$35$$.$isVertical$()) {
    $feelerX$$2_item$$78$$.$_feeler$ = $JSCompiler_alias_NULL$$
  }else {
    var $isRTL$$55$$ = dvt.$Agent$.$isRightToLeft$($series$$35$$.$getCtx$()), $feeler$$3$$ = $feelerX$$2_item$$78$$.$_feeler$;
    if($series$$35$$.$_isInverted$) {
      $feelerY$$1$$ = $feelerX$$2_item$$78$$.$_durationSize$, $feelerHeight$$1$$ = $series$$35$$.$isTopToBottom$() ? $feelerX$$2_item$$78$$.$_spacing$ : $series$$35$$.$Height$ - $feelerX$$2_item$$78$$.$_spacing$ - $feelerX$$2_item$$78$$.getHeight() + $overflowOffset$$3$$ + $series$$35$$.$_initialSpacing$ - $DvtTimelineStyleUtils$$.$getBubbleSpacing$(), $overflowOffset$$3$$ = 0
    }else {
      var $feelerY$$1$$ = $series$$35$$.$Height$ + $overflowOffset$$3$$ - $feelerX$$2_item$$78$$.$_durationSize$, $feelerHeight$$1$$ = $series$$35$$.$isTopToBottom$() ? $feelerX$$2_item$$78$$.$_spacing$ - $series$$35$$.$_initialSpacing$ + $DvtTimelineStyleUtils$$.$getBubbleSpacing$() + $feelerX$$2_item$$78$$.getHeight() : $series$$35$$.$Height$ - $feelerX$$2_item$$78$$.$_spacing$ + $overflowOffset$$3$$
    }
    $feelerX$$2_item$$78$$ = $isRTL$$55$$ ? $series$$35$$.$_length$ - $feelerX$$2_item$$78$$.$_loc$ : $feelerX$$2_item$$78$$.$_loc$;
    $animator$$137$$ ? ($feeler$$3$$.$setY1$($feeler$$3$$.$getY1$() + $series$$35$$.$_canvasOffsetY$ + $overflowOffset$$3$$), $feeler$$3$$.$setY2$($feeler$$3$$.$getY2$() + $series$$35$$.$_canvasOffsetY$ + $overflowOffset$$3$$), $animator$$137$$.$addProp$(dvt.$Animator$.$TYPE_NUMBER$, $feeler$$3$$, $feeler$$3$$.$getX1$, $feeler$$3$$.$setX1$, $feelerX$$2_item$$78$$), $animator$$137$$.$addProp$(dvt.$Animator$.$TYPE_NUMBER$, $feeler$$3$$, $feeler$$3$$.$getY1$, $feeler$$3$$.$setY1$, $feelerY$$1$$), $animator$$137$$.$addProp$(dvt.$Animator$.$TYPE_NUMBER$, 
    $feeler$$3$$, $feeler$$3$$.$getX2$, $feeler$$3$$.$setX2$, $feelerX$$2_item$$78$$), $animator$$137$$.$addProp$(dvt.$Animator$.$TYPE_NUMBER$, $feeler$$3$$, $feeler$$3$$.$getY2$, $feeler$$3$$.$setY2$, $feelerHeight$$1$$)) : ($feeler$$3$$.$setX1$($feelerX$$2_item$$78$$), $feeler$$3$$.$setY1$($feelerY$$1$$), $feeler$$3$$.$setX2$($feelerX$$2_item$$78$$), $feeler$$3$$.$setY2$($feelerHeight$$1$$))
  }
};
$DvtTimelineSeriesItemRenderer$$.$renderDuration$ = function $$DvtTimelineSeriesItemRenderer$$$$renderDuration$$($item$$79$$, $series$$36$$, $container$$187$$, $overflowOffset$$4$$, $frAnimationElems$$1$$, $mvAnimator$$1$$) {
  $item$$79$$.$_durationBar$ ? $DvtTimelineSeriesItemRenderer$$.$_updateDuration$($item$$79$$, $series$$36$$, $overflowOffset$$4$$, $mvAnimator$$1$$) : $DvtTimelineSeriesItemRenderer$$.$_renderDuration$($item$$79$$, $series$$36$$, $container$$187$$, $overflowOffset$$4$$, $frAnimationElems$$1$$)
};
$DvtTimelineSeriesItemRenderer$$.$_renderDuration$ = function $$DvtTimelineSeriesItemRenderer$$$$_renderDuration$$($item$$80$$, $series$$37$$, $container$$188$$, $feelerStroke_feelerWidth$$1_overflowOffset$$5$$, $animationElems$$2_feelerColor$$1$$) {
  var $context$$416_duration$$35$$ = $series$$37$$.$getCtx$(), $isRTL$$56$$ = dvt.$Agent$.$isRightToLeft$($context$$416_duration$$35$$), $endLoc_endTime$$12_width$$138$$ = $item$$80$$.$_endTime$, $loc$$3_transX$$7$$ = $DvtTimeUtils$$.$getDatePosition$($series$$37$$.$_start$, $series$$37$$.$_end$, $item$$80$$.$_startTime$, $series$$37$$.$_length$), $durationId$$ = "_duration_" + $item$$80$$.getId(), $durationSize$$ = 22 + 10 * $item$$80$$.$_durationLevel$, $endLoc_endTime$$12_width$$138$$ = $DvtTimeUtils$$.$getDatePosition$($series$$37$$.$_start$, 
  $series$$37$$.$_end$, $endLoc_endTime$$12_width$$138$$, $series$$37$$.$_length$);
  $series$$37$$.$isVertical$() ? (!$isRTL$$56$$ && !$series$$37$$.$_isInverted$ || $isRTL$$56$$ && $series$$37$$.$_isInverted$ ? $context$$416_duration$$35$$ = new dvt.$Rect$($context$$416_duration$$35$$, $series$$37$$.$_size$ - $durationSize$$ + 5, $loc$$3_transX$$7$$, $durationSize$$, $endLoc_endTime$$12_width$$138$$ - $loc$$3_transX$$7$$, $durationId$$) : ($context$$416_duration$$35$$ = new dvt.$Rect$($context$$416_duration$$35$$, -5, $loc$$3_transX$$7$$, $durationSize$$, $endLoc_endTime$$12_width$$138$$ - 
  $loc$$3_transX$$7$$, $durationId$$), $feelerStroke_feelerWidth$$1_overflowOffset$$5$$ = 0), $context$$416_duration$$35$$.$setTranslateX$($feelerStroke_feelerWidth$$1_overflowOffset$$5$$), $context$$416_duration$$35$$.$setY$($loc$$3_transX$$7$$), $context$$416_duration$$35$$.$setWidth$($durationSize$$), $context$$416_duration$$35$$.$setHeight$($endLoc_endTime$$12_width$$138$$ - $loc$$3_transX$$7$$)) : ($endLoc_endTime$$12_width$$138$$ -= $loc$$3_transX$$7$$, $loc$$3_transX$$7$$ = $isRTL$$56$$ ? 
  $series$$37$$.$_length$ - $loc$$3_transX$$7$$ - $endLoc_endTime$$12_width$$138$$ : $loc$$3_transX$$7$$, $series$$37$$.$_isInverted$ ? ($context$$416_duration$$35$$ = new dvt.$Rect$($context$$416_duration$$35$$, $loc$$3_transX$$7$$, -5, $endLoc_endTime$$12_width$$138$$, $durationSize$$, $durationId$$), $context$$416_duration$$35$$.$setTranslateY$(0)) : ($context$$416_duration$$35$$ = new dvt.$Rect$($context$$416_duration$$35$$, $loc$$3_transX$$7$$, $series$$37$$.$_size$ - $durationSize$$ + 5, $endLoc_endTime$$12_width$$138$$, 
  $durationSize$$, $durationId$$), $context$$416_duration$$35$$.$setTranslateY$($feelerStroke_feelerWidth$$1_overflowOffset$$5$$)));
  $animationElems$$2_feelerColor$$1$$ && ($context$$416_duration$$35$$.$setAlpha$(0), $animationElems$$2_feelerColor$$1$$.push($context$$416_duration$$35$$));
  $context$$416_duration$$35$$.$setCornerRadius$(5);
  $context$$416_duration$$35$$.$setSolidFill$($item$$80$$.$_durationFillColor$);
  $feelerStroke_feelerWidth$$1_overflowOffset$$5$$ = $DvtTimelineStyleUtils$$.$getItemStrokeWidth$();
  $animationElems$$2_feelerColor$$1$$ = $DvtTimelineStyleUtils$$.$getItemStrokeColor$($item$$80$$);
  $feelerStroke_feelerWidth$$1_overflowOffset$$5$$ = new dvt.$SolidStroke$($animationElems$$2_feelerColor$$1$$, 1, $feelerStroke_feelerWidth$$1_overflowOffset$$5$$);
  $context$$416_duration$$35$$.$setStroke$($feelerStroke_feelerWidth$$1_overflowOffset$$5$$);
  $context$$416_duration$$35$$.$_node$ = $item$$80$$;
  $series$$37$$.$_callbackObj$.$EventManager$.$associate$($context$$416_duration$$35$$, $item$$80$$);
  $container$$188$$.$addChild$($context$$416_duration$$35$$);
  $item$$80$$.$_durationBar$ = $context$$416_duration$$35$$
};
$DvtTimelineSeriesItemRenderer$$.$_updateDuration$ = function $$DvtTimelineSeriesItemRenderer$$$$_updateDuration$$($durationTransY_item$$81$$, $series$$38$$, $overflowOffset$$6$$, $animator$$138$$) {
  var $durationX_isRTL$$57$$ = dvt.$Agent$.$isRightToLeft$($series$$38$$.$getCtx$()), $duration$$36$$ = $durationTransY_item$$81$$.$_durationBar$;
  if($duration$$36$$ != $JSCompiler_alias_NULL$$) {
    var $durationHeight_loc$$4$$ = $DvtTimeUtils$$.$getDatePosition$($series$$38$$.$_start$, $series$$38$$.$_end$, $durationTransY_item$$81$$.$_startTime$, $series$$38$$.$_length$), $durationSize$$1$$ = 22 + 10 * $durationTransY_item$$81$$.$_durationLevel$, $endLoc$$1_width$$139$$ = $DvtTimeUtils$$.$getDatePosition$($series$$38$$.$_start$, $series$$38$$.$_end$, $durationTransY_item$$81$$.$_endTime$, $series$$38$$.$_length$);
    if($series$$38$$.$isVertical$()) {
      $durationTransY_item$$81$$ = 0;
      !$durationX_isRTL$$57$$ && !$series$$38$$.$_isInverted$ || $durationX_isRTL$$57$$ && $series$$38$$.$_isInverted$ ? $durationX_isRTL$$57$$ = $series$$38$$.$_size$ - $durationSize$$1$$ + 5 : ($durationX_isRTL$$57$$ = -5, $overflowOffset$$6$$ = 0);
      var $durationTransX$$ = $overflowOffset$$6$$, $durationY$$ = $durationHeight_loc$$4$$, $durationWidth$$ = $durationSize$$1$$, $durationHeight_loc$$4$$ = $endLoc$$1_width$$139$$ - $durationHeight_loc$$4$$
    }else {
      $durationTransX$$ = 0, $endLoc$$1_width$$139$$ -= $durationHeight_loc$$4$$, $durationX_isRTL$$57$$ = $durationX_isRTL$$57$$ ? $series$$38$$.$_length$ - $durationHeight_loc$$4$$ - $endLoc$$1_width$$139$$ : $durationHeight_loc$$4$$, $series$$38$$.$_isInverted$ ? ($durationTransY_item$$81$$ = $overflowOffset$$6$$ = 0, $durationY$$ = -5) : ($durationTransY_item$$81$$ = $overflowOffset$$6$$, $durationY$$ = $series$$38$$.$_size$ - $durationSize$$1$$ + 5), $durationWidth$$ = $endLoc$$1_width$$139$$, 
      $durationHeight_loc$$4$$ = $durationSize$$1$$
    }
    $animator$$138$$ ? ($series$$38$$.$isVertical$() ? $duration$$36$$.$setTranslateX$($duration$$36$$.$getTranslateX$() + $series$$38$$.$_canvasOffsetX$ + $overflowOffset$$6$$) : $duration$$36$$.$setTranslateY$($duration$$36$$.$getTranslateY$() + $series$$38$$.$_canvasOffsetY$ + $overflowOffset$$6$$), $animator$$138$$.$addProp$(dvt.$Animator$.$TYPE_NUMBER$, $duration$$36$$, $duration$$36$$.$getTranslateX$, $duration$$36$$.$setTranslateX$, $durationTransX$$), $animator$$138$$.$addProp$(dvt.$Animator$.$TYPE_NUMBER$, 
    $duration$$36$$, $duration$$36$$.$getTranslateY$, $duration$$36$$.$setTranslateY$, $durationTransY_item$$81$$), $animator$$138$$.$addProp$(dvt.$Animator$.$TYPE_NUMBER$, $duration$$36$$, $duration$$36$$.$getX$, $duration$$36$$.$setX$, $durationX_isRTL$$57$$), $animator$$138$$.$addProp$(dvt.$Animator$.$TYPE_NUMBER$, $duration$$36$$, $duration$$36$$.$getY$, $duration$$36$$.$setY$, $durationY$$), $animator$$138$$.$addProp$(dvt.$Animator$.$TYPE_NUMBER$, $duration$$36$$, $duration$$36$$.getWidth, $duration$$36$$.$setWidth$, 
    $durationWidth$$), $animator$$138$$.$addProp$(dvt.$Animator$.$TYPE_NUMBER$, $duration$$36$$, $duration$$36$$.getHeight, $duration$$36$$.$setHeight$, $durationHeight_loc$$4$$)) : ($duration$$36$$.$setTranslateX$($durationTransX$$), $duration$$36$$.$setTranslateY$($durationTransY_item$$81$$), $duration$$36$$.$setX$($durationX_isRTL$$57$$), $duration$$36$$.$setY$($durationY$$), $duration$$36$$.$setWidth$($durationWidth$$), $duration$$36$$.$setHeight$($durationHeight_loc$$4$$))
  }
};
function $DvtTimelineSeriesNode$$($timeline$$17$$, $series$$39$$, $props$$9$$) {
  this.Init($timeline$$17$$, $series$$39$$, $props$$9$$)
}
dvt.$Obj$.$createSubclass$($DvtTimelineSeriesNode$$, dvt.$Obj$, "DvtTimelineSeriesNode");
$JSCompiler_prototypeAlias$$ = $DvtTimelineSeriesNode$$.prototype;
$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($timeline$$18$$, $seriesIndex$$125$$, $props$$10$$) {
  this.$_timeline$ = $timeline$$18$$;
  this.$_seriesIndex$ = $seriesIndex$$125$$;
  this.$_series$ = $timeline$$18$$.$_series$[$seriesIndex$$125$$];
  this.$_id$ = $props$$10$$.id;
  this.$_rowKey$ = $props$$10$$.$rowKey$;
  this.$_startTime$ = parseInt($props$$10$$.startTime);
  $props$$10$$.$endTime$ && (this.$_endTime$ = parseInt($props$$10$$.$endTime$));
  this.$_title$ = $props$$10$$.title;
  this.$_desc$ = $props$$10$$.$desc$;
  this.$_thumbnail$ = $props$$10$$.$thumbnail$;
  this.$_style$ = $props$$10$$.style;
  this.$_data$ = $props$$10$$.data;
  this.$_action$ = $props$$10$$.action;
  this.$_durationFillColor$ = $props$$10$$.$durationFillColor$;
  this.$_durationSize$ = 0
};
$JSCompiler_prototypeAlias$$.getId = $JSCompiler_get$$("$_id$");
$JSCompiler_prototypeAlias$$.$getSeries$ = $JSCompiler_get$$("$_series$");
$JSCompiler_prototypeAlias$$.$getSeriesIndex$ = $JSCompiler_get$$("$_seriesIndex$");
$JSCompiler_prototypeAlias$$.$getRowKey$ = $JSCompiler_get$$("$_rowKey$");
$JSCompiler_prototypeAlias$$.$getTitle$ = $JSCompiler_get$$("$_title$");
$JSCompiler_prototypeAlias$$.$getStyle$ = $JSCompiler_get$$("$_style$");
$JSCompiler_prototypeAlias$$.getData = $JSCompiler_get$$("$_data$");
$JSCompiler_prototypeAlias$$.$getLabel$ = function $$JSCompiler_prototypeAlias$$$$getLabel$$() {
  return this.$_endTime$ != $JSCompiler_alias_NULL$$ ? "Start Time: " + (new Date(this.$_startTime$)).toLocaleString() + "; End Time: " + (new Date(this.$_endTime$)).toLocaleString() + "; Title: " + this.$getTitle$() + "; Description: " + this.$_desc$ : "Time: " + (new Date(this.$_startTime$)).toLocaleString() + "; Title: " + this.$getTitle$() + "; Description: " + this.$_desc$
};
$JSCompiler_prototypeAlias$$.getWidth = $JSCompiler_get$$("$_w$");
$JSCompiler_prototypeAlias$$.$setWidth$ = $JSCompiler_set$$("$_w$");
$JSCompiler_prototypeAlias$$.getHeight = $JSCompiler_get$$("$_h$");
$JSCompiler_prototypeAlias$$.$setHeight$ = $JSCompiler_set$$("$_h$");
$JSCompiler_prototypeAlias$$.$getAction$ = $JSCompiler_get$$("$_action$");
$JSCompiler_prototypeAlias$$.$getNextNavigable$ = function $$JSCompiler_prototypeAlias$$$$getNextNavigable$$($event$$544$$) {
  var $keyboardHandler$$9_navigableItems$$7$$ = this.$_timeline$.$EventManager$.$KeyboardHandler$;
  if($event$$544$$.type == dvt.$MouseEvent$.$CLICK$ || $keyboardHandler$$9_navigableItems$$7$$.$isMultiSelectEvent$($event$$544$$)) {
    return this
  }
  if($keyboardHandler$$9_navigableItems$$7$$.$isNavigationEvent$($event$$544$$)) {
    for(var $keyboardHandler$$9_navigableItems$$7$$ = [], $i$$646$$ = 0;$i$$646$$ < this.$_timeline$.$_series$.length;$i$$646$$++) {
      $keyboardHandler$$9_navigableItems$$7$$.push(this.$_timeline$.$_series$[$i$$646$$].$_items$)
    }
    return $DvtTimelineKeyboardHandler$getNextNavigable$$(this, $event$$544$$, $keyboardHandler$$9_navigableItems$$7$$)
  }
  return $JSCompiler_alias_NULL$$
};
$JSCompiler_prototypeAlias$$.$getTargetElem$ = function $$JSCompiler_prototypeAlias$$$$getTargetElem$$() {
  return this.$_displayable$.$getElem$()
};
$JSCompiler_prototypeAlias$$.$getKeyboardBoundingBox$ = function $$JSCompiler_prototypeAlias$$$$getKeyboardBoundingBox$$($targetCoordinateSpace$$35$$) {
  return this.$_displayable$.$getDimensions$($targetCoordinateSpace$$35$$)
};
$JSCompiler_prototypeAlias$$.$showKeyboardFocusEffect$ = function $$JSCompiler_prototypeAlias$$$$showKeyboardFocusEffect$$() {
  this.$_isShowingKeyboardFocusEffect$ = $JSCompiler_alias_TRUE$$;
  this.$showHoverEffect$();
  $JSCompiler_StaticMethods_updateScrollForItemNavigation$$(this.$_timeline$, this)
};
$JSCompiler_prototypeAlias$$.$hideKeyboardFocusEffect$ = function $$JSCompiler_prototypeAlias$$$$hideKeyboardFocusEffect$$() {
  this.$_isShowingKeyboardFocusEffect$ = $JSCompiler_alias_FALSE$$;
  this.$hideHoverEffect$()
};
$JSCompiler_prototypeAlias$$.$isShowingKeyboardFocusEffect$ = $JSCompiler_get$$("$_isShowingKeyboardFocusEffect$");
$JSCompiler_prototypeAlias$$.$getDisplayables$ = function $$JSCompiler_prototypeAlias$$$$getDisplayables$$() {
  return[this.$_displayable$]
};
$JSCompiler_prototypeAlias$$.$getAriaLabel$ = function $$JSCompiler_prototypeAlias$$$$getAriaLabel$$() {
  var $states$$17$$ = [];
  this.$isSelectable$() && $states$$17$$.push(dvt.$Bundle$.$getTranslatedString$(dvt.$Bundle$.$UTIL_PREFIX$, this.$isSelected$() ? "STATE_SELECTED" : "STATE_UNSELECTED"));
  return dvt.$Displayable$.$generateAriaLabel$(this.$getLabel$(), $states$$17$$)
};
$JSCompiler_prototypeAlias$$.$setSelectable$ = $JSCompiler_set$$("$_isSelectable$");
$JSCompiler_prototypeAlias$$.$isSelectable$ = $JSCompiler_get$$("$_isSelectable$");
$JSCompiler_prototypeAlias$$.$isSelected$ = $JSCompiler_get$$("$_isSelected$");
$JSCompiler_prototypeAlias$$.$setSelected$ = function $$JSCompiler_prototypeAlias$$$$setSelected$$($JSCompiler_StaticMethods_selSelectItem$self$$inline_5133_JSCompiler_StaticMethods_selUnselectItem$self$$inline_5137_isSelected$$2$$) {
  this.$_isSelected$ = $JSCompiler_StaticMethods_selSelectItem$self$$inline_5133_JSCompiler_StaticMethods_selUnselectItem$self$$inline_5137_isSelected$$2$$;
  this.$_displayable$.$setSelected$($JSCompiler_StaticMethods_selSelectItem$self$$inline_5133_JSCompiler_StaticMethods_selUnselectItem$self$$inline_5137_isSelected$$2$$);
  this.$_updateAriaLabel$();
  if(this.$_timeline$.$_hasOverview$ && this.$_timeline$.$_overview$) {
    if($JSCompiler_StaticMethods_selSelectItem$self$$inline_5133_JSCompiler_StaticMethods_selUnselectItem$self$$inline_5137_isSelected$$2$$) {
      $JSCompiler_StaticMethods_selSelectItem$self$$inline_5133_JSCompiler_StaticMethods_selUnselectItem$self$$inline_5137_isSelected$$2$$ = this.$_timeline$.$_overview$;
      var $drawable$$inline_5135_drawable$$inline_5139_itemId$$inline_5134_itemId$$inline_5138$$ = this.getId(), $drawable$$inline_5135_drawable$$inline_5139_itemId$$inline_5134_itemId$$inline_5138$$ = $JSCompiler_StaticMethods_getDrawableById$$($JSCompiler_StaticMethods_selSelectItem$self$$inline_5133_JSCompiler_StaticMethods_selUnselectItem$self$$inline_5137_isSelected$$2$$, $drawable$$inline_5135_drawable$$inline_5139_itemId$$inline_5134_itemId$$inline_5138$$);
      $drawable$$inline_5135_drawable$$inline_5139_itemId$$inline_5134_itemId$$inline_5138$$ != $JSCompiler_alias_NULL$$ && $JSCompiler_StaticMethods_addSelectedMarker$$($JSCompiler_StaticMethods_selSelectItem$self$$inline_5133_JSCompiler_StaticMethods_selUnselectItem$self$$inline_5137_isSelected$$2$$, $drawable$$inline_5135_drawable$$inline_5139_itemId$$inline_5134_itemId$$inline_5138$$)
    }else {
      if($JSCompiler_StaticMethods_selSelectItem$self$$inline_5133_JSCompiler_StaticMethods_selUnselectItem$self$$inline_5137_isSelected$$2$$ = this.$_timeline$.$_overview$, $drawable$$inline_5135_drawable$$inline_5139_itemId$$inline_5134_itemId$$inline_5138$$ = this.getId(), $drawable$$inline_5135_drawable$$inline_5139_itemId$$inline_5134_itemId$$inline_5138$$ = $JSCompiler_StaticMethods_getDrawableById$$($JSCompiler_StaticMethods_selSelectItem$self$$inline_5133_JSCompiler_StaticMethods_selUnselectItem$self$$inline_5137_isSelected$$2$$, 
      $drawable$$inline_5135_drawable$$inline_5139_itemId$$inline_5134_itemId$$inline_5138$$), $drawable$$inline_5135_drawable$$inline_5139_itemId$$inline_5134_itemId$$inline_5138$$ != $JSCompiler_alias_NULL$$ && $JSCompiler_StaticMethods_selSelectItem$self$$inline_5133_JSCompiler_StaticMethods_selUnselectItem$self$$inline_5137_isSelected$$2$$.$_selectedMarkers$ != $JSCompiler_alias_NULL$$) {
        for(var $index$$inline_6754$$ = -1, $i$$inline_6755$$ = 0;$i$$inline_6755$$ < $JSCompiler_StaticMethods_selSelectItem$self$$inline_5133_JSCompiler_StaticMethods_selUnselectItem$self$$inline_5137_isSelected$$2$$.$_selectedMarkers$.length;$i$$inline_6755$$++) {
          if($drawable$$inline_5135_drawable$$inline_5139_itemId$$inline_5134_itemId$$inline_5138$$ == $JSCompiler_StaticMethods_selSelectItem$self$$inline_5133_JSCompiler_StaticMethods_selUnselectItem$self$$inline_5137_isSelected$$2$$.$_selectedMarkers$[$i$$inline_6755$$]) {
            $index$$inline_6754$$ = $i$$inline_6755$$;
            break
          }
        }
        -1 != $index$$inline_6754$$ && ($JSCompiler_StaticMethods_selSelectItem$self$$inline_5133_JSCompiler_StaticMethods_selUnselectItem$self$$inline_5137_isSelected$$2$$.$applyState$($drawable$$inline_5135_drawable$$inline_5139_itemId$$inline_5134_itemId$$inline_5138$$, dvt.$TimelineOverview$.$ENABLED_STATE$), $JSCompiler_StaticMethods_selSelectItem$self$$inline_5133_JSCompiler_StaticMethods_selUnselectItem$self$$inline_5137_isSelected$$2$$.$_selectedMarkers$.splice($index$$inline_6754$$, 1))
      }
    }
  }
};
$JSCompiler_prototypeAlias$$.$showHoverEffect$ = function $$JSCompiler_prototypeAlias$$$$showHoverEffect$$($JSCompiler_StaticMethods_highlightItem$self$$inline_5141_ignoreOverview$$) {
  this.$_displayable$.$showHoverEffect$(this.$_timeline$.$EventManager$.$getFocus$() == this);
  if(!$JSCompiler_StaticMethods_highlightItem$self$$inline_5141_ignoreOverview$$ && this.$_timeline$.$_hasOverview$) {
    $JSCompiler_StaticMethods_highlightItem$self$$inline_5141_ignoreOverview$$ = this.$_timeline$.$_overview$;
    var $drawable$$inline_5143_itemId$$inline_5142$$ = this.getId(), $drawable$$inline_5143_itemId$$inline_5142$$ = $JSCompiler_StaticMethods_getDrawableById$$($JSCompiler_StaticMethods_highlightItem$self$$inline_5141_ignoreOverview$$, $drawable$$inline_5143_itemId$$inline_5142$$);
    $drawable$$inline_5143_itemId$$inline_5142$$ != $JSCompiler_alias_NULL$$ && $JSCompiler_StaticMethods_highlightMarker$$($JSCompiler_StaticMethods_highlightItem$self$$inline_5141_ignoreOverview$$, $drawable$$inline_5143_itemId$$inline_5142$$)
  }
  if(this.$_timeline$.$_isVertical$ || this.$_series$.$_isRandomItemLayout$) {
    this.$_index$ || (this.$_index$ = this.$_series$.$_blocks$[0].$getChildIndex$(this.$_displayable$)), this.$_series$.$_blocks$[0].$addChild$(this.$_displayable$)
  }
};
$JSCompiler_prototypeAlias$$.$hideHoverEffect$ = function $$JSCompiler_prototypeAlias$$$$hideHoverEffect$$($JSCompiler_StaticMethods_unhighlightItem$self$$inline_5145_ignoreOverview$$1$$) {
  this.$_displayable$.$hideHoverEffect$(this.$_timeline$.$EventManager$.$getFocus$() == this);
  if(!$JSCompiler_StaticMethods_unhighlightItem$self$$inline_5145_ignoreOverview$$1$$ && this.$_timeline$.$_hasOverview$) {
    $JSCompiler_StaticMethods_unhighlightItem$self$$inline_5145_ignoreOverview$$1$$ = this.$_timeline$.$_overview$;
    var $drawable$$inline_5147_itemId$$inline_5146$$ = this.getId(), $drawable$$inline_5147_itemId$$inline_5146$$ = $JSCompiler_StaticMethods_getDrawableById$$($JSCompiler_StaticMethods_unhighlightItem$self$$inline_5145_ignoreOverview$$1$$, $drawable$$inline_5147_itemId$$inline_5146$$);
    $drawable$$inline_5147_itemId$$inline_5146$$ != $JSCompiler_alias_NULL$$ && $JSCompiler_StaticMethods_unhighlightMarker$$($JSCompiler_StaticMethods_unhighlightItem$self$$inline_5145_ignoreOverview$$1$$, $drawable$$inline_5147_itemId$$inline_5146$$)
  }
  (this.$_timeline$.$_isVertical$ || this.$_series$.$_isRandomItemLayout$) && (this.$_index$ && !this.$_isSelected$) && this.$_series$.$_blocks$[0].$addChildAt$(this.$_displayable$, this.$_index$)
};
$JSCompiler_prototypeAlias$$.$_updateAriaLabel$ = function $$JSCompiler_prototypeAlias$$$$_updateAriaLabel$$() {
  dvt.$Agent$.$deferAriaCreation$() || this.$_displayable$.$setAriaProperty$("label", this.$getAriaLabel$())
};
function $DvtTimelineSeriesParser$$() {
}
dvt.$Obj$.$createSubclass$($DvtTimelineSeriesParser$$, dvt.$Obj$, "DvtTimelineSeriesParser");
$JSCompiler_prototypeAlias$$ = $DvtTimelineSeriesParser$$.prototype;
$JSCompiler_prototypeAlias$$.parse = function $$JSCompiler_prototypeAlias$$$parse$($options$$291$$, $oldItems$$1$$) {
  var $itemArray$$inline_5151$$ = [], $ret$$65_seriesItems$$inline_5152$$ = $options$$291$$.items;
  if($ret$$65_seriesItems$$inline_5152$$) {
    for(var $j$$inline_5153$$ = 0;$j$$inline_5153$$ < $ret$$65_seriesItems$$inline_5152$$.length;$j$$inline_5153$$++) {
      $itemArray$$inline_5151$$.push($ret$$65_seriesItems$$inline_5152$$[$j$$inline_5153$$])
    }
  }
  this.$_startTime$ = new Date($options$$291$$.start);
  this.$_endTime$ = new Date($options$$291$$.end);
  $ret$$65_seriesItems$$inline_5152$$ = this.$ParseRootAttributes$();
  $ret$$65_seriesItems$$inline_5152$$.$inlineStyle$ = $options$$291$$.style;
  $ret$$65_seriesItems$$inline_5152$$.scale = $options$$291$$.scale;
  $ret$$65_seriesItems$$inline_5152$$.$timeAxis$ = $options$$291$$.timeAxis;
  $ret$$65_seriesItems$$inline_5152$$.label = $options$$291$$.label;
  $ret$$65_seriesItems$$inline_5152$$.$emptyText$ = $options$$291$$.emptyText;
  $ret$$65_seriesItems$$inline_5152$$.$isIRAnimationEnabled$ = "auto" == $options$$291$$.animationOnDisplay;
  $ret$$65_seriesItems$$inline_5152$$.$isDCAnimationEnabled$ = "auto" == $options$$291$$.animationOnDataChange;
  $ret$$65_seriesItems$$inline_5152$$.$items$ = this.$_parseDataNode$($options$$291$$.timeline, $options$$291$$.index, $itemArray$$inline_5151$$, $oldItems$$1$$);
  $ret$$65_seriesItems$$inline_5152$$.$rtl$ = "false";
  $ret$$65_seriesItems$$inline_5152$$.$isRandomItemLayout$ = $options$$291$$._isRandomItemLayout;
  $ret$$65_seriesItems$$inline_5152$$.$isTopToBottom$ = $options$$291$$.itemLayout == $JSCompiler_alias_NULL$$ || "auto" == $options$$291$$.itemLayout ? $options$$291$$.inverted : "topToBottom" == $options$$291$$.itemLayout;
  return $ret$$65_seriesItems$$inline_5152$$
};
$JSCompiler_prototypeAlias$$.$ParseRootAttributes$ = function $$JSCompiler_prototypeAlias$$$$ParseRootAttributes$$() {
  var $ret$$66$$ = {};
  $ret$$66$$.$origStart$ = this.$_startTime$;
  $ret$$66$$.$origEnd$ = this.$_endTime$;
  $ret$$66$$.orientation = "horizontal";
  $ret$$66$$.start = this.$_startTime$.getTime();
  $ret$$66$$.end = this.$_endTime$.getTime();
  return $ret$$66$$
};
$JSCompiler_prototypeAlias$$.$_parseDataNode$ = function $$JSCompiler_prototypeAlias$$$$_parseDataNode$$($timeline$$19$$, $seriesIndex$$126$$, $data$$109$$, $oldItems$$2$$) {
  var $treeNodes$$ = [], $series$$40$$ = $timeline$$19$$.$_series$[$seriesIndex$$126$$];
  if($data$$109$$) {
    for(var $i$$647$$ = 0;$i$$647$$ < $data$$109$$.length;$i$$647$$++) {
      var $props$$11_startTime$$12$$ = this.$ParseNodeAttributes$($data$$109$$[$i$$647$$]);
      if($props$$11_startTime$$12$$) {
        if($series$$40$$.$_allowUpdates$) {
          var $item$$83_props$$inline_5155$$;
          a: {
            $item$$83_props$$inline_5155$$ = $props$$11_startTime$$12$$;
            var $add$$1_index$$197_items$$inline_5156$$ = $oldItems$$2$$;
            if($add$$1_index$$197_items$$inline_5156$$) {
              for(var $i$$inline_5157_j$$102$$ = 0;$i$$inline_5157_j$$102$$ < $add$$1_index$$197_items$$inline_5156$$.length;$i$$inline_5157_j$$102$$++) {
                var $item$$inline_5158$$ = $add$$1_index$$197_items$$inline_5156$$[$i$$inline_5157_j$$102$$];
                if($item$$83_props$$inline_5155$$.id == $item$$inline_5158$$.getId() && $item$$83_props$$inline_5155$$.title == $item$$inline_5158$$.$getTitle$() && $item$$83_props$$inline_5155$$.$desc$ == $item$$inline_5158$$.$_desc$ && $item$$83_props$$inline_5155$$.$thumbnail$ == $item$$inline_5158$$.$_thumbnail$) {
                  $item$$83_props$$inline_5155$$ = $item$$inline_5158$$;
                  break a
                }
              }
            }
            $item$$83_props$$inline_5155$$ = $JSCompiler_alias_VOID$$
          }
          $item$$83_props$$inline_5155$$ ? ($add$$1_index$$197_items$$inline_5156$$ = dvt.$ArrayUtils$.$getIndex$($oldItems$$2$$, $item$$83_props$$inline_5155$$), $oldItems$$2$$.splice($add$$1_index$$197_items$$inline_5156$$, 1), $item$$83_props$$inline_5155$$.$_spacing$ = $JSCompiler_alias_NULL$$, $item$$83_props$$inline_5155$$.$_durationLevel$ = $JSCompiler_alias_NULL$$, $item$$83_props$$inline_5155$$.$_loc$ = $JSCompiler_alias_NULL$$, $item$$83_props$$inline_5155$$.$setSelected$($JSCompiler_alias_FALSE$$), 
          $item$$83_props$$inline_5155$$.$_startTime$ = $props$$11_startTime$$12$$.startTime, $item$$83_props$$inline_5155$$.$_endTime$ = $props$$11_startTime$$12$$.$endTime$) : ($item$$83_props$$inline_5155$$ = new $DvtTimelineSeriesNode$$($timeline$$19$$, $seriesIndex$$126$$, $props$$11_startTime$$12$$), $item$$83_props$$inline_5155$$.$setSelectable$($JSCompiler_alias_TRUE$$))
        }else {
          $item$$83_props$$inline_5155$$ = new $DvtTimelineSeriesNode$$($timeline$$19$$, $seriesIndex$$126$$, $props$$11_startTime$$12$$), $item$$83_props$$inline_5155$$.$setSelectable$($JSCompiler_alias_TRUE$$)
        }
        $props$$11_startTime$$12$$ = $item$$83_props$$inline_5155$$.$_startTime$;
        $add$$1_index$$197_items$$inline_5156$$ = $JSCompiler_alias_TRUE$$;
        for($i$$inline_5157_j$$102$$ = 0;$i$$inline_5157_j$$102$$ < $treeNodes$$.length;$i$$inline_5157_j$$102$$++) {
          if($props$$11_startTime$$12$$ < $treeNodes$$[$i$$inline_5157_j$$102$$].$_startTime$) {
            $treeNodes$$.splice($i$$inline_5157_j$$102$$, 0, $item$$83_props$$inline_5155$$);
            $add$$1_index$$197_items$$inline_5156$$ = $JSCompiler_alias_FALSE$$;
            break
          }
        }
        $add$$1_index$$197_items$$inline_5156$$ && $treeNodes$$.push($item$$83_props$$inline_5155$$)
      }
    }
  }
  return $treeNodes$$
};
$JSCompiler_prototypeAlias$$.getDate = function $$JSCompiler_prototypeAlias$$$getDate$($date$$17$$) {
  return $date$$17$$ == $JSCompiler_alias_NULL$$ ? $JSCompiler_alias_NULL$$ : $date$$17$$.getTime ? $date$$17$$.getTime() : isNaN($date$$17$$) ? (new Date($date$$17$$)).getTime() + 0 : $date$$17$$
};
$JSCompiler_prototypeAlias$$.$ParseNodeAttributes$ = function $$JSCompiler_prototypeAlias$$$$ParseNodeAttributes$$($data$$110$$) {
  var $ret$$67$$ = {};
  $ret$$67$$.id = $data$$110$$.id;
  $ret$$67$$.$rowKey$ = $ret$$67$$.id;
  $ret$$67$$.startTime = this.getDate($data$$110$$.start);
  $ret$$67$$.$endTime$ = this.getDate($data$$110$$.end);
  if(($ret$$67$$.$endTime$ ? $ret$$67$$.$endTime$ : $ret$$67$$.startTime) < this.$_startTime$.getTime() || $ret$$67$$.startTime > this.$_endTime$.getTime()) {
    return $JSCompiler_alias_NULL$$
  }
  $ret$$67$$.title = $data$$110$$.title;
  $ret$$67$$.$desc$ = $data$$110$$.description;
  $ret$$67$$.$thumbnail$ = $data$$110$$.thumbnail;
  $ret$$67$$.data = $data$$110$$;
  $ret$$67$$.style = $data$$110$$.style;
  $ret$$67$$.action = $data$$110$$.action;
  $ret$$67$$.$durationFillColor$ = $data$$110$$.durationFillColor;
  return $ret$$67$$
};
var $DvtTimelineSeriesRenderer$$ = {};
dvt.$Obj$.$createSubclass$($DvtTimelineSeriesRenderer$$, dvt.$Obj$, "DvtTimelineSeriesRenderer");
$DvtTimelineSeriesRenderer$$.$renderSeries$ = function $$DvtTimelineSeriesRenderer$$$$renderSeries$$($series$$41$$, $block$$1_width$$140$$, $context$$418_durationBlock_height$$117_items$$inline_5176_overflowOffset$$7$$) {
  $DvtTimelineSeriesRenderer$$.$_renderBackground$($series$$41$$, $block$$1_width$$140$$, $context$$418_durationBlock_height$$117_items$$inline_5176_overflowOffset$$7$$);
  $DvtTimelineSeriesRenderer$$.$_renderScrollableCanvas$($series$$41$$);
  $DvtTimelineSeriesRenderer$$.$_renderReferenceObjects$($series$$41$$, $series$$41$$.$_canvas$);
  $DvtTimelineSeriesRenderer$$.$_renderSeriesTicks$($series$$41$$);
  if(!($series$$41$$.$_items$ == $JSCompiler_alias_NULL$$ || 0 == $series$$41$$.$_items$.length)) {
    if(0 == $series$$41$$.$_blocks$.length) {
      $context$$418_durationBlock_height$$117_items$$inline_5176_overflowOffset$$7$$ = $series$$41$$.$getCtx$();
      $block$$1_width$$140$$ = new dvt.$Container$($context$$418_durationBlock_height$$117_items$$inline_5176_overflowOffset$$7$$, "itemBlock_" + $series$$41$$.$_fetchStartPos$ + "_" + $series$$41$$.$_fetchEndPos$);
      $block$$1_width$$140$$.$startPos$ = $series$$41$$.$_fetchStartPos$;
      $block$$1_width$$140$$.$endPos$ = $series$$41$$.$_fetchEndPos$;
      var $feelerBlock_i$$inline_5177$$ = new dvt.$Container$($context$$418_durationBlock_height$$117_items$$inline_5176_overflowOffset$$7$$, "feelers");
      $block$$1_width$$140$$.$addChild$($feelerBlock_i$$inline_5177$$);
      $block$$1_width$$140$$.$feelers$ = $feelerBlock_i$$inline_5177$$;
      $context$$418_durationBlock_height$$117_items$$inline_5176_overflowOffset$$7$$ = new dvt.$Container$($context$$418_durationBlock_height$$117_items$$inline_5176_overflowOffset$$7$$, "durations");
      $block$$1_width$$140$$.$addChild$($context$$418_durationBlock_height$$117_items$$inline_5176_overflowOffset$$7$$);
      $block$$1_width$$140$$.$durations$ = $context$$418_durationBlock_height$$117_items$$inline_5176_overflowOffset$$7$$;
      $series$$41$$.$_canvas$.$addChild$($block$$1_width$$140$$);
      $series$$41$$.$_blocks$.push($block$$1_width$$140$$)
    }else {
      $block$$1_width$$140$$ = $series$$41$$.$_blocks$[0]
    }
    $series$$41$$.$prepareDurations$($series$$41$$.$_items$);
    $context$$418_durationBlock_height$$117_items$$inline_5176_overflowOffset$$7$$ = $series$$41$$.$_items$;
    $series$$41$$.$isVertical$() ? $series$$41$$.$_initialSpacing$ = 20 * (0 < $series$$41$$.$_maxDurationSize$ ? 1 : 0) + $DvtTimelineStyleUtils$$.$getBubbleSpacing$() + 10 * $series$$41$$.$_maxDurationSize$ : $series$$41$$.$_initialSpacing$ = 20 + $DvtTimelineStyleUtils$$.$getBubbleSpacing$() + 10 * $series$$41$$.$_maxDurationSize$;
    $series$$41$$.$_layoutItems$ = [];
    for($feelerBlock_i$$inline_5177$$ = 0;$feelerBlock_i$$inline_5177$$ < $context$$418_durationBlock_height$$117_items$$inline_5176_overflowOffset$$7$$.length;$feelerBlock_i$$inline_5177$$++) {
      var $item$$inline_5178$$ = $context$$418_durationBlock_height$$117_items$$inline_5176_overflowOffset$$7$$[$feelerBlock_i$$inline_5177$$], $loc$$inline_5179$$ = $DvtTimeUtils$$.$getDatePosition$($series$$41$$.$_start$, $series$$41$$.$_end$, $item$$inline_5178$$.$_startTime$, $series$$41$$.$_length$), $add$$inline_5182_endTime$$inline_5180_span$$inline_5181$$ = $item$$inline_5178$$.$_endTime$;
      $add$$inline_5182_endTime$$inline_5180_span$$inline_5181$$ && $add$$inline_5182_endTime$$inline_5180_span$$inline_5181$$ != $item$$inline_5178$$.$_startTime$ && ($add$$inline_5182_endTime$$inline_5180_span$$inline_5181$$ = $DvtTimeUtils$$.$getDatePosition$($series$$41$$.$_start$, $series$$41$$.$_end$, $add$$inline_5182_endTime$$inline_5180_span$$inline_5181$$, $series$$41$$.$_length$) - $loc$$inline_5179$$, $loc$$inline_5179$$ += Math.min($DvtTimelineStyleUtils$$.$getDurationFeelerOffset$(), 
      $add$$inline_5182_endTime$$inline_5180_span$$inline_5181$$ / 2));
      $item$$inline_5178$$.$_loc$ = $loc$$inline_5179$$;
      for(var $add$$inline_5182_endTime$$inline_5180_span$$inline_5181$$ = $JSCompiler_alias_TRUE$$, $j$$inline_5183$$ = 0;$j$$inline_5183$$ < $series$$41$$.$_layoutItems$.length;$j$$inline_5183$$++) {
        if($loc$$inline_5179$$ < $series$$41$$.$_layoutItems$[$j$$inline_5183$$].$_loc$) {
          $series$$41$$.$_layoutItems$.splice($j$$inline_5183$$, 0, $item$$inline_5178$$);
          $add$$inline_5182_endTime$$inline_5180_span$$inline_5181$$ = $JSCompiler_alias_FALSE$$;
          break
        }
      }
      $add$$inline_5182_endTime$$inline_5180_span$$inline_5181$$ && $series$$41$$.$_layoutItems$.push($item$$inline_5178$$)
    }
    for($feelerBlock_i$$inline_5177$$ = 0;$feelerBlock_i$$inline_5177$$ < $series$$41$$.$_layoutItems$.length;$feelerBlock_i$$inline_5177$$++) {
      $item$$inline_5178$$ = $series$$41$$.$_layoutItems$[$feelerBlock_i$$inline_5177$$], $loc$$inline_5179$$ = $DvtTimeUtils$$.$getDatePosition$($series$$41$$.$_start$, $series$$41$$.$_end$, $item$$inline_5178$$.$_startTime$, $series$$41$$.$_length$), $loc$$inline_5179$$ < $series$$41$$.$_fetchStartPos$ || $loc$$inline_5179$$ > $series$$41$$.$_fetchEndPos$ || $DvtTimelineSeriesItemRenderer$$.$initializeItem$($item$$inline_5178$$, $series$$41$$)
    }
    $series$$41$$.$_isInitialRender$ ? ($series$$41$$.$_frAnimationElems$ = $series$$41$$.$_isIRAnimationEnabled$ ? [] : $JSCompiler_alias_NULL$$, $series$$41$$.$_mvAnimator$ = $JSCompiler_alias_NULL$$, $series$$41$$.$_rmAnimationElems$ = $JSCompiler_alias_NULL$$) : $series$$41$$.$_allowUpdates$ && $series$$41$$.$_isDCAnimationEnabled$ ? ($series$$41$$.$_frAnimationElems$ = [], $series$$41$$.$_mvAnimator$ = new dvt.$Animator$($series$$41$$.$getCtx$(), $DvtTimelineStyleUtils$$.$getAnimationDuration$($series$$41$$.$Options$), 
    0, dvt.$Easing$.$cubicInOut$), $series$$41$$.$_rmAnimationElems$ = []) : ($series$$41$$.$_frAnimationElems$ = $JSCompiler_alias_NULL$$, $series$$41$$.$_mvAnimator$ = $JSCompiler_alias_NULL$$, $series$$41$$.$_rmAnimationElems$ = $JSCompiler_alias_NULL$$);
    $series$$41$$.$_hasMvAnimations$ = $JSCompiler_alias_FALSE$$;
    $context$$418_durationBlock_height$$117_items$$inline_5176_overflowOffset$$7$$ = Math.max(0, $series$$41$$.$_maxOverflowValue$ - $series$$41$$.$_size$);
    $series$$41$$.$_overflowOffset$ = $context$$418_durationBlock_height$$117_items$$inline_5176_overflowOffset$$7$$;
    $DvtTimelineSeriesRenderer$$.$_adjustBackground$($series$$41$$, $context$$418_durationBlock_height$$117_items$$inline_5176_overflowOffset$$7$$);
    $series$$41$$.$_oldItems$ && $DvtTimelineSeriesRenderer$$.$_removeItems$($series$$41$$.$_oldItems$, $series$$41$$, $block$$1_width$$140$$, $series$$41$$.$_rmAnimationElems$);
    $series$$41$$.$_oldItems$ = $JSCompiler_alias_NULL$$;
    $series$$41$$.$isVertical$() && $block$$1_width$$140$$.$feelers$.$removeChildren$();
    $DvtTimelineSeriesRenderer$$.$_renderItems$($series$$41$$.$_items$, $series$$41$$, $block$$1_width$$140$$, $series$$41$$.$_fetchStartPos$, $series$$41$$.$_fetchEndPos$, $context$$418_durationBlock_height$$117_items$$inline_5176_overflowOffset$$7$$, $series$$41$$.$_frAnimationElems$, $series$$41$$.$_mvAnimator$);
    $DvtTimelineSeriesRenderer$$.$_updateReferenceObjects$($series$$41$$);
    $DvtTimelineSeriesRenderer$$.$_updateSeriesTicks$($series$$41$$)
  }
};
$DvtTimelineSeriesRenderer$$.$updateSeriesForZoom$ = function $$DvtTimelineSeriesRenderer$$$$updateSeriesForZoom$$($series$$42$$) {
  $DvtTimelineSeriesRenderer$$.$_updateItemsForZoom$($series$$42$$.$_items$, $series$$42$$);
  $DvtTimelineSeriesRenderer$$.$_updateReferenceObjects$($series$$42$$);
  $DvtTimelineSeriesRenderer$$.$_updateSeriesTicks$($series$$42$$)
};
$DvtTimelineSeriesRenderer$$.$_renderBackground$ = function $$DvtTimelineSeriesRenderer$$$$_renderBackground$$($series$$43$$, $width$$141$$, $height$$118$$) {
  if($series$$43$$.$_background$) {
    var $addBackground$$ = $JSCompiler_alias_FALSE$$;
    $series$$43$$.$_background$.$setWidth$($width$$141$$);
    $series$$43$$.$_background$.$setHeight$($height$$118$$)
  }else {
    $addBackground$$ = $JSCompiler_alias_TRUE$$, $series$$43$$.$_background$ = new dvt.$Rect$($series$$43$$.$getCtx$(), 0, 0, $width$$141$$, $height$$118$$, "bg")
  }
  $series$$43$$.$_background$.$setCSSStyle$($series$$43$$.$_style$);
  $series$$43$$.$_background$.$setPixelHinting$();
  $series$$43$$.$_background$.setCursor("move");
  $addBackground$$ && $series$$43$$.$addChild$($series$$43$$.$_background$)
};
$DvtTimelineSeriesRenderer$$.$_adjustBackground$ = function $$DvtTimelineSeriesRenderer$$$$_adjustBackground$$($series$$44$$, $overflowOffset$$8$$) {
  var $isRTL$$58$$ = dvt.$Agent$.$isRightToLeft$($series$$44$$.$getCtx$());
  0 < $overflowOffset$$8$$ && ($series$$44$$.$isVertical$() ? $series$$44$$.$_background$.$setWidth$($series$$44$$.$_maxOverflowValue$) : $series$$44$$.$_background$.$setHeight$($series$$44$$.$_maxOverflowValue$));
  if($series$$44$$.$isVertical$()) {
    if(!$series$$44$$.$_isInverted$ && !$isRTL$$58$$ || $series$$44$$.$_isInverted$ && $isRTL$$58$$) {
      $series$$44$$.$_background$.$setTranslateX$(-$overflowOffset$$8$$), $series$$44$$.$_canvas$ != $JSCompiler_alias_NULL$$ && $series$$44$$.$_canvas$.$setTranslateX$(0 - $overflowOffset$$8$$)
    }
  }else {
    $series$$44$$.$_isInverted$ || ($series$$44$$.$_background$.$setTranslateY$(-$overflowOffset$$8$$), $series$$44$$.$_canvas$ != $JSCompiler_alias_NULL$$ && $series$$44$$.$_canvas$.$setTranslateY$(0 - $overflowOffset$$8$$))
  }
};
$DvtTimelineSeriesRenderer$$.$_renderScrollableCanvas$ = function $$DvtTimelineSeriesRenderer$$$$_renderScrollableCanvas$$($series$$45$$) {
  $series$$45$$.$_canvas$ ? ($series$$45$$.$_canvasOffsetX$ = $series$$45$$.$_canvas$.$getTranslateX$(), $series$$45$$.$_canvasOffsetY$ = $series$$45$$.$_canvas$.$getTranslateY$(), $series$$45$$.$_canvas$.$setTranslateX$(0), $series$$45$$.$_canvas$.$setTranslateY$(0)) : ($series$$45$$.$_canvas$ = new dvt.$Container$($series$$45$$.$getCtx$(), "canvas"), $series$$45$$.$addChild$($series$$45$$.$_canvas$))
};
$DvtTimelineSeriesRenderer$$.$_renderItems$ = function $$DvtTimelineSeriesRenderer$$$$_renderItems$$($items$$40$$, $series$$46$$, $container$$189$$, $startPos$$4$$, $endPos$$7$$, $overflowOffset$$9$$, $frAnimationElems$$2$$, $mvAnimator$$2$$) {
  for(var $i$$649$$ = 0;$i$$649$$ < $series$$46$$.$_layoutItems$.length;$i$$649$$++) {
    var $item$$85$$ = $series$$46$$.$_layoutItems$[$i$$649$$], $loc$$6$$ = $DvtTimeUtils$$.$getDatePosition$($series$$46$$.$_start$, $series$$46$$.$_end$, $item$$85$$.$_startTime$, $series$$46$$.$_length$);
    $loc$$6$$ < $startPos$$4$$ || $loc$$6$$ > $endPos$$7$$ || $DvtTimelineSeriesItemRenderer$$.$renderItem$($item$$85$$, $series$$46$$, $container$$189$$, $overflowOffset$$9$$, $frAnimationElems$$2$$, $mvAnimator$$2$$)
  }
  if($DvtTimeUtils$$.$supportsTouch$()) {
    for($i$$649$$ = 0;$i$$649$$ < $series$$46$$.$_layoutItems$.length - 1;$i$$649$$++) {
      $item$$85$$ = $series$$46$$.$_layoutItems$[$i$$649$$], $item$$85$$.$_displayable$.$_setAriaProperty$("flowto", "_bt_" + $series$$46$$.$_layoutItems$[$i$$649$$ + 1].getId())
    }
  }
  $DvtTimelineSeriesRenderer$$.$_renderDurations$($items$$40$$, $series$$46$$, $container$$189$$, $overflowOffset$$9$$, $frAnimationElems$$2$$, $mvAnimator$$2$$)
};
$DvtTimelineSeriesRenderer$$.$_updateItemsForZoom$ = function $$DvtTimelineSeriesRenderer$$$$_updateItemsForZoom$$($items$$41$$, $series$$47$$) {
  if(!($items$$41$$ == $JSCompiler_alias_NULL$$ || 0 == $items$$41$$.length)) {
    var $endPos$$8_i$$650$$ = $series$$47$$.$_fetchEndPos$, $block$$2_item$$86$$ = $series$$47$$.$_blocks$[0];
    $block$$2_item$$86$$.$startPos$ = $series$$47$$.$_fetchStartPos$;
    $block$$2_item$$86$$.$endPos$ = $endPos$$8_i$$650$$;
    $series$$47$$.$prepareDurations$($items$$41$$);
    $series$$47$$.$isVertical$() ? $series$$47$$.$_initialSpacing$ = 20 * (0 < $series$$47$$.$_maxDurationSize$ ? 1 : 0) + $DvtTimelineStyleUtils$$.$getBubbleSpacing$() + 10 * $series$$47$$.$_maxDurationSize$ : $series$$47$$.$_initialSpacing$ = 20 + $DvtTimelineStyleUtils$$.$getBubbleSpacing$() + 10 * $series$$47$$.$_maxDurationSize$;
    for($endPos$$8_i$$650$$ = 0;$endPos$$8_i$$650$$ < $items$$41$$.length;$endPos$$8_i$$650$$++) {
      var $block$$2_item$$86$$ = $items$$41$$[$endPos$$8_i$$650$$], $span$$1_startTime$$13$$ = $block$$2_item$$86$$.$_startTime$, $itemTime_loc$$7_overflowOffset$$10$$ = $DvtTimeUtils$$.$getDatePosition$($series$$47$$.$_start$, $series$$47$$.$_end$, $span$$1_startTime$$13$$, $series$$47$$.$_length$), $endTime$$14$$ = $block$$2_item$$86$$.$_endTime$;
      $endTime$$14$$ && $endTime$$14$$ != $span$$1_startTime$$13$$ && ($span$$1_startTime$$13$$ = $DvtTimeUtils$$.$getDatePosition$($series$$47$$.$_start$, $series$$47$$.$_end$, $endTime$$14$$, $series$$47$$.$_length$) - $itemTime_loc$$7_overflowOffset$$10$$, $itemTime_loc$$7_overflowOffset$$10$$ += Math.min($DvtTimelineStyleUtils$$.$getDurationFeelerOffset$(), $span$$1_startTime$$13$$ / 2));
      $block$$2_item$$86$$.$_loc$ = $itemTime_loc$$7_overflowOffset$$10$$;
      $series$$47$$.$_isRandomItemLayout$ || ($block$$2_item$$86$$.$_spacing$ = $JSCompiler_alias_NULL$$)
    }
    for($endPos$$8_i$$650$$ = 0;$endPos$$8_i$$650$$ < $items$$41$$.length;$endPos$$8_i$$650$$++) {
      $block$$2_item$$86$$ = $items$$41$$[$endPos$$8_i$$650$$], $itemTime_loc$$7_overflowOffset$$10$$ = $block$$2_item$$86$$.$_startTime$, $itemTime_loc$$7_overflowOffset$$10$$ < $series$$47$$.$_start$ || $itemTime_loc$$7_overflowOffset$$10$$ > $series$$47$$.$_end$ || $DvtTimelineSeriesItemRenderer$$.$_updateBubble$($block$$2_item$$86$$, $series$$47$$)
    }
    $itemTime_loc$$7_overflowOffset$$10$$ = Math.max(0, $series$$47$$.$_maxOverflowValue$ - $series$$47$$.$_size$);
    $DvtTimelineSeriesRenderer$$.$_adjustBackground$($series$$47$$, $itemTime_loc$$7_overflowOffset$$10$$);
    for($endPos$$8_i$$650$$ = 0;$endPos$$8_i$$650$$ < $items$$41$$.length;$endPos$$8_i$$650$$++) {
      $block$$2_item$$86$$ = $items$$41$$[$endPos$$8_i$$650$$], $DvtTimelineSeriesItemRenderer$$.$_displayBubble$($block$$2_item$$86$$, $series$$47$$, $itemTime_loc$$7_overflowOffset$$10$$, $JSCompiler_alias_NULL$$), $DvtTimelineSeriesItemRenderer$$.$_updateFeeler$($block$$2_item$$86$$, $series$$47$$, $itemTime_loc$$7_overflowOffset$$10$$, $JSCompiler_alias_NULL$$), $DvtTimelineSeriesItemRenderer$$.$_updateDuration$($block$$2_item$$86$$, $series$$47$$, $itemTime_loc$$7_overflowOffset$$10$$, $JSCompiler_alias_NULL$$)
    }
  }
};
$DvtTimelineSeriesRenderer$$.$_renderDurations$ = function $$DvtTimelineSeriesRenderer$$$$_renderDurations$$($items$$42$$, $series$$48$$, $container$$190_durationBlock$$1$$, $overflowOffset$$11$$, $frAnimationElems$$3$$, $mvAnimator$$3$$) {
  $container$$190_durationBlock$$1$$ = $container$$190_durationBlock$$1$$.$durations$;
  for(var $i$$651$$ = $series$$48$$.$_maxDurationSize$;0 < $i$$651$$;$i$$651$$--) {
    for(var $j$$103$$ = 0;$j$$103$$ < $items$$42$$.length;$j$$103$$++) {
      var $item$$87$$ = $items$$42$$[$j$$103$$], $startTime$$14$$ = $item$$87$$.$_startTime$, $endTime$$15$$ = $item$$87$$.$_endTime$;
      $endTime$$15$$ && ($endTime$$15$$ != $startTime$$14$$ && $i$$651$$ == $item$$87$$.$_durationLevel$) && $DvtTimelineSeriesItemRenderer$$.$renderDuration$($item$$87$$, $series$$48$$, $container$$190_durationBlock$$1$$, $overflowOffset$$11$$, $frAnimationElems$$3$$, $mvAnimator$$3$$)
    }
  }
};
$DvtTimelineSeriesRenderer$$.$_renderSeriesTicks$ = function $$DvtTimelineSeriesRenderer$$$$_renderSeriesTicks$$($series$$49$$) {
  $series$$49$$.$_seriesTicks$ == $JSCompiler_alias_NULL$$ ? ($series$$49$$.$_seriesTicks$ = new dvt.$Container$($series$$49$$.$getCtx$()), $series$$49$$.$_canvas$.$addChild$($series$$49$$.$_seriesTicks$)) : ($series$$49$$.$_seriesTicks$.$removeChildren$(), $series$$49$$.$_seriesTicksArray$ = []);
  if($series$$49$$.$_scale$ && $series$$49$$.$_timeAxis$) {
    var $separatorStyle$$1$$ = new dvt.$CSSStyle$($DvtTimelineStyleUtils$$.$getSeriesAxisSeparatorStyle$());
    if($series$$49$$.$_axisStyleDefaults$) {
      var $separatorColor$$1$$ = $series$$49$$.$_axisStyleDefaults$.separatorColor;
      $separatorColor$$1$$ && $separatorStyle$$1$$.$parseInlineStyle$("color:" + $separatorColor$$1$$ + ";")
    }
    $series$$49$$.$_separatorStroke$ = new dvt.$SolidStroke$($separatorStyle$$1$$.$getStyle$(dvt.$CSSStyle$.$COLOR$));
    $series$$49$$.$_separatorStroke$.$setStyle$(dvt.$Stroke$.$DASHED$, 3);
    $DvtTimelineSeriesRenderer$$.$_renderSeriesTimeAxis$($series$$49$$, $series$$49$$.$_fetchStartPos$, $series$$49$$.$_fetchEndPos$, $series$$49$$.$_seriesTicks$)
  }
};
$DvtTimelineSeriesRenderer$$.$_updateSeriesTicks$ = function $$DvtTimelineSeriesRenderer$$$$_updateSeriesTicks$$($series$$50$$) {
  for(var $isRTL$$59$$ = dvt.$Agent$.$isRightToLeft$($series$$50$$.$getCtx$()), $i$$652$$ = 0;$i$$652$$ < $series$$50$$.$_seriesTicksArray$.length;$i$$652$$++) {
    var $tick$$ = $series$$50$$.$_seriesTicksArray$[$i$$652$$], $pos$$71$$ = !$series$$50$$.$isVertical$() && $isRTL$$59$$ ? $series$$50$$.$_length$ - $DvtTimeUtils$$.$getDatePosition$($series$$50$$.$_start$, $series$$50$$.$_end$, $tick$$.time, $series$$50$$.$_length$) : $DvtTimeUtils$$.$getDatePosition$($series$$50$$.$_start$, $series$$50$$.$_end$, $tick$$.time, $series$$50$$.$_length$);
    $series$$50$$.$isVertical$() ? ($tick$$.$setX1$(0), $tick$$.$setY1$($pos$$71$$), $tick$$.$setX2$($series$$50$$.$_maxOverflowValue$), $tick$$.$setY2$($pos$$71$$)) : ($tick$$.$setX1$($pos$$71$$), $tick$$.$setY1$(0), $tick$$.$setX2$($pos$$71$$), $tick$$.$setY2$($series$$50$$.$_maxOverflowValue$))
  }
};
$DvtTimelineSeriesRenderer$$.$_renderSeriesTimeAxis$ = function $$DvtTimelineSeriesRenderer$$$$_renderSeriesTimeAxis$$($series$$51$$, $currentDate$$2_startDate$$2_startPos$$6$$, $endPos$$9$$, $container$$191$$) {
  var $isRTL$$60$$ = dvt.$Agent$.$isRightToLeft$($series$$51$$.$getCtx$()), $start$$37$$ = $series$$51$$.$_start$, $end$$28$$ = $series$$51$$.$_end$;
  $currentDate$$2_startDate$$2_startPos$$6$$ = $DvtTimeUtils$$.$getPositionDate$($start$$37$$, $end$$28$$, $currentDate$$2_startDate$$2_startPos$$6$$, $series$$51$$.$_length$);
  $currentDate$$2_startDate$$2_startPos$$6$$ = $series$$51$$.$_timeAxis$.$adjustDate$($currentDate$$2_startDate$$2_startPos$$6$$);
  for(var $currentPos$$3_tickElem$$1$$ = $DvtTimeUtils$$.$getDatePosition$($start$$37$$, $end$$28$$, $currentDate$$2_startDate$$2_startPos$$6$$, $series$$51$$.$_length$);$currentPos$$3_tickElem$$1$$ < $endPos$$9$$;) {
    var $nextDate$$2$$ = $series$$51$$.$_timeAxis$.$getNextDate$($currentDate$$2_startDate$$2_startPos$$6$$.getTime()), $next_time_pos$$3$$ = $DvtTimeUtils$$.$getDatePosition$($start$$37$$, $end$$28$$, $nextDate$$2$$, $series$$51$$.$_length$), $pos$$72_y2$$29$$ = !$series$$51$$.$isVertical$() && $isRTL$$60$$ ? $series$$51$$.$_length$ - $currentPos$$3_tickElem$$1$$ : $currentPos$$3_tickElem$$1$$;
    if($series$$51$$.$isVertical$()) {
      var $x1$$37$$ = 0, $y1$$30$$ = $pos$$72_y2$$29$$, $x2$$35$$ = $series$$51$$.$_maxOverflowValue$
    }else {
      $x1$$37$$ = $pos$$72_y2$$29$$, $y1$$30$$ = 0, $x2$$35$$ = $pos$$72_y2$$29$$, $pos$$72_y2$$29$$ = $series$$51$$.$_maxOverflowValue$
    }
    $currentPos$$3_tickElem$$1$$ = $series$$51$$.$addTick$($container$$191$$, $x1$$37$$, $x2$$35$$, $y1$$30$$, $pos$$72_y2$$29$$, $series$$51$$.$_separatorStroke$, "o_tick" + $currentPos$$3_tickElem$$1$$);
    $currentPos$$3_tickElem$$1$$.time = $currentDate$$2_startDate$$2_startPos$$6$$.getTime();
    $series$$51$$.$_seriesTicksArray$.push($currentPos$$3_tickElem$$1$$);
    $currentDate$$2_startDate$$2_startPos$$6$$ = $nextDate$$2$$;
    $currentPos$$3_tickElem$$1$$ = $next_time_pos$$3$$
  }
};
$DvtTimelineSeriesRenderer$$.$_renderReferenceObjects$ = function $$DvtTimelineSeriesRenderer$$$$_renderReferenceObjects$$($series$$52$$, $container$$192$$) {
  var $context$$422$$ = $series$$52$$.$getCtx$(), $isRTL$$61$$ = dvt.$Agent$.$isRightToLeft$($context$$422$$);
  $series$$52$$.$_refObjectsContainer$ == $JSCompiler_alias_NULL$$ && ($series$$52$$.$_refObjectsContainer$ = new dvt.$Container$($context$$422$$), $container$$192$$.$addChild$($series$$52$$.$_refObjectsContainer$));
  var $referenceObjects$$4$$ = $series$$52$$.$_referenceObjects$;
  if($referenceObjects$$4$$) {
    for(var $maxRefObjects$$ = Math.min(1, $referenceObjects$$4$$.length), $i$$653$$ = 0;$i$$653$$ < $maxRefObjects$$;$i$$653$$++) {
      var $refObject$$ = $referenceObjects$$4$$[$i$$653$$];
      if($refObject$$) {
        var $pos$$73_ref$$2$$ = $DvtTimeUtils$$.$getDatePosition$($series$$52$$.$_start$, $series$$52$$.$_end$, $refObject$$, $series$$52$$.$_length$);
        if(0 == $series$$52$$.$_renderedReferenceObjects$.length) {
          $series$$52$$.$isVertical$() ? $pos$$73_ref$$2$$ = new dvt.$Line$($context$$422$$, 0, $pos$$73_ref$$2$$, $series$$52$$.$_maxOverflowValue$, $pos$$73_ref$$2$$, "zoomOrder[i]") : ($isRTL$$61$$ && ($pos$$73_ref$$2$$ = $series$$52$$.$_length$ - $pos$$73_ref$$2$$), $pos$$73_ref$$2$$ = new dvt.$Line$($context$$422$$, $pos$$73_ref$$2$$, 0, $pos$$73_ref$$2$$, $series$$52$$.$_maxOverflowValue$, "zoomOrder[i]"));
          var $referenceObjectStroke$$ = new dvt.$SolidStroke$($DvtTimelineStyleUtils$$.$getReferenceObjectColor$($series$$52$$.$Options$));
          $pos$$73_ref$$2$$.$setStroke$($referenceObjectStroke$$);
          $pos$$73_ref$$2$$.$setPixelHinting$();
          $pos$$73_ref$$2$$.$date$ = $refObject$$;
          $series$$52$$.$_refObjectsContainer$.$addChild$($pos$$73_ref$$2$$);
          $series$$52$$.$_renderedReferenceObjects$[$i$$653$$] = $pos$$73_ref$$2$$
        }
      }
    }
  }else {
    $series$$52$$.$_refObjectsContainer$.$removeChildren$(), $series$$52$$.$_renderedReferenceObjects$ = []
  }
};
$DvtTimelineSeriesRenderer$$.$_updateReferenceObjects$ = function $$DvtTimelineSeriesRenderer$$$$_updateReferenceObjects$$($series$$53$$) {
  for(var $isRTL$$62$$ = dvt.$Agent$.$isRightToLeft$($series$$53$$.$getCtx$()), $i$$654$$ = 0;$i$$654$$ < $series$$53$$.$_renderedReferenceObjects$.length;$i$$654$$++) {
    var $ref$$3$$ = $series$$53$$.$_renderedReferenceObjects$[$i$$654$$], $pos$$74$$ = $DvtTimeUtils$$.$getDatePosition$($series$$53$$.$_start$, $series$$53$$.$_end$, $ref$$3$$.$date$, $series$$53$$.$_length$);
    $series$$53$$.$isVertical$() ? ($ref$$3$$.$setX1$(0), $ref$$3$$.$setY1$($pos$$74$$), $ref$$3$$.$setX2$($series$$53$$.$_maxOverflowValue$), $ref$$3$$.$setY2$($pos$$74$$)) : ($isRTL$$62$$ && ($pos$$74$$ = $series$$53$$.$_length$ - $pos$$74$$), $ref$$3$$.$setX1$($pos$$74$$), $ref$$3$$.$setY1$(0), $ref$$3$$.$setX2$($pos$$74$$), $ref$$3$$.$setY2$($series$$53$$.$_maxOverflowValue$))
  }
};
$DvtTimelineSeriesRenderer$$.$_removeItems$ = function $$DvtTimelineSeriesRenderer$$$$_removeItems$$($items$$43$$, $series$$54$$, $container$$193$$, $animationElems$$3_i$$655$$) {
  if($animationElems$$3_i$$655$$) {
    $DvtTimelineSeriesRenderer$$.$_animateItemRemoval$($items$$43$$, $series$$54$$, $animationElems$$3_i$$655$$)
  }else {
    for($animationElems$$3_i$$655$$ = 0;$animationElems$$3_i$$655$$ < $items$$43$$.length;$animationElems$$3_i$$655$$++) {
      var $item$$88$$ = $items$$43$$[$animationElems$$3_i$$655$$];
      $container$$193$$.removeChild($item$$88$$.$_displayable$);
      $series$$54$$.$isVertical$() || $container$$193$$.$feelers$.removeChild($item$$88$$.$_feeler$);
      var $startTime$$15$$ = $item$$88$$.$_startTime$, $endTime$$16$$ = $item$$88$$.$_endTime$;
      $endTime$$16$$ && $endTime$$16$$ != $startTime$$15$$ && $container$$193$$.$durations$.removeChild($item$$88$$.$_durationBar$)
    }
  }
};
$DvtTimelineSeriesRenderer$$.$_animateItemRemoval$ = function $$DvtTimelineSeriesRenderer$$$$_animateItemRemoval$$($items$$44$$, $series$$55$$, $animationElems$$4$$) {
  for(var $i$$656$$ = 0;$i$$656$$ < $items$$44$$.length;$i$$656$$++) {
    var $durationBar$$2_item$$89$$ = $items$$44$$[$i$$656$$], $bubble$$3_feeler$$6_startTime$$16$$ = $durationBar$$2_item$$89$$.$_displayable$;
    $series$$55$$.$isVertical$() ? $bubble$$3_feeler$$6_startTime$$16$$.$setTranslateX$($bubble$$3_feeler$$6_startTime$$16$$.$getTranslateX$() + $series$$55$$.$_canvasOffsetX$ + $series$$55$$.$_overflowOffset$) : $bubble$$3_feeler$$6_startTime$$16$$.$setTranslateY$($bubble$$3_feeler$$6_startTime$$16$$.$getTranslateY$() + $series$$55$$.$_canvasOffsetY$ + $series$$55$$.$_overflowOffset$);
    $animationElems$$4$$.push($bubble$$3_feeler$$6_startTime$$16$$);
    $series$$55$$.$isVertical$() || ($bubble$$3_feeler$$6_startTime$$16$$ = $durationBar$$2_item$$89$$.$_feeler$, $bubble$$3_feeler$$6_startTime$$16$$.$setTranslateY$($bubble$$3_feeler$$6_startTime$$16$$.$getTranslateY$() + $series$$55$$.$_canvasOffsetY$ + $series$$55$$.$_overflowOffset$), $animationElems$$4$$.push($bubble$$3_feeler$$6_startTime$$16$$));
    var $bubble$$3_feeler$$6_startTime$$16$$ = $durationBar$$2_item$$89$$.$_startTime$, $endTime$$17$$ = $durationBar$$2_item$$89$$.$_endTime$;
    $endTime$$17$$ && $endTime$$17$$ != $bubble$$3_feeler$$6_startTime$$16$$ && ($durationBar$$2_item$$89$$ = $durationBar$$2_item$$89$$.$_durationBar$, $series$$55$$.$isVertical$() ? $durationBar$$2_item$$89$$.$setTranslateX$($durationBar$$2_item$$89$$.$getTranslateX$() + $series$$55$$.$_canvasOffsetX$ + $series$$55$$.$_overflowOffset$) : $durationBar$$2_item$$89$$.$setTranslateY$($durationBar$$2_item$$89$$.$getTranslateY$() + $series$$55$$.$_canvasOffsetY$ + $series$$55$$.$_overflowOffset$), $animationElems$$4$$.push($durationBar$$2_item$$89$$))
  }
};

  return dvt;
});

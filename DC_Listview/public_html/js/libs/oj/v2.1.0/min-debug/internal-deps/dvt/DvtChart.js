/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
define(['./DvtToolkit', './DvtAxis', './DvtLegend', './DvtOverview'], function(dvt) {
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

dvt.$Chart$ = function $dvt$$Chart$$($context$$122$$, $callback$$52$$, $callbackObj$$24$$) {
  this.Init($context$$122$$, $callback$$52$$, $callbackObj$$24$$)
};
$goog$exportPath_$$("dvt.Chart", dvt.$Chart$);
dvt.$Obj$.$createSubclass$(dvt.$Chart$, dvt.$BaseComponent$);
dvt.$Chart$.newInstance = function $dvt$$Chart$$newInstance$($context$$123$$, $callback$$53$$, $callbackObj$$25$$) {
  return new dvt.$Chart$($context$$123$$, $callback$$53$$, $callbackObj$$25$$)
};
dvt.$Chart$.newInstance = dvt.$Chart$.newInstance;
dvt.$Chart$.$getDefaults$ = function $dvt$$Chart$$$getDefaults$$($skin$$1$$) {
  return(new $DvtChartDefaults$$).$getDefaults$($skin$$1$$)
};
dvt.$Chart$.getDefaults = dvt.$Chart$.$getDefaults$;
dvt.$Chart$.prototype.Init = function $dvt$$Chart$$$Init$($context$$124$$, $callback$$54$$, $callbackObj$$26$$) {
  dvt.$Chart$.$superclass$.Init.call(this, $context$$124$$, $callback$$54$$, $callbackObj$$26$$);
  this.$Defaults$ = new $DvtChartDefaults$$;
  this.$EventManager$ = new $DvtChartEventManager$$(this);
  this.$EventManager$.$addListeners$(this);
  dvt.$Agent$.$isTouchDevice$() || this.$EventManager$.$setKeyboardHandler$(this.$CreateKeyboardHandler$(this.$EventManager$));
  this.setId("chart1000" + Math.floor(1E9 * Math.random()));
  this.$pieChart$ = this.$dragButtons$ = this.$yScrollbar$ = this.$xScrollbar$ = this.$overview$ = this.$y2Axis$ = this.$yAxis$ = this.$xAxis$ = this.$legend$ = this.$_animation$ = $JSCompiler_alias_NULL$$;
  this.$Peers$ = [];
  this.$SeriesStyleArray$ = [];
  this.$Cache$ = {};
  this.$_numSelectedObjsInFront$ = this.$_numFrontObjs$ = 0;
  this.$_rawOptions$ = this.$_dataLabels$ = $JSCompiler_alias_NULL$$
};
dvt.$Chart$.prototype.$GetComponentDescription$ = function $dvt$$Chart$$$$GetComponentDescription$$() {
  var $options$$29$$ = this.$getOptions$(), $compName$$6$$ = dvt.$Bundle$.$getTranslation$($options$$29$$, "componentName", dvt.$Bundle$.$UTIL_PREFIX$, "CHART"), $compDesc$$ = "", $delimiter$$ = dvt.$Bundle$.$getTranslatedString$(dvt.$Bundle$.$UTIL_PREFIX$, "ARIA_LABEL_DESC_DELIMITER");
  $options$$29$$.title.text && ($compDesc$$ += this.$Options$.title.text, $options$$29$$.subtitle.text && ($compDesc$$ += $delimiter$$ + this.$Options$.subtitle.text));
  $options$$29$$.footnote.text && ($compDesc$$ = 0 == $compDesc$$.length ? this.$Options$.footnote.text : $compDesc$$.concat($delimiter$$, this.$Options$.footnote.text));
  return 0 < $compDesc$$.length ? dvt.$Bundle$.$getTranslation$($options$$29$$, "labelAndValue", dvt.$Bundle$.$UTIL_PREFIX$, "COLON_SEP_LIST", [$compName$$6$$, $compDesc$$]) : $compName$$6$$
};
dvt.$Chart$.prototype.$SetOptions$ = function $dvt$$Chart$$$$SetOptions$$($options$$30_popupBehaviors$$1_selectionMode$$2$$) {
  $options$$30_popupBehaviors$$1_selectionMode$$2$$ ? (this.$_rawOptions$ = $options$$30_popupBehaviors$$1_selectionMode$$2$$, this.$Options$ = this.$Defaults$.$calcOptions$($options$$30_popupBehaviors$$1_selectionMode$$2$$), "horizontalBar" == this.$Options$.type && (this.$Options$.type = "bar", this.$Options$.orientation = "horizontal"), $DvtChartDataUtils$$.$processDataObject$(this), dvt.$Agent$.$isEnvironmentBrowser$() || (this.$Options$.animationOnDisplay = "none", this.$Options$.animationOnDataChange = 
  "none")) : this.$Options$ || (this.$Options$ = this.$GetDefaults$());
  $options$$30_popupBehaviors$$1_selectionMode$$2$$ = this.$Options$.selectionMode;
  this.$_selectionHandler$ = "single" == $options$$30_popupBehaviors$$1_selectionMode$$2$$ ? new dvt.$SelectionHandler$(dvt.$SelectionHandler$.$TYPE_SINGLE$) : "multiple" == $options$$30_popupBehaviors$$1_selectionMode$$2$$ ? new dvt.$SelectionHandler$(dvt.$SelectionHandler$.$TYPE_MULTIPLE$) : $JSCompiler_alias_NULL$$;
  this.$EventManager$.$setSelectionHandler$(this.$_selectionHandler$);
  if($options$$30_popupBehaviors$$1_selectionMode$$2$$ = this.$Options$._spb) {
    this.$_popupBehaviors$ = {};
    for(var $stampId$$8$$ in $options$$30_popupBehaviors$$1_selectionMode$$2$$) {
      for(var $popupBehaviorArray$$ = $options$$30_popupBehaviors$$1_selectionMode$$2$$[$stampId$$8$$], $i$$273$$ = 0;$i$$273$$ < $popupBehaviorArray$$.length;$i$$273$$++) {
        this.$_popupBehaviors$[$stampId$$8$$] || (this.$_popupBehaviors$[$stampId$$8$$] = []);
        var $popupBehavior$$ = $popupBehaviorArray$$[$i$$273$$];
        this.$_popupBehaviors$[$stampId$$8$$].push(new dvt.$ShowPopupBehavior$($popupBehavior$$.popupId, $popupBehavior$$.triggerType, $popupBehavior$$.alignId, $popupBehavior$$.align))
      }
    }
  }
};
dvt.$Chart$.prototype.$render$ = function $dvt$$Chart$$$$render$$($options$$31_paSpace$$, $container$$20_width$$31$$, $animationDuration$$1_height$$27$$) {
  var $context$$125$$ = this.$getCtx$(), $animationOnDataChange$$ = this.$Options$ ? this.$Options$.animationOnDataChange : "none", $oldChart$$ = "none" != $animationOnDataChange$$ ? new $DvtChartDataChange$$(this) : $JSCompiler_alias_NULL$$, $focusState$$ = $JSCompiler_StaticMethods___cacheChartFocus$$(this);
  this.$__cleanUp$();
  this.$SetOptions$($options$$31_paSpace$$);
  !isNaN($container$$20_width$$31$$) && !isNaN($animationDuration$$1_height$$27$$) && (this.$Width$ = $container$$20_width$$31$$, this.$Height$ = $animationDuration$$1_height$$27$$);
  $container$$20_width$$31$$ = new dvt.$Container$($context$$125$$);
  this.$addChild$($container$$20_width$$31$$);
  $DvtChartRenderer$$.$render$(this, $container$$20_width$$31$$, new dvt.$Rectangle$(0, 0, this.$Width$, this.$Height$));
  $DvtChartTypeUtils$$.$isSpark$(this) && this.$EventManager$.$removeListeners$(this);
  this.$_animation$ && (this.$_animationStopped$ = $JSCompiler_alias_TRUE$$, this.$_animation$.stop());
  var $animationOnDisplay$$ = $DvtChartStyleUtils$$.$getAnimationOnDisplay$(this);
  $animationDuration$$1_height$$27$$ = $DvtChartStyleUtils$$.$getAnimationDuration$(this);
  var $bounds$$36$$ = new dvt.$Rectangle$(0, 0, this.$Width$, this.$Height$), $bBlackBoxUpdate$$ = $JSCompiler_alias_FALSE$$;
  this.$_container$ ? "none" != $animationOnDataChange$$ && $options$$31_paSpace$$ && ((this.$_animation$ = dvt.$BlackBoxAnimationHandler$.$getCombinedAnimation$($context$$125$$, $animationOnDataChange$$, this.$_container$, $container$$20_width$$31$$, $bounds$$36$$, $animationDuration$$1_height$$27$$)) ? $bBlackBoxUpdate$$ = $JSCompiler_alias_TRUE$$ : "auto" == $animationOnDataChange$$ && this.$getPlotArea$() && ($options$$31_paSpace$$ = this.$_plotAreaSpace$, this.$_delContainer$ = $DvtChartPlotAreaRenderer$$.$createClippedGroup$(this, 
  this.$_container$, new dvt.$Rectangle$(0, 0, $options$$31_paSpace$$.$w$, $options$$31_paSpace$$.$h$)), this.$_animation$ = $DvtChartAnimOnDC$$.$createAnimation$($oldChart$$, this, $animationOnDataChange$$, $animationDuration$$1_height$$27$$, this.$_delContainer$), 0 < this.$_delContainer$.$getNumChildren$() && this.$getPlotArea$().$addChild$(this.$_delContainer$))) : "none" != $animationOnDisplay$$ && (this.$_animation$ = dvt.$BlackBoxAnimationHandler$.$getInAnimation$($context$$125$$, $animationOnDisplay$$, 
  $container$$20_width$$31$$, $bounds$$36$$, $animationDuration$$1_height$$27$$), !this.$_animation$ && "auto" == $animationOnDisplay$$ && (this.$_animation$ = $DvtChartAnimOnDisplay$$.$createAnimation$(this, $animationOnDisplay$$, $animationDuration$$1_height$$27$$)));
  this.$_animation$ && (this.$EventManager$.$removeListeners$(this), dvt.$Playable$.$appendOnEnd$(this.$_animation$, this.$_onAnimationEnd$, this), this.$_animation$.play());
  $bBlackBoxUpdate$$ ? this.$_oldContainer$ = this.$_container$ : this.$_container$ && (this.removeChild(this.$_container$), this.$_container$.$destroy$(), this.$_container$ = $JSCompiler_alias_NULL$$);
  this.$_container$ = $container$$20_width$$31$$;
  this.$_dataCursor$ = $DvtChartRenderer$$.$renderDataCursor$(this);
  this.$UpdateAriaAttributes$();
  $JSCompiler_StaticMethods___restoreChartFocus$$(this, $focusState$$);
  this.$_animation$ || this.$RenderComplete$()
};
dvt.$Chart$.prototype.render = dvt.$Chart$.prototype.$render$;
dvt.$Chart$.prototype.$destroy$ = function $dvt$$Chart$$$$destroy$$() {
  this.$EventManager$ && (this.$EventManager$.$removeListeners$(this), this.$EventManager$.$destroy$(), this.$EventManager$ = $JSCompiler_alias_NULL$$);
  dvt.$Chart$.$superclass$.$destroy$.call(this)
};
dvt.$Chart$.prototype.destroy = dvt.$Chart$.prototype.$destroy$;
dvt.$Chart$.prototype.$__cleanUp$ = function $dvt$$Chart$$$$__cleanUp$$() {
  this.$_dataCursor$ && (this.removeChild(this.$_dataCursor$), this.$_dataCursor$ = $JSCompiler_alias_NULL$$);
  this.$EventManager$ && $JSCompiler_StaticMethods_hideHoverFeedback$$(this.$EventManager$);
  this.$Peers$ = [];
  this.$yScrollbar$ = this.$xScrollbar$ = $JSCompiler_alias_NULL$$;
  this.$dragButtons$ && (this.removeChild(this.$dragButtons$), this.$dragButtons$.$destroy$(), this.$dragButtons$ = $JSCompiler_alias_NULL$$, this.$EventManager$.$panButton$ = $JSCompiler_alias_NULL$$, this.$EventManager$.$zoomButton$ = $JSCompiler_alias_NULL$$, this.$EventManager$.$selectButton$ = $JSCompiler_alias_NULL$$);
  this.$_dataLabels$ = this.$_areaContainer$ = this.$_plotArea$ = $JSCompiler_alias_NULL$$;
  this.$Cache$ = {}
};
dvt.$Chart$.prototype.$_onAnimationEnd$ = function $dvt$$Chart$$$$_onAnimationEnd$$() {
  this.$_oldContainer$ && (this.removeChild(this.$_oldContainer$), this.$_oldContainer$.$destroy$(), this.$_oldContainer$ = $JSCompiler_alias_NULL$$);
  this.$_delContainer$ && 0 < this.$_delContainer$.$getNumChildren$() && this.$getPlotArea$().removeChild(this.$_delContainer$);
  this.$_delContainer$ = $JSCompiler_alias_NULL$$;
  this.$_animationStopped$ || this.$RenderComplete$();
  this.$_animationStopped$ = this.$_animation$ = $JSCompiler_alias_NULL$$;
  this.$EventManager$.$addListeners$(this)
};
dvt.$Chart$.prototype.$CreateKeyboardHandler$ = function $dvt$$Chart$$$$CreateKeyboardHandler$$($manager$$8$$) {
  return new $DvtChartKeyboardHandler$$($manager$$8$$, this)
};
dvt.$Chart$.prototype.$getAutomation$ = function $dvt$$Chart$$$$getAutomation$$() {
  return new $DvtChartAutomation$$(this)
};
dvt.$Chart$.prototype.getAutomation = dvt.$Chart$.prototype.$getAutomation$;
dvt.$Chart$.prototype.$getValuesAt$ = function $dvt$$Chart$$$$getValuesAt$$($x$$94$$, $y$$73$$) {
  var $paBounds_r$$2$$ = this.$_plotAreaSpace$, $relX_theta$$ = $x$$94$$ - $paBounds_r$$2$$.x, $relY$$ = $y$$73$$ - $paBounds_r$$2$$.y, $isPolar$$ = $DvtChartTypeUtils$$.$isPolar$(this), $isHoriz$$5$$ = $DvtChartTypeUtils$$.$isHorizontal$(this);
  return $isPolar$$ ? ($relX_theta$$ -= $paBounds_r$$2$$.$w$ / 2, $relY$$ -= $paBounds_r$$2$$.$h$ / 2, $paBounds_r$$2$$ = Math.sqrt($relX_theta$$ * $relX_theta$$ + $relY$$ * $relY$$), $relX_theta$$ = Math.atan2($relX_theta$$, -$relY$$), 0 > $relX_theta$$ && ($relX_theta$$ += 2 * Math.PI), {x:this.$xAxis$ ? this.$xAxis$.$getValueAt$($relX_theta$$) : $JSCompiler_alias_NULL$$, y:this.$yAxis$ ? this.$yAxis$.$getValueAt$($paBounds_r$$2$$) : $JSCompiler_alias_NULL$$}) : {x:this.$xAxis$ ? this.$xAxis$.$getValueAt$($isHoriz$$5$$ ? 
  $relY$$ : $relX_theta$$) : $JSCompiler_alias_NULL$$, y:this.$yAxis$ ? this.$yAxis$.$getValueAt$($isHoriz$$5$$ ? $relX_theta$$ : $relY$$) : $JSCompiler_alias_NULL$$, y2:this.$y2Axis$ ? this.$y2Axis$.$getValueAt$($isHoriz$$5$$ ? $relX_theta$$ : $relY$$) : $JSCompiler_alias_NULL$$}
};
dvt.$Chart$.prototype.getValuesAt = dvt.$Chart$.prototype.$getValuesAt$;
dvt.$Chart$.prototype.filter = function $dvt$$Chart$$$filter$($category$$2$$, $type$$92$$) {
  $DvtChartEventUtils$$.$setVisibility$(this, $category$$2$$, "out" == $type$$92$$ ? "hidden" : "visible");
  this.$render$(this.$Options$)
};
dvt.$Chart$.prototype.filter = dvt.$Chart$.prototype.filter;
dvt.$Chart$.prototype.$highlight$ = function $dvt$$Chart$$$$highlight$$($categories$$) {
  this.$getOptions$().highlightedCategories = dvt.$JsonUtils$.$clone$($categories$$);
  dvt.$CategoryRolloverHandler$.$highlight$($categories$$, this.$getObjects$(), "any" == this.$getOptions$().highlightMatch);
  this.$legend$ && this.$legend$.$highlight$($categories$$);
  this.$pieChart$ && this.$pieChart$.$highlight$($categories$$);
  this.$overview$ && this.$overview$.$_chart$.$highlight$($categories$$)
};
dvt.$Chart$.prototype.highlight = dvt.$Chart$.prototype.$highlight$;
dvt.$Chart$.prototype.select = function $dvt$$Chart$$$select$($selected$$11_selection$$5$$) {
  this.$getOptions$().selection = dvt.$JsonUtils$.$clone$($selected$$11_selection$$5$$);
  $selected$$11_selection$$5$$ = $DvtChartDataUtils$$.$getInitialSelection$(this);
  $DvtChartEventUtils$$.$setInitialSelection$(this, $selected$$11_selection$$5$$);
  this.$pieChart$ && this.$pieChart$.$setInitialSelection$()
};
dvt.$Chart$.prototype.select = dvt.$Chart$.prototype.select;
dvt.$Chart$.prototype.$positionDataCursor$ = function $dvt$$Chart$$$$positionDataCursor$$($paBounds$$1_position$$11$$) {
  var $handler$$3$$ = this.$getEventManager$().$_dataCursorHandler$;
  if($handler$$3$$) {
    if($paBounds$$1_position$$11$$) {
      var $paCoords_xCoord$$ = this.$xAxis$ && $paBounds$$1_position$$11$$.x != $JSCompiler_alias_NULL$$ ? this.$xAxis$.$getCoordAt$($paBounds$$1_position$$11$$.x) : $JSCompiler_alias_NULL$$, $yCoord$$1$$ = $JSCompiler_alias_NULL$$;
      $DvtChartTypeUtils$$.$isBLAC$(this) ? this.$yAxis$ && $paBounds$$1_position$$11$$.y != $JSCompiler_alias_NULL$$ ? $yCoord$$1$$ = this.$yAxis$.$getBoundedCoordAt$($paBounds$$1_position$$11$$.y) : this.$y2Axis$ && $paBounds$$1_position$$11$$.y2 != $JSCompiler_alias_NULL$$ && ($yCoord$$1$$ = this.$yAxis$.$getBoundedCoordAt$($paBounds$$1_position$$11$$.y2)) : $yCoord$$1$$ = this.$yAxis$ && $paBounds$$1_position$$11$$.y != $JSCompiler_alias_NULL$$ ? this.$yAxis$.$getCoordAt$($paBounds$$1_position$$11$$.y) : 
      $JSCompiler_alias_NULL$$;
      if($paCoords_xCoord$$ != $JSCompiler_alias_NULL$$ && $yCoord$$1$$ != $JSCompiler_alias_NULL$$) {
        $paBounds$$1_position$$11$$ = this.$_plotAreaSpace$;
        $paCoords_xCoord$$ = $DvtChartPlotAreaRenderer$$.$convertAxisCoord$(this, new dvt.$Point$($paCoords_xCoord$$, $yCoord$$1$$), $paBounds$$1_position$$11$$);
        $JSCompiler_StaticMethods_processMove$$($handler$$3$$, new dvt.$Point$($paBounds$$1_position$$11$$.x + $paCoords_xCoord$$.x, $paBounds$$1_position$$11$$.y + $paCoords_xCoord$$.y), $JSCompiler_alias_TRUE$$);
        return
      }
    }
    $JSCompiler_StaticMethods__removeDataCursor$$($handler$$3$$, $JSCompiler_alias_TRUE$$)
  }
};
dvt.$Chart$.prototype.positionDataCursor = dvt.$Chart$.prototype.$positionDataCursor$;
$JSCompiler_prototypeAlias$$ = dvt.$Chart$.prototype;
$JSCompiler_prototypeAlias$$.$getEventManager$ = $JSCompiler_get$$("$EventManager$");
function $JSCompiler_StaticMethods_getFromCachedMap2D$$($JSCompiler_StaticMethods_getFromCachedMap2D$self$$, $mapKey$$2$$, $itemKeyA$$, $itemKeyB$$) {
  var $map$$5$$ = $JSCompiler_StaticMethods_getFromCachedMap2D$self$$.$Cache$[$mapKey$$2$$];
  $map$$5$$ || ($map$$5$$ = new dvt.$Map2D$, $JSCompiler_StaticMethods_getFromCachedMap2D$self$$.$Cache$[$mapKey$$2$$] = $map$$5$$);
  return $map$$5$$.get($itemKeyA$$, $itemKeyB$$)
}
function $JSCompiler_StaticMethods_putToCachedMap2D$$($JSCompiler_StaticMethods_putToCachedMap2D$self$$, $mapKey$$3$$, $itemKeyA$$1$$, $itemKeyB$$1$$, $value$$101$$) {
  var $map$$6$$ = $JSCompiler_StaticMethods_putToCachedMap2D$self$$.$Cache$[$mapKey$$3$$];
  $map$$6$$ || ($map$$6$$ = new dvt.$Map2D$, $JSCompiler_StaticMethods_putToCachedMap2D$self$$.$Cache$[$mapKey$$3$$] = $map$$6$$);
  $map$$6$$.put($itemKeyA$$1$$, $itemKeyB$$1$$, $value$$101$$)
}
$JSCompiler_prototypeAlias$$.$processEvent$ = function $$JSCompiler_prototypeAlias$$$$processEvent$$($event$$188$$, $source$$21$$) {
  var $oldItems_type$$93$$ = $event$$188$$.type;
  if("categoryHide" == $oldItems_type$$93$$ || "categoryShow" == $oldItems_type$$93$$) {
    this.filter($event$$188$$.category, "categoryHide" == $oldItems_type$$93$$ ? "out" : "in")
  }else {
    if("categoryHighlight" == $oldItems_type$$93$$) {
      this != $source$$21$$ && this.$highlight$($event$$188$$.categories), this.$legend$ && this.$legend$ != $source$$21$$ && this.$legend$.$processEvent$($event$$188$$, $source$$21$$)
    }else {
      if("selection" == $oldItems_type$$93$$) {
        $event$$188$$ = this.$_processSelectionEvent$($event$$188$$)
      }else {
        if($oldItems_type$$93$$ == dvt.$PanZoomEvent$.$TYPE$) {
          var $addedSet_bounds$$inline_2704_event$$inline_2700_selection$$inline_2708$$ = $event$$188$$, $actionStart$$inline_2703_newItems_removedSet_subtype$$inline_2701$$ = $addedSet_bounds$$inline_2704_event$$inline_2700_selection$$inline_2708$$.$getSubtype$(), $actionDone$$inline_2702_event$$inline_2707_newSet_options$$33_subtype$$3$$ = $actionStart$$inline_2703_newItems_removedSet_subtype$$inline_2701$$ == dvt.$PanZoomEvent$.$SUBTYPE_PAN_END$ || $actionStart$$inline_2703_newItems_removedSet_subtype$$inline_2701$$ == 
          dvt.$PanZoomEvent$.$SUBTYPE_ZOOM$ || $actionStart$$inline_2703_newItems_removedSet_subtype$$inline_2701$$ == dvt.$PanZoomEvent$.$SUBTYPE_PINCH_END$, $actionStart$$inline_2703_newItems_removedSet_subtype$$inline_2701$$ = $actionStart$$inline_2703_newItems_removedSet_subtype$$inline_2701$$ == dvt.$PanZoomEvent$.$SUBTYPE_PAN_START$ || $actionStart$$inline_2703_newItems_removedSet_subtype$$inline_2701$$ == dvt.$PanZoomEvent$.$SUBTYPE_PINCH_START$;
          dvt.$Agent$.$isTouchDevice$() && ($actionStart$$inline_2703_newItems_removedSet_subtype$$inline_2701$$ && this.$_panZoomTarget$ != this.$_plotArea$) && (this.$_container$.removeChild(this.$_panZoomTarget$), this.$_panZoomTarget$ = this.$_plotArea$);
          $DvtChartEventUtils$$.$isLiveScroll$(this) ? ($addedSet_bounds$$inline_2704_event$$inline_2700_selection$$inline_2708$$ = $DvtChartEventUtils$$.$getAxisBoundsByDelta$(this, $addedSet_bounds$$inline_2704_event$$inline_2700_selection$$inline_2708$$.$dxMin$, $addedSet_bounds$$inline_2704_event$$inline_2700_selection$$inline_2708$$.$dxMax$, $addedSet_bounds$$inline_2704_event$$inline_2700_selection$$inline_2708$$.$dyMin$, $addedSet_bounds$$inline_2704_event$$inline_2700_selection$$inline_2708$$.$dyMax$), 
          $actionStart$$inline_2703_newItems_removedSet_subtype$$inline_2701$$ || ($JSCompiler_StaticMethods__setViewport$$(this, $addedSet_bounds$$inline_2704_event$$inline_2700_selection$$inline_2708$$, $actionDone$$inline_2702_event$$inline_2707_newSet_options$$33_subtype$$3$$), $JSCompiler_StaticMethods__setScrollbarViewport$$(this, $addedSet_bounds$$inline_2704_event$$inline_2700_selection$$inline_2708$$))) : ($addedSet_bounds$$inline_2704_event$$inline_2700_selection$$inline_2708$$ = $DvtChartEventUtils$$.$getAxisBoundsByDelta$(this, 
          $addedSet_bounds$$inline_2704_event$$inline_2700_selection$$inline_2708$$.$dxMinTotal$, $addedSet_bounds$$inline_2704_event$$inline_2700_selection$$inline_2708$$.$dxMaxTotal$, $addedSet_bounds$$inline_2704_event$$inline_2700_selection$$inline_2708$$.$dyMinTotal$, $addedSet_bounds$$inline_2704_event$$inline_2700_selection$$inline_2708$$.$dyMaxTotal$), $JSCompiler_StaticMethods__setScrollbarViewport$$(this, $addedSet_bounds$$inline_2704_event$$inline_2700_selection$$inline_2708$$), $actionDone$$inline_2702_event$$inline_2707_newSet_options$$33_subtype$$3$$ && 
          $JSCompiler_StaticMethods__setViewport$$(this, $addedSet_bounds$$inline_2704_event$$inline_2700_selection$$inline_2708$$, $actionDone$$inline_2702_event$$inline_2707_newSet_options$$33_subtype$$3$$));
          $actionDone$$inline_2702_event$$inline_2707_newSet_options$$33_subtype$$3$$ && ($DvtChartRenderer$$.$_setEventHandlers$(this), this.$_panZoomTarget$ != this.$_plotArea$ && (this.$_container$.removeChild(this.$_panZoomTarget$), this.$_panZoomTarget$ = $JSCompiler_alias_NULL$$));
          $event$$188$$ = $DvtChartTypeUtils$$.$isBLAC$(this) ? dvt.$EventFactory$.$newChartViewportChangeEvent$($actionDone$$inline_2702_event$$inline_2707_newSet_options$$33_subtype$$3$$, $addedSet_bounds$$inline_2704_event$$inline_2700_selection$$inline_2708$$.$xMin$, $addedSet_bounds$$inline_2704_event$$inline_2700_selection$$inline_2708$$.$xMax$, $addedSet_bounds$$inline_2704_event$$inline_2700_selection$$inline_2708$$.$startGroup$, $addedSet_bounds$$inline_2704_event$$inline_2700_selection$$inline_2708$$.$endGroup$, 
          $JSCompiler_alias_NULL$$, $JSCompiler_alias_NULL$$) : dvt.$EventFactory$.$newChartViewportChangeEvent$($actionDone$$inline_2702_event$$inline_2707_newSet_options$$33_subtype$$3$$, $addedSet_bounds$$inline_2704_event$$inline_2700_selection$$inline_2708$$.$xMin$, $addedSet_bounds$$inline_2704_event$$inline_2700_selection$$inline_2708$$.$xMax$, $JSCompiler_alias_NULL$$, $JSCompiler_alias_NULL$$, $addedSet_bounds$$inline_2704_event$$inline_2700_selection$$inline_2708$$.$yMin$, $addedSet_bounds$$inline_2704_event$$inline_2700_selection$$inline_2708$$.$yMax$)
        }else {
          if($oldItems_type$$93$$ == dvt.$MarqueeEvent$.$TYPE$) {
            $event$$188$$ = $JSCompiler_StaticMethods__processMarqueeEvent$$(this, $event$$188$$)
          }else {
            if($oldItems_type$$93$$ == dvt.$OverviewEvent$.$TYPE$) {
              $actionDone$$inline_2702_event$$inline_2707_newSet_options$$33_subtype$$3$$ = $event$$188$$.$getSubType$();
              if($actionDone$$inline_2702_event$$inline_2707_newSet_options$$33_subtype$$3$$ == dvt.$OverviewEvent$.$SUBTYPE_PRE_RANGECHANGE$) {
                return
              }
              $event$$188$$ = $JSCompiler_StaticMethods__processScrollbarEvent$$(this, $event$$188$$.$getNewStartTime$(), $event$$188$$.$getNewEndTime$(), $actionDone$$inline_2702_event$$inline_2707_newSet_options$$33_subtype$$3$$ == dvt.$OverviewEvent$.$SUBTYPE_SCROLL_TIME$ || $actionDone$$inline_2702_event$$inline_2707_newSet_options$$33_subtype$$3$$ == dvt.$OverviewEvent$.$SUBTYPE_SCROLL_END$ || $actionDone$$inline_2702_event$$inline_2707_newSet_options$$33_subtype$$3$$ == dvt.$OverviewEvent$.$SUBTYPE_RANGECHANGE$, 
              $source$$21$$)
            }else {
              $oldItems_type$$93$$ == dvt.$SimpleScrollbarEvent$.$TYPE$ ? $event$$188$$ = $JSCompiler_StaticMethods__processScrollbarEvent$$(this, $event$$188$$.$_newMin$, $event$$188$$.$_newMax$, $event$$188$$.$getSubtype$() == dvt.$SimpleScrollbarEvent$.$SUBTYPE_END$, $source$$21$$) : "adfShowPopup" == $oldItems_type$$93$$ && ($actionDone$$inline_2702_event$$inline_2707_newSet_options$$33_subtype$$3$$ = $event$$188$$, "mouseHover" != $actionDone$$inline_2702_event$$inline_2707_newSet_options$$33_subtype$$3$$.triggerType && 
              (this.$isSelectionSupported$() && 0 < this.$getSelectionHandler$().$_selection$.length) && ($addedSet_bounds$$inline_2704_event$$inline_2700_selection$$inline_2708$$ = $DvtChartEventUtils$$.$processIds$(this, this.$getSelectionHandler$().$getSelectedIds$()), $actionDone$$inline_2702_event$$inline_2707_newSet_options$$33_subtype$$3$$ = dvt.$EventFactory$.$newAdfShowPopupEvent$($actionDone$$inline_2702_event$$inline_2707_newSet_options$$33_subtype$$3$$.showPopupBehavior, $actionDone$$inline_2702_event$$inline_2707_newSet_options$$33_subtype$$3$$.launcherBounds, 
              $actionDone$$inline_2702_event$$inline_2707_newSet_options$$33_subtype$$3$$.launcherId), $actionDone$$inline_2702_event$$inline_2707_newSet_options$$33_subtype$$3$$[dvt.$BaseComponentEvent$.$CLIENT_ROW_KEY$] = $addedSet_bounds$$inline_2704_event$$inline_2700_selection$$inline_2708$$), $event$$188$$ = $actionDone$$inline_2702_event$$inline_2707_newSet_options$$33_subtype$$3$$)
            }
          }
        }
      }
    }
  }
  if("selection" == $oldItems_type$$93$$) {
    $actionDone$$inline_2702_event$$inline_2707_newSet_options$$33_subtype$$3$$ = this.$getOptions$();
    $oldItems_type$$93$$ = $actionDone$$inline_2702_event$$inline_2707_newSet_options$$33_subtype$$3$$.selection;
    $actionStart$$inline_2703_newItems_removedSet_subtype$$inline_2701$$ = $DvtChartDataUtils$$.$getCurrentSelection$(this);
    $event$$188$$.complete && ($actionDone$$inline_2702_event$$inline_2707_newSet_options$$33_subtype$$3$$.selection = $actionStart$$inline_2703_newItems_removedSet_subtype$$inline_2701$$);
    var $oldItems_type$$93$$ = $oldItems_type$$93$$ ? $oldItems_type$$93$$ : [], $actionStart$$inline_2703_newItems_removedSet_subtype$$inline_2701$$ = $actionStart$$inline_2703_newItems_removedSet_subtype$$inline_2701$$ ? $actionStart$$inline_2703_newItems_removedSet_subtype$$inline_2701$$ : [], $newIndex$$1_oldIndex$$, $oldItemId_oldSet$$ = {};
    for($newIndex$$1_oldIndex$$ = 0;$newIndex$$1_oldIndex$$ < $oldItems_type$$93$$.length;$newIndex$$1_oldIndex$$++) {
      $oldItemId_oldSet$$[$oldItems_type$$93$$[$newIndex$$1_oldIndex$$].id] = $JSCompiler_alias_TRUE$$
    }
    $actionDone$$inline_2702_event$$inline_2707_newSet_options$$33_subtype$$3$$ = {};
    for($newIndex$$1_oldIndex$$ = 0;$newIndex$$1_oldIndex$$ < $actionStart$$inline_2703_newItems_removedSet_subtype$$inline_2701$$.length;$newIndex$$1_oldIndex$$++) {
      $actionDone$$inline_2702_event$$inline_2707_newSet_options$$33_subtype$$3$$[$actionStart$$inline_2703_newItems_removedSet_subtype$$inline_2701$$[$newIndex$$1_oldIndex$$].id] = $JSCompiler_alias_TRUE$$
    }
    $addedSet_bounds$$inline_2704_event$$inline_2700_selection$$inline_2708$$ = {};
    for($newIndex$$1_oldIndex$$ = 0;$newIndex$$1_oldIndex$$ < $actionStart$$inline_2703_newItems_removedSet_subtype$$inline_2701$$.length;$newIndex$$1_oldIndex$$++) {
      var $newItemId$$ = $actionStart$$inline_2703_newItems_removedSet_subtype$$inline_2701$$[$newIndex$$1_oldIndex$$].id;
      $oldItemId_oldSet$$[$newItemId$$] || ($addedSet_bounds$$inline_2704_event$$inline_2700_selection$$inline_2708$$[$newItemId$$] = $JSCompiler_alias_TRUE$$)
    }
    $actionStart$$inline_2703_newItems_removedSet_subtype$$inline_2701$$ = {};
    for($newIndex$$1_oldIndex$$ = 0;$newIndex$$1_oldIndex$$ < $oldItems_type$$93$$.length;$newIndex$$1_oldIndex$$++) {
      $oldItemId_oldSet$$ = $oldItems_type$$93$$[$newIndex$$1_oldIndex$$].id, $actionDone$$inline_2702_event$$inline_2707_newSet_options$$33_subtype$$3$$[$oldItemId_oldSet$$] || ($actionStart$$inline_2703_newItems_removedSet_subtype$$inline_2701$$[$oldItemId_oldSet$$] = $JSCompiler_alias_TRUE$$)
    }
    $event$$188$$.addedSet = $addedSet_bounds$$inline_2704_event$$inline_2700_selection$$inline_2708$$;
    $event$$188$$.removedSet = $actionStart$$inline_2703_newItems_removedSet_subtype$$inline_2701$$
  }
  $event$$188$$ && this.dispatchEvent($event$$188$$)
};
$JSCompiler_prototypeAlias$$.$_processSelectionEvent$ = function $$JSCompiler_prototypeAlias$$$$_processSelectionEvent$$($event$$189_selection$$6$$) {
  $event$$189_selection$$6$$ = $DvtChartEventUtils$$.$processIds$(this, $event$$189_selection$$6$$.selection);
  $JSCompiler_StaticMethods__updateOverviewSelection$$(this);
  return dvt.$EventFactory$.$newChartSelectionEvent$($event$$189_selection$$6$$, $JSCompiler_alias_TRUE$$)
};
function $JSCompiler_StaticMethods__processMarqueeEvent$$($JSCompiler_StaticMethods__processMarqueeEvent$self$$, $event$$191$$) {
  var $subtype$$5$$ = $event$$191$$.$getSubtype$(), $bounds$$38_em_selectionEvent_selectionHandler$$1$$ = $JSCompiler_StaticMethods__processMarqueeEvent$self$$.$EventManager$;
  $DvtChartEventUtils$$.$adjustBounds$($event$$191$$);
  if("select" == $bounds$$38_em_selectionEvent_selectionHandler$$1$$.$_dragMode$) {
    $bounds$$38_em_selectionEvent_selectionHandler$$1$$ = $bounds$$38_em_selectionEvent_selectionHandler$$1$$.$getSelectionHandler$();
    if($subtype$$5$$ == dvt.$MarqueeEvent$.$SUBTYPE_START$) {
      $JSCompiler_StaticMethods__processMarqueeEvent$self$$.$_initSelection$ = $event$$191$$.ctrlKey ? $bounds$$38_em_selectionEvent_selectionHandler$$1$$.$getSelectedIds$() : []
    }else {
      var $selection$$7_targets$$2$$ = $DvtChartEventUtils$$.$getBoundedObjects$($JSCompiler_StaticMethods__processMarqueeEvent$self$$, $event$$191$$);
      $bounds$$38_em_selectionEvent_selectionHandler$$1$$.$processInitialSelections$($JSCompiler_StaticMethods__processMarqueeEvent$self$$.$_initSelection$, $JSCompiler_StaticMethods_getChartObjPeers$$($JSCompiler_StaticMethods__processMarqueeEvent$self$$));
      $bounds$$38_em_selectionEvent_selectionHandler$$1$$.$processGroupSelection$($selection$$7_targets$$2$$)
    }
    $selection$$7_targets$$2$$ = $DvtChartEventUtils$$.$getSelectedObjects$($JSCompiler_StaticMethods__processMarqueeEvent$self$$, $event$$191$$, $bounds$$38_em_selectionEvent_selectionHandler$$1$$);
    $bounds$$38_em_selectionEvent_selectionHandler$$1$$ = $DvtChartEventUtils$$.$getAxisBounds$($JSCompiler_StaticMethods__processMarqueeEvent$self$$, $event$$191$$, $JSCompiler_alias_FALSE$$);
    $bounds$$38_em_selectionEvent_selectionHandler$$1$$ = dvt.$EventFactory$.$newChartSelectionEvent$($selection$$7_targets$$2$$, $subtype$$5$$ == dvt.$MarqueeEvent$.$SUBTYPE_END$ ? $JSCompiler_alias_TRUE$$ : $JSCompiler_alias_FALSE$$, $bounds$$38_em_selectionEvent_selectionHandler$$1$$.$xMin$, $bounds$$38_em_selectionEvent_selectionHandler$$1$$.$xMax$, $bounds$$38_em_selectionEvent_selectionHandler$$1$$.$startGroup$, $bounds$$38_em_selectionEvent_selectionHandler$$1$$.$endGroup$, $bounds$$38_em_selectionEvent_selectionHandler$$1$$.$yMin$, 
    $bounds$$38_em_selectionEvent_selectionHandler$$1$$.$yMax$, $bounds$$38_em_selectionEvent_selectionHandler$$1$$.$y2Min$, $bounds$$38_em_selectionEvent_selectionHandler$$1$$.$y2Max$);
    $subtype$$5$$ == dvt.$MarqueeEvent$.$SUBTYPE_END$ && $JSCompiler_StaticMethods__updateOverviewSelection$$($JSCompiler_StaticMethods__processMarqueeEvent$self$$);
    return $bounds$$38_em_selectionEvent_selectionHandler$$1$$
  }
  if("zoom" == $bounds$$38_em_selectionEvent_selectionHandler$$1$$.$_dragMode$) {
    if($subtype$$5$$ != dvt.$MarqueeEvent$.$SUBTYPE_END$) {
      return $JSCompiler_alias_NULL$$
    }
    $bounds$$38_em_selectionEvent_selectionHandler$$1$$ = $DvtChartEventUtils$$.$getAxisBounds$($JSCompiler_StaticMethods__processMarqueeEvent$self$$, $event$$191$$, $JSCompiler_alias_TRUE$$);
    $JSCompiler_StaticMethods__setViewport$$($JSCompiler_StaticMethods__processMarqueeEvent$self$$, $bounds$$38_em_selectionEvent_selectionHandler$$1$$, $JSCompiler_alias_TRUE$$);
    $JSCompiler_StaticMethods__setScrollbarViewport$$($JSCompiler_StaticMethods__processMarqueeEvent$self$$, $bounds$$38_em_selectionEvent_selectionHandler$$1$$);
    $DvtChartRenderer$$.$_setEventHandlers$($JSCompiler_StaticMethods__processMarqueeEvent$self$$);
    return $DvtChartTypeUtils$$.$isBLAC$($JSCompiler_StaticMethods__processMarqueeEvent$self$$) ? dvt.$EventFactory$.$newChartViewportChangeEvent$($JSCompiler_alias_TRUE$$, $bounds$$38_em_selectionEvent_selectionHandler$$1$$.$xMin$, $bounds$$38_em_selectionEvent_selectionHandler$$1$$.$xMax$, $bounds$$38_em_selectionEvent_selectionHandler$$1$$.$startGroup$, $bounds$$38_em_selectionEvent_selectionHandler$$1$$.$endGroup$, $JSCompiler_alias_NULL$$, $JSCompiler_alias_NULL$$) : dvt.$EventFactory$.$newChartViewportChangeEvent$($JSCompiler_alias_TRUE$$, 
    $bounds$$38_em_selectionEvent_selectionHandler$$1$$.$xMin$, $bounds$$38_em_selectionEvent_selectionHandler$$1$$.$xMax$, $JSCompiler_alias_NULL$$, $JSCompiler_alias_NULL$$, $bounds$$38_em_selectionEvent_selectionHandler$$1$$.$yMin$, $bounds$$38_em_selectionEvent_selectionHandler$$1$$.$yMax$)
  }
  return $JSCompiler_alias_NULL$$
}
function $JSCompiler_StaticMethods__processScrollbarEvent$$($JSCompiler_StaticMethods__processScrollbarEvent$self_startEndGroup$$, $start$$21$$, $end$$13$$, $actionDone$$2$$, $source$$22$$) {
  var $axis$$24$$ = $source$$22$$ == $JSCompiler_StaticMethods__processScrollbarEvent$self_startEndGroup$$.$yScrollbar$ ? $JSCompiler_StaticMethods__processScrollbarEvent$self_startEndGroup$$.$yAxis$ : $JSCompiler_StaticMethods__processScrollbarEvent$self_startEndGroup$$.$xAxis$;
  $start$$21$$ = $axis$$24$$.$linearToActual$($start$$21$$);
  $end$$13$$ = $axis$$24$$.$linearToActual$($end$$13$$);
  if($DvtChartEventUtils$$.$isLiveScroll$($JSCompiler_StaticMethods__processScrollbarEvent$self_startEndGroup$$) || $actionDone$$2$$) {
    $source$$22$$ == $JSCompiler_StaticMethods__processScrollbarEvent$self_startEndGroup$$.$yScrollbar$ ? $JSCompiler_StaticMethods__setViewport$$($JSCompiler_StaticMethods__processScrollbarEvent$self_startEndGroup$$, {$yMin$:$start$$21$$, $yMax$:$end$$13$$}, $actionDone$$2$$) : $JSCompiler_StaticMethods__setViewport$$($JSCompiler_StaticMethods__processScrollbarEvent$self_startEndGroup$$, {$xMin$:$start$$21$$, $xMax$:$end$$13$$}, $actionDone$$2$$)
  }
  if($source$$22$$ == $JSCompiler_StaticMethods__processScrollbarEvent$self_startEndGroup$$.$yScrollbar$) {
    return dvt.$EventFactory$.$newChartViewportChangeEvent$($actionDone$$2$$, $JSCompiler_alias_NULL$$, $JSCompiler_alias_NULL$$, $JSCompiler_alias_NULL$$, $JSCompiler_alias_NULL$$, $start$$21$$, $end$$13$$)
  }
  $JSCompiler_StaticMethods__processScrollbarEvent$self_startEndGroup$$ = $DvtChartEventUtils$$.$getAxisStartEndGroup$($JSCompiler_StaticMethods__processScrollbarEvent$self_startEndGroup$$.$xAxis$, $start$$21$$, $end$$13$$);
  return dvt.$EventFactory$.$newChartViewportChangeEvent$($actionDone$$2$$, $start$$21$$, $end$$13$$, $JSCompiler_StaticMethods__processScrollbarEvent$self_startEndGroup$$.$startGroup$, $JSCompiler_StaticMethods__processScrollbarEvent$self_startEndGroup$$.$endGroup$, $JSCompiler_alias_NULL$$, $JSCompiler_alias_NULL$$)
}
function $JSCompiler_StaticMethods__updateOverviewSelection$$($JSCompiler_StaticMethods__updateOverviewSelection$self$$) {
  if($JSCompiler_StaticMethods__updateOverviewSelection$self$$.$overview$) {
    var $ovChart$$ = $JSCompiler_StaticMethods__updateOverviewSelection$self$$.$overview$.$_chart$;
    $ovChart$$.$getOptions$().selection = $DvtChartDataUtils$$.$getCurrentSelection$($JSCompiler_StaticMethods__updateOverviewSelection$self$$);
    $ovChart$$.$render$()
  }
}
function $JSCompiler_StaticMethods_changeOption$$($JSCompiler_StaticMethods_changeOption$self$$, $value$$102$$) {
  $JSCompiler_StaticMethods_changeOption$self$$.$getOptions$().dataCursorPosition = $value$$102$$;
  $JSCompiler_StaticMethods_changeOption$self$$.dispatchEvent(dvt.$EventFactory$.$newOptionChangeEvent$($value$$102$$))
}
$JSCompiler_prototypeAlias$$.$registerObject$ = function $$JSCompiler_prototypeAlias$$$$registerObject$$($peer$$1$$) {
  this.$Peers$.push($peer$$1$$)
};
$JSCompiler_prototypeAlias$$.$getObjects$ = $JSCompiler_get$$("$Peers$");
function $JSCompiler_StaticMethods_getChartObjPeers$$($JSCompiler_StaticMethods_getChartObjPeers$self$$) {
  for(var $chartObjPeers$$ = [], $i$$274$$ = 0;$i$$274$$ < $JSCompiler_StaticMethods_getChartObjPeers$self$$.$Peers$.length;$i$$274$$++) {
    $JSCompiler_StaticMethods_getChartObjPeers$self$$.$Peers$[$i$$274$$] instanceof $DvtChartObjPeer$$ && $chartObjPeers$$.push($JSCompiler_StaticMethods_getChartObjPeers$self$$.$Peers$[$i$$274$$])
  }
  return $chartObjPeers$$
}
function $JSCompiler_StaticMethods_getObject$$($JSCompiler_StaticMethods_getObject$self$$, $seriesIndex$$, $groupIndex$$2$$) {
  for(var $i$$276$$ = 0;$i$$276$$ < $JSCompiler_StaticMethods_getObject$self$$.$Peers$.length;$i$$276$$++) {
    if($JSCompiler_StaticMethods_getObject$self$$.$Peers$[$i$$276$$] instanceof $DvtChartObjPeer$$ && $JSCompiler_StaticMethods_getObject$self$$.$Peers$[$i$$276$$].$getSeriesIndex$() == $seriesIndex$$ && $JSCompiler_StaticMethods_getObject$self$$.$Peers$[$i$$276$$].$getGroupIndex$() == $groupIndex$$2$$) {
      return $JSCompiler_StaticMethods_getObject$self$$.$Peers$[$i$$276$$]
    }
  }
  return $JSCompiler_alias_NULL$$
}
$JSCompiler_prototypeAlias$$.getWidth = $JSCompiler_get$$("$Width$");
$JSCompiler_prototypeAlias$$.getHeight = $JSCompiler_get$$("$Height$");
$JSCompiler_prototypeAlias$$.$getPlotArea$ = $JSCompiler_get$$("$_plotArea$");
$JSCompiler_prototypeAlias$$.$getType$ = function $$JSCompiler_prototypeAlias$$$$getType$$() {
  return this.$getOptions$().type
};
$JSCompiler_prototypeAlias$$.$getSkin$ = function $$JSCompiler_prototypeAlias$$$$getSkin$$() {
  return this.$getOptions$().skin
};
function $JSCompiler_StaticMethods_getGapWidthRatio$$($JSCompiler_StaticMethods_getGapWidthRatio$self$$) {
  var $options$$34$$ = $JSCompiler_StaticMethods_getGapWidthRatio$self$$.$getOptions$();
  return $options$$34$$.layout.gapWidthRatio !== $JSCompiler_alias_NULL$$ && !isNaN($options$$34$$.layout.gapWidthRatio) ? $options$$34$$.layout.gapWidthRatio : Math.min($JSCompiler_StaticMethods_getGapWidthRatio$self$$.$Width$ / 400, 1)
}
function $JSCompiler_StaticMethods_getGapHeightRatio$$($JSCompiler_StaticMethods_getGapHeightRatio$self$$) {
  var $options$$35$$ = $JSCompiler_StaticMethods_getGapHeightRatio$self$$.$getOptions$();
  return $options$$35$$.layout.gapHeightRatio !== $JSCompiler_alias_NULL$$ && !isNaN($options$$35$$.layout.gapHeightRatio) ? $options$$35$$.layout.gapHeightRatio : Math.min($JSCompiler_StaticMethods_getGapHeightRatio$self$$.$Height$ / 300, 1)
}
$JSCompiler_prototypeAlias$$.$getSelectionHandler$ = $JSCompiler_get$$("$_selectionHandler$");
$JSCompiler_prototypeAlias$$.$isSelectionSupported$ = function $$JSCompiler_prototypeAlias$$$$isSelectionSupported$$() {
  return this.$_selectionHandler$ ? $JSCompiler_alias_TRUE$$ : $JSCompiler_alias_FALSE$$
};
$JSCompiler_prototypeAlias$$.$getShowPopupBehaviors$ = function $$JSCompiler_prototypeAlias$$$$getShowPopupBehaviors$$($stampId$$9$$) {
  return this.$_popupBehaviors$ ? this.$_popupBehaviors$[$stampId$$9$$] : $JSCompiler_alias_NULL$$
};
$JSCompiler_prototypeAlias$$.$bringToFrontOfSelection$ = function $$JSCompiler_prototypeAlias$$$$bringToFrontOfSelection$$($detObj$$) {
  var $par$$ = $detObj$$.getParent();
  if($par$$) {
    var $parentChildCount$$ = $par$$.$getNumChildren$();
    1 < $parentChildCount$$ - this.$_numFrontObjs$ && ($par$$.removeChild($detObj$$), $par$$.$addChildAt$($detObj$$, $parentChildCount$$ - this.$_numFrontObjs$ - 1))
  }
  (!$detObj$$.$isSelected$() || !$detObj$$.$IsShowingHoverEffect$) && this.$_numSelectedObjsInFront$++
};
$JSCompiler_prototypeAlias$$.$pushToBackOfSelection$ = function $$JSCompiler_prototypeAlias$$$$pushToBackOfSelection$$($detObj$$1$$) {
  0 < this.$_numSelectedObjsInFront$ && this.$_numSelectedObjsInFront$--;
  var $par$$1$$ = $detObj$$1$$.getParent();
  if($par$$1$$) {
    var $newIndex$$3$$ = $par$$1$$.$getNumChildren$() - this.$_numFrontObjs$ - 1 - this.$_numSelectedObjsInFront$;
    0 <= $newIndex$$3$$ && ($par$$1$$.removeChild($detObj$$1$$), $par$$1$$.$addChildAt$($detObj$$1$$, $newIndex$$3$$))
  }
};
function $JSCompiler_StaticMethods__setViewport$$($JSCompiler_StaticMethods__setViewport$self$$, $bounds$$39$$, $actionDone$$3$$) {
  $bounds$$39$$.$xMax$ != $JSCompiler_alias_NULL$$ && ($JSCompiler_StaticMethods__setViewport$self$$.$Options$.xAxis.viewportMax = $bounds$$39$$.$xMax$);
  $bounds$$39$$.$xMin$ != $JSCompiler_alias_NULL$$ && ($JSCompiler_StaticMethods__setViewport$self$$.$Options$.xAxis.viewportMin = $bounds$$39$$.$xMin$);
  $DvtChartTypeUtils$$.$isBLAC$($JSCompiler_StaticMethods__setViewport$self$$) ? ($JSCompiler_StaticMethods__setViewport$self$$.$Options$.xAxis.viewportStartGroup = $JSCompiler_alias_NULL$$, $JSCompiler_StaticMethods__setViewport$self$$.$Options$.xAxis.viewportEndGroup = $JSCompiler_alias_NULL$$, $JSCompiler_StaticMethods__setViewport$self$$.$Options$._initialZoomed = $JSCompiler_alias_FALSE$$) : ($bounds$$39$$.$yMax$ != $JSCompiler_alias_NULL$$ && ($JSCompiler_StaticMethods__setViewport$self$$.$Options$.yAxis.viewportMax = 
  $bounds$$39$$.$yMax$), $bounds$$39$$.$yMin$ != $JSCompiler_alias_NULL$$ && ($JSCompiler_StaticMethods__setViewport$self$$.$Options$.yAxis.viewportMin = $bounds$$39$$.$yMin$));
  $JSCompiler_StaticMethods__setViewport$self$$.$Options$._duringAnimation = !$actionDone$$3$$;
  $DvtChartRenderer$$.$rerenderAxisAndPlotArea$($JSCompiler_StaticMethods__setViewport$self$$, $JSCompiler_StaticMethods__setViewport$self$$.$_container$)
}
function $JSCompiler_StaticMethods__setScrollbarViewport$$($JSCompiler_StaticMethods__setScrollbarViewport$self$$, $bounds$$40$$) {
  if($JSCompiler_StaticMethods__setScrollbarViewport$self$$.$xAxis$ && $bounds$$40$$.$xMin$ != $JSCompiler_alias_NULL$$ && $bounds$$40$$.$xMax$ != $JSCompiler_alias_NULL$$) {
    var $xMin_yMin$$ = $JSCompiler_StaticMethods__setScrollbarViewport$self$$.$xAxis$.$actualToLinear$($bounds$$40$$.$xMin$), $xMax_yMax$$ = $JSCompiler_StaticMethods__setScrollbarViewport$self$$.$xAxis$.$actualToLinear$($bounds$$40$$.$xMax$);
    $JSCompiler_StaticMethods__setScrollbarViewport$self$$.$overview$ && $JSCompiler_StaticMethods__setScrollbarViewport$self$$.$overview$.$setViewportRange$($xMin_yMin$$, $xMax_yMax$$);
    $JSCompiler_StaticMethods__setScrollbarViewport$self$$.$xScrollbar$ && $JSCompiler_StaticMethods__setScrollbarViewport$self$$.$xScrollbar$.$setViewportRange$($xMin_yMin$$, $xMax_yMax$$)
  }
  $JSCompiler_StaticMethods__setScrollbarViewport$self$$.$yAxis$ && ($bounds$$40$$.$yMin$ != $JSCompiler_alias_NULL$$ && $bounds$$40$$.$yMax$ != $JSCompiler_alias_NULL$$) && ($xMin_yMin$$ = $JSCompiler_StaticMethods__setScrollbarViewport$self$$.$yAxis$.$actualToLinear$($bounds$$40$$.$yMin$), $xMax_yMax$$ = $JSCompiler_StaticMethods__setScrollbarViewport$self$$.$yAxis$.$actualToLinear$($bounds$$40$$.$yMax$), $JSCompiler_StaticMethods__setScrollbarViewport$self$$.$yScrollbar$ && $JSCompiler_StaticMethods__setScrollbarViewport$self$$.$yScrollbar$.$setViewportRange$($xMin_yMin$$, 
  $xMax_yMax$$))
}
$JSCompiler_prototypeAlias$$.$getRadius$ = $JSCompiler_get$$("$_radius$");
function $JSCompiler_StaticMethods_getDataLabels$$($JSCompiler_StaticMethods_getDataLabels$self$$) {
  $JSCompiler_StaticMethods_getDataLabels$self$$.$_dataLabels$ || ($JSCompiler_StaticMethods_getDataLabels$self$$.$_dataLabels$ = []);
  return $JSCompiler_StaticMethods_getDataLabels$self$$.$_dataLabels$
}
function $JSCompiler_StaticMethods___cacheChartFocus$$($JSCompiler_StaticMethods___cacheChartFocus$self$$) {
  var $chartFocus$$ = $JSCompiler_StaticMethods___cacheChartFocus$self$$.$EventManager$.$getFocus$();
  if($chartFocus$$) {
    var $chartShowingFocusEffect$$ = $chartFocus$$.$isShowingKeyboardFocusEffect$()
  }
  if($JSCompiler_StaticMethods___cacheChartFocus$self$$.$xAxis$) {
    var $axisFocus$$ = $JSCompiler_StaticMethods___cacheChartFocus$self$$.$xAxis$.$getKeyboardFocus$();
    if($axisFocus$$) {
      var $axisShowingFocusEffect$$ = $axisFocus$$.$isShowingKeyboardFocusEffect$()
    }
  }
  if($JSCompiler_StaticMethods___cacheChartFocus$self$$.$legend$) {
    var $legendFocus$$ = $JSCompiler_StaticMethods___cacheChartFocus$self$$.$legend$.$getKeyboardFocus$();
    if($legendFocus$$) {
      var $legendShowingFocusEffect$$ = $legendFocus$$.$isShowingKeyboardFocusEffect$()
    }
  }
  return{$chartFocus$:$chartFocus$$, $chartShowingFocusEffect$:$chartShowingFocusEffect$$, $axisFocus$:$axisFocus$$, $axisShowingFocusEffect$:$axisShowingFocusEffect$$, $legendFocus$:$legendFocus$$, $legendShowingFocusEffect$:$legendShowingFocusEffect$$}
}
function $JSCompiler_StaticMethods___restoreChartFocus$$($JSCompiler_StaticMethods___restoreChartFocus$self$$, $focusState$$1$$) {
  if(!$DvtChartTypeUtils$$.$isOverview$($JSCompiler_StaticMethods___restoreChartFocus$self$$) && !$DvtChartTypeUtils$$.$isSpark$($JSCompiler_StaticMethods___restoreChartFocus$self$$)) {
    var $keyboardArray_navigables$$4$$ = [$JSCompiler_StaticMethods___restoreChartFocus$self$$];
    $JSCompiler_StaticMethods___restoreChartFocus$self$$.$xAxis$ && $JSCompiler_StaticMethods___restoreChartFocus$self$$.$xAxis$.$isNavigable$() && $keyboardArray_navigables$$4$$.push($JSCompiler_StaticMethods___restoreChartFocus$self$$.$xAxis$);
    $JSCompiler_StaticMethods___restoreChartFocus$self$$.$legend$ && $JSCompiler_StaticMethods___restoreChartFocus$self$$.$legend$.$isNavigable$() && $keyboardArray_navigables$$4$$.push($JSCompiler_StaticMethods___restoreChartFocus$self$$.$legend$);
    $JSCompiler_StaticMethods___restoreChartFocus$self$$.$getCtx$().$setKeyboardFocusArray$($keyboardArray_navigables$$4$$);
    if($focusState$$1$$.$chartFocus$) {
      for(var $keyboardArray_navigables$$4$$ = $DvtChartEventUtils$$.$getKeyboardNavigables$($JSCompiler_StaticMethods___restoreChartFocus$self$$), $matchFound$$1$$ = $JSCompiler_alias_FALSE$$, $i$$278$$ = 0;$i$$278$$ < $keyboardArray_navigables$$4$$.length;$i$$278$$++) {
        var $id$$90$$ = $keyboardArray_navigables$$4$$[$i$$278$$].getId();
        if($id$$90$$ instanceof $DvtChartDataItem$$ && $id$$90$$.$equals$($focusState$$1$$.$chartFocus$.getId())) {
          $JSCompiler_StaticMethods___restoreChartFocus$self$$.$EventManager$.$setFocusObj$($keyboardArray_navigables$$4$$[$i$$278$$]);
          $focusState$$1$$.$chartShowingFocusEffect$ && $keyboardArray_navigables$$4$$[$i$$278$$].$showKeyboardFocusEffect$();
          $matchFound$$1$$ = $JSCompiler_alias_TRUE$$;
          break
        }
      }
      $matchFound$$1$$ || $JSCompiler_StaticMethods___restoreChartFocus$self$$.$EventManager$.$setFocusObj$($JSCompiler_StaticMethods___restoreChartFocus$self$$.$EventManager$.$KeyboardHandler$.$getDefaultNavigable$($keyboardArray_navigables$$4$$))
    }
    $focusState$$1$$.$axisFocus$ && ($JSCompiler_StaticMethods___restoreChartFocus$self$$.$xAxis$.$setKeyboardFocus$($focusState$$1$$.$axisFocus$, $focusState$$1$$.$axisShowingFocusEffect$), $focusState$$1$$.$axisShowingFocusEffect$ && $JSCompiler_StaticMethods___restoreChartFocus$self$$.$getCtx$().$setCurrentKeyboardFocus$($JSCompiler_StaticMethods___restoreChartFocus$self$$.$xAxis$));
    $focusState$$1$$.$legendFocus$ && ($JSCompiler_StaticMethods___restoreChartFocus$self$$.$legend$.$setKeyboardFocus$($focusState$$1$$.$legendFocus$, $focusState$$1$$.$legendShowingFocusEffect$), $focusState$$1$$.$legendShowingFocusEffect$ && $JSCompiler_StaticMethods___restoreChartFocus$self$$.$getCtx$().$setCurrentKeyboardFocus$($JSCompiler_StaticMethods___restoreChartFocus$self$$.$legend$))
  }
}
$JSCompiler_prototypeAlias$$.$processActiveDataChanges$ = function $$JSCompiler_prototypeAlias$$$$processActiveDataChanges$$($changes$$) {
  for(var $optionsOld$$ = dvt.$JsonUtils$.$clone$(this.$Options$), $optionsNew$$ = this.$Options$, $changeIndex$$ = 0;$changeIndex$$ < $changes$$.length;$changeIndex$$++) {
    var $entry$$inline_2711_entry$$inline_6218_entry$$inline_6225$$ = $changes$$[$changeIndex$$], $data$$inline_6219_data$$inline_6226_type$$inline_2712$$ = $entry$$inline_2711_entry$$inline_6218_entry$$inline_6225$$.type;
    if("u" == $data$$inline_6219_data$$inline_6226_type$$inline_2712$$) {
      for(var $data$$inline_6219_data$$inline_6226_type$$inline_2712$$ = $entry$$inline_2711_entry$$inline_6218_entry$$inline_6225$$.data, $i$$inline_6220_i$$inline_6227$$ = 0;$i$$inline_6220_i$$inline_6227$$ < $data$$inline_6219_data$$inline_6226_type$$inline_2712$$.length;$i$$inline_6220_i$$inline_6227$$++) {
        var $dataItemInfo$$inline_6221_insertedGroup$$inline_6229_items$$inline_6236$$ = $JSCompiler_StaticMethods__findDataItemById$$(this, $entry$$inline_2711_entry$$inline_6218_entry$$inline_6225$$.id, $data$$inline_6219_data$$inline_6226_type$$inline_2712$$[$i$$inline_6220_i$$inline_6227$$]._id);
        if($dataItemInfo$$inline_6221_insertedGroup$$inline_6229_items$$inline_6236$$) {
          for(var $key$$inline_6222$$ in $data$$inline_6219_data$$inline_6226_type$$inline_2712$$[$i$$inline_6220_i$$inline_6227$$]) {
            "_id" != $key$$inline_6222$$ && ($dataItemInfo$$inline_6221_insertedGroup$$inline_6229_items$$inline_6236$$.item[$key$$inline_6222$$] = $data$$inline_6219_data$$inline_6226_type$$inline_2712$$[$i$$inline_6220_i$$inline_6227$$][$key$$inline_6222$$])
          }
        }
      }
    }else {
      if("ia" == $data$$inline_6219_data$$inline_6226_type$$inline_2712$$ || "ib" == $data$$inline_6219_data$$inline_6226_type$$inline_2712$$) {
        $data$$inline_6219_data$$inline_6226_type$$inline_2712$$ = $entry$$inline_2711_entry$$inline_6218_entry$$inline_6225$$.data;
        for($i$$inline_6220_i$$inline_6227$$ = 0;$i$$inline_6220_i$$inline_6227$$ < $data$$inline_6219_data$$inline_6226_type$$inline_2712$$.length;$i$$inline_6220_i$$inline_6227$$++) {
          this.$Cache$ = {};
          var $insertId$$inline_6228$$ = $entry$$inline_2711_entry$$inline_6218_entry$$inline_6225$$.insertId, $dataItemInfo$$inline_6221_insertedGroup$$inline_6229_items$$inline_6236$$ = $data$$inline_6219_data$$inline_6226_type$$inline_2712$$[$i$$inline_6220_i$$inline_6227$$].group, $insertedSeries$$inline_6230_seriesItems$$inline_6235$$ = $data$$inline_6219_data$$inline_6226_type$$inline_2712$$[$i$$inline_6220_i$$inline_6227$$].series, $seriesCount$$inline_6231$$ = $DvtChartDataUtils$$.$getSeriesCount$(this), 
          $groupCount$$inline_6232_seriesIndex$$inline_6238$$ = $DvtChartDataUtils$$.$getGroupCount$(this), $insertedSeriesIndex$$inline_6233$$ = $DvtChartDataUtils$$.$getSeriesIndex$(this, $insertedSeries$$inline_6230_seriesItems$$inline_6235$$), $dataItemInfo$$inline_6237_insertedGroupIndex$$inline_6234$$ = $DvtChartDataUtils$$.$getGroupIndex$(this, $dataItemInfo$$inline_6221_insertedGroup$$inline_6229_items$$inline_6236$$);
          if(0 <= $insertedSeriesIndex$$inline_6233$$ && 0 <= $dataItemInfo$$inline_6237_insertedGroupIndex$$inline_6234$$) {
            $insertedSeries$$inline_6230_seriesItems$$inline_6235$$ = $DvtChartDataUtils$$.$getSeriesItem$(this, $insertedSeriesIndex$$inline_6233$$).items, $insertedSeries$$inline_6230_seriesItems$$inline_6235$$[$dataItemInfo$$inline_6237_insertedGroupIndex$$inline_6234$$] = {id:$entry$$inline_2711_entry$$inline_6218_entry$$inline_6225$$.id}, dvt.$Chart$.$_copyActiveDataProperties$($data$$inline_6219_data$$inline_6226_type$$inline_2712$$[$i$$inline_6220_i$$inline_6227$$], $insertedSeries$$inline_6230_seriesItems$$inline_6235$$[$dataItemInfo$$inline_6237_insertedGroupIndex$$inline_6234$$])
          }else {
            if(0 <= $dataItemInfo$$inline_6237_insertedGroupIndex$$inline_6234$$) {
              $dataItemInfo$$inline_6221_insertedGroup$$inline_6229_items$$inline_6236$$ = Array($groupCount$$inline_6232_seriesIndex$$inline_6238$$), $dataItemInfo$$inline_6221_insertedGroup$$inline_6229_items$$inline_6236$$[$dataItemInfo$$inline_6237_insertedGroupIndex$$inline_6234$$] = {id:$entry$$inline_2711_entry$$inline_6218_entry$$inline_6225$$.id}, dvt.$Chart$.$_copyActiveDataProperties$($data$$inline_6219_data$$inline_6226_type$$inline_2712$$[$i$$inline_6220_i$$inline_6227$$], $dataItemInfo$$inline_6221_insertedGroup$$inline_6229_items$$inline_6236$$[$dataItemInfo$$inline_6237_insertedGroupIndex$$inline_6234$$]), 
              this.$Options$.series.push({name:$insertedSeries$$inline_6230_seriesItems$$inline_6235$$, items:$dataItemInfo$$inline_6221_insertedGroup$$inline_6229_items$$inline_6236$$})
            }else {
              $dataItemInfo$$inline_6237_insertedGroupIndex$$inline_6234$$ = ($dataItemInfo$$inline_6237_insertedGroupIndex$$inline_6234$$ = $JSCompiler_StaticMethods__findDataItemById$$(this, $insertId$$inline_6228$$)) ? "ia" == $entry$$inline_2711_entry$$inline_6218_entry$$inline_6225$$.type ? $dataItemInfo$$inline_6237_insertedGroupIndex$$inline_6234$$.$groupIndex$ + 1 : $dataItemInfo$$inline_6237_insertedGroupIndex$$inline_6234$$.$groupIndex$ : 0;
              0 > $insertedSeriesIndex$$inline_6233$$ && (this.$Options$.series.push({name:$insertedSeries$$inline_6230_seriesItems$$inline_6235$$, items:Array($groupCount$$inline_6232_seriesIndex$$inline_6238$$)}), $insertedSeriesIndex$$inline_6233$$ = $seriesCount$$inline_6231$$, $seriesCount$$inline_6231$$++);
              for($groupCount$$inline_6232_seriesIndex$$inline_6238$$ = 0;$groupCount$$inline_6232_seriesIndex$$inline_6238$$ < $seriesCount$$inline_6231$$;$groupCount$$inline_6232_seriesIndex$$inline_6238$$++) {
                $insertedSeries$$inline_6230_seriesItems$$inline_6235$$ = $DvtChartDataUtils$$.$getSeriesItem$(this, $groupCount$$inline_6232_seriesIndex$$inline_6238$$).items, $insertedSeries$$inline_6230_seriesItems$$inline_6235$$.splice($dataItemInfo$$inline_6237_insertedGroupIndex$$inline_6234$$, 0, {id:$entry$$inline_2711_entry$$inline_6218_entry$$inline_6225$$.id}), $groupCount$$inline_6232_seriesIndex$$inline_6238$$ == $insertedSeriesIndex$$inline_6233$$ && dvt.$Chart$.$_copyActiveDataProperties$($data$$inline_6219_data$$inline_6226_type$$inline_2712$$[$i$$inline_6220_i$$inline_6227$$], 
                $insertedSeries$$inline_6230_seriesItems$$inline_6235$$[$dataItemInfo$$inline_6237_insertedGroupIndex$$inline_6234$$])
              }
              this.$Options$.groups.splice($dataItemInfo$$inline_6237_insertedGroupIndex$$inline_6234$$, 0, $dataItemInfo$$inline_6221_insertedGroup$$inline_6229_items$$inline_6236$$)
            }
          }
        }
      }else {
        "d" == $data$$inline_6219_data$$inline_6226_type$$inline_2712$$ && $JSCompiler_StaticMethods__processActiveDataDelete$$(this, $entry$$inline_2711_entry$$inline_6218_entry$$inline_6225$$)
      }
    }
  }
  this.$Options$ = $optionsOld$$;
  this.$render$($optionsNew$$)
};
dvt.$Chart$.prototype.processActiveDataChanges = dvt.$Chart$.prototype.$processActiveDataChanges$;
function $JSCompiler_StaticMethods__processActiveDataDelete$$($JSCompiler_StaticMethods__processActiveDataDelete$self$$, $entry$$8$$) {
  $JSCompiler_StaticMethods__processActiveDataDelete$self$$.$Cache$ = {};
  var $dataItemInfo$$2$$ = $JSCompiler_StaticMethods__findDataItemById$$($JSCompiler_StaticMethods__processActiveDataDelete$self$$, $entry$$8$$.id);
  if($dataItemInfo$$2$$) {
    for(var $dataItem$$1_key$$54$$ in $dataItemInfo$$2$$.item) {
      $dataItemInfo$$2$$.item[$dataItem$$1_key$$54$$] = $JSCompiler_alias_NULL$$
    }
    $dataItemInfo$$2$$.item._deleted = $JSCompiler_alias_TRUE$$;
    for(var $seriesCount$$1$$ = $DvtChartDataUtils$$.$getSeriesCount$($JSCompiler_StaticMethods__processActiveDataDelete$self$$), $groupCount$$1$$ = $DvtChartDataUtils$$.$getGroupCount$($JSCompiler_StaticMethods__processActiveDataDelete$self$$), $bDeleteGroup$$ = $JSCompiler_alias_TRUE$$, $groupIndex$$3_seriesIndex$$2$$ = 0;$groupIndex$$3_seriesIndex$$2$$ < $seriesCount$$1$$;$groupIndex$$3_seriesIndex$$2$$++) {
      if(($dataItem$$1_key$$54$$ = $DvtChartDataUtils$$.$getDataItem$($JSCompiler_StaticMethods__processActiveDataDelete$self$$, $groupIndex$$3_seriesIndex$$2$$, $dataItemInfo$$2$$.$groupIndex$)) && !$dataItem$$1_key$$54$$._deleted) {
        $bDeleteGroup$$ = $JSCompiler_alias_FALSE$$;
        break
      }
    }
    for(var $bDeleteSeries$$ = $JSCompiler_alias_TRUE$$, $groupIndex$$3_seriesIndex$$2$$ = 0;$groupIndex$$3_seriesIndex$$2$$ < $groupCount$$1$$;$groupIndex$$3_seriesIndex$$2$$++) {
      if(($dataItem$$1_key$$54$$ = $DvtChartDataUtils$$.$getDataItem$($JSCompiler_StaticMethods__processActiveDataDelete$self$$, $dataItemInfo$$2$$.$seriesIndex$, $groupIndex$$3_seriesIndex$$2$$)) && !$dataItem$$1_key$$54$$._deleted) {
        $bDeleteSeries$$ = $JSCompiler_alias_FALSE$$;
        break
      }
    }
    if($bDeleteGroup$$) {
      for($groupIndex$$3_seriesIndex$$2$$ = 0;$groupIndex$$3_seriesIndex$$2$$ < $seriesCount$$1$$;$groupIndex$$3_seriesIndex$$2$$++) {
        $DvtChartDataUtils$$.$getSeriesItem$($JSCompiler_StaticMethods__processActiveDataDelete$self$$, $groupIndex$$3_seriesIndex$$2$$).$items$.splice($dataItemInfo$$2$$.$groupIndex$, 1)
      }
      $JSCompiler_StaticMethods__processActiveDataDelete$self$$.$Options$.groups.splice($dataItemInfo$$2$$.$groupIndex$, 1)
    }
    $bDeleteSeries$$ && $JSCompiler_StaticMethods__processActiveDataDelete$self$$.$Options$.series.splice($dataItemInfo$$2$$.$seriesIndex$, 1);
    $JSCompiler_StaticMethods__processActiveDataDelete$$($JSCompiler_StaticMethods__processActiveDataDelete$self$$, $entry$$8$$)
  }
}
dvt.$Chart$.$_copyActiveDataProperties$ = function $dvt$$Chart$$$_copyActiveDataProperties$$($entry$$9$$, $item$$9$$) {
  for(var $key$$55$$ in $entry$$9$$) {
    $item$$9$$[$key$$55$$] = $entry$$9$$[$key$$55$$]
  }
};
function $JSCompiler_StaticMethods__findDataItemById$$($JSCompiler_StaticMethods__findDataItemById$self$$, $id$$91$$, $stampId$$10$$) {
  if($id$$91$$ == $JSCompiler_alias_NULL$$) {
    return $JSCompiler_alias_NULL$$
  }
  for(var $seriesCount$$2$$ = $DvtChartDataUtils$$.$getSeriesCount$($JSCompiler_StaticMethods__findDataItemById$self$$), $groupCount$$2$$ = $DvtChartDataUtils$$.$getGroupCount$($JSCompiler_StaticMethods__findDataItemById$self$$), $seriesIndex$$3$$ = 0;$seriesIndex$$3$$ < $seriesCount$$2$$;$seriesIndex$$3$$++) {
    for(var $groupIndex$$4$$ = 0;$groupIndex$$4$$ < $groupCount$$2$$;$groupIndex$$4$$++) {
      var $dataItem$$2$$ = $DvtChartDataUtils$$.$getDataItem$($JSCompiler_StaticMethods__findDataItemById$self$$, $seriesIndex$$3$$, $groupIndex$$4$$);
      if($dataItem$$2$$ != $JSCompiler_alias_NULL$$ && $dataItem$$2$$.id === $id$$91$$ && ($stampId$$10$$ == $JSCompiler_alias_NULL$$ || $stampId$$10$$ === $dataItem$$2$$._id)) {
        return{item:$dataItem$$2$$, $seriesIndex$:$seriesIndex$$3$$, $groupIndex$:$groupIndex$$4$$}
      }
    }
  }
  return $JSCompiler_alias_NULL$$
}
function $DvtChartAutomation$$($dvtComponent$$4$$) {
  this.$_chart$ = $dvtComponent$$4$$;
  this.$_options$ = this.$_chart$.$getOptions$();
  this.$_legend$ = this.$_chart$.$legend$;
  this.$_xAxis$ = this.$_chart$.$xAxis$;
  this.$_yAxis$ = this.$_chart$.$yAxis$;
  this.$_y2Axis$ = this.$_chart$.$y2Axis$;
  this.$_legendAutomation$ = this.$_legend$ ? this.$_legend$.$getAutomation$() : $JSCompiler_alias_NULL$$;
  this.$_xAxisAutomation$ = this.$_xAxis$ ? this.$_xAxis$.$getAutomation$() : $JSCompiler_alias_NULL$$;
  this.$_yAxisAutomation$ = this.$_yAxis$ ? this.$_yAxis$.$getAutomation$() : $JSCompiler_alias_NULL$$;
  this.$_y2AxisAutomation$ = this.$_y2Axis$ ? this.$_y2Axis$.$getAutomation$() : $JSCompiler_alias_NULL$$
}
$goog$exportPath_$$("DvtChartAutomation", $DvtChartAutomation$$);
dvt.$Obj$.$createSubclass$($DvtChartAutomation$$, dvt.$Automation$);
$DvtChartAutomation$$.prototype.$GetSubIdForDomElement$ = function $$DvtChartAutomation$$$$$GetSubIdForDomElement$$($JSCompiler_inline_result$$202_displayable$$18_itemIndex$$2_logicalObj$$3_refObjIndex_subId$$inline_2719$$) {
  var $axisSubId_axisType_legendItem$$inline_2721_legendOptions$$inline_2720_seriesIndex$$4$$ = $JSCompiler_alias_NULL$$;
  if($JSCompiler_inline_result$$202_displayable$$18_itemIndex$$2_logicalObj$$3_refObjIndex_subId$$inline_2719$$.$isDescendantOf$(this.$_xAxis$)) {
    return $axisSubId_axisType_legendItem$$inline_2721_legendOptions$$inline_2720_seriesIndex$$4$$ = this.$_xAxisAutomation$.$GetSubIdForDomElement$($JSCompiler_inline_result$$202_displayable$$18_itemIndex$$2_logicalObj$$3_refObjIndex_subId$$inline_2719$$), $JSCompiler_StaticMethods__convertAxisSubIdToChartSubId$$($axisSubId_axisType_legendItem$$inline_2721_legendOptions$$inline_2720_seriesIndex$$4$$, "xAxis")
  }
  if($JSCompiler_inline_result$$202_displayable$$18_itemIndex$$2_logicalObj$$3_refObjIndex_subId$$inline_2719$$.$isDescendantOf$(this.$_yAxis$)) {
    return $axisSubId_axisType_legendItem$$inline_2721_legendOptions$$inline_2720_seriesIndex$$4$$ = this.$_yAxisAutomation$.$GetSubIdForDomElement$($JSCompiler_inline_result$$202_displayable$$18_itemIndex$$2_logicalObj$$3_refObjIndex_subId$$inline_2719$$), $JSCompiler_StaticMethods__convertAxisSubIdToChartSubId$$($axisSubId_axisType_legendItem$$inline_2721_legendOptions$$inline_2720_seriesIndex$$4$$, "yAxis")
  }
  if($JSCompiler_inline_result$$202_displayable$$18_itemIndex$$2_logicalObj$$3_refObjIndex_subId$$inline_2719$$.$isDescendantOf$(this.$_y2Axis$)) {
    return $axisSubId_axisType_legendItem$$inline_2721_legendOptions$$inline_2720_seriesIndex$$4$$ = this.$_y2AxisAutomation$.$GetSubIdForDomElement$($JSCompiler_inline_result$$202_displayable$$18_itemIndex$$2_logicalObj$$3_refObjIndex_subId$$inline_2719$$), $JSCompiler_StaticMethods__convertAxisSubIdToChartSubId$$($axisSubId_axisType_legendItem$$inline_2721_legendOptions$$inline_2720_seriesIndex$$4$$, "y2Axis")
  }
  if($JSCompiler_inline_result$$202_displayable$$18_itemIndex$$2_logicalObj$$3_refObjIndex_subId$$inline_2719$$.$isDescendantOf$(this.$_legend$)) {
    a: {
      if($JSCompiler_inline_result$$202_displayable$$18_itemIndex$$2_logicalObj$$3_refObjIndex_subId$$inline_2719$$ = this.$_legendAutomation$.$GetSubIdForDomElement$($JSCompiler_inline_result$$202_displayable$$18_itemIndex$$2_logicalObj$$3_refObjIndex_subId$$inline_2719$$), $axisSubId_axisType_legendItem$$inline_2721_legendOptions$$inline_2720_seriesIndex$$4$$ = this.$_legend$.$getOptions$(), $axisSubId_axisType_legendItem$$inline_2721_legendOptions$$inline_2720_seriesIndex$$4$$ = this.$_legendAutomation$.$getLegendItem$($axisSubId_axisType_legendItem$$inline_2721_legendOptions$$inline_2720_seriesIndex$$4$$, 
      $JSCompiler_inline_result$$202_displayable$$18_itemIndex$$2_logicalObj$$3_refObjIndex_subId$$inline_2719$$)) {
        for(var $s$$inline_2722$$ = 0;$s$$inline_2722$$ < this.$_options$.series.length;$s$$inline_2722$$++) {
          if(this.$_options$.series[$s$$inline_2722$$].name == $axisSubId_axisType_legendItem$$inline_2721_legendOptions$$inline_2720_seriesIndex$$4$$.text) {
            $JSCompiler_inline_result$$202_displayable$$18_itemIndex$$2_logicalObj$$3_refObjIndex_subId$$inline_2719$$ = "series[" + $s$$inline_2722$$ + "]";
            break a
          }
        }
        $JSCompiler_inline_result$$202_displayable$$18_itemIndex$$2_logicalObj$$3_refObjIndex_subId$$inline_2719$$ = "legend:" + $JSCompiler_inline_result$$202_displayable$$18_itemIndex$$2_logicalObj$$3_refObjIndex_subId$$inline_2719$$
      }else {
        $JSCompiler_inline_result$$202_displayable$$18_itemIndex$$2_logicalObj$$3_refObjIndex_subId$$inline_2719$$ = $JSCompiler_alias_NULL$$
      }
    }
    return $JSCompiler_inline_result$$202_displayable$$18_itemIndex$$2_logicalObj$$3_refObjIndex_subId$$inline_2719$$
  }
  if(($JSCompiler_inline_result$$202_displayable$$18_itemIndex$$2_logicalObj$$3_refObjIndex_subId$$inline_2719$$ = this.$_chart$.$getEventManager$().$GetLogicalObject$($JSCompiler_inline_result$$202_displayable$$18_itemIndex$$2_logicalObj$$3_refObjIndex_subId$$inline_2719$$)) && "pie" == this.$_options$.type) {
    return"dataItem[" + $JSCompiler_inline_result$$202_displayable$$18_itemIndex$$2_logicalObj$$3_refObjIndex_subId$$inline_2719$$.$getSeriesIndex$() + "]"
  }
  if($JSCompiler_inline_result$$202_displayable$$18_itemIndex$$2_logicalObj$$3_refObjIndex_subId$$inline_2719$$ instanceof $DvtChartObjPeer$$) {
    $axisSubId_axisType_legendItem$$inline_2721_legendOptions$$inline_2720_seriesIndex$$4$$ = $JSCompiler_inline_result$$202_displayable$$18_itemIndex$$2_logicalObj$$3_refObjIndex_subId$$inline_2719$$.$getSeriesIndex$();
    $JSCompiler_inline_result$$202_displayable$$18_itemIndex$$2_logicalObj$$3_refObjIndex_subId$$inline_2719$$ = $JSCompiler_inline_result$$202_displayable$$18_itemIndex$$2_logicalObj$$3_refObjIndex_subId$$inline_2719$$.$getGroupIndex$();
    if($axisSubId_axisType_legendItem$$inline_2721_legendOptions$$inline_2720_seriesIndex$$4$$ != $JSCompiler_alias_NULL$$ && 0 <= $JSCompiler_inline_result$$202_displayable$$18_itemIndex$$2_logicalObj$$3_refObjIndex_subId$$inline_2719$$ && "funnel" != this.$_options$.type) {
      return"dataItem[" + $axisSubId_axisType_legendItem$$inline_2721_legendOptions$$inline_2720_seriesIndex$$4$$ + "][" + $JSCompiler_inline_result$$202_displayable$$18_itemIndex$$2_logicalObj$$3_refObjIndex_subId$$inline_2719$$ + "]"
    }
    if($axisSubId_axisType_legendItem$$inline_2721_legendOptions$$inline_2720_seriesIndex$$4$$ != $JSCompiler_alias_NULL$$ && $JSCompiler_inline_result$$202_displayable$$18_itemIndex$$2_logicalObj$$3_refObjIndex_subId$$inline_2719$$ == $DvtChartFunnelRenderer$$.$_GROUP_INDEX$ && "funnel" == this.$_options$.type) {
      return"dataItem[" + $axisSubId_axisType_legendItem$$inline_2721_legendOptions$$inline_2720_seriesIndex$$4$$ + "]"
    }
    if($axisSubId_axisType_legendItem$$inline_2721_legendOptions$$inline_2720_seriesIndex$$4$$ != $JSCompiler_alias_NULL$$ && ($JSCompiler_inline_result$$202_displayable$$18_itemIndex$$2_logicalObj$$3_refObjIndex_subId$$inline_2719$$ == $JSCompiler_alias_NULL$$ || 0 > $JSCompiler_inline_result$$202_displayable$$18_itemIndex$$2_logicalObj$$3_refObjIndex_subId$$inline_2719$$)) {
      return"series[" + $axisSubId_axisType_legendItem$$inline_2721_legendOptions$$inline_2720_seriesIndex$$4$$ + "]"
    }
  }else {
    if($JSCompiler_inline_result$$202_displayable$$18_itemIndex$$2_logicalObj$$3_refObjIndex_subId$$inline_2719$$ instanceof $DvtChartRefObjPeer$$) {
      return $axisSubId_axisType_legendItem$$inline_2721_legendOptions$$inline_2720_seriesIndex$$4$$ = $JSCompiler_inline_result$$202_displayable$$18_itemIndex$$2_logicalObj$$3_refObjIndex_subId$$inline_2719$$.$_axisType$, $JSCompiler_inline_result$$202_displayable$$18_itemIndex$$2_logicalObj$$3_refObjIndex_subId$$inline_2719$$ = $JSCompiler_inline_result$$202_displayable$$18_itemIndex$$2_logicalObj$$3_refObjIndex_subId$$inline_2719$$.$getIndex$(), $axisSubId_axisType_legendItem$$inline_2721_legendOptions$$inline_2720_seriesIndex$$4$$ && 
      0 <= $JSCompiler_inline_result$$202_displayable$$18_itemIndex$$2_logicalObj$$3_refObjIndex_subId$$inline_2719$$ ? $axisSubId_axisType_legendItem$$inline_2721_legendOptions$$inline_2720_seriesIndex$$4$$ + ":referenceObject[" + $JSCompiler_inline_result$$202_displayable$$18_itemIndex$$2_logicalObj$$3_refObjIndex_subId$$inline_2719$$ + "]" : $JSCompiler_alias_NULL$$
    }
  }
  return $JSCompiler_alias_NULL$$
};
function $JSCompiler_StaticMethods__convertAxisSubIdToChartSubId$$($subId$$8$$, $axisType$$1$$) {
  if("title" == $subId$$8$$ && $axisType$$1$$) {
    return $axisType$$1$$ + ":" + $subId$$8$$
  }
  var $indexList$$3$$ = $subId$$8$$.substring($subId$$8$$.indexOf("["));
  return $indexList$$3$$ ? "group" + $indexList$$3$$ : $JSCompiler_alias_NULL$$
}
$DvtChartAutomation$$.prototype.$getDomElementForSubId$ = function $$DvtChartAutomation$$$$$getDomElementForSubId$$($itemIndex$$inline_2740_legendOptions$$inline_2727_subId$$9$$) {
  if($itemIndex$$inline_2740_legendOptions$$inline_2727_subId$$9$$ == dvt.$Automation$.$TOOLTIP_SUBID$) {
    return this.$GetTooltipElement$(this.$_chart$, $DvtChartTooltipUtils$$.$isDataCursorEnabled$(this.$_chart$) ? "_dvtDataCursor" : $JSCompiler_alias_NULL$$)
  }
  var $openParen1_seriesIndex$$5_seriesIndex$$inline_2726$$ = $itemIndex$$inline_2740_legendOptions$$inline_2727_subId$$9$$.indexOf("["), $closeParen1_peers$$inline_2741$$ = $itemIndex$$inline_2740_legendOptions$$inline_2727_subId$$9$$.indexOf("]"), $index$$inline_2730_logicalObj$$4_objType_openParen2_pieSlice_series$$inline_2743_slice$$inline_2736$$, $JSCompiler_StaticMethods_getRefObjPeers$self$$inline_6243_closeParen2_i$$inline_2732$$, $axisObjectType_colon_item$$inline_2744_refObjPeers$$inline_6244$$ = 
  $itemIndex$$inline_2740_legendOptions$$inline_2727_subId$$9$$.indexOf(":");
  if(0 < $openParen1_seriesIndex$$5_seriesIndex$$inline_2726$$ && 0 < $closeParen1_peers$$inline_2741$$ || 0 < $axisObjectType_colon_item$$inline_2744_refObjPeers$$inline_6244$$) {
    $index$$inline_2730_logicalObj$$4_objType_openParen2_pieSlice_series$$inline_2743_slice$$inline_2736$$ = 0 > $axisObjectType_colon_item$$inline_2744_refObjPeers$$inline_6244$$ ? $itemIndex$$inline_2740_legendOptions$$inline_2727_subId$$9$$.substring(0, $openParen1_seriesIndex$$5_seriesIndex$$inline_2726$$) : $itemIndex$$inline_2740_legendOptions$$inline_2727_subId$$9$$.substring(0, $axisObjectType_colon_item$$inline_2744_refObjPeers$$inline_6244$$);
    if("group" == $index$$inline_2730_logicalObj$$4_objType_openParen2_pieSlice_series$$inline_2743_slice$$inline_2736$$) {
      return this.$_xAxisAutomation$.$getDomElementForSubId$($itemIndex$$inline_2740_legendOptions$$inline_2727_subId$$9$$)
    }
    if("series" == $index$$inline_2730_logicalObj$$4_objType_openParen2_pieSlice_series$$inline_2743_slice$$inline_2736$$) {
      return $openParen1_seriesIndex$$5_seriesIndex$$inline_2726$$ = $itemIndex$$inline_2740_legendOptions$$inline_2727_subId$$9$$.substring($itemIndex$$inline_2740_legendOptions$$inline_2727_subId$$9$$.indexOf("[") + 1, $itemIndex$$inline_2740_legendOptions$$inline_2727_subId$$9$$.indexOf("]")), $itemIndex$$inline_2740_legendOptions$$inline_2727_subId$$9$$ = this.$_legend$.$getOptions$(), $itemIndex$$inline_2740_legendOptions$$inline_2727_subId$$9$$ = "section" + this.$_legendAutomation$.$getIndicesFromSeries$(this.$_options$.series[$openParen1_seriesIndex$$5_seriesIndex$$inline_2726$$], 
      $itemIndex$$inline_2740_legendOptions$$inline_2727_subId$$9$$), this.$_legendAutomation$.$getDomElementForSubId$($itemIndex$$inline_2740_legendOptions$$inline_2727_subId$$9$$)
    }
    if("legend" == $itemIndex$$inline_2740_legendOptions$$inline_2727_subId$$9$$.substring(0, $axisObjectType_colon_item$$inline_2744_refObjPeers$$inline_6244$$)) {
      return $itemIndex$$inline_2740_legendOptions$$inline_2727_subId$$9$$ = $itemIndex$$inline_2740_legendOptions$$inline_2727_subId$$9$$.substring($axisObjectType_colon_item$$inline_2744_refObjPeers$$inline_6244$$ + 1), this.$_legendAutomation$.$getDomElementForSubId$($itemIndex$$inline_2740_legendOptions$$inline_2727_subId$$9$$)
    }
    $openParen1_seriesIndex$$5_seriesIndex$$inline_2726$$ = $itemIndex$$inline_2740_legendOptions$$inline_2727_subId$$9$$.substring($openParen1_seriesIndex$$5_seriesIndex$$inline_2726$$ + 1, $closeParen1_peers$$inline_2741$$);
    if("xAxis" == $index$$inline_2730_logicalObj$$4_objType_openParen2_pieSlice_series$$inline_2743_slice$$inline_2736$$ || "yAxis" == $index$$inline_2730_logicalObj$$4_objType_openParen2_pieSlice_series$$inline_2743_slice$$inline_2736$$ || "y2Axis" == $index$$inline_2730_logicalObj$$4_objType_openParen2_pieSlice_series$$inline_2743_slice$$inline_2736$$) {
      if($axisObjectType_colon_item$$inline_2744_refObjPeers$$inline_6244$$ = $itemIndex$$inline_2740_legendOptions$$inline_2727_subId$$9$$.substring($axisObjectType_colon_item$$inline_2744_refObjPeers$$inline_6244$$ + 1), "title" == $axisObjectType_colon_item$$inline_2744_refObjPeers$$inline_6244$$) {
        if("xAxis" == $index$$inline_2730_logicalObj$$4_objType_openParen2_pieSlice_series$$inline_2743_slice$$inline_2736$$) {
          return this.$_xAxisAutomation$.$getDomElementForSubId$($axisObjectType_colon_item$$inline_2744_refObjPeers$$inline_6244$$)
        }
        if("yAxis" == $index$$inline_2730_logicalObj$$4_objType_openParen2_pieSlice_series$$inline_2743_slice$$inline_2736$$) {
          return this.$_yAxisAutomation$.$getDomElementForSubId$($axisObjectType_colon_item$$inline_2744_refObjPeers$$inline_6244$$)
        }
        if("y2Axis" == $index$$inline_2730_logicalObj$$4_objType_openParen2_pieSlice_series$$inline_2743_slice$$inline_2736$$) {
          return this.$_y2AxisAutomation$.$getDomElementForSubId$($axisObjectType_colon_item$$inline_2744_refObjPeers$$inline_6244$$)
        }
      }else {
        if($index$$inline_2730_logicalObj$$4_objType_openParen2_pieSlice_series$$inline_2743_slice$$inline_2736$$ = $axisObjectType_colon_item$$inline_2744_refObjPeers$$inline_6244$$.indexOf("["), $JSCompiler_StaticMethods_getRefObjPeers$self$$inline_6243_closeParen2_i$$inline_2732$$ = $axisObjectType_colon_item$$inline_2744_refObjPeers$$inline_6244$$.indexOf("]"), "referenceObject" == $axisObjectType_colon_item$$inline_2744_refObjPeers$$inline_6244$$.substring(0, $index$$inline_2730_logicalObj$$4_objType_openParen2_pieSlice_series$$inline_2743_slice$$inline_2736$$)) {
          a: {
            $index$$inline_2730_logicalObj$$4_objType_openParen2_pieSlice_series$$inline_2743_slice$$inline_2736$$ = $axisObjectType_colon_item$$inline_2744_refObjPeers$$inline_6244$$.substring($index$$inline_2730_logicalObj$$4_objType_openParen2_pieSlice_series$$inline_2743_slice$$inline_2736$$ + 1, $JSCompiler_StaticMethods_getRefObjPeers$self$$inline_6243_closeParen2_i$$inline_2732$$);
            $JSCompiler_StaticMethods_getRefObjPeers$self$$inline_6243_closeParen2_i$$inline_2732$$ = this.$_chart$;
            for(var $axisObjectType_colon_item$$inline_2744_refObjPeers$$inline_6244$$ = [], $i$$inline_6245$$ = 0;$i$$inline_6245$$ < $JSCompiler_StaticMethods_getRefObjPeers$self$$inline_6243_closeParen2_i$$inline_2732$$.$Peers$.length;$i$$inline_6245$$++) {
              $JSCompiler_StaticMethods_getRefObjPeers$self$$inline_6243_closeParen2_i$$inline_2732$$.$Peers$[$i$$inline_6245$$] instanceof $DvtChartRefObjPeer$$ && $axisObjectType_colon_item$$inline_2744_refObjPeers$$inline_6244$$.push($JSCompiler_StaticMethods_getRefObjPeers$self$$inline_6243_closeParen2_i$$inline_2732$$.$Peers$[$i$$inline_6245$$])
            }
            for($JSCompiler_StaticMethods_getRefObjPeers$self$$inline_6243_closeParen2_i$$inline_2732$$ = 0;$JSCompiler_StaticMethods_getRefObjPeers$self$$inline_6243_closeParen2_i$$inline_2732$$ < $axisObjectType_colon_item$$inline_2744_refObjPeers$$inline_6244$$.length;$JSCompiler_StaticMethods_getRefObjPeers$self$$inline_6243_closeParen2_i$$inline_2732$$++) {
              if($index$$inline_2730_logicalObj$$4_objType_openParen2_pieSlice_series$$inline_2743_slice$$inline_2736$$ == $axisObjectType_colon_item$$inline_2744_refObjPeers$$inline_6244$$[$JSCompiler_StaticMethods_getRefObjPeers$self$$inline_6243_closeParen2_i$$inline_2732$$].$getIndex$()) {
                $index$$inline_2730_logicalObj$$4_objType_openParen2_pieSlice_series$$inline_2743_slice$$inline_2736$$ = $axisObjectType_colon_item$$inline_2744_refObjPeers$$inline_6244$$[$JSCompiler_StaticMethods_getRefObjPeers$self$$inline_6243_closeParen2_i$$inline_2732$$];
                break a
              }
            }
            $index$$inline_2730_logicalObj$$4_objType_openParen2_pieSlice_series$$inline_2743_slice$$inline_2736$$ = $JSCompiler_alias_NULL$$
          }
          if($index$$inline_2730_logicalObj$$4_objType_openParen2_pieSlice_series$$inline_2743_slice$$inline_2736$$) {
            return $index$$inline_2730_logicalObj$$4_objType_openParen2_pieSlice_series$$inline_2743_slice$$inline_2736$$.$getDisplayables$()[0].$getElem$()
          }
        }
      }
    }
    if("pie" == this.$_options$.type && ($index$$inline_2730_logicalObj$$4_objType_openParen2_pieSlice_series$$inline_2743_slice$$inline_2736$$ = ($index$$inline_2730_logicalObj$$4_objType_openParen2_pieSlice_series$$inline_2743_slice$$inline_2736$$ = $DvtChartPieUtils$$.$getSliceBySeriesIndex$(this.$_chart$.$pieChart$.$chart$, $openParen1_seriesIndex$$5_seriesIndex$$inline_2726$$)) ? $JSCompiler_StaticMethods_getTopDisplayable$$($index$$inline_2730_logicalObj$$4_objType_openParen2_pieSlice_series$$inline_2743_slice$$inline_2736$$) : 
    $JSCompiler_alias_NULL$$)) {
      return $index$$inline_2730_logicalObj$$4_objType_openParen2_pieSlice_series$$inline_2743_slice$$inline_2736$$.$getElem$()
    }
    if("funnel" == this.$_options$.type) {
      var $i$$inline_2742_itemIndex$$3$$ = $DvtChartFunnelRenderer$$.$_GROUP_INDEX$
    }else {
      $itemIndex$$inline_2740_legendOptions$$inline_2727_subId$$9$$ = $itemIndex$$inline_2740_legendOptions$$inline_2727_subId$$9$$.substring($closeParen1_peers$$inline_2741$$ + 1), $index$$inline_2730_logicalObj$$4_objType_openParen2_pieSlice_series$$inline_2743_slice$$inline_2736$$ = $itemIndex$$inline_2740_legendOptions$$inline_2727_subId$$9$$.indexOf("["), $JSCompiler_StaticMethods_getRefObjPeers$self$$inline_6243_closeParen2_i$$inline_2732$$ = $itemIndex$$inline_2740_legendOptions$$inline_2727_subId$$9$$.indexOf("]"), 
      0 <= $index$$inline_2730_logicalObj$$4_objType_openParen2_pieSlice_series$$inline_2743_slice$$inline_2736$$ && 0 <= $JSCompiler_StaticMethods_getRefObjPeers$self$$inline_6243_closeParen2_i$$inline_2732$$ && ($i$$inline_2742_itemIndex$$3$$ = $itemIndex$$inline_2740_legendOptions$$inline_2727_subId$$9$$.substring($index$$inline_2730_logicalObj$$4_objType_openParen2_pieSlice_series$$inline_2743_slice$$inline_2736$$ + 1, $JSCompiler_StaticMethods_getRefObjPeers$self$$inline_6243_closeParen2_i$$inline_2732$$))
    }
    a: {
      $itemIndex$$inline_2740_legendOptions$$inline_2727_subId$$9$$ = $i$$inline_2742_itemIndex$$3$$;
      $closeParen1_peers$$inline_2741$$ = $JSCompiler_StaticMethods_getChartObjPeers$$(this.$_chart$);
      for($i$$inline_2742_itemIndex$$3$$ = 0;$i$$inline_2742_itemIndex$$3$$ < $closeParen1_peers$$inline_2741$$.length;$i$$inline_2742_itemIndex$$3$$++) {
        if($index$$inline_2730_logicalObj$$4_objType_openParen2_pieSlice_series$$inline_2743_slice$$inline_2736$$ = $closeParen1_peers$$inline_2741$$[$i$$inline_2742_itemIndex$$3$$].$getSeriesIndex$(), $axisObjectType_colon_item$$inline_2744_refObjPeers$$inline_6244$$ = $closeParen1_peers$$inline_2741$$[$i$$inline_2742_itemIndex$$3$$].$getGroupIndex$(), $index$$inline_2730_logicalObj$$4_objType_openParen2_pieSlice_series$$inline_2743_slice$$inline_2736$$ == $openParen1_seriesIndex$$5_seriesIndex$$inline_2726$$ && 
        $axisObjectType_colon_item$$inline_2744_refObjPeers$$inline_6244$$ == $itemIndex$$inline_2740_legendOptions$$inline_2727_subId$$9$$) {
          $index$$inline_2730_logicalObj$$4_objType_openParen2_pieSlice_series$$inline_2743_slice$$inline_2736$$ = $closeParen1_peers$$inline_2741$$[$i$$inline_2742_itemIndex$$3$$];
          break a
        }
      }
      $index$$inline_2730_logicalObj$$4_objType_openParen2_pieSlice_series$$inline_2743_slice$$inline_2736$$ = $JSCompiler_alias_NULL$$
    }
    if($index$$inline_2730_logicalObj$$4_objType_openParen2_pieSlice_series$$inline_2743_slice$$inline_2736$$) {
      return $index$$inline_2730_logicalObj$$4_objType_openParen2_pieSlice_series$$inline_2743_slice$$inline_2736$$.$getDisplayables$()[0].$getElem$()
    }
  }
  return $JSCompiler_alias_NULL$$
};
$DvtChartAutomation$$.prototype.getDomElementForSubId = $DvtChartAutomation$$.prototype.$getDomElementForSubId$;
$DvtChartAutomation$$.prototype.$getDataItem$ = function $$DvtChartAutomation$$$$$getDataItem$$($seriesIndex$$8$$, $itemIndex$$5$$) {
  if("pie" == this.$_options$.type || "funnel" == this.$_options$.type) {
    $itemIndex$$5$$ = 0
  }
  var $dataItem$$3$$ = $DvtChartDataUtils$$.$getDataItem$(this.$_chart$, $seriesIndex$$8$$, $itemIndex$$5$$);
  return $dataItem$$3$$ ? {borderColor:$DvtChartStyleUtils$$.$getBorderColor$(this.$_chart$, $seriesIndex$$8$$, $itemIndex$$5$$), color:$DvtChartStyleUtils$$.$getColor$(this.$_chart$, $seriesIndex$$8$$, $itemIndex$$5$$), label:$DvtChartDataUtils$$.$getDataLabel$(this.$_chart$, $seriesIndex$$8$$, $itemIndex$$5$$), targetValue:$DvtChartDataUtils$$.$getTargetValue$(this.$_chart$, $seriesIndex$$8$$), tooltip:$DvtChartTooltipUtils$$.$getDatatip$(this.$_chart$, $seriesIndex$$8$$, $itemIndex$$5$$, $JSCompiler_alias_FALSE$$), 
  value:$DvtChartDataUtils$$.getValue(this.$_chart$, $seriesIndex$$8$$, $itemIndex$$5$$), open:$dataItem$$3$$.open, close:$dataItem$$3$$.close, high:$DvtChartDataUtils$$.$getHighValue$(this.$_chart$, $seriesIndex$$8$$, $itemIndex$$5$$), low:$DvtChartDataUtils$$.$getLowValue$(this.$_chart$, $seriesIndex$$8$$, $itemIndex$$5$$), volume:$dataItem$$3$$.volume, x:$DvtChartDataUtils$$.$getXValue$(this.$_chart$, $seriesIndex$$8$$, $itemIndex$$5$$), y:$dataItem$$3$$.y, z:$dataItem$$3$$.z, min:$dataItem$$3$$.min, 
  max:$dataItem$$3$$.max, group:$DvtChartDataUtils$$.$getGroup$(this.$_chart$, $itemIndex$$5$$), series:$DvtChartDataUtils$$.$getSeries$(this.$_chart$, $seriesIndex$$8$$), selected:$DvtChartDataUtils$$.$isDataSelected$(this.$_chart$, $seriesIndex$$8$$, $itemIndex$$5$$)} : $JSCompiler_alias_NULL$$
};
$DvtChartAutomation$$.prototype.getDataItem = $DvtChartAutomation$$.prototype.$getDataItem$;
$DvtChartAutomation$$.prototype.$getGroup$ = function $$DvtChartAutomation$$$$$getGroup$$($itemIndex$$6$$) {
  return $DvtChartDataUtils$$.$getGroup$(this.$_chart$, $itemIndex$$6$$)
};
$DvtChartAutomation$$.prototype.getGroup = $DvtChartAutomation$$.prototype.$getGroup$;
$DvtChartAutomation$$.prototype.$getSeries$ = function $$DvtChartAutomation$$$$$getSeries$$($seriesIndex$$9$$) {
  return this.$_options$.series[$seriesIndex$$9$$].name
};
$DvtChartAutomation$$.prototype.getSeries = $DvtChartAutomation$$.prototype.$getSeries$;
$DvtChartAutomation$$.prototype.$getGroupCount$ = function $$DvtChartAutomation$$$$$getGroupCount$$() {
  return $DvtChartDataUtils$$.$getGroupCount$(this.$_chart$)
};
$DvtChartAutomation$$.prototype.getGroupCount = $DvtChartAutomation$$.prototype.$getGroupCount$;
$DvtChartAutomation$$.prototype.$getSeriesCount$ = function $$DvtChartAutomation$$$$$getSeriesCount$$() {
  return this.$_options$.series.length
};
$DvtChartAutomation$$.prototype.getSeriesCount = $DvtChartAutomation$$.prototype.$getSeriesCount$;
$DvtChartAutomation$$.prototype.$getTitle$ = function $$DvtChartAutomation$$$$$getTitle$$() {
  return this.$_options$.title.text
};
$DvtChartAutomation$$.prototype.getTitle = $DvtChartAutomation$$.prototype.$getTitle$;
$DvtChartAutomation$$.prototype.$getLegend$ = function $$DvtChartAutomation$$$$$getLegend$$() {
  var $legendSpace$$ = this.$_legend$.$_bounds$, $point$$38$$ = this.$_chart$.$localToStage$(new dvt.$Point$($legendSpace$$.x, $legendSpace$$.y));
  return{bounds:{x:$point$$38$$.x, y:$point$$38$$.y, width:$legendSpace$$.$w$, height:$legendSpace$$.$h$}, title:this.$_legend$.$getOptions$().title}
};
$DvtChartAutomation$$.prototype.getLegend = $DvtChartAutomation$$.prototype.$getLegend$;
$DvtChartAutomation$$.prototype.$getPlotArea$ = function $$DvtChartAutomation$$$$$getPlotArea$$() {
  var $plotAreaSpace$$ = this.$_chart$.$_plotAreaSpace$;
  return{bounds:{x:$plotAreaSpace$$.x, y:$plotAreaSpace$$.y, width:$plotAreaSpace$$.$w$, height:$plotAreaSpace$$.$h$}}
};
$DvtChartAutomation$$.prototype.getPlotArea = $DvtChartAutomation$$.prototype.$getPlotArea$;
$DvtChartAutomation$$.prototype.$getXAxis$ = function $$DvtChartAutomation$$$$$getXAxis$$() {
  return $JSCompiler_StaticMethods__getAxis$$(this, "x")
};
$DvtChartAutomation$$.prototype.getXAxis = $DvtChartAutomation$$.prototype.$getXAxis$;
$DvtChartAutomation$$.prototype.$getYAxis$ = function $$DvtChartAutomation$$$$$getYAxis$$() {
  return $JSCompiler_StaticMethods__getAxis$$(this, "y")
};
$DvtChartAutomation$$.prototype.getYAxis = $DvtChartAutomation$$.prototype.$getYAxis$;
$DvtChartAutomation$$.prototype.$getY2Axis$ = function $$DvtChartAutomation$$$$$getY2Axis$$() {
  return $JSCompiler_StaticMethods__getAxis$$(this, "y2")
};
$DvtChartAutomation$$.prototype.getY2Axis = $DvtChartAutomation$$.prototype.$getY2Axis$;
function $JSCompiler_StaticMethods__getAxis$$($JSCompiler_StaticMethods__getAxis$self$$, $type$$95$$) {
  var $axis$$25$$ = "x" == $type$$95$$ ? $JSCompiler_StaticMethods__getAxis$self$$.$_xAxis$ : "y" == $type$$95$$ ? $JSCompiler_StaticMethods__getAxis$self$$.$_yAxis$ : $JSCompiler_StaticMethods__getAxis$self$$.$_y2Axis$;
  if($axis$$25$$) {
    var $axisSpace$$ = $axis$$25$$.$_bounds$, $stageCoord$$ = $axis$$25$$.$localToStage$(new dvt.$Point$($axisSpace$$.x, $axisSpace$$.y)), $chart$$ = $JSCompiler_StaticMethods__getAxis$self$$.$_chart$;
    return{bounds:{x:$stageCoord$$.x, y:$stageCoord$$.y, width:$axisSpace$$.$w$, height:$axisSpace$$.$h$}, title:$JSCompiler_StaticMethods__getAxis$self$$.$_options$[$type$$95$$ + "Axis"].title, getPreferredSize:function($JSCompiler_StaticMethods__getAxis$self$$, $axisSpace$$) {
      var $stageCoord$$ = $axis$$25$$.$getOptions$(), $position$$12$$ = $stageCoord$$.position, $tickLabelGap$$ = $DvtChartAxisUtils$$.$getTickLabelGapSize$($chart$$, $type$$95$$), $outerGap$$ = $DvtChartTypeUtils$$.$isStandaloneXAxis$($chart$$) || $DvtChartTypeUtils$$.$isStandaloneYAxis$($chart$$) || $DvtChartTypeUtils$$.$isStandaloneY2Axis$($chart$$) ? 2 : 0;
      "top" == $position$$12$$ || "bottom" == $position$$12$$ ? ($stageCoord$$ = $axis$$25$$.$getPreferredSize$($stageCoord$$, $JSCompiler_StaticMethods__getAxis$self$$, $axisSpace$$ - $tickLabelGap$$ - $outerGap$$), $stageCoord$$.$h$ = Math.ceil($stageCoord$$.$h$ + $tickLabelGap$$ + $outerGap$$)) : ($stageCoord$$ = $axis$$25$$.$getPreferredSize$($stageCoord$$, $JSCompiler_StaticMethods__getAxis$self$$ - $tickLabelGap$$ - $outerGap$$, $axisSpace$$), $stageCoord$$.$w$ = Math.ceil($stageCoord$$.$w$ + 
      $tickLabelGap$$ + $outerGap$$));
      return{width:$stageCoord$$.$w$, height:$stageCoord$$.$h$}
    }}
  }
  return $JSCompiler_alias_NULL$$
}
dvt.$Automation$.prototype.$IsTooltipElement$ = function $dvt$$Automation$$$$IsTooltipElement$$($domElement_id$$92$$) {
  return($domElement_id$$92$$ = $domElement_id$$92$$.getAttribute("id")) && (0 == $domElement_id$$92$$.indexOf("_dvtDataCursor") || 0 == $domElement_id$$92$$.indexOf(dvt.$HtmlTooltipManager$.$_TOOLTIP_DIV_ID$)) ? $JSCompiler_alias_TRUE$$ : $JSCompiler_alias_FALSE$$
};
dvt.$Bundle$.$addDefaultStrings$(dvt.$Bundle$.$CHART_PREFIX$, {DEFAULT_GROUP_NAME:"Group {0}", LABEL_SERIES:"Series", LABEL_GROUP:"Group", LABEL_VALUE:"Value", LABEL_TARGET_VALUE:"Target", LABEL_X:"X", LABEL_Y:"Y", LABEL_Z:"Z", LABEL_PERCENTAGE:"Percentage", LABEL_MIN:"Min", LABEL_MAX:"Max", LABEL_HIGH:"High", LABEL_LOW:"Low", LABEL_OPEN:"Open", LABEL_CLOSE:"Close", LABEL_VOLUME:"Volume", LABEL_OTHER:"Other", MARQUEE_SELECT:"Marquee select", MARQUEE_ZOOM:"Marquee zoom", PAN:"Pan"});
function $DvtChartEventManager$$($chart$$1$$) {
  $DvtChartEventManager$$.$superclass$.Init.call(this, $chart$$1$$.$getCtx$(), $chart$$1$$.$processEvent$, $chart$$1$$);
  this.$_chart$ = $chart$$1$$;
  this.$_dragMode$ = $JSCompiler_alias_NULL$$;
  this.$_dragButtonsVisible$ = dvt.$Agent$.$isTouchDevice$();
  this.$_stageAbsolutePosition$ = this.$_marqueeSelectHandler$ = this.$_marqueeZoomHandler$ = this.$_panZoomHandler$ = this.$_dataCursorHandler$ = this.$selectButton$ = this.$zoomButton$ = this.$panButton$ = $JSCompiler_alias_NULL$$
}
dvt.$Obj$.$createSubclass$($DvtChartEventManager$$, dvt.$EventManager$);
$JSCompiler_prototypeAlias$$ = $DvtChartEventManager$$.prototype;
$JSCompiler_prototypeAlias$$.$addListeners$ = function $$JSCompiler_prototypeAlias$$$$addListeners$$($displayable$$19$$) {
  dvt.$SvgDocumentUtils$.$addDragListeners$(this.$_chart$, this.$_onDragStart$, this.$_onDragMove$, this.$_onDragEnd$, this);
  $DvtChartEventManager$$.$superclass$.$addListeners$.call(this, $displayable$$19$$);
  dvt.$Agent$.$isTouchDevice$() || $displayable$$19$$.$addEvtListener$(dvt.$MouseEvent$.$MOUSEWHEEL$, this.$OnMouseWheel$, $JSCompiler_alias_FALSE$$, this)
};
$JSCompiler_prototypeAlias$$.$removeListeners$ = function $$JSCompiler_prototypeAlias$$$$removeListeners$$($displayable$$20$$) {
  $DvtChartEventManager$$.$superclass$.$removeListeners$.call(this, $displayable$$20$$);
  dvt.$Agent$.$isTouchDevice$() || $displayable$$20$$.$removeEvtListener$(dvt.$MouseEvent$.$MOUSEWHEEL$, this.$OnMouseWheel$, $JSCompiler_alias_FALSE$$, this)
};
$JSCompiler_prototypeAlias$$.$getLogicalObject$ = function $$JSCompiler_prototypeAlias$$$$getLogicalObject$$($target$$54$$) {
  return this.$GetLogicalObject$($target$$54$$, $JSCompiler_alias_TRUE$$)
};
$JSCompiler_prototypeAlias$$.$_getRelativePosition$ = function $$JSCompiler_prototypeAlias$$$$_getRelativePosition$$($pageX$$1$$, $pageY$$1$$) {
  this.$_stageAbsolutePosition$ || (this.$_stageAbsolutePosition$ = this.$_context$.$getStageAbsolutePosition$());
  return new dvt.$Point$($pageX$$1$$ - this.$_stageAbsolutePosition$.x, $pageY$$1$$ - this.$_stageAbsolutePosition$.y)
};
function $JSCompiler_StaticMethods__getDragHandler$$($JSCompiler_StaticMethods__getDragHandler$self$$, $relPos$$30$$) {
  if($relPos$$30$$ && "user" == $JSCompiler_StaticMethods__getDragHandler$self$$.$_chart$.$getOptions$().dragMode && $DvtChartTypeUtils$$.$isBLAC$($JSCompiler_StaticMethods__getDragHandler$self$$.$_chart$) && ("pan" == $JSCompiler_StaticMethods__getDragHandler$self$$.$_dragMode$ || "zoom" == $JSCompiler_StaticMethods__getDragHandler$self$$.$_dragMode$)) {
    $JSCompiler_StaticMethods__getDragHandler$self$$.$_panZoomHandler$.$isWithinBounds$($relPos$$30$$) ? $JSCompiler_StaticMethods__getDragHandler$self$$.$_dragMode$ = "pan" : $JSCompiler_StaticMethods__getDragHandler$self$$.$_dragMode$ = "zoom"
  }
  return"pan" == $JSCompiler_StaticMethods__getDragHandler$self$$.$_dragMode$ ? $JSCompiler_StaticMethods__getDragHandler$self$$.$_panZoomHandler$ : "zoom" == $JSCompiler_StaticMethods__getDragHandler$self$$.$_dragMode$ ? $JSCompiler_StaticMethods__getDragHandler$self$$.$_marqueeZoomHandler$ : "select" == $JSCompiler_StaticMethods__getDragHandler$self$$.$_dragMode$ ? $JSCompiler_StaticMethods__getDragHandler$self$$.$_marqueeSelectHandler$ : $JSCompiler_alias_NULL$$
}
$JSCompiler_prototypeAlias$$.$_onDragStart$ = function $$JSCompiler_prototypeAlias$$$$_onDragStart$$($event$$193$$) {
  return dvt.$Agent$.$isTouchDevice$() ? this.$_onTouchDragStart$($event$$193$$) : this.$_onMouseDragStart$($event$$193$$)
};
$JSCompiler_prototypeAlias$$.$_onDragMove$ = function $$JSCompiler_prototypeAlias$$$$_onDragMove$$($event$$194$$) {
  return dvt.$Agent$.$isTouchDevice$() ? this.$_onTouchDragMove$($event$$194$$) : this.$_onMouseDragMove$($event$$194$$)
};
$JSCompiler_prototypeAlias$$.$_onDragEnd$ = function $$JSCompiler_prototypeAlias$$$$_onDragEnd$$($event$$195$$) {
  return dvt.$Agent$.$isTouchDevice$() ? this.$_onTouchDragEnd$($event$$195$$) : this.$_onMouseDragEnd$($event$$195$$)
};
$JSCompiler_prototypeAlias$$.$_onMouseDragStart$ = function $$JSCompiler_prototypeAlias$$$$_onMouseDragStart$$($event$$196$$) {
  var $relPos$$31$$ = this.$_getRelativePosition$($event$$196$$.pageX, $event$$196$$.pageY), $dragHandler$$ = $JSCompiler_StaticMethods__getDragHandler$$(this, $relPos$$31$$), $chartEvent$$, $obj$$112$$ = this.$GetLogicalObject$(this.$GetCurrentTargetForEvent$($event$$196$$));
  if((!$obj$$112$$ || !$obj$$112$$.$isSelectable$ || !$obj$$112$$.$isSelectable$()) && 0 == $event$$196$$.button && $dragHandler$$) {
    ($chartEvent$$ = $dragHandler$$.$processDragStart$($relPos$$31$$, $event$$196$$.ctrlKey)) && this.$_callback$.call(this.$_callbackObj$, $chartEvent$$), this.$_chart$.setCursor($dragHandler$$.getCursor($relPos$$31$$)), $JSCompiler_StaticMethods_setDragButtonsVisible$$(this, $JSCompiler_alias_FALSE$$), this.$_chart$ != this.$getCtx$().$getCurrentKeyboardFocus$() && this.$getCtx$().$setCurrentKeyboardFocus$(this.$_chart$)
  }
  return $chartEvent$$ ? (this.$_dataCursorHandler$ && $JSCompiler_StaticMethods__removeDataCursor$$(this.$_dataCursorHandler$, $JSCompiler_alias_VOID$$), $JSCompiler_alias_TRUE$$) : $JSCompiler_alias_FALSE$$
};
$JSCompiler_prototypeAlias$$.$_onMouseDragMove$ = function $$JSCompiler_prototypeAlias$$$$_onMouseDragMove$$($event$$197$$) {
  var $relPos$$32$$ = this.$_getRelativePosition$($event$$197$$.pageX, $event$$197$$.pageY), $dragHandler$$1$$ = $JSCompiler_StaticMethods__getDragHandler$$(this), $chartEvent$$1$$;
  if($dragHandler$$1$$ && ($chartEvent$$1$$ = $dragHandler$$1$$.$processDragMove$($relPos$$32$$, $event$$197$$.ctrlKey))) {
    this.$_callback$.call(this.$_callbackObj$, $chartEvent$$1$$), $JSCompiler_StaticMethods_setDragButtonsVisible$$(this, $JSCompiler_alias_FALSE$$)
  }
  $chartEvent$$1$$ && $event$$197$$.stopPropagation()
};
$JSCompiler_prototypeAlias$$.$_onMouseDragEnd$ = function $$JSCompiler_prototypeAlias$$$$_onMouseDragEnd$$($chartEvent$$2_event$$198$$) {
  var $relPos$$33$$ = this.$_getRelativePosition$($chartEvent$$2_event$$198$$.pageX, $chartEvent$$2_event$$198$$.pageY), $axisSpace$$1_dragHandler$$2$$ = $JSCompiler_StaticMethods__getDragHandler$$(this);
  if($axisSpace$$1_dragHandler$$2$$) {
    if($chartEvent$$2_event$$198$$ = $axisSpace$$1_dragHandler$$2$$.$processDragEnd$($relPos$$33$$, $chartEvent$$2_event$$198$$.ctrlKey)) {
      this.$_callback$.call(this.$_callbackObj$, $chartEvent$$2_event$$198$$), $JSCompiler_StaticMethods_autoToggleZoomButton$$(this)
    }
    this.$_chart$.setCursor($axisSpace$$1_dragHandler$$2$$.getCursor($relPos$$33$$));
    ($axisSpace$$1_dragHandler$$2$$ = this.$_chart$.$_axisSpace$) && $JSCompiler_StaticMethods_setDragButtonsVisible$$(this, $axisSpace$$1_dragHandler$$2$$.$containsPoint$($relPos$$33$$.x, $relPos$$33$$.y))
  }
  this.$_stageAbsolutePosition$ = $JSCompiler_alias_NULL$$
};
$JSCompiler_prototypeAlias$$.$OnMouseMove$ = function $$JSCompiler_prototypeAlias$$$$OnMouseMove$$($dragHandler$$3_event$$199$$) {
  $DvtChartEventManager$$.$superclass$.$OnMouseMove$.call(this, $dragHandler$$3_event$$199$$);
  var $relPos$$34$$ = this.$_getRelativePosition$($dragHandler$$3_event$$199$$.pageX, $dragHandler$$3_event$$199$$.pageY);
  this.$_dataCursorHandler$ && (this.$GetCurrentTargetForEvent$($dragHandler$$3_event$$199$$) instanceof dvt.$Button$ ? $JSCompiler_StaticMethods__removeDataCursor$$(this.$_dataCursorHandler$, $JSCompiler_alias_VOID$$) : $JSCompiler_StaticMethods_processMove$$(this.$_dataCursorHandler$, $relPos$$34$$));
  ($dragHandler$$3_event$$199$$ = $JSCompiler_StaticMethods__getDragHandler$$(this, $relPos$$34$$)) ? this.$_chart$.setCursor($dragHandler$$3_event$$199$$.getCursor($relPos$$34$$)) : this.$_chart$.setCursor("default")
};
$JSCompiler_prototypeAlias$$.$OnMouseOut$ = function $$JSCompiler_prototypeAlias$$$$OnMouseOut$$($event$$200$$) {
  $DvtChartEventManager$$.$superclass$.$OnMouseOut$.call(this, $event$$200$$);
  var $relPos$$35$$ = this.$_getRelativePosition$($event$$200$$.pageX, $event$$200$$.pageY), $JSCompiler_StaticMethods_processOut$self$$inline_2800_axisSpace$$2$$ = this.$_chart$.$_axisSpace$;
  $JSCompiler_StaticMethods_processOut$self$$inline_2800_axisSpace$$2$$ && $JSCompiler_StaticMethods_setDragButtonsVisible$$(this, $JSCompiler_StaticMethods_processOut$self$$inline_2800_axisSpace$$2$$.$containsPoint$($relPos$$35$$.x, $relPos$$35$$.y));
  this.$_dataCursorHandler$ && ($JSCompiler_StaticMethods_processOut$self$$inline_2800_axisSpace$$2$$ = this.$_dataCursorHandler$, $JSCompiler_StaticMethods_processOut$self$$inline_2800_axisSpace$$2$$.$_chart$.$_plotAreaSpace$.$containsPoint$($relPos$$35$$.x, $relPos$$35$$.y) || $JSCompiler_StaticMethods__removeDataCursor$$($JSCompiler_StaticMethods_processOut$self$$inline_2800_axisSpace$$2$$, $JSCompiler_alias_VOID$$));
  this.$_stageAbsolutePosition$ = $JSCompiler_alias_NULL$$;
  this.$GetLogicalObject$($event$$200$$.target)
};
$JSCompiler_prototypeAlias$$.$OnMouseWheel$ = function $$JSCompiler_prototypeAlias$$$$OnMouseWheel$$($event$$201$$) {
  if($DvtChartEventUtils$$.$isZoomable$(this.$_chart$)) {
    var $delta$$6_panZoomEvent$$ = $event$$201$$.wheelDelta != $JSCompiler_alias_NULL$$ ? $event$$201$$.wheelDelta : 0, $relPos$$36$$ = this.$_getRelativePosition$($event$$201$$.pageX, $event$$201$$.pageY);
    if(this.$_panZoomHandler$ && ($delta$$6_panZoomEvent$$ = this.$_panZoomHandler$.$processMouseWheel$($relPos$$36$$, $delta$$6_panZoomEvent$$))) {
      $event$$201$$.preventDefault(), $event$$201$$.stopPropagation(), this.$_callback$.call(this.$_callbackObj$, $delta$$6_panZoomEvent$$), this.$_dataCursorHandler$ && $JSCompiler_StaticMethods_processMove$$(this.$_dataCursorHandler$, $relPos$$36$$)
    }
  }
};
$JSCompiler_prototypeAlias$$.$ShowFocusEffect$ = function $$JSCompiler_prototypeAlias$$$$ShowFocusEffect$$($event$$202$$, $navigable$$6$$) {
  if(this.$_dataCursorHandler$) {
    var $pos$$32$$ = $navigable$$6$$.$_dataPos$;
    if($pos$$32$$) {
      var $plotAreaBounds$$1$$ = this.$_chart$.$_plotAreaSpace$;
      $JSCompiler_StaticMethods_processMove$$(this.$_dataCursorHandler$, new dvt.$Point$($pos$$32$$.x + $plotAreaBounds$$1$$.x, $pos$$32$$.y + $plotAreaBounds$$1$$.y))
    }
  }
  $DvtChartEventManager$$.$superclass$.$ShowFocusEffect$.call(this, $event$$202$$, $navigable$$6$$)
};
$JSCompiler_prototypeAlias$$.$OnBlur$ = function $$JSCompiler_prototypeAlias$$$$OnBlur$$($event$$203$$) {
  this.$_dataCursorHandler$ && $JSCompiler_StaticMethods__removeDataCursor$$(this.$_dataCursorHandler$, $JSCompiler_alias_VOID$$);
  $DvtChartEventManager$$.$superclass$.$OnBlur$.call(this, $event$$203$$)
};
$JSCompiler_prototypeAlias$$.$OnClickInternal$ = function $$JSCompiler_prototypeAlias$$$$OnClickInternal$$($event$$204_pos$$33$$) {
  var $obj$$114$$ = this.$GetLogicalObject$($event$$204_pos$$33$$.target);
  $event$$204_pos$$33$$ = this.$_getRelativePosition$($event$$204_pos$$33$$.pageX, $event$$204_pos$$33$$.pageY);
  this.$SeriesFocusHandler$ && this.$SeriesFocusHandler$.$processSeriesFocus$($event$$204_pos$$33$$, $obj$$114$$);
  $obj$$114$$ && (this.$processActionEvent$($obj$$114$$), (!$obj$$114$$.$isSelectable$ || !$obj$$114$$.$isSelectable$()) && this.$processDrillEvent$($obj$$114$$))
};
$JSCompiler_prototypeAlias$$.$OnDblClickInternal$ = function $$JSCompiler_prototypeAlias$$$$OnDblClickInternal$$($event$$205_obj$$115$$) {
  ($event$$205_obj$$115$$ = this.$GetLogicalObject$($event$$205_obj$$115$$.target)) && $event$$205_obj$$115$$.$isSelectable$ && $event$$205_obj$$115$$.$isSelectable$() && this.$processDrillEvent$($event$$205_obj$$115$$)
};
$JSCompiler_prototypeAlias$$.$HandleTouchHoverStartInternal$ = function $$JSCompiler_prototypeAlias$$$$HandleTouchHoverStartInternal$$($event$$206$$) {
  var $dlo$$ = this.$GetLogicalObject$($event$$206$$.target);
  this.$TouchManager$.$setTooltipEnabled$($event$$206$$.$touch$.identifier, this.$getTooltipsEnabled$($dlo$$));
  return $JSCompiler_alias_FALSE$$
};
$JSCompiler_prototypeAlias$$.$HandleTouchHoverMoveInternal$ = function $$JSCompiler_prototypeAlias$$$$HandleTouchHoverMoveInternal$$($event$$207$$) {
  var $dlo$$1$$ = this.$GetLogicalObject$($event$$207$$.target);
  this.$TouchManager$.$setTooltipEnabled$($event$$207$$.$touch$.identifier, this.$getTooltipsEnabled$($dlo$$1$$));
  return $JSCompiler_alias_FALSE$$
};
$JSCompiler_prototypeAlias$$.$HandleTouchHoverEndInternal$ = function $$JSCompiler_prototypeAlias$$$$HandleTouchHoverEndInternal$$($event$$208_obj$$116$$) {
  if($event$$208_obj$$116$$ = this.$GetLogicalObject$($event$$208_obj$$116$$.target)) {
    this.$processActionEvent$($event$$208_obj$$116$$), (!$event$$208_obj$$116$$.$isSelectable$ || !$event$$208_obj$$116$$.$isSelectable$()) && this.$processDrillEvent$($event$$208_obj$$116$$)
  }
};
$JSCompiler_prototypeAlias$$.$HandleTouchClickInternal$ = function $$JSCompiler_prototypeAlias$$$$HandleTouchClickInternal$$($event$$209_obj$$117$$) {
  if($event$$209_obj$$117$$ = this.$GetLogicalObject$($event$$209_obj$$117$$.target)) {
    this.$processActionEvent$($event$$209_obj$$117$$), (!$event$$209_obj$$117$$.$isSelectable$ || !$event$$209_obj$$117$$.$isSelectable$()) && this.$processDrillEvent$($event$$209_obj$$117$$)
  }
};
$JSCompiler_prototypeAlias$$.$HandleTouchDblClickInternal$ = function $$JSCompiler_prototypeAlias$$$$HandleTouchDblClickInternal$$($event$$210$$) {
  var $obj$$118$$ = this.$GetLogicalObject$($event$$210$$.target);
  $obj$$118$$ && ($obj$$118$$.$isSelectable$ && $obj$$118$$.$isSelectable$()) && ($event$$210$$.preventDefault(), $event$$210$$.stopPropagation(), this.$processDrillEvent$($obj$$118$$))
};
$JSCompiler_prototypeAlias$$.$processActionEvent$ = function $$JSCompiler_prototypeAlias$$$$processActionEvent$$($obj$$119$$) {
  $obj$$119$$ && ($obj$$119$$.$getAction$ && $obj$$119$$.$getAction$()) && this.$FireEvent$(dvt.$EventFactory$.$newActionEvent$("action", $obj$$119$$.$getAction$(), $obj$$119$$.getId()))
};
$JSCompiler_prototypeAlias$$.$processDrillEvent$ = function $$JSCompiler_prototypeAlias$$$$processDrillEvent$$($obj$$120$$) {
  if($obj$$120$$ && $obj$$120$$.$isDrillable$ && $obj$$120$$.$isDrillable$()) {
    var $id$$93$$ = $obj$$120$$.getId();
    $obj$$120$$ instanceof $DvtChartObjPeer$$ ? this.$FireEvent$(dvt.$EventFactory$.$newChartDrillEvent$($id$$93$$.getId ? $id$$93$$.getId() : $id$$93$$, $obj$$120$$.$getSeries$(), $obj$$120$$.$getGroup$())) : $obj$$120$$ instanceof $DvtChartPieSlice$$ && this.$FireEvent$(dvt.$EventFactory$.$newChartDrillEvent$($id$$93$$.getId(), $id$$93$$.$getSeries$(), $id$$93$$.$getGroup$()))
  }
};
$JSCompiler_prototypeAlias$$.$ProcessRolloverEvent$ = function $$JSCompiler_prototypeAlias$$$$ProcessRolloverEvent$$($event$$211_options$$36$$, $categories$$1_hoverBehaviorDelay_obj$$121$$, $bOver$$6_rolloverEvent$$1$$) {
  $event$$211_options$$36$$ = this.$_chart$.$getOptions$();
  if("dim" == $DvtChartEventUtils$$.$getHoverBehavior$(this.$_chart$)) {
    $categories$$1_hoverBehaviorDelay_obj$$121$$ = $categories$$1_hoverBehaviorDelay_obj$$121$$.$getCategories$ ? $categories$$1_hoverBehaviorDelay_obj$$121$$.$getCategories$() : [];
    $event$$211_options$$36$$.highlightedCategories = $bOver$$6_rolloverEvent$$1$$ ? $categories$$1_hoverBehaviorDelay_obj$$121$$.slice() : $JSCompiler_alias_NULL$$;
    $bOver$$6_rolloverEvent$$1$$ = dvt.$EventFactory$.$newCategoryHighlightEvent$($event$$211_options$$36$$.highlightedCategories, $bOver$$6_rolloverEvent$$1$$);
    $categories$$1_hoverBehaviorDelay_obj$$121$$ = $DvtChartStyleUtils$$.$getHoverBehaviorDelay$(this.$_chart$);
    var $objs$$2$$ = this.$_chart$.$getObjects$();
    this.$_chart$.$pieChart$ && ($objs$$2$$ = $objs$$2$$.concat(this.$_chart$.$pieChart$.$_slices$));
    this.$RolloverHandler$.$processEvent$($bOver$$6_rolloverEvent$$1$$, $objs$$2$$, $categories$$1_hoverBehaviorDelay_obj$$121$$, "any" == $event$$211_options$$36$$.highlightMatch)
  }
};
$JSCompiler_prototypeAlias$$.$_onTouchDragStart$ = function $$JSCompiler_prototypeAlias$$$$_onTouchDragStart$$($event$$212$$) {
  var $relPos$$37_relPos2_touches$$2$$ = $event$$212$$.touches, $chartEvent$$3_relPos1$$, $dataCursorOn$$;
  if(1 == $relPos$$37_relPos2_touches$$2$$.length) {
    var $relPos$$37_relPos2_touches$$2$$ = this.$_getRelativePosition$($relPos$$37_relPos2_touches$$2$$[0].pageX, $relPos$$37_relPos2_touches$$2$$[0].pageY), $dragHandler$$4$$ = $JSCompiler_StaticMethods__getDragHandler$$(this);
    $dragHandler$$4$$ ? $chartEvent$$3_relPos1$$ = $dragHandler$$4$$.$processDragStart$($relPos$$37_relPos2_touches$$2$$, $JSCompiler_alias_TRUE$$) : this.$_dataCursorHandler$ && ($JSCompiler_StaticMethods_processMove$$(this.$_dataCursorHandler$, $relPos$$37_relPos2_touches$$2$$), $dataCursorOn$$ = $JSCompiler_alias_TRUE$$)
  }else {
    2 == $relPos$$37_relPos2_touches$$2$$.length && (this.$_panZoomHandler$ && $DvtChartEventUtils$$.$isZoomable$(this.$_chart$)) && (this.$endDrag$(), $chartEvent$$3_relPos1$$ = this.$_getRelativePosition$($relPos$$37_relPos2_touches$$2$$[0].pageX, $relPos$$37_relPos2_touches$$2$$[0].pageY), $relPos$$37_relPos2_touches$$2$$ = this.$_getRelativePosition$($relPos$$37_relPos2_touches$$2$$[1].pageX, $relPos$$37_relPos2_touches$$2$$[1].pageY), $chartEvent$$3_relPos1$$ = this.$_panZoomHandler$.$processPinchStart$($chartEvent$$3_relPos1$$, 
    $relPos$$37_relPos2_touches$$2$$))
  }
  $chartEvent$$3_relPos1$$ && (this.$_callback$.call(this.$_callbackObj$, $chartEvent$$3_relPos1$$), this.$getCtx$().$getTooltipManager$().$hideTooltip$());
  return $chartEvent$$3_relPos1$$ || $dataCursorOn$$ ? ($event$$212$$.preventDefault(), $event$$212$$.stopPropagation(), $JSCompiler_StaticMethods_setDragButtonsVisible$$(this, $JSCompiler_alias_FALSE$$), $JSCompiler_alias_TRUE$$) : $JSCompiler_alias_FALSE$$
};
$JSCompiler_prototypeAlias$$.$_onTouchDragMove$ = function $$JSCompiler_prototypeAlias$$$$_onTouchDragMove$$($event$$213$$) {
  var $relPos$$38_relPos2$$1_touches$$3$$ = $event$$213$$.touches, $chartEvent$$4_relPos1$$1$$, $dataCursorOn$$1$$;
  if(1 == $relPos$$38_relPos2$$1_touches$$3$$.length) {
    var $relPos$$38_relPos2$$1_touches$$3$$ = this.$_getRelativePosition$($relPos$$38_relPos2$$1_touches$$3$$[0].pageX, $relPos$$38_relPos2$$1_touches$$3$$[0].pageY), $dragHandler$$5$$ = $JSCompiler_StaticMethods__getDragHandler$$(this);
    $dragHandler$$5$$ ? $chartEvent$$4_relPos1$$1$$ = $dragHandler$$5$$.$processDragMove$($relPos$$38_relPos2$$1_touches$$3$$, $JSCompiler_alias_TRUE$$) : this.$_dataCursorHandler$ && ($JSCompiler_StaticMethods_processMove$$(this.$_dataCursorHandler$, $relPos$$38_relPos2$$1_touches$$3$$), $dataCursorOn$$1$$ = $JSCompiler_alias_TRUE$$)
  }else {
    2 == $relPos$$38_relPos2$$1_touches$$3$$.length && (this.$_panZoomHandler$ && $DvtChartEventUtils$$.$isZoomable$(this.$_chart$)) && ($chartEvent$$4_relPos1$$1$$ = this.$_getRelativePosition$($relPos$$38_relPos2$$1_touches$$3$$[0].pageX, $relPos$$38_relPos2$$1_touches$$3$$[0].pageY), $relPos$$38_relPos2$$1_touches$$3$$ = this.$_getRelativePosition$($relPos$$38_relPos2$$1_touches$$3$$[1].pageX, $relPos$$38_relPos2$$1_touches$$3$$[1].pageY), $chartEvent$$4_relPos1$$1$$ = this.$_panZoomHandler$.$processPinchMove$($chartEvent$$4_relPos1$$1$$, 
    $relPos$$38_relPos2$$1_touches$$3$$))
  }
  ($chartEvent$$4_relPos1$$1$$ || $dataCursorOn$$1$$) && $event$$213$$.preventDefault();
  $chartEvent$$4_relPos1$$1$$ && (this.$_callback$.call(this.$_callbackObj$, $chartEvent$$4_relPos1$$1$$), this.$getCtx$().$getTooltipManager$().$hideTooltip$())
};
$JSCompiler_prototypeAlias$$.$_onTouchDragEnd$ = function $$JSCompiler_prototypeAlias$$$$_onTouchDragEnd$$($event$$214$$) {
  var $chartEvent1$$ = this.$endDrag$(), $chartEvent2$$;
  this.$_panZoomHandler$ && $DvtChartEventUtils$$.$isZoomable$(this.$_chart$) && ($chartEvent2$$ = this.$_panZoomHandler$.$processPinchEnd$()) && this.$_callback$.call(this.$_callbackObj$, $chartEvent2$$);
  if($chartEvent1$$ || $chartEvent2$$) {
    $event$$214$$.preventDefault(), this.$getCtx$().$getTooltipManager$().$hideTooltip$()
  }
  this.$_stageAbsolutePosition$ = $JSCompiler_alias_NULL$$;
  $JSCompiler_StaticMethods_setDragButtonsVisible$$(this, $JSCompiler_alias_TRUE$$)
};
$JSCompiler_prototypeAlias$$.$endDrag$ = function $$JSCompiler_prototypeAlias$$$$endDrag$$() {
  var $dragHandler$$6$$ = $JSCompiler_StaticMethods__getDragHandler$$(this), $chartEvent$$5$$;
  $dragHandler$$6$$ && ($chartEvent$$5$$ = $dragHandler$$6$$.$processDragEnd$($JSCompiler_alias_NULL$$, $JSCompiler_alias_TRUE$$)) && this.$_callback$.call(this.$_callbackObj$, $chartEvent$$5$$);
  this.$_dataCursorHandler$ && $JSCompiler_StaticMethods__removeDataCursor$$(this.$_dataCursorHandler$, $JSCompiler_alias_VOID$$);
  $chartEvent$$5$$ && this.$_callback$.call(this.$_callbackObj$, $chartEvent$$5$$);
  return $chartEvent$$5$$
};
$JSCompiler_prototypeAlias$$.$zoomBy$ = function $$JSCompiler_prototypeAlias$$$$zoomBy$$($chartEvent$$6_dz$$3$$) {
  this.$_panZoomHandler$ && $DvtChartEventUtils$$.$isZoomable$(this.$_chart$) && ($chartEvent$$6_dz$$3$$ = this.$_panZoomHandler$.$zoomBy$($chartEvent$$6_dz$$3$$)) && this.$_callback$.call(this.$_callbackObj$, $chartEvent$$6_dz$$3$$)
};
$JSCompiler_prototypeAlias$$.$panBy$ = function $$JSCompiler_prototypeAlias$$$$panBy$$($dx$$7$$, $dy$$9$$) {
  if(this.$_panZoomHandler$ && $DvtChartEventUtils$$.$isScrollable$(this.$_chart$)) {
    var $chartEvent$$7$$ = this.$_panZoomHandler$.$panBy$($dx$$7$$, $dy$$9$$);
    $chartEvent$$7$$ && this.$_callback$.call(this.$_callbackObj$, $chartEvent$$7$$)
  }
};
function $JSCompiler_StaticMethods_hideHoverFeedback$$($JSCompiler_StaticMethods_hideHoverFeedback$self$$) {
  $JSCompiler_StaticMethods_hideHoverFeedback$self$$.$hideTooltip$();
  $JSCompiler_StaticMethods_hideHoverFeedback$self$$.$_dataCursorHandler$ && $JSCompiler_StaticMethods__removeDataCursor$$($JSCompiler_StaticMethods_hideHoverFeedback$self$$.$_dataCursorHandler$, $JSCompiler_alias_VOID$$)
}
$JSCompiler_prototypeAlias$$.$hideTooltip$ = function $$JSCompiler_prototypeAlias$$$$hideTooltip$$() {
  (!this.$_dataCursorHandler$ || !this.$_dataCursorHandler$.$_dataCursorShown$) && $DvtChartEventManager$$.$superclass$.$hideTooltip$.call(this)
};
$JSCompiler_prototypeAlias$$.$getTooltipsEnabled$ = function $$JSCompiler_prototypeAlias$$$$getTooltipsEnabled$$($logicalObj$$5$$) {
  return this.$_dataCursorHandler$ && ($logicalObj$$5$$ instanceof $DvtChartObjPeer$$ || $logicalObj$$5$$ instanceof $DvtChartRefObjPeer$$ || this.$_dataCursorHandler$.$_dataCursorShown$) ? $JSCompiler_alias_FALSE$$ : $DvtChartEventManager$$.$superclass$.$getTooltipsEnabled$.call(this)
};
$JSCompiler_prototypeAlias$$.$cancelMarquee$ = function $$JSCompiler_prototypeAlias$$$$cancelMarquee$$($event$$215$$) {
  "zoom" == this.$_dragMode$ ? this.$_marqueeZoomHandler$.$cancelMarquee$() && $event$$215$$.preventDefault() : "select" == this.$_dragMode$ && this.$_marqueeSelectHandler$ && this.$_marqueeSelectHandler$.$cancelMarquee$() && this.$_chart$.$render$()
};
function $JSCompiler_StaticMethods_setDragMode$$($JSCompiler_StaticMethods_setDragMode$self$$, $dragMode$$) {
  $JSCompiler_StaticMethods_setDragMode$self$$.$_dragMode$ = $dragMode$$ == $JSCompiler_alias_NULL$$ ? dvt.$Agent$.$isTouchDevice$() ? "off" : $DvtChartEventUtils$$.$isScrollable$($JSCompiler_StaticMethods_setDragMode$self$$.$_chart$) ? "pan" : "multiple" == $JSCompiler_StaticMethods_setDragMode$self$$.$_chart$.$getOptions$().selectionMode ? "select" : $JSCompiler_alias_NULL$$ : $dragMode$$;
  $JSCompiler_StaticMethods_isFullViewport$$($JSCompiler_StaticMethods_setDragMode$self$$.$_chart$.$xAxis$) && (!$JSCompiler_StaticMethods_setDragMode$self$$.$_chart$.$yAxis$ || $JSCompiler_StaticMethods_isFullViewport$$($JSCompiler_StaticMethods_setDragMode$self$$.$_chart$.$yAxis$)) && $JSCompiler_StaticMethods_autoToggleZoomButton$$($JSCompiler_StaticMethods_setDragMode$self$$)
}
$JSCompiler_prototypeAlias$$.$onZoomButtonClick$ = function $$JSCompiler_prototypeAlias$$$$onZoomButtonClick$$() {
  this.$zoomButton$.$_bToggled$ ? (this.$selectButton$ && this.$selectButton$.$setToggled$($JSCompiler_alias_FALSE$$), $JSCompiler_StaticMethods_setDragMode$$(this, "zoom")) : $JSCompiler_StaticMethods_setDragMode$$(this, $JSCompiler_alias_NULL$$)
};
$JSCompiler_prototypeAlias$$.$onPanButtonClick$ = function $$JSCompiler_prototypeAlias$$$$onPanButtonClick$$() {
  this.$panButton$.$_bToggled$ ? (this.$selectButton$ && this.$selectButton$.$setToggled$($JSCompiler_alias_FALSE$$), $JSCompiler_StaticMethods_setDragMode$$(this, "pan")) : $JSCompiler_StaticMethods_setDragMode$$(this, $JSCompiler_alias_NULL$$)
};
$JSCompiler_prototypeAlias$$.$onSelectButtonClick$ = function $$JSCompiler_prototypeAlias$$$$onSelectButtonClick$$() {
  this.$selectButton$.$_bToggled$ ? (this.$zoomButton$ && this.$zoomButton$.$setToggled$($JSCompiler_alias_FALSE$$), this.$panButton$ && this.$panButton$.$setToggled$($JSCompiler_alias_FALSE$$), $JSCompiler_StaticMethods_setDragMode$$(this, "select")) : $JSCompiler_StaticMethods_setDragMode$$(this, $JSCompiler_alias_NULL$$)
};
function $JSCompiler_StaticMethods_setDragButtonsVisible$$($JSCompiler_StaticMethods_setDragButtonsVisible$self$$, $visible$$4$$) {
  if($visible$$4$$ && !$JSCompiler_StaticMethods_setDragButtonsVisible$self$$.$_dragButtonsVisible$) {
    var $JSCompiler_StaticMethods_hideDragButtons$self$$inline_2815_JSCompiler_StaticMethods_showDragButtons$self$$inline_2813$$ = $JSCompiler_StaticMethods_setDragButtonsVisible$self$$.$_chart$;
    $JSCompiler_StaticMethods_hideDragButtons$self$$inline_2815_JSCompiler_StaticMethods_showDragButtons$self$$inline_2813$$.$dragButtons$ && $JSCompiler_StaticMethods_hideDragButtons$self$$inline_2815_JSCompiler_StaticMethods_showDragButtons$self$$inline_2813$$.$dragButtons$.$setVisible$($JSCompiler_alias_TRUE$$);
    $JSCompiler_StaticMethods_setDragButtonsVisible$self$$.$_dragButtonsVisible$ = $JSCompiler_alias_TRUE$$
  }else {
    !$visible$$4$$ && $JSCompiler_StaticMethods_setDragButtonsVisible$self$$.$_dragButtonsVisible$ && ($JSCompiler_StaticMethods_hideDragButtons$self$$inline_2815_JSCompiler_StaticMethods_showDragButtons$self$$inline_2813$$ = $JSCompiler_StaticMethods_setDragButtonsVisible$self$$.$_chart$, $JSCompiler_StaticMethods_hideDragButtons$self$$inline_2815_JSCompiler_StaticMethods_showDragButtons$self$$inline_2813$$.$dragButtons$ && $JSCompiler_StaticMethods_hideDragButtons$self$$inline_2815_JSCompiler_StaticMethods_showDragButtons$self$$inline_2813$$.$dragButtons$.$setVisible$($JSCompiler_alias_FALSE$$), 
    $JSCompiler_StaticMethods_setDragButtonsVisible$self$$.$_dragButtonsVisible$ = $JSCompiler_alias_FALSE$$)
  }
}
function $JSCompiler_StaticMethods_autoToggleZoomButton$$($JSCompiler_StaticMethods_autoToggleZoomButton$self$$) {
  !dvt.$Agent$.$isTouchDevice$() && $JSCompiler_StaticMethods_autoToggleZoomButton$self$$.$zoomButton$ && ($JSCompiler_StaticMethods_isFullViewport$$($JSCompiler_StaticMethods_autoToggleZoomButton$self$$.$_chart$.$xAxis$) && $JSCompiler_StaticMethods_isFullViewport$$($JSCompiler_StaticMethods_autoToggleZoomButton$self$$.$_chart$.$yAxis$) ? "pan" == $JSCompiler_StaticMethods_autoToggleZoomButton$self$$.$_dragMode$ && ($JSCompiler_StaticMethods_autoToggleZoomButton$self$$.$zoomButton$.$setToggled$($JSCompiler_alias_TRUE$$), 
  $JSCompiler_StaticMethods_autoToggleZoomButton$self$$.$onZoomButtonClick$()) : "zoom" == $JSCompiler_StaticMethods_autoToggleZoomButton$self$$.$_dragMode$ && ($JSCompiler_StaticMethods_autoToggleZoomButton$self$$.$zoomButton$.$setToggled$($JSCompiler_alias_FALSE$$), $JSCompiler_StaticMethods_autoToggleZoomButton$self$$.$onZoomButtonClick$()))
}
$JSCompiler_prototypeAlias$$.$GetTouchResponse$ = function $$JSCompiler_prototypeAlias$$$$GetTouchResponse$$() {
  return this.$_dragMode$ && "off" != this.$_dragMode$ ? dvt.$EventManager$.$TOUCH_RESPONSE_TOUCH_HOLD$ : this.$_chart$.$getOptions$().touchResponse
};
function $DvtChartKeyboardHandler$$($manager$$9$$, $chart$$2$$) {
  this.Init($manager$$9$$, $chart$$2$$)
}
dvt.$Obj$.$createSubclass$($DvtChartKeyboardHandler$$, dvt.$KeyboardHandler$);
$JSCompiler_prototypeAlias$$ = $DvtChartKeyboardHandler$$.prototype;
$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($manager$$10$$, $chart$$3$$) {
  $DvtChartKeyboardHandler$$.$superclass$.Init.call(this, $manager$$10$$);
  this.$_chart$ = $chart$$3$$
};
$JSCompiler_prototypeAlias$$.$isSelectionEvent$ = function $$JSCompiler_prototypeAlias$$$$isSelectionEvent$$($event$$219$$) {
  return this.$isNavigationEvent$($event$$219$$) && !$event$$219$$.ctrlKey
};
$JSCompiler_prototypeAlias$$.$isMultiSelectEvent$ = function $$JSCompiler_prototypeAlias$$$$isMultiSelectEvent$$($event$$220$$) {
  return $event$$220$$.keyCode == dvt.$KeyboardEvent$.$SPACE$ && $event$$220$$.ctrlKey
};
$JSCompiler_prototypeAlias$$.$processKeyDown$ = function $$JSCompiler_prototypeAlias$$$$processKeyDown$$($event$$221$$) {
  var $currentNavigable$$4_keyCode$$11_navigables$$5$$ = $event$$221$$.keyCode;
  if($currentNavigable$$4_keyCode$$11_navigables$$5$$ == dvt.$KeyboardEvent$.$TAB$) {
    if($currentNavigable$$4_keyCode$$11_navigables$$5$$ = this.$_eventManager$.$getFocus$()) {
      return dvt.$EventManager$.$consumeEvent$($event$$221$$), $currentNavigable$$4_keyCode$$11_navigables$$5$$
    }
    $currentNavigable$$4_keyCode$$11_navigables$$5$$ = $DvtChartEventUtils$$.$getKeyboardNavigables$(this.$_chart$);
    if(0 < $currentNavigable$$4_keyCode$$11_navigables$$5$$.length) {
      return dvt.$EventManager$.$consumeEvent$($event$$221$$), this.$getDefaultNavigable$($currentNavigable$$4_keyCode$$11_navigables$$5$$)
    }
  }else {
    if($currentNavigable$$4_keyCode$$11_navigables$$5$$ == dvt.$KeyboardEvent$.$ENTER$) {
      if($currentNavigable$$4_keyCode$$11_navigables$$5$$ = this.$_eventManager$.$getFocus$()) {
        return this.$_eventManager$.$processActionEvent$($currentNavigable$$4_keyCode$$11_navigables$$5$$), this.$_eventManager$.$processDrillEvent$($currentNavigable$$4_keyCode$$11_navigables$$5$$), dvt.$EventManager$.$consumeEvent$($event$$221$$), $currentNavigable$$4_keyCode$$11_navigables$$5$$
      }
    }else {
      $currentNavigable$$4_keyCode$$11_navigables$$5$$ == dvt.$KeyboardEvent$.$ESCAPE$ ? this.$_eventManager$.$cancelMarquee$($event$$221$$) : $currentNavigable$$4_keyCode$$11_navigables$$5$$ == dvt.$KeyboardEvent$.$PAGE_UP$ ? (($event$$221$$.ctrlKey || $event$$221$$.shiftKey || $DvtChartTypeUtils$$.$isBLAC$(this.$_chart$)) && $DvtChartTypeUtils$$.$isVertical$(this.$_chart$) ? this.$_eventManager$.$panBy$(-0.25, 0) : this.$_eventManager$.$panBy$(0, -0.25), dvt.$EventManager$.$consumeEvent$($event$$221$$)) : 
      $currentNavigable$$4_keyCode$$11_navigables$$5$$ == dvt.$KeyboardEvent$.$PAGE_DOWN$ ? (($event$$221$$.ctrlKey || $event$$221$$.shiftKey || $DvtChartTypeUtils$$.$isBLAC$(this.$_chart$)) && $DvtChartTypeUtils$$.$isVertical$(this.$_chart$) ? this.$_eventManager$.$panBy$(0.25, 0) : this.$_eventManager$.$panBy$(0, 0.25), dvt.$EventManager$.$consumeEvent$($event$$221$$)) : dvt.$KeyboardEvent$.$isEquals$($event$$221$$) || dvt.$KeyboardEvent$.$isPlus$($event$$221$$) ? this.$_eventManager$.$zoomBy$(1.5) : 
      (dvt.$KeyboardEvent$.$isMinus$($event$$221$$) || dvt.$KeyboardEvent$.$isUnderscore$($event$$221$$)) && this.$_eventManager$.$zoomBy$(1 / 1.5)
    }
  }
  return $DvtChartKeyboardHandler$$.$superclass$.$processKeyDown$.call(this, $event$$221$$)
};
$JSCompiler_prototypeAlias$$.$getDefaultNavigable$ = function $$JSCompiler_prototypeAlias$$$$getDefaultNavigable$$($navigableItems$$) {
  if(!$navigableItems$$ || 0 >= $navigableItems$$.length) {
    return $JSCompiler_alias_NULL$$
  }
  for(var $isPie$$ = $DvtChartTypeUtils$$.$isPie$(this.$_chart$), $defaultNavigable$$, $defaultSeries$$, $defaultGroup$$, $navigable$$7$$, $i$$283$$ = 0;$i$$283$$ < $navigableItems$$.length;$i$$283$$++) {
    $navigable$$7$$ = $navigableItems$$[$i$$283$$], !$defaultNavigable$$ || $navigable$$7$$.$getSeriesIndex$() < $defaultSeries$$ ? ($defaultNavigable$$ = $navigable$$7$$, $defaultSeries$$ = $navigable$$7$$.$getSeriesIndex$(), $isPie$$ || ($defaultGroup$$ = $navigable$$7$$.$getGroupIndex$())) : !$isPie$$ && $navigable$$7$$.$getGroupIndex$() < $defaultGroup$$ && ($defaultNavigable$$ = $navigable$$7$$, $defaultSeries$$ = $navigable$$7$$.$getSeriesIndex$(), $defaultGroup$$ = $navigable$$7$$.$getGroupIndex$())
  }
  return $defaultNavigable$$
};
function $DvtChartObjPeer$$($chart$$4$$, $displayables$$3$$, $seriesIndex$$10$$, $groupIndex$$5$$, $dataPos$$) {
  this.Init($chart$$4$$, $displayables$$3$$, $seriesIndex$$10$$, $groupIndex$$5$$, $dataPos$$)
}
dvt.$Obj$.$createSubclass$($DvtChartObjPeer$$, dvt.$Obj$);
$JSCompiler_prototypeAlias$$ = $DvtChartObjPeer$$.prototype;
$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($chart$$5_i$$284_index$$131$$, $displayables$$4$$, $displayable$$21_seriesIndex$$11$$, $groupIndex$$6$$, $dataItem$$4_dataPos$$1_seriesItem$$) {
  this.$_chart$ = $chart$$5_i$$284_index$$131$$;
  this.$_displayables$ = $displayables$$4$$;
  this.$_seriesIndex$ = !isNaN($displayable$$21_seriesIndex$$11$$) ? $displayable$$21_seriesIndex$$11$$ : -1;
  this.$_groupIndex$ = !isNaN($groupIndex$$6$$) ? $groupIndex$$6$$ : -1;
  this.$_dataPos$ = $dataItem$$4_dataPos$$1_seriesItem$$;
  this.$_isShowingKeyboardFocusEffect$ = this.$_isSelected$ = $JSCompiler_alias_FALSE$$;
  0 <= $displayable$$21_seriesIndex$$11$$ && (this.$_series$ = $DvtChartDataUtils$$.$getSeries$($chart$$5_i$$284_index$$131$$, $displayable$$21_seriesIndex$$11$$));
  0 <= $groupIndex$$6$$ && (this.$_group$ = $DvtChartDataUtils$$.$getGroup$($chart$$5_i$$284_index$$131$$, $groupIndex$$6$$));
  if($dataItem$$4_dataPos$$1_seriesItem$$ = $DvtChartDataUtils$$.$getSeriesItem$($chart$$5_i$$284_index$$131$$, $displayable$$21_seriesIndex$$11$$)) {
    this.$_action$ = $dataItem$$4_dataPos$$1_seriesItem$$.action, this.$_drillable$ = $DvtChartEventUtils$$.$isSeriesDrillable$($chart$$5_i$$284_index$$131$$, $displayable$$21_seriesIndex$$11$$), this.$_stampId$ = $dataItem$$4_dataPos$$1_seriesItem$$._id
  }
  $dataItem$$4_dataPos$$1_seriesItem$$ = $DvtChartDataUtils$$.$getDataItem$($chart$$5_i$$284_index$$131$$, $displayable$$21_seriesIndex$$11$$, $groupIndex$$6$$);
  this.$_categories$ = $DvtChartDataUtils$$.$getDataItemCategories$($chart$$5_i$$284_index$$131$$, $displayable$$21_seriesIndex$$11$$, $groupIndex$$6$$);
  $dataItem$$4_dataPos$$1_seriesItem$$ && (this.$_dataItemId$ = $dataItem$$4_dataPos$$1_seriesItem$$.id, this.$_action$ = $dataItem$$4_dataPos$$1_seriesItem$$.action, this.$_drillable$ = $DvtChartEventUtils$$.$isDataItemDrillable$($chart$$5_i$$284_index$$131$$, $displayable$$21_seriesIndex$$11$$, $groupIndex$$6$$), this.$_stampId$ = $dataItem$$4_dataPos$$1_seriesItem$$._id);
  if(this.$_action$ || this.$_drillable$) {
    for($chart$$5_i$$284_index$$131$$ = 0;$chart$$5_i$$284_index$$131$$ < this.$_displayables$.length;$chart$$5_i$$284_index$$131$$++) {
      this.$_displayables$[$chart$$5_i$$284_index$$131$$].setCursor("pointer")
    }
  }
  for($chart$$5_i$$284_index$$131$$ = 0;$chart$$5_i$$284_index$$131$$ < $displayables$$4$$.length;$chart$$5_i$$284_index$$131$$++) {
    $displayable$$21_seriesIndex$$11$$ = $displayables$$4$$[$chart$$5_i$$284_index$$131$$], $displayable$$21_seriesIndex$$11$$ instanceof $DvtChartLineArea$$ || $displayable$$21_seriesIndex$$11$$.$setAriaRole$("img"), this.$_updateAriaLabel$($displayable$$21_seriesIndex$$11$$)
  }
};
function $DvtChartObjPeer$associate$$($displayable$$22$$, $chart$$6$$, $identObj_seriesIndex$$12$$, $groupIndex$$7$$, $dataPos$$2$$) {
  $displayable$$22$$ && ($identObj_seriesIndex$$12$$ = new $DvtChartObjPeer$$($chart$$6$$, [$displayable$$22$$], $identObj_seriesIndex$$12$$, $groupIndex$$7$$, $dataPos$$2$$), $chart$$6$$.$registerObject$($identObj_seriesIndex$$12$$), $chart$$6$$.$getEventManager$().$associate$($displayable$$22$$, $identObj_seriesIndex$$12$$))
}
$JSCompiler_prototypeAlias$$.getId = function $$JSCompiler_prototypeAlias$$$getId$() {
  return 0 <= this.$_seriesIndex$ && 0 <= this.$_groupIndex$ ? new $DvtChartDataItem$$(this.$_dataItemId$, this.$getSeries$(), this.$getGroup$()) : 0 <= this.$_seriesIndex$ ? this.$getSeries$() : $JSCompiler_alias_NULL$$
};
$JSCompiler_prototypeAlias$$.$getSeries$ = $JSCompiler_get$$("$_series$");
$JSCompiler_prototypeAlias$$.$getSeriesIndex$ = $JSCompiler_get$$("$_seriesIndex$");
$JSCompiler_prototypeAlias$$.$getGroup$ = $JSCompiler_get$$("$_group$");
$JSCompiler_prototypeAlias$$.$getGroupIndex$ = $JSCompiler_get$$("$_groupIndex$");
$JSCompiler_prototypeAlias$$.$getAction$ = $JSCompiler_get$$("$_action$");
$JSCompiler_prototypeAlias$$.$isDrillable$ = $JSCompiler_get$$("$_drillable$");
$JSCompiler_prototypeAlias$$.$isDoubleClickable$ = function $$JSCompiler_prototypeAlias$$$$isDoubleClickable$$() {
  return this.$isSelectable$() && this.$isDrillable$()
};
$JSCompiler_prototypeAlias$$.$getSeriesType$ = function $$JSCompiler_prototypeAlias$$$$getSeriesType$$() {
  return $DvtChartStyleUtils$$.$getSeriesType$(this.$_chart$, this.$_seriesIndex$)
};
$JSCompiler_prototypeAlias$$.$getSeriesItem$ = function $$JSCompiler_prototypeAlias$$$$getSeriesItem$$() {
  return $DvtChartDataUtils$$.$getSeriesItem$(this.$_chart$, this.$_seriesIndex$)
};
$JSCompiler_prototypeAlias$$.$getDatatip$ = function $$JSCompiler_prototypeAlias$$$$getDatatip$$() {
  return $DvtChartTooltipUtils$$.$getDatatip$(this.$_chart$, this.$_seriesIndex$, this.$_groupIndex$, $JSCompiler_alias_TRUE$$)
};
$JSCompiler_prototypeAlias$$.$getDatatipColor$ = function $$JSCompiler_prototypeAlias$$$$getDatatipColor$$() {
  return $DvtChartTooltipUtils$$.$getDatatipColor$(this.$_chart$, this.$_seriesIndex$, this.$_groupIndex$)
};
$JSCompiler_prototypeAlias$$.$isSelectable$ = function $$JSCompiler_prototypeAlias$$$$isSelectable$$() {
  return $DvtChartStyleUtils$$.$isSelectable$(this.$_chart$, this.$getSeriesIndex$(), this.$getGroupIndex$())
};
$JSCompiler_prototypeAlias$$.$isSelected$ = $JSCompiler_get$$("$_isSelected$");
$JSCompiler_prototypeAlias$$.$setSelected$ = function $$JSCompiler_prototypeAlias$$$$setSelected$$($bSelected$$) {
  this.$_isSelected$ = $bSelected$$;
  for(var $i$$285$$ = 0;$i$$285$$ < this.$_displayables$.length;$i$$285$$++) {
    this.$_displayables$[$i$$285$$].$setSelected$ && (this.$_displayables$[$i$$285$$].$setSelected$($bSelected$$), this.$_updateAriaLabel$(this.$_displayables$[$i$$285$$]))
  }
};
$JSCompiler_prototypeAlias$$.$showHoverEffect$ = function $$JSCompiler_prototypeAlias$$$$showHoverEffect$$() {
  for(var $i$$286$$ = 0;$i$$286$$ < this.$_displayables$.length;$i$$286$$++) {
    this.$_displayables$[$i$$286$$].$showHoverEffect$ && this.$_displayables$[$i$$286$$].$showHoverEffect$()
  }
};
$JSCompiler_prototypeAlias$$.$hideHoverEffect$ = function $$JSCompiler_prototypeAlias$$$$hideHoverEffect$$() {
  for(var $i$$287$$ = 0;$i$$287$$ < this.$_displayables$.length;$i$$287$$++) {
    this.$_displayables$[$i$$287$$].$hideHoverEffect$ && this.$_displayables$[$i$$287$$].$hideHoverEffect$()
  }
};
$JSCompiler_prototypeAlias$$.$getShowPopupBehaviors$ = function $$JSCompiler_prototypeAlias$$$$getShowPopupBehaviors$$() {
  return this.$_chart$.$getShowPopupBehaviors$(this.$_stampId$)
};
$JSCompiler_prototypeAlias$$.$getDisplayables$ = $JSCompiler_get$$("$_displayables$");
$JSCompiler_prototypeAlias$$.$getAriaLabel$ = function $$JSCompiler_prototypeAlias$$$$getAriaLabel$$() {
  var $states$$5$$ = [], $options$$37_shortDesc$$6$$ = this.$_chart$.$getOptions$();
  this.$isSelectable$() && $states$$5$$.push(dvt.$Bundle$.$getTranslation$($options$$37_shortDesc$$6$$, this.$isSelected$() ? "stateSelected" : "stateUnselected", dvt.$Bundle$.$UTIL_PREFIX$, this.$isSelected$() ? "STATE_SELECTED" : "STATE_UNSELECTED"));
  this.$isDrillable$() && $states$$5$$.push(dvt.$Bundle$.$getTranslation$($options$$37_shortDesc$$6$$, "stateDrillable", dvt.$Bundle$.$UTIL_PREFIX$, "STATE_DRILLABLE"));
  $options$$37_shortDesc$$6$$ = $DvtChartTooltipUtils$$.$getDatatip$(this.$_chart$, this.$_seriesIndex$, this.$_groupIndex$, $JSCompiler_alias_FALSE$$);
  $options$$37_shortDesc$$6$$ == $JSCompiler_alias_NULL$$ && (0 > this.$_groupIndex$ && 0 < $states$$5$$.length) && ($options$$37_shortDesc$$6$$ = $DvtChartDataUtils$$.$getSeriesLabel$(this.$_chart$, this.$_seriesIndex$));
  return dvt.$Displayable$.$generateAriaLabel$($options$$37_shortDesc$$6$$, $states$$5$$)
};
$JSCompiler_prototypeAlias$$.$_updateAriaLabel$ = function $$JSCompiler_prototypeAlias$$$$_updateAriaLabel$$($displayable$$23$$) {
  dvt.$Agent$.$deferAriaCreation$() || $displayable$$23$$.$setAriaProperty$("label", this.$getAriaLabel$())
};
$JSCompiler_prototypeAlias$$.$getCategories$ = $JSCompiler_get$$("$_categories$");
$JSCompiler_prototypeAlias$$.$getNextNavigable$ = function $$JSCompiler_prototypeAlias$$$$getNextNavigable$$($chart$$inline_2820_event$$222$$) {
  var $chart$$7_keyCode$$12_seriesIndex$$inline_2822$$, $next$$3_nextGroupIndex$$inline_2826_nextObj$$inline_2833$$;
  $chart$$7_keyCode$$12_seriesIndex$$inline_2822$$ = $chart$$inline_2820_event$$222$$.keyCode;
  if($chart$$inline_2820_event$$222$$.type == dvt.$MouseEvent$.$CLICK$ || $chart$$7_keyCode$$12_seriesIndex$$inline_2822$$ == dvt.$KeyboardEvent$.$SPACE$ && $chart$$inline_2820_event$$222$$.ctrlKey) {
    return this
  }
  $chart$$7_keyCode$$12_seriesIndex$$inline_2822$$ = this.$_chart$;
  for(var $chartObjs_groupIndex$$inline_2823$$ = $JSCompiler_StaticMethods_getChartObjPeers$$($chart$$7_keyCode$$12_seriesIndex$$inline_2822$$), $currentValue$$inline_6251_keyCode$$inline_2819_navigables$$6_nextValue$$inline_6262$$ = [], $groupCount$$inline_2824_i$$288_nextSeriesIndex$$inline_6263_nextValue$$inline_6252$$ = 0;$groupCount$$inline_2824_i$$288_nextSeriesIndex$$inline_6263_nextValue$$inline_6252$$ < $chartObjs_groupIndex$$inline_2823$$.length;$groupCount$$inline_2824_i$$288_nextSeriesIndex$$inline_6263_nextValue$$inline_6252$$++) {
    $chartObjs_groupIndex$$inline_2823$$[$groupCount$$inline_2824_i$$288_nextSeriesIndex$$inline_6263_nextValue$$inline_6252$$].$isNavigable$() && $currentValue$$inline_6251_keyCode$$inline_2819_navigables$$6_nextValue$$inline_6262$$.push($chartObjs_groupIndex$$inline_2823$$[$groupCount$$inline_2824_i$$288_nextSeriesIndex$$inline_6263_nextValue$$inline_6252$$])
  }
  if($DvtChartTypeUtils$$.$isScatterBubble$($chart$$7_keyCode$$12_seriesIndex$$inline_2822$$)) {
    $next$$3_nextGroupIndex$$inline_2826_nextObj$$inline_2833$$ = dvt.$KeyboardHandler$.$getNextAdjacentNavigable$(this, $chart$$inline_2820_event$$222$$, $currentValue$$inline_6251_keyCode$$inline_2819_navigables$$6_nextValue$$inline_6262$$)
  }else {
    if($DvtChartTypeUtils$$.$isLineArea$($chart$$7_keyCode$$12_seriesIndex$$inline_2822$$) || $DvtChartTypeUtils$$.$isStacked$($chart$$7_keyCode$$12_seriesIndex$$inline_2822$$) || $DvtChartTypeUtils$$.$isPolar$($chart$$7_keyCode$$12_seriesIndex$$inline_2822$$)) {
      $currentValue$$inline_6251_keyCode$$inline_2819_navigables$$6_nextValue$$inline_6262$$ = $chart$$inline_2820_event$$222$$.keyCode;
      $chart$$inline_2820_event$$222$$ = this.$_chart$;
      var $context$$inline_2821_isRTL$$inline_2829_itemValue$$inline_6255$$ = $chart$$inline_2820_event$$222$$.$getCtx$();
      $chart$$7_keyCode$$12_seriesIndex$$inline_2822$$ = this.$getSeriesIndex$();
      var $chartObjs_groupIndex$$inline_2823$$ = this.$getGroupIndex$(), $groupCount$$inline_2824_i$$288_nextSeriesIndex$$inline_6263_nextValue$$inline_6252$$ = $DvtChartDataUtils$$.$getGroupCount$($chart$$inline_2820_event$$222$$), $currentValue$$inline_6261_nextSeriesIndex$$inline_2825_seriesCount$$inline_6250$$, $i$$inline_6264_isHoriz$$inline_2827_nextSeriesIndex$$inline_6253_seriesCount$$inline_6260$$ = $DvtChartTypeUtils$$.$isHorizontal$($chart$$inline_2820_event$$222$$), $i$$inline_6254_isPolar$$inline_2828_itemValue$$inline_6265$$ = 
      $DvtChartTypeUtils$$.$isPolar$($chart$$inline_2820_event$$222$$), $context$$inline_2821_isRTL$$inline_2829_itemValue$$inline_6255$$ = dvt.$Agent$.$isRightToLeft$($context$$inline_2821_isRTL$$inline_2829_itemValue$$inline_6255$$), $isDown$$inline_2830$$ = $i$$inline_6264_isHoriz$$inline_2827_nextSeriesIndex$$inline_6253_seriesCount$$inline_6260$$ ? $context$$inline_2821_isRTL$$inline_2829_itemValue$$inline_6255$$ ? $currentValue$$inline_6251_keyCode$$inline_2819_navigables$$6_nextValue$$inline_6262$$ == 
      dvt.$KeyboardEvent$.$RIGHT_ARROW$ : $currentValue$$inline_6251_keyCode$$inline_2819_navigables$$6_nextValue$$inline_6262$$ == dvt.$KeyboardEvent$.$LEFT_ARROW$ : $currentValue$$inline_6251_keyCode$$inline_2819_navigables$$6_nextValue$$inline_6262$$ == dvt.$KeyboardEvent$.$DOWN_ARROW$, $isLeft$$inline_2831$$ = $i$$inline_6264_isHoriz$$inline_2827_nextSeriesIndex$$inline_6253_seriesCount$$inline_6260$$ ? $currentValue$$inline_6251_keyCode$$inline_2819_navigables$$6_nextValue$$inline_6262$$ == 
      dvt.$KeyboardEvent$.$UP_ARROW$ : $context$$inline_2821_isRTL$$inline_2829_itemValue$$inline_6255$$ ? $currentValue$$inline_6251_keyCode$$inline_2819_navigables$$6_nextValue$$inline_6262$$ == dvt.$KeyboardEvent$.$RIGHT_ARROW$ : $currentValue$$inline_6251_keyCode$$inline_2819_navigables$$6_nextValue$$inline_6262$$ == dvt.$KeyboardEvent$.$LEFT_ARROW$, $isRight$$inline_2832$$ = $i$$inline_6264_isHoriz$$inline_2827_nextSeriesIndex$$inline_6253_seriesCount$$inline_6260$$ ? $currentValue$$inline_6251_keyCode$$inline_2819_navigables$$6_nextValue$$inline_6262$$ == 
      dvt.$KeyboardEvent$.$DOWN_ARROW$ : $context$$inline_2821_isRTL$$inline_2829_itemValue$$inline_6255$$ ? $currentValue$$inline_6251_keyCode$$inline_2819_navigables$$6_nextValue$$inline_6262$$ == dvt.$KeyboardEvent$.$LEFT_ARROW$ : $currentValue$$inline_6251_keyCode$$inline_2819_navigables$$6_nextValue$$inline_6262$$ == dvt.$KeyboardEvent$.$RIGHT_ARROW$;
      if($i$$inline_6264_isHoriz$$inline_2827_nextSeriesIndex$$inline_6253_seriesCount$$inline_6260$$ ? $context$$inline_2821_isRTL$$inline_2829_itemValue$$inline_6255$$ ? $currentValue$$inline_6251_keyCode$$inline_2819_navigables$$6_nextValue$$inline_6262$$ == dvt.$KeyboardEvent$.$LEFT_ARROW$ : $currentValue$$inline_6251_keyCode$$inline_2819_navigables$$6_nextValue$$inline_6262$$ == dvt.$KeyboardEvent$.$RIGHT_ARROW$ : $currentValue$$inline_6251_keyCode$$inline_2819_navigables$$6_nextValue$$inline_6262$$ == 
      dvt.$KeyboardEvent$.$UP_ARROW$) {
        $next$$3_nextGroupIndex$$inline_2826_nextObj$$inline_2833$$ = $chartObjs_groupIndex$$inline_2823$$;
        $currentValue$$inline_6261_nextSeriesIndex$$inline_2825_seriesCount$$inline_6250$$ = $DvtChartDataUtils$$.$getSeriesCount$($chart$$inline_2820_event$$222$$);
        $currentValue$$inline_6251_keyCode$$inline_2819_navigables$$6_nextValue$$inline_6262$$ = $DvtChartDataUtils$$.$getCumulativeValue$($chart$$inline_2820_event$$222$$, $chart$$7_keyCode$$12_seriesIndex$$inline_2822$$, $chartObjs_groupIndex$$inline_2823$$);
        $i$$inline_6264_isHoriz$$inline_2827_nextSeriesIndex$$inline_6253_seriesCount$$inline_6260$$ = $groupCount$$inline_2824_i$$288_nextSeriesIndex$$inline_6263_nextValue$$inline_6252$$ = $JSCompiler_alias_NULL$$;
        for($i$$inline_6254_isPolar$$inline_2828_itemValue$$inline_6265$$ = 0;$i$$inline_6254_isPolar$$inline_2828_itemValue$$inline_6265$$ < $currentValue$$inline_6261_nextSeriesIndex$$inline_2825_seriesCount$$inline_6250$$;$i$$inline_6254_isPolar$$inline_2828_itemValue$$inline_6265$$++) {
          if($DvtChartStyleUtils$$.$isSeriesRendered$($chart$$inline_2820_event$$222$$, $i$$inline_6254_isPolar$$inline_2828_itemValue$$inline_6265$$) && ($context$$inline_2821_isRTL$$inline_2829_itemValue$$inline_6255$$ = $DvtChartDataUtils$$.$getCumulativeValue$($chart$$inline_2820_event$$222$$, $i$$inline_6254_isPolar$$inline_2828_itemValue$$inline_6265$$, $chartObjs_groupIndex$$inline_2823$$), $context$$inline_2821_isRTL$$inline_2829_itemValue$$inline_6255$$ > $currentValue$$inline_6251_keyCode$$inline_2819_navigables$$6_nextValue$$inline_6262$$ || 
          $context$$inline_2821_isRTL$$inline_2829_itemValue$$inline_6255$$ == $currentValue$$inline_6251_keyCode$$inline_2819_navigables$$6_nextValue$$inline_6262$$ && $i$$inline_6254_isPolar$$inline_2828_itemValue$$inline_6265$$ > $chart$$7_keyCode$$12_seriesIndex$$inline_2822$$)) {
            if($groupCount$$inline_2824_i$$288_nextSeriesIndex$$inline_6263_nextValue$$inline_6252$$ !== $JSCompiler_alias_NULL$$ && $context$$inline_2821_isRTL$$inline_2829_itemValue$$inline_6255$$ < $groupCount$$inline_2824_i$$288_nextSeriesIndex$$inline_6263_nextValue$$inline_6252$$ || $groupCount$$inline_2824_i$$288_nextSeriesIndex$$inline_6263_nextValue$$inline_6252$$ == $JSCompiler_alias_NULL$$) {
              $groupCount$$inline_2824_i$$288_nextSeriesIndex$$inline_6263_nextValue$$inline_6252$$ = $context$$inline_2821_isRTL$$inline_2829_itemValue$$inline_6255$$, $i$$inline_6264_isHoriz$$inline_2827_nextSeriesIndex$$inline_6253_seriesCount$$inline_6260$$ = $i$$inline_6254_isPolar$$inline_2828_itemValue$$inline_6265$$
            }
          }
        }
        $currentValue$$inline_6261_nextSeriesIndex$$inline_2825_seriesCount$$inline_6250$$ = $i$$inline_6264_isHoriz$$inline_2827_nextSeriesIndex$$inline_6253_seriesCount$$inline_6260$$
      }else {
        if($isDown$$inline_2830$$) {
          $next$$3_nextGroupIndex$$inline_2826_nextObj$$inline_2833$$ = $chartObjs_groupIndex$$inline_2823$$;
          $i$$inline_6264_isHoriz$$inline_2827_nextSeriesIndex$$inline_6253_seriesCount$$inline_6260$$ = $DvtChartDataUtils$$.$getSeriesCount$($chart$$inline_2820_event$$222$$);
          $currentValue$$inline_6261_nextSeriesIndex$$inline_2825_seriesCount$$inline_6250$$ = $DvtChartDataUtils$$.$getCumulativeValue$($chart$$inline_2820_event$$222$$, $chart$$7_keyCode$$12_seriesIndex$$inline_2822$$, $chartObjs_groupIndex$$inline_2823$$);
          $groupCount$$inline_2824_i$$288_nextSeriesIndex$$inline_6263_nextValue$$inline_6252$$ = $currentValue$$inline_6251_keyCode$$inline_2819_navigables$$6_nextValue$$inline_6262$$ = $JSCompiler_alias_NULL$$;
          for($i$$inline_6264_isHoriz$$inline_2827_nextSeriesIndex$$inline_6253_seriesCount$$inline_6260$$ -= 1;0 <= $i$$inline_6264_isHoriz$$inline_2827_nextSeriesIndex$$inline_6253_seriesCount$$inline_6260$$;$i$$inline_6264_isHoriz$$inline_2827_nextSeriesIndex$$inline_6253_seriesCount$$inline_6260$$--) {
            if($DvtChartStyleUtils$$.$isSeriesRendered$($chart$$inline_2820_event$$222$$, $i$$inline_6264_isHoriz$$inline_2827_nextSeriesIndex$$inline_6253_seriesCount$$inline_6260$$) && ($i$$inline_6254_isPolar$$inline_2828_itemValue$$inline_6265$$ = $DvtChartDataUtils$$.$getCumulativeValue$($chart$$inline_2820_event$$222$$, $i$$inline_6264_isHoriz$$inline_2827_nextSeriesIndex$$inline_6253_seriesCount$$inline_6260$$, $chartObjs_groupIndex$$inline_2823$$), $i$$inline_6254_isPolar$$inline_2828_itemValue$$inline_6265$$ < 
            $currentValue$$inline_6261_nextSeriesIndex$$inline_2825_seriesCount$$inline_6250$$ || $i$$inline_6254_isPolar$$inline_2828_itemValue$$inline_6265$$ == $currentValue$$inline_6261_nextSeriesIndex$$inline_2825_seriesCount$$inline_6250$$ && $i$$inline_6264_isHoriz$$inline_2827_nextSeriesIndex$$inline_6253_seriesCount$$inline_6260$$ < $chart$$7_keyCode$$12_seriesIndex$$inline_2822$$)) {
              if($currentValue$$inline_6251_keyCode$$inline_2819_navigables$$6_nextValue$$inline_6262$$ !== $JSCompiler_alias_NULL$$ && $i$$inline_6254_isPolar$$inline_2828_itemValue$$inline_6265$$ > $currentValue$$inline_6251_keyCode$$inline_2819_navigables$$6_nextValue$$inline_6262$$ || $currentValue$$inline_6251_keyCode$$inline_2819_navigables$$6_nextValue$$inline_6262$$ == $JSCompiler_alias_NULL$$) {
                $currentValue$$inline_6251_keyCode$$inline_2819_navigables$$6_nextValue$$inline_6262$$ = $i$$inline_6254_isPolar$$inline_2828_itemValue$$inline_6265$$, $groupCount$$inline_2824_i$$288_nextSeriesIndex$$inline_6263_nextValue$$inline_6252$$ = $i$$inline_6264_isHoriz$$inline_2827_nextSeriesIndex$$inline_6253_seriesCount$$inline_6260$$
              }
            }
          }
          $currentValue$$inline_6261_nextSeriesIndex$$inline_2825_seriesCount$$inline_6250$$ = $groupCount$$inline_2824_i$$288_nextSeriesIndex$$inline_6263_nextValue$$inline_6252$$
        }else {
          if($isRight$$inline_2832$$) {
            $currentValue$$inline_6261_nextSeriesIndex$$inline_2825_seriesCount$$inline_6250$$ = $chart$$7_keyCode$$12_seriesIndex$$inline_2822$$;
            $next$$3_nextGroupIndex$$inline_2826_nextObj$$inline_2833$$ = $chartObjs_groupIndex$$inline_2823$$;
            do {
              $next$$3_nextGroupIndex$$inline_2826_nextObj$$inline_2833$$++, $i$$inline_6254_isPolar$$inline_2828_itemValue$$inline_6265$$ && $next$$3_nextGroupIndex$$inline_2826_nextObj$$inline_2833$$ >= $groupCount$$inline_2824_i$$288_nextSeriesIndex$$inline_6263_nextValue$$inline_6252$$ && ($next$$3_nextGroupIndex$$inline_2826_nextObj$$inline_2833$$ = 0)
            }while($JSCompiler_StaticMethods_getObject$$($chart$$inline_2820_event$$222$$, $currentValue$$inline_6261_nextSeriesIndex$$inline_2825_seriesCount$$inline_6250$$, $next$$3_nextGroupIndex$$inline_2826_nextObj$$inline_2833$$) == $JSCompiler_alias_NULL$$ && $next$$3_nextGroupIndex$$inline_2826_nextObj$$inline_2833$$ < $groupCount$$inline_2824_i$$288_nextSeriesIndex$$inline_6263_nextValue$$inline_6252$$)
          }else {
            if($isLeft$$inline_2831$$) {
              $currentValue$$inline_6261_nextSeriesIndex$$inline_2825_seriesCount$$inline_6250$$ = $chart$$7_keyCode$$12_seriesIndex$$inline_2822$$;
              $next$$3_nextGroupIndex$$inline_2826_nextObj$$inline_2833$$ = $chartObjs_groupIndex$$inline_2823$$;
              do {
                $next$$3_nextGroupIndex$$inline_2826_nextObj$$inline_2833$$--, $i$$inline_6254_isPolar$$inline_2828_itemValue$$inline_6265$$ && 0 > $next$$3_nextGroupIndex$$inline_2826_nextObj$$inline_2833$$ && ($next$$3_nextGroupIndex$$inline_2826_nextObj$$inline_2833$$ = $groupCount$$inline_2824_i$$288_nextSeriesIndex$$inline_6263_nextValue$$inline_6252$$ - 1)
              }while($JSCompiler_StaticMethods_getObject$$($chart$$inline_2820_event$$222$$, $currentValue$$inline_6261_nextSeriesIndex$$inline_2825_seriesCount$$inline_6250$$, $next$$3_nextGroupIndex$$inline_2826_nextObj$$inline_2833$$) == $JSCompiler_alias_NULL$$ && -1 < $next$$3_nextGroupIndex$$inline_2826_nextObj$$inline_2833$$)
            }
          }
        }
      }
      $next$$3_nextGroupIndex$$inline_2826_nextObj$$inline_2833$$ = ($next$$3_nextGroupIndex$$inline_2826_nextObj$$inline_2833$$ = $JSCompiler_StaticMethods_getObject$$($chart$$inline_2820_event$$222$$, $currentValue$$inline_6261_nextSeriesIndex$$inline_2825_seriesCount$$inline_6250$$, $next$$3_nextGroupIndex$$inline_2826_nextObj$$inline_2833$$)) && $next$$3_nextGroupIndex$$inline_2826_nextObj$$inline_2833$$.$isNavigable$() ? $next$$3_nextGroupIndex$$inline_2826_nextObj$$inline_2833$$ : this
    }else {
      $DvtChartTypeUtils$$.$isFunnel$($chart$$7_keyCode$$12_seriesIndex$$inline_2822$$) && ($chart$$inline_2820_event$$222$$.keyCode == dvt.$KeyboardEvent$.$UP_ARROW$ || $chart$$inline_2820_event$$222$$.keyCode == dvt.$KeyboardEvent$.$DOWN_ARROW$) ? ($chart$$inline_2820_event$$222$$.keyCode -= 1, $next$$3_nextGroupIndex$$inline_2826_nextObj$$inline_2833$$ = dvt.$KeyboardHandler$.$getNextNavigable$(this, $chart$$inline_2820_event$$222$$, $currentValue$$inline_6251_keyCode$$inline_2819_navigables$$6_nextValue$$inline_6262$$)) : 
      $next$$3_nextGroupIndex$$inline_2826_nextObj$$inline_2833$$ = dvt.$KeyboardHandler$.$getNextNavigable$(this, $chart$$inline_2820_event$$222$$, $currentValue$$inline_6251_keyCode$$inline_2819_navigables$$6_nextValue$$inline_6262$$, $JSCompiler_alias_TRUE$$)
    }
  }
  return $next$$3_nextGroupIndex$$inline_2826_nextObj$$inline_2833$$
};
$JSCompiler_prototypeAlias$$.$getKeyboardBoundingBox$ = function $$JSCompiler_prototypeAlias$$$$getKeyboardBoundingBox$$($targetCoordinateSpace$$15$$) {
  return this.$_displayables$[0] ? this.$_displayables$[0].$getDimensions$($targetCoordinateSpace$$15$$) : new dvt.$Rectangle$(0, 0, 0, 0)
};
$JSCompiler_prototypeAlias$$.$getTargetElem$ = function $$JSCompiler_prototypeAlias$$$$getTargetElem$$() {
  return this.$_displayables$[0] ? this.$_displayables$[0].$getElem$() : $JSCompiler_alias_NULL$$
};
$JSCompiler_prototypeAlias$$.$showKeyboardFocusEffect$ = function $$JSCompiler_prototypeAlias$$$$showKeyboardFocusEffect$$() {
  this.$isNavigable$() && (this.$_isShowingKeyboardFocusEffect$ = $JSCompiler_alias_TRUE$$, this.$showHoverEffect$())
};
$JSCompiler_prototypeAlias$$.$hideKeyboardFocusEffect$ = function $$JSCompiler_prototypeAlias$$$$hideKeyboardFocusEffect$$() {
  this.$isNavigable$() && (this.$_isShowingKeyboardFocusEffect$ = $JSCompiler_alias_FALSE$$, this.$hideHoverEffect$())
};
$JSCompiler_prototypeAlias$$.$isShowingKeyboardFocusEffect$ = $JSCompiler_get$$("$_isShowingKeyboardFocusEffect$");
$JSCompiler_prototypeAlias$$.$isNavigable$ = function $$JSCompiler_prototypeAlias$$$$isNavigable$$() {
  return-1 != this.$getGroupIndex$() && -1 != this.$getSeriesIndex$()
};
function $DvtChartRefObjPeer$$($chart$$11$$, $displayables$$5$$, $refObj$$, $index$$132$$, $axisType$$2$$) {
  this.Init($chart$$11$$, $displayables$$5$$, $refObj$$, $index$$132$$, $axisType$$2$$)
}
dvt.$Obj$.$createSubclass$($DvtChartRefObjPeer$$, dvt.$Obj$);
$JSCompiler_prototypeAlias$$ = $DvtChartRefObjPeer$$.prototype;
$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($chart$$12_i$$291$$, $displayables$$6$$, $refObj$$1$$, $displayable$$24_index$$133$$, $axisType$$3$$) {
  this.$_chart$ = $chart$$12_i$$291$$;
  this.$_displayables$ = $displayables$$6$$;
  this.$_refObj$ = $refObj$$1$$;
  this.$_categories$ = $DvtChartRefObjUtils$$.$getRefObjCategories$(this.$_refObj$);
  this.$_index$ = $displayable$$24_index$$133$$;
  this.$_axisType$ = $axisType$$3$$;
  for($chart$$12_i$$291$$ = 0;$chart$$12_i$$291$$ < $displayables$$6$$.length;$chart$$12_i$$291$$++) {
    $displayable$$24_index$$133$$ = $displayables$$6$$[$chart$$12_i$$291$$], $displayable$$24_index$$133$$.$setAriaRole$("img"), $displayable$$24_index$$133$$.$setAriaProperty$("label", $refObj$$1$$.shortDesc)
  }
};
$JSCompiler_prototypeAlias$$.$getCategories$ = $JSCompiler_get$$("$_categories$");
$JSCompiler_prototypeAlias$$.$getDisplayables$ = $JSCompiler_get$$("$_displayables$");
$JSCompiler_prototypeAlias$$.$getIndex$ = $JSCompiler_get$$("$_index$");
$JSCompiler_prototypeAlias$$.$getDatatip$ = function $$JSCompiler_prototypeAlias$$$$getDatatip$$() {
  return $DvtChartTooltipUtils$$.$getRefObjTooltip$(this.$_chart$, this.$_refObj$, this.$_axisType$, this.$_index$)
};
$JSCompiler_prototypeAlias$$.$getDatatipColor$ = function $$JSCompiler_prototypeAlias$$$$getDatatipColor$$() {
  return $DvtChartRefObjUtils$$.$getColor$(this.$_refObj$)
};
function $DvtChartDataItem$$($id$$94$$, $series$$3$$, $group$$12$$) {
  this.id = $id$$94$$;
  this.series = $series$$3$$;
  this.group = $group$$12$$
}
$goog$exportPath_$$("DvtChartDataItem", $DvtChartDataItem$$);
dvt.$Obj$.$createSubclass$($DvtChartDataItem$$, dvt.$Obj$);
$DvtChartDataItem$$.prototype.getId = $JSCompiler_get$$("id");
$DvtChartDataItem$$.prototype.getId = $DvtChartDataItem$$.prototype.getId;
$DvtChartDataItem$$.prototype.$getSeries$ = $JSCompiler_get$$("series");
$DvtChartDataItem$$.prototype.getSeries = $DvtChartDataItem$$.prototype.$getSeries$;
$DvtChartDataItem$$.prototype.$getGroup$ = $JSCompiler_get$$("group");
$DvtChartDataItem$$.prototype.getGroup = $DvtChartDataItem$$.prototype.$getGroup$;
$DvtChartDataItem$$.prototype.$equals$ = function $$DvtChartDataItem$$$$$equals$$($dataItem$$5$$) {
  return $dataItem$$5$$ instanceof $DvtChartDataItem$$ && this.series === $dataItem$$5$$.series ? this.group instanceof Array && $dataItem$$5$$.group instanceof Array ? dvt.$ArrayUtils$.$equals$(this.group, $dataItem$$5$$.group) : this.group === $dataItem$$5$$.group : $JSCompiler_alias_FALSE$$
};
function $DvtChartDefaults$$() {
  this.Init({skyros:$DvtChartDefaults$VERSION_1$$, alta:$DvtChartDefaults$SKIN_ALTA$$, next:$DvtChartDefaults$SKIN_NEXT$$})
}
dvt.$Obj$.$createSubclass$($DvtChartDefaults$$, dvt.$BaseComponentDefaults$);
var $DvtChartDefaults$SKIN_NEXT$$ = {skin:dvt.$CSSStyle$.$SKIN_NEXT$, styleDefaults:{dataItemGaps:"auto", markerSize:10, marqueeColor:"rgba(255,255,255,0.4)", marqueeBorderColor:"#0572ce"}, yAxis:{axisLine:{rendered:"auto"}}, y2Axis:{axisLine:{rendered:"auto"}}, layout:{titlePlotAreaGap:16, footnoteGap:10, legendGapWidth:15, legendGapHeight:10, tickLabelGapHeight:8, tickLabelGapWidth:9}}, $DvtChartDefaults$SKIN_ALTA$$ = {skin:dvt.$CSSStyle$.$SKIN_ALTA$, title:{style:new dvt.$CSSStyle$("font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 13px; color: #252525;")}, 
subtitle:{style:new dvt.$CSSStyle$("font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; color: #252525;")}, footnote:{style:new dvt.$CSSStyle$("font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 11px;")}, _statusMessageStyle:new dvt.$CSSStyle$("font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 13px; color: #252525;"), styleDefaults:{seriesEffect:"color", colors:dvt.$CSSStyle$.$COLORS_ALTA$, pieCenterLabel:{style:new dvt.$CSSStyle$("font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;")}, 
dataLabelStyle:new dvt.$CSSStyle$("font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;"), stackLabelStyle:new dvt.$CSSStyle$("font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-weight: bold;"), stockRisingColor:"#6b6f74", stockFallingColor:"#ED6647"}}, $DvtChartDefaults$VERSION_1$$ = {skin:dvt.$CSSStyle$.$SKIN_SKYROS$, emptyText:$JSCompiler_alias_NULL$$, type:"bar", stack:"off", stackLabel:"off", orientation:"vertical", polarGridShape:"circle", selectionMode:"none", hideAndShowBehavior:"none", 
hoverBehavior:"none", zoomAndScroll:"off", zoomDirection:"auto", initialZooming:"none", dragMode:"user", sorting:"off", otherThreshold:0, animationOnDataChange:"none", animationOnDisplay:"none", __sparkBarSpacing:"subpixel", __spark:$JSCompiler_alias_FALSE$$, dataCursor:"auto", dataCursorBehavior:"auto", drilling:"off", highlightMatch:"all", series:[], groups:[], title:{style:new dvt.$CSSStyle$("font-family: tahoma, sans-serif; font-size: 12px; color: #003d5b; font-weight: bold"), halign:"start"}, 
subtitle:{style:new dvt.$CSSStyle$("font-family: tahoma, sans-serif; font-size: 12px; color: #003d5b;")}, footnote:{style:new dvt.$CSSStyle$("font-family: tahoma, sans-serif; font-size: 10px; color: #333333;"), halign:"start"}, titleSeparator:{upperColor:"#74779A", lowerColor:"#FFFFFF", rendered:"off"}, touchResponse:"auto", _statusMessageStyle:new dvt.$CSSStyle$("font-family: tahoma, sans-serif; font-size: 12px; color: #003d5b; font-weight: bold"), xAxis:{tickLabel:{rendered:"on"}, majorTick:{rendered:"auto"}, 
minorTick:{rendered:"auto"}, axisLine:{rendered:"on"}, scale:"linear", maxSize:0.33}, yAxis:{tickLabel:{rendered:"on"}, majorTick:{rendered:"auto"}, minorTick:{rendered:"auto"}, axisLine:{rendered:"on"}, scale:"linear", maxSize:0.33}, y2Axis:{tickLabel:{rendered:"on"}, majorTick:{rendered:"auto"}, minorTick:{rendered:"auto"}, axisLine:{rendered:"on"}, scale:"linear", maxSize:0.33, alignTickMarks:"on"}, plotArea:{backgroundColor:$JSCompiler_alias_NULL$$}, legend:{position:"auto", rendered:"on", maxSize:0.3, 
layout:{gapRatio:1}, seriesSection:{}, referenceObjectSection:{}, sections:[]}, overview:{rendered:"off"}, styleDefaults:{colors:dvt.$CSSStyle$.$COLORS_SKYROS$, borderColor:"auto", borderWidth:"auto", patterns:"smallDiagonalRight smallChecker smallDiagonalLeft smallTriangle smallCrosshatch smallDiamond largeDiagonalRight largeChecker largeDiagonalLeft largeTriangle largeCrosshatch largeDiamond".split(" "), shapes:"square circle diamond plus triangleDown triangleUp".split(" "), seriesEffect:"gradient", 
threeDEffect:"off", selectionEffect:"highlight", animationDuration:1E3, animationIndicators:"all", animationUpColor:"#0099FF", animationDownColor:"#FF3300", lineStyle:"solid", lineType:"auto", markerDisplayed:"auto", markerColor:$JSCompiler_alias_NULL$$, markerShape:"auto", markerSize:8, marqueeColor:"rgba(255,255,255,0.5)", marqueeBorderColor:"rgba(0,0,0,0.2)", pieFeelerColor:"#BAC5D6", pieInnerRadius:0, selectedInnerColor:"#ffffff", selectedOuterColor:"#5a5a5a", pieCenterLabel:{style:new dvt.$CSSStyle$("font-family: tahoma, sans-serif;")}, 
sliceLabelType:"percent", otherColor:"#4b4b4b", stockRisingColor:"#006666", stockFallingColor:"#CC3300", stockRangeColor:"#B8B8B8", dataItemGaps:"0%", dataLabelStyle:new dvt.$CSSStyle$("font-family: tahoma, sans-serif; font-size: 11px;"), dataLabelPosition:"auto", funnelBackgroundColor:"#EDEDED", x1Format:{}, y1Format:{}, y2Format:{}, zFormat:{}, _defaultSliceLabelColor:"#333333", _scrollbarHeight:3, _scrollbarTrackColor:"#F0F0F0", _scrollbarHandleColor:"#9E9E9E", hoverBehaviorDelay:200, dataCursor:{markerSize:8, 
markerDisplayed:"on", lineColor:"#5a5a5a", lineWidth:2, lineStyle:"solid"}, groupSeparators:{rendered:"on", color:"rgba(138,141,172,0.4)"}, padding:"auto", _tooltipStyle:new dvt.$CSSStyle$("border-collapse: separate; border-spacing: 2px"), tooltipLabelStyle:new dvt.$CSSStyle$("color: #737373; padding: 0px 2px"), tooltipValueStyle:new dvt.$CSSStyle$("color: #333333; padding: 0px 2px"), stackLabelStyle:new dvt.$CSSStyle$("font-family: tahoma, sans-serif; font-size: 11px;")}, layout:{gapWidthRatio:$JSCompiler_alias_NULL$$, 
gapHeightRatio:$JSCompiler_alias_NULL$$, outerGapWidth:10, outerGapHeight:8, titleSubtitleGapWidth:14, titleSubtitleGapHeight:4, titleSeparatorGap:6, titlePlotAreaGap:10, footnoteGap:7, verticalAxisGap:6, legendGapWidth:10, legendGapHeight:10, tickLabelGapHeight:5, tickLabelGapWidth:7}, _locale:"en-us", _resources:{}};
function $DvtChartDefaults$getGapHeight$$($chart$$14$$, $defaultHeight$$) {
  return Math.ceil($defaultHeight$$ * $JSCompiler_StaticMethods_getGapHeightRatio$$($chart$$14$$))
}
function $DvtChartDataCursorHandler$$($chart$$17$$, $dataCursor$$) {
  this.Init($chart$$17$$, $dataCursor$$)
}
dvt.$Obj$.$createSubclass$($DvtChartDataCursorHandler$$, dvt.$Obj$);
$DvtChartDataCursorHandler$$.prototype.Init = function $$DvtChartDataCursorHandler$$$$Init$($chart$$18$$, $dataCursor$$1$$) {
  this.$_context$ = $chart$$18$$.$getCtx$();
  this.$_dataCursorShown$ = $JSCompiler_alias_FALSE$$;
  this.$_dataCursor$ = $dataCursor$$1$$;
  this.$_chart$ = $chart$$18$$
};
function $JSCompiler_StaticMethods_processMove$$($JSCompiler_StaticMethods_processMove$self$$, $pos$$34_y$$inline_2850$$, $bSuppressEvent_values$$inline_2860$$) {
  var $plotRect$$ = $JSCompiler_StaticMethods_processMove$self$$.$_chart$.$_plotAreaSpace$;
  if($plotRect$$.$containsPoint$($pos$$34_y$$inline_2850$$.x, $pos$$34_y$$inline_2850$$.y)) {
    var $x$$inline_2849$$ = $pos$$34_y$$inline_2850$$.x;
    $pos$$34_y$$inline_2850$$ = $pos$$34_y$$inline_2850$$.y;
    if($JSCompiler_StaticMethods_processMove$self$$.$_context$.$isOffscreen$()) {
      $JSCompiler_StaticMethods__removeDataCursor$$($JSCompiler_StaticMethods_processMove$self$$, $bSuppressEvent_values$$inline_2860$$)
    }else {
      var $dataCursor$$inline_2852$$ = $JSCompiler_StaticMethods_processMove$self$$.$_dataCursor$, $closestFirstDirectionMatches$$inline_7056_closestLowerBound$$inline_6277_closestMatch$$inline_2853_i$$inline_7067_seriesColor$$inline_2858$$, $centerPoint$$inline_2854_horizontal$$inline_6273$$ = $DvtChartTypeUtils$$.$isHorizontal$($JSCompiler_StaticMethods_processMove$self$$.$_chart$), $closestMatch$$inline_7065_tooltipText$$inline_2857_useAllInGroup$$inline_6274$$ = $DvtChartTypeUtils$$.$isLineArea$($JSCompiler_StaticMethods_processMove$self$$.$_chart$) && 
      !$DvtChartAxisUtils$$.$isMixedFrequency$($JSCompiler_StaticMethods_processMove$self$$.$_chart$), $dcX$$inline_2855_lineCoord$$inline_2859_matches$$inline_6275_minDiff$$inline_7066$$ = $JSCompiler_StaticMethods_processMove$self$$.$_findMatches$(), $dcY$$inline_2856_matchesInBounds$$inline_6276_minDiff$$inline_7055$$;
      $dcY$$inline_2856_matchesInBounds$$inline_6276_minDiff$$inline_7055$$ = Infinity;
      $closestFirstDirectionMatches$$inline_7056_closestLowerBound$$inline_6277_closestMatch$$inline_2853_i$$inline_7067_seriesColor$$inline_2858$$ = [];
      for(var $closestHigherBound$$inline_6278_i$$inline_7057_match$$inline_7068$$ = 0;$closestHigherBound$$inline_6278_i$$inline_7057_match$$inline_7068$$ < $dcX$$inline_2855_lineCoord$$inline_2859_matches$$inline_6275_minDiff$$inline_7066$$.length;$closestHigherBound$$inline_6278_i$$inline_7057_match$$inline_7068$$++) {
        var $diffValue$$inline_7069_i$$inline_6280_matchObj$$inline_7058$$ = $dcX$$inline_2855_lineCoord$$inline_2859_matches$$inline_6275_minDiff$$inline_7066$$[$closestHigherBound$$inline_6278_i$$inline_7057_match$$inline_7068$$], $closestFirstDirectionMatch$$inline_6281_closestGroup$$inline_6279_diffValue$$inline_7059$$ = Math.round(Math.abs((($centerPoint$$inline_2854_horizontal$$inline_6273$$ ? $diffValue$$inline_7069_i$$inline_6280_matchObj$$inline_7058$$.$matchRegion$.y : $diffValue$$inline_7069_i$$inline_6280_matchObj$$inline_7058$$.$matchRegion$.x) + 
        ($centerPoint$$inline_2854_horizontal$$inline_6273$$ ? $diffValue$$inline_7069_i$$inline_6280_matchObj$$inline_7058$$.$matchRegion$.y + $diffValue$$inline_7069_i$$inline_6280_matchObj$$inline_7058$$.$matchRegion$.$h$ : $diffValue$$inline_7069_i$$inline_6280_matchObj$$inline_7058$$.$matchRegion$.x + $diffValue$$inline_7069_i$$inline_6280_matchObj$$inline_7058$$.$matchRegion$.$w$)) / 2 - ($centerPoint$$inline_2854_horizontal$$inline_6273$$ ? $pos$$34_y$$inline_2850$$ : $x$$inline_2849$$)));
        $closestFirstDirectionMatch$$inline_6281_closestGroup$$inline_6279_diffValue$$inline_7059$$ <= $dcY$$inline_2856_matchesInBounds$$inline_6276_minDiff$$inline_7055$$ && ($closestFirstDirectionMatch$$inline_6281_closestGroup$$inline_6279_diffValue$$inline_7059$$ < $dcY$$inline_2856_matchesInBounds$$inline_6276_minDiff$$inline_7055$$ && ($closestFirstDirectionMatches$$inline_7056_closestLowerBound$$inline_6277_closestMatch$$inline_2853_i$$inline_7067_seriesColor$$inline_2858$$ = []), $closestFirstDirectionMatches$$inline_7056_closestLowerBound$$inline_6277_closestMatch$$inline_2853_i$$inline_7067_seriesColor$$inline_2858$$.push($diffValue$$inline_7069_i$$inline_6280_matchObj$$inline_7058$$), 
        $dcY$$inline_2856_matchesInBounds$$inline_6276_minDiff$$inline_7055$$ = $closestFirstDirectionMatch$$inline_6281_closestGroup$$inline_6279_diffValue$$inline_7059$$)
      }
      $dcY$$inline_2856_matchesInBounds$$inline_6276_minDiff$$inline_7055$$ = $closestFirstDirectionMatches$$inline_7056_closestLowerBound$$inline_6277_closestMatch$$inline_2853_i$$inline_7067_seriesColor$$inline_2858$$;
      if(!$DvtChartTypeUtils$$.$isScatterBubble$($JSCompiler_StaticMethods_processMove$self$$.$_chart$)) {
        $closestFirstDirectionMatches$$inline_7056_closestLowerBound$$inline_6277_closestMatch$$inline_2853_i$$inline_7067_seriesColor$$inline_2858$$ = Infinity;
        $closestHigherBound$$inline_6278_i$$inline_7057_match$$inline_7068$$ = -Infinity;
        $closestFirstDirectionMatch$$inline_6281_closestGroup$$inline_6279_diffValue$$inline_7059$$ = $JSCompiler_alias_NULL$$;
        for($diffValue$$inline_7069_i$$inline_6280_matchObj$$inline_7058$$ = 0;$diffValue$$inline_7069_i$$inline_6280_matchObj$$inline_7058$$ < $dcY$$inline_2856_matchesInBounds$$inline_6276_minDiff$$inline_7055$$.length;$diffValue$$inline_7069_i$$inline_6280_matchObj$$inline_7058$$++) {
          $closestFirstDirectionMatch$$inline_6281_closestGroup$$inline_6279_diffValue$$inline_7059$$ = $dcY$$inline_2856_matchesInBounds$$inline_6276_minDiff$$inline_7055$$[$diffValue$$inline_7069_i$$inline_6280_matchObj$$inline_7058$$], $closestFirstDirectionMatches$$inline_7056_closestLowerBound$$inline_6277_closestMatch$$inline_2853_i$$inline_7067_seriesColor$$inline_2858$$ = Math.min($closestFirstDirectionMatches$$inline_7056_closestLowerBound$$inline_6277_closestMatch$$inline_2853_i$$inline_7067_seriesColor$$inline_2858$$, 
          $centerPoint$$inline_2854_horizontal$$inline_6273$$ ? $closestFirstDirectionMatch$$inline_6281_closestGroup$$inline_6279_diffValue$$inline_7059$$.$matchRegion$.y : $closestFirstDirectionMatch$$inline_6281_closestGroup$$inline_6279_diffValue$$inline_7059$$.$matchRegion$.x), $closestHigherBound$$inline_6278_i$$inline_7057_match$$inline_7068$$ = Math.max($closestHigherBound$$inline_6278_i$$inline_7057_match$$inline_7068$$, $centerPoint$$inline_2854_horizontal$$inline_6273$$ ? $closestFirstDirectionMatch$$inline_6281_closestGroup$$inline_6279_diffValue$$inline_7059$$.$matchRegion$.y + 
          $closestFirstDirectionMatch$$inline_6281_closestGroup$$inline_6279_diffValue$$inline_7059$$.$matchRegion$.$h$ : $closestFirstDirectionMatch$$inline_6281_closestGroup$$inline_6279_diffValue$$inline_7059$$.$matchRegion$.x + $closestFirstDirectionMatch$$inline_6281_closestGroup$$inline_6279_diffValue$$inline_7059$$.$matchRegion$.$w$), $closestFirstDirectionMatch$$inline_6281_closestGroup$$inline_6279_diffValue$$inline_7059$$ = $closestFirstDirectionMatch$$inline_6281_closestGroup$$inline_6279_diffValue$$inline_7059$$.$gidx$
        }
        for($diffValue$$inline_7069_i$$inline_6280_matchObj$$inline_7058$$ = 0;$diffValue$$inline_7069_i$$inline_6280_matchObj$$inline_7058$$ < $dcX$$inline_2855_lineCoord$$inline_2859_matches$$inline_6275_minDiff$$inline_7066$$.length;$diffValue$$inline_7069_i$$inline_6280_matchObj$$inline_7058$$++) {
          var $match$$inline_6282$$ = $dcX$$inline_2855_lineCoord$$inline_2859_matches$$inline_6275_minDiff$$inline_7066$$[$diffValue$$inline_7069_i$$inline_6280_matchObj$$inline_7058$$], $itemGroup$$inline_6283_midPoint$$inline_6284$$ = $match$$inline_6282$$.$gidx$;
          $closestMatch$$inline_7065_tooltipText$$inline_2857_useAllInGroup$$inline_6274$$ ? $closestFirstDirectionMatch$$inline_6281_closestGroup$$inline_6279_diffValue$$inline_7059$$ == $itemGroup$$inline_6283_midPoint$$inline_6284$$ && $dcY$$inline_2856_matchesInBounds$$inline_6276_minDiff$$inline_7055$$.push($match$$inline_6282$$) : ($itemGroup$$inline_6283_midPoint$$inline_6284$$ = (($centerPoint$$inline_2854_horizontal$$inline_6273$$ ? $match$$inline_6282$$.$matchRegion$.y : $match$$inline_6282$$.$matchRegion$.x) + 
          ($centerPoint$$inline_2854_horizontal$$inline_6273$$ ? $match$$inline_6282$$.$matchRegion$.y + $match$$inline_6282$$.$matchRegion$.$h$ : $match$$inline_6282$$.$matchRegion$.x + $match$$inline_6282$$.$matchRegion$.$w$)) / 2, $closestHigherBound$$inline_6278_i$$inline_7057_match$$inline_7068$$ >= $itemGroup$$inline_6283_midPoint$$inline_6284$$ && $closestFirstDirectionMatches$$inline_7056_closestLowerBound$$inline_6277_closestMatch$$inline_2853_i$$inline_7067_seriesColor$$inline_2858$$ <= 
          $itemGroup$$inline_6283_midPoint$$inline_6284$$ && $dcY$$inline_2856_matchesInBounds$$inline_6276_minDiff$$inline_7055$$.push($match$$inline_6282$$))
        }
      }
      $closestMatch$$inline_7065_tooltipText$$inline_2857_useAllInGroup$$inline_6274$$ = $JSCompiler_alias_NULL$$;
      $dcX$$inline_2855_lineCoord$$inline_2859_matches$$inline_6275_minDiff$$inline_7066$$ = Infinity;
      for($closestFirstDirectionMatches$$inline_7056_closestLowerBound$$inline_6277_closestMatch$$inline_2853_i$$inline_7067_seriesColor$$inline_2858$$ = 0;$closestFirstDirectionMatches$$inline_7056_closestLowerBound$$inline_6277_closestMatch$$inline_2853_i$$inline_7067_seriesColor$$inline_2858$$ < $dcY$$inline_2856_matchesInBounds$$inline_6276_minDiff$$inline_7055$$.length;$closestFirstDirectionMatches$$inline_7056_closestLowerBound$$inline_6277_closestMatch$$inline_2853_i$$inline_7067_seriesColor$$inline_2858$$++) {
        $closestHigherBound$$inline_6278_i$$inline_7057_match$$inline_7068$$ = $dcY$$inline_2856_matchesInBounds$$inline_6276_minDiff$$inline_7055$$[$closestFirstDirectionMatches$$inline_7056_closestLowerBound$$inline_6277_closestMatch$$inline_2853_i$$inline_7067_seriesColor$$inline_2858$$], $diffValue$$inline_7069_i$$inline_6280_matchObj$$inline_7058$$ = Math.round(Math.abs((($centerPoint$$inline_2854_horizontal$$inline_6273$$ ? $closestHigherBound$$inline_6278_i$$inline_7057_match$$inline_7068$$.$matchRegion$.x : 
        $closestHigherBound$$inline_6278_i$$inline_7057_match$$inline_7068$$.$matchRegion$.y) + ($centerPoint$$inline_2854_horizontal$$inline_6273$$ ? $closestHigherBound$$inline_6278_i$$inline_7057_match$$inline_7068$$.$matchRegion$.x + $closestHigherBound$$inline_6278_i$$inline_7057_match$$inline_7068$$.$matchRegion$.$w$ : $closestHigherBound$$inline_6278_i$$inline_7057_match$$inline_7068$$.$matchRegion$.y + $closestHigherBound$$inline_6278_i$$inline_7057_match$$inline_7068$$.$matchRegion$.$h$)) / 
        2 - ($centerPoint$$inline_2854_horizontal$$inline_6273$$ ? $x$$inline_2849$$ : $pos$$34_y$$inline_2850$$))), $diffValue$$inline_7069_i$$inline_6280_matchObj$$inline_7058$$ < $dcX$$inline_2855_lineCoord$$inline_2859_matches$$inline_6275_minDiff$$inline_7066$$ && ($dcX$$inline_2855_lineCoord$$inline_2859_matches$$inline_6275_minDiff$$inline_7066$$ = $diffValue$$inline_7069_i$$inline_6280_matchObj$$inline_7058$$, $closestMatch$$inline_7065_tooltipText$$inline_2857_useAllInGroup$$inline_6274$$ = 
        $closestHigherBound$$inline_6278_i$$inline_7057_match$$inline_7068$$)
      }
      $closestFirstDirectionMatches$$inline_7056_closestLowerBound$$inline_6277_closestMatch$$inline_2853_i$$inline_7067_seriesColor$$inline_2858$$ = $closestMatch$$inline_7065_tooltipText$$inline_2857_useAllInGroup$$inline_6274$$;
      $closestFirstDirectionMatches$$inline_7056_closestLowerBound$$inline_6277_closestMatch$$inline_2853_i$$inline_7067_seriesColor$$inline_2858$$ == $JSCompiler_alias_NULL$$ ? $JSCompiler_StaticMethods__removeDataCursor$$($JSCompiler_StaticMethods_processMove$self$$, $bSuppressEvent_values$$inline_2860$$) : ($centerPoint$$inline_2854_horizontal$$inline_6273$$ = $closestFirstDirectionMatches$$inline_7056_closestLowerBound$$inline_6277_closestMatch$$inline_2853_i$$inline_7067_seriesColor$$inline_2858$$.$matchRegion$.$getCenter$(), 
      $dcX$$inline_2855_lineCoord$$inline_2859_matches$$inline_6275_minDiff$$inline_7066$$ = $x$$inline_2849$$, $dcY$$inline_2856_matchesInBounds$$inline_6276_minDiff$$inline_7055$$ = $pos$$34_y$$inline_2850$$, "SNAP" == ($dataCursor$$inline_2852$$.$_behavior$ ? $dataCursor$$inline_2852$$.$_behavior$ : "AUTO") && ($dataCursor$$inline_2852$$.$isHorizontal$() ? $dcY$$inline_2856_matchesInBounds$$inline_6276_minDiff$$inline_7055$$ = Math.min(Math.max($centerPoint$$inline_2854_horizontal$$inline_6273$$.y, 
      $plotRect$$.y), $plotRect$$.y + $plotRect$$.$h$) : $dcX$$inline_2855_lineCoord$$inline_2859_matches$$inline_6275_minDiff$$inline_7066$$ = Math.min(Math.max($centerPoint$$inline_2854_horizontal$$inline_6273$$.x, $plotRect$$.x), $plotRect$$.x + $plotRect$$.$w$)), $closestMatch$$inline_7065_tooltipText$$inline_2857_useAllInGroup$$inline_6274$$ = $DvtChartTooltipUtils$$.$getDatatip$($JSCompiler_StaticMethods_processMove$self$$.$_chart$, $closestFirstDirectionMatches$$inline_7056_closestLowerBound$$inline_6277_closestMatch$$inline_2853_i$$inline_7067_seriesColor$$inline_2858$$.$sidx$, 
      $closestFirstDirectionMatches$$inline_7056_closestLowerBound$$inline_6277_closestMatch$$inline_2853_i$$inline_7067_seriesColor$$inline_2858$$.$gidx$, $JSCompiler_alias_TRUE$$), $closestMatch$$inline_7065_tooltipText$$inline_2857_useAllInGroup$$inline_6274$$ == $JSCompiler_alias_NULL$$ ? $dataCursor$$inline_2852$$.$setVisible$($JSCompiler_alias_FALSE$$) : ($dataCursor$$inline_2852$$.$setVisible$($JSCompiler_alias_TRUE$$), $closestFirstDirectionMatches$$inline_7056_closestLowerBound$$inline_6277_closestMatch$$inline_2853_i$$inline_7067_seriesColor$$inline_2858$$ = 
      $DvtChartTooltipUtils$$.$getDatatipColor$($JSCompiler_StaticMethods_processMove$self$$.$_chart$, $closestFirstDirectionMatches$$inline_7056_closestLowerBound$$inline_6277_closestMatch$$inline_2853_i$$inline_7067_seriesColor$$inline_2858$$.$sidx$, $closestFirstDirectionMatches$$inline_7056_closestLowerBound$$inline_6277_closestMatch$$inline_2853_i$$inline_7067_seriesColor$$inline_2858$$.$gidx$), $dcX$$inline_2855_lineCoord$$inline_2859_matches$$inline_6275_minDiff$$inline_7066$$ = $dataCursor$$inline_2852$$.$isHorizontal$() ? 
      $dcY$$inline_2856_matchesInBounds$$inline_6276_minDiff$$inline_7055$$ : $dcX$$inline_2855_lineCoord$$inline_2859_matches$$inline_6275_minDiff$$inline_7066$$, $dataCursor$$inline_2852$$.$render$($plotRect$$, $centerPoint$$inline_2854_horizontal$$inline_6273$$.x, $centerPoint$$inline_2854_horizontal$$inline_6273$$.y, $dcX$$inline_2855_lineCoord$$inline_2859_matches$$inline_6275_minDiff$$inline_7066$$, $closestMatch$$inline_7065_tooltipText$$inline_2857_useAllInGroup$$inline_6274$$, $closestFirstDirectionMatches$$inline_7056_closestLowerBound$$inline_6277_closestMatch$$inline_2853_i$$inline_7067_seriesColor$$inline_2858$$), 
      $JSCompiler_StaticMethods_processMove$self$$.$_dataCursorShown$ = $JSCompiler_alias_TRUE$$, $bSuppressEvent_values$$inline_2860$$ || ($bSuppressEvent_values$$inline_2860$$ = $JSCompiler_StaticMethods_processMove$self$$.$_chart$.$getValuesAt$($x$$inline_2849$$, $pos$$34_y$$inline_2850$$), $JSCompiler_StaticMethods_changeOption$$($JSCompiler_StaticMethods_processMove$self$$.$_chart$, $bSuppressEvent_values$$inline_2860$$))))
    }
  }else {
    $JSCompiler_StaticMethods__removeDataCursor$$($JSCompiler_StaticMethods_processMove$self$$, $bSuppressEvent_values$$inline_2860$$)
  }
}
function $JSCompiler_StaticMethods__removeDataCursor$$($JSCompiler_StaticMethods__removeDataCursor$self$$, $bSuppressEvent$$4$$) {
  $JSCompiler_StaticMethods__removeDataCursor$self$$.$_dataCursor$.$_bVisible$ && $JSCompiler_StaticMethods__removeDataCursor$self$$.$_dataCursor$.$setVisible$($JSCompiler_alias_FALSE$$);
  $JSCompiler_StaticMethods__removeDataCursor$self$$.$_context$.$getTooltipManager$("_dvtDataCursor").$hideTooltip$();
  $JSCompiler_StaticMethods__removeDataCursor$self$$.$_dataCursorShown$ = $JSCompiler_alias_FALSE$$;
  $bSuppressEvent$$4$$ || $JSCompiler_StaticMethods_changeOption$$($JSCompiler_StaticMethods__removeDataCursor$self$$.$_chart$, $JSCompiler_alias_NULL$$)
}
$DvtChartDataCursorHandler$$.prototype.$_findMatches$ = function $$DvtChartDataCursorHandler$$$$$_findMatches$$() {
  var $stage$$5$$ = this.$_context$.$_stage$, $eventManager$$12$$ = this.$_chart$.$getEventManager$(), $matches$$2$$ = [];
  if(!this.$_chart$.$_currentMarkers$) {
    return $JSCompiler_alias_NULL$$
  }
  for(var $i$$294$$ = 0;$i$$294$$ < this.$_chart$.$_currentMarkers$.length;$i$$294$$++) {
    for(var $markers$$ = this.$_chart$.$_currentMarkers$[$i$$294$$], $numMarkers$$ = $markers$$.length, $idx$$9$$ = 0;$idx$$9$$ < $numMarkers$$;$idx$$9$$++) {
      var $item$$11_match$$1$$ = $markers$$[$idx$$9$$], $logicalObject$$3$$ = $eventManager$$12$$.$GetLogicalObject$($item$$11_match$$1$$), $dims$$35$$ = $item$$11_match$$1$$.$getDimensionsSelf$ ? $item$$11_match$$1$$.$getDimensionsSelf$($stage$$5$$) : $item$$11_match$$1$$.$getDimensions$($stage$$5$$), $item$$11_match$$1$$ = {$obj$:$item$$11_match$$1$$, $matchRegion$:$dims$$35$$, $gidx$:$logicalObject$$3$$.$getGroupIndex$(), $sidx$:$logicalObject$$3$$.$getSeriesIndex$(), $marker$:$JSCompiler_alias_NULL$$};
      $matches$$2$$.push($item$$11_match$$1$$)
    }
  }
  return $matches$$2$$
};
function $DvtChartSelectableWedge$$($cmds$$inline_2871_context$$127$$, $cx$$5$$, $cy$$6$$, $rx$$6$$, $ry$$2$$, $sa$$2$$, $ae$$1$$, $gap$$13$$, $ir$$, $id$$95$$) {
  this.Init($cmds$$inline_2871_context$$127$$, $JSCompiler_alias_NULL$$, $id$$95$$);
  this.$_cx$ = $cx$$5$$;
  this.$_cy$ = $cy$$6$$;
  this.$_rx$ = $rx$$6$$;
  this.$_ry$ = $ry$$2$$;
  this.$_sa$ = $sa$$2$$;
  this.$_ae$ = $ae$$1$$;
  this.$_gap$ = $gap$$13$$;
  this.$_ir$ = $ir$$;
  $cmds$$inline_2871_context$$127$$ = $JSCompiler_StaticMethods__makeWedgePath$$(this, 0);
  this.$setCmds$($cmds$$inline_2871_context$$127$$)
}
dvt.$Obj$.$createSubclass$($DvtChartSelectableWedge$$, dvt.$Path$);
$JSCompiler_prototypeAlias$$ = $DvtChartSelectableWedge$$.prototype;
$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($context$$128$$, $cmds$$4$$, $id$$96$$) {
  $DvtChartSelectableWedge$$.$superclass$.Init.call(this, $context$$128$$, $cmds$$4$$, $id$$96$$)
};
function $JSCompiler_StaticMethods__makeWedgePath$$($JSCompiler_StaticMethods__makeWedgePath$self$$, $inset$$) {
  var $rx$$8$$ = Math.max($JSCompiler_StaticMethods__makeWedgePath$self$$.$_rx$ - $inset$$, 0), $ry$$4$$ = Math.max($JSCompiler_StaticMethods__makeWedgePath$self$$.$_ry$ - $inset$$, 0), $ir$$2$$ = $JSCompiler_StaticMethods__makeWedgePath$self$$.$_ir$ ? $JSCompiler_StaticMethods__makeWedgePath$self$$.$_ir$ + $inset$$ : 0, $angleExtentRads$$ = 360 == $JSCompiler_StaticMethods__makeWedgePath$self$$.$_ae$ ? dvt.$Math$.$degreesToRads$(359.99) : dvt.$Math$.$degreesToRads$($JSCompiler_StaticMethods__makeWedgePath$self$$.$_ae$), 
  $pathCommands_startAngleRads$$ = dvt.$Math$.$degreesToRads$($JSCompiler_StaticMethods__makeWedgePath$self$$.$_sa$), $dataItemGaps_innerPointY$$ = (360 == $JSCompiler_StaticMethods__makeWedgePath$self$$.$_ae$ || $rx$$8$$ < $inset$$ ? 0 : $JSCompiler_StaticMethods__makeWedgePath$self$$.$_gap$ + 2 * $inset$$) / 2, $arcPoint2Y_gapAngle$$ = $dataItemGaps_innerPointY$$ < $rx$$8$$ ? Math.asin($dataItemGaps_innerPointY$$ / $rx$$8$$) : 0, $arcPointX_centerLineAngle$$ = -$angleExtentRads$$ / 2 - $pathCommands_startAngleRads$$, 
  $arcPointY_distanceToStartPointX$$ = Math.min(5 * $dataItemGaps_innerPointY$$, 0 < $angleExtentRads$$ ? Math.abs($dataItemGaps_innerPointY$$ / Math.sin($angleExtentRads$$ / 2)) : 0), $innerPointX_startPointX$$ = $JSCompiler_StaticMethods__makeWedgePath$self$$.$_cx$ + Math.cos($arcPointX_centerLineAngle$$) * $arcPointY_distanceToStartPointX$$, $innerPoint2X_startPointY$$ = $JSCompiler_StaticMethods__makeWedgePath$self$$.$_cy$ + Math.sin($arcPointX_centerLineAngle$$) * (0 == $rx$$8$$ ? $arcPointY_distanceToStartPointX$$ : 
  $arcPointY_distanceToStartPointX$$ * $ry$$4$$ / $rx$$8$$), $arcPointX_centerLineAngle$$ = $JSCompiler_StaticMethods__makeWedgePath$self$$.$_cx$ + Math.cos(-$arcPoint2Y_gapAngle$$ - $pathCommands_startAngleRads$$) * $rx$$8$$, $arcPointY_distanceToStartPointX$$ = $JSCompiler_StaticMethods__makeWedgePath$self$$.$_cy$ + Math.sin(-$arcPoint2Y_gapAngle$$ - $pathCommands_startAngleRads$$) * $ry$$4$$, $arcPoint2X$$ = $JSCompiler_StaticMethods__makeWedgePath$self$$.$_cx$ + Math.cos(-$pathCommands_startAngleRads$$ - 
  $angleExtentRads$$ + $arcPoint2Y_gapAngle$$) * $rx$$8$$, $arcPoint2Y_gapAngle$$ = $JSCompiler_StaticMethods__makeWedgePath$self$$.$_cy$ + Math.sin(-$pathCommands_startAngleRads$$ - $angleExtentRads$$ + $arcPoint2Y_gapAngle$$) * $ry$$4$$;
  if(0 < $ir$$2$$) {
    var $innerGapAngle_innerPoint2Y$$ = $dataItemGaps_innerPointY$$ < $ir$$2$$ ? Math.asin($dataItemGaps_innerPointY$$ / $ir$$2$$) : 0, $innerPointX_startPointX$$ = $JSCompiler_StaticMethods__makeWedgePath$self$$.$_cx$ + Math.cos(-$innerGapAngle_innerPoint2Y$$ - $pathCommands_startAngleRads$$) * $ir$$2$$, $dataItemGaps_innerPointY$$ = $JSCompiler_StaticMethods__makeWedgePath$self$$.$_cy$ + Math.sin(-$innerGapAngle_innerPoint2Y$$ - $pathCommands_startAngleRads$$) * $ir$$2$$, $innerPoint2X_startPointY$$ = 
    $JSCompiler_StaticMethods__makeWedgePath$self$$.$_cx$ + Math.cos(-$pathCommands_startAngleRads$$ - $angleExtentRads$$ + $innerGapAngle_innerPoint2Y$$) * $ir$$2$$, $innerGapAngle_innerPoint2Y$$ = $JSCompiler_StaticMethods__makeWedgePath$self$$.$_cy$ + Math.sin(-$pathCommands_startAngleRads$$ - $angleExtentRads$$ + $innerGapAngle_innerPoint2Y$$) * $ir$$2$$;
    360 == $JSCompiler_StaticMethods__makeWedgePath$self$$.$_ae$ ? ($pathCommands_startAngleRads$$ = dvt.$PathUtils$.moveTo($arcPoint2X$$, $arcPoint2Y_gapAngle$$), $pathCommands_startAngleRads$$ += dvt.$PathUtils$.arcTo($rx$$8$$, $ry$$4$$, $angleExtentRads$$, 1, $arcPointX_centerLineAngle$$, $arcPointY_distanceToStartPointX$$), $pathCommands_startAngleRads$$ += dvt.$PathUtils$.lineTo($arcPoint2X$$, $arcPoint2Y_gapAngle$$), $pathCommands_startAngleRads$$ += dvt.$PathUtils$.moveTo($innerPointX_startPointX$$, 
    $dataItemGaps_innerPointY$$)) : ($pathCommands_startAngleRads$$ = dvt.$PathUtils$.moveTo($innerPoint2X_startPointY$$, $innerGapAngle_innerPoint2Y$$), $pathCommands_startAngleRads$$ += dvt.$PathUtils$.lineTo($arcPoint2X$$, $arcPoint2Y_gapAngle$$), $pathCommands_startAngleRads$$ += dvt.$PathUtils$.arcTo($rx$$8$$, $ry$$4$$, $angleExtentRads$$, 1, $arcPointX_centerLineAngle$$, $arcPointY_distanceToStartPointX$$), $pathCommands_startAngleRads$$ += dvt.$PathUtils$.lineTo($innerPointX_startPointX$$, 
    $dataItemGaps_innerPointY$$));
    $pathCommands_startAngleRads$$ += dvt.$PathUtils$.arcTo($ir$$2$$, $ir$$2$$, $angleExtentRads$$, 0, $innerPoint2X_startPointY$$, $innerGapAngle_innerPoint2Y$$)
  }else {
    360 == $JSCompiler_StaticMethods__makeWedgePath$self$$.$_ae$ ? ($pathCommands_startAngleRads$$ = dvt.$PathUtils$.moveTo($arcPoint2X$$, $arcPoint2Y_gapAngle$$), $pathCommands_startAngleRads$$ += dvt.$PathUtils$.arcTo($rx$$8$$, $ry$$4$$, $angleExtentRads$$, 1, $arcPointX_centerLineAngle$$, $arcPointY_distanceToStartPointX$$)) : ($pathCommands_startAngleRads$$ = dvt.$PathUtils$.moveTo($innerPointX_startPointX$$, $innerPoint2X_startPointY$$), $pathCommands_startAngleRads$$ += dvt.$PathUtils$.lineTo($arcPoint2X$$, 
    $arcPoint2Y_gapAngle$$), $pathCommands_startAngleRads$$ += dvt.$PathUtils$.arcTo($rx$$8$$, $ry$$4$$, $angleExtentRads$$, 1, $arcPointX_centerLineAngle$$, $arcPointY_distanceToStartPointX$$), $pathCommands_startAngleRads$$ += dvt.$PathUtils$.lineTo($innerPointX_startPointX$$, $innerPoint2X_startPointY$$))
  }
  return $pathCommands_startAngleRads$$ += dvt.$PathUtils$.closePath()
}
$JSCompiler_prototypeAlias$$.$_initializeSelectionEffects$ = function $$JSCompiler_prototypeAlias$$$$_initializeSelectionEffects$$() {
  var $innerChildCmds_outerBorderWidth$$ = this.$isSelected$() ? 2 : 1.25, $outerChildCmds$$ = $JSCompiler_StaticMethods__makeWedgePath$$(this, $innerChildCmds_outerBorderWidth$$), $innerChildCmds_outerBorderWidth$$ = $JSCompiler_StaticMethods__makeWedgePath$$(this, $innerChildCmds_outerBorderWidth$$ + 1);
  this.$OuterChild$ ? (this.$OuterChild$.$setCmds$($outerChildCmds$$), this.$InnerChild$.$setCmds$($innerChildCmds_outerBorderWidth$$)) : (this.$OuterChild$ = new dvt.$Path$(this.$getCtx$(), $outerChildCmds$$), this.$OuterChild$.$setInvisibleFill$(), this.$OuterChild$.$setMouseEnabled$($JSCompiler_alias_TRUE$$), this.$addChild$(this.$OuterChild$), this.$InnerChild$ = new dvt.$Path$(this.$getCtx$(), $innerChildCmds_outerBorderWidth$$), this.$InnerChild$.$setInvisibleFill$(), this.$InnerChild$.$setMouseEnabled$($JSCompiler_alias_TRUE$$), 
  this.$addChild$(this.$InnerChild$))
};
$JSCompiler_prototypeAlias$$.$_showNestedBorders$ = function $$JSCompiler_prototypeAlias$$$$_showNestedBorders$$($outerBorderColor$$, $innerBorderColor$$) {
  this.$_initializeSelectionEffects$();
  $innerBorderColor$$ ? (this.$setSolidFill$($outerBorderColor$$), this.$setStroke$($JSCompiler_alias_NULL$$), this.$OuterChild$.$setSolidFill$($innerBorderColor$$), this.$InnerChild$.$setFill$(this.$_fill$)) : ($outerBorderColor$$ ? (this.$setSolidFill$($outerBorderColor$$), this.$setStroke$($JSCompiler_alias_NULL$$), this.$OuterChild$.$setFill$(this.$_fill$)) : (this.$setFill$(this.$_fill$), this.$setStroke$(this.$_shapeStroke$), this.$OuterChild$.$setInvisibleFill$()), this.$InnerChild$.$setInvisibleFill$())
};
$JSCompiler_prototypeAlias$$.$setStyleProperties$ = function $$JSCompiler_prototypeAlias$$$$setStyleProperties$$($fill$$20$$, $stroke$$36$$, $dataColor$$, $innerColor$$, $outerColor$$) {
  this.$_fill$ = $fill$$20$$;
  this.$_shapeStroke$ = $stroke$$36$$;
  this.$_hoverColor$ = dvt.$SelectionEffectUtils$.$getHoverBorderColor$($dataColor$$);
  this.$_innerColor$ = $innerColor$$;
  this.$_outerColor$ = $outerColor$$;
  this.$setFill$($fill$$20$$);
  $stroke$$36$$ && this.$setStroke$($stroke$$36$$)
};
$JSCompiler_prototypeAlias$$.$showHoverEffect$ = function $$JSCompiler_prototypeAlias$$$$showHoverEffect$$() {
  this.$IsShowingHoverEffect$ = $JSCompiler_alias_TRUE$$;
  this.$_showNestedBorders$(this.$_hoverColor$, this.$_innerColor$)
};
$JSCompiler_prototypeAlias$$.$hideHoverEffect$ = function $$JSCompiler_prototypeAlias$$$$hideHoverEffect$$() {
  this.$IsShowingHoverEffect$ = $JSCompiler_alias_FALSE$$;
  this.$isSelected$() ? this.$_showNestedBorders$(this.$_outerColor$, this.$_innerColor$) : this.$_showNestedBorders$()
};
$JSCompiler_prototypeAlias$$.$setSelected$ = function $$JSCompiler_prototypeAlias$$$$setSelected$$($selected$$12$$) {
  this.$IsSelected$ != $selected$$12$$ && (this.$IsSelected$ = $selected$$12$$, this.$IsShowingHoverEffect$ ? this.$_showNestedBorders$(this.$_hoverColor$, this.$_innerColor$) : this.$isSelected$() ? this.$_showNestedBorders$(this.$_outerColor$, this.$_innerColor$) : this.$_showNestedBorders$())
};
$JSCompiler_prototypeAlias$$.$UpdateSelectionEffect$ = $JSCompiler_emptyFn$$();
function $DvtChartSelectableRectangularPolygon$$($context$$129$$, $arPoints$$6$$, $id$$97$$) {
  this.$_x1$ = Math.min($arPoints$$6$$[0], $arPoints$$6$$[4]);
  this.$_x2$ = Math.max($arPoints$$6$$[0], $arPoints$$6$$[4]);
  this.$_y1$ = Math.min($arPoints$$6$$[1], $arPoints$$6$$[5]);
  this.$_y2$ = Math.max($arPoints$$6$$[1], $arPoints$$6$$[5]);
  this.Init($context$$129$$, [this.$_x1$, this.$_y1$, this.$_x2$, this.$_y1$, this.$_x2$, this.$_y2$, this.$_x1$, this.$_y2$], $id$$97$$)
}
dvt.$Obj$.$createSubclass$($DvtChartSelectableRectangularPolygon$$, dvt.$Polygon$);
$JSCompiler_prototypeAlias$$ = $DvtChartSelectableRectangularPolygon$$.prototype;
$JSCompiler_prototypeAlias$$.$setStyleProperties$ = function $$JSCompiler_prototypeAlias$$$$setStyleProperties$$($fill$$21$$, $stroke$$37$$, $dataColor$$1$$, $innerColor$$1$$, $outerColor$$1$$) {
  this.$_fill$ = $fill$$21$$;
  this.$_borderStroke$ = $stroke$$37$$;
  this.$_hoverColor$ = dvt.$SelectionEffectUtils$.$getHoverBorderColor$($dataColor$$1$$);
  this.$_innerColor$ = $innerColor$$1$$;
  this.$_outerColor$ = $outerColor$$1$$;
  this.$setFill$($fill$$21$$);
  $stroke$$37$$ && this.$setStroke$($stroke$$37$$)
};
$JSCompiler_prototypeAlias$$.$setAnimationParams$ = function $$JSCompiler_prototypeAlias$$$$setAnimationParams$$($ar$$4$$) {
  this.$_x1$ = Math.min($ar$$4$$[0], $ar$$4$$[4]);
  this.$_x2$ = Math.max($ar$$4$$[0], $ar$$4$$[4]);
  this.$_y1$ = Math.min($ar$$4$$[1], $ar$$4$$[5]);
  this.$_y2$ = Math.max($ar$$4$$[1], $ar$$4$$[5]);
  this.$setPoints$($ar$$4$$);
  this.$_initializeSelectionEffects$()
};
$JSCompiler_prototypeAlias$$.$showHoverEffect$ = function $$JSCompiler_prototypeAlias$$$$showHoverEffect$$() {
  this.$IsShowingHoverEffect$ = $JSCompiler_alias_TRUE$$;
  this.$_showNestedBorders$(this.$_hoverColor$, this.$_innerColor$)
};
$JSCompiler_prototypeAlias$$.$hideHoverEffect$ = function $$JSCompiler_prototypeAlias$$$$hideHoverEffect$$() {
  this.$IsShowingHoverEffect$ = $JSCompiler_alias_FALSE$$;
  this.$isSelected$() ? this.$_showNestedBorders$(this.$_outerColor$, this.$_innerColor$) : this.$_showNestedBorders$()
};
$JSCompiler_prototypeAlias$$.$setSelected$ = function $$JSCompiler_prototypeAlias$$$$setSelected$$($selected$$13$$) {
  this.$IsSelected$ != $selected$$13$$ && (this.$IsSelected$ = $selected$$13$$, this.$IsShowingHoverEffect$ ? this.$_showNestedBorders$(this.$_hoverColor$, this.$_innerColor$) : this.$isSelected$() ? this.$_showNestedBorders$(this.$_outerColor$, this.$_innerColor$) : this.$_showNestedBorders$())
};
$JSCompiler_prototypeAlias$$.$UpdateSelectionEffect$ = $JSCompiler_emptyFn$$();
$JSCompiler_prototypeAlias$$.$getPrimaryFill$ = $JSCompiler_get$$("$_fill$");
$JSCompiler_prototypeAlias$$.$_initializeSelectionEffects$ = function $$JSCompiler_prototypeAlias$$$$_initializeSelectionEffects$$() {
  this.$setPoints$(this.$_createPointsArray$(this.$isSelected$() ? -1 : 0));
  var $innerChildPoints_outerBorderWidth$$1$$ = this.$isSelected$() ? 1 : 1.25, $outerChildPoints$$ = this.$_createPointsArray$($innerChildPoints_outerBorderWidth$$1$$), $innerChildPoints_outerBorderWidth$$1$$ = this.$_createPointsArray$($innerChildPoints_outerBorderWidth$$1$$ + 1);
  this.$OuterChild$ ? (this.$OuterChild$.$setPoints$($outerChildPoints$$), this.$InnerChild$.$setPoints$($innerChildPoints_outerBorderWidth$$1$$)) : (this.$OuterChild$ = new dvt.$Polygon$(this.$getCtx$(), $outerChildPoints$$), this.$OuterChild$.$setInvisibleFill$(), this.$OuterChild$.$setMouseEnabled$($JSCompiler_alias_TRUE$$), this.$addChild$(this.$OuterChild$), this.$InnerChild$ = new dvt.$Polygon$(this.$getCtx$(), $innerChildPoints_outerBorderWidth$$1$$), this.$InnerChild$.$setInvisibleFill$(), 
  this.$InnerChild$.$setMouseEnabled$($JSCompiler_alias_TRUE$$), this.$addChild$(this.$InnerChild$))
};
$JSCompiler_prototypeAlias$$.$_showNestedBorders$ = function $$JSCompiler_prototypeAlias$$$$_showNestedBorders$$($outerBorderColor$$1$$, $innerBorderColor$$1$$) {
  this.$_initializeSelectionEffects$();
  $innerBorderColor$$1$$ ? (this.$setSolidFill$($outerBorderColor$$1$$), this.$setStroke$($JSCompiler_alias_NULL$$), this.$OuterChild$.$setSolidFill$($innerBorderColor$$1$$), this.$InnerChild$.$setFill$(this.$_fill$)) : ($outerBorderColor$$1$$ ? (this.$setSolidFill$($outerBorderColor$$1$$), this.$setStroke$($JSCompiler_alias_NULL$$), this.$OuterChild$.$setFill$(this.$_fill$)) : (this.$setFill$(this.$_fill$), this.$setStroke$(this.$_borderStroke$), this.$OuterChild$.$setInvisibleFill$()), this.$InnerChild$.$setInvisibleFill$())
};
$JSCompiler_prototypeAlias$$.$_createPointsArray$ = function $$JSCompiler_prototypeAlias$$$$_createPointsArray$$($inset$$1_y2$$6$$) {
  var $x1$$9$$ = this.$_x1$ + $inset$$1_y2$$6$$, $x2$$7$$ = this.$_x2$ - $inset$$1_y2$$6$$, $y1$$8$$ = this.$_y1$ + $inset$$1_y2$$6$$;
  $inset$$1_y2$$6$$ = this.$_y2$ - $inset$$1_y2$$6$$;
  return[$x1$$9$$, $y1$$8$$, $x2$$7$$, $y1$$8$$, $x2$$7$$, $inset$$1_y2$$6$$, $x1$$9$$, $inset$$1_y2$$6$$]
};
function $DvtChartAxis$$($context$$130$$, $callback$$55$$, $callbackObj$$27$$) {
  this.Init($context$$130$$, $callback$$55$$, $callbackObj$$27$$)
}
dvt.$Obj$.$createSubclass$($DvtChartAxis$$, dvt.$Axis$);
function $JSCompiler_StaticMethods_axisToPlotArea$$($JSCompiler_StaticMethods_axisToPlotArea$self$$, $coord$$16$$) {
  if("tangential" == $JSCompiler_StaticMethods_axisToPlotArea$self$$.$getOptions$().position) {
    return $coord$$16$$
  }
  if($coord$$16$$ == $JSCompiler_alias_NULL$$) {
    return $JSCompiler_alias_NULL$$
  }
  var $ret$$43$$ = $coord$$16$$ - $JSCompiler_StaticMethods_getLeftOverflow$$($JSCompiler_StaticMethods_axisToPlotArea$self$$);
  return Math.round(10 * $ret$$43$$) / 10
}
function $JSCompiler_StaticMethods_plotAreaToAxis$$($JSCompiler_StaticMethods_plotAreaToAxis$self$$, $coord$$17$$) {
  if("tangential" == $JSCompiler_StaticMethods_plotAreaToAxis$self$$.$getOptions$().position) {
    return $coord$$17$$
  }
  if($coord$$17$$ == $JSCompiler_alias_NULL$$) {
    return $JSCompiler_alias_NULL$$
  }
  var $ret$$44$$ = $coord$$17$$ + $JSCompiler_StaticMethods_getLeftOverflow$$($JSCompiler_StaticMethods_plotAreaToAxis$self$$);
  return Math.round($ret$$44$$)
}
$JSCompiler_prototypeAlias$$ = $DvtChartAxis$$.prototype;
$JSCompiler_prototypeAlias$$.$linearToActual$ = function $$JSCompiler_prototypeAlias$$$$linearToActual$$($value$$105$$) {
  return this.$Info$.$linearToActual$($value$$105$$)
};
$JSCompiler_prototypeAlias$$.$actualToLinear$ = function $$JSCompiler_prototypeAlias$$$$actualToLinear$$($value$$106$$) {
  return this.$Info$.$actualToLinear$($value$$106$$)
};
$JSCompiler_prototypeAlias$$.$getValueAt$ = function $$JSCompiler_prototypeAlias$$$$getValueAt$$($coord$$18$$) {
  return this.$Info$.$getValueAt$($JSCompiler_StaticMethods_plotAreaToAxis$$(this, $coord$$18$$))
};
$JSCompiler_prototypeAlias$$.$getCoordAt$ = function $$JSCompiler_prototypeAlias$$$$getCoordAt$$($value$$107$$) {
  return $JSCompiler_StaticMethods_axisToPlotArea$$(this, this.$Info$.$getCoordAt$($value$$107$$))
};
$JSCompiler_prototypeAlias$$.$getBoundedValueAt$ = function $$JSCompiler_prototypeAlias$$$$getBoundedValueAt$$($coord$$19$$) {
  return this.$Info$.$getBoundedValueAt$($JSCompiler_StaticMethods_plotAreaToAxis$$(this, $coord$$19$$))
};
$JSCompiler_prototypeAlias$$.$getBoundedCoordAt$ = function $$JSCompiler_prototypeAlias$$$$getBoundedCoordAt$$($value$$108$$) {
  return $JSCompiler_StaticMethods_axisToPlotArea$$(this, this.$Info$.$getBoundedCoordAt$($value$$108$$))
};
$JSCompiler_prototypeAlias$$.$getUnboundedValueAt$ = function $$JSCompiler_prototypeAlias$$$$getUnboundedValueAt$$($coord$$20$$) {
  return this.$Info$.$getUnboundedValueAt$($JSCompiler_StaticMethods_plotAreaToAxis$$(this, $coord$$20$$))
};
$JSCompiler_prototypeAlias$$.$getUnboundedCoordAt$ = function $$JSCompiler_prototypeAlias$$$$getUnboundedCoordAt$$($value$$109$$) {
  return $JSCompiler_StaticMethods_axisToPlotArea$$(this, this.$Info$.$getUnboundedCoordAt$($value$$109$$))
};
$JSCompiler_prototypeAlias$$.$getBaselineCoord$ = function $$JSCompiler_prototypeAlias$$$$getBaselineCoord$$() {
  return $JSCompiler_StaticMethods_axisToPlotArea$$(this, this.$Info$.$getBaselineCoord$())
};
$JSCompiler_prototypeAlias$$.$getPosition$ = function $$JSCompiler_prototypeAlias$$$$getPosition$$() {
  return this.$getOptions$().position
};
function $JSCompiler_StaticMethods_isGroupAxis$$($JSCompiler_StaticMethods_isGroupAxis$self$$) {
  return $JSCompiler_StaticMethods_isGroupAxis$self$$.$Info$ instanceof dvt.$GroupAxisInfo$
}
$JSCompiler_prototypeAlias$$.$getMajorTickCoords$ = function $$JSCompiler_prototypeAlias$$$$getMajorTickCoords$$() {
  for(var $coords$$8$$ = this.$Info$ ? this.$Info$.$getMajorTickCoords$() : [], $i$$296$$ = 0;$i$$296$$ < $coords$$8$$.length;$i$$296$$++) {
    $coords$$8$$[$i$$296$$] = $JSCompiler_StaticMethods_axisToPlotArea$$(this, $coords$$8$$[$i$$296$$])
  }
  return $coords$$8$$
};
$JSCompiler_prototypeAlias$$.$getMinorTickCoords$ = function $$JSCompiler_prototypeAlias$$$$getMinorTickCoords$$() {
  for(var $coords$$9$$ = this.$Info$ ? this.$Info$.$getMinorTickCoords$() : [], $i$$297$$ = 0;$i$$297$$ < $coords$$9$$.length;$i$$297$$++) {
    $coords$$9$$[$i$$297$$] = $JSCompiler_StaticMethods_axisToPlotArea$$(this, $coords$$9$$[$i$$297$$])
  }
  return $coords$$9$$
};
$JSCompiler_prototypeAlias$$.$getBaselineCoord$ = function $$JSCompiler_prototypeAlias$$$$getBaselineCoord$$() {
  return $JSCompiler_StaticMethods_axisToPlotArea$$(this, this.$Info$.$getBaselineCoord$())
};
function $JSCompiler_StaticMethods_getLinearViewportMin$$($JSCompiler_StaticMethods_getLinearViewportMin$self$$) {
  return $JSCompiler_StaticMethods_getLinearViewportMin$self$$.$actualToLinear$($JSCompiler_StaticMethods_getLinearViewportMin$self$$.$Info$.$MinValue$)
}
function $JSCompiler_StaticMethods_getLinearViewportMax$$($JSCompiler_StaticMethods_getLinearViewportMax$self$$) {
  return $JSCompiler_StaticMethods_getLinearViewportMax$self$$.$actualToLinear$($JSCompiler_StaticMethods_getLinearViewportMax$self$$.$Info$.$MaxValue$)
}
function $JSCompiler_StaticMethods_getUnboundedLinearValueAt$$($JSCompiler_StaticMethods_getUnboundedLinearValueAt$self$$, $coord$$21$$) {
  return $JSCompiler_StaticMethods_getUnboundedLinearValueAt$self$$.$Info$.$actualToLinear$($JSCompiler_StaticMethods_getUnboundedLinearValueAt$self$$.$getUnboundedValueAt$($coord$$21$$))
}
function $JSCompiler_StaticMethods_isFullViewport$$($JSCompiler_StaticMethods_isFullViewport$self$$) {
  return $JSCompiler_StaticMethods_isFullViewport$self$$.$Info$.$MinValue$ == $JSCompiler_StaticMethods_isFullViewport$self$$.$Info$.$GlobalMin$ && $JSCompiler_StaticMethods_isFullViewport$self$$.$Info$.$MaxValue$ == $JSCompiler_StaticMethods_isFullViewport$self$$.$Info$.$GlobalMax$
}
function $JSCompiler_StaticMethods_getLeftOverflow$$($JSCompiler_StaticMethods_getLeftOverflow$self$$) {
  return dvt.$Agent$.$isRightToLeft$($JSCompiler_StaticMethods_getLeftOverflow$self$$.$getCtx$()) ? $JSCompiler_StaticMethods_getLeftOverflow$self$$.$Info$.$getEndOverflow$() : $JSCompiler_StaticMethods_getLeftOverflow$self$$.$Info$.$getStartOverflow$()
}
function $JSCompiler_StaticMethods_getRightOverflow$$($JSCompiler_StaticMethods_getRightOverflow$self$$) {
  return dvt.$Agent$.$isRightToLeft$($JSCompiler_StaticMethods_getRightOverflow$self$$.$getCtx$()) ? $JSCompiler_StaticMethods_getRightOverflow$self$$.$Info$.$getStartOverflow$() : $JSCompiler_StaticMethods_getRightOverflow$self$$.$Info$.$getEndOverflow$()
}
function $DvtChartBar$$($chart$$19$$, $axisCoord$$, $baselineCoord$$, $endCoord$$2$$, $x1$$10$$, $x2$$8$$) {
  this.Init($chart$$19$$.$getCtx$());
  this.$_bHoriz$ = $DvtChartTypeUtils$$.$isHorizontal$($chart$$19$$);
  this.$_bStacked$ = $DvtChartTypeUtils$$.$isStacked$($chart$$19$$);
  this.$_barGapRatio$ = $DvtChartStyleUtils$$.$getBarGapRatio$($chart$$19$$);
  this.$_dataItemGaps$ = $DvtChartStyleUtils$$.$getDataItemGaps$($chart$$19$$);
  this.$_axisCoord$ = $axisCoord$$;
  this.$_setBarCoords$($baselineCoord$$, $endCoord$$2$$, $x1$$10$$, $x2$$8$$, $JSCompiler_alias_TRUE$$)
}
dvt.$Obj$.$createSubclass$($DvtChartBar$$, $DvtChartSelectableRectangularPolygon$$);
$JSCompiler_prototypeAlias$$ = $DvtChartBar$$.prototype;
$JSCompiler_prototypeAlias$$.$setSelected$ = function $$JSCompiler_prototypeAlias$$$$setSelected$$($selected$$14$$) {
  this.$IsSelected$ != $selected$$14$$ && (this.$IsSelected$ = $selected$$14$$, this.$isSelected$() ? (this.$_tempX1$ = this.$_x1$, this.$_tempX2$ = this.$_x2$, this.$_tempBaselineCoord$ = this.$_baselineCoord$, this.$_x1$ = this.$_origX1$, this.$_x2$ = this.$_origX2$, this.$_baselineCoord$ = this.$_origBaselineCoord$, this.$setPoints$(this.$_createPointsArray$()), this.$_showNestedBorders$(this.$IsShowingHoverEffect$ ? this.$_hoverColor$ : this.$_outerColor$, this.$_innerColor$)) : (this.$_x1$ = 
  this.$_tempX1$, this.$_x2$ = this.$_tempX2$, this.$_baselineCoord$ = this.$_tempBaselineCoord$, this.$setPoints$(this.$_createPointsArray$()), this.$_showNestedBorders$(this.$IsShowingHoverEffect$ ? this.$_hoverColor$ : $JSCompiler_alias_NULL$$)))
};
$JSCompiler_prototypeAlias$$.$getAnimationParams$ = function $$JSCompiler_prototypeAlias$$$$getAnimationParams$$($bFlip$$) {
  return $bFlip$$ ? this.$_bHoriz$ ? [this.$_x2$, this.$_x1$, this.$_baselineCoord$, this.$_endCoord$] : [this.$_x1$, this.$_x2$, this.$_endCoord$, this.$_baselineCoord$] : [this.$_baselineCoord$, this.$_endCoord$, this.$_x1$, this.$_x2$]
};
$JSCompiler_prototypeAlias$$.$setAnimationParams$ = function $$JSCompiler_prototypeAlias$$$$setAnimationParams$$($params$$9$$, $indicator$$) {
  this.$_setBarCoords$($params$$9$$[0], $params$$9$$[1], $params$$9$$[2], $params$$9$$[3], $JSCompiler_alias_FALSE$$);
  if($indicator$$) {
    var $indicatorPosition_x$$inline_2875$$, $widthCoord$$inline_2874_y$$inline_2876$$ = (this.$_x1$ + this.$_x2$) / 2, $lengthCoord$$inline_2878_midLength$$inline_2877$$ = this.$_bStacked$ ? (this.$_endCoord$ + this.$_baselineCoord$) / 2 : this.$_endCoord$ >= this.$_baselineCoord$ ? this.$_endCoord$ + 8 : this.$_endCoord$ - 8;
    $indicatorPosition_x$$inline_2875$$ = this.$_bHoriz$ ? $lengthCoord$$inline_2878_midLength$$inline_2877$$ : $widthCoord$$inline_2874_y$$inline_2876$$;
    $widthCoord$$inline_2874_y$$inline_2876$$ = this.$_bHoriz$ ? $widthCoord$$inline_2874_y$$inline_2876$$ : $lengthCoord$$inline_2878_midLength$$inline_2877$$;
    $indicatorPosition_x$$inline_2875$$ = new dvt.$Point$($indicatorPosition_x$$inline_2875$$, $widthCoord$$inline_2874_y$$inline_2876$$);
    $indicator$$.$setTranslate$($indicatorPosition_x$$inline_2875$$.x, $indicatorPosition_x$$inline_2875$$.y);
    $indicator$$.$setAlpha$(1);
    $indicator$$.getParent().$addChild$($indicator$$)
  }
};
$JSCompiler_prototypeAlias$$.$getDisplayAnimation$ = function $$JSCompiler_prototypeAlias$$$$getDisplayAnimation$$($duration$$2_nodePlayable$$) {
  var $endState$$ = this.$getAnimationParams$();
  this.$setAnimationParams$([this.$_axisCoord$, this.$_axisCoord$, this.$_x1$, this.$_x2$]);
  $duration$$2_nodePlayable$$ = new dvt.$CustomAnimation$(this.$getCtx$(), this, $duration$$2_nodePlayable$$);
  $duration$$2_nodePlayable$$.$_animator$.$addProp$(dvt.$Animator$.$TYPE_NUMBER_ARRAY$, this, this.$getAnimationParams$, this.$setAnimationParams$, $endState$$);
  return $duration$$2_nodePlayable$$
};
$JSCompiler_prototypeAlias$$.$getDeleteAnimation$ = function $$JSCompiler_prototypeAlias$$$$getDeleteAnimation$$($duration$$3_nodePlayable$$1$$) {
  var $endState$$1$$ = [this.$_baselineCoord$, this.$_baselineCoord$, this.$_x1$, this.$_x2$];
  $duration$$3_nodePlayable$$1$$ = new dvt.$CustomAnimation$(this.$getCtx$(), this, $duration$$3_nodePlayable$$1$$);
  $duration$$3_nodePlayable$$1$$.$_animator$.$addProp$(dvt.$Animator$.$TYPE_NUMBER_ARRAY$, this, this.$getAnimationParams$, this.$setAnimationParams$, $endState$$1$$);
  $duration$$3_nodePlayable$$1$$.$_animator$.$addProp$(dvt.$Animator$.$TYPE_NUMBER$, this, this.$getAlpha$, this.$setAlpha$, 0);
  return $duration$$3_nodePlayable$$1$$
};
$JSCompiler_prototypeAlias$$.$getInsertAnimation$ = function $$JSCompiler_prototypeAlias$$$$getInsertAnimation$$($duration$$4_nodePlayable$$2$$) {
  this.$setAlpha$(0);
  $duration$$4_nodePlayable$$2$$ = this.$getDisplayAnimation$($duration$$4_nodePlayable$$2$$);
  $duration$$4_nodePlayable$$2$$.$_animator$.$addProp$(dvt.$Animator$.$TYPE_NUMBER$, this, this.$getAlpha$, this.$setAlpha$, 1);
  return $duration$$4_nodePlayable$$2$$
};
$JSCompiler_prototypeAlias$$.$_setBarCoords$ = function $$JSCompiler_prototypeAlias$$$$_setBarCoords$$($baselineCoord$$1_gapSize$$, $barWidth_endCoord$$3$$, $bStartsAtBaseline_x1$$11$$, $x2$$9$$, $bAdjustForGaps$$) {
  this.$_baselineCoord$ = $baselineCoord$$1_gapSize$$;
  this.$_endCoord$ = $barWidth_endCoord$$3$$;
  this.$_x1$ = $bStartsAtBaseline_x1$$11$$;
  this.$_x2$ = $x2$$9$$;
  this.$_origX1$ = this.$_x1$;
  this.$_origX2$ = this.$_x2$;
  this.$_origBaselineCoord$ = this.$_baselineCoord$;
  0 < this.$_dataItemGaps$ && ($bAdjustForGaps$$ && !this.$isSelected$()) && ($baselineCoord$$1_gapSize$$ = Math.ceil(2 * this.$_dataItemGaps$), $barWidth_endCoord$$3$$ = this.$_x2$ - this.$_x1$, $bStartsAtBaseline_x1$$11$$ = this.$_axisCoord$ == this.$_baselineCoord$, 5 <= Math.abs(this.$_baselineCoord$ - this.$_endCoord$) && (this.$_bStacked$ && !$bStartsAtBaseline_x1$$11$$) && (this.$_baselineCoord$ += this.$_endCoord$ > this.$_baselineCoord$ ? $baselineCoord$$1_gapSize$$ : -$baselineCoord$$1_gapSize$$), 
  5 <= $barWidth_endCoord$$3$$ && (1 == dvt.$Agent$.$getDevicePixelRatio$() && 0 < this.$_barGapRatio$ && 15 < $barWidth_endCoord$$3$$ ? (dvt.$Agent$.$isPlatformGecko$() || this.$setPixelHinting$(), this.$_x1$ = Math.round(this.$_x1$), this.$_x2$ = Math.round(this.$_x2$), this.$_origX1$ = this.$_x1$, this.$_origX2$ = this.$_x2$, this.$_x2$ -= $baselineCoord$$1_gapSize$$) : (this.$_x1$ += $baselineCoord$$1_gapSize$$ / 2, this.$_x2$ -= $baselineCoord$$1_gapSize$$ / 2)));
  this.$setPoints$(this.$_createPointsArray$());
  this.$OuterChild$ && this.$OuterChild$.$setPoints$(this.$_createPointsArray$(2));
  this.$InnerChild$ && this.$InnerChild$.$setPoints$(this.$_createPointsArray$(3))
};
$JSCompiler_prototypeAlias$$.$_createPointsArray$ = function $$JSCompiler_prototypeAlias$$$$_createPointsArray$$($inset$$2$$) {
  var $baselineCoord$$2$$ = this.$_baselineCoord$, $endCoord$$4$$ = this.$_endCoord$, $x1$$12$$ = this.$_x1$, $x2$$10$$ = this.$_x2$;
  if(0 < $inset$$2$$) {
    if(Math.abs($x1$$12$$ - $x2$$10$$) < 2 * $inset$$2$$ || Math.abs($baselineCoord$$2$$ - $endCoord$$4$$) < 2 * $inset$$2$$) {
      return[]
    }
    $x1$$12$$ += $inset$$2$$;
    $x2$$10$$ -= $inset$$2$$;
    $endCoord$$4$$ < $baselineCoord$$2$$ ? ($baselineCoord$$2$$ -= $inset$$2$$, $endCoord$$4$$ += $inset$$2$$) : ($baselineCoord$$2$$ += $inset$$2$$, $endCoord$$4$$ -= $inset$$2$$)
  }
  return this.$_bHoriz$ ? [$endCoord$$4$$, $x1$$12$$, $endCoord$$4$$, $x2$$10$$, $baselineCoord$$2$$, $x2$$10$$, $baselineCoord$$2$$, $x1$$12$$] : [$x1$$12$$, $endCoord$$4$$, $x2$$10$$, $endCoord$$4$$, $x2$$10$$, $baselineCoord$$2$$, $x1$$12$$, $baselineCoord$$2$$]
};
$JSCompiler_prototypeAlias$$.$_initializeSelectionEffects$ = function $$JSCompiler_prototypeAlias$$$$_initializeSelectionEffects$$() {
  var $innerChildPoints$$1_outerBorderWidth$$2$$ = this.$isSelected$() ? 2 : 1.25, $outerChildPoints$$1$$ = this.$_createPointsArray$($innerChildPoints$$1_outerBorderWidth$$2$$), $innerChildPoints$$1_outerBorderWidth$$2$$ = this.$_createPointsArray$($innerChildPoints$$1_outerBorderWidth$$2$$ + 1);
  this.$OuterChild$ ? (this.$OuterChild$.$setPoints$($outerChildPoints$$1$$), this.$InnerChild$.$setPoints$($innerChildPoints$$1_outerBorderWidth$$2$$)) : (this.$OuterChild$ = new dvt.$Polygon$(this.$getCtx$(), $outerChildPoints$$1$$), this.$OuterChild$.$setInvisibleFill$(), this.$OuterChild$.$setMouseEnabled$($JSCompiler_alias_TRUE$$), this.$addChild$(this.$OuterChild$), this.$InnerChild$ = new dvt.$Polygon$(this.$getCtx$(), $innerChildPoints$$1_outerBorderWidth$$2$$), this.$InnerChild$.$setInvisibleFill$(), 
  this.$InnerChild$.$setMouseEnabled$($JSCompiler_alias_TRUE$$), this.$addChild$(this.$InnerChild$))
};
$JSCompiler_prototypeAlias$$.$getBoundingBox$ = function $$JSCompiler_prototypeAlias$$$$getBoundingBox$$() {
  var $x$$100$$ = Math.min(this.$_x2$, this.$_x1$), $y$$79$$ = Math.min(this.$_endCoord$, this.$_baselineCoord$), $w$$20$$ = Math.abs(this.$_x2$ - this.$_x1$), $h$$16$$ = Math.abs(this.$_endCoord$ - this.$_baselineCoord$);
  return this.$_bHoriz$ ? new dvt.$Rectangle$($y$$79$$, $x$$100$$, $h$$16$$, $w$$20$$) : new dvt.$Rectangle$($x$$100$$, $y$$79$$, $w$$20$$, $h$$16$$)
};
$JSCompiler_prototypeAlias$$.$getDimensionsSelf$ = function $$JSCompiler_prototypeAlias$$$$getDimensionsSelf$$($targetCoordinateSpace$$16$$) {
  return this.$ConvertCoordSpaceRect$(this.$getBoundingBox$(), $targetCoordinateSpace$$16$$)
};
function $DvtChartCandlestick$$($context$$131$$, $rangeX1_xCoord$$1$$, $barWidth$$1_x2$$11$$, $openCoord$$, $closeCoord$$, $lowCoord$$, $highCoord$$) {
  this.Init($context$$131$$);
  $barWidth$$1_x2$$11$$ = Math.max(2 * Math.round($barWidth$$1_x2$$11$$ / 2), 1);
  var $rangeWidth_rangeX2$$ = Math.min(2 * Math.ceil(0.3 * $barWidth$$1_x2$$11$$ / 2), $barWidth$$1_x2$$11$$), $x1$$13$$ = Math.round($rangeX1_xCoord$$1$$) - $barWidth$$1_x2$$11$$ / 2;
  $barWidth$$1_x2$$11$$ = $x1$$13$$ + $barWidth$$1_x2$$11$$;
  $lowCoord$$ != $JSCompiler_alias_NULL$$ && $highCoord$$ != $JSCompiler_alias_NULL$$ && ($rangeX1_xCoord$$1$$ = Math.round($rangeX1_xCoord$$1$$) - $rangeWidth_rangeX2$$ / 2, $rangeWidth_rangeX2$$ = $rangeX1_xCoord$$1$$ + $rangeWidth_rangeX2$$, this.$_rangeShape$ = new $DvtChartSelectableRectangularPolygon$$($context$$131$$, [$rangeX1_xCoord$$1$$, $lowCoord$$, $rangeWidth_rangeX2$$, $lowCoord$$, $rangeWidth_rangeX2$$, $highCoord$$, $rangeX1_xCoord$$1$$, $highCoord$$]), this.$addChild$(this.$_rangeShape$));
  this.$_changeShape$ = new $DvtChartSelectableRectangularPolygon$$($context$$131$$, [$x1$$13$$, $openCoord$$, $barWidth$$1_x2$$11$$, $openCoord$$, $barWidth$$1_x2$$11$$, $closeCoord$$, $x1$$13$$, $closeCoord$$]);
  this.$addChild$(this.$_changeShape$);
  this.$setPixelHinting$()
}
dvt.$Obj$.$createSubclass$($DvtChartCandlestick$$, dvt.$Container$);
$JSCompiler_prototypeAlias$$ = $DvtChartCandlestick$$.prototype;
$JSCompiler_prototypeAlias$$.$setSelected$ = function $$JSCompiler_prototypeAlias$$$$setSelected$$($selected$$15$$) {
  this.$_changeShape$.$setSelected$($selected$$15$$);
  this.$_rangeShape$ && this.$_rangeShape$.$setSelected$($selected$$15$$)
};
$JSCompiler_prototypeAlias$$.$showHoverEffect$ = function $$JSCompiler_prototypeAlias$$$$showHoverEffect$$() {
  this.$_changeShape$.$showHoverEffect$();
  this.$_rangeShape$ && this.$_rangeShape$.$showHoverEffect$()
};
$JSCompiler_prototypeAlias$$.$hideHoverEffect$ = function $$JSCompiler_prototypeAlias$$$$hideHoverEffect$$() {
  this.$_changeShape$.$hideHoverEffect$();
  this.$_rangeShape$ && this.$_rangeShape$.$hideHoverEffect$()
};
$JSCompiler_prototypeAlias$$.$getDisplayAnimation$ = function $$JSCompiler_prototypeAlias$$$$getDisplayAnimation$$($duration$$5_nodePlayable$$3$$) {
  $duration$$5_nodePlayable$$3$$ = new dvt.$CustomAnimation$(this.$getCtx$(), this, $duration$$5_nodePlayable$$3$$);
  var $endStateChange_endStateRange$$ = this.$_changeShape$.$getPoints$();
  this.$_changeShape$.$setPoints$($DvtChartCandlestick$_getInitialPoints$$($endStateChange_endStateRange$$));
  $duration$$5_nodePlayable$$3$$.$_animator$.$addProp$(dvt.$Animator$.$TYPE_NUMBER_ARRAY$, this.$_changeShape$, this.$_changeShape$.$getPoints$, this.$_changeShape$.$setAnimationParams$, $endStateChange_endStateRange$$);
  this.$_rangeShape$ && ($endStateChange_endStateRange$$ = this.$_rangeShape$.$getPoints$(), this.$_rangeShape$.$setPoints$($DvtChartCandlestick$_getInitialPoints$$($endStateChange_endStateRange$$)), $duration$$5_nodePlayable$$3$$.$_animator$.$addProp$(dvt.$Animator$.$TYPE_NUMBER_ARRAY$, this.$_rangeShape$, this.$_rangeShape$.$getPoints$, this.$_rangeShape$.$setAnimationParams$, $endStateChange_endStateRange$$));
  return $duration$$5_nodePlayable$$3$$
};
$JSCompiler_prototypeAlias$$.$getDeleteAnimation$ = function $$JSCompiler_prototypeAlias$$$$getDeleteAnimation$$($duration$$6_nodePlayable$$4$$) {
  $duration$$6_nodePlayable$$4$$ = new dvt.$CustomAnimation$(this.$getCtx$(), this, $duration$$6_nodePlayable$$4$$);
  $duration$$6_nodePlayable$$4$$.$_animator$.$addProp$(dvt.$Animator$.$TYPE_NUMBER_ARRAY$, this.$_changeShape$, this.$_changeShape$.$getPoints$, this.$_changeShape$.$setAnimationParams$, $DvtChartCandlestick$_getInitialPoints$$(this.$_changeShape$.$getPoints$()));
  this.$_rangeShape$ && $duration$$6_nodePlayable$$4$$.$_animator$.$addProp$(dvt.$Animator$.$TYPE_NUMBER_ARRAY$, this.$_rangeShape$, this.$_rangeShape$.$getPoints$, this.$_rangeShape$.$setAnimationParams$, $DvtChartCandlestick$_getInitialPoints$$(this.$_rangeShape$.$getPoints$()));
  $duration$$6_nodePlayable$$4$$.$_animator$.$addProp$(dvt.$Animator$.$TYPE_NUMBER$, this, this.$getAlpha$, this.$setAlpha$, 0);
  return $duration$$6_nodePlayable$$4$$
};
$JSCompiler_prototypeAlias$$.$getInsertAnimation$ = function $$JSCompiler_prototypeAlias$$$$getInsertAnimation$$($duration$$7_nodePlayable$$5$$) {
  this.$setAlpha$(0);
  $duration$$7_nodePlayable$$5$$ = this.$getDisplayAnimation$($duration$$7_nodePlayable$$5$$);
  $duration$$7_nodePlayable$$5$$.$_animator$.$addProp$(dvt.$Animator$.$TYPE_NUMBER$, this, this.$getAlpha$, this.$setAlpha$, 1);
  return $duration$$7_nodePlayable$$5$$
};
$JSCompiler_prototypeAlias$$.$getUpdateAnimation$ = function $$JSCompiler_prototypeAlias$$$$getUpdateAnimation$$($duration$$8$$, $oldShape$$7$$) {
  var $nodePlayable$$6$$ = new dvt.$CustomAnimation$(this.$getCtx$(), this, $duration$$8$$), $bSkipFillAnimation_endStateChange$$2_endStateRange$$2$$ = this.$_changeShape$.$getPoints$();
  this.$_changeShape$.$setPoints$($oldShape$$7$$.$_changeShape$.$getPoints$());
  $nodePlayable$$6$$.$_animator$.$addProp$(dvt.$Animator$.$TYPE_NUMBER_ARRAY$, this.$_changeShape$, this.$_changeShape$.$getPoints$, this.$_changeShape$.$setAnimationParams$, $bSkipFillAnimation_endStateChange$$2_endStateRange$$2$$);
  var $bSkipFillAnimation_endStateChange$$2_endStateRange$$2$$ = $oldShape$$7$$.$_changeShape$.$isSelected$() || this.$_changeShape$.$isSelected$(), $startFill$$ = $oldShape$$7$$.$_changeShape$.$getPrimaryFill$().$clone$(), $endFill$$ = this.$_changeShape$.$getPrimaryFill$();
  $bSkipFillAnimation_endStateChange$$2_endStateRange$$2$$ || (this.$_changeShape$.$setFill$($startFill$$), $nodePlayable$$6$$.$_animator$.$addProp$(dvt.$Animator$.$TYPE_FILL$, this.$_changeShape$, this.$_changeShape$.$getFill$, this.$_changeShape$.$setFill$, $endFill$$));
  this.$_rangeShape$ && $oldShape$$7$$.$_rangeShape$ && ($bSkipFillAnimation_endStateChange$$2_endStateRange$$2$$ = this.$_rangeShape$.$getPoints$(), this.$_rangeShape$.$setPoints$($oldShape$$7$$.$_rangeShape$.$getPoints$()), $nodePlayable$$6$$.$_animator$.$addProp$(dvt.$Animator$.$TYPE_NUMBER_ARRAY$, this.$_rangeShape$, this.$_rangeShape$.$getPoints$, this.$_rangeShape$.$setAnimationParams$, $bSkipFillAnimation_endStateChange$$2_endStateRange$$2$$));
  return $nodePlayable$$6$$
};
$JSCompiler_prototypeAlias$$.$UpdateSelectionEffect$ = $JSCompiler_emptyFn$$();
function $DvtChartCandlestick$_getInitialPoints$$($points$$41_yMid$$) {
  var $x1$$14$$ = $points$$41_yMid$$[0], $x2$$12$$ = $points$$41_yMid$$[2];
  $points$$41_yMid$$ = ($points$$41_yMid$$[1] + $points$$41_yMid$$[5]) / 2;
  return[$x1$$14$$, $points$$41_yMid$$, $x2$$12$$, $points$$41_yMid$$, $x2$$12$$, $points$$41_yMid$$, $x1$$14$$, $points$$41_yMid$$]
}
function $DvtChartCoord$$($x$$101$$, $y1$$10$$, $y2$$8$$, $groupIndex$$11$$, $group$$13$$, $filtered$$) {
  this.x = $x$$101$$;
  this.$y1$ = $y1$$10$$;
  this.$y2$ = $y2$$8$$;
  this.$groupIndex$ = $groupIndex$$11$$;
  this.group = $group$$13$$;
  this.$filtered$ = $filtered$$
}
dvt.$Obj$.$createSubclass$($DvtChartCoord$$, dvt.$Obj$);
function $JSCompiler_StaticMethods_isUpstep$$($JSCompiler_StaticMethods_isUpstep$self$$, $baseline$$3$$) {
  return Math.abs($JSCompiler_StaticMethods_isUpstep$self$$.$y2$ - $baseline$$3$$) > Math.abs($JSCompiler_StaticMethods_isUpstep$self$$.$y1$ - $baseline$$3$$)
}
$DvtChartCoord$$.prototype.$clone$ = function $$DvtChartCoord$$$$$clone$$() {
  return new $DvtChartCoord$$(this.x, this.$y1$, this.$y2$, this.$groupIndex$, this.group, this.$filtered$)
};
function $DvtChartLineArea$$($chart$$20$$, $bArea$$, $availSpace$$17$$, $baseline$$4$$, $fill$$24$$, $stroke$$40$$, $type$$96$$, $arCoord$$, $baseType$$, $arBaseCoord$$) {
  this.Init($chart$$20$$.$getCtx$());
  this.$_chart$ = $chart$$20$$;
  this.$_bArea$ = $bArea$$;
  this.$_availSpace$ = $availSpace$$17$$;
  this.$_baseline$ = $baseline$$4$$;
  this.$_fill$ = $fill$$24$$;
  this.$_stroke$ = $stroke$$40$$;
  this.$_type$ = $type$$96$$;
  this.$_baseType$ = $baseType$$ ? $baseType$$ : $type$$96$$;
  this.$_indicatorMap$ = {};
  this.$setCoords$($arCoord$$, $arBaseCoord$$)
}
dvt.$Obj$.$createSubclass$($DvtChartLineArea$$, dvt.$Container$);
$JSCompiler_prototypeAlias$$ = $DvtChartLineArea$$.prototype;
$JSCompiler_prototypeAlias$$.$setCoords$ = function $$JSCompiler_prototypeAlias$$$$setCoords$$($arCoord$$1$$, $arBaseCoord$$1$$) {
  this.$_arCoord$ = $arCoord$$1$$;
  $arBaseCoord$$1$$ && (this.$_arBaseCoord$ = $arBaseCoord$$1$$);
  this.$removeChildren$();
  this.$_bArea$ ? this.$_renderAreas$() : this.$_renderLines$();
  for(var $indicator$$inline_2882_indicatorObj$$inline_2881$$, $pos$$inline_2883_y$$inline_2884$$, $coord$$inline_2885$$, $i$$inline_2886$$ = 0;$i$$inline_2886$$ < this.$_arCoord$.length;$i$$inline_2886$$++) {
    if($coord$$inline_2885$$ = this.$_arCoord$[$i$$inline_2886$$], ($indicator$$inline_2882_indicatorObj$$inline_2881$$ = this.$_indicatorMap$[$coord$$inline_2885$$.$groupIndex$]) && $indicator$$inline_2882_indicatorObj$$inline_2881$$.$indicator$) {
      $pos$$inline_2883_y$$inline_2884$$ = ($JSCompiler_StaticMethods_isUpstep$$($coord$$inline_2885$$, this.$_baseline$) ? $coord$$inline_2885$$.$y2$ : $coord$$inline_2885$$.$y1$) + 8 * ($indicator$$inline_2882_indicatorObj$$inline_2881$$.direction == $DvtChartDataChangeUtils$$.$DIR_UP$ ? -1 : 1), $pos$$inline_2883_y$$inline_2884$$ = $DvtChartPlotAreaRenderer$$.$convertAxisCoord$(this.$_chart$, new dvt.$Point$($coord$$inline_2885$$.x, $pos$$inline_2883_y$$inline_2884$$), this.$_availSpace$), $indicator$$inline_2882_indicatorObj$$inline_2881$$ = 
      $indicator$$inline_2882_indicatorObj$$inline_2881$$.$indicator$, $indicator$$inline_2882_indicatorObj$$inline_2881$$.$setTranslate$($pos$$inline_2883_y$$inline_2884$$.x, $pos$$inline_2883_y$$inline_2884$$.y), $indicator$$inline_2882_indicatorObj$$inline_2881$$.$setAlpha$(1), $indicator$$inline_2882_indicatorObj$$inline_2881$$.getParent().$addChild$($indicator$$inline_2882_indicatorObj$$inline_2881$$)
    }
  }
};
$JSCompiler_prototypeAlias$$.$isArea$ = $JSCompiler_get$$("$_bArea$");
function $JSCompiler_StaticMethods__getPointArrays$$($JSCompiler_StaticMethods__getPointArrays$self_lastPoints$$, $coords$$10_coords$$inline_2888$$, $type$$97$$) {
  var $pointsArrays$$ = [], $points$$42$$ = [];
  $pointsArrays$$.push($points$$42$$);
  for(var $isPolar$$2_pointCoords$$inline_2889$$ = [], $i$$inline_2890_isCentered$$ = 0;$i$$inline_2890_isCentered$$ < $coords$$10_coords$$inline_2888$$.length;$i$$inline_2890_isCentered$$++) {
    if(!$coords$$10_coords$$inline_2888$$[$i$$inline_2890_isCentered$$].$filtered$) {
      if($coords$$10_coords$$inline_2888$$[$i$$inline_2890_isCentered$$].x == $JSCompiler_alias_NULL$$) {
        $isPolar$$2_pointCoords$$inline_2889$$.push($JSCompiler_alias_NULL$$)
      }else {
        if($isPolar$$2_pointCoords$$inline_2889$$.push(new dvt.$Point$($coords$$10_coords$$inline_2888$$[$i$$inline_2890_isCentered$$].x, $coords$$10_coords$$inline_2888$$[$i$$inline_2890_isCentered$$].$y1$)), $coords$$10_coords$$inline_2888$$[$i$$inline_2890_isCentered$$].$y1$ != $coords$$10_coords$$inline_2888$$[$i$$inline_2890_isCentered$$].$y2$) {
          var $isParallel_p2$$inline_2891$$ = new dvt.$Point$($coords$$10_coords$$inline_2888$$[$i$$inline_2890_isCentered$$].x, $coords$$10_coords$$inline_2888$$[$i$$inline_2890_isCentered$$].$y2$);
          $isParallel_p2$$inline_2891$$.$_isY2$ = $JSCompiler_alias_TRUE$$;
          $isPolar$$2_pointCoords$$inline_2889$$.push($isParallel_p2$$inline_2891$$)
        }
      }
    }
  }
  $coords$$10_coords$$inline_2888$$ = $isPolar$$2_pointCoords$$inline_2889$$;
  var $isPolar$$2_pointCoords$$inline_2889$$ = $DvtChartTypeUtils$$.$isPolar$($JSCompiler_StaticMethods__getPointArrays$self_lastPoints$$.$_chart$), $isParallel_p2$$inline_2891$$ = ($i$$inline_2890_isCentered$$ = "centeredStepped" == $type$$97$$ || "centeredSegmented" == $type$$97$$) || "stepped" == $type$$97$$ || "segmented" == $type$$97$$, $groupWidth$$1$$ = $DvtChartStyleUtils$$.$getGroupWidth$($JSCompiler_StaticMethods__getPointArrays$self_lastPoints$$.$_chart$), $dir$$1$$ = dvt.$Agent$.$isRightToLeft$($JSCompiler_StaticMethods__getPointArrays$self_lastPoints$$.$getCtx$()) && 
  $DvtChartTypeUtils$$.$isVertical$($JSCompiler_StaticMethods__getPointArrays$self_lastPoints$$.$_chart$) ? -1 : 1, $lastCoord$$;
  $isPolar$$2_pointCoords$$inline_2889$$ && ($lastCoord$$ = $coords$$10_coords$$inline_2888$$[$coords$$10_coords$$inline_2888$$.length - 1]);
  for(var $coord$$22_finalXCoord$$, $xCoord$$2$$, $isY2$$, $inBump$$ = $JSCompiler_alias_FALSE$$, $i$$298$$ = 0;$i$$298$$ < $coords$$10_coords$$inline_2888$$.length;$i$$298$$++) {
    if($coords$$10_coords$$inline_2888$$[$i$$298$$] == $JSCompiler_alias_NULL$$) {
      if(!$DvtChartAxisUtils$$.$isMixedFrequency$($JSCompiler_StaticMethods__getPointArrays$self_lastPoints$$.$_chart$) && ($isParallel_p2$$inline_2891$$ && !$isPolar$$2_pointCoords$$inline_2889$$ && $lastCoord$$ && !$isY2$$) && ($coord$$22_finalXCoord$$ = $i$$inline_2890_isCentered$$ ? $lastCoord$$.x + 0.5 * $groupWidth$$1$$ * $dir$$1$$ : $lastCoord$$.x + $groupWidth$$1$$ * $dir$$1$$, $JSCompiler_StaticMethods__pushCoord$$($JSCompiler_StaticMethods__getPointArrays$self_lastPoints$$, $points$$42$$, 
      $coord$$22_finalXCoord$$, $lastCoord$$.y)), "jet" == $JSCompiler_StaticMethods__getPointArrays$self_lastPoints$$.$_chart$.$getOptions$()._environment || !$DvtChartAxisUtils$$.$isMixedFrequency$($JSCompiler_StaticMethods__getPointArrays$self_lastPoints$$.$_chart$)) {
        $points$$42$$ = [], $pointsArrays$$.push($points$$42$$), $lastCoord$$ = $JSCompiler_alias_NULL$$
      }
    }else {
      $coord$$22_finalXCoord$$ = $coords$$10_coords$$inline_2888$$[$i$$298$$];
      $isY2$$ = $coords$$10_coords$$inline_2888$$[$i$$298$$].$_isY2$;
      $xCoord$$2$$ = $i$$inline_2890_isCentered$$ ? $coord$$22_finalXCoord$$.x - $groupWidth$$1$$ / 2 * $dir$$1$$ : $coord$$22_finalXCoord$$.x;
      $isY2$$ && ($inBump$$ && $isParallel_p2$$inline_2891$$ && ($xCoord$$2$$ += $groupWidth$$1$$ * $dir$$1$$), $inBump$$ = !$inBump$$);
      "curved" == $type$$97$$ && $isY2$$ && $points$$42$$.push($JSCompiler_alias_NULL$$, $JSCompiler_alias_NULL$$);
      $lastCoord$$ && $isParallel_p2$$inline_2891$$ && $JSCompiler_StaticMethods__pushCoord$$($JSCompiler_StaticMethods__getPointArrays$self_lastPoints$$, $points$$42$$, $xCoord$$2$$, $lastCoord$$.y);
      if(!$JSCompiler_StaticMethods__getPointArrays$self_lastPoints$$.$_bArea$ && ("segmented" == $type$$97$$ || "centeredSegmented" == $type$$97$$)) {
        $points$$42$$ = [], $pointsArrays$$.push($points$$42$$)
      }
      $JSCompiler_StaticMethods__pushCoord$$($JSCompiler_StaticMethods__getPointArrays$self_lastPoints$$, $points$$42$$, $xCoord$$2$$, $coord$$22_finalXCoord$$.y);
      $lastCoord$$ = $coord$$22_finalXCoord$$
    }
  }
  $isParallel_p2$$inline_2891$$ && (!$isPolar$$2_pointCoords$$inline_2889$$ && $lastCoord$$ && !$isY2$$) && ($coord$$22_finalXCoord$$ = $i$$inline_2890_isCentered$$ ? $lastCoord$$.x + 0.5 * $groupWidth$$1$$ * $dir$$1$$ : $lastCoord$$.x + $groupWidth$$1$$ * $dir$$1$$, $JSCompiler_StaticMethods__pushCoord$$($JSCompiler_StaticMethods__getPointArrays$self_lastPoints$$, $points$$42$$, $coord$$22_finalXCoord$$, $lastCoord$$.y));
  $isPolar$$2_pointCoords$$inline_2889$$ && 1 < $pointsArrays$$.length && ($JSCompiler_StaticMethods__getPointArrays$self_lastPoints$$ = $pointsArrays$$.pop(), $pointsArrays$$[0] = $JSCompiler_StaticMethods__getPointArrays$self_lastPoints$$.concat($pointsArrays$$[0]));
  return $pointsArrays$$
}
function $JSCompiler_StaticMethods__pushCoord$$($JSCompiler_StaticMethods__pushCoord$self_coord$$23$$, $pointArray$$, $x$$102$$, $y$$80$$) {
  $JSCompiler_StaticMethods__pushCoord$self_coord$$23$$ = $DvtChartPlotAreaRenderer$$.$convertAxisCoord$($JSCompiler_StaticMethods__pushCoord$self_coord$$23$$.$_chart$, new dvt.$Point$($x$$102$$, $y$$80$$), $JSCompiler_StaticMethods__pushCoord$self_coord$$23$$.$_availSpace$);
  $pointArray$$.push(Math.round(10 * $JSCompiler_StaticMethods__pushCoord$self_coord$$23$$.x) / 10, Math.round(10 * $JSCompiler_StaticMethods__pushCoord$self_coord$$23$$.y) / 10)
}
function $JSCompiler_StaticMethods__isRing$$($JSCompiler_StaticMethods__isRing$self$$) {
  if(!$DvtChartTypeUtils$$.$isPolar$($JSCompiler_StaticMethods__isRing$self$$.$_chart$) || !$DvtChartAxisUtils$$.$hasGroupAxis$($JSCompiler_StaticMethods__isRing$self$$.$_chart$) || $JSCompiler_StaticMethods__isRing$self$$.$_arCoord$.length < $DvtChartDataUtils$$.$getGroupCount$($JSCompiler_StaticMethods__isRing$self$$.$_chart$)) {
    return $JSCompiler_alias_FALSE$$
  }
  for(var $i$$299$$ = 0;$i$$299$$ < $JSCompiler_StaticMethods__isRing$self$$.$_arCoord$.length;$i$$299$$++) {
    if($JSCompiler_StaticMethods__isRing$self$$.$_arCoord$[$i$$299$$].x == $JSCompiler_alias_NULL$$) {
      return $JSCompiler_alias_FALSE$$
    }
  }
  return $JSCompiler_alias_TRUE$$
}
function $JSCompiler_StaticMethods__getSplineType$$($JSCompiler_StaticMethods__getSplineType$self$$) {
  return $DvtChartTypeUtils$$.$isScatterBubble$($JSCompiler_StaticMethods__getSplineType$self$$.$_chart$) ? dvt.$PathUtils$.$SPLINE_TYPE_CARDINAL$ : $DvtChartTypeUtils$$.$isPolar$($JSCompiler_StaticMethods__getSplineType$self$$.$_chart$) ? $JSCompiler_StaticMethods__isRing$$($JSCompiler_StaticMethods__getSplineType$self$$) ? dvt.$PathUtils$.$SPLINE_TYPE_CARDINAL_CLOSED$ : dvt.$PathUtils$.$SPLINE_TYPE_CARDINAL$ : $DvtChartTypeUtils$$.$isHorizontal$($JSCompiler_StaticMethods__getSplineType$self$$.$_chart$) ? 
  dvt.$PathUtils$.$SPLINE_TYPE_MONOTONE_HORIZONTAL$ : dvt.$PathUtils$.$SPLINE_TYPE_MONOTONE_VERTICAL$
}
$JSCompiler_prototypeAlias$$.$_renderLines$ = function $$JSCompiler_prototypeAlias$$$$_renderLines$$() {
  for(var $pointArrays$$ = $JSCompiler_StaticMethods__getPointArrays$$(this, this.$_arCoord$, this.$_type$), $cmd$$2_line$$7_points$$43$$, $i$$300$$ = 0;$i$$300$$ < $pointArrays$$.length;$i$$300$$++) {
    if(($cmd$$2_line$$7_points$$43$$ = $pointArrays$$[$i$$300$$]) && 1 < $cmd$$2_line$$7_points$$43$$.length) {
      "curved" == this.$_type$ ? ($cmd$$2_line$$7_points$$43$$ = $DvtChartLineArea$_getCurvedPathCommands$$($cmd$$2_line$$7_points$$43$$, $JSCompiler_alias_FALSE$$, $JSCompiler_StaticMethods__getSplineType$$(this)), $cmd$$2_line$$7_points$$43$$ = new dvt.$Path$(this.$getCtx$(), $cmd$$2_line$$7_points$$43$$), $cmd$$2_line$$7_points$$43$$.$setFill$($JSCompiler_alias_NULL$$)) : $JSCompiler_StaticMethods__isRing$$(this) ? ($cmd$$2_line$$7_points$$43$$ = new dvt.$Polygon$(this.$getCtx$(), $cmd$$2_line$$7_points$$43$$), 
      $cmd$$2_line$$7_points$$43$$.$setFill$($JSCompiler_alias_NULL$$)) : $cmd$$2_line$$7_points$$43$$ = new dvt.$Polyline$(this.$getCtx$(), $cmd$$2_line$$7_points$$43$$), $cmd$$2_line$$7_points$$43$$.$setStroke$(this.$_stroke$), this.$addChild$($cmd$$2_line$$7_points$$43$$)
    }
  }
};
$JSCompiler_prototypeAlias$$.$_renderAreas$ = function $$JSCompiler_prototypeAlias$$$$_renderAreas$$() {
  var $arCoord$$2_highArrays$$ = this.$_arCoord$, $arBaseCoord$$2_lowArrays$$ = this.$_arBaseCoord$;
  !$DvtChartTypeUtils$$.$isPolar$(this.$_chart$) && (0 < $arCoord$$2_highArrays$$.length && 0 < $arBaseCoord$$2_lowArrays$$.length) && ($arCoord$$2_highArrays$$ = $arCoord$$2_highArrays$$.slice(0), $arBaseCoord$$2_lowArrays$$ = $arBaseCoord$$2_lowArrays$$.slice(0), $arCoord$$2_highArrays$$[0].x != $JSCompiler_alias_NULL$$ && $arBaseCoord$$2_lowArrays$$[0].x != $JSCompiler_alias_NULL$$ && ($DvtChartLineArea$_removeAreaEdge$$($arCoord$$2_highArrays$$, 0, this.$_baseline$), $DvtChartLineArea$_removeAreaEdge$$($arBaseCoord$$2_lowArrays$$, 
  0, this.$_baseline$), $arBaseCoord$$2_lowArrays$$[0].x = $arCoord$$2_highArrays$$[0].x), $arCoord$$2_highArrays$$[$arCoord$$2_highArrays$$.length - 1].x != $JSCompiler_alias_NULL$$ && $arBaseCoord$$2_lowArrays$$[$arBaseCoord$$2_lowArrays$$.length - 1].x != $JSCompiler_alias_NULL$$ && ($DvtChartLineArea$_removeAreaEdge$$($arCoord$$2_highArrays$$, $arCoord$$2_highArrays$$.length - 1, this.$_baseline$), $DvtChartLineArea$_removeAreaEdge$$($arBaseCoord$$2_lowArrays$$, $arBaseCoord$$2_lowArrays$$.length - 
  1, this.$_baseline$), $arBaseCoord$$2_lowArrays$$[$arBaseCoord$$2_lowArrays$$.length - 1].x = $arCoord$$2_highArrays$$[$arCoord$$2_highArrays$$.length - 1].x));
  $arCoord$$2_highArrays$$ = $JSCompiler_StaticMethods__getPointArrays$$(this, $arCoord$$2_highArrays$$, this.$_type$);
  $arBaseCoord$$2_lowArrays$$ = $JSCompiler_StaticMethods__getPointArrays$$(this, $arBaseCoord$$2_lowArrays$$, this.$_baseType$);
  if($arCoord$$2_highArrays$$.length == $arBaseCoord$$2_lowArrays$$.length) {
    for(var $area_lowCurved_points$$44$$, $i$$301$$ = 0;$i$$301$$ < $arCoord$$2_highArrays$$.length;$i$$301$$++) {
      var $cmd$$3_highArray$$ = $arCoord$$2_highArrays$$[$i$$301$$], $lowArray_splineType$$ = $arBaseCoord$$2_lowArrays$$[$i$$301$$];
      if(!(2 > $cmd$$3_highArray$$.length)) {
        var $highCurved$$ = "curved" == this.$_type$;
        $area_lowCurved_points$$44$$ = "curved" == this.$_baseType$;
        $JSCompiler_StaticMethods__isRing$$(this) && ($highCurved$$ || $cmd$$3_highArray$$.push($cmd$$3_highArray$$[0], $cmd$$3_highArray$$[1]), 2 <= $lowArray_splineType$$.length && !$area_lowCurved_points$$44$$ && $lowArray_splineType$$.push($lowArray_splineType$$[0], $lowArray_splineType$$[1]));
        for(var $revLowArray$$ = [], $j$$44$$ = 0;$j$$44$$ < $lowArray_splineType$$.length;$j$$44$$ += 2) {
          $revLowArray$$.unshift($lowArray_splineType$$[$j$$44$$], $lowArray_splineType$$[$j$$44$$ + 1])
        }
        $highCurved$$ || $area_lowCurved_points$$44$$ ? ($lowArray_splineType$$ = $JSCompiler_StaticMethods__getSplineType$$(this), $cmd$$3_highArray$$ = $highCurved$$ ? $DvtChartLineArea$_getCurvedPathCommands$$($cmd$$3_highArray$$, $JSCompiler_alias_FALSE$$, $lowArray_splineType$$) : dvt.$PathUtils$.$polyline$($cmd$$3_highArray$$, $JSCompiler_alias_FALSE$$), $cmd$$3_highArray$$ += $area_lowCurved_points$$44$$ ? $DvtChartLineArea$_getCurvedPathCommands$$($revLowArray$$, $JSCompiler_alias_TRUE$$, 
        $lowArray_splineType$$) : dvt.$PathUtils$.$polyline$($revLowArray$$, $JSCompiler_alias_TRUE$$), $cmd$$3_highArray$$ += dvt.$PathUtils$.closePath(), $area_lowCurved_points$$44$$ = new dvt.$Path$(this.$getCtx$(), $cmd$$3_highArray$$)) : ($area_lowCurved_points$$44$$ = $revLowArray$$.concat($cmd$$3_highArray$$), $area_lowCurved_points$$44$$ = new dvt.$Polygon$(this.$getCtx$(), $area_lowCurved_points$$44$$));
        $area_lowCurved_points$$44$$.$setFill$(this.$_fill$);
        this.$_stroke$ && $area_lowCurved_points$$44$$.$setStroke$(this.$_stroke$);
        this.$addChild$($area_lowCurved_points$$44$$)
      }
    }
  }
};
$JSCompiler_prototypeAlias$$.$getAnimationParams$ = function $$JSCompiler_prototypeAlias$$$$getAnimationParams$$($other$$4$$) {
  return $DvtChartLineArea$_coordsToAnimationParams$$(this.$_arCoord$, $other$$4$$ ? $other$$4$$.$_arCoord$ : $JSCompiler_alias_NULL$$, this.$_baseline$)
};
$JSCompiler_prototypeAlias$$.$setAnimationParams$ = function $$JSCompiler_prototypeAlias$$$$setAnimationParams$$($coords$$11_params$$10$$) {
  $coords$$11_params$$10$$ = $DvtChartLineArea$_animationParamsToCoords$$($coords$$11_params$$10$$);
  this.$setCoords$($coords$$11_params$$10$$)
};
$JSCompiler_prototypeAlias$$.$getBaseAnimationParams$ = function $$JSCompiler_prototypeAlias$$$$getBaseAnimationParams$$($other$$5$$) {
  return $DvtChartLineArea$_coordsToAnimationParams$$(this.$_arBaseCoord$, $other$$5$$ ? $other$$5$$.$_arBaseCoord$ : $JSCompiler_alias_NULL$$, this.$_baseline$)
};
$JSCompiler_prototypeAlias$$.$setBaseAnimationParams$ = function $$JSCompiler_prototypeAlias$$$$setBaseAnimationParams$$($params$$11$$) {
  this.$_arBaseCoord$ = $DvtChartLineArea$_animationParamsToCoords$$($params$$11$$)
};
function $JSCompiler_StaticMethods_getCommonGroupIndices$$($JSCompiler_StaticMethods_getCommonGroupIndices$self$$, $other$$6$$) {
  for(var $indices$$1$$ = [], $i$$303$$ = 0;$i$$303$$ < $JSCompiler_StaticMethods_getCommonGroupIndices$self$$.$_arCoord$.length;$i$$303$$++) {
    if(!($JSCompiler_StaticMethods_getCommonGroupIndices$self$$.$_arCoord$[$i$$303$$].$filtered$ || $JSCompiler_StaticMethods_getCommonGroupIndices$self$$.$_arCoord$[$i$$303$$].x == $JSCompiler_alias_NULL$$)) {
      for(var $j$$45$$ = 0;$j$$45$$ < $other$$6$$.$_arCoord$.length;$j$$45$$++) {
        if(!($other$$6$$.$_arCoord$[$j$$45$$].$filtered$ || $other$$6$$.$_arCoord$[$j$$45$$].x == $JSCompiler_alias_NULL$$) && $JSCompiler_StaticMethods_getCommonGroupIndices$self$$.$_arCoord$[$i$$303$$].group == $other$$6$$.$_arCoord$[$j$$45$$].group) {
          $indices$$1$$.push($JSCompiler_StaticMethods_getCommonGroupIndices$self$$.$_arCoord$[$i$$303$$].$groupIndex$);
          break
        }
      }
    }
  }
  return $indices$$1$$
}
function $DvtChartLineArea$_coordsToAnimationParams$$($coords$$13$$, $otherCoords_otherGroups$$, $baseline$$5_params$$12$$) {
  if($otherCoords_otherGroups$$ && 0 < $otherCoords_otherGroups$$.length) {
    if($coords$$13$$ && 0 < $coords$$13$$.length) {
      $coords$$13$$ = $coords$$13$$.slice(0);
      $otherCoords_otherGroups$$ = $DvtChartLineArea$_coordsToGroups$$($otherCoords_otherGroups$$);
      for(var $groups$$ = $DvtChartLineArea$_coordsToGroups$$($coords$$13$$), $idx$$10$$ = $coords$$13$$.length, $dummyCoord_group$$14_groupIdx$$, $g$$3_i$$305$$ = $otherCoords_otherGroups$$.length - 1;0 <= $g$$3_i$$305$$;$g$$3_i$$305$$--) {
        if($dummyCoord_group$$14_groupIdx$$ = $otherCoords_otherGroups$$[$g$$3_i$$305$$], $dummyCoord_group$$14_groupIdx$$ = dvt.$ArrayUtils$.$getIndex$($groups$$, $dummyCoord_group$$14_groupIdx$$), -1 == $dummyCoord_group$$14_groupIdx$$) {
          if(0 == $idx$$10$$) {
            $dummyCoord_group$$14_groupIdx$$ = $coords$$13$$[0].$clone$();
            $coords$$13$$[0] = $coords$$13$$[0].$clone$();
            var $startCoord$$inline_2893_startCoord$$inline_2897$$ = $dummyCoord_group$$14_groupIdx$$, $endCoord$$inline_2894$$ = $coords$$13$$[0];
            $JSCompiler_StaticMethods_isUpstep$$($startCoord$$inline_2893_startCoord$$inline_2897$$, $baseline$$5_params$$12$$) ? $endCoord$$inline_2894$$.$y1$ = $endCoord$$inline_2894$$.$y2$ : $startCoord$$inline_2893_startCoord$$inline_2897$$.$y2$ = $startCoord$$inline_2893_startCoord$$inline_2897$$.$y1$
          }else {
            $dummyCoord_group$$14_groupIdx$$ = $coords$$13$$[$idx$$10$$ - 1].$clone$(), $coords$$13$$[$idx$$10$$ - 1] = $coords$$13$$[$idx$$10$$ - 1].$clone$(), $startCoord$$inline_2893_startCoord$$inline_2897$$ = $coords$$13$$[$idx$$10$$ - 1], $JSCompiler_StaticMethods_isUpstep$$($startCoord$$inline_2893_startCoord$$inline_2897$$, $baseline$$5_params$$12$$) ? $dummyCoord_group$$14_groupIdx$$.$y1$ = $dummyCoord_group$$14_groupIdx$$.$y2$ : $startCoord$$inline_2893_startCoord$$inline_2897$$.$y2$ = 
            $startCoord$$inline_2893_startCoord$$inline_2897$$.$y1$
          }
          $dummyCoord_group$$14_groupIdx$$.$groupIndex$ = -1;
          $coords$$13$$.splice($idx$$10$$, 0, $dummyCoord_group$$14_groupIdx$$)
        }else {
          $idx$$10$$ = $dummyCoord_group$$14_groupIdx$$
        }
      }
    }else {
      $coords$$13$$ = [];
      for($g$$3_i$$305$$ = 0;$g$$3_i$$305$$ < $otherCoords_otherGroups$$.length;$g$$3_i$$305$$++) {
        $coords$$13$$.push(new $DvtChartCoord$$($otherCoords_otherGroups$$[$g$$3_i$$305$$].x, $baseline$$5_params$$12$$, $baseline$$5_params$$12$$))
      }
    }
  }
  $baseline$$5_params$$12$$ = [];
  for($g$$3_i$$305$$ = 0;$g$$3_i$$305$$ < $coords$$13$$.length;$g$$3_i$$305$$++) {
    $coords$$13$$[$g$$3_i$$305$$].$filtered$ || ($coords$$13$$[$g$$3_i$$305$$].x == $JSCompiler_alias_NULL$$ ? ($baseline$$5_params$$12$$.push(Infinity), $baseline$$5_params$$12$$.push(Infinity), $baseline$$5_params$$12$$.push(Infinity)) : ($baseline$$5_params$$12$$.push($coords$$13$$[$g$$3_i$$305$$].x), $baseline$$5_params$$12$$.push($coords$$13$$[$g$$3_i$$305$$].$y1$), $baseline$$5_params$$12$$.push($coords$$13$$[$g$$3_i$$305$$].$y2$)), $baseline$$5_params$$12$$.push($coords$$13$$[$g$$3_i$$305$$].$groupIndex$))
  }
  return $baseline$$5_params$$12$$
}
function $DvtChartLineArea$_animationParamsToCoords$$($params$$13$$) {
  for(var $coords$$14$$ = [], $i$$306$$ = 0;$i$$306$$ < $params$$13$$.length;$i$$306$$ += 4) {
    Infinity == $params$$13$$[$i$$306$$] || isNaN($params$$13$$[$i$$306$$]) ? $coords$$14$$.push(new $DvtChartCoord$$($JSCompiler_alias_NULL$$, $JSCompiler_alias_NULL$$, $JSCompiler_alias_NULL$$, $params$$13$$[$i$$306$$ + 3])) : $coords$$14$$.push(new $DvtChartCoord$$($params$$13$$[$i$$306$$], $params$$13$$[$i$$306$$ + 1], $params$$13$$[$i$$306$$ + 2], $params$$13$$[$i$$306$$ + 3]))
  }
  return $coords$$14$$
}
function $DvtChartLineArea$_coordsToGroups$$($coords$$15$$) {
  for(var $groups$$1$$ = [], $i$$307$$ = 0;$i$$307$$ < $coords$$15$$.length;$i$$307$$++) {
    $coords$$15$$[$i$$307$$].$filtered$ || $groups$$1$$.push($coords$$15$$[$i$$307$$].group)
  }
  return $groups$$1$$
}
function $DvtChartLineArea$_getCurvedPathCommands$$($cmd$$4_points$$45$$, $connectWithLine$$, $lastPoints$$1_splineType$$1$$) {
  var $arP$$ = [], $p$$3$$ = [];
  $arP$$.push($p$$3$$);
  for(var $i$$308$$ = 0;$i$$308$$ < $cmd$$4_points$$45$$.length;$i$$308$$ += 2) {
    $cmd$$4_points$$45$$[$i$$308$$] == $JSCompiler_alias_NULL$$ ? ($p$$3$$ = [], $arP$$.push($p$$3$$)) : $p$$3$$.push($cmd$$4_points$$45$$[$i$$308$$], $cmd$$4_points$$45$$[$i$$308$$ + 1])
  }
  $lastPoints$$1_splineType$$1$$ == dvt.$PathUtils$.$SPLINE_TYPE_CARDINAL_CLOSED$ && 1 < $arP$$.length && ($lastPoints$$1_splineType$$1$$ = $arP$$.pop(), $arP$$[0] = $lastPoints$$1_splineType$$1$$.concat($arP$$[0]), $lastPoints$$1_splineType$$1$$ = dvt.$PathUtils$.$SPLINE_TYPE_CARDINAL$);
  $cmd$$4_points$$45$$ = "";
  for($i$$308$$ = 0;$i$$308$$ < $arP$$.length;$i$$308$$++) {
    $p$$3$$ = $arP$$[$i$$308$$], $cmd$$4_points$$45$$ += dvt.$PathUtils$.$curveThroughPoints$($p$$3$$, $connectWithLine$$, $lastPoints$$1_splineType$$1$$), $connectWithLine$$ = $JSCompiler_alias_TRUE$$
  }
  return $cmd$$4_points$$45$$
}
function $DvtChartLineArea$_removeAreaEdge$$($arCoord$$3$$, $index$$134$$, $baseline$$7$$) {
  var $coord$$25$$ = $arCoord$$3$$[$index$$134$$].$clone$();
  $JSCompiler_StaticMethods_isUpstep$$($coord$$25$$, $baseline$$7$$) ? $coord$$25$$.$y1$ = $coord$$25$$.$y2$ : $coord$$25$$.$y2$ = $coord$$25$$.$y1$;
  $arCoord$$3$$[$index$$134$$] = $coord$$25$$
}
function $DvtChartLineMarker$$($context$$132$$, $type$$98$$, $cx$$7$$, $cy$$8$$, $size$$15$$, $bOptimizeStroke$$) {
  this.Init($context$$132$$, $type$$98$$, $JSCompiler_alias_NULL$$, $cx$$7$$, $cy$$8$$, $size$$15$$, $size$$15$$);
  $bOptimizeStroke$$ && this.$setStroke$($DvtChartLineMarker$DEFAULT_STROKE$$)
}
dvt.$Obj$.$createSubclass$($DvtChartLineMarker$$, dvt.$SimpleMarker$);
var $DvtChartLineMarker$DEFAULT_STROKE$$ = new dvt.$SolidStroke$("none"), $DvtChartLineMarker$SELECTED_FILL$$ = new dvt.$SolidFill$("#FFFFFF"), $DvtChartLineMarker$SELECTED_STROKE$$ = new dvt.$SolidStroke$("#5A5A5A", 1, 1.5);
$JSCompiler_prototypeAlias$$ = $DvtChartLineMarker$$.prototype;
$JSCompiler_prototypeAlias$$.$setDataColor$ = function $$JSCompiler_prototypeAlias$$$$setDataColor$$($dataColor$$3$$) {
  this.$_dataColor$ = $dataColor$$3$$;
  this.$_hoverStroke$ = new dvt.$SolidStroke$($dataColor$$3$$, 1, 1.5)
};
$JSCompiler_prototypeAlias$$.$showHoverEffect$ = function $$JSCompiler_prototypeAlias$$$$showHoverEffect$$() {
  this.$IsShowingHoverEffect$ = $JSCompiler_alias_TRUE$$;
  this.$setStroke$(this.$_hoverStroke$)
};
$JSCompiler_prototypeAlias$$.$hideHoverEffect$ = function $$JSCompiler_prototypeAlias$$$$hideHoverEffect$$() {
  this.$IsShowingHoverEffect$ = $JSCompiler_alias_FALSE$$;
  this.$setStroke$(this.$isSelected$() ? $DvtChartLineMarker$SELECTED_STROKE$$ : $DvtChartLineMarker$DEFAULT_STROKE$$)
};
$JSCompiler_prototypeAlias$$.$setSelected$ = function $$JSCompiler_prototypeAlias$$$$setSelected$$($selected$$16$$) {
  this.$IsSelected$ != $selected$$16$$ && (this.$IsSelected$ = $selected$$16$$, this.$isSelected$() ? (this.$setFill$($DvtChartLineMarker$SELECTED_FILL$$), this.$setStroke$(this.$IsShowingHoverEffect$ ? this.$_hoverStroke$ : $DvtChartLineMarker$SELECTED_STROKE$$)) : (this.$setInvisibleFill$(), this.$setStroke$(this.$IsShowingHoverEffect$ ? this.$_hoverStroke$ : $DvtChartLineMarker$DEFAULT_STROKE$$)))
};
$JSCompiler_prototypeAlias$$.$UpdateSelectionEffect$ = $JSCompiler_emptyFn$$();
function $DvtChartOverview$$($chart$$21$$) {
  this.Init($chart$$21$$.$getCtx$(), $chart$$21$$.$processEvent$, $chart$$21$$);
  this.$_parentChart$ = $chart$$21$$;
  this.$_chart$ = $chart$$21$$.$overview$ ? $chart$$21$$.$overview$.$_chart$ : $JSCompiler_alias_NULL$$;
  this.$_id$ = $chart$$21$$.getId() + "_overview"
}
dvt.$Obj$.$createSubclass$($DvtChartOverview$$, dvt.$Overview$);
$JSCompiler_prototypeAlias$$ = $DvtChartOverview$$.prototype;
$JSCompiler_prototypeAlias$$.$createBackground$ = $JSCompiler_emptyFn$$();
$JSCompiler_prototypeAlias$$.$render$ = function $$JSCompiler_prototypeAlias$$$$render$$($options$$39$$, $width$$35$$, $glassPane$$inline_2906_height$$31$$) {
  $options$$39$$.style = {overviewBackgroundColor:"rgba(0,0,0,0)", windowBackgroundColor:"rgba(0,0,0,0)", windowBorderTopColor:"#333333", windowBorderRightColor:"#333333", windowBorderBottomColor:"#333333", windowBorderLeftColor:"#333333", leftFilterPanelColor:"rgba(5,65,135,0.1)", rightFilterPanelColor:"rgba(5,65,135,0.1)", handleBackgroundImage:$options$$39$$.chart._resources.overviewGrippy, handleWidth:3, handleHeight:15, handleFillColor:"rgba(0,0,0,0)"};
  $options$$39$$.animationOnClick = "off";
  var $options$$inline_2902$$ = $options$$39$$.chart;
  this.$_chartContainer$ = new dvt.$Container$(this.$getCtx$());
  this.$addChild$(this.$_chartContainer$);
  $options$$inline_2902$$ = dvt.$JsonUtils$.$merge$({legend:{rendered:"off", size:$JSCompiler_alias_NULL$$}, xAxis:{viewportMin:$JSCompiler_alias_NULL$$, viewportMax:$JSCompiler_alias_NULL$$, viewportStartGroup:$JSCompiler_alias_NULL$$, viewportEndGroup:$JSCompiler_alias_NULL$$, axisLine:{rendered:"off"}, size:$JSCompiler_alias_NULL$$, maxSize:0.5, title:$JSCompiler_alias_NULL$$}, yAxis:{rendered:"off", size:$JSCompiler_alias_NULL$$}, y2Axis:{rendered:"off", size:$JSCompiler_alias_NULL$$}, splitDualY:"off", 
  title:{text:$JSCompiler_alias_NULL$$}, subtitle:{text:$JSCompiler_alias_NULL$$}, footnote:{text:$JSCompiler_alias_NULL$$}, titleSeparator:{rendered:"off"}, styleDefaults:{animationIndicators:"none"}, layout:{outerGapWidth:0, outerGapHeight:0}, _isOverview:$JSCompiler_alias_TRUE$$}, $options$$inline_2902$$);
  $DvtChartAxisUtils$$.$hasGroupAxis$(this.$_parentChart$) && ($options$$inline_2902$$.xAxis.tickLabel.rendered = "off");
  $DvtChartTypeUtils$$.$isStock$(this.$_parentChart$) && ($options$$inline_2902$$.series && $options$$inline_2902$$.series[0]) && ($options$$inline_2902$$.series = [$options$$inline_2902$$.series[0]], $options$$inline_2902$$.series[0].type = "lineWithArea");
  var $userOptions$$inline_2905$$ = this.$_parentChart$.$getOptions$().overview.content, $options$$inline_2902$$ = dvt.$JsonUtils$.$merge$($userOptions$$inline_2905$$, $options$$inline_2902$$);
  $options$$inline_2902$$.zoomAndScroll = "off";
  this.$_chart$ || (this.$_chart$ = dvt.$Chart$.newInstance(this.$getCtx$()), this.$_chart$.setId(this.$_id$));
  this.$_chartContainer$.$addChild$(this.$_chart$);
  this.$_chart$.$render$($options$$inline_2902$$, $width$$35$$, $glassPane$$inline_2906_height$$31$$);
  $glassPane$$inline_2906_height$$31$$ = new dvt.$Rect$(this.$getCtx$(), 0, 0, $width$$35$$, $glassPane$$inline_2906_height$$31$$);
  $glassPane$$inline_2906_height$$31$$.$setInvisibleFill$();
  this.$_chartContainer$.$addChild$($glassPane$$inline_2906_height$$31$$);
  this.$_chart$.$getEventManager$().$setKeyboardHandler$($JSCompiler_alias_NULL$$);
  $DvtChartOverview$$.$superclass$.$render$.call(this, $options$$39$$, $width$$35$$, this.$_chart$.$_plotAreaSpace$.$h$)
};
$JSCompiler_prototypeAlias$$.$destroy$ = function $$JSCompiler_prototypeAlias$$$$destroy$$() {
  $DvtChartOverview$$.$superclass$.$destroy$.call(this);
  this.$_chart$ = this.$_parentChart$ = $JSCompiler_alias_NULL$$
};
$JSCompiler_prototypeAlias$$.$isLeftAndRightFilterRendered$ = $JSCompiler_returnArg$$($JSCompiler_alias_TRUE$$);
$JSCompiler_prototypeAlias$$.$HandleKeyDown$ = $JSCompiler_emptyFn$$();
$JSCompiler_prototypeAlias$$.$HandleKeyUp$ = $JSCompiler_emptyFn$$();
function $DvtChartPolarBar$$($chart$$22$$, $axisCoord$$1$$, $baselineCoord$$3$$, $endCoord$$6$$, $x1$$15$$, $x2$$13$$, $availSpace$$18$$) {
  this.Init($chart$$22$$.$getCtx$());
  this.$_axisCoord$ = $axisCoord$$1$$;
  this.$_availSpace$ = $availSpace$$18$$.$clone$();
  this.$_bbox$ = $JSCompiler_alias_NULL$$;
  this.$_dataItemGaps$ = 3 * $DvtChartStyleUtils$$.$getDataItemGaps$($chart$$22$$);
  this.$_setBarCoords$($baselineCoord$$3$$, $endCoord$$6$$, $x1$$15$$, $x2$$13$$)
}
dvt.$Obj$.$createSubclass$($DvtChartPolarBar$$, $DvtChartSelectableWedge$$);
$JSCompiler_prototypeAlias$$ = $DvtChartPolarBar$$.prototype;
$JSCompiler_prototypeAlias$$.$getAnimationParams$ = function $$JSCompiler_prototypeAlias$$$$getAnimationParams$$() {
  return[this.$_baselineCoord$, this.$_endCoord$, this.$_x1$, this.$_x2$]
};
$JSCompiler_prototypeAlias$$.$setAnimationParams$ = function $$JSCompiler_prototypeAlias$$$$setAnimationParams$$($params$$14$$) {
  this.$_setBarCoords$($params$$14$$[0], $params$$14$$[1], $params$$14$$[2], $params$$14$$[3])
};
$JSCompiler_prototypeAlias$$.$getPrimaryFill$ = function $$JSCompiler_prototypeAlias$$$$getPrimaryFill$$() {
  return this.$getFill$()
};
$JSCompiler_prototypeAlias$$.$getDisplayAnimation$ = function $$JSCompiler_prototypeAlias$$$$getDisplayAnimation$$($duration$$9_nodePlayable$$7$$) {
  var $endState$$2$$ = this.$getAnimationParams$();
  this.$setAnimationParams$([this.$_axisCoord$, this.$_axisCoord$, 0, 0]);
  $duration$$9_nodePlayable$$7$$ = new dvt.$CustomAnimation$(this.$getCtx$(), this, $duration$$9_nodePlayable$$7$$);
  $duration$$9_nodePlayable$$7$$.$_animator$.$addProp$(dvt.$Animator$.$TYPE_NUMBER_ARRAY$, this, this.$getAnimationParams$, this.$setAnimationParams$, $endState$$2$$);
  return $duration$$9_nodePlayable$$7$$
};
$JSCompiler_prototypeAlias$$.$getDeleteAnimation$ = function $$JSCompiler_prototypeAlias$$$$getDeleteAnimation$$($duration$$10_nodePlayable$$8$$) {
  var $endState$$3$$ = [this.$_baselineCoord$, this.$_baselineCoord$, this.$_x1$, this.$_x2$];
  $duration$$10_nodePlayable$$8$$ = new dvt.$CustomAnimation$(this.$getCtx$(), this, $duration$$10_nodePlayable$$8$$);
  $duration$$10_nodePlayable$$8$$.$_animator$.$addProp$(dvt.$Animator$.$TYPE_NUMBER_ARRAY$, this, this.$getAnimationParams$, this.$setAnimationParams$, $endState$$3$$);
  $duration$$10_nodePlayable$$8$$.$_animator$.$addProp$(dvt.$Animator$.$TYPE_NUMBER$, this, this.$getAlpha$, this.$setAlpha$, 0);
  return $duration$$10_nodePlayable$$8$$
};
$JSCompiler_prototypeAlias$$.$getInsertAnimation$ = function $$JSCompiler_prototypeAlias$$$$getInsertAnimation$$($duration$$11_nodePlayable$$9$$) {
  this.$setAlpha$(0);
  var $endState$$4$$ = this.$getAnimationParams$();
  this.$setAnimationParams$([this.$_baselineCoord$, this.$_baselineCoord$, this.$_x1$, this.$_x2$]);
  $duration$$11_nodePlayable$$9$$ = new dvt.$CustomAnimation$(this.$getCtx$(), this, $duration$$11_nodePlayable$$9$$);
  $duration$$11_nodePlayable$$9$$.$_animator$.$addProp$(dvt.$Animator$.$TYPE_NUMBER_ARRAY$, this, this.$getAnimationParams$, this.$setAnimationParams$, $endState$$4$$);
  $duration$$11_nodePlayable$$9$$.$_animator$.$addProp$(dvt.$Animator$.$TYPE_NUMBER$, this, this.$getAlpha$, this.$setAlpha$, 1);
  return $duration$$11_nodePlayable$$9$$
};
$JSCompiler_prototypeAlias$$.$_setBarCoords$ = function $$JSCompiler_prototypeAlias$$$$_setBarCoords$$($baselineCoord$$4$$, $endCoord$$7$$, $x1$$16$$, $x2$$14$$) {
  var $cmds$$inline_2917_cx$$8_minX$$9$$ = this.$_availSpace$.x + this.$_availSpace$.$w$ / 2, $cy$$9_maxX$$7$$ = this.$_availSpace$.y + this.$_availSpace$.$h$ / 2, $minY$$9_r$$3$$ = Math.max($endCoord$$7$$, $baselineCoord$$4$$), $inner1_ir$$3_maxY$$7$$ = 4 <= Math.abs($endCoord$$7$$ - $baselineCoord$$4$$) && this.$_axisCoord$ != $baselineCoord$$4$$ ? Math.min($endCoord$$7$$, $baselineCoord$$4$$) + this.$_dataItemGaps$ : Math.min($endCoord$$7$$, $baselineCoord$$4$$), $inner2_sa$$inline_2913$$ = 360 - 
  dvt.$Math$.$radsToDegrees$(Math.max($x1$$16$$, $x2$$14$$)) + 90, $ae$$inline_2914_outer1$$ = dvt.$Math$.$radsToDegrees$(Math.abs($x2$$14$$ - $x1$$16$$)), $gap$$inline_2915_outer2$$ = this.$_dataItemGaps$;
  this.$_cx$ = $cmds$$inline_2917_cx$$8_minX$$9$$;
  this.$_cy$ = $cy$$9_maxX$$7$$;
  this.$_ry$ = this.$_rx$ = $minY$$9_r$$3$$;
  this.$_sa$ = $inner2_sa$$inline_2913$$;
  this.$_ae$ = $ae$$inline_2914_outer1$$;
  this.$_gap$ = $gap$$inline_2915_outer2$$;
  this.$_ir$ = $inner1_ir$$3_maxY$$7$$;
  $cmds$$inline_2917_cx$$8_minX$$9$$ = $JSCompiler_StaticMethods__makeWedgePath$$(this, 0);
  this.$setCmds$($cmds$$inline_2917_cx$$8_minX$$9$$);
  $inner1_ir$$3_maxY$$7$$ = $DvtChartPlotAreaRenderer$$.$polarToCartesian$($baselineCoord$$4$$, $x1$$16$$, this.$_availSpace$);
  $inner2_sa$$inline_2913$$ = $DvtChartPlotAreaRenderer$$.$polarToCartesian$($baselineCoord$$4$$, $x2$$14$$, this.$_availSpace$);
  $ae$$inline_2914_outer1$$ = $DvtChartPlotAreaRenderer$$.$polarToCartesian$($endCoord$$7$$, $x1$$16$$, this.$_availSpace$);
  $gap$$inline_2915_outer2$$ = $DvtChartPlotAreaRenderer$$.$polarToCartesian$($endCoord$$7$$, $x2$$14$$, this.$_availSpace$);
  $cmds$$inline_2917_cx$$8_minX$$9$$ = Math.min($inner1_ir$$3_maxY$$7$$.x, $inner2_sa$$inline_2913$$.x, $ae$$inline_2914_outer1$$.x, $gap$$inline_2915_outer2$$.x);
  $cy$$9_maxX$$7$$ = Math.max($inner1_ir$$3_maxY$$7$$.x, $inner2_sa$$inline_2913$$.x, $ae$$inline_2914_outer1$$.x, $gap$$inline_2915_outer2$$.x);
  $minY$$9_r$$3$$ = Math.min($inner1_ir$$3_maxY$$7$$.y, $inner2_sa$$inline_2913$$.y, $ae$$inline_2914_outer1$$.y, $gap$$inline_2915_outer2$$.y);
  $inner1_ir$$3_maxY$$7$$ = Math.max($inner1_ir$$3_maxY$$7$$.y, $inner2_sa$$inline_2913$$.y, $ae$$inline_2914_outer1$$.y, $gap$$inline_2915_outer2$$.y);
  this.$_bbox$ = new dvt.$Rectangle$($cmds$$inline_2917_cx$$8_minX$$9$$, $minY$$9_r$$3$$, $cy$$9_maxX$$7$$ - $cmds$$inline_2917_cx$$8_minX$$9$$, $inner1_ir$$3_maxY$$7$$ - $minY$$9_r$$3$$);
  this.$_baselineCoord$ = $baselineCoord$$4$$;
  this.$_endCoord$ = $endCoord$$7$$;
  this.$_x1$ = $x1$$16$$;
  this.$_x2$ = $x2$$14$$
};
$JSCompiler_prototypeAlias$$.$getBoundingBox$ = $JSCompiler_get$$("$_bbox$");
function $DvtChartRangeMarker$$($context$$133$$, $x1$$17$$, $y1$$11$$, $x2$$15$$, $y2$$9$$, $markerSize$$, $isInvisible$$) {
  this.Init($context$$133$$);
  this.$_markerSize$ = $markerSize$$;
  this.$_isInvisible$ = $isInvisible$$;
  $JSCompiler_StaticMethods__drawPath$$(this, $x1$$17$$, $y1$$11$$, $x2$$15$$, $y2$$9$$)
}
dvt.$Obj$.$createSubclass$($DvtChartRangeMarker$$, dvt.$Path$);
function $JSCompiler_StaticMethods__drawPath$$($JSCompiler_StaticMethods__drawPath$self$$, $x1$$18$$, $y1$$12$$, $x2$$16$$, $y2$$10$$) {
  var $angle$$12_cmds$$6$$ = Math.atan2($y2$$10$$ - $y1$$12$$, $x2$$16$$ - $x1$$18$$), $r$$4$$ = $JSCompiler_StaticMethods__drawPath$self$$.$_markerSize$ / 2, $lineAngle$$ = Math.PI / 8, $angle$$12_cmds$$6$$ = dvt.$PathUtils$.moveTo($x1$$18$$ + $r$$4$$ * Math.cos($angle$$12_cmds$$6$$ + $lineAngle$$), $y1$$12$$ + $r$$4$$ * Math.sin($angle$$12_cmds$$6$$ + $lineAngle$$)) + dvt.$PathUtils$.arcTo($r$$4$$, $r$$4$$, 2 * (Math.PI - $lineAngle$$), 1, $x1$$18$$ + $r$$4$$ * Math.cos($angle$$12_cmds$$6$$ - $lineAngle$$), 
  $y1$$12$$ + $r$$4$$ * Math.sin($angle$$12_cmds$$6$$ - $lineAngle$$)) + dvt.$PathUtils$.lineTo($x2$$16$$ - $r$$4$$ * Math.cos($angle$$12_cmds$$6$$ + $lineAngle$$), $y2$$10$$ - $r$$4$$ * Math.sin($angle$$12_cmds$$6$$ + $lineAngle$$)) + dvt.$PathUtils$.arcTo($r$$4$$, $r$$4$$, 2 * (Math.PI - $lineAngle$$), 1, $x2$$16$$ - $r$$4$$ * Math.cos($angle$$12_cmds$$6$$ - $lineAngle$$), $y2$$10$$ - $r$$4$$ * Math.sin($angle$$12_cmds$$6$$ - $lineAngle$$)) + dvt.$PathUtils$.closePath();
  $JSCompiler_StaticMethods__drawPath$self$$.$setCmds$($angle$$12_cmds$$6$$);
  $JSCompiler_StaticMethods__drawPath$self$$.$_x1$ = $x1$$18$$;
  $JSCompiler_StaticMethods__drawPath$self$$.$_y1$ = $y1$$12$$;
  $JSCompiler_StaticMethods__drawPath$self$$.$_x2$ = $x2$$16$$;
  $JSCompiler_StaticMethods__drawPath$self$$.$_y2$ = $y2$$10$$
}
$JSCompiler_prototypeAlias$$ = $DvtChartRangeMarker$$.prototype;
$JSCompiler_prototypeAlias$$.$setStyleProperties$ = function $$JSCompiler_prototypeAlias$$$$setStyleProperties$$($fill$$25$$, $stroke$$41$$, $dataColor$$4_hoverColor$$, $innerColor$$3$$, $outerColor$$4$$) {
  this.$_dataColor$ = $dataColor$$4_hoverColor$$;
  $dataColor$$4_hoverColor$$ = dvt.$SelectionEffectUtils$.$getHoverBorderColor$($dataColor$$4_hoverColor$$);
  this.$_isInvisible$ ? (this.$setInvisibleFill$(), this.$_hoverStroke$ = new dvt.$SolidStroke$($dataColor$$4_hoverColor$$, 1, 1.5)) : (this.$setFill$($fill$$25$$), this.$setStroke$($stroke$$41$$), this.$setHoverStroke$(new dvt.$SolidStroke$($innerColor$$3$$, 1, 1), new dvt.$SolidStroke$($dataColor$$4_hoverColor$$, 1, 3.5)), this.$setSelectedStroke$(new dvt.$SolidStroke$($innerColor$$3$$, 1, 1.5), new dvt.$SolidStroke$($outerColor$$4$$, 1, 4.5)), this.$setSelectedHoverStroke$(new dvt.$SolidStroke$($innerColor$$3$$, 
  1, 1.5), new dvt.$SolidStroke$($dataColor$$4_hoverColor$$, 1, 4.5)))
};
$JSCompiler_prototypeAlias$$.$showHoverEffect$ = function $$JSCompiler_prototypeAlias$$$$showHoverEffect$$() {
  this.$_isInvisible$ ? (this.$IsShowingHoverEffect$ = $JSCompiler_alias_TRUE$$, this.$setStroke$(this.$_hoverStroke$)) : $DvtChartRangeMarker$$.$superclass$.$showHoverEffect$.call(this)
};
$JSCompiler_prototypeAlias$$.$hideHoverEffect$ = function $$JSCompiler_prototypeAlias$$$$hideHoverEffect$$() {
  this.$_isInvisible$ ? (this.$IsShowingHoverEffect$ = $JSCompiler_alias_FALSE$$, this.$setStroke$(this.$isSelected$() ? $DvtChartLineMarker$SELECTED_STROKE$$ : $DvtChartLineMarker$DEFAULT_STROKE$$)) : $DvtChartRangeMarker$$.$superclass$.$hideHoverEffect$.call(this)
};
$JSCompiler_prototypeAlias$$.$setSelected$ = function $$JSCompiler_prototypeAlias$$$$setSelected$$($selected$$17$$) {
  this.$_isInvisible$ ? this.$IsSelected$ != $selected$$17$$ && (this.$IsSelected$ = $selected$$17$$, this.$isSelected$() ? (this.$setFill$($DvtChartLineMarker$SELECTED_FILL$$), this.$setStroke$(this.$IsShowingHoverEffect$ ? this.$_hoverStroke$ : $DvtChartLineMarker$SELECTED_STROKE$$)) : (this.$setInvisibleFill$(), this.$setStroke$(this.$IsShowingHoverEffect$ ? this.$_hoverStroke$ : $DvtChartLineMarker$DEFAULT_STROKE$$))) : $DvtChartRangeMarker$$.$superclass$.$setSelected$.call(this, $selected$$17$$)
};
$JSCompiler_prototypeAlias$$.$UpdateSelectionEffect$ = function $$JSCompiler_prototypeAlias$$$$UpdateSelectionEffect$$() {
  this.$_isInvisible$ || $DvtChartRangeMarker$$.$superclass$.$UpdateSelectionEffect$.call(this)
};
$JSCompiler_prototypeAlias$$.$getAnimationParams$ = function $$JSCompiler_prototypeAlias$$$$getAnimationParams$$() {
  return[this.$_x1$, this.$_y1$, this.$_x2$, this.$_y2$]
};
$JSCompiler_prototypeAlias$$.$setAnimationParams$ = function $$JSCompiler_prototypeAlias$$$$setAnimationParams$$($params$$15$$) {
  $JSCompiler_StaticMethods__drawPath$$(this, $params$$15$$[0], $params$$15$$[1], $params$$15$$[2], $params$$15$$[3])
};
$JSCompiler_prototypeAlias$$.$getBoundingBox$ = function $$JSCompiler_prototypeAlias$$$$getBoundingBox$$() {
  return $JSCompiler_StaticMethods_getBoundingBox1$$(this).$getUnion$($JSCompiler_StaticMethods_getBoundingBox2$$(this))
};
function $JSCompiler_StaticMethods_getBoundingBox1$$($JSCompiler_StaticMethods_getBoundingBox1$self$$) {
  return new dvt.$Rectangle$($JSCompiler_StaticMethods_getBoundingBox1$self$$.$_x1$ - $JSCompiler_StaticMethods_getBoundingBox1$self$$.$_markerSize$ / 2, $JSCompiler_StaticMethods_getBoundingBox1$self$$.$_y1$ - $JSCompiler_StaticMethods_getBoundingBox1$self$$.$_markerSize$ / 2, $JSCompiler_StaticMethods_getBoundingBox1$self$$.$_markerSize$, $JSCompiler_StaticMethods_getBoundingBox1$self$$.$_markerSize$)
}
function $JSCompiler_StaticMethods_getBoundingBox2$$($JSCompiler_StaticMethods_getBoundingBox2$self$$) {
  return new dvt.$Rectangle$($JSCompiler_StaticMethods_getBoundingBox2$self$$.$_x2$ - $JSCompiler_StaticMethods_getBoundingBox2$self$$.$_markerSize$ / 2, $JSCompiler_StaticMethods_getBoundingBox2$self$$.$_y2$ - $JSCompiler_StaticMethods_getBoundingBox2$self$$.$_markerSize$ / 2, $JSCompiler_StaticMethods_getBoundingBox2$self$$.$_markerSize$, $JSCompiler_StaticMethods_getBoundingBox2$self$$.$_markerSize$)
}
function $DvtChartDataCursor$$($context$$134$$, $options$$40$$, $bHoriz$$3$$) {
  this.Init($context$$134$$, $options$$40$$, $bHoriz$$3$$)
}
dvt.$Obj$.$createSubclass$($DvtChartDataCursor$$, dvt.$Container$);
$DvtChartDataCursor$$.prototype.Init = function $$DvtChartDataCursor$$$$Init$($context$$135_lineWidth_middleCircle$$, $markerSize$$1_options$$41$$, $bHoriz$$4_lineColor$$) {
  $DvtChartDataCursor$$.$superclass$.Init.call(this, $context$$135_lineWidth_middleCircle$$);
  this.$_bHoriz$ = $bHoriz$$4_lineColor$$;
  this.$_options$ = $markerSize$$1_options$$41$$;
  this.$setMouseEnabled$($JSCompiler_alias_FALSE$$);
  this.$setVisible$($JSCompiler_alias_FALSE$$);
  $context$$135_lineWidth_middleCircle$$ = $markerSize$$1_options$$41$$.lineWidth;
  $bHoriz$$4_lineColor$$ = $markerSize$$1_options$$41$$.lineColor;
  var $lineStyle_outerCircle$$ = dvt.$Stroke$.$convertTypeString$($markerSize$$1_options$$41$$.lineStyle), $stroke$$42$$ = new dvt.$SolidStroke$($bHoriz$$4_lineColor$$, 1, $context$$135_lineWidth_middleCircle$$);
  $stroke$$42$$.$setStyle$($lineStyle_outerCircle$$);
  this.$_cursorLine$ = new dvt.$Line$(this.$getCtx$(), 0, 0, 0, 0, "dcLine");
  this.$_cursorLine$.$setStroke$($stroke$$42$$);
  this.$addChild$(this.$_cursorLine$);
  "off" != $markerSize$$1_options$$41$$.markerDisplayed && (this.$_marker$ = new dvt.$Container$(this.$_context$), this.$_marker$.$setMouseEnabled$($JSCompiler_alias_FALSE$$), this.$addChild$(this.$_marker$), $markerSize$$1_options$$41$$ = $markerSize$$1_options$$41$$.markerSize, $lineStyle_outerCircle$$ = new dvt.$SimpleMarker$(this.$_context$, dvt.$SimpleMarker$.$CIRCLE$, $JSCompiler_alias_NULL$$, 0, 0, $markerSize$$1_options$$41$$ + 4 * $context$$135_lineWidth_middleCircle$$, $markerSize$$1_options$$41$$ + 
  4 * $context$$135_lineWidth_middleCircle$$), $lineStyle_outerCircle$$.$setSolidFill$($bHoriz$$4_lineColor$$), this.$_marker$.$addChild$($lineStyle_outerCircle$$), $context$$135_lineWidth_middleCircle$$ = new dvt.$SimpleMarker$(this.$_context$, dvt.$SimpleMarker$.$CIRCLE$, $JSCompiler_alias_NULL$$, 0, 0, $markerSize$$1_options$$41$$ + 2 * $context$$135_lineWidth_middleCircle$$, $markerSize$$1_options$$41$$ + 2 * $context$$135_lineWidth_middleCircle$$), $context$$135_lineWidth_middleCircle$$.$setSolidFill$("white"), 
  this.$_marker$.$addChild$($context$$135_lineWidth_middleCircle$$), this.$_markerInnerCircle$ = new dvt.$SimpleMarker$(this.$_context$, dvt.$SimpleMarker$.$CIRCLE$, $JSCompiler_alias_NULL$$, 0, 0, $markerSize$$1_options$$41$$, $markerSize$$1_options$$41$$), this.$_marker$.$addChild$(this.$_markerInnerCircle$))
};
$DvtChartDataCursor$$.prototype.$render$ = function $$DvtChartDataCursor$$$$$render$$($markerColor_plotAreaBounds$$2$$, $dataX$$, $dataY$$, $lineCoord$$1$$, $markerSizeOuter_text$$49$$, $dataColor$$5$$) {
  var $bHoriz$$5$$ = this.$isHorizontal$(), $bRtl$$ = dvt.$Agent$.$isRightToLeft$(this.$getCtx$()), $tooltipBounds$$;
  if($markerSizeOuter_text$$49$$ != $JSCompiler_alias_NULL$$ && "" != $markerSizeOuter_text$$49$$) {
    var $stagePageCoords$$ = this.$getCtx$().$getStageAbsolutePosition$(), $tooltipManager$$5$$ = this.$getCtx$().$getTooltipManager$("_dvtDataCursor");
    $tooltipManager$$5$$.$showDatatip$($dataX$$ + $stagePageCoords$$.x, $dataY$$ + $stagePageCoords$$.y, $markerSizeOuter_text$$49$$, $dataColor$$5$$, $JSCompiler_alias_FALSE$$);
    $tooltipBounds$$ = $tooltipManager$$5$$.$getTooltipBounds$();
    $markerSizeOuter_text$$49$$ = this.$_options$.markerSize + 4 * this.$_options$.lineWidth;
    var $tooltipX$$, $tooltipY$$;
    $bHoriz$$5$$ ? ($tooltipX$$ = $bRtl$$ ? $markerColor_plotAreaBounds$$2$$.x - 0.75 * $tooltipBounds$$.$w$ : $markerColor_plotAreaBounds$$2$$.x + $markerColor_plotAreaBounds$$2$$.$w$ - $tooltipBounds$$.$w$ / 4, $tooltipY$$ = $lineCoord$$1$$ - $tooltipBounds$$.$h$ / 2, !$bRtl$$ && $tooltipX$$ - $dataX$$ < $markerSizeOuter_text$$49$$ ? $tooltipX$$ = $dataX$$ + $markerSizeOuter_text$$49$$ : $bRtl$$ && $dataX$$ - ($tooltipX$$ + $tooltipBounds$$.$w$) < $markerSizeOuter_text$$49$$ && ($tooltipX$$ = $dataX$$ - 
    $markerSizeOuter_text$$49$$ - $tooltipBounds$$.$w$)) : ($tooltipX$$ = $lineCoord$$1$$ - $tooltipBounds$$.$w$ / 2, $tooltipY$$ = $markerColor_plotAreaBounds$$2$$.y - 0.75 * $tooltipBounds$$.$h$, $dataY$$ - ($tooltipY$$ + $tooltipBounds$$.$h$) < $markerSizeOuter_text$$49$$ && ($tooltipY$$ = $dataY$$ - $markerSizeOuter_text$$49$$ - $tooltipBounds$$.$h$));
    $tooltipManager$$5$$.$positionTip$($tooltipX$$ + $stagePageCoords$$.x, $tooltipY$$ + $stagePageCoords$$.y);
    $tooltipBounds$$ = $tooltipManager$$5$$.$getTooltipBounds$();
    $tooltipBounds$$.x -= $stagePageCoords$$.x;
    $tooltipBounds$$.y -= $stagePageCoords$$.y
  }
  $bHoriz$$5$$ ? (this.$_cursorLine$.$setTranslateY$($lineCoord$$1$$), $bRtl$$ ? (this.$_cursorLine$.$setX1$($tooltipBounds$$ ? $tooltipBounds$$.x + $tooltipBounds$$.$w$ - 1 : $markerColor_plotAreaBounds$$2$$.x), this.$_cursorLine$.$setX2$($markerColor_plotAreaBounds$$2$$.x + $markerColor_plotAreaBounds$$2$$.$w$)) : (this.$_cursorLine$.$setX1$($markerColor_plotAreaBounds$$2$$.x), this.$_cursorLine$.$setX2$($tooltipBounds$$ ? $tooltipBounds$$.x + 1 : $markerColor_plotAreaBounds$$2$$.x + $markerColor_plotAreaBounds$$2$$.$w$))) : 
  (this.$_cursorLine$.$setTranslateX$($lineCoord$$1$$), this.$_cursorLine$.$setY1$($tooltipBounds$$ ? $tooltipBounds$$.y + $tooltipBounds$$.$h$ - 1 : $markerColor_plotAreaBounds$$2$$.y), this.$_cursorLine$.$setY2$($markerColor_plotAreaBounds$$2$$.y + $markerColor_plotAreaBounds$$2$$.$h$));
  this.$_marker$ && (this.$_marker$.$setTranslate$($dataX$$, $dataY$$), $markerColor_plotAreaBounds$$2$$ = this.$_options$.markerColor, this.$_markerInnerCircle$.$setSolidFill$($markerColor_plotAreaBounds$$2$$ ? $markerColor_plotAreaBounds$$2$$ : $dataColor$$5$$), dvt.$Agent$.$workaroundFirefoxRepaint$(this.$_marker$))
};
$DvtChartDataCursor$$.prototype.$isHorizontal$ = $JSCompiler_get$$("$_bHoriz$");
function $DvtChartFunnelSlice$$($chart$$23$$, $seriesIndex$$16$$, $numDrawnSeries$$, $funnelWidth$$, $funnelHeight$$, $startPercent$$, $valuePercent$$, $fillPercent$$, $gap$$16$$) {
  this.Init($chart$$23$$, $seriesIndex$$16$$, $numDrawnSeries$$, $funnelWidth$$, $funnelHeight$$, $startPercent$$, $valuePercent$$, $fillPercent$$, $gap$$16$$)
}
dvt.$Obj$.$createSubclass$($DvtChartFunnelSlice$$, dvt.$Path$);
$DvtChartFunnelSlice$$.prototype.Init = function $$DvtChartFunnelSlice$$$$Init$($bbox$$inline_2943_chart$$24_cmd$$inline_2942_padding$$inline_2940_styleDefaults$$, $JSCompiler_inline_result$$158_hoverColor$$inline_2925_seriesIndex$$17_sliceBounds$$inline_2931_sliceFill$$inline_2921$$, $barBounds$$inline_2932_cmds$$7_labelColor$$inline_2944_numDrawnSeries$$1$$, $funnelWidth$$1_innerColor$$inline_2926_label$$inline_2934_labelString$$inline_2933_sliceBorder$$inline_2922$$, $funnelHeight$$1_isPatternBg$$inline_2935_outerColor$$inline_2927_sliceBorderWidth$$inline_2923$$, 
$backgroundFill$$inline_2924_labelStyleArray$$inline_2936_shapeForSelection$$inline_2928_sliceBounds$$inline_2920_startPercent$$1_style$$inline_2937$$, $textDim$$inline_2938_valuePercent$$1$$, $fillPercent$$1_pos$$inline_2939$$, $displacement$$inline_2941_gap$$17$$) {
  $DvtChartFunnelSlice$$.$superclass$.Init.call(this, $bbox$$inline_2943_chart$$24_cmd$$inline_2942_padding$$inline_2940_styleDefaults$$.$getCtx$());
  this.$_chart$ = $bbox$$inline_2943_chart$$24_cmd$$inline_2942_padding$$inline_2940_styleDefaults$$;
  $bbox$$inline_2943_chart$$24_cmd$$inline_2942_padding$$inline_2940_styleDefaults$$ = $bbox$$inline_2943_chart$$24_cmd$$inline_2942_padding$$inline_2940_styleDefaults$$.$getOptions$().styleDefaults;
  this.$_seriesIndex$ = $JSCompiler_inline_result$$158_hoverColor$$inline_2925_seriesIndex$$17_sliceBounds$$inline_2931_sliceFill$$inline_2921$$;
  this.$_numDrawnSeries$ = $barBounds$$inline_2932_cmds$$7_labelColor$$inline_2944_numDrawnSeries$$1$$;
  this.$_funnelWidth$ = $funnelWidth$$1_innerColor$$inline_2926_label$$inline_2934_labelString$$inline_2933_sliceBorder$$inline_2922$$;
  this.$_funnelHeight$ = $funnelHeight$$1_isPatternBg$$inline_2935_outerColor$$inline_2927_sliceBorderWidth$$inline_2923$$;
  this.$_startPercent$ = $backgroundFill$$inline_2924_labelStyleArray$$inline_2936_shapeForSelection$$inline_2928_sliceBounds$$inline_2920_startPercent$$1_style$$inline_2937$$;
  this.$_valuePercent$ = $textDim$$inline_2938_valuePercent$$1$$;
  this.$_fillPercent$ = $fillPercent$$1_pos$$inline_2939$$;
  this.$_3dRatio$ = "on" == $bbox$$inline_2943_chart$$24_cmd$$inline_2942_padding$$inline_2940_styleDefaults$$.threeDEffect ? 1 : 0;
  this.$_gap$ = $displacement$$inline_2941_gap$$17$$;
  $barBounds$$inline_2932_cmds$$7_labelColor$$inline_2944_numDrawnSeries$$1$$ = $JSCompiler_StaticMethods__getPath$$(this);
  this.$_dataColor$ = $DvtChartStyleUtils$$.$getColor$(this.$_chart$, this.$_seriesIndex$, 0);
  this.$_backgroundColor$ = $bbox$$inline_2943_chart$$24_cmd$$inline_2942_padding$$inline_2940_styleDefaults$$.backgroundColor ? $bbox$$inline_2943_chart$$24_cmd$$inline_2942_padding$$inline_2940_styleDefaults$$.backgroundColor : $bbox$$inline_2943_chart$$24_cmd$$inline_2942_padding$$inline_2940_styleDefaults$$.funnelBackgroundColor;
  this.$setCmds$($barBounds$$inline_2932_cmds$$7_labelColor$$inline_2944_numDrawnSeries$$1$$.slice);
  $barBounds$$inline_2932_cmds$$7_labelColor$$inline_2944_numDrawnSeries$$1$$.bar && (this.$_bar$ = new dvt.$Path$(this.$getCtx$(), $barBounds$$inline_2932_cmds$$7_labelColor$$inline_2944_numDrawnSeries$$1$$.bar), this.$addChild$(this.$_bar$), this.$_bar$.$setMouseEnabled$($JSCompiler_alias_FALSE$$));
  $backgroundFill$$inline_2924_labelStyleArray$$inline_2936_shapeForSelection$$inline_2928_sliceBounds$$inline_2920_startPercent$$1_style$$inline_2937$$ = $barBounds$$inline_2932_cmds$$7_labelColor$$inline_2944_numDrawnSeries$$1$$.sliceBounds;
  $JSCompiler_inline_result$$158_hoverColor$$inline_2925_seriesIndex$$17_sliceBounds$$inline_2931_sliceFill$$inline_2921$$ = $DvtChartSeriesEffectUtils$$.$getFunnelSliceFill$(this.$_chart$, this.$_seriesIndex$, this.$_dataColor$, $backgroundFill$$inline_2924_labelStyleArray$$inline_2936_shapeForSelection$$inline_2928_sliceBounds$$inline_2920_startPercent$$1_style$$inline_2937$$);
  $funnelWidth$$1_innerColor$$inline_2926_label$$inline_2934_labelString$$inline_2933_sliceBorder$$inline_2922$$ = $DvtChartStyleUtils$$.$getBorderColor$(this.$_chart$, this.$_seriesIndex$, 0);
  $funnelWidth$$1_innerColor$$inline_2926_label$$inline_2934_labelString$$inline_2933_sliceBorder$$inline_2922$$ == $JSCompiler_alias_NULL$$ && 0 < this.$_3dRatio$ && ($funnelWidth$$1_innerColor$$inline_2926_label$$inline_2934_labelString$$inline_2933_sliceBorder$$inline_2922$$ = "#FFFFFF");
  $funnelHeight$$1_isPatternBg$$inline_2935_outerColor$$inline_2927_sliceBorderWidth$$inline_2923$$ = $DvtChartStyleUtils$$.$getBorderWidth$(this.$_chart$, this.$_seriesIndex$, 0);
  $backgroundFill$$inline_2924_labelStyleArray$$inline_2936_shapeForSelection$$inline_2928_sliceBounds$$inline_2920_startPercent$$1_style$$inline_2937$$ = $DvtChartSeriesEffectUtils$$.$getFunnelSliceFill$(this.$_chart$, this.$_seriesIndex$, this.$_backgroundColor$, $backgroundFill$$inline_2924_labelStyleArray$$inline_2936_shapeForSelection$$inline_2928_sliceBounds$$inline_2920_startPercent$$1_style$$inline_2937$$, $JSCompiler_alias_TRUE$$);
  this.$_bar$ ? (this.$setFill$($backgroundFill$$inline_2924_labelStyleArray$$inline_2936_shapeForSelection$$inline_2928_sliceBounds$$inline_2920_startPercent$$1_style$$inline_2937$$), this.$_bar$.$setFill$($JSCompiler_inline_result$$158_hoverColor$$inline_2925_seriesIndex$$17_sliceBounds$$inline_2931_sliceFill$$inline_2921$$)) : this.$setFill$($JSCompiler_inline_result$$158_hoverColor$$inline_2925_seriesIndex$$17_sliceBounds$$inline_2931_sliceFill$$inline_2921$$);
  $funnelWidth$$1_innerColor$$inline_2926_label$$inline_2934_labelString$$inline_2933_sliceBorder$$inline_2922$$ && this.$setSolidStroke$($funnelWidth$$1_innerColor$$inline_2926_label$$inline_2934_labelString$$inline_2933_sliceBorder$$inline_2922$$, $JSCompiler_alias_NULL$$, $funnelHeight$$1_isPatternBg$$inline_2935_outerColor$$inline_2927_sliceBorderWidth$$inline_2923$$);
  this.$OriginalStroke$ = this.$getStroke$();
  this.$_chart$.$isSelectionSupported$() && ($JSCompiler_inline_result$$158_hoverColor$$inline_2925_seriesIndex$$17_sliceBounds$$inline_2931_sliceFill$$inline_2921$$ = dvt.$SelectionEffectUtils$.$getHoverBorderColor$(this.$_dataColor$), $funnelWidth$$1_innerColor$$inline_2926_label$$inline_2934_labelString$$inline_2933_sliceBorder$$inline_2922$$ = $DvtChartStyleUtils$$.$getSelectedInnerColor$(this.$_chart$), $funnelHeight$$1_isPatternBg$$inline_2935_outerColor$$inline_2927_sliceBorderWidth$$inline_2923$$ = 
  $DvtChartStyleUtils$$.$getSelectedOuterColor$(this.$_chart$) ? $DvtChartStyleUtils$$.$getSelectedOuterColor$(this.$_chart$) : this.$_dataColor$, $backgroundFill$$inline_2924_labelStyleArray$$inline_2936_shapeForSelection$$inline_2928_sliceBounds$$inline_2920_startPercent$$1_style$$inline_2937$$ = this.$_bar$ != $JSCompiler_alias_NULL$$ ? this.$_bar$ : this, $backgroundFill$$inline_2924_labelStyleArray$$inline_2936_shapeForSelection$$inline_2928_sliceBounds$$inline_2920_startPercent$$1_style$$inline_2937$$.$setHoverStroke$(new dvt.$SolidStroke$($JSCompiler_inline_result$$158_hoverColor$$inline_2925_seriesIndex$$17_sliceBounds$$inline_2931_sliceFill$$inline_2921$$, 
  1, 2)), $backgroundFill$$inline_2924_labelStyleArray$$inline_2936_shapeForSelection$$inline_2928_sliceBounds$$inline_2920_startPercent$$1_style$$inline_2937$$.$setSelectedStroke$(new dvt.$SolidStroke$($funnelWidth$$1_innerColor$$inline_2926_label$$inline_2934_labelString$$inline_2933_sliceBorder$$inline_2922$$, 1, 1.5), new dvt.$SolidStroke$($funnelHeight$$1_isPatternBg$$inline_2935_outerColor$$inline_2927_sliceBorderWidth$$inline_2923$$, 1, 4.5)), $backgroundFill$$inline_2924_labelStyleArray$$inline_2936_shapeForSelection$$inline_2928_sliceBounds$$inline_2920_startPercent$$1_style$$inline_2937$$.$setSelectedHoverStroke$(new dvt.$SolidStroke$($funnelWidth$$1_innerColor$$inline_2926_label$$inline_2934_labelString$$inline_2933_sliceBorder$$inline_2922$$, 
  1, 1.5), new dvt.$SolidStroke$($JSCompiler_inline_result$$158_hoverColor$$inline_2925_seriesIndex$$17_sliceBounds$$inline_2931_sliceFill$$inline_2921$$, 1, 4.5)), this.setCursor("pointer"));
  a: {
    $JSCompiler_inline_result$$158_hoverColor$$inline_2925_seriesIndex$$17_sliceBounds$$inline_2931_sliceFill$$inline_2921$$ = $barBounds$$inline_2932_cmds$$7_labelColor$$inline_2944_numDrawnSeries$$1$$.sliceBounds;
    $barBounds$$inline_2932_cmds$$7_labelColor$$inline_2944_numDrawnSeries$$1$$ = $barBounds$$inline_2932_cmds$$7_labelColor$$inline_2944_numDrawnSeries$$1$$.barBounds;
    ($funnelWidth$$1_innerColor$$inline_2926_label$$inline_2934_labelString$$inline_2933_sliceBorder$$inline_2922$$ = $DvtChartDataUtils$$.$getDataLabel$(this.$_chart$, this.$_seriesIndex$, 0)) || ($funnelWidth$$1_innerColor$$inline_2926_label$$inline_2934_labelString$$inline_2933_sliceBorder$$inline_2922$$ = $DvtChartDataUtils$$.$getSeriesLabel$(this.$_chart$, this.$_seriesIndex$));
    if($funnelWidth$$1_innerColor$$inline_2926_label$$inline_2934_labelString$$inline_2933_sliceBorder$$inline_2922$$ && "none" != $DvtChartStyleUtils$$.$getDataLabelPosition$(this.$_chart$, this.$_seriesIndex$, 0) && ($funnelWidth$$1_innerColor$$inline_2926_label$$inline_2934_labelString$$inline_2933_sliceBorder$$inline_2922$$ = new dvt.$OutputText$(this.$getCtx$(), $funnelWidth$$1_innerColor$$inline_2926_label$$inline_2934_labelString$$inline_2933_sliceBorder$$inline_2922$$, 0, 0), $funnelHeight$$1_isPatternBg$$inline_2935_outerColor$$inline_2927_sliceBorderWidth$$inline_2923$$ = 
    $DvtChartStyleUtils$$.$getPattern$(this.$_chart$, this.$_seriesIndex$, 0) != $JSCompiler_alias_NULL$$, $backgroundFill$$inline_2924_labelStyleArray$$inline_2936_shapeForSelection$$inline_2928_sliceBounds$$inline_2920_startPercent$$1_style$$inline_2937$$ = [this.$_chart$.$getOptions$().styleDefaults.dataLabelStyle, new dvt.$CSSStyle$(this.$_chart$.$getOptions$().styleDefaults.sliceLabelStyle), new dvt.$CSSStyle$($DvtChartDataUtils$$.$getDataItem$(this.$_chart$, this.$_seriesIndex$, 0).labelStyle)], 
    $backgroundFill$$inline_2924_labelStyleArray$$inline_2936_shapeForSelection$$inline_2928_sliceBounds$$inline_2920_startPercent$$1_style$$inline_2937$$ = dvt.$CSSStyle$.$mergeStyles$($backgroundFill$$inline_2924_labelStyleArray$$inline_2936_shapeForSelection$$inline_2928_sliceBounds$$inline_2920_startPercent$$1_style$$inline_2937$$), $funnelWidth$$1_innerColor$$inline_2926_label$$inline_2934_labelString$$inline_2933_sliceBorder$$inline_2922$$.$setCSSStyle$($backgroundFill$$inline_2924_labelStyleArray$$inline_2936_shapeForSelection$$inline_2928_sliceBounds$$inline_2920_startPercent$$1_style$$inline_2937$$), 
    dvt.$TextUtils$.$fitText$($funnelWidth$$1_innerColor$$inline_2926_label$$inline_2934_labelString$$inline_2933_sliceBorder$$inline_2922$$, $JSCompiler_inline_result$$158_hoverColor$$inline_2925_seriesIndex$$17_sliceBounds$$inline_2931_sliceFill$$inline_2921$$.$h$ - 50 * this.$_3dRatio$ * (0.8 - this.$_valuePercent$), $JSCompiler_inline_result$$158_hoverColor$$inline_2925_seriesIndex$$17_sliceBounds$$inline_2931_sliceFill$$inline_2921$$.$w$, this, 3))) {
      $textDim$$inline_2938_valuePercent$$1$$ = $funnelWidth$$1_innerColor$$inline_2926_label$$inline_2934_labelString$$inline_2933_sliceBorder$$inline_2922$$.$measureDimensions$();
      $fillPercent$$1_pos$$inline_2939$$ = $JSCompiler_StaticMethods__getLabelPosition$$(this, $JSCompiler_inline_result$$158_hoverColor$$inline_2925_seriesIndex$$17_sliceBounds$$inline_2931_sliceFill$$inline_2921$$);
      $funnelHeight$$1_isPatternBg$$inline_2935_outerColor$$inline_2927_sliceBorderWidth$$inline_2923$$ && ($bbox$$inline_2943_chart$$24_cmd$$inline_2942_padding$$inline_2940_styleDefaults$$ = 0.15 * $textDim$$inline_2938_valuePercent$$1$$.$h$, $displacement$$inline_2941_gap$$17$$ = dvt.$Agent$.$isRightToLeft$(this.$getCtx$()) ? 0.5 : -0.5, $bbox$$inline_2943_chart$$24_cmd$$inline_2942_padding$$inline_2940_styleDefaults$$ = dvt.$PathUtils$.$roundedRectangle$($textDim$$inline_2938_valuePercent$$1$$.x - 
      $bbox$$inline_2943_chart$$24_cmd$$inline_2942_padding$$inline_2940_styleDefaults$$, $textDim$$inline_2938_valuePercent$$1$$.y, $textDim$$inline_2938_valuePercent$$1$$.$w$ + 2 * $bbox$$inline_2943_chart$$24_cmd$$inline_2942_padding$$inline_2940_styleDefaults$$, $textDim$$inline_2938_valuePercent$$1$$.$h$, 2, 2, 2, 2), $bbox$$inline_2943_chart$$24_cmd$$inline_2942_padding$$inline_2940_styleDefaults$$ = new dvt.$Path$(this.$getCtx$(), $bbox$$inline_2943_chart$$24_cmd$$inline_2942_padding$$inline_2940_styleDefaults$$), 
      $bbox$$inline_2943_chart$$24_cmd$$inline_2942_padding$$inline_2940_styleDefaults$$.$setSolidFill$("#FFFFFF", 0.9), $fillPercent$$1_pos$$inline_2939$$.translate($displacement$$inline_2941_gap$$17$$ * $textDim$$inline_2938_valuePercent$$1$$.$h$, -$displacement$$inline_2941_gap$$17$$ * $textDim$$inline_2938_valuePercent$$1$$.$w$), $bbox$$inline_2943_chart$$24_cmd$$inline_2942_padding$$inline_2940_styleDefaults$$.$setMatrix$($fillPercent$$1_pos$$inline_2939$$), this.$addChild$($bbox$$inline_2943_chart$$24_cmd$$inline_2942_padding$$inline_2940_styleDefaults$$));
      $barBounds$$inline_2932_cmds$$7_labelColor$$inline_2944_numDrawnSeries$$1$$ = $funnelHeight$$1_isPatternBg$$inline_2935_outerColor$$inline_2927_sliceBorderWidth$$inline_2923$$ ? "#000000" : $barBounds$$inline_2932_cmds$$7_labelColor$$inline_2944_numDrawnSeries$$1$$.$containsPoint$($JSCompiler_inline_result$$158_hoverColor$$inline_2925_seriesIndex$$17_sliceBounds$$inline_2931_sliceFill$$inline_2921$$.x, $JSCompiler_inline_result$$158_hoverColor$$inline_2925_seriesIndex$$17_sliceBounds$$inline_2931_sliceFill$$inline_2921$$.y + 
      ($JSCompiler_inline_result$$158_hoverColor$$inline_2925_seriesIndex$$17_sliceBounds$$inline_2931_sliceFill$$inline_2921$$.$h$ - $textDim$$inline_2938_valuePercent$$1$$.$w$) / 2) ? dvt.$ColorUtils$.$getContrastingTextColor$(this.$_dataColor$) : dvt.$ColorUtils$.$getContrastingTextColor$(this.$_backgroundColor$);
      (!$backgroundFill$$inline_2924_labelStyleArray$$inline_2936_shapeForSelection$$inline_2928_sliceBounds$$inline_2920_startPercent$$1_style$$inline_2937$$.$getStyle$("color") || dvt.$Agent$.$isHighContrast$()) && $funnelWidth$$1_innerColor$$inline_2926_label$$inline_2934_labelString$$inline_2933_sliceBorder$$inline_2922$$.$setCSSStyle$($backgroundFill$$inline_2924_labelStyleArray$$inline_2936_shapeForSelection$$inline_2928_sliceBounds$$inline_2920_startPercent$$1_style$$inline_2937$$.$setStyle$("color", 
      $barBounds$$inline_2932_cmds$$7_labelColor$$inline_2944_numDrawnSeries$$1$$));
      $funnelWidth$$1_innerColor$$inline_2926_label$$inline_2934_labelString$$inline_2933_sliceBorder$$inline_2922$$.$setMatrix$($JSCompiler_StaticMethods__getLabelPosition$$(this, $JSCompiler_inline_result$$158_hoverColor$$inline_2925_seriesIndex$$17_sliceBounds$$inline_2931_sliceFill$$inline_2921$$));
      $funnelWidth$$1_innerColor$$inline_2926_label$$inline_2934_labelString$$inline_2933_sliceBorder$$inline_2922$$.$alignCenter$();
      $funnelWidth$$1_innerColor$$inline_2926_label$$inline_2934_labelString$$inline_2933_sliceBorder$$inline_2922$$.$alignMiddle$();
      $JSCompiler_inline_result$$158_hoverColor$$inline_2925_seriesIndex$$17_sliceBounds$$inline_2931_sliceFill$$inline_2921$$ = $funnelWidth$$1_innerColor$$inline_2926_label$$inline_2934_labelString$$inline_2933_sliceBorder$$inline_2922$$;
      break a
    }
    $JSCompiler_inline_result$$158_hoverColor$$inline_2925_seriesIndex$$17_sliceBounds$$inline_2931_sliceFill$$inline_2921$$ = $JSCompiler_alias_VOID$$
  }
  this.$_label$ = $JSCompiler_inline_result$$158_hoverColor$$inline_2925_seriesIndex$$17_sliceBounds$$inline_2931_sliceFill$$inline_2921$$;
  this.$_label$ != $JSCompiler_alias_NULL$$ && (this.$_label$.$setMouseEnabled$($JSCompiler_alias_FALSE$$), this.$addChild$(this.$_label$))
};
var $DvtChartFunnelSlice$_FUNNEL_RATIO$$ = 1 / 3, $DvtChartFunnelSlice$_LINE_FRACTION$$ = 2 / 3;
function $JSCompiler_StaticMethods__getPath$$($JSCompiler_StaticMethods__getPath$self$$) {
  var $alpha$$12_isBiDi$$ = dvt.$Agent$.$isRightToLeft$($JSCompiler_StaticMethods__getPath$self$$.$getCtx$()), $gapCount_rx$$9$$ = $DvtChartDataUtils$$.$getSeriesCount$($JSCompiler_StaticMethods__getPath$self$$.$_chart$), $ar$$5_offset$$21$$ = ($JSCompiler_StaticMethods__getPath$self$$.$_numDrawnSeries$ + 1) * $JSCompiler_StaticMethods__getPath$self$$.$_gap$, $angle$$13$$ = dvt.$Math$.$degreesToRads$(36 - 2 * $JSCompiler_StaticMethods__getPath$self$$.$_3dRatio$), $h2_totalWidth$$3$$ = $JSCompiler_StaticMethods__getPath$self$$.$_funnelWidth$ - 
  $gapCount_rx$$9$$ * $JSCompiler_StaticMethods__getPath$self$$.$_gap$, $gapCount_rx$$9$$ = $h2_totalWidth$$3$$ / Math.sin(dvt.$Math$.$degreesToRads$(36)), $ry$$5$$ = $JSCompiler_StaticMethods__getPath$self$$.$_funnelHeight$ / Math.sin($angle$$13$$), $ratio$$5$$ = 0.08 * ($JSCompiler_StaticMethods__getPath$self$$.$_3dRatio$ * $JSCompiler_StaticMethods__getPath$self$$.$_funnelWidth$ / $JSCompiler_StaticMethods__getPath$self$$.$_funnelHeight$);
  1E-5 > $ratio$$5$$ && ($ratio$$5$$ = 0);
  var $b1_b12_c1$$1_pathCommands$$1$$ = $JSCompiler_StaticMethods__getPath$self$$.$_funnelHeight$, $b2$$1_p2$$3$$ = $JSCompiler_StaticMethods__getPath$self$$.$_funnelHeight$ * $DvtChartFunnelSlice$_FUNNEL_RATIO$$, $arcDir1_p1$$2_startAngle$$4$$, $arcDir2_b11_endAngle$$2$$, $b21_barCommands_c2$$1$$, $b22$$, $f1$$1_sliceBounds$$, $f2$$1$$, $t1$$, $t2$$, $h1$$;
  0.41 > $JSCompiler_StaticMethods__getPath$self$$.$_startPercent$ ? ($arcDir1_p1$$2_startAngle$$4$$ = $JSCompiler_StaticMethods__getPath$self$$.$_startPercent$, $arcDir2_b11_endAngle$$2$$ = $b1_b12_c1$$1_pathCommands$$1$$, $b21_barCommands_c2$$1$$ = $JSCompiler_StaticMethods__getPath$self$$.$_funnelHeight$ * $DvtChartFunnelSlice$_LINE_FRACTION$$, $f1$$1_sliceBounds$$ = 0.41, $t1$$ = 0.28 * $h2_totalWidth$$3$$, $h1$$ = 0.72 * $h2_totalWidth$$3$$) : 0.8 > $JSCompiler_StaticMethods__getPath$self$$.$_startPercent$ ? 
  ($arcDir1_p1$$2_startAngle$$4$$ = $JSCompiler_StaticMethods__getPath$self$$.$_startPercent$ - 0.41, $arcDir2_b11_endAngle$$2$$ = $JSCompiler_StaticMethods__getPath$self$$.$_funnelHeight$ * $DvtChartFunnelSlice$_LINE_FRACTION$$, $b21_barCommands_c2$$1$$ = 0.4 * $JSCompiler_StaticMethods__getPath$self$$.$_funnelHeight$, $f1$$1_sliceBounds$$ = 0.8 - 0.41, $t1$$ = $h2_totalWidth$$3$$ * (0.7 - 0.28), $h1$$ = $h2_totalWidth$$3$$ * (1 - 0.7)) : ($arcDir1_p1$$2_startAngle$$4$$ = $JSCompiler_StaticMethods__getPath$self$$.$_startPercent$ - 
  0.8, $arcDir2_b11_endAngle$$2$$ = 0.4 * $JSCompiler_StaticMethods__getPath$self$$.$_funnelHeight$, $b21_barCommands_c2$$1$$ = $b2$$1_p2$$3$$, $f1$$1_sliceBounds$$ = 1 - 0.8, $t1$$ = $h2_totalWidth$$3$$ * (1 - 0.7), $h1$$ = 0);
  0.41 > $JSCompiler_StaticMethods__getPath$self$$.$_startPercent$ + $JSCompiler_StaticMethods__getPath$self$$.$_valuePercent$ ? ($b22$$ = $JSCompiler_StaticMethods__getPath$self$$.$_funnelHeight$ * $DvtChartFunnelSlice$_LINE_FRACTION$$, $b2$$1_p2$$3$$ = $JSCompiler_StaticMethods__getPath$self$$.$_startPercent$ + $JSCompiler_StaticMethods__getPath$self$$.$_valuePercent$, $f2$$1$$ = 0.41, $t2$$ = 0.28 * $h2_totalWidth$$3$$, $h2_totalWidth$$3$$ *= 0.72) : 0.8 > $JSCompiler_StaticMethods__getPath$self$$.$_startPercent$ + 
  $JSCompiler_StaticMethods__getPath$self$$.$_valuePercent$ ? ($b1_b12_c1$$1_pathCommands$$1$$ = $JSCompiler_StaticMethods__getPath$self$$.$_funnelHeight$ * $DvtChartFunnelSlice$_LINE_FRACTION$$, $b22$$ = 0.4 * $JSCompiler_StaticMethods__getPath$self$$.$_funnelHeight$, $b2$$1_p2$$3$$ = $JSCompiler_StaticMethods__getPath$self$$.$_startPercent$ + $JSCompiler_StaticMethods__getPath$self$$.$_valuePercent$ - 0.41, $f2$$1$$ = 0.8 - 0.41, $t2$$ = $h2_totalWidth$$3$$ * (0.7 - 0.28), $h2_totalWidth$$3$$ *= 
  1 - 0.7) : ($b1_b12_c1$$1_pathCommands$$1$$ = 0.4 * $JSCompiler_StaticMethods__getPath$self$$.$_funnelHeight$, $b22$$ = $b2$$1_p2$$3$$, $b2$$1_p2$$3$$ = $JSCompiler_StaticMethods__getPath$self$$.$_startPercent$ + $JSCompiler_StaticMethods__getPath$self$$.$_valuePercent$ - 0.8, $f2$$1$$ = 1 - 0.8, $t2$$ = $h2_totalWidth$$3$$ * (1 - 0.7), $h2_totalWidth$$3$$ = 0);
  $arcDir1_p1$$2_startAngle$$4$$ = 0.98 * Math.asin(((Math.sqrt(($f1$$1_sliceBounds$$ - $arcDir1_p1$$2_startAngle$$4$$) / $f1$$1_sliceBounds$$ * $arcDir2_b11_endAngle$$2$$ * $arcDir2_b11_endAngle$$2$$ + $arcDir1_p1$$2_startAngle$$4$$ / $f1$$1_sliceBounds$$ * $b21_barCommands_c2$$1$$ * $b21_barCommands_c2$$1$$) - $b21_barCommands_c2$$1$$) * $t1$$ / ($arcDir2_b11_endAngle$$2$$ - $b21_barCommands_c2$$1$$) + $h1$$) / $gapCount_rx$$9$$);
  $arcDir2_b11_endAngle$$2$$ = 0.98 * Math.asin(((Math.sqrt(($f2$$1$$ - $b2$$1_p2$$3$$) / $f2$$1$$ * $b1_b12_c1$$1_pathCommands$$1$$ * $b1_b12_c1$$1_pathCommands$$1$$ + $b2$$1_p2$$3$$ / $f2$$1$$ * $b22$$ * $b22$$) - $b22$$) * $t2$$ / ($b1_b12_c1$$1_pathCommands$$1$$ - $b22$$) + $h2_totalWidth$$3$$) / $gapCount_rx$$9$$);
  $b1_b12_c1$$1_pathCommands$$1$$ = (1 + $DvtChartFunnelSlice$_FUNNEL_RATIO$$) / 2 * $JSCompiler_StaticMethods__getPath$self$$.$_funnelHeight$ + $ry$$5$$;
  $b21_barCommands_c2$$1$$ = (1 - $DvtChartFunnelSlice$_FUNNEL_RATIO$$) / 2 * $JSCompiler_StaticMethods__getPath$self$$.$_funnelHeight$ - $ry$$5$$;
  $alpha$$12_isBiDi$$ ? ($ar$$5_offset$$21$$ = [$gapCount_rx$$9$$ * Math.sin($arcDir1_p1$$2_startAngle$$4$$) + $ar$$5_offset$$21$$, $b1_b12_c1$$1_pathCommands$$1$$ - $ry$$5$$ * Math.cos($arcDir1_p1$$2_startAngle$$4$$), $gapCount_rx$$9$$ * Math.sin($arcDir2_b11_endAngle$$2$$) + $ar$$5_offset$$21$$, $b1_b12_c1$$1_pathCommands$$1$$ - $ry$$5$$ * Math.cos($arcDir2_b11_endAngle$$2$$), $gapCount_rx$$9$$ * Math.sin($arcDir2_b11_endAngle$$2$$) + $ar$$5_offset$$21$$, $b21_barCommands_c2$$1$$ + $ry$$5$$ * Math.cos($arcDir2_b11_endAngle$$2$$), 
  $gapCount_rx$$9$$ * Math.sin($arcDir1_p1$$2_startAngle$$4$$) + $ar$$5_offset$$21$$, $b21_barCommands_c2$$1$$ + $ry$$5$$ * Math.cos($arcDir1_p1$$2_startAngle$$4$$)], $arcDir1_p1$$2_startAngle$$4$$ = 0, $arcDir2_b11_endAngle$$2$$ = 1) : ($ar$$5_offset$$21$$ = [$JSCompiler_StaticMethods__getPath$self$$.$_funnelWidth$ - $ar$$5_offset$$21$$ - $gapCount_rx$$9$$ * Math.sin($arcDir1_p1$$2_startAngle$$4$$), $b1_b12_c1$$1_pathCommands$$1$$ - $ry$$5$$ * Math.cos($arcDir1_p1$$2_startAngle$$4$$), $JSCompiler_StaticMethods__getPath$self$$.$_funnelWidth$ - 
  $ar$$5_offset$$21$$ - $gapCount_rx$$9$$ * Math.sin($arcDir2_b11_endAngle$$2$$), $b1_b12_c1$$1_pathCommands$$1$$ - $ry$$5$$ * Math.cos($arcDir2_b11_endAngle$$2$$), $JSCompiler_StaticMethods__getPath$self$$.$_funnelWidth$ - $ar$$5_offset$$21$$ - $gapCount_rx$$9$$ * Math.sin($arcDir2_b11_endAngle$$2$$), $b21_barCommands_c2$$1$$ + $ry$$5$$ * Math.cos($arcDir2_b11_endAngle$$2$$), $JSCompiler_StaticMethods__getPath$self$$.$_funnelWidth$ - $ar$$5_offset$$21$$ - $gapCount_rx$$9$$ * Math.sin($arcDir1_p1$$2_startAngle$$4$$), 
  $b21_barCommands_c2$$1$$ + $ry$$5$$ * Math.cos($arcDir1_p1$$2_startAngle$$4$$)], $arcDir1_p1$$2_startAngle$$4$$ = 1, $arcDir2_b11_endAngle$$2$$ = 0);
  $b1_b12_c1$$1_pathCommands$$1$$ = dvt.$PathUtils$.moveTo($ar$$5_offset$$21$$[0], $ar$$5_offset$$21$$[1]);
  $b21_barCommands_c2$$1$$ = $JSCompiler_alias_NULL$$;
  $b1_b12_c1$$1_pathCommands$$1$$ += dvt.$PathUtils$.arcTo($ratio$$5$$ * ($ar$$5_offset$$21$$[1] - $ar$$5_offset$$21$$[7]) / 2, ($ar$$5_offset$$21$$[1] - $ar$$5_offset$$21$$[7]) / 2, Math.PI, $arcDir2_b11_endAngle$$2$$, $ar$$5_offset$$21$$[6], $ar$$5_offset$$21$$[7]);
  $b1_b12_c1$$1_pathCommands$$1$$ += dvt.$PathUtils$.arcTo($ratio$$5$$ * ($ar$$5_offset$$21$$[1] - $ar$$5_offset$$21$$[7]) / 2, ($ar$$5_offset$$21$$[1] - $ar$$5_offset$$21$$[7]) / 2, Math.PI, $arcDir2_b11_endAngle$$2$$, $ar$$5_offset$$21$$[0], $ar$$5_offset$$21$$[1]);
  $b1_b12_c1$$1_pathCommands$$1$$ += dvt.$PathUtils$.arcTo($gapCount_rx$$9$$, $ry$$5$$, $angle$$13$$, $arcDir1_p1$$2_startAngle$$4$$, $ar$$5_offset$$21$$[2], $ar$$5_offset$$21$$[3]);
  $b1_b12_c1$$1_pathCommands$$1$$ += dvt.$PathUtils$.arcTo($ratio$$5$$ * ($ar$$5_offset$$21$$[3] - $ar$$5_offset$$21$$[5]) / 2, ($ar$$5_offset$$21$$[3] - $ar$$5_offset$$21$$[5]) / 2, Math.PI, $arcDir2_b11_endAngle$$2$$, $ar$$5_offset$$21$$[4], $ar$$5_offset$$21$$[5]);
  $b1_b12_c1$$1_pathCommands$$1$$ += dvt.$PathUtils$.arcTo($gapCount_rx$$9$$, $ry$$5$$, $angle$$13$$, $arcDir1_p1$$2_startAngle$$4$$, $ar$$5_offset$$21$$[6], $ar$$5_offset$$21$$[7]);
  $f1$$1_sliceBounds$$ = new dvt.$Rectangle$(Math.min($ar$$5_offset$$21$$[0], $ar$$5_offset$$21$$[2]), $ar$$5_offset$$21$$[5], Math.abs($ar$$5_offset$$21$$[0] - $ar$$5_offset$$21$$[2]), Math.abs($ar$$5_offset$$21$$[3] - $ar$$5_offset$$21$$[5]));
  if($JSCompiler_StaticMethods__getPath$self$$.$_fillPercent$ != $JSCompiler_alias_NULL$$) {
    var $barBounds_percent$$1$$ = Math.max(Math.min($JSCompiler_StaticMethods__getPath$self$$.$_fillPercent$, 1), 0), $alpha$$12_isBiDi$$ = $alpha$$12_isBiDi$$ ? -$barBounds_percent$$1$$ * Math.PI : $barBounds_percent$$1$$ * Math.PI;
    $b21_barCommands_c2$$1$$ = dvt.$PathUtils$.moveTo($ar$$5_offset$$21$$[0], $ar$$5_offset$$21$$[1]);
    $b21_barCommands_c2$$1$$ += dvt.$PathUtils$.arcTo($gapCount_rx$$9$$, $ry$$5$$, $angle$$13$$, $arcDir1_p1$$2_startAngle$$4$$, $ar$$5_offset$$21$$[2], $ar$$5_offset$$21$$[3]);
    $b21_barCommands_c2$$1$$ += dvt.$PathUtils$.arcTo($ratio$$5$$ * ($ar$$5_offset$$21$$[3] - $ar$$5_offset$$21$$[5]) / 2, ($ar$$5_offset$$21$$[3] - $ar$$5_offset$$21$$[5]) / 2, $alpha$$12_isBiDi$$, $arcDir2_b11_endAngle$$2$$, $ar$$5_offset$$21$$[2] + $ratio$$5$$ * ($ar$$5_offset$$21$$[3] - $ar$$5_offset$$21$$[5]) / 2 * Math.sin($alpha$$12_isBiDi$$), ($ar$$5_offset$$21$$[5] + $ar$$5_offset$$21$$[3]) / 2 + ($ar$$5_offset$$21$$[3] - $ar$$5_offset$$21$$[5]) / 2 * Math.cos($alpha$$12_isBiDi$$));
    $b21_barCommands_c2$$1$$ = 0.95 < $JSCompiler_StaticMethods__getPath$self$$.$_fillPercent$ ? $b21_barCommands_c2$$1$$ + dvt.$PathUtils$.arcTo($gapCount_rx$$9$$, $ry$$5$$, $angle$$13$$, $arcDir1_p1$$2_startAngle$$4$$, $ar$$5_offset$$21$$[6], $ar$$5_offset$$21$$[1] + $barBounds_percent$$1$$ * ($ar$$5_offset$$21$$[7] - $ar$$5_offset$$21$$[1])) : 0.05 > $JSCompiler_StaticMethods__getPath$self$$.$_fillPercent$ ? $b21_barCommands_c2$$1$$ + dvt.$PathUtils$.arcTo($gapCount_rx$$9$$, $ry$$5$$, $angle$$13$$, 
    $arcDir2_b11_endAngle$$2$$, $ar$$5_offset$$21$$[6], $ar$$5_offset$$21$$[1] + $barBounds_percent$$1$$ * ($ar$$5_offset$$21$$[7] - $ar$$5_offset$$21$$[1])) : $b21_barCommands_c2$$1$$ + dvt.$PathUtils$.lineTo($ar$$5_offset$$21$$[6] + $ratio$$5$$ * ($ar$$5_offset$$21$$[1] - $ar$$5_offset$$21$$[7]) / 2 * Math.sin($alpha$$12_isBiDi$$), ($ar$$5_offset$$21$$[7] + $ar$$5_offset$$21$$[1]) / 2 + ($ar$$5_offset$$21$$[1] - $ar$$5_offset$$21$$[7]) / 2 * Math.cos($alpha$$12_isBiDi$$));
    $b21_barCommands_c2$$1$$ += dvt.$PathUtils$.arcTo($ratio$$5$$ * ($ar$$5_offset$$21$$[1] - $ar$$5_offset$$21$$[7]) / 2, ($ar$$5_offset$$21$$[1] - $ar$$5_offset$$21$$[7]) / 2, $alpha$$12_isBiDi$$, $arcDir1_p1$$2_startAngle$$4$$, $ar$$5_offset$$21$$[0], $ar$$5_offset$$21$$[1]);
    $b21_barCommands_c2$$1$$ += dvt.$PathUtils$.closePath();
    $barBounds_percent$$1$$ = new dvt.$Rectangle$(Math.min($ar$$5_offset$$21$$[0], $ar$$5_offset$$21$$[2]), $ar$$5_offset$$21$$[5] + Math.abs($ar$$5_offset$$21$$[3] - $ar$$5_offset$$21$$[5]) * (1 - $barBounds_percent$$1$$), Math.abs($ar$$5_offset$$21$$[0] - $ar$$5_offset$$21$$[2]), Math.abs($ar$$5_offset$$21$$[3] - $ar$$5_offset$$21$$[5]) * $barBounds_percent$$1$$)
  }
  return{slice:$b1_b12_c1$$1_pathCommands$$1$$, bar:$b21_barCommands_c2$$1$$, sliceBounds:$f1$$1_sliceBounds$$, barBounds:$b21_barCommands_c2$$1$$ ? $barBounds_percent$$1$$ : $f1$$1_sliceBounds$$}
}
function $JSCompiler_StaticMethods__getLabelPosition$$($JSCompiler_StaticMethods__getLabelPosition$self$$, $sliceBounds$$2$$) {
  var $displacement$$1$$ = $JSCompiler_StaticMethods__getLabelPosition$self$$.$_3dRatio$ * (0.08 * ($sliceBounds$$2$$.$h$ * $JSCompiler_StaticMethods__getLabelPosition$self$$.$_funnelWidth$ / $JSCompiler_StaticMethods__getLabelPosition$self$$.$_funnelHeight$) / 2), $rotationMatrix$$ = new dvt.$Matrix$;
  dvt.$Agent$.$isRightToLeft$($JSCompiler_StaticMethods__getLabelPosition$self$$.$getCtx$()) ? ($rotationMatrix$$.rotate(Math.PI / 2), $rotationMatrix$$.translate($sliceBounds$$2$$.x + $sliceBounds$$2$$.$w$ / 2 - $displacement$$1$$, $sliceBounds$$2$$.y + $sliceBounds$$2$$.$h$ / 2)) : ($rotationMatrix$$.rotate(3 * Math.PI / 2), $rotationMatrix$$.translate($sliceBounds$$2$$.x + $sliceBounds$$2$$.$w$ / 2 + $displacement$$1$$, $sliceBounds$$2$$.y + $sliceBounds$$2$$.$h$ / 2));
  return $rotationMatrix$$
}
$JSCompiler_prototypeAlias$$ = $DvtChartFunnelSlice$$.prototype;
$JSCompiler_prototypeAlias$$.$getAnimationParams$ = function $$JSCompiler_prototypeAlias$$$$getAnimationParams$$() {
  return[this.$_startPercent$, this.$_valuePercent$, this.$_fillPercent$, this.$getAlpha$(), this.$_3dRatio$]
};
$JSCompiler_prototypeAlias$$.$setAnimationParams$ = function $$JSCompiler_prototypeAlias$$$$setAnimationParams$$($ar$$6_cmds$$8$$) {
  this.$_startPercent$ = $ar$$6_cmds$$8$$[0];
  this.$_valuePercent$ = $ar$$6_cmds$$8$$[1];
  this.$_fillPercent$ = this.$_fillPercent$ != $JSCompiler_alias_NULL$$ ? $ar$$6_cmds$$8$$[2] : $JSCompiler_alias_NULL$$;
  this.$setAlpha$($ar$$6_cmds$$8$$[3]);
  this.$_3dRatio$ = $ar$$6_cmds$$8$$[4];
  $ar$$6_cmds$$8$$ = $JSCompiler_StaticMethods__getPath$$(this);
  this.$setCmds$($ar$$6_cmds$$8$$.slice);
  $ar$$6_cmds$$8$$.bar && this.$_bar$ && this.$_bar$.$setCmds$($ar$$6_cmds$$8$$.bar);
  this.$_label$ && this.$_label$.$setMatrix$($JSCompiler_StaticMethods__getLabelPosition$$(this, $ar$$6_cmds$$8$$.sliceBounds))
};
$JSCompiler_prototypeAlias$$.$setSelected$ = function $$JSCompiler_prototypeAlias$$$$setSelected$$($selected$$18$$) {
  if(this.$_bar$ != $JSCompiler_alias_NULL$$) {
    if(this.$IsSelected$ == $selected$$18$$) {
      return
    }
    this.$IsSelected$ = $selected$$18$$;
    this.$_bar$.$setSelected$($selected$$18$$)
  }else {
    $DvtChartFunnelSlice$$.$superclass$.$setSelected$.call(this, $selected$$18$$)
  }
  var $dims$$36$$ = this.$getDimensions$(), $shapeForSelection$$1$$ = this.$_bar$ != $JSCompiler_alias_NULL$$ ? this.$_bar$ : this, $w$$21$$ = $dims$$36$$.$w$;
  $selected$$18$$ ? ($shapeForSelection$$1$$.$setScaleX$(($w$$21$$ - 3) / $w$$21$$), $shapeForSelection$$1$$.$setTranslateX$(Math.ceil(1.5) + 3 / $w$$21$$ * $dims$$36$$.x)) : ($shapeForSelection$$1$$.$setScaleX$(1), $shapeForSelection$$1$$.$setTranslateX$(0))
};
$JSCompiler_prototypeAlias$$.$showHoverEffect$ = function $$JSCompiler_prototypeAlias$$$$showHoverEffect$$() {
  this.$_bar$ != $JSCompiler_alias_NULL$$ ? this.$_bar$.$showHoverEffect$() : $DvtChartFunnelSlice$$.$superclass$.$showHoverEffect$.call(this)
};
$JSCompiler_prototypeAlias$$.$hideHoverEffect$ = function $$JSCompiler_prototypeAlias$$$$hideHoverEffect$$() {
  this.$_bar$ != $JSCompiler_alias_NULL$$ ? this.$_bar$.$hideHoverEffect$() : $DvtChartFunnelSlice$$.$superclass$.$hideHoverEffect$.call(this)
};
$JSCompiler_prototypeAlias$$.$copyShape$ = function $$JSCompiler_prototypeAlias$$$$copyShape$$() {
  return new $DvtChartFunnelSlice$$(this.$_chart$, this.$_seriesIndex$, this.$_numDrawnSeries$, this.$_funnelWidth$, this.$_funnelHeight$, this.$_startPercent$, this.$_valuePercent$, this.$_fillPercent$, this.$_gap$)
};
function $DvtChartPie$$($chart$$25$$, $availSpace$$19$$, $callback$$56$$, $callbackObj$$28$$) {
  this.Init($chart$$25$$, $availSpace$$19$$, $callback$$56$$, $callbackObj$$28$$)
}
dvt.$Obj$.$createSubclass$($DvtChartPie$$, dvt.$Container$);
$JSCompiler_prototypeAlias$$ = $DvtChartPie$$.prototype;
$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($chart$$26$$, $availSpace$$20$$) {
  $DvtChartPie$$.$superclass$.Init.call(this, $chart$$26$$.$getCtx$());
  this.$chart$ = $chart$$26$$;
  this.$_options$ = $chart$$26$$.$getOptions$();
  this.$_frame$ = $availSpace$$20$$.$clone$();
  $chart$$26$$.$pieChart$ = this;
  for(var $labelPosition$$1_slices$$inline_2947$$ = this.$getLabelPosition$(), $numSeries_otherSlice$$inline_2953_seriesIndices$$inline_2949$$ = $DvtChartDataUtils$$.$getSeriesCount$($chart$$26$$), $otherValue$$inline_2951_seriesIndex$$18$$ = 0;$otherValue$$inline_2951_seriesIndex$$18$$ < $numSeries_otherSlice$$inline_2953_seriesIndices$$inline_2949$$;$otherValue$$inline_2951_seriesIndex$$18$$++) {
    var $data$$46_i$$inline_2952$$ = $DvtChartDataUtils$$.$getDataItem$($chart$$26$$, $otherValue$$inline_2951_seriesIndex$$18$$, 0);
    if($data$$46_i$$inline_2952$$ && ("center" == $labelPosition$$1_slices$$inline_2947$$ || "none" == $labelPosition$$1_slices$$inline_2947$$) && "outsideSlice" == $data$$46_i$$inline_2952$$.labelPosition) {
      $labelPosition$$1_slices$$inline_2947$$ = "outsideSlice"
    }
  }
  this.$_center$ = new dvt.$Point$($availSpace$$20$$.x + Math.floor($availSpace$$20$$.$w$ / 2), $availSpace$$20$$.y + Math.floor($availSpace$$20$$.$h$ / 2));
  this.$_radiusY$ = this.$_radiusX$ = Math.floor(Math.min($availSpace$$20$$.$w$, $availSpace$$20$$.$h$) * ("center" == $labelPosition$$1_slices$$inline_2947$$ || "none" == $labelPosition$$1_slices$$inline_2947$$ ? 0.45 : 0.38));
  this.$_depth$ = 0;
  this.$_anchorOffset$ = 90;
  $JSCompiler_StaticMethods_is3D$$(this) && (this.$_depth$ = 0.1 * $availSpace$$20$$.$h$, this.$_center$.y -= Math.floor(this.$_depth$ / 2), this.$_radiusY$ *= 0.59);
  for(var $labelPosition$$1_slices$$inline_2947$$ = [], $seriesIndex$$inline_2950_slice$$inline_2948$$, $numSeries_otherSlice$$inline_2953_seriesIndices$$inline_2949$$ = $DvtChartPieUtils$$.$getRenderedSeriesIndices$(this.$chart$), $otherValue$$inline_2951_seriesIndex$$18$$ = $DvtChartPieUtils$$.$getOtherValue$(this.$chart$), $data$$46_i$$inline_2952$$ = 0;$data$$46_i$$inline_2952$$ < $numSeries_otherSlice$$inline_2953_seriesIndices$$inline_2949$$.length;$data$$46_i$$inline_2952$$++) {
    $seriesIndex$$inline_2950_slice$$inline_2948$$ = $numSeries_otherSlice$$inline_2953_seriesIndices$$inline_2949$$[$data$$46_i$$inline_2952$$], $DvtChartStyleUtils$$.$isDataItemRendered$(this.$chart$, $seriesIndex$$inline_2950_slice$$inline_2948$$) && ($seriesIndex$$inline_2950_slice$$inline_2948$$ = new $DvtChartPieSlice$$(this, $seriesIndex$$inline_2950_slice$$inline_2948$$), 0 >= $seriesIndex$$inline_2950_slice$$inline_2948$$.getValue() || $labelPosition$$1_slices$$inline_2947$$.push($seriesIndex$$inline_2950_slice$$inline_2948$$))
  }
  0 < $otherValue$$inline_2951_seriesIndex$$18$$ && ($numSeries_otherSlice$$inline_2953_seriesIndices$$inline_2949$$ = new $DvtChartPieSlice$$(this), "ascending" == this.$chart$.$getOptions$().sorting ? $labelPosition$$1_slices$$inline_2947$$.unshift($numSeries_otherSlice$$inline_2953_seriesIndices$$inline_2949$$) : $labelPosition$$1_slices$$inline_2947$$.push($numSeries_otherSlice$$inline_2953_seriesIndices$$inline_2949$$));
  dvt.$Agent$.$isRightToLeft$(this.$getCtx$()) && $labelPosition$$1_slices$$inline_2947$$.reverse();
  this.$_slices$ = $labelPosition$$1_slices$$inline_2947$$;
  this.$_shapesContainer$ = new dvt.$Container$(this.$getCtx$());
  this.$_numSelectedObjsInFront$ = this.$_numFrontObjs$ = 0
};
$JSCompiler_prototypeAlias$$.$getOptions$ = $JSCompiler_get$$("$_options$");
$JSCompiler_prototypeAlias$$.$highlight$ = function $$JSCompiler_prototypeAlias$$$$highlight$$($categories$$2$$) {
  dvt.$CategoryRolloverHandler$.$highlight$($categories$$2$$, this.$_slices$, "any" == this.$getOptions$().highlightMatch)
};
$JSCompiler_prototypeAlias$$.$setInitialSelection$ = function $$JSCompiler_prototypeAlias$$$$setInitialSelection$$() {
  var $handler$$8$$ = this.$chart$.$getSelectionHandler$();
  if($handler$$8$$) {
    for(var $otherPeerId_selected$$19$$ = $DvtChartDataUtils$$.$getInitialSelection$(this.$chart$), $selectedIds$$1$$ = [], $i$$310$$ = 0;$i$$310$$ < $otherPeerId_selected$$19$$.length;$i$$310$$++) {
      for(var $j$$46$$ = 0;$j$$46$$ < this.$_slices$.length;$j$$46$$++) {
        var $peerId$$ = this.$_slices$[$j$$46$$].getId();
        $peerId$$ && ($otherPeerId_selected$$19$$[$i$$310$$].id && $peerId$$.getId() == $otherPeerId_selected$$19$$[$i$$310$$].id || $peerId$$.$getSeries$() == $otherPeerId_selected$$19$$[$i$$310$$].series && $peerId$$.$getGroup$() == $otherPeerId_selected$$19$$[$i$$310$$].group) && $selectedIds$$1$$.push($peerId$$)
      }
    }
    $DvtChartPieUtils$$.$isOtherSliceSelected$(this.$chart$, $otherPeerId_selected$$19$$) && ($otherPeerId_selected$$19$$ = $DvtChartPieUtils$$.$getOtherSliceId$(this.$chart$), $selectedIds$$1$$.push($otherPeerId_selected$$19$$));
    $handler$$8$$.$processInitialSelections$($selectedIds$$1$$, this.$_slices$)
  }
};
$JSCompiler_prototypeAlias$$.$render$ = function $$JSCompiler_prototypeAlias$$$$render$$() {
  var $shadow$$1$$;
  this.contains(this.$_shapesContainer$) || (this.$_shapesContainer$ || (this.$_shapesContainer$ = new dvt.$Container$(this.$getCtx$())), this.$addChild$(this.$_shapesContainer$), !$JSCompiler_StaticMethods_is3D$$(this) && this.$getSkin$() == dvt.$CSSStyle$.$SKIN_SKYROS$ && ($shadow$$1$$ = new dvt.$Shadow$(dvt.$ColorUtils$.$makeRGBA$(78, 87, 101, 0.45), 4, 7, 7, 54, 2, 3, $JSCompiler_alias_FALSE$$, $JSCompiler_alias_FALSE$$, $JSCompiler_alias_FALSE$$)));
  var $i$$311_i$$inline_2983_slices$$inline_2955$$ = this.$_slices$, $anchorOffset$$inline_2956_angle$$inline_2959_grAngle$$inline_2972_lastSliceIndexToProcess$$inline_2993_rotateIdx$$inline_2986_topFill$$inline_2970$$ = this.$_anchorOffset$, $JSCompiler_StaticMethods_preRender$self$$inline_2966_i$$inline_2957_zOrderedSlices$$inline_2982$$, $color$$inline_2968_nSlices$$inline_2984_sideFill$$inline_2978_slice$$inline_2958$$, $angleStart$$inline_2987_arc$$inline_2960_percentage$$inline_2962_rotatedSlices$$inline_2991_style$$inline_2973_value$$inline_2964$$ = 
  0, $angleExtent$$inline_2988_crustFill$$inline_2979_fillType$$inline_2967_nSlices$$inline_2961_slice$$inline_2985_sliceSpanEnd$$inline_2989_useGradientFill$$inline_2976$$ = $i$$311_i$$inline_2983_slices$$inline_2955$$ ? $i$$311_i$$inline_2983_slices$$inline_2955$$.length : 0;
  360 < $anchorOffset$$inline_2956_angle$$inline_2959_grAngle$$inline_2972_lastSliceIndexToProcess$$inline_2993_rotateIdx$$inline_2986_topFill$$inline_2970$$ && ($anchorOffset$$inline_2956_angle$$inline_2959_grAngle$$inline_2972_lastSliceIndexToProcess$$inline_2993_rotateIdx$$inline_2986_topFill$$inline_2970$$ -= 360);
  0 > $anchorOffset$$inline_2956_angle$$inline_2959_grAngle$$inline_2972_lastSliceIndexToProcess$$inline_2993_rotateIdx$$inline_2986_topFill$$inline_2970$$ && ($anchorOffset$$inline_2956_angle$$inline_2959_grAngle$$inline_2972_lastSliceIndexToProcess$$inline_2993_rotateIdx$$inline_2986_topFill$$inline_2970$$ += 360);
  var $accumAngle$$inline_2992_dataTotal$$inline_2963_lateralFill$$inline_2977_pattern$$inline_2969_skin$$inline_2971_slices$$inline_2981$$ = $angleStart$$inline_2987_arc$$inline_2960_percentage$$inline_2962_rotatedSlices$$inline_2991_style$$inline_2973_value$$inline_2964$$ = 0;
  0 < $angleExtent$$inline_2988_crustFill$$inline_2979_fillType$$inline_2967_nSlices$$inline_2961_slice$$inline_2985_sliceSpanEnd$$inline_2989_useGradientFill$$inline_2976$$ && ($accumAngle$$inline_2992_dataTotal$$inline_2963_lateralFill$$inline_2977_pattern$$inline_2969_skin$$inline_2971_slices$$inline_2981$$ = $i$$311_i$$inline_2983_slices$$inline_2955$$[0].$_pieChart$.$getTotalValue$());
  for($JSCompiler_StaticMethods_preRender$self$$inline_2966_i$$inline_2957_zOrderedSlices$$inline_2982$$ = 0;$JSCompiler_StaticMethods_preRender$self$$inline_2966_i$$inline_2957_zOrderedSlices$$inline_2982$$ < $angleExtent$$inline_2988_crustFill$$inline_2979_fillType$$inline_2967_nSlices$$inline_2961_slice$$inline_2985_sliceSpanEnd$$inline_2989_useGradientFill$$inline_2976$$;$JSCompiler_StaticMethods_preRender$self$$inline_2966_i$$inline_2957_zOrderedSlices$$inline_2982$$++) {
    $color$$inline_2968_nSlices$$inline_2984_sideFill$$inline_2978_slice$$inline_2958$$ = $i$$311_i$$inline_2983_slices$$inline_2955$$[$JSCompiler_StaticMethods_preRender$self$$inline_2966_i$$inline_2957_zOrderedSlices$$inline_2982$$], $angleStart$$inline_2987_arc$$inline_2960_percentage$$inline_2962_rotatedSlices$$inline_2991_style$$inline_2973_value$$inline_2964$$ = $color$$inline_2968_nSlices$$inline_2984_sideFill$$inline_2978_slice$$inline_2958$$.getValue(), $angleStart$$inline_2987_arc$$inline_2960_percentage$$inline_2962_rotatedSlices$$inline_2991_style$$inline_2973_value$$inline_2964$$ = 
    0 == $accumAngle$$inline_2992_dataTotal$$inline_2963_lateralFill$$inline_2977_pattern$$inline_2969_skin$$inline_2971_slices$$inline_2981$$ ? 0 : 100 * (Math.abs($angleStart$$inline_2987_arc$$inline_2960_percentage$$inline_2962_rotatedSlices$$inline_2991_style$$inline_2973_value$$inline_2964$$) / $accumAngle$$inline_2992_dataTotal$$inline_2963_lateralFill$$inline_2977_pattern$$inline_2969_skin$$inline_2971_slices$$inline_2981$$), $angleStart$$inline_2987_arc$$inline_2960_percentage$$inline_2962_rotatedSlices$$inline_2991_style$$inline_2973_value$$inline_2964$$ *= 
    3.6, $anchorOffset$$inline_2956_angle$$inline_2959_grAngle$$inline_2972_lastSliceIndexToProcess$$inline_2993_rotateIdx$$inline_2986_topFill$$inline_2970$$ -= $angleStart$$inline_2987_arc$$inline_2960_percentage$$inline_2962_rotatedSlices$$inline_2991_style$$inline_2973_value$$inline_2964$$, 0 > $anchorOffset$$inline_2956_angle$$inline_2959_grAngle$$inline_2972_lastSliceIndexToProcess$$inline_2993_rotateIdx$$inline_2986_topFill$$inline_2970$$ && ($anchorOffset$$inline_2956_angle$$inline_2959_grAngle$$inline_2972_lastSliceIndexToProcess$$inline_2993_rotateIdx$$inline_2986_topFill$$inline_2970$$ += 
    360), $color$$inline_2968_nSlices$$inline_2984_sideFill$$inline_2978_slice$$inline_2958$$.$setAngleStart$($anchorOffset$$inline_2956_angle$$inline_2959_grAngle$$inline_2972_lastSliceIndexToProcess$$inline_2993_rotateIdx$$inline_2986_topFill$$inline_2970$$), $color$$inline_2968_nSlices$$inline_2984_sideFill$$inline_2978_slice$$inline_2958$$.$setAngleExtent$($angleStart$$inline_2987_arc$$inline_2960_percentage$$inline_2962_rotatedSlices$$inline_2991_style$$inline_2973_value$$inline_2964$$), $anchorOffset$$inline_2956_angle$$inline_2959_grAngle$$inline_2972_lastSliceIndexToProcess$$inline_2993_rotateIdx$$inline_2986_topFill$$inline_2970$$ = 
    $color$$inline_2968_nSlices$$inline_2984_sideFill$$inline_2978_slice$$inline_2958$$.$getAngleStart$()
  }
  for($i$$311_i$$inline_2983_slices$$inline_2955$$ = 0;$i$$311_i$$inline_2983_slices$$inline_2955$$ < this.$_slices$.length;$i$$311_i$$inline_2983_slices$$inline_2955$$++) {
    $JSCompiler_StaticMethods_preRender$self$$inline_2966_i$$inline_2957_zOrderedSlices$$inline_2982$$ = this.$_slices$[$i$$311_i$$inline_2983_slices$$inline_2955$$];
    $angleExtent$$inline_2988_crustFill$$inline_2979_fillType$$inline_2967_nSlices$$inline_2961_slice$$inline_2985_sliceSpanEnd$$inline_2989_useGradientFill$$inline_2976$$ = $JSCompiler_StaticMethods_preRender$self$$inline_2966_i$$inline_2957_zOrderedSlices$$inline_2982$$.$_bFillerSlice$ ? "color" : $DvtChartStyleUtils$$.$getSeriesEffect$($JSCompiler_StaticMethods_preRender$self$$inline_2966_i$$inline_2957_zOrderedSlices$$inline_2982$$.$_chart$);
    $color$$inline_2968_nSlices$$inline_2984_sideFill$$inline_2978_slice$$inline_2958$$ = $JSCompiler_StaticMethods_preRender$self$$inline_2966_i$$inline_2957_zOrderedSlices$$inline_2982$$.$getFillColor$();
    $accumAngle$$inline_2992_dataTotal$$inline_2963_lateralFill$$inline_2977_pattern$$inline_2969_skin$$inline_2971_slices$$inline_2981$$ = $JSCompiler_StaticMethods_preRender$self$$inline_2966_i$$inline_2957_zOrderedSlices$$inline_2982$$.$getFillPattern$();
    $anchorOffset$$inline_2956_angle$$inline_2959_grAngle$$inline_2972_lastSliceIndexToProcess$$inline_2993_rotateIdx$$inline_2986_topFill$$inline_2970$$ = $JSCompiler_alias_VOID$$;
    if("pattern" == $angleExtent$$inline_2988_crustFill$$inline_2979_fillType$$inline_2967_nSlices$$inline_2961_slice$$inline_2985_sliceSpanEnd$$inline_2989_useGradientFill$$inline_2976$$ || $accumAngle$$inline_2992_dataTotal$$inline_2963_lateralFill$$inline_2977_pattern$$inline_2969_skin$$inline_2971_slices$$inline_2981$$ != $JSCompiler_alias_NULL$$) {
      $anchorOffset$$inline_2956_angle$$inline_2959_grAngle$$inline_2972_lastSliceIndexToProcess$$inline_2993_rotateIdx$$inline_2986_topFill$$inline_2970$$ = new dvt.$PatternFill$($accumAngle$$inline_2992_dataTotal$$inline_2963_lateralFill$$inline_2977_pattern$$inline_2969_skin$$inline_2971_slices$$inline_2981$$, $color$$inline_2968_nSlices$$inline_2984_sideFill$$inline_2978_slice$$inline_2958$$), $angleExtent$$inline_2988_crustFill$$inline_2979_fillType$$inline_2967_nSlices$$inline_2961_slice$$inline_2985_sliceSpanEnd$$inline_2989_useGradientFill$$inline_2976$$ = 
      "pattern"
    }else {
      if("gradient" == $angleExtent$$inline_2988_crustFill$$inline_2979_fillType$$inline_2967_nSlices$$inline_2961_slice$$inline_2985_sliceSpanEnd$$inline_2989_useGradientFill$$inline_2976$$) {
        var $accumAngle$$inline_2992_dataTotal$$inline_2963_lateralFill$$inline_2977_pattern$$inline_2969_skin$$inline_2971_slices$$inline_2981$$ = $JSCompiler_StaticMethods_preRender$self$$inline_2966_i$$inline_2957_zOrderedSlices$$inline_2982$$.$_pieChart$.$getSkin$(), $anchorOffset$$inline_2956_angle$$inline_2959_grAngle$$inline_2972_lastSliceIndexToProcess$$inline_2993_rotateIdx$$inline_2986_topFill$$inline_2970$$ = $accumAngle$$inline_2992_dataTotal$$inline_2963_lateralFill$$inline_2977_pattern$$inline_2969_skin$$inline_2971_slices$$inline_2981$$ == 
        dvt.$CSSStyle$.$SKIN_SKYROS$ ? 297 : 270, $angleStart$$inline_2987_arc$$inline_2960_percentage$$inline_2962_rotatedSlices$$inline_2991_style$$inline_2973_value$$inline_2964$$ = !$JSCompiler_StaticMethods_is3D$$($JSCompiler_StaticMethods_preRender$self$$inline_2966_i$$inline_2957_zOrderedSlices$$inline_2982$$.$_pieChart$) ? "2D" : "3D", $arColors$$inline_2974$$ = $DvtChartPieRenderUtils$$.$getGradientColors$(dvt.$ColorUtils$.$getRGB$($color$$inline_2968_nSlices$$inline_2984_sideFill$$inline_2978_slice$$inline_2958$$), 
        $angleStart$$inline_2987_arc$$inline_2960_percentage$$inline_2962_rotatedSlices$$inline_2991_style$$inline_2973_value$$inline_2964$$, $accumAngle$$inline_2992_dataTotal$$inline_2963_lateralFill$$inline_2977_pattern$$inline_2969_skin$$inline_2971_slices$$inline_2981$$), $arAlphas$$inline_2975$$ = $DvtChartPieRenderUtils$$.$getGradientAlphas$(dvt.$ColorUtils$.$getAlpha$($color$$inline_2968_nSlices$$inline_2984_sideFill$$inline_2978_slice$$inline_2958$$), $angleStart$$inline_2987_arc$$inline_2960_percentage$$inline_2962_rotatedSlices$$inline_2991_style$$inline_2973_value$$inline_2964$$), 
        $anchorOffset$$inline_2956_angle$$inline_2959_grAngle$$inline_2972_lastSliceIndexToProcess$$inline_2993_rotateIdx$$inline_2986_topFill$$inline_2970$$ = new dvt.$LinearGradientFill$($anchorOffset$$inline_2956_angle$$inline_2959_grAngle$$inline_2972_lastSliceIndexToProcess$$inline_2993_rotateIdx$$inline_2986_topFill$$inline_2970$$, $arColors$$inline_2974$$, $arAlphas$$inline_2975$$, $DvtChartPieRenderUtils$$.$getGradientRatios$($angleStart$$inline_2987_arc$$inline_2960_percentage$$inline_2962_rotatedSlices$$inline_2991_style$$inline_2973_value$$inline_2964$$, 
        $accumAngle$$inline_2992_dataTotal$$inline_2963_lateralFill$$inline_2977_pattern$$inline_2969_skin$$inline_2971_slices$$inline_2981$$), [Math.floor($JSCompiler_StaticMethods_preRender$self$$inline_2966_i$$inline_2957_zOrderedSlices$$inline_2982$$.$_centerX$ - $JSCompiler_StaticMethods_preRender$self$$inline_2966_i$$inline_2957_zOrderedSlices$$inline_2982$$.$_radiusX$), Math.floor($JSCompiler_StaticMethods_preRender$self$$inline_2966_i$$inline_2957_zOrderedSlices$$inline_2982$$.$_centerY$ - 
        $JSCompiler_StaticMethods_preRender$self$$inline_2966_i$$inline_2957_zOrderedSlices$$inline_2982$$.$_radiusY$), Math.ceil(2 * $JSCompiler_StaticMethods_preRender$self$$inline_2966_i$$inline_2957_zOrderedSlices$$inline_2982$$.$_radiusX$), Math.ceil(2 * $JSCompiler_StaticMethods_preRender$self$$inline_2966_i$$inline_2957_zOrderedSlices$$inline_2982$$.$_radiusY$)])
      }else {
        $anchorOffset$$inline_2956_angle$$inline_2959_grAngle$$inline_2972_lastSliceIndexToProcess$$inline_2993_rotateIdx$$inline_2986_topFill$$inline_2970$$ = new dvt.$SolidFill$($color$$inline_2968_nSlices$$inline_2984_sideFill$$inline_2978_slice$$inline_2958$$)
      }
    }
    $JSCompiler_StaticMethods_preRender$self$$inline_2966_i$$inline_2957_zOrderedSlices$$inline_2982$$.$_topSurface$ = $DvtChartPieRenderUtils$$.$createTopSurface$($JSCompiler_StaticMethods_preRender$self$$inline_2966_i$$inline_2957_zOrderedSlices$$inline_2982$$, $anchorOffset$$inline_2956_angle$$inline_2959_grAngle$$inline_2972_lastSliceIndexToProcess$$inline_2993_rotateIdx$$inline_2986_topFill$$inline_2970$$);
    if(0 < $JSCompiler_StaticMethods_preRender$self$$inline_2966_i$$inline_2957_zOrderedSlices$$inline_2982$$.$_depth$ || $JSCompiler_StaticMethods_preRender$self$$inline_2966_i$$inline_2957_zOrderedSlices$$inline_2982$$.$_radiusX$ != $JSCompiler_StaticMethods_preRender$self$$inline_2966_i$$inline_2957_zOrderedSlices$$inline_2982$$.$_radiusY$) {
      $angleExtent$$inline_2988_crustFill$$inline_2979_fillType$$inline_2967_nSlices$$inline_2961_slice$$inline_2985_sliceSpanEnd$$inline_2989_useGradientFill$$inline_2976$$ = "gradient" == $angleExtent$$inline_2988_crustFill$$inline_2979_fillType$$inline_2967_nSlices$$inline_2961_slice$$inline_2985_sliceSpanEnd$$inline_2989_useGradientFill$$inline_2976$$, $accumAngle$$inline_2992_dataTotal$$inline_2963_lateralFill$$inline_2977_pattern$$inline_2969_skin$$inline_2971_slices$$inline_2981$$ = new dvt.$SolidFill$(dvt.$ColorUtils$.$getDarker$($color$$inline_2968_nSlices$$inline_2984_sideFill$$inline_2978_slice$$inline_2958$$, 
      0.6)), $color$$inline_2968_nSlices$$inline_2984_sideFill$$inline_2978_slice$$inline_2958$$ = $angleExtent$$inline_2988_crustFill$$inline_2979_fillType$$inline_2967_nSlices$$inline_2961_slice$$inline_2985_sliceSpanEnd$$inline_2989_useGradientFill$$inline_2976$$ ? $DvtChartPieRenderUtils$$.$generateLateralGradientFill$($JSCompiler_StaticMethods_preRender$self$$inline_2966_i$$inline_2957_zOrderedSlices$$inline_2982$$, $DvtChartPieRenderUtils$$.$SIDE$) : $accumAngle$$inline_2992_dataTotal$$inline_2963_lateralFill$$inline_2977_pattern$$inline_2969_skin$$inline_2971_slices$$inline_2981$$, 
      $angleExtent$$inline_2988_crustFill$$inline_2979_fillType$$inline_2967_nSlices$$inline_2961_slice$$inline_2985_sliceSpanEnd$$inline_2989_useGradientFill$$inline_2976$$ = $angleExtent$$inline_2988_crustFill$$inline_2979_fillType$$inline_2967_nSlices$$inline_2961_slice$$inline_2985_sliceSpanEnd$$inline_2989_useGradientFill$$inline_2976$$ ? $DvtChartPieRenderUtils$$.$generateLateralGradientFill$($JSCompiler_StaticMethods_preRender$self$$inline_2966_i$$inline_2957_zOrderedSlices$$inline_2982$$, 
      $DvtChartPieRenderUtils$$.$CRUST$) : $accumAngle$$inline_2992_dataTotal$$inline_2963_lateralFill$$inline_2977_pattern$$inline_2969_skin$$inline_2971_slices$$inline_2981$$, $JSCompiler_StaticMethods_preRender$self$$inline_2966_i$$inline_2957_zOrderedSlices$$inline_2982$$.$_leftSurface$ = $DvtChartPieRenderUtils$$.$createLateralSurface$($JSCompiler_StaticMethods_preRender$self$$inline_2966_i$$inline_2957_zOrderedSlices$$inline_2982$$, $DvtChartPieRenderUtils$$.$SURFACE_LEFT$, $color$$inline_2968_nSlices$$inline_2984_sideFill$$inline_2978_slice$$inline_2958$$), 
      $JSCompiler_StaticMethods_preRender$self$$inline_2966_i$$inline_2957_zOrderedSlices$$inline_2982$$.$_rightSurface$ = $DvtChartPieRenderUtils$$.$createLateralSurface$($JSCompiler_StaticMethods_preRender$self$$inline_2966_i$$inline_2957_zOrderedSlices$$inline_2982$$, $DvtChartPieRenderUtils$$.$SURFACE_RIGHT$, $color$$inline_2968_nSlices$$inline_2984_sideFill$$inline_2978_slice$$inline_2958$$), $JSCompiler_StaticMethods_preRender$self$$inline_2966_i$$inline_2957_zOrderedSlices$$inline_2982$$.$_crustSurface$ = 
      $DvtChartPieRenderUtils$$.$createLateralSurface$($JSCompiler_StaticMethods_preRender$self$$inline_2966_i$$inline_2957_zOrderedSlices$$inline_2982$$, $DvtChartPieRenderUtils$$.$SURFACE_CRUST$, $angleExtent$$inline_2988_crustFill$$inline_2979_fillType$$inline_2967_nSlices$$inline_2961_slice$$inline_2985_sliceSpanEnd$$inline_2989_useGradientFill$$inline_2976$$)
    }
  }
  $accumAngle$$inline_2992_dataTotal$$inline_2963_lateralFill$$inline_2977_pattern$$inline_2969_skin$$inline_2971_slices$$inline_2981$$ = this.$_slices$;
  $JSCompiler_StaticMethods_preRender$self$$inline_2966_i$$inline_2957_zOrderedSlices$$inline_2982$$ = [];
  $color$$inline_2968_nSlices$$inline_2984_sideFill$$inline_2978_slice$$inline_2958$$ = $accumAngle$$inline_2992_dataTotal$$inline_2963_lateralFill$$inline_2977_pattern$$inline_2969_skin$$inline_2971_slices$$inline_2981$$ ? $accumAngle$$inline_2992_dataTotal$$inline_2963_lateralFill$$inline_2977_pattern$$inline_2969_skin$$inline_2971_slices$$inline_2981$$.length : 0;
  for(var $anchorOffset$$inline_2956_angle$$inline_2959_grAngle$$inline_2972_lastSliceIndexToProcess$$inline_2993_rotateIdx$$inline_2986_topFill$$inline_2970$$ = -1, $accumAngleThreshold$$inline_2994_sliceSpanBeforeNoon$$inline_2990$$, $i$$311_i$$inline_2983_slices$$inline_2955$$ = 0;$i$$311_i$$inline_2983_slices$$inline_2955$$ < $color$$inline_2968_nSlices$$inline_2984_sideFill$$inline_2978_slice$$inline_2958$$;$i$$311_i$$inline_2983_slices$$inline_2955$$++) {
    if($angleExtent$$inline_2988_crustFill$$inline_2979_fillType$$inline_2967_nSlices$$inline_2961_slice$$inline_2985_sliceSpanEnd$$inline_2989_useGradientFill$$inline_2976$$ = $accumAngle$$inline_2992_dataTotal$$inline_2963_lateralFill$$inline_2977_pattern$$inline_2969_skin$$inline_2971_slices$$inline_2981$$[$i$$311_i$$inline_2983_slices$$inline_2955$$], $angleStart$$inline_2987_arc$$inline_2960_percentage$$inline_2962_rotatedSlices$$inline_2991_style$$inline_2973_value$$inline_2964$$ = $angleExtent$$inline_2988_crustFill$$inline_2979_fillType$$inline_2967_nSlices$$inline_2961_slice$$inline_2985_sliceSpanEnd$$inline_2989_useGradientFill$$inline_2976$$.$getAngleStart$(), 
    $angleExtent$$inline_2988_crustFill$$inline_2979_fillType$$inline_2967_nSlices$$inline_2961_slice$$inline_2985_sliceSpanEnd$$inline_2989_useGradientFill$$inline_2976$$ = $angleExtent$$inline_2988_crustFill$$inline_2979_fillType$$inline_2967_nSlices$$inline_2961_slice$$inline_2985_sliceSpanEnd$$inline_2989_useGradientFill$$inline_2976$$.$getAngleExtent$(), $angleExtent$$inline_2988_crustFill$$inline_2979_fillType$$inline_2967_nSlices$$inline_2961_slice$$inline_2985_sliceSpanEnd$$inline_2989_useGradientFill$$inline_2976$$ = 
    $angleStart$$inline_2987_arc$$inline_2960_percentage$$inline_2962_rotatedSlices$$inline_2991_style$$inline_2973_value$$inline_2964$$ + $angleExtent$$inline_2988_crustFill$$inline_2979_fillType$$inline_2967_nSlices$$inline_2961_slice$$inline_2985_sliceSpanEnd$$inline_2989_useGradientFill$$inline_2976$$, 360 < $angleExtent$$inline_2988_crustFill$$inline_2979_fillType$$inline_2967_nSlices$$inline_2961_slice$$inline_2985_sliceSpanEnd$$inline_2989_useGradientFill$$inline_2976$$ && ($angleExtent$$inline_2988_crustFill$$inline_2979_fillType$$inline_2967_nSlices$$inline_2961_slice$$inline_2985_sliceSpanEnd$$inline_2989_useGradientFill$$inline_2976$$ -= 
    360), 0 > $angleExtent$$inline_2988_crustFill$$inline_2979_fillType$$inline_2967_nSlices$$inline_2961_slice$$inline_2985_sliceSpanEnd$$inline_2989_useGradientFill$$inline_2976$$ && ($angleExtent$$inline_2988_crustFill$$inline_2979_fillType$$inline_2967_nSlices$$inline_2961_slice$$inline_2985_sliceSpanEnd$$inline_2989_useGradientFill$$inline_2976$$ += 360), 90 == $angleExtent$$inline_2988_crustFill$$inline_2979_fillType$$inline_2967_nSlices$$inline_2961_slice$$inline_2985_sliceSpanEnd$$inline_2989_useGradientFill$$inline_2976$$ || 
    90 > $angleStart$$inline_2987_arc$$inline_2960_percentage$$inline_2962_rotatedSlices$$inline_2991_style$$inline_2973_value$$inline_2964$$ && 90 < $angleExtent$$inline_2988_crustFill$$inline_2979_fillType$$inline_2967_nSlices$$inline_2961_slice$$inline_2985_sliceSpanEnd$$inline_2989_useGradientFill$$inline_2976$$) {
      $anchorOffset$$inline_2956_angle$$inline_2959_grAngle$$inline_2972_lastSliceIndexToProcess$$inline_2993_rotateIdx$$inline_2986_topFill$$inline_2970$$ = $i$$311_i$$inline_2983_slices$$inline_2955$$;
      $accumAngleThreshold$$inline_2994_sliceSpanBeforeNoon$$inline_2990$$ = $angleExtent$$inline_2988_crustFill$$inline_2979_fillType$$inline_2967_nSlices$$inline_2961_slice$$inline_2985_sliceSpanEnd$$inline_2989_useGradientFill$$inline_2976$$ - 90;
      break
    }
  }
  $angleStart$$inline_2987_arc$$inline_2960_percentage$$inline_2962_rotatedSlices$$inline_2991_style$$inline_2973_value$$inline_2964$$ = [];
  for($i$$311_i$$inline_2983_slices$$inline_2955$$ = $anchorOffset$$inline_2956_angle$$inline_2959_grAngle$$inline_2972_lastSliceIndexToProcess$$inline_2993_rotateIdx$$inline_2986_topFill$$inline_2970$$;$i$$311_i$$inline_2983_slices$$inline_2955$$ < $color$$inline_2968_nSlices$$inline_2984_sideFill$$inline_2978_slice$$inline_2958$$;$i$$311_i$$inline_2983_slices$$inline_2955$$++) {
    $angleStart$$inline_2987_arc$$inline_2960_percentage$$inline_2962_rotatedSlices$$inline_2991_style$$inline_2973_value$$inline_2964$$.push($accumAngle$$inline_2992_dataTotal$$inline_2963_lateralFill$$inline_2977_pattern$$inline_2969_skin$$inline_2971_slices$$inline_2981$$[$i$$311_i$$inline_2983_slices$$inline_2955$$])
  }
  for($i$$311_i$$inline_2983_slices$$inline_2955$$ = 0;$i$$311_i$$inline_2983_slices$$inline_2955$$ < $anchorOffset$$inline_2956_angle$$inline_2959_grAngle$$inline_2972_lastSliceIndexToProcess$$inline_2993_rotateIdx$$inline_2986_topFill$$inline_2970$$;$i$$311_i$$inline_2983_slices$$inline_2955$$++) {
    $angleStart$$inline_2987_arc$$inline_2960_percentage$$inline_2962_rotatedSlices$$inline_2991_style$$inline_2973_value$$inline_2964$$.push($accumAngle$$inline_2992_dataTotal$$inline_2963_lateralFill$$inline_2977_pattern$$inline_2969_skin$$inline_2971_slices$$inline_2981$$[$i$$311_i$$inline_2983_slices$$inline_2955$$])
  }
  $anchorOffset$$inline_2956_angle$$inline_2959_grAngle$$inline_2972_lastSliceIndexToProcess$$inline_2993_rotateIdx$$inline_2986_topFill$$inline_2970$$ = $accumAngle$$inline_2992_dataTotal$$inline_2963_lateralFill$$inline_2977_pattern$$inline_2969_skin$$inline_2971_slices$$inline_2981$$ = 0;
  $accumAngleThreshold$$inline_2994_sliceSpanBeforeNoon$$inline_2990$$ = 180 + $accumAngleThreshold$$inline_2994_sliceSpanBeforeNoon$$inline_2990$$;
  for($i$$311_i$$inline_2983_slices$$inline_2955$$ = 0;$i$$311_i$$inline_2983_slices$$inline_2955$$ < $color$$inline_2968_nSlices$$inline_2984_sideFill$$inline_2978_slice$$inline_2958$$;$i$$311_i$$inline_2983_slices$$inline_2955$$++) {
    if($angleExtent$$inline_2988_crustFill$$inline_2979_fillType$$inline_2967_nSlices$$inline_2961_slice$$inline_2985_sliceSpanEnd$$inline_2989_useGradientFill$$inline_2976$$ = $angleStart$$inline_2987_arc$$inline_2960_percentage$$inline_2962_rotatedSlices$$inline_2991_style$$inline_2973_value$$inline_2964$$[$i$$311_i$$inline_2983_slices$$inline_2955$$]) {
      if($accumAngle$$inline_2992_dataTotal$$inline_2963_lateralFill$$inline_2977_pattern$$inline_2969_skin$$inline_2971_slices$$inline_2981$$ + $angleExtent$$inline_2988_crustFill$$inline_2979_fillType$$inline_2967_nSlices$$inline_2961_slice$$inline_2985_sliceSpanEnd$$inline_2989_useGradientFill$$inline_2976$$.$getAngleExtent$() > $accumAngleThreshold$$inline_2994_sliceSpanBeforeNoon$$inline_2990$$) {
        $anchorOffset$$inline_2956_angle$$inline_2959_grAngle$$inline_2972_lastSliceIndexToProcess$$inline_2993_rotateIdx$$inline_2986_topFill$$inline_2970$$ = $i$$311_i$$inline_2983_slices$$inline_2955$$;
        break
      }
      $JSCompiler_StaticMethods_preRender$self$$inline_2966_i$$inline_2957_zOrderedSlices$$inline_2982$$.push($angleExtent$$inline_2988_crustFill$$inline_2979_fillType$$inline_2967_nSlices$$inline_2961_slice$$inline_2985_sliceSpanEnd$$inline_2989_useGradientFill$$inline_2976$$);
      $accumAngle$$inline_2992_dataTotal$$inline_2963_lateralFill$$inline_2977_pattern$$inline_2969_skin$$inline_2971_slices$$inline_2981$$ += $angleExtent$$inline_2988_crustFill$$inline_2979_fillType$$inline_2967_nSlices$$inline_2961_slice$$inline_2985_sliceSpanEnd$$inline_2989_useGradientFill$$inline_2976$$.$getAngleExtent$()
    }
  }
  for($i$$311_i$$inline_2983_slices$$inline_2955$$ = $color$$inline_2968_nSlices$$inline_2984_sideFill$$inline_2978_slice$$inline_2958$$ - 1;$i$$311_i$$inline_2983_slices$$inline_2955$$ >= $anchorOffset$$inline_2956_angle$$inline_2959_grAngle$$inline_2972_lastSliceIndexToProcess$$inline_2993_rotateIdx$$inline_2986_topFill$$inline_2970$$;$i$$311_i$$inline_2983_slices$$inline_2955$$--) {
    ($angleExtent$$inline_2988_crustFill$$inline_2979_fillType$$inline_2967_nSlices$$inline_2961_slice$$inline_2985_sliceSpanEnd$$inline_2989_useGradientFill$$inline_2976$$ = $angleStart$$inline_2987_arc$$inline_2960_percentage$$inline_2962_rotatedSlices$$inline_2991_style$$inline_2973_value$$inline_2964$$[$i$$311_i$$inline_2983_slices$$inline_2955$$]) && $JSCompiler_StaticMethods_preRender$self$$inline_2966_i$$inline_2957_zOrderedSlices$$inline_2982$$.push($angleExtent$$inline_2988_crustFill$$inline_2979_fillType$$inline_2967_nSlices$$inline_2961_slice$$inline_2985_sliceSpanEnd$$inline_2989_useGradientFill$$inline_2976$$)
  }
  $DvtChartPieLabelUtils$$.$createPieCenterLabel$(this);
  this.$_duringDisplayAnim$ || $DvtChartPieLabelUtils$$.$layoutLabelsAndFeelers$(this);
  for($i$$311_i$$inline_2983_slices$$inline_2955$$ = 0;$i$$311_i$$inline_2983_slices$$inline_2955$$ < $JSCompiler_StaticMethods_preRender$self$$inline_2966_i$$inline_2957_zOrderedSlices$$inline_2982$$.length;$i$$311_i$$inline_2983_slices$$inline_2955$$++) {
    $JSCompiler_StaticMethods_preRender$self$$inline_2966_i$$inline_2957_zOrderedSlices$$inline_2982$$[$i$$311_i$$inline_2983_slices$$inline_2955$$].$render$(this.$_duringDisplayAnim$)
  }
  dvt.$Agent$.$isPlatformWebkit$() || $shadow$$1$$ && this.$_shapesContainer$.$addDrawEffect$($shadow$$1$$);
  this.$setInitialSelection$();
  this.$highlight$($DvtChartStyleUtils$$.$getHighlightedCategories$(this.$chart$))
};
$JSCompiler_prototypeAlias$$.$getTotalValue$ = function $$JSCompiler_prototypeAlias$$$$getTotalValue$$() {
  for(var $total$$2$$ = 0, $i$$312$$ = 0;$i$$312$$ < this.$_slices$.length;$i$$312$$++) {
    var $sliceValue$$ = this.$_slices$[$i$$312$$].getValue();
    0 <= $sliceValue$$ && ($total$$2$$ += $sliceValue$$)
  }
  return $total$$2$$
};
function $JSCompiler_StaticMethods_is3D$$($JSCompiler_StaticMethods_is3D$self$$) {
  return"on" == $JSCompiler_StaticMethods_is3D$self$$.$_options$.styleDefaults.threeDEffect
}
$JSCompiler_prototypeAlias$$.$getAnimationDuration$ = function $$JSCompiler_prototypeAlias$$$$getAnimationDuration$$() {
  return $DvtChartStyleUtils$$.$getAnimationDuration$(this.$chart$)
};
$JSCompiler_prototypeAlias$$.$getDisplayAnimation$ = function $$JSCompiler_prototypeAlias$$$$getDisplayAnimation$$() {
  this.$_duringDisplayAnim$ = $JSCompiler_alias_TRUE$$;
  var $anim$$19_handler$$9$$ = new dvt.$DataAnimationHandler$(this.$getCtx$(), this), $duration$$12_labelAnim$$ = this.$getAnimationDuration$(), $ar$$7_fillerAnim_value$$inline_2997$$ = this.$getTotalValue$(), $i$$315_renderAnim_slice$$inline_2998$$ = new $DvtChartPieSlice$$(this);
  $i$$315_renderAnim_slice$$inline_2998$$.$_value$ = $ar$$7_fillerAnim_value$$inline_2997$$;
  $i$$315_renderAnim_slice$$inline_2998$$.$_bFillerSlice$ = $JSCompiler_alias_TRUE$$;
  $i$$315_renderAnim_slice$$inline_2998$$.$_centerX$ = this.$getCenter$().x;
  $i$$315_renderAnim_slice$$inline_2998$$.$_centerY$ = this.$getCenter$().y;
  $i$$315_renderAnim_slice$$inline_2998$$.$_fillColor$ = "rgba(255,255,255,0)";
  $i$$315_renderAnim_slice$$inline_2998$$.$_strokeColor$ = "rgba(255,255,255,0)";
  $i$$315_renderAnim_slice$$inline_2998$$.$_id$ = new $DvtChartDataItem$$($JSCompiler_alias_NULL$$, $JSCompiler_alias_NULL$$, $JSCompiler_alias_NULL$$);
  this.$_slices$.push($i$$315_renderAnim_slice$$inline_2998$$);
  $ar$$7_fillerAnim_value$$inline_2997$$ = new dvt.$CustomAnimation$(this.$getCtx$(), $i$$315_renderAnim_slice$$inline_2998$$, $duration$$12_labelAnim$$);
  $ar$$7_fillerAnim_value$$inline_2997$$.$_animator$.$addProp$(dvt.$Animator$.$TYPE_NUMBER_ARRAY$, $i$$315_renderAnim_slice$$inline_2998$$, $i$$315_renderAnim_slice$$inline_2998$$.$GetAnimationParams$, $i$$315_renderAnim_slice$$inline_2998$$.$SetAnimationParams$, $JSCompiler_StaticMethods_getDeletedAnimationParams$$($i$$315_renderAnim_slice$$inline_2998$$));
  $ar$$7_fillerAnim_value$$inline_2997$$.$setOnEnd$($i$$315_renderAnim_slice$$inline_2998$$.$_removeDeletedSlice$, $i$$315_renderAnim_slice$$inline_2998$$);
  $anim$$19_handler$$9$$.add($ar$$7_fillerAnim_value$$inline_2997$$, 0);
  for($i$$315_renderAnim_slice$$inline_2998$$ = 0;$i$$315_renderAnim_slice$$inline_2998$$ < this.$_slices$.length - 1;$i$$315_renderAnim_slice$$inline_2998$$++) {
    this.$_slices$[$i$$315_renderAnim_slice$$inline_2998$$].$animateInsert$($anim$$19_handler$$9$$)
  }
  $i$$315_renderAnim_slice$$inline_2998$$ = new dvt.$CustomAnimation$(this.$getCtx$(), this, $duration$$12_labelAnim$$);
  $i$$315_renderAnim_slice$$inline_2998$$.$_animator$.$addProp$(dvt.$Animator$.$TYPE_NUMBER_ARRAY$, this, this.$_getAnimationParams$, this.$_setAnimationParams$, this.$_getAnimationParams$());
  $anim$$19_handler$$9$$.add($i$$315_renderAnim_slice$$inline_2998$$, 0);
  $ar$$7_fillerAnim_value$$inline_2997$$ = [];
  for($i$$315_renderAnim_slice$$inline_2998$$ = 0;$i$$315_renderAnim_slice$$inline_2998$$ < this.$_slices$.length;$i$$315_renderAnim_slice$$inline_2998$$++) {
    $ar$$7_fillerAnim_value$$inline_2997$$ = $ar$$7_fillerAnim_value$$inline_2997$$.concat($JSCompiler_StaticMethods_getLabelAndFeeler$$(this.$_slices$[$i$$315_renderAnim_slice$$inline_2998$$]))
  }
  $duration$$12_labelAnim$$ = new dvt.$AnimFadeIn$(this.$_context$, $ar$$7_fillerAnim_value$$inline_2997$$, $duration$$12_labelAnim$$);
  $anim$$19_handler$$9$$.add($duration$$12_labelAnim$$, 0);
  this.$_setAnimationParams$();
  $anim$$19_handler$$9$$ = $anim$$19_handler$$9$$.$getAnimation$($JSCompiler_alias_TRUE$$);
  $anim$$19_handler$$9$$.$setOnEnd$(this.$_onEnd$, this);
  return $anim$$19_handler$$9$$
};
$JSCompiler_prototypeAlias$$.$_onEnd$ = function $$JSCompiler_prototypeAlias$$$$_onEnd$$() {
  this.$_duringDisplayAnim$ = $JSCompiler_alias_FALSE$$;
  this.$_setAnimationParams$()
};
$JSCompiler_prototypeAlias$$.$getCenter$ = $JSCompiler_get$$("$_center$");
$JSCompiler_prototypeAlias$$.$getInnerRadius$ = function $$JSCompiler_prototypeAlias$$$$getInnerRadius$$() {
  return $JSCompiler_StaticMethods_is3D$$(this) ? 0 : 0.95 * this.$_options$.styleDefaults.pieInnerRadius * Math.min(this.$_radiusX$, this.$_radiusY$)
};
$JSCompiler_prototypeAlias$$.getDepth = $JSCompiler_get$$("$_depth$");
$JSCompiler_prototypeAlias$$.$animateUpdate$ = function $$JSCompiler_prototypeAlias$$$$animateUpdate$$($handler$$10$$, $oldPie$$) {
  var $anim$$20_sliceAnim_sliceHandler$$ = new dvt.$DataAnimationHandler$(this.$getCtx$(), this);
  $anim$$20_sliceAnim_sliceHandler$$.$constructAnimation$($oldPie$$.$_slices$, this.$_slices$);
  var $anim$$20_sliceAnim_sliceHandler$$ = $anim$$20_sliceAnim_sliceHandler$$.$getAnimation$($JSCompiler_alias_TRUE$$), $renderAnim$$1$$ = new dvt.$CustomAnimation$(this.$getCtx$(), this, this.$getAnimationDuration$());
  $renderAnim$$1$$.$_animator$.$addProp$(dvt.$Animator$.$TYPE_NUMBER_ARRAY$, this, this.$_getAnimationParams$, this.$_setAnimationParams$, this.$_getAnimationParams$());
  $anim$$20_sliceAnim_sliceHandler$$ = new dvt.$ParallelPlayable$(this.$getCtx$(), $anim$$20_sliceAnim_sliceHandler$$, $renderAnim$$1$$);
  $anim$$20_sliceAnim_sliceHandler$$.$setOnEnd$(this.$_setAnimationParams$, this);
  $handler$$10$$.add($anim$$20_sliceAnim_sliceHandler$$, 0);
  this.$_setAnimationParams$([$oldPie$$.getDepth(), $oldPie$$.$_radiusY$, $oldPie$$.$getCenter$().y])
};
$JSCompiler_prototypeAlias$$.$animateInsert$ = $JSCompiler_emptyFn$$();
$JSCompiler_prototypeAlias$$.$animateDelete$ = $JSCompiler_emptyFn$$();
$JSCompiler_prototypeAlias$$.$_getAnimationParams$ = function $$JSCompiler_prototypeAlias$$$$_getAnimationParams$$() {
  return[this.$_depth$, this.$_radiusY$, this.$_center$.y]
};
$JSCompiler_prototypeAlias$$.$_setAnimationParams$ = function $$JSCompiler_prototypeAlias$$$$_setAnimationParams$$($params$$16$$) {
  this.$removeChildren$();
  this.$_shapesContainer$ && this.$_shapesContainer$.$destroy$();
  this.$_shapesContainer$ = $JSCompiler_alias_NULL$$;
  $params$$16$$ && (this.$_depth$ = $params$$16$$[0], this.$_radiusY$ = $params$$16$$[1], this.$_center$.y = $params$$16$$[2]);
  this.$render$()
};
$JSCompiler_prototypeAlias$$.$bringToFrontOfSelection$ = function $$JSCompiler_prototypeAlias$$$$bringToFrontOfSelection$$($slice$$4$$) {
  var $par$$2$$ = $slice$$4$$.$_pieChart$.$_shapesContainer$;
  if($par$$2$$) {
    var $parentChildCount$$2$$ = $par$$2$$.$getNumChildren$();
    1 < $parentChildCount$$2$$ - this.$_numFrontObjs$ && ($par$$2$$.removeChild($slice$$4$$.$_topSurface$[0]), $par$$2$$.$addChildAt$($slice$$4$$.$_topSurface$[0], $parentChildCount$$2$$ - this.$_numFrontObjs$ - 1))
  }
};
$JSCompiler_prototypeAlias$$.$pushToBackOfSelection$ = function $$JSCompiler_prototypeAlias$$$$pushToBackOfSelection$$($slice$$5$$) {
  for(var $len$$2_par$$3$$ = this.$_slices$.length, $counter_newIndex$$5$$ = 0, $i$$316$$ = 0;$i$$316$$ < $len$$2_par$$3$$;$i$$316$$++) {
    this.$_slices$[$i$$316$$].$isSelected$() && $counter_newIndex$$5$$++
  }
  this.$_numSelectedObjsInFront$ = $counter_newIndex$$5$$;
  if($len$$2_par$$3$$ = $slice$$5$$.$_pieChart$.$_shapesContainer$) {
    $counter_newIndex$$5$$ = $len$$2_par$$3$$.$getNumChildren$() - this.$_numFrontObjs$ - 1 - this.$_numSelectedObjsInFront$, 0 <= $counter_newIndex$$5$$ && ($len$$2_par$$3$$.removeChild($slice$$5$$.$_topSurface$[0]), $len$$2_par$$3$$.$addChildAt$($slice$$5$$.$_topSurface$[0], $counter_newIndex$$5$$))
  }
};
$JSCompiler_prototypeAlias$$.$getLabelPosition$ = function $$JSCompiler_prototypeAlias$$$$getLabelPosition$$() {
  var $position$$13$$ = this.$_options$.styleDefaults.sliceLabelPosition;
  $position$$13$$ || ($position$$13$$ = this.$_options$.styleDefaults.dataLabelPosition);
  return $DvtChartPie$parseLabelPosition$$($position$$13$$)
};
function $JSCompiler_StaticMethods_getSeriesLabelPosition$$($JSCompiler_StaticMethods_getSeriesLabelPosition$self$$, $seriesIndex$$20$$) {
  var $position$$14$$ = $JSCompiler_StaticMethods_getSeriesLabelPosition$self$$.$getLabelPosition$(), $data$$47$$ = $DvtChartDataUtils$$.$getDataItem$($JSCompiler_StaticMethods_getSeriesLabelPosition$self$$.$chart$, $seriesIndex$$20$$, 0);
  $data$$47$$ && $data$$47$$.labelPosition && ($position$$14$$ = $data$$47$$.labelPosition);
  return $DvtChartPie$parseLabelPosition$$($position$$14$$)
}
function $DvtChartPie$parseLabelPosition$$($position$$15$$) {
  return"center" == $position$$15$$ || "inside" == $position$$15$$ ? "center" : "outsideSlice" == $position$$15$$ || "outside" == $position$$15$$ ? "outsideSlice" : "none" == $position$$15$$ ? "none" : "auto"
}
$JSCompiler_prototypeAlias$$.$getSkin$ = function $$JSCompiler_prototypeAlias$$$$getSkin$$() {
  return this.$_options$.skin
};
function $DvtChartPieSlice$$($pieChart$$, $seriesIndex$$21$$) {
  this.Init($pieChart$$, $seriesIndex$$21$$)
}
dvt.$Obj$.$createSubclass$($DvtChartPieSlice$$, dvt.$Obj$);
$JSCompiler_prototypeAlias$$ = $DvtChartPieSlice$$.prototype;
$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($pieChart$$1$$, $seriesIndex$$22$$) {
  this.$_pieChart$ = $pieChart$$1$$;
  this.$_chart$ = $pieChart$$1$$.$chart$;
  this.$_angleExtent$ = this.$_angleStart$ = 0;
  this.$_crustSurface$ = this.$_rightSurface$ = this.$_leftSurface$ = this.$_topSurface$ = $JSCompiler_alias_NULL$$;
  this.$_explodeOffsetY$ = this.$_explodeOffsetX$ = 0;
  this.$_sliceLabelString$ = this.$_sliceLabel$ = $JSCompiler_alias_NULL$$;
  this.$_hasFeeler$ = $JSCompiler_alias_FALSE$$;
  this.$_outsideFeelerEnd$ = this.$_outsideFeelerMid$ = this.$_outsideFeelerStart$ = this.$_feelerHoriz$ = this.$_feelerRad$ = $JSCompiler_alias_NULL$$;
  this.$_selecting$ = this.$_selected$ = $JSCompiler_alias_FALSE$$;
  this.$_centerX$ = this.$_pieChart$.$getCenter$().x;
  this.$_centerY$ = this.$_pieChart$.$getCenter$().y;
  this.$_radiusX$ = this.$_pieChart$.$_radiusX$;
  this.$_radiusY$ = this.$_pieChart$.$_radiusY$;
  this.$_depth$ = this.$_pieChart$.getDepth();
  var $dataItem$$6_options$$42$$ = this.$_chart$.$getOptions$();
  $seriesIndex$$22$$ != $JSCompiler_alias_NULL$$ ? ($dataItem$$6_options$$42$$ = $DvtChartDataUtils$$.$getDataItem$(this.$_chart$, $seriesIndex$$22$$, 0), this.$_value$ = $DvtChartDataUtils$$.getValue(this.$_chart$, $seriesIndex$$22$$, 0), this.$_explode$ = $DvtChartPieUtils$$.$getSliceExplode$(this.$_chart$, $seriesIndex$$22$$), this.$_fillColor$ = $DvtChartStyleUtils$$.$getColor$(this.$_chart$, $seriesIndex$$22$$), this.$_fillPattern$ = $DvtChartStyleUtils$$.$getPattern$(this.$_chart$, $seriesIndex$$22$$, 
  0), this.$_strokeColor$ = $DvtChartStyleUtils$$.$getBorderColor$(this.$_chart$, $seriesIndex$$22$$), this.$_borderWidth$ = $DvtChartStyleUtils$$.$getBorderWidth$(this.$_chart$, $seriesIndex$$22$$), this.$_customLabel$ = $dataItem$$6_options$$42$$.label, this.$_seriesLabel$ = $DvtChartDataUtils$$.$getSeries$(this.$_chart$, $seriesIndex$$22$$), this.$_action$ = $dataItem$$6_options$$42$$.action, this.$_drillable$ = $DvtChartEventUtils$$.$isDataItemDrillable$(this.$_chart$, $seriesIndex$$22$$, 0), 
  this.$_showPopupBehaviors$ = this.$_chart$.$getShowPopupBehaviors$($dataItem$$6_options$$42$$._id), this.$_id$ = $DvtChartPieUtils$$.$getSliceId$(this.$_chart$, $seriesIndex$$22$$), this.$_seriesIndex$ = $seriesIndex$$22$$, this.$_categories$ = $DvtChartDataUtils$$.$getDataItemCategories$(this.$_chart$, $seriesIndex$$22$$, 0)) : (this.$_value$ = $DvtChartPieUtils$$.$getOtherValue$(this.$_chart$), this.$_explode$ = 0, this.$_fillColor$ = $dataItem$$6_options$$42$$.styleDefaults.otherColor, this.$_fillPattern$ = 
  $JSCompiler_alias_NULL$$, this.$_strokeColor$ = $dataItem$$6_options$$42$$.styleDefaults.borderColor, this.$_borderWidth$ = $dataItem$$6_options$$42$$.styleDefaults.borderWidth, this.$_customLabel$ = $JSCompiler_alias_NULL$$, this.$_seriesLabel$ = dvt.$Bundle$.$getTranslatedString$(dvt.$Bundle$.$CHART_PREFIX$, "LABEL_OTHER", $JSCompiler_alias_NULL$$), this.$_action$ = $JSCompiler_alias_NULL$$, this.$_drillable$ = $JSCompiler_alias_FALSE$$, this.$_showPopupBehaviors$ = $DvtChartPieUtils$$.$getOtherSliceShowPopupBehaviors$(this.$_chart$), 
  this.$_id$ = $DvtChartPieUtils$$.$getOtherSliceId$(this.$_chart$))
};
$JSCompiler_prototypeAlias$$.$render$ = function $$JSCompiler_prototypeAlias$$$$render$$($displayable$$25_duringDisplayAnim_feelerRad$$inline_3009_sliceDisplayables$$) {
  var $i$$317_topSurface$$inline_3000$$ = this.$_topSurface$, $leftSurface$$inline_3001_len$$3$$ = this.$_leftSurface$, $rightSurface$$inline_3002_shapeArray$$ = this.$_rightSurface$, $crustSurface$$inline_3003_shapeCount$$ = this.$_crustSurface$, $angleStart$$inline_3004_j$$47$$ = this.$_angleStart$, $angleExtent$$inline_3005$$ = this.$_angleExtent$, $feelerHoriz$$inline_3010_sortedSurfaces$$inline_3006$$ = [];
  $leftSurface$$inline_3001_len$$3$$ && ($rightSurface$$inline_3002_shapeArray$$ && $crustSurface$$inline_3003_shapeCount$$) && (270 >= $angleStart$$inline_3004_j$$47$$ && 270 < $angleStart$$inline_3004_j$$47$$ + $angleExtent$$inline_3005$$ ? ($feelerHoriz$$inline_3010_sortedSurfaces$$inline_3006$$.push($leftSurface$$inline_3001_len$$3$$), $feelerHoriz$$inline_3010_sortedSurfaces$$inline_3006$$.push($rightSurface$$inline_3002_shapeArray$$), $feelerHoriz$$inline_3010_sortedSurfaces$$inline_3006$$.push($crustSurface$$inline_3003_shapeCount$$)) : 
  270 < $angleStart$$inline_3004_j$$47$$ || 90 >= $angleStart$$inline_3004_j$$47$$ + $angleExtent$$inline_3005$$ ? ($feelerHoriz$$inline_3010_sortedSurfaces$$inline_3006$$.push($leftSurface$$inline_3001_len$$3$$), $feelerHoriz$$inline_3010_sortedSurfaces$$inline_3006$$.push($crustSurface$$inline_3003_shapeCount$$), $feelerHoriz$$inline_3010_sortedSurfaces$$inline_3006$$.push($rightSurface$$inline_3002_shapeArray$$)) : ($feelerHoriz$$inline_3010_sortedSurfaces$$inline_3006$$.push($rightSurface$$inline_3002_shapeArray$$), 
  $feelerHoriz$$inline_3010_sortedSurfaces$$inline_3006$$.push($crustSurface$$inline_3003_shapeCount$$), $feelerHoriz$$inline_3010_sortedSurfaces$$inline_3006$$.push($leftSurface$$inline_3001_len$$3$$)));
  $feelerHoriz$$inline_3010_sortedSurfaces$$inline_3006$$.push($i$$317_topSurface$$inline_3000$$);
  $leftSurface$$inline_3001_len$$3$$ = $feelerHoriz$$inline_3010_sortedSurfaces$$inline_3006$$.length;
  for($i$$317_topSurface$$inline_3000$$ = 0;$i$$317_topSurface$$inline_3000$$ < $leftSurface$$inline_3001_len$$3$$;$i$$317_topSurface$$inline_3000$$++) {
    $rightSurface$$inline_3002_shapeArray$$ = $feelerHoriz$$inline_3010_sortedSurfaces$$inline_3006$$[$i$$317_topSurface$$inline_3000$$];
    $crustSurface$$inline_3003_shapeCount$$ = $rightSurface$$inline_3002_shapeArray$$.length;
    for($angleStart$$inline_3004_j$$47$$ = 0;$angleStart$$inline_3004_j$$47$$ < $crustSurface$$inline_3003_shapeCount$$;$angleStart$$inline_3004_j$$47$$++) {
      this.$_pieChart$.$_shapesContainer$.$addChild$($rightSurface$$inline_3002_shapeArray$$[$angleStart$$inline_3004_j$$47$$]), $rightSurface$$inline_3002_shapeArray$$[$angleStart$$inline_3004_j$$47$$].$render$ && $rightSurface$$inline_3002_shapeArray$$[$angleStart$$inline_3004_j$$47$$].$render$()
    }
  }
  this.$_sliceLabel$ && (this.$_pieChart$.$addChild$(this.$_sliceLabel$), $DvtChartPieRenderUtils$$.$associate$(this, [this.$_sliceLabel$]), $displayable$$25_duringDisplayAnim_feelerRad$$inline_3009_sliceDisplayables$$ ? (this.$_pieChart$.$addChild$(this.$_feelerRad$), this.$_pieChart$.$addChild$(this.$_feelerHoriz$)) : this.$_hasFeeler$ && ($displayable$$25_duringDisplayAnim_feelerRad$$inline_3009_sliceDisplayables$$ = $JSCompiler_StaticMethods__feelerFromPts$$(this, this.$_outsideFeelerStart$, 
  this.$_outsideFeelerMid$), $feelerHoriz$$inline_3010_sortedSurfaces$$inline_3006$$ = $JSCompiler_StaticMethods__feelerFromPts$$(this, this.$_outsideFeelerMid$, this.$_outsideFeelerEnd$), this.$_feelerRad$ = $displayable$$25_duringDisplayAnim_feelerRad$$inline_3009_sliceDisplayables$$, this.$_feelerHoriz$ = $feelerHoriz$$inline_3010_sortedSurfaces$$inline_3006$$));
  $JSCompiler_StaticMethods__explodeSlice$$(this);
  if(this.$_action$ || this.$_drillable$ || this.$_pieChart$.$chart$.$isSelectionSupported$()) {
    $displayable$$25_duringDisplayAnim_feelerRad$$inline_3009_sliceDisplayables$$ = this.$getDisplayables$();
    for($i$$317_topSurface$$inline_3000$$ = 0;$i$$317_topSurface$$inline_3000$$ < $displayable$$25_duringDisplayAnim_feelerRad$$inline_3009_sliceDisplayables$$.length;$i$$317_topSurface$$inline_3000$$++) {
      $displayable$$25_duringDisplayAnim_feelerRad$$inline_3009_sliceDisplayables$$[$i$$317_topSurface$$inline_3000$$].setCursor("pointer")
    }
  }
  if($displayable$$25_duringDisplayAnim_feelerRad$$inline_3009_sliceDisplayables$$ = $JSCompiler_StaticMethods_getTopDisplayable$$(this)) {
    $displayable$$25_duringDisplayAnim_feelerRad$$inline_3009_sliceDisplayables$$.$setAriaRole$("img"), this.$_updateAriaLabel$()
  }
};
function $JSCompiler_StaticMethods__feelerFromPts$$($JSCompiler_StaticMethods__feelerFromPts$self$$, $feeler_pt1$$, $color$$20_pt2_stroke$$43$$) {
  $feeler_pt1$$ = new dvt.$Line$($JSCompiler_StaticMethods__feelerFromPts$self$$.$_pieChart$.$getCtx$(), $feeler_pt1$$.x, $feeler_pt1$$.y, $color$$20_pt2_stroke$$43$$.x, $color$$20_pt2_stroke$$43$$.y);
  $color$$20_pt2_stroke$$43$$ = $JSCompiler_StaticMethods__feelerFromPts$self$$.$_pieChart$.$getOptions$().styleDefaults.pieFeelerColor;
  $color$$20_pt2_stroke$$43$$ = new dvt.$SolidStroke$($color$$20_pt2_stroke$$43$$);
  $feeler_pt1$$.$setStroke$($color$$20_pt2_stroke$$43$$);
  $JSCompiler_StaticMethods__feelerFromPts$self$$.$_pieChart$.$addChild$($feeler_pt1$$);
  return $feeler_pt1$$
}
function $JSCompiler_StaticMethods__explodeSlice$$($JSCompiler_StaticMethods__explodeSlice$self$$) {
  if(0 != $JSCompiler_StaticMethods__explodeSlice$self$$.$_explode$) {
    var $offsets_oldStartX_radian$$ = (360 - ($JSCompiler_StaticMethods__explodeSlice$self$$.$_angleStart$ + $JSCompiler_StaticMethods__explodeSlice$self$$.$_angleExtent$ / 2)) * dvt.$Math$.$RADS_PER_DEGREE$, $oldStartY_tilt$$ = $JSCompiler_StaticMethods_is3D$$($JSCompiler_StaticMethods__explodeSlice$self$$.$_pieChart$) ? 0.59 : 1, $explodeOffset_newStartX$$ = $JSCompiler_StaticMethods__explodeSlice$self$$.$_explode$ * $JSCompiler_StaticMethods__explodeSlice$self$$.$_pieChart$.$_radiusX$ * (0.5 / 
    0.45 - 1);
    $JSCompiler_StaticMethods__explodeSlice$self$$.$_explodeOffsetX$ = Math.cos($offsets_oldStartX_radian$$) * $explodeOffset_newStartX$$;
    $JSCompiler_StaticMethods__explodeSlice$self$$.$_explodeOffsetY$ = Math.sin($offsets_oldStartX_radian$$) * $oldStartY_tilt$$ * $explodeOffset_newStartX$$;
    dvt.$Agent$.$isPlatformWebkit$() && ($JSCompiler_StaticMethods__explodeSlice$self$$.$_explodeOffsetX$ = Math.round($JSCompiler_StaticMethods__explodeSlice$self$$.$_explodeOffsetX$), $JSCompiler_StaticMethods__explodeSlice$self$$.$_explodeOffsetY$ = Math.round($JSCompiler_StaticMethods__explodeSlice$self$$.$_explodeOffsetY$))
  }else {
    $JSCompiler_StaticMethods__explodeSlice$self$$.$_explodeOffsetX$ = 0, $JSCompiler_StaticMethods__explodeSlice$self$$.$_explodeOffsetY$ = 0
  }
  $JSCompiler_StaticMethods__explodeSlice$self$$.$_topSurface$ && ($offsets_oldStartX_radian$$ = $JSCompiler_StaticMethods_is3D$$($JSCompiler_StaticMethods__explodeSlice$self$$.$_pieChart$) && $JSCompiler_StaticMethods__explodeSlice$self$$.$_topSurface$[0].$getSelectionOffset$ ? $JSCompiler_StaticMethods__explodeSlice$self$$.$_topSurface$[0].$getSelectionOffset$() : [], $DvtChartPieSlice$_translateShapes$$($JSCompiler_StaticMethods__explodeSlice$self$$.$_topSurface$, $offsets_oldStartX_radian$$[0] ? 
  $offsets_oldStartX_radian$$[0] + $JSCompiler_StaticMethods__explodeSlice$self$$.$_explodeOffsetX$ : $JSCompiler_StaticMethods__explodeSlice$self$$.$_explodeOffsetX$, $offsets_oldStartX_radian$$[1] ? $offsets_oldStartX_radian$$[1] + $JSCompiler_StaticMethods__explodeSlice$self$$.$_explodeOffsetY$ : $JSCompiler_StaticMethods__explodeSlice$self$$.$_explodeOffsetY$));
  $JSCompiler_StaticMethods__explodeSlice$self$$.$_rightSurface$ && $DvtChartPieSlice$_translateShapes$$($JSCompiler_StaticMethods__explodeSlice$self$$.$_rightSurface$, $JSCompiler_StaticMethods__explodeSlice$self$$.$_explodeOffsetX$, $JSCompiler_StaticMethods__explodeSlice$self$$.$_explodeOffsetY$);
  $JSCompiler_StaticMethods__explodeSlice$self$$.$_leftSurface$ && $DvtChartPieSlice$_translateShapes$$($JSCompiler_StaticMethods__explodeSlice$self$$.$_leftSurface$, $JSCompiler_StaticMethods__explodeSlice$self$$.$_explodeOffsetX$, $JSCompiler_StaticMethods__explodeSlice$self$$.$_explodeOffsetY$);
  $JSCompiler_StaticMethods__explodeSlice$self$$.$_crustSurface$ && $DvtChartPieSlice$_translateShapes$$($JSCompiler_StaticMethods__explodeSlice$self$$.$_crustSurface$, $JSCompiler_StaticMethods__explodeSlice$self$$.$_explodeOffsetX$, $JSCompiler_StaticMethods__explodeSlice$self$$.$_explodeOffsetY$);
  if($JSCompiler_StaticMethods__explodeSlice$self$$.$_hasFeeler$) {
    var $offsets_oldStartX_radian$$ = $JSCompiler_StaticMethods__explodeSlice$self$$.$_outsideFeelerStart$.x, $oldStartY_tilt$$ = $JSCompiler_StaticMethods__explodeSlice$self$$.$_outsideFeelerStart$.y, $explodeOffset_newStartX$$ = $offsets_oldStartX_radian$$ + $JSCompiler_StaticMethods__explodeSlice$self$$.$_explodeOffsetX$, $newStartY$$ = $oldStartY_tilt$$ + $JSCompiler_StaticMethods__explodeSlice$self$$.$_explodeOffsetY$;
    $JSCompiler_StaticMethods__explodeSlice$self$$.$_feelerRad$.$setX1$($explodeOffset_newStartX$$);
    $JSCompiler_StaticMethods__explodeSlice$self$$.$_feelerRad$.$setY1$($newStartY$$);
    var $oldMidX$$ = $JSCompiler_StaticMethods__explodeSlice$self$$.$_outsideFeelerMid$.x, $oldMidY$$ = $JSCompiler_StaticMethods__explodeSlice$self$$.$_outsideFeelerMid$.y;
    0 < $oldMidX$$ - $offsets_oldStartX_radian$$ != 0 < $oldMidX$$ - $explodeOffset_newStartX$$ ? ($JSCompiler_StaticMethods__explodeSlice$self$$.$_feelerRad$.$setX2$($explodeOffset_newStartX$$), $JSCompiler_StaticMethods__explodeSlice$self$$.$_feelerHoriz$.$setX1$($explodeOffset_newStartX$$)) : ($JSCompiler_StaticMethods__explodeSlice$self$$.$_feelerRad$.$setX2$($oldMidX$$), $JSCompiler_StaticMethods__explodeSlice$self$$.$_feelerHoriz$.$setX1$($oldMidX$$));
    0 < $oldMidY$$ - $oldStartY_tilt$$ != 0 < $oldMidY$$ - $newStartY$$ ? ($JSCompiler_StaticMethods__explodeSlice$self$$.$_feelerRad$.$setY2$($newStartY$$), $JSCompiler_StaticMethods__explodeSlice$self$$.$_feelerHoriz$.$setY1$($newStartY$$)) : ($JSCompiler_StaticMethods__explodeSlice$self$$.$_feelerRad$.$setY2$($oldMidY$$), $JSCompiler_StaticMethods__explodeSlice$self$$.$_feelerHoriz$.$setY1$($oldMidY$$))
  }
  $JSCompiler_StaticMethods__explodeSlice$self$$.$_sliceLabel$ && !$JSCompiler_StaticMethods__explodeSlice$self$$.$_hasFeeler$ && $JSCompiler_StaticMethods__explodeSlice$self$$.$_sliceLabel$.$setTranslate$($JSCompiler_StaticMethods__explodeSlice$self$$.$_explodeOffsetX$, $JSCompiler_StaticMethods__explodeSlice$self$$.$_explodeOffsetY$)
}
function $DvtChartPieSlice$_translateShapes$$($shapes$$3$$, $tx$$15$$, $ty$$16$$) {
  if($shapes$$3$$) {
    for(var $len$$4$$ = $shapes$$3$$.length, $i$$318$$ = 0;$i$$318$$ < $len$$4$$;$i$$318$$++) {
      $shapes$$3$$[$i$$318$$].$setTranslate$($tx$$15$$, $ty$$16$$)
    }
  }
}
$JSCompiler_prototypeAlias$$.$getCenter$ = function $$JSCompiler_prototypeAlias$$$$getCenter$$() {
  return new dvt.$Point$(this.$_centerX$, this.$_centerY$)
};
$JSCompiler_prototypeAlias$$.getDepth = $JSCompiler_get$$("$_depth$");
$JSCompiler_prototypeAlias$$.$getAngleExtent$ = $JSCompiler_get$$("$_angleExtent$");
$JSCompiler_prototypeAlias$$.$setAngleExtent$ = $JSCompiler_set$$("$_angleExtent$");
$JSCompiler_prototypeAlias$$.$getAngleStart$ = $JSCompiler_get$$("$_angleStart$");
$JSCompiler_prototypeAlias$$.$setAngleStart$ = $JSCompiler_set$$("$_angleStart$");
function $JSCompiler_StaticMethods_setNoOutsideFeeler$$($JSCompiler_StaticMethods_setNoOutsideFeeler$self$$) {
  $JSCompiler_StaticMethods_setNoOutsideFeeler$self$$.$_outsideFeelerStart$ = $JSCompiler_alias_NULL$$;
  $JSCompiler_StaticMethods_setNoOutsideFeeler$self$$.$_outsideFeelerMid$ = $JSCompiler_alias_NULL$$;
  $JSCompiler_StaticMethods_setNoOutsideFeeler$self$$.$_outsideFeelerEnd$ = $JSCompiler_alias_NULL$$;
  $JSCompiler_StaticMethods_setNoOutsideFeeler$self$$.$_hasFeeler$ = $JSCompiler_alias_FALSE$$
}
function $JSCompiler_StaticMethods_getLabelAndFeeler$$($JSCompiler_StaticMethods_getLabelAndFeeler$self$$) {
  var $ar$$8$$ = [];
  $JSCompiler_StaticMethods_getLabelAndFeeler$self$$.$_sliceLabel$ && $ar$$8$$.push($JSCompiler_StaticMethods_getLabelAndFeeler$self$$.$_sliceLabel$);
  $JSCompiler_StaticMethods_getLabelAndFeeler$self$$.$_feelerRad$ && $ar$$8$$.push($JSCompiler_StaticMethods_getLabelAndFeeler$self$$.$_feelerRad$);
  $JSCompiler_StaticMethods_getLabelAndFeeler$self$$.$_feelerHoriz$ && $ar$$8$$.push($JSCompiler_StaticMethods_getLabelAndFeeler$self$$.$_feelerHoriz$);
  return $ar$$8$$
}
$JSCompiler_prototypeAlias$$.$setSliceLabel$ = $JSCompiler_set$$("$_sliceLabel$");
$JSCompiler_prototypeAlias$$.getValue = $JSCompiler_get$$("$_value$");
$JSCompiler_prototypeAlias$$.getId = $JSCompiler_get$$("$_id$");
$JSCompiler_prototypeAlias$$.$getSeriesIndex$ = $JSCompiler_get$$("$_seriesIndex$");
$JSCompiler_prototypeAlias$$.contains = function $$JSCompiler_prototypeAlias$$$contains$($x$$104$$, $y$$82$$) {
  for(var $ir$$4$$ = this.$_pieChart$.$getInnerRadius$(), $angle$$16_c$$3_containsAngle$$ = this.$_pieChart$.$getCenter$(), $cos_distance$$ = ($x$$104$$ - $angle$$16_c$$3_containsAngle$$.x) / this.$_radiusX$, $sin$$ = ($y$$82$$ - $angle$$16_c$$3_containsAngle$$.y) / this.$_radiusY$, $angle$$16_c$$3_containsAngle$$ = -Math.atan2($sin$$, $cos_distance$$) * (180 / Math.PI);$angle$$16_c$$3_containsAngle$$ < this.$_angleStart$;) {
    $angle$$16_c$$3_containsAngle$$ += 360
  }
  for(;360 <= $angle$$16_c$$3_containsAngle$$ - this.$_angleStart$;) {
    $angle$$16_c$$3_containsAngle$$ -= 360
  }
  $cos_distance$$ = Math.pow($cos_distance$$, 2) + Math.pow($sin$$, 2);
  $angle$$16_c$$3_containsAngle$$ = $angle$$16_c$$3_containsAngle$$ <= this.$_angleStart$ + this.$_angleExtent$;
  return Math.sqrt($cos_distance$$) > $ir$$4$$ / this.$_radiusX$ && 1 >= $cos_distance$$ && $angle$$16_c$$3_containsAngle$$
};
$JSCompiler_prototypeAlias$$.$GetAnimationParams$ = function $$JSCompiler_prototypeAlias$$$$GetAnimationParams$$() {
  var $r$$5$$ = dvt.$ColorUtils$.$getRed$(this.$_fillColor$), $g$$4$$ = dvt.$ColorUtils$.$getGreen$(this.$_fillColor$), $b$$5$$ = dvt.$ColorUtils$.$getBlue$(this.$_fillColor$), $a$$28$$ = dvt.$ColorUtils$.$getAlpha$(this.$_fillColor$);
  return[this.$_value$, this.$_radiusX$, this.$_radiusY$, this.$_explode$, this.$_centerX$, this.$_centerY$, this.$_depth$, $r$$5$$, $g$$4$$, $b$$5$$, $a$$28$$]
};
$JSCompiler_prototypeAlias$$.$SetAnimationParams$ = function $$JSCompiler_prototypeAlias$$$$SetAnimationParams$$($params$$17$$) {
  this.$_value$ = $params$$17$$[0];
  this.$_radiusX$ = $params$$17$$[1];
  this.$_radiusY$ = $params$$17$$[2];
  this.$_explode$ = $params$$17$$[3];
  this.$_centerX$ = $params$$17$$[4];
  this.$_centerY$ = $params$$17$$[5];
  this.$_depth$ = $params$$17$$[6];
  this.$_fillColor$ = dvt.$ColorUtils$.$makeRGBA$(Math.round($params$$17$$[7]), Math.round($params$$17$$[8]), Math.round($params$$17$$[9]), Math.round($params$$17$$[10]))
};
function $JSCompiler_StaticMethods_getDeletedAnimationParams$$($JSCompiler_StaticMethods_getDeletedAnimationParams$self$$) {
  var $params$$18$$ = $JSCompiler_StaticMethods_getDeletedAnimationParams$self$$.$GetAnimationParams$();
  $params$$18$$[0] = 0;
  $params$$18$$[1] = $JSCompiler_StaticMethods_getDeletedAnimationParams$self$$.$getInnerRadius$();
  $params$$18$$[2] = $JSCompiler_StaticMethods_getDeletedAnimationParams$self$$.$getInnerRadius$();
  $params$$18$$[3] = 0;
  return $params$$18$$
}
$JSCompiler_prototypeAlias$$.$animateUpdate$ = function $$JSCompiler_prototypeAlias$$$$animateUpdate$$($handler$$13$$, $oldSlice$$) {
  var $startState$$ = $oldSlice$$.$GetAnimationParams$(), $endState$$5$$ = this.$GetAnimationParams$();
  if(!dvt.$ArrayUtils$.$equals$($startState$$, $endState$$5$$)) {
    var $anim$$21$$ = new dvt.$CustomAnimation$(this.$_pieChart$.$getCtx$(), this, this.$_pieChart$.$getAnimationDuration$());
    $anim$$21$$.$_animator$.$addProp$(dvt.$Animator$.$TYPE_NUMBER_ARRAY$, this, this.$GetAnimationParams$, this.$SetAnimationParams$, $endState$$5$$);
    $handler$$13$$.add($anim$$21$$, 0);
    this.$SetAnimationParams$($startState$$)
  }
};
$JSCompiler_prototypeAlias$$.$animateInsert$ = function $$JSCompiler_prototypeAlias$$$$animateInsert$$($handler$$14$$) {
  var $anim$$22$$ = new dvt.$CustomAnimation$(this.$_pieChart$.$getCtx$(), this, this.$_pieChart$.$getAnimationDuration$());
  $anim$$22$$.$_animator$.$addProp$(dvt.$Animator$.$TYPE_NUMBER_ARRAY$, this, this.$GetAnimationParams$, this.$SetAnimationParams$, this.$GetAnimationParams$());
  $handler$$14$$.add($anim$$22$$, 0);
  this.$SetAnimationParams$($JSCompiler_StaticMethods_getDeletedAnimationParams$$(this))
};
$JSCompiler_prototypeAlias$$.$animateDelete$ = function $$JSCompiler_prototypeAlias$$$$animateDelete$$($handler$$15$$, $container$$23$$) {
  var $anim$$23_newSlices$$ = $container$$23$$.$_slices$, $oldSlices_prevId$$ = this.$_pieChart$.$_slices$, $i$$319_prevIndex$$ = dvt.$ArrayUtils$.$getIndex$($oldSlices_prevId$$, this) - 1;
  if(0 <= $i$$319_prevIndex$$) {
    $oldSlices_prevId$$ = $oldSlices_prevId$$[$i$$319_prevIndex$$].getId();
    for($i$$319_prevIndex$$ = 0;$i$$319_prevIndex$$ < $anim$$23_newSlices$$.length;$i$$319_prevIndex$$++) {
      if($anim$$23_newSlices$$[$i$$319_prevIndex$$].getId().$equals$($oldSlices_prevId$$)) {
        $anim$$23_newSlices$$.splice($i$$319_prevIndex$$ + 1, 0, this);
        break
      }
    }
  }else {
    $anim$$23_newSlices$$.splice(0, 0, this)
  }
  this.$_pieChart$ = $container$$23$$;
  $anim$$23_newSlices$$ = new dvt.$CustomAnimation$($container$$23$$.$getCtx$(), this, this.$_pieChart$.$getAnimationDuration$());
  $anim$$23_newSlices$$.$_animator$.$addProp$(dvt.$Animator$.$TYPE_NUMBER_ARRAY$, this, this.$GetAnimationParams$, this.$SetAnimationParams$, $JSCompiler_StaticMethods_getDeletedAnimationParams$$(this));
  $anim$$23_newSlices$$.$setOnEnd$(this.$_removeDeletedSlice$, this);
  $handler$$15$$.add($anim$$23_newSlices$$, 0)
};
$JSCompiler_prototypeAlias$$.$_removeDeletedSlice$ = function $$JSCompiler_prototypeAlias$$$$_removeDeletedSlice$$() {
  var $slices$$3$$ = this.$_pieChart$.$_slices$, $index$$135$$ = dvt.$ArrayUtils$.$getIndex$($slices$$3$$, this);
  0 <= $index$$135$$ && $slices$$3$$.splice($index$$135$$, 1)
};
$JSCompiler_prototypeAlias$$.$getDisplayables$ = function $$JSCompiler_prototypeAlias$$$$getDisplayables$$() {
  var $ret$$45$$ = [];
  this.$_topSurface$ && ($ret$$45$$ = $ret$$45$$.concat(this.$_topSurface$));
  this.$_leftSurface$ && ($ret$$45$$ = $ret$$45$$.concat(this.$_leftSurface$));
  this.$_rightSurface$ && ($ret$$45$$ = $ret$$45$$.concat(this.$_rightSurface$));
  this.$_crustSurface$ && ($ret$$45$$ = $ret$$45$$.concat(this.$_crustSurface$));
  this.$_sliceLabel$ && $ret$$45$$.push(this.$_sliceLabel$);
  this.$_feelerRad$ && $ret$$45$$.push(this.$_feelerRad$);
  this.$_feelerHoriz$ && $ret$$45$$.push(this.$_feelerHoriz$);
  return $ret$$45$$
};
$JSCompiler_prototypeAlias$$.$getAriaLabel$ = function $$JSCompiler_prototypeAlias$$$$getAriaLabel$$() {
  var $shortDesc$$7$$;
  $shortDesc$$7$$ = this.$_seriesIndex$ == $JSCompiler_alias_NULL$$ ? $DvtChartTooltipUtils$$.$getOtherSliceDatatip$(this.$_chart$, this.$_value$, $JSCompiler_alias_FALSE$$) : $DvtChartTooltipUtils$$.$getDatatip$(this.$_chart$, this.$_seriesIndex$, 0, $JSCompiler_alias_FALSE$$);
  var $percentageLabel_states$$6$$ = dvt.$Bundle$.$getTranslatedString$(dvt.$Bundle$.$CHART_PREFIX$, "LABEL_PERCENTAGE", $JSCompiler_alias_NULL$$), $percentage$$1$$ = $DvtChartPieLabelUtils$$.$generateSliceLabelString$(this, "percent");
  $shortDesc$$7$$ += "; " + dvt.$Bundle$.$getTranslatedString$(dvt.$Bundle$.$UTIL_PREFIX$, "COLON_SEP_LIST", [$percentageLabel_states$$6$$, $percentage$$1$$]);
  $percentageLabel_states$$6$$ = [];
  this.$isSelectable$() && $percentageLabel_states$$6$$.push(dvt.$Bundle$.$getTranslatedString$(dvt.$Bundle$.$UTIL_PREFIX$, this.$isSelected$() ? "STATE_SELECTED" : "STATE_UNSELECTED"));
  $DvtChartEventUtils$$.$isDataItemDrillable$(this.$_chart$, this.$_seriesIndex$, this.$_groupIndex$) && $percentageLabel_states$$6$$.push(dvt.$Bundle$.$getTranslation$(this.$_pieChart$.$getOptions$(), "stateDrillable", dvt.$Bundle$.$UTIL_PREFIX$, "STATE_DRILLABLE"));
  return dvt.$Displayable$.$generateAriaLabel$($shortDesc$$7$$, $percentageLabel_states$$6$$)
};
$JSCompiler_prototypeAlias$$.$_updateAriaLabel$ = function $$JSCompiler_prototypeAlias$$$$_updateAriaLabel$$() {
  var $displayable$$26$$ = $JSCompiler_StaticMethods_getTopDisplayable$$(this);
  $displayable$$26$$ && !dvt.$Agent$.$deferAriaCreation$() && $displayable$$26$$.$setAriaProperty$("label", this.$getAriaLabel$())
};
function $JSCompiler_StaticMethods_getTopDisplayable$$($JSCompiler_StaticMethods_getTopDisplayable$self$$) {
  return $JSCompiler_StaticMethods_getTopDisplayable$self$$.$_topSurface$ && 0 < $JSCompiler_StaticMethods_getTopDisplayable$self$$.$_topSurface$.length ? $JSCompiler_StaticMethods_getTopDisplayable$self$$.$_topSurface$[0] : $JSCompiler_alias_NULL$$
}
$JSCompiler_prototypeAlias$$.$isSelectable$ = function $$JSCompiler_prototypeAlias$$$$isSelectable$$() {
  return this.$_chart$.$isSelectionSupported$()
};
$JSCompiler_prototypeAlias$$.$isSelected$ = $JSCompiler_get$$("$_selected$");
$JSCompiler_prototypeAlias$$.$setSelected$ = function $$JSCompiler_prototypeAlias$$$$setSelected$$($bSelected$$1$$, $isInitial$$) {
  (this.$_selected$ = $bSelected$$1$$) ? this.$_pieChart$.$bringToFrontOfSelection$(this) : this.$_selecting$ || this.$_pieChart$.$pushToBackOfSelection$(this);
  if($DvtChartStyleUtils$$.$isSelectionHighlighted$(this.$_chart$)) {
    for(var $explode_shapeArr$$ = this.$getDisplayables$(), $anim$$24_i$$320$$ = 0;$anim$$24_i$$320$$ < $explode_shapeArr$$.length;$anim$$24_i$$320$$++) {
      $explode_shapeArr$$[$anim$$24_i$$320$$] instanceof $DvtChartSelectableWedge$$ && $explode_shapeArr$$[$anim$$24_i$$320$$].$setSelected$($bSelected$$1$$)
    }
  }
  $DvtChartStyleUtils$$.$isSelectionExploded$(this.$_chart$) && ($explode_shapeArr$$ = $bSelected$$1$$ ? 1 : 0, !$isInitial$$ && "none" != $DvtChartStyleUtils$$.$getAnimationOnDataChange$(this.$_chart$) ? ($anim$$24_i$$320$$ = new dvt.$CustomAnimation$(this.$_pieChart$.$getCtx$(), this, this.$_pieChart$.$getAnimationDuration$() / 2), $anim$$24_i$$320$$.$_animator$.$addProp$(dvt.$Animator$.$TYPE_NUMBER$, this, this.$getExplode$, this.$setExplode$, $explode_shapeArr$$), $anim$$24_i$$320$$.play()) : 
  this.$setExplode$($explode_shapeArr$$));
  this.$_updateAriaLabel$()
};
$JSCompiler_prototypeAlias$$.$showHoverEffect$ = function $$JSCompiler_prototypeAlias$$$$showHoverEffect$$() {
  this.$_selecting$ = $JSCompiler_alias_TRUE$$;
  this.$_pieChart$.$bringToFrontOfSelection$(this);
  for(var $shapeArr$$1$$ = this.$getDisplayables$(), $i$$321$$ = 0;$i$$321$$ < $shapeArr$$1$$.length;$i$$321$$++) {
    $shapeArr$$1$$[$i$$321$$] instanceof $DvtChartSelectableWedge$$ && $shapeArr$$1$$[$i$$321$$].$showHoverEffect$()
  }
};
$JSCompiler_prototypeAlias$$.$hideHoverEffect$ = function $$JSCompiler_prototypeAlias$$$$hideHoverEffect$$() {
  this.$_selecting$ = $JSCompiler_alias_FALSE$$;
  this.$_selected$ || this.$_pieChart$.$pushToBackOfSelection$(this);
  for(var $shapeArr$$2$$ = this.$getDisplayables$(), $i$$322$$ = 0;$i$$322$$ < $shapeArr$$2$$.length;$i$$322$$++) {
    $shapeArr$$2$$[$i$$322$$] instanceof $DvtChartSelectableWedge$$ && $shapeArr$$2$$[$i$$322$$].$hideHoverEffect$()
  }
};
$JSCompiler_prototypeAlias$$.$getDatatip$ = function $$JSCompiler_prototypeAlias$$$$getDatatip$$($target$$57$$) {
  return $target$$57$$ == this.$_sliceLabel$ && this.$_sliceLabel$ && this.$_sliceLabel$.$isTruncated$() ? this.$_sliceLabelString$ : this.$getTooltip$()
};
$JSCompiler_prototypeAlias$$.$getDatatipColor$ = function $$JSCompiler_prototypeAlias$$$$getDatatipColor$$() {
  return this.$getFillColor$()
};
$JSCompiler_prototypeAlias$$.$getCategories$ = function $$JSCompiler_prototypeAlias$$$$getCategories$$() {
  return this.$_categories$ && 0 < this.$_categories$.length ? this.$_categories$ : [this.getId().$getSeries$()]
};
$JSCompiler_prototypeAlias$$.$getNextNavigable$ = function $$JSCompiler_prototypeAlias$$$$getNextNavigable$$($event$$226_rtl$$2$$) {
  var $keyCode$$14$$ = $event$$226_rtl$$2$$.keyCode;
  if($event$$226_rtl$$2$$.type == dvt.$MouseEvent$.$CLICK$ || $keyCode$$14$$ == dvt.$KeyboardEvent$.$SPACE$ && $event$$226_rtl$$2$$.ctrlKey) {
    return this
  }
  $event$$226_rtl$$2$$ = dvt.$Agent$.$isRightToLeft$(this.$_chart$.$getCtx$());
  var $slices$$4$$ = this.$_pieChart$.$_slices$, $idx$$11$$ = dvt.$ArrayUtils$.$getIndex$($slices$$4$$, this), $next$$4$$ = $JSCompiler_alias_NULL$$;
  if($keyCode$$14$$ == dvt.$KeyboardEvent$.$RIGHT_ARROW$ || $keyCode$$14$$ == dvt.$KeyboardEvent$.$DOWN_ARROW$ && !$event$$226_rtl$$2$$ || $keyCode$$14$$ == dvt.$KeyboardEvent$.$UP_ARROW$ && $event$$226_rtl$$2$$) {
    $next$$4$$ = $idx$$11$$ < $slices$$4$$.length - 1 ? $slices$$4$$[$idx$$11$$ + 1] : $slices$$4$$[0]
  }else {
    if($keyCode$$14$$ == dvt.$KeyboardEvent$.$LEFT_ARROW$ || $keyCode$$14$$ == dvt.$KeyboardEvent$.$DOWN_ARROW$ && $event$$226_rtl$$2$$ || $keyCode$$14$$ == dvt.$KeyboardEvent$.$UP_ARROW$ && !$event$$226_rtl$$2$$) {
      $next$$4$$ = 0 == $idx$$11$$ ? $slices$$4$$[$slices$$4$$.length - 1] : $slices$$4$$[$idx$$11$$ - 1]
    }
  }
  return $next$$4$$
};
$JSCompiler_prototypeAlias$$.$getKeyboardBoundingBox$ = function $$JSCompiler_prototypeAlias$$$$getKeyboardBoundingBox$$($targetCoordinateSpace$$17$$) {
  var $displayables$$7$$ = this.$getDisplayables$();
  return $displayables$$7$$[0] ? $displayables$$7$$[0].$getDimensions$($targetCoordinateSpace$$17$$) : new dvt.$Rectangle$(0, 0, 0, 0)
};
$JSCompiler_prototypeAlias$$.$getTargetElem$ = function $$JSCompiler_prototypeAlias$$$$getTargetElem$$() {
  var $displayables$$8$$ = this.$getDisplayables$();
  return $displayables$$8$$[0] ? $displayables$$8$$[0].$getElem$() : $JSCompiler_alias_NULL$$
};
$JSCompiler_prototypeAlias$$.$showKeyboardFocusEffect$ = function $$JSCompiler_prototypeAlias$$$$showKeyboardFocusEffect$$() {
  this.$_isShowingKeyboardFocusEffect$ = $JSCompiler_alias_TRUE$$;
  this.$showHoverEffect$()
};
$JSCompiler_prototypeAlias$$.$hideKeyboardFocusEffect$ = function $$JSCompiler_prototypeAlias$$$$hideKeyboardFocusEffect$$() {
  this.$_isShowingKeyboardFocusEffect$ = $JSCompiler_alias_FALSE$$;
  this.$hideHoverEffect$()
};
$JSCompiler_prototypeAlias$$.$isShowingKeyboardFocusEffect$ = $JSCompiler_get$$("$_isShowingKeyboardFocusEffect$");
$JSCompiler_prototypeAlias$$.$getExplode$ = $JSCompiler_get$$("$_explode$");
$JSCompiler_prototypeAlias$$.$setExplode$ = function $$JSCompiler_prototypeAlias$$$$setExplode$$($explode$$1$$) {
  this.$_explode$ = $explode$$1$$;
  $JSCompiler_StaticMethods__explodeSlice$$(this)
};
$JSCompiler_prototypeAlias$$.$getSeriesLabel$ = $JSCompiler_get$$("$_seriesLabel$");
$JSCompiler_prototypeAlias$$.$getFillColor$ = $JSCompiler_get$$("$_fillColor$");
$JSCompiler_prototypeAlias$$.$getFillPattern$ = $JSCompiler_get$$("$_fillPattern$");
$JSCompiler_prototypeAlias$$.$getStrokeColor$ = $JSCompiler_get$$("$_strokeColor$");
$JSCompiler_prototypeAlias$$.$getBorderWidth$ = $JSCompiler_get$$("$_borderWidth$");
$JSCompiler_prototypeAlias$$.$getInnerRadius$ = function $$JSCompiler_prototypeAlias$$$$getInnerRadius$$() {
  return this.$_pieChart$.$getInnerRadius$()
};
$JSCompiler_prototypeAlias$$.$getTooltip$ = function $$JSCompiler_prototypeAlias$$$$getTooltip$$() {
  return this.$_seriesIndex$ == $JSCompiler_alias_NULL$$ ? $DvtChartTooltipUtils$$.$getOtherSliceDatatip$(this.$_chart$, this.$_value$, $JSCompiler_alias_TRUE$$) : $DvtChartTooltipUtils$$.$getDatatip$(this.$_chart$, this.$_seriesIndex$, 0, $JSCompiler_alias_TRUE$$)
};
$JSCompiler_prototypeAlias$$.$getAction$ = $JSCompiler_get$$("$_action$");
$JSCompiler_prototypeAlias$$.$isDrillable$ = $JSCompiler_get$$("$_drillable$");
$JSCompiler_prototypeAlias$$.$getShowPopupBehaviors$ = $JSCompiler_get$$("$_showPopupBehaviors$");
$JSCompiler_prototypeAlias$$.$getSeriesIndex$ = $JSCompiler_get$$("$_seriesIndex$");
function $DvtChartAnimOnDisplay$$() {
}
dvt.$Obj$.$createSubclass$($DvtChartAnimOnDisplay$$, dvt.$Obj$);
$DvtChartAnimOnDisplay$$.$createAnimation$ = function $$DvtChartAnimOnDisplay$$$$createAnimation$$($chart$$27$$, $arPlayables_type$$99$$, $duration$$13$$) {
  $arPlayables_type$$99$$ = [];
  if($DvtChartTypeUtils$$.$isBLAC$($chart$$27$$)) {
    $DvtChartAnimOnDisplay$$.$_animBarLineArea$($chart$$27$$, $duration$$13$$, $arPlayables_type$$99$$)
  }else {
    if($DvtChartTypeUtils$$.$isScatterBubble$($chart$$27$$) || $DvtChartTypeUtils$$.$isFunnel$($chart$$27$$)) {
      $DvtChartAnimOnDisplay$$.$_animBubbleScatterFunnel$($chart$$27$$, $duration$$13$$, $arPlayables_type$$99$$)
    }else {
      if($DvtChartTypeUtils$$.$isPie$($chart$$27$$) && $chart$$27$$.$pieChart$) {
        return $chart$$27$$.$pieChart$.$getDisplayAnimation$()
      }
    }
  }
  return 0 < $arPlayables_type$$99$$.length ? new dvt.$ParallelPlayable$($chart$$27$$.$getCtx$(), $arPlayables_type$$99$$) : $JSCompiler_alias_NULL$$
};
$DvtChartAnimOnDisplay$$.$_animBarLineArea$ = function $$DvtChartAnimOnDisplay$$$$_animBarLineArea$$($chart$$28$$, $duration$$14$$, $arPlayables$$1$$) {
  var $objs$$3$$ = $JSCompiler_StaticMethods_getChartObjPeers$$($chart$$28$$), $objCount$$ = $objs$$3$$ ? $objs$$3$$.length : 0;
  if($objCount$$) {
    for(var $obj$$122$$, $nodePlayable$$10_peer$$3$$, $i$$323$$ = 0;$i$$323$$ < $objCount$$;$i$$323$$++) {
      $nodePlayable$$10_peer$$3$$ = $objs$$3$$[$i$$323$$];
      $obj$$122$$ = $nodePlayable$$10_peer$$3$$.$getDisplayables$()[0];
      var $seriesType$$ = $nodePlayable$$10_peer$$3$$.$getSeriesType$();
      $nodePlayable$$10_peer$$3$$ = $JSCompiler_alias_NULL$$;
      if($obj$$122$$ instanceof $DvtChartBar$$ || $obj$$122$$ instanceof $DvtChartPolarBar$$ || $obj$$122$$ instanceof $DvtChartCandlestick$$) {
        $nodePlayable$$10_peer$$3$$ = $obj$$122$$.$getDisplayAnimation$($duration$$14$$)
      }else {
        if($obj$$122$$ instanceof $DvtChartLineArea$$) {
          $nodePlayable$$10_peer$$3$$ = "line" == $seriesType$$ ? $DvtChartAnimOnDisplay$$.$_getLinePlayable$($chart$$28$$, $obj$$122$$, $duration$$14$$) : $DvtChartAnimOnDisplay$$.$_getAreaPlayable$($chart$$28$$, $obj$$122$$, $duration$$14$$)
        }else {
          if($obj$$122$$ instanceof dvt.$SimpleMarker$ || $obj$$122$$ instanceof $DvtChartRangeMarker$$) {
            if($obj$$122$$ instanceof $DvtChartLineMarker$$ && !$obj$$122$$.$isSelected$()) {
              continue
            }
            $nodePlayable$$10_peer$$3$$ = new dvt.$AnimFadeIn$($chart$$28$$.$getCtx$(), $obj$$122$$, $duration$$14$$ - 0.8, 0.8)
          }
        }
      }
      $nodePlayable$$10_peer$$3$$ && $arPlayables$$1$$.push($nodePlayable$$10_peer$$3$$)
    }
  }
};
$DvtChartAnimOnDisplay$$.$_animBubbleScatterFunnel$ = function $$DvtChartAnimOnDisplay$$$$_animBubbleScatterFunnel$$($chart$$29$$, $duration$$15$$, $arPlayables$$2$$) {
  var $objs$$4$$ = $chart$$29$$.$getObjects$(), $objCount$$1$$ = $objs$$4$$ ? $objs$$4$$.length : 0;
  if($objCount$$1$$) {
    for(var $obj$$123_peer$$4$$, $nodePlayable$$11$$, $i$$324$$ = 0;$i$$324$$ < $objCount$$1$$;$i$$324$$++) {
      $obj$$123_peer$$4$$ = $objs$$4$$[$i$$324$$], $obj$$123_peer$$4$$ = $obj$$123_peer$$4$$.$getDisplayables$()[0], $obj$$123_peer$$4$$ instanceof dvt.$SimpleMarker$ ? $nodePlayable$$11$$ = new dvt.$AnimPopIn$($chart$$29$$.$getCtx$(), $obj$$123_peer$$4$$, $JSCompiler_alias_TRUE$$, $duration$$15$$) : $obj$$123_peer$$4$$ instanceof $DvtChartFunnelSlice$$ && ($nodePlayable$$11$$ = $DvtChartAnimOnDisplay$$.$_getFunnelPlayable$($chart$$29$$, $obj$$123_peer$$4$$, $duration$$15$$)), $nodePlayable$$11$$ && 
      $arPlayables$$2$$.push($nodePlayable$$11$$)
    }
  }
};
$DvtChartAnimOnDisplay$$.$_getAreaPlayable$ = function $$DvtChartAnimOnDisplay$$$$_getAreaPlayable$$($chart$$30_nodePlayable$$12$$, $shape$$35$$, $duration$$16_topAnim$$) {
  var $context$$136$$ = $chart$$30_nodePlayable$$12$$.$getCtx$(), $baselineCoord$$5$$ = $shape$$35$$.$_baseline$, $baseAnim_baseParams$$;
  if($shape$$35$$.$isArea$()) {
    var $baseCoords$$ = $shape$$35$$.$_arBaseCoord$;
    $baseAnim_baseParams$$ = $shape$$35$$.$getBaseAnimationParams$();
    for(var $baseEndState_endState$$6$$ = $baseAnim_baseParams$$.slice(0), $j$$48$$ = 0;$j$$48$$ < $baseAnim_baseParams$$.length;$j$$48$$++) {
      if(1 == $j$$48$$ % 4 || 2 == $j$$48$$ % 4) {
        $baseAnim_baseParams$$[$j$$48$$] = $baselineCoord$$5$$
      }
    }
    $shape$$35$$.$setBaseAnimationParams$($baseAnim_baseParams$$);
    $baseAnim_baseParams$$ = new dvt.$CustomAnimation$($context$$136$$, $shape$$35$$, $duration$$16_topAnim$$);
    $baseAnim_baseParams$$.$_animator$.$addProp$(dvt.$Animator$.$TYPE_NUMBER_ARRAY$, $shape$$35$$, $shape$$35$$.$getBaseAnimationParams$, $shape$$35$$.$setBaseAnimationParams$, $baseEndState_endState$$6$$)
  }
  for(var $coords$$16$$ = $shape$$35$$.$_arCoord$, $params$$19$$ = $shape$$35$$.$getAnimationParams$(), $baseEndState_endState$$6$$ = $params$$19$$.slice(0), $j$$48$$ = 0;$j$$48$$ < $params$$19$$.length;$j$$48$$++) {
    if(1 == $j$$48$$ % 4 || 2 == $j$$48$$ % 4) {
      $params$$19$$[$j$$48$$] = $baselineCoord$$5$$
    }
  }
  $shape$$35$$.$setAnimationParams$($params$$19$$);
  $duration$$16_topAnim$$ = new dvt.$CustomAnimation$($context$$136$$, $shape$$35$$, $duration$$16_topAnim$$);
  $duration$$16_topAnim$$.$_animator$.$addProp$(dvt.$Animator$.$TYPE_NUMBER_ARRAY$, $shape$$35$$, $shape$$35$$.$getAnimationParams$, $shape$$35$$.$setAnimationParams$, $baseEndState_endState$$6$$);
  $chart$$30_nodePlayable$$12$$ = new dvt.$ParallelPlayable$($chart$$30_nodePlayable$$12$$.$getCtx$(), $baseAnim_baseParams$$, $duration$$16_topAnim$$);
  $chart$$30_nodePlayable$$12$$.$setOnEnd$(function() {
    $shape$$35$$.$setCoords$($coords$$16$$, $baseCoords$$)
  });
  return $chart$$30_nodePlayable$$12$$
};
$DvtChartAnimOnDisplay$$.$_getFunnelPlayable$ = function $$DvtChartAnimOnDisplay$$$$_getFunnelPlayable$$($chart$$31_context$$137$$, $slice$$9$$, $duration$$17_nodePlayable2$$) {
  $chart$$31_context$$137$$ = $chart$$31_context$$137$$.$getCtx$();
  var $arPoints$$7_nodePlayable1$$ = $slice$$9$$.$getAnimationParams$(), $endState1$$ = $arPoints$$7_nodePlayable1$$.slice(0), $endState2$$ = $arPoints$$7_nodePlayable1$$.slice(0);
  $arPoints$$7_nodePlayable1$$[0] = 0;
  $arPoints$$7_nodePlayable1$$[2] = 0;
  $endState1$$[2] = 0;
  $slice$$9$$.$setAnimationParams$($arPoints$$7_nodePlayable1$$);
  $arPoints$$7_nodePlayable1$$ = new dvt.$CustomAnimation$($chart$$31_context$$137$$, $slice$$9$$, $duration$$17_nodePlayable2$$ / 2);
  $arPoints$$7_nodePlayable1$$.$_animator$.$addProp$(dvt.$Animator$.$TYPE_NUMBER_ARRAY$, $slice$$9$$, $slice$$9$$.$getAnimationParams$, $slice$$9$$.$setAnimationParams$, $endState1$$);
  $duration$$17_nodePlayable2$$ = new dvt.$CustomAnimation$($chart$$31_context$$137$$, $slice$$9$$, $duration$$17_nodePlayable2$$ / 2);
  $duration$$17_nodePlayable2$$.$_animator$.$addProp$(dvt.$Animator$.$TYPE_NUMBER_ARRAY$, $slice$$9$$, $slice$$9$$.$getAnimationParams$, $slice$$9$$.$setAnimationParams$, $endState2$$);
  return new dvt.$SequentialPlayable$($chart$$31_context$$137$$, [$arPoints$$7_nodePlayable1$$, $duration$$17_nodePlayable2$$])
};
$DvtChartAnimOnDisplay$$.$_getLinePlayable$ = function $$DvtChartAnimOnDisplay$$$$_getLinePlayable$$($chart$$32_nodePlayable$$13$$, $line$$8$$, $duration$$18$$) {
  var $coords$$17$$ = $line$$8$$.$_arCoord$, $params$$20$$ = $line$$8$$.$getAnimationParams$(), $endState$$7$$ = $params$$20$$.slice(0);
  $DvtChartAnimOnDisplay$$.$_getMeanPoints$($params$$20$$);
  $line$$8$$.$setAnimationParams$($params$$20$$);
  $chart$$32_nodePlayable$$13$$ = new dvt.$CustomAnimation$($chart$$32_nodePlayable$$13$$.$getCtx$(), $line$$8$$, $duration$$18$$);
  $chart$$32_nodePlayable$$13$$.$_animator$.$addProp$(dvt.$Animator$.$TYPE_NUMBER_ARRAY$, $line$$8$$, $line$$8$$.$getAnimationParams$, $line$$8$$.$setAnimationParams$, $endState$$7$$);
  $chart$$32_nodePlayable$$13$$.$setOnEnd$(function() {
    $line$$8$$.$setCoords$($coords$$17$$)
  });
  return $chart$$32_nodePlayable$$13$$
};
$DvtChartAnimOnDisplay$$.$_getMeanPoints$ = function $$DvtChartAnimOnDisplay$$$$_getMeanPoints$$($params$$21$$) {
  var $mean$$ = 0, $min$$1$$ = Number.MAX_VALUE, $max$$1$$ = Number.MIN_VALUE, $len$$5$$ = $params$$21$$.length, $i$$325$$;
  for($i$$325$$ = 0;$i$$325$$ < $len$$5$$;$i$$325$$++) {
    var $v$$ = $params$$21$$[$i$$325$$];
    0 == $i$$325$$ % 4 || (3 == $i$$325$$ % 4 || Infinity == $v$$) || ($v$$ < $min$$1$$ && ($min$$1$$ = $v$$), $v$$ > $max$$1$$ && ($max$$1$$ = $v$$), $mean$$ += $v$$)
  }
  8 < $len$$5$$ ? ($mean$$ = $mean$$ - 2 * $min$$1$$ - 2 * $max$$1$$, $mean$$ /= $len$$5$$ / 2 - 4) : $mean$$ /= $len$$5$$ / 2;
  for($i$$325$$ = 0;$i$$325$$ < $len$$5$$;$i$$325$$++) {
    if(1 == $i$$325$$ % 4 || 2 == $i$$325$$ % 4) {
      $params$$21$$[$i$$325$$] = $mean$$
    }
  }
};
function $DvtChartAnimOnDC$$() {
}
dvt.$Obj$.$createSubclass$($DvtChartAnimOnDC$$, dvt.$Obj$);
$DvtChartAnimOnDC$$.$createAnimation$ = function $$DvtChartAnimOnDC$$$$createAnimation$$($handler$$16_i$$326_oldChart$$1$$, $newChart_newLabels$$, $ctx_type$$100$$, $duration$$19$$, $delContainer$$) {
  if(!$DvtChartAnimOnDC$$.$_canAnimate$($handler$$16_i$$326_oldChart$$1$$, $newChart_newLabels$$)) {
    return $JSCompiler_alias_NULL$$
  }
  $ctx_type$$100$$ = $newChart_newLabels$$.$getCtx$();
  var $arOldList$$ = [], $arNewList$$ = [];
  $DvtChartTypeUtils$$.$isPie$($newChart_newLabels$$) ? ($arOldList$$.push($handler$$16_i$$326_oldChart$$1$$.$pieChart$), $arNewList$$.push($newChart_newLabels$$.$pieChart$)) : $DvtChartAnimOnDC$$.$_buildAnimLists$($arOldList$$, $handler$$16_i$$326_oldChart$$1$$, $arNewList$$, $newChart_newLabels$$, $duration$$19$$);
  var $playable$$13$$;
  $handler$$16_i$$326_oldChart$$1$$ = new dvt.$DataAnimationHandler$($ctx_type$$100$$, $delContainer$$);
  $handler$$16_i$$326_oldChart$$1$$.$constructAnimation$($arOldList$$, $arNewList$$);
  0 < $handler$$16_i$$326_oldChart$$1$$.$_playables$.length && ($playable$$13$$ = $handler$$16_i$$326_oldChart$$1$$.$getAnimation$($JSCompiler_alias_TRUE$$));
  $newChart_newLabels$$ = $JSCompiler_StaticMethods_getDataLabels$$($newChart_newLabels$$);
  if($playable$$13$$ && 0 < $newChart_newLabels$$.length) {
    for($handler$$16_i$$326_oldChart$$1$$ = 0;$handler$$16_i$$326_oldChart$$1$$ < $newChart_newLabels$$.length;$handler$$16_i$$326_oldChart$$1$$++) {
      $newChart_newLabels$$[$handler$$16_i$$326_oldChart$$1$$].$setAlpha$(0)
    }
    $playable$$13$$ = new dvt.$SequentialPlayable$($ctx_type$$100$$, $playable$$13$$, new dvt.$AnimFadeIn$($ctx_type$$100$$, $newChart_newLabels$$, $duration$$19$$ / 4))
  }
  return $playable$$13$$
};
$DvtChartAnimOnDC$$.$_buildAnimLists$ = function $$DvtChartAnimOnDC$$$$_buildAnimLists$$($arOldList$$1_i$$327$$, $oldChart$$2$$, $arNewList$$1$$, $newChart$$1$$, $duration$$20$$) {
  var $j$$49$$, $ar$$9$$ = $JSCompiler_StaticMethods_getChartObjPeers$$($oldChart$$2$$), $aOut$$ = $arOldList$$1_i$$327$$, $peer$$5$$, $obj$$124$$, $dch$$;
  for($arOldList$$1_i$$327$$ = 0;2 > $arOldList$$1_i$$327$$;$arOldList$$1_i$$327$$++) {
    for($j$$49$$ = 0;$j$$49$$ < $ar$$9$$.length;$j$$49$$++) {
      $peer$$5$$ = $ar$$9$$[$j$$49$$];
      $obj$$124$$ = $peer$$5$$.$getDisplayables$()[0];
      $dch$$ = $JSCompiler_alias_NULL$$;
      if($obj$$124$$ instanceof $DvtChartFunnelSlice$$) {
        $dch$$ = new $DvtChartDataChangeFunnelSlice$$($peer$$5$$, $duration$$20$$)
      }else {
        if($obj$$124$$ instanceof $DvtChartBar$$ || $obj$$124$$ instanceof $DvtChartPolarBar$$) {
          $dch$$ = new $DvtChartDataChangeBar$$($peer$$5$$, $duration$$20$$)
        }else {
          if($obj$$124$$ instanceof $DvtChartLineArea$$) {
            $dch$$ = new $DvtChartDataChangeLineArea$$($peer$$5$$, $duration$$20$$)
          }else {
            if($obj$$124$$ instanceof dvt.$SimpleMarker$) {
              if($obj$$124$$ instanceof $DvtChartLineMarker$$ && !$obj$$124$$.$isSelected$()) {
                continue
              }
              $dch$$ = new $DvtChartDataChangeMarker$$($peer$$5$$, $duration$$20$$)
            }else {
              if($obj$$124$$ instanceof $DvtChartRangeMarker$$) {
                if($obj$$124$$.$_isInvisible$ && !$obj$$124$$.$isSelected$()) {
                  continue
                }
                $dch$$ = new $DvtChartDataChangeRangeMarker$$($peer$$5$$, $duration$$20$$)
              }else {
                $obj$$124$$ instanceof $DvtChartCandlestick$$ && ($dch$$ = new $DvtChartDataChangeAbstract$$($peer$$5$$, $duration$$20$$))
              }
            }
          }
        }
      }
      $dch$$ && ($aOut$$.push($dch$$), $dch$$.$_oldChart$ = $oldChart$$2$$)
    }
    $aOut$$ = $arNewList$$1$$;
    $ar$$9$$ = $JSCompiler_StaticMethods_getChartObjPeers$$($newChart$$1$$)
  }
};
$DvtChartAnimOnDC$$.$_canAnimate$ = function $$DvtChartAnimOnDC$$$$_canAnimate$$($oldChart$$3$$, $newChart$$2$$) {
  return $DvtChartTypeUtils$$.$isPie$($oldChart$$3$$) && $DvtChartTypeUtils$$.$isPie$($newChart$$2$$) ? $oldChart$$3$$ && $newChart$$2$$ : $DvtChartTypeUtils$$.$isPolar$($oldChart$$3$$) != $DvtChartTypeUtils$$.$isPolar$($newChart$$2$$) ? $JSCompiler_alias_FALSE$$ : $DvtChartTypeUtils$$.$isBLAC$($oldChart$$3$$) && $DvtChartTypeUtils$$.$isBLAC$($newChart$$2$$) ? $JSCompiler_alias_TRUE$$ : $DvtChartTypeUtils$$.$isScatterBubble$($oldChart$$3$$) && $DvtChartTypeUtils$$.$isScatterBubble$($newChart$$2$$) ? 
  $JSCompiler_alias_TRUE$$ : $oldChart$$3$$.$getType$() == $newChart$$2$$.$getType$() ? $JSCompiler_alias_TRUE$$ : $JSCompiler_alias_FALSE$$
};
function $DvtChartDataChange$$($chart$$33$$) {
  this.$Options$ = $chart$$33$$.$Options$;
  this.$Peers$ = $chart$$33$$.$Peers$;
  this.$SeriesStyleArray$ = $chart$$33$$.$SeriesStyleArray$;
  this.$Cache$ = $chart$$33$$.$Cache$;
  this.$pieChart$ = $chart$$33$$.$pieChart$
}
dvt.$Obj$.$createSubclass$($DvtChartDataChange$$, dvt.$Chart$);
function $DvtChartDataChangeAbstract$$($peer$$6$$, $duration$$21$$) {
  this.Init($peer$$6$$, $duration$$21$$)
}
dvt.$Obj$.$createSubclass$($DvtChartDataChangeAbstract$$, dvt.$Obj$);
$JSCompiler_prototypeAlias$$ = $DvtChartDataChangeAbstract$$.prototype;
$JSCompiler_prototypeAlias$$.$animateUpdate$ = function $$JSCompiler_prototypeAlias$$$$animateUpdate$$($handler$$17$$, $oldNode$$8$$) {
  var $oldShape$$8$$ = $oldNode$$8$$.$_shape$;
  this.$_shape$ && this.$_shape$.$getUpdateAnimation$ && $handler$$17$$.add(this.$_shape$.$getUpdateAnimation$(this.$_updateDuration$, $oldShape$$8$$), 1)
};
$JSCompiler_prototypeAlias$$.$animateInsert$ = function $$JSCompiler_prototypeAlias$$$$animateInsert$$($handler$$18$$) {
  if(this.$_shape$ && this.$_shape$.$getInsertAnimation$) {
    $handler$$18$$.add(this.$_shape$.$getInsertAnimation$(this.$_insertDuration$), 2)
  }else {
    var $nodePlayable$$14$$ = new dvt.$AnimFadeIn$(this.$_shape$.$getCtx$(), this.$_shape$, this.$_insertDuration$);
    $handler$$18$$.add($nodePlayable$$14$$, 0)
  }
};
$JSCompiler_prototypeAlias$$.$animateDelete$ = function $$JSCompiler_prototypeAlias$$$$animateDelete$$($handler$$19$$, $delContainer$$1$$) {
  $delContainer$$1$$.$addChild$(this.$_shape$);
  if(this.$_shape$ && this.$_shape$.$getDeleteAnimation$) {
    $handler$$19$$.add(this.$_shape$.$getDeleteAnimation$(this.$_deleteDuration$), 0)
  }else {
    var $nodePlayable$$15$$ = new dvt.$AnimFadeOut$(this.$_shape$.$getCtx$(), this.$_shape$, this.$_deleteDuration$);
    $handler$$19$$.add($nodePlayable$$15$$, 0)
  }
};
$JSCompiler_prototypeAlias$$.getId = $JSCompiler_get$$("$_animId$");
$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($peer$$7$$, $duration$$22$$) {
  this.$_peer$ = $peer$$7$$;
  this.$_updateDuration$ = 0.75 * $duration$$22$$;
  this.$_insertDuration$ = 0.5 * $duration$$22$$;
  this.$_deleteDuration$ = 0.5 * $duration$$22$$;
  this.$_shape$ = $peer$$7$$.$getDisplayables$()[0];
  this.$_animId$ = $peer$$7$$.$getSeries$() + "/" + $peer$$7$$.$getGroup$()
};
function $DvtChartDataChangeBar$$($peer$$8$$, $duration$$23$$) {
  this.Init($peer$$8$$, $duration$$23$$)
}
dvt.$Obj$.$createSubclass$($DvtChartDataChangeBar$$, $DvtChartDataChangeAbstract$$);
$JSCompiler_prototypeAlias$$ = $DvtChartDataChangeBar$$.prototype;
$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($peer$$9$$, $duration$$24$$) {
  $DvtChartDataChangeBar$$.$superclass$.Init.call(this, $peer$$9$$, $duration$$24$$);
  this.$_indicator$ = $JSCompiler_alias_NULL$$;
  this.$_animId$ += "/bar"
};
$JSCompiler_prototypeAlias$$.$animateInsert$ = function $$JSCompiler_prototypeAlias$$$$animateInsert$$($handler$$20$$) {
  var $playable$$14$$ = this.$_shape$.$getInsertAnimation$(this.$_insertDuration$);
  $handler$$20$$.add($playable$$14$$, 2)
};
$JSCompiler_prototypeAlias$$.$animateDelete$ = function $$JSCompiler_prototypeAlias$$$$animateDelete$$($handler$$21$$, $delContainer$$2$$) {
  $delContainer$$2$$.$addChild$(this.$_shape$);
  var $playable$$15$$ = this.$_shape$.$getDeleteAnimation$(this.$_deleteDuration$);
  $handler$$21$$.add($playable$$15$$, 0)
};
$JSCompiler_prototypeAlias$$.$animateUpdate$ = function $$JSCompiler_prototypeAlias$$$$animateUpdate$$($handler$$22$$, $oldDC$$) {
  var $nodePlayable$$16_oldChart$$4$$ = this.$_oldChart$, $newChart$$3$$ = this.$_peer$.$_chart$, $bFlip$$1_endState$$8$$ = $DvtChartTypeUtils$$.$isHorizontal$($nodePlayable$$16_oldChart$$4$$) != $DvtChartTypeUtils$$.$isHorizontal$($newChart$$3$$), $startState$$1$$ = $oldDC$$.$_getAnimationParams$($bFlip$$1_endState$$8$$), $bFlip$$1_endState$$8$$ = this.$_getAnimationParams$(), $bSkipFillAnimation$$1$$ = $oldDC$$.$_shape$.$isSelected$() || this.$_shape$.$isSelected$(), $startFill$$1$$ = $oldDC$$.$_shape$.$getPrimaryFill$().$clone$(), 
  $endFill$$1$$ = this.$_shape$.$getPrimaryFill$();
  if(!dvt.$ArrayUtils$.$equals$($startState$$1$$, $bFlip$$1_endState$$8$$) || !$startFill$$1$$.$equals$($endFill$$1$$)) {
    var $newSIdx$$ = this.$_peer$.$getSeriesIndex$(), $oldSIdx$$ = $oldDC$$.$_peer$.$getSeriesIndex$(), $newGIdx$$ = this.$_peer$.$getGroupIndex$(), $oldGIdx$$ = $oldDC$$.$_peer$.$getGroupIndex$();
    "none" !== $DvtChartStyleUtils$$.$getAnimationIndicators$($newChart$$3$$) && (this.$_indicator$ = $DvtChartDataChangeUtils$$.$makeIndicator$($nodePlayable$$16_oldChart$$4$$, $oldSIdx$$, $oldGIdx$$, $newChart$$3$$, $newSIdx$$, $newGIdx$$));
    this.$_setAnimationParams$($startState$$1$$);
    $bSkipFillAnimation$$1$$ || this.$_shape$.$setFill$($startFill$$1$$);
    $nodePlayable$$16_oldChart$$4$$ = new dvt.$CustomAnimation$(this.$_shape$.$getCtx$(), this, this.$_updateDuration$);
    $nodePlayable$$16_oldChart$$4$$.$_animator$.$addProp$(dvt.$Animator$.$TYPE_NUMBER_ARRAY$, this, this.$_getAnimationParams$, this.$_setAnimationParams$, $bFlip$$1_endState$$8$$);
    $bSkipFillAnimation$$1$$ || $nodePlayable$$16_oldChart$$4$$.$_animator$.$addProp$(dvt.$Animator$.$TYPE_FILL$, this.$_shape$, this.$_shape$.$getFill$, this.$_shape$.$setFill$, $endFill$$1$$);
    this.$_indicator$ && ($nodePlayable$$16_oldChart$$4$$.$setOnEnd$(this.$_onEndAnimation$, this), this.$_indicator$.$setAlpha$(0));
    $handler$$22$$.add($nodePlayable$$16_oldChart$$4$$, 1)
  }
};
$JSCompiler_prototypeAlias$$.$_getAnimationParams$ = function $$JSCompiler_prototypeAlias$$$$_getAnimationParams$$($bFlip$$2$$) {
  return this.$_shape$.$getAnimationParams$($bFlip$$2$$)
};
$JSCompiler_prototypeAlias$$.$_setAnimationParams$ = function $$JSCompiler_prototypeAlias$$$$_setAnimationParams$$($ar$$10$$) {
  this.$_shape$.$setAnimationParams$($ar$$10$$, this.$_indicator$)
};
$JSCompiler_prototypeAlias$$.$_onEndAnimation$ = function $$JSCompiler_prototypeAlias$$$$_onEndAnimation$$() {
  this.$_indicator$.getParent().removeChild(this.$_indicator$);
  this.$_indicator$ = $JSCompiler_alias_NULL$$
};
function $DvtChartDataChangeLineArea$$($peer$$10$$, $duration$$25$$) {
  this.Init($peer$$10$$, $duration$$25$$)
}
dvt.$Obj$.$createSubclass$($DvtChartDataChangeLineArea$$, $DvtChartDataChangeAbstract$$);
$JSCompiler_prototypeAlias$$ = $DvtChartDataChangeLineArea$$.prototype;
$JSCompiler_prototypeAlias$$.$animateUpdate$ = function $$JSCompiler_prototypeAlias$$$$animateUpdate$$($handler$$23$$, $oldDC$$1$$) {
  this.$_baseCoords$ = this.$_shape$.$_arBaseCoord$;
  this.$_coords$ = this.$_shape$.$_arCoord$;
  var $i$$328_isArea$$ = this.$_shape$.$isArea$(), $nodePlayable$$17_oldChart$$5$$ = this.$_oldChart$, $newChart$$4$$ = this.$_chart$, $newSIdx$$1$$ = this.$_peer$.$getSeriesIndex$(), $oldSIdx$$1$$ = $oldDC$$1$$.$_peer$.$getSeriesIndex$(), $newGIdcs$$ = $JSCompiler_StaticMethods_getCommonGroupIndices$$(this.$_shape$, $oldDC$$1$$.$_shape$), $oldGIdcs$$ = $JSCompiler_StaticMethods_getCommonGroupIndices$$($oldDC$$1$$.$_shape$, this.$_shape$), $baseAnim$$1$$;
  if($i$$328_isArea$$) {
    var $JSCompiler_StaticMethods_addIndicator$self$$inline_3015_baseStartState_startState$$2$$ = $oldDC$$1$$.$_getBaseAnimationParams$(this.$_shape$), $baseEndState$$1_endState$$9_groupIndex$$inline_3016$$ = this.$_getBaseAnimationParams$($oldDC$$1$$.$_shape$);
    $DvtChartDataChangeLineArea$_matchGroupIndices$$($JSCompiler_StaticMethods_addIndicator$self$$inline_3015_baseStartState_startState$$2$$, $baseEndState$$1_endState$$9_groupIndex$$inline_3016$$);
    dvt.$ArrayUtils$.$equals$($JSCompiler_StaticMethods_addIndicator$self$$inline_3015_baseStartState_startState$$2$$, $baseEndState$$1_endState$$9_groupIndex$$inline_3016$$) || (this.$_setBaseAnimationParams$($JSCompiler_StaticMethods_addIndicator$self$$inline_3015_baseStartState_startState$$2$$), $baseAnim$$1$$ = new dvt.$CustomAnimation$(this.$_context$, this, this.$_updateDuration$), $baseAnim$$1$$.$_animator$.$addProp$(dvt.$Animator$.$TYPE_NUMBER_ARRAY$, this, this.$_getBaseAnimationParams$, 
    this.$_setBaseAnimationParams$, $baseEndState$$1_endState$$9_groupIndex$$inline_3016$$))
  }
  var $topAnim$$1$$, $JSCompiler_StaticMethods_addIndicator$self$$inline_3015_baseStartState_startState$$2$$ = $oldDC$$1$$.$_getAnimationParams$(this.$_shape$), $baseEndState$$1_endState$$9_groupIndex$$inline_3016$$ = this.$_getAnimationParams$($oldDC$$1$$.$_shape$);
  $DvtChartDataChangeLineArea$_matchGroupIndices$$($JSCompiler_StaticMethods_addIndicator$self$$inline_3015_baseStartState_startState$$2$$, $baseEndState$$1_endState$$9_groupIndex$$inline_3016$$);
  dvt.$ArrayUtils$.$equals$($JSCompiler_StaticMethods_addIndicator$self$$inline_3015_baseStartState_startState$$2$$, $baseEndState$$1_endState$$9_groupIndex$$inline_3016$$) || (this.$_setAnimationParams$($JSCompiler_StaticMethods_addIndicator$self$$inline_3015_baseStartState_startState$$2$$), $topAnim$$1$$ = new dvt.$CustomAnimation$(this.$_context$, this, this.$_updateDuration$), $topAnim$$1$$.$_animator$.$addProp$(dvt.$Animator$.$TYPE_NUMBER_ARRAY$, this, this.$_getAnimationParams$, this.$_setAnimationParams$, 
  $baseEndState$$1_endState$$9_groupIndex$$inline_3016$$));
  if("none" !== $DvtChartStyleUtils$$.$getAnimationIndicators$($newChart$$4$$) && !($i$$328_isArea$$ && "lineWithArea" == this.$_peer$.$getSeriesType$())) {
    for(var $direction$$9_direction$$inline_3017$$, $indicator$$5_indicator$$inline_3018$$, $i$$328_isArea$$ = 0;$i$$328_isArea$$ < $newGIdcs$$.length;$i$$328_isArea$$++) {
      if($direction$$9_direction$$inline_3017$$ = $DvtChartDataChangeUtils$$.$getDirection$($nodePlayable$$17_oldChart$$5$$, $oldSIdx$$1$$, $oldGIdcs$$[$i$$328_isArea$$], $newChart$$4$$, $newSIdx$$1$$, $newGIdcs$$[$i$$328_isArea$$]), $indicator$$5_indicator$$inline_3018$$ = $DvtChartDataChangeUtils$$.$makeIndicator$($nodePlayable$$17_oldChart$$5$$, $oldSIdx$$1$$, $oldGIdcs$$[$i$$328_isArea$$], $newChart$$4$$, $newSIdx$$1$$, $newGIdcs$$[$i$$328_isArea$$])) {
        $JSCompiler_StaticMethods_addIndicator$self$$inline_3015_baseStartState_startState$$2$$ = this.$_shape$, $baseEndState$$1_endState$$9_groupIndex$$inline_3016$$ = $newGIdcs$$[$i$$328_isArea$$], $indicator$$5_indicator$$inline_3018$$.$setAlpha$(0), $JSCompiler_StaticMethods_addIndicator$self$$inline_3015_baseStartState_startState$$2$$.$_indicatorMap$[$baseEndState$$1_endState$$9_groupIndex$$inline_3016$$] = {direction:$direction$$9_direction$$inline_3017$$, $indicator$:$indicator$$5_indicator$$inline_3018$$}
      }
    }
  }
  if($baseAnim$$1$$ || $topAnim$$1$$) {
    $nodePlayable$$17_oldChart$$5$$ = new dvt.$ParallelPlayable$(this.$_context$, $baseAnim$$1$$, $topAnim$$1$$), $nodePlayable$$17_oldChart$$5$$.$setOnEnd$(this.$_onAnimationEnd$, this), $handler$$23$$.add($nodePlayable$$17_oldChart$$5$$, 1)
  }
};
$JSCompiler_prototypeAlias$$.$animateInsert$ = function $$JSCompiler_prototypeAlias$$$$animateInsert$$($handler$$24$$) {
  this.$_shape$.$setAlpha$(0);
  var $nodePlayable$$18$$ = new dvt.$AnimFadeIn$(this.$_context$, this.$_shape$, this.$_insertDuration$);
  $handler$$24$$.add($nodePlayable$$18$$, 2)
};
$JSCompiler_prototypeAlias$$.$animateDelete$ = function $$JSCompiler_prototypeAlias$$$$animateDelete$$($handler$$25$$, $delContainer$$3$$) {
  var $areaContainer_nodePlayable$$19$$;
  "area" == $DvtChartStyleUtils$$.$getSeriesType$(this.$_oldChart$, this.$_peer$.$getSeriesIndex$()) ? ($areaContainer_nodePlayable$$19$$ = this.$_chart$.$_areaContainer$, this.$_deletedAreas$ = this.$_shape$.getParent().getParent(), $areaContainer_nodePlayable$$19$$ && ($areaContainer_nodePlayable$$19$$.$addChild$(this.$_deletedAreas$), $areaContainer_nodePlayable$$19$$ = new dvt.$AnimFadeOut$(this.$_context$, this.$_deletedAreas$, this.$_deleteDuration$), $areaContainer_nodePlayable$$19$$.$setOnEnd$(this.$_removeDeletedAreas$, 
  this), $handler$$25$$.add($areaContainer_nodePlayable$$19$$, 0))) : ($delContainer$$3$$.$addChild$(this.$_shape$), $areaContainer_nodePlayable$$19$$ = new dvt.$AnimFadeOut$(this.$_context$, this.$_shape$, this.$_deleteDuration$), $handler$$25$$.add($areaContainer_nodePlayable$$19$$, 0))
};
$JSCompiler_prototypeAlias$$.$_removeDeletedAreas$ = function $$JSCompiler_prototypeAlias$$$$_removeDeletedAreas$$() {
  var $areaContainer$$1$$ = this.$_chart$.$_areaContainer$;
  $areaContainer$$1$$ && $areaContainer$$1$$.removeChild(this.$_deletedAreas$)
};
$JSCompiler_prototypeAlias$$.$_getAnimationParams$ = function $$JSCompiler_prototypeAlias$$$$_getAnimationParams$$($otherShape$$) {
  return this.$_shape$.$getAnimationParams$($otherShape$$)
};
$JSCompiler_prototypeAlias$$.$_setAnimationParams$ = function $$JSCompiler_prototypeAlias$$$$_setAnimationParams$$($params$$22$$) {
  this.$_shape$.$setAnimationParams$($params$$22$$)
};
$JSCompiler_prototypeAlias$$.$_getBaseAnimationParams$ = function $$JSCompiler_prototypeAlias$$$$_getBaseAnimationParams$$($otherShape$$1$$) {
  return this.$_shape$.$getBaseAnimationParams$($otherShape$$1$$)
};
$JSCompiler_prototypeAlias$$.$_setBaseAnimationParams$ = function $$JSCompiler_prototypeAlias$$$$_setBaseAnimationParams$$($params$$23$$) {
  this.$_shape$.$setBaseAnimationParams$($params$$23$$)
};
$JSCompiler_prototypeAlias$$.$_onAnimationEnd$ = function $$JSCompiler_prototypeAlias$$$$_onAnimationEnd$$() {
  var $JSCompiler_StaticMethods_removeIndicators$self$$inline_3020$$ = this.$_shape$, $groupIndex$$inline_3021$$;
  for($groupIndex$$inline_3021$$ in $JSCompiler_StaticMethods_removeIndicators$self$$inline_3020$$.$_indicatorMap$) {
    var $indicator$$inline_3022$$ = $JSCompiler_StaticMethods_removeIndicators$self$$inline_3020$$.$_indicatorMap$[$groupIndex$$inline_3021$$].$indicator$;
    $indicator$$inline_3022$$ && $indicator$$inline_3022$$.getParent().removeChild($indicator$$inline_3022$$)
  }
  $JSCompiler_StaticMethods_removeIndicators$self$$inline_3020$$.$_indicatorMap$ = {};
  this.$_shape$.$setCoords$(this.$_coords$, this.$_baseCoords$)
};
function $DvtChartDataChangeLineArea$_matchGroupIndices$$($startParams$$, $endParams$$) {
  for(var $i$$329$$ = 3;$i$$329$$ < $startParams$$.length;$i$$329$$ += 4) {
    $startParams$$[$i$$329$$] = $endParams$$[$i$$329$$]
  }
}
$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($peer$$11$$, $duration$$26$$) {
  $DvtChartDataChangeLineArea$$.$superclass$.Init.call(this, $peer$$11$$, $duration$$26$$);
  this.$_context$ = this.$_shape$.$getCtx$();
  this.$_chart$ = this.$_peer$.$_chart$;
  this.$_animId$ += "/" + (this.$_shape$.$isArea$() ? "area" : "line")
};
function $DvtChartDataChangeMarker$$($peer$$12$$, $duration$$27$$) {
  this.Init($peer$$12$$, $duration$$27$$)
}
dvt.$Obj$.$createSubclass$($DvtChartDataChangeMarker$$, $DvtChartDataChangeAbstract$$);
$JSCompiler_prototypeAlias$$ = $DvtChartDataChangeMarker$$.prototype;
$JSCompiler_prototypeAlias$$.$animateUpdate$ = function $$JSCompiler_prototypeAlias$$$$animateUpdate$$($handler$$26$$, $oldDC$$2$$) {
  var $startRect$$ = $oldDC$$2$$.$_shape$.$getCenterDimensions$(), $endRect$$ = this.$_shape$.$getCenterDimensions$();
  if(!$endRect$$.$equals$($startRect$$)) {
    this.$_shape$.$setCenterDimensions$($startRect$$);
    var $nodePlayable$$20$$ = new dvt.$CustomAnimation$(this.$_shape$.$getCtx$(), this, this.$_updateDuration$);
    $nodePlayable$$20$$.$_animator$.$addProp$(dvt.$Animator$.$TYPE_RECTANGLE$, this.$_shape$, this.$_shape$.$getCenterDimensions$, this.$_shape$.$setCenterDimensions$, $endRect$$);
    var $chart$$35_overlay$$8$$ = this.$_peer$.$_chart$, $bRet$$inline_3026_oldSIdx$$inline_3027$$ = $JSCompiler_alias_FALSE$$;
    if($oldDC$$2$$) {
      var $bRet$$inline_3026_oldSIdx$$inline_3027$$ = $oldDC$$2$$.$_peer$.$getSeriesIndex$(), $oldGIdx$$inline_3028$$ = $oldDC$$2$$.$_peer$.$getGroupIndex$(), $newSIdx$$inline_3029$$ = this.$_peer$.$getSeriesIndex$(), $newGIdx$$inline_3030$$ = this.$_peer$.$getGroupIndex$(), $oldData$$inline_3031$$ = $oldDC$$2$$.$_oldChart$.$getOptions$(), $newData$$inline_3032$$ = this.$_peer$.$_chart$.$getOptions$(), $oldY$$inline_3033$$ = $oldData$$inline_3031$$.series[$bRet$$inline_3026_oldSIdx$$inline_3027$$].items[$oldGIdx$$inline_3028$$].y, 
      $oldZ$$inline_3034$$ = $oldData$$inline_3031$$.series[$bRet$$inline_3026_oldSIdx$$inline_3027$$].items[$oldGIdx$$inline_3028$$].z, $newY$$inline_3035$$ = $newData$$inline_3032$$.series[$newSIdx$$inline_3029$$].items[$newGIdx$$inline_3030$$].y, $newZ$$inline_3036$$ = $newData$$inline_3032$$.series[$newSIdx$$inline_3029$$].items[$newGIdx$$inline_3030$$].z, $bRet$$inline_3026_oldSIdx$$inline_3027$$ = $newData$$inline_3032$$.series[$newSIdx$$inline_3029$$].items[$newGIdx$$inline_3030$$].x !== $oldData$$inline_3031$$.series[$bRet$$inline_3026_oldSIdx$$inline_3027$$].items[$oldGIdx$$inline_3028$$].x || 
      $newY$$inline_3035$$ !== $oldY$$inline_3033$$ || $newZ$$inline_3036$$ !== $oldZ$$inline_3034$$
    }
    $bRet$$inline_3026_oldSIdx$$inline_3027$$ && ("none" != $DvtChartStyleUtils$$.$getAnimationIndicators$($chart$$35_overlay$$8$$) && $DvtChartTypeUtils$$.$isScatterBubble$($chart$$35_overlay$$8$$)) && ($chart$$35_overlay$$8$$ = $oldDC$$2$$.$_shape$, $chart$$35_overlay$$8$$.$setSolidFill$("#FFFF2B", 0.9), $chart$$35_overlay$$8$$.$setCenterDimensions$($startRect$$), this.$_peer$.$_chart$.$getPlotArea$().$addChild$($chart$$35_overlay$$8$$), $nodePlayable$$20$$.$_animator$.$addProp$(dvt.$Animator$.$TYPE_RECTANGLE$, 
    $chart$$35_overlay$$8$$, $chart$$35_overlay$$8$$.$getCenterDimensions$, $chart$$35_overlay$$8$$.$setCenterDimensions$, $endRect$$), $nodePlayable$$20$$.$_animator$.$addProp$(dvt.$Animator$.$TYPE_NUMBER$, $chart$$35_overlay$$8$$, $chart$$35_overlay$$8$$.$getAlpha$, $chart$$35_overlay$$8$$.$setAlpha$, 0), this.$_overlay$ = $chart$$35_overlay$$8$$, $nodePlayable$$20$$.$setOnEnd$(this.$_onEndAnimation$, this));
    $handler$$26$$.add($nodePlayable$$20$$, 1)
  }
};
$JSCompiler_prototypeAlias$$.$animateInsert$ = function $$JSCompiler_prototypeAlias$$$$animateInsert$$($handler$$27$$) {
  this.$_shape$.$setAlpha$(0);
  var $nodePlayable$$21$$ = new dvt.$AnimFadeIn$(this.$_shape$.$getCtx$(), this.$_shape$, this.$_insertDuration$);
  $handler$$27$$.add($nodePlayable$$21$$, 2)
};
$JSCompiler_prototypeAlias$$.$animateDelete$ = function $$JSCompiler_prototypeAlias$$$$animateDelete$$($handler$$28$$, $delContainer$$4$$) {
  $delContainer$$4$$.$addChild$(this.$_shape$);
  var $nodePlayable$$22$$ = new dvt.$AnimFadeOut$(this.$_shape$.$getCtx$(), this.$_shape$, this.$_deleteDuration$);
  $handler$$28$$.add($nodePlayable$$22$$, 0)
};
$JSCompiler_prototypeAlias$$.$_onEndAnimation$ = function $$JSCompiler_prototypeAlias$$$$_onEndAnimation$$() {
  this.$_overlay$ && (this.$_peer$.$_chart$.$getPlotArea$().removeChild(this.$_overlay$), this.$_overlay$ = $JSCompiler_alias_NULL$$)
};
$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($peer$$13$$, $duration$$28$$) {
  $DvtChartDataChangeMarker$$.$superclass$.Init.call(this, $peer$$13$$, $duration$$28$$);
  this.$_animId$ += "/marker"
};
function $DvtChartDataChangeRangeMarker$$($peer$$14$$, $duration$$29$$) {
  this.Init($peer$$14$$, $duration$$29$$)
}
dvt.$Obj$.$createSubclass$($DvtChartDataChangeRangeMarker$$, $DvtChartDataChangeAbstract$$);
$DvtChartDataChangeRangeMarker$$.prototype.Init = function $$DvtChartDataChangeRangeMarker$$$$Init$($peer$$15$$, $duration$$30$$) {
  $DvtChartDataChangeRangeMarker$$.$superclass$.Init.call(this, $peer$$15$$, $duration$$30$$);
  this.$_animId$ += "/rangeMarker"
};
$DvtChartDataChangeRangeMarker$$.prototype.$animateInsert$ = function $$DvtChartDataChangeRangeMarker$$$$$animateInsert$$($handler$$29$$) {
  this.$_shape$.$setAlpha$(0);
  var $nodePlayable$$23$$ = new dvt.$AnimFadeIn$(this.$_shape$.$getCtx$(), this.$_shape$, this.$_insertDuration$);
  $handler$$29$$.add($nodePlayable$$23$$, 2)
};
$DvtChartDataChangeRangeMarker$$.prototype.$animateDelete$ = function $$DvtChartDataChangeRangeMarker$$$$$animateDelete$$($handler$$30$$, $delContainer$$5$$) {
  $delContainer$$5$$.$addChild$(this.$_shape$);
  var $nodePlayable$$24$$ = new dvt.$AnimFadeOut$(this.$_shape$.$getCtx$(), this.$_shape$, this.$_deleteDuration$);
  $handler$$30$$.add($nodePlayable$$24$$, 0)
};
$DvtChartDataChangeRangeMarker$$.prototype.$animateUpdate$ = function $$DvtChartDataChangeRangeMarker$$$$$animateUpdate$$($handler$$31$$, $oldDC$$4$$) {
  var $nodePlayable$$25_start$$23$$ = $oldDC$$4$$.$_shape$.$getAnimationParams$(), $end$$14$$ = this.$_shape$.$getAnimationParams$();
  this.$_shape$.$setAnimationParams$($nodePlayable$$25_start$$23$$);
  $nodePlayable$$25_start$$23$$ = new dvt.$CustomAnimation$(this.$_shape$.$getCtx$(), this, this.$_updateDuration$);
  $nodePlayable$$25_start$$23$$.$_animator$.$addProp$(dvt.$Animator$.$TYPE_NUMBER_ARRAY$, this.$_shape$, this.$_shape$.$getAnimationParams$, this.$_shape$.$setAnimationParams$, $end$$14$$);
  $handler$$31$$.add($nodePlayable$$25_start$$23$$, 1)
};
var $DvtChartDataChangeUtils$$ = {};
dvt.$Obj$.$createSubclass$($DvtChartDataChangeUtils$$, dvt.$Obj$);
$DvtChartDataChangeUtils$$.$DIR_UP$ = 0;
$DvtChartDataChangeUtils$$.$DIR_DOWN$ = 1;
$DvtChartDataChangeUtils$$.$DIR_NOCHANGE$ = 2;
$DvtChartDataChangeUtils$$.$makeIndicator$ = function $$DvtChartDataChangeUtils$$$$makeIndicator$$($bDown_indicator$$6_oldChart$$6_uiDirection$$, $fc$$1_oldSIdx$$3$$, $oldGIdx$$2$$, $newChart$$5$$, $newSIdx$$3$$, $newGIdx$$2$$) {
  if($DvtChartTypeUtils$$.$isPolar$($newChart$$5$$)) {
    return $JSCompiler_alias_NULL$$
  }
  $bDown_indicator$$6_oldChart$$6_uiDirection$$ = $DvtChartDataChangeUtils$$.$getDirection$($bDown_indicator$$6_oldChart$$6_uiDirection$$, $fc$$1_oldSIdx$$3$$, $oldGIdx$$2$$, $newChart$$5$$, $newSIdx$$3$$, $newGIdx$$2$$);
  if($bDown_indicator$$6_oldChart$$6_uiDirection$$ == $DvtChartDataChangeUtils$$.$DIR_NOCHANGE$) {
    return $JSCompiler_alias_NULL$$
  }
  $fc$$1_oldSIdx$$3$$ = ($bDown_indicator$$6_oldChart$$6_uiDirection$$ = $bDown_indicator$$6_oldChart$$6_uiDirection$$ === $DvtChartDataChangeUtils$$.$DIR_DOWN$) ? $DvtChartStyleUtils$$.$getAnimationDownColor$($newChart$$5$$) : $DvtChartStyleUtils$$.$getAnimationUpColor$($newChart$$5$$);
  $bDown_indicator$$6_oldChart$$6_uiDirection$$ = $DvtChartDataChangeUtils$$.$_drawIndicator$($newChart$$5$$.$getCtx$(), $bDown_indicator$$6_oldChart$$6_uiDirection$$, $DvtChartTypeUtils$$.$isHorizontal$($newChart$$5$$), $fc$$1_oldSIdx$$3$$);
  $newChart$$5$$.$getPlotArea$().$addChild$($bDown_indicator$$6_oldChart$$6_uiDirection$$);
  return $bDown_indicator$$6_oldChart$$6_uiDirection$$
};
$DvtChartDataChangeUtils$$.$getDirection$ = function $$DvtChartDataChangeUtils$$$$getDirection$$($oldChart$$7_oldValue$$, $oldSIdx$$4$$, $oldGIdx$$3$$, $newChart$$6_newValue$$, $newSIdx$$4$$, $newGIdx$$3$$) {
  $oldChart$$7_oldValue$$ = $DvtChartDataUtils$$.getValue($oldChart$$7_oldValue$$, $oldSIdx$$4$$, $oldGIdx$$3$$);
  $newChart$$6_newValue$$ = $DvtChartDataUtils$$.getValue($newChart$$6_newValue$$, $newSIdx$$4$$, $newGIdx$$3$$);
  return $newChart$$6_newValue$$ == $JSCompiler_alias_NULL$$ || $oldChart$$7_oldValue$$ == $JSCompiler_alias_NULL$$ || $newChart$$6_newValue$$ == $oldChart$$7_oldValue$$ ? $DvtChartDataChangeUtils$$.$DIR_NOCHANGE$ : $newChart$$6_newValue$$ > $oldChart$$7_oldValue$$ ? $DvtChartDataChangeUtils$$.$DIR_UP$ : $DvtChartDataChangeUtils$$.$DIR_DOWN$
};
$DvtChartDataChangeUtils$$.$_drawIndicator$ = function $$DvtChartDataChangeUtils$$$$_drawIndicator$$($context$$138_ret$$46$$, $bDown$$1_ptrCmds$$, $bHoriz$$6$$, $fc$$2$$) {
  $bDown$$1_ptrCmds$$ = $bHoriz$$6$$ ? (dvt.$Agent$.$isRightToLeft$($context$$138_ret$$46$$) ? !$bDown$$1_ptrCmds$$ : $bDown$$1_ptrCmds$$) ? "M3.5,-5L3.5,5L-3.5,0L3.5,-5" : "M-3.5,-5L-3.5,5L3.5,0L-3.5,-5" : $bDown$$1_ptrCmds$$ ? "M-5,-3.5L5,-3.5L0,3.5L-5,-3.5Z" : "M-5,3.5L5,3.5L0,-3.5L-5,3.5Z";
  $context$$138_ret$$46$$ = new dvt.$Path$($context$$138_ret$$46$$, $bDown$$1_ptrCmds$$);
  $context$$138_ret$$46$$.$setSolidFill$($fc$$2$$);
  return $context$$138_ret$$46$$
};
function $DvtChartDataChangeFunnelSlice$$($peer$$16$$, $duration$$31$$) {
  this.Init($peer$$16$$, $duration$$31$$)
}
dvt.$Obj$.$createSubclass$($DvtChartDataChangeFunnelSlice$$, $DvtChartDataChangeAbstract$$);
$DvtChartDataChangeFunnelSlice$$.prototype.$animateUpdate$ = function $$DvtChartDataChangeFunnelSlice$$$$$animateUpdate$$($handler$$32$$, $oldDC$$5$$) {
  var $obj$$125$$ = this.$_shape$, $nodePlayable$$26_startState$$3$$ = $oldDC$$5$$.$_shape$.$getAnimationParams$(), $endState$$10$$ = $obj$$125$$.$getAnimationParams$(), $startFill$$2$$ = $oldDC$$5$$.$_shape$.$getFill$().$clone$(), $endFill$$2$$ = this.$_shape$.$getFill$();
  if(!dvt.$ArrayUtils$.$equals$($nodePlayable$$26_startState$$3$$, $endState$$10$$) || !$startFill$$2$$.$equals$($endFill$$2$$)) {
    $obj$$125$$.$setAnimationParams$($nodePlayable$$26_startState$$3$$), this.$_shape$.$setFill$($startFill$$2$$), $nodePlayable$$26_startState$$3$$ = new dvt.$CustomAnimation$($obj$$125$$.$getCtx$(), this, this.$_updateDuration$), $nodePlayable$$26_startState$$3$$.$_animator$.$addProp$(dvt.$Animator$.$TYPE_NUMBER_ARRAY$, $obj$$125$$, $obj$$125$$.$getAnimationParams$, $obj$$125$$.$setAnimationParams$, $endState$$10$$), $nodePlayable$$26_startState$$3$$.$_animator$.$addProp$(dvt.$Animator$.$TYPE_FILL$, 
    this.$_shape$, this.$_shape$.$getFill$, this.$_shape$.$setFill$, $endFill$$2$$), this.$_indicator$ && $nodePlayable$$26_startState$$3$$.$setOnEnd$(this.$_onEndAnimation$, this), $handler$$32$$.add($nodePlayable$$26_startState$$3$$, 1)
  }
};
$DvtChartDataChangeFunnelSlice$$.prototype.$animateInsert$ = function $$DvtChartDataChangeFunnelSlice$$$$$animateInsert$$($handler$$33$$) {
  var $obj$$126$$ = this.$_shape$, $endState$$11$$ = $obj$$126$$.$getAnimationParams$(), $nodePlayable$$27_startState$$4$$ = $endState$$11$$.slice(0);
  $nodePlayable$$27_startState$$4$$[0] += $nodePlayable$$27_startState$$4$$[1] / 2;
  $nodePlayable$$27_startState$$4$$[1] = 0;
  $nodePlayable$$27_startState$$4$$[3] = 0;
  $obj$$126$$.$setAnimationParams$($nodePlayable$$27_startState$$4$$);
  $nodePlayable$$27_startState$$4$$ = new dvt.$CustomAnimation$($obj$$126$$.$getCtx$(), this, this.$_insertDuration$);
  $nodePlayable$$27_startState$$4$$.$_animator$.$addProp$(dvt.$Animator$.$TYPE_NUMBER_ARRAY$, $obj$$126$$, $obj$$126$$.$getAnimationParams$, $obj$$126$$.$setAnimationParams$, $endState$$11$$);
  $handler$$33$$.add($nodePlayable$$27_startState$$4$$, 2)
};
$DvtChartDataChangeFunnelSlice$$.prototype.$animateDelete$ = function $$DvtChartDataChangeFunnelSlice$$$$$animateDelete$$($handler$$34$$, $delContainer$$6$$) {
  var $obj$$127$$ = this.$_shape$;
  $delContainer$$6$$.$addChild$($obj$$127$$);
  var $nodePlayable$$28_startState$$5$$ = $obj$$127$$.$getAnimationParams$(), $endState$$12$$ = $nodePlayable$$28_startState$$5$$.slice(0);
  $endState$$12$$[0] += $nodePlayable$$28_startState$$5$$[1] / 2;
  $endState$$12$$[1] = 0;
  $endState$$12$$[3] = 0;
  $nodePlayable$$28_startState$$5$$ = new dvt.$CustomAnimation$($obj$$127$$.$getCtx$(), this, this.$_deleteDuration$);
  $nodePlayable$$28_startState$$5$$.$_animator$.$addProp$(dvt.$Animator$.$TYPE_NUMBER_ARRAY$, $obj$$127$$, $obj$$127$$.$getAnimationParams$, $obj$$127$$.$setAnimationParams$, $endState$$12$$);
  $handler$$34$$.add($nodePlayable$$28_startState$$5$$, 0)
};
$DvtChartDataChangeFunnelSlice$$.prototype.Init = function $$DvtChartDataChangeFunnelSlice$$$$Init$($peer$$17$$, $duration$$32$$) {
  $DvtChartDataChangeFunnelSlice$$.$superclass$.Init.call(this, $peer$$17$$, $duration$$32$$);
  this.$_animId$ += "/funnel"
};
var $DvtChartAxisUtils$$ = {};
dvt.$Obj$.$createSubclass$($DvtChartAxisUtils$$, dvt.$Obj$);
$DvtChartAxisUtils$$.$getXAxisPosition$ = function $$DvtChartAxisUtils$$$$getXAxisPosition$$($chart$$36$$) {
  return $DvtChartTypeUtils$$.$isPolar$($chart$$36$$) ? "tangential" : $DvtChartTypeUtils$$.$isHorizontal$($chart$$36$$) ? dvt.$Agent$.$isRightToLeft$($chart$$36$$.$getCtx$()) ? "right" : "left" : "bottom"
};
$DvtChartAxisUtils$$.$getBaselineScaling$ = function $$DvtChartAxisUtils$$$$getBaselineScaling$$($chart$$37$$, $type$$101$$) {
  var $baselineScaling$$ = $chart$$37$$.$getOptions$()[$type$$101$$ + "Axis"].baselineScaling;
  return $baselineScaling$$ && ("zero" == $baselineScaling$$ || "min" == $baselineScaling$$) ? $baselineScaling$$ : $DvtChartTypeUtils$$.$isStock$($chart$$37$$) ? "min" : "zero"
};
$DvtChartAxisUtils$$.$getYAxisPosition$ = function $$DvtChartAxisUtils$$$$getYAxisPosition$$($chart$$38$$) {
  var $position$$16$$ = $chart$$38$$.$getOptions$().yAxis.position;
  if($DvtChartTypeUtils$$.$isPolar$($chart$$38$$)) {
    return"radial"
  }
  if($DvtChartTypeUtils$$.$isHorizontal$($chart$$38$$)) {
    return $position$$16$$ && ("top" == $position$$16$$ || "bottom" == $position$$16$$) ? $position$$16$$ : "bottom"
  }
  $DvtChartTypeUtils$$.$isStock$($chart$$38$$) && ($position$$16$$ = $position$$16$$ ? $position$$16$$ : "end");
  return dvt.$Agent$.$isRightToLeft$($chart$$38$$.$getCtx$()) ? $position$$16$$ && "end" == $position$$16$$ ? "left" : "right" : $position$$16$$ && "end" == $position$$16$$ ? "right" : "left"
};
$DvtChartAxisUtils$$.$getY2AxisPosition$ = function $$DvtChartAxisUtils$$$$getY2AxisPosition$$($chart$$39$$) {
  var $position$$17$$ = $chart$$39$$.$getOptions$().y2Axis.position;
  return $DvtChartTypeUtils$$.$isHorizontal$($chart$$39$$) ? $position$$17$$ && ("top" == $position$$17$$ || "bottom" == $position$$17$$) ? $position$$17$$ : "top" : dvt.$Agent$.$isRightToLeft$($chart$$39$$.$getCtx$()) ? $position$$17$$ && "start" == $position$$17$$ ? "right" : "left" : $position$$17$$ && "start" == $position$$17$$ ? "left" : "right"
};
$DvtChartAxisUtils$$.$hasTimeAxis$ = function $$DvtChartAxisUtils$$$$hasTimeAxis$$($chart$$40$$) {
  return $DvtChartTypeUtils$$.$isBLAC$($chart$$40$$) && "disabled" != $DvtChartAxisUtils$$.$getTimeAxisType$($chart$$40$$)
};
$DvtChartAxisUtils$$.$hasGroupAxis$ = function $$DvtChartAxisUtils$$$$hasGroupAxis$$($chart$$41$$) {
  return $DvtChartTypeUtils$$.$isBLAC$($chart$$41$$) && "disabled" == $DvtChartAxisUtils$$.$getTimeAxisType$($chart$$41$$)
};
$DvtChartAxisUtils$$.$getTimeAxisType$ = function $$DvtChartAxisUtils$$$$getTimeAxisType$$($chart$$42$$) {
  var $timeAxisType$$1$$ = $chart$$42$$.$getOptions$().timeAxisType;
  return $timeAxisType$$1$$ && "auto" != $timeAxisType$$1$$ && $DvtChartTypeUtils$$.$isBLAC$($chart$$42$$) && !$DvtChartTypeUtils$$.$isPolar$($chart$$42$$) ? $timeAxisType$$1$$ : $DvtChartTypeUtils$$.$isStock$($chart$$42$$) ? "skipGaps" : "disabled"
};
$DvtChartAxisUtils$$.$isMixedFrequency$ = function $$DvtChartAxisUtils$$$$isMixedFrequency$$($chart$$43$$) {
  return"mixedFrequency" == $DvtChartAxisUtils$$.$getTimeAxisType$($chart$$43$$)
};
$DvtChartAxisUtils$$.$getAxisOffset$ = function $$DvtChartAxisUtils$$$$getAxisOffset$$($chart$$44$$) {
  var $axisOffset_groupSeparators_maxOffset$$ = $chart$$44$$.$Cache$.axisOffset;
  if($axisOffset_groupSeparators_maxOffset$$ != $JSCompiler_alias_NULL$$) {
    return $axisOffset_groupSeparators_maxOffset$$
  }
  $axisOffset_groupSeparators_maxOffset$$ = $chart$$44$$.$getOptions$().styleDefaults.groupSeparators;
  $DvtChartAxisUtils$$.$hasGroupAxis$($chart$$44$$) && 1 < $DvtChartDataUtils$$.$getNumLevels$($chart$$44$$) && "on" == $axisOffset_groupSeparators_maxOffset$$.rendered ? $axisOffset_groupSeparators_maxOffset$$ = 0.5 : $DvtChartTypeUtils$$.$hasBarSeries$($chart$$44$$) || $DvtChartTypeUtils$$.$hasCenteredSeries$($chart$$44$$) || $DvtChartTypeUtils$$.$hasCandlestickSeries$($chart$$44$$) || $DvtChartTypeUtils$$.$isBLAC$($chart$$44$$) && 1 == $DvtChartDataUtils$$.$getGroupCount$($chart$$44$$) ? $axisOffset_groupSeparators_maxOffset$$ = 
  0.5 : $chart$$44$$.$getSkin$() != dvt.$CSSStyle$.$SKIN_SKYROS$ && $chart$$44$$.$getSkin$() != dvt.$CSSStyle$.$SKIN_ALTA$ && !$DvtChartTypeUtils$$.$isSpark$($chart$$44$$) && !$DvtChartEventUtils$$.$isScrollable$($chart$$44$$) && !$DvtChartTypeUtils$$.$isOverview$($chart$$44$$) ? ($axisOffset_groupSeparators_maxOffset$$ = $DvtChartTypeUtils$$.$isHorizontal$($chart$$44$$) ? 0.2 : 0.5, $axisOffset_groupSeparators_maxOffset$$ -= $axisOffset_groupSeparators_maxOffset$$ / Math.sqrt($DvtChartDataUtils$$.$getGroupCount$($chart$$44$$))) : 
  $axisOffset_groupSeparators_maxOffset$$ = 0;
  return $chart$$44$$.$Cache$.axisOffset = $axisOffset_groupSeparators_maxOffset$$
};
$DvtChartAxisUtils$$.$isGridShifted$ = function $$DvtChartAxisUtils$$$$isGridShifted$$($chart$$45$$) {
  if(!$DvtChartTypeUtils$$.$isBLAC$($chart$$45$$)) {
    return $JSCompiler_alias_FALSE$$
  }
  for(var $seriesCount$$5$$ = $DvtChartDataUtils$$.$getSeriesCount$($chart$$45$$), $i$$330$$ = 0;$i$$330$$ < $seriesCount$$5$$;$i$$330$$++) {
    if($DvtChartStyleUtils$$.$isSeriesRendered$($chart$$45$$, $i$$330$$)) {
      var $seriesType$$2$$ = $DvtChartStyleUtils$$.$getSeriesType$($chart$$45$$, $i$$330$$), $lineType$$ = $DvtChartStyleUtils$$.$getLineType$($chart$$45$$, $i$$330$$);
      if("bar" != $seriesType$$2$$ && "centeredSegmented" != $lineType$$ && "centeredStepped" != $lineType$$) {
        return $JSCompiler_alias_FALSE$$
      }
    }
  }
  return $JSCompiler_alias_TRUE$$
};
$DvtChartAxisUtils$$.$isGridPolygonal$ = function $$DvtChartAxisUtils$$$$isGridPolygonal$$($chart$$46$$) {
  return!$DvtChartTypeUtils$$.$isBLAC$($chart$$46$$) || $DvtChartTypeUtils$$.$hasBarSeries$($chart$$46$$) ? $JSCompiler_alias_FALSE$$ : "polygon" == $chart$$46$$.$getOptions$().polarGridShape
};
$DvtChartAxisUtils$$.$isAxisRendered$ = function $$DvtChartAxisUtils$$$$isAxisRendered$$($chart$$47$$, $type$$102$$) {
  if("y" == $type$$102$$ && $DvtChartTypeUtils$$.$hasY2DataOnly$($chart$$47$$) || "y2" == $type$$102$$ && !$DvtChartTypeUtils$$.$hasY2Data$($chart$$47$$)) {
    return $JSCompiler_alias_FALSE$$
  }
  var $axisOptions$$1$$ = $chart$$47$$.$getOptions$()[$type$$102$$ + "Axis"];
  return"off" == $axisOptions$$1$$.rendered || "off" == $axisOptions$$1$$.tickLabel.rendered && !$axisOptions$$1$$.title ? $JSCompiler_alias_FALSE$$ : $JSCompiler_alias_TRUE$$
};
$DvtChartAxisUtils$$.$isAxisLineRendered$ = function $$DvtChartAxisUtils$$$$isAxisLineRendered$$($chart$$48$$, $type$$103$$) {
  var $axisOptions$$2$$ = $chart$$48$$.$getOptions$()[$type$$103$$ + "Axis"];
  return"off" == $axisOptions$$2$$.rendered || "off" == $axisOptions$$2$$.axisLine.rendered ? $JSCompiler_alias_FALSE$$ : "auto" == $axisOptions$$2$$.axisLine.rendered && "x" != $type$$103$$ && $DvtChartTypeUtils$$.$isBLAC$($chart$$48$$) && !$DvtChartTypeUtils$$.$isPolar$($chart$$48$$) ? $JSCompiler_alias_FALSE$$ : $JSCompiler_alias_TRUE$$
};
$DvtChartAxisUtils$$.$isMajorTickRendered$ = function $$DvtChartAxisUtils$$$$isMajorTickRendered$$($chart$$49$$, $type$$104$$) {
  var $axisOptions$$3$$ = $chart$$49$$.$getOptions$()[$type$$104$$ + "Axis"];
  return"off" == $axisOptions$$3$$.rendered || "off" == $axisOptions$$3$$.majorTick.rendered ? $JSCompiler_alias_FALSE$$ : "auto" == $axisOptions$$3$$.majorTick.rendered && "x" == $type$$104$$ && $DvtChartTypeUtils$$.$isBLAC$($chart$$49$$) && !$DvtChartTypeUtils$$.$isPolar$($chart$$49$$) ? $JSCompiler_alias_FALSE$$ : $JSCompiler_alias_TRUE$$
};
$DvtChartAxisUtils$$.$isMinorTickRendered$ = function $$DvtChartAxisUtils$$$$isMinorTickRendered$$($chart$$50$$, $type$$105$$) {
  var $axisOptions$$4$$ = $chart$$50$$.$getOptions$()[$type$$105$$ + "Axis"];
  return"off" == $axisOptions$$4$$.rendered || "off" == $axisOptions$$4$$.minorTick.rendered ? $JSCompiler_alias_FALSE$$ : "on" == $axisOptions$$4$$.minorTick.rendered ? $JSCompiler_alias_TRUE$$ : $DvtChartAxisUtils$$.$isLog$($chart$$50$$, $type$$105$$)
};
$DvtChartAxisUtils$$.$isLog$ = function $$DvtChartAxisUtils$$$$isLog$$($chart$$51$$, $type$$106$$) {
  var $axisOptions$$5$$ = $chart$$51$$.$getOptions$()[$type$$106$$ + "Axis"], $minMax$$ = $DvtChartDataUtils$$.$getMinMaxValue$($chart$$51$$, $type$$106$$, $JSCompiler_alias_TRUE$$);
  return"log" == $axisOptions$$5$$.scale && 0 < $minMax$$.min && 0 < $minMax$$.max
};
$DvtChartAxisUtils$$.$getTickLabelHeight$ = function $$DvtChartAxisUtils$$$$getTickLabelHeight$$($chart$$52$$, $type$$107$$) {
  var $options$$44$$ = $chart$$52$$.$getOptions$(), $tickLabelStyle$$1$$ = $options$$44$$[$type$$107$$ + "Axis"].tickLabel.style;
  $tickLabelStyle$$1$$ instanceof dvt.$CSSStyle$ || ($tickLabelStyle$$1$$ = new dvt.$CSSStyle$($tickLabelStyle$$1$$));
  $tickLabelStyle$$1$$.$mergeUnder$(dvt.$Axis$.$getDefaults$($options$$44$$.skin).tickLabel.style);
  return dvt.$TextUtils$.$getTextStringHeight$($chart$$52$$.$getCtx$(), $tickLabelStyle$$1$$)
};
$DvtChartAxisUtils$$.$getTickLabelGapSize$ = function $$DvtChartAxisUtils$$$$getTickLabelGapSize$$($chart$$53$$, $type$$108$$) {
  if($DvtChartAxisUtils$$.$isTickLabelInside$($chart$$53$$, $type$$108$$)) {
    return 0
  }
  var $gapHeight_options$$45$$ = $chart$$53$$.$getOptions$(), $isHoriz$$7$$ = $DvtChartTypeUtils$$.$isHorizontal$($chart$$53$$), $scalingFactor$$1$$ = $DvtChartAxisUtils$$.$getGapScalingFactor$($chart$$53$$, $type$$108$$), $gapWidth$$ = Math.ceil($gapHeight_options$$45$$.layout.tickLabelGapWidth * $scalingFactor$$1$$), $gapHeight_options$$45$$ = Math.ceil($gapHeight_options$$45$$.layout.tickLabelGapHeight * $scalingFactor$$1$$);
  return"x" == $type$$108$$ ? $isHoriz$$7$$ ? $gapWidth$$ : $gapHeight_options$$45$$ : $isHoriz$$7$$ ? $gapHeight_options$$45$$ : $gapWidth$$
};
$DvtChartAxisUtils$$.$getGapScalingFactor$ = function $$DvtChartAxisUtils$$$$getGapScalingFactor$$($chart$$54$$, $type$$109$$) {
  return $DvtChartAxisUtils$$.$isAxisRendered$($chart$$54$$, $type$$109$$) ? $DvtChartAxisUtils$$.$getTickLabelHeight$($chart$$54$$, $type$$109$$) / 14 : 0
};
$DvtChartAxisUtils$$.$isTickLabelInside$ = function $$DvtChartAxisUtils$$$$isTickLabelInside$$($chart$$55$$, $type$$110$$) {
  return $DvtChartTypeUtils$$.$isPolar$($chart$$55$$) || $DvtChartTypeUtils$$.$isScatterBubble$($chart$$55$$) || $DvtChartTypeUtils$$.$isBLAC$($chart$$55$$) && "x" == $type$$110$$ ? $JSCompiler_alias_FALSE$$ : "inside" == $chart$$55$$.$getOptions$()[$type$$110$$ + "Axis"].tickLabel.position
};
$DvtChartAxisUtils$$.$getXAxisViewportMinMax$ = function $$DvtChartAxisUtils$$$$getXAxisViewportMinMax$$($chart$$56$$, $useGlobal$$) {
  var $options$$46$$ = $chart$$56$$.$getOptions$().xAxis, $isGroupAxis$$2$$ = $DvtChartAxisUtils$$.$hasGroupAxis$($chart$$56$$), $groupOffset$$ = $DvtChartAxisUtils$$.$getAxisOffset$($chart$$56$$);
  if($useGlobal$$) {
    var $globalMinMax$$ = $DvtChartAxisUtils$$.$getXAxisGlobalMinMax$($chart$$56$$)
  }
  var $min$$2$$ = $JSCompiler_alias_NULL$$;
  $options$$46$$.viewportMin != $JSCompiler_alias_NULL$$ ? $min$$2$$ = $options$$46$$.viewportMin : $options$$46$$.viewportStartGroup != $JSCompiler_alias_NULL$$ ? $min$$2$$ = $isGroupAxis$$2$$ ? $DvtChartDataUtils$$.$getGroupIndex$($chart$$56$$, $options$$46$$.viewportStartGroup) - $groupOffset$$ : $options$$46$$.viewportStartGroup : $useGlobal$$ && ($min$$2$$ = $globalMinMax$$.min);
  var $max$$2$$ = $JSCompiler_alias_NULL$$;
  $options$$46$$.viewportMax != $JSCompiler_alias_NULL$$ ? $max$$2$$ = $options$$46$$.viewportMax : $options$$46$$.viewportEndGroup != $JSCompiler_alias_NULL$$ ? $max$$2$$ = $isGroupAxis$$2$$ ? $DvtChartDataUtils$$.$getGroupIndex$($chart$$56$$, $options$$46$$.viewportEndGroup) + $groupOffset$$ : $options$$46$$.viewportEndGroup : $useGlobal$$ && ($max$$2$$ = $globalMinMax$$.max);
  return{min:$min$$2$$, max:$max$$2$$}
};
$DvtChartAxisUtils$$.$getXAxisGlobalMinMax$ = function $$DvtChartAxisUtils$$$$getXAxisGlobalMinMax$$($chart$$57$$) {
  var $options$$47$$ = $chart$$57$$.$getOptions$().xAxis, $isGroupAxis$$3$$ = $DvtChartAxisUtils$$.$hasGroupAxis$($chart$$57$$), $groupOffset$$1$$ = $DvtChartAxisUtils$$.$getAxisOffset$($chart$$57$$);
  if(!$isGroupAxis$$3$$) {
    var $minMax$$1$$ = $DvtChartDataUtils$$.$getMinMaxValue$($chart$$57$$, "x")
  }
  var $min$$3$$ = $JSCompiler_alias_NULL$$, $min$$3$$ = $options$$47$$.min != $JSCompiler_alias_NULL$$ ? $options$$47$$.min : $isGroupAxis$$3$$ ? 0 - $groupOffset$$1$$ : $minMax$$1$$.min, $max$$3$$ = $JSCompiler_alias_NULL$$, $max$$3$$ = $options$$47$$.max != $JSCompiler_alias_NULL$$ ? $options$$47$$.max : $isGroupAxis$$3$$ ? $DvtChartDataUtils$$.$getGroupCount$($chart$$57$$) - 1 + $groupOffset$$1$$ : $minMax$$1$$.max;
  return{min:$min$$3$$, max:$max$$3$$}
};
$DvtChartAxisUtils$$.$applyInitialZooming$ = function $$DvtChartAxisUtils$$$$applyInitialZooming$$($chart$$58$$, $availSpace$$21$$) {
  var $options$$48$$ = $chart$$58$$.$getOptions$(), $axisOptions$$7$$ = $options$$48$$.xAxis, $axisWidth_globalMin_initialZooming$$ = $options$$48$$.initialZooming;
  if($DvtChartTypeUtils$$.$isBLAC$($chart$$58$$) && !("off" == $options$$48$$.zoomAndScroll || "none" == $axisWidth_globalMin_initialZooming$$)) {
    $options$$48$$._initialZoomed && ("last" == $axisWidth_globalMin_initialZooming$$ ? $axisOptions$$7$$.viewportMin = $JSCompiler_alias_NULL$$ : $axisOptions$$7$$.viewportMax = $JSCompiler_alias_NULL$$);
    var $viewportMax_viewportMinMax$$ = $DvtChartAxisUtils$$.$getXAxisViewportMinMax$($chart$$58$$, $JSCompiler_alias_FALSE$$), $viewportMin$$ = $viewportMax_viewportMinMax$$.min, $viewportMax_viewportMinMax$$ = $viewportMax_viewportMinMax$$.max;
    if(!("last" == $axisWidth_globalMin_initialZooming$$ && $viewportMin$$ != $JSCompiler_alias_NULL$$ || "first" == $axisWidth_globalMin_initialZooming$$ && $viewportMax_viewportMinMax$$ != $JSCompiler_alias_NULL$$)) {
      var $axisWidth_globalMin_initialZooming$$ = $DvtChartTypeUtils$$.$isHorizontal$($chart$$58$$) ? $availSpace$$21$$.$h$ : $availSpace$$21$$.$w$, $maxNumGroups_maxViewportSize$$ = Math.floor($axisWidth_globalMin_initialZooming$$ / (2 * $DvtChartAxisUtils$$.$getTickLabelHeight$($chart$$58$$, "x"))) + $DvtChartAxisUtils$$.$getAxisOffset$($chart$$58$$), $numGroups$$ = $DvtChartDataUtils$$.$getGroupCount$($chart$$58$$) - 1;
      if(!($numGroups$$ <= $maxNumGroups_maxViewportSize$$)) {
        var $globalMax_globalMinMax$$1$$;
        $DvtChartAxisUtils$$.$hasGroupAxis$($chart$$58$$) ? ($axisWidth_globalMin_initialZooming$$ = 0, $globalMax_globalMinMax$$1$$ = $numGroups$$) : ($globalMax_globalMinMax$$1$$ = $DvtChartDataUtils$$.$getMinMaxValue$($chart$$58$$, "x"), $axisWidth_globalMin_initialZooming$$ = $globalMax_globalMinMax$$1$$.min, $globalMax_globalMinMax$$1$$ = $globalMax_globalMinMax$$1$$.max);
        $maxNumGroups_maxViewportSize$$ = $maxNumGroups_maxViewportSize$$ / $numGroups$$ * ($globalMax_globalMinMax$$1$$ - $axisWidth_globalMin_initialZooming$$);
        "last" == $options$$48$$.initialZooming ? ($viewportMax_viewportMinMax$$ == $JSCompiler_alias_NULL$$ && ($viewportMax_viewportMinMax$$ = $globalMax_globalMinMax$$1$$), $axisOptions$$7$$.viewportMin = Math.max($viewportMax_viewportMinMax$$ - $maxNumGroups_maxViewportSize$$, $axisWidth_globalMin_initialZooming$$)) : ($viewportMin$$ == $JSCompiler_alias_NULL$$ && ($viewportMin$$ = $axisWidth_globalMin_initialZooming$$), $axisOptions$$7$$.viewportMax = Math.min($viewportMin$$ + $maxNumGroups_maxViewportSize$$, 
        $globalMax_globalMinMax$$1$$));
        $options$$48$$._initialZoomed = $JSCompiler_alias_TRUE$$
      }
    }
  }
};
$DvtChartAxisUtils$$.$getGroupWidthRatios$ = function $$DvtChartAxisUtils$$$$getGroupWidthRatios$$($barWidthSum_chart$$59$$) {
  if(!$DvtChartTypeUtils$$.$hasBarSeries$($barWidthSum_chart$$59$$) && !$DvtChartTypeUtils$$.$hasCandlestickSeries$($barWidthSum_chart$$59$$)) {
    return $JSCompiler_alias_NULL$$
  }
  var $options$$49$$ = $barWidthSum_chart$$59$$.$getOptions$(), $barGapRatio_groupWidths$$ = $DvtChartStyleUtils$$.$getBarGapRatio$($barWidthSum_chart$$59$$);
  if(1 <= $barGapRatio_groupWidths$$) {
    return $options$$49$$._averageGroupZ = Infinity, $JSCompiler_alias_NULL$$
  }
  $options$$49$$._averageGroupZ = 0;
  for(var $numGroups$$1$$ = $DvtChartDataUtils$$.$getGroupCount$($barWidthSum_chart$$59$$), $isSplitDualY$$ = $DvtChartTypeUtils$$.$isSplitDualY$($barWidthSum_chart$$59$$), $categories$$3$$ = $DvtChartDataUtils$$.$getStackCategories$($barWidthSum_chart$$59$$, "bar"), $hasVaryingWidth$$ = $options$$49$$._hasVaryingBarWidth, $barWidths$$ = [], $yWidth$$, $y2Width$$, $i$$331$$, $g$$6$$ = 0;$g$$6$$ < $numGroups$$1$$;$g$$6$$++) {
    $y2Width$$ = $yWidth$$ = 0;
    if($hasVaryingWidth$$) {
      for($i$$331$$ = 0;$i$$331$$ < $categories$$3$$.y.length;$i$$331$$++) {
        $yWidth$$ += $DvtChartDataUtils$$.$getBarCategoryZ$($barWidthSum_chart$$59$$, $categories$$3$$.y[$i$$331$$], $g$$6$$, $JSCompiler_alias_FALSE$$)
      }
      for($i$$331$$ = 0;$i$$331$$ < $categories$$3$$.y2.length;$i$$331$$++) {
        $y2Width$$ += $DvtChartDataUtils$$.$getBarCategoryZ$($barWidthSum_chart$$59$$, $categories$$3$$.y2[$i$$331$$], $g$$6$$, $JSCompiler_alias_TRUE$$)
      }
    }else {
      $yWidth$$ = $categories$$3$$.y.length, $y2Width$$ = $categories$$3$$.y2.length
    }
    $barWidths$$.push($isSplitDualY$$ ? Math.max($yWidth$$, $y2Width$$) : $yWidth$$ + $y2Width$$)
  }
  $barWidthSum_chart$$59$$ = dvt.$ArrayUtils$.reduce($barWidths$$, function($barWidthSum_chart$$59$$, $options$$49$$) {
    return $barWidthSum_chart$$59$$ + $options$$49$$
  });
  var $gapWidthSum$$ = $barWidthSum_chart$$59$$ * $barGapRatio_groupWidths$$ / (1 - $barGapRatio_groupWidths$$), $barGapRatio_groupWidths$$ = dvt.$ArrayUtils$.map($barWidths$$, function($barWidthSum_chart$$59$$) {
    return $barWidthSum_chart$$59$$ + $gapWidthSum$$ / $numGroups$$1$$
  });
  $options$$49$$._averageGroupZ = ($barWidthSum_chart$$59$$ + $gapWidthSum$$) / $numGroups$$1$$;
  return $barGapRatio_groupWidths$$
};
$DvtChartAxisUtils$$.$isYAdjustmentNeeded$ = function $$DvtChartAxisUtils$$$$isYAdjustmentNeeded$$($chart$$60$$) {
  var $dataLabelPosition$$ = $chart$$60$$.$getOptions$().styleDefaults.dataLabelPosition, $isStackLabelRendered$$ = $DvtChartStyleUtils$$.$isStackLabelRendered$($chart$$60$$);
  return $DvtChartTypeUtils$$.$hasBarSeries$($chart$$60$$) && ("outsideBarEdge" == $dataLabelPosition$$ || $isStackLabelRendered$$) ? $JSCompiler_alias_TRUE$$ : $JSCompiler_alias_FALSE$$
};
var $DvtChartDataUtils$$ = {};
dvt.$Obj$.$createSubclass$($DvtChartDataUtils$$, dvt.$Obj$);
$DvtChartDataUtils$$.$hasData$ = function $$DvtChartDataUtils$$$$hasData$$($chart$$61$$) {
  var $options$$50_seriesCount$$6$$ = $chart$$61$$.$getOptions$();
  if(!$options$$50_seriesCount$$6$$ || !$options$$50_seriesCount$$6$$.series || 1 > $options$$50_seriesCount$$6$$.series.length) {
    return $JSCompiler_alias_FALSE$$
  }
  for(var $options$$50_seriesCount$$6$$ = $DvtChartDataUtils$$.$getSeriesCount$($chart$$61$$), $i$$332$$ = 0;$i$$332$$ < $options$$50_seriesCount$$6$$;$i$$332$$++) {
    var $seriesItem$$1$$ = $DvtChartDataUtils$$.$getSeriesItem$($chart$$61$$, $i$$332$$);
    if($seriesItem$$1$$ && $seriesItem$$1$$.items && 1 <= $seriesItem$$1$$.items.length) {
      return $JSCompiler_alias_TRUE$$
    }
  }
  return $JSCompiler_alias_FALSE$$
};
$DvtChartDataUtils$$.$hasInvalidData$ = function $$DvtChartDataUtils$$$$hasInvalidData$$($chart$$62$$) {
  return!$DvtChartDataUtils$$.$hasData$($chart$$62$$) || $DvtChartDataUtils$$.$hasInvalidTimeData$($chart$$62$$)
};
$DvtChartDataUtils$$.$hasInvalidTimeData$ = function $$DvtChartDataUtils$$$$hasInvalidTimeData$$($chart$$63$$) {
  if($DvtChartTypeUtils$$.$isFunnel$($chart$$63$$) || $DvtChartTypeUtils$$.$isPie$($chart$$63$$)) {
    return $JSCompiler_alias_FALSE$$
  }
  var $groupIndex$$14_options$$51$$ = $chart$$63$$.$getOptions$(), $groupCount$$4$$ = $DvtChartDataUtils$$.$getGroupCount$($chart$$63$$);
  if(!$groupIndex$$14_options$$51$$ || (!$groupIndex$$14_options$$51$$.series || 1 > $groupIndex$$14_options$$51$$.series.length) || 1 > $groupCount$$4$$) {
    return $JSCompiler_alias_TRUE$$
  }
  var $groupItem$$1_seriesIndex$$23$$, $seriesCount$$7$$ = $DvtChartDataUtils$$.$getSeriesCount$($chart$$63$$);
  if($DvtChartAxisUtils$$.$isMixedFrequency$($chart$$63$$)) {
    for($groupItem$$1_seriesIndex$$23$$ = 0;$groupItem$$1_seriesIndex$$23$$ < $seriesCount$$7$$;$groupItem$$1_seriesIndex$$23$$++) {
      for($groupIndex$$14_options$$51$$ = 0;$groupIndex$$14_options$$51$$ < $groupCount$$4$$;$groupIndex$$14_options$$51$$++) {
        var $dataItem$$7$$ = $DvtChartDataUtils$$.$getDataItem$($chart$$63$$, $groupItem$$1_seriesIndex$$23$$, $groupIndex$$14_options$$51$$);
        if($dataItem$$7$$ && ($dataItem$$7$$.x == $JSCompiler_alias_NULL$$ || isNaN($dataItem$$7$$.x))) {
          return $JSCompiler_alias_TRUE$$
        }
      }
    }
  }else {
    if($DvtChartAxisUtils$$.$hasTimeAxis$($chart$$63$$)) {
      for($groupIndex$$14_options$$51$$ = 0;$groupIndex$$14_options$$51$$ < $groupCount$$4$$;$groupIndex$$14_options$$51$$++) {
        if($groupItem$$1_seriesIndex$$23$$ = $DvtChartDataUtils$$.$getGroup$($chart$$63$$, $groupIndex$$14_options$$51$$), $groupItem$$1_seriesIndex$$23$$ == $JSCompiler_alias_NULL$$ || isNaN($groupItem$$1_seriesIndex$$23$$)) {
          return $JSCompiler_alias_TRUE$$
        }
      }
    }
  }
  return $JSCompiler_alias_FALSE$$
};
$DvtChartDataUtils$$.$hasSeriesData$ = function $$DvtChartDataUtils$$$$hasSeriesData$$($chart$$64$$, $seriesIndex$$24$$) {
  var $dataItems$$ = $DvtChartDataUtils$$.$getSeriesItem$($chart$$64$$, $seriesIndex$$24$$).items;
  if($dataItems$$) {
    for(var $i$$333$$ = 0;$i$$333$$ < $dataItems$$.length;$i$$333$$++) {
      if($dataItems$$[$i$$333$$] != $JSCompiler_alias_NULL$$) {
        return $JSCompiler_alias_TRUE$$
      }
    }
  }
  return $JSCompiler_alias_FALSE$$
};
$DvtChartDataUtils$$.$processDataObject$ = function $$DvtChartDataUtils$$$$processDataObject$$($chart$$65$$) {
  if($DvtChartDataUtils$$.$hasData$($chart$$65$$)) {
    var $options$$52_refObjs$$ = $chart$$65$$.$getOptions$();
    $DvtChartTypeUtils$$.$isValidType$($chart$$65$$) || ($options$$52_refObjs$$.type = "bar");
    var $isStock_total$$3_volumeItem$$ = $DvtChartTypeUtils$$.$isStock$($chart$$65$$);
    $isStock_total$$3_volumeItem$$ && ($options$$52_refObjs$$._hasVolume = $JSCompiler_alias_FALSE$$, 1 < $DvtChartDataUtils$$.$getSeriesCount$($chart$$65$$) && ($options$$52_refObjs$$.series = $options$$52_refObjs$$.series.slice(0, 1)));
    var $isBLAC_value$$112$$ = $DvtChartTypeUtils$$.$isBLAC$($chart$$65$$);
    $options$$52_refObjs$$._hasVaryingBarWidth = $JSCompiler_alias_FALSE$$;
    for(var $groups$$2_maxGroups$$ = 0, $arSeriesStyle$$ = $chart$$65$$.$SeriesStyleArray$, $groupItems_seriesCount$$8$$ = $DvtChartDataUtils$$.$getSeriesCount$($chart$$65$$), $i$$334_volumeSeries$$ = 0;$i$$334_volumeSeries$$ < $groupItems_seriesCount$$8$$;$i$$334_volumeSeries$$++) {
      var $groupCount$$5_itemIndex$$7_j$$50_series$$4$$ = $DvtChartDataUtils$$.$getSeries$($chart$$65$$, $i$$334_volumeSeries$$);
      $groupCount$$5_itemIndex$$7_j$$50_series$$4$$ != $JSCompiler_alias_NULL$$ && 0 > dvt.$ArrayUtils$.$getIndex$($arSeriesStyle$$, $groupCount$$5_itemIndex$$7_j$$50_series$$4$$) && $arSeriesStyle$$.push($groupCount$$5_itemIndex$$7_j$$50_series$$4$$);
      var $group$$15_seriesItem$$3_seriesItems$$2_sorting$$ = $DvtChartDataUtils$$.$getSeriesItem$($chart$$65$$, $i$$334_volumeSeries$$);
      $group$$15_seriesItem$$3_seriesItems$$2_sorting$$ && ($group$$15_seriesItem$$3_seriesItems$$2_sorting$$.items && $group$$15_seriesItem$$3_seriesItems$$2_sorting$$.items.length > $groups$$2_maxGroups$$) && ($groups$$2_maxGroups$$ = $group$$15_seriesItem$$3_seriesItems$$2_sorting$$.items.length);
      if("hidden" == $group$$15_seriesItem$$3_seriesItems$$2_sorting$$.visibility) {
        var $hiddenCategories_items$$13$$ = $DvtChartStyleUtils$$.$getHiddenCategories$($chart$$65$$);
        0 > dvt.$ArrayUtils$.$getIndex$($hiddenCategories_items$$13$$, $groupCount$$5_itemIndex$$7_j$$50_series$$4$$) && $hiddenCategories_items$$13$$.push($groupCount$$5_itemIndex$$7_j$$50_series$$4$$)
      }
      $group$$15_seriesItem$$3_seriesItems$$2_sorting$$.visibility = $JSCompiler_alias_NULL$$;
      if($group$$15_seriesItem$$3_seriesItems$$2_sorting$$ && $group$$15_seriesItem$$3_seriesItems$$2_sorting$$.items) {
        for(var $hiddenCategories_items$$13$$ = $group$$15_seriesItem$$3_seriesItems$$2_sorting$$.items, $item$$12$$, $groupCount$$5_itemIndex$$7_j$$50_series$$4$$ = 0;$groupCount$$5_itemIndex$$7_j$$50_series$$4$$ < $hiddenCategories_items$$13$$.length;$groupCount$$5_itemIndex$$7_j$$50_series$$4$$++) {
          $hiddenCategories_items$$13$$[$groupCount$$5_itemIndex$$7_j$$50_series$$4$$] && ($item$$12$$ = $hiddenCategories_items$$13$$[$groupCount$$5_itemIndex$$7_j$$50_series$$4$$], !isNaN($item$$12$$) && $item$$12$$ ? $item$$12$$ = Number($item$$12$$) : (!$DvtChartAxisUtils$$.$isMixedFrequency$($chart$$65$$) && $item$$12$$.x && ($item$$12$$.x = Number($item$$12$$.x)), $item$$12$$.y && ($item$$12$$.y = Number($item$$12$$.y)), $item$$12$$.z && ($item$$12$$.z = Number($item$$12$$.z), $isBLAC_value$$112$$ && 
          1 != $item$$12$$.z && ($options$$52_refObjs$$._hasVaryingBarWidth = $JSCompiler_alias_TRUE$$)), $item$$12$$.value && ($item$$12$$.value = Number($item$$12$$.value)), $item$$12$$.targetValue && ($item$$12$$.targetValue = Number($item$$12$$.targetValue)), $item$$12$$.open && ($item$$12$$.open = Number($item$$12$$.open)), $item$$12$$.close && ($item$$12$$.close = Number($item$$12$$.close)), $item$$12$$.low && ($item$$12$$.low = Number($item$$12$$.low)), $item$$12$$.high && ($item$$12$$.high = 
          Number($item$$12$$.high)), $item$$12$$.volume && ($item$$12$$.volume = Number($item$$12$$.volume), $options$$52_refObjs$$._hasVolume = $JSCompiler_alias_TRUE$$)), $hiddenCategories_items$$13$$[$groupCount$$5_itemIndex$$7_j$$50_series$$4$$] = $item$$12$$)
        }
      }
    }
    if($isStock_total$$3_volumeItem$$ && $DvtChartDataUtils$$.$hasVolumeSeries$($chart$$65$$) && !$DvtChartTypeUtils$$.$isOverview$($chart$$65$$)) {
      $i$$334_volumeSeries$$ = dvt.$JsonUtils$.$clone$($DvtChartDataUtils$$.$getSeriesItem$($chart$$65$$, 0));
      $i$$334_volumeSeries$$.assignedToY2 = "on";
      $i$$334_volumeSeries$$.type = "bar";
      $i$$334_volumeSeries$$.categories = $DvtChartDataUtils$$.$getSeriesCategories$($chart$$65$$, 0);
      $i$$334_volumeSeries$$.id = "_volume";
      $i$$334_volumeSeries$$._selectable = "off";
      $i$$334_volumeSeries$$.items = [];
      for($groupCount$$5_itemIndex$$7_j$$50_series$$4$$ = 0;$groupCount$$5_itemIndex$$7_j$$50_series$$4$$ < $group$$15_seriesItem$$3_seriesItems$$2_sorting$$.items.length;$groupCount$$5_itemIndex$$7_j$$50_series$$4$$++) {
        $isStock_total$$3_volumeItem$$ = {}, $isStock_total$$3_volumeItem$$.color = $DvtChartStyleUtils$$.$getStockVolumeColor$($chart$$65$$, $groupCount$$5_itemIndex$$7_j$$50_series$$4$$), $isStock_total$$3_volumeItem$$.x = $group$$15_seriesItem$$3_seriesItems$$2_sorting$$.items[$groupCount$$5_itemIndex$$7_j$$50_series$$4$$].x, $isStock_total$$3_volumeItem$$.value = $group$$15_seriesItem$$3_seriesItems$$2_sorting$$.items[$groupCount$$5_itemIndex$$7_j$$50_series$$4$$].volume, $i$$334_volumeSeries$$.items.push($isStock_total$$3_volumeItem$$)
      }
      $options$$52_refObjs$$.series.push($i$$334_volumeSeries$$)
    }
    $options$$52_refObjs$$ = $DvtChartRefObjUtils$$.$getRefObjs$($chart$$65$$);
    for($i$$334_volumeSeries$$ = 0;$i$$334_volumeSeries$$ < $options$$52_refObjs$$.length;$i$$334_volumeSeries$$++) {
      if($hiddenCategories_items$$13$$ = $options$$52_refObjs$$[$i$$334_volumeSeries$$].items) {
        for($groupCount$$5_itemIndex$$7_j$$50_series$$4$$ = 0;$groupCount$$5_itemIndex$$7_j$$50_series$$4$$ < $hiddenCategories_items$$13$$.length;$groupCount$$5_itemIndex$$7_j$$50_series$$4$$++) {
          if($item$$12$$ = $hiddenCategories_items$$13$$[$groupCount$$5_itemIndex$$7_j$$50_series$$4$$]) {
            isNaN($item$$12$$) ? (!$DvtChartAxisUtils$$.$isMixedFrequency$($chart$$65$$) && $item$$12$$.x && ($item$$12$$.x = Number($item$$12$$.x)), $item$$12$$.max && ($item$$12$$.max = Number($item$$12$$.max)), $item$$12$$.min && ($item$$12$$.min = Number($item$$12$$.min)), $item$$12$$.value && ($item$$12$$.value = Number($item$$12$$.value))) : $hiddenCategories_items$$13$$[$groupCount$$5_itemIndex$$7_j$$50_series$$4$$] = Number($item$$12$$)
          }
        }
      }
    }
    $options$$52_refObjs$$ = $chart$$65$$.$getOptions$();
    $options$$52_refObjs$$.groups || ($options$$52_refObjs$$.groups = []);
    $groupCount$$5_itemIndex$$7_j$$50_series$$4$$ = $DvtChartDataUtils$$.$getGroupCount$($chart$$65$$);
    for($i$$334_volumeSeries$$ = 0;$i$$334_volumeSeries$$ < $groups$$2_maxGroups$$ - $groupCount$$5_itemIndex$$7_j$$50_series$$4$$;$i$$334_volumeSeries$$++) {
      $group$$15_seriesItem$$3_seriesItems$$2_sorting$$ = dvt.$Bundle$.$getTranslation$($options$$52_refObjs$$, "labelDefaultGroupName", dvt.$Bundle$.$CHART_PREFIX$, "DEFAULT_GROUP_NAME", $options$$52_refObjs$$.groups.length + 1), $options$$52_refObjs$$.groups.push($group$$15_seriesItem$$3_seriesItems$$2_sorting$$)
    }
    $chart$$65$$.$Cache$.groupsArray = $JSCompiler_alias_NULL$$;
    $DvtChartDataUtils$$.$_processTimeAxis$($chart$$65$$);
    $group$$15_seriesItem$$3_seriesItems$$2_sorting$$ = $options$$52_refObjs$$.sorting;
    $group$$15_seriesItem$$3_seriesItems$$2_sorting$$ = "on" == $group$$15_seriesItem$$3_seriesItems$$2_sorting$$ ? "descending" : "ascending" != $group$$15_seriesItem$$3_seriesItems$$2_sorting$$ && "descending" != $group$$15_seriesItem$$3_seriesItems$$2_sorting$$ ? "off" : $group$$15_seriesItem$$3_seriesItems$$2_sorting$$;
    if($DvtChartTypeUtils$$.$isBLAC$($chart$$65$$) && $DvtChartAxisUtils$$.$hasGroupAxis$($chart$$65$$) && "off" != $group$$15_seriesItem$$3_seriesItems$$2_sorting$$ && 1 == $DvtChartDataUtils$$.$getNumLevels$($chart$$65$$)) {
      for(var $groups$$2_maxGroups$$ = $DvtChartDataUtils$$.$getGroups$($chart$$65$$), $totalsMap$$ = {}, $groupCount$$5_itemIndex$$7_j$$50_series$$4$$ = 0;$groupCount$$5_itemIndex$$7_j$$50_series$$4$$ < $groups$$2_maxGroups$$.length;$groupCount$$5_itemIndex$$7_j$$50_series$$4$$++) {
        for($i$$334_volumeSeries$$ = $isStock_total$$3_volumeItem$$ = 0;$i$$334_volumeSeries$$ <= $groupItems_seriesCount$$8$$;$i$$334_volumeSeries$$++) {
          $DvtChartStyleUtils$$.$isSeriesRendered$($chart$$65$$, $i$$334_volumeSeries$$) && !$DvtChartDataUtils$$.$isAssignedToY2$($chart$$65$$, $i$$334_volumeSeries$$) && ($isBLAC_value$$112$$ = $DvtChartDataUtils$$.getValue($chart$$65$$, $i$$334_volumeSeries$$, $groupCount$$5_itemIndex$$7_j$$50_series$$4$$), $isStock_total$$3_volumeItem$$ += $isBLAC_value$$112$$ == $JSCompiler_alias_NULL$$ || isNaN($isBLAC_value$$112$$) ? 0 : $isBLAC_value$$112$$)
        }
        $totalsMap$$[$groups$$2_maxGroups$$[$groupCount$$5_itemIndex$$7_j$$50_series$$4$$]] = {index:$groupCount$$5_itemIndex$$7_j$$50_series$$4$$, total:$isStock_total$$3_volumeItem$$, group:$options$$52_refObjs$$.groups[$groupCount$$5_itemIndex$$7_j$$50_series$$4$$]}
      }
      "ascending" == $group$$15_seriesItem$$3_seriesItems$$2_sorting$$ ? $groups$$2_maxGroups$$.sort(function($chart$$65$$, $options$$52_refObjs$$) {
        return $totalsMap$$[$chart$$65$$].total - $totalsMap$$[$options$$52_refObjs$$].total
      }) : $groups$$2_maxGroups$$.sort(function($chart$$65$$, $options$$52_refObjs$$) {
        return $totalsMap$$[$options$$52_refObjs$$].total - $totalsMap$$[$chart$$65$$].total
      });
      for($i$$334_volumeSeries$$ = 0;$i$$334_volumeSeries$$ < $groupItems_seriesCount$$8$$;$i$$334_volumeSeries$$++) {
        $group$$15_seriesItem$$3_seriesItems$$2_sorting$$ = [];
        for($groupCount$$5_itemIndex$$7_j$$50_series$$4$$ = 0;$groupCount$$5_itemIndex$$7_j$$50_series$$4$$ < $groups$$2_maxGroups$$.length;$groupCount$$5_itemIndex$$7_j$$50_series$$4$$++) {
          $group$$15_seriesItem$$3_seriesItems$$2_sorting$$.push($DvtChartDataUtils$$.$getDataItem$($chart$$65$$, $i$$334_volumeSeries$$, $totalsMap$$[$groups$$2_maxGroups$$[$groupCount$$5_itemIndex$$7_j$$50_series$$4$$]].index))
        }
        $options$$52_refObjs$$.series[$i$$334_volumeSeries$$].items = $group$$15_seriesItem$$3_seriesItems$$2_sorting$$
      }
      $groupItems_seriesCount$$8$$ = [];
      for($groupCount$$5_itemIndex$$7_j$$50_series$$4$$ = 0;$groupCount$$5_itemIndex$$7_j$$50_series$$4$$ < $groups$$2_maxGroups$$.length;$groupCount$$5_itemIndex$$7_j$$50_series$$4$$++) {
        $groupItems_seriesCount$$8$$.push($totalsMap$$[$groups$$2_maxGroups$$[$groupCount$$5_itemIndex$$7_j$$50_series$$4$$]].group)
      }
      $options$$52_refObjs$$.groups = $groupItems_seriesCount$$8$$;
      $chart$$65$$.$Cache$ = {}
    }
    $DvtChartDataUtils$$.$_sanitizeAxis$($options$$52_refObjs$$.xAxis);
    $DvtChartDataUtils$$.$_sanitizeAxis$($options$$52_refObjs$$.yAxis);
    $DvtChartDataUtils$$.$_sanitizeAxis$($options$$52_refObjs$$.y2Axis)
  }
};
$DvtChartDataUtils$$.$_sanitizeAxis$ = function $$DvtChartDataUtils$$$$_sanitizeAxis$$($axisOptions$$8$$) {
  $axisOptions$$8$$.min == $axisOptions$$8$$.max && ($axisOptions$$8$$.min = $JSCompiler_alias_NULL$$, $axisOptions$$8$$.max = $JSCompiler_alias_NULL$$)
};
$DvtChartDataUtils$$.$_sanitizeDateTime$ = function $$DvtChartDataUtils$$$$_sanitizeDateTime$$($context$$139$$, $dateTime$$) {
  var $ret$$47$$ = $JSCompiler_alias_NULL$$, $isoToDateConverter$$ = $context$$139$$.$getLocaleHelpers$.isoToDateConverter;
  if($isoToDateConverter$$) {
    try {
      $ret$$47$$ = $isoToDateConverter$$($dateTime$$)
    }catch($err$$) {
      $ret$$47$$ = $JSCompiler_alias_NULL$$
    }
    $ret$$47$$ != $JSCompiler_alias_NULL$$ && ($ret$$47$$ = $ret$$47$$.getTime())
  }
  $ret$$47$$ == $JSCompiler_alias_NULL$$ && ($ret$$47$$ = Date.parse($dateTime$$));
  isNaN($ret$$47$$) && ($ret$$47$$ = Number($dateTime$$));
  return $ret$$47$$
};
$DvtChartDataUtils$$.$_processTimeAxis$ = function $$DvtChartDataUtils$$$$_processTimeAxis$$($chart$$66_refObjs$$1$$) {
  var $context$$140$$ = $chart$$66_refObjs$$1$$.$getCtx$(), $i$$335_options$$53_xOptions$$ = $chart$$66_refObjs$$1$$.$getOptions$(), $group$$16_seriesIndex$$25$$, $groupIndex$$15_items$$14$$, $seriesCount$$9$$ = $DvtChartDataUtils$$.$getSeriesCount$($chart$$66_refObjs$$1$$), $groupCount$$6_j$$51$$ = $DvtChartDataUtils$$.$getGroupCount$($chart$$66_refObjs$$1$$);
  if($DvtChartAxisUtils$$.$isMixedFrequency$($chart$$66_refObjs$$1$$)) {
    for($group$$16_seriesIndex$$25$$ = 0;$group$$16_seriesIndex$$25$$ < $seriesCount$$9$$;$group$$16_seriesIndex$$25$$++) {
      for($groupIndex$$15_items$$14$$ = 0;$groupIndex$$15_items$$14$$ < $groupCount$$6_j$$51$$;$groupIndex$$15_items$$14$$++) {
        var $dataItem$$8$$ = $DvtChartDataUtils$$.$getDataItem$($chart$$66_refObjs$$1$$, $group$$16_seriesIndex$$25$$, $groupIndex$$15_items$$14$$);
        $dataItem$$8$$ != $JSCompiler_alias_NULL$$ && "string" == typeof $dataItem$$8$$.x && $dataItem$$8$$.x != $JSCompiler_alias_NULL$$ && ($dataItem$$8$$.x = $DvtChartDataUtils$$.$_sanitizeDateTime$($context$$140$$, $dataItem$$8$$.x))
      }
    }
  }else {
    if($DvtChartAxisUtils$$.$hasTimeAxis$($chart$$66_refObjs$$1$$)) {
      for($groupIndex$$15_items$$14$$ = 0;$groupIndex$$15_items$$14$$ < $groupCount$$6_j$$51$$;$groupIndex$$15_items$$14$$++) {
        $group$$16_seriesIndex$$25$$ = $DvtChartDataUtils$$.$getGroup$($chart$$66_refObjs$$1$$, $groupIndex$$15_items$$14$$), $group$$16_seriesIndex$$25$$ != $JSCompiler_alias_NULL$$ && ($i$$335_options$$53_xOptions$$.groups[$groupIndex$$15_items$$14$$] = $DvtChartDataUtils$$.$_sanitizeDateTime$($context$$140$$, $group$$16_seriesIndex$$25$$))
      }
      $chart$$66_refObjs$$1$$.$Cache$.groupsArray = $JSCompiler_alias_NULL$$
    }
  }
  if($DvtChartAxisUtils$$.$hasTimeAxis$($chart$$66_refObjs$$1$$)) {
    $i$$335_options$$53_xOptions$$ = $i$$335_options$$53_xOptions$$.xAxis;
    $i$$335_options$$53_xOptions$$.dataMin != $JSCompiler_alias_NULL$$ && ($i$$335_options$$53_xOptions$$.dataMin = $DvtChartDataUtils$$.$_sanitizeDateTime$($context$$140$$, $i$$335_options$$53_xOptions$$.dataMin));
    $i$$335_options$$53_xOptions$$.dataMax != $JSCompiler_alias_NULL$$ && ($i$$335_options$$53_xOptions$$.dataMax = $DvtChartDataUtils$$.$_sanitizeDateTime$($context$$140$$, $i$$335_options$$53_xOptions$$.dataMax));
    $i$$335_options$$53_xOptions$$.min != $JSCompiler_alias_NULL$$ && ($i$$335_options$$53_xOptions$$.min = $DvtChartDataUtils$$.$_sanitizeDateTime$($context$$140$$, $i$$335_options$$53_xOptions$$.min));
    $i$$335_options$$53_xOptions$$.max != $JSCompiler_alias_NULL$$ && ($i$$335_options$$53_xOptions$$.max = $DvtChartDataUtils$$.$_sanitizeDateTime$($context$$140$$, $i$$335_options$$53_xOptions$$.max));
    $i$$335_options$$53_xOptions$$.viewportMin != $JSCompiler_alias_NULL$$ && ($i$$335_options$$53_xOptions$$.viewportMin = $DvtChartDataUtils$$.$_sanitizeDateTime$($context$$140$$, $i$$335_options$$53_xOptions$$.viewportMin));
    $i$$335_options$$53_xOptions$$.viewportMax != $JSCompiler_alias_NULL$$ && ($i$$335_options$$53_xOptions$$.viewportMax = $DvtChartDataUtils$$.$_sanitizeDateTime$($context$$140$$, $i$$335_options$$53_xOptions$$.viewportMax));
    $i$$335_options$$53_xOptions$$.viewportStartGroup != $JSCompiler_alias_NULL$$ && ($i$$335_options$$53_xOptions$$.viewportStartGroup = $DvtChartDataUtils$$.$_sanitizeDateTime$($context$$140$$, $i$$335_options$$53_xOptions$$.viewportStartGroup));
    $i$$335_options$$53_xOptions$$.viewportEndGroup != $JSCompiler_alias_NULL$$ && ($i$$335_options$$53_xOptions$$.viewportEndGroup = $DvtChartDataUtils$$.$_sanitizeDateTime$($context$$140$$, $i$$335_options$$53_xOptions$$.viewportEndGroup));
    $chart$$66_refObjs$$1$$ = $DvtChartRefObjUtils$$.$getRefObjs$($chart$$66_refObjs$$1$$);
    for($i$$335_options$$53_xOptions$$ = 0;$i$$335_options$$53_xOptions$$ < $chart$$66_refObjs$$1$$.length;$i$$335_options$$53_xOptions$$++) {
      if($groupIndex$$15_items$$14$$ = $chart$$66_refObjs$$1$$[$i$$335_options$$53_xOptions$$].items) {
        for($groupCount$$6_j$$51$$ = 0;$groupCount$$6_j$$51$$ < $groupIndex$$15_items$$14$$.length;$groupCount$$6_j$$51$$++) {
          $groupIndex$$15_items$$14$$[$groupCount$$6_j$$51$$].x != $JSCompiler_alias_NULL$$ && ($groupIndex$$15_items$$14$$[$groupCount$$6_j$$51$$].x = $DvtChartDataUtils$$.$_sanitizeDateTime$($context$$140$$, $groupIndex$$15_items$$14$$[$groupCount$$6_j$$51$$].x))
        }
      }
    }
  }
};
$DvtChartDataUtils$$.$getSeriesCount$ = function $$DvtChartDataUtils$$$$getSeriesCount$$($chart$$67$$) {
  return $chart$$67$$.$getOptions$().series.length
};
$DvtChartDataUtils$$.$getY2SeriesCount$ = function $$DvtChartDataUtils$$$$getY2SeriesCount$$($chart$$68$$) {
  for(var $y2SeriesCount$$ = 0, $seriesCount$$10$$ = $DvtChartDataUtils$$.$getSeriesCount$($chart$$68$$), $seriesIndex$$26$$ = 0;$seriesIndex$$26$$ < $seriesCount$$10$$;$seriesIndex$$26$$++) {
    $DvtChartDataUtils$$.$isAssignedToY2$($chart$$68$$, $seriesIndex$$26$$) && $y2SeriesCount$$++
  }
  return $y2SeriesCount$$
};
$DvtChartDataUtils$$.$getSeries$ = function $$DvtChartDataUtils$$$$getSeries$$($chart$$69$$, $seriesIndex$$27$$) {
  var $seriesItem$$4$$ = $DvtChartDataUtils$$.$getSeriesItem$($chart$$69$$, $seriesIndex$$27$$);
  return $seriesItem$$4$$ ? $seriesItem$$4$$.id ? $seriesItem$$4$$.id : $seriesItem$$4$$.name || "" == $seriesItem$$4$$.name ? $seriesItem$$4$$.name : String($seriesIndex$$27$$) : $JSCompiler_alias_NULL$$
};
$DvtChartDataUtils$$.$getSeriesLabel$ = function $$DvtChartDataUtils$$$$getSeriesLabel$$($chart$$70$$, $seriesIndex$$28$$) {
  var $seriesItem$$5$$ = $DvtChartDataUtils$$.$getSeriesItem$($chart$$70$$, $seriesIndex$$28$$);
  return $seriesItem$$5$$ && ($seriesItem$$5$$.name || "" == $seriesItem$$5$$.name) ? $seriesItem$$5$$.name : $JSCompiler_alias_NULL$$
};
$DvtChartDataUtils$$.$getSeriesIndex$ = function $$DvtChartDataUtils$$$$getSeriesIndex$$($chart$$71$$, $series$$5$$) {
  for(var $numSeries$$1$$ = $DvtChartDataUtils$$.$getSeriesCount$($chart$$71$$), $seriesIndex$$29$$ = 0;$seriesIndex$$29$$ < $numSeries$$1$$;$seriesIndex$$29$$++) {
    if($DvtChartDataUtils$$.$getSeries$($chart$$71$$, $seriesIndex$$29$$) == $series$$5$$) {
      return $seriesIndex$$29$$
    }
  }
  return-1
};
$DvtChartDataUtils$$.$getSeriesStyleIndex$ = function $$DvtChartDataUtils$$$$getSeriesStyleIndex$$($chart$$72$$, $series$$6$$) {
  return $series$$6$$ ? dvt.$ArrayUtils$.$getIndex$($chart$$72$$.$SeriesStyleArray$, $series$$6$$) : $DvtChartDataUtils$$.$getSeriesIndex$($chart$$72$$, $series$$6$$)
};
$DvtChartDataUtils$$.$getSeriesItem$ = function $$DvtChartDataUtils$$$$getSeriesItem$$($chart$$73$$, $seriesIndex$$30$$) {
  if(isNaN($seriesIndex$$30$$) || $seriesIndex$$30$$ == $JSCompiler_alias_NULL$$) {
    return $JSCompiler_alias_NULL$$
  }
  var $options$$54$$ = $chart$$73$$.$getOptions$();
  if($options$$54$$.series && $options$$54$$.series.length > $seriesIndex$$30$$) {
    return $options$$54$$.series[$seriesIndex$$30$$]
  }
};
$DvtChartDataUtils$$.$getDataItem$ = function $$DvtChartDataUtils$$$$getDataItem$$($chart$$74_seriesItem$$6$$, $seriesIndex$$31$$, $groupIndex$$16$$) {
  return isNaN($groupIndex$$16$$) || $groupIndex$$16$$ == $JSCompiler_alias_NULL$$ || 0 > $groupIndex$$16$$ ? $JSCompiler_alias_NULL$$ : ($chart$$74_seriesItem$$6$$ = $DvtChartDataUtils$$.$getSeriesItem$($chart$$74_seriesItem$$6$$, $seriesIndex$$31$$)) && $chart$$74_seriesItem$$6$$.items && $chart$$74_seriesItem$$6$$.items.length > $groupIndex$$16$$ ? $chart$$74_seriesItem$$6$$.items[$groupIndex$$16$$] : $JSCompiler_alias_NULL$$
};
$DvtChartDataUtils$$.$getGroupCount$ = function $$DvtChartDataUtils$$$$getGroupCount$$($chart$$75$$) {
  return $DvtChartDataUtils$$.$_getGroupsArray$($chart$$75$$).length
};
$DvtChartDataUtils$$.$getGroup$ = function $$DvtChartDataUtils$$$$getGroup$$($chart$$76$$, $groupIndex$$17$$) {
  if(0 <= $groupIndex$$17$$ && $groupIndex$$17$$ < $DvtChartDataUtils$$.$getGroupCount$($chart$$76$$)) {
    var $group$$17$$ = $DvtChartDataUtils$$.$_getGroupsArray$($chart$$76$$)[$groupIndex$$17$$];
    if($group$$17$$) {
      return $group$$17$$.id ? $group$$17$$.id : $group$$17$$.name || "" == $group$$17$$.name ? $group$$17$$.name : $group$$17$$
    }
  }
  return $JSCompiler_alias_NULL$$
};
$DvtChartDataUtils$$.$getGroupIndex$ = function $$DvtChartDataUtils$$$$getGroupIndex$$($chart$$77$$, $group$$18$$) {
  for(var $groups$$3$$ = $DvtChartDataUtils$$.$getGroups$($chart$$77$$), $i$$336$$ = 0;$i$$336$$ < $groups$$3$$.length;$i$$336$$++) {
    if($group$$18$$ instanceof Array && $groups$$3$$[$i$$336$$] instanceof Array ? dvt.$ArrayUtils$.$equals$($group$$18$$, $groups$$3$$[$i$$336$$]) : $group$$18$$ == $groups$$3$$[$i$$336$$]) {
      return $i$$336$$
    }
  }
  return-1
};
$DvtChartDataUtils$$.$getGroupLabel$ = function $$DvtChartDataUtils$$$$getGroupLabel$$($chart$$78$$, $groupIndex$$18$$) {
  if(0 <= $groupIndex$$18$$ && $groupIndex$$18$$ < $DvtChartDataUtils$$.$getGroupCount$($chart$$78$$)) {
    var $group$$19$$ = $DvtChartDataUtils$$.$_getGroupsArray$($chart$$78$$)[$groupIndex$$18$$];
    if($group$$19$$) {
      return $group$$19$$.name ? $group$$19$$.name : $group$$19$$.id != $JSCompiler_alias_NULL$$ ? "" : $group$$19$$
    }
  }
  return $JSCompiler_alias_NULL$$
};
$DvtChartDataUtils$$.$getGroups$ = function $$DvtChartDataUtils$$$$getGroups$$($chart$$79$$) {
  for(var $groupCount$$7$$ = $DvtChartDataUtils$$.$getGroupCount$($chart$$79$$), $groups$$4$$ = [], $groupIndex$$19$$ = 0;$groupIndex$$19$$ < $groupCount$$7$$;$groupIndex$$19$$++) {
    $groups$$4$$.push($DvtChartDataUtils$$.$getGroup$($chart$$79$$, $groupIndex$$19$$))
  }
  return $groups$$4$$
};
$DvtChartDataUtils$$.$_getGroupsArray$ = function $$DvtChartDataUtils$$$$_getGroupsArray$$($chart$$80$$) {
  var $i$$337_options$$55$$ = $chart$$80$$.$getOptions$(), $groupsArray$$1$$ = $chart$$80$$.$Cache$.groupsArray;
  if(!$groupsArray$$1$$) {
    $groupsArray$$1$$ = [];
    $i$$337_options$$55$$.groups && ($groupsArray$$1$$ = $DvtChartDataUtils$$.$_getNestedGroups$($i$$337_options$$55$$.groups, $groupsArray$$1$$));
    for($i$$337_options$$55$$ = 0;$i$$337_options$$55$$ < $groupsArray$$1$$.length;$i$$337_options$$55$$++) {
      1 == $groupsArray$$1$$[$i$$337_options$$55$$].id.length && ($groupsArray$$1$$[$i$$337_options$$55$$].id = $groupsArray$$1$$[$i$$337_options$$55$$].id[0], $groupsArray$$1$$[$i$$337_options$$55$$].name = $groupsArray$$1$$[$i$$337_options$$55$$].name[0])
    }
    $chart$$80$$.$Cache$.groupsArray = $groupsArray$$1$$
  }
  return $groupsArray$$1$$
};
$DvtChartDataUtils$$.$_getNestedGroups$ = function $$DvtChartDataUtils$$$$_getNestedGroups$$($groups$$5$$, $groupsArray$$2$$) {
  if($groups$$5$$) {
    for(var $i$$338$$ = 0;$i$$338$$ < $groups$$5$$.length;$i$$338$$++) {
      var $group$$20_innerGroupArray$$ = $groups$$5$$[$i$$338$$], $elementId$$ = $group$$20_innerGroupArray$$.id ? $group$$20_innerGroupArray$$.id : $group$$20_innerGroupArray$$.name ? $group$$20_innerGroupArray$$.name : $group$$20_innerGroupArray$$, $elementName$$1$$ = $group$$20_innerGroupArray$$.name ? $group$$20_innerGroupArray$$.name : $group$$20_innerGroupArray$$;
      "object" == typeof $elementId$$ && ($elementId$$ = $JSCompiler_alias_NULL$$);
      "object" == typeof $elementName$$1$$ && ($elementName$$1$$ = $JSCompiler_alias_NULL$$);
      if($group$$20_innerGroupArray$$.groups) {
        ($group$$20_innerGroupArray$$ = $DvtChartDataUtils$$.$_getNestedGroups$($group$$20_innerGroupArray$$.groups, [])) || ($group$$20_innerGroupArray$$ = [{id:[], name:[]}]);
        for(var $j$$52$$ = 0;$j$$52$$ < $group$$20_innerGroupArray$$.length;$j$$52$$++) {
          $group$$20_innerGroupArray$$[$j$$52$$].id.unshift($elementId$$), $group$$20_innerGroupArray$$[$j$$52$$].name.unshift($elementName$$1$$)
        }
        $groupsArray$$2$$ = $groupsArray$$2$$.concat($group$$20_innerGroupArray$$)
      }else {
        $groupsArray$$2$$.push({id:[$elementId$$], name:[$elementName$$1$$]})
      }
    }
    return $groupsArray$$2$$
  }
};
$DvtChartDataUtils$$.$getNumLevels$ = function $$DvtChartDataUtils$$$$getNumLevels$$($chart$$81_groupsArray$$3$$) {
  $chart$$81_groupsArray$$3$$ = $DvtChartDataUtils$$.$_getGroupsArray$($chart$$81_groupsArray$$3$$);
  for(var $numLevels$$2$$ = 0, $i$$339$$ = 0;$i$$339$$ < $chart$$81_groupsArray$$3$$.length;$i$$339$$++) {
    var $group$$21_length$$18$$ = $chart$$81_groupsArray$$3$$[$i$$339$$];
    $group$$21_length$$18$$ && $group$$21_length$$18$$.id && ($group$$21_length$$18$$ = dvt.$ArrayUtils$.isArray($group$$21_length$$18$$.id) ? $group$$21_length$$18$$.id.length : 1, $numLevels$$2$$ = Math.max($numLevels$$2$$, $group$$21_length$$18$$))
  }
  return $numLevels$$2$$
};
$DvtChartDataUtils$$.getValue = function $$DvtChartDataUtils$$$getValue$($chart$$82$$, $seriesIndex$$32$$, $groupIndex$$20$$) {
  var $val$$22$$ = $JSCompiler_StaticMethods_getFromCachedMap2D$$($chart$$82$$, "value", $seriesIndex$$32$$, $groupIndex$$20$$);
  if($val$$22$$ !== $JSCompiler_alias_VOID$$) {
    return $val$$22$$
  }
  var $val$$22$$ = $JSCompiler_alias_NULL$$, $dataItem$$9$$ = $DvtChartDataUtils$$.$getDataItem$($chart$$82$$, $seriesIndex$$32$$, $groupIndex$$20$$);
  $dataItem$$9$$ != $JSCompiler_alias_NULL$$ && (isNaN($dataItem$$9$$) ? $DvtChartTypeUtils$$.$isStock$($chart$$82$$) && $dataItem$$9$$.close != $JSCompiler_alias_NULL$$ ? $val$$22$$ = $dataItem$$9$$.close : $dataItem$$9$$.value != $JSCompiler_alias_NULL$$ ? $val$$22$$ = $dataItem$$9$$.value : $dataItem$$9$$.y != $JSCompiler_alias_NULL$$ && ($val$$22$$ = $dataItem$$9$$.y) : $val$$22$$ = $dataItem$$9$$);
  $JSCompiler_StaticMethods_putToCachedMap2D$$($chart$$82$$, "value", $seriesIndex$$32$$, $groupIndex$$20$$, $val$$22$$);
  return $val$$22$$
};
$DvtChartDataUtils$$.$getCumulativeValue$ = function $$DvtChartDataUtils$$$$getCumulativeValue$$($chart$$83$$, $seriesIndex$$33$$, $groupIndex$$21$$, $bIncludeHiddenSeries$$1$$) {
  var $cacheKey$$4$$ = $bIncludeHiddenSeries$$1$$ ? "cumValueH" : "cumValue", $cumVal_value$$113$$ = $JSCompiler_StaticMethods_getFromCachedMap2D$$($chart$$83$$, $cacheKey$$4$$, $seriesIndex$$33$$, $groupIndex$$21$$);
  if($cumVal_value$$113$$ !== $JSCompiler_alias_VOID$$) {
    return $cumVal_value$$113$$
  }
  if($DvtChartTypeUtils$$.$isStacked$($chart$$83$$)) {
    for(var $seriesType$$3$$ = $DvtChartStyleUtils$$.$getSeriesType$($chart$$83$$, $seriesIndex$$33$$), $bAssignedToY2$$ = $DvtChartDataUtils$$.$isAssignedToY2$($chart$$83$$, $seriesIndex$$33$$), $cumVal_value$$113$$ = $DvtChartDataUtils$$.getValue($chart$$83$$, $seriesIndex$$33$$, $groupIndex$$21$$), $isNegative$$ = "bar" == $seriesType$$3$$ ? 0 > $cumVal_value$$113$$ : $DvtChartDataUtils$$.$isSeriesNegative$($chart$$83$$, $seriesIndex$$33$$), $cumVal_value$$113$$ = 0, $category$$4$$ = $DvtChartDataUtils$$.$getStackCategory$($chart$$83$$, 
    $seriesIndex$$33$$), $i$$340$$ = 0;$i$$340$$ <= $seriesIndex$$33$$;$i$$340$$++) {
      if(($bIncludeHiddenSeries$$1$$ || $DvtChartStyleUtils$$.$isDataItemRendered$($chart$$83$$, $i$$340$$, $groupIndex$$21$$)) && $seriesType$$3$$ == $DvtChartStyleUtils$$.$getSeriesType$($chart$$83$$, $i$$340$$) && $bAssignedToY2$$ == $DvtChartDataUtils$$.$isAssignedToY2$($chart$$83$$, $i$$340$$) && $DvtChartDataUtils$$.$getStackCategory$($chart$$83$$, $i$$340$$) == $category$$4$$) {
        var $groupValue$$ = $DvtChartDataUtils$$.getValue($chart$$83$$, $i$$340$$, $groupIndex$$21$$), $isCurrentNegative$$ = "bar" == $seriesType$$3$$ ? 0 > $groupValue$$ : $DvtChartDataUtils$$.$isSeriesNegative$($chart$$83$$, $i$$340$$);
        if($isNegative$$ && $isCurrentNegative$$ || !$isNegative$$ && !$isCurrentNegative$$) {
          $cumVal_value$$113$$ += $groupValue$$ == $JSCompiler_alias_NULL$$ || isNaN($groupValue$$) ? 0 : $groupValue$$
        }
      }
    }
  }else {
    $cumVal_value$$113$$ = $DvtChartDataUtils$$.getValue($chart$$83$$, $seriesIndex$$33$$, $groupIndex$$21$$)
  }
  $JSCompiler_StaticMethods_putToCachedMap2D$$($chart$$83$$, $cacheKey$$4$$, $seriesIndex$$33$$, $groupIndex$$21$$, $cumVal_value$$113$$);
  return $cumVal_value$$113$$
};
$DvtChartDataUtils$$.$getLowValue$ = function $$DvtChartDataUtils$$$$getLowValue$$($chart$$84$$, $seriesIndex$$34$$, $dataItem$$10_groupIndex$$22$$) {
  $dataItem$$10_groupIndex$$22$$ = $DvtChartDataUtils$$.$getDataItem$($chart$$84$$, $seriesIndex$$34$$, $dataItem$$10_groupIndex$$22$$);
  return $dataItem$$10_groupIndex$$22$$ == $JSCompiler_alias_NULL$$ ? $JSCompiler_alias_NULL$$ : "candlestick" == $DvtChartStyleUtils$$.$getSeriesType$($chart$$84$$, $seriesIndex$$34$$) ? $dataItem$$10_groupIndex$$22$$.low == $JSCompiler_alias_NULL$$ && $dataItem$$10_groupIndex$$22$$.close != $JSCompiler_alias_NULL$$ ? $dataItem$$10_groupIndex$$22$$.open != $JSCompiler_alias_NULL$$ ? Math.min($dataItem$$10_groupIndex$$22$$.close, $dataItem$$10_groupIndex$$22$$.open) : $dataItem$$10_groupIndex$$22$$.close : 
  $dataItem$$10_groupIndex$$22$$.low : $dataItem$$10_groupIndex$$22$$.low != $JSCompiler_alias_NULL$$ && $dataItem$$10_groupIndex$$22$$.close == $JSCompiler_alias_NULL$$ ? $dataItem$$10_groupIndex$$22$$.low : $JSCompiler_alias_NULL$$
};
$DvtChartDataUtils$$.$getHighValue$ = function $$DvtChartDataUtils$$$$getHighValue$$($chart$$85$$, $seriesIndex$$35$$, $dataItem$$11_groupIndex$$23$$) {
  $dataItem$$11_groupIndex$$23$$ = $DvtChartDataUtils$$.$getDataItem$($chart$$85$$, $seriesIndex$$35$$, $dataItem$$11_groupIndex$$23$$);
  return $dataItem$$11_groupIndex$$23$$ == $JSCompiler_alias_NULL$$ ? $JSCompiler_alias_NULL$$ : "candlestick" == $DvtChartStyleUtils$$.$getSeriesType$($chart$$85$$, $seriesIndex$$35$$) ? $dataItem$$11_groupIndex$$23$$.high == $JSCompiler_alias_NULL$$ ? $dataItem$$11_groupIndex$$23$$.open != $JSCompiler_alias_NULL$$ ? Math.max($dataItem$$11_groupIndex$$23$$.close, $dataItem$$11_groupIndex$$23$$.open) : $dataItem$$11_groupIndex$$23$$.close : $dataItem$$11_groupIndex$$23$$.high : $dataItem$$11_groupIndex$$23$$.high != 
  $JSCompiler_alias_NULL$$ && $dataItem$$11_groupIndex$$23$$.close == $JSCompiler_alias_NULL$$ ? $dataItem$$11_groupIndex$$23$$.high : $JSCompiler_alias_NULL$$
};
$DvtChartDataUtils$$.$getXValue$ = function $$DvtChartDataUtils$$$$getXValue$$($chart$$86$$, $dataItem$$12_seriesIndex$$36_xVal$$, $groupIndex$$24$$) {
  if($DvtChartAxisUtils$$.$hasGroupAxis$($chart$$86$$)) {
    return $groupIndex$$24$$
  }
  $dataItem$$12_seriesIndex$$36_xVal$$ = $DvtChartDataUtils$$.$getDataItem$($chart$$86$$, $dataItem$$12_seriesIndex$$36_xVal$$, $groupIndex$$24$$);
  if($dataItem$$12_seriesIndex$$36_xVal$$ == $JSCompiler_alias_NULL$$) {
    return $JSCompiler_alias_NULL$$
  }
  $dataItem$$12_seriesIndex$$36_xVal$$ = $dataItem$$12_seriesIndex$$36_xVal$$.x;
  return isNaN($dataItem$$12_seriesIndex$$36_xVal$$) ? $DvtChartDataUtils$$.$getGroupLabel$($chart$$86$$, $groupIndex$$24$$) : $dataItem$$12_seriesIndex$$36_xVal$$
};
$DvtChartDataUtils$$.$getTargetValue$ = function $$DvtChartDataUtils$$$$getTargetValue$$($chart$$87$$, $seriesIndex$$37$$) {
  var $dataItem$$13$$ = $DvtChartDataUtils$$.$getDataItem$($chart$$87$$, $seriesIndex$$37$$, 0);
  return!isNaN($dataItem$$13$$) || $dataItem$$13$$ == $JSCompiler_alias_NULL$$ ? $JSCompiler_alias_NULL$$ : $dataItem$$13$$.targetValue
};
$DvtChartDataUtils$$.$getZValue$ = function $$DvtChartDataUtils$$$$getZValue$$($chart$$88_dataItem$$14$$, $seriesIndex$$38$$, $groupIndex$$25$$, $defaultVal$$) {
  $chart$$88_dataItem$$14$$ = $DvtChartDataUtils$$.$getDataItem$($chart$$88_dataItem$$14$$, $seriesIndex$$38$$, $groupIndex$$25$$);
  return!isNaN($chart$$88_dataItem$$14$$) || $chart$$88_dataItem$$14$$ == $JSCompiler_alias_NULL$$ ? $defaultVal$$ : $chart$$88_dataItem$$14$$.z != $JSCompiler_alias_NULL$$ ? $chart$$88_dataItem$$14$$.z : $defaultVal$$
};
$DvtChartDataUtils$$.$isStockValueRising$ = function $$DvtChartDataUtils$$$$isStockValueRising$$($chart$$89_dataItem$$15$$, $seriesIndex$$39$$, $groupIndex$$26$$) {
  return($chart$$89_dataItem$$15$$ = $DvtChartDataUtils$$.$getDataItem$($chart$$89_dataItem$$15$$, $seriesIndex$$39$$, $groupIndex$$26$$)) ? $chart$$89_dataItem$$15$$.open <= $chart$$89_dataItem$$15$$.close : $JSCompiler_alias_TRUE$$
};
$DvtChartDataUtils$$.$getSeriesCategories$ = function $$DvtChartDataUtils$$$$getSeriesCategories$$($chart$$90$$, $seriesIndex$$40$$) {
  var $seriesItem$$7$$ = $DvtChartDataUtils$$.$getSeriesItem$($chart$$90$$, $seriesIndex$$40$$), $series$$7$$ = $DvtChartDataUtils$$.$getSeries$($chart$$90$$, $seriesIndex$$40$$);
  return $seriesItem$$7$$ && $seriesItem$$7$$.categories ? $seriesItem$$7$$.categories : $series$$7$$ ? [$series$$7$$] : []
};
$DvtChartDataUtils$$.$getDataItemCategories$ = function $$DvtChartDataUtils$$$$getDataItemCategories$$($chart$$91$$, $seriesIndex$$41$$, $dataItem$$16_groupIndex$$27$$) {
  return($dataItem$$16_groupIndex$$27$$ = $DvtChartDataUtils$$.$getDataItem$($chart$$91$$, $seriesIndex$$41$$, $dataItem$$16_groupIndex$$27$$)) && $dataItem$$16_groupIndex$$27$$.categories ? $dataItem$$16_groupIndex$$27$$.categories : $DvtChartDataUtils$$.$getSeriesCategories$($chart$$91$$, $seriesIndex$$41$$)
};
$DvtChartDataUtils$$.$isXValInViewport$ = function $$DvtChartDataUtils$$$$isXValInViewport$$($chart$$92$$, $xVal$$1$$) {
  if(isNaN($xVal$$1$$) || $xVal$$1$$ == $JSCompiler_alias_NULL$$) {
    return $JSCompiler_alias_FALSE$$
  }
  var $minMax$$2$$ = $DvtChartAxisUtils$$.$getXAxisViewportMinMax$($chart$$92$$, $JSCompiler_alias_TRUE$$);
  return!($minMax$$2$$.min != $JSCompiler_alias_NULL$$ && $xVal$$1$$ < $minMax$$2$$.min) && !($minMax$$2$$.max != $JSCompiler_alias_NULL$$ && $xVal$$1$$ > $minMax$$2$$.max)
};
$DvtChartDataUtils$$.$isXInViewport$ = function $$DvtChartDataUtils$$$$isXInViewport$$($chart$$93$$, $seriesIndex$$42$$, $groupIndex$$28$$) {
  var $isXInViewport_xVal$$2$$ = $JSCompiler_StaticMethods_getFromCachedMap2D$$($chart$$93$$, "isXInViewport", $seriesIndex$$42$$, $groupIndex$$28$$);
  $isXInViewport_xVal$$2$$ == $JSCompiler_alias_NULL$$ && ($isXInViewport_xVal$$2$$ = $DvtChartDataUtils$$.$getXValue$($chart$$93$$, $seriesIndex$$42$$, $groupIndex$$28$$), $isXInViewport_xVal$$2$$ = $DvtChartDataUtils$$.$isXValInViewport$($chart$$93$$, $isXInViewport_xVal$$2$$), $JSCompiler_StaticMethods_putToCachedMap2D$$($chart$$93$$, "isXInViewport", $seriesIndex$$42$$, $groupIndex$$28$$, $isXInViewport_xVal$$2$$));
  return $isXInViewport_xVal$$2$$
};
$DvtChartDataUtils$$.$isRefObjInViewport$ = function $$DvtChartDataUtils$$$$isRefObjInViewport$$($chart$$94$$, $items$$15_nextVal$$, $index$$136$$) {
  var $xVal$$3$$ = $DvtChartRefObjUtils$$.$getXValue$($chart$$94$$, $items$$15_nextVal$$, $index$$136$$), $isRefObjInViewport_previousVal$$ = $JSCompiler_StaticMethods_getFromCachedMap2D$$($chart$$94$$, "isRefObjInViewport", $xVal$$3$$);
  $isRefObjInViewport_previousVal$$ == $JSCompiler_alias_NULL$$ && ($isRefObjInViewport_previousVal$$ = $DvtChartRefObjUtils$$.$getXValue$($chart$$94$$, $items$$15_nextVal$$, $index$$136$$ - 1), $items$$15_nextVal$$ = $DvtChartRefObjUtils$$.$getXValue$($chart$$94$$, $items$$15_nextVal$$, $index$$136$$ + 1), $isRefObjInViewport_previousVal$$ = $DvtChartDataUtils$$.$isXValInViewport$($chart$$94$$, $xVal$$3$$) || $DvtChartDataUtils$$.$isXValInViewport$($chart$$94$$, $isRefObjInViewport_previousVal$$) || 
  $DvtChartDataUtils$$.$isXValInViewport$($chart$$94$$, $items$$15_nextVal$$), $JSCompiler_StaticMethods_putToCachedMap2D$$($chart$$94$$, "isRefObjInViewport", $xVal$$3$$, $isRefObjInViewport_previousVal$$));
  return $isRefObjInViewport_previousVal$$
};
$DvtChartDataUtils$$.$isBLACItemInViewport$ = function $$DvtChartDataUtils$$$$isBLACItemInViewport$$($chart$$95$$, $seriesIndex$$43$$, $groupIndex$$29$$) {
  return!$DvtChartStyleUtils$$.$isDataItemRendered$($chart$$95$$, $seriesIndex$$43$$, $groupIndex$$29$$) ? $JSCompiler_alias_FALSE$$ : $DvtChartDataUtils$$.$isXInViewport$($chart$$95$$, $seriesIndex$$43$$, $groupIndex$$29$$) || $DvtChartDataUtils$$.$isXInViewport$($chart$$95$$, $seriesIndex$$43$$, $groupIndex$$29$$ - 1) || $DvtChartDataUtils$$.$isXInViewport$($chart$$95$$, $seriesIndex$$43$$, $groupIndex$$29$$ + 1)
};
$DvtChartDataUtils$$.$isMarkerInViewport$ = function $$DvtChartDataUtils$$$$isMarkerInViewport$$($chart$$96_markerSize$$2$$, $seriesIndex$$44$$, $groupIndex$$30$$, $availSpace$$22$$) {
  if(!$DvtChartStyleUtils$$.$isDataItemRendered$($chart$$96_markerSize$$2$$, $seriesIndex$$44$$, $groupIndex$$30$$)) {
    return $JSCompiler_alias_FALSE$$
  }
  var $pos$$38$$ = $DvtChartDataUtils$$.$getMarkerPosition$($chart$$96_markerSize$$2$$, $seriesIndex$$44$$, $groupIndex$$30$$, $availSpace$$22$$);
  $chart$$96_markerSize$$2$$ = $DvtChartStyleUtils$$.$getMarkerSize$($chart$$96_markerSize$$2$$, $seriesIndex$$44$$, $groupIndex$$30$$);
  return $availSpace$$22$$ && $pos$$38$$ && $chart$$96_markerSize$$2$$ ? $availSpace$$22$$.$intersects$(new dvt.$Rectangle$($pos$$38$$.x - $chart$$96_markerSize$$2$$ / 2, $pos$$38$$.y - $chart$$96_markerSize$$2$$ / 2, $chart$$96_markerSize$$2$$, $chart$$96_markerSize$$2$$)) : $JSCompiler_alias_TRUE$$
};
$DvtChartDataUtils$$.$getViewportGroupCount$ = function $$DvtChartDataUtils$$$$getViewportGroupCount$$($chart$$97$$) {
  var $ratio$$6_viewportMinMax$$1$$ = $DvtChartAxisUtils$$.$getXAxisViewportMinMax$($chart$$97$$, $JSCompiler_alias_TRUE$$), $globalMinMax$$2$$ = $DvtChartAxisUtils$$.$getXAxisGlobalMinMax$($chart$$97$$), $ratio$$6_viewportMinMax$$1$$ = ($ratio$$6_viewportMinMax$$1$$.max - $ratio$$6_viewportMinMax$$1$$.min) / ($globalMinMax$$2$$.max - $globalMinMax$$2$$.min);
  return isNaN($ratio$$6_viewportMinMax$$1$$) ? 1 : $ratio$$6_viewportMinMax$$1$$ * $DvtChartDataUtils$$.$getGroupCount$($chart$$97$$)
};
$DvtChartDataUtils$$.$_computeYAlongLine$ = function $$DvtChartDataUtils$$$$_computeYAlongLine$$($isLog$$, $x1$$19_y$$84$$, $y1$$14$$, $x2$$17$$, $y2$$12$$, $x$$106$$) {
  $isLog$$ && ($y1$$14$$ = dvt.$Math$.$log10$($y1$$14$$), $y2$$12$$ = dvt.$Math$.$log10$($y2$$12$$));
  $x1$$19_y$$84$$ = $y1$$14$$ + ($y2$$12$$ - $y1$$14$$) * ($x$$106$$ - $x1$$19_y$$84$$) / ($x2$$17$$ - $x1$$19_y$$84$$);
  return $isLog$$ ? Math.pow(10, $x1$$19_y$$84$$) : $x1$$19_y$$84$$
};
$DvtChartDataUtils$$.$_getViewportEdgeYValues$ = function $$DvtChartDataUtils$$$$_getViewportEdgeYValues$$($chart$$98$$, $seriesIndex$$45$$) {
  var $seriesData$$ = $DvtChartDataUtils$$.$getSeriesItem$($chart$$98$$, $seriesIndex$$45$$).items;
  if(!$seriesData$$) {
    return{min:$JSCompiler_alias_NULL$$, max:$JSCompiler_alias_NULL$$}
  }
  for(var $bIncludeHiddenSeries$$2$$ = "withoutRescale" == $DvtChartEventUtils$$.$getHideAndShowBehavior$($chart$$98$$), $max$$4_minMax$$3$$ = $DvtChartAxisUtils$$.$getXAxisViewportMinMax$($chart$$98$$, $JSCompiler_alias_TRUE$$), $min$$4$$ = $max$$4_minMax$$3$$.min, $max$$4_minMax$$3$$ = $max$$4_minMax$$3$$.max, $isLog$$1$$ = $DvtChartAxisUtils$$.$isLog$($chart$$98$$, $DvtChartDataUtils$$.$isAssignedToY2$($chart$$98$$, $seriesIndex$$45$$) ? "y2" : "y"), $x$$107$$, $y$$85$$, $prevX$$1$$, $prevY$$1$$, 
  $yMin$$1$$, $yMax$$1$$, $groupIndex$$31$$ = 0;$groupIndex$$31$$ < $seriesData$$.length;$groupIndex$$31$$++) {
    if($bIncludeHiddenSeries$$2$$ || $DvtChartStyleUtils$$.$isDataItemRendered$($chart$$98$$, $seriesIndex$$45$$, $groupIndex$$31$$)) {
      $x$$107$$ = $DvtChartDataUtils$$.$getXValue$($chart$$98$$, $seriesIndex$$45$$, $groupIndex$$31$$), $y$$85$$ = $DvtChartDataUtils$$.$getCumulativeValue$($chart$$98$$, $seriesIndex$$45$$, $groupIndex$$31$$, $bIncludeHiddenSeries$$2$$), $prevX$$1$$ != $JSCompiler_alias_NULL$$ && ($min$$4$$ != $JSCompiler_alias_NULL$$ && ($min$$4$$ > $prevX$$1$$ && $min$$4$$ < $x$$107$$) && ($yMin$$1$$ = $DvtChartDataUtils$$.$_computeYAlongLine$($isLog$$1$$, $prevX$$1$$, $prevY$$1$$, $x$$107$$, $y$$85$$, $min$$4$$)), 
      $max$$4_minMax$$3$$ != $JSCompiler_alias_NULL$$ && ($max$$4_minMax$$3$$ > $prevX$$1$$ && $max$$4_minMax$$3$$ < $x$$107$$) && ($yMax$$1$$ = $DvtChartDataUtils$$.$_computeYAlongLine$($isLog$$1$$, $prevX$$1$$, $prevY$$1$$, $x$$107$$, $y$$85$$, $max$$4_minMax$$3$$))), $prevX$$1$$ = $x$$107$$, $prevY$$1$$ = $y$$85$$
    }
  }
  return{min:$yMin$$1$$, max:$yMax$$1$$}
};
$DvtChartDataUtils$$.$getMinMaxValue$ = function $$DvtChartDataUtils$$$$getMinMaxValue$$($chart$$99$$, $type$$112$$, $isDataOnly$$) {
  var $cacheKey$$7$$ = $type$$112$$ + ($isDataOnly$$ ? "MinMaxDO" : "MinMax"), $isLog$$2_minMax$$4$$ = $chart$$99$$.$Cache$[$cacheKey$$7$$];
  if($isLog$$2_minMax$$4$$) {
    return $isLog$$2_minMax$$4$$
  }
  var $isLog$$2_minMax$$4$$ = !$isDataOnly$$ && "z" != $type$$112$$ && $DvtChartAxisUtils$$.$isLog$($chart$$99$$, $type$$112$$), $isY2Value$$ = "y2" == $type$$112$$;
  $isY2Value$$ && ($type$$112$$ = "y");
  for(var $isYValue$$ = "y" == $type$$112$$, $limitToViewport$$ = !$isDataOnly$$ && $isYValue$$ && $DvtChartTypeUtils$$.$isBLAC$($chart$$99$$), $bIncludeHiddenSeries$$3$$ = "withoutRescale" == $DvtChartEventUtils$$.$getHideAndShowBehavior$($chart$$99$$) || "x" == $type$$112$$ && $DvtChartAxisUtils$$.$hasTimeAxis$($chart$$99$$), $maxValue$$3$$ = -Infinity, $minValue$$3$$ = Infinity, $seriesCount$$11$$ = $DvtChartDataUtils$$.$getSeriesCount$($chart$$99$$), $seriesIndex$$46$$ = 0;$seriesIndex$$46$$ < 
  $seriesCount$$11$$;$seriesIndex$$46$$++) {
    var $data$$48_edgeValues_hidden_high_seriesItem$$9$$ = $DvtChartDataUtils$$.$getSeriesItem$($chart$$99$$, $seriesIndex$$46$$), $isRange_refObjects$$ = $isYValue$$ && ($DvtChartStyleUtils$$.$isRangeSeries$($chart$$99$$, $seriesIndex$$46$$) || "candlestick" == $DvtChartStyleUtils$$.$getSeriesType$($chart$$99$$, $seriesIndex$$46$$));
    if($bIncludeHiddenSeries$$3$$ || $DvtChartStyleUtils$$.$isSeriesRendered$($chart$$99$$, $seriesIndex$$46$$)) {
      var $isY2Series_low_value$$114$$ = $DvtChartDataUtils$$.$isAssignedToY2$($chart$$99$$, $seriesIndex$$46$$);
      if(!($isYValue$$ && $isY2Value$$ != $isY2Series_low_value$$114$$)) {
        var $i$$341_seriesData$$1$$ = $data$$48_edgeValues_hidden_high_seriesItem$$9$$.items;
        if($i$$341_seriesData$$1$$) {
          for(var $groupIndex$$32_items$$16$$ = 0;$groupIndex$$32_items$$16$$ < $i$$341_seriesData$$1$$.length;$groupIndex$$32_items$$16$$++) {
            if($bIncludeHiddenSeries$$3$$ || $DvtChartStyleUtils$$.$isDataItemRendered$($chart$$99$$, $seriesIndex$$46$$, $groupIndex$$32_items$$16$$)) {
              if("object" != typeof $i$$341_seriesData$$1$$[$groupIndex$$32_items$$16$$] && ($i$$341_seriesData$$1$$[$groupIndex$$32_items$$16$$] = {y:$i$$341_seriesData$$1$$[$groupIndex$$32_items$$16$$]}), $data$$48_edgeValues_hidden_high_seriesItem$$9$$ = $i$$341_seriesData$$1$$[$groupIndex$$32_items$$16$$], $isY2Series_low_value$$114$$ = $JSCompiler_alias_NULL$$, $isYValue$$ ? $isRange_refObjects$$ || ($isY2Series_low_value$$114$$ = $DvtChartDataUtils$$.$getCumulativeValue$($chart$$99$$, $seriesIndex$$46$$, 
              $groupIndex$$32_items$$16$$, $bIncludeHiddenSeries$$3$$)) : "x" == $type$$112$$ && $DvtChartAxisUtils$$.$hasTimeAxis$($chart$$99$$) && !$DvtChartAxisUtils$$.$isMixedFrequency$($chart$$99$$) ? ($isY2Series_low_value$$114$$ = $DvtChartDataUtils$$.$getGroupLabel$($chart$$99$$, $groupIndex$$32_items$$16$$), $data$$48_edgeValues_hidden_high_seriesItem$$9$$ != $JSCompiler_alias_NULL$$ && ($data$$48_edgeValues_hidden_high_seriesItem$$9$$.x = $isY2Series_low_value$$114$$)) : $data$$48_edgeValues_hidden_high_seriesItem$$9$$ != 
              $JSCompiler_alias_NULL$$ && ($isY2Series_low_value$$114$$ = $data$$48_edgeValues_hidden_high_seriesItem$$9$$[$type$$112$$]), !$limitToViewport$$ || $DvtChartDataUtils$$.$isXInViewport$($chart$$99$$, $seriesIndex$$46$$, $groupIndex$$32_items$$16$$)) {
                if(!$isRange_refObjects$$ && $isY2Series_low_value$$114$$ != $JSCompiler_alias_NULL$$ && !isNaN($isY2Series_low_value$$114$$)) {
                  var $j$$53_radius$$10_refObj$$2$$ = 0;
                  $DvtChartTypeUtils$$.$isBubble$($chart$$99$$) && (!$isDataOnly$$ && 0 < $data$$48_edgeValues_hidden_high_seriesItem$$9$$.markerSize) && ($isYValue$$ ? $j$$53_radius$$10_refObj$$2$$ = $data$$48_edgeValues_hidden_high_seriesItem$$9$$._yAxisRadius : "x" == $type$$112$$ && ($j$$53_radius$$10_refObj$$2$$ = $data$$48_edgeValues_hidden_high_seriesItem$$9$$._xAxisRadius));
                  $maxValue$$3$$ = Math.max($maxValue$$3$$, $isLog$$2_minMax$$4$$ ? $isY2Series_low_value$$114$$ * Math.pow(10, $j$$53_radius$$10_refObj$$2$$) : $isY2Series_low_value$$114$$ + $j$$53_radius$$10_refObj$$2$$);
                  $minValue$$3$$ = Math.min($minValue$$3$$, $isLog$$2_minMax$$4$$ ? $isY2Series_low_value$$114$$ / Math.pow(10, $j$$53_radius$$10_refObj$$2$$) : $isY2Series_low_value$$114$$ - $j$$53_radius$$10_refObj$$2$$)
                }
                $isRange_refObjects$$ && ($data$$48_edgeValues_hidden_high_seriesItem$$9$$ = $DvtChartDataUtils$$.$getHighValue$($chart$$99$$, $seriesIndex$$46$$, $groupIndex$$32_items$$16$$), $isY2Series_low_value$$114$$ = $DvtChartDataUtils$$.$getLowValue$($chart$$99$$, $seriesIndex$$46$$, $groupIndex$$32_items$$16$$), $maxValue$$3$$ = Math.max($maxValue$$3$$, $data$$48_edgeValues_hidden_high_seriesItem$$9$$, $isY2Series_low_value$$114$$), $minValue$$3$$ = Math.min($minValue$$3$$, $data$$48_edgeValues_hidden_high_seriesItem$$9$$, 
                $isY2Series_low_value$$114$$))
              }
            }
          }
          $isRange_refObjects$$ = $JSCompiler_alias_NULL$$;
          "x" == $type$$112$$ ? $isRange_refObjects$$ = $DvtChartRefObjUtils$$.$getAxisRefObjs$($chart$$99$$, "x") : $isY2Value$$ ? $isRange_refObjects$$ = $DvtChartRefObjUtils$$.$getAxisRefObjs$($chart$$99$$, "y2") : $isYValue$$ && ($isRange_refObjects$$ = $DvtChartRefObjUtils$$.$getAxisRefObjs$($chart$$99$$, "y"));
          if($isRange_refObjects$$ != $JSCompiler_alias_NULL$$) {
            for($i$$341_seriesData$$1$$ = 0;$i$$341_seriesData$$1$$ < $isRange_refObjects$$.length;$i$$341_seriesData$$1$$++) {
              if($j$$53_radius$$10_refObj$$2$$ = $isRange_refObjects$$[$i$$341_seriesData$$1$$], $groupIndex$$32_items$$16$$ = $j$$53_radius$$10_refObj$$2$$.items, $data$$48_edgeValues_hidden_high_seriesItem$$9$$ = "withRescale" == $DvtChartEventUtils$$.$getHideAndShowBehavior$($chart$$99$$) && "hidden" == $j$$53_radius$$10_refObj$$2$$.visibility, !$data$$48_edgeValues_hidden_high_seriesItem$$9$$) {
                if($groupIndex$$32_items$$16$$ && !$data$$48_edgeValues_hidden_high_seriesItem$$9$$) {
                  for($j$$53_radius$$10_refObj$$2$$ = 0;$j$$53_radius$$10_refObj$$2$$ < $groupIndex$$32_items$$16$$.length;$j$$53_radius$$10_refObj$$2$$++) {
                    if(!($groupIndex$$32_items$$16$$[$j$$53_radius$$10_refObj$$2$$] == $JSCompiler_alias_NULL$$ || $limitToViewport$$ && !$DvtChartDataUtils$$.$isRefObjInViewport$($chart$$99$$, $groupIndex$$32_items$$16$$, $j$$53_radius$$10_refObj$$2$$))) {
                      var $isY2Series_low_value$$114$$ = $DvtChartRefObjUtils$$.$getLowValue$($groupIndex$$32_items$$16$$[$j$$53_radius$$10_refObj$$2$$]), $data$$48_edgeValues_hidden_high_seriesItem$$9$$ = $DvtChartRefObjUtils$$.$getHighValue$($groupIndex$$32_items$$16$$[$j$$53_radius$$10_refObj$$2$$]), $val$$23$$ = isNaN($groupIndex$$32_items$$16$$[$j$$53_radius$$10_refObj$$2$$]) ? $groupIndex$$32_items$$16$$[$j$$53_radius$$10_refObj$$2$$].value : $groupIndex$$32_items$$16$$[$j$$53_radius$$10_refObj$$2$$];
                      $isY2Series_low_value$$114$$ != $JSCompiler_alias_NULL$$ && isFinite($isY2Series_low_value$$114$$) && ($minValue$$3$$ = Math.min($minValue$$3$$, $isY2Series_low_value$$114$$), $maxValue$$3$$ = Math.max($maxValue$$3$$, $isY2Series_low_value$$114$$));
                      $data$$48_edgeValues_hidden_high_seriesItem$$9$$ != $JSCompiler_alias_NULL$$ && isFinite($data$$48_edgeValues_hidden_high_seriesItem$$9$$) && ($minValue$$3$$ = Math.min($minValue$$3$$, $data$$48_edgeValues_hidden_high_seriesItem$$9$$), $maxValue$$3$$ = Math.max($maxValue$$3$$, $data$$48_edgeValues_hidden_high_seriesItem$$9$$));
                      $val$$23$$ != $JSCompiler_alias_NULL$$ && isFinite($val$$23$$) && ($minValue$$3$$ = Math.min($minValue$$3$$, $val$$23$$), $maxValue$$3$$ = Math.max($maxValue$$3$$, $val$$23$$))
                    }
                  }
                }else {
                  $isY2Series_low_value$$114$$ = $DvtChartRefObjUtils$$.$getLowValue$($j$$53_radius$$10_refObj$$2$$), $data$$48_edgeValues_hidden_high_seriesItem$$9$$ = $DvtChartRefObjUtils$$.$getHighValue$($j$$53_radius$$10_refObj$$2$$), $val$$23$$ = $j$$53_radius$$10_refObj$$2$$.value, $isY2Series_low_value$$114$$ != $JSCompiler_alias_NULL$$ && isFinite($isY2Series_low_value$$114$$) && ($minValue$$3$$ = Math.min($minValue$$3$$, $isY2Series_low_value$$114$$), $maxValue$$3$$ = Math.max($maxValue$$3$$, 
                  $isY2Series_low_value$$114$$)), $data$$48_edgeValues_hidden_high_seriesItem$$9$$ != $JSCompiler_alias_NULL$$ && isFinite($data$$48_edgeValues_hidden_high_seriesItem$$9$$) && ($minValue$$3$$ = Math.min($minValue$$3$$, $data$$48_edgeValues_hidden_high_seriesItem$$9$$), $maxValue$$3$$ = Math.max($maxValue$$3$$, $data$$48_edgeValues_hidden_high_seriesItem$$9$$)), $val$$23$$ != $JSCompiler_alias_NULL$$ && isFinite($val$$23$$) && ($minValue$$3$$ = Math.min($minValue$$3$$, $val$$23$$), 
                  $maxValue$$3$$ = Math.max($maxValue$$3$$, $val$$23$$))
                }
              }
            }
          }
          $limitToViewport$$ && ($data$$48_edgeValues_hidden_high_seriesItem$$9$$ = $DvtChartDataUtils$$.$_getViewportEdgeYValues$($chart$$99$$, $seriesIndex$$46$$), $data$$48_edgeValues_hidden_high_seriesItem$$9$$.min != $JSCompiler_alias_NULL$$ && ($minValue$$3$$ = Math.min($minValue$$3$$, $data$$48_edgeValues_hidden_high_seriesItem$$9$$.min), $maxValue$$3$$ = Math.max($maxValue$$3$$, $data$$48_edgeValues_hidden_high_seriesItem$$9$$.min)), $data$$48_edgeValues_hidden_high_seriesItem$$9$$.max != 
          $JSCompiler_alias_NULL$$ && ($minValue$$3$$ = Math.min($minValue$$3$$, $data$$48_edgeValues_hidden_high_seriesItem$$9$$.max), $maxValue$$3$$ = Math.max($maxValue$$3$$, $data$$48_edgeValues_hidden_high_seriesItem$$9$$.max)))
        }
      }
    }
  }
  $isLog$$2_minMax$$4$$ = {min:$minValue$$3$$, max:$maxValue$$3$$};
  return $chart$$99$$.$Cache$[$cacheKey$$7$$] = $isLog$$2_minMax$$4$$
};
$DvtChartDataUtils$$.$isAssignedToY2$ = function $$DvtChartDataUtils$$$$isAssignedToY2$$($chart$$100$$, $seriesIndex$$47$$) {
  var $seriesItem$$10$$ = $DvtChartDataUtils$$.$getSeriesItem$($chart$$100$$, $seriesIndex$$47$$);
  return $seriesItem$$10$$ && "on" == $seriesItem$$10$$.assignedToY2 && $DvtChartTypeUtils$$.$isDualY$($chart$$100$$) ? $JSCompiler_alias_TRUE$$ : $JSCompiler_alias_FALSE$$
};
$DvtChartDataUtils$$.$getInitialSelection$ = function $$DvtChartDataUtils$$$$getInitialSelection$$($chart$$101_peers$$3$$) {
  var $selection$$9$$ = $chart$$101_peers$$3$$.$getOptions$().selection;
  $selection$$9$$ || ($selection$$9$$ = []);
  $chart$$101_peers$$3$$ = $JSCompiler_StaticMethods_getChartObjPeers$$($chart$$101_peers$$3$$);
  for(var $i$$342$$ = 0;$i$$342$$ < $selection$$9$$.length;$i$$342$$++) {
    var $id$$99$$;
    "string" == typeof $selection$$9$$[$i$$342$$] ? ($id$$99$$ = $selection$$9$$[$i$$342$$], $selection$$9$$[$i$$342$$] = {id:$id$$99$$}) : $id$$99$$ = $selection$$9$$[$i$$342$$].id;
    if($id$$99$$ != $JSCompiler_alias_NULL$$ && (!$selection$$9$$[$i$$342$$].series || !$selection$$9$$[$i$$342$$].group)) {
      for(var $j$$54$$ = 0;$j$$54$$ < $chart$$101_peers$$3$$.length;$j$$54$$++) {
        var $peer$$18$$ = $chart$$101_peers$$3$$[$j$$54$$];
        if($id$$99$$ == $peer$$18$$.$_dataItemId$) {
          $selection$$9$$[$i$$342$$].series = $peer$$18$$.$getSeries$();
          $selection$$9$$[$i$$342$$].group = $peer$$18$$.$getGroup$();
          break
        }
      }
    }
  }
  return $selection$$9$$
};
$DvtChartDataUtils$$.$getCurrentSelection$ = function $$DvtChartDataUtils$$$$getCurrentSelection$$($chart$$102_handler$$35_selectedIds$$2$$) {
  var $selection$$10$$ = [];
  if($chart$$102_handler$$35_selectedIds$$2$$ = $chart$$102_handler$$35_selectedIds$$2$$.$getSelectionHandler$()) {
    $chart$$102_handler$$35_selectedIds$$2$$ = $chart$$102_handler$$35_selectedIds$$2$$.$getSelectedIds$();
    for(var $i$$343$$ = 0;$i$$343$$ < $chart$$102_handler$$35_selectedIds$$2$$.length;$i$$343$$++) {
      var $selectedId$$2$$ = $chart$$102_handler$$35_selectedIds$$2$$[$i$$343$$];
      $selection$$10$$.push({series:$selectedId$$2$$.$getSeries$(), group:$selectedId$$2$$.$getGroup$(), id:$selectedId$$2$$.getId()})
    }
  }
  return $selection$$10$$
};
$DvtChartDataUtils$$.$hasVolumeSeries$ = function $$DvtChartDataUtils$$$$hasVolumeSeries$$($chart$$103_hasVolume$$) {
  return($chart$$103_hasVolume$$ = $chart$$103_hasVolume$$.$getOptions$()._hasVolume) ? $chart$$103_hasVolume$$ : $JSCompiler_alias_FALSE$$
};
$DvtChartDataUtils$$.$isDataSelected$ = function $$DvtChartDataUtils$$$$isDataSelected$$($chart$$104_selection$$11$$, $series$$8_seriesIndex$$48$$, $group$$22_groupIndex$$33$$) {
  var $id$$100$$ = $DvtChartDataUtils$$.$getDataItem$($chart$$104_selection$$11$$, $series$$8_seriesIndex$$48$$, $group$$22_groupIndex$$33$$).id;
  $series$$8_seriesIndex$$48$$ = $DvtChartDataUtils$$.$getSeries$($chart$$104_selection$$11$$, $series$$8_seriesIndex$$48$$);
  $group$$22_groupIndex$$33$$ = $DvtChartDataUtils$$.$getGroup$($chart$$104_selection$$11$$, $group$$22_groupIndex$$33$$);
  ($chart$$104_selection$$11$$ = $chart$$104_selection$$11$$.$getOptions$().selection) || ($chart$$104_selection$$11$$ = []);
  for(var $i$$344$$ = 0;$i$$344$$ < $chart$$104_selection$$11$$.length;$i$$344$$++) {
    if($id$$100$$ != $JSCompiler_alias_NULL$$ && ($id$$100$$ == $chart$$104_selection$$11$$[$i$$344$$] || $id$$100$$ == $chart$$104_selection$$11$$[$i$$344$$].id) || $series$$8_seriesIndex$$48$$ == $chart$$104_selection$$11$$[$i$$344$$].series && $group$$22_groupIndex$$33$$ == $chart$$104_selection$$11$$[$i$$344$$].group) {
      return $JSCompiler_alias_TRUE$$
    }
  }
  return $JSCompiler_alias_FALSE$$
};
$DvtChartDataUtils$$.$getDataLabel$ = function $$DvtChartDataUtils$$$$getDataLabel$$($chart$$105_dataContext$$, $seriesIndex$$49$$, $groupIndex$$34$$, $defaultLabel_type$$113$$, $isStackLabel$$) {
  var $funcLabel$$;
  $defaultLabel_type$$113$$ = $DvtChartDataUtils$$.$getDefaultDataLabel$($chart$$105_dataContext$$, $seriesIndex$$49$$, $groupIndex$$34$$, $defaultLabel_type$$113$$, $isStackLabel$$);
  var $dataLabelFunc$$ = $chart$$105_dataContext$$.$getOptions$().dataLabel;
  $dataLabelFunc$$ && !$isStackLabel$$ && ($chart$$105_dataContext$$ = $DvtChartDataUtils$$.$getDataContext$($chart$$105_dataContext$$, $seriesIndex$$49$$, $groupIndex$$34$$), $chart$$105_dataContext$$.label = $defaultLabel_type$$113$$, $funcLabel$$ = $dataLabelFunc$$($chart$$105_dataContext$$));
  return $funcLabel$$ ? $funcLabel$$ : $defaultLabel_type$$113$$
};
$DvtChartDataUtils$$.$getDefaultDataLabel$ = function $$DvtChartDataUtils$$$$getDefaultDataLabel$$($chart$$106$$, $axis$$27_seriesIndex$$50_valueFormat$$, $dataItem$$17_groupIndex$$35_label$$43$$, $type$$114$$, $isStackLabel$$1$$) {
  if($isStackLabel$$1$$) {
    $dataItem$$17_groupIndex$$35_label$$43$$ = $DvtChartDataUtils$$.$getCumulativeValue$($chart$$106$$, $axis$$27_seriesIndex$$50_valueFormat$$, $dataItem$$17_groupIndex$$35_label$$43$$)
  }else {
    $dataItem$$17_groupIndex$$35_label$$43$$ = $DvtChartDataUtils$$.$getDataItem$($chart$$106$$, $axis$$27_seriesIndex$$50_valueFormat$$, $dataItem$$17_groupIndex$$35_label$$43$$);
    if(!$dataItem$$17_groupIndex$$35_label$$43$$) {
      return $JSCompiler_alias_NULL$$
    }
    $dataItem$$17_groupIndex$$35_label$$43$$ = $dataItem$$17_groupIndex$$35_label$$43$$.label;
    "low" == $type$$114$$ ? $dataItem$$17_groupIndex$$35_label$$43$$ = $dataItem$$17_groupIndex$$35_label$$43$$ instanceof Array ? $dataItem$$17_groupIndex$$35_label$$43$$[0] : $dataItem$$17_groupIndex$$35_label$$43$$ : "high" == $type$$114$$ && ($dataItem$$17_groupIndex$$35_label$$43$$ = $dataItem$$17_groupIndex$$35_label$$43$$ instanceof Array ? $dataItem$$17_groupIndex$$35_label$$43$$[1] : $JSCompiler_alias_NULL$$)
  }
  if($dataItem$$17_groupIndex$$35_label$$43$$ != $JSCompiler_alias_NULL$$) {
    if("number" == typeof $dataItem$$17_groupIndex$$35_label$$43$$) {
      var $min$$5$$, $max$$5$$, $axisInfo$$11_majorIncrement$$;
      if($axis$$27_seriesIndex$$50_valueFormat$$ = $DvtChartDataUtils$$.$isAssignedToY2$($chart$$106$$, $axis$$27_seriesIndex$$50_valueFormat$$) && $chart$$106$$.$y2Axis$ ? $chart$$106$$.$y2Axis$ : $chart$$106$$.$yAxis$) {
        $axisInfo$$11_majorIncrement$$ = $axis$$27_seriesIndex$$50_valueFormat$$.$getInfo$(), $min$$5$$ = $axisInfo$$11_majorIncrement$$.$GlobalMin$, $max$$5$$ = $axisInfo$$11_majorIncrement$$.$GlobalMax$, $axisInfo$$11_majorIncrement$$ = $axisInfo$$11_majorIncrement$$.$getMajorIncrement$()
      }
      $axis$$27_seriesIndex$$50_valueFormat$$ = $DvtChartTooltipUtils$$.$getValueFormat$($chart$$106$$, "label");
      return $DvtChartTooltipUtils$$.$formatValue$($chart$$106$$.$getCtx$(), $axis$$27_seriesIndex$$50_valueFormat$$, $dataItem$$17_groupIndex$$35_label$$43$$, $min$$5$$, $max$$5$$, $axisInfo$$11_majorIncrement$$)
    }
    return $dataItem$$17_groupIndex$$35_label$$43$$
  }
  return $JSCompiler_alias_NULL$$
};
$DvtChartDataUtils$$.$getStackCategory$ = function $$DvtChartDataUtils$$$$getStackCategory$$($chart$$107$$, $seriesIndex$$51$$) {
  return $DvtChartTypeUtils$$.$isStacked$($chart$$107$$) ? $DvtChartDataUtils$$.$getSeriesItem$($chart$$107$$, $seriesIndex$$51$$).stackCategory : $DvtChartDataUtils$$.$getSeries$($chart$$107$$, $seriesIndex$$51$$)
};
$DvtChartDataUtils$$.$getStackCategories$ = function $$DvtChartDataUtils$$$$getStackCategories$$($chart$$108$$, $type$$115$$, $bIncludeHiddenSeries$$4$$) {
  var $yCategories$$ = [], $y2Categories$$ = [], $categories$$4_s$$87$$ = $JSCompiler_StaticMethods_getFromCachedMap2D$$($chart$$108$$, "stackCategories", $type$$115$$, $bIncludeHiddenSeries$$4$$);
  if($categories$$4_s$$87$$) {
    return $categories$$4_s$$87$$
  }
  for($categories$$4_s$$87$$ = 0;$categories$$4_s$$87$$ < $DvtChartDataUtils$$.$getSeriesCount$($chart$$108$$);$categories$$4_s$$87$$++) {
    if($DvtChartStyleUtils$$.$isSeriesRendered$($chart$$108$$, $categories$$4_s$$87$$) || $bIncludeHiddenSeries$$4$$) {
      if($type$$115$$) {
        var $category$$5_seriesType$$4$$ = $DvtChartStyleUtils$$.$getSeriesType$($chart$$108$$, $categories$$4_s$$87$$);
        "candlestick" == $category$$5_seriesType$$4$$ && ($category$$5_seriesType$$4$$ = "bar");
        if($type$$115$$ != $category$$5_seriesType$$4$$) {
          continue
        }
      }
      $category$$5_seriesType$$4$$ = $DvtChartDataUtils$$.$getStackCategory$($chart$$108$$, $categories$$4_s$$87$$);
      $DvtChartDataUtils$$.$isAssignedToY2$($chart$$108$$, $categories$$4_s$$87$$) ? -1 == dvt.$ArrayUtils$.$getIndex$($y2Categories$$, $category$$5_seriesType$$4$$) && $y2Categories$$.push($category$$5_seriesType$$4$$) : -1 == dvt.$ArrayUtils$.$getIndex$($yCategories$$, $category$$5_seriesType$$4$$) && $yCategories$$.push($category$$5_seriesType$$4$$)
    }
  }
  $categories$$4_s$$87$$ = {y:$yCategories$$, y2:$y2Categories$$};
  $JSCompiler_StaticMethods_putToCachedMap2D$$($chart$$108$$, "stackCategories", $type$$115$$, $bIncludeHiddenSeries$$4$$, $categories$$4_s$$87$$);
  return $categories$$4_s$$87$$
};
$DvtChartDataUtils$$.$getBarCategoryZ$ = function $$DvtChartDataUtils$$$$getBarCategoryZ$$($chart$$109$$, $category$$6$$, $groupIndex$$36$$, $isY2$$1$$) {
  for(var $width$$36$$ = 0, $s$$88$$ = 0;$s$$88$$ < $DvtChartDataUtils$$.$getSeriesCount$($chart$$109$$);$s$$88$$++) {
    var $isSeriesY2_seriesType$$5$$ = $DvtChartStyleUtils$$.$getSeriesType$($chart$$109$$, $s$$88$$);
    if(!("bar" != $isSeriesY2_seriesType$$5$$ && "candlestick" != $isSeriesY2_seriesType$$5$$ || $DvtChartDataUtils$$.$getStackCategory$($chart$$109$$, $s$$88$$) != $category$$6$$ || !$DvtChartStyleUtils$$.$isSeriesRendered$($chart$$109$$, $s$$88$$))) {
      if($isSeriesY2_seriesType$$5$$ = $DvtChartDataUtils$$.$isAssignedToY2$($chart$$109$$, $s$$88$$), $isY2$$1$$ && $isSeriesY2_seriesType$$5$$ || !$isY2$$1$$ && !$isSeriesY2_seriesType$$5$$) {
        $width$$36$$ = Math.max($width$$36$$, $DvtChartDataUtils$$.$getZValue$($chart$$109$$, $s$$88$$, $groupIndex$$36$$, 1))
      }
    }
  }
  return $width$$36$$
};
$DvtChartDataUtils$$.$getBarInfo$ = function $$DvtChartDataUtils$$$$getBarInfo$$($chart$$110_dataPos$$3$$, $barWidth$$4_seriesIndex$$52$$, $groupIndex$$37_stackWidth$$, $availSpace$$23$$) {
  var $bHoriz$$7_x1$$20$$ = $DvtChartTypeUtils$$.$isHorizontal$($chart$$110_dataPos$$3$$), $bStacked_groupWidth$$2$$ = $DvtChartTypeUtils$$.$isStacked$($chart$$110_dataPos$$3$$), $isRTL$$14_x2$$18$$ = dvt.$Agent$.$isRightToLeft$($chart$$110_dataPos$$3$$.$getCtx$()), $axisCoord$$2_xAxis$$ = $chart$$110_dataPos$$3$$.$xAxis$, $bRange$$ = $DvtChartStyleUtils$$.$isRangeSeries$($chart$$110_dataPos$$3$$, $barWidth$$4_seriesIndex$$52$$), $itemOffset_offsetMap$$ = $DvtChartStyleUtils$$.$getBarCategoryOffsetMap$($chart$$110_dataPos$$3$$, 
  $groupIndex$$37_stackWidth$$, $bStacked_groupWidth$$2$$), $xValue_yCoord$$2$$ = $DvtChartDataUtils$$.$getXValue$($chart$$110_dataPos$$3$$, $barWidth$$4_seriesIndex$$52$$, $groupIndex$$37_stackWidth$$), $xCoord$$3$$ = $axisCoord$$2_xAxis$$.$getUnboundedCoordAt$($xValue_yCoord$$2$$), $bY2Series$$ = $DvtChartDataUtils$$.$isAssignedToY2$($chart$$110_dataPos$$3$$, $barWidth$$4_seriesIndex$$52$$), $category$$7_yAxis$$ = $bY2Series$$ ? $chart$$110_dataPos$$3$$.$y2Axis$ : $chart$$110_dataPos$$3$$.$yAxis$, 
  $axisCoord$$2_xAxis$$ = $category$$7_yAxis$$.$getBaselineCoord$(), $baseCoord_highValue_yValue$$;
  if($bRange$$) {
    var $lowValue_totalYValue$$ = $DvtChartDataUtils$$.$getLowValue$($chart$$110_dataPos$$3$$, $barWidth$$4_seriesIndex$$52$$, $groupIndex$$37_stackWidth$$);
    $baseCoord_highValue_yValue$$ = $DvtChartDataUtils$$.$getHighValue$($chart$$110_dataPos$$3$$, $barWidth$$4_seriesIndex$$52$$, $groupIndex$$37_stackWidth$$);
    if($lowValue_totalYValue$$ == $JSCompiler_alias_NULL$$ || isNaN($lowValue_totalYValue$$) || $baseCoord_highValue_yValue$$ == $JSCompiler_alias_NULL$$ || isNaN($baseCoord_highValue_yValue$$)) {
      return $JSCompiler_alias_NULL$$
    }
    $xValue_yCoord$$2$$ = $category$$7_yAxis$$.$getBoundedCoordAt$($lowValue_totalYValue$$);
    $baseCoord_highValue_yValue$$ = $category$$7_yAxis$$.$getBoundedCoordAt$($baseCoord_highValue_yValue$$)
  }else {
    $baseCoord_highValue_yValue$$ = $DvtChartDataUtils$$.getValue($chart$$110_dataPos$$3$$, $barWidth$$4_seriesIndex$$52$$, $groupIndex$$37_stackWidth$$);
    $lowValue_totalYValue$$ = $DvtChartDataUtils$$.$getCumulativeValue$($chart$$110_dataPos$$3$$, $barWidth$$4_seriesIndex$$52$$, $groupIndex$$37_stackWidth$$);
    if($baseCoord_highValue_yValue$$ == $JSCompiler_alias_NULL$$ || isNaN($baseCoord_highValue_yValue$$)) {
      return $JSCompiler_alias_NULL$$
    }
    $xValue_yCoord$$2$$ = $category$$7_yAxis$$.$getBoundedCoordAt$($lowValue_totalYValue$$);
    $baseCoord_highValue_yValue$$ = $bStacked_groupWidth$$2$$ ? $category$$7_yAxis$$.$getBoundedCoordAt$($lowValue_totalYValue$$ - $baseCoord_highValue_yValue$$) : $axisCoord$$2_xAxis$$
  }
  if($xValue_yCoord$$2$$ == $baseCoord_highValue_yValue$$ && $category$$7_yAxis$$.$getCoordAt$($lowValue_totalYValue$$) == $JSCompiler_alias_NULL$$) {
    return $JSCompiler_alias_NULL$$
  }
  $category$$7_yAxis$$ = $DvtChartDataUtils$$.$getStackCategory$($chart$$110_dataPos$$3$$, $barWidth$$4_seriesIndex$$52$$);
  $barWidth$$4_seriesIndex$$52$$ = $DvtChartStyleUtils$$.$getBarWidth$($chart$$110_dataPos$$3$$, $barWidth$$4_seriesIndex$$52$$, $groupIndex$$37_stackWidth$$);
  $groupIndex$$37_stackWidth$$ = $bStacked_groupWidth$$2$$ ? $DvtChartStyleUtils$$.$getBarStackWidth$($chart$$110_dataPos$$3$$, $category$$7_yAxis$$, $groupIndex$$37_stackWidth$$, $bY2Series$$) : $barWidth$$4_seriesIndex$$52$$;
  "pixel" == $DvtChartStyleUtils$$.$getBarSpacing$($chart$$110_dataPos$$3$$) && dvt.$Agent$.$isPlatformGecko$() && ($bStacked_groupWidth$$2$$ = $barWidth$$4_seriesIndex$$52$$ / (1 - $DvtChartStyleUtils$$.$getBarGapRatio$($chart$$110_dataPos$$3$$)), 1 < $barWidth$$4_seriesIndex$$52$$ && 2 > $bStacked_groupWidth$$2$$ - $barWidth$$4_seriesIndex$$52$$ && ($barWidth$$4_seriesIndex$$52$$--, $groupIndex$$37_stackWidth$$ = $barWidth$$4_seriesIndex$$52$$));
  $itemOffset_offsetMap$$ = $itemOffset_offsetMap$$[$bY2Series$$ ? "y2" : "y"][$category$$7_yAxis$$] + 0.5 * ($groupIndex$$37_stackWidth$$ - $barWidth$$4_seriesIndex$$52$$);
  $bHoriz$$7_x1$$20$$ = $isRTL$$14_x2$$18$$ && !$bHoriz$$7_x1$$20$$ ? $xCoord$$3$$ - $itemOffset_offsetMap$$ - $barWidth$$4_seriesIndex$$52$$ : $xCoord$$3$$ + $itemOffset_offsetMap$$;
  $isRTL$$14_x2$$18$$ = $bHoriz$$7_x1$$20$$ + $barWidth$$4_seriesIndex$$52$$;
  $chart$$110_dataPos$$3$$ = $DvtChartPlotAreaRenderer$$.$convertAxisCoord$($chart$$110_dataPos$$3$$, new dvt.$Point$(($bHoriz$$7_x1$$20$$ + $isRTL$$14_x2$$18$$) / 2, $bRange$$ ? ($xValue_yCoord$$2$$ + $baseCoord_highValue_yValue$$) / 2 : $xValue_yCoord$$2$$), $availSpace$$23$$);
  return{$x1$:$bHoriz$$7_x1$$20$$, $x2$:$isRTL$$14_x2$$18$$, $axisCoord$:$axisCoord$$2_xAxis$$, $baseCoord$:$baseCoord_highValue_yValue$$, $yCoord$:$xValue_yCoord$$2$$, $dataPos$:$chart$$110_dataPos$$3$$, $barWidth$:$barWidth$$4_seriesIndex$$52$$}
};
$DvtChartDataUtils$$.$getMarkerPosition$ = function $$DvtChartDataUtils$$$$getMarkerPosition$$($chart$$111$$, $seriesIndex$$53_xCoord$$4$$, $groupIndex$$38_yCoord$$3$$, $availSpace$$24$$) {
  var $xAxis$$1$$ = $chart$$111$$.$xAxis$, $highCoord$$1_yAxis$$1$$ = $DvtChartDataUtils$$.$isAssignedToY2$($chart$$111$$, $seriesIndex$$53_xCoord$$4$$) ? $chart$$111$$.$y2Axis$ : $chart$$111$$.$yAxis$, $isPolar$$3$$ = $DvtChartTypeUtils$$.$isPolar$($chart$$111$$), $bRange$$1$$ = $DvtChartStyleUtils$$.$isRangeSeries$($chart$$111$$, $seriesIndex$$53_xCoord$$4$$), $xValue$$1$$ = $DvtChartDataUtils$$.$getXValue$($chart$$111$$, $seriesIndex$$53_xCoord$$4$$, $groupIndex$$38_yCoord$$3$$), $lowCoord$$1_yValue$$1$$ = 
  $DvtChartDataUtils$$.$getCumulativeValue$($chart$$111$$, $seriesIndex$$53_xCoord$$4$$, $groupIndex$$38_yCoord$$3$$);
  if($DvtChartTypeUtils$$.$isBubble$($chart$$111$$)) {
    if($isPolar$$3$$ && $lowCoord$$1_yValue$$1$$ < $highCoord$$1_yAxis$$1$$.$getInfo$().$MinValue$) {
      return $JSCompiler_alias_NULL$$
    }
    $seriesIndex$$53_xCoord$$4$$ = $isPolar$$3$$ ? $xAxis$$1$$.$getCoordAt$($xValue$$1$$) : $xAxis$$1$$.$getUnboundedCoordAt$($xValue$$1$$);
    $groupIndex$$38_yCoord$$3$$ = $highCoord$$1_yAxis$$1$$.$getUnboundedCoordAt$($lowCoord$$1_yValue$$1$$)
  }else {
    $bRange$$1$$ ? ($lowCoord$$1_yValue$$1$$ = $highCoord$$1_yAxis$$1$$.$getCoordAt$($DvtChartDataUtils$$.$getLowValue$($chart$$111$$, $seriesIndex$$53_xCoord$$4$$, $groupIndex$$38_yCoord$$3$$)), $highCoord$$1_yAxis$$1$$ = $highCoord$$1_yAxis$$1$$.$getCoordAt$($DvtChartDataUtils$$.$getHighValue$($chart$$111$$, $seriesIndex$$53_xCoord$$4$$, $groupIndex$$38_yCoord$$3$$)), $seriesIndex$$53_xCoord$$4$$ = $xAxis$$1$$.$getCoordAt$($DvtChartDataUtils$$.$getXValue$($chart$$111$$, $seriesIndex$$53_xCoord$$4$$, 
    $groupIndex$$38_yCoord$$3$$)), $groupIndex$$38_yCoord$$3$$ = ($lowCoord$$1_yValue$$1$$ + $highCoord$$1_yAxis$$1$$) / 2) : ($seriesIndex$$53_xCoord$$4$$ = $xAxis$$1$$.$getCoordAt$($xValue$$1$$), $groupIndex$$38_yCoord$$3$$ = $highCoord$$1_yAxis$$1$$.$getCoordAt$($lowCoord$$1_yValue$$1$$))
  }
  return $seriesIndex$$53_xCoord$$4$$ == $JSCompiler_alias_NULL$$ || $groupIndex$$38_yCoord$$3$$ == $JSCompiler_alias_NULL$$ ? $JSCompiler_alias_NULL$$ : $DvtChartPlotAreaRenderer$$.$convertAxisCoord$($chart$$111$$, new dvt.$Point$($seriesIndex$$53_xCoord$$4$$, $groupIndex$$38_yCoord$$3$$), $availSpace$$24$$)
};
$DvtChartDataUtils$$.$isSeriesNegative$ = function $$DvtChartDataUtils$$$$isSeriesNegative$$($chart$$112$$, $seriesIndex$$54$$) {
  for(var $groupCount$$8$$ = $DvtChartDataUtils$$.$getGroupCount$($chart$$112$$), $i$$345$$ = 0;$i$$345$$ < $groupCount$$8$$;$i$$345$$++) {
    if(0 < $DvtChartDataUtils$$.getValue($chart$$112$$, $seriesIndex$$54$$, $i$$345$$)) {
      return $JSCompiler_alias_FALSE$$
    }
  }
  return $JSCompiler_alias_TRUE$$
};
$DvtChartDataUtils$$.$getDataContext$ = function $$DvtChartDataUtils$$$$getDataContext$$($chart$$113$$, $seriesIndex$$55$$, $groupIndex$$39$$) {
  var $dataItem$$18$$ = $DvtChartDataUtils$$.$getDataItem$($chart$$113$$, $seriesIndex$$55$$, $groupIndex$$39$$), $rawOptions$$ = $chart$$113$$.$_rawOptions$, $isOtherSlice$$ = $DvtChartTypeUtils$$.$isPie$($chart$$113$$) && $seriesIndex$$55$$ == $JSCompiler_alias_NULL$$, $otherStr$$ = dvt.$Bundle$.$getTranslatedString$(dvt.$Bundle$.$CHART_PREFIX$, "LABEL_OTHER", $JSCompiler_alias_NULL$$), $chartOptions$$ = $chart$$113$$.$getOptions$();
  return{id:$isOtherSlice$$ ? $otherStr$$ : $dataItem$$18$$.id, series:$isOtherSlice$$ ? $otherStr$$ : $DvtChartDataUtils$$.$getSeries$($chart$$113$$, $seriesIndex$$55$$), group:$DvtChartDataUtils$$.$getGroup$($chart$$113$$, $groupIndex$$39$$), data:$isOtherSlice$$ ? $JSCompiler_alias_NULL$$ : $rawOptions$$.series[$seriesIndex$$55$$].items[$groupIndex$$39$$], seriesData:$isOtherSlice$$ ? $JSCompiler_alias_NULL$$ : $rawOptions$$.series[$seriesIndex$$55$$], groupData:$DvtChartDataUtils$$.$_getGroupsDataArray$($chart$$113$$)[$groupIndex$$39$$], 
  component:$chartOptions$$._widgetConstructor, value:$isOtherSlice$$ ? $DvtChartPieUtils$$.$getOtherValue$($chart$$113$$) : $DvtChartDataUtils$$.getValue($chart$$113$$, $seriesIndex$$55$$, $groupIndex$$39$$), targetValue:$DvtChartDataUtils$$.$getTargetValue$($chart$$113$$, $seriesIndex$$55$$), x:$DvtChartDataUtils$$.$getXValue$($chart$$113$$, $seriesIndex$$55$$, $groupIndex$$39$$), y:$DvtChartDataUtils$$.getValue($chart$$113$$, $seriesIndex$$55$$, $groupIndex$$39$$), z:$DvtChartDataUtils$$.$getZValue$($chart$$113$$, 
  $seriesIndex$$55$$, $groupIndex$$39$$), low:$DvtChartDataUtils$$.$getLowValue$($chart$$113$$, $seriesIndex$$55$$, $groupIndex$$39$$), high:$DvtChartDataUtils$$.$getHighValue$($chart$$113$$, $seriesIndex$$55$$, $groupIndex$$39$$), color:$isOtherSlice$$ ? $chartOptions$$.styleDefaults.otherColor : $DvtChartStyleUtils$$.$getColor$($chart$$113$$, $seriesIndex$$55$$, $groupIndex$$39$$), open:$isOtherSlice$$ ? $JSCompiler_alias_NULL$$ : $dataItem$$18$$.open, close:$isOtherSlice$$ ? $JSCompiler_alias_NULL$$ : 
  $dataItem$$18$$.close, volume:$isOtherSlice$$ ? $JSCompiler_alias_NULL$$ : $dataItem$$18$$.volume, totalValue:$DvtChartTypeUtils$$.$isPie$($chart$$113$$) ? $chart$$113$$.$pieChart$.$getTotalValue$() : $JSCompiler_alias_NULL$$}
};
$DvtChartDataUtils$$.$_getGroupsDataArray$ = function $$DvtChartDataUtils$$$$_getGroupsDataArray$$($chart$$114$$) {
  var $groupsDataArray$$ = $chart$$114$$.$Cache$.groupsDataArray;
  $groupsDataArray$$ || ($groupsDataArray$$ = $DvtChartDataUtils$$.$_getNestedGroupsData$($chart$$114$$.$_rawOptions$.groups), $chart$$114$$.$Cache$.groupsDataArray = $groupsDataArray$$);
  return $groupsDataArray$$
};
$DvtChartDataUtils$$.$_getNestedGroupsData$ = function $$DvtChartDataUtils$$$$_getNestedGroupsData$$($groups$$6$$) {
  if(!$groups$$6$$) {
    return[]
  }
  for(var $groupsDataArray$$1$$ = [], $i$$346$$ = 0;$i$$346$$ < $groups$$6$$.length;$i$$346$$++) {
    var $group$$23$$ = $groups$$6$$[$i$$346$$];
    if($group$$23$$.groups) {
      for(var $innerGroupData$$ = $DvtChartDataUtils$$.$_getNestedGroupsData$($group$$23$$.groups), $j$$55$$ = 0;$j$$55$$ < $innerGroupData$$.length;$j$$55$$++) {
        $innerGroupData$$[$j$$55$$].unshift($group$$23$$)
      }
      $groupsDataArray$$1$$ = $groupsDataArray$$1$$.concat($innerGroupData$$)
    }else {
      $groupsDataArray$$1$$.push([$group$$23$$])
    }
  }
  return $groupsDataArray$$1$$
};
$DvtChartDataUtils$$.$isBarStackLabeled$ = function $$DvtChartDataUtils$$$$isBarStackLabeled$$($chart$$115$$, $s$$89_seriesIndex$$56$$, $groupIndex$$40$$) {
  var $stackCategory$$ = $DvtChartDataUtils$$.$getStackCategory$($chart$$115$$, $s$$89_seriesIndex$$56$$), $isNegative$$1$$ = 0 > $DvtChartDataUtils$$.getValue($chart$$115$$, $s$$89_seriesIndex$$56$$, $groupIndex$$40$$), $numSeries$$2$$ = $DvtChartDataUtils$$.$getSeriesCount$($chart$$115$$);
  for($s$$89_seriesIndex$$56$$ += 1;$s$$89_seriesIndex$$56$$ < $numSeries$$2$$;$s$$89_seriesIndex$$56$$++) {
    if($stackCategory$$ == $DvtChartDataUtils$$.$getStackCategory$($chart$$115$$, $s$$89_seriesIndex$$56$$) && $isNegative$$1$$ == 0 > $DvtChartDataUtils$$.getValue($chart$$115$$, $s$$89_seriesIndex$$56$$, $groupIndex$$40$$) && "bar" == $DvtChartStyleUtils$$.$getSeriesType$($chart$$115$$, $s$$89_seriesIndex$$56$$) && $DvtChartDataUtils$$.$isBLACItemInViewport$($chart$$115$$, $s$$89_seriesIndex$$56$$, $groupIndex$$40$$)) {
      return $JSCompiler_alias_FALSE$$
    }
  }
  return $JSCompiler_alias_TRUE$$
};
var $DvtChartEventUtils$$ = {};
dvt.$Obj$.$createSubclass$($DvtChartEventUtils$$, dvt.$Obj$);
$DvtChartEventUtils$$.$getHideAndShowBehavior$ = function $$DvtChartEventUtils$$$$getHideAndShowBehavior$$($chart$$116$$) {
  return $chart$$116$$.$getOptions$().hideAndShowBehavior
};
$DvtChartEventUtils$$.$getHoverBehavior$ = function $$DvtChartEventUtils$$$$getHoverBehavior$$($chart$$117$$) {
  return $chart$$117$$.$getOptions$().hoverBehavior
};
$DvtChartEventUtils$$.$setVisibility$ = function $$DvtChartEventUtils$$$$setVisibility$$($chart$$118_options$$56$$, $category$$8$$, $visibility$$1$$) {
  var $hiddenCategories$$1_i$$347_refObj$$3$$ = $DvtChartRefObjUtils$$.$getRefObj$($chart$$118_options$$56$$, $category$$8$$);
  $hiddenCategories$$1_i$$347_refObj$$3$$ != $JSCompiler_alias_NULL$$ && ($hiddenCategories$$1_i$$347_refObj$$3$$.visibility = $visibility$$1$$);
  var $hiddenCategories$$1_i$$347_refObj$$3$$ = $DvtChartStyleUtils$$.$getHiddenCategories$($chart$$118_options$$56$$), $dataSection_index$$137$$ = dvt.$ArrayUtils$.$getIndex$($hiddenCategories$$1_i$$347_refObj$$3$$, $category$$8$$);
  "hidden" == $visibility$$1$$ && 0 > $dataSection_index$$137$$ ? $hiddenCategories$$1_i$$347_refObj$$3$$.push($category$$8$$) : "visible" == $visibility$$1$$ && 0 <= $dataSection_index$$137$$ && $hiddenCategories$$1_i$$347_refObj$$3$$.splice($dataSection_index$$137$$, 1);
  if(($chart$$118_options$$56$$ = $chart$$118_options$$56$$.$getOptions$()) && $chart$$118_options$$56$$.legend && $chart$$118_options$$56$$.legend.sections) {
    for($hiddenCategories$$1_i$$347_refObj$$3$$ = 0;$hiddenCategories$$1_i$$347_refObj$$3$$ < $chart$$118_options$$56$$.legend.sections.length;$hiddenCategories$$1_i$$347_refObj$$3$$++) {
      if(($dataSection_index$$137$$ = $chart$$118_options$$56$$.legend.sections[$hiddenCategories$$1_i$$347_refObj$$3$$]) && $dataSection_index$$137$$.items) {
        for(var $j$$56$$ = 0;$j$$56$$ < $dataSection_index$$137$$.items.length;$j$$56$$++) {
          $dataSection_index$$137$$.items[$j$$56$$].id == $category$$8$$ && ($dataSection_index$$137$$.items[$j$$56$$].categoryVisibility = $visibility$$1$$)
        }
      }
    }
    return $JSCompiler_alias_TRUE$$
  }
  return $JSCompiler_alias_FALSE$$
};
$DvtChartEventUtils$$.$isScrollable$ = function $$DvtChartEventUtils$$$$isScrollable$$($chart$$119$$) {
  return!$DvtChartTypeUtils$$.$isScrollSupported$($chart$$119$$) ? $JSCompiler_alias_FALSE$$ : "off" != $chart$$119$$.$getOptions$().zoomAndScroll
};
$DvtChartEventUtils$$.$isZoomable$ = function $$DvtChartEventUtils$$$$isZoomable$$($chart$$120_zs$$) {
  if(!$DvtChartTypeUtils$$.$isScrollSupported$($chart$$120_zs$$)) {
    return $JSCompiler_alias_FALSE$$
  }
  $chart$$120_zs$$ = $chart$$120_zs$$.$getOptions$().zoomAndScroll;
  return"live" == $chart$$120_zs$$ || "delayed" == $chart$$120_zs$$
};
$DvtChartEventUtils$$.$getZoomDirection$ = function $$DvtChartEventUtils$$$$getZoomDirection$$($chart$$121$$) {
  return $DvtChartTypeUtils$$.$isScatterBubble$($chart$$121$$) ? $chart$$121$$.$getOptions$().zoomDirection : "auto"
};
$DvtChartEventUtils$$.$isLiveScroll$ = function $$DvtChartEventUtils$$$$isLiveScroll$$($chart$$122_zs$$1$$) {
  if(!$DvtChartTypeUtils$$.$isScrollSupported$($chart$$122_zs$$1$$)) {
    return $JSCompiler_alias_FALSE$$
  }
  $chart$$122_zs$$1$$ = $chart$$122_zs$$1$$.$getOptions$().zoomAndScroll;
  return"live" == $chart$$122_zs$$1$$ || "liveScrollOnly" == $chart$$122_zs$$1$$
};
$DvtChartEventUtils$$.$isDelayedScroll$ = function $$DvtChartEventUtils$$$$isDelayedScroll$$($chart$$123_zs$$2$$) {
  if(!$DvtChartTypeUtils$$.$isScrollSupported$($chart$$123_zs$$2$$)) {
    return $JSCompiler_alias_FALSE$$
  }
  $chart$$123_zs$$2$$ = $chart$$123_zs$$2$$.$getOptions$().zoomAndScroll;
  return"delayed" == $chart$$123_zs$$2$$ || "delayedScrollOnly" == $chart$$123_zs$$2$$
};
$DvtChartEventUtils$$.$processIds$ = function $$DvtChartEventUtils$$$$processIds$$($chart$$124$$, $selection$$12$$) {
  for(var $ret$$48$$ = [], $i$$348$$ = 0;$i$$348$$ < $selection$$12$$.length;$i$$348$$++) {
    var $item$$13_otherItems$$ = $selection$$12$$[$i$$348$$];
    $item$$13_otherItems$$.$getSeries$() == $DvtChartPieUtils$$.$OTHER_SLICE_SERIES_ID$ ? ($item$$13_otherItems$$ = $DvtChartPieUtils$$.$getOtherSliceIds$($chart$$124$$), $ret$$48$$ = $ret$$48$$.concat($item$$13_otherItems$$)) : $ret$$48$$.push($item$$13_otherItems$$)
  }
  return $ret$$48$$
};
$DvtChartEventUtils$$.$adjustBounds$ = function $$DvtChartEventUtils$$$$adjustBounds$$($event$$227$$) {
  $event$$227$$.x != $JSCompiler_alias_NULL$$ && ($event$$227$$.x -= 1);
  $event$$227$$.$w$ != $JSCompiler_alias_NULL$$ && ($event$$227$$.$w$ += 2);
  $event$$227$$.y != $JSCompiler_alias_NULL$$ && ($event$$227$$.y -= 1);
  $event$$227$$.$h$ != $JSCompiler_alias_NULL$$ && ($event$$227$$.$h$ += 2)
};
$DvtChartEventUtils$$.$getSelectedObjects$ = function $$DvtChartEventUtils$$$$getSelectedObjects$$($chart$$125$$, $event$$228$$, $boundedObjects_selectionHandler$$2$$) {
  if(!$chart$$125$$.$Cache$.dataFiltered) {
    return $boundedObjects_selectionHandler$$2$$.$getSelectedIds$()
  }
  $boundedObjects_selectionHandler$$2$$ = [];
  var $dataPositions$$ = $chart$$125$$.$Cache$.dataPositions;
  if(!$dataPositions$$) {
    for(var $dataPositions$$ = [], $i$$349_seriesIdx$$1$$ = 0;$i$$349_seriesIdx$$1$$ < $DvtChartDataUtils$$.$getSeriesCount$($chart$$125$$);$i$$349_seriesIdx$$1$$++) {
      for(var $groupIdx$$1_withinY$$ = 0;$groupIdx$$1_withinY$$ < $DvtChartDataUtils$$.$getGroupCount$($chart$$125$$);$groupIdx$$1_withinY$$++) {
        var $dataPos$$5$$;
        if($dataPos$$5$$ = "bar" == $DvtChartStyleUtils$$.$getSeriesType$($chart$$125$$, $i$$349_seriesIdx$$1$$) ? $DvtChartDataUtils$$.$getBarInfo$($chart$$125$$, $i$$349_seriesIdx$$1$$, $groupIdx$$1_withinY$$).$dataPos$ : $DvtChartDataUtils$$.$getMarkerPosition$($chart$$125$$, $i$$349_seriesIdx$$1$$, $groupIdx$$1_withinY$$)) {
          $dataPos$$5$$ = $chart$$125$$.$getPlotArea$().$localToStage$($dataPos$$5$$), $dataPositions$$.push({$seriesIndex$:$i$$349_seriesIdx$$1$$, $groupIndex$:$groupIdx$$1_withinY$$, $pos$:$dataPos$$5$$})
        }
      }
    }
    $chart$$125$$.$Cache$.dataPositions = $dataPositions$$
  }
  for($i$$349_seriesIdx$$1$$ = 0;$i$$349_seriesIdx$$1$$ < $dataPositions$$.length;$i$$349_seriesIdx$$1$$++) {
    if($dataPos$$5$$ = $dataPositions$$[$i$$349_seriesIdx$$1$$].$pos$) {
      $groupIdx$$1_withinY$$ = $event$$228$$.y == $JSCompiler_alias_NULL$$ || $dataPos$$5$$.y >= $event$$228$$.y && $dataPos$$5$$.y <= $event$$228$$.y + $event$$228$$.$h$, ($event$$228$$.x == $JSCompiler_alias_NULL$$ || $dataPos$$5$$.x >= $event$$228$$.x && $dataPos$$5$$.x <= $event$$228$$.x + $event$$228$$.$w$) && $groupIdx$$1_withinY$$ && $boundedObjects_selectionHandler$$2$$.push(new $DvtChartDataItem$$($JSCompiler_alias_NULL$$, $DvtChartDataUtils$$.$getSeries$($chart$$125$$, $dataPositions$$[$i$$349_seriesIdx$$1$$].$seriesIndex$), 
      $DvtChartDataUtils$$.$getGroup$($chart$$125$$, $dataPositions$$[$i$$349_seriesIdx$$1$$].$groupIndex$)))
    }
  }
  return $boundedObjects_selectionHandler$$2$$
};
$DvtChartEventUtils$$.$getBoundedObjects$ = function $$DvtChartEventUtils$$$$getBoundedObjects$$($chart$$126$$, $event$$229$$) {
  for(var $peers$$4$$ = $JSCompiler_StaticMethods_getChartObjPeers$$($chart$$126$$), $boundedPeers$$ = [], $i$$350$$ = 0;$i$$350$$ < $peers$$4$$.length;$i$$350$$++) {
    var $peer$$19$$ = $peers$$4$$[$i$$350$$], $dataPos$$6$$ = $peer$$19$$.$_dataPos$;
    if($dataPos$$6$$) {
      var $dataPos$$6$$ = $chart$$126$$.$getPlotArea$().$localToStage$($dataPos$$6$$), $withinY$$1$$ = $event$$229$$.y == $JSCompiler_alias_NULL$$ || $dataPos$$6$$.y >= $event$$229$$.y && $dataPos$$6$$.y <= $event$$229$$.y + $event$$229$$.$h$;
      ($event$$229$$.x == $JSCompiler_alias_NULL$$ || $dataPos$$6$$.x >= $event$$229$$.x && $dataPos$$6$$.x <= $event$$229$$.x + $event$$229$$.$w$) && $withinY$$1$$ && $boundedPeers$$.push($peer$$19$$)
    }
  }
  return $boundedPeers$$
};
$DvtChartEventUtils$$.$getAxisBounds$ = function $$DvtChartEventUtils$$$$getAxisBounds$$($chart$$127$$, $coords$$18_event$$230$$, $limitExtent$$) {
  var $maxPt_plotArea$$1_yMinMax$$ = $chart$$127$$.$getPlotArea$(), $minPt_xMinMax$$ = $maxPt_plotArea$$1_yMinMax$$.$stageToLocal$(new dvt.$Point$($coords$$18_event$$230$$.x, $coords$$18_event$$230$$.y)), $maxPt_plotArea$$1_yMinMax$$ = $maxPt_plotArea$$1_yMinMax$$.$stageToLocal$(new dvt.$Point$($coords$$18_event$$230$$.x + $coords$$18_event$$230$$.$w$, $coords$$18_event$$230$$.y + $coords$$18_event$$230$$.$h$));
  $coords$$18_event$$230$$.x == $JSCompiler_alias_NULL$$ && ($minPt_xMinMax$$.x = $JSCompiler_alias_NULL$$, $maxPt_plotArea$$1_yMinMax$$.x = $JSCompiler_alias_NULL$$);
  $coords$$18_event$$230$$.y == $JSCompiler_alias_NULL$$ && ($minPt_xMinMax$$.y = $JSCompiler_alias_NULL$$, $maxPt_plotArea$$1_yMinMax$$.y = $JSCompiler_alias_NULL$$);
  $coords$$18_event$$230$$ = $DvtChartEventUtils$$.$_convertToAxisCoord$($chart$$127$$, $minPt_xMinMax$$.x, $maxPt_plotArea$$1_yMinMax$$.x, $minPt_xMinMax$$.y, $maxPt_plotArea$$1_yMinMax$$.y);
  var $minPt_xMinMax$$ = {}, $maxPt_plotArea$$1_yMinMax$$ = {}, $y2MinMax$$ = {}, $startEndGroup$$1$$ = {};
  $chart$$127$$.$xAxis$ && ($minPt_xMinMax$$ = $DvtChartEventUtils$$.$_getAxisMinMax$($chart$$127$$.$xAxis$, $coords$$18_event$$230$$.$xMin$, $coords$$18_event$$230$$.$xMax$, $limitExtent$$), $startEndGroup$$1$$ = $DvtChartEventUtils$$.$getAxisStartEndGroup$($chart$$127$$.$xAxis$, $minPt_xMinMax$$.min, $minPt_xMinMax$$.max));
  $chart$$127$$.$yAxis$ && ($maxPt_plotArea$$1_yMinMax$$ = $DvtChartEventUtils$$.$_getAxisMinMax$($chart$$127$$.$yAxis$, $coords$$18_event$$230$$.$yMin$, $coords$$18_event$$230$$.$yMax$, $limitExtent$$));
  $chart$$127$$.$y2Axis$ && ($y2MinMax$$ = $DvtChartEventUtils$$.$_getAxisMinMax$($chart$$127$$.$y2Axis$, $coords$$18_event$$230$$.$yMin$, $coords$$18_event$$230$$.$yMax$, $limitExtent$$));
  return{$xMin$:$minPt_xMinMax$$.min, $xMax$:$minPt_xMinMax$$.max, $yMin$:$maxPt_plotArea$$1_yMinMax$$.min, $yMax$:$maxPt_plotArea$$1_yMinMax$$.max, $y2Min$:$y2MinMax$$.min, $y2Max$:$y2MinMax$$.max, $startGroup$:$startEndGroup$$1$$.$startGroup$, $endGroup$:$startEndGroup$$1$$.$endGroup$}
};
$DvtChartEventUtils$$.$_getAxisMinMax$ = function $$DvtChartEventUtils$$$$_getAxisMinMax$$($axis$$28$$, $center$$2_min$$6_minCoord$$2$$, $max$$6_maxCoord$$2$$, $limitExtent$$1_minExtent$$) {
  if($center$$2_min$$6_minCoord$$2$$ == $JSCompiler_alias_NULL$$ || $max$$6_maxCoord$$2$$ == $JSCompiler_alias_NULL$$) {
    return{min:$JSCompiler_alias_NULL$$, max:$JSCompiler_alias_NULL$$}
  }
  $center$$2_min$$6_minCoord$$2$$ = $JSCompiler_StaticMethods_getUnboundedLinearValueAt$$($axis$$28$$, $center$$2_min$$6_minCoord$$2$$);
  $max$$6_maxCoord$$2$$ = $JSCompiler_StaticMethods_getUnboundedLinearValueAt$$($axis$$28$$, $max$$6_maxCoord$$2$$);
  return $limitExtent$$1_minExtent$$ ? ($limitExtent$$1_minExtent$$ = $axis$$28$$.$getInfo$().$getMinimumExtent$(), $max$$6_maxCoord$$2$$ - $center$$2_min$$6_minCoord$$2$$ < $limitExtent$$1_minExtent$$ && ($center$$2_min$$6_minCoord$$2$$ = ($max$$6_maxCoord$$2$$ + $center$$2_min$$6_minCoord$$2$$) / 2, $max$$6_maxCoord$$2$$ = $center$$2_min$$6_minCoord$$2$$ + $limitExtent$$1_minExtent$$ / 2, $center$$2_min$$6_minCoord$$2$$ -= $limitExtent$$1_minExtent$$ / 2), $DvtChartEventUtils$$.$_limitToGlobal$($axis$$28$$, 
  $center$$2_min$$6_minCoord$$2$$, $max$$6_maxCoord$$2$$)) : $DvtChartEventUtils$$.$_getActualMinMax$($axis$$28$$, $center$$2_min$$6_minCoord$$2$$, $max$$6_maxCoord$$2$$)
};
$DvtChartEventUtils$$.$getAxisBoundsByDelta$ = function $$DvtChartEventUtils$$$$getAxisBoundsByDelta$$($chart$$128$$, $deltas_xMinDelta$$, $xMaxDelta_zoomDirection$$, $xMinMax$$1_yMinDelta$$, $yMaxDelta_yMinMax$$1$$) {
  $deltas_xMinDelta$$ = $DvtChartEventUtils$$.$_convertToAxisCoord$($chart$$128$$, $deltas_xMinDelta$$, $xMaxDelta_zoomDirection$$, $xMinMax$$1_yMinDelta$$, $yMaxDelta_yMinMax$$1$$);
  $xMaxDelta_zoomDirection$$ = $DvtChartEventUtils$$.$getZoomDirection$($chart$$128$$);
  $xMinMax$$1_yMinDelta$$ = {};
  $yMaxDelta_yMinMax$$1$$ = {};
  var $y2MinMax$$1$$ = {}, $startEndGroup$$2$$ = {};
  $chart$$128$$.$xAxis$ && "y" != $xMaxDelta_zoomDirection$$ && ($xMinMax$$1_yMinDelta$$ = $DvtChartEventUtils$$.$_getAxisMinMaxByDelta$($chart$$128$$.$xAxis$, $deltas_xMinDelta$$.$xMin$, $deltas_xMinDelta$$.$xMax$), $startEndGroup$$2$$ = $DvtChartEventUtils$$.$getAxisStartEndGroup$($chart$$128$$.$xAxis$, $xMinMax$$1_yMinDelta$$.min, $xMinMax$$1_yMinDelta$$.max));
  $chart$$128$$.$yAxis$ && "x" != $xMaxDelta_zoomDirection$$ && ($yMaxDelta_yMinMax$$1$$ = $DvtChartEventUtils$$.$_getAxisMinMaxByDelta$($chart$$128$$.$yAxis$, $deltas_xMinDelta$$.$yMin$, $deltas_xMinDelta$$.$yMax$));
  $chart$$128$$.$y2Axis$ && ($y2MinMax$$1$$ = $DvtChartEventUtils$$.$_getAxisMinMaxByDelta$($chart$$128$$.$y2Axis$, $deltas_xMinDelta$$.$yMin$, $deltas_xMinDelta$$.$yMax$));
  return{$xMin$:$xMinMax$$1_yMinDelta$$.min, $xMax$:$xMinMax$$1_yMinDelta$$.max, $yMin$:$yMaxDelta_yMinMax$$1$$.min, $yMax$:$yMaxDelta_yMinMax$$1$$.max, $y2Min$:$y2MinMax$$1$$.min, $y2Max$:$y2MinMax$$1$$.max, $startGroup$:$startEndGroup$$2$$.$startGroup$, $endGroup$:$startEndGroup$$2$$.$endGroup$}
};
$DvtChartEventUtils$$.$_getAxisMinMaxByDelta$ = function $$DvtChartEventUtils$$$$_getAxisMinMaxByDelta$$($axis$$29$$, $minDelta$$, $maxDelta$$) {
  var $min$$7$$ = $JSCompiler_StaticMethods_getLinearViewportMin$$($axis$$29$$), $max$$7$$ = $JSCompiler_StaticMethods_getLinearViewportMax$$($axis$$29$$);
  if($maxDelta$$ == $minDelta$$ && $JSCompiler_StaticMethods_isFullViewport$$($axis$$29$$)) {
    return $DvtChartEventUtils$$.$_getActualMinMax$($axis$$29$$, $min$$7$$, $max$$7$$)
  }
  var $minDeltaVal$$ = $JSCompiler_StaticMethods_getUnboundedLinearValueAt$$($axis$$29$$, $minDelta$$) - $JSCompiler_StaticMethods_getUnboundedLinearValueAt$$($axis$$29$$, 0), $maxDeltaVal$$ = $JSCompiler_StaticMethods_getUnboundedLinearValueAt$$($axis$$29$$, $maxDelta$$) - $JSCompiler_StaticMethods_getUnboundedLinearValueAt$$($axis$$29$$, 0), $weight$$ = 1, $newExtent$$ = $max$$7$$ + $maxDeltaVal$$ - ($min$$7$$ + $minDeltaVal$$), $minExtent$$1$$ = $axis$$29$$.$getInfo$().$getMinimumExtent$();
  $minDelta$$ != $maxDelta$$ && $newExtent$$ < $minExtent$$1$$ && ($weight$$ = ($max$$7$$ - $min$$7$$ - $minExtent$$1$$) / ($minDeltaVal$$ - $maxDeltaVal$$));
  return $DvtChartEventUtils$$.$_limitToGlobal$($axis$$29$$, $min$$7$$ + $minDeltaVal$$ * $weight$$, $max$$7$$ + $maxDeltaVal$$ * $weight$$)
};
$DvtChartEventUtils$$.$_convertToAxisCoord$ = function $$DvtChartEventUtils$$$$_convertToAxisCoord$$($chart$$129$$, $xMin$$1$$, $xMax$$1$$, $yMin$$2$$, $yMax$$2$$) {
  var $axisCoord$$3$$ = {}, $isRTL$$15$$ = dvt.$Agent$.$isRightToLeft$($chart$$129$$.$getCtx$());
  $DvtChartTypeUtils$$.$isHorizontal$($chart$$129$$) ? ($axisCoord$$3$$.$xMin$ = $yMin$$2$$, $axisCoord$$3$$.$xMax$ = $yMax$$2$$, $axisCoord$$3$$.$yMin$ = $isRTL$$15$$ ? $xMax$$1$$ : $xMin$$1$$, $axisCoord$$3$$.$yMax$ = $isRTL$$15$$ ? $xMin$$1$$ : $xMax$$1$$) : ($axisCoord$$3$$.$xMin$ = $isRTL$$15$$ ? $xMax$$1$$ : $xMin$$1$$, $axisCoord$$3$$.$xMax$ = $isRTL$$15$$ ? $xMin$$1$$ : $xMax$$1$$, $axisCoord$$3$$.$yMin$ = $yMax$$2$$, $axisCoord$$3$$.$yMax$ = $yMin$$2$$);
  return $axisCoord$$3$$
};
$DvtChartEventUtils$$.$_limitToGlobal$ = function $$DvtChartEventUtils$$$$_limitToGlobal$$($axis$$30$$, $min$$8$$, $max$$8$$) {
  var $globalMin$$1$$ = $axis$$30$$.$actualToLinear$($axis$$30$$.$Info$.$GlobalMin$), $globalMax$$1$$ = $axis$$30$$.$actualToLinear$($axis$$30$$.$Info$.$GlobalMax$);
  $max$$8$$ - $min$$8$$ >= $globalMax$$1$$ - $globalMin$$1$$ ? ($min$$8$$ = $globalMin$$1$$, $max$$8$$ = $globalMax$$1$$) : $min$$8$$ < $globalMin$$1$$ ? ($max$$8$$ += $globalMin$$1$$ - $min$$8$$, $min$$8$$ = $globalMin$$1$$) : $max$$8$$ > $globalMax$$1$$ && ($min$$8$$ -= $max$$8$$ - $globalMax$$1$$, $max$$8$$ = $globalMax$$1$$);
  return $DvtChartEventUtils$$.$_getActualMinMax$($axis$$30$$, $min$$8$$, $max$$8$$)
};
$DvtChartEventUtils$$.$_getActualMinMax$ = function $$DvtChartEventUtils$$$$_getActualMinMax$$($axis$$31$$, $min$$9$$, $max$$9$$) {
  return{min:$axis$$31$$.$linearToActual$($min$$9$$), max:$axis$$31$$.$linearToActual$($max$$9$$)}
};
$DvtChartEventUtils$$.$getAxisStartEndGroup$ = function $$DvtChartEventUtils$$$$getAxisStartEndGroup$$($axis$$32_endGroup$$, $min$$10_startGroup_startIdx$$, $endIdx_max$$10$$) {
  return $JSCompiler_StaticMethods_isGroupAxis$$($axis$$32_endGroup$$) && ($min$$10_startGroup_startIdx$$ != $JSCompiler_alias_NULL$$ && $endIdx_max$$10$$ != $JSCompiler_alias_NULL$$) && ($min$$10_startGroup_startIdx$$ = Math.ceil($min$$10_startGroup_startIdx$$), $endIdx_max$$10$$ = Math.floor($endIdx_max$$10$$), $endIdx_max$$10$$ >= $min$$10_startGroup_startIdx$$) ? ($min$$10_startGroup_startIdx$$ = $axis$$32_endGroup$$.$getInfo$().$getGroup$($min$$10_startGroup_startIdx$$), $axis$$32_endGroup$$ = 
  $axis$$32_endGroup$$.$getInfo$().$getGroup$($endIdx_max$$10$$), {$startGroup$:$min$$10_startGroup_startIdx$$, $endGroup$:$axis$$32_endGroup$$}) : {$startGroup$:$JSCompiler_alias_NULL$$, $endGroup$:$JSCompiler_alias_NULL$$}
};
$DvtChartEventUtils$$.$setInitialSelection$ = function $$DvtChartEventUtils$$$$setInitialSelection$$($chart$$130$$, $selected$$20$$) {
  var $handler$$36$$ = $chart$$130$$.$getSelectionHandler$();
  if($handler$$36$$) {
    for(var $peers$$5$$ = $JSCompiler_StaticMethods_getChartObjPeers$$($chart$$130$$), $selectedIds$$3$$ = [], $i$$351$$ = 0;$i$$351$$ < $selected$$20$$.length;$i$$351$$++) {
      for(var $j$$57$$ = 0;$j$$57$$ < $peers$$5$$.length;$j$$57$$++) {
        var $peer$$20$$ = $peers$$5$$[$j$$57$$];
        $peer$$20$$.$getSeries$() === $selected$$20$$[$i$$351$$].series && $peer$$20$$.$getGroup$() === $selected$$20$$[$i$$351$$].group && $selectedIds$$3$$.push($peer$$20$$.getId())
      }
    }
    $handler$$36$$.$processInitialSelections$($selectedIds$$3$$, $peers$$5$$)
  }
};
$DvtChartEventUtils$$.$getKeyboardNavigables$ = function $$DvtChartEventUtils$$$$getKeyboardNavigables$$($chart$$131_peers$$6$$) {
  var $navigables$$7$$ = [];
  if($DvtChartTypeUtils$$.$isPie$($chart$$131_peers$$6$$)) {
    for(var $slices$$5$$ = $chart$$131_peers$$6$$.$pieChart$.$_slices$, $i$$352$$ = 0;$i$$352$$ < $slices$$5$$.length;$i$$352$$++) {
      $DvtChartStyleUtils$$.$isSeriesRendered$($chart$$131_peers$$6$$, $slices$$5$$[$i$$352$$].$getSeriesIndex$()) && $navigables$$7$$.push($slices$$5$$[$i$$352$$])
    }
  }else {
    $chart$$131_peers$$6$$ = $JSCompiler_StaticMethods_getChartObjPeers$$($chart$$131_peers$$6$$);
    for($i$$352$$ = 0;$i$$352$$ < $chart$$131_peers$$6$$.length;$i$$352$$++) {
      $chart$$131_peers$$6$$[$i$$352$$].$isNavigable$() && $navigables$$7$$.push($chart$$131_peers$$6$$[$i$$352$$])
    }
  }
  return $navigables$$7$$
};
$DvtChartEventUtils$$.$isSeriesDrillable$ = function $$DvtChartEventUtils$$$$isSeriesDrillable$$($chart$$132$$, $seriesIndex$$57$$) {
  var $drilling$$1_series$$9$$ = $DvtChartDataUtils$$.$getSeriesItem$($chart$$132$$, $seriesIndex$$57$$), $drilling$$1_series$$9$$ = $drilling$$1_series$$9$$ != $JSCompiler_alias_NULL$$ ? $drilling$$1_series$$9$$.drilling : "inherit";
  if("on" == $drilling$$1_series$$9$$) {
    return $JSCompiler_alias_TRUE$$
  }
  if("off" == $drilling$$1_series$$9$$) {
    return $JSCompiler_alias_FALSE$$
  }
  $drilling$$1_series$$9$$ = $chart$$132$$.$getOptions$().drilling;
  return"on" == $drilling$$1_series$$9$$ || "seriesOnly" == $drilling$$1_series$$9$$
};
$DvtChartEventUtils$$.$isDataItemDrillable$ = function $$DvtChartEventUtils$$$$isDataItemDrillable$$($chart$$133$$, $drilling$$2_item$$14_seriesIndex$$58$$, $groupIndex$$41$$) {
  $drilling$$2_item$$14_seriesIndex$$58$$ = $DvtChartDataUtils$$.$getDataItem$($chart$$133$$, $drilling$$2_item$$14_seriesIndex$$58$$, $groupIndex$$41$$);
  $drilling$$2_item$$14_seriesIndex$$58$$ = $drilling$$2_item$$14_seriesIndex$$58$$ != $JSCompiler_alias_NULL$$ ? $drilling$$2_item$$14_seriesIndex$$58$$.drilling : "inherit";
  if("on" == $drilling$$2_item$$14_seriesIndex$$58$$) {
    return $JSCompiler_alias_TRUE$$
  }
  if("off" == $drilling$$2_item$$14_seriesIndex$$58$$) {
    return $JSCompiler_alias_FALSE$$
  }
  $drilling$$2_item$$14_seriesIndex$$58$$ = $chart$$133$$.$getOptions$().drilling;
  return"on" == $drilling$$2_item$$14_seriesIndex$$58$$
};
var $DvtChartRefObjUtils$$ = {};
dvt.$Obj$.$createSubclass$($DvtChartRefObjUtils$$, dvt.$Obj$);
$DvtChartRefObjUtils$$.$getRefObjs$ = function $$DvtChartRefObjUtils$$$$getRefObjs$$($chart$$134_y2$$13$$) {
  var $x$$108$$ = $DvtChartRefObjUtils$$.$getAxisRefObjs$($chart$$134_y2$$13$$, "x"), $y$$86$$ = $DvtChartRefObjUtils$$.$getAxisRefObjs$($chart$$134_y2$$13$$, "y");
  $chart$$134_y2$$13$$ = $DvtChartRefObjUtils$$.$getAxisRefObjs$($chart$$134_y2$$13$$, "y2");
  return $x$$108$$.concat($y$$86$$, $chart$$134_y2$$13$$)
};
$DvtChartRefObjUtils$$.$getAxisRefObjs$ = function $$DvtChartRefObjUtils$$$$getAxisRefObjs$$($chart$$135$$, $axisType$$4$$) {
  var $options$$57$$ = $chart$$135$$.$getOptions$();
  return $options$$57$$ && $options$$57$$[$axisType$$4$$ + "Axis"] && $options$$57$$[$axisType$$4$$ + "Axis"].referenceObjects ? $options$$57$$[$axisType$$4$$ + "Axis"].referenceObjects : []
};
$DvtChartRefObjUtils$$.$getType$ = function $$DvtChartRefObjUtils$$$$getType$$($refObj$$4$$) {
  return"area" == $refObj$$4$$.type ? "area" : "line"
};
$DvtChartRefObjUtils$$.$getLocation$ = function $$DvtChartRefObjUtils$$$$getLocation$$($refObj$$5$$) {
  return"front" == $refObj$$5$$.location ? "front" : "back"
};
$DvtChartRefObjUtils$$.$getColor$ = function $$DvtChartRefObjUtils$$$$getColor$$($refObj$$6$$) {
  return $refObj$$6$$.color ? $refObj$$6$$.color : "#333333"
};
$DvtChartRefObjUtils$$.$getLineWidth$ = function $$DvtChartRefObjUtils$$$$getLineWidth$$($refObj$$7$$) {
  return $refObj$$7$$.lineWidth ? $refObj$$7$$.lineWidth : 1
};
$DvtChartRefObjUtils$$.$getLineType$ = function $$DvtChartRefObjUtils$$$$getLineType$$($refObj$$8$$) {
  return $refObj$$8$$.lineType ? $refObj$$8$$.lineType : "straight"
};
$DvtChartRefObjUtils$$.$isObjectRendered$ = function $$DvtChartRefObjUtils$$$$isObjectRendered$$($chart$$136$$, $refObj$$9$$) {
  var $hiddenCategories$$2$$ = $DvtChartStyleUtils$$.$getHiddenCategories$($chart$$136$$);
  if(0 < $hiddenCategories$$2$$.length) {
    var $categories$$5$$ = $DvtChartRefObjUtils$$.$getRefObjCategories$($refObj$$9$$);
    if($categories$$5$$ && dvt.$ArrayUtils$.$hasAnyItem$($hiddenCategories$$2$$, $categories$$5$$)) {
      return $JSCompiler_alias_FALSE$$
    }
  }
  return"hidden" != $refObj$$9$$.visibility
};
$DvtChartRefObjUtils$$.getId = function $$DvtChartRefObjUtils$$$getId$($refObj$$10$$) {
  return $refObj$$10$$.id != $JSCompiler_alias_NULL$$ ? $refObj$$10$$.id : $refObj$$10$$.text
};
$DvtChartRefObjUtils$$.$getRefObjCategories$ = function $$DvtChartRefObjUtils$$$$getRefObjCategories$$($refObj$$11$$) {
  return $refObj$$11$$.categories ? $refObj$$11$$.categories : [$DvtChartRefObjUtils$$.getId($refObj$$11$$)]
};
$DvtChartRefObjUtils$$.$getRefObj$ = function $$DvtChartRefObjUtils$$$$getRefObj$$($chart$$137$$, $id$$101$$) {
  for(var $refObjs$$2$$ = $DvtChartRefObjUtils$$.$getRefObjs$($chart$$137$$), $i$$353$$ = 0;$i$$353$$ < $refObjs$$2$$.length;$i$$353$$++) {
    if($DvtChartRefObjUtils$$.getId($refObjs$$2$$[$i$$353$$]) == $id$$101$$) {
      return $refObjs$$2$$[$i$$353$$]
    }
  }
};
$DvtChartRefObjUtils$$.$getLowValue$ = function $$DvtChartRefObjUtils$$$$getLowValue$$($item$$15$$) {
  return $item$$15$$ == $JSCompiler_alias_NULL$$ ? $JSCompiler_alias_NULL$$ : $item$$15$$.min != $JSCompiler_alias_NULL$$ ? $item$$15$$.min : $item$$15$$.low
};
$DvtChartRefObjUtils$$.$getHighValue$ = function $$DvtChartRefObjUtils$$$$getHighValue$$($item$$16$$) {
  return $item$$16$$ == $JSCompiler_alias_NULL$$ ? $JSCompiler_alias_NULL$$ : $item$$16$$.max != $JSCompiler_alias_NULL$$ ? $item$$16$$.max : $item$$16$$.high
};
$DvtChartRefObjUtils$$.$getXValue$ = function $$DvtChartRefObjUtils$$$$getXValue$$($chart$$138$$, $items$$17$$, $index$$138$$) {
  return $items$$17$$[$index$$138$$] && !isNaN($items$$17$$[$index$$138$$].x) ? $items$$17$$[$index$$138$$].x : $DvtChartAxisUtils$$.$hasTimeAxis$($chart$$138$$) && !$DvtChartAxisUtils$$.$isMixedFrequency$($chart$$138$$) ? $DvtChartDataUtils$$.$getGroupLabel$($chart$$138$$, $index$$138$$) : $index$$138$$
};
var $DvtChartSeriesEffectUtils$$ = {};
dvt.$Obj$.$createSubclass$($DvtChartSeriesEffectUtils$$, dvt.$Obj$);
$DvtChartSeriesEffectUtils$$.$getBarFill$ = function $$DvtChartSeriesEffectUtils$$$$getBarFill$$($chart$$139_colors$$, $pattern$$2_seriesIndex$$59$$, $groupIndex$$42_seriesEffect$$, $angle$$17_bHoriz$$8$$, $barWidth$$5$$) {
  var $color$$22_stops$$ = $DvtChartStyleUtils$$.$getColor$($chart$$139_colors$$, $pattern$$2_seriesIndex$$59$$, $groupIndex$$42_seriesEffect$$);
  $pattern$$2_seriesIndex$$59$$ = $DvtChartStyleUtils$$.$getPattern$($chart$$139_colors$$, $pattern$$2_seriesIndex$$59$$, $groupIndex$$42_seriesEffect$$);
  $groupIndex$$42_seriesEffect$$ = $DvtChartStyleUtils$$.$getSeriesEffect$($chart$$139_colors$$);
  return $pattern$$2_seriesIndex$$59$$ ? new dvt.$PatternFill$($pattern$$2_seriesIndex$$59$$, $color$$22_stops$$) : "gradient" == $groupIndex$$42_seriesEffect$$ && 3 < $barWidth$$5$$ ? ($angle$$17_bHoriz$$8$$ = $angle$$17_bHoriz$$8$$ ? 270 : 0, $DvtChartSeriesEffectUtils$$.$_useAltaGradients$($chart$$139_colors$$) ? ($chart$$139_colors$$ = [dvt.$ColorUtils$.$adjustHSL$($color$$22_stops$$, -0.09, 0.04), dvt.$ColorUtils$.$adjustHSL$($color$$22_stops$$, -0.04, -0.05)], $color$$22_stops$$ = [0, 1]) : 
  ($chart$$139_colors$$ = [dvt.$ColorUtils$.$getPastel$($color$$22_stops$$, 0.15), dvt.$ColorUtils$.$getPastel$($color$$22_stops$$, 0.45), dvt.$ColorUtils$.$getPastel$($color$$22_stops$$, 0.25), $color$$22_stops$$, dvt.$ColorUtils$.$getPastel$($color$$22_stops$$, 0.15), dvt.$ColorUtils$.$getDarker$($color$$22_stops$$, 0.9)], $color$$22_stops$$ = [0, 0.15, 0.3, 0.65, 0.85, 1]), new dvt.$LinearGradientFill$($angle$$17_bHoriz$$8$$, $chart$$139_colors$$, $JSCompiler_alias_NULL$$, $color$$22_stops$$)) : 
  new dvt.$SolidFill$($color$$22_stops$$)
};
$DvtChartSeriesEffectUtils$$.$getAreaFill$ = function $$DvtChartSeriesEffectUtils$$$$getAreaFill$$($chart$$140$$, $seriesIndex$$60$$) {
  var $alpha$$13_colors$$1_isLineWithArea$$ = "lineWithArea" == $DvtChartStyleUtils$$.$getSeriesType$($chart$$140$$, $seriesIndex$$60$$), $color$$23_seriesItem$$11_stops$$1$$;
  ($color$$23_seriesItem$$11_stops$$1$$ = $DvtChartDataUtils$$.$getSeriesItem$($chart$$140$$, $seriesIndex$$60$$)) && $color$$23_seriesItem$$11_stops$$1$$.areaColor ? $color$$23_seriesItem$$11_stops$$1$$ = $color$$23_seriesItem$$11_stops$$1$$.areaColor : ($color$$23_seriesItem$$11_stops$$1$$ = $DvtChartStyleUtils$$.$getColor$($chart$$140$$, $seriesIndex$$60$$), $alpha$$13_colors$$1_isLineWithArea$$ && ($color$$23_seriesItem$$11_stops$$1$$ = dvt.$ColorUtils$.$setAlpha$($color$$23_seriesItem$$11_stops$$1$$, 
  0.2)));
  var $angle$$18_pattern$$3$$ = $DvtChartStyleUtils$$.$getPattern$($chart$$140$$, $seriesIndex$$60$$), $seriesEffect$$1$$ = $DvtChartStyleUtils$$.$getSeriesEffect$($chart$$140$$);
  return $angle$$18_pattern$$3$$ ? new dvt.$PatternFill$($angle$$18_pattern$$3$$, $color$$23_seriesItem$$11_stops$$1$$) : "gradient" == $seriesEffect$$1$$ ? ($angle$$18_pattern$$3$$ = $DvtChartTypeUtils$$.$isHorizontal$($chart$$140$$) ? 180 : 270, $alpha$$13_colors$$1_isLineWithArea$$ ? ($alpha$$13_colors$$1_isLineWithArea$$ = dvt.$ColorUtils$.$getAlpha$($color$$23_seriesItem$$11_stops$$1$$), $alpha$$13_colors$$1_isLineWithArea$$ = [dvt.$ColorUtils$.$setAlpha$($color$$23_seriesItem$$11_stops$$1$$, 
  Math.min($alpha$$13_colors$$1_isLineWithArea$$ + 0.2, 1)), dvt.$ColorUtils$.$setAlpha$($color$$23_seriesItem$$11_stops$$1$$, Math.max($alpha$$13_colors$$1_isLineWithArea$$ - 0.15, 0))], $color$$23_seriesItem$$11_stops$$1$$ = [0, 1]) : $DvtChartSeriesEffectUtils$$.$_useAltaGradients$($chart$$140$$) ? ($alpha$$13_colors$$1_isLineWithArea$$ = [dvt.$ColorUtils$.$adjustHSL$($color$$23_seriesItem$$11_stops$$1$$, -0.09, 0.04), dvt.$ColorUtils$.$adjustHSL$($color$$23_seriesItem$$11_stops$$1$$, -0.04, -0.05)], 
  $color$$23_seriesItem$$11_stops$$1$$ = [0, 1]) : ($alpha$$13_colors$$1_isLineWithArea$$ = $DvtChartTypeUtils$$.$isSpark$($chart$$140$$) ? [dvt.$ColorUtils$.$getDarker$($color$$23_seriesItem$$11_stops$$1$$, 0.5), $color$$23_seriesItem$$11_stops$$1$$, dvt.$ColorUtils$.$getPastel$($color$$23_seriesItem$$11_stops$$1$$, 0.5)] : [dvt.$ColorUtils$.$getPastel$($color$$23_seriesItem$$11_stops$$1$$, 0.5), $color$$23_seriesItem$$11_stops$$1$$, dvt.$ColorUtils$.$getDarker$($color$$23_seriesItem$$11_stops$$1$$, 
  0.7)], $color$$23_seriesItem$$11_stops$$1$$ = [0, 0.5, 1]), new dvt.$LinearGradientFill$($angle$$18_pattern$$3$$, $alpha$$13_colors$$1_isLineWithArea$$, $JSCompiler_alias_NULL$$, $color$$23_seriesItem$$11_stops$$1$$)) : new dvt.$SolidFill$($color$$23_seriesItem$$11_stops$$1$$)
};
$DvtChartSeriesEffectUtils$$.$getMarkerFill$ = function $$DvtChartSeriesEffectUtils$$$$getMarkerFill$$($chart$$141_colors$$2_linearColors_radialColors$$, $seriesIndex$$61$$, $groupIndex$$43$$) {
  var $color$$24$$ = $DvtChartStyleUtils$$.$getMarkerColor$($chart$$141_colors$$2_linearColors_radialColors$$, $seriesIndex$$61$$, $groupIndex$$43$$), $pattern$$4$$ = $DvtChartStyleUtils$$.$getPattern$($chart$$141_colors$$2_linearColors_radialColors$$, $seriesIndex$$61$$, $groupIndex$$43$$);
  if($pattern$$4$$) {
    return new dvt.$PatternFill$($pattern$$4$$, $color$$24$$)
  }
  if($DvtChartTypeUtils$$.$isBubble$($chart$$141_colors$$2_linearColors_radialColors$$) && "gradient" == $DvtChartStyleUtils$$.$getSeriesEffect$($chart$$141_colors$$2_linearColors_radialColors$$)) {
    if($DvtChartSeriesEffectUtils$$.$_useAltaGradients$($chart$$141_colors$$2_linearColors_radialColors$$)) {
      return $chart$$141_colors$$2_linearColors_radialColors$$ = [dvt.$ColorUtils$.$adjustHSL$($color$$24$$, -0.09, 0.04), dvt.$ColorUtils$.$adjustHSL$($color$$24$$, -0.04, -0.05)], new dvt.$LinearGradientFill$(270, $chart$$141_colors$$2_linearColors_radialColors$$, $JSCompiler_alias_NULL$$, [0, 1])
    }
    if("human" == $DvtChartStyleUtils$$.$getMarkerShape$($chart$$141_colors$$2_linearColors_radialColors$$, $seriesIndex$$61$$, $groupIndex$$43$$)) {
      return $chart$$141_colors$$2_linearColors_radialColors$$ = [dvt.$ColorUtils$.$getPastel$($color$$24$$, 0.2), dvt.$ColorUtils$.$getPastel$($color$$24$$, 0.1), $color$$24$$, dvt.$ColorUtils$.$getDarker$($color$$24$$, 0.8)], new dvt.$LinearGradientFill$(315, $chart$$141_colors$$2_linearColors_radialColors$$, $JSCompiler_alias_NULL$$, [0, 0.3, 0.7, 1])
    }
    $chart$$141_colors$$2_linearColors_radialColors$$ = [dvt.$ColorUtils$.$getPastel$($color$$24$$, 0.15), $color$$24$$, dvt.$ColorUtils$.$getDarker$($color$$24$$, 0.9), dvt.$ColorUtils$.$getDarker$($color$$24$$, 0.8)];
    return new dvt.$RadialGradientFill$($chart$$141_colors$$2_linearColors_radialColors$$, $JSCompiler_alias_NULL$$, [0, 0.5, 0.75, 1])
  }
  return new dvt.$SolidFill$($color$$24$$)
};
$DvtChartSeriesEffectUtils$$.$getFunnelSliceFill$ = function $$DvtChartSeriesEffectUtils$$$$getFunnelSliceFill$$($chart$$142_colors$$3$$, $pattern$$5_seriesIndex$$62$$, $color$$25_stops$$3$$, $dimensions$$1_fill$$26$$, $bBackground$$) {
  $pattern$$5_seriesIndex$$62$$ = $DvtChartStyleUtils$$.$getPattern$($chart$$142_colors$$3$$, $pattern$$5_seriesIndex$$62$$, 0);
  var $seriesEffect$$3$$ = $DvtChartStyleUtils$$.$getSeriesEffect$($chart$$142_colors$$3$$);
  return $pattern$$5_seriesIndex$$62$$ && !$bBackground$$ ? ($dimensions$$1_fill$$26$$ = new dvt.$PatternFill$($pattern$$5_seriesIndex$$62$$, $color$$25_stops$$3$$), "vertical" == $chart$$142_colors$$3$$.$getOptions$().orientation && (dvt.$Agent$.$isRightToLeft$($chart$$142_colors$$3$$.$getCtx$()) ? $dimensions$$1_fill$$26$$.$setMatrix$(new dvt.$Matrix$(0, -1, 1, 0)) : $dimensions$$1_fill$$26$$.$setMatrix$(new dvt.$Matrix$(0, 1, -1, 0))), $dimensions$$1_fill$$26$$) : "gradient" == $seriesEffect$$3$$ ? 
  ("on" == $chart$$142_colors$$3$$.$getOptions$().styleDefaults.threeDEffect ? ($chart$$142_colors$$3$$ = [dvt.$ColorUtils$.$adjustHSL$($color$$25_stops$$3$$, 0, -0.1), dvt.$ColorUtils$.$adjustHSL$($color$$25_stops$$3$$, 0, 0.12), $color$$25_stops$$3$$], $color$$25_stops$$3$$ = [0, 0.65, 1]) : ($chart$$142_colors$$3$$ = [dvt.$ColorUtils$.$adjustHSL$($color$$25_stops$$3$$, -0.09, 0.04), dvt.$ColorUtils$.$adjustHSL$($color$$25_stops$$3$$, -0.04, -0.05)], $color$$25_stops$$3$$ = [0, 1]), new dvt.$LinearGradientFill$(90, 
  $chart$$142_colors$$3$$, $JSCompiler_alias_NULL$$, $color$$25_stops$$3$$, [$dimensions$$1_fill$$26$$.x, $dimensions$$1_fill$$26$$.y, $dimensions$$1_fill$$26$$.$w$, $dimensions$$1_fill$$26$$.$h$])) : new dvt.$SolidFill$($color$$25_stops$$3$$)
};
$DvtChartSeriesEffectUtils$$.$_useAltaGradients$ = function $$DvtChartSeriesEffectUtils$$$$_useAltaGradients$$($chart$$143$$) {
  return $chart$$143$$.$getSkin$() != dvt.$CSSStyle$.$SKIN_SKYROS$
};
var $DvtChartStyleUtils$$ = {};
dvt.$Obj$.$createSubclass$($DvtChartStyleUtils$$, dvt.$Obj$);
$DvtChartStyleUtils$$.$_SERIES_TYPE_RAMP$ = ["bar", "line", "area"];
$DvtChartStyleUtils$$.$getSeriesType$ = function $$DvtChartStyleUtils$$$$getSeriesType$$($chart$$144$$, $seriesIndex$$63$$) {
  if(!$DvtChartTypeUtils$$.$isBLAC$($chart$$144$$)) {
    return"auto"
  }
  var $series$$10_seriesItem$$12_seriesType$$6_typeIndex$$ = $DvtChartDataUtils$$.$getSeriesItem$($chart$$144$$, $seriesIndex$$63$$), $series$$10_seriesItem$$12_seriesType$$6_typeIndex$$ = $series$$10_seriesItem$$12_seriesType$$6_typeIndex$$ ? $series$$10_seriesItem$$12_seriesType$$6_typeIndex$$.type : $JSCompiler_alias_NULL$$;
  !$DvtChartTypeUtils$$.$isStock$($chart$$144$$) && "candlestick" == $series$$10_seriesItem$$12_seriesType$$6_typeIndex$$ && ($series$$10_seriesItem$$12_seriesType$$6_typeIndex$$ = "auto");
  if(!$series$$10_seriesItem$$12_seriesType$$6_typeIndex$$ || "auto" == $series$$10_seriesItem$$12_seriesType$$6_typeIndex$$) {
    if($DvtChartTypeUtils$$.$isBar$($chart$$144$$)) {
      return"bar"
    }
    if($DvtChartTypeUtils$$.$isLine$($chart$$144$$)) {
      return"line"
    }
    if($DvtChartTypeUtils$$.$isArea$($chart$$144$$)) {
      return"area"
    }
    if($DvtChartTypeUtils$$.$isLineWithArea$($chart$$144$$)) {
      return"lineWithArea"
    }
    if($DvtChartTypeUtils$$.$isStock$($chart$$144$$)) {
      return"candlestick"
    }
    if($DvtChartTypeUtils$$.$isCombo$($chart$$144$$)) {
      return $series$$10_seriesItem$$12_seriesType$$6_typeIndex$$ = $DvtChartDataUtils$$.$getSeries$($chart$$144$$, $seriesIndex$$63$$), $series$$10_seriesItem$$12_seriesType$$6_typeIndex$$ = $DvtChartDataUtils$$.$getSeriesStyleIndex$($chart$$144$$, $series$$10_seriesItem$$12_seriesType$$6_typeIndex$$) % $DvtChartStyleUtils$$.$_SERIES_TYPE_RAMP$.length, $DvtChartStyleUtils$$.$_SERIES_TYPE_RAMP$[$series$$10_seriesItem$$12_seriesType$$6_typeIndex$$]
    }
  }else {
    return $series$$10_seriesItem$$12_seriesType$$6_typeIndex$$
  }
};
$DvtChartStyleUtils$$.$isRangeSeries$ = function $$DvtChartStyleUtils$$$$isRangeSeries$$($chart$$145$$, $seriesIndex$$64$$) {
  var $isRange$$1_map$$inline_3069$$;
  $isRange$$1_map$$inline_3069$$ = $chart$$145$$.$Cache$.isRange;
  $isRange$$1_map$$inline_3069$$ || ($isRange$$1_map$$inline_3069$$ = {}, $chart$$145$$.$Cache$.isRange = $isRange$$1_map$$inline_3069$$);
  $isRange$$1_map$$inline_3069$$ = $isRange$$1_map$$inline_3069$$[$seriesIndex$$64$$];
  if($isRange$$1_map$$inline_3069$$ != $JSCompiler_alias_NULL$$) {
    return $isRange$$1_map$$inline_3069$$
  }
  $isRange$$1_map$$inline_3069$$ = $JSCompiler_alias_FALSE$$;
  var $g$$7_map$$inline_3075_seriesType$$7$$ = $DvtChartStyleUtils$$.$getSeriesType$($chart$$145$$, $seriesIndex$$64$$);
  if("bar" == $g$$7_map$$inline_3075_seriesType$$7$$ || "area" == $g$$7_map$$inline_3075_seriesType$$7$$) {
    for($g$$7_map$$inline_3075_seriesType$$7$$ = 0;$g$$7_map$$inline_3075_seriesType$$7$$ < $DvtChartDataUtils$$.$getGroupCount$($chart$$145$$);$g$$7_map$$inline_3075_seriesType$$7$$++) {
      if($DvtChartDataUtils$$.$getLowValue$($chart$$145$$, $seriesIndex$$64$$, $g$$7_map$$inline_3075_seriesType$$7$$) != $JSCompiler_alias_NULL$$ || $DvtChartDataUtils$$.$getHighValue$($chart$$145$$, $seriesIndex$$64$$, $g$$7_map$$inline_3075_seriesType$$7$$) != $JSCompiler_alias_NULL$$) {
        $isRange$$1_map$$inline_3069$$ = $JSCompiler_alias_TRUE$$;
        break
      }
    }
  }
  $g$$7_map$$inline_3075_seriesType$$7$$ = $chart$$145$$.$Cache$.isRange;
  $g$$7_map$$inline_3075_seriesType$$7$$ || ($g$$7_map$$inline_3075_seriesType$$7$$ = {}, $chart$$145$$.$Cache$.isRange = $g$$7_map$$inline_3075_seriesType$$7$$);
  return $g$$7_map$$inline_3075_seriesType$$7$$[$seriesIndex$$64$$] = $isRange$$1_map$$inline_3069$$
};
$DvtChartStyleUtils$$.$getSeriesEffect$ = function $$DvtChartStyleUtils$$$$getSeriesEffect$$($chart$$146$$) {
  return $chart$$146$$.$getOptions$().styleDefaults.seriesEffect
};
$DvtChartStyleUtils$$.$getColor$ = function $$DvtChartStyleUtils$$$$getColor$$($chart$$147_colorIndex$$, $series$$11_seriesIndex$$65$$, $groupIndex$$44_options$$59_seriesItem$$13$$) {
  var $dataItem$$19_defaultColors$$ = $DvtChartDataUtils$$.$getDataItem$($chart$$147_colorIndex$$, $series$$11_seriesIndex$$65$$, $groupIndex$$44_options$$59_seriesItem$$13$$);
  if($dataItem$$19_defaultColors$$ && $dataItem$$19_defaultColors$$.color) {
    return $dataItem$$19_defaultColors$$.color
  }
  if("candlestick" == $DvtChartStyleUtils$$.$getSeriesType$($chart$$147_colorIndex$$, $series$$11_seriesIndex$$65$$)) {
    return $DvtChartStyleUtils$$.$getStockItemColor$($chart$$147_colorIndex$$, $series$$11_seriesIndex$$65$$, $groupIndex$$44_options$$59_seriesItem$$13$$)
  }
  if(($groupIndex$$44_options$$59_seriesItem$$13$$ = $DvtChartDataUtils$$.$getSeriesItem$($chart$$147_colorIndex$$, $series$$11_seriesIndex$$65$$)) && $groupIndex$$44_options$$59_seriesItem$$13$$.color) {
    return $groupIndex$$44_options$$59_seriesItem$$13$$.color
  }
  $groupIndex$$44_options$$59_seriesItem$$13$$ = $chart$$147_colorIndex$$.$getOptions$();
  $dataItem$$19_defaultColors$$ = $groupIndex$$44_options$$59_seriesItem$$13$$.styleDefaults.colors;
  $series$$11_seriesIndex$$65$$ = $DvtChartDataUtils$$.$getSeries$($chart$$147_colorIndex$$, $series$$11_seriesIndex$$65$$);
  $chart$$147_colorIndex$$ = $DvtChartDataUtils$$.$getSeriesStyleIndex$($chart$$147_colorIndex$$, $series$$11_seriesIndex$$65$$) % $dataItem$$19_defaultColors$$.length;
  return $groupIndex$$44_options$$59_seriesItem$$13$$.styleDefaults.colors[$chart$$147_colorIndex$$]
};
$DvtChartStyleUtils$$.$getStockItemColor$ = function $$DvtChartStyleUtils$$$$getStockItemColor$$($chart$$148$$, $seriesIndex$$66$$, $groupIndex$$45$$) {
  var $options$$60$$ = $chart$$148$$.$getOptions$();
  return $DvtChartDataUtils$$.$isStockValueRising$($chart$$148$$, $seriesIndex$$66$$, $groupIndex$$45$$) ? $options$$60$$.styleDefaults.stockRisingColor : $options$$60$$.styleDefaults.stockFallingColor
};
$DvtChartStyleUtils$$.$getStockVolumeColor$ = function $$DvtChartStyleUtils$$$$getStockVolumeColor$$($chart$$149$$, $groupIndex$$46$$) {
  var $dataItem$$20_options$$61$$ = $DvtChartDataUtils$$.$getDataItem$($chart$$149$$, 0, $groupIndex$$46$$);
  if($dataItem$$20_options$$61$$ && $dataItem$$20_options$$61$$.color) {
    return $dataItem$$20_options$$61$$.color
  }
  $dataItem$$20_options$$61$$ = $chart$$149$$.$getOptions$();
  return $dataItem$$20_options$$61$$.styleDefaults.stockVolumeColor ? $dataItem$$20_options$$61$$.styleDefaults.stockVolumeColor : $DvtChartStyleUtils$$.$getStockItemColor$($chart$$149$$, 0, $groupIndex$$46$$)
};
$DvtChartStyleUtils$$.$getSplitterPosition$ = function $$DvtChartStyleUtils$$$$getSplitterPosition$$($chart$$150$$) {
  var $splitterPosition$$ = $chart$$150$$.$getOptions$().splitterPosition;
  return $splitterPosition$$ != $JSCompiler_alias_NULL$$ ? $splitterPosition$$ : $DvtChartTypeUtils$$.$isStock$($chart$$150$$) ? 0.8 : 0.5
};
$DvtChartStyleUtils$$.$getPattern$ = function $$DvtChartStyleUtils$$$$getPattern$$($bRtl$$1_chart$$151_patternIndex$$, $bRisingValue_series$$12_seriesIndex$$68$$, $groupIndex$$47_options$$63$$) {
  var $dataItem$$21_defaultPatterns_seriesItem$$14_seriesType$$8$$ = $DvtChartDataUtils$$.$getDataItem$($bRtl$$1_chart$$151_patternIndex$$, $bRisingValue_series$$12_seriesIndex$$68$$, $groupIndex$$47_options$$63$$);
  if($dataItem$$21_defaultPatterns_seriesItem$$14_seriesType$$8$$ && $dataItem$$21_defaultPatterns_seriesItem$$14_seriesType$$8$$.pattern && "auto" != $dataItem$$21_defaultPatterns_seriesItem$$14_seriesType$$8$$.pattern) {
    return $dataItem$$21_defaultPatterns_seriesItem$$14_seriesType$$8$$.pattern
  }
  $dataItem$$21_defaultPatterns_seriesItem$$14_seriesType$$8$$ = $DvtChartStyleUtils$$.$getSeriesType$($bRtl$$1_chart$$151_patternIndex$$, $bRisingValue_series$$12_seriesIndex$$68$$);
  if(("line" == $dataItem$$21_defaultPatterns_seriesItem$$14_seriesType$$8$$ || "area" == $dataItem$$21_defaultPatterns_seriesItem$$14_seriesType$$8$$) && $groupIndex$$47_options$$63$$ != $JSCompiler_alias_NULL$$) {
    return $JSCompiler_alias_NULL$$
  }
  if(($dataItem$$21_defaultPatterns_seriesItem$$14_seriesType$$8$$ = $DvtChartDataUtils$$.$getSeriesItem$($bRtl$$1_chart$$151_patternIndex$$, $bRisingValue_series$$12_seriesIndex$$68$$)) && $dataItem$$21_defaultPatterns_seriesItem$$14_seriesType$$8$$.pattern && "auto" != $dataItem$$21_defaultPatterns_seriesItem$$14_seriesType$$8$$.pattern) {
    return $dataItem$$21_defaultPatterns_seriesItem$$14_seriesType$$8$$.pattern
  }
  if("pattern" == $DvtChartStyleUtils$$.$getSeriesEffect$($bRtl$$1_chart$$151_patternIndex$$)) {
    if($DvtChartTypeUtils$$.$isStock$ && "candlestick" == $DvtChartStyleUtils$$.$getSeriesType$($bRtl$$1_chart$$151_patternIndex$$, $bRisingValue_series$$12_seriesIndex$$68$$)) {
      return $bRisingValue_series$$12_seriesIndex$$68$$ = $DvtChartDataUtils$$.$isStockValueRising$($bRtl$$1_chart$$151_patternIndex$$, $bRisingValue_series$$12_seriesIndex$$68$$, $groupIndex$$47_options$$63$$), $bRtl$$1_chart$$151_patternIndex$$ = dvt.$Agent$.$isRightToLeft$($bRtl$$1_chart$$151_patternIndex$$.$getCtx$()), $bRisingValue_series$$12_seriesIndex$$68$$ ? $bRtl$$1_chart$$151_patternIndex$$ ? "smallDiagonalLeft" : "smallDiagonalRight" : $bRtl$$1_chart$$151_patternIndex$$ ? "smallDiagonalRight" : 
      "smallDiagonalLeft"
    }
    $groupIndex$$47_options$$63$$ = $bRtl$$1_chart$$151_patternIndex$$.$getOptions$();
    $dataItem$$21_defaultPatterns_seriesItem$$14_seriesType$$8$$ = $groupIndex$$47_options$$63$$.styleDefaults.patterns;
    $bRisingValue_series$$12_seriesIndex$$68$$ = $DvtChartDataUtils$$.$getSeries$($bRtl$$1_chart$$151_patternIndex$$, $bRisingValue_series$$12_seriesIndex$$68$$);
    $bRtl$$1_chart$$151_patternIndex$$ = $DvtChartDataUtils$$.$getSeriesStyleIndex$($bRtl$$1_chart$$151_patternIndex$$, $bRisingValue_series$$12_seriesIndex$$68$$) % $dataItem$$21_defaultPatterns_seriesItem$$14_seriesType$$8$$.length;
    return $groupIndex$$47_options$$63$$.styleDefaults.patterns[$bRtl$$1_chart$$151_patternIndex$$]
  }
  return $JSCompiler_alias_NULL$$
};
$DvtChartStyleUtils$$.$getMarkerBorderColor$ = function $$DvtChartStyleUtils$$$$getMarkerBorderColor$$($chart$$152_markerColor$$1$$, $seriesIndex$$69$$, $groupIndex$$48$$) {
  var $borderColor$$12$$ = $DvtChartStyleUtils$$.$getBorderColor$($chart$$152_markerColor$$1$$, $seriesIndex$$69$$, $groupIndex$$48$$);
  return $borderColor$$12$$ ? $borderColor$$12$$ : 0 < $DvtChartStyleUtils$$.$getDataItemGaps$($chart$$152_markerColor$$1$$) && "lineWithArea" != $DvtChartStyleUtils$$.$getSeriesType$($chart$$152_markerColor$$1$$, $seriesIndex$$69$$) ? $DvtChartStyleUtils$$.$getBackgroundColor$($chart$$152_markerColor$$1$$, $JSCompiler_alias_TRUE$$) : $DvtChartTypeUtils$$.$isBubble$($chart$$152_markerColor$$1$$) && ($chart$$152_markerColor$$1$$.$getSkin$() != dvt.$CSSStyle$.$SKIN_SKYROS$ && "gradient" != $DvtChartStyleUtils$$.$getSeriesEffect$($chart$$152_markerColor$$1$$)) && 
  ($chart$$152_markerColor$$1$$ = $DvtChartStyleUtils$$.$getMarkerColor$($chart$$152_markerColor$$1$$, $seriesIndex$$69$$, $groupIndex$$48$$)) ? dvt.$ColorUtils$.$adjustHSL$($chart$$152_markerColor$$1$$, 0.15, -0.25) : $JSCompiler_alias_NULL$$
};
$DvtChartStyleUtils$$.$getBorderColor$ = function $$DvtChartStyleUtils$$$$getBorderColor$$($chart$$153_styleDefaults$$1$$, $seriesIndex$$70_seriesItem$$15$$, $dataItem$$22_groupIndex$$49$$) {
  if(($dataItem$$22_groupIndex$$49$$ = $DvtChartDataUtils$$.$getDataItem$($chart$$153_styleDefaults$$1$$, $seriesIndex$$70_seriesItem$$15$$, $dataItem$$22_groupIndex$$49$$)) && $dataItem$$22_groupIndex$$49$$.borderColor) {
    return $dataItem$$22_groupIndex$$49$$.borderColor
  }
  if(($seriesIndex$$70_seriesItem$$15$$ = $DvtChartDataUtils$$.$getSeriesItem$($chart$$153_styleDefaults$$1$$, $seriesIndex$$70_seriesItem$$15$$)) && $seriesIndex$$70_seriesItem$$15$$.borderColor) {
    return $seriesIndex$$70_seriesItem$$15$$.borderColor
  }
  $chart$$153_styleDefaults$$1$$ = $chart$$153_styleDefaults$$1$$.$getOptions$().styleDefaults;
  return"auto" != $chart$$153_styleDefaults$$1$$.borderColor ? $chart$$153_styleDefaults$$1$$.borderColor : $JSCompiler_alias_NULL$$
};
$DvtChartStyleUtils$$.$getBorderWidth$ = function $$DvtChartStyleUtils$$$$getBorderWidth$$($chart$$154$$, $seriesIndex$$71_seriesItem$$16_styleDefaults$$2$$, $dataItem$$23_groupIndex$$50$$) {
  if(($dataItem$$23_groupIndex$$50$$ = $DvtChartDataUtils$$.$getDataItem$($chart$$154$$, $seriesIndex$$71_seriesItem$$16_styleDefaults$$2$$, $dataItem$$23_groupIndex$$50$$)) && $dataItem$$23_groupIndex$$50$$.borderWidth) {
    return $dataItem$$23_groupIndex$$50$$.borderWidth
  }
  if(($seriesIndex$$71_seriesItem$$16_styleDefaults$$2$$ = $DvtChartDataUtils$$.$getSeriesItem$($chart$$154$$, $seriesIndex$$71_seriesItem$$16_styleDefaults$$2$$)) && $seriesIndex$$71_seriesItem$$16_styleDefaults$$2$$.borderWidth) {
    return $seriesIndex$$71_seriesItem$$16_styleDefaults$$2$$.borderWidth
  }
  $seriesIndex$$71_seriesItem$$16_styleDefaults$$2$$ = $chart$$154$$.$getOptions$().styleDefaults;
  return"auto" != $seriesIndex$$71_seriesItem$$16_styleDefaults$$2$$.borderWidth ? $seriesIndex$$71_seriesItem$$16_styleDefaults$$2$$.borderWidth : $DvtChartTypeUtils$$.$isScatterBubble$($chart$$154$$) || $DvtChartTypeUtils$$.$isLineArea$($chart$$154$$) ? 1.25 : 1
};
$DvtChartStyleUtils$$.$getMarkerColor$ = function $$DvtChartStyleUtils$$$$getMarkerColor$$($chart$$155$$, $seriesIndex$$72$$, $groupIndex$$51$$) {
  if(!$DvtChartStyleUtils$$.$isMarkerDisplayed$($chart$$155$$, $seriesIndex$$72$$, $groupIndex$$51$$)) {
    return $DvtChartStyleUtils$$.$getColor$($chart$$155$$, $seriesIndex$$72$$, $groupIndex$$51$$)
  }
  var $dataItem$$24_defaultMarkerColor_seriesItem$$17$$ = $DvtChartDataUtils$$.$getDataItem$($chart$$155$$, $seriesIndex$$72$$, $groupIndex$$51$$);
  return $dataItem$$24_defaultMarkerColor_seriesItem$$17$$ && $dataItem$$24_defaultMarkerColor_seriesItem$$17$$.color ? $dataItem$$24_defaultMarkerColor_seriesItem$$17$$.color : ($dataItem$$24_defaultMarkerColor_seriesItem$$17$$ = $DvtChartDataUtils$$.$getSeriesItem$($chart$$155$$, $seriesIndex$$72$$)) && $dataItem$$24_defaultMarkerColor_seriesItem$$17$$.markerColor ? $dataItem$$24_defaultMarkerColor_seriesItem$$17$$.markerColor : ($dataItem$$24_defaultMarkerColor_seriesItem$$17$$ = $chart$$155$$.$getOptions$().styleDefaults.markerColor) ? 
  $dataItem$$24_defaultMarkerColor_seriesItem$$17$$ : $DvtChartStyleUtils$$.$getColor$($chart$$155$$, $seriesIndex$$72$$, $groupIndex$$51$$)
};
$DvtChartStyleUtils$$.$getMarkerShape$ = function $$DvtChartStyleUtils$$$$getMarkerShape$$($chart$$156_styleIndex$$3$$, $series$$13_seriesIndex$$73$$, $dataItem$$25_groupIndex$$52$$) {
  var $options$$66_shapeRamp$$ = $chart$$156_styleIndex$$3$$.$getOptions$(), $shape$$37$$ = $options$$66_shapeRamp$$.styleDefaults.markerShape, $seriesItem$$18$$ = $DvtChartDataUtils$$.$getSeriesItem$($chart$$156_styleIndex$$3$$, $series$$13_seriesIndex$$73$$);
  $seriesItem$$18$$ && $seriesItem$$18$$.markerShape && ($shape$$37$$ = $seriesItem$$18$$.markerShape);
  ($dataItem$$25_groupIndex$$52$$ = $DvtChartDataUtils$$.$getDataItem$($chart$$156_styleIndex$$3$$, $series$$13_seriesIndex$$73$$, $dataItem$$25_groupIndex$$52$$)) && $dataItem$$25_groupIndex$$52$$.markerShape && ($shape$$37$$ = $dataItem$$25_groupIndex$$52$$.markerShape);
  "auto" == $shape$$37$$ && ("bubble" == $chart$$156_styleIndex$$3$$.$getType$() || $DvtChartStyleUtils$$.$isRangeSeries$($chart$$156_styleIndex$$3$$, $series$$13_seriesIndex$$73$$) ? $shape$$37$$ = "circle" : ($series$$13_seriesIndex$$73$$ = $DvtChartDataUtils$$.$getSeries$($chart$$156_styleIndex$$3$$, $series$$13_seriesIndex$$73$$), $chart$$156_styleIndex$$3$$ = $DvtChartDataUtils$$.$getSeriesStyleIndex$($chart$$156_styleIndex$$3$$, $series$$13_seriesIndex$$73$$), $options$$66_shapeRamp$$ = $options$$66_shapeRamp$$.styleDefaults.shapes, 
  $shape$$37$$ = $options$$66_shapeRamp$$[$chart$$156_styleIndex$$3$$ % $options$$66_shapeRamp$$.length]));
  return $shape$$37$$
};
$DvtChartStyleUtils$$.$getMarkerSize$ = function $$DvtChartStyleUtils$$$$getMarkerSize$$($chart$$157$$, $seriesIndex$$74_seriesItem$$19$$, $dataItem$$26_groupIndex$$53_markerSize$$3$$) {
  $dataItem$$26_groupIndex$$53_markerSize$$3$$ = $DvtChartDataUtils$$.$getDataItem$($chart$$157$$, $seriesIndex$$74_seriesItem$$19$$, $dataItem$$26_groupIndex$$53_markerSize$$3$$);
  $seriesIndex$$74_seriesItem$$19$$ = $DvtChartDataUtils$$.$getSeriesItem$($chart$$157$$, $seriesIndex$$74_seriesItem$$19$$);
  var $options$$67$$ = $chart$$157$$.$getOptions$();
  $dataItem$$26_groupIndex$$53_markerSize$$3$$ = $dataItem$$26_groupIndex$$53_markerSize$$3$$ && Number($dataItem$$26_groupIndex$$53_markerSize$$3$$.markerSize) ? Number($dataItem$$26_groupIndex$$53_markerSize$$3$$.markerSize) : $seriesIndex$$74_seriesItem$$19$$ && Number($seriesIndex$$74_seriesItem$$19$$.markerSize) ? Number($seriesIndex$$74_seriesItem$$19$$.markerSize) : Number($options$$67$$.styleDefaults.markerSize);
  $DvtChartTypeUtils$$.$isOverview$($chart$$157$$) && ($dataItem$$26_groupIndex$$53_markerSize$$3$$ = Math.ceil(0.6 * $dataItem$$26_groupIndex$$53_markerSize$$3$$));
  return $dataItem$$26_groupIndex$$53_markerSize$$3$$
};
$DvtChartStyleUtils$$.$isMarkerDisplayed$ = function $$DvtChartStyleUtils$$$$isMarkerDisplayed$$($chart$$158$$, $seriesIndex$$75$$, $dataItem$$27_displayed_groupIndex$$54$$) {
  $dataItem$$27_displayed_groupIndex$$54$$ = $DvtChartDataUtils$$.$getDataItem$($chart$$158$$, $seriesIndex$$75$$, $dataItem$$27_displayed_groupIndex$$54$$);
  var $seriesItem$$20$$ = $DvtChartDataUtils$$.$getSeriesItem$($chart$$158$$, $seriesIndex$$75$$);
  $dataItem$$27_displayed_groupIndex$$54$$ = $dataItem$$27_displayed_groupIndex$$54$$ && $dataItem$$27_displayed_groupIndex$$54$$.markerDisplayed != $JSCompiler_alias_NULL$$ ? $dataItem$$27_displayed_groupIndex$$54$$.markerDisplayed : $seriesItem$$20$$ && $seriesItem$$20$$.markerDisplayed != $JSCompiler_alias_NULL$$ ? $seriesItem$$20$$.markerDisplayed : $chart$$158$$.$getOptions$().styleDefaults.markerDisplayed;
  return"on" == $dataItem$$27_displayed_groupIndex$$54$$ ? $JSCompiler_alias_TRUE$$ : "off" == $dataItem$$27_displayed_groupIndex$$54$$ ? $JSCompiler_alias_FALSE$$ : $DvtChartTypeUtils$$.$isScatterBubble$($chart$$158$$) || "none" == $DvtChartStyleUtils$$.$getLineType$($chart$$158$$, $seriesIndex$$75$$)
};
$DvtChartStyleUtils$$.$getLineWidth$ = function $$DvtChartStyleUtils$$$$getLineWidth$$($chart$$159$$, $seriesIndex$$76$$) {
  var $lineWidth$$1_seriesItem$$21$$ = $DvtChartDataUtils$$.$getSeriesItem$($chart$$159$$, $seriesIndex$$76$$), $options$$68$$ = $chart$$159$$.$getOptions$(), $lineWidth$$1_seriesItem$$21$$ = $lineWidth$$1_seriesItem$$21$$ && $lineWidth$$1_seriesItem$$21$$.lineWidth ? $lineWidth$$1_seriesItem$$21$$.lineWidth : $options$$68$$.styleDefaults.lineWidth ? $options$$68$$.styleDefaults.lineWidth : "lineWithArea" == $DvtChartStyleUtils$$.$getSeriesType$($chart$$159$$, $seriesIndex$$76$$) ? 2 : 3;
  $DvtChartTypeUtils$$.$isOverview$($chart$$159$$) && ($lineWidth$$1_seriesItem$$21$$ = Math.ceil(0.6 * $lineWidth$$1_seriesItem$$21$$));
  return $lineWidth$$1_seriesItem$$21$$
};
$DvtChartStyleUtils$$.$getLineStyle$ = function $$DvtChartStyleUtils$$$$getLineStyle$$($chart$$160$$, $seriesIndex$$77$$) {
  var $seriesItem$$22$$ = $DvtChartDataUtils$$.$getSeriesItem$($chart$$160$$, $seriesIndex$$77$$);
  return $seriesItem$$22$$ && $seriesItem$$22$$.lineStyle ? $seriesItem$$22$$.lineStyle : $chart$$160$$.$getOptions$().styleDefaults.lineStyle
};
$DvtChartStyleUtils$$.$getLineType$ = function $$DvtChartStyleUtils$$$$getLineType$$($chart$$161$$, $seriesIndex$$78$$) {
  var $lineType$$1_seriesItem$$23$$;
  $lineType$$1_seriesItem$$23$$ = ($lineType$$1_seriesItem$$23$$ = $DvtChartDataUtils$$.$getSeriesItem$($chart$$161$$, $seriesIndex$$78$$)) && $lineType$$1_seriesItem$$23$$.lineType ? $lineType$$1_seriesItem$$23$$.lineType : $chart$$161$$.$getOptions$().styleDefaults.lineType;
  "auto" == $lineType$$1_seriesItem$$23$$ && ($lineType$$1_seriesItem$$23$$ = $DvtChartTypeUtils$$.$isScatterBubble$($chart$$161$$) ? "none" : "straight");
  if($DvtChartTypeUtils$$.$isPolar$($chart$$161$$) || $DvtChartTypeUtils$$.$isScatterBubble$($chart$$161$$)) {
    "centeredSegmented" == $lineType$$1_seriesItem$$23$$ && ($lineType$$1_seriesItem$$23$$ = "segmented"), "centeredStepped" == $lineType$$1_seriesItem$$23$$ && ($lineType$$1_seriesItem$$23$$ = "stepped")
  }
  return $lineType$$1_seriesItem$$23$$
};
$DvtChartStyleUtils$$.$getBarSpacing$ = function $$DvtChartStyleUtils$$$$getBarSpacing$$($chart$$162$$) {
  return $chart$$162$$.$getOptions$().__sparkBarSpacing
};
$DvtChartStyleUtils$$.$getBarGapRatio$ = function $$DvtChartStyleUtils$$$$getBarGapRatio$$($chart$$163$$) {
  var $barGapRatio$$1_numStacks_numYStacks$$ = $chart$$163$$.$getOptions$().styleDefaults.barGapRatio;
  "string" == typeof $barGapRatio$$1_numStacks_numYStacks$$ && "%" == $barGapRatio$$1_numStacks_numYStacks$$.slice(-1) && ($barGapRatio$$1_numStacks_numYStacks$$ = Number($barGapRatio$$1_numStacks_numYStacks$$.slice(0, -1)) / 100);
  if($barGapRatio$$1_numStacks_numYStacks$$ != $JSCompiler_alias_NULL$$ && !isNaN($barGapRatio$$1_numStacks_numYStacks$$)) {
    return $barGapRatio$$1_numStacks_numYStacks$$
  }
  var $categories$$6_numY2Stacks$$ = $DvtChartDataUtils$$.$getStackCategories$($chart$$163$$, "bar"), $barGapRatio$$1_numStacks_numYStacks$$ = $categories$$6_numY2Stacks$$.y.length, $categories$$6_numY2Stacks$$ = $categories$$6_numY2Stacks$$.y2.length, $barGapRatio$$1_numStacks_numYStacks$$ = $DvtChartTypeUtils$$.$isSplitDualY$($chart$$163$$) ? Math.max($barGapRatio$$1_numStacks_numYStacks$$, $categories$$6_numY2Stacks$$) : $barGapRatio$$1_numStacks_numYStacks$$ + $categories$$6_numY2Stacks$$;
  return $barGapRatio$$1_numStacks_numYStacks$$ = $DvtChartTypeUtils$$.$isPolar$($chart$$163$$) ? 1 == $barGapRatio$$1_numStacks_numYStacks$$ ? 0 : 0.25 : 1 == $barGapRatio$$1_numStacks_numYStacks$$ ? 0.37 + 0.26 / $DvtChartDataUtils$$.$getViewportGroupCount$($chart$$163$$) : 0.25
};
$DvtChartStyleUtils$$.$getMaxBarWidth$ = function $$DvtChartStyleUtils$$$$getMaxBarWidth$$($chart$$164$$) {
  var $maxBarWidth$$ = $chart$$164$$.$getOptions$().styleDefaults.maxBarWidth;
  return $maxBarWidth$$ != $JSCompiler_alias_NULL$$ && !$DvtChartTypeUtils$$.$isPolar$($chart$$164$$) ? $maxBarWidth$$ : Infinity
};
$DvtChartStyleUtils$$.$getBarWidth$ = function $$DvtChartStyleUtils$$$$getBarWidth$$($chart$$165$$, $ratio$$7_seriesIndex$$79$$, $groupIndex$$55$$) {
  $ratio$$7_seriesIndex$$79$$ = $DvtChartDataUtils$$.$getZValue$($chart$$165$$, $ratio$$7_seriesIndex$$79$$, $groupIndex$$55$$, 1) / $chart$$165$$.$getOptions$()._averageGroupZ;
  return Math.min($ratio$$7_seriesIndex$$79$$ * $DvtChartStyleUtils$$.$getGroupWidth$($chart$$165$$), $DvtChartStyleUtils$$.$getMaxBarWidth$($chart$$165$$))
};
$DvtChartStyleUtils$$.$getBarStackWidth$ = function $$DvtChartStyleUtils$$$$getBarStackWidth$$($chart$$166$$, $category$$9_ratio$$8$$, $groupIndex$$56$$, $isY2$$2$$) {
  $category$$9_ratio$$8$$ = $DvtChartDataUtils$$.$getBarCategoryZ$($chart$$166$$, $category$$9_ratio$$8$$, $groupIndex$$56$$, $isY2$$2$$) / $chart$$166$$.$getOptions$()._averageGroupZ;
  return Math.min($category$$9_ratio$$8$$ * $DvtChartStyleUtils$$.$getGroupWidth$($chart$$166$$), $DvtChartStyleUtils$$.$getMaxBarWidth$($chart$$166$$))
};
$DvtChartStyleUtils$$.$getBarCategoryOffsetMap$ = function $$DvtChartStyleUtils$$$$getBarCategoryOffsetMap$$($chart$$167$$, $groupIndex$$57$$, $bStacked$$1$$) {
  var $isMixedFreq_yOffsetMaps$$ = $JSCompiler_StaticMethods_getFromCachedMap2D$$($chart$$167$$, "barCategoryOffsetMap", $groupIndex$$57$$, $bStacked$$1$$);
  if($isMixedFreq_yOffsetMaps$$) {
    return $isMixedFreq_yOffsetMaps$$
  }
  var $categories$$7_isY2Series$$1$$ = $DvtChartDataUtils$$.$getStackCategories$($chart$$167$$, "bar"), $isMixedFreq_yOffsetMaps$$ = $DvtChartAxisUtils$$.$isMixedFrequency$($chart$$167$$), $isSplitDualY$$1$$ = $DvtChartTypeUtils$$.$isSplitDualY$($chart$$167$$), $yOffsetMap$$ = {}, $y2OffsetMap$$ = {}, $yTotalWidth$$ = 0, $y2TotalWidth$$ = 0, $seriesType$$9_stackWidth$$1$$, $i$$354$$;
  if($bStacked$$1$$) {
    for($i$$354$$ = 0;$i$$354$$ < $categories$$7_isY2Series$$1$$.y.length;$i$$354$$++) {
      $seriesType$$9_stackWidth$$1$$ = $DvtChartStyleUtils$$.$getBarStackWidth$($chart$$167$$, $categories$$7_isY2Series$$1$$.y[$i$$354$$], $groupIndex$$57$$, $JSCompiler_alias_FALSE$$), $isMixedFreq_yOffsetMaps$$ ? $yOffsetMap$$[$categories$$7_isY2Series$$1$$.y[$i$$354$$]] = -0.5 * $seriesType$$9_stackWidth$$1$$ : ($yOffsetMap$$[$categories$$7_isY2Series$$1$$.y[$i$$354$$]] = $yTotalWidth$$, $yTotalWidth$$ += $seriesType$$9_stackWidth$$1$$)
    }
    $isSplitDualY$$1$$ || ($y2TotalWidth$$ = $yTotalWidth$$);
    for($i$$354$$ = 0;$i$$354$$ < $categories$$7_isY2Series$$1$$.y2.length;$i$$354$$++) {
      $seriesType$$9_stackWidth$$1$$ = $DvtChartStyleUtils$$.$getBarStackWidth$($chart$$167$$, $categories$$7_isY2Series$$1$$.y2[$i$$354$$], $groupIndex$$57$$, $JSCompiler_alias_TRUE$$), $isMixedFreq_yOffsetMaps$$ ? $y2OffsetMap$$[$categories$$7_isY2Series$$1$$.y2[$i$$354$$]] = -0.5 * $seriesType$$9_stackWidth$$1$$ : ($y2OffsetMap$$[$categories$$7_isY2Series$$1$$.y2[$i$$354$$]] = $y2TotalWidth$$, $y2TotalWidth$$ += $seriesType$$9_stackWidth$$1$$)
    }
    $isSplitDualY$$1$$ || ($yTotalWidth$$ = $y2TotalWidth$$)
  }else {
    for($i$$354$$ = 0;$i$$354$$ < $DvtChartDataUtils$$.$getSeriesCount$($chart$$167$$);$i$$354$$++) {
      if($seriesType$$9_stackWidth$$1$$ = $DvtChartStyleUtils$$.$getSeriesType$($chart$$167$$, $i$$354$$), !("bar" != $seriesType$$9_stackWidth$$1$$ && "candlestick" != $seriesType$$9_stackWidth$$1$$) && $DvtChartStyleUtils$$.$isSeriesRendered$($chart$$167$$, $i$$354$$)) {
        var $categories$$7_isY2Series$$1$$ = $DvtChartDataUtils$$.$isAssignedToY2$($chart$$167$$, $i$$354$$), $category$$10$$ = $DvtChartDataUtils$$.$getStackCategory$($chart$$167$$, $i$$354$$);
        $seriesType$$9_stackWidth$$1$$ = $DvtChartStyleUtils$$.$getBarWidth$($chart$$167$$, $i$$354$$, $groupIndex$$57$$);
        $categories$$7_isY2Series$$1$$ ? $isMixedFreq_yOffsetMaps$$ ? $y2OffsetMap$$[$category$$10$$] = -0.5 * $seriesType$$9_stackWidth$$1$$ : ($y2OffsetMap$$[$category$$10$$] = $y2TotalWidth$$, $y2TotalWidth$$ += $seriesType$$9_stackWidth$$1$$) : $isMixedFreq_yOffsetMaps$$ ? $yOffsetMap$$[$category$$10$$] = -0.5 * $seriesType$$9_stackWidth$$1$$ : ($yOffsetMap$$[$category$$10$$] = $yTotalWidth$$, $yTotalWidth$$ += $seriesType$$9_stackWidth$$1$$)
      }
    }
  }
  for($category$$10$$ in $yOffsetMap$$) {
    $yOffsetMap$$[$category$$10$$] -= !$isSplitDualY$$1$$ && !$bStacked$$1$$ ? ($yTotalWidth$$ + $y2TotalWidth$$) / 2 : $yTotalWidth$$ / 2
  }
  for($category$$10$$ in $y2OffsetMap$$) {
    $y2OffsetMap$$[$category$$10$$] -= !$isSplitDualY$$1$$ && !$bStacked$$1$$ ? ($yTotalWidth$$ + $y2TotalWidth$$) / 2 - $yTotalWidth$$ : $y2TotalWidth$$ / 2
  }
  $isMixedFreq_yOffsetMaps$$ = {y:$yOffsetMap$$, y2:$y2OffsetMap$$};
  $JSCompiler_StaticMethods_putToCachedMap2D$$($chart$$167$$, "barCategoryOffsetMap", $groupIndex$$57$$, $bStacked$$1$$, $isMixedFreq_yOffsetMaps$$);
  return $isMixedFreq_yOffsetMaps$$
};
$DvtChartStyleUtils$$.$getDataItemGaps$ = function $$DvtChartStyleUtils$$$$getDataItemGaps$$($chart$$168_dataItemGaps$$1$$) {
  var $options$$71_percentIndex$$ = $chart$$168_dataItemGaps$$1$$.$getOptions$();
  if($DvtChartTypeUtils$$.$isFunnel$($chart$$168_dataItemGaps$$1$$) && "on" == $options$$71_percentIndex$$.styleDefaults.funnelSliceGaps) {
    return 1
  }
  if($options$$71_percentIndex$$.styleDefaults.sliceGaps != $JSCompiler_alias_NULL$$) {
    return $options$$71_percentIndex$$.styleDefaults.sliceGaps
  }
  $chart$$168_dataItemGaps$$1$$ = $options$$71_percentIndex$$.styleDefaults.dataItemGaps;
  "auto" == $chart$$168_dataItemGaps$$1$$ && ($chart$$168_dataItemGaps$$1$$ = "on" == $options$$71_percentIndex$$.styleDefaults.threeDEffect ? "0%" : "50%");
  $options$$71_percentIndex$$ = $chart$$168_dataItemGaps$$1$$ && $chart$$168_dataItemGaps$$1$$.indexOf ? $chart$$168_dataItemGaps$$1$$.indexOf("%") : -1;
  return 0 <= $options$$71_percentIndex$$ ? ($chart$$168_dataItemGaps$$1$$ = $chart$$168_dataItemGaps$$1$$.substring(0, $options$$71_percentIndex$$), $chart$$168_dataItemGaps$$1$$ / 100) : 0
};
$DvtChartStyleUtils$$.$isSelectable$ = function $$DvtChartStyleUtils$$$$isSelectable$$($chart$$169$$, $seriesIndex$$80$$, $groupIndex$$58$$) {
  var $seriesItem$$24$$ = $DvtChartDataUtils$$.$getSeriesItem$($chart$$169$$, $seriesIndex$$80$$);
  return $seriesItem$$24$$ && "off" == $seriesItem$$24$$._selectable ? $JSCompiler_alias_FALSE$$ : $chart$$169$$.$isSelectionSupported$() && 0 <= $seriesIndex$$80$$ && 0 <= $groupIndex$$58$$
};
$DvtChartStyleUtils$$.$isSeriesRendered$ = function $$DvtChartStyleUtils$$$$isSeriesRendered$$($chart$$170$$, $seriesIndex$$81$$) {
  var $hiddenCategories$$3$$ = $DvtChartStyleUtils$$.$getHiddenCategories$($chart$$170$$);
  return 0 < $hiddenCategories$$3$$.length && dvt.$ArrayUtils$.$hasAnyItem$($hiddenCategories$$3$$, $DvtChartDataUtils$$.$getSeriesCategories$($chart$$170$$, $seriesIndex$$81$$)) ? $JSCompiler_alias_FALSE$$ : $JSCompiler_alias_TRUE$$
};
$DvtChartStyleUtils$$.$isDataItemRendered$ = function $$DvtChartStyleUtils$$$$isDataItemRendered$$($chart$$171$$, $seriesIndex$$82$$, $groupIndex$$59$$) {
  if($DvtChartStyleUtils$$.$isSeriesRendered$($chart$$171$$, $seriesIndex$$82$$)) {
    if($DvtChartTypeUtils$$.$isPie$($chart$$171$$) || $DvtChartTypeUtils$$.$isFunnel$($chart$$171$$)) {
      $groupIndex$$59$$ = 0
    }
    var $hiddenCategories$$4$$ = $DvtChartStyleUtils$$.$getHiddenCategories$($chart$$171$$);
    if(0 < $hiddenCategories$$4$$.length && dvt.$ArrayUtils$.$hasAnyItem$($hiddenCategories$$4$$, $DvtChartDataUtils$$.$getDataItemCategories$($chart$$171$$, $seriesIndex$$82$$, $groupIndex$$59$$))) {
      return $JSCompiler_alias_FALSE$$
    }
  }else {
    return $JSCompiler_alias_FALSE$$
  }
  return $JSCompiler_alias_TRUE$$
};
$DvtChartStyleUtils$$.$getAnimationOnDisplay$ = function $$DvtChartStyleUtils$$$$getAnimationOnDisplay$$($chart$$172$$) {
  return $chart$$172$$.$getOptions$().animationOnDisplay
};
$DvtChartStyleUtils$$.$getAnimationOnDataChange$ = function $$DvtChartStyleUtils$$$$getAnimationOnDataChange$$($chart$$173$$) {
  return $chart$$173$$.$getOptions$().animationOnDataChange
};
$DvtChartStyleUtils$$.$getAnimationDuration$ = function $$DvtChartStyleUtils$$$$getAnimationDuration$$($chart$$174$$) {
  return dvt.$StyleUtils$.$getTimeMilliseconds$($chart$$174$$.$getOptions$().styleDefaults.animationDuration) / 1E3
};
$DvtChartStyleUtils$$.$getAnimationIndicators$ = function $$DvtChartStyleUtils$$$$getAnimationIndicators$$($chart$$175$$) {
  return $chart$$175$$.$getOptions$().styleDefaults.animationIndicators
};
$DvtChartStyleUtils$$.$getAnimationUpColor$ = function $$DvtChartStyleUtils$$$$getAnimationUpColor$$($chart$$176$$) {
  return $chart$$176$$.$getOptions$().styleDefaults.animationUpColor
};
$DvtChartStyleUtils$$.$getAnimationDownColor$ = function $$DvtChartStyleUtils$$$$getAnimationDownColor$$($chart$$177$$) {
  return $chart$$177$$.$getOptions$().styleDefaults.animationDownColor
};
$DvtChartStyleUtils$$.$getHiddenCategories$ = function $$DvtChartStyleUtils$$$$getHiddenCategories$$($chart$$178_options$$72$$) {
  $chart$$178_options$$72$$ = $chart$$178_options$$72$$.$getOptions$();
  $chart$$178_options$$72$$.hiddenCategories || ($chart$$178_options$$72$$.hiddenCategories = []);
  return $chart$$178_options$$72$$.hiddenCategories
};
$DvtChartStyleUtils$$.$getHighlightedCategories$ = function $$DvtChartStyleUtils$$$$getHighlightedCategories$$($chart$$179_options$$73$$) {
  $chart$$179_options$$73$$ = $chart$$179_options$$73$$.$getOptions$();
  $chart$$179_options$$73$$.highlightedCategories || ($chart$$179_options$$73$$.highlightedCategories = []);
  return $chart$$179_options$$73$$.highlightedCategories
};
$DvtChartStyleUtils$$.$getSelectedInnerColor$ = function $$DvtChartStyleUtils$$$$getSelectedInnerColor$$($chart$$180$$) {
  return $chart$$180$$.$getOptions$().styleDefaults.selectedInnerColor
};
$DvtChartStyleUtils$$.$getSelectedOuterColor$ = function $$DvtChartStyleUtils$$$$getSelectedOuterColor$$($chart$$181$$) {
  return $chart$$181$$.$getOptions$().styleDefaults.selectedOuterColor
};
$DvtChartStyleUtils$$.$isSelectionHighlighted$ = function $$DvtChartStyleUtils$$$$isSelectionHighlighted$$($chart$$182_effect$$5$$) {
  $chart$$182_effect$$5$$ = $chart$$182_effect$$5$$.$getOptions$().styleDefaults.selectionEffect;
  return"highlight" == $chart$$182_effect$$5$$ || "highlightAndExplode" == $chart$$182_effect$$5$$
};
$DvtChartStyleUtils$$.$isSelectionExploded$ = function $$DvtChartStyleUtils$$$$isSelectionExploded$$($chart$$183_effect$$6$$) {
  $chart$$183_effect$$6$$ = $chart$$183_effect$$6$$.$getOptions$().styleDefaults.selectionEffect;
  return"explode" == $chart$$183_effect$$6$$ || "highlightAndExplode" == $chart$$183_effect$$6$$
};
$DvtChartStyleUtils$$.$getDataLabelStyle$ = function $$DvtChartStyleUtils$$$$getDataLabelStyle$$($chart$$184$$, $seriesIndex$$83$$, $groupIndex$$60$$, $dataColor$$6$$, $position$$18$$, $type$$116$$) {
  var $labelStyleArray$$1$$ = [], $contrastingColor$$;
  $dataColor$$6$$ && ("bar" == $DvtChartStyleUtils$$.$getSeriesType$($chart$$184$$, $seriesIndex$$83$$) || $DvtChartTypeUtils$$.$isBubble$($chart$$184$$)) && ("center" == $position$$18$$ || "inBottom" == $position$$18$$ || "inTop" == $position$$18$$ || "inRight" == $position$$18$$ || "inLeft" == $position$$18$$) ? ($contrastingColor$$ = $DvtChartStyleUtils$$.$getPattern$($chart$$184$$, $seriesIndex$$83$$, $groupIndex$$60$$) != $JSCompiler_alias_NULL$$ ? "#000000" : dvt.$ColorUtils$.$getContrastingTextColor$($dataColor$$6$$), 
  $labelStyleArray$$1$$.push(new dvt.$CSSStyle$("color: " + $contrastingColor$$ + ";"))) : $labelStyleArray$$1$$.push(new dvt.$CSSStyle$("color: #333333;"));
  $labelStyleArray$$1$$.push($DvtChartStyleUtils$$.$_parseLowHighArray$($chart$$184$$.$getOptions$().styleDefaults.dataLabelStyle, $type$$116$$));
  $labelStyleArray$$1$$.push(new dvt.$CSSStyle$($DvtChartStyleUtils$$.$_parseLowHighArray$($DvtChartDataUtils$$.$getDataItem$($chart$$184$$, $seriesIndex$$83$$, $groupIndex$$60$$).labelStyle, $type$$116$$)));
  $contrastingColor$$ && dvt.$Agent$.$isHighContrast$() && $labelStyleArray$$1$$.push(new dvt.$CSSStyle$("color: " + $contrastingColor$$ + ";"));
  return dvt.$CSSStyle$.$mergeStyles$($labelStyleArray$$1$$)
};
$DvtChartStyleUtils$$.$getDataLabelPosition$ = function $$DvtChartStyleUtils$$$$getDataLabelPosition$$($bNegative_chart$$185$$, $seriesIndex$$84$$, $groupIndex$$61$$, $type$$117$$, $isStackLabel$$2_style$$59_textDim$$4$$) {
  var $data$$49$$ = $DvtChartDataUtils$$.$getDataItem$($bNegative_chart$$185$$, $seriesIndex$$84$$, $groupIndex$$61$$), $position$$19$$;
  if($isStackLabel$$2_style$$59_textDim$$4$$) {
    $position$$19$$ = "outsideBarEdge"
  }else {
    if(($position$$19$$ = $data$$49$$.labelPosition) || ($position$$19$$ = $bNegative_chart$$185$$.$getOptions$().styleDefaults.dataLabelPosition), $position$$19$$ = $DvtChartStyleUtils$$.$_parseLowHighArray$($position$$19$$, $type$$117$$), "none" == $position$$19$$) {
      return"none"
    }
  }
  var $bRTL$$ = dvt.$Agent$.$isRightToLeft$($bNegative_chart$$185$$.$getCtx$()), $bHorizontal$$ = $DvtChartTypeUtils$$.$isHorizontal$($bNegative_chart$$185$$), $bPolar_barInfo_isStacked_text$$50$$ = $DvtChartTypeUtils$$.$isPolar$($bNegative_chart$$185$$);
  if($DvtChartTypeUtils$$.$isFunnel$($bNegative_chart$$185$$)) {
    return"center"
  }
  if("bar" == $DvtChartStyleUtils$$.$getSeriesType$($bNegative_chart$$185$$, $seriesIndex$$84$$)) {
    if("center" == $position$$19$$ || $bPolar_barInfo_isStacked_text$$50$$) {
      return"center"
    }
    $bPolar_barInfo_isStacked_text$$50$$ = $DvtChartTypeUtils$$.$isStacked$($bNegative_chart$$185$$);
    if("insideBarEdge" != $position$$19$$) {
      if($bPolar_barInfo_isStacked_text$$50$$ && !$isStackLabel$$2_style$$59_textDim$$4$$) {
        return"center"
      }
      "outsideBarEdge" != $position$$19$$ && ($position$$19$$ = "insideBarEdge")
    }
    "insideBarEdge" == $position$$19$$ && !$bPolar_barInfo_isStacked_text$$50$$ && ($isStackLabel$$2_style$$59_textDim$$4$$ = $bNegative_chart$$185$$.$getOptions$().styleDefaults.dataLabelStyle, $bHorizontal$$ ? ($bPolar_barInfo_isStacked_text$$50$$ = $DvtChartDataUtils$$.$getDataLabel$($bNegative_chart$$185$$, $seriesIndex$$84$$, $groupIndex$$61$$, $type$$117$$), $isStackLabel$$2_style$$59_textDim$$4$$ = dvt.$TextUtils$.$getTextStringWidth$($bNegative_chart$$185$$.$getCtx$(), $bPolar_barInfo_isStacked_text$$50$$, 
    $isStackLabel$$2_style$$59_textDim$$4$$)) : $isStackLabel$$2_style$$59_textDim$$4$$ = dvt.$TextUtils$.$getTextStringHeight$($bNegative_chart$$185$$.$getCtx$(), $isStackLabel$$2_style$$59_textDim$$4$$), $bPolar_barInfo_isStacked_text$$50$$ = $DvtChartDataUtils$$.$getBarInfo$($bNegative_chart$$185$$, $seriesIndex$$84$$, $groupIndex$$61$$), Math.abs($bPolar_barInfo_isStacked_text$$50$$.$baseCoord$ - $bPolar_barInfo_isStacked_text$$50$$.$yCoord$) <= $isStackLabel$$2_style$$59_textDim$$4$$ && ($position$$19$$ = 
    "outsideBarEdge"));
    $bNegative_chart$$185$$ = "low" == $type$$117$$ ? $data$$49$$.low <= $data$$49$$.high : "high" == $type$$117$$ ? $data$$49$$.high < $data$$49$$.low : 0 > $DvtChartDataUtils$$.getValue($bNegative_chart$$185$$, $seriesIndex$$84$$, $groupIndex$$61$$);
    return"outsideBarEdge" == $position$$19$$ ? $bHorizontal$$ ? !$bNegative_chart$$185$$ && !$bRTL$$ || $bNegative_chart$$185$$ && $bRTL$$ ? "right" : "left" : $bNegative_chart$$185$$ ? "bottom" : "top" : $bHorizontal$$ ? !$bNegative_chart$$185$$ && !$bRTL$$ || $bNegative_chart$$185$$ && $bRTL$$ ? "inRight" : "inLeft" : $bNegative_chart$$185$$ ? "inBottom" : "inTop"
  }
  if("center" == $position$$19$$) {
    return"center"
  }
  if("belowMarker" == $position$$19$$) {
    return"bottom"
  }
  if("aboveMarker" == $position$$19$$) {
    return"top"
  }
  if("afterMarker" != $position$$19$$ && "beforeMarker" != $position$$19$$) {
    if($DvtChartTypeUtils$$.$isBubble$($bNegative_chart$$185$$)) {
      return"center"
    }
    if("low" == $type$$117$$ && !$bPolar_barInfo_isStacked_text$$50$$) {
      if($bHorizontal$$) {
        $position$$19$$ = "beforeMarker"
      }else {
        return"bottom"
      }
    }else {
      if("high" == $type$$117$$ && !$bPolar_barInfo_isStacked_text$$50$$) {
        if($bHorizontal$$) {
          $position$$19$$ = "afterMarker"
        }else {
          return"top"
        }
      }else {
        $position$$19$$ = "afterMarker"
      }
    }
  }
  return!$bRTL$$ && "afterMarker" == $position$$19$$ || $bRTL$$ && "beforeMarker" == $position$$19$$ ? "right" : "left"
};
$DvtChartStyleUtils$$.$_parseLowHighArray$ = function $$DvtChartStyleUtils$$$$_parseLowHighArray$$($value$$116$$, $type$$118$$) {
  return $value$$116$$ instanceof Array ? "high" == $type$$118$$ ? $value$$116$$[1] : $value$$116$$[0] : $value$$116$$
};
$DvtChartStyleUtils$$.$isOverviewRendered$ = function $$DvtChartStyleUtils$$$$isOverviewRendered$$($chart$$186$$) {
  var $options$$74$$ = $chart$$186$$.$getOptions$();
  return $DvtChartTypeUtils$$.$isOverviewSupported$($chart$$186$$) && "off" != $options$$74$$.overview.rendered
};
$DvtChartStyleUtils$$.$getOverviewHeight$ = function $$DvtChartStyleUtils$$$$getOverviewHeight$$($chart$$187$$) {
  var $height$$32$$ = $chart$$187$$.$getOptions$().overview.height;
  $height$$32$$ == $JSCompiler_alias_NULL$$ && ($height$$32$$ = $DvtChartAxisUtils$$.$hasTimeAxis$($chart$$187$$) ? 0.25 : 0.2);
  return $DvtChartStyleUtils$$.$getSizeInPixels$($height$$32$$, $chart$$187$$.getHeight())
};
$DvtChartStyleUtils$$.$getSizeInPixels$ = function $$DvtChartStyleUtils$$$$getSizeInPixels$$($size$$16$$, $totalSize$$) {
  if("string" == typeof $size$$16$$) {
    if("%" == $size$$16$$.slice(-1)) {
      return $totalSize$$ * Number($size$$16$$.slice(0, -1)) / 100
    }
    if("px" == $size$$16$$.slice(-2)) {
      return Number($size$$16$$.slice(0, -2))
    }
    $size$$16$$ = Number($size$$16$$)
  }
  return isNaN($size$$16$$) ? 0 : 1 >= $size$$16$$ ? $totalSize$$ * $size$$16$$ : $size$$16$$
};
$DvtChartStyleUtils$$.$getBackgroundColor$ = function $$DvtChartStyleUtils$$$$getBackgroundColor$$($chart$$188$$, $useDefault$$) {
  var $options$$76$$ = $chart$$188$$.$getOptions$();
  return $options$$76$$.plotArea.backgroundColor ? $options$$76$$.plotArea.backgroundColor : $useDefault$$ ? "#FFFFFF" : $JSCompiler_alias_NULL$$
};
$DvtChartStyleUtils$$.$getHoverBehaviorDelay$ = function $$DvtChartStyleUtils$$$$getHoverBehaviorDelay$$($chart$$189$$) {
  var $delay$$6$$ = $chart$$189$$.$getOptions$().styleDefaults.hoverBehaviorDelay;
  return $delay$$6$$ ? ($delay$$6$$ = dvt.$StyleUtils$.$getTimeMilliseconds$($delay$$6$$), $DvtChartTypeUtils$$.$isScatterBubble$($chart$$189$$) || $DvtChartTypeUtils$$.$isLine$($chart$$189$$) ? 0.75 * $delay$$6$$ : 1.25 * $delay$$6$$) : 0
};
$DvtChartStyleUtils$$.$optimizeMarkerStroke$ = function $$DvtChartStyleUtils$$$$optimizeMarkerStroke$$($chart$$190$$) {
  return $DvtChartTypeUtils$$.$isScatterBubble$($chart$$190$$)
};
$DvtChartStyleUtils$$.$getGroupWidth$ = function $$DvtChartStyleUtils$$$$getGroupWidth$$($chart$$191$$) {
  var $width$$37$$ = $chart$$191$$.$Cache$.groupWidth;
  $width$$37$$ == $JSCompiler_alias_NULL$$ && ($width$$37$$ = $chart$$191$$.$xAxis$.$getInfo$().$getGroupWidth$(), $chart$$191$$.$Cache$.groupWidth = $width$$37$$);
  return $width$$37$$
};
$DvtChartStyleUtils$$.$isStackLabelRendered$ = function $$DvtChartStyleUtils$$$$isStackLabelRendered$$($chart$$192$$) {
  var $options$$77$$ = $chart$$192$$.$getOptions$();
  return $DvtChartTypeUtils$$.$isStacked$($chart$$192$$) && "on" == $options$$77$$.stackLabel ? $JSCompiler_alias_TRUE$$ : $JSCompiler_alias_FALSE$$
};
var $DvtChartTextUtils$$ = {};
dvt.$Obj$.$createSubclass$($DvtChartTextUtils$$, dvt.$Obj$);
$DvtChartTextUtils$$.$createText$ = function $$DvtChartTextUtils$$$$createText$$($eventManager$$13$$, $container$$24$$, $text$$51_textString$$6$$, $cssStyle$$28$$, $x$$109$$, $y$$87$$, $width$$38$$, $height$$33$$) {
  $text$$51_textString$$6$$ = new dvt.$OutputText$($container$$24$$.$getCtx$(), $text$$51_textString$$6$$, $x$$109$$, $y$$87$$);
  $text$$51_textString$$6$$.$setCSSStyle$($cssStyle$$28$$);
  return dvt.$TextUtils$.$fitText$($text$$51_textString$$6$$, $width$$38$$, $height$$33$$, $container$$24$$) ? ($eventManager$$13$$.$associate$($text$$51_textString$$6$$, new dvt.$SimpleObjPeer$($text$$51_textString$$6$$.$getUntruncatedTextString$())), $text$$51_textString$$6$$) : $JSCompiler_alias_NULL$$
};
$DvtChartTextUtils$$.$areTitlesRendered$ = function $$DvtChartTextUtils$$$$areTitlesRendered$$($chart$$193_options$$78$$) {
  $chart$$193_options$$78$$ = $chart$$193_options$$78$$.$getOptions$();
  return $chart$$193_options$$78$$.title.text || $chart$$193_options$$78$$.subtitle.text || $chart$$193_options$$78$$.footnote.text
};
var $DvtChartTooltipUtils$$ = {};
dvt.$Obj$.$createSubclass$($DvtChartTooltipUtils$$, dvt.$Obj$);
$DvtChartTooltipUtils$$.$getDatatipColor$ = function $$DvtChartTooltipUtils$$$$getDatatipColor$$($chart$$194$$, $seriesIndex$$85$$, $groupIndex$$62$$) {
  return $DvtChartTypeUtils$$.$isStock$($chart$$194$$) ? $DvtChartStyleUtils$$.$getColor$($chart$$194$$, 0, $groupIndex$$62$$) : $DvtChartStyleUtils$$.$getColor$($chart$$194$$, $seriesIndex$$85$$, $groupIndex$$62$$)
};
$DvtChartTooltipUtils$$.$getDatatip$ = function $$DvtChartTooltipUtils$$$$getDatatip$$($chart$$195_slice$$10$$, $seriesIndex$$86$$, $groupIndex$$63$$, $isTabular_tooltipManager$$6$$) {
  if($DvtChartTypeUtils$$.$isSpark$($chart$$195_slice$$10$$) || $DvtChartTypeUtils$$.$isOverview$($chart$$195_slice$$10$$) || 0 > $seriesIndex$$86$$ || 0 > $groupIndex$$63$$) {
    return $JSCompiler_alias_NULL$$
  }
  var $dataContext$$2_dataItem$$28$$ = $DvtChartDataUtils$$.$getDataItem$($chart$$195_slice$$10$$, $seriesIndex$$86$$, $groupIndex$$63$$), $datatip$$5_tooltipFunc$$ = $chart$$195_slice$$10$$.$getOptions$().tooltip;
  if($isTabular_tooltipManager$$6$$ && $datatip$$5_tooltipFunc$$) {
    return $isTabular_tooltipManager$$6$$ = $chart$$195_slice$$10$$.$getCtx$().$getTooltipManager$($DvtChartTooltipUtils$$.$isDataCursorEnabled$($chart$$195_slice$$10$$) ? "_dvtDataCursor" : $JSCompiler_alias_NULL$$), $dataContext$$2_dataItem$$28$$ = $DvtChartDataUtils$$.$getDataContext$($chart$$195_slice$$10$$, $seriesIndex$$86$$, $groupIndex$$63$$), $DvtChartTypeUtils$$.$isPie$($chart$$195_slice$$10$$) ? ($chart$$195_slice$$10$$ = $DvtChartPieUtils$$.$getSliceBySeriesIndex$($chart$$195_slice$$10$$, 
    $seriesIndex$$86$$), $dataContext$$2_dataItem$$28$$.label = $chart$$195_slice$$10$$.$_sliceLabelString$) : $dataContext$$2_dataItem$$28$$.label = $DvtChartDataUtils$$.$getDataLabel$($chart$$195_slice$$10$$, $seriesIndex$$86$$, $groupIndex$$63$$), $isTabular_tooltipManager$$6$$.$getCustomTooltip$($datatip$$5_tooltipFunc$$, $dataContext$$2_dataItem$$28$$)
  }
  if($dataContext$$2_dataItem$$28$$ && $dataContext$$2_dataItem$$28$$.shortDesc != $JSCompiler_alias_NULL$$) {
    return $dataContext$$2_dataItem$$28$$.shortDesc
  }
  $datatip$$5_tooltipFunc$$ = "";
  $DvtChartTypeUtils$$.$isStock$($chart$$195_slice$$10$$) ? $datatip$$5_tooltipFunc$$ += $DvtChartTooltipUtils$$.$getStockDatatip$($chart$$195_slice$$10$$, $groupIndex$$63$$, $isTabular_tooltipManager$$6$$) : ($datatip$$5_tooltipFunc$$ = $DvtChartTooltipUtils$$.$_addSeriesDatatip$($datatip$$5_tooltipFunc$$, $chart$$195_slice$$10$$, $seriesIndex$$86$$, $isTabular_tooltipManager$$6$$), $datatip$$5_tooltipFunc$$ = $DvtChartTooltipUtils$$.$_addGroupDatatip$($datatip$$5_tooltipFunc$$, $chart$$195_slice$$10$$, 
  $seriesIndex$$86$$, $groupIndex$$63$$, $isTabular_tooltipManager$$6$$), $datatip$$5_tooltipFunc$$ = $DvtChartTooltipUtils$$.$_addValueDatatip$($datatip$$5_tooltipFunc$$, $chart$$195_slice$$10$$, $seriesIndex$$86$$, $groupIndex$$63$$, $isTabular_tooltipManager$$6$$));
  return $DvtChartTooltipUtils$$.$_processDatatip$($datatip$$5_tooltipFunc$$, $chart$$195_slice$$10$$, $isTabular_tooltipManager$$6$$)
};
$DvtChartTooltipUtils$$.$getOtherSliceDatatip$ = function $$DvtChartTooltipUtils$$$$getOtherSliceDatatip$$($chart$$196$$, $otherValue$$1_slice$$11$$, $dataContext$$3_isTabular$$1$$) {
  var $otherStr$$1$$ = dvt.$Bundle$.$getTranslatedString$(dvt.$Bundle$.$CHART_PREFIX$, "LABEL_OTHER", $JSCompiler_alias_NULL$$), $datatip$$6_tooltipFunc$$1$$ = $chart$$196$$.$getOptions$().tooltip;
  if($dataContext$$3_isTabular$$1$$ && $datatip$$6_tooltipFunc$$1$$) {
    return $otherValue$$1_slice$$11$$ = $DvtChartPieUtils$$.$getSliceBySeriesIndex$($chart$$196$$, $JSCompiler_alias_NULL$$), $dataContext$$3_isTabular$$1$$ = $DvtChartDataUtils$$.$getDataContext$($chart$$196$$, $JSCompiler_alias_NULL$$, 0), $dataContext$$3_isTabular$$1$$.label = $otherValue$$1_slice$$11$$.$_sliceLabelString$, $chart$$196$$.$getCtx$().$getTooltipManager$().$getCustomTooltip$($datatip$$6_tooltipFunc$$1$$, $dataContext$$3_isTabular$$1$$)
  }
  $datatip$$6_tooltipFunc$$1$$ = $DvtChartTooltipUtils$$.$_addDatatipRow$("", $chart$$196$$, "series", "SERIES", $otherStr$$1$$, $dataContext$$3_isTabular$$1$$);
  $datatip$$6_tooltipFunc$$1$$ = $DvtChartTooltipUtils$$.$_addGroupDatatip$($datatip$$6_tooltipFunc$$1$$, $chart$$196$$, 0, 0, $dataContext$$3_isTabular$$1$$);
  $datatip$$6_tooltipFunc$$1$$ = $DvtChartTooltipUtils$$.$_addDatatipRow$($datatip$$6_tooltipFunc$$1$$, $chart$$196$$, "value", "VALUE", $otherValue$$1_slice$$11$$, $dataContext$$3_isTabular$$1$$);
  return $DvtChartTooltipUtils$$.$_processDatatip$($datatip$$6_tooltipFunc$$1$$, $chart$$196$$, $dataContext$$3_isTabular$$1$$)
};
$DvtChartTooltipUtils$$.$_processDatatip$ = function $$DvtChartTooltipUtils$$$$_processDatatip$$($datatip$$7$$, $chart$$197$$, $isTabular$$2$$) {
  return"" == $datatip$$7$$ ? $JSCompiler_alias_NULL$$ : $isTabular$$2$$ ? dvt.$HtmlTooltipManager$.$createStartTag$("table", $chart$$197$$.$getOptions$().styleDefaults._tooltipStyle) + $datatip$$7$$ + "\x3c/table\x3e" : $datatip$$7$$
};
$DvtChartTooltipUtils$$.$getRefObjTooltip$ = function $$DvtChartTooltipUtils$$$$getRefObjTooltip$$($chart$$198_dataContext$$4$$, $refObj$$12$$, $axisType$$5$$, $index$$139$$) {
  var $tooltipFunc$$2$$ = $chart$$198_dataContext$$4$$.$getOptions$().tooltip;
  if($tooltipFunc$$2$$ && $refObj$$12$$.id != $JSCompiler_alias_NULL$$) {
    var $tooltipManager$$7$$ = $chart$$198_dataContext$$4$$.$getCtx$().$getTooltipManager$($DvtChartTooltipUtils$$.$isDataCursorEnabled$($chart$$198_dataContext$$4$$) ? "_dvtDataCursor" : $JSCompiler_alias_NULL$$);
    $chart$$198_dataContext$$4$$ = {id:$DvtChartRefObjUtils$$.getId($refObj$$12$$), label:$refObj$$12$$.text, data:$chart$$198_dataContext$$4$$.$_rawOptions$[$axisType$$5$$].referenceObjects[$index$$139$$], value:$refObj$$12$$.value, low:$DvtChartRefObjUtils$$.$getLowValue$($refObj$$12$$), high:$DvtChartRefObjUtils$$.$getHighValue$($refObj$$12$$), color:$DvtChartRefObjUtils$$.$getColor$($refObj$$12$$)};
    return $tooltipManager$$7$$.$getCustomTooltip$($tooltipFunc$$2$$, $chart$$198_dataContext$$4$$)
  }
  return $refObj$$12$$.shortDesc
};
$DvtChartTooltipUtils$$.$getStockDatatip$ = function $$DvtChartTooltipUtils$$$$getStockDatatip$$($chart$$199$$, $datatip$$8_groupIndex$$64$$, $isTabular$$3$$) {
  var $dataItem$$29$$ = $DvtChartDataUtils$$.$getDataItem$($chart$$199$$, 0, $datatip$$8_groupIndex$$64$$);
  $datatip$$8_groupIndex$$64$$ = $DvtChartTooltipUtils$$.$_addGroupDatatip$("", $chart$$199$$, 0, $datatip$$8_groupIndex$$64$$, $isTabular$$3$$);
  $dataItem$$29$$ && ($datatip$$8_groupIndex$$64$$ = $DvtChartTooltipUtils$$.$_addDatatipRow$($datatip$$8_groupIndex$$64$$, $chart$$199$$, "open", "OPEN", $dataItem$$29$$.open, $isTabular$$3$$), $datatip$$8_groupIndex$$64$$ = $DvtChartTooltipUtils$$.$_addDatatipRow$($datatip$$8_groupIndex$$64$$, $chart$$199$$, "close", "CLOSE", $dataItem$$29$$.close, $isTabular$$3$$), $datatip$$8_groupIndex$$64$$ = $DvtChartTooltipUtils$$.$_addDatatipRow$($datatip$$8_groupIndex$$64$$, $chart$$199$$, "high", "HIGH", 
  $dataItem$$29$$.high, $isTabular$$3$$), $datatip$$8_groupIndex$$64$$ = $DvtChartTooltipUtils$$.$_addDatatipRow$($datatip$$8_groupIndex$$64$$, $chart$$199$$, "low", "LOW", $dataItem$$29$$.low, $isTabular$$3$$), $datatip$$8_groupIndex$$64$$ = $DvtChartTooltipUtils$$.$_addDatatipRow$($datatip$$8_groupIndex$$64$$, $chart$$199$$, "volume", "VOLUME", $dataItem$$29$$.volume, $isTabular$$3$$));
  return $datatip$$8_groupIndex$$64$$
};
$DvtChartTooltipUtils$$.$_addSeriesDatatip$ = function $$DvtChartTooltipUtils$$$$_addSeriesDatatip$$($datatip$$9$$, $chart$$200$$, $seriesIndex$$88_seriesLabel$$, $isTabular$$4$$) {
  $seriesIndex$$88_seriesLabel$$ = $DvtChartDataUtils$$.$getSeriesLabel$($chart$$200$$, $seriesIndex$$88_seriesLabel$$);
  return $DvtChartTooltipUtils$$.$_addDatatipRow$($datatip$$9$$, $chart$$200$$, "series", "SERIES", $seriesIndex$$88_seriesLabel$$, $isTabular$$4$$)
};
$DvtChartTooltipUtils$$.$_addGroupDatatip$ = function $$DvtChartTooltipUtils$$$$_addGroupDatatip$$($datatip$$10$$, $chart$$201$$, $defaultLabel$$1_seriesIndex$$89_value$$117$$, $groupIndex$$66_levelIndex$$1_numLevels$$3$$, $isTabular$$5$$) {
  var $groupLabel_valueFormat$$1$$;
  $DvtChartAxisUtils$$.$hasTimeAxis$($chart$$201$$) ? ($groupLabel_valueFormat$$1$$ = $DvtChartTooltipUtils$$.$getValueFormat$($chart$$201$$, "group"), $defaultLabel$$1_seriesIndex$$89_value$$117$$ = $DvtChartDataUtils$$.$getXValue$($chart$$201$$, $defaultLabel$$1_seriesIndex$$89_value$$117$$, $groupIndex$$66_levelIndex$$1_numLevels$$3$$), $groupLabel_valueFormat$$1$$ = $DvtChartTooltipUtils$$.$formatDateValue$($groupLabel_valueFormat$$1$$, new Date($defaultLabel$$1_seriesIndex$$89_value$$117$$)), 
  $groupLabel_valueFormat$$1$$ == $JSCompiler_alias_NULL$$ && ($groupLabel_valueFormat$$1$$ = $chart$$201$$.$xAxis$.$getInfo$().$formatLabel$($defaultLabel$$1_seriesIndex$$89_value$$117$$))) : $groupLabel_valueFormat$$1$$ = $DvtChartDataUtils$$.$getGroupLabel$($chart$$201$$, $groupIndex$$66_levelIndex$$1_numLevels$$3$$);
  $groupIndex$$66_levelIndex$$1_numLevels$$3$$ = $DvtChartDataUtils$$.$getNumLevels$($chart$$201$$);
  $defaultLabel$$1_seriesIndex$$89_value$$117$$ = "GROUP";
  if(1 == $groupIndex$$66_levelIndex$$1_numLevels$$3$$ || !dvt.$ArrayUtils$.isArray($groupLabel_valueFormat$$1$$)) {
    $datatip$$10$$ = $DvtChartTooltipUtils$$.$_addDatatipRow$($datatip$$10$$, $chart$$201$$, "group", $defaultLabel$$1_seriesIndex$$89_value$$117$$, $groupLabel_valueFormat$$1$$, $isTabular$$5$$)
  }else {
    for($groupIndex$$66_levelIndex$$1_numLevels$$3$$ -= 1;0 <= $groupIndex$$66_levelIndex$$1_numLevels$$3$$;$groupIndex$$66_levelIndex$$1_numLevels$$3$$--) {
      $datatip$$10$$ = $DvtChartTooltipUtils$$.$_addDatatipRow$($datatip$$10$$, $chart$$201$$, "group", $defaultLabel$$1_seriesIndex$$89_value$$117$$, $groupLabel_valueFormat$$1$$[$groupIndex$$66_levelIndex$$1_numLevels$$3$$], $isTabular$$5$$, $groupIndex$$66_levelIndex$$1_numLevels$$3$$), $groupLabel_valueFormat$$1$$[$groupIndex$$66_levelIndex$$1_numLevels$$3$$] && ($defaultLabel$$1_seriesIndex$$89_value$$117$$ = $JSCompiler_alias_NULL$$)
    }
  }
  return $datatip$$10$$
};
$DvtChartTooltipUtils$$.$_addValueDatatip$ = function $$DvtChartTooltipUtils$$$$_addValueDatatip$$($datatip$$11$$, $chart$$202$$, $seriesIndex$$90_type$$119$$, $groupIndex$$67_highVal$$, $isTabular$$6$$) {
  var $target$$58_val$$24$$ = $DvtChartDataUtils$$.getValue($chart$$202$$, $seriesIndex$$90_type$$119$$, $groupIndex$$67_highVal$$), $xVal$$4$$ = $DvtChartDataUtils$$.$getXValue$($chart$$202$$, $seriesIndex$$90_type$$119$$, $groupIndex$$67_highVal$$), $zVal$$ = $DvtChartDataUtils$$.$getZValue$($chart$$202$$, $seriesIndex$$90_type$$119$$, $groupIndex$$67_highVal$$), $lowVal$$ = $DvtChartDataUtils$$.$getLowValue$($chart$$202$$, $seriesIndex$$90_type$$119$$, $groupIndex$$67_highVal$$);
  $groupIndex$$67_highVal$$ = $DvtChartDataUtils$$.$getHighValue$($chart$$202$$, $seriesIndex$$90_type$$119$$, $groupIndex$$67_highVal$$);
  $DvtChartTypeUtils$$.$isScatterBubble$($chart$$202$$) ? ($datatip$$11$$ = $DvtChartTooltipUtils$$.$_addDatatipRow$($datatip$$11$$, $chart$$202$$, "x", "X", $xVal$$4$$, $isTabular$$6$$), $datatip$$11$$ = $DvtChartTooltipUtils$$.$_addDatatipRow$($datatip$$11$$, $chart$$202$$, "y", "Y", $target$$58_val$$24$$, $isTabular$$6$$), $DvtChartTypeUtils$$.$isBubble$($chart$$202$$) && ($datatip$$11$$ = $DvtChartTooltipUtils$$.$_addDatatipRow$($datatip$$11$$, $chart$$202$$, "z", "Z", $zVal$$, $isTabular$$6$$))) : 
  $DvtChartTypeUtils$$.$isPie$($chart$$202$$) ? $datatip$$11$$ = $DvtChartTooltipUtils$$.$_addDatatipRow$($datatip$$11$$, $chart$$202$$, "value", "VALUE", $target$$58_val$$24$$, $isTabular$$6$$) : $DvtChartTypeUtils$$.$isFunnel$($chart$$202$$) ? ($datatip$$11$$ = $DvtChartTooltipUtils$$.$_addDatatipRow$($datatip$$11$$, $chart$$202$$, "value", "VALUE", $target$$58_val$$24$$, $isTabular$$6$$), $target$$58_val$$24$$ = $DvtChartDataUtils$$.$getTargetValue$($chart$$202$$, $seriesIndex$$90_type$$119$$), 
  $target$$58_val$$24$$ != $JSCompiler_alias_NULL$$ && ($datatip$$11$$ = $DvtChartTooltipUtils$$.$_addDatatipRow$($datatip$$11$$, $chart$$202$$, "targetValue", "TARGET_VALUE", $target$$58_val$$24$$, $isTabular$$6$$))) : $DvtChartTypeUtils$$.$isBLAC$($chart$$202$$) && ($seriesIndex$$90_type$$119$$ = $DvtChartDataUtils$$.$isAssignedToY2$($chart$$202$$, $seriesIndex$$90_type$$119$$) ? "y2" : "y", $lowVal$$ != $JSCompiler_alias_NULL$$ || $groupIndex$$67_highVal$$ != $JSCompiler_alias_NULL$$ ? ($datatip$$11$$ = 
  $DvtChartTooltipUtils$$.$_addDatatipRow$($datatip$$11$$, $chart$$202$$, "high", "HIGH", $groupIndex$$67_highVal$$, $isTabular$$6$$), $datatip$$11$$ = $DvtChartTooltipUtils$$.$_addDatatipRow$($datatip$$11$$, $chart$$202$$, "low", "LOW", $lowVal$$, $isTabular$$6$$), $zVal$$ != $JSCompiler_alias_NULL$$ && ($datatip$$11$$ = $DvtChartTooltipUtils$$.$_addDatatipRow$($datatip$$11$$, $chart$$202$$, "z", "Z", $zVal$$, $isTabular$$6$$))) : $zVal$$ != $JSCompiler_alias_NULL$$ ? ($datatip$$11$$ = $DvtChartTooltipUtils$$.$_addDatatipRow$($datatip$$11$$, 
  $chart$$202$$, $seriesIndex$$90_type$$119$$, "Y", $target$$58_val$$24$$, $isTabular$$6$$), $datatip$$11$$ = $DvtChartTooltipUtils$$.$_addDatatipRow$($datatip$$11$$, $chart$$202$$, "z", "Z", $zVal$$, $isTabular$$6$$)) : $datatip$$11$$ = $DvtChartTooltipUtils$$.$_addDatatipRow$($datatip$$11$$, $chart$$202$$, $seriesIndex$$90_type$$119$$, "VALUE", $target$$58_val$$24$$, $isTabular$$6$$));
  return $datatip$$11$$
};
$DvtChartTooltipUtils$$.$_addDatatipRow$ = function $$DvtChartTooltipUtils$$$$_addDatatipRow$$($datatip$$12$$, $chart$$203_isRTL$$16$$, $type$$120$$, $defaultLabel$$2$$, $value$$118$$, $isTabular$$7$$, $index$$140$$) {
  if($value$$118$$ == $JSCompiler_alias_NULL$$ || "" === $value$$118$$) {
    return $datatip$$12$$
  }
  var $options$$79$$ = $chart$$203_isRTL$$16$$.$getOptions$().styleDefaults, $valueFormat$$2$$ = $DvtChartTooltipUtils$$.$getValueFormat$($chart$$203_isRTL$$16$$, $type$$120$$), $tooltipDisplay$$ = $valueFormat$$2$$.tooltipDisplay;
  if(!$tooltipDisplay$$ || "auto" == $tooltipDisplay$$) {
    if("series" == $type$$120$$ && "none" == $options$$79$$.seriesTooltipType || "group" == $type$$120$$ && ("none" == $options$$79$$.groupTooltipType || $DvtChartTypeUtils$$.$isPie$($chart$$203_isRTL$$16$$) || $DvtChartTypeUtils$$.$isFunnel$($chart$$203_isRTL$$16$$)) || "series" != $type$$120$$ && ("group" != $type$$120$$ && "label" != $type$$120$$) && "none" == $options$$79$$.valueTooltipType) {
      $tooltipDisplay$$ = "off"
    }
  }
  if("off" == $tooltipDisplay$$) {
    return $datatip$$12$$
  }
  var $tooltipLabel$$;
  "string" === typeof $valueFormat$$2$$.tooltipLabel ? $tooltipLabel$$ = $valueFormat$$2$$.tooltipLabel : dvt.$ArrayUtils$.isArray($valueFormat$$2$$.tooltipLabel) && ($tooltipLabel$$ = $valueFormat$$2$$.tooltipLabel[$index$$140$$ ? $index$$140$$ : 0]);
  $tooltipLabel$$ == $JSCompiler_alias_NULL$$ && ($tooltipLabel$$ = $defaultLabel$$2$$ == $JSCompiler_alias_NULL$$ ? "" : "GROUP" == $defaultLabel$$2$$ && $DvtChartAxisUtils$$.$hasTimeAxis$($chart$$203_isRTL$$16$$) ? dvt.$Bundle$.$getTranslation$($chart$$203_isRTL$$16$$.$getOptions$(), "labelDate", dvt.$Bundle$.$CHART_PREFIX$, "LABEL_GROUP") : dvt.$Bundle$.$getTranslatedString$(dvt.$Bundle$.$CHART_PREFIX$, "LABEL_" + $defaultLabel$$2$$, ""));
  "series" != $type$$120$$ && "group" != $type$$120$$ && ($value$$118$$ = $DvtChartTooltipUtils$$.$formatValue$($chart$$203_isRTL$$16$$.$getCtx$(), $valueFormat$$2$$, $value$$118$$));
  if($isTabular$$7$$) {
    return $chart$$203_isRTL$$16$$ = dvt.$Agent$.$isRightToLeft$($chart$$203_isRTL$$16$$.$getCtx$()), $options$$79$$.tooltipLabelStyle.$setStyle$(dvt.$CSSStyle$.$TEXT_ALIGN$, $chart$$203_isRTL$$16$$ ? "left" : "right"), $options$$79$$.tooltipValueStyle.$setStyle$(dvt.$CSSStyle$.$TEXT_ALIGN$, $chart$$203_isRTL$$16$$ ? "right" : "left"), $datatip$$12$$ + "\x3ctr\x3e" + dvt.$HtmlTooltipManager$.$createStartTag$("td", $options$$79$$.tooltipLabelStyle) + $tooltipLabel$$ + "\x3c/td\x3e" + dvt.$HtmlTooltipManager$.$createStartTag$("td", 
    $options$$79$$.tooltipValueStyle) + $value$$118$$ + "\x3c/td\x3e\x3c/tr\x3e"
  }
  0 < $datatip$$12$$.length && ($datatip$$12$$ += "\x3cbr\x3e");
  return $datatip$$12$$ + dvt.$Bundle$.$getTranslatedString$(dvt.$Bundle$.$UTIL_PREFIX$, "COLON_SEP_LIST", [$tooltipLabel$$, $value$$118$$])
};
$DvtChartTooltipUtils$$.$getValueFormat$ = function $$DvtChartTooltipUtils$$$$getValueFormat$$($chart$$204$$, $type$$121$$) {
  var $valueFormats$$ = $chart$$204$$.$getOptions$().valueFormats;
  if(!$valueFormats$$) {
    return{}
  }
  for(var $i$$355$$ = 0;$i$$355$$ < $valueFormats$$.length;$i$$355$$++) {
    if($valueFormats$$[$i$$355$$].type == $type$$121$$) {
      return $valueFormats$$[$i$$355$$]
    }
  }
  return"group" == $type$$121$$ && $DvtChartAxisUtils$$.$hasTimeAxis$($chart$$204$$) ? $DvtChartTooltipUtils$$.$getValueFormat$($chart$$204$$, "x") : ("y" == $type$$121$$ || "y2" == $type$$121$$ || "min" == $type$$121$$ || "max" == $type$$121$$) && $DvtChartTypeUtils$$.$isBLAC$($chart$$204$$) ? $DvtChartTooltipUtils$$.$getValueFormat$($chart$$204$$, "value") : {}
};
$DvtChartTooltipUtils$$.$formatValue$ = function $$DvtChartTooltipUtils$$$$formatValue$$($context$$141_formatter$$, $valueFormat$$3$$, $value$$119$$, $min$$11$$, $max$$11$$, $majorIncrement$$1$$) {
  var $scaling$$ = "auto", $autoPrecision$$4$$ = "on", $converter$$3$$;
  $valueFormat$$3$$.scaling && ($scaling$$ = $valueFormat$$3$$.scaling);
  $valueFormat$$3$$.autoPrecision && ($autoPrecision$$4$$ = $valueFormat$$3$$.autoPrecision);
  $valueFormat$$3$$.converter && ($converter$$3$$ = $valueFormat$$3$$.converter);
  $context$$141_formatter$$ = new dvt.$LinearScaleAxisValueFormatter$($context$$141_formatter$$, $min$$11$$ != $JSCompiler_alias_NULL$$ ? $min$$11$$ : $value$$119$$, $max$$11$$ != $JSCompiler_alias_NULL$$ ? $max$$11$$ : $value$$119$$, $majorIncrement$$1$$ != $JSCompiler_alias_NULL$$ ? $majorIncrement$$1$$ : 0, $scaling$$, $autoPrecision$$4$$);
  return $converter$$3$$ && ($converter$$3$$.getAsString || $converter$$3$$.format) ? $context$$141_formatter$$.$format$($value$$119$$, $converter$$3$$) : $context$$141_formatter$$.$format$($value$$119$$)
};
$DvtChartTooltipUtils$$.$formatDateValue$ = function $$DvtChartTooltipUtils$$$$formatDateValue$$($valueFormat$$4$$, $date$$9$$) {
  var $converter$$4$$ = $valueFormat$$4$$.converter;
  return!$converter$$4$$ ? $JSCompiler_alias_NULL$$ : $converter$$4$$.getAsString ? $converter$$4$$.getAsString($date$$9$$) : $converter$$4$$.format ? $converter$$4$$.format($date$$9$$) : $JSCompiler_alias_NULL$$
};
$DvtChartTooltipUtils$$.$isDataCursorEnabled$ = function $$DvtChartTooltipUtils$$$$isDataCursorEnabled$$($chart$$205$$) {
  if($DvtChartTypeUtils$$.$isPie$($chart$$205$$) || $DvtChartTypeUtils$$.$isFunnel$($chart$$205$$) || $DvtChartTypeUtils$$.$isPolar$($chart$$205$$)) {
    return $JSCompiler_alias_FALSE$$
  }
  var $options$$80$$ = $chart$$205$$.$getOptions$();
  return"on" == $options$$80$$.dataCursor ? $JSCompiler_alias_TRUE$$ : "off" == $options$$80$$.dataCursor ? $JSCompiler_alias_FALSE$$ : dvt.$Agent$.$isTouchDevice$() && $DvtChartTypeUtils$$.$isLineArea$($chart$$205$$)
};
$DvtChartTooltipUtils$$.$getDataCursorBehavior$ = function $$DvtChartTooltipUtils$$$$getDataCursorBehavior$$($chart$$206$$) {
  var $dataCursorBehavior$$ = $chart$$206$$.$getOptions$().dataCursorBehavior;
  return"snap" == $dataCursorBehavior$$ ? "SNAP" : "smooth" == $dataCursorBehavior$$ ? "SMOOTH" : $DvtChartTypeUtils$$.$isLineArea$($chart$$206$$) ? "SMOOTH" : "SNAP"
};
var $DvtChartTypeUtils$$ = {};
dvt.$Obj$.$createSubclass$($DvtChartTypeUtils$$, dvt.$Obj$);
$DvtChartTypeUtils$$.$_SUPPORTED_TYPES$ = "bar line area lineWithArea combo pie bubble scatter funnel stock".split(" ");
$DvtChartTypeUtils$$.$isValidType$ = function $$DvtChartTypeUtils$$$$isValidType$$($chart$$207$$) {
  return 0 <= dvt.$ArrayUtils$.$getIndex$($DvtChartTypeUtils$$.$_SUPPORTED_TYPES$, $chart$$207$$.$getType$())
};
$DvtChartTypeUtils$$.$isSpark$ = function $$DvtChartTypeUtils$$$$isSpark$$($chart$$208$$) {
  return $chart$$208$$.$getOptions$().__spark
};
$DvtChartTypeUtils$$.$isOverview$ = function $$DvtChartTypeUtils$$$$isOverview$$($chart$$209$$) {
  return $chart$$209$$.$getOptions$()._isOverview
};
$DvtChartTypeUtils$$.$isCombo$ = function $$DvtChartTypeUtils$$$$isCombo$$($chart$$210$$) {
  return"combo" == $chart$$210$$.$getType$()
};
$DvtChartTypeUtils$$.$isVertical$ = function $$DvtChartTypeUtils$$$$isVertical$$($chart$$211$$) {
  return!$DvtChartTypeUtils$$.$isHorizontal$($chart$$211$$) && !$DvtChartTypeUtils$$.$isPolar$($chart$$211$$)
};
$DvtChartTypeUtils$$.$isHorizontal$ = function $$DvtChartTypeUtils$$$$isHorizontal$$($chart$$212$$) {
  return"horizontal" == $chart$$212$$.$getOptions$().orientation && !$DvtChartTypeUtils$$.$isPolar$($chart$$212$$) && !$DvtChartTypeUtils$$.$isStock$($chart$$212$$) && ($DvtChartTypeUtils$$.$isBLAC$($chart$$212$$) || $DvtChartTypeUtils$$.$isFunnel$($chart$$212$$))
};
$DvtChartTypeUtils$$.$isPolar$ = function $$DvtChartTypeUtils$$$$isPolar$$($chart$$213$$) {
  return"polar" == $chart$$213$$.$getOptions$().coordinateSystem
};
$DvtChartTypeUtils$$.$isStacked$ = function $$DvtChartTypeUtils$$$$isStacked$$($chart$$214$$) {
  return"on" != $chart$$214$$.$getOptions$().stack || $DvtChartAxisUtils$$.$isMixedFrequency$($chart$$214$$) ? $JSCompiler_alias_FALSE$$ : $DvtChartTypeUtils$$.$isBLAC$($chart$$214$$)
};
$DvtChartTypeUtils$$.$isBar$ = function $$DvtChartTypeUtils$$$$isBar$$($chart$$215$$) {
  return"bar" == $chart$$215$$.$getType$()
};
$DvtChartTypeUtils$$.$isStock$ = function $$DvtChartTypeUtils$$$$isStock$$($chart$$216$$) {
  return"stock" == $chart$$216$$.$getType$()
};
$DvtChartTypeUtils$$.$isLine$ = function $$DvtChartTypeUtils$$$$isLine$$($chart$$217$$) {
  return"line" == $chart$$217$$.$getType$()
};
$DvtChartTypeUtils$$.$isLineWithArea$ = function $$DvtChartTypeUtils$$$$isLineWithArea$$($chart$$218$$) {
  return"lineWithArea" == $chart$$218$$.$getType$()
};
$DvtChartTypeUtils$$.$isArea$ = function $$DvtChartTypeUtils$$$$isArea$$($chart$$219$$) {
  return"area" == $chart$$219$$.$getType$()
};
$DvtChartTypeUtils$$.$isScatter$ = function $$DvtChartTypeUtils$$$$isScatter$$($chart$$220$$) {
  return"scatter" == $chart$$220$$.$getType$()
};
$DvtChartTypeUtils$$.$isBubble$ = function $$DvtChartTypeUtils$$$$isBubble$$($chart$$221$$) {
  return"bubble" == $chart$$221$$.$getType$()
};
$DvtChartTypeUtils$$.$isPie$ = function $$DvtChartTypeUtils$$$$isPie$$($chart$$222$$) {
  return"pie" == $chart$$222$$.$getType$()
};
$DvtChartTypeUtils$$.$isFunnel$ = function $$DvtChartTypeUtils$$$$isFunnel$$($chart$$223$$) {
  return"funnel" == $chart$$223$$.$getType$()
};
$DvtChartTypeUtils$$.$isDualY$ = function $$DvtChartTypeUtils$$$$isDualY$$($chart$$224$$) {
  return!$DvtChartTypeUtils$$.$hasAxes$($chart$$224$$) || $DvtChartTypeUtils$$.$isScatterBubble$($chart$$224$$) || $DvtChartTypeUtils$$.$isPolar$($chart$$224$$) ? $JSCompiler_alias_FALSE$$ : $JSCompiler_alias_TRUE$$
};
$DvtChartTypeUtils$$.$isSplitDualY$ = function $$DvtChartTypeUtils$$$$isSplitDualY$$($chart$$225$$) {
  return $DvtChartTypeUtils$$.$isStock$($chart$$225$$) && $DvtChartDataUtils$$.$hasVolumeSeries$($chart$$225$$) && !$DvtChartTypeUtils$$.$isOverview$($chart$$225$$) ? $JSCompiler_alias_TRUE$$ : "on" == $chart$$225$$.$getOptions$().splitDualY && $DvtChartTypeUtils$$.$hasY2Data$($chart$$225$$) && !$DvtChartTypeUtils$$.$hasY2DataOnly$($chart$$225$$)
};
$DvtChartTypeUtils$$.$isBLAC$ = function $$DvtChartTypeUtils$$$$isBLAC$$($chart$$226_type$$122$$) {
  $chart$$226_type$$122$$ = $chart$$226_type$$122$$.$getType$();
  return"bar" == $chart$$226_type$$122$$ || "line" == $chart$$226_type$$122$$ || "area" == $chart$$226_type$$122$$ || "lineWithArea" == $chart$$226_type$$122$$ || "combo" == $chart$$226_type$$122$$ || "stock" == $chart$$226_type$$122$$
};
$DvtChartTypeUtils$$.$isScatterBubble$ = function $$DvtChartTypeUtils$$$$isScatterBubble$$($chart$$227_type$$123$$) {
  $chart$$227_type$$123$$ = $chart$$227_type$$123$$.$getType$();
  return"scatter" == $chart$$227_type$$123$$ || "bubble" == $chart$$227_type$$123$$
};
$DvtChartTypeUtils$$.$isLineArea$ = function $$DvtChartTypeUtils$$$$isLineArea$$($chart$$228_type$$124$$) {
  $chart$$228_type$$124$$ = $chart$$228_type$$124$$.$getType$();
  return"line" == $chart$$228_type$$124$$ || "area" == $chart$$228_type$$124$$ || "lineWithArea" == $chart$$228_type$$124$$
};
$DvtChartTypeUtils$$.$isScrollSupported$ = function $$DvtChartTypeUtils$$$$isScrollSupported$$($chart$$229$$) {
  return!$DvtChartTypeUtils$$.$isPie$($chart$$229$$) && !$DvtChartTypeUtils$$.$isFunnel$($chart$$229$$) && !$DvtChartTypeUtils$$.$isPolar$($chart$$229$$)
};
$DvtChartTypeUtils$$.$isOverviewSupported$ = function $$DvtChartTypeUtils$$$$isOverviewSupported$$($chart$$230$$) {
  return $DvtChartTypeUtils$$.$isBLAC$($chart$$230$$) && $DvtChartTypeUtils$$.$isVertical$($chart$$230$$)
};
$DvtChartTypeUtils$$.$isHorizScrollbarSupported$ = function $$DvtChartTypeUtils$$$$isHorizScrollbarSupported$$($chart$$231$$) {
  var $direction$$10$$ = $DvtChartEventUtils$$.$getZoomDirection$($chart$$231$$);
  return $DvtChartTypeUtils$$.$isPolar$($chart$$231$$) ? $JSCompiler_alias_FALSE$$ : $DvtChartTypeUtils$$.$isBLAC$($chart$$231$$) && $DvtChartTypeUtils$$.$isVertical$($chart$$231$$) || $DvtChartTypeUtils$$.$isScatterBubble$($chart$$231$$) && "y" != $direction$$10$$
};
$DvtChartTypeUtils$$.$isVertScrollbarSupported$ = function $$DvtChartTypeUtils$$$$isVertScrollbarSupported$$($chart$$232$$) {
  var $direction$$11$$ = $DvtChartEventUtils$$.$getZoomDirection$($chart$$232$$);
  return $DvtChartTypeUtils$$.$isPolar$($chart$$232$$) ? $JSCompiler_alias_FALSE$$ : $DvtChartTypeUtils$$.$isBLAC$($chart$$232$$) && $DvtChartTypeUtils$$.$isHorizontal$($chart$$232$$) || $DvtChartTypeUtils$$.$isScatterBubble$($chart$$232$$) && "x" != $direction$$11$$
};
$DvtChartTypeUtils$$.$hasAxes$ = function $$DvtChartTypeUtils$$$$hasAxes$$($chart$$233$$) {
  return!("pie" == $chart$$233$$.$getType$() || "funnel" == $chart$$233$$.$getType$())
};
$DvtChartTypeUtils$$.$hasY2DataOnly$ = function $$DvtChartTypeUtils$$$$hasY2DataOnly$$($chart$$234$$) {
  return!$DvtChartTypeUtils$$.$isDualY$($chart$$234$$) ? $JSCompiler_alias_FALSE$$ : $DvtChartDataUtils$$.$getY2SeriesCount$($chart$$234$$) == $DvtChartDataUtils$$.$getSeriesCount$($chart$$234$$)
};
$DvtChartTypeUtils$$.$hasY2Data$ = function $$DvtChartTypeUtils$$$$hasY2Data$$($chart$$235$$) {
  return!$DvtChartTypeUtils$$.$isDualY$($chart$$235$$) ? $JSCompiler_alias_FALSE$$ : 0 < $DvtChartDataUtils$$.$getY2SeriesCount$($chart$$235$$)
};
$DvtChartTypeUtils$$.$hasY2BarData$ = function $$DvtChartTypeUtils$$$$hasY2BarData$$($chart$$236$$) {
  return $DvtChartTypeUtils$$.$hasY2Data$($chart$$236$$)
};
$DvtChartTypeUtils$$.$hasBarSeries$ = function $$DvtChartTypeUtils$$$$hasBarSeries$$($chart$$237$$) {
  return $DvtChartTypeUtils$$.$_hasSeriesType$($chart$$237$$, "bar")
};
$DvtChartTypeUtils$$.$hasCandlestickSeries$ = function $$DvtChartTypeUtils$$$$hasCandlestickSeries$$($chart$$238$$) {
  return $DvtChartTypeUtils$$.$_hasSeriesType$($chart$$238$$, "candlestick")
};
$DvtChartTypeUtils$$.$hasLineSeries$ = function $$DvtChartTypeUtils$$$$hasLineSeries$$($chart$$239$$) {
  return $DvtChartTypeUtils$$.$_hasSeriesType$($chart$$239$$, "line")
};
$DvtChartTypeUtils$$.$hasAreaSeries$ = function $$DvtChartTypeUtils$$$$hasAreaSeries$$($chart$$240$$) {
  return $DvtChartTypeUtils$$.$_hasSeriesType$($chart$$240$$, "area")
};
$DvtChartTypeUtils$$.$hasLineWithAreaSeries$ = function $$DvtChartTypeUtils$$$$hasLineWithAreaSeries$$($chart$$241$$) {
  return $DvtChartTypeUtils$$.$_hasSeriesType$($chart$$241$$, "lineWithArea")
};
$DvtChartTypeUtils$$.$_hasSeriesType$ = function $$DvtChartTypeUtils$$$$_hasSeriesType$$($chart$$242$$, $type$$126$$) {
  if($DvtChartTypeUtils$$.$isBLAC$($chart$$242$$)) {
    for(var $seriesCount$$12$$ = $DvtChartDataUtils$$.$getSeriesCount$($chart$$242$$), $seriesIndex$$91$$ = 0;$seriesIndex$$91$$ < $seriesCount$$12$$;$seriesIndex$$91$$++) {
      if($DvtChartStyleUtils$$.$isSeriesRendered$($chart$$242$$, $seriesIndex$$91$$) && $DvtChartStyleUtils$$.$getSeriesType$($chart$$242$$, $seriesIndex$$91$$) == $type$$126$$) {
        return $JSCompiler_alias_TRUE$$
      }
    }
  }
  return $JSCompiler_alias_FALSE$$
};
$DvtChartTypeUtils$$.$hasCenteredSeries$ = function $$DvtChartTypeUtils$$$$hasCenteredSeries$$($chart$$243$$) {
  if(!$DvtChartTypeUtils$$.$isBLAC$($chart$$243$$)) {
    return $JSCompiler_alias_FALSE$$
  }
  for(var $seriesCount$$13$$ = $DvtChartDataUtils$$.$getSeriesCount$($chart$$243$$), $seriesIndex$$92$$ = 0;$seriesIndex$$92$$ < $seriesCount$$13$$;$seriesIndex$$92$$++) {
    if($DvtChartStyleUtils$$.$isSeriesRendered$($chart$$243$$, $seriesIndex$$92$$) && "bar" != $DvtChartStyleUtils$$.$getSeriesType$($chart$$243$$, $seriesIndex$$92$$)) {
      var $lineType$$2$$ = $DvtChartStyleUtils$$.$getLineType$($chart$$243$$, $seriesIndex$$92$$);
      if("centeredSegmented" == $lineType$$2$$ || "centeredStepped" == $lineType$$2$$) {
        return $JSCompiler_alias_TRUE$$
      }
    }
  }
  return $JSCompiler_alias_FALSE$$
};
$DvtChartTypeUtils$$.$hasUncenteredSeries$ = function $$DvtChartTypeUtils$$$$hasUncenteredSeries$$($chart$$244$$) {
  if(!$DvtChartTypeUtils$$.$isBLAC$($chart$$244$$)) {
    return $JSCompiler_alias_FALSE$$
  }
  for(var $seriesCount$$14$$ = $DvtChartDataUtils$$.$getSeriesCount$($chart$$244$$), $seriesIndex$$93$$ = 0;$seriesIndex$$93$$ < $seriesCount$$14$$;$seriesIndex$$93$$++) {
    if($DvtChartStyleUtils$$.$isSeriesRendered$($chart$$244$$, $seriesIndex$$93$$) && "bar" != $DvtChartStyleUtils$$.$getSeriesType$($chart$$244$$, $seriesIndex$$93$$)) {
      var $lineType$$3$$ = $DvtChartStyleUtils$$.$getLineType$($chart$$244$$, $seriesIndex$$93$$);
      if("segmented" == $lineType$$3$$ || "stepped" == $lineType$$3$$) {
        return $JSCompiler_alias_TRUE$$
      }
    }
  }
  return $JSCompiler_alias_FALSE$$
};
$DvtChartTypeUtils$$.$isStandalonePlotArea$ = function $$DvtChartTypeUtils$$$$isStandalonePlotArea$$($chart$$245$$) {
  var $options$$82$$ = $chart$$245$$.$getOptions$();
  return $DvtChartTextUtils$$.$areTitlesRendered$($chart$$245$$) || "off" != $options$$82$$.legend.rendered || $DvtChartAxisUtils$$.$isAxisRendered$($chart$$245$$, "x") || $DvtChartAxisUtils$$.$isAxisRendered$($chart$$245$$, "y") || $DvtChartAxisUtils$$.$isAxisRendered$($chart$$245$$, "y2") ? $JSCompiler_alias_FALSE$$ : $JSCompiler_alias_TRUE$$
};
$DvtChartTypeUtils$$.$isStandaloneXAxis$ = function $$DvtChartTypeUtils$$$$isStandaloneXAxis$$($chart$$246$$) {
  var $options$$83$$ = $chart$$246$$.$getOptions$();
  return $DvtChartTextUtils$$.$areTitlesRendered$($chart$$246$$) || "off" != $options$$83$$.legend.rendered || "off" != $options$$83$$.plotArea.rendered || $DvtChartAxisUtils$$.$isAxisRendered$($chart$$246$$, "y") || $DvtChartAxisUtils$$.$isAxisRendered$($chart$$246$$, "y2") ? $JSCompiler_alias_FALSE$$ : $JSCompiler_alias_TRUE$$
};
$DvtChartTypeUtils$$.$isStandaloneYAxis$ = function $$DvtChartTypeUtils$$$$isStandaloneYAxis$$($chart$$247$$) {
  var $options$$84$$ = $chart$$247$$.$getOptions$();
  return $DvtChartTextUtils$$.$areTitlesRendered$($chart$$247$$) || "off" != $options$$84$$.legend.rendered || $DvtChartAxisUtils$$.$isAxisRendered$($chart$$247$$, "x") || "off" != $options$$84$$.plotArea.rendered || $DvtChartAxisUtils$$.$isAxisRendered$($chart$$247$$, "y2") ? $JSCompiler_alias_FALSE$$ : $JSCompiler_alias_TRUE$$
};
$DvtChartTypeUtils$$.$isStandaloneY2Axis$ = function $$DvtChartTypeUtils$$$$isStandaloneY2Axis$$($chart$$248$$) {
  var $options$$85$$ = $chart$$248$$.$getOptions$();
  return $DvtChartTextUtils$$.$areTitlesRendered$($chart$$248$$) || "off" != $options$$85$$.legend.rendered || $DvtChartAxisUtils$$.$isAxisRendered$($chart$$248$$, "x") || $DvtChartAxisUtils$$.$isAxisRendered$($chart$$248$$, "y") || "off" != $options$$85$$.plotArea.rendered ? $JSCompiler_alias_FALSE$$ : $JSCompiler_alias_TRUE$$
};
var $DvtChartMarkerUtils$$ = {};
dvt.$Obj$.$createSubclass$($DvtChartMarkerUtils$$, dvt.$Obj$);
$DvtChartMarkerUtils$$.$_MIN_RADIUS$ = 2.5;
$DvtChartMarkerUtils$$.$_MAX_RADIUS_PERCENT$ = 0.125;
$DvtChartMarkerUtils$$.$_DEFAULT_MARKER_SIZE_PERCENT$ = 0.2;
$DvtChartMarkerUtils$$.$calcBubbleSizes$ = function $$DvtChartMarkerUtils$$$$calcBubbleSizes$$($chart$$249$$, $width$$39$$, $height$$34$$) {
  var $isPolar$$4$$ = $DvtChartTypeUtils$$.$isPolar$($chart$$249$$), $minMax$$5_xAxisValueRange$$ = $DvtChartDataUtils$$.$getMinMaxValue$($chart$$249$$, "z"), $minValue$$4$$ = $minMax$$5_xAxisValueRange$$.min, $maxValue$$4_valueRange$$ = $minMax$$5_xAxisValueRange$$.max, $minMax$$5_xAxisValueRange$$ = $DvtChartMarkerUtils$$.$_getAxisValueRange$($chart$$249$$, "x"), $yAxisValueRange$$ = $DvtChartMarkerUtils$$.$_getAxisValueRange$($chart$$249$$, "y"), $axisWidth$$1$$, $axisHeight$$;
  $isPolar$$4$$ ? ($axisWidth$$1$$ = Infinity, $axisHeight$$ = $chart$$249$$.$getRadius$()) : ($axisWidth$$1$$ = $width$$39$$ - 2.4 * $DvtChartAxisUtils$$.$getTickLabelHeight$($chart$$249$$, "y"), $axisHeight$$ = $height$$34$$ - 1.6 * $DvtChartAxisUtils$$.$getTickLabelHeight$($chart$$249$$, "x"));
  var $minArea$$ = Math.PI * Math.pow($DvtChartMarkerUtils$$.$_MIN_RADIUS$, 2), $areaRange_maxRadius_minMaxArea$$ = $DvtChartMarkerUtils$$.$_MAX_RADIUS_PERCENT$ * Math.min($width$$39$$, $height$$34$$), $maxArea_maxMarkerSize_seriesCount$$15$$ = Math.PI * Math.pow($areaRange_maxRadius_minMaxArea$$, 2), $areaRange_maxRadius_minMaxArea$$ = $DvtChartMarkerUtils$$.$_adjustBubbleSizeRangeForCount$($chart$$249$$, $minArea$$, $maxArea_maxMarkerSize_seriesCount$$15$$, $minValue$$4$$, $maxValue$$4_valueRange$$), 
  $minArea$$ = $areaRange_maxRadius_minMaxArea$$.minArea, $maxArea_maxMarkerSize_seriesCount$$15$$ = $areaRange_maxRadius_minMaxArea$$.maxArea, $areaRange_maxRadius_minMaxArea$$ = $DvtChartMarkerUtils$$.$_adjustBubbleSizeRangeForDataRange$($minArea$$, $maxArea_maxMarkerSize_seriesCount$$15$$, $minValue$$4$$, $maxValue$$4_valueRange$$), $minArea$$ = $areaRange_maxRadius_minMaxArea$$.minArea, $maxArea_maxMarkerSize_seriesCount$$15$$ = $areaRange_maxRadius_minMaxArea$$.maxArea, $maxValue$$4_valueRange$$ = 
  $maxValue$$4_valueRange$$ - $minValue$$4$$, $areaRange_maxRadius_minMaxArea$$ = $maxArea_maxMarkerSize_seriesCount$$15$$ - $minArea$$, $maxArea_maxMarkerSize_seriesCount$$15$$ = 2 * Math.sqrt($maxArea_maxMarkerSize_seriesCount$$15$$ / Math.PI);
  $axisWidth$$1$$ -= 0.75 * $maxArea_maxMarkerSize_seriesCount$$15$$;
  $axisHeight$$ -= 0.75 * $maxArea_maxMarkerSize_seriesCount$$15$$;
  for(var $maxArea_maxMarkerSize_seriesCount$$15$$ = $DvtChartDataUtils$$.$getSeriesCount$($chart$$249$$), $seriesIndex$$94$$ = 0;$seriesIndex$$94$$ < $maxArea_maxMarkerSize_seriesCount$$15$$;$seriesIndex$$94$$++) {
    if($DvtChartStyleUtils$$.$isSeriesRendered$($chart$$249$$, $seriesIndex$$94$$)) {
      for(var $seriesItem$$25$$ = $DvtChartDataUtils$$.$getSeriesItem$($chart$$249$$, $seriesIndex$$94$$), $numGroups$$2$$ = $seriesItem$$25$$.items ? $seriesItem$$25$$.items.length : 0, $j$$58$$ = 0;$j$$58$$ < $numGroups$$2$$;$j$$58$$++) {
        var $dataItem$$30$$ = $seriesItem$$25$$.items[$j$$58$$];
        $dataItem$$30$$ && $dataItem$$30$$.z && ($dataItem$$30$$.markerSize = 0 < $maxValue$$4_valueRange$$ ? 2 * Math.sqrt(($minArea$$ + ($dataItem$$30$$.z - $minValue$$4$$) / $maxValue$$4_valueRange$$ * $areaRange_maxRadius_minMaxArea$$) / Math.PI) : $DvtChartMarkerUtils$$.$_DEFAULT_MARKER_SIZE_PERCENT$ * Math.min($width$$39$$, $height$$34$$), $dataItem$$30$$._xAxisRadius = 0 < $minMax$$5_xAxisValueRange$$ ? 0.5 * ($dataItem$$30$$.markerSize / $axisWidth$$1$$) * $minMax$$5_xAxisValueRange$$ : $isPolar$$4$$ ? 
        0 : 29, $dataItem$$30$$._yAxisRadius = 0 < $yAxisValueRange$$ ? 0.5 * ($dataItem$$30$$.markerSize / $axisHeight$$) * $yAxisValueRange$$ : 29)
      }
    }
  }
};
$DvtChartMarkerUtils$$.$_getAxisValueRange$ = function $$DvtChartMarkerUtils$$$$_getAxisValueRange$$($chart$$250$$, $type$$127$$) {
  var $axisOptions$$9_max$$12$$ = $chart$$250$$.$getOptions$()[$type$$127$$ + "Axis"], $isLog$$3$$ = $DvtChartAxisUtils$$.$isLog$($chart$$250$$, $type$$127$$), $zeroBaseline$$ = !$isLog$$3$$ && "zero" == $DvtChartAxisUtils$$.$getBaselineScaling$($chart$$250$$, $type$$127$$), $minMax$$6$$ = $DvtChartDataUtils$$.$getMinMaxValue$($chart$$250$$, $type$$127$$, $JSCompiler_alias_TRUE$$), $min$$12$$ = $axisOptions$$9_max$$12$$.min;
  $min$$12$$ == $JSCompiler_alias_NULL$$ && ($min$$12$$ = $zeroBaseline$$ ? Math.min(0, $minMax$$6$$.min) : $minMax$$6$$.min);
  $axisOptions$$9_max$$12$$ = $axisOptions$$9_max$$12$$.max;
  $axisOptions$$9_max$$12$$ == $JSCompiler_alias_NULL$$ && ($axisOptions$$9_max$$12$$ = $zeroBaseline$$ ? Math.max(0, $minMax$$6$$.max) : $minMax$$6$$.max);
  return $isLog$$3$$ && 0 < $axisOptions$$9_max$$12$$ && 0 < $min$$12$$ ? $axisOptions$$9_max$$12$$ == $min$$12$$ ? 6 : dvt.$Math$.$log10$($axisOptions$$9_max$$12$$ / $min$$12$$) : $axisOptions$$9_max$$12$$ == $min$$12$$ ? 60 : $axisOptions$$9_max$$12$$ - $min$$12$$
};
$DvtChartMarkerUtils$$.$_adjustBubbleSizeRangeForCount$ = function $$DvtChartMarkerUtils$$$$_adjustBubbleSizeRangeForCount$$($avgRelSize_chart$$251_s2$$1$$, $minArea$$1$$, $maxArea$$1$$, $minValue$$5_s1_t1$$1$$, $maxValue$$5_t2$$1$$) {
  for(var $bubbleCount$$ = 0, $sizeTotal$$ = 0, $seriesCount$$16$$ = $DvtChartDataUtils$$.$getSeriesCount$($avgRelSize_chart$$251_s2$$1$$), $seriesIndex$$95$$ = 0;$seriesIndex$$95$$ < $seriesCount$$16$$;$seriesIndex$$95$$++) {
    if($DvtChartStyleUtils$$.$isSeriesRendered$($avgRelSize_chart$$251_s2$$1$$, $seriesIndex$$95$$)) {
      for(var $seriesItem$$26$$ = $DvtChartDataUtils$$.$getSeriesItem$($avgRelSize_chart$$251_s2$$1$$, $seriesIndex$$95$$), $numDataItems$$ = $seriesItem$$26$$.items.length, $j$$59$$ = 0;$j$$59$$ < $numDataItems$$;$j$$59$$++) {
        var $dataItem$$31$$ = $seriesItem$$26$$.items[$seriesIndex$$95$$];
        $dataItem$$31$$ && $dataItem$$31$$.z && ($bubbleCount$$++, $sizeTotal$$ += $dataItem$$31$$.z)
      }
    }
  }
  $avgRelSize_chart$$251_s2$$1$$ = ($sizeTotal$$ / $bubbleCount$$ - $minValue$$5_s1_t1$$1$$) / ($maxValue$$5_t2$$1$$ - $minValue$$5_s1_t1$$1$$);
  $minValue$$5_s1_t1$$1$$ = 15 + Math.floor(30 * (1 - $avgRelSize_chart$$251_s2$$1$$));
  $maxValue$$5_t2$$1$$ = 30 + Math.floor(150 * (1 - $avgRelSize_chart$$251_s2$$1$$));
  $bubbleCount$$ >= $maxValue$$5_t2$$1$$ ? $maxArea$$1$$ = $minArea$$1$$ + 0.15 * ($maxArea$$1$$ - $minArea$$1$$) : $bubbleCount$$ >= $minValue$$5_s1_t1$$1$$ && ($maxArea$$1$$ -= 0.85 / ($maxValue$$5_t2$$1$$ - $minValue$$5_s1_t1$$1$$) * ($bubbleCount$$ - $minValue$$5_s1_t1$$1$$) * ($maxArea$$1$$ - $minArea$$1$$));
  $minValue$$5_s1_t1$$1$$ = 5 + Math.floor(15 * (1 - $avgRelSize_chart$$251_s2$$1$$));
  $avgRelSize_chart$$251_s2$$1$$ = 30 + Math.floor(70 * (1 - $avgRelSize_chart$$251_s2$$1$$));
  $bubbleCount$$ < $minValue$$5_s1_t1$$1$$ ? $minArea$$1$$ += 0.005 * ($maxArea$$1$$ - $minArea$$1$$) : $bubbleCount$$ < $avgRelSize_chart$$251_s2$$1$$ && ($minArea$$1$$ += (0.005 - 0.005 / ($avgRelSize_chart$$251_s2$$1$$ - $minValue$$5_s1_t1$$1$$) * ($bubbleCount$$ - $minValue$$5_s1_t1$$1$$)) * ($maxArea$$1$$ - $minArea$$1$$));
  return{minArea:$minArea$$1$$, maxArea:$maxArea$$1$$}
};
$DvtChartMarkerUtils$$.$_adjustBubbleSizeRangeForDataRange$ = function $$DvtChartMarkerUtils$$$$_adjustBubbleSizeRangeForDataRange$$($minArea$$2$$, $maxArea$$2$$, $buffer$$8_minValue$$6$$, $maxValue$$6$$) {
  if(0 != $maxValue$$6$$ - $buffer$$8_minValue$$6$$) {
    var $bubbleRatio$$ = $maxArea$$2$$ / $minArea$$2$$, $dataRatio$$ = $bubbleRatio$$;
    0 < $maxValue$$6$$ && 0 < $buffer$$8_minValue$$6$$ ? $dataRatio$$ = $maxValue$$6$$ / $buffer$$8_minValue$$6$$ : 0 > $buffer$$8_minValue$$6$$ && 0 > $maxValue$$6$$ && ($dataRatio$$ = $buffer$$8_minValue$$6$$ / $maxValue$$6$$);
    $dataRatio$$ < $bubbleRatio$$ && ($buffer$$8_minValue$$6$$ = $maxArea$$2$$ / $dataRatio$$ - $minArea$$2$$, 0 < $buffer$$8_minValue$$6$$ && ($minArea$$2$$ += $buffer$$8_minValue$$6$$))
  }else {
    $minArea$$2$$ = $maxArea$$2$$
  }
  return{minArea:$minArea$$2$$, maxArea:$maxArea$$2$$}
};
$DvtChartMarkerUtils$$.$sortMarkers$ = function $$DvtChartMarkerUtils$$$$sortMarkers$$($markers$$1$$) {
  $markers$$1$$.sort($DvtChartMarkerUtils$$.$_compareSize$)
};
$DvtChartMarkerUtils$$.$_compareSize$ = function $$DvtChartMarkerUtils$$$$_compareSize$$($a$$32$$, $b$$9$$) {
  var $aSize$$ = $a$$32$$.$getSize$ ? $a$$32$$.$getSize$() : $a$$32$$.size, $bSize$$ = $b$$9$$.$getSize$ ? $b$$9$$.$getSize$() : $b$$9$$.size;
  return $aSize$$ > $bSize$$ ? -1 : $aSize$$ < $bSize$$ ? 1 : 0
};
$DvtChartMarkerUtils$$.$checkPixelMap$ = function $$DvtChartMarkerUtils$$$$checkPixelMap$$($pixelMap$$, $markerX_x2$$19$$, $markerY_y2$$14$$, $markerSize$$4_x1$$21$$) {
  var $halfSize$$ = $markerSize$$4_x1$$21$$ / 2;
  $markerSize$$4_x1$$21$$ = Math.max(Math.floor($markerX_x2$$19$$ - $halfSize$$), 0);
  var $y1$$15$$ = Math.max(Math.floor($markerY_y2$$14$$ - $halfSize$$), 0);
  $markerX_x2$$19$$ = Math.max(Math.ceil($markerX_x2$$19$$ + $halfSize$$), 0);
  $markerY_y2$$14$$ = Math.max(Math.ceil($markerY_y2$$14$$ + $halfSize$$), 0);
  return $pixelMap$$.$isObscured$($markerSize$$4_x1$$21$$, $y1$$15$$, $markerX_x2$$19$$, $markerY_y2$$14$$)
};
$DvtChartMarkerUtils$$.$updatePixelMap$ = function $$DvtChartMarkerUtils$$$$updatePixelMap$$($pixelMap$$1$$, $markerX$$1_x2$$20$$, $markerY$$1_y2$$15$$, $markerSize$$5_x1$$22$$, $alpha$$14$$) {
  var $halfSize$$1$$ = 0.4 * $markerSize$$5_x1$$22$$;
  $markerSize$$5_x1$$22$$ = Math.max(Math.round($markerX$$1_x2$$20$$ - $halfSize$$1$$), 0);
  $markerX$$1_x2$$20$$ = Math.max(Math.round($markerX$$1_x2$$20$$ + $halfSize$$1$$), 0);
  var $y1$$16$$ = Math.max(Math.round($markerY$$1_y2$$15$$ - $halfSize$$1$$), 0);
  $markerY$$1_y2$$15$$ = Math.max(Math.round($markerY$$1_y2$$15$$ + $halfSize$$1$$), 0);
  $pixelMap$$1$$.$obscure$($markerSize$$5_x1$$22$$, $y1$$16$$, $markerX$$1_x2$$20$$, $markerY$$1_y2$$15$$, $alpha$$14$$)
};
var $DvtChartPieUtils$$ = {};
dvt.$Obj$.$createSubclass$($DvtChartPieUtils$$, dvt.$Obj$);
$DvtChartPieUtils$$.$OTHER_SLICE_SERIES_ID$ = "_dvtOther";
$DvtChartPieUtils$$.$getSliceId$ = function $$DvtChartPieUtils$$$$getSliceId$$($chart$$253$$, $seriesIndex$$96$$) {
  var $dataItem$$32_id$$102$$ = $DvtChartDataUtils$$.$getDataItem$($chart$$253$$, $seriesIndex$$96$$, 0), $dataItem$$32_id$$102$$ = $dataItem$$32_id$$102$$ ? $dataItem$$32_id$$102$$.id : $JSCompiler_alias_NULL$$, $series$$14$$ = $DvtChartDataUtils$$.$getSeries$($chart$$253$$, $seriesIndex$$96$$), $group$$24$$ = $DvtChartDataUtils$$.$getGroup$($chart$$253$$, 0);
  return new $DvtChartDataItem$$($dataItem$$32_id$$102$$, $series$$14$$, $group$$24$$)
};
$DvtChartPieUtils$$.$getOtherSliceId$ = function $$DvtChartPieUtils$$$$getOtherSliceId$$($chart$$254_group$$25$$) {
  $chart$$254_group$$25$$ = $DvtChartDataUtils$$.$getGroup$($chart$$254_group$$25$$, 0);
  return new $DvtChartDataItem$$($JSCompiler_alias_NULL$$, $DvtChartPieUtils$$.$OTHER_SLICE_SERIES_ID$, $chart$$254_group$$25$$)
};
$DvtChartPieUtils$$.$getRenderedSeriesIndices$ = function $$DvtChartPieUtils$$$$getRenderedSeriesIndices$$($chart$$255$$) {
  return $DvtChartPieUtils$$.$_getSeriesIndicesArrays$($chart$$255$$).$rendered$
};
$DvtChartPieUtils$$.$hasOtherSeries$ = function $$DvtChartPieUtils$$$$hasOtherSeries$$($chart$$256$$) {
  return 0 < $DvtChartPieUtils$$.$_getSeriesIndicesArrays$($chart$$256$$).$other$.length
};
$DvtChartPieUtils$$.$getOtherValue$ = function $$DvtChartPieUtils$$$$getOtherValue$$($chart$$257$$) {
  for(var $otherSeries$$ = $DvtChartPieUtils$$.$_getSeriesIndicesArrays$($chart$$257$$).$other$, $otherValue$$2$$ = 0, $i$$356$$ = 0;$i$$356$$ < $otherSeries$$.length;$i$$356$$++) {
    var $seriesIndex$$97_value$$120$$ = $otherSeries$$[$i$$356$$];
    $DvtChartStyleUtils$$.$isSeriesRendered$($chart$$257$$, $seriesIndex$$97_value$$120$$) && ($seriesIndex$$97_value$$120$$ = $DvtChartDataUtils$$.getValue($chart$$257$$, $seriesIndex$$97_value$$120$$, 0), 0 < $seriesIndex$$97_value$$120$$ && ($otherValue$$2$$ += $seriesIndex$$97_value$$120$$))
  }
  return $otherValue$$2$$
};
$DvtChartPieUtils$$.$getOtherSliceIds$ = function $$DvtChartPieUtils$$$$getOtherSliceIds$$($chart$$258$$) {
  for(var $otherSeries$$1$$ = $DvtChartPieUtils$$.$_getSeriesIndicesArrays$($chart$$258$$).$other$, $seriesIds$$ = [], $i$$357$$ = 0;$i$$357$$ < $otherSeries$$1$$.length;$i$$357$$++) {
    $seriesIds$$.push($DvtChartPieUtils$$.$getSliceId$($chart$$258$$, $otherSeries$$1$$[$i$$357$$]))
  }
  return $seriesIds$$
};
$DvtChartPieUtils$$.$isOtherSliceSelected$ = function $$DvtChartPieUtils$$$$isOtherSliceSelected$$($chart$$259$$, $selected$$21$$) {
  for(var $otherIds$$ = $DvtChartPieUtils$$.$getOtherSliceIds$($chart$$259$$), $j$$60$$ = 0;$j$$60$$ < $otherIds$$.length;$j$$60$$++) {
    for(var $sliceId$$ = $otherIds$$[$j$$60$$], $sliceSelected$$ = $JSCompiler_alias_FALSE$$, $i$$358$$ = 0;$i$$358$$ < $selected$$21$$.length;$i$$358$$++) {
      if($selected$$21$$[$i$$358$$].id && $sliceId$$.getId() === $selected$$21$$[$i$$358$$].id || $sliceId$$.$getSeries$() === $selected$$21$$[$i$$358$$].series && $sliceId$$.$getGroup$() === $selected$$21$$[$i$$358$$].group) {
        $sliceSelected$$ = $JSCompiler_alias_TRUE$$;
        break
      }
    }
    if(!$sliceSelected$$) {
      return $JSCompiler_alias_FALSE$$
    }
  }
  return $JSCompiler_alias_TRUE$$
};
$DvtChartPieUtils$$.$_getSeriesIndicesArrays$ = function $$DvtChartPieUtils$$$$_getSeriesIndicesArrays$$($chart$$260$$) {
  for(var $renderedSeries$$ = [], $otherSeries$$2$$ = [], $seriesCount$$17$$ = $DvtChartDataUtils$$.$getSeriesCount$($chart$$260$$), $options$$86$$ = $chart$$260$$.$getOptions$(), $otherThreshold$$ = $options$$86$$.otherThreshold * $DvtChartPieUtils$$.$getTotalValue$($chart$$260$$), $seriesIndex$$99$$ = 0;$seriesIndex$$99$$ < $seriesCount$$17$$;$seriesIndex$$99$$++) {
    var $value$$121$$ = $DvtChartDataUtils$$.getValue($chart$$260$$, $seriesIndex$$99$$, 0);
    0 < $otherThreshold$$ && $value$$121$$ < $otherThreshold$$ ? $otherSeries$$2$$.push($seriesIndex$$99$$) : $renderedSeries$$.push($seriesIndex$$99$$)
  }
  "ascending" == $options$$86$$.sorting ? $renderedSeries$$.sort(function($renderedSeries$$, $otherSeries$$2$$) {
    return $DvtChartDataUtils$$.getValue($chart$$260$$, $renderedSeries$$, 0) - $DvtChartDataUtils$$.getValue($chart$$260$$, $otherSeries$$2$$, 0)
  }) : ("on" == $options$$86$$.sorting || "descending" == $options$$86$$.sorting) && $renderedSeries$$.sort(function($renderedSeries$$, $otherSeries$$2$$) {
    return $DvtChartDataUtils$$.getValue($chart$$260$$, $otherSeries$$2$$, 0) - $DvtChartDataUtils$$.getValue($chart$$260$$, $renderedSeries$$, 0)
  });
  return{$rendered$:$renderedSeries$$, $other$:$otherSeries$$2$$}
};
$DvtChartPieUtils$$.$getTotalValue$ = function $$DvtChartPieUtils$$$$getTotalValue$$($chart$$261$$) {
  for(var $seriesCount$$18$$ = $DvtChartDataUtils$$.$getSeriesCount$($chart$$261$$), $totalValue$$ = 0, $seriesIndex$$100$$ = 0;$seriesIndex$$100$$ < $seriesCount$$18$$;$seriesIndex$$100$$++) {
    var $value$$122$$ = $DvtChartDataUtils$$.getValue($chart$$261$$, $seriesIndex$$100$$, 0);
    0 < $value$$122$$ && ($totalValue$$ += $value$$122$$)
  }
  return $totalValue$$
};
$DvtChartPieUtils$$.$getSliceExplode$ = function $$DvtChartPieUtils$$$$getSliceExplode$$($chart$$262$$, $seriesIndex$$101$$) {
  var $seriesItem$$27$$ = $DvtChartDataUtils$$.$getSeriesItem$($chart$$262$$, $seriesIndex$$101$$);
  return $seriesItem$$27$$ && $seriesItem$$27$$.pieSliceExplode ? $seriesItem$$27$$.pieSliceExplode : 0
};
$DvtChartPieUtils$$.$getOtherSliceShowPopupBehaviors$ = function $$DvtChartPieUtils$$$$getOtherSliceShowPopupBehaviors$$($chart$$263$$) {
  var $firstDataItemSeriesIndex_otherSliceIds_stampId$$11$$ = $DvtChartPieUtils$$.$getOtherSliceIds$($chart$$263$$);
  if($firstDataItemSeriesIndex_otherSliceIds_stampId$$11$$ && 1 <= $firstDataItemSeriesIndex_otherSliceIds_stampId$$11$$.length) {
    return $firstDataItemSeriesIndex_otherSliceIds_stampId$$11$$ = $DvtChartDataUtils$$.$getSeriesIndex$($chart$$263$$, $firstDataItemSeriesIndex_otherSliceIds_stampId$$11$$[0].$getSeries$()), $firstDataItemSeriesIndex_otherSliceIds_stampId$$11$$ = $DvtChartDataUtils$$.$getDataItem$($chart$$263$$, $firstDataItemSeriesIndex_otherSliceIds_stampId$$11$$, 0)._id, $chart$$263$$.$getShowPopupBehaviors$($firstDataItemSeriesIndex_otherSliceIds_stampId$$11$$)
  }
};
$DvtChartPieUtils$$.$getSliceBySeriesIndex$ = function $$DvtChartPieUtils$$$$getSliceBySeriesIndex$$($chart$$264$$, $seriesIndex$$102$$) {
  for(var $slices$$6$$ = $chart$$264$$.$pieChart$.$_slices$, $i$$359$$ = 0;$i$$359$$ < $slices$$6$$.length;$i$$359$$++) {
    if($slices$$6$$[$i$$359$$].$getSeriesIndex$() == $seriesIndex$$102$$) {
      return $slices$$6$$[$i$$359$$]
    }
  }
  return $JSCompiler_alias_NULL$$
};
function $DvtChartPieRenderUtils$$() {
}
dvt.$Obj$.$createSubclass$($DvtChartPieRenderUtils$$, dvt.$Obj$);
$DvtChartPieRenderUtils$$.$TWOD$ = "2D";
$DvtChartPieRenderUtils$$.$THREED$ = "3D";
$DvtChartPieRenderUtils$$.$CRUST$ = "CRUST";
$DvtChartPieRenderUtils$$.$SIDE$ = "SIDE";
$DvtChartPieRenderUtils$$.$BORDER$ = "BORDER";
$DvtChartPieRenderUtils$$.$SURFACE_CRUST$ = 0;
$DvtChartPieRenderUtils$$.$SURFACE_LEFT$ = 1;
$DvtChartPieRenderUtils$$.$SURFACE_RIGHT$ = 2;
$DvtChartPieRenderUtils$$.$SURFACE_TOP$ = 3;
$DvtChartPieRenderUtils$$.$reflectAngleOverYAxis$ = function $$DvtChartPieRenderUtils$$$$reflectAngleOverYAxis$$($angle$$20_radian$$1$$, $cx$$9$$, $cy$$10$$, $rx$$10$$, $ry$$6$$) {
  $angle$$20_radian$$1$$ = dvt.$Math$.$degreesToRads$(360 - $angle$$20_radian$$1$$);
  return{x:$cx$$9$$ + Math.cos($angle$$20_radian$$1$$) * $rx$$10$$, y:$cy$$10$$ + Math.sin($angle$$20_radian$$1$$) * $ry$$6$$}
};
$DvtChartPieRenderUtils$$.$getGradientColors$ = function $$DvtChartPieRenderUtils$$$$getGradientColors$$($baseColor_c3$$, $arColors$$5_style$$60$$, $c$$4_skin$$3$$) {
  if($c$$4_skin$$3$$ && $c$$4_skin$$3$$ != dvt.$CSSStyle$.$SKIN_SKYROS$) {
    if($arColors$$5_style$$60$$ == $DvtChartPieRenderUtils$$.$TWOD$ || $arColors$$5_style$$60$$ == $DvtChartPieRenderUtils$$.$THREED$) {
      return[dvt.$ColorUtils$.$adjustHSL$($baseColor_c3$$, -0.04, -0.05), dvt.$ColorUtils$.$adjustHSL$($baseColor_c3$$, -0.09, 0.04)]
    }
    if($arColors$$5_style$$60$$ == $DvtChartPieRenderUtils$$.$CRUST$) {
      return[dvt.$ColorUtils$.$adjustHSL$($baseColor_c3$$, -0.04, -0.05), dvt.$ColorUtils$.$adjustHSL$($baseColor_c3$$, 0, -0.14)]
    }
    if($arColors$$5_style$$60$$ == $DvtChartPieRenderUtils$$.$SIDE$) {
      return[dvt.$ColorUtils$.$adjustHSL$($baseColor_c3$$, -0.1, 0.06), dvt.$ColorUtils$.$adjustHSL$($baseColor_c3$$, -0.04, -0.05)]
    }
  }else {
    if($arColors$$5_style$$60$$ == $DvtChartPieRenderUtils$$.$TWOD$) {
      return $arColors$$5_style$$60$$ = [], $arColors$$5_style$$60$$[0] = dvt.$ColorUtils$.$getRGB$(dvt.$ColorUtils$.$getPastel$($baseColor_c3$$, 0.1)), $arColors$$5_style$$60$$[1] = $arColors$$5_style$$60$$[0], $arColors$$5_style$$60$$[2] = dvt.$ColorUtils$.$getRGB$(dvt.$ColorUtils$.$getDarker$($baseColor_c3$$, 0.9)), $arColors$$5_style$$60$$
    }
    if($arColors$$5_style$$60$$ == $DvtChartPieRenderUtils$$.$BORDER$) {
      return["#FFFFFF", "#000000", "#000000"]
    }
    $c$$4_skin$$3$$ = dvt.$ColorUtils$.$getRGB$(dvt.$ColorUtils$.$getDarker$($baseColor_c3$$, 0.88));
    var $c1$$2$$ = dvt.$ColorUtils$.$getRGB$(dvt.$ColorUtils$.$getPastel$($baseColor_c3$$, 0.05)), $c2$$2$$ = dvt.$ColorUtils$.$getRGB$(dvt.$ColorUtils$.$getPastel$($baseColor_c3$$, 0.15));
    $baseColor_c3$$ = dvt.$ColorUtils$.$getRGB$(dvt.$ColorUtils$.$getPastel$($baseColor_c3$$, 0.35));
    if($arColors$$5_style$$60$$ == $DvtChartPieRenderUtils$$.$CRUST$) {
      return[$c$$4_skin$$3$$, $c2$$2$$, $baseColor_c3$$, $c$$4_skin$$3$$]
    }
    if("SIDE" == $arColors$$5_style$$60$$) {
      return[$c$$4_skin$$3$$, $baseColor_c3$$]
    }
    if("3D" == $arColors$$5_style$$60$$) {
      return[$baseColor_c3$$, $c2$$2$$, $c$$4_skin$$3$$, $c1$$2$$, $baseColor_c3$$]
    }
  }
};
$DvtChartPieRenderUtils$$.$getGradientAlphas$ = function $$DvtChartPieRenderUtils$$$$getGradientAlphas$$($baseAlpha$$, $style$$61$$) {
  var $alpha$$15$$ = $baseAlpha$$ == $JSCompiler_alias_NULL$$ || isNaN($baseAlpha$$) || 0 == $baseAlpha$$ ? 1 : $baseAlpha$$;
  if($style$$61$$ == $DvtChartPieRenderUtils$$.$TWOD$) {
    return[$alpha$$15$$, $alpha$$15$$, $alpha$$15$$]
  }
  if($style$$61$$ == $DvtChartPieRenderUtils$$.$BORDER$) {
    return[$alpha$$15$$ / 1.59375, $alpha$$15$$ / 5.3125, $alpha$$15$$ / 2.65625]
  }
  if($style$$61$$ == $DvtChartPieRenderUtils$$.$THREED$) {
    return[$alpha$$15$$, $alpha$$15$$, $alpha$$15$$, $alpha$$15$$, $alpha$$15$$]
  }
  if($style$$61$$ == $DvtChartPieRenderUtils$$.$CRUST$) {
    return[$alpha$$15$$, $alpha$$15$$, $alpha$$15$$, $alpha$$15$$]
  }
  if($style$$61$$ == $DvtChartPieRenderUtils$$.$SIDE$) {
    return[$alpha$$15$$, $alpha$$15$$]
  }
};
$DvtChartPieRenderUtils$$.$getGradientRatios$ = function $$DvtChartPieRenderUtils$$$$getGradientRatios$$($style$$62$$, $skin$$4$$) {
  if($skin$$4$$ && $skin$$4$$ != dvt.$CSSStyle$.$SKIN_SKYROS$) {
    return[0, 1]
  }
  if($style$$62$$ == $DvtChartPieRenderUtils$$.$TWOD$) {
    return[0.2, 0.5, 1]
  }
  if($style$$62$$ == $DvtChartPieRenderUtils$$.$BORDER$) {
    return[0, 0.5, 1]
  }
  if($style$$62$$ == $DvtChartPieRenderUtils$$.$THREED$) {
    return[0, 0.29, 0.55, 0.84, 1]
  }
  if($style$$62$$ == $DvtChartPieRenderUtils$$.$CRUST$) {
    return[0, 0.43, 0.91, 1]
  }
  if($style$$62$$ == $DvtChartPieRenderUtils$$.$SIDE$) {
    return[0, 1]
  }
};
$DvtChartPieRenderUtils$$.$createTopSurface$ = function $$DvtChartPieRenderUtils$$$$createTopSurface$$($slice$$12$$, $fill$$27$$) {
  var $edge_pieChart$$3$$ = $slice$$12$$.$_pieChart$, $context$$142_shapes$$4_wedge$$ = $edge_pieChart$$3$$.$getCtx$(), $innerColor$$5_pieCenter$$ = $slice$$12$$.$getCenter$(), $innerRadius_outerColor$$6$$ = $slice$$12$$.$getInnerRadius$(), $sliceGaps_stroke$$44$$ = $JSCompiler_StaticMethods_is3D$$($edge_pieChart$$3$$) || (0 == $slice$$12$$.$_depth$ ? 3 * $DvtChartStyleUtils$$.$getDataItemGaps$($slice$$12$$.$_chart$) : 0) > Math.sin(dvt.$Math$.$degreesToRads$($slice$$12$$.$getAngleExtent$())) * $slice$$12$$.$_radiusX$ + 
  1 ? $JSCompiler_alias_NULL$$ : 0 == $slice$$12$$.$_depth$ ? 3 * $DvtChartStyleUtils$$.$getDataItemGaps$($slice$$12$$.$_chart$) : 0, $context$$142_shapes$$4_wedge$$ = new $DvtChartSelectableWedge$$($context$$142_shapes$$4_wedge$$, $innerColor$$5_pieCenter$$.x, $innerColor$$5_pieCenter$$.y, $slice$$12$$.$_radiusX$, $slice$$12$$.$_radiusY$, $slice$$12$$.$getAngleStart$(), $slice$$12$$.$getAngleExtent$(), $sliceGaps_stroke$$44$$, $innerRadius_outerColor$$6$$), $innerColor$$5_pieCenter$$ = $DvtChartStyleUtils$$.$getSelectedInnerColor$($edge_pieChart$$3$$.$chart$), 
  $innerRadius_outerColor$$6$$ = $DvtChartStyleUtils$$.$getSelectedOuterColor$($edge_pieChart$$3$$.$chart$), $sliceGaps_stroke$$44$$ = new dvt.$SolidStroke$($slice$$12$$.$getStrokeColor$(), $JSCompiler_alias_NULL$$, $slice$$12$$.$getBorderWidth$());
  $context$$142_shapes$$4_wedge$$.$setStyleProperties$($fill$$27$$, $sliceGaps_stroke$$44$$, $slice$$12$$.$getFillColor$(), $innerColor$$5_pieCenter$$, $innerRadius_outerColor$$6$$);
  $context$$142_shapes$$4_wedge$$ = [$context$$142_shapes$$4_wedge$$];
  if(!$slice$$12$$.$getStrokeColor$() && $edge_pieChart$$3$$.$getSkin$() == dvt.$CSSStyle$.$SKIN_SKYROS$ && $JSCompiler_StaticMethods_is3D$$($edge_pieChart$$3$$) && 0 < $slice$$12$$.getDepth() && "gradient" == $DvtChartStyleUtils$$.$getSeriesEffect$($edge_pieChart$$3$$.$chart$) && (180 <= $slice$$12$$.$getAngleStart$() || 180 <= $slice$$12$$.$getAngleStart$() + $slice$$12$$.$getAngleExtent$() || 360 == $slice$$12$$.$getAngleExtent$())) {
    $edge_pieChart$$3$$ = $DvtChartPieRenderUtils$$.$_createGradientPieBorder$($slice$$12$$, $fill$$27$$), $edge_pieChart$$3$$.$setTranslate$($slice$$12$$.$_explodeOffsetX$, $slice$$12$$.$_explodeOffsetY$), $context$$142_shapes$$4_wedge$$.push($edge_pieChart$$3$$)
  }
  $DvtChartPieRenderUtils$$.$associate$($slice$$12$$, $context$$142_shapes$$4_wedge$$);
  return $context$$142_shapes$$4_wedge$$
};
$DvtChartPieRenderUtils$$.$associate$ = function $$DvtChartPieRenderUtils$$$$associate$$($slice$$13$$, $displayables$$9$$) {
  if($displayables$$9$$) {
    for(var $i$$360$$ = 0;$i$$360$$ < $displayables$$9$$.length;$i$$360$$++) {
      $slice$$13$$.$_pieChart$.$chart$.$getEventManager$().$associate$($displayables$$9$$[$i$$360$$], $slice$$13$$)
    }
  }
};
$DvtChartPieRenderUtils$$.$_createGradientPieBorder$ = function $$DvtChartPieRenderUtils$$$$_createGradientPieBorder$$($slice$$14$$, $topFill$$1$$) {
  var $angExtent_arRatios$$1_diff$$2_style$$63$$ = $DvtChartPieRenderUtils$$.$BORDER$, $arColors$$6_gradBorder$$ = $DvtChartPieRenderUtils$$.$getGradientColors$($JSCompiler_alias_NULL$$, $angExtent_arRatios$$1_diff$$2_style$$63$$), $angStart_arAlphas$$5_edge$$1_sliceAngleStart$$ = $DvtChartPieRenderUtils$$.$getGradientAlphas$($JSCompiler_alias_NULL$$, $angExtent_arRatios$$1_diff$$2_style$$63$$), $angExtent_arRatios$$1_diff$$2_style$$63$$ = $DvtChartPieRenderUtils$$.$getGradientRatios$($angExtent_arRatios$$1_diff$$2_style$$63$$), 
  $arBounds$$1_pieChart$$4$$ = $topFill$$1$$.$getBounds$(), $arColors$$6_gradBorder$$ = new dvt.$LinearGradientStroke$(120, $arColors$$6_gradBorder$$, $angStart_arAlphas$$5_edge$$1_sliceAngleStart$$, $angExtent_arRatios$$1_diff$$2_style$$63$$, $arBounds$$1_pieChart$$4$$);
  $arColors$$6_gradBorder$$.$setWidth$(1);
  $angStart_arAlphas$$5_edge$$1_sliceAngleStart$$ = $slice$$14$$.$getAngleStart$();
  $angExtent_arRatios$$1_diff$$2_style$$63$$ = 180 > $angStart_arAlphas$$5_edge$$1_sliceAngleStart$$ ? 180 - $angStart_arAlphas$$5_edge$$1_sliceAngleStart$$ : 0;
  $angStart_arAlphas$$5_edge$$1_sliceAngleStart$$ = 0 < $angExtent_arRatios$$1_diff$$2_style$$63$$ ? 180 : $angStart_arAlphas$$5_edge$$1_sliceAngleStart$$;
  $angExtent_arRatios$$1_diff$$2_style$$63$$ = $slice$$14$$.$getAngleExtent$() - $angExtent_arRatios$$1_diff$$2_style$$63$$;
  360 < $angStart_arAlphas$$5_edge$$1_sliceAngleStart$$ + $angExtent_arRatios$$1_diff$$2_style$$63$$ && ($angExtent_arRatios$$1_diff$$2_style$$63$$ = 360 - $angStart_arAlphas$$5_edge$$1_sliceAngleStart$$);
  var $arBounds$$1_pieChart$$4$$ = $slice$$14$$.$_pieChart$, $pieCenter$$1$$ = $slice$$14$$.$getCenter$(), $angStart_arAlphas$$5_edge$$1_sliceAngleStart$$ = new dvt.$Arc$($arBounds$$1_pieChart$$4$$.$getCtx$(), $pieCenter$$1$$.x, $pieCenter$$1$$.y, $arBounds$$1_pieChart$$4$$.$_radiusX$, $arBounds$$1_pieChart$$4$$.$_radiusY$, $angStart_arAlphas$$5_edge$$1_sliceAngleStart$$, $angExtent_arRatios$$1_diff$$2_style$$63$$, dvt.$Arc$.OPEN);
  $angStart_arAlphas$$5_edge$$1_sliceAngleStart$$.$setStroke$($arColors$$6_gradBorder$$);
  return $angStart_arAlphas$$5_edge$$1_sliceAngleStart$$
};
$DvtChartPieRenderUtils$$.$createLateralSurface$ = function $$DvtChartPieRenderUtils$$$$createLateralSurface$$($slice$$15$$, $pathType$$, $fill$$28$$) {
  if(0 == $slice$$15$$.$getAngleExtent$()) {
    return[]
  }
  var $shapes$$5$$ = [];
  if(0 < dvt.$ColorUtils$.$getAlpha$($slice$$15$$.$getFillColor$())) {
    if($pathType$$ == $DvtChartPieRenderUtils$$.$SURFACE_LEFT$ || $pathType$$ == $DvtChartPieRenderUtils$$.$SURFACE_RIGHT$) {
      $shapes$$5$$.push($DvtChartPieRenderUtils$$.$_generateLateralShape$($slice$$15$$, $pathType$$, $JSCompiler_alias_NULL$$, $fill$$28$$))
    }else {
      if($pathType$$ == $DvtChartPieRenderUtils$$.$SURFACE_CRUST$) {
        for(var $pathCommands$$2$$ = $DvtChartPieRenderUtils$$.$_createCrustPathCommands$($slice$$15$$), $len$$6$$ = $pathCommands$$2$$.length, $i$$361$$ = 0;$i$$361$$ < $len$$6$$;$i$$361$$++) {
          $shapes$$5$$.push($DvtChartPieRenderUtils$$.$_generateLateralShape$($slice$$15$$, $pathType$$, $pathCommands$$2$$[$i$$361$$], $fill$$28$$))
        }
      }
    }
  }
  $DvtChartPieRenderUtils$$.$associate$($slice$$15$$, $shapes$$5$$);
  return $shapes$$5$$
};
$DvtChartPieRenderUtils$$.$generateLateralGradientFill$ = function $$DvtChartPieRenderUtils$$$$generateLateralGradientFill$$($slice$$16$$, $objType$$1$$) {
  var $pieChart$$5$$ = $slice$$16$$.$_pieChart$, $skin$$5$$ = $pieChart$$5$$.$getSkin$(), $yOffset$$1$$ = $objType$$1$$ == $DvtChartPieRenderUtils$$.$CRUST$ ? $slice$$16$$.getDepth() : 0, $angle$$21$$ = $skin$$5$$ == dvt.$CSSStyle$.$SKIN_SKYROS$ ? 0 : 270, $arColors$$7$$ = $DvtChartPieRenderUtils$$.$getGradientColors$(dvt.$ColorUtils$.$getRGB$($slice$$16$$.$getFillColor$()), $objType$$1$$, $skin$$5$$), $arAlphas$$6$$ = $DvtChartPieRenderUtils$$.$getGradientAlphas$(dvt.$ColorUtils$.$getAlpha$($slice$$16$$.$getFillColor$()), 
  $objType$$1$$), $arRatios$$2$$ = $DvtChartPieRenderUtils$$.$getGradientRatios$($objType$$1$$, $skin$$5$$), $arBounds$$2$$ = $JSCompiler_alias_NULL$$;
  $skin$$5$$ == dvt.$CSSStyle$.$SKIN_SKYROS$ && ($arBounds$$2$$ = [Math.floor($slice$$16$$.$getCenter$().x - $pieChart$$5$$.$_radiusX$), Math.floor($slice$$16$$.$getCenter$().y - $pieChart$$5$$.$_radiusY$) + $yOffset$$1$$, Math.ceil(2 * $pieChart$$5$$.$_radiusX$), Math.ceil(2 * $pieChart$$5$$.$_radiusY$)]);
  return new dvt.$LinearGradientFill$($angle$$21$$, $arColors$$7$$, $arAlphas$$6$$, $arRatios$$2$$, $arBounds$$2$$)
};
$DvtChartPieRenderUtils$$.$_generateLateralShape$ = function $$DvtChartPieRenderUtils$$$$_generateLateralShape$$($slice$$17$$, $pathType$$1_pointArray$$1_pt$$, $pathCommand_points$$46_xCenter$$, $fill$$29$$) {
  var $context$$143_path$$7_polygon$$1$$ = $slice$$17$$.$_pieChart$.$getCtx$();
  if($pathType$$1_pointArray$$1_pt$$ == $DvtChartPieRenderUtils$$.$SURFACE_LEFT$ || $pathType$$1_pointArray$$1_pt$$ == $DvtChartPieRenderUtils$$.$SURFACE_RIGHT$) {
    var $angle$$22$$ = $slice$$17$$.$getAngleStart$(), $arc$$2$$ = $slice$$17$$.$getAngleExtent$();
    $pathCommand_points$$46_xCenter$$ = $slice$$17$$.$getCenter$().x;
    var $i$$362_yCenter$$ = $slice$$17$$.$getCenter$().y, $xRadius$$ = $slice$$17$$.$_radiusX$, $yRadius$$ = $slice$$17$$.$_radiusY$, $depth$$5$$ = $slice$$17$$.getDepth();
    $pathType$$1_pointArray$$1_pt$$ = $pathType$$1_pointArray$$1_pt$$ == $DvtChartPieRenderUtils$$.$SURFACE_LEFT$ ? $DvtChartPieRenderUtils$$.$reflectAngleOverYAxis$($angle$$22$$ + $arc$$2$$, $pathCommand_points$$46_xCenter$$, $i$$362_yCenter$$, $xRadius$$, $yRadius$$) : $DvtChartPieRenderUtils$$.$reflectAngleOverYAxis$($angle$$22$$, $pathCommand_points$$46_xCenter$$, $i$$362_yCenter$$, $xRadius$$, $yRadius$$);
    $pathType$$1_pointArray$$1_pt$$ = $DvtChartPieRenderUtils$$.$_generateInnerPoints$($pathCommand_points$$46_xCenter$$, $i$$362_yCenter$$, $pathType$$1_pointArray$$1_pt$$.x, $pathType$$1_pointArray$$1_pt$$.y, $depth$$5$$);
    $pathCommand_points$$46_xCenter$$ = [];
    for($i$$362_yCenter$$ = 0;$i$$362_yCenter$$ < $pathType$$1_pointArray$$1_pt$$.length;$i$$362_yCenter$$++) {
      $pathCommand_points$$46_xCenter$$.push($pathType$$1_pointArray$$1_pt$$[$i$$362_yCenter$$].x, $pathType$$1_pointArray$$1_pt$$[$i$$362_yCenter$$].y)
    }
    $context$$143_path$$7_polygon$$1$$ = new dvt.$Polygon$($context$$143_path$$7_polygon$$1$$, $pathCommand_points$$46_xCenter$$);
    $context$$143_path$$7_polygon$$1$$.$setFill$($fill$$29$$);
    $slice$$17$$.$getStrokeColor$() && $context$$143_path$$7_polygon$$1$$.$setSolidStroke$($slice$$17$$.$getStrokeColor$());
    return $context$$143_path$$7_polygon$$1$$
  }
  return $pathCommand_points$$46_xCenter$$ ? ($context$$143_path$$7_polygon$$1$$ = new dvt.$Path$($context$$143_path$$7_polygon$$1$$, $JSCompiler_alias_NULL$$), $context$$143_path$$7_polygon$$1$$.$setCmds$($pathCommand_points$$46_xCenter$$), $context$$143_path$$7_polygon$$1$$.$setTranslate$($slice$$17$$.$_explodeOffsetX$, $slice$$17$$.$_explodeOffsetY$), $context$$143_path$$7_polygon$$1$$.$setFill$($fill$$29$$), $slice$$17$$.$getStrokeColor$() && $context$$143_path$$7_polygon$$1$$.$setSolidStroke$($slice$$17$$.$getStrokeColor$()), 
  $context$$143_path$$7_polygon$$1$$) : $JSCompiler_alias_NULL$$
};
$DvtChartPieRenderUtils$$.$_createCrustPathCommands$ = function $$DvtChartPieRenderUtils$$$$_createCrustPathCommands$$($depth$$6_slice$$18$$) {
  var $angle$$23$$ = $depth$$6_slice$$18$$.$getAngleStart$(), $arc$$3$$ = $depth$$6_slice$$18$$.$getAngleExtent$(), $angleEnd$$ = $angle$$23$$ + $arc$$3$$, $xCenter$$1$$ = $depth$$6_slice$$18$$.$getCenter$().x, $yCenter$$1$$ = $depth$$6_slice$$18$$.$getCenter$().y, $xRadius$$1$$ = $depth$$6_slice$$18$$.$_radiusX$, $yRadius$$1$$ = $depth$$6_slice$$18$$.$_radiusY$;
  $depth$$6_slice$$18$$ = $depth$$6_slice$$18$$.getDepth();
  var $arOuterPath$$ = [];
  180 > $angle$$23$$ && 360 < $angleEnd$$ ? ($arOuterPath$$.push($DvtChartPieRenderUtils$$.$_makeOuterPath$($xCenter$$1$$, $yCenter$$1$$, $xRadius$$1$$, $yRadius$$1$$, $depth$$6_slice$$18$$, $angle$$23$$, 180 - $angle$$23$$)), $arOuterPath$$.push($DvtChartPieRenderUtils$$.$_makeOuterPath$($xCenter$$1$$, $yCenter$$1$$, $xRadius$$1$$, $yRadius$$1$$, $depth$$6_slice$$18$$, 360, $angleEnd$$ - 360)), $arOuterPath$$.push($DvtChartPieRenderUtils$$.$_makeOuterPath$($xCenter$$1$$, $yCenter$$1$$, $xRadius$$1$$, 
  $yRadius$$1$$, $depth$$6_slice$$18$$, 180, 180))) : 360 < $angleEnd$$ ? ($arOuterPath$$.push($DvtChartPieRenderUtils$$.$_makeOuterPath$($xCenter$$1$$, $yCenter$$1$$, $xRadius$$1$$, $yRadius$$1$$, $depth$$6_slice$$18$$, $angle$$23$$, 360 - $angle$$23$$)), $arOuterPath$$.push($DvtChartPieRenderUtils$$.$_makeOuterPath$($xCenter$$1$$, $yCenter$$1$$, $xRadius$$1$$, $yRadius$$1$$, $depth$$6_slice$$18$$, 360, $angleEnd$$ - 360))) : 180 > $angle$$23$$ && 180 < $angleEnd$$ ? ($arOuterPath$$.push($DvtChartPieRenderUtils$$.$_makeOuterPath$($xCenter$$1$$, 
  $yCenter$$1$$, $xRadius$$1$$, $yRadius$$1$$, $depth$$6_slice$$18$$, $angle$$23$$, 180 - $angle$$23$$)), $arOuterPath$$.push($DvtChartPieRenderUtils$$.$_makeOuterPath$($xCenter$$1$$, $yCenter$$1$$, $xRadius$$1$$, $yRadius$$1$$, $depth$$6_slice$$18$$, 180, $angleEnd$$ - 180))) : $arOuterPath$$.push($DvtChartPieRenderUtils$$.$_makeOuterPath$($xCenter$$1$$, $yCenter$$1$$, $xRadius$$1$$, $yRadius$$1$$, $depth$$6_slice$$18$$, $angle$$23$$, $arc$$3$$));
  return $arOuterPath$$
};
$DvtChartPieRenderUtils$$.$_makeOuterPath$ = function $$DvtChartPieRenderUtils$$$$_makeOuterPath$$($cx$$10_endPointTopX$$, $cy$$11_endPointTopY$$, $rx$$11$$, $ry$$7$$, $depth$$7$$, $startAngle$$5_startPointTop$$, $angleExtent$$3_angleExtentRads$$1$$) {
  $angleExtent$$3_angleExtentRads$$1$$ = dvt.$Math$.$degreesToRads$($angleExtent$$3_angleExtentRads$$1$$);
  var $endAngleRads_pathCommands$$3$$ = -(dvt.$Math$.$degreesToRads$($startAngle$$5_startPointTop$$) + $angleExtent$$3_angleExtentRads$$1$$);
  $startAngle$$5_startPointTop$$ = $DvtChartPieRenderUtils$$.$reflectAngleOverYAxis$($startAngle$$5_startPointTop$$, $cx$$10_endPointTopX$$, $cy$$11_endPointTopY$$, $rx$$11$$, $ry$$7$$);
  $cx$$10_endPointTopX$$ += Math.cos($endAngleRads_pathCommands$$3$$) * $rx$$11$$;
  $cy$$11_endPointTopY$$ += Math.sin($endAngleRads_pathCommands$$3$$) * $ry$$7$$;
  $endAngleRads_pathCommands$$3$$ = dvt.$PathUtils$.moveTo($startAngle$$5_startPointTop$$.x, $startAngle$$5_startPointTop$$.y);
  $endAngleRads_pathCommands$$3$$ += dvt.$PathUtils$.arcTo($rx$$11$$, $ry$$7$$, $angleExtent$$3_angleExtentRads$$1$$, 0, $cx$$10_endPointTopX$$, $cy$$11_endPointTopY$$);
  $endAngleRads_pathCommands$$3$$ += dvt.$PathUtils$.lineTo($cx$$10_endPointTopX$$, $cy$$11_endPointTopY$$ + $depth$$7$$);
  $endAngleRads_pathCommands$$3$$ += dvt.$PathUtils$.arcTo($rx$$11$$, $ry$$7$$, $angleExtent$$3_angleExtentRads$$1$$, 1, $startAngle$$5_startPointTop$$.x, $startAngle$$5_startPointTop$$.y + $depth$$7$$);
  return $endAngleRads_pathCommands$$3$$ += dvt.$PathUtils$.lineTo($startAngle$$5_startPointTop$$.x, $startAngle$$5_startPointTop$$.y)
};
$DvtChartPieRenderUtils$$.$_generateInnerPoints$ = function $$DvtChartPieRenderUtils$$$$_generateInnerPoints$$($cx$$11$$, $cy$$12$$, $xpos$$, $ypos$$, $tilt$$1$$) {
  var $pointArray$$2$$ = [];
  $pointArray$$2$$.push({x:$cx$$11$$, y:$cy$$12$$});
  $pointArray$$2$$.push({x:$xpos$$, y:$ypos$$});
  $pointArray$$2$$.push({x:$xpos$$, y:$ypos$$ + $tilt$$1$$});
  $pointArray$$2$$.push({x:$cx$$11$$, y:$cy$$12$$ + $tilt$$1$$});
  return $pointArray$$2$$
};
function $DvtChartPieLabelInfo$$() {
  this.$_slice$ = this.$_sliceLabel$ = $JSCompiler_alias_NULL$$;
  this.$_initialNumLines$ = this.$_y$ = this.$_x$ = this.$_height$ = this.$_width$ = this.$_position$ = this.$_angle$ = -1;
  this.$_hasFeeler$ = $JSCompiler_alias_FALSE$$;
  this.$_minY$ = this.$_maxY$ = -1
}
dvt.$Obj$.$createSubclass$($DvtChartPieLabelInfo$$, dvt.$Obj$);
$JSCompiler_prototypeAlias$$ = $DvtChartPieLabelInfo$$.prototype;
$JSCompiler_prototypeAlias$$.$getAngle$ = $JSCompiler_get$$("$_angle$");
$JSCompiler_prototypeAlias$$.$setAngle$ = $JSCompiler_set$$("$_angle$");
$JSCompiler_prototypeAlias$$.getHeight = $JSCompiler_get$$("$_height$");
$JSCompiler_prototypeAlias$$.$setHeight$ = $JSCompiler_set$$("$_height$");
function $JSCompiler_StaticMethods_boundY$$($JSCompiler_StaticMethods_boundY$self$$, $y$$88$$) {
  $JSCompiler_StaticMethods_boundY$self$$.$_minY$ <= $JSCompiler_StaticMethods_boundY$self$$.$_maxY$ && ($y$$88$$ = Math.max($y$$88$$, $JSCompiler_StaticMethods_boundY$self$$.$_minY$), $y$$88$$ = Math.min($y$$88$$, $JSCompiler_StaticMethods_boundY$self$$.$_maxY$));
  return $y$$88$$
}
$JSCompiler_prototypeAlias$$.$getPosition$ = $JSCompiler_get$$("$_position$");
$JSCompiler_prototypeAlias$$.$setPosition$ = $JSCompiler_set$$("$_position$");
$JSCompiler_prototypeAlias$$.$setSliceLabel$ = $JSCompiler_set$$("$_sliceLabel$");
$JSCompiler_prototypeAlias$$.getWidth = $JSCompiler_get$$("$_width$");
$JSCompiler_prototypeAlias$$.$setWidth$ = $JSCompiler_set$$("$_width$");
$JSCompiler_prototypeAlias$$.$getX$ = $JSCompiler_get$$("$_x$");
$JSCompiler_prototypeAlias$$.$setX$ = $JSCompiler_set$$("$_x$");
$JSCompiler_prototypeAlias$$.$getY$ = $JSCompiler_get$$("$_y$");
$JSCompiler_prototypeAlias$$.$setY$ = $JSCompiler_set$$("$_y$");
function $DvtChartPieLabelUtils$$() {
}
dvt.$Obj$.$createSubclass$($DvtChartPieLabelUtils$$, dvt.$Obj$);
$DvtChartPieLabelUtils$$.$_MAX_LINES_PER_LABEL$ = 3;
$DvtChartPieLabelUtils$$.$_COLLISION_MARGIN$ = 1;
$DvtChartPieLabelUtils$$.$_LEFT_SIDE_LABELS$ = 1;
$DvtChartPieLabelUtils$$.$_RIGHT_SIDE_LABELS$ = 2;
$DvtChartPieLabelUtils$$.$_OUTSIDE_LABEL_DISTANCE$ = 1.04;
$DvtChartPieLabelUtils$$.$_FEELER_RAD_MINSIZE$ = 0.1;
$DvtChartPieLabelUtils$$.$_FEELER_HORIZ_MINSIZE$ = 0.1;
$DvtChartPieLabelUtils$$.$_LABEL_TO_FEELER_OFFSET$ = 0.5;
$DvtChartPieLabelUtils$$.$_LABEL_TO_FEELER_DISTANCE$ = 3;
$DvtChartPieLabelUtils$$.$_NO_COLLISION$ = 0;
$DvtChartPieLabelUtils$$.$_HALF_COLLISION$ = 1;
$DvtChartPieLabelUtils$$.$_ALL_COLLISION$ = 2;
$DvtChartPieLabelUtils$$.$layoutLabelsAndFeelers$ = function $$DvtChartPieLabelUtils$$$$layoutLabelsAndFeelers$$($pie$$1$$) {
  $DvtChartPieLabelUtils$$.$_layoutInsideLabels$($pie$$1$$, "auto" == $pie$$1$$.$getLabelPosition$());
  $DvtChartPieLabelUtils$$.$_layoutOutsideLabelsAndFeelers$($pie$$1$$)
};
$DvtChartPieLabelUtils$$.$_layoutInsideLabels$ = function $$DvtChartPieLabelUtils$$$$_layoutInsideLabels$$($pie$$2$$, $isHybrid$$) {
  for(var $slices$$7$$ = $pie$$2$$.$_slices$, $i$$363$$ = 0;$i$$363$$ < $slices$$7$$.length;$i$$363$$++) {
    var $slice$$20$$ = $slices$$7$$[$i$$363$$], $labelPosition$$3_stage$$6$$ = $JSCompiler_StaticMethods_getSeriesLabelPosition$$($pie$$2$$, $slice$$20$$.$getSeriesIndex$());
    if(!("none" == $labelPosition$$3_stage$$6$$ || "outsideSlice" == $labelPosition$$3_stage$$6$$)) {
      var $estimatedDims_midAngle_midPt$$1$$ = $slice$$20$$.$getAngleStart$() + $slice$$20$$.$getAngleExtent$() / 2, $ir$$5_x1$$23$$ = $slice$$20$$.$getInnerRadius$(), $center$$3_x2$$21$$ = $slice$$20$$.$getCenter$(), $offset$$22_posX$$1_usableSpace$$ = 0, $minChars$$4_posY_y2$$16$$ = 0, $sliceLabel$$1$$ = $DvtChartPieLabelUtils$$.$_createLabel$($slice$$20$$, $JSCompiler_alias_TRUE$$);
      1 == $slices$$7$$.length ? ($offset$$22_posX$$1_usableSpace$$ = $center$$3_x2$$21$$.x, $minChars$$4_posY_y2$$16$$ = $center$$3_x2$$21$$.y) : ($offset$$22_posX$$1_usableSpace$$ = Math.max(0.45, 0.65 - 0.45 * $ir$$5_x1$$23$$ / Math.max($slice$$20$$.$_radiusY$, 0.001)), $estimatedDims_midAngle_midPt$$1$$ = $DvtChartPieRenderUtils$$.$reflectAngleOverYAxis$($estimatedDims_midAngle_midPt$$1$$, $center$$3_x2$$21$$.x, $center$$3_x2$$21$$.y, $ir$$5_x1$$23$$ + ($slice$$20$$.$_radiusX$ - $ir$$5_x1$$23$$) * 
      $offset$$22_posX$$1_usableSpace$$, $ir$$5_x1$$23$$ + ($slice$$20$$.$_radiusY$ - $ir$$5_x1$$23$$) * $offset$$22_posX$$1_usableSpace$$), $offset$$22_posX$$1_usableSpace$$ = $estimatedDims_midAngle_midPt$$1$$.x, $minChars$$4_posY_y2$$16$$ = $estimatedDims_midAngle_midPt$$1$$.y);
      $sliceLabel$$1$$.$setX$($offset$$22_posX$$1_usableSpace$$);
      $sliceLabel$$1$$.$setY$($minChars$$4_posY_y2$$16$$);
      $sliceLabel$$1$$.$alignMiddle$();
      $sliceLabel$$1$$.$alignCenter$();
      for(var $estimatedDims_midAngle_midPt$$1$$ = dvt.$TextUtils$.$guessTextDimensions$($sliceLabel$$1$$), $center$$3_x2$$21$$ = $ir$$5_x1$$23$$ = $offset$$22_posX$$1_usableSpace$$, $y1$$17$$ = $minChars$$4_posY_y2$$16$$ - $estimatedDims_midAngle_midPt$$1$$.$h$ / 2, $minChars$$4_posY_y2$$16$$ = $minChars$$4_posY_y2$$16$$ + $estimatedDims_midAngle_midPt$$1$$.$h$ / 2;$slice$$20$$.contains($ir$$5_x1$$23$$, $y1$$17$$) && $slice$$20$$.contains($ir$$5_x1$$23$$, $minChars$$4_posY_y2$$16$$);) {
        $ir$$5_x1$$23$$--
      }
      for(;$slice$$20$$.contains($center$$3_x2$$21$$, $y1$$17$$) && $slice$$20$$.contains($center$$3_x2$$21$$, $minChars$$4_posY_y2$$16$$);) {
        $center$$3_x2$$21$$++
      }
      $ir$$5_x1$$23$$ = Math.ceil($ir$$5_x1$$23$$ + 3);
      $center$$3_x2$$21$$ = Math.floor($center$$3_x2$$21$$ - 3);
      $offset$$22_posX$$1_usableSpace$$ = 2 * Math.min($offset$$22_posX$$1_usableSpace$$ - $ir$$5_x1$$23$$, $center$$3_x2$$21$$ - $offset$$22_posX$$1_usableSpace$$);
      $offset$$22_posX$$1_usableSpace$$ < $estimatedDims_midAngle_midPt$$1$$.$w$ && ($sliceLabel$$1$$.$setX$(($ir$$5_x1$$23$$ + $center$$3_x2$$21$$) / 2), $offset$$22_posX$$1_usableSpace$$ = $center$$3_x2$$21$$ - $ir$$5_x1$$23$$);
      $isHybrid$$ && "center" != $labelPosition$$3_stage$$6$$ ? $sliceLabel$$1$$.$getDimensions$().$w$ < $offset$$22_posX$$1_usableSpace$$ ? $slice$$20$$.$setSliceLabel$($sliceLabel$$1$$) : $slice$$20$$.$setSliceLabel$($JSCompiler_alias_NULL$$) : ($labelPosition$$3_stage$$6$$ = $pie$$2$$.$getCtx$().$_stage$, $minChars$$4_posY_y2$$16$$ = !$DvtChartPieLabelUtils$$.$_isTextLabel$($pie$$2$$, $slice$$20$$) ? $sliceLabel$$1$$.$getTextString$().length : $JSCompiler_alias_NULL$$, dvt.$TextUtils$.$fitText$($sliceLabel$$1$$, 
      $offset$$22_posX$$1_usableSpace$$, $estimatedDims_midAngle_midPt$$1$$.$h$, $labelPosition$$3_stage$$6$$, $minChars$$4_posY_y2$$16$$) && ($labelPosition$$3_stage$$6$$.removeChild($sliceLabel$$1$$), $slice$$20$$.$setSliceLabel$($sliceLabel$$1$$)));
      $slice$$20$$.$_sliceLabel$ != $JSCompiler_alias_NULL$$ && $JSCompiler_StaticMethods_setNoOutsideFeeler$$($slice$$20$$)
    }
  }
};
$DvtChartPieLabelUtils$$.$_layoutOutsideLabelsAndFeelers$ = function $$DvtChartPieLabelUtils$$$$_layoutOutsideLabelsAndFeelers$$($pie$$3$$) {
  var $leftLabels$$ = [], $alabels_rightLabels$$ = [], $alabels_rightLabels$$ = $DvtChartPieLabelUtils$$.$_generateInitialLayout$($pie$$3$$), $leftLabels$$ = $alabels_rightLabels$$[0], $alabels_rightLabels$$ = $alabels_rightLabels$$[1], $leftColl$$ = $DvtChartPieLabelUtils$$.$_refineInitialLayout$($pie$$3$$, $leftLabels$$, $DvtChartPieLabelUtils$$.$_LEFT_SIDE_LABELS$), $rightColl$$ = $DvtChartPieLabelUtils$$.$_refineInitialLayout$($pie$$3$$, $alabels_rightLabels$$, $DvtChartPieLabelUtils$$.$_RIGHT_SIDE_LABELS$);
  $leftColl$$ == $DvtChartPieLabelUtils$$.$_HALF_COLLISION$ && $rightColl$$ != $DvtChartPieLabelUtils$$.$_NO_COLLISION$ && $DvtChartPieLabelUtils$$.$_columnLabels$($pie$$3$$, $leftLabels$$, $JSCompiler_alias_TRUE$$, $JSCompiler_alias_TRUE$$, $JSCompiler_alias_TRUE$$);
  $leftColl$$ != $DvtChartPieLabelUtils$$.$_NO_COLLISION$ && $rightColl$$ == $DvtChartPieLabelUtils$$.$_HALF_COLLISION$ && $DvtChartPieLabelUtils$$.$_columnLabels$($pie$$3$$, $alabels_rightLabels$$, $JSCompiler_alias_FALSE$$, $JSCompiler_alias_TRUE$$, $JSCompiler_alias_TRUE$$);
  $DvtChartPieLabelUtils$$.$_setLabelsAndFeelers$($pie$$3$$, $leftLabels$$, $DvtChartPieLabelUtils$$.$_LEFT_SIDE_LABELS$);
  $DvtChartPieLabelUtils$$.$_setLabelsAndFeelers$($pie$$3$$, $alabels_rightLabels$$, $DvtChartPieLabelUtils$$.$_RIGHT_SIDE_LABELS$)
};
$DvtChartPieLabelUtils$$.$_createLabel$ = function $$DvtChartPieLabelUtils$$$$_createLabel$$($slice$$21$$, $isInside$$) {
  var $dataItem$$33_pieChart$$6_style$$64$$ = $slice$$21$$.$_pieChart$, $context$$144_sliceLabel$$2$$ = $dataItem$$33_pieChart$$6_style$$64$$.$getCtx$(), $context$$144_sliceLabel$$2$$ = $isInside$$ ? new dvt.$OutputText$($context$$144_sliceLabel$$2$$) : new dvt.$MultilineText$($context$$144_sliceLabel$$2$$), $labelStr$$1_styleDefaults$$3$$ = $dataItem$$33_pieChart$$6_style$$64$$.$getOptions$().styleDefaults, $bColorDefined_contrastingColor$$1_labelStyleArray$$2$$ = [$labelStr$$1_styleDefaults$$3$$.dataLabelStyle, 
  new dvt.$CSSStyle$($labelStr$$1_styleDefaults$$3$$.sliceLabelStyle)];
  ($dataItem$$33_pieChart$$6_style$$64$$ = $DvtChartDataUtils$$.$getDataItem$($dataItem$$33_pieChart$$6_style$$64$$.$chart$, $slice$$21$$.$getSeriesIndex$(), 0)) && $bColorDefined_contrastingColor$$1_labelStyleArray$$2$$.push(new dvt.$CSSStyle$($dataItem$$33_pieChart$$6_style$$64$$.labelStyle));
  $dataItem$$33_pieChart$$6_style$$64$$ = dvt.$CSSStyle$.$mergeStyles$($bColorDefined_contrastingColor$$1_labelStyleArray$$2$$);
  $bColorDefined_contrastingColor$$1_labelStyleArray$$2$$ = $dataItem$$33_pieChart$$6_style$$64$$.$getStyle$("color") != $JSCompiler_alias_NULL$$;
  $isInside$$ && (!$bColorDefined_contrastingColor$$1_labelStyleArray$$2$$ || dvt.$Agent$.$isHighContrast$()) ? ($bColorDefined_contrastingColor$$1_labelStyleArray$$2$$ = dvt.$ColorUtils$.$getContrastingTextColor$($slice$$21$$.$getFillColor$()), $dataItem$$33_pieChart$$6_style$$64$$.$setStyle$("color", $bColorDefined_contrastingColor$$1_labelStyleArray$$2$$)) : $bColorDefined_contrastingColor$$1_labelStyleArray$$2$$ || $dataItem$$33_pieChart$$6_style$$64$$.$setStyle$("color", $labelStr$$1_styleDefaults$$3$$._defaultSliceLabelColor);
  $context$$144_sliceLabel$$2$$.$setCSSStyle$($dataItem$$33_pieChart$$6_style$$64$$);
  $labelStr$$1_styleDefaults$$3$$ = $DvtChartPieLabelUtils$$.$generateSliceLabelString$($slice$$21$$, $labelStr$$1_styleDefaults$$3$$.sliceLabelType);
  $context$$144_sliceLabel$$2$$.$setTextString$($labelStr$$1_styleDefaults$$3$$);
  $slice$$21$$.$_sliceLabelString$ = $labelStr$$1_styleDefaults$$3$$;
  return $context$$144_sliceLabel$$2$$
};
$DvtChartPieLabelUtils$$.$createPieCenterLabel$ = function $$DvtChartPieLabelUtils$$$$createPieCenterLabel$$($pieChart$$7$$) {
  var $pieCenterLabel_textDim$$5$$ = $pieChart$$7$$.$getOptions$().pieCenterLabel, $centerLabel_dataLabelPosition$$1$$ = $pieChart$$7$$.$getLabelPosition$();
  if($pieCenterLabel_textDim$$5$$) {
    var $centerStyle$$ = $pieCenterLabel_textDim$$5$$.style, $availSpace$$25_ir$$6_radiusX$$2$$ = $pieChart$$7$$.$_radiusX$, $availSpace$$25_ir$$6_radiusX$$2$$ = 0 < $pieChart$$7$$.$getInnerRadius$() ? $pieChart$$7$$.$getInnerRadius$() : "outsideSlice" == $centerLabel_dataLabelPosition$$1$$ ? 0.9 * $availSpace$$25_ir$$6_radiusX$$2$$ : 0.5 * $availSpace$$25_ir$$6_radiusX$$2$$, $center$$4$$ = $pieChart$$7$$.$getCenter$(), $centerLabel_dataLabelPosition$$1$$ = new dvt.$MultilineText$($pieChart$$7$$.$getCtx$()), 
    $availSpace$$25_ir$$6_radiusX$$2$$ = new dvt.$Rectangle$($center$$4$$.x, $center$$4$$.y, $availSpace$$25_ir$$6_radiusX$$2$$ * Math.sqrt(2), $availSpace$$25_ir$$6_radiusX$$2$$ * Math.sqrt(2));
    $centerLabel_dataLabelPosition$$1$$.$setCSSStyle$(new dvt.$CSSStyle$($centerStyle$$));
    $centerLabel_dataLabelPosition$$1$$.$setTextString$($pieCenterLabel_textDim$$5$$.text);
    dvt.$TextUtils$.$fitText$($centerLabel_dataLabelPosition$$1$$, $availSpace$$25_ir$$6_radiusX$$2$$.$w$, $availSpace$$25_ir$$6_radiusX$$2$$.$h$, $pieChart$$7$$) && ($pieCenterLabel_textDim$$5$$ = $centerLabel_dataLabelPosition$$1$$.$getDimensions$(), $centerLabel_dataLabelPosition$$1$$.$setY$($availSpace$$25_ir$$6_radiusX$$2$$.y - $pieCenterLabel_textDim$$5$$.$h$ / 2), $centerLabel_dataLabelPosition$$1$$.$setX$($availSpace$$25_ir$$6_radiusX$$2$$.x), $centerLabel_dataLabelPosition$$1$$.$alignCenter$(), 
    $centerLabel_dataLabelPosition$$1$$.$isTruncated$() && $pieChart$$7$$.$chart$.$getEventManager$().$associate$($centerLabel_dataLabelPosition$$1$$, new dvt.$SimpleObjPeer$($centerLabel_dataLabelPosition$$1$$.$getTextString$())), $pieChart$$7$$.$addChild$($centerLabel_dataLabelPosition$$1$$))
  }
};
$DvtChartPieLabelUtils$$.$generateSliceLabelString$ = function $$DvtChartPieLabelUtils$$$$generateSliceLabelString$$($slice$$22$$, $labelType$$) {
  var $dataContext$$5_functionLabel$$, $defaultLabel$$3$$ = $DvtChartPieLabelUtils$$.$getDefaultSliceLabelString$($slice$$22$$, $labelType$$), $dataLabelFunc$$1$$ = $slice$$22$$.$_pieChart$.$getOptions$().dataLabel;
  $dataLabelFunc$$1$$ && ($dataContext$$5_functionLabel$$ = $DvtChartDataUtils$$.$getDataContext$($slice$$22$$.$_chart$, $slice$$22$$.$getSeriesIndex$(), 0), $dataContext$$5_functionLabel$$.label = $defaultLabel$$3$$, $dataContext$$5_functionLabel$$ = $dataLabelFunc$$1$$($dataContext$$5_functionLabel$$));
  return $dataContext$$5_functionLabel$$ ? $dataContext$$5_functionLabel$$ : $defaultLabel$$3$$
};
$DvtChartPieLabelUtils$$.$getDefaultSliceLabelString$ = function $$DvtChartPieLabelUtils$$$$getDefaultSliceLabelString$$($slice$$23$$, $labelType$$1$$) {
  var $pieChart$$8_svalue$$ = $slice$$23$$.$_pieChart$, $customLabel_spercent_totalValue$$1$$ = $slice$$23$$.$_customLabel$, $stext_valueFormat$$5$$ = $DvtChartTooltipUtils$$.$getValueFormat$($pieChart$$8_svalue$$.$chart$, "label");
  if($customLabel_spercent_totalValue$$1$$ != $JSCompiler_alias_NULL$$) {
    return"number" == typeof $customLabel_spercent_totalValue$$1$$ ? $DvtChartTooltipUtils$$.$formatValue$($pieChart$$8_svalue$$.$getCtx$(), $stext_valueFormat$$5$$, $customLabel_spercent_totalValue$$1$$) : $customLabel_spercent_totalValue$$1$$
  }
  var $value$$123$$ = $slice$$23$$.getValue(), $customLabel_spercent_totalValue$$1$$ = $pieChart$$8_svalue$$.$getTotalValue$(), $percentage$$2$$ = 0 == $customLabel_spercent_totalValue$$1$$ ? 0 : $value$$123$$ / $customLabel_spercent_totalValue$$1$$, $decDigits$$ = 0.01 > $percentage$$2$$ ? 3 : 0.1 > $percentage$$2$$ ? 2 : 1 > $percentage$$2$$ ? 1 : 0;
  150 > 2 * $pieChart$$8_svalue$$.$_radiusX$ && ($decDigits$$ = Math.max($decDigits$$ - 1, 0));
  var $percentConverter$$ = $pieChart$$8_svalue$$.$getCtx$().$getNumberConverter$({style:"percent", maximumFractionDigits:$decDigits$$, minimumFractionDigits:$decDigits$$}), $customLabel_spercent_totalValue$$1$$ = "";
  $percentConverter$$ && $percentConverter$$.getAsString ? $customLabel_spercent_totalValue$$1$$ = $percentConverter$$.getAsString($percentage$$2$$) : $percentConverter$$ && $percentConverter$$.format ? $customLabel_spercent_totalValue$$1$$ = $percentConverter$$.format($percentage$$2$$) : ($percentage$$2$$ *= 100, $customLabel_spercent_totalValue$$1$$ = $DvtChartTooltipUtils$$.$formatValue$($pieChart$$8_svalue$$.$getCtx$(), {}, $percentage$$2$$, $JSCompiler_alias_NULL$$, $JSCompiler_alias_NULL$$, 
  100 == $percentage$$2$$ ? 1 : Math.pow(10, -1 * $decDigits$$)) + "%");
  $pieChart$$8_svalue$$ = $DvtChartTooltipUtils$$.$formatValue$($pieChart$$8_svalue$$.$getCtx$(), $stext_valueFormat$$5$$, $value$$123$$);
  $stext_valueFormat$$5$$ = $slice$$23$$.$getSeriesLabel$();
  return"percent" == $labelType$$1$$ ? $customLabel_spercent_totalValue$$1$$ : "number" == $labelType$$1$$ ? $pieChart$$8_svalue$$ : "text" == $labelType$$1$$ ? $stext_valueFormat$$5$$ : "textAndPercent" == $labelType$$1$$ ? $stext_valueFormat$$5$$ + ", " + $customLabel_spercent_totalValue$$1$$ : $JSCompiler_alias_NULL$$
};
$DvtChartPieLabelUtils$$.$_refineInitialLayout$ = function $$DvtChartPieLabelUtils$$$$_refineInitialLayout$$($pie$$4$$, $labelInfoArray$$, $isLeftSideLabels_side$$) {
  if($labelInfoArray$$ && 0 < $labelInfoArray$$.length) {
    var $lastY$$ = $pie$$4$$.$_frame$.y, $collisionTop$$ = $JSCompiler_alias_FALSE$$, $collisionCentral$$ = $JSCompiler_alias_FALSE$$, $collisionBottom$$ = $JSCompiler_alias_FALSE$$, $labelBottom$$ = 0, $collide_labelInfo$$, $bottomQuarter$$ = $JSCompiler_alias_FALSE$$, $prevBottomQuarter$$ = $bottomQuarter$$;
    $collide_labelInfo$$ = $JSCompiler_alias_FALSE$$;
    $isLeftSideLabels_side$$ = $isLeftSideLabels_side$$ == $DvtChartPieLabelUtils$$.$_LEFT_SIDE_LABELS$;
    for(var $i$$364$$ = 0;$i$$364$$ < $labelInfoArray$$.length;$i$$364$$++) {
      $collide_labelInfo$$ = $labelInfoArray$$[$i$$364$$], $prevBottomQuarter$$ = $bottomQuarter$$, 90 < $collide_labelInfo$$.$getPosition$() && ($bottomQuarter$$ = $JSCompiler_alias_TRUE$$), $labelBottom$$ = $collide_labelInfo$$.$getY$() + $collide_labelInfo$$.getHeight(), ($collide_labelInfo$$ = $lastY$$ - $collide_labelInfo$$.$getY$() > $DvtChartPieLabelUtils$$.$_COLLISION_MARGIN$) && ($bottomQuarter$$ ? $bottomQuarter$$ && !$prevBottomQuarter$$ ? $collisionCentral$$ = $JSCompiler_alias_TRUE$$ : 
      $collisionBottom$$ = $JSCompiler_alias_TRUE$$ : $collisionTop$$ = $JSCompiler_alias_TRUE$$), $labelBottom$$ > $lastY$$ && ($lastY$$ = $labelBottom$$)
    }
    return $collisionTop$$ && $collisionBottom$$ || $collisionCentral$$ ? ($DvtChartPieLabelUtils$$.$_columnLabels$($pie$$4$$, $labelInfoArray$$, $isLeftSideLabels_side$$, $JSCompiler_alias_TRUE$$, $JSCompiler_alias_TRUE$$), $DvtChartPieLabelUtils$$.$_ALL_COLLISION$) : $collisionTop$$ ? ($DvtChartPieLabelUtils$$.$_columnLabels$($pie$$4$$, $labelInfoArray$$, $isLeftSideLabels_side$$, $JSCompiler_alias_TRUE$$, $JSCompiler_alias_FALSE$$), $DvtChartPieLabelUtils$$.$_HALF_COLLISION$) : $collisionBottom$$ ? 
    ($DvtChartPieLabelUtils$$.$_columnLabels$($pie$$4$$, $labelInfoArray$$, $isLeftSideLabels_side$$, $JSCompiler_alias_FALSE$$, $JSCompiler_alias_TRUE$$), $DvtChartPieLabelUtils$$.$_HALF_COLLISION$) : $DvtChartPieLabelUtils$$.$_NO_COLLISION$
  }
};
$DvtChartPieLabelUtils$$.$_setLabelsAndFeelers$ = function $$DvtChartPieLabelUtils$$$$_setLabelsAndFeelers$$($pie$$5$$, $alabels$$1$$, $i$$365_side$$1$$) {
  if(!($alabels$$1$$ == $JSCompiler_alias_NULL$$ || 0 >= $alabels$$1$$.length)) {
    var $excessLength_slice$$24$$, $maxLabelWidth$$3_sliceLabel$$3$$, $labelInfo$$1$$, $isLeftSide$$ = $i$$365_side$$1$$ == $DvtChartPieLabelUtils$$.$_LEFT_SIDE_LABELS$, $frame$$1$$ = $pie$$5$$.$_frame$, $excessWidth$$ = Infinity;
    for($i$$365_side$$1$$ = 0;$i$$365_side$$1$$ < $alabels$$1$$.length;$i$$365_side$$1$$++) {
      $labelInfo$$1$$ = $alabels$$1$$[$i$$365_side$$1$$], $excessLength_slice$$24$$ = $labelInfo$$1$$.$_slice$, $labelInfo$$1$$.$_hasFeeler$ ? ($excessLength_slice$$24$$ = $DvtChartPieLabelUtils$$.$_calculateFeeler$($labelInfo$$1$$, $excessLength_slice$$24$$, $isLeftSide$$), $maxLabelWidth$$3_sliceLabel$$3$$ = $DvtChartPieLabelUtils$$.$getMaxLabelWidth$($pie$$5$$, $labelInfo$$1$$.$getX$(), $isLeftSide$$), $labelInfo$$1$$.getWidth() - $excessLength_slice$$24$$ >= $maxLabelWidth$$3_sliceLabel$$3$$ || 
      0 == $labelInfo$$1$$.getWidth() ? $labelInfo$$1$$.$_hasFeeler$ = $JSCompiler_alias_FALSE$$ : $excessWidth$$ = Math.min($excessWidth$$, $excessLength_slice$$24$$)) : $JSCompiler_StaticMethods_setNoOutsideFeeler$$($excessLength_slice$$24$$)
    }
    for($i$$365_side$$1$$ = 0;$i$$365_side$$1$$ < $alabels$$1$$.length;$i$$365_side$$1$$++) {
      $labelInfo$$1$$ = $alabels$$1$$[$i$$365_side$$1$$], $excessLength_slice$$24$$ = $labelInfo$$1$$.$_slice$, $maxLabelWidth$$3_sliceLabel$$3$$ = $labelInfo$$1$$.$_sliceLabel$, $labelInfo$$1$$.$_hasFeeler$ && ($isLeftSide$$ ? $labelInfo$$1$$.$setX$($labelInfo$$1$$.$getX$() + $excessWidth$$) : $labelInfo$$1$$.$setX$($labelInfo$$1$$.$getX$() - $excessWidth$$), $DvtChartPieLabelUtils$$.$_calculateFeeler$($labelInfo$$1$$, $excessLength_slice$$24$$, $isLeftSide$$), $maxLabelWidth$$3_sliceLabel$$3$$.$setMaxLines$(1)), 
      $maxLabelWidth$$3_sliceLabel$$3$$.$setY$($labelInfo$$1$$.$getY$()), $maxLabelWidth$$3_sliceLabel$$3$$.$setX$($labelInfo$$1$$.$getX$()), $labelInfo$$1$$.$getY$() < $frame$$1$$.y || $labelInfo$$1$$.$getY$() + $labelInfo$$1$$.getHeight() > $frame$$1$$.y + $frame$$1$$.$h$ ? ($excessLength_slice$$24$$.$setSliceLabel$($JSCompiler_alias_NULL$$), $JSCompiler_StaticMethods_setNoOutsideFeeler$$($excessLength_slice$$24$$)) : ($DvtChartPieLabelUtils$$.$_truncateSliceLabel$($pie$$5$$, $excessLength_slice$$24$$, 
      $labelInfo$$1$$, $isLeftSide$$), 0 == $labelInfo$$1$$.getWidth() || 0 == $labelInfo$$1$$.getHeight() ? ($excessLength_slice$$24$$.$setSliceLabel$($JSCompiler_alias_NULL$$), $JSCompiler_StaticMethods_setNoOutsideFeeler$$($excessLength_slice$$24$$)) : $excessLength_slice$$24$$.$setSliceLabel$($maxLabelWidth$$3_sliceLabel$$3$$))
    }
  }
};
$DvtChartPieLabelUtils$$.$_calculateFeeler$ = function $$DvtChartPieLabelUtils$$$$_calculateFeeler$$($labelInfo$$2_pa$$, $slice$$25$$, $isLeft$$1$$) {
  var $endPt$$1_targetX$$ = $labelInfo$$2_pa$$.$getX$(), $radFeelerAngle_targetY_tilt$$2$$ = $labelInfo$$2_pa$$.$getY$() + $labelInfo$$2_pa$$.getHeight() * $DvtChartPieLabelUtils$$.$_LABEL_TO_FEELER_OFFSET$, $minHorizLength$$ = $DvtChartPieLabelUtils$$.$_FEELER_HORIZ_MINSIZE$ * $slice$$25$$.$_radiusX$, $midPt$$2_midX$$;
  $isLeft$$1$$ ? ($endPt$$1_targetX$$ += $DvtChartPieLabelUtils$$.$_LABEL_TO_FEELER_DISTANCE$, $midPt$$2_midX$$ = $endPt$$1_targetX$$ + $minHorizLength$$) : ($endPt$$1_targetX$$ -= $DvtChartPieLabelUtils$$.$_LABEL_TO_FEELER_DISTANCE$, $midPt$$2_midX$$ = $endPt$$1_targetX$$ - $minHorizLength$$);
  var $ma_startPt$$1$$ = {x:0, y:0};
  $midPt$$2_midX$$ = {x:$midPt$$2_midX$$, y:$radFeelerAngle_targetY_tilt$$2$$};
  $endPt$$1_targetX$$ = {x:$endPt$$1_targetX$$, y:$radFeelerAngle_targetY_tilt$$2$$};
  $ma_startPt$$1$$ = $labelInfo$$2_pa$$.$getAngle$();
  $radFeelerAngle_targetY_tilt$$2$$ = $DvtChartPieLabelUtils$$.$_adjustForDepth$($ma_startPt$$1$$, $slice$$25$$.getDepth());
  $ma_startPt$$1$$ = $DvtChartPieRenderUtils$$.$reflectAngleOverYAxis$($ma_startPt$$1$$, $slice$$25$$.$getCenter$().x, $slice$$25$$.$getCenter$().y + $radFeelerAngle_targetY_tilt$$2$$, $slice$$25$$.$_radiusX$, $slice$$25$$.$_radiusY$);
  $labelInfo$$2_pa$$ = dvt.$Math$.$degreesToRads$($labelInfo$$2_pa$$.$getPosition$());
  var $radFeelerAngle_targetY_tilt$$2$$ = Math.abs(Math.atan2($midPt$$2_midX$$.x - $ma_startPt$$1$$.x, $ma_startPt$$1$$.y - $midPt$$2_midX$$.y)), $horizOffset$$ = ($ma_startPt$$1$$.y - $midPt$$2_midX$$.y) * Math.tan($labelInfo$$2_pa$$);
  if($labelInfo$$2_pa$$ > Math.PI / 2 && $radFeelerAngle_targetY_tilt$$2$$ > Math.PI / 2 && $radFeelerAngle_targetY_tilt$$2$$ < $labelInfo$$2_pa$$ || $labelInfo$$2_pa$$ < Math.PI / 2 && $radFeelerAngle_targetY_tilt$$2$$ < Math.PI / 2 && $radFeelerAngle_targetY_tilt$$2$$ > $labelInfo$$2_pa$$) {
    $midPt$$2_midX$$.x = $isLeft$$1$$ ? $ma_startPt$$1$$.x - $horizOffset$$ : $ma_startPt$$1$$.x + $horizOffset$$
  }
  $slice$$25$$.$_outsideFeelerStart$ = $ma_startPt$$1$$;
  $slice$$25$$.$_outsideFeelerMid$ = $midPt$$2_midX$$;
  $slice$$25$$.$_outsideFeelerEnd$ = $endPt$$1_targetX$$;
  $slice$$25$$.$_hasFeeler$ = $JSCompiler_alias_TRUE$$;
  return Math.abs($endPt$$1_targetX$$.x - $midPt$$2_midX$$.x) - $minHorizLength$$
};
$DvtChartPieLabelUtils$$.$_adjustForDepth$ = function $$DvtChartPieLabelUtils$$$$_adjustForDepth$$($ma$$1$$, $pieDepth$$) {
  var $depth$$8$$ = 0;
  189 < $ma$$1$$ && 351 > $ma$$1$$ && ($depth$$8$$ = $pieDepth$$);
  return $depth$$8$$
};
$DvtChartPieLabelUtils$$.$_getMiddleLabel$ = function $$DvtChartPieLabelUtils$$$$_getMiddleLabel$$($alabels$$2$$) {
  for(var $bestAngle$$ = 91, $bestIndex$$ = -1, $i$$366$$ = 0;$i$$366$$ < $alabels$$2$$.length;$i$$366$$++) {
    var $pa$$1$$ = $alabels$$2$$[$i$$366$$].$getPosition$();
    Math.abs($pa$$1$$ - 90) < $bestAngle$$ && ($bestAngle$$ = Math.abs($pa$$1$$ - 90), $bestIndex$$ = $i$$366$$)
  }
  return $bestIndex$$
};
$DvtChartPieLabelUtils$$.$_setOptimalLabelPosition$ = function $$DvtChartPieLabelUtils$$$$_setOptimalLabelPosition$$($optimalY_pie$$6$$, $labelInfo$$3$$, $b$$12_heightFromCenter_vertX$$) {
  $labelInfo$$3$$.$setX$($b$$12_heightFromCenter_vertX$$);
  $b$$12_heightFromCenter_vertX$$ = $optimalY_pie$$6$$.$_radiusY$ * (1 + $DvtChartPieLabelUtils$$.$_FEELER_RAD_MINSIZE$);
  var $angleInRad_tilt$$3$$ = dvt.$Math$.$degreesToRads$($labelInfo$$3$$.$getPosition$());
  $b$$12_heightFromCenter_vertX$$ *= Math.cos($angleInRad_tilt$$3$$);
  $angleInRad_tilt$$3$$ = $DvtChartPieLabelUtils$$.$_adjustForDepth$($labelInfo$$3$$.$getAngle$(), $optimalY_pie$$6$$.getDepth());
  $optimalY_pie$$6$$ = $optimalY_pie$$6$$.$getCenter$().y - $b$$12_heightFromCenter_vertX$$ - $labelInfo$$3$$.getHeight() * $DvtChartPieLabelUtils$$.$_LABEL_TO_FEELER_OFFSET$ + $angleInRad_tilt$$3$$;
  $labelInfo$$3$$.$setY$($JSCompiler_StaticMethods_boundY$$($labelInfo$$3$$, $optimalY_pie$$6$$))
};
$DvtChartPieLabelUtils$$.$_getRadFeelerAngle$ = function $$DvtChartPieLabelUtils$$$$_getRadFeelerAngle$$($labelInfo$$4_ma$$2$$, $x$$111$$, $y$$90$$) {
  var $slice$$26_startPt$$2$$ = $labelInfo$$4_ma$$2$$.$_slice$, $center$$5$$ = $slice$$26_startPt$$2$$.$getCenter$();
  $labelInfo$$4_ma$$2$$ = $labelInfo$$4_ma$$2$$.$getAngle$();
  var $tilt$$4$$ = $DvtChartPieLabelUtils$$.$_adjustForDepth$($labelInfo$$4_ma$$2$$, $slice$$26_startPt$$2$$.getDepth()), $slice$$26_startPt$$2$$ = $DvtChartPieRenderUtils$$.$reflectAngleOverYAxis$($labelInfo$$4_ma$$2$$, $center$$5$$.x, $center$$5$$.y + $tilt$$4$$, $slice$$26_startPt$$2$$.$_radiusX$, $slice$$26_startPt$$2$$.$_radiusY$);
  return Math.atan2(Math.abs($x$$111$$ - $slice$$26_startPt$$2$$.x), $slice$$26_startPt$$2$$.y - $y$$90$$)
};
$DvtChartPieLabelUtils$$.$_columnLabels$ = function $$DvtChartPieLabelUtils$$$$_columnLabels$$($pie$$7$$, $alabels$$3$$, $i$$367_isLeft$$3_startLabel$$, $isTop_optimalY$$1$$, $isBottom$$) {
  var $frame$$2_vertX$$1$$ = $pie$$7$$.$_frame$, $minY$$11_startIndex$$7$$ = $frame$$2_vertX$$1$$.y, $highestY_maxY$$9$$ = $frame$$2_vertX$$1$$.y + $frame$$2_vertX$$1$$.$h$, $labelInfo$$5_labelPostion_minFeelerDist_radFeelerAngle$$1$$, $lowestY_pa$$2$$ = 0, $frame$$2_vertX$$1$$ = $pie$$7$$.$getCenter$().x, $feelerX_labelHeight$$3$$;
  $labelInfo$$5_labelPostion_minFeelerDist_radFeelerAngle$$1$$ = $pie$$7$$.$_radiusX$ * (1 + $DvtChartPieLabelUtils$$.$_FEELER_RAD_MINSIZE$ + $DvtChartPieLabelUtils$$.$_FEELER_HORIZ_MINSIZE$);
  $i$$367_isLeft$$3_startLabel$$ ? ($frame$$2_vertX$$1$$ -= $labelInfo$$5_labelPostion_minFeelerDist_radFeelerAngle$$1$$, $feelerX_labelHeight$$3$$ = $frame$$2_vertX$$1$$ + $pie$$7$$.$_radiusX$ * $DvtChartPieLabelUtils$$.$_FEELER_HORIZ_MINSIZE$) : ($frame$$2_vertX$$1$$ += $labelInfo$$5_labelPostion_minFeelerDist_radFeelerAngle$$1$$, $feelerX_labelHeight$$3$$ = $frame$$2_vertX$$1$$ - $pie$$7$$.$_radiusX$ * $DvtChartPieLabelUtils$$.$_FEELER_HORIZ_MINSIZE$);
  for($i$$367_isLeft$$3_startLabel$$ = 0;$i$$367_isLeft$$3_startLabel$$ < $alabels$$3$$.length;$i$$367_isLeft$$3_startLabel$$++) {
    $labelInfo$$5_labelPostion_minFeelerDist_radFeelerAngle$$1$$ = $alabels$$3$$[$i$$367_isLeft$$3_startLabel$$], $lowestY_pa$$2$$ = dvt.$Math$.$degreesToRads$($labelInfo$$5_labelPostion_minFeelerDist_radFeelerAngle$$1$$.$getPosition$()), $labelInfo$$5_labelPostion_minFeelerDist_radFeelerAngle$$1$$ = $DvtChartPieLabelUtils$$.$_getRadFeelerAngle$($labelInfo$$5_labelPostion_minFeelerDist_radFeelerAngle$$1$$, $feelerX_labelHeight$$3$$, $minY$$11_startIndex$$7$$), $labelInfo$$5_labelPostion_minFeelerDist_radFeelerAngle$$1$$ - 
    $lowestY_pa$$2$$ > 0.45 * Math.PI ? ($alabels$$3$$.splice($i$$367_isLeft$$3_startLabel$$, 1), $i$$367_isLeft$$3_startLabel$$--) : ($alabels$$3$$[$i$$367_isLeft$$3_startLabel$$].$_minY$ = $minY$$11_startIndex$$7$$, $minY$$11_startIndex$$7$$ += $alabels$$3$$[$i$$367_isLeft$$3_startLabel$$].getHeight())
  }
  for($i$$367_isLeft$$3_startLabel$$ = $alabels$$3$$.length - 1;0 <= $i$$367_isLeft$$3_startLabel$$;$i$$367_isLeft$$3_startLabel$$--) {
    $labelInfo$$5_labelPostion_minFeelerDist_radFeelerAngle$$1$$ = $alabels$$3$$[$i$$367_isLeft$$3_startLabel$$], $lowestY_pa$$2$$ = dvt.$Math$.$degreesToRads$($labelInfo$$5_labelPostion_minFeelerDist_radFeelerAngle$$1$$.$getPosition$()), $labelInfo$$5_labelPostion_minFeelerDist_radFeelerAngle$$1$$ = $DvtChartPieLabelUtils$$.$_getRadFeelerAngle$($labelInfo$$5_labelPostion_minFeelerDist_radFeelerAngle$$1$$, $feelerX_labelHeight$$3$$, $highestY_maxY$$9$$), $lowestY_pa$$2$$ - $labelInfo$$5_labelPostion_minFeelerDist_radFeelerAngle$$1$$ > 
    0.45 * Math.PI ? $alabels$$3$$.splice($i$$367_isLeft$$3_startLabel$$, 1) : ($highestY_maxY$$9$$ -= $alabels$$3$$[$i$$367_isLeft$$3_startLabel$$].getHeight(), $alabels$$3$$[$i$$367_isLeft$$3_startLabel$$].$_maxY$ = $highestY_maxY$$9$$)
  }
  $minY$$11_startIndex$$7$$ = $DvtChartPieLabelUtils$$.$_getMiddleLabel$($alabels$$3$$);
  $i$$367_isLeft$$3_startLabel$$ = $alabels$$3$$[$minY$$11_startIndex$$7$$];
  $isTop_optimalY$$1$$ && !$isBottom$$ && $i$$367_isLeft$$3_startLabel$$.$_minY$ + $i$$367_isLeft$$3_startLabel$$.getHeight() > $pie$$7$$.$getCenter$().y && ($isBottom$$ = $JSCompiler_alias_TRUE$$);
  $isBottom$$ && !$isTop_optimalY$$1$$ && $i$$367_isLeft$$3_startLabel$$.$_maxY$ < $pie$$7$$.$getCenter$().y && ($isTop_optimalY$$1$$ = $JSCompiler_alias_TRUE$$);
  $labelInfo$$5_labelPostion_minFeelerDist_radFeelerAngle$$1$$ = $i$$367_isLeft$$3_startLabel$$.$getPosition$();
  if($isBottom$$ && $isTop_optimalY$$1$$ || 90 < $labelInfo$$5_labelPostion_minFeelerDist_radFeelerAngle$$1$$ && $isBottom$$ || 90 >= $labelInfo$$5_labelPostion_minFeelerDist_radFeelerAngle$$1$$ && $isTop_optimalY$$1$$) {
    $DvtChartPieLabelUtils$$.$_setOptimalLabelPosition$($pie$$7$$, $i$$367_isLeft$$3_startLabel$$, $frame$$2_vertX$$1$$), $i$$367_isLeft$$3_startLabel$$.$_hasFeeler$ = $JSCompiler_alias_TRUE$$
  }
  $highestY_maxY$$9$$ = $i$$367_isLeft$$3_startLabel$$.$getY$();
  $lowestY_pa$$2$$ = $i$$367_isLeft$$3_startLabel$$.$getY$() + $i$$367_isLeft$$3_startLabel$$.getHeight();
  if($isTop_optimalY$$1$$) {
    for($i$$367_isLeft$$3_startLabel$$ = $minY$$11_startIndex$$7$$ - 1;0 <= $i$$367_isLeft$$3_startLabel$$;$i$$367_isLeft$$3_startLabel$$--) {
      $labelInfo$$5_labelPostion_minFeelerDist_radFeelerAngle$$1$$ = $alabels$$3$$[$i$$367_isLeft$$3_startLabel$$], $feelerX_labelHeight$$3$$ = $labelInfo$$5_labelPostion_minFeelerDist_radFeelerAngle$$1$$.getHeight(), $DvtChartPieLabelUtils$$.$_setOptimalLabelPosition$($pie$$7$$, $labelInfo$$5_labelPostion_minFeelerDist_radFeelerAngle$$1$$, $frame$$2_vertX$$1$$), $labelInfo$$5_labelPostion_minFeelerDist_radFeelerAngle$$1$$.$_hasFeeler$ = $JSCompiler_alias_TRUE$$, $isTop_optimalY$$1$$ = $labelInfo$$5_labelPostion_minFeelerDist_radFeelerAngle$$1$$.$getY$(), 
      $highestY_maxY$$9$$ = $isTop_optimalY$$1$$ + $feelerX_labelHeight$$3$$ < $highestY_maxY$$9$$ ? $isTop_optimalY$$1$$ : $highestY_maxY$$9$$ - $feelerX_labelHeight$$3$$, $labelInfo$$5_labelPostion_minFeelerDist_radFeelerAngle$$1$$.$setY$($highestY_maxY$$9$$)
    }
  }
  if($isBottom$$) {
    for($i$$367_isLeft$$3_startLabel$$ = $minY$$11_startIndex$$7$$ + 1;$i$$367_isLeft$$3_startLabel$$ < $alabels$$3$$.length;$i$$367_isLeft$$3_startLabel$$++) {
      $labelInfo$$5_labelPostion_minFeelerDist_radFeelerAngle$$1$$ = $alabels$$3$$[$i$$367_isLeft$$3_startLabel$$], $feelerX_labelHeight$$3$$ = $labelInfo$$5_labelPostion_minFeelerDist_radFeelerAngle$$1$$.getHeight(), $DvtChartPieLabelUtils$$.$_setOptimalLabelPosition$($pie$$7$$, $labelInfo$$5_labelPostion_minFeelerDist_radFeelerAngle$$1$$, $frame$$2_vertX$$1$$), $labelInfo$$5_labelPostion_minFeelerDist_radFeelerAngle$$1$$.$_hasFeeler$ = $JSCompiler_alias_TRUE$$, $isTop_optimalY$$1$$ = $labelInfo$$5_labelPostion_minFeelerDist_radFeelerAngle$$1$$.$getY$(), 
      $lowestY_pa$$2$$ = $isTop_optimalY$$1$$ > $lowestY_pa$$2$$ ? $isTop_optimalY$$1$$ + $feelerX_labelHeight$$3$$ : $lowestY_pa$$2$$ + $feelerX_labelHeight$$3$$, $labelInfo$$5_labelPostion_minFeelerDist_radFeelerAngle$$1$$.$setY$($lowestY_pa$$2$$ - $feelerX_labelHeight$$3$$)
    }
  }
};
$DvtChartPieLabelUtils$$.$_truncateSliceLabel$ = function $$DvtChartPieLabelUtils$$$$_truncateSliceLabel$$($pie$$8_tmDimPt$$, $slice$$27$$, $labelInfo$$6$$, $isLeft$$4$$) {
  var $sliceLabel$$4$$ = $labelInfo$$6$$.$_sliceLabel$, $style$$65$$ = $sliceLabel$$4$$.$getCSSStyle$(), $maxLabelWidth$$4_numChildren$$13$$ = 0, $maxLabelWidth$$4_numChildren$$13$$ = $pie$$8_tmDimPt$$.$getNumChildren$(), $removeTextArea$$ = $JSCompiler_alias_FALSE$$;
  $pie$$8_tmDimPt$$.contains($sliceLabel$$4$$) || ($pie$$8_tmDimPt$$.$addChild$($sliceLabel$$4$$), $removeTextArea$$ = $JSCompiler_alias_TRUE$$);
  $sliceLabel$$4$$.$setCSSStyle$($style$$65$$);
  $sliceLabel$$4$$.$setTextString$($slice$$27$$.$_sliceLabelString$);
  $removeTextArea$$ && $pie$$8_tmDimPt$$.$removeChildAt$($maxLabelWidth$$4_numChildren$$13$$);
  $maxLabelWidth$$4_numChildren$$13$$ = $DvtChartPieLabelUtils$$.$getMaxLabelWidth$($pie$$8_tmDimPt$$, $labelInfo$$6$$.$getX$(), $isLeft$$4$$);
  $pie$$8_tmDimPt$$ = $DvtChartPieLabelUtils$$.$_getTextDimension$($pie$$8_tmDimPt$$, $slice$$27$$, $sliceLabel$$4$$, $maxLabelWidth$$4_numChildren$$13$$, $labelInfo$$6$$.$_initialNumLines$);
  $labelInfo$$6$$.$setWidth$($pie$$8_tmDimPt$$.x);
  $labelInfo$$6$$.getHeight() != $pie$$8_tmDimPt$$.y && $labelInfo$$6$$.$setHeight$($pie$$8_tmDimPt$$.y)
};
$DvtChartPieLabelUtils$$.$_generateInitialLayout$ = function $$DvtChartPieLabelUtils$$$$_generateInitialLayout$$($pie$$9$$) {
  for(var $arArrays$$ = Array(2), $leftLabels$$1$$ = [], $rightLabels$$1$$ = [], $slices$$8$$ = $pie$$9$$.$_slices$, $frame$$3$$ = $pie$$9$$.$_frame$, $i$$368$$ = 0;$i$$368$$ < $slices$$8$$.length;$i$$368$$++) {
    var $slice$$28$$ = $slices$$8$$[$i$$368$$], $labelPosition$$4_s_label$$ = $JSCompiler_StaticMethods_getSeriesLabelPosition$$($pie$$9$$, $slice$$28$$.$getSeriesIndex$());
    if(!($slice$$28$$.$_sliceLabel$ != $JSCompiler_alias_NULL$$ || "none" == $labelPosition$$4_s_label$$ || "center" == $labelPosition$$4_s_label$$)) {
      var $labelPosition$$4_s_label$$ = $DvtChartPieLabelUtils$$.$_createLabel$($slice$$28$$, $JSCompiler_alias_FALSE$$), $ma$$3$$ = $slice$$28$$.$getAngleStart$() + $slice$$28$$.$getAngleExtent$() / 2;
      360 < $ma$$3$$ && ($ma$$3$$ -= 360);
      0 > $ma$$3$$ && ($ma$$3$$ += 360);
      var $labelPt$$ = $DvtChartPieRenderUtils$$.$reflectAngleOverYAxis$($ma$$3$$, $pie$$9$$.$getCenter$().x, $pie$$9$$.$getCenter$().y, $pie$$9$$.$_radiusX$ * $DvtChartPieLabelUtils$$.$_OUTSIDE_LABEL_DISTANCE$, $pie$$9$$.$_radiusY$ * $DvtChartPieLabelUtils$$.$_OUTSIDE_LABEL_DISTANCE$), $tmDimPt$$1$$ = $DvtChartPieLabelUtils$$.$_getTextDimension$($pie$$9$$, $slice$$28$$, $labelPosition$$4_s_label$$, $DvtChartPieLabelUtils$$.$getMaxLabelWidth$($pie$$9$$, $labelPt$$.x, 90 <= $ma$$3$$ && 270 > $ma$$3$$), 
      $DvtChartPieLabelUtils$$.$_MAX_LINES_PER_LABEL$);
      165 > $ma$$3$$ && 15 < $ma$$3$$ ? $labelPt$$.y -= 1 * $tmDimPt$$1$$.y : 15 > $ma$$3$$ || 345 < $ma$$3$$ ? ($labelPt$$.y -= 0.5 * $tmDimPt$$1$$.y, $labelPt$$.x += 0.2 * $tmDimPt$$1$$.y) : 165 < $ma$$3$$ && 195 > $ma$$3$$ && ($labelPt$$.y -= 0.5 * $tmDimPt$$1$$.y, $labelPt$$.x -= 0.2 * $tmDimPt$$1$$.y);
      var $pa$$3_tilt$$5$$ = $DvtChartPieLabelUtils$$.$_adjustForDepth$($ma$$3$$, $pie$$9$$.getDepth());
      $labelPt$$.y += $pa$$3_tilt$$5$$;
      1 == $slices$$8$$.length && ($labelPt$$.x -= $tmDimPt$$1$$.x / 2);
      $labelPt$$.y < $frame$$3$$.y || $labelPt$$.y + $tmDimPt$$1$$.y > $frame$$3$$.y + $frame$$3$$.$h$ || (90 <= $ma$$3$$ && 270 > $ma$$3$$ ? ($labelPosition$$4_s_label$$.$alignRight$(), $pa$$3_tilt$$5$$ = $ma$$3$$ - 90, $DvtChartPieLabelUtils$$.$_createLabelInfo$($slice$$28$$, $labelPosition$$4_s_label$$, $ma$$3$$, $pa$$3_tilt$$5$$, $tmDimPt$$1$$, $labelPt$$, $leftLabels$$1$$)) : ($pa$$3_tilt$$5$$ = 90 >= $ma$$3$$ ? Math.abs(90 - $ma$$3$$) : 180 - ($ma$$3$$ - 270), $DvtChartPieLabelUtils$$.$_createLabelInfo$($slice$$28$$, 
      $labelPosition$$4_s_label$$, $ma$$3$$, $pa$$3_tilt$$5$$, $tmDimPt$$1$$, $labelPt$$, $rightLabels$$1$$)))
    }
  }
  $arArrays$$[0] = $leftLabels$$1$$;
  $arArrays$$[1] = $rightLabels$$1$$;
  return $arArrays$$
};
$DvtChartPieLabelUtils$$.$_createLabelInfo$ = function $$DvtChartPieLabelUtils$$$$_createLabelInfo$$($slice$$29$$, $sliceLabel$$5$$, $ma$$4$$, $pa$$4$$, $tmDimPt$$2$$, $labelPt$$1$$, $labelInfoArray$$1$$) {
  for(var $insertPos$$ = -1, $labelInfo$$7$$, $j$$61$$ = 0;$j$$61$$ < $labelInfoArray$$1$$.length;$j$$61$$++) {
    if($labelInfo$$7$$ = $labelInfoArray$$1$$[$j$$61$$], $labelInfo$$7$$.$getPosition$() > $pa$$4$$) {
      $insertPos$$ = $j$$61$$;
      break
    }
  }
  -1 == $insertPos$$ && ($insertPos$$ = $labelInfoArray$$1$$.length);
  $labelInfo$$7$$ = new $DvtChartPieLabelInfo$$;
  $labelInfo$$7$$.$setPosition$($pa$$4$$);
  $labelInfo$$7$$.$setAngle$($ma$$4$$);
  $labelInfo$$7$$.$setSliceLabel$($sliceLabel$$5$$);
  $labelInfo$$7$$.$_slice$ = $slice$$29$$;
  $labelInfo$$7$$.$setWidth$($tmDimPt$$2$$.x);
  $labelInfo$$7$$.$setHeight$($tmDimPt$$2$$.y);
  $labelInfo$$7$$.$setX$($labelPt$$1$$.x);
  $labelInfo$$7$$.$setY$($labelPt$$1$$.y);
  $labelInfoArray$$1$$.splice($insertPos$$, 0, $labelInfo$$7$$)
};
$DvtChartPieLabelUtils$$.$_getTextDimension$ = function $$DvtChartPieLabelUtils$$$$_getTextDimension$$($pieChart$$9$$, $minChars$$5_slice$$30$$, $sliceLabel$$6$$, $dimensions$$2_maxWidth$$10$$, $maxLines$$) {
  $sliceLabel$$6$$.$setMaxLines$($maxLines$$);
  $minChars$$5_slice$$30$$ = !$DvtChartPieLabelUtils$$.$_isTextLabel$($pieChart$$9$$, $minChars$$5_slice$$30$$) ? $sliceLabel$$6$$.$getTextString$().length : $JSCompiler_alias_NULL$$;
  return dvt.$TextUtils$.$fitText$($sliceLabel$$6$$, $dimensions$$2_maxWidth$$10$$, Infinity, $pieChart$$9$$, $minChars$$5_slice$$30$$) ? ($pieChart$$9$$.$addChild$($sliceLabel$$6$$), $dimensions$$2_maxWidth$$10$$ = $sliceLabel$$6$$.$getDimensions$(), $pieChart$$9$$.removeChild($sliceLabel$$6$$), {x:$dimensions$$2_maxWidth$$10$$.$w$, y:$dimensions$$2_maxWidth$$10$$.$h$}) : {x:0, y:0}
};
$DvtChartPieLabelUtils$$.$_isTextLabel$ = function $$DvtChartPieLabelUtils$$$$_isTextLabel$$($pie$$10$$, $slice$$31$$) {
  var $customLabel$$1$$ = $slice$$31$$.$_customLabel$;
  return-1 != $pie$$10$$.$getOptions$().styleDefaults.sliceLabelType.indexOf("text") || $customLabel$$1$$ != $JSCompiler_alias_NULL$$ && "number" != typeof $customLabel$$1$$
};
$DvtChartPieLabelUtils$$.$getMaxLabelWidth$ = function $$DvtChartPieLabelUtils$$$$getMaxLabelWidth$$($frame$$4_pie$$11$$, $labelX$$2$$, $isLeftSide$$2$$) {
  $frame$$4_pie$$11$$ = $frame$$4_pie$$11$$.$_frame$;
  return $isLeftSide$$2$$ ? $labelX$$2$$ - $frame$$4_pie$$11$$.x : $frame$$4_pie$$11$$.x + $frame$$4_pie$$11$$.$w$ - $labelX$$2$$
};
var $DvtChartRenderer$$ = {};
dvt.$Obj$.$createSubclass$($DvtChartRenderer$$, dvt.$Obj$);
$DvtChartRenderer$$.$_BUTTON_SIZE$ = 16;
$DvtChartRenderer$$.$_BUTTON_PADDING$ = 5;
$DvtChartRenderer$$.$_BUTTON_CORNER_DIST$ = 4;
$DvtChartRenderer$$.$_BUTTON_OPACITY$ = 0.8;
$DvtChartRenderer$$.$_MOUSE_WHEEL_ZOOM_RATE_SLOW$ = 0.05;
$DvtChartRenderer$$.$_MOUSE_WHEEL_ZOOM_RATE_FAST$ = 0.2;
$DvtChartRenderer$$.$render$ = function $$DvtChartRenderer$$$$render$$($chart$$265$$, $container$$25$$, $availSpace$$26$$) {
  $DvtChartRenderer$$.$_renderBackground$($chart$$265$$, $container$$25$$, $availSpace$$26$$);
  if($DvtChartDataUtils$$.$hasInvalidData$($chart$$265$$)) {
    $DvtChartRenderer$$.$renderEmptyText$($chart$$265$$, $container$$25$$, $availSpace$$26$$)
  }else {
    $DvtChartTypeUtils$$.$isOverview$($chart$$265$$) || ($chart$$265$$.$getOptions$()._maxOverflowCoord = $availSpace$$26$$.x + $availSpace$$26$$.$w$, $chart$$265$$.$getOptions$()._minOverflowCoord = $availSpace$$26$$.x);
    $DvtChartRenderer$$.$_addOuterGaps$($chart$$265$$, $availSpace$$26$$);
    var $titleSpace$$ = $availSpace$$26$$.$clone$();
    $DvtChartRenderer$$.$_renderTitles$($chart$$265$$, $container$$25$$, $availSpace$$26$$);
    $DvtChartRenderer$$.$_adjustAvailSpace$($availSpace$$26$$);
    $DvtChartLegendRenderer$$.$render$($chart$$265$$, $container$$25$$, $availSpace$$26$$);
    $DvtChartRenderer$$.$_adjustAvailSpace$($availSpace$$26$$);
    var $horizSbDim$$ = $DvtChartRenderer$$.$_prerenderHorizScrollbar$($chart$$265$$, $container$$25$$, $availSpace$$26$$), $vertSbDim$$ = $DvtChartRenderer$$.$_prerenderVertScrollbar$($chart$$265$$, $container$$25$$, $availSpace$$26$$);
    $DvtChartRenderer$$.$_adjustAvailSpace$($availSpace$$26$$);
    var $maxHeight$$inline_3115_space$$inline_3113$$ = $availSpace$$26$$.$clone$();
    $chart$$265$$.$_axisSpace$ = $maxHeight$$inline_3115_space$$inline_3113$$;
    var $maxWidth$$inline_3114_space$$inline_3118$$;
    $DvtChartAxisUtils$$.$isAxisRendered$($chart$$265$$, "x") ? ($maxWidth$$inline_3114_space$$inline_3118$$ = 0.8 * $maxHeight$$inline_3115_space$$inline_3113$$.$w$, $maxHeight$$inline_3115_space$$inline_3113$$ = $maxHeight$$inline_3115_space$$inline_3113$$.$h$ - 4 * $DvtChartAxisUtils$$.$getTickLabelHeight$($chart$$265$$, "x")) : $DvtChartAxisUtils$$.$isAxisRendered$($chart$$265$$, "y") ? ($maxWidth$$inline_3114_space$$inline_3118$$ = $maxHeight$$inline_3115_space$$inline_3113$$.$w$, $maxHeight$$inline_3115_space$$inline_3113$$ = 
    $maxHeight$$inline_3115_space$$inline_3113$$.$h$ - $DvtChartAxisUtils$$.$getTickLabelHeight$($chart$$265$$, "y")) : ($maxWidth$$inline_3114_space$$inline_3118$$ = $maxHeight$$inline_3115_space$$inline_3113$$.$w$, $maxHeight$$inline_3115_space$$inline_3113$$ = $maxHeight$$inline_3115_space$$inline_3113$$.$h$);
    $chart$$265$$.$_radius$ = Math.min($maxWidth$$inline_3114_space$$inline_3118$$, $maxHeight$$inline_3115_space$$inline_3113$$) / 2;
    $DvtChartAxisRenderer$$.$render$($chart$$265$$, $container$$25$$, $availSpace$$26$$);
    $DvtChartRenderer$$.$_adjustAvailSpace$($availSpace$$26$$);
    $DvtChartRenderer$$.$_positionLegend$($chart$$265$$.$legend$, $availSpace$$26$$);
    $maxWidth$$inline_3114_space$$inline_3118$$ = $availSpace$$26$$.$clone$();
    $chart$$265$$.$_plotAreaSpace$ = $maxWidth$$inline_3114_space$$inline_3118$$;
    $DvtChartRenderer$$.$_setEventHandlers$($chart$$265$$);
    $DvtChartRenderer$$.$_renderScrollbars$($chart$$265$$, $horizSbDim$$, $vertSbDim$$);
    $DvtChartRenderer$$.$_updateTitles$($chart$$265$$, $container$$25$$, $titleSpace$$, $availSpace$$26$$);
    $DvtChartRenderer$$.$_renderPlotArea$($chart$$265$$, $container$$25$$, $availSpace$$26$$);
    $DvtChartTypeUtils$$.$isPolar$($chart$$265$$) && $container$$25$$.$addChild$($chart$$265$$.$yAxis$);
    $DvtChartRenderer$$.$_renderDragButtons$($chart$$265$$)
  }
};
$DvtChartRenderer$$.$_setEventHandlers$ = function $$DvtChartRenderer$$$$_setEventHandlers$$($chart$$266$$) {
  var $options$$88$$ = $chart$$266$$.$getOptions$(), $em$$1$$ = $chart$$266$$.$getEventManager$();
  if($DvtChartTypeUtils$$.$hasAxes$($chart$$266$$) && !$DvtChartTypeUtils$$.$isOverview$($chart$$266$$)) {
    var $chartBounds$$ = new dvt.$Rectangle$(0, 0, $chart$$266$$.getWidth(), $chart$$266$$.getHeight()), $plotAreaBounds$$3$$ = $chart$$266$$.$_plotAreaSpace$, $axisBounds$$1_vertAxisBounds$$ = $chart$$266$$.$_axisSpace$, $horizAxisBounds$$ = new dvt.$Rectangle$($plotAreaBounds$$3$$.x, $axisBounds$$1_vertAxisBounds$$.y, $plotAreaBounds$$3$$.$w$, $axisBounds$$1_vertAxisBounds$$.$h$), $axisBounds$$1_vertAxisBounds$$ = new dvt.$Rectangle$($axisBounds$$1_vertAxisBounds$$.x, $plotAreaBounds$$3$$.y, $axisBounds$$1_vertAxisBounds$$.$w$, 
    $plotAreaBounds$$3$$.$h$), $marqueeFill$$ = new dvt.$SolidFill$($options$$88$$.styleDefaults.marqueeColor), $marqueeStroke$$ = new dvt.$SolidStroke$($options$$88$$.styleDefaults.marqueeBorderColor), $direction$$12_marqueeHandler_panZoomHandler_zoomRate$$;
    $DvtChartEventUtils$$.$isScrollable$($chart$$266$$) && ($direction$$12_marqueeHandler_panZoomHandler_zoomRate$$ = $DvtChartEventUtils$$.$isDelayedScroll$($chart$$266$$) ? $DvtChartRenderer$$.$_MOUSE_WHEEL_ZOOM_RATE_FAST$ : $DvtChartRenderer$$.$_MOUSE_WHEEL_ZOOM_RATE_SLOW$, $direction$$12_marqueeHandler_panZoomHandler_zoomRate$$ = new dvt.$PanZoomHandler$($chart$$266$$, $plotAreaBounds$$3$$, $chartBounds$$, $direction$$12_marqueeHandler_panZoomHandler_zoomRate$$), $direction$$12_marqueeHandler_panZoomHandler_zoomRate$$.$setPanCursor$($options$$88$$._resources.panCursorUp, 
    $options$$88$$._resources.panCursorDown), $em$$1$$.$_panZoomHandler$ = $direction$$12_marqueeHandler_panZoomHandler_zoomRate$$, $DvtChartEventUtils$$.$isZoomable$($chart$$266$$) && ($direction$$12_marqueeHandler_panZoomHandler_zoomRate$$ = $DvtChartEventUtils$$.$getZoomDirection$($chart$$266$$), $direction$$12_marqueeHandler_panZoomHandler_zoomRate$$ = $DvtChartTypeUtils$$.$isHorizontal$($chart$$266$$) || "y" == $direction$$12_marqueeHandler_panZoomHandler_zoomRate$$ ? new dvt.$MarqueeHandler$($chart$$266$$, 
    $plotAreaBounds$$3$$, $chartBounds$$, $marqueeFill$$, $marqueeStroke$$, $JSCompiler_alias_FALSE$$, $JSCompiler_alias_TRUE$$, $JSCompiler_alias_NULL$$, $axisBounds$$1_vertAxisBounds$$) : $DvtChartTypeUtils$$.$isBLAC$($chart$$266$$) || "x" == $direction$$12_marqueeHandler_panZoomHandler_zoomRate$$ ? new dvt.$MarqueeHandler$($chart$$266$$, $plotAreaBounds$$3$$, $chartBounds$$, $marqueeFill$$, $marqueeStroke$$, $JSCompiler_alias_TRUE$$, $JSCompiler_alias_FALSE$$, $horizAxisBounds$$, $JSCompiler_alias_NULL$$) : 
    new dvt.$MarqueeHandler$($chart$$266$$, $plotAreaBounds$$3$$, $chartBounds$$, $marqueeFill$$, $marqueeStroke$$, $JSCompiler_alias_TRUE$$, $JSCompiler_alias_TRUE$$, $horizAxisBounds$$, $axisBounds$$1_vertAxisBounds$$), $em$$1$$.$_marqueeZoomHandler$ = $direction$$12_marqueeHandler_panZoomHandler_zoomRate$$));
    "multiple" == $options$$88$$.selectionMode && ($direction$$12_marqueeHandler_panZoomHandler_zoomRate$$ = new dvt.$MarqueeHandler$($chart$$266$$, $plotAreaBounds$$3$$, $chartBounds$$, $marqueeFill$$, $marqueeStroke$$, $JSCompiler_alias_TRUE$$, $JSCompiler_alias_TRUE$$, $horizAxisBounds$$, $axisBounds$$1_vertAxisBounds$$), $em$$1$$.$_marqueeSelectHandler$ = $direction$$12_marqueeHandler_panZoomHandler_zoomRate$$)
  }
};
$DvtChartRenderer$$.$rerenderAxisAndPlotArea$ = function $$DvtChartRenderer$$$$rerenderAxisAndPlotArea$$($chart$$267$$, $container$$26$$) {
  if(!$DvtChartDataUtils$$.$hasInvalidData$($chart$$267$$)) {
    var $availSpace$$27$$ = $chart$$267$$.$_axisSpace$.$clone$(), $selectionHandler$$3$$ = $chart$$267$$.$getSelectionHandler$();
    if($selectionHandler$$3$$) {
      var $selectedIds$$4$$ = $selectionHandler$$3$$.$getSelectedIds$()
    }
    var $focusState$$2$$ = $JSCompiler_StaticMethods___cacheChartFocus$$($chart$$267$$);
    $JSCompiler_StaticMethods_hideHoverFeedback$$($chart$$267$$.$EventManager$);
    $chart$$267$$.$Peers$ = [];
    $chart$$267$$.$_container$.removeChild($chart$$267$$.$xAxis$);
    $chart$$267$$.$_container$.removeChild($chart$$267$$.$yAxis$);
    $chart$$267$$.$_container$.removeChild($chart$$267$$.$y2Axis$);
    $chart$$267$$.$_plotArea$ && $chart$$267$$.$_plotArea$ == $chart$$267$$.$_panZoomTarget$ ? $chart$$267$$.$_plotArea$.$setVisible$($JSCompiler_alias_FALSE$$) : $chart$$267$$.$_container$.removeChild($chart$$267$$.$_plotArea$);
    $chart$$267$$.$_plotArea$ = $JSCompiler_alias_NULL$$;
    $chart$$267$$.$Cache$ = {};
    $DvtChartAxisRenderer$$.$render$($chart$$267$$, $container$$26$$, $availSpace$$27$$);
    $DvtChartRenderer$$.$_adjustAvailSpace$($availSpace$$27$$);
    var $space$$inline_3132$$ = $availSpace$$27$$.$clone$();
    $chart$$267$$.$_plotAreaSpace$ = $space$$inline_3132$$;
    $DvtChartRenderer$$.$_renderPlotArea$($chart$$267$$, $container$$26$$, $availSpace$$27$$);
    $selectionHandler$$3$$ && $selectionHandler$$3$$.$processInitialSelections$($selectedIds$$4$$, $JSCompiler_StaticMethods_getChartObjPeers$$($chart$$267$$));
    $JSCompiler_StaticMethods_autoToggleZoomButton$$($chart$$267$$.$getEventManager$());
    $DvtChartRenderer$$.$positionDragButtons$($chart$$267$$);
    $chart$$267$$.$highlight$($DvtChartStyleUtils$$.$getHighlightedCategories$($chart$$267$$));
    $JSCompiler_StaticMethods___restoreChartFocus$$($chart$$267$$, $focusState$$2$$)
  }
};
$DvtChartRenderer$$.$_renderBackground$ = function $$DvtChartRenderer$$$$_renderBackground$$($chart$$268_rect$$9$$, $container$$27$$, $availSpace$$28$$) {
  $chart$$268_rect$$9$$ = new dvt.$Rect$($chart$$268_rect$$9$$.$getCtx$(), $availSpace$$28$$.x, $availSpace$$28$$.y, $availSpace$$28$$.$w$, $availSpace$$28$$.$h$);
  $chart$$268_rect$$9$$.$setInvisibleFill$();
  $container$$27$$.$addChild$($chart$$268_rect$$9$$)
};
$DvtChartRenderer$$.$_addOuterGaps$ = function $$DvtChartRenderer$$$$_addOuterGaps$$($chart$$269$$, $availSpace$$29$$) {
  var $options$$89$$ = $chart$$269$$.$getOptions$(), $gapWidth$$1$$ = Math.ceil($options$$89$$.layout.outerGapWidth * $JSCompiler_StaticMethods_getGapWidthRatio$$($chart$$269$$)), $gapHeight$$1$$ = $DvtChartDefaults$getGapHeight$$($chart$$269$$, $options$$89$$.layout.outerGapHeight);
  if("none" == $options$$89$$.styleDefaults.padding || $DvtChartTypeUtils$$.$isStandalonePlotArea$($chart$$269$$) || $DvtChartTypeUtils$$.$isStandaloneXAxis$($chart$$269$$) || $DvtChartTypeUtils$$.$isStandaloneYAxis$($chart$$269$$) || $DvtChartTypeUtils$$.$isStandaloneY2Axis$($chart$$269$$)) {
    $gapWidth$$1$$ = Math.min($gapWidth$$1$$, 1), $gapHeight$$1$$ = Math.min($gapHeight$$1$$, 1)
  }
  $availSpace$$29$$.x += $gapWidth$$1$$;
  $availSpace$$29$$.$w$ -= 2 * $gapWidth$$1$$;
  $availSpace$$29$$.y += $gapHeight$$1$$;
  $availSpace$$29$$.$h$ -= 2 * $gapHeight$$1$$
};
$DvtChartRenderer$$.$_renderTitles$ = function $$DvtChartRenderer$$$$_renderTitles$$($chart$$270$$, $container$$28_footnoteObj$$, $availSpace$$30$$) {
  var $options$$90$$ = $chart$$270$$.$getOptions$();
  if($options$$90$$.title.text) {
    var $alignFootnoteToPlotArea_lowerSepObj_titleGapBelow_titleObj$$ = $DvtChartTextUtils$$.$createText$($chart$$270$$.$getEventManager$(), $container$$28_footnoteObj$$, $options$$90$$.title.text, $options$$90$$.title.style, $availSpace$$30$$.x, $availSpace$$30$$.y, $availSpace$$30$$.$w$, $availSpace$$30$$.$h$), $footnoteAlign_titleHeight$$1_titleSepHeight_upperSepObj$$, $footnoteDims_titleDims$$, $titleAlign$$ = $options$$90$$.title.hAlign != $JSCompiler_alias_NULL$$ ? $options$$90$$.title.hAlign : 
    $options$$90$$.title.halign, $alignTitlesToPlotArea$$ = "plotArea" == $titleAlign$$.substring(0, 8);
    $alignFootnoteToPlotArea_lowerSepObj_titleGapBelow_titleObj$$ ? ($footnoteDims_titleDims$$ = $alignFootnoteToPlotArea_lowerSepObj_titleGapBelow_titleObj$$.$getDimensions$(), $footnoteAlign_titleHeight$$1_titleSepHeight_upperSepObj$$ = $footnoteDims_titleDims$$.$h$, $alignFootnoteToPlotArea_lowerSepObj_titleGapBelow_titleObj$$.$setAriaProperty$("hidden", $JSCompiler_alias_NULL$$)) : ($footnoteAlign_titleHeight$$1_titleSepHeight_upperSepObj$$ = 0, $footnoteDims_titleDims$$ = new dvt.$Rectangle$(0, 
    0, 0, 0));
    if($options$$90$$.subtitle.text) {
      var $subtitleObj$$ = new dvt.$OutputText$($chart$$270$$.$getCtx$(), $options$$90$$.subtitle.text, $availSpace$$30$$.x, $availSpace$$30$$.y);
      if($subtitleObj$$) {
        $subtitleObj$$.$setCSSStyle$($options$$90$$.subtitle.style);
        $container$$28_footnoteObj$$.$addChild$($subtitleObj$$);
        var $subtitleDims$$ = $subtitleObj$$.$measureDimensions$(), $titleSubtitleGap$$ = Math.ceil($options$$90$$.layout.titleSubtitleGapWidth * $JSCompiler_StaticMethods_getGapWidthRatio$$($chart$$270$$)), $titleSpace$$1$$ = $footnoteDims_titleDims$$.$w$ + $titleSubtitleGap$$ + $subtitleDims$$.$w$;
        $titleSpace$$1$$ > $availSpace$$30$$.$w$ || $alignTitlesToPlotArea$$ ? ($titleSubtitleGap$$ = $DvtChartDefaults$getGapHeight$$($chart$$270$$, $options$$90$$.layout.titleSubtitleGapHeight), $subtitleObj$$.$setY$($availSpace$$30$$.y + $footnoteAlign_titleHeight$$1_titleSepHeight_upperSepObj$$ + $titleSubtitleGap$$), dvt.$TextUtils$.$fitText$($subtitleObj$$, $availSpace$$30$$.$w$, $availSpace$$30$$.$h$, $container$$28_footnoteObj$$) && ($subtitleDims$$ = $subtitleObj$$.$measureDimensions$(), 
        $footnoteAlign_titleHeight$$1_titleSepHeight_upperSepObj$$ += $subtitleDims$$.$h$ + $titleSubtitleGap$$, dvt.$Agent$.$isRightToLeft$($chart$$270$$.$getCtx$()) && ($subtitleObj$$ && $subtitleObj$$.$setX$($availSpace$$30$$.$w$ - $subtitleDims$$.$w$), $alignFootnoteToPlotArea_lowerSepObj_titleGapBelow_titleObj$$ && $alignFootnoteToPlotArea_lowerSepObj_titleGapBelow_titleObj$$.$setX$($availSpace$$30$$.$w$ - $footnoteDims_titleDims$$.$w$)))) : ($subtitleObj$$.$setY$($footnoteDims_titleDims$$.$h$ - 
        $subtitleDims$$.$h$ + $availSpace$$30$$.y), $alignFootnoteToPlotArea_lowerSepObj_titleGapBelow_titleObj$$ && (dvt.$LayoutUtils$.align($availSpace$$30$$, $titleAlign$$, $alignFootnoteToPlotArea_lowerSepObj_titleGapBelow_titleObj$$, $titleSpace$$1$$), dvt.$Agent$.$isRightToLeft$($chart$$270$$.$getCtx$()) ? ($subtitleObj$$.$setX$($alignFootnoteToPlotArea_lowerSepObj_titleGapBelow_titleObj$$.$getX$()), $alignFootnoteToPlotArea_lowerSepObj_titleGapBelow_titleObj$$ && $alignFootnoteToPlotArea_lowerSepObj_titleGapBelow_titleObj$$.$setX$($alignFootnoteToPlotArea_lowerSepObj_titleGapBelow_titleObj$$.$getX$() + 
        $subtitleDims$$.$w$ + $titleSubtitleGap$$)) : $subtitleObj$$.$setX$($alignFootnoteToPlotArea_lowerSepObj_titleGapBelow_titleObj$$.$getX$() + $titleSpace$$1$$ - $subtitleDims$$.$w$)));
        $subtitleObj$$.$setAriaProperty$("hidden", $JSCompiler_alias_NULL$$);
        $chart$$270$$.$getEventManager$().$associate$($subtitleObj$$, new dvt.$SimpleObjPeer$($subtitleObj$$.$getUntruncatedTextString$()))
      }
    }else {
      dvt.$LayoutUtils$.align($availSpace$$30$$, $titleAlign$$, $alignFootnoteToPlotArea_lowerSepObj_titleGapBelow_titleObj$$, $footnoteDims_titleDims$$.$w$)
    }
    $alignTitlesToPlotArea$$ && ($chart$$270$$.$Cache$.title = $alignFootnoteToPlotArea_lowerSepObj_titleGapBelow_titleObj$$, $chart$$270$$.$Cache$.subtitle = $subtitleObj$$);
    $alignFootnoteToPlotArea_lowerSepObj_titleGapBelow_titleObj$$ = "on" == $options$$90$$.titleSeparator.rendered ? $options$$90$$.layout.titleSeparatorGap : $options$$90$$.layout.titlePlotAreaGap;
    $availSpace$$30$$.y += $footnoteAlign_titleHeight$$1_titleSepHeight_upperSepObj$$ + $DvtChartDefaults$getGapHeight$$($chart$$270$$, $alignFootnoteToPlotArea_lowerSepObj_titleGapBelow_titleObj$$);
    $availSpace$$30$$.$h$ -= $footnoteAlign_titleHeight$$1_titleSepHeight_upperSepObj$$ + $DvtChartDefaults$getGapHeight$$($chart$$270$$, $alignFootnoteToPlotArea_lowerSepObj_titleGapBelow_titleObj$$);
    "on" == $options$$90$$.titleSeparator.rendered && ($footnoteAlign_titleHeight$$1_titleSepHeight_upperSepObj$$ = new dvt.$Line$($chart$$270$$.$getCtx$(), $availSpace$$30$$.x, $availSpace$$30$$.y, $availSpace$$30$$.x + $availSpace$$30$$.$w$, $availSpace$$30$$.y), $alignFootnoteToPlotArea_lowerSepObj_titleGapBelow_titleObj$$ = new dvt.$Line$($chart$$270$$.$getCtx$(), $availSpace$$30$$.x, $availSpace$$30$$.y + 1, $availSpace$$30$$.x + $availSpace$$30$$.$w$, $availSpace$$30$$.y + 1), $footnoteAlign_titleHeight$$1_titleSepHeight_upperSepObj$$.$setSolidStroke$($options$$90$$.titleSeparator.upperColor), 
    $alignFootnoteToPlotArea_lowerSepObj_titleGapBelow_titleObj$$.$setSolidStroke$($options$$90$$.titleSeparator.lowerColor), $container$$28_footnoteObj$$.$addChild$($footnoteAlign_titleHeight$$1_titleSepHeight_upperSepObj$$), $container$$28_footnoteObj$$.$addChild$($alignFootnoteToPlotArea_lowerSepObj_titleGapBelow_titleObj$$), $footnoteAlign_titleHeight$$1_titleSepHeight_upperSepObj$$ = 2 + $DvtChartDefaults$getGapHeight$$($chart$$270$$, $options$$90$$.layout.titlePlotAreaGap), $availSpace$$30$$.y += 
    $footnoteAlign_titleHeight$$1_titleSepHeight_upperSepObj$$, $availSpace$$30$$.$h$ -= $footnoteAlign_titleHeight$$1_titleSepHeight_upperSepObj$$)
  }
  $options$$90$$.footnote.text && ($container$$28_footnoteObj$$ = $DvtChartTextUtils$$.$createText$($chart$$270$$.$getEventManager$(), $container$$28_footnoteObj$$, $options$$90$$.footnote.text, $options$$90$$.footnote.style, $availSpace$$30$$.x, 0, $availSpace$$30$$.$w$, $availSpace$$30$$.$h$), $footnoteAlign_titleHeight$$1_titleSepHeight_upperSepObj$$ = $options$$90$$.footnote.hAlign != $JSCompiler_alias_NULL$$ ? $options$$90$$.footnote.hAlign : $options$$90$$.footnote.halign, $alignFootnoteToPlotArea_lowerSepObj_titleGapBelow_titleObj$$ = 
  "plotArea" == $footnoteAlign_titleHeight$$1_titleSepHeight_upperSepObj$$.substring(0, 8), $container$$28_footnoteObj$$ && ($footnoteDims_titleDims$$ = $container$$28_footnoteObj$$.$getDimensions$(), $container$$28_footnoteObj$$.$setY$($availSpace$$30$$.y + $availSpace$$30$$.$h$ - $footnoteDims_titleDims$$.$h$), $availSpace$$30$$.$h$ -= $footnoteDims_titleDims$$.$h$ + $DvtChartDefaults$getGapHeight$$($chart$$270$$, $options$$90$$.layout.footnoteGap), dvt.$LayoutUtils$.align($availSpace$$30$$, $footnoteAlign_titleHeight$$1_titleSepHeight_upperSepObj$$, 
  $container$$28_footnoteObj$$, $footnoteDims_titleDims$$.$w$), $container$$28_footnoteObj$$.$setAriaProperty$("hidden", $JSCompiler_alias_NULL$$)), $alignFootnoteToPlotArea_lowerSepObj_titleGapBelow_titleObj$$ && ($chart$$270$$.$Cache$.footnote = $container$$28_footnoteObj$$))
};
$DvtChartRenderer$$.$_updateTitles$ = function $$DvtChartRenderer$$$$_updateTitles$$($chart$$271_footnoteObj$$1$$, $container$$29$$, $titleSpace$$2$$, $availSpace$$31_subtitleObj$$1$$) {
  var $options$$91_updateFootnote$$ = $chart$$271_footnoteObj$$1$$.$getOptions$(), $footnoteDims$$1_titleAlign$$1$$ = $options$$91_updateFootnote$$.title.hAlign != $JSCompiler_alias_NULL$$ ? $options$$91_updateFootnote$$.title.hAlign : $options$$91_updateFootnote$$.title.halign, $footnoteAlign$$1$$ = $options$$91_updateFootnote$$.footnote.hAlign != $JSCompiler_alias_NULL$$ ? $options$$91_updateFootnote$$.footnote.hAlign : $options$$91_updateFootnote$$.footnote.halign, $subtitleDims$$1_titleObj$$1_updateTitle$$ = 
  $options$$91_updateFootnote$$.title.text && "plotArea" == $footnoteDims$$1_titleAlign$$1$$.substring(0, 8), $options$$91_updateFootnote$$ = $options$$91_updateFootnote$$.footnote.text && "plotArea" == $footnoteAlign$$1$$.substring(0, 8);
  $titleSpace$$2$$.x = $availSpace$$31_subtitleObj$$1$$.x;
  $titleSpace$$2$$.$w$ = $availSpace$$31_subtitleObj$$1$$.$w$;
  if($subtitleDims$$1_titleObj$$1_updateTitle$$) {
    $subtitleDims$$1_titleObj$$1_updateTitle$$ = $chart$$271_footnoteObj$$1$$.$Cache$.title;
    $availSpace$$31_subtitleObj$$1$$ = $chart$$271_footnoteObj$$1$$.$Cache$.subtitle;
    var $titleDims$$1$$ = $subtitleDims$$1_titleObj$$1_updateTitle$$.$getDimensions$();
    $DvtChartRenderer$$.$_alignTextToPlotArea$($container$$29$$, $titleSpace$$2$$, $footnoteDims$$1_titleAlign$$1$$, $subtitleDims$$1_titleObj$$1_updateTitle$$, $titleDims$$1$$.$w$);
    $availSpace$$31_subtitleObj$$1$$ && ($subtitleDims$$1_titleObj$$1_updateTitle$$ = $availSpace$$31_subtitleObj$$1$$.$getDimensions$(), $DvtChartRenderer$$.$_alignTextToPlotArea$($container$$29$$, $titleSpace$$2$$, $footnoteDims$$1_titleAlign$$1$$, $availSpace$$31_subtitleObj$$1$$, $subtitleDims$$1_titleObj$$1_updateTitle$$.$w$))
  }
  $options$$91_updateFootnote$$ && ($chart$$271_footnoteObj$$1$$ = $chart$$271_footnoteObj$$1$$.$Cache$.footnote, $footnoteDims$$1_titleAlign$$1$$ = $chart$$271_footnoteObj$$1$$.$getDimensions$(), $DvtChartRenderer$$.$_alignTextToPlotArea$($container$$29$$, $titleSpace$$2$$, $footnoteAlign$$1$$, $chart$$271_footnoteObj$$1$$, $footnoteDims$$1_titleAlign$$1$$.$w$))
};
$DvtChartRenderer$$.$_alignTextToPlotArea$ = function $$DvtChartRenderer$$$$_alignTextToPlotArea$$($container$$30$$, $availSpace$$32$$, $halign$$, $text$$52$$, $width$$41$$) {
  dvt.$TextUtils$.$fitText$($text$$52$$, $availSpace$$32$$.$w$, $availSpace$$32$$.$h$, $container$$30$$) && ("plotAreaStart" == $halign$$ ? dvt.$LayoutUtils$.align($availSpace$$32$$, "start", $text$$52$$, $width$$41$$) : "plotAreaCenter" == $halign$$ ? dvt.$LayoutUtils$.align($availSpace$$32$$, "center", $text$$52$$, $width$$41$$) : "plotAreaEnd" == $halign$$ && dvt.$LayoutUtils$.align($availSpace$$32$$, "end", $text$$52$$, $width$$41$$))
};
$DvtChartRenderer$$.$_renderPlotArea$ = function $$DvtChartRenderer$$$$_renderPlotArea$$($chart$$272$$, $container$$31$$, $availSpace$$33$$) {
  if($DvtChartTypeUtils$$.$hasAxes$($chart$$272$$)) {
    var $pieChart$$10_plotArea$$2$$ = new dvt.$Container$($chart$$272$$.$getCtx$());
    $pieChart$$10_plotArea$$2$$.$setTranslate$($availSpace$$33$$.x, $availSpace$$33$$.y);
    $container$$31$$.$addChild$($pieChart$$10_plotArea$$2$$);
    $chart$$272$$.$_plotArea$ = $pieChart$$10_plotArea$$2$$;
    $DvtChartPlotAreaRenderer$$.$render$($chart$$272$$, $pieChart$$10_plotArea$$2$$, new dvt.$Rectangle$(0, 0, $availSpace$$33$$.$w$, $availSpace$$33$$.$h$))
  }else {
    $DvtChartTypeUtils$$.$isPie$($chart$$272$$) ? ($pieChart$$10_plotArea$$2$$ = new $DvtChartPie$$($chart$$272$$, $availSpace$$33$$), 0 < $pieChart$$10_plotArea$$2$$.$_slices$.length ? ($container$$31$$.$addChild$($pieChart$$10_plotArea$$2$$), $chart$$272$$.$_plotArea$ = $pieChart$$10_plotArea$$2$$, $pieChart$$10_plotArea$$2$$.$render$()) : $DvtChartRenderer$$.$renderEmptyText$($chart$$272$$, $container$$31$$, $availSpace$$33$$)) : $DvtChartTypeUtils$$.$isFunnel$($chart$$272$$) && $DvtChartFunnelRenderer$$.$render$($chart$$272$$, 
    $container$$31$$, $availSpace$$33$$)
  }
  $availSpace$$33$$.$w$ = 0;
  $availSpace$$33$$.$h$ = 0
};
$DvtChartRenderer$$.$renderEmptyText$ = function $$DvtChartRenderer$$$$renderEmptyText$$($chart$$273$$, $container$$32$$, $availSpace$$34$$) {
  var $options$$92$$ = $chart$$273$$.$getOptions$();
  if($DvtChartDataUtils$$.$hasInvalidTimeData$($chart$$273$$) && $DvtChartDataUtils$$.$hasData$($chart$$273$$)) {
    var $emptyTextStr$$ = dvt.$Bundle$.$getTranslation$($options$$92$$, "labelInvalidData", dvt.$Bundle$.$UTIL_PREFIX$, "INVALID_DATA")
  }else {
    ($emptyTextStr$$ = $options$$92$$.emptyText) || ($emptyTextStr$$ = dvt.$Bundle$.$getTranslation$($options$$92$$, "labelNoData", dvt.$Bundle$.$UTIL_PREFIX$, "NO_DATA"))
  }
  dvt.$TextUtils$.$renderEmptyText$($container$$32$$, $emptyTextStr$$, new dvt.$Rectangle$($availSpace$$34$$.x, $availSpace$$34$$.y, $availSpace$$34$$.$w$, $availSpace$$34$$.$h$), $chart$$273$$.$getEventManager$(), $options$$92$$._statusMessageStyle)
};
$DvtChartRenderer$$.$_prerenderHorizScrollbar$ = function $$DvtChartRenderer$$$$_prerenderHorizScrollbar$$($chart$$274$$, $container$$33$$, $availSpace$$35$$) {
  var $width$$42$$ = $availSpace$$35$$.$w$, $height$$36$$ = 0;
  $DvtChartEventUtils$$.$isScrollable$($chart$$274$$) && $DvtChartTypeUtils$$.$isHorizScrollbarSupported$($chart$$274$$) ? $DvtChartStyleUtils$$.$isOverviewRendered$($chart$$274$$) ? ($height$$36$$ = Math.min($DvtChartStyleUtils$$.$getOverviewHeight$($chart$$274$$), $availSpace$$35$$.$h$), 0 < $height$$36$$ && ($chart$$274$$.$overview$ = new $DvtChartOverview$$($chart$$274$$), $container$$33$$.$addChild$($chart$$274$$.$overview$), dvt.$LayoutUtils$.position($availSpace$$35$$, "bottom", $chart$$274$$.$overview$, 
  $width$$42$$, $height$$36$$, 10))) : ($height$$36$$ = $chart$$274$$.$getOptions$().styleDefaults._scrollbarHeight, $chart$$274$$.$xScrollbar$ = new dvt.$SimpleScrollbar$($chart$$274$$.$getCtx$(), $chart$$274$$.$processEvent$, $chart$$274$$), $container$$33$$.$addChild$($chart$$274$$.$xScrollbar$), dvt.$LayoutUtils$.position($availSpace$$35$$, "bottom", $chart$$274$$.$xScrollbar$, $width$$42$$, $height$$36$$, 8), $chart$$274$$.$overview$ = $JSCompiler_alias_NULL$$) : $chart$$274$$.$overview$ = $JSCompiler_alias_NULL$$;
  return new dvt.$Dimension$($width$$42$$, $height$$36$$)
};
$DvtChartRenderer$$.$_prerenderVertScrollbar$ = function $$DvtChartRenderer$$$$_prerenderVertScrollbar$$($chart$$275$$, $container$$34$$, $availSpace$$36$$) {
  var $width$$43$$ = 0, $height$$37$$ = $availSpace$$36$$.$h$;
  if($DvtChartEventUtils$$.$isScrollable$($chart$$275$$) && $DvtChartTypeUtils$$.$isVertScrollbarSupported$($chart$$275$$)) {
    var $width$$43$$ = $chart$$275$$.$getOptions$().styleDefaults._scrollbarHeight, $scrollbar$$2$$ = new dvt.$SimpleScrollbar$($chart$$275$$.$getCtx$(), $chart$$275$$.$processEvent$, $chart$$275$$);
    $container$$34$$.$addChild$($scrollbar$$2$$);
    dvt.$LayoutUtils$.position($availSpace$$36$$, dvt.$Agent$.$isRightToLeft$($chart$$275$$.$getCtx$()) ? "right" : "left", $scrollbar$$2$$, $width$$43$$, $height$$37$$, 8);
    $DvtChartTypeUtils$$.$isHorizontal$($chart$$275$$) ? $chart$$275$$.$xScrollbar$ = $scrollbar$$2$$ : $chart$$275$$.$yScrollbar$ = $scrollbar$$2$$
  }
  return new dvt.$Dimension$($width$$43$$, $height$$37$$)
};
$DvtChartRenderer$$.$_renderScrollbars$ = function $$DvtChartRenderer$$$$_renderScrollbars$$($chart$$276$$, $horizScrollbarDim$$, $ovOptions_vertScrollbarDim$$) {
  var $options$$93$$ = $chart$$276$$.$getOptions$(), $sbOptions$$ = {color:$options$$93$$.styleDefaults._scrollbarHandleColor, backgroundColor:$options$$93$$.styleDefaults._scrollbarTrackColor}, $plotAreaDim$$ = $chart$$276$$.$_plotAreaSpace$;
  $chart$$276$$.$xScrollbar$ && ($sbOptions$$.min = $chart$$276$$.$xAxis$.$actualToLinear$($chart$$276$$.$xAxis$.$Info$.$GlobalMin$), $sbOptions$$.max = $chart$$276$$.$xAxis$.$actualToLinear$($chart$$276$$.$xAxis$.$Info$.$GlobalMax$), $DvtChartTypeUtils$$.$isHorizontal$($chart$$276$$) ? ($sbOptions$$.isHorizontal = $JSCompiler_alias_FALSE$$, $sbOptions$$.isReversed = $JSCompiler_alias_FALSE$$, $chart$$276$$.$xScrollbar$.$setTranslateY$($plotAreaDim$$.y), $chart$$276$$.$xScrollbar$.$render$($sbOptions$$, 
  $ovOptions_vertScrollbarDim$$.$w$, $plotAreaDim$$.$h$)) : ($sbOptions$$.isHorizontal = $JSCompiler_alias_TRUE$$, $sbOptions$$.isReversed = dvt.$Agent$.$isRightToLeft$($chart$$276$$.$getCtx$()), $chart$$276$$.$xScrollbar$.$setTranslateX$($plotAreaDim$$.x), $chart$$276$$.$xScrollbar$.$render$($sbOptions$$, $plotAreaDim$$.$w$, $horizScrollbarDim$$.$h$)), $chart$$276$$.$xScrollbar$.$setViewportRange$($JSCompiler_StaticMethods_getLinearViewportMin$$($chart$$276$$.$xAxis$), $JSCompiler_StaticMethods_getLinearViewportMax$$($chart$$276$$.$xAxis$)));
  $chart$$276$$.$yScrollbar$ && ($sbOptions$$.min = $chart$$276$$.$yAxis$.$actualToLinear$($chart$$276$$.$yAxis$.$Info$.$GlobalMin$), $sbOptions$$.max = $chart$$276$$.$yAxis$.$actualToLinear$($chart$$276$$.$yAxis$.$Info$.$GlobalMax$), $sbOptions$$.isHorizontal = $JSCompiler_alias_FALSE$$, $sbOptions$$.isReversed = $JSCompiler_alias_TRUE$$, $chart$$276$$.$yScrollbar$.$setTranslateY$($plotAreaDim$$.y), $chart$$276$$.$yScrollbar$.$render$($sbOptions$$, $ovOptions_vertScrollbarDim$$.$w$, $plotAreaDim$$.$h$), 
  $chart$$276$$.$yScrollbar$.$setViewportRange$($JSCompiler_StaticMethods_getLinearViewportMin$$($chart$$276$$.$yAxis$), $JSCompiler_StaticMethods_getLinearViewportMax$$($chart$$276$$.$yAxis$)));
  $chart$$276$$.$overview$ && ($ovOptions_vertScrollbarDim$$ = {startTime:$chart$$276$$.$xAxis$.$actualToLinear$($chart$$276$$.$xAxis$.$Info$.$GlobalMin$), endTime:$chart$$276$$.$xAxis$.$actualToLinear$($chart$$276$$.$xAxis$.$Info$.$GlobalMax$), viewportStartTime:$JSCompiler_StaticMethods_getLinearViewportMin$$($chart$$276$$.$xAxis$), viewportEndTime:$JSCompiler_StaticMethods_getLinearViewportMax$$($chart$$276$$.$xAxis$), minimumWindowSize:$chart$$276$$.$xAxis$.$getInfo$().$getMinimumExtent$(), chart:dvt.$JsonUtils$.$clone$($options$$93$$)}, 
  $DvtChartEventUtils$$.$isZoomable$($chart$$276$$) || ($ovOptions_vertScrollbarDim$$.featuresOff = "zoom"), $ovOptions_vertScrollbarDim$$.chart._minOverflowCoord = $options$$93$$._minOverflowCoord - $plotAreaDim$$.x, $ovOptions_vertScrollbarDim$$.chart._maxOverflowCoord = $options$$93$$._maxOverflowCoord - $plotAreaDim$$.x, $chart$$276$$.$overview$.$setTranslateX$($plotAreaDim$$.x), $chart$$276$$.$overview$.$render$($ovOptions_vertScrollbarDim$$, $plotAreaDim$$.$w$, $horizScrollbarDim$$.$h$), $chart$$276$$.$overview$.$setViewportRange$($JSCompiler_StaticMethods_getLinearViewportMin$$($chart$$276$$.$xAxis$), 
  $JSCompiler_StaticMethods_getLinearViewportMax$$($chart$$276$$.$xAxis$)))
};
$DvtChartRenderer$$.$_positionLegend$ = function $$DvtChartRenderer$$$$_positionLegend$$($legend$$1$$, $availSpace$$37$$) {
  if($legend$$1$$) {
    var $dims$$37$$ = $legend$$1$$.$getDimensions$(), $orientation$$2$$ = $legend$$1$$.$getOptions$().orientation;
    "vertical" == $orientation$$2$$ && $dims$$37$$.$h$ <= $availSpace$$37$$.$h$ ? $legend$$1$$.$setTranslateY$(Math.round($availSpace$$37$$.y + $availSpace$$37$$.$h$ / 2 - $dims$$37$$.$h$ / 2)) : "horizontal" == $orientation$$2$$ && $dims$$37$$.$w$ <= $availSpace$$37$$.$w$ && $legend$$1$$.$setTranslateX$(Math.round($availSpace$$37$$.x + $availSpace$$37$$.$w$ / 2 - $dims$$37$$.$w$ / 2))
  }
};
$DvtChartRenderer$$.$_renderDragButtons$ = function $$DvtChartRenderer$$$$_renderDragButtons$$($chart$$277$$) {
  var $options$$94$$ = $chart$$277$$.$getOptions$(), $em$$2$$ = $chart$$277$$.$getEventManager$(), $dragMode$$1_isTouch$$ = $options$$94$$.dragMode;
  if("user" != $dragMode$$1_isTouch$$) {
    "pan" == $dragMode$$1_isTouch$$ ? $JSCompiler_StaticMethods_setDragMode$$($em$$2$$, "pan") : "zoom" == $dragMode$$1_isTouch$$ ? $JSCompiler_StaticMethods_setDragMode$$($em$$2$$, "zoom") : "select" == $dragMode$$1_isTouch$$ ? $JSCompiler_StaticMethods_setDragMode$$($em$$2$$, "select") : $JSCompiler_StaticMethods_setDragMode$$($em$$2$$, "off")
  }else {
    if($DvtChartTypeUtils$$.$hasAxes$($chart$$277$$) && !$DvtChartTypeUtils$$.$isOverview$($chart$$277$$)) {
      var $dragMode$$1_isTouch$$ = dvt.$Agent$.$isTouchDevice$(), $isScrollable$$ = $DvtChartEventUtils$$.$isScrollable$($chart$$277$$);
      $chart$$277$$.$dragButtons$ = new dvt.$Container$($chart$$277$$.$getCtx$());
      var $resources$$1$$ = $options$$94$$._resources, $position$$21_tooltip$$11$$;
      if("multiple" == $options$$94$$.selectionMode && ($dragMode$$1_isTouch$$ || $isScrollable$$)) {
        $position$$21_tooltip$$11$$ = $isScrollable$$ && ($dragMode$$1_isTouch$$ || $DvtChartEventUtils$$.$isZoomable$($chart$$277$$)) ? "end" : "solo", $em$$2$$.$selectButton$ = $DvtChartRenderer$$.$_createDragButton$($chart$$277$$, $chart$$277$$.$dragButtons$, $resources$$1$$.selectUp, $resources$$1$$.selectDown, $em$$2$$.$onSelectButtonClick$, $em$$2$$, $position$$21_tooltip$$11$$), $position$$21_tooltip$$11$$ = dvt.$Bundle$.$getTranslation$($options$$94$$, "tooltipSelect", dvt.$Bundle$.$CHART_PREFIX$, 
        "MARQUEE_SELECT"), $em$$2$$.$selectButton$.$setTooltip$($position$$21_tooltip$$11$$), $em$$2$$.$associate$($em$$2$$.$selectButton$, $em$$2$$.$selectButton$)
      }
      $isScrollable$$ && ($position$$21_tooltip$$11$$ = $em$$2$$.$selectButton$ == $JSCompiler_alias_NULL$$ ? "solo" : "start", $dragMode$$1_isTouch$$ ? ($em$$2$$.$panButton$ = $DvtChartRenderer$$.$_createDragButton$($chart$$277$$, $chart$$277$$.$dragButtons$, $resources$$1$$.panUp, $resources$$1$$.panDown, $em$$2$$.$onPanButtonClick$, $em$$2$$, $position$$21_tooltip$$11$$), $position$$21_tooltip$$11$$ = dvt.$Bundle$.$getTranslation$($options$$94$$, "tooltipPan", dvt.$Bundle$.$CHART_PREFIX$, "PAN"), 
      $em$$2$$.$panButton$.$setTooltip$($position$$21_tooltip$$11$$), $em$$2$$.$associate$($em$$2$$.$panButton$, $em$$2$$.$panButton$)) : $DvtChartEventUtils$$.$isZoomable$($chart$$277$$) && $DvtChartTypeUtils$$.$isScatterBubble$($chart$$277$$) && ($em$$2$$.$zoomButton$ = $DvtChartRenderer$$.$_createDragButton$($chart$$277$$, $chart$$277$$.$dragButtons$, $resources$$1$$.zoomUp, $resources$$1$$.zoomDown, $em$$2$$.$onZoomButtonClick$, $em$$2$$, $position$$21_tooltip$$11$$), $position$$21_tooltip$$11$$ = 
      dvt.$Bundle$.$getTranslation$($options$$94$$, "tooltipZoom", dvt.$Bundle$.$CHART_PREFIX$, "MARQUEE_ZOOM"), $em$$2$$.$zoomButton$.$setTooltip$($position$$21_tooltip$$11$$), $em$$2$$.$associate$($em$$2$$.$zoomButton$, $em$$2$$.$zoomButton$)));
      $DvtChartRenderer$$.$positionDragButtons$($chart$$277$$);
      $JSCompiler_StaticMethods_setDragMode$$($em$$2$$, $JSCompiler_alias_NULL$$);
      0 < $chart$$277$$.$dragButtons$.$getNumChildren$() && ($chart$$277$$.$addChild$($chart$$277$$.$dragButtons$), $dragMode$$1_isTouch$$ ? $isScrollable$$ && ($em$$2$$.$panButton$.$setToggled$($JSCompiler_alias_TRUE$$), $em$$2$$.$onPanButtonClick$()) : $chart$$277$$.$dragButtons$ && $chart$$277$$.$dragButtons$.$setVisible$($JSCompiler_alias_FALSE$$), $chart$$277$$.$dragButtons$.setCursor("default"))
    }
  }
};
$DvtChartRenderer$$.$_positionDragButton$ = function $$DvtChartRenderer$$$$_positionDragButton$$($chart$$278_transX$$2$$, $button$$29$$, $availSpace$$38$$) {
  dvt.$Agent$.$isRightToLeft$($chart$$278_transX$$2$$.$getCtx$()) ? ($chart$$278_transX$$2$$ = $availSpace$$38$$.x + $DvtChartRenderer$$.$_BUTTON_PADDING$, $availSpace$$38$$.x += $DvtChartRenderer$$.$_BUTTON_SIZE$ + 2 * $DvtChartRenderer$$.$_BUTTON_PADDING$) : $chart$$278_transX$$2$$ = $availSpace$$38$$.x + $availSpace$$38$$.$w$ - $DvtChartRenderer$$.$_BUTTON_SIZE$ - $DvtChartRenderer$$.$_BUTTON_PADDING$;
  $availSpace$$38$$.$w$ -= $DvtChartRenderer$$.$_BUTTON_SIZE$ + 2 * $DvtChartRenderer$$.$_BUTTON_PADDING$;
  $button$$29$$.$setTranslate$($chart$$278_transX$$2$$, $availSpace$$38$$.y + $DvtChartRenderer$$.$_BUTTON_PADDING$)
};
$DvtChartRenderer$$.$positionDragButtons$ = function $$DvtChartRenderer$$$$positionDragButtons$$($chart$$279$$) {
  var $availSpace$$39$$ = $chart$$279$$.$_plotAreaSpace$.$clone$();
  $availSpace$$39$$.x += $DvtChartRenderer$$.$_BUTTON_CORNER_DIST$;
  $availSpace$$39$$.$w$ -= 2 * $DvtChartRenderer$$.$_BUTTON_CORNER_DIST$;
  $availSpace$$39$$.y += $DvtChartRenderer$$.$_BUTTON_CORNER_DIST$;
  var $em$$3$$ = $chart$$279$$.$getEventManager$();
  $em$$3$$.$selectButton$ && $DvtChartRenderer$$.$_positionDragButton$($chart$$279$$, $em$$3$$.$selectButton$, $availSpace$$39$$);
  $em$$3$$.$panButton$ && $DvtChartRenderer$$.$_positionDragButton$($chart$$279$$, $em$$3$$.$panButton$, $availSpace$$39$$);
  $em$$3$$.$zoomButton$ && $DvtChartRenderer$$.$_positionDragButton$($chart$$279$$, $em$$3$$.$zoomButton$, $availSpace$$39$$)
};
$DvtChartRenderer$$.$_createDragButtonBackground$ = function $$DvtChartRenderer$$$$_createDragButtonBackground$$($context$$145$$, $position$$22$$) {
  var $background$$1_blcr_cmd$$6$$ = 2, $trcr$$ = 2, $isR2L_pos$$39$$ = dvt.$Agent$.$isRightToLeft$($context$$145$$);
  "start" == $position$$22$$ ? $isR2L_pos$$39$$ ? $background$$1_blcr_cmd$$6$$ = 0 : $trcr$$ = 0 : "end" == $position$$22$$ && ($isR2L_pos$$39$$ ? $trcr$$ = 0 : $background$$1_blcr_cmd$$6$$ = 0);
  var $isR2L_pos$$39$$ = -$DvtChartRenderer$$.$_BUTTON_PADDING$, $size$$17$$ = $DvtChartRenderer$$.$_BUTTON_SIZE$ + 2 * $DvtChartRenderer$$.$_BUTTON_PADDING$, $background$$1_blcr_cmd$$6$$ = dvt.$PathUtils$.$roundedRectangle$($isR2L_pos$$39$$, $isR2L_pos$$39$$, $size$$17$$, $size$$17$$, $background$$1_blcr_cmd$$6$$, $trcr$$, $trcr$$, $background$$1_blcr_cmd$$6$$), $background$$1_blcr_cmd$$6$$ = new dvt.$Path$($context$$145$$, $background$$1_blcr_cmd$$6$$);
  1 < dvt.$Agent$.$getDevicePixelRatio$() ? ($background$$1_blcr_cmd$$6$$.$setSolidStroke$("#D8DEE3", 1, 1), $background$$1_blcr_cmd$$6$$.$setPixelHinting$()) : $background$$1_blcr_cmd$$6$$.$setSolidStroke$("#B8BDC1", 1, 1);
  return $background$$1_blcr_cmd$$6$$
};
$DvtChartRenderer$$.$_createDragButton$ = function $$DvtChartRenderer$$$$_createDragButton$$($chart$$280_context$$146$$, $container$$36_isR2L$$1$$, $overDownState_upSrc$$, $button$$30_downSrc$$, $callback$$58_hitPadding$$, $callbackObj$$30$$, $hitArea_position$$23$$) {
  $chart$$280_context$$146$$ = $chart$$280_context$$146$$.$getCtx$();
  var $upState$$7$$ = $DvtChartRenderer$$.$_createDragButtonBackground$($chart$$280_context$$146$$, $hitArea_position$$23$$);
  $upState$$7$$.$setSolidFill$("#FFFFFF", $DvtChartRenderer$$.$_BUTTON_OPACITY$);
  $upState$$7$$.$addChild$(new dvt.$Image$($chart$$280_context$$146$$, $overDownState_upSrc$$, 0, 0, $DvtChartRenderer$$.$_BUTTON_SIZE$, $DvtChartRenderer$$.$_BUTTON_SIZE$));
  var $overState$$7$$ = $DvtChartRenderer$$.$_createDragButtonBackground$($chart$$280_context$$146$$, $hitArea_position$$23$$);
  $overState$$7$$.$setSolidFill$("#E2E3E4", $DvtChartRenderer$$.$_BUTTON_OPACITY$);
  $overState$$7$$.$addChild$(new dvt.$Image$($chart$$280_context$$146$$, $overDownState_upSrc$$, 0, 0, $DvtChartRenderer$$.$_BUTTON_SIZE$, $DvtChartRenderer$$.$_BUTTON_SIZE$));
  var $downState$$7$$ = $DvtChartRenderer$$.$_createDragButtonBackground$($chart$$280_context$$146$$, $hitArea_position$$23$$);
  $downState$$7$$.$setFill$(new dvt.$LinearGradientFill$(90, ["#0527CE", "#0586F0"], [$DvtChartRenderer$$.$_BUTTON_OPACITY$, $DvtChartRenderer$$.$_BUTTON_OPACITY$]));
  $downState$$7$$.$addChild$(new dvt.$Image$($chart$$280_context$$146$$, $button$$30_downSrc$$, 0, 0, $DvtChartRenderer$$.$_BUTTON_SIZE$, $DvtChartRenderer$$.$_BUTTON_SIZE$));
  $overDownState_upSrc$$ = $DvtChartRenderer$$.$_createDragButtonBackground$($chart$$280_context$$146$$, $hitArea_position$$23$$);
  $overDownState_upSrc$$.$setSolidFill$("#0586F0", $DvtChartRenderer$$.$_BUTTON_OPACITY$);
  $overDownState_upSrc$$.$addChild$(new dvt.$Image$($chart$$280_context$$146$$, $button$$30_downSrc$$, 0, 0, $DvtChartRenderer$$.$_BUTTON_SIZE$, $DvtChartRenderer$$.$_BUTTON_SIZE$));
  $button$$30_downSrc$$ = new dvt.$Button$($chart$$280_context$$146$$, $upState$$7$$, $overState$$7$$, $downState$$7$$, $JSCompiler_alias_NULL$$, $JSCompiler_alias_NULL$$, $callback$$58_hitPadding$$, $callbackObj$$30$$);
  $button$$30_downSrc$$.$setOverDownState$($overDownState_upSrc$$);
  $button$$30_downSrc$$.$setToggleEnabled$();
  $container$$36_isR2L$$1$$.$addChild$($button$$30_downSrc$$);
  $button$$30_downSrc$$.$addEvtListener$(dvt.$MouseEvent$.$MOUSEDOWN$, function($chart$$280_context$$146$$) {
    $chart$$280_context$$146$$.stopPropagation()
  });
  dvt.$Agent$.$isTouchDevice$() && ($container$$36_isR2L$$1$$ = dvt.$Agent$.$isRightToLeft$($chart$$280_context$$146$$), $callback$$58_hitPadding$$ = 2 * $DvtChartRenderer$$.$_BUTTON_PADDING$, $hitArea_position$$23$$ = "solo" == $hitArea_position$$23$$ ? new dvt.$Rect$($chart$$280_context$$146$$, -$callback$$58_hitPadding$$, -$callback$$58_hitPadding$$, $DvtChartRenderer$$.$_BUTTON_SIZE$ + 2 * $callback$$58_hitPadding$$, $DvtChartRenderer$$.$_BUTTON_SIZE$ + 2 * $callback$$58_hitPadding$$) : "start" == 
  $hitArea_position$$23$$ && !$container$$36_isR2L$$1$$ || "end" == $hitArea_position$$23$$ && $container$$36_isR2L$$1$$ ? new dvt.$Rect$($chart$$280_context$$146$$, -$callback$$58_hitPadding$$, -$callback$$58_hitPadding$$, $DvtChartRenderer$$.$_BUTTON_SIZE$ + 1.5 * $callback$$58_hitPadding$$, $DvtChartRenderer$$.$_BUTTON_SIZE$ + 2 * $callback$$58_hitPadding$$) : new dvt.$Rect$($chart$$280_context$$146$$, -0.5 * $callback$$58_hitPadding$$, -$callback$$58_hitPadding$$, $DvtChartRenderer$$.$_BUTTON_SIZE$ + 
  1.5 * $callback$$58_hitPadding$$, $DvtChartRenderer$$.$_BUTTON_SIZE$ + 2 * $callback$$58_hitPadding$$), $hitArea_position$$23$$.$setInvisibleFill$(), $button$$30_downSrc$$.$addChild$($hitArea_position$$23$$));
  return $button$$30_downSrc$$
};
$DvtChartRenderer$$.$_adjustAvailSpace$ = function $$DvtChartRenderer$$$$_adjustAvailSpace$$($availSpace$$40$$) {
  $availSpace$$40$$.x = Math.round($availSpace$$40$$.x);
  $availSpace$$40$$.y = Math.round($availSpace$$40$$.y);
  $availSpace$$40$$.$w$ = Math.round($availSpace$$40$$.$w$);
  $availSpace$$40$$.$h$ = Math.round($availSpace$$40$$.$h$)
};
$DvtChartRenderer$$.$renderDataCursor$ = function $$DvtChartRenderer$$$$renderDataCursor$$($chart$$281$$) {
  var $dataCursor$$3$$ = $JSCompiler_alias_NULL$$, $options$$95$$ = $chart$$281$$.$getOptions$(), $eventManager$$14$$ = $chart$$281$$.$getEventManager$();
  if($DvtChartTooltipUtils$$.$isDataCursorEnabled$($chart$$281$$)) {
    var $dataCursor$$3$$ = new $DvtChartDataCursor$$($chart$$281$$.$getCtx$(), $options$$95$$.styleDefaults.dataCursor, $DvtChartTypeUtils$$.$isHorizontal$($chart$$281$$)), $behavior$$inline_3155_dataCursorHandler$$ = $DvtChartTooltipUtils$$.$getDataCursorBehavior$($chart$$281$$);
    $dataCursor$$3$$.$_behavior$ = $behavior$$inline_3155_dataCursorHandler$$;
    $chart$$281$$.$addChild$($dataCursor$$3$$);
    $behavior$$inline_3155_dataCursorHandler$$ = new $DvtChartDataCursorHandler$$($chart$$281$$, $dataCursor$$3$$);
    $eventManager$$14$$.$_dataCursorHandler$ = $behavior$$inline_3155_dataCursorHandler$$;
    $chart$$281$$.$positionDataCursor$($options$$95$$.dataCursorPosition)
  }else {
    $eventManager$$14$$.$_dataCursorHandler$ = $JSCompiler_alias_NULL$$
  }
  return $dataCursor$$3$$
};
var $DvtChartAxisRenderer$$ = {};
dvt.$Obj$.$createSubclass$($DvtChartAxisRenderer$$, dvt.$Obj$);
$DvtChartAxisRenderer$$.$render$ = function $$DvtChartAxisRenderer$$$$render$$($chart$$282$$, $container$$37$$, $availSpace$$41$$) {
  $DvtChartTypeUtils$$.$hasAxes$($chart$$282$$) && ($DvtChartAxisUtils$$.$applyInitialZooming$($chart$$282$$, $availSpace$$41$$), $DvtChartTypeUtils$$.$isBubble$($chart$$282$$) && $DvtChartMarkerUtils$$.$calcBubbleSizes$($chart$$282$$, $availSpace$$41$$.$w$, $availSpace$$41$$.$h$), $DvtChartTypeUtils$$.$isPolar$($chart$$282$$) ? $DvtChartAxisRenderer$$.$_renderPolar$($chart$$282$$, $container$$37$$, $availSpace$$41$$) : $DvtChartAxisRenderer$$.$_renderCartesian$($chart$$282$$, $container$$37$$, $availSpace$$41$$))
};
$DvtChartAxisRenderer$$.$_renderCartesian$ = function $$DvtChartAxisRenderer$$$$_renderCartesian$$($chart$$283$$, $container$$38_xInfo$$, $availSpace$$42$$) {
  var $bAligned_options$$96$$ = $chart$$283$$.$getOptions$(), $isHoriz$$8$$ = $DvtChartTypeUtils$$.$isHorizontal$($chart$$283$$), $isSplitDualY$$2$$ = $DvtChartTypeUtils$$.$isSplitDualY$($chart$$283$$), $totalAvailSpace_yAvailSpace$$ = $availSpace$$42$$.$clone$(), $maxSize_newWidth$$1_numGroups$$3_splitterPosition$$1_y2AvailSpace_yPosition$$ = $DvtChartAxisUtils$$.$getYAxisPosition$($chart$$283$$), $isR2L$$2_y2Position$$ = $DvtChartAxisUtils$$.$getY2AxisPosition$($chart$$283$$);
  $DvtChartAxisRenderer$$.$_addAxisGaps$($chart$$283$$, $availSpace$$42$$);
  $isSplitDualY$$2$$ && $maxSize_newWidth$$1_numGroups$$3_splitterPosition$$1_y2AvailSpace_yPosition$$ == $isR2L$$2_y2Position$$ && ($bAligned_options$$96$$.yAxis._skipHighestTick = $isHoriz$$8$$, $bAligned_options$$96$$.y2Axis._skipHighestTick = !$isHoriz$$8$$);
  var $yInfo$$ = $DvtChartAxisRenderer$$.$_createYAxis$($chart$$283$$, $container$$38_xInfo$$, $availSpace$$42$$, $totalAvailSpace_yAvailSpace$$), $y2Info$$ = $DvtChartAxisRenderer$$.$_createY2Axis$($chart$$283$$, $container$$38_xInfo$$, $availSpace$$42$$, $totalAvailSpace_yAvailSpace$$);
  if(($bAligned_options$$96$$ = !$isSplitDualY$$2$$ && "on" == $bAligned_options$$96$$.y2Axis.alignTickMarks && $bAligned_options$$96$$.y2Axis.step == $JSCompiler_alias_NULL$$) && $yInfo$$ && $y2Info$$) {
    $DvtChartAxisRenderer$$.$_alignYAxes$($yInfo$$, $y2Info$$), $isHoriz$$8$$ || ($y2Info$$.$dim$ = $DvtChartAxisRenderer$$.$_getPreferredSize$($chart$$283$$, $y2Info$$.axis, $chart$$283$$.$y2Axis$, $y2Info$$.options, "y2", $availSpace$$42$$, $totalAvailSpace_yAvailSpace$$))
  }
  var $yGap$$ = $DvtChartAxisUtils$$.$getTickLabelGapSize$($chart$$283$$, "y"), $y2Gap$$ = $DvtChartAxisUtils$$.$getTickLabelGapSize$($chart$$283$$, "y2");
  $isSplitDualY$$2$$ && $maxSize_newWidth$$1_numGroups$$3_splitterPosition$$1_y2AvailSpace_yPosition$$ == $isR2L$$2_y2Position$$ ? ($isHoriz$$8$$ ? ($maxSize_newWidth$$1_numGroups$$3_splitterPosition$$1_y2AvailSpace_yPosition$$ = Math.max($yInfo$$.$dim$.$h$ + $yGap$$, $y2Info$$.$dim$.$h$ + $y2Gap$$), $yInfo$$.$dim$.$h$ = $maxSize_newWidth$$1_numGroups$$3_splitterPosition$$1_y2AvailSpace_yPosition$$ - $yGap$$, $y2Info$$.$dim$.$h$ = $maxSize_newWidth$$1_numGroups$$3_splitterPosition$$1_y2AvailSpace_yPosition$$ - 
  $y2Gap$$) : ($maxSize_newWidth$$1_numGroups$$3_splitterPosition$$1_y2AvailSpace_yPosition$$ = Math.max($yInfo$$.$dim$.$w$ + $yGap$$, $y2Info$$.$dim$.$w$ + $y2Gap$$), $yInfo$$.$dim$.$w$ = $maxSize_newWidth$$1_numGroups$$3_splitterPosition$$1_y2AvailSpace_yPosition$$ - $yGap$$, $y2Info$$.$dim$.$w$ = $maxSize_newWidth$$1_numGroups$$3_splitterPosition$$1_y2AvailSpace_yPosition$$ - $y2Gap$$), $DvtChartAxisRenderer$$.$_positionAxis$($availSpace$$42$$.$clone$(), $yInfo$$, $yGap$$)) : $DvtChartAxisRenderer$$.$_positionAxis$($availSpace$$42$$, 
  $yInfo$$, $yGap$$);
  $DvtChartAxisRenderer$$.$_positionAxis$($availSpace$$42$$, $y2Info$$, $y2Gap$$);
  $maxSize_newWidth$$1_numGroups$$3_splitterPosition$$1_y2AvailSpace_yPosition$$ = $DvtChartDataUtils$$.$getGroupCount$($chart$$283$$);
  "pixel" == $DvtChartStyleUtils$$.$getBarSpacing$($chart$$283$$) && $DvtChartTypeUtils$$.$isBar$($chart$$283$$) && $availSpace$$42$$.$w$ > $maxSize_newWidth$$1_numGroups$$3_splitterPosition$$1_y2AvailSpace_yPosition$$ && ($maxSize_newWidth$$1_numGroups$$3_splitterPosition$$1_y2AvailSpace_yPosition$$ *= Math.floor($availSpace$$42$$.$w$ / $maxSize_newWidth$$1_numGroups$$3_splitterPosition$$1_y2AvailSpace_yPosition$$), $availSpace$$42$$.x += ($availSpace$$42$$.$w$ - $maxSize_newWidth$$1_numGroups$$3_splitterPosition$$1_y2AvailSpace_yPosition$$) / 
  2, $availSpace$$42$$.$w$ = $maxSize_newWidth$$1_numGroups$$3_splitterPosition$$1_y2AvailSpace_yPosition$$);
  $container$$38_xInfo$$ = $DvtChartAxisRenderer$$.$_createXAxis$($chart$$283$$, $container$$38_xInfo$$, $availSpace$$42$$, $totalAvailSpace_yAvailSpace$$);
  $container$$38_xInfo$$.axis.$render$($container$$38_xInfo$$.options, $container$$38_xInfo$$.$dim$.$w$, $container$$38_xInfo$$.$dim$.$h$);
  $DvtChartAxisRenderer$$.$_positionAxis$($availSpace$$42$$, $container$$38_xInfo$$, $DvtChartAxisUtils$$.$getTickLabelGapSize$($chart$$283$$, "x"));
  $maxSize_newWidth$$1_numGroups$$3_splitterPosition$$1_y2AvailSpace_yPosition$$ = $DvtChartStyleUtils$$.$getSplitterPosition$($chart$$283$$);
  $isR2L$$2_y2Position$$ = dvt.$Agent$.$isRightToLeft$($chart$$283$$.$getCtx$());
  $totalAvailSpace_yAvailSpace$$ = $DvtChartAxisRenderer$$.$_getSplitAvailSpace$($availSpace$$42$$, $maxSize_newWidth$$1_numGroups$$3_splitterPosition$$1_y2AvailSpace_yPosition$$, $isHoriz$$8$$, $isHoriz$$8$$ && $isR2L$$2_y2Position$$);
  $maxSize_newWidth$$1_numGroups$$3_splitterPosition$$1_y2AvailSpace_yPosition$$ = $DvtChartAxisRenderer$$.$_getSplitAvailSpace$($availSpace$$42$$, 1 - $maxSize_newWidth$$1_numGroups$$3_splitterPosition$$1_y2AvailSpace_yPosition$$, $isHoriz$$8$$, !$isHoriz$$8$$ || !$isR2L$$2_y2Position$$);
  $isHoriz$$8$$ ? ($yInfo$$ && ($yInfo$$.axis.$setTranslateX$($availSpace$$42$$.x), $isSplitDualY$$2$$ ? $yInfo$$.axis.$render$($yInfo$$.options, $totalAvailSpace_yAvailSpace$$.$w$, $yInfo$$.$dim$.$h$, $totalAvailSpace_yAvailSpace$$.x, 0) : $yInfo$$.axis.$render$($yInfo$$.options, $availSpace$$42$$.$w$, $yInfo$$.$dim$.$h$)), $bAligned_options$$96$$ && ($yInfo$$ && $y2Info$$) && $DvtChartAxisRenderer$$.$_alignYAxes$($yInfo$$, $y2Info$$), $y2Info$$ && ($y2Info$$.axis.$setTranslateX$($availSpace$$42$$.x), 
  $isSplitDualY$$2$$ ? $y2Info$$.axis.$render$($y2Info$$.options, $maxSize_newWidth$$1_numGroups$$3_splitterPosition$$1_y2AvailSpace_yPosition$$.$w$, $y2Info$$.$dim$.$h$, $maxSize_newWidth$$1_numGroups$$3_splitterPosition$$1_y2AvailSpace_yPosition$$.x, 0) : $y2Info$$.axis.$render$($y2Info$$.options, $availSpace$$42$$.$w$, $y2Info$$.$dim$.$h$)), $DvtChartAxisRenderer$$.$_setOverflow$($availSpace$$42$$, $yInfo$$, $container$$38_xInfo$$)) : ($yInfo$$ && ($isSplitDualY$$2$$ ? $yInfo$$.axis.$render$($yInfo$$.options, 
  $yInfo$$.$dim$.$w$, $totalAvailSpace_yAvailSpace$$.$h$, 0, $totalAvailSpace_yAvailSpace$$.y) : $yInfo$$.axis.$render$($yInfo$$.options, $yInfo$$.$dim$.$w$, $availSpace$$42$$.$h$)), $bAligned_options$$96$$ && ($yInfo$$ && $y2Info$$) && $DvtChartAxisRenderer$$.$_alignYAxes$($yInfo$$, $y2Info$$), $y2Info$$ && ($isSplitDualY$$2$$ ? $y2Info$$.axis.$render$($y2Info$$.options, $y2Info$$.$dim$.$w$, $maxSize_newWidth$$1_numGroups$$3_splitterPosition$$1_y2AvailSpace_yPosition$$.$h$, 0, $maxSize_newWidth$$1_numGroups$$3_splitterPosition$$1_y2AvailSpace_yPosition$$.y) : 
  $y2Info$$.axis.$render$($y2Info$$.options, $y2Info$$.$dim$.$w$, $availSpace$$42$$.$h$)), $DvtChartAxisRenderer$$.$_setOverflow$($availSpace$$42$$, $container$$38_xInfo$$, $yInfo$$, $y2Info$$));
  $DvtChartAxisRenderer$$.$_storeAxes$($chart$$283$$, $container$$38_xInfo$$, $yInfo$$, $y2Info$$)
};
$DvtChartAxisRenderer$$.$_renderPolar$ = function $$DvtChartAxisRenderer$$$$_renderPolar$$($chart$$284$$, $container$$39_yInfo$$1$$, $availSpace$$43$$) {
  var $xInfo$$1$$ = $DvtChartAxisRenderer$$.$_createXAxis$($chart$$284$$, $container$$39_yInfo$$1$$, $availSpace$$43$$, $availSpace$$43$$);
  $xInfo$$1$$.axis.$setTranslateX$($availSpace$$43$$.x);
  $xInfo$$1$$.axis.$setTranslateY$($availSpace$$43$$.y);
  $xInfo$$1$$.axis.$render$($xInfo$$1$$.options, $availSpace$$43$$.$w$, $availSpace$$43$$.$h$);
  $container$$39_yInfo$$1$$ = $DvtChartAxisRenderer$$.$_createYAxis$($chart$$284$$, $container$$39_yInfo$$1$$, $availSpace$$43$$, $availSpace$$43$$);
  $container$$39_yInfo$$1$$.axis.$setTranslateX$($availSpace$$43$$.x);
  $container$$39_yInfo$$1$$.axis.$setTranslateY$($availSpace$$43$$.y);
  $container$$39_yInfo$$1$$.axis.$render$($container$$39_yInfo$$1$$.options, $availSpace$$43$$.$w$, $availSpace$$43$$.$h$);
  $DvtChartAxisRenderer$$.$_storeAxes$($chart$$284$$, $xInfo$$1$$, $container$$39_yInfo$$1$$)
};
$DvtChartAxisRenderer$$.$_createXAxis$ = function $$DvtChartAxisRenderer$$$$_createXAxis$$($chart$$285_preferredSize$$1$$, $container$$40$$, $availSpace$$44$$, $totalAvailSpace$$1$$) {
  var $options$$97$$ = $chart$$285_preferredSize$$1$$.$getOptions$(), $axisOffset$$1_numGroups$$4_position$$24$$ = $DvtChartAxisUtils$$.$getXAxisPosition$($chart$$285_preferredSize$$1$$), $axisOptions$$10$$ = dvt.$JsonUtils$.$clone$($options$$97$$.xAxis);
  $axisOptions$$10$$.position = $axisOffset$$1_numGroups$$4_position$$24$$;
  $axisOptions$$10$$.isStandalone = $DvtChartTypeUtils$$.$isStandaloneXAxis$($chart$$285_preferredSize$$1$$);
  $axisOptions$$10$$.groupSeparators = $options$$97$$.styleDefaults.groupSeparators;
  $DvtChartAxisRenderer$$.$_addCommonAxisAttributes$($axisOptions$$10$$, "x", $chart$$285_preferredSize$$1$$);
  $axisOptions$$10$$.groups = $options$$97$$.groups;
  $axisOptions$$10$$._groupWidthRatios = $DvtChartAxisUtils$$.$getGroupWidthRatios$($chart$$285_preferredSize$$1$$);
  $axisOptions$$10$$.timeAxisType = $DvtChartAxisUtils$$.$getTimeAxisType$($chart$$285_preferredSize$$1$$);
  $axisOptions$$10$$._environment = $options$$97$$._environment;
  $axisOptions$$10$$._locale = $options$$97$$._locale;
  $axisOptions$$10$$.drilling = $options$$97$$.drilling;
  var $axis$$33_isHoriz$$9$$ = "top" == $axisOffset$$1_numGroups$$4_position$$24$$ || "bottom" == $axisOffset$$1_numGroups$$4_position$$24$$, $isGridShifted$$ = $DvtChartAxisUtils$$.$isGridShifted$($chart$$285_preferredSize$$1$$);
  "tangential" == $axisOffset$$1_numGroups$$4_position$$24$$ && $DvtChartAxisUtils$$.$hasGroupAxis$($chart$$285_preferredSize$$1$$) ? $isGridShifted$$ ? ($axisOptions$$10$$.startGroupOffset = 0.5, $axisOptions$$10$$.endGroupOffset = 0.5) : $axisOptions$$10$$.endGroupOffset = 1 : ($axisOffset$$1_numGroups$$4_position$$24$$ = $DvtChartAxisUtils$$.$getAxisOffset$($chart$$285_preferredSize$$1$$), $axisOptions$$10$$.startGroupOffset = $axisOffset$$1_numGroups$$4_position$$24$$, $axisOptions$$10$$.endGroupOffset = 
  $axisOffset$$1_numGroups$$4_position$$24$$, $DvtChartTypeUtils$$.$hasUncenteredSeries$($chart$$285_preferredSize$$1$$) && ($axisOptions$$10$$.endGroupOffset += 1), !$DvtChartEventUtils$$.$isScrollable$($chart$$285_preferredSize$$1$$) && !$DvtChartTypeUtils$$.$isOverview$($chart$$285_preferredSize$$1$$) && ($axisOffset$$1_numGroups$$4_position$$24$$ = $DvtChartDataUtils$$.$getGroupCount$($chart$$285_preferredSize$$1$$), $DvtChartAxisUtils$$.$isAxisRendered$($chart$$285_preferredSize$$1$$, "y") && 
  $DvtChartAxisUtils$$.$isTickLabelInside$($chart$$285_preferredSize$$1$$, "y") && ($axisOptions$$10$$[($axis$$33_isHoriz$$9$$ ? "start" : "end") + "GroupOffset"] += 0.04 * $axisOffset$$1_numGroups$$4_position$$24$$), $DvtChartAxisUtils$$.$isAxisRendered$($chart$$285_preferredSize$$1$$, "y2") && $DvtChartAxisUtils$$.$isTickLabelInside$($chart$$285_preferredSize$$1$$, "y2") && ($axisOptions$$10$$[($axis$$33_isHoriz$$9$$ ? "end" : "start") + "GroupOffset"] += 0.04 * $axisOffset$$1_numGroups$$4_position$$24$$)));
  $axisOptions$$10$$.leftBuffer = $axis$$33_isHoriz$$9$$ ? $availSpace$$44$$.x - $totalAvailSpace$$1$$.x : 0;
  $axisOptions$$10$$.rightBuffer = $axis$$33_isHoriz$$9$$ ? $totalAvailSpace$$1$$.$w$ + $totalAvailSpace$$1$$.x - ($availSpace$$44$$.$w$ + $availSpace$$44$$.x) : 0;
  $axisOptions$$10$$._renderGridAtLabels = !$isGridShifted$$ || $DvtChartAxisUtils$$.$hasTimeAxis$($chart$$285_preferredSize$$1$$);
  $axis$$33_isHoriz$$9$$ = new $DvtChartAxis$$($chart$$285_preferredSize$$1$$.$getCtx$(), $chart$$285_preferredSize$$1$$.$processEvent$, $chart$$285_preferredSize$$1$$);
  $container$$40$$.$addChild$($axis$$33_isHoriz$$9$$);
  $chart$$285_preferredSize$$1$$ = $DvtChartAxisRenderer$$.$_getPreferredSize$($chart$$285_preferredSize$$1$$, $axis$$33_isHoriz$$9$$, $chart$$285_preferredSize$$1$$.$xAxis$, $axisOptions$$10$$, "x", $availSpace$$44$$, $totalAvailSpace$$1$$);
  $axisOptions$$10$$._minOverflowCoord = $options$$97$$._minOverflowCoord - $availSpace$$44$$.x;
  $axisOptions$$10$$._maxOverflowCoord = $options$$97$$._maxOverflowCoord - $availSpace$$44$$.x;
  return{axis:$axis$$33_isHoriz$$9$$, options:$axisOptions$$10$$, $dim$:$chart$$285_preferredSize$$1$$}
};
$DvtChartAxisRenderer$$.$_createYAxis$ = function $$DvtChartAxisRenderer$$$$_createYAxis$$($chart$$286$$, $container$$41_preferredSize$$2$$, $availSpace$$45$$, $totalAvailSpace$$2$$) {
  var $options$$98$$ = $chart$$286$$.$getOptions$();
  if($DvtChartTypeUtils$$.$hasY2DataOnly$($chart$$286$$)) {
    return $JSCompiler_alias_NULL$$
  }
  var $axisOptions$$11$$ = dvt.$JsonUtils$.$clone$($options$$98$$.yAxis);
  $axisOptions$$11$$.position = $DvtChartAxisUtils$$.$getYAxisPosition$($chart$$286$$);
  $axisOptions$$11$$.isStandalone = $DvtChartTypeUtils$$.$isStandaloneYAxis$($chart$$286$$);
  $DvtChartAxisRenderer$$.$_addCommonAxisAttributes$($axisOptions$$11$$, "y", $chart$$286$$);
  $DvtChartAxisRenderer$$.$_addCommonYAxisAttributes$($axisOptions$$11$$, $chart$$286$$);
  var $axis$$34$$ = new $DvtChartAxis$$($chart$$286$$.$getCtx$(), $chart$$286$$.$processEvent$, $chart$$286$$);
  $container$$41_preferredSize$$2$$.$addChild$($axis$$34$$);
  $container$$41_preferredSize$$2$$ = $DvtChartAxisRenderer$$.$_getPreferredSize$($chart$$286$$, $axis$$34$$, $chart$$286$$.$yAxis$, $axisOptions$$11$$, "y", $availSpace$$45$$, $totalAvailSpace$$2$$);
  $DvtChartAxisRenderer$$.$_adjustYAxisForLabels$($axis$$34$$, $axisOptions$$11$$, $chart$$286$$, "y");
  $options$$98$$.yAxis.min = $axisOptions$$11$$.min;
  $options$$98$$.yAxis.max = $axisOptions$$11$$.max;
  return{axis:$axis$$34$$, options:$axisOptions$$11$$, $dim$:$container$$41_preferredSize$$2$$}
};
$DvtChartAxisRenderer$$.$_createY2Axis$ = function $$DvtChartAxisRenderer$$$$_createY2Axis$$($chart$$287$$, $container$$42_preferredSize$$3$$, $availSpace$$46$$, $totalAvailSpace$$3$$) {
  var $options$$99$$ = $chart$$287$$.$getOptions$();
  if($DvtChartTypeUtils$$.$hasY2Data$($chart$$287$$)) {
    var $axisOptions$$12$$ = dvt.$JsonUtils$.$clone$($options$$99$$.y2Axis);
    $axisOptions$$12$$.position = $DvtChartAxisUtils$$.$getY2AxisPosition$($chart$$287$$);
    $axisOptions$$12$$.isStandalone = $DvtChartTypeUtils$$.$isStandaloneY2Axis$($chart$$287$$);
    $DvtChartAxisRenderer$$.$_addCommonAxisAttributes$($axisOptions$$12$$, "y2", $chart$$287$$);
    $DvtChartAxisRenderer$$.$_addCommonYAxisAttributes$($axisOptions$$12$$, $chart$$287$$);
    var $axis$$35$$ = new $DvtChartAxis$$($chart$$287$$.$getCtx$(), $chart$$287$$.$processEvent$, $chart$$287$$);
    $container$$42_preferredSize$$3$$.$addChild$($axis$$35$$);
    $container$$42_preferredSize$$3$$ = $DvtChartAxisRenderer$$.$_getPreferredSize$($chart$$287$$, $axis$$35$$, $chart$$287$$.$y2Axis$, $axisOptions$$12$$, "y2", $availSpace$$46$$, $totalAvailSpace$$3$$);
    $DvtChartAxisRenderer$$.$_adjustYAxisForLabels$($axis$$35$$, $axisOptions$$12$$, $chart$$287$$, "y2");
    $options$$99$$.y2Axis.min = $axisOptions$$12$$.min;
    $options$$99$$.y2Axis.max = $axisOptions$$12$$.max;
    return{axis:$axis$$35$$, options:$axisOptions$$12$$, $dim$:$container$$42_preferredSize$$3$$}
  }
};
$DvtChartAxisRenderer$$.$_addCommonAxisAttributes$ = function $$DvtChartAxisRenderer$$$$_addCommonAxisAttributes$$($axisOptions$$13$$, $dataValues_type$$128$$, $chart$$288$$) {
  var $options$$100$$ = $chart$$288$$.$getOptions$();
  $axisOptions$$13$$.skin = $options$$100$$.skin;
  $axisOptions$$13$$.tickLabel.position = $DvtChartAxisUtils$$.$isTickLabelInside$($chart$$288$$, $dataValues_type$$128$$) ? "inside" : "outside";
  $axisOptions$$13$$.baselineScaling = $DvtChartAxisUtils$$.$getBaselineScaling$($chart$$288$$, $dataValues_type$$128$$);
  if($DvtChartAxisUtils$$.$isTickLabelInside$($chart$$288$$, $dataValues_type$$128$$) || "tangential" == $axisOptions$$13$$.position) {
    $axisOptions$$13$$._skipHighestTick = $JSCompiler_alias_TRUE$$
  }
  $axisOptions$$13$$.zoomAndScroll = $DvtChartTypeUtils$$.$isPolar$($chart$$288$$) ? "off" : $options$$100$$.zoomAndScroll;
  $axisOptions$$13$$._isOverview = $DvtChartTypeUtils$$.$isOverview$($chart$$288$$);
  if("x" != $dataValues_type$$128$$ || !$DvtChartAxisUtils$$.$hasGroupAxis$($chart$$288$$)) {
    $dataValues_type$$128$$ = $DvtChartDataUtils$$.$getMinMaxValue$($chart$$288$$, $dataValues_type$$128$$), $axisOptions$$13$$.dataMin = $axisOptions$$13$$.dataMin != $JSCompiler_alias_NULL$$ ? $axisOptions$$13$$.dataMin : $dataValues_type$$128$$.min, $axisOptions$$13$$.dataMax = $axisOptions$$13$$.dataMax != $JSCompiler_alias_NULL$$ ? $axisOptions$$13$$.dataMax : $dataValues_type$$128$$.max
  }
  $DvtChartTypeUtils$$.$isPolar$($chart$$288$$) && ($axisOptions$$13$$.polarGridShape = $DvtChartAxisUtils$$.$isGridPolygonal$($chart$$288$$) ? "polygon" : "circle", $axisOptions$$13$$._radius = $chart$$288$$.$getRadius$())
};
$DvtChartAxisRenderer$$.$_addCommonYAxisAttributes$ = function $$DvtChartAxisRenderer$$$$_addCommonYAxisAttributes$$($axisOptions$$14$$, $chart$$289$$) {
  $axisOptions$$14$$.timeAxisType = "disabled";
  $DvtChartEventUtils$$.$isLiveScroll$($chart$$289$$) && ($DvtChartTypeUtils$$.$isBLAC$($chart$$289$$) && !$DvtChartTypeUtils$$.$isPolar$($chart$$289$$)) && ($axisOptions$$14$$._continuousExtent = "on");
  if($axisOptions$$14$$.isStandalone) {
    $axisOptions$$14$$.leftBuffer = 0, $axisOptions$$14$$.rightBuffer = 0
  }else {
    if($DvtChartTypeUtils$$.$isSplitDualY$($chart$$289$$)) {
      $axisOptions$$14$$.leftBuffer = Infinity, $axisOptions$$14$$.rightBuffer = Infinity
    }else {
      var $isR2L$$3$$ = dvt.$Agent$.$isRightToLeft$($chart$$289$$.$getCtx$());
      $axisOptions$$14$$.leftBuffer = $isR2L$$3$$ ? 0 : dvt.$Axis$.$MINIMUM_AXIS_BUFFER$;
      $axisOptions$$14$$.rightBuffer = $isR2L$$3$$ ? dvt.$Axis$.$MINIMUM_AXIS_BUFFER$ : 0
    }
  }
};
$DvtChartAxisRenderer$$.$_adjustYAxisForLabels$ = function $$DvtChartAxisRenderer$$$$_adjustYAxisForLabels$$($axis$$36_splitYFactor$$, $axisOptions$$15$$, $chart$$290$$, $type$$129$$) {
  var $axisInfo$$12_options$$101$$ = $chart$$290$$.$getOptions$();
  if($DvtChartAxisUtils$$.$isYAdjustmentNeeded$($chart$$290$$)) {
    var $dataLabelStyle_textHeight$$ = $axisInfo$$12_options$$101$$.styleDefaults.dataLabelStyle, $buffer$$9_stackLabelStyle$$ = $axisInfo$$12_options$$101$$.styleDefaults.stackLabelStyle, $axisInfo$$12_options$$101$$ = $axis$$36_splitYFactor$$.$getInfo$(), $isStackLabelRendered$$1$$ = $DvtChartStyleUtils$$.$isStackLabelRendered$($chart$$290$$), $dataLabelStyle_textHeight$$ = dvt.$TextUtils$.$getTextStringHeight$($chart$$290$$.$getCtx$(), $isStackLabelRendered$$1$$ ? $buffer$$9_stackLabelStyle$$ : 
    $dataLabelStyle_textHeight$$), $buffer$$9_stackLabelStyle$$ = 0;
    "log" == $axisOptions$$15$$.scale ? $buffer$$9_stackLabelStyle$$ = $axis$$36_splitYFactor$$.$getUnboundedValueAt$($axis$$36_splitYFactor$$.$getUnboundedCoordAt$($axisInfo$$12_options$$101$$.$DataMax$) - $dataLabelStyle_textHeight$$) - $axisInfo$$12_options$$101$$.$DataMax$ : ($axis$$36_splitYFactor$$ = 1, $DvtChartTypeUtils$$.$isSplitDualY$($chart$$290$$) && ($axis$$36_splitYFactor$$ = "y" == $type$$129$$ ? $DvtChartStyleUtils$$.$getSplitterPosition$($chart$$290$$) : 1 - $DvtChartStyleUtils$$.$getSplitterPosition$($chart$$290$$)), 
    $buffer$$9_stackLabelStyle$$ = Math.abs($axisInfo$$12_options$$101$$.$MaxValue$ - $axisInfo$$12_options$$101$$.$MinValue$) / (Math.abs($axisInfo$$12_options$$101$$.$getEndCoord$() - $axisInfo$$12_options$$101$$.$getStartCoord$()) * $axis$$36_splitYFactor$$) * $dataLabelStyle_textHeight$$);
    $DvtChartTypeUtils$$.$isHorizontal$($chart$$290$$) && ($buffer$$9_stackLabelStyle$$ *= 4);
    $axisInfo$$12_options$$101$$.$DataMin$ - $axisInfo$$12_options$$101$$.$GlobalMin$ < $buffer$$9_stackLabelStyle$$ && 0 > $axisInfo$$12_options$$101$$.$DataMin$ && ($axisOptions$$15$$.dataMin -= $buffer$$9_stackLabelStyle$$);
    $axisInfo$$12_options$$101$$.$GlobalMax$ - $axisInfo$$12_options$$101$$.$DataMax$ < $buffer$$9_stackLabelStyle$$ && 0 < $axisInfo$$12_options$$101$$.$DataMax$ && ($axisOptions$$15$$.dataMax += $buffer$$9_stackLabelStyle$$)
  }
};
$DvtChartAxisRenderer$$.$_getPreferredSize$ = function $$DvtChartAxisRenderer$$$$_getPreferredSize$$($chart$$291$$, $axis$$37$$, $oldAxis$$, $axisOptions$$16$$, $preferredWidth$$1_type$$130$$, $availSpace$$47_isR2L$$4$$, $totalAvailSpace$$4$$) {
  var $isStandalone$$ = $axisOptions$$16$$.isStandalone, $position$$25$$ = $axisOptions$$16$$.position, $isHoriz$$10$$ = "top" == $position$$25$$ || "bottom" == $position$$25$$, $gap$$18$$ = $DvtChartAxisUtils$$.$getTickLabelGapSize$($chart$$291$$, $preferredWidth$$1_type$$130$$), $maxSize$$1$$ = $axisOptions$$16$$.maxSize, $axisSize$$ = $axisOptions$$16$$.size;
  $preferredWidth$$1_type$$130$$ = $availSpace$$47_isR2L$$4$$.$w$;
  var $preferredHeight$$1$$ = $availSpace$$47_isR2L$$4$$.$h$;
  if("radial" == $position$$25$$ || "tangential" == $position$$25$$) {
    $preferredHeight$$1$$ = $preferredWidth$$1_type$$130$$ = 0
  }else {
    if("off" == $axisOptions$$16$$.rendered) {
      $isHoriz$$10$$ ? $preferredHeight$$1$$ = 0 : $preferredWidth$$1_type$$130$$ = 0
    }else {
      if($isStandalone$$) {
        $isHoriz$$10$$ ? $preferredHeight$$1$$ = $availSpace$$47_isR2L$$4$$.$h$ - $gap$$18$$ : $preferredWidth$$1_type$$130$$ = $availSpace$$47_isR2L$$4$$.$w$ - $gap$$18$$
      }else {
        if($axisSize$$ != $JSCompiler_alias_NULL$$) {
          $isHoriz$$10$$ ? $preferredHeight$$1$$ = $DvtChartStyleUtils$$.$getSizeInPixels$($axisSize$$, $totalAvailSpace$$4$$.$h$) - $gap$$18$$ : $preferredWidth$$1_type$$130$$ = $DvtChartStyleUtils$$.$getSizeInPixels$($axisSize$$, $totalAvailSpace$$4$$.$w$) - $gap$$18$$
        }else {
          if($chart$$291$$.$getOptions$()._duringAnimation) {
            $isHoriz$$10$$ ? ($availSpace$$47_isR2L$$4$$ = dvt.$Agent$.$isRightToLeft$($chart$$291$$.$getCtx$()), $axisOptions$$16$$._startOverflow = $availSpace$$47_isR2L$$4$$ ? $JSCompiler_StaticMethods_getRightOverflow$$($oldAxis$$) : $JSCompiler_StaticMethods_getLeftOverflow$$($oldAxis$$), $axisOptions$$16$$._endOverflow = $availSpace$$47_isR2L$$4$$ ? $JSCompiler_StaticMethods_getLeftOverflow$$($oldAxis$$) : $JSCompiler_StaticMethods_getRightOverflow$$($oldAxis$$), $preferredHeight$$1$$ = $oldAxis$$.getHeight()) : 
            $preferredWidth$$1_type$$130$$ = $oldAxis$$.getWidth()
          }else {
            return $isHoriz$$10$$ ? $axis$$37$$.$getPreferredSize$($axisOptions$$16$$, $availSpace$$47_isR2L$$4$$.$w$, $DvtChartStyleUtils$$.$getSizeInPixels$($maxSize$$1$$, $totalAvailSpace$$4$$.$h$) - $gap$$18$$) : $axis$$37$$.$getPreferredSize$($axisOptions$$16$$, $DvtChartStyleUtils$$.$getSizeInPixels$($maxSize$$1$$, $totalAvailSpace$$4$$.$w$) - $gap$$18$$, $availSpace$$47_isR2L$$4$$.$h$)
          }
        }
      }
    }
  }
  $DvtChartAxisUtils$$.$isYAdjustmentNeeded$($chart$$291$$) && $axis$$37$$.$getPreferredSize$($axisOptions$$16$$, $preferredWidth$$1_type$$130$$, $preferredHeight$$1$$);
  return new dvt.$Dimension$($preferredWidth$$1_type$$130$$, $preferredHeight$$1$$)
};
$DvtChartAxisRenderer$$.$_addAxisGaps$ = function $$DvtChartAxisRenderer$$$$_addAxisGaps$$($chart$$292$$, $availSpace$$48$$) {
  var $isHoriz$$11$$ = $DvtChartTypeUtils$$.$isHorizontal$($chart$$292$$), $yPosition$$1$$ = $DvtChartAxisUtils$$.$getYAxisPosition$($chart$$292$$), $y2Position$$1$$ = $DvtChartAxisUtils$$.$getY2AxisPosition$($chart$$292$$), $isXRendered$$ = $DvtChartAxisUtils$$.$isAxisRendered$($chart$$292$$, "x"), $isYRendered$$ = $DvtChartAxisUtils$$.$isAxisRendered$($chart$$292$$, "y"), $isY2Rendered$$ = $DvtChartAxisUtils$$.$isAxisRendered$($chart$$292$$, "y2"), $axisGap$$ = $chart$$292$$.$getOptions$().layout.verticalAxisGap, 
  $axisGap$$ = $isHoriz$$11$$ ? $axisGap$$ * $DvtChartAxisUtils$$.$getGapScalingFactor$($chart$$292$$, "x") : $axisGap$$ * Math.max($DvtChartAxisUtils$$.$getGapScalingFactor$($chart$$292$$, "y"), $DvtChartAxisUtils$$.$getGapScalingFactor$($chart$$292$$, "y2")), $axisGap$$ = Math.ceil($axisGap$$);
  if($isHoriz$$11$$ && !("top" == $yPosition$$1$$ && $isYRendered$$) && !("top" == $y2Position$$1$$ && $isY2Rendered$$) || !$isHoriz$$11$$) {
    $availSpace$$48$$.y += $axisGap$$, $availSpace$$48$$.$h$ -= $axisGap$$
  }
  if($isHoriz$$11$$ && !("bottom" == $yPosition$$1$$ && $isYRendered$$) && !("bottom" == $y2Position$$1$$ && $isY2Rendered$$) || !$isHoriz$$11$$ && !$isXRendered$$) {
    $availSpace$$48$$.$h$ -= $axisGap$$
  }
};
$DvtChartAxisRenderer$$.$_positionAxis$ = function $$DvtChartAxisRenderer$$$$_positionAxis$$($availSpace$$49$$, $axisInfo$$13$$, $gap$$19$$) {
  $axisInfo$$13$$ && dvt.$LayoutUtils$.position($availSpace$$49$$, $axisInfo$$13$$.options.position, $axisInfo$$13$$.axis, $axisInfo$$13$$.$dim$.$w$, $axisInfo$$13$$.$dim$.$h$, $gap$$19$$)
};
$DvtChartAxisRenderer$$.$_alignYAxes$ = function $$DvtChartAxisRenderer$$$$_alignYAxes$$($yInfo$$2$$, $y2Info$$1$$) {
  var $yAxisInfo$$ = $yInfo$$2$$.axis.$getInfo$();
  if($yAxisInfo$$) {
    var $minorTickCount$$ = $yAxisInfo$$.$getMinorTickCount$(), $y2Options$$ = $y2Info$$1$$.options;
    $y2Options$$._majorTickCount = $yAxisInfo$$.$getMajorTickCount$();
    $y2Options$$._minorTickCount = $minorTickCount$$
  }
};
$DvtChartAxisRenderer$$.$_getSplitAvailSpace$ = function $$DvtChartAxisRenderer$$$$_getSplitAvailSpace$$($availSpace$$50$$, $splitRatio$$, $isHoriz$$12$$, $isEnd$$) {
  var $splitSpace$$ = $availSpace$$50$$.$clone$();
  $isHoriz$$12$$ ? ($splitSpace$$.$w$ = $availSpace$$50$$.$w$ * $splitRatio$$, $splitSpace$$.x = $isEnd$$ ? $availSpace$$50$$.$w$ * (1 - $splitRatio$$) : 0) : ($splitSpace$$.$h$ = $availSpace$$50$$.$h$ * $splitRatio$$, $splitSpace$$.y = $isEnd$$ ? $availSpace$$50$$.$h$ * (1 - $splitRatio$$) : 0);
  return $splitSpace$$
};
$DvtChartAxisRenderer$$.$_setOverflow$ = function $$DvtChartAxisRenderer$$$$_setOverflow$$($availSpace$$51$$, $rightOverflow_xInfo$$2$$, $yInfo$$3$$, $y2Info$$2$$) {
  if($rightOverflow_xInfo$$2$$) {
    var $leftOverflow$$ = $JSCompiler_StaticMethods_getLeftOverflow$$($rightOverflow_xInfo$$2$$.axis);
    $rightOverflow_xInfo$$2$$ = $JSCompiler_StaticMethods_getRightOverflow$$($rightOverflow_xInfo$$2$$.axis);
    $availSpace$$51$$.x += $leftOverflow$$;
    $availSpace$$51$$.$w$ -= $leftOverflow$$ + $rightOverflow_xInfo$$2$$;
    $yInfo$$3$$ && $yInfo$$3$$.axis.$setTranslateX$($yInfo$$3$$.axis.$getTranslateX$() + ("left" == $yInfo$$3$$.options.position ? $leftOverflow$$ : -$rightOverflow_xInfo$$2$$));
    $y2Info$$2$$ && $y2Info$$2$$.axis.$setTranslateX$($y2Info$$2$$.axis.$getTranslateX$() + ("left" == $y2Info$$2$$.options.position ? $leftOverflow$$ : -$rightOverflow_xInfo$$2$$))
  }
};
$DvtChartAxisRenderer$$.$_storeAxes$ = function $$DvtChartAxisRenderer$$$$_storeAxes$$($chart$$293$$, $xInfo$$3$$, $yInfo$$4$$, $y2Info$$3$$) {
  $chart$$293$$.$xAxis$ && ($chart$$293$$.$xAxis$.$destroy$(), $chart$$293$$.removeChild($chart$$293$$.$xAxis$));
  $chart$$293$$.$yAxis$ && ($chart$$293$$.$yAxis$.$destroy$(), $chart$$293$$.removeChild($chart$$293$$.$yAxis$));
  $chart$$293$$.$y2Axis$ && ($chart$$293$$.$y2Axis$.$destroy$(), $chart$$293$$.removeChild($chart$$293$$.$y2Axis$));
  $chart$$293$$.$xAxis$ = $xInfo$$3$$.axis;
  $chart$$293$$.$yAxis$ = $yInfo$$4$$ ? $yInfo$$4$$.axis : $JSCompiler_alias_NULL$$;
  $chart$$293$$.$y2Axis$ = $y2Info$$3$$ ? $y2Info$$3$$.axis : $JSCompiler_alias_NULL$$
};
var $DvtChartLegendRenderer$$ = {};
dvt.$Obj$.$createSubclass$($DvtChartLegendRenderer$$, dvt.$Obj$);
$DvtChartLegendRenderer$$.$_DEFAULT_LINE_WIDTH_WITH_MARKER$ = 2;
$DvtChartLegendRenderer$$.$render$ = function $$DvtChartLegendRenderer$$$$render$$($chart$$294$$, $container$$43$$, $availSpace$$52_bounds$$41$$) {
  var $options$$102$$ = $chart$$294$$.$getOptions$(), $position$$26$$ = $options$$102$$.legend.position;
  if("on" == $options$$102$$.legend.rendered) {
    var $gap$$20_legendOptions$$2$$ = dvt.$JsonUtils$.$clone$($options$$102$$.legend);
    delete $gap$$20_legendOptions$$2$$.position;
    $gap$$20_legendOptions$$2$$.skin = $options$$102$$.skin;
    $gap$$20_legendOptions$$2$$.hideAndShowBehavior = $DvtChartEventUtils$$.$getHideAndShowBehavior$($chart$$294$$);
    $gap$$20_legendOptions$$2$$.hoverBehavior = $DvtChartEventUtils$$.$getHoverBehavior$($chart$$294$$);
    $gap$$20_legendOptions$$2$$.hoverBehaviorDelay = $DvtChartStyleUtils$$.$getHoverBehaviorDelay$($chart$$294$$);
    $gap$$20_legendOptions$$2$$.hiddenCategories = $DvtChartStyleUtils$$.$getHiddenCategories$($chart$$294$$);
    $gap$$20_legendOptions$$2$$.highlightedCategories = $DvtChartStyleUtils$$.$getHighlightedCategories$($chart$$294$$);
    "auto" == $position$$26$$ && ($position$$26$$ = $availSpace$$52_bounds$$41$$.$w$ >= $availSpace$$52_bounds$$41$$.$h$ ? "end" : "bottom");
    var $isHoriz$$13_shiftedPos$$ = "top" == $position$$26$$ || "bottom" == $position$$26$$;
    $gap$$20_legendOptions$$2$$.orientation = $isHoriz$$13_shiftedPos$$ ? "horizontal" : "vertical";
    "start" == $position$$26$$ && ($gap$$20_legendOptions$$2$$.halign = "end");
    if("start" == $position$$26$$ || "end" == $position$$26$$) {
      $gap$$20_legendOptions$$2$$.valign = "middle"
    }
    "top" == $position$$26$$ && ($gap$$20_legendOptions$$2$$.valign = "bottom");
    if("top" == $position$$26$$ || "bottom" == $position$$26$$) {
      $gap$$20_legendOptions$$2$$.halign = "center"
    }
    $DvtChartLegendRenderer$$.$_addLegendData$($chart$$294$$, $gap$$20_legendOptions$$2$$);
    if(0 != $gap$$20_legendOptions$$2$$.sections.length) {
      var $legend$$2$$ = dvt.$Legend$.newInstance($chart$$294$$.$getCtx$(), $chart$$294$$.$processEvent$, $chart$$294$$);
      $chart$$294$$.getId() != $JSCompiler_alias_NULL$$ && $legend$$2$$.setId($chart$$294$$.getId() + "legend");
      $container$$43$$.$addChild$($legend$$2$$);
      var $actualSize_isRTL$$17_maxWidth$$11$$;
      if($gap$$20_legendOptions$$2$$.size != $JSCompiler_alias_NULL$$) {
        $actualSize_isRTL$$17_maxWidth$$11$$ = $isHoriz$$13_shiftedPos$$ ? new dvt.$Dimension$($availSpace$$52_bounds$$41$$.$w$, $DvtChartStyleUtils$$.$getSizeInPixels$($gap$$20_legendOptions$$2$$.size, $availSpace$$52_bounds$$41$$.$h$)) : new dvt.$Dimension$($DvtChartStyleUtils$$.$getSizeInPixels$($gap$$20_legendOptions$$2$$.size, $availSpace$$52_bounds$$41$$.$w$), $availSpace$$52_bounds$$41$$.$h$)
      }else {
        $actualSize_isRTL$$17_maxWidth$$11$$ = $isHoriz$$13_shiftedPos$$ ? $availSpace$$52_bounds$$41$$.$w$ : $DvtChartStyleUtils$$.$getSizeInPixels$($gap$$20_legendOptions$$2$$.maxSize, $availSpace$$52_bounds$$41$$.$w$);
        var $maxHeight$$6$$ = $isHoriz$$13_shiftedPos$$ ? $DvtChartStyleUtils$$.$getSizeInPixels$($gap$$20_legendOptions$$2$$.maxSize, $availSpace$$52_bounds$$41$$.$h$) : $availSpace$$52_bounds$$41$$.$h$;
        $actualSize_isRTL$$17_maxWidth$$11$$ = $legend$$2$$.$getPreferredSize$($gap$$20_legendOptions$$2$$, $actualSize_isRTL$$17_maxWidth$$11$$, $maxHeight$$6$$)
      }
      $legend$$2$$.$render$($gap$$20_legendOptions$$2$$, $actualSize_isRTL$$17_maxWidth$$11$$.$w$, $actualSize_isRTL$$17_maxWidth$$11$$.$h$);
      $gap$$20_legendOptions$$2$$ = $isHoriz$$13_shiftedPos$$ ? $DvtChartDefaults$getGapHeight$$($chart$$294$$, $options$$102$$.layout.legendGapHeight) : Math.ceil($options$$102$$.layout.legendGapWidth * $JSCompiler_StaticMethods_getGapWidthRatio$$($chart$$294$$));
      dvt.$LayoutUtils$.position($availSpace$$52_bounds$$41$$, $position$$26$$, $legend$$2$$, $actualSize_isRTL$$17_maxWidth$$11$$.$w$, $actualSize_isRTL$$17_maxWidth$$11$$.$h$, $gap$$20_legendOptions$$2$$);
      $availSpace$$52_bounds$$41$$ = $legend$$2$$.$_bounds$;
      $isHoriz$$13_shiftedPos$$ = $legend$$2$$.$localToStage$(new dvt.$Point$($availSpace$$52_bounds$$41$$.x, $availSpace$$52_bounds$$41$$.y));
      $availSpace$$52_bounds$$41$$.x = $isHoriz$$13_shiftedPos$$.x;
      $availSpace$$52_bounds$$41$$.y = $isHoriz$$13_shiftedPos$$.y;
      $DvtChartTypeUtils$$.$isOverview$($chart$$294$$) || ($actualSize_isRTL$$17_maxWidth$$11$$ = dvt.$Agent$.$isRightToLeft$($chart$$294$$.$getCtx$()), "end" == $position$$26$$ ? $actualSize_isRTL$$17_maxWidth$$11$$ ? $options$$102$$._minOverflowCoord = $isHoriz$$13_shiftedPos$$.x + $availSpace$$52_bounds$$41$$.$w$ + $gap$$20_legendOptions$$2$$ / 2 : $options$$102$$._maxOverflowCoord = $isHoriz$$13_shiftedPos$$.x - $gap$$20_legendOptions$$2$$ / 2 : "start" == $position$$26$$ && ($actualSize_isRTL$$17_maxWidth$$11$$ ? 
      $options$$102$$._maxOverflowCoord = $isHoriz$$13_shiftedPos$$.x - $gap$$20_legendOptions$$2$$ / 2 : $options$$102$$._minOverflowCoord = $isHoriz$$13_shiftedPos$$.x + $availSpace$$52_bounds$$41$$.$w$ + $gap$$20_legendOptions$$2$$ / 2));
      $chart$$294$$.$legend$ && ($chart$$294$$.$legend$.$destroy$(), $container$$43$$.removeChild($chart$$294$$.$legend$));
      $chart$$294$$.$legend$ = $legend$$2$$
    }
  }
};
$DvtChartLegendRenderer$$.$_addLegendData$ = function $$DvtChartLegendRenderer$$$$_addLegendData$$($chart$$295$$, $legendOptions$$3$$) {
  var $refObjItems_seriesItems$$3$$ = $DvtChartLegendRenderer$$.$_getSeriesItems$($chart$$295$$, "vertical" == $legendOptions$$3$$.orientation);
  if(0 < $refObjItems_seriesItems$$3$$.length) {
    var $refObjSection_seriesSection$$ = $legendOptions$$3$$.seriesSection;
    $refObjSection_seriesSection$$.items = $refObjItems_seriesItems$$3$$;
    $legendOptions$$3$$.sections.unshift($refObjSection_seriesSection$$)
  }
  $refObjItems_seriesItems$$3$$ = $DvtChartLegendRenderer$$.$_getRefObjItems$($chart$$295$$);
  0 < $refObjItems_seriesItems$$3$$.length && ($refObjSection_seriesSection$$ = $legendOptions$$3$$.referenceObjectSection, $refObjSection_seriesSection$$.items = $refObjItems_seriesItems$$3$$, $legendOptions$$3$$.referenceObjectTitle && ($refObjSection_seriesSection$$.title = $legendOptions$$3$$.referenceObjectTitle), $legendOptions$$3$$.sections.push($refObjSection_seriesSection$$))
};
$DvtChartLegendRenderer$$.$_getSeriesItems$ = function $$DvtChartLegendRenderer$$$$_getSeriesItems$$($chart$$296$$, $isVertical$$) {
  var $ret$$49$$ = [], $categoryKeys_legendItem$$1$$, $bReversed_seriesIndex$$103$$;
  if("pie" == $chart$$296$$.$getType$()) {
    for(var $seriesIndices$$1_yCategoryMap$$ = $DvtChartPieUtils$$.$getRenderedSeriesIndices$($chart$$296$$), $i$$369_y2CategoryMap$$ = 0;$i$$369_y2CategoryMap$$ < $seriesIndices$$1_yCategoryMap$$.length;$i$$369_y2CategoryMap$$++) {
      $bReversed_seriesIndex$$103$$ = $seriesIndices$$1_yCategoryMap$$[$i$$369_y2CategoryMap$$], ($categoryKeys_legendItem$$1$$ = $DvtChartLegendRenderer$$.$_createLegendItem$($chart$$296$$, $bReversed_seriesIndex$$103$$)) && $ret$$49$$.push($categoryKeys_legendItem$$1$$)
    }
    $DvtChartPieUtils$$.$hasOtherSeries$($chart$$296$$) && ($categoryKeys_legendItem$$1$$ = {id:$DvtChartPieUtils$$.$OTHER_SLICE_SERIES_ID$, text:dvt.$Bundle$.$getTranslation$($chart$$296$$.$getOptions$(), "labelOther", dvt.$Bundle$.$CHART_PREFIX$, "LABEL_OTHER"), categoryVisibility:0 <= dvt.$ArrayUtils$.$getIndex$($DvtChartStyleUtils$$.$getHiddenCategories$($chart$$296$$), $DvtChartPieUtils$$.$OTHER_SLICE_SERIES_ID$) ? "hidden" : "visible", symbolType:"marker", color:$chart$$296$$.$getOptions$().styleDefaults.otherColor, 
    borderColor:$chart$$296$$.$getOptions$().styleDefaults.borderColor}, $ret$$49$$.push($categoryKeys_legendItem$$1$$))
  }else {
    var $seriesIndices$$1_yCategoryMap$$ = {}, $i$$369_y2CategoryMap$$ = {}, $seriesCount$$19$$ = $DvtChartDataUtils$$.$getSeriesCount$($chart$$296$$);
    for($bReversed_seriesIndex$$103$$ = 0;$bReversed_seriesIndex$$103$$ < $seriesCount$$19$$;$bReversed_seriesIndex$$103$$++) {
      if($categoryKeys_legendItem$$1$$ = $DvtChartLegendRenderer$$.$_createLegendItem$($chart$$296$$, $bReversed_seriesIndex$$103$$)) {
        var $category$$11$$ = $DvtChartDataUtils$$.$getStackCategory$($chart$$296$$, $bReversed_seriesIndex$$103$$);
        $DvtChartDataUtils$$.$isAssignedToY2$($chart$$296$$, $bReversed_seriesIndex$$103$$) ? $i$$369_y2CategoryMap$$[$category$$11$$] ? $i$$369_y2CategoryMap$$[$category$$11$$].push($categoryKeys_legendItem$$1$$) : $i$$369_y2CategoryMap$$[$category$$11$$] = [$categoryKeys_legendItem$$1$$] : $seriesIndices$$1_yCategoryMap$$[$category$$11$$] ? $seriesIndices$$1_yCategoryMap$$[$category$$11$$].push($categoryKeys_legendItem$$1$$) : $seriesIndices$$1_yCategoryMap$$[$category$$11$$] = [$categoryKeys_legendItem$$1$$]
      }
    }
    $categoryKeys_legendItem$$1$$ = $DvtChartDataUtils$$.$getStackCategories$($chart$$296$$, $JSCompiler_alias_NULL$$, $JSCompiler_alias_TRUE$$);
    $bReversed_seriesIndex$$103$$ = $DvtChartTypeUtils$$.$isStacked$($chart$$296$$) && $DvtChartTypeUtils$$.$isVertical$($chart$$296$$) && $isVertical$$;
    $ret$$49$$ = $DvtChartLegendRenderer$$.$_getSeriesItemsForAxis$($seriesIndices$$1_yCategoryMap$$, $categoryKeys_legendItem$$1$$.y, $bReversed_seriesIndex$$103$$, $ret$$49$$);
    $ret$$49$$ = $DvtChartLegendRenderer$$.$_getSeriesItemsForAxis$($i$$369_y2CategoryMap$$, $categoryKeys_legendItem$$1$$.y2, $bReversed_seriesIndex$$103$$, $ret$$49$$)
  }
  return $ret$$49$$
};
$DvtChartLegendRenderer$$.$_getSeriesItemsForAxis$ = function $$DvtChartLegendRenderer$$$$_getSeriesItemsForAxis$$($categoryMap$$, $categoryKeys$$1$$, $bReversed$$1$$, $ret$$50$$) {
  for(var $legendItemArray$$, $categoryIndex$$1$$ = 0;$categoryIndex$$1$$ < $categoryKeys$$1$$.length;$categoryIndex$$1$$++) {
    ($legendItemArray$$ = $categoryMap$$[$categoryKeys$$1$$[$categoryIndex$$1$$]]) && ($ret$$50$$ = $bReversed$$1$$ ? $ret$$50$$.concat($legendItemArray$$.reverse()) : $ret$$50$$.concat($legendItemArray$$))
  }
  return $ret$$50$$
};
$DvtChartLegendRenderer$$.$_createLegendItem$ = function $$DvtChartLegendRenderer$$$$_createLegendItem$$($chart$$297$$, $seriesIndex$$104$$) {
  var $seriesItem$$28$$ = $DvtChartDataUtils$$.$getSeriesItem$($chart$$297$$, $seriesIndex$$104$$), $chartType$$ = $chart$$297$$.$getType$(), $seriesType$$10$$ = $DvtChartStyleUtils$$.$getSeriesType$($chart$$297$$, $seriesIndex$$104$$), $lineType$$4$$ = $DvtChartStyleUtils$$.$getLineType$($chart$$297$$, $seriesIndex$$104$$), $displayInLegend_legendItem$$2$$ = $seriesItem$$28$$.displayInLegend;
  if(!$seriesItem$$28$$ || "off" == $displayInLegend_legendItem$$2$$ || "on" != $displayInLegend_legendItem$$2$$ && ($DvtChartTypeUtils$$.$isFunnel$($chart$$297$$) || $DvtChartTypeUtils$$.$isStock$($chart$$297$$)) || "on" != $displayInLegend_legendItem$$2$$ && !$DvtChartDataUtils$$.$hasSeriesData$($chart$$297$$, $seriesIndex$$104$$)) {
    return $JSCompiler_alias_NULL$$
  }
  var $seriesLabel$$1$$ = $DvtChartDataUtils$$.$getSeriesLabel$($chart$$297$$, $seriesIndex$$104$$);
  if("on" != $displayInLegend_legendItem$$2$$ && (!$seriesLabel$$1$$ || 0 >= dvt.$StringUtils$.trim($seriesLabel$$1$$).length)) {
    return $JSCompiler_alias_NULL$$
  }
  $displayInLegend_legendItem$$2$$ = {id:$DvtChartDataUtils$$.$getSeries$($chart$$297$$, $seriesIndex$$104$$), text:$seriesLabel$$1$$, categories:$DvtChartDataUtils$$.$getSeriesCategories$($chart$$297$$, $seriesIndex$$104$$), categoryVisibility:$DvtChartStyleUtils$$.$isSeriesRendered$($chart$$297$$, $seriesIndex$$104$$) ? "visible" : "hidden"};
  "line" == $seriesType$$10$$ || "lineWithArea" == $seriesType$$10$$ || "scatter" == $chartType$$ || "bubble" == $chartType$$ ? ($displayInLegend_legendItem$$2$$.lineStyle = $DvtChartStyleUtils$$.$getLineStyle$($chart$$297$$, $seriesIndex$$104$$), $displayInLegend_legendItem$$2$$.lineWidth = $DvtChartStyleUtils$$.$getLineWidth$($chart$$297$$, $seriesIndex$$104$$), $DvtChartStyleUtils$$.$isMarkerDisplayed$($chart$$297$$, $seriesIndex$$104$$) ? ($displayInLegend_legendItem$$2$$.symbolType = "none" == 
  $lineType$$4$$ ? "marker" : "lineWithMarker", "lineWithMarker" == $displayInLegend_legendItem$$2$$.symbolType && ($displayInLegend_legendItem$$2$$.lineWidth = Math.min($DvtChartLegendRenderer$$.$_DEFAULT_LINE_WIDTH_WITH_MARKER$, $displayInLegend_legendItem$$2$$.lineWidth)), $displayInLegend_legendItem$$2$$.markerShape = $DvtChartStyleUtils$$.$getMarkerShape$($chart$$297$$, $seriesIndex$$104$$), $displayInLegend_legendItem$$2$$.markerColor = $DvtChartStyleUtils$$.$getMarkerColor$($chart$$297$$, 
  $seriesIndex$$104$$)) : $displayInLegend_legendItem$$2$$.symbolType = "line") : ($displayInLegend_legendItem$$2$$.symbolType = "marker", "none" == $DvtChartStyleUtils$$.$getLineType$($chart$$297$$, $seriesIndex$$104$$) && ($displayInLegend_legendItem$$2$$.markerShape = $DvtChartStyleUtils$$.$getMarkerShape$($chart$$297$$, $seriesIndex$$104$$)));
  $displayInLegend_legendItem$$2$$.color = $DvtChartStyleUtils$$.$getColor$($chart$$297$$, $seriesIndex$$104$$);
  $displayInLegend_legendItem$$2$$.borderColor = $DvtChartStyleUtils$$.$getBorderColor$($chart$$297$$, $seriesIndex$$104$$);
  $displayInLegend_legendItem$$2$$.pattern = $DvtChartStyleUtils$$.$getPattern$($chart$$297$$, $seriesIndex$$104$$);
  $displayInLegend_legendItem$$2$$.action = $seriesItem$$28$$.action;
  $displayInLegend_legendItem$$2$$._spb = $chart$$297$$.$getShowPopupBehaviors$($seriesItem$$28$$._id);
  $displayInLegend_legendItem$$2$$.drilling = $DvtChartEventUtils$$.$isSeriesDrillable$($chart$$297$$, $seriesIndex$$104$$) ? "on" : "off";
  $displayInLegend_legendItem$$2$$.shortDesc = $seriesItem$$28$$.shortDesc;
  return $displayInLegend_legendItem$$2$$
};
$DvtChartLegendRenderer$$.$_getRefObjItems$ = function $$DvtChartLegendRenderer$$$$_getRefObjItems$$($chart$$298$$) {
  var $refObjs$$3$$ = $DvtChartRefObjUtils$$.$getRefObjs$($chart$$298$$);
  if(0 >= $refObjs$$3$$.length) {
    return[]
  }
  for(var $items$$18$$ = [], $i$$370$$ = 0;$i$$370$$ < $refObjs$$3$$.length;$i$$370$$++) {
    var $refObj$$13$$ = $refObjs$$3$$[$i$$370$$];
    if($refObj$$13$$ && "on" == $refObj$$13$$.displayInLegend && $refObj$$13$$.text) {
      var $type$$131$$ = $DvtChartRefObjUtils$$.$getType$($refObj$$13$$);
      $items$$18$$.push({symbolType:"area" == $type$$131$$ ? "square" : "line", text:$refObj$$13$$.text, color:$DvtChartRefObjUtils$$.$getColor$($refObj$$13$$), lineStyle:$refObj$$13$$.lineStyle, lineWidth:$DvtChartRefObjUtils$$.$getLineWidth$($refObj$$13$$), categories:$DvtChartRefObjUtils$$.$getRefObjCategories$($refObj$$13$$), categoryVisibility:$DvtChartRefObjUtils$$.$isObjectRendered$($chart$$298$$, $refObj$$13$$) ? "visible" : "hidden", shortDesc:$refObj$$13$$.shortDesc})
    }
  }
  return $items$$18$$
};
var $DvtChartPlotAreaRenderer$$ = {};
dvt.$Obj$.$createSubclass$($DvtChartPlotAreaRenderer$$, dvt.$Obj$);
$DvtChartPlotAreaRenderer$$.$_MIN_TOUCH_MARKER_SIZE$ = 16;
$DvtChartPlotAreaRenderer$$.$_MARKER_DATA_LABEL_GAP$ = 4;
$DvtChartPlotAreaRenderer$$.$_MIN_CHARS_DATA_LABEL$ = 3;
$DvtChartPlotAreaRenderer$$.$_FILTER_THRESHOLD_SCATTER_BUBBLE$ = 1E4;
$DvtChartPlotAreaRenderer$$.$render$ = function $$DvtChartPlotAreaRenderer$$$$render$$($chart$$299$$, $container$$44$$, $availSpace$$53$$) {
  "off" == $chart$$299$$.$getOptions$().plotArea.rendered ? $DvtChartPlotAreaRenderer$$.$_renderAxisLines$($chart$$299$$, $container$$44$$, $availSpace$$53$$) : 0 < $availSpace$$53$$.$w$ && 0 < $availSpace$$53$$.$h$ && ($chart$$299$$.$_currentMarkers$ = [], $chart$$299$$.$_currentAreas$ = [], $DvtChartPlotAreaRenderer$$.$_renderBackgroundObjects$($chart$$299$$, $container$$44$$, $availSpace$$53$$), $DvtChartPlotAreaRenderer$$.$_renderTicks$($chart$$299$$, $container$$44$$, $availSpace$$53$$), $DvtChartPlotAreaRenderer$$.$_renderForegroundObjects$($chart$$299$$, 
  $container$$44$$, $availSpace$$53$$))
};
$DvtChartPlotAreaRenderer$$.$_renderBackgroundObjects$ = function $$DvtChartPlotAreaRenderer$$$$_renderBackgroundObjects$$($chart$$300$$, $container$$45$$, $availSpace$$54$$) {
  var $areaContainer$$2_clipGroup_options$$103$$ = $chart$$300$$.$getOptions$(), $background$$2$$ = $DvtChartPlotAreaRenderer$$.$_getBackgroundShape$($chart$$300$$, $availSpace$$54$$), $backgroundColor$$6$$ = $DvtChartStyleUtils$$.$getBackgroundColor$($chart$$300$$);
  $backgroundColor$$6$$ ? $background$$2$$.$setSolidFill$($backgroundColor$$6$$) : $background$$2$$.$setInvisibleFill$();
  $container$$45$$.$addChild$($background$$2$$);
  if($areaContainer$$2_clipGroup_options$$103$$.xAxis.referenceObjects || $areaContainer$$2_clipGroup_options$$103$$.yAxis.referenceObjects || $areaContainer$$2_clipGroup_options$$103$$.y2Axis.referenceObjects) {
    $areaContainer$$2_clipGroup_options$$103$$ = $DvtChartPlotAreaRenderer$$.$createClippedGroup$($chart$$300$$, $container$$45$$, $availSpace$$54$$), $DvtChartRefObjRenderer$$.$renderBackgroundObjects$($chart$$300$$, $areaContainer$$2_clipGroup_options$$103$$, $availSpace$$54$$)
  }
  $DvtChartTypeUtils$$.$isBLAC$($chart$$300$$) && ($areaContainer$$2_clipGroup_options$$103$$ = new dvt.$Container$($chart$$300$$.$getCtx$()), $container$$45$$.$addChild$($areaContainer$$2_clipGroup_options$$103$$), $chart$$300$$.$_areaContainer$ = $areaContainer$$2_clipGroup_options$$103$$, $DvtChartTypeUtils$$.$hasAreaSeries$($chart$$300$$) && $DvtChartPlotAreaRenderer$$.$_renderAreas$($chart$$300$$, $areaContainer$$2_clipGroup_options$$103$$, $availSpace$$54$$, $JSCompiler_alias_FALSE$$))
};
$DvtChartPlotAreaRenderer$$.$_getBackgroundShape$ = function $$DvtChartPlotAreaRenderer$$$$_getBackgroundShape$$($chart$$301$$, $availSpace$$55$$) {
  var $background$$3_context$$147$$;
  $background$$3_context$$147$$ = $chart$$301$$.$getCtx$();
  if($DvtChartTypeUtils$$.$isPolar$($chart$$301$$)) {
    var $cx$$12_points$$47$$ = $availSpace$$55$$.x + $availSpace$$55$$.$w$ / 2, $cy$$13$$ = $availSpace$$55$$.y + $availSpace$$55$$.$h$ / 2;
    $DvtChartAxisUtils$$.$isGridPolygonal$($chart$$301$$) ? ($cx$$12_points$$47$$ = dvt.$PolygonUtils$.$getRegularPolygonPoints$($cx$$12_points$$47$$, $cy$$13$$, $DvtChartDataUtils$$.$getGroupCount$($chart$$301$$), $chart$$301$$.$getRadius$()), $background$$3_context$$147$$ = new dvt.$Polygon$($background$$3_context$$147$$, $cx$$12_points$$47$$)) : $background$$3_context$$147$$ = new dvt.$Circle$($background$$3_context$$147$$, $cx$$12_points$$47$$, $cy$$13$$, $chart$$301$$.$getRadius$())
  }else {
    $background$$3_context$$147$$ = new dvt.$Rect$($background$$3_context$$147$$, $availSpace$$55$$.x, $availSpace$$55$$.y, $availSpace$$55$$.$w$, $availSpace$$55$$.$h$)
  }
  return $background$$3_context$$147$$
};
$DvtChartPlotAreaRenderer$$.$_renderTicks$ = function $$DvtChartPlotAreaRenderer$$$$_renderTicks$$($chart$$302$$, $container$$46$$, $availSpace$$56$$) {
  $chart$$302$$.$xAxis$ && $DvtChartAxisUtils$$.$isMinorTickRendered$($chart$$302$$, "x") && $DvtChartPlotAreaRenderer$$.$_renderMinorTicks$($chart$$302$$, $container$$46$$, $chart$$302$$.$xAxis$, $availSpace$$56$$);
  $chart$$302$$.$yAxis$ && $DvtChartAxisUtils$$.$isMinorTickRendered$($chart$$302$$, "y") && $DvtChartPlotAreaRenderer$$.$_renderMinorTicks$($chart$$302$$, $container$$46$$, $chart$$302$$.$yAxis$, $availSpace$$56$$);
  $chart$$302$$.$y2Axis$ && $DvtChartAxisUtils$$.$isMinorTickRendered$($chart$$302$$, "y2") && $DvtChartPlotAreaRenderer$$.$_renderMinorTicks$($chart$$302$$, $container$$46$$, $chart$$302$$.$y2Axis$, $availSpace$$56$$);
  $chart$$302$$.$xAxis$ && $DvtChartAxisUtils$$.$isMajorTickRendered$($chart$$302$$, "x") && $DvtChartPlotAreaRenderer$$.$_renderMajorTicks$($chart$$302$$, $container$$46$$, $chart$$302$$.$xAxis$, $availSpace$$56$$);
  $chart$$302$$.$yAxis$ && $DvtChartAxisUtils$$.$isMajorTickRendered$($chart$$302$$, "y") && $DvtChartPlotAreaRenderer$$.$_renderMajorTicks$($chart$$302$$, $container$$46$$, $chart$$302$$.$yAxis$, $availSpace$$56$$);
  $chart$$302$$.$y2Axis$ && $DvtChartAxisUtils$$.$isMajorTickRendered$($chart$$302$$, "y2") && $DvtChartPlotAreaRenderer$$.$_renderMajorTicks$($chart$$302$$, $container$$46$$, $chart$$302$$.$y2Axis$, $availSpace$$56$$)
};
$DvtChartPlotAreaRenderer$$.$_renderAxisLines$ = function $$DvtChartPlotAreaRenderer$$$$_renderAxisLines$$($chart$$303$$, $container$$47$$, $availSpace$$57$$) {
  $chart$$303$$.$xAxis$ && ($chart$$303$$.$yAxis$ && $DvtChartAxisUtils$$.$isAxisLineRendered$($chart$$303$$, "x")) && $DvtChartPlotAreaRenderer$$.$_renderAxisLine$($chart$$303$$, $container$$47$$, $chart$$303$$.$xAxis$, $chart$$303$$.$yAxis$, $availSpace$$57$$);
  $chart$$303$$.$xAxis$ && $chart$$303$$.$y2Axis$ && $DvtChartAxisUtils$$.$isAxisLineRendered$($chart$$303$$, "x") && (!$chart$$303$$.$yAxis$ || $DvtChartTypeUtils$$.$isSplitDualY$($chart$$303$$)) && $DvtChartPlotAreaRenderer$$.$_renderAxisLine$($chart$$303$$, $container$$47$$, $chart$$303$$.$xAxis$, $chart$$303$$.$y2Axis$, $availSpace$$57$$);
  $chart$$303$$.$yAxis$ && ($chart$$303$$.$xAxis$ && $DvtChartAxisUtils$$.$isAxisLineRendered$($chart$$303$$, "y")) && $DvtChartPlotAreaRenderer$$.$_renderAxisLine$($chart$$303$$, $container$$47$$, $chart$$303$$.$yAxis$, $chart$$303$$.$xAxis$, $availSpace$$57$$);
  $chart$$303$$.$y2Axis$ && ($chart$$303$$.$xAxis$ && $DvtChartAxisUtils$$.$isAxisLineRendered$($chart$$303$$, "y2")) && $DvtChartPlotAreaRenderer$$.$_renderAxisLine$($chart$$303$$, $container$$47$$, $chart$$303$$.$y2Axis$, $chart$$303$$.$xAxis$, $availSpace$$57$$)
};
$DvtChartPlotAreaRenderer$$.$_renderMajorTicks$ = function $$DvtChartPlotAreaRenderer$$$$_renderMajorTicks$$($chart$$304$$, $container$$48$$, $axis$$38$$, $availSpace$$58$$) {
  $DvtChartPlotAreaRenderer$$.$_renderGridlines$($chart$$304$$, $container$$48$$, $axis$$38$$.$getOptions$().majorTick, $axis$$38$$.$getPosition$(), $axis$$38$$.$getMajorTickCoords$(), $axis$$38$$.$getBaselineCoord$(), $availSpace$$58$$)
};
$DvtChartPlotAreaRenderer$$.$_renderMinorTicks$ = function $$DvtChartPlotAreaRenderer$$$$_renderMinorTicks$$($chart$$305$$, $container$$49$$, $axis$$39$$, $availSpace$$59$$) {
  $DvtChartPlotAreaRenderer$$.$_renderGridlines$($chart$$305$$, $container$$49$$, $axis$$39$$.$getOptions$().minorTick, $axis$$39$$.$getPosition$(), $axis$$39$$.$getMinorTickCoords$(), $JSCompiler_alias_NULL$$, $availSpace$$59$$)
};
$DvtChartPlotAreaRenderer$$.$_renderAxisLine$ = function $$DvtChartPlotAreaRenderer$$$$_renderAxisLine$$($chart$$306$$, $container$$50$$, $oAxis_options$$104$$, $dAxis$$, $availSpace$$60$$) {
  $oAxis_options$$104$$ = $oAxis_options$$104$$.$getOptions$();
  var $coord$$26_position$$27$$ = $oAxis_options$$104$$.position, $coord$$26_position$$27$$ = "bottom" == $coord$$26_position$$27$$ || "right" == $coord$$26_position$$27$$ || "tangential" == $coord$$26_position$$27$$ ? $JSCompiler_StaticMethods_axisToPlotArea$$($dAxis$$, Math.max($dAxis$$.$Info$.$getStartCoord$(), $dAxis$$.$Info$.$getEndCoord$())) : $JSCompiler_StaticMethods_axisToPlotArea$$($dAxis$$, Math.min($dAxis$$.$Info$.$getStartCoord$(), $dAxis$$.$Info$.$getEndCoord$()));
  $DvtChartPlotAreaRenderer$$.$_renderGridlines$($chart$$306$$, $container$$50$$, $oAxis_options$$104$$.axisLine, $dAxis$$.$getPosition$(), [$coord$$26_position$$27$$], $JSCompiler_alias_NULL$$, $availSpace$$60$$)
};
$DvtChartPlotAreaRenderer$$.$_renderGridlines$ = function $$DvtChartPlotAreaRenderer$$$$_renderGridlines$$($chart$$307$$, $container$$51$$, $i$$371_options$$105$$, $position$$28$$, $coords$$19$$, $baselineCoord$$6$$, $availSpace$$61$$) {
  var $baselineColor_lineColor$$1$$ = $i$$371_options$$105$$.lineColor, $lineStroke$$2$$ = new dvt.$SolidStroke$($baselineColor_lineColor$$1$$, 1, $i$$371_options$$105$$.lineWidth);
  $i$$371_options$$105$$.lineStyle && $lineStroke$$2$$.$setStyle$(dvt.$Stroke$.$convertTypeString$($i$$371_options$$105$$.lineStyle));
  var $baselineStroke$$ = $lineStroke$$2$$.$clone$();
  "inherit" != $i$$371_options$$105$$.baselineColor && ($baselineColor_lineColor$$1$$ = "auto" == $i$$371_options$$105$$.baselineColor ? dvt.$ColorUtils$.$getDarker$($baselineColor_lineColor$$1$$, 0.4) : $i$$371_options$$105$$.baselineColor, $baselineStroke$$.$setColor$($baselineColor_lineColor$$1$$));
  $baselineStroke$$.$setWidth$($i$$371_options$$105$$.baselineWidth != $JSCompiler_alias_NULL$$ ? $i$$371_options$$105$$.baselineWidth : $i$$371_options$$105$$.lineWidth);
  $baselineStroke$$.$setStyle$(dvt.$Stroke$.$convertTypeString$($i$$371_options$$105$$.baselineStyle ? $i$$371_options$$105$$.baselineStyle : $i$$371_options$$105$$.lineStyle));
  for($i$$371_options$$105$$ = 0;$i$$371_options$$105$$ < $coords$$19$$.length;$i$$371_options$$105$$++) {
    $DvtChartPlotAreaRenderer$$.$_renderGridline$($chart$$307$$, $container$$51$$, $position$$28$$, $coords$$19$$[$i$$371_options$$105$$], $baselineCoord$$6$$ != $JSCompiler_alias_NULL$$ && $coords$$19$$[$i$$371_options$$105$$] == $baselineCoord$$6$$ ? $baselineStroke$$ : $lineStroke$$2$$, $availSpace$$61$$)
  }
};
$DvtChartPlotAreaRenderer$$.$_renderGridline$ = function $$DvtChartPlotAreaRenderer$$$$_renderGridline$$($chart$$308$$, $container$$52$$, $position$$29$$, $coord$$27_points$$48$$, $stroke$$46$$, $availSpace$$62$$) {
  var $context$$148_line$$9$$;
  $context$$148_line$$9$$ = $container$$52$$.$getCtx$();
  var $usePixelHinting$$ = !dvt.$Agent$.$isTouchDevice$() || 1 < dvt.$Agent$.$getDevicePixelRatio$();
  "radial" == $position$$29$$ ? ($DvtChartAxisUtils$$.$isGridPolygonal$($chart$$308$$) ? ($coord$$27_points$$48$$ = dvt.$PolygonUtils$.$getRegularPolygonPoints$(0, 0, $DvtChartDataUtils$$.$getGroupCount$($chart$$308$$), $coord$$27_points$$48$$), $context$$148_line$$9$$ = new dvt.$Polygon$($context$$148_line$$9$$, $coord$$27_points$$48$$)) : $context$$148_line$$9$$ = new dvt.$Circle$($context$$148_line$$9$$, 0, 0, $coord$$27_points$$48$$), $context$$148_line$$9$$.$setInvisibleFill$(), $context$$148_line$$9$$.$setTranslate$($availSpace$$62$$.x + 
  $availSpace$$62$$.$w$ / 2, $availSpace$$62$$.y + $availSpace$$62$$.$h$ / 2)) : "tangential" == $position$$29$$ ? ($context$$148_line$$9$$ = new dvt.$Line$($context$$148_line$$9$$, 0, 0, $chart$$308$$.$getRadius$() * Math.sin($coord$$27_points$$48$$), -$chart$$308$$.$getRadius$() * Math.cos($coord$$27_points$$48$$)), 0.01 > $coord$$27_points$$48$$ % Math.PI / 2 && $usePixelHinting$$ && $context$$148_line$$9$$.$setPixelHinting$(), $context$$148_line$$9$$.$setTranslate$($availSpace$$62$$.x + $availSpace$$62$$.$w$ / 
  2, $availSpace$$62$$.y + $availSpace$$62$$.$h$ / 2)) : ($context$$148_line$$9$$ = "top" == $position$$29$$ || "bottom" == $position$$29$$ ? new dvt.$Line$($context$$148_line$$9$$, $coord$$27_points$$48$$, $availSpace$$62$$.y, $coord$$27_points$$48$$, $availSpace$$62$$.y + $availSpace$$62$$.$h$) : new dvt.$Line$($context$$148_line$$9$$, $availSpace$$62$$.x, $coord$$27_points$$48$$, $availSpace$$62$$.x + $availSpace$$62$$.$w$, $coord$$27_points$$48$$), $usePixelHinting$$ && $context$$148_line$$9$$.$setPixelHinting$());
  $context$$148_line$$9$$.$setStroke$($stroke$$46$$);
  $context$$148_line$$9$$.$setMouseEnabled$($JSCompiler_alias_FALSE$$);
  $container$$52$$.$addChild$($context$$148_line$$9$$)
};
$DvtChartPlotAreaRenderer$$.$_renderForegroundObjects$ = function $$DvtChartPlotAreaRenderer$$$$_renderForegroundObjects$$($chart$$309$$, $container$$53_selected$$22$$, $availSpace$$63$$) {
  var $options$$106$$ = $chart$$309$$.$getOptions$(), $bBLAC$$ = $DvtChartTypeUtils$$.$isBLAC$($chart$$309$$), $bBarSeries$$ = $DvtChartTypeUtils$$.$hasBarSeries$($chart$$309$$), $bLineSeries$$ = $DvtChartTypeUtils$$.$hasLineSeries$($chart$$309$$), $bStockSeries$$ = $DvtChartTypeUtils$$.$hasCandlestickSeries$($chart$$309$$), $bLineWithAreaSeries$$ = $DvtChartTypeUtils$$.$hasLineWithAreaSeries$($chart$$309$$), $clipGroup$$1$$ = $DvtChartPlotAreaRenderer$$.$createClippedGroup$($chart$$309$$, $container$$53_selected$$22$$, 
  $availSpace$$63$$);
  $DvtChartPlotAreaRenderer$$.$_renderAxisLines$($chart$$309$$, $container$$53_selected$$22$$, $availSpace$$63$$);
  var $plotAreaBorderColor$$ = $options$$106$$.plotArea.borderColor, $plotAreaBorderWidth$$ = $options$$106$$.plotArea.borderWidth;
  if($plotAreaBorderColor$$ && 0 != $plotAreaBorderWidth$$) {
    var $plotAreaBorder$$ = $DvtChartPlotAreaRenderer$$.$_getBackgroundShape$($chart$$309$$, $availSpace$$63$$);
    $plotAreaBorder$$.$setInvisibleFill$();
    $plotAreaBorder$$.$setSolidStroke$($plotAreaBorderColor$$, $JSCompiler_alias_NULL$$, $plotAreaBorderWidth$$);
    $plotAreaBorder$$.$setMouseEnabled$($JSCompiler_alias_FALSE$$);
    $container$$53_selected$$22$$.$addChild$($plotAreaBorder$$)
  }
  $bBLAC$$ ? ($bLineWithAreaSeries$$ && $DvtChartPlotAreaRenderer$$.$_renderAreas$($chart$$309$$, $container$$53_selected$$22$$, $availSpace$$63$$, $JSCompiler_alias_TRUE$$), $bBarSeries$$ && $DvtChartPlotAreaRenderer$$.$_renderBars$($chart$$309$$, $clipGroup$$1$$, $availSpace$$63$$), $bLineSeries$$ && $DvtChartPlotAreaRenderer$$.$_renderLines$($chart$$309$$, $container$$53_selected$$22$$, $clipGroup$$1$$, $availSpace$$63$$), $bStockSeries$$ && $DvtChartPlotAreaRenderer$$.$_renderStock$($chart$$309$$, 
  $clipGroup$$1$$)) : $DvtChartTypeUtils$$.$isScatterBubble$($chart$$309$$) && $DvtChartPlotAreaRenderer$$.$_renderScatterBubble$($chart$$309$$, $container$$53_selected$$22$$, $clipGroup$$1$$, $availSpace$$63$$);
  if($options$$106$$.xAxis.referenceObjects || $options$$106$$.yAxis.referenceObjects || $options$$106$$.y2Axis.referenceObjects) {
    $clipGroup$$1$$ = $DvtChartPlotAreaRenderer$$.$createClippedGroup$($chart$$309$$, $container$$53_selected$$22$$, $availSpace$$63$$), $DvtChartRefObjRenderer$$.$renderForegroundObjects$($chart$$309$$, $clipGroup$$1$$, $availSpace$$63$$)
  }
  $container$$53_selected$$22$$ = $DvtChartDataUtils$$.$getInitialSelection$($chart$$309$$);
  $DvtChartEventUtils$$.$setInitialSelection$($chart$$309$$, $container$$53_selected$$22$$);
  $chart$$309$$.$highlight$($DvtChartStyleUtils$$.$getHighlightedCategories$($chart$$309$$))
};
$DvtChartPlotAreaRenderer$$.$_renderDataLabel$ = function $$DvtChartPlotAreaRenderer$$$$_renderDataLabel$$($chart$$310$$, $container$$54$$, $bbox$$7_cmd$$7_dataItemBounds_padding$$15$$, $seriesIndex$$105$$, $groupIndex$$68$$, $dataColor$$7_style$$66_textDim$$6$$, $type$$132$$, $isStackLabel$$3$$) {
  if(!$DvtChartTypeUtils$$.$isOverview$($chart$$310$$)) {
    var $label$$45_labelString$$1$$ = $DvtChartDataUtils$$.$getDataLabel$($chart$$310$$, $seriesIndex$$105$$, $groupIndex$$68$$, $type$$132$$, $isStackLabel$$3$$);
    if($label$$45_labelString$$1$$ != $JSCompiler_alias_NULL$$) {
      var $position$$30_size$$18$$ = $DvtChartStyleUtils$$.$getDataLabelPosition$($chart$$310$$, $seriesIndex$$105$$, $groupIndex$$68$$, $type$$132$$, $isStackLabel$$3$$);
      if("none" != $position$$30_size$$18$$) {
        $label$$45_labelString$$1$$ = new dvt.$OutputText$($chart$$310$$.$getCtx$(), $label$$45_labelString$$1$$, 0, 0);
        $label$$45_labelString$$1$$.$setMouseEnabled$($JSCompiler_alias_FALSE$$);
        $dataColor$$7_style$$66_textDim$$6$$ = $isStackLabel$$3$$ ? $chart$$310$$.$getOptions$().styleDefaults.stackLabelStyle : $DvtChartStyleUtils$$.$getDataLabelStyle$($chart$$310$$, $seriesIndex$$105$$, $groupIndex$$68$$, $dataColor$$7_style$$66_textDim$$6$$, $position$$30_size$$18$$, $type$$132$$);
        $label$$45_labelString$$1$$.$setCSSStyle$($dataColor$$7_style$$66_textDim$$6$$);
        $label$$45_labelString$$1$$.$setY$($bbox$$7_cmd$$7_dataItemBounds_padding$$15$$.y + $bbox$$7_cmd$$7_dataItemBounds_padding$$15$$.$h$ / 2);
        $label$$45_labelString$$1$$.$setX$($bbox$$7_cmd$$7_dataItemBounds_padding$$15$$.x + $bbox$$7_cmd$$7_dataItemBounds_padding$$15$$.$w$ / 2);
        $label$$45_labelString$$1$$.$alignCenter$();
        $label$$45_labelString$$1$$.$alignMiddle$();
        $dataColor$$7_style$$66_textDim$$6$$ = $label$$45_labelString$$1$$.$measureDimensions$();
        if("left" == $position$$30_size$$18$$) {
          $label$$45_labelString$$1$$.$setX$($bbox$$7_cmd$$7_dataItemBounds_padding$$15$$.x - $dataColor$$7_style$$66_textDim$$6$$.$w$ / 2 - $DvtChartPlotAreaRenderer$$.$_MARKER_DATA_LABEL_GAP$)
        }else {
          if("right" == $position$$30_size$$18$$) {
            $label$$45_labelString$$1$$.$setX$($bbox$$7_cmd$$7_dataItemBounds_padding$$15$$.x + $bbox$$7_cmd$$7_dataItemBounds_padding$$15$$.$w$ + $dataColor$$7_style$$66_textDim$$6$$.$w$ / 2 + $DvtChartPlotAreaRenderer$$.$_MARKER_DATA_LABEL_GAP$)
          }else {
            if("top" == $position$$30_size$$18$$) {
              $label$$45_labelString$$1$$.$setY$($bbox$$7_cmd$$7_dataItemBounds_padding$$15$$.y - $dataColor$$7_style$$66_textDim$$6$$.$h$ / 2)
            }else {
              if("bottom" == $position$$30_size$$18$$) {
                $label$$45_labelString$$1$$.$setY$($bbox$$7_cmd$$7_dataItemBounds_padding$$15$$.y + $bbox$$7_cmd$$7_dataItemBounds_padding$$15$$.$h$ + $dataColor$$7_style$$66_textDim$$6$$.$h$ / 2 + $DvtChartPlotAreaRenderer$$.$_MARKER_DATA_LABEL_GAP$ / 2)
              }else {
                if("bar" == $DvtChartStyleUtils$$.$getSeriesType$($chart$$310$$, $seriesIndex$$105$$)) {
                  if($dataColor$$7_style$$66_textDim$$6$$.$w$ > $bbox$$7_cmd$$7_dataItemBounds_padding$$15$$.$w$ || $dataColor$$7_style$$66_textDim$$6$$.$h$ > $bbox$$7_cmd$$7_dataItemBounds_padding$$15$$.$h$) {
                    return
                  }
                  "inLeft" == $position$$30_size$$18$$ ? $label$$45_labelString$$1$$.$setX$($bbox$$7_cmd$$7_dataItemBounds_padding$$15$$.x + $dataColor$$7_style$$66_textDim$$6$$.$w$ / 2 + $DvtChartPlotAreaRenderer$$.$_MARKER_DATA_LABEL_GAP$) : "inRight" == $position$$30_size$$18$$ ? $label$$45_labelString$$1$$.$setX$($bbox$$7_cmd$$7_dataItemBounds_padding$$15$$.x + $bbox$$7_cmd$$7_dataItemBounds_padding$$15$$.$w$ - $dataColor$$7_style$$66_textDim$$6$$.$w$ / 2 - $DvtChartPlotAreaRenderer$$.$_MARKER_DATA_LABEL_GAP$) : 
                  "inTop" == $position$$30_size$$18$$ ? $label$$45_labelString$$1$$.$setY$($bbox$$7_cmd$$7_dataItemBounds_padding$$15$$.y + $dataColor$$7_style$$66_textDim$$6$$.$h$ / 2 + $DvtChartPlotAreaRenderer$$.$_MARKER_DATA_LABEL_GAP$) : "inBottom" == $position$$30_size$$18$$ && $label$$45_labelString$$1$$.$setY$($bbox$$7_cmd$$7_dataItemBounds_padding$$15$$.y + $bbox$$7_cmd$$7_dataItemBounds_padding$$15$$.$h$ - $dataColor$$7_style$$66_textDim$$6$$.$h$ / 2 - $DvtChartPlotAreaRenderer$$.$_MARKER_DATA_LABEL_GAP$ / 
                  2)
                }else {
                  if($DvtChartTypeUtils$$.$isBubble$($chart$$310$$) && ($bbox$$7_cmd$$7_dataItemBounds_padding$$15$$.x += $DvtChartPlotAreaRenderer$$.$_MARKER_DATA_LABEL_GAP$, $bbox$$7_cmd$$7_dataItemBounds_padding$$15$$.y += $DvtChartPlotAreaRenderer$$.$_MARKER_DATA_LABEL_GAP$, $bbox$$7_cmd$$7_dataItemBounds_padding$$15$$.$h$ -= 2 * $DvtChartPlotAreaRenderer$$.$_MARKER_DATA_LABEL_GAP$, $bbox$$7_cmd$$7_dataItemBounds_padding$$15$$.$w$ -= 2 * $DvtChartPlotAreaRenderer$$.$_MARKER_DATA_LABEL_GAP$, $position$$30_size$$18$$ = 
                  $label$$45_labelString$$1$$.$getOptimalFontSize$($bbox$$7_cmd$$7_dataItemBounds_padding$$15$$), $label$$45_labelString$$1$$.$setFontSize$($position$$30_size$$18$$), !dvt.$TextUtils$.$fitText$($label$$45_labelString$$1$$, $bbox$$7_cmd$$7_dataItemBounds_padding$$15$$.$w$, $bbox$$7_cmd$$7_dataItemBounds_padding$$15$$.$h$, $container$$54$$, $DvtChartPlotAreaRenderer$$.$_MIN_CHARS_DATA_LABEL$))) {
                    return
                  }
                }
                $DvtChartStyleUtils$$.$getPattern$($chart$$310$$, $seriesIndex$$105$$, $groupIndex$$68$$) != $JSCompiler_alias_NULL$$ && ($dataColor$$7_style$$66_textDim$$6$$ = $label$$45_labelString$$1$$.$getDimensions$(), $bbox$$7_cmd$$7_dataItemBounds_padding$$15$$ = 0.15 * $dataColor$$7_style$$66_textDim$$6$$.$h$, $bbox$$7_cmd$$7_dataItemBounds_padding$$15$$ = dvt.$PathUtils$.$roundedRectangle$($dataColor$$7_style$$66_textDim$$6$$.x - $bbox$$7_cmd$$7_dataItemBounds_padding$$15$$, $dataColor$$7_style$$66_textDim$$6$$.y, 
                $dataColor$$7_style$$66_textDim$$6$$.$w$ + 2 * $bbox$$7_cmd$$7_dataItemBounds_padding$$15$$, $dataColor$$7_style$$66_textDim$$6$$.$h$, 2, 2, 2, 2), $bbox$$7_cmd$$7_dataItemBounds_padding$$15$$ = new dvt.$Path$($chart$$310$$.$getCtx$(), $bbox$$7_cmd$$7_dataItemBounds_padding$$15$$), $bbox$$7_cmd$$7_dataItemBounds_padding$$15$$.$setSolidFill$("#FFFFFF", 0.9), $container$$54$$.$addChild$($bbox$$7_cmd$$7_dataItemBounds_padding$$15$$))
              }
            }
          }
        }
        $DvtChartStyleUtils$$.$optimizeMarkerStroke$($chart$$310$$) && $label$$45_labelString$$1$$.$setSolidStroke$("none");
        $container$$54$$.$addChild$($label$$45_labelString$$1$$);
        $JSCompiler_StaticMethods_getDataLabels$$($chart$$310$$).push($label$$45_labelString$$1$$)
      }
    }
  }
};
$DvtChartPlotAreaRenderer$$.$_renderDataLabelForMarker$ = function $$DvtChartPlotAreaRenderer$$$$_renderDataLabelForMarker$$($chart$$311$$, $container$$55$$, $marker$$3$$) {
  var $groupIndex$$69_logicalObject$$4$$ = $chart$$311$$.$getEventManager$().$getLogicalObject$($marker$$3$$), $seriesIndex$$106$$ = $groupIndex$$69_logicalObject$$4$$.$getSeriesIndex$(), $groupIndex$$69_logicalObject$$4$$ = $groupIndex$$69_logicalObject$$4$$.$getGroupIndex$();
  if($marker$$3$$ instanceof dvt.$SimpleMarker$) {
    var $markerBounds$$ = new dvt.$Rectangle$($marker$$3$$.$getCx$() - $marker$$3$$.getWidth() / 2, $marker$$3$$.$getCy$() - $marker$$3$$.getHeight() / 2, $marker$$3$$.getWidth(), $marker$$3$$.getHeight());
    $DvtChartPlotAreaRenderer$$.$_renderDataLabel$($chart$$311$$, $container$$55$$, $markerBounds$$, $seriesIndex$$106$$, $groupIndex$$69_logicalObject$$4$$, $marker$$3$$.$_dataColor$)
  }else {
    $marker$$3$$ instanceof $DvtChartRangeMarker$$ && ($DvtChartPlotAreaRenderer$$.$_renderDataLabel$($chart$$311$$, $container$$55$$, $JSCompiler_StaticMethods_getBoundingBox1$$($marker$$3$$), $seriesIndex$$106$$, $groupIndex$$69_logicalObject$$4$$, $marker$$3$$.$_dataColor$, "low"), $DvtChartPlotAreaRenderer$$.$_renderDataLabel$($chart$$311$$, $container$$55$$, $JSCompiler_StaticMethods_getBoundingBox2$$($marker$$3$$), $seriesIndex$$106$$, $groupIndex$$69_logicalObject$$4$$, $marker$$3$$.$_dataColor$, 
    "high"))
  }
};
$DvtChartPlotAreaRenderer$$.$_renderScatterBubble$ = function $$DvtChartPlotAreaRenderer$$$$_renderScatterBubble$$($chart$$312$$, $container$$56$$, $clipGroup$$2$$, $availSpace$$64$$) {
  $DvtChartPlotAreaRenderer$$.$_filterScatterBubble$($chart$$312$$, $availSpace$$64$$);
  for(var $borderColor$$13_defaultStroke$$ = $DvtChartStyleUtils$$.$getMarkerBorderColor$($chart$$312$$), $borderWidth$$2_markers$$2$$ = $DvtChartStyleUtils$$.$getBorderWidth$($chart$$312$$), $borderColor$$13_defaultStroke$$ = new dvt.$SolidStroke$($borderColor$$13_defaultStroke$$, $JSCompiler_alias_NULL$$, $borderWidth$$2_markers$$2$$), $borderWidth$$2_markers$$2$$ = [], $seriesCount$$20$$ = $DvtChartDataUtils$$.$getSeriesCount$($chart$$312$$), $seriesIndex$$107$$ = 0;$seriesIndex$$107$$ < $seriesCount$$20$$;$seriesIndex$$107$$++) {
    "none" != $DvtChartStyleUtils$$.$getLineType$($chart$$312$$, $seriesIndex$$107$$) && $DvtChartPlotAreaRenderer$$.$_renderLinesForSeries$($chart$$312$$, $clipGroup$$2$$, $seriesIndex$$107$$, $availSpace$$64$$);
    var $seriesMarkers$$ = $DvtChartPlotAreaRenderer$$.$_getMarkersForSeries$($chart$$312$$, $seriesIndex$$107$$, $availSpace$$64$$, $borderColor$$13_defaultStroke$$), $borderWidth$$2_markers$$2$$ = $borderWidth$$2_markers$$2$$.concat($seriesMarkers$$)
  }
  $DvtChartMarkerUtils$$.$sortMarkers$($borderWidth$$2_markers$$2$$);
  $DvtChartTypeUtils$$.$isBubble$($chart$$312$$) ? $DvtChartPlotAreaRenderer$$.$_addMarkersToContainer$($chart$$312$$, $clipGroup$$2$$, $borderWidth$$2_markers$$2$$, $borderColor$$13_defaultStroke$$) : $DvtChartPlotAreaRenderer$$.$_addMarkersToContainer$($chart$$312$$, $container$$56$$, $borderWidth$$2_markers$$2$$, $borderColor$$13_defaultStroke$$)
};
$DvtChartPlotAreaRenderer$$.$_renderMarkersForSeries$ = function $$DvtChartPlotAreaRenderer$$$$_renderMarkersForSeries$$($chart$$313$$, $container$$57$$, $markers$$3_seriesIndex$$108$$, $availSpace$$65$$) {
  var $borderColor$$14_defaultStroke$$1$$ = $DvtChartStyleUtils$$.$getMarkerBorderColor$($chart$$313$$, $markers$$3_seriesIndex$$108$$), $borderWidth$$3$$ = $DvtChartStyleUtils$$.$getBorderWidth$($chart$$313$$, $markers$$3_seriesIndex$$108$$), $borderColor$$14_defaultStroke$$1$$ = new dvt.$SolidStroke$($borderColor$$14_defaultStroke$$1$$, $JSCompiler_alias_NULL$$, $borderWidth$$3$$);
  $markers$$3_seriesIndex$$108$$ = $DvtChartStyleUtils$$.$isRangeSeries$($chart$$313$$, $markers$$3_seriesIndex$$108$$) ? $DvtChartPlotAreaRenderer$$.$_getRangeMarkersForSeries$($chart$$313$$, $markers$$3_seriesIndex$$108$$, $availSpace$$65$$) : $DvtChartPlotAreaRenderer$$.$_getMarkersForSeries$($chart$$313$$, $markers$$3_seriesIndex$$108$$, $availSpace$$65$$, $borderColor$$14_defaultStroke$$1$$);
  $DvtChartPlotAreaRenderer$$.$_addMarkersToContainer$($chart$$313$$, $container$$57$$, $markers$$3_seriesIndex$$108$$, $borderColor$$14_defaultStroke$$1$$)
};
$DvtChartPlotAreaRenderer$$.$_addMarkersToContainer$ = function $$DvtChartPlotAreaRenderer$$$$_addMarkersToContainer$$($chart$$314$$, $container$$58_i$$372$$, $markers$$4$$, $defaultStroke$$2$$) {
  var $markerContainer$$ = $container$$58_i$$372$$;
  $DvtChartStyleUtils$$.$optimizeMarkerStroke$($chart$$314$$) && ($markerContainer$$ = new dvt.$Container$($chart$$314$$.$getCtx$()), $markerContainer$$.$setStroke$($defaultStroke$$2$$), $container$$58_i$$372$$.$addChild$($markerContainer$$));
  for($container$$58_i$$372$$ = 0;$container$$58_i$$372$$ < $markers$$4$$.length;$container$$58_i$$372$$++) {
    $markerContainer$$.$addChild$($markers$$4$$[$container$$58_i$$372$$]), $DvtChartPlotAreaRenderer$$.$_renderDataLabelForMarker$($chart$$314$$, $markerContainer$$, $markers$$4$$[$container$$58_i$$372$$])
  }
  $chart$$314$$.$_currentMarkers$.push($markers$$4$$)
};
$DvtChartPlotAreaRenderer$$.$_getMarkerInfo$ = function $$DvtChartPlotAreaRenderer$$$$_getMarkerInfo$$($chart$$315_markerSize$$6$$, $seriesIndex$$109$$, $groupIndex$$70$$, $availSpace$$66_pos$$40$$) {
  var $options$$107_shape$$38$$ = $chart$$315_markerSize$$6$$.$getOptions$(), $bMarkerDisplayed_dataValue$$ = $DvtChartDataUtils$$.getValue($chart$$315_markerSize$$6$$, $seriesIndex$$109$$, $groupIndex$$70$$);
  if($bMarkerDisplayed_dataValue$$ == $JSCompiler_alias_NULL$$ || isNaN($bMarkerDisplayed_dataValue$$) || $DvtChartPlotAreaRenderer$$.$_isDataItemFiltered$($chart$$315_markerSize$$6$$, $seriesIndex$$109$$, $groupIndex$$70$$)) {
    return $JSCompiler_alias_NULL$$
  }
  var $nextIndex$$1_nextValue$$2_numGroups$$5$$ = $DvtChartDataUtils$$.$getGroupCount$($chart$$315_markerSize$$6$$), $bMarkerDisplayed_dataValue$$ = $DvtChartStyleUtils$$.$isMarkerDisplayed$($chart$$315_markerSize$$6$$, $seriesIndex$$109$$, $groupIndex$$70$$);
  if(!$bMarkerDisplayed_dataValue$$) {
    if("jet" != $options$$107_shape$$38$$._environment && $DvtChartAxisUtils$$.$isMixedFrequency$($chart$$315_markerSize$$6$$)) {
      2 > $nextIndex$$1_nextValue$$2_numGroups$$5$$ && ($bMarkerDisplayed_dataValue$$ = $JSCompiler_alias_TRUE$$)
    }else {
      var $lastIndex$$1_prevValue$$ = $nextIndex$$1_nextValue$$2_numGroups$$5$$ - 1, $isPolar$$5$$ = $DvtChartTypeUtils$$.$isPolar$($chart$$315_markerSize$$6$$), $nextIndex$$1_nextValue$$2_numGroups$$5$$ = $isPolar$$5$$ && 0 < $lastIndex$$1_prevValue$$ && $groupIndex$$70$$ == $lastIndex$$1_prevValue$$ ? 0 : $groupIndex$$70$$ + 1, $lastIndex$$1_prevValue$$ = $DvtChartDataUtils$$.getValue($chart$$315_markerSize$$6$$, $seriesIndex$$109$$, $isPolar$$5$$ && 0 < $lastIndex$$1_prevValue$$ && 0 == $groupIndex$$70$$ ? 
      $lastIndex$$1_prevValue$$ : $groupIndex$$70$$ - 1), $nextIndex$$1_nextValue$$2_numGroups$$5$$ = $DvtChartDataUtils$$.getValue($chart$$315_markerSize$$6$$, $seriesIndex$$109$$, $nextIndex$$1_nextValue$$2_numGroups$$5$$);
      if(($lastIndex$$1_prevValue$$ == $JSCompiler_alias_NULL$$ || isNaN($lastIndex$$1_prevValue$$)) && ($nextIndex$$1_nextValue$$2_numGroups$$5$$ == $JSCompiler_alias_NULL$$ || isNaN($nextIndex$$1_nextValue$$2_numGroups$$5$$))) {
        $bMarkerDisplayed_dataValue$$ = $JSCompiler_alias_TRUE$$
      }
    }
  }
  if(!$bMarkerDisplayed_dataValue$$ && ($DvtChartTypeUtils$$.$isSpark$($chart$$315_markerSize$$6$$) || ($options$$107_shape$$38$$._duringAnimation || $DvtChartTypeUtils$$.$isOverview$($chart$$315_markerSize$$6$$)) && !$DvtChartDataUtils$$.$isDataSelected$($chart$$315_markerSize$$6$$, $seriesIndex$$109$$, $groupIndex$$70$$)) || !$DvtChartDataUtils$$.$isMarkerInViewport$($chart$$315_markerSize$$6$$, $seriesIndex$$109$$, $groupIndex$$70$$, $availSpace$$66_pos$$40$$)) {
    return $JSCompiler_alias_NULL$$
  }
  $availSpace$$66_pos$$40$$ = $DvtChartDataUtils$$.$getMarkerPosition$($chart$$315_markerSize$$6$$, $seriesIndex$$109$$, $groupIndex$$70$$, $availSpace$$66_pos$$40$$);
  if(!$availSpace$$66_pos$$40$$) {
    return $JSCompiler_alias_NULL$$
  }
  $options$$107_shape$$38$$ = $DvtChartStyleUtils$$.$getMarkerShape$($chart$$315_markerSize$$6$$, $seriesIndex$$109$$, $groupIndex$$70$$);
  $chart$$315_markerSize$$6$$ = $DvtChartStyleUtils$$.$getMarkerSize$($chart$$315_markerSize$$6$$, $seriesIndex$$109$$, $groupIndex$$70$$);
  return{$seriesIndex$:$seriesIndex$$109$$, $groupIndex$:$groupIndex$$70$$, x:$availSpace$$66_pos$$40$$.x, y:$availSpace$$66_pos$$40$$.y, shape:$options$$107_shape$$38$$, size:$chart$$315_markerSize$$6$$, $markerDisplayed$:$bMarkerDisplayed_dataValue$$}
};
$DvtChartPlotAreaRenderer$$.$_getMarkersForSeries$ = function $$DvtChartPlotAreaRenderer$$$$_getMarkersForSeries$$($chart$$316$$, $seriesIndex$$110$$, $availSpace$$67$$, $defaultBorderWidth_defaultStroke$$3$$) {
  if(!$DvtChartStyleUtils$$.$isSeriesRendered$($chart$$316$$, $seriesIndex$$110$$)) {
    return[]
  }
  var $isTouchDevice$$ = dvt.$Agent$.$isTouchDevice$(), $context$$149$$ = $chart$$316$$.$getCtx$(), $bOptimizeStroke$$1$$ = $DvtChartStyleUtils$$.$optimizeMarkerStroke$($chart$$316$$), $defaultBorderColor$$ = $bOptimizeStroke$$1$$ ? $defaultBorderWidth_defaultStroke$$3$$.$getColor$() : $JSCompiler_alias_NULL$$;
  $defaultBorderWidth_defaultStroke$$3$$ = $bOptimizeStroke$$1$$ ? $defaultBorderWidth_defaultStroke$$3$$.getWidth() : $JSCompiler_alias_NULL$$;
  for(var $markers$$5$$ = [], $numGroups$$6$$ = $DvtChartDataUtils$$.$getGroupCount$($chart$$316$$), $groupIndex$$71$$ = 0;$groupIndex$$71$$ < $numGroups$$6$$;$groupIndex$$71$$++) {
    var $markerInfo$$ = $DvtChartPlotAreaRenderer$$.$_getMarkerInfo$($chart$$316$$, $seriesIndex$$110$$, $groupIndex$$71$$, $availSpace$$67$$);
    if($markerInfo$$) {
      var $marker$$4$$ = $JSCompiler_alias_NULL$$, $dataColor$$8_hoverColor$$2$$ = $DvtChartStyleUtils$$.$getMarkerColor$($chart$$316$$, $seriesIndex$$110$$, $groupIndex$$71$$);
      if($markerInfo$$.$markerDisplayed$) {
        $marker$$4$$ = new dvt.$SimpleMarker$($context$$149$$, $markerInfo$$.shape, $chart$$316$$.$getSkin$(), $markerInfo$$.x, $markerInfo$$.y, $markerInfo$$.size, $markerInfo$$.size);
        $DvtChartStyleUtils$$.$isSelectable$($chart$$316$$, $seriesIndex$$110$$, $groupIndex$$71$$) && $marker$$4$$.setCursor("pointer");
        $marker$$4$$.$setFill$($DvtChartSeriesEffectUtils$$.$getMarkerFill$($chart$$316$$, $seriesIndex$$110$$, $groupIndex$$71$$));
        var $borderColor$$15_innerColor$$6$$ = $DvtChartStyleUtils$$.$getMarkerBorderColor$($chart$$316$$, $seriesIndex$$110$$, $groupIndex$$71$$), $borderWidth$$4_outerColor$$7$$ = $DvtChartStyleUtils$$.$getBorderWidth$($chart$$316$$, $seriesIndex$$110$$, $groupIndex$$71$$);
        ($borderColor$$15_innerColor$$6$$ != $defaultBorderColor$$ || $borderWidth$$4_outerColor$$7$$ != $defaultBorderWidth_defaultStroke$$3$$) && $marker$$4$$.$setSolidStroke$($borderColor$$15_innerColor$$6$$, $JSCompiler_alias_NULL$$, $borderWidth$$4_outerColor$$7$$);
        $marker$$4$$.$setDataColor$($dataColor$$8_hoverColor$$2$$, $JSCompiler_alias_TRUE$$);
        $dataColor$$8_hoverColor$$2$$ = dvt.$SelectionEffectUtils$.$getHoverBorderColor$($dataColor$$8_hoverColor$$2$$);
        $borderColor$$15_innerColor$$6$$ = $DvtChartStyleUtils$$.$getSelectedInnerColor$($chart$$316$$);
        $borderWidth$$4_outerColor$$7$$ = $DvtChartStyleUtils$$.$getSelectedOuterColor$($chart$$316$$);
        $marker$$4$$.$setHoverStroke$(new dvt.$SolidStroke$($borderColor$$15_innerColor$$6$$, 1, 1), new dvt.$SolidStroke$($dataColor$$8_hoverColor$$2$$, 1, 3.5));
        $marker$$4$$.$setSelectedStroke$(new dvt.$SolidStroke$($borderColor$$15_innerColor$$6$$, 1, 1.5), new dvt.$SolidStroke$($borderWidth$$4_outerColor$$7$$, 1, 4.5));
        $marker$$4$$.$setSelectedHoverStroke$(new dvt.$SolidStroke$($borderColor$$15_innerColor$$6$$, 1, 1.5), new dvt.$SolidStroke$($dataColor$$8_hoverColor$$2$$, 1, 4.5));
        $isTouchDevice$$ && $markerInfo$$.size < $DvtChartPlotAreaRenderer$$.$_MIN_TOUCH_MARKER_SIZE$ && $DvtChartPlotAreaRenderer$$.$_addMarkerHitArea$($marker$$4$$, $markerInfo$$.x, $markerInfo$$.y, $bOptimizeStroke$$1$$)
      }else {
        $DvtChartStyleUtils$$.$isSelectable$($chart$$316$$, $seriesIndex$$110$$, $groupIndex$$71$$) ? ($marker$$4$$ = new $DvtChartLineMarker$$($context$$149$$, $markerInfo$$.shape, $markerInfo$$.x, $markerInfo$$.y, $markerInfo$$.size, $bOptimizeStroke$$1$$), $marker$$4$$.setCursor("pointer"), $isTouchDevice$$ && $DvtChartPlotAreaRenderer$$.$_addMarkerHitArea$($marker$$4$$, $markerInfo$$.x, $markerInfo$$.y, $bOptimizeStroke$$1$$)) : ($isTouchDevice$$ && ($markerInfo$$.size = $DvtChartPlotAreaRenderer$$.$_MIN_TOUCH_MARKER_SIZE$), 
        $marker$$4$$ = new $DvtChartLineMarker$$($context$$149$$, dvt.$SimpleMarker$.$SQUARE$, $markerInfo$$.x, $markerInfo$$.y, $markerInfo$$.size, $bOptimizeStroke$$1$$)), $marker$$4$$ != $JSCompiler_alias_NULL$$ && ($marker$$4$$.$setInvisibleFill$(), $marker$$4$$.$setDataColor$($dataColor$$8_hoverColor$$2$$))
      }
      $marker$$4$$ != $JSCompiler_alias_NULL$$ && ($markers$$5$$.push($marker$$4$$), $DvtChartObjPeer$associate$$($marker$$4$$, $chart$$316$$, $seriesIndex$$110$$, $groupIndex$$71$$, $markerInfo$$))
    }
  }
  return $markers$$5$$
};
$DvtChartPlotAreaRenderer$$.$_addMarkerHitArea$ = function $$DvtChartPlotAreaRenderer$$$$_addMarkerHitArea$$($marker$$5$$, $hitArea$$1_x$$112$$, $y$$91$$, $bOptimizeStroke$$2$$) {
  $hitArea$$1_x$$112$$ = new dvt.$Rect$($marker$$5$$.$getCtx$(), $hitArea$$1_x$$112$$ - $DvtChartPlotAreaRenderer$$.$_MIN_TOUCH_MARKER_SIZE$ / 2, $y$$91$$ - $DvtChartPlotAreaRenderer$$.$_MIN_TOUCH_MARKER_SIZE$ / 2, $DvtChartPlotAreaRenderer$$.$_MIN_TOUCH_MARKER_SIZE$, $DvtChartPlotAreaRenderer$$.$_MIN_TOUCH_MARKER_SIZE$);
  $bOptimizeStroke$$2$$ && $hitArea$$1_x$$112$$.$setSolidStroke$("none");
  $hitArea$$1_x$$112$$.$setInvisibleFill$();
  $marker$$5$$.$addChild$($hitArea$$1_x$$112$$)
};
$DvtChartPlotAreaRenderer$$.$_getRangeMarkersForSeries$ = function $$DvtChartPlotAreaRenderer$$$$_getRangeMarkersForSeries$$($chart$$317$$, $seriesIndex$$111$$, $availSpace$$68$$) {
  if(!$DvtChartStyleUtils$$.$isSeriesRendered$($chart$$317$$, $seriesIndex$$111$$)) {
    return[]
  }
  for(var $isTouchDevice$$1$$ = dvt.$Agent$.$isTouchDevice$(), $context$$150$$ = $chart$$317$$.$getCtx$(), $xAxis$$2$$ = $chart$$317$$.$xAxis$, $yAxis$$2$$ = $DvtChartDataUtils$$.$isAssignedToY2$($chart$$317$$, $seriesIndex$$111$$) ? $chart$$317$$.$y2Axis$ : $chart$$317$$.$yAxis$, $options$$108$$ = $chart$$317$$.$getOptions$(), $numGroups$$7$$ = $DvtChartDataUtils$$.$getGroupCount$($chart$$317$$), $markers$$6$$ = [], $groupIndex$$72$$ = 0;$groupIndex$$72$$ < $numGroups$$7$$;$groupIndex$$72$$++) {
    if(!$DvtChartPlotAreaRenderer$$.$_isDataItemFiltered$($chart$$317$$, $seriesIndex$$111$$, $groupIndex$$72$$) && $DvtChartStyleUtils$$.$isDataItemRendered$($chart$$317$$, $seriesIndex$$111$$, $groupIndex$$72$$)) {
      var $dataPos$$7_xCoord$$5$$ = $xAxis$$2$$.$getCoordAt$($DvtChartDataUtils$$.$getXValue$($chart$$317$$, $seriesIndex$$111$$, $groupIndex$$72$$)), $hitArea$$2_lowCoord$$2_pLow$$ = $yAxis$$2$$.$getUnboundedCoordAt$($DvtChartDataUtils$$.$getLowValue$($chart$$317$$, $seriesIndex$$111$$, $groupIndex$$72$$)), $highCoord$$2_markerSize$$7$$ = $yAxis$$2$$.$getUnboundedCoordAt$($DvtChartDataUtils$$.$getHighValue$($chart$$317$$, $seriesIndex$$111$$, $groupIndex$$72$$));
      if(!($dataPos$$7_xCoord$$5$$ == $JSCompiler_alias_NULL$$ || $hitArea$$2_lowCoord$$2_pLow$$ == $JSCompiler_alias_NULL$$ || $highCoord$$2_markerSize$$7$$ == $JSCompiler_alias_NULL$$)) {
        var $bMarkerDisplayed$$1_marker$$6$$ = $DvtChartStyleUtils$$.$isMarkerDisplayed$($chart$$317$$, $seriesIndex$$111$$, $groupIndex$$72$$);
        if(!$bMarkerDisplayed$$1_marker$$6$$) {
          var $fill$$30_lastIndex$$2_prevLowValue$$ = $numGroups$$7$$ - 1, $borderColor$$16_isPolar$$6_prevHighValue_stroke$$47$$ = $DvtChartTypeUtils$$.$isPolar$($chart$$317$$), $nextHighValue_pHigh_prevIndex$$2$$ = $borderColor$$16_isPolar$$6_prevHighValue_stroke$$47$$ && 0 < $fill$$30_lastIndex$$2_prevLowValue$$ && 0 == $groupIndex$$72$$ ? $fill$$30_lastIndex$$2_prevLowValue$$ : $groupIndex$$72$$ - 1, $borderWidth$$5_dataColor$$9_nextIndex$$2_nextLowValue$$ = $borderColor$$16_isPolar$$6_prevHighValue_stroke$$47$$ && 
          0 < $fill$$30_lastIndex$$2_prevLowValue$$ && $groupIndex$$72$$ == $fill$$30_lastIndex$$2_prevLowValue$$ ? 0 : $groupIndex$$72$$ + 1, $fill$$30_lastIndex$$2_prevLowValue$$ = $DvtChartDataUtils$$.$getLowValue$($chart$$317$$, $seriesIndex$$111$$, $nextHighValue_pHigh_prevIndex$$2$$), $borderColor$$16_isPolar$$6_prevHighValue_stroke$$47$$ = $DvtChartDataUtils$$.$getHighValue$($chart$$317$$, $seriesIndex$$111$$, $nextHighValue_pHigh_prevIndex$$2$$), $borderWidth$$5_dataColor$$9_nextIndex$$2_nextLowValue$$ = 
          $DvtChartDataUtils$$.$getLowValue$($chart$$317$$, $seriesIndex$$111$$, $borderWidth$$5_dataColor$$9_nextIndex$$2_nextLowValue$$), $nextHighValue_pHigh_prevIndex$$2$$ = $DvtChartDataUtils$$.$getHighValue$($chart$$317$$, $seriesIndex$$111$$, $nextHighValue_pHigh_prevIndex$$2$$);
          $fill$$30_lastIndex$$2_prevLowValue$$ == $JSCompiler_alias_NULL$$ && ($borderColor$$16_isPolar$$6_prevHighValue_stroke$$47$$ == $JSCompiler_alias_NULL$$ && $borderWidth$$5_dataColor$$9_nextIndex$$2_nextLowValue$$ == $JSCompiler_alias_NULL$$ && $nextHighValue_pHigh_prevIndex$$2$$ == $JSCompiler_alias_NULL$$) && ($bMarkerDisplayed$$1_marker$$6$$ = $JSCompiler_alias_TRUE$$)
        }
        if(!$options$$108$$._duringAnimation && !$DvtChartTypeUtils$$.$isOverview$($chart$$317$$) && !$DvtChartTypeUtils$$.$isSpark$($chart$$317$$) || $bMarkerDisplayed$$1_marker$$6$$ || $DvtChartDataUtils$$.$isDataSelected$($chart$$317$$, $seriesIndex$$111$$, $groupIndex$$72$$)) {
          var $hitArea$$2_lowCoord$$2_pLow$$ = $DvtChartPlotAreaRenderer$$.$convertAxisCoord$($chart$$317$$, new dvt.$Point$($dataPos$$7_xCoord$$5$$, $hitArea$$2_lowCoord$$2_pLow$$), $availSpace$$68$$), $nextHighValue_pHigh_prevIndex$$2$$ = $DvtChartPlotAreaRenderer$$.$convertAxisCoord$($chart$$317$$, new dvt.$Point$($dataPos$$7_xCoord$$5$$, $highCoord$$2_markerSize$$7$$), $availSpace$$68$$), $dataPos$$7_xCoord$$5$$ = new dvt.$Point$(($hitArea$$2_lowCoord$$2_pLow$$.x + $nextHighValue_pHigh_prevIndex$$2$$.x) / 
          2, ($hitArea$$2_lowCoord$$2_pLow$$.y + $nextHighValue_pHigh_prevIndex$$2$$.y) / 2), $highCoord$$2_markerSize$$7$$ = $DvtChartStyleUtils$$.$getMarkerSize$($chart$$317$$, $seriesIndex$$111$$, $groupIndex$$72$$), $bMarkerDisplayed$$1_marker$$6$$ = new $DvtChartRangeMarker$$($context$$150$$, $hitArea$$2_lowCoord$$2_pLow$$.x, $hitArea$$2_lowCoord$$2_pLow$$.y, $nextHighValue_pHigh_prevIndex$$2$$.x, $nextHighValue_pHigh_prevIndex$$2$$.y, $highCoord$$2_markerSize$$7$$, !$bMarkerDisplayed$$1_marker$$6$$), 
          $fill$$30_lastIndex$$2_prevLowValue$$ = $DvtChartSeriesEffectUtils$$.$getMarkerFill$($chart$$317$$, $seriesIndex$$111$$, $groupIndex$$72$$), $borderColor$$16_isPolar$$6_prevHighValue_stroke$$47$$ = $DvtChartStyleUtils$$.$getMarkerBorderColor$($chart$$317$$, $seriesIndex$$111$$, $groupIndex$$72$$), $borderWidth$$5_dataColor$$9_nextIndex$$2_nextLowValue$$ = $DvtChartStyleUtils$$.$getBorderWidth$($chart$$317$$, $seriesIndex$$111$$, $groupIndex$$72$$), $borderColor$$16_isPolar$$6_prevHighValue_stroke$$47$$ = 
          new dvt.$SolidStroke$($borderColor$$16_isPolar$$6_prevHighValue_stroke$$47$$, $JSCompiler_alias_NULL$$, $borderWidth$$5_dataColor$$9_nextIndex$$2_nextLowValue$$), $borderWidth$$5_dataColor$$9_nextIndex$$2_nextLowValue$$ = $DvtChartStyleUtils$$.$getMarkerColor$($chart$$317$$, $seriesIndex$$111$$, $groupIndex$$72$$), $innerColor$$7$$ = $DvtChartStyleUtils$$.$getSelectedInnerColor$($chart$$317$$), $outerColor$$8$$ = $DvtChartStyleUtils$$.$getSelectedOuterColor$($chart$$317$$);
          $bMarkerDisplayed$$1_marker$$6$$.$setStyleProperties$($fill$$30_lastIndex$$2_prevLowValue$$, $borderColor$$16_isPolar$$6_prevHighValue_stroke$$47$$, $borderWidth$$5_dataColor$$9_nextIndex$$2_nextLowValue$$, $innerColor$$7$$, $outerColor$$8$$);
          $DvtChartStyleUtils$$.$isSelectable$($chart$$317$$, $seriesIndex$$111$$, $groupIndex$$72$$) && $bMarkerDisplayed$$1_marker$$6$$.setCursor("pointer");
          $hitArea$$2_lowCoord$$2_pLow$$ = new dvt.$Line$($context$$150$$, $hitArea$$2_lowCoord$$2_pLow$$.x, $hitArea$$2_lowCoord$$2_pLow$$.y, $nextHighValue_pHigh_prevIndex$$2$$.x, $nextHighValue_pHigh_prevIndex$$2$$.y);
          $hitArea$$2_lowCoord$$2_pLow$$.$setSolidStroke$("rgba(0,0,0,0)", $JSCompiler_alias_NULL$$, $isTouchDevice$$1$$ ? Math.max($highCoord$$2_markerSize$$7$$, $DvtChartPlotAreaRenderer$$.$_MIN_TOUCH_MARKER_SIZE$) : $highCoord$$2_markerSize$$7$$);
          $bMarkerDisplayed$$1_marker$$6$$.$addChild$($hitArea$$2_lowCoord$$2_pLow$$);
          $markers$$6$$.push($bMarkerDisplayed$$1_marker$$6$$);
          $DvtChartObjPeer$associate$$($bMarkerDisplayed$$1_marker$$6$$, $chart$$317$$, $seriesIndex$$111$$, $groupIndex$$72$$, $dataPos$$7_xCoord$$5$$)
        }
      }
    }
  }
  return $markers$$6$$
};
$DvtChartPlotAreaRenderer$$.$_renderBars$ = function $$DvtChartPlotAreaRenderer$$$$_renderBars$$($chart$$318$$, $container$$59$$, $availSpace$$69$$) {
  for(var $bHoriz$$9$$ = $DvtChartTypeUtils$$.$isHorizontal$($chart$$318$$), $bPolar$$1$$ = $DvtChartTypeUtils$$.$isPolar$($chart$$318$$), $bStock$$ = $DvtChartTypeUtils$$.$isStock$($chart$$318$$), $bPixelSpacing$$ = "pixel" == $DvtChartStyleUtils$$.$getBarSpacing$($chart$$318$$), $isR2L$$5$$ = dvt.$Agent$.$isRightToLeft$($chart$$318$$.$getCtx$()), $hasStackLabel$$ = $DvtChartStyleUtils$$.$isStackLabelRendered$($chart$$318$$), $groupIndex$$73$$ = 0;$groupIndex$$73$$ < $DvtChartDataUtils$$.$getGroupCount$($chart$$318$$);$groupIndex$$73$$++) {
    for(var $seriesIndex$$112$$ = 0;$seriesIndex$$112$$ < $DvtChartDataUtils$$.$getSeriesCount$($chart$$318$$);$seriesIndex$$112$$++) {
      if($DvtChartDataUtils$$.$isBLACItemInViewport$($chart$$318$$, $seriesIndex$$112$$, $groupIndex$$73$$) && "bar" == $DvtChartStyleUtils$$.$getSeriesType$($chart$$318$$, $seriesIndex$$112$$)) {
        var $barData_markers$$7$$ = $DvtChartDataUtils$$.$getBarInfo$($chart$$318$$, $seriesIndex$$112$$, $groupIndex$$73$$, $availSpace$$69$$);
        if($barData_markers$$7$$ != $JSCompiler_alias_NULL$$) {
          var $shape$$39_yCoord$$4$$ = $barData_markers$$7$$.$yCoord$, $baseCoord$$1_stroke$$48$$ = $barData_markers$$7$$.$baseCoord$, $axisCoord$$4_borderWidth$$6_innerColor$$8$$ = $barData_markers$$7$$.$axisCoord$, $outerColor$$9_x1$$24$$ = $barData_markers$$7$$.$x1$, $x2$$22$$ = $barData_markers$$7$$.$x2$, $barWidth$$6_fill$$31$$ = $barData_markers$$7$$.$barWidth$, $bInvisible_borderColor$$17_dataColor$$10$$ = $JSCompiler_alias_FALSE$$;
          1 > Math.abs($shape$$39_yCoord$$4$$ - $baseCoord$$1_stroke$$48$$) && ($DvtChartStyleUtils$$.$isRangeSeries$($chart$$318$$, $seriesIndex$$112$$) ? $shape$$39_yCoord$$4$$-- : ($bInvisible_borderColor$$17_dataColor$$10$$ = $JSCompiler_alias_TRUE$$, $shape$$39_yCoord$$4$$ = $shape$$39_yCoord$$4$$ > $baseCoord$$1_stroke$$48$$ || $bHoriz$$9$$ && !$isR2L$$5$$ && $shape$$39_yCoord$$4$$ == $baseCoord$$1_stroke$$48$$ ? $baseCoord$$1_stroke$$48$$ + 3 : $baseCoord$$1_stroke$$48$$ - 3));
          $shape$$39_yCoord$$4$$ = $bPolar$$1$$ ? new $DvtChartPolarBar$$($chart$$318$$, $axisCoord$$4_borderWidth$$6_innerColor$$8$$, $baseCoord$$1_stroke$$48$$, $shape$$39_yCoord$$4$$, $outerColor$$9_x1$$24$$, $x2$$22$$, $availSpace$$69$$) : new $DvtChartBar$$($chart$$318$$, $axisCoord$$4_borderWidth$$6_innerColor$$8$$, $baseCoord$$1_stroke$$48$$, $shape$$39_yCoord$$4$$, $outerColor$$9_x1$$24$$, $x2$$22$$);
          $container$$59$$.$addChild$($shape$$39_yCoord$$4$$);
          $DvtChartStyleUtils$$.$isSelectable$($chart$$318$$, $seriesIndex$$112$$, $groupIndex$$73$$) && $shape$$39_yCoord$$4$$.setCursor("pointer");
          $baseCoord$$1_stroke$$48$$ = $JSCompiler_alias_NULL$$;
          $bInvisible_borderColor$$17_dataColor$$10$$ ? $barWidth$$6_fill$$31$$ = dvt.$SolidFill$.$invisibleFill$() : ($barWidth$$6_fill$$31$$ = $DvtChartSeriesEffectUtils$$.$getBarFill$($chart$$318$$, $seriesIndex$$112$$, $groupIndex$$73$$, $bHoriz$$9$$, $barWidth$$6_fill$$31$$), $bInvisible_borderColor$$17_dataColor$$10$$ = $DvtChartStyleUtils$$.$getBorderColor$($chart$$318$$, $seriesIndex$$112$$, $groupIndex$$73$$), $axisCoord$$4_borderWidth$$6_innerColor$$8$$ = $DvtChartStyleUtils$$.$getBorderWidth$($chart$$318$$, 
          $seriesIndex$$112$$, $groupIndex$$73$$), $bInvisible_borderColor$$17_dataColor$$10$$ && ($baseCoord$$1_stroke$$48$$ = new dvt.$SolidStroke$($bInvisible_borderColor$$17_dataColor$$10$$, $JSCompiler_alias_NULL$$, $axisCoord$$4_borderWidth$$6_innerColor$$8$$)));
          $bInvisible_borderColor$$17_dataColor$$10$$ = $DvtChartStyleUtils$$.$getColor$($chart$$318$$, $seriesIndex$$112$$, $groupIndex$$73$$);
          $axisCoord$$4_borderWidth$$6_innerColor$$8$$ = $DvtChartStyleUtils$$.$getSelectedInnerColor$($chart$$318$$);
          $outerColor$$9_x1$$24$$ = $DvtChartStyleUtils$$.$getSelectedOuterColor$($chart$$318$$);
          $shape$$39_yCoord$$4$$.$setStyleProperties$($barWidth$$6_fill$$31$$, $baseCoord$$1_stroke$$48$$, $bInvisible_borderColor$$17_dataColor$$10$$, $axisCoord$$4_borderWidth$$6_innerColor$$8$$, $outerColor$$9_x1$$24$$);
          $bPixelSpacing$$ && $shape$$39_yCoord$$4$$.$setPixelHinting$();
          $DvtChartObjPeer$associate$$($shape$$39_yCoord$$4$$, $chart$$318$$, $seriesIndex$$112$$, $groupIndex$$73$$, $barData_markers$$7$$.$dataPos$);
          $DvtChartStyleUtils$$.$isRangeSeries$($chart$$318$$, $seriesIndex$$112$$) ? ($DvtChartPlotAreaRenderer$$.$_renderDataLabel$($chart$$318$$, $container$$59$$, $shape$$39_yCoord$$4$$.$getBoundingBox$(), $seriesIndex$$112$$, $groupIndex$$73$$, $bInvisible_borderColor$$17_dataColor$$10$$, "low"), $DvtChartPlotAreaRenderer$$.$_renderDataLabel$($chart$$318$$, $container$$59$$, $shape$$39_yCoord$$4$$.$getBoundingBox$(), $seriesIndex$$112$$, $groupIndex$$73$$, $bInvisible_borderColor$$17_dataColor$$10$$, 
          "high")) : $DvtChartPlotAreaRenderer$$.$_renderDataLabel$($chart$$318$$, $container$$59$$, $shape$$39_yCoord$$4$$.$getBoundingBox$(), $seriesIndex$$112$$, $groupIndex$$73$$, $bInvisible_borderColor$$17_dataColor$$10$$);
          $barData_markers$$7$$ = [];
          $barData_markers$$7$$.push($shape$$39_yCoord$$4$$);
          $bStock$$ && 0 != $seriesIndex$$112$$ || $chart$$318$$.$_currentMarkers$.push($barData_markers$$7$$);
          $hasStackLabel$$ && $DvtChartDataUtils$$.$isBarStackLabeled$($chart$$318$$, $seriesIndex$$112$$, $groupIndex$$73$$) && $DvtChartPlotAreaRenderer$$.$_renderDataLabel$($chart$$318$$, $container$$59$$, $shape$$39_yCoord$$4$$.$getBoundingBox$(), $seriesIndex$$112$$, $groupIndex$$73$$, $JSCompiler_alias_NULL$$, $JSCompiler_alias_NULL$$, $JSCompiler_alias_TRUE$$)
        }
      }
    }
  }
};
$DvtChartPlotAreaRenderer$$.$_renderStock$ = function $$DvtChartPlotAreaRenderer$$$$_renderStock$$($chart$$319$$, $container$$60$$) {
  var $options$$109$$ = $chart$$319$$.$getOptions$(), $xAxis$$3$$ = $chart$$319$$.$xAxis$, $yAxis$$3$$ = $chart$$319$$.$yAxis$;
  if("candlestick" == $DvtChartStyleUtils$$.$getSeriesType$($chart$$319$$, 0)) {
    for(var $groupIndex$$74$$ = 0;$groupIndex$$74$$ < $DvtChartDataUtils$$.$getGroupCount$($chart$$319$$);$groupIndex$$74$$++) {
      if($DvtChartDataUtils$$.$isBLACItemInViewport$($chart$$319$$, 0, $groupIndex$$74$$)) {
        var $dataPos$$8_markers$$8_xCoord$$6_xValue$$2$$ = $DvtChartDataUtils$$.$getXValue$($chart$$319$$, 0, $groupIndex$$74$$), $dataItem$$34_openCoord$$1$$ = $DvtChartDataUtils$$.$getDataItem$($chart$$319$$, 0, $groupIndex$$74$$), $openValue$$, $closeValue$$, $lowValue$$1$$, $candlestick_highValue$$1$$ = $JSCompiler_alias_NULL$$;
        $dataItem$$34_openCoord$$1$$ && ($openValue$$ = $dataItem$$34_openCoord$$1$$.open, $closeValue$$ = $dataItem$$34_openCoord$$1$$.close, $lowValue$$1$$ = $dataItem$$34_openCoord$$1$$.low, $candlestick_highValue$$1$$ = $dataItem$$34_openCoord$$1$$.high);
        var $renderRange_stroke$$49$$ = $lowValue$$1$$ != $JSCompiler_alias_NULL$$ && $candlestick_highValue$$1$$ != $JSCompiler_alias_NULL$$;
        if(!($openValue$$ == $JSCompiler_alias_NULL$$ || $closeValue$$ == $JSCompiler_alias_NULL$$)) {
          var $dataPos$$8_markers$$8_xCoord$$6_xValue$$2$$ = $xAxis$$3$$.$getUnboundedCoordAt$($dataPos$$8_markers$$8_xCoord$$6_xValue$$2$$), $barWidth$$7_fill$$32_fill$$inline_3177$$ = $DvtChartStyleUtils$$.$getBarWidth$($chart$$319$$, 0, $groupIndex$$74$$), $dataItem$$34_openCoord$$1$$ = $yAxis$$3$$.$getBoundedCoordAt$($openValue$$), $closeCoord$$1$$ = $yAxis$$3$$.$getBoundedCoordAt$($closeValue$$), $lowCoord$$3$$, $borderColor$$18_highCoord$$3_outerColor$$10$$ = $JSCompiler_alias_NULL$$;
          $renderRange_stroke$$49$$ && ($lowCoord$$3$$ = $yAxis$$3$$.$getBoundedCoordAt$($lowValue$$1$$), $borderColor$$18_highCoord$$3_outerColor$$10$$ = $yAxis$$3$$.$getBoundedCoordAt$($candlestick_highValue$$1$$));
          $candlestick_highValue$$1$$ = new $DvtChartCandlestick$$($chart$$319$$.$getCtx$(), $dataPos$$8_markers$$8_xCoord$$6_xValue$$2$$, $barWidth$$7_fill$$32_fill$$inline_3177$$, $dataItem$$34_openCoord$$1$$, $closeCoord$$1$$, $lowCoord$$3$$, $borderColor$$18_highCoord$$3_outerColor$$10$$);
          $container$$60$$.$addChild$($candlestick_highValue$$1$$);
          $DvtChartStyleUtils$$.$isSelectable$($chart$$319$$, 0, $groupIndex$$74$$) && $candlestick_highValue$$1$$.setCursor("pointer");
          var $barWidth$$7_fill$$32_fill$$inline_3177$$ = $DvtChartSeriesEffectUtils$$.$getBarFill$($chart$$319$$, 0, $groupIndex$$74$$, $JSCompiler_alias_FALSE$$, $barWidth$$7_fill$$32_fill$$inline_3177$$), $renderRange_stroke$$49$$ = $JSCompiler_alias_NULL$$, $borderColor$$18_highCoord$$3_outerColor$$10$$ = $DvtChartStyleUtils$$.$getBorderColor$($chart$$319$$, 0, $groupIndex$$74$$), $borderWidth$$7_rangeColor$$1$$ = $DvtChartStyleUtils$$.$getBorderWidth$($chart$$319$$, 0, $groupIndex$$74$$);
          $borderColor$$18_highCoord$$3_outerColor$$10$$ ? $renderRange_stroke$$49$$ = new dvt.$SolidStroke$($borderColor$$18_highCoord$$3_outerColor$$10$$, $JSCompiler_alias_NULL$$, $borderWidth$$7_rangeColor$$1$$) : $barWidth$$7_fill$$32_fill$$inline_3177$$ instanceof dvt.$PatternFill$ && ($renderRange_stroke$$49$$ = new dvt.$SolidStroke$($barWidth$$7_fill$$32_fill$$inline_3177$$.$getColor$(), $JSCompiler_alias_NULL$$, $borderWidth$$7_rangeColor$$1$$));
          var $dataColor$$11$$ = $DvtChartStyleUtils$$.$getColor$($chart$$319$$, 0, $groupIndex$$74$$), $innerColor$$9$$ = $DvtChartStyleUtils$$.$getSelectedInnerColor$($chart$$319$$), $borderColor$$18_highCoord$$3_outerColor$$10$$ = $DvtChartStyleUtils$$.$getSelectedOuterColor$($chart$$319$$), $borderWidth$$7_rangeColor$$1$$ = $options$$109$$.styleDefaults.stockRangeColor;
          $candlestick_highValue$$1$$.$_changeShape$.$setStyleProperties$($barWidth$$7_fill$$32_fill$$inline_3177$$, $renderRange_stroke$$49$$, $dataColor$$11$$, $innerColor$$9$$, $borderColor$$18_highCoord$$3_outerColor$$10$$);
          $barWidth$$7_fill$$32_fill$$inline_3177$$ = new dvt.$SolidFill$($borderWidth$$7_rangeColor$$1$$);
          $candlestick_highValue$$1$$.$_rangeShape$ && $candlestick_highValue$$1$$.$_rangeShape$.$setStyleProperties$($barWidth$$7_fill$$32_fill$$inline_3177$$, $renderRange_stroke$$49$$, $borderWidth$$7_rangeColor$$1$$, $JSCompiler_alias_NULL$$, $borderColor$$18_highCoord$$3_outerColor$$10$$);
          $dataPos$$8_markers$$8_xCoord$$6_xValue$$2$$ = new dvt.$Point$($dataPos$$8_markers$$8_xCoord$$6_xValue$$2$$, ($dataItem$$34_openCoord$$1$$ + $closeCoord$$1$$) / 2);
          $DvtChartObjPeer$associate$$($candlestick_highValue$$1$$, $chart$$319$$, 0, $groupIndex$$74$$, $dataPos$$8_markers$$8_xCoord$$6_xValue$$2$$);
          $dataPos$$8_markers$$8_xCoord$$6_xValue$$2$$ = [];
          $dataPos$$8_markers$$8_xCoord$$6_xValue$$2$$.push($candlestick_highValue$$1$$.$_changeShape$);
          $chart$$319$$.$_currentMarkers$.push($dataPos$$8_markers$$8_xCoord$$6_xValue$$2$$)
        }
      }
    }
  }
};
$DvtChartPlotAreaRenderer$$.$_renderLines$ = function $$DvtChartPlotAreaRenderer$$$$_renderLines$$($chart$$320$$, $container$$61$$, $clipGroup$$3$$, $availSpace$$71$$) {
  var $lineSeries$$ = [], $seriesIndex$$113$$, $lineIndex_seriesCount$$21$$ = $DvtChartDataUtils$$.$getSeriesCount$($chart$$320$$);
  for($seriesIndex$$113$$ = 0;$seriesIndex$$113$$ < $lineIndex_seriesCount$$21$$;$seriesIndex$$113$$++) {
    $DvtChartStyleUtils$$.$isSeriesRendered$($chart$$320$$, $seriesIndex$$113$$) && "line" == $DvtChartStyleUtils$$.$getSeriesType$($chart$$320$$, $seriesIndex$$113$$) && $lineSeries$$.push($seriesIndex$$113$$)
  }
  for($lineIndex_seriesCount$$21$$ = 0;$lineIndex_seriesCount$$21$$ < $lineSeries$$.length;$lineIndex_seriesCount$$21$$++) {
    $seriesIndex$$113$$ = $lineSeries$$[$lineIndex_seriesCount$$21$$], "none" != $DvtChartStyleUtils$$.$getLineType$($chart$$320$$, $seriesIndex$$113$$) && ($DvtChartTypeUtils$$.$isPolar$($chart$$320$$) || $DvtChartPlotAreaRenderer$$.$_filterPointsForSeries$($chart$$320$$, $seriesIndex$$113$$), $DvtChartPlotAreaRenderer$$.$_renderLinesForSeries$($chart$$320$$, $clipGroup$$3$$, $seriesIndex$$113$$, $availSpace$$71$$))
  }
  for($lineIndex_seriesCount$$21$$ = 0;$lineIndex_seriesCount$$21$$ < $lineSeries$$.length;$lineIndex_seriesCount$$21$$++) {
    $DvtChartPlotAreaRenderer$$.$_renderMarkersForSeries$($chart$$320$$, $container$$61$$, $lineSeries$$[$lineIndex_seriesCount$$21$$], $availSpace$$71$$)
  }
};
$DvtChartPlotAreaRenderer$$.$_renderAreas$ = function $$DvtChartPlotAreaRenderer$$$$_renderAreas$$($chart$$321$$, $container$$62$$, $availSpace$$72$$, $isLineWithArea$$1$$) {
  for(var $seriesCount$$22$$ = $DvtChartDataUtils$$.$getSeriesCount$($chart$$321$$), $seriesType$$11$$ = $isLineWithArea$$1$$ ? "lineWithArea" : "area", $yAreaSeries$$ = [], $y2AreaSeries$$ = [], $seriesIndex$$114$$ = 0;$seriesIndex$$114$$ < $seriesCount$$22$$;$seriesIndex$$114$$++) {
    $DvtChartStyleUtils$$.$isSeriesRendered$($chart$$321$$, $seriesIndex$$114$$) && $DvtChartStyleUtils$$.$getSeriesType$($chart$$321$$, $seriesIndex$$114$$) == $seriesType$$11$$ && ($DvtChartDataUtils$$.$isAssignedToY2$($chart$$321$$, $seriesIndex$$114$$) ? $y2AreaSeries$$.push($seriesIndex$$114$$) : $yAreaSeries$$.push($seriesIndex$$114$$))
  }
  0 < $yAreaSeries$$.length && $DvtChartPlotAreaRenderer$$.$_renderAreasForAxis$($chart$$321$$, $container$$62$$, $yAreaSeries$$, $chart$$321$$.$yAxis$.$getBaselineCoord$(), $availSpace$$72$$, $isLineWithArea$$1$$);
  0 < $y2AreaSeries$$.length && $DvtChartPlotAreaRenderer$$.$_renderAreasForAxis$($chart$$321$$, $container$$62$$, $y2AreaSeries$$, $chart$$321$$.$y2Axis$.$getBaselineCoord$(), $availSpace$$72$$, $isLineWithArea$$1$$)
};
$DvtChartPlotAreaRenderer$$.$_renderAreasForAxis$ = function $$DvtChartPlotAreaRenderer$$$$_renderAreasForAxis$$($chart$$322$$, $container$$63$$, $areaSeries$$, $baselineCoord$$7_hasBorder$$, $availSpace$$73$$, $isLineWithArea$$2$$) {
  for(var $bStacked$$2$$ = $DvtChartTypeUtils$$.$isStacked$($chart$$322$$), $bPolar$$2$$ = $DvtChartTypeUtils$$.$isPolar$($chart$$322$$), $clippedGroup$$ = $DvtChartPlotAreaRenderer$$.$createClippedGroup$($chart$$322$$, $container$$63$$, $availSpace$$73$$), $prevCoordsMap$$ = {}, $prevTypeMap$$ = {}, $prevCoordsMapNegative$$ = {}, $prevTypeMapNegative$$ = {}, $baselineCoords$$ = [], $areaIndex_groupCount$$9$$ = $DvtChartDataUtils$$.$getGroupCount$($chart$$322$$), $i$$373_seriesIndex$$115$$ = 0;$i$$373_seriesIndex$$115$$ < 
  $areaIndex_groupCount$$9$$;$i$$373_seriesIndex$$115$$++) {
    $baselineCoords$$.push(new $DvtChartCoord$$($JSCompiler_alias_NULL$$, $baselineCoord$$7_hasBorder$$, $baselineCoord$$7_hasBorder$$, $i$$373_seriesIndex$$115$$, $DvtChartDataUtils$$.$getGroup$($chart$$322$$, $i$$373_seriesIndex$$115$$), $JSCompiler_alias_TRUE$$))
  }
  for($areaIndex_groupCount$$9$$ = 0;$areaIndex_groupCount$$9$$ < $areaSeries$$.length;$areaIndex_groupCount$$9$$++) {
    var $i$$373_seriesIndex$$115$$ = $areaSeries$$[$areaIndex_groupCount$$9$$], $category$$12$$ = $DvtChartDataUtils$$.$getStackCategory$($chart$$322$$, $i$$373_seriesIndex$$115$$), $isSeriesNegative$$ = $DvtChartDataUtils$$.$isSeriesNegative$($chart$$322$$, $i$$373_seriesIndex$$115$$), $baseCoords$$1_prevCoords$$ = $prevCoordsMap$$[$category$$12$$], $baseType$$1_prevType$$ = $prevTypeMap$$[$category$$12$$], $prevCoordsNegative$$ = $prevCoordsMapNegative$$[$category$$12$$], $prevTypeNegative$$ = 
    $prevTypeMapNegative$$[$category$$12$$];
    if("none" == $DvtChartStyleUtils$$.$getLineType$($chart$$322$$, $i$$373_seriesIndex$$115$$)) {
      $DvtChartPlotAreaRenderer$$.$_renderMarkersForSeries$($chart$$322$$, $container$$63$$, $i$$373_seriesIndex$$115$$, $availSpace$$73$$)
    }else {
      var $area$$2_fill$$33$$ = $DvtChartSeriesEffectUtils$$.$getAreaFill$($chart$$322$$, $i$$373_seriesIndex$$115$$), $borderColor$$19$$ = $DvtChartStyleUtils$$.$getBorderColor$($chart$$322$$, $i$$373_seriesIndex$$115$$), $borderWidth$$8_type$$133$$ = $DvtChartStyleUtils$$.$getBorderWidth$($chart$$322$$, $i$$373_seriesIndex$$115$$), $stroke$$50$$ = $borderColor$$19$$ ? new dvt.$SolidStroke$($borderColor$$19$$, $JSCompiler_alias_NULL$$, $borderWidth$$8_type$$133$$) : $JSCompiler_alias_NULL$$, $borderWidth$$8_type$$133$$ = 
      $DvtChartStyleUtils$$.$getLineType$($chart$$322$$, $i$$373_seriesIndex$$115$$);
      $bPolar$$2$$ || $DvtChartPlotAreaRenderer$$.$_filterPointsForSeries$($chart$$322$$, $i$$373_seriesIndex$$115$$);
      var $coords$$20$$;
      $DvtChartStyleUtils$$.$isRangeSeries$($chart$$322$$, $i$$373_seriesIndex$$115$$) ? ($coords$$20$$ = $DvtChartPlotAreaRenderer$$.$_getCoordsForSeries$($chart$$322$$, $i$$373_seriesIndex$$115$$, "high"), $baseCoords$$1_prevCoords$$ = $DvtChartPlotAreaRenderer$$.$_getCoordsForSeries$($chart$$322$$, $i$$373_seriesIndex$$115$$, "low"), $baseType$$1_prevType$$ = $borderWidth$$8_type$$133$$) : $isSeriesNegative$$ ? ($coords$$20$$ = $DvtChartPlotAreaRenderer$$.$_getAreaCoordsForSeries$($chart$$322$$, 
      $i$$373_seriesIndex$$115$$, $prevCoordsNegative$$ ? $prevCoordsNegative$$ : $baselineCoords$$), $baseCoords$$1_prevCoords$$ = $prevCoordsNegative$$ ? $prevCoordsNegative$$ : [], $baseType$$1_prevType$$ = $prevTypeNegative$$) : ($coords$$20$$ = $DvtChartPlotAreaRenderer$$.$_getAreaCoordsForSeries$($chart$$322$$, $i$$373_seriesIndex$$115$$, $baseCoords$$1_prevCoords$$ ? $baseCoords$$1_prevCoords$$ : $baselineCoords$$), $baseCoords$$1_prevCoords$$ = $baseCoords$$1_prevCoords$$ ? $baseCoords$$1_prevCoords$$ : 
      []);
      $area$$2_fill$$33$$ = new $DvtChartLineArea$$($chart$$322$$, $JSCompiler_alias_TRUE$$, $availSpace$$73$$, $baselineCoord$$7_hasBorder$$, $area$$2_fill$$33$$, $stroke$$50$$, $borderWidth$$8_type$$133$$, $coords$$20$$, $baseType$$1_prevType$$, $baseCoords$$1_prevCoords$$);
      $clippedGroup$$.$addChild$($area$$2_fill$$33$$);
      $chart$$322$$.$_currentAreas$.push($area$$2_fill$$33$$);
      $DvtChartObjPeer$associate$$($area$$2_fill$$33$$, $chart$$322$$, $i$$373_seriesIndex$$115$$);
      $isSeriesNegative$$ ? ($prevCoordsMapNegative$$[$category$$12$$] = $coords$$20$$, $prevTypeMapNegative$$[$category$$12$$] = $borderWidth$$8_type$$133$$) : ($prevCoordsMap$$[$category$$12$$] = $coords$$20$$, $prevTypeMap$$[$category$$12$$] = $borderWidth$$8_type$$133$$);
      $bStacked$$2$$ || (($isLineWithArea$$2$$ || 0 < $DvtChartStyleUtils$$.$getDataItemGaps$($chart$$322$$) && !$borderColor$$19$$) && $DvtChartPlotAreaRenderer$$.$_renderLinesForSeries$($chart$$322$$, $clippedGroup$$, $i$$373_seriesIndex$$115$$, $availSpace$$73$$, !$isLineWithArea$$2$$), $isLineWithArea$$2$$ || $DvtChartPlotAreaRenderer$$.$_renderMarkersForSeries$($chart$$322$$, $container$$63$$, $i$$373_seriesIndex$$115$$, $availSpace$$73$$), $areaIndex_groupCount$$9$$ + 1 < $areaSeries$$.length && 
      ($clippedGroup$$ = $DvtChartPlotAreaRenderer$$.$createClippedGroup$($chart$$322$$, $container$$63$$, $availSpace$$73$$)))
    }
  }
  for($areaIndex_groupCount$$9$$ = 0;$areaIndex_groupCount$$9$$ < $areaSeries$$.length;$areaIndex_groupCount$$9$$++) {
    $i$$373_seriesIndex$$115$$ = $areaSeries$$[$areaIndex_groupCount$$9$$], "none" != $DvtChartStyleUtils$$.$getLineType$($chart$$322$$, $i$$373_seriesIndex$$115$$) && ($baselineCoord$$7_hasBorder$$ = $DvtChartStyleUtils$$.$getBorderColor$($chart$$322$$, $i$$373_seriesIndex$$115$$) || $DvtChartStyleUtils$$.$getBorderColor$($chart$$322$$, $i$$373_seriesIndex$$115$$ + 1), $bStacked$$2$$ && ($isLineWithArea$$2$$ || 0 < $DvtChartStyleUtils$$.$getDataItemGaps$($chart$$322$$) && !$baselineCoord$$7_hasBorder$$) && 
    $DvtChartPlotAreaRenderer$$.$_renderLinesForSeries$($chart$$322$$, $clippedGroup$$, $i$$373_seriesIndex$$115$$, $availSpace$$73$$, !$isLineWithArea$$2$$), ($bStacked$$2$$ || $isLineWithArea$$2$$) && $DvtChartPlotAreaRenderer$$.$_renderMarkersForSeries$($chart$$322$$, $container$$63$$, $i$$373_seriesIndex$$115$$, $availSpace$$73$$))
  }
};
$DvtChartPlotAreaRenderer$$.$_getAreaCoordsForSeries$ = function $$DvtChartPlotAreaRenderer$$$$_getAreaCoordsForSeries$$($bPolar$$3_chart$$323$$, $rawCoords_seriesIndex$$116$$, $lastIndex$$3_prevCoords$$1$$) {
  $rawCoords_seriesIndex$$116$$ = $DvtChartPlotAreaRenderer$$.$_getCoordsForSeries$($bPolar$$3_chart$$323$$, $rawCoords_seriesIndex$$116$$);
  for(var $coords$$21$$ = [], $i$$374$$ = 0;$i$$374$$ < $lastIndex$$3_prevCoords$$1$$.length;$i$$374$$++) {
    $coords$$21$$.push($lastIndex$$3_prevCoords$$1$$[$i$$374$$].$clone$())
  }
  $lastIndex$$3_prevCoords$$1$$ = $rawCoords_seriesIndex$$116$$.length - 1;
  $bPolar$$3_chart$$323$$ = $DvtChartTypeUtils$$.$isPolar$($bPolar$$3_chart$$323$$);
  for($i$$374$$ = 0;$i$$374$$ < $rawCoords_seriesIndex$$116$$.length;$i$$374$$++) {
    if($rawCoords_seriesIndex$$116$$[$i$$374$$].x != $JSCompiler_alias_NULL$$) {
      var $coord$$28$$ = $coords$$21$$[$rawCoords_seriesIndex$$116$$[$i$$374$$].$groupIndex$], $prevIndex$$3$$ = $bPolar$$3_chart$$323$$ && 0 == $i$$374$$ ? $lastIndex$$3_prevCoords$$1$$ : $i$$374$$ - 1, $nextIndex$$3$$ = $bPolar$$3_chart$$323$$ && $i$$374$$ == $lastIndex$$3_prevCoords$$1$$ ? 0 : $i$$374$$ + 1;
      0 <= $prevIndex$$3$$ && $rawCoords_seriesIndex$$116$$[$prevIndex$$3$$].x != $JSCompiler_alias_NULL$$ && ($coord$$28$$.$y1$ = $rawCoords_seriesIndex$$116$$[$i$$374$$].$y1$);
      $nextIndex$$3$$ <= $lastIndex$$3_prevCoords$$1$$ && $rawCoords_seriesIndex$$116$$[$nextIndex$$3$$].x != $JSCompiler_alias_NULL$$ && ($coord$$28$$.$y2$ = $rawCoords_seriesIndex$$116$$[$i$$374$$].$y2$);
      $coord$$28$$.x = $rawCoords_seriesIndex$$116$$[$i$$374$$].x;
      $coord$$28$$.$filtered$ = $coord$$28$$.$y1$ == $coord$$28$$.$y2$ ? $rawCoords_seriesIndex$$116$$[$i$$374$$].$filtered$ : $JSCompiler_alias_FALSE$$
    }
  }
  return $coords$$21$$
};
$DvtChartPlotAreaRenderer$$.$_renderLinesForSeries$ = function $$DvtChartPlotAreaRenderer$$$$_renderLinesForSeries$$($chart$$324$$, $container$$64$$, $seriesIndex$$117$$, $availSpace$$75$$, $color$$26_gapSize$$1_isDataItemGap$$) {
  function $renderLine$$($color$$26_gapSize$$1_isDataItemGap$$) {
    $color$$26_gapSize$$1_isDataItemGap$$ = $DvtChartPlotAreaRenderer$$.$_getCoordsForSeries$($chart$$324$$, $seriesIndex$$117$$, $color$$26_gapSize$$1_isDataItemGap$$);
    $color$$26_gapSize$$1_isDataItemGap$$ = new $DvtChartLineArea$$($chart$$324$$, $JSCompiler_alias_FALSE$$, $availSpace$$75$$, $baseline$$8$$, $JSCompiler_alias_NULL$$, $stroke$$51$$, $lineType$$5$$, $color$$26_gapSize$$1_isDataItemGap$$);
    $container$$64$$.$addChild$($color$$26_gapSize$$1_isDataItemGap$$);
    $DvtChartObjPeer$associate$$($color$$26_gapSize$$1_isDataItemGap$$, $chart$$324$$, $seriesIndex$$117$$)
  }
  var $stroke$$51$$;
  if($color$$26_gapSize$$1_isDataItemGap$$) {
    $color$$26_gapSize$$1_isDataItemGap$$ = 2.5 * $DvtChartStyleUtils$$.$getDataItemGaps$($chart$$324$$), $stroke$$51$$ = new dvt.$SolidStroke$($DvtChartStyleUtils$$.$getBackgroundColor$($chart$$324$$, $JSCompiler_alias_TRUE$$), 1, $color$$26_gapSize$$1_isDataItemGap$$)
  }else {
    $color$$26_gapSize$$1_isDataItemGap$$ = $DvtChartStyleUtils$$.$getColor$($chart$$324$$, $seriesIndex$$117$$);
    var $lineWidth$$2$$ = $DvtChartStyleUtils$$.$getLineWidth$($chart$$324$$, $seriesIndex$$117$$), $lineStyle$$1$$ = dvt.$Stroke$.$convertTypeString$($DvtChartStyleUtils$$.$getLineStyle$($chart$$324$$, $seriesIndex$$117$$));
    $stroke$$51$$ = new dvt.$SolidStroke$($color$$26_gapSize$$1_isDataItemGap$$, 1, $lineWidth$$2$$);
    $stroke$$51$$.$setStyle$($lineStyle$$1$$)
  }
  var $baseline$$8$$ = $DvtChartDataUtils$$.$isAssignedToY2$($chart$$324$$, $seriesIndex$$117$$) ? $chart$$324$$.$y2Axis$.$getBaselineCoord$() : $chart$$324$$.$yAxis$.$getBaselineCoord$(), $lineType$$5$$ = $DvtChartStyleUtils$$.$getLineType$($chart$$324$$, $seriesIndex$$117$$);
  $DvtChartStyleUtils$$.$isRangeSeries$($chart$$324$$, $seriesIndex$$117$$) ? ($renderLine$$("high"), $renderLine$$("low")) : $renderLine$$("value")
};
$DvtChartPlotAreaRenderer$$.$_filterScatterBubble$ = function $$DvtChartPlotAreaRenderer$$$$_filterScatterBubble$$($chart$$325$$, $availSpace$$76$$) {
  var $pixelMap$$2_seriesCount$$23$$ = $DvtChartDataUtils$$.$getSeriesCount$($chart$$325$$), $groupCount$$10_markerIndex$$ = $DvtChartDataUtils$$.$getGroupCount$($chart$$325$$);
  if(!($pixelMap$$2_seriesCount$$23$$ * $groupCount$$10_markerIndex$$ < $DvtChartPlotAreaRenderer$$.$_FILTER_THRESHOLD_SCATTER_BUBBLE$)) {
    for(var $markerInfo$$1$$, $markerInfos$$ = [], $alpha$$16_dataColor$$12_seriesIndex$$118$$ = 0;$alpha$$16_dataColor$$12_seriesIndex$$118$$ < $pixelMap$$2_seriesCount$$23$$;$alpha$$16_dataColor$$12_seriesIndex$$118$$++) {
      if($DvtChartStyleUtils$$.$isSeriesRendered$($chart$$325$$, $alpha$$16_dataColor$$12_seriesIndex$$118$$)) {
        for(var $dataItem$$35_groupIndex$$75$$ = 0;$dataItem$$35_groupIndex$$75$$ < $groupCount$$10_markerIndex$$;$dataItem$$35_groupIndex$$75$$++) {
          $markerInfo$$1$$ = $DvtChartPlotAreaRenderer$$.$_getMarkerInfo$($chart$$325$$, $alpha$$16_dataColor$$12_seriesIndex$$118$$, $dataItem$$35_groupIndex$$75$$, $availSpace$$76$$), $markerInfo$$1$$ != $JSCompiler_alias_NULL$$ && $markerInfos$$.push($markerInfo$$1$$)
        }
      }
    }
    if(!($markerInfos$$.length < $DvtChartPlotAreaRenderer$$.$_FILTER_THRESHOLD_SCATTER_BUBBLE$)) {
      $DvtChartMarkerUtils$$.$sortMarkers$($markerInfos$$);
      $pixelMap$$2_seriesCount$$23$$ = new dvt.$PixelMap$(25, new dvt.$PixelMap$(5, new dvt.$PixelMap$));
      for($groupCount$$10_markerIndex$$ = $markerInfos$$.length - 1;0 <= $groupCount$$10_markerIndex$$;$groupCount$$10_markerIndex$$--) {
        $markerInfo$$1$$ = $markerInfos$$[$groupCount$$10_markerIndex$$], $alpha$$16_dataColor$$12_seriesIndex$$118$$ = $DvtChartStyleUtils$$.$getColor$($chart$$325$$, $markerInfo$$1$$.$seriesIndex$, $markerInfo$$1$$.$groupIndex$), $alpha$$16_dataColor$$12_seriesIndex$$118$$ = $markerInfo$$1$$.$markerDisplayed$ ? dvt.$ColorUtils$.$getAlpha$($alpha$$16_dataColor$$12_seriesIndex$$118$$) : 0, $dataItem$$35_groupIndex$$75$$ = $DvtChartDataUtils$$.$getDataItem$($chart$$325$$, $markerInfo$$1$$.$seriesIndex$, 
        $markerInfo$$1$$.$groupIndex$), $DvtChartMarkerUtils$$.$checkPixelMap$($pixelMap$$2_seriesCount$$23$$, $markerInfo$$1$$.x, $markerInfo$$1$$.y, $markerInfo$$1$$.size) ? $dataItem$$35_groupIndex$$75$$._filtered = $JSCompiler_alias_TRUE$$ : 0 < $alpha$$16_dataColor$$12_seriesIndex$$118$$ && ($DvtChartMarkerUtils$$.$updatePixelMap$($pixelMap$$2_seriesCount$$23$$, $markerInfo$$1$$.x, $markerInfo$$1$$.y, $markerInfo$$1$$.size, $alpha$$16_dataColor$$12_seriesIndex$$118$$), $dataItem$$35_groupIndex$$75$$._filtered = 
        $JSCompiler_alias_FALSE$$)
      }
      $chart$$325$$.$Cache$.dataFiltered = $JSCompiler_alias_TRUE$$
    }
  }
};
$DvtChartPlotAreaRenderer$$.$_filterPointsForSeries$ = function $$DvtChartPlotAreaRenderer$$$$_filterPointsForSeries$$($chart$$326$$, $seriesIndex$$119$$) {
  var $maxNumPts_setSize$$ = $chart$$326$$.$_plotAreaSpace$.$w$, $seriesItems$$4$$ = $DvtChartDataUtils$$.$getSeriesItem$($chart$$326$$, $seriesIndex$$119$$).items, $axisInfo$$14_i$$375$$ = $chart$$326$$.$xAxis$.$getInfo$(), $maxNumPts_setSize$$ = Math.round(2 * ($seriesItems$$4$$.length / (($axisInfo$$14_i$$375$$.$DataMax$ - $axisInfo$$14_i$$375$$.$DataMin$) / ($axisInfo$$14_i$$375$$.$MaxValue$ - $axisInfo$$14_i$$375$$.$MinValue$))) / $maxNumPts_setSize$$);
  if(2 >= $maxNumPts_setSize$$) {
    for($axisInfo$$14_i$$375$$ = 0;$axisInfo$$14_i$$375$$ < $seriesItems$$4$$.length;$axisInfo$$14_i$$375$$++) {
      ($dataItem$$36$$ = $seriesItems$$4$$[$axisInfo$$14_i$$375$$]) && ($dataItem$$36$$._filtered = $JSCompiler_alias_FALSE$$)
    }
  }else {
    for(var $maxIndex$$1$$, $maxValue$$7$$, $minIndex$$, $minValue$$7$$, $dataItem$$36$$, $dataValue$$1$$, $filtered$$1$$ = $JSCompiler_alias_FALSE$$, $axisInfo$$14_i$$375$$ = 0;$axisInfo$$14_i$$375$$ < $seriesItems$$4$$.length;$axisInfo$$14_i$$375$$ += $maxNumPts_setSize$$) {
      $maxIndex$$1$$ = -1;
      $maxValue$$7$$ = -Infinity;
      $minIndex$$ = -1;
      $minValue$$7$$ = Infinity;
      for(var $j$$62$$ = $axisInfo$$14_i$$375$$;$j$$62$$ < Math.min($axisInfo$$14_i$$375$$ + $maxNumPts_setSize$$, $seriesItems$$4$$.length);$j$$62$$++) {
        $dataValue$$1$$ = $DvtChartDataUtils$$.getValue($chart$$326$$, $seriesIndex$$119$$, $j$$62$$), $dataItem$$36$$ = $seriesItems$$4$$[$j$$62$$], $dataValue$$1$$ == $JSCompiler_alias_NULL$$ || $dataItem$$36$$ == $JSCompiler_alias_NULL$$ || ($dataValue$$1$$ > $maxValue$$7$$ && ($maxIndex$$1$$ = $j$$62$$, $maxValue$$7$$ = $dataValue$$1$$), $dataValue$$1$$ < $minValue$$7$$ && ($minIndex$$ = $j$$62$$, $minValue$$7$$ = $dataValue$$1$$), $filtered$$1$$ = $dataItem$$36$$._filtered = $JSCompiler_alias_TRUE$$)
      }
      for($j$$62$$ = $axisInfo$$14_i$$375$$;$j$$62$$ < Math.min($axisInfo$$14_i$$375$$ + $maxNumPts_setSize$$, $seriesItems$$4$$.length);$j$$62$$++) {
        if($dataItem$$36$$ = $seriesItems$$4$$[$j$$62$$], $dataItem$$36$$ != $JSCompiler_alias_NULL$$ && ($j$$62$$ == $maxIndex$$1$$ || $j$$62$$ == $minIndex$$)) {
          $dataItem$$36$$._filtered = $JSCompiler_alias_FALSE$$
        }
      }
    }
    $chart$$326$$.$Cache$.dataFiltered = $filtered$$1$$
  }
};
$DvtChartPlotAreaRenderer$$.$_isDataItemFiltered$ = function $$DvtChartPlotAreaRenderer$$$$_isDataItemFiltered$$($chart$$327_dataItem$$37$$, $seriesIndex$$120$$, $groupIndex$$76$$) {
  return($chart$$327_dataItem$$37$$ = $DvtChartDataUtils$$.$getDataItem$($chart$$327_dataItem$$37$$, $seriesIndex$$120$$, $groupIndex$$76$$)) && $chart$$327_dataItem$$37$$._filtered ? $JSCompiler_alias_TRUE$$ : $JSCompiler_alias_FALSE$$
};
$DvtChartPlotAreaRenderer$$.$_getCoordsForSeries$ = function $$DvtChartPlotAreaRenderer$$$$_getCoordsForSeries$$($chart$$328$$, $seriesIndex$$121$$, $type$$135$$) {
  var $xAxis$$4$$ = $chart$$328$$.$xAxis$, $yAxis$$4$$ = $chart$$328$$.$yAxis$;
  $DvtChartDataUtils$$.$isAssignedToY2$($chart$$328$$, $seriesIndex$$121$$) && ($yAxis$$4$$ = $chart$$328$$.$y2Axis$);
  for(var $coords$$23$$ = [], $groupIndex$$77$$ = 0;$groupIndex$$77$$ < $DvtChartDataUtils$$.$getGroupCount$($chart$$328$$);$groupIndex$$77$$++) {
    var $coord$$29_group$$26$$ = $DvtChartDataUtils$$.$getGroup$($chart$$328$$, $groupIndex$$77$$), $dataValue$$2_xCoord$$7$$ = $DvtChartDataUtils$$.getValue($chart$$328$$, $seriesIndex$$121$$, $groupIndex$$77$$), $xValue$$3$$ = $DvtChartDataUtils$$.$getXValue$($chart$$328$$, $seriesIndex$$121$$, $groupIndex$$77$$), $yCoord$$5_yValue$$2$$ = $JSCompiler_alias_NULL$$;
    "low" == $type$$135$$ ? $yCoord$$5_yValue$$2$$ = $DvtChartDataUtils$$.$getLowValue$($chart$$328$$, $seriesIndex$$121$$, $groupIndex$$77$$) : "high" == $type$$135$$ ? $yCoord$$5_yValue$$2$$ = $DvtChartDataUtils$$.$getHighValue$($chart$$328$$, $seriesIndex$$121$$, $groupIndex$$77$$) : $dataValue$$2_xCoord$$7$$ != $JSCompiler_alias_NULL$$ && !isNaN($dataValue$$2_xCoord$$7$$) && ($yCoord$$5_yValue$$2$$ = $DvtChartDataUtils$$.$getCumulativeValue$($chart$$328$$, $seriesIndex$$121$$, $groupIndex$$77$$));
    $yCoord$$5_yValue$$2$$ == $JSCompiler_alias_NULL$$ || isNaN($yCoord$$5_yValue$$2$$) || !$DvtChartDataUtils$$.$isBLACItemInViewport$($chart$$328$$, $seriesIndex$$121$$, $groupIndex$$77$$) ? $coords$$23$$.push(new $DvtChartCoord$$($JSCompiler_alias_NULL$$, $JSCompiler_alias_NULL$$, $JSCompiler_alias_NULL$$, $groupIndex$$77$$, $coord$$29_group$$26$$, $JSCompiler_alias_FALSE$$)) : ($DvtChartTypeUtils$$.$isPolar$($chart$$328$$) && ($yCoord$$5_yValue$$2$$ = Math.max($yCoord$$5_yValue$$2$$, $yAxis$$4$$.$getInfo$().$MinValue$)), 
    $dataValue$$2_xCoord$$7$$ = $xAxis$$4$$.$getUnboundedCoordAt$($xValue$$3$$), $yCoord$$5_yValue$$2$$ = $yAxis$$4$$.$getUnboundedCoordAt$($yCoord$$5_yValue$$2$$), $coord$$29_group$$26$$ = new $DvtChartCoord$$($dataValue$$2_xCoord$$7$$, $yCoord$$5_yValue$$2$$, $yCoord$$5_yValue$$2$$, $groupIndex$$77$$, $coord$$29_group$$26$$, $DvtChartPlotAreaRenderer$$.$_isDataItemFiltered$($chart$$328$$, $seriesIndex$$121$$, $groupIndex$$77$$)), $coords$$23$$.push($coord$$29_group$$26$$))
  }
  return $coords$$23$$
};
$DvtChartPlotAreaRenderer$$.$createClippedGroup$ = function $$DvtChartPlotAreaRenderer$$$$createClippedGroup$$($chart$$329_points$$49$$, $clip$$3_container$$65$$, $availSpace$$78_cy$$14$$) {
  var $clipGroup$$4$$ = new dvt.$Container$($clip$$3_container$$65$$.$getCtx$());
  $clip$$3_container$$65$$.$addChild$($clipGroup$$4$$);
  $clip$$3_container$$65$$ = new dvt.$ClipPath$($chart$$329_points$$49$$.getId());
  var $buffer$$10_cx$$13$$ = $DvtChartPlotAreaRenderer$$.$_extendClipGroup$($chart$$329_points$$49$$);
  $DvtChartTypeUtils$$.$isPolar$($chart$$329_points$$49$$) ? ($buffer$$10_cx$$13$$ = $availSpace$$78_cy$$14$$.x + $availSpace$$78_cy$$14$$.$w$ / 2, $availSpace$$78_cy$$14$$ = $availSpace$$78_cy$$14$$.y + $availSpace$$78_cy$$14$$.$h$ / 2, $DvtChartAxisUtils$$.$isGridPolygonal$($chart$$329_points$$49$$) ? ($chart$$329_points$$49$$ = dvt.$PolygonUtils$.$getRegularPolygonPoints$($buffer$$10_cx$$13$$, $availSpace$$78_cy$$14$$, $DvtChartDataUtils$$.$getGroupCount$($chart$$329_points$$49$$), $chart$$329_points$$49$$.$getRadius$()), 
  $clip$$3_container$$65$$.$addPolygon$($chart$$329_points$$49$$)) : $clip$$3_container$$65$$.$addCircle$($buffer$$10_cx$$13$$, $availSpace$$78_cy$$14$$, $chart$$329_points$$49$$.$getRadius$())) : $DvtChartTypeUtils$$.$isHorizontal$($chart$$329_points$$49$$) ? $clip$$3_container$$65$$.$addRect$($availSpace$$78_cy$$14$$.x - $buffer$$10_cx$$13$$, $availSpace$$78_cy$$14$$.y, $availSpace$$78_cy$$14$$.$w$ + 2 * $buffer$$10_cx$$13$$, $availSpace$$78_cy$$14$$.$h$) : $clip$$3_container$$65$$.$addRect$($availSpace$$78_cy$$14$$.x, 
  $availSpace$$78_cy$$14$$.y - $buffer$$10_cx$$13$$, $availSpace$$78_cy$$14$$.$w$, $availSpace$$78_cy$$14$$.$h$ + 2 * $buffer$$10_cx$$13$$);
  $clipGroup$$4$$.$setClipPath$($clip$$3_container$$65$$);
  return $clipGroup$$4$$
};
$DvtChartPlotAreaRenderer$$.$polarToCartesian$ = function $$DvtChartPlotAreaRenderer$$$$polarToCartesian$$($r$$7$$, $theta$$1$$, $availSpace$$79$$) {
  return new dvt.$Point$($availSpace$$79$$.x + $availSpace$$79$$.$w$ / 2 + $r$$7$$ * Math.sin($theta$$1$$), $availSpace$$79$$.y + $availSpace$$79$$.$h$ / 2 - $r$$7$$ * Math.cos($theta$$1$$))
};
$DvtChartPlotAreaRenderer$$.$convertAxisCoord$ = function $$DvtChartPlotAreaRenderer$$$$convertAxisCoord$$($cartesian_chart$$330$$, $coord$$30$$, $availSpace$$80$$) {
  return $DvtChartTypeUtils$$.$isPolar$($cartesian_chart$$330$$) ? ($cartesian_chart$$330$$ = $DvtChartPlotAreaRenderer$$.$polarToCartesian$($coord$$30$$.y, $coord$$30$$.x, $availSpace$$80$$), new dvt.$Point$($cartesian_chart$$330$$.x, $cartesian_chart$$330$$.y)) : $DvtChartTypeUtils$$.$isHorizontal$($cartesian_chart$$330$$) ? new dvt.$Point$($coord$$30$$.y, $coord$$30$$.x) : new dvt.$Point$($coord$$30$$.x, $coord$$30$$.y)
};
$DvtChartPlotAreaRenderer$$.$_extendClipGroup$ = function $$DvtChartPlotAreaRenderer$$$$_extendClipGroup$$($chart$$331$$) {
  if($DvtChartTypeUtils$$.$hasLineSeries$($chart$$331$$) || $DvtChartTypeUtils$$.$hasLineWithAreaSeries$($chart$$331$$)) {
    var $lineWidth$$3$$ = $DvtChartStyleUtils$$.$getLineWidth$($chart$$331$$), $hasEdgeData$$ = function $$hasEdgeData$$$($chart$$331$$) {
      var $hasEdgeData$$ = $chart$$331$$.$getInfo$();
      $chart$$331$$ = $hasEdgeData$$.$getCoordAt$($hasEdgeData$$.$GlobalMax$);
      var $dataMaxCoord$$ = $hasEdgeData$$.$getCoordAt$($hasEdgeData$$.$DataMax$), $globalMinCoord$$ = $hasEdgeData$$.$getCoordAt$($hasEdgeData$$.$GlobalMin$), $hasEdgeData$$ = $hasEdgeData$$.$getCoordAt$($hasEdgeData$$.$DataMin$);
      return $chart$$331$$ != $JSCompiler_alias_NULL$$ && $dataMaxCoord$$ != $JSCompiler_alias_NULL$$ && $dataMaxCoord$$ - $chart$$331$$ <= $lineWidth$$3$$ / 2 || $globalMinCoord$$ != $JSCompiler_alias_NULL$$ && $hasEdgeData$$ != $JSCompiler_alias_NULL$$ && $globalMinCoord$$ - $hasEdgeData$$ <= $lineWidth$$3$$ / 2 ? $JSCompiler_alias_TRUE$$ : $JSCompiler_alias_FALSE$$
    };
    if($chart$$331$$.$yAxis$ && $hasEdgeData$$($chart$$331$$.$yAxis$) || $chart$$331$$.$y2Axis$ && $hasEdgeData$$($chart$$331$$.$y2Axis$)) {
      return Math.ceil($lineWidth$$3$$ / 2)
    }
  }
  return 0
};
var $DvtChartFunnelRenderer$$ = {};
dvt.$Obj$.$createSubclass$($DvtChartFunnelRenderer$$, dvt.$Obj$);
$DvtChartFunnelRenderer$$.$_DEFAULT_3D_GAP_RATIO$ = 1 / 36;
$DvtChartFunnelRenderer$$.$_DEFAULT_2D_GAP_RATIO$ = 1 / 70;
$DvtChartFunnelRenderer$$.$_MAX_WIDTH_FOR_GAPS$ = 0.25;
$DvtChartFunnelRenderer$$.$_GROUP_INDEX$ = 0;
$DvtChartFunnelRenderer$$.$render$ = function $$DvtChartFunnelRenderer$$$$render$$($chart$$332$$, $container$$66_selected$$23$$, $availSpace$$81$$) {
  var $funnelContainer$$ = new dvt.$Container$($chart$$332$$.$getCtx$());
  $funnelContainer$$.$setTranslate$($availSpace$$81$$.x, $availSpace$$81$$.y);
  $container$$66_selected$$23$$.$addChild$($funnelContainer$$);
  $chart$$332$$.$_plotArea$ = $funnelContainer$$;
  var $bbox$$8_dirFactor$$;
  if("horizontal" == $chart$$332$$.$getOptions$().orientation) {
    $bbox$$8_dirFactor$$ = new dvt.$Rectangle$(0, 0, $availSpace$$81$$.$w$, $availSpace$$81$$.$h$)
  }else {
    var $rotationMatrix$$1$$ = new dvt.$Matrix$;
    $bbox$$8_dirFactor$$ = dvt.$Agent$.$isRightToLeft$($chart$$332$$.$getCtx$()) ? -1 : 1;
    $rotationMatrix$$1$$.translate(-$availSpace$$81$$.$h$ / 2, -$availSpace$$81$$.$w$ / 2);
    $rotationMatrix$$1$$.rotate($bbox$$8_dirFactor$$ * Math.PI / 2);
    $rotationMatrix$$1$$.translate($availSpace$$81$$.x + $availSpace$$81$$.$w$ / 2, $availSpace$$81$$.y + $availSpace$$81$$.$h$ / 2);
    $bbox$$8_dirFactor$$ = new dvt.$Rectangle$(0, 0, $availSpace$$81$$.$h$, $availSpace$$81$$.$w$);
    $funnelContainer$$.$setMatrix$($rotationMatrix$$1$$)
  }
  $DvtChartFunnelRenderer$$.$_renderFunnelSlices$($chart$$332$$, $funnelContainer$$, $bbox$$8_dirFactor$$) || $DvtChartRenderer$$.$renderEmptyText$($chart$$332$$, $container$$66_selected$$23$$, $availSpace$$81$$);
  $container$$66_selected$$23$$ = $DvtChartDataUtils$$.$getInitialSelection$($chart$$332$$);
  $DvtChartEventUtils$$.$setInitialSelection$($chart$$332$$, $container$$66_selected$$23$$);
  $chart$$332$$.$highlight$($DvtChartStyleUtils$$.$getHighlightedCategories$($chart$$332$$))
};
$DvtChartFunnelRenderer$$.$_renderFunnelSlices$ = function $$DvtChartFunnelRenderer$$$$_renderFunnelSlices$$($chart$$333$$, $container$$67$$, $availSpace$$82$$) {
  for(var $maxGapSize_options$$110_totalValue$$2$$ = $chart$$333$$.$getOptions$(), $seriesCount$$24_slice$$32_targetValue$$ = $DvtChartDataUtils$$.$getSeriesCount$($chart$$333$$), $gapRatio_gapSize$$2$$ = $DvtChartStyleUtils$$.$getDataItemGaps$($chart$$333$$), $maxGapSize_options$$110_totalValue$$2$$ = Math.min($DvtChartFunnelRenderer$$.$_MAX_WIDTH_FOR_GAPS$ * $availSpace$$82$$.$w$ / ($seriesCount$$24_slice$$32_targetValue$$ - 1), ("on" == $maxGapSize_options$$110_totalValue$$2$$.styleDefaults.threeDEffect ? 
  $DvtChartFunnelRenderer$$.$_DEFAULT_3D_GAP_RATIO$ : $DvtChartFunnelRenderer$$.$_DEFAULT_2D_GAP_RATIO$) * $availSpace$$82$$.$w$), $gapRatio_gapSize$$2$$ = $gapRatio_gapSize$$2$$ * $maxGapSize_options$$110_totalValue$$2$$, $numDrawnSeries$$2$$ = $maxGapSize_options$$110_totalValue$$2$$ = 0, $cumulativeValue$$ = 0, $seriesIndex$$122$$ = 0;$seriesIndex$$122$$ < $seriesCount$$24_slice$$32_targetValue$$;$seriesIndex$$122$$++) {
    if($DvtChartStyleUtils$$.$isDataItemRendered$($chart$$333$$, $seriesIndex$$122$$)) {
      var $value$$124$$ = $DvtChartDataUtils$$.$getTargetValue$($chart$$333$$, $seriesIndex$$122$$);
      $value$$124$$ == $JSCompiler_alias_NULL$$ && ($value$$124$$ = $DvtChartDataUtils$$.getValue($chart$$333$$, $seriesIndex$$122$$, $DvtChartFunnelRenderer$$.$_GROUP_INDEX$));
      0 >= $value$$124$$ || ($maxGapSize_options$$110_totalValue$$2$$ += $value$$124$$)
    }
  }
  if(0 == $maxGapSize_options$$110_totalValue$$2$$) {
    return $JSCompiler_alias_FALSE$$
  }
  for($seriesIndex$$122$$ = $seriesCount$$24_slice$$32_targetValue$$ - 1;0 <= $seriesIndex$$122$$;$seriesIndex$$122$$--) {
    $DvtChartStyleUtils$$.$isDataItemRendered$($chart$$333$$, $seriesIndex$$122$$) && ($value$$124$$ = $DvtChartDataUtils$$.getValue($chart$$333$$, $seriesIndex$$122$$, $DvtChartFunnelRenderer$$.$_GROUP_INDEX$), $seriesCount$$24_slice$$32_targetValue$$ = $DvtChartDataUtils$$.$getTargetValue$($chart$$333$$, $seriesIndex$$122$$), 0 >= $value$$124$$ && $seriesCount$$24_slice$$32_targetValue$$ == $JSCompiler_alias_NULL$$ || $seriesCount$$24_slice$$32_targetValue$$ != $JSCompiler_alias_NULL$$ && 0 >= 
    $seriesCount$$24_slice$$32_targetValue$$ || ($seriesCount$$24_slice$$32_targetValue$$ != $JSCompiler_alias_NULL$$ ? ($cumulativeValue$$ += $seriesCount$$24_slice$$32_targetValue$$ / $maxGapSize_options$$110_totalValue$$2$$, $seriesCount$$24_slice$$32_targetValue$$ = new $DvtChartFunnelSlice$$($chart$$333$$, $seriesIndex$$122$$, $numDrawnSeries$$2$$, $availSpace$$82$$.$w$, $availSpace$$82$$.$h$, 1 - $cumulativeValue$$, $seriesCount$$24_slice$$32_targetValue$$ / $maxGapSize_options$$110_totalValue$$2$$, 
    $value$$124$$ / $seriesCount$$24_slice$$32_targetValue$$, $gapRatio_gapSize$$2$$)) : ($cumulativeValue$$ += $value$$124$$ / $maxGapSize_options$$110_totalValue$$2$$, $seriesCount$$24_slice$$32_targetValue$$ = new $DvtChartFunnelSlice$$($chart$$333$$, $seriesIndex$$122$$, $numDrawnSeries$$2$$, $availSpace$$82$$.$w$, $availSpace$$82$$.$h$, 1 - $cumulativeValue$$, $value$$124$$ / $maxGapSize_options$$110_totalValue$$2$$, $JSCompiler_alias_NULL$$, $gapRatio_gapSize$$2$$)), $numDrawnSeries$$2$$++, 
    $container$$67$$.$addChild$($seriesCount$$24_slice$$32_targetValue$$), $DvtChartObjPeer$associate$$($seriesCount$$24_slice$$32_targetValue$$, $chart$$333$$, $seriesIndex$$122$$, $DvtChartFunnelRenderer$$.$_GROUP_INDEX$)))
  }
  return $JSCompiler_alias_TRUE$$
};
var $DvtChartRefObjRenderer$$ = {};
dvt.$Obj$.$createSubclass$($DvtChartRefObjRenderer$$, dvt.$Obj$);
$DvtChartRefObjRenderer$$.$renderBackgroundObjects$ = function $$DvtChartRefObjRenderer$$$$renderBackgroundObjects$$($chart$$334$$, $container$$68$$, $plotAreaBounds$$5$$) {
  $DvtChartRefObjRenderer$$.$_renderObjects$($chart$$334$$, $container$$68$$, $plotAreaBounds$$5$$, "back")
};
$DvtChartRefObjRenderer$$.$renderForegroundObjects$ = function $$DvtChartRefObjRenderer$$$$renderForegroundObjects$$($chart$$335$$, $container$$69$$, $plotAreaBounds$$6$$) {
  $DvtChartRefObjRenderer$$.$_renderObjects$($chart$$335$$, $container$$69$$, $plotAreaBounds$$6$$, "front")
};
$DvtChartRefObjRenderer$$.$_renderObjects$ = function $$DvtChartRefObjRenderer$$$$_renderObjects$$($chart$$336$$, $container$$70$$, $plotAreaBounds$$7$$, $location$$21$$) {
  $DvtChartRefObjRenderer$$.$_renderObjectsForAxis$($chart$$336$$, $container$$70$$, $plotAreaBounds$$7$$, $location$$21$$, $chart$$336$$.$xAxis$, $DvtChartRefObjUtils$$.$getAxisRefObjs$($chart$$336$$, "x"));
  $DvtChartRefObjRenderer$$.$_renderObjectsForAxis$($chart$$336$$, $container$$70$$, $plotAreaBounds$$7$$, $location$$21$$, $chart$$336$$.$yAxis$, $DvtChartRefObjUtils$$.$getAxisRefObjs$($chart$$336$$, "y"));
  $DvtChartRefObjRenderer$$.$_renderObjectsForAxis$($chart$$336$$, $container$$70$$, $plotAreaBounds$$7$$, $location$$21$$, $chart$$336$$.$y2Axis$, $DvtChartRefObjUtils$$.$getAxisRefObjs$($chart$$336$$, "y2"))
};
$DvtChartRefObjRenderer$$.$_renderObjectsForAxis$ = function $$DvtChartRefObjRenderer$$$$_renderObjectsForAxis$$($chart$$337$$, $container$$71$$, $plotAreaBounds$$8$$, $location$$22$$, $axis$$41$$, $objects$$2$$) {
  if($objects$$2$$ && $axis$$41$$) {
    for(var $i$$376$$ = 0;$i$$376$$ < $objects$$2$$.length;$i$$376$$++) {
      var $refObj$$14_refObjPeer$$ = $objects$$2$$[$i$$376$$];
      if($DvtChartRefObjUtils$$.$isObjectRendered$($chart$$337$$, $refObj$$14_refObjPeer$$) && $refObj$$14_refObjPeer$$ && $DvtChartRefObjUtils$$.$getLocation$($refObj$$14_refObjPeer$$) == $location$$22$$) {
        var $shape$$40$$, $type$$136$$ = $DvtChartRefObjUtils$$.$getType$($refObj$$14_refObjPeer$$);
        "area" == $type$$136$$ ? $shape$$40$$ = $DvtChartRefObjRenderer$$.$_createReferenceArea$($refObj$$14_refObjPeer$$, $chart$$337$$, $plotAreaBounds$$8$$, $axis$$41$$) : "line" == $type$$136$$ && ($shape$$40$$ = $DvtChartRefObjRenderer$$.$_createReferenceLine$($refObj$$14_refObjPeer$$, $chart$$337$$, $plotAreaBounds$$8$$, $axis$$41$$));
        $shape$$40$$ != $JSCompiler_alias_NULL$$ && ($refObj$$14_refObjPeer$$ = new $DvtChartRefObjPeer$$($chart$$337$$, [$shape$$40$$], $refObj$$14_refObjPeer$$, $i$$376$$, $axis$$41$$ == $chart$$337$$.$xAxis$ ? "xAxis" : $axis$$41$$ == $chart$$337$$.$yAxis$ ? "yAxis" : "y2Axis"), $chart$$337$$.$registerObject$($refObj$$14_refObjPeer$$), $chart$$337$$.$getEventManager$().$associate$($shape$$40$$, $refObj$$14_refObjPeer$$), $container$$71$$.$addChild$($shape$$40$$))
      }
    }
  }
};
$DvtChartRefObjRenderer$$.$_createReferenceArea$ = function $$DvtChartRefObjRenderer$$$$_createReferenceArea$$($cy$$15_highVal$$1_pointIndex_refObj$$15$$, $chart$$338_outerPoints_radius$$11$$, $cmds$$9_innerPoints_nSides_pHigh$$1_plotAreaBounds$$9_shape$$41$$, $axis$$42_highCoord$$4$$) {
  var $context$$151_items$$19$$ = $chart$$338_outerPoints_radius$$11$$.$getCtx$(), $color$$27_position$$31$$ = $axis$$42_highCoord$$4$$.$getPosition$(), $bHoriz$$10_cx$$14_lowCoords$$ = "top" == $color$$27_position$$31$$ || "bottom" == $color$$27_position$$31$$, $bRadial_highCoords_pLow$$1$$ = "radial" == $color$$27_position$$31$$, $color$$27_position$$31$$ = $DvtChartRefObjUtils$$.$getColor$($cy$$15_highVal$$1_pointIndex_refObj$$15$$), $lineType$$6_lowCoord$$4_lowVal$$1$$ = $DvtChartRefObjUtils$$.$getLineType$($cy$$15_highVal$$1_pointIndex_refObj$$15$$);
  if($cy$$15_highVal$$1_pointIndex_refObj$$15$$.items != $JSCompiler_alias_NULL$$ && ($axis$$42_highCoord$$4$$ == $chart$$338_outerPoints_radius$$11$$.$yAxis$ || $axis$$42_highCoord$$4$$ == $chart$$338_outerPoints_radius$$11$$.$y2Axis$)) {
    $context$$151_items$$19$$ = $cy$$15_highVal$$1_pointIndex_refObj$$15$$.items;
    $bRadial_highCoords_pLow$$1$$ = [];
    $bHoriz$$10_cx$$14_lowCoords$$ = [];
    if($JSCompiler_StaticMethods_isGroupAxis$$($chart$$338_outerPoints_radius$$11$$.$xAxis$)) {
      for(;$context$$151_items$$19$$.length < $DvtChartDataUtils$$.$getGroupCount$($chart$$338_outerPoints_radius$$11$$);) {
        $context$$151_items$$19$$.push($JSCompiler_alias_NULL$$)
      }
    }
    for($cy$$15_highVal$$1_pointIndex_refObj$$15$$ = 0;$cy$$15_highVal$$1_pointIndex_refObj$$15$$ < $context$$151_items$$19$$.length;$cy$$15_highVal$$1_pointIndex_refObj$$15$$++) {
      var $dataItem$$38_hCoord_hVal$$ = $context$$151_items$$19$$[$cy$$15_highVal$$1_pointIndex_refObj$$15$$], $lCoord_lVal$$ = $DvtChartRefObjUtils$$.$getLowValue$($dataItem$$38_hCoord_hVal$$), $dataItem$$38_hCoord_hVal$$ = $DvtChartRefObjUtils$$.$getHighValue$($dataItem$$38_hCoord_hVal$$);
      if($lCoord_lVal$$ == $JSCompiler_alias_NULL$$ || $dataItem$$38_hCoord_hVal$$ == $JSCompiler_alias_NULL$$) {
        $bRadial_highCoords_pLow$$1$$.push(new $DvtChartCoord$$), $bHoriz$$10_cx$$14_lowCoords$$.push(new $DvtChartCoord$$)
      }else {
        var $lCoord_lVal$$ = $axis$$42_highCoord$$4$$.$getUnboundedCoordAt$($lCoord_lVal$$), $dataItem$$38_hCoord_hVal$$ = $axis$$42_highCoord$$4$$.$getUnboundedCoordAt$($dataItem$$38_hCoord_hVal$$), $xCoord$$8$$ = $chart$$338_outerPoints_radius$$11$$.$xAxis$.$getUnboundedCoordAt$($DvtChartRefObjUtils$$.$getXValue$($chart$$338_outerPoints_radius$$11$$, $context$$151_items$$19$$, $cy$$15_highVal$$1_pointIndex_refObj$$15$$));
        $bRadial_highCoords_pLow$$1$$.push(new $DvtChartCoord$$($xCoord$$8$$, $dataItem$$38_hCoord_hVal$$, $dataItem$$38_hCoord_hVal$$));
        $bHoriz$$10_cx$$14_lowCoords$$.push(new $DvtChartCoord$$($xCoord$$8$$, $lCoord_lVal$$, $lCoord_lVal$$))
      }
    }
    $cmds$$9_innerPoints_nSides_pHigh$$1_plotAreaBounds$$9_shape$$41$$ = new $DvtChartLineArea$$($chart$$338_outerPoints_radius$$11$$, $JSCompiler_alias_TRUE$$, $cmds$$9_innerPoints_nSides_pHigh$$1_plotAreaBounds$$9_shape$$41$$, $JSCompiler_alias_NULL$$, new dvt.$SolidFill$($color$$27_position$$31$$), $JSCompiler_alias_NULL$$, $lineType$$6_lowCoord$$4_lowVal$$1$$, $bRadial_highCoords_pLow$$1$$, $lineType$$6_lowCoord$$4_lowVal$$1$$, $bHoriz$$10_cx$$14_lowCoords$$)
  }else {
    $lineType$$6_lowCoord$$4_lowVal$$1$$ = $DvtChartRefObjUtils$$.$getLowValue$($cy$$15_highVal$$1_pointIndex_refObj$$15$$);
    $cy$$15_highVal$$1_pointIndex_refObj$$15$$ = $DvtChartRefObjUtils$$.$getHighValue$($cy$$15_highVal$$1_pointIndex_refObj$$15$$);
    if($lineType$$6_lowCoord$$4_lowVal$$1$$ == $JSCompiler_alias_NULL$$ || -Infinity == $lineType$$6_lowCoord$$4_lowVal$$1$$) {
      $lineType$$6_lowCoord$$4_lowVal$$1$$ = $axis$$42_highCoord$$4$$.$getInfo$().$GlobalMin$
    }
    if($cy$$15_highVal$$1_pointIndex_refObj$$15$$ == $JSCompiler_alias_NULL$$ || Infinity == $cy$$15_highVal$$1_pointIndex_refObj$$15$$) {
      $cy$$15_highVal$$1_pointIndex_refObj$$15$$ = $axis$$42_highCoord$$4$$.$getInfo$().$GlobalMax$
    }
    $lineType$$6_lowCoord$$4_lowVal$$1$$ = $DvtChartRefObjRenderer$$.$_getAxisCoord$($chart$$338_outerPoints_radius$$11$$, $axis$$42_highCoord$$4$$, $lineType$$6_lowCoord$$4_lowVal$$1$$);
    $axis$$42_highCoord$$4$$ = $DvtChartRefObjRenderer$$.$_getAxisCoord$($chart$$338_outerPoints_radius$$11$$, $axis$$42_highCoord$$4$$, $cy$$15_highVal$$1_pointIndex_refObj$$15$$);
    $DvtChartTypeUtils$$.$isPolar$($chart$$338_outerPoints_radius$$11$$) ? ($bHoriz$$10_cx$$14_lowCoords$$ = $cmds$$9_innerPoints_nSides_pHigh$$1_plotAreaBounds$$9_shape$$41$$.x + $cmds$$9_innerPoints_nSides_pHigh$$1_plotAreaBounds$$9_shape$$41$$.$w$ / 2, $cy$$15_highVal$$1_pointIndex_refObj$$15$$ = $cmds$$9_innerPoints_nSides_pHigh$$1_plotAreaBounds$$9_shape$$41$$.y + $cmds$$9_innerPoints_nSides_pHigh$$1_plotAreaBounds$$9_shape$$41$$.$h$ / 2, $bRadial_highCoords_pLow$$1$$ ? $DvtChartAxisUtils$$.$isGridPolygonal$($chart$$338_outerPoints_radius$$11$$) ? 
    ($cmds$$9_innerPoints_nSides_pHigh$$1_plotAreaBounds$$9_shape$$41$$ = $DvtChartDataUtils$$.$getGroupCount$($chart$$338_outerPoints_radius$$11$$), $chart$$338_outerPoints_radius$$11$$ = dvt.$PolygonUtils$.$getRegularPolygonPoints$($bHoriz$$10_cx$$14_lowCoords$$, $cy$$15_highVal$$1_pointIndex_refObj$$15$$, $cmds$$9_innerPoints_nSides_pHigh$$1_plotAreaBounds$$9_shape$$41$$, $axis$$42_highCoord$$4$$, 1), $cmds$$9_innerPoints_nSides_pHigh$$1_plotAreaBounds$$9_shape$$41$$ = dvt.$PolygonUtils$.$getRegularPolygonPoints$($bHoriz$$10_cx$$14_lowCoords$$, 
    $cy$$15_highVal$$1_pointIndex_refObj$$15$$, $cmds$$9_innerPoints_nSides_pHigh$$1_plotAreaBounds$$9_shape$$41$$, $lineType$$6_lowCoord$$4_lowVal$$1$$, 0), $cmds$$9_innerPoints_nSides_pHigh$$1_plotAreaBounds$$9_shape$$41$$ = dvt.$PathUtils$.$polyline$($chart$$338_outerPoints_radius$$11$$) + dvt.$PathUtils$.$polyline$($cmds$$9_innerPoints_nSides_pHigh$$1_plotAreaBounds$$9_shape$$41$$) + dvt.$PathUtils$.closePath()) : $cmds$$9_innerPoints_nSides_pHigh$$1_plotAreaBounds$$9_shape$$41$$ = dvt.$PathUtils$.moveTo($bHoriz$$10_cx$$14_lowCoords$$, 
    $cy$$15_highVal$$1_pointIndex_refObj$$15$$ - $axis$$42_highCoord$$4$$) + dvt.$PathUtils$.arcTo($axis$$42_highCoord$$4$$, $axis$$42_highCoord$$4$$, Math.PI, 1, $bHoriz$$10_cx$$14_lowCoords$$, $cy$$15_highVal$$1_pointIndex_refObj$$15$$ + $axis$$42_highCoord$$4$$) + dvt.$PathUtils$.arcTo($axis$$42_highCoord$$4$$, $axis$$42_highCoord$$4$$, Math.PI, 1, $bHoriz$$10_cx$$14_lowCoords$$, $cy$$15_highVal$$1_pointIndex_refObj$$15$$ - $axis$$42_highCoord$$4$$) + dvt.$PathUtils$.moveTo($bHoriz$$10_cx$$14_lowCoords$$, 
    $cy$$15_highVal$$1_pointIndex_refObj$$15$$ - $lineType$$6_lowCoord$$4_lowVal$$1$$) + dvt.$PathUtils$.arcTo($lineType$$6_lowCoord$$4_lowVal$$1$$, $lineType$$6_lowCoord$$4_lowVal$$1$$, Math.PI, 0, $bHoriz$$10_cx$$14_lowCoords$$, $cy$$15_highVal$$1_pointIndex_refObj$$15$$ + $lineType$$6_lowCoord$$4_lowVal$$1$$) + dvt.$PathUtils$.arcTo($lineType$$6_lowCoord$$4_lowVal$$1$$, $lineType$$6_lowCoord$$4_lowVal$$1$$, Math.PI, 0, $bHoriz$$10_cx$$14_lowCoords$$, $cy$$15_highVal$$1_pointIndex_refObj$$15$$ - 
    $lineType$$6_lowCoord$$4_lowVal$$1$$) + dvt.$PathUtils$.closePath() : ($chart$$338_outerPoints_radius$$11$$ = $chart$$338_outerPoints_radius$$11$$.$getRadius$(), $bRadial_highCoords_pLow$$1$$ = $DvtChartPlotAreaRenderer$$.$polarToCartesian$($chart$$338_outerPoints_radius$$11$$, $lineType$$6_lowCoord$$4_lowVal$$1$$, $cmds$$9_innerPoints_nSides_pHigh$$1_plotAreaBounds$$9_shape$$41$$), $cmds$$9_innerPoints_nSides_pHigh$$1_plotAreaBounds$$9_shape$$41$$ = $DvtChartPlotAreaRenderer$$.$polarToCartesian$($chart$$338_outerPoints_radius$$11$$, 
    $axis$$42_highCoord$$4$$, $cmds$$9_innerPoints_nSides_pHigh$$1_plotAreaBounds$$9_shape$$41$$), $cmds$$9_innerPoints_nSides_pHigh$$1_plotAreaBounds$$9_shape$$41$$ = dvt.$PathUtils$.moveTo($bHoriz$$10_cx$$14_lowCoords$$, $cy$$15_highVal$$1_pointIndex_refObj$$15$$) + dvt.$PathUtils$.lineTo($bRadial_highCoords_pLow$$1$$.x, $bRadial_highCoords_pLow$$1$$.y) + dvt.$PathUtils$.arcTo($chart$$338_outerPoints_radius$$11$$, $chart$$338_outerPoints_radius$$11$$, $axis$$42_highCoord$$4$$ - $lineType$$6_lowCoord$$4_lowVal$$1$$, 
    dvt.$Agent$.$isRightToLeft$($context$$151_items$$19$$) ? 0 : 1, $cmds$$9_innerPoints_nSides_pHigh$$1_plotAreaBounds$$9_shape$$41$$.x, $cmds$$9_innerPoints_nSides_pHigh$$1_plotAreaBounds$$9_shape$$41$$.y) + dvt.$PathUtils$.lineTo($cmds$$9_innerPoints_nSides_pHigh$$1_plotAreaBounds$$9_shape$$41$$.x, $cmds$$9_innerPoints_nSides_pHigh$$1_plotAreaBounds$$9_shape$$41$$.y) + dvt.$PathUtils$.closePath()), $cmds$$9_innerPoints_nSides_pHigh$$1_plotAreaBounds$$9_shape$$41$$ = new dvt.$Path$($context$$151_items$$19$$, 
    $cmds$$9_innerPoints_nSides_pHigh$$1_plotAreaBounds$$9_shape$$41$$)) : $cmds$$9_innerPoints_nSides_pHigh$$1_plotAreaBounds$$9_shape$$41$$ = new dvt.$Polygon$($context$$151_items$$19$$, $bHoriz$$10_cx$$14_lowCoords$$ ? [$lineType$$6_lowCoord$$4_lowVal$$1$$, 0, $axis$$42_highCoord$$4$$, 0, $axis$$42_highCoord$$4$$, $cmds$$9_innerPoints_nSides_pHigh$$1_plotAreaBounds$$9_shape$$41$$.$h$, $lineType$$6_lowCoord$$4_lowVal$$1$$, $cmds$$9_innerPoints_nSides_pHigh$$1_plotAreaBounds$$9_shape$$41$$.$h$] : 
    [0, $lineType$$6_lowCoord$$4_lowVal$$1$$, 0, $axis$$42_highCoord$$4$$, $cmds$$9_innerPoints_nSides_pHigh$$1_plotAreaBounds$$9_shape$$41$$.$w$, $axis$$42_highCoord$$4$$, $cmds$$9_innerPoints_nSides_pHigh$$1_plotAreaBounds$$9_shape$$41$$.$w$, $lineType$$6_lowCoord$$4_lowVal$$1$$]);
    $cmds$$9_innerPoints_nSides_pHigh$$1_plotAreaBounds$$9_shape$$41$$.$setSolidFill$($color$$27_position$$31$$)
  }
  return $cmds$$9_innerPoints_nSides_pHigh$$1_plotAreaBounds$$9_shape$$41$$
};
$DvtChartRefObjRenderer$$.$_createReferenceLine$ = function $$DvtChartRefObjRenderer$$$$_createReferenceLine$$($lineCoord$$2_refObj$$16_value$$125_xCoord$$9$$, $cartesian$$1_chart$$339_shape$$42$$, $plotAreaBounds$$10$$, $axis$$43_cx$$15$$) {
  var $lineWidth$$4_position$$32_stroke$$52$$ = $axis$$43_cx$$15$$.$getPosition$(), $bHoriz$$11_items$$20$$ = "top" == $lineWidth$$4_position$$32_stroke$$52$$ || "bottom" == $lineWidth$$4_position$$32_stroke$$52$$, $bRadial$$1_coords$$24_points$$51$$ = "radial" == $lineWidth$$4_position$$32_stroke$$52$$, $bTangential_pointIndex$$1$$ = "tangential" == $lineWidth$$4_position$$32_stroke$$52$$, $lineWidth$$4_position$$32_stroke$$52$$ = $DvtChartRefObjUtils$$.$getLineWidth$($lineCoord$$2_refObj$$16_value$$125_xCoord$$9$$), 
  $cy$$16_lineType$$7$$ = $DvtChartRefObjUtils$$.$getLineType$($lineCoord$$2_refObj$$16_value$$125_xCoord$$9$$), $color$$28_context$$152_dataItem$$39_yCoord$$6$$ = $DvtChartRefObjUtils$$.$getColor$($lineCoord$$2_refObj$$16_value$$125_xCoord$$9$$), $lineWidth$$4_position$$32_stroke$$52$$ = new dvt.$SolidStroke$($color$$28_context$$152_dataItem$$39_yCoord$$6$$, 1, $lineWidth$$4_position$$32_stroke$$52$$);
  $lineCoord$$2_refObj$$16_value$$125_xCoord$$9$$.lineStyle && $lineWidth$$4_position$$32_stroke$$52$$.$setStyle$(dvt.$Stroke$.$convertTypeString$($lineCoord$$2_refObj$$16_value$$125_xCoord$$9$$.lineStyle));
  $color$$28_context$$152_dataItem$$39_yCoord$$6$$ = $cartesian$$1_chart$$339_shape$$42$$.$getCtx$();
  if($lineCoord$$2_refObj$$16_value$$125_xCoord$$9$$.items != $JSCompiler_alias_NULL$$ && ($axis$$43_cx$$15$$ == $cartesian$$1_chart$$339_shape$$42$$.$yAxis$ || $axis$$43_cx$$15$$ == $cartesian$$1_chart$$339_shape$$42$$.$y2Axis$)) {
    $bHoriz$$11_items$$20$$ = $lineCoord$$2_refObj$$16_value$$125_xCoord$$9$$.items;
    $bRadial$$1_coords$$24_points$$51$$ = [];
    if($JSCompiler_StaticMethods_isGroupAxis$$($cartesian$$1_chart$$339_shape$$42$$.$xAxis$)) {
      for(;$bHoriz$$11_items$$20$$.length < $DvtChartDataUtils$$.$getGroupCount$($cartesian$$1_chart$$339_shape$$42$$);) {
        $bHoriz$$11_items$$20$$.push($JSCompiler_alias_NULL$$)
      }
    }
    $bRadial$$1_coords$$24_points$$51$$ = [];
    for($bTangential_pointIndex$$1$$ = 0;$bTangential_pointIndex$$1$$ < $bHoriz$$11_items$$20$$.length;$bTangential_pointIndex$$1$$++) {
      $color$$28_context$$152_dataItem$$39_yCoord$$6$$ = $bHoriz$$11_items$$20$$[$bTangential_pointIndex$$1$$], $lineCoord$$2_refObj$$16_value$$125_xCoord$$9$$ = $JSCompiler_alias_NULL$$, $color$$28_context$$152_dataItem$$39_yCoord$$6$$ != $JSCompiler_alias_NULL$$ && (isNaN($color$$28_context$$152_dataItem$$39_yCoord$$6$$) ? $color$$28_context$$152_dataItem$$39_yCoord$$6$$.value != $JSCompiler_alias_NULL$$ && ($lineCoord$$2_refObj$$16_value$$125_xCoord$$9$$ = $color$$28_context$$152_dataItem$$39_yCoord$$6$$.value) : 
      $lineCoord$$2_refObj$$16_value$$125_xCoord$$9$$ = $color$$28_context$$152_dataItem$$39_yCoord$$6$$), $lineCoord$$2_refObj$$16_value$$125_xCoord$$9$$ == $JSCompiler_alias_NULL$$ ? $bRadial$$1_coords$$24_points$$51$$.push(new $DvtChartCoord$$) : ($color$$28_context$$152_dataItem$$39_yCoord$$6$$ = $axis$$43_cx$$15$$.$getUnboundedCoordAt$($lineCoord$$2_refObj$$16_value$$125_xCoord$$9$$), $lineCoord$$2_refObj$$16_value$$125_xCoord$$9$$ = $cartesian$$1_chart$$339_shape$$42$$.$xAxis$.$getUnboundedCoordAt$($DvtChartRefObjUtils$$.$getXValue$($cartesian$$1_chart$$339_shape$$42$$, 
      $bHoriz$$11_items$$20$$, $bTangential_pointIndex$$1$$)), $bRadial$$1_coords$$24_points$$51$$.push(new $DvtChartCoord$$($lineCoord$$2_refObj$$16_value$$125_xCoord$$9$$, $color$$28_context$$152_dataItem$$39_yCoord$$6$$, $color$$28_context$$152_dataItem$$39_yCoord$$6$$)))
    }
    $cartesian$$1_chart$$339_shape$$42$$ = new $DvtChartLineArea$$($cartesian$$1_chart$$339_shape$$42$$, $JSCompiler_alias_FALSE$$, $plotAreaBounds$$10$$, $JSCompiler_alias_NULL$$, $JSCompiler_alias_NULL$$, $lineWidth$$4_position$$32_stroke$$52$$, $cy$$16_lineType$$7$$, $bRadial$$1_coords$$24_points$$51$$)
  }else {
    if($lineCoord$$2_refObj$$16_value$$125_xCoord$$9$$.value) {
      $lineCoord$$2_refObj$$16_value$$125_xCoord$$9$$ = $DvtChartRefObjRenderer$$.$_getAxisCoord$($cartesian$$1_chart$$339_shape$$42$$, $axis$$43_cx$$15$$, $lineCoord$$2_refObj$$16_value$$125_xCoord$$9$$.value);
      if($lineCoord$$2_refObj$$16_value$$125_xCoord$$9$$ == $JSCompiler_alias_NULL$$ || Infinity == $lineCoord$$2_refObj$$16_value$$125_xCoord$$9$$ || -Infinity == $lineCoord$$2_refObj$$16_value$$125_xCoord$$9$$) {
        return $JSCompiler_alias_NULL$$
      }
      $axis$$43_cx$$15$$ = $plotAreaBounds$$10$$.x + $plotAreaBounds$$10$$.$w$ / 2;
      $cy$$16_lineType$$7$$ = $plotAreaBounds$$10$$.y + $plotAreaBounds$$10$$.$h$ / 2;
      $bRadial$$1_coords$$24_points$$51$$ ? ($DvtChartAxisUtils$$.$isGridPolygonal$($cartesian$$1_chart$$339_shape$$42$$) ? ($bRadial$$1_coords$$24_points$$51$$ = dvt.$PolygonUtils$.$getRegularPolygonPoints$($axis$$43_cx$$15$$, $cy$$16_lineType$$7$$, $DvtChartDataUtils$$.$getGroupCount$($cartesian$$1_chart$$339_shape$$42$$), $lineCoord$$2_refObj$$16_value$$125_xCoord$$9$$), $cartesian$$1_chart$$339_shape$$42$$ = new dvt.$Polygon$($color$$28_context$$152_dataItem$$39_yCoord$$6$$, $bRadial$$1_coords$$24_points$$51$$)) : 
      $cartesian$$1_chart$$339_shape$$42$$ = new dvt.$Circle$($color$$28_context$$152_dataItem$$39_yCoord$$6$$, $axis$$43_cx$$15$$, $cy$$16_lineType$$7$$, $lineCoord$$2_refObj$$16_value$$125_xCoord$$9$$), $cartesian$$1_chart$$339_shape$$42$$.$setFill$($JSCompiler_alias_NULL$$)) : $bTangential_pointIndex$$1$$ ? ($cartesian$$1_chart$$339_shape$$42$$ = $DvtChartPlotAreaRenderer$$.$polarToCartesian$($cartesian$$1_chart$$339_shape$$42$$.$getRadius$(), $lineCoord$$2_refObj$$16_value$$125_xCoord$$9$$, $plotAreaBounds$$10$$), 
      $cartesian$$1_chart$$339_shape$$42$$ = new dvt.$Line$($color$$28_context$$152_dataItem$$39_yCoord$$6$$, $axis$$43_cx$$15$$, $cy$$16_lineType$$7$$, $cartesian$$1_chart$$339_shape$$42$$.x, $cartesian$$1_chart$$339_shape$$42$$.y)) : ($cartesian$$1_chart$$339_shape$$42$$ = $bHoriz$$11_items$$20$$ ? new dvt.$Line$($color$$28_context$$152_dataItem$$39_yCoord$$6$$, $lineCoord$$2_refObj$$16_value$$125_xCoord$$9$$, 0, $lineCoord$$2_refObj$$16_value$$125_xCoord$$9$$, $plotAreaBounds$$10$$.$h$) : new dvt.$Line$($color$$28_context$$152_dataItem$$39_yCoord$$6$$, 
      0, $lineCoord$$2_refObj$$16_value$$125_xCoord$$9$$, $plotAreaBounds$$10$$.$w$, $lineCoord$$2_refObj$$16_value$$125_xCoord$$9$$), $cartesian$$1_chart$$339_shape$$42$$.$setPixelHinting$());
      $cartesian$$1_chart$$339_shape$$42$$.$setStroke$($lineWidth$$4_position$$32_stroke$$52$$)
    }else {
      return $JSCompiler_alias_NULL$$
    }
  }
  return $cartesian$$1_chart$$339_shape$$42$$
};
$DvtChartRefObjRenderer$$.$_getAxisCoord$ = function $$DvtChartRefObjRenderer$$$$_getAxisCoord$$($chart$$340_index$$141$$, $axis$$44$$, $value$$126$$) {
  return $JSCompiler_StaticMethods_isGroupAxis$$($axis$$44$$) && ($chart$$340_index$$141$$ = $DvtChartDataUtils$$.$getGroupIndex$($chart$$340_index$$141$$, $value$$126$$), 0 <= $chart$$340_index$$141$$) ? $axis$$44$$.$getUnboundedCoordAt$($chart$$340_index$$141$$) : !isNaN($value$$126$$) ? $axis$$44$$.$getUnboundedCoordAt$($value$$126$$) : $JSCompiler_alias_NULL$$
};
dvt.$SparkChart$ = $JSCompiler_emptyFn$$();
$goog$exportPath_$$("dvt.SparkChart", dvt.$SparkChart$);
dvt.$Obj$.$createSubclass$(dvt.$SparkChart$, dvt.$BaseComponent$);
dvt.$SparkChart$.newInstance = function $dvt$$SparkChart$$newInstance$($context$$153$$, $callback$$59$$, $callbackObj$$31$$) {
  var $sparkChart$$ = new dvt.$SparkChart$;
  $sparkChart$$.Init($context$$153$$, $callback$$59$$, $callbackObj$$31$$);
  return $sparkChart$$
};
dvt.$SparkChart$.newInstance = dvt.$SparkChart$.newInstance;
dvt.$SparkChart$.$getDefaults$ = function $dvt$$SparkChart$$$getDefaults$$($skin$$6$$) {
  return(new $DvtSparkChartDefaults$$).$getDefaults$($skin$$6$$)
};
dvt.$SparkChart$.getDefaults = dvt.$SparkChart$.$getDefaults$;
dvt.$SparkChart$.prototype.Init = function $dvt$$SparkChart$$$Init$($context$$154$$, $callback$$60$$, $callbackObj$$32$$) {
  dvt.$SparkChart$.$superclass$.Init.call(this, $context$$154$$, $callback$$60$$, $callbackObj$$32$$);
  this.$Defaults$ = new $DvtSparkChartDefaults$$;
  this.$_eventManager$ = new $DvtSparkChartEventManager$$(this);
  this.$_eventManager$.$addListeners$(this);
  this.$_chart$ = dvt.$Chart$.newInstance($context$$154$$, this.$_onRenderEnd$, this);
  this.$addChild$(this.$_chart$);
  dvt.$Agent$.$isTouchDevice$() || this.$_eventManager$.$setKeyboardHandler$(new dvt.$KeyboardHandler$(this.$_eventManager$, this));
  this.$_tooltipMask$ = new dvt.$Rect$($context$$154$$);
  this.$addChild$(this.$_tooltipMask$);
  this.setId("sparkChart1000" + Math.floor(1E9 * Math.random()))
};
dvt.$SparkChart$.prototype.$SetOptions$ = function $dvt$$SparkChart$$$$SetOptions$$($options$$111$$) {
  $options$$111$$ ? (this.$Options$ = this.$Defaults$.$calcOptions$($options$$111$$), dvt.$Agent$.$isEnvironmentBrowser$() || (this.$Options$.animationOnDisplay = "none", this.$Options$.animationOnDataChange = "none")) : this.$Options$ || (this.$Options$ = this.$GetDefaults$())
};
dvt.$SparkChart$.prototype.setId = function $dvt$$SparkChart$$$setId$($id$$103$$) {
  dvt.$SparkChart$.$superclass$.setId.call(this, $id$$103$$);
  this.$_chart$ && this.$_chart$.setId($id$$103$$ + "chart")
};
dvt.$SparkChart$.prototype.$render$ = function $dvt$$SparkChart$$$$render$$($options$$112_tooltip$$12$$, $width$$44$$, $height$$38$$) {
  this.$SetOptions$($options$$112_tooltip$$12$$);
  !isNaN($width$$44$$) && !isNaN($height$$38$$) && (this.$Width$ = $width$$44$$, this.$Height$ = $height$$38$$);
  this.$_isDoneRendering$ = this.$_eventReceived$ = $JSCompiler_alias_FALSE$$;
  $DvtSparkChartRenderer$$.$render$(this, this.$Width$, this.$Height$);
  $options$$112_tooltip$$12$$ = this.$Options$.shortDesc;
  this.$_tooltipMask$.$setWidth$(this.$Width$);
  this.$_tooltipMask$.$setHeight$(this.$Height$);
  this.$_tooltipMask$.$setInvisibleFill$();
  $options$$112_tooltip$$12$$ ? (this.$_peer$ = new dvt.$SimpleObjPeer$($JSCompiler_alias_NULL$$, $options$$112_tooltip$$12$$, this.$Options$.color), this.$_eventManager$.$associate$(this.$_tooltipMask$, this.$_peer$)) : this.$_peer$ = $JSCompiler_alias_NULL$$;
  this.$Options$._selectingCursor && this.setCursor("pointer");
  this.$UpdateAriaAttributes$();
  this.$_eventReceived$ && this.$RenderComplete$();
  this.$_isDoneRendering$ = $JSCompiler_alias_TRUE$$
};
dvt.$SparkChart$.prototype.render = dvt.$SparkChart$.prototype.$render$;
dvt.$SparkChart$.prototype.$_onRenderEnd$ = function $dvt$$SparkChart$$$$_onRenderEnd$$($event$$232$$) {
  this.$_eventReceived$ = $JSCompiler_alias_TRUE$$;
  "ready" == $event$$232$$.type && this.$_isDoneRendering$ && this.$RenderComplete$()
};
dvt.$SparkChart$.prototype.$getAutomation$ = function $dvt$$SparkChart$$$$getAutomation$$() {
  return new $DvtSparkChartAutomation$$(this)
};
dvt.$SparkChart$.prototype.getAutomation = dvt.$SparkChart$.prototype.$getAutomation$;
dvt.$SparkChart$.prototype.$GetComponentDescription$ = function $dvt$$SparkChart$$$$GetComponentDescription$$() {
  return dvt.$Bundle$.$getTranslation$(this.$getOptions$(), "componentName", dvt.$Bundle$.$UTIL_PREFIX$, "CHART")
};
dvt.$SparkChart$.prototype.$UpdateAriaAttributes$ = function $dvt$$SparkChart$$$$UpdateAriaAttributes$$() {
  var $desc$$15$$ = dvt.$Displayable$.$generateAriaLabel$(dvt.$StringUtils$.$processAriaLabel$(this.$GetComponentDescription$()), this.$Options$.shortDesc ? [this.$Options$.shortDesc] : $JSCompiler_alias_NULL$$);
  this.$IsParentRoot$() ? (this.$getCtx$().$setAriaRole$("img"), this.$getCtx$().$setAriaLabel$(dvt.$Bundle$.$getTranslatedString$(dvt.$Bundle$.$UTIL_PREFIX$, "COLON_SEP_LIST", [dvt.$Bundle$.$getTranslatedString$(dvt.$Bundle$.$UTIL_PREFIX$, "DATA_VISUALIZATION"), $desc$$15$$]))) : (this.$setAriaRole$("img"), this.$setAriaProperty$("label", $desc$$15$$))
};
dvt.$SparkChart$.prototype.$getEventManager$ = $JSCompiler_get$$("$_eventManager$");
dvt.$SparkChart$.prototype.$__getLogicalObject$ = $JSCompiler_get$$("$_peer$");
function $DvtSparkChartAutomation$$($dvtComponent$$5$$) {
  this.$_sparkChart$ = $dvtComponent$$5$$
}
$goog$exportPath_$$("DvtSparkChartAutomation", $DvtSparkChartAutomation$$);
dvt.$Obj$.$createSubclass$($DvtSparkChartAutomation$$, dvt.$Automation$);
$DvtSparkChartAutomation$$.prototype.$getDataItem$ = function $$DvtSparkChartAutomation$$$$$getDataItem$$($dataItem$$40_itemIndex$$8$$) {
  return($dataItem$$40_itemIndex$$8$$ = this.$_sparkChart$.$_chart$.$getAutomation$().$getDataItem$(0, $dataItem$$40_itemIndex$$8$$)) ? {borderColor:$dataItem$$40_itemIndex$$8$$.borderColor, color:$dataItem$$40_itemIndex$$8$$.color, date:$dataItem$$40_itemIndex$$8$$.x, low:$dataItem$$40_itemIndex$$8$$.low, high:$dataItem$$40_itemIndex$$8$$.high, value:$dataItem$$40_itemIndex$$8$$.low == $JSCompiler_alias_NULL$$ || $dataItem$$40_itemIndex$$8$$.high == $JSCompiler_alias_NULL$$ ? $dataItem$$40_itemIndex$$8$$.value : 
  $dataItem$$40_itemIndex$$8$$.high - $dataItem$$40_itemIndex$$8$$.low} : $JSCompiler_alias_NULL$$
};
$DvtSparkChartAutomation$$.prototype.getDataItem = $DvtSparkChartAutomation$$.prototype.$getDataItem$;
function $DvtSparkChartDefaults$$() {
  this.Init({skyros:$DvtSparkChartDefaults$VERSION_1$$, alta:$DvtSparkChartDefaults$SKIN_ALTA$$})
}
dvt.$Obj$.$createSubclass$($DvtSparkChartDefaults$$, dvt.$BaseComponentDefaults$);
var $DvtSparkChartDefaults$SKIN_ALTA$$ = {skin:dvt.$CSSStyle$.$SKIN_ALTA$, color:"#267db3"}, $DvtSparkChartDefaults$VERSION_1$$ = {skin:dvt.$CSSStyle$.$SKIN_SKYROS$, type:"line", animationOnDisplay:"none", animationOnDataChange:"none", emptyText:$JSCompiler_alias_NULL$$, color:"#666699", firstColor:$JSCompiler_alias_NULL$$, lastColor:$JSCompiler_alias_NULL$$, highColor:$JSCompiler_alias_NULL$$, lowColor:$JSCompiler_alias_NULL$$, visualEffects:"auto", baselineScaling:"min", barSpacing:"auto", lineWidth:1, 
lineStyle:"solid", lineType:"straight", markerSize:5, markerShape:"auto", barGapRatio:0.25, _statusMessageStyle:new dvt.$CSSStyle$("font-size: 12px; color: #404259;")};
function $DvtSparkChartEventManager$$($sparkChart$$1$$) {
  this.Init($sparkChart$$1$$.$getCtx$(), $sparkChart$$1$$.dispatchEvent, $sparkChart$$1$$);
  this.$_sparkChart$ = $sparkChart$$1$$
}
dvt.$Obj$.$createSubclass$($DvtSparkChartEventManager$$, dvt.$EventManager$);
$DvtSparkChartEventManager$$.prototype.$ProcessKeyboardEvent$ = function $$DvtSparkChartEventManager$$$$$ProcessKeyboardEvent$$($event$$233$$) {
  if(!this.$KeyboardHandler$) {
    return $JSCompiler_alias_FALSE$$
  }
  if($event$$233$$.keyCode == dvt.$KeyboardEvent$.$TAB$) {
    var $pos$$41$$ = this.$_sparkChart$.$getCtx$().$getStageAbsolutePosition$();
    this.$ProcessObjectTooltip$($event$$233$$, $pos$$41$$.x, $pos$$41$$.y, this.$_sparkChart$.$__getLogicalObject$(), this.$_sparkChart$)
  }
  return $JSCompiler_alias_FALSE$$
};
$DvtSparkChartEventManager$$.prototype.$OnBlur$ = function $$DvtSparkChartEventManager$$$$$OnBlur$$($event$$234$$) {
  $DvtSparkChartEventManager$$.$superclass$.$OnBlur$.call(this, $event$$234$$);
  this.$hideTooltip$()
};
var $DvtSparkChartRenderer$$ = {};
dvt.$Obj$.$createSubclass$($DvtSparkChartRenderer$$, dvt.$Obj$);
$DvtSparkChartRenderer$$.$render$ = function $$DvtSparkChartRenderer$$$$render$$($items$$21_spark$$, $width$$45$$, $height$$39$$) {
  var $chart$$342$$ = $items$$21_spark$$.$_chart$, $chartOptions$$1$$ = $DvtSparkChartRenderer$$.$_convertOptionsObj$($items$$21_spark$$), $markerGap_options$$113$$ = $items$$21_spark$$.$getOptions$();
  if("area" == $markerGap_options$$113$$.type || "line" == $markerGap_options$$113$$.type || "lineWithArea" == $markerGap_options$$113$$.type) {
    $items$$21_spark$$ = $DvtSparkChartRenderer$$.$_getDataItems$($items$$21_spark$$);
    var $hasMarkers$$ = $JSCompiler_alias_FALSE$$;
    if($markerGap_options$$113$$.firstColor || $markerGap_options$$113$$.lastColor || $markerGap_options$$113$$.highColor || $markerGap_options$$113$$.lowColor) {
      $hasMarkers$$ = $JSCompiler_alias_TRUE$$
    }else {
      for(var $i$$377$$ = 0;$i$$377$$ < $items$$21_spark$$.length;$i$$377$$++) {
        if($items$$21_spark$$[$i$$377$$] && "on" == $items$$21_spark$$[$i$$377$$].markerDisplayed) {
          $hasMarkers$$ = $JSCompiler_alias_TRUE$$;
          break
        }
      }
    }
    if($hasMarkers$$ && 0 < $items$$21_spark$$.length || "none" == $markerGap_options$$113$$.lineType) {
      $markerGap_options$$113$$ = $markerGap_options$$113$$.markerSize / 2, $width$$45$$ -= 2 * $markerGap_options$$113$$, $height$$39$$ -= 2 * $markerGap_options$$113$$, $chart$$342$$.$setTranslate$($markerGap_options$$113$$, $markerGap_options$$113$$)
    }
  }
  $chart$$342$$.$render$($chartOptions$$1$$, $width$$45$$, $height$$39$$)
};
$DvtSparkChartRenderer$$.$_getDataItems$ = function $$DvtSparkChartRenderer$$$$_getDataItems$$($options$$114_spark$$1$$) {
  return($options$$114_spark$$1$$ = $options$$114_spark$$1$$.$getOptions$()) && $options$$114_spark$$1$$.items ? $options$$114_spark$$1$$.items : []
};
$DvtSparkChartRenderer$$.$_convertOptionsObj$ = function $$DvtSparkChartRenderer$$$$_convertOptionsObj$$($items$$22_spark$$2$$) {
  var $options$$115$$ = $items$$22_spark$$2$$.$getOptions$(), $chartOptions$$2$$ = {styleDefaults:{}, xAxis:{}, yAxis:{}, groups:[]};
  $chartOptions$$2$$.translations = $options$$115$$.translations;
  var $bFloatingBar_zeroBaseline$$1$$ = "floatingBar" == $options$$115$$.type, $axisGap$$1_barSpacing_chartItems$$ = [], $highIndex$$ = -1, $lowIndex$$ = -1, $highValue$$2$$ = -Infinity, $lowValue$$2$$ = Infinity;
  $items$$22_spark$$2$$ = $DvtSparkChartRenderer$$.$_getDataItems$($items$$22_spark$$2$$);
  for(var $i$$378$$ = 0;$i$$378$$ < $items$$22_spark$$2$$.length;$i$$378$$++) {
    var $item$$17_topValue$$ = $items$$22_spark$$2$$[$i$$378$$], $baseValue_chartItem$$ = {};
    $item$$17_topValue$$ instanceof Object ? ($bFloatingBar_zeroBaseline$$1$$ ? ($baseValue_chartItem$$.low = $item$$17_topValue$$.floatValue, $baseValue_chartItem$$.high = $item$$17_topValue$$.floatValue + $item$$17_topValue$$.value) : ($baseValue_chartItem$$.value = $item$$17_topValue$$.value, $baseValue_chartItem$$.low = $item$$17_topValue$$.low, $baseValue_chartItem$$.high = $item$$17_topValue$$.high), $item$$17_topValue$$.date && ($chartOptions$$2$$.timeAxisType = "enabled", $chartOptions$$2$$.groups.push($item$$17_topValue$$.date)), 
    "on" == $item$$17_topValue$$.markerDisplayed && ($baseValue_chartItem$$.markerDisplayed = "on"), $item$$17_topValue$$.color && ($baseValue_chartItem$$.color = $item$$17_topValue$$.color), $item$$17_topValue$$.borderColor && ($baseValue_chartItem$$.borderColor = $item$$17_topValue$$.borderColor), $item$$17_topValue$$.markerShape && ($baseValue_chartItem$$.markerShape = $item$$17_topValue$$.markerShape), $item$$17_topValue$$.markerSize && ($baseValue_chartItem$$.markerSize = $item$$17_topValue$$.markerSize)) : 
    $baseValue_chartItem$$.value = $item$$17_topValue$$;
    $axisGap$$1_barSpacing_chartItems$$.push($baseValue_chartItem$$);
    $item$$17_topValue$$ = $baseValue_chartItem$$.value != $JSCompiler_alias_NULL$$ ? $baseValue_chartItem$$.value : Math.max($baseValue_chartItem$$.low, $baseValue_chartItem$$.high);
    $highValue$$2$$ < $item$$17_topValue$$ && ($highValue$$2$$ = $item$$17_topValue$$, $highIndex$$ = $i$$378$$);
    $baseValue_chartItem$$ = $baseValue_chartItem$$.value != $JSCompiler_alias_NULL$$ ? $baseValue_chartItem$$.value : Math.min($baseValue_chartItem$$.low, $baseValue_chartItem$$.high);
    $lowValue$$2$$ > $baseValue_chartItem$$ && ($lowValue$$2$$ = $baseValue_chartItem$$, $lowIndex$$ = $i$$378$$)
  }
  $options$$115$$.highColor && 0 <= $highIndex$$ && ($axisGap$$1_barSpacing_chartItems$$[$highIndex$$].markerDisplayed = "on", $axisGap$$1_barSpacing_chartItems$$[$highIndex$$].color || ($axisGap$$1_barSpacing_chartItems$$[$highIndex$$].color = $options$$115$$.highColor));
  $options$$115$$.lowColor && 0 <= $lowIndex$$ && ($axisGap$$1_barSpacing_chartItems$$[$lowIndex$$].markerDisplayed = "on", $axisGap$$1_barSpacing_chartItems$$[$lowIndex$$].color || ($axisGap$$1_barSpacing_chartItems$$[$lowIndex$$].color = $options$$115$$.lowColor));
  $options$$115$$.firstColor && 0 < $axisGap$$1_barSpacing_chartItems$$.length && ($axisGap$$1_barSpacing_chartItems$$[0].markerDisplayed = "on", $axisGap$$1_barSpacing_chartItems$$[0].color || ($axisGap$$1_barSpacing_chartItems$$[0].color = $options$$115$$.firstColor));
  $options$$115$$.lastColor && 0 < $axisGap$$1_barSpacing_chartItems$$.length && ($axisGap$$1_barSpacing_chartItems$$[$axisGap$$1_barSpacing_chartItems$$.length - 1].markerDisplayed = "on", $axisGap$$1_barSpacing_chartItems$$[$axisGap$$1_barSpacing_chartItems$$.length - 1].color || ($axisGap$$1_barSpacing_chartItems$$[$axisGap$$1_barSpacing_chartItems$$.length - 1].color = $options$$115$$.lastColor));
  $chartOptions$$2$$.series = [{items:$axisGap$$1_barSpacing_chartItems$$, areaColor:$options$$115$$.areaColor}];
  $options$$115$$.referenceObjects && ($chartOptions$$2$$.yAxis.referenceObjects = $options$$115$$.referenceObjects);
  $chartOptions$$2$$.__spark = $JSCompiler_alias_TRUE$$;
  $axisGap$$1_barSpacing_chartItems$$ = $options$$115$$.barSpacing;
  "auto" == $axisGap$$1_barSpacing_chartItems$$ && ($axisGap$$1_barSpacing_chartItems$$ = 1 < dvt.$Agent$.$getDevicePixelRatio$() ? "subpixel" : "pixel");
  $chartOptions$$2$$.__sparkBarSpacing = $axisGap$$1_barSpacing_chartItems$$;
  $chartOptions$$2$$.type = $bFloatingBar_zeroBaseline$$1$$ ? "bar" : $options$$115$$.type;
  $chartOptions$$2$$.animationOnDataChange = $options$$115$$.animationOnDataChange;
  $chartOptions$$2$$.animationOnDisplay = $options$$115$$.animationOnDisplay;
  $chartOptions$$2$$.emptyText = $options$$115$$.emptyText;
  $chartOptions$$2$$.styleDefaults.colors = [$options$$115$$.color];
  $chartOptions$$2$$.styleDefaults.animationDuration = $options$$115$$.animationDuration;
  $chartOptions$$2$$.styleDefaults.animationIndicators = "none";
  $chartOptions$$2$$.styleDefaults.lineWidth = $options$$115$$.lineWidth;
  $chartOptions$$2$$.styleDefaults.lineStyle = $options$$115$$.lineStyle;
  $chartOptions$$2$$.styleDefaults.lineType = $options$$115$$.lineType;
  $chartOptions$$2$$.styleDefaults.markerSize = $options$$115$$.markerSize;
  $chartOptions$$2$$.styleDefaults.markerShape = $options$$115$$.markerShape;
  $chartOptions$$2$$.styleDefaults.barGapRatio = $options$$115$$.barGapRatio;
  $chartOptions$$2$$.styleDefaults.dataItemGaps = "0%";
  $chartOptions$$2$$.xAxis.rendered = "off";
  $chartOptions$$2$$.yAxis.rendered = "off";
  $bFloatingBar_zeroBaseline$$1$$ = "zero" == $options$$115$$.baselineScaling;
  $axisGap$$1_barSpacing_chartItems$$ = $highValue$$2$$ != $lowValue$$2$$ ? 0.1 * ($highValue$$2$$ - $lowValue$$2$$) : 0.1 * Math.abs($highValue$$2$$);
  $chartOptions$$2$$.yAxis.min = $bFloatingBar_zeroBaseline$$1$$ && 0 <= $lowValue$$2$$ ? 0 : $lowValue$$2$$ - $axisGap$$1_barSpacing_chartItems$$;
  $chartOptions$$2$$.yAxis.max = $bFloatingBar_zeroBaseline$$1$$ && 0 >= $highValue$$2$$ ? 0 : $highValue$$2$$ + $axisGap$$1_barSpacing_chartItems$$;
  $chartOptions$$2$$.styleDefaults.seriesEffect = "none" == $options$$115$$.visualEffects || !("area" == $options$$115$$.type || "lineWithArea" == $options$$115$$.type) ? "color" : "gradient";
  $chartOptions$$2$$.layout = {gapWidthRatio:0, gapHeightRatio:0};
  $chartOptions$$2$$.legend = {rendered:"off"};
  $chartOptions$$2$$._statusMessageStyle = $options$$115$$._statusMessageStyle;
  return $chartOptions$$2$$
};

  return dvt;
});

/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
define(['./DvtToolkit', './DvtPanZoomCanvas'], function(dvt) {
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

dvt.$AmxThematicMap$ = function $dvt$$AmxThematicMap$$($context$$367$$, $callback$$112$$, $callbackObj$$79$$) {
  this.Init($context$$367$$, $callback$$112$$, $callbackObj$$79$$)
};
$goog$exportPath_$$("dvt.AmxThematicMap", dvt.$AmxThematicMap$);
dvt.$Obj$.$createSubclass$(dvt.$AmxThematicMap$, dvt.$Container$);
dvt.$AmxThematicMap$.$_LEGEND_COMPONET_GAP$ = 10;
dvt.$AmxThematicMap$.prototype.Init = function $dvt$$AmxThematicMap$$$Init$($context$$368$$, $callback$$113$$, $callbackObj$$80$$) {
  dvt.$AmxThematicMap$.$superclass$.Init.call(this, $context$$368$$);
  this.$_tmap$ = new dvt.$ThematicMap$($context$$368$$, $callback$$113$$, $callbackObj$$80$$);
  this.$_tmapContainer$ = new dvt.$Container$($context$$368$$);
  this.$_tmapContainer$.$addChild$(this.$_tmap$);
  this.$addChild$(this.$_tmapContainer$);
  this.$Defaults$ = new $DvtThematicMapDefaults$$
};
dvt.$AmxThematicMap$.newInstance = function $dvt$$AmxThematicMap$$newInstance$($context$$369$$, $callback$$114$$, $callbackObj$$81$$) {
  return new dvt.$AmxThematicMap$($context$$369$$, $callback$$114$$, $callbackObj$$81$$)
};
dvt.$AmxThematicMap$.newInstance = dvt.$AmxThematicMap$.newInstance;
dvt.$AmxThematicMap$.prototype.$render$ = function $dvt$$AmxThematicMap$$$$render$$($options$$253$$, $availSpace$$123_width$$121$$, $height$$105$$) {
  this.$Options$ = this.$Defaults$.$calcOptions$($options$$253$$);
  this.$_width$ = $availSpace$$123_width$$121$$;
  this.$_height$ = $height$$105$$;
  $availSpace$$123_width$$121$$ = new dvt.$Rectangle$(0, 0, $availSpace$$123_width$$121$$, $height$$105$$);
  this.$_renderLegend$(this, $availSpace$$123_width$$121$$);
  this.$_tmap$.$render$($options$$253$$, $availSpace$$123_width$$121$$.$w$, $availSpace$$123_width$$121$$.$h$)
};
dvt.$AmxThematicMap$.prototype.render = dvt.$AmxThematicMap$.prototype.$render$;
dvt.$AmxThematicMap$.prototype.$_renderLegend$ = function $dvt$$AmxThematicMap$$$$_renderLegend$$($container$$172$$, $availSpace$$124$$) {
  this.$_legend$ && ($container$$172$$.removeChild(this.$_legend$), this.$_legend$ = $JSCompiler_alias_NULL$$);
  var $availLegendSpace$$ = new dvt.$Rectangle$(dvt.$AmxThematicMap$.$_LEGEND_COMPONET_GAP$, dvt.$AmxThematicMap$.$_LEGEND_COMPONET_GAP$, $availSpace$$124$$.$w$ - 2 * dvt.$AmxThematicMap$.$_LEGEND_COMPONET_GAP$, $availSpace$$124$$.$h$ - 2 * dvt.$AmxThematicMap$.$_LEGEND_COMPONET_GAP$), $gap$$28_options$$254$$ = this.$Options$, $position$$35_rendered$$6$$ = $gap$$28_options$$254$$.legend.rendered, $actualSize$$2_isHoriz$$15_isRTL$$39_scrolling$$2$$ = $gap$$28_options$$254$$.legend.scrolling, $legendOptions$$10$$ = 
  dvt.$JsonUtils$.$clone$($gap$$28_options$$254$$.legend);
  this.$_addLegendData$(this.$Options$, $legendOptions$$10$$);
  if($position$$35_rendered$$6$$ && !($legendOptions$$10$$.$sections$ && 0 == $legendOptions$$10$$.$sections$.length)) {
    $position$$35_rendered$$6$$ = $gap$$28_options$$254$$.legend.position;
    delete $legendOptions$$10$$.position;
    $legendOptions$$10$$.layout.gapRatio = $JSCompiler_StaticMethods_getGapRatio$$(this);
    $legendOptions$$10$$.hideAndShowBehavior = "none";
    $legendOptions$$10$$.rolloverBehavior = "none";
    $legendOptions$$10$$.scrolling = $gap$$28_options$$254$$.legend.scrolling;
    var $legend$$31$$ = dvt.$Legend$.newInstance(this.$_tmap$.$getCtx$());
    $container$$172$$.$addChild$($legend$$31$$);
    "auto" == $position$$35_rendered$$6$$ && "asNeeded" !== $actualSize$$2_isHoriz$$15_isRTL$$39_scrolling$$2$$ ? $position$$35_rendered$$6$$ = "bottom" : "auto" == $position$$35_rendered$$6$$ && "asNeeded" == $actualSize$$2_isHoriz$$15_isRTL$$39_scrolling$$2$$ && ($position$$35_rendered$$6$$ = "end");
    $actualSize$$2_isHoriz$$15_isRTL$$39_scrolling$$2$$ = dvt.$Agent$.$isRightToLeft$($container$$172$$.$getCtx$());
    "start" == $position$$35_rendered$$6$$ ? $position$$35_rendered$$6$$ = $actualSize$$2_isHoriz$$15_isRTL$$39_scrolling$$2$$ ? "right" : "left" : "end" == $position$$35_rendered$$6$$ && ($position$$35_rendered$$6$$ = $actualSize$$2_isHoriz$$15_isRTL$$39_scrolling$$2$$ ? "left" : "right");
    $legendOptions$$10$$.orientation = "left" == $position$$35_rendered$$6$$ || "right" == $position$$35_rendered$$6$$ ? "vertical" : "horizontal";
    $actualSize$$2_isHoriz$$15_isRTL$$39_scrolling$$2$$ = "top" == $position$$35_rendered$$6$$ || "bottom" == $position$$35_rendered$$6$$;
    $actualSize$$2_isHoriz$$15_isRTL$$39_scrolling$$2$$ = $legend$$31$$.$getPreferredSize$($legendOptions$$10$$, $actualSize$$2_isHoriz$$15_isRTL$$39_scrolling$$2$$ ? $availLegendSpace$$.$w$ : $gap$$28_options$$254$$.layout.legendMaxSize * $availLegendSpace$$.$w$, $actualSize$$2_isHoriz$$15_isRTL$$39_scrolling$$2$$ ? $gap$$28_options$$254$$.layout.legendMaxSize * $availLegendSpace$$.$h$ : $availLegendSpace$$.$h$);
    if(0 < $actualSize$$2_isHoriz$$15_isRTL$$39_scrolling$$2$$.$w$ && 0 < $actualSize$$2_isHoriz$$15_isRTL$$39_scrolling$$2$$.$h$) {
      switch($legend$$31$$.$render$($legendOptions$$10$$, $actualSize$$2_isHoriz$$15_isRTL$$39_scrolling$$2$$.$w$, $actualSize$$2_isHoriz$$15_isRTL$$39_scrolling$$2$$.$h$), this.$_legend$ = $legend$$31$$, $gap$$28_options$$254$$ = Math.ceil($gap$$28_options$$254$$.layout.legendGap * $JSCompiler_StaticMethods_getGapRatio$$(this)), dvt.$LayoutUtils$.position($availLegendSpace$$, $position$$35_rendered$$6$$, $legend$$31$$, $actualSize$$2_isHoriz$$15_isRTL$$39_scrolling$$2$$.$w$, $actualSize$$2_isHoriz$$15_isRTL$$39_scrolling$$2$$.$h$, 
      $gap$$28_options$$254$$), $position$$35_rendered$$6$$) {
        case "top":
          this.$_tmapContainer$.$setTranslateY$($actualSize$$2_isHoriz$$15_isRTL$$39_scrolling$$2$$.$h$ + dvt.$AmxThematicMap$.$_LEGEND_COMPONET_GAP$);
        case "bottom":
          $availSpace$$124$$.$h$ -= $actualSize$$2_isHoriz$$15_isRTL$$39_scrolling$$2$$.$h$ + dvt.$AmxThematicMap$.$_LEGEND_COMPONET_GAP$;
          break;
        case "left":
          this.$_tmapContainer$.$setTranslateX$($actualSize$$2_isHoriz$$15_isRTL$$39_scrolling$$2$$.$w$ + dvt.$AmxThematicMap$.$_LEGEND_COMPONET_GAP$);
        case "right":
          $availSpace$$124$$.$w$ -= $actualSize$$2_isHoriz$$15_isRTL$$39_scrolling$$2$$.$w$ + dvt.$AmxThematicMap$.$_LEGEND_COMPONET_GAP$
      }
    }
  }
};
function $JSCompiler_StaticMethods_getGapRatio$$($JSCompiler_StaticMethods_getGapRatio$self_hRatio$$) {
  if($JSCompiler_StaticMethods_getGapRatio$self_hRatio$$.$Options$.layout.gapRatio !== $JSCompiler_alias_NULL$$ && !isNaN($JSCompiler_StaticMethods_getGapRatio$self_hRatio$$.$Options$.layout.gapRatio)) {
    return $JSCompiler_StaticMethods_getGapRatio$self_hRatio$$.$Options$.layout.gapRatio
  }
  var $wRatio$$ = Math.min($JSCompiler_StaticMethods_getGapRatio$self_hRatio$$.$_width$ / 400, 1);
  $JSCompiler_StaticMethods_getGapRatio$self_hRatio$$ = Math.min($JSCompiler_StaticMethods_getGapRatio$self_hRatio$$.$_height$ / 300, 1);
  return Math.min($wRatio$$, $JSCompiler_StaticMethods_getGapRatio$self_hRatio$$)
}
dvt.$AmxThematicMap$.prototype.$_addLegendData$ = function $dvt$$AmxThematicMap$$$$_addLegendData$$($data$$95$$, $legendOptions$$11$$) {
  $legendOptions$$11$$.title = $data$$95$$.legend ? $data$$95$$.legend.title : $JSCompiler_alias_NULL$$;
  $legendOptions$$11$$.sections = [];
  if($data$$95$$ && $data$$95$$.legend && $data$$95$$.legend.sections) {
    for(var $i$$568$$ = 0;$i$$568$$ < $data$$95$$.legend.sections.length;$i$$568$$++) {
      var $dataSection$$1$$ = $data$$95$$.legend.sections[$i$$568$$];
      $dataSection$$1$$ && $legendOptions$$11$$.sections.push({title:$dataSection$$1$$.title, items:$dataSection$$1$$.items, sections:$dataSection$$1$$.sections})
    }
  }
  return $legendOptions$$11$$
};
dvt.$ThematicMap$ = function $dvt$$ThematicMap$$($context$$370$$, $callback$$115$$, $callbackObj$$82$$) {
  this.Init($context$$370$$, $callback$$115$$, $callbackObj$$82$$)
};
$goog$exportPath_$$("dvt.ThematicMap", dvt.$ThematicMap$);
dvt.$Obj$.$createSubclass$(dvt.$ThematicMap$, dvt.$PanZoomComponent$);
dvt.$ThematicMap$.$_FEATURES_OFF_PAN$ = 1;
dvt.$ThematicMap$.$_FEATURES_OFF_ZOOM$ = 2;
dvt.$ThematicMap$.$_FEATURES_OFF_PAN_ZOOM$ = 3;
dvt.$ThematicMap$.$_FEATURES_OFF_ZOOMTOFIT$ = 4;
dvt.$ThematicMap$.$_FEATURES_OFF_PAN_ZOOMTOFIT$ = 5;
dvt.$ThematicMap$.$_FEATURES_OFF_ZOOM_ZOOMTOFIT$ = 6;
dvt.$ThematicMap$.$_FEATURES_OFF_ALL$ = 7;
dvt.$ThematicMap$.$_COLLAPSIBLE_PANEL_OFFSET$ = 5;
dvt.$ThematicMap$.$_ELEM_RESOURCES_CONTROLPANEL$ = "controlPanelResources";
dvt.$ThematicMap$.$_ELEM_RESOURCES_LEGEND$ = "legendResources";
dvt.$ThematicMap$.$_ELEM_RESOURCES_PANEL_DRAWER$ = "panelDrawerResources";
dvt.$ThematicMap$.$_ELEM_RESOURCES$ = "resources";
dvt.$ThematicMap$.$DEFAULT_MAX_ZOOM_FACTOR$ = 6;
dvt.$ThematicMap$.prototype.Init = function $dvt$$ThematicMap$$$Init$($context$$371$$, $callback$$116$$, $callbackObj$$83$$) {
  dvt.$ThematicMap$.$superclass$.Init.call(this, $context$$371$$, $callback$$116$$, $callbackObj$$83$$);
  $JSCompiler_StaticMethods__createHandlers$$(this);
  this.$_layers$ = [];
  this.$_drillAnimFadeOutObjs$ = [];
  this.$_legendButtonImages$ = this.$_legendData$ = this.$_legendPanel$ = this.$_legend$ = $JSCompiler_alias_NULL$$;
  this.$_bBaseMapChanged$ = $JSCompiler_alias_FALSE$$;
  this.$_drilledRowKeys$ = [];
  this.$_initDrilled$ = {};
  this.$_processingInitDrilled$ = $JSCompiler_alias_FALSE$$;
  this.$_drillDataLayer$ = {};
  this.$_childToParent$ = {};
  this.$_drilled$ = [];
  this.$_areaLayers$ = new dvt.$Container$(this.$getCtx$());
  this.$_dataAreaLayers$ = new dvt.$Container$(this.$getCtx$());
  this.$_dataPointLayers$ = new dvt.$Container$(this.$getCtx$());
  this.$_labelLayers$ = new dvt.$Container$(this.$getCtx$());
  this.$_panning$ = this.$_zooming$ = this.$_initialZooming$ = $JSCompiler_alias_FALSE$$;
  this.$_maxZoomFactor$ = dvt.$ThematicMap$.$DEFAULT_MAX_ZOOM_FACTOR$;
  this.$_isMarkerZoomBehaviorFixed$ = $JSCompiler_alias_TRUE$$;
  this.$_selectedAreas$ = {};
  this.$_bListenersRemoved$ = $JSCompiler_alias_FALSE$$;
  this.$_showPopupBehaviors$ = $JSCompiler_alias_NULL$$;
  this.$setDisplayedControls$(dvt.$ControlPanel$.$CONTROLS_ALL$);
  this.$Defaults$ = new $DvtThematicMapDefaults$$;
  this.$_eventHandler$.$associate$(this, this);
  this.$_bRendered$ = $JSCompiler_alias_FALSE$$
};
dvt.$ThematicMap$.newInstance = function $dvt$$ThematicMap$$newInstance$($context$$372$$, $callback$$117$$, $callbackObj$$84$$) {
  return new dvt.$ThematicMap$($context$$372$$, $callback$$117$$, $callbackObj$$84$$)
};
dvt.$ThematicMap$.newInstance = dvt.$ThematicMap$.newInstance;
$JSCompiler_prototypeAlias$$ = dvt.$ThematicMap$.prototype;
$JSCompiler_prototypeAlias$$.$SetOptions$ = function $$JSCompiler_prototypeAlias$$$$SetOptions$$($options$$255$$) {
  dvt.$ThematicMap$.$superclass$.$SetOptions$.call(this, $options$$255$$);
  dvt.$Agent$.$isEnvironmentBrowser$() || (this.$Options$.animationOnDisplay = "none", this.$Options$.animationOnMapChange = "none", this.$Options$.animationOnDrill = "none");
  (new $DvtThematicMapJsonParser$$(this)).parse(this.$Options$)
};
$JSCompiler_prototypeAlias$$.$getEventManager$ = $JSCompiler_get$$("$_eventHandler$");
function $JSCompiler_StaticMethods_getLayer$$($JSCompiler_StaticMethods_getLayer$self$$, $layerName$$) {
  for(var $i$$569$$ = 0;$i$$569$$ < $JSCompiler_StaticMethods_getLayer$self$$.$_layers$.length;$i$$569$$++) {
    if($JSCompiler_StaticMethods_getLayer$self$$.$_layers$[$i$$569$$].$LayerName$ == $layerName$$) {
      return $JSCompiler_StaticMethods_getLayer$self$$.$_layers$[$i$$569$$]
    }
  }
}
$JSCompiler_prototypeAlias$$.$setAnimationDuration$ = function $$JSCompiler_prototypeAlias$$$$setAnimationDuration$$($attr$$12$$) {
  this.$_animationDuration$ = parseFloat($attr$$12$$)
};
$JSCompiler_prototypeAlias$$.$getAnimationDuration$ = $JSCompiler_get$$("$_animationDuration$");
$JSCompiler_prototypeAlias$$.$setFeaturesOff$ = function $$JSCompiler_prototypeAlias$$$$setFeaturesOff$$($attr$$14_featuresOff$$1$$) {
  $attr$$14_featuresOff$$1$$ = parseInt($attr$$14_featuresOff$$1$$);
  var $controls$$5$$ = this.$_displayedControls$;
  if($attr$$14_featuresOff$$1$$ == dvt.$ThematicMap$.$_FEATURES_OFF_PAN$ || $attr$$14_featuresOff$$1$$ == dvt.$ThematicMap$.$_FEATURES_OFF_PAN_ZOOM$ || $attr$$14_featuresOff$$1$$ == dvt.$ThematicMap$.$_FEATURES_OFF_PAN_ZOOMTOFIT$ || $attr$$14_featuresOff$$1$$ == dvt.$ThematicMap$.$_FEATURES_OFF_ALL$) {
    $controls$$5$$ &= ~dvt.$ControlPanel$.$CONTROLS_CENTER_BUTTON$, this.$_panning$ = $JSCompiler_alias_FALSE$$
  }
  if($attr$$14_featuresOff$$1$$ == dvt.$ThematicMap$.$_FEATURES_OFF_ZOOM$ || $attr$$14_featuresOff$$1$$ == dvt.$ThematicMap$.$_FEATURES_OFF_PAN_ZOOM$ || $attr$$14_featuresOff$$1$$ == dvt.$ThematicMap$.$_FEATURES_OFF_ZOOM_ZOOMTOFIT$ || $attr$$14_featuresOff$$1$$ == dvt.$ThematicMap$.$_FEATURES_OFF_ALL$) {
    $controls$$5$$ &= ~dvt.$ControlPanel$.$CONTROLS_ZOOM$, this.$_zooming$ = $JSCompiler_alias_FALSE$$
  }
  if($attr$$14_featuresOff$$1$$ == dvt.$ThematicMap$.$_FEATURES_OFF_ZOOMTOFIT$ || $attr$$14_featuresOff$$1$$ == dvt.$ThematicMap$.$_FEATURES_OFF_PAN_ZOOMTOFIT$ || $attr$$14_featuresOff$$1$$ == dvt.$ThematicMap$.$_FEATURES_OFF_ZOOM_ZOOMTOFIT$ || $attr$$14_featuresOff$$1$$ == dvt.$ThematicMap$.$_FEATURES_OFF_ALL$) {
    $controls$$5$$ &= ~dvt.$ControlPanel$.$CONTROLS_ZOOM_TO_FIT_BUTTON$
  }
  this.$setDisplayedControls$($controls$$5$$)
};
$JSCompiler_prototypeAlias$$.$setDrillMode$ = function $$JSCompiler_prototypeAlias$$$$setDrillMode$$($attr$$19$$) {
  this.$_drillMode$ = $attr$$19$$;
  this.$_eventHandler$.$setDrillMode$($attr$$19$$)
};
$JSCompiler_prototypeAlias$$.$PreRender$ = function $$JSCompiler_prototypeAlias$$$$PreRender$$() {
  dvt.$ThematicMap$.$superclass$.$PreRender$.call(this);
  !this.$_isResize$ && this.$_pzcContainer$ && (this.$_layers$ = [], this.$_drilledRowKeys$ = [], this.$_initDrilled$ = {}, this.$_drillDataLayer$ = {}, this.$_childToParent$ = {}, this.$_drilled$ = [], this.removeChild(this.$_legendPanel$), this.$_legendButtonImages$ = this.$_legendData$ = this.$_legend$ = this.$_legendPanel$ = $JSCompiler_alias_NULL$$, this.$setDisplayedControls$(dvt.$ControlPanel$.$CONTROLS_ALL$), this.$_panning$ = this.$_zooming$ = $JSCompiler_alias_TRUE$$, this.$_oldPzc$ = this.$_pzc$, 
  this.$_areaLayers$ = new dvt.$Container$(this.$getCtx$()), this.$_dataAreaLayers$ = new dvt.$Container$(this.$getCtx$()), this.$_dataPointLayers$ = new dvt.$Container$(this.$getCtx$()), this.$_labelLayers$ = new dvt.$Container$(this.$getCtx$()), this.$_showPopupBehaviors$ = $JSCompiler_alias_NULL$$, this.$_eventHandler$.$removeListeners$(this), $JSCompiler_StaticMethods__createHandlers$$(this), this.$_bListenersRemoved$ = $JSCompiler_alias_FALSE$$, this.$_eventHandler$.$hideTooltip$(), this.$_eventHandler$.$associate$(this, 
  this))
};
function $JSCompiler_StaticMethods__createHandlers$$($JSCompiler_StaticMethods__createHandlers$self$$) {
  $JSCompiler_StaticMethods__createHandlers$self$$.$_eventHandler$ = new $DvtThematicMapEventManager$$($JSCompiler_StaticMethods__createHandlers$self$$.$getCtx$(), $JSCompiler_StaticMethods__createHandlers$self$$.dispatchEvent, $JSCompiler_StaticMethods__createHandlers$self$$);
  $JSCompiler_StaticMethods__createHandlers$self$$.$_eventHandler$.$addListeners$($JSCompiler_StaticMethods__createHandlers$self$$);
  dvt.$Agent$.$isTouchDevice$() ? $JSCompiler_StaticMethods__createHandlers$self$$.$_keyboardHandler$ = $JSCompiler_alias_NULL$$ : ($JSCompiler_StaticMethods__createHandlers$self$$.$_keyboardHandler$ = new $DvtThematicMapKeyboardHandler$$($JSCompiler_StaticMethods__createHandlers$self$$, $JSCompiler_StaticMethods__createHandlers$self$$.$_eventHandler$), $JSCompiler_StaticMethods__createHandlers$self$$.$_eventHandler$.$setKeyboardHandler$($JSCompiler_StaticMethods__createHandlers$self$$.$_keyboardHandler$))
}
$JSCompiler_prototypeAlias$$.$HandleLegendResize$ = function $$JSCompiler_prototypeAlias$$$$HandleLegendResize$$($event$$479_x$$186$$) {
  dvt.$Agent$.$isRightToLeft$(this.$getCtx$()) || ($event$$479_x$$186$$ = this.getWidth() - 5 - $event$$479_x$$186$$.getWidth(), this.$_legendPanel$.$setTranslateX$($event$$479_x$$186$$))
};
$JSCompiler_prototypeAlias$$.$_renderLegend$ = function $$JSCompiler_prototypeAlias$$$$_renderLegend$$() {
  if(this.$_legendData$) {
    this.$_legendPanel$ && (this.$_legendPanel$.$destroy$(), this.removeChild(this.$_legendPanel$));
    var $disclosed$$3_x$$187$$ = "true" == this.$_legendData$.disclosed, $isFixed$$2$$ = "fixed" == this.$_legendData$.display || dvt.$Agent$.$isEnvironmentBatik$();
    if(!$isFixed$$2$$ || $disclosed$$3_x$$187$$) {
      var $legendData$$7_maxWidth$$23_upState$$16$$ = this.$_legendData$.maxWidth, $maxHeight$$14_overState$$13_percentIndex$$1_preferredSize$$8$$ = $legendData$$7_maxWidth$$23_upState$$16$$.indexOf("%"), $legendData$$7_maxWidth$$23_upState$$16$$ = -1 != $maxHeight$$14_overState$$13_percentIndex$$1_preferredSize$$8$$ ? parseFloat($legendData$$7_maxWidth$$23_upState$$16$$.substring(0, $maxHeight$$14_overState$$13_percentIndex$$1_preferredSize$$8$$)) / 100 * this.getWidth() : parseFloat($legendData$$7_maxWidth$$23_upState$$16$$), 
      $maxHeight$$14_overState$$13_percentIndex$$1_preferredSize$$8$$ = this.getHeight() - 2 * dvt.$ThematicMap$.$_COLLAPSIBLE_PANEL_OFFSET$;
      this.$_skinName$ == dvt.$CSSStyle$.$SKIN_ALTA$ ? (this.$_legendPanel$ = new dvt.$PanelDrawer$(this.$getCtx$(), $JSCompiler_alias_NULL$$, this, "pd"), this.$_legendPanel$.$addEvtListener$(dvt.$PanelDrawerEvent$.$TYPE$, this.$HandleLegendEvent$, $JSCompiler_alias_FALSE$$, this), this.$_legendPanel$.$setMaxWidth$($legendData$$7_maxWidth$$23_upState$$16$$), this.$_legendPanel$.$setMaxHeight$($maxHeight$$14_overState$$13_percentIndex$$1_preferredSize$$8$$), this.$_legendPanel$.$setFixed$($isFixed$$2$$), 
      dvt.$Agent$.$isRightToLeft$(this.$getCtx$()) ? (this.$_legendPanel$.$setDiscloseDirection$(), this.$_legendPanel$.$setTranslateX$(0)) : this.$_legendPanel$.$setTranslateX$(this.getWidth())) : (this.$_legendPanel$ = new dvt.$CollapsiblePanel$(this.$getCtx$(), $legendData$$7_maxWidth$$23_upState$$16$$, $maxHeight$$14_overState$$13_percentIndex$$1_preferredSize$$8$$, dvt.$CollapsiblePanel$.$COLLAPSE_NORTHEAST$, this.$getResourcesMap$(), this.$getSubcomponentStyles$(), $disclosed$$3_x$$187$$, $isFixed$$2$$), 
      this.$_legendPanel$.$addEvtListener$(dvt.$CollapsiblePanelEvent$.$TYPE$, this.$HandleLegendEvent$, $JSCompiler_alias_FALSE$$, this), this.$_legendPanel$.$addEvtListener$(dvt.$ResizeEvent$.$RESIZE_EVENT$, this.$HandleLegendResize$, $JSCompiler_alias_FALSE$$, this), this.$_legendPanel$.$setButtonTooltips$(this.$_legendData$.expandTooltip, this.$_legendData$.collapseTooltip));
      $legendData$$7_maxWidth$$23_upState$$16$$ = this.$_legendData$;
      this.$_legend$ = dvt.$Legend$.newInstance(this.$getCtx$(), this.$processLegendEvent$, this);
      this.$addChild$(this.$_legendPanel$);
      this.$addChild$(this.$_legend$);
      $maxHeight$$14_overState$$13_percentIndex$$1_preferredSize$$8$$ = this.$_legend$.$getPreferredSize$($legendData$$7_maxWidth$$23_upState$$16$$, this.$_legendPanel$.$getMaxContentWidth$(), this.$_legendPanel$.$getMaxContentHeight$());
      this.$_legend$.$render$($legendData$$7_maxWidth$$23_upState$$16$$, $maxHeight$$14_overState$$13_percentIndex$$1_preferredSize$$8$$.$w$, $maxHeight$$14_overState$$13_percentIndex$$1_preferredSize$$8$$.$h$);
      var $legendPanelDim$$;
      if(this.$_skinName$ == dvt.$CSSStyle$.$SKIN_ALTA$) {
        this.$_legendPanel$.$setMaxContainerHeight$(this.$_legend$.$getContentDimensions$().$h$);
        this.removeChild(this.$_legend$);
        var $legendData$$7_maxWidth$$23_upState$$16$$ = new dvt.$Image$(this.$getCtx$(), this.$getResourcesMap$()[dvt.$PanelDrawer$.$PANEL_LEGEND_ICON_ENA$], 0, 0, dvt.$PanelDrawer$.$IMAGE_SIZE$, dvt.$PanelDrawer$.$IMAGE_SIZE$), $maxHeight$$14_overState$$13_percentIndex$$1_preferredSize$$8$$ = new dvt.$Image$(this.$getCtx$(), this.$getResourcesMap$()[dvt.$PanelDrawer$.$PANEL_LEGEND_ICON_OVR$], 0, 0, dvt.$PanelDrawer$.$IMAGE_SIZE$, dvt.$PanelDrawer$.$IMAGE_SIZE$), $downState$$13$$ = new dvt.$Image$(this.$getCtx$(), 
        this.$getResourcesMap$()[dvt.$PanelDrawer$.$PANEL_LEGEND_ICON_DWN$], 0, 0, dvt.$PanelDrawer$.$IMAGE_SIZE$, dvt.$PanelDrawer$.$IMAGE_SIZE$), $tip$$5$$ = dvt.$Bundle$.$getTranslatedString$(dvt.$Bundle$.$UTIL_PREFIX$, "LEGEND");
        this.$_legendPanel$.$addPanel$(this.$_legend$, $legendData$$7_maxWidth$$23_upState$$16$$, $maxHeight$$14_overState$$13_percentIndex$$1_preferredSize$$8$$, $downState$$13$$, $tip$$5$$, dvt.$PanelDrawer$.$PANEL_LEGEND$);
        this.$_legendPanel$.$renderComponent$();
        $disclosed$$3_x$$187$$ && this.$_legendPanel$.$setDisclosed$($JSCompiler_alias_TRUE$$, $JSCompiler_alias_TRUE$$)
      }else {
        this.$_legendPanel$.$addContent$(this.$_legend$), $legendPanelDim$$ = this.$_legendPanel$.$getDimensions$(), $disclosed$$3_x$$187$$ = dvt.$Agent$.$isRightToLeft$(this.$getCtx$()) ? 5 : this.getWidth() - 5 - $legendPanelDim$$.$w$ - $legendPanelDim$$.x, this.$_legendPanel$.$setTranslate$($disclosed$$3_x$$187$$, 5), $legendPanelDim$$.$w$ += 5
      }
      if(this.$_isFixedLegend$ = $isFixed$$2$$) {
        $legendPanelDim$$ || ($legendPanelDim$$ = this.$_legendPanel$.$getDimensions$()), this.$_legendWidth$ = $legendPanelDim$$.$w$, this.$_pzc$.$setSize$(this.getWidth() - this.$_legendWidth$, this.getHeight(), $JSCompiler_alias_TRUE$$)
      }
    }
  }
};
$JSCompiler_prototypeAlias$$.$Render$ = function $$JSCompiler_prototypeAlias$$$$Render$$() {
  dvt.$ThematicMap$.$superclass$.$Render$.call(this);
  var $pzcContainer$$ = new dvt.$Container$(this.$getCtx$()), $bounds$$117_cpContainer$$ = new dvt.$Container$(this.$getCtx$());
  this.$_pzc$ = this.$_panZoomCanvas$;
  this.$_pzc$.$addChild$($pzcContainer$$);
  this.$_pzc$.$_contentPane$.$addChild$($bounds$$117_cpContainer$$);
  this.$_render$($pzcContainer$$, $bounds$$117_cpContainer$$);
  if(this.$_topLayer$) {
    (this.$_controlPanel$ = this.$_pzc$.$_controlPanel$) && this.$_pzc$.$addChild$(this.$_controlPanel$);
    $JSCompiler_StaticMethods__stopAnimation$$(this);
    $bounds$$117_cpContainer$$ = new dvt.$Rectangle$(0, 0, this.getWidth(), this.getHeight());
    if(!this.$_bRendered$ && !this.$_oldPzc$) {
      dvt.$BlackBoxAnimationHandler$.isSupported(this.$_animationOnDisplay$) && (this.$_animation$ = dvt.$BlackBoxAnimationHandler$.$getInAnimation$(this.$getCtx$(), this.$_animationOnDisplay$, this.$_pzc$, $bounds$$117_cpContainer$$, this.$_animationDuration$))
    }else {
      var $anim$$38$$ = $JSCompiler_alias_NULL$$;
      this.$_bBaseMapChanged$ && !this.$_isResize$ ? $anim$$38$$ = this.$_animationOnMapChange$ : this.$_topLayer$ && this.$_topLayer$.$LayerName$ != this.$_oldTopLayerName$ && ($anim$$38$$ = this.$_topLayer$.$getAnimation$());
      dvt.$BlackBoxAnimationHandler$.isSupported($anim$$38$$) && (this.$_animation$ = dvt.$BlackBoxAnimationHandler$.$getCombinedAnimation$(this.$getCtx$(), $anim$$38$$, this.$_oldPzc$, this.$_pzc$, $bounds$$117_cpContainer$$, this.$_animationDuration$)) && this.$addChild$(this.$_oldPzc$)
    }
    this.$_animation$ ? (this.$_controlPanel$ && this.$addChild$(this.$_controlPanel$), this.$_eventHandler$.$hideTooltip$(), this.$_eventHandler$.$removeListeners$(this), this.$_bListenersRemoved$ = $JSCompiler_alias_TRUE$$, this.$_animation$.$setOnEnd$(this.$OnAnimationEnd$, this), this.$_animation$.play()) : this.$OnAnimationEnd$();
    this.$_pzcContainer$ = $pzcContainer$$;
    this.$_topLayer$ && (this.$_oldTopLayerName$ = this.$_topLayer$.$LayerName$);
    this.$getCtx$().$setKeyboardFocusArray$([this]);
    this.$_bRendered$ = $JSCompiler_alias_TRUE$$
  }
};
$JSCompiler_prototypeAlias$$.$_render$ = function $$JSCompiler_prototypeAlias$$$$_render$$($pzcContainer$$1$$, $cpContainer$$1$$) {
  this.$_renderLegend$();
  $cpContainer$$1$$.$addChild$(this.$_areaLayers$);
  $cpContainer$$1$$.$addChild$(this.$_dataAreaLayers$);
  this.$_isMarkerZoomBehaviorFixed$ ? $pzcContainer$$1$$.$addChild$(this.$_dataPointLayers$) : $cpContainer$$1$$.$addChild$(this.$_dataPointLayers$);
  $pzcContainer$$1$$.$addChild$(this.$_labelLayers$);
  var $isolatedArea_navigable$$inline_4582_navigables$$10_pzcMatrix$$ = this.$_pzc$.$_contentPane$.$getMatrix$();
  this.$_topLayerRendered$ = $JSCompiler_alias_FALSE$$;
  for(var $i$$570$$ = 0;$i$$570$$ < this.$_layers$.length;$i$$570$$++) {
    var $layer$$2$$ = this.$_layers$[$i$$570$$];
    if(!this.$_topLayerRendered$ && $layer$$2$$ instanceof $DvtMapAreaLayer$$ || !($layer$$2$$ instanceof $DvtMapAreaLayer$$)) {
      $layer$$2$$.$render$($isolatedArea_navigable$$inline_4582_navigables$$10_pzcMatrix$$), !this.$_topLayerRendered$ && $layer$$2$$ instanceof $DvtMapAreaLayer$$ && (this.$_topLayerRendered$ = $JSCompiler_alias_TRUE$$, this.$_topLayer$ = $layer$$2$$)
    }
  }
  this.$_topLayer$ && ($isolatedArea_navigable$$inline_4582_navigables$$10_pzcMatrix$$ = this.$_topLayer$.$_isolatedArea$, this.$_isolatedArea$ != $isolatedArea_navigable$$inline_4582_navigables$$10_pzcMatrix$$ && (this.$_isolatedArea$ = $isolatedArea_navigable$$inline_4582_navigables$$10_pzcMatrix$$, this.$_initialZoom$ = this.$_initialCenterY$ = this.$_initialCenterX$ = $JSCompiler_alias_NULL$$), this.$_keyboardHandler$ && ($isolatedArea_navigable$$inline_4582_navigables$$10_pzcMatrix$$ = $JSCompiler_StaticMethods_getNavigableAreas$$(this), 
  0 == $isolatedArea_navigable$$inline_4582_navigables$$10_pzcMatrix$$.length && ($isolatedArea_navigable$$inline_4582_navigables$$10_pzcMatrix$$ = $JSCompiler_StaticMethods_getNavigableObjects$$(this)), ($isolatedArea_navigable$$inline_4582_navigables$$10_pzcMatrix$$ = $isolatedArea_navigable$$inline_4582_navigables$$10_pzcMatrix$$[0]) && $DvtThematicMapEventManager$$.$superclass$.$setFocus$.call(this.$_eventHandler$, $isolatedArea_navigable$$inline_4582_navigables$$10_pzcMatrix$$)), this.$_pzc$.$setMinZoom$($JSCompiler_alias_NULL$$), 
  this.$_pzc$.$setMaxZoom$($JSCompiler_alias_NULL$$), this.$_pzc$.$setZoomingEnabled$($JSCompiler_alias_TRUE$$), this.$_pzc$.$setPanningEnabled$($JSCompiler_alias_TRUE$$), !this.$_bBaseMapChanged$ && !this.$_isResize$ && this.$_initialZoom$ != $JSCompiler_alias_NULL$$ ? (this.$_pzc$.$zoomTo$(this.$_initialZoom$), this.$_pzc$.$panTo$(this.$_initialCenterX$, this.$_initialCenterY$)) : this.$_pzc$.$zoomToFit$($JSCompiler_alias_NULL$$, this.$_topLayer$.$getLayerDim$()), $JSCompiler_StaticMethods__processInitialDrilled$$(this), 
  $JSCompiler_StaticMethods__updateZoomLimits$$(this), this.$_pzc$.$setZoomingEnabled$(this.$_zooming$), this.$_pzc$.$setPanningEnabled$(this.$_panning$))
};
$JSCompiler_prototypeAlias$$.$updateLayer$ = function $$JSCompiler_prototypeAlias$$$$updateLayer$$($dataLayerOptions_navigable$$inline_4585_navigables$$11$$, $parentLayer$$, $isAreaDataLayer$$) {
  this.$_bRendered$ = $JSCompiler_alias_FALSE$$;
  $JSCompiler_StaticMethods__stopAnimation$$(this);
  $JSCompiler_StaticMethods_ParseDataLayers$$(new $DvtThematicMapJsonParser$$(this), [$dataLayerOptions_navigable$$inline_4585_navigables$$11$$], $JSCompiler_StaticMethods_getLayer$$(this, $parentLayer$$), this.$_topLayer$.$LayerName$, $isAreaDataLayer$$);
  this.$_renderLegend$();
  this.$_bRendered$ = $JSCompiler_alias_TRUE$$;
  this.$_keyboardHandler$ && ($dataLayerOptions_navigable$$inline_4585_navigables$$11$$ = $JSCompiler_StaticMethods_getNavigableAreas$$(this), 0 == $dataLayerOptions_navigable$$inline_4585_navigables$$11$$.length && ($dataLayerOptions_navigable$$inline_4585_navigables$$11$$ = $JSCompiler_StaticMethods_getNavigableObjects$$(this)), ($dataLayerOptions_navigable$$inline_4585_navigables$$11$$ = $dataLayerOptions_navigable$$inline_4585_navigables$$11$$[0]) && $DvtThematicMapEventManager$$.$superclass$.$setFocus$.call(this.$_eventHandler$, 
  $dataLayerOptions_navigable$$inline_4585_navigables$$11$$));
  this.$getCtx$().$setKeyboardFocusArray$([this]);
  $JSCompiler_StaticMethods__updateZoomLimits$$(this)
};
dvt.$ThematicMap$.prototype.updateLayer = dvt.$ThematicMap$.prototype.$updateLayer$;
function $JSCompiler_StaticMethods__updateZoomLimits$$($JSCompiler_StaticMethods__updateZoomLimits$self$$) {
  var $fittedZoom_zoomPadding$$inline_4592$$;
  $fittedZoom_zoomPadding$$inline_4592$$ = $JSCompiler_StaticMethods__updateZoomLimits$self$$.$_pzc$.$_zoomToFitPadding$;
  var $mapDim$$inline_4593$$ = $JSCompiler_StaticMethods__updateZoomLimits$self$$.$_topLayer$.$getLayerDim$(), $pzcDim$$inline_4594$$ = $JSCompiler_StaticMethods__updateZoomLimits$self$$.$_pzc$.$getSize$();
  $fittedZoom_zoomPadding$$inline_4592$$ = Math.min(($pzcDim$$inline_4594$$.$w$ - 2 * $fittedZoom_zoomPadding$$inline_4592$$) / $mapDim$$inline_4593$$.$w$, ($pzcDim$$inline_4594$$.$h$ - 2 * $fittedZoom_zoomPadding$$inline_4592$$) / $mapDim$$inline_4593$$.$h$);
  $JSCompiler_StaticMethods__updateZoomLimits$self$$.$_pzc$.$setMinZoom$($fittedZoom_zoomPadding$$inline_4592$$);
  $JSCompiler_StaticMethods__updateZoomLimits$self$$.$_pzc$.$setMaxZoom$($fittedZoom_zoomPadding$$inline_4592$$ * ($JSCompiler_StaticMethods__updateZoomLimits$self$$.$_zooming$ ? $JSCompiler_StaticMethods__updateZoomLimits$self$$.$_maxZoomFactor$ : 1))
}
function $JSCompiler_StaticMethods_OnUpdateLayerEnd$$($JSCompiler_StaticMethods_OnUpdateLayerEnd$self$$) {
  $JSCompiler_StaticMethods_OnUpdateLayerEnd$self$$.$_topLayer$.$_isolatedArea$ && $JSCompiler_StaticMethods_OnUpdateLayerEnd$self$$.$_pzc$.$zoomToFit$($JSCompiler_alias_NULL$$, $JSCompiler_StaticMethods_OnUpdateLayerEnd$self$$.$_topLayer$.$getLayerDim$());
  $JSCompiler_StaticMethods__processInitialDrilled$$($JSCompiler_StaticMethods_OnUpdateLayerEnd$self$$);
  $JSCompiler_StaticMethods_OnUpdateLayerEnd$self$$.$_initialZooming$ && $JSCompiler_StaticMethods__zoomData$$($JSCompiler_StaticMethods_OnUpdateLayerEnd$self$$)
}
$JSCompiler_prototypeAlias$$ = dvt.$ThematicMap$.prototype;
$JSCompiler_prototypeAlias$$.$setRolloverBehavior$ = $JSCompiler_set$$("$_rolloverBehavior$");
function $JSCompiler_StaticMethods__transformContainers$$($JSCompiler_StaticMethods__transformContainers$self$$, $pzcMatrix$$1$$) {
  var $mat$$25$$ = new dvt.$Matrix$;
  $mat$$25$$.translate($pzcMatrix$$1$$.$_tx$, $pzcMatrix$$1$$.$_ty$);
  $JSCompiler_StaticMethods__transformContainers$self$$.$_isMarkerZoomBehaviorFixed$ && $JSCompiler_StaticMethods__transformContainers$self$$.$_dataPointLayers$.$setMatrix$($mat$$25$$);
  $JSCompiler_StaticMethods__transformContainers$self$$.$_labelLayers$.$setMatrix$($mat$$25$$)
}
$JSCompiler_prototypeAlias$$.$HandleLegendEvent$ = function $$JSCompiler_prototypeAlias$$$$HandleLegendEvent$$($event$$480_spEvent$$1$$) {
  $event$$480_spEvent$$1$$ = dvt.$EventFactory$.$newAdfPropertyChangeEvent$(dvt.$PanZoomComponent$.$LEGEND_DISCLOSED_EVENT_KEY$, $event$$480_spEvent$$1$$.$getSubType$() == dvt.$CollapsiblePanelEvent$.$SUBTYPE_SHOW$);
  this.dispatchEvent($event$$480_spEvent$$1$$)
};
function $JSCompiler_StaticMethods__updateAnimator$$($JSCompiler_StaticMethods__updateAnimator$self$$, $animator$$130_event$$481$$, $bRecenterObjs_transMat$$) {
  if($animator$$130_event$$481$$ = $animator$$130_event$$481$$.$_animator$) {
    var $contentPane$$2$$ = $JSCompiler_StaticMethods__updateAnimator$self$$.$_pzc$.$_contentPane$, $mat$$26$$ = $animator$$130_event$$481$$.$getDestVal$($contentPane$$2$$, $contentPane$$2$$.$getMatrix$);
    $bRecenterObjs_transMat$$ && ($JSCompiler_StaticMethods__updateAnimator$self$$.$_currentAnimMatrix$ = $contentPane$$2$$.$getMatrix$(), $animator$$130_event$$481$$.$addProp$(dvt.$Animator$.$TYPE_MATRIX$, $JSCompiler_StaticMethods__updateAnimator$self$$, $JSCompiler_StaticMethods__updateAnimator$self$$.$_getCenteredObjsMatrix$, $JSCompiler_StaticMethods__updateAnimator$self$$.$_setCenteredObjsMatrix$, $mat$$26$$));
    $bRecenterObjs_transMat$$ = new dvt.$Matrix$(1, 0, 0, 1, $mat$$26$$.$_tx$, $mat$$26$$.$_ty$);
    $JSCompiler_StaticMethods__updateAnimator$self$$.$_isMarkerZoomBehaviorFixed$ && $animator$$130_event$$481$$.$addProp$(dvt.$Animator$.$TYPE_MATRIX$, $JSCompiler_StaticMethods__updateAnimator$self$$.$_dataPointLayers$, $JSCompiler_StaticMethods__updateAnimator$self$$.$_dataPointLayers$.$getMatrix$, $JSCompiler_StaticMethods__updateAnimator$self$$.$_dataPointLayers$.$setMatrix$, $bRecenterObjs_transMat$$);
    $animator$$130_event$$481$$.$addProp$(dvt.$Animator$.$TYPE_MATRIX$, $JSCompiler_StaticMethods__updateAnimator$self$$.$_labelLayers$, $JSCompiler_StaticMethods__updateAnimator$self$$.$_labelLayers$.$getMatrix$, $JSCompiler_StaticMethods__updateAnimator$self$$.$_labelLayers$.$setMatrix$, $bRecenterObjs_transMat$$)
  }
}
$JSCompiler_prototypeAlias$$.$HandleZoomEvent$ = function $$JSCompiler_prototypeAlias$$$$HandleZoomEvent$$($event$$482_minMaxY$$inline_4608_padding$$inline_4598_viewportDim$$inline_4600$$) {
  switch($event$$482_minMaxY$$inline_4608_padding$$inline_4598_viewportDim$$inline_4600$$.$getSubType$()) {
    case dvt.$ZoomEvent$.$SUBTYPE_ADJUST_PAN_CONSTRAINTS$:
      if(this.$_panning$) {
        var $i$$571_zoom$$13_zoom$$inline_4597_zoomedMapH$$inline_4605$$ = $event$$482_minMaxY$$inline_4608_padding$$inline_4598_viewportDim$$inline_4600$$.$_newZoom$;
        $event$$482_minMaxY$$inline_4608_padding$$inline_4598_viewportDim$$inline_4600$$ = this.$_pzc$.$_zoomToFitPadding$;
        var $pzcDim$$inline_4599_pzcMatrix$$2_zoomedMapY$$inline_4603$$ = this.$_pzc$.$getSize$();
        $event$$482_minMaxY$$inline_4608_padding$$inline_4598_viewportDim$$inline_4600$$ = new dvt.$Rectangle$($event$$482_minMaxY$$inline_4608_padding$$inline_4598_viewportDim$$inline_4600$$, $event$$482_minMaxY$$inline_4608_padding$$inline_4598_viewportDim$$inline_4600$$, $pzcDim$$inline_4599_pzcMatrix$$2_zoomedMapY$$inline_4603$$.$w$ - 2 * $event$$482_minMaxY$$inline_4608_padding$$inline_4598_viewportDim$$inline_4600$$, $pzcDim$$inline_4599_pzcMatrix$$2_zoomedMapY$$inline_4603$$.$h$ - 2 * $event$$482_minMaxY$$inline_4608_padding$$inline_4598_viewportDim$$inline_4600$$);
        var $legendAdjust$$inline_4606_mapDim$$inline_4601$$ = this.$_topLayer$.$getLayerDim$(), $minMaxX$$inline_4607_zoomedMapX$$inline_4602$$ = $legendAdjust$$inline_4606_mapDim$$inline_4601$$.x * $i$$571_zoom$$13_zoom$$inline_4597_zoomedMapH$$inline_4605$$, $pzcDim$$inline_4599_pzcMatrix$$2_zoomedMapY$$inline_4603$$ = $legendAdjust$$inline_4606_mapDim$$inline_4601$$.y * $i$$571_zoom$$13_zoom$$inline_4597_zoomedMapH$$inline_4605$$, $zoomedMapW$$inline_4604$$ = $legendAdjust$$inline_4606_mapDim$$inline_4601$$.$w$ * 
        $i$$571_zoom$$13_zoom$$inline_4597_zoomedMapH$$inline_4605$$, $i$$571_zoom$$13_zoom$$inline_4597_zoomedMapH$$inline_4605$$ = $legendAdjust$$inline_4606_mapDim$$inline_4601$$.$h$ * $i$$571_zoom$$13_zoom$$inline_4597_zoomedMapH$$inline_4605$$, $legendAdjust$$inline_4606_mapDim$$inline_4601$$ = 0;
        $zoomedMapW$$inline_4604$$ > $event$$482_minMaxY$$inline_4608_padding$$inline_4598_viewportDim$$inline_4600$$.$w$ ? (this.$_isFixedLegend$ && dvt.$Agent$.$isRightToLeft$(this.$getCtx$()) && ($legendAdjust$$inline_4606_mapDim$$inline_4601$$ = this.$_legendWidth$), this.$_pzc$.$setMinPanX$($event$$482_minMaxY$$inline_4608_padding$$inline_4598_viewportDim$$inline_4600$$.x + $event$$482_minMaxY$$inline_4608_padding$$inline_4598_viewportDim$$inline_4600$$.$w$ + $legendAdjust$$inline_4606_mapDim$$inline_4601$$ - 
        ($minMaxX$$inline_4607_zoomedMapX$$inline_4602$$ + $zoomedMapW$$inline_4604$$)), this.$_pzc$.$setMaxPanX$($event$$482_minMaxY$$inline_4608_padding$$inline_4598_viewportDim$$inline_4600$$.x - $minMaxX$$inline_4607_zoomedMapX$$inline_4602$$ + $legendAdjust$$inline_4606_mapDim$$inline_4601$$)) : (this.$_isFixedLegend$ && dvt.$Agent$.$isRightToLeft$(this.$getCtx$()) && ($legendAdjust$$inline_4606_mapDim$$inline_4601$$ = 2 * this.$_legendWidth$), $minMaxX$$inline_4607_zoomedMapX$$inline_4602$$ = 
        ($event$$482_minMaxY$$inline_4608_padding$$inline_4598_viewportDim$$inline_4600$$.x + $event$$482_minMaxY$$inline_4608_padding$$inline_4598_viewportDim$$inline_4600$$.$w$ + $legendAdjust$$inline_4606_mapDim$$inline_4601$$) / 2 - ($minMaxX$$inline_4607_zoomedMapX$$inline_4602$$ + $zoomedMapW$$inline_4604$$ / 2), this.$_pzc$.$setMinPanX$($minMaxX$$inline_4607_zoomedMapX$$inline_4602$$), this.$_pzc$.$setMaxPanX$($minMaxX$$inline_4607_zoomedMapX$$inline_4602$$));
        $i$$571_zoom$$13_zoom$$inline_4597_zoomedMapH$$inline_4605$$ > $event$$482_minMaxY$$inline_4608_padding$$inline_4598_viewportDim$$inline_4600$$.$h$ ? (this.$_pzc$.$setMinPanY$($event$$482_minMaxY$$inline_4608_padding$$inline_4598_viewportDim$$inline_4600$$.y + $event$$482_minMaxY$$inline_4608_padding$$inline_4598_viewportDim$$inline_4600$$.$h$ - ($pzcDim$$inline_4599_pzcMatrix$$2_zoomedMapY$$inline_4603$$ + $i$$571_zoom$$13_zoom$$inline_4597_zoomedMapH$$inline_4605$$)), this.$_pzc$.$setMaxPanY$($event$$482_minMaxY$$inline_4608_padding$$inline_4598_viewportDim$$inline_4600$$.y - 
        $pzcDim$$inline_4599_pzcMatrix$$2_zoomedMapY$$inline_4603$$)) : ($event$$482_minMaxY$$inline_4608_padding$$inline_4598_viewportDim$$inline_4600$$ = ($event$$482_minMaxY$$inline_4608_padding$$inline_4598_viewportDim$$inline_4600$$.y + $event$$482_minMaxY$$inline_4608_padding$$inline_4598_viewportDim$$inline_4600$$.$h$) / 2 - ($pzcDim$$inline_4599_pzcMatrix$$2_zoomedMapY$$inline_4603$$ + $i$$571_zoom$$13_zoom$$inline_4597_zoomedMapH$$inline_4605$$ / 2), this.$_pzc$.$setMinPanY$($event$$482_minMaxY$$inline_4608_padding$$inline_4598_viewportDim$$inline_4600$$), 
        this.$_pzc$.$setMaxPanY$($event$$482_minMaxY$$inline_4608_padding$$inline_4598_viewportDim$$inline_4600$$))
      }
      break;
    case dvt.$ZoomEvent$.$SUBTYPE_ZOOMING$:
    ;
    case dvt.$ZoomEvent$.$SUBTYPE_ELASTIC_ANIM_BEGIN$:
      $JSCompiler_StaticMethods__updateAnimator$$(this, $event$$482_minMaxY$$inline_4608_padding$$inline_4598_viewportDim$$inline_4600$$, $JSCompiler_alias_TRUE$$);
      break;
    case dvt.$ZoomEvent$.$SUBTYPE_ZOOMED$:
      $i$$571_zoom$$13_zoom$$inline_4597_zoomedMapH$$inline_4605$$ = $event$$482_minMaxY$$inline_4608_padding$$inline_4598_viewportDim$$inline_4600$$.$_newZoom$;
      if($i$$571_zoom$$13_zoom$$inline_4597_zoomedMapH$$inline_4605$$ != $JSCompiler_alias_NULL$$) {
        $pzcDim$$inline_4599_pzcMatrix$$2_zoomedMapY$$inline_4603$$ = this.$_pzc$.$_contentPane$.$getMatrix$();
        $event$$482_minMaxY$$inline_4608_padding$$inline_4598_viewportDim$$inline_4600$$.$_animator$ = $JSCompiler_alias_NULL$$;
        this.dispatchEvent(dvt.$EventFactory$.$newThematicMapViewportChangeEvent$($pzcDim$$inline_4599_pzcMatrix$$2_zoomedMapY$$inline_4603$$.$_tx$, $pzcDim$$inline_4599_pzcMatrix$$2_zoomedMapY$$inline_4603$$.$_ty$, $i$$571_zoom$$13_zoom$$inline_4597_zoomedMapH$$inline_4605$$));
        $JSCompiler_StaticMethods__transformContainers$$(this, $pzcDim$$inline_4599_pzcMatrix$$2_zoomedMapY$$inline_4603$$);
        for($i$$571_zoom$$13_zoom$$inline_4597_zoomedMapH$$inline_4605$$ = 0;$i$$571_zoom$$13_zoom$$inline_4597_zoomedMapH$$inline_4605$$ < this.$_layers$.length;$i$$571_zoom$$13_zoom$$inline_4597_zoomedMapH$$inline_4605$$++) {
          this.$_layers$[$i$$571_zoom$$13_zoom$$inline_4597_zoomedMapH$$inline_4605$$].$HandleZoomEvent$($event$$482_minMaxY$$inline_4608_padding$$inline_4598_viewportDim$$inline_4600$$, $pzcDim$$inline_4599_pzcMatrix$$2_zoomedMapY$$inline_4603$$)
        }
      }
      break;
    case dvt.$ZoomEvent$.$SUBTYPE_ZOOM_AND_CENTER$:
      $JSCompiler_StaticMethods_fitSelectedRegions$$(this);
      break;
    case dvt.$ZoomEvent$.$SUBTYPE_ZOOM_TO_FIT_END$:
      this.dispatchEvent(dvt.$EventFactory$.$newThematicMapViewportChangeEvent$())
  }
};
$JSCompiler_prototypeAlias$$.$HandlePanEvent$ = function $$JSCompiler_prototypeAlias$$$$HandlePanEvent$$($event$$483_i$$572_stroke$$89$$) {
  var $subType$$7$$ = $event$$483_i$$572_stroke$$89$$.$getSubType$();
  if($subType$$7$$ == dvt.$PanEvent$.$SUBTYPE_ELASTIC_ANIM_BEGIN$) {
    $JSCompiler_StaticMethods__updateAnimator$$(this, $event$$483_i$$572_stroke$$89$$, $JSCompiler_alias_FALSE$$)
  }else {
    if($subType$$7$$ == dvt.$PanEvent$.$SUBTYPE_PANNED$ && $event$$483_i$$572_stroke$$89$$.$_newX$ != $JSCompiler_alias_NULL$$) {
      var $pzcMatrix$$3_styleMap$$91$$ = this.$_pzc$.$_contentPane$.$getMatrix$();
      $event$$483_i$$572_stroke$$89$$.$_animator$ = $JSCompiler_alias_NULL$$;
      this.dispatchEvent(dvt.$EventFactory$.$newThematicMapViewportChangeEvent$($pzcMatrix$$3_styleMap$$91$$.$_tx$, $pzcMatrix$$3_styleMap$$91$$.$_ty$, this.$_pzc$.$getZoom$()));
      $JSCompiler_StaticMethods__transformContainers$$(this, $pzcMatrix$$3_styleMap$$91$$);
      for($event$$483_i$$572_stroke$$89$$ = 0;$event$$483_i$$572_stroke$$89$$ < this.$_layers$.length;$event$$483_i$$572_stroke$$89$$++) {
        this.$_layers$[$event$$483_i$$572_stroke$$89$$].$HandlePanEvent$($pzcMatrix$$3_styleMap$$91$$)
      }
    }
  }
  this.$_legendPanel$ && (this.$_skinName$ == dvt.$CSSStyle$.$SKIN_ALTA$ ? $subType$$7$$ === dvt.$PanEvent$.$SUBTYPE_DRAG_PAN_BEGIN$ ? this.$_legendPanel$.$setMouseEnabled$($JSCompiler_alias_FALSE$$) : $subType$$7$$ === dvt.$PanEvent$.$SUBTYPE_DRAG_PAN_END$ && this.$_legendPanel$.$setMouseEnabled$($JSCompiler_alias_TRUE$$) : ($pzcMatrix$$3_styleMap$$91$$ = this.$getSubcomponentStyles$(), $event$$483_i$$572_stroke$$89$$ = this.$_legendPanel$.$_background$.$getStroke$().$clone$(), $subType$$7$$ === 
  dvt.$PanEvent$.$SUBTYPE_DRAG_PAN_BEGIN$ ? (this.$_legend$.$setAlpha$($pzcMatrix$$3_styleMap$$91$$[dvt.$ControlPanel$.$BG_DRAG_ALPHA$]), $event$$483_i$$572_stroke$$89$$.$setAlpha$($pzcMatrix$$3_styleMap$$91$$[dvt.$ControlPanel$.$FRAME_DRAG_ALPHA$]), this.$_legendPanel$.$_background$.$setStroke$($event$$483_i$$572_stroke$$89$$), this.$_legendPanel$.$_buttonFrame$ && this.$_legendPanel$.$_buttonFrame$.$setAlpha$($pzcMatrix$$3_styleMap$$91$$[dvt.$ControlPanel$.$FRAME_DRAG_ALPHA$]), this.$_legendPanel$.$setMouseEnabled$($JSCompiler_alias_FALSE$$)) : 
  $subType$$7$$ === dvt.$PanEvent$.$SUBTYPE_DRAG_PAN_END$ && (this.$_legend$.$setAlpha$(1), $event$$483_i$$572_stroke$$89$$.$setAlpha$($pzcMatrix$$3_styleMap$$91$$[dvt.$ControlPanel$.$FRAME_ROLLOUT_ALPHA$]), this.$_legendPanel$.$_background$.$setStroke$($event$$483_i$$572_stroke$$89$$), this.$_legendPanel$.$_buttonFrame$ && this.$_legendPanel$.$_buttonFrame$.$setAlpha$($pzcMatrix$$3_styleMap$$91$$[dvt.$ControlPanel$.$FRAME_ROLLOUT_ALPHA$]), this.$_legendPanel$.$setMouseEnabled$($JSCompiler_alias_TRUE$$))))
};
$JSCompiler_prototypeAlias$$.$GetControlPanelBehavior$ = function $$JSCompiler_prototypeAlias$$$$GetControlPanelBehavior$$() {
  return"none" == this.$_drillMode$ && !this.$_zooming$ && (!this.$_panning$ || this.$_skinName$ == dvt.$CSSStyle$.$SKIN_ALTA$) ? dvt.$PanZoomComponent$.$CONTROL_PANEL_BEHAVIOR_HIDDEN$ : dvt.$ThematicMap$.$superclass$.$GetControlPanelBehavior$.call(this)
};
$JSCompiler_prototypeAlias$$.$GetControlPanel$ = function $$JSCompiler_prototypeAlias$$$$GetControlPanel$$() {
  var $cpBehavior$$3$$ = this.$GetControlPanelBehavior$();
  return $cpBehavior$$3$$ != dvt.$PanZoomComponent$.$CONTROL_PANEL_BEHAVIOR_HIDDEN$ ? new $DvtThematicMapControlPanel$$(this.$getCtx$(), this, $cpBehavior$$3$$ == dvt.$PanZoomComponent$.$CONTROL_PANEL_BEHAVIOR_INIT_COLLAPSED$ ? dvt.$ControlPanel$.$STATE_COLLAPSED$ : dvt.$ControlPanel$.$STATE_EXPANDED$) : $JSCompiler_alias_NULL$$
};
function $JSCompiler_StaticMethods__processInitialDrilled$$($JSCompiler_StaticMethods__processInitialDrilled$self$$) {
  $JSCompiler_StaticMethods__processInitialDrilled$self$$.$_processingInitDrilled$ = $JSCompiler_alias_TRUE$$;
  for(var $i$$573$$ = 0;$i$$573$$ < $JSCompiler_StaticMethods__processInitialDrilled$self$$.$_layers$.length;$i$$573$$++) {
    var $layerName$$2$$ = $JSCompiler_StaticMethods__processInitialDrilled$self$$.$_layers$[$i$$573$$].$LayerName$;
    $layerName$$2$$ in $JSCompiler_StaticMethods__processInitialDrilled$self$$.$_initDrilled$ && ($JSCompiler_StaticMethods__processInitialDrilled$self$$.$_selectedAreas$[$layerName$$2$$] = $JSCompiler_StaticMethods__processInitialDrilled$self$$.$_initDrilled$[$layerName$$2$$][1], $JSCompiler_StaticMethods__processInitialDrilled$self$$.$_clickedLayerName$ = $layerName$$2$$, $JSCompiler_StaticMethods__processInitialDrilled$self$$.$_clickedDataLayerId$ = $JSCompiler_StaticMethods__processInitialDrilled$self$$.$_initDrilled$[$layerName$$2$$][0], 
    $JSCompiler_StaticMethods__processInitialDrilled$self$$.$drillDown$())
  }
  $JSCompiler_StaticMethods__processInitialDrilled$self$$.$_processingInitDrilled$ = $JSCompiler_alias_FALSE$$
}
$JSCompiler_prototypeAlias$$.$resetMap$ = function $$JSCompiler_prototypeAlias$$$$resetMap$$() {
  $JSCompiler_StaticMethods__stopAnimation$$(this);
  for(var $animator$$inline_4611_removeObjs$$ = [], $addObjs$$ = [], $i$$574_j$$83$$ = this.$_layers$.length - 1;-1 < $i$$574_j$$83$$;$i$$574_j$$83$$--) {
    this.$_layers$[$i$$574_j$$83$$].$LayerName$ == this.$_topLayer$.$LayerName$ ? this.$_layers$[$i$$574_j$$83$$].reset($addObjs$$) : this.$_layers$[$i$$574_j$$83$$].reset($animator$$inline_4611_removeObjs$$)
  }
  for($i$$574_j$$83$$ = 0;$i$$574_j$$83$$ < $animator$$inline_4611_removeObjs$$.length;$i$$574_j$$83$$++) {
    if($animator$$inline_4611_removeObjs$$[$i$$574_j$$83$$]) {
      var $parent$$71$$ = $animator$$inline_4611_removeObjs$$[$i$$574_j$$83$$].getParent();
      $parent$$71$$ && $parent$$71$$.removeChild($animator$$inline_4611_removeObjs$$[$i$$574_j$$83$$])
    }
  }
  for($i$$574_j$$83$$ = 0;$i$$574_j$$83$$ < $addObjs$$.length;$i$$574_j$$83$$++) {
    $addObjs$$[$i$$574_j$$83$$] && $addObjs$$[$i$$574_j$$83$$].$setAlpha$(1)
  }
  this.$_drilledRowKeys$ = [];
  $animator$$inline_4611_removeObjs$$ = new dvt.$Animator$(this.$getCtx$(), 0.3);
  this.$_pzc$.$zoomToFit$($animator$$inline_4611_removeObjs$$);
  $animator$$inline_4611_removeObjs$$.play();
  this.$_drilled$ = [];
  this.$_controlPanel$ && "none" != this.$_drillMode$ && ($JSCompiler_StaticMethods_setEnabledDrillDownButton$$(this.$_controlPanel$, $JSCompiler_alias_FALSE$$), $JSCompiler_StaticMethods_setEnabledDrillUpButton$$(this.$_controlPanel$, $JSCompiler_alias_FALSE$$))
};
function $JSCompiler_StaticMethods__zoomData$$($JSCompiler_StaticMethods__zoomData$self$$) {
  var $areaBounds_bounds$$118$$ = $JSCompiler_StaticMethods__zoomData$self$$.$_dataAreaLayers$.$getDimensions$(), $pointBounds$$ = $JSCompiler_StaticMethods__zoomData$self$$.$_dataPointLayers$.$getDimensions$();
  if($JSCompiler_StaticMethods__zoomData$self$$.$_isMarkerZoomBehaviorFixed$) {
    var $mat$$27$$ = $JSCompiler_StaticMethods__zoomData$self$$.$_pzc$.$_contentPane$.$getMatrix$();
    $pointBounds$$.$w$ /= $mat$$27$$.$_a$;
    $pointBounds$$.$h$ /= $mat$$27$$.$_d$;
    $pointBounds$$.x /= $mat$$27$$.$_a$;
    $pointBounds$$.y /= $mat$$27$$.$_d$
  }
  $areaBounds_bounds$$118$$ = $areaBounds_bounds$$118$$.$getUnion$($pointBounds$$);
  $JSCompiler_StaticMethods__stopAnimation$$($JSCompiler_StaticMethods__zoomData$self$$);
  var $maxZoom$$4$$;
  $JSCompiler_StaticMethods__zoomData$self$$.$_pzc$.$_bZoomingEnabled$ || ($maxZoom$$4$$ = $JSCompiler_StaticMethods__zoomData$self$$.$_pzc$.$getMaxZoom$(), $JSCompiler_StaticMethods__zoomData$self$$.$_pzc$.$setMaxZoom$($maxZoom$$4$$ * $JSCompiler_StaticMethods__zoomData$self$$.$_maxZoomFactor$));
  var $animation$$5$$;
  dvt.$Agent$.$isEnvironmentBrowser$() && ($animation$$5$$ = new dvt.$Animator$($JSCompiler_StaticMethods__zoomData$self$$.$getCtx$(), 0.3));
  0 < $areaBounds_bounds$$118$$.$w$ && 0 < $areaBounds_bounds$$118$$.$h$ ? $JSCompiler_StaticMethods__zoomData$self$$.$_pzc$.$zoomToFit$($animation$$5$$, $areaBounds_bounds$$118$$) : $JSCompiler_StaticMethods__zoomData$self$$.$_pzc$.$zoomToFit$($animation$$5$$, $JSCompiler_StaticMethods__zoomData$self$$.$_topLayer$.$getLayerDim$());
  $animation$$5$$ && $animation$$5$$.play();
  $maxZoom$$4$$ && $JSCompiler_StaticMethods__zoomData$self$$.$_pzc$.$setMaxZoom$($maxZoom$$4$$)
}
$JSCompiler_prototypeAlias$$.$_zoomToFitBounds$ = function $$JSCompiler_prototypeAlias$$$$_zoomToFitBounds$$($bounds$$119$$) {
  var $animator$$131$$ = new dvt.$Animator$(this.$getCtx$(), 0.3);
  this.$_pzc$.$zoomToFit$($animator$$131$$, $bounds$$119$$);
  $animator$$131$$.play()
};
function $JSCompiler_StaticMethods_fitSelectedRegions$$($JSCompiler_StaticMethods_fitSelectedRegions$self$$) {
  if($JSCompiler_StaticMethods_fitSelectedRegions$self$$.$_clickedDataLayerId$) {
    var $dataLayer_selection$$21_selectionHandler$$4$$ = $JSCompiler_StaticMethods_getLayer$$($JSCompiler_StaticMethods_fitSelectedRegions$self$$, $JSCompiler_StaticMethods_fitSelectedRegions$self$$.$_clickedLayerName$).$getDataLayer$($JSCompiler_StaticMethods_fitSelectedRegions$self$$.$_clickedDataLayerId$);
    if($dataLayer_selection$$21_selectionHandler$$4$$ && ($dataLayer_selection$$21_selectionHandler$$4$$ = $dataLayer_selection$$21_selectionHandler$$4$$.$_selectionHandler$)) {
      for(var $dataLayer_selection$$21_selectionHandler$$4$$ = $dataLayer_selection$$21_selectionHandler$$4$$.getSelection(), $i$$575$$ = 0;$i$$575$$ < $dataLayer_selection$$21_selectionHandler$$4$$.length;$i$$575$$++) {
        $dataLayer_selection$$21_selectionHandler$$4$$[$i$$575$$] = $dataLayer_selection$$21_selectionHandler$$4$$[$i$$575$$].$getDisplayable$()
      }
      if(0 < $dataLayer_selection$$21_selectionHandler$$4$$.length) {
        for(var $bounds$$120$$ = $dataLayer_selection$$21_selectionHandler$$4$$[0].$getDimensions$(), $i$$575$$ = 1;$i$$575$$ < $dataLayer_selection$$21_selectionHandler$$4$$.length;$i$$575$$++) {
          $bounds$$120$$ = $bounds$$120$$.$getUnion$($dataLayer_selection$$21_selectionHandler$$4$$[$i$$575$$].$getDimensions$())
        }
        $JSCompiler_StaticMethods_fitSelectedRegions$self$$.$_zoomToFitBounds$($bounds$$120$$)
      }
    }
  }
}
function $JSCompiler_StaticMethods_getDrillParentLayer$$($JSCompiler_StaticMethods_getDrillParentLayer$self$$, $layerName$$3$$) {
  var $parentLayerName$$ = $DvtBaseMapManager$$.$getParentLayerName$($JSCompiler_StaticMethods_getDrillParentLayer$self$$.$_mapName$, $layerName$$3$$);
  return $JSCompiler_StaticMethods_getLayer$$($JSCompiler_StaticMethods_getDrillParentLayer$self$$, $parentLayerName$$)
}
function $JSCompiler_StaticMethods_getDrillChildLayer$$($JSCompiler_StaticMethods_getDrillChildLayer$self$$, $layerName$$4$$) {
  var $childLayerName$$ = $DvtBaseMapManager$$.$getChildLayerName$($JSCompiler_StaticMethods_getDrillChildLayer$self$$.$_mapName$, $layerName$$4$$);
  return $JSCompiler_StaticMethods_getLayer$$($JSCompiler_StaticMethods_getDrillChildLayer$self$$, $childLayerName$$)
}
function $JSCompiler_StaticMethods_getNavigableAreas$$($JSCompiler_StaticMethods_getNavigableAreas$self$$) {
  var $disclosed$$4$$ = [];
  if($JSCompiler_StaticMethods_getNavigableAreas$self$$.$_topLayer$) {
    for(var $i$$576$$ = 0;$i$$576$$ < $JSCompiler_StaticMethods_getNavigableAreas$self$$.$_layers$.length;$i$$576$$++) {
      var $dataLayers$$ = $JSCompiler_StaticMethods_getNavigableAreas$self$$.$_layers$[$i$$576$$].$DataLayers$, $id$$179$$;
      for($id$$179$$ in $dataLayers$$) {
        $disclosed$$4$$ = $JSCompiler_StaticMethods_getNavigableAreas$self$$.$_topLayer$.$LayerName$ == $JSCompiler_StaticMethods_getNavigableAreas$self$$.$_layers$[$i$$576$$].$LayerName$ ? $disclosed$$4$$.concat($JSCompiler_StaticMethods_getNavigableAreaObjects$$($dataLayers$$[$id$$179$$])) : $disclosed$$4$$.concat($JSCompiler_StaticMethods_getNavigableDisclosedAreaObjects$$($dataLayers$$[$id$$179$$]))
      }
    }
  }
  return $disclosed$$4$$
}
function $JSCompiler_StaticMethods_getNavigableObjects$$($JSCompiler_StaticMethods_getNavigableObjects$self$$) {
  var $navigable$$13$$ = [];
  if($JSCompiler_StaticMethods_getNavigableObjects$self$$.$_topLayer$) {
    for(var $i$$577$$ = 0;$i$$577$$ < $JSCompiler_StaticMethods_getNavigableObjects$self$$.$_layers$.length;$i$$577$$++) {
      var $dataLayers$$1$$ = $JSCompiler_StaticMethods_getNavigableObjects$self$$.$_layers$[$i$$577$$].$DataLayers$;
      if($JSCompiler_StaticMethods_getNavigableObjects$self$$.$_topLayer$.$LayerName$ == $JSCompiler_StaticMethods_getNavigableObjects$self$$.$_layers$[$i$$577$$].$LayerName$ || !($JSCompiler_StaticMethods_getNavigableObjects$self$$.$_layers$[$i$$577$$] instanceof $DvtMapAreaLayer$$)) {
        for(var $id$$180$$ in $dataLayers$$1$$) {
          $navigable$$13$$ = $navigable$$13$$.concat($dataLayers$$1$$[$id$$180$$].$_dataObjs$)
        }
      }
    }
  }
  return $navigable$$13$$
}
$JSCompiler_prototypeAlias$$.$_setCenteredObjsMatrix$ = function $$JSCompiler_prototypeAlias$$$$_setCenteredObjsMatrix$$($matrix$$13$$) {
  this.$_currentAnimMatrix$ = $matrix$$13$$;
  if(this.$_isMarkerZoomBehaviorFixed$) {
    for(var $numLabelLayers_objs$$12$$ = $JSCompiler_StaticMethods_getNavigableObjects$$(this), $i$$578_j$$84$$ = 0;$i$$578_j$$84$$ < $numLabelLayers_objs$$12$$.length;$i$$578_j$$84$$++) {
      $numLabelLayers_objs$$12$$[$i$$578_j$$84$$].$HandleZoomEvent$($matrix$$13$$)
    }
    $numLabelLayers_objs$$12$$ = this.$_labelLayers$.$getNumChildren$();
    for($i$$578_j$$84$$ = 0;$i$$578_j$$84$$ < $numLabelLayers_objs$$12$$;$i$$578_j$$84$$++) {
      for(var $labelLayer$$ = this.$_labelLayers$.$getChildAt$($i$$578_j$$84$$), $numLabels$$1$$ = $labelLayer$$.$getNumChildren$(), $k$$5$$ = 0;$k$$5$$ < $numLabels$$1$$;$k$$5$$++) {
        var $label$$75$$ = $labelLayer$$.$getChildAt$($k$$5$$);
        $label$$75$$ instanceof $DvtMapLabel$$ && $label$$75$$.update($matrix$$13$$)
      }
    }
  }
};
$JSCompiler_prototypeAlias$$.$_getCenteredObjsMatrix$ = $JSCompiler_get$$("$_currentAnimMatrix$");
$JSCompiler_prototypeAlias$$.$drillDown$ = function $$JSCompiler_prototypeAlias$$$$drillDown$$() {
  $JSCompiler_StaticMethods__stopAnimation$$(this);
  var $childLayer$$ = $JSCompiler_StaticMethods_getDrillChildLayer$$(this, this.$_clickedLayerName$), $parentLayer$$1$$ = $JSCompiler_StaticMethods_getLayer$$(this, this.$_clickedLayerName$), $fadeInObjs$$ = [];
  if($childLayer$$) {
    this.$_drillDataLayer$[this.$_clickedLayerName$] = this.$_clickedDataLayerId$;
    for(var $newSelectedAreas_selectedAreas$$ = this.$_selectedAreas$[this.$_clickedLayerName$], $areasToDrill$$ = [], $i$$579$$ = 0;$i$$579$$ < $newSelectedAreas_selectedAreas$$.length;$i$$579$$++) {
      var $JSCompiler_inline_result$$231_dataObjs$$inline_4615_parentArea$$;
      a: {
        $JSCompiler_inline_result$$231_dataObjs$$inline_4615_parentArea$$ = $parentLayer$$1$$.$getDataLayer$(this.$_clickedDataLayerId$).$_areaObjs$;
        for(var $JSCompiler_StaticMethods_drill$self$$inline_4618_childrenToDisclose_drillLayer_j$$inline_4616$$ = 0;$JSCompiler_StaticMethods_drill$self$$inline_4618_childrenToDisclose_drillLayer_j$$inline_4616$$ < $JSCompiler_inline_result$$231_dataObjs$$inline_4615_parentArea$$.length;$JSCompiler_StaticMethods_drill$self$$inline_4618_childrenToDisclose_drillLayer_j$$inline_4616$$++) {
          if($JSCompiler_inline_result$$231_dataObjs$$inline_4615_parentArea$$[$JSCompiler_StaticMethods_drill$self$$inline_4618_childrenToDisclose_drillLayer_j$$inline_4616$$].$getLocation$() === $newSelectedAreas_selectedAreas$$[$i$$579$$]) {
            $JSCompiler_inline_result$$231_dataObjs$$inline_4615_parentArea$$ = $JSCompiler_inline_result$$231_dataObjs$$inline_4615_parentArea$$[$JSCompiler_StaticMethods_drill$self$$inline_4618_childrenToDisclose_drillLayer_j$$inline_4616$$];
            break a
          }
        }
        $JSCompiler_inline_result$$231_dataObjs$$inline_4615_parentArea$$ = $JSCompiler_alias_NULL$$
      }
      $JSCompiler_inline_result$$231_dataObjs$$inline_4615_parentArea$$.$isDrilled$() || $areasToDrill$$.push($newSelectedAreas_selectedAreas$$[$i$$579$$])
    }
    !this.$_processingInitDrilled$ && "single" == this.$_drillMode$ && (this.$_drilled$.pop(), $parentLayer$$1$$.reset($fadeInObjs$$, $newSelectedAreas_selectedAreas$$), $childLayer$$.reset(this.$_drillAnimFadeOutObjs$));
    $newSelectedAreas_selectedAreas$$ = [];
    for($i$$579$$ = 0;$i$$579$$ < $areasToDrill$$.length;$i$$579$$++) {
      $JSCompiler_inline_result$$231_dataObjs$$inline_4615_parentArea$$ = $areasToDrill$$[$i$$579$$];
      $JSCompiler_StaticMethods_drill$self$$inline_4618_childrenToDisclose_drillLayer_j$$inline_4616$$ = $JSCompiler_StaticMethods_getChildrenForArea$$($parentLayer$$1$$, $JSCompiler_inline_result$$231_dataObjs$$inline_4615_parentArea$$);
      $newSelectedAreas_selectedAreas$$.push($JSCompiler_StaticMethods_drill$self$$inline_4618_childrenToDisclose_drillLayer_j$$inline_4616$$[0]);
      for(var $areaName$$inline_4619_j$$85$$ = 0;$areaName$$inline_4619_j$$85$$ < $JSCompiler_StaticMethods_drill$self$$inline_4618_childrenToDisclose_drillLayer_j$$inline_4616$$.length;$areaName$$inline_4619_j$$85$$++) {
        this.$_childToParent$[$JSCompiler_StaticMethods_drill$self$$inline_4618_childrenToDisclose_drillLayer_j$$inline_4616$$[$areaName$$inline_4619_j$$85$$]] = $JSCompiler_inline_result$$231_dataObjs$$inline_4615_parentArea$$
      }
      $childLayer$$.$discloseAreas$($JSCompiler_StaticMethods_drill$self$$inline_4618_childrenToDisclose_drillLayer_j$$inline_4616$$, $fadeInObjs$$);
      if($JSCompiler_StaticMethods_drill$self$$inline_4618_childrenToDisclose_drillLayer_j$$inline_4616$$ = $parentLayer$$1$$.$getDataLayer$(this.$_clickedDataLayerId$)) {
        for(var $areaName$$inline_4619_j$$85$$ = $JSCompiler_inline_result$$231_dataObjs$$inline_4615_parentArea$$, $fadeOutObjs$$inline_4620$$ = this.$_drillAnimFadeOutObjs$, $i$$inline_4621_label$$inline_4622_leaderLine$$inline_4623$$ = 0;$i$$inline_4621_label$$inline_4622_leaderLine$$inline_4623$$ < $JSCompiler_StaticMethods_drill$self$$inline_4618_childrenToDisclose_drillLayer_j$$inline_4616$$.$_areaObjs$.length;$i$$inline_4621_label$$inline_4622_leaderLine$$inline_4623$$++) {
          if($JSCompiler_StaticMethods_drill$self$$inline_4618_childrenToDisclose_drillLayer_j$$inline_4616$$.$_areaObjs$[$i$$inline_4621_label$$inline_4622_leaderLine$$inline_4623$$].$getLocation$() == $areaName$$inline_4619_j$$85$$) {
            $JSCompiler_StaticMethods_drill$self$$inline_4618_childrenToDisclose_drillLayer_j$$inline_4616$$.$_areaObjs$[$i$$inline_4621_label$$inline_4622_leaderLine$$inline_4623$$].$setDrilled$($JSCompiler_alias_TRUE$$);
            $JSCompiler_StaticMethods_drill$self$$inline_4618_childrenToDisclose_drillLayer_j$$inline_4616$$.$_drilled$.push($areaName$$inline_4619_j$$85$$);
            $fadeOutObjs$$inline_4620$$.push($JSCompiler_StaticMethods_drill$self$$inline_4618_childrenToDisclose_drillLayer_j$$inline_4616$$.$_areaObjs$[$i$$inline_4621_label$$inline_4622_leaderLine$$inline_4623$$].$getDisplayable$());
            if($i$$inline_4621_label$$inline_4622_leaderLine$$inline_4623$$ = $JSCompiler_StaticMethods_drill$self$$inline_4618_childrenToDisclose_drillLayer_j$$inline_4616$$.$_areaObjs$[$i$$inline_4621_label$$inline_4622_leaderLine$$inline_4623$$].$getLabel$()) {
              $fadeOutObjs$$inline_4620$$.push($i$$inline_4621_label$$inline_4622_leaderLine$$inline_4623$$), ($i$$inline_4621_label$$inline_4622_leaderLine$$inline_4623$$ = $i$$inline_4621_label$$inline_4622_leaderLine$$inline_4623$$.$_leaderLine$) && $fadeOutObjs$$inline_4620$$.push($i$$inline_4621_label$$inline_4622_leaderLine$$inline_4623$$)
            }
            break
          }
        }
        for($i$$inline_4621_label$$inline_4622_leaderLine$$inline_4623$$ = 0;$i$$inline_4621_label$$inline_4622_leaderLine$$inline_4623$$ < $JSCompiler_StaticMethods_drill$self$$inline_4618_childrenToDisclose_drillLayer_j$$inline_4616$$.$_dataObjs$.length;$i$$inline_4621_label$$inline_4622_leaderLine$$inline_4623$$++) {
          if($JSCompiler_StaticMethods_drill$self$$inline_4618_childrenToDisclose_drillLayer_j$$inline_4616$$.$_dataObjs$[$i$$inline_4621_label$$inline_4622_leaderLine$$inline_4623$$].$getLocation$() == $areaName$$inline_4619_j$$85$$) {
            $fadeOutObjs$$inline_4620$$.push($JSCompiler_StaticMethods_drill$self$$inline_4618_childrenToDisclose_drillLayer_j$$inline_4616$$.$_dataObjs$[$i$$inline_4621_label$$inline_4622_leaderLine$$inline_4623$$].$getDisplayable$());
            break
          }
        }
      }
      this.$_drilled$.push($JSCompiler_inline_result$$231_dataObjs$$inline_4615_parentArea$$)
    }
    $JSCompiler_StaticMethods__handleDrillAnimations$$(this, this.$_drillAnimFadeOutObjs$, $fadeInObjs$$, $JSCompiler_alias_FALSE$$);
    $JSCompiler_StaticMethods__updateDrillButton$$(this, $childLayer$$.$LayerName$, $JSCompiler_alias_TRUE$$);
    this.$_clickedLayerName$ = $childLayer$$.$LayerName$;
    this.$_selectedAreas$[this.$_clickedLayerName$] = $newSelectedAreas_selectedAreas$$
  }
};
$JSCompiler_prototypeAlias$$.$drillUp$ = function $$JSCompiler_prototypeAlias$$$$drillUp$$() {
  $JSCompiler_StaticMethods__stopAnimation$$(this);
  for(var $childLayer$$1$$ = $JSCompiler_StaticMethods_getLayer$$(this, this.$_clickedLayerName$), $parentLayer$$2$$ = $JSCompiler_StaticMethods_getDrillParentLayer$$(this, this.$_clickedLayerName$), $fadeInObjs$$1$$ = [], $newSelectedAreas$$1$$ = [], $selectedAreas$$1$$ = this.$_selectedAreas$[this.$_clickedLayerName$], $i$$580$$ = 0;$i$$580$$ < $selectedAreas$$1$$.length;$i$$580$$++) {
    var $index$$187_parentArea$$1$$ = this.$_childToParent$[$selectedAreas$$1$$[$i$$580$$]];
    $newSelectedAreas$$1$$.push($index$$187_parentArea$$1$$);
    if(-1 != dvt.$ArrayUtils$.$getIndex$(this.$_drilled$, $index$$187_parentArea$$1$$)) {
      $childLayer$$1$$.$undiscloseAreas$($JSCompiler_StaticMethods_getChildrenForArea$$($parentLayer$$2$$, $index$$187_parentArea$$1$$), this.$_drillAnimFadeOutObjs$);
      for(var $JSCompiler_StaticMethods_undrill$self$$inline_4625$$ = $parentLayer$$2$$.$getDataLayer$(this.$_drillDataLayer$[$parentLayer$$2$$.$LayerName$]), $areaName$$inline_4626$$ = $index$$187_parentArea$$1$$, $fadeInObjs$$inline_4627$$ = $fadeInObjs$$1$$, $i$$inline_4628_label$$inline_4631$$ = 0;$i$$inline_4628_label$$inline_4631$$ < $JSCompiler_StaticMethods_undrill$self$$inline_4625$$.$_areaObjs$.length;$i$$inline_4628_label$$inline_4631$$++) {
        if($JSCompiler_StaticMethods_undrill$self$$inline_4625$$.$_areaObjs$[$i$$inline_4628_label$$inline_4631$$].$getLocation$() == $areaName$$inline_4626$$) {
          var $displayable$$inline_4630_idx$$inline_4629$$ = dvt.$ArrayUtils$.$getIndex$($JSCompiler_StaticMethods_undrill$self$$inline_4625$$.$_drilled$, $areaName$$inline_4626$$);
          $JSCompiler_StaticMethods_undrill$self$$inline_4625$$.$_drilled$.splice($displayable$$inline_4630_idx$$inline_4629$$, 1);
          $JSCompiler_StaticMethods_undrill$self$$inline_4625$$.$_areaObjs$[$i$$inline_4628_label$$inline_4631$$].$setDrilled$($JSCompiler_alias_FALSE$$);
          $displayable$$inline_4630_idx$$inline_4629$$ = $JSCompiler_StaticMethods_undrill$self$$inline_4625$$.$_areaObjs$[$i$$inline_4628_label$$inline_4631$$].$getDisplayable$();
          $JSCompiler_StaticMethods_undrill$self$$inline_4625$$.$_dataAreaLayer$.$addChild$($displayable$$inline_4630_idx$$inline_4629$$);
          $fadeInObjs$$inline_4627$$.push($displayable$$inline_4630_idx$$inline_4629$$);
          if($i$$inline_4628_label$$inline_4631$$ = $JSCompiler_StaticMethods_undrill$self$$inline_4625$$.$_areaObjs$[$i$$inline_4628_label$$inline_4631$$].$getLabel$()) {
            $i$$inline_4628_label$$inline_4631$$.update($JSCompiler_StaticMethods_undrill$self$$inline_4625$$.$_pzcMatrix$), $fadeInObjs$$inline_4627$$.push($i$$inline_4628_label$$inline_4631$$), $fadeInObjs$$inline_4627$$.push($i$$inline_4628_label$$inline_4631$$.$_leaderLine$)
          }
          break
        }
      }
      for($i$$inline_4628_label$$inline_4631$$ = 0;$i$$inline_4628_label$$inline_4631$$ < $JSCompiler_StaticMethods_undrill$self$$inline_4625$$.$_dataObjs$.length;$i$$inline_4628_label$$inline_4631$$++) {
        if($JSCompiler_StaticMethods_undrill$self$$inline_4625$$.$_dataObjs$[$i$$inline_4628_label$$inline_4631$$].$getLocation$() == $areaName$$inline_4626$$) {
          $displayable$$inline_4630_idx$$inline_4629$$ = $JSCompiler_StaticMethods_undrill$self$$inline_4625$$.$_dataObjs$[$i$$inline_4628_label$$inline_4631$$].$getDisplayable$();
          $JSCompiler_StaticMethods_undrill$self$$inline_4625$$.$_dataPointLayer$.$addChild$($displayable$$inline_4630_idx$$inline_4629$$);
          $fadeInObjs$$inline_4627$$.push($displayable$$inline_4630_idx$$inline_4629$$);
          break
        }
      }
      $index$$187_parentArea$$1$$ = dvt.$ArrayUtils$.$getIndex$(this.$_drilled$, $index$$187_parentArea$$1$$);
      -1 != $index$$187_parentArea$$1$$ && this.$_drilled$.splice($index$$187_parentArea$$1$$, 1)
    }
  }
  $JSCompiler_StaticMethods__handleDrillAnimations$$(this, this.$_drillAnimFadeOutObjs$, $fadeInObjs$$1$$, $JSCompiler_alias_TRUE$$);
  this.$_clickedLayerName$ = $parentLayer$$2$$.$LayerName$;
  this.$_clickedDataLayerId$ = this.$_drillDataLayer$[this.$_clickedLayerName$];
  this.$_selectedAreas$[this.$_clickedLayerName$] = $newSelectedAreas$$1$$;
  $JSCompiler_StaticMethods__updateDrillButton$$(this, this.$_clickedLayerName$)
};
function $JSCompiler_StaticMethods__stopAnimation$$($JSCompiler_StaticMethods__stopAnimation$self$$) {
  $JSCompiler_StaticMethods__stopAnimation$self$$.$_animation$ && ($JSCompiler_StaticMethods__stopAnimation$self$$.$_animation$.stop($JSCompiler_alias_TRUE$$), $JSCompiler_StaticMethods__stopAnimation$self$$.$_animation$ = $JSCompiler_alias_NULL$$)
}
function $JSCompiler_StaticMethods__handleDrillAnimations$$($JSCompiler_StaticMethods__handleDrillAnimations$self$$, $oldObjs$$3$$, $newObjs$$3$$, $isDrillUp$$) {
  $JSCompiler_StaticMethods__handleDrillAnimations$self$$.$_pzc$.$_contentPane$.$getMatrix$();
  if("zoomToFit" == $JSCompiler_StaticMethods__handleDrillAnimations$self$$.$_animationOnDrill$ && !$JSCompiler_StaticMethods__handleDrillAnimations$self$$.$_processingInitDrilled$) {
    var $animator$$133$$ = new dvt.$Animator$($JSCompiler_StaticMethods__handleDrillAnimations$self$$.$getCtx$(), 0.3);
    dvt.$Agent$.$isEnvironmentBrowser$() || ($animator$$133$$ = $JSCompiler_alias_NULL$$);
    $isDrillUp$$ ? $JSCompiler_StaticMethods__handleDrillAnimations$self$$.$_pzc$.$zoomToFit$($animator$$133$$) : $JSCompiler_StaticMethods_fitSelectedRegions$$($JSCompiler_StaticMethods__handleDrillAnimations$self$$);
    $animator$$133$$ && $animator$$133$$.play()
  }
  $JSCompiler_StaticMethods__stopAnimation$$($JSCompiler_StaticMethods__handleDrillAnimations$self$$);
  if(dvt.$Agent$.$isEnvironmentBrowser$() && ("alphaFade" == $JSCompiler_StaticMethods__handleDrillAnimations$self$$.$_animationOnDrill$ || "auto" == $JSCompiler_StaticMethods__handleDrillAnimations$self$$.$_animationOnDrill$)) {
    $JSCompiler_StaticMethods__handleDrillAnimations$self$$.$_animation$ = dvt.$BlackBoxAnimationHandler$.$getCombinedAnimation$($JSCompiler_StaticMethods__handleDrillAnimations$self$$.$getCtx$(), "alphaFade", $oldObjs$$3$$, $newObjs$$3$$, $JSCompiler_alias_NULL$$, 0.5)
  }
  $JSCompiler_StaticMethods__handleDrillAnimations$self$$.$_animation$ ? ($JSCompiler_StaticMethods__handleDrillAnimations$self$$.$_eventHandler$.$hideTooltip$(), $JSCompiler_StaticMethods__handleDrillAnimations$self$$.$_eventHandler$.$removeListeners$($JSCompiler_StaticMethods__handleDrillAnimations$self$$), $JSCompiler_StaticMethods__handleDrillAnimations$self$$.$_animation$.$setOnEnd$($JSCompiler_StaticMethods__handleDrillAnimations$self$$.$OnDrillAnimationEnd$, $JSCompiler_StaticMethods__handleDrillAnimations$self$$), 
  $JSCompiler_StaticMethods__handleDrillAnimations$self$$.$_animation$.play()) : $JSCompiler_StaticMethods__cleanUpDrilledObjects$$($JSCompiler_StaticMethods__handleDrillAnimations$self$$)
}
$JSCompiler_prototypeAlias$$.dispatchEvent = function $$JSCompiler_prototypeAlias$$$dispatchEvent$($event$$484$$) {
  var $JSCompiler_temp_const$$5541_drillType$$inline_4638_type$$157$$ = $event$$484$$.type;
  if("selection" == $JSCompiler_temp_const$$5541_drillType$$inline_4638_type$$157$$) {
    if(this.$_clickedDataLayerId$) {
      this.$_selectedRowKeys$ = $event$$484$$.selection;
      for(var $JSCompiler_temp_const$$5541_drillType$$inline_4638_type$$157$$ = this.$_selectedAreas$, $JSCompiler_temp_const$$5540$$ = this.$_clickedLayerName$, $selectedObjs$$inline_6552$$ = this.$_selectedRowKeys$, $selectedAreas$$inline_6553$$ = [], $areaObjs$$inline_6554$$ = $JSCompiler_StaticMethods_getLayer$$(this, this.$_clickedLayerName$).$getDataLayer$(this.$_clickedDataLayerId$).$_areaObjs$, $i$$inline_6555$$ = 0;$i$$inline_6555$$ < $selectedObjs$$inline_6552$$.length;$i$$inline_6555$$++) {
        for(var $j$$inline_6556$$ = 0;$j$$inline_6556$$ < $areaObjs$$inline_6554$$.length;$j$$inline_6556$$++) {
          if($areaObjs$$inline_6554$$[$j$$inline_6556$$].getId() == $selectedObjs$$inline_6552$$[$i$$inline_6555$$]) {
            $selectedAreas$$inline_6553$$.push($areaObjs$$inline_6554$$[$j$$inline_6556$$].$getLocation$());
            break
          }
        }
      }
      $JSCompiler_temp_const$$5541_drillType$$inline_4638_type$$157$$[$JSCompiler_temp_const$$5540$$] = $selectedAreas$$inline_6553$$;
      $JSCompiler_StaticMethods__updateDrillButton$$(this, this.$_clickedLayerName$);
      $event$$484$$.clientId = this.$_clickedDataLayerId$;
      this.$_clickedObject$ && !(this.$_clickedObject$ instanceof dvt.$Marker$) && (this.$_zoomToFitObject$ = this.$_clickedObject$)
    }else {
      $JSCompiler_StaticMethods__updateDrillButton$$(this, $JSCompiler_alias_NULL$$), this.$_zoomToFitObject$ = $JSCompiler_alias_NULL$$
    }
  }else {
    if($JSCompiler_temp_const$$5541_drillType$$inline_4638_type$$157$$ == dvt.$MapDrillEvent$.$TYPE$) {
      $event$$484$$.$addParam$("clientId", this.$_eventClientId$), this.$_drilledRowKeys$ = "multiple" == this.$_drillMode$ ? this.$_drilledRowKeys$.concat(this.$_selectedRowKeys$) : this.$_selectedRowKeys$, $JSCompiler_temp_const$$5541_drillType$$inline_4638_type$$157$$ = $event$$484$$.$_drillType$, $JSCompiler_temp_const$$5541_drillType$$inline_4638_type$$157$$ == dvt.$MapDrillEvent$.$DRILL_UP$ && this.$drillUp$(), $JSCompiler_temp_const$$5541_drillType$$inline_4638_type$$157$$ == dvt.$MapDrillEvent$.$DRILL_DOWN$ ? 
      this.$drillDown$() : $JSCompiler_temp_const$$5541_drillType$$inline_4638_type$$157$$ == dvt.$MapDrillEvent$.$RESET$ && this.$resetMap$(), $event$$484$$.$setDisclosed$(this.$_drilledRowKeys$)
    }else {
      if("adfShowPopup" == $JSCompiler_temp_const$$5541_drillType$$inline_4638_type$$157$$ || "adfHidePopup" == $JSCompiler_temp_const$$5541_drillType$$inline_4638_type$$157$$) {
        $event$$484$$.clientId = this.$_eventClientId$
      }
    }
  }
  dvt.$ThematicMap$.$superclass$.dispatchEvent.call(this, $event$$484$$)
};
function $JSCompiler_StaticMethods__updateDrillButton$$($JSCompiler_StaticMethods__updateDrillButton$self$$, $layerName$$6_parentLayer$$3$$, $isDrillDown$$) {
  if($JSCompiler_StaticMethods__updateDrillButton$self$$.$_controlPanel$ && $JSCompiler_StaticMethods__updateDrillButton$self$$.$_drillMode$ && "none" != $JSCompiler_StaticMethods__updateDrillButton$self$$.$_drillMode$) {
    var $childLayer$$2$$ = $JSCompiler_StaticMethods_getDrillChildLayer$$($JSCompiler_StaticMethods__updateDrillButton$self$$, $layerName$$6_parentLayer$$3$$);
    $layerName$$6_parentLayer$$3$$ = $JSCompiler_StaticMethods_getDrillParentLayer$$($JSCompiler_StaticMethods__updateDrillButton$self$$, $layerName$$6_parentLayer$$3$$);
    $childLayer$$2$$ && !$isDrillDown$$ ? $JSCompiler_StaticMethods_setEnabledDrillDownButton$$($JSCompiler_StaticMethods__updateDrillButton$self$$.$_controlPanel$, $JSCompiler_alias_TRUE$$) : $JSCompiler_StaticMethods_setEnabledDrillDownButton$$($JSCompiler_StaticMethods__updateDrillButton$self$$.$_controlPanel$, $JSCompiler_alias_FALSE$$);
    $layerName$$6_parentLayer$$3$$ ? $JSCompiler_StaticMethods_setEnabledDrillUpButton$$($JSCompiler_StaticMethods__updateDrillButton$self$$.$_controlPanel$, $JSCompiler_alias_TRUE$$) : $JSCompiler_StaticMethods_setEnabledDrillUpButton$$($JSCompiler_StaticMethods__updateDrillButton$self$$.$_controlPanel$, $JSCompiler_alias_FALSE$$)
  }
}
$JSCompiler_prototypeAlias$$.$destroy$ = function $$JSCompiler_prototypeAlias$$$$destroy$$() {
  dvt.$ThematicMap$.$superclass$.$destroy$.call(this);
  this.$_eventHandler$ && (this.$_eventHandler$.$destroy$(), this.$_eventHandler$ = $JSCompiler_alias_NULL$$)
};
dvt.$ThematicMap$.prototype.destroy = dvt.$ThematicMap$.prototype.$destroy$;
$JSCompiler_prototypeAlias$$ = dvt.$ThematicMap$.prototype;
$JSCompiler_prototypeAlias$$.$OnAnimationEnd$ = function $$JSCompiler_prototypeAlias$$$$OnAnimationEnd$$() {
  this.$_controlPanel$ && this.$_pzc$.$addChild$(this.$_controlPanel$);
  this.$_oldPzc$ && (this.removeChild(this.$_oldPzc$), this.$_oldPzc$ = $JSCompiler_alias_NULL$$);
  this.$_animation$ = $JSCompiler_alias_NULL$$;
  this.$_initialZooming$ && $JSCompiler_StaticMethods__zoomData$$(this);
  this.$Options$.highlightedCategories && 0 < this.$Options$.highlightedCategories.length && this.$highlight$(this.$Options$.highlightedCategories);
  this.$_bListenersRemoved$ && (this.$_eventHandler$.$addListeners$(this), this.$_bListenersRemoved$ = $JSCompiler_alias_FALSE$$)
};
$JSCompiler_prototypeAlias$$.$OnDrillAnimationEnd$ = function $$JSCompiler_prototypeAlias$$$$OnDrillAnimationEnd$$() {
  $JSCompiler_StaticMethods__cleanUpDrilledObjects$$(this);
  this.$_animation$ = $JSCompiler_alias_NULL$$;
  this.$_eventHandler$.$addListeners$(this)
};
function $JSCompiler_StaticMethods__cleanUpDrilledObjects$$($JSCompiler_StaticMethods__cleanUpDrilledObjects$self$$) {
  if(0 < $JSCompiler_StaticMethods__cleanUpDrilledObjects$self$$.$_drillAnimFadeOutObjs$.length) {
    for(var $i$$581$$ = 0;$i$$581$$ < $JSCompiler_StaticMethods__cleanUpDrilledObjects$self$$.$_drillAnimFadeOutObjs$.length;$i$$581$$++) {
      var $obj$$197$$ = $JSCompiler_StaticMethods__cleanUpDrilledObjects$self$$.$_drillAnimFadeOutObjs$[$i$$581$$];
      if($obj$$197$$) {
        if($obj$$197$$ instanceof $DvtMapLabel$$) {
          $obj$$197$$.reset()
        }else {
          if($obj$$197$$.$isDrilled$ && $obj$$197$$.$isDrilled$()) {
            $obj$$197$$.$setAlpha$(0)
          }else {
            var $parent$$72$$ = $obj$$197$$.getParent();
            $parent$$72$$ && $parent$$72$$.removeChild($obj$$197$$)
          }
        }
      }
    }
    $JSCompiler_StaticMethods__cleanUpDrilledObjects$self$$.$_drillAnimFadeOutObjs$ = []
  }
}
$JSCompiler_prototypeAlias$$.$getShowPopupBehaviors$ = $JSCompiler_get$$("$_showPopupBehaviors$");
$JSCompiler_prototypeAlias$$.$setShowPopupBehaviors$ = $JSCompiler_set$$("$_showPopupBehaviors$");
$JSCompiler_prototypeAlias$$.$getAutomation$ = function $$JSCompiler_prototypeAlias$$$$getAutomation$$() {
  this.$Automation$ || (this.$Automation$ = new $DvtThematicMapAutomation$$(this));
  return this.$Automation$
};
dvt.$ThematicMap$.prototype.getAutomation = dvt.$ThematicMap$.prototype.$getAutomation$;
dvt.$ThematicMap$.prototype.$GetComponentDescription$ = function $dvt$$ThematicMap$$$$GetComponentDescription$$() {
  return dvt.$Bundle$.$getTranslatedString$(dvt.$Bundle$.$UTIL_PREFIX$, "THEMATIC_MAP")
};
dvt.$ThematicMap$.prototype.$processLegendEvent$ = function $dvt$$ThematicMap$$$$processLegendEvent$$($event$$487$$) {
  $event$$487$$.type == dvt.$ResizeEvent$.$RESIZE_EVENT$ && this.$_legend$ && this.$_legend$.$FireListener$($event$$487$$)
};
dvt.$ThematicMap$.prototype.$highlight$ = function $dvt$$ThematicMap$$$$highlight$$($categories$$25$$) {
  this.$Options$.highlightedCategories = dvt.$JsonUtils$.$clone$($categories$$25$$);
  dvt.$CategoryRolloverHandler$.$highlight$($categories$$25$$, $JSCompiler_StaticMethods_getNavigableAreas$$(this).concat($JSCompiler_StaticMethods_getNavigableObjects$$(this)), "any" == this.$Options$.highlightMatch)
};
dvt.$ThematicMap$.prototype.highlight = dvt.$ThematicMap$.prototype.$highlight$;
dvt.$ThematicMap$.prototype.$processDefaultHoverEffect$ = function $dvt$$ThematicMap$$$$processDefaultHoverEffect$$($id$$182$$, $hovered$$2$$) {
  var $dataItem$$42$$ = $JSCompiler_StaticMethods__getDataItemById$$(this, $id$$182$$);
  $dataItem$$42$$ && $dataItem$$42$$.$processDefaultHoverEffect$($hovered$$2$$)
};
dvt.$ThematicMap$.prototype.processDefaultHoverEffect = dvt.$ThematicMap$.prototype.$processDefaultHoverEffect$;
dvt.$ThematicMap$.prototype.$processDefaultSelectionEffect$ = function $dvt$$ThematicMap$$$$processDefaultSelectionEffect$$($id$$183$$, $selected$$35$$) {
  var $dataItem$$43$$ = $JSCompiler_StaticMethods__getDataItemById$$(this, $id$$183$$);
  $dataItem$$43$$ && $dataItem$$43$$.$processDefaultSelectionEffect$($selected$$35$$)
};
dvt.$ThematicMap$.prototype.processDefaultSelectionEffect = dvt.$ThematicMap$.prototype.$processDefaultSelectionEffect$;
dvt.$ThematicMap$.prototype.$processDefaultFocusEffect$ = function $dvt$$ThematicMap$$$$processDefaultFocusEffect$$($id$$184$$, $focused$$3$$) {
  var $dataItem$$44$$ = $JSCompiler_StaticMethods__getDataItemById$$(this, $id$$184$$);
  $dataItem$$44$$ && $dataItem$$44$$.$processDefaultFocusEffect$($focused$$3$$)
};
dvt.$ThematicMap$.prototype.processDefaultFocusEffect = dvt.$ThematicMap$.prototype.$processDefaultFocusEffect$;
function $JSCompiler_StaticMethods__getDataItemById$$($JSCompiler_StaticMethods__getDataItemById$self$$, $id$$185$$) {
  for(var $i$$583$$ = 0;$i$$583$$ < $JSCompiler_StaticMethods__getDataItemById$self$$.$_layers$.length;$i$$583$$++) {
    var $dataLayers$$3$$ = $JSCompiler_StaticMethods__getDataItemById$self$$.$_layers$[$i$$583$$].$DataLayers$, $dlId$$;
    for($dlId$$ in $dataLayers$$3$$) {
      for(var $dataObjs$$ = $dataLayers$$3$$[$dlId$$].$_dataObjs$, $j$$86$$ = 0;$j$$86$$ < $dataObjs$$.length;$j$$86$$++) {
        if($dataObjs$$[$j$$86$$].getId() === $id$$185$$) {
          return $dataObjs$$[$j$$86$$]
        }
      }
    }
  }
  return $JSCompiler_alias_NULL$$
}
function $DvtThematicMapDefaults$$() {
  this.Init({fusion:$DvtThematicMapDefaults$DEFAULT$$, alta:$DvtThematicMapDefaults$SKIN_ALTA$$})
}
dvt.$Obj$.$createSubclass$($DvtThematicMapDefaults$$, dvt.$BaseComponentDefaults$);
var $DvtThematicMapDefaults$DEFAULT$$ = {animationDuration:500, animationOnDisplay:"none", animationOnDrill:"none", animationOnMapChange:"none", controlPanelBehavior:"hidden", drilling:"none", highlightMatch:"all", hoverBehavior:"none", initialZooming:"none", markerZoomBehavior:"fixed", panning:"none", tooltipDisplay:"auto", touchResponse:"auto", visualEffects:"none", zooming:"none", styleDefaults:{skin:"alta", areaStyle:"background-color:#B8CDEC;border-color:#FFFFFF;", hoverBehaviorDelay:200, dataAreaDefaults:{borderColor:"#FFFFFF", 
drilledInnerColor:"#FFFFFF", drilledOuterColor:"#000000", hoverColor:"#FFFFFF", opacity:1, selectedInnerColor:"#FFFFFF", selectedOuterColor:"#000000"}, dataMarkerDefaults:{borderColor:"#FFFFFF", borderStyle:"solid", borderWidth:0.5, color:"#000000", height:8, labelStyle:"font-family:Tahoma;font-size:13pt;color:#000000", opacity:0.4, scaleX:1, scaleY:1, shape:"circle", width:8}, labelStyle:"font-family:Tahoma;font-size:11pt;"}, legend:{position:"auto", rendered:$JSCompiler_alias_TRUE$$, layout:{gapRatio:1}}, 
layout:{gapRatio:$JSCompiler_alias_NULL$$, legendMaxSize:0.3, legendGap:10}, resources:{images:{}, translations:{}}}, $DvtThematicMapDefaults$SKIN_ALTA$$ = {styleDefaults:{areaStyle:"background-color:#DDDDDD;border-color:#FFFFFF;", dataAreaDefaults:{drilledOuterColor:"#0572CE"}, dataMarkerDefaults:{color:"rgb(51,51,51)", labelStyle:'font-family:"Helvetica Neue",Helvetica,Arial,sans-serif;font-size:12px;color:#333333', opacity:1}, labelStyle:'font-family:"Helvetica Neue",Helvetica,Arial,sans-serif;font-size:12px;'}}, 
$DvtThematicMapDefaults$DEFAULT_AREA_LAYER$$ = {animationOnLayerChange:"none", labelDisplay:"auto", labelType:"short"}, $DvtThematicMapDefaults$DEFAULT_DATA_LAYER$$ = {animationOnDataChange:"none", selectionMode:"none"};
function $JSCompiler_StaticMethods__getCurrentDragSource$$($JSCompiler_StaticMethods__getCurrentDragSource$self$$) {
  for(var $i$$584$$ = 0;$i$$584$$ < $JSCompiler_StaticMethods__getCurrentDragSource$self$$.$_layers$.length;$i$$584$$++) {
    var $dataLayers$$4$$ = $JSCompiler_StaticMethods__getCurrentDragSource$self$$.$_layers$[$i$$584$$].$DataLayers$, $id$$186$$;
    for($id$$186$$ in $dataLayers$$4$$) {
      var $dragSource$$2$$ = $dataLayers$$4$$[$id$$186$$].$_dragSource$;
      if($dragSource$$2$$ && $dragSource$$2$$.$_dragCandidate$) {
        return $dragSource$$2$$
      }
    }
  }
  return $JSCompiler_alias_NULL$$
}
$JSCompiler_prototypeAlias$$ = dvt.$ThematicMap$.prototype;
$JSCompiler_prototypeAlias$$.$isDragAvailable$ = function $$JSCompiler_prototypeAlias$$$$isDragAvailable$$($dragSource$$3_mouseX$$39$$, $mouseY$$39$$, $clientIds$$18$$) {
  this.$_dragAllowed$ = $JSCompiler_alias_FALSE$$;
  return($dragSource$$3_mouseX$$39$$ = $JSCompiler_StaticMethods__getCurrentDragSource$$(this)) ? $dragSource$$3_mouseX$$39$$.$isDragAvailable$($clientIds$$18$$) : $JSCompiler_alias_FALSE$$
};
$JSCompiler_prototypeAlias$$.$getDragTransferable$ = function $$JSCompiler_prototypeAlias$$$$getDragTransferable$$($mouseX$$40$$, $mouseY$$40$$) {
  var $dragSource$$4$$ = $JSCompiler_StaticMethods__getCurrentDragSource$$(this);
  return $dragSource$$4$$ ? $dragSource$$4$$.$getDragTransferable$($mouseX$$40$$, $mouseY$$40$$) : $JSCompiler_alias_NULL$$
};
$JSCompiler_prototypeAlias$$.$getDragOverFeedback$ = function $$JSCompiler_prototypeAlias$$$$getDragOverFeedback$$($mouseX$$41$$, $mouseY$$41$$) {
  var $dragSource$$5$$ = $JSCompiler_StaticMethods__getCurrentDragSource$$(this);
  return $dragSource$$5$$ ? $dragSource$$5$$.$getDragOverFeedback$($mouseX$$41$$, $mouseY$$41$$) : $JSCompiler_alias_NULL$$
};
$JSCompiler_prototypeAlias$$.$getDragContext$ = function $$JSCompiler_prototypeAlias$$$$getDragContext$$($mouseX$$42$$, $mouseY$$42$$) {
  var $dragSource$$6$$ = $JSCompiler_StaticMethods__getCurrentDragSource$$(this);
  return $dragSource$$6$$ ? $dragSource$$6$$.$getDragContext$($mouseX$$42$$, $mouseY$$42$$) : $JSCompiler_alias_NULL$$
};
$JSCompiler_prototypeAlias$$.$getDragOffset$ = function $$JSCompiler_prototypeAlias$$$$getDragOffset$$($mouseX$$43$$, $mouseY$$43$$) {
  var $dragSource$$7$$ = $JSCompiler_StaticMethods__getCurrentDragSource$$(this);
  return $dragSource$$7$$ ? $dragSource$$7$$.$getDragOffset$($mouseX$$43$$, $mouseY$$43$$) : $JSCompiler_alias_NULL$$
};
$JSCompiler_prototypeAlias$$.$getPointerOffset$ = function $$JSCompiler_prototypeAlias$$$$getPointerOffset$$($xOffset$$5$$, $yOffset$$8$$) {
  var $dragSource$$8$$ = $JSCompiler_StaticMethods__getCurrentDragSource$$(this);
  return $dragSource$$8$$ ? $dragSource$$8$$.$getPointerOffset$($xOffset$$5$$, $yOffset$$8$$) : $JSCompiler_alias_NULL$$
};
$JSCompiler_prototypeAlias$$.$initiateDrag$ = function $$JSCompiler_prototypeAlias$$$$initiateDrag$$() {
  var $dragSource$$9$$ = $JSCompiler_StaticMethods__getCurrentDragSource$$(this);
  $dragSource$$9$$ && $dragSource$$9$$.$initiateDrag$()
};
$JSCompiler_prototypeAlias$$.$dragDropEnd$ = function $$JSCompiler_prototypeAlias$$$$dragDropEnd$$() {
  var $dragSource$$10$$ = $JSCompiler_StaticMethods__getCurrentDragSource$$(this);
  $dragSource$$10$$ && $dragSource$$10$$.$dragDropEnd$();
  this.$_panZoomCanvas$.$resetTouchTargets$()
};
$JSCompiler_prototypeAlias$$.$acceptDrag$ = function $$JSCompiler_prototypeAlias$$$$acceptDrag$$($mouseX$$45$$, $mouseY$$45$$, $clientIds$$19$$) {
  var $JSCompiler_inline_result$$174_mouseX$$inline_4665_zoom$$14$$ = this.$_pzc$.$getZoom$();
  $mouseX$$45$$ = ($mouseX$$45$$ - this.$_pzc$.$getPanX$()) / $JSCompiler_inline_result$$174_mouseX$$inline_4665_zoom$$14$$;
  $mouseY$$45$$ = ($mouseY$$45$$ - this.$_pzc$.$getPanY$()) / $JSCompiler_inline_result$$174_mouseX$$inline_4665_zoom$$14$$;
  a: {
    for(var $JSCompiler_inline_result$$174_mouseX$$inline_4665_zoom$$14$$ = $mouseX$$45$$, $mouseY$$inline_4666$$ = $mouseY$$45$$, $i$$inline_4667$$ = 0;$i$$inline_4667$$ < this.$_layers$.length;$i$$inline_4667$$++) {
      if(this.$_layers$[$i$$inline_4667$$].$getDropTarget$) {
        var $dropTarget$$inline_4668$$ = this.$_layers$[$i$$inline_4667$$].$_dropTarget$;
        if($dropTarget$$inline_4668$$ && $dropTarget$$inline_4668$$.$getDropSite$($JSCompiler_inline_result$$174_mouseX$$inline_4665_zoom$$14$$, $mouseY$$inline_4666$$)) {
          $JSCompiler_inline_result$$174_mouseX$$inline_4665_zoom$$14$$ = $dropTarget$$inline_4668$$;
          break a
        }
      }
    }
    $JSCompiler_inline_result$$174_mouseX$$inline_4665_zoom$$14$$ = $JSCompiler_alias_NULL$$
  }
  return(this.$_dropTarget$ = $JSCompiler_inline_result$$174_mouseX$$inline_4665_zoom$$14$$) ? this.$_dropTarget$.$acceptDrag$($mouseX$$45$$, $mouseY$$45$$, $clientIds$$19$$) : $JSCompiler_alias_NULL$$
};
$JSCompiler_prototypeAlias$$.$getDropSite$ = function $$JSCompiler_prototypeAlias$$$$getDropSite$$($mouseX$$46$$, $mouseY$$46$$) {
  var $zoom$$15$$ = this.$_pzc$.$getZoom$();
  $mouseX$$46$$ = ($mouseX$$46$$ - this.$_pzc$.$getPanX$()) / $zoom$$15$$;
  $mouseY$$46$$ = ($mouseY$$46$$ - this.$_pzc$.$getPanY$()) / $zoom$$15$$;
  return this.$_dropTarget$ ? this.$_dropTarget$.$getDropSite$($mouseX$$46$$, $mouseY$$46$$) : $JSCompiler_alias_NULL$$
};
function $DvtThematicMapDropTarget$$($areaLayer$$, $basemap$$) {
  this.$_areaLayer$ = $areaLayer$$;
  this.$_basemap$ = $basemap$$
}
dvt.$Obj$.$createSubclass$($DvtThematicMapDropTarget$$, dvt.$DropTarget$);
$DvtThematicMapDropTarget$$.prototype.$acceptDrag$ = function $$DvtThematicMapDropTarget$$$$$acceptDrag$$($mouseX$$47_obj$$198$$, $mouseY$$47$$, $clientIds$$20$$) {
  if($mouseX$$47_obj$$198$$ = $JSCompiler_StaticMethods___getObjectUnderPoint$$(this.$_areaLayer$, $mouseX$$47_obj$$198$$, $mouseY$$47$$)) {
    $mouseX$$47_obj$$198$$ != this.$_dropSite$ && (this.$_areaLayer$.$__showDropSiteFeedback$($mouseX$$47_obj$$198$$), this.$_dropSite$ = $mouseX$$47_obj$$198$$)
  }else {
    return this.$_areaLayer$.$__showDropSiteFeedback$($JSCompiler_alias_NULL$$), $JSCompiler_alias_NULL$$
  }
  return $clientIds$$20$$[0]
};
$DvtThematicMapDropTarget$$.prototype.$getDropSite$ = function $$DvtThematicMapDropTarget$$$$$getDropSite$$($mouseX$$48$$, $mouseY$$48$$) {
  var $obj$$199$$ = $JSCompiler_StaticMethods___getObjectUnderPoint$$(this.$_areaLayer$, $mouseX$$48$$, $mouseY$$48$$);
  if($obj$$199$$) {
    var $projPoint$$ = $DvtThematicMapProjections$$.$inverseProject$($mouseX$$48$$, $mouseY$$48$$, this.$_basemap$);
    return{$regionId$:$obj$$199$$.$_areaName$, $localX$:$projPoint$$.x, $localY$:$projPoint$$.y}
  }
  return $JSCompiler_alias_NULL$$
};
function $DvtThematicMapAutomation$$($dvtComponent$$14$$) {
  this.$_tmap$ = $dvtComponent$$14$$
}
$goog$exportPath_$$("DvtThematicMapAutomation", $DvtThematicMapAutomation$$);
dvt.$Obj$.$createSubclass$($DvtThematicMapAutomation$$, dvt.$Automation$);
$DvtThematicMapAutomation$$.prototype.$GetSubIdForDomElement$ = function $$DvtThematicMapAutomation$$$$$GetSubIdForDomElement$$($actions$$1_displayable$$64_displayable$$inline_4672$$) {
  var $dataObject$$inline_4671_logicalObj$$10$$ = this.$_tmap$.$getEventManager$().$GetLogicalObject$($actions$$1_displayable$$64_displayable$$inline_4672$$);
  if($dataObject$$inline_4671_logicalObj$$10$$ && ($dataObject$$inline_4671_logicalObj$$10$$ instanceof $DvtMapAreaPeer$$ || $dataObject$$inline_4671_logicalObj$$10$$ instanceof $DvtMapObjPeer$$)) {
    var $JSCompiler_inline_result$$254_controlPanel$$10_id$$inline_4676$$;
    a: {
      $actions$$1_displayable$$64_displayable$$inline_4672$$ = $dataObject$$inline_4671_logicalObj$$10$$.$getDisplayable$();
      for(var $idx$$17_layers$$inline_4673$$ = this.$_tmap$.$_layers$, $i$$inline_4674$$ = 0;$i$$inline_4674$$ < $idx$$17_layers$$inline_4673$$.length;$i$$inline_4674$$++) {
        var $dataLayers$$inline_4675$$ = $idx$$17_layers$$inline_4673$$[$i$$inline_4674$$].$DataLayers$;
        for($JSCompiler_inline_result$$254_controlPanel$$10_id$$inline_4676$$ in $dataLayers$$inline_4675$$) {
          if($actions$$1_displayable$$64_displayable$$inline_4672$$ instanceof dvt.$Path$) {
            for(var $areas$$inline_4677_markers$$inline_4679$$ = $dataLayers$$inline_4675$$[$JSCompiler_inline_result$$254_controlPanel$$10_id$$inline_4676$$].$_areaObjs$, $k$$inline_4678$$ = 0;$k$$inline_4678$$ < $areas$$inline_4677_markers$$inline_4679$$.length;$k$$inline_4678$$++) {
              if($areas$$inline_4677_markers$$inline_4679$$[$k$$inline_4678$$] === $dataObject$$inline_4671_logicalObj$$10$$) {
                $JSCompiler_inline_result$$254_controlPanel$$10_id$$inline_4676$$ = $JSCompiler_StaticMethods__getDataLayerId$$($JSCompiler_inline_result$$254_controlPanel$$10_id$$inline_4676$$) + ":area[" + $k$$inline_4678$$ + "]";
                break a
              }
            }
          }else {
            if($actions$$1_displayable$$64_displayable$$inline_4672$$ instanceof dvt.$SimpleMarker$ || $actions$$1_displayable$$64_displayable$$inline_4672$$ instanceof dvt.$ImageMarker$) {
              $areas$$inline_4677_markers$$inline_4679$$ = $dataLayers$$inline_4675$$[$JSCompiler_inline_result$$254_controlPanel$$10_id$$inline_4676$$].$_dataObjs$;
              for($k$$inline_4678$$ = 0;$k$$inline_4678$$ < $areas$$inline_4677_markers$$inline_4679$$.length;$k$$inline_4678$$++) {
                if($areas$$inline_4677_markers$$inline_4679$$[$k$$inline_4678$$] === $dataObject$$inline_4671_logicalObj$$10$$) {
                  $JSCompiler_inline_result$$254_controlPanel$$10_id$$inline_4676$$ = $JSCompiler_StaticMethods__getDataLayerId$$($JSCompiler_inline_result$$254_controlPanel$$10_id$$inline_4676$$) + ":marker[" + $k$$inline_4678$$ + "]";
                  break a
                }
              }
            }
          }
        }
      }
      $JSCompiler_inline_result$$254_controlPanel$$10_id$$inline_4676$$ = $JSCompiler_alias_NULL$$
    }
    return $JSCompiler_inline_result$$254_controlPanel$$10_id$$inline_4676$$
  }
  if($JSCompiler_inline_result$$254_controlPanel$$10_id$$inline_4676$$ = this.$_tmap$.$_panZoomCanvas$.$_controlPanel$) {
    if(($dataObject$$inline_4671_logicalObj$$10$$ = $JSCompiler_inline_result$$254_controlPanel$$10_id$$inline_4676$$.$getEventManager$().$GetLogicalObject$($actions$$1_displayable$$64_displayable$$inline_4672$$)) && $dataObject$$inline_4671_logicalObj$$10$$ instanceof dvt.$Button$) {
      $actions$$1_displayable$$64_displayable$$inline_4672$$ = "disclosure zoomIn zoomOut zoomToFit drillDown drillUp reset".split(" ");
      for($idx$$17_layers$$inline_4673$$ = 0;$idx$$17_layers$$inline_4673$$ < $actions$$1_displayable$$64_displayable$$inline_4672$$.length;$idx$$17_layers$$inline_4673$$++) {
        if($JSCompiler_inline_result$$254_controlPanel$$10_id$$inline_4676$$.$getActionDisplayable$($actions$$1_displayable$$64_displayable$$inline_4672$$[$idx$$17_layers$$inline_4673$$]) === $dataObject$$inline_4671_logicalObj$$10$$) {
          return"controlPanel#" + $actions$$1_displayable$$64_displayable$$inline_4672$$[$idx$$17_layers$$inline_4673$$]
        }
      }
    }
  }
  return $JSCompiler_alias_NULL$$
};
$DvtThematicMapAutomation$$.prototype.$getDomElementForSubId$ = function $$DvtThematicMapAutomation$$$$$getDomElementForSubId$$($action$$26_dataObj$$inline_4685_displayable$$65_subId$$29$$) {
  if($action$$26_dataObj$$inline_4685_displayable$$65_subId$$29$$ == dvt.$Automation$.$TOOLTIP_SUBID$) {
    return this.$GetTooltipElement$(this.$_tmap$)
  }
  var $actionIdx_colonIdx$$1_controlPanel$$11$$ = $action$$26_dataObj$$inline_4685_displayable$$65_subId$$29$$.indexOf(":"), $parenIdx$$2$$ = $action$$26_dataObj$$inline_4685_displayable$$65_subId$$29$$.indexOf("[");
  return 0 < $actionIdx_colonIdx$$1_controlPanel$$11$$ && 0 < $parenIdx$$2$$ ? ($action$$26_dataObj$$inline_4685_displayable$$65_subId$$29$$ = $JSCompiler_StaticMethods__getDataObject$$(this, $action$$26_dataObj$$inline_4685_displayable$$65_subId$$29$$.substring(0, $actionIdx_colonIdx$$1_controlPanel$$11$$), $action$$26_dataObj$$inline_4685_displayable$$65_subId$$29$$.substring($actionIdx_colonIdx$$1_controlPanel$$11$$ + 1, $parenIdx$$2$$), parseInt($action$$26_dataObj$$inline_4685_displayable$$65_subId$$29$$.substring($parenIdx$$2$$ + 
  1, $action$$26_dataObj$$inline_4685_displayable$$65_subId$$29$$.length - 1)))) ? $action$$26_dataObj$$inline_4685_displayable$$65_subId$$29$$.$getDisplayable$().$getElem$() : $JSCompiler_alias_NULL$$ : 0 === $action$$26_dataObj$$inline_4685_displayable$$65_subId$$29$$.lastIndexOf("controlPanel") && ($actionIdx_colonIdx$$1_controlPanel$$11$$ = $action$$26_dataObj$$inline_4685_displayable$$65_subId$$29$$.indexOf("#"), 0 < $actionIdx_colonIdx$$1_controlPanel$$11$$ && ($action$$26_dataObj$$inline_4685_displayable$$65_subId$$29$$ = 
  $action$$26_dataObj$$inline_4685_displayable$$65_subId$$29$$.substring($actionIdx_colonIdx$$1_controlPanel$$11$$ + 1), ($actionIdx_colonIdx$$1_controlPanel$$11$$ = this.$_tmap$.$_panZoomCanvas$.$_controlPanel$) && $action$$26_dataObj$$inline_4685_displayable$$65_subId$$29$$)) ? ($action$$26_dataObj$$inline_4685_displayable$$65_subId$$29$$ = $actionIdx_colonIdx$$1_controlPanel$$11$$.$getActionDisplayable$($action$$26_dataObj$$inline_4685_displayable$$65_subId$$29$$)) ? $action$$26_dataObj$$inline_4685_displayable$$65_subId$$29$$.$getElem$() : 
  $JSCompiler_alias_NULL$$ : $JSCompiler_alias_NULL$$
};
$DvtThematicMapAutomation$$.prototype.getDomElementForSubId = $DvtThematicMapAutomation$$.prototype.$getDomElementForSubId$;
$DvtThematicMapAutomation$$.prototype.getData = function $$DvtThematicMapAutomation$$$$getData$($dataLayerId$$1_dataObj$$1$$, $data$$97_dataObjType$$1$$, $index$$189_label$$76$$) {
  return($dataLayerId$$1_dataObj$$1$$ = $JSCompiler_StaticMethods__getDataObject$$(this, $dataLayerId$$1_dataObj$$1$$, $data$$97_dataObjType$$1$$, $index$$189_label$$76$$)) ? ($data$$97_dataObjType$$1$$ = {}, $data$$97_dataObjType$$1$$.color = $dataLayerId$$1_dataObj$$1$$.$getDatatipColor$(), $data$$97_dataObjType$$1$$.tooltip = $dataLayerId$$1_dataObj$$1$$.$getShortDesc$(), $index$$189_label$$76$$ = $dataLayerId$$1_dataObj$$1$$.$getLabel$(), $data$$97_dataObjType$$1$$.label = $index$$189_label$$76$$ ? 
  $index$$189_label$$76$$.$getTextString$() : $JSCompiler_alias_NULL$$, $data$$97_dataObjType$$1$$.selected = $dataLayerId$$1_dataObj$$1$$.$isSelected$(), $data$$97_dataObjType$$1$$) : $JSCompiler_alias_NULL$$
};
$DvtThematicMapAutomation$$.prototype.getData = $DvtThematicMapAutomation$$.prototype.getData;
function $JSCompiler_StaticMethods__getDataObject$$($JSCompiler_StaticMethods__getDataObject$self_layers$$1$$, $dataLayerId$$3$$, $dataObjType$$3$$, $index$$191$$) {
  $JSCompiler_StaticMethods__getDataObject$self_layers$$1$$ = $JSCompiler_StaticMethods__getDataObject$self_layers$$1$$.$_tmap$.$_layers$;
  for(var $i$$587$$ = 0;$i$$587$$ < $JSCompiler_StaticMethods__getDataObject$self_layers$$1$$.length;$i$$587$$++) {
    var $dataLayers$$6$$ = $JSCompiler_StaticMethods__getDataObject$self_layers$$1$$[$i$$587$$].$DataLayers$, $id$$188$$;
    for($id$$188$$ in $dataLayers$$6$$) {
      if($JSCompiler_StaticMethods__getDataLayerId$$($id$$188$$) == $dataLayerId$$3$$) {
        if("area" == $dataObjType$$3$$) {
          return $dataLayers$$6$$[$id$$188$$].$_dataAreaCollection$[$index$$191$$]
        }
        if("marker" == $dataObjType$$3$$) {
          return $dataLayers$$6$$[$id$$188$$].$_dataMarkerCollection$[$index$$191$$]
        }
      }
    }
  }
  return $JSCompiler_alias_NULL$$
}
function $JSCompiler_StaticMethods__getDataLayerId$$($dataLayerId$$4$$) {
  var $colonIdx$$2$$ = $dataLayerId$$4$$.lastIndexOf(":");
  return 0 < $colonIdx$$2$$ ? $dataLayerId$$4$$.substring($colonIdx$$2$$ + 1) : $dataLayerId$$4$$
}
function $DvtDrillablePath$$($context$$373$$, $bSupportsVectorEffects$$) {
  this.Init($context$$373$$, $bSupportsVectorEffects$$)
}
dvt.$Obj$.$createSubclass$($DvtDrillablePath$$, dvt.$Path$);
$JSCompiler_prototypeAlias$$ = $DvtDrillablePath$$.prototype;
$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($context$$374$$, $bSupportsVectorEffects$$1$$) {
  $DvtDrillablePath$$.$superclass$.Init.call(this, $context$$374$$);
  this.$_disclosedOuterShape$ = this.$_disclosedInnerShape$ = this.$_disclosedOuterStroke$ = this.$_disclosedInnerStroke$ = $JSCompiler_alias_NULL$$;
  this.$_isDrilled$ = $JSCompiler_alias_FALSE$$;
  this.Zoom = 1;
  this.$_bSupportsVectorEffects$ = $bSupportsVectorEffects$$1$$
};
$JSCompiler_prototypeAlias$$.$isDrilled$ = $JSCompiler_get$$("$_isDrilled$");
$JSCompiler_prototypeAlias$$.$setDrilled$ = function $$JSCompiler_prototypeAlias$$$$setDrilled$$($drilled$$2_parent$$73$$) {
  this.$_isDrilled$ != $drilled$$2_parent$$73$$ && (this.$_isDrilled$ = $drilled$$2_parent$$73$$, this.$isDrilled$() ? (this.$_disclosedInnerShape$ = this.$copyShape$(), this.$_disclosedInnerShape$.$setFill$($JSCompiler_alias_NULL$$), this.$_disclosedInnerShape$.$setMouseEnabled$($JSCompiler_alias_FALSE$$), this.$_disclosedOuterShape$ = this.$copyShape$(), this.$_disclosedOuterShape$.$setFill$($JSCompiler_alias_NULL$$), this.$_disclosedOuterShape$.$setMouseEnabled$($JSCompiler_alias_FALSE$$), $drilled$$2_parent$$73$$ = 
  this.getParent(), $drilled$$2_parent$$73$$.$addChild$(this.$_disclosedOuterShape$), $drilled$$2_parent$$73$$.$addChild$(this.$_disclosedInnerShape$), this.$_disclosedInnerShape$.$setStroke$($JSCompiler_StaticMethods__adjustStrokeZoomWidth$$(this, this.$_disclosedInnerStroke$, 2)), this.$_disclosedOuterShape$.$setStroke$($JSCompiler_StaticMethods__adjustStrokeZoomWidth$$(this, this.$_disclosedOuterStroke$, 4)), this.$setMouseEnabled$($JSCompiler_alias_FALSE$$), this.$IsShowingHoverEffect$ = $JSCompiler_alias_FALSE$$) : 
  (this.$IsShowingHoverEffect$ && (this.$UpdateSelectionEffect$(), this.$InnerShape$.$setStroke$($JSCompiler_StaticMethods__adjustStrokeZoomWidth$$(this, this.$HoverInnerStroke$, 1), 2)), this.$_disclosedOuterShape$.getParent().removeChild(this.$_disclosedOuterShape$), this.$_disclosedInnerShape$.getParent().removeChild(this.$_disclosedInnerShape$), this.$setMouseEnabled$($JSCompiler_alias_TRUE$$), this.$setAlpha$(1)))
};
$JSCompiler_prototypeAlias$$.$setSelected$ = function $$JSCompiler_prototypeAlias$$$$setSelected$$($selected$$36$$) {
  this.$IsSelected$ != $selected$$36$$ && ($selected$$36$$ && (this.$IsShowingHoverEffect$ ? (this.$CreateSelectedHoverStrokes$(), this.$SelectedHoverInnerStroke$ = $JSCompiler_StaticMethods__adjustStrokeZoomWidth$$(this, this.$SelectedHoverInnerStroke$, 2), this.$SelectedHoverOuterStroke$ = $JSCompiler_StaticMethods__adjustStrokeZoomWidth$$(this, this.$SelectedHoverOuterStroke$, 6)) : (this.$SelectedInnerStroke$ = $JSCompiler_StaticMethods__adjustStrokeZoomWidth$$(this, this.$SelectedInnerStroke$, 
  1), this.$SelectedOuterStroke$ = $JSCompiler_StaticMethods__adjustStrokeZoomWidth$$(this, this.$SelectedOuterStroke$, 4))), $DvtDrillablePath$$.$superclass$.$setSelected$.call(this, $selected$$36$$))
};
$JSCompiler_prototypeAlias$$.$showHoverEffect$ = function $$JSCompiler_prototypeAlias$$$$showHoverEffect$$() {
  this.$isSelected$() ? (this.$CreateSelectedHoverStrokes$(), this.$SelectedHoverInnerStroke$ = $JSCompiler_StaticMethods__adjustStrokeZoomWidth$$(this, this.$SelectedHoverInnerStroke$, 2), this.$SelectedHoverOuterStroke$ = $JSCompiler_StaticMethods__adjustStrokeZoomWidth$$(this, this.$SelectedHoverOuterStroke$, 6)) : this.$HoverInnerStroke$ = $JSCompiler_StaticMethods__adjustStrokeZoomWidth$$(this, this.$HoverInnerStroke$, 2);
  $DvtDrillablePath$$.$superclass$.$showHoverEffect$.call(this)
};
$JSCompiler_prototypeAlias$$.$CreateSelectedHoverStrokes$ = function $$JSCompiler_prototypeAlias$$$$CreateSelectedHoverStrokes$$() {
  this.$SelectedHoverInnerStroke$ || (this.$SelectedHoverInnerStroke$ = this.$HoverInnerStroke$.$clone$(), this.$SelectedHoverInnerStroke$.$setWidth$(2), this.$_bSupportsVectorEffects$ && this.$SelectedHoverInnerStroke$.$setFixedWidth$($JSCompiler_alias_TRUE$$));
  this.$SelectedHoverOuterStroke$ || (this.$SelectedHoverOuterStroke$ = this.$SelectedOuterStroke$.$clone$(), this.$SelectedHoverOuterStroke$.$setWidth$(6), this.$_bSupportsVectorEffects$ && this.$SelectedHoverOuterStroke$.$setFixedWidth$($JSCompiler_alias_TRUE$$))
};
$JSCompiler_prototypeAlias$$.$hideHoverEffect$ = function $$JSCompiler_prototypeAlias$$$$hideHoverEffect$$() {
  this.$isSelected$() && (this.$SelectedInnerStroke$ = $JSCompiler_StaticMethods__adjustStrokeZoomWidth$$(this, this.$SelectedInnerStroke$, 1), this.$SelectedOuterStroke$ = $JSCompiler_StaticMethods__adjustStrokeZoomWidth$$(this, this.$SelectedOuterStroke$, 4));
  $DvtDrillablePath$$.$superclass$.$hideHoverEffect$.call(this)
};
$JSCompiler_prototypeAlias$$.$setHoverStroke$ = function $$JSCompiler_prototypeAlias$$$$setHoverStroke$$($innerStroke$$, $outerStroke$$) {
  $DvtDrillablePath$$.$superclass$.$setHoverStroke$.call(this, $innerStroke$$, $outerStroke$$);
  this.$_bSupportsVectorEffects$ && (this.$HoverInnerStroke$ && this.$HoverInnerStroke$.$setFixedWidth$($JSCompiler_alias_TRUE$$), this.$HoverOuterStroke$ && this.$HoverOuterStroke$.$setFixedWidth$($JSCompiler_alias_TRUE$$));
  return this
};
$JSCompiler_prototypeAlias$$.$setSelectedStroke$ = function $$JSCompiler_prototypeAlias$$$$setSelectedStroke$$($innerStroke$$1$$, $outerStroke$$1$$) {
  $DvtDrillablePath$$.$superclass$.$setSelectedStroke$.call(this, $innerStroke$$1$$, $outerStroke$$1$$);
  this.$_bSupportsVectorEffects$ && (this.$SelectedInnerStroke$ && this.$SelectedInnerStroke$.$setFixedWidth$($JSCompiler_alias_TRUE$$), this.$SelectedOuterStroke$ && this.$SelectedOuterStroke$.$setFixedWidth$($JSCompiler_alias_TRUE$$));
  return this
};
$JSCompiler_prototypeAlias$$.$setSelectedHoverStroke$ = function $$JSCompiler_prototypeAlias$$$$setSelectedHoverStroke$$($innerStroke$$2$$, $outerStroke$$2$$) {
  $DvtDrillablePath$$.$superclass$.$setSelectedHoverStroke$.call(this, $innerStroke$$2$$, $outerStroke$$2$$);
  this.$_bSupportsVectorEffects$ && (this.$SelectedHoverInnerStroke$ && this.$SelectedHoverInnerStroke$.$setFixedWidth$($JSCompiler_alias_TRUE$$), this.$SelectedHoverOuterStroke$ && this.$SelectedHoverOuterStroke$.$setFixedWidth$($JSCompiler_alias_TRUE$$));
  return this
};
function $JSCompiler_StaticMethods__updateStrokeZoomWidth$$($JSCompiler_StaticMethods__updateStrokeZoomWidth$self$$, $shape$$82$$, $fixedWidth$$) {
  if(!$JSCompiler_StaticMethods__updateStrokeZoomWidth$self$$.$_bSupportsVectorEffects$) {
    var $stroke$$90$$ = $shape$$82$$.$getStroke$();
    $stroke$$90$$ && ($stroke$$90$$ = $stroke$$90$$.$clone$(), $stroke$$90$$.$setWidth$($fixedWidth$$ / $JSCompiler_StaticMethods__updateStrokeZoomWidth$self$$.Zoom), $shape$$82$$.$setStroke$($stroke$$90$$))
  }
}
function $JSCompiler_StaticMethods__adjustStrokeZoomWidth$$($JSCompiler_StaticMethods__adjustStrokeZoomWidth$self$$, $adjustedStroke_stroke$$91$$, $fixedWidth$$1$$) {
  $JSCompiler_StaticMethods__adjustStrokeZoomWidth$self$$.$_bSupportsVectorEffects$ || ($adjustedStroke_stroke$$91$$ = $adjustedStroke_stroke$$91$$.$clone$(), $adjustedStroke_stroke$$91$$.$setWidth$($fixedWidth$$1$$ / $JSCompiler_StaticMethods__adjustStrokeZoomWidth$self$$.Zoom));
  return $adjustedStroke_stroke$$91$$
}
function $JSCompiler_StaticMethods_handleZoomEvent$$($JSCompiler_StaticMethods_handleZoomEvent$self$$, $pzcMatrix$$5$$) {
  $JSCompiler_StaticMethods_handleZoomEvent$self$$.Zoom = $pzcMatrix$$5$$.$_a$;
  $JSCompiler_StaticMethods_handleZoomEvent$self$$.$isDrilled$() ? ($JSCompiler_StaticMethods__updateStrokeZoomWidth$$($JSCompiler_StaticMethods_handleZoomEvent$self$$, $JSCompiler_StaticMethods_handleZoomEvent$self$$.$_disclosedInnerShape$, 2), $JSCompiler_StaticMethods__updateStrokeZoomWidth$$($JSCompiler_StaticMethods_handleZoomEvent$self$$, $JSCompiler_StaticMethods_handleZoomEvent$self$$.$_disclosedOuterShape$, 4)) : $JSCompiler_StaticMethods_handleZoomEvent$self$$.$isSelected$() ? $JSCompiler_StaticMethods_handleZoomEvent$self$$.$IsShowingHoverEffect$ ? 
  ($JSCompiler_StaticMethods__updateStrokeZoomWidth$$($JSCompiler_StaticMethods_handleZoomEvent$self$$, $JSCompiler_StaticMethods_handleZoomEvent$self$$.$InnerShape$, 2), $JSCompiler_StaticMethods__updateStrokeZoomWidth$$($JSCompiler_StaticMethods_handleZoomEvent$self$$, $JSCompiler_StaticMethods_handleZoomEvent$self$$, 6)) : ($JSCompiler_StaticMethods__updateStrokeZoomWidth$$($JSCompiler_StaticMethods_handleZoomEvent$self$$, $JSCompiler_StaticMethods_handleZoomEvent$self$$.$InnerShape$, 1), $JSCompiler_StaticMethods__updateStrokeZoomWidth$$($JSCompiler_StaticMethods_handleZoomEvent$self$$, 
  $JSCompiler_StaticMethods_handleZoomEvent$self$$, 4)) : $JSCompiler_StaticMethods_handleZoomEvent$self$$.$IsShowingHoverEffect$ ? $JSCompiler_StaticMethods__updateStrokeZoomWidth$$($JSCompiler_StaticMethods_handleZoomEvent$self$$, $JSCompiler_StaticMethods_handleZoomEvent$self$$.$InnerShape$, 2) : $JSCompiler_StaticMethods__updateStrokeZoomWidth$$($JSCompiler_StaticMethods_handleZoomEvent$self$$, $JSCompiler_StaticMethods_handleZoomEvent$self$$, 1)
}
function $DvtCustomDataItem$$($context$$375$$, $dataItem$$45$$, $styles$$16$$) {
  this.Init($context$$375$$, $dataItem$$45$$, $styles$$16$$)
}
dvt.$Obj$.$createSubclass$($DvtCustomDataItem$$, dvt.$Container$);
$JSCompiler_prototypeAlias$$ = $DvtCustomDataItem$$.prototype;
$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($context$$376_his$$3$$, $dataItem$$46_dim$$71_hos$$3$$, $shos$$3_styles$$17$$) {
  $DvtCustomDataItem$$.$superclass$.Init.call(this, $context$$376_his$$3$$);
  this.$_dataItem$ = $dataItem$$46_dim$$71_hos$$3$$;
  $dataItem$$46_dim$$71_hos$$3$$ instanceof dvt.$BaseComponent$ ? (this.$_width$ = $dataItem$$46_dim$$71_hos$$3$$.getWidth(), this.$_height$ = $dataItem$$46_dim$$71_hos$$3$$.getHeight(), this.$addChild$($dataItem$$46_dim$$71_hos$$3$$)) : (this.$getElem$().appendChild($dataItem$$46_dim$$71_hos$$3$$), $dataItem$$46_dim$$71_hos$$3$$ = dvt.$DisplayableUtils$.$getDimensionsForced$($context$$376_his$$3$$, this), this.$_width$ = $dataItem$$46_dim$$71_hos$$3$$.$w$, this.$_height$ = $dataItem$$46_dim$$71_hos$$3$$.$h$);
  this.$_boundingRect$ = new dvt.$Rect$($context$$376_his$$3$$, -5, -5, this.$_width$ + 10, this.$_height$ + 10);
  this.$_boundingRect$.$setInvisibleFill$();
  $context$$376_his$$3$$ = new dvt.$SolidStroke$($shos$$3_styles$$17$$.selectedInnerColor, 1, 2);
  $dataItem$$46_dim$$71_hos$$3$$ = new dvt.$SolidStroke$("rgb(235, 236, 237)", 1, 4);
  var $sis$$3$$ = new dvt.$SolidStroke$($shos$$3_styles$$17$$.selectedInnerColor, 1, 2), $sos$$3$$ = new dvt.$SolidStroke$($shos$$3_styles$$17$$.selectedOuterColor, 1, 4), $shis$$3$$ = new dvt.$SolidStroke$($shos$$3_styles$$17$$.selectedInnerColor, 1, 2);
  $shos$$3_styles$$17$$ = new dvt.$SolidStroke$($shos$$3_styles$$17$$.selectedOuterColor, 1, 6);
  this.$_boundingRect$.$setHoverStroke$($context$$376_his$$3$$, $dataItem$$46_dim$$71_hos$$3$$).$setSelectedStroke$($sis$$3$$, $sos$$3$$).$setSelectedHoverStroke$($shis$$3$$, $shos$$3_styles$$17$$);
  this.$addChildAt$(this.$_boundingRect$, 0)
};
$JSCompiler_prototypeAlias$$.$setAriaProperty$ = function $$JSCompiler_prototypeAlias$$$$setAriaProperty$$($property$$3$$, $value$$158$$) {
  dvt.$Agent$.$isTouchDevice$() ? this.$_boundingRect$.$setAriaProperty$($property$$3$$, $value$$158$$) : $DvtCustomDataItem$$.$superclass$.$setAriaProperty$.call(this, $property$$3$$, $value$$158$$)
};
$JSCompiler_prototypeAlias$$.$setAriaRole$ = function $$JSCompiler_prototypeAlias$$$$setAriaRole$$($role$$) {
  dvt.$Agent$.$isTouchDevice$() ? this.$_boundingRect$.$setAriaRole$($role$$) : $DvtCustomDataItem$$.$superclass$.$setAriaRole$.call(this, $role$$)
};
$JSCompiler_prototypeAlias$$.getWidth = $JSCompiler_get$$("$_width$");
$JSCompiler_prototypeAlias$$.getHeight = $JSCompiler_get$$("$_height$");
$JSCompiler_prototypeAlias$$.$setSelectable$ = function $$JSCompiler_prototypeAlias$$$$setSelectable$$($bSelectable$$1$$) {
  this.$_boundingRect$.$setSelectable$($bSelectable$$1$$)
};
$JSCompiler_prototypeAlias$$.$isSelectable$ = function $$JSCompiler_prototypeAlias$$$$isSelectable$$() {
  return this.$_boundingRect$.$isSelectable$()
};
$JSCompiler_prototypeAlias$$.$isSelected$ = function $$JSCompiler_prototypeAlias$$$$isSelected$$() {
  return this.$_boundingRect$.$isSelected$()
};
$JSCompiler_prototypeAlias$$.$setSelected$ = function $$JSCompiler_prototypeAlias$$$$setSelected$$($selected$$37$$) {
  this.$_boundingRect$.$setSelected$($selected$$37$$)
};
$JSCompiler_prototypeAlias$$.$showHoverEffect$ = function $$JSCompiler_prototypeAlias$$$$showHoverEffect$$() {
  this.$_boundingRect$.$showHoverEffect$()
};
$JSCompiler_prototypeAlias$$.$hideHoverEffect$ = function $$JSCompiler_prototypeAlias$$$$hideHoverEffect$$() {
  this.$_boundingRect$.$hideHoverEffect$()
};
$JSCompiler_prototypeAlias$$.$fireKeyboardListener$ = function $$JSCompiler_prototypeAlias$$$$fireKeyboardListener$$($event$$488$$) {
  this.$_dataItem$ instanceof dvt.$BaseComponent$ && this.$_dataItem$.$fireKeyboardListener$($event$$488$$)
};
var $DvtBaseMapManager$$;
this ? this.DvtBaseMapManager ? $DvtBaseMapManager$$ = this.DvtBaseMapManager : (this.DvtBaseMapManager = $DvtBaseMapManager$$ = {}, $DvtBaseMapManager$$._UNPROCESSED_MAPS = [[], [], []], $DvtBaseMapManager$$._UNPROCESSED_PARENT_UPDATES = [[]]) : window.DvtBaseMapManager ? $DvtBaseMapManager$$ = window.DvtBaseMapManager : ($DvtBaseMapManager$$ = {}, window.DvtBaseMapManager = $DvtBaseMapManager$$, $DvtBaseMapManager$$._UNPROCESSED_MAPS = [[], [], []], $DvtBaseMapManager$$._UNPROCESSED_PARENT_UPDATES = 
[[]]);
dvt.$Obj$.$createSubclass$($DvtBaseMapManager$$, dvt.$Obj$, "DvtBaseMapManager");
$DvtBaseMapManager$$.$TYPE_LABELS$ = 0;
$DvtBaseMapManager$$.$TYPE_PATH$ = 1;
$DvtBaseMapManager$$.$TYPE_PARENTREGION_CHILDREN$ = 2;
$DvtBaseMapManager$$.$TYPE_LABELINFO$ = 3;
$DvtBaseMapManager$$.$TYPE_DIM$ = 4;
$DvtBaseMapManager$$.$_INDEX$ = "__index";
$DvtBaseMapManager$$.$_GLOBAL_MAPS$ = {};
$DvtBaseMapManager$$.$getBaseMapDim$ = function $$DvtBaseMapManager$$$$getBaseMapDim$$($baseMapName$$, $layerName$$7$$) {
  $DvtBaseMapManager$$.$_processUnprocessedMaps$();
  var $dimAr_layer$$3$$ = $DvtBaseMapManager$$.$_GLOBAL_MAPS$[$baseMapName$$][$layerName$$7$$];
  return $dimAr_layer$$3$$ && ($dimAr_layer$$3$$ = $dimAr_layer$$3$$[$DvtBaseMapManager$$.$TYPE_DIM$]) ? new dvt.$Rectangle$($dimAr_layer$$3$$[0], $dimAr_layer$$3$$[1], $dimAr_layer$$3$$[2], $dimAr_layer$$3$$[3]) : $JSCompiler_alias_NULL$$
};
$DvtBaseMapManager$$.$getAreaLabelInfo$ = function $$DvtBaseMapManager$$$$getAreaLabelInfo$$($baseMapName$$1$$, $layerName$$8$$) {
  $DvtBaseMapManager$$.$_processUnprocessedMaps$();
  var $layer$$4$$ = $DvtBaseMapManager$$.$_GLOBAL_MAPS$[$baseMapName$$1$$][$layerName$$8$$];
  return $layer$$4$$ ? $layer$$4$$[$DvtBaseMapManager$$.$TYPE_LABELINFO$] : $JSCompiler_alias_NULL$$
};
$DvtBaseMapManager$$.$getAreaNames$ = function $$DvtBaseMapManager$$$$getAreaNames$$($baseMapName$$2$$, $layerName$$9$$) {
  $DvtBaseMapManager$$.$_processUnprocessedMaps$();
  var $layer$$5$$ = $DvtBaseMapManager$$.$_GLOBAL_MAPS$[$baseMapName$$2$$][$layerName$$9$$];
  return $layer$$5$$ ? $layer$$5$$[$DvtBaseMapManager$$.$TYPE_LABELS$] : $JSCompiler_alias_NULL$$
};
$DvtBaseMapManager$$.$getLongAreaLabel$ = function $$DvtBaseMapManager$$$$getLongAreaLabel$$($baseMapName$$3_layer$$6$$, $layerName$$10$$, $areaId$$) {
  $DvtBaseMapManager$$.$_processUnprocessedMaps$();
  $baseMapName$$3_layer$$6$$ = $DvtBaseMapManager$$.$_GLOBAL_MAPS$[$baseMapName$$3_layer$$6$$][$layerName$$10$$];
  var $labels$$28$$;
  $baseMapName$$3_layer$$6$$ && ($labels$$28$$ = $baseMapName$$3_layer$$6$$[$DvtBaseMapManager$$.$TYPE_LABELS$]);
  return $labels$$28$$ && $labels$$28$$[$areaId$$] ? $labels$$28$$[$areaId$$][1] : $JSCompiler_alias_NULL$$
};
$DvtBaseMapManager$$.$getCityCoordinates$ = function $$DvtBaseMapManager$$$$getCityCoordinates$$($baseMapName$$4$$, $city$$) {
  $DvtBaseMapManager$$.$_processUnprocessedMaps$();
  var $basemap$$1_cityLayer_coords$$32$$ = $DvtBaseMapManager$$.$_GLOBAL_MAPS$[$baseMapName$$4$$];
  if($basemap$$1_cityLayer_coords$$32$$ && ($basemap$$1_cityLayer_coords$$32$$ = $basemap$$1_cityLayer_coords$$32$$.cities)) {
    if($basemap$$1_cityLayer_coords$$32$$ = $basemap$$1_cityLayer_coords$$32$$[$DvtBaseMapManager$$.$TYPE_PATH$][$city$$]) {
      return new dvt.$Point$($basemap$$1_cityLayer_coords$$32$$[0], $basemap$$1_cityLayer_coords$$32$$[1])
    }
  }
  return $JSCompiler_alias_NULL$$
};
$DvtBaseMapManager$$.$getCityLabel$ = function $$DvtBaseMapManager$$$$getCityLabel$$($baseMapName$$5$$, $city$$1$$) {
  $DvtBaseMapManager$$.$_processUnprocessedMaps$();
  var $basemap$$2_cityLabel_cityLayer$$1$$ = $DvtBaseMapManager$$.$_GLOBAL_MAPS$[$baseMapName$$5$$];
  if($basemap$$2_cityLabel_cityLayer$$1$$ && ($basemap$$2_cityLabel_cityLayer$$1$$ = $basemap$$2_cityLabel_cityLayer$$1$$.cities)) {
    if($basemap$$2_cityLabel_cityLayer$$1$$ = $basemap$$2_cityLabel_cityLayer$$1$$[$DvtBaseMapManager$$.$TYPE_LABELS$][$city$$1$$]) {
      return $basemap$$2_cityLabel_cityLayer$$1$$[1]
    }
  }
  return $JSCompiler_alias_NULL$$
};
$DvtBaseMapManager$$.$getAreaCenter$ = function $$DvtBaseMapManager$$$$getAreaCenter$$($arPath$$2_baseMapName$$6_path$$36$$, $layerName$$11$$, $areaId$$1$$) {
  $DvtBaseMapManager$$.$_processUnprocessedMaps$();
  var $basemap$$3_labelInfo$$8_layer$$7$$ = $DvtBaseMapManager$$.$_GLOBAL_MAPS$[$arPath$$2_baseMapName$$6_path$$36$$];
  if($basemap$$3_labelInfo$$8_layer$$7$$ && ($basemap$$3_labelInfo$$8_layer$$7$$ = $basemap$$3_labelInfo$$8_layer$$7$$[$layerName$$11$$])) {
    if(($basemap$$3_labelInfo$$8_layer$$7$$ = $basemap$$3_labelInfo$$8_layer$$7$$[$DvtBaseMapManager$$.$TYPE_LABELINFO$]) && $basemap$$3_labelInfo$$8_layer$$7$$[$areaId$$1$$]) {
      return dvt.$Rectangle$.create($basemap$$3_labelInfo$$8_layer$$7$$[$areaId$$1$$][0]).$getCenter$()
    }
    $arPath$$2_baseMapName$$6_path$$36$$ = $DvtBaseMapManager$$.$_GLOBAL_MAPS$[$arPath$$2_baseMapName$$6_path$$36$$][$layerName$$11$$][$DvtBaseMapManager$$.$TYPE_PATH$][$areaId$$1$$];
    if(!$arPath$$2_baseMapName$$6_path$$36$$) {
      return $JSCompiler_alias_NULL$$
    }
    $arPath$$2_baseMapName$$6_path$$36$$ = dvt.$PathUtils$.$createPathArray$($arPath$$2_baseMapName$$6_path$$36$$);
    return dvt.$PathUtils$.$getDimensions$($arPath$$2_baseMapName$$6_path$$36$$).$getCenter$()
  }
  return $JSCompiler_alias_NULL$$
};
$DvtBaseMapManager$$.$getChildLayerName$ = function $$DvtBaseMapManager$$$$getChildLayerName$$($baseMapName$$7$$, $layerName$$12$$) {
  $DvtBaseMapManager$$.$_processUnprocessedMaps$();
  var $layer$$8$$ = $DvtBaseMapManager$$.$_GLOBAL_MAPS$[$baseMapName$$7$$][$layerName$$12$$];
  return $layer$$8$$ ? $DvtBaseMapManager$$.$_GLOBAL_MAPS$[$baseMapName$$7$$][$DvtBaseMapManager$$.$_INDEX$][$layer$$8$$.__index + 1] : $JSCompiler_alias_NULL$$
};
$DvtBaseMapManager$$.$getParentLayerName$ = function $$DvtBaseMapManager$$$$getParentLayerName$$($baseMapName$$8$$, $layerName$$13$$) {
  $DvtBaseMapManager$$.$_processUnprocessedMaps$();
  return $DvtBaseMapManager$$.$_GLOBAL_MAPS$[$baseMapName$$8$$][$layerName$$13$$] ? $DvtBaseMapManager$$.$_GLOBAL_MAPS$[$baseMapName$$8$$][$DvtBaseMapManager$$.$_INDEX$][$DvtBaseMapManager$$.$_GLOBAL_MAPS$[$baseMapName$$8$$][$layerName$$13$$].__index - 1] : $JSCompiler_alias_NULL$$
};
$DvtBaseMapManager$$.$getAreaPaths$ = function $$DvtBaseMapManager$$$$getAreaPaths$$($baseMapName$$9$$, $layerName$$14$$) {
  $DvtBaseMapManager$$.$_processUnprocessedMaps$();
  return $DvtBaseMapManager$$.$_GLOBAL_MAPS$[$baseMapName$$9$$][$layerName$$14$$][$DvtBaseMapManager$$.$TYPE_PATH$]
};
$DvtBaseMapManager$$.$getPathForArea$ = function $$DvtBaseMapManager$$$$getPathForArea$$($baseMapName$$10$$, $layerName$$15$$, $area$$3$$) {
  $DvtBaseMapManager$$.$_processUnprocessedMaps$();
  return $DvtBaseMapManager$$.$_GLOBAL_MAPS$[$baseMapName$$10$$][$layerName$$15$$][$DvtBaseMapManager$$.$TYPE_PATH$][$area$$3$$]
};
$DvtBaseMapManager$$.$getChildrenForLayerAreas$ = function $$DvtBaseMapManager$$$$getChildrenForLayerAreas$$($baseMapName$$11$$, $layerName$$16$$) {
  $DvtBaseMapManager$$.$_processUnprocessedMaps$();
  var $childLayerName$$1_children$$9$$ = $DvtBaseMapManager$$.$getChildLayerName$($baseMapName$$11$$, $layerName$$16$$);
  return $childLayerName$$1_children$$9$$ && ($childLayerName$$1_children$$9$$ = $DvtBaseMapManager$$.$_GLOBAL_MAPS$[$baseMapName$$11$$][$childLayerName$$1_children$$9$$][$DvtBaseMapManager$$.$TYPE_PARENTREGION_CHILDREN$]) ? $childLayerName$$1_children$$9$$ : []
};
$DvtBaseMapManager$$.$getMapLayerName$ = function $$DvtBaseMapManager$$$$getMapLayerName$$($baseMapName$$12$$, $index$$192$$) {
  $DvtBaseMapManager$$.$_processUnprocessedMaps$();
  return $DvtBaseMapManager$$.$_GLOBAL_MAPS$[$baseMapName$$12$$][$DvtBaseMapManager$$.$_INDEX$][$index$$192$$]
};
$DvtBaseMapManager$$.$registerBaseMapLayer$ = function $$DvtBaseMapManager$$$$registerBaseMapLayer$$($baseMapName$$13_layerMetadata$$, $layerName$$17$$, $labelMetadata$$, $pathMetadata$$, $parentsRegionMetadata$$, $labelInfoMetadata$$, $index$$193$$, $dim$$73$$) {
  var $basemapMetadata$$ = $DvtBaseMapManager$$.$_GLOBAL_MAPS$[$baseMapName$$13_layerMetadata$$];
  $basemapMetadata$$ || ($basemapMetadata$$ = {}, $basemapMetadata$$[$DvtBaseMapManager$$.$_INDEX$] = [], $DvtBaseMapManager$$.$_GLOBAL_MAPS$[$baseMapName$$13_layerMetadata$$] = $basemapMetadata$$);
  $baseMapName$$13_layerMetadata$$ = $basemapMetadata$$[$layerName$$17$$];
  $baseMapName$$13_layerMetadata$$ || ($baseMapName$$13_layerMetadata$$ = {}, $basemapMetadata$$[$layerName$$17$$] = $baseMapName$$13_layerMetadata$$, $index$$193$$ != $JSCompiler_alias_NULL$$ && ($basemapMetadata$$[$DvtBaseMapManager$$.$_INDEX$][$index$$193$$] = $layerName$$17$$));
  $baseMapName$$13_layerMetadata$$[$DvtBaseMapManager$$.$TYPE_LABELS$] = $labelMetadata$$;
  $baseMapName$$13_layerMetadata$$[$DvtBaseMapManager$$.$TYPE_PATH$] = $pathMetadata$$;
  $baseMapName$$13_layerMetadata$$[$DvtBaseMapManager$$.$TYPE_PARENTREGION_CHILDREN$] = $parentsRegionMetadata$$;
  $baseMapName$$13_layerMetadata$$[$DvtBaseMapManager$$.$TYPE_LABELINFO$] = $labelInfoMetadata$$;
  $baseMapName$$13_layerMetadata$$[$DvtBaseMapManager$$.$TYPE_DIM$] = $dim$$73$$;
  $baseMapName$$13_layerMetadata$$[$DvtBaseMapManager$$.$_INDEX$] = $index$$193$$
};
$goog$exportPath_$$("DvtBaseMapManager.registerBaseMapLayer", $DvtBaseMapManager$$.$registerBaseMapLayer$);
$DvtBaseMapManager$$.$registerResourceBundle$ = function $$DvtBaseMapManager$$$$registerResourceBundle$$($baseMapName$$14_layerMetadata$$1$$, $layerName$$18$$, $labelMetadata$$1$$) {
  var $basemapMetadata$$1$$ = $DvtBaseMapManager$$.$_GLOBAL_MAPS$[$baseMapName$$14_layerMetadata$$1$$];
  $basemapMetadata$$1$$ || ($basemapMetadata$$1$$ = {}, $DvtBaseMapManager$$.$_GLOBAL_MAPS$[$baseMapName$$14_layerMetadata$$1$$] = $basemapMetadata$$1$$);
  $baseMapName$$14_layerMetadata$$1$$ = $basemapMetadata$$1$$[$layerName$$18$$];
  $baseMapName$$14_layerMetadata$$1$$ || ($baseMapName$$14_layerMetadata$$1$$ = {}, $basemapMetadata$$1$$[$layerName$$18$$] = $baseMapName$$14_layerMetadata$$1$$);
  ($baseMapName$$14_layerMetadata$$1$$ = $basemapMetadata$$1$$[$layerName$$18$$]) && ($baseMapName$$14_layerMetadata$$1$$[$DvtBaseMapManager$$.$TYPE_LABELS$] = $labelMetadata$$1$$)
};
$goog$exportPath_$$("DvtBaseMapManager.registerResourceBundle", $DvtBaseMapManager$$.$registerResourceBundle$);
$DvtBaseMapManager$$.$updateResourceBundle$ = function $$DvtBaseMapManager$$$$updateResourceBundle$$($baseMapName$$15_basemapMetadata$$2$$, $layerMetadata$$2_layerName$$19$$, $labelMetadata$$2$$) {
  if($baseMapName$$15_basemapMetadata$$2$$ = $DvtBaseMapManager$$.$_GLOBAL_MAPS$[$baseMapName$$15_basemapMetadata$$2$$]) {
    if($layerMetadata$$2_layerName$$19$$ = $baseMapName$$15_basemapMetadata$$2$$[$layerMetadata$$2_layerName$$19$$]) {
      for(var $prop$$11$$ in $labelMetadata$$2$$) {
        $layerMetadata$$2_layerName$$19$$[$DvtBaseMapManager$$.$TYPE_LABELS$][$prop$$11$$] = $labelMetadata$$2$$[$prop$$11$$]
      }
    }
  }
};
$goog$exportPath_$$("DvtBaseMapManager.updateResourceBundle", $DvtBaseMapManager$$.$updateResourceBundle$);
$DvtBaseMapManager$$.$_processUnprocessedMaps$ = function $$DvtBaseMapManager$$$$_processUnprocessedMaps$$() {
  var $i$$588_index$$194$$, $args$$2$$, $unprocessedMaps_unprocessedParentUpdates$$ = $DvtBaseMapManager$$._UNPROCESSED_MAPS;
  if($unprocessedMaps_unprocessedParentUpdates$$) {
    for($i$$588_index$$194$$ = 0;$i$$588_index$$194$$ < $unprocessedMaps_unprocessedParentUpdates$$[0].length;$i$$588_index$$194$$++) {
      $args$$2$$ = $unprocessedMaps_unprocessedParentUpdates$$[0][$i$$588_index$$194$$], $DvtBaseMapManager$$.$registerBaseMapLayer$($args$$2$$[0], $args$$2$$[1], $args$$2$$[2], $args$$2$$[3], $args$$2$$[4], $args$$2$$[5], $args$$2$$[6], $args$$2$$[7])
    }
    for($i$$588_index$$194$$ = 0;$i$$588_index$$194$$ < $unprocessedMaps_unprocessedParentUpdates$$[1].length;$i$$588_index$$194$$++) {
      $args$$2$$ = $unprocessedMaps_unprocessedParentUpdates$$[1][$i$$588_index$$194$$], $DvtBaseMapManager$$.$registerResourceBundle$($args$$2$$[0], $args$$2$$[1], $args$$2$$[2])
    }
    for($i$$588_index$$194$$ = 0;$i$$588_index$$194$$ < $unprocessedMaps_unprocessedParentUpdates$$[2].length;$i$$588_index$$194$$++) {
      $args$$2$$ = $unprocessedMaps_unprocessedParentUpdates$$[2][$i$$588_index$$194$$], $DvtBaseMapManager$$.$updateResourceBundle$($args$$2$$[0], $args$$2$$[1], $args$$2$$[2])
    }
    $DvtBaseMapManager$$._UNPROCESSED_MAPS = [[], [], []]
  }
  if($unprocessedMaps_unprocessedParentUpdates$$ = $DvtBaseMapManager$$._UNPROCESSED_PARENT_UPDATES) {
    for($i$$588_index$$194$$ = 0;$i$$588_index$$194$$ < $unprocessedMaps_unprocessedParentUpdates$$[0].length;$i$$588_index$$194$$++) {
      $args$$2$$ = $unprocessedMaps_unprocessedParentUpdates$$[0][$i$$588_index$$194$$];
      var $extendedLayer_indicies_layerMetadata$$3$$ = $args$$2$$[1], $layerName$$20_lowerLayer$$ = $args$$2$$[2], $basemapMetadata$$3$$ = $DvtBaseMapManager$$.$_GLOBAL_MAPS$[$args$$2$$[0]], $basemapDim$$;
      if($basemapMetadata$$3$$) {
        if($extendedLayer_indicies_layerMetadata$$3$$ = $basemapMetadata$$3$$[$extendedLayer_indicies_layerMetadata$$3$$]) {
          $extendedLayer_indicies_layerMetadata$$3$$[$DvtBaseMapManager$$.$TYPE_PARENTREGION_CHILDREN$] = $args$$2$$[3];
          $basemapDim$$ = $extendedLayer_indicies_layerMetadata$$3$$[$DvtBaseMapManager$$.$TYPE_DIM$];
          $i$$588_index$$194$$ = $extendedLayer_indicies_layerMetadata$$3$$[$DvtBaseMapManager$$.$_INDEX$];
          $extendedLayer_indicies_layerMetadata$$3$$ = $basemapMetadata$$3$$[$DvtBaseMapManager$$.$_INDEX$];
          $extendedLayer_indicies_layerMetadata$$3$$.splice($i$$588_index$$194$$, 0, $layerName$$20_lowerLayer$$);
          $basemapMetadata$$3$$[$layerName$$20_lowerLayer$$][$DvtBaseMapManager$$.$_INDEX$] = $i$$588_index$$194$$;
          for($i$$588_index$$194$$ += 1;$i$$588_index$$194$$ < $extendedLayer_indicies_layerMetadata$$3$$.length;$i$$588_index$$194$$++) {
            ($layerName$$20_lowerLayer$$ = $basemapMetadata$$3$$[$extendedLayer_indicies_layerMetadata$$3$$[$i$$588_index$$194$$]]) && $layerName$$20_lowerLayer$$[$DvtBaseMapManager$$.$_INDEX$]++
          }
        }
        ($extendedLayer_indicies_layerMetadata$$3$$ = $basemapMetadata$$3$$[$args$$2$$[2]]) && ($extendedLayer_indicies_layerMetadata$$3$$[$DvtBaseMapManager$$.$TYPE_DIM$] = $basemapDim$$)
      }
    }
    $DvtBaseMapManager$$._UNPROCESSED_PARENT_UPDATES = [[]]
  }
};
$DvtBaseMapManager$$.$simplifyAreaPaths$ = function $$DvtBaseMapManager$$$$simplifyAreaPaths$$($paths$$, $basemapW_scale$$53$$, $basemapH_simplifiedPaths$$, $pathAr_viewportW$$, $viewportH$$, $zoomFactor$$1$$) {
  if(0 < $zoomFactor$$1$$) {
    $basemapW_scale$$53$$ = 1 / (Math.min($pathAr_viewportW$$ / $basemapW_scale$$53$$, $viewportH$$ / $basemapH_simplifiedPaths$$) * $zoomFactor$$1$$);
    if(1 >= $basemapW_scale$$53$$) {
      return $paths$$
    }
    $basemapH_simplifiedPaths$$ = [];
    if($paths$$) {
      for(var $path$$37$$ in $paths$$) {
        $pathAr_viewportW$$ = $paths$$[$path$$37$$], isNaN($pathAr_viewportW$$) && ($pathAr_viewportW$$ = dvt.$PathUtils$.$createPathArray$($paths$$[$path$$37$$])), $basemapH_simplifiedPaths$$[$path$$37$$] = dvt.$PathUtils$.$simplifyPath$($pathAr_viewportW$$, $basemapW_scale$$53$$)
      }
    }
    return $basemapH_simplifiedPaths$$
  }
  return $paths$$
};
$DvtBaseMapManager$$.$getLayerIds$ = function $$DvtBaseMapManager$$$$getLayerIds$$($baseMapName$$16$$, $layerName$$21$$) {
  $DvtBaseMapManager$$.$_processUnprocessedMaps$();
  var $ids$$1_layer$$10$$ = $DvtBaseMapManager$$.$_GLOBAL_MAPS$[$baseMapName$$16$$][$layerName$$21$$], $map$$11$$ = {};
  if($ids$$1_layer$$10$$) {
    var $ids$$1_layer$$10$$ = $ids$$1_layer$$10$$[$DvtBaseMapManager$$.$TYPE_LABELS$], $id$$189$$;
    for($id$$189$$ in $ids$$1_layer$$10$$) {
      $map$$11$$[$id$$189$$] = $ids$$1_layer$$10$$[$id$$189$$][1]
    }
  }
  return $map$$11$$
};
$goog$exportPath_$$("DvtBaseMapManager.getLayerIds", $DvtBaseMapManager$$.$getLayerIds$);
function $DvtThematicMapCategoryWrapper$$($displayable$$67$$, $category$$20$$) {
  this.Init($displayable$$67$$, $category$$20$$)
}
dvt.$Obj$.$createSubclass$($DvtThematicMapCategoryWrapper$$, dvt.$Obj$);
$DvtThematicMapCategoryWrapper$$.prototype.Init = function $$DvtThematicMapCategoryWrapper$$$$Init$($displayable$$68$$, $category$$21$$) {
  this.$_displayable$ = $displayable$$68$$;
  this.$_category$ = $category$$21$$
};
$DvtThematicMapCategoryWrapper$$.prototype.$getCategories$ = $JSCompiler_get$$("$_category$");
$DvtThematicMapCategoryWrapper$$.prototype.$getDisplayables$ = function $$DvtThematicMapCategoryWrapper$$$$$getDisplayables$$() {
  return[this.$_displayable$]
};
dvt.$MapDrillEvent$ = function $dvt$$MapDrillEvent$$($drillType$$1$$) {
  this.Init(dvt.$MapDrillEvent$.$TYPE$);
  this.$_drillType$ = $drillType$$1$$
};
dvt.$Obj$.$createSubclass$(dvt.$MapDrillEvent$, dvt.$BaseComponentEvent$);
dvt.$MapDrillEvent$.$TYPE$ = "drill";
dvt.$MapDrillEvent$.$DRILL_UP$ = 0;
dvt.$MapDrillEvent$.$DRILL_DOWN$ = 1;
dvt.$MapDrillEvent$.$RESET$ = 2;
dvt.$MapDrillEvent$.prototype.$setDisclosed$ = $JSCompiler_set$$("$_disclosed$");
dvt.$MapActionEvent$ = function $dvt$$MapActionEvent$$($clientId$$2$$, $rowKey$$3$$, $action$$27$$) {
  this.Init(dvt.$MapActionEvent$.$TYPE$);
  this.$_clientId$ = $clientId$$2$$;
  this.$_rowKey$ = $rowKey$$3$$;
  this.$_action$ = $action$$27$$
};
$goog$exportPath_$$("dvt.MapActionEvent", dvt.$MapActionEvent$);
dvt.$Obj$.$createSubclass$(dvt.$MapActionEvent$, dvt.$BaseComponentEvent$);
dvt.$MapActionEvent$.$TYPE$ = "action";
dvt.$MapActionEvent$.TYPE = dvt.$MapActionEvent$.$TYPE$;
dvt.$MapActionEvent$.prototype.$getClientId$ = $JSCompiler_get$$("$_clientId$");
dvt.$MapActionEvent$.prototype.getClientId = dvt.$MapActionEvent$.prototype.$getClientId$;
dvt.$MapActionEvent$.prototype.$getRowKey$ = $JSCompiler_get$$("$_rowKey$");
dvt.$MapActionEvent$.prototype.getRowKey = dvt.$MapActionEvent$.prototype.$getRowKey$;
dvt.$MapActionEvent$.prototype.$getAction$ = $JSCompiler_get$$("$_action$");
dvt.$MapActionEvent$.prototype.getAction = dvt.$MapActionEvent$.prototype.$getAction$;
function $DvtMapLabel$$($context$$377$$, $label$$77$$, $labelInfo$$9$$, $labelDisplay$$1$$, $parentContainer$$, $bSupportsVectorEffects$$2$$) {
  this.Init($context$$377$$, $label$$77$$, $labelInfo$$9$$, $labelDisplay$$1$$, $parentContainer$$, $bSupportsVectorEffects$$2$$)
}
dvt.$Obj$.$createSubclass$($DvtMapLabel$$, dvt.$OutputText$);
$JSCompiler_prototypeAlias$$ = $DvtMapLabel$$.prototype;
$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($context$$378$$, $i$$589_label$$78$$, $labelInfo$$10$$, $labelDisplay$$2_line$$16_polyline$$, $parentContainer$$1_stroke$$92$$, $bSupportsVectorEffects$$3$$) {
  $DvtMapLabel$$.$superclass$.Init.call(this, $context$$378$$, $i$$589_label$$78$$, 0, 0);
  this.$_bSupportsVectorEffects$ = $bSupportsVectorEffects$$3$$;
  this.$_boundRectangle$ = [];
  this.$setMouseEnabled$($JSCompiler_alias_FALSE$$);
  this.$alignCenter$();
  this.$alignMiddle$();
  this.$_center$ = $JSCompiler_alias_NULL$$;
  this.$_labelDisplay$ = $labelDisplay$$2_line$$16_polyline$$;
  this.$_parentContainer$ = $parentContainer$$1_stroke$$92$$;
  if($labelInfo$$10$$ && (this.$_boundRectangle$.push(dvt.$Rectangle$.create($labelInfo$$10$$[0])), 1 < $labelInfo$$10$$.length)) {
    this.$_leaderLines$ = [];
    for($i$$589_label$$78$$ = 1;$i$$589_label$$78$$ < $labelInfo$$10$$.length;$i$$589_label$$78$$++) {
      $labelDisplay$$2_line$$16_polyline$$ = $labelInfo$$10$$[$i$$589_label$$78$$], this.$_boundRectangle$.push(dvt.$Rectangle$.create($labelDisplay$$2_line$$16_polyline$$[0])), $labelDisplay$$2_line$$16_polyline$$ = new dvt.$Polyline$($context$$378$$, $labelDisplay$$2_line$$16_polyline$$[1]), $labelDisplay$$2_line$$16_polyline$$.$setPixelHinting$(), $parentContainer$$1_stroke$$92$$ = new dvt.$SolidStroke$("#000000"), this.$_bSupportsVectorEffects$ && $parentContainer$$1_stroke$$92$$.$setFixedWidth$($JSCompiler_alias_TRUE$$), 
      $labelDisplay$$2_line$$16_polyline$$.$setStroke$($parentContainer$$1_stroke$$92$$), this.$_leaderLines$.push($labelDisplay$$2_line$$16_polyline$$)
    }
  }
};
$JSCompiler_prototypeAlias$$.update = function $$JSCompiler_prototypeAlias$$$update$($pzcMatrix$$6_zoom$$16$$) {
  $pzcMatrix$$6_zoom$$16$$ = $pzcMatrix$$6_zoom$$16$$.$_a$;
  for(var $mat$$28_state$$93_stroke$$93$$ = -1, $center$$7_estimatedDims$$1$$ = dvt.$TextUtils$.$guessTextDimensions$(this), $labelBox_remove_style$$93$$ = $JSCompiler_alias_FALSE$$, $i$$590_leaderLinePoints$$ = 0;$i$$590_leaderLinePoints$$ < this.$_boundRectangle$.length;$i$$590_leaderLinePoints$$++) {
    var $numPoints$$2_zoomW$$ = this.$_boundRectangle$[$i$$590_leaderLinePoints$$].$w$ * $pzcMatrix$$6_zoom$$16$$;
    if($center$$7_estimatedDims$$1$$.$h$ <= this.$_boundRectangle$[$i$$590_leaderLinePoints$$].$h$ * $pzcMatrix$$6_zoom$$16$$) {
      if($center$$7_estimatedDims$$1$$.$w$ <= $numPoints$$2_zoomW$$) {
        $mat$$28_state$$93_stroke$$93$$ = $i$$590_leaderLinePoints$$;
        break
      }else {
        if(this.getParent() || ($labelBox_remove_style$$93$$ = $JSCompiler_alias_TRUE$$, this.$_parentContainer$.$addChild$(this)), this.$getDimensions$().$w$ <= $numPoints$$2_zoomW$$) {
          $mat$$28_state$$93_stroke$$93$$ = $i$$590_leaderLinePoints$$;
          break
        }
      }
    }
  }
  -1 == $mat$$28_state$$93_stroke$$93$$ && "on" == this.$_labelDisplay$ && ($mat$$28_state$$93_stroke$$93$$ = this.$_boundRectangle$.length - 1);
  this.$_currentState$ != $mat$$28_state$$93_stroke$$93$$ ? (-1 == $mat$$28_state$$93_stroke$$93$$ ? this.reset() : (this.getParent() || this.$_parentContainer$.$addChild$(this), $center$$7_estimatedDims$$1$$ = this.$_boundRectangle$[$mat$$28_state$$93_stroke$$93$$].$getCenter$(), this.$setCenter$($center$$7_estimatedDims$$1$$), this.$_leaderLines$ && (this.$_parentContainer$.removeChild(this.$_leaderLine$), this.$_leaderLine$ = $JSCompiler_alias_NULL$$, 0 < $mat$$28_state$$93_stroke$$93$$ ? (this.$_leaderLine$ = 
  this.$_leaderLines$[$mat$$28_state$$93_stroke$$93$$ - 1], this.$_parentContainer$.$addChild$(this.$_leaderLine$), $labelBox_remove_style$$93$$ = this.$getCSSStyle$(), $labelBox_remove_style$$93$$.$setStyle$(dvt.$CSSStyle$.$COLOR$, "#000000"), this.$setCSSStyle$($labelBox_remove_style$$93$$), $labelBox_remove_style$$93$$ = this.$_boundRectangle$[$mat$$28_state$$93_stroke$$93$$], $i$$590_leaderLinePoints$$ = this.$_leaderLine$.$getPoints$(), $numPoints$$2_zoomW$$ = $i$$590_leaderLinePoints$$.length, 
  $labelBox_remove_style$$93$$.x > $i$$590_leaderLinePoints$$[$numPoints$$2_zoomW$$ - 2] ? (this.$alignLeft$(), this.$alignMiddle$(), this.$setCenter$(new dvt.$Point$($labelBox_remove_style$$93$$.x, $center$$7_estimatedDims$$1$$.y))) : $labelBox_remove_style$$93$$.y > $i$$590_leaderLinePoints$$[$numPoints$$2_zoomW$$ - 1] ? (this.$alignTop$(), this.$alignCenter$(), this.$setCenter$(new dvt.$Point$($center$$7_estimatedDims$$1$$.x, $labelBox_remove_style$$93$$.y))) : $labelBox_remove_style$$93$$.x + 
  $labelBox_remove_style$$93$$.$w$ < $i$$590_leaderLinePoints$$[$numPoints$$2_zoomW$$ - 2] ? (this.$alignRight$(), this.$alignMiddle$(), this.$setCenter$(new dvt.$Point$($labelBox_remove_style$$93$$.x + $labelBox_remove_style$$93$$.$w$, $center$$7_estimatedDims$$1$$.y))) : $labelBox_remove_style$$93$$.y + $labelBox_remove_style$$93$$.$h$ < $i$$590_leaderLinePoints$$[$numPoints$$2_zoomW$$ - 1] && (this.$alignBottom$(), this.$alignCenter$(), this.$setCenter$(new dvt.$Point$($center$$7_estimatedDims$$1$$.x, 
  $labelBox_remove_style$$93$$.y + $labelBox_remove_style$$93$$.$h$)))) : (this.$alignCenter$(), this.$alignMiddle$(), $labelBox_remove_style$$93$$ = this.$getCSSStyle$(), $labelBox_remove_style$$93$$.$setStyle$(dvt.$CSSStyle$.$COLOR$, this.$_labelColor$), this.$setCSSStyle$($labelBox_remove_style$$93$$)))), this.$_currentState$ = $mat$$28_state$$93_stroke$$93$$) : -1 == $mat$$28_state$$93_stroke$$93$$ && $labelBox_remove_style$$93$$ && this.$_parentContainer$.removeChild(this);
  -1 != this.$_currentState$ && ($mat$$28_state$$93_stroke$$93$$ = new dvt.$Matrix$, $mat$$28_state$$93_stroke$$93$$.translate($pzcMatrix$$6_zoom$$16$$ * this.$_center$.x - this.$_center$.x, $pzcMatrix$$6_zoom$$16$$ * this.$_center$.y - this.$_center$.y), this.$setMatrix$($mat$$28_state$$93_stroke$$93$$), this.$_leaderLine$ && (this.$_leaderLine$.$setMatrix$(new dvt.$Matrix$($pzcMatrix$$6_zoom$$16$$, 0, 0, $pzcMatrix$$6_zoom$$16$$)), this.$_bSupportsVectorEffects$ || ($mat$$28_state$$93_stroke$$93$$ = 
  this.$_leaderLine$.$getStroke$().$clone$(), $mat$$28_state$$93_stroke$$93$$.$setWidth$(1 / $pzcMatrix$$6_zoom$$16$$), this.$_leaderLine$.$setStroke$($mat$$28_state$$93_stroke$$93$$))))
};
$JSCompiler_prototypeAlias$$.$setCenter$ = function $$JSCompiler_prototypeAlias$$$$setCenter$$($p$$21$$) {
  this.$_center$ = $p$$21$$;
  this.$setX$($p$$21$$.x);
  this.$setY$($p$$21$$.y)
};
$JSCompiler_prototypeAlias$$.$getCenter$ = $JSCompiler_get$$("$_center$");
$JSCompiler_prototypeAlias$$.$setCSSStyle$ = function $$JSCompiler_prototypeAlias$$$$setCSSStyle$$($cssStyle$$32$$) {
  $DvtMapLabel$$.$superclass$.$setCSSStyle$.call(this, $cssStyle$$32$$);
  this.$_labelColor$ || (this.$_labelColor$ = $cssStyle$$32$$.$getStyle$(dvt.$CSSStyle$.$COLOR$))
};
$JSCompiler_prototypeAlias$$.reset = function $$JSCompiler_prototypeAlias$$$reset$() {
  this.$_parentContainer$.removeChild(this);
  this.$_currentState$ = -1;
  this.$_leaderLine$ && (this.$_parentContainer$.removeChild(this.$_leaderLine$), this.$_leaderLine$ = $JSCompiler_alias_NULL$$)
};
function $DvtMapObjPeer$$($data$$98$$, $dataLayer$$4$$, $displayable$$69$$, $label$$79$$, $center$$8$$) {
  this.Init($data$$98$$, $dataLayer$$4$$, $displayable$$69$$, $label$$79$$, $center$$8$$)
}
dvt.$Obj$.$createSubclass$($DvtMapObjPeer$$, dvt.$Obj$);
$JSCompiler_prototypeAlias$$ = $DvtMapObjPeer$$.prototype;
$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($data$$99$$, $dataLayer$$5_mapLayer_preDatatip$$, $displayable$$70_location$$24$$, $label$$80$$, $center$$9$$) {
  this.$_data$ = $data$$99$$;
  this.$_dataLayer$ = $dataLayer$$5_mapLayer_preDatatip$$;
  this.$Displayable$ = $displayable$$70_location$$24$$;
  this.$_isShowingKeyboardFocusEffect$ = this.$_isShowingHoverEffect$ = this.$_isSelected$ = $JSCompiler_alias_FALSE$$;
  this.$Displayable$.$setDataColor$ && this.$Displayable$.$setDataColor$($data$$99$$.color);
  this.$_label$ = $label$$80$$;
  this.$_center$ = $center$$9$$;
  this.$_zoom$ = 1;
  this.$_view$ = $dataLayer$$5_mapLayer_preDatatip$$.$_tmap$;
  this.$_data$.categories || this.$_label$ && (this.$_data$.categories = [this.$_label$.$getTextString$()]);
  $displayable$$70_location$$24$$ = $data$$99$$.location;
  "auto" == this.$_view$.$_displayTooltips$ && $displayable$$70_location$$24$$ && ($dataLayer$$5_mapLayer_preDatatip$$ = $dataLayer$$5_mapLayer_preDatatip$$.$_parentLayer$, ($dataLayer$$5_mapLayer_preDatatip$$ = !($dataLayer$$5_mapLayer_preDatatip$$ instanceof $DvtMapAreaLayer$$) || $dataLayer$$5_mapLayer_preDatatip$$ instanceof $DvtMapCustomAreaLayer$$ ? $DvtBaseMapManager$$.$getCityLabel$(this.$_view$.$_mapName$, $displayable$$70_location$$24$$) : $DvtBaseMapManager$$.$getLongAreaLabel$(this.$_view$.$_mapName$, 
  $dataLayer$$5_mapLayer_preDatatip$$.$LayerName$, $displayable$$70_location$$24$$)) && (this.$_data$.shortDesc = $data$$99$$.shortDesc ? $dataLayer$$5_mapLayer_preDatatip$$ + ": " + $data$$99$$.shortDesc : $dataLayer$$5_mapLayer_preDatatip$$));
  this.$Displayable$ && ($data$$99$$.destination ? (this.$Displayable$.$setAriaRole$("link"), this.$_linkCallback$ = dvt.$ToolkitUtils$.$getLinkCallback$("_blank", $data$$99$$.destination)) : this.$Displayable$.$setAriaRole$("img"));
  this.$UpdateAriaLabel$()
};
$JSCompiler_prototypeAlias$$.getId = function $$JSCompiler_prototypeAlias$$$getId$() {
  return this.$_data$.id
};
$JSCompiler_prototypeAlias$$.$getClientId$ = function $$JSCompiler_prototypeAlias$$$$getClientId$$() {
  return this.$_data$.clientId
};
$JSCompiler_prototypeAlias$$.$getLocation$ = function $$JSCompiler_prototypeAlias$$$$getLocation$$() {
  return this.$_data$.location
};
$JSCompiler_prototypeAlias$$.$getCenter$ = $JSCompiler_get$$("$_center$");
$JSCompiler_prototypeAlias$$.$setCenter$ = function $$JSCompiler_prototypeAlias$$$$setCenter$$($center$$10$$) {
  this.$_center$ = $center$$10$$;
  this.$__recenter$()
};
$JSCompiler_prototypeAlias$$.$getDisplayable$ = $JSCompiler_get$$("$Displayable$");
$JSCompiler_prototypeAlias$$.$getLabel$ = $JSCompiler_get$$("$_label$");
$JSCompiler_prototypeAlias$$.$getDataLayer$ = $JSCompiler_get$$("$_dataLayer$");
$JSCompiler_prototypeAlias$$.$getAction$ = function $$JSCompiler_prototypeAlias$$$$getAction$$() {
  return this.$_data$.action
};
$JSCompiler_prototypeAlias$$.$setVisible$ = function $$JSCompiler_prototypeAlias$$$$setVisible$$($bVisible$$9$$) {
  this.$Displayable$.$setVisible$($bVisible$$9$$);
  this.$_label$ && this.$_label$.$setVisible$($bVisible$$9$$)
};
$JSCompiler_prototypeAlias$$.$getShortDesc$ = function $$JSCompiler_prototypeAlias$$$$getShortDesc$$() {
  return this.$_data$.shortDesc
};
$JSCompiler_prototypeAlias$$.$getSize$ = function $$JSCompiler_prototypeAlias$$$$getSize$$() {
  return this.$Displayable$.getWidth ? this.$Displayable$.getWidth() * this.$Displayable$.getHeight() : 0
};
$JSCompiler_prototypeAlias$$.$getCategories$ = function $$JSCompiler_prototypeAlias$$$$getCategories$$() {
  return this.$_data$.categories
};
$JSCompiler_prototypeAlias$$.$getDatatip$ = function $$JSCompiler_prototypeAlias$$$$getDatatip$$() {
  if("none" != this.$_view$.$_displayTooltips$) {
    var $tooltipFunc$$9$$ = this.$_view$.$getOptions$().tooltip;
    return $tooltipFunc$$9$$ ? this.$_view$.$getCtx$().$getTooltipManager$().$getCustomTooltip$($tooltipFunc$$9$$, this.$getDataContext$()) : this.$getShortDesc$()
  }
  return $JSCompiler_alias_NULL$$
};
$JSCompiler_prototypeAlias$$.$getDataContext$ = function $$JSCompiler_prototypeAlias$$$$getDataContext$$() {
  return{id:this.getId(), label:this.$_label$ ? this.$_label$.$getTextString$() : $JSCompiler_alias_NULL$$, color:this.$getDatatipColor$(), location:this.$getLocation$(), x:this.$_data$.x, y:this.$_data$.y}
};
$JSCompiler_prototypeAlias$$.$getLinkCallback$ = $JSCompiler_get$$("$_linkCallback$");
$JSCompiler_prototypeAlias$$.$getDatatipColor$ = function $$JSCompiler_prototypeAlias$$$$getDatatipColor$$() {
  return this.$_data$.color ? this.$_data$.color : "#000000"
};
$JSCompiler_prototypeAlias$$.$getAriaLabel$ = function $$JSCompiler_prototypeAlias$$$$getAriaLabel$$() {
  var $states$$16$$ = [];
  this.$isSelectable$() && $states$$16$$.push(dvt.$Bundle$.$getTranslatedString$(dvt.$Bundle$.$UTIL_PREFIX$, this.$isSelected$() ? "STATE_SELECTED" : "STATE_UNSELECTED"));
  return dvt.$Displayable$.$generateAriaLabel$(this.$getShortDesc$(), $states$$16$$)
};
$JSCompiler_prototypeAlias$$.$getDisplayables$ = function $$JSCompiler_prototypeAlias$$$$getDisplayables$$() {
  return[this.$getDisplayable$()]
};
$JSCompiler_prototypeAlias$$.$UpdateAriaLabel$ = function $$JSCompiler_prototypeAlias$$$$UpdateAriaLabel$$() {
  if(!dvt.$Agent$.$deferAriaCreation$()) {
    var $desc$$27$$ = this.$getAriaLabel$();
    $desc$$27$$ && this.$Displayable$.$setAriaProperty$("label", $desc$$27$$)
  }
};
$JSCompiler_prototypeAlias$$.$setSelectable$ = function $$JSCompiler_prototypeAlias$$$$setSelectable$$($bSelectable$$2$$) {
  var $label$$81$$ = this.$getLabel$();
  this.$Displayable$.$setSelectable$ && (this.$Displayable$.$setSelectable$($bSelectable$$2$$), $label$$81$$ && $bSelectable$$2$$ && $label$$81$$.setCursor("pointer"));
  this.$_data$.destination && (this.$Displayable$.setCursor("pointer"), $label$$81$$ && $label$$81$$.setCursor("pointer"))
};
$JSCompiler_prototypeAlias$$.$isSelectable$ = function $$JSCompiler_prototypeAlias$$$$isSelectable$$() {
  return this.$Displayable$.$isSelectable$ ? this.$Displayable$.$isSelectable$() : $JSCompiler_alias_FALSE$$
};
$JSCompiler_prototypeAlias$$.$isSelected$ = $JSCompiler_get$$("$_isSelected$");
$JSCompiler_prototypeAlias$$.$setSelected$ = function $$JSCompiler_prototypeAlias$$$$setSelected$$($selected$$38$$) {
  if(this.$isSelectable$()) {
    var $prevState$$7$$ = this.$_getState$();
    this.$_isSelected$ = $selected$$38$$;
    this.$_dataLayer$.$getOptions$().selectionRenderer ? $JSCompiler_StaticMethods__callCustomRenderer$$(this, this.$_dataLayer$.$getOptions$().selectionRenderer, this.$_getState$(), $prevState$$7$$) : this.$processDefaultSelectionEffect$($selected$$38$$);
    this.$UpdateAriaLabel$()
  }
};
$JSCompiler_prototypeAlias$$.$showHoverEffect$ = function $$JSCompiler_prototypeAlias$$$$showHoverEffect$$() {
  var $prevState$$8$$ = this.$_getState$();
  this.$_isShowingHoverEffect$ = $JSCompiler_alias_TRUE$$;
  this.$_dataLayer$.$getOptions$().hoverRenderer ? $JSCompiler_StaticMethods__callCustomRenderer$$(this, this.$_dataLayer$.$getOptions$().hoverRenderer, this.$_getState$(), $prevState$$8$$) : this.$processDefaultHoverEffect$($JSCompiler_alias_TRUE$$)
};
$JSCompiler_prototypeAlias$$.$hideHoverEffect$ = function $$JSCompiler_prototypeAlias$$$$hideHoverEffect$$() {
  var $prevState$$9$$ = this.$_getState$();
  this.$_isShowingHoverEffect$ = $JSCompiler_alias_FALSE$$;
  this.$_dataLayer$.$getOptions$().hoverRenderer ? $JSCompiler_StaticMethods__callCustomRenderer$$(this, this.$_dataLayer$.$getOptions$().hoverRenderer, this.$_getState$(), $prevState$$9$$) : this.$processDefaultHoverEffect$($JSCompiler_alias_FALSE$$)
};
$JSCompiler_prototypeAlias$$.$setShowPopupBehaviors$ = $JSCompiler_set$$("$_showPopupBehaviors$");
$JSCompiler_prototypeAlias$$.$getShowPopupBehaviors$ = $JSCompiler_get$$("$_showPopupBehaviors$");
$JSCompiler_prototypeAlias$$.$isDragAvailable$ = function $$JSCompiler_prototypeAlias$$$$isDragAvailable$$($clientIds$$21$$) {
  for(var $parentId$$30$$ = this.$_dataLayer$.$getClientId$(), $i$$591$$ = 0;$i$$591$$ < $clientIds$$21$$.length && $clientIds$$21$$[$i$$591$$] != $parentId$$30$$;$i$$591$$++) {
  }
  return $parentId$$30$$
};
$JSCompiler_prototypeAlias$$.$getDragTransferable$ = function $$JSCompiler_prototypeAlias$$$$getDragTransferable$$() {
  return this.$_dataLayer$.$__getDragTransferable$(this)
};
$JSCompiler_prototypeAlias$$.$getDragFeedback$ = function $$JSCompiler_prototypeAlias$$$$getDragFeedback$$() {
  return this.$_dataLayer$.$__getDragFeedback$()
};
$JSCompiler_prototypeAlias$$.$getNextNavigable$ = function $$JSCompiler_prototypeAlias$$$$getNextNavigable$$($event$$489$$) {
  return $event$$489$$.type == dvt.$MouseEvent$.$CLICK$ ? this : $event$$489$$.keyCode == dvt.$KeyboardEvent$.$SPACE$ && $event$$489$$.ctrlKey ? this : dvt.$KeyboardHandler$.$getNextAdjacentNavigable$(this, $event$$489$$, this.$GetNavigables$())
};
$JSCompiler_prototypeAlias$$.$GetNavigables$ = function $$JSCompiler_prototypeAlias$$$$GetNavigables$$() {
  return $JSCompiler_StaticMethods_getNavigableObjects$$(this.$getDataLayer$().$_tmap$)
};
$JSCompiler_prototypeAlias$$.$getKeyboardBoundingBox$ = function $$JSCompiler_prototypeAlias$$$$getKeyboardBoundingBox$$($targetCoordinateSpace$$34$$) {
  return this.$Displayable$.getParent() ? this.$Displayable$ instanceof $DvtCustomDataItem$$ ? this.$Displayable$.$getDimensions$($targetCoordinateSpace$$34$$ ? $targetCoordinateSpace$$34$$ : this.$Displayable$.$getCtx$().$_stage$) : this.$Displayable$.$getDimensions$($targetCoordinateSpace$$34$$) : new dvt.$Rectangle$(0, 0, 0, 0)
};
$JSCompiler_prototypeAlias$$.$getTargetElem$ = function $$JSCompiler_prototypeAlias$$$$getTargetElem$$() {
  return this.$Displayable$.$getElem$()
};
$JSCompiler_prototypeAlias$$.$showKeyboardFocusEffect$ = function $$JSCompiler_prototypeAlias$$$$showKeyboardFocusEffect$$() {
  var $prevState$$10$$ = this.$_getState$();
  this.$_isShowingKeyboardFocusEffect$ = $JSCompiler_alias_TRUE$$;
  this.$_dataLayer$.$getOptions$().focusRenderer ? $JSCompiler_StaticMethods__callCustomRenderer$$(this, this.$_dataLayer$.$getOptions$().focusRenderer, this.$_getState$(), $prevState$$10$$) : this.$processDefaultFocusEffect$($JSCompiler_alias_TRUE$$)
};
$JSCompiler_prototypeAlias$$.$hideKeyboardFocusEffect$ = function $$JSCompiler_prototypeAlias$$$$hideKeyboardFocusEffect$$() {
  if(this.$isShowingKeyboardFocusEffect$()) {
    var $prevState$$11$$ = this.$_getState$();
    this.$_isShowingKeyboardFocusEffect$ = $JSCompiler_alias_FALSE$$;
    this.$_dataLayer$.$getOptions$().focusRenderer ? $JSCompiler_StaticMethods__callCustomRenderer$$(this, this.$_dataLayer$.$getOptions$().focusRenderer, this.$_getState$(), $prevState$$11$$) : this.$processDefaultFocusEffect$($JSCompiler_alias_FALSE$$)
  }
};
$JSCompiler_prototypeAlias$$.$isShowingKeyboardFocusEffect$ = $JSCompiler_get$$("$_isShowingKeyboardFocusEffect$");
$JSCompiler_prototypeAlias$$.$HandleZoomEvent$ = function $$JSCompiler_prototypeAlias$$$$HandleZoomEvent$$($pzcMatrix$$7$$) {
  this.$Displayable$.getParent() && (this.$_zoom$ = $pzcMatrix$$7$$.$_a$, this.$__recenter$())
};
$JSCompiler_prototypeAlias$$.$positionLabel$ = function $$JSCompiler_prototypeAlias$$$$positionLabel$$() {
  if(this.$_label$) {
    this.$_label$.$alignCenter$();
    var $x$$188$$ = this.$Displayable$.$getCx$() * this.$_zoom$, $markerY$$2_y$$162$$ = this.$Displayable$.$getCy$() * this.$_zoom$, $markerH$$ = this.$Displayable$.getHeight(), $markerType$$ = this.$Displayable$ instanceof dvt.$SimpleMarker$ ? this.$Displayable$.$getType$() : "image", $position$$36$$ = this.$_data$.labelPosition;
    "top" == $position$$36$$ ? ($markerY$$2_y$$162$$ = $markerY$$2_y$$162$$ - $markerH$$ / 2 - 4, this.$_label$.$alignBottom$()) : "bottom" == $position$$36$$ ? ($markerY$$2_y$$162$$ += $markerH$$ / 2, this.$_label$.$alignTop$()) : ($markerY$$2_y$$162$$ = $markerType$$ == dvt.$SimpleMarker$.$TRIANGLE_UP$ ? $markerY$$2_y$$162$$ + $markerH$$ / 6 : $markerType$$ == dvt.$SimpleMarker$.$TRIANGLE_DOWN$ ? $markerY$$2_y$$162$$ - $markerH$$ / 6 : $markerY$$2_y$$162$$, this.$_label$.$alignMiddle$());
    this.$_label$.$setX$($x$$188$$).$setY$($markerY$$2_y$$162$$)
  }
};
$JSCompiler_prototypeAlias$$.$__recenter$ = function $$JSCompiler_prototypeAlias$$$$__recenter$$() {
  var $width$$122$$ = this.$Displayable$.getWidth(), $height$$106$$ = this.$Displayable$.getHeight();
  if($width$$122$$ != $JSCompiler_alias_NULL$$ && $height$$106$$ != $JSCompiler_alias_NULL$$ && this.$Displayable$.getParent()) {
    var $rotation$$7_shapeY$$ = 0, $shapeX$$ = this.$_center$.x, $rotation$$7_shapeY$$ = this.$_center$.y;
    this.$Displayable$.$getRotation$ && ($rotation$$7_shapeY$$ = this.$Displayable$.$getRotation$(), $shapeX$$ = this.$_center$.x * Math.cos($rotation$$7_shapeY$$) - this.$_center$.y * Math.sin($rotation$$7_shapeY$$), $rotation$$7_shapeY$$ = this.$_center$.x * Math.sin($rotation$$7_shapeY$$) + this.$_center$.y * Math.cos($rotation$$7_shapeY$$));
    $shapeX$$ = this.$_center$.x * this.$_zoom$ - $shapeX$$;
    $rotation$$7_shapeY$$ = this.$_center$.y * this.$_zoom$ - $rotation$$7_shapeY$$;
    this.$Displayable$ instanceof $DvtCustomDataItem$$ && ($shapeX$$ += this.$_center$.x - $width$$122$$ / 2, $rotation$$7_shapeY$$ += this.$_center$.y - $height$$106$$ / 2);
    this.$Displayable$.$setTranslate$($shapeX$$, $rotation$$7_shapeY$$);
    dvt.$Agent$.$workaroundFirefoxRepaint$(this.$Displayable$);
    this.$positionLabel$()
  }
};
$JSCompiler_prototypeAlias$$.$animateUpdate$ = function $$JSCompiler_prototypeAlias$$$$animateUpdate$$($handler$$46$$, $oldObj$$2$$) {
  var $anim$$39$$ = new dvt.$CustomAnimation$(this.$_view$.$getCtx$(), this.$Displayable$, this.$getDataLayer$().$getAnimationDuration$()), $oldDisplayable$$2$$ = $oldObj$$2$$.$getDisplayable$();
  if(this.$Displayable$.$getFill$) {
    var $endLabelFill_endLabelX_endLabelY_endRect$$1_endRotation_startFill$$3$$ = $oldDisplayable$$2$$.$getFill$(), $endFill$$4_startLabelX_startLabelY_startRect$$1_startRotation$$ = this.$Displayable$.$getFill$();
    $endFill$$4_startLabelX_startLabelY_startRect$$1_startRotation$$ instanceof dvt.$SolidFill$ && !($endFill$$4_startLabelX_startLabelY_startRect$$1_startRotation$$.$getColor$() == $endLabelFill_endLabelX_endLabelY_endRect$$1_endRotation_startFill$$3$$.$getColor$() && $endFill$$4_startLabelX_startLabelY_startRect$$1_startRotation$$.$getAlpha$() == $endLabelFill_endLabelX_endLabelY_endRect$$1_endRotation_startFill$$3$$.$getAlpha$()) && (this.$Displayable$.$setFill$($endLabelFill_endLabelX_endLabelY_endRect$$1_endRotation_startFill$$3$$), 
    $oldObj$$2$$.$getLabel$() && this.$_label$ && ($endLabelFill_endLabelX_endLabelY_endRect$$1_endRotation_startFill$$3$$ = this.$_label$.$getFill$(), this.$_label$.$setFill$($oldObj$$2$$.$getLabel$().$getFill$().$clone$()), $anim$$39$$.$_animator$.$addProp$(dvt.$Animator$.$TYPE_FILL$, this.$_label$, this.$_label$.$getFill$, this.$_label$.$setFill$, $endLabelFill_endLabelX_endLabelY_endRect$$1_endRotation_startFill$$3$$)), $anim$$39$$.$_animator$.$addProp$(dvt.$Animator$.$TYPE_FILL$, this.$Displayable$, 
    this.$Displayable$.$getFill$, this.$Displayable$.$setFill$, $endFill$$4_startLabelX_startLabelY_startRect$$1_startRotation$$))
  }
  if(this.$Displayable$.$getCenterDimensions$ && ($endFill$$4_startLabelX_startLabelY_startRect$$1_startRotation$$ = $oldObj$$2$$.$getDisplayable$().$getCenterDimensions$(), $endLabelFill_endLabelX_endLabelY_endRect$$1_endRotation_startFill$$3$$ = this.$Displayable$.$getCenterDimensions$(), $endFill$$4_startLabelX_startLabelY_startRect$$1_startRotation$$.x != $endLabelFill_endLabelX_endLabelY_endRect$$1_endRotation_startFill$$3$$.x || $endFill$$4_startLabelX_startLabelY_startRect$$1_startRotation$$.y != 
  $endLabelFill_endLabelX_endLabelY_endRect$$1_endRotation_startFill$$3$$.y || $endFill$$4_startLabelX_startLabelY_startRect$$1_startRotation$$.$w$ != $endLabelFill_endLabelX_endLabelY_endRect$$1_endRotation_startFill$$3$$.$w$ || $endFill$$4_startLabelX_startLabelY_startRect$$1_startRotation$$.$h$ != $endLabelFill_endLabelX_endLabelY_endRect$$1_endRotation_startFill$$3$$.$h$)) {
    this.$Displayable$.$setCenterDimensions$($endFill$$4_startLabelX_startLabelY_startRect$$1_startRotation$$), $anim$$39$$.$_animator$.$addProp$(dvt.$Animator$.$TYPE_RECTANGLE$, this.$Displayable$, this.$Displayable$.$getCenterDimensions$, this.$Displayable$.$setCenterDimensions$, $endLabelFill_endLabelX_endLabelY_endRect$$1_endRotation_startFill$$3$$)
  }
  $endFill$$4_startLabelX_startLabelY_startRect$$1_startRotation$$ = $oldDisplayable$$2$$.$getRotation$();
  $endLabelFill_endLabelX_endLabelY_endRect$$1_endRotation_startFill$$3$$ = this.$Displayable$.$getRotation$();
  if($endFill$$4_startLabelX_startLabelY_startRect$$1_startRotation$$ != $endLabelFill_endLabelX_endLabelY_endRect$$1_endRotation_startFill$$3$$) {
    var $diffRotation_startCenter$$ = $endFill$$4_startLabelX_startLabelY_startRect$$1_startRotation$$ - $endLabelFill_endLabelX_endLabelY_endRect$$1_endRotation_startFill$$3$$;
    $diffRotation_startCenter$$ > Math.PI ? $endFill$$4_startLabelX_startLabelY_startRect$$1_startRotation$$ -= 2 * Math.PI : $diffRotation_startCenter$$ < -Math.PI && ($endFill$$4_startLabelX_startLabelY_startRect$$1_startRotation$$ += 2 * Math.PI);
    this.$Displayable$.$setRotation$($endFill$$4_startLabelX_startLabelY_startRect$$1_startRotation$$);
    $anim$$39$$.$_animator$.$addProp$(dvt.$Animator$.$TYPE_NUMBER$, this.$Displayable$, this.$Displayable$.$getRotation$, this.$Displayable$.$setRotation$, $endLabelFill_endLabelX_endLabelY_endRect$$1_endRotation_startFill$$3$$)
  }
  var $diffRotation_startCenter$$ = $oldObj$$2$$.$getCenter$(), $endCenter$$ = this.$getCenter$();
  if($diffRotation_startCenter$$ && $endCenter$$ && ($diffRotation_startCenter$$.x != $endCenter$$.x || $diffRotation_startCenter$$.y != $endCenter$$.y || $endFill$$4_startLabelX_startLabelY_startRect$$1_startRotation$$ != $endLabelFill_endLabelX_endLabelY_endRect$$1_endRotation_startFill$$3$$)) {
    this.$setCenter$(new dvt.$Point$($diffRotation_startCenter$$.x, $diffRotation_startCenter$$.y)), $anim$$39$$.$_animator$.$addProp$(dvt.$Animator$.$TYPE_POINT$, this, this.$getCenter$, this.$setCenter$, new dvt.$Point$($endCenter$$.x, $endCenter$$.y))
  }
  this.$_label$ && $oldObj$$2$$.$getLabel$() ? ($endFill$$4_startLabelX_startLabelY_startRect$$1_startRotation$$ = $oldObj$$2$$.$getLabel$().$getX$(), $endLabelFill_endLabelX_endLabelY_endRect$$1_endRotation_startFill$$3$$ = this.$_label$.$getX$(), $endFill$$4_startLabelX_startLabelY_startRect$$1_startRotation$$ != $endLabelFill_endLabelX_endLabelY_endRect$$1_endRotation_startFill$$3$$ && (this.$_label$.$setX$($endFill$$4_startLabelX_startLabelY_startRect$$1_startRotation$$), $anim$$39$$.$_animator$.$addProp$(dvt.$Animator$.$TYPE_NUMBER$, 
  this.$_label$, this.$_label$.$getX$, this.$_label$.$setX$, $endLabelFill_endLabelX_endLabelY_endRect$$1_endRotation_startFill$$3$$)), $endFill$$4_startLabelX_startLabelY_startRect$$1_startRotation$$ = $oldObj$$2$$.$getLabel$().$getY$(), $endLabelFill_endLabelX_endLabelY_endRect$$1_endRotation_startFill$$3$$ = this.$_label$.$getY$(), $endFill$$4_startLabelX_startLabelY_startRect$$1_startRotation$$ != $endLabelFill_endLabelX_endLabelY_endRect$$1_endRotation_startFill$$3$$ && (this.$_label$.$setY$($endFill$$4_startLabelX_startLabelY_startRect$$1_startRotation$$), 
  $anim$$39$$.$_animator$.$addProp$(dvt.$Animator$.$TYPE_NUMBER$, this.$_label$, this.$_label$.$getY$, this.$_label$.$setY$, $endLabelFill_endLabelX_endLabelY_endRect$$1_endRotation_startFill$$3$$)), $oldObj$$2$$.$getLabel$().$setAlpha$(0)) : $oldObj$$2$$.$getLabel$() && $oldObj$$2$$.$getLabel$().$setAlpha$(0);
  $oldDisplayable$$2$$.$setAlpha$(0);
  $handler$$46$$.add($anim$$39$$, 1)
};
$JSCompiler_prototypeAlias$$.$animateDelete$ = function $$JSCompiler_prototypeAlias$$$$animateDelete$$($handler$$47$$) {
  var $anim$$40_fadeObjs$$ = [this.$Displayable$], $label$$82$$ = this.$getLabel$();
  $label$$82$$ && $anim$$40_fadeObjs$$.push($label$$82$$);
  $anim$$40_fadeObjs$$ = new dvt.$AnimFadeOut$(this.$_view$.$getCtx$(), $anim$$40_fadeObjs$$, this.$getDataLayer$().$getAnimationDuration$());
  $handler$$47$$.add($anim$$40_fadeObjs$$, 0)
};
$JSCompiler_prototypeAlias$$.$animateInsert$ = function $$JSCompiler_prototypeAlias$$$$animateInsert$$($handler$$48$$) {
  var $anim$$41_fadeObjs$$1$$ = [this.$Displayable$];
  this.$Displayable$.$setAlpha$(0);
  var $label$$83$$ = this.$getLabel$();
  $label$$83$$ && ($label$$83$$.$setAlpha$(0), $anim$$41_fadeObjs$$1$$.push($label$$83$$));
  $anim$$41_fadeObjs$$1$$ = new dvt.$AnimFadeIn$(this.$_view$.$getCtx$(), $anim$$41_fadeObjs$$1$$, this.$getDataLayer$().$getAnimationDuration$());
  $handler$$48$$.add($anim$$41_fadeObjs$$1$$, 2)
};
$JSCompiler_prototypeAlias$$.$processDefaultSelectionEffect$ = function $$JSCompiler_prototypeAlias$$$$processDefaultSelectionEffect$$($selected$$39$$) {
  this.$Displayable$.$setSelected$ && this.$Displayable$.$setSelected$($selected$$39$$)
};
$JSCompiler_prototypeAlias$$.$processDefaultFocusEffect$ = function $$JSCompiler_prototypeAlias$$$$processDefaultFocusEffect$$($focused$$4$$) {
  this.$processDefaultHoverEffect$($focused$$4$$)
};
$JSCompiler_prototypeAlias$$.$processDefaultHoverEffect$ = function $$JSCompiler_prototypeAlias$$$$processDefaultHoverEffect$$($hovered$$3$$) {
  $hovered$$3$$ ? this.$Displayable$.$showHoverEffect$ && this.$Displayable$.$showHoverEffect$() : this.$Displayable$.$hideHoverEffect$ && !this.$isShowingKeyboardFocusEffect$() && this.$Displayable$.$hideHoverEffect$()
};
function $JSCompiler_StaticMethods__callCustomRenderer$$($JSCompiler_StaticMethods__callCustomRenderer$self_JSCompiler_StaticMethods_updateRootElement$self$$inline_4711$$, $newRootElem_renderer$$1$$, $context$$379_state$$94$$, $prevState$$12$$) {
  if($JSCompiler_StaticMethods__callCustomRenderer$self_JSCompiler_StaticMethods_updateRootElement$self$$inline_4711$$.$Displayable$ instanceof $DvtCustomDataItem$$) {
    var $contextHandler$$1$$ = $JSCompiler_StaticMethods__callCustomRenderer$self_JSCompiler_StaticMethods_updateRootElement$self$$inline_4711$$.$_view$.$getOptions$()._contextHandler;
    $contextHandler$$1$$ && ($context$$379_state$$94$$ = $contextHandler$$1$$($JSCompiler_StaticMethods__callCustomRenderer$self_JSCompiler_StaticMethods_updateRootElement$self$$inline_4711$$.$Displayable$.$getElem$(), $JSCompiler_StaticMethods__callCustomRenderer$self_JSCompiler_StaticMethods_updateRootElement$self$$inline_4711$$.$Displayable$.$_dataItem$, $JSCompiler_StaticMethods__callCustomRenderer$self_JSCompiler_StaticMethods_updateRootElement$self$$inline_4711$$.$_data$, $context$$379_state$$94$$, 
    $prevState$$12$$), $newRootElem_renderer$$1$$ = $newRootElem_renderer$$1$$($context$$379_state$$94$$), $JSCompiler_StaticMethods__callCustomRenderer$self_JSCompiler_StaticMethods_updateRootElement$self$$inline_4711$$ = $JSCompiler_StaticMethods__callCustomRenderer$self_JSCompiler_StaticMethods_updateRootElement$self$$inline_4711$$.$Displayable$, $JSCompiler_StaticMethods__callCustomRenderer$self_JSCompiler_StaticMethods_updateRootElement$self$$inline_4711$$.$_dataItem$ !== $newRootElem_renderer$$1$$ && 
    ($JSCompiler_StaticMethods__callCustomRenderer$self_JSCompiler_StaticMethods_updateRootElement$self$$inline_4711$$.$_dataItem$ && ($JSCompiler_StaticMethods__callCustomRenderer$self_JSCompiler_StaticMethods_updateRootElement$self$$inline_4711$$.$_dataItem$ instanceof dvt.$BaseComponent$ ? $JSCompiler_StaticMethods__callCustomRenderer$self_JSCompiler_StaticMethods_updateRootElement$self$$inline_4711$$.removeChild($JSCompiler_StaticMethods__callCustomRenderer$self_JSCompiler_StaticMethods_updateRootElement$self$$inline_4711$$.$_dataItem$) : 
    $JSCompiler_StaticMethods__callCustomRenderer$self_JSCompiler_StaticMethods_updateRootElement$self$$inline_4711$$.$getElem$().removeChild($JSCompiler_StaticMethods__callCustomRenderer$self_JSCompiler_StaticMethods_updateRootElement$self$$inline_4711$$.$_dataItem$)), $newRootElem_renderer$$1$$ instanceof dvt.$BaseComponent$ ? $JSCompiler_StaticMethods__callCustomRenderer$self_JSCompiler_StaticMethods_updateRootElement$self$$inline_4711$$.$addChild$($newRootElem_renderer$$1$$) : $JSCompiler_StaticMethods__callCustomRenderer$self_JSCompiler_StaticMethods_updateRootElement$self$$inline_4711$$.$getElem$().appendChild($newRootElem_renderer$$1$$), 
    $JSCompiler_StaticMethods__callCustomRenderer$self_JSCompiler_StaticMethods_updateRootElement$self$$inline_4711$$.$_dataItem$ = $newRootElem_renderer$$1$$))
  }
}
$JSCompiler_prototypeAlias$$.$_getState$ = function $$JSCompiler_prototypeAlias$$$$_getState$$() {
  return{hovered:this.$_isShowingHoverEffect$, selected:this.$isSelected$(), focused:this.$isShowingKeyboardFocusEffect$()}
};
function $DvtMapAreaPeer$$($data$$100$$, $dataLayer$$6$$, $displayable$$71$$, $label$$84$$) {
  this.Init($data$$100$$, $dataLayer$$6$$, $displayable$$71$$, $label$$84$$)
}
dvt.$Obj$.$createSubclass$($DvtMapAreaPeer$$, $DvtMapObjPeer$$);
$JSCompiler_prototypeAlias$$ = $DvtMapAreaPeer$$.prototype;
$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($data$$101$$, $dataLayer$$7$$, $displayable$$72$$, $label$$85$$) {
  $DvtMapAreaPeer$$.$superclass$.Init.call(this, $data$$101$$, $dataLayer$$7$$, $displayable$$72$$, $label$$85$$)
};
$JSCompiler_prototypeAlias$$.$setSelected$ = function $$JSCompiler_prototypeAlias$$$$setSelected$$($selected$$40$$) {
  this.$isSelectable$() && ($selected$$40$$ && !this.$_isShowingHoverEffect$ && this.$_dataAreaLayer$.$addChild$(this.$Displayable$), $DvtMapAreaPeer$$.$superclass$.$setSelected$.call(this, $selected$$40$$))
};
$JSCompiler_prototypeAlias$$.$showHoverEffect$ = function $$JSCompiler_prototypeAlias$$$$showHoverEffect$$() {
  this.$_dataAreaLayer$.$addChild$(this.$Displayable$);
  $DvtMapAreaPeer$$.$superclass$.$showHoverEffect$.call(this)
};
$JSCompiler_prototypeAlias$$.$hideHoverEffect$ = function $$JSCompiler_prototypeAlias$$$$hideHoverEffect$$() {
  this.$isSelected$() ? this.$_dataAreaLayer$.$addChild$(this.$Displayable$) : this.$_dataAreaLayer$.$addChildAt$(this.$Displayable$, 0);
  $DvtMapAreaPeer$$.$superclass$.$hideHoverEffect$.call(this)
};
$JSCompiler_prototypeAlias$$.$isDrilled$ = function $$JSCompiler_prototypeAlias$$$$isDrilled$$() {
  return this.$Displayable$.$isDrilled$()
};
$JSCompiler_prototypeAlias$$.$setDrilled$ = function $$JSCompiler_prototypeAlias$$$$setDrilled$$($drilled$$3$$) {
  $drilled$$3$$ ? this.$_dataAreaLayer$.$addChild$(this.$Displayable$) : this.$_dataAreaLayer$.$addChildAt$(this.$Displayable$, 0);
  this.$Displayable$.$setDrilled$($drilled$$3$$)
};
$JSCompiler_prototypeAlias$$.$HandleZoomEvent$ = function $$JSCompiler_prototypeAlias$$$$HandleZoomEvent$$($pzcMatrix$$8$$) {
  $DvtMapAreaPeer$$.$superclass$.$HandleZoomEvent$.call(this, $pzcMatrix$$8$$);
  this.$Displayable$.getParent() && ($JSCompiler_StaticMethods_handleZoomEvent$$(this.$Displayable$, $pzcMatrix$$8$$), this.$isDrilled$() || this.$positionLabel$($pzcMatrix$$8$$))
};
$JSCompiler_prototypeAlias$$.$positionLabel$ = function $$JSCompiler_prototypeAlias$$$$positionLabel$$($pzcMatrix$$9$$) {
  this.$getLabel$() && this.$getLabel$().update($pzcMatrix$$9$$)
};
$JSCompiler_prototypeAlias$$.$GetNavigables$ = function $$JSCompiler_prototypeAlias$$$$GetNavigables$$() {
  return $JSCompiler_StaticMethods_getNavigableAreas$$(this.$getDataLayer$().$_tmap$)
};
$JSCompiler_prototypeAlias$$.$animateUpdate$ = function $$JSCompiler_prototypeAlias$$$$animateUpdate$$($handler$$49$$, $oldObj$$3$$) {
  $DvtMapAreaPeer$$.$superclass$.$animateUpdate$.call(this, $handler$$49$$, $oldObj$$3$$);
  this.$getDataLayer$().$_parentLayer$.$_renderArea$[this.$getLocation$()] = $JSCompiler_alias_FALSE$$
};
$JSCompiler_prototypeAlias$$.$__recenter$ = $JSCompiler_emptyFn$$();
function $DvtMapArea$$($context$$380$$, $dvtShape$$, $areaName$$1$$, $bSupportsVectorEffects$$4$$) {
  this.Init($context$$380$$, $dvtShape$$, $areaName$$1$$, $bSupportsVectorEffects$$4$$)
}
dvt.$Obj$.$createSubclass$($DvtMapArea$$, dvt.$Container$);
$JSCompiler_prototypeAlias$$ = $DvtMapArea$$.prototype;
$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($context$$381_stroke$$94$$, $dvtShape$$1$$, $areaName$$2$$, $bSupportsVectorEffects$$5$$) {
  $DvtMapArea$$.$superclass$.Init.call(this, $context$$381_stroke$$94$$);
  this.$_isSelected$ = this.$_bSelectable$ = $JSCompiler_alias_FALSE$$;
  this.$_areaName$ = $areaName$$2$$;
  this.$_shape$ = $dvtShape$$1$$;
  this.$addChild$(this.$_shape$);
  this.$_bSupportsVectorEffects$ = $bSupportsVectorEffects$$5$$;
  if($context$$381_stroke$$94$$ = $dvtShape$$1$$.$getStroke$()) {
    this.$_areaStrokeWidth$ = $context$$381_stroke$$94$$.getWidth()
  }
};
$JSCompiler_prototypeAlias$$.$getTooltip$ = $JSCompiler_get$$("$_tooltip$");
$JSCompiler_prototypeAlias$$.$setTooltip$ = $JSCompiler_set$$("$_tooltip$");
$JSCompiler_prototypeAlias$$.$getStroke$ = function $$JSCompiler_prototypeAlias$$$$getStroke$$() {
  return this.$_shape$ instanceof dvt.$Shape$ ? this.$_shape$.$getStroke$() : $JSCompiler_alias_NULL$$
};
$JSCompiler_prototypeAlias$$.$setStroke$ = function $$JSCompiler_prototypeAlias$$$$setStroke$$($stroke$$95$$) {
  this.$_shape$ instanceof dvt.$Shape$ && this.$_shape$.$setStroke$($stroke$$95$$)
};
$JSCompiler_prototypeAlias$$.$setFill$ = function $$JSCompiler_prototypeAlias$$$$setFill$$($fill$$60$$) {
  this.$_shape$ instanceof dvt.$Shape$ && this.$_shape$.$setFill$($fill$$60$$)
};
$JSCompiler_prototypeAlias$$.$getFill$ = function $$JSCompiler_prototypeAlias$$$$getFill$$() {
  return this.$_shape$ instanceof dvt.$Shape$ ? this.$_shape$.$getFill$() : $JSCompiler_alias_NULL$$
};
$JSCompiler_prototypeAlias$$.$getCmds$ = function $$JSCompiler_prototypeAlias$$$$getCmds$$() {
  return this.$_shape$ instanceof dvt.$Path$ ? this.$_shape$.$getCmds$() : $JSCompiler_alias_NULL$$
};
$JSCompiler_prototypeAlias$$.$setCmds$ = function $$JSCompiler_prototypeAlias$$$$setCmds$$($cmds$$23$$) {
  this.$_shape$ instanceof dvt.$Path$ && this.$_shape$.$setCmds$($cmds$$23$$)
};
$JSCompiler_prototypeAlias$$.$setSrc$ = function $$JSCompiler_prototypeAlias$$$$setSrc$$($src$$9$$) {
  this.$_shape$ instanceof dvt.$Image$ && this.$_shape$.$setSrc$($src$$9$$)
};
$JSCompiler_prototypeAlias$$.$getDropSiteFeedback$ = function $$JSCompiler_prototypeAlias$$$$getDropSiteFeedback$$() {
  return this.$_shape$.$copyShape$()
};
$JSCompiler_prototypeAlias$$.contains = function $$JSCompiler_prototypeAlias$$$contains$($x$$189$$, $y$$163$$) {
  var $dims$$55$$ = this.$getDimensions$();
  return $x$$189$$ >= $dims$$55$$.x && $x$$189$$ <= $dims$$55$$.x + $dims$$55$$.$w$ && $y$$163$$ >= $dims$$55$$.y && $y$$163$$ <= $dims$$55$$.y + $dims$$55$$.$h$
};
$JSCompiler_prototypeAlias$$.$HandleZoomEvent$ = function $$JSCompiler_prototypeAlias$$$$HandleZoomEvent$$($pzcMatrix$$10$$) {
  if(!this.$_bSupportsVectorEffects$ && this.$_shape$ && this.$_areaStrokeWidth$) {
    var $zoomStroke$$ = this.$_shape$.$getStroke$().$clone$();
    $zoomStroke$$.$setWidth$(this.$_areaStrokeWidth$ / $pzcMatrix$$10$$.$_a$);
    this.$_shape$.$setStroke$($zoomStroke$$)
  }
};
function $DvtMapLayer$$($tmap$$1$$, $layerName$$22$$, $eventHandler$$) {
  this.Init($tmap$$1$$, $layerName$$22$$, $eventHandler$$)
}
dvt.$Obj$.$createSubclass$($DvtMapLayer$$, dvt.$Obj$);
$JSCompiler_prototypeAlias$$ = $DvtMapLayer$$.prototype;
$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($tmap$$2$$, $layerName$$23$$, $eventHandler$$1$$) {
  this.$_tmap$ = $tmap$$2$$;
  this.$LayerName$ = $layerName$$23$$;
  this.$EventHandler$ = $eventHandler$$1$$;
  this.$DataLayers$ = {};
  this.$PzcMatrix$ = new dvt.$Matrix$
};
$JSCompiler_prototypeAlias$$.$PreDataLayerUpdate$ = $JSCompiler_emptyFn$$();
$JSCompiler_prototypeAlias$$.$PostDataLayerUpdate$ = $JSCompiler_emptyFn$$();
$JSCompiler_prototypeAlias$$.$updateDataLayer$ = function $$JSCompiler_prototypeAlias$$$$updateDataLayer$$($dataLayer$$9$$, $pzcMatrix$$11$$) {
  this.$_animation$ && this.$_animation$.stop($JSCompiler_alias_TRUE$$);
  this.$PzcMatrix$ = $pzcMatrix$$11$$;
  this.$_oldDataLayer$ = this.$getDataLayer$($dataLayer$$9$$.$getClientId$());
  this.$DataLayers$[$dataLayer$$9$$.$getClientId$()] = $dataLayer$$9$$;
  $dataLayer$$9$$.$render$(this.$PzcMatrix$);
  $dataLayer$$9$$.$HandleZoomEvent$(new dvt.$ZoomEvent$(dvt.$ZoomEvent$.$SUBTYPE_ZOOMED$), this.$PzcMatrix$);
  if(this.$_oldDataLayer$) {
    var $anim$$42_oldContainers$$ = $dataLayer$$9$$.$getAnimation$(), $animDur$$ = $dataLayer$$9$$.$getAnimationDuration$();
    if("auto" == $anim$$42_oldContainers$$) {
      var $anim2_animHandler$$1_i$$592$$ = new dvt.$DataAnimationHandler$(this.$_tmap$.$getCtx$());
      $anim2_animHandler$$1_i$$592$$.$constructAnimation$(this.$_oldDataLayer$.$_dataObjs$.concat(this.$_oldDataLayer$.$_areaObjs$), $dataLayer$$9$$.$_dataObjs$.concat($dataLayer$$9$$.$_areaObjs$));
      this.$_animation$ = $anim2_animHandler$$1_i$$592$$.$getAnimation$()
    }else {
      if(dvt.$BlackBoxAnimationHandler$.isSupported($anim$$42_oldContainers$$)) {
        this.$_removeAnimRect$ = $JSCompiler_alias_TRUE$$;
        for(var $anim1_bounds1$$ = new dvt.$Rectangle$(0, 0, this.$_tmap$.getWidth(), this.$_tmap$.getHeight()), $bounds2_oldNonScaledContainers$$ = $JSCompiler_StaticMethods_getNonScaledContainers$$(this.$_oldDataLayer$), $anim2_animHandler$$1_i$$592$$ = 0;$anim2_animHandler$$1_i$$592$$ < $bounds2_oldNonScaledContainers$$.length;$anim2_animHandler$$1_i$$592$$++) {
          var $rect$$38$$ = new dvt.$Rect$(this.$_tmap$.$getCtx$(), 0, 0, this.$_tmap$.getWidth(), this.$_tmap$.getHeight());
          $rect$$38$$.$setFill$($JSCompiler_alias_NULL$$);
          $bounds2_oldNonScaledContainers$$[$anim2_animHandler$$1_i$$592$$].$addChild$($rect$$38$$)
        }
        for(var $newNonScaledContainers_oldScaledContainers$$ = $JSCompiler_StaticMethods_getNonScaledContainers$$($dataLayer$$9$$), $anim2_animHandler$$1_i$$592$$ = 0;$anim2_animHandler$$1_i$$592$$ < $newNonScaledContainers_oldScaledContainers$$.length;$anim2_animHandler$$1_i$$592$$++) {
          $rect$$38$$ = new dvt.$Rect$(this.$_tmap$.$getCtx$(), 0, 0, this.$_tmap$.getWidth(), this.$_tmap$.getHeight()), $rect$$38$$.$setFill$($JSCompiler_alias_NULL$$), $newNonScaledContainers_oldScaledContainers$$[$anim2_animHandler$$1_i$$592$$].$addChild$($rect$$38$$)
        }
        $anim1_bounds1$$ = dvt.$BlackBoxAnimationHandler$.$getCombinedAnimation$(this.$_tmap$.$getCtx$(), $anim$$42_oldContainers$$, $bounds2_oldNonScaledContainers$$, $newNonScaledContainers_oldScaledContainers$$, $anim1_bounds1$$, $animDur$$);
        $bounds2_oldNonScaledContainers$$ = new dvt.$Rectangle$(0, 0, this.$_tmap$.getWidth() / this.$PzcMatrix$.$_a$, this.$_tmap$.getHeight() / this.$PzcMatrix$.$_a$);
        $newNonScaledContainers_oldScaledContainers$$ = [this.$_oldDataLayer$.$_dataAreaLayer$];
        for($anim2_animHandler$$1_i$$592$$ = 0;$anim2_animHandler$$1_i$$592$$ < $newNonScaledContainers_oldScaledContainers$$.length;$anim2_animHandler$$1_i$$592$$++) {
          $rect$$38$$ = new dvt.$Rect$(this.$_tmap$.$getCtx$(), 0, 0, this.$_tmap$.getWidth() / this.$PzcMatrix$.$_a$, this.$_tmap$.getHeight() / this.$PzcMatrix$.$_a$), $rect$$38$$.$setFill$($JSCompiler_alias_NULL$$), $newNonScaledContainers_oldScaledContainers$$[$anim2_animHandler$$1_i$$592$$].$addChild$($rect$$38$$)
        }
        for(var $newScaledContainers$$ = [$dataLayer$$9$$.$_dataAreaLayer$], $anim2_animHandler$$1_i$$592$$ = 0;$anim2_animHandler$$1_i$$592$$ < $newScaledContainers$$.length;$anim2_animHandler$$1_i$$592$$++) {
          $rect$$38$$ = new dvt.$Rect$(this.$_tmap$.$getCtx$(), 0, 0, this.$_tmap$.getWidth() / this.$PzcMatrix$.$_a$, this.$_tmap$.getHeight() / this.$PzcMatrix$.$_a$), $rect$$38$$.$setFill$($JSCompiler_alias_NULL$$), $newScaledContainers$$[$anim2_animHandler$$1_i$$592$$].$addChild$($rect$$38$$)
        }
        $anim2_animHandler$$1_i$$592$$ = dvt.$BlackBoxAnimationHandler$.$getCombinedAnimation$(this.$_tmap$.$getCtx$(), $anim$$42_oldContainers$$, $newNonScaledContainers_oldScaledContainers$$, $newScaledContainers$$, $bounds2_oldNonScaledContainers$$, $animDur$$);
        this.$_animation$ = new dvt.$ParallelPlayable$(this.$_tmap$.$getCtx$(), [$anim1_bounds1$$, $anim2_animHandler$$1_i$$592$$])
      }else {
        $anim$$42_oldContainers$$ = [this.$_oldDataLayer$.$_dataAreaLayer$, this.$_oldDataLayer$.$_dataPointLayer$, this.$_oldDataLayer$.$_dataLabelLayer$];
        for($anim2_animHandler$$1_i$$592$$ = 0;$anim2_animHandler$$1_i$$592$$ < $anim$$42_oldContainers$$.length;$anim2_animHandler$$1_i$$592$$++) {
          $anim$$42_oldContainers$$[$anim2_animHandler$$1_i$$592$$].getParent().removeChild($anim$$42_oldContainers$$[$anim2_animHandler$$1_i$$592$$])
        }
      }
    }
    this.$PreDataLayerUpdate$();
    if(this.$_animation$) {
      this.$EventHandler$.$removeListeners$(this.$_callbackObj$);
      var $thisRef$$41$$ = this;
      this.$_animation$.$setOnEnd$(function() {
        $thisRef$$41$$.$OnAnimationEnd$($dataLayer$$9$$)
      }, this);
      this.$_animation$.play()
    }
  }else {
    this.$PostDataLayerUpdate$(), $JSCompiler_StaticMethods_OnUpdateLayerEnd$$(this.$_tmap$)
  }
};
$JSCompiler_prototypeAlias$$.$getDataLayer$ = function $$JSCompiler_prototypeAlias$$$$getDataLayer$$($clientId$$3$$) {
  return this.$DataLayers$ ? this.$DataLayers$[$clientId$$3$$] : $JSCompiler_alias_NULL$$
};
$JSCompiler_prototypeAlias$$.$render$ = function $$JSCompiler_prototypeAlias$$$$render$$($pzcMatrix$$12$$) {
  this.$PzcMatrix$ = $pzcMatrix$$12$$;
  for(var $id$$190$$ in this.$DataLayers$) {
    this.$DataLayers$[$id$$190$$].$render$($pzcMatrix$$12$$)
  }
};
$JSCompiler_prototypeAlias$$.reset = function $$JSCompiler_prototypeAlias$$$reset$($fadeOutContainer$$, $doNotResetAreas$$) {
  for(var $id$$191$$ in this.$DataLayers$) {
    this.$DataLayers$[$id$$191$$].reset($fadeOutContainer$$, $doNotResetAreas$$)
  }
};
$JSCompiler_prototypeAlias$$.$HandleZoomEvent$ = function $$JSCompiler_prototypeAlias$$$$HandleZoomEvent$$($event$$490$$, $pzcMatrix$$13$$) {
  this.$PzcMatrix$ = $pzcMatrix$$13$$;
  for(var $id$$192$$ in this.$DataLayers$) {
    this.$DataLayers$[$id$$192$$].$HandleZoomEvent$($event$$490$$, $pzcMatrix$$13$$)
  }
};
$JSCompiler_prototypeAlias$$.$HandlePanEvent$ = function $$JSCompiler_prototypeAlias$$$$HandlePanEvent$$($pzcMatrix$$14$$) {
  this.$PzcMatrix$ = $pzcMatrix$$14$$;
  for(var $id$$193$$ in this.$DataLayers$) {
    this.$DataLayers$[$id$$193$$].$HandlePanEvent$($pzcMatrix$$14$$)
  }
};
$JSCompiler_prototypeAlias$$.$OnAnimationEnd$ = function $$JSCompiler_prototypeAlias$$$$OnAnimationEnd$$($dataLayer$$10_newScaledContainers$$1$$) {
  if(this.$_oldDataLayer$) {
    for(var $newNonScaledContainers$$1_oldContainers$$1$$ = [this.$_oldDataLayer$.$_dataAreaLayer$, this.$_oldDataLayer$.$_dataPointLayer$, this.$_oldDataLayer$.$_dataLabelLayer$], $i$$593$$ = 0;$i$$593$$ < $newNonScaledContainers$$1_oldContainers$$1$$.length;$i$$593$$++) {
      var $parent$$75$$ = $newNonScaledContainers$$1_oldContainers$$1$$[$i$$593$$].getParent();
      $parent$$75$$ && $parent$$75$$.removeChild($newNonScaledContainers$$1_oldContainers$$1$$[$i$$593$$])
    }
  }
  if(this.$_removeAnimRect$) {
    this.$_removeAnimRect$ = $JSCompiler_alias_FALSE$$;
    $newNonScaledContainers$$1_oldContainers$$1$$ = $JSCompiler_StaticMethods_getNonScaledContainers$$($dataLayer$$10_newScaledContainers$$1$$);
    for($i$$593$$ = 0;$i$$593$$ < $newNonScaledContainers$$1_oldContainers$$1$$.length;$i$$593$$++) {
      $newNonScaledContainers$$1_oldContainers$$1$$[$i$$593$$].$removeChildAt$($newNonScaledContainers$$1_oldContainers$$1$$[$i$$593$$].$getNumChildren$() - 1)
    }
    $dataLayer$$10_newScaledContainers$$1$$ = [$dataLayer$$10_newScaledContainers$$1$$.$_dataAreaLayer$];
    for($i$$593$$ = 0;$i$$593$$ < $dataLayer$$10_newScaledContainers$$1$$.length;$i$$593$$++) {
      $dataLayer$$10_newScaledContainers$$1$$[$i$$593$$].$removeChildAt$($dataLayer$$10_newScaledContainers$$1$$[$i$$593$$].$getNumChildren$() - 1)
    }
  }
  this.$PostDataLayerUpdate$();
  $JSCompiler_StaticMethods_OnUpdateLayerEnd$$(this.$_tmap$);
  this.$_animation$ = $JSCompiler_alias_NULL$$;
  this.$EventHandler$.$addListeners$(this.$_callbackObj$)
};
function $DvtMapAreaLayer$$($tmap$$3$$, $layerName$$24$$, $labelDisplay$$3$$, $labelType$$2$$, $eventHandler$$2$$) {
  this.Init($tmap$$3$$, $layerName$$24$$, $labelDisplay$$3$$, $labelType$$2$$, $eventHandler$$2$$)
}
dvt.$Obj$.$createSubclass$($DvtMapAreaLayer$$, $DvtMapLayer$$);
$JSCompiler_prototypeAlias$$ = $DvtMapAreaLayer$$.prototype;
$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($tmap$$4$$, $layerName$$25$$, $labelDisplay$$4$$, $labelType$$3$$, $eventHandler$$3$$) {
  $DvtMapAreaLayer$$.$superclass$.Init.call(this, $tmap$$4$$, $layerName$$25$$, $eventHandler$$3$$);
  this.$_labelDisplay$ = $labelDisplay$$4$$;
  this.$_labelType$ = $labelType$$3$$;
  this.$_areaLabels$ = {};
  this.$Areas$ = {};
  this.$AreaShapes$ = {};
  this.$_labelInfo$ = this.$AreaNames$ = $JSCompiler_alias_NULL$$;
  this.$_disclosed$ = [];
  this.$_renderArea$ = {};
  this.$_renderLabel$ = {};
  this.$_renderedLabels$ = {};
  this.$AreaContainer$ = new dvt.$Container$(this.$_tmap$.$getCtx$());
  this.$LabelContainer$ = new dvt.$Container$(this.$_tmap$.$getCtx$());
  this.$_tmap$.$_areaLayers$.$addChildAt$(this.$AreaContainer$, 0);
  this.$_tmap$.$_labelLayers$.$addChildAt$(this.$LabelContainer$, 0);
  this.$_dropTarget$ = new $DvtThematicMapDropTarget$$(this, this.$_tmap$.$_mapName$)
};
$JSCompiler_prototypeAlias$$.$setAnimation$ = $JSCompiler_set$$("$_animType$");
$JSCompiler_prototypeAlias$$.$getAnimation$ = $JSCompiler_get$$("$_animType$");
$JSCompiler_prototypeAlias$$.$setAnimationDuration$ = $JSCompiler_set$$("$_animDur$");
$JSCompiler_prototypeAlias$$.$getAnimationDuration$ = $JSCompiler_get$$("$_animDur$");
$JSCompiler_prototypeAlias$$.$getDropTarget$ = $JSCompiler_get$$("$_dropTarget$");
function $JSCompiler_StaticMethods_setAreaNames$$($JSCompiler_StaticMethods_setAreaNames$self$$, $values$$16$$) {
  $JSCompiler_StaticMethods_setAreaNames$self$$.$AreaNames$ = $values$$16$$;
  for(var $area$$4$$ in $JSCompiler_StaticMethods_setAreaNames$self$$.$AreaNames$) {
    $JSCompiler_StaticMethods_setAreaNames$self$$.$_renderArea$[$area$$4$$] = $JSCompiler_alias_TRUE$$, $JSCompiler_StaticMethods_setAreaNames$self$$.$_renderLabel$[$area$$4$$] = $JSCompiler_alias_TRUE$$
  }
}
$JSCompiler_prototypeAlias$$.$getLabelInfoForArea$ = function $$JSCompiler_prototypeAlias$$$$getLabelInfoForArea$$($area$$7$$) {
  return!this.$_labelInfo$ ? $JSCompiler_alias_NULL$$ : this.$_labelInfo$[$area$$7$$]
};
function $JSCompiler_StaticMethods_getChildrenForArea$$($JSCompiler_StaticMethods_getChildrenForArea$self$$, $area$$8$$) {
  return $JSCompiler_StaticMethods_getChildrenForArea$self$$.$_children$[$area$$8$$] ? $JSCompiler_StaticMethods_getChildrenForArea$self$$.$_children$[$area$$8$$].split(",") : []
}
$JSCompiler_prototypeAlias$$.$getLabelDisplay$ = $JSCompiler_get$$("$_labelDisplay$");
$JSCompiler_prototypeAlias$$.$getLayerDim$ = function $$JSCompiler_prototypeAlias$$$$getLayerDim$$() {
  if(!this.$_layerDim$) {
    if(this.$_isolatedArea$) {
      this.$_layerDim$ = dvt.$PathUtils$.$getDimensions$(dvt.$PathUtils$.$createPathArray$($DvtBaseMapManager$$.$getPathForArea$(this.$_tmap$.$_mapName$, this.$LayerName$, this.$_isolatedArea$)))
    }else {
      if("world" != this.$_tmap$.$_mapName$ && "worldRegions" != this.$_tmap$.$_mapName$ && (this.$_layerDim$ = $DvtBaseMapManager$$.$getBaseMapDim$(this.$_tmap$.$_mapName$, this.$LayerName$)), !this.$_layerDim$) {
        var $dim$$74$$ = this.$AreaContainer$.$getDimensions$().$getUnion$(this.$_tmap$.$_dataAreaLayers$.$getDimensions$());
        0 < $dim$$74$$.$w$ && 0 < $dim$$74$$.$h$ && (this.$_layerDim$ = $dim$$74$$)
      }
    }
  }
  return this.$_layerDim$
};
function $JSCompiler_StaticMethods__createAreaAndLabel$$($JSCompiler_StaticMethods__createAreaAndLabel$self$$, $area$$12$$, $bForceUpdateArea_label$$86_labelText$$1_mapArea$$) {
  var $areaDim_areaShape$$ = $JSCompiler_StaticMethods__createAreaAndLabel$self$$.$AreaShapes$[$area$$12$$];
  if($areaDim_areaShape$$ && (($bForceUpdateArea_label$$86_labelText$$1_mapArea$$ || !$JSCompiler_StaticMethods__createAreaAndLabel$self$$.$Areas$[$area$$12$$]) && $JSCompiler_StaticMethods__createAreaAndLabel$self$$.$updateAreaShape$($area$$12$$), $JSCompiler_StaticMethods__createAreaAndLabel$self$$.$Areas$[$area$$12$$] || ($bForceUpdateArea_label$$86_labelText$$1_mapArea$$ = new $DvtMapArea$$($JSCompiler_StaticMethods__createAreaAndLabel$self$$.$_tmap$.$getCtx$(), $areaDim_areaShape$$, $area$$12$$, 
  $JSCompiler_StaticMethods__createAreaAndLabel$self$$.$_tmap$.$_bSupportsVectorEffects$), $JSCompiler_StaticMethods__createAreaAndLabel$self$$.$Areas$[$area$$12$$] = $bForceUpdateArea_label$$86_labelText$$1_mapArea$$, $JSCompiler_StaticMethods__createAreaAndLabel$self$$.$EventHandler$.$associate$($areaDim_areaShape$$, $bForceUpdateArea_label$$86_labelText$$1_mapArea$$), $bForceUpdateArea_label$$86_labelText$$1_mapArea$$.$setTooltip$($JSCompiler_StaticMethods__createAreaAndLabel$self$$.$AreaNames$ && 
  $JSCompiler_StaticMethods__createAreaAndLabel$self$$.$AreaNames$[$area$$12$$] ? $JSCompiler_StaticMethods__createAreaAndLabel$self$$.$AreaNames$[$area$$12$$][1] : $JSCompiler_alias_NULL$$)), $JSCompiler_StaticMethods__createAreaAndLabel$self$$.$_renderLabel$[$area$$12$$] && ($bForceUpdateArea_label$$86_labelText$$1_mapArea$$ = $JSCompiler_StaticMethods__createAreaAndLabel$self$$.$_areaLabels$[$area$$12$$], !$bForceUpdateArea_label$$86_labelText$$1_mapArea$$ && ("off" != $JSCompiler_StaticMethods__createAreaAndLabel$self$$.$_labelDisplay$ && 
  $JSCompiler_StaticMethods__createAreaAndLabel$self$$.$AreaNames$) && ($bForceUpdateArea_label$$86_labelText$$1_mapArea$$ = "short" == $JSCompiler_StaticMethods__createAreaAndLabel$self$$.$_labelType$ ? $JSCompiler_StaticMethods__createAreaAndLabel$self$$.$AreaNames$[$area$$12$$][0] : $JSCompiler_StaticMethods__createAreaAndLabel$self$$.$AreaNames$[$area$$12$$][1])))) {
    $JSCompiler_StaticMethods__createAreaAndLabel$self$$.$_labelInfo$ && $JSCompiler_StaticMethods__createAreaAndLabel$self$$.$_labelInfo$[$area$$12$$] ? $bForceUpdateArea_label$$86_labelText$$1_mapArea$$ = new $DvtMapLabel$$($JSCompiler_StaticMethods__createAreaAndLabel$self$$.$_tmap$.$getCtx$(), $bForceUpdateArea_label$$86_labelText$$1_mapArea$$, $JSCompiler_StaticMethods__createAreaAndLabel$self$$.$_labelInfo$[$area$$12$$], $JSCompiler_StaticMethods__createAreaAndLabel$self$$.$_labelDisplay$, 
    $JSCompiler_StaticMethods__createAreaAndLabel$self$$.$LabelContainer$, $JSCompiler_StaticMethods__createAreaAndLabel$self$$.$_tmap$.$_bSupportsVectorEffects$) : ($areaDim_areaShape$$ = dvt.$DisplayableUtils$.$getDimensionsForced$($JSCompiler_StaticMethods__createAreaAndLabel$self$$.$_tmap$.$getCtx$(), $areaDim_areaShape$$), $bForceUpdateArea_label$$86_labelText$$1_mapArea$$ = new $DvtMapLabel$$($JSCompiler_StaticMethods__createAreaAndLabel$self$$.$_tmap$.$getCtx$(), $bForceUpdateArea_label$$86_labelText$$1_mapArea$$, 
    [[$areaDim_areaShape$$.x, $areaDim_areaShape$$.y, $areaDim_areaShape$$.$w$, $areaDim_areaShape$$.$h$]], $JSCompiler_StaticMethods__createAreaAndLabel$self$$.$_labelDisplay$, $JSCompiler_StaticMethods__createAreaAndLabel$self$$.$LabelContainer$, $JSCompiler_StaticMethods__createAreaAndLabel$self$$.$_tmap$.$_bSupportsVectorEffects$)), $JSCompiler_StaticMethods__createAreaAndLabel$self$$.$_areaLabels$[$area$$12$$] = $bForceUpdateArea_label$$86_labelText$$1_mapArea$$, $JSCompiler_StaticMethods__createAreaAndLabel$self$$.$_layerCSSStyle$ && 
    $bForceUpdateArea_label$$86_labelText$$1_mapArea$$.$setCSSStyle$($JSCompiler_StaticMethods__createAreaAndLabel$self$$.$_layerCSSStyle$)
  }
}
function $JSCompiler_StaticMethods__addAreaAndLabel$$($JSCompiler_StaticMethods__addAreaAndLabel$self$$, $area$$13$$, $fadeInObjs$$2$$) {
  if($JSCompiler_StaticMethods__addAreaAndLabel$self$$.$AreaShapes$[$area$$13$$]) {
    $JSCompiler_StaticMethods__addAreaAndLabel$self$$.$AreaContainer$.$addChild$($JSCompiler_StaticMethods__addAreaAndLabel$self$$.$Areas$[$area$$13$$]);
    var $label$$87$$ = $JSCompiler_StaticMethods__addAreaAndLabel$self$$.$_areaLabels$[$area$$13$$];
    $label$$87$$ && ($JSCompiler_StaticMethods__addAreaAndLabel$self$$.$_renderLabel$[$area$$13$$] ? $label$$87$$.update($JSCompiler_StaticMethods__addAreaAndLabel$self$$.$PzcMatrix$) : $label$$87$$.reset(), $JSCompiler_StaticMethods__addAreaAndLabel$self$$.$_renderedLabels$[$area$$13$$] = $JSCompiler_StaticMethods__addAreaAndLabel$self$$.$_renderLabel$[$area$$13$$]);
    $fadeInObjs$$2$$ && ($fadeInObjs$$2$$.push($JSCompiler_StaticMethods__addAreaAndLabel$self$$.$Areas$[$area$$13$$]), $label$$87$$ && ($fadeInObjs$$2$$.push($label$$87$$), $fadeInObjs$$2$$.push($label$$87$$.$_leaderLine$)))
  }
}
$JSCompiler_prototypeAlias$$.$updateAreaShape$ = function $$JSCompiler_prototypeAlias$$$$updateAreaShape$$($area$$14$$) {
  if(!this.$_paths$ || this.$_bUpdateShapesForRender$) {
    this.$_bUpdateShapesForRender$ = $JSCompiler_alias_FALSE$$;
    var $cmd$$10_layerDim$$;
    this.$_paths$ = ($cmd$$10_layerDim$$ = "world" == this.$_tmap$.$_mapName$ || "worldRegions" == this.$_tmap$.$_mapName$ ? $DvtBaseMapManager$$.$getBaseMapDim$(this.$_tmap$.$_mapName$, this.$LayerName$) : this.$getLayerDim$()) ? $DvtBaseMapManager$$.$simplifyAreaPaths$($DvtBaseMapManager$$.$getAreaPaths$(this.$_tmap$.$_mapName$, this.$LayerName$), $cmd$$10_layerDim$$.$w$, $cmd$$10_layerDim$$.$h$, this.$_tmap$.getWidth(), this.$_tmap$.getHeight(), this.$_tmap$.$_zooming$ ? this.$_tmap$.$_maxZoomFactor$ : 
    1) : $DvtBaseMapManager$$.$getAreaPaths$(this.$_tmap$.$_mapName$, this.$LayerName$)
  }
  $cmd$$10_layerDim$$ = this.$_paths$[$area$$14$$];
  this.$AreaShapes$[$area$$14$$] && $cmd$$10_layerDim$$ ? this.$AreaShapes$[$area$$14$$].$setCmds$($cmd$$10_layerDim$$) : delete this.$AreaShapes$[$area$$14$$]
};
$JSCompiler_prototypeAlias$$.$updateDataLayer$ = function $$JSCompiler_prototypeAlias$$$$updateDataLayer$$($dataLayer$$11$$, $pzcMatrix$$15$$, $topLayerName$$1$$) {
  $DvtMapAreaLayer$$.$superclass$.$updateDataLayer$.call(this, $dataLayer$$11$$, $pzcMatrix$$15$$, $topLayerName$$1$$);
  if($topLayerName$$1$$ == this.$LayerName$) {
    for(var $area$$16$$ in this.$AreaShapes$) {
      $JSCompiler_StaticMethods__createAreaAndLabel$$(this, $area$$16$$, $JSCompiler_alias_TRUE$$), this.$_renderArea$[$area$$16$$] && $JSCompiler_StaticMethods__addAreaAndLabel$$(this, $area$$16$$)
    }
  }
};
$JSCompiler_prototypeAlias$$.$render$ = function $$JSCompiler_prototypeAlias$$$$render$$($pzcMatrix$$16$$) {
  this.$_bUpdateShapesForRender$ = $JSCompiler_alias_TRUE$$;
  for(var $area$$17$$ in this.$AreaShapes$) {
    $JSCompiler_StaticMethods__createAreaAndLabel$$(this, $area$$17$$, $JSCompiler_alias_TRUE$$), this.$_renderArea$[$area$$17$$] && $JSCompiler_StaticMethods__addAreaAndLabel$$(this, $area$$17$$)
  }
  $DvtMapAreaLayer$$.$superclass$.$render$.call(this, $pzcMatrix$$16$$)
};
$JSCompiler_prototypeAlias$$.$PreDataLayerUpdate$ = function $$JSCompiler_prototypeAlias$$$$PreDataLayerUpdate$$() {
  for(var $area$$18$$ in this.$_renderArea$) {
    this.$_renderArea$[$area$$18$$] || ($JSCompiler_StaticMethods__createAreaAndLabel$$(this, $area$$18$$, $JSCompiler_alias_FALSE$$), $JSCompiler_StaticMethods__addAreaAndLabel$$(this, $area$$18$$))
  }
};
$JSCompiler_prototypeAlias$$.$PostDataLayerUpdate$ = function $$JSCompiler_prototypeAlias$$$$PostDataLayerUpdate$$() {
  for(var $area$$19$$ in this.$_renderArea$) {
    if(!this.$_renderArea$[$area$$19$$]) {
      this.$AreaContainer$.removeChild(this.$Areas$[$area$$19$$]);
      var $label$$88_leaderLine$$ = this.$_areaLabels$[$area$$19$$];
      $label$$88_leaderLine$$ && (this.$_renderedLabels$[$area$$19$$] = $JSCompiler_alias_FALSE$$, this.$LabelContainer$.removeChild($label$$88_leaderLine$$), ($label$$88_leaderLine$$ = $label$$88_leaderLine$$.$_leaderLine$) && this.$LabelContainer$.removeChild($label$$88_leaderLine$$))
    }
  }
};
$JSCompiler_prototypeAlias$$.$discloseAreas$ = function $$JSCompiler_prototypeAlias$$$$discloseAreas$$($areas$$2$$, $fadeInObjs$$4$$) {
  for(var $i$$inline_4740$$ = 0;$i$$inline_4740$$ < $areas$$2$$.length;$i$$inline_4740$$++) {
    $JSCompiler_StaticMethods__createAreaAndLabel$$(this, $areas$$2$$[$i$$inline_4740$$], $JSCompiler_alias_FALSE$$), this.$_renderArea$[$areas$$2$$[$i$$inline_4740$$]] && $JSCompiler_StaticMethods__addAreaAndLabel$$(this, $areas$$2$$[$i$$inline_4740$$], $fadeInObjs$$4$$)
  }
  for(var $id$$196$$ in this.$DataLayers$) {
    this.$DataLayers$[$id$$196$$].$discloseAreas$($areas$$2$$, $fadeInObjs$$4$$, this.$PzcMatrix$)
  }
  this.$_disclosed$ = this.$_disclosed$.concat($areas$$2$$)
};
$JSCompiler_prototypeAlias$$.$undiscloseAreas$ = function $$JSCompiler_prototypeAlias$$$$undiscloseAreas$$($areas$$3$$, $fadeOutObjs$$) {
  for(var $childAreaLayer_id$$197$$ in this.$DataLayers$) {
    this.$DataLayers$[$childAreaLayer_id$$197$$].$undiscloseAreas$($areas$$3$$, $fadeOutObjs$$)
  }
  $childAreaLayer_id$$197$$ = $JSCompiler_StaticMethods_getDrillChildLayer$$(this.$_tmap$, this.$LayerName$);
  for(var $i$$595$$ = 0;$i$$595$$ < $areas$$3$$.length;$i$$595$$++) {
    var $areaName$$3$$ = $areas$$3$$[$i$$595$$];
    if(this.$Areas$[$areaName$$3$$]) {
      var $idx$$18$$ = dvt.$ArrayUtils$.$getIndex$(this.$_disclosed$, $areaName$$3$$);
      -1 !== $idx$$18$$ && (this.$_disclosed$.splice($idx$$18$$, 1), $fadeOutObjs$$.push(this.$Areas$[$areaName$$3$$]))
    }
    $childAreaLayer_id$$197$$ && $childAreaLayer_id$$197$$.$undiscloseAreas$($JSCompiler_StaticMethods_getChildrenForArea$$(this, $areaName$$3$$), $fadeOutObjs$$)
  }
};
$JSCompiler_prototypeAlias$$.reset = function $$JSCompiler_prototypeAlias$$$reset$($fadeOutObjs$$1$$, $doNotResetAreas$$1$$) {
  $DvtMapAreaLayer$$.$superclass$.reset.call(this, $fadeOutObjs$$1$$, $doNotResetAreas$$1$$);
  "none" != this.$_tmap$.$_drillMode$ && (this.$undiscloseAreas$(this.$_disclosed$, $fadeOutObjs$$1$$), this.$_disclosed$ = [])
};
function $JSCompiler_StaticMethods___getObjectUnderPoint$$($JSCompiler_StaticMethods___getObjectUnderPoint$self$$, $x$$190$$, $y$$164$$) {
  for(var $id$$198$$ in $JSCompiler_StaticMethods___getObjectUnderPoint$self$$.$Areas$) {
    if($JSCompiler_StaticMethods___getObjectUnderPoint$self$$.$Areas$[$id$$198$$].contains($x$$190$$, $y$$164$$)) {
      return $JSCompiler_StaticMethods___getObjectUnderPoint$self$$.$Areas$[$id$$198$$]
    }
  }
  return $JSCompiler_alias_NULL$$
}
$JSCompiler_prototypeAlias$$.$__showDropSiteFeedback$ = function $$JSCompiler_prototypeAlias$$$$__showDropSiteFeedback$$($obj$$200_stroke$$96_strokeWidth$$9$$) {
  this.$_dropSiteFeedback$ && (this.$AreaContainer$.removeChild(this.$_dropSiteFeedback$), this.$_dropSiteFeedback$ = $JSCompiler_alias_NULL$$);
  if($obj$$200_stroke$$96_strokeWidth$$9$$ && (this.$_dropSiteFeedback$ = $obj$$200_stroke$$96_strokeWidth$$9$$.$getDropSiteFeedback$())) {
    this.$_dropSiteFeedback$.$setFill$(new dvt.$SolidFill$(this.$_dropSiteCSSStyle$.$getStyle$(dvt.$CSSStyle$.$BACKGROUND_COLOR$))), $obj$$200_stroke$$96_strokeWidth$$9$$ = this.$_dropSiteCSSStyle$.$getStyle$(dvt.$CSSStyle$.$BORDER_WIDTH$) ? this.$_dropSiteCSSStyle$.$getStyle$(dvt.$CSSStyle$.$BORDER_WIDTH$).substring(0, this.$_dropSiteCSSStyle$.$getStyle$(dvt.$CSSStyle$.$BORDER_WIDTH$).indexOf("px")) : 1, this.$_tmap$.$_bSupportsVectorEffects$ || ($obj$$200_stroke$$96_strokeWidth$$9$$ /= this.$PzcMatrix$.$_a$), 
    $obj$$200_stroke$$96_strokeWidth$$9$$ = new dvt.$SolidStroke$(this.$_dropSiteCSSStyle$.$getStyle$(dvt.$CSSStyle$.$BORDER_COLOR$), 1, $obj$$200_stroke$$96_strokeWidth$$9$$), this.$_tmap$.$_bSupportsVectorEffects$ && $obj$$200_stroke$$96_strokeWidth$$9$$.$setFixedWidth$($JSCompiler_alias_TRUE$$), this.$_dropSiteFeedback$.$setStroke$($obj$$200_stroke$$96_strokeWidth$$9$$), this.$AreaContainer$.$addChild$(this.$_dropSiteFeedback$)
  }
  return this.$_dropSiteFeedback$
};
$JSCompiler_prototypeAlias$$.$HandleZoomEvent$ = function $$JSCompiler_prototypeAlias$$$$HandleZoomEvent$$($event$$491$$, $pzcMatrix$$17$$) {
  $DvtMapAreaLayer$$.$superclass$.$HandleZoomEvent$.call(this, $event$$491$$, $pzcMatrix$$17$$);
  if(!this.$_tmap$.$_bSupportsVectorEffects$) {
    for(var $area$$20$$ in this.$Areas$) {
      this.$Areas$[$area$$20$$].$HandleZoomEvent$($pzcMatrix$$17$$)
    }
  }
  for($area$$20$$ in this.$_renderedLabels$) {
    if(this.$_renderedLabels$[$area$$20$$]) {
      var $label$$89$$ = this.$_areaLabels$[$area$$20$$];
      $label$$89$$ && $label$$89$$.update($pzcMatrix$$17$$)
    }
  }
};
function $DvtMapCustomAreaLayer$$($tmap$$5$$, $layerName$$26$$, $labelDisplay$$5$$, $labelType$$4$$, $eventHandler$$4$$) {
  this.Init($tmap$$5$$, $layerName$$26$$, $labelDisplay$$5$$, $labelType$$4$$, $eventHandler$$4$$)
}
dvt.$Obj$.$createSubclass$($DvtMapCustomAreaLayer$$, $DvtMapAreaLayer$$);
$DvtMapCustomAreaLayer$$.prototype.Init = function $$DvtMapCustomAreaLayer$$$$Init$($tmap$$6$$, $layerName$$27$$, $labelDisplay$$6$$, $labelType$$5$$, $eventHandler$$5$$) {
  $DvtMapCustomAreaLayer$$.$superclass$.Init.call(this, $tmap$$6$$, $layerName$$27$$, $labelDisplay$$6$$, $labelType$$5$$, $eventHandler$$5$$)
};
$DvtMapCustomAreaLayer$$.prototype.$updateAreaShape$ = $JSCompiler_emptyFn$$();
$DvtMapCustomAreaLayer$$.prototype.$getLayerDim$ = function $$DvtMapCustomAreaLayer$$$$$getLayerDim$$() {
  return new dvt.$Rectangle$(0, 0, this.$_layerWidth$, this.$_layerHeight$)
};
function $JSCompiler_StaticMethods__selectImageBasedOnResolution$$($JSCompiler_StaticMethods__selectImageBasedOnResolution$self_images$$20$$) {
  var $widthRes$$1$$ = $JSCompiler_StaticMethods__selectImageBasedOnResolution$self_images$$20$$.$_tmap$.getWidth(), $heightRes$$2$$ = $JSCompiler_StaticMethods__selectImageBasedOnResolution$self_images$$20$$.$_tmap$.getHeight();
  $JSCompiler_StaticMethods__selectImageBasedOnResolution$self_images$$20$$ = $JSCompiler_StaticMethods__selectImageBasedOnResolution$self_images$$20$$.$_areaLayerImages$;
  for(var $i$$596$$ = 0;$i$$596$$ < $JSCompiler_StaticMethods__selectImageBasedOnResolution$self_images$$20$$.length;$i$$596$$++) {
    var $height$$107_image$$18$$ = $JSCompiler_StaticMethods__selectImageBasedOnResolution$self_images$$20$$[$i$$596$$], $source$$32$$ = $height$$107_image$$18$$.source, $width$$123$$ = $height$$107_image$$18$$.width, $height$$107_image$$18$$ = $height$$107_image$$18$$.height;
    if($source$$32$$ && -1 < $source$$32$$.search(".svg") || $width$$123$$ >= $widthRes$$1$$ && $height$$107_image$$18$$ >= $heightRes$$2$$ || $i$$596$$ == $JSCompiler_StaticMethods__selectImageBasedOnResolution$self_images$$20$$.length - 1) {
      return $source$$32$$
    }
  }
}
$DvtMapCustomAreaLayer$$.prototype.$HandleZoomEvent$ = function $$DvtMapCustomAreaLayer$$$$$HandleZoomEvent$$($event$$492$$, $pzcMatrix$$18$$) {
  $DvtMapCustomAreaLayer$$.$superclass$.$HandleZoomEvent$.call(this, $event$$492$$, $pzcMatrix$$18$$);
  if(this.$Areas$.image) {
    var $newImageSrc$$ = $JSCompiler_StaticMethods__selectImageBasedOnResolution$$(this);
    $newImageSrc$$ != this.$_imageSrc$ && (this.$_imageSrc$ = $newImageSrc$$, this.$Areas$.image.$setSrc$(this.$_imageSrc$))
  }
};
function $DvtMapDataLayer$$($tmap$$7$$, $parentLayer$$4$$, $clientId$$4$$, $eventHandler$$6$$, $options$$256$$) {
  this.Init($tmap$$7$$, $parentLayer$$4$$, $clientId$$4$$, $eventHandler$$6$$, $options$$256$$)
}
dvt.$Obj$.$createSubclass$($DvtMapDataLayer$$, dvt.$Obj$);
$JSCompiler_prototypeAlias$$ = $DvtMapDataLayer$$.prototype;
$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($tmap$$8$$, $parentLayer$$5$$, $clientId$$5$$, $eventHandler$$7$$, $options$$257$$) {
  this.$_tmap$ = $tmap$$8$$;
  this.$_clientId$ = $clientId$$5$$;
  this.$_options$ = $options$$257$$;
  this.$_areaObjs$ = [];
  this.$_dataObjs$ = [];
  this.$_dataAreaCollection$ = [];
  this.$_dataMarkerCollection$ = [];
  this.$_eventHandler$ = $eventHandler$$7$$;
  this.$_dragSource$ = new dvt.$DragSource$($tmap$$8$$.$getCtx$());
  this.$_eventHandler$.$setDragSource$(this.$_dragSource$);
  this.$_dataAreaLayer$ = new dvt.$Container$(this.$_tmap$.$getCtx$());
  this.$_dataPointLayer$ = new dvt.$Container$(this.$_tmap$.$getCtx$());
  this.$_dataLabelLayer$ = new dvt.$Container$(this.$_tmap$.$getCtx$());
  this.$_tmap$.$_dataAreaLayers$.$addChildAt$(this.$_dataAreaLayer$, 0);
  this.$_tmap$.$_dataPointLayers$.$addChildAt$(this.$_dataPointLayer$, 0);
  this.$_tmap$.$_labelLayers$.$addChildAt$(this.$_dataLabelLayer$, 0);
  this.$_parentLayer$ = $parentLayer$$5$$;
  this.$_disclosed$ = [];
  this.$_drilled$ = []
};
$JSCompiler_prototypeAlias$$.$getOptions$ = $JSCompiler_get$$("$_options$");
function $JSCompiler_StaticMethods_getNonScaledContainers$$($JSCompiler_StaticMethods_getNonScaledContainers$self$$) {
  var $containers$$1$$ = [$JSCompiler_StaticMethods_getNonScaledContainers$self$$.$_dataLabelLayer$];
  $JSCompiler_StaticMethods_getNonScaledContainers$self$$.$_tmap$.$_isMarkerZoomBehaviorFixed$ && $containers$$1$$.push($JSCompiler_StaticMethods_getNonScaledContainers$self$$.$_dataPointLayer$);
  return $containers$$1$$
}
function $JSCompiler_StaticMethods_getNavigableAreaObjects$$($JSCompiler_StaticMethods_getNavigableAreaObjects$self$$) {
  for(var $navigables$$12$$ = [], $i$$598$$ = 0;$i$$598$$ < $JSCompiler_StaticMethods_getNavigableAreaObjects$self$$.$_areaObjs$.length;$i$$598$$++) {
    $JSCompiler_StaticMethods_getNavigableAreaObjects$self$$.$_areaObjs$[$i$$598$$].$isDrilled$() || $navigables$$12$$.push($JSCompiler_StaticMethods_getNavigableAreaObjects$self$$.$_areaObjs$[$i$$598$$])
  }
  return $navigables$$12$$
}
function $JSCompiler_StaticMethods_getNavigableDisclosedAreaObjects$$($JSCompiler_StaticMethods_getNavigableDisclosedAreaObjects$self$$) {
  for(var $navigables$$13$$ = [], $i$$599$$ = 0;$i$$599$$ < $JSCompiler_StaticMethods_getNavigableDisclosedAreaObjects$self$$.$_areaObjs$.length;$i$$599$$++) {
    for(var $j$$88$$ = 0;$j$$88$$ < $JSCompiler_StaticMethods_getNavigableDisclosedAreaObjects$self$$.$_disclosed$.length;$j$$88$$++) {
      $JSCompiler_StaticMethods_getNavigableDisclosedAreaObjects$self$$.$_areaObjs$[$i$$599$$].$getLocation$() == $JSCompiler_StaticMethods_getNavigableDisclosedAreaObjects$self$$.$_disclosed$[$j$$88$$] && ($JSCompiler_StaticMethods_getNavigableDisclosedAreaObjects$self$$.$_areaObjs$[$i$$599$$].$isDrilled$() || $navigables$$13$$.push($JSCompiler_StaticMethods_getNavigableDisclosedAreaObjects$self$$.$_areaObjs$[$i$$599$$]))
    }
  }
  return $navigables$$13$$
}
function $JSCompiler_StaticMethods_addDataObject$$($JSCompiler_StaticMethods_addDataObject$self$$, $obj$$201$$) {
  $JSCompiler_StaticMethods_addDataObject$self$$.$_dataMarkerCollection$.push($obj$$201$$);
  if($obj$$201$$) {
    $JSCompiler_StaticMethods_addDataObject$self$$.$_dataObjs$.push($obj$$201$$);
    $JSCompiler_StaticMethods_addDataObject$self$$.$_eventHandler$.$associate$($obj$$201$$.$getDisplayable$(), $obj$$201$$);
    var $label$$90$$ = $obj$$201$$.$getLabel$();
    $label$$90$$ && $JSCompiler_StaticMethods_addDataObject$self$$.$_eventHandler$.$associate$($label$$90$$, $obj$$201$$)
  }
}
function $JSCompiler_StaticMethods_addAreaObject$$($JSCompiler_StaticMethods_addAreaObject$self$$, $obj$$202$$) {
  $JSCompiler_StaticMethods_addAreaObject$self$$.$_dataAreaCollection$.push($obj$$202$$);
  $obj$$202$$ && ($JSCompiler_StaticMethods_addAreaObject$self$$.$_areaObjs$.push($obj$$202$$), $JSCompiler_StaticMethods_addAreaObject$self$$.$_eventHandler$.$associate$($obj$$202$$.$getDisplayable$(), $obj$$202$$), $obj$$202$$.$_dataAreaLayer$ = $JSCompiler_StaticMethods_addAreaObject$self$$.$_dataAreaLayer$)
}
$JSCompiler_prototypeAlias$$.$getClientId$ = $JSCompiler_get$$("$_clientId$");
$JSCompiler_prototypeAlias$$.$setAnimation$ = $JSCompiler_set$$("$_animType$");
$JSCompiler_prototypeAlias$$.$getAnimation$ = $JSCompiler_get$$("$_animType$");
$JSCompiler_prototypeAlias$$.$setAnimationDuration$ = $JSCompiler_set$$("$_animDur$");
$JSCompiler_prototypeAlias$$.$getAnimationDuration$ = $JSCompiler_get$$("$_animDur$");
$JSCompiler_prototypeAlias$$.$setSelectionMode$ = function $$JSCompiler_prototypeAlias$$$$setSelectionMode$$($mode$$8$$) {
  if(this.$_selectionMode$ = $mode$$8$$) {
    this.$_selectionHandler$ = new dvt.$SelectionHandler$(this.$_selectionMode$), this.$_eventHandler$.$setSelectionHandler$(this.$_clientId$, this.$_selectionHandler$)
  }
};
$JSCompiler_prototypeAlias$$.$isSelectable$ = function $$JSCompiler_prototypeAlias$$$$isSelectable$$() {
  return this.$_selectionMode$ != $JSCompiler_alias_NULL$$
};
function $JSCompiler_StaticMethods__renderAreaAndLabel$$($JSCompiler_StaticMethods__renderAreaAndLabel$self$$, $areaIndex$$1$$) {
  var $JSCompiler_inline_result$$197_areaObj$$inline_4749_idx$$inline_6578_label$$91$$;
  $JSCompiler_inline_result$$197_areaObj$$inline_4749_idx$$inline_6578_label$$91$$ = $JSCompiler_StaticMethods__renderAreaAndLabel$self$$.$_areaObjs$[$areaIndex$$1$$];
  var $areaDim$$1_displayable$$74_displayable$$inline_4750$$ = $JSCompiler_inline_result$$197_areaObj$$inline_4749_idx$$inline_6578_label$$91$$.$getDisplayable$(), $pathToCopy$$inline_4751$$ = $JSCompiler_StaticMethods__renderAreaAndLabel$self$$.$_parentLayer$.$AreaShapes$[$JSCompiler_inline_result$$197_areaObj$$inline_4749_idx$$inline_6578_label$$91$$.$getLocation$()];
  $pathToCopy$$inline_4751$$ ? ($areaDim$$1_displayable$$74_displayable$$inline_4750$$.$setCmds$($pathToCopy$$inline_4751$$.$getCmds$()), $JSCompiler_inline_result$$197_areaObj$$inline_4749_idx$$inline_6578_label$$91$$ = $JSCompiler_alias_TRUE$$) : ($JSCompiler_inline_result$$197_areaObj$$inline_4749_idx$$inline_6578_label$$91$$ = $JSCompiler_StaticMethods__renderAreaAndLabel$self$$.$_areaObjs$.indexOf($JSCompiler_inline_result$$197_areaObj$$inline_4749_idx$$inline_6578_label$$91$$), -1 !== $JSCompiler_inline_result$$197_areaObj$$inline_4749_idx$$inline_6578_label$$91$$ && 
  $JSCompiler_StaticMethods__renderAreaAndLabel$self$$.$_areaObjs$.splice($JSCompiler_inline_result$$197_areaObj$$inline_4749_idx$$inline_6578_label$$91$$, 1), $JSCompiler_inline_result$$197_areaObj$$inline_4749_idx$$inline_6578_label$$91$$ = $JSCompiler_alias_FALSE$$);
  if($JSCompiler_inline_result$$197_areaObj$$inline_4749_idx$$inline_6578_label$$91$$) {
    $areaDim$$1_displayable$$74_displayable$$inline_4750$$ = $JSCompiler_StaticMethods__renderAreaAndLabel$self$$.$_areaObjs$[$areaIndex$$1$$].$getDisplayable$();
    $JSCompiler_StaticMethods__renderAreaAndLabel$self$$.$_dataAreaLayer$.$addChild$($areaDim$$1_displayable$$74_displayable$$inline_4750$$);
    if($JSCompiler_inline_result$$197_areaObj$$inline_4749_idx$$inline_6578_label$$91$$ = $JSCompiler_StaticMethods__renderAreaAndLabel$self$$.$_areaObjs$[$areaIndex$$1$$].$getLabel$()) {
      0 < $JSCompiler_inline_result$$197_areaObj$$inline_4749_idx$$inline_6578_label$$91$$.$_boundRectangle$.length || ($areaDim$$1_displayable$$74_displayable$$inline_4750$$ = $areaDim$$1_displayable$$74_displayable$$inline_4750$$.$getDimensions$(), $JSCompiler_inline_result$$197_areaObj$$inline_4749_idx$$inline_6578_label$$91$$.$_boundRectangle$.push($areaDim$$1_displayable$$74_displayable$$inline_4750$$)), $JSCompiler_inline_result$$197_areaObj$$inline_4749_idx$$inline_6578_label$$91$$.update($JSCompiler_StaticMethods__renderAreaAndLabel$self$$.$_pzcMatrix$)
    }
    return $JSCompiler_alias_TRUE$$
  }
  return $JSCompiler_alias_FALSE$$
}
$JSCompiler_prototypeAlias$$.$render$ = function $$JSCompiler_prototypeAlias$$$$render$$($areaLabelsToRemove_pzcMatrix$$19$$) {
  this.$_bFixPatterns$ = $JSCompiler_alias_TRUE$$;
  this.$_pzcMatrix$ = $areaLabelsToRemove_pzcMatrix$$19$$;
  $areaLabelsToRemove_pzcMatrix$$19$$ = {};
  var $dataObjs$$2$$ = this.$_dataObjs$.slice();
  $dataObjs$$2$$.sort(function compare($areaLabelsToRemove_pzcMatrix$$19$$, $dataObjs$$2$$) {
    return $areaLabelsToRemove_pzcMatrix$$19$$.$getSize$() < $dataObjs$$2$$.$getSize$() ? 1 : $areaLabelsToRemove_pzcMatrix$$19$$.$getSize$() > $dataObjs$$2$$.$getSize$() ? -1 : 0
  });
  for(var $i$$600$$ = 0;$i$$600$$ < $dataObjs$$2$$.length;$i$$600$$++) {
    var $dataObj$$3_regionId$$ = $dataObjs$$2$$[$i$$600$$], $displayable$$75$$ = $dataObj$$3_regionId$$.$getDisplayable$(), $label$$92$$ = $dataObj$$3_regionId$$.$getLabel$();
    if($label$$92$$) {
      var $container$$174$$ = new dvt.$Container$($displayable$$75$$.$getCtx$());
      this.$_dataPointLayer$.$addChild$($container$$174$$);
      $container$$174$$.$addChild$($displayable$$75$$);
      $container$$174$$.$addChild$($label$$92$$);
      $dataObj$$3_regionId$$.$positionLabel$()
    }else {
      this.$_dataPointLayer$.$addChild$($displayable$$75$$)
    }
    ($dataObj$$3_regionId$$ = $dataObj$$3_regionId$$.$getLocation$()) && ($areaLabelsToRemove_pzcMatrix$$19$$[$dataObj$$3_regionId$$] = $JSCompiler_alias_TRUE$$)
  }
  for($i$$600$$ = 0;$i$$600$$ < this.$_areaObjs$.length;$i$$600$$++) {
    $areaLabelsToRemove_pzcMatrix$$19$$[this.$_areaObjs$[$i$$600$$].$getLocation$()] && (this.$_areaObjs$[$i$$600$$].$_label$ = $JSCompiler_alias_NULL$$), $JSCompiler_StaticMethods__renderAreaAndLabel$$(this, $i$$600$$) || $i$$600$$--
  }
  this.$_initSelections$ && this.$_processInitialSelections$()
};
$JSCompiler_prototypeAlias$$.$discloseAreas$ = function $$JSCompiler_prototypeAlias$$$$discloseAreas$$($areas$$4$$, $fadeInObjs$$5$$, $pzcMatrix$$20_regionId$$1$$) {
  this.$_pzcMatrix$ = $pzcMatrix$$20_regionId$$1$$;
  for(var $drilledAreas$$ = [], $j$$89$$ = 0;$j$$89$$ < $areas$$4$$.length;$j$$89$$++) {
    for(var $i$$601_label$$93_leaderLine$$1$$ = 0;$i$$601_label$$93_leaderLine$$1$$ < this.$_areaObjs$.length;$i$$601_label$$93_leaderLine$$1$$++) {
      if(this.$_areaObjs$[$i$$601_label$$93_leaderLine$$1$$].$getLocation$() == $areas$$4$$[$j$$89$$]) {
        $drilledAreas$$.push(this.$_areaObjs$[$i$$601_label$$93_leaderLine$$1$$].$getLocation$());
        $JSCompiler_StaticMethods__renderAreaAndLabel$$(this, $i$$601_label$$93_leaderLine$$1$$);
        var $displayable$$76$$ = this.$_areaObjs$[$i$$601_label$$93_leaderLine$$1$$].$getDisplayable$();
        $fadeInObjs$$5$$.push($displayable$$76$$);
        $JSCompiler_StaticMethods_handleZoomEvent$$($displayable$$76$$, $pzcMatrix$$20_regionId$$1$$);
        if($i$$601_label$$93_leaderLine$$1$$ = this.$_areaObjs$[$i$$601_label$$93_leaderLine$$1$$].$getLabel$()) {
          $fadeInObjs$$5$$.push($i$$601_label$$93_leaderLine$$1$$), ($i$$601_label$$93_leaderLine$$1$$ = $i$$601_label$$93_leaderLine$$1$$.$_leaderLine$) && $fadeInObjs$$5$$.push($i$$601_label$$93_leaderLine$$1$$)
        }
        break
      }
    }
  }
  for($i$$601_label$$93_leaderLine$$1$$ = 0;$i$$601_label$$93_leaderLine$$1$$ < this.$_dataObjs$.length;$i$$601_label$$93_leaderLine$$1$$++) {
    for($j$$89$$ = 0;$j$$89$$ < $areas$$4$$.length;$j$$89$$++) {
      $pzcMatrix$$20_regionId$$1$$ = this.$_dataObjs$[$i$$601_label$$93_leaderLine$$1$$].$getLocation$(), $displayable$$76$$ = this.$_dataObjs$[$i$$601_label$$93_leaderLine$$1$$].$getDisplayable$(), $pzcMatrix$$20_regionId$$1$$ != $JSCompiler_alias_NULL$$ ? $pzcMatrix$$20_regionId$$1$$ == $areas$$4$$[$j$$89$$] && (this.$_dataPointLayer$.$addChild$($displayable$$76$$), $fadeInObjs$$5$$.push($displayable$$76$$)) : (this.$_dataPointLayer$.$addChild$($displayable$$76$$), $fadeInObjs$$5$$.push($displayable$$76$$))
    }
  }
  this.$_disclosed$ = this.$_disclosed$.concat($drilledAreas$$)
};
$JSCompiler_prototypeAlias$$.$undiscloseAreas$ = function $$JSCompiler_prototypeAlias$$$$undiscloseAreas$$($areas$$5$$, $fadeOutObjs$$2$$) {
  for(var $j$$90$$ = 0;$j$$90$$ < $areas$$5$$.length;$j$$90$$++) {
    for(var $i$$602_label$$94$$ = 0;$i$$602_label$$94$$ < this.$_areaObjs$.length;$i$$602_label$$94$$++) {
      if(this.$_areaObjs$[$i$$602_label$$94$$].$getLocation$() == $areas$$5$$[$j$$90$$]) {
        this.$_areaObjs$[$i$$602_label$$94$$].$isDrilled$() && this.$_areaObjs$[$i$$602_label$$94$$].$setDrilled$($JSCompiler_alias_FALSE$$);
        this.$_areaObjs$[$i$$602_label$$94$$].$isSelected$() && this.$_selectionHandler$.$removeFromSelection$(this.$_areaObjs$[$i$$602_label$$94$$]);
        var $idx$$20$$ = dvt.$ArrayUtils$.$getIndex$(this.$_disclosed$, $areas$$5$$[$j$$90$$]);
        if(-1 < $idx$$20$$ && (this.$_disclosed$.splice($idx$$20$$, 1), $fadeOutObjs$$2$$.push(this.$_areaObjs$[$i$$602_label$$94$$].$getDisplayable$()), $i$$602_label$$94$$ = this.$_areaObjs$[$i$$602_label$$94$$].$getLabel$())) {
          $fadeOutObjs$$2$$.push($i$$602_label$$94$$), $fadeOutObjs$$2$$.push($i$$602_label$$94$$.$_leaderLine$)
        }
        break
      }
    }
  }
};
$JSCompiler_prototypeAlias$$.reset = function $$JSCompiler_prototypeAlias$$$reset$($fadeOutObjs$$4$$, $doNotResetAreas$$2$$) {
  if(this.$_selectionHandler$) {
    for(var $j$$91_selectedObjs$$ = this.$_selectionHandler$.getSelection(), $i$$605_label$$97$$ = 0;$i$$605_label$$97$$ < $j$$91_selectedObjs$$.length;$i$$605_label$$97$$++) {
      (!$doNotResetAreas$$2$$ || $doNotResetAreas$$2$$ && -1 == dvt.$ArrayUtils$.$getIndex$($doNotResetAreas$$2$$, $j$$91_selectedObjs$$[$i$$605_label$$97$$].$getLocation$())) && this.$_selectionHandler$.$removeFromSelection$($j$$91_selectedObjs$$[$i$$605_label$$97$$])
    }
  }
  if("none" != this.$_tmap$.$_drillMode$) {
    for($j$$91_selectedObjs$$ = 0;$j$$91_selectedObjs$$ < this.$_drilled$.length;$j$$91_selectedObjs$$++) {
      for($i$$605_label$$97$$ = 0;$i$$605_label$$97$$ < this.$_areaObjs$.length;$i$$605_label$$97$$++) {
        if(this.$_areaObjs$[$i$$605_label$$97$$].$getLocation$() == this.$_drilled$[$j$$91_selectedObjs$$]) {
          this.$_areaObjs$[$i$$605_label$$97$$].$setDrilled$($JSCompiler_alias_FALSE$$);
          var $displayable$$78$$ = this.$_areaObjs$[$i$$605_label$$97$$].$getDisplayable$();
          this.$_dataAreaLayer$.$addChild$($displayable$$78$$);
          $fadeOutObjs$$4$$.push($displayable$$78$$);
          if($i$$605_label$$97$$ = this.$_areaObjs$[$i$$605_label$$97$$].$getLabel$()) {
            $i$$605_label$$97$$.update(this.$_pzcMatrix$), $fadeOutObjs$$4$$.push($i$$605_label$$97$$), $fadeOutObjs$$4$$.push($i$$605_label$$97$$.$_leaderLine$)
          }
          break
        }
      }
      for($i$$605_label$$97$$ = 0;$i$$605_label$$97$$ < this.$_dataObjs$.length;$i$$605_label$$97$$++) {
        if(this.$_dataObjs$[$i$$605_label$$97$$].$getLocation$() == this.$_drilled$[$j$$91_selectedObjs$$]) {
          $displayable$$78$$ = this.$_dataObjs$[$i$$605_label$$97$$].$getDisplayable$();
          this.$_dataPointLayer$.$addChild$($displayable$$78$$);
          $fadeOutObjs$$4$$.push($displayable$$78$$);
          break
        }
      }
    }
  }
  this.$_drilled$ = []
};
$JSCompiler_prototypeAlias$$.$HandleZoomEvent$ = function $$JSCompiler_prototypeAlias$$$$HandleZoomEvent$$($event$$493$$, $pzcMatrix$$21$$) {
  this.$_pzcMatrix$ = $pzcMatrix$$21$$;
  var $i$$606_zoom$$17$$ = $pzcMatrix$$21$$.$_a$, $areaObjs$$1_dataObjs$$3_j$$92_type$$158$$ = $event$$493$$.$getSubType$();
  if(this.$_bFixPatterns$ && $areaObjs$$1_dataObjs$$3_j$$92_type$$158$$ == dvt.$ZoomEvent$.$SUBTYPE_ZOOMED$) {
    this.$_bFixPatterns$ = $JSCompiler_alias_FALSE$$;
    for($areaObjs$$1_dataObjs$$3_j$$92_type$$158$$ = 0;$areaObjs$$1_dataObjs$$3_j$$92_type$$158$$ < this.$_areaObjs$.length;$areaObjs$$1_dataObjs$$3_j$$92_type$$158$$++) {
      var $displayable$$79$$ = this.$_areaObjs$[$areaObjs$$1_dataObjs$$3_j$$92_type$$158$$].$getDisplayable$(), $fill$$61$$ = $displayable$$79$$.$_ptFill$;
      if($fill$$61$$) {
        var $scaledFill$$ = new dvt.$PatternFill$;
        $fill$$61$$.$mergeProps$($scaledFill$$);
        $scaledFill$$.$setMatrix$(new dvt.$Matrix$(1 / $i$$606_zoom$$17$$, $JSCompiler_alias_NULL$$, $JSCompiler_alias_NULL$$, 1 / $i$$606_zoom$$17$$));
        $displayable$$79$$.$setFill$($scaledFill$$)
      }
    }
  }
  $areaObjs$$1_dataObjs$$3_j$$92_type$$158$$ = this.$_areaObjs$;
  for($i$$606_zoom$$17$$ = 0;$i$$606_zoom$$17$$ < $areaObjs$$1_dataObjs$$3_j$$92_type$$158$$.length;$i$$606_zoom$$17$$++) {
    $areaObjs$$1_dataObjs$$3_j$$92_type$$158$$[$i$$606_zoom$$17$$].$HandleZoomEvent$($pzcMatrix$$21$$)
  }
  if(this.$_tmap$.$_isMarkerZoomBehaviorFixed$) {
    $areaObjs$$1_dataObjs$$3_j$$92_type$$158$$ = this.$_dataObjs$;
    for($i$$606_zoom$$17$$ = 0;$i$$606_zoom$$17$$ < $areaObjs$$1_dataObjs$$3_j$$92_type$$158$$.length;$i$$606_zoom$$17$$++) {
      $areaObjs$$1_dataObjs$$3_j$$92_type$$158$$[$i$$606_zoom$$17$$].$HandleZoomEvent$($pzcMatrix$$21$$)
    }
  }
};
$JSCompiler_prototypeAlias$$.$HandlePanEvent$ = $JSCompiler_set$$("$_pzcMatrix$");
$JSCompiler_prototypeAlias$$.$_processInitialSelections$ = function $$JSCompiler_prototypeAlias$$$$_processInitialSelections$$() {
  this.$_selectionHandler$ && (this.$_selectionHandler$.$processInitialSelections$(this.$_initSelections$, this.$_dataObjs$.concat(this.$_areaObjs$)), this.$_initSelections$ = $JSCompiler_alias_NULL$$)
};
$JSCompiler_prototypeAlias$$.$__getDragTransferable$ = function $$JSCompiler_prototypeAlias$$$$__getDragTransferable$$($obj$$204_rowKeys$$3$$) {
  if(this.$_selectionHandler$) {
    $obj$$204_rowKeys$$3$$.$isSelected$() || (this.$_selectionHandler$.$processClick$($obj$$204_rowKeys$$3$$, $JSCompiler_alias_FALSE$$), this.$_eventHandler$.$fireSelectionEvent$($obj$$204_rowKeys$$3$$));
    $obj$$204_rowKeys$$3$$ = [];
    for(var $selection$$22$$ = this.$_selectionHandler$.getSelection(), $i$$607$$ = 0;$i$$607$$ < $selection$$22$$.length;$i$$607$$++) {
      $obj$$204_rowKeys$$3$$.push($selection$$22$$[$i$$607$$].getId())
    }
    return $obj$$204_rowKeys$$3$$
  }
  return $JSCompiler_alias_NULL$$
};
$JSCompiler_prototypeAlias$$.$__getDragFeedback$ = function $$JSCompiler_prototypeAlias$$$$__getDragFeedback$$() {
  for(var $displayables$$21$$ = [], $selection$$23$$ = this.$_selectionHandler$.getSelection(), $i$$608$$ = 0;$i$$608$$ < $selection$$23$$.length;$i$$608$$++) {
    $displayables$$21$$.push($selection$$23$$[$i$$608$$].$getDisplayable$())
  }
  return $displayables$$21$$
};
function $DvtThematicMapKeyboardHandler$$($tmap$$9$$, $manager$$26$$) {
  this.Init($tmap$$9$$, $manager$$26$$)
}
dvt.$Obj$.$createSubclass$($DvtThematicMapKeyboardHandler$$, dvt.$PanZoomCanvasKeyboardHandler$);
$JSCompiler_prototypeAlias$$ = $DvtThematicMapKeyboardHandler$$.prototype;
$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($tmap$$10$$, $manager$$27$$) {
  $DvtThematicMapKeyboardHandler$$.$superclass$.Init.call(this, $tmap$$10$$, $manager$$27$$);
  this.$_tmap$ = $tmap$$10$$
};
$JSCompiler_prototypeAlias$$.$isSelectionEvent$ = function $$JSCompiler_prototypeAlias$$$$isSelectionEvent$$($event$$494$$) {
  return this.$isNavigationEvent$($event$$494$$) && !$event$$494$$.ctrlKey
};
$JSCompiler_prototypeAlias$$.$processKeyDown$ = function $$JSCompiler_prototypeAlias$$$$processKeyDown$$($event$$495$$) {
  var $focusObj$$2_keyCode$$31$$ = $event$$495$$.keyCode;
  if($focusObj$$2_keyCode$$31$$ == dvt.$KeyboardEvent$.$CLOSE_BRACKET$) {
    var $focusObj$$2_keyCode$$31$$ = this.$_eventManager$.$getFocus$(), $navigables$$14$$ = $JSCompiler_StaticMethods_getNavigableObjects$$(this.$_tmap$);
    $focusObj$$2_keyCode$$31$$ instanceof $DvtMapAreaPeer$$ && 0 < $navigables$$14$$.length && ($focusObj$$2_keyCode$$31$$ = dvt.$KeyboardHandler$.$getNextAdjacentNavigable$($focusObj$$2_keyCode$$31$$, $event$$495$$, $navigables$$14$$));
    $JSCompiler_StaticMethods_SetClickInfo$$(this.$_eventManager$, $focusObj$$2_keyCode$$31$$)
  }else {
    $focusObj$$2_keyCode$$31$$ == dvt.$KeyboardEvent$.$OPEN_BRACKET$ ? ($focusObj$$2_keyCode$$31$$ = this.$_eventManager$.$getFocus$(), $navigables$$14$$ = $JSCompiler_StaticMethods_getNavigableAreas$$(this.$_tmap$), !($focusObj$$2_keyCode$$31$$ instanceof $DvtMapAreaPeer$$) && 0 < $navigables$$14$$.length && ($focusObj$$2_keyCode$$31$$ = dvt.$KeyboardHandler$.$getNextAdjacentNavigable$($focusObj$$2_keyCode$$31$$, $event$$495$$, $navigables$$14$$)), $JSCompiler_StaticMethods_SetClickInfo$$(this.$_eventManager$, 
    $focusObj$$2_keyCode$$31$$)) : ($focusObj$$2_keyCode$$31$$ = $DvtThematicMapKeyboardHandler$$.$superclass$.$processKeyDown$.call(this, $event$$495$$), this.$isNavigationEvent$($event$$495$$) && !$event$$495$$.ctrlKey && $JSCompiler_StaticMethods_SetClickInfo$$(this.$_eventManager$, $focusObj$$2_keyCode$$31$$))
  }
  return $focusObj$$2_keyCode$$31$$
};
$JSCompiler_prototypeAlias$$.$isMultiSelectEvent$ = function $$JSCompiler_prototypeAlias$$$$isMultiSelectEvent$$($event$$496$$) {
  return $event$$496$$.keyCode == dvt.$KeyboardEvent$.$SPACE$ && $event$$496$$.ctrlKey
};
$JSCompiler_prototypeAlias$$.$isNavigationEvent$ = function $$JSCompiler_prototypeAlias$$$$isNavigationEvent$$($event$$497_keyCode$$32$$) {
  var $isNavigable$$ = $DvtThematicMapKeyboardHandler$$.$superclass$.$isNavigationEvent$.call(this, $event$$497_keyCode$$32$$);
  if(!$isNavigable$$ && ($event$$497_keyCode$$32$$ = $event$$497_keyCode$$32$$.keyCode, $event$$497_keyCode$$32$$ == dvt.$KeyboardEvent$.$OPEN_BRACKET$ || $event$$497_keyCode$$32$$ == dvt.$KeyboardEvent$.$CLOSE_BRACKET$)) {
    $isNavigable$$ = $JSCompiler_alias_TRUE$$
  }
  return $isNavigable$$
};
function $DvtThematicMapEventManager$$($context$$383$$, $callback$$118$$, $callbackObj$$85$$) {
  this.Init($context$$383$$, $callback$$118$$, $callbackObj$$85$$)
}
dvt.$Obj$.$createSubclass$($DvtThematicMapEventManager$$, dvt.$EventManager$);
$JSCompiler_prototypeAlias$$ = $DvtThematicMapEventManager$$.prototype;
$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($context$$384$$, $callback$$119$$, $callbackObj$$86$$) {
  $DvtThematicMapEventManager$$.$superclass$.Init.call(this, $context$$384$$, $callback$$119$$, $callbackObj$$86$$);
  this.$_selectionHandlers$ = {};
  this.$_tmap$ = $callbackObj$$86$$;
  this.$_bPassOnEvent$ = $JSCompiler_alias_FALSE$$
};
$JSCompiler_prototypeAlias$$.$getSelectionHandler$ = function $$JSCompiler_prototypeAlias$$$$getSelectionHandler$$($logicalObj$$11$$) {
  if($logicalObj$$11$$ && $logicalObj$$11$$.$getDataLayer$) {
    return this.$_selectionHandlers$[$logicalObj$$11$$.$getDataLayer$().$getClientId$()]
  }
};
$JSCompiler_prototypeAlias$$.$setSelectionHandler$ = function $$JSCompiler_prototypeAlias$$$$setSelectionHandler$$($dataLayerId$$5$$, $handler$$50$$) {
  this.$_selectionHandlers$[$dataLayerId$$5$$] = $handler$$50$$
};
$JSCompiler_prototypeAlias$$.$setDrillMode$ = $JSCompiler_set$$("$_drillMode$");
$JSCompiler_prototypeAlias$$.$removeFromSelection$ = function $$JSCompiler_prototypeAlias$$$$removeFromSelection$$($clientId$$7$$, $obj$$205$$) {
  var $selectionHandler$$5$$ = this.$_selectionHandlers$[$clientId$$7$$];
  $selectionHandler$$5$$ && $selectionHandler$$5$$.$removeFromSelection$($obj$$205$$)
};
$JSCompiler_prototypeAlias$$.$clearSelection$ = function $$JSCompiler_prototypeAlias$$$$clearSelection$$($clientId$$8_selectionHandler$$6$$) {
  ($clientId$$8_selectionHandler$$6$$ = this.$_selectionHandlers$[$clientId$$8_selectionHandler$$6$$]) && $clientId$$8_selectionHandler$$6$$.$clearSelection$()
};
$JSCompiler_prototypeAlias$$.$OnMouseOver$ = function $$JSCompiler_prototypeAlias$$$$OnMouseOver$$($event$$498$$) {
  var $obj$$206$$ = this.$GetLogicalObject$($event$$498$$.target);
  $obj$$206$$ && ($obj$$206$$.$getShowPopupBehaviors$ && $obj$$206$$.$getDataLayer$) && (this.$_tmap$.$_eventClientId$ = $obj$$206$$.$getDataLayer$().$getClientId$());
  $DvtThematicMapEventManager$$.$superclass$.$OnMouseOver$.call(this, $event$$498$$)
};
$JSCompiler_prototypeAlias$$.$OnMouseOut$ = function $$JSCompiler_prototypeAlias$$$$OnMouseOut$$($event$$499$$) {
  this.$_tmap$.$_eventClientId$ = $JSCompiler_alias_NULL$$;
  $DvtThematicMapEventManager$$.$superclass$.$OnMouseOut$.call(this, $event$$499$$)
};
$JSCompiler_prototypeAlias$$.$OnClick$ = function $$JSCompiler_prototypeAlias$$$$OnClick$$($event$$500$$) {
  var $obj$$207$$ = this.$GetLogicalObject$($event$$500$$.target);
  $JSCompiler_StaticMethods_SetClickInfo$$(this, $obj$$207$$);
  if(!$obj$$207$$ || !$obj$$207$$.$isSelectable$ || !$obj$$207$$.$isSelectable$()) {
    for(var $clientId$$9$$ in this.$_selectionHandlers$) {
      if(this.$_selectionHandlers$[$clientId$$9$$].$processClick$($JSCompiler_alias_NULL$$, $event$$500$$.ctrlKey)) {
        var $selectionEvent$$1$$ = dvt.$EventFactory$.$newSelectionEvent$([]);
        $selectionEvent$$1$$.clientId = $clientId$$9$$;
        this.$_callback$.call(this.$_callbackObj$, $selectionEvent$$1$$)
      }
    }
  }
  $DvtThematicMapEventManager$$.$superclass$.$OnClick$.call(this, $event$$500$$);
  this.$_handleClick$($obj$$207$$, $event$$500$$.pageX, $event$$500$$.pageY)
};
$JSCompiler_prototypeAlias$$.$_handleClick$ = function $$JSCompiler_prototypeAlias$$$$_handleClick$$($obj$$208$$, $pageX$$6$$, $pageY$$6$$) {
  if($obj$$208$$ instanceof $DvtMapObjPeer$$) {
    var $callback$$120$$ = $obj$$208$$.$getLinkCallback$();
    $callback$$120$$ ? $callback$$120$$.call() : $obj$$208$$.$getAction$() != $JSCompiler_alias_NULL$$ ? $JSCompiler_StaticMethods_HandleAction$$(this, $obj$$208$$, $pageX$$6$$, $pageY$$6$$) : $obj$$208$$.$getShowPopupBehaviors$() && (this.$_tmap$.$_eventClientId$ = $obj$$208$$.$getDataLayer$().$getClientId$())
  }
};
function $JSCompiler_StaticMethods_HandleAction$$($JSCompiler_StaticMethods_HandleAction$self$$, $obj$$209_offset$$32$$, $pageX$$7$$, $pageY$$7$$) {
  var $actionEvent$$ = new dvt.$MapActionEvent$($obj$$209_offset$$32$$.$getClientId$(), $obj$$209_offset$$32$$.getId(), $obj$$209_offset$$32$$.$getAction$());
  $actionEvent$$.$addParam$("clientId", $obj$$209_offset$$32$$.$getDataLayer$().$getClientId$());
  $pageX$$7$$ != $JSCompiler_alias_NULL$$ && $pageY$$7$$ != $JSCompiler_alias_NULL$$ && ($obj$$209_offset$$32$$ = $JSCompiler_StaticMethods_HandleAction$self$$.$_tmap$.$getCtx$().$pageToStageCoords$($pageX$$7$$, $pageY$$7$$), $actionEvent$$.$addParam$("pointXY", {x:$obj$$209_offset$$32$$.x, y:$obj$$209_offset$$32$$.y}));
  $JSCompiler_StaticMethods_HandleAction$self$$.$hideTooltip$();
  $JSCompiler_StaticMethods_HandleAction$self$$.$_callback$.call($JSCompiler_StaticMethods_HandleAction$self$$.$_callbackObj$, $actionEvent$$)
}
function $JSCompiler_StaticMethods_SetClickInfo$$($JSCompiler_StaticMethods_SetClickInfo$self$$, $obj$$210$$) {
  var $clientId$$10$$ = $JSCompiler_alias_NULL$$, $dataLayer$$12_mapLayer$$1$$ = $JSCompiler_alias_NULL$$, $clickedObj$$ = $JSCompiler_alias_NULL$$;
  $obj$$210$$ && ($obj$$210$$ instanceof $DvtMapObjPeer$$ ? $clickedObj$$ = $obj$$210$$.$getDisplayable$() : $obj$$210$$ instanceof $DvtMapArea$$ && ($clickedObj$$ = $obj$$210$$), $obj$$210$$.$getDataLayer$ && ($dataLayer$$12_mapLayer$$1$$ = $obj$$210$$.$getDataLayer$(), $clientId$$10$$ = $dataLayer$$12_mapLayer$$1$$.$getClientId$(), $dataLayer$$12_mapLayer$$1$$ = $dataLayer$$12_mapLayer$$1$$.$_parentLayer$.$LayerName$));
  var $JSCompiler_StaticMethods_setClickInfo$self$$inline_4767$$ = $JSCompiler_StaticMethods_SetClickInfo$self$$.$_tmap$;
  $JSCompiler_StaticMethods_setClickInfo$self$$inline_4767$$.$_clickedLayerName$ = $dataLayer$$12_mapLayer$$1$$;
  $JSCompiler_StaticMethods_setClickInfo$self$$inline_4767$$.$_clickedDataLayerId$ = $clientId$$10$$;
  $JSCompiler_StaticMethods_setClickInfo$self$$inline_4767$$.$_clickedObject$ = $clickedObj$$
}
$JSCompiler_prototypeAlias$$.$OnDblClickInternal$ = function $$JSCompiler_prototypeAlias$$$$OnDblClickInternal$$($drillEvent_event$$501_obj$$211$$) {
  $drillEvent_event$$501_obj$$211$$ = this.$GetLogicalObject$($drillEvent_event$$501_obj$$211$$.target);
  this.$getSelectionHandler$($drillEvent_event$$501_obj$$211$$) && (this.$_drillMode$ && "none" != this.$_drillMode$) && ($drillEvent_event$$501_obj$$211$$ = new dvt.$MapDrillEvent$(dvt.$MapDrillEvent$.$DRILL_DOWN$), this.$_callback$.call(this.$_callbackObj$, $drillEvent_event$$501_obj$$211$$))
};
$JSCompiler_prototypeAlias$$.$ProcessKeyboardEvent$ = function $$JSCompiler_prototypeAlias$$$$ProcessKeyboardEvent$$($event$$502$$) {
  var $eventConsumed$$5$$ = $JSCompiler_alias_TRUE$$, $keyCode$$33$$ = $event$$502$$.keyCode, $JSCompiler_StaticMethods_fitRegion$self$$inline_4772_focusObj$$3_legendPanel$$ = this.$getFocus$(), $callback$$121_focusDisp$$1_toFit$$inline_4773$$ = $JSCompiler_StaticMethods_fitRegion$self$$inline_4772_focusObj$$3_legendPanel$$.$getDisplayable$();
  $keyCode$$33$$ != dvt.$KeyboardEvent$.$TAB$ && this.$_bPassOnEvent$ ? ($callback$$121_focusDisp$$1_toFit$$inline_4773$$.$fireKeyboardListener$($event$$502$$), $event$$502$$.preventDefault()) : ($keyCode$$33$$ == dvt.$KeyboardEvent$.ZERO || $keyCode$$33$$ == dvt.$KeyboardEvent$.$NUMPAD_ZERO$) && $event$$502$$.ctrlKey && $event$$502$$.shiftKey ? (this.$_tmap$.$resetMap$(), $event$$502$$.preventDefault()) : $keyCode$$33$$ == dvt.$KeyboardEvent$.$BACK_SLASH$ ? (($JSCompiler_StaticMethods_fitRegion$self$$inline_4772_focusObj$$3_legendPanel$$ = 
  this.$_tmap$.$_legendPanel$) && ($JSCompiler_StaticMethods_fitRegion$self$$inline_4772_focusObj$$3_legendPanel$$ instanceof dvt.$CollapsiblePanel$ ? $JSCompiler_StaticMethods_fitRegion$self$$inline_4772_focusObj$$3_legendPanel$$.$setCollapsed$(!$JSCompiler_StaticMethods_fitRegion$self$$inline_4772_focusObj$$3_legendPanel$$.isCollapsed()) : $JSCompiler_StaticMethods_fitRegion$self$$inline_4772_focusObj$$3_legendPanel$$ instanceof dvt.$PanelDrawer$ && $JSCompiler_StaticMethods_fitRegion$self$$inline_4772_focusObj$$3_legendPanel$$.$setDisclosed$(!$JSCompiler_StaticMethods_fitRegion$self$$inline_4772_focusObj$$3_legendPanel$$.$isDisclosed$())), 
  $event$$502$$.preventDefault()) : $keyCode$$33$$ == dvt.$KeyboardEvent$.$ENTER$ ? $JSCompiler_StaticMethods_fitRegion$self$$inline_4772_focusObj$$3_legendPanel$$ instanceof $DvtMapObjPeer$$ && (($callback$$121_focusDisp$$1_toFit$$inline_4773$$ = $JSCompiler_StaticMethods_fitRegion$self$$inline_4772_focusObj$$3_legendPanel$$.$getLinkCallback$()) ? $callback$$121_focusDisp$$1_toFit$$inline_4773$$.call() : $JSCompiler_StaticMethods_fitRegion$self$$inline_4772_focusObj$$3_legendPanel$$.$getAction$() != 
  $JSCompiler_alias_NULL$$ ? $JSCompiler_StaticMethods_HandleAction$$(this, $JSCompiler_StaticMethods_fitRegion$self$$inline_4772_focusObj$$3_legendPanel$$) : $event$$502$$.shiftKey ? this.$_tmap$.$drillUp$() : this.$_tmap$.$drillDown$(), $event$$502$$.preventDefault()) : $keyCode$$33$$ == dvt.$KeyboardEvent$.$SPACE$ && $event$$502$$.ctrlKey ? ($JSCompiler_StaticMethods_SetClickInfo$$(this, $JSCompiler_StaticMethods_fitRegion$self$$inline_4772_focusObj$$3_legendPanel$$), this.$ProcessSelectionEventHelper$($JSCompiler_StaticMethods_fitRegion$self$$inline_4772_focusObj$$3_legendPanel$$, 
  $JSCompiler_alias_TRUE$$), $event$$502$$.preventDefault()) : ($keyCode$$33$$ == dvt.$KeyboardEvent$.ZERO || $keyCode$$33$$ == dvt.$KeyboardEvent$.$NUMPAD_ZERO$) && $event$$502$$.ctrlKey ? ($event$$502$$.altKey ? ($JSCompiler_StaticMethods_fitRegion$self$$inline_4772_focusObj$$3_legendPanel$$ = this.$_tmap$, $callback$$121_focusDisp$$1_toFit$$inline_4773$$ || ($callback$$121_focusDisp$$1_toFit$$inline_4773$$ = $JSCompiler_StaticMethods_fitRegion$self$$inline_4772_focusObj$$3_legendPanel$$.$_zoomToFitObject$), 
  $callback$$121_focusDisp$$1_toFit$$inline_4773$$ || ($callback$$121_focusDisp$$1_toFit$$inline_4773$$ = $JSCompiler_StaticMethods_fitRegion$self$$inline_4772_focusObj$$3_legendPanel$$.$_clickedObject$), $JSCompiler_StaticMethods_fitRegion$self$$inline_4772_focusObj$$3_legendPanel$$.$_zoomToFitBounds$($callback$$121_focusDisp$$1_toFit$$inline_4773$$.$getDimensions$())) : $JSCompiler_StaticMethods_fitSelectedRegions$$(this.$_tmap$), $event$$502$$.preventDefault()) : $keyCode$$33$$ == dvt.$KeyboardEvent$.$TAB$ && 
  $callback$$121_focusDisp$$1_toFit$$inline_4773$$ instanceof $DvtCustomDataItem$$ ? !$event$$502$$.shiftKey && $JSCompiler_StaticMethods_fitRegion$self$$inline_4772_focusObj$$3_legendPanel$$.$isShowingKeyboardFocusEffect$() ? ($JSCompiler_StaticMethods_fitRegion$self$$inline_4772_focusObj$$3_legendPanel$$.$hideKeyboardFocusEffect$(), $callback$$121_focusDisp$$1_toFit$$inline_4773$$.$fireKeyboardListener$($event$$502$$), $event$$502$$.preventDefault(), this.$_bPassOnEvent$ = $JSCompiler_alias_TRUE$$) : 
  ($event$$502$$.shiftKey && this.$_bPassOnEvent$ ? (this.$ShowFocusEffect$($event$$502$$, $JSCompiler_StaticMethods_fitRegion$self$$inline_4772_focusObj$$3_legendPanel$$), $event$$502$$.preventDefault()) : (this.$_bPassOnEvent$ && $JSCompiler_StaticMethods_fitRegion$self$$inline_4772_focusObj$$3_legendPanel$$.$showKeyboardFocusEffect$(), $eventConsumed$$5$$ = $DvtThematicMapEventManager$$.$superclass$.$ProcessKeyboardEvent$.call(this, $event$$502$$)), this.$_bPassOnEvent$ = $JSCompiler_alias_FALSE$$) : 
  $eventConsumed$$5$$ = $DvtThematicMapEventManager$$.$superclass$.$ProcessKeyboardEvent$.call(this, $event$$502$$);
  return $eventConsumed$$5$$
};
$JSCompiler_prototypeAlias$$.$OnComponentTouchClick$ = function $$JSCompiler_prototypeAlias$$$$OnComponentTouchClick$$($event$$503$$) {
  if(!this.$GetEventInfo$($event$$503$$, dvt.$PanZoomCanvasEventManager$.$EVENT_INFO_PANNED_KEY$)) {
    var $obj$$212$$ = this.$GetLogicalObject$($event$$503$$.target);
    $JSCompiler_StaticMethods_SetClickInfo$$(this, $obj$$212$$);
    if($obj$$212$$ instanceof dvt.$ThematicMap$) {
      for(var $clientId$$11$$ in this.$_selectionHandlers$) {
        if(this.$_selectionHandlers$[$clientId$$11$$].$processClick$($JSCompiler_alias_NULL$$, $event$$503$$.ctrlKey)) {
          for(var $selectedObjs$$2_selectionEvent$$2$$ = this.$_selectionHandlers$[$clientId$$11$$].getSelection(), $selectedIds$$7$$ = [], $i$$610$$ = 0;$i$$610$$ < $selectedObjs$$2_selectionEvent$$2$$.length;$i$$610$$++) {
            $selectedIds$$7$$.push($selectedObjs$$2_selectionEvent$$2$$[$i$$610$$].getId())
          }
          $selectedObjs$$2_selectionEvent$$2$$ = dvt.$EventFactory$.$newSelectionEvent$($selectedIds$$7$$);
          this.$_callback$.call(this.$_callbackObj$, $selectedObjs$$2_selectionEvent$$2$$)
        }
      }
    }
    $DvtThematicMapEventManager$$.$superclass$.$OnComponentTouchClick$.call(this, $event$$503$$);
    this.$_handleClick$($obj$$212$$, $event$$503$$.$touch$.pageX, $event$$503$$.$touch$.pageY)
  }
};
$JSCompiler_prototypeAlias$$.$HandleTouchHoverStartInternal$ = function $$JSCompiler_prototypeAlias$$$$HandleTouchHoverStartInternal$$($event$$504_obj$$213$$) {
  $event$$504_obj$$213$$ = this.$GetLogicalObject$($event$$504_obj$$213$$.target);
  this.$_tmap$.$_eventClientId$ = $event$$504_obj$$213$$ && $event$$504_obj$$213$$.$getShowPopupBehaviors$ && $event$$504_obj$$213$$.$getDataLayer$ ? $event$$504_obj$$213$$.$getDataLayer$().$getClientId$() : $JSCompiler_alias_NULL$$
};
$JSCompiler_prototypeAlias$$.$HandleTouchHoverOverInternal$ = function $$JSCompiler_prototypeAlias$$$$HandleTouchHoverOverInternal$$($event$$505_obj$$214$$) {
  $event$$505_obj$$214$$ = this.$GetLogicalObject$($event$$505_obj$$214$$.target);
  this.$_tmap$.$_eventClientId$ = $event$$505_obj$$214$$ && $event$$505_obj$$214$$.$getShowPopupBehaviors$ && $event$$505_obj$$214$$.$getDataLayer$ ? $event$$505_obj$$214$$.$getDataLayer$().$getClientId$() : $JSCompiler_alias_NULL$$
};
$JSCompiler_prototypeAlias$$.$HandleTouchDblClickInternal$ = function $$JSCompiler_prototypeAlias$$$$HandleTouchDblClickInternal$$($drillEvent$$1_event$$506$$) {
  var $obj$$215$$ = this.$GetLogicalObject$($drillEvent$$1_event$$506$$.target);
  $obj$$215$$ && (this.$getSelectionHandler$($obj$$215$$) && this.$_drillMode$ && "none" != this.$_drillMode$) && (this.$ProcessSelectionEventHelper$($obj$$215$$, $drillEvent$$1_event$$506$$.ctrlKey), $drillEvent$$1_event$$506$$ = new dvt.$MapDrillEvent$(dvt.$MapDrillEvent$.$DRILL_DOWN$), this.$_callback$.call(this.$_callbackObj$, $drillEvent$$1_event$$506$$))
};
$JSCompiler_prototypeAlias$$.$HandleTouchActionsEnd$ = function $$JSCompiler_prototypeAlias$$$$HandleTouchActionsEnd$$($event$$507$$, $touch$$17$$) {
  var $obj$$216$$ = this.$GetLogicalObject$($event$$507$$.target);
  $JSCompiler_StaticMethods_SetClickInfo$$(this, $obj$$216$$);
  $DvtThematicMapEventManager$$.$superclass$.$HandleTouchActionsEnd$.call(this, $event$$507$$, $touch$$17$$)
};
$JSCompiler_prototypeAlias$$.$ProcessRolloverEvent$ = function $$JSCompiler_prototypeAlias$$$$ProcessRolloverEvent$$($event$$508_options$$258$$, $categories$$26_hoverBehaviorDelay$$6_obj$$217$$, $bOver$$12_rolloverEvent$$7$$) {
  $event$$508_options$$258$$ = this.$_tmap$.$getOptions$();
  "dim" == $event$$508_options$$258$$.hoverBehavior && ($categories$$26_hoverBehaviorDelay$$6_obj$$217$$ = $categories$$26_hoverBehaviorDelay$$6_obj$$217$$.$getCategories$ ? $categories$$26_hoverBehaviorDelay$$6_obj$$217$$.$getCategories$() : [], $event$$508_options$$258$$.highlightedCategories = $bOver$$12_rolloverEvent$$7$$ ? $categories$$26_hoverBehaviorDelay$$6_obj$$217$$.slice() : $JSCompiler_alias_NULL$$, $bOver$$12_rolloverEvent$$7$$ = dvt.$EventFactory$.$newCategoryHighlightEvent$($event$$508_options$$258$$.highlightedCategories, 
  $bOver$$12_rolloverEvent$$7$$), $categories$$26_hoverBehaviorDelay$$6_obj$$217$$ = dvt.$StyleUtils$.$getTimeMilliseconds$($event$$508_options$$258$$.styleDefaults.hoverBehaviorDelay), this.$RolloverHandler$.$processEvent$($bOver$$12_rolloverEvent$$7$$, $JSCompiler_StaticMethods_getNavigableAreas$$(this.$_tmap$).concat($JSCompiler_StaticMethods_getNavigableObjects$$(this.$_tmap$)), $categories$$26_hoverBehaviorDelay$$6_obj$$217$$, "any" == $event$$508_options$$258$$.highlightMatch))
};
$JSCompiler_prototypeAlias$$.$GetTouchResponse$ = function $$JSCompiler_prototypeAlias$$$$GetTouchResponse$$() {
  var $options$$259$$ = this.$_tmap$.$getOptions$();
  return"none" !== $options$$259$$.panning || "none" !== $options$$259$$.zooming ? dvt.$EventManager$.$TOUCH_RESPONSE_TOUCH_HOLD$ : $options$$259$$.touchResponse === dvt.$EventManager$.$TOUCH_RESPONSE_TOUCH_START$ ? dvt.$EventManager$.$TOUCH_RESPONSE_TOUCH_START$ : dvt.$EventManager$.$TOUCH_RESPONSE_AUTO$
};
$JSCompiler_prototypeAlias$$.$StoreInfoByEventType$ = function $$JSCompiler_prototypeAlias$$$$StoreInfoByEventType$$($key$$68$$) {
  return $key$$68$$ == dvt.$PanZoomCanvasEventManager$.$EVENT_INFO_PANNED_KEY$ ? $JSCompiler_alias_FALSE$$ : $DvtThematicMapEventManager$$.$superclass$.$StoreInfoByEventType$.call(this, $key$$68$$)
};
function $DvtThematicMapJsonParser$$($tmap$$11$$) {
  this.Init($tmap$$11$$)
}
dvt.$Obj$.$createSubclass$($DvtThematicMapJsonParser$$, dvt.$Obj$);
$JSCompiler_prototypeAlias$$ = $DvtThematicMapJsonParser$$.prototype;
$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($tmap$$12$$) {
  this.$_tmap$ = $tmap$$12$$;
  this.$_isCustomBasemap$ = $JSCompiler_alias_FALSE$$;
  this.$_areaLayerStyle$ = $JSCompiler_alias_NULL$$;
  this.$_isMobile$ = dvt.$Agent$.$isTouchDevice$();
  this.$_customAreaLayerImages$ = {};
  this.$_customMarkerDefs$ = {}
};
$JSCompiler_prototypeAlias$$.parse = function $$JSCompiler_prototypeAlias$$$parse$($options$$260$$) {
  var $JSCompiler_StaticMethods_setMapName$self$$inline_6586_animDur$$inline_4789_areaLayers$$inline_4807_childNodes$$inline_4801_maxZoomFactor$$inline_6617_popups$$inline_4791_styles$$inline_4797_tooltipDisplay$$inline_4790$$ = $options$$260$$.animationDuration;
  "string" == typeof $JSCompiler_StaticMethods_setMapName$self$$inline_6586_animDur$$inline_4789_areaLayers$$inline_4807_childNodes$$inline_4801_maxZoomFactor$$inline_6617_popups$$inline_4791_styles$$inline_4797_tooltipDisplay$$inline_4790$$ ? "ms" == $JSCompiler_StaticMethods_setMapName$self$$inline_6586_animDur$$inline_4789_areaLayers$$inline_4807_childNodes$$inline_4801_maxZoomFactor$$inline_6617_popups$$inline_4791_styles$$inline_4797_tooltipDisplay$$inline_4790$$.slice(-2) ? $JSCompiler_StaticMethods_setMapName$self$$inline_6586_animDur$$inline_4789_areaLayers$$inline_4807_childNodes$$inline_4801_maxZoomFactor$$inline_6617_popups$$inline_4791_styles$$inline_4797_tooltipDisplay$$inline_4790$$ = 
  parseInt($JSCompiler_StaticMethods_setMapName$self$$inline_6586_animDur$$inline_4789_areaLayers$$inline_4807_childNodes$$inline_4801_maxZoomFactor$$inline_6617_popups$$inline_4791_styles$$inline_4797_tooltipDisplay$$inline_4790$$.slice(0, -2)) / 1E3 : "s" == $JSCompiler_StaticMethods_setMapName$self$$inline_6586_animDur$$inline_4789_areaLayers$$inline_4807_childNodes$$inline_4801_maxZoomFactor$$inline_6617_popups$$inline_4791_styles$$inline_4797_tooltipDisplay$$inline_4790$$.slice(-1) && ($JSCompiler_StaticMethods_setMapName$self$$inline_6586_animDur$$inline_4789_areaLayers$$inline_4807_childNodes$$inline_4801_maxZoomFactor$$inline_6617_popups$$inline_4791_styles$$inline_4797_tooltipDisplay$$inline_4790$$ = 
  parseFloat($JSCompiler_StaticMethods_setMapName$self$$inline_6586_animDur$$inline_4789_areaLayers$$inline_4807_childNodes$$inline_4801_maxZoomFactor$$inline_6617_popups$$inline_4791_styles$$inline_4797_tooltipDisplay$$inline_4790$$.slice(0, -1))) : $JSCompiler_StaticMethods_setMapName$self$$inline_6586_animDur$$inline_4789_areaLayers$$inline_4807_childNodes$$inline_4801_maxZoomFactor$$inline_6617_popups$$inline_4791_styles$$inline_4797_tooltipDisplay$$inline_4790$$ /= 1E3;
  this.$_tmap$.$setAnimationDuration$($JSCompiler_StaticMethods_setMapName$self$$inline_6586_animDur$$inline_4789_areaLayers$$inline_4807_childNodes$$inline_4801_maxZoomFactor$$inline_6617_popups$$inline_4791_styles$$inline_4797_tooltipDisplay$$inline_4790$$);
  this.$_tmap$.$_animationOnDisplay$ = "auto" == $options$$260$$.animationOnDisplay ? "alphaFade" : $options$$260$$.animationOnDisplay;
  this.$_tmap$.$_animationOnMapChange$ = "auto" == $options$$260$$.animationOnMapChange ? "alphaFade" : $options$$260$$.animationOnMapChange;
  this.$_isCustomBasemap$ = $options$$260$$.source != $JSCompiler_alias_NULL$$;
  var $JSCompiler_StaticMethods_setMapName$self$$inline_6586_animDur$$inline_4789_areaLayers$$inline_4807_childNodes$$inline_4801_maxZoomFactor$$inline_6617_popups$$inline_4791_styles$$inline_4797_tooltipDisplay$$inline_4790$$ = this.$_tmap$, $attr$$inline_6587_basemap$$inline_4808_i$$inline_4804$$ = this.$_isCustomBasemap$ ? "$" + $options$$260$$.basemap : $options$$260$$.basemap;
  $JSCompiler_StaticMethods_setMapName$self$$inline_6586_animDur$$inline_4789_areaLayers$$inline_4807_childNodes$$inline_4801_maxZoomFactor$$inline_6617_popups$$inline_4791_styles$$inline_4797_tooltipDisplay$$inline_4790$$.$_bBaseMapChanged$ = $JSCompiler_StaticMethods_setMapName$self$$inline_6586_animDur$$inline_4789_areaLayers$$inline_4807_childNodes$$inline_4801_maxZoomFactor$$inline_6617_popups$$inline_4791_styles$$inline_4797_tooltipDisplay$$inline_4790$$.$_mapName$ && $JSCompiler_StaticMethods_setMapName$self$$inline_6586_animDur$$inline_4789_areaLayers$$inline_4807_childNodes$$inline_4801_maxZoomFactor$$inline_6617_popups$$inline_4791_styles$$inline_4797_tooltipDisplay$$inline_4790$$.$_mapName$ != 
  $attr$$inline_6587_basemap$$inline_4808_i$$inline_4804$$;
  $JSCompiler_StaticMethods_setMapName$self$$inline_6586_animDur$$inline_4789_areaLayers$$inline_4807_childNodes$$inline_4801_maxZoomFactor$$inline_6617_popups$$inline_4791_styles$$inline_4797_tooltipDisplay$$inline_4790$$.$_mapName$ = $attr$$inline_6587_basemap$$inline_4808_i$$inline_4804$$;
  this.$_tmap$.$setFeaturesOff$($options$$260$$.featuresOff);
  this.$_tmap$.$setControlPanelBehavior$($options$$260$$.controlPanelBehavior);
  $JSCompiler_StaticMethods_setMapName$self$$inline_6586_animDur$$inline_4789_areaLayers$$inline_4807_childNodes$$inline_4801_maxZoomFactor$$inline_6617_popups$$inline_4791_styles$$inline_4797_tooltipDisplay$$inline_4790$$ = $options$$260$$.tooltipDisplay;
  "shortDesc" == $JSCompiler_StaticMethods_setMapName$self$$inline_6586_animDur$$inline_4789_areaLayers$$inline_4807_childNodes$$inline_4801_maxZoomFactor$$inline_6617_popups$$inline_4791_styles$$inline_4797_tooltipDisplay$$inline_4790$$ ? $JSCompiler_StaticMethods_setMapName$self$$inline_6586_animDur$$inline_4789_areaLayers$$inline_4807_childNodes$$inline_4801_maxZoomFactor$$inline_6617_popups$$inline_4791_styles$$inline_4797_tooltipDisplay$$inline_4790$$ = "shortDescOnly" : "labelAndShortDesc" == 
  $JSCompiler_StaticMethods_setMapName$self$$inline_6586_animDur$$inline_4789_areaLayers$$inline_4807_childNodes$$inline_4801_maxZoomFactor$$inline_6617_popups$$inline_4791_styles$$inline_4797_tooltipDisplay$$inline_4790$$ && ($JSCompiler_StaticMethods_setMapName$self$$inline_6586_animDur$$inline_4789_areaLayers$$inline_4807_childNodes$$inline_4801_maxZoomFactor$$inline_6617_popups$$inline_4791_styles$$inline_4797_tooltipDisplay$$inline_4790$$ = "auto");
  this.$_tmap$.$_displayTooltips$ = $JSCompiler_StaticMethods_setMapName$self$$inline_6586_animDur$$inline_4789_areaLayers$$inline_4807_childNodes$$inline_4801_maxZoomFactor$$inline_6617_popups$$inline_4791_styles$$inline_4797_tooltipDisplay$$inline_4790$$;
  ($JSCompiler_StaticMethods_setMapName$self$$inline_6586_animDur$$inline_4789_areaLayers$$inline_4807_childNodes$$inline_4801_maxZoomFactor$$inline_6617_popups$$inline_4791_styles$$inline_4797_tooltipDisplay$$inline_4790$$ = $options$$260$$.popups) && this.$_tmap$.$setShowPopupBehaviors$(this.$_getShowPopupBehaviors$($JSCompiler_StaticMethods_setMapName$self$$inline_6586_animDur$$inline_4789_areaLayers$$inline_4807_childNodes$$inline_4801_maxZoomFactor$$inline_6617_popups$$inline_4791_styles$$inline_4797_tooltipDisplay$$inline_4790$$));
  this.$_tmap$.$setDrillMode$($options$$260$$.drilling);
  this.$_tmap$.$_animationOnDrill$ = $options$$260$$.animationOnDrill;
  this.$_tmap$.$_initialZooming$ = "auto" == $options$$260$$.initialZooming;
  this.$_tmap$.$_isMarkerZoomBehaviorFixed$ = "fixed" == $options$$260$$.markerZoomBehavior;
  this.$_tmap$.$_panning$ = "auto" == $options$$260$$.panning;
  this.$_tmap$.$_zooming$ = "auto" == $options$$260$$.zooming;
  this.$_tmap$.$_initialCenterX$ = $options$$260$$.panX;
  this.$_tmap$.$_initialCenterY$ = $options$$260$$.panY;
  this.$_tmap$.$_initialZoom$ = $options$$260$$.zoom;
  isNaN($options$$260$$.maxZoom) || ($JSCompiler_StaticMethods_setMapName$self$$inline_6586_animDur$$inline_4789_areaLayers$$inline_4807_childNodes$$inline_4801_maxZoomFactor$$inline_6617_popups$$inline_4791_styles$$inline_4797_tooltipDisplay$$inline_4790$$ = Math.max($options$$260$$.maxZoom, 1), this.$_tmap$.$_maxZoomFactor$ = $JSCompiler_StaticMethods_setMapName$self$$inline_6586_animDur$$inline_4789_areaLayers$$inline_4807_childNodes$$inline_4801_maxZoomFactor$$inline_6617_popups$$inline_4791_styles$$inline_4797_tooltipDisplay$$inline_4790$$);
  $options$$260$$._legend && (this.$_tmap$.$_legendData$ = $options$$260$$._legend);
  $JSCompiler_StaticMethods_setMapName$self$$inline_6586_animDur$$inline_4789_areaLayers$$inline_4807_childNodes$$inline_4801_maxZoomFactor$$inline_6617_popups$$inline_4791_styles$$inline_4797_tooltipDisplay$$inline_4790$$ = $options$$260$$.styleDefaults;
  this.$_tmap$.$parseComponentJson$($JSCompiler_StaticMethods_setMapName$self$$inline_6586_animDur$$inline_4789_areaLayers$$inline_4807_childNodes$$inline_4801_maxZoomFactor$$inline_6617_popups$$inline_4791_styles$$inline_4797_tooltipDisplay$$inline_4790$$);
  this.$_areaLayerStyle$ = new dvt.$CSSStyle$($JSCompiler_StaticMethods_setMapName$self$$inline_6586_animDur$$inline_4789_areaLayers$$inline_4807_childNodes$$inline_4801_maxZoomFactor$$inline_6617_popups$$inline_4791_styles$$inline_4797_tooltipDisplay$$inline_4790$$.areaStyle);
  this.$_areaLayerStyle$.$parseInlineStyle$($JSCompiler_StaticMethods_setMapName$self$$inline_6586_animDur$$inline_4789_areaLayers$$inline_4807_childNodes$$inline_4801_maxZoomFactor$$inline_6617_popups$$inline_4791_styles$$inline_4797_tooltipDisplay$$inline_4790$$.labelStyle);
  this.$_areaDropSiteStyle$ = new dvt.$CSSStyle$($JSCompiler_StaticMethods_setMapName$self$$inline_6586_animDur$$inline_4789_areaLayers$$inline_4807_childNodes$$inline_4801_maxZoomFactor$$inline_6617_popups$$inline_4791_styles$$inline_4797_tooltipDisplay$$inline_4790$$.dropTargetStyle);
  this.$_tmap$.$_styleDefaults$ = $JSCompiler_StaticMethods_setMapName$self$$inline_6586_animDur$$inline_4789_areaLayers$$inline_4807_childNodes$$inline_4801_maxZoomFactor$$inline_6617_popups$$inline_4791_styles$$inline_4797_tooltipDisplay$$inline_4790$$;
  if(this.$_isCustomBasemap$ && $options$$260$$.sourceXml) {
    for(var $JSCompiler_StaticMethods_setMapName$self$$inline_6586_animDur$$inline_4789_areaLayers$$inline_4807_childNodes$$inline_4801_maxZoomFactor$$inline_6617_popups$$inline_4791_styles$$inline_4797_tooltipDisplay$$inline_4790$$ = (new dvt.$XmlParser$(this.$_tmap$.$getCtx$())).parse($options$$260$$.sourceXml).$getChildNodes$(), $childNodes$$inline_6624_childNodes$$inline_6636_i$$inline_4809_node$$inline_4802$$, $areaLayer$$inline_4810_layerName$$inline_6625_node$$inline_6637_nodeName$$inline_4803_xmlNode$$inline_6623$$, 
    $attr$$inline_6587_basemap$$inline_4808_i$$inline_4804$$ = 0;$attr$$inline_6587_basemap$$inline_4808_i$$inline_4804$$ < $JSCompiler_StaticMethods_setMapName$self$$inline_6586_animDur$$inline_4789_areaLayers$$inline_4807_childNodes$$inline_4801_maxZoomFactor$$inline_6617_popups$$inline_4791_styles$$inline_4797_tooltipDisplay$$inline_4790$$.length;$attr$$inline_6587_basemap$$inline_4808_i$$inline_4804$$++) {
      if($childNodes$$inline_6624_childNodes$$inline_6636_i$$inline_4809_node$$inline_4802$$ = $JSCompiler_StaticMethods_setMapName$self$$inline_6586_animDur$$inline_4789_areaLayers$$inline_4807_childNodes$$inline_4801_maxZoomFactor$$inline_6617_popups$$inline_4791_styles$$inline_4797_tooltipDisplay$$inline_4790$$[$attr$$inline_6587_basemap$$inline_4808_i$$inline_4804$$], $areaLayer$$inline_4810_layerName$$inline_6625_node$$inline_6637_nodeName$$inline_4803_xmlNode$$inline_6623$$ = $childNodes$$inline_6624_childNodes$$inline_6636_i$$inline_4809_node$$inline_4802$$.getName(), 
      "layer" == $areaLayer$$inline_4810_layerName$$inline_6625_node$$inline_6637_nodeName$$inline_4803_xmlNode$$inline_6623$$) {
        $areaLayer$$inline_4810_layerName$$inline_6625_node$$inline_6637_nodeName$$inline_4803_xmlNode$$inline_6623$$ = $childNodes$$inline_6624_childNodes$$inline_6636_i$$inline_4809_node$$inline_4802$$;
        $childNodes$$inline_6624_childNodes$$inline_6636_i$$inline_4809_node$$inline_4802$$ = $areaLayer$$inline_4810_layerName$$inline_6625_node$$inline_6637_nodeName$$inline_4803_xmlNode$$inline_6623$$.$getChildNodes$();
        $areaLayer$$inline_4810_layerName$$inline_6625_node$$inline_6637_nodeName$$inline_4803_xmlNode$$inline_6623$$ = $areaLayer$$inline_4810_layerName$$inline_6625_node$$inline_6637_nodeName$$inline_4803_xmlNode$$inline_6623$$.$getAttr$("id");
        for(var $JSCompiler_StaticMethods_setAreaLayerImage$self$$inline_6643_areaNames$$inline_4813_dir$$inline_6632_labels$$inline_6640_node$$inline_6626_values$$inline_6665$$ = $JSCompiler_alias_VOID$$, $JSCompiler_temp_const$$5582_i$$inline_6641_image$$inline_6630_isRTL$$inline_6646_nodeName$$inline_6627$$ = $JSCompiler_alias_VOID$$, $images$$inline_6628_mapLayer$$inline_4812_nodeName$$inline_6638$$ = [], $children$$inline_6668_i$$inline_6629_images$$inline_6644_layer$$inline_4811_points$$inline_6639$$ = 
        0;$children$$inline_6668_i$$inline_6629_images$$inline_6644_layer$$inline_4811_points$$inline_6639$$ < $childNodes$$inline_6624_childNodes$$inline_6636_i$$inline_4809_node$$inline_4802$$.length;$children$$inline_6668_i$$inline_6629_images$$inline_6644_layer$$inline_4811_points$$inline_6639$$++) {
          if($JSCompiler_StaticMethods_setAreaLayerImage$self$$inline_6643_areaNames$$inline_4813_dir$$inline_6632_labels$$inline_6640_node$$inline_6626_values$$inline_6665$$ = $childNodes$$inline_6624_childNodes$$inline_6636_i$$inline_4809_node$$inline_4802$$[$children$$inline_6668_i$$inline_6629_images$$inline_6644_layer$$inline_4811_points$$inline_6639$$], $JSCompiler_temp_const$$5582_i$$inline_6641_image$$inline_6630_isRTL$$inline_6646_nodeName$$inline_6627$$ = $JSCompiler_StaticMethods_setAreaLayerImage$self$$inline_6643_areaNames$$inline_4813_dir$$inline_6632_labels$$inline_6640_node$$inline_6626_values$$inline_6665$$.getName(), 
          "image" == $JSCompiler_temp_const$$5582_i$$inline_6641_image$$inline_6630_isRTL$$inline_6646_nodeName$$inline_6627$$) {
            $JSCompiler_temp_const$$5582_i$$inline_6641_image$$inline_6630_isRTL$$inline_6646_nodeName$$inline_6627$$ = {};
            $JSCompiler_temp_const$$5582_i$$inline_6641_image$$inline_6630_isRTL$$inline_6646_nodeName$$inline_6627$$.source = $JSCompiler_StaticMethods_setAreaLayerImage$self$$inline_6643_areaNames$$inline_4813_dir$$inline_6632_labels$$inline_6640_node$$inline_6626_values$$inline_6665$$.$getAttr$("source");
            $JSCompiler_temp_const$$5582_i$$inline_6641_image$$inline_6630_isRTL$$inline_6646_nodeName$$inline_6627$$.width = Number($JSCompiler_StaticMethods_setAreaLayerImage$self$$inline_6643_areaNames$$inline_4813_dir$$inline_6632_labels$$inline_6640_node$$inline_6626_values$$inline_6665$$.$getAttr$("width"));
            $JSCompiler_temp_const$$5582_i$$inline_6641_image$$inline_6630_isRTL$$inline_6646_nodeName$$inline_6627$$.height = Number($JSCompiler_StaticMethods_setAreaLayerImage$self$$inline_6643_areaNames$$inline_4813_dir$$inline_6632_labels$$inline_6640_node$$inline_6626_values$$inline_6665$$.$getAttr$("height"));
            var $bidi$$inline_6631_refWidth$$inline_6647_shape$$inline_6645_shapes$$inline_6654$$ = $JSCompiler_StaticMethods_setAreaLayerImage$self$$inline_6643_areaNames$$inline_4813_dir$$inline_6632_labels$$inline_6640_node$$inline_6626_values$$inline_6665$$.$getAttr$("bidi"), $JSCompiler_StaticMethods_setAreaLayerImage$self$$inline_6643_areaNames$$inline_4813_dir$$inline_6632_labels$$inline_6640_node$$inline_6626_values$$inline_6665$$ = $JSCompiler_StaticMethods_setAreaLayerImage$self$$inline_6643_areaNames$$inline_4813_dir$$inline_6632_labels$$inline_6640_node$$inline_6626_values$$inline_6665$$.$getAttr$("dir");
            $JSCompiler_temp_const$$5582_i$$inline_6641_image$$inline_6630_isRTL$$inline_6646_nodeName$$inline_6627$$.dir = "true" == $bidi$$inline_6631_refWidth$$inline_6647_shape$$inline_6645_shapes$$inline_6654$$ || "rtl" == $JSCompiler_StaticMethods_setAreaLayerImage$self$$inline_6643_areaNames$$inline_4813_dir$$inline_6632_labels$$inline_6640_node$$inline_6626_values$$inline_6665$$ ? "rtl" : "ltr";
            $images$$inline_6628_mapLayer$$inline_4812_nodeName$$inline_6638$$.push($JSCompiler_temp_const$$5582_i$$inline_6641_image$$inline_6630_isRTL$$inline_6646_nodeName$$inline_6627$$)
          }
        }
        this.$_customAreaLayerImages$[$areaLayer$$inline_4810_layerName$$inline_6625_node$$inline_6637_nodeName$$inline_4803_xmlNode$$inline_6623$$] = $images$$inline_6628_mapLayer$$inline_4812_nodeName$$inline_6638$$
      }else {
        if("points" == $areaLayer$$inline_4810_layerName$$inline_6625_node$$inline_6637_nodeName$$inline_4803_xmlNode$$inline_6623$$) {
          $childNodes$$inline_6624_childNodes$$inline_6636_i$$inline_4809_node$$inline_4802$$ = $childNodes$$inline_6624_childNodes$$inline_6636_i$$inline_4809_node$$inline_4802$$.$getChildNodes$();
          $images$$inline_6628_mapLayer$$inline_4812_nodeName$$inline_6638$$ = $areaLayer$$inline_4810_layerName$$inline_6625_node$$inline_6637_nodeName$$inline_4803_xmlNode$$inline_6623$$ = $JSCompiler_alias_VOID$$;
          $children$$inline_6668_i$$inline_6629_images$$inline_6644_layer$$inline_4811_points$$inline_6639$$ = {};
          $JSCompiler_StaticMethods_setAreaLayerImage$self$$inline_6643_areaNames$$inline_4813_dir$$inline_6632_labels$$inline_6640_node$$inline_6626_values$$inline_6665$$ = {};
          for($JSCompiler_temp_const$$5582_i$$inline_6641_image$$inline_6630_isRTL$$inline_6646_nodeName$$inline_6627$$ = 0;$JSCompiler_temp_const$$5582_i$$inline_6641_image$$inline_6630_isRTL$$inline_6646_nodeName$$inline_6627$$ < $childNodes$$inline_6624_childNodes$$inline_6636_i$$inline_4809_node$$inline_4802$$.length;$JSCompiler_temp_const$$5582_i$$inline_6641_image$$inline_6630_isRTL$$inline_6646_nodeName$$inline_6627$$++) {
            $areaLayer$$inline_4810_layerName$$inline_6625_node$$inline_6637_nodeName$$inline_4803_xmlNode$$inline_6623$$ = $childNodes$$inline_6624_childNodes$$inline_6636_i$$inline_4809_node$$inline_4802$$[$JSCompiler_temp_const$$5582_i$$inline_6641_image$$inline_6630_isRTL$$inline_6646_nodeName$$inline_6627$$], $images$$inline_6628_mapLayer$$inline_4812_nodeName$$inline_6638$$ = $areaLayer$$inline_4810_layerName$$inline_6625_node$$inline_6637_nodeName$$inline_4803_xmlNode$$inline_6623$$.getName(), 
            "point" == $images$$inline_6628_mapLayer$$inline_4812_nodeName$$inline_6638$$ && ($children$$inline_6668_i$$inline_6629_images$$inline_6644_layer$$inline_4811_points$$inline_6639$$[$areaLayer$$inline_4810_layerName$$inline_6625_node$$inline_6637_nodeName$$inline_4803_xmlNode$$inline_6623$$.$getAttr$("name")] = [Number($areaLayer$$inline_4810_layerName$$inline_6625_node$$inline_6637_nodeName$$inline_4803_xmlNode$$inline_6623$$.$getAttr$("x")), Number($areaLayer$$inline_4810_layerName$$inline_6625_node$$inline_6637_nodeName$$inline_4803_xmlNode$$inline_6623$$.$getAttr$("y"))], 
            $JSCompiler_StaticMethods_setAreaLayerImage$self$$inline_6643_areaNames$$inline_4813_dir$$inline_6632_labels$$inline_6640_node$$inline_6626_values$$inline_6665$$[$areaLayer$$inline_4810_layerName$$inline_6625_node$$inline_6637_nodeName$$inline_4803_xmlNode$$inline_6623$$.$getAttr$("name")] = [$JSCompiler_alias_NULL$$, $areaLayer$$inline_4810_layerName$$inline_6625_node$$inline_6637_nodeName$$inline_4803_xmlNode$$inline_6623$$.$getAttr$("longLabel")])
          }
          $DvtBaseMapManager$$.$registerBaseMapLayer$(this.$_tmap$.$_mapName$, "cities", $JSCompiler_StaticMethods_setAreaLayerImage$self$$inline_6643_areaNames$$inline_4813_dir$$inline_6632_labels$$inline_6640_node$$inline_6626_values$$inline_6665$$, $children$$inline_6668_i$$inline_6629_images$$inline_6644_layer$$inline_4811_points$$inline_6639$$, $JSCompiler_alias_NULL$$, $JSCompiler_alias_NULL$$, 1)
        }
      }
    }
  }
  $JSCompiler_StaticMethods_setMapName$self$$inline_6586_animDur$$inline_4789_areaLayers$$inline_4807_childNodes$$inline_4801_maxZoomFactor$$inline_6617_popups$$inline_4791_styles$$inline_4797_tooltipDisplay$$inline_4790$$ = $options$$260$$.areaLayers;
  $attr$$inline_6587_basemap$$inline_4808_i$$inline_4804$$ = this.$_tmap$.$_mapName$;
  for($childNodes$$inline_6624_childNodes$$inline_6636_i$$inline_4809_node$$inline_4802$$ = 0;$childNodes$$inline_6624_childNodes$$inline_6636_i$$inline_4809_node$$inline_4802$$ < $JSCompiler_StaticMethods_setMapName$self$$inline_6586_animDur$$inline_4789_areaLayers$$inline_4807_childNodes$$inline_4801_maxZoomFactor$$inline_6617_popups$$inline_4791_styles$$inline_4797_tooltipDisplay$$inline_4790$$.length;$childNodes$$inline_6624_childNodes$$inline_6636_i$$inline_4809_node$$inline_4802$$++) {
    if($areaLayer$$inline_4810_layerName$$inline_6625_node$$inline_6637_nodeName$$inline_4803_xmlNode$$inline_6623$$ = dvt.$JsonUtils$.$merge$($JSCompiler_StaticMethods_setMapName$self$$inline_6586_animDur$$inline_4789_areaLayers$$inline_4807_childNodes$$inline_4801_maxZoomFactor$$inline_6617_popups$$inline_4791_styles$$inline_4797_tooltipDisplay$$inline_4790$$[$childNodes$$inline_6624_childNodes$$inline_6636_i$$inline_4809_node$$inline_4802$$], $DvtThematicMapDefaults$DEFAULT_AREA_LAYER$$), $children$$inline_6668_i$$inline_6629_images$$inline_6644_layer$$inline_4811_points$$inline_6639$$ = 
    $areaLayer$$inline_4810_layerName$$inline_6625_node$$inline_6637_nodeName$$inline_4803_xmlNode$$inline_6623$$.layer) {
      $areaLayer$$inline_4810_layerName$$inline_6625_node$$inline_6637_nodeName$$inline_4803_xmlNode$$inline_6623$$.areaStyle && this.$_areaLayerStyle$.$parseInlineStyle$($areaLayer$$inline_4810_layerName$$inline_6625_node$$inline_6637_nodeName$$inline_4803_xmlNode$$inline_6623$$.areaStyle);
      $areaLayer$$inline_4810_layerName$$inline_6625_node$$inline_6637_nodeName$$inline_4803_xmlNode$$inline_6623$$.labelStyle && this.$_areaLayerStyle$.$parseInlineStyle$($areaLayer$$inline_4810_layerName$$inline_6625_node$$inline_6637_nodeName$$inline_4803_xmlNode$$inline_6623$$.labelStyle);
      if(this.$_isCustomBasemap$) {
        $JSCompiler_StaticMethods_setAreaLayerImage$self$$inline_6643_areaNames$$inline_4813_dir$$inline_6632_labels$$inline_6640_node$$inline_6626_values$$inline_6665$$ = $images$$inline_6628_mapLayer$$inline_4812_nodeName$$inline_6638$$ = new $DvtMapCustomAreaLayer$$(this.$_tmap$, $children$$inline_6668_i$$inline_6629_images$$inline_6644_layer$$inline_4811_points$$inline_6639$$, $areaLayer$$inline_4810_layerName$$inline_6625_node$$inline_6637_nodeName$$inline_4803_xmlNode$$inline_6623$$.labelDisplay, 
        $areaLayer$$inline_4810_layerName$$inline_6625_node$$inline_6637_nodeName$$inline_4803_xmlNode$$inline_6623$$.labelType, this.$_tmap$.$getEventManager$());
        $children$$inline_6668_i$$inline_6629_images$$inline_6644_layer$$inline_4811_points$$inline_6639$$ = this.$_customAreaLayerImages$[$children$$inline_6668_i$$inline_6629_images$$inline_6644_layer$$inline_4811_points$$inline_6639$$];
        $bidi$$inline_6631_refWidth$$inline_6647_shape$$inline_6645_shapes$$inline_6654$$ = $JSCompiler_alias_NULL$$;
        $JSCompiler_temp_const$$5582_i$$inline_6641_image$$inline_6630_isRTL$$inline_6646_nodeName$$inline_6627$$ = dvt.$Agent$.$isRightToLeft$($JSCompiler_StaticMethods_setAreaLayerImage$self$$inline_6643_areaNames$$inline_4813_dir$$inline_6632_labels$$inline_6640_node$$inline_6626_values$$inline_6665$$.$_tmap$.$getCtx$());
        if($children$$inline_6668_i$$inline_6629_images$$inline_6644_layer$$inline_4811_points$$inline_6639$$ && 0 < $children$$inline_6668_i$$inline_6629_images$$inline_6644_layer$$inline_4811_points$$inline_6639$$.length) {
          var $bidi$$inline_6631_refWidth$$inline_6647_shape$$inline_6645_shapes$$inline_6654$$ = $children$$inline_6668_i$$inline_6629_images$$inline_6644_layer$$inline_4811_points$$inline_6639$$[0].width, $context$$inline_6655_refHeight$$inline_6648$$ = $children$$inline_6668_i$$inline_6629_images$$inline_6644_layer$$inline_4811_points$$inline_6639$$[0].height;
          $JSCompiler_StaticMethods_setAreaLayerImage$self$$inline_6643_areaNames$$inline_4813_dir$$inline_6632_labels$$inline_6640_node$$inline_6626_values$$inline_6665$$.$_layerWidth$ = $bidi$$inline_6631_refWidth$$inline_6647_shape$$inline_6645_shapes$$inline_6654$$;
          $JSCompiler_StaticMethods_setAreaLayerImage$self$$inline_6643_areaNames$$inline_4813_dir$$inline_6632_labels$$inline_6640_node$$inline_6626_values$$inline_6665$$.$_layerHeight$ = $context$$inline_6655_refHeight$$inline_6648$$;
          for(var $area$$inline_6656_locImages$$inline_6649$$ = [], $areaNames$$inline_6653_backgroundColor$$inline_6659_borderColor$$inline_6657_i$$inline_6650_stroke$$inline_6658$$ = 0;$areaNames$$inline_6653_backgroundColor$$inline_6659_borderColor$$inline_6657_i$$inline_6650_stroke$$inline_6658$$ < $children$$inline_6668_i$$inline_6629_images$$inline_6644_layer$$inline_4811_points$$inline_6639$$.length;$areaNames$$inline_6653_backgroundColor$$inline_6659_borderColor$$inline_6657_i$$inline_6650_stroke$$inline_6658$$++) {
            $JSCompiler_temp_const$$5582_i$$inline_6641_image$$inline_6630_isRTL$$inline_6646_nodeName$$inline_6627$$ && "rtl" == $children$$inline_6668_i$$inline_6629_images$$inline_6644_layer$$inline_4811_points$$inline_6639$$[$areaNames$$inline_6653_backgroundColor$$inline_6659_borderColor$$inline_6657_i$$inline_6650_stroke$$inline_6658$$].dir ? $area$$inline_6656_locImages$$inline_6649$$.push($children$$inline_6668_i$$inline_6629_images$$inline_6644_layer$$inline_4811_points$$inline_6639$$[$areaNames$$inline_6653_backgroundColor$$inline_6659_borderColor$$inline_6657_i$$inline_6650_stroke$$inline_6658$$]) : 
            !$JSCompiler_temp_const$$5582_i$$inline_6641_image$$inline_6630_isRTL$$inline_6646_nodeName$$inline_6627$$ && "ltr" == $children$$inline_6668_i$$inline_6629_images$$inline_6644_layer$$inline_4811_points$$inline_6639$$[$areaNames$$inline_6653_backgroundColor$$inline_6659_borderColor$$inline_6657_i$$inline_6650_stroke$$inline_6658$$].dir && $area$$inline_6656_locImages$$inline_6649$$.push($children$$inline_6668_i$$inline_6629_images$$inline_6644_layer$$inline_4811_points$$inline_6639$$[$areaNames$$inline_6653_backgroundColor$$inline_6659_borderColor$$inline_6657_i$$inline_6650_stroke$$inline_6658$$])
          }
          $JSCompiler_StaticMethods_setAreaLayerImage$self$$inline_6643_areaNames$$inline_4813_dir$$inline_6632_labels$$inline_6640_node$$inline_6626_values$$inline_6665$$.$_areaLayerImages$ = 0 < $area$$inline_6656_locImages$$inline_6649$$.length ? $area$$inline_6656_locImages$$inline_6649$$ : $children$$inline_6668_i$$inline_6629_images$$inline_6644_layer$$inline_4811_points$$inline_6639$$;
          $JSCompiler_StaticMethods_setAreaLayerImage$self$$inline_6643_areaNames$$inline_4813_dir$$inline_6632_labels$$inline_6640_node$$inline_6626_values$$inline_6665$$.$_imageSrc$ = $JSCompiler_StaticMethods__selectImageBasedOnResolution$$($JSCompiler_StaticMethods_setAreaLayerImage$self$$inline_6643_areaNames$$inline_4813_dir$$inline_6632_labels$$inline_6640_node$$inline_6626_values$$inline_6665$$);
          $bidi$$inline_6631_refWidth$$inline_6647_shape$$inline_6645_shapes$$inline_6654$$ = new dvt.$Image$($JSCompiler_StaticMethods_setAreaLayerImage$self$$inline_6643_areaNames$$inline_4813_dir$$inline_6632_labels$$inline_6640_node$$inline_6626_values$$inline_6665$$.$_tmap$.$getCtx$(), $JSCompiler_StaticMethods_setAreaLayerImage$self$$inline_6643_areaNames$$inline_4813_dir$$inline_6632_labels$$inline_6640_node$$inline_6626_values$$inline_6665$$.$_imageSrc$, 0, 0, $bidi$$inline_6631_refWidth$$inline_6647_shape$$inline_6645_shapes$$inline_6654$$, 
          $context$$inline_6655_refHeight$$inline_6648$$)
        }
        $bidi$$inline_6631_refWidth$$inline_6647_shape$$inline_6645_shapes$$inline_6654$$ && ($JSCompiler_StaticMethods_setAreaNames$$($JSCompiler_StaticMethods_setAreaLayerImage$self$$inline_6643_areaNames$$inline_4813_dir$$inline_6632_labels$$inline_6640_node$$inline_6626_values$$inline_6665$$, {image:[$JSCompiler_alias_NULL$$, $JSCompiler_alias_NULL$$]}), $JSCompiler_StaticMethods_setAreaLayerImage$self$$inline_6643_areaNames$$inline_4813_dir$$inline_6632_labels$$inline_6640_node$$inline_6626_values$$inline_6665$$.$AreaShapes$ = 
        {image:$bidi$$inline_6631_refWidth$$inline_6647_shape$$inline_6645_shapes$$inline_6654$$})
      }else {
        $images$$inline_6628_mapLayer$$inline_4812_nodeName$$inline_6638$$ = new $DvtMapAreaLayer$$(this.$_tmap$, $children$$inline_6668_i$$inline_6629_images$$inline_6644_layer$$inline_4811_points$$inline_6639$$, $areaLayer$$inline_4810_layerName$$inline_6625_node$$inline_6637_nodeName$$inline_4803_xmlNode$$inline_6623$$.labelDisplay, $areaLayer$$inline_4810_layerName$$inline_6625_node$$inline_6637_nodeName$$inline_4803_xmlNode$$inline_6623$$.labelType, this.$_tmap$.$getEventManager$());
        $JSCompiler_StaticMethods_setAreaLayerImage$self$$inline_6643_areaNames$$inline_4813_dir$$inline_6632_labels$$inline_6640_node$$inline_6626_values$$inline_6665$$ = $DvtBaseMapManager$$.$getAreaNames$($attr$$inline_6587_basemap$$inline_4808_i$$inline_4804$$, $children$$inline_6668_i$$inline_6629_images$$inline_6644_layer$$inline_4811_points$$inline_6639$$);
        $JSCompiler_temp_const$$5582_i$$inline_6641_image$$inline_6630_isRTL$$inline_6646_nodeName$$inline_6627$$ = $images$$inline_6628_mapLayer$$inline_4812_nodeName$$inline_6638$$;
        $areaNames$$inline_6653_backgroundColor$$inline_6659_borderColor$$inline_6657_i$$inline_6650_stroke$$inline_6658$$ = $JSCompiler_StaticMethods_setAreaLayerImage$self$$inline_6643_areaNames$$inline_4813_dir$$inline_6632_labels$$inline_6640_node$$inline_6626_values$$inline_6665$$;
        $bidi$$inline_6631_refWidth$$inline_6647_shape$$inline_6645_shapes$$inline_6654$$ = {};
        $context$$inline_6655_refHeight$$inline_6648$$ = this.$_tmap$.$getCtx$();
        $area$$inline_6656_locImages$$inline_6649$$ = $JSCompiler_alias_VOID$$;
        for($area$$inline_6656_locImages$$inline_6649$$ in $areaNames$$inline_6653_backgroundColor$$inline_6659_borderColor$$inline_6657_i$$inline_6650_stroke$$inline_6658$$) {
          $bidi$$inline_6631_refWidth$$inline_6647_shape$$inline_6645_shapes$$inline_6654$$[$area$$inline_6656_locImages$$inline_6649$$] = new dvt.$Path$($context$$inline_6655_refHeight$$inline_6648$$);
          if(($areaNames$$inline_6653_backgroundColor$$inline_6659_borderColor$$inline_6657_i$$inline_6650_stroke$$inline_6658$$ = this.$_areaLayerStyle$.$getStyle$(dvt.$CSSStyle$.$BORDER_COLOR$)) && "transparent" != $areaNames$$inline_6653_backgroundColor$$inline_6659_borderColor$$inline_6657_i$$inline_6650_stroke$$inline_6658$$) {
            $areaNames$$inline_6653_backgroundColor$$inline_6659_borderColor$$inline_6657_i$$inline_6650_stroke$$inline_6658$$ = new dvt.$SolidStroke$($areaNames$$inline_6653_backgroundColor$$inline_6659_borderColor$$inline_6657_i$$inline_6650_stroke$$inline_6658$$), this.$_tmap$.$_bSupportsVectorEffects$ && $areaNames$$inline_6653_backgroundColor$$inline_6659_borderColor$$inline_6657_i$$inline_6650_stroke$$inline_6658$$.$setFixedWidth$($JSCompiler_alias_TRUE$$), $bidi$$inline_6631_refWidth$$inline_6647_shape$$inline_6645_shapes$$inline_6654$$[$area$$inline_6656_locImages$$inline_6649$$].$setStroke$($areaNames$$inline_6653_backgroundColor$$inline_6659_borderColor$$inline_6657_i$$inline_6650_stroke$$inline_6658$$)
          }
          $areaNames$$inline_6653_backgroundColor$$inline_6659_borderColor$$inline_6657_i$$inline_6650_stroke$$inline_6658$$ = this.$_areaLayerStyle$.$getStyle$(dvt.$CSSStyle$.$BACKGROUND_COLOR$);
          "transparent" != $areaNames$$inline_6653_backgroundColor$$inline_6659_borderColor$$inline_6657_i$$inline_6650_stroke$$inline_6658$$ ? $bidi$$inline_6631_refWidth$$inline_6647_shape$$inline_6645_shapes$$inline_6654$$[$area$$inline_6656_locImages$$inline_6649$$].$setSolidFill$($areaNames$$inline_6653_backgroundColor$$inline_6659_borderColor$$inline_6657_i$$inline_6650_stroke$$inline_6658$$) : $bidi$$inline_6631_refWidth$$inline_6647_shape$$inline_6645_shapes$$inline_6654$$[$area$$inline_6656_locImages$$inline_6649$$].$setFill$($JSCompiler_alias_NULL$$)
        }
        $JSCompiler_temp_const$$5582_i$$inline_6641_image$$inline_6630_isRTL$$inline_6646_nodeName$$inline_6627$$.$AreaShapes$ = $bidi$$inline_6631_refWidth$$inline_6647_shape$$inline_6645_shapes$$inline_6654$$;
        $JSCompiler_StaticMethods_setAreaNames$$($images$$inline_6628_mapLayer$$inline_4812_nodeName$$inline_6638$$, $JSCompiler_StaticMethods_setAreaLayerImage$self$$inline_6643_areaNames$$inline_4813_dir$$inline_6632_labels$$inline_6640_node$$inline_6626_values$$inline_6665$$);
        $JSCompiler_StaticMethods_setAreaLayerImage$self$$inline_6643_areaNames$$inline_4813_dir$$inline_6632_labels$$inline_6640_node$$inline_6626_values$$inline_6665$$ = $DvtBaseMapManager$$.$getAreaLabelInfo$($attr$$inline_6587_basemap$$inline_4808_i$$inline_4804$$, $children$$inline_6668_i$$inline_6629_images$$inline_6644_layer$$inline_4811_points$$inline_6639$$);
        $images$$inline_6628_mapLayer$$inline_4812_nodeName$$inline_6638$$.$_labelInfo$ = $JSCompiler_StaticMethods_setAreaLayerImage$self$$inline_6643_areaNames$$inline_4813_dir$$inline_6632_labels$$inline_6640_node$$inline_6626_values$$inline_6665$$;
        $children$$inline_6668_i$$inline_6629_images$$inline_6644_layer$$inline_4811_points$$inline_6639$$ = $DvtBaseMapManager$$.$getChildrenForLayerAreas$(this.$_tmap$.$_mapName$, $children$$inline_6668_i$$inline_6629_images$$inline_6644_layer$$inline_4811_points$$inline_6639$$);
        $images$$inline_6628_mapLayer$$inline_4812_nodeName$$inline_6638$$.$_children$ = $children$$inline_6668_i$$inline_6629_images$$inline_6644_layer$$inline_4811_points$$inline_6639$$
      }
      $images$$inline_6628_mapLayer$$inline_4812_nodeName$$inline_6638$$.$_layerCSSStyle$ = this.$_areaLayerStyle$;
      $images$$inline_6628_mapLayer$$inline_4812_nodeName$$inline_6638$$.$_dropSiteCSSStyle$ = this.$_areaDropSiteStyle$;
      $images$$inline_6628_mapLayer$$inline_4812_nodeName$$inline_6638$$.$setAnimation$("auto" == $areaLayer$$inline_4810_layerName$$inline_6625_node$$inline_6637_nodeName$$inline_4803_xmlNode$$inline_6623$$.animationOnLayerChange ? "alphaFade" : $areaLayer$$inline_4810_layerName$$inline_6625_node$$inline_6637_nodeName$$inline_4803_xmlNode$$inline_6623$$.animationOnLayerChange);
      $images$$inline_6628_mapLayer$$inline_4812_nodeName$$inline_6638$$.$setAnimationDuration$(this.$_tmap$.$getAnimationDuration$());
      this.$_tmap$.$_layers$.push($images$$inline_6628_mapLayer$$inline_4812_nodeName$$inline_6638$$);
      $areaLayer$$inline_4810_layerName$$inline_6625_node$$inline_6637_nodeName$$inline_4803_xmlNode$$inline_6623$$.areaDataLayer && $JSCompiler_StaticMethods_ParseDataLayers$$(this, [$areaLayer$$inline_4810_layerName$$inline_6625_node$$inline_6637_nodeName$$inline_4803_xmlNode$$inline_6623$$.areaDataLayer], $images$$inline_6628_mapLayer$$inline_4812_nodeName$$inline_6638$$, $JSCompiler_alias_NULL$$, $JSCompiler_alias_TRUE$$);
      $areaLayer$$inline_4810_layerName$$inline_6625_node$$inline_6637_nodeName$$inline_4803_xmlNode$$inline_6623$$.pointDataLayers && $JSCompiler_StaticMethods_ParseDataLayers$$(this, $areaLayer$$inline_4810_layerName$$inline_6625_node$$inline_6637_nodeName$$inline_4803_xmlNode$$inline_6623$$.pointDataLayers, $images$$inline_6628_mapLayer$$inline_4812_nodeName$$inline_6638$$, $JSCompiler_alias_NULL$$, $JSCompiler_alias_FALSE$$)
    }
  }
  $JSCompiler_StaticMethods_ParseDataLayers$$(this, $options$$260$$.pointDataLayers, $JSCompiler_alias_NULL$$, $JSCompiler_alias_NULL$$, $JSCompiler_alias_FALSE$$)
};
function $JSCompiler_StaticMethods_ParseDataLayers$$($JSCompiler_StaticMethods_ParseDataLayers$self$$, $dataLayers$$7$$, $parentLayer$$6$$, $topLayerName$$2$$, $JSCompiler_StaticMethods_resetRenderedAreas$self$$inline_4866_isAreaDataLayer$$1_selectionMode$$8$$) {
  if($dataLayers$$7$$) {
    for(var $i$$612$$ = 0;$i$$612$$ < $dataLayers$$7$$.length;$i$$612$$++) {
      var $dataLayerOptions$$1_initSelections$$ = dvt.$JsonUtils$.$merge$($dataLayers$$7$$[$i$$612$$], $DvtThematicMapDefaults$DEFAULT_DATA_LAYER$$);
      if($dataLayerOptions$$1_initSelections$$.markerDefs) {
        var $area$$inline_4867_dataLayer$$13_markerDefs$$ = $dataLayerOptions$$1_initSelections$$.markerDefs, $markerDef$$;
        for($markerDef$$ in $area$$inline_4867_dataLayer$$13_markerDefs$$) {
          if(!$JSCompiler_StaticMethods_ParseDataLayers$self$$.$_customMarkerDefs$[$markerDef$$]) {
            var $initDisclosed_xmlNode$$66$$ = (new dvt.$XmlParser$($JSCompiler_StaticMethods_ParseDataLayers$self$$.$_tmap$.$getCtx$())).parse($area$$inline_4867_dataLayer$$13_markerDefs$$[$markerDef$$]);
            $JSCompiler_StaticMethods_ParseDataLayers$self$$.$_customMarkerDefs$[$markerDef$$] = dvt.$MarkerUtils$.$createMarkerDef$($JSCompiler_StaticMethods_ParseDataLayers$self$$.$_tmap$.$getCtx$(), $initDisclosed_xmlNode$$66$$)
          }
        }
      }
      $dataLayerOptions$$1_initSelections$$.legend && ($JSCompiler_StaticMethods_ParseDataLayers$self$$.$_tmap$.$_legendData$ = $dataLayerOptions$$1_initSelections$$.legend);
      if($parentLayer$$6$$) {
        if($parentLayer$$6$$ instanceof $DvtMapAreaLayer$$ && $JSCompiler_StaticMethods_resetRenderedAreas$self$$inline_4866_isAreaDataLayer$$1_selectionMode$$8$$) {
          for($area$$inline_4867_dataLayer$$13_markerDefs$$ in $JSCompiler_StaticMethods_resetRenderedAreas$self$$inline_4866_isAreaDataLayer$$1_selectionMode$$8$$ = $parentLayer$$6$$, $area$$inline_4867_dataLayer$$13_markerDefs$$ = $JSCompiler_alias_VOID$$, $JSCompiler_StaticMethods_resetRenderedAreas$self$$inline_4866_isAreaDataLayer$$1_selectionMode$$8$$.$AreaNames$) {
            $JSCompiler_StaticMethods_resetRenderedAreas$self$$inline_4866_isAreaDataLayer$$1_selectionMode$$8$$.$_renderArea$[$area$$inline_4867_dataLayer$$13_markerDefs$$] = $JSCompiler_alias_TRUE$$, $JSCompiler_StaticMethods_resetRenderedAreas$self$$inline_4866_isAreaDataLayer$$1_selectionMode$$8$$.$_renderLabel$[$area$$inline_4867_dataLayer$$13_markerDefs$$] = $JSCompiler_alias_TRUE$$
          }
        }
      }else {
        $parentLayer$$6$$ = new $DvtMapLayer$$($JSCompiler_StaticMethods_ParseDataLayers$self$$.$_tmap$, $dataLayerOptions$$1_initSelections$$.id, $JSCompiler_StaticMethods_ParseDataLayers$self$$.$_tmap$.$getEventManager$()), $JSCompiler_StaticMethods_ParseDataLayers$self$$.$_tmap$.$_layers$.push($parentLayer$$6$$)
      }
      $area$$inline_4867_dataLayer$$13_markerDefs$$ = new $DvtMapDataLayer$$($JSCompiler_StaticMethods_ParseDataLayers$self$$.$_tmap$, $parentLayer$$6$$, $dataLayerOptions$$1_initSelections$$.id, $JSCompiler_StaticMethods_ParseDataLayers$self$$.$_tmap$.$getEventManager$(), $dataLayerOptions$$1_initSelections$$);
      $JSCompiler_StaticMethods_resetRenderedAreas$self$$inline_4866_isAreaDataLayer$$1_selectionMode$$8$$ = $dataLayerOptions$$1_initSelections$$.selectionMode;
      "single" == $JSCompiler_StaticMethods_resetRenderedAreas$self$$inline_4866_isAreaDataLayer$$1_selectionMode$$8$$ ? $area$$inline_4867_dataLayer$$13_markerDefs$$.$setSelectionMode$(dvt.$SelectionHandler$.$TYPE_SINGLE$) : "multiple" == $JSCompiler_StaticMethods_resetRenderedAreas$self$$inline_4866_isAreaDataLayer$$1_selectionMode$$8$$ && $area$$inline_4867_dataLayer$$13_markerDefs$$.$setSelectionMode$(dvt.$SelectionHandler$.$TYPE_MULTIPLE$);
      $area$$inline_4867_dataLayer$$13_markerDefs$$.$setAnimation$($dataLayerOptions$$1_initSelections$$.animationOnDataChange);
      $area$$inline_4867_dataLayer$$13_markerDefs$$.$setAnimationDuration$($JSCompiler_StaticMethods_ParseDataLayers$self$$.$_tmap$.$getAnimationDuration$());
      var $JSCompiler_StaticMethods_setIsolatedArea$self$$inline_4897_isolatedRowKey$$ = $JSCompiler_alias_NULL$$;
      $parentLayer$$6$$ instanceof $DvtMapAreaLayer$$ && ($JSCompiler_StaticMethods_setIsolatedArea$self$$inline_4897_isolatedRowKey$$ = $dataLayerOptions$$1_initSelections$$.isolatedItem);
      var $disclosedItems_isolatedArea$$inline_4898$$ = $dataLayerOptions$$1_initSelections$$.disclosedItems, $initDisclosed_xmlNode$$66$$ = [], $isolatedAreaId$$;
      $JSCompiler_StaticMethods_resetRenderedAreas$self$$inline_4866_isAreaDataLayer$$1_selectionMode$$8$$ = $parentLayer$$6$$ instanceof $DvtMapAreaLayer$$;
      var $popups$$1$$;
      $dataLayerOptions$$1_initSelections$$.popups && ($popups$$1$$ = $JSCompiler_StaticMethods_ParseDataLayers$self$$.$_getShowPopupBehaviors$($dataLayerOptions$$1_initSelections$$.popups));
      var $context$$385_dataLayer$$inline_4887_hiddenCategories$$12_images$$22$$ = $JSCompiler_StaticMethods_ParseDataLayers$self$$.$_tmap$.$getOptions$().hiddenCategories, $areas$$6_renderer$$2$$ = $dataLayerOptions$$1_initSelections$$.areas;
      if($areas$$6_renderer$$2$$) {
        for(var $area$$inline_4899_j$$94$$ = 0;$area$$inline_4899_j$$94$$ < $areas$$6_renderer$$2$$.length;$area$$inline_4899_j$$94$$++) {
          if($context$$385_dataLayer$$inline_4887_hiddenCategories$$12_images$$22$$ && dvt.$ArrayUtils$.$hasAnyItem$($context$$385_dataLayer$$inline_4887_hiddenCategories$$12_images$$22$$, $areas$$6_renderer$$2$$[$area$$inline_4899_j$$94$$].categories)) {
            $JSCompiler_StaticMethods_addAreaObject$$($area$$inline_4867_dataLayer$$13_markerDefs$$, $JSCompiler_alias_NULL$$)
          }else {
            var $areaId$$2_data$$inline_4875_data$$inline_4888_dataObj$$4$$ = $areas$$6_renderer$$2$$[$area$$inline_4899_j$$94$$].location;
            if($JSCompiler_StaticMethods_setIsolatedArea$self$$inline_4897_isolatedRowKey$$) {
              if($JSCompiler_StaticMethods_setIsolatedArea$self$$inline_4897_isolatedRowKey$$ != $areas$$6_renderer$$2$$[$area$$inline_4899_j$$94$$].id) {
                continue
              }else {
                $isolatedAreaId$$ = $areaId$$2_data$$inline_4875_data$$inline_4888_dataObj$$4$$
              }
            }
            $disclosedItems_isolatedArea$$inline_4898$$ && -1 != dvt.$ArrayUtils$.$getIndex$($disclosedItems_isolatedArea$$inline_4898$$, $areas$$6_renderer$$2$$[$area$$inline_4899_j$$94$$].id) && $initDisclosed_xmlNode$$66$$.push($areaId$$2_data$$inline_4875_data$$inline_4888_dataObj$$4$$);
            var $JSCompiler_StaticMethods__createArea$self$$inline_4872_JSCompiler_StaticMethods__createCustomDataItem$self$$inline_4885_dataItem$$inline_4892_label$$inline_4883$$ = $JSCompiler_StaticMethods_ParseDataLayers$self$$, $layer$$inline_4873_layer$$inline_4886$$ = $parentLayer$$6$$, $dataLayer$$inline_4874_markers$$10$$ = $area$$inline_4867_dataLayer$$13_markerDefs$$, $areaId$$2_data$$inline_4875_data$$inline_4888_dataObj$$4$$ = $areas$$6_renderer$$2$$[$area$$inline_4899_j$$94$$], $areaId$$inline_4876_center$$inline_4891_path$$inline_4877_svgElem$$ = 
            $areaId$$2_data$$inline_4875_data$$inline_4888_dataObj$$4$$.location;
            if($layer$$inline_4873_layer$$inline_4886$$.$AreaShapes$[$areaId$$inline_4876_center$$inline_4891_path$$inline_4877_svgElem$$] && $areaId$$2_data$$inline_4875_data$$inline_4888_dataObj$$4$$.color) {
              $layer$$inline_4873_layer$$inline_4886$$.$_renderArea$[$areaId$$inline_4876_center$$inline_4891_path$$inline_4877_svgElem$$] = $JSCompiler_alias_FALSE$$;
              $areaId$$inline_4876_center$$inline_4891_path$$inline_4877_svgElem$$ = new $DvtDrillablePath$$($JSCompiler_StaticMethods__createArea$self$$inline_4872_JSCompiler_StaticMethods__createCustomDataItem$self$$inline_4885_dataItem$$inline_4892_label$$inline_4883$$.$_tmap$.$getCtx$(), $JSCompiler_StaticMethods__createArea$self$$inline_4872_JSCompiler_StaticMethods__createCustomDataItem$self$$inline_4885_dataItem$$inline_4892_label$$inline_4883$$.$_tmap$.$_bSupportsVectorEffects$);
              $areaId$$2_data$$inline_4875_data$$inline_4888_dataObj$$4$$ = dvt.$JsonUtils$.$merge$($areaId$$2_data$$inline_4875_data$$inline_4888_dataObj$$4$$, $JSCompiler_StaticMethods__createArea$self$$inline_4872_JSCompiler_StaticMethods__createCustomDataItem$self$$inline_4885_dataItem$$inline_4892_label$$inline_4883$$.$_tmap$.$_styleDefaults$.dataAreaDefaults);
              $areaId$$2_data$$inline_4875_data$$inline_4888_dataObj$$4$$.labelStyle || ($areaId$$2_data$$inline_4875_data$$inline_4888_dataObj$$4$$.labelStyle = $JSCompiler_StaticMethods__createArea$self$$inline_4872_JSCompiler_StaticMethods__createCustomDataItem$self$$inline_4885_dataItem$$inline_4892_label$$inline_4883$$.$_tmap$.$_styleDefaults$.labelStyle);
              var $dis$$inline_4881_hs$$inline_4878_svgElem$$inline_4889$$ = new dvt.$SolidStroke$($areaId$$2_data$$inline_4875_data$$inline_4888_dataObj$$4$$.hoverColor, 1, 2), $JSCompiler_StaticMethods_setDisclosedStroke$self$$inline_6691_isParentAreaDataLayer$$inline_4890_sis$$inline_4879$$ = new dvt.$SolidStroke$($areaId$$2_data$$inline_4875_data$$inline_4888_dataObj$$4$$.selectedInnerColor, 1, 1), $dos$$inline_4882_outerStroke$$inline_6693_sos$$inline_4880$$ = new dvt.$SolidStroke$($areaId$$2_data$$inline_4875_data$$inline_4888_dataObj$$4$$.selectedOuterColor, 
              1, 4);
              $areaId$$inline_4876_center$$inline_4891_path$$inline_4877_svgElem$$.$setHoverStroke$($dis$$inline_4881_hs$$inline_4878_svgElem$$inline_4889$$, $JSCompiler_alias_NULL$$).$setSelectedStroke$($JSCompiler_StaticMethods_setDisclosedStroke$self$$inline_6691_isParentAreaDataLayer$$inline_4890_sis$$inline_4879$$, $dos$$inline_4882_outerStroke$$inline_6693_sos$$inline_4880$$);
              $dis$$inline_4881_hs$$inline_4878_svgElem$$inline_4889$$ = new dvt.$SolidStroke$($areaId$$2_data$$inline_4875_data$$inline_4888_dataObj$$4$$.drilledInnerColor, 1, 2);
              $dos$$inline_4882_outerStroke$$inline_6693_sos$$inline_4880$$ = new dvt.$SolidStroke$($areaId$$2_data$$inline_4875_data$$inline_4888_dataObj$$4$$.drilledOuterColor, 1, 4);
              $JSCompiler_StaticMethods_setDisclosedStroke$self$$inline_6691_isParentAreaDataLayer$$inline_4890_sis$$inline_4879$$ = $areaId$$inline_4876_center$$inline_4891_path$$inline_4877_svgElem$$;
              $JSCompiler_StaticMethods_setDisclosedStroke$self$$inline_6691_isParentAreaDataLayer$$inline_4890_sis$$inline_4879$$.$_disclosedInnerStroke$ = $dis$$inline_4881_hs$$inline_4878_svgElem$$inline_4889$$;
              $JSCompiler_StaticMethods_setDisclosedStroke$self$$inline_6691_isParentAreaDataLayer$$inline_4890_sis$$inline_4879$$.$_disclosedInnerStroke$ && $JSCompiler_StaticMethods_setDisclosedStroke$self$$inline_6691_isParentAreaDataLayer$$inline_4890_sis$$inline_4879$$.$_bSupportsVectorEffects$ && $JSCompiler_StaticMethods_setDisclosedStroke$self$$inline_6691_isParentAreaDataLayer$$inline_4890_sis$$inline_4879$$.$_disclosedInnerStroke$.$setFixedWidth$($JSCompiler_alias_TRUE$$);
              $JSCompiler_StaticMethods_setDisclosedStroke$self$$inline_6691_isParentAreaDataLayer$$inline_4890_sis$$inline_4879$$.$_disclosedOuterStroke$ = $dos$$inline_4882_outerStroke$$inline_6693_sos$$inline_4880$$;
              $JSCompiler_StaticMethods_setDisclosedStroke$self$$inline_6691_isParentAreaDataLayer$$inline_4890_sis$$inline_4879$$.$_disclosedOuterStroke$ && $JSCompiler_StaticMethods_setDisclosedStroke$self$$inline_6691_isParentAreaDataLayer$$inline_4890_sis$$inline_4879$$.$_bSupportsVectorEffects$ && $JSCompiler_StaticMethods_setDisclosedStroke$self$$inline_6691_isParentAreaDataLayer$$inline_4890_sis$$inline_4879$$.$_disclosedOuterStroke$.$setFixedWidth$($JSCompiler_alias_TRUE$$);
              $layer$$inline_4873_layer$$inline_4886$$.$_renderLabel$[$areaId$$2_data$$inline_4875_data$$inline_4888_dataObj$$4$$.location] = $JSCompiler_alias_FALSE$$;
              $JSCompiler_StaticMethods__styleDisplayable$$($JSCompiler_StaticMethods__createArea$self$$inline_4872_JSCompiler_StaticMethods__createCustomDataItem$self$$inline_4885_dataItem$$inline_4892_label$$inline_4883$$, $areaId$$2_data$$inline_4875_data$$inline_4888_dataObj$$4$$, $areaId$$inline_4876_center$$inline_4891_path$$inline_4877_svgElem$$);
              $JSCompiler_StaticMethods__createArea$self$$inline_4872_JSCompiler_StaticMethods__createCustomDataItem$self$$inline_4885_dataItem$$inline_4892_label$$inline_4883$$ = $JSCompiler_StaticMethods__createArea$self$$inline_4872_JSCompiler_StaticMethods__createCustomDataItem$self$$inline_4885_dataItem$$inline_4892_label$$inline_4883$$.$_createLabel$($layer$$inline_4873_layer$$inline_4886$$, $dataLayer$$inline_4874_markers$$10$$, $areaId$$2_data$$inline_4875_data$$inline_4888_dataObj$$4$$, 
              $areaId$$inline_4876_center$$inline_4891_path$$inline_4877_svgElem$$, $JSCompiler_alias_TRUE$$);
              $areaId$$2_data$$inline_4875_data$$inline_4888_dataObj$$4$$ = new $DvtMapAreaPeer$$($areaId$$2_data$$inline_4875_data$$inline_4888_dataObj$$4$$, $dataLayer$$inline_4874_markers$$10$$, $areaId$$inline_4876_center$$inline_4891_path$$inline_4877_svgElem$$, $JSCompiler_StaticMethods__createArea$self$$inline_4872_JSCompiler_StaticMethods__createCustomDataItem$self$$inline_4885_dataItem$$inline_4892_label$$inline_4883$$)
            }else {
              $areaId$$2_data$$inline_4875_data$$inline_4888_dataObj$$4$$ = $JSCompiler_alias_NULL$$
            }
            $popups$$1$$ && $areaId$$2_data$$inline_4875_data$$inline_4888_dataObj$$4$$.$setShowPopupBehaviors$($popups$$1$$);
            $areaId$$2_data$$inline_4875_data$$inline_4888_dataObj$$4$$ && ($areaId$$2_data$$inline_4875_data$$inline_4888_dataObj$$4$$.$setSelectable$($area$$inline_4867_dataLayer$$13_markerDefs$$.$isSelectable$()), $JSCompiler_StaticMethods_addAreaObject$$($area$$inline_4867_dataLayer$$13_markerDefs$$, $areaId$$2_data$$inline_4875_data$$inline_4888_dataObj$$4$$))
          }
        }
      }
      $areas$$6_renderer$$2$$ = $dataLayerOptions$$1_initSelections$$.renderer;
      if(($dataLayer$$inline_4874_markers$$10$$ = $dataLayerOptions$$1_initSelections$$.markers) && !$areas$$6_renderer$$2$$) {
        for($area$$inline_4899_j$$94$$ = 0;$area$$inline_4899_j$$94$$ < $dataLayer$$inline_4874_markers$$10$$.length;$area$$inline_4899_j$$94$$++) {
          if($context$$385_dataLayer$$inline_4887_hiddenCategories$$12_images$$22$$ && dvt.$ArrayUtils$.$hasAnyItem$($context$$385_dataLayer$$inline_4887_hiddenCategories$$12_images$$22$$, $dataLayer$$inline_4874_markers$$10$$[$area$$inline_4899_j$$94$$].categories)) {
            $JSCompiler_StaticMethods_addDataObject$$($area$$inline_4867_dataLayer$$13_markerDefs$$, $JSCompiler_alias_NULL$$)
          }else {
            $areaId$$2_data$$inline_4875_data$$inline_4888_dataObj$$4$$ = $dataLayer$$inline_4874_markers$$10$$[$area$$inline_4899_j$$94$$].location;
            if($JSCompiler_StaticMethods_setIsolatedArea$self$$inline_4897_isolatedRowKey$$) {
              if($JSCompiler_StaticMethods_setIsolatedArea$self$$inline_4897_isolatedRowKey$$ != $dataLayer$$inline_4874_markers$$10$$[$area$$inline_4899_j$$94$$].id) {
                continue
              }else {
                $isolatedAreaId$$ = $areaId$$2_data$$inline_4875_data$$inline_4888_dataObj$$4$$
              }
            }
            $areaId$$2_data$$inline_4875_data$$inline_4888_dataObj$$4$$ = $JSCompiler_StaticMethods_ParseDataLayers$self$$.$_createMarker$($parentLayer$$6$$, $area$$inline_4867_dataLayer$$13_markerDefs$$, $dataLayer$$inline_4874_markers$$10$$[$area$$inline_4899_j$$94$$], $JSCompiler_StaticMethods_resetRenderedAreas$self$$inline_4866_isAreaDataLayer$$1_selectionMode$$8$$);
            $popups$$1$$ && $areaId$$2_data$$inline_4875_data$$inline_4888_dataObj$$4$$.$setShowPopupBehaviors$($popups$$1$$);
            $areaId$$2_data$$inline_4875_data$$inline_4888_dataObj$$4$$ && ($areaId$$2_data$$inline_4875_data$$inline_4888_dataObj$$4$$.$setSelectable$($area$$inline_4867_dataLayer$$13_markerDefs$$.$isSelectable$()), $JSCompiler_StaticMethods_addDataObject$$($area$$inline_4867_dataLayer$$13_markerDefs$$, $areaId$$2_data$$inline_4875_data$$inline_4888_dataObj$$4$$))
          }
        }
      }
      if($context$$385_dataLayer$$inline_4887_hiddenCategories$$12_images$$22$$ = $dataLayerOptions$$1_initSelections$$.images) {
        for($area$$inline_4899_j$$94$$ = 0;$area$$inline_4899_j$$94$$ < $context$$385_dataLayer$$inline_4887_hiddenCategories$$12_images$$22$$.length;$area$$inline_4899_j$$94$$++) {
          $areaId$$2_data$$inline_4875_data$$inline_4888_dataObj$$4$$ = $context$$385_dataLayer$$inline_4887_hiddenCategories$$12_images$$22$$[$area$$inline_4899_j$$94$$].location;
          if($JSCompiler_StaticMethods_setIsolatedArea$self$$inline_4897_isolatedRowKey$$) {
            if($JSCompiler_StaticMethods_setIsolatedArea$self$$inline_4897_isolatedRowKey$$ != $context$$385_dataLayer$$inline_4887_hiddenCategories$$12_images$$22$$[$area$$inline_4899_j$$94$$].id) {
              continue
            }else {
              $isolatedAreaId$$ = $areaId$$2_data$$inline_4875_data$$inline_4888_dataObj$$4$$
            }
          }
          $areaId$$2_data$$inline_4875_data$$inline_4888_dataObj$$4$$ = $JSCompiler_StaticMethods_ParseDataLayers$self$$.$_createImage$($parentLayer$$6$$, $area$$inline_4867_dataLayer$$13_markerDefs$$, $context$$385_dataLayer$$inline_4887_hiddenCategories$$12_images$$22$$[$area$$inline_4899_j$$94$$], $JSCompiler_StaticMethods_resetRenderedAreas$self$$inline_4866_isAreaDataLayer$$1_selectionMode$$8$$);
          $popups$$1$$ && $areaId$$2_data$$inline_4875_data$$inline_4888_dataObj$$4$$.$setShowPopupBehaviors$($popups$$1$$);
          $areaId$$2_data$$inline_4875_data$$inline_4888_dataObj$$4$$ && $JSCompiler_StaticMethods_addDataObject$$($area$$inline_4867_dataLayer$$13_markerDefs$$, $areaId$$2_data$$inline_4875_data$$inline_4888_dataObj$$4$$)
        }
      }
      if($areas$$6_renderer$$2$$) {
        for($area$$inline_4899_j$$94$$ = 0;$area$$inline_4899_j$$94$$ < $dataLayer$$inline_4874_markers$$10$$.length;$area$$inline_4899_j$$94$$++) {
          $areaId$$2_data$$inline_4875_data$$inline_4888_dataObj$$4$$ = $dataLayer$$inline_4874_markers$$10$$[$area$$inline_4899_j$$94$$].location;
          if($JSCompiler_StaticMethods_setIsolatedArea$self$$inline_4897_isolatedRowKey$$) {
            if($JSCompiler_StaticMethods_setIsolatedArea$self$$inline_4897_isolatedRowKey$$ != $dataLayer$$inline_4874_markers$$10$$[$area$$inline_4899_j$$94$$].id) {
              continue
            }else {
              $isolatedAreaId$$ = $areaId$$2_data$$inline_4875_data$$inline_4888_dataObj$$4$$
            }
          }
          $disclosedItems_isolatedArea$$inline_4898$$ && -1 != dvt.$ArrayUtils$.$getIndex$($disclosedItems_isolatedArea$$inline_4898$$, $dataLayer$$inline_4874_markers$$10$$[$area$$inline_4899_j$$94$$].id) && $initDisclosed_xmlNode$$66$$.push($areaId$$2_data$$inline_4875_data$$inline_4888_dataObj$$4$$);
          $context$$385_dataLayer$$inline_4887_hiddenCategories$$12_images$$22$$ = $JSCompiler_StaticMethods_ParseDataLayers$self$$.$_tmap$.$getOptions$()._contextHandler($JSCompiler_StaticMethods_ParseDataLayers$self$$.$_tmap$.$getElem$(), $JSCompiler_alias_NULL$$, $dataLayer$$inline_4874_markers$$10$$[$area$$inline_4899_j$$94$$], {hovered:$JSCompiler_alias_FALSE$$, selected:$JSCompiler_alias_FALSE$$, focused:$JSCompiler_alias_FALSE$$}, $JSCompiler_alias_NULL$$);
          $areaId$$inline_4876_center$$inline_4891_path$$inline_4877_svgElem$$ = $areas$$6_renderer$$2$$($context$$385_dataLayer$$inline_4887_hiddenCategories$$12_images$$22$$);
          $JSCompiler_StaticMethods__createArea$self$$inline_4872_JSCompiler_StaticMethods__createCustomDataItem$self$$inline_4885_dataItem$$inline_4892_label$$inline_4883$$ = $JSCompiler_StaticMethods_ParseDataLayers$self$$;
          $layer$$inline_4873_layer$$inline_4886$$ = $parentLayer$$6$$;
          $context$$385_dataLayer$$inline_4887_hiddenCategories$$12_images$$22$$ = $area$$inline_4867_dataLayer$$13_markerDefs$$;
          $areaId$$2_data$$inline_4875_data$$inline_4888_dataObj$$4$$ = $dataLayer$$inline_4874_markers$$10$$[$area$$inline_4899_j$$94$$];
          $dis$$inline_4881_hs$$inline_4878_svgElem$$inline_4889$$ = $areaId$$inline_4876_center$$inline_4891_path$$inline_4877_svgElem$$;
          $JSCompiler_StaticMethods_setDisclosedStroke$self$$inline_6691_isParentAreaDataLayer$$inline_4890_sis$$inline_4879$$ = $JSCompiler_StaticMethods_resetRenderedAreas$self$$inline_4866_isAreaDataLayer$$1_selectionMode$$8$$;
          ($areaId$$inline_4876_center$$inline_4891_path$$inline_4877_svgElem$$ = $DvtThematicMapJsonParser$getCenter$$($context$$385_dataLayer$$inline_4887_hiddenCategories$$12_images$$22$$, $areaId$$2_data$$inline_4875_data$$inline_4888_dataObj$$4$$)) ? ($JSCompiler_StaticMethods_setDisclosedStroke$self$$inline_6691_isParentAreaDataLayer$$inline_4890_sis$$inline_4879$$ && ($layer$$inline_4873_layer$$inline_4886$$.$_renderLabel$[$areaId$$2_data$$inline_4875_data$$inline_4888_dataObj$$4$$.location] = 
          $JSCompiler_alias_FALSE$$), $JSCompiler_StaticMethods__createArea$self$$inline_4872_JSCompiler_StaticMethods__createCustomDataItem$self$$inline_4885_dataItem$$inline_4892_label$$inline_4883$$ = new $DvtCustomDataItem$$($JSCompiler_StaticMethods__createArea$self$$inline_4872_JSCompiler_StaticMethods__createCustomDataItem$self$$inline_4885_dataItem$$inline_4892_label$$inline_4883$$.$_tmap$.$getCtx$(), $dis$$inline_4881_hs$$inline_4878_svgElem$$inline_4889$$, $JSCompiler_StaticMethods__createArea$self$$inline_4872_JSCompiler_StaticMethods__createCustomDataItem$self$$inline_4885_dataItem$$inline_4892_label$$inline_4883$$.$_tmap$.$_styleDefaults$.dataAreaDefaults), 
          $areaId$$2_data$$inline_4875_data$$inline_4888_dataObj$$4$$ = new $DvtMapObjPeer$$($areaId$$2_data$$inline_4875_data$$inline_4888_dataObj$$4$$, $context$$385_dataLayer$$inline_4887_hiddenCategories$$12_images$$22$$, $JSCompiler_StaticMethods__createArea$self$$inline_4872_JSCompiler_StaticMethods__createCustomDataItem$self$$inline_4885_dataItem$$inline_4892_label$$inline_4883$$, $JSCompiler_alias_NULL$$, $areaId$$inline_4876_center$$inline_4891_path$$inline_4877_svgElem$$)) : $areaId$$2_data$$inline_4875_data$$inline_4888_dataObj$$4$$ = 
          $JSCompiler_alias_NULL$$;
          $popups$$1$$ && $areaId$$2_data$$inline_4875_data$$inline_4888_dataObj$$4$$.$setShowPopupBehaviors$($popups$$1$$);
          $areaId$$2_data$$inline_4875_data$$inline_4888_dataObj$$4$$ && ($areaId$$2_data$$inline_4875_data$$inline_4888_dataObj$$4$$.$setSelectable$($area$$inline_4867_dataLayer$$13_markerDefs$$.$isSelectable$()), $JSCompiler_StaticMethods_addDataObject$$($area$$inline_4867_dataLayer$$13_markerDefs$$, $areaId$$2_data$$inline_4875_data$$inline_4888_dataObj$$4$$))
        }
      }
      if($isolatedAreaId$$) {
        for($area$$inline_4899_j$$94$$ in $area$$inline_4867_dataLayer$$13_markerDefs$$.$_isolatedAreaRowKey$ = $JSCompiler_StaticMethods_setIsolatedArea$self$$inline_4897_isolatedRowKey$$, $JSCompiler_StaticMethods_setIsolatedArea$self$$inline_4897_isolatedRowKey$$ = $parentLayer$$6$$, $disclosedItems_isolatedArea$$inline_4898$$ = $isolatedAreaId$$, $JSCompiler_StaticMethods_setIsolatedArea$self$$inline_4897_isolatedRowKey$$.$_isolatedArea$ = $disclosedItems_isolatedArea$$inline_4898$$, $JSCompiler_StaticMethods_setIsolatedArea$self$$inline_4897_isolatedRowKey$$.$_layerDim$ = 
        $JSCompiler_alias_NULL$$, $area$$inline_4899_j$$94$$ = $JSCompiler_alias_VOID$$, $JSCompiler_StaticMethods_setIsolatedArea$self$$inline_4897_isolatedRowKey$$.$AreaShapes$) {
          $area$$inline_4899_j$$94$$ != $disclosedItems_isolatedArea$$inline_4898$$ && ($JSCompiler_StaticMethods_setIsolatedArea$self$$inline_4897_isolatedRowKey$$.$_renderArea$[$area$$inline_4899_j$$94$$] = $JSCompiler_alias_FALSE$$)
        }
      }
      if(($dataLayerOptions$$1_initSelections$$ = $dataLayerOptions$$1_initSelections$$.selection) && 0 < $dataLayerOptions$$1_initSelections$$.length) {
        $area$$inline_4867_dataLayer$$13_markerDefs$$.$_initSelections$ = $dataLayerOptions$$1_initSelections$$
      }
      $initDisclosed_xmlNode$$66$$ && 0 < $initDisclosed_xmlNode$$66$$.length && ($JSCompiler_StaticMethods_ParseDataLayers$self$$.$_tmap$.$_initDrilled$[$parentLayer$$6$$.$LayerName$] = [$area$$inline_4867_dataLayer$$13_markerDefs$$.$getClientId$(), $initDisclosed_xmlNode$$66$$]);
      $topLayerName$$2$$ ? $parentLayer$$6$$.$updateDataLayer$($area$$inline_4867_dataLayer$$13_markerDefs$$, $JSCompiler_StaticMethods_ParseDataLayers$self$$.$_tmap$.$_panZoomCanvas$.$_contentPane$.$getMatrix$(), $topLayerName$$2$$) : $parentLayer$$6$$.$DataLayers$[$area$$inline_4867_dataLayer$$13_markerDefs$$.$getClientId$()] = $area$$inline_4867_dataLayer$$13_markerDefs$$
    }
  }
}
$JSCompiler_prototypeAlias$$.$_createMarker$ = function $$JSCompiler_prototypeAlias$$$$_createMarker$$($label$$99_layer$$14$$, $dataLayer$$15$$, $data$$103$$, $isParentAreaDataLayer$$) {
  var $center$$11$$ = $DvtThematicMapJsonParser$getCenter$$($dataLayer$$15$$, $data$$103$$);
  if(!$center$$11$$) {
    return $JSCompiler_alias_NULL$$
  }
  var $marker$$13_markerDefaults_sx$$7$$ = this.$_tmap$.$_styleDefaults$.dataMarkerDefaults, $markerLabelStyle_rotation$$8_sy$$7$$ = new dvt.$CSSStyle$($marker$$13_markerDefaults_sx$$7$$.labelStyle);
  $markerLabelStyle_rotation$$8_sy$$7$$.$parseInlineStyle$($data$$103$$.labelStyle);
  $data$$103$$ = dvt.$JsonUtils$.$merge$($data$$103$$, $marker$$13_markerDefaults_sx$$7$$);
  $data$$103$$.labelStyle = $markerLabelStyle_rotation$$8_sy$$7$$.toString();
  $marker$$13_markerDefaults_sx$$7$$ = 1;
  isNaN($data$$103$$.scaleX) || ($marker$$13_markerDefaults_sx$$7$$ = $data$$103$$.scaleX);
  $markerLabelStyle_rotation$$8_sy$$7$$ = 1;
  isNaN($data$$103$$.scaleY) || ($markerLabelStyle_rotation$$8_sy$$7$$ = $data$$103$$.scaleY);
  var $w$$42$$ = $data$$103$$.width, $h$$38$$ = $data$$103$$.height;
  if(!$w$$42$$ || isNaN($w$$42$$)) {
    $w$$42$$ = this.$_tmap$.$getOptions$().styleDefaults.dataMarkerDefaults.width
  }
  if(!$h$$38$$ || isNaN($h$$38$$)) {
    $h$$38$$ = this.$_tmap$.$getOptions$().styleDefaults.dataMarkerDefaults.height
  }
  if($data$$103$$.source) {
    $marker$$13_markerDefaults_sx$$7$$ = new dvt.$ImageMarker$(this.$_tmap$.$getCtx$(), $center$$11$$.x, $center$$11$$.y, $w$$42$$ * $marker$$13_markerDefaults_sx$$7$$, $h$$38$$ * $markerLabelStyle_rotation$$8_sy$$7$$, $data$$103$$.source, $data$$103$$.sourceSelected, $data$$103$$.sourceHover, $data$$103$$.sourceHoverSelected)
  }else {
    var $shapeType$$ = $data$$103$$.shape ? $data$$103$$.shape : this.$_tmap$.$getOptions$().styleDefaults.dataMarkerDefaults.shape, $marker$$13_markerDefaults_sx$$7$$ = new dvt.$SimpleMarker$(this.$_tmap$.$getCtx$(), $shapeType$$, this.$_tmap$.$_skinName$, $center$$11$$.x, $center$$11$$.y, $w$$42$$ * $marker$$13_markerDefaults_sx$$7$$, $h$$38$$ * $markerLabelStyle_rotation$$8_sy$$7$$)
  }
  ($markerLabelStyle_rotation$$8_sy$$7$$ = $data$$103$$.rotation) && $marker$$13_markerDefaults_sx$$7$$.$setRotation$($markerLabelStyle_rotation$$8_sy$$7$$ * Math.PI / 180);
  $isParentAreaDataLayer$$ && ($label$$99_layer$$14$$.$_renderLabel$[$data$$103$$.location] = $JSCompiler_alias_FALSE$$);
  $JSCompiler_StaticMethods__styleDisplayable$$(this, $data$$103$$, $marker$$13_markerDefaults_sx$$7$$);
  $label$$99_layer$$14$$ = this.$_createLabel$($label$$99_layer$$14$$, $dataLayer$$15$$, $data$$103$$, $marker$$13_markerDefaults_sx$$7$$, $isParentAreaDataLayer$$);
  return new $DvtMapObjPeer$$($data$$103$$, $dataLayer$$15$$, $marker$$13_markerDefaults_sx$$7$$, $label$$99_layer$$14$$, $center$$11$$)
};
$JSCompiler_prototypeAlias$$.$_createImage$ = function $$JSCompiler_prototypeAlias$$$$_createImage$$($layer$$15$$, $dataLayer$$16$$, $data$$104$$, $isParentAreaDataLayer$$1$$) {
  var $center$$12$$ = $DvtThematicMapJsonParser$getCenter$$($dataLayer$$16$$, $data$$104$$);
  if(!$center$$12$$) {
    return $JSCompiler_alias_NULL$$
  }
  var $image$$20$$ = new dvt.$Image$(this.$_tmap$.$getCtx$(), $data$$104$$.url), $width$$124$$ = $data$$104$$.width, $height$$108$$ = $data$$104$$.height;
  $width$$124$$ != $JSCompiler_alias_NULL$$ && $height$$108$$ != $JSCompiler_alias_NULL$$ && ($image$$20$$.$setX$($center$$12$$.x - $width$$124$$ / 2), $image$$20$$.$setY$($center$$12$$.y - $height$$108$$ / 2), $image$$20$$.$setWidth$($width$$124$$), $image$$20$$.$setHeight$($height$$108$$));
  $isParentAreaDataLayer$$1$$ && ($layer$$15$$.$_renderLabel$[$data$$104$$.location] = $JSCompiler_alias_FALSE$$);
  var $peer$$33$$ = new $DvtMapObjPeer$$($data$$104$$, $dataLayer$$16$$, $image$$20$$, $JSCompiler_alias_NULL$$, $center$$12$$);
  (!$width$$124$$ || !$height$$108$$) && dvt.$ImageLoader$.$loadImage$(this.$_tmap$.$getCtx$(), $data$$104$$.url, function($layer$$15$$) {
    $layer$$15$$ && ($layer$$15$$.width && $layer$$15$$.height) && ($image$$20$$.$setWidth$($layer$$15$$.width), $image$$20$$.$setHeight$($layer$$15$$.height), $image$$20$$.$setX$($center$$12$$.x - $layer$$15$$.width / 2), $image$$20$$.$setY$($center$$12$$.y - $layer$$15$$.height / 2), $peer$$33$$.$__recenter$())
  });
  return $peer$$33$$
};
$JSCompiler_prototypeAlias$$.$_createLabel$ = function $$JSCompiler_prototypeAlias$$$$_createLabel$$($fillColor$$6_layer$$17$$, $dataLayer$$18_labelStyle$$21$$, $data$$106$$, $displayable$$80_isArea$$1$$, $isParentAreaDataLayer$$3$$) {
  var $areaId$$4$$ = $data$$106$$.location, $labelText$$2$$ = $data$$106$$.label, $labelDisplay$$7$$ = $labelText$$2$$ ? "on" : "off";
  $isParentAreaDataLayer$$3$$ && ($labelDisplay$$7$$ = $fillColor$$6_layer$$17$$.$getLabelDisplay$());
  $displayable$$80_isArea$$1$$ = $displayable$$80_isArea$$1$$ instanceof dvt.$Path$;
  if(!$labelText$$2$$ && $isParentAreaDataLayer$$3$$ && ($displayable$$80_isArea$$1$$ && "off" != $labelDisplay$$7$$ || !$displayable$$80_isArea$$1$$ && "on" == $labelDisplay$$7$$)) {
    $labelText$$2$$ = "long" == $fillColor$$6_layer$$17$$.$_labelType$ ? $fillColor$$6_layer$$17$$.$AreaNames$[$areaId$$4$$][1] : $fillColor$$6_layer$$17$$.$AreaNames$[$areaId$$4$$][0]
  }
  if($labelText$$2$$) {
    var $context$$388_label$$100$$ = this.$_tmap$.$getCtx$(), $context$$388_label$$100$$ = $displayable$$80_isArea$$1$$ ? new $DvtMapLabel$$($context$$388_label$$100$$, $labelText$$2$$, $fillColor$$6_layer$$17$$.$getLabelInfoForArea$ ? $fillColor$$6_layer$$17$$.$getLabelInfoForArea$($areaId$$4$$) : $JSCompiler_alias_NULL$$, $labelDisplay$$7$$, $dataLayer$$18_labelStyle$$21$$.$_dataLabelLayer$, this.$_tmap$.$_bSupportsVectorEffects$) : new dvt.$OutputText$($context$$388_label$$100$$, $labelText$$2$$, 
    0, 0);
    $dataLayer$$18_labelStyle$$21$$ = new dvt.$CSSStyle$;
    $displayable$$80_isArea$$1$$ && $dataLayer$$18_labelStyle$$21$$.$merge$(new dvt.$CSSStyle$($fillColor$$6_layer$$17$$.$_layerCSSStyle$));
    $data$$106$$.labelStyle && $dataLayer$$18_labelStyle$$21$$.$parseInlineStyle$($data$$106$$.labelStyle);
    $fillColor$$6_layer$$17$$ = $dataLayer$$18_labelStyle$$21$$.$getStyle$(dvt.$CSSStyle$.$COLOR$);
    $dataLayer$$18_labelStyle$$21$$.$setStyle$(dvt.$CSSStyle$.$COLOR$, $JSCompiler_alias_NULL$$);
    $context$$388_label$$100$$.$setCSSStyle$($dataLayer$$18_labelStyle$$21$$);
    if($context$$388_label$$100$$ instanceof $DvtMapLabel$$ && (dvt.$Agent$.$isHighContrast$() || !$fillColor$$6_layer$$17$$)) {
      $fillColor$$6_layer$$17$$ = dvt.$ColorUtils$.$getContrastingTextColor$($data$$106$$.color)
    }
    $fillColor$$6_layer$$17$$ && $context$$388_label$$100$$.$setSolidFill$($fillColor$$6_layer$$17$$)
  }
  return $context$$388_label$$100$$
};
function $JSCompiler_StaticMethods__styleDisplayable$$($JSCompiler_StaticMethods__styleDisplayable$self_fill$$inline_4935$$, $borderColor$$46_style$$96$$, $displayable$$81$$) {
  var $pattern$$8$$ = $borderColor$$46_style$$96$$.pattern, $backgroundColor$$22$$ = $borderColor$$46_style$$96$$.color, $gradient$$9$$ = $JSCompiler_StaticMethods__styleDisplayable$self_fill$$inline_4935$$.$_isMobile$ || $JSCompiler_StaticMethods__styleDisplayable$self_fill$$inline_4935$$.$_tmap$.$_skinName$ == dvt.$CSSStyle$.$SKIN_ALTA$ ? "none" : $borderColor$$46_style$$96$$.visualEffects;
  if($displayable$$81$$ instanceof dvt.$SimpleMarker$) {
    if("none" != $borderColor$$46_style$$96$$.borderStyle) {
      var $borderWidth$$14_opacity$$3$$ = $borderColor$$46_style$$96$$.borderWidth;
      "string" == typeof $borderWidth$$14_opacity$$3$$ && ($borderWidth$$14_opacity$$3$$ = "px" == $borderWidth$$14_opacity$$3$$.slice(-2) ? parseFloat($borderColor$$46_style$$96$$.borderWidth.slice(0, -2)) : parseFloat($borderColor$$46_style$$96$$.borderWidth));
      var $stroke$$98$$ = new dvt.$SolidStroke$($borderColor$$46_style$$96$$.borderColor, 1, $borderWidth$$14_opacity$$3$$);
      $JSCompiler_StaticMethods__styleDisplayable$self_fill$$inline_4935$$.$_tmap$.$_isMarkerZoomBehaviorFixed$ || $stroke$$98$$.$setFixedWidth$($JSCompiler_alias_TRUE$$);
      $stroke$$98$$.$setType$(dvt.$Stroke$.$convertTypeString$($borderColor$$46_style$$96$$.borderStyle));
      $displayable$$81$$.$setStroke$($stroke$$98$$)
    }
    $borderWidth$$14_opacity$$3$$ = $borderColor$$46_style$$96$$.opacity;
    "none" != $gradient$$9$$ ? $displayable$$81$$.$setFill$(new dvt.$MarkerGradient$.$createMarkerGradient$($backgroundColor$$22$$, $displayable$$81$$, $borderWidth$$14_opacity$$3$$)) : $pattern$$8$$ ? $displayable$$81$$.$setFill$(new dvt.$PatternFill$($pattern$$8$$, $backgroundColor$$22$$, "#FFFFFF")) : $backgroundColor$$22$$ && $displayable$$81$$.$setSolidFill$($backgroundColor$$22$$, $borderWidth$$14_opacity$$3$$)
  }else {
    if($displayable$$81$$ instanceof dvt.$Path$) {
      if($borderColor$$46_style$$96$$ = $borderColor$$46_style$$96$$.borderColor) {
        $stroke$$98$$ = new dvt.$SolidStroke$($borderColor$$46_style$$96$$), $JSCompiler_StaticMethods__styleDisplayable$self_fill$$inline_4935$$.$_tmap$.$_bSupportsVectorEffects$ && $stroke$$98$$.$setFixedWidth$($JSCompiler_alias_TRUE$$), $displayable$$81$$.$setStroke$($stroke$$98$$)
      }
      $pattern$$8$$ ? ($JSCompiler_StaticMethods__styleDisplayable$self_fill$$inline_4935$$ = new dvt.$PatternFill$($pattern$$8$$, $backgroundColor$$22$$, "#FFFFFF"), $displayable$$81$$.$_ptFill$ = $JSCompiler_StaticMethods__styleDisplayable$self_fill$$inline_4935$$) : $displayable$$81$$.$setSolidFill$($backgroundColor$$22$$, $borderWidth$$14_opacity$$3$$)
    }
  }
}
function $DvtThematicMapJsonParser$getCenter$$($dataLayer$$19$$, $data$$107$$) {
  var $locationCoords_map$$12$$ = $dataLayer$$19$$.$_tmap$, $mapName$$ = $locationCoords_map$$12$$.$_mapName$, $location$$25$$ = $data$$107$$.location;
  return $location$$25$$ ? (($locationCoords_map$$12$$ = $DvtBaseMapManager$$.$getAreaCenter$($mapName$$, $dataLayer$$19$$.$_parentLayer$.$LayerName$, $location$$25$$)) || ($locationCoords_map$$12$$ = $DvtBaseMapManager$$.$getCityCoordinates$($mapName$$, $location$$25$$)), $locationCoords_map$$12$$) : $DvtThematicMapProjections$$.$project$($data$$107$$.x, $data$$107$$.y, $locationCoords_map$$12$$.$_mapName$)
}
$JSCompiler_prototypeAlias$$.$_getShowPopupBehaviors$ = function $$JSCompiler_prototypeAlias$$$$_getShowPopupBehaviors$$($popups$$2$$) {
  for(var $spbs$$6$$ = [], $i$$616$$ = 0;$i$$616$$ < $popups$$2$$.length;$i$$616$$++) {
    $spbs$$6$$.push(new dvt.$ShowPopupBehavior$($popups$$2$$[$i$$616$$].popupId, $popups$$2$$[$i$$616$$].triggerType, $JSCompiler_alias_NULL$$, $popups$$2$$[$i$$616$$].align))
  }
  return $spbs$$6$$
};
var $DvtThematicMapProjections$$ = {};
dvt.$Obj$.$createSubclass$($DvtThematicMapProjections$$, dvt.$Obj$);
$DvtThematicMapProjections$$.$_VIEWPORT_BOUNDS$ = new dvt.$Rectangle$(0, 0, 800, 500);
$DvtThematicMapProjections$$.$_RADIUS$ = 6378206.4;
$DvtThematicMapProjections$$.$_NEW_ZEALAND_RECT$ = new dvt.$Rectangle$(500, 200, 200, 200);
$DvtThematicMapProjections$$.$_NEW_ZEALAND_BOUNDS$ = new dvt.$Rectangle$(163, -49, 17, 17);
$DvtThematicMapProjections$$.$_AFRICA_BOUNDS$ = new dvt.$Rectangle$(-17.379205428479874, -37.201510854305546, 68.66391442808313, 77.50071544582713);
$DvtThematicMapProjections$$.$_ASIA_BOUNDS$ = new dvt.$Rectangle$(-0.8436866097568272, -0.7626456732012923, 1.8336308036296942, 1.5748427214611724);
$DvtThematicMapProjections$$.$_AUSTRALIA_BOUNDS$ = new dvt.$Rectangle$(113.29667079927977, -52.89550592498755, 65.25257389065216, 42.123114617504626);
$DvtThematicMapProjections$$.$_EUROPE_BOUNDS$ = new dvt.$Rectangle$(-0.47944476148667076, -0.0014669405958800579, 0.7364925893845453, 0.6293972741802124);
$DvtThematicMapProjections$$.$_N_AMERICA_BOUNDS$ = new dvt.$Rectangle$(-0.6154469465354344, -0.24589767758847714, 1.2448236795108683, 1.2631535127174947);
$DvtThematicMapProjections$$.$_S_AMERICA_BOUNDS$ = new dvt.$Rectangle$(-80.60817722658722, -60.796273249672765, 46.608687602908056, 66.96595767361796);
$DvtThematicMapProjections$$.$_APAC_BOUNDS$ = new dvt.$Rectangle$(68.20516856593524, -52.89892708045518, 111.65739821771903, 116.55460214469134);
$DvtThematicMapProjections$$.$_EMEA_BOUNDS$ = new dvt.$Rectangle$(-24.543831069368586, -37.202500659225905, 204.54283106936856, 164.9634493690208);
$DvtThematicMapProjections$$.$_L_AMERICA_BOUNDS$ = new dvt.$Rectangle$(-117.12451221229134, -54.95921623126266, 82.33223251442891, 87.67786623127876);
$DvtThematicMapProjections$$.$_USA_CANADA_BOUNDS$ = new dvt.$Rectangle$(-0.6154656300926513, 0.0507209798775865, 1.0153104799231851, 0.966537441082997);
$DvtThematicMapProjections$$.$_WORLD_BOUNDS$ = new dvt.$Rectangle$(-171.9, -62.6, 349.8, 150.8);
$DvtThematicMapProjections$$.$_ALASKA1_RECT$ = new dvt.$Rectangle$(172, 51, 8, 3);
$DvtThematicMapProjections$$.$_ALASKA2_RECT$ = new dvt.$Rectangle$(-180, 51, 51, 21);
$DvtThematicMapProjections$$.$_HAWAII_RECT$ = new dvt.$Rectangle$(-178.5, 18.9, 35, 11);
$DvtThematicMapProjections$$.$_USA_RECT$ = new dvt.$Rectangle$(-124.8, 24.4, 58, 25.5);
$DvtThematicMapProjections$$.$_ALASKA_BOUNDS$ = new dvt.$Rectangle$(-187.5517578125, 59.82610321044922, 57.562225341796875, 43.83738708496094);
$DvtThematicMapProjections$$.$_HAWAII_BOUNDS$ = new dvt.$Rectangle$(-160.23606872558594, 18.91549301147461, 5.4374847412109375, 3.3189010620117188);
$DvtThematicMapProjections$$.$_USA_BOUNDS$ = new dvt.$Rectangle$(-2386803.25, -1183550.5, 4514111, 2908402);
$DvtThematicMapProjections$$.$_HAWAII_WINDOW$ = new dvt.$Rectangle$(165, 400, 100, 100);
$DvtThematicMapProjections$$.$_ALASKA_WINDOW$ = new dvt.$Rectangle$(-75, 350, 240, 150);
$DvtThematicMapProjections$$.$_ROBINSON_COORDINATES$ = [[1, 0], [0.9986, 0.0314], [0.9954, 0.0629], [0.99, 0.0943], [0.9822, 0.1258], [0.973, 0.1572], [0.96, 0.1887], [0.9427, 0.2201], [0.9216, 0.2515], [0.8962, 0.2826], [0.8679, 0.3132], [0.835, 0.3433], [0.7986, 0.3726], [0.7597, 0.4008], [0.6732, 0.4532], [0.6213, 0.4765], [0.5722, 0.4951], [0.5322, 0.5072]];
$DvtThematicMapProjections$$.$project$ = function $$DvtThematicMapProjections$$$$project$$($x$$191$$, $y$$165$$, $basemap$$5$$) {
  var $point$$42$$;
  switch($basemap$$5$$) {
    case "africa":
      $point$$42$$ = $DvtThematicMapProjections$$.$_getAffineProjection$($DvtThematicMapProjections$$.$_AFRICA_BOUNDS$, $DvtThematicMapProjections$$.$_getMercatorProjection$($x$$191$$, $y$$165$$));
      break;
    case "asia":
      $point$$42$$ = $DvtThematicMapProjections$$.$_getAffineProjection$($DvtThematicMapProjections$$.$_ASIA_BOUNDS$, $DvtThematicMapProjections$$.$_getAlbersEqualAreaConicProjection$(40, 95, 20, 60, $x$$191$$, $y$$165$$), $DvtThematicMapProjections$$.$toRadians$(5));
      break;
    case "australia":
      $point$$42$$ = $DvtThematicMapProjections$$.$_getAustraliaProjection$($x$$191$$, $y$$165$$);
      break;
    case "europe":
      $point$$42$$ = $DvtThematicMapProjections$$.$_getAffineProjection$($DvtThematicMapProjections$$.$_EUROPE_BOUNDS$, $DvtThematicMapProjections$$.$_getAlbersEqualAreaConicProjection$(35, 25, 40, 65, $x$$191$$, $y$$165$$), $DvtThematicMapProjections$$.$toRadians$(10));
      break;
    case "northAmerica":
      $point$$42$$ = $DvtThematicMapProjections$$.$_getAffineProjection$($DvtThematicMapProjections$$.$_N_AMERICA_BOUNDS$, $DvtThematicMapProjections$$.$_getAlbersEqualAreaConicProjection$(23, -96, 20, 60, $x$$191$$, $y$$165$$));
      break;
    case "southAmerica":
      $point$$42$$ = $DvtThematicMapProjections$$.$_getAffineProjection$($DvtThematicMapProjections$$.$_S_AMERICA_BOUNDS$, new dvt.$Point$($x$$191$$, $y$$165$$), $DvtThematicMapProjections$$.$toRadians$(5));
      break;
    case "apac":
      $point$$42$$ = $DvtThematicMapProjections$$.$_getAffineProjection$($DvtThematicMapProjections$$.$_APAC_BOUNDS$, $DvtThematicMapProjections$$.$_getMercatorProjection$($x$$191$$, $y$$165$$));
      break;
    case "emea":
      $point$$42$$ = $DvtThematicMapProjections$$.$_getAffineProjection$($DvtThematicMapProjections$$.$_EMEA_BOUNDS$, $DvtThematicMapProjections$$.$_getMercatorProjection$($x$$191$$, $y$$165$$));
      break;
    case "latinAmerica":
      $point$$42$$ = $DvtThematicMapProjections$$.$_getAffineProjection$($DvtThematicMapProjections$$.$_L_AMERICA_BOUNDS$, new dvt.$Point$($x$$191$$, $y$$165$$));
      break;
    case "usaAndCanada":
      $point$$42$$ = $DvtThematicMapProjections$$.$_getAffineProjection$($DvtThematicMapProjections$$.$_USA_CANADA_BOUNDS$, $DvtThematicMapProjections$$.$_getAlbersEqualAreaConicProjection$(23, -96, 20, 60, $x$$191$$, $y$$165$$));
      break;
    case "worldRegions":
      $point$$42$$ = $DvtThematicMapProjections$$.$_getWorldProjection$($x$$191$$, $y$$165$$);
      break;
    case "usa":
      $point$$42$$ = $DvtThematicMapProjections$$.$_getUSAProjection$($x$$191$$, $y$$165$$);
      break;
    case "world":
      $point$$42$$ = $DvtThematicMapProjections$$.$_getWorldProjection$($x$$191$$, $y$$165$$)
  }
  return $point$$42$$ ? new dvt.$Point$(10 * $point$$42$$.x, 10 * $point$$42$$.y) : $JSCompiler_alias_NULL$$
};
$DvtThematicMapProjections$$.$_getUSAProjection$ = function $$DvtThematicMapProjections$$$$_getUSAProjection$$($x$$192$$, $y$$166$$) {
  var $transformedPoint$$1_viewPortTransform$$;
  $DvtThematicMapProjections$$.$_ALASKA1_RECT$.$containsPoint$($x$$192$$, $y$$166$$) || $DvtThematicMapProjections$$.$_ALASKA2_RECT$.$containsPoint$($x$$192$$, $y$$166$$) ? ($transformedPoint$$1_viewPortTransform$$ = $DvtThematicMapProjections$$.$_getViewPortTransformation$($DvtThematicMapProjections$$.$_ALASKA_BOUNDS$, $DvtThematicMapProjections$$.$_ALASKA_WINDOW$), $transformedPoint$$1_viewPortTransform$$ = $DvtThematicMapProjections$$.$_applyAffineTransform$($transformedPoint$$1_viewPortTransform$$, 
  $DvtThematicMapProjections$$.$_getMercatorProjection$($x$$192$$, $y$$166$$))) : $DvtThematicMapProjections$$.$_HAWAII_RECT$.$containsPoint$($x$$192$$, $y$$166$$) ? ($transformedPoint$$1_viewPortTransform$$ = $DvtThematicMapProjections$$.$_getViewPortTransformation$($DvtThematicMapProjections$$.$_HAWAII_BOUNDS$, $DvtThematicMapProjections$$.$_HAWAII_WINDOW$), $transformedPoint$$1_viewPortTransform$$ = $DvtThematicMapProjections$$.$_applyAffineTransform$($transformedPoint$$1_viewPortTransform$$, 
  new dvt.$Point$($x$$192$$, $y$$166$$))) : $DvtThematicMapProjections$$.$_USA_RECT$.$containsPoint$($x$$192$$, $y$$166$$) && ($transformedPoint$$1_viewPortTransform$$ = $DvtThematicMapProjections$$.$_getViewPortTransformation$($DvtThematicMapProjections$$.$_USA_BOUNDS$, $DvtThematicMapProjections$$.$_VIEWPORT_BOUNDS$), $transformedPoint$$1_viewPortTransform$$ = $DvtThematicMapProjections$$.$_applyAffineTransform$($transformedPoint$$1_viewPortTransform$$, $DvtThematicMapProjections$$.$_getOrthographicProjection$(new dvt.$Point$(-95, 
  36), $x$$192$$, $y$$166$$)));
  return $DvtThematicMapProjections$$.$_getBoundedTransformedPoint$($transformedPoint$$1_viewPortTransform$$)
};
$DvtThematicMapProjections$$.$_getWorldProjection$ = function $$DvtThematicMapProjections$$$$_getWorldProjection$$($x$$193$$, $y$$167$$) {
  var $transformedPoint$$2_viewPortTransform$$1$$ = $DvtThematicMapProjections$$.$_getViewPortTransformation$($DvtThematicMapProjections$$.$_WORLD_BOUNDS$, $DvtThematicMapProjections$$.$_VIEWPORT_BOUNDS$), $transformedPoint$$2_viewPortTransform$$1$$ = $DvtThematicMapProjections$$.$_applyAffineTransform$($transformedPoint$$2_viewPortTransform$$1$$, $DvtThematicMapProjections$$.$_getRobinsonProjection$($x$$193$$, $y$$167$$));
  return $DvtThematicMapProjections$$.$_getBoundedTransformedPoint$($transformedPoint$$2_viewPortTransform$$1$$)
};
$DvtThematicMapProjections$$.$_getAustraliaProjection$ = function $$DvtThematicMapProjections$$$$_getAustraliaProjection$$($x$$194$$, $y$$168$$) {
  var $transformedPoint$$3_viewPortTransform$$2$$;
  $transformedPoint$$3_viewPortTransform$$2$$ = $DvtThematicMapProjections$$.$_NEW_ZEALAND_BOUNDS$.$containsPoint$($x$$194$$, $y$$168$$) ? $DvtThematicMapProjections$$.$_getViewPortTransformation$($DvtThematicMapProjections$$.$_NEW_ZEALAND_BOUNDS$, $DvtThematicMapProjections$$.$_NEW_ZEALAND_RECT$) : $DvtThematicMapProjections$$.$_getViewPortTransformation$($DvtThematicMapProjections$$.$_AUSTRALIA_BOUNDS$, $DvtThematicMapProjections$$.$_VIEWPORT_BOUNDS$);
  $transformedPoint$$3_viewPortTransform$$2$$ = $DvtThematicMapProjections$$.$_applyAffineTransform$($transformedPoint$$3_viewPortTransform$$2$$, $DvtThematicMapProjections$$.$_getMercatorProjection$($x$$194$$, $y$$168$$));
  return $DvtThematicMapProjections$$.$_getBoundedTransformedPoint$($transformedPoint$$3_viewPortTransform$$2$$)
};
$DvtThematicMapProjections$$.$_getAffineProjection$ = function $$DvtThematicMapProjections$$$$_getAffineProjection$$($mapBounds_viewPortTransform$$3$$, $point$$43_transformedPoint$$4$$, $rotRadians$$) {
  $mapBounds_viewPortTransform$$3$$ = $DvtThematicMapProjections$$.$_getViewPortTransformation$($mapBounds_viewPortTransform$$3$$, $DvtThematicMapProjections$$.$_VIEWPORT_BOUNDS$);
  if($rotRadians$$) {
    var $rotMatrix$$ = new dvt.$Matrix$;
    $rotMatrix$$.rotate($rotRadians$$);
    $mapBounds_viewPortTransform$$3$$ = $DvtThematicMapProjections$$.$_concatAffineTransforms$($mapBounds_viewPortTransform$$3$$, $rotMatrix$$)
  }
  $point$$43_transformedPoint$$4$$ = $mapBounds_viewPortTransform$$3$$.$transformPoint$($point$$43_transformedPoint$$4$$);
  return $DvtThematicMapProjections$$.$_getBoundedTransformedPoint$($point$$43_transformedPoint$$4$$)
};
$DvtThematicMapProjections$$.$_getBoundedTransformedPoint$ = function $$DvtThematicMapProjections$$$$_getBoundedTransformedPoint$$($point$$44$$) {
  var $bounds$$122$$ = $DvtThematicMapProjections$$.$_VIEWPORT_BOUNDS$;
  return!$point$$44$$ || !$bounds$$122$$.$containsPoint$($point$$44$$.x, $point$$44$$.y) ? $JSCompiler_alias_NULL$$ : $point$$44$$
};
$DvtThematicMapProjections$$.$_getAlbersEqualAreaConicProjection$ = function $$DvtThematicMapProjections$$$$_getAlbersEqualAreaConicProjection$$($latOfOrigin_phi0_rho0$$, $lambda0_lonOfOrigin$$, $c$$32_sP1$$, $n$$38_sP2$$, $theta$$3_x$$195$$, $rho_y$$169$$) {
  $lambda0_lonOfOrigin$$ = $DvtThematicMapProjections$$.$toRadians$($lambda0_lonOfOrigin$$);
  $latOfOrigin_phi0_rho0$$ = $DvtThematicMapProjections$$.$toRadians$($latOfOrigin_phi0_rho0$$);
  $c$$32_sP1$$ = $DvtThematicMapProjections$$.$toRadians$($c$$32_sP1$$);
  $n$$38_sP2$$ = $DvtThematicMapProjections$$.$toRadians$($n$$38_sP2$$);
  $n$$38_sP2$$ = 0.5 * (Math.sin($c$$32_sP1$$) + Math.sin($n$$38_sP2$$));
  $c$$32_sP1$$ = Math.pow(Math.cos($c$$32_sP1$$), 2) + 2 * $n$$38_sP2$$ * Math.sin($c$$32_sP1$$);
  $latOfOrigin_phi0_rho0$$ = $c$$32_sP1$$ - 2 * $n$$38_sP2$$ * Math.sin($latOfOrigin_phi0_rho0$$);
  $latOfOrigin_phi0_rho0$$ = Math.sqrt($latOfOrigin_phi0_rho0$$) / $n$$38_sP2$$;
  $theta$$3_x$$195$$ = $n$$38_sP2$$ * ($DvtThematicMapProjections$$.$toRadians$($theta$$3_x$$195$$) - $lambda0_lonOfOrigin$$);
  $rho_y$$169$$ = $c$$32_sP1$$ - 2 * $n$$38_sP2$$ * Math.sin($DvtThematicMapProjections$$.$toRadians$($rho_y$$169$$));
  $rho_y$$169$$ = Math.sqrt($rho_y$$169$$) / $n$$38_sP2$$;
  return new dvt.$Point$($rho_y$$169$$ * Math.sin($theta$$3_x$$195$$), $latOfOrigin_phi0_rho0$$ - $rho_y$$169$$ * Math.cos($theta$$3_x$$195$$))
};
$DvtThematicMapProjections$$.$_getMercatorProjection$ = function $$DvtThematicMapProjections$$$$_getMercatorProjection$$($x$$196$$, $y$$170$$) {
  var $pY$$1$$ = Math.log(Math.tan(0.25 * Math.PI + 0.5 * $DvtThematicMapProjections$$.$toRadians$($y$$170$$)));
  return new dvt.$Point$($x$$196$$, $DvtThematicMapProjections$$.$toDegrees$($pY$$1$$))
};
$DvtThematicMapProjections$$.$_getOrthographicProjection$ = function $$DvtThematicMapProjections$$$$_getOrthographicProjection$$($center$$14_centerY$$4$$, $radX_x$$197$$, $radY_y$$171$$) {
  $radX_x$$197$$ = $DvtThematicMapProjections$$.$toRadians$($radX_x$$197$$);
  $radY_y$$171$$ = $DvtThematicMapProjections$$.$toRadians$($radY_y$$171$$);
  var $centerX$$4$$ = $DvtThematicMapProjections$$.$toRadians$($center$$14_centerY$$4$$.x);
  $center$$14_centerY$$4$$ = $DvtThematicMapProjections$$.$toRadians$($center$$14_centerY$$4$$.y);
  return new dvt.$Point$(Math.cos($radY_y$$171$$) * Math.sin($radX_x$$197$$ - $centerX$$4$$) * $DvtThematicMapProjections$$.$_RADIUS$, (Math.cos($center$$14_centerY$$4$$) * Math.sin($radY_y$$171$$) - Math.sin($center$$14_centerY$$4$$) * Math.cos($radY_y$$171$$) * Math.cos($radX_x$$197$$ - $centerX$$4$$)) * $DvtThematicMapProjections$$.$_RADIUS$)
};
$DvtThematicMapProjections$$.$_getRobinsonProjection$ = function $$DvtThematicMapProjections$$$$_getRobinsonProjection$$($x$$198$$, $y$$172$$) {
  var $newY$$9_ycriteria$$ = Math.floor(Math.abs($y$$172$$) / 5);
  $newY$$9_ycriteria$$ >= $DvtThematicMapProjections$$.$_ROBINSON_COORDINATES$.length - 1 && ($newY$$9_ycriteria$$ = $DvtThematicMapProjections$$.$_ROBINSON_COORDINATES$.length - 2);
  var $yInterval$$ = (Math.abs($y$$172$$) - 5 * $newY$$9_ycriteria$$) / 5, $newX$$8$$ = $x$$198$$ * ($DvtThematicMapProjections$$.$_ROBINSON_COORDINATES$[$newY$$9_ycriteria$$][0] + $yInterval$$ * ($DvtThematicMapProjections$$.$_ROBINSON_COORDINATES$[$newY$$9_ycriteria$$ + 1][0] - $DvtThematicMapProjections$$.$_ROBINSON_COORDINATES$[$newY$$9_ycriteria$$][0])), $newY$$9_ycriteria$$ = $DvtThematicMapProjections$$.$_ROBINSON_COORDINATES$[$newY$$9_ycriteria$$][1] + $yInterval$$ * ($DvtThematicMapProjections$$.$_ROBINSON_COORDINATES$[$newY$$9_ycriteria$$ + 
  1][1] - $DvtThematicMapProjections$$.$_ROBINSON_COORDINATES$[$newY$$9_ycriteria$$][1]);
  0 > $y$$172$$ && ($newY$$9_ycriteria$$ *= -1);
  return new dvt.$Point$($newX$$8$$, 180 * $newY$$9_ycriteria$$)
};
$DvtThematicMapProjections$$.$_applyAffineTransform$ = function $$DvtThematicMapProjections$$$$_applyAffineTransform$$($matrix$$14$$, $point$$45$$) {
  return new dvt.$Point$($point$$45$$.x * $matrix$$14$$.$_a$ + $matrix$$14$$.$_tx$, $point$$45$$.y * $matrix$$14$$.$_d$ + $matrix$$14$$.$_ty$)
};
$DvtThematicMapProjections$$.$_concatAffineTransforms$ = function $$DvtThematicMapProjections$$$$_concatAffineTransforms$$($transform1$$, $transform2$$) {
  var $t1A$$ = $transform1$$.$_a$, $t1D$$ = $transform1$$.$_d$;
  return new dvt.$Matrix$($transform2$$.$_a$ * $t1A$$, $transform2$$.$_b$ * $t1A$$, $transform2$$.$_c$ * $t1D$$, $transform2$$.$_d$ * $t1D$$, $transform1$$.$_tx$ + $transform2$$.$_tx$ * $t1A$$, $transform1$$.$_ty$ + $transform2$$.$_ty$ * $t1D$$)
};
$DvtThematicMapProjections$$.$_getViewPortTransformation$ = function $$DvtThematicMapProjections$$$$_getViewPortTransformation$$($mapBound$$, $deviceView$$) {
  var $d5_i$$617$$ = $deviceView$$.x, $d6_j$$95$$ = $deviceView$$.y, $d$$7$$ = $mapBound$$.$w$, $d1$$1$$ = $mapBound$$.$h$, $d2$$1_d3$$1$$ = 0, $d2$$1_d3$$1$$ = $deviceView$$.$w$ / $d$$7$$, $d4$$ = $deviceView$$.$h$ / $d1$$1$$, $d2$$1_d3$$1$$ = $d2$$1_d3$$1$$ <= $d4$$ ? $d2$$1_d3$$1$$ : $d4$$, $d5_i$$617$$ = $d5_i$$617$$ - $mapBound$$.x * $d2$$1_d3$$1$$, $d6_j$$95$$ = $d6_j$$95$$ + $mapBound$$.y * $d2$$1_d3$$1$$, $d5_i$$617$$ = $d5_i$$617$$ + ($deviceView$$.$w$ - $d$$7$$ * $d2$$1_d3$$1$$) / 2, $d6_j$$95$$ = 
  $d6_j$$95$$ + ($deviceView$$.$h$ - ($deviceView$$.$h$ - $d1$$1$$ * $d2$$1_d3$$1$$) / 2);
  return new dvt.$Matrix$($d2$$1_d3$$1$$, 0, 0, -$d2$$1_d3$$1$$, $d5_i$$617$$, $d6_j$$95$$)
};
$DvtThematicMapProjections$$.$toRadians$ = function $$DvtThematicMapProjections$$$$toRadians$$($x$$199$$) {
  return $x$$199$$ * (Math.PI / 180)
};
$DvtThematicMapProjections$$.$toDegrees$ = function $$DvtThematicMapProjections$$$$toDegrees$$($x$$200$$) {
  return $x$$200$$ * (180 / Math.PI)
};
$DvtThematicMapProjections$$.$inverseProject$ = function $$DvtThematicMapProjections$$$$inverseProject$$($x$$201$$, $y$$173$$, $basemap$$6$$) {
  var $point$$46$$;
  $x$$201$$ /= 10;
  $y$$173$$ /= 10;
  switch($basemap$$6$$) {
    case "africa":
      $point$$46$$ = $DvtThematicMapProjections$$.$_getInverseAffineProjection$($DvtThematicMapProjections$$.$_AFRICA_BOUNDS$, new dvt.$Point$($x$$201$$, $y$$173$$));
      $point$$46$$ = $DvtThematicMapProjections$$.$_getInverseMercatorProjection$($point$$46$$.x, $point$$46$$.y);
      break;
    case "asia":
      $point$$46$$ = $DvtThematicMapProjections$$.$_getInverseAffineProjection$($DvtThematicMapProjections$$.$_ASIA_BOUNDS$, new dvt.$Point$($x$$201$$, $y$$173$$), $DvtThematicMapProjections$$.$toRadians$(5));
      $point$$46$$ = $DvtThematicMapProjections$$.$_getInverseAlbersEqualAreaConicProjection$(40, 95, 20, 60, $point$$46$$.x, $point$$46$$.y);
      break;
    case "australia":
      $point$$46$$ = $DvtThematicMapProjections$$.$_getInverseAustraliaProjection$($x$$201$$, $y$$173$$);
      break;
    case "europe":
      $point$$46$$ = $DvtThematicMapProjections$$.$_getInverseAffineProjection$($DvtThematicMapProjections$$.$_EUROPE_BOUNDS$, new dvt.$Point$($x$$201$$, $y$$173$$), $DvtThematicMapProjections$$.$toRadians$(10));
      $point$$46$$ = $DvtThematicMapProjections$$.$_getInverseAlbersEqualAreaConicProjection$(35, 25, 40, 65, $point$$46$$.x, $point$$46$$.y);
      break;
    case "northAmerica":
      $point$$46$$ = $DvtThematicMapProjections$$.$_getInverseAffineProjection$($DvtThematicMapProjections$$.$_N_AMERICA_BOUNDS$, new dvt.$Point$($x$$201$$, $y$$173$$));
      $point$$46$$ = $DvtThematicMapProjections$$.$_getInverseAlbersEqualAreaConicProjection$(23, -96, 20, 60, $point$$46$$.x, $point$$46$$.y);
      break;
    case "southAmerica":
      $point$$46$$ = $DvtThematicMapProjections$$.$_getInverseAffineProjection$($DvtThematicMapProjections$$.$_S_AMERICA_BOUNDS$, new dvt.$Point$($x$$201$$, $y$$173$$), $DvtThematicMapProjections$$.$toRadians$(5));
      break;
    case "apac":
      $point$$46$$ = $DvtThematicMapProjections$$.$_getInverseAffineProjection$($DvtThematicMapProjections$$.$_APAC_BOUNDS$, new dvt.$Point$($x$$201$$, $y$$173$$));
      $point$$46$$ = $DvtThematicMapProjections$$.$_getInverseMercatorProjection$($point$$46$$.x, $point$$46$$.y);
      break;
    case "emea":
      $point$$46$$ = $DvtThematicMapProjections$$.$_getInverseAffineProjection$($DvtThematicMapProjections$$.$_EMEA_BOUNDS$, new dvt.$Point$($x$$201$$, $y$$173$$));
      $point$$46$$ = $DvtThematicMapProjections$$.$_getInverseMercatorProjection$($point$$46$$.x, $point$$46$$.y);
      break;
    case "latinAmerica":
      $point$$46$$ = $DvtThematicMapProjections$$.$_getInverseAffineProjection$($DvtThematicMapProjections$$.$_L_AMERICA_BOUNDS$, new dvt.$Point$($x$$201$$, $y$$173$$));
      break;
    case "usaAndCanada":
      $point$$46$$ = $DvtThematicMapProjections$$.$_getInverseAffineProjection$($DvtThematicMapProjections$$.$_USA_CANADA_BOUNDS$, new dvt.$Point$($x$$201$$, $y$$173$$));
      $point$$46$$ = $DvtThematicMapProjections$$.$_getInverseAlbersEqualAreaConicProjection$(23, -96, 20, 60, $point$$46$$.x, $point$$46$$.y);
      break;
    case "worldRegions":
      $point$$46$$ = $DvtThematicMapProjections$$.$_getInverseWorldProjection$($x$$201$$, $y$$173$$);
      break;
    case "usa":
      $point$$46$$ = $DvtThematicMapProjections$$.$_getInverseUSAProjection$($x$$201$$, $y$$173$$);
      break;
    case "world":
      $point$$46$$ = $DvtThematicMapProjections$$.$_getInverseWorldProjection$($x$$201$$, $y$$173$$)
  }
  return $point$$46$$ ? $point$$46$$ : new dvt.$Point$($x$$201$$, $y$$173$$)
};
$DvtThematicMapProjections$$.$_getInverseUSAProjection$ = function $$DvtThematicMapProjections$$$$_getInverseUSAProjection$$($x$$202$$, $y$$174$$) {
  var $point$$47_viewPortTransform$$4$$;
  return $DvtThematicMapProjections$$.$_ALASKA_WINDOW$.$containsPoint$($x$$202$$, $y$$174$$) ? ($point$$47_viewPortTransform$$4$$ = $DvtThematicMapProjections$$.$_getViewPortTransformation$($DvtThematicMapProjections$$.$_ALASKA_BOUNDS$, $DvtThematicMapProjections$$.$_ALASKA_WINDOW$), $point$$47_viewPortTransform$$4$$.$invert$(), $point$$47_viewPortTransform$$4$$ = $point$$47_viewPortTransform$$4$$.$transformPoint$(new dvt.$Point$($x$$202$$, $y$$174$$)), $DvtThematicMapProjections$$.$_getInverseMercatorProjection$($point$$47_viewPortTransform$$4$$.x, 
  $point$$47_viewPortTransform$$4$$.y)) : $DvtThematicMapProjections$$.$_HAWAII_WINDOW$.$containsPoint$($x$$202$$, $y$$174$$) ? ($point$$47_viewPortTransform$$4$$ = $DvtThematicMapProjections$$.$_getViewPortTransformation$($DvtThematicMapProjections$$.$_HAWAII_BOUNDS$, $DvtThematicMapProjections$$.$_HAWAII_WINDOW$), $point$$47_viewPortTransform$$4$$.$invert$(), $point$$47_viewPortTransform$$4$$.$transformPoint$(new dvt.$Point$($x$$202$$, $y$$174$$))) : $DvtThematicMapProjections$$.$_VIEWPORT_BOUNDS$.$containsPoint$($x$$202$$, 
  $y$$174$$) ? ($point$$47_viewPortTransform$$4$$ = $DvtThematicMapProjections$$.$_getViewPortTransformation$($DvtThematicMapProjections$$.$_USA_BOUNDS$, $DvtThematicMapProjections$$.$_VIEWPORT_BOUNDS$), $point$$47_viewPortTransform$$4$$.$invert$(), $point$$47_viewPortTransform$$4$$ = $point$$47_viewPortTransform$$4$$.$transformPoint$(new dvt.$Point$($x$$202$$, $y$$174$$)), $DvtThematicMapProjections$$.$_getInverseOrthographicProjection$(new dvt.$Point$(-95, 36), $point$$47_viewPortTransform$$4$$.x, 
  $point$$47_viewPortTransform$$4$$.y)) : new dvt.$Point$($x$$202$$, $y$$174$$)
};
$DvtThematicMapProjections$$.$_getInverseWorldProjection$ = function $$DvtThematicMapProjections$$$$_getInverseWorldProjection$$($x$$203$$, $y$$175$$) {
  var $point$$48_viewPortTransform$$5$$ = $DvtThematicMapProjections$$.$_getViewPortTransformation$($DvtThematicMapProjections$$.$_WORLD_BOUNDS$, $DvtThematicMapProjections$$.$_VIEWPORT_BOUNDS$);
  $point$$48_viewPortTransform$$5$$.$invert$();
  $point$$48_viewPortTransform$$5$$ = $point$$48_viewPortTransform$$5$$.$transformPoint$(new dvt.$Point$($x$$203$$, $y$$175$$));
  return $DvtThematicMapProjections$$.$_getInverseRobinsonProjection$($point$$48_viewPortTransform$$5$$.x, $point$$48_viewPortTransform$$5$$.y)
};
$DvtThematicMapProjections$$.$_getInverseAustraliaProjection$ = function $$DvtThematicMapProjections$$$$_getInverseAustraliaProjection$$($x$$204$$, $y$$176$$) {
  var $point$$49_viewPortTransform$$6$$;
  $point$$49_viewPortTransform$$6$$ = $DvtThematicMapProjections$$.$_NEW_ZEALAND_RECT$.$containsPoint$($x$$204$$, $y$$176$$) ? $DvtThematicMapProjections$$.$_getViewPortTransformation$($DvtThematicMapProjections$$.$_NEW_ZEALAND_BOUNDS$, $DvtThematicMapProjections$$.$_NEW_ZEALAND_RECT$) : $DvtThematicMapProjections$$.$_getViewPortTransformation$($DvtThematicMapProjections$$.$_AUSTRALIA_BOUNDS$, $DvtThematicMapProjections$$.$_VIEWPORT_BOUNDS$);
  $point$$49_viewPortTransform$$6$$.$invert$();
  $point$$49_viewPortTransform$$6$$ = $point$$49_viewPortTransform$$6$$.$transformPoint$(new dvt.$Point$($x$$204$$, $y$$176$$));
  return $DvtThematicMapProjections$$.$_getInverseMercatorProjection$($point$$49_viewPortTransform$$6$$.x, $point$$49_viewPortTransform$$6$$.y)
};
$DvtThematicMapProjections$$.$_getInverseAffineProjection$ = function $$DvtThematicMapProjections$$$$_getInverseAffineProjection$$($mapBounds$$1_viewPortTransform$$7$$, $point$$50$$, $rotRadians$$1$$) {
  $mapBounds$$1_viewPortTransform$$7$$ = $DvtThematicMapProjections$$.$_getViewPortTransformation$($mapBounds$$1_viewPortTransform$$7$$, $DvtThematicMapProjections$$.$_VIEWPORT_BOUNDS$);
  if($rotRadians$$1$$) {
    var $rotMatrix$$1$$ = new dvt.$Matrix$;
    $rotMatrix$$1$$.rotate($rotRadians$$1$$);
    $mapBounds$$1_viewPortTransform$$7$$ = $DvtThematicMapProjections$$.$_concatAffineTransforms$($mapBounds$$1_viewPortTransform$$7$$, $rotMatrix$$1$$)
  }
  $mapBounds$$1_viewPortTransform$$7$$.$invert$();
  return $mapBounds$$1_viewPortTransform$$7$$.$transformPoint$($point$$50$$)
};
$DvtThematicMapProjections$$.$_getInverseAlbersEqualAreaConicProjection$ = function $$DvtThematicMapProjections$$$$_getInverseAlbersEqualAreaConicProjection$$($latOfOrigin$$1_p0_phi0$$1$$, $lambda0$$1_lonOfOrigin$$1$$, $c$$34_sP1$$1$$, $n$$39_sP2$$1$$, $x$$205$$, $y$$177$$) {
  $lambda0$$1_lonOfOrigin$$1$$ = $DvtThematicMapProjections$$.$toRadians$($lambda0$$1_lonOfOrigin$$1$$);
  $latOfOrigin$$1_p0_phi0$$1$$ = $DvtThematicMapProjections$$.$toRadians$($latOfOrigin$$1_p0_phi0$$1$$);
  $c$$34_sP1$$1$$ = $DvtThematicMapProjections$$.$toRadians$($c$$34_sP1$$1$$);
  $n$$39_sP2$$1$$ = $DvtThematicMapProjections$$.$toRadians$($n$$39_sP2$$1$$);
  $n$$39_sP2$$1$$ = 0.5 * (Math.sin($c$$34_sP1$$1$$) + Math.sin($n$$39_sP2$$1$$));
  $c$$34_sP1$$1$$ = Math.pow(Math.cos($c$$34_sP1$$1$$), 2) + 2 * $n$$39_sP2$$1$$ * Math.sin($c$$34_sP1$$1$$);
  $latOfOrigin$$1_p0_phi0$$1$$ = $c$$34_sP1$$1$$ - 2 * $n$$39_sP2$$1$$ * Math.sin($latOfOrigin$$1_p0_phi0$$1$$);
  $latOfOrigin$$1_p0_phi0$$1$$ = Math.sqrt($latOfOrigin$$1_p0_phi0$$1$$) / $n$$39_sP2$$1$$;
  var $p$$22$$ = Math.sqrt($x$$205$$ * $x$$205$$ + ($latOfOrigin$$1_p0_phi0$$1$$ - $y$$177$$) * ($latOfOrigin$$1_p0_phi0$$1$$ - $y$$177$$));
  return new dvt.$Point$($DvtThematicMapProjections$$.$toDegrees$($lambda0$$1_lonOfOrigin$$1$$ + Math.atan($x$$205$$ / ($latOfOrigin$$1_p0_phi0$$1$$ - $y$$177$$)) / $n$$39_sP2$$1$$), $DvtThematicMapProjections$$.$toDegrees$(Math.asin(($c$$34_sP1$$1$$ - $p$$22$$ * $p$$22$$ * $n$$39_sP2$$1$$ * $n$$39_sP2$$1$$) / (2 * $n$$39_sP2$$1$$))))
};
$DvtThematicMapProjections$$.$_getInverseMercatorProjection$ = function $$DvtThematicMapProjections$$$$_getInverseMercatorProjection$$($x$$206$$, $y$$178$$) {
  return new dvt.$Point$($x$$206$$, $DvtThematicMapProjections$$.$toDegrees$(2 * Math.atan(Math.exp($DvtThematicMapProjections$$.$toRadians$($y$$178$$))) - 0.5 * Math.PI))
};
$DvtThematicMapProjections$$.$_getInverseOrthographicProjection$ = function $$DvtThematicMapProjections$$$$_getInverseOrthographicProjection$$($center$$15$$, $radX$$1_x$$207$$, $radY$$1_y$$179$$) {
  $radX$$1_x$$207$$ /= $DvtThematicMapProjections$$.$_RADIUS$;
  $radY$$1_y$$179$$ /= $DvtThematicMapProjections$$.$_RADIUS$;
  var $centerY$$5$$ = $DvtThematicMapProjections$$.$toRadians$($center$$15$$.y), $p$$23$$ = Math.sqrt($radX$$1_x$$207$$ * $radX$$1_x$$207$$ + $radY$$1_y$$179$$ * $radY$$1_y$$179$$), $c$$35$$ = Math.asin($p$$23$$);
  return new dvt.$Point$($DvtThematicMapProjections$$.$toDegrees$($DvtThematicMapProjections$$.$toRadians$($center$$15$$.x) + Math.atan($radX$$1_x$$207$$ * Math.sin($c$$35$$) / ($p$$23$$ * Math.cos($centerY$$5$$) * Math.cos($c$$35$$) - $radY$$1_y$$179$$ * Math.sin($centerY$$5$$) * Math.sin($c$$35$$)))), $DvtThematicMapProjections$$.$toDegrees$(Math.asin(Math.cos($c$$35$$) * Math.sin($centerY$$5$$) + $radY$$1_y$$179$$ * Math.sin($c$$35$$) * Math.cos($centerY$$5$$) / $p$$23$$)))
};
$DvtThematicMapProjections$$.$_getInverseRobinsonProjection$ = function $$DvtThematicMapProjections$$$$_getInverseRobinsonProjection$$($x$$208$$, $y$$180$$) {
  var $criteria$$1_originalX$$ = Math.floor(Math.abs($y$$180$$) / 5);
  $criteria$$1_originalX$$ >= $DvtThematicMapProjections$$.$_ROBINSON_COORDINATES$.length - 1 && ($criteria$$1_originalX$$ = $DvtThematicMapProjections$$.$_ROBINSON_COORDINATES$.length - 2);
  var $yInterval$$1$$ = (Math.abs($y$$180$$ / 180) - $DvtThematicMapProjections$$.$_ROBINSON_COORDINATES$[$criteria$$1_originalX$$][1]) / ($DvtThematicMapProjections$$.$_ROBINSON_COORDINATES$[$criteria$$1_originalX$$ + 1][1] - $DvtThematicMapProjections$$.$_ROBINSON_COORDINATES$[$criteria$$1_originalX$$][1]), $originalY$$ = 5 * $yInterval$$1$$ + 5 * $criteria$$1_originalX$$, $criteria$$1_originalX$$ = $x$$208$$ / ($DvtThematicMapProjections$$.$_ROBINSON_COORDINATES$[$criteria$$1_originalX$$][0] + 
  $yInterval$$1$$ * ($DvtThematicMapProjections$$.$_ROBINSON_COORDINATES$[$criteria$$1_originalX$$ + 1][0] - $DvtThematicMapProjections$$.$_ROBINSON_COORDINATES$[$criteria$$1_originalX$$][0]));
  0 > $y$$180$$ && ($originalY$$ *= -1);
  return new dvt.$Point$($criteria$$1_originalX$$, $originalY$$)
};
function $DvtThematicMapControlPanel$$($context$$389$$, $view$$56$$, $state$$95$$) {
  this.Init($context$$389$$, $view$$56$$, $state$$95$$)
}
dvt.$Obj$.$createSubclass$($DvtThematicMapControlPanel$$, dvt.$ControlPanel$);
$DvtThematicMapControlPanel$$.prototype.Init = function $$DvtThematicMapControlPanel$$$$Init$($context$$390$$, $view$$57$$, $state$$96$$) {
  $DvtThematicMapControlPanel$$.$superclass$.Init.call(this, $context$$390$$, $view$$57$$, $state$$96$$);
  this.$_drillMode$ = $view$$57$$.$_drillMode$;
  this.$_buttonImages$ = $view$$57$$.$getResourcesMap$();
  this.$_drillUpCallback$ = dvt.$Obj$.$createCallback$($view$$57$$, $view$$57$$.$drillUp$);
  this.$_drillDownCallback$ = dvt.$Obj$.$createCallback$($view$$57$$, $view$$57$$.$drillDown$);
  this.$_resetCallback$ = dvt.$Obj$.$createCallback$($view$$57$$, $view$$57$$.$resetMap$);
  this.$_drillDownButton$ = this.$_drillUpButton$ = this.$_resetButton$ = $JSCompiler_alias_NULL$$;
  this.$_drillUpButtonEnabled$ = this.$_drillDownButtonEnabled$ = $JSCompiler_alias_FALSE$$;
  this.$_styleMap$ = $view$$57$$.$getSubcomponentStyles$()
};
function $JSCompiler_StaticMethods_setEnabledDrillDownButton$$($JSCompiler_StaticMethods_setEnabledDrillDownButton$self$$, $enable$$) {
  $JSCompiler_StaticMethods_setEnabledDrillDownButton$self$$.$_drillDownButtonEnabled$ = $enable$$;
  $JSCompiler_StaticMethods_setEnabledDrillDownButton$self$$.$_drillDownButton$ && $JSCompiler_StaticMethods_setEnabledDrillDownButton$self$$.$_drillDownButton$.$setEnabled$($enable$$)
}
function $JSCompiler_StaticMethods_setEnabledDrillUpButton$$($JSCompiler_StaticMethods_setEnabledDrillUpButton$self$$, $enable$$1$$) {
  $JSCompiler_StaticMethods_setEnabledDrillUpButton$self$$.$_drillUpButtonEnabled$ = $enable$$1$$;
  $JSCompiler_StaticMethods_setEnabledDrillUpButton$self$$.$_drillUpButton$ && $JSCompiler_StaticMethods_setEnabledDrillUpButton$self$$.$_drillUpButton$.$setEnabled$($enable$$1$$)
}
$DvtThematicMapControlPanel$$.prototype.$PopulateHorzContentBar$ = function $$DvtThematicMapControlPanel$$$$$PopulateHorzContentBar$$($contentSprite$$1$$) {
  if(this.$_drillMode$ && "none" != this.$_drillMode$) {
    var $buttonOffset$$ = dvt.$StyleUtils$.$getStyle$(this.$_styleMap$, dvt.$ControlPanel$.$CP_BUTTON_WIDTH$, 0);
    this.$_resetButton$ = dvt.$ButtonLAFUtils$.$createResetButton$(this.$getCtx$(), this.$_buttonImages$, this.$_styleMap$);
    this.$_resetButton$.$setCallback$(this.$_resetCallback$, this);
    this.$_resetButton$.$setTooltip$(dvt.$Bundle$.$getTranslatedString$(dvt.$Bundle$.$SUBCOMPONENT_PREFIX$, "CONTROL_PANEL_RESET"));
    this.$_eventManager$.$associate$(this.$_resetButton$, this.$_resetButton$);
    $contentSprite$$1$$.$addChild$(this.$_resetButton$);
    this.$_drillDownButton$ = dvt.$ButtonLAFUtils$.$createDrillDownButton$(this.$getCtx$(), this.$_buttonImages$, this.$_styleMap$);
    this.$_drillDownButton$.$setCallback$(this.$_drillDownCallback$, this);
    this.$_drillDownButton$.$setTooltip$(dvt.$Bundle$.$getTranslatedString$(dvt.$Bundle$.$SUBCOMPONENT_PREFIX$, "CONTROL_PANEL_DRILLDOWN"));
    this.$_eventManager$.$associate$(this.$_drillDownButton$, this.$_drillDownButton$);
    this.$_drillDownButton$.$setTranslateX$($buttonOffset$$);
    this.$_drillDownButton$.$setEnabled$(this.$_drillDownButtonEnabled$);
    $contentSprite$$1$$.$addChild$(this.$_drillDownButton$);
    this.$_drillUpButton$ = dvt.$ButtonLAFUtils$.$createDrillUpButton$(this.$getCtx$(), this.$_buttonImages$, this.$_styleMap$);
    this.$_drillUpButton$.$setCallback$(this.$_drillUpCallback$, this);
    this.$_drillUpButton$.$setTooltip$(dvt.$Bundle$.$getTranslatedString$(dvt.$Bundle$.$SUBCOMPONENT_PREFIX$, "CONTROL_PANEL_DRILLUP"));
    this.$_eventManager$.$associate$(this.$_drillUpButton$, this.$_drillUpButton$);
    this.$_drillUpButton$.$setTranslateX$(2 * $buttonOffset$$);
    this.$_drillUpButton$.$setEnabled$(this.$_drillUpButtonEnabled$);
    $contentSprite$$1$$.$addChild$(this.$_drillUpButton$)
  }
};
$DvtThematicMapControlPanel$$.prototype.$getActionDisplayable$ = function $$DvtThematicMapControlPanel$$$$$getActionDisplayable$$($type$$159$$, $stampId$$21$$) {
  var $displayable$$82$$ = $DvtThematicMapControlPanel$$.$superclass$.$getActionDisplayable$.call(this, $type$$159$$, $stampId$$21$$);
  !$displayable$$82$$ && this.$isDisclosed$() && ("drillDown" == $type$$159$$ && this.$_drillDownButton$ && this.$_drillDownButton$.isEnabled() ? $displayable$$82$$ = this.$_drillDownButton$ : "drillUp" == $type$$159$$ && this.$_drillUpButton$ && this.$_drillUpButton$.isEnabled() ? $displayable$$82$$ = this.$_drillUpButton$ : "reset" == $type$$159$$ && (this.$_resetButton$ && this.$_resetButton$.isEnabled()) && ($displayable$$82$$ = this.$_resetButton$));
  return $displayable$$82$$
};

// To avoid changing the basemaps, which each call the basemap manager, we will
// put the basemap manager onto the returned object. We'll only do this if it's
// not defined, since in min/min-debug mode, the non-exported version is on the window.
if(!dvt['DvtBaseMapManager'])
  dvt['DvtBaseMapManager'] = DvtBaseMapManager;

  return dvt;
});

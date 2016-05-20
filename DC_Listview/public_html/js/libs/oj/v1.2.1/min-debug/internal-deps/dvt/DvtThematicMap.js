/**
 * Copyright (c) 2014, Oracle and/or its affiliates.
 * All rights reserved.
 */
"use strict";
define(['./DvtToolkit', './DvtPanZoomCanvas'], function(dvt) {
  // Internal use only.  All APIs and functionality are subject to change at any time.
  
  // Map the D namespace to dvt, which is used to provide access across partitions.
  var D = dvt;
  
D.$DvtAmxThematicMap$$ = function $$DvtAmxThematicMap$$$($context$$599$$, $callback$$152$$, $callbackObj$$105$$) {
  this.Init($context$$599$$, $callback$$152$$, $callbackObj$$105$$)
};
(0,D.$goog$exportPath_$$)("DvtAmxThematicMap", D.$DvtAmxThematicMap$$);
D.$DvtObj$$.$createSubclass$(D.$DvtAmxThematicMap$$, D.$DvtContainer$$, "DvtAmxThematicMap");
D.$DvtAmxThematicMap$$.$_LEGEND_COMPONET_GAP$ = 10;
D.$DvtAmxThematicMap$$.prototype.Init = function $$DvtAmxThematicMap$$$$Init$($context$$600$$, $callback$$153$$, $callbackObj$$106$$) {
  D.$DvtAmxThematicMap$$.$superclass$.Init.call(this, $context$$600$$);
  this.$_tmap$ = new D.$DvtThematicMap$$($context$$600$$, $callback$$153$$, $callbackObj$$106$$);
  this.$_tmapContainer$ = new D.$DvtContainer$$($context$$600$$);
  this.$_tmapContainer$.$addChild$(this.$_tmap$);
  this.$addChild$(this.$_tmapContainer$);
  this.$Defaults$ = new D.$DvtThematicMapDefaults$$
};
D.$DvtAmxThematicMap$$.newInstance = function $$DvtAmxThematicMap$$$newInstance$($context$$601$$, $callback$$154$$, $callbackObj$$107$$) {
  return new D.$DvtAmxThematicMap$$($context$$601$$, $callback$$154$$, $callbackObj$$107$$)
};
D.$DvtAmxThematicMap$$.newInstance = D.$DvtAmxThematicMap$$.newInstance;
D.$DvtAmxThematicMap$$.prototype.$render$ = function $$DvtAmxThematicMap$$$$$render$$($options$$264$$, $availSpace$$126_width$$157$$, $height$$142$$) {
  this.$Options$ = this.$Defaults$.$calcOptions$($options$$264$$);
  this.$_width$ = $availSpace$$126_width$$157$$;
  this.$_height$ = $height$$142$$;
  $availSpace$$126_width$$157$$ = new D.$DvtRectangle$$(0, 0, $availSpace$$126_width$$157$$, $height$$142$$);
  this.$_renderLegend$(this, $availSpace$$126_width$$157$$);
  this.$_tmap$.$render$($options$$264$$, $availSpace$$126_width$$157$$.$w$, $availSpace$$126_width$$157$$.$h$)
};
D.$DvtAmxThematicMap$$.prototype.render = D.$DvtAmxThematicMap$$.prototype.$render$;
D.$DvtAmxThematicMap$$.prototype.$_renderLegend$ = function $$DvtAmxThematicMap$$$$$_renderLegend$$($container$$188$$, $availSpace$$127$$) {
  this.$_legend$ && ($container$$188$$.removeChild(this.$_legend$), this.$_legend$ = D.$JSCompiler_alias_NULL$$);
  var $availLegendSpace$$ = new D.$DvtRectangle$$(D.$DvtAmxThematicMap$$.$_LEGEND_COMPONET_GAP$, D.$DvtAmxThematicMap$$.$_LEGEND_COMPONET_GAP$, $availSpace$$127$$.$w$ - 2 * D.$DvtAmxThematicMap$$.$_LEGEND_COMPONET_GAP$, $availSpace$$127$$.$h$ - 2 * D.$DvtAmxThematicMap$$.$_LEGEND_COMPONET_GAP$), $gap$$29_options$$265$$ = this.$Options$, $position$$60_rendered$$6$$ = $gap$$29_options$$265$$.legend.rendered, $actualSize$$2_isHoriz$$17_isRTL$$41_scrolling$$2$$ = $gap$$29_options$$265$$.legend.scrolling, 
  $legendOptions$$10$$ = D.$DvtJSONUtils$$.$clone$($gap$$29_options$$265$$.legend);
  this.$_addLegendData$(this.$Options$, $legendOptions$$10$$);
  if($position$$60_rendered$$6$$ && !($legendOptions$$10$$.$sections$ && 0 == $legendOptions$$10$$.$sections$.length)) {
    $position$$60_rendered$$6$$ = $gap$$29_options$$265$$.legend.position;
    delete $legendOptions$$10$$.position;
    $legendOptions$$10$$.layout.gapRatio = (0,D.$JSCompiler_StaticMethods_getGapRatio$$)(this);
    $legendOptions$$10$$.hideAndShowBehavior = "none";
    $legendOptions$$10$$.rolloverBehavior = "none";
    $legendOptions$$10$$.scrolling = $gap$$29_options$$265$$.legend.scrolling;
    var $legend$$31$$ = (0,D.$DvtLegend$newInstance$$)(this.$_tmap$.$getCtx$());
    $container$$188$$.$addChild$($legend$$31$$);
    "auto" == $position$$60_rendered$$6$$ && "asNeeded" !== $actualSize$$2_isHoriz$$17_isRTL$$41_scrolling$$2$$ ? $position$$60_rendered$$6$$ = "bottom" : "auto" == $position$$60_rendered$$6$$ && "asNeeded" == $actualSize$$2_isHoriz$$17_isRTL$$41_scrolling$$2$$ && ($position$$60_rendered$$6$$ = "end");
    $actualSize$$2_isHoriz$$17_isRTL$$41_scrolling$$2$$ = (0,D.$DvtAgent$isRightToLeft$$)($container$$188$$.$getCtx$());
    "start" == $position$$60_rendered$$6$$ ? $position$$60_rendered$$6$$ = $actualSize$$2_isHoriz$$17_isRTL$$41_scrolling$$2$$ ? "right" : "left" : "end" == $position$$60_rendered$$6$$ && ($position$$60_rendered$$6$$ = $actualSize$$2_isHoriz$$17_isRTL$$41_scrolling$$2$$ ? "left" : "right");
    $legendOptions$$10$$.orientation = "left" == $position$$60_rendered$$6$$ || "right" == $position$$60_rendered$$6$$ ? "vertical" : "horizontal";
    $actualSize$$2_isHoriz$$17_isRTL$$41_scrolling$$2$$ = "top" == $position$$60_rendered$$6$$ || "bottom" == $position$$60_rendered$$6$$;
    $actualSize$$2_isHoriz$$17_isRTL$$41_scrolling$$2$$ = $legend$$31$$.$getPreferredSize$($legendOptions$$10$$, $actualSize$$2_isHoriz$$17_isRTL$$41_scrolling$$2$$ ? $availLegendSpace$$.$w$ : $gap$$29_options$$265$$.layout.legendMaxSize * $availLegendSpace$$.$w$, $actualSize$$2_isHoriz$$17_isRTL$$41_scrolling$$2$$ ? $gap$$29_options$$265$$.layout.legendMaxSize * $availLegendSpace$$.$h$ : $availLegendSpace$$.$h$);
    if(0 < $actualSize$$2_isHoriz$$17_isRTL$$41_scrolling$$2$$.$w$ && 0 < $actualSize$$2_isHoriz$$17_isRTL$$41_scrolling$$2$$.$h$) {
      switch($legend$$31$$.$render$($legendOptions$$10$$, $actualSize$$2_isHoriz$$17_isRTL$$41_scrolling$$2$$.$w$, $actualSize$$2_isHoriz$$17_isRTL$$41_scrolling$$2$$.$h$), this.$_legend$ = $legend$$31$$, $gap$$29_options$$265$$ = window.Math.ceil($gap$$29_options$$265$$.layout.legendGap * (0,D.$JSCompiler_StaticMethods_getGapRatio$$)(this)), (0,D.$DvtLayoutUtils$position$$)($availLegendSpace$$, $position$$60_rendered$$6$$, $legend$$31$$, $actualSize$$2_isHoriz$$17_isRTL$$41_scrolling$$2$$.$w$, $actualSize$$2_isHoriz$$17_isRTL$$41_scrolling$$2$$.$h$, 
      $gap$$29_options$$265$$), $position$$60_rendered$$6$$) {
        case "top":
          this.$_tmapContainer$.$setTranslateY$($actualSize$$2_isHoriz$$17_isRTL$$41_scrolling$$2$$.$h$ + D.$DvtAmxThematicMap$$.$_LEGEND_COMPONET_GAP$);
        case "bottom":
          $availSpace$$127$$.$h$ -= $actualSize$$2_isHoriz$$17_isRTL$$41_scrolling$$2$$.$h$ + D.$DvtAmxThematicMap$$.$_LEGEND_COMPONET_GAP$;
          break;
        case "left":
          this.$_tmapContainer$.$setTranslateX$($actualSize$$2_isHoriz$$17_isRTL$$41_scrolling$$2$$.$w$ + D.$DvtAmxThematicMap$$.$_LEGEND_COMPONET_GAP$);
        case "right":
          $availSpace$$127$$.$w$ -= $actualSize$$2_isHoriz$$17_isRTL$$41_scrolling$$2$$.$w$ + D.$DvtAmxThematicMap$$.$_LEGEND_COMPONET_GAP$
      }
    }
  }
};
D.$JSCompiler_StaticMethods_getGapRatio$$ = function $$JSCompiler_StaticMethods_getGapRatio$$$($JSCompiler_StaticMethods_getGapRatio$self_hRatio$$) {
  if($JSCompiler_StaticMethods_getGapRatio$self_hRatio$$.$Options$.layout.gapRatio !== D.$JSCompiler_alias_NULL$$ && !(0,window.isNaN)($JSCompiler_StaticMethods_getGapRatio$self_hRatio$$.$Options$.layout.gapRatio)) {
    return $JSCompiler_StaticMethods_getGapRatio$self_hRatio$$.$Options$.layout.gapRatio
  }
  var $wRatio$$ = window.Math.min($JSCompiler_StaticMethods_getGapRatio$self_hRatio$$.$_width$ / 400, 1);
  $JSCompiler_StaticMethods_getGapRatio$self_hRatio$$ = window.Math.min($JSCompiler_StaticMethods_getGapRatio$self_hRatio$$.$_height$ / 300, 1);
  return window.Math.min($wRatio$$, $JSCompiler_StaticMethods_getGapRatio$self_hRatio$$)
};
D.$DvtAmxThematicMap$$.prototype.$_addLegendData$ = function $$DvtAmxThematicMap$$$$$_addLegendData$$($data$$98$$, $legendOptions$$11$$) {
  $legendOptions$$11$$.title = $data$$98$$.legend ? $data$$98$$.legend.title : D.$JSCompiler_alias_NULL$$;
  $legendOptions$$11$$.sections = [];
  if($data$$98$$ && $data$$98$$.legend && $data$$98$$.legend.sections) {
    for(var $i$$792$$ = 0;$i$$792$$ < $data$$98$$.legend.sections.length;$i$$792$$++) {
      var $dataSection$$1$$ = $data$$98$$.legend.sections[$i$$792$$];
      $dataSection$$1$$ && $legendOptions$$11$$.sections.push({title:$dataSection$$1$$.title, items:$dataSection$$1$$.items, sections:$dataSection$$1$$.sections})
    }
  }
  return $legendOptions$$11$$
};
D.$DvtThematicMap$$ = function $$DvtThematicMap$$$($context$$612$$, $callback$$155$$, $callbackObj$$108$$) {
  this.Init($context$$612$$, $callback$$155$$, $callbackObj$$108$$)
};
(0,D.$goog$exportPath_$$)("DvtThematicMap", D.$DvtThematicMap$$);
D.$DvtObj$$.$createSubclass$(D.$DvtThematicMap$$, D.$DvtPanZoomComponent$$, "DvtThematicMap");
D.$DvtThematicMap$$.prototype.Init = function $$DvtThematicMap$$$$Init$($context$$613$$, $callback$$156$$, $callbackObj$$109$$) {
  D.$DvtThematicMap$$.$superclass$.Init.call(this, $context$$613$$, $callback$$156$$, $callbackObj$$109$$);
  (0,D.$JSCompiler_StaticMethods__createHandlers$$)(this);
  this.$_layers$ = [];
  this.$_drillAnimFadeOutObjs$ = [];
  this.$_legendButtonImages$ = this.$_legendData$ = this.$_legendPanel$ = this.$_legend$ = D.$JSCompiler_alias_NULL$$;
  this.$_bBaseMapChanged$ = D.$JSCompiler_alias_FALSE$$;
  this.$_drilledRowKeys$ = [];
  this.$_initDrilled$ = {};
  this.$_processingInitDrilled$ = D.$JSCompiler_alias_FALSE$$;
  this.$_drillDataLayer$ = {};
  this.$_childToParent$ = {};
  this.$_drilled$ = [];
  this.$_areaLayers$ = new D.$DvtContainer$$(this.$getCtx$());
  this.$_dataAreaLayers$ = new D.$DvtContainer$$(this.$getCtx$());
  this.$_dataPointLayers$ = new D.$DvtContainer$$(this.$getCtx$());
  this.$_labelLayers$ = new D.$DvtContainer$$(this.$getCtx$());
  this.$_panning$ = this.$_zooming$ = this.$_initialZooming$ = D.$JSCompiler_alias_FALSE$$;
  this.$_maxZoomFactor$ = 6;
  this.$_isMarkerZoomBehaviorFixed$ = D.$JSCompiler_alias_TRUE$$;
  this.$_selectedAreas$ = {};
  this.$_bListenersRemoved$ = D.$JSCompiler_alias_FALSE$$;
  this.$_showPopupBehaviors$ = D.$JSCompiler_alias_NULL$$;
  this.$_displayedControls$ = 16777215;
  this.$Defaults$ = new D.$DvtThematicMapDefaults$$;
  this.$_eventHandler$.$associate$(this, this);
  this.$_bRendered$ = D.$JSCompiler_alias_FALSE$$
};
D.$DvtThematicMap$$.newInstance = function $$DvtThematicMap$$$newInstance$($context$$614$$, $callback$$157$$, $callbackObj$$110$$) {
  return new D.$DvtThematicMap$$($context$$614$$, $callback$$157$$, $callbackObj$$110$$)
};
D.$DvtThematicMap$$.prototype.$SetOptions$ = function $$DvtThematicMap$$$$$SetOptions$$($options$$268$$) {
  D.$DvtThematicMap$$.$superclass$.$SetOptions$.call(this, $options$$268$$);
  (0,D.$DvtAgent$isEnvironmentBrowser$$)() || (this.$Options$.animationOnDisplay = "none", this.$Options$.animationOnMapChange = "none", this.$Options$.animationOnDrill = "none");
  (new D.$DvtThematicMapJsonParser$$(this)).parse(this.$Options$)
};
D.$DvtThematicMap$$.prototype.$__getEventManager$ = (0,D.$JSCompiler_get$$)("$_eventHandler$");
D.$JSCompiler_StaticMethods_getLayer$$ = function $$JSCompiler_StaticMethods_getLayer$$$($JSCompiler_StaticMethods_getLayer$self$$, $layerName$$21$$) {
  for(var $i$$815$$ = 0;$i$$815$$ < $JSCompiler_StaticMethods_getLayer$self$$.$_layers$.length;$i$$815$$++) {
    if($JSCompiler_StaticMethods_getLayer$self$$.$_layers$[$i$$815$$].$LayerName$ == $layerName$$21$$) {
      return $JSCompiler_StaticMethods_getLayer$self$$.$_layers$[$i$$815$$]
    }
  }
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtThematicMap$$.prototype;
D.$JSCompiler_prototypeAlias$$.$setAnimationDuration$ = function $$JSCompiler_prototypeAlias$$$$setAnimationDuration$$($attr$$20$$) {
  this.$_animationDuration$ = (0,window.parseFloat)($attr$$20$$)
};
D.$JSCompiler_prototypeAlias$$.$getAnimationDuration$ = (0,D.$JSCompiler_get$$)("$_animationDuration$");
D.$JSCompiler_prototypeAlias$$.$setFeaturesOff$ = function $$JSCompiler_prototypeAlias$$$$setFeaturesOff$$($attr$$22_featuresOff$$1$$) {
  $attr$$22_featuresOff$$1$$ = (0,window.parseInt)($attr$$22_featuresOff$$1$$);
  var $controls$$5$$ = this.$_displayedControls$;
  if(1 == $attr$$22_featuresOff$$1$$ || 3 == $attr$$22_featuresOff$$1$$ || 5 == $attr$$22_featuresOff$$1$$ || 7 == $attr$$22_featuresOff$$1$$) {
    $controls$$5$$ &= -17, this.$_panning$ = D.$JSCompiler_alias_FALSE$$
  }
  if(2 == $attr$$22_featuresOff$$1$$ || 3 == $attr$$22_featuresOff$$1$$ || 6 == $attr$$22_featuresOff$$1$$ || 7 == $attr$$22_featuresOff$$1$$) {
    $controls$$5$$ &= -4098, this.$_zooming$ = D.$JSCompiler_alias_FALSE$$
  }
  if(4 == $attr$$22_featuresOff$$1$$ || 5 == $attr$$22_featuresOff$$1$$ || 6 == $attr$$22_featuresOff$$1$$ || 7 == $attr$$22_featuresOff$$1$$) {
    $controls$$5$$ &= -257
  }
  this.$_displayedControls$ = $controls$$5$$
};
D.$JSCompiler_prototypeAlias$$.$setDrillMode$ = function $$JSCompiler_prototypeAlias$$$$setDrillMode$$($attr$$27$$) {
  this.$_drillMode$ = $attr$$27$$;
  this.$_eventHandler$.$setDrillMode$($attr$$27$$)
};
D.$JSCompiler_prototypeAlias$$.$PreRender$ = function $$JSCompiler_prototypeAlias$$$$PreRender$$() {
  D.$DvtThematicMap$$.$superclass$.$PreRender$.call(this);
  !this.$_isResize$ && this.$_pzcContainer$ && (this.$_layers$ = [], this.$_drilledRowKeys$ = [], this.$_initDrilled$ = {}, this.$_drillDataLayer$ = {}, this.$_childToParent$ = {}, this.$_drilled$ = [], this.removeChild(this.$_legendPanel$), this.$_legendButtonImages$ = this.$_legendData$ = this.$_legend$ = this.$_legendPanel$ = D.$JSCompiler_alias_NULL$$, this.$_displayedControls$ = 16777215, this.$_panning$ = this.$_zooming$ = D.$JSCompiler_alias_TRUE$$, this.$_oldPzc$ = this.$_pzc$, this.$_areaLayers$ = 
  new D.$DvtContainer$$(this.$getCtx$()), this.$_dataAreaLayers$ = new D.$DvtContainer$$(this.$getCtx$()), this.$_dataPointLayers$ = new D.$DvtContainer$$(this.$getCtx$()), this.$_labelLayers$ = new D.$DvtContainer$$(this.$getCtx$()), this.$_showPopupBehaviors$ = D.$JSCompiler_alias_NULL$$, this.$_eventHandler$.$removeListeners$(this), (0,D.$JSCompiler_StaticMethods__createHandlers$$)(this), this.$_bListenersRemoved$ = D.$JSCompiler_alias_FALSE$$, this.$_eventHandler$.$hideTooltip$(), this.$_eventHandler$.$associate$(this, 
  this))
};
D.$JSCompiler_StaticMethods__createHandlers$$ = function $$JSCompiler_StaticMethods__createHandlers$$$($JSCompiler_StaticMethods__createHandlers$self$$) {
  $JSCompiler_StaticMethods__createHandlers$self$$.$_eventHandler$ = new D.$DvtThematicMapEventManager$$($JSCompiler_StaticMethods__createHandlers$self$$.$getCtx$(), $JSCompiler_StaticMethods__createHandlers$self$$.$__dispatchEvent$, $JSCompiler_StaticMethods__createHandlers$self$$);
  $JSCompiler_StaticMethods__createHandlers$self$$.$_eventHandler$.$addListeners$($JSCompiler_StaticMethods__createHandlers$self$$);
  (0,D.$DvtAgent$isTouchDevice$$)() ? $JSCompiler_StaticMethods__createHandlers$self$$.$_keyboardHandler$ = D.$JSCompiler_alias_NULL$$ : ($JSCompiler_StaticMethods__createHandlers$self$$.$_keyboardHandler$ = new D.$DvtThematicMapKeyboardHandler$$($JSCompiler_StaticMethods__createHandlers$self$$, $JSCompiler_StaticMethods__createHandlers$self$$.$_eventHandler$), (0,D.$JSCompiler_StaticMethods_setKeyboardHandler$$)($JSCompiler_StaticMethods__createHandlers$self$$.$_eventHandler$, $JSCompiler_StaticMethods__createHandlers$self$$.$_keyboardHandler$))
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtThematicMap$$.prototype;
D.$JSCompiler_prototypeAlias$$.$HandleLegendResize$ = function $$JSCompiler_prototypeAlias$$$$HandleLegendResize$$($event$$762_x$$278$$) {
  (0,D.$DvtAgent$isRightToLeft$$)(this.$getCtx$()) || ($event$$762_x$$278$$ = this.getWidth() - 5 - $event$$762_x$$278$$.getWidth(), this.$_legendPanel$.$setTranslateX$($event$$762_x$$278$$))
};
D.$JSCompiler_prototypeAlias$$.$_renderLegend$ = function $$JSCompiler_prototypeAlias$$$$_renderLegend$$() {
  if(this.$_legendData$) {
    this.$_legendPanel$ && (this.$_legendPanel$.$destroy$(), this.removeChild(this.$_legendPanel$));
    var $dims$$inline_8351_disclosed$$4_object$$inline_8350_rect$$inline_11297_west$$inline_11301_west$$inline_8352_x$$279$$ = "true" == this.$_legendData$.disclosed, $isFixed$$2$$ = "fixed" == this.$_legendData$.display || (0,D.$DvtAgent$isEnvironmentBatik$$)();
    if(!$isFixed$$2$$ || $dims$$inline_8351_disclosed$$4_object$$inline_8350_rect$$inline_11297_west$$inline_11301_west$$inline_8352_x$$279$$) {
      var $JSCompiler_StaticMethods_setButtonTooltips$self$$inline_8345_alpha$$inline_11298_legendData$$7_maxWidth$$32_upState$$23$$ = this.$_legendData$.maxWidth, $collapse$$inline_8347_maxHeight$$20_overState$$20_percentIndex$$1_preferredSize$$8$$ = $JSCompiler_StaticMethods_setButtonTooltips$self$$inline_8345_alpha$$inline_11298_legendData$$7_maxWidth$$32_upState$$23$$.indexOf("%"), $JSCompiler_StaticMethods_setButtonTooltips$self$$inline_8345_alpha$$inline_11298_legendData$$7_maxWidth$$32_upState$$23$$ = 
      -1 != $collapse$$inline_8347_maxHeight$$20_overState$$20_percentIndex$$1_preferredSize$$8$$ ? (0,window.parseFloat)($JSCompiler_StaticMethods_setButtonTooltips$self$$inline_8345_alpha$$inline_11298_legendData$$7_maxWidth$$32_upState$$23$$.substring(0, $collapse$$inline_8347_maxHeight$$20_overState$$20_percentIndex$$1_preferredSize$$8$$)) / 100 * this.getWidth() : (0,window.parseFloat)($JSCompiler_StaticMethods_setButtonTooltips$self$$inline_8345_alpha$$inline_11298_legendData$$7_maxWidth$$32_upState$$23$$), 
      $collapse$$inline_8347_maxHeight$$20_overState$$20_percentIndex$$1_preferredSize$$8$$ = this.getHeight() - 10;
      "alta" == this.$_skinName$ ? (this.$_legendPanel$ = new D.$DvtPanelDrawer$$(this.$getCtx$(), D.$JSCompiler_alias_NULL$$, this, "pd"), this.$_legendPanel$.$addEvtListener$("dvtPanelDrawerEvent", this.$HandleLegendEvent$, D.$JSCompiler_alias_FALSE$$, this), this.$_legendPanel$.$setMaxWidth$($JSCompiler_StaticMethods_setButtonTooltips$self$$inline_8345_alpha$$inline_11298_legendData$$7_maxWidth$$32_upState$$23$$), this.$_legendPanel$.$setMaxHeight$($collapse$$inline_8347_maxHeight$$20_overState$$20_percentIndex$$1_preferredSize$$8$$), 
      this.$_legendPanel$.$_isFixed$ = $isFixed$$2$$, (0,D.$DvtAgent$isRightToLeft$$)(this.$getCtx$()) ? (this.$_legendPanel$.$_discloseDirection$ = "right", this.$_legendPanel$.$setTranslateX$(0)) : this.$_legendPanel$.$setTranslateX$(this.getWidth())) : (this.$_legendPanel$ = new D.$DvtCollapsiblePanel$$(this.$getCtx$(), $JSCompiler_StaticMethods_setButtonTooltips$self$$inline_8345_alpha$$inline_11298_legendData$$7_maxWidth$$32_upState$$23$$, $collapse$$inline_8347_maxHeight$$20_overState$$20_percentIndex$$1_preferredSize$$8$$, 
      "col_northeast", (0,D.$JSCompiler_StaticMethods_getResourcesMap$$)(this), this.$getSubcomponentStyles$(), $dims$$inline_8351_disclosed$$4_object$$inline_8350_rect$$inline_11297_west$$inline_11301_west$$inline_8352_x$$279$$, $isFixed$$2$$), this.$_legendPanel$.$addEvtListener$("dvtCollapsiblePanelEvent", this.$HandleLegendEvent$, D.$JSCompiler_alias_FALSE$$, this), this.$_legendPanel$.$addEvtListener$("dvtResizeEvent", this.$HandleLegendResize$, D.$JSCompiler_alias_FALSE$$, this), $JSCompiler_StaticMethods_setButtonTooltips$self$$inline_8345_alpha$$inline_11298_legendData$$7_maxWidth$$32_upState$$23$$ = 
      this.$_legendPanel$, $collapse$$inline_8347_maxHeight$$20_overState$$20_percentIndex$$1_preferredSize$$8$$ = this.$_legendData$.collapseTooltip, $JSCompiler_StaticMethods_setButtonTooltips$self$$inline_8345_alpha$$inline_11298_legendData$$7_maxWidth$$32_upState$$23$$.$_expandTooltip$ = this.$_legendData$.expandTooltip, $JSCompiler_StaticMethods_setButtonTooltips$self$$inline_8345_alpha$$inline_11298_legendData$$7_maxWidth$$32_upState$$23$$.$_collapseTooltip$ = $collapse$$inline_8347_maxHeight$$20_overState$$20_percentIndex$$1_preferredSize$$8$$);
      $JSCompiler_StaticMethods_setButtonTooltips$self$$inline_8345_alpha$$inline_11298_legendData$$7_maxWidth$$32_upState$$23$$ = this.$_legendData$;
      this.$_legend$ = (0,D.$DvtLegend$newInstance$$)(this.$getCtx$(), this.$processLegendEvent$, this);
      this.$addChild$(this.$_legendPanel$);
      this.$addChild$(this.$_legend$);
      $collapse$$inline_8347_maxHeight$$20_overState$$20_percentIndex$$1_preferredSize$$8$$ = this.$_legend$.$getPreferredSize$($JSCompiler_StaticMethods_setButtonTooltips$self$$inline_8345_alpha$$inline_11298_legendData$$7_maxWidth$$32_upState$$23$$, this.$_legendPanel$.$getMaxContentWidth$(), this.$_legendPanel$.$getMaxContentHeight$());
      this.$_legend$.$render$($JSCompiler_StaticMethods_setButtonTooltips$self$$inline_8345_alpha$$inline_11298_legendData$$7_maxWidth$$32_upState$$23$$, $collapse$$inline_8347_maxHeight$$20_overState$$20_percentIndex$$1_preferredSize$$8$$.$w$, $collapse$$inline_8347_maxHeight$$20_overState$$20_percentIndex$$1_preferredSize$$8$$.$h$);
      var $JSCompiler_StaticMethods_addContent$self$$inline_8349_legendPanelDim$$;
      if("alta" == this.$_skinName$) {
        (0,D.$JSCompiler_StaticMethods_setMaxContainerHeight$$)(this.$_legendPanel$, this.$_legend$.$getContentDimensions$().$h$);
        this.removeChild(this.$_legend$);
        var $JSCompiler_StaticMethods_setButtonTooltips$self$$inline_8345_alpha$$inline_11298_legendData$$7_maxWidth$$32_upState$$23$$ = new D.$DvtImage$$(this.$getCtx$(), (0,D.$JSCompiler_StaticMethods_getResourcesMap$$)(this).legendEna, 0, 0, 24, 24), $collapse$$inline_8347_maxHeight$$20_overState$$20_percentIndex$$1_preferredSize$$8$$ = new D.$DvtImage$$(this.$getCtx$(), (0,D.$JSCompiler_StaticMethods_getResourcesMap$$)(this).legendOvr, 0, 0, 24, 24), $downState$$20$$ = new D.$DvtImage$$(this.$getCtx$(), 
        (0,D.$JSCompiler_StaticMethods_getResourcesMap$$)(this).legendDwn, 0, 0, 24, 24), $tip$$5$$ = (0,D.$DvtBundle$getTranslatedString$$)("DvtUtilBundle", "LEGEND");
        (0,D.$JSCompiler_StaticMethods_addPanel$$)(this.$_legendPanel$, this.$_legend$, $JSCompiler_StaticMethods_setButtonTooltips$self$$inline_8345_alpha$$inline_11298_legendData$$7_maxWidth$$32_upState$$23$$, $collapse$$inline_8347_maxHeight$$20_overState$$20_percentIndex$$1_preferredSize$$8$$, $downState$$20$$, $tip$$5$$, "legend");
        this.$_legendPanel$.$renderComponent$();
        $dims$$inline_8351_disclosed$$4_object$$inline_8350_rect$$inline_11297_west$$inline_11301_west$$inline_8352_x$$279$$ && this.$_legendPanel$.$setDisclosed$(D.$JSCompiler_alias_TRUE$$, D.$JSCompiler_alias_TRUE$$)
      }else {
        $JSCompiler_StaticMethods_addContent$self$$inline_8349_legendPanelDim$$ = this.$_legendPanel$, $dims$$inline_8351_disclosed$$4_object$$inline_8350_rect$$inline_11297_west$$inline_11301_west$$inline_8352_x$$279$$ = this.$_legend$, $JSCompiler_StaticMethods_addContent$self$$inline_8349_legendPanelDim$$.$_contentContainer$.$addChild$($dims$$inline_8351_disclosed$$4_object$$inline_8350_rect$$inline_11297_west$$inline_11301_west$$inline_8352_x$$279$$), $dims$$inline_8351_disclosed$$4_object$$inline_8350_rect$$inline_11297_west$$inline_11301_west$$inline_8352_x$$279$$.$addEvtListener$("dvtResizeEvent", 
        $JSCompiler_StaticMethods_addContent$self$$inline_8349_legendPanelDim$$.$HandleResize$, D.$JSCompiler_alias_FALSE$$, $JSCompiler_StaticMethods_addContent$self$$inline_8349_legendPanelDim$$), $dims$$inline_8351_disclosed$$4_object$$inline_8350_rect$$inline_11297_west$$inline_11301_west$$inline_8352_x$$279$$ = $JSCompiler_StaticMethods_addContent$self$$inline_8349_legendPanelDim$$.$_contentContainer$.$getDimensions$(), $JSCompiler_StaticMethods_addContent$self$$inline_8349_legendPanelDim$$.$_width$ = 
        window.Math.min($JSCompiler_StaticMethods_addContent$self$$inline_8349_legendPanelDim$$.$_maxWidth$, $dims$$inline_8351_disclosed$$4_object$$inline_8350_rect$$inline_11297_west$$inline_11301_west$$inline_8352_x$$279$$.$w$ + 10), $JSCompiler_StaticMethods_addContent$self$$inline_8349_legendPanelDim$$.$_height$ = window.Math.min($JSCompiler_StaticMethods_addContent$self$$inline_8349_legendPanelDim$$.$_maxHeight$, $dims$$inline_8351_disclosed$$4_object$$inline_8350_rect$$inline_11297_west$$inline_11301_west$$inline_8352_x$$279$$.$h$ + 
        10), $JSCompiler_StaticMethods_addContent$self$$inline_8349_legendPanelDim$$.$_background$ ? ($JSCompiler_StaticMethods_addContent$self$$inline_8349_legendPanelDim$$.$_background$.$setCmds$((0,D.$JSCompiler_StaticMethods__getOutlinePath$$)($JSCompiler_StaticMethods_addContent$self$$inline_8349_legendPanelDim$$, $JSCompiler_StaticMethods_addContent$self$$inline_8349_legendPanelDim$$.$_width$, $JSCompiler_StaticMethods_addContent$self$$inline_8349_legendPanelDim$$.$_height$)), $dims$$inline_8351_disclosed$$4_object$$inline_8350_rect$$inline_11297_west$$inline_11301_west$$inline_8352_x$$279$$ = 
        "col_northwest" == $JSCompiler_StaticMethods_addContent$self$$inline_8349_legendPanelDim$$.$_collapseDir$ || "col_southwest" == $JSCompiler_StaticMethods_addContent$self$$inline_8349_legendPanelDim$$.$_collapseDir$, $JSCompiler_StaticMethods_addContent$self$$inline_8349_legendPanelDim$$.$_buttonFrame$ && $dims$$inline_8351_disclosed$$4_object$$inline_8350_rect$$inline_11297_west$$inline_11301_west$$inline_8352_x$$279$$ && $JSCompiler_StaticMethods_addContent$self$$inline_8349_legendPanelDim$$.$_buttonFrame$.$setTranslateX$($JSCompiler_StaticMethods_addContent$self$$inline_8349_legendPanelDim$$.$_width$)) : 
        ($dims$$inline_8351_disclosed$$4_object$$inline_8350_rect$$inline_11297_west$$inline_11301_west$$inline_8352_x$$279$$ = new D.$DvtPath$$($JSCompiler_StaticMethods_addContent$self$$inline_8349_legendPanelDim$$.$getCtx$(), (0,D.$JSCompiler_StaticMethods__getOutlinePath$$)($JSCompiler_StaticMethods_addContent$self$$inline_8349_legendPanelDim$$, $JSCompiler_StaticMethods_addContent$self$$inline_8349_legendPanelDim$$.$_width$, $JSCompiler_StaticMethods_addContent$self$$inline_8349_legendPanelDim$$.$_height$)), 
        $JSCompiler_StaticMethods_setButtonTooltips$self$$inline_8345_alpha$$inline_11298_legendData$$7_maxWidth$$32_upState$$23$$ = $JSCompiler_StaticMethods_addContent$self$$inline_8349_legendPanelDim$$.$_styleMap$.borderAlpha, $dims$$inline_8351_disclosed$$4_object$$inline_8350_rect$$inline_11297_west$$inline_11301_west$$inline_8352_x$$279$$.$setSolidFill$($JSCompiler_StaticMethods_addContent$self$$inline_8349_legendPanelDim$$.$_bgColor$, $JSCompiler_StaticMethods_addContent$self$$inline_8349_legendPanelDim$$.$_bgAlpha$), 
        $dims$$inline_8351_disclosed$$4_object$$inline_8350_rect$$inline_11297_west$$inline_11301_west$$inline_8352_x$$279$$.$setSolidStroke$($JSCompiler_StaticMethods_addContent$self$$inline_8349_legendPanelDim$$.$_borderColor$, $JSCompiler_StaticMethods_setButtonTooltips$self$$inline_8345_alpha$$inline_11298_legendData$$7_maxWidth$$32_upState$$23$$), $JSCompiler_StaticMethods_addContent$self$$inline_8349_legendPanelDim$$.$_background$ = $dims$$inline_8351_disclosed$$4_object$$inline_8350_rect$$inline_11297_west$$inline_11301_west$$inline_8352_x$$279$$, 
        $JSCompiler_StaticMethods_addContent$self$$inline_8349_legendPanelDim$$.$addChildAt$($JSCompiler_StaticMethods_addContent$self$$inline_8349_legendPanelDim$$.$_background$, 0), $JSCompiler_StaticMethods_addContent$self$$inline_8349_legendPanelDim$$.$_isFixed$ || ($JSCompiler_StaticMethods_addContent$self$$inline_8349_legendPanelDim$$.$_buttonFrame$ = D.$DvtControlPanelLAFUtils$$.$createEmptyViewClosedFrame$($JSCompiler_StaticMethods_addContent$self$$inline_8349_legendPanelDim$$.$getCtx$(), 
        25, $JSCompiler_StaticMethods_addContent$self$$inline_8349_legendPanelDim$$.$_styleMap$, D.$JSCompiler_alias_FALSE$$), $JSCompiler_StaticMethods_addContent$self$$inline_8349_legendPanelDim$$.$_buttonFrame$.$setAlpha$($JSCompiler_StaticMethods_addContent$self$$inline_8349_legendPanelDim$$.$_styleMap$.borderAlpha), $JSCompiler_StaticMethods_addContent$self$$inline_8349_legendPanelDim$$.$addChild$($JSCompiler_StaticMethods_addContent$self$$inline_8349_legendPanelDim$$.$_buttonFrame$), $dims$$inline_8351_disclosed$$4_object$$inline_8350_rect$$inline_11297_west$$inline_11301_west$$inline_8352_x$$279$$ = 
        "col_northwest" == $JSCompiler_StaticMethods_addContent$self$$inline_8349_legendPanelDim$$.$_collapseDir$ || "col_southwest" == $JSCompiler_StaticMethods_addContent$self$$inline_8349_legendPanelDim$$.$_collapseDir$, $JSCompiler_StaticMethods_addContent$self$$inline_8349_legendPanelDim$$.$_collapseExpandButton$ = $JSCompiler_StaticMethods_addContent$self$$inline_8349_legendPanelDim$$.isCollapsed() ? D.$DvtButtonLAFUtils$$.$createExpandButton$($JSCompiler_StaticMethods_addContent$self$$inline_8349_legendPanelDim$$.$getCtx$(), 
        $JSCompiler_StaticMethods_addContent$self$$inline_8349_legendPanelDim$$.$_buttonImages$, 25, $JSCompiler_StaticMethods_addContent$self$$inline_8349_legendPanelDim$$.$_styleMap$, $dims$$inline_8351_disclosed$$4_object$$inline_8350_rect$$inline_11297_west$$inline_11301_west$$inline_8352_x$$279$$ ? D.$DvtButtonLAFUtils$$.$DIR_LEFT$ : D.$DvtButtonLAFUtils$$.$DIR_RIGHT$) : D.$DvtButtonLAFUtils$$.$createCollapseButton$($JSCompiler_StaticMethods_addContent$self$$inline_8349_legendPanelDim$$.$getCtx$(), 
        $JSCompiler_StaticMethods_addContent$self$$inline_8349_legendPanelDim$$.$_buttonImages$, 25, $JSCompiler_StaticMethods_addContent$self$$inline_8349_legendPanelDim$$.$_styleMap$, $dims$$inline_8351_disclosed$$4_object$$inline_8350_rect$$inline_11297_west$$inline_11301_west$$inline_8352_x$$279$$ ? D.$DvtButtonLAFUtils$$.$DIR_LEFT$ : D.$DvtButtonLAFUtils$$.$DIR_RIGHT$), $JSCompiler_StaticMethods_addContent$self$$inline_8349_legendPanelDim$$.$_buttonFrame$.$addChild$($JSCompiler_StaticMethods_addContent$self$$inline_8349_legendPanelDim$$.$_collapseExpandButton$), 
        $JSCompiler_StaticMethods_addContent$self$$inline_8349_legendPanelDim$$.$_buttonFrame$.$setTranslateX$($dims$$inline_8351_disclosed$$4_object$$inline_8350_rect$$inline_11297_west$$inline_11301_west$$inline_8352_x$$279$$ ? $JSCompiler_StaticMethods_addContent$self$$inline_8349_legendPanelDim$$.$_width$ : -10), (0,D.$DvtAgent$isTouchDevice$$)() ? $JSCompiler_StaticMethods_addContent$self$$inline_8349_legendPanelDim$$.$_collapseExpandButton$.$addEvtListener$(D.$DvtTouchEvent$$.$TOUCHSTART$, 
        $JSCompiler_StaticMethods_addContent$self$$inline_8349_legendPanelDim$$.$OnButtonClick$, D.$JSCompiler_alias_FALSE$$, $JSCompiler_StaticMethods_addContent$self$$inline_8349_legendPanelDim$$) : ($JSCompiler_StaticMethods_addContent$self$$inline_8349_legendPanelDim$$.$_collapseExpandButton$.$addEvtListener$(D.$DvtMouseEvent$CLICK$$, $JSCompiler_StaticMethods_addContent$self$$inline_8349_legendPanelDim$$.$OnButtonClick$, D.$JSCompiler_alias_FALSE$$, $JSCompiler_StaticMethods_addContent$self$$inline_8349_legendPanelDim$$), 
        $JSCompiler_StaticMethods_addContent$self$$inline_8349_legendPanelDim$$.$_collapseExpandButton$.$addEvtListener$(D.$DvtMouseEvent$MOUSEOVER$$, $JSCompiler_StaticMethods_addContent$self$$inline_8349_legendPanelDim$$.$OnButtonHoverOver$, D.$JSCompiler_alias_FALSE$$, $JSCompiler_StaticMethods_addContent$self$$inline_8349_legendPanelDim$$), $JSCompiler_StaticMethods_addContent$self$$inline_8349_legendPanelDim$$.$_collapseExpandButton$.$addEvtListener$(D.$DvtMouseEvent$MOUSEOUT$$, $JSCompiler_StaticMethods_addContent$self$$inline_8349_legendPanelDim$$.$OnButtonHoverOut$, 
        D.$JSCompiler_alias_FALSE$$, $JSCompiler_StaticMethods_addContent$self$$inline_8349_legendPanelDim$$)))), $JSCompiler_StaticMethods_addContent$self$$inline_8349_legendPanelDim$$.$_collapse$ && (0,D.$JSCompiler_StaticMethods__collapseExpand$$)($JSCompiler_StaticMethods_addContent$self$$inline_8349_legendPanelDim$$, D.$JSCompiler_alias_FALSE$$), $JSCompiler_StaticMethods_addContent$self$$inline_8349_legendPanelDim$$ = this.$_legendPanel$.$getDimensions$(), $dims$$inline_8351_disclosed$$4_object$$inline_8350_rect$$inline_11297_west$$inline_11301_west$$inline_8352_x$$279$$ = 
        (0,D.$DvtAgent$isRightToLeft$$)(this.$getCtx$()) ? 5 : this.getWidth() - 5 - $JSCompiler_StaticMethods_addContent$self$$inline_8349_legendPanelDim$$.$w$ - $JSCompiler_StaticMethods_addContent$self$$inline_8349_legendPanelDim$$.x, (0,D.$JSCompiler_StaticMethods_setTranslate$$)(this.$_legendPanel$, $dims$$inline_8351_disclosed$$4_object$$inline_8350_rect$$inline_11297_west$$inline_11301_west$$inline_8352_x$$279$$, 5), $JSCompiler_StaticMethods_addContent$self$$inline_8349_legendPanelDim$$.$w$ += 
        5
      }
      if(this.$_isFixedLegend$ = $isFixed$$2$$) {
        $JSCompiler_StaticMethods_addContent$self$$inline_8349_legendPanelDim$$ || ($JSCompiler_StaticMethods_addContent$self$$inline_8349_legendPanelDim$$ = this.$_legendPanel$.$getDimensions$()), this.$_legendWidth$ = $JSCompiler_StaticMethods_addContent$self$$inline_8349_legendPanelDim$$.$w$, this.$_pzc$.$setSize$(this.getWidth() - this.$_legendWidth$, this.getHeight(), D.$JSCompiler_alias_TRUE$$)
      }
    }
  }
};
D.$JSCompiler_prototypeAlias$$.$Render$ = function $$JSCompiler_prototypeAlias$$$$Render$$() {
  D.$DvtThematicMap$$.$superclass$.$Render$.call(this);
  var $pzcContainer$$ = new D.$DvtContainer$$(this.$getCtx$()), $bounds$$155_cpContainer$$ = new D.$DvtContainer$$(this.$getCtx$());
  this.$_pzc$ = this.$_panZoomCanvas$;
  this.$_pzc$.$addChild$($pzcContainer$$);
  this.$_pzc$.$_contentPane$.$addChild$($bounds$$155_cpContainer$$);
  this.$_render$($pzcContainer$$, $bounds$$155_cpContainer$$);
  if(this.$_topLayer$) {
    (this.$_controlPanel$ = this.$_pzc$.$_controlPanel$) && this.$_pzc$.$addChild$(this.$_controlPanel$);
    (0,D.$JSCompiler_StaticMethods__stopAnimation$$)(this);
    $bounds$$155_cpContainer$$ = new D.$DvtRectangle$$(0, 0, this.getWidth(), this.getHeight());
    if(!this.$_bRendered$ && !this.$_oldPzc$) {
      D.$DvtBlackBoxAnimationHandler$$.isSupported(this.$_animationOnDisplay$) && (this.$_animation$ = D.$DvtBlackBoxAnimationHandler$$.$getInAnimation$(this.$getCtx$(), this.$_animationOnDisplay$, this.$_pzc$, $bounds$$155_cpContainer$$, this.$_animationDuration$))
    }else {
      var $anim$$43$$ = D.$JSCompiler_alias_NULL$$;
      this.$_bBaseMapChanged$ && !this.$_isResize$ ? $anim$$43$$ = this.$_animationOnMapChange$ : this.$_topLayer$ && this.$_topLayer$.$LayerName$ != this.$_oldTopLayerName$ && ($anim$$43$$ = this.$_topLayer$.$getAnimation$());
      D.$DvtBlackBoxAnimationHandler$$.isSupported($anim$$43$$) && (this.$_animation$ = D.$DvtBlackBoxAnimationHandler$$.$getCombinedAnimation$(this.$getCtx$(), $anim$$43$$, this.$_oldPzc$, this.$_pzc$, $bounds$$155_cpContainer$$, this.$_animationDuration$)) && this.$addChild$(this.$_oldPzc$)
    }
    this.$_animation$ ? (this.$_controlPanel$ && this.$addChild$(this.$_controlPanel$), this.$_eventHandler$.$hideTooltip$(), this.$_eventHandler$.$removeListeners$(this), this.$_bListenersRemoved$ = D.$JSCompiler_alias_TRUE$$, this.$_animation$.$setOnEnd$(this.$OnAnimationEnd$, this), this.$_animation$.play()) : this.$OnAnimationEnd$();
    this.$_pzcContainer$ = $pzcContainer$$;
    this.$_topLayer$ && (this.$_oldTopLayerName$ = this.$_topLayer$.$LayerName$);
    (0,D.$JSCompiler_StaticMethods_setKeyboardFocusArray$$)(this.$getCtx$(), [this]);
    this.$_bRendered$ = D.$JSCompiler_alias_TRUE$$
  }
};
D.$JSCompiler_prototypeAlias$$.$_render$ = function $$JSCompiler_prototypeAlias$$$$_render$$($pzcContainer$$1$$, $cpContainer$$1$$) {
  this.$_renderLegend$();
  $cpContainer$$1$$.$addChild$(this.$_areaLayers$);
  $cpContainer$$1$$.$addChild$(this.$_dataAreaLayers$);
  this.$_isMarkerZoomBehaviorFixed$ ? $pzcContainer$$1$$.$addChild$(this.$_dataPointLayers$) : $cpContainer$$1$$.$addChild$(this.$_dataPointLayers$);
  $pzcContainer$$1$$.$addChild$(this.$_labelLayers$);
  var $isolatedArea$$1_navigable$$inline_8364_navigables$$13_pzcMatrix$$18$$ = this.$_pzc$.$_contentPane$.$getMatrix$();
  this.$_topLayerRendered$ = D.$JSCompiler_alias_FALSE$$;
  for(var $i$$816$$ = 0;$i$$816$$ < this.$_layers$.length;$i$$816$$++) {
    var $layer$$11$$ = this.$_layers$[$i$$816$$];
    if(!this.$_topLayerRendered$ && $layer$$11$$ instanceof D.$DvtMapAreaLayer$$ || !($layer$$11$$ instanceof D.$DvtMapAreaLayer$$)) {
      $layer$$11$$.$render$($isolatedArea$$1_navigable$$inline_8364_navigables$$13_pzcMatrix$$18$$), !this.$_topLayerRendered$ && $layer$$11$$ instanceof D.$DvtMapAreaLayer$$ && (this.$_topLayerRendered$ = D.$JSCompiler_alias_TRUE$$, this.$_topLayer$ = $layer$$11$$)
    }
  }
  this.$_topLayer$ && ($isolatedArea$$1_navigable$$inline_8364_navigables$$13_pzcMatrix$$18$$ = this.$_topLayer$.$_isolatedArea$, this.$_isolatedArea$ != $isolatedArea$$1_navigable$$inline_8364_navigables$$13_pzcMatrix$$18$$ && (this.$_isolatedArea$ = $isolatedArea$$1_navigable$$inline_8364_navigables$$13_pzcMatrix$$18$$, this.$_initialZoom$ = this.$_initialCenterY$ = this.$_initialCenterX$ = D.$JSCompiler_alias_NULL$$), $isolatedArea$$1_navigable$$inline_8364_navigables$$13_pzcMatrix$$18$$ = (0,D.$JSCompiler_StaticMethods_getNavigableAreas$$)(this), 
  0 == $isolatedArea$$1_navigable$$inline_8364_navigables$$13_pzcMatrix$$18$$.length && ($isolatedArea$$1_navigable$$inline_8364_navigables$$13_pzcMatrix$$18$$ = (0,D.$JSCompiler_StaticMethods_getNavigableObjects$$)(this)), this.$_keyboardHandler$ && ($isolatedArea$$1_navigable$$inline_8364_navigables$$13_pzcMatrix$$18$$ = $isolatedArea$$1_navigable$$inline_8364_navigables$$13_pzcMatrix$$18$$[0]) && D.$DvtThematicMapEventManager$$.$superclass$.$setFocus$.call(this.$_eventHandler$, $isolatedArea$$1_navigable$$inline_8364_navigables$$13_pzcMatrix$$18$$), 
  this.$_pzc$.$setMinZoom$(D.$JSCompiler_alias_NULL$$), this.$_pzc$.$setMaxZoom$(D.$JSCompiler_alias_NULL$$), this.$_pzc$.$_bZoomingEnabled$ = D.$JSCompiler_alias_TRUE$$, this.$_pzc$.$_bPanningEnabled$ = D.$JSCompiler_alias_TRUE$$, !this.$_bBaseMapChanged$ && !this.$_isResize$ && this.$_initialZoom$ != D.$JSCompiler_alias_NULL$$ ? ((0,D.$JSCompiler_StaticMethods_zoomTo$$)(this.$_pzc$, this.$_initialZoom$), (0,D.$JSCompiler_StaticMethods_panTo$$)(this.$_pzc$, this.$_initialCenterX$, this.$_initialCenterY$)) : 
  this.$_pzc$.$zoomToFit$(D.$JSCompiler_alias_NULL$$, this.$_topLayer$.$getLayerDim$()), (0,D.$JSCompiler_StaticMethods__processInitialDrilled$$)(this), (0,D.$JSCompiler_StaticMethods__updateZoomLimits$$)(this), this.$_pzc$.$_bZoomingEnabled$ = this.$_zooming$, this.$_pzc$.$_bPanningEnabled$ = this.$_panning$)
};
D.$JSCompiler_prototypeAlias$$.$updateLayer$ = function $$JSCompiler_prototypeAlias$$$$updateLayer$$($dataLayerOptions$$, $parentLayer$$2$$, $isAreaDataLayer$$) {
  this.$_bRendered$ = D.$JSCompiler_alias_FALSE$$;
  (0,D.$JSCompiler_StaticMethods__stopAnimation$$)(this);
  (0,D.$JSCompiler_StaticMethods_ParseDataLayers$$)(new D.$DvtThematicMapJsonParser$$(this), [$dataLayerOptions$$], (0,D.$JSCompiler_StaticMethods_getLayer$$)(this, $parentLayer$$2$$), this.$_topLayer$.$LayerName$, $isAreaDataLayer$$);
  this.$_renderLegend$();
  this.$_bRendered$ = D.$JSCompiler_alias_TRUE$$;
  (0,D.$JSCompiler_StaticMethods__updateZoomLimits$$)(this)
};
D.$DvtThematicMap$$.prototype.updateLayer = D.$DvtThematicMap$$.prototype.$updateLayer$;
D.$JSCompiler_StaticMethods__updateZoomLimits$$ = function $$JSCompiler_StaticMethods__updateZoomLimits$$$($JSCompiler_StaticMethods__updateZoomLimits$self$$) {
  var $fittedZoom_zoomPadding$$inline_8383$$;
  $fittedZoom_zoomPadding$$inline_8383$$ = $JSCompiler_StaticMethods__updateZoomLimits$self$$.$_pzc$.$_zoomToFitPadding$;
  var $mapDim$$inline_8384$$ = $JSCompiler_StaticMethods__updateZoomLimits$self$$.$_topLayer$.$getLayerDim$(), $pzcDim$$inline_8385$$ = $JSCompiler_StaticMethods__updateZoomLimits$self$$.$_pzc$.$getSize$();
  $fittedZoom_zoomPadding$$inline_8383$$ = window.Math.min(($pzcDim$$inline_8385$$.$w$ - 2 * $fittedZoom_zoomPadding$$inline_8383$$) / $mapDim$$inline_8384$$.$w$, ($pzcDim$$inline_8385$$.$h$ - 2 * $fittedZoom_zoomPadding$$inline_8383$$) / $mapDim$$inline_8384$$.$h$);
  $JSCompiler_StaticMethods__updateZoomLimits$self$$.$_pzc$.$setMinZoom$($fittedZoom_zoomPadding$$inline_8383$$);
  $JSCompiler_StaticMethods__updateZoomLimits$self$$.$_pzc$.$setMaxZoom$($fittedZoom_zoomPadding$$inline_8383$$ * ($JSCompiler_StaticMethods__updateZoomLimits$self$$.$_zooming$ ? $JSCompiler_StaticMethods__updateZoomLimits$self$$.$_maxZoomFactor$ : 1))
};
D.$JSCompiler_StaticMethods_OnUpdateLayerEnd$$ = function $$JSCompiler_StaticMethods_OnUpdateLayerEnd$$$($JSCompiler_StaticMethods_OnUpdateLayerEnd$self$$) {
  $JSCompiler_StaticMethods_OnUpdateLayerEnd$self$$.$_topLayer$.$_isolatedArea$ && $JSCompiler_StaticMethods_OnUpdateLayerEnd$self$$.$_pzc$.$zoomToFit$(D.$JSCompiler_alias_NULL$$, $JSCompiler_StaticMethods_OnUpdateLayerEnd$self$$.$_topLayer$.$getLayerDim$());
  (0,D.$JSCompiler_StaticMethods__processInitialDrilled$$)($JSCompiler_StaticMethods_OnUpdateLayerEnd$self$$);
  $JSCompiler_StaticMethods_OnUpdateLayerEnd$self$$.$_initialZooming$ && (0,D.$JSCompiler_StaticMethods__zoomData$$)($JSCompiler_StaticMethods_OnUpdateLayerEnd$self$$)
};
D.$DvtThematicMap$$.prototype.$setRolloverBehavior$ = (0,D.$JSCompiler_set$$)("$_rolloverBehavior$");
D.$JSCompiler_StaticMethods__transformContainers$$ = function $$JSCompiler_StaticMethods__transformContainers$$$($JSCompiler_StaticMethods__transformContainers$self$$, $pzcMatrix$$19$$) {
  var $mat$$50$$ = new D.$DvtMatrix$$;
  $mat$$50$$.translate($pzcMatrix$$19$$.$_tx$, $pzcMatrix$$19$$.$_ty$);
  $JSCompiler_StaticMethods__transformContainers$self$$.$_isMarkerZoomBehaviorFixed$ && $JSCompiler_StaticMethods__transformContainers$self$$.$_dataPointLayers$.$setMatrix$($mat$$50$$);
  $JSCompiler_StaticMethods__transformContainers$self$$.$_labelLayers$.$setMatrix$($mat$$50$$)
};
D.$DvtThematicMap$$.prototype.$HandleLegendEvent$ = function $$DvtThematicMap$$$$$HandleLegendEvent$$($event$$763$$) {
  var $spEvent$$1$$ = new D.$DvtSetPropertyEvent$$;
  (0,D.$JSCompiler_StaticMethods_addParam$$)($spEvent$$1$$, "isLegendDisclosed", "show" == $event$$763$$.$getSubType$());
  this.$__dispatchEvent$($spEvent$$1$$)
};
D.$JSCompiler_StaticMethods__updateAnimator$$ = function $$JSCompiler_StaticMethods__updateAnimator$$$($JSCompiler_StaticMethods__updateAnimator$self$$, $animator$$129_event$$764$$, $bRecenterObjs_transMat$$) {
  if($animator$$129_event$$764$$ = $animator$$129_event$$764$$.$_animator$) {
    var $contentPane$$2$$ = $JSCompiler_StaticMethods__updateAnimator$self$$.$_pzc$.$_contentPane$, $mat$$51$$ = (0,D.$JSCompiler_StaticMethods_getDestVal$$)($animator$$129_event$$764$$, $contentPane$$2$$, $contentPane$$2$$.$getMatrix$);
    $bRecenterObjs_transMat$$ && ($JSCompiler_StaticMethods__updateAnimator$self$$.$_currentAnimMatrix$ = $contentPane$$2$$.$getMatrix$(), (0,D.$JSCompiler_StaticMethods_addProp$$)($animator$$129_event$$764$$, "typeMatrix", $JSCompiler_StaticMethods__updateAnimator$self$$, $JSCompiler_StaticMethods__updateAnimator$self$$.$_getCenteredObjsMatrix$, $JSCompiler_StaticMethods__updateAnimator$self$$.$_setCenteredObjsMatrix$, $mat$$51$$));
    $bRecenterObjs_transMat$$ = new D.$DvtMatrix$$(1, 0, 0, 1, $mat$$51$$.$_tx$, $mat$$51$$.$_ty$);
    $JSCompiler_StaticMethods__updateAnimator$self$$.$_isMarkerZoomBehaviorFixed$ && (0,D.$JSCompiler_StaticMethods_addProp$$)($animator$$129_event$$764$$, "typeMatrix", $JSCompiler_StaticMethods__updateAnimator$self$$.$_dataPointLayers$, $JSCompiler_StaticMethods__updateAnimator$self$$.$_dataPointLayers$.$getMatrix$, $JSCompiler_StaticMethods__updateAnimator$self$$.$_dataPointLayers$.$setMatrix$, $bRecenterObjs_transMat$$);
    (0,D.$JSCompiler_StaticMethods_addProp$$)($animator$$129_event$$764$$, "typeMatrix", $JSCompiler_StaticMethods__updateAnimator$self$$.$_labelLayers$, $JSCompiler_StaticMethods__updateAnimator$self$$.$_labelLayers$.$getMatrix$, $JSCompiler_StaticMethods__updateAnimator$self$$.$_labelLayers$.$setMatrix$, $bRecenterObjs_transMat$$)
  }
};
D.$DvtThematicMap$$.prototype.$HandleZoomEvent$ = function $$DvtThematicMap$$$$$HandleZoomEvent$$($event$$765_minMaxY$$inline_8423_padding$$inline_8413_viewportDim$$inline_8415$$) {
  switch($event$$765_minMaxY$$inline_8423_padding$$inline_8413_viewportDim$$inline_8415$$.$getSubType$()) {
    case "adjustPanConstraints":
      if(this.$_panning$) {
        var $i$$817_zoom$$inline_8412_zoomedMapH$$inline_8420$$ = $event$$765_minMaxY$$inline_8423_padding$$inline_8413_viewportDim$$inline_8415$$.$_newZoom$;
        $event$$765_minMaxY$$inline_8423_padding$$inline_8413_viewportDim$$inline_8415$$ = this.$_pzc$.$_zoomToFitPadding$;
        var $pzcDim$$inline_8414_pzcMatrix$$20_zoomedMapY$$inline_8418$$ = this.$_pzc$.$getSize$();
        $event$$765_minMaxY$$inline_8423_padding$$inline_8413_viewportDim$$inline_8415$$ = new D.$DvtRectangle$$($event$$765_minMaxY$$inline_8423_padding$$inline_8413_viewportDim$$inline_8415$$, $event$$765_minMaxY$$inline_8423_padding$$inline_8413_viewportDim$$inline_8415$$, $pzcDim$$inline_8414_pzcMatrix$$20_zoomedMapY$$inline_8418$$.$w$ - 2 * $event$$765_minMaxY$$inline_8423_padding$$inline_8413_viewportDim$$inline_8415$$, $pzcDim$$inline_8414_pzcMatrix$$20_zoomedMapY$$inline_8418$$.$h$ - 2 * 
        $event$$765_minMaxY$$inline_8423_padding$$inline_8413_viewportDim$$inline_8415$$);
        var $legendAdjust$$inline_8421_mapDim$$inline_8416$$ = this.$_topLayer$.$getLayerDim$(), $minMaxX$$inline_8422_zoomedMapX$$inline_8417$$ = $legendAdjust$$inline_8421_mapDim$$inline_8416$$.x * $i$$817_zoom$$inline_8412_zoomedMapH$$inline_8420$$, $pzcDim$$inline_8414_pzcMatrix$$20_zoomedMapY$$inline_8418$$ = $legendAdjust$$inline_8421_mapDim$$inline_8416$$.y * $i$$817_zoom$$inline_8412_zoomedMapH$$inline_8420$$, $zoomedMapW$$inline_8419$$ = $legendAdjust$$inline_8421_mapDim$$inline_8416$$.$w$ * 
        $i$$817_zoom$$inline_8412_zoomedMapH$$inline_8420$$, $i$$817_zoom$$inline_8412_zoomedMapH$$inline_8420$$ = $legendAdjust$$inline_8421_mapDim$$inline_8416$$.$h$ * $i$$817_zoom$$inline_8412_zoomedMapH$$inline_8420$$, $legendAdjust$$inline_8421_mapDim$$inline_8416$$ = 0;
        $zoomedMapW$$inline_8419$$ > $event$$765_minMaxY$$inline_8423_padding$$inline_8413_viewportDim$$inline_8415$$.$w$ ? (this.$_isFixedLegend$ && (0,D.$DvtAgent$isRightToLeft$$)(this.$getCtx$()) && ($legendAdjust$$inline_8421_mapDim$$inline_8416$$ = this.$_legendWidth$), this.$_pzc$.$_minPanX$ = $event$$765_minMaxY$$inline_8423_padding$$inline_8413_viewportDim$$inline_8415$$.x + $event$$765_minMaxY$$inline_8423_padding$$inline_8413_viewportDim$$inline_8415$$.$w$ + $legendAdjust$$inline_8421_mapDim$$inline_8416$$ - 
        ($minMaxX$$inline_8422_zoomedMapX$$inline_8417$$ + $zoomedMapW$$inline_8419$$), this.$_pzc$.$_maxPanX$ = $event$$765_minMaxY$$inline_8423_padding$$inline_8413_viewportDim$$inline_8415$$.x - $minMaxX$$inline_8422_zoomedMapX$$inline_8417$$ + $legendAdjust$$inline_8421_mapDim$$inline_8416$$) : (this.$_isFixedLegend$ && (0,D.$DvtAgent$isRightToLeft$$)(this.$getCtx$()) && ($legendAdjust$$inline_8421_mapDim$$inline_8416$$ = 2 * this.$_legendWidth$), $minMaxX$$inline_8422_zoomedMapX$$inline_8417$$ = 
        ($event$$765_minMaxY$$inline_8423_padding$$inline_8413_viewportDim$$inline_8415$$.x + $event$$765_minMaxY$$inline_8423_padding$$inline_8413_viewportDim$$inline_8415$$.$w$ + $legendAdjust$$inline_8421_mapDim$$inline_8416$$) / 2 - ($minMaxX$$inline_8422_zoomedMapX$$inline_8417$$ + $zoomedMapW$$inline_8419$$ / 2), this.$_pzc$.$_minPanX$ = $minMaxX$$inline_8422_zoomedMapX$$inline_8417$$, this.$_pzc$.$_maxPanX$ = $minMaxX$$inline_8422_zoomedMapX$$inline_8417$$);
        $i$$817_zoom$$inline_8412_zoomedMapH$$inline_8420$$ > $event$$765_minMaxY$$inline_8423_padding$$inline_8413_viewportDim$$inline_8415$$.$h$ ? (this.$_pzc$.$_minPanY$ = $event$$765_minMaxY$$inline_8423_padding$$inline_8413_viewportDim$$inline_8415$$.y + $event$$765_minMaxY$$inline_8423_padding$$inline_8413_viewportDim$$inline_8415$$.$h$ - ($pzcDim$$inline_8414_pzcMatrix$$20_zoomedMapY$$inline_8418$$ + $i$$817_zoom$$inline_8412_zoomedMapH$$inline_8420$$), this.$_pzc$.$_maxPanY$ = $event$$765_minMaxY$$inline_8423_padding$$inline_8413_viewportDim$$inline_8415$$.y - 
        $pzcDim$$inline_8414_pzcMatrix$$20_zoomedMapY$$inline_8418$$) : ($event$$765_minMaxY$$inline_8423_padding$$inline_8413_viewportDim$$inline_8415$$ = ($event$$765_minMaxY$$inline_8423_padding$$inline_8413_viewportDim$$inline_8415$$.y + $event$$765_minMaxY$$inline_8423_padding$$inline_8413_viewportDim$$inline_8415$$.$h$) / 2 - ($pzcDim$$inline_8414_pzcMatrix$$20_zoomedMapY$$inline_8418$$ + $i$$817_zoom$$inline_8412_zoomedMapH$$inline_8420$$ / 2), this.$_pzc$.$_minPanY$ = $event$$765_minMaxY$$inline_8423_padding$$inline_8413_viewportDim$$inline_8415$$, 
        this.$_pzc$.$_maxPanY$ = $event$$765_minMaxY$$inline_8423_padding$$inline_8413_viewportDim$$inline_8415$$)
      }
      break;
    case "zooming":
    ;
    case "elasticAnimBegin":
      (0,D.$JSCompiler_StaticMethods__updateAnimator$$)(this, $event$$765_minMaxY$$inline_8423_padding$$inline_8413_viewportDim$$inline_8415$$, D.$JSCompiler_alias_TRUE$$);
      break;
    case "zoomed":
      if($event$$765_minMaxY$$inline_8423_padding$$inline_8413_viewportDim$$inline_8415$$.$_newZoom$ != D.$JSCompiler_alias_NULL$$) {
        $pzcDim$$inline_8414_pzcMatrix$$20_zoomedMapY$$inline_8418$$ = this.$_pzc$.$_contentPane$.$getMatrix$();
        (0,D.$JSCompiler_StaticMethods_addParam$$)($event$$765_minMaxY$$inline_8423_padding$$inline_8413_viewportDim$$inline_8415$$, "panX", $pzcDim$$inline_8414_pzcMatrix$$20_zoomedMapY$$inline_8418$$.$_tx$);
        (0,D.$JSCompiler_StaticMethods_addParam$$)($event$$765_minMaxY$$inline_8423_padding$$inline_8413_viewportDim$$inline_8415$$, "panY", $pzcDim$$inline_8414_pzcMatrix$$20_zoomedMapY$$inline_8418$$.$_ty$);
        $event$$765_minMaxY$$inline_8423_padding$$inline_8413_viewportDim$$inline_8415$$.$_animator$ = D.$JSCompiler_alias_NULL$$;
        this.$__dispatchEvent$($event$$765_minMaxY$$inline_8423_padding$$inline_8413_viewportDim$$inline_8415$$);
        (0,D.$JSCompiler_StaticMethods__transformContainers$$)(this, $pzcDim$$inline_8414_pzcMatrix$$20_zoomedMapY$$inline_8418$$);
        for($i$$817_zoom$$inline_8412_zoomedMapH$$inline_8420$$ = 0;$i$$817_zoom$$inline_8412_zoomedMapH$$inline_8420$$ < this.$_layers$.length;$i$$817_zoom$$inline_8412_zoomedMapH$$inline_8420$$++) {
          this.$_layers$[$i$$817_zoom$$inline_8412_zoomedMapH$$inline_8420$$].$HandleZoomEvent$($event$$765_minMaxY$$inline_8423_padding$$inline_8413_viewportDim$$inline_8415$$, $pzcDim$$inline_8414_pzcMatrix$$20_zoomedMapY$$inline_8418$$)
        }
      }
      break;
    case "zoomAndCenter":
      (0,D.$JSCompiler_StaticMethods_fitSelectedRegions$$)(this);
      break;
    case "zoomToFitEnd":
      this.$__dispatchEvent$(new D.$DvtZoomEvent$$)
  }
};
D.$DvtThematicMap$$.prototype.$HandlePanEvent$ = function $$DvtThematicMap$$$$$HandlePanEvent$$($event$$766_i$$818_stroke$$114$$) {
  var $subType$$9$$ = $event$$766_i$$818_stroke$$114$$.$getSubType$();
  if("elasticAnimBegin" == $subType$$9$$) {
    (0,D.$JSCompiler_StaticMethods__updateAnimator$$)(this, $event$$766_i$$818_stroke$$114$$, D.$JSCompiler_alias_FALSE$$)
  }else {
    if("panned" == $subType$$9$$ && $event$$766_i$$818_stroke$$114$$.$_newX$ != D.$JSCompiler_alias_NULL$$) {
      var $pzcMatrix$$21_styleMap$$93$$ = this.$_pzc$.$_contentPane$.$getMatrix$();
      (0,D.$JSCompiler_StaticMethods_addParam$$)($event$$766_i$$818_stroke$$114$$, "zoom", this.$_pzc$.$getZoom$());
      (0,D.$JSCompiler_StaticMethods_addParam$$)($event$$766_i$$818_stroke$$114$$, "panX", $pzcMatrix$$21_styleMap$$93$$.$_tx$);
      (0,D.$JSCompiler_StaticMethods_addParam$$)($event$$766_i$$818_stroke$$114$$, "panY", $pzcMatrix$$21_styleMap$$93$$.$_ty$);
      $event$$766_i$$818_stroke$$114$$.$_animator$ = D.$JSCompiler_alias_NULL$$;
      this.$__dispatchEvent$($event$$766_i$$818_stroke$$114$$);
      (0,D.$JSCompiler_StaticMethods__transformContainers$$)(this, $pzcMatrix$$21_styleMap$$93$$);
      for($event$$766_i$$818_stroke$$114$$ = 0;$event$$766_i$$818_stroke$$114$$ < this.$_layers$.length;$event$$766_i$$818_stroke$$114$$++) {
        this.$_layers$[$event$$766_i$$818_stroke$$114$$].$HandlePanEvent$($pzcMatrix$$21_styleMap$$93$$)
      }
    }
  }
  this.$_legendPanel$ && ("alta" == this.$_skinName$ ? "dragPanBegin" === $subType$$9$$ ? this.$_legendPanel$.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$) : "dragPanEnd" === $subType$$9$$ && this.$_legendPanel$.$setMouseEnabled$(D.$JSCompiler_alias_TRUE$$) : ($pzcMatrix$$21_styleMap$$93$$ = this.$getSubcomponentStyles$(), $event$$766_i$$818_stroke$$114$$ = this.$_legendPanel$.$_background$.$getStroke$().$clone$(), "dragPanBegin" === $subType$$9$$ ? (this.$_legend$.$setAlpha$($pzcMatrix$$21_styleMap$$93$$.backgroundDragAlpha), 
  $event$$766_i$$818_stroke$$114$$.$setAlpha$($pzcMatrix$$21_styleMap$$93$$.borderDragAlpha), this.$_legendPanel$.$_background$.$setStroke$($event$$766_i$$818_stroke$$114$$), this.$_legendPanel$.$_buttonFrame$ && this.$_legendPanel$.$_buttonFrame$.$setAlpha$($pzcMatrix$$21_styleMap$$93$$.borderDragAlpha), this.$_legendPanel$.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$)) : "dragPanEnd" === $subType$$9$$ && (this.$_legend$.$setAlpha$(1), $event$$766_i$$818_stroke$$114$$.$setAlpha$($pzcMatrix$$21_styleMap$$93$$.borderAlpha), 
  this.$_legendPanel$.$_background$.$setStroke$($event$$766_i$$818_stroke$$114$$), this.$_legendPanel$.$_buttonFrame$ && this.$_legendPanel$.$_buttonFrame$.$setAlpha$($pzcMatrix$$21_styleMap$$93$$.borderAlpha), this.$_legendPanel$.$setMouseEnabled$(D.$JSCompiler_alias_TRUE$$))))
};
D.$DvtThematicMap$$.prototype.$GetControlPanelBehavior$ = function $$DvtThematicMap$$$$$GetControlPanelBehavior$$() {
  return"none" == this.$_drillMode$ && !this.$_zooming$ && (!this.$_panning$ || "alta" == this.$_skinName$) ? "hidden" : D.$DvtThematicMap$$.$superclass$.$GetControlPanelBehavior$.call(this)
};
D.$DvtThematicMap$$.prototype.$GetControlPanel$ = function $$DvtThematicMap$$$$$GetControlPanel$$() {
  var $cpBehavior$$3$$ = this.$GetControlPanelBehavior$();
  return"hidden" != $cpBehavior$$3$$ ? new D.$DvtThematicMapControlPanel$$(this.$getCtx$(), this, "initCollapsed" == $cpBehavior$$3$$ ? 1 : 2) : D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_StaticMethods__processInitialDrilled$$ = function $$JSCompiler_StaticMethods__processInitialDrilled$$$($JSCompiler_StaticMethods__processInitialDrilled$self$$) {
  $JSCompiler_StaticMethods__processInitialDrilled$self$$.$_processingInitDrilled$ = D.$JSCompiler_alias_TRUE$$;
  for(var $i$$819$$ = 0;$i$$819$$ < $JSCompiler_StaticMethods__processInitialDrilled$self$$.$_layers$.length;$i$$819$$++) {
    var $layerName$$23$$ = $JSCompiler_StaticMethods__processInitialDrilled$self$$.$_layers$[$i$$819$$].$LayerName$;
    $layerName$$23$$ in $JSCompiler_StaticMethods__processInitialDrilled$self$$.$_initDrilled$ && ($JSCompiler_StaticMethods__processInitialDrilled$self$$.$_selectedAreas$[$layerName$$23$$] = $JSCompiler_StaticMethods__processInitialDrilled$self$$.$_initDrilled$[$layerName$$23$$][1], $JSCompiler_StaticMethods__processInitialDrilled$self$$.$_clickedLayerName$ = $layerName$$23$$, $JSCompiler_StaticMethods__processInitialDrilled$self$$.$_clickedDataLayerId$ = $JSCompiler_StaticMethods__processInitialDrilled$self$$.$_initDrilled$[$layerName$$23$$][0], 
    $JSCompiler_StaticMethods__processInitialDrilled$self$$.$drillDown$())
  }
  $JSCompiler_StaticMethods__processInitialDrilled$self$$.$_processingInitDrilled$ = D.$JSCompiler_alias_FALSE$$
};
D.$DvtThematicMap$$.prototype.$resetMap$ = function $$DvtThematicMap$$$$$resetMap$$() {
  (0,D.$JSCompiler_StaticMethods__stopAnimation$$)(this);
  for(var $animator$$inline_8426_removeObjs$$ = [], $addObjs$$ = [], $i$$820_j$$111$$ = this.$_layers$.length - 1;-1 < $i$$820_j$$111$$;$i$$820_j$$111$$--) {
    this.$_layers$[$i$$820_j$$111$$].$LayerName$ == this.$_topLayer$.$LayerName$ ? this.$_layers$[$i$$820_j$$111$$].reset($addObjs$$) : this.$_layers$[$i$$820_j$$111$$].reset($animator$$inline_8426_removeObjs$$)
  }
  for($i$$820_j$$111$$ = 0;$i$$820_j$$111$$ < $animator$$inline_8426_removeObjs$$.length;$i$$820_j$$111$$++) {
    if($animator$$inline_8426_removeObjs$$[$i$$820_j$$111$$]) {
      var $parent$$87$$ = $animator$$inline_8426_removeObjs$$[$i$$820_j$$111$$].getParent();
      $parent$$87$$ && $parent$$87$$.removeChild($animator$$inline_8426_removeObjs$$[$i$$820_j$$111$$])
    }
  }
  for($i$$820_j$$111$$ = 0;$i$$820_j$$111$$ < $addObjs$$.length;$i$$820_j$$111$$++) {
    $addObjs$$[$i$$820_j$$111$$] && $addObjs$$[$i$$820_j$$111$$].$setAlpha$(1)
  }
  this.$_drilledRowKeys$ = [];
  $animator$$inline_8426_removeObjs$$ = new D.$DvtAnimator$$(this.$getCtx$(), 0.3);
  this.$_pzc$.$zoomToFit$($animator$$inline_8426_removeObjs$$);
  $animator$$inline_8426_removeObjs$$.play();
  this.$_drilled$ = [];
  this.$_controlPanel$ && "none" != this.$_drillMode$ && ((0,D.$JSCompiler_StaticMethods_setEnabledDrillDownButton$$)(this.$_controlPanel$, D.$JSCompiler_alias_FALSE$$), (0,D.$JSCompiler_StaticMethods_setEnabledDrillUpButton$$)(this.$_controlPanel$, D.$JSCompiler_alias_FALSE$$))
};
D.$JSCompiler_StaticMethods__zoomData$$ = function $$JSCompiler_StaticMethods__zoomData$$$($JSCompiler_StaticMethods__zoomData$self$$) {
  var $areaBounds_bounds$$156$$ = $JSCompiler_StaticMethods__zoomData$self$$.$_dataAreaLayers$.$getDimensions$(), $pointBounds$$ = $JSCompiler_StaticMethods__zoomData$self$$.$_dataPointLayers$.$getDimensions$();
  if($JSCompiler_StaticMethods__zoomData$self$$.$_isMarkerZoomBehaviorFixed$) {
    var $mat$$52$$ = $JSCompiler_StaticMethods__zoomData$self$$.$_pzc$.$_contentPane$.$getMatrix$();
    $pointBounds$$.$w$ /= $mat$$52$$.$_a$;
    $pointBounds$$.$h$ /= $mat$$52$$.$_d$;
    $pointBounds$$.x /= $mat$$52$$.$_a$;
    $pointBounds$$.y /= $mat$$52$$.$_d$
  }
  $areaBounds_bounds$$156$$ = (0,D.$JSCompiler_StaticMethods_getUnion$$)($areaBounds_bounds$$156$$, $pointBounds$$);
  (0,D.$JSCompiler_StaticMethods__stopAnimation$$)($JSCompiler_StaticMethods__zoomData$self$$);
  var $maxZoom$$4$$;
  $JSCompiler_StaticMethods__zoomData$self$$.$_pzc$.$_bZoomingEnabled$ || ($maxZoom$$4$$ = $JSCompiler_StaticMethods__zoomData$self$$.$_pzc$.$getMaxZoom$(), $JSCompiler_StaticMethods__zoomData$self$$.$_pzc$.$setMaxZoom$($maxZoom$$4$$ * $JSCompiler_StaticMethods__zoomData$self$$.$_maxZoomFactor$));
  var $animation$$6$$;
  (0,D.$DvtAgent$isEnvironmentBrowser$$)() && ($animation$$6$$ = new D.$DvtAnimator$$($JSCompiler_StaticMethods__zoomData$self$$.$getCtx$(), 0.3));
  0 < $areaBounds_bounds$$156$$.$w$ && 0 < $areaBounds_bounds$$156$$.$h$ ? $JSCompiler_StaticMethods__zoomData$self$$.$_pzc$.$zoomToFit$($animation$$6$$, $areaBounds_bounds$$156$$) : $JSCompiler_StaticMethods__zoomData$self$$.$_pzc$.$zoomToFit$($animation$$6$$, $JSCompiler_StaticMethods__zoomData$self$$.$_topLayer$.$getLayerDim$());
  $animation$$6$$ && $animation$$6$$.play();
  $maxZoom$$4$$ && $JSCompiler_StaticMethods__zoomData$self$$.$_pzc$.$setMaxZoom$($maxZoom$$4$$)
};
D.$DvtThematicMap$$.prototype.$_zoomToFitBounds$ = function $$DvtThematicMap$$$$$_zoomToFitBounds$$($bounds$$157$$) {
  var $animator$$130$$ = new D.$DvtAnimator$$(this.$getCtx$(), 0.3);
  this.$_pzc$.$zoomToFit$($animator$$130$$, $bounds$$157$$);
  $animator$$130$$.play()
};
D.$JSCompiler_StaticMethods_fitSelectedRegions$$ = function $$JSCompiler_StaticMethods_fitSelectedRegions$$$($JSCompiler_StaticMethods_fitSelectedRegions$self$$) {
  if($JSCompiler_StaticMethods_fitSelectedRegions$self$$.$_clickedDataLayerId$) {
    var $dataLayer$$8_selection$$38_selectionHandler$$13$$ = (0,D.$JSCompiler_StaticMethods_getLayer$$)($JSCompiler_StaticMethods_fitSelectedRegions$self$$, $JSCompiler_StaticMethods_fitSelectedRegions$self$$.$_clickedLayerName$).$getDataLayer$($JSCompiler_StaticMethods_fitSelectedRegions$self$$.$_clickedDataLayerId$);
    if($dataLayer$$8_selection$$38_selectionHandler$$13$$ && ($dataLayer$$8_selection$$38_selectionHandler$$13$$ = $dataLayer$$8_selection$$38_selectionHandler$$13$$.$_selectionHandler$)) {
      for(var $dataLayer$$8_selection$$38_selectionHandler$$13$$ = $dataLayer$$8_selection$$38_selectionHandler$$13$$.getSelection(), $i$$821$$ = 0;$i$$821$$ < $dataLayer$$8_selection$$38_selectionHandler$$13$$.length;$i$$821$$++) {
        $dataLayer$$8_selection$$38_selectionHandler$$13$$[$i$$821$$] = $dataLayer$$8_selection$$38_selectionHandler$$13$$[$i$$821$$].$getDisplayable$()
      }
      if(0 < $dataLayer$$8_selection$$38_selectionHandler$$13$$.length) {
        for(var $bounds$$158$$ = $dataLayer$$8_selection$$38_selectionHandler$$13$$[0].$getDimensions$(), $i$$821$$ = 1;$i$$821$$ < $dataLayer$$8_selection$$38_selectionHandler$$13$$.length;$i$$821$$++) {
          $bounds$$158$$ = (0,D.$JSCompiler_StaticMethods_getUnion$$)($bounds$$158$$, $dataLayer$$8_selection$$38_selectionHandler$$13$$[$i$$821$$].$getDimensions$())
        }
        $JSCompiler_StaticMethods_fitSelectedRegions$self$$.$_zoomToFitBounds$($bounds$$158$$)
      }
    }
  }
};
D.$JSCompiler_StaticMethods_getDrillParentLayer$$ = function $$JSCompiler_StaticMethods_getDrillParentLayer$$$($JSCompiler_StaticMethods_getDrillParentLayer$self$$, $layerName$$24$$) {
  var $parentLayerName$$ = D.$DvtBaseMapManager$$.$getParentLayerName$($JSCompiler_StaticMethods_getDrillParentLayer$self$$.$_mapName$, $layerName$$24$$);
  return(0,D.$JSCompiler_StaticMethods_getLayer$$)($JSCompiler_StaticMethods_getDrillParentLayer$self$$, $parentLayerName$$)
};
D.$JSCompiler_StaticMethods_getDrillChildLayer$$ = function $$JSCompiler_StaticMethods_getDrillChildLayer$$$($JSCompiler_StaticMethods_getDrillChildLayer$self$$, $layerName$$25$$) {
  var $childLayerName$$1$$ = D.$DvtBaseMapManager$$.$getChildLayerName$($JSCompiler_StaticMethods_getDrillChildLayer$self$$.$_mapName$, $layerName$$25$$);
  return(0,D.$JSCompiler_StaticMethods_getLayer$$)($JSCompiler_StaticMethods_getDrillChildLayer$self$$, $childLayerName$$1$$)
};
D.$JSCompiler_StaticMethods_getNavigableAreas$$ = function $$JSCompiler_StaticMethods_getNavigableAreas$$$($JSCompiler_StaticMethods_getNavigableAreas$self$$) {
  var $disclosed$$5$$ = [];
  if($JSCompiler_StaticMethods_getNavigableAreas$self$$.$_topLayer$) {
    for(var $i$$822$$ = 0;$i$$822$$ < $JSCompiler_StaticMethods_getNavigableAreas$self$$.$_layers$.length;$i$$822$$++) {
      var $dataLayers$$ = $JSCompiler_StaticMethods_getNavigableAreas$self$$.$_layers$[$i$$822$$].$DataLayers$, $id$$295$$;
      for($id$$295$$ in $dataLayers$$) {
        $disclosed$$5$$ = $JSCompiler_StaticMethods_getNavigableAreas$self$$.$_topLayer$.$LayerName$ == $JSCompiler_StaticMethods_getNavigableAreas$self$$.$_layers$[$i$$822$$].$LayerName$ ? $disclosed$$5$$.concat((0,D.$JSCompiler_StaticMethods_getNavigableAreaObjects$$)($dataLayers$$[$id$$295$$])) : $disclosed$$5$$.concat((0,D.$JSCompiler_StaticMethods_getNavigableDisclosedAreaObjects$$)($dataLayers$$[$id$$295$$]))
      }
    }
  }
  return $disclosed$$5$$
};
D.$JSCompiler_StaticMethods_getNavigableObjects$$ = function $$JSCompiler_StaticMethods_getNavigableObjects$$$($JSCompiler_StaticMethods_getNavigableObjects$self$$) {
  var $navigable$$20$$ = [];
  if($JSCompiler_StaticMethods_getNavigableObjects$self$$.$_topLayer$) {
    for(var $i$$823$$ = 0;$i$$823$$ < $JSCompiler_StaticMethods_getNavigableObjects$self$$.$_layers$.length;$i$$823$$++) {
      var $dataLayers$$1$$ = $JSCompiler_StaticMethods_getNavigableObjects$self$$.$_layers$[$i$$823$$].$DataLayers$;
      if($JSCompiler_StaticMethods_getNavigableObjects$self$$.$_topLayer$.$LayerName$ == $JSCompiler_StaticMethods_getNavigableObjects$self$$.$_layers$[$i$$823$$].$LayerName$ || !($JSCompiler_StaticMethods_getNavigableObjects$self$$.$_layers$[$i$$823$$] instanceof D.$DvtMapAreaLayer$$)) {
        for(var $id$$296$$ in $dataLayers$$1$$) {
          $navigable$$20$$ = $navigable$$20$$.concat($dataLayers$$1$$[$id$$296$$].$_dataObjs$)
        }
      }
    }
  }
  return $navigable$$20$$
};
D.$DvtThematicMap$$.prototype.$_setCenteredObjsMatrix$ = function $$DvtThematicMap$$$$$_setCenteredObjsMatrix$$($matrix$$22$$) {
  this.$_currentAnimMatrix$ = $matrix$$22$$;
  if(this.$_isMarkerZoomBehaviorFixed$) {
    for(var $numLabelLayers_objs$$63$$ = (0,D.$JSCompiler_StaticMethods_getNavigableObjects$$)(this), $i$$824_j$$112$$ = 0;$i$$824_j$$112$$ < $numLabelLayers_objs$$63$$.length;$i$$824_j$$112$$++) {
      $numLabelLayers_objs$$63$$[$i$$824_j$$112$$].$HandleZoomEvent$($matrix$$22$$)
    }
    $numLabelLayers_objs$$63$$ = this.$_labelLayers$.$getNumChildren$();
    for($i$$824_j$$112$$ = 0;$i$$824_j$$112$$ < $numLabelLayers_objs$$63$$;$i$$824_j$$112$$++) {
      for(var $labelLayer$$ = this.$_labelLayers$.$getChildAt$($i$$824_j$$112$$), $numLabels$$1$$ = $labelLayer$$.$getNumChildren$(), $k$$10$$ = 0;$k$$10$$ < $numLabels$$1$$;$k$$10$$++) {
        var $label$$99$$ = $labelLayer$$.$getChildAt$($k$$10$$);
        $label$$99$$ instanceof D.$DvtMapLabel$$ && $label$$99$$.update($matrix$$22$$)
      }
    }
  }
};
D.$DvtThematicMap$$.prototype.$_getCenteredObjsMatrix$ = (0,D.$JSCompiler_get$$)("$_currentAnimMatrix$");
D.$DvtThematicMap$$.prototype.$drillDown$ = function $$DvtThematicMap$$$$$drillDown$$() {
  (0,D.$JSCompiler_StaticMethods__stopAnimation$$)(this);
  var $childLayer$$ = (0,D.$JSCompiler_StaticMethods_getDrillChildLayer$$)(this, this.$_clickedLayerName$), $parentLayer$$3$$ = (0,D.$JSCompiler_StaticMethods_getLayer$$)(this, this.$_clickedLayerName$), $fadeInObjs$$5$$ = [];
  if($childLayer$$) {
    this.$_drillDataLayer$[this.$_clickedLayerName$] = this.$_clickedDataLayerId$;
    var $selectedAreas$$1$$ = this.$_selectedAreas$[this.$_clickedLayerName$];
    !this.$_processingInitDrilled$ && "single" == this.$_drillMode$ && (this.$_drilled$.pop(), $parentLayer$$3$$.reset($fadeInObjs$$5$$, $selectedAreas$$1$$), $childLayer$$.reset(this.$_drillAnimFadeOutObjs$));
    for(var $newSelectedAreas$$ = [], $i$$825$$ = 0;$i$$825$$ < $selectedAreas$$1$$.length;$i$$825$$++) {
      var $parentArea$$ = $selectedAreas$$1$$[$i$$825$$], $JSCompiler_StaticMethods_drill$self$$inline_8428_childrenToDisclose_drillLayer$$ = (0,D.$JSCompiler_StaticMethods_getChildrenForArea$$)($parentLayer$$3$$, $parentArea$$);
      $newSelectedAreas$$.push($JSCompiler_StaticMethods_drill$self$$inline_8428_childrenToDisclose_drillLayer$$[0]);
      for(var $areaName$$inline_8429_j$$113$$ = 0;$areaName$$inline_8429_j$$113$$ < $JSCompiler_StaticMethods_drill$self$$inline_8428_childrenToDisclose_drillLayer$$.length;$areaName$$inline_8429_j$$113$$++) {
        this.$_childToParent$[$JSCompiler_StaticMethods_drill$self$$inline_8428_childrenToDisclose_drillLayer$$[$areaName$$inline_8429_j$$113$$]] = $selectedAreas$$1$$[$i$$825$$]
      }
      $childLayer$$.$discloseAreas$($JSCompiler_StaticMethods_drill$self$$inline_8428_childrenToDisclose_drillLayer$$, $fadeInObjs$$5$$);
      if($JSCompiler_StaticMethods_drill$self$$inline_8428_childrenToDisclose_drillLayer$$ = $parentLayer$$3$$.$getDataLayer$(this.$_clickedDataLayerId$)) {
        for(var $areaName$$inline_8429_j$$113$$ = $parentArea$$, $fadeOutObjs$$inline_8430$$ = this.$_drillAnimFadeOutObjs$, $i$$inline_8431_label$$inline_8432_leaderLine$$inline_8433$$ = 0;$i$$inline_8431_label$$inline_8432_leaderLine$$inline_8433$$ < $JSCompiler_StaticMethods_drill$self$$inline_8428_childrenToDisclose_drillLayer$$.$_areaObjs$.length;$i$$inline_8431_label$$inline_8432_leaderLine$$inline_8433$$++) {
          if($JSCompiler_StaticMethods_drill$self$$inline_8428_childrenToDisclose_drillLayer$$.$_areaObjs$[$i$$inline_8431_label$$inline_8432_leaderLine$$inline_8433$$].$getLocation$() == $areaName$$inline_8429_j$$113$$) {
            $JSCompiler_StaticMethods_drill$self$$inline_8428_childrenToDisclose_drillLayer$$.$_areaObjs$[$i$$inline_8431_label$$inline_8432_leaderLine$$inline_8433$$].$setDrilled$(D.$JSCompiler_alias_TRUE$$);
            $JSCompiler_StaticMethods_drill$self$$inline_8428_childrenToDisclose_drillLayer$$.$_drilled$.push($areaName$$inline_8429_j$$113$$);
            $fadeOutObjs$$inline_8430$$.push($JSCompiler_StaticMethods_drill$self$$inline_8428_childrenToDisclose_drillLayer$$.$_areaObjs$[$i$$inline_8431_label$$inline_8432_leaderLine$$inline_8433$$].$getDisplayable$());
            if($i$$inline_8431_label$$inline_8432_leaderLine$$inline_8433$$ = $JSCompiler_StaticMethods_drill$self$$inline_8428_childrenToDisclose_drillLayer$$.$_areaObjs$[$i$$inline_8431_label$$inline_8432_leaderLine$$inline_8433$$].$getLabel$()) {
              $fadeOutObjs$$inline_8430$$.push($i$$inline_8431_label$$inline_8432_leaderLine$$inline_8433$$), ($i$$inline_8431_label$$inline_8432_leaderLine$$inline_8433$$ = $i$$inline_8431_label$$inline_8432_leaderLine$$inline_8433$$.$_leaderLine$) && $fadeOutObjs$$inline_8430$$.push($i$$inline_8431_label$$inline_8432_leaderLine$$inline_8433$$)
            }
            break
          }
        }
        for($i$$inline_8431_label$$inline_8432_leaderLine$$inline_8433$$ = 0;$i$$inline_8431_label$$inline_8432_leaderLine$$inline_8433$$ < $JSCompiler_StaticMethods_drill$self$$inline_8428_childrenToDisclose_drillLayer$$.$_dataObjs$.length;$i$$inline_8431_label$$inline_8432_leaderLine$$inline_8433$$++) {
          if($JSCompiler_StaticMethods_drill$self$$inline_8428_childrenToDisclose_drillLayer$$.$_dataObjs$[$i$$inline_8431_label$$inline_8432_leaderLine$$inline_8433$$].$getLocation$() == $areaName$$inline_8429_j$$113$$) {
            $fadeOutObjs$$inline_8430$$.push($JSCompiler_StaticMethods_drill$self$$inline_8428_childrenToDisclose_drillLayer$$.$_dataObjs$[$i$$inline_8431_label$$inline_8432_leaderLine$$inline_8433$$].$getDisplayable$());
            break
          }
        }
      }
      this.$_drilled$.push($parentArea$$)
    }
    (0,D.$JSCompiler_StaticMethods__handleDrillAnimations$$)(this, this.$_drillAnimFadeOutObjs$, $fadeInObjs$$5$$, D.$JSCompiler_alias_FALSE$$);
    (0,D.$JSCompiler_StaticMethods__updateDrillButton$$)(this, $childLayer$$.$LayerName$);
    this.$_clickedLayerName$ = $childLayer$$.$LayerName$;
    this.$_selectedAreas$[this.$_clickedLayerName$] = $newSelectedAreas$$
  }
};
D.$DvtThematicMap$$.prototype.$drillUp$ = function $$DvtThematicMap$$$$$drillUp$$() {
  (0,D.$JSCompiler_StaticMethods__stopAnimation$$)(this);
  for(var $childLayer$$1$$ = (0,D.$JSCompiler_StaticMethods_getLayer$$)(this, this.$_clickedLayerName$), $parentLayer$$4$$ = (0,D.$JSCompiler_StaticMethods_getDrillParentLayer$$)(this, this.$_clickedLayerName$), $fadeInObjs$$6$$ = [], $newSelectedAreas$$1$$ = [], $selectedAreas$$2$$ = this.$_selectedAreas$[this.$_clickedLayerName$], $i$$826$$ = 0;$i$$826$$ < $selectedAreas$$2$$.length;$i$$826$$++) {
    var $index$$247_parentArea$$1$$ = this.$_childToParent$[$selectedAreas$$2$$[$i$$826$$]];
    $newSelectedAreas$$1$$.push($index$$247_parentArea$$1$$);
    if(-1 != D.$DvtArrayUtils$$.$getIndex$(this.$_drilled$, $index$$247_parentArea$$1$$)) {
      $childLayer$$1$$.$undiscloseAreas$((0,D.$JSCompiler_StaticMethods_getChildrenForArea$$)($parentLayer$$4$$, $index$$247_parentArea$$1$$), this.$_drillAnimFadeOutObjs$);
      for(var $JSCompiler_StaticMethods_undrill$self$$inline_8435$$ = $parentLayer$$4$$.$getDataLayer$(this.$_drillDataLayer$[$parentLayer$$4$$.$LayerName$]), $areaName$$inline_8436$$ = $index$$247_parentArea$$1$$, $fadeInObjs$$inline_8437$$ = $fadeInObjs$$6$$, $i$$inline_8438_label$$inline_8441$$ = 0;$i$$inline_8438_label$$inline_8441$$ < $JSCompiler_StaticMethods_undrill$self$$inline_8435$$.$_areaObjs$.length;$i$$inline_8438_label$$inline_8441$$++) {
        if($JSCompiler_StaticMethods_undrill$self$$inline_8435$$.$_areaObjs$[$i$$inline_8438_label$$inline_8441$$].$getLocation$() == $areaName$$inline_8436$$) {
          var $displayable$$inline_8440_idx$$inline_8439$$ = D.$DvtArrayUtils$$.$getIndex$($JSCompiler_StaticMethods_undrill$self$$inline_8435$$.$_drilled$, $areaName$$inline_8436$$);
          $JSCompiler_StaticMethods_undrill$self$$inline_8435$$.$_drilled$.splice($displayable$$inline_8440_idx$$inline_8439$$, 1);
          $JSCompiler_StaticMethods_undrill$self$$inline_8435$$.$_areaObjs$[$i$$inline_8438_label$$inline_8441$$].$setDrilled$(D.$JSCompiler_alias_FALSE$$);
          $displayable$$inline_8440_idx$$inline_8439$$ = $JSCompiler_StaticMethods_undrill$self$$inline_8435$$.$_areaObjs$[$i$$inline_8438_label$$inline_8441$$].$getDisplayable$();
          $JSCompiler_StaticMethods_undrill$self$$inline_8435$$.$_dataAreaLayer$.$addChild$($displayable$$inline_8440_idx$$inline_8439$$);
          $fadeInObjs$$inline_8437$$.push($displayable$$inline_8440_idx$$inline_8439$$);
          if($i$$inline_8438_label$$inline_8441$$ = $JSCompiler_StaticMethods_undrill$self$$inline_8435$$.$_areaObjs$[$i$$inline_8438_label$$inline_8441$$].$getLabel$()) {
            $i$$inline_8438_label$$inline_8441$$.update($JSCompiler_StaticMethods_undrill$self$$inline_8435$$.$_pzcMatrix$), $fadeInObjs$$inline_8437$$.push($i$$inline_8438_label$$inline_8441$$), $fadeInObjs$$inline_8437$$.push($i$$inline_8438_label$$inline_8441$$.$_leaderLine$)
          }
          break
        }
      }
      for($i$$inline_8438_label$$inline_8441$$ = 0;$i$$inline_8438_label$$inline_8441$$ < $JSCompiler_StaticMethods_undrill$self$$inline_8435$$.$_dataObjs$.length;$i$$inline_8438_label$$inline_8441$$++) {
        if($JSCompiler_StaticMethods_undrill$self$$inline_8435$$.$_dataObjs$[$i$$inline_8438_label$$inline_8441$$].$getLocation$() == $areaName$$inline_8436$$) {
          $displayable$$inline_8440_idx$$inline_8439$$ = $JSCompiler_StaticMethods_undrill$self$$inline_8435$$.$_dataObjs$[$i$$inline_8438_label$$inline_8441$$].$getDisplayable$();
          $JSCompiler_StaticMethods_undrill$self$$inline_8435$$.$_dataPointLayer$.$addChild$($displayable$$inline_8440_idx$$inline_8439$$);
          $fadeInObjs$$inline_8437$$.push($displayable$$inline_8440_idx$$inline_8439$$);
          break
        }
      }
      $index$$247_parentArea$$1$$ = D.$DvtArrayUtils$$.$getIndex$(this.$_drilled$, $index$$247_parentArea$$1$$);
      -1 != $index$$247_parentArea$$1$$ && this.$_drilled$.splice($index$$247_parentArea$$1$$, 1)
    }
  }
  (0,D.$JSCompiler_StaticMethods__handleDrillAnimations$$)(this, this.$_drillAnimFadeOutObjs$, $fadeInObjs$$6$$, D.$JSCompiler_alias_TRUE$$);
  this.$_clickedLayerName$ = $parentLayer$$4$$.$LayerName$;
  this.$_clickedDataLayerId$ = this.$_drillDataLayer$[this.$_clickedLayerName$];
  this.$_selectedAreas$[this.$_clickedLayerName$] = $newSelectedAreas$$1$$;
  (0,D.$JSCompiler_StaticMethods__updateDrillButton$$)(this, this.$_clickedLayerName$)
};
D.$JSCompiler_StaticMethods__stopAnimation$$ = function $$JSCompiler_StaticMethods__stopAnimation$$$($JSCompiler_StaticMethods__stopAnimation$self$$) {
  $JSCompiler_StaticMethods__stopAnimation$self$$.$_animation$ && ($JSCompiler_StaticMethods__stopAnimation$self$$.$_animation$.stop(D.$JSCompiler_alias_TRUE$$), $JSCompiler_StaticMethods__stopAnimation$self$$.$_animation$ = D.$JSCompiler_alias_NULL$$)
};
D.$JSCompiler_StaticMethods__handleDrillAnimations$$ = function $$JSCompiler_StaticMethods__handleDrillAnimations$$$($JSCompiler_StaticMethods__handleDrillAnimations$self$$, $oldObjs$$3$$, $newObjs$$3$$, $isDrillUp$$) {
  $JSCompiler_StaticMethods__handleDrillAnimations$self$$.$_pzc$.$_contentPane$.$getMatrix$();
  if("zoomToFit" == $JSCompiler_StaticMethods__handleDrillAnimations$self$$.$_animationOnDrill$ && !$JSCompiler_StaticMethods__handleDrillAnimations$self$$.$_processingInitDrilled$) {
    var $animator$$132$$ = new D.$DvtAnimator$$($JSCompiler_StaticMethods__handleDrillAnimations$self$$.$getCtx$(), 0.3);
    (0,D.$DvtAgent$isEnvironmentBrowser$$)() || ($animator$$132$$ = D.$JSCompiler_alias_NULL$$);
    $isDrillUp$$ ? $JSCompiler_StaticMethods__handleDrillAnimations$self$$.$_pzc$.$zoomToFit$($animator$$132$$) : (0,D.$JSCompiler_StaticMethods_fitSelectedRegions$$)($JSCompiler_StaticMethods__handleDrillAnimations$self$$);
    $animator$$132$$ && $animator$$132$$.play()
  }
  (0,D.$JSCompiler_StaticMethods__stopAnimation$$)($JSCompiler_StaticMethods__handleDrillAnimations$self$$);
  if((0,D.$DvtAgent$isEnvironmentBrowser$$)() && ("alphaFade" == $JSCompiler_StaticMethods__handleDrillAnimations$self$$.$_animationOnDrill$ || "auto" == $JSCompiler_StaticMethods__handleDrillAnimations$self$$.$_animationOnDrill$)) {
    $JSCompiler_StaticMethods__handleDrillAnimations$self$$.$_animation$ = D.$DvtBlackBoxAnimationHandler$$.$getCombinedAnimation$($JSCompiler_StaticMethods__handleDrillAnimations$self$$.$getCtx$(), "alphaFade", $oldObjs$$3$$, $newObjs$$3$$, D.$JSCompiler_alias_NULL$$, 0.5)
  }
  $JSCompiler_StaticMethods__handleDrillAnimations$self$$.$_animation$ ? ($JSCompiler_StaticMethods__handleDrillAnimations$self$$.$_eventHandler$.$hideTooltip$(), $JSCompiler_StaticMethods__handleDrillAnimations$self$$.$_eventHandler$.$removeListeners$($JSCompiler_StaticMethods__handleDrillAnimations$self$$), $JSCompiler_StaticMethods__handleDrillAnimations$self$$.$_animation$.$setOnEnd$($JSCompiler_StaticMethods__handleDrillAnimations$self$$.$OnDrillAnimationEnd$, $JSCompiler_StaticMethods__handleDrillAnimations$self$$), 
  $JSCompiler_StaticMethods__handleDrillAnimations$self$$.$_animation$.play()) : (0,D.$JSCompiler_StaticMethods__cleanUpDrilledObjects$$)($JSCompiler_StaticMethods__handleDrillAnimations$self$$)
};
D.$DvtThematicMap$$.prototype.$__dispatchEvent$ = function $$DvtThematicMap$$$$$__dispatchEvent$$($event$$767$$) {
  var $JSCompiler_temp_const$$9298_drillType$$inline_8448_type$$250$$ = $event$$767$$.$getType$();
  if("selection" == $JSCompiler_temp_const$$9298_drillType$$inline_8448_type$$250$$) {
    if(this.$_clickedDataLayerId$) {
      this.$_selectedRowKeys$ = $event$$767$$.getSelection();
      for(var $JSCompiler_temp_const$$9298_drillType$$inline_8448_type$$250$$ = this.$_selectedAreas$, $JSCompiler_temp_const$$9297$$ = this.$_clickedLayerName$, $selectedObjs$$inline_11328$$ = this.$_selectedRowKeys$, $selectedAreas$$inline_11329$$ = [], $areaObjs$$inline_11330$$ = (0,D.$JSCompiler_StaticMethods_getLayer$$)(this, this.$_clickedLayerName$).$getDataLayer$(this.$_clickedDataLayerId$).$_areaObjs$, $i$$inline_11331$$ = 0;$i$$inline_11331$$ < $selectedObjs$$inline_11328$$.length;$i$$inline_11331$$++) {
        for(var $j$$inline_11332$$ = 0;$j$$inline_11332$$ < $areaObjs$$inline_11330$$.length;$j$$inline_11332$$++) {
          if($areaObjs$$inline_11330$$[$j$$inline_11332$$].getId() == $selectedObjs$$inline_11328$$[$i$$inline_11331$$]) {
            $selectedAreas$$inline_11329$$.push($areaObjs$$inline_11330$$[$j$$inline_11332$$].$getLocation$());
            break
          }
        }
      }
      $JSCompiler_temp_const$$9298_drillType$$inline_8448_type$$250$$[$JSCompiler_temp_const$$9297$$] = $selectedAreas$$inline_11329$$;
      (0,D.$JSCompiler_StaticMethods__updateDrillButton$$)(this, this.$_clickedLayerName$);
      (0,D.$JSCompiler_StaticMethods_addParam$$)($event$$767$$, "clientId", this.$_clickedDataLayerId$);
      this.$_clickedObject$ && !(this.$_clickedObject$ instanceof D.$DvtMarker$$) && (this.$_zoomToFitObject$ = this.$_clickedObject$)
    }else {
      (0,D.$JSCompiler_StaticMethods__updateDrillButton$$)(this, D.$JSCompiler_alias_NULL$$), this.$_zoomToFitObject$ = D.$JSCompiler_alias_NULL$$
    }
  }else {
    $JSCompiler_temp_const$$9298_drillType$$inline_8448_type$$250$$ == D.$DvtMapDrillEvent$$.$TYPE$ ? ((0,D.$JSCompiler_StaticMethods_addParam$$)($event$$767$$, "clientId", this.$_eventClientId$), this.$_drilledRowKeys$ = "multiple" == this.$_drillMode$ ? this.$_drilledRowKeys$.concat(this.$_selectedRowKeys$) : this.$_selectedRowKeys$, $JSCompiler_temp_const$$9298_drillType$$inline_8448_type$$250$$ = $event$$767$$.$_drillType$, $JSCompiler_temp_const$$9298_drillType$$inline_8448_type$$250$$ == D.$DvtMapDrillEvent$$.$DRILL_UP$ && 
    this.$drillUp$(), $JSCompiler_temp_const$$9298_drillType$$inline_8448_type$$250$$ == D.$DvtMapDrillEvent$$.$DRILL_DOWN$ ? this.$drillDown$() : $JSCompiler_temp_const$$9298_drillType$$inline_8448_type$$250$$ == D.$DvtMapDrillEvent$$.$RESET$ && this.$resetMap$(), $event$$767$$.$setDisclosed$(this.$_drilledRowKeys$)) : ("showPopup" == $JSCompiler_temp_const$$9298_drillType$$inline_8448_type$$250$$ || "hidePopup" == $JSCompiler_temp_const$$9298_drillType$$inline_8448_type$$250$$) && (0,D.$JSCompiler_StaticMethods_addParam$$)($event$$767$$, 
    "clientId", this.$_eventClientId$)
  }
  D.$DvtThematicMap$$.$superclass$.$__dispatchEvent$.call(this, $event$$767$$)
};
D.$JSCompiler_StaticMethods__updateDrillButton$$ = function $$JSCompiler_StaticMethods__updateDrillButton$$$($JSCompiler_StaticMethods__updateDrillButton$self$$, $layerName$$27$$) {
  if($JSCompiler_StaticMethods__updateDrillButton$self$$.$_controlPanel$ && $JSCompiler_StaticMethods__updateDrillButton$self$$.$_drillMode$ && "none" != $JSCompiler_StaticMethods__updateDrillButton$self$$.$_drillMode$) {
    var $childLayer$$2$$ = (0,D.$JSCompiler_StaticMethods_getDrillChildLayer$$)($JSCompiler_StaticMethods__updateDrillButton$self$$, $layerName$$27$$), $parentLayer$$5$$ = (0,D.$JSCompiler_StaticMethods_getDrillParentLayer$$)($JSCompiler_StaticMethods__updateDrillButton$self$$, $layerName$$27$$);
    $childLayer$$2$$ ? (0,D.$JSCompiler_StaticMethods_setEnabledDrillDownButton$$)($JSCompiler_StaticMethods__updateDrillButton$self$$.$_controlPanel$, D.$JSCompiler_alias_TRUE$$) : (0,D.$JSCompiler_StaticMethods_setEnabledDrillDownButton$$)($JSCompiler_StaticMethods__updateDrillButton$self$$.$_controlPanel$, D.$JSCompiler_alias_FALSE$$);
    $parentLayer$$5$$ ? (0,D.$JSCompiler_StaticMethods_setEnabledDrillUpButton$$)($JSCompiler_StaticMethods__updateDrillButton$self$$.$_controlPanel$, D.$JSCompiler_alias_TRUE$$) : (0,D.$JSCompiler_StaticMethods_setEnabledDrillUpButton$$)($JSCompiler_StaticMethods__updateDrillButton$self$$.$_controlPanel$, D.$JSCompiler_alias_FALSE$$)
  }
};
D.$DvtThematicMap$$.prototype.$destroy$ = function $$DvtThematicMap$$$$$destroy$$() {
  D.$DvtThematicMap$$.$superclass$.$destroy$.call(this);
  this.$_eventHandler$ && (this.$_eventHandler$.$destroy$(), this.$_eventHandler$ = D.$JSCompiler_alias_NULL$$)
};
D.$DvtThematicMap$$.prototype.destroy = D.$DvtThematicMap$$.prototype.$destroy$;
D.$DvtThematicMap$$.prototype.$OnAnimationEnd$ = function $$DvtThematicMap$$$$$OnAnimationEnd$$() {
  this.$_controlPanel$ && this.$_pzc$.$addChild$(this.$_controlPanel$);
  this.$_oldPzc$ && (this.removeChild(this.$_oldPzc$), this.$_oldPzc$ = D.$JSCompiler_alias_NULL$$);
  this.$_animation$ = D.$JSCompiler_alias_NULL$$;
  this.$_initialZooming$ && (0,D.$JSCompiler_StaticMethods__zoomData$$)(this);
  this.$Options$.highlightedCategories && 0 < this.$Options$.highlightedCategories.length && this.$highlight$(this.$Options$.highlightedCategories);
  this.$_bListenersRemoved$ && (this.$_eventHandler$.$addListeners$(this), this.$_bListenersRemoved$ = D.$JSCompiler_alias_FALSE$$)
};
D.$DvtThematicMap$$.prototype.$OnDrillAnimationEnd$ = function $$DvtThematicMap$$$$$OnDrillAnimationEnd$$() {
  (0,D.$JSCompiler_StaticMethods__cleanUpDrilledObjects$$)(this);
  this.$_animation$ = D.$JSCompiler_alias_NULL$$;
  this.$_eventHandler$.$addListeners$(this)
};
D.$JSCompiler_StaticMethods__cleanUpDrilledObjects$$ = function $$JSCompiler_StaticMethods__cleanUpDrilledObjects$$$($JSCompiler_StaticMethods__cleanUpDrilledObjects$self$$) {
  if(0 < $JSCompiler_StaticMethods__cleanUpDrilledObjects$self$$.$_drillAnimFadeOutObjs$.length) {
    for(var $i$$827$$ = 0;$i$$827$$ < $JSCompiler_StaticMethods__cleanUpDrilledObjects$self$$.$_drillAnimFadeOutObjs$.length;$i$$827$$++) {
      var $obj$$355$$ = $JSCompiler_StaticMethods__cleanUpDrilledObjects$self$$.$_drillAnimFadeOutObjs$[$i$$827$$];
      if($obj$$355$$) {
        if($obj$$355$$ instanceof D.$DvtMapLabel$$) {
          $obj$$355$$.reset()
        }else {
          if($obj$$355$$.$isDrilled$ && $obj$$355$$.$isDrilled$()) {
            $obj$$355$$.$setAlpha$(0)
          }else {
            var $parent$$88$$ = $obj$$355$$.getParent();
            $parent$$88$$ && $parent$$88$$.removeChild($obj$$355$$)
          }
        }
      }
    }
    $JSCompiler_StaticMethods__cleanUpDrilledObjects$self$$.$_drillAnimFadeOutObjs$ = []
  }
};
D.$DvtThematicMap$$.prototype.$_fireRolloverEvent$ = function $$DvtThematicMap$$$$$_fireRolloverEvent$$($type$$251$$, $category$$24$$) {
  var $rolloverEvent$$7$$ = new D.$DvtCategoryRolloverEvent$$($type$$251$$, $category$$24$$), $objects$$5$$ = [], $layerId_legendItems$$;
  for($layerId_legendItems$$ in this.$_areas$) {
    for(var $key$$127_wrapper$$ in this.$_areas$[$layerId_legendItems$$]) {
      $objects$$5$$.push(this.$_areas$[$layerId_legendItems$$][$key$$127_wrapper$$])
    }
  }
  for($layerId_legendItems$$ in this.$_markers$) {
    for($key$$127_wrapper$$ in this.$_markers$[$layerId_legendItems$$]) {
      $objects$$5$$.push(this.$_markers$[$layerId_legendItems$$][$key$$127_wrapper$$])
    }
  }
  $layerId_legendItems$$ = this.$_legend$.$_hideAttrsLookUp$;
  for(var $legendCategory$$ in $layerId_legendItems$$) {
    $key$$127_wrapper$$ = new D.$DvtThematicMapCategoryWrapper$$($layerId_legendItems$$[$legendCategory$$].$getContentShape$(), $legendCategory$$), $objects$$5$$.push($key$$127_wrapper$$)
  }
  (0,D.$DvtCategoryRolloverHandler$highlight$$)($rolloverEvent$$7$$.$_category$, $objects$$5$$, D.$JSCompiler_alias_TRUE$$)
};
D.$DvtThematicMap$$.prototype.$getShowPopupBehaviors$ = (0,D.$JSCompiler_get$$)("$_showPopupBehaviors$");
D.$DvtThematicMap$$.prototype.$setShowPopupBehaviors$ = (0,D.$JSCompiler_set$$)("$_showPopupBehaviors$");
D.$DvtThematicMap$$.prototype.$getAutomation$ = function $$DvtThematicMap$$$$$getAutomation$$() {
  this.$Automation$ || (this.$Automation$ = new D.$DvtThematicMapAutomation$$(this));
  return this.$Automation$
};
D.$DvtThematicMap$$.prototype.getAutomation = D.$DvtThematicMap$$.prototype.$getAutomation$;
D.$DvtThematicMap$$.prototype.$GetComponentDescription$ = function $$DvtThematicMap$$$$$GetComponentDescription$$() {
  return(0,D.$DvtBundle$getTranslatedString$$)("DvtUtilBundle", "THEMATIC_MAP")
};
D.$DvtThematicMap$$.prototype.$processLegendEvent$ = function $$DvtThematicMap$$$$$processLegendEvent$$($event$$770$$) {
  "dvtResizeEvent" == $event$$770$$.$getType$() && this.$_legend$ && this.$_legend$.$FireListener$($event$$770$$)
};
D.$DvtThematicMap$$.prototype.$highlight$ = function $$DvtThematicMap$$$$$highlight$$($categories$$28$$) {
  this.$Options$.highlightedCategories = D.$DvtJSONUtils$$.$clone$($categories$$28$$);
  (0,D.$DvtCategoryRolloverHandler$highlight$$)($categories$$28$$, (0,D.$JSCompiler_StaticMethods_getNavigableAreas$$)(this).concat((0,D.$JSCompiler_StaticMethods_getNavigableObjects$$)(this)), "any" == this.$Options$.highlightMatch)
};
D.$DvtThematicMap$$.prototype.highlight = D.$DvtThematicMap$$.prototype.$highlight$;
D.$DvtThematicMap$$.prototype.$processDefaultHoverEffect$ = function $$DvtThematicMap$$$$$processDefaultHoverEffect$$($id$$298$$, $hovered$$3$$) {
  var $dataItem$$43$$ = (0,D.$JSCompiler_StaticMethods__getDataItemById$$)(this, $id$$298$$);
  $dataItem$$43$$ && $dataItem$$43$$.$processDefaultHoverEffect$($hovered$$3$$)
};
D.$DvtThematicMap$$.prototype.processDefaultHoverEffect = D.$DvtThematicMap$$.prototype.$processDefaultHoverEffect$;
D.$DvtThematicMap$$.prototype.$processDefaultSelectionEffect$ = function $$DvtThematicMap$$$$$processDefaultSelectionEffect$$($id$$299$$, $selected$$45$$) {
  var $dataItem$$44$$ = (0,D.$JSCompiler_StaticMethods__getDataItemById$$)(this, $id$$299$$);
  $dataItem$$44$$ && $dataItem$$44$$.$processDefaultSelectionEffect$($selected$$45$$)
};
D.$DvtThematicMap$$.prototype.processDefaultSelectionEffect = D.$DvtThematicMap$$.prototype.$processDefaultSelectionEffect$;
D.$DvtThematicMap$$.prototype.$processDefaultFocusEffect$ = function $$DvtThematicMap$$$$$processDefaultFocusEffect$$($id$$300$$, $focused$$4$$) {
  var $dataItem$$45$$ = (0,D.$JSCompiler_StaticMethods__getDataItemById$$)(this, $id$$300$$);
  $dataItem$$45$$ && $dataItem$$45$$.$processDefaultFocusEffect$($focused$$4$$)
};
D.$DvtThematicMap$$.prototype.processDefaultFocusEffect = D.$DvtThematicMap$$.prototype.$processDefaultFocusEffect$;
D.$JSCompiler_StaticMethods__getDataItemById$$ = function $$JSCompiler_StaticMethods__getDataItemById$$$($JSCompiler_StaticMethods__getDataItemById$self$$, $id$$301$$) {
  for(var $i$$829$$ = 0;$i$$829$$ < $JSCompiler_StaticMethods__getDataItemById$self$$.$_layers$.length;$i$$829$$++) {
    var $dataLayers$$3$$ = $JSCompiler_StaticMethods__getDataItemById$self$$.$_layers$[$i$$829$$].$DataLayers$, $dlId$$;
    for($dlId$$ in $dataLayers$$3$$) {
      for(var $dataObjs$$2$$ = $dataLayers$$3$$[$dlId$$].$_dataObjs$, $i$$829$$ = 0;$i$$829$$ < $dataObjs$$2$$.length;$i$$829$$++) {
        if($dataObjs$$2$$[$i$$829$$].getId() === $id$$301$$) {
          return $dataObjs$$2$$[$i$$829$$]
        }
      }
    }
  }
  return D.$JSCompiler_alias_NULL$$
};
D.$DvtThematicMapDefaults$$ = function $$DvtThematicMapDefaults$$$() {
  this.Init({fusion:D.$DvtThematicMapDefaults$DEFAULT$$, alta:D.$DvtThematicMapDefaults$SKIN_ALTA$$})
};
D.$DvtObj$$.$createSubclass$(D.$DvtThematicMapDefaults$$, D.$DvtBaseComponentDefaults$$, "DvtThematicMapDefaults");
D.$DvtThematicMapDefaults$DEFAULT$$ = {animationDuration:500, animationOnDisplay:"none", animationOnDrill:"none", animationOnMapChange:"none", controlPanelBehavior:"hidden", drilling:"none", highlightMatch:"all", hoverBehavior:"none", initialZooming:"none", markerZoomBehavior:"fixed", panning:"none", tooltipDisplay:"auto", touchResponse:"auto", visualEffects:"none", zooming:"none", styleDefaults:{skin:"alta", areaStyle:"background-color:#B8CDEC;border-color:#FFFFFF;", hoverBehaviorDelay:200, dataAreaDefaults:{borderColor:"#FFFFFF", 
drilledInnerColor:"#FFFFFF", drilledOuterColor:"#000000", hoverColor:"#FFFFFF", opacity:1, selectedInnerColor:"#FFFFFF", selectedOuterColor:"#000000"}, dataMarkerDefaults:{borderColor:"#FFFFFF", borderStyle:"solid", borderWidth:0.5, color:"#000000", height:8, labelStyle:"font-family:Tahoma;font-size:13pt;color:#000000", opacity:0.4, scaleX:1, scaleY:1, shape:"circle", width:8}, labelStyle:"font-family:Tahoma;font-size:11pt;"}, legend:{position:"auto", rendered:D.$JSCompiler_alias_TRUE$$, layout:{gapRatio:1}}, 
layout:{gapRatio:D.$JSCompiler_alias_NULL$$, legendMaxSize:0.3, legendGap:10}, resources:{images:{}, translations:{}}};
D.$DvtThematicMapDefaults$SKIN_ALTA$$ = {styleDefaults:{areaStyle:"background-color:#DDDDDD;border-color:#FFFFFF;", dataAreaDefaults:{drilledOuterColor:"#0572CE"}, dataMarkerDefaults:{color:"rgb(51,51,51)", labelStyle:'font-family:"Helvetica Neue",Helvetica,Arial,sans-serif;font-size:12px;color:#333333', opacity:1}, labelStyle:'font-family:"Helvetica Neue",Helvetica,Arial,sans-serif;font-size:12px;'}};
D.$DvtThematicMapDefaults$DEFAULT_AREA_LAYER$$ = {animationOnLayerChange:"none", labelDisplay:"auto", labelType:"short"};
D.$DvtThematicMapDefaults$DEFAULT_DATA_LAYER$$ = {animationOnDataChange:"none", selectionMode:"none"};
D.$JSCompiler_StaticMethods__getCurrentDragSource$$ = function $$JSCompiler_StaticMethods__getCurrentDragSource$$$($JSCompiler_StaticMethods__getCurrentDragSource$self$$) {
  for(var $i$$840$$ = 0;$i$$840$$ < $JSCompiler_StaticMethods__getCurrentDragSource$self$$.$_layers$.length;$i$$840$$++) {
    var $dataLayers$$7$$ = $JSCompiler_StaticMethods__getCurrentDragSource$self$$.$_layers$[$i$$840$$].$DataLayers$, $id$$304$$;
    for($id$$304$$ in $dataLayers$$7$$) {
      var $dragSource$$3$$ = $dataLayers$$7$$[$id$$304$$].$_dragSource$;
      if($dragSource$$3$$ && $dragSource$$3$$.$_dragCandidate$) {
        return $dragSource$$3$$
      }
    }
  }
  return D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtThematicMap$$.prototype;
D.$JSCompiler_prototypeAlias$$.$isDragAvailable$ = function $$JSCompiler_prototypeAlias$$$$isDragAvailable$$($dragSource$$4_mouseX$$53$$, $mouseY$$53$$, $clientIds$$23$$) {
  this.$_dragAllowed$ = D.$JSCompiler_alias_FALSE$$;
  return($dragSource$$4_mouseX$$53$$ = (0,D.$JSCompiler_StaticMethods__getCurrentDragSource$$)(this)) ? $dragSource$$4_mouseX$$53$$.$isDragAvailable$($clientIds$$23$$) : D.$JSCompiler_alias_FALSE$$
};
D.$JSCompiler_prototypeAlias$$.$getDragTransferable$ = function $$JSCompiler_prototypeAlias$$$$getDragTransferable$$($mouseX$$54$$, $mouseY$$54$$) {
  var $dragSource$$5$$ = (0,D.$JSCompiler_StaticMethods__getCurrentDragSource$$)(this);
  return $dragSource$$5$$ ? $dragSource$$5$$.$getDragTransferable$($mouseX$$54$$, $mouseY$$54$$) : D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.$getDragOverFeedback$ = function $$JSCompiler_prototypeAlias$$$$getDragOverFeedback$$($mouseX$$55$$, $mouseY$$55$$) {
  var $dragSource$$6$$ = (0,D.$JSCompiler_StaticMethods__getCurrentDragSource$$)(this);
  return $dragSource$$6$$ ? $dragSource$$6$$.$getDragOverFeedback$($mouseX$$55$$, $mouseY$$55$$) : D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.$getDragContext$ = function $$JSCompiler_prototypeAlias$$$$getDragContext$$($mouseX$$56$$, $mouseY$$56$$) {
  var $dragSource$$7$$ = (0,D.$JSCompiler_StaticMethods__getCurrentDragSource$$)(this);
  return $dragSource$$7$$ ? $dragSource$$7$$.$getDragContext$($mouseX$$56$$, $mouseY$$56$$) : D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.$getDragOffset$ = function $$JSCompiler_prototypeAlias$$$$getDragOffset$$($mouseX$$57$$, $mouseY$$57$$) {
  var $dragSource$$8$$ = (0,D.$JSCompiler_StaticMethods__getCurrentDragSource$$)(this);
  return $dragSource$$8$$ ? $dragSource$$8$$.$getDragOffset$($mouseX$$57$$, $mouseY$$57$$) : D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.$getPointerOffset$ = function $$JSCompiler_prototypeAlias$$$$getPointerOffset$$($xOffset$$7$$, $yOffset$$10$$) {
  var $dragSource$$9$$ = (0,D.$JSCompiler_StaticMethods__getCurrentDragSource$$)(this);
  return $dragSource$$9$$ ? $dragSource$$9$$.$getPointerOffset$($xOffset$$7$$, $yOffset$$10$$) : D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.$initiateDrag$ = function $$JSCompiler_prototypeAlias$$$$initiateDrag$$() {
  var $dragSource$$10$$ = (0,D.$JSCompiler_StaticMethods__getCurrentDragSource$$)(this);
  $dragSource$$10$$ && $dragSource$$10$$.$initiateDrag$()
};
D.$JSCompiler_prototypeAlias$$.$dragDropEnd$ = function $$JSCompiler_prototypeAlias$$$$dragDropEnd$$() {
  var $dragSource$$11$$ = (0,D.$JSCompiler_StaticMethods__getCurrentDragSource$$)(this);
  $dragSource$$11$$ && $dragSource$$11$$.$dragDropEnd$();
  (0,D.$JSCompiler_StaticMethods_resetTouchTargets$$)(this.$_panZoomCanvas$)
};
D.$DvtThematicMap$$.prototype.$acceptDrag$ = function $$DvtThematicMap$$$$$acceptDrag$$($mouseX$$59$$, $mouseY$$59$$, $clientIds$$24$$) {
  var $JSCompiler_inline_result$$124_mouseX$$inline_8691_zoom$$16$$ = this.$_pzc$.$getZoom$();
  $mouseX$$59$$ = ($mouseX$$59$$ - (0,D.$JSCompiler_StaticMethods_getPanX$$)(this.$_pzc$)) / $JSCompiler_inline_result$$124_mouseX$$inline_8691_zoom$$16$$;
  $mouseY$$59$$ = ($mouseY$$59$$ - (0,D.$JSCompiler_StaticMethods_getPanY$$)(this.$_pzc$)) / $JSCompiler_inline_result$$124_mouseX$$inline_8691_zoom$$16$$;
  a: {
    for(var $JSCompiler_inline_result$$124_mouseX$$inline_8691_zoom$$16$$ = $mouseX$$59$$, $mouseY$$inline_8692$$ = $mouseY$$59$$, $i$$inline_8693$$ = 0;$i$$inline_8693$$ < this.$_layers$.length;$i$$inline_8693$$++) {
      if(this.$_layers$[$i$$inline_8693$$].$getDropTarget$) {
        var $dropTarget$$inline_8694$$ = this.$_layers$[$i$$inline_8693$$].$_dropTarget$;
        if($dropTarget$$inline_8694$$ && $dropTarget$$inline_8694$$.$getDropSite$($JSCompiler_inline_result$$124_mouseX$$inline_8691_zoom$$16$$, $mouseY$$inline_8692$$)) {
          $JSCompiler_inline_result$$124_mouseX$$inline_8691_zoom$$16$$ = $dropTarget$$inline_8694$$;
          break a
        }
      }
    }
    $JSCompiler_inline_result$$124_mouseX$$inline_8691_zoom$$16$$ = D.$JSCompiler_alias_NULL$$
  }
  return(this.$_dropTarget$ = $JSCompiler_inline_result$$124_mouseX$$inline_8691_zoom$$16$$) ? this.$_dropTarget$.$acceptDrag$($mouseX$$59$$, $mouseY$$59$$, $clientIds$$24$$) : D.$JSCompiler_alias_NULL$$
};
D.$DvtThematicMap$$.prototype.$getDropSite$ = function $$DvtThematicMap$$$$$getDropSite$$($mouseX$$60$$, $mouseY$$60$$) {
  var $zoom$$17$$ = this.$_pzc$.$getZoom$();
  $mouseX$$60$$ = ($mouseX$$60$$ - (0,D.$JSCompiler_StaticMethods_getPanX$$)(this.$_pzc$)) / $zoom$$17$$;
  $mouseY$$60$$ = ($mouseY$$60$$ - (0,D.$JSCompiler_StaticMethods_getPanY$$)(this.$_pzc$)) / $zoom$$17$$;
  return this.$_dropTarget$ ? this.$_dropTarget$.$getDropSite$($mouseX$$60$$, $mouseY$$60$$) : D.$JSCompiler_alias_NULL$$
};
D.$DvtThematicMapDropTarget$$ = function $$DvtThematicMapDropTarget$$$($areaLayer$$, $basemap$$3$$) {
  this.$_areaLayer$ = $areaLayer$$;
  this.$_basemap$ = $basemap$$3$$
};
D.$DvtObj$$.$createSubclass$(D.$DvtThematicMapDropTarget$$, D.$DvtDropTarget$$, "DvtThematicMapDropTarget");
D.$DvtThematicMapDropTarget$$.prototype.$acceptDrag$ = function $$DvtThematicMapDropTarget$$$$$acceptDrag$$($mouseX$$51_obj$$356$$, $mouseY$$51$$, $clientIds$$22$$) {
  if($mouseX$$51_obj$$356$$ = (0,D.$JSCompiler_StaticMethods___getObjectUnderPoint$$)(this.$_areaLayer$, $mouseX$$51_obj$$356$$, $mouseY$$51$$)) {
    $mouseX$$51_obj$$356$$ != this.$_dropSite$ && (this.$_areaLayer$.$__showDropSiteFeedback$($mouseX$$51_obj$$356$$), this.$_dropSite$ = $mouseX$$51_obj$$356$$)
  }else {
    return this.$_areaLayer$.$__showDropSiteFeedback$(D.$JSCompiler_alias_NULL$$), D.$JSCompiler_alias_NULL$$
  }
  return $clientIds$$22$$[0]
};
D.$DvtThematicMapDropTarget$$.prototype.$getDropSite$ = function $$DvtThematicMapDropTarget$$$$$getDropSite$$($mouseX$$52$$, $mouseY$$52$$) {
  var $obj$$357$$ = (0,D.$JSCompiler_StaticMethods___getObjectUnderPoint$$)(this.$_areaLayer$, $mouseX$$52$$, $mouseY$$52$$);
  if($obj$$357$$) {
    var $projPoint$$ = D.$DvtThematicMapProjections$$.$inverseProject$($mouseX$$52$$, $mouseY$$52$$, this.$_basemap$);
    return{$regionId$:$obj$$357$$.$_areaName$, $localX$:$projPoint$$.x, $localY$:$projPoint$$.y}
  }
  return D.$JSCompiler_alias_NULL$$
};
D.$DvtThematicMapAutomation$$ = (0,D.$JSCompiler_set$$)("$_tmap$");
(0,D.$goog$exportPath_$$)("DvtThematicMapAutomation", D.$DvtThematicMapAutomation$$);
D.$DvtObj$$.$createSubclass$(D.$DvtThematicMapAutomation$$, D.$DvtAutomation$$, "DvtThematicMapAutomation");
D.$DvtThematicMapAutomation$$.prototype.$GetSubIdForDomElement$ = function $$DvtThematicMapAutomation$$$$$GetSubIdForDomElement$$($displayable$$96_logicalObj$$18$$) {
  $displayable$$96_logicalObj$$18$$ = (0,D.$JSCompiler_StaticMethods_GetLogicalObject$$)(this.$_tmap$.$__getEventManager$(), $displayable$$96_logicalObj$$18$$);
  var $JSCompiler_temp$$459_id$$inline_8480$$;
  if($displayable$$96_logicalObj$$18$$ && ($displayable$$96_logicalObj$$18$$ instanceof D.$DvtMapAreaPeer$$ || $displayable$$96_logicalObj$$18$$ instanceof D.$DvtMapObjPeer$$)) {
    a: {
      for(var $displayable$$inline_8476$$ = $displayable$$96_logicalObj$$18$$.$getDisplayable$(), $layers$$inline_8477$$ = this.$_tmap$.$_layers$, $i$$inline_8478$$ = 0;$i$$inline_8478$$ < $layers$$inline_8477$$.length;$i$$inline_8478$$++) {
        var $dataLayers$$inline_8479$$ = $layers$$inline_8477$$[$i$$inline_8478$$].$DataLayers$;
        for($JSCompiler_temp$$459_id$$inline_8480$$ in $dataLayers$$inline_8479$$) {
          if($displayable$$inline_8476$$ instanceof D.$DvtPath$$) {
            for(var $areas$$inline_8481_markers$$inline_8483$$ = $dataLayers$$inline_8479$$[$JSCompiler_temp$$459_id$$inline_8480$$].$_areaObjs$, $k$$inline_8482$$ = 0;$k$$inline_8482$$ < $areas$$inline_8481_markers$$inline_8483$$.length;$k$$inline_8482$$++) {
              if($areas$$inline_8481_markers$$inline_8483$$[$k$$inline_8482$$] === $displayable$$96_logicalObj$$18$$) {
                $JSCompiler_temp$$459_id$$inline_8480$$ = (0,D.$JSCompiler_StaticMethods__getDataLayerId$$)($JSCompiler_temp$$459_id$$inline_8480$$) + ":area[" + $k$$inline_8482$$ + "]";
                break a
              }
            }
          }else {
            if($displayable$$inline_8476$$ instanceof D.$DvtSimpleMarker$$ || $displayable$$inline_8476$$ instanceof D.$DvtImageMarker$$) {
              $areas$$inline_8481_markers$$inline_8483$$ = $dataLayers$$inline_8479$$[$JSCompiler_temp$$459_id$$inline_8480$$].$_dataObjs$;
              for($k$$inline_8482$$ = 0;$k$$inline_8482$$ < $areas$$inline_8481_markers$$inline_8483$$.length;$k$$inline_8482$$++) {
                if($areas$$inline_8481_markers$$inline_8483$$[$k$$inline_8482$$] === $displayable$$96_logicalObj$$18$$) {
                  $JSCompiler_temp$$459_id$$inline_8480$$ = (0,D.$JSCompiler_StaticMethods__getDataLayerId$$)($JSCompiler_temp$$459_id$$inline_8480$$) + ":marker[" + $k$$inline_8482$$ + "]";
                  break a
                }
              }
            }
          }
        }
      }
      $JSCompiler_temp$$459_id$$inline_8480$$ = D.$JSCompiler_alias_NULL$$
    }
  }else {
    $JSCompiler_temp$$459_id$$inline_8480$$ = D.$JSCompiler_alias_NULL$$
  }
  return $JSCompiler_temp$$459_id$$inline_8480$$
};
D.$DvtThematicMapAutomation$$.prototype.$getDomElementForSubId$ = function $$DvtThematicMapAutomation$$$$$getDomElementForSubId$$($JSCompiler_temp$$183_dataObj$$inline_8489_subId$$26$$) {
  if("tooltip" == $JSCompiler_temp$$183_dataObj$$inline_8489_subId$$26$$) {
    return(0,D.$JSCompiler_StaticMethods_GetTooltipElement$$)(this.$_tmap$)
  }
  var $colonIdx$$1$$ = $JSCompiler_temp$$183_dataObj$$inline_8489_subId$$26$$.indexOf(":"), $parenIdx$$2$$ = $JSCompiler_temp$$183_dataObj$$inline_8489_subId$$26$$.indexOf("[");
  $JSCompiler_temp$$183_dataObj$$inline_8489_subId$$26$$ = 0 < $colonIdx$$1$$ && 0 < $parenIdx$$2$$ ? ($JSCompiler_temp$$183_dataObj$$inline_8489_subId$$26$$ = (0,D.$JSCompiler_StaticMethods__getDataObject$$)(this, $JSCompiler_temp$$183_dataObj$$inline_8489_subId$$26$$.substring(0, $colonIdx$$1$$), $JSCompiler_temp$$183_dataObj$$inline_8489_subId$$26$$.substring($colonIdx$$1$$ + 1, $parenIdx$$2$$), (0,window.parseInt)($JSCompiler_temp$$183_dataObj$$inline_8489_subId$$26$$.substring($parenIdx$$2$$ + 
  1, $JSCompiler_temp$$183_dataObj$$inline_8489_subId$$26$$.length - 1)))) ? $JSCompiler_temp$$183_dataObj$$inline_8489_subId$$26$$.$getDisplayable$().$getElem$() : D.$JSCompiler_alias_NULL$$ : D.$JSCompiler_alias_NULL$$;
  return $JSCompiler_temp$$183_dataObj$$inline_8489_subId$$26$$
};
D.$DvtThematicMapAutomation$$.prototype.getDomElementForSubId = D.$DvtThematicMapAutomation$$.prototype.$getDomElementForSubId$;
D.$DvtThematicMapAutomation$$.prototype.getData = function $$DvtThematicMapAutomation$$$$getData$($dataLayerId$$1_dataObj$$2$$, $data$$104_dataObjType$$1$$, $index$$249_label$$100$$) {
  return($dataLayerId$$1_dataObj$$2$$ = (0,D.$JSCompiler_StaticMethods__getDataObject$$)(this, $dataLayerId$$1_dataObj$$2$$, $data$$104_dataObjType$$1$$, $index$$249_label$$100$$)) ? ($data$$104_dataObjType$$1$$ = {}, $data$$104_dataObjType$$1$$.color = $dataLayerId$$1_dataObj$$2$$.$getDatatipColor$(), $data$$104_dataObjType$$1$$.tooltip = $dataLayerId$$1_dataObj$$2$$.$getShortDesc$(), $index$$249_label$$100$$ = $dataLayerId$$1_dataObj$$2$$.$getLabel$(), $data$$104_dataObjType$$1$$.label = $index$$249_label$$100$$ ? 
  $index$$249_label$$100$$.$getTextString$() : D.$JSCompiler_alias_NULL$$, $data$$104_dataObjType$$1$$.selected = $dataLayerId$$1_dataObj$$2$$.$isSelected$(), $data$$104_dataObjType$$1$$) : D.$JSCompiler_alias_NULL$$
};
D.$DvtThematicMapAutomation$$.prototype.getData = D.$DvtThematicMapAutomation$$.prototype.getData;
D.$JSCompiler_StaticMethods__getDataObject$$ = function $$JSCompiler_StaticMethods__getDataObject$$$($JSCompiler_StaticMethods__getDataObject$self_layers$$1$$, $dataLayerId$$3$$, $dataObjType$$3$$, $index$$251$$) {
  $JSCompiler_StaticMethods__getDataObject$self_layers$$1$$ = $JSCompiler_StaticMethods__getDataObject$self_layers$$1$$.$_tmap$.$_layers$;
  for(var $i$$831$$ = 0;$i$$831$$ < $JSCompiler_StaticMethods__getDataObject$self_layers$$1$$.length;$i$$831$$++) {
    var $dataLayers$$5$$ = $JSCompiler_StaticMethods__getDataObject$self_layers$$1$$[$i$$831$$].$DataLayers$, $id$$303$$;
    for($id$$303$$ in $dataLayers$$5$$) {
      if((0,D.$JSCompiler_StaticMethods__getDataLayerId$$)($id$$303$$) == $dataLayerId$$3$$) {
        if("area" == $dataObjType$$3$$) {
          return $dataLayers$$5$$[$id$$303$$].$_dataAreaCollection$[$index$$251$$]
        }
        if("marker" == $dataObjType$$3$$) {
          return $dataLayers$$5$$[$id$$303$$].$_dataMarkerCollection$[$index$$251$$]
        }
      }
    }
  }
  return D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_StaticMethods__getDataLayerId$$ = function $$JSCompiler_StaticMethods__getDataLayerId$$$($dataLayerId$$4$$) {
  var $colonIdx$$2$$ = $dataLayerId$$4$$.lastIndexOf(":");
  return 0 < $colonIdx$$2$$ ? $dataLayerId$$4$$.substring($colonIdx$$2$$ + 1) : $dataLayerId$$4$$
};
D.$DvtDrillablePath$$ = function $$DvtDrillablePath$$$($context$$604$$, $bSupportsVectorEffects$$) {
  this.Init($context$$604$$, $bSupportsVectorEffects$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtDrillablePath$$, D.$DvtPath$$, "DvtDrillablePath");
D.$JSCompiler_prototypeAlias$$ = D.$DvtDrillablePath$$.prototype;
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($context$$605$$, $bSupportsVectorEffects$$1$$) {
  D.$DvtDrillablePath$$.$superclass$.Init.call(this, $context$$605$$);
  this.$_disclosedOuterShape$ = this.$_disclosedInnerShape$ = this.$_disclosedOuterStroke$ = this.$_disclosedInnerStroke$ = D.$JSCompiler_alias_NULL$$;
  this.$_isDrilled$ = D.$JSCompiler_alias_FALSE$$;
  this.Zoom = 1;
  this.$_bSupportsVectorEffects$ = $bSupportsVectorEffects$$1$$
};
D.$JSCompiler_prototypeAlias$$.$isDrilled$ = (0,D.$JSCompiler_get$$)("$_isDrilled$");
D.$JSCompiler_prototypeAlias$$.$setDrilled$ = function $$JSCompiler_prototypeAlias$$$$setDrilled$$($drilled_parent$$84$$) {
  this.$_isDrilled$ != $drilled_parent$$84$$ && (this.$_isDrilled$ = $drilled_parent$$84$$, this.$isDrilled$() ? (this.$_disclosedInnerShape$ = this.$copyShape$(), this.$_disclosedInnerShape$.$setFill$(D.$JSCompiler_alias_NULL$$), this.$_disclosedInnerShape$.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$), this.$_disclosedOuterShape$ = this.$copyShape$(), this.$_disclosedOuterShape$.$setFill$(D.$JSCompiler_alias_NULL$$), this.$_disclosedOuterShape$.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$), $drilled_parent$$84$$ = 
  this.getParent(), $drilled_parent$$84$$.$addChild$(this.$_disclosedOuterShape$), $drilled_parent$$84$$.$addChild$(this.$_disclosedInnerShape$), this.$_disclosedInnerShape$.$setStroke$((0,D.$JSCompiler_StaticMethods__adjustStrokeZoomWidth$$)(this, this.$_disclosedInnerStroke$, 2)), this.$_disclosedOuterShape$.$setStroke$((0,D.$JSCompiler_StaticMethods__adjustStrokeZoomWidth$$)(this, this.$_disclosedOuterStroke$, 4)), this.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$), this.$IsShowingHoverEffect$ = 
  D.$JSCompiler_alias_FALSE$$) : (this.$IsShowingHoverEffect$ && (this.$UpdateSelectionEffect$(), this.$InnerShape$.$setStroke$((0,D.$JSCompiler_StaticMethods__adjustStrokeZoomWidth$$)(this, this.$HoverInnerStroke$, 1), 2)), this.$_disclosedOuterShape$.getParent().removeChild(this.$_disclosedOuterShape$), this.$_disclosedInnerShape$.getParent().removeChild(this.$_disclosedInnerShape$), this.$setMouseEnabled$(D.$JSCompiler_alias_TRUE$$), this.$setAlpha$(1)))
};
D.$JSCompiler_prototypeAlias$$.$setSelected$ = function $$JSCompiler_prototypeAlias$$$$setSelected$$($selected$$41$$) {
  this.$IsSelected$ != $selected$$41$$ && ($selected$$41$$ && (this.$IsShowingHoverEffect$ ? (this.$CreateSelectedHoverStrokes$(), this.$SelectedHoverInnerStroke$ = (0,D.$JSCompiler_StaticMethods__adjustStrokeZoomWidth$$)(this, this.$SelectedHoverInnerStroke$, 2), this.$SelectedHoverOuterStroke$ = (0,D.$JSCompiler_StaticMethods__adjustStrokeZoomWidth$$)(this, this.$SelectedHoverOuterStroke$, 6)) : (this.$SelectedInnerStroke$ = (0,D.$JSCompiler_StaticMethods__adjustStrokeZoomWidth$$)(this, this.$SelectedInnerStroke$, 
  1), this.$SelectedOuterStroke$ = (0,D.$JSCompiler_StaticMethods__adjustStrokeZoomWidth$$)(this, this.$SelectedOuterStroke$, 4))), D.$DvtDrillablePath$$.$superclass$.$setSelected$.call(this, $selected$$41$$))
};
D.$JSCompiler_prototypeAlias$$.$showHoverEffect$ = function $$JSCompiler_prototypeAlias$$$$showHoverEffect$$() {
  this.$isSelected$() ? (this.$CreateSelectedHoverStrokes$(), this.$SelectedHoverInnerStroke$ = (0,D.$JSCompiler_StaticMethods__adjustStrokeZoomWidth$$)(this, this.$SelectedHoverInnerStroke$, 2), this.$SelectedHoverOuterStroke$ = (0,D.$JSCompiler_StaticMethods__adjustStrokeZoomWidth$$)(this, this.$SelectedHoverOuterStroke$, 6)) : this.$HoverInnerStroke$ = (0,D.$JSCompiler_StaticMethods__adjustStrokeZoomWidth$$)(this, this.$HoverInnerStroke$, 2);
  D.$DvtDrillablePath$$.$superclass$.$showHoverEffect$.call(this)
};
D.$JSCompiler_prototypeAlias$$.$CreateSelectedHoverStrokes$ = function $$JSCompiler_prototypeAlias$$$$CreateSelectedHoverStrokes$$() {
  this.$SelectedHoverInnerStroke$ || (this.$SelectedHoverInnerStroke$ = this.$HoverInnerStroke$.$clone$(), this.$SelectedHoverInnerStroke$.$setWidth$(2), this.$_bSupportsVectorEffects$ && (this.$SelectedHoverInnerStroke$.$_bFixedWidth$ = D.$JSCompiler_alias_TRUE$$));
  this.$SelectedHoverOuterStroke$ || (this.$SelectedHoverOuterStroke$ = this.$SelectedOuterStroke$.$clone$(), this.$SelectedHoverOuterStroke$.$setWidth$(6), this.$_bSupportsVectorEffects$ && (this.$SelectedHoverOuterStroke$.$_bFixedWidth$ = D.$JSCompiler_alias_TRUE$$))
};
D.$JSCompiler_prototypeAlias$$.$hideHoverEffect$ = function $$JSCompiler_prototypeAlias$$$$hideHoverEffect$$() {
  this.$isSelected$() && (this.$SelectedInnerStroke$ = (0,D.$JSCompiler_StaticMethods__adjustStrokeZoomWidth$$)(this, this.$SelectedInnerStroke$, 1), this.$SelectedOuterStroke$ = (0,D.$JSCompiler_StaticMethods__adjustStrokeZoomWidth$$)(this, this.$SelectedOuterStroke$, 4));
  D.$DvtDrillablePath$$.$superclass$.$hideHoverEffect$.call(this)
};
D.$JSCompiler_prototypeAlias$$.$setHoverStroke$ = function $$JSCompiler_prototypeAlias$$$$setHoverStroke$$($innerStroke$$3$$, $outerStroke$$3$$) {
  D.$DvtDrillablePath$$.$superclass$.$setHoverStroke$.call(this, $innerStroke$$3$$, $outerStroke$$3$$);
  this.$_bSupportsVectorEffects$ && (this.$HoverInnerStroke$ && (this.$HoverInnerStroke$.$_bFixedWidth$ = D.$JSCompiler_alias_TRUE$$), this.$HoverOuterStroke$ && (this.$HoverOuterStroke$.$_bFixedWidth$ = D.$JSCompiler_alias_TRUE$$));
  return this
};
D.$JSCompiler_prototypeAlias$$.$setSelectedStroke$ = function $$JSCompiler_prototypeAlias$$$$setSelectedStroke$$($innerStroke$$4$$, $outerStroke$$4$$) {
  D.$DvtDrillablePath$$.$superclass$.$setSelectedStroke$.call(this, $innerStroke$$4$$, $outerStroke$$4$$);
  this.$_bSupportsVectorEffects$ && (this.$SelectedInnerStroke$ && (this.$SelectedInnerStroke$.$_bFixedWidth$ = D.$JSCompiler_alias_TRUE$$), this.$SelectedOuterStroke$ && (this.$SelectedOuterStroke$.$_bFixedWidth$ = D.$JSCompiler_alias_TRUE$$));
  return this
};
D.$JSCompiler_prototypeAlias$$.$setSelectedHoverStroke$ = function $$JSCompiler_prototypeAlias$$$$setSelectedHoverStroke$$($innerStroke$$5$$, $outerStroke$$5$$) {
  D.$DvtDrillablePath$$.$superclass$.$setSelectedHoverStroke$.call(this, $innerStroke$$5$$, $outerStroke$$5$$);
  this.$_bSupportsVectorEffects$ && (this.$SelectedHoverInnerStroke$ && (this.$SelectedHoverInnerStroke$.$_bFixedWidth$ = D.$JSCompiler_alias_TRUE$$), this.$SelectedHoverOuterStroke$ && (this.$SelectedHoverOuterStroke$.$_bFixedWidth$ = D.$JSCompiler_alias_TRUE$$));
  return this
};
D.$JSCompiler_StaticMethods__updateStrokeZoomWidth$$ = function $$JSCompiler_StaticMethods__updateStrokeZoomWidth$$$($JSCompiler_StaticMethods__updateStrokeZoomWidth$self$$, $shape$$89$$, $fixedWidth$$) {
  if(!$JSCompiler_StaticMethods__updateStrokeZoomWidth$self$$.$_bSupportsVectorEffects$) {
    var $stroke$$107$$ = $shape$$89$$.$getStroke$();
    $stroke$$107$$ && ($stroke$$107$$ = $stroke$$107$$.$clone$(), $stroke$$107$$.$setWidth$($fixedWidth$$ / $JSCompiler_StaticMethods__updateStrokeZoomWidth$self$$.Zoom), $shape$$89$$.$setStroke$($stroke$$107$$))
  }
};
D.$JSCompiler_StaticMethods__adjustStrokeZoomWidth$$ = function $$JSCompiler_StaticMethods__adjustStrokeZoomWidth$$$($JSCompiler_StaticMethods__adjustStrokeZoomWidth$self$$, $adjustedStroke_stroke$$108$$, $fixedWidth$$1$$) {
  $JSCompiler_StaticMethods__adjustStrokeZoomWidth$self$$.$_bSupportsVectorEffects$ || ($adjustedStroke_stroke$$108$$ = $adjustedStroke_stroke$$108$$.$clone$(), $adjustedStroke_stroke$$108$$.$setWidth$($fixedWidth$$1$$ / $JSCompiler_StaticMethods__adjustStrokeZoomWidth$self$$.Zoom));
  return $adjustedStroke_stroke$$108$$
};
D.$JSCompiler_StaticMethods_handleZoomEvent$$ = function $$JSCompiler_StaticMethods_handleZoomEvent$$$($JSCompiler_StaticMethods_handleZoomEvent$self$$, $pzcMatrix$$) {
  $JSCompiler_StaticMethods_handleZoomEvent$self$$.Zoom = $pzcMatrix$$.$_a$;
  $JSCompiler_StaticMethods_handleZoomEvent$self$$.$isDrilled$() ? ((0,D.$JSCompiler_StaticMethods__updateStrokeZoomWidth$$)($JSCompiler_StaticMethods_handleZoomEvent$self$$, $JSCompiler_StaticMethods_handleZoomEvent$self$$.$_disclosedInnerShape$, 2), (0,D.$JSCompiler_StaticMethods__updateStrokeZoomWidth$$)($JSCompiler_StaticMethods_handleZoomEvent$self$$, $JSCompiler_StaticMethods_handleZoomEvent$self$$.$_disclosedOuterShape$, 4)) : $JSCompiler_StaticMethods_handleZoomEvent$self$$.$isSelected$() ? 
  $JSCompiler_StaticMethods_handleZoomEvent$self$$.$IsShowingHoverEffect$ ? ((0,D.$JSCompiler_StaticMethods__updateStrokeZoomWidth$$)($JSCompiler_StaticMethods_handleZoomEvent$self$$, $JSCompiler_StaticMethods_handleZoomEvent$self$$.$InnerShape$, 2), (0,D.$JSCompiler_StaticMethods__updateStrokeZoomWidth$$)($JSCompiler_StaticMethods_handleZoomEvent$self$$, $JSCompiler_StaticMethods_handleZoomEvent$self$$, 6)) : ((0,D.$JSCompiler_StaticMethods__updateStrokeZoomWidth$$)($JSCompiler_StaticMethods_handleZoomEvent$self$$, 
  $JSCompiler_StaticMethods_handleZoomEvent$self$$.$InnerShape$, 1), (0,D.$JSCompiler_StaticMethods__updateStrokeZoomWidth$$)($JSCompiler_StaticMethods_handleZoomEvent$self$$, $JSCompiler_StaticMethods_handleZoomEvent$self$$, 4)) : $JSCompiler_StaticMethods_handleZoomEvent$self$$.$IsShowingHoverEffect$ ? (0,D.$JSCompiler_StaticMethods__updateStrokeZoomWidth$$)($JSCompiler_StaticMethods_handleZoomEvent$self$$, $JSCompiler_StaticMethods_handleZoomEvent$self$$.$InnerShape$, 2) : (0,D.$JSCompiler_StaticMethods__updateStrokeZoomWidth$$)($JSCompiler_StaticMethods_handleZoomEvent$self$$, 
  $JSCompiler_StaticMethods_handleZoomEvent$self$$, 1)
};
D.$DvtCustomDataItem$$ = function $$DvtCustomDataItem$$$($context$$602$$, $dataItem$$41$$, $styles$$16$$) {
  this.Init($context$$602$$, $dataItem$$41$$, $styles$$16$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtCustomDataItem$$, D.$DvtContainer$$, "DvtCustomDataItem");
D.$JSCompiler_prototypeAlias$$ = D.$DvtCustomDataItem$$.prototype;
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($context$$603_his$$3$$, $dataItem$$42_dim$$85_hos$$3$$, $shos$$3_styles$$17$$) {
  D.$DvtCustomDataItem$$.$superclass$.Init.call(this, $context$$603_his$$3$$);
  this.$_dataItem$ = $dataItem$$42_dim$$85_hos$$3$$;
  $dataItem$$42_dim$$85_hos$$3$$ instanceof D.$DvtBaseComponent$$ ? (this.$_width$ = $dataItem$$42_dim$$85_hos$$3$$.getWidth(), this.$_height$ = $dataItem$$42_dim$$85_hos$$3$$.getHeight(), this.$addChild$($dataItem$$42_dim$$85_hos$$3$$)) : (this.$getElem$().appendChild($dataItem$$42_dim$$85_hos$$3$$), $dataItem$$42_dim$$85_hos$$3$$ = (0,D.$DvtDisplayableUtils$getDimensionsForced$$)($context$$603_his$$3$$, this), this.$_width$ = $dataItem$$42_dim$$85_hos$$3$$.$w$, this.$_height$ = $dataItem$$42_dim$$85_hos$$3$$.$h$);
  this.$_boundingRect$ = new D.$DvtRect$$($context$$603_his$$3$$, -5, -5, this.$_width$ + 10, this.$_height$ + 10);
  (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)(this.$_boundingRect$);
  $context$$603_his$$3$$ = new D.$DvtSolidStroke$$($shos$$3_styles$$17$$.selectedInnerColor, 1, 2);
  $dataItem$$42_dim$$85_hos$$3$$ = new D.$DvtSolidStroke$$("rgb(235, 236, 237)", 1, 4);
  var $sis$$4$$ = new D.$DvtSolidStroke$$($shos$$3_styles$$17$$.selectedInnerColor, 1, 2), $sos$$3$$ = new D.$DvtSolidStroke$$($shos$$3_styles$$17$$.selectedOuterColor, 1, 4), $shis$$3$$ = new D.$DvtSolidStroke$$($shos$$3_styles$$17$$.selectedInnerColor, 1, 2);
  $shos$$3_styles$$17$$ = new D.$DvtSolidStroke$$($shos$$3_styles$$17$$.selectedOuterColor, 1, 6);
  this.$_boundingRect$.$setHoverStroke$($context$$603_his$$3$$, $dataItem$$42_dim$$85_hos$$3$$).$setSelectedStroke$($sis$$4$$, $sos$$3$$).$setSelectedHoverStroke$($shis$$3$$, $shos$$3_styles$$17$$);
  this.$addChildAt$(this.$_boundingRect$, 0)
};
D.$JSCompiler_prototypeAlias$$.$setAriaProperty$ = function $$JSCompiler_prototypeAlias$$$$setAriaProperty$$($property$$8$$, $value$$189$$) {
  (0,D.$DvtAgent$isTouchDevice$$)() ? this.$_boundingRect$.$setAriaProperty$($property$$8$$, $value$$189$$) : D.$DvtCustomDataItem$$.$superclass$.$setAriaProperty$.call(this, $property$$8$$, $value$$189$$)
};
D.$JSCompiler_prototypeAlias$$.$setAriaRole$ = function $$JSCompiler_prototypeAlias$$$$setAriaRole$$($role$$3$$) {
  (0,D.$DvtAgent$isTouchDevice$$)() ? this.$_boundingRect$.$setAriaRole$($role$$3$$) : D.$DvtCustomDataItem$$.$superclass$.$setAriaRole$.call(this, $role$$3$$)
};
D.$JSCompiler_prototypeAlias$$.getWidth = (0,D.$JSCompiler_get$$)("$_width$");
D.$JSCompiler_prototypeAlias$$.getHeight = (0,D.$JSCompiler_get$$)("$_height$");
D.$JSCompiler_prototypeAlias$$.$setSelectable$ = function $$JSCompiler_prototypeAlias$$$$setSelectable$$($bSelectable$$2$$) {
  this.$_boundingRect$.$setSelectable$($bSelectable$$2$$)
};
D.$JSCompiler_prototypeAlias$$.$isSelectable$ = function $$JSCompiler_prototypeAlias$$$$isSelectable$$() {
  return this.$_boundingRect$.$isSelectable$()
};
D.$JSCompiler_prototypeAlias$$.$isSelected$ = function $$JSCompiler_prototypeAlias$$$$isSelected$$() {
  return this.$_boundingRect$.$isSelected$()
};
D.$JSCompiler_prototypeAlias$$.$setSelected$ = function $$JSCompiler_prototypeAlias$$$$setSelected$$($selected$$40$$) {
  this.$_boundingRect$.$setSelected$($selected$$40$$)
};
D.$JSCompiler_prototypeAlias$$.$showHoverEffect$ = function $$JSCompiler_prototypeAlias$$$$showHoverEffect$$() {
  this.$_boundingRect$.$showHoverEffect$()
};
D.$JSCompiler_prototypeAlias$$.$hideHoverEffect$ = function $$JSCompiler_prototypeAlias$$$$hideHoverEffect$$() {
  this.$_boundingRect$.$hideHoverEffect$()
};
D.$JSCompiler_prototypeAlias$$.$getRootElement$ = (0,D.$JSCompiler_get$$)("$_dataItem$");
D.$JSCompiler_prototypeAlias$$.$fireKeyboardListener$ = function $$JSCompiler_prototypeAlias$$$$fireKeyboardListener$$($event$$756$$) {
  this.$_dataItem$ instanceof D.$DvtBaseComponent$$ && this.$_dataItem$.$fireKeyboardListener$($event$$756$$)
};
this ? this.DvtBaseMapManager ? D.$DvtBaseMapManager$$ = this.DvtBaseMapManager : (this.DvtBaseMapManager = D.$DvtBaseMapManager$$ = {}, D.$DvtBaseMapManager$$._UNPROCESSED_MAPS = [[], [], []], D.$DvtBaseMapManager$$._UNPROCESSED_PARENT_UPDATES = [[]]) : window.DvtBaseMapManager ? D.$DvtBaseMapManager$$ = window.DvtBaseMapManager : (D.$DvtBaseMapManager$$ = {}, window.DvtBaseMapManager = D.$DvtBaseMapManager$$, D.$DvtBaseMapManager$$._UNPROCESSED_MAPS = [[], [], []], D.$DvtBaseMapManager$$._UNPROCESSED_PARENT_UPDATES = 
[[]]);
D.$DvtObj$$.$createSubclass$(D.$DvtBaseMapManager$$, D.$DvtObj$$, "DvtBaseMapManager");
D.$DvtBaseMapManager$$.$TYPE_LABELS$ = 0;
D.$DvtBaseMapManager$$.$TYPE_PATH$ = 1;
D.$DvtBaseMapManager$$.$TYPE_PARENTREGION_CHILDREN$ = 2;
D.$DvtBaseMapManager$$.$TYPE_LABELINFO$ = 3;
D.$DvtBaseMapManager$$.$TYPE_DIM$ = 4;
D.$DvtBaseMapManager$$.$_INDEX$ = "__index";
D.$DvtBaseMapManager$$.$_GLOBAL_MAPS$ = {};
D.$DvtBaseMapManager$$.$getBaseMapDim$ = function $$DvtBaseMapManager$$$$getBaseMapDim$$($baseMapName$$, $layerName$$) {
  D.$DvtBaseMapManager$$.$_processUnprocessedMaps$();
  var $dimAr_layer$$ = D.$DvtBaseMapManager$$.$_GLOBAL_MAPS$[$baseMapName$$][$layerName$$];
  return $dimAr_layer$$ && ($dimAr_layer$$ = $dimAr_layer$$[D.$DvtBaseMapManager$$.$TYPE_DIM$]) ? new D.$DvtRectangle$$($dimAr_layer$$[0], $dimAr_layer$$[1], $dimAr_layer$$[2], $dimAr_layer$$[3]) : D.$JSCompiler_alias_NULL$$
};
D.$DvtBaseMapManager$$.$getAreaLabelInfo$ = function $$DvtBaseMapManager$$$$getAreaLabelInfo$$($baseMapName$$1$$, $layerName$$1$$) {
  D.$DvtBaseMapManager$$.$_processUnprocessedMaps$();
  var $layer$$1$$ = D.$DvtBaseMapManager$$.$_GLOBAL_MAPS$[$baseMapName$$1$$][$layerName$$1$$];
  return $layer$$1$$ ? $layer$$1$$[D.$DvtBaseMapManager$$.$TYPE_LABELINFO$] : D.$JSCompiler_alias_NULL$$
};
D.$DvtBaseMapManager$$.$getAreaNames$ = function $$DvtBaseMapManager$$$$getAreaNames$$($baseMapName$$2$$, $layerName$$2$$) {
  D.$DvtBaseMapManager$$.$_processUnprocessedMaps$();
  var $layer$$2$$ = D.$DvtBaseMapManager$$.$_GLOBAL_MAPS$[$baseMapName$$2$$][$layerName$$2$$];
  return $layer$$2$$ ? $layer$$2$$[D.$DvtBaseMapManager$$.$TYPE_LABELS$] : D.$JSCompiler_alias_NULL$$
};
D.$DvtBaseMapManager$$.$getLongAreaLabel$ = function $$DvtBaseMapManager$$$$getLongAreaLabel$$($baseMapName$$3_layer$$3$$, $layerName$$3$$, $areaId$$) {
  D.$DvtBaseMapManager$$.$_processUnprocessedMaps$();
  $baseMapName$$3_layer$$3$$ = D.$DvtBaseMapManager$$.$_GLOBAL_MAPS$[$baseMapName$$3_layer$$3$$][$layerName$$3$$];
  var $labels$$28$$;
  $baseMapName$$3_layer$$3$$ && ($labels$$28$$ = $baseMapName$$3_layer$$3$$[D.$DvtBaseMapManager$$.$TYPE_LABELS$]);
  return $labels$$28$$ && $labels$$28$$[$areaId$$] ? $labels$$28$$[$areaId$$][1] : D.$JSCompiler_alias_NULL$$
};
D.$DvtBaseMapManager$$.$getCityCoordinates$ = function $$DvtBaseMapManager$$$$getCityCoordinates$$($baseMapName$$4$$, $city$$) {
  D.$DvtBaseMapManager$$.$_processUnprocessedMaps$();
  var $basemap_cityLayer_coords$$34$$ = D.$DvtBaseMapManager$$.$_GLOBAL_MAPS$[$baseMapName$$4$$];
  if($basemap_cityLayer_coords$$34$$ && ($basemap_cityLayer_coords$$34$$ = $basemap_cityLayer_coords$$34$$.cities)) {
    if($basemap_cityLayer_coords$$34$$ = $basemap_cityLayer_coords$$34$$[D.$DvtBaseMapManager$$.$TYPE_PATH$][$city$$]) {
      return new D.$DvtPoint$$($basemap_cityLayer_coords$$34$$[0], $basemap_cityLayer_coords$$34$$[1])
    }
  }
  return D.$JSCompiler_alias_NULL$$
};
D.$DvtBaseMapManager$$.$getCityLabel$ = function $$DvtBaseMapManager$$$$getCityLabel$$($baseMapName$$5$$, $city$$1$$) {
  D.$DvtBaseMapManager$$.$_processUnprocessedMaps$();
  var $basemap$$1_cityLabel_cityLayer$$1$$ = D.$DvtBaseMapManager$$.$_GLOBAL_MAPS$[$baseMapName$$5$$];
  if($basemap$$1_cityLabel_cityLayer$$1$$ && ($basemap$$1_cityLabel_cityLayer$$1$$ = $basemap$$1_cityLabel_cityLayer$$1$$.cities)) {
    if($basemap$$1_cityLabel_cityLayer$$1$$ = $basemap$$1_cityLabel_cityLayer$$1$$[D.$DvtBaseMapManager$$.$TYPE_LABELS$][$city$$1$$]) {
      return $basemap$$1_cityLabel_cityLayer$$1$$[1]
    }
  }
  return D.$JSCompiler_alias_NULL$$
};
D.$DvtBaseMapManager$$.$getAreaCenter$ = function $$DvtBaseMapManager$$$$getAreaCenter$$($arPath$$2_baseMapName$$6_path$$38$$, $layerName$$4$$, $areaId$$1$$) {
  D.$DvtBaseMapManager$$.$_processUnprocessedMaps$();
  var $basemap$$2_labelInfo$$8_layer$$4$$ = D.$DvtBaseMapManager$$.$_GLOBAL_MAPS$[$arPath$$2_baseMapName$$6_path$$38$$];
  if($basemap$$2_labelInfo$$8_layer$$4$$ && ($basemap$$2_labelInfo$$8_layer$$4$$ = $basemap$$2_labelInfo$$8_layer$$4$$[$layerName$$4$$])) {
    if(($basemap$$2_labelInfo$$8_layer$$4$$ = $basemap$$2_labelInfo$$8_layer$$4$$[D.$DvtBaseMapManager$$.$TYPE_LABELINFO$]) && $basemap$$2_labelInfo$$8_layer$$4$$[$areaId$$1$$]) {
      return(0,D.$DvtRectangle$create$$)($basemap$$2_labelInfo$$8_layer$$4$$[$areaId$$1$$][0]).$getCenter$()
    }
    $arPath$$2_baseMapName$$6_path$$38$$ = D.$DvtBaseMapManager$$.$_GLOBAL_MAPS$[$arPath$$2_baseMapName$$6_path$$38$$][$layerName$$4$$][D.$DvtBaseMapManager$$.$TYPE_PATH$][$areaId$$1$$];
    if(!$arPath$$2_baseMapName$$6_path$$38$$) {
      return D.$JSCompiler_alias_NULL$$
    }
    $arPath$$2_baseMapName$$6_path$$38$$ = D.$DvtPathUtils$$.$createPathArray$($arPath$$2_baseMapName$$6_path$$38$$);
    return D.$DvtPathUtils$$.$getDimensions$($arPath$$2_baseMapName$$6_path$$38$$).$getCenter$()
  }
  return D.$JSCompiler_alias_NULL$$
};
D.$DvtBaseMapManager$$.$getChildLayerName$ = function $$DvtBaseMapManager$$$$getChildLayerName$$($baseMapName$$7$$, $layerName$$5$$) {
  D.$DvtBaseMapManager$$.$_processUnprocessedMaps$();
  var $layer$$5$$ = D.$DvtBaseMapManager$$.$_GLOBAL_MAPS$[$baseMapName$$7$$][$layerName$$5$$];
  return $layer$$5$$ ? D.$DvtBaseMapManager$$.$_GLOBAL_MAPS$[$baseMapName$$7$$][D.$DvtBaseMapManager$$.$_INDEX$][$layer$$5$$.__index + 1] : D.$JSCompiler_alias_NULL$$
};
D.$DvtBaseMapManager$$.$getParentLayerName$ = function $$DvtBaseMapManager$$$$getParentLayerName$$($baseMapName$$8$$, $layerName$$6$$) {
  D.$DvtBaseMapManager$$.$_processUnprocessedMaps$();
  return D.$DvtBaseMapManager$$.$_GLOBAL_MAPS$[$baseMapName$$8$$][$layerName$$6$$] ? D.$DvtBaseMapManager$$.$_GLOBAL_MAPS$[$baseMapName$$8$$][D.$DvtBaseMapManager$$.$_INDEX$][D.$DvtBaseMapManager$$.$_GLOBAL_MAPS$[$baseMapName$$8$$][$layerName$$6$$].__index - 1] : D.$JSCompiler_alias_NULL$$
};
D.$DvtBaseMapManager$$.$getAreaPaths$ = function $$DvtBaseMapManager$$$$getAreaPaths$$($baseMapName$$9$$, $layerName$$7$$) {
  D.$DvtBaseMapManager$$.$_processUnprocessedMaps$();
  return D.$DvtBaseMapManager$$.$_GLOBAL_MAPS$[$baseMapName$$9$$][$layerName$$7$$][D.$DvtBaseMapManager$$.$TYPE_PATH$]
};
D.$DvtBaseMapManager$$.$getPathForArea$ = function $$DvtBaseMapManager$$$$getPathForArea$$($baseMapName$$10$$, $layerName$$8$$, $area$$3$$) {
  D.$DvtBaseMapManager$$.$_processUnprocessedMaps$();
  return D.$DvtBaseMapManager$$.$_GLOBAL_MAPS$[$baseMapName$$10$$][$layerName$$8$$][D.$DvtBaseMapManager$$.$TYPE_PATH$][$area$$3$$]
};
D.$DvtBaseMapManager$$.$getChildrenForLayerAreas$ = function $$DvtBaseMapManager$$$$getChildrenForLayerAreas$$($baseMapName$$11$$, $layerName$$9$$) {
  D.$DvtBaseMapManager$$.$_processUnprocessedMaps$();
  var $childLayerName_children$$15$$ = D.$DvtBaseMapManager$$.$getChildLayerName$($baseMapName$$11$$, $layerName$$9$$);
  return $childLayerName_children$$15$$ && ($childLayerName_children$$15$$ = D.$DvtBaseMapManager$$.$_GLOBAL_MAPS$[$baseMapName$$11$$][$childLayerName_children$$15$$][D.$DvtBaseMapManager$$.$TYPE_PARENTREGION_CHILDREN$]) ? $childLayerName_children$$15$$ : []
};
D.$DvtBaseMapManager$$.$getMapLayerName$ = function $$DvtBaseMapManager$$$$getMapLayerName$$($baseMapName$$12$$, $index$$244$$) {
  D.$DvtBaseMapManager$$.$_processUnprocessedMaps$();
  return D.$DvtBaseMapManager$$.$_GLOBAL_MAPS$[$baseMapName$$12$$][D.$DvtBaseMapManager$$.$_INDEX$][$index$$244$$]
};
D.$DvtBaseMapManager$$.$registerBaseMapLayer$ = function $$DvtBaseMapManager$$$$registerBaseMapLayer$$($baseMapName$$13_layerMetadata$$, $layerName$$10$$, $labelMetadata$$, $pathMetadata$$, $parentsRegionMetadata$$, $labelInfoMetadata$$, $index$$245$$, $dim$$84$$) {
  var $basemapMetadata$$ = D.$DvtBaseMapManager$$.$_GLOBAL_MAPS$[$baseMapName$$13_layerMetadata$$];
  $basemapMetadata$$ || ($basemapMetadata$$ = {}, $basemapMetadata$$[D.$DvtBaseMapManager$$.$_INDEX$] = [], D.$DvtBaseMapManager$$.$_GLOBAL_MAPS$[$baseMapName$$13_layerMetadata$$] = $basemapMetadata$$);
  $baseMapName$$13_layerMetadata$$ = $basemapMetadata$$[$layerName$$10$$];
  $baseMapName$$13_layerMetadata$$ || ($baseMapName$$13_layerMetadata$$ = {}, $basemapMetadata$$[$layerName$$10$$] = $baseMapName$$13_layerMetadata$$, $index$$245$$ != D.$JSCompiler_alias_NULL$$ && ($basemapMetadata$$[D.$DvtBaseMapManager$$.$_INDEX$][$index$$245$$] = $layerName$$10$$));
  $baseMapName$$13_layerMetadata$$[D.$DvtBaseMapManager$$.$TYPE_LABELS$] = $labelMetadata$$;
  $baseMapName$$13_layerMetadata$$[D.$DvtBaseMapManager$$.$TYPE_PATH$] = $pathMetadata$$;
  $baseMapName$$13_layerMetadata$$[D.$DvtBaseMapManager$$.$TYPE_PARENTREGION_CHILDREN$] = $parentsRegionMetadata$$;
  $baseMapName$$13_layerMetadata$$[D.$DvtBaseMapManager$$.$TYPE_LABELINFO$] = $labelInfoMetadata$$;
  $baseMapName$$13_layerMetadata$$[D.$DvtBaseMapManager$$.$TYPE_DIM$] = $dim$$84$$;
  $baseMapName$$13_layerMetadata$$[D.$DvtBaseMapManager$$.$_INDEX$] = $index$$245$$
};
(0,D.$goog$exportPath_$$)("DvtBaseMapManager.registerBaseMapLayer", D.$DvtBaseMapManager$$.$registerBaseMapLayer$);
D.$DvtBaseMapManager$$.$registerResourceBundle$ = function $$DvtBaseMapManager$$$$registerResourceBundle$$($baseMapName$$14_layerMetadata$$1$$, $layerName$$11$$, $labelMetadata$$1$$) {
  var $basemapMetadata$$1$$ = D.$DvtBaseMapManager$$.$_GLOBAL_MAPS$[$baseMapName$$14_layerMetadata$$1$$];
  $basemapMetadata$$1$$ || ($basemapMetadata$$1$$ = {}, D.$DvtBaseMapManager$$.$_GLOBAL_MAPS$[$baseMapName$$14_layerMetadata$$1$$] = $basemapMetadata$$1$$);
  $baseMapName$$14_layerMetadata$$1$$ = $basemapMetadata$$1$$[$layerName$$11$$];
  $baseMapName$$14_layerMetadata$$1$$ || ($baseMapName$$14_layerMetadata$$1$$ = {}, $basemapMetadata$$1$$[$layerName$$11$$] = $baseMapName$$14_layerMetadata$$1$$);
  ($baseMapName$$14_layerMetadata$$1$$ = $basemapMetadata$$1$$[$layerName$$11$$]) && ($baseMapName$$14_layerMetadata$$1$$[D.$DvtBaseMapManager$$.$TYPE_LABELS$] = $labelMetadata$$1$$)
};
(0,D.$goog$exportPath_$$)("DvtBaseMapManager.registerResourceBundle", D.$DvtBaseMapManager$$.$registerResourceBundle$);
D.$DvtBaseMapManager$$.$updateResourceBundle$ = function $$DvtBaseMapManager$$$$updateResourceBundle$$($baseMapName$$15_basemapMetadata$$2$$, $layerMetadata$$2_layerName$$12$$, $labelMetadata$$2$$) {
  if($baseMapName$$15_basemapMetadata$$2$$ = D.$DvtBaseMapManager$$.$_GLOBAL_MAPS$[$baseMapName$$15_basemapMetadata$$2$$]) {
    if($layerMetadata$$2_layerName$$12$$ = $baseMapName$$15_basemapMetadata$$2$$[$layerMetadata$$2_layerName$$12$$]) {
      for(var $prop$$18$$ in $labelMetadata$$2$$) {
        $layerMetadata$$2_layerName$$12$$[D.$DvtBaseMapManager$$.$TYPE_LABELS$][$prop$$18$$] = $labelMetadata$$2$$[$prop$$18$$]
      }
    }
  }
};
(0,D.$goog$exportPath_$$)("DvtBaseMapManager.updateResourceBundle", D.$DvtBaseMapManager$$.$updateResourceBundle$);
D.$DvtBaseMapManager$$.$_processUnprocessedMaps$ = function $$DvtBaseMapManager$$$$_processUnprocessedMaps$$() {
  var $i$$793_index$$246$$, $args$$6$$, $unprocessedMaps_unprocessedParentUpdates$$ = D.$DvtBaseMapManager$$._UNPROCESSED_MAPS;
  if($unprocessedMaps_unprocessedParentUpdates$$) {
    for($i$$793_index$$246$$ = 0;$i$$793_index$$246$$ < $unprocessedMaps_unprocessedParentUpdates$$[0].length;$i$$793_index$$246$$++) {
      $args$$6$$ = $unprocessedMaps_unprocessedParentUpdates$$[0][$i$$793_index$$246$$], D.$DvtBaseMapManager$$.$registerBaseMapLayer$($args$$6$$[0], $args$$6$$[1], $args$$6$$[2], $args$$6$$[3], $args$$6$$[4], $args$$6$$[5], $args$$6$$[6], $args$$6$$[7])
    }
    for($i$$793_index$$246$$ = 0;$i$$793_index$$246$$ < $unprocessedMaps_unprocessedParentUpdates$$[1].length;$i$$793_index$$246$$++) {
      $args$$6$$ = $unprocessedMaps_unprocessedParentUpdates$$[1][$i$$793_index$$246$$], D.$DvtBaseMapManager$$.$registerResourceBundle$($args$$6$$[0], $args$$6$$[1], $args$$6$$[2])
    }
    for($i$$793_index$$246$$ = 0;$i$$793_index$$246$$ < $unprocessedMaps_unprocessedParentUpdates$$[2].length;$i$$793_index$$246$$++) {
      $args$$6$$ = $unprocessedMaps_unprocessedParentUpdates$$[2][$i$$793_index$$246$$], D.$DvtBaseMapManager$$.$updateResourceBundle$($args$$6$$[0], $args$$6$$[1], $args$$6$$[2])
    }
    D.$DvtBaseMapManager$$._UNPROCESSED_MAPS = [[], [], []]
  }
  if($unprocessedMaps_unprocessedParentUpdates$$ = D.$DvtBaseMapManager$$._UNPROCESSED_PARENT_UPDATES) {
    for($i$$793_index$$246$$ = 0;$i$$793_index$$246$$ < $unprocessedMaps_unprocessedParentUpdates$$[0].length;$i$$793_index$$246$$++) {
      $args$$6$$ = $unprocessedMaps_unprocessedParentUpdates$$[0][$i$$793_index$$246$$];
      var $extendedLayer_indicies_layerMetadata$$3$$ = $args$$6$$[1], $layerName$$13_lowerLayer$$ = $args$$6$$[2], $basemapMetadata$$3$$ = D.$DvtBaseMapManager$$.$_GLOBAL_MAPS$[$args$$6$$[0]], $basemapDim$$;
      if($basemapMetadata$$3$$) {
        if($extendedLayer_indicies_layerMetadata$$3$$ = $basemapMetadata$$3$$[$extendedLayer_indicies_layerMetadata$$3$$]) {
          $extendedLayer_indicies_layerMetadata$$3$$[D.$DvtBaseMapManager$$.$TYPE_PARENTREGION_CHILDREN$] = $args$$6$$[3];
          $basemapDim$$ = $extendedLayer_indicies_layerMetadata$$3$$[D.$DvtBaseMapManager$$.$TYPE_DIM$];
          $i$$793_index$$246$$ = $extendedLayer_indicies_layerMetadata$$3$$[D.$DvtBaseMapManager$$.$_INDEX$];
          $extendedLayer_indicies_layerMetadata$$3$$ = $basemapMetadata$$3$$[D.$DvtBaseMapManager$$.$_INDEX$];
          $extendedLayer_indicies_layerMetadata$$3$$.splice($i$$793_index$$246$$, 0, $layerName$$13_lowerLayer$$);
          $basemapMetadata$$3$$[$layerName$$13_lowerLayer$$][D.$DvtBaseMapManager$$.$_INDEX$] = $i$$793_index$$246$$;
          for($i$$793_index$$246$$ += 1;$i$$793_index$$246$$ < $extendedLayer_indicies_layerMetadata$$3$$.length;$i$$793_index$$246$$++) {
            ($layerName$$13_lowerLayer$$ = $basemapMetadata$$3$$[$extendedLayer_indicies_layerMetadata$$3$$[$i$$793_index$$246$$]]) && $layerName$$13_lowerLayer$$[D.$DvtBaseMapManager$$.$_INDEX$]++
          }
        }
        ($extendedLayer_indicies_layerMetadata$$3$$ = $basemapMetadata$$3$$[$args$$6$$[2]]) && ($extendedLayer_indicies_layerMetadata$$3$$[D.$DvtBaseMapManager$$.$TYPE_DIM$] = $basemapDim$$)
      }
    }
    D.$DvtBaseMapManager$$._UNPROCESSED_PARENT_UPDATES = [[]]
  }
};
D.$DvtBaseMapManager$$.$simplifyAreaPaths$ = function $$DvtBaseMapManager$$$$simplifyAreaPaths$$($paths$$, $basemapW_scale$$64$$, $basemapH_simplifiedPaths$$, $pathAr_viewportW$$, $viewportH$$, $zoomFactor$$1$$) {
  if(0 < $zoomFactor$$1$$) {
    $basemapW_scale$$64$$ = 1 / (window.Math.min($pathAr_viewportW$$ / $basemapW_scale$$64$$, $viewportH$$ / $basemapH_simplifiedPaths$$) * $zoomFactor$$1$$);
    if(1 >= $basemapW_scale$$64$$) {
      return $paths$$
    }
    $basemapH_simplifiedPaths$$ = [];
    if($paths$$) {
      for(var $path$$39$$ in $paths$$) {
        $pathAr_viewportW$$ = $paths$$[$path$$39$$], (0,window.isNaN)($pathAr_viewportW$$) && ($pathAr_viewportW$$ = D.$DvtPathUtils$$.$createPathArray$($paths$$[$path$$39$$])), $basemapH_simplifiedPaths$$[$path$$39$$] = D.$DvtPathUtils$$.$simplifyPath$($pathAr_viewportW$$, $basemapW_scale$$64$$)
      }
    }
    return $basemapH_simplifiedPaths$$
  }
  return $paths$$
};
D.$DvtBaseMapManager$$.$getLayerIds$ = function $$DvtBaseMapManager$$$$getLayerIds$$($baseMapName$$16$$, $layerName$$14$$) {
  D.$DvtBaseMapManager$$.$_processUnprocessedMaps$();
  var $ids$$1_layer$$7$$ = D.$DvtBaseMapManager$$.$_GLOBAL_MAPS$[$baseMapName$$16$$][$layerName$$14$$], $map$$13$$ = {};
  if($ids$$1_layer$$7$$) {
    var $ids$$1_layer$$7$$ = $ids$$1_layer$$7$$[D.$DvtBaseMapManager$$.$TYPE_LABELS$], $id$$285$$;
    for($id$$285$$ in $ids$$1_layer$$7$$) {
      $map$$13$$[$id$$285$$] = $ids$$1_layer$$7$$[$id$$285$$][1]
    }
  }
  return $map$$13$$
};
(0,D.$goog$exportPath_$$)("DvtBaseMapManager.getLayerIds", D.$DvtBaseMapManager$$.$getLayerIds$);
D.$DvtThematicMapCategoryWrapper$$ = function $$DvtThematicMapCategoryWrapper$$$($displayable$$98$$, $category$$25$$) {
  this.Init($displayable$$98$$, $category$$25$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtThematicMapCategoryWrapper$$, D.$DvtObj$$, "DvtThematicMapCategoryWrapper");
D.$DvtThematicMapCategoryWrapper$$.prototype.Init = function $$DvtThematicMapCategoryWrapper$$$$Init$($displayable$$99$$, $category$$26$$) {
  this.$_displayable$ = $displayable$$99$$;
  this.$_category$ = $category$$26$$
};
D.$DvtThematicMapCategoryWrapper$$.prototype.$getCategories$ = (0,D.$JSCompiler_get$$)("$_category$");
D.$DvtThematicMapCategoryWrapper$$.prototype.$getDisplayables$ = function $$DvtThematicMapCategoryWrapper$$$$$getDisplayables$$() {
  return[this.$_displayable$]
};
D.$DvtMapDrillEvent$$ = function $$DvtMapDrillEvent$$$($drillType$$) {
  this.Init(D.$DvtMapDrillEvent$$.$TYPE$);
  this.$_drillType$ = $drillType$$
};
D.$DvtObj$$.$createSubclass$(D.$DvtMapDrillEvent$$, D.$DvtBaseComponentEvent$$, "DvtMapDrillEvent");
D.$DvtMapDrillEvent$$.$TYPE$ = "drill";
D.$DvtMapDrillEvent$$.$DRILL_UP$ = 0;
D.$DvtMapDrillEvent$$.$DRILL_DOWN$ = 1;
D.$DvtMapDrillEvent$$.$RESET$ = 2;
D.$DvtMapDrillEvent$$.prototype.$setDisclosed$ = (0,D.$JSCompiler_set$$)("$_disclosed$");
D.$DvtMapActionEvent$$ = function $$DvtMapActionEvent$$$($clientId$$3$$, $rowKey$$18$$, $action$$25$$) {
  this.Init("action");
  this.$_clientId$ = $clientId$$3$$;
  this.$_rowKey$ = $rowKey$$18$$;
  this.$_action$ = $action$$25$$
};
(0,D.$goog$exportPath_$$)("DvtMapActionEvent", D.$DvtMapActionEvent$$);
D.$DvtObj$$.$createSubclass$(D.$DvtMapActionEvent$$, D.$DvtBaseComponentEvent$$, "DvtMapActionEvent");
D.$DvtMapActionEvent$$.TYPE = "action";
D.$DvtMapActionEvent$$.prototype.$getClientId$ = (0,D.$JSCompiler_get$$)("$_clientId$");
D.$DvtMapActionEvent$$.prototype.getClientId = D.$DvtMapActionEvent$$.prototype.$getClientId$;
D.$DvtMapActionEvent$$.prototype.$getRowKey$ = (0,D.$JSCompiler_get$$)("$_rowKey$");
D.$DvtMapActionEvent$$.prototype.getRowKey = D.$DvtMapActionEvent$$.prototype.$getRowKey$;
D.$DvtMapActionEvent$$.prototype.$getAction$ = (0,D.$JSCompiler_get$$)("$_action$");
D.$DvtMapActionEvent$$.prototype.getAction = D.$DvtMapActionEvent$$.prototype.$getAction$;
D.$DvtMapLabel$$ = function $$DvtMapLabel$$$($context$$609$$, $label$$93$$, $labelInfo$$9$$, $labelDisplay$$5$$, $parentContainer$$, $bSupportsVectorEffects$$4$$) {
  this.Init($context$$609$$, $label$$93$$, $labelInfo$$9$$, $labelDisplay$$5$$, $parentContainer$$, $bSupportsVectorEffects$$4$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtMapLabel$$, D.$DvtOutputText$$, "DvtMapLabel");
D.$JSCompiler_prototypeAlias$$ = D.$DvtMapLabel$$.prototype;
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($context$$610$$, $i$$810_label$$94$$, $labelInfo$$10$$, $labelDisplay$$6_line$$16_polyline$$, $parentContainer$$1_stroke$$112$$, $bSupportsVectorEffects$$5$$) {
  D.$DvtMapLabel$$.$superclass$.Init.call(this, $context$$610$$, $i$$810_label$$94$$, 0, 0);
  this.$_bSupportsVectorEffects$ = $bSupportsVectorEffects$$5$$;
  this.$_boundRectangle$ = [];
  this.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$);
  this.$alignCenter$();
  this.$alignMiddle$();
  this.$_center$ = D.$JSCompiler_alias_NULL$$;
  this.$_labelDisplay$ = $labelDisplay$$6_line$$16_polyline$$;
  this.$_parentContainer$ = $parentContainer$$1_stroke$$112$$;
  if($labelInfo$$10$$ && (this.$_boundRectangle$.push((0,D.$DvtRectangle$create$$)($labelInfo$$10$$[0])), 1 < $labelInfo$$10$$.length)) {
    this.$_leaderLines$ = [];
    for($i$$810_label$$94$$ = 1;$i$$810_label$$94$$ < $labelInfo$$10$$.length;$i$$810_label$$94$$++) {
      $labelDisplay$$6_line$$16_polyline$$ = $labelInfo$$10$$[$i$$810_label$$94$$], this.$_boundRectangle$.push((0,D.$DvtRectangle$create$$)($labelDisplay$$6_line$$16_polyline$$[0])), $labelDisplay$$6_line$$16_polyline$$ = new D.$DvtPolyline$$($context$$610$$, $labelDisplay$$6_line$$16_polyline$$[1]), (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)($labelDisplay$$6_line$$16_polyline$$), $parentContainer$$1_stroke$$112$$ = new D.$DvtSolidStroke$$("#000000"), this.$_bSupportsVectorEffects$ && ($parentContainer$$1_stroke$$112$$.$_bFixedWidth$ = 
      D.$JSCompiler_alias_TRUE$$), $labelDisplay$$6_line$$16_polyline$$.$setStroke$($parentContainer$$1_stroke$$112$$), this.$_leaderLines$.push($labelDisplay$$6_line$$16_polyline$$)
    }
  }
};
D.$JSCompiler_prototypeAlias$$.update = function $$JSCompiler_prototypeAlias$$$update$($pzcMatrix$$12_zoom$$13$$) {
  $pzcMatrix$$12_zoom$$13$$ = $pzcMatrix$$12_zoom$$13$$.$_a$;
  for(var $mat$$49_state$$96_stroke$$113$$ = -1, $center$$9_estimatedDims$$3$$ = D.$DvtTextUtils$$.$guessTextDimensions$(this), $labelBox_remove_style$$117$$ = D.$JSCompiler_alias_FALSE$$, $i$$811_leaderLinePoints$$ = 0;$i$$811_leaderLinePoints$$ < this.$_boundRectangle$.length;$i$$811_leaderLinePoints$$++) {
    var $numPoints$$2_zoomW$$ = this.$_boundRectangle$[$i$$811_leaderLinePoints$$].$w$ * $pzcMatrix$$12_zoom$$13$$;
    if($center$$9_estimatedDims$$3$$.$h$ <= this.$_boundRectangle$[$i$$811_leaderLinePoints$$].$h$ * $pzcMatrix$$12_zoom$$13$$) {
      if($center$$9_estimatedDims$$3$$.$w$ <= $numPoints$$2_zoomW$$) {
        $mat$$49_state$$96_stroke$$113$$ = $i$$811_leaderLinePoints$$;
        break
      }else {
        if(this.getParent() || ($labelBox_remove_style$$117$$ = D.$JSCompiler_alias_TRUE$$, this.$_parentContainer$.$addChild$(this)), this.$getDimensions$().$w$ <= $numPoints$$2_zoomW$$) {
          $mat$$49_state$$96_stroke$$113$$ = $i$$811_leaderLinePoints$$;
          break
        }
      }
    }
  }
  -1 == $mat$$49_state$$96_stroke$$113$$ && "on" == this.$_labelDisplay$ && ($mat$$49_state$$96_stroke$$113$$ = this.$_boundRectangle$.length - 1);
  this.$_currentState$ != $mat$$49_state$$96_stroke$$113$$ ? (-1 == $mat$$49_state$$96_stroke$$113$$ ? this.reset() : (this.getParent() || this.$_parentContainer$.$addChild$(this), $center$$9_estimatedDims$$3$$ = this.$_boundRectangle$[$mat$$49_state$$96_stroke$$113$$].$getCenter$(), this.$setCenter$($center$$9_estimatedDims$$3$$), this.$_leaderLines$ && (this.$_parentContainer$.removeChild(this.$_leaderLine$), this.$_leaderLine$ = D.$JSCompiler_alias_NULL$$, 0 < $mat$$49_state$$96_stroke$$113$$ ? 
  (this.$_leaderLine$ = this.$_leaderLines$[$mat$$49_state$$96_stroke$$113$$ - 1], this.$_parentContainer$.$addChild$(this.$_leaderLine$), $labelBox_remove_style$$117$$ = this.$getCSSStyle$(), $labelBox_remove_style$$117$$.$setStyle$("color", "#000000"), this.$setCSSStyle$($labelBox_remove_style$$117$$), $labelBox_remove_style$$117$$ = this.$_boundRectangle$[$mat$$49_state$$96_stroke$$113$$], $i$$811_leaderLinePoints$$ = this.$_leaderLine$.$getPoints$(), $numPoints$$2_zoomW$$ = $i$$811_leaderLinePoints$$.length, 
  $labelBox_remove_style$$117$$.x > $i$$811_leaderLinePoints$$[$numPoints$$2_zoomW$$ - 2] ? (this.$alignLeft$(), this.$alignMiddle$(), this.$setCenter$(new D.$DvtPoint$$($labelBox_remove_style$$117$$.x, $center$$9_estimatedDims$$3$$.y))) : $labelBox_remove_style$$117$$.y > $i$$811_leaderLinePoints$$[$numPoints$$2_zoomW$$ - 1] ? (this.$alignTop$(), this.$alignCenter$(), this.$setCenter$(new D.$DvtPoint$$($center$$9_estimatedDims$$3$$.x, $labelBox_remove_style$$117$$.y))) : $labelBox_remove_style$$117$$.x + 
  $labelBox_remove_style$$117$$.$w$ < $i$$811_leaderLinePoints$$[$numPoints$$2_zoomW$$ - 2] ? (this.$alignRight$(), this.$alignMiddle$(), this.$setCenter$(new D.$DvtPoint$$($labelBox_remove_style$$117$$.x + $labelBox_remove_style$$117$$.$w$, $center$$9_estimatedDims$$3$$.y))) : $labelBox_remove_style$$117$$.y + $labelBox_remove_style$$117$$.$h$ < $i$$811_leaderLinePoints$$[$numPoints$$2_zoomW$$ - 1] && (this.$alignBottom$(), this.$alignCenter$(), this.$setCenter$(new D.$DvtPoint$$($center$$9_estimatedDims$$3$$.x, 
  $labelBox_remove_style$$117$$.y + $labelBox_remove_style$$117$$.$h$)))) : (this.$alignCenter$(), this.$alignMiddle$(), $labelBox_remove_style$$117$$ = this.$getCSSStyle$(), $labelBox_remove_style$$117$$.$setStyle$("color", this.$_labelColor$), this.$setCSSStyle$($labelBox_remove_style$$117$$)))), this.$_currentState$ = $mat$$49_state$$96_stroke$$113$$) : -1 == $mat$$49_state$$96_stroke$$113$$ && $labelBox_remove_style$$117$$ && this.$_parentContainer$.removeChild(this);
  -1 != this.$_currentState$ && ($mat$$49_state$$96_stroke$$113$$ = new D.$DvtMatrix$$, $mat$$49_state$$96_stroke$$113$$.translate($pzcMatrix$$12_zoom$$13$$ * this.$_center$.x - this.$_center$.x, $pzcMatrix$$12_zoom$$13$$ * this.$_center$.y - this.$_center$.y), this.$setMatrix$($mat$$49_state$$96_stroke$$113$$), this.$_leaderLine$ && (this.$_leaderLine$.$setMatrix$(new D.$DvtMatrix$$($pzcMatrix$$12_zoom$$13$$, 0, 0, $pzcMatrix$$12_zoom$$13$$)), this.$_bSupportsVectorEffects$ || ($mat$$49_state$$96_stroke$$113$$ = 
  this.$_leaderLine$.$getStroke$().$clone$(), $mat$$49_state$$96_stroke$$113$$.$setWidth$(1 / $pzcMatrix$$12_zoom$$13$$), this.$_leaderLine$.$setStroke$($mat$$49_state$$96_stroke$$113$$))))
};
D.$JSCompiler_prototypeAlias$$.$setCenter$ = function $$JSCompiler_prototypeAlias$$$$setCenter$$($p$$29$$) {
  this.$_center$ = $p$$29$$;
  this.$setX$($p$$29$$.x);
  this.$setY$($p$$29$$.y)
};
D.$JSCompiler_prototypeAlias$$.$getCenter$ = (0,D.$JSCompiler_get$$)("$_center$");
D.$JSCompiler_prototypeAlias$$.$setCSSStyle$ = function $$JSCompiler_prototypeAlias$$$$setCSSStyle$$($cssStyle$$39$$) {
  D.$DvtMapLabel$$.$superclass$.$setCSSStyle$.call(this, $cssStyle$$39$$);
  this.$_labelColor$ || (this.$_labelColor$ = $cssStyle$$39$$.$getStyle$("color"))
};
D.$JSCompiler_prototypeAlias$$.reset = function $$JSCompiler_prototypeAlias$$$reset$() {
  this.$_parentContainer$.removeChild(this);
  this.$_currentState$ = -1;
  this.$_leaderLine$ && (this.$_parentContainer$.removeChild(this.$_leaderLine$), this.$_leaderLine$ = D.$JSCompiler_alias_NULL$$)
};
D.$DvtMapObjPeer$$ = function $$DvtMapObjPeer$$$($data$$101$$, $dataLayer$$6$$, $displayable$$94$$, $label$$95$$, $center$$10$$) {
  this.Init($data$$101$$, $dataLayer$$6$$, $displayable$$94$$, $label$$95$$, $center$$10$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtMapObjPeer$$, D.$DvtObj$$, "DvtMapObjPeer");
D.$JSCompiler_prototypeAlias$$ = D.$DvtMapObjPeer$$.prototype;
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($data$$102$$, $dataLayer$$7_mapLayer_preDatatip$$, $displayable$$95_location$$26$$, $label$$96$$, $center$$11$$) {
  this.$_data$ = $data$$102$$;
  this.$_dataLayer$ = $dataLayer$$7_mapLayer_preDatatip$$;
  this.$Displayable$ = $displayable$$95_location$$26$$;
  this.$_isShowingKeyboardFocusEffect$ = this.$_isShowingHoverEffect$ = this.$_isSelected$ = D.$JSCompiler_alias_FALSE$$;
  this.$Displayable$.$setDataColor$ && this.$Displayable$.$setDataColor$($data$$102$$.color);
  this.$_label$ = $label$$96$$;
  this.$_center$ = $center$$11$$;
  this.$_zoom$ = 1;
  this.$_view$ = $dataLayer$$7_mapLayer_preDatatip$$.$_tmap$;
  this.$_data$.categories || this.$_label$ && (this.$_data$.categories = [this.$_label$.$getTextString$()]);
  $displayable$$95_location$$26$$ = $data$$102$$.location;
  "auto" == this.$_view$.$_displayTooltips$ && $displayable$$95_location$$26$$ && ($dataLayer$$7_mapLayer_preDatatip$$ = $dataLayer$$7_mapLayer_preDatatip$$.$_parentLayer$, ($dataLayer$$7_mapLayer_preDatatip$$ = !($dataLayer$$7_mapLayer_preDatatip$$ instanceof D.$DvtMapAreaLayer$$) || $dataLayer$$7_mapLayer_preDatatip$$ instanceof D.$DvtMapCustomAreaLayer$$ ? D.$DvtBaseMapManager$$.$getCityLabel$(this.$_view$.$_mapName$, $displayable$$95_location$$26$$) : D.$DvtBaseMapManager$$.$getLongAreaLabel$(this.$_view$.$_mapName$, 
  $dataLayer$$7_mapLayer_preDatatip$$.$LayerName$, $displayable$$95_location$$26$$)) && (this.$_data$.shortDesc = $data$$102$$.shortDesc ? $dataLayer$$7_mapLayer_preDatatip$$ + ": " + $data$$102$$.shortDesc : $dataLayer$$7_mapLayer_preDatatip$$));
  this.$Displayable$ && ($data$$102$$.destination ? (this.$Displayable$.$setAriaRole$("link"), this.$Displayable$.setCursor("pointer"), this.$_linkCallback$ = D.$DvtToolkitUtils$$.$getLinkCallback$("_blank", $data$$102$$.destination)) : this.$Displayable$.$setAriaRole$("img"));
  this.$UpdateAriaLabel$()
};
D.$JSCompiler_prototypeAlias$$.getId = function $$JSCompiler_prototypeAlias$$$getId$() {
  return this.$_data$.id
};
D.$JSCompiler_prototypeAlias$$.$getClientId$ = function $$JSCompiler_prototypeAlias$$$$getClientId$$() {
  return this.$_data$.clientId
};
D.$JSCompiler_prototypeAlias$$.$getLocation$ = function $$JSCompiler_prototypeAlias$$$$getLocation$$() {
  return this.$_data$.location
};
D.$JSCompiler_prototypeAlias$$.$getCenter$ = (0,D.$JSCompiler_get$$)("$_center$");
D.$JSCompiler_prototypeAlias$$.$setCenter$ = function $$JSCompiler_prototypeAlias$$$$setCenter$$($center$$12$$) {
  this.$_center$ = $center$$12$$;
  this.$__recenter$()
};
D.$JSCompiler_prototypeAlias$$.$getDisplayable$ = (0,D.$JSCompiler_get$$)("$Displayable$");
D.$JSCompiler_prototypeAlias$$.$getLabel$ = (0,D.$JSCompiler_get$$)("$_label$");
D.$JSCompiler_prototypeAlias$$.$getDataLayer$ = (0,D.$JSCompiler_get$$)("$_dataLayer$");
D.$JSCompiler_prototypeAlias$$.$getAction$ = function $$JSCompiler_prototypeAlias$$$$getAction$$() {
  return this.$_data$.action
};
D.$JSCompiler_prototypeAlias$$.$setVisible$ = function $$JSCompiler_prototypeAlias$$$$setVisible$$($bVisible$$11$$) {
  this.$Displayable$.$setVisible$($bVisible$$11$$);
  this.$_label$ && this.$_label$.$setVisible$($bVisible$$11$$)
};
D.$JSCompiler_prototypeAlias$$.$getShortDesc$ = function $$JSCompiler_prototypeAlias$$$$getShortDesc$$() {
  return this.$_data$.shortDesc
};
D.$JSCompiler_prototypeAlias$$.$getSize$ = function $$JSCompiler_prototypeAlias$$$$getSize$$() {
  return this.$Displayable$.getWidth ? this.$Displayable$.getWidth() * this.$Displayable$.getHeight() : 0
};
D.$JSCompiler_prototypeAlias$$.$getCategories$ = function $$JSCompiler_prototypeAlias$$$$getCategories$$() {
  return this.$_data$.categories
};
D.$JSCompiler_prototypeAlias$$.$getDatatip$ = function $$JSCompiler_prototypeAlias$$$$getDatatip$$() {
  if("none" != this.$_view$.$_displayTooltips$) {
    var $tooltipFunc$$10$$ = this.$_view$.$getOptions$().tooltip;
    return $tooltipFunc$$10$$ ? (0,D.$JSCompiler_StaticMethods_getCustomTooltip$$)(this.$_view$.$getCtx$().$getTooltipManager$(), $tooltipFunc$$10$$, this.$getDataContext$()) : this.$getShortDesc$()
  }
  return D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.$getDataContext$ = function $$JSCompiler_prototypeAlias$$$$getDataContext$$() {
  return{id:this.getId(), label:this.$_label$ ? this.$_label$.$getTextString$() : D.$JSCompiler_alias_NULL$$, color:this.$getDatatipColor$(), location:this.$getLocation$(), x:this.$_data$.x, y:this.$_data$.y}
};
D.$JSCompiler_prototypeAlias$$.$getLinkCallback$ = (0,D.$JSCompiler_get$$)("$_linkCallback$");
D.$JSCompiler_prototypeAlias$$.$getDatatipColor$ = function $$JSCompiler_prototypeAlias$$$$getDatatipColor$$() {
  return this.$_data$.color ? this.$_data$.color : "#000000"
};
D.$JSCompiler_prototypeAlias$$.$getAriaLabel$ = function $$JSCompiler_prototypeAlias$$$$getAriaLabel$$() {
  var $states$$18$$ = [];
  this.$isSelectable$() && $states$$18$$.push((0,D.$DvtBundle$getTranslatedString$$)("DvtUtilBundle", this.$isSelected$() ? "STATE_SELECTED" : "STATE_UNSELECTED"));
  return(0,D.$DvtDisplayable$generateAriaLabel$$)(this.$getShortDesc$(), $states$$18$$)
};
D.$JSCompiler_prototypeAlias$$.$getDisplayables$ = function $$JSCompiler_prototypeAlias$$$$getDisplayables$$() {
  return[this.$getDisplayable$()]
};
D.$JSCompiler_prototypeAlias$$.$UpdateAriaLabel$ = function $$JSCompiler_prototypeAlias$$$$UpdateAriaLabel$$() {
  if(!(0,D.$DvtAgent$deferAriaCreation$$)()) {
    var $desc$$27$$ = this.$getAriaLabel$();
    $desc$$27$$ && this.$Displayable$.$setAriaProperty$("label", $desc$$27$$)
  }
};
D.$JSCompiler_prototypeAlias$$.$setSelectable$ = function $$JSCompiler_prototypeAlias$$$$setSelectable$$($bSelectable$$3$$) {
  this.$Displayable$.$setSelectable$ && this.$Displayable$.$setSelectable$($bSelectable$$3$$)
};
D.$JSCompiler_prototypeAlias$$.$isSelectable$ = function $$JSCompiler_prototypeAlias$$$$isSelectable$$() {
  return this.$Displayable$.$isSelectable$ ? this.$Displayable$.$isSelectable$() : D.$JSCompiler_alias_FALSE$$
};
D.$JSCompiler_prototypeAlias$$.$isSelected$ = (0,D.$JSCompiler_get$$)("$_isSelected$");
D.$JSCompiler_prototypeAlias$$.$setSelected$ = function $$JSCompiler_prototypeAlias$$$$setSelected$$($selected$$43$$) {
  if(this.$isSelectable$()) {
    var $prevState$$7$$ = this.$_getState$();
    this.$_isSelected$ = $selected$$43$$;
    this.$_dataLayer$.$getOptions$().selectionRenderer ? (0,D.$JSCompiler_StaticMethods__callCustomRenderer$$)(this, this.$_dataLayer$.$getOptions$().selectionRenderer, this.$_getState$(), $prevState$$7$$) : this.$processDefaultSelectionEffect$($selected$$43$$);
    this.$UpdateAriaLabel$()
  }
};
D.$JSCompiler_prototypeAlias$$.$showHoverEffect$ = function $$JSCompiler_prototypeAlias$$$$showHoverEffect$$() {
  var $prevState$$8$$ = this.$_getState$();
  this.$_isShowingHoverEffect$ = D.$JSCompiler_alias_TRUE$$;
  this.$_dataLayer$.$getOptions$().hoverRenderer ? (0,D.$JSCompiler_StaticMethods__callCustomRenderer$$)(this, this.$_dataLayer$.$getOptions$().hoverRenderer, this.$_getState$(), $prevState$$8$$) : this.$processDefaultHoverEffect$(D.$JSCompiler_alias_TRUE$$)
};
D.$JSCompiler_prototypeAlias$$.$hideHoverEffect$ = function $$JSCompiler_prototypeAlias$$$$hideHoverEffect$$() {
  var $prevState$$9$$ = this.$_getState$();
  this.$_isShowingHoverEffect$ = D.$JSCompiler_alias_FALSE$$;
  this.$_dataLayer$.$getOptions$().hoverRenderer ? (0,D.$JSCompiler_StaticMethods__callCustomRenderer$$)(this, this.$_dataLayer$.$getOptions$().hoverRenderer, this.$_getState$(), $prevState$$9$$) : this.$processDefaultHoverEffect$(D.$JSCompiler_alias_FALSE$$)
};
D.$JSCompiler_prototypeAlias$$.$setShowPopupBehaviors$ = (0,D.$JSCompiler_set$$)("$_showPopupBehaviors$");
D.$JSCompiler_prototypeAlias$$.$getShowPopupBehaviors$ = (0,D.$JSCompiler_get$$)("$_showPopupBehaviors$");
D.$JSCompiler_prototypeAlias$$.$isDragAvailable$ = function $$JSCompiler_prototypeAlias$$$$isDragAvailable$$($clientIds$$21$$) {
  for(var $parentId$$29$$ = this.$_dataLayer$.$getClientId$(), $i$$814$$ = 0;$i$$814$$ < $clientIds$$21$$.length && $clientIds$$21$$[$i$$814$$] != $parentId$$29$$;$i$$814$$++) {
  }
  return $parentId$$29$$
};
D.$JSCompiler_prototypeAlias$$.$getDragTransferable$ = function $$JSCompiler_prototypeAlias$$$$getDragTransferable$$() {
  return this.$_dataLayer$.$__getDragTransferable$(this)
};
D.$JSCompiler_prototypeAlias$$.$getDragFeedback$ = function $$JSCompiler_prototypeAlias$$$$getDragFeedback$$() {
  return this.$_dataLayer$.$__getDragFeedback$()
};
D.$JSCompiler_prototypeAlias$$.$getNextNavigable$ = function $$JSCompiler_prototypeAlias$$$$getNextNavigable$$($event$$761$$) {
  return $event$$761$$.type == D.$DvtMouseEvent$CLICK$$ ? this : 32 == $event$$761$$.keyCode && $event$$761$$.ctrlKey ? this : (0,D.$DvtKeyboardHandler$getNextAdjacentNavigable$$)(this, $event$$761$$, this.$GetNavigables$())
};
D.$JSCompiler_prototypeAlias$$.$GetNavigables$ = function $$JSCompiler_prototypeAlias$$$$GetNavigables$$() {
  return(0,D.$JSCompiler_StaticMethods_getNavigableObjects$$)(this.$getDataLayer$().$_tmap$)
};
D.$JSCompiler_prototypeAlias$$.$getKeyboardBoundingBox$ = function $$JSCompiler_prototypeAlias$$$$getKeyboardBoundingBox$$($targetCoordinateSpace$$62$$) {
  return this.$Displayable$.getParent() ? this.$Displayable$ instanceof D.$DvtCustomDataItem$$ ? this.$Displayable$.$getDimensions$($targetCoordinateSpace$$62$$ ? $targetCoordinateSpace$$62$$ : this.$Displayable$.$getCtx$().$_stage$) : this.$Displayable$.$getDimensions$($targetCoordinateSpace$$62$$) : new D.$DvtRectangle$$(0, 0, 0, 0)
};
D.$JSCompiler_prototypeAlias$$.$getTargetElem$ = function $$JSCompiler_prototypeAlias$$$$getTargetElem$$() {
  return this.$Displayable$.$getElem$()
};
D.$JSCompiler_prototypeAlias$$.$showKeyboardFocusEffect$ = function $$JSCompiler_prototypeAlias$$$$showKeyboardFocusEffect$$() {
  var $prevState$$10$$ = this.$_getState$();
  this.$_isShowingKeyboardFocusEffect$ = D.$JSCompiler_alias_TRUE$$;
  this.$_dataLayer$.$getOptions$().focusRenderer ? (0,D.$JSCompiler_StaticMethods__callCustomRenderer$$)(this, this.$_dataLayer$.$getOptions$().focusRenderer, this.$_getState$(), $prevState$$10$$) : this.$processDefaultFocusEffect$(D.$JSCompiler_alias_TRUE$$)
};
D.$JSCompiler_prototypeAlias$$.$hideKeyboardFocusEffect$ = function $$JSCompiler_prototypeAlias$$$$hideKeyboardFocusEffect$$() {
  if(this.$isShowingKeyboardFocusEffect$()) {
    var $prevState$$11$$ = this.$_getState$();
    this.$_isShowingKeyboardFocusEffect$ = D.$JSCompiler_alias_FALSE$$;
    this.$_dataLayer$.$getOptions$().focusRenderer ? (0,D.$JSCompiler_StaticMethods__callCustomRenderer$$)(this, this.$_dataLayer$.$getOptions$().focusRenderer, this.$_getState$(), $prevState$$11$$) : this.$processDefaultFocusEffect$(D.$JSCompiler_alias_FALSE$$)
  }
};
D.$JSCompiler_prototypeAlias$$.$isShowingKeyboardFocusEffect$ = (0,D.$JSCompiler_get$$)("$_isShowingKeyboardFocusEffect$");
D.$JSCompiler_prototypeAlias$$.$HandleZoomEvent$ = function $$JSCompiler_prototypeAlias$$$$HandleZoomEvent$$($pzcMatrix$$17$$) {
  this.$Displayable$.getParent() && (this.$_zoom$ = $pzcMatrix$$17$$.$_a$, this.$__recenter$())
};
D.$JSCompiler_prototypeAlias$$.$positionLabel$ = function $$JSCompiler_prototypeAlias$$$$positionLabel$$() {
  if(this.$_label$) {
    this.$_label$.$alignCenter$();
    var $x$$277$$ = this.$Displayable$.$getCx$() * this.$_zoom$, $markerY$$2_y$$249$$ = this.$Displayable$.$getCy$() * this.$_zoom$, $markerH$$ = this.$Displayable$.getHeight(), $markerType$$1$$ = this.$Displayable$ instanceof D.$DvtSimpleMarker$$ ? this.$Displayable$.$getType$() : "image", $position$$61$$ = this.$_data$.labelPosition;
    "top" == $position$$61$$ ? ($markerY$$2_y$$249$$ = $markerY$$2_y$$249$$ - $markerH$$ / 2 - 4, this.$_label$.$alignBottom$()) : "bottom" == $position$$61$$ ? ($markerY$$2_y$$249$$ += $markerH$$ / 2, this.$_label$.$alignTop$()) : ($markerY$$2_y$$249$$ = "triangleUp" == $markerType$$1$$ ? $markerY$$2_y$$249$$ + $markerH$$ / 6 : "triangleDown" == $markerType$$1$$ ? $markerY$$2_y$$249$$ - $markerH$$ / 6 : $markerY$$2_y$$249$$, this.$_label$.$alignMiddle$());
    this.$_label$.$setX$($x$$277$$).$setY$($markerY$$2_y$$249$$)
  }
};
D.$JSCompiler_prototypeAlias$$.$__recenter$ = function $$JSCompiler_prototypeAlias$$$$__recenter$$() {
  var $width$$159$$ = this.$Displayable$.getWidth(), $height$$144$$ = this.$Displayable$.getHeight();
  if($width$$159$$ != D.$JSCompiler_alias_NULL$$ && $height$$144$$ != D.$JSCompiler_alias_NULL$$ && this.$Displayable$.getParent()) {
    var $rotation$$7_shapeY$$ = 0, $shapeX$$ = this.$_center$.x, $rotation$$7_shapeY$$ = this.$_center$.y;
    this.$Displayable$.$getRotation$ && ($rotation$$7_shapeY$$ = this.$Displayable$.$getRotation$(), $shapeX$$ = this.$_center$.x * window.Math.cos($rotation$$7_shapeY$$) - this.$_center$.y * window.Math.sin($rotation$$7_shapeY$$), $rotation$$7_shapeY$$ = this.$_center$.x * window.Math.sin($rotation$$7_shapeY$$) + this.$_center$.y * window.Math.cos($rotation$$7_shapeY$$));
    $shapeX$$ = this.$_center$.x * this.$_zoom$ - $shapeX$$;
    $rotation$$7_shapeY$$ = this.$_center$.y * this.$_zoom$ - $rotation$$7_shapeY$$;
    this.$Displayable$ instanceof D.$DvtCustomDataItem$$ && ($shapeX$$ += this.$_center$.x - $width$$159$$ / 2, $rotation$$7_shapeY$$ += this.$_center$.y - $height$$144$$ / 2);
    (0,D.$JSCompiler_StaticMethods_setTranslate$$)(this.$Displayable$, $shapeX$$, $rotation$$7_shapeY$$);
    (0,D.$DvtAgent$workaroundFirefoxRepaint$$)(this.$Displayable$);
    this.$positionLabel$()
  }
};
D.$JSCompiler_prototypeAlias$$.$animateUpdate$ = function $$JSCompiler_prototypeAlias$$$$animateUpdate$$($handler$$62$$, $oldObj$$4$$) {
  var $anim$$40$$ = new D.$DvtCustomAnimation$$(this.$_view$.$getCtx$(), this.$Displayable$, this.$getDataLayer$().$getAnimationDuration$()), $oldDisplayable$$2$$ = $oldObj$$4$$.$getDisplayable$();
  if(this.$Displayable$.$getFill$) {
    var $endLabelFill_endLabelX_endLabelY_endRect$$1_endRotation_startFill$$3$$ = $oldDisplayable$$2$$.$getFill$(), $endFill$$4_startLabelX_startLabelY_startRect$$1_startRotation$$ = this.$Displayable$.$getFill$();
    $endFill$$4_startLabelX_startLabelY_startRect$$1_startRotation$$ instanceof D.$DvtSolidFill$$ && !($endFill$$4_startLabelX_startLabelY_startRect$$1_startRotation$$.$getColor$() == $endLabelFill_endLabelX_endLabelY_endRect$$1_endRotation_startFill$$3$$.$getColor$() && $endFill$$4_startLabelX_startLabelY_startRect$$1_startRotation$$.$getAlpha$() == $endLabelFill_endLabelX_endLabelY_endRect$$1_endRotation_startFill$$3$$.$getAlpha$()) && (this.$Displayable$.$setFill$($endLabelFill_endLabelX_endLabelY_endRect$$1_endRotation_startFill$$3$$), 
    $oldObj$$4$$.$getLabel$() && this.$_label$ && ($endLabelFill_endLabelX_endLabelY_endRect$$1_endRotation_startFill$$3$$ = this.$_label$.$getFill$(), this.$_label$.$setFill$($oldObj$$4$$.$getLabel$().$getFill$().$clone$()), (0,D.$JSCompiler_StaticMethods_addProp$$)($anim$$40$$.$_animator$, "typeFill", this.$_label$, this.$_label$.$getFill$, this.$_label$.$setFill$, $endLabelFill_endLabelX_endLabelY_endRect$$1_endRotation_startFill$$3$$)), (0,D.$JSCompiler_StaticMethods_addProp$$)($anim$$40$$.$_animator$, 
    "typeFill", this.$Displayable$, this.$Displayable$.$getFill$, this.$Displayable$.$setFill$, $endFill$$4_startLabelX_startLabelY_startRect$$1_startRotation$$))
  }
  if(this.$Displayable$.$getCenterDimensions$ && ($endFill$$4_startLabelX_startLabelY_startRect$$1_startRotation$$ = $oldObj$$4$$.$getDisplayable$().$getCenterDimensions$(), $endLabelFill_endLabelX_endLabelY_endRect$$1_endRotation_startFill$$3$$ = this.$Displayable$.$getCenterDimensions$(), $endFill$$4_startLabelX_startLabelY_startRect$$1_startRotation$$.x != $endLabelFill_endLabelX_endLabelY_endRect$$1_endRotation_startFill$$3$$.x || $endFill$$4_startLabelX_startLabelY_startRect$$1_startRotation$$.y != 
  $endLabelFill_endLabelX_endLabelY_endRect$$1_endRotation_startFill$$3$$.y || $endFill$$4_startLabelX_startLabelY_startRect$$1_startRotation$$.$w$ != $endLabelFill_endLabelX_endLabelY_endRect$$1_endRotation_startFill$$3$$.$w$ || $endFill$$4_startLabelX_startLabelY_startRect$$1_startRotation$$.$h$ != $endLabelFill_endLabelX_endLabelY_endRect$$1_endRotation_startFill$$3$$.$h$)) {
    this.$Displayable$.$setCenterDimensions$($endFill$$4_startLabelX_startLabelY_startRect$$1_startRotation$$), (0,D.$JSCompiler_StaticMethods_addProp$$)($anim$$40$$.$_animator$, "typeRectangle", this.$Displayable$, this.$Displayable$.$getCenterDimensions$, this.$Displayable$.$setCenterDimensions$, $endLabelFill_endLabelX_endLabelY_endRect$$1_endRotation_startFill$$3$$)
  }
  $endFill$$4_startLabelX_startLabelY_startRect$$1_startRotation$$ = $oldDisplayable$$2$$.$getRotation$();
  $endLabelFill_endLabelX_endLabelY_endRect$$1_endRotation_startFill$$3$$ = this.$Displayable$.$getRotation$();
  if($endFill$$4_startLabelX_startLabelY_startRect$$1_startRotation$$ != $endLabelFill_endLabelX_endLabelY_endRect$$1_endRotation_startFill$$3$$) {
    var $diffRotation_startCenter$$ = $endFill$$4_startLabelX_startLabelY_startRect$$1_startRotation$$ - $endLabelFill_endLabelX_endLabelY_endRect$$1_endRotation_startFill$$3$$;
    $diffRotation_startCenter$$ > window.Math.PI ? $endFill$$4_startLabelX_startLabelY_startRect$$1_startRotation$$ -= 2 * window.Math.PI : $diffRotation_startCenter$$ < -window.Math.PI && ($endFill$$4_startLabelX_startLabelY_startRect$$1_startRotation$$ += 2 * window.Math.PI);
    this.$Displayable$.$setRotation$($endFill$$4_startLabelX_startLabelY_startRect$$1_startRotation$$);
    (0,D.$JSCompiler_StaticMethods_addProp$$)($anim$$40$$.$_animator$, "typeNumber", this.$Displayable$, this.$Displayable$.$getRotation$, this.$Displayable$.$setRotation$, $endLabelFill_endLabelX_endLabelY_endRect$$1_endRotation_startFill$$3$$)
  }
  var $diffRotation_startCenter$$ = $oldObj$$4$$.$getCenter$(), $endCenter$$ = this.$getCenter$();
  if($diffRotation_startCenter$$ && $endCenter$$ && ($diffRotation_startCenter$$.x != $endCenter$$.x || $diffRotation_startCenter$$.y != $endCenter$$.y || $endFill$$4_startLabelX_startLabelY_startRect$$1_startRotation$$ != $endLabelFill_endLabelX_endLabelY_endRect$$1_endRotation_startFill$$3$$)) {
    this.$setCenter$(new D.$DvtPoint$$($diffRotation_startCenter$$.x, $diffRotation_startCenter$$.y)), (0,D.$JSCompiler_StaticMethods_addProp$$)($anim$$40$$.$_animator$, "typePoint", this, this.$getCenter$, this.$setCenter$, new D.$DvtPoint$$($endCenter$$.x, $endCenter$$.y))
  }
  this.$_label$ && $oldObj$$4$$.$getLabel$() ? ($endFill$$4_startLabelX_startLabelY_startRect$$1_startRotation$$ = $oldObj$$4$$.$getLabel$().$getX$(), $endLabelFill_endLabelX_endLabelY_endRect$$1_endRotation_startFill$$3$$ = this.$_label$.$getX$(), $endFill$$4_startLabelX_startLabelY_startRect$$1_startRotation$$ != $endLabelFill_endLabelX_endLabelY_endRect$$1_endRotation_startFill$$3$$ && (this.$_label$.$setX$($endFill$$4_startLabelX_startLabelY_startRect$$1_startRotation$$), (0,D.$JSCompiler_StaticMethods_addProp$$)($anim$$40$$.$_animator$, 
  "typeNumber", this.$_label$, this.$_label$.$getX$, this.$_label$.$setX$, $endLabelFill_endLabelX_endLabelY_endRect$$1_endRotation_startFill$$3$$)), $endFill$$4_startLabelX_startLabelY_startRect$$1_startRotation$$ = $oldObj$$4$$.$getLabel$().$getY$(), $endLabelFill_endLabelX_endLabelY_endRect$$1_endRotation_startFill$$3$$ = this.$_label$.$getY$(), $endFill$$4_startLabelX_startLabelY_startRect$$1_startRotation$$ != $endLabelFill_endLabelX_endLabelY_endRect$$1_endRotation_startFill$$3$$ && (this.$_label$.$setY$($endFill$$4_startLabelX_startLabelY_startRect$$1_startRotation$$), 
  (0,D.$JSCompiler_StaticMethods_addProp$$)($anim$$40$$.$_animator$, "typeNumber", this.$_label$, this.$_label$.$getY$, this.$_label$.$setY$, $endLabelFill_endLabelX_endLabelY_endRect$$1_endRotation_startFill$$3$$)), $oldObj$$4$$.$getLabel$().$setAlpha$(0)) : $oldObj$$4$$.$getLabel$() && $oldObj$$4$$.$getLabel$().$setAlpha$(0);
  $oldDisplayable$$2$$.$setAlpha$(0);
  $handler$$62$$.add($anim$$40$$, 1)
};
D.$JSCompiler_prototypeAlias$$.$animateDelete$ = function $$JSCompiler_prototypeAlias$$$$animateDelete$$($handler$$63$$) {
  var $anim$$41_fadeObjs$$ = [this.$Displayable$], $label$$97$$ = this.$getLabel$();
  $label$$97$$ && $anim$$41_fadeObjs$$.push($label$$97$$);
  $anim$$41_fadeObjs$$ = new D.$DvtAnimFadeOut$$(this.$_view$.$getCtx$(), $anim$$41_fadeObjs$$, this.$getDataLayer$().$getAnimationDuration$());
  $handler$$63$$.add($anim$$41_fadeObjs$$, 0)
};
D.$JSCompiler_prototypeAlias$$.$animateInsert$ = function $$JSCompiler_prototypeAlias$$$$animateInsert$$($handler$$64$$) {
  var $anim$$42_fadeObjs$$1$$ = [this.$Displayable$];
  this.$Displayable$.$setAlpha$(0);
  var $label$$98$$ = this.$getLabel$();
  $label$$98$$ && ($label$$98$$.$setAlpha$(0), $anim$$42_fadeObjs$$1$$.push($label$$98$$));
  $anim$$42_fadeObjs$$1$$ = new D.$DvtAnimFadeIn$$(this.$_view$.$getCtx$(), $anim$$42_fadeObjs$$1$$, this.$getDataLayer$().$getAnimationDuration$());
  $handler$$64$$.add($anim$$42_fadeObjs$$1$$, 2)
};
D.$JSCompiler_prototypeAlias$$.$processDefaultSelectionEffect$ = function $$JSCompiler_prototypeAlias$$$$processDefaultSelectionEffect$$($selected$$44$$) {
  this.$Displayable$.$setSelected$ && this.$Displayable$.$setSelected$($selected$$44$$)
};
D.$JSCompiler_prototypeAlias$$.$processDefaultFocusEffect$ = function $$JSCompiler_prototypeAlias$$$$processDefaultFocusEffect$$($focused$$3$$) {
  this.$processDefaultHoverEffect$($focused$$3$$)
};
D.$JSCompiler_prototypeAlias$$.$processDefaultHoverEffect$ = function $$JSCompiler_prototypeAlias$$$$processDefaultHoverEffect$$($hovered$$2$$) {
  $hovered$$2$$ ? this.$Displayable$.$showHoverEffect$ && this.$Displayable$.$showHoverEffect$() : this.$Displayable$.$hideHoverEffect$ && !this.$isShowingKeyboardFocusEffect$() && this.$Displayable$.$hideHoverEffect$()
};
D.$JSCompiler_StaticMethods__callCustomRenderer$$ = function $$JSCompiler_StaticMethods__callCustomRenderer$$$($JSCompiler_StaticMethods__callCustomRenderer$self_JSCompiler_StaticMethods_updateRootElement$self$$inline_8320$$, $newRootElem_renderer$$11$$, $context$$611_state$$97$$, $prevState$$12$$) {
  if($JSCompiler_StaticMethods__callCustomRenderer$self_JSCompiler_StaticMethods_updateRootElement$self$$inline_8320$$.$Displayable$ instanceof D.$DvtCustomDataItem$$) {
    var $contextHandler$$1$$ = $JSCompiler_StaticMethods__callCustomRenderer$self_JSCompiler_StaticMethods_updateRootElement$self$$inline_8320$$.$_view$.$getOptions$()._contextHandler;
    $contextHandler$$1$$ && ($context$$611_state$$97$$ = $contextHandler$$1$$($JSCompiler_StaticMethods__callCustomRenderer$self_JSCompiler_StaticMethods_updateRootElement$self$$inline_8320$$.$Displayable$.$getElem$(), $JSCompiler_StaticMethods__callCustomRenderer$self_JSCompiler_StaticMethods_updateRootElement$self$$inline_8320$$.$Displayable$.$getRootElement$(), $JSCompiler_StaticMethods__callCustomRenderer$self_JSCompiler_StaticMethods_updateRootElement$self$$inline_8320$$.$_data$, $context$$611_state$$97$$, 
    $prevState$$12$$), $newRootElem_renderer$$11$$ = $newRootElem_renderer$$11$$($context$$611_state$$97$$), $JSCompiler_StaticMethods__callCustomRenderer$self_JSCompiler_StaticMethods_updateRootElement$self$$inline_8320$$ = $JSCompiler_StaticMethods__callCustomRenderer$self_JSCompiler_StaticMethods_updateRootElement$self$$inline_8320$$.$Displayable$, $JSCompiler_StaticMethods__callCustomRenderer$self_JSCompiler_StaticMethods_updateRootElement$self$$inline_8320$$.$_dataItem$ !== $newRootElem_renderer$$11$$ && 
    ($JSCompiler_StaticMethods__callCustomRenderer$self_JSCompiler_StaticMethods_updateRootElement$self$$inline_8320$$.$_dataItem$ && ($JSCompiler_StaticMethods__callCustomRenderer$self_JSCompiler_StaticMethods_updateRootElement$self$$inline_8320$$.$_dataItem$ instanceof D.$DvtBaseComponent$$ ? $JSCompiler_StaticMethods__callCustomRenderer$self_JSCompiler_StaticMethods_updateRootElement$self$$inline_8320$$.removeChild($JSCompiler_StaticMethods__callCustomRenderer$self_JSCompiler_StaticMethods_updateRootElement$self$$inline_8320$$.$_dataItem$) : 
    $JSCompiler_StaticMethods__callCustomRenderer$self_JSCompiler_StaticMethods_updateRootElement$self$$inline_8320$$.$getElem$().removeChild($JSCompiler_StaticMethods__callCustomRenderer$self_JSCompiler_StaticMethods_updateRootElement$self$$inline_8320$$.$_dataItem$)), $newRootElem_renderer$$11$$ instanceof D.$DvtBaseComponent$$ ? $JSCompiler_StaticMethods__callCustomRenderer$self_JSCompiler_StaticMethods_updateRootElement$self$$inline_8320$$.$addChild$($newRootElem_renderer$$11$$) : $JSCompiler_StaticMethods__callCustomRenderer$self_JSCompiler_StaticMethods_updateRootElement$self$$inline_8320$$.$getElem$().appendChild($newRootElem_renderer$$11$$), 
    $JSCompiler_StaticMethods__callCustomRenderer$self_JSCompiler_StaticMethods_updateRootElement$self$$inline_8320$$.$_dataItem$ = $newRootElem_renderer$$11$$))
  }
};
D.$DvtMapObjPeer$$.prototype.$_getState$ = function $$DvtMapObjPeer$$$$$_getState$$() {
  return{hovered:this.$_isShowingHoverEffect$, selected:this.$isSelected$(), focused:this.$isShowingKeyboardFocusEffect$()}
};
D.$DvtMapAreaPeer$$ = function $$DvtMapAreaPeer$$$($data$$99$$, $dataLayer$$1$$, $displayable$$85$$, $label$$84$$) {
  this.Init($data$$99$$, $dataLayer$$1$$, $displayable$$85$$, $label$$84$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtMapAreaPeer$$, D.$DvtMapObjPeer$$, "DvtMapAreaPeer");
D.$JSCompiler_prototypeAlias$$ = D.$DvtMapAreaPeer$$.prototype;
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($data$$100$$, $dataLayer$$2$$, $displayable$$86$$, $label$$85$$) {
  D.$DvtMapAreaPeer$$.$superclass$.Init.call(this, $data$$100$$, $dataLayer$$2$$, $displayable$$86$$, $label$$85$$)
};
D.$JSCompiler_prototypeAlias$$.$setSelected$ = function $$JSCompiler_prototypeAlias$$$$setSelected$$($selected$$42$$) {
  this.$isSelectable$() && ($selected$$42$$ && !this.$_isShowingHoverEffect$ && this.$_dataAreaLayer$.$addChild$(this.$Displayable$), D.$DvtMapAreaPeer$$.$superclass$.$setSelected$.call(this, $selected$$42$$))
};
D.$JSCompiler_prototypeAlias$$.$showHoverEffect$ = function $$JSCompiler_prototypeAlias$$$$showHoverEffect$$() {
  this.$_dataAreaLayer$.$addChild$(this.$Displayable$);
  D.$DvtMapAreaPeer$$.$superclass$.$showHoverEffect$.call(this)
};
D.$JSCompiler_prototypeAlias$$.$hideHoverEffect$ = function $$JSCompiler_prototypeAlias$$$$hideHoverEffect$$() {
  this.$isSelected$() ? this.$_dataAreaLayer$.$addChild$(this.$Displayable$) : this.$_dataAreaLayer$.$addChildAt$(this.$Displayable$, 0);
  D.$DvtMapAreaPeer$$.$superclass$.$hideHoverEffect$.call(this)
};
D.$JSCompiler_prototypeAlias$$.$isDrilled$ = function $$JSCompiler_prototypeAlias$$$$isDrilled$$() {
  return this.$Displayable$.$isDrilled$()
};
D.$JSCompiler_prototypeAlias$$.$setDrilled$ = function $$JSCompiler_prototypeAlias$$$$setDrilled$$($drilled$$1$$) {
  $drilled$$1$$ ? this.$_dataAreaLayer$.$addChild$(this.$Displayable$) : this.$_dataAreaLayer$.$addChildAt$(this.$Displayable$, 0);
  this.$Displayable$.$setDrilled$($drilled$$1$$)
};
D.$JSCompiler_prototypeAlias$$.$HandleZoomEvent$ = function $$JSCompiler_prototypeAlias$$$$HandleZoomEvent$$($pzcMatrix$$5$$) {
  D.$DvtMapAreaPeer$$.$superclass$.$HandleZoomEvent$.call(this, $pzcMatrix$$5$$);
  this.$Displayable$.getParent() && ((0,D.$JSCompiler_StaticMethods_handleZoomEvent$$)(this.$Displayable$, $pzcMatrix$$5$$), this.$isDrilled$() || this.$positionLabel$($pzcMatrix$$5$$))
};
D.$JSCompiler_prototypeAlias$$.$positionLabel$ = function $$JSCompiler_prototypeAlias$$$$positionLabel$$($pzcMatrix$$6$$) {
  this.$getLabel$() && this.$getLabel$().update($pzcMatrix$$6$$)
};
D.$JSCompiler_prototypeAlias$$.$GetNavigables$ = function $$JSCompiler_prototypeAlias$$$$GetNavigables$$() {
  return(0,D.$JSCompiler_StaticMethods_getNavigableAreas$$)(this.$getDataLayer$().$_tmap$)
};
D.$JSCompiler_prototypeAlias$$.$animateUpdate$ = function $$JSCompiler_prototypeAlias$$$$animateUpdate$$($handler$$61$$, $oldObj$$3$$) {
  D.$DvtMapAreaPeer$$.$superclass$.$animateUpdate$.call(this, $handler$$61$$, $oldObj$$3$$);
  this.$getDataLayer$().$_parentLayer$.$_renderArea$[this.$getLocation$()] = D.$JSCompiler_alias_FALSE$$
};
D.$JSCompiler_prototypeAlias$$.$__recenter$ = (0,D.$JSCompiler_emptyFn$$)();
D.$DvtMapArea$$ = function $$DvtMapArea$$$($context$$606$$, $dvtShape$$, $areaName$$, $bSupportsVectorEffects$$2$$) {
  this.Init($context$$606$$, $dvtShape$$, $areaName$$, $bSupportsVectorEffects$$2$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtMapArea$$, D.$DvtContainer$$, "DvtMapArea");
D.$JSCompiler_prototypeAlias$$ = D.$DvtMapArea$$.prototype;
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($context$$607_stroke$$109$$, $dvtShape$$1$$, $areaName$$1$$, $bSupportsVectorEffects$$3$$) {
  D.$DvtMapArea$$.$superclass$.Init.call(this, $context$$607_stroke$$109$$);
  this.$_isSelected$ = this.$_bSelectable$ = D.$JSCompiler_alias_FALSE$$;
  this.$_areaName$ = $areaName$$1$$;
  this.$_shape$ = $dvtShape$$1$$;
  this.$addChild$(this.$_shape$);
  this.$_bSupportsVectorEffects$ = $bSupportsVectorEffects$$3$$;
  if($context$$607_stroke$$109$$ = $dvtShape$$1$$.$getStroke$()) {
    this.$_areaStrokeWidth$ = $context$$607_stroke$$109$$.getWidth()
  }
};
D.$JSCompiler_prototypeAlias$$.$getTooltip$ = (0,D.$JSCompiler_get$$)("$_tooltip$");
D.$JSCompiler_prototypeAlias$$.$setTooltip$ = (0,D.$JSCompiler_set$$)("$_tooltip$");
D.$JSCompiler_prototypeAlias$$.$getStroke$ = function $$JSCompiler_prototypeAlias$$$$getStroke$$() {
  return this.$_shape$ instanceof D.$DvtShape$$ ? this.$_shape$.$getStroke$() : D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.$setStroke$ = function $$JSCompiler_prototypeAlias$$$$setStroke$$($stroke$$110$$) {
  this.$_shape$ instanceof D.$DvtShape$$ && this.$_shape$.$setStroke$($stroke$$110$$)
};
D.$JSCompiler_prototypeAlias$$.$setFill$ = function $$JSCompiler_prototypeAlias$$$$setFill$$($fill$$74$$) {
  this.$_shape$ instanceof D.$DvtShape$$ && this.$_shape$.$setFill$($fill$$74$$)
};
D.$JSCompiler_prototypeAlias$$.$getFill$ = function $$JSCompiler_prototypeAlias$$$$getFill$$() {
  return this.$_shape$ instanceof D.$DvtShape$$ ? this.$_shape$.$getFill$() : D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.$getCmds$ = function $$JSCompiler_prototypeAlias$$$$getCmds$$() {
  return this.$_shape$ instanceof D.$DvtPath$$ ? this.$_shape$.$getCmds$() : D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.$setCmds$ = function $$JSCompiler_prototypeAlias$$$$setCmds$$($cmds$$30$$) {
  this.$_shape$ instanceof D.$DvtPath$$ && this.$_shape$.$setCmds$($cmds$$30$$)
};
D.$JSCompiler_prototypeAlias$$.$setSrc$ = function $$JSCompiler_prototypeAlias$$$$setSrc$$($src$$23$$) {
  this.$_shape$ instanceof D.$DvtImage$$ && this.$_shape$.$setSrc$($src$$23$$)
};
D.$JSCompiler_prototypeAlias$$.$getDropSiteFeedback$ = function $$JSCompiler_prototypeAlias$$$$getDropSiteFeedback$$() {
  return this.$_shape$.$copyShape$()
};
D.$JSCompiler_prototypeAlias$$.contains = function $$JSCompiler_prototypeAlias$$$contains$($x$$275$$, $y$$247$$) {
  var $dims$$71$$ = this.$getDimensions$();
  return $x$$275$$ >= $dims$$71$$.x && $x$$275$$ <= $dims$$71$$.x + $dims$$71$$.$w$ && $y$$247$$ >= $dims$$71$$.y && $y$$247$$ <= $dims$$71$$.y + $dims$$71$$.$h$
};
D.$JSCompiler_prototypeAlias$$.$HandleZoomEvent$ = function $$JSCompiler_prototypeAlias$$$$HandleZoomEvent$$($pzcMatrix$$1$$) {
  if(!this.$_bSupportsVectorEffects$ && this.$_shape$ && this.$_areaStrokeWidth$) {
    var $zoomStroke$$ = this.$_shape$.$getStroke$().$clone$();
    $zoomStroke$$.$setWidth$(this.$_areaStrokeWidth$ / $pzcMatrix$$1$$.$_a$);
    this.$_shape$.$setStroke$($zoomStroke$$)
  }
};
D.$DvtMapLayer$$ = function $$DvtMapLayer$$$($tmap$$6$$, $layerName$$19$$, $eventHandler$$6$$) {
  this.Init($tmap$$6$$, $layerName$$19$$, $eventHandler$$6$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtMapLayer$$, D.$DvtObj$$, "DvtMapLayer");
D.$JSCompiler_prototypeAlias$$ = D.$DvtMapLayer$$.prototype;
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($tmap$$7$$, $layerName$$20$$, $eventHandler$$7$$) {
  this.$_tmap$ = $tmap$$7$$;
  this.$LayerName$ = $layerName$$20$$;
  this.$EventHandler$ = $eventHandler$$7$$;
  this.$DataLayers$ = {};
  this.$PzcMatrix$ = new D.$DvtMatrix$$
};
D.$JSCompiler_prototypeAlias$$.$PreDataLayerUpdate$ = (0,D.$JSCompiler_emptyFn$$)();
D.$JSCompiler_prototypeAlias$$.$PostDataLayerUpdate$ = (0,D.$JSCompiler_emptyFn$$)();
D.$JSCompiler_prototypeAlias$$.$updateDataLayer$ = function $$JSCompiler_prototypeAlias$$$$updateDataLayer$$($dataLayer$$4$$, $pzcMatrix$$13$$) {
  this.$_animation$ && this.$_animation$.stop(D.$JSCompiler_alias_TRUE$$);
  this.$PzcMatrix$ = $pzcMatrix$$13$$;
  this.$_oldDataLayer$ = this.$getDataLayer$($dataLayer$$4$$.$getClientId$());
  this.$DataLayers$[$dataLayer$$4$$.$getClientId$()] = $dataLayer$$4$$;
  $dataLayer$$4$$.$render$(this.$PzcMatrix$);
  $dataLayer$$4$$.$HandleZoomEvent$(new D.$DvtZoomEvent$$("zoomed"), this.$PzcMatrix$);
  if(this.$_oldDataLayer$) {
    var $anim$$39_oldContainers$$ = $dataLayer$$4$$.$getAnimation$(), $animDur$$2$$ = $dataLayer$$4$$.$getAnimationDuration$();
    if("auto" == $anim$$39_oldContainers$$) {
      var $anim2_animHandler$$1_i$$812$$ = new D.$DvtDataAnimationHandler$$(this.$_tmap$.$getCtx$());
      (0,D.$JSCompiler_StaticMethods_constructAnimation$$)($anim2_animHandler$$1_i$$812$$, this.$_oldDataLayer$.$_dataObjs$.concat(this.$_oldDataLayer$.$_areaObjs$), $dataLayer$$4$$.$_dataObjs$.concat($dataLayer$$4$$.$_areaObjs$));
      this.$_animation$ = $anim2_animHandler$$1_i$$812$$.$getAnimation$()
    }else {
      if(D.$DvtBlackBoxAnimationHandler$$.isSupported($anim$$39_oldContainers$$)) {
        this.$_removeAnimRect$ = D.$JSCompiler_alias_TRUE$$;
        for(var $anim1_bounds1$$ = new D.$DvtRectangle$$(0, 0, this.$_tmap$.getWidth(), this.$_tmap$.getHeight()), $bounds2_oldNonScaledContainers$$ = (0,D.$JSCompiler_StaticMethods_getNonScaledContainers$$)(this.$_oldDataLayer$), $anim2_animHandler$$1_i$$812$$ = 0;$anim2_animHandler$$1_i$$812$$ < $bounds2_oldNonScaledContainers$$.length;$anim2_animHandler$$1_i$$812$$++) {
          var $rect$$51$$ = new D.$DvtRect$$(this.$_tmap$.$getCtx$(), 0, 0, this.$_tmap$.getWidth(), this.$_tmap$.getHeight());
          $rect$$51$$.$setFill$(D.$JSCompiler_alias_NULL$$);
          $bounds2_oldNonScaledContainers$$[$anim2_animHandler$$1_i$$812$$].$addChild$($rect$$51$$)
        }
        for(var $newNonScaledContainers_oldScaledContainers$$ = (0,D.$JSCompiler_StaticMethods_getNonScaledContainers$$)($dataLayer$$4$$), $anim2_animHandler$$1_i$$812$$ = 0;$anim2_animHandler$$1_i$$812$$ < $newNonScaledContainers_oldScaledContainers$$.length;$anim2_animHandler$$1_i$$812$$++) {
          $rect$$51$$ = new D.$DvtRect$$(this.$_tmap$.$getCtx$(), 0, 0, this.$_tmap$.getWidth(), this.$_tmap$.getHeight()), $rect$$51$$.$setFill$(D.$JSCompiler_alias_NULL$$), $newNonScaledContainers_oldScaledContainers$$[$anim2_animHandler$$1_i$$812$$].$addChild$($rect$$51$$)
        }
        $anim1_bounds1$$ = D.$DvtBlackBoxAnimationHandler$$.$getCombinedAnimation$(this.$_tmap$.$getCtx$(), $anim$$39_oldContainers$$, $bounds2_oldNonScaledContainers$$, $newNonScaledContainers_oldScaledContainers$$, $anim1_bounds1$$, $animDur$$2$$);
        $bounds2_oldNonScaledContainers$$ = new D.$DvtRectangle$$(0, 0, this.$_tmap$.getWidth() / this.$PzcMatrix$.$_a$, this.$_tmap$.getHeight() / this.$PzcMatrix$.$_a$);
        $newNonScaledContainers_oldScaledContainers$$ = [this.$_oldDataLayer$.$_dataAreaLayer$];
        for($anim2_animHandler$$1_i$$812$$ = 0;$anim2_animHandler$$1_i$$812$$ < $newNonScaledContainers_oldScaledContainers$$.length;$anim2_animHandler$$1_i$$812$$++) {
          $rect$$51$$ = new D.$DvtRect$$(this.$_tmap$.$getCtx$(), 0, 0, this.$_tmap$.getWidth() / this.$PzcMatrix$.$_a$, this.$_tmap$.getHeight() / this.$PzcMatrix$.$_a$), $rect$$51$$.$setFill$(D.$JSCompiler_alias_NULL$$), $newNonScaledContainers_oldScaledContainers$$[$anim2_animHandler$$1_i$$812$$].$addChild$($rect$$51$$)
        }
        for(var $newScaledContainers$$ = [$dataLayer$$4$$.$_dataAreaLayer$], $anim2_animHandler$$1_i$$812$$ = 0;$anim2_animHandler$$1_i$$812$$ < $newScaledContainers$$.length;$anim2_animHandler$$1_i$$812$$++) {
          $rect$$51$$ = new D.$DvtRect$$(this.$_tmap$.$getCtx$(), 0, 0, this.$_tmap$.getWidth() / this.$PzcMatrix$.$_a$, this.$_tmap$.getHeight() / this.$PzcMatrix$.$_a$), $rect$$51$$.$setFill$(D.$JSCompiler_alias_NULL$$), $newScaledContainers$$[$anim2_animHandler$$1_i$$812$$].$addChild$($rect$$51$$)
        }
        $anim2_animHandler$$1_i$$812$$ = D.$DvtBlackBoxAnimationHandler$$.$getCombinedAnimation$(this.$_tmap$.$getCtx$(), $anim$$39_oldContainers$$, $newNonScaledContainers_oldScaledContainers$$, $newScaledContainers$$, $bounds2_oldNonScaledContainers$$, $animDur$$2$$);
        this.$_animation$ = new D.$DvtParallelPlayable$$(this.$_tmap$.$getCtx$(), [$anim1_bounds1$$, $anim2_animHandler$$1_i$$812$$])
      }else {
        $anim$$39_oldContainers$$ = [this.$_oldDataLayer$.$_dataAreaLayer$, this.$_oldDataLayer$.$_dataPointLayer$, this.$_oldDataLayer$.$_dataLabelLayer$];
        for($anim2_animHandler$$1_i$$812$$ = 0;$anim2_animHandler$$1_i$$812$$ < $anim$$39_oldContainers$$.length;$anim2_animHandler$$1_i$$812$$++) {
          $anim$$39_oldContainers$$[$anim2_animHandler$$1_i$$812$$].getParent().removeChild($anim$$39_oldContainers$$[$anim2_animHandler$$1_i$$812$$])
        }
      }
    }
    this.$PreDataLayerUpdate$();
    if(this.$_animation$) {
      this.$EventHandler$.$removeListeners$(this.$_callbackObj$);
      var $thisRef$$41$$ = this;
      this.$_animation$.$setOnEnd$(function() {
        $thisRef$$41$$.$OnAnimationEnd$($dataLayer$$4$$)
      }, this);
      this.$_animation$.play()
    }
  }else {
    this.$PostDataLayerUpdate$(), (0,D.$JSCompiler_StaticMethods_OnUpdateLayerEnd$$)(this.$_tmap$)
  }
};
D.$JSCompiler_prototypeAlias$$.$getDataLayer$ = function $$JSCompiler_prototypeAlias$$$$getDataLayer$$($clientId$$6$$) {
  return this.$DataLayers$ ? this.$DataLayers$[$clientId$$6$$] : D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.$render$ = function $$JSCompiler_prototypeAlias$$$$render$$($pzcMatrix$$14$$) {
  this.$PzcMatrix$ = $pzcMatrix$$14$$;
  for(var $id$$291$$ in this.$DataLayers$) {
    this.$DataLayers$[$id$$291$$].$render$($pzcMatrix$$14$$)
  }
};
D.$JSCompiler_prototypeAlias$$.reset = function $$JSCompiler_prototypeAlias$$$reset$($fadeOutContainer$$, $doNotResetAreas$$2$$) {
  for(var $id$$292$$ in this.$DataLayers$) {
    this.$DataLayers$[$id$$292$$].reset($fadeOutContainer$$, $doNotResetAreas$$2$$)
  }
};
D.$JSCompiler_prototypeAlias$$.$HandleZoomEvent$ = function $$JSCompiler_prototypeAlias$$$$HandleZoomEvent$$($event$$760$$, $pzcMatrix$$15$$) {
  this.$PzcMatrix$ = $pzcMatrix$$15$$;
  for(var $id$$293$$ in this.$DataLayers$) {
    this.$DataLayers$[$id$$293$$].$HandleZoomEvent$($event$$760$$, $pzcMatrix$$15$$)
  }
};
D.$JSCompiler_prototypeAlias$$.$HandlePanEvent$ = function $$JSCompiler_prototypeAlias$$$$HandlePanEvent$$($pzcMatrix$$16$$) {
  this.$PzcMatrix$ = $pzcMatrix$$16$$;
  for(var $id$$294$$ in this.$DataLayers$) {
    this.$DataLayers$[$id$$294$$].$HandlePanEvent$($pzcMatrix$$16$$)
  }
};
D.$JSCompiler_prototypeAlias$$.$OnAnimationEnd$ = function $$JSCompiler_prototypeAlias$$$$OnAnimationEnd$$($dataLayer$$5_newScaledContainers$$1$$) {
  if(this.$_oldDataLayer$) {
    for(var $newNonScaledContainers$$1_oldContainers$$1$$ = [this.$_oldDataLayer$.$_dataAreaLayer$, this.$_oldDataLayer$.$_dataPointLayer$, this.$_oldDataLayer$.$_dataLabelLayer$], $i$$813$$ = 0;$i$$813$$ < $newNonScaledContainers$$1_oldContainers$$1$$.length;$i$$813$$++) {
      var $parent$$86$$ = $newNonScaledContainers$$1_oldContainers$$1$$[$i$$813$$].getParent();
      $parent$$86$$ && $parent$$86$$.removeChild($newNonScaledContainers$$1_oldContainers$$1$$[$i$$813$$])
    }
  }
  if(this.$_removeAnimRect$) {
    this.$_removeAnimRect$ = D.$JSCompiler_alias_FALSE$$;
    $newNonScaledContainers$$1_oldContainers$$1$$ = (0,D.$JSCompiler_StaticMethods_getNonScaledContainers$$)($dataLayer$$5_newScaledContainers$$1$$);
    for($i$$813$$ = 0;$i$$813$$ < $newNonScaledContainers$$1_oldContainers$$1$$.length;$i$$813$$++) {
      $newNonScaledContainers$$1_oldContainers$$1$$[$i$$813$$].$removeChildAt$($newNonScaledContainers$$1_oldContainers$$1$$[$i$$813$$].$getNumChildren$() - 1)
    }
    $dataLayer$$5_newScaledContainers$$1$$ = [$dataLayer$$5_newScaledContainers$$1$$.$_dataAreaLayer$];
    for($i$$813$$ = 0;$i$$813$$ < $dataLayer$$5_newScaledContainers$$1$$.length;$i$$813$$++) {
      $dataLayer$$5_newScaledContainers$$1$$[$i$$813$$].$removeChildAt$($dataLayer$$5_newScaledContainers$$1$$[$i$$813$$].$getNumChildren$() - 1)
    }
  }
  this.$PostDataLayerUpdate$();
  (0,D.$JSCompiler_StaticMethods_OnUpdateLayerEnd$$)(this.$_tmap$);
  this.$_animation$ = D.$JSCompiler_alias_NULL$$;
  this.$EventHandler$.$addListeners$(this.$_callbackObj$)
};
D.$DvtMapAreaLayer$$ = function $$DvtMapAreaLayer$$$($tmap$$, $layerName$$15$$, $labelDisplay$$1$$, $labelType$$1$$, $eventHandler$$) {
  this.Init($tmap$$, $layerName$$15$$, $labelDisplay$$1$$, $labelType$$1$$, $eventHandler$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtMapAreaLayer$$, D.$DvtMapLayer$$, "DvtMapAreaLayer");
D.$JSCompiler_prototypeAlias$$ = D.$DvtMapAreaLayer$$.prototype;
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($tmap$$1$$, $layerName$$16$$, $labelDisplay$$2$$, $labelType$$2$$, $eventHandler$$1$$) {
  D.$DvtMapAreaLayer$$.$superclass$.Init.call(this, $tmap$$1$$, $layerName$$16$$, $eventHandler$$1$$);
  this.$_labelDisplay$ = $labelDisplay$$2$$;
  this.$_labelType$ = $labelType$$2$$;
  this.$_areaLabels$ = {};
  this.$Areas$ = {};
  this.$AreaShapes$ = {};
  this.$_labelInfo$ = this.$AreaNames$ = D.$JSCompiler_alias_NULL$$;
  this.$_disclosed$ = [];
  this.$_renderArea$ = {};
  this.$_renderLabel$ = {};
  this.$_renderedLabels$ = {};
  this.$AreaContainer$ = new D.$DvtContainer$$(this.$_tmap$.$getCtx$());
  this.$LabelContainer$ = new D.$DvtContainer$$(this.$_tmap$.$getCtx$());
  this.$_tmap$.$_areaLayers$.$addChildAt$(this.$AreaContainer$, 0);
  this.$_tmap$.$_labelLayers$.$addChildAt$(this.$LabelContainer$, 0);
  this.$_dropTarget$ = new D.$DvtThematicMapDropTarget$$(this, this.$_tmap$.$_mapName$)
};
D.$JSCompiler_prototypeAlias$$.$setAnimation$ = (0,D.$JSCompiler_set$$)("$_animType$");
D.$JSCompiler_prototypeAlias$$.$getAnimation$ = (0,D.$JSCompiler_get$$)("$_animType$");
D.$JSCompiler_prototypeAlias$$.$setAnimationDuration$ = (0,D.$JSCompiler_set$$)("$_animDur$");
D.$JSCompiler_prototypeAlias$$.$getAnimationDuration$ = (0,D.$JSCompiler_get$$)("$_animDur$");
D.$JSCompiler_prototypeAlias$$.$getDropTarget$ = (0,D.$JSCompiler_get$$)("$_dropTarget$");
D.$JSCompiler_StaticMethods_setAreaNames$$ = function $$JSCompiler_StaticMethods_setAreaNames$$$($JSCompiler_StaticMethods_setAreaNames$self$$, $values$$16$$) {
  $JSCompiler_StaticMethods_setAreaNames$self$$.$AreaNames$ = $values$$16$$;
  for(var $area$$4$$ in $JSCompiler_StaticMethods_setAreaNames$self$$.$AreaNames$) {
    $JSCompiler_StaticMethods_setAreaNames$self$$.$_renderArea$[$area$$4$$] = D.$JSCompiler_alias_TRUE$$, $JSCompiler_StaticMethods_setAreaNames$self$$.$_renderLabel$[$area$$4$$] = D.$JSCompiler_alias_TRUE$$
  }
};
D.$DvtMapAreaLayer$$.prototype.$getLabelInfoForArea$ = function $$DvtMapAreaLayer$$$$$getLabelInfoForArea$$($area$$7$$) {
  return!this.$_labelInfo$ ? D.$JSCompiler_alias_NULL$$ : this.$_labelInfo$[$area$$7$$]
};
D.$JSCompiler_StaticMethods_getChildrenForArea$$ = function $$JSCompiler_StaticMethods_getChildrenForArea$$$($JSCompiler_StaticMethods_getChildrenForArea$self$$, $area$$8$$) {
  return $JSCompiler_StaticMethods_getChildrenForArea$self$$.$_children$[$area$$8$$] ? $JSCompiler_StaticMethods_getChildrenForArea$self$$.$_children$[$area$$8$$].split(",") : []
};
D.$DvtMapAreaLayer$$.prototype.$getLabelDisplay$ = (0,D.$JSCompiler_get$$)("$_labelDisplay$");
D.$DvtMapAreaLayer$$.prototype.$getLayerDim$ = function $$DvtMapAreaLayer$$$$$getLayerDim$$() {
  if(!this.$_layerDim$) {
    if(this.$_isolatedArea$) {
      this.$_layerDim$ = D.$DvtPathUtils$$.$getDimensions$(D.$DvtPathUtils$$.$createPathArray$(D.$DvtBaseMapManager$$.$getPathForArea$(this.$_tmap$.$_mapName$, this.$LayerName$, this.$_isolatedArea$)))
    }else {
      if("world" != this.$_tmap$.$_mapName$ && "worldRegions" != this.$_tmap$.$_mapName$ && (this.$_layerDim$ = D.$DvtBaseMapManager$$.$getBaseMapDim$(this.$_tmap$.$_mapName$, this.$LayerName$)), !this.$_layerDim$) {
        var $dim$$86$$ = (0,D.$JSCompiler_StaticMethods_getUnion$$)(this.$AreaContainer$.$getDimensions$(), this.$_tmap$.$_dataAreaLayers$.$getDimensions$());
        0 < $dim$$86$$.$w$ && 0 < $dim$$86$$.$h$ && (this.$_layerDim$ = $dim$$86$$)
      }
    }
  }
  return this.$_layerDim$
};
D.$JSCompiler_StaticMethods__createAreaAndLabel$$ = function $$JSCompiler_StaticMethods__createAreaAndLabel$$$($JSCompiler_StaticMethods__createAreaAndLabel$self$$, $area$$12$$, $bForceUpdateArea_label$$80_labelText$$1_mapArea$$) {
  var $areaDim_areaShape$$ = $JSCompiler_StaticMethods__createAreaAndLabel$self$$.$AreaShapes$[$area$$12$$];
  if($areaDim_areaShape$$ && (($bForceUpdateArea_label$$80_labelText$$1_mapArea$$ || !$JSCompiler_StaticMethods__createAreaAndLabel$self$$.$Areas$[$area$$12$$]) && $JSCompiler_StaticMethods__createAreaAndLabel$self$$.$updateAreaShape$($area$$12$$), $JSCompiler_StaticMethods__createAreaAndLabel$self$$.$Areas$[$area$$12$$] || ($bForceUpdateArea_label$$80_labelText$$1_mapArea$$ = new D.$DvtMapArea$$($JSCompiler_StaticMethods__createAreaAndLabel$self$$.$_tmap$.$getCtx$(), $areaDim_areaShape$$, $area$$12$$, 
  $JSCompiler_StaticMethods__createAreaAndLabel$self$$.$_tmap$.$_bSupportsVectorEffects$), $JSCompiler_StaticMethods__createAreaAndLabel$self$$.$Areas$[$area$$12$$] = $bForceUpdateArea_label$$80_labelText$$1_mapArea$$, $JSCompiler_StaticMethods__createAreaAndLabel$self$$.$EventHandler$.$associate$($areaDim_areaShape$$, $bForceUpdateArea_label$$80_labelText$$1_mapArea$$), $bForceUpdateArea_label$$80_labelText$$1_mapArea$$.$setTooltip$($JSCompiler_StaticMethods__createAreaAndLabel$self$$.$AreaNames$ && 
  $JSCompiler_StaticMethods__createAreaAndLabel$self$$.$AreaNames$[$area$$12$$] ? $JSCompiler_StaticMethods__createAreaAndLabel$self$$.$AreaNames$[$area$$12$$][1] : D.$JSCompiler_alias_NULL$$)), $JSCompiler_StaticMethods__createAreaAndLabel$self$$.$_renderLabel$[$area$$12$$] && ($bForceUpdateArea_label$$80_labelText$$1_mapArea$$ = $JSCompiler_StaticMethods__createAreaAndLabel$self$$.$_areaLabels$[$area$$12$$], !$bForceUpdateArea_label$$80_labelText$$1_mapArea$$ && ("off" != $JSCompiler_StaticMethods__createAreaAndLabel$self$$.$_labelDisplay$ && 
  $JSCompiler_StaticMethods__createAreaAndLabel$self$$.$AreaNames$) && ($bForceUpdateArea_label$$80_labelText$$1_mapArea$$ = "short" == $JSCompiler_StaticMethods__createAreaAndLabel$self$$.$_labelType$ ? $JSCompiler_StaticMethods__createAreaAndLabel$self$$.$AreaNames$[$area$$12$$][0] : $JSCompiler_StaticMethods__createAreaAndLabel$self$$.$AreaNames$[$area$$12$$][1])))) {
    $JSCompiler_StaticMethods__createAreaAndLabel$self$$.$_labelInfo$ && $JSCompiler_StaticMethods__createAreaAndLabel$self$$.$_labelInfo$[$area$$12$$] ? $bForceUpdateArea_label$$80_labelText$$1_mapArea$$ = new D.$DvtMapLabel$$($JSCompiler_StaticMethods__createAreaAndLabel$self$$.$_tmap$.$getCtx$(), $bForceUpdateArea_label$$80_labelText$$1_mapArea$$, $JSCompiler_StaticMethods__createAreaAndLabel$self$$.$_labelInfo$[$area$$12$$], $JSCompiler_StaticMethods__createAreaAndLabel$self$$.$_labelDisplay$, 
    $JSCompiler_StaticMethods__createAreaAndLabel$self$$.$LabelContainer$, $JSCompiler_StaticMethods__createAreaAndLabel$self$$.$_tmap$.$_bSupportsVectorEffects$) : ($areaDim_areaShape$$ = (0,D.$DvtDisplayableUtils$getDimensionsForced$$)($JSCompiler_StaticMethods__createAreaAndLabel$self$$.$_tmap$.$getCtx$(), $areaDim_areaShape$$), $bForceUpdateArea_label$$80_labelText$$1_mapArea$$ = new D.$DvtMapLabel$$($JSCompiler_StaticMethods__createAreaAndLabel$self$$.$_tmap$.$getCtx$(), $bForceUpdateArea_label$$80_labelText$$1_mapArea$$, 
    [[$areaDim_areaShape$$.x, $areaDim_areaShape$$.y, $areaDim_areaShape$$.$w$, $areaDim_areaShape$$.$h$]], $JSCompiler_StaticMethods__createAreaAndLabel$self$$.$_labelDisplay$, $JSCompiler_StaticMethods__createAreaAndLabel$self$$.$LabelContainer$, $JSCompiler_StaticMethods__createAreaAndLabel$self$$.$_tmap$.$_bSupportsVectorEffects$)), $JSCompiler_StaticMethods__createAreaAndLabel$self$$.$_areaLabels$[$area$$12$$] = $bForceUpdateArea_label$$80_labelText$$1_mapArea$$, $JSCompiler_StaticMethods__createAreaAndLabel$self$$.$_layerCSSStyle$ && 
    $bForceUpdateArea_label$$80_labelText$$1_mapArea$$.$setCSSStyle$($JSCompiler_StaticMethods__createAreaAndLabel$self$$.$_layerCSSStyle$)
  }
};
D.$JSCompiler_StaticMethods__addAreaAndLabel$$ = function $$JSCompiler_StaticMethods__addAreaAndLabel$$$($JSCompiler_StaticMethods__addAreaAndLabel$self$$, $area$$13$$, $fadeInObjs$$) {
  if($JSCompiler_StaticMethods__addAreaAndLabel$self$$.$AreaShapes$[$area$$13$$]) {
    $JSCompiler_StaticMethods__addAreaAndLabel$self$$.$AreaContainer$.$addChild$($JSCompiler_StaticMethods__addAreaAndLabel$self$$.$Areas$[$area$$13$$]);
    var $label$$81$$ = $JSCompiler_StaticMethods__addAreaAndLabel$self$$.$_areaLabels$[$area$$13$$];
    $label$$81$$ && ($JSCompiler_StaticMethods__addAreaAndLabel$self$$.$_renderLabel$[$area$$13$$] ? $label$$81$$.update($JSCompiler_StaticMethods__addAreaAndLabel$self$$.$PzcMatrix$) : $label$$81$$.reset(), $JSCompiler_StaticMethods__addAreaAndLabel$self$$.$_renderedLabels$[$area$$13$$] = $JSCompiler_StaticMethods__addAreaAndLabel$self$$.$_renderLabel$[$area$$13$$]);
    $fadeInObjs$$ && ($fadeInObjs$$.push($JSCompiler_StaticMethods__addAreaAndLabel$self$$.$Areas$[$area$$13$$]), $label$$81$$ && ($fadeInObjs$$.push($label$$81$$), $fadeInObjs$$.push($label$$81$$.$_leaderLine$)))
  }
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtMapAreaLayer$$.prototype;
D.$JSCompiler_prototypeAlias$$.$updateAreaShape$ = function $$JSCompiler_prototypeAlias$$$$updateAreaShape$$($area$$14$$) {
  if(!this.$_paths$ || this.$_bUpdateShapesForRender$) {
    this.$_bUpdateShapesForRender$ = D.$JSCompiler_alias_FALSE$$;
    var $cmd$$20_layerDim$$;
    this.$_paths$ = ($cmd$$20_layerDim$$ = "world" == this.$_tmap$.$_mapName$ || "worldRegions" == this.$_tmap$.$_mapName$ ? D.$DvtBaseMapManager$$.$getBaseMapDim$(this.$_tmap$.$_mapName$, this.$LayerName$) : this.$getLayerDim$()) ? D.$DvtBaseMapManager$$.$simplifyAreaPaths$(D.$DvtBaseMapManager$$.$getAreaPaths$(this.$_tmap$.$_mapName$, this.$LayerName$), $cmd$$20_layerDim$$.$w$, $cmd$$20_layerDim$$.$h$, this.$_tmap$.getWidth(), this.$_tmap$.getHeight(), this.$_tmap$.$_zooming$ ? this.$_tmap$.$_maxZoomFactor$ : 
    1) : D.$DvtBaseMapManager$$.$getAreaPaths$(this.$_tmap$.$_mapName$, this.$LayerName$)
  }
  $cmd$$20_layerDim$$ = this.$_paths$[$area$$14$$];
  this.$AreaShapes$[$area$$14$$] && $cmd$$20_layerDim$$ ? this.$AreaShapes$[$area$$14$$].$setCmds$($cmd$$20_layerDim$$) : delete this.$AreaShapes$[$area$$14$$]
};
D.$JSCompiler_prototypeAlias$$.$updateDataLayer$ = function $$JSCompiler_prototypeAlias$$$$updateDataLayer$$($dataLayer$$, $pzcMatrix$$2$$, $topLayerName$$) {
  D.$DvtMapAreaLayer$$.$superclass$.$updateDataLayer$.call(this, $dataLayer$$, $pzcMatrix$$2$$, $topLayerName$$);
  if($topLayerName$$ == this.$LayerName$) {
    for(var $area$$16$$ in this.$AreaShapes$) {
      (0,D.$JSCompiler_StaticMethods__createAreaAndLabel$$)(this, $area$$16$$, D.$JSCompiler_alias_TRUE$$), this.$_renderArea$[$area$$16$$] && (0,D.$JSCompiler_StaticMethods__addAreaAndLabel$$)(this, $area$$16$$)
    }
  }
};
D.$JSCompiler_prototypeAlias$$.$render$ = function $$JSCompiler_prototypeAlias$$$$render$$($pzcMatrix$$3$$) {
  this.$_bUpdateShapesForRender$ = D.$JSCompiler_alias_TRUE$$;
  for(var $area$$17$$ in this.$AreaShapes$) {
    (0,D.$JSCompiler_StaticMethods__createAreaAndLabel$$)(this, $area$$17$$, D.$JSCompiler_alias_TRUE$$), this.$_renderArea$[$area$$17$$] && (0,D.$JSCompiler_StaticMethods__addAreaAndLabel$$)(this, $area$$17$$)
  }
  D.$DvtMapAreaLayer$$.$superclass$.$render$.call(this, $pzcMatrix$$3$$)
};
D.$JSCompiler_prototypeAlias$$.$PreDataLayerUpdate$ = function $$JSCompiler_prototypeAlias$$$$PreDataLayerUpdate$$() {
  for(var $area$$18$$ in this.$_renderArea$) {
    this.$_renderArea$[$area$$18$$] || ((0,D.$JSCompiler_StaticMethods__createAreaAndLabel$$)(this, $area$$18$$, D.$JSCompiler_alias_FALSE$$), (0,D.$JSCompiler_StaticMethods__addAreaAndLabel$$)(this, $area$$18$$))
  }
};
D.$JSCompiler_prototypeAlias$$.$PostDataLayerUpdate$ = function $$JSCompiler_prototypeAlias$$$$PostDataLayerUpdate$$() {
  for(var $area$$19$$ in this.$_renderArea$) {
    if(!this.$_renderArea$[$area$$19$$]) {
      this.$AreaContainer$.removeChild(this.$Areas$[$area$$19$$]);
      var $label$$82_leaderLine$$ = this.$_areaLabels$[$area$$19$$];
      $label$$82_leaderLine$$ && (this.$_renderedLabels$[$area$$19$$] = D.$JSCompiler_alias_FALSE$$, this.$LabelContainer$.removeChild($label$$82_leaderLine$$), ($label$$82_leaderLine$$ = $label$$82_leaderLine$$.$_leaderLine$) && this.$LabelContainer$.removeChild($label$$82_leaderLine$$))
    }
  }
};
D.$JSCompiler_prototypeAlias$$.$discloseAreas$ = function $$JSCompiler_prototypeAlias$$$$discloseAreas$$($areas$$1$$, $fadeInObjs$$2$$) {
  for(var $i$$inline_8289$$ = 0;$i$$inline_8289$$ < $areas$$1$$.length;$i$$inline_8289$$++) {
    (0,D.$JSCompiler_StaticMethods__createAreaAndLabel$$)(this, $areas$$1$$[$i$$inline_8289$$], D.$JSCompiler_alias_FALSE$$), this.$_renderArea$[$areas$$1$$[$i$$inline_8289$$]] && (0,D.$JSCompiler_StaticMethods__addAreaAndLabel$$)(this, $areas$$1$$[$i$$inline_8289$$], $fadeInObjs$$2$$)
  }
  for(var $id$$288$$ in this.$DataLayers$) {
    this.$DataLayers$[$id$$288$$].$discloseAreas$($areas$$1$$, $fadeInObjs$$2$$, this.$PzcMatrix$)
  }
  this.$_disclosed$ = this.$_disclosed$.concat($areas$$1$$)
};
D.$JSCompiler_prototypeAlias$$.$undiscloseAreas$ = function $$JSCompiler_prototypeAlias$$$$undiscloseAreas$$($areas$$2$$, $fadeOutObjs$$) {
  for(var $childAreaLayer_id$$289$$ in this.$DataLayers$) {
    this.$DataLayers$[$childAreaLayer_id$$289$$].$undiscloseAreas$($areas$$2$$, $fadeOutObjs$$)
  }
  $childAreaLayer_id$$289$$ = (0,D.$JSCompiler_StaticMethods_getDrillChildLayer$$)(this.$_tmap$, this.$LayerName$);
  for(var $i$$795$$ = 0;$i$$795$$ < $areas$$2$$.length;$i$$795$$++) {
    var $areaName$$2$$ = $areas$$2$$[$i$$795$$];
    if(this.$Areas$[$areaName$$2$$]) {
      var $idx$$32$$ = D.$DvtArrayUtils$$.$getIndex$(this.$_disclosed$, $areaName$$2$$);
      -1 !== $idx$$32$$ && (this.$_disclosed$.splice($idx$$32$$, 1), $fadeOutObjs$$.push(this.$Areas$[$areaName$$2$$]))
    }
    $childAreaLayer_id$$289$$ && $childAreaLayer_id$$289$$.$undiscloseAreas$((0,D.$JSCompiler_StaticMethods_getChildrenForArea$$)(this, $areaName$$2$$), $fadeOutObjs$$)
  }
};
D.$JSCompiler_prototypeAlias$$.reset = function $$JSCompiler_prototypeAlias$$$reset$($fadeOutObjs$$1$$, $doNotResetAreas$$) {
  D.$DvtMapAreaLayer$$.$superclass$.reset.call(this, $fadeOutObjs$$1$$, $doNotResetAreas$$);
  "none" != this.$_tmap$.$_drillMode$ && (this.$undiscloseAreas$(this.$_disclosed$, $fadeOutObjs$$1$$), this.$_disclosed$ = [])
};
D.$JSCompiler_StaticMethods___getObjectUnderPoint$$ = function $$JSCompiler_StaticMethods___getObjectUnderPoint$$$($JSCompiler_StaticMethods___getObjectUnderPoint$self$$, $x$$276$$, $y$$248$$) {
  for(var $id$$290$$ in $JSCompiler_StaticMethods___getObjectUnderPoint$self$$.$Areas$) {
    if($JSCompiler_StaticMethods___getObjectUnderPoint$self$$.$Areas$[$id$$290$$].contains($x$$276$$, $y$$248$$)) {
      return $JSCompiler_StaticMethods___getObjectUnderPoint$self$$.$Areas$[$id$$290$$]
    }
  }
  return D.$JSCompiler_alias_NULL$$
};
D.$DvtMapAreaLayer$$.prototype.$__showDropSiteFeedback$ = function $$DvtMapAreaLayer$$$$$__showDropSiteFeedback$$($obj$$349_stroke$$111_strokeWidth$$14$$) {
  this.$_dropSiteFeedback$ && (this.$AreaContainer$.removeChild(this.$_dropSiteFeedback$), this.$_dropSiteFeedback$ = D.$JSCompiler_alias_NULL$$);
  if($obj$$349_stroke$$111_strokeWidth$$14$$ && (this.$_dropSiteFeedback$ = $obj$$349_stroke$$111_strokeWidth$$14$$.$getDropSiteFeedback$())) {
    this.$_dropSiteFeedback$.$setFill$(new D.$DvtSolidFill$$(this.$_dropSiteCSSStyle$.$getStyle$("background-color"))), $obj$$349_stroke$$111_strokeWidth$$14$$ = this.$_dropSiteCSSStyle$.$getStyle$("border-width") ? this.$_dropSiteCSSStyle$.$getStyle$("border-width").substring(0, this.$_dropSiteCSSStyle$.$getStyle$("border-width").indexOf("px")) : 1, this.$_tmap$.$_bSupportsVectorEffects$ || ($obj$$349_stroke$$111_strokeWidth$$14$$ /= this.$PzcMatrix$.$_a$), $obj$$349_stroke$$111_strokeWidth$$14$$ = 
    new D.$DvtSolidStroke$$(this.$_dropSiteCSSStyle$.$getStyle$("border-color"), 1, $obj$$349_stroke$$111_strokeWidth$$14$$), this.$_tmap$.$_bSupportsVectorEffects$ && ($obj$$349_stroke$$111_strokeWidth$$14$$.$_bFixedWidth$ = D.$JSCompiler_alias_TRUE$$), this.$_dropSiteFeedback$.$setStroke$($obj$$349_stroke$$111_strokeWidth$$14$$), this.$AreaContainer$.$addChild$(this.$_dropSiteFeedback$)
  }
  return this.$_dropSiteFeedback$
};
D.$DvtMapAreaLayer$$.prototype.$HandleZoomEvent$ = function $$DvtMapAreaLayer$$$$$HandleZoomEvent$$($event$$757$$, $pzcMatrix$$4$$) {
  D.$DvtMapAreaLayer$$.$superclass$.$HandleZoomEvent$.call(this, $event$$757$$, $pzcMatrix$$4$$);
  if(!this.$_tmap$.$_bSupportsVectorEffects$) {
    for(var $area$$20$$ in this.$Areas$) {
      this.$Areas$[$area$$20$$].$HandleZoomEvent$($pzcMatrix$$4$$)
    }
  }
  for($area$$20$$ in this.$_renderedLabels$) {
    if(this.$_renderedLabels$[$area$$20$$]) {
      var $label$$83$$ = this.$_areaLabels$[$area$$20$$];
      $label$$83$$ && $label$$83$$.update($pzcMatrix$$4$$)
    }
  }
};
D.$DvtMapCustomAreaLayer$$ = function $$DvtMapCustomAreaLayer$$$($tmap$$2$$, $layerName$$17$$, $labelDisplay$$3$$, $labelType$$3$$, $eventHandler$$2$$) {
  this.Init($tmap$$2$$, $layerName$$17$$, $labelDisplay$$3$$, $labelType$$3$$, $eventHandler$$2$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtMapCustomAreaLayer$$, D.$DvtMapAreaLayer$$, "DvtMapCustomAreaLayer");
D.$DvtMapCustomAreaLayer$$.prototype.Init = function $$DvtMapCustomAreaLayer$$$$Init$($tmap$$3$$, $layerName$$18$$, $labelDisplay$$4$$, $labelType$$4$$, $eventHandler$$3$$) {
  D.$DvtMapCustomAreaLayer$$.$superclass$.Init.call(this, $tmap$$3$$, $layerName$$18$$, $labelDisplay$$4$$, $labelType$$4$$, $eventHandler$$3$$)
};
D.$DvtMapCustomAreaLayer$$.prototype.$updateAreaShape$ = (0,D.$JSCompiler_emptyFn$$)();
D.$DvtMapCustomAreaLayer$$.prototype.$getLayerDim$ = function $$DvtMapCustomAreaLayer$$$$$getLayerDim$$() {
  return new D.$DvtRectangle$$(0, 0, this.$_layerWidth$, this.$_layerHeight$)
};
D.$JSCompiler_StaticMethods__selectImageBasedOnResolution$$ = function $$JSCompiler_StaticMethods__selectImageBasedOnResolution$$$($JSCompiler_StaticMethods__selectImageBasedOnResolution$self_images$$20$$) {
  var $widthRes$$1$$ = $JSCompiler_StaticMethods__selectImageBasedOnResolution$self_images$$20$$.$_tmap$.getWidth(), $heightRes$$2$$ = $JSCompiler_StaticMethods__selectImageBasedOnResolution$self_images$$20$$.$_tmap$.getHeight();
  $JSCompiler_StaticMethods__selectImageBasedOnResolution$self_images$$20$$ = $JSCompiler_StaticMethods__selectImageBasedOnResolution$self_images$$20$$.$_areaLayerImages$;
  for(var $i$$796$$ = 0;$i$$796$$ < $JSCompiler_StaticMethods__selectImageBasedOnResolution$self_images$$20$$.length;$i$$796$$++) {
    var $height$$143_image$$21$$ = $JSCompiler_StaticMethods__selectImageBasedOnResolution$self_images$$20$$[$i$$796$$], $source$$36$$ = $height$$143_image$$21$$.source, $width$$158$$ = $height$$143_image$$21$$.width, $height$$143_image$$21$$ = $height$$143_image$$21$$.height;
    if($source$$36$$ && -1 < $source$$36$$.search(".svg") || $width$$158$$ >= $widthRes$$1$$ && $height$$143_image$$21$$ >= $heightRes$$2$$ || $i$$796$$ == $JSCompiler_StaticMethods__selectImageBasedOnResolution$self_images$$20$$.length - 1) {
      return $source$$36$$
    }
  }
};
D.$DvtMapCustomAreaLayer$$.prototype.$HandleZoomEvent$ = function $$DvtMapCustomAreaLayer$$$$$HandleZoomEvent$$($event$$758$$, $pzcMatrix$$7$$) {
  D.$DvtMapCustomAreaLayer$$.$superclass$.$HandleZoomEvent$.call(this, $event$$758$$, $pzcMatrix$$7$$);
  if(this.$Areas$.image) {
    var $newImageSrc$$ = (0,D.$JSCompiler_StaticMethods__selectImageBasedOnResolution$$)(this);
    $newImageSrc$$ != this.$_imageSrc$ && (this.$_imageSrc$ = $newImageSrc$$, this.$Areas$.image.$setSrc$(this.$_imageSrc$))
  }
};
D.$DvtMapDataLayer$$ = function $$DvtMapDataLayer$$$($tmap$$4$$, $parentLayer$$, $clientId$$4$$, $eventHandler$$4$$, $options$$266$$) {
  this.Init($tmap$$4$$, $parentLayer$$, $clientId$$4$$, $eventHandler$$4$$, $options$$266$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtMapDataLayer$$, D.$DvtObj$$, "DvtMapDataLayer");
D.$DvtMapDataLayer$$.prototype.Init = function $$DvtMapDataLayer$$$$Init$($tmap$$5$$, $parentLayer$$1$$, $clientId$$5$$, $eventHandler$$5$$, $options$$267$$) {
  this.$_tmap$ = $tmap$$5$$;
  this.$_clientId$ = $clientId$$5$$;
  this.$_options$ = $options$$267$$;
  this.$_areaObjs$ = [];
  this.$_dataObjs$ = [];
  this.$_dataAreaCollection$ = [];
  this.$_dataMarkerCollection$ = [];
  this.$_eventHandler$ = $eventHandler$$5$$;
  this.$_dragSource$ = new D.$DvtDragSource$$($tmap$$5$$.$getCtx$());
  (0,D.$JSCompiler_StaticMethods_setDragSource$$)(this.$_eventHandler$, this.$_dragSource$);
  this.$_dataAreaLayer$ = new D.$DvtContainer$$(this.$_tmap$.$getCtx$());
  this.$_dataPointLayer$ = new D.$DvtContainer$$(this.$_tmap$.$getCtx$());
  this.$_dataLabelLayer$ = new D.$DvtContainer$$(this.$_tmap$.$getCtx$());
  this.$_tmap$.$_dataAreaLayers$.$addChildAt$(this.$_dataAreaLayer$, 0);
  this.$_tmap$.$_dataPointLayers$.$addChildAt$(this.$_dataPointLayer$, 0);
  this.$_tmap$.$_labelLayers$.$addChildAt$(this.$_dataLabelLayer$, 0);
  this.$_parentLayer$ = $parentLayer$$1$$;
  this.$_disclosed$ = [];
  this.$_drilled$ = []
};
D.$DvtMapDataLayer$$.prototype.$getOptions$ = (0,D.$JSCompiler_get$$)("$_options$");
D.$JSCompiler_StaticMethods_getNonScaledContainers$$ = function $$JSCompiler_StaticMethods_getNonScaledContainers$$$($JSCompiler_StaticMethods_getNonScaledContainers$self$$) {
  var $containers$$1$$ = [$JSCompiler_StaticMethods_getNonScaledContainers$self$$.$_dataLabelLayer$];
  $JSCompiler_StaticMethods_getNonScaledContainers$self$$.$_tmap$.$_isMarkerZoomBehaviorFixed$ && $containers$$1$$.push($JSCompiler_StaticMethods_getNonScaledContainers$self$$.$_dataPointLayer$);
  return $containers$$1$$
};
D.$JSCompiler_StaticMethods_getNavigableAreaObjects$$ = function $$JSCompiler_StaticMethods_getNavigableAreaObjects$$$($JSCompiler_StaticMethods_getNavigableAreaObjects$self$$) {
  for(var $navigables$$11$$ = [], $i$$798$$ = 0;$i$$798$$ < $JSCompiler_StaticMethods_getNavigableAreaObjects$self$$.$_areaObjs$.length;$i$$798$$++) {
    $JSCompiler_StaticMethods_getNavigableAreaObjects$self$$.$_areaObjs$[$i$$798$$].$isDrilled$() || $navigables$$11$$.push($JSCompiler_StaticMethods_getNavigableAreaObjects$self$$.$_areaObjs$[$i$$798$$])
  }
  return $navigables$$11$$
};
D.$JSCompiler_StaticMethods_getNavigableDisclosedAreaObjects$$ = function $$JSCompiler_StaticMethods_getNavigableDisclosedAreaObjects$$$($JSCompiler_StaticMethods_getNavigableDisclosedAreaObjects$self$$) {
  for(var $navigables$$12$$ = [], $i$$799$$ = 0;$i$$799$$ < $JSCompiler_StaticMethods_getNavigableDisclosedAreaObjects$self$$.$_areaObjs$.length;$i$$799$$++) {
    for(var $j$$105$$ = 0;$j$$105$$ < $JSCompiler_StaticMethods_getNavigableDisclosedAreaObjects$self$$.$_disclosed$.length;$j$$105$$++) {
      $JSCompiler_StaticMethods_getNavigableDisclosedAreaObjects$self$$.$_areaObjs$[$i$$799$$].$getLocation$() == $JSCompiler_StaticMethods_getNavigableDisclosedAreaObjects$self$$.$_disclosed$[$j$$105$$] && ($JSCompiler_StaticMethods_getNavigableDisclosedAreaObjects$self$$.$_areaObjs$[$i$$799$$].$isDrilled$() || $navigables$$12$$.push($JSCompiler_StaticMethods_getNavigableDisclosedAreaObjects$self$$.$_areaObjs$[$i$$799$$]))
    }
  }
  return $navigables$$12$$
};
D.$JSCompiler_StaticMethods_addDataObject$$ = function $$JSCompiler_StaticMethods_addDataObject$$$($JSCompiler_StaticMethods_addDataObject$self$$, $obj$$350$$) {
  $JSCompiler_StaticMethods_addDataObject$self$$.$_dataMarkerCollection$.push($obj$$350$$);
  $obj$$350$$ && ($JSCompiler_StaticMethods_addDataObject$self$$.$_dataObjs$.push($obj$$350$$), $JSCompiler_StaticMethods_addDataObject$self$$.$_eventHandler$.$associate$($obj$$350$$.$getDisplayable$(), $obj$$350$$))
};
D.$JSCompiler_StaticMethods_addAreaObject$$ = function $$JSCompiler_StaticMethods_addAreaObject$$$($JSCompiler_StaticMethods_addAreaObject$self$$, $obj$$351$$) {
  $JSCompiler_StaticMethods_addAreaObject$self$$.$_dataAreaCollection$.push($obj$$351$$);
  $obj$$351$$ && ($JSCompiler_StaticMethods_addAreaObject$self$$.$_areaObjs$.push($obj$$351$$), $JSCompiler_StaticMethods_addAreaObject$self$$.$_eventHandler$.$associate$($obj$$351$$.$getDisplayable$(), $obj$$351$$), $obj$$351$$.$_dataAreaLayer$ = $JSCompiler_StaticMethods_addAreaObject$self$$.$_dataAreaLayer$)
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtMapDataLayer$$.prototype;
D.$JSCompiler_prototypeAlias$$.$getClientId$ = (0,D.$JSCompiler_get$$)("$_clientId$");
D.$JSCompiler_prototypeAlias$$.$setAnimation$ = (0,D.$JSCompiler_set$$)("$_animType$");
D.$JSCompiler_prototypeAlias$$.$getAnimation$ = (0,D.$JSCompiler_get$$)("$_animType$");
D.$JSCompiler_prototypeAlias$$.$setAnimationDuration$ = (0,D.$JSCompiler_set$$)("$_animDur$");
D.$JSCompiler_prototypeAlias$$.$getAnimationDuration$ = (0,D.$JSCompiler_get$$)("$_animDur$");
D.$JSCompiler_prototypeAlias$$.$setSelectionMode$ = function $$JSCompiler_prototypeAlias$$$$setSelectionMode$$($mode$$11$$) {
  if(this.$_selectionMode$ = $mode$$11$$) {
    this.$_selectionHandler$ = new D.$DvtSelectionHandler$$(this.$_selectionMode$), this.$_eventHandler$.$setSelectionHandler$(this.$_clientId$, this.$_selectionHandler$)
  }
};
D.$JSCompiler_prototypeAlias$$.$isSelectable$ = function $$JSCompiler_prototypeAlias$$$$isSelectable$$() {
  return this.$_selectionMode$ != D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_StaticMethods__renderAreaAndLabel$$ = function $$JSCompiler_StaticMethods__renderAreaAndLabel$$$($JSCompiler_StaticMethods__renderAreaAndLabel$self$$, $areaIndex$$1$$) {
  var $JSCompiler_inline_result$$401_areaObj$$inline_8305_idx$$inline_11289_label$$86$$;
  $JSCompiler_inline_result$$401_areaObj$$inline_8305_idx$$inline_11289_label$$86$$ = $JSCompiler_StaticMethods__renderAreaAndLabel$self$$.$_areaObjs$[$areaIndex$$1$$];
  var $areaDim$$1_displayable$$88_displayable$$inline_8306$$ = $JSCompiler_inline_result$$401_areaObj$$inline_8305_idx$$inline_11289_label$$86$$.$getDisplayable$(), $pathToCopy$$inline_8307$$ = $JSCompiler_StaticMethods__renderAreaAndLabel$self$$.$_parentLayer$.$AreaShapes$[$JSCompiler_inline_result$$401_areaObj$$inline_8305_idx$$inline_11289_label$$86$$.$getLocation$()];
  $pathToCopy$$inline_8307$$ ? ($areaDim$$1_displayable$$88_displayable$$inline_8306$$.$setCmds$($pathToCopy$$inline_8307$$.$getCmds$()), $JSCompiler_inline_result$$401_areaObj$$inline_8305_idx$$inline_11289_label$$86$$ = D.$JSCompiler_alias_TRUE$$) : ($JSCompiler_inline_result$$401_areaObj$$inline_8305_idx$$inline_11289_label$$86$$ = $JSCompiler_StaticMethods__renderAreaAndLabel$self$$.$_areaObjs$.indexOf($JSCompiler_inline_result$$401_areaObj$$inline_8305_idx$$inline_11289_label$$86$$), -1 !== 
  $JSCompiler_inline_result$$401_areaObj$$inline_8305_idx$$inline_11289_label$$86$$ && $JSCompiler_StaticMethods__renderAreaAndLabel$self$$.$_areaObjs$.splice($JSCompiler_inline_result$$401_areaObj$$inline_8305_idx$$inline_11289_label$$86$$, 1), $JSCompiler_inline_result$$401_areaObj$$inline_8305_idx$$inline_11289_label$$86$$ = D.$JSCompiler_alias_FALSE$$);
  if($JSCompiler_inline_result$$401_areaObj$$inline_8305_idx$$inline_11289_label$$86$$) {
    $areaDim$$1_displayable$$88_displayable$$inline_8306$$ = $JSCompiler_StaticMethods__renderAreaAndLabel$self$$.$_areaObjs$[$areaIndex$$1$$].$getDisplayable$();
    $JSCompiler_StaticMethods__renderAreaAndLabel$self$$.$_dataAreaLayer$.$addChild$($areaDim$$1_displayable$$88_displayable$$inline_8306$$);
    if($JSCompiler_inline_result$$401_areaObj$$inline_8305_idx$$inline_11289_label$$86$$ = $JSCompiler_StaticMethods__renderAreaAndLabel$self$$.$_areaObjs$[$areaIndex$$1$$].$getLabel$()) {
      0 < $JSCompiler_inline_result$$401_areaObj$$inline_8305_idx$$inline_11289_label$$86$$.$_boundRectangle$.length || ($areaDim$$1_displayable$$88_displayable$$inline_8306$$ = $areaDim$$1_displayable$$88_displayable$$inline_8306$$.$getDimensions$(), $JSCompiler_inline_result$$401_areaObj$$inline_8305_idx$$inline_11289_label$$86$$.$_boundRectangle$.push($areaDim$$1_displayable$$88_displayable$$inline_8306$$)), $JSCompiler_inline_result$$401_areaObj$$inline_8305_idx$$inline_11289_label$$86$$.update($JSCompiler_StaticMethods__renderAreaAndLabel$self$$.$_pzcMatrix$)
    }
    return D.$JSCompiler_alias_TRUE$$
  }
  return D.$JSCompiler_alias_FALSE$$
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtMapDataLayer$$.prototype;
D.$JSCompiler_prototypeAlias$$.$render$ = function $$JSCompiler_prototypeAlias$$$$render$$($areaLabelsToRemove_pzcMatrix$$8$$) {
  this.$_bFixPatterns$ = D.$JSCompiler_alias_TRUE$$;
  this.$_pzcMatrix$ = $areaLabelsToRemove_pzcMatrix$$8$$;
  $areaLabelsToRemove_pzcMatrix$$8$$ = {};
  var $dataObjs$$ = this.$_dataObjs$.slice();
  $dataObjs$$.sort(function compare($areaLabelsToRemove_pzcMatrix$$8$$, $dataObjs$$) {
    return $areaLabelsToRemove_pzcMatrix$$8$$.$getSize$() < $dataObjs$$.$getSize$() ? 1 : $areaLabelsToRemove_pzcMatrix$$8$$.$getSize$() > $dataObjs$$.$getSize$() ? -1 : 0
  });
  for(var $i$$800$$ = 0;$i$$800$$ < $dataObjs$$.length;$i$$800$$++) {
    var $dataObj$$1_regionId$$ = $dataObjs$$[$i$$800$$], $displayable$$89$$ = $dataObj$$1_regionId$$.$getDisplayable$(), $label$$87$$ = $dataObj$$1_regionId$$.$getLabel$();
    if($label$$87$$) {
      var $container$$189$$ = new D.$DvtContainer$$($displayable$$89$$.$getCtx$());
      this.$_dataPointLayer$.$addChild$($container$$189$$);
      $container$$189$$.$addChild$($displayable$$89$$);
      $container$$189$$.$addChild$($label$$87$$);
      $dataObj$$1_regionId$$.$positionLabel$()
    }else {
      this.$_dataPointLayer$.$addChild$($displayable$$89$$)
    }
    ($dataObj$$1_regionId$$ = $dataObj$$1_regionId$$.$getLocation$()) && ($areaLabelsToRemove_pzcMatrix$$8$$[$dataObj$$1_regionId$$] = D.$JSCompiler_alias_TRUE$$)
  }
  for($i$$800$$ = 0;$i$$800$$ < this.$_areaObjs$.length;$i$$800$$++) {
    $areaLabelsToRemove_pzcMatrix$$8$$[this.$_areaObjs$[$i$$800$$].$getLocation$()] && (this.$_areaObjs$[$i$$800$$].$_label$ = D.$JSCompiler_alias_NULL$$), (0,D.$JSCompiler_StaticMethods__renderAreaAndLabel$$)(this, $i$$800$$) || $i$$800$$--
  }
  this.$_initSelections$ && this.$_processInitialSelections$()
};
D.$JSCompiler_prototypeAlias$$.$discloseAreas$ = function $$JSCompiler_prototypeAlias$$$$discloseAreas$$($areas$$3$$, $fadeInObjs$$3$$, $pzcMatrix$$9_regionId$$1$$) {
  this.$_pzcMatrix$ = $pzcMatrix$$9_regionId$$1$$;
  for(var $drilledAreas$$ = [], $j$$106$$ = 0;$j$$106$$ < $areas$$3$$.length;$j$$106$$++) {
    for(var $i$$801_label$$88_leaderLine$$1$$ = 0;$i$$801_label$$88_leaderLine$$1$$ < this.$_areaObjs$.length;$i$$801_label$$88_leaderLine$$1$$++) {
      if(this.$_areaObjs$[$i$$801_label$$88_leaderLine$$1$$].$getLocation$() == $areas$$3$$[$j$$106$$]) {
        $drilledAreas$$.push(this.$_areaObjs$[$i$$801_label$$88_leaderLine$$1$$].$getLocation$());
        (0,D.$JSCompiler_StaticMethods__renderAreaAndLabel$$)(this, $i$$801_label$$88_leaderLine$$1$$);
        var $displayable$$90$$ = this.$_areaObjs$[$i$$801_label$$88_leaderLine$$1$$].$getDisplayable$();
        $fadeInObjs$$3$$.push($displayable$$90$$);
        (0,D.$JSCompiler_StaticMethods_handleZoomEvent$$)($displayable$$90$$, $pzcMatrix$$9_regionId$$1$$);
        if($i$$801_label$$88_leaderLine$$1$$ = this.$_areaObjs$[$i$$801_label$$88_leaderLine$$1$$].$getLabel$()) {
          $fadeInObjs$$3$$.push($i$$801_label$$88_leaderLine$$1$$), ($i$$801_label$$88_leaderLine$$1$$ = $i$$801_label$$88_leaderLine$$1$$.$_leaderLine$) && $fadeInObjs$$3$$.push($i$$801_label$$88_leaderLine$$1$$)
        }
        break
      }
    }
  }
  for($i$$801_label$$88_leaderLine$$1$$ = 0;$i$$801_label$$88_leaderLine$$1$$ < this.$_dataObjs$.length;$i$$801_label$$88_leaderLine$$1$$++) {
    for($j$$106$$ = 0;$j$$106$$ < $areas$$3$$.length;$j$$106$$++) {
      $pzcMatrix$$9_regionId$$1$$ = this.$_dataObjs$[$i$$801_label$$88_leaderLine$$1$$].$getLocation$(), $displayable$$90$$ = this.$_dataObjs$[$i$$801_label$$88_leaderLine$$1$$].$getDisplayable$(), $pzcMatrix$$9_regionId$$1$$ != D.$JSCompiler_alias_NULL$$ ? $pzcMatrix$$9_regionId$$1$$ == $areas$$3$$[$j$$106$$] && (this.$_dataPointLayer$.$addChild$($displayable$$90$$), $fadeInObjs$$3$$.push($displayable$$90$$)) : (this.$_dataPointLayer$.$addChild$($displayable$$90$$), $fadeInObjs$$3$$.push($displayable$$90$$))
    }
  }
  this.$_disclosed$ = this.$_disclosed$.concat($drilledAreas$$)
};
D.$JSCompiler_prototypeAlias$$.$undiscloseAreas$ = function $$JSCompiler_prototypeAlias$$$$undiscloseAreas$$($areas$$4$$, $fadeOutObjs$$2$$) {
  for(var $j$$107$$ = 0;$j$$107$$ < $areas$$4$$.length;$j$$107$$++) {
    for(var $i$$802_label$$89$$ = 0;$i$$802_label$$89$$ < this.$_areaObjs$.length;$i$$802_label$$89$$++) {
      if(this.$_areaObjs$[$i$$802_label$$89$$].$getLocation$() == $areas$$4$$[$j$$107$$]) {
        this.$_areaObjs$[$i$$802_label$$89$$].$isDrilled$() && this.$_areaObjs$[$i$$802_label$$89$$].$setDrilled$(D.$JSCompiler_alias_FALSE$$);
        this.$_areaObjs$[$i$$802_label$$89$$].$isSelected$() && this.$_selectionHandler$.$removeFromSelection$(this.$_areaObjs$[$i$$802_label$$89$$]);
        var $idx$$34$$ = D.$DvtArrayUtils$$.$getIndex$(this.$_disclosed$, $areas$$4$$[$j$$107$$]);
        if(-1 < $idx$$34$$ && (this.$_disclosed$.splice($idx$$34$$, 1), $fadeOutObjs$$2$$.push(this.$_areaObjs$[$i$$802_label$$89$$].$getDisplayable$()), $i$$802_label$$89$$ = this.$_areaObjs$[$i$$802_label$$89$$].$getLabel$())) {
          $fadeOutObjs$$2$$.push($i$$802_label$$89$$), $fadeOutObjs$$2$$.push($i$$802_label$$89$$.$_leaderLine$)
        }
        break
      }
    }
  }
};
D.$JSCompiler_prototypeAlias$$.reset = function $$JSCompiler_prototypeAlias$$$reset$($fadeOutObjs$$4$$, $doNotResetAreas$$1$$) {
  if(this.$_selectionHandler$) {
    for(var $j$$108_selectedObjs$$ = this.$_selectionHandler$.getSelection(), $i$$805_label$$92$$ = 0;$i$$805_label$$92$$ < $j$$108_selectedObjs$$.length;$i$$805_label$$92$$++) {
      (!$doNotResetAreas$$1$$ || $doNotResetAreas$$1$$ && -1 == D.$DvtArrayUtils$$.$getIndex$($doNotResetAreas$$1$$, $j$$108_selectedObjs$$[$i$$805_label$$92$$].$getLocation$())) && this.$_selectionHandler$.$removeFromSelection$($j$$108_selectedObjs$$[$i$$805_label$$92$$])
    }
  }
  if("none" != this.$_tmap$.$_drillMode$) {
    for($j$$108_selectedObjs$$ = 0;$j$$108_selectedObjs$$ < this.$_drilled$.length;$j$$108_selectedObjs$$++) {
      for($i$$805_label$$92$$ = 0;$i$$805_label$$92$$ < this.$_areaObjs$.length;$i$$805_label$$92$$++) {
        if(this.$_areaObjs$[$i$$805_label$$92$$].$getLocation$() == this.$_drilled$[$j$$108_selectedObjs$$]) {
          this.$_areaObjs$[$i$$805_label$$92$$].$setDrilled$(D.$JSCompiler_alias_FALSE$$);
          var $displayable$$92$$ = this.$_areaObjs$[$i$$805_label$$92$$].$getDisplayable$();
          this.$_dataAreaLayer$.$addChild$($displayable$$92$$);
          $fadeOutObjs$$4$$.push($displayable$$92$$);
          if($i$$805_label$$92$$ = this.$_areaObjs$[$i$$805_label$$92$$].$getLabel$()) {
            $i$$805_label$$92$$.update(this.$_pzcMatrix$), $fadeOutObjs$$4$$.push($i$$805_label$$92$$), $fadeOutObjs$$4$$.push($i$$805_label$$92$$.$_leaderLine$)
          }
          break
        }
      }
      for($i$$805_label$$92$$ = 0;$i$$805_label$$92$$ < this.$_dataObjs$.length;$i$$805_label$$92$$++) {
        if(this.$_dataObjs$[$i$$805_label$$92$$].$getLocation$() == this.$_drilled$[$j$$108_selectedObjs$$]) {
          $displayable$$92$$ = this.$_dataObjs$[$i$$805_label$$92$$].$getDisplayable$();
          this.$_dataPointLayer$.$addChild$($displayable$$92$$);
          $fadeOutObjs$$4$$.push($displayable$$92$$);
          break
        }
      }
    }
  }
  this.$_drilled$ = []
};
D.$JSCompiler_prototypeAlias$$.$HandleZoomEvent$ = function $$JSCompiler_prototypeAlias$$$$HandleZoomEvent$$($event$$759$$, $pzcMatrix$$10$$) {
  this.$_pzcMatrix$ = $pzcMatrix$$10$$;
  var $i$$806_zoom$$12$$ = $pzcMatrix$$10$$.$_a$, $areaObjs_dataObjs$$1_j$$109_type$$248$$ = $event$$759$$.$getSubType$();
  if(this.$_bFixPatterns$ && "zoomed" == $areaObjs_dataObjs$$1_j$$109_type$$248$$) {
    this.$_bFixPatterns$ = D.$JSCompiler_alias_FALSE$$;
    for($areaObjs_dataObjs$$1_j$$109_type$$248$$ = 0;$areaObjs_dataObjs$$1_j$$109_type$$248$$ < this.$_areaObjs$.length;$areaObjs_dataObjs$$1_j$$109_type$$248$$++) {
      var $displayable$$93$$ = this.$_areaObjs$[$areaObjs_dataObjs$$1_j$$109_type$$248$$].$getDisplayable$(), $fill$$75$$ = $displayable$$93$$.$_ptFill$;
      if($fill$$75$$) {
        var $scaledFill$$ = new D.$DvtPatternFill$$;
        $fill$$75$$.$mergeProps$($scaledFill$$);
        $scaledFill$$.$setMatrix$(new D.$DvtMatrix$$(1 / $i$$806_zoom$$12$$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, 1 / $i$$806_zoom$$12$$));
        $displayable$$93$$.$setFill$($scaledFill$$)
      }
    }
  }
  $areaObjs_dataObjs$$1_j$$109_type$$248$$ = this.$_areaObjs$;
  for($i$$806_zoom$$12$$ = 0;$i$$806_zoom$$12$$ < $areaObjs_dataObjs$$1_j$$109_type$$248$$.length;$i$$806_zoom$$12$$++) {
    $areaObjs_dataObjs$$1_j$$109_type$$248$$[$i$$806_zoom$$12$$].$HandleZoomEvent$($pzcMatrix$$10$$)
  }
  if(this.$_tmap$.$_isMarkerZoomBehaviorFixed$) {
    $areaObjs_dataObjs$$1_j$$109_type$$248$$ = this.$_dataObjs$;
    for($i$$806_zoom$$12$$ = 0;$i$$806_zoom$$12$$ < $areaObjs_dataObjs$$1_j$$109_type$$248$$.length;$i$$806_zoom$$12$$++) {
      $areaObjs_dataObjs$$1_j$$109_type$$248$$[$i$$806_zoom$$12$$].$HandleZoomEvent$($pzcMatrix$$10$$)
    }
  }
};
D.$JSCompiler_prototypeAlias$$.$HandlePanEvent$ = (0,D.$JSCompiler_set$$)("$_pzcMatrix$");
D.$JSCompiler_prototypeAlias$$.$_processInitialSelections$ = function $$JSCompiler_prototypeAlias$$$$_processInitialSelections$$() {
  this.$_selectionHandler$ && ((0,D.$JSCompiler_StaticMethods_processInitialSelections$$)(this.$_selectionHandler$, this.$_initSelections$, this.$_dataObjs$.concat(this.$_areaObjs$)), this.$_initSelections$ = D.$JSCompiler_alias_NULL$$)
};
D.$JSCompiler_prototypeAlias$$.$__getDragTransferable$ = function $$JSCompiler_prototypeAlias$$$$__getDragTransferable$$($obj$$353_rowKeys$$3$$) {
  if(this.$_selectionHandler$) {
    $obj$$353_rowKeys$$3$$.$isSelected$() || (this.$_selectionHandler$.$processClick$($obj$$353_rowKeys$$3$$, D.$JSCompiler_alias_FALSE$$), this.$_eventHandler$.$fireSelectionEvent$($obj$$353_rowKeys$$3$$));
    $obj$$353_rowKeys$$3$$ = [];
    for(var $selection$$36$$ = this.$_selectionHandler$.getSelection(), $i$$807$$ = 0;$i$$807$$ < $selection$$36$$.length;$i$$807$$++) {
      $obj$$353_rowKeys$$3$$.push($selection$$36$$[$i$$807$$].getId())
    }
    return $obj$$353_rowKeys$$3$$
  }
  return D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.$__getDragFeedback$ = function $$JSCompiler_prototypeAlias$$$$__getDragFeedback$$() {
  for(var $displayables$$29$$ = [], $selection$$37$$ = this.$_selectionHandler$.getSelection(), $i$$808$$ = 0;$i$$808$$ < $selection$$37$$.length;$i$$808$$++) {
    $displayables$$29$$.push($selection$$37$$[$i$$808$$].$getDisplayable$())
  }
  return $displayables$$29$$
};
D.$DvtThematicMapKeyboardHandler$$ = function $$DvtThematicMapKeyboardHandler$$$($tmap$$11$$, $manager$$30$$) {
  this.Init($tmap$$11$$, $manager$$30$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtThematicMapKeyboardHandler$$, D.$DvtPanZoomCanvasKeyboardHandler$$, "DvtThematicMapKeyboardHandler");
D.$JSCompiler_prototypeAlias$$ = D.$DvtThematicMapKeyboardHandler$$.prototype;
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($tmap$$12$$, $manager$$31$$) {
  D.$DvtThematicMapKeyboardHandler$$.$superclass$.Init.call(this, $tmap$$12$$, $manager$$31$$);
  this.$_tmap$ = $tmap$$12$$
};
D.$JSCompiler_prototypeAlias$$.$isSelectionEvent$ = function $$JSCompiler_prototypeAlias$$$$isSelectionEvent$$($event$$782$$) {
  return this.$isNavigationEvent$($event$$782$$) && !$event$$782$$.ctrlKey
};
D.$JSCompiler_prototypeAlias$$.$processKeyDown$ = function $$JSCompiler_prototypeAlias$$$$processKeyDown$$($event$$783$$) {
  var $focusObj$$3_keyCode$$52$$ = $event$$783$$.keyCode;
  if(221 == $focusObj$$3_keyCode$$52$$) {
    var $focusObj$$3_keyCode$$52$$ = this.$_eventManager$.$getFocus$(), $navigables$$14$$ = (0,D.$JSCompiler_StaticMethods_getNavigableObjects$$)(this.$_tmap$);
    $focusObj$$3_keyCode$$52$$ instanceof D.$DvtMapAreaPeer$$ && 0 < $navigables$$14$$.length && ($focusObj$$3_keyCode$$52$$ = (0,D.$DvtKeyboardHandler$getNextAdjacentNavigable$$)($focusObj$$3_keyCode$$52$$, $event$$783$$, $navigables$$14$$));
    (0,D.$JSCompiler_StaticMethods_SetClickInfo$$)(this.$_eventManager$, $focusObj$$3_keyCode$$52$$)
  }else {
    219 == $focusObj$$3_keyCode$$52$$ ? ($focusObj$$3_keyCode$$52$$ = this.$_eventManager$.$getFocus$(), $navigables$$14$$ = (0,D.$JSCompiler_StaticMethods_getNavigableAreas$$)(this.$_tmap$), !($focusObj$$3_keyCode$$52$$ instanceof D.$DvtMapAreaPeer$$) && 0 < $navigables$$14$$.length && ($focusObj$$3_keyCode$$52$$ = (0,D.$DvtKeyboardHandler$getNextAdjacentNavigable$$)($focusObj$$3_keyCode$$52$$, $event$$783$$, $navigables$$14$$)), (0,D.$JSCompiler_StaticMethods_SetClickInfo$$)(this.$_eventManager$, 
    $focusObj$$3_keyCode$$52$$)) : ($focusObj$$3_keyCode$$52$$ = D.$DvtThematicMapKeyboardHandler$$.$superclass$.$processKeyDown$.call(this, $event$$783$$), this.$isNavigationEvent$($event$$783$$) && !$event$$783$$.ctrlKey && (0,D.$JSCompiler_StaticMethods_SetClickInfo$$)(this.$_eventManager$, $focusObj$$3_keyCode$$52$$))
  }
  return $focusObj$$3_keyCode$$52$$
};
D.$JSCompiler_prototypeAlias$$.$isMultiSelectEvent$ = function $$JSCompiler_prototypeAlias$$$$isMultiSelectEvent$$($event$$784$$) {
  return 32 == $event$$784$$.keyCode && $event$$784$$.ctrlKey
};
D.$JSCompiler_prototypeAlias$$.$isNavigationEvent$ = function $$JSCompiler_prototypeAlias$$$$isNavigationEvent$$($event$$785_keyCode$$53$$) {
  var $isNavigable$$ = D.$DvtThematicMapKeyboardHandler$$.$superclass$.$isNavigationEvent$.call(this, $event$$785_keyCode$$53$$);
  if(!$isNavigable$$ && ($event$$785_keyCode$$53$$ = $event$$785_keyCode$$53$$.keyCode, 219 == $event$$785_keyCode$$53$$ || 221 == $event$$785_keyCode$$53$$)) {
    $isNavigable$$ = D.$JSCompiler_alias_TRUE$$
  }
  return $isNavigable$$
};
D.$DvtThematicMapEventManager$$ = function $$DvtThematicMapEventManager$$$($context$$615$$, $callback$$158$$, $callbackObj$$111$$) {
  this.Init($context$$615$$, $callback$$158$$, $callbackObj$$111$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtThematicMapEventManager$$, D.$DvtEventManager$$, "DvtThematicMapEventManager");
D.$JSCompiler_prototypeAlias$$ = D.$DvtThematicMapEventManager$$.prototype;
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($context$$616$$, $callback$$159$$, $callbackObj$$112$$) {
  D.$DvtThematicMapEventManager$$.$superclass$.Init.call(this, $context$$616$$, $callback$$159$$, $callbackObj$$112$$);
  this.$_selectionHandlers$ = {};
  this.$_tmap$ = $callbackObj$$112$$;
  this.$_bPassOnEvent$ = D.$JSCompiler_alias_FALSE$$
};
D.$JSCompiler_prototypeAlias$$.$getSelectionHandler$ = function $$JSCompiler_prototypeAlias$$$$getSelectionHandler$$($logicalObj$$19$$) {
  if($logicalObj$$19$$ && $logicalObj$$19$$.$getDataLayer$) {
    return this.$_selectionHandlers$[$logicalObj$$19$$.$getDataLayer$().$getClientId$()]
  }
};
D.$JSCompiler_prototypeAlias$$.$setSelectionHandler$ = function $$JSCompiler_prototypeAlias$$$$setSelectionHandler$$($dataLayerId$$5$$, $handler$$65$$) {
  this.$_selectionHandlers$[$dataLayerId$$5$$] = $handler$$65$$
};
D.$JSCompiler_prototypeAlias$$.$setDrillMode$ = (0,D.$JSCompiler_set$$)("$_drillMode$");
D.$JSCompiler_prototypeAlias$$.$removeFromSelection$ = function $$JSCompiler_prototypeAlias$$$$removeFromSelection$$($clientId$$10$$, $obj$$358$$) {
  var $selectionHandler$$14$$ = this.$_selectionHandlers$[$clientId$$10$$];
  $selectionHandler$$14$$ && $selectionHandler$$14$$.$removeFromSelection$($obj$$358$$)
};
D.$JSCompiler_prototypeAlias$$.$clearSelection$ = function $$JSCompiler_prototypeAlias$$$$clearSelection$$($clientId$$11_selectionHandler$$15$$) {
  ($clientId$$11_selectionHandler$$15$$ = this.$_selectionHandlers$[$clientId$$11_selectionHandler$$15$$]) && $clientId$$11_selectionHandler$$15$$.$clearSelection$()
};
D.$JSCompiler_prototypeAlias$$.$OnMouseOver$ = function $$JSCompiler_prototypeAlias$$$$OnMouseOver$$($event$$771$$) {
  var $obj$$359$$ = (0,D.$JSCompiler_StaticMethods_GetLogicalObject$$)(this, $event$$771$$.target);
  $obj$$359$$ && ($obj$$359$$.$getShowPopupBehaviors$ && $obj$$359$$.$getDataLayer$) && (this.$_tmap$.$_eventClientId$ = $obj$$359$$.$getDataLayer$().$getClientId$());
  D.$DvtThematicMapEventManager$$.$superclass$.$OnMouseOver$.call(this, $event$$771$$)
};
D.$JSCompiler_prototypeAlias$$.$OnMouseOut$ = function $$JSCompiler_prototypeAlias$$$$OnMouseOut$$($event$$772$$) {
  this.$_tmap$.$_eventClientId$ = D.$JSCompiler_alias_NULL$$;
  D.$DvtThematicMapEventManager$$.$superclass$.$OnMouseOut$.call(this, $event$$772$$)
};
D.$JSCompiler_prototypeAlias$$.$OnClick$ = function $$JSCompiler_prototypeAlias$$$$OnClick$$($event$$773$$) {
  var $obj$$360$$ = (0,D.$JSCompiler_StaticMethods_GetLogicalObject$$)(this, $event$$773$$.target);
  (0,D.$JSCompiler_StaticMethods_SetClickInfo$$)(this, $obj$$360$$);
  if(!$obj$$360$$ || !$obj$$360$$.$isSelectable$ || !$obj$$360$$.$isSelectable$()) {
    for(var $clientId$$12$$ in this.$_selectionHandlers$) {
      if(this.$_selectionHandlers$[$clientId$$12$$].$processClick$(D.$JSCompiler_alias_NULL$$, $event$$773$$.ctrlKey)) {
        var $selectionEvent$$2$$ = new D.$DvtSelectionEvent$$([]);
        (0,D.$JSCompiler_StaticMethods_addParam$$)($selectionEvent$$2$$, "clientId", $clientId$$12$$);
        this.$_callback$.call(this.$_callbackObj$, $selectionEvent$$2$$)
      }
    }
  }
  D.$DvtThematicMapEventManager$$.$superclass$.$OnClick$.call(this, $event$$773$$);
  this.$_handleClick$($obj$$360$$, $event$$773$$.pageX, $event$$773$$.pageY)
};
D.$JSCompiler_prototypeAlias$$.$_handleClick$ = function $$JSCompiler_prototypeAlias$$$$_handleClick$$($obj$$361$$, $pageX$$13$$, $pageY$$13$$) {
  if($obj$$361$$ instanceof D.$DvtMapObjPeer$$) {
    var $callback$$160$$ = $obj$$361$$.$getLinkCallback$();
    $callback$$160$$ ? $callback$$160$$.call() : $obj$$361$$.$getAction$() != D.$JSCompiler_alias_NULL$$ ? (0,D.$JSCompiler_StaticMethods_HandleAction$$)(this, $obj$$361$$, $pageX$$13$$, $pageY$$13$$) : $obj$$361$$.$getShowPopupBehaviors$() && (this.$_tmap$.$_eventClientId$ = $obj$$361$$.$getDataLayer$().$getClientId$())
  }
};
D.$JSCompiler_StaticMethods_HandleAction$$ = function $$JSCompiler_StaticMethods_HandleAction$$$($JSCompiler_StaticMethods_HandleAction$self$$, $obj$$362_offset$$35$$, $pageX$$14$$, $pageY$$14$$) {
  var $actionEvent$$ = new D.$DvtMapActionEvent$$($obj$$362_offset$$35$$.$getClientId$(), $obj$$362_offset$$35$$.getId(), $obj$$362_offset$$35$$.$getAction$());
  (0,D.$JSCompiler_StaticMethods_addParam$$)($actionEvent$$, "clientId", $obj$$362_offset$$35$$.$getDataLayer$().$getClientId$());
  $pageX$$14$$ != D.$JSCompiler_alias_NULL$$ && $pageY$$14$$ != D.$JSCompiler_alias_NULL$$ && ($obj$$362_offset$$35$$ = (0,D.$JSCompiler_StaticMethods_pageToStageCoords$$)($JSCompiler_StaticMethods_HandleAction$self$$.$_tmap$.$getCtx$(), $pageX$$14$$, $pageY$$14$$), (0,D.$JSCompiler_StaticMethods_addParam$$)($actionEvent$$, "pointXY", {x:$obj$$362_offset$$35$$.x, y:$obj$$362_offset$$35$$.y}));
  $JSCompiler_StaticMethods_HandleAction$self$$.$hideTooltip$();
  $JSCompiler_StaticMethods_HandleAction$self$$.$_callback$.call($JSCompiler_StaticMethods_HandleAction$self$$.$_callbackObj$, $actionEvent$$)
};
D.$JSCompiler_StaticMethods_SetClickInfo$$ = function $$JSCompiler_StaticMethods_SetClickInfo$$$($JSCompiler_StaticMethods_SetClickInfo$self$$, $obj$$363$$) {
  var $clientId$$13$$ = D.$JSCompiler_alias_NULL$$, $dataLayer$$10_mapLayer$$1$$ = D.$JSCompiler_alias_NULL$$, $clickedObj$$ = D.$JSCompiler_alias_NULL$$;
  $obj$$363$$ && ($obj$$363$$ instanceof D.$DvtMapObjPeer$$ ? $clickedObj$$ = $obj$$363$$.$getDisplayable$() : $obj$$363$$ instanceof D.$DvtMapArea$$ && ($clickedObj$$ = $obj$$363$$), $obj$$363$$.$getDataLayer$ && ($dataLayer$$10_mapLayer$$1$$ = $obj$$363$$.$getDataLayer$(), $clientId$$13$$ = $dataLayer$$10_mapLayer$$1$$.$getClientId$(), $dataLayer$$10_mapLayer$$1$$ = $dataLayer$$10_mapLayer$$1$$.$_parentLayer$.$LayerName$));
  var $JSCompiler_StaticMethods_setClickInfo$self$$inline_8508$$ = $JSCompiler_StaticMethods_SetClickInfo$self$$.$_tmap$;
  $JSCompiler_StaticMethods_setClickInfo$self$$inline_8508$$.$_clickedLayerName$ = $dataLayer$$10_mapLayer$$1$$;
  $JSCompiler_StaticMethods_setClickInfo$self$$inline_8508$$.$_clickedDataLayerId$ = $clientId$$13$$;
  $JSCompiler_StaticMethods_setClickInfo$self$$inline_8508$$.$_clickedObject$ = $clickedObj$$
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtThematicMapEventManager$$.prototype;
D.$JSCompiler_prototypeAlias$$.$OnDblClickInternal$ = function $$JSCompiler_prototypeAlias$$$$OnDblClickInternal$$($drillEvent_event$$774_obj$$364$$) {
  $drillEvent_event$$774_obj$$364$$ = (0,D.$JSCompiler_StaticMethods_GetLogicalObject$$)(this, $drillEvent_event$$774_obj$$364$$.target);
  this.$getSelectionHandler$($drillEvent_event$$774_obj$$364$$) && (this.$_drillMode$ && "none" != this.$_drillMode$) && ($drillEvent_event$$774_obj$$364$$ = new D.$DvtMapDrillEvent$$(D.$DvtMapDrillEvent$$.$DRILL_DOWN$), this.$_callback$.call(this.$_callbackObj$, $drillEvent_event$$774_obj$$364$$))
};
D.$JSCompiler_prototypeAlias$$.$ProcessKeyboardEvent$ = function $$JSCompiler_prototypeAlias$$$$ProcessKeyboardEvent$$($event$$775$$) {
  var $eventConsumed$$7$$ = D.$JSCompiler_alias_TRUE$$, $keyCode$$51$$ = $event$$775$$.keyCode, $JSCompiler_StaticMethods_fitRegion$self$$inline_8513_focusObj$$2_legendPanel$$ = this.$getFocus$(), $callback$$161_focusDisp$$1_toFit$$inline_8514$$ = $JSCompiler_StaticMethods_fitRegion$self$$inline_8513_focusObj$$2_legendPanel$$.$getDisplayable$();
  9 != $keyCode$$51$$ && this.$_bPassOnEvent$ ? ($callback$$161_focusDisp$$1_toFit$$inline_8514$$.$fireKeyboardListener$($event$$775$$), $event$$775$$.preventDefault()) : (48 == $keyCode$$51$$ || 96 == $keyCode$$51$$) && $event$$775$$.ctrlKey && $event$$775$$.shiftKey ? (this.$_tmap$.$resetMap$(), $event$$775$$.preventDefault()) : 220 == $keyCode$$51$$ ? (($JSCompiler_StaticMethods_fitRegion$self$$inline_8513_focusObj$$2_legendPanel$$ = this.$_tmap$.$_legendPanel$) && ($JSCompiler_StaticMethods_fitRegion$self$$inline_8513_focusObj$$2_legendPanel$$ instanceof 
  D.$DvtCollapsiblePanel$$ ? (0,D.$JSCompiler_StaticMethods_setCollapsed$$)($JSCompiler_StaticMethods_fitRegion$self$$inline_8513_focusObj$$2_legendPanel$$, !$JSCompiler_StaticMethods_fitRegion$self$$inline_8513_focusObj$$2_legendPanel$$.isCollapsed()) : $JSCompiler_StaticMethods_fitRegion$self$$inline_8513_focusObj$$2_legendPanel$$ instanceof D.$DvtPanelDrawer$$ && $JSCompiler_StaticMethods_fitRegion$self$$inline_8513_focusObj$$2_legendPanel$$.$setDisclosed$(!$JSCompiler_StaticMethods_fitRegion$self$$inline_8513_focusObj$$2_legendPanel$$.$isDisclosed$())), 
  $event$$775$$.preventDefault()) : 13 == $keyCode$$51$$ ? $JSCompiler_StaticMethods_fitRegion$self$$inline_8513_focusObj$$2_legendPanel$$ instanceof D.$DvtMapObjPeer$$ && (($callback$$161_focusDisp$$1_toFit$$inline_8514$$ = $JSCompiler_StaticMethods_fitRegion$self$$inline_8513_focusObj$$2_legendPanel$$.$getLinkCallback$()) ? $callback$$161_focusDisp$$1_toFit$$inline_8514$$.call() : $JSCompiler_StaticMethods_fitRegion$self$$inline_8513_focusObj$$2_legendPanel$$.$getAction$() != D.$JSCompiler_alias_NULL$$ ? 
  (0,D.$JSCompiler_StaticMethods_HandleAction$$)(this, $JSCompiler_StaticMethods_fitRegion$self$$inline_8513_focusObj$$2_legendPanel$$) : $event$$775$$.shiftKey ? this.$_tmap$.$drillUp$() : this.$_tmap$.$drillDown$(), $event$$775$$.preventDefault()) : 32 == $keyCode$$51$$ && $event$$775$$.ctrlKey ? ((0,D.$JSCompiler_StaticMethods_SetClickInfo$$)(this, $JSCompiler_StaticMethods_fitRegion$self$$inline_8513_focusObj$$2_legendPanel$$), (0,D.$JSCompiler_StaticMethods_ProcessSelectionEventHelper$$)(this, 
  $JSCompiler_StaticMethods_fitRegion$self$$inline_8513_focusObj$$2_legendPanel$$, D.$JSCompiler_alias_TRUE$$), $event$$775$$.preventDefault()) : (48 == $keyCode$$51$$ || 96 == $keyCode$$51$$) && $event$$775$$.ctrlKey ? ($event$$775$$.altKey ? ($JSCompiler_StaticMethods_fitRegion$self$$inline_8513_focusObj$$2_legendPanel$$ = this.$_tmap$, $callback$$161_focusDisp$$1_toFit$$inline_8514$$ || ($callback$$161_focusDisp$$1_toFit$$inline_8514$$ = $JSCompiler_StaticMethods_fitRegion$self$$inline_8513_focusObj$$2_legendPanel$$.$_zoomToFitObject$), 
  $callback$$161_focusDisp$$1_toFit$$inline_8514$$ || ($callback$$161_focusDisp$$1_toFit$$inline_8514$$ = $JSCompiler_StaticMethods_fitRegion$self$$inline_8513_focusObj$$2_legendPanel$$.$_clickedObject$), $JSCompiler_StaticMethods_fitRegion$self$$inline_8513_focusObj$$2_legendPanel$$.$_zoomToFitBounds$($callback$$161_focusDisp$$1_toFit$$inline_8514$$.$getDimensions$())) : (0,D.$JSCompiler_StaticMethods_fitSelectedRegions$$)(this.$_tmap$), $event$$775$$.preventDefault()) : 9 == $keyCode$$51$$ && $callback$$161_focusDisp$$1_toFit$$inline_8514$$ instanceof 
  D.$DvtCustomDataItem$$ ? !$event$$775$$.shiftKey && $JSCompiler_StaticMethods_fitRegion$self$$inline_8513_focusObj$$2_legendPanel$$.$isShowingKeyboardFocusEffect$() ? ($JSCompiler_StaticMethods_fitRegion$self$$inline_8513_focusObj$$2_legendPanel$$.$hideKeyboardFocusEffect$(), $callback$$161_focusDisp$$1_toFit$$inline_8514$$.$fireKeyboardListener$($event$$775$$), $event$$775$$.preventDefault(), this.$_bPassOnEvent$ = D.$JSCompiler_alias_TRUE$$) : ($event$$775$$.shiftKey && this.$_bPassOnEvent$ ? 
  (this.$ShowFocusEffect$($event$$775$$, $JSCompiler_StaticMethods_fitRegion$self$$inline_8513_focusObj$$2_legendPanel$$), $event$$775$$.preventDefault()) : (this.$_bPassOnEvent$ && $JSCompiler_StaticMethods_fitRegion$self$$inline_8513_focusObj$$2_legendPanel$$.$showKeyboardFocusEffect$(), $eventConsumed$$7$$ = D.$DvtThematicMapEventManager$$.$superclass$.$ProcessKeyboardEvent$.call(this, $event$$775$$)), this.$_bPassOnEvent$ = D.$JSCompiler_alias_FALSE$$) : $eventConsumed$$7$$ = D.$DvtThematicMapEventManager$$.$superclass$.$ProcessKeyboardEvent$.call(this, 
  $event$$775$$);
  return $eventConsumed$$7$$
};
D.$JSCompiler_prototypeAlias$$.$OnComponentTouchClick$ = function $$JSCompiler_prototypeAlias$$$$OnComponentTouchClick$$($event$$776$$) {
  if(!(0,D.$JSCompiler_StaticMethods_GetEventInfo$$)(this, $event$$776$$, "panned")) {
    var $obj$$365$$ = (0,D.$JSCompiler_StaticMethods_GetLogicalObject$$)(this, $event$$776$$.target);
    (0,D.$JSCompiler_StaticMethods_SetClickInfo$$)(this, $obj$$365$$);
    if($obj$$365$$ instanceof D.$DvtThematicMap$$) {
      for(var $clientId$$14$$ in this.$_selectionHandlers$) {
        if(this.$_selectionHandlers$[$clientId$$14$$].$processClick$(D.$JSCompiler_alias_NULL$$, $event$$776$$.ctrlKey)) {
          for(var $selectedObjs$$2_selectionEvent$$3$$ = this.$_selectionHandlers$[$clientId$$14$$].getSelection(), $selectedIds$$10$$ = [], $i$$832$$ = 0;$i$$832$$ < $selectedObjs$$2_selectionEvent$$3$$.length;$i$$832$$++) {
            $selectedIds$$10$$.push($selectedObjs$$2_selectionEvent$$3$$[$i$$832$$].getId())
          }
          $selectedObjs$$2_selectionEvent$$3$$ = new D.$DvtSelectionEvent$$($selectedIds$$10$$);
          this.$_callback$.call(this.$_callbackObj$, $selectedObjs$$2_selectionEvent$$3$$)
        }
      }
    }
    D.$DvtThematicMapEventManager$$.$superclass$.$OnComponentTouchClick$.call(this, $event$$776$$);
    this.$_handleClick$($obj$$365$$, $event$$776$$.$touch$.pageX, $event$$776$$.$touch$.pageY)
  }
};
D.$JSCompiler_prototypeAlias$$.$HandleTouchHoverStartInternal$ = function $$JSCompiler_prototypeAlias$$$$HandleTouchHoverStartInternal$$($event$$777_obj$$366$$) {
  $event$$777_obj$$366$$ = (0,D.$JSCompiler_StaticMethods_GetLogicalObject$$)(this, $event$$777_obj$$366$$.target);
  this.$_tmap$.$_eventClientId$ = $event$$777_obj$$366$$ && $event$$777_obj$$366$$.$getShowPopupBehaviors$ && $event$$777_obj$$366$$.$getDataLayer$ ? $event$$777_obj$$366$$.$getDataLayer$().$getClientId$() : D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.$HandleTouchHoverOverInternal$ = function $$JSCompiler_prototypeAlias$$$$HandleTouchHoverOverInternal$$($event$$778_obj$$367$$) {
  $event$$778_obj$$367$$ = (0,D.$JSCompiler_StaticMethods_GetLogicalObject$$)(this, $event$$778_obj$$367$$.target);
  this.$_tmap$.$_eventClientId$ = $event$$778_obj$$367$$ && $event$$778_obj$$367$$.$getShowPopupBehaviors$ && $event$$778_obj$$367$$.$getDataLayer$ ? $event$$778_obj$$367$$.$getDataLayer$().$getClientId$() : D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.$HandleTouchDblClickInternal$ = function $$JSCompiler_prototypeAlias$$$$HandleTouchDblClickInternal$$($drillEvent$$1_event$$779$$) {
  var $obj$$368$$ = (0,D.$JSCompiler_StaticMethods_GetLogicalObject$$)(this, $drillEvent$$1_event$$779$$.target);
  $obj$$368$$ && (this.$getSelectionHandler$($obj$$368$$) && this.$_drillMode$ && "none" != this.$_drillMode$) && ((0,D.$JSCompiler_StaticMethods_ProcessSelectionEventHelper$$)(this, $obj$$368$$, $drillEvent$$1_event$$779$$.ctrlKey), $drillEvent$$1_event$$779$$ = new D.$DvtMapDrillEvent$$(D.$DvtMapDrillEvent$$.$DRILL_DOWN$), this.$_callback$.call(this.$_callbackObj$, $drillEvent$$1_event$$779$$))
};
D.$JSCompiler_prototypeAlias$$.$HandleTouchActionsEnd$ = function $$JSCompiler_prototypeAlias$$$$HandleTouchActionsEnd$$($event$$780$$, $touch$$53$$) {
  var $obj$$369$$ = (0,D.$JSCompiler_StaticMethods_GetLogicalObject$$)(this, $event$$780$$.target);
  (0,D.$JSCompiler_StaticMethods_SetClickInfo$$)(this, $obj$$369$$);
  D.$DvtThematicMapEventManager$$.$superclass$.$HandleTouchActionsEnd$.call(this, $event$$780$$, $touch$$53$$)
};
D.$JSCompiler_prototypeAlias$$.$ProcessRolloverEvent$ = function $$JSCompiler_prototypeAlias$$$$ProcessRolloverEvent$$($event$$781_options$$269$$, $categories$$29_hoverBehaviorDelay$$6_obj$$370$$, $bOver$$13_rolloverEvent$$8$$) {
  $event$$781_options$$269$$ = this.$_tmap$.$getOptions$();
  "dim" == $event$$781_options$$269$$.hoverBehavior && ($categories$$29_hoverBehaviorDelay$$6_obj$$370$$ = $categories$$29_hoverBehaviorDelay$$6_obj$$370$$.$getCategories$ ? $categories$$29_hoverBehaviorDelay$$6_obj$$370$$.$getCategories$() : [], $event$$781_options$$269$$.highlightedCategories = $bOver$$13_rolloverEvent$$8$$ ? $categories$$29_hoverBehaviorDelay$$6_obj$$370$$.slice() : D.$JSCompiler_alias_NULL$$, $bOver$$13_rolloverEvent$$8$$ = new D.$DvtCategoryRolloverEvent$$($bOver$$13_rolloverEvent$$8$$ ? 
  "categoryRollOver" : "categoryRollOut", $event$$781_options$$269$$.highlightedCategories), $categories$$29_hoverBehaviorDelay$$6_obj$$370$$ = (0,D.$DvtStyleUtils$getTimeMilliseconds$$)($event$$781_options$$269$$.styleDefaults.hoverBehaviorDelay), this.$RolloverHandler$.$processEvent$($bOver$$13_rolloverEvent$$8$$, (0,D.$JSCompiler_StaticMethods_getNavigableAreas$$)(this.$_tmap$).concat((0,D.$JSCompiler_StaticMethods_getNavigableObjects$$)(this.$_tmap$)), $categories$$29_hoverBehaviorDelay$$6_obj$$370$$, 
  "any" == $event$$781_options$$269$$.highlightMatch))
};
D.$JSCompiler_prototypeAlias$$.$GetTouchResponse$ = function $$JSCompiler_prototypeAlias$$$$GetTouchResponse$$() {
  var $options$$270$$ = this.$_tmap$.$getOptions$();
  return"none" !== $options$$270$$.panning || "none" !== $options$$270$$.zooming ? "touchHold" : "touchStart" === $options$$270$$.touchResponse ? "touchStart" : "auto"
};
D.$JSCompiler_prototypeAlias$$.$StoreInfoByEventType$ = function $$JSCompiler_prototypeAlias$$$$StoreInfoByEventType$$($key$$128$$) {
  return"panned" == $key$$128$$ ? D.$JSCompiler_alias_FALSE$$ : D.$DvtThematicMapEventManager$$.$superclass$.$StoreInfoByEventType$.call(this, $key$$128$$)
};
D.$DvtThematicMapJsonParser$$ = function $$DvtThematicMapJsonParser$$$($tmap$$9$$) {
  this.Init($tmap$$9$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtThematicMapJsonParser$$, D.$DvtObj$$, "DvtThematicMapJsonParser");
D.$DvtThematicMapJsonParser$$.prototype.Init = function $$DvtThematicMapJsonParser$$$$Init$($tmap$$10$$) {
  this.$_tmap$ = $tmap$$10$$;
  this.$_isCustomBasemap$ = D.$JSCompiler_alias_FALSE$$;
  this.$_areaLayerStyle$ = D.$JSCompiler_alias_NULL$$;
  this.$_isMobile$ = (0,D.$DvtAgent$isTouchDevice$$)();
  this.$_customAreaLayerImages$ = {};
  this.$_customMarkerDefs$ = {}
};
D.$DvtThematicMapJsonParser$$.prototype.parse = function $$DvtThematicMapJsonParser$$$$parse$($options$$271$$) {
  var $JSCompiler_StaticMethods_setMapName$self$$inline_11343_animDur$$inline_8530_areaLayers$$inline_8548_childNodes$$inline_8542_maxZoomFactor$$inline_11377_popups$$inline_8532_styles$$inline_8538_tooltipDisplay$$inline_8531$$ = $options$$271$$.animationDuration;
  "string" == typeof $JSCompiler_StaticMethods_setMapName$self$$inline_11343_animDur$$inline_8530_areaLayers$$inline_8548_childNodes$$inline_8542_maxZoomFactor$$inline_11377_popups$$inline_8532_styles$$inline_8538_tooltipDisplay$$inline_8531$$ ? "ms" == $JSCompiler_StaticMethods_setMapName$self$$inline_11343_animDur$$inline_8530_areaLayers$$inline_8548_childNodes$$inline_8542_maxZoomFactor$$inline_11377_popups$$inline_8532_styles$$inline_8538_tooltipDisplay$$inline_8531$$.slice(-2) ? $JSCompiler_StaticMethods_setMapName$self$$inline_11343_animDur$$inline_8530_areaLayers$$inline_8548_childNodes$$inline_8542_maxZoomFactor$$inline_11377_popups$$inline_8532_styles$$inline_8538_tooltipDisplay$$inline_8531$$ = 
  (0,window.parseInt)($JSCompiler_StaticMethods_setMapName$self$$inline_11343_animDur$$inline_8530_areaLayers$$inline_8548_childNodes$$inline_8542_maxZoomFactor$$inline_11377_popups$$inline_8532_styles$$inline_8538_tooltipDisplay$$inline_8531$$.slice(0, -2)) / 1E3 : "s" == $JSCompiler_StaticMethods_setMapName$self$$inline_11343_animDur$$inline_8530_areaLayers$$inline_8548_childNodes$$inline_8542_maxZoomFactor$$inline_11377_popups$$inline_8532_styles$$inline_8538_tooltipDisplay$$inline_8531$$.slice(-1) && 
  ($JSCompiler_StaticMethods_setMapName$self$$inline_11343_animDur$$inline_8530_areaLayers$$inline_8548_childNodes$$inline_8542_maxZoomFactor$$inline_11377_popups$$inline_8532_styles$$inline_8538_tooltipDisplay$$inline_8531$$ = (0,window.parseFloat)($JSCompiler_StaticMethods_setMapName$self$$inline_11343_animDur$$inline_8530_areaLayers$$inline_8548_childNodes$$inline_8542_maxZoomFactor$$inline_11377_popups$$inline_8532_styles$$inline_8538_tooltipDisplay$$inline_8531$$.slice(0, -1))) : $JSCompiler_StaticMethods_setMapName$self$$inline_11343_animDur$$inline_8530_areaLayers$$inline_8548_childNodes$$inline_8542_maxZoomFactor$$inline_11377_popups$$inline_8532_styles$$inline_8538_tooltipDisplay$$inline_8531$$ /= 
  1E3;
  this.$_tmap$.$setAnimationDuration$($JSCompiler_StaticMethods_setMapName$self$$inline_11343_animDur$$inline_8530_areaLayers$$inline_8548_childNodes$$inline_8542_maxZoomFactor$$inline_11377_popups$$inline_8532_styles$$inline_8538_tooltipDisplay$$inline_8531$$);
  this.$_tmap$.$_animationOnDisplay$ = "auto" == $options$$271$$.animationOnDisplay ? "alphaFade" : $options$$271$$.animationOnDisplay;
  this.$_tmap$.$_animationOnMapChange$ = "auto" == $options$$271$$.animationOnMapChange ? "alphaFade" : $options$$271$$.animationOnMapChange;
  this.$_isCustomBasemap$ = $options$$271$$.source != D.$JSCompiler_alias_NULL$$;
  var $JSCompiler_StaticMethods_setMapName$self$$inline_11343_animDur$$inline_8530_areaLayers$$inline_8548_childNodes$$inline_8542_maxZoomFactor$$inline_11377_popups$$inline_8532_styles$$inline_8538_tooltipDisplay$$inline_8531$$ = this.$_tmap$, $attr$$inline_11344_basemap$$inline_8549_i$$inline_8545$$ = this.$_isCustomBasemap$ ? "$" + $options$$271$$.basemap : $options$$271$$.basemap;
  $JSCompiler_StaticMethods_setMapName$self$$inline_11343_animDur$$inline_8530_areaLayers$$inline_8548_childNodes$$inline_8542_maxZoomFactor$$inline_11377_popups$$inline_8532_styles$$inline_8538_tooltipDisplay$$inline_8531$$.$_bBaseMapChanged$ = $JSCompiler_StaticMethods_setMapName$self$$inline_11343_animDur$$inline_8530_areaLayers$$inline_8548_childNodes$$inline_8542_maxZoomFactor$$inline_11377_popups$$inline_8532_styles$$inline_8538_tooltipDisplay$$inline_8531$$.$_mapName$ && $JSCompiler_StaticMethods_setMapName$self$$inline_11343_animDur$$inline_8530_areaLayers$$inline_8548_childNodes$$inline_8542_maxZoomFactor$$inline_11377_popups$$inline_8532_styles$$inline_8538_tooltipDisplay$$inline_8531$$.$_mapName$ != 
  $attr$$inline_11344_basemap$$inline_8549_i$$inline_8545$$;
  $JSCompiler_StaticMethods_setMapName$self$$inline_11343_animDur$$inline_8530_areaLayers$$inline_8548_childNodes$$inline_8542_maxZoomFactor$$inline_11377_popups$$inline_8532_styles$$inline_8538_tooltipDisplay$$inline_8531$$.$_mapName$ = $attr$$inline_11344_basemap$$inline_8549_i$$inline_8545$$;
  this.$_tmap$.$setFeaturesOff$($options$$271$$.featuresOff);
  this.$_tmap$.$_controlPanelBehavior$ = $options$$271$$.controlPanelBehavior;
  $JSCompiler_StaticMethods_setMapName$self$$inline_11343_animDur$$inline_8530_areaLayers$$inline_8548_childNodes$$inline_8542_maxZoomFactor$$inline_11377_popups$$inline_8532_styles$$inline_8538_tooltipDisplay$$inline_8531$$ = $options$$271$$.tooltipDisplay;
  "shortDesc" == $JSCompiler_StaticMethods_setMapName$self$$inline_11343_animDur$$inline_8530_areaLayers$$inline_8548_childNodes$$inline_8542_maxZoomFactor$$inline_11377_popups$$inline_8532_styles$$inline_8538_tooltipDisplay$$inline_8531$$ ? $JSCompiler_StaticMethods_setMapName$self$$inline_11343_animDur$$inline_8530_areaLayers$$inline_8548_childNodes$$inline_8542_maxZoomFactor$$inline_11377_popups$$inline_8532_styles$$inline_8538_tooltipDisplay$$inline_8531$$ = "shortDescOnly" : "labelAndShortDesc" == 
  $JSCompiler_StaticMethods_setMapName$self$$inline_11343_animDur$$inline_8530_areaLayers$$inline_8548_childNodes$$inline_8542_maxZoomFactor$$inline_11377_popups$$inline_8532_styles$$inline_8538_tooltipDisplay$$inline_8531$$ && ($JSCompiler_StaticMethods_setMapName$self$$inline_11343_animDur$$inline_8530_areaLayers$$inline_8548_childNodes$$inline_8542_maxZoomFactor$$inline_11377_popups$$inline_8532_styles$$inline_8538_tooltipDisplay$$inline_8531$$ = "auto");
  this.$_tmap$.$_displayTooltips$ = $JSCompiler_StaticMethods_setMapName$self$$inline_11343_animDur$$inline_8530_areaLayers$$inline_8548_childNodes$$inline_8542_maxZoomFactor$$inline_11377_popups$$inline_8532_styles$$inline_8538_tooltipDisplay$$inline_8531$$;
  ($JSCompiler_StaticMethods_setMapName$self$$inline_11343_animDur$$inline_8530_areaLayers$$inline_8548_childNodes$$inline_8542_maxZoomFactor$$inline_11377_popups$$inline_8532_styles$$inline_8538_tooltipDisplay$$inline_8531$$ = $options$$271$$.popups) && this.$_tmap$.$setShowPopupBehaviors$(this.$_getShowPopupBehaviors$($JSCompiler_StaticMethods_setMapName$self$$inline_11343_animDur$$inline_8530_areaLayers$$inline_8548_childNodes$$inline_8542_maxZoomFactor$$inline_11377_popups$$inline_8532_styles$$inline_8538_tooltipDisplay$$inline_8531$$));
  this.$_tmap$.$setDrillMode$($options$$271$$.drilling);
  this.$_tmap$.$_animationOnDrill$ = $options$$271$$.animationOnDrill;
  this.$_tmap$.$_initialZooming$ = "auto" == $options$$271$$.initialZooming;
  this.$_tmap$.$_isMarkerZoomBehaviorFixed$ = "fixed" == $options$$271$$.markerZoomBehavior;
  this.$_tmap$.$_panning$ = "auto" == $options$$271$$.panning;
  this.$_tmap$.$_zooming$ = "auto" == $options$$271$$.zooming;
  this.$_tmap$.$_initialCenterX$ = $options$$271$$.panX;
  this.$_tmap$.$_initialCenterY$ = $options$$271$$.panY;
  this.$_tmap$.$_initialZoom$ = $options$$271$$.zoom;
  (0,window.isNaN)($options$$271$$.maxZoom) || ($JSCompiler_StaticMethods_setMapName$self$$inline_11343_animDur$$inline_8530_areaLayers$$inline_8548_childNodes$$inline_8542_maxZoomFactor$$inline_11377_popups$$inline_8532_styles$$inline_8538_tooltipDisplay$$inline_8531$$ = window.Math.max($options$$271$$.maxZoom, 1), this.$_tmap$.$_maxZoomFactor$ = $JSCompiler_StaticMethods_setMapName$self$$inline_11343_animDur$$inline_8530_areaLayers$$inline_8548_childNodes$$inline_8542_maxZoomFactor$$inline_11377_popups$$inline_8532_styles$$inline_8538_tooltipDisplay$$inline_8531$$);
  $options$$271$$._legend && (this.$_tmap$.$_legendData$ = $options$$271$$._legend);
  $JSCompiler_StaticMethods_setMapName$self$$inline_11343_animDur$$inline_8530_areaLayers$$inline_8548_childNodes$$inline_8542_maxZoomFactor$$inline_11377_popups$$inline_8532_styles$$inline_8538_tooltipDisplay$$inline_8531$$ = $options$$271$$.styleDefaults;
  (0,D.$JSCompiler_StaticMethods_parseComponentJson$$)(this.$_tmap$, $JSCompiler_StaticMethods_setMapName$self$$inline_11343_animDur$$inline_8530_areaLayers$$inline_8548_childNodes$$inline_8542_maxZoomFactor$$inline_11377_popups$$inline_8532_styles$$inline_8538_tooltipDisplay$$inline_8531$$);
  this.$_areaLayerStyle$ = new D.$DvtCSSStyle$$($JSCompiler_StaticMethods_setMapName$self$$inline_11343_animDur$$inline_8530_areaLayers$$inline_8548_childNodes$$inline_8542_maxZoomFactor$$inline_11377_popups$$inline_8532_styles$$inline_8538_tooltipDisplay$$inline_8531$$.areaStyle);
  (0,D.$JSCompiler_StaticMethods_parseInlineStyle$$)(this.$_areaLayerStyle$, $JSCompiler_StaticMethods_setMapName$self$$inline_11343_animDur$$inline_8530_areaLayers$$inline_8548_childNodes$$inline_8542_maxZoomFactor$$inline_11377_popups$$inline_8532_styles$$inline_8538_tooltipDisplay$$inline_8531$$.labelStyle);
  this.$_areaDropSiteStyle$ = new D.$DvtCSSStyle$$($JSCompiler_StaticMethods_setMapName$self$$inline_11343_animDur$$inline_8530_areaLayers$$inline_8548_childNodes$$inline_8542_maxZoomFactor$$inline_11377_popups$$inline_8532_styles$$inline_8538_tooltipDisplay$$inline_8531$$.dropTargetStyle);
  this.$_tmap$.$_styleDefaults$ = $JSCompiler_StaticMethods_setMapName$self$$inline_11343_animDur$$inline_8530_areaLayers$$inline_8548_childNodes$$inline_8542_maxZoomFactor$$inline_11377_popups$$inline_8532_styles$$inline_8538_tooltipDisplay$$inline_8531$$;
  if(this.$_isCustomBasemap$ && $options$$271$$.sourceXml) {
    for(var $JSCompiler_StaticMethods_setMapName$self$$inline_11343_animDur$$inline_8530_areaLayers$$inline_8548_childNodes$$inline_8542_maxZoomFactor$$inline_11377_popups$$inline_8532_styles$$inline_8538_tooltipDisplay$$inline_8531$$ = (new D.$DvtXmlParser$$).parse($options$$271$$.sourceXml).$getChildNodes$(), $childNodes$$inline_11384_childNodes$$inline_11396_i$$inline_8550_node$$inline_8543$$, $areaLayer$$inline_8551_layerName$$inline_11385_node$$inline_11397_nodeName$$inline_8544_xmlNode$$inline_11383$$, 
    $attr$$inline_11344_basemap$$inline_8549_i$$inline_8545$$ = 0;$attr$$inline_11344_basemap$$inline_8549_i$$inline_8545$$ < $JSCompiler_StaticMethods_setMapName$self$$inline_11343_animDur$$inline_8530_areaLayers$$inline_8548_childNodes$$inline_8542_maxZoomFactor$$inline_11377_popups$$inline_8532_styles$$inline_8538_tooltipDisplay$$inline_8531$$.length;$attr$$inline_11344_basemap$$inline_8549_i$$inline_8545$$++) {
      if($childNodes$$inline_11384_childNodes$$inline_11396_i$$inline_8550_node$$inline_8543$$ = $JSCompiler_StaticMethods_setMapName$self$$inline_11343_animDur$$inline_8530_areaLayers$$inline_8548_childNodes$$inline_8542_maxZoomFactor$$inline_11377_popups$$inline_8532_styles$$inline_8538_tooltipDisplay$$inline_8531$$[$attr$$inline_11344_basemap$$inline_8549_i$$inline_8545$$], $areaLayer$$inline_8551_layerName$$inline_11385_node$$inline_11397_nodeName$$inline_8544_xmlNode$$inline_11383$$ = $childNodes$$inline_11384_childNodes$$inline_11396_i$$inline_8550_node$$inline_8543$$.getName(), 
      "layer" == $areaLayer$$inline_8551_layerName$$inline_11385_node$$inline_11397_nodeName$$inline_8544_xmlNode$$inline_11383$$) {
        $areaLayer$$inline_8551_layerName$$inline_11385_node$$inline_11397_nodeName$$inline_8544_xmlNode$$inline_11383$$ = $childNodes$$inline_11384_childNodes$$inline_11396_i$$inline_8550_node$$inline_8543$$;
        $childNodes$$inline_11384_childNodes$$inline_11396_i$$inline_8550_node$$inline_8543$$ = $areaLayer$$inline_8551_layerName$$inline_11385_node$$inline_11397_nodeName$$inline_8544_xmlNode$$inline_11383$$.$getChildNodes$();
        $areaLayer$$inline_8551_layerName$$inline_11385_node$$inline_11397_nodeName$$inline_8544_xmlNode$$inline_11383$$ = $areaLayer$$inline_8551_layerName$$inline_11385_node$$inline_11397_nodeName$$inline_8544_xmlNode$$inline_11383$$.$getAttr$("id");
        for(var $JSCompiler_StaticMethods_setAreaLayerImage$self$$inline_11403_areaNames$$inline_8554_dir$$inline_11392_labels$$inline_11400_node$$inline_11386_values$$inline_11425$$ = D.$JSCompiler_alias_VOID$$, $JSCompiler_temp_const$$9328_i$$inline_11401_image$$inline_11390_isRTL$$inline_11406_nodeName$$inline_11387$$ = D.$JSCompiler_alias_VOID$$, $images$$inline_11388_mapLayer$$inline_8553_nodeName$$inline_11398$$ = [], $children$$inline_11428_i$$inline_11389_images$$inline_11404_layer$$inline_8552_points$$inline_11399$$ = 
        0;$children$$inline_11428_i$$inline_11389_images$$inline_11404_layer$$inline_8552_points$$inline_11399$$ < $childNodes$$inline_11384_childNodes$$inline_11396_i$$inline_8550_node$$inline_8543$$.length;$children$$inline_11428_i$$inline_11389_images$$inline_11404_layer$$inline_8552_points$$inline_11399$$++) {
          if($JSCompiler_StaticMethods_setAreaLayerImage$self$$inline_11403_areaNames$$inline_8554_dir$$inline_11392_labels$$inline_11400_node$$inline_11386_values$$inline_11425$$ = $childNodes$$inline_11384_childNodes$$inline_11396_i$$inline_8550_node$$inline_8543$$[$children$$inline_11428_i$$inline_11389_images$$inline_11404_layer$$inline_8552_points$$inline_11399$$], $JSCompiler_temp_const$$9328_i$$inline_11401_image$$inline_11390_isRTL$$inline_11406_nodeName$$inline_11387$$ = $JSCompiler_StaticMethods_setAreaLayerImage$self$$inline_11403_areaNames$$inline_8554_dir$$inline_11392_labels$$inline_11400_node$$inline_11386_values$$inline_11425$$.getName(), 
          "image" == $JSCompiler_temp_const$$9328_i$$inline_11401_image$$inline_11390_isRTL$$inline_11406_nodeName$$inline_11387$$) {
            $JSCompiler_temp_const$$9328_i$$inline_11401_image$$inline_11390_isRTL$$inline_11406_nodeName$$inline_11387$$ = {};
            $JSCompiler_temp_const$$9328_i$$inline_11401_image$$inline_11390_isRTL$$inline_11406_nodeName$$inline_11387$$.source = $JSCompiler_StaticMethods_setAreaLayerImage$self$$inline_11403_areaNames$$inline_8554_dir$$inline_11392_labels$$inline_11400_node$$inline_11386_values$$inline_11425$$.$getAttr$("source");
            $JSCompiler_temp_const$$9328_i$$inline_11401_image$$inline_11390_isRTL$$inline_11406_nodeName$$inline_11387$$.width = $JSCompiler_StaticMethods_setAreaLayerImage$self$$inline_11403_areaNames$$inline_8554_dir$$inline_11392_labels$$inline_11400_node$$inline_11386_values$$inline_11425$$.$getAttr$("width");
            $JSCompiler_temp_const$$9328_i$$inline_11401_image$$inline_11390_isRTL$$inline_11406_nodeName$$inline_11387$$.height = $JSCompiler_StaticMethods_setAreaLayerImage$self$$inline_11403_areaNames$$inline_8554_dir$$inline_11392_labels$$inline_11400_node$$inline_11386_values$$inline_11425$$.$getAttr$("height");
            var $bidi$$inline_11391_refWidth$$inline_11407_shape$$inline_11405_shapes$$inline_11414$$ = $JSCompiler_StaticMethods_setAreaLayerImage$self$$inline_11403_areaNames$$inline_8554_dir$$inline_11392_labels$$inline_11400_node$$inline_11386_values$$inline_11425$$.$getAttr$("bidi"), $JSCompiler_StaticMethods_setAreaLayerImage$self$$inline_11403_areaNames$$inline_8554_dir$$inline_11392_labels$$inline_11400_node$$inline_11386_values$$inline_11425$$ = $JSCompiler_StaticMethods_setAreaLayerImage$self$$inline_11403_areaNames$$inline_8554_dir$$inline_11392_labels$$inline_11400_node$$inline_11386_values$$inline_11425$$.$getAttr$("dir");
            $JSCompiler_temp_const$$9328_i$$inline_11401_image$$inline_11390_isRTL$$inline_11406_nodeName$$inline_11387$$.dir = "true" == $bidi$$inline_11391_refWidth$$inline_11407_shape$$inline_11405_shapes$$inline_11414$$ || "rtl" == $JSCompiler_StaticMethods_setAreaLayerImage$self$$inline_11403_areaNames$$inline_8554_dir$$inline_11392_labels$$inline_11400_node$$inline_11386_values$$inline_11425$$ ? "rtl" : "ltr";
            $images$$inline_11388_mapLayer$$inline_8553_nodeName$$inline_11398$$.push($JSCompiler_temp_const$$9328_i$$inline_11401_image$$inline_11390_isRTL$$inline_11406_nodeName$$inline_11387$$)
          }
        }
        this.$_customAreaLayerImages$[$areaLayer$$inline_8551_layerName$$inline_11385_node$$inline_11397_nodeName$$inline_8544_xmlNode$$inline_11383$$] = $images$$inline_11388_mapLayer$$inline_8553_nodeName$$inline_11398$$
      }else {
        if("points" == $areaLayer$$inline_8551_layerName$$inline_11385_node$$inline_11397_nodeName$$inline_8544_xmlNode$$inline_11383$$) {
          $childNodes$$inline_11384_childNodes$$inline_11396_i$$inline_8550_node$$inline_8543$$ = $childNodes$$inline_11384_childNodes$$inline_11396_i$$inline_8550_node$$inline_8543$$.$getChildNodes$();
          $images$$inline_11388_mapLayer$$inline_8553_nodeName$$inline_11398$$ = $areaLayer$$inline_8551_layerName$$inline_11385_node$$inline_11397_nodeName$$inline_8544_xmlNode$$inline_11383$$ = D.$JSCompiler_alias_VOID$$;
          $children$$inline_11428_i$$inline_11389_images$$inline_11404_layer$$inline_8552_points$$inline_11399$$ = {};
          $JSCompiler_StaticMethods_setAreaLayerImage$self$$inline_11403_areaNames$$inline_8554_dir$$inline_11392_labels$$inline_11400_node$$inline_11386_values$$inline_11425$$ = {};
          for($JSCompiler_temp_const$$9328_i$$inline_11401_image$$inline_11390_isRTL$$inline_11406_nodeName$$inline_11387$$ = 0;$JSCompiler_temp_const$$9328_i$$inline_11401_image$$inline_11390_isRTL$$inline_11406_nodeName$$inline_11387$$ < $childNodes$$inline_11384_childNodes$$inline_11396_i$$inline_8550_node$$inline_8543$$.length;$JSCompiler_temp_const$$9328_i$$inline_11401_image$$inline_11390_isRTL$$inline_11406_nodeName$$inline_11387$$++) {
            $areaLayer$$inline_8551_layerName$$inline_11385_node$$inline_11397_nodeName$$inline_8544_xmlNode$$inline_11383$$ = $childNodes$$inline_11384_childNodes$$inline_11396_i$$inline_8550_node$$inline_8543$$[$JSCompiler_temp_const$$9328_i$$inline_11401_image$$inline_11390_isRTL$$inline_11406_nodeName$$inline_11387$$], $images$$inline_11388_mapLayer$$inline_8553_nodeName$$inline_11398$$ = $areaLayer$$inline_8551_layerName$$inline_11385_node$$inline_11397_nodeName$$inline_8544_xmlNode$$inline_11383$$.getName(), 
            "point" == $images$$inline_11388_mapLayer$$inline_8553_nodeName$$inline_11398$$ && ($children$$inline_11428_i$$inline_11389_images$$inline_11404_layer$$inline_8552_points$$inline_11399$$[$areaLayer$$inline_8551_layerName$$inline_11385_node$$inline_11397_nodeName$$inline_8544_xmlNode$$inline_11383$$.$getAttr$("name")] = [$areaLayer$$inline_8551_layerName$$inline_11385_node$$inline_11397_nodeName$$inline_8544_xmlNode$$inline_11383$$.$getAttr$("x"), $areaLayer$$inline_8551_layerName$$inline_11385_node$$inline_11397_nodeName$$inline_8544_xmlNode$$inline_11383$$.$getAttr$("y")], 
            $JSCompiler_StaticMethods_setAreaLayerImage$self$$inline_11403_areaNames$$inline_8554_dir$$inline_11392_labels$$inline_11400_node$$inline_11386_values$$inline_11425$$[$areaLayer$$inline_8551_layerName$$inline_11385_node$$inline_11397_nodeName$$inline_8544_xmlNode$$inline_11383$$.$getAttr$("name")] = [D.$JSCompiler_alias_NULL$$, $areaLayer$$inline_8551_layerName$$inline_11385_node$$inline_11397_nodeName$$inline_8544_xmlNode$$inline_11383$$.$getAttr$("longLabel")])
          }
          D.$DvtBaseMapManager$$.$registerBaseMapLayer$(this.$_tmap$.$_mapName$, "cities", $JSCompiler_StaticMethods_setAreaLayerImage$self$$inline_11403_areaNames$$inline_8554_dir$$inline_11392_labels$$inline_11400_node$$inline_11386_values$$inline_11425$$, $children$$inline_11428_i$$inline_11389_images$$inline_11404_layer$$inline_8552_points$$inline_11399$$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, 1)
        }
      }
    }
  }
  $JSCompiler_StaticMethods_setMapName$self$$inline_11343_animDur$$inline_8530_areaLayers$$inline_8548_childNodes$$inline_8542_maxZoomFactor$$inline_11377_popups$$inline_8532_styles$$inline_8538_tooltipDisplay$$inline_8531$$ = $options$$271$$.areaLayers;
  $attr$$inline_11344_basemap$$inline_8549_i$$inline_8545$$ = this.$_tmap$.$_mapName$;
  for($childNodes$$inline_11384_childNodes$$inline_11396_i$$inline_8550_node$$inline_8543$$ = 0;$childNodes$$inline_11384_childNodes$$inline_11396_i$$inline_8550_node$$inline_8543$$ < $JSCompiler_StaticMethods_setMapName$self$$inline_11343_animDur$$inline_8530_areaLayers$$inline_8548_childNodes$$inline_8542_maxZoomFactor$$inline_11377_popups$$inline_8532_styles$$inline_8538_tooltipDisplay$$inline_8531$$.length;$childNodes$$inline_11384_childNodes$$inline_11396_i$$inline_8550_node$$inline_8543$$++) {
    if($areaLayer$$inline_8551_layerName$$inline_11385_node$$inline_11397_nodeName$$inline_8544_xmlNode$$inline_11383$$ = D.$DvtJSONUtils$$.$merge$($JSCompiler_StaticMethods_setMapName$self$$inline_11343_animDur$$inline_8530_areaLayers$$inline_8548_childNodes$$inline_8542_maxZoomFactor$$inline_11377_popups$$inline_8532_styles$$inline_8538_tooltipDisplay$$inline_8531$$[$childNodes$$inline_11384_childNodes$$inline_11396_i$$inline_8550_node$$inline_8543$$], D.$DvtThematicMapDefaults$DEFAULT_AREA_LAYER$$), 
    $children$$inline_11428_i$$inline_11389_images$$inline_11404_layer$$inline_8552_points$$inline_11399$$ = $areaLayer$$inline_8551_layerName$$inline_11385_node$$inline_11397_nodeName$$inline_8544_xmlNode$$inline_11383$$.layer) {
      $areaLayer$$inline_8551_layerName$$inline_11385_node$$inline_11397_nodeName$$inline_8544_xmlNode$$inline_11383$$.areaStyle && (0,D.$JSCompiler_StaticMethods_parseInlineStyle$$)(this.$_areaLayerStyle$, $areaLayer$$inline_8551_layerName$$inline_11385_node$$inline_11397_nodeName$$inline_8544_xmlNode$$inline_11383$$.areaStyle);
      $areaLayer$$inline_8551_layerName$$inline_11385_node$$inline_11397_nodeName$$inline_8544_xmlNode$$inline_11383$$.labelStyle && (0,D.$JSCompiler_StaticMethods_parseInlineStyle$$)(this.$_areaLayerStyle$, $areaLayer$$inline_8551_layerName$$inline_11385_node$$inline_11397_nodeName$$inline_8544_xmlNode$$inline_11383$$.labelStyle);
      if(this.$_isCustomBasemap$) {
        $JSCompiler_StaticMethods_setAreaLayerImage$self$$inline_11403_areaNames$$inline_8554_dir$$inline_11392_labels$$inline_11400_node$$inline_11386_values$$inline_11425$$ = $images$$inline_11388_mapLayer$$inline_8553_nodeName$$inline_11398$$ = new D.$DvtMapCustomAreaLayer$$(this.$_tmap$, $children$$inline_11428_i$$inline_11389_images$$inline_11404_layer$$inline_8552_points$$inline_11399$$, $areaLayer$$inline_8551_layerName$$inline_11385_node$$inline_11397_nodeName$$inline_8544_xmlNode$$inline_11383$$.labelDisplay, 
        $areaLayer$$inline_8551_layerName$$inline_11385_node$$inline_11397_nodeName$$inline_8544_xmlNode$$inline_11383$$.labelType, this.$_tmap$.$__getEventManager$());
        $children$$inline_11428_i$$inline_11389_images$$inline_11404_layer$$inline_8552_points$$inline_11399$$ = this.$_customAreaLayerImages$[$children$$inline_11428_i$$inline_11389_images$$inline_11404_layer$$inline_8552_points$$inline_11399$$];
        $bidi$$inline_11391_refWidth$$inline_11407_shape$$inline_11405_shapes$$inline_11414$$ = D.$JSCompiler_alias_NULL$$;
        $JSCompiler_temp_const$$9328_i$$inline_11401_image$$inline_11390_isRTL$$inline_11406_nodeName$$inline_11387$$ = (0,D.$DvtAgent$isRightToLeft$$)($JSCompiler_StaticMethods_setAreaLayerImage$self$$inline_11403_areaNames$$inline_8554_dir$$inline_11392_labels$$inline_11400_node$$inline_11386_values$$inline_11425$$.$_tmap$.$getCtx$());
        if($children$$inline_11428_i$$inline_11389_images$$inline_11404_layer$$inline_8552_points$$inline_11399$$ && 0 < $children$$inline_11428_i$$inline_11389_images$$inline_11404_layer$$inline_8552_points$$inline_11399$$.length) {
          var $bidi$$inline_11391_refWidth$$inline_11407_shape$$inline_11405_shapes$$inline_11414$$ = $children$$inline_11428_i$$inline_11389_images$$inline_11404_layer$$inline_8552_points$$inline_11399$$[0].width, $context$$inline_11415_refHeight$$inline_11408$$ = $children$$inline_11428_i$$inline_11389_images$$inline_11404_layer$$inline_8552_points$$inline_11399$$[0].height;
          $JSCompiler_StaticMethods_setAreaLayerImage$self$$inline_11403_areaNames$$inline_8554_dir$$inline_11392_labels$$inline_11400_node$$inline_11386_values$$inline_11425$$.$_layerWidth$ = $bidi$$inline_11391_refWidth$$inline_11407_shape$$inline_11405_shapes$$inline_11414$$;
          $JSCompiler_StaticMethods_setAreaLayerImage$self$$inline_11403_areaNames$$inline_8554_dir$$inline_11392_labels$$inline_11400_node$$inline_11386_values$$inline_11425$$.$_layerHeight$ = $context$$inline_11415_refHeight$$inline_11408$$;
          for(var $area$$inline_11416_locImages$$inline_11409$$ = [], $areaNames$$inline_11413_backgroundColor$$inline_11419_borderColor$$inline_11417_i$$inline_11410_stroke$$inline_11418$$ = 0;$areaNames$$inline_11413_backgroundColor$$inline_11419_borderColor$$inline_11417_i$$inline_11410_stroke$$inline_11418$$ < $children$$inline_11428_i$$inline_11389_images$$inline_11404_layer$$inline_8552_points$$inline_11399$$.length;$areaNames$$inline_11413_backgroundColor$$inline_11419_borderColor$$inline_11417_i$$inline_11410_stroke$$inline_11418$$++) {
            $JSCompiler_temp_const$$9328_i$$inline_11401_image$$inline_11390_isRTL$$inline_11406_nodeName$$inline_11387$$ && "rtl" == $children$$inline_11428_i$$inline_11389_images$$inline_11404_layer$$inline_8552_points$$inline_11399$$[$areaNames$$inline_11413_backgroundColor$$inline_11419_borderColor$$inline_11417_i$$inline_11410_stroke$$inline_11418$$].dir ? $area$$inline_11416_locImages$$inline_11409$$.push($children$$inline_11428_i$$inline_11389_images$$inline_11404_layer$$inline_8552_points$$inline_11399$$[$areaNames$$inline_11413_backgroundColor$$inline_11419_borderColor$$inline_11417_i$$inline_11410_stroke$$inline_11418$$]) : 
            !$JSCompiler_temp_const$$9328_i$$inline_11401_image$$inline_11390_isRTL$$inline_11406_nodeName$$inline_11387$$ && "ltr" == $children$$inline_11428_i$$inline_11389_images$$inline_11404_layer$$inline_8552_points$$inline_11399$$[$areaNames$$inline_11413_backgroundColor$$inline_11419_borderColor$$inline_11417_i$$inline_11410_stroke$$inline_11418$$].dir && $area$$inline_11416_locImages$$inline_11409$$.push($children$$inline_11428_i$$inline_11389_images$$inline_11404_layer$$inline_8552_points$$inline_11399$$[$areaNames$$inline_11413_backgroundColor$$inline_11419_borderColor$$inline_11417_i$$inline_11410_stroke$$inline_11418$$])
          }
          $JSCompiler_StaticMethods_setAreaLayerImage$self$$inline_11403_areaNames$$inline_8554_dir$$inline_11392_labels$$inline_11400_node$$inline_11386_values$$inline_11425$$.$_areaLayerImages$ = 0 < $area$$inline_11416_locImages$$inline_11409$$.length ? $area$$inline_11416_locImages$$inline_11409$$ : $children$$inline_11428_i$$inline_11389_images$$inline_11404_layer$$inline_8552_points$$inline_11399$$;
          $JSCompiler_StaticMethods_setAreaLayerImage$self$$inline_11403_areaNames$$inline_8554_dir$$inline_11392_labels$$inline_11400_node$$inline_11386_values$$inline_11425$$.$_imageSrc$ = (0,D.$JSCompiler_StaticMethods__selectImageBasedOnResolution$$)($JSCompiler_StaticMethods_setAreaLayerImage$self$$inline_11403_areaNames$$inline_8554_dir$$inline_11392_labels$$inline_11400_node$$inline_11386_values$$inline_11425$$);
          $bidi$$inline_11391_refWidth$$inline_11407_shape$$inline_11405_shapes$$inline_11414$$ = new D.$DvtImage$$($JSCompiler_StaticMethods_setAreaLayerImage$self$$inline_11403_areaNames$$inline_8554_dir$$inline_11392_labels$$inline_11400_node$$inline_11386_values$$inline_11425$$.$_tmap$.$getCtx$(), $JSCompiler_StaticMethods_setAreaLayerImage$self$$inline_11403_areaNames$$inline_8554_dir$$inline_11392_labels$$inline_11400_node$$inline_11386_values$$inline_11425$$.$_imageSrc$, 0, 0, $bidi$$inline_11391_refWidth$$inline_11407_shape$$inline_11405_shapes$$inline_11414$$, 
          $context$$inline_11415_refHeight$$inline_11408$$)
        }
        $bidi$$inline_11391_refWidth$$inline_11407_shape$$inline_11405_shapes$$inline_11414$$ && ((0,D.$JSCompiler_StaticMethods_setAreaNames$$)($JSCompiler_StaticMethods_setAreaLayerImage$self$$inline_11403_areaNames$$inline_8554_dir$$inline_11392_labels$$inline_11400_node$$inline_11386_values$$inline_11425$$, {image:[D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$]}), $JSCompiler_StaticMethods_setAreaLayerImage$self$$inline_11403_areaNames$$inline_8554_dir$$inline_11392_labels$$inline_11400_node$$inline_11386_values$$inline_11425$$.$AreaShapes$ = 
        {image:$bidi$$inline_11391_refWidth$$inline_11407_shape$$inline_11405_shapes$$inline_11414$$})
      }else {
        $images$$inline_11388_mapLayer$$inline_8553_nodeName$$inline_11398$$ = new D.$DvtMapAreaLayer$$(this.$_tmap$, $children$$inline_11428_i$$inline_11389_images$$inline_11404_layer$$inline_8552_points$$inline_11399$$, $areaLayer$$inline_8551_layerName$$inline_11385_node$$inline_11397_nodeName$$inline_8544_xmlNode$$inline_11383$$.labelDisplay, $areaLayer$$inline_8551_layerName$$inline_11385_node$$inline_11397_nodeName$$inline_8544_xmlNode$$inline_11383$$.labelType, this.$_tmap$.$__getEventManager$());
        $JSCompiler_StaticMethods_setAreaLayerImage$self$$inline_11403_areaNames$$inline_8554_dir$$inline_11392_labels$$inline_11400_node$$inline_11386_values$$inline_11425$$ = D.$DvtBaseMapManager$$.$getAreaNames$($attr$$inline_11344_basemap$$inline_8549_i$$inline_8545$$, $children$$inline_11428_i$$inline_11389_images$$inline_11404_layer$$inline_8552_points$$inline_11399$$);
        $JSCompiler_temp_const$$9328_i$$inline_11401_image$$inline_11390_isRTL$$inline_11406_nodeName$$inline_11387$$ = $images$$inline_11388_mapLayer$$inline_8553_nodeName$$inline_11398$$;
        $areaNames$$inline_11413_backgroundColor$$inline_11419_borderColor$$inline_11417_i$$inline_11410_stroke$$inline_11418$$ = $JSCompiler_StaticMethods_setAreaLayerImage$self$$inline_11403_areaNames$$inline_8554_dir$$inline_11392_labels$$inline_11400_node$$inline_11386_values$$inline_11425$$;
        $bidi$$inline_11391_refWidth$$inline_11407_shape$$inline_11405_shapes$$inline_11414$$ = {};
        $context$$inline_11415_refHeight$$inline_11408$$ = this.$_tmap$.$getCtx$();
        $area$$inline_11416_locImages$$inline_11409$$ = D.$JSCompiler_alias_VOID$$;
        for($area$$inline_11416_locImages$$inline_11409$$ in $areaNames$$inline_11413_backgroundColor$$inline_11419_borderColor$$inline_11417_i$$inline_11410_stroke$$inline_11418$$) {
          $bidi$$inline_11391_refWidth$$inline_11407_shape$$inline_11405_shapes$$inline_11414$$[$area$$inline_11416_locImages$$inline_11409$$] = new D.$DvtPath$$($context$$inline_11415_refHeight$$inline_11408$$);
          if(($areaNames$$inline_11413_backgroundColor$$inline_11419_borderColor$$inline_11417_i$$inline_11410_stroke$$inline_11418$$ = this.$_areaLayerStyle$.$getStyle$("border-color")) && "transparent" != $areaNames$$inline_11413_backgroundColor$$inline_11419_borderColor$$inline_11417_i$$inline_11410_stroke$$inline_11418$$) {
            $areaNames$$inline_11413_backgroundColor$$inline_11419_borderColor$$inline_11417_i$$inline_11410_stroke$$inline_11418$$ = new D.$DvtSolidStroke$$($areaNames$$inline_11413_backgroundColor$$inline_11419_borderColor$$inline_11417_i$$inline_11410_stroke$$inline_11418$$), this.$_tmap$.$_bSupportsVectorEffects$ && ($areaNames$$inline_11413_backgroundColor$$inline_11419_borderColor$$inline_11417_i$$inline_11410_stroke$$inline_11418$$.$_bFixedWidth$ = D.$JSCompiler_alias_TRUE$$), $bidi$$inline_11391_refWidth$$inline_11407_shape$$inline_11405_shapes$$inline_11414$$[$area$$inline_11416_locImages$$inline_11409$$].$setStroke$($areaNames$$inline_11413_backgroundColor$$inline_11419_borderColor$$inline_11417_i$$inline_11410_stroke$$inline_11418$$)
          }
          $areaNames$$inline_11413_backgroundColor$$inline_11419_borderColor$$inline_11417_i$$inline_11410_stroke$$inline_11418$$ = this.$_areaLayerStyle$.$getStyle$("background-color");
          "transparent" != $areaNames$$inline_11413_backgroundColor$$inline_11419_borderColor$$inline_11417_i$$inline_11410_stroke$$inline_11418$$ ? $bidi$$inline_11391_refWidth$$inline_11407_shape$$inline_11405_shapes$$inline_11414$$[$area$$inline_11416_locImages$$inline_11409$$].$setSolidFill$($areaNames$$inline_11413_backgroundColor$$inline_11419_borderColor$$inline_11417_i$$inline_11410_stroke$$inline_11418$$) : $bidi$$inline_11391_refWidth$$inline_11407_shape$$inline_11405_shapes$$inline_11414$$[$area$$inline_11416_locImages$$inline_11409$$].$setFill$(D.$JSCompiler_alias_NULL$$)
        }
        $JSCompiler_temp_const$$9328_i$$inline_11401_image$$inline_11390_isRTL$$inline_11406_nodeName$$inline_11387$$.$AreaShapes$ = $bidi$$inline_11391_refWidth$$inline_11407_shape$$inline_11405_shapes$$inline_11414$$;
        (0,D.$JSCompiler_StaticMethods_setAreaNames$$)($images$$inline_11388_mapLayer$$inline_8553_nodeName$$inline_11398$$, $JSCompiler_StaticMethods_setAreaLayerImage$self$$inline_11403_areaNames$$inline_8554_dir$$inline_11392_labels$$inline_11400_node$$inline_11386_values$$inline_11425$$);
        $JSCompiler_StaticMethods_setAreaLayerImage$self$$inline_11403_areaNames$$inline_8554_dir$$inline_11392_labels$$inline_11400_node$$inline_11386_values$$inline_11425$$ = D.$DvtBaseMapManager$$.$getAreaLabelInfo$($attr$$inline_11344_basemap$$inline_8549_i$$inline_8545$$, $children$$inline_11428_i$$inline_11389_images$$inline_11404_layer$$inline_8552_points$$inline_11399$$);
        $images$$inline_11388_mapLayer$$inline_8553_nodeName$$inline_11398$$.$_labelInfo$ = $JSCompiler_StaticMethods_setAreaLayerImage$self$$inline_11403_areaNames$$inline_8554_dir$$inline_11392_labels$$inline_11400_node$$inline_11386_values$$inline_11425$$;
        $children$$inline_11428_i$$inline_11389_images$$inline_11404_layer$$inline_8552_points$$inline_11399$$ = D.$DvtBaseMapManager$$.$getChildrenForLayerAreas$(this.$_tmap$.$_mapName$, $children$$inline_11428_i$$inline_11389_images$$inline_11404_layer$$inline_8552_points$$inline_11399$$);
        $images$$inline_11388_mapLayer$$inline_8553_nodeName$$inline_11398$$.$_children$ = $children$$inline_11428_i$$inline_11389_images$$inline_11404_layer$$inline_8552_points$$inline_11399$$
      }
      $images$$inline_11388_mapLayer$$inline_8553_nodeName$$inline_11398$$.$_layerCSSStyle$ = this.$_areaLayerStyle$;
      $images$$inline_11388_mapLayer$$inline_8553_nodeName$$inline_11398$$.$_dropSiteCSSStyle$ = this.$_areaDropSiteStyle$;
      $images$$inline_11388_mapLayer$$inline_8553_nodeName$$inline_11398$$.$setAnimation$("auto" == $areaLayer$$inline_8551_layerName$$inline_11385_node$$inline_11397_nodeName$$inline_8544_xmlNode$$inline_11383$$.animationOnLayerChange ? "alphaFade" : $areaLayer$$inline_8551_layerName$$inline_11385_node$$inline_11397_nodeName$$inline_8544_xmlNode$$inline_11383$$.animationOnLayerChange);
      $images$$inline_11388_mapLayer$$inline_8553_nodeName$$inline_11398$$.$setAnimationDuration$(this.$_tmap$.$getAnimationDuration$());
      this.$_tmap$.$_layers$.push($images$$inline_11388_mapLayer$$inline_8553_nodeName$$inline_11398$$);
      $areaLayer$$inline_8551_layerName$$inline_11385_node$$inline_11397_nodeName$$inline_8544_xmlNode$$inline_11383$$.areaDataLayer && (0,D.$JSCompiler_StaticMethods_ParseDataLayers$$)(this, [$areaLayer$$inline_8551_layerName$$inline_11385_node$$inline_11397_nodeName$$inline_8544_xmlNode$$inline_11383$$.areaDataLayer], $images$$inline_11388_mapLayer$$inline_8553_nodeName$$inline_11398$$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_TRUE$$);
      $areaLayer$$inline_8551_layerName$$inline_11385_node$$inline_11397_nodeName$$inline_8544_xmlNode$$inline_11383$$.pointDataLayers && (0,D.$JSCompiler_StaticMethods_ParseDataLayers$$)(this, $areaLayer$$inline_8551_layerName$$inline_11385_node$$inline_11397_nodeName$$inline_8544_xmlNode$$inline_11383$$.pointDataLayers, $images$$inline_11388_mapLayer$$inline_8553_nodeName$$inline_11398$$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_FALSE$$)
    }
  }
  (0,D.$JSCompiler_StaticMethods_ParseDataLayers$$)(this, $options$$271$$.pointDataLayers, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_FALSE$$)
};
D.$JSCompiler_StaticMethods_ParseDataLayers$$ = function $$JSCompiler_StaticMethods_ParseDataLayers$$$($JSCompiler_StaticMethods_ParseDataLayers$self$$, $dataLayers$$6$$, $parentLayer$$6$$, $topLayerName$$2$$, $JSCompiler_StaticMethods_resetRenderedAreas$self$$inline_8610_isAreaDataLayer$$1_selectionMode$$14$$) {
  if($dataLayers$$6$$) {
    for(var $i$$834$$ = 0;$i$$834$$ < $dataLayers$$6$$.length;$i$$834$$++) {
      var $dataLayerOptions$$1_initSelections$$ = D.$DvtJSONUtils$$.$merge$($dataLayers$$6$$[$i$$834$$], D.$DvtThematicMapDefaults$DEFAULT_DATA_LAYER$$);
      if($dataLayerOptions$$1_initSelections$$.markerDefs) {
        var $area$$inline_8611_dataLayer$$11_markerDefs$$ = $dataLayerOptions$$1_initSelections$$.markerDefs, $markerDef$$16$$;
        for($markerDef$$16$$ in $area$$inline_8611_dataLayer$$11_markerDefs$$) {
          if(!$JSCompiler_StaticMethods_ParseDataLayers$self$$.$_customMarkerDefs$[$markerDef$$16$$]) {
            var $initDisclosed_xmlNode$$68$$ = (new D.$DvtXmlParser$$).parse($area$$inline_8611_dataLayer$$11_markerDefs$$[$markerDef$$16$$]);
            $JSCompiler_StaticMethods_ParseDataLayers$self$$.$_customMarkerDefs$[$markerDef$$16$$] = D.$DvtMarkerUtils$$.$createMarkerDef$($JSCompiler_StaticMethods_ParseDataLayers$self$$.$_tmap$.$getCtx$(), $initDisclosed_xmlNode$$68$$)
          }
        }
      }
      $dataLayerOptions$$1_initSelections$$.legend && ($JSCompiler_StaticMethods_ParseDataLayers$self$$.$_tmap$.$_legendData$ = $dataLayerOptions$$1_initSelections$$.legend);
      if($parentLayer$$6$$) {
        if($parentLayer$$6$$ instanceof D.$DvtMapAreaLayer$$ && $JSCompiler_StaticMethods_resetRenderedAreas$self$$inline_8610_isAreaDataLayer$$1_selectionMode$$14$$) {
          for($area$$inline_8611_dataLayer$$11_markerDefs$$ in $JSCompiler_StaticMethods_resetRenderedAreas$self$$inline_8610_isAreaDataLayer$$1_selectionMode$$14$$ = $parentLayer$$6$$, $area$$inline_8611_dataLayer$$11_markerDefs$$ = D.$JSCompiler_alias_VOID$$, $JSCompiler_StaticMethods_resetRenderedAreas$self$$inline_8610_isAreaDataLayer$$1_selectionMode$$14$$.$AreaNames$) {
            $JSCompiler_StaticMethods_resetRenderedAreas$self$$inline_8610_isAreaDataLayer$$1_selectionMode$$14$$.$_renderArea$[$area$$inline_8611_dataLayer$$11_markerDefs$$] = D.$JSCompiler_alias_TRUE$$, $JSCompiler_StaticMethods_resetRenderedAreas$self$$inline_8610_isAreaDataLayer$$1_selectionMode$$14$$.$_renderLabel$[$area$$inline_8611_dataLayer$$11_markerDefs$$] = D.$JSCompiler_alias_TRUE$$
          }
        }
      }else {
        $parentLayer$$6$$ = new D.$DvtMapLayer$$($JSCompiler_StaticMethods_ParseDataLayers$self$$.$_tmap$, $dataLayerOptions$$1_initSelections$$.id, $JSCompiler_StaticMethods_ParseDataLayers$self$$.$_tmap$.$__getEventManager$()), $JSCompiler_StaticMethods_ParseDataLayers$self$$.$_tmap$.$_layers$.push($parentLayer$$6$$)
      }
      $area$$inline_8611_dataLayer$$11_markerDefs$$ = new D.$DvtMapDataLayer$$($JSCompiler_StaticMethods_ParseDataLayers$self$$.$_tmap$, $parentLayer$$6$$, $dataLayerOptions$$1_initSelections$$.id, $JSCompiler_StaticMethods_ParseDataLayers$self$$.$_tmap$.$__getEventManager$(), $dataLayerOptions$$1_initSelections$$);
      $JSCompiler_StaticMethods_resetRenderedAreas$self$$inline_8610_isAreaDataLayer$$1_selectionMode$$14$$ = $dataLayerOptions$$1_initSelections$$.selectionMode;
      "single" == $JSCompiler_StaticMethods_resetRenderedAreas$self$$inline_8610_isAreaDataLayer$$1_selectionMode$$14$$ ? $area$$inline_8611_dataLayer$$11_markerDefs$$.$setSelectionMode$("s") : "multiple" == $JSCompiler_StaticMethods_resetRenderedAreas$self$$inline_8610_isAreaDataLayer$$1_selectionMode$$14$$ && $area$$inline_8611_dataLayer$$11_markerDefs$$.$setSelectionMode$("m");
      $area$$inline_8611_dataLayer$$11_markerDefs$$.$setAnimation$($dataLayerOptions$$1_initSelections$$.animationOnDataChange);
      $area$$inline_8611_dataLayer$$11_markerDefs$$.$setAnimationDuration$($JSCompiler_StaticMethods_ParseDataLayers$self$$.$_tmap$.$getAnimationDuration$());
      var $JSCompiler_StaticMethods_setIsolatedArea$self$$inline_8641_isolatedRowKey$$ = D.$JSCompiler_alias_NULL$$;
      $parentLayer$$6$$ instanceof D.$DvtMapAreaLayer$$ && ($JSCompiler_StaticMethods_setIsolatedArea$self$$inline_8641_isolatedRowKey$$ = $dataLayerOptions$$1_initSelections$$.isolatedItem);
      var $disclosedItems_isolatedArea$$inline_8642$$ = $dataLayerOptions$$1_initSelections$$.disclosedItems, $initDisclosed_xmlNode$$68$$ = [], $isolatedAreaId$$;
      $JSCompiler_StaticMethods_resetRenderedAreas$self$$inline_8610_isAreaDataLayer$$1_selectionMode$$14$$ = $parentLayer$$6$$ instanceof D.$DvtMapAreaLayer$$;
      var $popups$$1$$;
      $dataLayerOptions$$1_initSelections$$.popups && ($popups$$1$$ = $JSCompiler_StaticMethods_ParseDataLayers$self$$.$_getShowPopupBehaviors$($dataLayerOptions$$1_initSelections$$.popups));
      var $context$$617_dataLayer$$inline_8631_hiddenCategories$$12_images$$22$$ = $JSCompiler_StaticMethods_ParseDataLayers$self$$.$_tmap$.$getOptions$().hiddenCategories, $areas$$6_renderer$$12$$ = $dataLayerOptions$$1_initSelections$$.areas;
      if($areas$$6_renderer$$12$$) {
        for(var $area$$inline_8643_j$$114$$ = 0;$area$$inline_8643_j$$114$$ < $areas$$6_renderer$$12$$.length;$area$$inline_8643_j$$114$$++) {
          if($context$$617_dataLayer$$inline_8631_hiddenCategories$$12_images$$22$$ && D.$DvtArrayUtils$$.$hasAnyItem$($context$$617_dataLayer$$inline_8631_hiddenCategories$$12_images$$22$$, $areas$$6_renderer$$12$$[$area$$inline_8643_j$$114$$].categories)) {
            (0,D.$JSCompiler_StaticMethods_addAreaObject$$)($area$$inline_8611_dataLayer$$11_markerDefs$$, D.$JSCompiler_alias_NULL$$)
          }else {
            var $areaId$$2_data$$inline_8619_data$$inline_8632_dataObj$$4$$ = $areas$$6_renderer$$12$$[$area$$inline_8643_j$$114$$].location;
            if($JSCompiler_StaticMethods_setIsolatedArea$self$$inline_8641_isolatedRowKey$$) {
              if($JSCompiler_StaticMethods_setIsolatedArea$self$$inline_8641_isolatedRowKey$$ != $areas$$6_renderer$$12$$[$area$$inline_8643_j$$114$$].id) {
                continue
              }else {
                $isolatedAreaId$$ = $areaId$$2_data$$inline_8619_data$$inline_8632_dataObj$$4$$
              }
            }
            $disclosedItems_isolatedArea$$inline_8642$$ && -1 != $disclosedItems_isolatedArea$$inline_8642$$.indexOf($areas$$6_renderer$$12$$[$area$$inline_8643_j$$114$$].id) && $initDisclosed_xmlNode$$68$$.push($areaId$$2_data$$inline_8619_data$$inline_8632_dataObj$$4$$);
            var $JSCompiler_StaticMethods__createArea$self$$inline_8616_JSCompiler_StaticMethods__createCustomDataItem$self$$inline_8629_dataItem$$inline_8636_label$$inline_8627$$ = $JSCompiler_StaticMethods_ParseDataLayers$self$$, $layer$$inline_8617_layer$$inline_8630$$ = $parentLayer$$6$$, $dataLayer$$inline_8618_markers$$10$$ = $area$$inline_8611_dataLayer$$11_markerDefs$$, $areaId$$2_data$$inline_8619_data$$inline_8632_dataObj$$4$$ = $areas$$6_renderer$$12$$[$area$$inline_8643_j$$114$$], $areaId$$inline_8620_center$$inline_8635_path$$inline_8621_svgElem$$2$$ = 
            $areaId$$2_data$$inline_8619_data$$inline_8632_dataObj$$4$$.location;
            if($layer$$inline_8617_layer$$inline_8630$$.$AreaShapes$[$areaId$$inline_8620_center$$inline_8635_path$$inline_8621_svgElem$$2$$] && $areaId$$2_data$$inline_8619_data$$inline_8632_dataObj$$4$$.color) {
              $layer$$inline_8617_layer$$inline_8630$$.$_renderArea$[$areaId$$inline_8620_center$$inline_8635_path$$inline_8621_svgElem$$2$$] = D.$JSCompiler_alias_FALSE$$;
              $areaId$$inline_8620_center$$inline_8635_path$$inline_8621_svgElem$$2$$ = new D.$DvtDrillablePath$$($JSCompiler_StaticMethods__createArea$self$$inline_8616_JSCompiler_StaticMethods__createCustomDataItem$self$$inline_8629_dataItem$$inline_8636_label$$inline_8627$$.$_tmap$.$getCtx$(), $JSCompiler_StaticMethods__createArea$self$$inline_8616_JSCompiler_StaticMethods__createCustomDataItem$self$$inline_8629_dataItem$$inline_8636_label$$inline_8627$$.$_tmap$.$_bSupportsVectorEffects$);
              $areaId$$2_data$$inline_8619_data$$inline_8632_dataObj$$4$$ = D.$DvtJSONUtils$$.$merge$($areaId$$2_data$$inline_8619_data$$inline_8632_dataObj$$4$$, $JSCompiler_StaticMethods__createArea$self$$inline_8616_JSCompiler_StaticMethods__createCustomDataItem$self$$inline_8629_dataItem$$inline_8636_label$$inline_8627$$.$_tmap$.$_styleDefaults$.dataAreaDefaults);
              $areaId$$2_data$$inline_8619_data$$inline_8632_dataObj$$4$$.labelStyle || ($areaId$$2_data$$inline_8619_data$$inline_8632_dataObj$$4$$.labelStyle = $JSCompiler_StaticMethods__createArea$self$$inline_8616_JSCompiler_StaticMethods__createCustomDataItem$self$$inline_8629_dataItem$$inline_8636_label$$inline_8627$$.$_tmap$.$_styleDefaults$.labelStyle);
              var $dis$$inline_8625_hs$$inline_8622_svgElem$$inline_8633$$ = new D.$DvtSolidStroke$$($areaId$$2_data$$inline_8619_data$$inline_8632_dataObj$$4$$.hoverColor, 1, 2), $JSCompiler_StaticMethods_setDisclosedStroke$self$$inline_11451_isParentAreaDataLayer$$inline_8634_sis$$inline_8623$$ = new D.$DvtSolidStroke$$($areaId$$2_data$$inline_8619_data$$inline_8632_dataObj$$4$$.selectedInnerColor, 1, 1), $dos$$inline_8626_outerStroke$$inline_11453_sos$$inline_8624$$ = new D.$DvtSolidStroke$$($areaId$$2_data$$inline_8619_data$$inline_8632_dataObj$$4$$.selectedOuterColor, 
              1, 4);
              $areaId$$inline_8620_center$$inline_8635_path$$inline_8621_svgElem$$2$$.$setHoverStroke$($dis$$inline_8625_hs$$inline_8622_svgElem$$inline_8633$$, D.$JSCompiler_alias_NULL$$).$setSelectedStroke$($JSCompiler_StaticMethods_setDisclosedStroke$self$$inline_11451_isParentAreaDataLayer$$inline_8634_sis$$inline_8623$$, $dos$$inline_8626_outerStroke$$inline_11453_sos$$inline_8624$$);
              $dis$$inline_8625_hs$$inline_8622_svgElem$$inline_8633$$ = new D.$DvtSolidStroke$$($areaId$$2_data$$inline_8619_data$$inline_8632_dataObj$$4$$.drilledInnerColor, 1, 2);
              $dos$$inline_8626_outerStroke$$inline_11453_sos$$inline_8624$$ = new D.$DvtSolidStroke$$($areaId$$2_data$$inline_8619_data$$inline_8632_dataObj$$4$$.drilledOuterColor, 1, 4);
              $JSCompiler_StaticMethods_setDisclosedStroke$self$$inline_11451_isParentAreaDataLayer$$inline_8634_sis$$inline_8623$$ = $areaId$$inline_8620_center$$inline_8635_path$$inline_8621_svgElem$$2$$;
              $JSCompiler_StaticMethods_setDisclosedStroke$self$$inline_11451_isParentAreaDataLayer$$inline_8634_sis$$inline_8623$$.$_disclosedInnerStroke$ = $dis$$inline_8625_hs$$inline_8622_svgElem$$inline_8633$$;
              $JSCompiler_StaticMethods_setDisclosedStroke$self$$inline_11451_isParentAreaDataLayer$$inline_8634_sis$$inline_8623$$.$_disclosedInnerStroke$ && $JSCompiler_StaticMethods_setDisclosedStroke$self$$inline_11451_isParentAreaDataLayer$$inline_8634_sis$$inline_8623$$.$_bSupportsVectorEffects$ && ($JSCompiler_StaticMethods_setDisclosedStroke$self$$inline_11451_isParentAreaDataLayer$$inline_8634_sis$$inline_8623$$.$_disclosedInnerStroke$.$_bFixedWidth$ = D.$JSCompiler_alias_TRUE$$);
              $JSCompiler_StaticMethods_setDisclosedStroke$self$$inline_11451_isParentAreaDataLayer$$inline_8634_sis$$inline_8623$$.$_disclosedOuterStroke$ = $dos$$inline_8626_outerStroke$$inline_11453_sos$$inline_8624$$;
              $JSCompiler_StaticMethods_setDisclosedStroke$self$$inline_11451_isParentAreaDataLayer$$inline_8634_sis$$inline_8623$$.$_disclosedOuterStroke$ && $JSCompiler_StaticMethods_setDisclosedStroke$self$$inline_11451_isParentAreaDataLayer$$inline_8634_sis$$inline_8623$$.$_bSupportsVectorEffects$ && ($JSCompiler_StaticMethods_setDisclosedStroke$self$$inline_11451_isParentAreaDataLayer$$inline_8634_sis$$inline_8623$$.$_disclosedOuterStroke$.$_bFixedWidth$ = D.$JSCompiler_alias_TRUE$$);
              $layer$$inline_8617_layer$$inline_8630$$.$_renderLabel$[$areaId$$2_data$$inline_8619_data$$inline_8632_dataObj$$4$$.location] = D.$JSCompiler_alias_FALSE$$;
              (0,D.$JSCompiler_StaticMethods__styleDisplayable$$)($JSCompiler_StaticMethods__createArea$self$$inline_8616_JSCompiler_StaticMethods__createCustomDataItem$self$$inline_8629_dataItem$$inline_8636_label$$inline_8627$$, $areaId$$2_data$$inline_8619_data$$inline_8632_dataObj$$4$$, $areaId$$inline_8620_center$$inline_8635_path$$inline_8621_svgElem$$2$$);
              $JSCompiler_StaticMethods__createArea$self$$inline_8616_JSCompiler_StaticMethods__createCustomDataItem$self$$inline_8629_dataItem$$inline_8636_label$$inline_8627$$ = $JSCompiler_StaticMethods__createArea$self$$inline_8616_JSCompiler_StaticMethods__createCustomDataItem$self$$inline_8629_dataItem$$inline_8636_label$$inline_8627$$.$_createLabel$($layer$$inline_8617_layer$$inline_8630$$, $dataLayer$$inline_8618_markers$$10$$, $areaId$$2_data$$inline_8619_data$$inline_8632_dataObj$$4$$, 
              $areaId$$inline_8620_center$$inline_8635_path$$inline_8621_svgElem$$2$$, D.$JSCompiler_alias_TRUE$$);
              $areaId$$2_data$$inline_8619_data$$inline_8632_dataObj$$4$$ = new D.$DvtMapAreaPeer$$($areaId$$2_data$$inline_8619_data$$inline_8632_dataObj$$4$$, $dataLayer$$inline_8618_markers$$10$$, $areaId$$inline_8620_center$$inline_8635_path$$inline_8621_svgElem$$2$$, $JSCompiler_StaticMethods__createArea$self$$inline_8616_JSCompiler_StaticMethods__createCustomDataItem$self$$inline_8629_dataItem$$inline_8636_label$$inline_8627$$)
            }else {
              $areaId$$2_data$$inline_8619_data$$inline_8632_dataObj$$4$$ = D.$JSCompiler_alias_NULL$$
            }
            $popups$$1$$ && $areaId$$2_data$$inline_8619_data$$inline_8632_dataObj$$4$$.$setShowPopupBehaviors$($popups$$1$$);
            $areaId$$2_data$$inline_8619_data$$inline_8632_dataObj$$4$$ && ($areaId$$2_data$$inline_8619_data$$inline_8632_dataObj$$4$$.$setSelectable$($area$$inline_8611_dataLayer$$11_markerDefs$$.$isSelectable$()), (0,D.$JSCompiler_StaticMethods_addAreaObject$$)($area$$inline_8611_dataLayer$$11_markerDefs$$, $areaId$$2_data$$inline_8619_data$$inline_8632_dataObj$$4$$))
          }
        }
      }
      $areas$$6_renderer$$12$$ = $dataLayerOptions$$1_initSelections$$.renderer;
      if(($dataLayer$$inline_8618_markers$$10$$ = $dataLayerOptions$$1_initSelections$$.markers) && !$areas$$6_renderer$$12$$) {
        for($area$$inline_8643_j$$114$$ = 0;$area$$inline_8643_j$$114$$ < $dataLayer$$inline_8618_markers$$10$$.length;$area$$inline_8643_j$$114$$++) {
          if($context$$617_dataLayer$$inline_8631_hiddenCategories$$12_images$$22$$ && D.$DvtArrayUtils$$.$hasAnyItem$($context$$617_dataLayer$$inline_8631_hiddenCategories$$12_images$$22$$, $dataLayer$$inline_8618_markers$$10$$[$area$$inline_8643_j$$114$$].categories)) {
            (0,D.$JSCompiler_StaticMethods_addDataObject$$)($area$$inline_8611_dataLayer$$11_markerDefs$$, D.$JSCompiler_alias_NULL$$)
          }else {
            $areaId$$2_data$$inline_8619_data$$inline_8632_dataObj$$4$$ = $dataLayer$$inline_8618_markers$$10$$[$area$$inline_8643_j$$114$$].location;
            if($JSCompiler_StaticMethods_setIsolatedArea$self$$inline_8641_isolatedRowKey$$) {
              if($JSCompiler_StaticMethods_setIsolatedArea$self$$inline_8641_isolatedRowKey$$ != $dataLayer$$inline_8618_markers$$10$$[$area$$inline_8643_j$$114$$].id) {
                continue
              }else {
                $isolatedAreaId$$ = $areaId$$2_data$$inline_8619_data$$inline_8632_dataObj$$4$$
              }
            }
            $areaId$$2_data$$inline_8619_data$$inline_8632_dataObj$$4$$ = $JSCompiler_StaticMethods_ParseDataLayers$self$$.$_createMarker$($parentLayer$$6$$, $area$$inline_8611_dataLayer$$11_markerDefs$$, $dataLayer$$inline_8618_markers$$10$$[$area$$inline_8643_j$$114$$], $JSCompiler_StaticMethods_resetRenderedAreas$self$$inline_8610_isAreaDataLayer$$1_selectionMode$$14$$);
            $popups$$1$$ && $areaId$$2_data$$inline_8619_data$$inline_8632_dataObj$$4$$.$setShowPopupBehaviors$($popups$$1$$);
            $areaId$$2_data$$inline_8619_data$$inline_8632_dataObj$$4$$ && ($areaId$$2_data$$inline_8619_data$$inline_8632_dataObj$$4$$.$setSelectable$($area$$inline_8611_dataLayer$$11_markerDefs$$.$isSelectable$()), (0,D.$JSCompiler_StaticMethods_addDataObject$$)($area$$inline_8611_dataLayer$$11_markerDefs$$, $areaId$$2_data$$inline_8619_data$$inline_8632_dataObj$$4$$))
          }
        }
      }
      if($context$$617_dataLayer$$inline_8631_hiddenCategories$$12_images$$22$$ = $dataLayerOptions$$1_initSelections$$.images) {
        for($area$$inline_8643_j$$114$$ = 0;$area$$inline_8643_j$$114$$ < $context$$617_dataLayer$$inline_8631_hiddenCategories$$12_images$$22$$.length;$area$$inline_8643_j$$114$$++) {
          $areaId$$2_data$$inline_8619_data$$inline_8632_dataObj$$4$$ = $context$$617_dataLayer$$inline_8631_hiddenCategories$$12_images$$22$$[$area$$inline_8643_j$$114$$].location;
          if($JSCompiler_StaticMethods_setIsolatedArea$self$$inline_8641_isolatedRowKey$$) {
            if($JSCompiler_StaticMethods_setIsolatedArea$self$$inline_8641_isolatedRowKey$$ != $context$$617_dataLayer$$inline_8631_hiddenCategories$$12_images$$22$$[$area$$inline_8643_j$$114$$].id) {
              continue
            }else {
              $isolatedAreaId$$ = $areaId$$2_data$$inline_8619_data$$inline_8632_dataObj$$4$$
            }
          }
          $areaId$$2_data$$inline_8619_data$$inline_8632_dataObj$$4$$ = $JSCompiler_StaticMethods_ParseDataLayers$self$$.$_createImage$($parentLayer$$6$$, $area$$inline_8611_dataLayer$$11_markerDefs$$, $context$$617_dataLayer$$inline_8631_hiddenCategories$$12_images$$22$$[$area$$inline_8643_j$$114$$], $JSCompiler_StaticMethods_resetRenderedAreas$self$$inline_8610_isAreaDataLayer$$1_selectionMode$$14$$);
          $popups$$1$$ && $areaId$$2_data$$inline_8619_data$$inline_8632_dataObj$$4$$.$setShowPopupBehaviors$($popups$$1$$);
          $areaId$$2_data$$inline_8619_data$$inline_8632_dataObj$$4$$ && (0,D.$JSCompiler_StaticMethods_addDataObject$$)($area$$inline_8611_dataLayer$$11_markerDefs$$, $areaId$$2_data$$inline_8619_data$$inline_8632_dataObj$$4$$)
        }
      }
      if($areas$$6_renderer$$12$$) {
        for($area$$inline_8643_j$$114$$ = 0;$area$$inline_8643_j$$114$$ < $dataLayer$$inline_8618_markers$$10$$.length;$area$$inline_8643_j$$114$$++) {
          $areaId$$2_data$$inline_8619_data$$inline_8632_dataObj$$4$$ = $dataLayer$$inline_8618_markers$$10$$[$area$$inline_8643_j$$114$$].location;
          if($JSCompiler_StaticMethods_setIsolatedArea$self$$inline_8641_isolatedRowKey$$) {
            if($JSCompiler_StaticMethods_setIsolatedArea$self$$inline_8641_isolatedRowKey$$ != $dataLayer$$inline_8618_markers$$10$$[$area$$inline_8643_j$$114$$].id) {
              continue
            }else {
              $isolatedAreaId$$ = $areaId$$2_data$$inline_8619_data$$inline_8632_dataObj$$4$$
            }
          }
          $disclosedItems_isolatedArea$$inline_8642$$ && -1 != $disclosedItems_isolatedArea$$inline_8642$$.indexOf($dataLayer$$inline_8618_markers$$10$$[$area$$inline_8643_j$$114$$].id) && $initDisclosed_xmlNode$$68$$.push($areaId$$2_data$$inline_8619_data$$inline_8632_dataObj$$4$$);
          $context$$617_dataLayer$$inline_8631_hiddenCategories$$12_images$$22$$ = $JSCompiler_StaticMethods_ParseDataLayers$self$$.$_tmap$.$getOptions$()._contextHandler($JSCompiler_StaticMethods_ParseDataLayers$self$$.$_tmap$.$getElem$(), D.$JSCompiler_alias_NULL$$, $dataLayer$$inline_8618_markers$$10$$[$area$$inline_8643_j$$114$$], {hovered:D.$JSCompiler_alias_FALSE$$, selected:D.$JSCompiler_alias_FALSE$$, focused:D.$JSCompiler_alias_FALSE$$}, D.$JSCompiler_alias_NULL$$);
          $areaId$$inline_8620_center$$inline_8635_path$$inline_8621_svgElem$$2$$ = $areas$$6_renderer$$12$$($context$$617_dataLayer$$inline_8631_hiddenCategories$$12_images$$22$$);
          $JSCompiler_StaticMethods__createArea$self$$inline_8616_JSCompiler_StaticMethods__createCustomDataItem$self$$inline_8629_dataItem$$inline_8636_label$$inline_8627$$ = $JSCompiler_StaticMethods_ParseDataLayers$self$$;
          $layer$$inline_8617_layer$$inline_8630$$ = $parentLayer$$6$$;
          $context$$617_dataLayer$$inline_8631_hiddenCategories$$12_images$$22$$ = $area$$inline_8611_dataLayer$$11_markerDefs$$;
          $areaId$$2_data$$inline_8619_data$$inline_8632_dataObj$$4$$ = $dataLayer$$inline_8618_markers$$10$$[$area$$inline_8643_j$$114$$];
          $dis$$inline_8625_hs$$inline_8622_svgElem$$inline_8633$$ = $areaId$$inline_8620_center$$inline_8635_path$$inline_8621_svgElem$$2$$;
          $JSCompiler_StaticMethods_setDisclosedStroke$self$$inline_11451_isParentAreaDataLayer$$inline_8634_sis$$inline_8623$$ = $JSCompiler_StaticMethods_resetRenderedAreas$self$$inline_8610_isAreaDataLayer$$1_selectionMode$$14$$;
          ($areaId$$inline_8620_center$$inline_8635_path$$inline_8621_svgElem$$2$$ = (0,D.$DvtThematicMapJsonParser$getCenter$$)($context$$617_dataLayer$$inline_8631_hiddenCategories$$12_images$$22$$, $areaId$$2_data$$inline_8619_data$$inline_8632_dataObj$$4$$)) ? ($JSCompiler_StaticMethods_setDisclosedStroke$self$$inline_11451_isParentAreaDataLayer$$inline_8634_sis$$inline_8623$$ && ($layer$$inline_8617_layer$$inline_8630$$.$_renderLabel$[$areaId$$2_data$$inline_8619_data$$inline_8632_dataObj$$4$$.location] = 
          D.$JSCompiler_alias_FALSE$$), $JSCompiler_StaticMethods__createArea$self$$inline_8616_JSCompiler_StaticMethods__createCustomDataItem$self$$inline_8629_dataItem$$inline_8636_label$$inline_8627$$ = new D.$DvtCustomDataItem$$($JSCompiler_StaticMethods__createArea$self$$inline_8616_JSCompiler_StaticMethods__createCustomDataItem$self$$inline_8629_dataItem$$inline_8636_label$$inline_8627$$.$_tmap$.$getCtx$(), $dis$$inline_8625_hs$$inline_8622_svgElem$$inline_8633$$, $JSCompiler_StaticMethods__createArea$self$$inline_8616_JSCompiler_StaticMethods__createCustomDataItem$self$$inline_8629_dataItem$$inline_8636_label$$inline_8627$$.$_tmap$.$_styleDefaults$.dataAreaDefaults), 
          $areaId$$2_data$$inline_8619_data$$inline_8632_dataObj$$4$$ = new D.$DvtMapObjPeer$$($areaId$$2_data$$inline_8619_data$$inline_8632_dataObj$$4$$, $context$$617_dataLayer$$inline_8631_hiddenCategories$$12_images$$22$$, $JSCompiler_StaticMethods__createArea$self$$inline_8616_JSCompiler_StaticMethods__createCustomDataItem$self$$inline_8629_dataItem$$inline_8636_label$$inline_8627$$, D.$JSCompiler_alias_NULL$$, $areaId$$inline_8620_center$$inline_8635_path$$inline_8621_svgElem$$2$$)) : $areaId$$2_data$$inline_8619_data$$inline_8632_dataObj$$4$$ = 
          D.$JSCompiler_alias_NULL$$;
          $popups$$1$$ && $areaId$$2_data$$inline_8619_data$$inline_8632_dataObj$$4$$.$setShowPopupBehaviors$($popups$$1$$);
          $areaId$$2_data$$inline_8619_data$$inline_8632_dataObj$$4$$ && ($areaId$$2_data$$inline_8619_data$$inline_8632_dataObj$$4$$.$setSelectable$($area$$inline_8611_dataLayer$$11_markerDefs$$.$isSelectable$()), (0,D.$JSCompiler_StaticMethods_addDataObject$$)($area$$inline_8611_dataLayer$$11_markerDefs$$, $areaId$$2_data$$inline_8619_data$$inline_8632_dataObj$$4$$))
        }
      }
      if($isolatedAreaId$$) {
        for($area$$inline_8643_j$$114$$ in $area$$inline_8611_dataLayer$$11_markerDefs$$.$_isolatedAreaRowKey$ = $JSCompiler_StaticMethods_setIsolatedArea$self$$inline_8641_isolatedRowKey$$, $JSCompiler_StaticMethods_setIsolatedArea$self$$inline_8641_isolatedRowKey$$ = $parentLayer$$6$$, $disclosedItems_isolatedArea$$inline_8642$$ = $isolatedAreaId$$, $JSCompiler_StaticMethods_setIsolatedArea$self$$inline_8641_isolatedRowKey$$.$_isolatedArea$ = $disclosedItems_isolatedArea$$inline_8642$$, $JSCompiler_StaticMethods_setIsolatedArea$self$$inline_8641_isolatedRowKey$$.$_layerDim$ = 
        D.$JSCompiler_alias_NULL$$, $area$$inline_8643_j$$114$$ = D.$JSCompiler_alias_VOID$$, $JSCompiler_StaticMethods_setIsolatedArea$self$$inline_8641_isolatedRowKey$$.$AreaShapes$) {
          $area$$inline_8643_j$$114$$ != $disclosedItems_isolatedArea$$inline_8642$$ && ($JSCompiler_StaticMethods_setIsolatedArea$self$$inline_8641_isolatedRowKey$$.$_renderArea$[$area$$inline_8643_j$$114$$] = D.$JSCompiler_alias_FALSE$$)
        }
      }
      if(($dataLayerOptions$$1_initSelections$$ = $dataLayerOptions$$1_initSelections$$.selection) && 0 < $dataLayerOptions$$1_initSelections$$.length) {
        $area$$inline_8611_dataLayer$$11_markerDefs$$.$_initSelections$ = $dataLayerOptions$$1_initSelections$$
      }
      $initDisclosed_xmlNode$$68$$ && 0 < $initDisclosed_xmlNode$$68$$.length && ($JSCompiler_StaticMethods_ParseDataLayers$self$$.$_tmap$.$_initDrilled$[$parentLayer$$6$$.$LayerName$] = [$area$$inline_8611_dataLayer$$11_markerDefs$$.$getClientId$(), $initDisclosed_xmlNode$$68$$]);
      $topLayerName$$2$$ ? $parentLayer$$6$$.$updateDataLayer$($area$$inline_8611_dataLayer$$11_markerDefs$$, $JSCompiler_StaticMethods_ParseDataLayers$self$$.$_tmap$.$_panZoomCanvas$.$_contentPane$.$getMatrix$(), $topLayerName$$2$$) : $parentLayer$$6$$.$DataLayers$[$area$$inline_8611_dataLayer$$11_markerDefs$$.$getClientId$()] = $area$$inline_8611_dataLayer$$11_markerDefs$$
    }
  }
};
D.$DvtThematicMapJsonParser$$.prototype.$_createMarker$ = function $$DvtThematicMapJsonParser$$$$$_createMarker$$($label$$102_layer$$14$$, $dataLayer$$13$$, $data$$106$$, $isParentAreaDataLayer$$) {
  var $center$$13$$ = (0,D.$DvtThematicMapJsonParser$getCenter$$)($dataLayer$$13$$, $data$$106$$);
  if(!$center$$13$$) {
    return D.$JSCompiler_alias_NULL$$
  }
  var $marker$$18_markerDefaults_sx$$18$$ = this.$_tmap$.$_styleDefaults$.dataMarkerDefaults, $markerLabelStyle_rotation$$8_sy$$18$$ = new D.$DvtCSSStyle$$($marker$$18_markerDefaults_sx$$18$$.labelStyle);
  (0,D.$JSCompiler_StaticMethods_parseInlineStyle$$)($markerLabelStyle_rotation$$8_sy$$18$$, $data$$106$$.labelStyle);
  $data$$106$$ = D.$DvtJSONUtils$$.$merge$($data$$106$$, $marker$$18_markerDefaults_sx$$18$$);
  $data$$106$$.labelStyle = $markerLabelStyle_rotation$$8_sy$$18$$.toString();
  $marker$$18_markerDefaults_sx$$18$$ = 1;
  (0,window.isNaN)($data$$106$$.scaleX) || ($marker$$18_markerDefaults_sx$$18$$ = $data$$106$$.scaleX);
  $markerLabelStyle_rotation$$8_sy$$18$$ = 1;
  (0,window.isNaN)($data$$106$$.scaleY) || ($markerLabelStyle_rotation$$8_sy$$18$$ = $data$$106$$.scaleY);
  var $w$$68$$ = $data$$106$$.width, $h$$66$$ = $data$$106$$.height;
  if(!$w$$68$$ || (0,window.isNaN)($w$$68$$)) {
    $w$$68$$ = this.$_tmap$.$getOptions$().styleDefaults.dataMarkerDefaults.width
  }
  if(!$h$$66$$ || (0,window.isNaN)($h$$66$$)) {
    $h$$66$$ = this.$_tmap$.$getOptions$().styleDefaults.dataMarkerDefaults.height
  }
  if($data$$106$$.source) {
    $marker$$18_markerDefaults_sx$$18$$ = new D.$DvtImageMarker$$(this.$_tmap$.$getCtx$(), $center$$13$$.x, $center$$13$$.y, $w$$68$$ * $marker$$18_markerDefaults_sx$$18$$, $h$$66$$ * $markerLabelStyle_rotation$$8_sy$$18$$, $data$$106$$.source, $data$$106$$.sourceSelected, $data$$106$$.sourceHover, $data$$106$$.sourceHoverSelected)
  }else {
    var $shapeType$$1$$ = $data$$106$$.shape ? $data$$106$$.shape : this.$_tmap$.$getOptions$().styleDefaults.dataMarkerDefaults.shape, $marker$$18_markerDefaults_sx$$18$$ = new D.$DvtSimpleMarker$$(this.$_tmap$.$getCtx$(), $shapeType$$1$$, this.$_tmap$.$_skinName$, $center$$13$$.x, $center$$13$$.y, $w$$68$$ * $marker$$18_markerDefaults_sx$$18$$, $h$$66$$ * $markerLabelStyle_rotation$$8_sy$$18$$)
  }
  ($markerLabelStyle_rotation$$8_sy$$18$$ = $data$$106$$.rotation) && $marker$$18_markerDefaults_sx$$18$$.$setRotation$($markerLabelStyle_rotation$$8_sy$$18$$ * window.Math.PI / 180);
  $isParentAreaDataLayer$$ && ($label$$102_layer$$14$$.$_renderLabel$[$data$$106$$.location] = D.$JSCompiler_alias_FALSE$$);
  (0,D.$JSCompiler_StaticMethods__styleDisplayable$$)(this, $data$$106$$, $marker$$18_markerDefaults_sx$$18$$);
  $label$$102_layer$$14$$ = this.$_createLabel$($label$$102_layer$$14$$, $dataLayer$$13$$, $data$$106$$, $marker$$18_markerDefaults_sx$$18$$, $isParentAreaDataLayer$$);
  return new D.$DvtMapObjPeer$$($data$$106$$, $dataLayer$$13$$, $marker$$18_markerDefaults_sx$$18$$, $label$$102_layer$$14$$, $center$$13$$)
};
D.$DvtThematicMapJsonParser$$.prototype.$_createImage$ = function $$DvtThematicMapJsonParser$$$$$_createImage$$($layer$$15$$, $dataLayer$$14$$, $data$$107$$, $isParentAreaDataLayer$$1$$) {
  var $center$$14$$ = (0,D.$DvtThematicMapJsonParser$getCenter$$)($dataLayer$$14$$, $data$$107$$);
  if(!$center$$14$$) {
    return D.$JSCompiler_alias_NULL$$
  }
  var $image$$23$$ = new D.$DvtImage$$(this.$_tmap$.$getCtx$(), $data$$107$$.url), $width$$160$$ = $data$$107$$.width, $height$$145$$ = $data$$107$$.height;
  $width$$160$$ != D.$JSCompiler_alias_NULL$$ && $height$$145$$ != D.$JSCompiler_alias_NULL$$ && ($image$$23$$.$setX$($center$$14$$.x - $width$$160$$ / 2), $image$$23$$.$setY$($center$$14$$.y - $height$$145$$ / 2), $image$$23$$.$setWidth$($width$$160$$), $image$$23$$.$setHeight$($height$$145$$));
  $isParentAreaDataLayer$$1$$ && ($layer$$15$$.$_renderLabel$[$data$$107$$.location] = D.$JSCompiler_alias_FALSE$$);
  var $peer$$33$$ = new D.$DvtMapObjPeer$$($data$$107$$, $dataLayer$$14$$, $image$$23$$, D.$JSCompiler_alias_NULL$$, $center$$14$$);
  (!$width$$160$$ || !$height$$145$$) && D.$DvtImageLoader$$.$loadImage$(this.$_tmap$.$getCtx$(), $data$$107$$.url, function($layer$$15$$) {
    $layer$$15$$ && ($layer$$15$$.width && $layer$$15$$.height) && ($image$$23$$.$setWidth$($layer$$15$$.width), $image$$23$$.$setHeight$($layer$$15$$.height), $image$$23$$.$setX$($center$$14$$.x - $layer$$15$$.width / 2), $image$$23$$.$setY$($center$$14$$.y - $layer$$15$$.height / 2), $peer$$33$$.$__recenter$())
  });
  return $peer$$33$$
};
D.$DvtThematicMapJsonParser$$.prototype.$_createLabel$ = function $$DvtThematicMapJsonParser$$$$$_createLabel$$($fillColor$$10_layer$$17$$, $dataLayer$$16_labelStyle$$21$$, $data$$109$$, $displayable$$100_isArea$$1$$, $isParentAreaDataLayer$$3$$) {
  var $areaId$$4$$ = $data$$109$$.location, $labelText$$2$$ = $data$$109$$.label, $labelDisplay$$7$$ = $labelText$$2$$ ? "on" : "off";
  $isParentAreaDataLayer$$3$$ && ($labelDisplay$$7$$ = $fillColor$$10_layer$$17$$.$getLabelDisplay$());
  $displayable$$100_isArea$$1$$ = $displayable$$100_isArea$$1$$ instanceof D.$DvtPath$$;
  if(!$labelText$$2$$ && $isParentAreaDataLayer$$3$$ && ($displayable$$100_isArea$$1$$ && "off" != $labelDisplay$$7$$ || !$displayable$$100_isArea$$1$$ && "on" == $labelDisplay$$7$$)) {
    $labelText$$2$$ = "long" == $fillColor$$10_layer$$17$$.$_labelType$ ? $fillColor$$10_layer$$17$$.$AreaNames$[$areaId$$4$$][1] : $fillColor$$10_layer$$17$$.$AreaNames$[$areaId$$4$$][0]
  }
  if($labelText$$2$$) {
    var $context$$620_label$$103$$ = this.$_tmap$.$getCtx$(), $context$$620_label$$103$$ = $displayable$$100_isArea$$1$$ ? new D.$DvtMapLabel$$($context$$620_label$$103$$, $labelText$$2$$, $fillColor$$10_layer$$17$$.$getLabelInfoForArea$ ? $fillColor$$10_layer$$17$$.$getLabelInfoForArea$($areaId$$4$$) : D.$JSCompiler_alias_NULL$$, $labelDisplay$$7$$, $dataLayer$$16_labelStyle$$21$$.$_dataLabelLayer$, this.$_tmap$.$_bSupportsVectorEffects$) : new D.$DvtOutputText$$($context$$620_label$$103$$, $labelText$$2$$, 
    0, 0);
    $dataLayer$$16_labelStyle$$21$$ = new D.$DvtCSSStyle$$;
    $displayable$$100_isArea$$1$$ && $dataLayer$$16_labelStyle$$21$$.$merge$(new D.$DvtCSSStyle$$($fillColor$$10_layer$$17$$.$_layerCSSStyle$));
    $data$$109$$.labelStyle && (0,D.$JSCompiler_StaticMethods_parseInlineStyle$$)($dataLayer$$16_labelStyle$$21$$, $data$$109$$.labelStyle);
    $fillColor$$10_layer$$17$$ = $dataLayer$$16_labelStyle$$21$$.$getStyle$("color");
    $dataLayer$$16_labelStyle$$21$$.$setStyle$("color", D.$JSCompiler_alias_NULL$$);
    $context$$620_label$$103$$.$setCSSStyle$($dataLayer$$16_labelStyle$$21$$);
    if($context$$620_label$$103$$ instanceof D.$DvtMapLabel$$ && (D.$DvtAgent$_highContrast$$ === D.$JSCompiler_alias_TRUE$$ || !$fillColor$$10_layer$$17$$)) {
      $fillColor$$10_layer$$17$$ = D.$DvtColorUtils$$.$getContrastingTextColor$($data$$109$$.color)
    }
    $fillColor$$10_layer$$17$$ && $context$$620_label$$103$$.$setSolidFill$($fillColor$$10_layer$$17$$)
  }
  return $context$$620_label$$103$$
};
D.$JSCompiler_StaticMethods__styleDisplayable$$ = function $$JSCompiler_StaticMethods__styleDisplayable$$$($JSCompiler_StaticMethods__styleDisplayable$self_fill$$inline_8688$$, $borderColor$$61_style$$118$$, $displayable$$101$$) {
  var $pattern$$14$$ = $borderColor$$61_style$$118$$.pattern, $backgroundColor$$26$$ = $borderColor$$61_style$$118$$.color, $gradient$$15$$ = $JSCompiler_StaticMethods__styleDisplayable$self_fill$$inline_8688$$.$_isMobile$ || "alta" == $JSCompiler_StaticMethods__styleDisplayable$self_fill$$inline_8688$$.$_tmap$.$_skinName$ ? "none" : $borderColor$$61_style$$118$$.visualEffects;
  if($displayable$$101$$ instanceof D.$DvtSimpleMarker$$) {
    if("none" != $borderColor$$61_style$$118$$.borderStyle) {
      var $borderWidth$$16_opacity$$5$$ = $borderColor$$61_style$$118$$.borderWidth;
      "string" == typeof $borderWidth$$16_opacity$$5$$ && ($borderWidth$$16_opacity$$5$$ = "px" == $borderWidth$$16_opacity$$5$$.slice(-2) ? (0,window.parseFloat)($borderColor$$61_style$$118$$.borderWidth.slice(0, -2)) : (0,window.parseFloat)($borderColor$$61_style$$118$$.borderWidth));
      var $stroke$$116$$ = new D.$DvtSolidStroke$$($borderColor$$61_style$$118$$.borderColor, 1, $borderWidth$$16_opacity$$5$$);
      $JSCompiler_StaticMethods__styleDisplayable$self_fill$$inline_8688$$.$_tmap$.$_isMarkerZoomBehaviorFixed$ || ($stroke$$116$$.$_bFixedWidth$ = D.$JSCompiler_alias_TRUE$$);
      $stroke$$116$$.$setType$((0,D.$DvtStroke$convertTypeString$$)($borderColor$$61_style$$118$$.borderStyle));
      $displayable$$101$$.$setStroke$($stroke$$116$$)
    }
    $borderWidth$$16_opacity$$5$$ = $borderColor$$61_style$$118$$.opacity;
    "none" != $gradient$$15$$ ? $displayable$$101$$.$setFill$(new D.$DvtMarkerGradient$$.$createMarkerGradient$($backgroundColor$$26$$, $displayable$$101$$, $borderWidth$$16_opacity$$5$$)) : $pattern$$14$$ ? $displayable$$101$$.$setFill$(new D.$DvtPatternFill$$($pattern$$14$$, $backgroundColor$$26$$, "#FFFFFF")) : $backgroundColor$$26$$ && $displayable$$101$$.$setSolidFill$($backgroundColor$$26$$, $borderWidth$$16_opacity$$5$$)
  }else {
    if($displayable$$101$$ instanceof D.$DvtPath$$) {
      if($borderColor$$61_style$$118$$ = $borderColor$$61_style$$118$$.borderColor) {
        $stroke$$116$$ = new D.$DvtSolidStroke$$($borderColor$$61_style$$118$$), $JSCompiler_StaticMethods__styleDisplayable$self_fill$$inline_8688$$.$_tmap$.$_bSupportsVectorEffects$ && ($stroke$$116$$.$_bFixedWidth$ = D.$JSCompiler_alias_TRUE$$), $displayable$$101$$.$setStroke$($stroke$$116$$)
      }
      $pattern$$14$$ ? ($JSCompiler_StaticMethods__styleDisplayable$self_fill$$inline_8688$$ = new D.$DvtPatternFill$$($pattern$$14$$, $backgroundColor$$26$$, "#FFFFFF"), $displayable$$101$$.$_ptFill$ = $JSCompiler_StaticMethods__styleDisplayable$self_fill$$inline_8688$$) : $displayable$$101$$.$setSolidFill$($backgroundColor$$26$$, $borderWidth$$16_opacity$$5$$)
    }
  }
};
D.$DvtThematicMapJsonParser$getCenter$$ = function $$DvtThematicMapJsonParser$getCenter$$$($dataLayer$$17$$, $data$$110$$) {
  var $locationCoords_map$$14$$ = $dataLayer$$17$$.$_tmap$, $mapName$$ = $locationCoords_map$$14$$.$_mapName$, $location$$27$$ = $data$$110$$.location;
  return $location$$27$$ ? (($locationCoords_map$$14$$ = D.$DvtBaseMapManager$$.$getAreaCenter$($mapName$$, $dataLayer$$17$$.$_parentLayer$.$LayerName$, $location$$27$$)) || ($locationCoords_map$$14$$ = D.$DvtBaseMapManager$$.$getCityCoordinates$($mapName$$, $location$$27$$)), $locationCoords_map$$14$$) : D.$DvtThematicMapProjections$$.$project$($data$$110$$.x, $data$$110$$.y, $locationCoords_map$$14$$.$_mapName$)
};
D.$DvtThematicMapJsonParser$$.prototype.$_getShowPopupBehaviors$ = function $$DvtThematicMapJsonParser$$$$$_getShowPopupBehaviors$$($popups$$2$$) {
  for(var $spbs$$6$$ = [], $i$$838$$ = 0;$i$$838$$ < $popups$$2$$.length;$i$$838$$++) {
    $spbs$$6$$.push(new D.$DvtShowPopupBehavior$$($popups$$2$$[$i$$838$$].popupId, $popups$$2$$[$i$$838$$].triggerType, D.$JSCompiler_alias_NULL$$, $popups$$2$$[$i$$838$$].align))
  }
  return $spbs$$6$$
};
D.$DvtThematicMapProjections$$ = {};
D.$DvtObj$$.$createSubclass$(D.$DvtThematicMapProjections$$, D.$DvtObj$$, "DvtThematicMapProjections");
D.$DvtThematicMapProjections$$.$_VIEWPORT_BOUNDS$ = new D.$DvtRectangle$$(0, 0, 800, 500);
D.$DvtThematicMapProjections$$.$_RADIUS$ = 6378206.4;
D.$DvtThematicMapProjections$$.$_NEW_ZEALAND_RECT$ = new D.$DvtRectangle$$(500, 200, 200, 200);
D.$DvtThematicMapProjections$$.$_NEW_ZEALAND_BOUNDS$ = new D.$DvtRectangle$$(163, -49, 17, 17);
D.$DvtThematicMapProjections$$.$_AFRICA_BOUNDS$ = new D.$DvtRectangle$$(-17.379205428479874, -37.201510854305546, 68.66391442808313, 77.50071544582713);
D.$DvtThematicMapProjections$$.$_ASIA_BOUNDS$ = new D.$DvtRectangle$$(-0.8436866097568272, -0.7626456732012923, 1.8336308036296942, 1.5748427214611724);
D.$DvtThematicMapProjections$$.$_AUSTRALIA_BOUNDS$ = new D.$DvtRectangle$$(113.29667079927977, -52.89550592498755, 65.25257389065216, 42.123114617504626);
D.$DvtThematicMapProjections$$.$_EUROPE_BOUNDS$ = new D.$DvtRectangle$$(-0.47944476148667076, -0.0014669405958800579, 0.7364925893845453, 0.6293972741802124);
D.$DvtThematicMapProjections$$.$_N_AMERICA_BOUNDS$ = new D.$DvtRectangle$$(-0.6154469465354344, -0.24589767758847714, 1.2448236795108683, 1.2631535127174947);
D.$DvtThematicMapProjections$$.$_S_AMERICA_BOUNDS$ = new D.$DvtRectangle$$(-80.60817722658722, -60.796273249672765, 46.608687602908056, 66.96595767361796);
D.$DvtThematicMapProjections$$.$_APAC_BOUNDS$ = new D.$DvtRectangle$$(68.20516856593524, -52.89892708045518, 111.65739821771903, 116.55460214469134);
D.$DvtThematicMapProjections$$.$_EMEA_BOUNDS$ = new D.$DvtRectangle$$(-24.543831069368586, -37.202500659225905, 204.54283106936856, 164.9634493690208);
D.$DvtThematicMapProjections$$.$_L_AMERICA_BOUNDS$ = new D.$DvtRectangle$$(-117.12451221229134, -54.95921623126266, 82.33223251442891, 87.67786623127876);
D.$DvtThematicMapProjections$$.$_USA_CANADA_BOUNDS$ = new D.$DvtRectangle$$(-0.6154656300926513, 0.0507209798775865, 1.0153104799231851, 0.966537441082997);
D.$DvtThematicMapProjections$$.$_WORLD_BOUNDS$ = new D.$DvtRectangle$$(-171.9, -62.6, 349.8, 150.8);
D.$DvtThematicMapProjections$$.$_ALASKA1_RECT$ = new D.$DvtRectangle$$(172, 51, 8, 3);
D.$DvtThematicMapProjections$$.$_ALASKA2_RECT$ = new D.$DvtRectangle$$(-180, 51, 51, 21);
D.$DvtThematicMapProjections$$.$_HAWAII_RECT$ = new D.$DvtRectangle$$(-178.5, 18.9, 35, 11);
D.$DvtThematicMapProjections$$.$_USA_RECT$ = new D.$DvtRectangle$$(-124.8, 24.4, 58, 25.5);
D.$DvtThematicMapProjections$$.$_ALASKA_BOUNDS$ = new D.$DvtRectangle$$(-187.5517578125, 59.82610321044922, 57.562225341796875, 43.83738708496094);
D.$DvtThematicMapProjections$$.$_HAWAII_BOUNDS$ = new D.$DvtRectangle$$(-160.23606872558594, 18.91549301147461, 5.4374847412109375, 3.3189010620117188);
D.$DvtThematicMapProjections$$.$_USA_BOUNDS$ = new D.$DvtRectangle$$(-2386803.25, -1183550.5, 4514111, 2908402);
D.$DvtThematicMapProjections$$.$_HAWAII_WINDOW$ = new D.$DvtRectangle$$(165, 400, 100, 100);
D.$DvtThematicMapProjections$$.$_ALASKA_WINDOW$ = new D.$DvtRectangle$$(-75, 350, 240, 150);
D.$DvtThematicMapProjections$$.$_ROBINSON_COORDINATES$ = [[1, 0], [0.9986, 0.0314], [0.9954, 0.0629], [0.99, 0.0943], [0.9822, 0.1258], [0.973, 0.1572], [0.96, 0.1887], [0.9427, 0.2201], [0.9216, 0.2515], [0.8962, 0.2826], [0.8679, 0.3132], [0.835, 0.3433], [0.7986, 0.3726], [0.7597, 0.4008], [0.6732, 0.4532], [0.6213, 0.4765], [0.5722, 0.4951], [0.5322, 0.5072]];
D.$DvtThematicMapProjections$$.$project$ = function $$DvtThematicMapProjections$$$$project$$($x$$280$$, $y$$250$$, $basemap$$5$$) {
  var $point$$48$$;
  switch($basemap$$5$$) {
    case "africa":
      $point$$48$$ = D.$DvtThematicMapProjections$$.$_getAffineProjection$(D.$DvtThematicMapProjections$$.$_AFRICA_BOUNDS$, D.$DvtThematicMapProjections$$.$_getMercatorProjection$($x$$280$$, $y$$250$$));
      break;
    case "asia":
      $point$$48$$ = D.$DvtThematicMapProjections$$.$_getAffineProjection$(D.$DvtThematicMapProjections$$.$_ASIA_BOUNDS$, D.$DvtThematicMapProjections$$.$_getAlbersEqualAreaConicProjection$(40, 95, 20, 60, $x$$280$$, $y$$250$$), D.$DvtThematicMapProjections$$.$toRadians$(5));
      break;
    case "australia":
      $point$$48$$ = D.$DvtThematicMapProjections$$.$_getAustraliaProjection$($x$$280$$, $y$$250$$);
      break;
    case "europe":
      $point$$48$$ = D.$DvtThematicMapProjections$$.$_getAffineProjection$(D.$DvtThematicMapProjections$$.$_EUROPE_BOUNDS$, D.$DvtThematicMapProjections$$.$_getAlbersEqualAreaConicProjection$(35, 25, 40, 65, $x$$280$$, $y$$250$$), D.$DvtThematicMapProjections$$.$toRadians$(10));
      break;
    case "northAmerica":
      $point$$48$$ = D.$DvtThematicMapProjections$$.$_getAffineProjection$(D.$DvtThematicMapProjections$$.$_N_AMERICA_BOUNDS$, D.$DvtThematicMapProjections$$.$_getAlbersEqualAreaConicProjection$(23, -96, 20, 60, $x$$280$$, $y$$250$$));
      break;
    case "southAmerica":
      $point$$48$$ = D.$DvtThematicMapProjections$$.$_getAffineProjection$(D.$DvtThematicMapProjections$$.$_S_AMERICA_BOUNDS$, new D.$DvtPoint$$($x$$280$$, $y$$250$$), D.$DvtThematicMapProjections$$.$toRadians$(5));
      break;
    case "apac":
      $point$$48$$ = D.$DvtThematicMapProjections$$.$_getAffineProjection$(D.$DvtThematicMapProjections$$.$_APAC_BOUNDS$, D.$DvtThematicMapProjections$$.$_getMercatorProjection$($x$$280$$, $y$$250$$));
      break;
    case "emea":
      $point$$48$$ = D.$DvtThematicMapProjections$$.$_getAffineProjection$(D.$DvtThematicMapProjections$$.$_EMEA_BOUNDS$, D.$DvtThematicMapProjections$$.$_getMercatorProjection$($x$$280$$, $y$$250$$));
      break;
    case "latinAmerica":
      $point$$48$$ = D.$DvtThematicMapProjections$$.$_getAffineProjection$(D.$DvtThematicMapProjections$$.$_L_AMERICA_BOUNDS$, new D.$DvtPoint$$($x$$280$$, $y$$250$$));
      break;
    case "usaAndCanada":
      $point$$48$$ = D.$DvtThematicMapProjections$$.$_getAffineProjection$(D.$DvtThematicMapProjections$$.$_USA_CANADA_BOUNDS$, D.$DvtThematicMapProjections$$.$_getAlbersEqualAreaConicProjection$(23, -96, 20, 60, $x$$280$$, $y$$250$$));
      break;
    case "worldRegions":
      $point$$48$$ = D.$DvtThematicMapProjections$$.$_getWorldProjection$($x$$280$$, $y$$250$$);
      break;
    case "usa":
      $point$$48$$ = D.$DvtThematicMapProjections$$.$_getUSAProjection$($x$$280$$, $y$$250$$);
      break;
    case "world":
      $point$$48$$ = D.$DvtThematicMapProjections$$.$_getWorldProjection$($x$$280$$, $y$$250$$)
  }
  return $point$$48$$ ? new D.$DvtPoint$$(10 * $point$$48$$.x, 10 * $point$$48$$.y) : D.$JSCompiler_alias_NULL$$
};
D.$DvtThematicMapProjections$$.$_getUSAProjection$ = function $$DvtThematicMapProjections$$$$_getUSAProjection$$($x$$281$$, $y$$251$$) {
  var $transformedPoint$$1_viewPortTransform$$;
  (0,D.$JSCompiler_StaticMethods_containsPoint$$)(D.$DvtThematicMapProjections$$.$_ALASKA1_RECT$, $x$$281$$, $y$$251$$) || (0,D.$JSCompiler_StaticMethods_containsPoint$$)(D.$DvtThematicMapProjections$$.$_ALASKA2_RECT$, $x$$281$$, $y$$251$$) ? ($transformedPoint$$1_viewPortTransform$$ = D.$DvtThematicMapProjections$$.$_getViewPortTransformation$(D.$DvtThematicMapProjections$$.$_ALASKA_BOUNDS$, D.$DvtThematicMapProjections$$.$_ALASKA_WINDOW$), $transformedPoint$$1_viewPortTransform$$ = D.$DvtThematicMapProjections$$.$_applyAffineTransform$($transformedPoint$$1_viewPortTransform$$, 
  D.$DvtThematicMapProjections$$.$_getMercatorProjection$($x$$281$$, $y$$251$$))) : (0,D.$JSCompiler_StaticMethods_containsPoint$$)(D.$DvtThematicMapProjections$$.$_HAWAII_RECT$, $x$$281$$, $y$$251$$) ? ($transformedPoint$$1_viewPortTransform$$ = D.$DvtThematicMapProjections$$.$_getViewPortTransformation$(D.$DvtThematicMapProjections$$.$_HAWAII_BOUNDS$, D.$DvtThematicMapProjections$$.$_HAWAII_WINDOW$), $transformedPoint$$1_viewPortTransform$$ = D.$DvtThematicMapProjections$$.$_applyAffineTransform$($transformedPoint$$1_viewPortTransform$$, 
  new D.$DvtPoint$$($x$$281$$, $y$$251$$))) : (0,D.$JSCompiler_StaticMethods_containsPoint$$)(D.$DvtThematicMapProjections$$.$_USA_RECT$, $x$$281$$, $y$$251$$) && ($transformedPoint$$1_viewPortTransform$$ = D.$DvtThematicMapProjections$$.$_getViewPortTransformation$(D.$DvtThematicMapProjections$$.$_USA_BOUNDS$, D.$DvtThematicMapProjections$$.$_VIEWPORT_BOUNDS$), $transformedPoint$$1_viewPortTransform$$ = D.$DvtThematicMapProjections$$.$_applyAffineTransform$($transformedPoint$$1_viewPortTransform$$, 
  D.$DvtThematicMapProjections$$.$_getOrthographicProjection$(new D.$DvtPoint$$(-95, 36), $x$$281$$, $y$$251$$)));
  return D.$DvtThematicMapProjections$$.$_getBoundedTransformedPoint$($transformedPoint$$1_viewPortTransform$$)
};
D.$DvtThematicMapProjections$$.$_getWorldProjection$ = function $$DvtThematicMapProjections$$$$_getWorldProjection$$($x$$282$$, $y$$252$$) {
  var $transformedPoint$$2_viewPortTransform$$1$$ = D.$DvtThematicMapProjections$$.$_getViewPortTransformation$(D.$DvtThematicMapProjections$$.$_WORLD_BOUNDS$, D.$DvtThematicMapProjections$$.$_VIEWPORT_BOUNDS$), $transformedPoint$$2_viewPortTransform$$1$$ = D.$DvtThematicMapProjections$$.$_applyAffineTransform$($transformedPoint$$2_viewPortTransform$$1$$, D.$DvtThematicMapProjections$$.$_getRobinsonProjection$($x$$282$$, $y$$252$$));
  return D.$DvtThematicMapProjections$$.$_getBoundedTransformedPoint$($transformedPoint$$2_viewPortTransform$$1$$)
};
D.$DvtThematicMapProjections$$.$_getAustraliaProjection$ = function $$DvtThematicMapProjections$$$$_getAustraliaProjection$$($x$$283$$, $y$$253$$) {
  var $transformedPoint$$3_viewPortTransform$$2$$;
  $transformedPoint$$3_viewPortTransform$$2$$ = (0,D.$JSCompiler_StaticMethods_containsPoint$$)(D.$DvtThematicMapProjections$$.$_NEW_ZEALAND_BOUNDS$, $x$$283$$, $y$$253$$) ? D.$DvtThematicMapProjections$$.$_getViewPortTransformation$(D.$DvtThematicMapProjections$$.$_NEW_ZEALAND_BOUNDS$, D.$DvtThematicMapProjections$$.$_NEW_ZEALAND_RECT$) : D.$DvtThematicMapProjections$$.$_getViewPortTransformation$(D.$DvtThematicMapProjections$$.$_AUSTRALIA_BOUNDS$, D.$DvtThematicMapProjections$$.$_VIEWPORT_BOUNDS$);
  $transformedPoint$$3_viewPortTransform$$2$$ = D.$DvtThematicMapProjections$$.$_applyAffineTransform$($transformedPoint$$3_viewPortTransform$$2$$, D.$DvtThematicMapProjections$$.$_getMercatorProjection$($x$$283$$, $y$$253$$));
  return D.$DvtThematicMapProjections$$.$_getBoundedTransformedPoint$($transformedPoint$$3_viewPortTransform$$2$$)
};
D.$DvtThematicMapProjections$$.$_getAffineProjection$ = function $$DvtThematicMapProjections$$$$_getAffineProjection$$($mapBounds_viewPortTransform$$3$$, $point$$49_transformedPoint$$4$$, $rotRadians$$) {
  $mapBounds_viewPortTransform$$3$$ = D.$DvtThematicMapProjections$$.$_getViewPortTransformation$($mapBounds_viewPortTransform$$3$$, D.$DvtThematicMapProjections$$.$_VIEWPORT_BOUNDS$);
  if($rotRadians$$) {
    var $rotMatrix$$ = new D.$DvtMatrix$$;
    $rotMatrix$$.rotate($rotRadians$$);
    $mapBounds_viewPortTransform$$3$$ = D.$DvtThematicMapProjections$$.$_concatAffineTransforms$($mapBounds_viewPortTransform$$3$$, $rotMatrix$$)
  }
  $point$$49_transformedPoint$$4$$ = (0,D.$JSCompiler_StaticMethods_transformPoint$$)($mapBounds_viewPortTransform$$3$$, $point$$49_transformedPoint$$4$$);
  return D.$DvtThematicMapProjections$$.$_getBoundedTransformedPoint$($point$$49_transformedPoint$$4$$)
};
D.$DvtThematicMapProjections$$.$_getBoundedTransformedPoint$ = function $$DvtThematicMapProjections$$$$_getBoundedTransformedPoint$$($point$$50$$) {
  var $bounds$$159$$ = D.$DvtThematicMapProjections$$.$_VIEWPORT_BOUNDS$;
  return!$point$$50$$ || !(0,D.$JSCompiler_StaticMethods_containsPoint$$)($bounds$$159$$, $point$$50$$.x, $point$$50$$.y) ? D.$JSCompiler_alias_NULL$$ : $point$$50$$
};
D.$DvtThematicMapProjections$$.$_getAlbersEqualAreaConicProjection$ = function $$DvtThematicMapProjections$$$$_getAlbersEqualAreaConicProjection$$($latOfOrigin_phi0_rho0$$, $lambda0_lonOfOrigin$$, $c$$48_sP1$$, $n$$37_sP2$$, $theta$$4_x$$284$$, $rho_y$$254$$) {
  $lambda0_lonOfOrigin$$ = D.$DvtThematicMapProjections$$.$toRadians$($lambda0_lonOfOrigin$$);
  $latOfOrigin_phi0_rho0$$ = D.$DvtThematicMapProjections$$.$toRadians$($latOfOrigin_phi0_rho0$$);
  $c$$48_sP1$$ = D.$DvtThematicMapProjections$$.$toRadians$($c$$48_sP1$$);
  $n$$37_sP2$$ = D.$DvtThematicMapProjections$$.$toRadians$($n$$37_sP2$$);
  $n$$37_sP2$$ = 0.5 * (window.Math.sin($c$$48_sP1$$) + window.Math.sin($n$$37_sP2$$));
  $c$$48_sP1$$ = window.Math.pow(window.Math.cos($c$$48_sP1$$), 2) + 2 * $n$$37_sP2$$ * window.Math.sin($c$$48_sP1$$);
  $latOfOrigin_phi0_rho0$$ = $c$$48_sP1$$ - 2 * $n$$37_sP2$$ * window.Math.sin($latOfOrigin_phi0_rho0$$);
  $latOfOrigin_phi0_rho0$$ = window.Math.sqrt($latOfOrigin_phi0_rho0$$) / $n$$37_sP2$$;
  $theta$$4_x$$284$$ = $n$$37_sP2$$ * (D.$DvtThematicMapProjections$$.$toRadians$($theta$$4_x$$284$$) - $lambda0_lonOfOrigin$$);
  $rho_y$$254$$ = $c$$48_sP1$$ - 2 * $n$$37_sP2$$ * window.Math.sin(D.$DvtThematicMapProjections$$.$toRadians$($rho_y$$254$$));
  $rho_y$$254$$ = window.Math.sqrt($rho_y$$254$$) / $n$$37_sP2$$;
  return new D.$DvtPoint$$($rho_y$$254$$ * window.Math.sin($theta$$4_x$$284$$), $latOfOrigin_phi0_rho0$$ - $rho_y$$254$$ * window.Math.cos($theta$$4_x$$284$$))
};
D.$DvtThematicMapProjections$$.$_getMercatorProjection$ = function $$DvtThematicMapProjections$$$$_getMercatorProjection$$($x$$285$$, $y$$255$$) {
  var $pY$$1$$ = window.Math.log(window.Math.tan(0.25 * window.Math.PI + 0.5 * D.$DvtThematicMapProjections$$.$toRadians$($y$$255$$)));
  return new D.$DvtPoint$$($x$$285$$, D.$DvtThematicMapProjections$$.$toDegrees$($pY$$1$$))
};
D.$DvtThematicMapProjections$$.$_getOrthographicProjection$ = function $$DvtThematicMapProjections$$$$_getOrthographicProjection$$($center$$16_centerY$$5$$, $radX$$1_x$$286$$, $radY$$1_y$$256$$) {
  $radX$$1_x$$286$$ = D.$DvtThematicMapProjections$$.$toRadians$($radX$$1_x$$286$$);
  $radY$$1_y$$256$$ = D.$DvtThematicMapProjections$$.$toRadians$($radY$$1_y$$256$$);
  var $centerX$$4$$ = D.$DvtThematicMapProjections$$.$toRadians$($center$$16_centerY$$5$$.x);
  $center$$16_centerY$$5$$ = D.$DvtThematicMapProjections$$.$toRadians$($center$$16_centerY$$5$$.y);
  return new D.$DvtPoint$$(window.Math.cos($radY$$1_y$$256$$) * window.Math.sin($radX$$1_x$$286$$ - $centerX$$4$$) * D.$DvtThematicMapProjections$$.$_RADIUS$, (window.Math.cos($center$$16_centerY$$5$$) * window.Math.sin($radY$$1_y$$256$$) - window.Math.sin($center$$16_centerY$$5$$) * window.Math.cos($radY$$1_y$$256$$) * window.Math.cos($radX$$1_x$$286$$ - $centerX$$4$$)) * D.$DvtThematicMapProjections$$.$_RADIUS$)
};
D.$DvtThematicMapProjections$$.$_getRobinsonProjection$ = function $$DvtThematicMapProjections$$$$_getRobinsonProjection$$($x$$287$$, $y$$257$$) {
  var $newY$$13_ycriteria$$ = window.Math.floor(window.Math.abs($y$$257$$) / 5);
  $newY$$13_ycriteria$$ >= D.$DvtThematicMapProjections$$.$_ROBINSON_COORDINATES$.length - 1 && ($newY$$13_ycriteria$$ = D.$DvtThematicMapProjections$$.$_ROBINSON_COORDINATES$.length - 2);
  var $yInterval$$ = (window.Math.abs($y$$257$$) - 5 * $newY$$13_ycriteria$$) / 5, $newX$$12$$ = $x$$287$$ * (D.$DvtThematicMapProjections$$.$_ROBINSON_COORDINATES$[$newY$$13_ycriteria$$][0] + $yInterval$$ * (D.$DvtThematicMapProjections$$.$_ROBINSON_COORDINATES$[$newY$$13_ycriteria$$ + 1][0] - D.$DvtThematicMapProjections$$.$_ROBINSON_COORDINATES$[$newY$$13_ycriteria$$][0])), $newY$$13_ycriteria$$ = D.$DvtThematicMapProjections$$.$_ROBINSON_COORDINATES$[$newY$$13_ycriteria$$][1] + $yInterval$$ * 
  (D.$DvtThematicMapProjections$$.$_ROBINSON_COORDINATES$[$newY$$13_ycriteria$$ + 1][1] - D.$DvtThematicMapProjections$$.$_ROBINSON_COORDINATES$[$newY$$13_ycriteria$$][1]);
  0 > $y$$257$$ && ($newY$$13_ycriteria$$ *= -1);
  return new D.$DvtPoint$$($newX$$12$$, 180 * $newY$$13_ycriteria$$)
};
D.$DvtThematicMapProjections$$.$_applyAffineTransform$ = function $$DvtThematicMapProjections$$$$_applyAffineTransform$$($matrix$$23$$, $point$$51$$) {
  return new D.$DvtPoint$$($point$$51$$.x * $matrix$$23$$.$_a$ + $matrix$$23$$.$_tx$, $point$$51$$.y * $matrix$$23$$.$_d$ + $matrix$$23$$.$_ty$)
};
D.$DvtThematicMapProjections$$.$_concatAffineTransforms$ = function $$DvtThematicMapProjections$$$$_concatAffineTransforms$$($transform1$$, $transform2$$) {
  var $t1A$$ = $transform1$$.$_a$, $t1D$$ = $transform1$$.$_d$;
  return new D.$DvtMatrix$$($transform2$$.$_a$ * $t1A$$, $transform2$$.$_b$ * $t1A$$, $transform2$$.$_c$ * $t1D$$, $transform2$$.$_d$ * $t1D$$, $transform1$$.$_tx$ + $transform2$$.$_tx$ * $t1A$$, $transform1$$.$_ty$ + $transform2$$.$_ty$ * $t1D$$)
};
D.$DvtThematicMapProjections$$.$_getViewPortTransformation$ = function $$DvtThematicMapProjections$$$$_getViewPortTransformation$$($mapBound$$, $deviceView$$) {
  var $d5_i$$839$$ = $deviceView$$.x, $d6_j$$115$$ = $deviceView$$.y, $d$$13$$ = $mapBound$$.$w$, $d1$$1$$ = $mapBound$$.$h$, $d2$$1_d3$$1$$ = 0, $d2$$1_d3$$1$$ = $deviceView$$.$w$ / $d$$13$$, $d4$$ = $deviceView$$.$h$ / $d1$$1$$, $d2$$1_d3$$1$$ = $d2$$1_d3$$1$$ <= $d4$$ ? $d2$$1_d3$$1$$ : $d4$$, $d5_i$$839$$ = $d5_i$$839$$ - $mapBound$$.x * $d2$$1_d3$$1$$, $d6_j$$115$$ = $d6_j$$115$$ + $mapBound$$.y * $d2$$1_d3$$1$$, $d5_i$$839$$ = $d5_i$$839$$ + ($deviceView$$.$w$ - $d$$13$$ * $d2$$1_d3$$1$$) / 
  2, $d6_j$$115$$ = $d6_j$$115$$ + ($deviceView$$.$h$ - ($deviceView$$.$h$ - $d1$$1$$ * $d2$$1_d3$$1$$) / 2);
  return new D.$DvtMatrix$$($d2$$1_d3$$1$$, 0, 0, -$d2$$1_d3$$1$$, $d5_i$$839$$, $d6_j$$115$$)
};
D.$DvtThematicMapProjections$$.$toRadians$ = function $$DvtThematicMapProjections$$$$toRadians$$($x$$288$$) {
  return $x$$288$$ * (window.Math.PI / 180)
};
D.$DvtThematicMapProjections$$.$toDegrees$ = function $$DvtThematicMapProjections$$$$toDegrees$$($x$$289$$) {
  return $x$$289$$ * (180 / window.Math.PI)
};
D.$DvtThematicMapProjections$$.$inverseProject$ = function $$DvtThematicMapProjections$$$$inverseProject$$($x$$290$$, $y$$258$$, $basemap$$6$$) {
  var $point$$52$$;
  $x$$290$$ /= 10;
  $y$$258$$ /= 10;
  switch($basemap$$6$$) {
    case "africa":
      $point$$52$$ = D.$DvtThematicMapProjections$$.$_getInverseAffineProjection$(D.$DvtThematicMapProjections$$.$_AFRICA_BOUNDS$, new D.$DvtPoint$$($x$$290$$, $y$$258$$));
      $point$$52$$ = D.$DvtThematicMapProjections$$.$_getInverseMercatorProjection$($point$$52$$.x, $point$$52$$.y);
      break;
    case "asia":
      $point$$52$$ = D.$DvtThematicMapProjections$$.$_getInverseAffineProjection$(D.$DvtThematicMapProjections$$.$_ASIA_BOUNDS$, new D.$DvtPoint$$($x$$290$$, $y$$258$$), D.$DvtThematicMapProjections$$.$toRadians$(5));
      $point$$52$$ = D.$DvtThematicMapProjections$$.$_getInverseAlbersEqualAreaConicProjection$(40, 95, 20, 60, $point$$52$$.x, $point$$52$$.y);
      break;
    case "australia":
      $point$$52$$ = D.$DvtThematicMapProjections$$.$_getInverseAustraliaProjection$($x$$290$$, $y$$258$$);
      break;
    case "europe":
      $point$$52$$ = D.$DvtThematicMapProjections$$.$_getInverseAffineProjection$(D.$DvtThematicMapProjections$$.$_EUROPE_BOUNDS$, new D.$DvtPoint$$($x$$290$$, $y$$258$$), D.$DvtThematicMapProjections$$.$toRadians$(10));
      $point$$52$$ = D.$DvtThematicMapProjections$$.$_getInverseAlbersEqualAreaConicProjection$(35, 25, 40, 65, $point$$52$$.x, $point$$52$$.y);
      break;
    case "northAmerica":
      $point$$52$$ = D.$DvtThematicMapProjections$$.$_getInverseAffineProjection$(D.$DvtThematicMapProjections$$.$_N_AMERICA_BOUNDS$, new D.$DvtPoint$$($x$$290$$, $y$$258$$));
      $point$$52$$ = D.$DvtThematicMapProjections$$.$_getInverseAlbersEqualAreaConicProjection$(23, -96, 20, 60, $point$$52$$.x, $point$$52$$.y);
      break;
    case "southAmerica":
      $point$$52$$ = D.$DvtThematicMapProjections$$.$_getInverseAffineProjection$(D.$DvtThematicMapProjections$$.$_S_AMERICA_BOUNDS$, new D.$DvtPoint$$($x$$290$$, $y$$258$$), D.$DvtThematicMapProjections$$.$toRadians$(5));
      break;
    case "apac":
      $point$$52$$ = D.$DvtThematicMapProjections$$.$_getInverseAffineProjection$(D.$DvtThematicMapProjections$$.$_APAC_BOUNDS$, new D.$DvtPoint$$($x$$290$$, $y$$258$$));
      $point$$52$$ = D.$DvtThematicMapProjections$$.$_getInverseMercatorProjection$($point$$52$$.x, $point$$52$$.y);
      break;
    case "emea":
      $point$$52$$ = D.$DvtThematicMapProjections$$.$_getInverseAffineProjection$(D.$DvtThematicMapProjections$$.$_EMEA_BOUNDS$, new D.$DvtPoint$$($x$$290$$, $y$$258$$));
      $point$$52$$ = D.$DvtThematicMapProjections$$.$_getInverseMercatorProjection$($point$$52$$.x, $point$$52$$.y);
      break;
    case "latinAmerica":
      $point$$52$$ = D.$DvtThematicMapProjections$$.$_getInverseAffineProjection$(D.$DvtThematicMapProjections$$.$_L_AMERICA_BOUNDS$, new D.$DvtPoint$$($x$$290$$, $y$$258$$));
      break;
    case "usaAndCanada":
      $point$$52$$ = D.$DvtThematicMapProjections$$.$_getInverseAffineProjection$(D.$DvtThematicMapProjections$$.$_USA_CANADA_BOUNDS$, new D.$DvtPoint$$($x$$290$$, $y$$258$$));
      $point$$52$$ = D.$DvtThematicMapProjections$$.$_getInverseAlbersEqualAreaConicProjection$(23, -96, 20, 60, $point$$52$$.x, $point$$52$$.y);
      break;
    case "worldRegions":
      $point$$52$$ = D.$DvtThematicMapProjections$$.$_getInverseWorldProjection$($x$$290$$, $y$$258$$);
      break;
    case "usa":
      $point$$52$$ = D.$DvtThematicMapProjections$$.$_getInverseUSAProjection$($x$$290$$, $y$$258$$);
      break;
    case "world":
      $point$$52$$ = D.$DvtThematicMapProjections$$.$_getInverseWorldProjection$($x$$290$$, $y$$258$$)
  }
  return $point$$52$$ ? $point$$52$$ : new D.$DvtPoint$$($x$$290$$, $y$$258$$)
};
D.$DvtThematicMapProjections$$.$_getInverseUSAProjection$ = function $$DvtThematicMapProjections$$$$_getInverseUSAProjection$$($x$$291$$, $y$$259$$) {
  var $point$$53_viewPortTransform$$4$$;
  return(0,D.$JSCompiler_StaticMethods_containsPoint$$)(D.$DvtThematicMapProjections$$.$_ALASKA_WINDOW$, $x$$291$$, $y$$259$$) ? ($point$$53_viewPortTransform$$4$$ = D.$DvtThematicMapProjections$$.$_getViewPortTransformation$(D.$DvtThematicMapProjections$$.$_ALASKA_BOUNDS$, D.$DvtThematicMapProjections$$.$_ALASKA_WINDOW$), $point$$53_viewPortTransform$$4$$.$invert$(), $point$$53_viewPortTransform$$4$$ = (0,D.$JSCompiler_StaticMethods_transformPoint$$)($point$$53_viewPortTransform$$4$$, new D.$DvtPoint$$($x$$291$$, 
  $y$$259$$)), D.$DvtThematicMapProjections$$.$_getInverseMercatorProjection$($point$$53_viewPortTransform$$4$$.x, $point$$53_viewPortTransform$$4$$.y)) : (0,D.$JSCompiler_StaticMethods_containsPoint$$)(D.$DvtThematicMapProjections$$.$_HAWAII_WINDOW$, $x$$291$$, $y$$259$$) ? ($point$$53_viewPortTransform$$4$$ = D.$DvtThematicMapProjections$$.$_getViewPortTransformation$(D.$DvtThematicMapProjections$$.$_HAWAII_BOUNDS$, D.$DvtThematicMapProjections$$.$_HAWAII_WINDOW$), $point$$53_viewPortTransform$$4$$.$invert$(), 
  (0,D.$JSCompiler_StaticMethods_transformPoint$$)($point$$53_viewPortTransform$$4$$, new D.$DvtPoint$$($x$$291$$, $y$$259$$))) : (0,D.$JSCompiler_StaticMethods_containsPoint$$)(D.$DvtThematicMapProjections$$.$_VIEWPORT_BOUNDS$, $x$$291$$, $y$$259$$) ? ($point$$53_viewPortTransform$$4$$ = D.$DvtThematicMapProjections$$.$_getViewPortTransformation$(D.$DvtThematicMapProjections$$.$_USA_BOUNDS$, D.$DvtThematicMapProjections$$.$_VIEWPORT_BOUNDS$), $point$$53_viewPortTransform$$4$$.$invert$(), $point$$53_viewPortTransform$$4$$ = 
  (0,D.$JSCompiler_StaticMethods_transformPoint$$)($point$$53_viewPortTransform$$4$$, new D.$DvtPoint$$($x$$291$$, $y$$259$$)), D.$DvtThematicMapProjections$$.$_getInverseOrthographicProjection$(new D.$DvtPoint$$(-95, 36), $point$$53_viewPortTransform$$4$$.x, $point$$53_viewPortTransform$$4$$.y)) : new D.$DvtPoint$$($x$$291$$, $y$$259$$)
};
D.$DvtThematicMapProjections$$.$_getInverseWorldProjection$ = function $$DvtThematicMapProjections$$$$_getInverseWorldProjection$$($x$$292$$, $y$$260$$) {
  var $point$$54_viewPortTransform$$5$$ = D.$DvtThematicMapProjections$$.$_getViewPortTransformation$(D.$DvtThematicMapProjections$$.$_WORLD_BOUNDS$, D.$DvtThematicMapProjections$$.$_VIEWPORT_BOUNDS$);
  $point$$54_viewPortTransform$$5$$.$invert$();
  $point$$54_viewPortTransform$$5$$ = (0,D.$JSCompiler_StaticMethods_transformPoint$$)($point$$54_viewPortTransform$$5$$, new D.$DvtPoint$$($x$$292$$, $y$$260$$));
  return D.$DvtThematicMapProjections$$.$_getInverseRobinsonProjection$($point$$54_viewPortTransform$$5$$.x, $point$$54_viewPortTransform$$5$$.y)
};
D.$DvtThematicMapProjections$$.$_getInverseAustraliaProjection$ = function $$DvtThematicMapProjections$$$$_getInverseAustraliaProjection$$($x$$293$$, $y$$261$$) {
  var $point$$55_viewPortTransform$$6$$;
  $point$$55_viewPortTransform$$6$$ = (0,D.$JSCompiler_StaticMethods_containsPoint$$)(D.$DvtThematicMapProjections$$.$_NEW_ZEALAND_RECT$, $x$$293$$, $y$$261$$) ? D.$DvtThematicMapProjections$$.$_getViewPortTransformation$(D.$DvtThematicMapProjections$$.$_NEW_ZEALAND_BOUNDS$, D.$DvtThematicMapProjections$$.$_NEW_ZEALAND_RECT$) : D.$DvtThematicMapProjections$$.$_getViewPortTransformation$(D.$DvtThematicMapProjections$$.$_AUSTRALIA_BOUNDS$, D.$DvtThematicMapProjections$$.$_VIEWPORT_BOUNDS$);
  $point$$55_viewPortTransform$$6$$.$invert$();
  $point$$55_viewPortTransform$$6$$ = (0,D.$JSCompiler_StaticMethods_transformPoint$$)($point$$55_viewPortTransform$$6$$, new D.$DvtPoint$$($x$$293$$, $y$$261$$));
  return D.$DvtThematicMapProjections$$.$_getInverseMercatorProjection$($point$$55_viewPortTransform$$6$$.x, $point$$55_viewPortTransform$$6$$.y)
};
D.$DvtThematicMapProjections$$.$_getInverseAffineProjection$ = function $$DvtThematicMapProjections$$$$_getInverseAffineProjection$$($mapBounds$$1_viewPortTransform$$7$$, $point$$56$$, $rotRadians$$1$$) {
  $mapBounds$$1_viewPortTransform$$7$$ = D.$DvtThematicMapProjections$$.$_getViewPortTransformation$($mapBounds$$1_viewPortTransform$$7$$, D.$DvtThematicMapProjections$$.$_VIEWPORT_BOUNDS$);
  if($rotRadians$$1$$) {
    var $rotMatrix$$1$$ = new D.$DvtMatrix$$;
    $rotMatrix$$1$$.rotate($rotRadians$$1$$);
    $mapBounds$$1_viewPortTransform$$7$$ = D.$DvtThematicMapProjections$$.$_concatAffineTransforms$($mapBounds$$1_viewPortTransform$$7$$, $rotMatrix$$1$$)
  }
  $mapBounds$$1_viewPortTransform$$7$$.$invert$();
  return(0,D.$JSCompiler_StaticMethods_transformPoint$$)($mapBounds$$1_viewPortTransform$$7$$, $point$$56$$)
};
D.$DvtThematicMapProjections$$.$_getInverseAlbersEqualAreaConicProjection$ = function $$DvtThematicMapProjections$$$$_getInverseAlbersEqualAreaConicProjection$$($latOfOrigin$$1_p0$$4_phi0$$1$$, $lambda0$$1_lonOfOrigin$$1$$, $c$$50_sP1$$1$$, $n$$38_sP2$$1$$, $x$$294$$, $y$$262$$) {
  $lambda0$$1_lonOfOrigin$$1$$ = D.$DvtThematicMapProjections$$.$toRadians$($lambda0$$1_lonOfOrigin$$1$$);
  $latOfOrigin$$1_p0$$4_phi0$$1$$ = D.$DvtThematicMapProjections$$.$toRadians$($latOfOrigin$$1_p0$$4_phi0$$1$$);
  $c$$50_sP1$$1$$ = D.$DvtThematicMapProjections$$.$toRadians$($c$$50_sP1$$1$$);
  $n$$38_sP2$$1$$ = D.$DvtThematicMapProjections$$.$toRadians$($n$$38_sP2$$1$$);
  $n$$38_sP2$$1$$ = 0.5 * (window.Math.sin($c$$50_sP1$$1$$) + window.Math.sin($n$$38_sP2$$1$$));
  $c$$50_sP1$$1$$ = window.Math.pow(window.Math.cos($c$$50_sP1$$1$$), 2) + 2 * $n$$38_sP2$$1$$ * window.Math.sin($c$$50_sP1$$1$$);
  $latOfOrigin$$1_p0$$4_phi0$$1$$ = $c$$50_sP1$$1$$ - 2 * $n$$38_sP2$$1$$ * window.Math.sin($latOfOrigin$$1_p0$$4_phi0$$1$$);
  $latOfOrigin$$1_p0$$4_phi0$$1$$ = window.Math.sqrt($latOfOrigin$$1_p0$$4_phi0$$1$$) / $n$$38_sP2$$1$$;
  var $p$$30$$ = window.Math.sqrt($x$$294$$ * $x$$294$$ + ($latOfOrigin$$1_p0$$4_phi0$$1$$ - $y$$262$$) * ($latOfOrigin$$1_p0$$4_phi0$$1$$ - $y$$262$$));
  return new D.$DvtPoint$$(D.$DvtThematicMapProjections$$.$toDegrees$($lambda0$$1_lonOfOrigin$$1$$ + window.Math.atan($x$$294$$ / ($latOfOrigin$$1_p0$$4_phi0$$1$$ - $y$$262$$)) / $n$$38_sP2$$1$$), D.$DvtThematicMapProjections$$.$toDegrees$(window.Math.asin(($c$$50_sP1$$1$$ - $p$$30$$ * $p$$30$$ * $n$$38_sP2$$1$$ * $n$$38_sP2$$1$$) / (2 * $n$$38_sP2$$1$$))))
};
D.$DvtThematicMapProjections$$.$_getInverseMercatorProjection$ = function $$DvtThematicMapProjections$$$$_getInverseMercatorProjection$$($x$$295$$, $y$$263$$) {
  return new D.$DvtPoint$$($x$$295$$, D.$DvtThematicMapProjections$$.$toDegrees$(2 * window.Math.atan(window.Math.exp(D.$DvtThematicMapProjections$$.$toRadians$($y$$263$$))) - 0.5 * window.Math.PI))
};
D.$DvtThematicMapProjections$$.$_getInverseOrthographicProjection$ = function $$DvtThematicMapProjections$$$$_getInverseOrthographicProjection$$($center$$17$$, $radX$$2_x$$296$$, $radY$$2_y$$264$$) {
  $radX$$2_x$$296$$ /= D.$DvtThematicMapProjections$$.$_RADIUS$;
  $radY$$2_y$$264$$ /= D.$DvtThematicMapProjections$$.$_RADIUS$;
  var $centerY$$6$$ = D.$DvtThematicMapProjections$$.$toRadians$($center$$17$$.y), $p$$31$$ = window.Math.sqrt($radX$$2_x$$296$$ * $radX$$2_x$$296$$ + $radY$$2_y$$264$$ * $radY$$2_y$$264$$), $c$$51$$ = window.Math.asin($p$$31$$);
  return new D.$DvtPoint$$(D.$DvtThematicMapProjections$$.$toDegrees$(D.$DvtThematicMapProjections$$.$toRadians$($center$$17$$.x) + window.Math.atan($radX$$2_x$$296$$ * window.Math.sin($c$$51$$) / ($p$$31$$ * window.Math.cos($centerY$$6$$) * window.Math.cos($c$$51$$) - $radY$$2_y$$264$$ * window.Math.sin($centerY$$6$$) * window.Math.sin($c$$51$$)))), D.$DvtThematicMapProjections$$.$toDegrees$(window.Math.asin(window.Math.cos($c$$51$$) * window.Math.sin($centerY$$6$$) + $radY$$2_y$$264$$ * window.Math.sin($c$$51$$) * 
  window.Math.cos($centerY$$6$$) / $p$$31$$)))
};
D.$DvtThematicMapProjections$$.$_getInverseRobinsonProjection$ = function $$DvtThematicMapProjections$$$$_getInverseRobinsonProjection$$($x$$297$$, $y$$265$$) {
  var $criteria$$2_originalX$$ = window.Math.floor(window.Math.abs($y$$265$$) / 5);
  $criteria$$2_originalX$$ >= D.$DvtThematicMapProjections$$.$_ROBINSON_COORDINATES$.length - 1 && ($criteria$$2_originalX$$ = D.$DvtThematicMapProjections$$.$_ROBINSON_COORDINATES$.length - 2);
  var $yInterval$$1$$ = (window.Math.abs($y$$265$$ / 180) - D.$DvtThematicMapProjections$$.$_ROBINSON_COORDINATES$[$criteria$$2_originalX$$][1]) / (D.$DvtThematicMapProjections$$.$_ROBINSON_COORDINATES$[$criteria$$2_originalX$$ + 1][1] - D.$DvtThematicMapProjections$$.$_ROBINSON_COORDINATES$[$criteria$$2_originalX$$][1]), $originalY$$ = 5 * $yInterval$$1$$ + 5 * $criteria$$2_originalX$$, $criteria$$2_originalX$$ = $x$$297$$ / (D.$DvtThematicMapProjections$$.$_ROBINSON_COORDINATES$[$criteria$$2_originalX$$][0] + 
  $yInterval$$1$$ * (D.$DvtThematicMapProjections$$.$_ROBINSON_COORDINATES$[$criteria$$2_originalX$$ + 1][0] - D.$DvtThematicMapProjections$$.$_ROBINSON_COORDINATES$[$criteria$$2_originalX$$][0]));
  0 > $y$$265$$ && ($originalY$$ *= -1);
  return new D.$DvtPoint$$($criteria$$2_originalX$$, $originalY$$)
};
D.$DvtMapControlButton$$ = function $$DvtMapControlButton$$$($context$$621$$, $button$$82$$, $mapCallback$$3$$, $panZoomCanvas$$21$$, $btype$$3$$, $resources$$9$$, $eventManager$$46$$) {
  this.Init($context$$621$$, $button$$82$$, $mapCallback$$3$$, $panZoomCanvas$$21$$, $btype$$3$$, $resources$$9$$, $eventManager$$46$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtMapControlButton$$, D.$DvtBaseControl$$, "DvtMapControlButton");
D.$DvtMapControlButton$$.prototype.Init = function $$DvtMapControlButton$$$$Init$($context$$622_proxy$$14$$, $button$$83$$, $mapCallback$$4$$, $panZoomCanvas$$22$$, $btype$$4$$, $eventManager$$47$$) {
  D.$DvtMapControlButton$$.$superclass$.Init.call(this, $context$$622_proxy$$14$$);
  this.$_btype$ = $btype$$4$$;
  this.$_button$ = $button$$83$$;
  this.$_eventManager$ = $eventManager$$47$$;
  (0,D.$JSCompiler_StaticMethods_setCallback$$)(this.$_button$, this.$HandleOnClick$, this);
  $context$$622_proxy$$14$$ = new D.$DvtControlPanelEventHandlerProxy$$(this, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, 0 == this.$_btype$ ? (0,D.$DvtBundle$getTranslatedString$$)("DvtSubcomponentBundle", "CONTROL_PANEL_DRILLUP") : 1 == this.$_btype$ ? (0,D.$DvtBundle$getTranslatedString$$)("DvtSubcomponentBundle", "CONTROL_PANEL_DRILLDOWN") : 2 == this.$_btype$ ? (0,D.$DvtBundle$getTranslatedString$$)("DvtSubcomponentBundle", 
  "CONTROL_PANEL_RESET") : D.$JSCompiler_alias_NULL$$);
  this.$_eventManager$.$associate$(this.$_button$, $context$$622_proxy$$14$$);
  this.$addChild$(this.$_button$);
  this.$_mapCallback$ = $mapCallback$$4$$;
  this.$_isEnabled$ = D.$JSCompiler_alias_TRUE$$
};
D.$DvtMapControlButton$$.prototype.$setEnabled$ = function $$DvtMapControlButton$$$$$setEnabled$$($enabled$$21$$) {
  this.$setAlpha$($enabled$$21$$ ? 1 : 0.4);
  this.$_isEnabled$ = $enabled$$21$$;
  this.$_button$.$setEnabled$($enabled$$21$$);
  (0,D.$JSCompiler_StaticMethods_initState$$)(this.$_button$)
};
D.$DvtMapControlButton$$.prototype.$HandleOnClick$ = function $$DvtMapControlButton$$$$$HandleOnClick$$($event$$786$$) {
  (0,D.$DvtEventManager$consumeEvent$$)($event$$786$$);
  this.$_isEnabled$ && this.$_mapCallback$ && this.$_mapCallback$()
};
D.$DvtThematicMapControlPanel$$ = function $$DvtThematicMapControlPanel$$$($context$$623$$, $view$$63$$, $state$$98$$) {
  this.Init($context$$623$$, $view$$63$$, $state$$98$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtThematicMapControlPanel$$, D.$DvtControlPanel$$, "DvtThematicMapControlPanel");
D.$DvtThematicMapControlPanel$$.prototype.Init = function $$DvtThematicMapControlPanel$$$$Init$($context$$624$$, $view$$64$$, $state$$99$$) {
  D.$DvtThematicMapControlPanel$$.$superclass$.Init.call(this, $context$$624$$, $view$$64$$, $state$$99$$);
  this.$_drillMode$ = $view$$64$$.$_drillMode$;
  this.$_buttonImages$ = (0,D.$JSCompiler_StaticMethods_getResourcesMap$$)($view$$64$$);
  this.$_drillUpCallback$ = D.$DvtObj$$.$createCallback$($view$$64$$, $view$$64$$.$drillUp$);
  this.$_drillDownCallback$ = D.$DvtObj$$.$createCallback$($view$$64$$, $view$$64$$.$drillDown$);
  this.$_resetCallback$ = D.$DvtObj$$.$createCallback$($view$$64$$, $view$$64$$.$resetMap$);
  this.$_drillDownButton$ = this.$_drillUpButton$ = this.$_resetButton$ = D.$JSCompiler_alias_NULL$$;
  this.$_drillUpButtonEnabled$ = this.$_drillDownButtonEnabled$ = D.$JSCompiler_alias_FALSE$$;
  this.$_styleMap$ = $view$$64$$.$getSubcomponentStyles$()
};
D.$JSCompiler_StaticMethods_setEnabledDrillDownButton$$ = function $$JSCompiler_StaticMethods_setEnabledDrillDownButton$$$($JSCompiler_StaticMethods_setEnabledDrillDownButton$self$$, $enable$$2$$) {
  $JSCompiler_StaticMethods_setEnabledDrillDownButton$self$$.$_drillDownButtonEnabled$ = $enable$$2$$;
  $JSCompiler_StaticMethods_setEnabledDrillDownButton$self$$.$_drillDownButton$ && $JSCompiler_StaticMethods_setEnabledDrillDownButton$self$$.$_drillDownButton$.$setEnabled$($enable$$2$$)
};
D.$JSCompiler_StaticMethods_setEnabledDrillUpButton$$ = function $$JSCompiler_StaticMethods_setEnabledDrillUpButton$$$($JSCompiler_StaticMethods_setEnabledDrillUpButton$self$$, $enable$$3$$) {
  $JSCompiler_StaticMethods_setEnabledDrillUpButton$self$$.$_drillUpButtonEnabled$ = $enable$$3$$;
  $JSCompiler_StaticMethods_setEnabledDrillUpButton$self$$.$_drillUpButton$ && $JSCompiler_StaticMethods_setEnabledDrillUpButton$self$$.$_drillUpButton$.$setEnabled$($enable$$3$$)
};
D.$DvtThematicMapControlPanel$$.prototype.$PopulateHorzContentBar$ = function $$DvtThematicMapControlPanel$$$$$PopulateHorzContentBar$$($contentSprite$$1$$) {
  if(this.$_drillMode$ && "none" != this.$_drillMode$) {
    var $buttonOffset$$ = (0,D.$DvtStyleUtils$getStyle$$)(this.$_styleMap$, "buttonWidth", 0);
    this.$_resetButton$ = D.$DvtButtonLAFUtils$$.$createResetButton$(this.$getCtx$(), this.$_resetCallback$, this.$_panZoomCanvas$, this.$_buttonImages$, this.$_eventManager$, this.$_styleMap$);
    $contentSprite$$1$$.$addChild$(this.$_resetButton$);
    this.$_drillDownButton$ = D.$DvtButtonLAFUtils$$.$createDrillDownButton$(this.$getCtx$(), this.$_drillDownCallback$, this.$_panZoomCanvas$, this.$_buttonImages$, this.$_eventManager$, this.$_styleMap$);
    this.$_drillDownButton$.$setTranslateX$($buttonOffset$$);
    this.$_drillDownButton$.$setEnabled$(this.$_drillDownButtonEnabled$);
    $contentSprite$$1$$.$addChild$(this.$_drillDownButton$);
    this.$_drillUpButton$ = D.$DvtButtonLAFUtils$$.$createDrillUpButton$(this.$getCtx$(), this.$_drillUpCallback$, this.$_panZoomCanvas$, this.$_buttonImages$, this.$_eventManager$, this.$_styleMap$);
    this.$_drillUpButton$.$setTranslateX$(2 * $buttonOffset$$);
    this.$_drillUpButton$.$setEnabled$(this.$_drillUpButtonEnabled$);
    $contentSprite$$1$$.$addChild$(this.$_drillUpButton$)
  }
};

  return D;
});
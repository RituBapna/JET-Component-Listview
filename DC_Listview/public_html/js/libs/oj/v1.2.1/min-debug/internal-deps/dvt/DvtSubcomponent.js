/**
 * Copyright (c) 2014, Oracle and/or its affiliates.
 * All rights reserved.
 */
"use strict";
define(['./DvtToolkit'], function(dvt) {
  // Internal use only.  All APIs and functionality are subject to change at any time.
  
  // Map the D namespace to dvt, which is used to provide access across partitions.
  var D = dvt;
  
D.$DvtAttrGroups$$ = (0,D.$JSCompiler_emptyFn$$)();
D.$DvtObj$$.$createSubclass$(D.$DvtAttrGroups$$, D.$DvtObj$$, "DvtAttrGroups");
D.$DvtAttrGroups$$.prototype.get = (0,D.$JSCompiler_emptyFn$$)();
D.$DvtDiscreteAttrGroups$$ = function $$DvtDiscreteAttrGroups$$$() {
  this.$_results$ = []
};
D.$DvtObj$$.$createSubclass$(D.$DvtDiscreteAttrGroups$$, D.$DvtAttrGroups$$, "DvtDiscreteAttrGroups");
D.$DvtDiscreteAttrGroups$$.prototype.add = function $$DvtDiscreteAttrGroups$$$$add$($group$$36$$, $groupLabel$$1$$, $params$$56$$) {
  this.$_results$.push({group:$group$$36$$, $groupLabel$:$groupLabel$$1$$, $params$:$params$$56$$})
};
D.$DvtDiscreteAttrGroups$$.prototype.get = function $$DvtDiscreteAttrGroups$$$$get$($group$$37$$) {
  if($group$$37$$ === D.$JSCompiler_alias_NULL$$) {
    return D.$JSCompiler_alias_NULL$$
  }
  for(var $i$$772$$ = 0;$i$$772$$ < this.$_results$.length;$i$$772$$++) {
    if(this.$_results$[$i$$772$$].group == $group$$37$$) {
      return this.$_results$[$i$$772$$].$params$
    }
  }
  return D.$JSCompiler_alias_NULL$$
};
D.$DvtContinuousAttrGroups$$ = function $$DvtContinuousAttrGroups$$$($minValue$$15$$, $maxValue$$16$$, $minLabel$$1$$, $maxLabel$$2$$, $ramp$$) {
  this.$_minValue$ = $minValue$$15$$;
  this.$_maxValue$ = $maxValue$$16$$;
  this.$_minLabel$ = $minLabel$$1$$ ? $minLabel$$1$$ : this.$_minValue$;
  this.$_maxLabel$ = $maxLabel$$2$$ ? $maxLabel$$2$$ : this.$_maxValue$;
  this.$_ramp$ = $ramp$$;
  this.$_range$ = this.$_maxValue$ - this.$_minValue$
};
D.$DvtObj$$.$createSubclass$(D.$DvtContinuousAttrGroups$$, D.$DvtAttrGroups$$, "DvtContinuousAttrGroups");
D.$DvtContinuousAttrGroups$$.prototype.get = function $$DvtContinuousAttrGroups$$$$get$($index$$238_ratio$$17_value$$186$$) {
  if((0,window.isNaN)($index$$238_ratio$$17_value$$186$$) || $index$$238_ratio$$17_value$$186$$ === D.$JSCompiler_alias_NULL$$) {
    return D.$JSCompiler_alias_NULL$$
  }
  $index$$238_ratio$$17_value$$186$$ = 0 < this.$_range$ ? ($index$$238_ratio$$17_value$$186$$ - this.$_minValue$) / this.$_range$ : 0.5;
  $index$$238_ratio$$17_value$$186$$ = window.Math.max(window.Math.min($index$$238_ratio$$17_value$$186$$, 1), 0);
  $index$$238_ratio$$17_value$$186$$ *= this.$_ramp$.length - 1;
  return $index$$238_ratio$$17_value$$186$$ === window.Math.round($index$$238_ratio$$17_value$$186$$) ? this.$_ramp$[$index$$238_ratio$$17_value$$186$$] : D.$DvtColorUtils$$.$interpolateColor$(this.$_ramp$[window.Math.floor($index$$238_ratio$$17_value$$186$$)], this.$_ramp$[window.Math.ceil($index$$238_ratio$$17_value$$186$$)], $index$$238_ratio$$17_value$$186$$ - window.Math.floor($index$$238_ratio$$17_value$$186$$))
};
D.$DvtContinuousAttrGroups$$.prototype.$getMinLabel$ = (0,D.$JSCompiler_get$$)("$_minLabel$");
D.$DvtLegendAttrGroupsRenderer$$ = (0,D.$JSCompiler_emptyFn$$)();
D.$DvtObj$$.$createSubclass$(D.$DvtLegendAttrGroupsRenderer$$, D.$DvtObj$$, "DvtLegendAttrGroupsRenderer");
D.$DvtLegendAttrGroupsRenderer$$.$_LEGEND_MAX_HEIGHT$ = 0.4;
D.$DvtLegendAttrGroupsRenderer$$.$_CONTINUOUS_GROUP_GAP$ = 1;
D.$DvtLegendAttrGroupsRenderer$$.$_CONTINUOUS_ITEM_WIDTH$ = 50;
D.$DvtLegendAttrGroupsRenderer$$.$_CONTINUOUS_ITEM_HEIGHT$ = 10;
D.$DvtLegendAttrGroupsRenderer$$.$_CONTINUOUS_ITEM_GAP$ = 5;
D.$DvtLegendAttrGroupsRenderer$$.$_LABEL_SIZE$ = 11;
D.$DvtLegendAttrGroupsRenderer$$.$_LABEL_COLOR$ = "#636363";
D.$DvtLegendAttrGroupsRenderer$$.$_LABEL_VALUE_COLOR$ = "#333333";
D.$DvtLegendAttrGroupsRenderer$$.$renderAttrGroups$ = function $$DvtLegendAttrGroupsRenderer$$$$renderAttrGroups$$($context$$570$$, $eventManager$$39$$, $container$$170$$, $availWidth$$12$$, $availHeight$$9$$, $attrGroups$$3$$, $styles$$13$$) {
  var $colorContainer$$ = D.$JSCompiler_alias_NULL$$;
  $attrGroups$$3$$ && ($attrGroups$$3$$ instanceof D.$DvtContinuousAttrGroups$$ ? $colorContainer$$ = D.$DvtLegendAttrGroupsRenderer$$.$_renderAttrGroupsContinuous$($context$$570$$, $eventManager$$39$$, $container$$170$$, $availWidth$$12$$, $attrGroups$$3$$, $styles$$13$$) : $attrGroups$$3$$ instanceof D.$DvtDiscreteAttrGroups$$ && ($colorContainer$$ = D.$DvtLegendAttrGroupsRenderer$$.$_renderAttrGroupsDiscrete$($context$$570$$, $container$$170$$, $availWidth$$12$$, $availHeight$$9$$, $attrGroups$$3$$, 
  $styles$$13$$)));
  return $colorContainer$$
};
D.$DvtLegendAttrGroupsRenderer$$.$_renderAttrGroupsContinuous$ = function $$DvtLegendAttrGroupsRenderer$$$$_renderAttrGroupsContinuous$$($context$$571_maxLabel$$3$$, $eventManager$$40$$, $container$$171_minLabelStr$$, $availWidth$$13$$, $attrGroups$$4_maxLabelStr$$, $maxLabelWidth$$5_minLabelWidth_styles$$14$$) {
  var $isRTL$$40$$ = (0,D.$DvtAgent$isRightToLeft$$)($context$$571_maxLabel$$3$$), $labelY$$3$$ = D.$DvtLegendAttrGroupsRenderer$$.$_CONTINUOUS_ITEM_HEIGHT$ / 2 + D.$DvtLegendAttrGroupsRenderer$$.$_CONTINUOUS_GROUP_GAP$, $colorContainer$$1$$ = new D.$DvtContainer$$($context$$571_maxLabel$$3$$);
  $container$$171_minLabelStr$$.$addChild$($colorContainer$$1$$);
  $container$$171_minLabelStr$$ = $attrGroups$$4_maxLabelStr$$.$getMinLabel$();
  var $minLabel$$2$$ = new D.$DvtOutputText$$($context$$571_maxLabel$$3$$, $container$$171_minLabelStr$$, 0, $labelY$$3$$);
  $minLabel$$2$$.$setCSSStyle$($maxLabelWidth$$5_minLabelWidth_styles$$14$$.$labelStyle$);
  $minLabel$$2$$.$alignMiddle$();
  $colorContainer$$1$$.$addChild$($minLabel$$2$$);
  var $gradientRect$$ = new D.$DvtRect$$($context$$571_maxLabel$$3$$, 0, D.$DvtLegendAttrGroupsRenderer$$.$_CONTINUOUS_GROUP_GAP$, D.$DvtLegendAttrGroupsRenderer$$.$_CONTINUOUS_ITEM_WIDTH$, D.$DvtLegendAttrGroupsRenderer$$.$_CONTINUOUS_ITEM_HEIGHT$), $gradientWidth_ramp$$1$$ = $isRTL$$40$$ ? $attrGroups$$4_maxLabelStr$$.$_ramp$.slice(0).slice().reverse() : $attrGroups$$4_maxLabelStr$$.$_ramp$.slice(0);
  $gradientRect$$.$setFill$(new D.$DvtLinearGradientFill$$(0, $gradientWidth_ramp$$1$$));
  $maxLabelWidth$$5_minLabelWidth_styles$$14$$.borderColor && $gradientRect$$.$setSolidStroke$($maxLabelWidth$$5_minLabelWidth_styles$$14$$.borderColor);
  $colorContainer$$1$$.$addChild$($gradientRect$$);
  $gradientWidth_ramp$$1$$ = D.$DvtLegendAttrGroupsRenderer$$.$_CONTINUOUS_ITEM_WIDTH$ + D.$DvtLegendAttrGroupsRenderer$$.$_CONTINUOUS_ITEM_GAP$;
  $attrGroups$$4_maxLabelStr$$ = $attrGroups$$4_maxLabelStr$$.$_maxLabel$;
  $context$$571_maxLabel$$3$$ = new D.$DvtOutputText$$($context$$571_maxLabel$$3$$, $attrGroups$$4_maxLabelStr$$, 0, $labelY$$3$$);
  $context$$571_maxLabel$$3$$.$setCSSStyle$($maxLabelWidth$$5_minLabelWidth_styles$$14$$.$labelStyle$);
  $context$$571_maxLabel$$3$$.$alignMiddle$();
  $colorContainer$$1$$.$addChild$($context$$571_maxLabel$$3$$);
  $isRTL$$40$$ ? ($maxLabelWidth$$5_minLabelWidth_styles$$14$$ = $context$$571_maxLabel$$3$$.$measureDimensions$().$w$ + D.$DvtLegendAttrGroupsRenderer$$.$_CONTINUOUS_ITEM_GAP$, $gradientRect$$.$setTranslateX$($maxLabelWidth$$5_minLabelWidth_styles$$14$$), $minLabel$$2$$.$setX$($maxLabelWidth$$5_minLabelWidth_styles$$14$$ + $gradientWidth_ramp$$1$$)) : ($maxLabelWidth$$5_minLabelWidth_styles$$14$$ = $minLabel$$2$$.$measureDimensions$().$w$ + D.$DvtLegendAttrGroupsRenderer$$.$_CONTINUOUS_ITEM_GAP$, 
  $gradientRect$$.$setTranslateX$($maxLabelWidth$$5_minLabelWidth_styles$$14$$), $context$$571_maxLabel$$3$$.$setX$($maxLabelWidth$$5_minLabelWidth_styles$$14$$ + $gradientWidth_ramp$$1$$));
  $eventManager$$40$$.$associate$($gradientRect$$, new D.$DvtSimpleObjPeer$$($container$$171_minLabelStr$$ + " - " + $attrGroups$$4_maxLabelStr$$));
  $colorContainer$$1$$.$getDimensions$().$w$ > $availWidth$$13$$ && ($colorContainer$$1$$.removeChild($minLabel$$2$$), $colorContainer$$1$$.removeChild($context$$571_maxLabel$$3$$), $gradientRect$$.$setTranslateX$(0));
  return $colorContainer$$1$$
};
D.$DvtLegendAttrGroupsRenderer$$.$_renderAttrGroupsDiscrete$ = function $$DvtLegendAttrGroupsRenderer$$$$_renderAttrGroupsDiscrete$$($context$$572_rect$$45$$, $component$$27_container$$172_items$$33$$, $actualDims_availWidth$$14$$, $availHeight$$11_preferredDims$$, $attrGroups$$5_mappings$$, $legendOptions$$8_styles$$15$$) {
  var $ret$$93$$ = new D.$DvtContainer$$($context$$572_rect$$45$$);
  $component$$27_container$$172_items$$33$$.$addChild$($ret$$93$$);
  $component$$27_container$$172_items$$33$$ = [];
  $attrGroups$$5_mappings$$ = $attrGroups$$5_mappings$$.$_results$.slice(0);
  for(var $i$$773$$ = 0;$i$$773$$ < $attrGroups$$5_mappings$$.length;$i$$773$$++) {
    var $mapping$$3$$ = $attrGroups$$5_mappings$$[$i$$773$$];
    $component$$27_container$$172_items$$33$$.push({text:$mapping$$3$$.$groupLabel$, color:$mapping$$3$$.$params$.color, pattern:$mapping$$3$$.$params$.pattern, borderColor:$legendOptions$$8_styles$$15$$.borderColor})
  }
  $legendOptions$$8_styles$$15$$ = {sections:[{items:$component$$27_container$$172_items$$33$$}], orientation:"horizontal", layout:{outerGapWidth:0, outerGapHeight:0}, textStyle:$legendOptions$$8_styles$$15$$.$labelStyle$.toString()};
  $component$$27_container$$172_items$$33$$ = (0,D.$DvtLegend$newInstance$$)($context$$572_rect$$45$$);
  $component$$27_container$$172_items$$33$$.setId(D.$JSCompiler_alias_NULL$$);
  $ret$$93$$.$addChild$($component$$27_container$$172_items$$33$$);
  $availHeight$$11_preferredDims$$ = $component$$27_container$$172_items$$33$$.$getPreferredSize$($legendOptions$$8_styles$$15$$, $actualDims_availWidth$$14$$, $availHeight$$11_preferredDims$$ * D.$DvtLegendAttrGroupsRenderer$$.$_LEGEND_MAX_HEIGHT$);
  $component$$27_container$$172_items$$33$$.$render$($legendOptions$$8_styles$$15$$, $actualDims_availWidth$$14$$, $availHeight$$11_preferredDims$$.$h$);
  $actualDims_availWidth$$14$$ = $component$$27_container$$172_items$$33$$.$getContentDimensions$();
  $context$$572_rect$$45$$ = new D.$DvtRect$$($context$$572_rect$$45$$, 0, 0, $actualDims_availWidth$$14$$.$w$, $availHeight$$11_preferredDims$$.$h$);
  (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)($context$$572_rect$$45$$);
  $ret$$93$$.$addChildAt$($context$$572_rect$$45$$, 0);
  return $ret$$93$$
};
D.$DvtBreadcrumbsDrillEvent$$ = function $$DvtBreadcrumbsDrillEvent$$$($id$$268$$) {
  this.Init("breadcrumbsDrill");
  this.$_id$ = $id$$268$$
};
D.$DvtObj$$.$createSubclass$(D.$DvtBreadcrumbsDrillEvent$$, D.$DvtBaseComponentEvent$$, "DvtBreadcrumbsDrillEvent");
D.$DvtBreadcrumbsDrillEvent$$.prototype.getId = (0,D.$JSCompiler_get$$)("$_id$");
D.$DvtBreadcrumbs$$ = function $$DvtBreadcrumbs$$$($context$$573$$, $callback$$136$$, $callbackObj$$90$$, $options$$245$$) {
  this.Init($context$$573$$, $callback$$136$$, $callbackObj$$90$$, $options$$245$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtBreadcrumbs$$, D.$DvtContainer$$, "DvtBreadcrumbs");
D.$JSCompiler_prototypeAlias$$ = D.$DvtBreadcrumbs$$.prototype;
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($context$$574$$, $callback$$137$$, $callbackObj$$91$$, $options$$246$$) {
  D.$DvtBreadcrumbs$$.$superclass$.Init.call(this, $context$$574$$);
  this.$_options$ = D.$DvtBreadcrumbsDefaults$$.$calcOptions$($options$$246$$);
  this.$_eventHandler$ = new D.$DvtBreadcrumbsEventManager$$(this, $context$$574$$, $callback$$137$$, $callbackObj$$91$$);
  this.$_eventHandler$.$addListeners$(this);
  this.setId("breadcrumbs1000" + window.Math.floor(1E9 * window.Math.random()));
  this.$_curCrumbIdx$ = -1;
  this.$_crumbs$ = this.$_keyboardFocusRect$ = D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.$render$ = function $$JSCompiler_prototypeAlias$$$$render$$($data$$93$$, $width$$152$$) {
  this.$_data$ = $data$$93$$ ? D.$DvtJSONUtils$$.$clone$($data$$93$$) : this.$_data$;
  this.$removeChildren$();
  this.$_crumbs$ = D.$JSCompiler_alias_NULL$$;
  D.$DvtBreadcrumbsRenderer$$.$render$(this, this, $width$$152$$)
};
D.$JSCompiler_prototypeAlias$$.$getEventManager$ = (0,D.$JSCompiler_get$$)("$_eventHandler$");
D.$JSCompiler_prototypeAlias$$.$hideKeyboardFocusEffect$ = function $$JSCompiler_prototypeAlias$$$$hideKeyboardFocusEffect$$() {
  var $prevCrumbIdx$$ = this.$_curCrumbIdx$;
  this.$_curCrumbIdx$ = -1;
  this.$_updateKeyboardFocusEffect$($prevCrumbIdx$$, this.$_curCrumbIdx$)
};
D.$JSCompiler_prototypeAlias$$.$_updateKeyboardFocusEffect$ = function $$JSCompiler_prototypeAlias$$$$_updateKeyboardFocusEffect$$($prevIdx$$, $nextIdx$$1$$) {
  var $prevKeyboardFocusRect$$ = this.$_keyboardFocusRect$, $context$$575_nextKeyboardFocusRect$$ = D.$JSCompiler_alias_NULL$$, $matrix$$20_nextCrumbObj$$ = (0,D.$JSCompiler_StaticMethods_getCrumb$$)(this, $nextIdx$$1$$);
  if($matrix$$20_nextCrumbObj$$) {
    var $bounds$$146_peer$$26$$ = (0,D.$JSCompiler_StaticMethods_GetLogicalObject$$)(this.$_eventHandler$, $matrix$$20_nextCrumbObj$$);
    $bounds$$146_peer$$26$$ && $bounds$$146_peer$$26$$.$isDrillable$ && $bounds$$146_peer$$26$$.$isDrillable$() ? ($context$$575_nextKeyboardFocusRect$$ = this.$getCtx$(), $bounds$$146_peer$$26$$ = $matrix$$20_nextCrumbObj$$.$getDimensions$(), $matrix$$20_nextCrumbObj$$ = $matrix$$20_nextCrumbObj$$.$getMatrix$(), this.$_keyboardFocusRect$ = $context$$575_nextKeyboardFocusRect$$ = new D.$DvtKeyboardFocusEffect$$($context$$575_nextKeyboardFocusRect$$, this, $bounds$$146_peer$$26$$, $matrix$$20_nextCrumbObj$$)) : 
    this.$_keyboardFocusRect$ = D.$JSCompiler_alias_NULL$$
  }
  $prevKeyboardFocusRect$$ && $prevKeyboardFocusRect$$.$hide$();
  $context$$575_nextKeyboardFocusRect$$ && $context$$575_nextKeyboardFocusRect$$.show()
};
D.$JSCompiler_StaticMethods_getCrumb$$ = function $$JSCompiler_StaticMethods_getCrumb$$$($JSCompiler_StaticMethods_getCrumb$self$$, $crumbIdx$$) {
  var $crumbs$$ = $JSCompiler_StaticMethods_getCrumb$self$$.$_crumbs$;
  return 0 > $crumbIdx$$ || !$crumbs$$ || $crumbIdx$$ >= $crumbs$$.length ? D.$JSCompiler_alias_NULL$$ : $crumbs$$[$crumbIdx$$]
};
D.$JSCompiler_StaticMethods_getCrumbIndex$$ = function $$JSCompiler_StaticMethods_getCrumbIndex$$$($JSCompiler_StaticMethods_getCrumbIndex$self$$, $crumb$$) {
  for(var $crumbs$$1$$ = $JSCompiler_StaticMethods_getCrumbIndex$self$$.$_crumbs$, $i$$774$$ = 0;$i$$774$$ < $crumbs$$1$$.length;$i$$774$$++) {
    if($crumbs$$1$$[$i$$774$$] == $crumb$$) {
      return $i$$774$$
    }
  }
};
D.$DvtBreadcrumbsDefaults$$ = {};
D.$DvtObj$$.$createSubclass$(D.$DvtBreadcrumbsDefaults$$, D.$DvtObj$$, "DvtBreadcrumbsDefaults");
D.$DvtBreadcrumbsDefaults$$.$VERSION_1$ = {labelStyle:"font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 11px; color: #003286;", disabledLabelStyle:"font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 11px;", $__labelGap$:2, $__labelSeparator$:"\x3e"};
D.$DvtBreadcrumbsDefaults$$.$calcOptions$ = function $$DvtBreadcrumbsDefaults$$$$calcOptions$$($userOptions$$3$$) {
  var $defaults$$7$$ = D.$DvtBreadcrumbsDefaults$$.$_getDefaults$($userOptions$$3$$);
  return $userOptions$$3$$ ? D.$DvtJSONUtils$$.$merge$($userOptions$$3$$, $defaults$$7$$) : $defaults$$7$$
};
D.$DvtBreadcrumbsDefaults$$.$_getDefaults$ = function $$DvtBreadcrumbsDefaults$$$$_getDefaults$$() {
  return D.$DvtJSONUtils$$.$clone$(D.$DvtBreadcrumbsDefaults$$.$VERSION_1$)
};
D.$DvtBreadcrumbsDefaults$$.$getGapSize$ = function $$DvtBreadcrumbsDefaults$$$$getGapSize$$($options$$248$$, $defaultSize$$2$$) {
  return window.Math.ceil($defaultSize$$2$$ * $options$$248$$.layout.gapRatio)
};
D.$DvtBreadcrumbsEventManager$$ = function $$DvtBreadcrumbsEventManager$$$($breadcrumbs$$, $context$$576$$, $callback$$138$$, $callbackObj$$92$$) {
  this.Init($context$$576$$, $callback$$138$$, $callbackObj$$92$$);
  this.$_breadcrumbs$ = $breadcrumbs$$
};
D.$DvtObj$$.$createSubclass$(D.$DvtBreadcrumbsEventManager$$, D.$DvtEventManager$$, "DvtBreadcrumbsEventManager");
D.$DvtBreadcrumbsEventManager$$.prototype.$OnClick$ = function $$DvtBreadcrumbsEventManager$$$$$OnClick$$($event$$717$$) {
  D.$DvtBreadcrumbsEventManager$$.$superclass$.$OnClick$.call(this, $event$$717$$);
  (0,D.$JSCompiler_StaticMethods__processBreadcrumbs$$)(this, (0,D.$JSCompiler_StaticMethods_GetLogicalObject$$)(this, $event$$717$$.target))
};
D.$DvtBreadcrumbsEventManager$$.prototype.$HandleTouchClickInternal$ = function $$DvtBreadcrumbsEventManager$$$$$HandleTouchClickInternal$$($event$$718$$) {
  (0,D.$JSCompiler_StaticMethods__processBreadcrumbs$$)(this, (0,D.$JSCompiler_StaticMethods_GetLogicalObject$$)(this, $event$$718$$.target))
};
D.$JSCompiler_StaticMethods__processBreadcrumbs$$ = function $$JSCompiler_StaticMethods__processBreadcrumbs$$$($JSCompiler_StaticMethods__processBreadcrumbs$self$$, $obj$$335$$) {
  if($obj$$335$$ && $obj$$335$$ instanceof D.$DvtBreadcrumbsPeer$$ && $obj$$335$$.$isDrillable$()) {
    var $event$$719$$ = new D.$DvtBreadcrumbsDrillEvent$$($obj$$335$$.getId());
    $JSCompiler_StaticMethods__processBreadcrumbs$self$$.$FireEvent$($event$$719$$, $JSCompiler_StaticMethods__processBreadcrumbs$self$$.$_breadcrumbs$)
  }
};
D.$DvtBreadcrumbsEventManager$$.prototype.$handleKeyboardEvent$ = function $$DvtBreadcrumbsEventManager$$$$$handleKeyboardEvent$$($event$$720$$) {
  var $eventConsumed$$4$$ = D.$JSCompiler_alias_TRUE$$, $JSCompiler_StaticMethods_updateCrumbFocus$self$$inline_7997_curCrumbIdx_keyCode$$45$$ = $event$$720$$.keyCode;
  if(9 == $JSCompiler_StaticMethods_updateCrumbFocus$self$$inline_7997_curCrumbIdx_keyCode$$45$$) {
    var $JSCompiler_StaticMethods_updateCrumbFocus$self$$inline_7997_curCrumbIdx_keyCode$$45$$ = this.$_breadcrumbs$, $prevCrumbIdx$$inline_7999$$ = $JSCompiler_StaticMethods_updateCrumbFocus$self$$inline_7997_curCrumbIdx_keyCode$$45$$.$_curCrumbIdx$, $JSCompiler_inline_result$$9334_prevIndex$$inline_11236$$;
    $JSCompiler_inline_result$$9334_prevIndex$$inline_11236$$ = $prevCrumbIdx$$inline_7999$$;
    var $bForward$$inline_11237$$ = !$event$$720$$.shiftKey;
    $JSCompiler_inline_result$$9334_prevIndex$$inline_11236$$ = -1 == $JSCompiler_inline_result$$9334_prevIndex$$inline_11236$$ ? $bForward$$inline_11237$$ ? 0 : $JSCompiler_StaticMethods_updateCrumbFocus$self$$inline_7997_curCrumbIdx_keyCode$$45$$.$_data$.$items$.length - 2 : $bForward$$inline_11237$$ ? $JSCompiler_inline_result$$9334_prevIndex$$inline_11236$$ == $JSCompiler_StaticMethods_updateCrumbFocus$self$$inline_7997_curCrumbIdx_keyCode$$45$$.$_data$.$items$.length - 2 ? -1 : ++$JSCompiler_inline_result$$9334_prevIndex$$inline_11236$$ : 
    0 == $JSCompiler_inline_result$$9334_prevIndex$$inline_11236$$ ? -1 : --$JSCompiler_inline_result$$9334_prevIndex$$inline_11236$$;
    $JSCompiler_StaticMethods_updateCrumbFocus$self$$inline_7997_curCrumbIdx_keyCode$$45$$.$_curCrumbIdx$ = $JSCompiler_inline_result$$9334_prevIndex$$inline_11236$$;
    $JSCompiler_StaticMethods_updateCrumbFocus$self$$inline_7997_curCrumbIdx_keyCode$$45$$.$_updateKeyboardFocusEffect$($prevCrumbIdx$$inline_7999$$, $JSCompiler_StaticMethods_updateCrumbFocus$self$$inline_7997_curCrumbIdx_keyCode$$45$$.$_curCrumbIdx$);
    $JSCompiler_StaticMethods_updateCrumbFocus$self$$inline_7997_curCrumbIdx_keyCode$$45$$ = $JSCompiler_StaticMethods_updateCrumbFocus$self$$inline_7997_curCrumbIdx_keyCode$$45$$.$_curCrumbIdx$;
    -1 == $JSCompiler_StaticMethods_updateCrumbFocus$self$$inline_7997_curCrumbIdx_keyCode$$45$$ ? $eventConsumed$$4$$ = D.$JSCompiler_alias_FALSE$$ : this.$UpdateActiveElement$((0,D.$JSCompiler_StaticMethods_getCrumb$$)(this.$_breadcrumbs$, $JSCompiler_StaticMethods_updateCrumbFocus$self$$inline_7997_curCrumbIdx_keyCode$$45$$))
  }else {
    13 == $JSCompiler_StaticMethods_updateCrumbFocus$self$$inline_7997_curCrumbIdx_keyCode$$45$$ && (0,D.$JSCompiler_StaticMethods__processBreadcrumbs$$)(this, (0,D.$JSCompiler_StaticMethods_GetLogicalObject$$)(this, (0,D.$JSCompiler_StaticMethods_getCrumb$$)(this.$_breadcrumbs$, this.$_breadcrumbs$.$_curCrumbIdx$)))
  }
  $eventConsumed$$4$$ && (0,D.$DvtEventManager$consumeEvent$$)($event$$720$$);
  return $eventConsumed$$4$$
};
D.$DvtBreadcrumbsPeer$$ = function $$DvtBreadcrumbsPeer$$$($id$$269$$, $displayable$$79$$) {
  this.Init();
  this.$_id$ = $id$$269$$;
  this.$_bDrillable$ = D.$JSCompiler_alias_FALSE$$;
  this.$_displayable$ = $displayable$$79$$
};
D.$DvtObj$$.$createSubclass$(D.$DvtBreadcrumbsPeer$$, D.$DvtSimpleObjPeer$$, "DvtBreadcrumbsPeer");
D.$DvtBreadcrumbsPeer$$.prototype.getId = (0,D.$JSCompiler_get$$)("$_id$");
D.$DvtBreadcrumbsPeer$$.prototype.$isDrillable$ = (0,D.$JSCompiler_get$$)("$_bDrillable$");
D.$DvtBreadcrumbsPeer$$.prototype.$setDrillable$ = (0,D.$JSCompiler_set$$)("$_bDrillable$");
D.$DvtBreadcrumbsPeer$$.prototype.$getDisplayable$ = (0,D.$JSCompiler_get$$)("$_displayable$");
D.$DvtBreadcrumbsRenderer$$ = {};
D.$DvtObj$$.$createSubclass$(D.$DvtBreadcrumbsRenderer$$, D.$DvtObj$$, "DvtBreadcrumbsRenderer");
D.$DvtBreadcrumbsRenderer$$.$_TOUCH_BUFFER$ = 3;
D.$DvtBreadcrumbsRenderer$$.$render$ = function $$DvtBreadcrumbsRenderer$$$$render$$($breadcrumbs$$1$$, $container$$173$$, $width$$153$$) {
  for(var $context$$577$$ = $breadcrumbs$$1$$.$getCtx$(), $dataItems$$1$$ = ($breadcrumbs$$1$$.$_data$ ? $breadcrumbs$$1$$.$_data$ : {}).$items$ ? ($breadcrumbs$$1$$.$_data$ ? $breadcrumbs$$1$$.$_data$ : {}).$items$ : [], $options$$249$$ = $breadcrumbs$$1$$.$_options$, $eventManager$$42$$ = $breadcrumbs$$1$$.$getEventManager$(), $labels$$25$$ = [], $peers$$9$$ = [], $i$$775$$ = 0;$i$$775$$ < $dataItems$$1$$.length;$i$$775$$++) {
    var $dataItem$$40_peer$$27$$ = $dataItems$$1$$[$i$$775$$];
    if($dataItem$$40_peer$$27$$) {
      var $label$$75$$ = D.$DvtBreadcrumbsRenderer$$.$_createLabel$($context$$577$$, $dataItem$$40_peer$$27$$.label ? $dataItem$$40_peer$$27$$.label : "", $options$$249$$, $i$$775$$ < $dataItems$$1$$.length - 1);
      $labels$$25$$.push($label$$75$$);
      $dataItem$$40_peer$$27$$ = new D.$DvtBreadcrumbsPeer$$($dataItem$$40_peer$$27$$.id, $label$$75$$);
      $eventManager$$42$$.$associate$($label$$75$$, $dataItem$$40_peer$$27$$);
      $peers$$9$$.push($dataItem$$40_peer$$27$$);
      $i$$775$$ < $dataItems$$1$$.length - 1 && $dataItem$$40_peer$$27$$.$setDrillable$(D.$JSCompiler_alias_TRUE$$)
    }
  }
  $breadcrumbs$$1$$.$_crumbs$ = $labels$$25$$;
  (0,D.$DvtAgent$isRightToLeft$$)($context$$577$$) ? D.$DvtBreadcrumbsRenderer$$.$_positionLabelsBidi$($breadcrumbs$$1$$, $container$$173$$, $width$$153$$, $labels$$25$$, $peers$$9$$) : D.$DvtBreadcrumbsRenderer$$.$_positionLabels$($breadcrumbs$$1$$, $container$$173$$, $width$$153$$, $labels$$25$$, $peers$$9$$)
};
D.$DvtBreadcrumbsRenderer$$.$_createButtonState$ = function $$DvtBreadcrumbsRenderer$$$$_createButtonState$$($context$$578_state$$95$$, $dvtText_text$$108$$, $cssStyle$$37$$) {
  $dvtText_text$$108$$ = new D.$DvtOutputText$$($context$$578_state$$95$$, $dvtText_text$$108$$, 0, 0);
  $dvtText_text$$108$$.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$);
  $dvtText_text$$108$$.$setCSSStyle$($cssStyle$$37$$);
  var $padTop$$1$$ = (0,D.$JSCompiler_StaticMethods_getPadding$$)($cssStyle$$37$$, "padding-top"), $padRight$$1$$ = (0,D.$JSCompiler_StaticMethods_getPadding$$)($cssStyle$$37$$, "padding-right"), $padBottom$$1$$ = (0,D.$JSCompiler_StaticMethods_getPadding$$)($cssStyle$$37$$, "padding-bottom"), $padLeft$$1$$ = (0,D.$JSCompiler_StaticMethods_getPadding$$)($cssStyle$$37$$, "padding-left"), $labelDims$$12$$ = (0,D.$DvtDisplayableUtils$getDimensionsForced$$)($context$$578_state$$95$$, $dvtText_text$$108$$);
  $context$$578_state$$95$$ = new D.$DvtRect$$($context$$578_state$$95$$, 0, 0, $labelDims$$12$$.$w$ + $padLeft$$1$$ + $padRight$$1$$, $labelDims$$12$$.$h$ + $padTop$$1$$ + $padBottom$$1$$);
  (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)($context$$578_state$$95$$);
  $context$$578_state$$95$$.$setCSSStyle$($cssStyle$$37$$);
  (0,D.$JSCompiler_StaticMethods_setTranslate$$)($dvtText_text$$108$$, $padLeft$$1$$, $padTop$$1$$);
  $context$$578_state$$95$$.$addChild$($dvtText_text$$108$$);
  return $context$$578_state$$95$$
};
D.$DvtBreadcrumbsRenderer$$.$_createLabel$ = function $$DvtBreadcrumbsRenderer$$$$_createLabel$$($context$$579_label$$76$$, $textStr$$15$$, $dwn$$16_dwnCss_options$$250$$, $bEnabled$$7_cssStyle$$38_ovr$$16_ovrCss$$) {
  if($bEnabled$$7_cssStyle$$38_ovr$$16_ovrCss$$ && ($dwn$$16_dwnCss_options$$250$$.$labelStyleOver$ || $dwn$$16_dwnCss_options$$250$$.$labelStyleDown$)) {
    var $ena$$20_enaCss$$ = new D.$DvtCSSStyle$$($dwn$$16_dwnCss_options$$250$$.$labelStyle$);
    $bEnabled$$7_cssStyle$$38_ovr$$16_ovrCss$$ = new D.$DvtCSSStyle$$($dwn$$16_dwnCss_options$$250$$.$labelStyleOver$);
    $dwn$$16_dwnCss_options$$250$$ = new D.$DvtCSSStyle$$($dwn$$16_dwnCss_options$$250$$.$labelStyleDown$);
    $ena$$20_enaCss$$ = D.$DvtBreadcrumbsRenderer$$.$_createButtonState$($context$$579_label$$76$$, $textStr$$15$$, $ena$$20_enaCss$$);
    $bEnabled$$7_cssStyle$$38_ovr$$16_ovrCss$$ = D.$DvtBreadcrumbsRenderer$$.$_createButtonState$($context$$579_label$$76$$, $textStr$$15$$, $bEnabled$$7_cssStyle$$38_ovr$$16_ovrCss$$);
    $dwn$$16_dwnCss_options$$250$$ = D.$DvtBreadcrumbsRenderer$$.$_createButtonState$($context$$579_label$$76$$, $textStr$$15$$, $dwn$$16_dwnCss_options$$250$$);
    $context$$579_label$$76$$ = new D.$DvtButton$$($context$$579_label$$76$$, $ena$$20_enaCss$$, $bEnabled$$7_cssStyle$$38_ovr$$16_ovrCss$$, $dwn$$16_dwnCss_options$$250$$);
    $context$$579_label$$76$$.$setAriaRole$("link");
    $context$$579_label$$76$$.$setAriaProperty$("label", $textStr$$15$$)
  }else {
    $bEnabled$$7_cssStyle$$38_ovr$$16_ovrCss$$ = new D.$DvtCSSStyle$$($bEnabled$$7_cssStyle$$38_ovr$$16_ovrCss$$ ? $dwn$$16_dwnCss_options$$250$$.$labelStyle$ : $dwn$$16_dwnCss_options$$250$$.$disabledLabelStyle$), (0,D.$JSCompiler_StaticMethods_getPadding$$)($bEnabled$$7_cssStyle$$38_ovr$$16_ovrCss$$, "padding-left") || (0,D.$JSCompiler_StaticMethods_getPadding$$)($bEnabled$$7_cssStyle$$38_ovr$$16_ovrCss$$, "padding-right") || (0,D.$JSCompiler_StaticMethods_getPadding$$)($bEnabled$$7_cssStyle$$38_ovr$$16_ovrCss$$, 
    "padding-top") || (0,D.$JSCompiler_StaticMethods_getPadding$$)($bEnabled$$7_cssStyle$$38_ovr$$16_ovrCss$$, "padding-bottom") ? $context$$579_label$$76$$ = D.$DvtBreadcrumbsRenderer$$.$_createButtonState$($context$$579_label$$76$$, $textStr$$15$$, $bEnabled$$7_cssStyle$$38_ovr$$16_ovrCss$$) : ($context$$579_label$$76$$ = new D.$DvtOutputText$$($context$$579_label$$76$$, $textStr$$15$$, 0, 0), $context$$579_label$$76$$.$setCSSStyle$($bEnabled$$7_cssStyle$$38_ovr$$16_ovrCss$$))
  }
  return $context$$579_label$$76$$
};
D.$DvtBreadcrumbsRenderer$$.$_getLabelTextString$ = function $$DvtBreadcrumbsRenderer$$$$_getLabelTextString$$($label$$77_text$$109$$) {
  if($label$$77_text$$109$$ instanceof D.$DvtButton$$) {
    return $label$$77_text$$109$$ = $label$$77_text$$109$$.$upState$.$getChildAt$(0), $label$$77_text$$109$$.$getTextString$()
  }
  $label$$77_text$$109$$ instanceof D.$DvtRect$$ && ($label$$77_text$$109$$ = $label$$77_text$$109$$.$getChildAt$(0));
  return $label$$77_text$$109$$.$getTextString$()
};
D.$DvtBreadcrumbsRenderer$$.$_truncateLabels$ = function $$DvtBreadcrumbsRenderer$$$$_truncateLabels$$($label$$78$$, $maxWidth$$29$$) {
  if($label$$78$$ instanceof D.$DvtButton$$) {
    var $text$$110$$ = $label$$78$$.$upState$.$getChildAt$(0);
    D.$DvtTextUtils$$.$fitText$($text$$110$$, window.Math.max($maxWidth$$29$$ - $text$$110$$.$getTranslateX$(), 0), window.Infinity, $text$$110$$.getParent());
    $text$$110$$ = $label$$78$$.$overState$.$getChildAt$(0);
    D.$DvtTextUtils$$.$fitText$($text$$110$$, window.Math.max($maxWidth$$29$$ - $text$$110$$.$getTranslateX$(), 0), window.Infinity, $text$$110$$.getParent());
    $text$$110$$ = $label$$78$$.$downState$.$getChildAt$(0);
    D.$DvtTextUtils$$.$fitText$($text$$110$$, window.Math.max($maxWidth$$29$$ - $text$$110$$.$getTranslateX$(), 0), window.Infinity, $text$$110$$.getParent())
  }else {
    $label$$78$$ instanceof D.$DvtRect$$ ? ($text$$110$$ = $label$$78$$.$getChildAt$(0), D.$DvtTextUtils$$.$fitText$($text$$110$$, window.Math.max($maxWidth$$29$$ - $text$$110$$.$getTranslateX$(), 0), window.Infinity, $text$$110$$.getParent())) : D.$DvtTextUtils$$.$fitText$($label$$78$$, $maxWidth$$29$$, window.Infinity, $label$$78$$.getParent())
  }
};
D.$DvtBreadcrumbsRenderer$$.$_positionLabels$ = function $$DvtBreadcrumbsRenderer$$$$_positionLabels$$($breadcrumbs$$2_labelString$$7$$, $container$$174$$, $availWidth$$15$$, $labels$$26$$, $peers$$10$$) {
  for(var $options$$251$$ = $breadcrumbs$$2_labelString$$7$$.$_options$, $eventManager$$43$$ = $breadcrumbs$$2_labelString$$7$$.$getEventManager$(), $arDims$$ = [], $maxHeight$$17$$ = 0, $i$$776$$ = 0;$i$$776$$ < $labels$$26$$.length;$i$$776$$++) {
    $container$$174$$.$addChild$($labels$$26$$[$i$$776$$]);
    var $dims$$64_separator$$1$$ = $labels$$26$$[$i$$776$$].$getDimensions$();
    $arDims$$[$i$$776$$] = $dims$$64_separator$$1$$;
    $maxHeight$$17$$ = window.Math.max($dims$$64_separator$$1$$.$h$, $maxHeight$$17$$);
    $container$$174$$.removeChild($labels$$26$$[$i$$776$$])
  }
  for(var $x$$262$$ = 0, $i$$776$$ = 0;$i$$776$$ < $labels$$26$$.length;$i$$776$$++) {
    $container$$174$$.$addChild$($labels$$26$$[$i$$776$$]);
    $dims$$64_separator$$1$$ = $arDims$$[$i$$776$$];
    (0,D.$JSCompiler_StaticMethods_setTranslate$$)($labels$$26$$[$i$$776$$], $x$$262$$, 0.5 * ($maxHeight$$17$$ - $dims$$64_separator$$1$$.$h$));
    if((0,D.$DvtAgent$isTouchDevice$$)()) {
      var $rect$$46_sepDims_separatorWidth$$ = new D.$DvtRect$$($container$$174$$.$getCtx$(), -D.$DvtBreadcrumbsRenderer$$.$_TOUCH_BUFFER$, -D.$DvtBreadcrumbsRenderer$$.$_TOUCH_BUFFER$, $dims$$64_separator$$1$$.$w$ + 2 * D.$DvtBreadcrumbsRenderer$$.$_TOUCH_BUFFER$, $dims$$64_separator$$1$$.$h$ + 2 * D.$DvtBreadcrumbsRenderer$$.$_TOUCH_BUFFER$);
      (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)($rect$$46_sepDims_separatorWidth$$);
      $labels$$26$$[$i$$776$$].$addChild$($rect$$46_sepDims_separatorWidth$$);
      $i$$776$$ < $peers$$10$$.length && $eventManager$$43$$.$associate$($rect$$46_sepDims_separatorWidth$$, $peers$$10$$[$i$$776$$])
    }
    if($x$$262$$ + $dims$$64_separator$$1$$.$w$ > $availWidth$$15$$) {
      $breadcrumbs$$2_labelString$$7$$ = D.$DvtBreadcrumbsRenderer$$.$_getLabelTextString$($labels$$26$$[$i$$776$$]);
      D.$DvtBreadcrumbsRenderer$$.$_truncateLabels$($labels$$26$$[$i$$776$$], $availWidth$$15$$ - $x$$262$$);
      $i$$776$$ < $peers$$10$$.length ? $peers$$10$$[$i$$776$$].$setTooltip$($breadcrumbs$$2_labelString$$7$$) : $eventManager$$43$$.$associate$($labels$$26$$[$i$$776$$], new D.$DvtSimpleObjPeer$$($breadcrumbs$$2_labelString$$7$$));
      break
    }else {
      $x$$262$$ += $dims$$64_separator$$1$$.$w$ + $options$$251$$.$__labelGap$
    }
    if($i$$776$$ < $labels$$26$$.length - 1) {
      $dims$$64_separator$$1$$ = D.$DvtBreadcrumbsRenderer$$.$_newSeparator$($breadcrumbs$$2_labelString$$7$$);
      $container$$174$$.$addChild$($dims$$64_separator$$1$$);
      $rect$$46_sepDims_separatorWidth$$ = $dims$$64_separator$$1$$.$getDimensions$();
      (0,D.$JSCompiler_StaticMethods_setTranslate$$)($dims$$64_separator$$1$$, $x$$262$$, 0.5 * ($maxHeight$$17$$ - $rect$$46_sepDims_separatorWidth$$.$h$));
      $rect$$46_sepDims_separatorWidth$$ = $rect$$46_sepDims_separatorWidth$$.$w$;
      if($x$$262$$ + $rect$$46_sepDims_separatorWidth$$ > $availWidth$$15$$) {
        $container$$174$$.removeChild($dims$$64_separator$$1$$);
        break
      }
      $x$$262$$ += $rect$$46_sepDims_separatorWidth$$ + $options$$251$$.$__labelGap$
    }
  }
};
D.$DvtBreadcrumbsRenderer$$.$_positionLabelsBidi$ = function $$DvtBreadcrumbsRenderer$$$$_positionLabelsBidi$$($breadcrumbs$$3_labelString$$8$$, $container$$175$$, $availWidth$$16_x$$263$$, $labels$$27$$, $peers$$11$$) {
  for(var $options$$252$$ = $breadcrumbs$$3_labelString$$8$$.$_options$, $eventManager$$44$$ = $breadcrumbs$$3_labelString$$8$$.$getEventManager$(), $i$$777$$ = 0;$i$$777$$ < $labels$$27$$.length;$i$$777$$++) {
    $container$$175$$.$addChild$($labels$$27$$[$i$$777$$]);
    var $dims$$65_separator$$2$$ = $labels$$27$$[$i$$777$$].$getDimensions$();
    if((0,D.$DvtAgent$isTouchDevice$$)()) {
      var $rect$$47_separatorWidth$$1$$ = new D.$DvtRect$$($container$$175$$.$getCtx$(), -D.$DvtBreadcrumbsRenderer$$.$_TOUCH_BUFFER$, -D.$DvtBreadcrumbsRenderer$$.$_TOUCH_BUFFER$, $dims$$65_separator$$2$$.$w$ + 2 * D.$DvtBreadcrumbsRenderer$$.$_TOUCH_BUFFER$, $dims$$65_separator$$2$$.$h$ + 2 * D.$DvtBreadcrumbsRenderer$$.$_TOUCH_BUFFER$);
      (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)($rect$$47_separatorWidth$$1$$);
      $labels$$27$$[$i$$777$$].$addChild$($rect$$47_separatorWidth$$1$$);
      $i$$777$$ < $peers$$11$$.length && $eventManager$$44$$.$associate$($rect$$47_separatorWidth$$1$$, $peers$$11$$[$i$$777$$])
    }
    if(0 > $availWidth$$16_x$$263$$ - $dims$$65_separator$$2$$.$w$) {
      $breadcrumbs$$3_labelString$$8$$ = D.$DvtBreadcrumbsRenderer$$.$_getLabelTextString$($labels$$27$$[$i$$777$$]);
      D.$DvtBreadcrumbsRenderer$$.$_truncateLabels$($labels$$27$$[$i$$777$$], $availWidth$$16_x$$263$$);
      $labels$$27$$[$i$$777$$].$setTranslateX$(0);
      $i$$777$$ < $peers$$11$$.length ? $peers$$11$$[$i$$777$$].$setTooltip$($breadcrumbs$$3_labelString$$8$$) : $eventManager$$44$$.$associate$($labels$$27$$[$i$$777$$], new D.$DvtSimpleObjPeer$$($breadcrumbs$$3_labelString$$8$$));
      break
    }else {
      $labels$$27$$[$i$$777$$].$setTranslateX$($availWidth$$16_x$$263$$ - $dims$$65_separator$$2$$.$w$), $availWidth$$16_x$$263$$ -= $dims$$65_separator$$2$$.$w$ + $options$$252$$.$__labelGap$
    }
    if($i$$777$$ < $labels$$27$$.length - 1) {
      if($dims$$65_separator$$2$$ = D.$DvtBreadcrumbsRenderer$$.$_newSeparator$($breadcrumbs$$3_labelString$$8$$), $container$$175$$.$addChild$($dims$$65_separator$$2$$), $rect$$47_separatorWidth$$1$$ = $dims$$65_separator$$2$$.$getDimensions$().$w$, 0 > $availWidth$$16_x$$263$$ - $rect$$47_separatorWidth$$1$$) {
        $container$$175$$.removeChild($dims$$65_separator$$2$$);
        break
      }else {
        $dims$$65_separator$$2$$.$setTranslateX$($availWidth$$16_x$$263$$ - $rect$$47_separatorWidth$$1$$), $availWidth$$16_x$$263$$ -= $rect$$47_separatorWidth$$1$$ + $options$$252$$.$__labelGap$
      }
    }
  }
};
D.$DvtBreadcrumbsRenderer$$.$_newSeparator$ = function $$DvtBreadcrumbsRenderer$$$$_newSeparator$$($breadcrumbs$$4_label$$79$$) {
  var $options$$253$$ = $breadcrumbs$$4_label$$79$$.$_options$;
  $breadcrumbs$$4_label$$79$$ = new D.$DvtOutputText$$($breadcrumbs$$4_label$$79$$.$getCtx$(), $options$$253$$.$__labelSeparator$, 0, 0);
  $breadcrumbs$$4_label$$79$$.$setCSSStyle$(new D.$DvtCSSStyle$$($options$$253$$.$labelStyle$));
  return $breadcrumbs$$4_label$$79$$
};
D.$DvtPanelDrawerEvent$$ = function $$DvtPanelDrawerEvent$$$($subtype$$13$$, $activePanel$$) {
  this.Init("dvtPanelDrawerEvent");
  this.$_subtype$ = $subtype$$13$$;
  this.$_activePanel$ = $activePanel$$
};
D.$DvtObj$$.$createSubclass$(D.$DvtPanelDrawerEvent$$, D.$DvtBaseComponentEvent$$, "DvtPanelDrawerEvent");
D.$DvtPanelDrawerEvent$$.prototype.$getSubType$ = (0,D.$JSCompiler_get$$)("$_subtype$");
D.$DvtPanelDrawer$$ = function $$DvtPanelDrawer$$$($context$$580$$, $callback$$139$$, $callbackObj$$93$$, $sid$$1$$) {
  this.Init($context$$580$$, $callback$$139$$, $callbackObj$$93$$, $sid$$1$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtPanelDrawer$$, D.$DvtContainer$$, "DvtPanelDrawer");
D.$DvtPanelDrawer$$.prototype.Init = function $$DvtPanelDrawer$$$$Init$($context$$581$$, $callback$$140$$, $callbackObj$$94$$, $sid$$2$$) {
  D.$DvtPanelDrawer$$.$superclass$.Init.call(this, $context$$581$$, D.$JSCompiler_alias_NULL$$, "panelDrawer" + $sid$$2$$);
  this.$_sid$ = $sid$$2$$;
  this.$_eventManager$ = new D.$DvtPanelDrawerEventManager$$($context$$581$$, $callback$$140$$, $callbackObj$$94$$);
  this.$_eventManager$.$addListeners$(this);
  this.$_eventManager$.$_rolloverTypes$.push(D.$DvtPanelDrawer$$);
  this.$_eventManager$.$associate$(this, this);
  (0,D.$DvtAgent$isTouchDevice$$)() || (0,D.$JSCompiler_StaticMethods_setKeyboardHandler$$)(this.$_eventManager$, new D.$DvtPanelDrawerKeyboardHandler$$(this.$_eventManager$, this));
  this.$_callback$ = $callback$$140$$;
  this.$_callbackObj$ = $callbackObj$$94$$;
  this.$_panels$ = {};
  this.$_panelOrder$ = [];
  this.$_maxHeight$ = this.$_maxWidth$ = window.Number.MAX_VALUE;
  this.$_minWidth$ = 5;
  this.$_minHeight$ = 0;
  this.$_displayedPanelId$;
  this.$_oldDisplayedPanelId$;
  this.$_bTransition$ = this.$_bDisclosed$ = D.$JSCompiler_alias_FALSE$$;
  this.$_contentPane$;
  this.$_activeContent$;
  this.$_expandedContent$;
  this.$_contentClipPath$;
  this.$_expandedBorder$;
  this.$_expandedBorderResizable$;
  this.$_tabs$ = {};
  this.$_discloseDirection$ = "left";
  this.$_dockSide$ = "top";
  this.$_isFixed$ = D.$JSCompiler_alias_FALSE$$;
  this.$_styleMap$ = D.$JSCompiler_alias_NULL$$;
  $callbackObj$$94$$ && (this.$_styleMap$ = $callbackObj$$94$$.$getSubcomponentStyles$());
  this.$_bgAlpha$ = (0,D.$DvtStyleUtils$getStyle$$)(this.$_styleMap$, "backgroundAlpha", 1);
  this.$_borderColor$ = (0,D.$DvtStyleUtils$getStyle$$)(this.$_styleMap$, "border-color", "#bbc7d0");
  this.$_borderRadius$ = (0,window.parseInt)((0,D.$DvtStyleUtils$getStyle$$)(this.$_styleMap$, "border-radius", 2));
  this.$_bgColor$ = (0,D.$DvtStyleUtils$getStyle$$)(this.$_styleMap$, "background-color", "#ffffff");
  this.$_bgInactiveColor$ = (0,D.$DvtStyleUtils$getStyle$$)(this.$_styleMap$, "tab-color-inactive", "#dee4e7");
  this.$_borderInactiveColor$ = (0,D.$DvtStyleUtils$getStyle$$)(this.$_styleMap$, "tab-border-color-inactive", "#c1cede");
  (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)(this);
  this.$_contentPadding$ = 10
};
D.$JSCompiler_StaticMethods_addPanel$$ = function $$JSCompiler_StaticMethods_addPanel$$$($JSCompiler_StaticMethods_addPanel$self$$, $panel$$4$$, $upState$$19$$, $overState$$16$$, $downState$$16$$, $tooltip$$46$$, $id$$270$$) {
  $JSCompiler_StaticMethods_addPanel$self$$.$_panels$[$id$$270$$] = {panel:$panel$$4$$, iconUp:$upState$$19$$, iconOver:$overState$$16$$, iconDown:$downState$$16$$, tooltip:$tooltip$$46$$};
  $JSCompiler_StaticMethods_addPanel$self$$.$_panelOrder$.push($id$$270$$);
  $JSCompiler_StaticMethods_addPanel$self$$.$_minHeight$ = 15 + 42 * $JSCompiler_StaticMethods_addPanel$self$$.$_panelOrder$.length
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtPanelDrawer$$.prototype;
D.$JSCompiler_prototypeAlias$$.$setMaxWidth$ = (0,D.$JSCompiler_set$$)("$_maxWidth$");
D.$JSCompiler_prototypeAlias$$.$getMaxContentWidth$ = function $$JSCompiler_prototypeAlias$$$$getMaxContentWidth$$() {
  return this.$_maxWidth$ - 2 * this.$_contentPadding$
};
D.$JSCompiler_prototypeAlias$$.$setMaxHeight$ = (0,D.$JSCompiler_set$$)("$_maxHeight$");
D.$JSCompiler_prototypeAlias$$.$getMaxContentHeight$ = function $$JSCompiler_prototypeAlias$$$$getMaxContentHeight$$() {
  return this.$_maxHeight$ - 2 * this.$_contentPadding$
};
D.$JSCompiler_prototypeAlias$$.$GetIcon$ = function $$JSCompiler_prototypeAlias$$$$GetIcon$$($id$$272$$) {
  return this.$_panels$[$id$$272$$].icon
};
D.$JSCompiler_StaticMethods_setDisplayedPanelId$$ = function $$JSCompiler_StaticMethods_setDisplayedPanelId$$$($JSCompiler_StaticMethods_setDisplayedPanelId$self$$, $id$$275$$, $bImmediate$$20$$, $onEnd$$8$$) {
  $JSCompiler_StaticMethods_setDisplayedPanelId$self$$.$_oldDisplayedPanelId$ = $JSCompiler_StaticMethods_setDisplayedPanelId$self$$.$_displayedPanelId$;
  $JSCompiler_StaticMethods_setDisplayedPanelId$self$$.$_displayedPanelId$ = $id$$275$$;
  $JSCompiler_StaticMethods_setDisplayedPanelId$self$$.$isDisclosed$() && ($JSCompiler_StaticMethods_setDisplayedPanelId$self$$.$ChangeTabsState$(), (0,D.$JSCompiler_StaticMethods_ChangePanels$$)($JSCompiler_StaticMethods_setDisplayedPanelId$self$$, $id$$275$$, $bImmediate$$20$$, $onEnd$$8$$));
  $JSCompiler_StaticMethods_setDisplayedPanelId$self$$.$_oldDisplayedPanelId$ = D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_StaticMethods_getDisplayedPanelId$$ = function $$JSCompiler_StaticMethods_getDisplayedPanelId$$$($JSCompiler_StaticMethods_getDisplayedPanelId$self$$) {
  var $panelId$$1$$ = $JSCompiler_StaticMethods_getDisplayedPanelId$self$$.$_displayedPanelId$;
  return!$panelId$$1$$ && 0 < $JSCompiler_StaticMethods_getDisplayedPanelId$self$$.$_panelOrder$.length ? $JSCompiler_StaticMethods_getDisplayedPanelId$self$$.$_panelOrder$[0] : $panelId$$1$$
};
D.$DvtPanelDrawer$$.prototype.$setDisclosed$ = function $$DvtPanelDrawer$$$$$setDisclosed$$($bDisclosed$$11_destX$$inline_8010$$, $anim$$inline_8011_anim$$inline_8017_bImmediate$$21$$, $onEnd$$9$$) {
  if(!this.$_bTransition$) {
    var $oldDisclosed$$1$$ = this.$_bDisclosed$;
    this.$_bDisclosed$ = $bDisclosed$$11_destX$$inline_8010$$;
    if($oldDisclosed$$1$$ != $bDisclosed$$11_destX$$inline_8010$$) {
      if(this.$_bTransition$ = D.$JSCompiler_alias_TRUE$$, $bDisclosed$$11_destX$$inline_8010$$) {
        (0,D.$JSCompiler_StaticMethods_DisplayPanel$$)(this, (0,D.$JSCompiler_StaticMethods_getDisplayedPanelId$$)(this));
        $bDisclosed$$11_destX$$inline_8010$$ = -(0.8 * this.$_expandedContent$.getWidth());
        "right" == this.$_discloseDirection$ && ($bDisclosed$$11_destX$$inline_8010$$ = -$bDisclosed$$11_destX$$inline_8010$$, this.$_expandedContent$.$setX$((0.8 - 1) * this.$_expandedContent$.getWidth()));
        if($anim$$inline_8011_anim$$inline_8017_bImmediate$$21$$) {
          this.$_contentPane$.$setTranslateX$($bDisclosed$$11_destX$$inline_8010$$), $onEnd$$9$$ && $onEnd$$9$$(), this.$_bTransition$ = D.$JSCompiler_alias_FALSE$$
        }else {
          if($anim$$inline_8011_anim$$inline_8017_bImmediate$$21$$ = new D.$DvtAnimator$$(this.$getCtx$(), 0.25), $anim$$inline_8011_anim$$inline_8017_bImmediate$$21$$.$setEasing$(D.$DvtEasing$backOut$$), (0,D.$JSCompiler_StaticMethods_addProp$$)($anim$$inline_8011_anim$$inline_8017_bImmediate$$21$$, "typeNumber", this.$_contentPane$, this.$_contentPane$.$getTranslateX$, this.$_contentPane$.$setTranslateX$, $bDisclosed$$11_destX$$inline_8010$$), $onEnd$$9$$ && (0,D.$DvtPlayable$appendOnEnd$$)($anim$$inline_8011_anim$$inline_8017_bImmediate$$21$$, 
          $onEnd$$9$$), $anim$$inline_8011_anim$$inline_8017_bImmediate$$21$$) {
            var $thisRef$$inline_8012$$ = this;
            (0,D.$DvtPlayable$appendOnEnd$$)($anim$$inline_8011_anim$$inline_8017_bImmediate$$21$$, function() {
              $thisRef$$inline_8012$$.$_bTransition$ = D.$JSCompiler_alias_FALSE$$
            });
            $anim$$inline_8011_anim$$inline_8017_bImmediate$$21$$.play()
          }
        }
        this.$ChangeTabsState$()
      }else {
        if($anim$$inline_8011_anim$$inline_8017_bImmediate$$21$$) {
          this.$_contentPane$.$setTranslateX$(0), this.$RemoveExpandedContent$(), $onEnd$$9$$ && $onEnd$$9$$(), this.$ChangeTabsState$(), this.$_bTransition$ = D.$JSCompiler_alias_FALSE$$
        }else {
          $anim$$inline_8011_anim$$inline_8017_bImmediate$$21$$ = new D.$DvtAnimator$$(this.$getCtx$(), 0.25);
          $anim$$inline_8011_anim$$inline_8017_bImmediate$$21$$.$setEasing$(D.$DvtEasing$backIn$$);
          (0,D.$JSCompiler_StaticMethods_addProp$$)($anim$$inline_8011_anim$$inline_8017_bImmediate$$21$$, "typeNumber", this.$_contentPane$, this.$_contentPane$.$getTranslateX$, this.$_contentPane$.$setTranslateX$, 0);
          (0,D.$DvtPlayable$appendOnEnd$$)($anim$$inline_8011_anim$$inline_8017_bImmediate$$21$$, this.$RemoveExpandedContent$, this);
          (0,D.$DvtPlayable$appendOnEnd$$)($anim$$inline_8011_anim$$inline_8017_bImmediate$$21$$, this.$ChangeTabsState$, this);
          $onEnd$$9$$ && (0,D.$DvtPlayable$appendOnEnd$$)($anim$$inline_8011_anim$$inline_8017_bImmediate$$21$$, $onEnd$$9$$);
          var $thisRef$$inline_8018$$ = this;
          (0,D.$DvtPlayable$appendOnEnd$$)($anim$$inline_8011_anim$$inline_8017_bImmediate$$21$$, function() {
            $thisRef$$inline_8018$$.$_bTransition$ = D.$JSCompiler_alias_FALSE$$
          });
          $anim$$inline_8011_anim$$inline_8017_bImmediate$$21$$.play()
        }
      }
    }
  }
};
D.$DvtPanelDrawer$$.prototype.$isDisclosed$ = (0,D.$JSCompiler_get$$)("$_bDisclosed$");
D.$DvtPanelDrawer$$.prototype.$renderComponent$ = function $$DvtPanelDrawer$$$$$renderComponent$$() {
  this.$_contentPane$ || (this.$_contentPane$ = new D.$DvtContainer$$(this.$getCtx$(), "pd_contentPane"), this.$addChild$(this.$_contentPane$), this.$_activeContent$ = new D.$DvtContainer$$(this.$getCtx$(), "pdcp_activeContent"), this.$_contentPane$.$addChild$(this.$_activeContent$));
  if(!this.$_isFixed$) {
    var $currX$$inline_8021$$ = -42;
    "right" == this.$_discloseDirection$ && ($currX$$inline_8021$$ = 0);
    var $currY$$inline_8022$$ = 15;
    if("top" == this.$_dockSide$) {
      for(var $i$$inline_8023$$ = 0;$i$$inline_8023$$ < this.$_panelOrder$.length;$i$$inline_8023$$++) {
        var $panelId$$inline_8024_tab$$inline_8025$$ = this.$_panelOrder$[$i$$inline_8023$$], $panelId$$inline_8024_tab$$inline_8025$$ = (0,D.$JSCompiler_StaticMethods_RenderTab$$)(this, $panelId$$inline_8024_tab$$inline_8025$$);
        (0,D.$JSCompiler_StaticMethods_setTranslate$$)($panelId$$inline_8024_tab$$inline_8025$$, $currX$$inline_8021$$, $currY$$inline_8022$$);
        $currY$$inline_8022$$ += 42
      }
    }else {
      if("bottom" == this.$_dockSide$) {
        $currY$$inline_8022$$ = -57;
        for($i$$inline_8023$$ = this.$_panelOrder$.length - 1;0 <= $i$$inline_8023$$;$i$$inline_8023$$--) {
          $panelId$$inline_8024_tab$$inline_8025$$ = this.$_panelOrder$[$i$$inline_8023$$], $panelId$$inline_8024_tab$$inline_8025$$ = (0,D.$JSCompiler_StaticMethods_RenderTab$$)(this, $panelId$$inline_8024_tab$$inline_8025$$), (0,D.$JSCompiler_StaticMethods_setTranslate$$)($panelId$$inline_8024_tab$$inline_8025$$, $currX$$inline_8021$$, $currY$$inline_8022$$), $currY$$inline_8022$$ -= 42
        }
      }
    }
  }
};
D.$JSCompiler_StaticMethods_RenderTab$$ = function $$JSCompiler_StaticMethods_RenderTab$$$($JSCompiler_StaticMethods_RenderTab$self$$, $panelId$$3$$) {
  var $closedPath_downState$$17$$, $arPoints$$inline_8028_tab$$1$$;
  switch($JSCompiler_StaticMethods_RenderTab$self$$.$_discloseDirection$) {
    case "right":
      $arPoints$$inline_8028_tab$$1$$ = ["M", 0, 0, "L", 42 - $JSCompiler_StaticMethods_RenderTab$self$$.$_borderRadius$, 0, "A", $JSCompiler_StaticMethods_RenderTab$self$$.$_borderRadius$, $JSCompiler_StaticMethods_RenderTab$self$$.$_borderRadius$, 0, 0, 1, 42, $JSCompiler_StaticMethods_RenderTab$self$$.$_borderRadius$, "L", 42, 42 - $JSCompiler_StaticMethods_RenderTab$self$$.$_borderRadius$, "A", $JSCompiler_StaticMethods_RenderTab$self$$.$_borderRadius$, $JSCompiler_StaticMethods_RenderTab$self$$.$_borderRadius$, 
      0, 0, 1, 42 - $JSCompiler_StaticMethods_RenderTab$self$$.$_borderRadius$, 42, "L", 0, 42];
      break;
    default:
      $arPoints$$inline_8028_tab$$1$$ = ["M", 42, 0, "L", $JSCompiler_StaticMethods_RenderTab$self$$.$_borderRadius$, 0, "A", $JSCompiler_StaticMethods_RenderTab$self$$.$_borderRadius$, $JSCompiler_StaticMethods_RenderTab$self$$.$_borderRadius$, 0, 0, 0, 0, $JSCompiler_StaticMethods_RenderTab$self$$.$_borderRadius$, "L", 0, 42 - $JSCompiler_StaticMethods_RenderTab$self$$.$_borderRadius$, "A", $JSCompiler_StaticMethods_RenderTab$self$$.$_borderRadius$, $JSCompiler_StaticMethods_RenderTab$self$$.$_borderRadius$, 
      0, 0, 0, $JSCompiler_StaticMethods_RenderTab$self$$.$_borderRadius$, 42, "L", 42, 42]
  }
  $closedPath_downState$$17$$ = $arPoints$$inline_8028_tab$$1$$;
  $arPoints$$inline_8028_tab$$1$$ = new D.$DvtPanelDrawerTab$$($JSCompiler_StaticMethods_RenderTab$self$$.$getCtx$(), $closedPath_downState$$17$$, $panelId$$3$$, $JSCompiler_StaticMethods_RenderTab$self$$);
  (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)($arPoints$$inline_8028_tab$$1$$);
  $arPoints$$inline_8028_tab$$1$$.setCursor("pointer");
  $JSCompiler_StaticMethods_RenderTab$self$$.$_contentPane$.$addChildAt$($arPoints$$inline_8028_tab$$1$$, 0);
  $arPoints$$inline_8028_tab$$1$$.$setSolidFill$($JSCompiler_StaticMethods_RenderTab$self$$.$_bgInactiveColor$, $JSCompiler_StaticMethods_RenderTab$self$$.$_bgAlpha$);
  $arPoints$$inline_8028_tab$$1$$.$setSolidStroke$($JSCompiler_StaticMethods_RenderTab$self$$.$_borderInactiveColor$, 1, 1);
  var $panelObj$$ = $JSCompiler_StaticMethods_RenderTab$self$$.$_panels$[$panelId$$3$$], $icon$$48_upState$$20$$ = new D.$DvtPath$$($JSCompiler_StaticMethods_RenderTab$self$$.$getCtx$(), $closedPath_downState$$17$$);
  (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)($icon$$48_upState$$20$$);
  (0,D.$JSCompiler_StaticMethods_setTranslate$$)($panelObj$$.iconUp, 9, 9);
  $icon$$48_upState$$20$$.$addChild$($panelObj$$.iconUp);
  var $overState$$17$$ = new D.$DvtPath$$($JSCompiler_StaticMethods_RenderTab$self$$.$getCtx$(), $closedPath_downState$$17$$);
  (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)($overState$$17$$);
  (0,D.$JSCompiler_StaticMethods_setTranslate$$)($panelObj$$.iconOver, 9, 9);
  $overState$$17$$.$addChild$($panelObj$$.iconOver);
  $closedPath_downState$$17$$ = new D.$DvtPath$$($JSCompiler_StaticMethods_RenderTab$self$$.$getCtx$(), $closedPath_downState$$17$$);
  (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)($closedPath_downState$$17$$);
  (0,D.$JSCompiler_StaticMethods_setTranslate$$)($panelObj$$.iconDown, 9, 9);
  $closedPath_downState$$17$$.$addChild$($panelObj$$.iconDown);
  $icon$$48_upState$$20$$ = new D.$DvtButton$$($JSCompiler_StaticMethods_RenderTab$self$$.$getCtx$(), $icon$$48_upState$$20$$, $overState$$17$$, $closedPath_downState$$17$$);
  $icon$$48_upState$$20$$.$_bToggleEnabled$ = D.$JSCompiler_alias_TRUE$$;
  $panelObj$$.icon = $icon$$48_upState$$20$$;
  $arPoints$$inline_8028_tab$$1$$.$addChild$($icon$$48_upState$$20$$);
  $JSCompiler_StaticMethods_RenderTab$self$$.$_tabs$[$panelId$$3$$] = $arPoints$$inline_8028_tab$$1$$;
  $JSCompiler_StaticMethods_RenderTab$self$$.$_eventManager$.$associate$($arPoints$$inline_8028_tab$$1$$, {$HandleClick$:function() {
    $JSCompiler_StaticMethods_RenderTab$self$$.$_oldDisplayedPanelId$ = (0,D.$JSCompiler_StaticMethods_getDisplayedPanelId$$)($JSCompiler_StaticMethods_RenderTab$self$$);
    $JSCompiler_StaticMethods_RenderTab$self$$.$_displayedPanelId$ = $panelId$$3$$;
    var $closedPath_downState$$17$$ = $JSCompiler_StaticMethods_RenderTab$self$$.$_tabs$[$panelId$$3$$].$isShowingKeyboardFocusEffect$(), $arPoints$$inline_8028_tab$$1$$ = function $$arPoints$$inline_8028_tab$$1$$$() {
      var $panelId$$3$$ = $JSCompiler_StaticMethods_RenderTab$self$$.$getCtx$().$getTooltipManager$();
      $panelId$$3$$ && $panelId$$3$$.$hideTooltip$()
    };
    $JSCompiler_StaticMethods_RenderTab$self$$.$isDisclosed$() ? $JSCompiler_StaticMethods_RenderTab$self$$.$_oldDisplayedPanelId$ == $panelId$$3$$ ? $JSCompiler_StaticMethods_RenderTab$self$$.$setDisclosed$(D.$JSCompiler_alias_FALSE$$, D.$JSCompiler_alias_FALSE$$, $arPoints$$inline_8028_tab$$1$$) : ($JSCompiler_StaticMethods_RenderTab$self$$.$ChangeTabsState$(), (0,D.$JSCompiler_StaticMethods_ChangePanels$$)($JSCompiler_StaticMethods_RenderTab$self$$, $panelId$$3$$, D.$JSCompiler_alias_FALSE$$)) : 
    ($JSCompiler_StaticMethods_RenderTab$self$$.$setDisclosed$(D.$JSCompiler_alias_TRUE$$, D.$JSCompiler_alias_FALSE$$, $arPoints$$inline_8028_tab$$1$$), $JSCompiler_StaticMethods_RenderTab$self$$.$ApplyAlphasRollover$());
    $JSCompiler_StaticMethods_RenderTab$self$$.$_oldDisplayedPanelId$ = D.$JSCompiler_alias_NULL$$;
    $JSCompiler_StaticMethods_RenderTab$self$$.$FireListener$(new D.$DvtPanelDrawerEvent$$($JSCompiler_StaticMethods_RenderTab$self$$.$isDisclosed$() ? "show" : "hide", $JSCompiler_StaticMethods_RenderTab$self$$.$_displayedPanelId$));
    $closedPath_downState$$17$$ && (0,D.$JSCompiler_StaticMethods_setCurrentKeyboardFocus$$)($JSCompiler_StaticMethods_RenderTab$self$$.$getCtx$(), $JSCompiler_StaticMethods_RenderTab$self$$)
  }, $getTooltip$:function() {
    return $JSCompiler_StaticMethods_RenderTab$self$$.$_panels$[$panelId$$3$$].tooltip
  }});
  $arPoints$$inline_8028_tab$$1$$.$addAccessibilityAttributes$();
  return $arPoints$$inline_8028_tab$$1$$
};
D.$JSCompiler_StaticMethods_ChangePanels$$ = function $$JSCompiler_StaticMethods_ChangePanels$$$($JSCompiler_StaticMethods_ChangePanels$self$$, $panelId$$5$$, $bImmediate$$22_oldPanel$$1$$, $onEnd$$10$$) {
  var $anim$$30$$ = D.$JSCompiler_alias_NULL$$;
  $bImmediate$$22_oldPanel$$1$$ || ($anim$$30$$ = new D.$DvtAnimator$$($JSCompiler_StaticMethods_ChangePanels$self$$.$getCtx$(), 0.25));
  $JSCompiler_StaticMethods_ChangePanels$self$$.$_oldDisplayedPanelId$ && ($bImmediate$$22_oldPanel$$1$$ = $JSCompiler_StaticMethods_ChangePanels$self$$.$_panels$[$JSCompiler_StaticMethods_ChangePanels$self$$.$_oldDisplayedPanelId$].panel) && $JSCompiler_StaticMethods_ChangePanels$self$$.$_expandedContentPanel$.removeChild($bImmediate$$22_oldPanel$$1$$);
  (0,D.$JSCompiler_StaticMethods_DisplayPanel$$)($JSCompiler_StaticMethods_ChangePanels$self$$, $panelId$$5$$, $anim$$30$$);
  $anim$$30$$ ? ($JSCompiler_StaticMethods_ChangePanels$self$$.$ApplyAlphasRollover$(), $onEnd$$10$$ && (0,D.$DvtPlayable$appendOnEnd$$)($anim$$30$$, $onEnd$$10$$), $anim$$30$$.play()) : $onEnd$$10$$ && $onEnd$$10$$()
};
D.$DvtPanelDrawer$$.prototype.$RemoveExpandedContent$ = function $$DvtPanelDrawer$$$$$RemoveExpandedContent$$() {
  this.$_expandedContent$ && (this.$_contentClipPath$ = D.$JSCompiler_alias_NULL$$, this.$_expandedContentPanel$.$removeChildren$(), (0,D.$JSCompiler_StaticMethods_removeAllDrawEffects$$)(this.$_activeContent$), this.$_expandedContent$.$destroy$(), this.$_activeContent$.removeChild(this.$_expandedContent$), this.$_expandedBorderResizable$ = this.$_expandedBorder$ = this.$_expandedContentPanel$ = this.$_expandedContent$ = D.$JSCompiler_alias_NULL$$)
};
D.$JSCompiler_StaticMethods_DisplayPanel$$ = function $$JSCompiler_StaticMethods_DisplayPanel$$$($JSCompiler_StaticMethods_DisplayPanel$self$$, $id$$276$$, $anim$$33$$) {
  $JSCompiler_StaticMethods_DisplayPanel$self$$.$_expandedContent$ || ($JSCompiler_StaticMethods_DisplayPanel$self$$.$_expandedContent$ = new D.$DvtRect$$($JSCompiler_StaticMethods_DisplayPanel$self$$.$getCtx$(), 0, 0, 1, 1, "pdcp_expandedContent"), $JSCompiler_StaticMethods_DisplayPanel$self$$.$_activeContent$.$addChild$($JSCompiler_StaticMethods_DisplayPanel$self$$.$_expandedContent$), $JSCompiler_StaticMethods_DisplayPanel$self$$.$_expandedContent$.$setSolidFill$($JSCompiler_StaticMethods_DisplayPanel$self$$.$_bgColor$, 
  $JSCompiler_StaticMethods_DisplayPanel$self$$.$_bgAlpha$), $JSCompiler_StaticMethods_DisplayPanel$self$$.$_expandedContentPanel$ = new D.$DvtContainer$$($JSCompiler_StaticMethods_DisplayPanel$self$$.$_context$), $JSCompiler_StaticMethods_DisplayPanel$self$$.$_expandedContent$.$addChild$($JSCompiler_StaticMethods_DisplayPanel$self$$.$_expandedContentPanel$), (0,D.$JSCompiler_StaticMethods_setTranslate$$)($JSCompiler_StaticMethods_DisplayPanel$self$$.$_expandedContentPanel$, $JSCompiler_StaticMethods_DisplayPanel$self$$.$_contentPadding$, 
  $JSCompiler_StaticMethods_DisplayPanel$self$$.$_contentPadding$));
  var $ecw$$inline_8041_panel$$5$$ = $JSCompiler_StaticMethods_DisplayPanel$self$$.$_panels$[$id$$276$$].panel;
  if($ecw$$inline_8041_panel$$5$$) {
    $JSCompiler_StaticMethods_DisplayPanel$self$$.$_expandedContentPanel$.$addChild$($ecw$$inline_8041_panel$$5$$);
    if($JSCompiler_StaticMethods_DisplayPanel$self$$.$_oldDisplayedPanelId$) {
      var $ech$$inline_8042_oldPanel$$2$$ = $JSCompiler_StaticMethods_DisplayPanel$self$$.$_panels$[$JSCompiler_StaticMethods_DisplayPanel$self$$.$_oldDisplayedPanelId$].panel;
      $ech$$inline_8042_oldPanel$$2$$ && $ech$$inline_8042_oldPanel$$2$$.$removeEvtListener$("dvtResizeEvent", $JSCompiler_StaticMethods_DisplayPanel$self$$.$HandlePanelResize$, D.$JSCompiler_alias_FALSE$$, $JSCompiler_StaticMethods_DisplayPanel$self$$)
    }
    $ecw$$inline_8041_panel$$5$$.$addEvtListener$("dvtResizeEvent", $JSCompiler_StaticMethods_DisplayPanel$self$$.$HandlePanelResize$, D.$JSCompiler_alias_FALSE$$, $JSCompiler_StaticMethods_DisplayPanel$self$$)
  }
  $JSCompiler_StaticMethods_DisplayPanel$self$$.$_expandedBorder$ || ($JSCompiler_StaticMethods_DisplayPanel$self$$.$_expandedBorder$ = new D.$DvtPath$$($JSCompiler_StaticMethods_DisplayPanel$self$$.$getCtx$(), ["M", 0, 0, "L", 1, 1], "pdcp_expandedBorder"), $JSCompiler_StaticMethods_DisplayPanel$self$$.$_expandedBorderResizable$ = new D.$DvtPath$$($JSCompiler_StaticMethods_DisplayPanel$self$$.$getCtx$(), ["M", 0, 0, "L", 1, 1], "pdcp_expandedBorderResizable"), $JSCompiler_StaticMethods_DisplayPanel$self$$.$_expandedContent$.$addChild$($JSCompiler_StaticMethods_DisplayPanel$self$$.$_expandedBorder$), 
  $JSCompiler_StaticMethods_DisplayPanel$self$$.$_expandedContent$.$addChild$($JSCompiler_StaticMethods_DisplayPanel$self$$.$_expandedBorderResizable$), $JSCompiler_StaticMethods_DisplayPanel$self$$.$_expandedBorder$.$setSolidStroke$($JSCompiler_StaticMethods_DisplayPanel$self$$.$_borderColor$, 1), $JSCompiler_StaticMethods_DisplayPanel$self$$.$_expandedBorder$.$setFill$(D.$JSCompiler_alias_NULL$$), $JSCompiler_StaticMethods_DisplayPanel$self$$.$_expandedBorderResizable$.$setSolidStroke$($JSCompiler_StaticMethods_DisplayPanel$self$$.$_borderColor$, 
  1), $JSCompiler_StaticMethods_DisplayPanel$self$$.$_expandedBorderResizable$.$setFill$(D.$JSCompiler_alias_NULL$$), (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)($JSCompiler_StaticMethods_DisplayPanel$self$$.$_expandedBorder$), (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)($JSCompiler_StaticMethods_DisplayPanel$self$$.$_expandedBorderResizable$));
  var $dims$$inline_8045_panel$$inline_8040$$ = $JSCompiler_StaticMethods_DisplayPanel$self$$.$_panels$[$id$$276$$].panel, $ecw$$inline_8041_panel$$5$$ = 2 * $JSCompiler_StaticMethods_DisplayPanel$self$$.$_contentPadding$, $ech$$inline_8042_oldPanel$$2$$ = 2 * $JSCompiler_StaticMethods_DisplayPanel$self$$.$_contentPadding$, $xx$$inline_8043$$ = 0, $yy$$inline_8044$$ = 0;
  $dims$$inline_8045_panel$$inline_8040$$ && ($dims$$inline_8045_panel$$inline_8040$$ = $dims$$inline_8045_panel$$inline_8040$$.$getContentDimensions$ ? $dims$$inline_8045_panel$$inline_8040$$.$getContentDimensions$() : $dims$$inline_8045_panel$$inline_8040$$.$getDimensionsWithStroke$(), $ecw$$inline_8041_panel$$5$$ = (0,D.$JSCompiler_StaticMethods_GetExpandedContentWidth$$)($JSCompiler_StaticMethods_DisplayPanel$self$$, $dims$$inline_8045_panel$$inline_8040$$.$w$), $ech$$inline_8042_oldPanel$$2$$ = 
  (0,D.$JSCompiler_StaticMethods_GetExpandedContentHeight$$)($JSCompiler_StaticMethods_DisplayPanel$self$$, $dims$$inline_8045_panel$$inline_8040$$.$h$), $xx$$inline_8043$$ = $dims$$inline_8045_panel$$inline_8040$$.x, $yy$$inline_8044$$ = $dims$$inline_8045_panel$$inline_8040$$.y);
  (0,D.$JSCompiler_StaticMethods__refreshPanelSize$$)($JSCompiler_StaticMethods_DisplayPanel$self$$, $id$$276$$, $anim$$33$$, $ecw$$inline_8041_panel$$5$$, $ech$$inline_8042_oldPanel$$2$$, $xx$$inline_8043$$, $yy$$inline_8044$$)
};
D.$DvtPanelDrawer$$.prototype.$HandlePanelResize$ = function $$DvtPanelDrawer$$$$$HandlePanelResize$$($event$$722_yy$$61$$) {
  var $anim$$34$$ = new D.$DvtAnimator$$(this.$getCtx$(), 0.25), $ecw_resizeWidth$$1$$ = $event$$722_yy$$61$$.getWidth(), $ech_resizeHeight$$1$$ = $event$$722_yy$$61$$.getHeight(), $ecw_resizeWidth$$1$$ = (0,D.$JSCompiler_StaticMethods_GetExpandedContentWidth$$)(this, $ecw_resizeWidth$$1$$), $ech_resizeHeight$$1$$ = (0,D.$JSCompiler_StaticMethods_GetExpandedContentHeight$$)(this, $ech_resizeHeight$$1$$), $xx$$61$$ = $event$$722_yy$$61$$.$getX$() ? $event$$722_yy$$61$$.$getX$() : 0;
  $event$$722_yy$$61$$ = $event$$722_yy$$61$$.$getY$() ? $event$$722_yy$$61$$.$getY$() : 0;
  (0,D.$JSCompiler_StaticMethods__refreshPanelSize$$)(this, (0,D.$JSCompiler_StaticMethods_getDisplayedPanelId$$)(this), $anim$$34$$, $ecw_resizeWidth$$1$$, $ech_resizeHeight$$1$$, $xx$$61$$, $event$$722_yy$$61$$);
  $anim$$34$$.play()
};
D.$JSCompiler_StaticMethods__refreshPanelSize$$ = function $$JSCompiler_StaticMethods__refreshPanelSize$$$($JSCompiler_StaticMethods__refreshPanelSize$self$$, $edgeX_id$$278$$, $anim$$36$$, $ecw$$2_firstTab_lastTab$$, $ech$$2$$, $clipRect_tab$$2_xx$$63$$, $expandedContentWidth_yy$$63$$) {
  var $panel$$7$$ = $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_panels$[$edgeX_id$$278$$].panel;
  $anim$$36$$ ? (0,D.$JSCompiler_StaticMethods_addProp$$)($anim$$36$$, "typeNumber", $panel$$7$$, $panel$$7$$.$getTranslateX$, $panel$$7$$.$setTranslateX$, -$clipRect_tab$$2_xx$$63$$) : $panel$$7$$.$setTranslateX$(-$clipRect_tab$$2_xx$$63$$);
  $anim$$36$$ ? (0,D.$JSCompiler_StaticMethods_addProp$$)($anim$$36$$, "typeNumber", $panel$$7$$, $panel$$7$$.$getTranslateY$, $panel$$7$$.$setTranslateY$, -$expandedContentWidth_yy$$63$$) : $panel$$7$$.$setTranslateY$(-$expandedContentWidth_yy$$63$$);
  $clipRect_tab$$2_xx$$63$$ = new D.$DvtRectangle$$($JSCompiler_StaticMethods__refreshPanelSize$self$$.$_contentPadding$, $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_contentPadding$, $ecw$$2_firstTab_lastTab$$ - 2 * $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_contentPadding$, $ech$$2$$ - 2 * $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_contentPadding$);
  $expandedContentWidth_yy$$63$$ = 1.25 * $ecw$$2_firstTab_lastTab$$;
  $anim$$36$$ ? ((0,D.$JSCompiler_StaticMethods_addProp$$)($anim$$36$$, "typeNumber", $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_expandedContent$, $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_expandedContent$.getWidth, $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_expandedContent$.$setWidth$, $expandedContentWidth_yy$$63$$), (0,D.$JSCompiler_StaticMethods_addProp$$)($anim$$36$$, "typeNumber", $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_expandedContent$, $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_expandedContent$.getHeight, 
  $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_expandedContent$.$setHeight$, $ech$$2$$), (0,D.$JSCompiler_StaticMethods_addProp$$)($anim$$36$$, "typeRectangle", $JSCompiler_StaticMethods__refreshPanelSize$self$$, $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_getContentClipPath$, $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_setContentClipPath$, $clipRect_tab$$2_xx$$63$$), "left" == $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_discloseDirection$ ? (0,D.$JSCompiler_StaticMethods_addProp$$)($anim$$36$$, 
  "typeNumber", $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_contentPane$, $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_contentPane$.$getTranslateX$, $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_contentPane$.$setTranslateX$, -$ecw$$2_firstTab_lastTab$$) : "right" == $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_discloseDirection$ && ((0,D.$JSCompiler_StaticMethods_addProp$$)($anim$$36$$, "typeNumber", $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_contentPane$, 
  $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_contentPane$.$getTranslateX$, $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_contentPane$.$setTranslateX$, $ecw$$2_firstTab_lastTab$$), (0,D.$JSCompiler_StaticMethods_addProp$$)($anim$$36$$, "typeNumber", $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_expandedBorder$, $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_expandedBorder$.$getTranslateX$, $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_expandedBorder$.$setTranslateX$, 
  $ecw$$2_firstTab_lastTab$$), (0,D.$JSCompiler_StaticMethods_addProp$$)($anim$$36$$, "typeNumber", $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_expandedBorderResizable$, $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_expandedBorderResizable$.$getTranslateX$, $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_expandedBorderResizable$.$setTranslateX$, $ecw$$2_firstTab_lastTab$$), (0,D.$JSCompiler_StaticMethods_addProp$$)($anim$$36$$, "typeNumber", $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_expandedContent$, 
  $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_expandedContent$.$getTranslateX$, $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_expandedContent$.$setTranslateX$, -$ecw$$2_firstTab_lastTab$$)), "bottom" == $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_dockSide$ && ((0,D.$JSCompiler_StaticMethods_addProp$$)($anim$$36$$, "typeNumber", $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_expandedBorder$, $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_expandedBorder$.$getTranslateY$, 
  $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_expandedBorder$.$setTranslateY$, $ech$$2$$), (0,D.$JSCompiler_StaticMethods_addProp$$)($anim$$36$$, "typeNumber", $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_expandedBorderResizable$, $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_expandedBorderResizable$.$getTranslateY$, $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_expandedBorderResizable$.$setTranslateY$, $ech$$2$$), (0,D.$JSCompiler_StaticMethods_addProp$$)($anim$$36$$, 
  "typeNumber", $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_expandedContent$, $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_expandedContent$.$getTranslateY$, $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_expandedContent$.$setTranslateY$, -$ech$$2$$))) : ($JSCompiler_StaticMethods__refreshPanelSize$self$$.$_expandedContent$.$setWidth$($expandedContentWidth_yy$$63$$), $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_expandedContent$.$setHeight$($ech$$2$$), "right" == $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_discloseDirection$ && 
  ($JSCompiler_StaticMethods__refreshPanelSize$self$$.$_expandedContent$.$setTranslateX$(-$ecw$$2_firstTab_lastTab$$), $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_expandedBorder$.$setTranslateX$($ecw$$2_firstTab_lastTab$$), $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_expandedBorderResizable$.$setTranslateX$($ecw$$2_firstTab_lastTab$$)), "bottom" == $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_dockSide$ && ($JSCompiler_StaticMethods__refreshPanelSize$self$$.$_expandedContent$.$setTranslateY$(-$ech$$2$$), 
  $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_expandedBorder$.$setTranslateY$($ech$$2$$), $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_expandedBorderResizable$.$setTranslateY$($ech$$2$$)), $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_setContentClipPath$($clipRect_tab$$2_xx$$63$$));
  $clipRect_tab$$2_xx$$63$$ = $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_tabs$[$edgeX_id$$278$$];
  var $borderPath$$;
  $edgeX_id$$278$$ = $ecw$$2_firstTab_lastTab$$;
  "right" == $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_discloseDirection$ && ($edgeX_id$$278$$ = -$ecw$$2_firstTab_lastTab$$);
  "top" == $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_dockSide$ ? $clipRect_tab$$2_xx$$63$$ ? ($borderPath$$ = ["M", 0, 0, "L", 0, $clipRect_tab$$2_xx$$63$$.$getTranslateY$(), "M", 0, $clipRect_tab$$2_xx$$63$$.$getTranslateY$() + 42], $ecw$$2_firstTab_lastTab$$ = $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_tabs$[$JSCompiler_StaticMethods__refreshPanelSize$self$$.$_panelOrder$[$JSCompiler_StaticMethods__refreshPanelSize$self$$.$_panelOrder$.length - 1]], $borderPath$$.push("L", 
  0, $ecw$$2_firstTab_lastTab$$.$getTranslateY$() + 42), $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_expandedBorder$.$setCommands$($borderPath$$), $borderPath$$ = ["M", 0, $ecw$$2_firstTab_lastTab$$.$getTranslateY$() + 42, "L", 0, $ech$$2$$, "L", 1.25 * $edgeX_id$$278$$, $ech$$2$$]) : ($borderPath$$ = ["M", 0, 0, "L", 0, $ech$$2$$, "L", $edgeX_id$$278$$, $ech$$2$$], $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_expandedBorder$.$setCommands$($borderPath$$)) : "bottom" == $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_dockSide$ && 
  ($clipRect_tab$$2_xx$$63$$ ? ($borderPath$$ = ["M", 0, 0, "L", 0, $clipRect_tab$$2_xx$$63$$.$getTranslateY$() + 42, "M", 0, $clipRect_tab$$2_xx$$63$$.$getTranslateY$()], $ecw$$2_firstTab_lastTab$$ = $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_tabs$[$JSCompiler_StaticMethods__refreshPanelSize$self$$.$_panelOrder$[0]], $borderPath$$.push("L", 0, $ecw$$2_firstTab_lastTab$$.$getTranslateY$()), $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_expandedBorder$.$setCommands$($borderPath$$), 
  $edgeX_id$$278$$ *= 1.25, $borderPath$$ = ["M", 0, $ecw$$2_firstTab_lastTab$$.$getTranslateY$(), "L", 0, -$ech$$2$$, "L", $edgeX_id$$278$$, -$ech$$2$$]) : ($borderPath$$ = ["M", 0, 0, "L", 0, -$ech$$2$$, "L", $edgeX_id$$278$$, -$ech$$2$$], $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_expandedBorder$.$setCommands$($borderPath$$)));
  $anim$$36$$ ? (0,D.$JSCompiler_StaticMethods_addProp$$)($anim$$36$$, "typePath", $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_expandedBorderResizable$, $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_expandedBorderResizable$.$getCommands$, $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_expandedBorderResizable$.$setCommands$, $borderPath$$) : $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_expandedBorderResizable$.$setCommands$($borderPath$$)
};
D.$DvtPanelDrawer$$.prototype.$_setContentClipPath$ = function $$DvtPanelDrawer$$$$$_setContentClipPath$$($rect$$48$$) {
  if(this.$_expandedContentPanel$ && $rect$$48$$) {
    var $clipPath$$16$$ = new D.$DvtClipPath$$("pdcp" + this.$_sid$);
    (0,D.$JSCompiler_StaticMethods_addRect$$)($clipPath$$16$$, $rect$$48$$.x, $rect$$48$$.y, $rect$$48$$.$w$, $rect$$48$$.$h$);
    (0,D.$JSCompiler_StaticMethods_setClipPath$$)(this.$_expandedContentPanel$, $clipPath$$16$$)
  }
  this.$_contentClipPath$ = $rect$$48$$
};
D.$DvtPanelDrawer$$.prototype.$_getContentClipPath$ = (0,D.$JSCompiler_get$$)("$_contentClipPath$");
D.$JSCompiler_StaticMethods_GetExpandedContentWidth$$ = function $$JSCompiler_StaticMethods_GetExpandedContentWidth$$$($JSCompiler_StaticMethods_GetExpandedContentWidth$self$$, $preferredWidth$$1$$) {
  var $ww$$120$$ = $preferredWidth$$1$$ + 2 * $JSCompiler_StaticMethods_GetExpandedContentWidth$self$$.$_contentPadding$;
  if(($JSCompiler_StaticMethods_GetExpandedContentWidth$self$$.$_minWidth$ || 0 == $JSCompiler_StaticMethods_GetExpandedContentWidth$self$$.$_minWidth$) && $ww$$120$$ < $JSCompiler_StaticMethods_GetExpandedContentWidth$self$$.$_minWidth$) {
    $ww$$120$$ = $JSCompiler_StaticMethods_GetExpandedContentWidth$self$$.$_minWidth$
  }
  $JSCompiler_StaticMethods_GetExpandedContentWidth$self$$.$_maxWidth$ && $ww$$120$$ > $JSCompiler_StaticMethods_GetExpandedContentWidth$self$$.$_maxWidth$ && ($ww$$120$$ = $JSCompiler_StaticMethods_GetExpandedContentWidth$self$$.$_maxWidth$);
  return $ww$$120$$
};
D.$JSCompiler_StaticMethods_GetExpandedContentHeight$$ = function $$JSCompiler_StaticMethods_GetExpandedContentHeight$$$($JSCompiler_StaticMethods_GetExpandedContentHeight$self$$, $preferredHeight$$1$$) {
  var $hh$$104$$ = $preferredHeight$$1$$ + 2 * $JSCompiler_StaticMethods_GetExpandedContentHeight$self$$.$_contentPadding$;
  if(($JSCompiler_StaticMethods_GetExpandedContentHeight$self$$.$_minHeight$ || 0 == $JSCompiler_StaticMethods_GetExpandedContentHeight$self$$.$_minHeight$) && $hh$$104$$ < $JSCompiler_StaticMethods_GetExpandedContentHeight$self$$.$_minHeight$) {
    $hh$$104$$ = $JSCompiler_StaticMethods_GetExpandedContentHeight$self$$.$_minHeight$
  }
  $JSCompiler_StaticMethods_GetExpandedContentHeight$self$$.$_maxHeight$ && $hh$$104$$ > $JSCompiler_StaticMethods_GetExpandedContentHeight$self$$.$_maxHeight$ && ($hh$$104$$ = $JSCompiler_StaticMethods_GetExpandedContentHeight$self$$.$_maxHeight$);
  return $hh$$104$$
};
D.$JSCompiler_StaticMethods_ApplyFillAlpha$$ = function $$JSCompiler_StaticMethods_ApplyFillAlpha$$$($JSCompiler_StaticMethods_ApplyFillAlpha$self$$, $alpha$$49$$) {
  if($JSCompiler_StaticMethods_ApplyFillAlpha$self$$.$_expandedContent$) {
    var $fill$$72$$ = $JSCompiler_StaticMethods_ApplyFillAlpha$self$$.$_expandedContent$.$getFill$().$clone$();
    $fill$$72$$.$setAlpha$($alpha$$49$$);
    $JSCompiler_StaticMethods_ApplyFillAlpha$self$$.$_expandedContent$.$setFill$($fill$$72$$)
  }
  for(var $panelId$$6$$ in $JSCompiler_StaticMethods_ApplyFillAlpha$self$$.$_tabs$) {
    var $tab$$3$$ = $JSCompiler_StaticMethods_ApplyFillAlpha$self$$.$_tabs$[$panelId$$6$$];
    $tab$$3$$ && ($fill$$72$$ = $tab$$3$$.$getFill$().$clone$(), $fill$$72$$.$setAlpha$($alpha$$49$$), $tab$$3$$.$setFill$($fill$$72$$))
  }
};
D.$JSCompiler_StaticMethods_ApplyStrokeAlpha$$ = function $$JSCompiler_StaticMethods_ApplyStrokeAlpha$$$($JSCompiler_StaticMethods_ApplyStrokeAlpha$self$$) {
  if($JSCompiler_StaticMethods_ApplyStrokeAlpha$self$$.$_expandedBorder$) {
    var $stroke$$106$$ = $JSCompiler_StaticMethods_ApplyStrokeAlpha$self$$.$_expandedBorder$.$getStroke$().$clone$();
    $stroke$$106$$.$setAlpha$(1);
    $JSCompiler_StaticMethods_ApplyStrokeAlpha$self$$.$_expandedBorder$.$setStroke$($stroke$$106$$)
  }
  $JSCompiler_StaticMethods_ApplyStrokeAlpha$self$$.$_expandedBorderResizable$ && ($stroke$$106$$ = $JSCompiler_StaticMethods_ApplyStrokeAlpha$self$$.$_expandedBorderResizable$.$getStroke$().$clone$(), $stroke$$106$$.$setAlpha$(1), $JSCompiler_StaticMethods_ApplyStrokeAlpha$self$$.$_expandedBorderResizable$.$setStroke$($stroke$$106$$));
  for(var $panelId$$7$$ in $JSCompiler_StaticMethods_ApplyStrokeAlpha$self$$.$_tabs$) {
    var $tab$$4$$ = $JSCompiler_StaticMethods_ApplyStrokeAlpha$self$$.$_tabs$[$panelId$$7$$];
    $tab$$4$$ && ($stroke$$106$$ = $tab$$4$$.$getStroke$().$clone$(), $stroke$$106$$.$setAlpha$(1), $tab$$4$$.$setStroke$($stroke$$106$$))
  }
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtPanelDrawer$$.prototype;
D.$JSCompiler_prototypeAlias$$.$deEmphasizeStart$ = function $$JSCompiler_prototypeAlias$$$$deEmphasizeStart$$() {
  this.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$);
  (0,D.$JSCompiler_StaticMethods_ApplyFillAlpha$$)(this, 1);
  (0,D.$JSCompiler_StaticMethods_ApplyStrokeAlpha$$)(this);
  this.$_expandedContentPanel$ && this.$_expandedContentPanel$.$setAlpha$(1);
  for(var $panelId$$8$$ in this.$_tabs$) {
    var $icon$$49$$ = this.$GetIcon$($panelId$$8$$);
    $icon$$49$$ && $icon$$49$$.$setAlpha$(1)
  }
};
D.$JSCompiler_prototypeAlias$$.$deEmphasizeEnd$ = function $$JSCompiler_prototypeAlias$$$$deEmphasizeEnd$$() {
  this.$setMouseEnabled$(D.$JSCompiler_alias_TRUE$$);
  (0,D.$JSCompiler_StaticMethods_ApplyFillAlpha$$)(this, this.$_bgAlpha$);
  (0,D.$JSCompiler_StaticMethods_ApplyStrokeAlpha$$)(this);
  this.$_expandedContentPanel$ && this.$_expandedContentPanel$.$setAlpha$(1);
  for(var $panelId$$9$$ in this.$_tabs$) {
    var $icon$$50$$ = this.$GetIcon$($panelId$$9$$);
    $icon$$50$$ && $icon$$50$$.$setAlpha$(1)
  }
  this.$HandleRollOut$(D.$JSCompiler_alias_NULL$$)
};
D.$JSCompiler_prototypeAlias$$.$HandleRollOver$ = function $$JSCompiler_prototypeAlias$$$$HandleRollOver$$() {
  this.$ApplyAlphasRollover$()
};
D.$JSCompiler_prototypeAlias$$.$HandleRollOut$ = function $$JSCompiler_prototypeAlias$$$$HandleRollOut$$() {
  this.$_bFocus$ || this.$ApplyAlphasRollout$()
};
D.$JSCompiler_prototypeAlias$$.$ApplyAlphasRollover$ = function $$JSCompiler_prototypeAlias$$$$ApplyAlphasRollover$$() {
  (0,D.$JSCompiler_StaticMethods_ApplyFillAlpha$$)(this, 1)
};
D.$JSCompiler_prototypeAlias$$.$ApplyAlphasRollout$ = function $$JSCompiler_prototypeAlias$$$$ApplyAlphasRollout$$() {
  (0,D.$JSCompiler_StaticMethods_ApplyFillAlpha$$)(this, this.$_bgAlpha$)
};
D.$JSCompiler_prototypeAlias$$.$ChangeTabsState$ = function $$JSCompiler_prototypeAlias$$$$ChangeTabsState$$() {
  for(var $panelId$$10$$ in this.$_tabs$) {
    var $tab$$5$$ = this.$_tabs$[$panelId$$10$$];
    $tab$$5$$ && ($panelId$$10$$ == (0,D.$JSCompiler_StaticMethods_getDisplayedPanelId$$)(this) && this.$isDisclosed$() ? ($tab$$5$$.$setSolidFill$(this.$_bgColor$, this.$_bgAlpha$), $tab$$5$$.$setSolidStroke$(this.$_borderColor$, 1), $tab$$5$$.$setDisclosed$(D.$JSCompiler_alias_TRUE$$)) : ($tab$$5$$.$setSolidFill$(this.$_bgInactiveColor$, this.$_bgAlpha$), $tab$$5$$.$setSolidStroke$(this.$_borderInactiveColor$, 1), $tab$$5$$.$setDisclosed$(D.$JSCompiler_alias_FALSE$$)));
    var $bActivePanel$$ = this.$isDisclosed$() && $panelId$$10$$ == (0,D.$JSCompiler_StaticMethods_getDisplayedPanelId$$)(this), $icon$$51$$ = this.$GetIcon$($panelId$$10$$);
    $icon$$51$$ && (0,D.$JSCompiler_StaticMethods_setToggled$$)($icon$$51$$, $bActivePanel$$);
    $bActivePanel$$ ? this.$_activeContent$.$addChild$($tab$$5$$) : this.$_contentPane$.$addChildAt$($tab$$5$$, 0)
  }
};
D.$JSCompiler_StaticMethods_setMaxContainerHeight$$ = function $$JSCompiler_StaticMethods_setMaxContainerHeight$$$($JSCompiler_StaticMethods_setMaxContainerHeight$self$$, $height$$140$$) {
  if(!$JSCompiler_StaticMethods_setMaxContainerHeight$self$$.$_maxContainerHeight$ || $JSCompiler_StaticMethods_setMaxContainerHeight$self$$.$_maxContainerHeight$ < $height$$140$$) {
    $JSCompiler_StaticMethods_setMaxContainerHeight$self$$.$_maxContainerHeight$ = $height$$140$$
  }
};
D.$DvtPanelDrawer$$.prototype.$getDimensions$ = function $$DvtPanelDrawer$$$$$getDimensions$$($dim$$81_targetCoordinateSpace$$58$$) {
  $dim$$81_targetCoordinateSpace$$58$$ = D.$DvtPanelDrawer$$.$superclass$.$getDimensions$.call(this, $dim$$81_targetCoordinateSpace$$58$$);
  $dim$$81_targetCoordinateSpace$$58$$.$w$ /= 1.25;
  return $dim$$81_targetCoordinateSpace$$58$$
};
D.$DvtPanelDrawer$$.prototype.$getEventManager$ = (0,D.$JSCompiler_get$$)("$_eventManager$");
D.$DvtPanelDrawerTab$$ = function $$DvtPanelDrawerTab$$$($context$$583$$, $cmds$$28$$, $id$$279$$, $panelDrawer$$7$$) {
  this.Init($context$$583$$, $cmds$$28$$, $id$$279$$, $panelDrawer$$7$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtPanelDrawerTab$$, D.$DvtPath$$, "DvtPanelDrawerTab");
D.$JSCompiler_prototypeAlias$$ = D.$DvtPanelDrawerTab$$.prototype;
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($context$$584$$, $cmds$$29$$, $id$$280$$, $panelDrawer$$8$$) {
  D.$DvtPanelDrawerTab$$.$superclass$.Init.call(this, $context$$584$$, $cmds$$29$$, "pdcp_tab_" + $id$$280$$);
  this.$_panelDrawer$ = $panelDrawer$$8$$;
  this.$_isDisclosed$ = D.$JSCompiler_alias_FALSE$$;
  this.$_panelId$ = $id$$280$$
};
D.$JSCompiler_prototypeAlias$$.$HandleKeyboardEvent$ = function $$JSCompiler_prototypeAlias$$$$HandleKeyboardEvent$$($event$$732_mouseEvent$$6$$) {
  var $eventManager$$45_keyCode$$47$$ = $event$$732_mouseEvent$$6$$.keyCode;
  if(13 == $eventManager$$45_keyCode$$47$$ || 32 == $eventManager$$45_keyCode$$47$$) {
    var $eventManager$$45_keyCode$$47$$ = this.$_panelDrawer$.$getEventManager$(), $point$$45$$ = (0,D.$JSCompiler_StaticMethods_localToStage$$)(this, new D.$DvtPoint$$(0, 0));
    $event$$732_mouseEvent$$6$$ = D.$DvtSvgEventFactory$$.$generateMouseEventFromKeyboardEvent$($event$$732_mouseEvent$$6$$, $eventManager$$45_keyCode$$47$$.$_context$, $point$$45$$.x, $point$$45$$.y);
    $event$$732_mouseEvent$$6$$.target = this;
    $eventManager$$45_keyCode$$47$$.$PreOnClick$($event$$732_mouseEvent$$6$$)
  }
};
D.$JSCompiler_prototypeAlias$$.$isDisclosed$ = (0,D.$JSCompiler_get$$)("$_isDisclosed$");
D.$JSCompiler_prototypeAlias$$.$setDisclosed$ = function $$JSCompiler_prototypeAlias$$$$setDisclosed$$($bDisclosed$$12$$) {
  this.$_isDisclosed$ != $bDisclosed$$12$$ ? (this.$_isDisclosed$ = $bDisclosed$$12$$, this.$updateAccessibilityAttributes$()) : this.$_isDisclosed$ = $bDisclosed$$12$$
};
D.$JSCompiler_prototypeAlias$$.$getAriaLabel$ = function $$JSCompiler_prototypeAlias$$$$getAriaLabel$$() {
  var $states$$15$$ = [];
  $states$$15$$.push(this.$isDisclosed$() ? (0,D.$DvtBundle$getTranslatedString$$)("DvtUtilBundle", "STATE_EXPANDED") : (0,D.$DvtBundle$getTranslatedString$$)("DvtUtilBundle", "STATE_COLLAPSED"));
  return(0,D.$DvtDisplayable$generateAriaLabel$$)(this.$_panelDrawer$.$_panels$[this.$_panelId$].tooltip, $states$$15$$)
};
D.$JSCompiler_prototypeAlias$$.$addAccessibilityAttributes$ = function $$JSCompiler_prototypeAlias$$$$addAccessibilityAttributes$$() {
  this.$setAriaRole$("button");
  (0,D.$DvtAgent$deferAriaCreation$$)() || this.$setAriaProperty$("label", this.$getAriaLabel$())
};
D.$JSCompiler_prototypeAlias$$.$updateAccessibilityAttributes$ = function $$JSCompiler_prototypeAlias$$$$updateAccessibilityAttributes$$() {
  (0,D.$DvtAgent$deferAriaCreation$$)() || this.$setAriaProperty$("label", this.$getAriaLabel$())
};
D.$JSCompiler_prototypeAlias$$.$getKeyboardBoundingBox$ = function $$JSCompiler_prototypeAlias$$$$getKeyboardBoundingBox$$($targetCoordinateSpace$$59$$) {
  return this.$getDimensions$($targetCoordinateSpace$$59$$)
};
D.$JSCompiler_prototypeAlias$$.$getTargetElem$ = function $$JSCompiler_prototypeAlias$$$$getTargetElem$$() {
  return this.$getElem$()
};
D.$JSCompiler_prototypeAlias$$.$showKeyboardFocusEffect$ = function $$JSCompiler_prototypeAlias$$$$showKeyboardFocusEffect$$() {
  this.$_isShowingKeyboardFocusEffect$ = D.$JSCompiler_alias_TRUE$$;
  this.$_keyboardFocusEffect$ || this.$_createKeyboardFocusEffect$();
  this.$_keyboardFocusEffect$.show();
  (0,D.$JSCompiler_StaticMethods_setActiveElement$$)(this.$_context$, this)
};
D.$JSCompiler_prototypeAlias$$.$hideKeyboardFocusEffect$ = function $$JSCompiler_prototypeAlias$$$$hideKeyboardFocusEffect$$() {
  this.$_isShowingKeyboardFocusEffect$ = D.$JSCompiler_alias_FALSE$$;
  this.$_keyboardFocusEffect$ || this.$_createKeyboardFocusEffect$();
  this.$_keyboardFocusEffect$.$hide$()
};
D.$JSCompiler_prototypeAlias$$.$isShowingKeyboardFocusEffect$ = (0,D.$JSCompiler_get$$)("$_isShowingKeyboardFocusEffect$");
D.$JSCompiler_prototypeAlias$$.$getNextNavigable$ = function $$JSCompiler_prototypeAlias$$$$getNextNavigable$$($event$$733$$) {
  return this.$_panelDrawer$.$getEventManager$().$KeyboardHandler$.$getNextNavigable$(this, $event$$733$$)
};
D.$JSCompiler_prototypeAlias$$.$_createKeyboardFocusEffect$ = function $$JSCompiler_prototypeAlias$$$$_createKeyboardFocusEffect$$() {
  var $dim$$82$$ = this.$getDimensions$();
  this.$_keyboardFocusEffect$ = new D.$DvtKeyboardFocusEffect$$(this.$getCtx$(), this, new D.$DvtRectangle$$($dim$$82$$.x + 1, $dim$$82$$.y + 1, $dim$$82$$.$w$ - 2, $dim$$82$$.$h$ - 2), D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_TRUE$$)
};
D.$DvtPanelDrawerEventManager$$ = function $$DvtPanelDrawerEventManager$$$($context$$582$$, $callback$$141$$, $callbackObj$$95$$) {
  this.Init($context$$582$$, $callback$$141$$, $callbackObj$$95$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtPanelDrawerEventManager$$, D.$DvtEventManager$$, "DvtPanelDrawerEventManager");
D.$JSCompiler_prototypeAlias$$ = D.$DvtPanelDrawerEventManager$$.prototype;
D.$JSCompiler_prototypeAlias$$.$OnClick$ = function $$JSCompiler_prototypeAlias$$$$OnClick$$($event$$725$$) {
  var $obj$$336$$ = (0,D.$JSCompiler_StaticMethods_GetLogicalObject$$)(this, (0,D.$JSCompiler_StaticMethods_GetCurrentTargetForEvent$$)(this, $event$$725$$));
  D.$DvtPanelDrawerEventManager$$.$superclass$.$OnClick$.call(this, $event$$725$$);
  $obj$$336$$ && ($obj$$336$$.$HandleClick$ && $obj$$336$$.$HandleClick$($event$$725$$), $event$$725$$.stopPropagation())
};
D.$JSCompiler_prototypeAlias$$.$OnDblClickInternal$ = function $$JSCompiler_prototypeAlias$$$$OnDblClickInternal$$($event$$726$$) {
  var $obj$$337$$ = (0,D.$JSCompiler_StaticMethods_GetLogicalObject$$)(this, (0,D.$JSCompiler_StaticMethods_GetCurrentTargetForEvent$$)(this, $event$$726$$));
  $obj$$337$$ && ($obj$$337$$.$isDoubleClickable$ && ($obj$$337$$.$isDoubleClickable$() && $obj$$337$$.$HandleDblClick$) && $obj$$337$$.$HandleDblClick$($event$$726$$), $event$$726$$.stopPropagation())
};
D.$JSCompiler_prototypeAlias$$.$OnRollOver$ = function $$JSCompiler_prototypeAlias$$$$OnRollOver$$($event$$727$$) {
  D.$DvtPanelDrawerEventManager$$.$superclass$.$OnRollOver$.call(this, $event$$727$$);
  var $obj$$338$$ = (0,D.$JSCompiler_StaticMethods_GetLogicalObject$$)(this, (0,D.$JSCompiler_StaticMethods_GetCurrentTargetForEvent$$)(this, $event$$727$$));
  $obj$$338$$ && $obj$$338$$.$HandleRollOver$ && $obj$$338$$.$HandleRollOver$($event$$727$$)
};
D.$JSCompiler_prototypeAlias$$.$OnRollOut$ = function $$JSCompiler_prototypeAlias$$$$OnRollOut$$($event$$728$$) {
  D.$DvtPanelDrawerEventManager$$.$superclass$.$OnRollOut$.call(this, $event$$728$$);
  var $obj$$339$$ = (0,D.$JSCompiler_StaticMethods_GetLogicalObject$$)(this, (0,D.$JSCompiler_StaticMethods_GetCurrentTargetForEvent$$)(this, $event$$728$$));
  $obj$$339$$ && $obj$$339$$.$HandleRollOut$ && $obj$$339$$.$HandleRollOut$($event$$728$$)
};
D.$JSCompiler_prototypeAlias$$.$OnComponentTouchClick$ = function $$JSCompiler_prototypeAlias$$$$OnComponentTouchClick$$($event$$729$$) {
  var $obj$$340$$ = (0,D.$JSCompiler_StaticMethods_GetLogicalObject$$)(this, (0,D.$JSCompiler_StaticMethods_GetCurrentTargetForEvent$$)(this, $event$$729$$));
  D.$DvtPanelDrawerEventManager$$.$superclass$.$OnComponentTouchClick$.call(this, $event$$729$$);
  $obj$$340$$ && ($obj$$340$$.$HandleClick$ && $obj$$340$$.$HandleClick$($event$$729$$), $event$$729$$.stopPropagation())
};
D.$DvtPanelDrawerKeyboardHandler$$ = function $$DvtPanelDrawerKeyboardHandler$$$($manager$$26$$, $panelDrawer$$5$$) {
  this.Init($manager$$26$$, $panelDrawer$$5$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtPanelDrawerKeyboardHandler$$, D.$DvtKeyboardHandler$$, "DvtPanelDrawerKeyboardHandler");
D.$DvtPanelDrawerKeyboardHandler$$.prototype.Init = function $$DvtPanelDrawerKeyboardHandler$$$$Init$($manager$$27$$, $panelDrawer$$6$$) {
  D.$DvtPanelDrawerKeyboardHandler$$.$superclass$.Init.call(this, $manager$$27$$);
  this.$_panelDrawer$ = $panelDrawer$$6$$
};
D.$DvtPanelDrawerKeyboardHandler$$.prototype.$processKeyDown$ = function $$DvtPanelDrawerKeyboardHandler$$$$$processKeyDown$$($event$$730$$) {
  var $keyCode$$46_next$$14$$ = $event$$730$$.keyCode, $currentNavigable$$16$$ = this.$_eventManager$.$getFocus$();
  return 9 == $keyCode$$46_next$$14$$ ? ($keyCode$$46_next$$14$$ = D.$JSCompiler_alias_NULL$$, (0,D.$DvtEventManager$consumeEvent$$)($event$$730$$), $keyCode$$46_next$$14$$ = $currentNavigable$$16$$ ? $currentNavigable$$16$$ : this.$_panelDrawer$.$_tabs$[this.$_panelDrawer$.$_panelOrder$[0]]) : 13 == $keyCode$$46_next$$14$$ || 32 == $keyCode$$46_next$$14$$ ? ($currentNavigable$$16$$.$HandleKeyboardEvent$($event$$730$$), D.$JSCompiler_alias_NULL$$) : D.$DvtPanelDrawerKeyboardHandler$$.$superclass$.$processKeyDown$.call(this, 
  $event$$730$$)
};
D.$DvtPanelDrawerKeyboardHandler$$.prototype.$getNextNavigable$ = function $$DvtPanelDrawerKeyboardHandler$$$$$getNextNavigable$$($currentNavigable$$17$$, $event$$731$$) {
  if(!(40 == $event$$731$$.keyCode || 38 == $event$$731$$.keyCode)) {
    return $currentNavigable$$17$$
  }
  for(var $next$$15$$ = $currentNavigable$$17$$, $bForward$$10$$ = 40 == $event$$731$$.keyCode ? D.$JSCompiler_alias_TRUE$$ : D.$JSCompiler_alias_FALSE$$, $panelIds$$1$$ = this.$_panelDrawer$.$_panelOrder$, $panelIndex$$ = -1, $i$$779$$ = 0;$i$$779$$ < $panelIds$$1$$.length;$i$$779$$++) {
    if($currentNavigable$$17$$ == this.$_panelDrawer$.$_tabs$[$panelIds$$1$$[$i$$779$$]]) {
      $panelIndex$$ = $bForward$$10$$ ? $i$$779$$ == $panelIds$$1$$.length - 1 ? -1 : $i$$779$$ + 1 : 0 == $i$$779$$ ? -1 : $i$$779$$ - 1;
      break
    }
  }
  0 <= $panelIndex$$ && ($next$$15$$ = this.$_panelDrawer$.$_tabs$[$panelIds$$1$$[$panelIndex$$]]);
  return $next$$15$$
};
D.$DvtAccordion$$ = function $$DvtAccordion$$$($context$$562$$, $id$$259$$, $w$$64$$, $h$$62$$, $eventManager$$32$$, $images$$16$$, $styleMap$$89$$) {
  this.Init($context$$562$$, $id$$259$$, $w$$64$$, $h$$62$$, $eventManager$$32$$, $images$$16$$, $styleMap$$89$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtAccordion$$, D.$DvtContainer$$, "DvtAccordion");
D.$DvtAccordion$$.prototype.Init = function $$DvtAccordion$$$$Init$($context$$563$$, $id$$260$$, $w$$65$$, $h$$63$$, $eventManager$$33$$, $images$$17$$, $styleMap$$90$$) {
  D.$DvtAccordion$$.$superclass$.Init.call(this, $context$$563$$, D.$JSCompiler_alias_NULL$$, $id$$260$$);
  this.$_images$ = $images$$17$$;
  this.$_styleMap$ = (new D.$DvtAccordionDefaults$$).$calcOptions$($styleMap$$90$$);
  this.$_sections$ = {};
  this.$_sectionOrder$ = [];
  this.$_maxWidth$ = $w$$65$$;
  this.$_minWidth$ = 0;
  this.$_maxHeight$ = $h$$63$$;
  this.$_bExpandMany$ = this.$_bCollapseAll$ = D.$JSCompiler_alias_FALSE$$;
  this.$_eventManager$ = $eventManager$$33$$
};
D.$JSCompiler_StaticMethods_addSection$$ = function $$JSCompiler_StaticMethods_addSection$$$($JSCompiler_StaticMethods_addSection$self$$, $accordionSection_title$$18$$, $sectionContent$$3$$, $isActive$$1$$, $id$$261$$) {
  $id$$261$$ || ($id$$261$$ = "accordion_" + $accordionSection_title$$18$$.replace(/ /g, "_") + window.Math.floor(1E9 * window.Math.random()));
  $accordionSection_title$$18$$ = new D.$DvtAccordionSection$$($JSCompiler_StaticMethods_addSection$self$$.$getCtx$(), $sectionContent$$3$$, $accordionSection_title$$18$$, $isActive$$1$$, D.$JSCompiler_alias_TRUE$$, $JSCompiler_StaticMethods_addSection$self$$, $JSCompiler_StaticMethods_addSection$self$$.$_eventManager$, $id$$261$$, $JSCompiler_StaticMethods_addSection$self$$.$_images$, $JSCompiler_StaticMethods_addSection$self$$.$_styleMap$);
  $JSCompiler_StaticMethods_addSection$self$$.$_sections$[$id$$261$$] = $accordionSection_title$$18$$;
  $JSCompiler_StaticMethods_addSection$self$$.$_sectionOrder$.push($id$$261$$);
  $JSCompiler_StaticMethods_addSection$self$$.$addChild$($accordionSection_title$$18$$)
};
D.$DvtAccordion$$.prototype.$render$ = function $$DvtAccordion$$$$$render$$() {
  for(var $maxSectionWidth$$ = (0,D.$JSCompiler_StaticMethods_getMaxSectionWidth$$)(this), $bHasActive$$ = D.$JSCompiler_alias_FALSE$$, $i$$763$$ = 0;$i$$763$$ < this.$_sectionOrder$.length;$i$$763$$++) {
    var $section$$11$$ = (0,D.$JSCompiler_StaticMethods_getSectionByIndex$$)(this, $i$$763$$);
    $section$$11$$.$render$($maxSectionWidth$$);
    $bHasActive$$ && !this.$_bExpandMany$ && $section$$11$$.setActive(D.$JSCompiler_alias_FALSE$$);
    $section$$11$$.$_isActive$ && $section$$11$$.$_isCollapsible$ && ($bHasActive$$ = D.$JSCompiler_alias_TRUE$$)
  }
  !$bHasActive$$ && (0 < this.$_sectionOrder$.length && !this.$_bCollapseAll$) && (0,D.$JSCompiler_StaticMethods_getSectionByIndex$$)(this, 0).setActive(D.$JSCompiler_alias_TRUE$$);
  (0,D.$JSCompiler_StaticMethods__drawSections$$)(this)
};
D.$DvtAccordion$$.prototype.$setMaxHeight$ = (0,D.$JSCompiler_set$$)("$_maxHeight$");
D.$DvtAccordion$$.prototype.$setMaxWidth$ = (0,D.$JSCompiler_set$$)("$_maxWidth$");
D.$DvtAccordion$$.prototype.update = function $$DvtAccordion$$$$update$($activeSection_activeSectionId$$1$$) {
  $activeSection_activeSectionId$$1$$ = this.$_sections$[$activeSection_activeSectionId$$1$$];
  var $JSCompiler_temp$$218_currActiveState_i$$764_section$$inline_7941$$ = $activeSection_activeSectionId$$1$$.$_isActive$;
  if($JSCompiler_temp$$218_currActiveState_i$$764_section$$inline_7941$$) {
    if($JSCompiler_temp$$218_currActiveState_i$$764_section$$inline_7941$$) {
      if($activeSection_activeSectionId$$1$$.$_isCollapsible$) {
        if(this.$_bCollapseAll$) {
          $JSCompiler_temp$$218_currActiveState_i$$764_section$$inline_7941$$ = D.$JSCompiler_alias_TRUE$$
        }else {
          for(var $expandedSectionCounter$$inline_7942$$ = 0, $i$$inline_7943$$ = 0;$i$$inline_7943$$ < this.$_sectionOrder$.length;$i$$inline_7943$$++) {
            $JSCompiler_temp$$218_currActiveState_i$$764_section$$inline_7941$$ = (0,D.$JSCompiler_StaticMethods_getSectionByIndex$$)(this, $i$$inline_7943$$), $JSCompiler_temp$$218_currActiveState_i$$764_section$$inline_7941$$.$_isActive$ && $expandedSectionCounter$$inline_7942$$++
          }
          $JSCompiler_temp$$218_currActiveState_i$$764_section$$inline_7941$$ = 1 < $expandedSectionCounter$$inline_7942$$
        }
      }else {
        $JSCompiler_temp$$218_currActiveState_i$$764_section$$inline_7941$$ = D.$JSCompiler_alias_FALSE$$
      }
    }
    $JSCompiler_temp$$218_currActiveState_i$$764_section$$inline_7941$$ && $activeSection_activeSectionId$$1$$.setActive(D.$JSCompiler_alias_FALSE$$)
  }else {
    if(!this.$_bExpandMany$) {
      for($JSCompiler_temp$$218_currActiveState_i$$764_section$$inline_7941$$ = 0;$JSCompiler_temp$$218_currActiveState_i$$764_section$$inline_7941$$ < this.$_sectionOrder$.length;$JSCompiler_temp$$218_currActiveState_i$$764_section$$inline_7941$$++) {
        (0,D.$JSCompiler_StaticMethods_getSectionByIndex$$)(this, $JSCompiler_temp$$218_currActiveState_i$$764_section$$inline_7941$$).setActive(D.$JSCompiler_alias_FALSE$$)
      }
    }
    $activeSection_activeSectionId$$1$$.setActive(D.$JSCompiler_alias_TRUE$$)
  }
  (0,D.$JSCompiler_StaticMethods__drawSections$$)(this)
};
D.$JSCompiler_StaticMethods_getMaxSectionWidth$$ = function $$JSCompiler_StaticMethods_getMaxSectionWidth$$$($JSCompiler_StaticMethods_getMaxSectionWidth$self$$) {
  if(!$JSCompiler_StaticMethods_getMaxSectionWidth$self$$.$_maxSectionWidth$) {
    for(var $maxSectionWidth$$1$$ = 0, $paddingX$$1$$ = $JSCompiler_StaticMethods_getMaxSectionWidth$self$$.$_styleMap$.paddingX, $i$$765$$ = 0;$i$$765$$ < $JSCompiler_StaticMethods_getMaxSectionWidth$self$$.$_sectionOrder$.length;$i$$765$$++) {
      var $secWidth_section$$12$$ = (0,D.$JSCompiler_StaticMethods_getSectionByIndex$$)($JSCompiler_StaticMethods_getMaxSectionWidth$self$$, $i$$765$$), $JSCompiler_StaticMethods_GetTitleDimensions$self$$inline_7945_dim$$73$$;
      $JSCompiler_StaticMethods_GetTitleDimensions$self$$inline_7945_dim$$73$$ = $secWidth_section$$12$$;
      if(!$JSCompiler_StaticMethods_GetTitleDimensions$self$$inline_7945_dim$$73$$.$_titleDim$) {
        var $dim$$inline_7947_text$$inline_7946$$ = new D.$DvtOutputText$$($JSCompiler_StaticMethods_GetTitleDimensions$self$$inline_7945_dim$$73$$.$_context$, $JSCompiler_StaticMethods_GetTitleDimensions$self$$inline_7945_dim$$73$$.$_title$);
        $dim$$inline_7947_text$$inline_7946$$.$setCSSStyle$($JSCompiler_StaticMethods_GetTitleDimensions$self$$inline_7945_dim$$73$$.$_titleStyle$);
        if($dim$$inline_7947_text$$inline_7946$$ = $dim$$inline_7947_text$$inline_7946$$.$measureDimensions$()) {
          $dim$$inline_7947_text$$inline_7946$$.$w$ = $dim$$inline_7947_text$$inline_7946$$.$w$ + $JSCompiler_StaticMethods_GetTitleDimensions$self$$inline_7945_dim$$73$$.$_imageWidth$ + $JSCompiler_StaticMethods_GetTitleDimensions$self$$inline_7945_dim$$73$$.$_textPadding$
        }
        $JSCompiler_StaticMethods_GetTitleDimensions$self$$inline_7945_dim$$73$$.$_titleDim$ = $dim$$inline_7947_text$$inline_7946$$
      }
      $JSCompiler_StaticMethods_GetTitleDimensions$self$$inline_7945_dim$$73$$ = $JSCompiler_StaticMethods_GetTitleDimensions$self$$inline_7945_dim$$73$$.$_titleDim$;
      $JSCompiler_StaticMethods_GetTitleDimensions$self$$inline_7945_dim$$73$$.$w$ > $maxSectionWidth$$1$$ && ($maxSectionWidth$$1$$ = $JSCompiler_StaticMethods_GetTitleDimensions$self$$inline_7945_dim$$73$$.$w$);
      $secWidth_section$$12$$ = $secWidth_section$$12$$.$getContentDimensions$().$w$ + 2 * $paddingX$$1$$;
      $secWidth_section$$12$$ > $maxSectionWidth$$1$$ && ($maxSectionWidth$$1$$ = $secWidth_section$$12$$)
    }
    $maxSectionWidth$$1$$ = window.Math.min($maxSectionWidth$$1$$, $JSCompiler_StaticMethods_getMaxSectionWidth$self$$.$_maxWidth$);
    $maxSectionWidth$$1$$ = window.Math.max($maxSectionWidth$$1$$, $JSCompiler_StaticMethods_getMaxSectionWidth$self$$.$_minWidth$);
    $JSCompiler_StaticMethods_getMaxSectionWidth$self$$.$_maxSectionWidth$ = $maxSectionWidth$$1$$
  }
  return $JSCompiler_StaticMethods_getMaxSectionWidth$self$$.$_maxSectionWidth$
};
D.$DvtAccordion$$.prototype.$getExpandedHeight$ = function $$DvtAccordion$$$$$getExpandedHeight$$() {
  if(!this.$_maxHeight$) {
    for(var $maxCollapsibleSectionHeight$$ = 0, $maxFixedSectionHeight$$ = 0, $i$$766$$ = 0;$i$$766$$ < this.$_sectionOrder$.length;$i$$766$$++) {
      var $section$$13$$ = (0,D.$JSCompiler_StaticMethods_getSectionByIndex$$)(this, $i$$766$$), $JSCompiler_StaticMethods_getExpandedDimensions$self$$inline_7949_sectionHeight$$ = $section$$13$$, $dim$$inline_7950$$ = D.$JSCompiler_alias_NULL$$;
      0 > $JSCompiler_StaticMethods_getExpandedDimensions$self$$inline_7949_sectionHeight$$.$getChildIndex$($JSCompiler_StaticMethods_getExpandedDimensions$self$$inline_7949_sectionHeight$$.$_sectionContent$) ? ($JSCompiler_StaticMethods_getExpandedDimensions$self$$inline_7949_sectionHeight$$.$addChild$($JSCompiler_StaticMethods_getExpandedDimensions$self$$inline_7949_sectionHeight$$.$_sectionContent$), $JSCompiler_StaticMethods_getExpandedDimensions$self$$inline_7949_sectionHeight$$.$_sectionContent$.$setTranslateX$($JSCompiler_StaticMethods_getExpandedDimensions$self$$inline_7949_sectionHeight$$.$_paddingX$), 
      $JSCompiler_StaticMethods_getExpandedDimensions$self$$inline_7949_sectionHeight$$.$_sectionContent$.$setTranslateY$($JSCompiler_StaticMethods_getExpandedDimensions$self$$inline_7949_sectionHeight$$.$_headerHeight$ + $JSCompiler_StaticMethods_getExpandedDimensions$self$$inline_7949_sectionHeight$$.$_paddingY$), $dim$$inline_7950$$ = $JSCompiler_StaticMethods_getExpandedDimensions$self$$inline_7949_sectionHeight$$.$getDimensionsWithStroke$(), $JSCompiler_StaticMethods_getExpandedDimensions$self$$inline_7949_sectionHeight$$.removeChild($JSCompiler_StaticMethods_getExpandedDimensions$self$$inline_7949_sectionHeight$$.$_sectionContent$)) : 
      $dim$$inline_7950$$ = $JSCompiler_StaticMethods_getExpandedDimensions$self$$inline_7949_sectionHeight$$.$getDimensionsWithStroke$();
      $JSCompiler_StaticMethods_getExpandedDimensions$self$$inline_7949_sectionHeight$$ = $dim$$inline_7950$$.$h$;
      if($section$$13$$.$_isCollapsible$ && $JSCompiler_StaticMethods_getExpandedDimensions$self$$inline_7949_sectionHeight$$ > $maxCollapsibleSectionHeight$$) {
        $maxCollapsibleSectionHeight$$ = $JSCompiler_StaticMethods_getExpandedDimensions$self$$inline_7949_sectionHeight$$
      }else {
        if(!$section$$13$$.$_isCollapsible$ || this.$_bExpandMany$) {
          $maxFixedSectionHeight$$ += $JSCompiler_StaticMethods_getExpandedDimensions$self$$inline_7949_sectionHeight$$
        }
      }
    }
    this.$_maxHeight$ = $maxCollapsibleSectionHeight$$ + $maxFixedSectionHeight$$
  }
  return this.$_maxHeight$
};
D.$JSCompiler_StaticMethods_getSectionByIndex$$ = function $$JSCompiler_StaticMethods_getSectionByIndex$$$($JSCompiler_StaticMethods_getSectionByIndex$self$$, $index$$235$$) {
  return 0 <= $index$$235$$ && $index$$235$$ < $JSCompiler_StaticMethods_getSectionByIndex$self$$.$_sectionOrder$.length ? $JSCompiler_StaticMethods_getSectionByIndex$self$$.$_sections$[$JSCompiler_StaticMethods_getSectionByIndex$self$$.$_sectionOrder$[$index$$235$$]] : D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_StaticMethods__drawSections$$ = function $$JSCompiler_StaticMethods__drawSections$$$($JSCompiler_StaticMethods__drawSections$self$$) {
  for(var $currY$$21_dims$$62$$ = 0, $i$$768$$ = 0;$i$$768$$ < $JSCompiler_StaticMethods__drawSections$self$$.$_sectionOrder$.length;$i$$768$$++) {
    var $section$$15$$ = (0,D.$JSCompiler_StaticMethods_getSectionByIndex$$)($JSCompiler_StaticMethods__drawSections$self$$, $i$$768$$);
    $section$$15$$.$setTranslateY$($currY$$21_dims$$62$$);
    $section$$15$$.$_isActive$ ? ($section$$15$$.expand(), $currY$$21_dims$$62$$ += $section$$15$$.$getDimensionsWithStroke$().$h$, $currY$$21_dims$$62$$ += $JSCompiler_StaticMethods__drawSections$self$$.$_styleMap$.paddingY) : ($section$$15$$.collapse(), $currY$$21_dims$$62$$ += $JSCompiler_StaticMethods__drawSections$self$$.$_styleMap$.sectionHeader.headerHeight)
  }
  $currY$$21_dims$$62$$ = $JSCompiler_StaticMethods__drawSections$self$$.$getDimensionsWithStroke$();
  $JSCompiler_StaticMethods__drawSections$self$$.$FireListener$(new D.$DvtResizeEvent$$($currY$$21_dims$$62$$.$w$, $currY$$21_dims$$62$$.$h$, 0, 0))
};
D.$DvtAccordion$$.prototype.$getSections$ = function $$DvtAccordion$$$$$getSections$$() {
  for(var $sections$$5$$ = [], $i$$769$$ = 0;$i$$769$$ < this.$_sectionOrder$.length;$i$$769$$++) {
    $sections$$5$$.push((0,D.$JSCompiler_StaticMethods_getSectionByIndex$$)(this, $i$$769$$))
  }
  return $sections$$5$$
};
D.$DvtAccordionSection$$ = function $$DvtAccordionSection$$$($context$$564$$, $section$$16$$, $title$$19$$, $isActive$$2$$, $isCollapsible$$2$$, $parent$$80$$, $eventManager$$34$$, $id$$262$$, $images$$18$$, $styleMap$$91$$) {
  this.Init($context$$564$$, $section$$16$$, $title$$19$$, $isActive$$2$$, $isCollapsible$$2$$, $parent$$80$$, $eventManager$$34$$, $id$$262$$, $images$$18$$, $styleMap$$91$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtAccordionSection$$, D.$DvtContainer$$, "DvtAccordionSection");
D.$JSCompiler_prototypeAlias$$ = D.$DvtAccordionSection$$.prototype;
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($context$$565$$, $section$$17$$, $title$$20$$, $isActive$$3$$, $isCollapsible$$3$$, $parent$$81$$, $eventManager$$35$$, $id$$263$$, $images$$19$$, $styleMap$$92$$) {
  D.$DvtAccordionSection$$.$superclass$.Init.call(this, $context$$565$$, D.$JSCompiler_alias_NULL$$, $id$$263$$);
  this.$_parent$ = $parent$$81$$;
  this.$_images$ = $images$$19$$;
  this.$_title$ = $title$$20$$;
  this.$_id$ = $id$$263$$;
  this.$_sectionContent$ = $section$$17$$;
  this.$_collapsedBtn$ = this.$_expandedBtn$ = D.$JSCompiler_alias_NULL$$;
  this.$_isActive$ = (this.$_isCollapsible$ = $isCollapsible$$3$$) ? $isActive$$3$$ : D.$JSCompiler_alias_TRUE$$;
  this.$_eventManager$ = $eventManager$$35$$;
  this.$_styleMap$ = $styleMap$$92$$;
  this.$_headerHeight$ = this.$_styleMap$.sectionHeader.headerHeight;
  this.$_paddingX$ = this.$_styleMap$.paddingX;
  this.$_paddingY$ = this.$_styleMap$.paddingY;
  this.$_titleStyle$ = this.$_styleMap$.sectionHeader.styleEna;
  this.$_imageWidth$ = this.$_styleMap$.sectionHeader.imageWidth;
  this.$_imageHeight$ = this.$_styleMap$.sectionHeader.imageHeight;
  this.$_textPadding$ = this.$_styleMap$.sectionHeader.textPadding
};
D.$JSCompiler_prototypeAlias$$.getId = (0,D.$JSCompiler_get$$)("$_id$");
D.$JSCompiler_prototypeAlias$$.$getTitle$ = (0,D.$JSCompiler_get$$)("$_title$");
D.$JSCompiler_prototypeAlias$$.setActive = (0,D.$JSCompiler_set$$)("$_isActive$");
D.$JSCompiler_prototypeAlias$$.$getContentDimensions$ = function $$JSCompiler_prototypeAlias$$$$getContentDimensions$$() {
  var $dim$$74$$ = D.$JSCompiler_alias_NULL$$;
  0 > this.$getChildIndex$(this.$_sectionContent$) ? (this.$addChild$(this.$_sectionContent$), $dim$$74$$ = this.$_sectionContent$.$getDimensions$(), this.removeChild(this.$_sectionContent$)) : $dim$$74$$ = this.$_sectionContent$.$getDimensions$();
  return $dim$$74$$
};
D.$JSCompiler_prototypeAlias$$.$render$ = function $$JSCompiler_prototypeAlias$$$$render$$($base$$inline_7959_width$$150$$) {
  var $height$$inline_7954_text$$inline_7960$$ = this.$_headerHeight$;
  if(this.$_isCollapsible$) {
    var $ariaLabel$$inline_7958_ena$$inline_7955$$, $ovr$$inline_7956$$, $dwn$$inline_7957$$;
    this.$_images$.$getAttr$ ? ($ariaLabel$$inline_7958_ena$$inline_7955$$ = (0,D.$JSCompiler_StaticMethods__createHeaderState$$)(this, 0, this.$_images$.$getAttr$("sectionExpEna"), this.$_title$, $base$$inline_7959_width$$150$$, $height$$inline_7954_text$$inline_7960$$), $ovr$$inline_7956$$ = (0,D.$JSCompiler_StaticMethods__createHeaderState$$)(this, 1, this.$_images$.$getAttr$("sectionExpOvr"), this.$_title$, $base$$inline_7959_width$$150$$, $height$$inline_7954_text$$inline_7960$$), $dwn$$inline_7957$$ = 
    (0,D.$JSCompiler_StaticMethods__createHeaderState$$)(this, 2, this.$_images$.$getAttr$("sectionExpDwn"), this.$_title$, $base$$inline_7959_width$$150$$, $height$$inline_7954_text$$inline_7960$$)) : ($ariaLabel$$inline_7958_ena$$inline_7955$$ = (0,D.$JSCompiler_StaticMethods__createHeaderState$$)(this, 0, this.$_images$.sectionExpEna, this.$_title$, $base$$inline_7959_width$$150$$, $height$$inline_7954_text$$inline_7960$$), $ovr$$inline_7956$$ = (0,D.$JSCompiler_StaticMethods__createHeaderState$$)(this, 
    1, this.$_images$.sectionExpOvr, this.$_title$, $base$$inline_7959_width$$150$$, $height$$inline_7954_text$$inline_7960$$), $dwn$$inline_7957$$ = (0,D.$JSCompiler_StaticMethods__createHeaderState$$)(this, 2, this.$_images$.sectionExpDwn, this.$_title$, $base$$inline_7959_width$$150$$, $height$$inline_7954_text$$inline_7960$$));
    this.$_expandedBtn$ = new D.$DvtButton$$(this.$_context$, $ariaLabel$$inline_7958_ena$$inline_7955$$, $ovr$$inline_7956$$, $dwn$$inline_7957$$);
    this.$_expandedBtn$.$setAriaRole$("button");
    $ariaLabel$$inline_7958_ena$$inline_7955$$ = (0,D.$DvtDisplayable$generateAriaLabel$$)(this.$_title$, [(0,D.$DvtBundle$getTranslatedString$$)("DvtUtilBundle", "STATE_EXPANDED")]);
    this.$_expandedBtn$.$setAriaProperty$("label", $ariaLabel$$inline_7958_ena$$inline_7955$$);
    this.$_images$.$getAttr$ ? ($ariaLabel$$inline_7958_ena$$inline_7955$$ = (0,D.$JSCompiler_StaticMethods__createHeaderState$$)(this, 0, this.$_images$.$getAttr$("sectionColEna"), this.$_title$, $base$$inline_7959_width$$150$$, $height$$inline_7954_text$$inline_7960$$), $ovr$$inline_7956$$ = (0,D.$JSCompiler_StaticMethods__createHeaderState$$)(this, 1, this.$_images$.$getAttr$("sectionColOvr"), this.$_title$, $base$$inline_7959_width$$150$$, $height$$inline_7954_text$$inline_7960$$), $dwn$$inline_7957$$ = 
    (0,D.$JSCompiler_StaticMethods__createHeaderState$$)(this, 2, this.$_images$.$getAttr$("sectionColDwn"), this.$_title$, $base$$inline_7959_width$$150$$, $height$$inline_7954_text$$inline_7960$$)) : ($ariaLabel$$inline_7958_ena$$inline_7955$$ = (0,D.$JSCompiler_StaticMethods__createHeaderState$$)(this, 0, this.$_images$.sectionColEna, this.$_title$, $base$$inline_7959_width$$150$$, $height$$inline_7954_text$$inline_7960$$), $ovr$$inline_7956$$ = (0,D.$JSCompiler_StaticMethods__createHeaderState$$)(this, 
    1, this.$_images$.sectionColOvr, this.$_title$, $base$$inline_7959_width$$150$$, $height$$inline_7954_text$$inline_7960$$), $dwn$$inline_7957$$ = (0,D.$JSCompiler_StaticMethods__createHeaderState$$)(this, 2, this.$_images$.sectionColDwn, this.$_title$, $base$$inline_7959_width$$150$$, $height$$inline_7954_text$$inline_7960$$));
    this.$_collapsedBtn$ = new D.$DvtButton$$(this.$_context$, $ariaLabel$$inline_7958_ena$$inline_7955$$, $ovr$$inline_7956$$, $dwn$$inline_7957$$);
    this.$_collapsedBtn$.$setAriaRole$("button");
    $ariaLabel$$inline_7958_ena$$inline_7955$$ = (0,D.$DvtDisplayable$generateAriaLabel$$)(this.$_title$, [(0,D.$DvtBundle$getTranslatedString$$)("DvtUtilBundle", "STATE_COLLAPSED")]);
    this.$_collapsedBtn$.$setAriaProperty$("label", $ariaLabel$$inline_7958_ena$$inline_7955$$);
    this.$_eventManager$.$associate$(this.$_expandedBtn$, this);
    this.$_eventManager$.$associate$(this.$_collapsedBtn$, this)
  }else {
    $base$$inline_7959_width$$150$$ = (0,D.$JSCompiler_StaticMethods__createButtonBase$$)(this, 3, $base$$inline_7959_width$$150$$, $height$$inline_7954_text$$inline_7960$$), $height$$inline_7954_text$$inline_7960$$ = (0,D.$JSCompiler_StaticMethods__createButtonText$$)(this, this.$_title$), this.$_header$ = new D.$DvtContainer$$(this.$_context$), this.$_header$.$addChild$($base$$inline_7959_width$$150$$), this.$_header$.$addChild$($height$$inline_7954_text$$inline_7960$$)
  }
  this.$_isCollapsible$ ? this.$_isActive$ ? (this.$addChildAt$(this.$_expandedBtn$, 0), this.$addChild$(this.$_sectionContent$), this.$_sectionContent$.$setTranslateX$(this.$_paddingX$), this.$_sectionContent$.$setTranslateY$(this.$_headerHeight$ + this.$_paddingY$)) : this.$addChild$(this.$_collapsedBtn$) : (this.$addChildAt$(this.$_header$, 0), this.$addChild$(this.$_sectionContent$), this.$_sectionContent$.$setTranslateX$(this.$_paddingX$), this.$_sectionContent$.$setTranslateY$(this.$_headerHeight$ + 
  this.$_paddingY$))
};
D.$JSCompiler_prototypeAlias$$.collapse = function $$JSCompiler_prototypeAlias$$$collapse$() {
  this.$_isCollapsible$ && (0 <= this.$getChildIndex$(this.$_expandedBtn$) && this.removeChild(this.$_expandedBtn$), 0 <= this.$getChildIndex$(this.$_sectionContent$) && this.removeChild(this.$_sectionContent$), this.$addChild$(this.$_collapsedBtn$), this.setActive(D.$JSCompiler_alias_FALSE$$), this.$isShowingKeyboardFocusEffect$() && this.$showKeyboardFocusEffect$())
};
D.$JSCompiler_prototypeAlias$$.expand = function $$JSCompiler_prototypeAlias$$$expand$() {
  0 <= this.$getChildIndex$(this.$_collapsedBtn$) && this.removeChild(this.$_collapsedBtn$);
  this.$addChild$(this.$_expandedBtn$);
  this.$addChild$(this.$_sectionContent$);
  this.$_sectionContent$.$setTranslateX$(this.$_paddingX$);
  this.$_sectionContent$.$setTranslateY$(this.$_headerHeight$ + this.$_paddingY$);
  this.setActive(D.$JSCompiler_alias_TRUE$$);
  this.$isShowingKeyboardFocusEffect$() && this.$showKeyboardFocusEffect$()
};
D.$JSCompiler_StaticMethods__createHeaderState$$ = function $$JSCompiler_StaticMethods__createHeaderState$$$($JSCompiler_StaticMethods__createHeaderState$self$$, $base$$6_state$$91$$, $image$$20_uri$$21$$, $label$$73_text$$106$$, $ww$$115$$, $dim$$78_hh$$99$$) {
  var $imageWidth$$ = $JSCompiler_StaticMethods__createHeaderState$self$$.$_imageWidth$, $imageHeight$$ = $JSCompiler_StaticMethods__createHeaderState$self$$.$_imageHeight$, $imageOffsetY$$ = ($JSCompiler_StaticMethods__createHeaderState$self$$.$_headerHeight$ - $imageHeight$$) / 2, $buttonState$$4$$ = new D.$DvtContainer$$($JSCompiler_StaticMethods__createHeaderState$self$$.$_context$);
  $base$$6_state$$91$$ = (0,D.$JSCompiler_StaticMethods__createButtonBase$$)($JSCompiler_StaticMethods__createHeaderState$self$$, $base$$6_state$$91$$, $ww$$115$$, $dim$$78_hh$$99$$);
  $buttonState$$4$$.$addChild$($base$$6_state$$91$$);
  ($image$$20_uri$$21$$ = $image$$20_uri$$21$$ ? new D.$DvtImage$$($JSCompiler_StaticMethods__createHeaderState$self$$.$_context$, $image$$20_uri$$21$$, 0, $imageOffsetY$$, $imageWidth$$, $imageHeight$$) : D.$JSCompiler_alias_NULL$$) && $buttonState$$4$$.$addChild$($image$$20_uri$$21$$);
  $label$$73_text$$106$$ = (0,D.$JSCompiler_StaticMethods__createButtonText$$)($JSCompiler_StaticMethods__createHeaderState$self$$, $label$$73_text$$106$$, $ww$$115$$ - $imageWidth$$ - 0, $dim$$78_hh$$99$$, $buttonState$$4$$);
  (0,D.$DvtAgent$isRightToLeft$$)($JSCompiler_StaticMethods__createHeaderState$self$$.$_context$) ? ($dim$$78_hh$$99$$ = $label$$73_text$$106$$.$measureDimensions$(), $label$$73_text$$106$$.$setTranslateX$($ww$$115$$ - $dim$$78_hh$$99$$.$w$ - $imageWidth$$), $image$$20_uri$$21$$ && $image$$20_uri$$21$$.$setTranslateX$($ww$$115$$ - $imageWidth$$)) : $label$$73_text$$106$$.$setTranslateX$($imageWidth$$);
  $JSCompiler_StaticMethods__createHeaderState$self$$.$_keyboardFocusEffect$ || $JSCompiler_StaticMethods__createHeaderState$self$$.$_createKeyboardFocusEffect$($image$$20_uri$$21$$ ? $image$$20_uri$$21$$ : $label$$73_text$$106$$);
  return $buttonState$$4$$
};
D.$JSCompiler_StaticMethods__createButtonText$$ = function $$JSCompiler_StaticMethods__createButtonText$$$($JSCompiler_StaticMethods__createButtonText$self$$, $dims$$63_label$$74$$, $ww$$116$$, $hh$$100$$, $container$$169$$) {
  var $text$$107$$ = D.$JSCompiler_alias_NULL$$;
  if($dims$$63_label$$74$$) {
    $text$$107$$ = new D.$DvtOutputText$$($JSCompiler_StaticMethods__createButtonText$self$$.$_context$, $dims$$63_label$$74$$);
    $text$$107$$.$setCSSStyle$($JSCompiler_StaticMethods__createButtonText$self$$.$_titleStyle$);
    D.$DvtTextUtils$$.$fitText$($text$$107$$, $ww$$116$$, $hh$$100$$, $container$$169$$);
    $dims$$63_label$$74$$ = $text$$107$$.$measureDimensions$();
    if(!$JSCompiler_StaticMethods__createButtonText$self$$.$_titleDim$ || $JSCompiler_StaticMethods__createButtonText$self$$.$_titleDim$.$w$ < $dims$$63_label$$74$$.$w$ || $JSCompiler_StaticMethods__createButtonText$self$$.$_titleDim$.$h$ < $dims$$63_label$$74$$.$h$) {
      $JSCompiler_StaticMethods__createButtonText$self$$.$_titleDim$ = $dims$$63_label$$74$$
    }
    $text$$107$$.$setTranslateY$(($JSCompiler_StaticMethods__createButtonText$self$$.$_headerHeight$ - $dims$$63_label$$74$$.$h$) / 2)
  }
  return $text$$107$$
};
D.$JSCompiler_StaticMethods__createButtonBase$$ = function $$JSCompiler_StaticMethods__createButtonBase$$$($JSCompiler_StaticMethods__createButtonBase$self_base$$7$$, $state$$93$$, $ww$$117$$, $hh$$101$$) {
  var $style$$106$$ = D.$JSCompiler_alias_NULL$$;
  switch($state$$93$$) {
    case 1:
      $style$$106$$ = $JSCompiler_StaticMethods__createButtonBase$self_base$$7$$.$_styleMap$.sectionHeader.styleOvr;
      break;
    case 2:
      $style$$106$$ = $JSCompiler_StaticMethods__createButtonBase$self_base$$7$$.$_styleMap$.sectionHeader.styleDwn;
      break;
    case 3:
      $style$$106$$ = $JSCompiler_StaticMethods__createButtonBase$self_base$$7$$.$_styleMap$.sectionHeader.styleDis;
      break;
    default:
      $style$$106$$ = $JSCompiler_StaticMethods__createButtonBase$self_base$$7$$.$_styleMap$.sectionHeader.styleEna
  }
  $JSCompiler_StaticMethods__createButtonBase$self_base$$7$$ = new D.$DvtRect$$($JSCompiler_StaticMethods__createButtonBase$self_base$$7$$.$_context$, 0, 0, $ww$$117$$, $hh$$101$$);
  $JSCompiler_StaticMethods__createButtonBase$self_base$$7$$.$setStroke$((0,D.$DvtAccordionSection$_getStroke$$)($style$$106$$));
  $JSCompiler_StaticMethods__createButtonBase$self_base$$7$$.$setFill$((0,D.$DvtAccordionSection$_getFill$$)($style$$106$$));
  return $JSCompiler_StaticMethods__createButtonBase$self_base$$7$$
};
D.$DvtAccordionSection$_getFill$$ = function $$DvtAccordionSection$_getFill$$$($angle$$53_gradObj$$6_style$$107$$) {
  var $arColors$$33_color$$84$$ = $angle$$53_gradObj$$6_style$$107$$.$getStyle$("background-color");
  $angle$$53_gradObj$$6_style$$107$$ = (0,D.$JSCompiler_StaticMethods_getBackgroundImage$$)($angle$$53_gradObj$$6_style$$107$$);
  var $arAlphas$$31_fill$$71$$ = D.$JSCompiler_alias_NULL$$;
  if($angle$$53_gradObj$$6_style$$107$$ && $angle$$53_gradObj$$6_style$$107$$ instanceof D.$DvtCSSGradient$$) {
    var $arColors$$33_color$$84$$ = $angle$$53_gradObj$$6_style$$107$$.$_arColors$, $arAlphas$$31_fill$$71$$ = $angle$$53_gradObj$$6_style$$107$$.$_arAlphas$, $arStops$$26$$ = $angle$$53_gradObj$$6_style$$107$$.$_arRatios$;
    $angle$$53_gradObj$$6_style$$107$$ = $angle$$53_gradObj$$6_style$$107$$.$getAngle$();
    $arAlphas$$31_fill$$71$$ = new D.$DvtLinearGradientFill$$($angle$$53_gradObj$$6_style$$107$$, $arColors$$33_color$$84$$, $arAlphas$$31_fill$$71$$, $arStops$$26$$)
  }else {
    $arColors$$33_color$$84$$ && ($arAlphas$$31_fill$$71$$ = new D.$DvtSolidFill$$($arColors$$33_color$$84$$, 1))
  }
  return $arAlphas$$31_fill$$71$$
};
D.$DvtAccordionSection$_getStroke$$ = function $$DvtAccordionSection$_getStroke$$$($color$$85_style$$108$$) {
  $color$$85_style$$108$$ = $color$$85_style$$108$$.$getStyle$("border-color");
  return new D.$DvtSolidStroke$$($color$$85_style$$108$$, 1, 1)
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtAccordionSection$$.prototype;
D.$JSCompiler_prototypeAlias$$.$getKeyboardBoundingBox$ = function $$JSCompiler_prototypeAlias$$$$getKeyboardBoundingBox$$() {
  var $obj$$330_stageP2$$5$$ = this.$_isActive$ ? this.$_expandedBtn$ : this.$_collapsedBtn$, $bounds$$144$$ = $obj$$330_stageP2$$5$$.$getDimensions$(), $stageP1$$5$$ = (0,D.$JSCompiler_StaticMethods_localToStage$$)($obj$$330_stageP2$$5$$, new D.$DvtPoint$$($bounds$$144$$.x, $bounds$$144$$.y)), $obj$$330_stageP2$$5$$ = (0,D.$JSCompiler_StaticMethods_localToStage$$)($obj$$330_stageP2$$5$$, new D.$DvtPoint$$($bounds$$144$$.x + $bounds$$144$$.$w$, $bounds$$144$$.y + $bounds$$144$$.$h$));
  return new D.$DvtRectangle$$($stageP1$$5$$.x, $stageP1$$5$$.y, $obj$$330_stageP2$$5$$.x - $stageP1$$5$$.x, $obj$$330_stageP2$$5$$.y - $stageP1$$5$$.y)
};
D.$JSCompiler_prototypeAlias$$.$getTargetElem$ = function $$JSCompiler_prototypeAlias$$$$getTargetElem$$() {
  return(this.$_isActive$ ? this.$_expandedBtn$ : this.$_collapsedBtn$).$getElem$()
};
D.$JSCompiler_prototypeAlias$$.$showKeyboardFocusEffect$ = function $$JSCompiler_prototypeAlias$$$$showKeyboardFocusEffect$$() {
  this.$_isShowingKeyboardFocusEffect$ = D.$JSCompiler_alias_TRUE$$;
  this.$_keyboardFocusEffect$.show();
  (0,D.$JSCompiler_StaticMethods_setActiveElement$$)(this.$_context$, this.$_isActive$ ? this.$_expandedBtn$ : this.$_collapsedBtn$)
};
D.$JSCompiler_prototypeAlias$$.$hideKeyboardFocusEffect$ = function $$JSCompiler_prototypeAlias$$$$hideKeyboardFocusEffect$$() {
  this.$_isShowingKeyboardFocusEffect$ = D.$JSCompiler_alias_FALSE$$;
  this.$_keyboardFocusEffect$.$hide$()
};
D.$JSCompiler_prototypeAlias$$.$isShowingKeyboardFocusEffect$ = (0,D.$JSCompiler_get$$)("$_isShowingKeyboardFocusEffect$");
D.$JSCompiler_prototypeAlias$$.$getNextNavigable$ = function $$JSCompiler_prototypeAlias$$$$getNextNavigable$$($event$$714$$) {
  return this.$_eventManager$.$KeyboardHandler$.$getNextNavigable$(this, $event$$714$$)
};
D.$JSCompiler_prototypeAlias$$.$_createKeyboardFocusEffect$ = function $$JSCompiler_prototypeAlias$$$$_createKeyboardFocusEffect$$($obj$$332_y$$234$$) {
  var $dim$$79$$ = $obj$$332_y$$234$$.$getDimensions$(), $x$$259$$ = $obj$$332_y$$234$$.$getTranslateX$() || $dim$$79$$.x;
  $obj$$332_y$$234$$ = $obj$$332_y$$234$$.$getTranslateY$() || $dim$$79$$.y;
  this.$_keyboardFocusEffect$ = new D.$DvtKeyboardFocusEffect$$(this.$getCtx$(), this, new D.$DvtRectangle$$($x$$259$$, $obj$$332_y$$234$$, $dim$$79$$.$w$, $dim$$79$$.$h$), D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_TRUE$$)
};
D.$DvtAccordionDefaults$$ = function $$DvtAccordionDefaults$$$() {
  this.Init({skyros:D.$DvtAccordionDefaults$VERSION_1$$, alta:D.$DvtAccordionDefaults$SKIN_ALTA$$})
};
D.$DvtObj$$.$createSubclass$(D.$DvtAccordionDefaults$$, D.$DvtBaseComponentDefaults$$, "DvtAccordionDefaults");
D.$DvtAccordionDefaults$VERSION_1$$ = {skin:"alta", sectionHeader:{styleEna:new D.$DvtCSSStyle$$("font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;font-size:14px;font-weight:bold;color:#252525;border-color:#D9DFE3;background-color:#F5F5F5;"), styleOvr:new D.$DvtCSSStyle$$("font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;font-size:14px;font-weight:bold;color:#252525;border-color:#D9DFE3;background-color:#F5F5F5;"), styleDwn:new D.$DvtCSSStyle$$("font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;font-size:14px;font-weight:bold;color:#252525;border-color:#D9DFE3;background-color:#F5F5F5;"), 
styleDis:new D.$DvtCSSStyle$$("font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;font-size:14px;font-weight:bold;color:#252525;border-color:#D9DFE3;background-color:#F5F5F5;"), headerHeight:33, imageWidth:24, imageHeight:24, textPadding:5}, paddingX:0, paddingY:0};
D.$DvtAccordionDefaults$SKIN_ALTA$$ = {};
D.$DvtTrain$$ = function $$DvtTrain$$$($context$$568$$, $eventManager$$36$$, $labels$$23$$, $buttonStyles$$12$$, $id$$266$$, $isAltaSkin$$4$$) {
  this.Init($context$$568$$, $eventManager$$36$$, $labels$$23$$, $buttonStyles$$12$$, $id$$266$$, $isAltaSkin$$4$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtTrain$$, D.$DvtContainer$$, "DvtTrain");
D.$DvtTrain$$.prototype.Init = function $$DvtTrain$$$$Init$($context$$569$$, $eventManager$$37$$, $labels$$24$$, $buttonStyles$$13$$, $id$$267$$, $isAltaSkin$$5$$) {
  D.$DvtTrain$$.$superclass$.Init.call(this, $context$$569$$, D.$JSCompiler_alias_NULL$$, $id$$267$$);
  this.$_tooltipManager$ = $context$$569$$.$getTooltipManager$();
  this.$_labels$ = $labels$$24$$;
  this.$_buttonStyles$ = $buttonStyles$$13$$;
  this.$_count$ = $labels$$24$$.length;
  this.$_buttons$ = (0,window.Array)(this.$_count$);
  this.$_selectedIndex$ = 0;
  this.$_isAltaSkin$ = $isAltaSkin$$5$$;
  this.$RenderSelf$($eventManager$$37$$)
};
D.$DvtTrain$$.prototype.$setSelectedIndex$ = function $$DvtTrain$$$$$setSelectedIndex$$($index$$236$$) {
  0 <= $index$$236$$ && $index$$236$$ < this.$_count$ && (0,D.$JSCompiler_StaticMethods_SelectedIndexChanged$$)(this, this.$_selectedIndex$, $index$$236$$)
};
D.$DvtTrain$$.prototype.$HandleClick$ = function $$DvtTrain$$$$$HandleClick$$($event$$715_selIndex$$3$$) {
  (0,D.$DvtEventManager$consumeEvent$$)($event$$715_selIndex$$3$$);
  for(var $event$$inline_7966_i$$770$$ = 0;$event$$inline_7966_i$$770$$ < this.$_buttons$.length;$event$$inline_7966_i$$770$$++) {
    var $target$$128$$ = $event$$715_selIndex$$3$$.target;
    if(this.$_buttons$[$event$$inline_7966_i$$770$$] === $target$$128$$ || this.$_buttons$[$event$$inline_7966_i$$770$$] === $target$$128$$.getParent()) {
      $event$$715_selIndex$$3$$ = this.$_selectedIndex$;
      (0,D.$JSCompiler_StaticMethods_SelectedIndexChanged$$)(this, $event$$715_selIndex$$3$$, $event$$inline_7966_i$$770$$);
      $event$$715_selIndex$$3$$ != $event$$inline_7966_i$$770$$ && ($event$$inline_7966_i$$770$$ = new D.$DvtTrainEvent$$(this.$_selectedIndex$), this.$FireListener$($event$$inline_7966_i$$770$$, D.$JSCompiler_alias_FALSE$$));
      break
    }
  }
};
D.$JSCompiler_StaticMethods_SelectedIndexChanged$$ = function $$JSCompiler_StaticMethods_SelectedIndexChanged$$$($JSCompiler_StaticMethods_SelectedIndexChanged$self$$, $button$$74_oldIndex$$3$$, $newIndex$$8$$) {
  $JSCompiler_StaticMethods_SelectedIndexChanged$self$$.$_selectedIndex$ = $newIndex$$8$$;
  if($button$$74_oldIndex$$3$$ = $JSCompiler_StaticMethods_SelectedIndexChanged$self$$.$_buttons$[$button$$74_oldIndex$$3$$]) {
    $button$$74_oldIndex$$3$$.$overState$ && $button$$74_oldIndex$$3$$.$overState$.setCursor("pointer"), $button$$74_oldIndex$$3$$.$downState$ && $button$$74_oldIndex$$3$$.$downState$.setCursor("pointer"), (0,D.$JSCompiler_StaticMethods_setToggled$$)($button$$74_oldIndex$$3$$, D.$JSCompiler_alias_FALSE$$)
  }
  if($button$$74_oldIndex$$3$$ = $JSCompiler_StaticMethods_SelectedIndexChanged$self$$.$_buttons$[$newIndex$$8$$]) {
    $button$$74_oldIndex$$3$$.$overState$ && $button$$74_oldIndex$$3$$.$overState$.setCursor("default"), $button$$74_oldIndex$$3$$.$downState$ && $button$$74_oldIndex$$3$$.$downState$.setCursor("default"), (0,D.$JSCompiler_StaticMethods_setToggled$$)($button$$74_oldIndex$$3$$, D.$JSCompiler_alias_TRUE$$)
  }
};
D.$DvtTrain$$.prototype.$RenderSelf$ = function $$DvtTrain$$$$$RenderSelf$$($eventManager$$38$$) {
  var $bBiDi$$6$$ = (0,D.$DvtAgent$isRightToLeft$$)(this.$getCtx$()), $buttonSize_buttonStyle$$inline_7969$$;
  if(!this.$_buttonSize$) {
    if(this.$_buttonStyles$ && ($buttonSize_buttonStyle$$inline_7969$$ = this.$_buttonStyles$[0])) {
      this.$_buttonSize$ = (0,D.$DvtCSSStyle$toNumber$$)($buttonSize_buttonStyle$$inline_7969$$.getWidth())
    }
    this.$_buttonSize$ || (this.$_buttonSize$ = 8)
  }
  $buttonSize_buttonStyle$$inline_7969$$ = this.$_buttonSize$;
  for(var $i$$771$$ = 0;$i$$771$$ < this.$_count$;$i$$771$$++) {
    var $button$$75$$, $button$$inline_7972_j$$102$$ = $button$$75$$ = this.$CreateButton$($buttonSize_buttonStyle$$inline_7969$$, $i$$771$$ == this.$_selectedIndex$, this.$_labels$[$i$$771$$]);
    $button$$inline_7972_j$$102$$.$addEvtListener$(D.$DvtTouchEvent$$.$TOUCHSTART$, this.$HandleClick$, D.$JSCompiler_alias_FALSE$$, this);
    (0,D.$DvtAgent$isTouchDevice$$)() || $button$$inline_7972_j$$102$$.$addEvtListener$(D.$DvtMouseEvent$CLICK$$, this.$HandleClick$, D.$JSCompiler_alias_FALSE$$, this);
    $button$$inline_7972_j$$102$$ = $i$$771$$;
    $bBiDi$$6$$ && ($button$$inline_7972_j$$102$$ = this.$_count$ - 1 - $i$$771$$);
    $eventManager$$38$$ && $eventManager$$38$$.$associate$($button$$75$$, $button$$75$$);
    (0,D.$JSCompiler_StaticMethods_setTranslate$$)($button$$75$$, $button$$inline_7972_j$$102$$ * ($buttonSize_buttonStyle$$inline_7969$$ + 3), this.$_isAltaSkin$ ? 0 : 1);
    this.$addChild$($button$$75$$);
    this.$_buttons$[$i$$771$$] = $button$$75$$
  }
};
D.$DvtTrain$$.prototype.$CreateButtonState$ = function $$DvtTrain$$$$$CreateButtonState$$($url$$23$$, $buttonSize$$2$$) {
  return new D.$DvtImage$$(this.$getCtx$(), $url$$23$$, 0, 0, $buttonSize$$2$$, $buttonSize$$2$$)
};
D.$JSCompiler_StaticMethods_MakeButtonState$$ = function $$JSCompiler_StaticMethods_MakeButtonState$$$($JSCompiler_StaticMethods_MakeButtonState$self_JSCompiler_temp$$146_shape$$86_shape$$inline_7981$$, $buttonSize$$3$$, $state$$94$$, $bSelected$$6$$) {
  var $bdColor$$inline_7978_style$$109_url$$24$$ = $JSCompiler_StaticMethods_MakeButtonState$self_JSCompiler_temp$$146_shape$$86_shape$$inline_7981$$.$_buttonStyles$ ? $JSCompiler_StaticMethods_MakeButtonState$self_JSCompiler_temp$$146_shape$$86_shape$$inline_7981$$.$_buttonStyles$[$state$$94$$] : D.$JSCompiler_alias_NULL$$;
  if($bdColor$$inline_7978_style$$109_url$$24$$ = $bdColor$$inline_7978_style$$109_url$$24$$ ? $bdColor$$inline_7978_style$$109_url$$24$$.$getStyle$("content") : D.$JSCompiler_alias_NULL$$) {
    $JSCompiler_StaticMethods_MakeButtonState$self_JSCompiler_temp$$146_shape$$86_shape$$inline_7981$$ = $JSCompiler_StaticMethods_MakeButtonState$self_JSCompiler_temp$$146_shape$$86_shape$$inline_7981$$.$CreateButtonState$($bdColor$$inline_7978_style$$109_url$$24$$, $buttonSize$$3$$)
  }else {
    var $buttonStyle$$inline_7977$$, $bgColor$$inline_7979$$, $offset$$inline_7980$$;
    2 == $state$$94$$ ? ($offset$$inline_7980$$ = 0, $bgColor$$inline_7979$$ = "#61bde3", $bdColor$$inline_7978_style$$109_url$$24$$ = "#0066ff", $JSCompiler_StaticMethods_MakeButtonState$self_JSCompiler_temp$$146_shape$$86_shape$$inline_7981$$.$_buttonStyles$ && ($buttonStyle$$inline_7977$$ = $JSCompiler_StaticMethods_MakeButtonState$self_JSCompiler_temp$$146_shape$$86_shape$$inline_7981$$.$_buttonStyles$[2])) : ($offset$$inline_7980$$ = 1, $bgColor$$inline_7979$$ = "#c0cbd5", $bdColor$$inline_7978_style$$109_url$$24$$ = 
    "#5d7891", $JSCompiler_StaticMethods_MakeButtonState$self_JSCompiler_temp$$146_shape$$86_shape$$inline_7981$$.$_buttonStyles$ && ($buttonStyle$$inline_7977$$ = $JSCompiler_StaticMethods_MakeButtonState$self_JSCompiler_temp$$146_shape$$86_shape$$inline_7981$$.$_buttonStyles$[0]));
    $buttonStyle$$inline_7977$$ && ($buttonStyle$$inline_7977$$.$getStyle$("border-color") && ($bdColor$$inline_7978_style$$109_url$$24$$ = $buttonStyle$$inline_7977$$.$getStyle$("border-color")), $buttonStyle$$inline_7977$$.$getStyle$("background-color") && ($bgColor$$inline_7979$$ = $buttonStyle$$inline_7977$$.$getStyle$("background-color")));
    $JSCompiler_StaticMethods_MakeButtonState$self_JSCompiler_temp$$146_shape$$86_shape$$inline_7981$$ = new D.$DvtRect$$($JSCompiler_StaticMethods_MakeButtonState$self_JSCompiler_temp$$146_shape$$86_shape$$inline_7981$$.$getCtx$(), $offset$$inline_7980$$, $offset$$inline_7980$$, $buttonSize$$3$$ - 2 * $offset$$inline_7980$$, $buttonSize$$3$$ - 2 * $offset$$inline_7980$$);
    $JSCompiler_StaticMethods_MakeButtonState$self_JSCompiler_temp$$146_shape$$86_shape$$inline_7981$$.$setSolidFill$($bgColor$$inline_7979$$);
    $JSCompiler_StaticMethods_MakeButtonState$self_JSCompiler_temp$$146_shape$$86_shape$$inline_7981$$.$setSolidStroke$($bdColor$$inline_7978_style$$109_url$$24$$)
  }
  $JSCompiler_StaticMethods_MakeButtonState$self_JSCompiler_temp$$146_shape$$86_shape$$inline_7981$$.setCursor(0 == $state$$94$$ || $bSelected$$6$$ ? "default" : "pointer");
  return $JSCompiler_StaticMethods_MakeButtonState$self_JSCompiler_temp$$146_shape$$86_shape$$inline_7981$$
};
D.$DvtTrain$$.prototype.$CreateButton$ = function $$DvtTrain$$$$$CreateButton$$($button$$78_buttonSize$$4$$, $bSelected$$7$$, $tooltip$$44$$) {
  $button$$78_buttonSize$$4$$ = new D.$DvtButton$$(this.$getCtx$(), (0,D.$JSCompiler_StaticMethods_MakeButtonState$$)(this, $button$$78_buttonSize$$4$$, 0, $bSelected$$7$$), (0,D.$JSCompiler_StaticMethods_MakeButtonState$$)(this, $button$$78_buttonSize$$4$$, 1, $bSelected$$7$$), (0,D.$JSCompiler_StaticMethods_MakeButtonState$$)(this, $button$$78_buttonSize$$4$$, 2, $bSelected$$7$$), D.$JSCompiler_alias_NULL$$);
  $button$$78_buttonSize$$4$$.$setTooltip$($tooltip$$44$$);
  $button$$78_buttonSize$$4$$.$_bToggleEnabled$ = D.$JSCompiler_alias_TRUE$$;
  $bSelected$$7$$ && (0,D.$JSCompiler_StaticMethods_setToggled$$)($button$$78_buttonSize$$4$$, $bSelected$$7$$);
  return $button$$78_buttonSize$$4$$
};
D.$DvtTrainEvent$$ = function $$DvtTrainEvent$$$($index$$237$$) {
  this.Init("dvtTrain");
  this.type = this.$getType$();
  this.$_index$ = $index$$237$$
};
(0,D.$goog$exportPath_$$)("DvtTrainEvent", D.$DvtTrainEvent$$);
D.$DvtObj$$.$createSubclass$(D.$DvtTrainEvent$$, D.$DvtBaseComponentEvent$$, "DvtTrainEvent");
D.$DvtTrainEvent$$.TYPE = "dvtTrain";
D.$DvtTrainEvent$$.prototype.$getIndex$ = (0,D.$JSCompiler_get$$)("$_index$");
D.$DvtTrainEvent$$.prototype.getIndex = D.$DvtTrainEvent$$.prototype.$getIndex$;
D.DvtOverviewWindow = function $DvtOverviewWindow$($context$$566$$, $id$$264$$, $x$$260$$, $y$$235$$, $ww$$118$$, $hh$$102$$) {
  this.Init($context$$566$$, $id$$264$$, $x$$260$$, $y$$235$$, $ww$$118$$, $hh$$102$$)
};
D.$DvtObj$$.$createSubclass$(D.DvtOverviewWindow, D.$DvtContainer$$, "DvtOverviewWindow");
D.DvtOverviewWindow.$VIEWPORT_BG_COLOR$ = "viewport-bg-color";
D.DvtOverviewWindow.$VIEWPORT_BORDER_COLOR$ = "viewport-border-color";
D.DvtOverviewWindow.$OVERVIEW_DISCLOSED_KEY$ = "isOverviewDisclosed";
D.$JSCompiler_prototypeAlias$$ = D.DvtOverviewWindow.prototype;
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($context$$567$$, $id$$265$$, $x$$261$$, $y$$236$$, $ww$$119$$, $hh$$103$$) {
  D.DvtOverviewWindow.$superclass$.Init.call(this, $context$$567$$, D.$JSCompiler_alias_NULL$$, $id$$265$$);
  this.$_x$ = $x$$261$$;
  this.$_y$ = $y$$236$$;
  this.$_ww$ = $ww$$119$$;
  this.$_hh$ = $hh$$103$$;
  this.$_skinStyle$ = D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.$render$ = function $$JSCompiler_prototypeAlias$$$$render$$() {
  this.$_md$ = D.$JSCompiler_alias_FALSE$$;
  this.$_panEnable$ = D.$JSCompiler_alias_TRUE$$;
  this.$_overview$ && ((0,D.$DvtAgent$isTouchDevice$$)() ? (this.$_overview$.$removeEvtListener$(D.$DvtTouchEvent$$.$TOUCHSTART$, this.$_mouseDown$, D.$JSCompiler_alias_FALSE$$, this), this.$_overview$.$removeEvtListener$(D.$DvtTouchEvent$$.$TOUCHMOVE$, this.$_mouseMove$, D.$JSCompiler_alias_FALSE$$, this), this.$_overview$.$removeEvtListener$(D.$DvtTouchEvent$$.$TOUCHEND$, this.$_mouseUp$, D.$JSCompiler_alias_FALSE$$, this)) : (this.$_overview$.$removeEvtListener$(D.$DvtMouseEvent$MOUSEDOWN$$, this.$_mouseDown$, 
  D.$JSCompiler_alias_FALSE$$, this), this.$_overview$.$removeEvtListener$(D.$DvtMouseEvent$MOUSEMOVE$$, this.$_mouseMove$, D.$JSCompiler_alias_FALSE$$, this), this.$_overview$.$removeEvtListener$(D.$DvtMouseEvent$MOUSEUP$$, this.$_mouseUp$, D.$JSCompiler_alias_FALSE$$, this), this.$_overview$.$removeEvtListener$(D.$DvtMouseEvent$MOUSEOUT$$, this.$_mouseOut$, D.$JSCompiler_alias_FALSE$$, this)), (0,D.$JSCompiler_StaticMethods_setClipPath$$)(this.$_overview$, D.$JSCompiler_alias_NULL$$));
  this.$removeChildren$();
  this.$_overview$ = this.$_viewport$ = D.$JSCompiler_alias_NULL$$;
  var $bgColor$$14_clipPath$$15$$ = new D.$DvtClipPath$$(this.getId());
  (0,D.$JSCompiler_StaticMethods_addRect$$)($bgColor$$14_clipPath$$15$$, 0, 0, this.$_ww$, this.$_hh$);
  this.$_overview$ = new D.$DvtRect$$(this.$_context$, 0, 0, this.$_ww$, this.$_hh$);
  (0,D.$JSCompiler_StaticMethods_setClipPath$$)(this.$_overview$, $bgColor$$14_clipPath$$15$$);
  (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)(this.$_overview$);
  this.$addChild$(this.$_overview$);
  this.$_viewport$ = new D.$DvtRect$$(this.$_context$, 0, 0, 0, 0, this.getId() + ":viewport");
  $bgColor$$14_clipPath$$15$$ = this.$getSkinStyleAttr$(D.DvtOverviewWindow.$VIEWPORT_BG_COLOR$);
  this.$_viewport$.$setSolidStroke$(this.$getSkinStyleAttr$(D.DvtOverviewWindow.$VIEWPORT_BORDER_COLOR$), D.$JSCompiler_alias_NULL$$, 2);
  this.$_viewport$.$setSolidFill$($bgColor$$14_clipPath$$15$$);
  this.$_viewport$.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$);
  this.$_overview$.$addChild$(this.$_viewport$);
  (0,D.$DvtAgent$isTouchDevice$$)() ? (this.$_overview$.$addEvtListener$(D.$DvtTouchEvent$$.$TOUCHSTART$, this.$_mouseDown$, D.$JSCompiler_alias_FALSE$$, this), this.$_overview$.$addEvtListener$(D.$DvtTouchEvent$$.$TOUCHMOVE$, this.$_mouseMove$, D.$JSCompiler_alias_FALSE$$, this), this.$_overview$.$addEvtListener$(D.$DvtTouchEvent$$.$TOUCHEND$, this.$_mouseUp$, D.$JSCompiler_alias_FALSE$$, this)) : (this.$_overview$.$addEvtListener$(D.$DvtMouseEvent$MOUSEDOWN$$, this.$_mouseDown$, D.$JSCompiler_alias_FALSE$$, 
  this), this.$_overview$.$addEvtListener$(D.$DvtMouseEvent$MOUSEMOVE$$, this.$_mouseMove$, D.$JSCompiler_alias_FALSE$$, this), this.$_overview$.$addEvtListener$(D.$DvtMouseEvent$MOUSEUP$$, this.$_mouseUp$, D.$JSCompiler_alias_FALSE$$, this), this.$_overview$.$addEvtListener$(D.$DvtMouseEvent$MOUSEOUT$$, this.$_mouseOut$, D.$JSCompiler_alias_FALSE$$, this))
};
D.$JSCompiler_prototypeAlias$$.$isDisclosed$ = (0,D.$JSCompiler_get$$)("$_isDisclosed$");
D.$JSCompiler_prototypeAlias$$.$setDisclosed$ = (0,D.$JSCompiler_set$$)("$_isDisclosed$");
D.$JSCompiler_prototypeAlias$$.$getContentDimensions$ = function $$JSCompiler_prototypeAlias$$$$getContentDimensions$$() {
  return new D.$DvtRectangle$$(this.$_x$, this.$_y$, this.$_ww$, this.$_hh$)
};
D.$JSCompiler_StaticMethods_setViewportDimensions$$ = function $$JSCompiler_StaticMethods_setViewportDimensions$$$($JSCompiler_StaticMethods_setViewportDimensions$self$$, $dim$$80_vx$$, $animator$$127$$) {
  var $topLeft$$4_vh$$ = (0,D.$JSCompiler_StaticMethods_TransformFromContentToViewportCoords$$)($JSCompiler_StaticMethods_setViewportDimensions$self$$, $dim$$80_vx$$.x, $dim$$80_vx$$.y, $animator$$127$$), $bottomRight$$4$$ = (0,D.$JSCompiler_StaticMethods_TransformFromContentToViewportCoords$$)($JSCompiler_StaticMethods_setViewportDimensions$self$$, $dim$$80_vx$$.x + $dim$$80_vx$$.$w$, $dim$$80_vx$$.y + $dim$$80_vx$$.$h$, $animator$$127$$);
  $dim$$80_vx$$ = $topLeft$$4_vh$$.x;
  var $vy$$ = $topLeft$$4_vh$$.y, $vw$$ = $bottomRight$$4$$.x - $topLeft$$4_vh$$.x, $topLeft$$4_vh$$ = $bottomRight$$4$$.y - $topLeft$$4_vh$$.y;
  $animator$$127$$ ? ((0,D.$JSCompiler_StaticMethods_addProp$$)($animator$$127$$, "typeNumber", $JSCompiler_StaticMethods_setViewportDimensions$self$$.$_viewport$, $JSCompiler_StaticMethods_setViewportDimensions$self$$.$_viewport$.$getX$, $JSCompiler_StaticMethods_setViewportDimensions$self$$.$_viewport$.$setX$, $dim$$80_vx$$), (0,D.$JSCompiler_StaticMethods_addProp$$)($animator$$127$$, "typeNumber", $JSCompiler_StaticMethods_setViewportDimensions$self$$.$_viewport$, $JSCompiler_StaticMethods_setViewportDimensions$self$$.$_viewport$.$getY$, 
  $JSCompiler_StaticMethods_setViewportDimensions$self$$.$_viewport$.$setY$, $vy$$), (0,D.$JSCompiler_StaticMethods_addProp$$)($animator$$127$$, "typeNumber", $JSCompiler_StaticMethods_setViewportDimensions$self$$.$_viewport$, $JSCompiler_StaticMethods_setViewportDimensions$self$$.$_viewport$.getWidth, $JSCompiler_StaticMethods_setViewportDimensions$self$$.$_viewport$.$setWidth$, $vw$$), (0,D.$JSCompiler_StaticMethods_addProp$$)($animator$$127$$, "typeNumber", $JSCompiler_StaticMethods_setViewportDimensions$self$$.$_viewport$, 
  $JSCompiler_StaticMethods_setViewportDimensions$self$$.$_viewport$.getHeight, $JSCompiler_StaticMethods_setViewportDimensions$self$$.$_viewport$.$setHeight$, $topLeft$$4_vh$$)) : ($JSCompiler_StaticMethods_setViewportDimensions$self$$.$_viewport$.$setX$($dim$$80_vx$$), $JSCompiler_StaticMethods_setViewportDimensions$self$$.$_viewport$.$setY$($vy$$), $JSCompiler_StaticMethods_setViewportDimensions$self$$.$_viewport$.$setWidth$($vw$$), $JSCompiler_StaticMethods_setViewportDimensions$self$$.$_viewport$.$setHeight$($topLeft$$4_vh$$))
};
D.$JSCompiler_StaticMethods_getViewportDimensions$$ = function $$JSCompiler_StaticMethods_getViewportDimensions$$$($JSCompiler_StaticMethods_getViewportDimensions$self_bottomRight$$5$$) {
  var $topLeft$$5$$ = (0,D.$JSCompiler_StaticMethods_TransformFromViewportToContentCoords$$)($JSCompiler_StaticMethods_getViewportDimensions$self_bottomRight$$5$$, $JSCompiler_StaticMethods_getViewportDimensions$self_bottomRight$$5$$.$_viewport$.$getX$(), $JSCompiler_StaticMethods_getViewportDimensions$self_bottomRight$$5$$.$_viewport$.$getY$());
  $JSCompiler_StaticMethods_getViewportDimensions$self_bottomRight$$5$$ = (0,D.$JSCompiler_StaticMethods_TransformFromViewportToContentCoords$$)($JSCompiler_StaticMethods_getViewportDimensions$self_bottomRight$$5$$, $JSCompiler_StaticMethods_getViewportDimensions$self_bottomRight$$5$$.$_viewport$.$getX$() + $JSCompiler_StaticMethods_getViewportDimensions$self_bottomRight$$5$$.$_viewport$.getWidth(), $JSCompiler_StaticMethods_getViewportDimensions$self_bottomRight$$5$$.$_viewport$.$getY$() + $JSCompiler_StaticMethods_getViewportDimensions$self_bottomRight$$5$$.$_viewport$.getHeight());
  return new D.$DvtRectangle$$($topLeft$$5$$.x, $topLeft$$5$$.y, $JSCompiler_StaticMethods_getViewportDimensions$self_bottomRight$$5$$.x - $topLeft$$5$$.x, $JSCompiler_StaticMethods_getViewportDimensions$self_bottomRight$$5$$.y - $topLeft$$5$$.y)
};
D.$JSCompiler_prototypeAlias$$ = D.DvtOverviewWindow.prototype;
D.$JSCompiler_prototypeAlias$$.$_mouseDown$ = function $$JSCompiler_prototypeAlias$$$$_mouseDown$$($evt$$63_viewportEvent$$) {
  if(!this.$_md$ && this.$_panEnable$) {
    this.$_md$ = D.$JSCompiler_alias_TRUE$$;
    var $offset$$32$$ = this.$_getRelativePosition$($evt$$63_viewportEvent$$);
    $evt$$63_viewportEvent$$ = new D.$ViewportChangeEvent$$((0,D.$JSCompiler_StaticMethods_getViewportDimensions$$)(this), (0,D.$JSCompiler_StaticMethods__getCenteredViewportDimensions$$)(this, $offset$$32$$), $evt$$63_viewportEvent$$);
    this.$FireListener$($evt$$63_viewportEvent$$)
  }
};
D.$JSCompiler_prototypeAlias$$.$_mouseMove$ = function $$JSCompiler_prototypeAlias$$$$_mouseMove$$($evt$$64_viewportEvent$$1$$) {
  if(this.$_md$ && this.$_panEnable$) {
    var $offset$$33$$ = this.$_getRelativePosition$($evt$$64_viewportEvent$$1$$);
    $evt$$64_viewportEvent$$1$$ = new D.$ViewportChangeEvent$$((0,D.$JSCompiler_StaticMethods_getViewportDimensions$$)(this), (0,D.$JSCompiler_StaticMethods__getCenteredViewportDimensions$$)(this, $offset$$33$$), $evt$$64_viewportEvent$$1$$);
    this.$FireListener$($evt$$64_viewportEvent$$1$$)
  }
};
D.$JSCompiler_prototypeAlias$$.$_mouseUp$ = function $$JSCompiler_prototypeAlias$$$$_mouseUp$$() {
  this.$_md$ && this.$_panEnable$ && (this.$_md$ = D.$JSCompiler_alias_FALSE$$)
};
D.$JSCompiler_prototypeAlias$$.$_mouseOut$ = function $$JSCompiler_prototypeAlias$$$$_mouseOut$$() {
  this.$_mouseUp$()
};
D.$JSCompiler_prototypeAlias$$.$_getRelativePosition$ = function $$JSCompiler_prototypeAlias$$$$_getRelativePosition$$($evt$$67_touches$$14$$) {
  var $pageX$$12$$, $pageY$$12$$;
  (0,D.$DvtAgent$isTouchDevice$$)() ? ($evt$$67_touches$$14$$ = $evt$$67_touches$$14$$.touches, 0 < $evt$$67_touches$$14$$.length && ($pageX$$12$$ = $evt$$67_touches$$14$$[0].pageX, $pageY$$12$$ = $evt$$67_touches$$14$$[0].pageY)) : ($pageX$$12$$ = $evt$$67_touches$$14$$.pageX, $pageY$$12$$ = $evt$$67_touches$$14$$.pageY);
  return(0,D.$JSCompiler_StaticMethods_pageToStageCoords$$)(this.$_context$, $pageX$$12$$, $pageY$$12$$)
};
D.$JSCompiler_StaticMethods_TransformFromViewportToContentCoords$$ = function $$JSCompiler_StaticMethods_TransformFromViewportToContentCoords$$$($JSCompiler_StaticMethods_TransformFromViewportToContentCoords$self$$, $vx$$1$$, $vy$$1$$) {
  var $tx$$27$$ = 0, $ty$$28$$ = 0, $sx$$16$$ = 1, $sy$$16$$ = 1;
  $JSCompiler_StaticMethods_TransformFromViewportToContentCoords$self$$.$_content$ && ($tx$$27$$ = $JSCompiler_StaticMethods_TransformFromViewportToContentCoords$self$$.$_content$.$getTranslateX$(), $ty$$28$$ = $JSCompiler_StaticMethods_TransformFromViewportToContentCoords$self$$.$_content$.$getTranslateY$(), $sx$$16$$ = $JSCompiler_StaticMethods_TransformFromViewportToContentCoords$self$$.$_content$.$getScaleX$(), $sy$$16$$ = $JSCompiler_StaticMethods_TransformFromViewportToContentCoords$self$$.$_content$.$getScaleY$());
  return new D.$DvtPoint$$(($vx$$1$$ - $tx$$27$$) / $sx$$16$$, ($vy$$1$$ - $ty$$28$$) / $sy$$16$$)
};
D.$JSCompiler_StaticMethods_TransformFromContentToViewportCoords$$ = function $$JSCompiler_StaticMethods_TransformFromContentToViewportCoords$$$($JSCompiler_StaticMethods_TransformFromContentToViewportCoords$self$$, $cx$$60$$, $cy$$61$$, $animator$$128$$) {
  var $tx$$28$$ = 0, $ty$$29$$ = 0, $sx$$17$$ = 1, $sy$$17$$ = 1;
  $JSCompiler_StaticMethods_TransformFromContentToViewportCoords$self$$.$_content$ && ($tx$$28$$ = $animator$$128$$ ? (0,D.$JSCompiler_StaticMethods_getDestVal$$)($animator$$128$$, $JSCompiler_StaticMethods_TransformFromContentToViewportCoords$self$$.$_content$, $JSCompiler_StaticMethods_TransformFromContentToViewportCoords$self$$.$_content$.$getTranslateX$, D.$JSCompiler_alias_TRUE$$) : $JSCompiler_StaticMethods_TransformFromContentToViewportCoords$self$$.$_content$.$getTranslateX$(), $ty$$29$$ = 
  $animator$$128$$ ? (0,D.$JSCompiler_StaticMethods_getDestVal$$)($animator$$128$$, $JSCompiler_StaticMethods_TransformFromContentToViewportCoords$self$$.$_content$, $JSCompiler_StaticMethods_TransformFromContentToViewportCoords$self$$.$_content$.$getTranslateY$, D.$JSCompiler_alias_TRUE$$) : $JSCompiler_StaticMethods_TransformFromContentToViewportCoords$self$$.$_content$.$getTranslateY$(), $sx$$17$$ = $animator$$128$$ ? (0,D.$JSCompiler_StaticMethods_getDestVal$$)($animator$$128$$, $JSCompiler_StaticMethods_TransformFromContentToViewportCoords$self$$.$_content$, 
  $JSCompiler_StaticMethods_TransformFromContentToViewportCoords$self$$.$_content$.$getScaleX$, D.$JSCompiler_alias_TRUE$$) : $JSCompiler_StaticMethods_TransformFromContentToViewportCoords$self$$.$_content$.$getScaleX$(), $sy$$17$$ = $animator$$128$$ ? (0,D.$JSCompiler_StaticMethods_getDestVal$$)($animator$$128$$, $JSCompiler_StaticMethods_TransformFromContentToViewportCoords$self$$.$_content$, $JSCompiler_StaticMethods_TransformFromContentToViewportCoords$self$$.$_content$.$getScaleY$, D.$JSCompiler_alias_TRUE$$) : 
  $JSCompiler_StaticMethods_TransformFromContentToViewportCoords$self$$.$_content$.$getScaleY$());
  return new D.$DvtPoint$$($cx$$60$$ * $sx$$17$$ + $tx$$28$$, $cy$$61$$ * $sy$$17$$ + $ty$$29$$)
};
D.DvtOverviewWindow.prototype.$getSkinStyle$ = (0,D.$JSCompiler_get$$)("$_skinStyle$");
D.DvtOverviewWindow.prototype.$setSkinStyle$ = (0,D.$JSCompiler_set$$)("$_skinStyle$");
D.DvtOverviewWindow.prototype.$getSkinStyleAttr$ = function $DvtOverviewWindow$$$getSkinStyleAttr$$($attr$$16$$) {
  return this.$_skinStyle$ && "undefined" != this.$_skinStyle$[$attr$$16$$] ? this.$_skinStyle$[$attr$$16$$] : D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_StaticMethods__getCenteredViewportDimensions$$ = function $$JSCompiler_StaticMethods__getCenteredViewportDimensions$$$($JSCompiler_StaticMethods__getCenteredViewportDimensions$self$$, $pos$$71$$) {
  var $overviewStart_topLeft$$6$$ = (0,D.$JSCompiler_StaticMethods_localToStage$$)($JSCompiler_StaticMethods__getCenteredViewportDimensions$self$$.$_overview$, new D.$DvtPoint$$(0, 0)), $bottomRight$$6_viewportDims$$ = $JSCompiler_StaticMethods__getCenteredViewportDimensions$self$$.$_viewport$.$getDimensions$(), $centeredViewportX$$ = $pos$$71$$.x - $overviewStart_topLeft$$6$$.x - $bottomRight$$6_viewportDims$$.$w$ / 2, $centeredViewportY$$ = $pos$$71$$.y - $overviewStart_topLeft$$6$$.y - $bottomRight$$6_viewportDims$$.$h$ / 
  2, $overviewStart_topLeft$$6$$ = (0,D.$JSCompiler_StaticMethods_TransformFromViewportToContentCoords$$)($JSCompiler_StaticMethods__getCenteredViewportDimensions$self$$, $centeredViewportX$$, $centeredViewportY$$), $bottomRight$$6_viewportDims$$ = (0,D.$JSCompiler_StaticMethods_TransformFromViewportToContentCoords$$)($JSCompiler_StaticMethods__getCenteredViewportDimensions$self$$, $centeredViewportX$$ + $bottomRight$$6_viewportDims$$.$w$, $centeredViewportY$$ + $bottomRight$$6_viewportDims$$.$h$);
  return new D.$DvtRectangle$$($overviewStart_topLeft$$6$$.x, $overviewStart_topLeft$$6$$.y, $bottomRight$$6_viewportDims$$.x - $overviewStart_topLeft$$6$$.x, $bottomRight$$6_viewportDims$$.y - $overviewStart_topLeft$$6$$.y)
};
D.DvtOverviewWindow.prototype.$SetViewportRectangle$ = function $DvtOverviewWindow$$$SetViewportRectangle$$($rect$$44$$) {
  this.$_viewport$.$setX$($rect$$44$$.x);
  this.$_viewport$.$setY$($rect$$44$$.y);
  this.$_viewport$.$setWidth$($rect$$44$$.$w$);
  this.$_viewport$.$setHeight$($rect$$44$$.$h$)
};
D.DvtOverviewWindow.prototype.$GetViewportRectangle$ = function $DvtOverviewWindow$$$GetViewportRectangle$$() {
  return new D.$DvtRectangle$$(this.$_viewport$.$getX$(), this.$_viewport$.$getY$(), this.$_viewport$.getWidth(), this.$_viewport$.getHeight())
};
D.DvtOverviewWindow.prototype.$getDimensions$ = function $DvtOverviewWindow$$$getDimensions$$($targetCoordinateSpace$$56$$) {
  var $bounds$$145$$ = new D.$DvtRectangle$$(0, 0, this.$_ww$, this.$_hh$);
  return!$targetCoordinateSpace$$56$$ || $targetCoordinateSpace$$56$$ === this ? $bounds$$145$$ : (0,D.$JSCompiler_StaticMethods_ConvertCoordSpaceRect$$)(this, $bounds$$145$$, $targetCoordinateSpace$$56$$)
};
D.DvtOverviewWindow.prototype.$getDimensionsWithStroke$ = function $DvtOverviewWindow$$$getDimensionsWithStroke$$($targetCoordinateSpace$$57$$) {
  return this.$getDimensions$($targetCoordinateSpace$$57$$)
};
(0,D.$DvtBundle$addDefaultStrings$$)("DvtSubcomponentBundle", {CONTROL_PANEL:"Control Panel", CONTROL_PANEL_ZOOMANDCENTER:"Zoom and Center", CONTROL_PANEL_PAN:"Pan", CONTROL_PANEL_LAYOUT:"Layout", CONTROL_PANEL_LAYOUT_VERT_TOP:"Vertical, Top Down", CONTROL_PANEL_LAYOUT_VERT_BOTTOM:"Vertical, Bottom Up", CONTROL_PANEL_LAYOUT_HORIZ_START:"Horizontal, Start-to-End", CONTROL_PANEL_LAYOUT_HORIZ_LEFT:"Horizontal, Left-to-Right", CONTROL_PANEL_LAYOUT_HORIZ_RIGHT:"Horizontal, Right-to-Left", CONTROL_PANEL_LAYOUT_RADIAL:"Radial", 
CONTROL_PANEL_LAYOUT_TREE:"Tree", CONTROL_PANEL_LAYOUT_CIRCLE:"Circle", CONTROL_PANEL_SYNC:"View", CONTROL_PANEL_ZOOMTOFIT:"Zoom to Fit", CONTROL_PANEL_ZOOMIN:"Zoom In", CONTROL_PANEL_ZOOMOUT:"Zoom Out", CONTROL_PANEL_RESET:"Reset Map", CONTROL_PANEL_DRILLUP:"Drill Up", CONTROL_PANEL_DRILLDOWN:"Drill Down", LEGEND:"Legend", OVERVIEW:"Overview", PALETTE:"Palette", SEARCH:"Search", SEARCH_TEXT:"Search", SEARCH_TEXT_ALTA:"Find", SEARCH_RESULTS:"Search Results [{0}]", SEARCH_RESULTS_ALTA:"{0} Results", 
SEARCH_RESULTS_CLOSE:"Close", SEARCH_RESULTS_NO_DATA:"No results to display"});

  return D;
});
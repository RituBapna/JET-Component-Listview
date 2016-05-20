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
  function $DvtTrainEvent$$($DvtAccordionDefaults$$) {
    this.Init($DvtTrainEvent$$.$TYPE$);
    this.type = this.$getType$();
    this.$_index$ = $DvtAccordionDefaults$$
  }
  function $DvtAccordionDefaults$$() {
    this.Init({skyros:$DvtAccordionDefaults$$.$VERSION_1$, alta:$DvtAccordionDefaults$$.$SKIN_ALTA$})
  }
  function $DvtPanelDrawerKeyboardHandler$$($DvtTrainEvent$$, $DvtAccordionDefaults$$) {
    this.Init($DvtTrainEvent$$, $DvtAccordionDefaults$$)
  }
  function $DvtPanelDrawerEventManager$$($DvtTrainEvent$$, $DvtAccordionDefaults$$, $DvtPanelDrawerKeyboardHandler$$) {
    this.Init($DvtTrainEvent$$, $DvtAccordionDefaults$$, $DvtPanelDrawerKeyboardHandler$$)
  }
  function $DvtPanelDrawerTab$$($DvtTrainEvent$$, $DvtAccordionDefaults$$, $DvtPanelDrawerKeyboardHandler$$, $DvtPanelDrawerEventManager$$) {
    this.Init($DvtTrainEvent$$, $DvtAccordionDefaults$$, $DvtPanelDrawerKeyboardHandler$$, $DvtPanelDrawerEventManager$$)
  }
  function $DvtBreadcrumbsPeer$$($DvtTrainEvent$$, $DvtAccordionDefaults$$) {
    this.Init();
    this.$_id$ = $DvtTrainEvent$$;
    this.$_bDrillable$ = $JSCompiler_alias_FALSE$$;
    this.$_displayable$ = $DvtAccordionDefaults$$
  }
  function $DvtBreadcrumbsEventManager$$($DvtTrainEvent$$, $DvtAccordionDefaults$$, $DvtPanelDrawerKeyboardHandler$$, $DvtPanelDrawerEventManager$$) {
    this.Init($DvtAccordionDefaults$$, $DvtPanelDrawerKeyboardHandler$$, $DvtPanelDrawerEventManager$$);
    this.$_breadcrumbs$ = $DvtTrainEvent$$
  }
  dvt.$AttrGroups$ = $JSCompiler_emptyFn$$();
  dvt.$Obj$.$createSubclass$(dvt.$AttrGroups$, dvt.$Obj$);
  dvt.$AttrGroups$.prototype.get = $JSCompiler_emptyFn$$();
  dvt.$DiscreteAttrGroups$ = function $dvt$$DiscreteAttrGroups$$() {
    this.$_results$ = []
  };
  dvt.$Obj$.$createSubclass$(dvt.$DiscreteAttrGroups$, dvt.$AttrGroups$);
  dvt.$DiscreteAttrGroups$.prototype.add = function $dvt$$DiscreteAttrGroups$$$add$($DvtTrainEvent$$, $DvtAccordionDefaults$$, $DvtPanelDrawerKeyboardHandler$$) {
    this.$_results$.push({group:$DvtTrainEvent$$, $groupLabel$:$DvtAccordionDefaults$$, $params$:$DvtPanelDrawerKeyboardHandler$$})
  };
  dvt.$DiscreteAttrGroups$.prototype.get = function $dvt$$DiscreteAttrGroups$$$get$($DvtTrainEvent$$) {
    if($DvtTrainEvent$$ === $JSCompiler_alias_NULL$$) {
      return $JSCompiler_alias_NULL$$
    }
    for(var $DvtAccordionDefaults$$ = 0;$DvtAccordionDefaults$$ < this.$_results$.length;$DvtAccordionDefaults$$++) {
      if(this.$_results$[$DvtAccordionDefaults$$].group == $DvtTrainEvent$$) {
        return this.$_results$[$DvtAccordionDefaults$$].$params$
      }
    }
    return $JSCompiler_alias_NULL$$
  };
  dvt.$DiscreteAttrGroups$.prototype.$getMappingsArray$ = function $dvt$$DiscreteAttrGroups$$$$getMappingsArray$$() {
    return this.$_results$.slice(0)
  };
  dvt.$ContinuousAttrGroups$ = function $dvt$$ContinuousAttrGroups$$($DvtTrainEvent$$, $DvtAccordionDefaults$$, $DvtPanelDrawerKeyboardHandler$$, $DvtPanelDrawerEventManager$$, $DvtPanelDrawerTab$$) {
    this.$_minValue$ = $DvtTrainEvent$$;
    this.$_maxValue$ = $DvtAccordionDefaults$$;
    this.$_minLabel$ = $DvtPanelDrawerKeyboardHandler$$ ? $DvtPanelDrawerKeyboardHandler$$ : this.$_minValue$;
    this.$_maxLabel$ = $DvtPanelDrawerEventManager$$ ? $DvtPanelDrawerEventManager$$ : this.$_maxValue$;
    this.$_ramp$ = $DvtPanelDrawerTab$$;
    this.$_range$ = this.$_maxValue$ - this.$_minValue$
  };
  dvt.$Obj$.$createSubclass$(dvt.$ContinuousAttrGroups$, dvt.$AttrGroups$);
  dvt.$ContinuousAttrGroups$.prototype.get = function $dvt$$ContinuousAttrGroups$$$get$($DvtTrainEvent$$) {
    if(isNaN($DvtTrainEvent$$) || $DvtTrainEvent$$ === $JSCompiler_alias_NULL$$) {
      return $JSCompiler_alias_NULL$$
    }
    $DvtTrainEvent$$ = 0 < this.$_range$ ? ($DvtTrainEvent$$ - this.$_minValue$) / this.$_range$ : 0.5;
    $DvtTrainEvent$$ = Math.max(Math.min($DvtTrainEvent$$, 1), 0);
    $DvtTrainEvent$$ *= this.$_ramp$.length - 1;
    return $DvtTrainEvent$$ === Math.round($DvtTrainEvent$$) ? this.$_ramp$[$DvtTrainEvent$$] : this.$_calcValue$(this.$_ramp$[Math.floor($DvtTrainEvent$$)], this.$_ramp$[Math.ceil($DvtTrainEvent$$)], $DvtTrainEvent$$ - Math.floor($DvtTrainEvent$$))
  };
  dvt.$ContinuousAttrGroups$.prototype.$getRamp$ = function $dvt$$ContinuousAttrGroups$$$$getRamp$$() {
    return this.$_ramp$.slice(0)
  };
  dvt.$ContinuousAttrGroups$.prototype.$getMinLabel$ = $JSCompiler_get$$("$_minLabel$");
  dvt.$ContinuousAttrGroups$.prototype.$_calcValue$ = function $dvt$$ContinuousAttrGroups$$$$_calcValue$$($DvtTrainEvent$$, $DvtAccordionDefaults$$, $DvtPanelDrawerKeyboardHandler$$) {
    return dvt.$ColorUtils$.$interpolateColor$($DvtTrainEvent$$, $DvtAccordionDefaults$$, $DvtPanelDrawerKeyboardHandler$$)
  };
  dvt.$LegendAttrGroupsRenderer$ = $JSCompiler_emptyFn$$();
  dvt.$Obj$.$createSubclass$(dvt.$LegendAttrGroupsRenderer$, dvt.$Obj$);
  dvt.$LegendAttrGroupsRenderer$.$_LEGEND_MAX_HEIGHT$ = 0.4;
  dvt.$LegendAttrGroupsRenderer$.$_CONTINUOUS_GROUP_GAP$ = 1;
  dvt.$LegendAttrGroupsRenderer$.$_CONTINUOUS_ITEM_WIDTH$ = 50;
  dvt.$LegendAttrGroupsRenderer$.$_CONTINUOUS_ITEM_HEIGHT$ = 10;
  dvt.$LegendAttrGroupsRenderer$.$_CONTINUOUS_ITEM_GAP$ = 5;
  dvt.$LegendAttrGroupsRenderer$.$_LABEL_SIZE$ = 11;
  dvt.$LegendAttrGroupsRenderer$.$_LABEL_COLOR$ = "#636363";
  dvt.$LegendAttrGroupsRenderer$.$_LABEL_VALUE_COLOR$ = "#333333";
  dvt.$LegendAttrGroupsRenderer$.$renderAttrGroups$ = function $dvt$$LegendAttrGroupsRenderer$$$renderAttrGroups$$($DvtTrainEvent$$, $DvtAccordionDefaults$$, $DvtPanelDrawerKeyboardHandler$$, $DvtPanelDrawerEventManager$$, $DvtPanelDrawerTab$$, $DvtBreadcrumbsPeer$$, $DvtBreadcrumbsEventManager$$) {
    var $DvtBreadcrumbsDefaults$$ = $JSCompiler_alias_NULL$$;
    $DvtBreadcrumbsPeer$$ && ($DvtBreadcrumbsPeer$$ instanceof dvt.$ContinuousAttrGroups$ ? $DvtBreadcrumbsDefaults$$ = dvt.$LegendAttrGroupsRenderer$.$_renderAttrGroupsContinuous$($DvtTrainEvent$$, $DvtAccordionDefaults$$, $DvtPanelDrawerKeyboardHandler$$, $DvtPanelDrawerEventManager$$, $DvtBreadcrumbsPeer$$, $DvtBreadcrumbsEventManager$$) : $DvtBreadcrumbsPeer$$ instanceof dvt.$DiscreteAttrGroups$ && ($DvtBreadcrumbsDefaults$$ = dvt.$LegendAttrGroupsRenderer$.$_renderAttrGroupsDiscrete$($DvtTrainEvent$$, 
    $DvtPanelDrawerKeyboardHandler$$, $DvtPanelDrawerEventManager$$, $DvtPanelDrawerTab$$, $DvtBreadcrumbsPeer$$, $DvtBreadcrumbsEventManager$$)));
    return $DvtBreadcrumbsDefaults$$
  };
  dvt.$LegendAttrGroupsRenderer$.$_renderAttrGroupsContinuous$ = function $dvt$$LegendAttrGroupsRenderer$$$_renderAttrGroupsContinuous$$($DvtTrainEvent$$, $DvtAccordionDefaults$$, $DvtPanelDrawerKeyboardHandler$$, $DvtPanelDrawerEventManager$$, $DvtPanelDrawerTab$$, $DvtBreadcrumbsPeer$$) {
    var $DvtBreadcrumbsEventManager$$ = dvt.$Agent$.$isRightToLeft$($DvtTrainEvent$$), $DvtBreadcrumbsDefaults$$ = dvt.$LegendAttrGroupsRenderer$.$_CONTINUOUS_ITEM_HEIGHT$ / 2 + dvt.$LegendAttrGroupsRenderer$.$_CONTINUOUS_GROUP_GAP$, $DvtBreadcrumbsRenderer$$ = new dvt.$Container$($DvtTrainEvent$$);
    $DvtPanelDrawerKeyboardHandler$$.$addChild$($DvtBreadcrumbsRenderer$$);
    $DvtPanelDrawerKeyboardHandler$$ = $DvtPanelDrawerTab$$.$getMinLabel$();
    var $minLabel$$2$$ = new dvt.$OutputText$($DvtTrainEvent$$, $DvtPanelDrawerKeyboardHandler$$, 0, $DvtBreadcrumbsDefaults$$);
    $minLabel$$2$$.$setCSSStyle$($DvtBreadcrumbsPeer$$.$labelStyle$);
    $minLabel$$2$$.$alignMiddle$();
    $DvtBreadcrumbsRenderer$$.$addChild$($minLabel$$2$$);
    var $gradientRect$$ = new dvt.$Rect$($DvtTrainEvent$$, 0, dvt.$LegendAttrGroupsRenderer$.$_CONTINUOUS_GROUP_GAP$, dvt.$LegendAttrGroupsRenderer$.$_CONTINUOUS_ITEM_WIDTH$, dvt.$LegendAttrGroupsRenderer$.$_CONTINUOUS_ITEM_HEIGHT$), $gradientWidth_ramp$$1$$ = $DvtBreadcrumbsEventManager$$ ? $DvtPanelDrawerTab$$.$getRamp$().slice().reverse() : $DvtPanelDrawerTab$$.$getRamp$();
    $gradientRect$$.$setFill$(new dvt.$LinearGradientFill$(0, $gradientWidth_ramp$$1$$));
    $DvtBreadcrumbsPeer$$.borderColor && $gradientRect$$.$setSolidStroke$($DvtBreadcrumbsPeer$$.borderColor);
    $DvtBreadcrumbsRenderer$$.$addChild$($gradientRect$$);
    $gradientWidth_ramp$$1$$ = dvt.$LegendAttrGroupsRenderer$.$_CONTINUOUS_ITEM_WIDTH$ + dvt.$LegendAttrGroupsRenderer$.$_CONTINUOUS_ITEM_GAP$;
    $DvtPanelDrawerTab$$ = $DvtPanelDrawerTab$$.$_maxLabel$;
    $DvtTrainEvent$$ = new dvt.$OutputText$($DvtTrainEvent$$, $DvtPanelDrawerTab$$, 0, $DvtBreadcrumbsDefaults$$);
    $DvtTrainEvent$$.$setCSSStyle$($DvtBreadcrumbsPeer$$.$labelStyle$);
    $DvtTrainEvent$$.$alignMiddle$();
    $DvtBreadcrumbsRenderer$$.$addChild$($DvtTrainEvent$$);
    $DvtBreadcrumbsEventManager$$ ? ($DvtBreadcrumbsPeer$$ = $DvtTrainEvent$$.$measureDimensions$().$w$ + dvt.$LegendAttrGroupsRenderer$.$_CONTINUOUS_ITEM_GAP$, $gradientRect$$.$setTranslateX$($DvtBreadcrumbsPeer$$), $minLabel$$2$$.$setX$($DvtBreadcrumbsPeer$$ + $gradientWidth_ramp$$1$$)) : ($DvtBreadcrumbsPeer$$ = $minLabel$$2$$.$measureDimensions$().$w$ + dvt.$LegendAttrGroupsRenderer$.$_CONTINUOUS_ITEM_GAP$, $gradientRect$$.$setTranslateX$($DvtBreadcrumbsPeer$$), $DvtTrainEvent$$.$setX$($DvtBreadcrumbsPeer$$ + 
    $gradientWidth_ramp$$1$$));
    $DvtAccordionDefaults$$.$associate$($gradientRect$$, new dvt.$SimpleObjPeer$($DvtPanelDrawerKeyboardHandler$$ + " - " + $DvtPanelDrawerTab$$));
    $DvtBreadcrumbsRenderer$$.$getDimensions$().$w$ > $DvtPanelDrawerEventManager$$ && ($DvtBreadcrumbsRenderer$$.removeChild($minLabel$$2$$), $DvtBreadcrumbsRenderer$$.removeChild($DvtTrainEvent$$), $gradientRect$$.$setTranslateX$(0));
    return $DvtBreadcrumbsRenderer$$
  };
  dvt.$LegendAttrGroupsRenderer$.$_renderAttrGroupsDiscrete$ = function $dvt$$LegendAttrGroupsRenderer$$$_renderAttrGroupsDiscrete$$($DvtTrainEvent$$, $DvtAccordionDefaults$$, $DvtPanelDrawerKeyboardHandler$$, $DvtPanelDrawerEventManager$$, $DvtPanelDrawerTab$$, $DvtBreadcrumbsPeer$$) {
    var $DvtBreadcrumbsEventManager$$ = new dvt.$Container$($DvtTrainEvent$$);
    $DvtAccordionDefaults$$.$addChild$($DvtBreadcrumbsEventManager$$);
    $DvtAccordionDefaults$$ = [];
    $DvtPanelDrawerTab$$ = $DvtPanelDrawerTab$$.$getMappingsArray$();
    for(var $DvtBreadcrumbsDefaults$$ = 0;$DvtBreadcrumbsDefaults$$ < $DvtPanelDrawerTab$$.length;$DvtBreadcrumbsDefaults$$++) {
      var $DvtBreadcrumbsRenderer$$ = $DvtPanelDrawerTab$$[$DvtBreadcrumbsDefaults$$];
      $DvtAccordionDefaults$$.push({text:$DvtBreadcrumbsRenderer$$.$groupLabel$, color:$DvtBreadcrumbsRenderer$$.$params$.color, pattern:$DvtBreadcrumbsRenderer$$.$params$.pattern, borderColor:$DvtBreadcrumbsPeer$$.borderColor})
    }
    $DvtBreadcrumbsPeer$$ = {sections:[{items:$DvtAccordionDefaults$$}], orientation:"horizontal", layout:{outerGapWidth:0, outerGapHeight:0}, textStyle:$DvtBreadcrumbsPeer$$.$labelStyle$.toString()};
    $DvtAccordionDefaults$$ = dvt.$Legend$.newInstance($DvtTrainEvent$$);
    $DvtAccordionDefaults$$.setId($JSCompiler_alias_NULL$$);
    $DvtBreadcrumbsEventManager$$.$addChild$($DvtAccordionDefaults$$);
    $DvtPanelDrawerEventManager$$ = $DvtAccordionDefaults$$.$getPreferredSize$($DvtBreadcrumbsPeer$$, $DvtPanelDrawerKeyboardHandler$$, $DvtPanelDrawerEventManager$$ * dvt.$LegendAttrGroupsRenderer$.$_LEGEND_MAX_HEIGHT$);
    $DvtAccordionDefaults$$.$render$($DvtBreadcrumbsPeer$$, $DvtPanelDrawerKeyboardHandler$$, $DvtPanelDrawerEventManager$$.$h$);
    $DvtPanelDrawerKeyboardHandler$$ = $DvtAccordionDefaults$$.$getContentDimensions$();
    $DvtTrainEvent$$ = new dvt.$Rect$($DvtTrainEvent$$, 0, 0, $DvtPanelDrawerKeyboardHandler$$.$w$, $DvtPanelDrawerEventManager$$.$h$);
    $DvtTrainEvent$$.$setInvisibleFill$();
    $DvtBreadcrumbsEventManager$$.$addChildAt$($DvtTrainEvent$$, 0);
    return $DvtBreadcrumbsEventManager$$
  };
  dvt.$BreadcrumbsDrillEvent$ = function $dvt$$BreadcrumbsDrillEvent$$($DvtTrainEvent$$) {
    this.Init(dvt.$BreadcrumbsDrillEvent$.$TYPE$);
    this.$_id$ = $DvtTrainEvent$$
  };
  dvt.$Obj$.$createSubclass$(dvt.$BreadcrumbsDrillEvent$, dvt.$BaseComponentEvent$);
  dvt.$BreadcrumbsDrillEvent$.$TYPE$ = "breadcrumbsDrill";
  dvt.$BreadcrumbsDrillEvent$.prototype.getId = $JSCompiler_get$$("$_id$");
  dvt.$Breadcrumbs$ = function $dvt$$Breadcrumbs$$($DvtTrainEvent$$, $DvtAccordionDefaults$$, $DvtPanelDrawerKeyboardHandler$$, $DvtPanelDrawerEventManager$$) {
    this.Init($DvtTrainEvent$$, $DvtAccordionDefaults$$, $DvtPanelDrawerKeyboardHandler$$, $DvtPanelDrawerEventManager$$)
  };
  dvt.$Obj$.$createSubclass$(dvt.$Breadcrumbs$, dvt.$Container$);
  dvt.$Breadcrumbs$.prototype.Init = function $dvt$$Breadcrumbs$$$Init$($DvtTrainEvent$$, $DvtAccordionDefaults$$, $DvtPanelDrawerKeyboardHandler$$, $DvtPanelDrawerEventManager$$) {
    dvt.$Breadcrumbs$.$superclass$.Init.call(this, $DvtTrainEvent$$);
    this.$setOptions$($DvtPanelDrawerEventManager$$);
    this.$_eventHandler$ = new $DvtBreadcrumbsEventManager$$(this, $DvtTrainEvent$$, $DvtAccordionDefaults$$, $DvtPanelDrawerKeyboardHandler$$);
    this.$_eventHandler$.$addListeners$(this);
    this.setId("breadcrumbs1000" + Math.floor(1E9 * Math.random()));
    this.$_curCrumbIdx$ = -1;
    this.$_crumbs$ = this.$_keyboardFocusRect$ = $JSCompiler_alias_NULL$$
  };
  dvt.$Breadcrumbs$.prototype.$setOptions$ = function $dvt$$Breadcrumbs$$$$setOptions$$($DvtTrainEvent$$) {
    this.$_options$ = $DvtBreadcrumbsDefaults$$.$calcOptions$($DvtTrainEvent$$)
  };
  dvt.$Breadcrumbs$.prototype.$render$ = function $dvt$$Breadcrumbs$$$$render$$($DvtTrainEvent$$, $DvtAccordionDefaults$$) {
    this.$_data$ = $DvtTrainEvent$$ ? dvt.$JsonUtils$.$clone$($DvtTrainEvent$$) : this.$_data$;
    this.$removeChildren$();
    this.$SetCrumbs$($JSCompiler_alias_NULL$$);
    $DvtBreadcrumbsRenderer$$.$render$(this, this, $DvtAccordionDefaults$$)
  };
  dvt.$Breadcrumbs$.prototype.$__getData$ = function $dvt$$Breadcrumbs$$$$__getData$$() {
    return this.$_data$ ? this.$_data$ : {}
  };
  dvt.$Breadcrumbs$.prototype.$getEventManager$ = $JSCompiler_get$$("$_eventHandler$");
  dvt.$Breadcrumbs$.prototype.$hideKeyboardFocusEffect$ = function $dvt$$Breadcrumbs$$$$hideKeyboardFocusEffect$$() {
    var $DvtTrainEvent$$ = this.$_curCrumbIdx$;
    this.$_curCrumbIdx$ = -1;
    this.$_updateKeyboardFocusEffect$($DvtTrainEvent$$, this.$_curCrumbIdx$)
  };
  dvt.$Breadcrumbs$.prototype.$updateCrumbFocus$ = function $dvt$$Breadcrumbs$$$$updateCrumbFocus$$($DvtTrainEvent$$) {
    var $DvtAccordionDefaults$$ = this.$_curCrumbIdx$;
    this.$_curCrumbIdx$ = this.$_getUpdatedCrumbIndex$($DvtAccordionDefaults$$, !$DvtTrainEvent$$);
    this.$_updateKeyboardFocusEffect$($DvtAccordionDefaults$$, this.$_curCrumbIdx$);
    return this.$_curCrumbIdx$
  };
  dvt.$Breadcrumbs$.prototype.$_getUpdatedCrumbIndex$ = function $dvt$$Breadcrumbs$$$$_getUpdatedCrumbIndex$$($DvtTrainEvent$$, $DvtAccordionDefaults$$) {
    return-1 == $DvtTrainEvent$$ ? $DvtAccordionDefaults$$ ? 0 : this.$_data$.$items$.length - 2 : $DvtAccordionDefaults$$ ? $DvtTrainEvent$$ == this.$_data$.$items$.length - 2 ? -1 : ++$DvtTrainEvent$$ : 0 == $DvtTrainEvent$$ ? -1 : --$DvtTrainEvent$$
  };
  dvt.$Breadcrumbs$.prototype.$_updateKeyboardFocusEffect$ = function $dvt$$Breadcrumbs$$$$_updateKeyboardFocusEffect$$($DvtTrainEvent$$, $DvtAccordionDefaults$$) {
    var $DvtPanelDrawerKeyboardHandler$$ = this.$_keyboardFocusRect$, $DvtPanelDrawerEventManager$$ = $JSCompiler_alias_NULL$$, $DvtPanelDrawerTab$$ = this.$getCrumb$($DvtAccordionDefaults$$);
    if($DvtPanelDrawerTab$$) {
      var $DvtBreadcrumbsPeer$$ = this.$_eventHandler$.$GetLogicalObject$($DvtPanelDrawerTab$$);
      $DvtBreadcrumbsPeer$$ && $DvtBreadcrumbsPeer$$.$isDrillable$ && $DvtBreadcrumbsPeer$$.$isDrillable$() ? ($DvtPanelDrawerEventManager$$ = this.$getCtx$(), $DvtBreadcrumbsPeer$$ = $DvtPanelDrawerTab$$.$getDimensions$(), $DvtPanelDrawerTab$$ = $DvtPanelDrawerTab$$.$getMatrix$(), this.$_keyboardFocusRect$ = $DvtPanelDrawerEventManager$$ = new dvt.$KeyboardFocusEffect$($DvtPanelDrawerEventManager$$, this, $DvtBreadcrumbsPeer$$, $DvtPanelDrawerTab$$)) : this.$_keyboardFocusRect$ = $JSCompiler_alias_NULL$$
    }
    $DvtPanelDrawerKeyboardHandler$$ && $DvtPanelDrawerKeyboardHandler$$.$hide$();
    $DvtPanelDrawerEventManager$$ && $DvtPanelDrawerEventManager$$.show()
  };
  dvt.$Breadcrumbs$.prototype.$getCrumb$ = function $dvt$$Breadcrumbs$$$$getCrumb$$($DvtTrainEvent$$) {
    var $DvtAccordionDefaults$$ = this.$_crumbs$;
    return 0 > $DvtTrainEvent$$ || !$DvtAccordionDefaults$$ || $DvtTrainEvent$$ >= $DvtAccordionDefaults$$.length ? $JSCompiler_alias_NULL$$ : $DvtAccordionDefaults$$[$DvtTrainEvent$$]
  };
  dvt.$Breadcrumbs$.prototype.$getCrumbIndex$ = function $dvt$$Breadcrumbs$$$$getCrumbIndex$$($DvtTrainEvent$$) {
    for(var $DvtAccordionDefaults$$ = this.$_crumbs$, $DvtPanelDrawerKeyboardHandler$$ = 0;$DvtPanelDrawerKeyboardHandler$$ < $DvtAccordionDefaults$$.length;$DvtPanelDrawerKeyboardHandler$$++) {
      if($DvtAccordionDefaults$$[$DvtPanelDrawerKeyboardHandler$$] == $DvtTrainEvent$$) {
        return $DvtPanelDrawerKeyboardHandler$$
      }
    }
  };
  dvt.$Breadcrumbs$.prototype.$SetCrumbs$ = $JSCompiler_set$$("$_crumbs$");
  var $DvtBreadcrumbsDefaults$$ = {};
  dvt.$Obj$.$createSubclass$($DvtBreadcrumbsDefaults$$, dvt.$Obj$);
  $DvtBreadcrumbsDefaults$$.$VERSION_1$ = {labelStyle:"font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 11px; color: #003286;", disabledLabelStyle:"font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 11px;", $__labelGap$:2, $__labelSeparator$:"\x3e"};
  $DvtBreadcrumbsDefaults$$.$calcOptions$ = function $$DvtBreadcrumbsDefaults$$$$calcOptions$$($DvtTrainEvent$$) {
    var $DvtAccordionDefaults$$ = $DvtBreadcrumbsDefaults$$.$_getDefaults$($DvtTrainEvent$$);
    return $DvtTrainEvent$$ ? dvt.$JsonUtils$.$merge$($DvtTrainEvent$$, $DvtAccordionDefaults$$) : $DvtAccordionDefaults$$
  };
  $DvtBreadcrumbsDefaults$$.$_getDefaults$ = function $$DvtBreadcrumbsDefaults$$$$_getDefaults$$() {
    return dvt.$JsonUtils$.$clone$($DvtBreadcrumbsDefaults$$.$VERSION_1$)
  };
  $DvtBreadcrumbsDefaults$$.$getGapSize$ = function $$DvtBreadcrumbsDefaults$$$$getGapSize$$($DvtTrainEvent$$, $DvtAccordionDefaults$$) {
    return Math.ceil($DvtAccordionDefaults$$ * $DvtTrainEvent$$.layout.gapRatio)
  };
  dvt.$Obj$.$createSubclass$($DvtBreadcrumbsEventManager$$, dvt.$EventManager$);
  $DvtBreadcrumbsEventManager$$.prototype.$OnClick$ = function $$DvtBreadcrumbsEventManager$$$$$OnClick$$($DvtTrainEvent$$) {
    $DvtBreadcrumbsEventManager$$.$superclass$.$OnClick$.call(this, $DvtTrainEvent$$);
    this.$_processBreadcrumbs$(this.$GetLogicalObject$($DvtTrainEvent$$.target))
  };
  $DvtBreadcrumbsEventManager$$.prototype.$HandleTouchClickInternal$ = function $$DvtBreadcrumbsEventManager$$$$$HandleTouchClickInternal$$($DvtTrainEvent$$) {
    this.$_processBreadcrumbs$(this.$GetLogicalObject$($DvtTrainEvent$$.target))
  };
  $DvtBreadcrumbsEventManager$$.prototype.$_processBreadcrumbs$ = function $$DvtBreadcrumbsEventManager$$$$$_processBreadcrumbs$$($DvtTrainEvent$$) {
    $DvtTrainEvent$$ && ($DvtTrainEvent$$ instanceof $DvtBreadcrumbsPeer$$ && $DvtTrainEvent$$.$isDrillable$()) && ($DvtTrainEvent$$ = new dvt.$BreadcrumbsDrillEvent$($DvtTrainEvent$$.getId()), this.$FireEvent$($DvtTrainEvent$$, this.$_breadcrumbs$))
  };
  $DvtBreadcrumbsEventManager$$.prototype.$handleKeyboardEvent$ = function $$DvtBreadcrumbsEventManager$$$$$handleKeyboardEvent$$($DvtTrainEvent$$) {
    var $DvtAccordionDefaults$$ = $JSCompiler_alias_TRUE$$, $DvtPanelDrawerKeyboardHandler$$ = $DvtTrainEvent$$.keyCode;
    $DvtPanelDrawerKeyboardHandler$$ == dvt.$KeyboardEvent$.$TAB$ ? ($DvtPanelDrawerKeyboardHandler$$ = this.$_breadcrumbs$.$updateCrumbFocus$($DvtTrainEvent$$.shiftKey), -1 == $DvtPanelDrawerKeyboardHandler$$ ? $DvtAccordionDefaults$$ = $JSCompiler_alias_FALSE$$ : this.$UpdateActiveElement$(this.$_breadcrumbs$.$getCrumb$($DvtPanelDrawerKeyboardHandler$$))) : $DvtPanelDrawerKeyboardHandler$$ == dvt.$KeyboardEvent$.$ENTER$ && this.$_processBreadcrumbs$(this.$GetLogicalObject$(this.$_breadcrumbs$.$getCrumb$(this.$_breadcrumbs$.$_curCrumbIdx$)));
    $DvtAccordionDefaults$$ && dvt.$EventManager$.$consumeEvent$($DvtTrainEvent$$);
    return $DvtAccordionDefaults$$
  };
  dvt.$Obj$.$createSubclass$($DvtBreadcrumbsPeer$$, dvt.$SimpleObjPeer$);
  $DvtBreadcrumbsPeer$$.prototype.getId = $JSCompiler_get$$("$_id$");
  $DvtBreadcrumbsPeer$$.prototype.$isDrillable$ = $JSCompiler_get$$("$_bDrillable$");
  $DvtBreadcrumbsPeer$$.prototype.$setDrillable$ = $JSCompiler_set$$("$_bDrillable$");
  $DvtBreadcrumbsPeer$$.prototype.$getDisplayable$ = $JSCompiler_get$$("$_displayable$");
  var $DvtBreadcrumbsRenderer$$ = {};
  dvt.$Obj$.$createSubclass$($DvtBreadcrumbsRenderer$$, dvt.$Obj$);
  $DvtBreadcrumbsRenderer$$.$_TOUCH_BUFFER$ = 3;
  $DvtBreadcrumbsRenderer$$.$render$ = function $$DvtBreadcrumbsRenderer$$$$render$$($DvtTrainEvent$$, $DvtAccordionDefaults$$, $DvtPanelDrawerKeyboardHandler$$) {
    for(var $DvtPanelDrawerEventManager$$ = $DvtTrainEvent$$.$getCtx$(), $DvtPanelDrawerTab$$ = $DvtTrainEvent$$.$__getData$().$items$ ? $DvtTrainEvent$$.$__getData$().$items$ : [], $DvtBreadcrumbsEventManager$$ = $DvtTrainEvent$$.$_options$, $DvtBreadcrumbsDefaults$$ = $DvtTrainEvent$$.$getEventManager$(), $labels$$23$$ = [], $peers$$9$$ = [], $i$$548$$ = 0;$i$$548$$ < $DvtPanelDrawerTab$$.length;$i$$548$$++) {
      var $dataItem$$41_peer$$27$$ = $DvtPanelDrawerTab$$[$i$$548$$];
      if($dataItem$$41_peer$$27$$) {
        var $label$$68$$ = $DvtBreadcrumbsRenderer$$.$_createLabel$($DvtPanelDrawerEventManager$$, $dataItem$$41_peer$$27$$.label ? $dataItem$$41_peer$$27$$.label : "", $DvtBreadcrumbsEventManager$$, $i$$548$$ < $DvtPanelDrawerTab$$.length - 1);
        $labels$$23$$.push($label$$68$$);
        $dataItem$$41_peer$$27$$ = new $DvtBreadcrumbsPeer$$($dataItem$$41_peer$$27$$.id, $label$$68$$);
        $DvtBreadcrumbsDefaults$$.$associate$($label$$68$$, $dataItem$$41_peer$$27$$);
        $peers$$9$$.push($dataItem$$41_peer$$27$$);
        $i$$548$$ < $DvtPanelDrawerTab$$.length - 1 && $dataItem$$41_peer$$27$$.$setDrillable$($JSCompiler_alias_TRUE$$)
      }
    }
    $DvtTrainEvent$$.$SetCrumbs$($labels$$23$$);
    dvt.$Agent$.$isRightToLeft$($DvtPanelDrawerEventManager$$) ? $DvtBreadcrumbsRenderer$$.$_positionLabelsBidi$($DvtTrainEvent$$, $DvtAccordionDefaults$$, $DvtPanelDrawerKeyboardHandler$$, $labels$$23$$, $peers$$9$$) : $DvtBreadcrumbsRenderer$$.$_positionLabels$($DvtTrainEvent$$, $DvtAccordionDefaults$$, $DvtPanelDrawerKeyboardHandler$$, $labels$$23$$, $peers$$9$$)
  };
  $DvtBreadcrumbsRenderer$$.$_createButtonState$ = function $$DvtBreadcrumbsRenderer$$$$_createButtonState$$($DvtTrainEvent$$, $DvtAccordionDefaults$$, $DvtPanelDrawerKeyboardHandler$$) {
    $DvtAccordionDefaults$$ = new dvt.$OutputText$($DvtTrainEvent$$, $DvtAccordionDefaults$$, 0, 0);
    $DvtAccordionDefaults$$.$setMouseEnabled$($JSCompiler_alias_FALSE$$);
    $DvtAccordionDefaults$$.$setCSSStyle$($DvtPanelDrawerKeyboardHandler$$);
    var $DvtPanelDrawerEventManager$$ = $DvtPanelDrawerKeyboardHandler$$.$getPadding$(dvt.$CSSStyle$.$PADDING_TOP$), $DvtPanelDrawerTab$$ = $DvtPanelDrawerKeyboardHandler$$.$getPadding$(dvt.$CSSStyle$.$PADDING_RIGHT$), $DvtBreadcrumbsPeer$$ = $DvtPanelDrawerKeyboardHandler$$.$getPadding$(dvt.$CSSStyle$.$PADDING_BOTTOM$), $DvtBreadcrumbsEventManager$$ = $DvtPanelDrawerKeyboardHandler$$.$getPadding$(dvt.$CSSStyle$.$PADDING_LEFT$), $DvtBreadcrumbsDefaults$$ = dvt.$DisplayableUtils$.$getDimensionsForced$($DvtTrainEvent$$, 
    $DvtAccordionDefaults$$);
    $DvtTrainEvent$$ = new dvt.$Rect$($DvtTrainEvent$$, 0, 0, $DvtBreadcrumbsDefaults$$.$w$ + $DvtBreadcrumbsEventManager$$ + $DvtPanelDrawerTab$$, $DvtBreadcrumbsDefaults$$.$h$ + $DvtPanelDrawerEventManager$$ + $DvtBreadcrumbsPeer$$);
    $DvtTrainEvent$$.$setInvisibleFill$();
    $DvtTrainEvent$$.$setCSSStyle$($DvtPanelDrawerKeyboardHandler$$);
    $DvtAccordionDefaults$$.$setTranslate$($DvtBreadcrumbsEventManager$$, $DvtPanelDrawerEventManager$$);
    $DvtTrainEvent$$.$addChild$($DvtAccordionDefaults$$);
    return $DvtTrainEvent$$
  };
  $DvtBreadcrumbsRenderer$$.$_createLabel$ = function $$DvtBreadcrumbsRenderer$$$$_createLabel$$($DvtTrainEvent$$, $DvtAccordionDefaults$$, $DvtPanelDrawerKeyboardHandler$$, $DvtPanelDrawerEventManager$$) {
    if($DvtPanelDrawerEventManager$$ && ($DvtPanelDrawerKeyboardHandler$$.$labelStyleOver$ || $DvtPanelDrawerKeyboardHandler$$.$labelStyleDown$)) {
      var $DvtPanelDrawerTab$$ = new dvt.$CSSStyle$($DvtPanelDrawerKeyboardHandler$$.$labelStyle$);
      $DvtPanelDrawerEventManager$$ = new dvt.$CSSStyle$($DvtPanelDrawerKeyboardHandler$$.$labelStyleOver$);
      $DvtPanelDrawerKeyboardHandler$$ = new dvt.$CSSStyle$($DvtPanelDrawerKeyboardHandler$$.$labelStyleDown$);
      $DvtPanelDrawerTab$$ = $DvtBreadcrumbsRenderer$$.$_createButtonState$($DvtTrainEvent$$, $DvtAccordionDefaults$$, $DvtPanelDrawerTab$$);
      $DvtPanelDrawerEventManager$$ = $DvtBreadcrumbsRenderer$$.$_createButtonState$($DvtTrainEvent$$, $DvtAccordionDefaults$$, $DvtPanelDrawerEventManager$$);
      $DvtPanelDrawerKeyboardHandler$$ = $DvtBreadcrumbsRenderer$$.$_createButtonState$($DvtTrainEvent$$, $DvtAccordionDefaults$$, $DvtPanelDrawerKeyboardHandler$$);
      $DvtTrainEvent$$ = new dvt.$Button$($DvtTrainEvent$$, $DvtPanelDrawerTab$$, $DvtPanelDrawerEventManager$$, $DvtPanelDrawerKeyboardHandler$$);
      $DvtTrainEvent$$.$setAriaRole$("link");
      $DvtTrainEvent$$.$setAriaProperty$("label", $DvtAccordionDefaults$$)
    }else {
      $DvtPanelDrawerEventManager$$ = new dvt.$CSSStyle$($DvtPanelDrawerEventManager$$ ? $DvtPanelDrawerKeyboardHandler$$.$labelStyle$ : $DvtPanelDrawerKeyboardHandler$$.$disabledLabelStyle$), $DvtPanelDrawerEventManager$$.$getPadding$(dvt.$CSSStyle$.$PADDING_LEFT$) || $DvtPanelDrawerEventManager$$.$getPadding$(dvt.$CSSStyle$.$PADDING_RIGHT$) || $DvtPanelDrawerEventManager$$.$getPadding$(dvt.$CSSStyle$.$PADDING_TOP$) || $DvtPanelDrawerEventManager$$.$getPadding$(dvt.$CSSStyle$.$PADDING_BOTTOM$) ? 
      $DvtTrainEvent$$ = $DvtBreadcrumbsRenderer$$.$_createButtonState$($DvtTrainEvent$$, $DvtAccordionDefaults$$, $DvtPanelDrawerEventManager$$) : ($DvtTrainEvent$$ = new dvt.$OutputText$($DvtTrainEvent$$, $DvtAccordionDefaults$$, 0, 0), $DvtTrainEvent$$.$setCSSStyle$($DvtPanelDrawerEventManager$$))
    }
    return $DvtTrainEvent$$
  };
  $DvtBreadcrumbsRenderer$$.$_getLabelTextString$ = function $$DvtBreadcrumbsRenderer$$$$_getLabelTextString$$($DvtTrainEvent$$) {
    if($DvtTrainEvent$$ instanceof dvt.$Button$) {
      return $DvtTrainEvent$$ = $DvtTrainEvent$$.$upState$.$getChildAt$(0), $DvtTrainEvent$$.$getTextString$()
    }
    $DvtTrainEvent$$ instanceof dvt.$Rect$ && ($DvtTrainEvent$$ = $DvtTrainEvent$$.$getChildAt$(0));
    return $DvtTrainEvent$$.$getTextString$()
  };
  $DvtBreadcrumbsRenderer$$.$_truncateLabels$ = function $$DvtBreadcrumbsRenderer$$$$_truncateLabels$$($DvtTrainEvent$$, $DvtAccordionDefaults$$) {
    if($DvtTrainEvent$$ instanceof dvt.$Button$) {
      var $DvtPanelDrawerKeyboardHandler$$ = $DvtTrainEvent$$.$upState$.$getChildAt$(0);
      dvt.$TextUtils$.$fitText$($DvtPanelDrawerKeyboardHandler$$, Math.max($DvtAccordionDefaults$$ - $DvtPanelDrawerKeyboardHandler$$.$getTranslateX$(), 0), Infinity, $DvtPanelDrawerKeyboardHandler$$.getParent());
      $DvtPanelDrawerKeyboardHandler$$ = $DvtTrainEvent$$.$overState$.$getChildAt$(0);
      dvt.$TextUtils$.$fitText$($DvtPanelDrawerKeyboardHandler$$, Math.max($DvtAccordionDefaults$$ - $DvtPanelDrawerKeyboardHandler$$.$getTranslateX$(), 0), Infinity, $DvtPanelDrawerKeyboardHandler$$.getParent());
      $DvtPanelDrawerKeyboardHandler$$ = $DvtTrainEvent$$.$downState$.$getChildAt$(0);
      dvt.$TextUtils$.$fitText$($DvtPanelDrawerKeyboardHandler$$, Math.max($DvtAccordionDefaults$$ - $DvtPanelDrawerKeyboardHandler$$.$getTranslateX$(), 0), Infinity, $DvtPanelDrawerKeyboardHandler$$.getParent())
    }else {
      $DvtTrainEvent$$ instanceof dvt.$Rect$ ? ($DvtPanelDrawerKeyboardHandler$$ = $DvtTrainEvent$$.$getChildAt$(0), dvt.$TextUtils$.$fitText$($DvtPanelDrawerKeyboardHandler$$, Math.max($DvtAccordionDefaults$$ - $DvtPanelDrawerKeyboardHandler$$.$getTranslateX$(), 0), Infinity, $DvtPanelDrawerKeyboardHandler$$.getParent())) : dvt.$TextUtils$.$fitText$($DvtTrainEvent$$, $DvtAccordionDefaults$$, Infinity, $DvtTrainEvent$$.getParent())
    }
  };
  $DvtBreadcrumbsRenderer$$.$_positionLabels$ = function $$DvtBreadcrumbsRenderer$$$$_positionLabels$$($DvtTrainEvent$$, $DvtAccordionDefaults$$, $DvtPanelDrawerKeyboardHandler$$, $DvtPanelDrawerEventManager$$, $DvtPanelDrawerTab$$) {
    for(var $DvtBreadcrumbsPeer$$ = $DvtTrainEvent$$.$_options$, $DvtBreadcrumbsEventManager$$ = $DvtTrainEvent$$.$getEventManager$(), $DvtBreadcrumbsDefaults$$ = [], $maxHeight$$11$$ = 0, $i$$549$$ = 0;$i$$549$$ < $DvtPanelDrawerEventManager$$.length;$i$$549$$++) {
      $DvtAccordionDefaults$$.$addChild$($DvtPanelDrawerEventManager$$[$i$$549$$]);
      var $dims$$47_separator$$1$$ = $DvtPanelDrawerEventManager$$[$i$$549$$].$getDimensions$();
      $DvtBreadcrumbsDefaults$$[$i$$549$$] = $dims$$47_separator$$1$$;
      $maxHeight$$11$$ = Math.max($dims$$47_separator$$1$$.$h$, $maxHeight$$11$$);
      $DvtAccordionDefaults$$.removeChild($DvtPanelDrawerEventManager$$[$i$$549$$])
    }
    for(var $x$$177$$ = 0, $i$$549$$ = 0;$i$$549$$ < $DvtPanelDrawerEventManager$$.length;$i$$549$$++) {
      $DvtAccordionDefaults$$.$addChild$($DvtPanelDrawerEventManager$$[$i$$549$$]);
      $dims$$47_separator$$1$$ = $DvtBreadcrumbsDefaults$$[$i$$549$$];
      $DvtPanelDrawerEventManager$$[$i$$549$$].$setTranslate$($x$$177$$, 0.5 * ($maxHeight$$11$$ - $dims$$47_separator$$1$$.$h$));
      if(dvt.$Agent$.$isTouchDevice$()) {
        var $rect$$32_sepDims_separatorWidth$$ = new dvt.$Rect$($DvtAccordionDefaults$$.$getCtx$(), -$DvtBreadcrumbsRenderer$$.$_TOUCH_BUFFER$, -$DvtBreadcrumbsRenderer$$.$_TOUCH_BUFFER$, $dims$$47_separator$$1$$.$w$ + 2 * $DvtBreadcrumbsRenderer$$.$_TOUCH_BUFFER$, $dims$$47_separator$$1$$.$h$ + 2 * $DvtBreadcrumbsRenderer$$.$_TOUCH_BUFFER$);
        $rect$$32_sepDims_separatorWidth$$.$setInvisibleFill$();
        $DvtPanelDrawerEventManager$$[$i$$549$$].$addChild$($rect$$32_sepDims_separatorWidth$$);
        $i$$549$$ < $DvtPanelDrawerTab$$.length && $DvtBreadcrumbsEventManager$$.$associate$($rect$$32_sepDims_separatorWidth$$, $DvtPanelDrawerTab$$[$i$$549$$])
      }
      if($x$$177$$ + $dims$$47_separator$$1$$.$w$ > $DvtPanelDrawerKeyboardHandler$$) {
        $DvtTrainEvent$$ = $DvtBreadcrumbsRenderer$$.$_getLabelTextString$($DvtPanelDrawerEventManager$$[$i$$549$$]);
        $DvtBreadcrumbsRenderer$$.$_truncateLabels$($DvtPanelDrawerEventManager$$[$i$$549$$], $DvtPanelDrawerKeyboardHandler$$ - $x$$177$$);
        $i$$549$$ < $DvtPanelDrawerTab$$.length ? $DvtPanelDrawerTab$$[$i$$549$$].$setTooltip$($DvtTrainEvent$$) : $DvtBreadcrumbsEventManager$$.$associate$($DvtPanelDrawerEventManager$$[$i$$549$$], new dvt.$SimpleObjPeer$($DvtTrainEvent$$));
        break
      }else {
        $x$$177$$ += $dims$$47_separator$$1$$.$w$ + $DvtBreadcrumbsPeer$$.$__labelGap$
      }
      if($i$$549$$ < $DvtPanelDrawerEventManager$$.length - 1) {
        $dims$$47_separator$$1$$ = $DvtBreadcrumbsRenderer$$.$_newSeparator$($DvtTrainEvent$$);
        $DvtAccordionDefaults$$.$addChild$($dims$$47_separator$$1$$);
        $rect$$32_sepDims_separatorWidth$$ = $dims$$47_separator$$1$$.$getDimensions$();
        $dims$$47_separator$$1$$.$setTranslate$($x$$177$$, 0.5 * ($maxHeight$$11$$ - $rect$$32_sepDims_separatorWidth$$.$h$));
        $rect$$32_sepDims_separatorWidth$$ = $rect$$32_sepDims_separatorWidth$$.$w$;
        if($x$$177$$ + $rect$$32_sepDims_separatorWidth$$ > $DvtPanelDrawerKeyboardHandler$$) {
          $DvtAccordionDefaults$$.removeChild($dims$$47_separator$$1$$);
          break
        }
        $x$$177$$ += $rect$$32_sepDims_separatorWidth$$ + $DvtBreadcrumbsPeer$$.$__labelGap$
      }
    }
  };
  $DvtBreadcrumbsRenderer$$.$_positionLabelsBidi$ = function $$DvtBreadcrumbsRenderer$$$$_positionLabelsBidi$$($DvtTrainEvent$$, $DvtAccordionDefaults$$, $DvtPanelDrawerKeyboardHandler$$, $DvtPanelDrawerEventManager$$, $DvtPanelDrawerTab$$) {
    for(var $DvtBreadcrumbsPeer$$ = $DvtTrainEvent$$.$_options$, $DvtBreadcrumbsEventManager$$ = $DvtTrainEvent$$.$getEventManager$(), $DvtBreadcrumbsDefaults$$ = 0;$DvtBreadcrumbsDefaults$$ < $DvtPanelDrawerEventManager$$.length;$DvtBreadcrumbsDefaults$$++) {
      $DvtAccordionDefaults$$.$addChild$($DvtPanelDrawerEventManager$$[$DvtBreadcrumbsDefaults$$]);
      var $dims$$48_separator$$2$$ = $DvtPanelDrawerEventManager$$[$DvtBreadcrumbsDefaults$$].$getDimensions$();
      if(dvt.$Agent$.$isTouchDevice$()) {
        var $rect$$33_separatorWidth$$1$$ = new dvt.$Rect$($DvtAccordionDefaults$$.$getCtx$(), -$DvtBreadcrumbsRenderer$$.$_TOUCH_BUFFER$, -$DvtBreadcrumbsRenderer$$.$_TOUCH_BUFFER$, $dims$$48_separator$$2$$.$w$ + 2 * $DvtBreadcrumbsRenderer$$.$_TOUCH_BUFFER$, $dims$$48_separator$$2$$.$h$ + 2 * $DvtBreadcrumbsRenderer$$.$_TOUCH_BUFFER$);
        $rect$$33_separatorWidth$$1$$.$setInvisibleFill$();
        $DvtPanelDrawerEventManager$$[$DvtBreadcrumbsDefaults$$].$addChild$($rect$$33_separatorWidth$$1$$);
        $DvtBreadcrumbsDefaults$$ < $DvtPanelDrawerTab$$.length && $DvtBreadcrumbsEventManager$$.$associate$($rect$$33_separatorWidth$$1$$, $DvtPanelDrawerTab$$[$DvtBreadcrumbsDefaults$$])
      }
      if(0 > $DvtPanelDrawerKeyboardHandler$$ - $dims$$48_separator$$2$$.$w$) {
        $DvtTrainEvent$$ = $DvtBreadcrumbsRenderer$$.$_getLabelTextString$($DvtPanelDrawerEventManager$$[$DvtBreadcrumbsDefaults$$]);
        $DvtBreadcrumbsRenderer$$.$_truncateLabels$($DvtPanelDrawerEventManager$$[$DvtBreadcrumbsDefaults$$], $DvtPanelDrawerKeyboardHandler$$);
        $DvtPanelDrawerEventManager$$[$DvtBreadcrumbsDefaults$$].$setTranslateX$(0);
        $DvtBreadcrumbsDefaults$$ < $DvtPanelDrawerTab$$.length ? $DvtPanelDrawerTab$$[$DvtBreadcrumbsDefaults$$].$setTooltip$($DvtTrainEvent$$) : $DvtBreadcrumbsEventManager$$.$associate$($DvtPanelDrawerEventManager$$[$DvtBreadcrumbsDefaults$$], new dvt.$SimpleObjPeer$($DvtTrainEvent$$));
        break
      }else {
        $DvtPanelDrawerEventManager$$[$DvtBreadcrumbsDefaults$$].$setTranslateX$($DvtPanelDrawerKeyboardHandler$$ - $dims$$48_separator$$2$$.$w$), $DvtPanelDrawerKeyboardHandler$$ -= $dims$$48_separator$$2$$.$w$ + $DvtBreadcrumbsPeer$$.$__labelGap$
      }
      if($DvtBreadcrumbsDefaults$$ < $DvtPanelDrawerEventManager$$.length - 1) {
        if($dims$$48_separator$$2$$ = $DvtBreadcrumbsRenderer$$.$_newSeparator$($DvtTrainEvent$$), $DvtAccordionDefaults$$.$addChild$($dims$$48_separator$$2$$), $rect$$33_separatorWidth$$1$$ = $dims$$48_separator$$2$$.$getDimensions$().$w$, 0 > $DvtPanelDrawerKeyboardHandler$$ - $rect$$33_separatorWidth$$1$$) {
          $DvtAccordionDefaults$$.removeChild($dims$$48_separator$$2$$);
          break
        }else {
          $dims$$48_separator$$2$$.$setTranslateX$($DvtPanelDrawerKeyboardHandler$$ - $rect$$33_separatorWidth$$1$$), $DvtPanelDrawerKeyboardHandler$$ -= $rect$$33_separatorWidth$$1$$ + $DvtBreadcrumbsPeer$$.$__labelGap$
        }
      }
    }
  };
  $DvtBreadcrumbsRenderer$$.$_newSeparator$ = function $$DvtBreadcrumbsRenderer$$$$_newSeparator$$($DvtTrainEvent$$) {
    var $DvtAccordionDefaults$$ = $DvtTrainEvent$$.$_options$;
    $DvtTrainEvent$$ = new dvt.$OutputText$($DvtTrainEvent$$.$getCtx$(), $DvtAccordionDefaults$$.$__labelSeparator$, 0, 0);
    $DvtTrainEvent$$.$setCSSStyle$(new dvt.$CSSStyle$($DvtAccordionDefaults$$.$labelStyle$));
    return $DvtTrainEvent$$
  };
  dvt.$PanelDrawerEvent$ = function $dvt$$PanelDrawerEvent$$($DvtTrainEvent$$, $DvtAccordionDefaults$$) {
    this.Init(dvt.$PanelDrawerEvent$.$TYPE$);
    this.$_subtype$ = $DvtTrainEvent$$;
    this.$_activePanel$ = $DvtAccordionDefaults$$
  };
  dvt.$Obj$.$createSubclass$(dvt.$PanelDrawerEvent$, dvt.$BaseComponentEvent$);
  dvt.$PanelDrawerEvent$.$TYPE$ = "dvtPanelDrawerEvent";
  dvt.$PanelDrawerEvent$.$SUBTYPE_HIDE$ = "hide";
  dvt.$PanelDrawerEvent$.$SUBTYPE_SHOW$ = "show";
  dvt.$PanelDrawerEvent$.prototype.$getSubType$ = $JSCompiler_get$$("$_subtype$");
  dvt.$PanelDrawer$ = function $dvt$$PanelDrawer$$($DvtTrainEvent$$, $DvtAccordionDefaults$$, $DvtPanelDrawerKeyboardHandler$$, $DvtPanelDrawerEventManager$$) {
    this.Init($DvtTrainEvent$$, $DvtAccordionDefaults$$, $DvtPanelDrawerKeyboardHandler$$, $DvtPanelDrawerEventManager$$)
  };
  dvt.$Obj$.$createSubclass$(dvt.$PanelDrawer$, dvt.$Container$);
  dvt.$PanelDrawer$.$DIR_LEFT$ = "left";
  dvt.$PanelDrawer$.$DIR_RIGHT$ = "right";
  dvt.$PanelDrawer$.$DOCK_TOP$ = "top";
  dvt.$PanelDrawer$.$DOCK_BOTTOM$ = "bottom";
  dvt.$PanelDrawer$.$_FIRST_TAB_SPACING$ = 15;
  dvt.$PanelDrawer$.$_INTER_TAB_SPACING$ = 0;
  dvt.$PanelDrawer$.$_TAB_SIZE$ = 42;
  dvt.$PanelDrawer$.$_TAB_CORNER_RADIUS$ = 2;
  dvt.$PanelDrawer$.$_BACKGROUND_COLOR$ = "#ffffff";
  dvt.$PanelDrawer$.$_BORDER_COLOR$ = "#bbc7d0";
  dvt.$PanelDrawer$.$_ANIM_DURATION$ = 0.25;
  dvt.$PanelDrawer$.$_CONTENT_PADDING$ = 10;
  dvt.$PanelDrawer$.$_BACKGROUND_ALPHA$ = 1;
  dvt.$PanelDrawer$.$_BACKGROUND_ALPHA_DE_EMPHASIZED$ = 1;
  dvt.$PanelDrawer$.$_BACKGROUND_ALPHA_ROLLOVER$ = 1;
  dvt.$PanelDrawer$.$_BORDER_ALPHA$ = 1;
  dvt.$PanelDrawer$.$_BORDER_ALPHA_DE_EMPHASIZED$ = 1;
  dvt.$PanelDrawer$.$_TAB_BACKGROUND_COLOR_INACTIVE$ = "#dee4e7";
  dvt.$PanelDrawer$.$_TAB_BORDER_COLOR_INACTIVE$ = "#c1cede";
  dvt.$PanelDrawer$.$_BOUNCE_WIDTH_FACTOR$ = 1.25;
  dvt.$PanelDrawer$.$_DEFAULT_SKIN$ = "alta";
  dvt.$PanelDrawer$.$IMAGE_SIZE$ = 24;
  dvt.$PanelDrawer$.$PANEL_LEGEND$ = "legend";
  dvt.$PanelDrawer$.$PANEL_PALETTE$ = "palette";
  dvt.$PanelDrawer$.$PANEL_SEARCH$ = "search";
  dvt.$PanelDrawer$.$PANEL_OVERVIEW$ = "overview";
  dvt.$PanelDrawer$.$PANEL_SEARCH_ICON_ENA$ = "searchEna";
  dvt.$PanelDrawer$.$PANEL_SEARCH_ICON_OVR$ = "searchOvr";
  dvt.$PanelDrawer$.$PANEL_SEARCH_ICON_DWN$ = "searchDwn";
  dvt.$PanelDrawer$.$PANEL_SEARCH_TIP$ = "searchTip";
  dvt.$PanelDrawer$.$PANEL_PALETTE_ICON_ENA$ = "paletteEna";
  dvt.$PanelDrawer$.$PANEL_PALETTE_ICON_OVR$ = "paletteOvr";
  dvt.$PanelDrawer$.$PANEL_PALETTE_ICON_DWN$ = "paletteDwn";
  dvt.$PanelDrawer$.$PANEL_PALETTE_TIP$ = "paletteTip";
  dvt.$PanelDrawer$.$PANEL_LEGEND_ICON_ENA$ = "legendEna";
  dvt.$PanelDrawer$.$PANEL_LEGEND_ICON_OVR$ = "legendOvr";
  dvt.$PanelDrawer$.$PANEL_LEGEND_ICON_DWN$ = "legendDwn";
  dvt.$PanelDrawer$.$PANEL_LEGEND_TIP$ = "legendTip";
  dvt.$PanelDrawer$.$PANEL_OVERVIEW_ICON_ENA$ = "overviewEna";
  dvt.$PanelDrawer$.$PANEL_OVERVIEW_ICON_OVR$ = "overviewOvr";
  dvt.$PanelDrawer$.$PANEL_OVERVIEW_ICON_DWN$ = "overviewDwn";
  dvt.$PanelDrawer$.$PANEL_OVERVIEW_TIP$ = "overviewTip";
  dvt.$PanelDrawer$.$BG_ALPHA$ = "backgroundAlpha";
  dvt.$PanelDrawer$.$TAB_BG_COLOR_INACTIVE$ = "tab-color-inactive";
  dvt.$PanelDrawer$.$TAB_BORDER_COLOR_INACTIVE$ = "tab-border-color-inactive";
  dvt.$PanelDrawer$.prototype.Init = function $dvt$$PanelDrawer$$$Init$($DvtTrainEvent$$, $DvtAccordionDefaults$$, $DvtPanelDrawerTab$$, $DvtBreadcrumbsPeer$$) {
    dvt.$PanelDrawer$.$superclass$.Init.call(this, $DvtTrainEvent$$, $JSCompiler_alias_NULL$$, "panelDrawer" + $DvtBreadcrumbsPeer$$);
    this.$_sid$ = $DvtBreadcrumbsPeer$$;
    this.$_eventManager$ = new $DvtPanelDrawerEventManager$$($DvtTrainEvent$$, $DvtAccordionDefaults$$, $DvtPanelDrawerTab$$);
    this.$_eventManager$.$addListeners$(this);
    this.$_eventManager$.$addRolloverType$(dvt.$PanelDrawer$);
    this.$_eventManager$.$associate$(this, this);
    dvt.$Agent$.$isTouchDevice$() || this.$_eventManager$.$setKeyboardHandler$(new $DvtPanelDrawerKeyboardHandler$$(this.$_eventManager$, this));
    this.$_callback$ = $DvtAccordionDefaults$$;
    this.$_callbackObj$ = $DvtPanelDrawerTab$$;
    this.$_panels$ = {};
    this.$_panelOrder$ = [];
    this.$_maxHeight$ = this.$_maxWidth$ = Number.MAX_VALUE;
    this.$_minWidth$ = 5;
    this.$_minHeight$ = 0;
    this.$_displayedPanelId$;
    this.$_oldDisplayedPanelId$;
    this.$_bTransition$ = this.$_bDisclosed$ = $JSCompiler_alias_FALSE$$;
    this.$_contentPane$;
    this.$_activeContent$;
    this.$_expandedContent$;
    this.$_contentClipPath$;
    this.$_expandedBorder$;
    this.$_expandedBorderResizable$;
    this.$_tabs$ = {};
    this.$_discloseDirection$ = dvt.$PanelDrawer$.$DIR_LEFT$;
    this.$_dockSide$ = dvt.$PanelDrawer$.$DOCK_TOP$;
    this.$_isFixed$ = $JSCompiler_alias_FALSE$$;
    this.$_styleMap$ = $JSCompiler_alias_NULL$$;
    $DvtPanelDrawerTab$$ && (this.$_styleMap$ = $DvtPanelDrawerTab$$.$getSubcomponentStyles$());
    this.$_bgAlpha$ = dvt.$StyleUtils$.$getStyle$(this.$_styleMap$, dvt.$PanelDrawer$.$BG_ALPHA$, dvt.$PanelDrawer$.$_BACKGROUND_ALPHA$);
    this.$_borderColor$ = dvt.$StyleUtils$.$getStyle$(this.$_styleMap$, dvt.$CSSStyle$.$BORDER_COLOR$, dvt.$PanelDrawer$.$_BORDER_COLOR$);
    this.$_borderRadius$ = parseInt(dvt.$StyleUtils$.$getStyle$(this.$_styleMap$, dvt.$CSSStyle$.$BORDER_RADIUS$, dvt.$PanelDrawer$.$_TAB_CORNER_RADIUS$));
    this.$_bgColor$ = dvt.$StyleUtils$.$getStyle$(this.$_styleMap$, dvt.$CSSStyle$.$BACKGROUND_COLOR$, dvt.$PanelDrawer$.$_BACKGROUND_COLOR$);
    this.$_bgInactiveColor$ = dvt.$StyleUtils$.$getStyle$(this.$_styleMap$, dvt.$PanelDrawer$.$TAB_BG_COLOR_INACTIVE$, dvt.$PanelDrawer$.$_TAB_BACKGROUND_COLOR_INACTIVE$);
    this.$_borderInactiveColor$ = dvt.$StyleUtils$.$getStyle$(this.$_styleMap$, dvt.$PanelDrawer$.$TAB_BORDER_COLOR_INACTIVE$, dvt.$PanelDrawer$.$_TAB_BORDER_COLOR_INACTIVE$);
    this.$setPixelHinting$();
    this.$_contentPadding$ = dvt.$PanelDrawer$.$_CONTENT_PADDING$
  };
  dvt.$PanelDrawer$.prototype.$addPanel$ = function $dvt$$PanelDrawer$$$$addPanel$$($DvtTrainEvent$$, $DvtAccordionDefaults$$, $DvtPanelDrawerKeyboardHandler$$, $DvtPanelDrawerEventManager$$, $DvtPanelDrawerTab$$, $DvtBreadcrumbsPeer$$) {
    this.$_panels$[$DvtBreadcrumbsPeer$$] = {panel:$DvtTrainEvent$$, iconUp:$DvtAccordionDefaults$$, iconOver:$DvtPanelDrawerKeyboardHandler$$, iconDown:$DvtPanelDrawerEventManager$$, tooltip:$DvtPanelDrawerTab$$};
    this.$_panelOrder$.push($DvtBreadcrumbsPeer$$);
    this.$_minHeight$ = dvt.$PanelDrawer$.$_FIRST_TAB_SPACING$ + this.$_panelOrder$.length * (dvt.$PanelDrawer$.$_TAB_SIZE$ + dvt.$PanelDrawer$.$_INTER_TAB_SPACING$)
  };
  dvt.$PanelDrawer$.prototype.$setFixed$ = $JSCompiler_set$$("$_isFixed$");
  dvt.$PanelDrawer$.prototype.$setMaxWidth$ = $JSCompiler_set$$("$_maxWidth$");
  dvt.$PanelDrawer$.prototype.$setContentPadding$ = function $dvt$$PanelDrawer$$$$setContentPadding$$() {
    this.$_contentPadding$ = 0
  };
  dvt.$PanelDrawer$.prototype.$getMaxContentWidth$ = function $dvt$$PanelDrawer$$$$getMaxContentWidth$$() {
    return this.$_maxWidth$ - 2 * this.$_contentPadding$
  };
  dvt.$PanelDrawer$.prototype.$setMaxHeight$ = $JSCompiler_set$$("$_maxHeight$");
  dvt.$PanelDrawer$.prototype.$getMaxContentHeight$ = function $dvt$$PanelDrawer$$$$getMaxContentHeight$$() {
    return this.$_maxHeight$ - 2 * this.$_contentPadding$
  };
  dvt.$PanelDrawer$.prototype.$setDiscloseDirection$ = function $dvt$$PanelDrawer$$$$setDiscloseDirection$$() {
    this.$_discloseDirection$ = dvt.$PanelDrawer$.$DIR_RIGHT$
  };
  dvt.$PanelDrawer$.prototype.$setDockSide$ = $JSCompiler_set$$("$_dockSide$");
  dvt.$PanelDrawer$.prototype.$GetPanel$ = function $dvt$$PanelDrawer$$$$GetPanel$$($DvtTrainEvent$$) {
    return this.$_panels$[$DvtTrainEvent$$].panel
  };
  dvt.$PanelDrawer$.prototype.$GetIcon$ = function $dvt$$PanelDrawer$$$$GetIcon$$($DvtTrainEvent$$) {
    return this.$_panels$[$DvtTrainEvent$$].icon
  };
  dvt.$PanelDrawer$.prototype.$GetTooltip$ = function $dvt$$PanelDrawer$$$$GetTooltip$$($DvtTrainEvent$$) {
    return this.$_panels$[$DvtTrainEvent$$].tooltip
  };
  dvt.$PanelDrawer$.prototype.$GetTab$ = function $dvt$$PanelDrawer$$$$GetTab$$($DvtTrainEvent$$) {
    return this.$_tabs$[$DvtTrainEvent$$]
  };
  dvt.$PanelDrawer$.prototype.$setDisplayedPanelId$ = function $dvt$$PanelDrawer$$$$setDisplayedPanelId$$($DvtTrainEvent$$, $DvtAccordionDefaults$$, $DvtPanelDrawerKeyboardHandler$$) {
    this.$_oldDisplayedPanelId$ = this.$_displayedPanelId$;
    this.$_displayedPanelId$ = $DvtTrainEvent$$;
    this.$isDisclosed$() && (this.$ChangeTabsState$(), this.$ChangePanels$($DvtTrainEvent$$, $DvtAccordionDefaults$$, $DvtPanelDrawerKeyboardHandler$$));
    this.$_oldDisplayedPanelId$ = $JSCompiler_alias_NULL$$
  };
  dvt.$PanelDrawer$.prototype.$getDisplayedPanelId$ = function $dvt$$PanelDrawer$$$$getDisplayedPanelId$$() {
    var $DvtTrainEvent$$ = this.$_displayedPanelId$;
    return!$DvtTrainEvent$$ && 0 < this.$_panelOrder$.length ? this.$_panelOrder$[0] : $DvtTrainEvent$$
  };
  dvt.$PanelDrawer$.prototype.$setDisclosed$ = function $dvt$$PanelDrawer$$$$setDisclosed$$($DvtTrainEvent$$, $DvtAccordionDefaults$$, $DvtPanelDrawerKeyboardHandler$$) {
    if(!this.$_bTransition$) {
      var $DvtPanelDrawerEventManager$$ = this.$_bDisclosed$;
      this.$_bDisclosed$ = $DvtTrainEvent$$;
      $DvtPanelDrawerEventManager$$ != $DvtTrainEvent$$ && (this.$_bTransition$ = $JSCompiler_alias_TRUE$$, $DvtTrainEvent$$ ? this.$DoExpand$($DvtAccordionDefaults$$, $DvtPanelDrawerKeyboardHandler$$) : this.$DoCollapse$($DvtAccordionDefaults$$, $DvtPanelDrawerKeyboardHandler$$))
    }
  };
  dvt.$PanelDrawer$.prototype.$isDisclosed$ = $JSCompiler_get$$("$_bDisclosed$");
  dvt.$PanelDrawer$.prototype.$renderComponent$ = function $dvt$$PanelDrawer$$$$renderComponent$$() {
    this.$_contentPane$ || (this.$_contentPane$ = new dvt.$Container$(this.$getCtx$(), "pd_contentPane"), this.$addChild$(this.$_contentPane$), this.$_activeContent$ = new dvt.$Container$(this.$getCtx$(), "pdcp_activeContent"), this.$_contentPane$.$addChild$(this.$_activeContent$));
    this.$RenderTabs$()
  };
  dvt.$PanelDrawer$.prototype.$RenderTabs$ = function $dvt$$PanelDrawer$$$$RenderTabs$$() {
    if(!this.$_isFixed$) {
      var $DvtTrainEvent$$ = -dvt.$PanelDrawer$.$_TAB_SIZE$;
      this.$_discloseDirection$ == dvt.$PanelDrawer$.$DIR_RIGHT$ && ($DvtTrainEvent$$ = 0);
      var $DvtAccordionDefaults$$ = dvt.$PanelDrawer$.$_FIRST_TAB_SPACING$;
      if(this.$_dockSide$ == dvt.$PanelDrawer$.$DOCK_TOP$) {
        for(var $DvtPanelDrawerKeyboardHandler$$ = 0;$DvtPanelDrawerKeyboardHandler$$ < this.$_panelOrder$.length;$DvtPanelDrawerKeyboardHandler$$++) {
          var $DvtPanelDrawerEventManager$$ = this.$_panelOrder$[$DvtPanelDrawerKeyboardHandler$$], $DvtPanelDrawerEventManager$$ = this.$RenderTab$($DvtPanelDrawerEventManager$$);
          $DvtPanelDrawerEventManager$$.$setTranslate$($DvtTrainEvent$$, $DvtAccordionDefaults$$);
          $DvtAccordionDefaults$$ += dvt.$PanelDrawer$.$_TAB_SIZE$ + dvt.$PanelDrawer$.$_INTER_TAB_SPACING$
        }
      }else {
        if(this.$_dockSide$ == dvt.$PanelDrawer$.$DOCK_BOTTOM$) {
          $DvtAccordionDefaults$$ = -dvt.$PanelDrawer$.$_FIRST_TAB_SPACING$ - dvt.$PanelDrawer$.$_TAB_SIZE$;
          for($DvtPanelDrawerKeyboardHandler$$ = this.$_panelOrder$.length - 1;0 <= $DvtPanelDrawerKeyboardHandler$$;$DvtPanelDrawerKeyboardHandler$$--) {
            $DvtPanelDrawerEventManager$$ = this.$_panelOrder$[$DvtPanelDrawerKeyboardHandler$$], $DvtPanelDrawerEventManager$$ = this.$RenderTab$($DvtPanelDrawerEventManager$$), $DvtPanelDrawerEventManager$$.$setTranslate$($DvtTrainEvent$$, $DvtAccordionDefaults$$), $DvtAccordionDefaults$$ -= dvt.$PanelDrawer$.$_TAB_SIZE$ + dvt.$PanelDrawer$.$_INTER_TAB_SPACING$
          }
        }
      }
    }
  };
  dvt.$PanelDrawer$.prototype.$GetTabPathCommands$ = function $dvt$$PanelDrawer$$$$GetTabPathCommands$$() {
    var $DvtTrainEvent$$;
    switch(this.$_discloseDirection$) {
      case dvt.$PanelDrawer$.$DIR_RIGHT$:
        $DvtTrainEvent$$ = ["M", 0, 0, "L", dvt.$PanelDrawer$.$_TAB_SIZE$ - this.$_borderRadius$, 0, "A", this.$_borderRadius$, this.$_borderRadius$, 0, 0, 1, dvt.$PanelDrawer$.$_TAB_SIZE$, this.$_borderRadius$, "L", dvt.$PanelDrawer$.$_TAB_SIZE$, dvt.$PanelDrawer$.$_TAB_SIZE$ - this.$_borderRadius$, "A", this.$_borderRadius$, this.$_borderRadius$, 0, 0, 1, dvt.$PanelDrawer$.$_TAB_SIZE$ - this.$_borderRadius$, dvt.$PanelDrawer$.$_TAB_SIZE$, "L", 0, dvt.$PanelDrawer$.$_TAB_SIZE$];
        break;
      default:
        $DvtTrainEvent$$ = ["M", dvt.$PanelDrawer$.$_TAB_SIZE$, 0, "L", this.$_borderRadius$, 0, "A", this.$_borderRadius$, this.$_borderRadius$, 0, 0, 0, 0, this.$_borderRadius$, "L", 0, dvt.$PanelDrawer$.$_TAB_SIZE$ - this.$_borderRadius$, "A", this.$_borderRadius$, this.$_borderRadius$, 0, 0, 0, this.$_borderRadius$, dvt.$PanelDrawer$.$_TAB_SIZE$, "L", dvt.$PanelDrawer$.$_TAB_SIZE$, dvt.$PanelDrawer$.$_TAB_SIZE$]
    }
    return $DvtTrainEvent$$
  };
  dvt.$PanelDrawer$.prototype.$RenderTab$ = function $dvt$$PanelDrawer$$$$RenderTab$$($DvtTrainEvent$$) {
    var $DvtAccordionDefaults$$ = this.$GetTabPathCommands$(), $DvtPanelDrawerKeyboardHandler$$ = new $DvtPanelDrawerTab$$(this.$getCtx$(), $DvtAccordionDefaults$$, $DvtTrainEvent$$, this);
    $DvtPanelDrawerKeyboardHandler$$.$setPixelHinting$();
    $DvtPanelDrawerKeyboardHandler$$.setCursor("pointer");
    this.$_contentPane$.$addChildAt$($DvtPanelDrawerKeyboardHandler$$, 0);
    $DvtPanelDrawerKeyboardHandler$$.$setSolidFill$(this.$_bgInactiveColor$, this.$_bgAlpha$);
    $DvtPanelDrawerKeyboardHandler$$.$setSolidStroke$(this.$_borderInactiveColor$, dvt.$PanelDrawer$.$_BORDER_ALPHA$, 1);
    var $DvtPanelDrawerEventManager$$ = this.$_panels$[$DvtTrainEvent$$], $DvtBreadcrumbsPeer$$ = new dvt.$Path$(this.$getCtx$(), $DvtAccordionDefaults$$);
    $DvtBreadcrumbsPeer$$.$setInvisibleFill$();
    $DvtPanelDrawerEventManager$$.iconUp.$setTranslate$(0.5 * (dvt.$PanelDrawer$.$_TAB_SIZE$ - dvt.$PanelDrawer$.$IMAGE_SIZE$), 0.5 * (dvt.$PanelDrawer$.$_TAB_SIZE$ - dvt.$PanelDrawer$.$IMAGE_SIZE$));
    $DvtBreadcrumbsPeer$$.$addChild$($DvtPanelDrawerEventManager$$.iconUp);
    var $DvtBreadcrumbsEventManager$$ = new dvt.$Path$(this.$getCtx$(), $DvtAccordionDefaults$$);
    $DvtBreadcrumbsEventManager$$.$setInvisibleFill$();
    $DvtPanelDrawerEventManager$$.iconOver.$setTranslate$(0.5 * (dvt.$PanelDrawer$.$_TAB_SIZE$ - dvt.$PanelDrawer$.$IMAGE_SIZE$), 0.5 * (dvt.$PanelDrawer$.$_TAB_SIZE$ - dvt.$PanelDrawer$.$IMAGE_SIZE$));
    $DvtBreadcrumbsEventManager$$.$addChild$($DvtPanelDrawerEventManager$$.iconOver);
    $DvtAccordionDefaults$$ = new dvt.$Path$(this.$getCtx$(), $DvtAccordionDefaults$$);
    $DvtAccordionDefaults$$.$setInvisibleFill$();
    $DvtPanelDrawerEventManager$$.iconDown.$setTranslate$(0.5 * (dvt.$PanelDrawer$.$_TAB_SIZE$ - dvt.$PanelDrawer$.$IMAGE_SIZE$), 0.5 * (dvt.$PanelDrawer$.$_TAB_SIZE$ - dvt.$PanelDrawer$.$IMAGE_SIZE$));
    $DvtAccordionDefaults$$.$addChild$($DvtPanelDrawerEventManager$$.iconDown);
    $DvtBreadcrumbsPeer$$ = new dvt.$Button$(this.$getCtx$(), $DvtBreadcrumbsPeer$$, $DvtBreadcrumbsEventManager$$, $DvtAccordionDefaults$$);
    $DvtBreadcrumbsPeer$$.$setToggleEnabled$();
    $DvtPanelDrawerEventManager$$.icon = $DvtBreadcrumbsPeer$$;
    $DvtPanelDrawerKeyboardHandler$$.$addChild$($DvtBreadcrumbsPeer$$);
    this.$_tabs$[$DvtTrainEvent$$] = $DvtPanelDrawerKeyboardHandler$$;
    var $DvtBreadcrumbsDefaults$$ = this;
    this.$_eventManager$.$associate$($DvtPanelDrawerKeyboardHandler$$, {$HandleClick$:function() {
      $DvtBreadcrumbsDefaults$$.$HandleTabClick$($DvtTrainEvent$$)
    }, $getTooltip$:function() {
      return $DvtBreadcrumbsDefaults$$.$GetTooltip$($DvtTrainEvent$$)
    }});
    $DvtPanelDrawerKeyboardHandler$$.$addAccessibilityAttributes$();
    return $DvtPanelDrawerKeyboardHandler$$
  };
  dvt.$PanelDrawer$.prototype.$HandleTabClick$ = function $dvt$$PanelDrawer$$$$HandleTabClick$$($DvtTrainEvent$$) {
    function $DvtAccordionDefaults$$() {
      var $DvtTrainEvent$$ = $DvtPanelDrawerEventManager$$.$getCtx$().$getTooltipManager$();
      $DvtTrainEvent$$ && $DvtTrainEvent$$.$hideTooltip$()
    }
    this.$_oldDisplayedPanelId$ = this.$getDisplayedPanelId$();
    this.$_displayedPanelId$ = $DvtTrainEvent$$;
    var $DvtPanelDrawerKeyboardHandler$$ = this.$GetTab$($DvtTrainEvent$$).$isShowingKeyboardFocusEffect$(), $DvtPanelDrawerEventManager$$ = this;
    this.$isDisclosed$() ? this.$_oldDisplayedPanelId$ == $DvtTrainEvent$$ ? this.$setDisclosed$($JSCompiler_alias_FALSE$$, $JSCompiler_alias_FALSE$$, $DvtAccordionDefaults$$) : (this.$ChangeTabsState$(), this.$ChangePanels$($DvtTrainEvent$$, $JSCompiler_alias_FALSE$$)) : (this.$setDisclosed$($JSCompiler_alias_TRUE$$, $JSCompiler_alias_FALSE$$, $DvtAccordionDefaults$$), this.$ApplyAlphasRollover$());
    this.$_oldDisplayedPanelId$ = $JSCompiler_alias_NULL$$;
    this.$FireListener$(new dvt.$PanelDrawerEvent$(this.$isDisclosed$() ? dvt.$PanelDrawerEvent$.$SUBTYPE_SHOW$ : dvt.$PanelDrawerEvent$.$SUBTYPE_HIDE$, this.$_displayedPanelId$));
    $DvtPanelDrawerKeyboardHandler$$ && this.$getCtx$().$setCurrentKeyboardFocus$(this)
  };
  dvt.$PanelDrawer$.prototype.$ChangePanels$ = function $dvt$$PanelDrawer$$$$ChangePanels$$($DvtTrainEvent$$, $DvtAccordionDefaults$$, $DvtPanelDrawerKeyboardHandler$$) {
    var $DvtPanelDrawerEventManager$$ = $JSCompiler_alias_NULL$$;
    $DvtAccordionDefaults$$ || ($DvtPanelDrawerEventManager$$ = new dvt.$Animator$(this.$getCtx$(), dvt.$PanelDrawer$.$_ANIM_DURATION$));
    this.$_oldDisplayedPanelId$ && ($DvtAccordionDefaults$$ = this.$GetPanel$(this.$_oldDisplayedPanelId$)) && this.$_expandedContentPanel$.removeChild($DvtAccordionDefaults$$);
    this.$DisplayPanel$($DvtTrainEvent$$, $DvtPanelDrawerEventManager$$);
    $DvtPanelDrawerEventManager$$ ? (this.$ApplyAlphasRollover$(), $DvtPanelDrawerKeyboardHandler$$ && dvt.$Playable$.$appendOnEnd$($DvtPanelDrawerEventManager$$, $DvtPanelDrawerKeyboardHandler$$), $DvtPanelDrawerEventManager$$.play()) : $DvtPanelDrawerKeyboardHandler$$ && $DvtPanelDrawerKeyboardHandler$$()
  };
  dvt.$PanelDrawer$.prototype.$DoExpand$ = function $dvt$$PanelDrawer$$$$DoExpand$$($DvtTrainEvent$$, $DvtAccordionDefaults$$) {
    this.$DisplayPanel$(this.$getDisplayedPanelId$());
    var $DvtPanelDrawerKeyboardHandler$$ = -(1 / dvt.$PanelDrawer$.$_BOUNCE_WIDTH_FACTOR$ * this.$_expandedContent$.getWidth());
    this.$_discloseDirection$ == dvt.$PanelDrawer$.$DIR_RIGHT$ && ($DvtPanelDrawerKeyboardHandler$$ = -$DvtPanelDrawerKeyboardHandler$$, this.$_expandedContent$.$setX$((1 / dvt.$PanelDrawer$.$_BOUNCE_WIDTH_FACTOR$ - 1) * this.$_expandedContent$.getWidth()));
    if($DvtTrainEvent$$) {
      this.$_contentPane$.$setTranslateX$($DvtPanelDrawerKeyboardHandler$$), $DvtAccordionDefaults$$ && $DvtAccordionDefaults$$(), this.$_bTransition$ = $JSCompiler_alias_FALSE$$
    }else {
      var $DvtPanelDrawerEventManager$$ = new dvt.$Animator$(this.$getCtx$(), dvt.$PanelDrawer$.$_ANIM_DURATION$);
      $DvtPanelDrawerEventManager$$.$setEasing$(dvt.$Easing$.$backOut$);
      $DvtPanelDrawerEventManager$$.$addProp$(dvt.$Animator$.$TYPE_NUMBER$, this.$_contentPane$, this.$_contentPane$.$getTranslateX$, this.$_contentPane$.$setTranslateX$, $DvtPanelDrawerKeyboardHandler$$);
      $DvtAccordionDefaults$$ && dvt.$Playable$.$appendOnEnd$($DvtPanelDrawerEventManager$$, $DvtAccordionDefaults$$);
      if($DvtPanelDrawerEventManager$$) {
        var $DvtPanelDrawerTab$$ = this;
        dvt.$Playable$.$appendOnEnd$($DvtPanelDrawerEventManager$$, function() {
          $DvtPanelDrawerTab$$.$_bTransition$ = $JSCompiler_alias_FALSE$$
        });
        $DvtPanelDrawerEventManager$$.play()
      }
    }
    this.$ChangeTabsState$()
  };
  dvt.$PanelDrawer$.prototype.$DoCollapse$ = function $dvt$$PanelDrawer$$$$DoCollapse$$($DvtTrainEvent$$, $DvtAccordionDefaults$$) {
    if($DvtTrainEvent$$) {
      this.$_contentPane$.$setTranslateX$(0), this.$RemoveExpandedContent$(), $DvtAccordionDefaults$$ && $DvtAccordionDefaults$$(), this.$ChangeTabsState$(), this.$_bTransition$ = $JSCompiler_alias_FALSE$$
    }else {
      var $DvtPanelDrawerKeyboardHandler$$ = new dvt.$Animator$(this.$getCtx$(), dvt.$PanelDrawer$.$_ANIM_DURATION$);
      $DvtPanelDrawerKeyboardHandler$$.$setEasing$(dvt.$Easing$.$backIn$);
      $DvtPanelDrawerKeyboardHandler$$.$addProp$(dvt.$Animator$.$TYPE_NUMBER$, this.$_contentPane$, this.$_contentPane$.$getTranslateX$, this.$_contentPane$.$setTranslateX$, 0);
      dvt.$Playable$.$appendOnEnd$($DvtPanelDrawerKeyboardHandler$$, this.$RemoveExpandedContent$, this);
      dvt.$Playable$.$appendOnEnd$($DvtPanelDrawerKeyboardHandler$$, this.$ChangeTabsState$, this);
      $DvtAccordionDefaults$$ && dvt.$Playable$.$appendOnEnd$($DvtPanelDrawerKeyboardHandler$$, $DvtAccordionDefaults$$);
      var $DvtPanelDrawerEventManager$$ = this;
      dvt.$Playable$.$appendOnEnd$($DvtPanelDrawerKeyboardHandler$$, function() {
        $DvtPanelDrawerEventManager$$.$_bTransition$ = $JSCompiler_alias_FALSE$$
      });
      $DvtPanelDrawerKeyboardHandler$$.play()
    }
  };
  dvt.$PanelDrawer$.prototype.$RemoveExpandedContent$ = function $dvt$$PanelDrawer$$$$RemoveExpandedContent$$() {
    this.$_expandedContent$ && (this.$_contentClipPath$ = $JSCompiler_alias_NULL$$, this.$_expandedContentPanel$.$removeChildren$(), this.$_activeContent$.$removeAllDrawEffects$(), this.$_expandedContent$.$destroy$(), this.$_activeContent$.removeChild(this.$_expandedContent$), this.$_expandedBorderResizable$ = this.$_expandedBorder$ = this.$_expandedContentPanel$ = this.$_expandedContent$ = $JSCompiler_alias_NULL$$)
  };
  dvt.$PanelDrawer$.prototype.$DisplayPanel$ = function $dvt$$PanelDrawer$$$$DisplayPanel$$($DvtTrainEvent$$, $DvtAccordionDefaults$$) {
    this.$_expandedContent$ || (this.$_expandedContent$ = new dvt.$Rect$(this.$getCtx$(), 0, 0, 1, 1, "pdcp_expandedContent"), this.$_activeContent$.$addChild$(this.$_expandedContent$), this.$_expandedContent$.$setSolidFill$(this.$_bgColor$, this.$_bgAlpha$), this.$_expandedContentPanel$ = new dvt.$Container$(this.$_context$), this.$_expandedContent$.$addChild$(this.$_expandedContentPanel$), this.$_expandedContentPanel$.$setTranslate$(this.$_contentPadding$, this.$_contentPadding$));
    var $DvtPanelDrawerKeyboardHandler$$ = this.$GetPanel$($DvtTrainEvent$$);
    if($DvtPanelDrawerKeyboardHandler$$) {
      this.$_expandedContentPanel$.$addChild$($DvtPanelDrawerKeyboardHandler$$);
      if(this.$_oldDisplayedPanelId$) {
        var $DvtPanelDrawerEventManager$$ = this.$GetPanel$(this.$_oldDisplayedPanelId$);
        $DvtPanelDrawerEventManager$$ && $DvtPanelDrawerEventManager$$.$removeEvtListener$(dvt.$ResizeEvent$.$RESIZE_EVENT$, this.$HandlePanelResize$, $JSCompiler_alias_FALSE$$, this)
      }
      $DvtPanelDrawerKeyboardHandler$$.$addEvtListener$(dvt.$ResizeEvent$.$RESIZE_EVENT$, this.$HandlePanelResize$, $JSCompiler_alias_FALSE$$, this)
    }
    this.$_expandedBorder$ || (this.$_expandedBorder$ = new dvt.$Path$(this.$getCtx$(), ["M", 0, 0, "L", 1, 1], "pdcp_expandedBorder"), this.$_expandedBorderResizable$ = new dvt.$Path$(this.$getCtx$(), ["M", 0, 0, "L", 1, 1], "pdcp_expandedBorderResizable"), this.$_expandedContent$.$addChild$(this.$_expandedBorder$), this.$_expandedContent$.$addChild$(this.$_expandedBorderResizable$), this.$_expandedBorder$.$setSolidStroke$(this.$_borderColor$, dvt.$PanelDrawer$.$_BORDER_ALPHA$), this.$_expandedBorder$.$setFill$($JSCompiler_alias_NULL$$), 
    this.$_expandedBorderResizable$.$setSolidStroke$(this.$_borderColor$, dvt.$PanelDrawer$.$_BORDER_ALPHA$), this.$_expandedBorderResizable$.$setFill$($JSCompiler_alias_NULL$$), this.$_expandedBorder$.$setPixelHinting$(), this.$_expandedBorderResizable$.$setPixelHinting$());
    this.$RefreshExpandedSize$($DvtTrainEvent$$, $DvtAccordionDefaults$$)
  };
  dvt.$PanelDrawer$.prototype.$HandlePanelResize$ = function $dvt$$PanelDrawer$$$$HandlePanelResize$$($DvtTrainEvent$$) {
    var $DvtAccordionDefaults$$ = new dvt.$Animator$(this.$getCtx$(), dvt.$PanelDrawer$.$_ANIM_DURATION$), $DvtPanelDrawerKeyboardHandler$$ = $DvtTrainEvent$$.getWidth(), $DvtPanelDrawerEventManager$$ = $DvtTrainEvent$$.getHeight(), $DvtPanelDrawerKeyboardHandler$$ = this.$GetExpandedContentWidth$($DvtPanelDrawerKeyboardHandler$$), $DvtPanelDrawerEventManager$$ = this.$GetExpandedContentHeight$($DvtPanelDrawerEventManager$$), $DvtPanelDrawerTab$$ = $DvtTrainEvent$$.$getX$() ? $DvtTrainEvent$$.$getX$() : 
    0;
    $DvtTrainEvent$$ = $DvtTrainEvent$$.$getY$() ? $DvtTrainEvent$$.$getY$() : 0;
    this.$_refreshPanelSize$(this.$getDisplayedPanelId$(), $DvtAccordionDefaults$$, $DvtPanelDrawerKeyboardHandler$$, $DvtPanelDrawerEventManager$$, $DvtPanelDrawerTab$$, $DvtTrainEvent$$);
    $DvtAccordionDefaults$$.play()
  };
  dvt.$PanelDrawer$.prototype.$RefreshExpandedSize$ = function $dvt$$PanelDrawer$$$$RefreshExpandedSize$$($DvtTrainEvent$$, $DvtAccordionDefaults$$) {
    var $DvtPanelDrawerKeyboardHandler$$ = this.$GetPanel$($DvtTrainEvent$$), $DvtPanelDrawerEventManager$$ = 2 * this.$_contentPadding$, $DvtPanelDrawerTab$$ = 2 * this.$_contentPadding$, $DvtBreadcrumbsPeer$$ = 0, $DvtBreadcrumbsEventManager$$ = 0;
    $DvtPanelDrawerKeyboardHandler$$ && ($DvtPanelDrawerKeyboardHandler$$ = $DvtPanelDrawerKeyboardHandler$$.$getContentDimensions$ ? $DvtPanelDrawerKeyboardHandler$$.$getContentDimensions$() : $DvtPanelDrawerKeyboardHandler$$.$getDimensionsWithStroke$(), $DvtPanelDrawerEventManager$$ = this.$GetExpandedContentWidth$($DvtPanelDrawerKeyboardHandler$$.$w$), $DvtPanelDrawerTab$$ = this.$GetExpandedContentHeight$($DvtPanelDrawerKeyboardHandler$$.$h$), $DvtBreadcrumbsPeer$$ = $DvtPanelDrawerKeyboardHandler$$.x, 
    $DvtBreadcrumbsEventManager$$ = $DvtPanelDrawerKeyboardHandler$$.y);
    this.$_refreshPanelSize$($DvtTrainEvent$$, $DvtAccordionDefaults$$, $DvtPanelDrawerEventManager$$, $DvtPanelDrawerTab$$, $DvtBreadcrumbsPeer$$, $DvtBreadcrumbsEventManager$$)
  };
  dvt.$PanelDrawer$.prototype.$_refreshPanelSize$ = function $dvt$$PanelDrawer$$$$_refreshPanelSize$$($DvtTrainEvent$$, $DvtAccordionDefaults$$, $DvtPanelDrawerKeyboardHandler$$, $DvtPanelDrawerEventManager$$, $DvtPanelDrawerTab$$, $DvtBreadcrumbsPeer$$) {
    var $DvtBreadcrumbsEventManager$$ = this.$GetPanel$($DvtTrainEvent$$);
    $DvtAccordionDefaults$$ ? $DvtAccordionDefaults$$.$addProp$(dvt.$Animator$.$TYPE_NUMBER$, $DvtBreadcrumbsEventManager$$, $DvtBreadcrumbsEventManager$$.$getTranslateX$, $DvtBreadcrumbsEventManager$$.$setTranslateX$, -$DvtPanelDrawerTab$$) : $DvtBreadcrumbsEventManager$$.$setTranslateX$(-$DvtPanelDrawerTab$$);
    $DvtAccordionDefaults$$ ? $DvtAccordionDefaults$$.$addProp$(dvt.$Animator$.$TYPE_NUMBER$, $DvtBreadcrumbsEventManager$$, $DvtBreadcrumbsEventManager$$.$getTranslateY$, $DvtBreadcrumbsEventManager$$.$setTranslateY$, -$DvtBreadcrumbsPeer$$) : $DvtBreadcrumbsEventManager$$.$setTranslateY$(-$DvtBreadcrumbsPeer$$);
    $DvtPanelDrawerTab$$ = new dvt.$Rectangle$(this.$_contentPadding$, this.$_contentPadding$, $DvtPanelDrawerKeyboardHandler$$ - 2 * this.$_contentPadding$, $DvtPanelDrawerEventManager$$ - 2 * this.$_contentPadding$);
    $DvtBreadcrumbsPeer$$ = dvt.$PanelDrawer$.$_BOUNCE_WIDTH_FACTOR$ * $DvtPanelDrawerKeyboardHandler$$;
    $DvtAccordionDefaults$$ ? ($DvtAccordionDefaults$$.$addProp$(dvt.$Animator$.$TYPE_NUMBER$, this.$_expandedContent$, this.$_expandedContent$.getWidth, this.$_expandedContent$.$setWidth$, $DvtBreadcrumbsPeer$$), $DvtAccordionDefaults$$.$addProp$(dvt.$Animator$.$TYPE_NUMBER$, this.$_expandedContent$, this.$_expandedContent$.getHeight, this.$_expandedContent$.$setHeight$, $DvtPanelDrawerEventManager$$), $DvtAccordionDefaults$$.$addProp$(dvt.$Animator$.$TYPE_RECTANGLE$, this, this.$_getContentClipPath$, 
    this.$_setContentClipPath$, $DvtPanelDrawerTab$$), this.$_discloseDirection$ == dvt.$PanelDrawer$.$DIR_LEFT$ ? $DvtAccordionDefaults$$.$addProp$(dvt.$Animator$.$TYPE_NUMBER$, this.$_contentPane$, this.$_contentPane$.$getTranslateX$, this.$_contentPane$.$setTranslateX$, -$DvtPanelDrawerKeyboardHandler$$) : this.$_discloseDirection$ == dvt.$PanelDrawer$.$DIR_RIGHT$ && ($DvtAccordionDefaults$$.$addProp$(dvt.$Animator$.$TYPE_NUMBER$, this.$_contentPane$, this.$_contentPane$.$getTranslateX$, this.$_contentPane$.$setTranslateX$, 
    $DvtPanelDrawerKeyboardHandler$$), $DvtAccordionDefaults$$.$addProp$(dvt.$Animator$.$TYPE_NUMBER$, this.$_expandedBorder$, this.$_expandedBorder$.$getTranslateX$, this.$_expandedBorder$.$setTranslateX$, $DvtPanelDrawerKeyboardHandler$$), $DvtAccordionDefaults$$.$addProp$(dvt.$Animator$.$TYPE_NUMBER$, this.$_expandedBorderResizable$, this.$_expandedBorderResizable$.$getTranslateX$, this.$_expandedBorderResizable$.$setTranslateX$, $DvtPanelDrawerKeyboardHandler$$), $DvtAccordionDefaults$$.$addProp$(dvt.$Animator$.$TYPE_NUMBER$, 
    this.$_expandedContent$, this.$_expandedContent$.$getTranslateX$, this.$_expandedContent$.$setTranslateX$, -$DvtPanelDrawerKeyboardHandler$$)), this.$_dockSide$ == dvt.$PanelDrawer$.$DOCK_BOTTOM$ && ($DvtAccordionDefaults$$.$addProp$(dvt.$Animator$.$TYPE_NUMBER$, this.$_expandedBorder$, this.$_expandedBorder$.$getTranslateY$, this.$_expandedBorder$.$setTranslateY$, $DvtPanelDrawerEventManager$$), $DvtAccordionDefaults$$.$addProp$(dvt.$Animator$.$TYPE_NUMBER$, this.$_expandedBorderResizable$, 
    this.$_expandedBorderResizable$.$getTranslateY$, this.$_expandedBorderResizable$.$setTranslateY$, $DvtPanelDrawerEventManager$$), $DvtAccordionDefaults$$.$addProp$(dvt.$Animator$.$TYPE_NUMBER$, this.$_expandedContent$, this.$_expandedContent$.$getTranslateY$, this.$_expandedContent$.$setTranslateY$, -$DvtPanelDrawerEventManager$$))) : (this.$_expandedContent$.$setWidth$($DvtBreadcrumbsPeer$$), this.$_expandedContent$.$setHeight$($DvtPanelDrawerEventManager$$), this.$_discloseDirection$ == dvt.$PanelDrawer$.$DIR_RIGHT$ && 
    (this.$_expandedContent$.$setTranslateX$(-$DvtPanelDrawerKeyboardHandler$$), this.$_expandedBorder$.$setTranslateX$($DvtPanelDrawerKeyboardHandler$$), this.$_expandedBorderResizable$.$setTranslateX$($DvtPanelDrawerKeyboardHandler$$)), this.$_dockSide$ == dvt.$PanelDrawer$.$DOCK_BOTTOM$ && (this.$_expandedContent$.$setTranslateY$(-$DvtPanelDrawerEventManager$$), this.$_expandedBorder$.$setTranslateY$($DvtPanelDrawerEventManager$$), this.$_expandedBorderResizable$.$setTranslateY$($DvtPanelDrawerEventManager$$)), 
    this.$_setContentClipPath$($DvtPanelDrawerTab$$));
    $DvtPanelDrawerTab$$ = this.$GetTab$($DvtTrainEvent$$);
    var $DvtBreadcrumbsDefaults$$;
    $DvtTrainEvent$$ = $DvtPanelDrawerKeyboardHandler$$;
    this.$_discloseDirection$ == dvt.$PanelDrawer$.$DIR_RIGHT$ && ($DvtTrainEvent$$ = -$DvtPanelDrawerKeyboardHandler$$);
    this.$_dockSide$ == dvt.$PanelDrawer$.$DOCK_TOP$ ? $DvtPanelDrawerTab$$ ? ($DvtBreadcrumbsDefaults$$ = ["M", 0, 0, "L", 0, $DvtPanelDrawerTab$$.$getTranslateY$(), "M", 0, $DvtPanelDrawerTab$$.$getTranslateY$() + dvt.$PanelDrawer$.$_TAB_SIZE$], $DvtPanelDrawerKeyboardHandler$$ = this.$GetTab$(this.$_panelOrder$[this.$_panelOrder$.length - 1]), $DvtBreadcrumbsDefaults$$.push("L", 0, $DvtPanelDrawerKeyboardHandler$$.$getTranslateY$() + dvt.$PanelDrawer$.$_TAB_SIZE$), this.$_expandedBorder$.$setCommands$($DvtBreadcrumbsDefaults$$), 
    $DvtTrainEvent$$ *= dvt.$PanelDrawer$.$_BOUNCE_WIDTH_FACTOR$, $DvtBreadcrumbsDefaults$$ = ["M", 0, $DvtPanelDrawerKeyboardHandler$$.$getTranslateY$() + dvt.$PanelDrawer$.$_TAB_SIZE$, "L", 0, $DvtPanelDrawerEventManager$$, "L", $DvtTrainEvent$$, $DvtPanelDrawerEventManager$$]) : ($DvtBreadcrumbsDefaults$$ = ["M", 0, 0, "L", 0, $DvtPanelDrawerEventManager$$, "L", $DvtTrainEvent$$, $DvtPanelDrawerEventManager$$], this.$_expandedBorder$.$setCommands$($DvtBreadcrumbsDefaults$$)) : this.$_dockSide$ == 
    dvt.$PanelDrawer$.$DOCK_BOTTOM$ && ($DvtPanelDrawerTab$$ ? ($DvtBreadcrumbsDefaults$$ = ["M", 0, 0, "L", 0, $DvtPanelDrawerTab$$.$getTranslateY$() + dvt.$PanelDrawer$.$_TAB_SIZE$, "M", 0, $DvtPanelDrawerTab$$.$getTranslateY$()], $DvtPanelDrawerKeyboardHandler$$ = this.$GetTab$(this.$_panelOrder$[0]), $DvtBreadcrumbsDefaults$$.push("L", 0, $DvtPanelDrawerKeyboardHandler$$.$getTranslateY$()), this.$_expandedBorder$.$setCommands$($DvtBreadcrumbsDefaults$$), $DvtTrainEvent$$ *= dvt.$PanelDrawer$.$_BOUNCE_WIDTH_FACTOR$, 
    $DvtBreadcrumbsDefaults$$ = ["M", 0, $DvtPanelDrawerKeyboardHandler$$.$getTranslateY$(), "L", 0, -$DvtPanelDrawerEventManager$$, "L", $DvtTrainEvent$$, -$DvtPanelDrawerEventManager$$]) : ($DvtBreadcrumbsDefaults$$ = ["M", 0, 0, "L", 0, -$DvtPanelDrawerEventManager$$, "L", $DvtTrainEvent$$, -$DvtPanelDrawerEventManager$$], this.$_expandedBorder$.$setCommands$($DvtBreadcrumbsDefaults$$)));
    $DvtAccordionDefaults$$ ? $DvtAccordionDefaults$$.$addProp$(dvt.$Animator$.$TYPE_PATH$, this.$_expandedBorderResizable$, this.$_expandedBorderResizable$.$getCommands$, this.$_expandedBorderResizable$.$setCommands$, $DvtBreadcrumbsDefaults$$) : this.$_expandedBorderResizable$.$setCommands$($DvtBreadcrumbsDefaults$$)
  };
  dvt.$PanelDrawer$.prototype.$_setContentClipPath$ = function $dvt$$PanelDrawer$$$$_setContentClipPath$$($DvtTrainEvent$$) {
    if(this.$_expandedContentPanel$ && $DvtTrainEvent$$) {
      var $DvtAccordionDefaults$$ = new dvt.$ClipPath$("pdcp" + this.$_sid$);
      $DvtAccordionDefaults$$.$addRect$($DvtTrainEvent$$.x, $DvtTrainEvent$$.y, $DvtTrainEvent$$.$w$, $DvtTrainEvent$$.$h$);
      this.$_expandedContentPanel$.$setClipPath$($DvtAccordionDefaults$$)
    }
    this.$_contentClipPath$ = $DvtTrainEvent$$
  };
  dvt.$PanelDrawer$.prototype.$_getContentClipPath$ = $JSCompiler_get$$("$_contentClipPath$");
  dvt.$PanelDrawer$.prototype.$GetExpandedContentWidth$ = function $dvt$$PanelDrawer$$$$GetExpandedContentWidth$$($DvtTrainEvent$$) {
    $DvtTrainEvent$$ += 2 * this.$_contentPadding$;
    if((this.$_minWidth$ || 0 == this.$_minWidth$) && $DvtTrainEvent$$ < this.$_minWidth$) {
      $DvtTrainEvent$$ = this.$_minWidth$
    }
    this.$_maxWidth$ && $DvtTrainEvent$$ > this.$_maxWidth$ && ($DvtTrainEvent$$ = this.$_maxWidth$);
    return $DvtTrainEvent$$
  };
  dvt.$PanelDrawer$.prototype.$GetExpandedContentHeight$ = function $dvt$$PanelDrawer$$$$GetExpandedContentHeight$$($DvtTrainEvent$$) {
    $DvtTrainEvent$$ += 2 * this.$_contentPadding$;
    if((this.$_minHeight$ || 0 == this.$_minHeight$) && $DvtTrainEvent$$ < this.$_minHeight$) {
      $DvtTrainEvent$$ = this.$_minHeight$
    }
    this.$_maxHeight$ && $DvtTrainEvent$$ > this.$_maxHeight$ && ($DvtTrainEvent$$ = this.$_maxHeight$);
    return $DvtTrainEvent$$
  };
  dvt.$PanelDrawer$.prototype.$ApplyFillAlpha$ = function $dvt$$PanelDrawer$$$$ApplyFillAlpha$$($DvtTrainEvent$$) {
    if(this.$_expandedContent$) {
      var $DvtAccordionDefaults$$ = this.$_expandedContent$.$getFill$().$clone$();
      $DvtAccordionDefaults$$.$setAlpha$($DvtTrainEvent$$);
      this.$_expandedContent$.$setFill$($DvtAccordionDefaults$$)
    }
    for(var $DvtPanelDrawerKeyboardHandler$$ in this.$_tabs$) {
      var $DvtPanelDrawerEventManager$$ = this.$_tabs$[$DvtPanelDrawerKeyboardHandler$$];
      $DvtPanelDrawerEventManager$$ && ($DvtAccordionDefaults$$ = $DvtPanelDrawerEventManager$$.$getFill$().$clone$(), $DvtAccordionDefaults$$.$setAlpha$($DvtTrainEvent$$), $DvtPanelDrawerEventManager$$.$setFill$($DvtAccordionDefaults$$))
    }
  };
  dvt.$PanelDrawer$.prototype.$ApplyStrokeAlpha$ = function $dvt$$PanelDrawer$$$$ApplyStrokeAlpha$$($DvtTrainEvent$$) {
    if(this.$_expandedBorder$) {
      var $DvtAccordionDefaults$$ = this.$_expandedBorder$.$getStroke$().$clone$();
      $DvtAccordionDefaults$$.$setAlpha$($DvtTrainEvent$$);
      this.$_expandedBorder$.$setStroke$($DvtAccordionDefaults$$)
    }
    this.$_expandedBorderResizable$ && ($DvtAccordionDefaults$$ = this.$_expandedBorderResizable$.$getStroke$().$clone$(), $DvtAccordionDefaults$$.$setAlpha$($DvtTrainEvent$$), this.$_expandedBorderResizable$.$setStroke$($DvtAccordionDefaults$$));
    for(var $DvtPanelDrawerKeyboardHandler$$ in this.$_tabs$) {
      var $DvtPanelDrawerEventManager$$ = this.$_tabs$[$DvtPanelDrawerKeyboardHandler$$];
      $DvtPanelDrawerEventManager$$ && ($DvtAccordionDefaults$$ = $DvtPanelDrawerEventManager$$.$getStroke$().$clone$(), $DvtAccordionDefaults$$.$setAlpha$($DvtTrainEvent$$), $DvtPanelDrawerEventManager$$.$setStroke$($DvtAccordionDefaults$$))
    }
  };
  dvt.$PanelDrawer$.prototype.$deEmphasizeStart$ = function $dvt$$PanelDrawer$$$$deEmphasizeStart$$() {
    this.$setMouseEnabled$($JSCompiler_alias_FALSE$$);
    this.$ApplyFillAlpha$(dvt.$PanelDrawer$.$_BACKGROUND_ALPHA_DE_EMPHASIZED$);
    this.$ApplyStrokeAlpha$(dvt.$PanelDrawer$.$_BORDER_ALPHA_DE_EMPHASIZED$);
    this.$_expandedContentPanel$ && this.$_expandedContentPanel$.$setAlpha$(dvt.$PanelDrawer$.$_BACKGROUND_ALPHA_DE_EMPHASIZED$);
    for(var $DvtTrainEvent$$ in this.$_tabs$) {
      var $DvtAccordionDefaults$$ = this.$GetIcon$($DvtTrainEvent$$);
      $DvtAccordionDefaults$$ && $DvtAccordionDefaults$$.$setAlpha$(dvt.$PanelDrawer$.$_BACKGROUND_ALPHA_DE_EMPHASIZED$)
    }
  };
  dvt.$PanelDrawer$.prototype.$deEmphasizeEnd$ = function $dvt$$PanelDrawer$$$$deEmphasizeEnd$$() {
    this.$setMouseEnabled$($JSCompiler_alias_TRUE$$);
    this.$ApplyFillAlpha$(this.$_bgAlpha$);
    this.$ApplyStrokeAlpha$(dvt.$PanelDrawer$.$_BORDER_ALPHA$);
    this.$_expandedContentPanel$ && this.$_expandedContentPanel$.$setAlpha$(1);
    for(var $DvtTrainEvent$$ in this.$_tabs$) {
      var $DvtAccordionDefaults$$ = this.$GetIcon$($DvtTrainEvent$$);
      $DvtAccordionDefaults$$ && $DvtAccordionDefaults$$.$setAlpha$(1)
    }
    this.$HandleRollOut$($JSCompiler_alias_NULL$$)
  };
  dvt.$PanelDrawer$.prototype.$HandleRollOver$ = function $dvt$$PanelDrawer$$$$HandleRollOver$$() {
    this.$ApplyAlphasRollover$()
  };
  dvt.$PanelDrawer$.prototype.$HandleRollOut$ = function $dvt$$PanelDrawer$$$$HandleRollOut$$() {
    this.$_bFocus$ || this.$ApplyAlphasRollout$()
  };
  dvt.$PanelDrawer$.prototype.$ApplyAlphasRollover$ = function $dvt$$PanelDrawer$$$$ApplyAlphasRollover$$() {
    this.$ApplyFillAlpha$(dvt.$PanelDrawer$.$_BACKGROUND_ALPHA_ROLLOVER$)
  };
  dvt.$PanelDrawer$.prototype.$ApplyAlphasRollout$ = function $dvt$$PanelDrawer$$$$ApplyAlphasRollout$$() {
    this.$ApplyFillAlpha$(this.$_bgAlpha$)
  };
  dvt.$PanelDrawer$.prototype.$ChangeTabsState$ = function $dvt$$PanelDrawer$$$$ChangeTabsState$$() {
    for(var $DvtTrainEvent$$ in this.$_tabs$) {
      var $DvtAccordionDefaults$$ = this.$_tabs$[$DvtTrainEvent$$];
      $DvtAccordionDefaults$$ && ($DvtTrainEvent$$ == this.$getDisplayedPanelId$() && this.$isDisclosed$() ? ($DvtAccordionDefaults$$.$setSolidFill$(this.$_bgColor$, this.$_bgAlpha$), $DvtAccordionDefaults$$.$setSolidStroke$(this.$_borderColor$, dvt.$PanelDrawer$.$_BORDER_ALPHA$), $DvtAccordionDefaults$$.$setDisclosed$($JSCompiler_alias_TRUE$$)) : ($DvtAccordionDefaults$$.$setSolidFill$(this.$_bgInactiveColor$, this.$_bgAlpha$), $DvtAccordionDefaults$$.$setSolidStroke$(this.$_borderInactiveColor$, 
      dvt.$PanelDrawer$.$_BORDER_ALPHA$), $DvtAccordionDefaults$$.$setDisclosed$($JSCompiler_alias_FALSE$$)));
      var $DvtPanelDrawerKeyboardHandler$$ = this.$isDisclosed$() && $DvtTrainEvent$$ == this.$getDisplayedPanelId$(), $DvtPanelDrawerEventManager$$ = this.$GetIcon$($DvtTrainEvent$$);
      $DvtPanelDrawerEventManager$$ && $DvtPanelDrawerEventManager$$.$setToggled$($DvtPanelDrawerKeyboardHandler$$);
      $DvtPanelDrawerKeyboardHandler$$ ? this.$_activeContent$.$addChild$($DvtAccordionDefaults$$) : this.$_contentPane$.$addChildAt$($DvtAccordionDefaults$$, 0)
    }
  };
  dvt.$PanelDrawer$.prototype.$setMaxContainerHeight$ = function $dvt$$PanelDrawer$$$$setMaxContainerHeight$$($DvtTrainEvent$$) {
    if(!this.$_maxContainerHeight$ || this.$_maxContainerHeight$ < $DvtTrainEvent$$) {
      this.$_maxContainerHeight$ = $DvtTrainEvent$$
    }
  };
  dvt.$PanelDrawer$.prototype.$getMaxContainerHeight$ = function $dvt$$PanelDrawer$$$$getMaxContainerHeight$$() {
    return this.$GetExpandedContentHeight$(this.$_maxContainerHeight$)
  };
  dvt.$PanelDrawer$.prototype.$getDimensions$ = function $dvt$$PanelDrawer$$$$getDimensions$$($DvtTrainEvent$$) {
    $DvtTrainEvent$$ = dvt.$PanelDrawer$.$superclass$.$getDimensions$.call(this, $DvtTrainEvent$$);
    $DvtTrainEvent$$.$w$ /= dvt.$PanelDrawer$.$_BOUNCE_WIDTH_FACTOR$;
    return $DvtTrainEvent$$
  };
  dvt.$PanelDrawer$.prototype.$getEventManager$ = $JSCompiler_get$$("$_eventManager$");
  dvt.$Obj$.$createSubclass$($DvtPanelDrawerTab$$, dvt.$Path$);
  $DvtPanelDrawerTab$$.prototype.Init = function $$DvtPanelDrawerTab$$$$Init$($DvtTrainEvent$$, $DvtAccordionDefaults$$, $DvtPanelDrawerKeyboardHandler$$, $DvtPanelDrawerEventManager$$) {
    $DvtPanelDrawerTab$$.$superclass$.Init.call(this, $DvtTrainEvent$$, $DvtAccordionDefaults$$, "pdcp_tab_" + $DvtPanelDrawerKeyboardHandler$$);
    this.$_panelDrawer$ = $DvtPanelDrawerEventManager$$;
    this.$_isDisclosed$ = $JSCompiler_alias_FALSE$$;
    this.$_panelId$ = $DvtPanelDrawerKeyboardHandler$$
  };
  $DvtPanelDrawerTab$$.prototype.$HandleKeyboardEvent$ = function $$DvtPanelDrawerTab$$$$$HandleKeyboardEvent$$($DvtTrainEvent$$) {
    var $DvtAccordionDefaults$$ = $DvtTrainEvent$$.keyCode;
    if($DvtAccordionDefaults$$ == dvt.$KeyboardEvent$.$ENTER$ || $DvtAccordionDefaults$$ == dvt.$KeyboardEvent$.$SPACE$) {
      var $DvtAccordionDefaults$$ = this.$_panelDrawer$.$getEventManager$(), $DvtPanelDrawerKeyboardHandler$$ = this.$localToStage$(new dvt.$Point$(0, 0));
      $DvtTrainEvent$$ = dvt.$DomEventFactory$.$generateMouseEventFromKeyboardEvent$($DvtTrainEvent$$, this.$_context$, dvt.$MouseEvent$.$CLICK$, $DvtPanelDrawerKeyboardHandler$$.x, $DvtPanelDrawerKeyboardHandler$$.y);
      $DvtTrainEvent$$.target = this;
      $DvtAccordionDefaults$$.$PreOnClick$($DvtTrainEvent$$)
    }
  };
  $DvtPanelDrawerTab$$.prototype.$isDisclosed$ = $JSCompiler_get$$("$_isDisclosed$");
  $DvtPanelDrawerTab$$.prototype.$setDisclosed$ = function $$DvtPanelDrawerTab$$$$$setDisclosed$$($DvtTrainEvent$$) {
    this.$_isDisclosed$ != $DvtTrainEvent$$ ? (this.$_isDisclosed$ = $DvtTrainEvent$$, this.$updateAccessibilityAttributes$()) : this.$_isDisclosed$ = $DvtTrainEvent$$
  };
  $DvtPanelDrawerTab$$.prototype.$getAriaLabel$ = function $$DvtPanelDrawerTab$$$$$getAriaLabel$$() {
    var $DvtTrainEvent$$ = [];
    $DvtTrainEvent$$.push(this.$isDisclosed$() ? dvt.$Bundle$.$getTranslatedString$(dvt.$Bundle$.$UTIL_PREFIX$, "STATE_EXPANDED") : dvt.$Bundle$.$getTranslatedString$(dvt.$Bundle$.$UTIL_PREFIX$, "STATE_COLLAPSED"));
    return dvt.$Displayable$.$generateAriaLabel$(this.$_panelDrawer$.$GetTooltip$(this.$_panelId$), $DvtTrainEvent$$)
  };
  $DvtPanelDrawerTab$$.prototype.$addAccessibilityAttributes$ = function $$DvtPanelDrawerTab$$$$$addAccessibilityAttributes$$() {
    this.$setAriaRole$("button");
    dvt.$Agent$.$deferAriaCreation$() || this.$setAriaProperty$("label", this.$getAriaLabel$())
  };
  $DvtPanelDrawerTab$$.prototype.$updateAccessibilityAttributes$ = function $$DvtPanelDrawerTab$$$$$updateAccessibilityAttributes$$() {
    dvt.$Agent$.$deferAriaCreation$() || this.$setAriaProperty$("label", this.$getAriaLabel$())
  };
  $DvtPanelDrawerTab$$.prototype.$getKeyboardBoundingBox$ = function $$DvtPanelDrawerTab$$$$$getKeyboardBoundingBox$$($DvtTrainEvent$$) {
    return this.$getDimensions$($DvtTrainEvent$$)
  };
  $DvtPanelDrawerTab$$.prototype.$getTargetElem$ = function $$DvtPanelDrawerTab$$$$$getTargetElem$$() {
    return this.$getElem$()
  };
  $DvtPanelDrawerTab$$.prototype.$showKeyboardFocusEffect$ = function $$DvtPanelDrawerTab$$$$$showKeyboardFocusEffect$$() {
    this.$_isShowingKeyboardFocusEffect$ = $JSCompiler_alias_TRUE$$;
    this.$_keyboardFocusEffect$ || this.$_createKeyboardFocusEffect$();
    this.$_keyboardFocusEffect$.show();
    this.$_context$.$setActiveElement$(this)
  };
  $DvtPanelDrawerTab$$.prototype.$hideKeyboardFocusEffect$ = function $$DvtPanelDrawerTab$$$$$hideKeyboardFocusEffect$$() {
    this.$_isShowingKeyboardFocusEffect$ = $JSCompiler_alias_FALSE$$;
    this.$_keyboardFocusEffect$ || this.$_createKeyboardFocusEffect$();
    this.$_keyboardFocusEffect$.$hide$()
  };
  $DvtPanelDrawerTab$$.prototype.$isShowingKeyboardFocusEffect$ = $JSCompiler_get$$("$_isShowingKeyboardFocusEffect$");
  $DvtPanelDrawerTab$$.prototype.$getNextNavigable$ = function $$DvtPanelDrawerTab$$$$$getNextNavigable$$($DvtTrainEvent$$) {
    return this.$_panelDrawer$.$getEventManager$().$KeyboardHandler$.$getNextNavigable$(this, $DvtTrainEvent$$)
  };
  $DvtPanelDrawerTab$$.prototype.$_createKeyboardFocusEffect$ = function $$DvtPanelDrawerTab$$$$$_createKeyboardFocusEffect$$() {
    var $DvtTrainEvent$$ = this.$getDimensions$();
    this.$_keyboardFocusEffect$ = new dvt.$KeyboardFocusEffect$(this.$getCtx$(), this, new dvt.$Rectangle$($DvtTrainEvent$$.x + 1, $DvtTrainEvent$$.y + 1, $DvtTrainEvent$$.$w$ - 2, $DvtTrainEvent$$.$h$ - 2), $JSCompiler_alias_NULL$$, $JSCompiler_alias_NULL$$, $JSCompiler_alias_TRUE$$)
  };
  dvt.$Obj$.$createSubclass$($DvtPanelDrawerEventManager$$, dvt.$EventManager$);
  $DvtPanelDrawerEventManager$$.prototype.$OnClick$ = function $$DvtPanelDrawerEventManager$$$$$OnClick$$($DvtTrainEvent$$) {
    var $DvtAccordionDefaults$$ = this.$GetLogicalObject$(this.$GetCurrentTargetForEvent$($DvtTrainEvent$$));
    $DvtPanelDrawerEventManager$$.$superclass$.$OnClick$.call(this, $DvtTrainEvent$$);
    $DvtAccordionDefaults$$ && ($DvtAccordionDefaults$$.$HandleClick$ && $DvtAccordionDefaults$$.$HandleClick$($DvtTrainEvent$$), $DvtTrainEvent$$.stopPropagation())
  };
  $DvtPanelDrawerEventManager$$.prototype.$OnDblClickInternal$ = function $$DvtPanelDrawerEventManager$$$$$OnDblClickInternal$$($DvtTrainEvent$$) {
    var $DvtAccordionDefaults$$ = this.$GetLogicalObject$(this.$GetCurrentTargetForEvent$($DvtTrainEvent$$));
    $DvtAccordionDefaults$$ && ($DvtAccordionDefaults$$.$isDoubleClickable$ && ($DvtAccordionDefaults$$.$isDoubleClickable$() && $DvtAccordionDefaults$$.$HandleDblClick$) && $DvtAccordionDefaults$$.$HandleDblClick$($DvtTrainEvent$$), $DvtTrainEvent$$.stopPropagation())
  };
  $DvtPanelDrawerEventManager$$.prototype.$OnRollOver$ = function $$DvtPanelDrawerEventManager$$$$$OnRollOver$$($DvtTrainEvent$$) {
    $DvtPanelDrawerEventManager$$.$superclass$.$OnRollOver$.call(this, $DvtTrainEvent$$);
    var $DvtAccordionDefaults$$ = this.$GetLogicalObject$(this.$GetCurrentTargetForEvent$($DvtTrainEvent$$));
    $DvtAccordionDefaults$$ && $DvtAccordionDefaults$$.$HandleRollOver$ && $DvtAccordionDefaults$$.$HandleRollOver$($DvtTrainEvent$$)
  };
  $DvtPanelDrawerEventManager$$.prototype.$OnRollOut$ = function $$DvtPanelDrawerEventManager$$$$$OnRollOut$$($DvtTrainEvent$$) {
    $DvtPanelDrawerEventManager$$.$superclass$.$OnRollOut$.call(this, $DvtTrainEvent$$);
    var $DvtAccordionDefaults$$ = this.$GetLogicalObject$(this.$GetCurrentTargetForEvent$($DvtTrainEvent$$));
    $DvtAccordionDefaults$$ && $DvtAccordionDefaults$$.$HandleRollOut$ && $DvtAccordionDefaults$$.$HandleRollOut$($DvtTrainEvent$$)
  };
  $DvtPanelDrawerEventManager$$.prototype.$OnComponentTouchClick$ = function $$DvtPanelDrawerEventManager$$$$$OnComponentTouchClick$$($DvtTrainEvent$$) {
    var $DvtAccordionDefaults$$ = this.$GetLogicalObject$(this.$GetCurrentTargetForEvent$($DvtTrainEvent$$));
    $DvtPanelDrawerEventManager$$.$superclass$.$OnComponentTouchClick$.call(this, $DvtTrainEvent$$);
    $DvtAccordionDefaults$$ && ($DvtAccordionDefaults$$.$HandleClick$ && $DvtAccordionDefaults$$.$HandleClick$($DvtTrainEvent$$), $DvtTrainEvent$$.stopPropagation())
  };
  dvt.$Obj$.$createSubclass$($DvtPanelDrawerKeyboardHandler$$, dvt.$KeyboardHandler$);
  $DvtPanelDrawerKeyboardHandler$$.prototype.Init = function $$DvtPanelDrawerKeyboardHandler$$$$Init$($DvtTrainEvent$$, $DvtAccordionDefaults$$) {
    $DvtPanelDrawerKeyboardHandler$$.$superclass$.Init.call(this, $DvtTrainEvent$$);
    this.$_panelDrawer$ = $DvtAccordionDefaults$$
  };
  $DvtPanelDrawerKeyboardHandler$$.prototype.$processKeyDown$ = function $$DvtPanelDrawerKeyboardHandler$$$$$processKeyDown$$($DvtTrainEvent$$) {
    var $DvtAccordionDefaults$$ = $DvtTrainEvent$$.keyCode, $DvtPanelDrawerEventManager$$ = this.$_eventManager$.$getFocus$();
    return $DvtAccordionDefaults$$ == dvt.$KeyboardEvent$.$TAB$ ? ($DvtAccordionDefaults$$ = $JSCompiler_alias_NULL$$, dvt.$EventManager$.$consumeEvent$($DvtTrainEvent$$), $DvtAccordionDefaults$$ = $DvtPanelDrawerEventManager$$ ? $DvtPanelDrawerEventManager$$ : this.$_panelDrawer$.$GetTab$(this.$_panelDrawer$.$_panelOrder$[0])) : $DvtAccordionDefaults$$ == dvt.$KeyboardEvent$.$ENTER$ || $DvtAccordionDefaults$$ == dvt.$KeyboardEvent$.$SPACE$ ? ($DvtPanelDrawerEventManager$$.$HandleKeyboardEvent$($DvtTrainEvent$$), 
    $JSCompiler_alias_NULL$$) : $DvtPanelDrawerKeyboardHandler$$.$superclass$.$processKeyDown$.call(this, $DvtTrainEvent$$)
  };
  $DvtPanelDrawerKeyboardHandler$$.prototype.$getNextNavigable$ = function $$DvtPanelDrawerKeyboardHandler$$$$$getNextNavigable$$($DvtTrainEvent$$, $DvtAccordionDefaults$$) {
    if(!($DvtAccordionDefaults$$.keyCode == dvt.$KeyboardEvent$.$DOWN_ARROW$ || $DvtAccordionDefaults$$.keyCode == dvt.$KeyboardEvent$.$UP_ARROW$)) {
      return $DvtTrainEvent$$
    }
    for(var $DvtPanelDrawerKeyboardHandler$$ = $DvtTrainEvent$$, $DvtPanelDrawerEventManager$$ = $DvtAccordionDefaults$$.keyCode == dvt.$KeyboardEvent$.$DOWN_ARROW$ ? $JSCompiler_alias_TRUE$$ : $JSCompiler_alias_FALSE$$, $DvtPanelDrawerTab$$ = this.$_panelDrawer$.$_panelOrder$, $DvtBreadcrumbsPeer$$ = -1, $DvtBreadcrumbsEventManager$$ = 0;$DvtBreadcrumbsEventManager$$ < $DvtPanelDrawerTab$$.length;$DvtBreadcrumbsEventManager$$++) {
      if($DvtTrainEvent$$ == this.$_panelDrawer$.$GetTab$($DvtPanelDrawerTab$$[$DvtBreadcrumbsEventManager$$])) {
        $DvtBreadcrumbsPeer$$ = $DvtPanelDrawerEventManager$$ ? $DvtBreadcrumbsEventManager$$ == $DvtPanelDrawerTab$$.length - 1 ? -1 : $DvtBreadcrumbsEventManager$$ + 1 : 0 == $DvtBreadcrumbsEventManager$$ ? -1 : $DvtBreadcrumbsEventManager$$ - 1;
        break
      }
    }
    0 <= $DvtBreadcrumbsPeer$$ && ($DvtPanelDrawerKeyboardHandler$$ = this.$_panelDrawer$.$GetTab$($DvtPanelDrawerTab$$[$DvtBreadcrumbsPeer$$]));
    return $DvtPanelDrawerKeyboardHandler$$
  };
  dvt.$Accordion$ = function $dvt$$Accordion$$($DvtTrainEvent$$, $DvtAccordionDefaults$$, $DvtPanelDrawerKeyboardHandler$$, $DvtPanelDrawerEventManager$$, $DvtPanelDrawerTab$$, $DvtBreadcrumbsPeer$$, $DvtBreadcrumbsEventManager$$) {
    this.Init($DvtTrainEvent$$, $DvtAccordionDefaults$$, $DvtPanelDrawerKeyboardHandler$$, $DvtPanelDrawerEventManager$$, $DvtPanelDrawerTab$$, $DvtBreadcrumbsPeer$$, $DvtBreadcrumbsEventManager$$)
  };
  dvt.$Obj$.$createSubclass$(dvt.$Accordion$, dvt.$Container$);
  dvt.$Accordion$.$COLLAPSE_ENA$ = "sectionColEna";
  dvt.$Accordion$.$COLLAPSE_OVR$ = "sectionColOvr";
  dvt.$Accordion$.$COLLAPSE_DWN$ = "sectionColDwn";
  dvt.$Accordion$.$EXPAND_ENA$ = "sectionExpEna";
  dvt.$Accordion$.$EXPAND_OVR$ = "sectionExpOvr";
  dvt.$Accordion$.$EXPAND_DWN$ = "sectionExpDwn";
  dvt.$Accordion$.prototype.Init = function $dvt$$Accordion$$$Init$($DvtTrainEvent$$, $DvtPanelDrawerKeyboardHandler$$, $DvtPanelDrawerEventManager$$, $DvtPanelDrawerTab$$, $DvtBreadcrumbsPeer$$, $DvtBreadcrumbsEventManager$$, $DvtBreadcrumbsDefaults$$) {
    dvt.$Accordion$.$superclass$.Init.call(this, $DvtTrainEvent$$, $JSCompiler_alias_NULL$$, $DvtPanelDrawerKeyboardHandler$$);
    this.$_images$ = $DvtBreadcrumbsEventManager$$;
    this.$_styleMap$ = (new $DvtAccordionDefaults$$).$calcOptions$($DvtBreadcrumbsDefaults$$);
    this.$_sections$ = {};
    this.$_sectionOrder$ = [];
    this.$_maxWidth$ = $DvtPanelDrawerEventManager$$;
    this.$_minWidth$ = 0;
    this.$_maxHeight$ = $DvtPanelDrawerTab$$;
    this.$_bExpandMany$ = this.$_bCollapseAll$ = $JSCompiler_alias_FALSE$$;
    this.$_eventManager$ = $DvtBreadcrumbsPeer$$
  };
  dvt.$Accordion$.prototype.$addSection$ = function $dvt$$Accordion$$$$addSection$$($DvtTrainEvent$$, $DvtAccordionDefaults$$, $DvtPanelDrawerKeyboardHandler$$, $DvtPanelDrawerEventManager$$) {
    $DvtPanelDrawerEventManager$$ || ($DvtPanelDrawerEventManager$$ = "accordion_" + $DvtTrainEvent$$.replace(/ /g, "_") + Math.floor(1E9 * Math.random()));
    $DvtTrainEvent$$ = new dvt.$AccordionSection$(this.$getCtx$(), $DvtAccordionDefaults$$, $DvtTrainEvent$$, $DvtPanelDrawerKeyboardHandler$$, $JSCompiler_alias_TRUE$$, this, this.$_eventManager$, $DvtPanelDrawerEventManager$$, this.$_images$, this.$_styleMap$);
    this.$_sections$[$DvtPanelDrawerEventManager$$] = $DvtTrainEvent$$;
    this.$_sectionOrder$.push($DvtPanelDrawerEventManager$$);
    this.$addChild$($DvtTrainEvent$$)
  };
  dvt.$Accordion$.prototype.$render$ = function $dvt$$Accordion$$$$render$$() {
    for(var $DvtTrainEvent$$ = this.$getMaxSectionWidth$(), $DvtAccordionDefaults$$ = $JSCompiler_alias_FALSE$$, $DvtPanelDrawerKeyboardHandler$$ = 0;$DvtPanelDrawerKeyboardHandler$$ < this.$_sectionOrder$.length;$DvtPanelDrawerKeyboardHandler$$++) {
      var $DvtPanelDrawerEventManager$$ = this.$getSectionByIndex$($DvtPanelDrawerKeyboardHandler$$);
      $DvtPanelDrawerEventManager$$.$render$($DvtTrainEvent$$);
      $DvtAccordionDefaults$$ && !this.$_bExpandMany$ && $DvtPanelDrawerEventManager$$.setActive($JSCompiler_alias_FALSE$$);
      $DvtPanelDrawerEventManager$$.$_isActive$ && $DvtPanelDrawerEventManager$$.$isCollapsible$() && ($DvtAccordionDefaults$$ = $JSCompiler_alias_TRUE$$)
    }
    !$DvtAccordionDefaults$$ && (0 < this.$_sectionOrder$.length && !this.$_bCollapseAll$) && this.$getSectionByIndex$(0).setActive($JSCompiler_alias_TRUE$$);
    this.$_drawSections$()
  };
  dvt.$Accordion$.prototype.$setMaxHeight$ = $JSCompiler_set$$("$_maxHeight$");
  dvt.$Accordion$.prototype.$setMaxWidth$ = $JSCompiler_set$$("$_maxWidth$");
  dvt.$Accordion$.prototype.$setMinWidth$ = $JSCompiler_set$$("$_minWidth$");
  dvt.$Accordion$.prototype.update = function $dvt$$Accordion$$$update$($DvtTrainEvent$$) {
    $DvtTrainEvent$$ = this.$getSectionById$($DvtTrainEvent$$);
    var $DvtAccordionDefaults$$ = $DvtTrainEvent$$.$_isActive$;
    if($DvtAccordionDefaults$$) {
      $DvtAccordionDefaults$$ && this.$_canCollapseSection$($DvtTrainEvent$$) && $DvtTrainEvent$$.setActive($JSCompiler_alias_FALSE$$)
    }else {
      if(!this.$_bExpandMany$) {
        for($DvtAccordionDefaults$$ = 0;$DvtAccordionDefaults$$ < this.$_sectionOrder$.length;$DvtAccordionDefaults$$++) {
          this.$getSectionByIndex$($DvtAccordionDefaults$$).setActive($JSCompiler_alias_FALSE$$)
        }
      }
      $DvtTrainEvent$$.setActive($JSCompiler_alias_TRUE$$)
    }
    this.$_drawSections$()
  };
  dvt.$Accordion$.prototype.$getMaxSectionWidth$ = function $dvt$$Accordion$$$$getMaxSectionWidth$$() {
    if(!this.$_maxSectionWidth$) {
      for(var $DvtTrainEvent$$ = 0, $DvtAccordionDefaults$$ = this.$_styleMap$.paddingX, $DvtPanelDrawerKeyboardHandler$$ = 0;$DvtPanelDrawerKeyboardHandler$$ < this.$_sectionOrder$.length;$DvtPanelDrawerKeyboardHandler$$++) {
        var $DvtPanelDrawerEventManager$$ = this.$getSectionByIndex$($DvtPanelDrawerKeyboardHandler$$), $DvtPanelDrawerTab$$ = $DvtPanelDrawerEventManager$$.$GetTitleDimensions$();
        $DvtPanelDrawerTab$$.$w$ > $DvtTrainEvent$$ && ($DvtTrainEvent$$ = $DvtPanelDrawerTab$$.$w$);
        $DvtPanelDrawerEventManager$$ = $DvtPanelDrawerEventManager$$.$getContentDimensions$().$w$ + 2 * $DvtAccordionDefaults$$;
        $DvtPanelDrawerEventManager$$ > $DvtTrainEvent$$ && ($DvtTrainEvent$$ = $DvtPanelDrawerEventManager$$)
      }
      $DvtTrainEvent$$ = Math.min($DvtTrainEvent$$, this.$_maxWidth$);
      this.$_maxSectionWidth$ = $DvtTrainEvent$$ = Math.max($DvtTrainEvent$$, this.$_minWidth$)
    }
    return this.$_maxSectionWidth$
  };
  dvt.$Accordion$.prototype.$getExpandedHeight$ = function $dvt$$Accordion$$$$getExpandedHeight$$() {
    if(!this.$_maxHeight$) {
      for(var $DvtTrainEvent$$ = 0, $DvtAccordionDefaults$$ = 0, $DvtPanelDrawerKeyboardHandler$$ = 0;$DvtPanelDrawerKeyboardHandler$$ < this.$_sectionOrder$.length;$DvtPanelDrawerKeyboardHandler$$++) {
        var $DvtPanelDrawerEventManager$$ = this.$getSectionByIndex$($DvtPanelDrawerKeyboardHandler$$), $DvtPanelDrawerTab$$ = $DvtPanelDrawerEventManager$$.$getExpandedDimensions$().$h$;
        if($DvtPanelDrawerEventManager$$.$isCollapsible$() && $DvtPanelDrawerTab$$ > $DvtTrainEvent$$) {
          $DvtTrainEvent$$ = $DvtPanelDrawerTab$$
        }else {
          if(!$DvtPanelDrawerEventManager$$.$isCollapsible$() || this.$_bExpandMany$) {
            $DvtAccordionDefaults$$ += $DvtPanelDrawerTab$$
          }
        }
      }
      this.$_maxHeight$ = $DvtTrainEvent$$ + $DvtAccordionDefaults$$
    }
    return this.$_maxHeight$
  };
  dvt.$Accordion$.prototype.$getSectionByIndex$ = function $dvt$$Accordion$$$$getSectionByIndex$$($DvtTrainEvent$$) {
    return 0 <= $DvtTrainEvent$$ && $DvtTrainEvent$$ < this.$_sectionOrder$.length ? this.$getSectionById$(this.$_sectionOrder$[$DvtTrainEvent$$]) : $JSCompiler_alias_NULL$$
  };
  dvt.$Accordion$.prototype.$getSectionById$ = function $dvt$$Accordion$$$$getSectionById$$($DvtTrainEvent$$) {
    return this.$_sections$[$DvtTrainEvent$$]
  };
  dvt.$Accordion$.prototype.$setExpandMany$ = function $dvt$$Accordion$$$$setExpandMany$$() {
    this.$_bExpandMany$ = $JSCompiler_alias_TRUE$$
  };
  dvt.$Accordion$.prototype.$setCollapseAll$ = function $dvt$$Accordion$$$$setCollapseAll$$() {
    this.$_bCollapseAll$ = $JSCompiler_alias_TRUE$$
  };
  dvt.$Accordion$.prototype.$_canCollapseSection$ = function $dvt$$Accordion$$$$_canCollapseSection$$($DvtTrainEvent$$) {
    if($DvtTrainEvent$$.$isCollapsible$()) {
      if(this.$_bCollapseAll$) {
        return $JSCompiler_alias_TRUE$$
      }
      for(var $DvtAccordionDefaults$$ = 0, $DvtPanelDrawerKeyboardHandler$$ = 0;$DvtPanelDrawerKeyboardHandler$$ < this.$_sectionOrder$.length;$DvtPanelDrawerKeyboardHandler$$++) {
        $DvtTrainEvent$$ = this.$getSectionByIndex$($DvtPanelDrawerKeyboardHandler$$), $DvtTrainEvent$$.$_isActive$ && $DvtAccordionDefaults$$++
      }
      return 1 < $DvtAccordionDefaults$$
    }
    return $JSCompiler_alias_FALSE$$
  };
  dvt.$Accordion$.prototype.$_drawSections$ = function $dvt$$Accordion$$$$_drawSections$$() {
    for(var $DvtTrainEvent$$ = 0, $DvtAccordionDefaults$$ = 0;$DvtAccordionDefaults$$ < this.$_sectionOrder$.length;$DvtAccordionDefaults$$++) {
      var $DvtPanelDrawerKeyboardHandler$$ = this.$getSectionByIndex$($DvtAccordionDefaults$$);
      $DvtPanelDrawerKeyboardHandler$$.$setTranslateY$($DvtTrainEvent$$);
      $DvtPanelDrawerKeyboardHandler$$.$_isActive$ ? ($DvtPanelDrawerKeyboardHandler$$.expand(), $DvtTrainEvent$$ += $DvtPanelDrawerKeyboardHandler$$.$getDimensionsWithStroke$().$h$, $DvtTrainEvent$$ += this.$_styleMap$.paddingY) : ($DvtPanelDrawerKeyboardHandler$$.collapse(), $DvtTrainEvent$$ += this.$_styleMap$.sectionHeader.headerHeight)
    }
    $DvtTrainEvent$$ = this.$getDimensionsWithStroke$();
    this.$FireListener$(new dvt.$ResizeEvent$($DvtTrainEvent$$.$w$, $DvtTrainEvent$$.$h$, 0, 0))
  };
  dvt.$Accordion$.prototype.$getSections$ = function $dvt$$Accordion$$$$getSections$$() {
    for(var $DvtTrainEvent$$ = [], $DvtAccordionDefaults$$ = 0;$DvtAccordionDefaults$$ < this.$_sectionOrder$.length;$DvtAccordionDefaults$$++) {
      $DvtTrainEvent$$.push(this.$getSectionByIndex$($DvtAccordionDefaults$$))
    }
    return $DvtTrainEvent$$
  };
  dvt.$AccordionSection$ = function $dvt$$AccordionSection$$($DvtTrainEvent$$, $DvtAccordionDefaults$$, $DvtPanelDrawerKeyboardHandler$$, $DvtPanelDrawerEventManager$$, $DvtPanelDrawerTab$$, $DvtBreadcrumbsPeer$$, $DvtBreadcrumbsEventManager$$, $DvtBreadcrumbsDefaults$$, $DvtBreadcrumbsRenderer$$, $styleMap$$89$$) {
    this.Init($DvtTrainEvent$$, $DvtAccordionDefaults$$, $DvtPanelDrawerKeyboardHandler$$, $DvtPanelDrawerEventManager$$, $DvtPanelDrawerTab$$, $DvtBreadcrumbsPeer$$, $DvtBreadcrumbsEventManager$$, $DvtBreadcrumbsDefaults$$, $DvtBreadcrumbsRenderer$$, $styleMap$$89$$)
  };
  dvt.$Obj$.$createSubclass$(dvt.$AccordionSection$, dvt.$Container$);
  dvt.$AccordionSection$.prototype.Init = function $dvt$$AccordionSection$$$Init$($DvtTrainEvent$$, $DvtAccordionDefaults$$, $DvtPanelDrawerKeyboardHandler$$, $DvtPanelDrawerEventManager$$, $DvtPanelDrawerTab$$, $DvtBreadcrumbsPeer$$, $DvtBreadcrumbsEventManager$$, $DvtBreadcrumbsDefaults$$, $DvtBreadcrumbsRenderer$$, $styleMap$$90$$) {
    dvt.$AccordionSection$.$superclass$.Init.call(this, $DvtTrainEvent$$, $JSCompiler_alias_NULL$$, $DvtBreadcrumbsDefaults$$);
    this.$_parent$ = $DvtBreadcrumbsPeer$$;
    this.$_images$ = $DvtBreadcrumbsRenderer$$;
    this.$_title$ = $DvtPanelDrawerKeyboardHandler$$;
    this.$_id$ = $DvtBreadcrumbsDefaults$$;
    this.$_sectionContent$ = $DvtAccordionDefaults$$;
    this.$_collapsedBtn$ = this.$_expandedBtn$ = $JSCompiler_alias_NULL$$;
    this.$_isActive$ = (this.$_isCollapsible$ = $DvtPanelDrawerTab$$) ? $DvtPanelDrawerEventManager$$ : $JSCompiler_alias_TRUE$$;
    this.$_eventManager$ = $DvtBreadcrumbsEventManager$$;
    this.$_styleMap$ = $styleMap$$90$$;
    this.$_headerHeight$ = this.$_styleMap$.sectionHeader.headerHeight;
    this.$_paddingX$ = this.$_styleMap$.paddingX;
    this.$_paddingY$ = this.$_styleMap$.paddingY;
    this.$_titleStyle$ = this.$_styleMap$.sectionHeader.styleEna;
    this.$_imageWidth$ = this.$_styleMap$.sectionHeader.imageWidth;
    this.$_imageHeight$ = this.$_styleMap$.sectionHeader.imageHeight;
    this.$_textPadding$ = this.$_styleMap$.sectionHeader.textPadding
  };
  dvt.$AccordionSection$.prototype.getId = $JSCompiler_get$$("$_id$");
  dvt.$AccordionSection$.prototype.$getTitle$ = $JSCompiler_get$$("$_title$");
  dvt.$AccordionSection$.prototype.setActive = $JSCompiler_set$$("$_isActive$");
  dvt.$AccordionSection$.prototype.$isCollapsible$ = $JSCompiler_get$$("$_isCollapsible$");
  dvt.$AccordionSection$.prototype.$getContentDimensions$ = function $dvt$$AccordionSection$$$$getContentDimensions$$() {
    var $DvtTrainEvent$$ = $JSCompiler_alias_NULL$$;
    0 > this.$getChildIndex$(this.$_sectionContent$) ? (this.$addChild$(this.$_sectionContent$), $DvtTrainEvent$$ = this.$_sectionContent$.$getDimensions$(), this.removeChild(this.$_sectionContent$)) : $DvtTrainEvent$$ = this.$_sectionContent$.$getDimensions$();
    return $DvtTrainEvent$$
  };
  dvt.$AccordionSection$.prototype.$getExpandedDimensions$ = function $dvt$$AccordionSection$$$$getExpandedDimensions$$() {
    var $DvtTrainEvent$$ = $JSCompiler_alias_NULL$$;
    0 > this.$getChildIndex$(this.$_sectionContent$) ? (this.$addChild$(this.$_sectionContent$), this.$_sectionContent$.$setTranslateX$(this.$_paddingX$), this.$_sectionContent$.$setTranslateY$(this.$_headerHeight$ + this.$_paddingY$), $DvtTrainEvent$$ = this.$getDimensionsWithStroke$(), this.removeChild(this.$_sectionContent$)) : $DvtTrainEvent$$ = this.$getDimensionsWithStroke$();
    return $DvtTrainEvent$$
  };
  dvt.$AccordionSection$.prototype.$render$ = function $dvt$$AccordionSection$$$$render$$($DvtTrainEvent$$) {
    this.$_createHeader$($DvtTrainEvent$$, this.$_headerHeight$);
    this.$isCollapsible$() ? this.$_isActive$ ? (this.$addChildAt$(this.$_expandedBtn$, 0), this.$addChild$(this.$_sectionContent$), this.$_sectionContent$.$setTranslateX$(this.$_paddingX$), this.$_sectionContent$.$setTranslateY$(this.$_headerHeight$ + this.$_paddingY$)) : this.$addChild$(this.$_collapsedBtn$) : (this.$addChildAt$(this.$_header$, 0), this.$addChild$(this.$_sectionContent$), this.$_sectionContent$.$setTranslateX$(this.$_paddingX$), this.$_sectionContent$.$setTranslateY$(this.$_headerHeight$ + 
    this.$_paddingY$))
  };
  dvt.$AccordionSection$.prototype.collapse = function $dvt$$AccordionSection$$$collapse$() {
    this.$isCollapsible$() && (0 <= this.$getChildIndex$(this.$_expandedBtn$) && this.removeChild(this.$_expandedBtn$), 0 <= this.$getChildIndex$(this.$_sectionContent$) && this.removeChild(this.$_sectionContent$), this.$addChild$(this.$_collapsedBtn$), this.setActive($JSCompiler_alias_FALSE$$), this.$isShowingKeyboardFocusEffect$() && this.$showKeyboardFocusEffect$())
  };
  dvt.$AccordionSection$.prototype.expand = function $dvt$$AccordionSection$$$expand$() {
    0 <= this.$getChildIndex$(this.$_collapsedBtn$) && this.removeChild(this.$_collapsedBtn$);
    this.$addChild$(this.$_expandedBtn$);
    this.$addChild$(this.$_sectionContent$);
    this.$_sectionContent$.$setTranslateX$(this.$_paddingX$);
    this.$_sectionContent$.$setTranslateY$(this.$_headerHeight$ + this.$_paddingY$);
    this.setActive($JSCompiler_alias_TRUE$$);
    this.$isShowingKeyboardFocusEffect$() && this.$showKeyboardFocusEffect$()
  };
  dvt.$AccordionSection$.prototype.$HandleHeaderClick$ = function $dvt$$AccordionSection$$$$HandleHeaderClick$$() {
    this.$_parent$.update(this.getId())
  };
  dvt.$AccordionSection$.prototype.$GetTitleDimensions$ = function $dvt$$AccordionSection$$$$GetTitleDimensions$$() {
    if(!this.$_titleDim$) {
      var $DvtTrainEvent$$ = new dvt.$OutputText$(this.$_context$, this.$_title$);
      $DvtTrainEvent$$.$setCSSStyle$(this.$_titleStyle$);
      if($DvtTrainEvent$$ = $DvtTrainEvent$$.$measureDimensions$()) {
        $DvtTrainEvent$$.$w$ = $DvtTrainEvent$$.$w$ + this.$_imageWidth$ + this.$_textPadding$
      }
      this.$_titleDim$ = $DvtTrainEvent$$
    }
    return this.$_titleDim$
  };
  dvt.$AccordionSection$.prototype.$SetTitleDimensions$ = function $dvt$$AccordionSection$$$$SetTitleDimensions$$($DvtTrainEvent$$) {
    if(!this.$_titleDim$ || this.$_titleDim$.$w$ < $DvtTrainEvent$$.$w$ || this.$_titleDim$.$h$ < $DvtTrainEvent$$.$h$) {
      this.$_titleDim$ = $DvtTrainEvent$$
    }
  };
  dvt.$AccordionSection$.prototype.$_createHeader$ = function $dvt$$AccordionSection$$$$_createHeader$$($DvtTrainEvent$$, $DvtAccordionDefaults$$) {
    if(this.$isCollapsible$()) {
      var $DvtPanelDrawerKeyboardHandler$$, $DvtPanelDrawerEventManager$$, $DvtPanelDrawerTab$$;
      this.$_images$.$getAttr$ ? ($DvtPanelDrawerKeyboardHandler$$ = this.$_createHeaderState$(dvt.$Button$.$STATE_ENABLED$, this.$_images$.$getAttr$(dvt.$Accordion$.$EXPAND_ENA$), this.$_title$, $DvtTrainEvent$$, $DvtAccordionDefaults$$), $DvtPanelDrawerEventManager$$ = this.$_createHeaderState$(dvt.$Button$.$STATE_OVER$, this.$_images$.$getAttr$(dvt.$Accordion$.$EXPAND_OVR$), this.$_title$, $DvtTrainEvent$$, $DvtAccordionDefaults$$), $DvtPanelDrawerTab$$ = this.$_createHeaderState$(dvt.$Button$.$STATE_DOWN$, 
      this.$_images$.$getAttr$(dvt.$Accordion$.$EXPAND_DWN$), this.$_title$, $DvtTrainEvent$$, $DvtAccordionDefaults$$)) : ($DvtPanelDrawerKeyboardHandler$$ = this.$_createHeaderState$(dvt.$Button$.$STATE_ENABLED$, this.$_images$[dvt.$Accordion$.$EXPAND_ENA$], this.$_title$, $DvtTrainEvent$$, $DvtAccordionDefaults$$), $DvtPanelDrawerEventManager$$ = this.$_createHeaderState$(dvt.$Button$.$STATE_OVER$, this.$_images$[dvt.$Accordion$.$EXPAND_OVR$], this.$_title$, $DvtTrainEvent$$, $DvtAccordionDefaults$$), 
      $DvtPanelDrawerTab$$ = this.$_createHeaderState$(dvt.$Button$.$STATE_DOWN$, this.$_images$[dvt.$Accordion$.$EXPAND_DWN$], this.$_title$, $DvtTrainEvent$$, $DvtAccordionDefaults$$));
      this.$_expandedBtn$ = new dvt.$Button$(this.$_context$, $DvtPanelDrawerKeyboardHandler$$, $DvtPanelDrawerEventManager$$, $DvtPanelDrawerTab$$);
      this.$_expandedBtn$.$setAriaRole$("button");
      $DvtPanelDrawerKeyboardHandler$$ = dvt.$Displayable$.$generateAriaLabel$(this.$_title$, [dvt.$Bundle$.$getTranslatedString$(dvt.$Bundle$.$UTIL_PREFIX$, "STATE_EXPANDED")]);
      this.$_expandedBtn$.$setAriaProperty$("label", $DvtPanelDrawerKeyboardHandler$$);
      this.$_images$.$getAttr$ ? ($DvtPanelDrawerKeyboardHandler$$ = this.$_createHeaderState$(dvt.$Button$.$STATE_ENABLED$, this.$_images$.$getAttr$(dvt.$Accordion$.$COLLAPSE_ENA$), this.$_title$, $DvtTrainEvent$$, $DvtAccordionDefaults$$), $DvtPanelDrawerEventManager$$ = this.$_createHeaderState$(dvt.$Button$.$STATE_OVER$, this.$_images$.$getAttr$(dvt.$Accordion$.$COLLAPSE_OVR$), this.$_title$, $DvtTrainEvent$$, $DvtAccordionDefaults$$), $DvtPanelDrawerTab$$ = this.$_createHeaderState$(dvt.$Button$.$STATE_DOWN$, 
      this.$_images$.$getAttr$(dvt.$Accordion$.$COLLAPSE_DWN$), this.$_title$, $DvtTrainEvent$$, $DvtAccordionDefaults$$)) : ($DvtPanelDrawerKeyboardHandler$$ = this.$_createHeaderState$(dvt.$Button$.$STATE_ENABLED$, this.$_images$[dvt.$Accordion$.$COLLAPSE_ENA$], this.$_title$, $DvtTrainEvent$$, $DvtAccordionDefaults$$), $DvtPanelDrawerEventManager$$ = this.$_createHeaderState$(dvt.$Button$.$STATE_OVER$, this.$_images$[dvt.$Accordion$.$COLLAPSE_OVR$], this.$_title$, $DvtTrainEvent$$, $DvtAccordionDefaults$$), 
      $DvtPanelDrawerTab$$ = this.$_createHeaderState$(dvt.$Button$.$STATE_DOWN$, this.$_images$[dvt.$Accordion$.$COLLAPSE_DWN$], this.$_title$, $DvtTrainEvent$$, $DvtAccordionDefaults$$));
      this.$_collapsedBtn$ = new dvt.$Button$(this.$_context$, $DvtPanelDrawerKeyboardHandler$$, $DvtPanelDrawerEventManager$$, $DvtPanelDrawerTab$$);
      this.$_collapsedBtn$.$setAriaRole$("button");
      $DvtPanelDrawerKeyboardHandler$$ = dvt.$Displayable$.$generateAriaLabel$(this.$_title$, [dvt.$Bundle$.$getTranslatedString$(dvt.$Bundle$.$UTIL_PREFIX$, "STATE_COLLAPSED")]);
      this.$_collapsedBtn$.$setAriaProperty$("label", $DvtPanelDrawerKeyboardHandler$$);
      this.$_eventManager$.$associate$(this.$_expandedBtn$, this);
      this.$_eventManager$.$associate$(this.$_collapsedBtn$, this)
    }else {
      $DvtPanelDrawerKeyboardHandler$$ = this.$_createButtonBase$(dvt.$Button$.$STATE_DISABLED$, $DvtTrainEvent$$, $DvtAccordionDefaults$$), $DvtPanelDrawerEventManager$$ = this.$_createButtonText$(this.$_title$), this.$_header$ = new dvt.$Container$(this.$_context$), this.$_header$.$addChild$($DvtPanelDrawerKeyboardHandler$$), this.$_header$.$addChild$($DvtPanelDrawerEventManager$$)
    }
  };
  dvt.$AccordionSection$.prototype.$_createHeaderState$ = function $dvt$$AccordionSection$$$$_createHeaderState$$($DvtTrainEvent$$, $DvtAccordionDefaults$$, $DvtPanelDrawerKeyboardHandler$$, $DvtPanelDrawerEventManager$$, $DvtPanelDrawerTab$$) {
    var $DvtBreadcrumbsPeer$$ = this.$_imageWidth$, $DvtBreadcrumbsEventManager$$ = this.$_imageHeight$, $DvtBreadcrumbsDefaults$$ = (this.$_headerHeight$ - $DvtBreadcrumbsEventManager$$) / 2, $DvtBreadcrumbsRenderer$$ = new dvt.$Container$(this.$_context$);
    $DvtTrainEvent$$ = this.$_createButtonBase$($DvtTrainEvent$$, $DvtPanelDrawerEventManager$$, $DvtPanelDrawerTab$$);
    $DvtBreadcrumbsRenderer$$.$addChild$($DvtTrainEvent$$);
    ($DvtAccordionDefaults$$ = $DvtAccordionDefaults$$ ? new dvt.$Image$(this.$_context$, $DvtAccordionDefaults$$, 0, $DvtBreadcrumbsDefaults$$, $DvtBreadcrumbsPeer$$, $DvtBreadcrumbsEventManager$$) : $JSCompiler_alias_NULL$$) && $DvtBreadcrumbsRenderer$$.$addChild$($DvtAccordionDefaults$$);
    $DvtPanelDrawerKeyboardHandler$$ = this.$_createButtonText$($DvtPanelDrawerKeyboardHandler$$, $DvtPanelDrawerEventManager$$ - $DvtBreadcrumbsPeer$$ - 0, $DvtPanelDrawerTab$$, $DvtBreadcrumbsRenderer$$);
    dvt.$Agent$.$isRightToLeft$(this.$_context$) ? ($DvtPanelDrawerTab$$ = $DvtPanelDrawerKeyboardHandler$$.$measureDimensions$(), $DvtPanelDrawerKeyboardHandler$$.$setTranslateX$($DvtPanelDrawerEventManager$$ - $DvtPanelDrawerTab$$.$w$ - $DvtBreadcrumbsPeer$$), $DvtAccordionDefaults$$ && $DvtAccordionDefaults$$.$setTranslateX$($DvtPanelDrawerEventManager$$ - $DvtBreadcrumbsPeer$$)) : $DvtPanelDrawerKeyboardHandler$$.$setTranslateX$($DvtBreadcrumbsPeer$$);
    this.$_keyboardFocusEffect$ || this.$_createKeyboardFocusEffect$($DvtAccordionDefaults$$ ? $DvtAccordionDefaults$$ : $DvtPanelDrawerKeyboardHandler$$);
    return $DvtBreadcrumbsRenderer$$
  };
  dvt.$AccordionSection$.prototype.$_createButtonText$ = function $dvt$$AccordionSection$$$$_createButtonText$$($DvtTrainEvent$$, $DvtAccordionDefaults$$, $DvtPanelDrawerKeyboardHandler$$, $DvtPanelDrawerEventManager$$) {
    var $DvtPanelDrawerTab$$ = $JSCompiler_alias_NULL$$;
    $DvtTrainEvent$$ && ($DvtPanelDrawerTab$$ = new dvt.$OutputText$(this.$_context$, $DvtTrainEvent$$), $DvtPanelDrawerTab$$.$setCSSStyle$(this.$_titleStyle$), dvt.$TextUtils$.$fitText$($DvtPanelDrawerTab$$, $DvtAccordionDefaults$$, $DvtPanelDrawerKeyboardHandler$$, $DvtPanelDrawerEventManager$$), $DvtTrainEvent$$ = $DvtPanelDrawerTab$$.$measureDimensions$(), this.$SetTitleDimensions$($DvtTrainEvent$$), $DvtPanelDrawerTab$$.$setTranslateY$((this.$_headerHeight$ - $DvtTrainEvent$$.$h$) / 2));
    return $DvtPanelDrawerTab$$
  };
  dvt.$AccordionSection$.prototype.$_createButtonBase$ = function $dvt$$AccordionSection$$$$_createButtonBase$$($DvtTrainEvent$$, $DvtAccordionDefaults$$, $DvtPanelDrawerKeyboardHandler$$) {
    var $DvtPanelDrawerEventManager$$ = $JSCompiler_alias_NULL$$;
    switch($DvtTrainEvent$$) {
      case dvt.$Button$.$STATE_OVER$:
        $DvtPanelDrawerEventManager$$ = this.$_styleMap$.sectionHeader.styleOvr;
        break;
      case dvt.$Button$.$STATE_DOWN$:
        $DvtPanelDrawerEventManager$$ = this.$_styleMap$.sectionHeader.styleDwn;
        break;
      case dvt.$Button$.$STATE_DISABLED$:
        $DvtPanelDrawerEventManager$$ = this.$_styleMap$.sectionHeader.styleDis;
        break;
      default:
        $DvtPanelDrawerEventManager$$ = this.$_styleMap$.sectionHeader.styleEna
    }
    $DvtTrainEvent$$ = new dvt.$Rect$(this.$_context$, 0, 0, $DvtAccordionDefaults$$, $DvtPanelDrawerKeyboardHandler$$);
    $DvtTrainEvent$$.$setStroke$(dvt.$AccordionSection$.$_getStroke$($DvtPanelDrawerEventManager$$));
    $DvtTrainEvent$$.$setFill$(dvt.$AccordionSection$.$_getFill$($DvtPanelDrawerEventManager$$));
    return $DvtTrainEvent$$
  };
  dvt.$AccordionSection$.$_getFill$ = function $dvt$$AccordionSection$$$_getFill$$($DvtTrainEvent$$) {
    var $DvtAccordionDefaults$$ = $DvtTrainEvent$$.$getStyle$(dvt.$CSSStyle$.$BACKGROUND_COLOR$);
    $DvtTrainEvent$$ = $DvtTrainEvent$$.$getBackgroundImage$();
    var $DvtPanelDrawerKeyboardHandler$$ = $JSCompiler_alias_NULL$$;
    if($DvtTrainEvent$$ && $DvtTrainEvent$$ instanceof dvt.$CSSGradient$) {
      var $DvtAccordionDefaults$$ = $DvtTrainEvent$$.$_arColors$, $DvtPanelDrawerKeyboardHandler$$ = $DvtTrainEvent$$.$_arAlphas$, $DvtPanelDrawerEventManager$$ = $DvtTrainEvent$$.$_arRatios$;
      $DvtTrainEvent$$ = $DvtTrainEvent$$.$getAngle$();
      $DvtPanelDrawerKeyboardHandler$$ = new dvt.$LinearGradientFill$($DvtTrainEvent$$, $DvtAccordionDefaults$$, $DvtPanelDrawerKeyboardHandler$$, $DvtPanelDrawerEventManager$$)
    }else {
      $DvtAccordionDefaults$$ && ($DvtPanelDrawerKeyboardHandler$$ = new dvt.$SolidFill$($DvtAccordionDefaults$$, 1))
    }
    return $DvtPanelDrawerKeyboardHandler$$
  };
  dvt.$AccordionSection$.$_getStroke$ = function $dvt$$AccordionSection$$$_getStroke$$($DvtTrainEvent$$) {
    $DvtTrainEvent$$ = $DvtTrainEvent$$.$getStyle$(dvt.$CSSStyle$.$BORDER_COLOR$);
    return new dvt.$SolidStroke$($DvtTrainEvent$$, 1, 1)
  };
  dvt.$AccordionSection$.prototype.$getKeyboardBoundingBox$ = function $dvt$$AccordionSection$$$$getKeyboardBoundingBox$$() {
    var $DvtTrainEvent$$ = this.$_isActive$ ? this.$_expandedBtn$ : this.$_collapsedBtn$, $DvtAccordionDefaults$$ = $DvtTrainEvent$$.$getDimensions$(), $DvtPanelDrawerKeyboardHandler$$ = $DvtTrainEvent$$.$localToStage$(new dvt.$Point$($DvtAccordionDefaults$$.x, $DvtAccordionDefaults$$.y)), $DvtTrainEvent$$ = $DvtTrainEvent$$.$localToStage$(new dvt.$Point$($DvtAccordionDefaults$$.x + $DvtAccordionDefaults$$.$w$, $DvtAccordionDefaults$$.y + $DvtAccordionDefaults$$.$h$));
    return new dvt.$Rectangle$($DvtPanelDrawerKeyboardHandler$$.x, $DvtPanelDrawerKeyboardHandler$$.y, $DvtTrainEvent$$.x - $DvtPanelDrawerKeyboardHandler$$.x, $DvtTrainEvent$$.y - $DvtPanelDrawerKeyboardHandler$$.y)
  };
  dvt.$AccordionSection$.prototype.$getTargetElem$ = function $dvt$$AccordionSection$$$$getTargetElem$$() {
    return(this.$_isActive$ ? this.$_expandedBtn$ : this.$_collapsedBtn$).$getElem$()
  };
  dvt.$AccordionSection$.prototype.$showKeyboardFocusEffect$ = function $dvt$$AccordionSection$$$$showKeyboardFocusEffect$$() {
    this.$_isShowingKeyboardFocusEffect$ = $JSCompiler_alias_TRUE$$;
    this.$_keyboardFocusEffect$.show();
    this.$_context$.$setActiveElement$(this.$_isActive$ ? this.$_expandedBtn$ : this.$_collapsedBtn$)
  };
  dvt.$AccordionSection$.prototype.$hideKeyboardFocusEffect$ = function $dvt$$AccordionSection$$$$hideKeyboardFocusEffect$$() {
    this.$_isShowingKeyboardFocusEffect$ = $JSCompiler_alias_FALSE$$;
    this.$_keyboardFocusEffect$.$hide$()
  };
  dvt.$AccordionSection$.prototype.$isShowingKeyboardFocusEffect$ = $JSCompiler_get$$("$_isShowingKeyboardFocusEffect$");
  dvt.$AccordionSection$.prototype.$getNextNavigable$ = function $dvt$$AccordionSection$$$$getNextNavigable$$($DvtTrainEvent$$) {
    return this.$_eventManager$.$KeyboardHandler$.$getNextNavigable$(this, $DvtTrainEvent$$)
  };
  dvt.$AccordionSection$.prototype.$_createKeyboardFocusEffect$ = function $dvt$$AccordionSection$$$$_createKeyboardFocusEffect$$($DvtTrainEvent$$) {
    var $DvtAccordionDefaults$$ = $DvtTrainEvent$$.$getDimensions$(), $DvtPanelDrawerKeyboardHandler$$ = $DvtTrainEvent$$.$getTranslateX$() || $DvtAccordionDefaults$$.x;
    $DvtTrainEvent$$ = $DvtTrainEvent$$.$getTranslateY$() || $DvtAccordionDefaults$$.y;
    this.$_keyboardFocusEffect$ = new dvt.$KeyboardFocusEffect$(this.$getCtx$(), this, new dvt.$Rectangle$($DvtPanelDrawerKeyboardHandler$$, $DvtTrainEvent$$, $DvtAccordionDefaults$$.$w$, $DvtAccordionDefaults$$.$h$), $JSCompiler_alias_NULL$$, $JSCompiler_alias_NULL$$, $JSCompiler_alias_TRUE$$)
  };
  dvt.$Obj$.$createSubclass$($DvtAccordionDefaults$$, dvt.$BaseComponentDefaults$);
  $DvtAccordionDefaults$$.$VERSION_1$ = {skin:dvt.$CSSStyle$.$SKIN_ALTA$, sectionHeader:{styleEna:new dvt.$CSSStyle$("font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;font-size:14px;font-weight:bold;color:#252525;border-color:#D9DFE3;background-color:#F5F5F5;"), styleOvr:new dvt.$CSSStyle$("font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;font-size:14px;font-weight:bold;color:#252525;border-color:#D9DFE3;background-color:#F5F5F5;"), styleDwn:new dvt.$CSSStyle$("font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;font-size:14px;font-weight:bold;color:#252525;border-color:#D9DFE3;background-color:#F5F5F5;"), 
  styleDis:new dvt.$CSSStyle$("font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;font-size:14px;font-weight:bold;color:#252525;border-color:#D9DFE3;background-color:#F5F5F5;"), headerHeight:33, imageWidth:24, imageHeight:24, textPadding:5}, paddingX:0, paddingY:0};
  $DvtAccordionDefaults$$.$SKIN_ALTA$ = {};
  dvt.$Train$ = function $dvt$$Train$$($DvtTrainEvent$$, $DvtAccordionDefaults$$, $DvtPanelDrawerKeyboardHandler$$, $DvtPanelDrawerEventManager$$, $DvtPanelDrawerTab$$, $DvtBreadcrumbsPeer$$) {
    this.Init($DvtTrainEvent$$, $DvtAccordionDefaults$$, $DvtPanelDrawerKeyboardHandler$$, $DvtPanelDrawerEventManager$$, $DvtPanelDrawerTab$$, $DvtBreadcrumbsPeer$$)
  };
  dvt.$Obj$.$createSubclass$(dvt.$Train$, dvt.$Container$);
  dvt.$Train$.$TRAIN_EVENT$ = "dvtTrain";
  dvt.$Train$.$FILL_COLOR$ = "#c0cbd5";
  dvt.$Train$.$BORDER_COLOR$ = "#5d7891";
  dvt.$Train$.$SELECTED_FILL_COLOR$ = "#61bde3";
  dvt.$Train$.$SELECTED_BORDER_COLOR$ = "#0066ff";
  dvt.$Train$.$BUTTON_SIZE$ = 8;
  dvt.$Train$.$VPADDING$ = 1;
  dvt.$Train$.$HPADDING$ = 3;
  dvt.$Train$.$STATE_ENABLED$ = 0;
  dvt.$Train$.$STATE_HOVER$ = 1;
  dvt.$Train$.$STATE_SELECTED$ = 2;
  dvt.$Train$.prototype.Init = function $dvt$$Train$$$Init$($DvtTrainEvent$$, $DvtAccordionDefaults$$, $DvtPanelDrawerKeyboardHandler$$, $DvtPanelDrawerEventManager$$, $DvtPanelDrawerTab$$, $DvtBreadcrumbsPeer$$) {
    dvt.$Train$.$superclass$.Init.call(this, $DvtTrainEvent$$, $JSCompiler_alias_NULL$$, $DvtPanelDrawerTab$$);
    this.$_tooltipManager$ = $DvtTrainEvent$$.$getTooltipManager$();
    this.$_labels$ = $DvtPanelDrawerKeyboardHandler$$;
    this.$_buttonStyles$ = $DvtPanelDrawerEventManager$$;
    this.$_count$ = $DvtPanelDrawerKeyboardHandler$$.length;
    this.$_buttons$ = Array(this.$_count$);
    this.$_selectedIndex$ = 0;
    this.$_isAltaSkin$ = $DvtBreadcrumbsPeer$$;
    this.$RenderSelf$($DvtAccordionDefaults$$)
  };
  dvt.$Train$.prototype.$setSelectedIndex$ = function $dvt$$Train$$$$setSelectedIndex$$($DvtTrainEvent$$) {
    0 <= $DvtTrainEvent$$ && $DvtTrainEvent$$ < this.$_count$ && this.$SelectedIndexChanged$(this.$_selectedIndex$, $DvtTrainEvent$$)
  };
  dvt.$Train$.prototype.$HandleClick$ = function $dvt$$Train$$$$HandleClick$$($DvtTrainEvent$$) {
    dvt.$EventManager$.$consumeEvent$($DvtTrainEvent$$);
    for(var $DvtAccordionDefaults$$ = 0;$DvtAccordionDefaults$$ < this.$_buttons$.length;$DvtAccordionDefaults$$++) {
      var $DvtPanelDrawerKeyboardHandler$$ = $DvtTrainEvent$$.target;
      if(this.$_buttons$[$DvtAccordionDefaults$$] === $DvtPanelDrawerKeyboardHandler$$ || this.$_buttons$[$DvtAccordionDefaults$$] === $DvtPanelDrawerKeyboardHandler$$.getParent()) {
        $DvtTrainEvent$$ = this.$_selectedIndex$;
        this.$SelectedIndexChanged$($DvtTrainEvent$$, $DvtAccordionDefaults$$);
        $DvtTrainEvent$$ != $DvtAccordionDefaults$$ && this.$fireTrainEvent$();
        break
      }
    }
  };
  dvt.$Train$.prototype.$SelectedIndexChanged$ = function $dvt$$Train$$$$SelectedIndexChanged$$($DvtTrainEvent$$, $DvtAccordionDefaults$$) {
    this.$_selectedIndex$ = $DvtAccordionDefaults$$;
    var $DvtPanelDrawerKeyboardHandler$$ = this.$_buttons$[$DvtTrainEvent$$];
    $DvtPanelDrawerKeyboardHandler$$ && ($DvtPanelDrawerKeyboardHandler$$.$overState$ && $DvtPanelDrawerKeyboardHandler$$.$overState$.setCursor("pointer"), $DvtPanelDrawerKeyboardHandler$$.$downState$ && $DvtPanelDrawerKeyboardHandler$$.$downState$.setCursor("pointer"), $DvtPanelDrawerKeyboardHandler$$.$setToggled$($JSCompiler_alias_FALSE$$));
    if($DvtPanelDrawerKeyboardHandler$$ = this.$_buttons$[$DvtAccordionDefaults$$]) {
      $DvtPanelDrawerKeyboardHandler$$.$overState$ && $DvtPanelDrawerKeyboardHandler$$.$overState$.setCursor("default"), $DvtPanelDrawerKeyboardHandler$$.$downState$ && $DvtPanelDrawerKeyboardHandler$$.$downState$.setCursor("default"), $DvtPanelDrawerKeyboardHandler$$.$setToggled$($JSCompiler_alias_TRUE$$)
    }
  };
  dvt.$Train$.prototype.$addTrainEventListener$ = function $dvt$$Train$$$$addTrainEventListener$$($DvtTrainEvent$$, $DvtAccordionDefaults$$) {
    this.$addEvtListener$(dvt.$Train$.$TRAIN_EVENT$, $DvtTrainEvent$$, $JSCompiler_alias_FALSE$$, $DvtAccordionDefaults$$)
  };
  dvt.$Train$.prototype.$fireTrainEvent$ = function $dvt$$Train$$$$fireTrainEvent$$() {
    var $DvtAccordionDefaults$$ = new $DvtTrainEvent$$(this.$_selectedIndex$);
    this.$FireListener$($DvtAccordionDefaults$$, $JSCompiler_alias_FALSE$$)
  };
  dvt.$Train$.prototype.$RenderSelf$ = function $dvt$$Train$$$$RenderSelf$$($DvtTrainEvent$$) {
    for(var $DvtAccordionDefaults$$ = dvt.$Agent$.$isRightToLeft$(this.$getCtx$()), $DvtPanelDrawerKeyboardHandler$$ = this.$_getButtonSize$(), $DvtPanelDrawerEventManager$$ = 0;$DvtPanelDrawerEventManager$$ < this.$_count$;$DvtPanelDrawerEventManager$$++) {
      var $DvtPanelDrawerTab$$;
      $DvtPanelDrawerTab$$ = this.$CreateButton$($DvtPanelDrawerKeyboardHandler$$, $DvtPanelDrawerEventManager$$ == this.$_selectedIndex$, this.$_labels$[$DvtPanelDrawerEventManager$$]);
      this.$addButtonListeners$($DvtPanelDrawerTab$$);
      var $DvtBreadcrumbsPeer$$ = $DvtPanelDrawerEventManager$$;
      $DvtAccordionDefaults$$ && ($DvtBreadcrumbsPeer$$ = this.$_count$ - 1 - $DvtPanelDrawerEventManager$$);
      $DvtTrainEvent$$ && $DvtTrainEvent$$.$associate$($DvtPanelDrawerTab$$, $DvtPanelDrawerTab$$);
      $DvtPanelDrawerTab$$.$setTranslate$($DvtBreadcrumbsPeer$$ * ($DvtPanelDrawerKeyboardHandler$$ + dvt.$Train$.$HPADDING$), this.$_isAltaSkin$ ? 0 : dvt.$Train$.$VPADDING$);
      this.$addChild$($DvtPanelDrawerTab$$);
      this.$_buttons$[$DvtPanelDrawerEventManager$$] = $DvtPanelDrawerTab$$
    }
  };
  dvt.$Train$.prototype.$DrawButtonState$ = function $dvt$$Train$$$$DrawButtonState$$($DvtTrainEvent$$, $DvtAccordionDefaults$$) {
    var $DvtPanelDrawerKeyboardHandler$$, $DvtPanelDrawerEventManager$$, $DvtPanelDrawerTab$$, $DvtBreadcrumbsPeer$$;
    $DvtAccordionDefaults$$ ? ($DvtBreadcrumbsPeer$$ = 0, $DvtPanelDrawerTab$$ = dvt.$Train$.$SELECTED_FILL_COLOR$, $DvtPanelDrawerEventManager$$ = dvt.$Train$.$SELECTED_BORDER_COLOR$, this.$_buttonStyles$ && ($DvtPanelDrawerKeyboardHandler$$ = this.$_buttonStyles$[dvt.$Train$.$STATE_SELECTED$])) : ($DvtBreadcrumbsPeer$$ = 1, $DvtPanelDrawerTab$$ = dvt.$Train$.$FILL_COLOR$, $DvtPanelDrawerEventManager$$ = dvt.$Train$.$BORDER_COLOR$, this.$_buttonStyles$ && ($DvtPanelDrawerKeyboardHandler$$ = this.$_buttonStyles$[dvt.$Train$.$STATE_ENABLED$]));
    $DvtPanelDrawerKeyboardHandler$$ && ($DvtPanelDrawerKeyboardHandler$$.$getStyle$(dvt.$CSSStyle$.$BORDER_COLOR$) && ($DvtPanelDrawerEventManager$$ = $DvtPanelDrawerKeyboardHandler$$.$getStyle$(dvt.$CSSStyle$.$BORDER_COLOR$)), $DvtPanelDrawerKeyboardHandler$$.$getStyle$(dvt.$CSSStyle$.$BACKGROUND_COLOR$) && ($DvtPanelDrawerTab$$ = $DvtPanelDrawerKeyboardHandler$$.$getStyle$(dvt.$CSSStyle$.$BACKGROUND_COLOR$)));
    $DvtPanelDrawerKeyboardHandler$$ = new dvt.$Rect$(this.$getCtx$(), $DvtBreadcrumbsPeer$$, $DvtBreadcrumbsPeer$$, $DvtTrainEvent$$ - 2 * $DvtBreadcrumbsPeer$$, $DvtTrainEvent$$ - 2 * $DvtBreadcrumbsPeer$$);
    $DvtPanelDrawerKeyboardHandler$$.$setSolidFill$($DvtPanelDrawerTab$$);
    $DvtPanelDrawerKeyboardHandler$$.$setSolidStroke$($DvtPanelDrawerEventManager$$);
    return $DvtPanelDrawerKeyboardHandler$$
  };
  dvt.$Train$.prototype.$addButtonListeners$ = function $dvt$$Train$$$$addButtonListeners$$($DvtTrainEvent$$) {
    $DvtTrainEvent$$.$addEvtListener$(dvt.$TouchEvent$.$TOUCHSTART$, this.$HandleClick$, $JSCompiler_alias_FALSE$$, this);
    dvt.$Agent$.$isTouchDevice$() || $DvtTrainEvent$$.$addEvtListener$(dvt.$MouseEvent$.$CLICK$, this.$HandleClick$, $JSCompiler_alias_FALSE$$, this)
  };
  dvt.$Train$.prototype.$_getButtonSize$ = function $dvt$$Train$$$$_getButtonSize$$() {
    if(!this.$_buttonSize$) {
      if(this.$_buttonStyles$) {
        var $DvtTrainEvent$$ = this.$_buttonStyles$[0];
        $DvtTrainEvent$$ && (this.$_buttonSize$ = dvt.$CSSStyle$.$toNumber$($DvtTrainEvent$$.getWidth()))
      }
      this.$_buttonSize$ || (this.$_buttonSize$ = dvt.$Train$.$BUTTON_SIZE$)
    }
    return this.$_buttonSize$
  };
  dvt.$Train$.prototype.$CreateButtonState$ = function $dvt$$Train$$$$CreateButtonState$$($DvtTrainEvent$$, $DvtAccordionDefaults$$) {
    return new dvt.$Image$(this.$getCtx$(), $DvtTrainEvent$$, 0, 0, $DvtAccordionDefaults$$, $DvtAccordionDefaults$$)
  };
  dvt.$Train$.prototype.$MakeButtonState$ = function $dvt$$Train$$$$MakeButtonState$$($DvtTrainEvent$$, $DvtAccordionDefaults$$, $DvtPanelDrawerKeyboardHandler$$) {
    var $DvtPanelDrawerEventManager$$ = this.$_buttonStyles$ ? this.$_buttonStyles$[$DvtAccordionDefaults$$] : $JSCompiler_alias_NULL$$;
    $DvtTrainEvent$$ = ($DvtPanelDrawerEventManager$$ = $DvtPanelDrawerEventManager$$ ? $DvtPanelDrawerEventManager$$.$getIconUrl$() : $JSCompiler_alias_NULL$$) ? this.$CreateButtonState$($DvtPanelDrawerEventManager$$, $DvtTrainEvent$$) : this.$DrawButtonState$($DvtTrainEvent$$, $DvtAccordionDefaults$$ == dvt.$Train$.$STATE_SELECTED$);
    $DvtTrainEvent$$.setCursor($DvtAccordionDefaults$$ == dvt.$Train$.$STATE_ENABLED$ || $DvtPanelDrawerKeyboardHandler$$ ? "default" : "pointer");
    return $DvtTrainEvent$$
  };
  dvt.$Train$.prototype.$CreateButton$ = function $dvt$$Train$$$$CreateButton$$($DvtTrainEvent$$, $DvtAccordionDefaults$$, $DvtPanelDrawerKeyboardHandler$$) {
    $DvtTrainEvent$$ = new dvt.$Button$(this.$getCtx$(), this.$MakeButtonState$($DvtTrainEvent$$, dvt.$Train$.$STATE_ENABLED$, $DvtAccordionDefaults$$), this.$MakeButtonState$($DvtTrainEvent$$, dvt.$Train$.$STATE_HOVER$, $DvtAccordionDefaults$$), this.$MakeButtonState$($DvtTrainEvent$$, dvt.$Train$.$STATE_SELECTED$, $DvtAccordionDefaults$$), $JSCompiler_alias_NULL$$);
    $DvtTrainEvent$$.$setTooltip$($DvtPanelDrawerKeyboardHandler$$);
    $DvtTrainEvent$$.$setToggleEnabled$();
    $DvtAccordionDefaults$$ && $DvtTrainEvent$$.$setToggled$($DvtAccordionDefaults$$);
    return $DvtTrainEvent$$
  };
  dvt.$Obj$.$createSubclass$($DvtTrainEvent$$, dvt.$BaseComponentEvent$);
  $DvtTrainEvent$$.$TYPE$ = "dvtTrain";
  $DvtTrainEvent$$.prototype.$getIndex$ = $JSCompiler_get$$("$_index$");
  dvt.$OverviewWindow$ = function $dvt$$OverviewWindow$$($DvtTrainEvent$$, $DvtAccordionDefaults$$, $DvtPanelDrawerKeyboardHandler$$, $DvtPanelDrawerEventManager$$, $DvtPanelDrawerTab$$, $DvtBreadcrumbsPeer$$) {
    this.Init($DvtTrainEvent$$, $DvtAccordionDefaults$$, $DvtPanelDrawerKeyboardHandler$$, $DvtPanelDrawerEventManager$$, $DvtPanelDrawerTab$$, $DvtBreadcrumbsPeer$$)
  };
  dvt.$Obj$.$createSubclass$(dvt.$OverviewWindow$, dvt.$Container$);
  dvt.$OverviewWindow$.$VIEWPORT_BG_COLOR$ = "viewport-bg-color";
  dvt.$OverviewWindow$.$VIEWPORT_BORDER_COLOR$ = "viewport-border-color";
  dvt.$OverviewWindow$.$OVERVIEW_DISCLOSED_KEY$ = "isOverviewDisclosed";
  dvt.$OverviewWindow$.prototype.Init = function $dvt$$OverviewWindow$$$Init$($DvtTrainEvent$$, $DvtAccordionDefaults$$, $DvtPanelDrawerKeyboardHandler$$, $DvtPanelDrawerEventManager$$, $DvtPanelDrawerTab$$, $DvtBreadcrumbsPeer$$) {
    dvt.$OverviewWindow$.$superclass$.Init.call(this, $DvtTrainEvent$$, $JSCompiler_alias_NULL$$, $DvtAccordionDefaults$$);
    this.$_x$ = $DvtPanelDrawerKeyboardHandler$$;
    this.$_y$ = $DvtPanelDrawerEventManager$$;
    this.$_ww$ = $DvtPanelDrawerTab$$;
    this.$_hh$ = $DvtBreadcrumbsPeer$$;
    this.$_skinStyle$ = $JSCompiler_alias_NULL$$
  };
  dvt.$OverviewWindow$.prototype.$render$ = function $dvt$$OverviewWindow$$$$render$$() {
    this.$_md$ = $JSCompiler_alias_FALSE$$;
    this.$_panEnable$ = $JSCompiler_alias_TRUE$$;
    this.$_overview$ && (dvt.$Agent$.$isTouchDevice$() ? (this.$_overview$.$removeEvtListener$(dvt.$TouchEvent$.$TOUCHSTART$, this.$_mouseDown$, $JSCompiler_alias_FALSE$$, this), this.$_overview$.$removeEvtListener$(dvt.$TouchEvent$.$TOUCHMOVE$, this.$_mouseMove$, $JSCompiler_alias_FALSE$$, this), this.$_overview$.$removeEvtListener$(dvt.$TouchEvent$.$TOUCHEND$, this.$_mouseUp$, $JSCompiler_alias_FALSE$$, this)) : (this.$_overview$.$removeEvtListener$(dvt.$MouseEvent$.$MOUSEDOWN$, this.$_mouseDown$, 
    $JSCompiler_alias_FALSE$$, this), this.$_overview$.$removeEvtListener$(dvt.$MouseEvent$.$MOUSEMOVE$, this.$_mouseMove$, $JSCompiler_alias_FALSE$$, this), this.$_overview$.$removeEvtListener$(dvt.$MouseEvent$.$MOUSEUP$, this.$_mouseUp$, $JSCompiler_alias_FALSE$$, this), this.$_overview$.$removeEvtListener$(dvt.$MouseEvent$.$MOUSEOUT$, this.$_mouseOut$, $JSCompiler_alias_FALSE$$, this)), this.$_overview$.$setClipPath$($JSCompiler_alias_NULL$$));
    this.$removeChildren$();
    this.$_overview$ = this.$_viewport$ = $JSCompiler_alias_NULL$$;
    var $DvtTrainEvent$$ = new dvt.$ClipPath$(this.getId());
    $DvtTrainEvent$$.$addRect$(0, 0, this.$_ww$, this.$_hh$);
    this.$_overview$ = new dvt.$Rect$(this.$_context$, 0, 0, this.$_ww$, this.$_hh$);
    this.$_overview$.$setClipPath$($DvtTrainEvent$$);
    this.$_overview$.$setInvisibleFill$();
    this.$addChild$(this.$_overview$);
    this.$_viewport$ = new dvt.$Rect$(this.$_context$, 0, 0, 0, 0, this.getId() + ":viewport");
    $DvtTrainEvent$$ = this.$getSkinStyleAttr$(dvt.$OverviewWindow$.$VIEWPORT_BG_COLOR$);
    this.$_viewport$.$setSolidStroke$(this.$getSkinStyleAttr$(dvt.$OverviewWindow$.$VIEWPORT_BORDER_COLOR$), $JSCompiler_alias_NULL$$, 2);
    this.$_viewport$.$setSolidFill$($DvtTrainEvent$$);
    this.$_viewport$.$setMouseEnabled$($JSCompiler_alias_FALSE$$);
    this.$_overview$.$addChild$(this.$_viewport$);
    dvt.$Agent$.$isTouchDevice$() ? (this.$_overview$.$addEvtListener$(dvt.$TouchEvent$.$TOUCHSTART$, this.$_mouseDown$, $JSCompiler_alias_FALSE$$, this), this.$_overview$.$addEvtListener$(dvt.$TouchEvent$.$TOUCHMOVE$, this.$_mouseMove$, $JSCompiler_alias_FALSE$$, this), this.$_overview$.$addEvtListener$(dvt.$TouchEvent$.$TOUCHEND$, this.$_mouseUp$, $JSCompiler_alias_FALSE$$, this)) : (this.$_overview$.$addEvtListener$(dvt.$MouseEvent$.$MOUSEDOWN$, this.$_mouseDown$, $JSCompiler_alias_FALSE$$, this), 
    this.$_overview$.$addEvtListener$(dvt.$MouseEvent$.$MOUSEMOVE$, this.$_mouseMove$, $JSCompiler_alias_FALSE$$, this), this.$_overview$.$addEvtListener$(dvt.$MouseEvent$.$MOUSEUP$, this.$_mouseUp$, $JSCompiler_alias_FALSE$$, this), this.$_overview$.$addEvtListener$(dvt.$MouseEvent$.$MOUSEOUT$, this.$_mouseOut$, $JSCompiler_alias_FALSE$$, this))
  };
  dvt.$OverviewWindow$.prototype.$loadXmlNode$ = function $dvt$$OverviewWindow$$$$loadXmlNode$$($DvtTrainEvent$$) {
    this.$_isDisclosed$ = "true" == $DvtTrainEvent$$.$getAttr$("disclosed")
  };
  dvt.$OverviewWindow$.prototype.$isDisclosed$ = $JSCompiler_get$$("$_isDisclosed$");
  dvt.$OverviewWindow$.prototype.$setDisclosed$ = $JSCompiler_set$$("$_isDisclosed$");
  dvt.$OverviewWindow$.prototype.$getContentAreaWidth$ = function $dvt$$OverviewWindow$$$$getContentAreaWidth$$() {
    return this.$getContentDimensions$().$w$
  };
  dvt.$OverviewWindow$.prototype.$getContentAreaHeight$ = function $dvt$$OverviewWindow$$$$getContentAreaHeight$$() {
    return this.$getContentDimensions$().$h$
  };
  dvt.$OverviewWindow$.prototype.$getContentDimensions$ = function $dvt$$OverviewWindow$$$$getContentDimensions$$() {
    return new dvt.$Rectangle$(this.$_x$, this.$_y$, this.$_ww$, this.$_hh$)
  };
  dvt.$OverviewWindow$.prototype.$setViewportDimensions$ = function $dvt$$OverviewWindow$$$$setViewportDimensions$$($DvtTrainEvent$$, $DvtAccordionDefaults$$) {
    var $DvtPanelDrawerKeyboardHandler$$ = this.$TransformFromContentToViewportCoords$($DvtTrainEvent$$.x, $DvtTrainEvent$$.y, $DvtAccordionDefaults$$), $DvtPanelDrawerEventManager$$ = this.$TransformFromContentToViewportCoords$($DvtTrainEvent$$.x + $DvtTrainEvent$$.$w$, $DvtTrainEvent$$.y + $DvtTrainEvent$$.$h$, $DvtAccordionDefaults$$), $DvtPanelDrawerTab$$ = $DvtPanelDrawerKeyboardHandler$$.x, $DvtBreadcrumbsPeer$$ = $DvtPanelDrawerKeyboardHandler$$.y, $DvtBreadcrumbsEventManager$$ = $DvtPanelDrawerEventManager$$.x - 
    $DvtPanelDrawerKeyboardHandler$$.x, $DvtPanelDrawerKeyboardHandler$$ = $DvtPanelDrawerEventManager$$.y - $DvtPanelDrawerKeyboardHandler$$.y;
    $DvtAccordionDefaults$$ ? ($DvtAccordionDefaults$$.$addProp$(dvt.$Animator$.$TYPE_NUMBER$, this.$_viewport$, this.$_viewport$.$getX$, this.$_viewport$.$setX$, $DvtPanelDrawerTab$$), $DvtAccordionDefaults$$.$addProp$(dvt.$Animator$.$TYPE_NUMBER$, this.$_viewport$, this.$_viewport$.$getY$, this.$_viewport$.$setY$, $DvtBreadcrumbsPeer$$), $DvtAccordionDefaults$$.$addProp$(dvt.$Animator$.$TYPE_NUMBER$, this.$_viewport$, this.$_viewport$.getWidth, this.$_viewport$.$setWidth$, $DvtBreadcrumbsEventManager$$), 
    $DvtAccordionDefaults$$.$addProp$(dvt.$Animator$.$TYPE_NUMBER$, this.$_viewport$, this.$_viewport$.getHeight, this.$_viewport$.$setHeight$, $DvtPanelDrawerKeyboardHandler$$)) : (this.$_viewport$.$setX$($DvtPanelDrawerTab$$), this.$_viewport$.$setY$($DvtBreadcrumbsPeer$$), this.$_viewport$.$setWidth$($DvtBreadcrumbsEventManager$$), this.$_viewport$.$setHeight$($DvtPanelDrawerKeyboardHandler$$))
  };
  dvt.$OverviewWindow$.prototype.$getViewportDimensions$ = function $dvt$$OverviewWindow$$$$getViewportDimensions$$() {
    var $DvtTrainEvent$$ = this.$TransformFromViewportToContentCoords$(this.$_viewport$.$getX$(), this.$_viewport$.$getY$()), $DvtAccordionDefaults$$ = this.$TransformFromViewportToContentCoords$(this.$_viewport$.$getX$() + this.$_viewport$.getWidth(), this.$_viewport$.$getY$() + this.$_viewport$.getHeight());
    return new dvt.$Rectangle$($DvtTrainEvent$$.x, $DvtTrainEvent$$.y, $DvtAccordionDefaults$$.x - $DvtTrainEvent$$.x, $DvtAccordionDefaults$$.y - $DvtTrainEvent$$.y)
  };
  dvt.$OverviewWindow$.prototype.$setContent$ = function $dvt$$OverviewWindow$$$$setContent$$($DvtTrainEvent$$) {
    var $DvtAccordionDefaults$$ = this.$getViewportDimensions$();
    this.$_content$ && this.$_overview$.removeChild(this.$_content$);
    this.$_content$ = $DvtTrainEvent$$;
    this.$_overview$.$addChildAt$($DvtTrainEvent$$, 0);
    this.$setViewportDimensions$($DvtAccordionDefaults$$)
  };
  dvt.$OverviewWindow$.prototype.$_mouseDown$ = function $dvt$$OverviewWindow$$$$_mouseDown$$($DvtTrainEvent$$) {
    if(!this.$_md$ && this.$_panEnable$) {
      this.$_md$ = $JSCompiler_alias_TRUE$$;
      var $DvtAccordionDefaults$$ = this.$_getRelativePosition$($DvtTrainEvent$$);
      $DvtTrainEvent$$ = new dvt.$ViewportChangeEvent$(this.$getViewportDimensions$(), this.$_getCenteredViewportDimensions$($DvtAccordionDefaults$$), $DvtTrainEvent$$);
      this.$FireListener$($DvtTrainEvent$$)
    }
  };
  dvt.$OverviewWindow$.prototype.$_mouseMove$ = function $dvt$$OverviewWindow$$$$_mouseMove$$($DvtTrainEvent$$) {
    if(this.$_md$ && this.$_panEnable$) {
      var $DvtAccordionDefaults$$ = this.$_getRelativePosition$($DvtTrainEvent$$);
      $DvtTrainEvent$$ = new dvt.$ViewportChangeEvent$(this.$getViewportDimensions$(), this.$_getCenteredViewportDimensions$($DvtAccordionDefaults$$), $DvtTrainEvent$$);
      this.$FireListener$($DvtTrainEvent$$)
    }
  };
  dvt.$OverviewWindow$.prototype.$_mouseUp$ = function $dvt$$OverviewWindow$$$$_mouseUp$$() {
    this.$_md$ && this.$_panEnable$ && (this.$_md$ = $JSCompiler_alias_FALSE$$)
  };
  dvt.$OverviewWindow$.prototype.$_mouseOut$ = function $dvt$$OverviewWindow$$$$_mouseOut$$() {
    this.$_mouseUp$()
  };
  dvt.$OverviewWindow$.prototype.$_getRelativePosition$ = function $dvt$$OverviewWindow$$$$_getRelativePosition$$($DvtTrainEvent$$) {
    var $DvtAccordionDefaults$$, $DvtPanelDrawerKeyboardHandler$$;
    dvt.$Agent$.$isTouchDevice$() ? ($DvtTrainEvent$$ = $DvtTrainEvent$$.touches, 0 < $DvtTrainEvent$$.length && ($DvtAccordionDefaults$$ = $DvtTrainEvent$$[0].pageX, $DvtPanelDrawerKeyboardHandler$$ = $DvtTrainEvent$$[0].pageY)) : ($DvtAccordionDefaults$$ = $DvtTrainEvent$$.pageX, $DvtPanelDrawerKeyboardHandler$$ = $DvtTrainEvent$$.pageY);
    return this.$_context$.$pageToStageCoords$($DvtAccordionDefaults$$, $DvtPanelDrawerKeyboardHandler$$)
  };
  dvt.$OverviewWindow$.prototype.$TransformFromViewportToContentCoords$ = function $dvt$$OverviewWindow$$$$TransformFromViewportToContentCoords$$($DvtTrainEvent$$, $DvtAccordionDefaults$$) {
    var $DvtPanelDrawerKeyboardHandler$$ = 0, $DvtPanelDrawerEventManager$$ = 0, $DvtPanelDrawerTab$$ = 1, $DvtBreadcrumbsPeer$$ = 1;
    this.$_content$ && ($DvtPanelDrawerKeyboardHandler$$ = this.$_content$.$getTranslateX$(), $DvtPanelDrawerEventManager$$ = this.$_content$.$getTranslateY$(), $DvtPanelDrawerTab$$ = this.$_content$.$getScaleX$(), $DvtBreadcrumbsPeer$$ = this.$_content$.$getScaleY$());
    return new dvt.$Point$(($DvtTrainEvent$$ - $DvtPanelDrawerKeyboardHandler$$) / $DvtPanelDrawerTab$$, ($DvtAccordionDefaults$$ - $DvtPanelDrawerEventManager$$) / $DvtBreadcrumbsPeer$$)
  };
  dvt.$OverviewWindow$.prototype.$TransformFromContentToViewportCoords$ = function $dvt$$OverviewWindow$$$$TransformFromContentToViewportCoords$$($DvtTrainEvent$$, $DvtAccordionDefaults$$, $DvtPanelDrawerKeyboardHandler$$) {
    var $DvtPanelDrawerEventManager$$ = 0, $DvtPanelDrawerTab$$ = 0, $DvtBreadcrumbsPeer$$ = 1, $DvtBreadcrumbsEventManager$$ = 1;
    this.$_content$ && ($DvtPanelDrawerEventManager$$ = $DvtPanelDrawerKeyboardHandler$$ ? $DvtPanelDrawerKeyboardHandler$$.$getDestVal$(this.$_content$, this.$_content$.$getTranslateX$, $JSCompiler_alias_TRUE$$) : this.$_content$.$getTranslateX$(), $DvtPanelDrawerTab$$ = $DvtPanelDrawerKeyboardHandler$$ ? $DvtPanelDrawerKeyboardHandler$$.$getDestVal$(this.$_content$, this.$_content$.$getTranslateY$, $JSCompiler_alias_TRUE$$) : this.$_content$.$getTranslateY$(), $DvtBreadcrumbsPeer$$ = $DvtPanelDrawerKeyboardHandler$$ ? 
    $DvtPanelDrawerKeyboardHandler$$.$getDestVal$(this.$_content$, this.$_content$.$getScaleX$, $JSCompiler_alias_TRUE$$) : this.$_content$.$getScaleX$(), $DvtBreadcrumbsEventManager$$ = $DvtPanelDrawerKeyboardHandler$$ ? $DvtPanelDrawerKeyboardHandler$$.$getDestVal$(this.$_content$, this.$_content$.$getScaleY$, $JSCompiler_alias_TRUE$$) : this.$_content$.$getScaleY$());
    return new dvt.$Point$($DvtTrainEvent$$ * $DvtBreadcrumbsPeer$$ + $DvtPanelDrawerEventManager$$, $DvtAccordionDefaults$$ * $DvtBreadcrumbsEventManager$$ + $DvtPanelDrawerTab$$)
  };
  dvt.$OverviewWindow$.prototype.$getSkinStyle$ = $JSCompiler_get$$("$_skinStyle$");
  dvt.$OverviewWindow$.prototype.$setSkinStyle$ = $JSCompiler_set$$("$_skinStyle$");
  dvt.$OverviewWindow$.prototype.$getSkinStyleAttr$ = function $dvt$$OverviewWindow$$$$getSkinStyleAttr$$($DvtTrainEvent$$) {
    return this.$_skinStyle$ && "undefined" != this.$_skinStyle$[$DvtTrainEvent$$] ? this.$_skinStyle$[$DvtTrainEvent$$] : $JSCompiler_alias_NULL$$
  };
  dvt.$OverviewWindow$.prototype.$_getCenteredViewportDimensions$ = function $dvt$$OverviewWindow$$$$_getCenteredViewportDimensions$$($DvtTrainEvent$$) {
    var $DvtAccordionDefaults$$ = this.$_overview$.$localToStage$(new dvt.$Point$(0, 0)), $DvtPanelDrawerKeyboardHandler$$ = this.$_viewport$.$getDimensions$(), $DvtPanelDrawerEventManager$$ = $DvtTrainEvent$$.x - $DvtAccordionDefaults$$.x - $DvtPanelDrawerKeyboardHandler$$.$w$ / 2, $DvtAccordionDefaults$$ = $DvtTrainEvent$$.y - $DvtAccordionDefaults$$.y - $DvtPanelDrawerKeyboardHandler$$.$h$ / 2;
    $DvtTrainEvent$$ = this.$TransformFromViewportToContentCoords$($DvtPanelDrawerEventManager$$, $DvtAccordionDefaults$$);
    $DvtPanelDrawerKeyboardHandler$$ = this.$TransformFromViewportToContentCoords$($DvtPanelDrawerEventManager$$ + $DvtPanelDrawerKeyboardHandler$$.$w$, $DvtAccordionDefaults$$ + $DvtPanelDrawerKeyboardHandler$$.$h$);
    return new dvt.$Rectangle$($DvtTrainEvent$$.x, $DvtTrainEvent$$.y, $DvtPanelDrawerKeyboardHandler$$.x - $DvtTrainEvent$$.x, $DvtPanelDrawerKeyboardHandler$$.y - $DvtTrainEvent$$.y)
  };
  dvt.$OverviewWindow$.prototype.$SetViewportRectangle$ = function $dvt$$OverviewWindow$$$$SetViewportRectangle$$($DvtTrainEvent$$) {
    this.$_viewport$.$setX$($DvtTrainEvent$$.x);
    this.$_viewport$.$setY$($DvtTrainEvent$$.y);
    this.$_viewport$.$setWidth$($DvtTrainEvent$$.$w$);
    this.$_viewport$.$setHeight$($DvtTrainEvent$$.$h$)
  };
  dvt.$OverviewWindow$.prototype.$GetViewportRectangle$ = function $dvt$$OverviewWindow$$$$GetViewportRectangle$$() {
    return new dvt.$Rectangle$(this.$_viewport$.$getX$(), this.$_viewport$.$getY$(), this.$_viewport$.getWidth(), this.$_viewport$.getHeight())
  };
  dvt.$OverviewWindow$.prototype.$getDimensions$ = function $dvt$$OverviewWindow$$$$getDimensions$$($DvtTrainEvent$$) {
    var $DvtAccordionDefaults$$ = new dvt.$Rectangle$(0, 0, this.$_ww$, this.$_hh$);
    return!$DvtTrainEvent$$ || $DvtTrainEvent$$ === this ? $DvtAccordionDefaults$$ : this.$ConvertCoordSpaceRect$($DvtAccordionDefaults$$, $DvtTrainEvent$$)
  };
  dvt.$OverviewWindow$.prototype.$getDimensionsWithStroke$ = function $dvt$$OverviewWindow$$$$getDimensionsWithStroke$$($DvtTrainEvent$$) {
    return this.$getDimensions$($DvtTrainEvent$$)
  };
  dvt.$Bundle$.$addDefaultStrings$(dvt.$Bundle$.$SUBCOMPONENT_PREFIX$, {CONTROL_PANEL:"Control Panel", CONTROL_PANEL_ZOOMANDCENTER:"Zoom and Center", CONTROL_PANEL_PAN:"Pan", CONTROL_PANEL_LAYOUT:"Layout", CONTROL_PANEL_LAYOUT_VERT_TOP:"Vertical, Top Down", CONTROL_PANEL_LAYOUT_VERT_BOTTOM:"Vertical, Bottom Up", CONTROL_PANEL_LAYOUT_HORIZ_START:"Horizontal, Start-to-End", CONTROL_PANEL_LAYOUT_HORIZ_LEFT:"Horizontal, Left-to-Right", CONTROL_PANEL_LAYOUT_HORIZ_RIGHT:"Horizontal, Right-to-Left", CONTROL_PANEL_LAYOUT_RADIAL:"Radial", 
  CONTROL_PANEL_LAYOUT_TREE:"Tree", CONTROL_PANEL_LAYOUT_CIRCLE:"Circle", CONTROL_PANEL_SYNC:"View", CONTROL_PANEL_ZOOMTOFIT:"Zoom to Fit", CONTROL_PANEL_ZOOMIN:"Zoom In", CONTROL_PANEL_ZOOMOUT:"Zoom Out", CONTROL_PANEL_RESET:"Reset Map", CONTROL_PANEL_DRILLUP:"Drill Up", CONTROL_PANEL_DRILLDOWN:"Drill Down", LEGEND:"Legend", OVERVIEW:"Overview", PALETTE:"Palette", SEARCH:"Search", SEARCH_TEXT:"Search", SEARCH_TEXT_ALTA:"Find", SEARCH_RESULTS:"Search Results [{0}]", SEARCH_RESULTS_ALTA:"{0} Results", 
  SEARCH_RESULTS_CLOSE:"Close", SEARCH_RESULTS_NO_DATA:"No results to display"})
})();

  return dvt;
});

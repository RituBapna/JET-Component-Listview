/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
define(['./DvtToolkit', './DvtAxis'], function(dvt) {
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

function $DvtGauge$$() {
}
$goog$exportPath_$$("DvtGauge", $DvtGauge$$);
dvt.$Obj$.$createSubclass$($DvtGauge$$, dvt.$BaseComponent$);
$DvtGauge$$.prototype.Init = function $$DvtGauge$$$$Init$($context$$166$$, $callback$$69$$, $callbackObj$$39$$, $bStaticRendering$$) {
  $DvtGauge$$.$superclass$.Init.call(this, $context$$166$$, $callback$$69$$, $callbackObj$$39$$);
  this.$_bStaticRendering$ = $bStaticRendering$$;
  this.$_bStaticRendering$ || (this.$_eventManager$ = this.$CreateEventManager$(), this.$_eventManager$.$addListeners$(this), dvt.$Agent$.$isTouchDevice$() || this.$_eventManager$.$setKeyboardHandler$(this.$CreateKeyboardHandler$(this.$_eventManager$)), this.setId("gauge1000" + Math.floor(1E9 * Math.random())), this.$_editingOverlay$ = new dvt.$Rect$($context$$166$$, 0, 0), this.$_editingOverlay$.$setInvisibleFill$(), this.$addChild$(this.$_editingOverlay$));
  this.$_bEditing$ = $JSCompiler_alias_FALSE$$;
  this.$_oldValue$ = $JSCompiler_alias_NULL$$
};
$DvtGauge$$.prototype.$SetOptions$ = function $$DvtGauge$$$$$SetOptions$$($options$$119$$) {
  this.$Options$ = $options$$119$$;
  dvt.$Agent$.$isEnvironmentBrowser$() || (this.$Options$.animationOnDisplay = "none", this.$Options$.animationOnDataChange = "none")
};
$DvtGauge$$.prototype.$render$ = function $$DvtGauge$$$$$render$$($bBlackBoxUpdate$$inline_3376_options$$120_tooltip$$13$$, $container$$80_width$$47$$, $ariaId_height$$41_oldShapes_value$$127$$) {
  $bBlackBoxUpdate$$inline_3376_options$$120_tooltip$$13$$ ? this.$SetOptions$($bBlackBoxUpdate$$inline_3376_options$$120_tooltip$$13$$) : this.$Options$ || this.$SetOptions$($JSCompiler_alias_NULL$$);
  this.$Options$.thresholds && (this.$Options$.thresholds = this.$Options$.thresholds.sort($DvtGauge$_thresholdComparator$$));
  !isNaN($container$$80_width$$47$$) && !isNaN($ariaId_height$$41_oldShapes_value$$127$$) && (this.$Width$ = $container$$80_width$$47$$, this.$Height$ = $ariaId_height$$41_oldShapes_value$$127$$);
  $ariaId_height$$41_oldShapes_value$$127$$ = this.$__shapes$;
  this.$__shapes$ = [];
  $container$$80_width$$47$$ = new dvt.$Container$(this.$getCtx$());
  this.$addChildAt$($container$$80_width$$47$$, 0);
  this.$Render$($container$$80_width$$47$$, this.$Width$, this.$Height$);
  var $bData$$inline_3372_newObjs$$inline_6342$$ = $bBlackBoxUpdate$$inline_3376_options$$120_tooltip$$13$$ != $JSCompiler_alias_NULL$$, $bounds$$inline_3380_newObj$$inline_6346_width$$inline_3374$$ = this.$Width$, $context$$inline_3381_endState$$inline_6348_height$$inline_3375$$ = this.$Height$;
  this.$_animation$ && (this.$_animationStopped$ = $JSCompiler_alias_TRUE$$, this.$_animation$.stop());
  $bBlackBoxUpdate$$inline_3376_options$$120_tooltip$$13$$ = $JSCompiler_alias_FALSE$$;
  var $animatedObjs$$inline_6344_animationOnDataChange$$inline_3377$$ = this.$_bEditing$ ? "none" : this.$getOptions$().animationOnDataChange, $animationOnDisplay$$inline_3378_i$$inline_6345$$ = this.$_bEditing$ ? "none" : this.$getOptions$().animationOnDisplay, $animationDuration$$inline_3379$$ = dvt.$StyleUtils$.$getTimeMilliseconds$(this.$getOptions$().animationDuration) / 1E3;
  if($animationOnDisplay$$inline_3378_i$$inline_6345$$ || $animatedObjs$$inline_6344_animationOnDataChange$$inline_3377$$) {
    $bounds$$inline_3380_newObj$$inline_6346_width$$inline_3374$$ = new dvt.$Rectangle$(0, 0, $bounds$$inline_3380_newObj$$inline_6346_width$$inline_3374$$, $context$$inline_3381_endState$$inline_6348_height$$inline_3375$$);
    $context$$inline_3381_endState$$inline_6348_height$$inline_3375$$ = this.$getCtx$();
    if(!this.$_container$ && "none" !== $animationOnDisplay$$inline_3378_i$$inline_6345$$ && this.$__shapes$[0] != $JSCompiler_alias_NULL$$) {
      this.$_animation$ = dvt.$BlackBoxAnimationHandler$.$getInAnimation$($context$$inline_3381_endState$$inline_6348_height$$inline_3375$$, $animationOnDisplay$$inline_3378_i$$inline_6345$$, $container$$80_width$$47$$, $bounds$$inline_3380_newObj$$inline_6346_width$$inline_3374$$, $animationDuration$$inline_3379$$), this.$_animation$ || (this.$_animation$ = this.$CreateAnimationOnDisplay$(this.$__shapes$, $animationOnDisplay$$inline_3378_i$$inline_6345$$, $animationDuration$$inline_3379$$))
    }else {
      if(this.$_container$ && "none" != $animatedObjs$$inline_6344_animationOnDataChange$$inline_3377$$ && $bData$$inline_3372_newObjs$$inline_6342$$ && this.$__shapes$[0] != $JSCompiler_alias_NULL$$) {
        if(this.$_animation$ = dvt.$BlackBoxAnimationHandler$.$getCombinedAnimation$($context$$inline_3381_endState$$inline_6348_height$$inline_3375$$, $animatedObjs$$inline_6344_animationOnDataChange$$inline_3377$$, this.$_container$, $container$$80_width$$47$$, $bounds$$inline_3380_newObj$$inline_6346_width$$inline_3374$$, $animationDuration$$inline_3379$$)) {
          $bBlackBoxUpdate$$inline_3376_options$$120_tooltip$$13$$ = $JSCompiler_alias_TRUE$$
        }else {
          $bData$$inline_3372_newObjs$$inline_6342$$ = this.$__shapes$;
          $animatedObjs$$inline_6344_animationOnDataChange$$inline_3377$$ = [];
          for($animationOnDisplay$$inline_3378_i$$inline_6345$$ = 0;$animationOnDisplay$$inline_3378_i$$inline_6345$$ < $ariaId_height$$41_oldShapes_value$$127$$.length;$animationOnDisplay$$inline_3378_i$$inline_6345$$++) {
            var $bounds$$inline_3380_newObj$$inline_6346_width$$inline_3374$$ = $bData$$inline_3372_newObjs$$inline_6342$$[$animationOnDisplay$$inline_3378_i$$inline_6345$$], $animation$$inline_6349_startState$$inline_6347$$ = $ariaId_height$$41_oldShapes_value$$127$$[$animationOnDisplay$$inline_3378_i$$inline_6345$$].$getAnimationParams$(), $context$$inline_3381_endState$$inline_6348_height$$inline_3375$$ = $bounds$$inline_3380_newObj$$inline_6346_width$$inline_3374$$.$getAnimationParams$();
            $bounds$$inline_3380_newObj$$inline_6346_width$$inline_3374$$.$setAnimationParams$($animation$$inline_6349_startState$$inline_6347$$);
            $animation$$inline_6349_startState$$inline_6347$$ = new dvt.$CustomAnimation$(this.$getCtx$(), $bounds$$inline_3380_newObj$$inline_6346_width$$inline_3374$$, $animationDuration$$inline_3379$$);
            $animation$$inline_6349_startState$$inline_6347$$.$_animator$.$addProp$(dvt.$Animator$.$TYPE_NUMBER_ARRAY$, $bounds$$inline_3380_newObj$$inline_6346_width$$inline_3374$$, $bounds$$inline_3380_newObj$$inline_6346_width$$inline_3374$$.$getAnimationParams$, $bounds$$inline_3380_newObj$$inline_6346_width$$inline_3374$$.$setAnimationParams$, $context$$inline_3381_endState$$inline_6348_height$$inline_3375$$);
            $animatedObjs$$inline_6344_animationOnDataChange$$inline_3377$$.push($animation$$inline_6349_startState$$inline_6347$$)
          }
          this.$_animation$ = new dvt.$ParallelPlayable$(this.$getCtx$(), $animatedObjs$$inline_6344_animationOnDataChange$$inline_3377$$)
        }
      }
    }
    $bBlackBoxUpdate$$inline_3376_options$$120_tooltip$$13$$ || this.removeChild(this.$_container$);
    this.$_animation$ && (this.$_animation$.play(), this.$_animation$.$setOnEnd$(this.$_onAnimationEnd$, this));
    $bBlackBoxUpdate$$inline_3376_options$$120_tooltip$$13$$ && (this.$_oldContainer$ = this.$_container$);
    this.$_container$ = $container$$80_width$$47$$
  }
  this.$_editingOverlay$ && (this.$_editingOverlay$.$setWidth$(this.$Width$), this.$_editingOverlay$.$setHeight$(this.$Height$), this.$getEventManager$().$associate$(this.$_editingOverlay$, this.$__getLogicalObject$(), $JSCompiler_alias_TRUE$$));
  !this.$_bStaticRendering$ && !this.$Options$.readOnly && ($container$$80_width$$47$$.$setAriaRole$("slider"), $container$$80_width$$47$$.$setAriaProperty$("valuemin", this.$Options$.min), $container$$80_width$$47$$.$setAriaProperty$("valuemax", this.$Options$.max), $ariaId_height$$41_oldShapes_value$$127$$ = $DvtGaugeRenderer$$.$getFormattedMetricLabel$(this.$Options$.value, this), $container$$80_width$$47$$.$setAriaProperty$("valuenow", $ariaId_height$$41_oldShapes_value$$127$$), $bBlackBoxUpdate$$inline_3376_options$$120_tooltip$$13$$ = 
  $DvtGaugeRenderer$$.$getTooltipString$(this), dvt.$Agent$.$isTouchDevice$() && (this.$_container$.$setAriaProperty$("live", "assertive"), $ariaId_height$$41_oldShapes_value$$127$$ != $bBlackBoxUpdate$$inline_3376_options$$120_tooltip$$13$$ && ($bBlackBoxUpdate$$inline_3376_options$$120_tooltip$$13$$ = $ariaId_height$$41_oldShapes_value$$127$$ + dvt.$Bundle$.$getTranslatedString$(dvt.$Bundle$.$UTIL_PREFIX$, "ARIA_LABEL_DESC_DELIMITER") + $bBlackBoxUpdate$$inline_3376_options$$120_tooltip$$13$$)), 
  $ariaId_height$$41_oldShapes_value$$127$$ != $bBlackBoxUpdate$$inline_3376_options$$120_tooltip$$13$$ && $container$$80_width$$47$$.$setAriaProperty$("label", $bBlackBoxUpdate$$inline_3376_options$$120_tooltip$$13$$), this.$_renderCount$ = this.$_renderCount$ != $JSCompiler_alias_NULL$$ ? this.$_renderCount$ + 1 : 0, $ariaId_height$$41_oldShapes_value$$127$$ = this.getId() + "_" + this.$_renderCount$, $container$$80_width$$47$$.setId($ariaId_height$$41_oldShapes_value$$127$$), this.$getCtx$().$setActiveElement$($container$$80_width$$47$$));
  this.$Options$._selectingCursor && this.setCursor("pointer");
  this.$UpdateAriaAttributes$();
  this.$_animation$ || this.$RenderComplete$()
};
$DvtGauge$$.prototype.render = $DvtGauge$$.prototype.$render$;
$JSCompiler_prototypeAlias$$ = $DvtGauge$$.prototype;
$JSCompiler_prototypeAlias$$.$__getLogicalObject$ = function $$JSCompiler_prototypeAlias$$$$__getLogicalObject$$() {
  var $tooltip$$14$$ = $DvtGaugeRenderer$$.$getTooltipString$(this), $color$$30$$ = $DvtGaugeStyleUtils$$.$getColor$(this);
  return new dvt.$SimpleObjPeer$($JSCompiler_alias_NULL$$, $tooltip$$14$$, $color$$30$$)
};
$JSCompiler_prototypeAlias$$.$Render$ = $JSCompiler_emptyFn$$();
$JSCompiler_prototypeAlias$$.$CreateAnimationOnDisplay$ = $JSCompiler_returnArg$$($JSCompiler_alias_NULL$$);
$JSCompiler_prototypeAlias$$.$GetValueAt$ = $JSCompiler_returnArg$$($JSCompiler_alias_NULL$$);
$JSCompiler_prototypeAlias$$.$renderUpdate$ = function $$JSCompiler_prototypeAlias$$$$renderUpdate$$() {
  this.$render$();
  $JSCompiler_StaticMethods_UpdateAriaLiveValue$$(this, this.$_container$)
};
function $JSCompiler_StaticMethods_UpdateAriaLiveValue$$($JSCompiler_StaticMethods_UpdateAriaLiveValue$self$$, $container$$83$$, $value$$128$$) {
  $value$$128$$ = $DvtGaugeRenderer$$.$getFormattedMetricLabel$($value$$128$$ ? $value$$128$$ : $JSCompiler_StaticMethods_UpdateAriaLiveValue$self$$.$Options$.value, $JSCompiler_StaticMethods_UpdateAriaLiveValue$self$$);
  $container$$83$$.$setAriaProperty$("valuenow", $value$$128$$);
  dvt.$Agent$.$isTouchDevice$() && $container$$83$$.$setAriaProperty$("label", $value$$128$$)
}
$JSCompiler_prototypeAlias$$.$_onAnimationEnd$ = function $$JSCompiler_prototypeAlias$$$$_onAnimationEnd$$() {
  this.$_oldContainer$ && (this.removeChild(this.$_oldContainer$), this.$_oldContainer$ = $JSCompiler_alias_NULL$$);
  this.$_animationStopped$ || this.$RenderComplete$();
  this.$_animationStopped$ = this.$_animation$ = $JSCompiler_alias_NULL$$
};
$JSCompiler_prototypeAlias$$.$getEventManager$ = $JSCompiler_get$$("$_eventManager$");
$JSCompiler_prototypeAlias$$.$__processValueChangeStart$ = function $$JSCompiler_prototypeAlias$$$$__processValueChangeStart$$($x$$117$$, $y$$96$$) {
  this.$_bEditing$ = $JSCompiler_alias_TRUE$$;
  this.$_oldValue$ = this.$Options$.value;
  this.$__processValueChangeMove$($x$$117$$, $y$$96$$)
};
$JSCompiler_prototypeAlias$$.$__processValueChangeMove$ = function $$JSCompiler_prototypeAlias$$$$__processValueChangeMove$$($x$$118$$, $y$$97$$) {
  this.$_oldValue$ != $JSCompiler_alias_NULL$$ && (this.$Options$.value = $DvtGaugeRenderer$$.$adjustForStep$(this.$Options$, this.$GetValueAt$($x$$118$$, $y$$97$$)), this.$renderUpdate$(), this.dispatchEvent(dvt.$EventFactory$.$newValueChangeEvent$(this.$_oldValue$, this.$Options$.value, $JSCompiler_alias_FALSE$$)))
};
$JSCompiler_prototypeAlias$$.$__processValueChangeEnd$ = function $$JSCompiler_prototypeAlias$$$$__processValueChangeEnd$$($x$$119$$, $y$$98$$) {
  this.$__processValueChangeMove$($x$$119$$, $y$$98$$);
  if(dvt.$Agent$.$isTouchDevice$()) {
    var $value$$129$$ = $DvtGaugeRenderer$$.$getFormattedMetricLabel$(this.$Options$.value, this), $tooltip$$15$$ = $DvtGaugeRenderer$$.$getTooltipString$(this);
    $value$$129$$ != $tooltip$$15$$ && ($tooltip$$15$$ = $value$$129$$ + dvt.$Bundle$.$getTranslatedString$(dvt.$Bundle$.$UTIL_PREFIX$, "ARIA_LABEL_DESC_DELIMITER") + $tooltip$$15$$, this.$_container$.$setAriaProperty$("label", $tooltip$$15$$))
  }
  this.dispatchEvent(dvt.$EventFactory$.$newValueChangeEvent$(this.$_oldValue$, this.$Options$.value, $JSCompiler_alias_TRUE$$));
  this.$_bEditing$ = $JSCompiler_alias_FALSE$$;
  this.$_oldValue$ = $JSCompiler_alias_NULL$$
};
$JSCompiler_prototypeAlias$$.$CreateEventManager$ = function $$JSCompiler_prototypeAlias$$$$CreateEventManager$$() {
  return new $DvtGaugeEventManager$$(this)
};
function $DvtGauge$_thresholdComparator$$($a$$35$$, $b$$13$$) {
  return $a$$35$$.max != $JSCompiler_alias_NULL$$ && $b$$13$$.max != $JSCompiler_alias_NULL$$ ? $a$$35$$.max - $b$$13$$.max : $a$$35$$.max ? -Infinity : Infinity
}
$JSCompiler_prototypeAlias$$.$getAutomation$ = function $$JSCompiler_prototypeAlias$$$$getAutomation$$() {
  return new $DvtGaugeAutomation$$(this)
};
$DvtGauge$$.prototype.getAutomation = $DvtGauge$$.prototype.$getAutomation$;
$DvtGauge$$.prototype.$CreateKeyboardHandler$ = function $$DvtGauge$$$$$CreateKeyboardHandler$$($manager$$12$$) {
  return new $DvtGaugeKeyboardHandler$$($manager$$12$$, this)
};
$DvtGauge$$.prototype.$GetComponentDescription$ = function $$DvtGauge$$$$$GetComponentDescription$$() {
  return dvt.$Bundle$.$getTranslation$(this.$getOptions$(), "componentName", dvt.$Bundle$.$UTIL_PREFIX$, "GAUGE")
};
$DvtGauge$$.prototype.$UpdateAriaAttributes$ = function $$DvtGauge$$$$$UpdateAriaAttributes$$() {
  if(!this.$_bStaticRendering$) {
    var $tooltip$$16$$ = $DvtGaugeRenderer$$.$getTooltipString$(this);
    this.$IsParentRoot$() ? this.$Options$.readOnly ? (this.$getCtx$().$setAriaRole$("img"), this.$getCtx$().$setAriaLabel$(dvt.$Bundle$.$getTranslatedString$(dvt.$Bundle$.$UTIL_PREFIX$, "COLON_SEP_LIST", [dvt.$Bundle$.$getTranslatedString$(dvt.$Bundle$.$UTIL_PREFIX$, "DATA_VISUALIZATION"), dvt.$Displayable$.$generateAriaLabel$(dvt.$StringUtils$.$processAriaLabel$(this.$GetComponentDescription$()), $tooltip$$16$$ ? [$tooltip$$16$$] : $JSCompiler_alias_NULL$$)]))) : (this.$getCtx$().$setAriaRole$("application"), 
    this.$getCtx$().$setAriaLabel$(dvt.$Bundle$.$getTranslatedString$(dvt.$Bundle$.$UTIL_PREFIX$, "COLON_SEP_LIST", [dvt.$Bundle$.$getTranslatedString$(dvt.$Bundle$.$UTIL_PREFIX$, "DATA_VISUALIZATION"), dvt.$StringUtils$.$processAriaLabel$(this.$GetComponentDescription$())]))) : this.$Options$.readOnly && (this.$setAriaRole$("img"), this.$setAriaProperty$("label", dvt.$Displayable$.$generateAriaLabel$(dvt.$StringUtils$.$processAriaLabel$(this.$GetComponentDescription$()), $tooltip$$16$$ ? [$tooltip$$16$$] : 
    $JSCompiler_alias_NULL$$)))
  }
};
function $DvtGaugeAutomation$$($dvtComponent$$8$$) {
  this.$_gauge$ = $dvtComponent$$8$$
}
$goog$exportPath_$$("DvtGaugeAutomation", $DvtGaugeAutomation$$);
dvt.$Obj$.$createSubclass$($DvtGaugeAutomation$$, dvt.$Automation$);
$DvtGaugeAutomation$$.prototype.$getDomElementForSubId$ = function $$DvtGaugeAutomation$$$$$getDomElementForSubId$$($item$$18_subId$$13$$) {
  if($item$$18_subId$$13$$ == dvt.$Automation$.$TOOLTIP_SUBID$) {
    return this.$GetTooltipElement$(this.$_gauge$)
  }
  if(0 == $item$$18_subId$$13$$.indexOf("item")) {
    var $openParen$$2$$ = $item$$18_subId$$13$$.indexOf("["), $closeParen$$2$$ = $item$$18_subId$$13$$.indexOf("]");
    if(0 < $openParen$$2$$ && 0 < $closeParen$$2$$ && ($item$$18_subId$$13$$ = this.$_gauge$.$_container$.$getChildAt$(0).$getChildAt$($item$$18_subId$$13$$.substring($openParen$$2$$ + 1, $closeParen$$2$$)))) {
      return $item$$18_subId$$13$$.$getElem$()
    }
  }
  return $JSCompiler_alias_NULL$$
};
$DvtGaugeAutomation$$.prototype.getDomElementForSubId = $DvtGaugeAutomation$$.prototype.$getDomElementForSubId$;
$DvtGaugeAutomation$$.prototype.getValue = function $$DvtGaugeAutomation$$$$getValue$() {
  return this.$_gauge$.$getOptions$().value
};
$DvtGaugeAutomation$$.prototype.getValue = $DvtGaugeAutomation$$.prototype.getValue;
$DvtGaugeAutomation$$.prototype.$getMetricLabel$ = function $$DvtGaugeAutomation$$$$$getMetricLabel$$() {
  return $DvtGaugeRenderer$$.$getFormattedMetricLabel$(this.getValue(), this.$_gauge$)
};
$DvtGaugeAutomation$$.prototype.getMetricLabel = $DvtGaugeAutomation$$.prototype.$getMetricLabel$;
dvt.$Bundle$.$addDefaultStrings$(dvt.$Bundle$.$GAUGE_PREFIX$, {});
function $DvtGaugeDefaults$$() {
}
dvt.$Obj$.$createSubclass$($DvtGaugeDefaults$$, dvt.$BaseComponentDefaults$);
var $DvtGaugeDefaults$SKIN_ALTA$$ = {skin:dvt.$CSSStyle$.$SKIN_ALTA$, color:"#393737", metricLabel:{style:new dvt.$CSSStyle$("font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;")}, _statusMessageStyle:new dvt.$CSSStyle$("font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;"), title:{style:new dvt.$CSSStyle$("font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;")}, _thresholdColors:["#ed6647", "#fad55c", "#68c182"]}, $DvtGaugeDefaults$VERSION_1$$ = {skin:dvt.$CSSStyle$.$SKIN_SKYROS$, 
min:0, max:100, color:"#313842", borderColor:$JSCompiler_alias_NULL$$, visualEffects:"auto", emptyText:$JSCompiler_alias_NULL$$, animationOnDataChange:"none", animationOnDisplay:"none", animationDuration:500, readOnly:"true", metricLabel:{rendered:"auto", scaling:"auto", style:new dvt.$CSSStyle$("font-family: tahoma, sans-serif;"), textType:"number"}, _statusMessageStyle:new dvt.$CSSStyle$("font-family: tahoma, sans-serif;"), title:{style:new dvt.$CSSStyle$("font-family: tahoma, sans-serif;"), position:"auto"}, 
_thresholdColors:["#D62800", "#FFCF21", "#84AE31"], __layout:{outerGap:1, labelGap:5}};
$DvtGaugeDefaults$$.prototype.Init = function $$DvtGaugeDefaults$$$$Init$($defaultsMap_ret$$51$$) {
  $defaultsMap_ret$$51$$ = {skyros:dvt.$JsonUtils$.$merge$($defaultsMap_ret$$51$$.skyros, $DvtGaugeDefaults$VERSION_1$$), alta:dvt.$JsonUtils$.$merge$($defaultsMap_ret$$51$$.alta, $DvtGaugeDefaults$SKIN_ALTA$$)};
  $DvtGaugeDefaults$$.$superclass$.Init.call(this, $defaultsMap_ret$$51$$)
};
function $DvtGaugeDefaults$isSkyrosSkin$$($gauge$$) {
  return $gauge$$.$getOptions$().skin == dvt.$CSSStyle$.$SKIN_SKYROS$
}
var $DvtGaugeDataUtils$$ = {};
dvt.$Obj$.$createSubclass$($DvtGaugeDataUtils$$, dvt.$Obj$);
$DvtGaugeDataUtils$$.$hasData$ = function $$DvtGaugeDataUtils$$$$hasData$$($gauge$$1_options$$121$$) {
  $gauge$$1_options$$121$$ = $gauge$$1_options$$121$$.$getOptions$();
  return!$gauge$$1_options$$121$$ || isNaN($gauge$$1_options$$121$$.value) || $gauge$$1_options$$121$$.value === $JSCompiler_alias_NULL$$ ? $JSCompiler_alias_FALSE$$ : $JSCompiler_alias_TRUE$$
};
$DvtGaugeDataUtils$$.$getValueThresholdIndex$ = function $$DvtGaugeDataUtils$$$$getValueThresholdIndex$$($gauge$$2$$, $value$$130$$) {
  var $options$$122_thresholds$$1$$ = $gauge$$2$$.$getOptions$(), $gaugeValue$$ = $value$$130$$ != $JSCompiler_alias_NULL$$ ? $value$$130$$ : $options$$122_thresholds$$1$$.value, $options$$122_thresholds$$1$$ = $options$$122_thresholds$$1$$.thresholds;
  if(!$options$$122_thresholds$$1$$) {
    return-1
  }
  for(var $i$$382$$ = 0;$i$$382$$ < $options$$122_thresholds$$1$$.length;$i$$382$$++) {
    if($gaugeValue$$ <= $options$$122_thresholds$$1$$[$i$$382$$].max) {
      return $i$$382$$
    }
  }
  return $options$$122_thresholds$$1$$.length - 1
};
$DvtGaugeDataUtils$$.$getThreshold$ = function $$DvtGaugeDataUtils$$$$getThreshold$$($gauge$$3$$, $index$$145$$) {
  var $thresholds$$2$$ = $gauge$$3$$.$getOptions$().thresholds;
  return $thresholds$$2$$ && 0 <= $index$$145$$ && $index$$145$$ < $thresholds$$2$$.length ? $thresholds$$2$$[$index$$145$$] : $JSCompiler_alias_NULL$$
};
$DvtGaugeDataUtils$$.$getReferenceObject$ = function $$DvtGaugeDataUtils$$$$getReferenceObject$$($gauge$$4$$, $index$$146$$) {
  var $referenceObjects$$ = $gauge$$4$$.$getOptions$().referenceLines;
  return $referenceObjects$$ && 0 <= $index$$146$$ && $index$$146$$ < $referenceObjects$$.length ? $referenceObjects$$[$index$$146$$] : $JSCompiler_alias_NULL$$
};
function $DvtGaugeEventManager$$($gauge$$5$$) {
  this.Init($gauge$$5$$.$getCtx$(), $gauge$$5$$.dispatchEvent, $gauge$$5$$);
  this.$_gauge$ = $gauge$$5$$;
  this.$IsMouseEditing$ = $JSCompiler_alias_FALSE$$
}
dvt.$Obj$.$createSubclass$($DvtGaugeEventManager$$, dvt.$EventManager$);
$JSCompiler_prototypeAlias$$ = $DvtGaugeEventManager$$.prototype;
$JSCompiler_prototypeAlias$$.$OnMouseDown$ = function $$JSCompiler_prototypeAlias$$$$OnMouseDown$$($coords$$25_event$$247$$) {
  this.$_gauge$.$getOptions$().readOnly === $JSCompiler_alias_FALSE$$ ? (this.$IsMouseEditing$ = $JSCompiler_alias_TRUE$$, this.$hideTooltip$(), $coords$$25_event$$247$$ = $JSCompiler_StaticMethods_GetRelativePosition$$(this, $coords$$25_event$$247$$.pageX, $coords$$25_event$$247$$.pageY), this.$_gauge$.$__processValueChangeStart$($coords$$25_event$$247$$.x, $coords$$25_event$$247$$.y)) : $DvtGaugeEventManager$$.$superclass$.$OnMouseDown$.call(this, $coords$$25_event$$247$$)
};
$JSCompiler_prototypeAlias$$.$OnMouseUp$ = function $$JSCompiler_prototypeAlias$$$$OnMouseUp$$($coords$$26_event$$248$$) {
  this.$IsMouseEditing$ ? (this.$IsMouseEditing$ = $JSCompiler_alias_FALSE$$, $coords$$26_event$$248$$ = $JSCompiler_StaticMethods_GetRelativePosition$$(this, $coords$$26_event$$248$$.pageX, $coords$$26_event$$248$$.pageY), this.$_gauge$.$__processValueChangeEnd$($coords$$26_event$$248$$.x, $coords$$26_event$$248$$.y)) : $DvtGaugeEventManager$$.$superclass$.$OnMouseUp$.call(this, $coords$$26_event$$248$$)
};
$JSCompiler_prototypeAlias$$.$OnMouseMove$ = function $$JSCompiler_prototypeAlias$$$$OnMouseMove$$($event$$249$$) {
  if(this.$IsMouseEditing$) {
    var $coords$$27$$ = $JSCompiler_StaticMethods_GetRelativePosition$$(this, $event$$249$$.pageX, $event$$249$$.pageY);
    this.$_gauge$.$__processValueChangeMove$($coords$$27$$.x, $coords$$27$$.y)
  }
  (this.$IsShowingTooltipWhileEditing$() || !this.$IsMouseEditing$) && $DvtGaugeEventManager$$.$superclass$.$OnMouseMove$.call(this, $event$$249$$)
};
$JSCompiler_prototypeAlias$$.$IsShowingTooltipWhileEditing$ = $JSCompiler_returnArg$$($JSCompiler_alias_FALSE$$);
$JSCompiler_prototypeAlias$$.$PreEventBubble$ = function $$JSCompiler_prototypeAlias$$$$PreEventBubble$$($event$$250$$) {
  if(dvt.$TouchEvent$.$TOUCHSTART$ === $event$$250$$.type && this.$_gauge$.$getOptions$().readOnly === $JSCompiler_alias_FALSE$$) {
    this.$IsMouseEditing$ = $JSCompiler_alias_TRUE$$;
    var $coords$$28$$ = $JSCompiler_StaticMethods_GetRelativePosition$$(this, $event$$250$$.touches[0].pageX, $event$$250$$.touches[0].pageY);
    this.$_gauge$.$__processValueChangeStart$($coords$$28$$.x, $coords$$28$$.y);
    $event$$250$$.preventDefault()
  }else {
    dvt.$TouchEvent$.$TOUCHMOVE$ === $event$$250$$.type && this.$IsMouseEditing$ ? ($coords$$28$$ = $JSCompiler_StaticMethods_GetRelativePosition$$(this, $event$$250$$.touches[0].pageX, $event$$250$$.touches[0].pageY), this.$_gauge$.$__processValueChangeMove$($coords$$28$$.x, $coords$$28$$.y), $event$$250$$.preventDefault()) : dvt.$TouchEvent$.$TOUCHEND$ === $event$$250$$.type && this.$IsMouseEditing$ && (this.$IsMouseEditing$ = $JSCompiler_alias_FALSE$$, $coords$$28$$ = $JSCompiler_StaticMethods_GetRelativePosition$$(this, 
    $event$$250$$.changedTouches[0].pageX, $event$$250$$.changedTouches[0].pageY), this.$_gauge$.$__processValueChangeEnd$($coords$$28$$.x, $coords$$28$$.y), $event$$250$$.preventDefault())
  }
  (!this.$IsMouseEditing$ || this.$IsShowingTooltipWhileEditing$()) && $DvtGaugeEventManager$$.$superclass$.$PreEventBubble$.call(this, $event$$250$$)
};
$JSCompiler_prototypeAlias$$.$ProcessKeyboardEvent$ = function $$JSCompiler_prototypeAlias$$$$ProcessKeyboardEvent$$($event$$251$$) {
  if(!this.$KeyboardHandler$) {
    return $JSCompiler_alias_FALSE$$
  }
  this.$KeyboardHandler$.$processKeyDown$($event$$251$$);
  var $keyCode$$17_pos$$42$$ = $event$$251$$.keyCode;
  if($keyCode$$17_pos$$42$$ == dvt.$KeyboardEvent$.$UP_ARROW$ || $keyCode$$17_pos$$42$$ == dvt.$KeyboardEvent$.$LEFT_ARROW$ || $keyCode$$17_pos$$42$$ == dvt.$KeyboardEvent$.$DOWN_ARROW$ || $keyCode$$17_pos$$42$$ == dvt.$KeyboardEvent$.$RIGHT_ARROW$ || $keyCode$$17_pos$$42$$ == dvt.$KeyboardEvent$.$TAB$) {
    $keyCode$$17_pos$$42$$ = this.$_gauge$.$getCtx$().$getStageAbsolutePosition$(), this.$ProcessObjectTooltip$($event$$251$$, $keyCode$$17_pos$$42$$.x, $keyCode$$17_pos$$42$$.y, this.$_gauge$.$__getLogicalObject$(), this.$_gauge$)
  }
  return $JSCompiler_alias_FALSE$$
};
$JSCompiler_prototypeAlias$$.$OnBlur$ = function $$JSCompiler_prototypeAlias$$$$OnBlur$$($event$$252$$) {
  $DvtGaugeEventManager$$.$superclass$.$OnBlur$.call(this, $event$$252$$);
  this.$hideTooltip$()
};
function $JSCompiler_StaticMethods_GetRelativePosition$$($JSCompiler_StaticMethods_GetRelativePosition$self$$, $pageX$$2_stageCoords$$, $pageY$$2$$) {
  $pageX$$2_stageCoords$$ = $JSCompiler_StaticMethods_GetRelativePosition$self$$.$getCtx$().$pageToStageCoords$($pageX$$2_stageCoords$$, $pageY$$2$$);
  return $JSCompiler_StaticMethods_GetRelativePosition$self$$.$_gauge$.$stageToLocal$($pageX$$2_stageCoords$$)
}
$JSCompiler_prototypeAlias$$.$UpdateActiveElement$ = $JSCompiler_emptyFn$$();
function $DvtGaugeKeyboardHandler$$($manager$$13$$, $gauge$$6$$) {
  this.Init($manager$$13$$, $gauge$$6$$)
}
dvt.$Obj$.$createSubclass$($DvtGaugeKeyboardHandler$$, dvt.$KeyboardHandler$);
$DvtGaugeKeyboardHandler$$.prototype.Init = function $$DvtGaugeKeyboardHandler$$$$Init$($manager$$14$$, $gauge$$7$$) {
  $DvtGaugeKeyboardHandler$$.$superclass$.Init.call(this, $manager$$14$$);
  this.$_gauge$ = $gauge$$7$$
};
$DvtGaugeKeyboardHandler$$.prototype.$processKeyDown$ = function $$DvtGaugeKeyboardHandler$$$$$processKeyDown$$($event$$253$$) {
  var $JSCompiler_StaticMethods___decreaseValue$self$$inline_3406_JSCompiler_StaticMethods___increaseValue$self$$inline_3403_keyCode$$18$$ = $event$$253$$.keyCode, $isR2L$$6_oldValue$$inline_3404_oldValue$$inline_3407$$ = dvt.$Agent$.$isRightToLeft$(this.$_gauge$.$getCtx$());
  if($JSCompiler_StaticMethods___decreaseValue$self$$inline_3406_JSCompiler_StaticMethods___increaseValue$self$$inline_3403_keyCode$$18$$ == dvt.$KeyboardEvent$.$UP_ARROW$ || $JSCompiler_StaticMethods___decreaseValue$self$$inline_3406_JSCompiler_StaticMethods___increaseValue$self$$inline_3403_keyCode$$18$$ == ($isR2L$$6_oldValue$$inline_3404_oldValue$$inline_3407$$ ? dvt.$KeyboardEvent$.$LEFT_ARROW$ : dvt.$KeyboardEvent$.$RIGHT_ARROW$)) {
    $JSCompiler_StaticMethods___decreaseValue$self$$inline_3406_JSCompiler_StaticMethods___increaseValue$self$$inline_3403_keyCode$$18$$ = this.$_gauge$, $JSCompiler_StaticMethods___decreaseValue$self$$inline_3406_JSCompiler_StaticMethods___increaseValue$self$$inline_3403_keyCode$$18$$.$Options$.readOnly || ($isR2L$$6_oldValue$$inline_3404_oldValue$$inline_3407$$ = $JSCompiler_StaticMethods___decreaseValue$self$$inline_3406_JSCompiler_StaticMethods___increaseValue$self$$inline_3403_keyCode$$18$$.$Options$.value, 
    $JSCompiler_StaticMethods___decreaseValue$self$$inline_3406_JSCompiler_StaticMethods___increaseValue$self$$inline_3403_keyCode$$18$$.$Options$.value = $JSCompiler_StaticMethods___decreaseValue$self$$inline_3406_JSCompiler_StaticMethods___increaseValue$self$$inline_3403_keyCode$$18$$.$Options$.step != $JSCompiler_alias_NULL$$ ? $DvtGaugeRenderer$$.$adjustForStep$($JSCompiler_StaticMethods___decreaseValue$self$$inline_3406_JSCompiler_StaticMethods___increaseValue$self$$inline_3403_keyCode$$18$$.$Options$, 
    $JSCompiler_StaticMethods___decreaseValue$self$$inline_3406_JSCompiler_StaticMethods___increaseValue$self$$inline_3403_keyCode$$18$$.$Options$.value + $JSCompiler_StaticMethods___decreaseValue$self$$inline_3406_JSCompiler_StaticMethods___increaseValue$self$$inline_3403_keyCode$$18$$.$Options$.step) : Math.min(Math.max($JSCompiler_StaticMethods___decreaseValue$self$$inline_3406_JSCompiler_StaticMethods___increaseValue$self$$inline_3403_keyCode$$18$$.$Options$.value + ($JSCompiler_StaticMethods___decreaseValue$self$$inline_3406_JSCompiler_StaticMethods___increaseValue$self$$inline_3403_keyCode$$18$$.$Options$.max - 
    $JSCompiler_StaticMethods___decreaseValue$self$$inline_3406_JSCompiler_StaticMethods___increaseValue$self$$inline_3403_keyCode$$18$$.$Options$.min) / 100, $JSCompiler_StaticMethods___decreaseValue$self$$inline_3406_JSCompiler_StaticMethods___increaseValue$self$$inline_3403_keyCode$$18$$.$Options$.min), $JSCompiler_StaticMethods___decreaseValue$self$$inline_3406_JSCompiler_StaticMethods___increaseValue$self$$inline_3403_keyCode$$18$$.$Options$.max), $JSCompiler_StaticMethods___decreaseValue$self$$inline_3406_JSCompiler_StaticMethods___increaseValue$self$$inline_3403_keyCode$$18$$.$render$(), 
    $JSCompiler_StaticMethods___decreaseValue$self$$inline_3406_JSCompiler_StaticMethods___increaseValue$self$$inline_3403_keyCode$$18$$.dispatchEvent(dvt.$EventFactory$.$newValueChangeEvent$($isR2L$$6_oldValue$$inline_3404_oldValue$$inline_3407$$, $JSCompiler_StaticMethods___decreaseValue$self$$inline_3406_JSCompiler_StaticMethods___increaseValue$self$$inline_3403_keyCode$$18$$.$Options$.value, $JSCompiler_alias_TRUE$$))), dvt.$EventManager$.$consumeEvent$($event$$253$$)
  }else {
    if($JSCompiler_StaticMethods___decreaseValue$self$$inline_3406_JSCompiler_StaticMethods___increaseValue$self$$inline_3403_keyCode$$18$$ == dvt.$KeyboardEvent$.$DOWN_ARROW$ || $JSCompiler_StaticMethods___decreaseValue$self$$inline_3406_JSCompiler_StaticMethods___increaseValue$self$$inline_3403_keyCode$$18$$ == ($isR2L$$6_oldValue$$inline_3404_oldValue$$inline_3407$$ ? dvt.$KeyboardEvent$.$RIGHT_ARROW$ : dvt.$KeyboardEvent$.$LEFT_ARROW$)) {
      $JSCompiler_StaticMethods___decreaseValue$self$$inline_3406_JSCompiler_StaticMethods___increaseValue$self$$inline_3403_keyCode$$18$$ = this.$_gauge$, $JSCompiler_StaticMethods___decreaseValue$self$$inline_3406_JSCompiler_StaticMethods___increaseValue$self$$inline_3403_keyCode$$18$$.$Options$.readOnly || ($isR2L$$6_oldValue$$inline_3404_oldValue$$inline_3407$$ = $JSCompiler_StaticMethods___decreaseValue$self$$inline_3406_JSCompiler_StaticMethods___increaseValue$self$$inline_3403_keyCode$$18$$.$Options$.value, 
      $JSCompiler_StaticMethods___decreaseValue$self$$inline_3406_JSCompiler_StaticMethods___increaseValue$self$$inline_3403_keyCode$$18$$.$Options$.value = $JSCompiler_StaticMethods___decreaseValue$self$$inline_3406_JSCompiler_StaticMethods___increaseValue$self$$inline_3403_keyCode$$18$$.$Options$.step != $JSCompiler_alias_NULL$$ ? $DvtGaugeRenderer$$.$adjustForStep$($JSCompiler_StaticMethods___decreaseValue$self$$inline_3406_JSCompiler_StaticMethods___increaseValue$self$$inline_3403_keyCode$$18$$.$Options$, 
      $JSCompiler_StaticMethods___decreaseValue$self$$inline_3406_JSCompiler_StaticMethods___increaseValue$self$$inline_3403_keyCode$$18$$.$Options$.value - $JSCompiler_StaticMethods___decreaseValue$self$$inline_3406_JSCompiler_StaticMethods___increaseValue$self$$inline_3403_keyCode$$18$$.$Options$.step) : Math.min(Math.max($JSCompiler_StaticMethods___decreaseValue$self$$inline_3406_JSCompiler_StaticMethods___increaseValue$self$$inline_3403_keyCode$$18$$.$Options$.value - ($JSCompiler_StaticMethods___decreaseValue$self$$inline_3406_JSCompiler_StaticMethods___increaseValue$self$$inline_3403_keyCode$$18$$.$Options$.max - 
      $JSCompiler_StaticMethods___decreaseValue$self$$inline_3406_JSCompiler_StaticMethods___increaseValue$self$$inline_3403_keyCode$$18$$.$Options$.min) / 100, $JSCompiler_StaticMethods___decreaseValue$self$$inline_3406_JSCompiler_StaticMethods___increaseValue$self$$inline_3403_keyCode$$18$$.$Options$.min), $JSCompiler_StaticMethods___decreaseValue$self$$inline_3406_JSCompiler_StaticMethods___increaseValue$self$$inline_3403_keyCode$$18$$.$Options$.max), $JSCompiler_StaticMethods___decreaseValue$self$$inline_3406_JSCompiler_StaticMethods___increaseValue$self$$inline_3403_keyCode$$18$$.$render$(), 
      $JSCompiler_StaticMethods___decreaseValue$self$$inline_3406_JSCompiler_StaticMethods___increaseValue$self$$inline_3403_keyCode$$18$$.dispatchEvent(dvt.$EventFactory$.$newValueChangeEvent$($isR2L$$6_oldValue$$inline_3404_oldValue$$inline_3407$$, $JSCompiler_StaticMethods___decreaseValue$self$$inline_3406_JSCompiler_StaticMethods___increaseValue$self$$inline_3403_keyCode$$18$$.$Options$.value, $JSCompiler_alias_TRUE$$))), dvt.$EventManager$.$consumeEvent$($event$$253$$)
    }
  }
};
var $DvtGaugeStyleUtils$$ = {};
dvt.$Obj$.$createSubclass$($DvtGaugeStyleUtils$$, dvt.$Obj$);
$DvtGaugeStyleUtils$$.$_THRESHOLD_COLOR_RAMP$ = ["#ed6647", "#fad55c", "#68c182"];
$DvtGaugeStyleUtils$$.$_SKYROS_THRESHOLD_COLOR_RAMP$ = ["#D62800", "#FFCF21", "#84AE31"];
$DvtGaugeStyleUtils$$.$_ALTA_CIRCLE$ = {startAngle:202.5, angleExtent:225, anchorX:100, anchorY:103, metricLabelBounds:{x:80, y:86, width:40, height:34}, indicatorLength:0.85, tickLabelHeight:20, tickLabelWidth:30, radius:60, majorTickCount:6};
$DvtGaugeStyleUtils$$.$_ALTA_DOME$ = {startAngle:202.5, angleExtent:225, anchorX:100, anchorY:103, metricLabelBounds:{x:83, y:86, width:34, height:34}, indicatorLength:0.85, tickLabelHeight:20, tickLabelWidth:30, radius:60, majorTickCount:6};
$DvtGaugeStyleUtils$$.$_ALTA_RECTANGLE$ = {startAngle:202.5, angleExtent:225, anchorX:100, anchorY:103, metricLabelBounds:{x:83, y:86, width:34, height:34}, indicatorLength:0.85, tickLabelHeight:20, tickLabelWidth:30, radius:60, majorTickCount:6};
$DvtGaugeStyleUtils$$.$_ANTIQUE_CIRCLE$ = {startAngle:220.5, angleExtent:261.1, anchorX:100, anchorY:100, metricLabelBounds:{x:82, y:133, width:36, height:34}, indicatorLength:0.85, tickLabelHeight:20, tickLabelWidth:30, radius:61, majorTickCount:6};
$DvtGaugeStyleUtils$$.$_ANTIQUE_DOME$ = {startAngle:195.5, angleExtent:210.8, anchorX:100, anchorY:100, metricLabelBounds:{x:84, y:135, width:32, height:35}, indicatorLength:0.98, tickLabelHeight:20, tickLabelWidth:30, radius:63, majorTickCount:6};
$DvtGaugeStyleUtils$$.$_ANTIQUE_RECTANGLE$ = {startAngle:207.6, angleExtent:235, anchorX:100, anchorY:95.8, metricLabelBounds:{x:83, y:125, width:34, height:40}, indicatorLength:1.05, tickLabelHeight:20, tickLabelWidth:30, radius:64, majorTickCount:6};
$DvtGaugeStyleUtils$$.$_LIGHT_CIRCLE$ = {startAngle:220.5, angleExtent:261.1, anchorX:100, anchorY:100, metricLabelBounds:{x:80, y:82, width:40, height:40}, indicatorLength:0.82, tickLabelHeight:20, tickLabelWidth:30, radius:58, majorTickCount:6};
$DvtGaugeStyleUtils$$.$_LIGHT_DOME$ = {startAngle:201, angleExtent:222, anchorX:100.2, anchorY:89, metricLabelBounds:{x:80, y:70, width:41, height:39}, indicatorLength:1.23, tickLabelHeight:20, tickLabelWidth:30, radius:56, majorTickCount:6};
$DvtGaugeStyleUtils$$.$_LIGHT_RECTANGLE$ = {startAngle:211, angleExtent:242, anchorX:100, anchorY:91.445, metricLabelBounds:{x:78, y:75, width:44, height:38}, indicatorLength:1.1, tickLabelHeight:20, tickLabelWidth:30, radius:58, majorTickCount:6};
$DvtGaugeStyleUtils$$.$_DARK_CIRCLE$ = {startAngle:220.5, angleExtent:261.5, metricLabelBounds:{x:80, y:82, width:40, height:40}, indicatorLength:0.85, tickLabelHeight:20, tickLabelWidth:30, radius:60, majorTickCount:6};
$DvtGaugeStyleUtils$$.$_DARK_DOME$ = {startAngle:201, angleExtent:222, anchorX:100.2, anchorY:89, metricLabelBounds:{x:80, y:73, width:40, height:36}, indicatorLength:1.23, tickLabelHeight:20, tickLabelWidth:30, radius:56, majorTickCount:6};
$DvtGaugeStyleUtils$$.$_DARK_RECTANGLE$ = {startAngle:201, angleExtent:222, anchorX:100.2, anchorY:99.5, metricLabelBounds:{x:80, y:83, width:41, height:36}, indicatorLength:1.1, tickLabelHeight:20, tickLabelWidth:30, radius:58, majorTickCount:6};
$DvtGaugeStyleUtils$$.$_ANTIQUE_INDICATOR$ = {anchorX:42, anchorY:510};
$DvtGaugeStyleUtils$$.$_ALTA_INDICATOR$ = {anchorX:187, anchorY:388};
$DvtGaugeStyleUtils$$.$_LIGHT_INDICATOR$ = {anchorX:227, anchorY:425};
$DvtGaugeStyleUtils$$.$_DARK_INDICATOR$ = {anchorX:227, anchorY:425};
$DvtGaugeStyleUtils$$.$getColor$ = function $$DvtGaugeStyleUtils$$$$getColor$$($gauge$$8$$) {
  var $options$$124$$ = $gauge$$8$$.$getOptions$(), $thresholdIndex$$ = $DvtGaugeDataUtils$$.$getValueThresholdIndex$($gauge$$8$$), $threshold$$ = $DvtGaugeDataUtils$$.$getThreshold$($gauge$$8$$, $thresholdIndex$$);
  return $threshold$$ && (!($gauge$$8$$ instanceof dvt.$StatusMeterGauge$) || $gauge$$8$$ instanceof dvt.$StatusMeterGauge$ && "onIndicator" == $options$$124$$.thresholdDisplay) ? $DvtGaugeStyleUtils$$.$getThresholdColor$($gauge$$8$$, $threshold$$, $thresholdIndex$$) : $options$$124$$.color
};
$DvtGaugeStyleUtils$$.$getBorderColor$ = function $$DvtGaugeStyleUtils$$$$getBorderColor$$($gauge$$9$$) {
  var $options$$125$$ = $gauge$$9$$.$getOptions$(), $threshold$$1_thresholdIndex$$1$$ = $DvtGaugeDataUtils$$.$getValueThresholdIndex$($gauge$$9$$);
  return($threshold$$1_thresholdIndex$$1$$ = $DvtGaugeDataUtils$$.$getThreshold$($gauge$$9$$, $threshold$$1_thresholdIndex$$1$$)) && $threshold$$1_thresholdIndex$$1$$.borderColor && (!($gauge$$9$$ instanceof dvt.$StatusMeterGauge$) || $gauge$$9$$ instanceof dvt.$StatusMeterGauge$ && "onIndicator" == $options$$125$$.thresholdDisplay) ? $threshold$$1_thresholdIndex$$1$$.borderColor : $options$$125$$.borderColor
};
$DvtGaugeStyleUtils$$.$getPlotAreaColor$ = function $$DvtGaugeStyleUtils$$$$getPlotAreaColor$$($gauge$$10$$) {
  var $options$$126$$ = $gauge$$10$$.$getOptions$(), $thresholdIndex$$2$$ = $DvtGaugeDataUtils$$.$getValueThresholdIndex$($gauge$$10$$), $threshold$$2$$ = $DvtGaugeDataUtils$$.$getThreshold$($gauge$$10$$, $thresholdIndex$$2$$);
  return $threshold$$2$$ && (!($gauge$$10$$ instanceof dvt.$StatusMeterGauge$) || $gauge$$10$$ instanceof dvt.$StatusMeterGauge$ && "onIndicator" != $options$$126$$.thresholdDisplay) ? $DvtGaugeStyleUtils$$.$getThresholdColor$($gauge$$10$$, $threshold$$2$$, $thresholdIndex$$2$$) : $options$$126$$.plotArea.color
};
$DvtGaugeStyleUtils$$.$getPlotAreaBorderColor$ = function $$DvtGaugeStyleUtils$$$$getPlotAreaBorderColor$$($gauge$$11$$) {
  var $options$$127$$ = $gauge$$11$$.$getOptions$(), $borderColor$$21$$ = $options$$127$$.plotArea.borderColor;
  return $gauge$$11$$ instanceof dvt.$StatusMeterGauge$ && "circular" != $options$$127$$.orientation && $borderColor$$21$$ == $JSCompiler_alias_NULL$$ ? "skyros" == $options$$127$$.skin ? "#C6C6C6" : "#D6DFE6" : $borderColor$$21$$
};
$DvtGaugeStyleUtils$$.$getThresholdColor$ = function $$DvtGaugeStyleUtils$$$$getThresholdColor$$($gauge$$12_options$$128$$, $threshold$$3$$, $thresholdIndex$$3$$) {
  if($threshold$$3$$.color) {
    return $threshold$$3$$.color
  }
  $gauge$$12_options$$128$$ = $gauge$$12_options$$128$$.$getOptions$();
  return $gauge$$12_options$$128$$._thresholdColors[$thresholdIndex$$3$$ % $gauge$$12_options$$128$$._thresholdColors.length]
};
$DvtGaugeStyleUtils$$.$getDialBackground$ = function $$DvtGaugeStyleUtils$$$$getDialBackground$$($backgroundType$$) {
  return"rectangleAlta" === $backgroundType$$ ? $DvtGaugeStyleUtils$$.$_ALTA_RECTANGLE$ : "domeAlta" === $backgroundType$$ ? $DvtGaugeStyleUtils$$.$_ALTA_DOME$ : "circleAntique" === $backgroundType$$ ? $DvtGaugeStyleUtils$$.$_ANTIQUE_CIRCLE$ : "rectangleAntique" === $backgroundType$$ ? $DvtGaugeStyleUtils$$.$_ANTIQUE_RECTANGLE$ : "domeAntique" === $backgroundType$$ ? $DvtGaugeStyleUtils$$.$_ANTIQUE_DOME$ : "circleLight" === $backgroundType$$ ? $DvtGaugeStyleUtils$$.$_LIGHT_CIRCLE$ : "rectangleLight" === 
  $backgroundType$$ ? $DvtGaugeStyleUtils$$.$_LIGHT_RECTANGLE$ : "domeLight" === $backgroundType$$ ? $DvtGaugeStyleUtils$$.$_LIGHT_DOME$ : "circleDark" === $backgroundType$$ ? $DvtGaugeStyleUtils$$.$_DARK_CIRCLE$ : "rectangleDark" === $backgroundType$$ ? $DvtGaugeStyleUtils$$.$_DARK_RECTANGLE$ : "domeDark" === $backgroundType$$ ? $DvtGaugeStyleUtils$$.$_DARK_DOME$ : $DvtGaugeStyleUtils$$.$_ALTA_CIRCLE$
};
$DvtGaugeStyleUtils$$.$getDialIndicator$ = function $$DvtGaugeStyleUtils$$$$getDialIndicator$$($indicatorType$$) {
  return"needleAntique" === $indicatorType$$ ? $DvtGaugeStyleUtils$$.$_ANTIQUE_INDICATOR$ : "needleLight" === $indicatorType$$ ? $DvtGaugeStyleUtils$$.$_LIGHT_INDICATOR$ : "needleDark" === $indicatorType$$ ? $DvtGaugeStyleUtils$$.$_DARK_INDICATOR$ : $DvtGaugeStyleUtils$$.$_ALTA_INDICATOR$
};
$DvtGaugeStyleUtils$$.$hasTitle$ = function $$DvtGaugeStyleUtils$$$$hasTitle$$($options$$129$$) {
  return!!$options$$129$$.title.text
};
var $DvtGaugeRenderer$$ = {};
dvt.$Obj$.$createSubclass$($DvtGaugeRenderer$$, dvt.$Obj$);
$DvtGaugeRenderer$$.$renderEmptyText$ = function $$DvtGaugeRenderer$$$$renderEmptyText$$($gauge$$13$$, $container$$84$$, $availSpace$$83$$) {
  var $labelStyle$$14_options$$130$$ = $gauge$$13$$.$getOptions$(), $emptyTextStr$$1$$ = $labelStyle$$14_options$$130$$.emptyText;
  $emptyTextStr$$1$$ || ($emptyTextStr$$1$$ = dvt.$Bundle$.$getTranslation$($labelStyle$$14_options$$130$$, "labelNoData", dvt.$Bundle$.$UTIL_PREFIX$, "NO_DATA", $JSCompiler_alias_NULL$$));
  $labelStyle$$14_options$$130$$ = $labelStyle$$14_options$$130$$._statusMessageStyle;
  $labelStyle$$14_options$$130$$.$getStyle$("font-size") || $labelStyle$$14_options$$130$$.$setStyle$("font-size", "13px");
  if($gauge$$13$$ instanceof dvt.$StatusMeterGauge$) {
    var $labelColor$$1$$ = $labelStyle$$14_options$$130$$.$getStyle$("color");
    $labelStyle$$14_options$$130$$.$setStyle$("color", $labelColor$$1$$ ? $labelColor$$1$$ : "#333333")
  }
  dvt.$TextUtils$.$renderEmptyText$($container$$84$$, $emptyTextStr$$1$$, new dvt.$Rectangle$($availSpace$$83$$.x, $availSpace$$83$$.y, $availSpace$$83$$.$w$, $availSpace$$83$$.$h$), $gauge$$13$$.$getEventManager$(), $labelStyle$$14_options$$130$$)
};
$DvtGaugeRenderer$$.$getFormattedMetricLabel$ = function $$DvtGaugeRenderer$$$$getFormattedMetricLabel$$($value$$131$$, $gauge$$14$$) {
  var $options$$131$$ = $gauge$$14$$.$getOptions$();
  return $options$$131$$.metricLabel.text ? $options$$131$$.metricLabel.text : $DvtGaugeRenderer$$.$_formatLabelValue$($value$$131$$, $gauge$$14$$, $options$$131$$.metricLabel.converter, $options$$131$$.metricLabel.scaling, $options$$131$$.metricLabel.autoPrecision ? $options$$131$$.metricLabel.autoPrecision : "on", "percent" == $options$$131$$.metricLabel.textType)
};
$DvtGaugeRenderer$$.$formatTickLabelValue$ = function $$DvtGaugeRenderer$$$$formatTickLabelValue$$($value$$132$$, $gauge$$15$$) {
  var $options$$132$$ = $gauge$$15$$.$getOptions$(), $converter$$6$$ = $JSCompiler_alias_NULL$$, $isPercent$$1$$ = "percent" == $options$$132$$.tickLabel.textType;
  "on" == $options$$132$$.tickLabel.rendered && $options$$132$$.tickLabel.converter && ($converter$$6$$ = $options$$132$$.tickLabel.converter);
  var $scaling$$2$$ = $JSCompiler_alias_NULL$$;
  "on" == $options$$132$$.tickLabel.rendered && $options$$132$$.tickLabel.scaling && ($scaling$$2$$ = $options$$132$$.tickLabel.scaling);
  return $DvtGaugeRenderer$$.$_formatLabelValue$($value$$132$$, $gauge$$15$$, $converter$$6$$, $scaling$$2$$, $options$$132$$.tickLabel.autoPrecision ? $options$$132$$.tickLabel.autoPrecision : "on", $isPercent$$1$$)
};
$DvtGaugeRenderer$$.$_formatLabelValue$ = function $$DvtGaugeRenderer$$$$_formatLabelValue$$($output_value$$133$$, $formatter$$1_gauge$$16$$, $converter$$7$$, $scaling$$3$$, $autoPrecision$$7$$, $isPercent$$2$$) {
  var $options$$133$$ = $formatter$$1_gauge$$16$$.$getOptions$(), $minValue$$8$$ = $options$$133$$.min, $maxValue$$8$$ = $options$$133$$.max, $difference$$ = $maxValue$$8$$ - $minValue$$8$$, $increment$$1$$ = $JSCompiler_alias_NULL$$;
  isNaN($difference$$) || ($increment$$1$$ = $difference$$ / (1E3 > $difference$$ ? 100 : 1E3));
  $isPercent$$2$$ && ($output_value$$133$$ = $DvtGaugeRenderer$$.$getFillPercentage$($options$$133$$, $options$$133$$.min, $output_value$$133$$, $JSCompiler_alias_TRUE$$));
  $formatter$$1_gauge$$16$$ = new dvt.$LinearScaleAxisValueFormatter$($formatter$$1_gauge$$16$$.$getCtx$(), $minValue$$8$$, $maxValue$$8$$, $increment$$1$$, $scaling$$3$$, $autoPrecision$$7$$);
  $output_value$$133$$ = $converter$$7$$ && $converter$$7$$.getAsString ? $formatter$$1_gauge$$16$$.$format$($output_value$$133$$, $converter$$7$$) : $converter$$7$$ && $converter$$7$$.format ? $formatter$$1_gauge$$16$$.$format$($output_value$$133$$, $converter$$7$$) : $isPercent$$2$$ ? Math.round(100 * $output_value$$133$$) : $formatter$$1_gauge$$16$$.$format$($output_value$$133$$);
  return $isPercent$$2$$ ? String($output_value$$133$$) + "%" : $output_value$$133$$
};
$DvtGaugeRenderer$$.$getFillPercentage$ = function $$DvtGaugeRenderer$$$$getFillPercentage$$($options$$134_percentFill$$, $min$$13$$, $value$$134$$, $unbound$$) {
  $options$$134_percentFill$$ = ($value$$134$$ - $min$$13$$) / ($options$$134_percentFill$$.max - $options$$134_percentFill$$.min);
  return $options$$134_percentFill$$ = $unbound$$ ? $options$$134_percentFill$$ : Math.min(Math.max(0, $options$$134_percentFill$$), 1)
};
$DvtGaugeRenderer$$.$getTooltipString$ = function $$DvtGaugeRenderer$$$$getTooltipString$$($gauge$$17_metricValue$$) {
  var $options$$135$$ = $gauge$$17_metricValue$$.$getOptions$(), $threshold$$4_thresholdIndex$$4$$ = $DvtGaugeDataUtils$$.$getValueThresholdIndex$($gauge$$17_metricValue$$), $threshold$$4_thresholdIndex$$4$$ = $DvtGaugeDataUtils$$.$getThreshold$($gauge$$17_metricValue$$, $threshold$$4_thresholdIndex$$4$$);
  $gauge$$17_metricValue$$ = $DvtGaugeRenderer$$.$getFormattedMetricLabel$($options$$135$$.value, $gauge$$17_metricValue$$);
  return $threshold$$4_thresholdIndex$$4$$ && $threshold$$4_thresholdIndex$$4$$.shortDesc != $JSCompiler_alias_NULL$$ ? $threshold$$4_thresholdIndex$$4$$.shortDesc : $options$$135$$.shortDesc != $JSCompiler_alias_NULL$$ ? $options$$135$$.shortDesc : $options$$135$$.title.text ? dvt.$Bundle$.$getTranslatedString$(dvt.$Bundle$.$UTIL_PREFIX$, "COLON_SEP_LIST", [$options$$135$$.title.text, $gauge$$17_metricValue$$]) : $gauge$$17_metricValue$$
};
$DvtGaugeRenderer$$.$renderLabel$ = function $$DvtGaugeRenderer$$$$renderLabel$$($gauge$$18_label$$48$$, $container$$85$$, $bounds$$45$$, $color$$31$$, $halign$$5$$, $valign$$2$$, $isRenderedByDefault_labelString$$2$$) {
  var $options$$136_size$$19$$ = $gauge$$18_label$$48$$.$getOptions$(), $minString_rendered$$3$$ = $JSCompiler_alias_FALSE$$;
  if("on" == $options$$136_size$$19$$.metricLabel.rendered || $isRenderedByDefault_labelString$$2$$ && "off" != $options$$136_size$$19$$.metricLabel.rendered) {
    $isRenderedByDefault_labelString$$2$$ = $DvtGaugeRenderer$$.$getFormattedMetricLabel$($options$$136_size$$19$$.value, $gauge$$18_label$$48$$);
    var $minString_rendered$$3$$ = $DvtGaugeRenderer$$.$getFormattedMetricLabel$($options$$136_size$$19$$.min, $gauge$$18_label$$48$$), $maxString$$ = $DvtGaugeRenderer$$.$getFormattedMetricLabel$($options$$136_size$$19$$.max, $gauge$$18_label$$48$$);
    $gauge$$18_label$$48$$ = new dvt.$OutputText$($gauge$$18_label$$48$$.$getCtx$(), $isRenderedByDefault_labelString$$2$$, $bounds$$45$$.x + $bounds$$45$$.$w$ / 2, $bounds$$45$$.y + $bounds$$45$$.$h$ / 2);
    $gauge$$18_label$$48$$.$setCSSStyle$($options$$136_size$$19$$.metricLabel.style);
    $options$$136_size$$19$$ = ($options$$136_size$$19$$ = $options$$136_size$$19$$.metricLabel.style.$getStyle$("font-size")) ? parseInt($options$$136_size$$19$$) : $JSCompiler_alias_NULL$$;
    $options$$136_size$$19$$ || ($options$$136_size$$19$$ = $DvtGaugeRenderer$$.$calcLabelFontSize$([$isRenderedByDefault_labelString$$2$$, $minString_rendered$$3$$, $maxString$$], $gauge$$18_label$$48$$, $bounds$$45$$), $gauge$$18_label$$48$$.$setTextString$($isRenderedByDefault_labelString$$2$$), $gauge$$18_label$$48$$.$setFontSize$($options$$136_size$$19$$));
    "top" == $valign$$2$$ ? ($gauge$$18_label$$48$$.$setY$($bounds$$45$$.y), $gauge$$18_label$$48$$.$alignTop$()) : "middle" == $valign$$2$$ ? dvt.$TextUtils$.$centerTextVertically$($gauge$$18_label$$48$$, $bounds$$45$$.y + $bounds$$45$$.$h$ / 2) : "bottom" == $valign$$2$$ && ($gauge$$18_label$$48$$.$setY$($bounds$$45$$.y + $bounds$$45$$.$h$), $gauge$$18_label$$48$$.$alignBottom$());
    "center" == $halign$$5$$ ? $gauge$$18_label$$48$$.$alignCenter$() : "left" == $halign$$5$$ ? ($gauge$$18_label$$48$$.$setX$($bounds$$45$$.x), $gauge$$18_label$$48$$.$alignLeft$()) : "right" == $halign$$5$$ && ($gauge$$18_label$$48$$.$setX$($bounds$$45$$.x + $bounds$$45$$.$w$), $gauge$$18_label$$48$$.$alignRight$());
    $color$$31$$ != $JSCompiler_alias_NULL$$ && $gauge$$18_label$$48$$.$setSolidFill$($color$$31$$);
    $minString_rendered$$3$$ = dvt.$TextUtils$.$fitText$($gauge$$18_label$$48$$, $bounds$$45$$.$w$, $bounds$$45$$.$h$, $container$$85$$)
  }
  return $minString_rendered$$3$$
};
$DvtGaugeRenderer$$.$renderTitle$ = function $$DvtGaugeRenderer$$$$renderTitle$$($gauge$$19_textHeight$$1$$, $container$$86$$, $bounds$$46$$, $color$$32$$, $valign$$3$$) {
  var $options$$137_title$$11$$ = $gauge$$19_textHeight$$1$$.$getOptions$(), $rendered$$4_tempTitle_titleString$$ = $JSCompiler_alias_FALSE$$;
  if($DvtGaugeStyleUtils$$.$hasTitle$($options$$137_title$$11$$)) {
    var $rendered$$4_tempTitle_titleString$$ = $options$$137_title$$11$$.title.text, $titleStyle$$ = $options$$137_title$$11$$.title.style, $options$$137_title$$11$$ = new dvt.$MultilineText$($gauge$$19_textHeight$$1$$.$getCtx$(), $rendered$$4_tempTitle_titleString$$), $fontStyle$$ = $titleStyle$$.$clone$();
    $options$$137_title$$11$$.$setCSSStyle$($titleStyle$$);
    var $size$$20$$ = $titleStyle$$.$getStyle$("font-size"), $size$$20$$ = $size$$20$$ ? parseInt($size$$20$$) : $JSCompiler_alias_NULL$$;
    $size$$20$$ || ($rendered$$4_tempTitle_titleString$$ = new dvt.$OutputText$($gauge$$19_textHeight$$1$$.$getCtx$(), $rendered$$4_tempTitle_titleString$$, 0, 0), $rendered$$4_tempTitle_titleString$$.$setCSSStyle$($titleStyle$$), $size$$20$$ = $rendered$$4_tempTitle_titleString$$.$getOptimalFontSize$($bounds$$46$$), $fontStyle$$.$setFontSize$("font-size", $size$$20$$.toString()));
    $color$$32$$ != $JSCompiler_alias_NULL$$ && $fontStyle$$.$setStyle$("color", $color$$32$$);
    $options$$137_title$$11$$.$setCSSStyle$($fontStyle$$);
    $rendered$$4_tempTitle_titleString$$ = dvt.$TextUtils$.$fitText$($options$$137_title$$11$$, $bounds$$46$$.$w$, $bounds$$46$$.$h$, $gauge$$19_textHeight$$1$$);
    $gauge$$19_textHeight$$1$$ = dvt.$TextUtils$.$getTextHeight$($options$$137_title$$11$$);
    "top" == $valign$$3$$ ? $options$$137_title$$11$$.$setY$($bounds$$46$$.y) : "bottom" == $valign$$3$$ ? $options$$137_title$$11$$.$setY$($bounds$$46$$.y + $bounds$$46$$.$h$ - $gauge$$19_textHeight$$1$$) : $options$$137_title$$11$$.$setY$($bounds$$46$$.y + $bounds$$46$$.$h$ / 2 - $gauge$$19_textHeight$$1$$ / 2);
    $options$$137_title$$11$$.$setX$($bounds$$46$$.x + $bounds$$46$$.$w$ / 2);
    $options$$137_title$$11$$.$alignCenter$();
    $container$$86$$.$addChild$($options$$137_title$$11$$)
  }
  return $rendered$$4_tempTitle_titleString$$
};
$DvtGaugeRenderer$$.$calcLabelFontSize$ = function $$DvtGaugeRenderer$$$$calcLabelFontSize$$($labels$$20$$, $label$$49$$, $bounds$$47$$) {
  for(var $maxWidth$$12$$ = 0, $maxLabel$$ = $JSCompiler_alias_NULL$$, $width$$50$$ = 0, $i$$383$$ = 0;$i$$383$$ < $labels$$20$$.length;$i$$383$$++) {
    $label$$49$$.$setTextString$($labels$$20$$[$i$$383$$]), $width$$50$$ = $label$$49$$.$measureDimensions$().$w$, $width$$50$$ > $maxWidth$$12$$ && ($maxLabel$$ = $labels$$20$$[$i$$383$$], $maxWidth$$12$$ = $width$$50$$)
  }
  $label$$49$$.$setTextString$($maxLabel$$);
  return $label$$49$$.$getOptimalFontSize$($bounds$$47$$)
};
$DvtGaugeRenderer$$.$adjustForStep$ = function $$DvtGaugeRenderer$$$$adjustForStep$$($options$$138$$, $value$$135$$) {
  var $step$$3$$ = Number($options$$138$$.step);
  if($step$$3$$ && 0 < $step$$3$$) {
    var $stepNum$$ = ($value$$135$$ - $options$$138$$.min) / $step$$3$$;
    return 0.5 < $stepNum$$ ? Math.max(Math.min($options$$138$$.max, Math.round($stepNum$$) * $step$$3$$ + $options$$138$$.min), $options$$138$$.min) : $options$$138$$.min
  }
  return $value$$135$$
};
dvt.$LedGauge$ = $JSCompiler_emptyFn$$();
$goog$exportPath_$$("dvt.LedGauge", dvt.$LedGauge$);
dvt.$Obj$.$createSubclass$(dvt.$LedGauge$, $DvtGauge$$);
dvt.$LedGauge$.newInstance = function $dvt$$LedGauge$$newInstance$($context$$168$$, $callback$$70$$, $callbackObj$$40$$, $bStaticRendering$$1$$) {
  var $gauge$$20$$ = new dvt.$LedGauge$;
  $gauge$$20$$.Init($context$$168$$, $callback$$70$$, $callbackObj$$40$$, $bStaticRendering$$1$$);
  return $gauge$$20$$
};
dvt.$LedGauge$.newInstance = dvt.$LedGauge$.newInstance;
dvt.$LedGauge$.prototype.Init = function $dvt$$LedGauge$$$Init$($context$$169$$, $callback$$71$$, $callbackObj$$41$$, $bStaticRendering$$2$$) {
  dvt.$LedGauge$.$superclass$.Init.call(this, $context$$169$$, $callback$$71$$, $callbackObj$$41$$, $bStaticRendering$$2$$);
  this.$Defaults$ = new $DvtLedGaugeDefaults$$
};
dvt.$LedGauge$.prototype.$SetOptions$ = function $dvt$$LedGauge$$$$SetOptions$$($options$$139$$) {
  dvt.$LedGauge$.$superclass$.$SetOptions$.call(this, this.$Defaults$.$calcOptions$($options$$139$$));
  "auto" == this.$Options$.animationOnDisplay && (this.$Options$.animationOnDisplay = "zoom");
  "auto" == this.$Options$.animationOnDataChange && (this.$Options$.animationOnDataChange = "alphaFade");
  this.$Options$.readOnly = $JSCompiler_alias_TRUE$$
};
dvt.$LedGauge$.prototype.$Render$ = function $dvt$$LedGauge$$$$Render$$($container$$87$$, $width$$51$$, $height$$44$$) {
  $DvtLedGaugeRenderer$$.$render$(this, $container$$87$$, $width$$51$$, $height$$44$$)
};
function $DvtLedGaugeDefaults$$() {
  this.Init({skyros:$DvtLedGaugeDefaults$VERSION_1$$, alta:{}})
}
dvt.$Obj$.$createSubclass$($DvtLedGaugeDefaults$$, $DvtGaugeDefaults$$);
var $DvtLedGaugeDefaults$VERSION_1$$ = {type:"circle"}, $DvtLedGaugeRenderer$$ = {};
dvt.$Obj$.$createSubclass$($DvtLedGaugeRenderer$$, dvt.$Obj$);
$DvtLedGaugeRenderer$$.$_SKYROS_SHAPE_TRIANGLE_CMDS$ = "M-42,36.6Q-50,36.6,-46.54,28.6L-4,-43.07Q0,-50,4,-43.07L46.54,28.6Q50,36.6,42,36.6Z";
$DvtLedGaugeRenderer$$.$_SHAPE_TRIANGLE_CMDS$ = [-50, 36.6, 0, -50, 50, 36.6];
$DvtLedGaugeRenderer$$.$_SKYROS_SHAPE_TRIANGLE_INNER_CMDS$ = [-50, 36.6, 0, -50, 50, 36.6];
$DvtLedGaugeRenderer$$.$_SKYROS_SHAPE_STAR_CMDS$ = [-13.05, -12.94, -50, -11.13, -21.06, 11.9, -30.74, 47.6, 0.1, 27.18, 31.06, 47.44, 21.17, 11.79, 50, -11.39, 13.05, -13.01, -0.06, -47.59];
$DvtLedGaugeRenderer$$.$_SHAPE_STAR_CMDS$ = [-50, -11.22, -16.69, -17.94, 0, -47.55, 16.69, -17.94, 50, -11.22, 26.69, 13.8, 30.9, 47.56, 0, 33.42, -30.9, 47.56, -26.69, 13.8];
$DvtLedGaugeRenderer$$.$_SKYROS_SHAPE_ARROW_CMDS$ = "M0,45L21,45Q24.414,44.414,25,41L25,10L42,10Q48.5,9.1,45,4L2,-38Q0,-39,-2,-38L-45,4Q-48.5,9.1,-42,10L-25,10L-25,41Q-24.414,44.414,-21,45Z";
$DvtLedGaugeRenderer$$.$_SHAPE_ARROW_CMDS$ = [25, 48, 25, 8, 47.5, 8, 0, -39, -47.5, 8, -25, 8, -25, 48];
$DvtLedGaugeRenderer$$.$_SKYROS_SHAPE_ARROW_INNER_CMDS$ = [25, 48, 25, 8, 47.5, 8, 0, -39, -47.5, 8, -25, 8, -25, 48];
$DvtLedGaugeRenderer$$.$_SHAPE_HUMAN_CMDS$ = "M -0.06059525142297417 -50.86842065108466 C -11.4496388584463 -50.86842065108466 -20.708163169810554 -39.024253028220556 -20.708163169810554 -24.413724255650386 C -20.708163169810554 -9.803195483080515 -11.4496388584463 2.040972139783591 -0.06059525142297417 2.040972139783591 C 11.328499974520241 2.040972139783591 20.586972666964613 -9.803195483080515 20.586972666964613 -24.413724255650386 C 20.586972666964613 -39.024253028220556 11.328499974520241 -50.86842065108466 -0.06059525142297417 -50.86842065108466 z M -23.93434565705865 -2.959610715450779 C -30.908061721494278 3.3998402034127153 -42.00096758564793 18.817121073473572 -38.77478509839983 33.65756051481475 C -20.651382358034887 47.30044101688934 14.372054723529814 49.13162219665128 39.298831093003386 32.85101489300273 C 40.26410489318826 16.477493533721187 32.34060070450674 4.7883891459240715 23.167918656763206 -2.959610715450779 C 11.553661702670112 21.074158341552575 -11.029615708066558 16.237465556670102 -23.93434565705865 -2.959610715450779 z ";
$DvtLedGaugeRenderer$$.$render$ = function $$DvtLedGaugeRenderer$$$$render$$($gauge$$21$$, $container$$88$$, $labelColor$$2_width$$52$$, $bounds$$48_height$$45_labelBounds$$7$$) {
  if($DvtGaugeDataUtils$$.$hasData$($gauge$$21$$)) {
    var $options$$140$$ = $gauge$$21$$.$getOptions$(), $bTitleRendered_outerGap$$1_titleValign$$ = $options$$140$$.__layout.outerGap, $size$$21_titleBounds_valign$$4$$ = $options$$140$$ && (0 <= $options$$140$$.size || 1 > $options$$140$$.size) ? Math.sqrt($options$$140$$.size) : 1;
    $bounds$$48_height$$45_labelBounds$$7$$ = new dvt.$Rectangle$($bTitleRendered_outerGap$$1_titleValign$$ + ($labelColor$$2_width$$52$$ - 2 * $bTitleRendered_outerGap$$1_titleValign$$) * (1 - $size$$21_titleBounds_valign$$4$$) / 2, $bTitleRendered_outerGap$$1_titleValign$$ + ($bounds$$48_height$$45_labelBounds$$7$$ - 2 * $bTitleRendered_outerGap$$1_titleValign$$) * (1 - $size$$21_titleBounds_valign$$4$$) / 2, ($labelColor$$2_width$$52$$ - 2 * $bTitleRendered_outerGap$$1_titleValign$$) * $size$$21_titleBounds_valign$$4$$, 
    ($bounds$$48_height$$45_labelBounds$$7$$ - 2 * $bTitleRendered_outerGap$$1_titleValign$$) * $size$$21_titleBounds_valign$$4$$);
    $DvtLedGaugeRenderer$$.$_renderShape$($gauge$$21$$, $container$$88$$, $bounds$$48_height$$45_labelBounds$$7$$);
    $DvtLedGaugeRenderer$$.$_renderVisualEffects$($gauge$$21$$, $container$$88$$, $bounds$$48_height$$45_labelBounds$$7$$);
    $bTitleRendered_outerGap$$1_titleValign$$ = $JSCompiler_alias_FALSE$$;
    $labelColor$$2_width$$52$$ = dvt.$ColorUtils$.$getContrastingTextColor$($DvtGaugeStyleUtils$$.$getColor$($gauge$$21$$));
    $DvtGaugeStyleUtils$$.$hasTitle$($options$$140$$) && ($bTitleRendered_outerGap$$1_titleValign$$ = "middle", $size$$21_titleBounds_valign$$4$$ = $DvtLedGaugeRenderer$$.$_getLabelBounds$($gauge$$21$$, $bounds$$48_height$$45_labelBounds$$7$$), "on" == $options$$140$$.metricLabel.rendered && ($size$$21_titleBounds_valign$$4$$.y += 0.6 * $size$$21_titleBounds_valign$$4$$.$h$, $size$$21_titleBounds_valign$$4$$.$h$ *= 0.4, $bTitleRendered_outerGap$$1_titleValign$$ = "top"), $bTitleRendered_outerGap$$1_titleValign$$ = 
    !dvt.$Agent$.$isHighContrast$() && $options$$140$$.title.style.$getStyle$("color") != $JSCompiler_alias_NULL$$ ? $DvtGaugeRenderer$$.$renderTitle$($gauge$$21$$, $container$$88$$, $size$$21_titleBounds_valign$$4$$, $JSCompiler_alias_NULL$$, $bTitleRendered_outerGap$$1_titleValign$$) : $DvtGaugeRenderer$$.$renderTitle$($gauge$$21$$, $container$$88$$, $size$$21_titleBounds_valign$$4$$, $labelColor$$2_width$$52$$, $bTitleRendered_outerGap$$1_titleValign$$));
    "on" == $options$$140$$.metricLabel.rendered && ($bounds$$48_height$$45_labelBounds$$7$$ = $DvtLedGaugeRenderer$$.$_getLabelBounds$($gauge$$21$$, $bounds$$48_height$$45_labelBounds$$7$$), $size$$21_titleBounds_valign$$4$$ = "middle", $bTitleRendered_outerGap$$1_titleValign$$ && ($bounds$$48_height$$45_labelBounds$$7$$.$h$ *= 0.55, $size$$21_titleBounds_valign$$4$$ = "bottom"), !dvt.$Agent$.$isHighContrast$() && $options$$140$$.metricLabel.style.$getStyle$("color") != $JSCompiler_alias_NULL$$ ? 
    $DvtGaugeRenderer$$.$renderLabel$($gauge$$21$$, $container$$88$$, $bounds$$48_height$$45_labelBounds$$7$$, $JSCompiler_alias_NULL$$, "center", $size$$21_titleBounds_valign$$4$$) : $DvtGaugeRenderer$$.$renderLabel$($gauge$$21$$, $container$$88$$, $bounds$$48_height$$45_labelBounds$$7$$, $labelColor$$2_width$$52$$, "center", $size$$21_titleBounds_valign$$4$$))
  }else {
    $DvtGaugeRenderer$$.$renderEmptyText$($gauge$$21$$, $container$$88$$, new dvt.$Rectangle$(0, 0, $labelColor$$2_width$$52$$, $bounds$$48_height$$45_labelBounds$$7$$))
  }
};
$DvtLedGaugeRenderer$$.$_renderShape$ = function $$DvtLedGaugeRenderer$$$$_renderShape$$($gauge$$22$$, $container$$89$$, $bounds$$49$$) {
  var $arColors$$8_context$$170$$ = $gauge$$22$$.$getCtx$(), $options$$141$$ = $gauge$$22$$.$getOptions$(), $type$$138$$ = $options$$141$$.type, $color$$33_rotation$$2$$ = $DvtGaugeStyleUtils$$.$getColor$($gauge$$22$$), $borderColor$$22$$ = $DvtGaugeStyleUtils$$.$getBorderColor$($gauge$$22$$), $cmds$$10_cx$$16_dim$$41_shape$$44$$ = $bounds$$49$$.x + $bounds$$49$$.$w$ / 2, $cy$$17_scaleTo100$$ = $bounds$$49$$.y + $bounds$$49$$.$h$ / 2, $r$$8$$ = Math.min($bounds$$49$$.$w$, $bounds$$49$$.$h$) / 2, 
  $isSkyros$$ = $DvtGaugeDefaults$isSkyrosSkin$$($gauge$$22$$);
  $DvtLedGaugeRenderer$$.$_cache$ || ($DvtLedGaugeRenderer$$.$_cache$ = new dvt.$Cache$(50));
  var $scale$$11$$ = Math.min($bounds$$49$$.$w$ / 100, $bounds$$49$$.$h$ / 100);
  "rectangle" == $type$$138$$ ? $cmds$$10_cx$$16_dim$$41_shape$$44$$ = new dvt.$Rect$($arColors$$8_context$$170$$, $bounds$$49$$.x, $bounds$$49$$.y, $bounds$$49$$.$w$, $bounds$$49$$.$h$) : "diamond" == $type$$138$$ ? $cmds$$10_cx$$16_dim$$41_shape$$44$$ = new dvt.$Polygon$($arColors$$8_context$$170$$, [$cmds$$10_cx$$16_dim$$41_shape$$44$$ - $r$$8$$, $cy$$17_scaleTo100$$, $cmds$$10_cx$$16_dim$$41_shape$$44$$, $cy$$17_scaleTo100$$ - $r$$8$$, $cmds$$10_cx$$16_dim$$41_shape$$44$$ + $r$$8$$, $cy$$17_scaleTo100$$, 
  $cmds$$10_cx$$16_dim$$41_shape$$44$$, $cy$$17_scaleTo100$$ + $r$$8$$]) : "circle" == $type$$138$$ ? $cmds$$10_cx$$16_dim$$41_shape$$44$$ = new dvt.$Circle$($arColors$$8_context$$170$$, $cmds$$10_cx$$16_dim$$41_shape$$44$$, $cy$$17_scaleTo100$$, $r$$8$$) : ("star" == $type$$138$$ ? $cmds$$10_cx$$16_dim$$41_shape$$44$$ = $isSkyros$$ ? $DvtLedGaugeRenderer$$.$_SKYROS_SHAPE_STAR_CMDS$ : $DvtLedGaugeRenderer$$.$_SHAPE_STAR_CMDS$ : "triangle" == $type$$138$$ ? $cmds$$10_cx$$16_dim$$41_shape$$44$$ = $isSkyros$$ ? 
  $DvtLedGaugeRenderer$$.$_SKYROS_SHAPE_TRIANGLE_CMDS$ : $DvtLedGaugeRenderer$$.$_SHAPE_TRIANGLE_CMDS$ : "arrow" == $type$$138$$ ? $cmds$$10_cx$$16_dim$$41_shape$$44$$ = $isSkyros$$ ? $DvtLedGaugeRenderer$$.$_SKYROS_SHAPE_ARROW_CMDS$ : $DvtLedGaugeRenderer$$.$_SHAPE_ARROW_CMDS$ : "human" == $type$$138$$ ? $cmds$$10_cx$$16_dim$$41_shape$$44$$ = $DvtLedGaugeRenderer$$.$_SHAPE_HUMAN_CMDS$ : ($cmds$$10_cx$$16_dim$$41_shape$$44$$ = $DvtLedGaugeRenderer$$.$_cache$.get($type$$138$$), $cmds$$10_cx$$16_dim$$41_shape$$44$$ || 
  ($cmds$$10_cx$$16_dim$$41_shape$$44$$ = new dvt.$Path$($arColors$$8_context$$170$$, $type$$138$$), $cmds$$10_cx$$16_dim$$41_shape$$44$$ = dvt.$DisplayableUtils$.$getDimForced$($arColors$$8_context$$170$$, $cmds$$10_cx$$16_dim$$41_shape$$44$$), $cy$$17_scaleTo100$$ = 100 / Math.max($cmds$$10_cx$$16_dim$$41_shape$$44$$.$w$, $cmds$$10_cx$$16_dim$$41_shape$$44$$.$h$), $cmds$$10_cx$$16_dim$$41_shape$$44$$ = dvt.$PathUtils$.$transformPath$($type$$138$$, -$cy$$17_scaleTo100$$ * ($cmds$$10_cx$$16_dim$$41_shape$$44$$.x + 
  $cmds$$10_cx$$16_dim$$41_shape$$44$$.$w$ / 2), -$cy$$17_scaleTo100$$ * ($cmds$$10_cx$$16_dim$$41_shape$$44$$.y + $cmds$$10_cx$$16_dim$$41_shape$$44$$.$h$ / 2), $cy$$17_scaleTo100$$, $cy$$17_scaleTo100$$), $DvtLedGaugeRenderer$$.$_cache$.put($type$$138$$, $cmds$$10_cx$$16_dim$$41_shape$$44$$))), !$isSkyros$$ && ("triangle" == $type$$138$$ || "arrow" == $type$$138$$) || "star" == $type$$138$$ ? ($cmds$$10_cx$$16_dim$$41_shape$$44$$ = dvt.$PolygonUtils$.scale($cmds$$10_cx$$16_dim$$41_shape$$44$$, 
  $scale$$11$$, $scale$$11$$), $cmds$$10_cx$$16_dim$$41_shape$$44$$ = dvt.$PolygonUtils$.translate($cmds$$10_cx$$16_dim$$41_shape$$44$$, $bounds$$49$$.x + $bounds$$49$$.$w$ / 2, $bounds$$49$$.y + $bounds$$49$$.$h$ / 2), $cmds$$10_cx$$16_dim$$41_shape$$44$$ = new dvt.$Polygon$($arColors$$8_context$$170$$, $cmds$$10_cx$$16_dim$$41_shape$$44$$)) : ($cmds$$10_cx$$16_dim$$41_shape$$44$$ = dvt.$PathUtils$.$transformPath$($cmds$$10_cx$$16_dim$$41_shape$$44$$, $bounds$$49$$.x + $bounds$$49$$.$w$ / 2, $bounds$$49$$.y + 
  $bounds$$49$$.$h$ / 2, $scale$$11$$, $scale$$11$$), $cmds$$10_cx$$16_dim$$41_shape$$44$$ = new dvt.$Path$($arColors$$8_context$$170$$, $cmds$$10_cx$$16_dim$$41_shape$$44$$)));
  $isSkyros$$ || "none" == $options$$141$$.visualEffects ? $cmds$$10_cx$$16_dim$$41_shape$$44$$.$setSolidFill$($color$$33_rotation$$2$$) : ($arColors$$8_context$$170$$ = [dvt.$ColorUtils$.$adjustHSL$($color$$33_rotation$$2$$, -0.09, 0.04), dvt.$ColorUtils$.$adjustHSL$($color$$33_rotation$$2$$, -0.04, -0.05)], $color$$33_rotation$$2$$ = $options$$141$$ && 0 == $options$$141$$.rotation % 90 ? $options$$141$$.rotation : 0, $cmds$$10_cx$$16_dim$$41_shape$$44$$.$setFill$(new dvt.$LinearGradientFill$("arrow" == 
  $type$$138$$ || "star" == $type$$138$$ || "triangle" == $type$$138$$ ? $color$$33_rotation$$2$$ - 90 : 270, $arColors$$8_context$$170$$, [1, 1], [0, 1])));
  $borderColor$$22$$ && $cmds$$10_cx$$16_dim$$41_shape$$44$$.$setSolidStroke$($borderColor$$22$$);
  if(($color$$33_rotation$$2$$ = $isSkyros$$ ? $options$$141$$.rotation + 90 : $options$$141$$.rotation) && ("arrow" == $type$$138$$ || "triangle" == $type$$138$$ || $cmds$$10_cx$$16_dim$$41_shape$$44$$ instanceof dvt.$Path$ && "human" != $type$$138$$)) {
    $cmds$$10_cx$$16_dim$$41_shape$$44$$ = $DvtLedGaugeRenderer$$.$_rotate$($gauge$$22$$, $container$$89$$, $cmds$$10_cx$$16_dim$$41_shape$$44$$, $bounds$$49$$)
  }
  $container$$89$$.$addChild$($cmds$$10_cx$$16_dim$$41_shape$$44$$)
};
$DvtLedGaugeRenderer$$.$_rotate$ = function $$DvtLedGaugeRenderer$$$$_rotate$$($gauge$$23_translateGroup$$, $container$$90_groupDims_matrix$$7_rotation$$3$$, $shape$$45_tx$$16$$, $bounds$$50_ty$$17$$) {
  var $options$$142_rotationMatrix$$2$$ = $gauge$$23_translateGroup$$.$getOptions$();
  $gauge$$23_translateGroup$$ = new dvt.$Container$($gauge$$23_translateGroup$$.$getCtx$());
  $container$$90_groupDims_matrix$$7_rotation$$3$$.$addChild$($gauge$$23_translateGroup$$);
  $gauge$$23_translateGroup$$.$addChild$($shape$$45_tx$$16$$);
  $container$$90_groupDims_matrix$$7_rotation$$3$$ = $options$$142_rotationMatrix$$2$$ && 0 == $options$$142_rotationMatrix$$2$$.rotation % 90 ? $options$$142_rotationMatrix$$2$$.rotation : 0;
  $options$$142_rotationMatrix$$2$$ = new dvt.$Matrix$;
  $options$$142_rotationMatrix$$2$$.rotate(Math.PI * $container$$90_groupDims_matrix$$7_rotation$$3$$ / 180);
  $shape$$45_tx$$16$$.$setMatrix$($options$$142_rotationMatrix$$2$$);
  $container$$90_groupDims_matrix$$7_rotation$$3$$ = $gauge$$23_translateGroup$$.$getDimensions$();
  $shape$$45_tx$$16$$ = $bounds$$50_ty$$17$$.x + $bounds$$50_ty$$17$$.$w$ / 2 - ($container$$90_groupDims_matrix$$7_rotation$$3$$.x + $container$$90_groupDims_matrix$$7_rotation$$3$$.$w$ / 2);
  $bounds$$50_ty$$17$$ = $bounds$$50_ty$$17$$.y + $bounds$$50_ty$$17$$.$h$ / 2 - ($container$$90_groupDims_matrix$$7_rotation$$3$$.y + $container$$90_groupDims_matrix$$7_rotation$$3$$.$h$ / 2);
  $container$$90_groupDims_matrix$$7_rotation$$3$$ = new dvt.$Matrix$;
  $container$$90_groupDims_matrix$$7_rotation$$3$$.translate($shape$$45_tx$$16$$, $bounds$$50_ty$$17$$);
  $gauge$$23_translateGroup$$.$setMatrix$($container$$90_groupDims_matrix$$7_rotation$$3$$);
  return $gauge$$23_translateGroup$$
};
$DvtLedGaugeRenderer$$.$_renderVisualEffects$ = function $$DvtLedGaugeRenderer$$$$_renderVisualEffects$$($gauge$$24$$, $container$$91$$, $bounds$$51$$) {
  var $options$$143$$ = $gauge$$24$$.$getOptions$(), $type$$139$$ = $options$$143$$.type;
  "none" != $options$$143$$.visualEffects && $DvtGaugeDefaults$isSkyrosSkin$$($gauge$$24$$) && ("circle" == $type$$139$$ ? $DvtLedGaugeRenderer$$.$_renderOverlayCircle$($gauge$$24$$, $container$$91$$, $bounds$$51$$) : "diamond" == $type$$139$$ ? $DvtLedGaugeRenderer$$.$_renderOverlayDiamond$($gauge$$24$$, $container$$91$$, $bounds$$51$$) : "triangle" == $type$$139$$ ? $DvtLedGaugeRenderer$$.$_renderOverlayTriangle$($gauge$$24$$, $container$$91$$, $bounds$$51$$) : "arrow" == $type$$139$$ ? $DvtLedGaugeRenderer$$.$_renderOverlayArrow$($gauge$$24$$, 
  $container$$91$$, $bounds$$51$$) : $DvtLedGaugeRenderer$$.$_renderOverlayRectangle$($gauge$$24$$, $container$$91$$, $bounds$$51$$))
};
$DvtLedGaugeRenderer$$.$_renderOverlayRectangle$ = function $$DvtLedGaugeRenderer$$$$_renderOverlayRectangle$$($gauge$$25_overlay$$9$$, $container$$92_gradient$$1$$, $bounds$$52_overlayBounds$$1$$) {
  var $dx$$8$$ = 0.04 * $bounds$$52_overlayBounds$$1$$.$w$, $dy$$10$$ = 0.04 * $bounds$$52_overlayBounds$$1$$.$h$;
  $bounds$$52_overlayBounds$$1$$ = new dvt.$Rectangle$($bounds$$52_overlayBounds$$1$$.x + $dx$$8$$, $bounds$$52_overlayBounds$$1$$.y + $dy$$10$$, $bounds$$52_overlayBounds$$1$$.$w$ - 2 * $dx$$8$$, $bounds$$52_overlayBounds$$1$$.$h$ - 2 * $dy$$10$$);
  $gauge$$25_overlay$$9$$ = new dvt.$Rect$($gauge$$25_overlay$$9$$.$getCtx$(), $bounds$$52_overlayBounds$$1$$.x, $bounds$$52_overlayBounds$$1$$.y, $bounds$$52_overlayBounds$$1$$.$w$, $bounds$$52_overlayBounds$$1$$.$h$);
  $gauge$$25_overlay$$9$$.$setMouseEnabled$($JSCompiler_alias_FALSE$$);
  $container$$92_gradient$$1$$.$addChild$($gauge$$25_overlay$$9$$);
  $container$$92_gradient$$1$$ = new dvt.$LinearGradientFill$(270, "#FFFFFF #FFFFFF #FFFFFF #FFFFFF #FFFFFF #FFFFFF #FFFFFF".split(" "), [0.75, 0.5, 0.15, 0, 0.2, 0.4, 0.2], [0, 0.05, 0.4, 0.6, 0.8, 0.9, 1]);
  $gauge$$25_overlay$$9$$.$setFill$($container$$92_gradient$$1$$)
};
$DvtLedGaugeRenderer$$.$_renderOverlayDiamond$ = function $$DvtLedGaugeRenderer$$$$_renderOverlayDiamond$$($gauge$$26_overlay$$10$$, $container$$93_gradient$$2$$, $bounds$$53_cx$$17$$) {
  var $cy$$18_dx$$9$$ = 0.05 * $bounds$$53_cx$$17$$.$w$, $dy$$11_overlayBounds$$2_r$$9$$ = 0.05 * $bounds$$53_cx$$17$$.$h$, $dy$$11_overlayBounds$$2_r$$9$$ = new dvt.$Rectangle$($bounds$$53_cx$$17$$.x + $cy$$18_dx$$9$$, $bounds$$53_cx$$17$$.y + $dy$$11_overlayBounds$$2_r$$9$$, $bounds$$53_cx$$17$$.$w$ - 2 * $cy$$18_dx$$9$$, $bounds$$53_cx$$17$$.$h$ - 2 * $dy$$11_overlayBounds$$2_r$$9$$);
  $bounds$$53_cx$$17$$ = $dy$$11_overlayBounds$$2_r$$9$$.x + $dy$$11_overlayBounds$$2_r$$9$$.$w$ / 2;
  $cy$$18_dx$$9$$ = $dy$$11_overlayBounds$$2_r$$9$$.y + $dy$$11_overlayBounds$$2_r$$9$$.$h$ / 2;
  $dy$$11_overlayBounds$$2_r$$9$$ = Math.min($dy$$11_overlayBounds$$2_r$$9$$.$w$, $dy$$11_overlayBounds$$2_r$$9$$.$h$) / 2;
  $gauge$$26_overlay$$10$$ = new dvt.$Polygon$($gauge$$26_overlay$$10$$.$getCtx$(), [$bounds$$53_cx$$17$$ - $dy$$11_overlayBounds$$2_r$$9$$, $cy$$18_dx$$9$$, $bounds$$53_cx$$17$$, $cy$$18_dx$$9$$ - $dy$$11_overlayBounds$$2_r$$9$$, $bounds$$53_cx$$17$$ + $dy$$11_overlayBounds$$2_r$$9$$, $cy$$18_dx$$9$$, $bounds$$53_cx$$17$$, $cy$$18_dx$$9$$ + $dy$$11_overlayBounds$$2_r$$9$$]);
  $gauge$$26_overlay$$10$$.$setMouseEnabled$($JSCompiler_alias_FALSE$$);
  $container$$93_gradient$$2$$.$addChild$($gauge$$26_overlay$$10$$);
  $container$$93_gradient$$2$$ = new dvt.$LinearGradientFill$(270, "#FFFFFF #FFFFFF #FFFFFF #FFFFFF #FFFFFF #FFFFFF #FFFFFF".split(" "), [0.75, 0.5, 0.15, 0, 0.2, 0.4, 0.2], [0, 0.05, 0.4, 0.6, 0.8, 0.9, 1]);
  $gauge$$26_overlay$$10$$.$setFill$($container$$93_gradient$$2$$)
};
$DvtLedGaugeRenderer$$.$_renderOverlayTriangle$ = function $$DvtLedGaugeRenderer$$$$_renderOverlayTriangle$$($gauge$$27$$, $container$$94$$, $bounds$$54_overlay$$11$$) {
  var $dx$$10_overlayBounds$$3$$ = 0.05 * $bounds$$54_overlay$$11$$.$w$, $cmds$$11_dy$$12_options$$144_rotation$$4$$ = 0.05 * $bounds$$54_overlay$$11$$.$h$, $gradient$$3_isSkyros$$1$$ = $DvtGaugeDefaults$isSkyrosSkin$$($gauge$$27$$), $dx$$10_overlayBounds$$3$$ = new dvt.$Rectangle$($bounds$$54_overlay$$11$$.x + $dx$$10_overlayBounds$$3$$, $bounds$$54_overlay$$11$$.y + $cmds$$11_dy$$12_options$$144_rotation$$4$$, $bounds$$54_overlay$$11$$.$w$ - 2 * $dx$$10_overlayBounds$$3$$, $bounds$$54_overlay$$11$$.$h$ - 
  2 * $cmds$$11_dy$$12_options$$144_rotation$$4$$), $cmds$$11_dy$$12_options$$144_rotation$$4$$ = $DvtLedGaugeRenderer$$.$_SKYROS_SHAPE_TRIANGLE_INNER_CMDS$, $scale$$12$$ = Math.min($dx$$10_overlayBounds$$3$$.$w$ / 100, $dx$$10_overlayBounds$$3$$.$h$ / 100), $cmds$$11_dy$$12_options$$144_rotation$$4$$ = dvt.$PolygonUtils$.scale($cmds$$11_dy$$12_options$$144_rotation$$4$$, $scale$$12$$, $scale$$12$$), $cmds$$11_dy$$12_options$$144_rotation$$4$$ = dvt.$PolygonUtils$.translate($cmds$$11_dy$$12_options$$144_rotation$$4$$, 
  $bounds$$54_overlay$$11$$.x + $bounds$$54_overlay$$11$$.$w$ / 2, $bounds$$54_overlay$$11$$.y + $bounds$$54_overlay$$11$$.$h$ / 2);
  $bounds$$54_overlay$$11$$ = new dvt.$Polygon$($gauge$$27$$.$getCtx$(), $cmds$$11_dy$$12_options$$144_rotation$$4$$);
  $cmds$$11_dy$$12_options$$144_rotation$$4$$ = ($cmds$$11_dy$$12_options$$144_rotation$$4$$ = $gauge$$27$$.$getOptions$()) && 0 == $cmds$$11_dy$$12_options$$144_rotation$$4$$.rotation % 90 ? $cmds$$11_dy$$12_options$$144_rotation$$4$$.rotation : 0;
  $gradient$$3_isSkyros$$1$$ = new dvt.$LinearGradientFill$($gradient$$3_isSkyros$$1$$ ? $cmds$$11_dy$$12_options$$144_rotation$$4$$ - 90 : 360 - $cmds$$11_dy$$12_options$$144_rotation$$4$$, ["#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF"], [0.3, 0.55, 0, 0.25, 0.1], [0, 0.05, 0.4, 0.9, 1]);
  $bounds$$54_overlay$$11$$.$setFill$($gradient$$3_isSkyros$$1$$);
  $bounds$$54_overlay$$11$$ = $DvtLedGaugeRenderer$$.$_rotate$($gauge$$27$$, $container$$94$$, $bounds$$54_overlay$$11$$, $dx$$10_overlayBounds$$3$$);
  $bounds$$54_overlay$$11$$.$setMouseEnabled$($JSCompiler_alias_FALSE$$);
  $container$$94$$.$addChild$($bounds$$54_overlay$$11$$)
};
$DvtLedGaugeRenderer$$.$_renderOverlayArrow$ = function $$DvtLedGaugeRenderer$$$$_renderOverlayArrow$$($gauge$$28$$, $container$$95$$, $bounds$$55_overlay$$12$$) {
  var $dx$$11_overlayBounds$$4$$ = 0.05 * $bounds$$55_overlay$$12$$.$w$, $cmds$$12_dy$$13_options$$145_rotation$$5$$ = 0.05 * $bounds$$55_overlay$$12$$.$h$, $gradient$$4_isSkyros$$2$$ = $DvtGaugeDefaults$isSkyrosSkin$$($gauge$$28$$), $dx$$11_overlayBounds$$4$$ = new dvt.$Rectangle$($bounds$$55_overlay$$12$$.x + $dx$$11_overlayBounds$$4$$, $bounds$$55_overlay$$12$$.y + $cmds$$12_dy$$13_options$$145_rotation$$5$$, $bounds$$55_overlay$$12$$.$w$ - 2 * $dx$$11_overlayBounds$$4$$, $bounds$$55_overlay$$12$$.$h$ - 
  2 * $cmds$$12_dy$$13_options$$145_rotation$$5$$), $cmds$$12_dy$$13_options$$145_rotation$$5$$ = $DvtLedGaugeRenderer$$.$_SKYROS_SHAPE_ARROW_INNER_CMDS$, $scale$$13$$ = Math.min($dx$$11_overlayBounds$$4$$.$w$ / 100, $dx$$11_overlayBounds$$4$$.$h$ / 100), $cmds$$12_dy$$13_options$$145_rotation$$5$$ = dvt.$PolygonUtils$.scale($cmds$$12_dy$$13_options$$145_rotation$$5$$, $scale$$13$$, $scale$$13$$), $cmds$$12_dy$$13_options$$145_rotation$$5$$ = dvt.$PolygonUtils$.translate($cmds$$12_dy$$13_options$$145_rotation$$5$$, 
  $bounds$$55_overlay$$12$$.x + $bounds$$55_overlay$$12$$.$w$ / 2, $bounds$$55_overlay$$12$$.y + $bounds$$55_overlay$$12$$.$h$ / 2);
  $bounds$$55_overlay$$12$$ = new dvt.$Polygon$($gauge$$28$$.$getCtx$(), $cmds$$12_dy$$13_options$$145_rotation$$5$$);
  $cmds$$12_dy$$13_options$$145_rotation$$5$$ = ($cmds$$12_dy$$13_options$$145_rotation$$5$$ = $gauge$$28$$.$getOptions$()) && 0 == $cmds$$12_dy$$13_options$$145_rotation$$5$$.rotation % 90 ? $cmds$$12_dy$$13_options$$145_rotation$$5$$.rotation : 0;
  $gradient$$4_isSkyros$$2$$ = new dvt.$LinearGradientFill$($gradient$$4_isSkyros$$2$$ ? $cmds$$12_dy$$13_options$$145_rotation$$5$$ - 90 : 360 - $cmds$$12_dy$$13_options$$145_rotation$$5$$, ["#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF"], [0.3, 0.55, 0, 0.25, 0.1], [0, 0.05, 0.4, 0.9, 1]);
  $bounds$$55_overlay$$12$$.$setFill$($gradient$$4_isSkyros$$2$$);
  $bounds$$55_overlay$$12$$ = $DvtLedGaugeRenderer$$.$_rotate$($gauge$$28$$, $container$$95$$, $bounds$$55_overlay$$12$$, $dx$$11_overlayBounds$$4$$);
  $bounds$$55_overlay$$12$$.$setMouseEnabled$($JSCompiler_alias_FALSE$$);
  $container$$95$$.$addChild$($bounds$$55_overlay$$12$$)
};
$DvtLedGaugeRenderer$$.$_renderOverlayCircle$ = function $$DvtLedGaugeRenderer$$$$_renderOverlayCircle$$($gauge$$29_highlight$$, $container$$96_highlightGradient$$, $bounds$$56_gradientBounds$$) {
  var $cx$$18_dx$$12$$ = 0.05 * $bounds$$56_gradientBounds$$.$w$, $cy$$19_dy$$14$$ = 0.05 * $bounds$$56_gradientBounds$$.$h$;
  $bounds$$56_gradientBounds$$ = new dvt.$Rectangle$($bounds$$56_gradientBounds$$.x + $cx$$18_dx$$12$$, $bounds$$56_gradientBounds$$.y + $cy$$19_dy$$14$$, $bounds$$56_gradientBounds$$.$w$ - 2 * $cx$$18_dx$$12$$, $bounds$$56_gradientBounds$$.$h$ - 2 * $cy$$19_dy$$14$$);
  var $cx$$18_dx$$12$$ = $bounds$$56_gradientBounds$$.x + $bounds$$56_gradientBounds$$.$w$ / 2, $cy$$19_dy$$14$$ = $bounds$$56_gradientBounds$$.y + $bounds$$56_gradientBounds$$.$h$ / 2, $radius$$12_ry$$8$$ = Math.min($bounds$$56_gradientBounds$$.$w$, $bounds$$56_gradientBounds$$.$h$) / 2, $overlay$$13_rx$$12$$ = new dvt.$Circle$($gauge$$29_highlight$$.$getCtx$(), $cx$$18_dx$$12$$, $cy$$19_dy$$14$$, $radius$$12_ry$$8$$);
  $overlay$$13_rx$$12$$.$setMouseEnabled$($JSCompiler_alias_FALSE$$);
  $container$$96_highlightGradient$$.$addChild$($overlay$$13_rx$$12$$);
  var $gradient$$5$$ = new dvt.$RadialGradientFill$(["#FFFFFF", "#FFFFFF", "#FFFFFF"], [0, 0.25, 0.5], [0.15, 0.7, 0.95], $cx$$18_dx$$12$$, $cy$$19_dy$$14$$ - 0.6 * $radius$$12_ry$$8$$, 1.5 * $radius$$12_ry$$8$$, [$bounds$$56_gradientBounds$$.x, $bounds$$56_gradientBounds$$.y, $bounds$$56_gradientBounds$$.$w$, $bounds$$56_gradientBounds$$.$h$]);
  $overlay$$13_rx$$12$$.$setFill$($gradient$$5$$);
  $overlay$$13_rx$$12$$ = 0.6 * $radius$$12_ry$$8$$;
  $radius$$12_ry$$8$$ *= 0.4;
  $cy$$19_dy$$14$$ -= 0.3 * $radius$$12_ry$$8$$;
  $gauge$$29_highlight$$ = new dvt.$Oval$($gauge$$29_highlight$$.$getCtx$(), $cx$$18_dx$$12$$, $cy$$19_dy$$14$$ - $radius$$12_ry$$8$$, $overlay$$13_rx$$12$$, $radius$$12_ry$$8$$);
  $gauge$$29_highlight$$.$setMouseEnabled$($JSCompiler_alias_FALSE$$);
  $container$$96_highlightGradient$$.$addChild$($gauge$$29_highlight$$);
  $container$$96_highlightGradient$$ = new dvt.$RadialGradientFill$(["#FFFFFF", "#FFFFFF", "#FFFFFF"], [0, 0.2, 0.5], [0.6, 0.8, 1], $cx$$18_dx$$12$$, $cy$$19_dy$$14$$, $overlay$$13_rx$$12$$, [$bounds$$56_gradientBounds$$.x, $bounds$$56_gradientBounds$$.y, $bounds$$56_gradientBounds$$.$w$, $bounds$$56_gradientBounds$$.$h$]);
  $gauge$$29_highlight$$.$setFill$($container$$96_highlightGradient$$)
};
$DvtLedGaugeRenderer$$.$_getLabelBounds$ = function $$DvtLedGaugeRenderer$$$$_getLabelBounds$$($gauge$$30$$, $bounds$$57$$) {
  var $options$$146_rotation$$6$$ = $gauge$$30$$.$getOptions$(), $type$$140$$ = $options$$146_rotation$$6$$.type, $options$$146_rotation$$6$$ = 0 == $options$$146_rotation$$6$$.rotation % 90 ? $options$$146_rotation$$6$$.rotation : 0, $minDim$$ = Math.min($bounds$$57$$.$w$, $bounds$$57$$.$h$), $newX$$2$$ = $bounds$$57$$.x + $bounds$$57$$.$w$ / 2 - $minDim$$ / 2, $newY$$3$$ = $bounds$$57$$.y + $bounds$$57$$.$h$ / 2 - $minDim$$ / 2, $newWidth$$2$$ = $minDim$$, $newHeight$$1$$ = $minDim$$;
  "triangle" == $type$$140$$ ? 0 == $options$$146_rotation$$6$$ ? ($newX$$2$$ += 0.2 * $minDim$$, $newY$$3$$ += 0.25 * $minDim$$, $newWidth$$2$$ -= 0.4 * $minDim$$, $newHeight$$1$$ -= 0.3 * $minDim$$) : 90 == $options$$146_rotation$$6$$ ? ($newX$$2$$ += 0.05 * $minDim$$, $newY$$3$$ += 0.2 * $minDim$$, $newWidth$$2$$ -= 0.3 * $minDim$$, $newHeight$$1$$ -= 0.4 * $minDim$$) : 180 == $options$$146_rotation$$6$$ ? ($newX$$2$$ += 0.2 * $minDim$$, $newY$$3$$ += 0.05 * $minDim$$, $newWidth$$2$$ -= 0.4 * 
  $minDim$$, $newHeight$$1$$ -= 0.3 * $minDim$$) : 270 == $options$$146_rotation$$6$$ && ($newX$$2$$ += 0.25 * $minDim$$, $newY$$3$$ += 0.2 * $minDim$$, $newWidth$$2$$ -= 0.3 * $minDim$$, $newHeight$$1$$ -= 0.4 * $minDim$$) : "arrow" == $type$$140$$ ? 0 == $options$$146_rotation$$6$$ ? ($newX$$2$$ += 0.2 * $minDim$$, $newY$$3$$ += 0.2 * $minDim$$, $newWidth$$2$$ -= 0.4 * $minDim$$, $newHeight$$1$$ -= 0.4 * $minDim$$) : 90 == $options$$146_rotation$$6$$ ? ($newX$$2$$ += 0.05 * $minDim$$, $newY$$3$$ += 
  0.2 * $minDim$$, $newWidth$$2$$ -= 0.28 * $minDim$$, $newHeight$$1$$ -= 0.4 * $minDim$$) : 180 == $options$$146_rotation$$6$$ ? ($newX$$2$$ += 0.2 * $minDim$$, $newY$$3$$ += 0.2 * $minDim$$, $newWidth$$2$$ -= 0.4 * $minDim$$, $newHeight$$1$$ -= 0.4 * $minDim$$) : 270 == $options$$146_rotation$$6$$ && ($newX$$2$$ += 0.23 * $minDim$$, $newY$$3$$ += 0.2 * $minDim$$, $newWidth$$2$$ -= 0.28 * $minDim$$, $newHeight$$1$$ -= 0.4 * $minDim$$) : "star" == $type$$140$$ ? ($newX$$2$$ += 0.25 * $minDim$$, $newY$$3$$ += 
  0.25 * $minDim$$, $newWidth$$2$$ -= 0.5 * $minDim$$, $newHeight$$1$$ -= 0.4 * $minDim$$) : "diamond" == $type$$140$$ ? ($newX$$2$$ += 0.15 * $minDim$$, $newY$$3$$ += 0.15 * $minDim$$, $newWidth$$2$$ -= 0.3 * $minDim$$, $newHeight$$1$$ -= 0.3 * $minDim$$) : "rectangle" == $type$$140$$ ? ($newX$$2$$ += 0.1 * $minDim$$, $newY$$3$$ += 0.1 * $minDim$$, $newWidth$$2$$ -= 0.2 * $minDim$$, $newHeight$$1$$ -= 0.2 * $minDim$$) : ($newX$$2$$ += 0.15 * $minDim$$, $newY$$3$$ += 0.15 * $minDim$$, $newWidth$$2$$ -= 
  0.3 * $minDim$$, $newHeight$$1$$ -= 0.3 * $minDim$$);
  return new dvt.$Rectangle$($newX$$2$$, $newY$$3$$, $newWidth$$2$$, $newHeight$$1$$)
};
dvt.$StatusMeterGauge$ = $JSCompiler_emptyFn$$();
$goog$exportPath_$$("dvt.StatusMeterGauge", dvt.$StatusMeterGauge$);
dvt.$Obj$.$createSubclass$(dvt.$StatusMeterGauge$, $DvtGauge$$);
dvt.$StatusMeterGauge$.newInstance = function $dvt$$StatusMeterGauge$$newInstance$($context$$171$$, $callback$$72$$, $callbackObj$$42$$) {
  var $gauge$$31$$ = new dvt.$StatusMeterGauge$;
  $gauge$$31$$.Init($context$$171$$, $callback$$72$$, $callbackObj$$42$$);
  return $gauge$$31$$
};
dvt.$StatusMeterGauge$.newInstance = dvt.$StatusMeterGauge$.newInstance;
$JSCompiler_prototypeAlias$$ = dvt.$StatusMeterGauge$.prototype;
$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($context$$172$$, $callback$$73$$, $callbackObj$$43$$) {
  dvt.$StatusMeterGauge$.$superclass$.Init.call(this, $context$$172$$, $callback$$73$$, $callbackObj$$43$$);
  this.$Defaults$ = new $DvtStatusMeterGaugeDefaults$$;
  this.$__axisInfo$ = $JSCompiler_alias_NULL$$
};
$JSCompiler_prototypeAlias$$.$SetOptions$ = function $$JSCompiler_prototypeAlias$$$$SetOptions$$($options$$147$$) {
  dvt.$StatusMeterGauge$.$superclass$.$SetOptions$.call(this, this.$Defaults$.$calcOptions$($options$$147$$))
};
$JSCompiler_prototypeAlias$$.$Render$ = function $$JSCompiler_prototypeAlias$$$$Render$$($container$$98$$, $width$$53$$, $height$$46$$) {
  $DvtStatusMeterGaugeRenderer$$.$render$(this, $container$$98$$, $width$$53$$, $height$$46$$)
};
$JSCompiler_prototypeAlias$$.$CreateAnimationOnDisplay$ = function $$JSCompiler_prototypeAlias$$$$CreateAnimationOnDisplay$$($objs$$8$$, $animatedObjs$$1_animationType$$2$$, $animationDuration$$5$$) {
  $animatedObjs$$1_animationType$$2$$ = [];
  for(var $i$$384$$ = 0;$i$$384$$ < $objs$$8$$.length;$i$$384$$++) {
    var $obj$$130$$ = $objs$$8$$[$i$$384$$], $endState$$14$$ = $obj$$130$$.$getAnimationParams$();
    "horizontal" == this.$Options$.orientation ? $obj$$130$$.$setAnimationParams$([$endState$$14$$[0], $endState$$14$$[0], $endState$$14$$[2], $endState$$14$$[3]]) : "vertical" == this.$Options$.orientation ? $obj$$130$$.$setAnimationParams$([$endState$$14$$[0], $endState$$14$$[1], $endState$$14$$[3], $endState$$14$$[3]]) : "circular" == this.$Options$.orientation && $obj$$130$$.$setAnimationParams$([$endState$$14$$[0], $endState$$14$$[1], 0, $endState$$14$$[3], $endState$$14$$[4]]);
    var $animation$$1$$ = new dvt.$CustomAnimation$(this.$getCtx$(), $obj$$130$$, $animationDuration$$5$$);
    $animation$$1$$.$_animator$.$addProp$(dvt.$Animator$.$TYPE_NUMBER_ARRAY$, $obj$$130$$, $obj$$130$$.$getAnimationParams$, $obj$$130$$.$setAnimationParams$, $endState$$14$$);
    $animation$$1$$.$_animator$.$setEasing$(function($objs$$8$$) {
      return dvt.$Easing$.$backOut$($objs$$8$$, 0.7)
    });
    $animatedObjs$$1_animationType$$2$$.push($animation$$1$$)
  }
  return new dvt.$ParallelPlayable$(this.$getCtx$(), $animatedObjs$$1_animationType$$2$$)
};
$JSCompiler_prototypeAlias$$.$GetValueAt$ = function $$JSCompiler_prototypeAlias$$$$GetValueAt$$($x$$120$$, $y$$99$$) {
  var $maxValue$$9_options$$148$$ = this.$Options$, $angle$$25_isRTL$$18$$ = dvt.$Agent$.$isRightToLeft$(this.$getCtx$());
  if("horizontal" == $maxValue$$9_options$$148$$.orientation) {
    return this.$__axisInfo$.$getBoundedValueAt$($x$$120$$)
  }
  if("vertical" == $maxValue$$9_options$$148$$.orientation) {
    return this.$__axisInfo$.$getBoundedValueAt$($y$$99$$)
  }
  if("circular" == $maxValue$$9_options$$148$$.orientation) {
    var $angleExtent$$4$$ = $maxValue$$9_options$$148$$.angleExtent, $angleRads$$3_minValue$$9_value$$136$$ = Math.atan2($y$$99$$ - this.$cy$, $x$$120$$ - this.$cx$), $angle$$25_isRTL$$18$$ = $angle$$25_isRTL$$18$$ ? 180 - (dvt.$Math$.$radsToDegrees$($angleRads$$3_minValue$$9_value$$136$$) - $maxValue$$9_options$$148$$.startAngle) : dvt.$Math$.$radsToDegrees$($angleRads$$3_minValue$$9_value$$136$$) - (360 - $maxValue$$9_options$$148$$.startAngle), $angle$$25_isRTL$$18$$ = ($angle$$25_isRTL$$18$$ + 
    720) % 360, $angleRads$$3_minValue$$9_value$$136$$ = $maxValue$$9_options$$148$$.min, $maxValue$$9_options$$148$$ = $maxValue$$9_options$$148$$.max, $angleRads$$3_minValue$$9_value$$136$$ = $angle$$25_isRTL$$18$$ / $angleExtent$$4$$ * ($maxValue$$9_options$$148$$ - $angleRads$$3_minValue$$9_value$$136$$) + $angleRads$$3_minValue$$9_value$$136$$;
    $angle$$25_isRTL$$18$$ > $angleExtent$$4$$ && ($angleRads$$3_minValue$$9_value$$136$$ = 0.5 < ($angle$$25_isRTL$$18$$ - $angleExtent$$4$$) / (360 - $angleExtent$$4$$) ? 0 : $maxValue$$9_options$$148$$);
    return $angleRads$$3_minValue$$9_value$$136$$
  }
};
function $DvtStatusMeterGaugeDefaults$$() {
  this.Init({skyros:$DvtStatusMeterGaugeDefaults$VERSION_1$$, alta:$DvtStatusMeterGaugeDefaults$SKIN_ALTA$$})
}
dvt.$Obj$.$createSubclass$($DvtStatusMeterGaugeDefaults$$, $DvtGaugeDefaults$$);
var $DvtStatusMeterGaugeDefaults$SKIN_ALTA$$ = {color:"#393737", metricLabel:{style:new dvt.$CSSStyle$("font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;")}, plotArea:{color:"#E4E8EA"}}, $DvtStatusMeterGaugeDefaults$VERSION_1$$ = {angleExtent:360, borderRadius:"auto", color:"#313842", indicatorSize:1, innerRadius:0.7, metricLabel:{style:new dvt.$CSSStyle$("font-family: tahoma, sans-serif;"), position:"auto"}, orientation:"horizontal", plotArea:{color:"#AAAAAA", rendered:"auto", borderRadius:"auto"}, 
startAngle:90, thresholdDisplay:"onIndicator"}, $DvtStatusMeterGaugeRenderer$$ = {};
dvt.$Obj$.$createSubclass$($DvtStatusMeterGaugeRenderer$$, dvt.$Obj$);
$DvtStatusMeterGaugeRenderer$$.$_MIN_CORNER_RADIUS$ = 2.5;
$DvtStatusMeterGaugeRenderer$$.$render$ = function $$DvtStatusMeterGaugeRenderer$$$$render$$($gauge$$32$$, $container$$99$$, $bounds$$58_width$$54$$, $height$$47$$) {
  if($DvtGaugeDataUtils$$.$hasData$($gauge$$32$$)) {
    var $options$$149$$ = $gauge$$32$$.$getOptions$(), $outerGap$$2$$ = $options$$149$$.__layout.outerGap;
    $bounds$$58_width$$54$$ = new dvt.$Rectangle$($outerGap$$2$$, $outerGap$$2$$, $bounds$$58_width$$54$$ - 2 * $outerGap$$2$$, $height$$47$$ - 2 * $outerGap$$2$$);
    "horizontal" == $options$$149$$.orientation || "vertical" == $options$$149$$.orientation ? ($DvtStatusMeterGaugeRenderer$$.$_hasMetricLabelOutsidePlotArea$($options$$149$$) && $DvtStatusMeterGaugeRenderer$$.$_renderLabelOutsidePlotArea$($gauge$$32$$, $container$$99$$, $bounds$$58_width$$54$$), $DvtStatusMeterGaugeRenderer$$.$_renderShape$($gauge$$32$$, $container$$99$$, $bounds$$58_width$$54$$)) : "circular" == $options$$149$$.orientation && $DvtStatusMeterGaugeRenderer$$.$_renderCircularGauge$($gauge$$32$$, 
    $container$$99$$, $bounds$$58_width$$54$$)
  }else {
    $DvtGaugeRenderer$$.$renderEmptyText$($gauge$$32$$, $container$$99$$, new dvt.$Rectangle$(0, 0, $bounds$$58_width$$54$$, $height$$47$$))
  }
};
$DvtStatusMeterGaugeRenderer$$.$_renderCircularGauge$ = function $$DvtStatusMeterGaugeRenderer$$$$_renderCircularGauge$$($gauge$$33$$, $container$$100$$, $bounds$$59$$) {
  var $options$$150$$ = $gauge$$33$$.$getOptions$(), $innerRadiusLength_isRTL$$19_referenceLineWidth$$ = dvt.$Agent$.$isRightToLeft$($gauge$$33$$.$getCtx$()), $angleExtent$$5_max$$14_percentFill$$1$$ = 0, $labelBounds$$8_maxInnerDiameter_plotAreaBorderColor$$1$$ = $JSCompiler_alias_NULL$$, $angle$$26_value$$137$$ = $options$$150$$.value, $innerRadius$$1_referenceObjects$$1_totalWidth$$4$$ = $options$$150$$.innerRadius, $plotAreaColor_referenceLineColor_thresholds$$3$$ = $options$$150$$.thresholds, 
  $i$$385_maxDiameter$$ = $JSCompiler_alias_NULL$$, $startAngleRads$$1$$ = dvt.$Math$.$TWO_PI$ - dvt.$Math$.$degreesToRads$($options$$150$$.startAngle), $angleExtentRads$$2$$ = dvt.$Math$.$degreesToRads$($options$$150$$.angleExtent), $endAngle$$3_outerRadius_referenceLineStyle$$ = ($startAngleRads$$1$$ + $angleExtentRads$$2$$) % (2 * Math.PI);
  $gauge$$33$$.$cx$ = $bounds$$59$$.$w$ / 2;
  $gauge$$33$$.$cy$ = $bounds$$59$$.$h$ / 2;
  $angleExtentRads$$2$$ != 2 * Math.PI && ($labelBounds$$8_maxInnerDiameter_plotAreaBorderColor$$1$$ = $DvtStatusMeterGaugeRenderer$$.$_adjustCenterAndBounds$($gauge$$33$$, $innerRadius$$1_referenceObjects$$1_totalWidth$$4$$, $startAngleRads$$1$$, $angleExtentRads$$2$$, $endAngle$$3_outerRadius_referenceLineStyle$$, $bounds$$59$$, $innerRadiusLength_isRTL$$19_referenceLineWidth$$));
  var $i$$385_maxDiameter$$ = $i$$385_maxDiameter$$ ? $i$$385_maxDiameter$$ : Math.min($bounds$$59$$.$w$, $bounds$$59$$.$h$), $innerRadiusLength_isRTL$$19_referenceLineWidth$$ = 0.5 * $i$$385_maxDiameter$$ * $innerRadius$$1_referenceObjects$$1_totalWidth$$4$$, $endAngle$$3_outerRadius_referenceLineStyle$$ = 0.5 * $i$$385_maxDiameter$$, $indicatorSize$$ = $options$$150$$.indicatorSize;
  if($indicatorSize$$ && 1 < $indicatorSize$$) {
    var $labelValign_spaceWidth_startAngle$$6$$ = (1 - 1 / $indicatorSize$$) / 2 * ($endAngle$$3_outerRadius_referenceLineStyle$$ - $innerRadiusLength_isRTL$$19_referenceLineWidth$$), $innerRadiusLength_isRTL$$19_referenceLineWidth$$ = $innerRadiusLength_isRTL$$19_referenceLineWidth$$ + $labelValign_spaceWidth_startAngle$$6$$, $endAngle$$3_outerRadius_referenceLineStyle$$ = $endAngle$$3_outerRadius_referenceLineStyle$$ - $labelValign_spaceWidth_startAngle$$6$$
  }
  $labelValign_spaceWidth_startAngle$$6$$ = "middle";
  $labelBounds$$8_maxInnerDiameter_plotAreaBorderColor$$1$$ || ($labelBounds$$8_maxInnerDiameter_plotAreaBorderColor$$1$$ = Math.min($bounds$$59$$.$w$, $bounds$$59$$.$h$) * $innerRadius$$1_referenceObjects$$1_totalWidth$$4$$, $innerRadius$$1_referenceObjects$$1_totalWidth$$4$$ ? $innerRadius$$1_referenceObjects$$1_totalWidth$$4$$ * Math.min($bounds$$59$$.$w$, $bounds$$59$$.$h$) : Math.min($bounds$$59$$.$w$, $bounds$$59$$.$h$), $labelBounds$$8_maxInnerDiameter_plotAreaBorderColor$$1$$ = new dvt.$Rectangle$($bounds$$59$$.x + 
  $bounds$$59$$.$w$ / 2 - $labelBounds$$8_maxInnerDiameter_plotAreaBorderColor$$1$$ * (3 / 7), $bounds$$59$$.y + $bounds$$59$$.$h$ / 2 - $labelBounds$$8_maxInnerDiameter_plotAreaBorderColor$$1$$ * (2.5 / 7), $labelBounds$$8_maxInnerDiameter_plotAreaBorderColor$$1$$ * (6 / 7), $labelBounds$$8_maxInnerDiameter_plotAreaBorderColor$$1$$ * (5 / 7)));
  var $bTitleRendered$$1_currentThresholdIndex_titleValign$$1$$ = $JSCompiler_alias_FALSE$$;
  if($DvtGaugeStyleUtils$$.$hasTitle$($options$$150$$)) {
    var $bTitleRendered$$1_currentThresholdIndex_titleValign$$1$$ = "middle", $thresholdColor_titleSpace$$3$$ = new dvt.$Rectangle$($labelBounds$$8_maxInnerDiameter_plotAreaBorderColor$$1$$.x, $labelBounds$$8_maxInnerDiameter_plotAreaBorderColor$$1$$.y, $labelBounds$$8_maxInnerDiameter_plotAreaBorderColor$$1$$.$w$, $labelBounds$$8_maxInnerDiameter_plotAreaBorderColor$$1$$.$h$);
    "off" != $options$$150$$.metricLabel.rendered && ($thresholdColor_titleSpace$$3$$.y += 0.6 * $thresholdColor_titleSpace$$3$$.$h$, $thresholdColor_titleSpace$$3$$.$h$ *= 0.4, $bTitleRendered$$1_currentThresholdIndex_titleValign$$1$$ = "top");
    if(($bTitleRendered$$1_currentThresholdIndex_titleValign$$1$$ = $DvtGaugeRenderer$$.$renderTitle$($gauge$$33$$, $container$$100$$, $thresholdColor_titleSpace$$3$$, $JSCompiler_alias_NULL$$, $bTitleRendered$$1_currentThresholdIndex_titleValign$$1$$)) && "off" != $options$$150$$.metricLabel.rendered) {
      $labelBounds$$8_maxInnerDiameter_plotAreaBorderColor$$1$$.$h$ *= 0.55, $labelValign_spaceWidth_startAngle$$6$$ = "bottom"
    }
  }
  $DvtGaugeRenderer$$.$renderLabel$($gauge$$33$$, $container$$100$$, $labelBounds$$8_maxInnerDiameter_plotAreaBorderColor$$1$$, $JSCompiler_alias_NULL$$, "center", $labelValign_spaceWidth_startAngle$$6$$, $JSCompiler_alias_TRUE$$);
  $labelValign_spaceWidth_startAngle$$6$$ = $startAngleRads$$1$$;
  $angleExtent$$5_max$$14_percentFill$$1$$ *= $angleExtentRads$$2$$;
  $labelBounds$$8_maxInnerDiameter_plotAreaBorderColor$$1$$ = $DvtGaugeStyleUtils$$.$getPlotAreaBorderColor$($gauge$$33$$);
  if($plotAreaColor_referenceLineColor_thresholds$$3$$ && "off" != $options$$150$$.plotArea.rendered && "all" == $options$$150$$.thresholdDisplay) {
    for($bTitleRendered$$1_currentThresholdIndex_titleValign$$1$$ = 0;$bTitleRendered$$1_currentThresholdIndex_titleValign$$1$$ < $plotAreaColor_referenceLineColor_thresholds$$3$$.length;$bTitleRendered$$1_currentThresholdIndex_titleValign$$1$$++) {
      var $thresholdColor_titleSpace$$3$$ = $DvtGaugeStyleUtils$$.$getThresholdColor$($gauge$$33$$, $plotAreaColor_referenceLineColor_thresholds$$3$$[$bTitleRendered$$1_currentThresholdIndex_titleValign$$1$$], $bTitleRendered$$1_currentThresholdIndex_titleValign$$1$$), $angleExtent$$5_max$$14_percentFill$$1$$ = $plotAreaColor_referenceLineColor_thresholds$$3$$[$bTitleRendered$$1_currentThresholdIndex_titleValign$$1$$].max < $options$$150$$.max ? $plotAreaColor_referenceLineColor_thresholds$$3$$[$bTitleRendered$$1_currentThresholdIndex_titleValign$$1$$].max : 
      $options$$150$$.max, $min$$14_thresholdborderColor$$ = 0 == $bTitleRendered$$1_currentThresholdIndex_titleValign$$1$$ ? $options$$150$$.min : $plotAreaColor_referenceLineColor_thresholds$$3$$[$bTitleRendered$$1_currentThresholdIndex_titleValign$$1$$ - 1].max, $labelValign_spaceWidth_startAngle$$6$$ = $startAngleRads$$1$$ + $angleExtentRads$$2$$ * $DvtGaugeRenderer$$.$getFillPercentage$($options$$150$$, $options$$150$$.min, $min$$14_thresholdborderColor$$), $angleExtent$$5_max$$14_percentFill$$1$$ = 
      $DvtGaugeRenderer$$.$getFillPercentage$($options$$150$$, $min$$14_thresholdborderColor$$, $angleExtent$$5_max$$14_percentFill$$1$$), $angleExtent$$5_max$$14_percentFill$$1$$ = $angleExtent$$5_max$$14_percentFill$$1$$ * $angleExtentRads$$2$$, $min$$14_thresholdborderColor$$ = $plotAreaColor_referenceLineColor_thresholds$$3$$[$bTitleRendered$$1_currentThresholdIndex_titleValign$$1$$].borderColor;
      $DvtStatusMeterGaugeRenderer$$.$_drawCircularArc$($gauge$$33$$, $container$$100$$, $bounds$$59$$, $labelValign_spaceWidth_startAngle$$6$$, $angleExtent$$5_max$$14_percentFill$$1$$, $innerRadiusLength_isRTL$$19_referenceLineWidth$$, $endAngle$$3_outerRadius_referenceLineStyle$$, $thresholdColor_titleSpace$$3$$, $JSCompiler_alias_TRUE$$, $min$$14_thresholdborderColor$$ ? $min$$14_thresholdborderColor$$ : $labelBounds$$8_maxInnerDiameter_plotAreaBorderColor$$1$$)
    }
  }else {
    "off" != $options$$150$$.plotArea.rendered && "all" != $options$$150$$.thresholdDisplay && ($plotAreaColor_referenceLineColor_thresholds$$3$$ = $DvtGaugeStyleUtils$$.$getPlotAreaColor$($gauge$$33$$), $DvtStatusMeterGaugeRenderer$$.$_drawCircularArc$($gauge$$33$$, $container$$100$$, $bounds$$59$$, $startAngleRads$$1$$, $angleExtentRads$$2$$, $innerRadiusLength_isRTL$$19_referenceLineWidth$$, $endAngle$$3_outerRadius_referenceLineStyle$$, $plotAreaColor_referenceLineColor_thresholds$$3$$, $JSCompiler_alias_TRUE$$, 
    $labelBounds$$8_maxInnerDiameter_plotAreaBorderColor$$1$$))
  }
  $innerRadiusLength_isRTL$$19_referenceLineWidth$$ = 0.5 * $i$$385_maxDiameter$$ * $innerRadius$$1_referenceObjects$$1_totalWidth$$4$$;
  $endAngle$$3_outerRadius_referenceLineStyle$$ = 0.5 * $i$$385_maxDiameter$$;
  $indicatorSize$$ && 1 > $indicatorSize$$ && ($innerRadius$$1_referenceObjects$$1_totalWidth$$4$$ = (1 - $indicatorSize$$) / 2 * ($endAngle$$3_outerRadius_referenceLineStyle$$ - $innerRadiusLength_isRTL$$19_referenceLineWidth$$), $innerRadiusLength_isRTL$$19_referenceLineWidth$$ += $innerRadius$$1_referenceObjects$$1_totalWidth$$4$$, $endAngle$$3_outerRadius_referenceLineStyle$$ -= $innerRadius$$1_referenceObjects$$1_totalWidth$$4$$);
  $angleExtent$$5_max$$14_percentFill$$1$$ = $DvtGaugeRenderer$$.$getFillPercentage$($options$$150$$, $options$$150$$.min, $angle$$26_value$$137$$);
  $DvtStatusMeterGaugeRenderer$$.$_drawCircularArc$($gauge$$33$$, $container$$100$$, $bounds$$59$$, $startAngleRads$$1$$, $angleExtent$$5_max$$14_percentFill$$1$$ * $angleExtentRads$$2$$, $innerRadiusLength_isRTL$$19_referenceLineWidth$$, $endAngle$$3_outerRadius_referenceLineStyle$$, $DvtGaugeStyleUtils$$.$getColor$($gauge$$33$$), $JSCompiler_alias_FALSE$$);
  if($innerRadius$$1_referenceObjects$$1_totalWidth$$4$$ = $options$$150$$.referenceLines) {
    for($i$$385_maxDiameter$$ = 0;$i$$385_maxDiameter$$ < $innerRadius$$1_referenceObjects$$1_totalWidth$$4$$.length;$i$$385_maxDiameter$$++) {
      $plotAreaColor_referenceLineColor_thresholds$$3$$ = $innerRadius$$1_referenceObjects$$1_totalWidth$$4$$[$i$$385_maxDiameter$$].color ? $innerRadius$$1_referenceObjects$$1_totalWidth$$4$$[$i$$385_maxDiameter$$].color : "black", $innerRadiusLength_isRTL$$19_referenceLineWidth$$ = $innerRadius$$1_referenceObjects$$1_totalWidth$$4$$[$i$$385_maxDiameter$$].lineWidth ? $innerRadius$$1_referenceObjects$$1_totalWidth$$4$$[$i$$385_maxDiameter$$].lineWidth : 2, $endAngle$$3_outerRadius_referenceLineStyle$$ = 
      $innerRadius$$1_referenceObjects$$1_totalWidth$$4$$[$i$$385_maxDiameter$$].lineStyle, $angle$$26_value$$137$$ = $innerRadius$$1_referenceObjects$$1_totalWidth$$4$$[$i$$385_maxDiameter$$].value, $angle$$26_value$$137$$ = $startAngleRads$$1$$ + $DvtGaugeRenderer$$.$getFillPercentage$($options$$150$$, $options$$150$$.min, $angle$$26_value$$137$$) * $angleExtentRads$$2$$, $DvtStatusMeterGaugeRenderer$$.$_drawCircularReferenceLine$($gauge$$33$$, $container$$100$$, $bounds$$59$$, $angle$$26_value$$137$$, 
      $plotAreaColor_referenceLineColor_thresholds$$3$$, $innerRadiusLength_isRTL$$19_referenceLineWidth$$, $endAngle$$3_outerRadius_referenceLineStyle$$)
    }
  }
};
$DvtStatusMeterGaugeRenderer$$.$_renderShape$ = function $$DvtStatusMeterGaugeRenderer$$$$_renderShape$$($gauge$$34$$, $container$$101$$, $bounds$$60$$) {
  var $options$$151$$ = $gauge$$34$$.$getOptions$(), $color$$34_isRTL$$20$$ = dvt.$Agent$.$isRightToLeft$($gauge$$34$$.$getCtx$()), $isVert$$6_labelPosition$$5$$ = "vertical" == $options$$151$$.orientation, $axisInfo$$16_axisOptions$$17$$ = {layout:{}};
  $axisInfo$$16_axisOptions$$17$$.layout.gapRatio = 0;
  $axisInfo$$16_axisOptions$$17$$.timeAxisType = "disabled";
  $axisInfo$$16_axisOptions$$17$$.position = $isVert$$6_labelPosition$$5$$ ? "left" : "bottom";
  $axisInfo$$16_axisOptions$$17$$.min = $options$$151$$.min;
  $axisInfo$$16_axisOptions$$17$$.max = $options$$151$$.max;
  $axisInfo$$16_axisOptions$$17$$.dataMin = $options$$151$$.min;
  $axisInfo$$16_axisOptions$$17$$.dataMax = $options$$151$$.max;
  $axisInfo$$16_axisOptions$$17$$.tickLabel = {rendered:"off"};
  $axisInfo$$16_axisOptions$$17$$ = dvt.$AxisInfo$.newInstance($gauge$$34$$.$getCtx$(), $axisInfo$$16_axisOptions$$17$$, $bounds$$60$$);
  $gauge$$34$$.$__axisInfo$ = $axisInfo$$16_axisOptions$$17$$;
  var $baseline$$9_indicatorX1$$ = 0;
  0 >= $options$$151$$.max ? $baseline$$9_indicatorX1$$ = $options$$151$$.max : 0 <= $options$$151$$.min && ($baseline$$9_indicatorX1$$ = $options$$151$$.min);
  var $baselineCoord$$8_i$$386_overlay$$14_plotAreaColor$$1_shape$$46$$ = $axisInfo$$16_axisOptions$$17$$.$getCoordAt$($baseline$$9_indicatorX1$$);
  "off" != $options$$151$$.plotArea.rendered && !("auto" == $options$$151$$.plotArea.rendered && "onIndicator" == $options$$151$$.thresholdDisplay) && ($baselineCoord$$8_i$$386_overlay$$14_plotAreaColor$$1_shape$$46$$ = $axisInfo$$16_axisOptions$$17$$.$getUnboundedCoordAt$($options$$151$$.min));
  var $endCoord$$8_gradientAngle$$1_referenceObjects$$2$$ = $axisInfo$$16_axisOptions$$17$$.$getUnboundedCoordAt$($options$$151$$.value), $endCoord$$8_gradientAngle$$1_referenceObjects$$2$$ = $isVert$$6_labelPosition$$5$$ ? Math.max($bounds$$60$$.y, Math.min($bounds$$60$$.y + $bounds$$60$$.$h$, $endCoord$$8_gradientAngle$$1_referenceObjects$$2$$)) : Math.max($bounds$$60$$.x, Math.min($bounds$$60$$.x + $bounds$$60$$.$w$, $endCoord$$8_gradientAngle$$1_referenceObjects$$2$$)), $bRender_indicatorSize$$1_referenceLine_yCoord$$7$$ = 
  $options$$151$$.indicatorSize, $indicatorX2$$, $indicatorY1$$, $drawnIndicatorSize_indicatorY2$$, $plotX1$$, $plotX2$$, $plotY1$$, $drawnPlotSize_plotY2$$ = 0, $drawnPlotSize_plotY2$$ = 1 > $bRender_indicatorSize$$1_referenceLine_yCoord$$7$$ ? 1 : $bRender_indicatorSize$$1_referenceLine_yCoord$$7$$;
  $drawnIndicatorSize_indicatorY2$$ = 1 < $bRender_indicatorSize$$1_referenceLine_yCoord$$7$$ ? 1 : $bRender_indicatorSize$$1_referenceLine_yCoord$$7$$;
  $isVert$$6_labelPosition$$5$$ ? ($baseline$$9_indicatorX1$$ = $bounds$$60$$.x + (1 - $drawnIndicatorSize_indicatorY2$$) / 2 * $bounds$$60$$.$w$ + 0.5, $indicatorX2$$ = $bounds$$60$$.x + $bounds$$60$$.$w$ * (1 + $drawnIndicatorSize_indicatorY2$$) / 2 - 0.5, $drawnIndicatorSize_indicatorY2$$ = $baselineCoord$$8_i$$386_overlay$$14_plotAreaColor$$1_shape$$46$$ - 0.5, $indicatorY1$$ = $endCoord$$8_gradientAngle$$1_referenceObjects$$2$$ + 0.5, $plotX1$$ = $bounds$$60$$.x + (1 - 1 / $drawnPlotSize_plotY2$$) / 
  2 * $bounds$$60$$.$w$, $plotX2$$ = $bounds$$60$$.x + $bounds$$60$$.$w$ * (1 + 1 / $drawnPlotSize_plotY2$$) / 2, $plotY1$$ = $bounds$$60$$.y, $drawnPlotSize_plotY2$$ = $bounds$$60$$.y + $bounds$$60$$.$h$) : ($baseline$$9_indicatorX1$$ = $color$$34_isRTL$$20$$ ? $baselineCoord$$8_i$$386_overlay$$14_plotAreaColor$$1_shape$$46$$ - 0.5 : $baselineCoord$$8_i$$386_overlay$$14_plotAreaColor$$1_shape$$46$$ + 0.5, $indicatorX2$$ = $color$$34_isRTL$$20$$ ? $endCoord$$8_gradientAngle$$1_referenceObjects$$2$$ + 
  0.5 : $endCoord$$8_gradientAngle$$1_referenceObjects$$2$$ - 0.5, $indicatorY1$$ = $bounds$$60$$.y + (1 - $drawnIndicatorSize_indicatorY2$$) / 2 * $bounds$$60$$.$h$ + 0.5, $drawnIndicatorSize_indicatorY2$$ = $bounds$$60$$.y + $bounds$$60$$.$h$ * (1 + $drawnIndicatorSize_indicatorY2$$) / 2 - 0.5, $plotX1$$ = $bounds$$60$$.x, $plotX2$$ = $bounds$$60$$.x + $bounds$$60$$.$w$, $plotY1$$ = $bounds$$60$$.y + (1 - 1 / $drawnPlotSize_plotY2$$) / 2 * $bounds$$60$$.$h$, $drawnPlotSize_plotY2$$ = $bounds$$60$$.y + 
  $bounds$$60$$.$h$ * (1 + 1 / $drawnPlotSize_plotY2$$) / 2);
  $bRender_indicatorSize$$1_referenceLine_yCoord$$7$$ = $JSCompiler_alias_TRUE$$;
  $endCoord$$8_gradientAngle$$1_referenceObjects$$2$$ == $baselineCoord$$8_i$$386_overlay$$14_plotAreaColor$$1_shape$$46$$ && ($isVert$$6_labelPosition$$5$$ ? $indicatorY1$$ = $drawnIndicatorSize_indicatorY2$$ : $baseline$$9_indicatorX1$$ = $indicatorX2$$, $bRender_indicatorSize$$1_referenceLine_yCoord$$7$$ = $JSCompiler_alias_FALSE$$);
  var $borderColor$$23_refColor_shadow$$2_stroke$$57$$ = $DvtGaugeStyleUtils$$.$getBorderColor$($gauge$$34$$), $arColors$$14_gradient$$6_plotAreaBorderColor$$2_xCoord$$10$$ = $DvtGaugeStyleUtils$$.$getPlotAreaBorderColor$($gauge$$34$$), $thresholds$$4_value$$138$$ = $options$$151$$.thresholds, $endCoord$$8_gradientAngle$$1_referenceObjects$$2$$ = $isVert$$6_labelPosition$$5$$ ? 0 : 270;
  if($thresholds$$4_value$$138$$ && "off" != $options$$151$$.plotArea.rendered && "all" == $options$$151$$.thresholdDisplay) {
    for($baselineCoord$$8_i$$386_overlay$$14_plotAreaColor$$1_shape$$46$$ = $thresholds$$4_value$$138$$.length - 1;0 <= $baselineCoord$$8_i$$386_overlay$$14_plotAreaColor$$1_shape$$46$$;$baselineCoord$$8_i$$386_overlay$$14_plotAreaColor$$1_shape$$46$$--) {
      var $currentThresholdIndex$$1$$ = $baselineCoord$$8_i$$386_overlay$$14_plotAreaColor$$1_shape$$46$$, $plotArea$$3_referenceLineSize$$ = $DvtStatusMeterGaugeRenderer$$.$_createShape$($gauge$$34$$, $gauge$$34$$.$getCtx$(), $plotX1$$, $plotX2$$, $plotY1$$, $drawnPlotSize_plotY2$$), $cp$$2_thresholdBorderColor$$ = new dvt.$ClipPath$("pacp" + $gauge$$34$$.getId());
      if($baselineCoord$$8_i$$386_overlay$$14_plotAreaColor$$1_shape$$46$$ == $thresholds$$4_value$$138$$.length - 1) {
        !$isVert$$6_labelPosition$$5$$ && $color$$34_isRTL$$20$$ ? $cp$$2_thresholdBorderColor$$.$addRect$($axisInfo$$16_axisOptions$$17$$.$getUnboundedCoordAt$($options$$151$$.max) + 1, 0, $bounds$$60$$.$w$ + 2, $bounds$$60$$.$h$ + 2, 0, 0) : $cp$$2_thresholdBorderColor$$.$addRect$(0, 0, $bounds$$60$$.$w$ + 2, $bounds$$60$$.$h$ + 2, 0, 0)
      }else {
        if($isVert$$6_labelPosition$$5$$) {
          $cp$$2_thresholdBorderColor$$.$addRect$(0, $axisInfo$$16_axisOptions$$17$$.$getUnboundedCoordAt$($options$$151$$.max), $bounds$$60$$.$w$ + 2, 1 * ($options$$151$$.max - $thresholds$$4_value$$138$$[$thresholds$$4_value$$138$$.length - 2 - $currentThresholdIndex$$1$$].max) / Math.abs($options$$151$$.min - $options$$151$$.max) * $bounds$$60$$.$h$, 0, 0)
        }else {
          if($color$$34_isRTL$$20$$) {
            var $thresholdMax$$ = $thresholds$$4_value$$138$$[$thresholds$$4_value$$138$$.length - 2 - $currentThresholdIndex$$1$$].max == $JSCompiler_alias_NULL$$ ? 100 : $thresholds$$4_value$$138$$[$thresholds$$4_value$$138$$.length - 2 - $currentThresholdIndex$$1$$].max;
            $cp$$2_thresholdBorderColor$$.$addRect$($axisInfo$$16_axisOptions$$17$$.$getUnboundedCoordAt$($options$$151$$.max), 0, 1 * ($options$$151$$.max - $thresholdMax$$) / Math.abs($options$$151$$.min - $options$$151$$.max) * $bounds$$60$$.$w$, $bounds$$60$$.$h$ + 2, 0, 0)
          }else {
            $cp$$2_thresholdBorderColor$$.$addRect$(0, 0, 1 * ($thresholds$$4_value$$138$$[$currentThresholdIndex$$1$$].max - $options$$151$$.min) / Math.abs($options$$151$$.min - $options$$151$$.max) * $bounds$$60$$.$w$, $bounds$$60$$.$h$ + 2, 0, 0)
          }
        }
      }
      $plotArea$$3_referenceLineSize$$.$setClipPath$($cp$$2_thresholdBorderColor$$);
      if($color$$34_isRTL$$20$$ || $isVert$$6_labelPosition$$5$$) {
        $currentThresholdIndex$$1$$ = $thresholds$$4_value$$138$$.length - 1 - $baselineCoord$$8_i$$386_overlay$$14_plotAreaColor$$1_shape$$46$$
      }
      $plotArea$$3_referenceLineSize$$.$setSolidFill$($DvtGaugeStyleUtils$$.$getThresholdColor$($gauge$$34$$, $thresholds$$4_value$$138$$[$currentThresholdIndex$$1$$], $currentThresholdIndex$$1$$));
      $cp$$2_thresholdBorderColor$$ = $thresholds$$4_value$$138$$[$currentThresholdIndex$$1$$].borderColor;
      $plotArea$$3_referenceLineSize$$.$setSolidStroke$($cp$$2_thresholdBorderColor$$ ? $cp$$2_thresholdBorderColor$$ : $arColors$$14_gradient$$6_plotAreaBorderColor$$2_xCoord$$10$$);
      $DvtStatusMeterGaugeRenderer$$.$_renderPlotAreaVisualEffects$($gauge$$34$$, $container$$101$$, $plotArea$$3_referenceLineSize$$, $DvtGaugeStyleUtils$$.$getThresholdColor$($gauge$$34$$, $thresholds$$4_value$$138$$[$currentThresholdIndex$$1$$], $currentThresholdIndex$$1$$), $endCoord$$8_gradientAngle$$1_referenceObjects$$2$$)
    }
  }else {
    "off" != $options$$151$$.plotArea.rendered && (!("auto" == $options$$151$$.plotArea.rendered && "onIndicator" == $options$$151$$.thresholdDisplay) && "all" != $options$$151$$.thresholdDisplay) && ($plotArea$$3_referenceLineSize$$ = $isVert$$6_labelPosition$$5$$ ? $DvtStatusMeterGaugeRenderer$$.$_createShape$($gauge$$34$$, $gauge$$34$$.$getCtx$(), $plotX1$$, $plotX2$$, $axisInfo$$16_axisOptions$$17$$.$getUnboundedCoordAt$($options$$151$$.max), $axisInfo$$16_axisOptions$$17$$.$getUnboundedCoordAt$($options$$151$$.min)) : 
    $DvtStatusMeterGaugeRenderer$$.$_createShape$($gauge$$34$$, $gauge$$34$$.$getCtx$(), $axisInfo$$16_axisOptions$$17$$.$getUnboundedCoordAt$($options$$151$$.min), $axisInfo$$16_axisOptions$$17$$.$getUnboundedCoordAt$($options$$151$$.max), $plotY1$$, $drawnPlotSize_plotY2$$), $baselineCoord$$8_i$$386_overlay$$14_plotAreaColor$$1_shape$$46$$ = $DvtGaugeStyleUtils$$.$getPlotAreaColor$($gauge$$34$$), $plotArea$$3_referenceLineSize$$.$setSolidFill$($baselineCoord$$8_i$$386_overlay$$14_plotAreaColor$$1_shape$$46$$), 
    $plotArea$$3_referenceLineSize$$.$setSolidStroke$($arColors$$14_gradient$$6_plotAreaBorderColor$$2_xCoord$$10$$), $DvtStatusMeterGaugeRenderer$$.$_renderPlotAreaVisualEffects$($gauge$$34$$, $container$$101$$, $plotArea$$3_referenceLineSize$$, $baselineCoord$$8_i$$386_overlay$$14_plotAreaColor$$1_shape$$46$$, $endCoord$$8_gradientAngle$$1_referenceObjects$$2$$))
  }
  $baselineCoord$$8_i$$386_overlay$$14_plotAreaColor$$1_shape$$46$$ = new $DvtStatusMeterGaugeIndicator$$($gauge$$34$$, $gauge$$34$$.$getCtx$(), $baseline$$9_indicatorX1$$, $indicatorX2$$, $indicatorY1$$, $drawnIndicatorSize_indicatorY2$$);
  $gauge$$34$$.$__shapes$.push($baselineCoord$$8_i$$386_overlay$$14_plotAreaColor$$1_shape$$46$$);
  $color$$34_isRTL$$20$$ = $DvtGaugeStyleUtils$$.$getColor$($gauge$$34$$);
  !$DvtGaugeDefaults$isSkyrosSkin$$($gauge$$34$$) && "none" != $options$$151$$.visualEffects ? ($arColors$$14_gradient$$6_plotAreaBorderColor$$2_xCoord$$10$$ = [dvt.$ColorUtils$.$adjustHSL$($color$$34_isRTL$$20$$, -0.09, 0.04), dvt.$ColorUtils$.$adjustHSL$($color$$34_isRTL$$20$$, -0.04, -0.05)], $arColors$$14_gradient$$6_plotAreaBorderColor$$2_xCoord$$10$$ = new dvt.$LinearGradientFill$($endCoord$$8_gradientAngle$$1_referenceObjects$$2$$, $arColors$$14_gradient$$6_plotAreaBorderColor$$2_xCoord$$10$$, 
  [1, 1], [0, 1]), $baselineCoord$$8_i$$386_overlay$$14_plotAreaColor$$1_shape$$46$$.$setFill$($arColors$$14_gradient$$6_plotAreaBorderColor$$2_xCoord$$10$$)) : $baselineCoord$$8_i$$386_overlay$$14_plotAreaColor$$1_shape$$46$$.$setSolidFill$($color$$34_isRTL$$20$$);
  $borderColor$$23_refColor_shadow$$2_stroke$$57$$ && $baselineCoord$$8_i$$386_overlay$$14_plotAreaColor$$1_shape$$46$$.$setSolidStroke$($borderColor$$23_refColor_shadow$$2_stroke$$57$$);
  $bRender_indicatorSize$$1_referenceLine_yCoord$$7$$ && $container$$101$$.$addChild$($baselineCoord$$8_i$$386_overlay$$14_plotAreaColor$$1_shape$$46$$);
  $baselineCoord$$8_i$$386_overlay$$14_plotAreaColor$$1_shape$$46$$ = $DvtStatusMeterGaugeRenderer$$.$_createShape$($gauge$$34$$, $gauge$$34$$.$getCtx$(), $baseline$$9_indicatorX1$$, $indicatorX2$$, $indicatorY1$$, $drawnIndicatorSize_indicatorY2$$);
  $DvtStatusMeterGaugeRenderer$$.$_renderVisualEffects$($gauge$$34$$, $container$$101$$, $baselineCoord$$8_i$$386_overlay$$14_plotAreaColor$$1_shape$$46$$, $bRender_indicatorSize$$1_referenceLine_yCoord$$7$$, $endCoord$$8_gradientAngle$$1_referenceObjects$$2$$);
  if($endCoord$$8_gradientAngle$$1_referenceObjects$$2$$ = $options$$151$$.referenceLines) {
    for($baselineCoord$$8_i$$386_overlay$$14_plotAreaColor$$1_shape$$46$$ = 0;$baselineCoord$$8_i$$386_overlay$$14_plotAreaColor$$1_shape$$46$$ < $endCoord$$8_gradientAngle$$1_referenceObjects$$2$$.length;$baselineCoord$$8_i$$386_overlay$$14_plotAreaColor$$1_shape$$46$$++) {
      $borderColor$$23_refColor_shadow$$2_stroke$$57$$ = $endCoord$$8_gradientAngle$$1_referenceObjects$$2$$[$baselineCoord$$8_i$$386_overlay$$14_plotAreaColor$$1_shape$$46$$].color ? $endCoord$$8_gradientAngle$$1_referenceObjects$$2$$[$baselineCoord$$8_i$$386_overlay$$14_plotAreaColor$$1_shape$$46$$].color : "white", $thresholds$$4_value$$138$$ = $endCoord$$8_gradientAngle$$1_referenceObjects$$2$$[$baselineCoord$$8_i$$386_overlay$$14_plotAreaColor$$1_shape$$46$$].value, $bRender_indicatorSize$$1_referenceLine_yCoord$$7$$ = 
      $options$$151$$.indicatorSize, $isVert$$6_labelPosition$$5$$ ? ($plotArea$$3_referenceLineSize$$ = ((1 - $bRender_indicatorSize$$1_referenceLine_yCoord$$7$$) / 2 + $bRender_indicatorSize$$1_referenceLine_yCoord$$7$$) * $bounds$$60$$.$w$, $arColors$$14_gradient$$6_plotAreaBorderColor$$2_xCoord$$10$$ = $bounds$$60$$.x + (1 - $bRender_indicatorSize$$1_referenceLine_yCoord$$7$$) / 4 * $bounds$$60$$.$w$, $bRender_indicatorSize$$1_referenceLine_yCoord$$7$$ = $axisInfo$$16_axisOptions$$17$$.$getUnboundedCoordAt$($thresholds$$4_value$$138$$), 
      $bRender_indicatorSize$$1_referenceLine_yCoord$$7$$ = new dvt.$Line$($gauge$$34$$.$getCtx$(), $arColors$$14_gradient$$6_plotAreaBorderColor$$2_xCoord$$10$$, $bRender_indicatorSize$$1_referenceLine_yCoord$$7$$, $arColors$$14_gradient$$6_plotAreaBorderColor$$2_xCoord$$10$$ + $plotArea$$3_referenceLineSize$$, $bRender_indicatorSize$$1_referenceLine_yCoord$$7$$)) : ($plotArea$$3_referenceLineSize$$ = ((1 - $bRender_indicatorSize$$1_referenceLine_yCoord$$7$$) / 2 + $bRender_indicatorSize$$1_referenceLine_yCoord$$7$$) * 
      $bounds$$60$$.$h$, $arColors$$14_gradient$$6_plotAreaBorderColor$$2_xCoord$$10$$ = $axisInfo$$16_axisOptions$$17$$.$getUnboundedCoordAt$($thresholds$$4_value$$138$$), $bRender_indicatorSize$$1_referenceLine_yCoord$$7$$ = $bounds$$60$$.y + (1 - $bRender_indicatorSize$$1_referenceLine_yCoord$$7$$) / 4 * $bounds$$60$$.$h$, $bRender_indicatorSize$$1_referenceLine_yCoord$$7$$ = new dvt.$Line$($gauge$$34$$.$getCtx$(), $arColors$$14_gradient$$6_plotAreaBorderColor$$2_xCoord$$10$$, $bRender_indicatorSize$$1_referenceLine_yCoord$$7$$, 
      $arColors$$14_gradient$$6_plotAreaBorderColor$$2_xCoord$$10$$, $bRender_indicatorSize$$1_referenceLine_yCoord$$7$$ + $plotArea$$3_referenceLineSize$$)), $borderColor$$23_refColor_shadow$$2_stroke$$57$$ = new dvt.$SolidStroke$($borderColor$$23_refColor_shadow$$2_stroke$$57$$, 1, $endCoord$$8_gradientAngle$$1_referenceObjects$$2$$[$baselineCoord$$8_i$$386_overlay$$14_plotAreaColor$$1_shape$$46$$].lineWidth ? $endCoord$$8_gradientAngle$$1_referenceObjects$$2$$[$baselineCoord$$8_i$$386_overlay$$14_plotAreaColor$$1_shape$$46$$].lineWidth : 
      2), $endCoord$$8_gradientAngle$$1_referenceObjects$$2$$[$baselineCoord$$8_i$$386_overlay$$14_plotAreaColor$$1_shape$$46$$].lineStyle && $borderColor$$23_refColor_shadow$$2_stroke$$57$$.$setStyle$(dvt.$Stroke$.$convertTypeString$($endCoord$$8_gradientAngle$$1_referenceObjects$$2$$[$baselineCoord$$8_i$$386_overlay$$14_plotAreaColor$$1_shape$$46$$].lineStyle)), $bRender_indicatorSize$$1_referenceLine_yCoord$$7$$.$setStroke$($borderColor$$23_refColor_shadow$$2_stroke$$57$$), $container$$101$$.$addChild$($bRender_indicatorSize$$1_referenceLine_yCoord$$7$$), 
      !dvt.$Agent$.$isPlatformIE$() && "none" != $options$$151$$.visualEffects && ($borderColor$$23_refColor_shadow$$2_stroke$$57$$ = new dvt.$Shadow$(dvt.$ColorUtils$.$makeRGBA$(0, 0, 0, 0.8), 0.75, 3, 3, 50, 1, 2, $JSCompiler_alias_FALSE$$, $JSCompiler_alias_FALSE$$, $JSCompiler_alias_FALSE$$), $bRender_indicatorSize$$1_referenceLine_yCoord$$7$$.$addDrawEffect$($borderColor$$23_refColor_shadow$$2_stroke$$57$$))
    }
  }
  $isVert$$6_labelPosition$$5$$ = $options$$151$$.metricLabel.position;
  "on" == $options$$151$$.metricLabel.rendered && !$DvtStatusMeterGaugeRenderer$$.$_hasMetricLabelOutsidePlotArea$($options$$151$$) && !$DvtGaugeStyleUtils$$.$hasTitle$($options$$151$$) ? $DvtStatusMeterGaugeRenderer$$.$_renderLabelInsidePlotArea$($gauge$$34$$, $container$$101$$, $bounds$$60$$, $color$$34_isRTL$$20$$, $isVert$$6_labelPosition$$5$$, {$x1$:$baseline$$9_indicatorX1$$, $x2$:$indicatorX2$$, $y1$:$indicatorY1$$, $y2$:$drawnIndicatorSize_indicatorY2$$}, {$x1$:$plotX1$$, $x2$:$plotX2$$, 
  $y1$:$plotY1$$, $y2$:$drawnPlotSize_plotY2$$}) : $DvtGaugeStyleUtils$$.$hasTitle$($options$$151$$) && $DvtStatusMeterGaugeRenderer$$.$_renderTitle$($gauge$$34$$, $container$$101$$, $bounds$$60$$, $isVert$$6_labelPosition$$5$$)
};
$DvtStatusMeterGaugeRenderer$$.$_createShape$ = function $$DvtStatusMeterGaugeRenderer$$$$_createShape$$($defaultValue_gauge$$35$$, $context$$173$$, $width$$55_x1$$25$$, $multiplier_x2$$23$$, $height$$48_y1$$18$$, $options$$152_y2$$17$$) {
  var $cmds$$13_x$$121$$ = Math.min($width$$55_x1$$25$$, $multiplier_x2$$23$$), $y$$100$$ = Math.min($height$$48_y1$$18$$, $options$$152_y2$$17$$);
  $width$$55_x1$$25$$ = Math.abs($width$$55_x1$$25$$ - $multiplier_x2$$23$$);
  $height$$48_y1$$18$$ = Math.abs($options$$152_y2$$17$$ - $height$$48_y1$$18$$);
  $options$$152_y2$$17$$ = $defaultValue_gauge$$35$$.$getOptions$();
  $multiplier_x2$$23$$ = "vertical" == $options$$152_y2$$17$$.orientation ? $width$$55_x1$$25$$ : $height$$48_y1$$18$$;
  $defaultValue_gauge$$35$$ = $DvtGaugeDefaults$isSkyrosSkin$$($defaultValue_gauge$$35$$) ? "25%" : "15%";
  $cmds$$13_x$$121$$ = $DvtStatusMeterGaugeRenderer$$.$rectangleWithBorderRadius$($cmds$$13_x$$121$$, $y$$100$$, $width$$55_x1$$25$$, $height$$48_y1$$18$$, "auto" != $options$$152_y2$$17$$.plotArea.borderRadius ? $options$$152_y2$$17$$.plotArea.borderRadius : $options$$152_y2$$17$$.borderRadius, $multiplier_x2$$23$$, $defaultValue_gauge$$35$$);
  return new dvt.$Path$($context$$173$$, $cmds$$13_x$$121$$)
};
$DvtStatusMeterGaugeRenderer$$.$_renderVisualEffects$ = function $$DvtStatusMeterGaugeRenderer$$$$_renderVisualEffects$$($gauge$$36$$, $container$$102$$, $shape$$47$$, $bRender$$1$$, $gradient$$7_gradientAngle$$2$$) {
  "none" != $gauge$$36$$.$getOptions$().visualEffects && $DvtGaugeDefaults$isSkyrosSkin$$($gauge$$36$$) && ($gradient$$7_gradientAngle$$2$$ = new dvt.$LinearGradientFill$($gradient$$7_gradientAngle$$2$$, ["#FFFFFF", "#FFFFFF", "#FFFFFF"], [0.5, 0.3125, 0], [0, 0.3, 1]), $shape$$47$$.$setFill$($gradient$$7_gradientAngle$$2$$), $gauge$$36$$.$__shapes$.push($shape$$47$$), $shape$$47$$.$setMouseEnabled$($JSCompiler_alias_FALSE$$), $bRender$$1$$ && $container$$102$$.$addChild$($shape$$47$$))
};
$DvtStatusMeterGaugeRenderer$$.$_renderPlotAreaVisualEffects$ = function $$DvtStatusMeterGaugeRenderer$$$$_renderPlotAreaVisualEffects$$($arColors$$16_gauge$$37$$, $container$$103$$, $shape$$48$$, $color$$35$$, $gradient$$8_gradientAngle$$3$$) {
  var $options$$154$$ = $arColors$$16_gauge$$37$$.$getOptions$();
  $shape$$48$$.$setMouseEnabled$($JSCompiler_alias_FALSE$$);
  $container$$103$$.$addChild$($shape$$48$$);
  "none" != $options$$154$$.visualEffects && ($DvtGaugeDefaults$isSkyrosSkin$$($arColors$$16_gauge$$37$$) ? ($arColors$$16_gauge$$37$$ = [dvt.$ColorUtils$.$getDarker$($color$$35$$, 0.9), $color$$35$$, dvt.$ColorUtils$.$getBrighter$($color$$35$$)], $gradient$$8_gradientAngle$$3$$ = new dvt.$LinearGradientFill$($gradient$$8_gradientAngle$$3$$, $arColors$$16_gauge$$37$$, [1, 1, 1], [0, 0.04, 0.73])) : ($arColors$$16_gauge$$37$$ = [dvt.$ColorUtils$.$adjustHSL$($color$$35$$, -0.04, -0.05), dvt.$ColorUtils$.$adjustHSL$($color$$35$$, 
  -0.09, 0.04)], $gradient$$8_gradientAngle$$3$$ = new dvt.$LinearGradientFill$($gradient$$8_gradientAngle$$3$$, $arColors$$16_gauge$$37$$, [1, 1], [0, 1])), $shape$$48$$.$setFill$($gradient$$8_gradientAngle$$3$$))
};
$DvtStatusMeterGaugeRenderer$$.$_renderLabelOutsidePlotArea$ = function $$DvtStatusMeterGaugeRenderer$$$$_renderLabelOutsidePlotArea$$($gauge$$38$$, $container$$104$$, $bounds$$61$$) {
  var $computedLabelBounds_options$$155$$ = $gauge$$38$$.$getOptions$(), $isRTL$$21$$ = dvt.$Agent$.$isRightToLeft$($gauge$$38$$.$getCtx$()), $isVert$$7_size$$22$$ = "vertical" == $computedLabelBounds_options$$155$$.orientation, $label$$50$$ = new dvt.$OutputText$($gauge$$38$$.$getCtx$(), ""), $labelString$$3$$ = $DvtGaugeRenderer$$.$getFormattedMetricLabel$($computedLabelBounds_options$$155$$.value, $gauge$$38$$), $labelGap$$ = $computedLabelBounds_options$$155$$.__layout.labelGap, $labelStyle$$15_minLabelDims$$1$$ = 
  $computedLabelBounds_options$$155$$.metricLabel.style, $labelColor$$3_minLabel$$ = $labelStyle$$15_minLabelDims$$1$$.$getStyle$("color"), $labelColor$$3_minLabel$$ = $labelColor$$3_minLabel$$ ? $labelColor$$3_minLabel$$ : "#333333", $maxLabel$$1_maxLabelDims$$1_minValue$$10$$ = $JSCompiler_alias_NULL$$;
  $label$$50$$.$setCSSStyle$($labelStyle$$15_minLabelDims$$1$$);
  $label$$50$$.$setSolidFill$($labelColor$$3_minLabel$$);
  if($isVert$$7_size$$22$$ && "on" == $computedLabelBounds_options$$155$$.metricLabel.rendered) {
    var $bound$$4_labelSpace_maxValue$$10$$ = 0 < $computedLabelBounds_options$$155$$.max ? $computedLabelBounds_options$$155$$.max : $computedLabelBounds_options$$155$$.min, $bound$$4_labelSpace_maxValue$$10$$ = $DvtGaugeRenderer$$.$getFormattedMetricLabel$($bound$$4_labelSpace_maxValue$$10$$, $gauge$$38$$), $maxLabel$$1_maxLabelDims$$1_minValue$$10$$ = new dvt.$OutputText$($gauge$$38$$.$getCtx$(), $bound$$4_labelSpace_maxValue$$10$$);
    $maxLabel$$1_maxLabelDims$$1_minValue$$10$$.$setCSSStyle$($labelStyle$$15_minLabelDims$$1$$);
    $computedLabelBounds_options$$155$$ = new dvt.$Rectangle$($bounds$$61$$.x, $bounds$$61$$.y + 0.8 * $bounds$$61$$.$h$, $bounds$$61$$.$w$, 0.2 * $bounds$$61$$.$h$);
    $isVert$$7_size$$22$$ = ($isVert$$7_size$$22$$ = $labelStyle$$15_minLabelDims$$1$$.$getStyle$("font-size")) ? parseInt($isVert$$7_size$$22$$) : $maxLabel$$1_maxLabelDims$$1_minValue$$10$$.$getOptimalFontSize$($computedLabelBounds_options$$155$$);
    $maxLabel$$1_maxLabelDims$$1_minValue$$10$$ = $maxLabel$$1_maxLabelDims$$1_minValue$$10$$.$measureDimensions$();
    $bounds$$61$$.$h$ -= $maxLabel$$1_maxLabelDims$$1_minValue$$10$$.$h$;
    $bound$$4_labelSpace_maxValue$$10$$ = $maxLabel$$1_maxLabelDims$$1_minValue$$10$$.$w$;
    $label$$50$$.$setFontSize$($isVert$$7_size$$22$$);
    $label$$50$$.$setTextString$($labelString$$3$$);
    $label$$50$$.$setX$($bounds$$61$$.x + $bounds$$61$$.$w$ / 2);
    $label$$50$$.$setY$($bounds$$61$$.y + $bounds$$61$$.$h$);
    $bounds$$61$$.$h$ -= $labelGap$$;
    $label$$50$$.$alignCenter$();
    dvt.$TextUtils$.$fitText$($label$$50$$, $bounds$$61$$.$w$, $bounds$$61$$.$h$, $container$$104$$)
  }else {
    if(!$isVert$$7_size$$22$$ && "on" == $computedLabelBounds_options$$155$$.metricLabel.rendered) {
      $isVert$$7_size$$22$$ = $labelStyle$$15_minLabelDims$$1$$.$getStyle$("font-size");
      $labelColor$$3_minLabel$$ = $DvtGaugeRenderer$$.$getFormattedMetricLabel$($computedLabelBounds_options$$155$$.min, $gauge$$38$$);
      $maxLabel$$1_maxLabelDims$$1_minValue$$10$$ = $DvtGaugeRenderer$$.$getFormattedMetricLabel$($computedLabelBounds_options$$155$$.max, $gauge$$38$$);
      $isVert$$7_size$$22$$ === $JSCompiler_alias_VOID$$ && 18 > $bounds$$61$$.$h$ && ($isVert$$7_size$$22$$ = $DvtGaugeRenderer$$.$calcLabelFontSize$([$labelString$$3$$, $labelColor$$3_minLabel$$, $maxLabel$$1_maxLabelDims$$1_minValue$$10$$], $label$$50$$, $bounds$$61$$));
      $isVert$$7_size$$22$$ = $isVert$$7_size$$22$$ ? parseInt($isVert$$7_size$$22$$) : 13;
      $label$$50$$.$setFontSize$($isVert$$7_size$$22$$);
      var $alignCoord$$;
      if(0 < $computedLabelBounds_options$$155$$.max || "off" != $computedLabelBounds_options$$155$$.plotArea.rendered || !("auto" == $computedLabelBounds_options$$155$$.plotArea.rendered && "onIndicator" == $computedLabelBounds_options$$155$$.thresholdDisplay)) {
        $bound$$4_labelSpace_maxValue$$10$$ = 0 < $computedLabelBounds_options$$155$$.max ? $computedLabelBounds_options$$155$$.max : $computedLabelBounds_options$$155$$.min, $bound$$4_labelSpace_maxValue$$10$$ = $DvtGaugeRenderer$$.$getFormattedMetricLabel$($bound$$4_labelSpace_maxValue$$10$$, $gauge$$38$$), $maxLabel$$1_maxLabelDims$$1_minValue$$10$$ = new dvt.$OutputText$($gauge$$38$$.$getCtx$(), $bound$$4_labelSpace_maxValue$$10$$), $maxLabel$$1_maxLabelDims$$1_minValue$$10$$.$setCSSStyle$($labelStyle$$15_minLabelDims$$1$$), 
        $maxLabel$$1_maxLabelDims$$1_minValue$$10$$.$setFontSize$($isVert$$7_size$$22$$), $maxLabel$$1_maxLabelDims$$1_minValue$$10$$ = $maxLabel$$1_maxLabelDims$$1_minValue$$10$$.$measureDimensions$(), $maxLabel$$1_maxLabelDims$$1_minValue$$10$$.$w$ = Math.min($maxLabel$$1_maxLabelDims$$1_minValue$$10$$.$w$, $bounds$$61$$.$w$), $alignCoord$$ = $isRTL$$21$$ ? $bounds$$61$$.x + $maxLabel$$1_maxLabelDims$$1_minValue$$10$$.$w$ : $bounds$$61$$.x + $bounds$$61$$.$w$, $bound$$4_labelSpace_maxValue$$10$$ = 
        $maxLabel$$1_maxLabelDims$$1_minValue$$10$$.$w$, $isRTL$$21$$ && ($bounds$$61$$.x += $maxLabel$$1_maxLabelDims$$1_minValue$$10$$.$w$ + $labelGap$$), $bounds$$61$$.$w$ -= $maxLabel$$1_maxLabelDims$$1_minValue$$10$$.$w$ + $labelGap$$
      }
      if(0 > $computedLabelBounds_options$$155$$.min && "on" != $computedLabelBounds_options$$155$$.plotArea.rendered && !("auto" == $computedLabelBounds_options$$155$$.plotArea.rendered && "onIndicator" == $computedLabelBounds_options$$155$$.thresholdDisplay)) {
        $maxLabel$$1_maxLabelDims$$1_minValue$$10$$ = $DvtGaugeRenderer$$.$getFormattedMetricLabel$($computedLabelBounds_options$$155$$.min, $gauge$$38$$);
        $labelColor$$3_minLabel$$ = new dvt.$OutputText$($gauge$$38$$.$getCtx$(), $maxLabel$$1_maxLabelDims$$1_minValue$$10$$);
        $labelColor$$3_minLabel$$.$setCSSStyle$($labelStyle$$15_minLabelDims$$1$$);
        $labelColor$$3_minLabel$$.$setFontSize$($isVert$$7_size$$22$$);
        $labelStyle$$15_minLabelDims$$1$$ = $labelColor$$3_minLabel$$.$measureDimensions$();
        if(0 > $computedLabelBounds_options$$155$$.value || 0 >= $computedLabelBounds_options$$155$$.max) {
          $alignCoord$$ = $isRTL$$21$$ ? $bounds$$61$$.x + $bounds$$61$$.$w$ : $bounds$$61$$.x + $labelStyle$$15_minLabelDims$$1$$.$w$, $bound$$4_labelSpace_maxValue$$10$$ = $labelStyle$$15_minLabelDims$$1$$.$w$
        }
        $isRTL$$21$$ || ($bounds$$61$$.x += $labelStyle$$15_minLabelDims$$1$$.$w$ + $labelGap$$);
        $bounds$$61$$.$w$ -= $labelStyle$$15_minLabelDims$$1$$.$w$ + $labelGap$$
      }
      $label$$50$$.$setTextString$($labelString$$3$$);
      $label$$50$$.$setX$($alignCoord$$);
      dvt.$TextUtils$.$centerTextVertically$($label$$50$$, $bounds$$61$$.y + $bounds$$61$$.$h$ / 2);
      $label$$50$$.$alignRight$();
      dvt.$TextUtils$.$fitText$($label$$50$$, $bound$$4_labelSpace_maxValue$$10$$, $bounds$$61$$.$h$, $container$$104$$)
    }
  }
};
$DvtStatusMeterGaugeRenderer$$.$_renderLabelInsidePlotArea$ = function $$DvtStatusMeterGaugeRenderer$$$$_renderLabelInsidePlotArea$$($gauge$$39$$, $container$$105$$, $bounds$$62$$, $color$$36$$, $labelPosition$$6$$, $indicator$$7$$, $plotArea$$4$$, $repeatedTry$$) {
  var $labelColor$$4_options$$156$$ = $gauge$$39$$.$getOptions$(), $isRTL$$22$$ = dvt.$Agent$.$isRightToLeft$($gauge$$39$$.$getCtx$()), $isVert$$8$$ = "vertical" == $labelColor$$4_options$$156$$.orientation, $plotAreaRendered$$ = "on" == $labelColor$$4_options$$156$$.plotArea.rendered, $hAlignment$$ = "center", $vAlignment$$ = "middle", $labelSpace$$1$$ = new dvt.$Rectangle$(Math.min($indicator$$7$$.$x1$, $indicator$$7$$.$x2$), Math.min($indicator$$7$$.$y1$, $indicator$$7$$.$y2$), Math.abs($indicator$$7$$.$x2$ - 
  $indicator$$7$$.$x1$), Math.abs($indicator$$7$$.$y2$ - $indicator$$7$$.$y1$)), $labelColor$$4_options$$156$$ = $labelColor$$4_options$$156$$.metricLabel.style.$getStyle$("color");
  "center" == $labelPosition$$6$$ ? ($labelColor$$4_options$$156$$ = $labelColor$$4_options$$156$$ ? $labelColor$$4_options$$156$$ : dvt.$ColorUtils$.$getContrastingTextColor$($color$$36$$), $isVert$$8$$ ? ($labelSpace$$1$$.$h$ -= $labelSpace$$1$$.$w$, $labelSpace$$1$$.y += $labelSpace$$1$$.$w$ / 2) : ($labelSpace$$1$$.$w$ -= $labelSpace$$1$$.$h$, $labelSpace$$1$$.x += $labelSpace$$1$$.$h$ / 2)) : "insideIndicatorEdge" == $labelPosition$$6$$ ? ($labelColor$$4_options$$156$$ = $labelColor$$4_options$$156$$ ? 
  $labelColor$$4_options$$156$$ : dvt.$ColorUtils$.$getContrastingTextColor$($color$$36$$), $isVert$$8$$ ? ($labelSpace$$1$$.$h$ -= $labelSpace$$1$$.$w$, $labelSpace$$1$$.y += $labelSpace$$1$$.$w$ / 2, $vAlignment$$ = !$plotAreaRendered$$ && $indicator$$7$$.$y1$ > $indicator$$7$$.$y2$ ? "bottom" : "top") : ($labelSpace$$1$$.$w$ -= $labelSpace$$1$$.$h$, $labelSpace$$1$$.x += $labelSpace$$1$$.$h$ / 2, $hAlignment$$ = $isRTL$$22$$ ? !$plotAreaRendered$$ && $indicator$$7$$.$x1$ < $indicator$$7$$.$x2$ ? 
  "right" : "left" : !$plotAreaRendered$$ && $indicator$$7$$.$x1$ > $indicator$$7$$.$x2$ ? "left" : "right")) : "outsideIndicatorEdge" == $labelPosition$$6$$ && ($isVert$$8$$ ? ($labelSpace$$1$$.$h$ = Math.abs($plotArea$$4$$.$y1$ - $indicator$$7$$.$y1$) - $labelSpace$$1$$.$w$, $labelSpace$$1$$.y = $plotArea$$4$$.$y1$ + $labelSpace$$1$$.$w$ / 2, $vAlignment$$ = "bottom", !$plotAreaRendered$$ && $indicator$$7$$.$y1$ > $indicator$$7$$.$y2$ && ($labelSpace$$1$$.$h$ = Math.abs($plotArea$$4$$.$y1$ - $indicator$$7$$.$y1$) - 
  $labelSpace$$1$$.$w$, $labelSpace$$1$$.y = $indicator$$7$$.$y1$ + $labelSpace$$1$$.$w$ / 2, $vAlignment$$ = "top")) : $isRTL$$22$$ ? !$plotAreaRendered$$ && $indicator$$7$$.$x1$ < $indicator$$7$$.$x2$ ? ($labelSpace$$1$$.$w$ = Math.abs($plotArea$$4$$.$x2$ - $indicator$$7$$.$x2$) - $labelSpace$$1$$.$h$, $labelSpace$$1$$.x = $indicator$$7$$.$x2$ + $labelSpace$$1$$.$h$ / 2, $hAlignment$$ = "left") : ($labelSpace$$1$$.$w$ = Math.abs($plotArea$$4$$.$x1$ - $indicator$$7$$.$x2$) - $labelSpace$$1$$.$h$, 
  $labelSpace$$1$$.x = $plotArea$$4$$.$x1$ + $labelSpace$$1$$.$h$ / 2, $hAlignment$$ = "right") : !$plotAreaRendered$$ && $indicator$$7$$.$x1$ > $indicator$$7$$.$x2$ ? ($labelSpace$$1$$.$w$ = Math.abs($plotArea$$4$$.$x1$ - $indicator$$7$$.$x2$) - $labelSpace$$1$$.$h$, $labelSpace$$1$$.x = $plotArea$$4$$.$x1$ + $labelSpace$$1$$.$h$ / 2, $hAlignment$$ = "right") : ($labelSpace$$1$$.$w$ = Math.abs($plotArea$$4$$.$x2$ - $indicator$$7$$.$x2$) - $labelSpace$$1$$.$h$, $labelSpace$$1$$.x = $indicator$$7$$.$x2$ + 
  $labelSpace$$1$$.$h$ / 2, $hAlignment$$ = "left"));
  !$DvtGaugeRenderer$$.$renderLabel$($gauge$$39$$, $container$$105$$, $labelSpace$$1$$, $labelColor$$4_options$$156$$, $hAlignment$$, $vAlignment$$) && !$repeatedTry$$ && ("outsideIndicatorEdge" == $labelPosition$$6$$ ? $DvtStatusMeterGaugeRenderer$$.$_renderLabelInsidePlotArea$($gauge$$39$$, $container$$105$$, $bounds$$62$$, $color$$36$$, "insideIndicatorEdge", $indicator$$7$$, $plotArea$$4$$, $JSCompiler_alias_TRUE$$) : ("insideIndicatorEdge" == $labelPosition$$6$$ || "center" == $labelPosition$$6$$) && 
  $DvtStatusMeterGaugeRenderer$$.$_renderLabelInsidePlotArea$($gauge$$39$$, $container$$105$$, $bounds$$62$$, $color$$36$$, "outsideIndicatorEdge", $indicator$$7$$, $plotArea$$4$$, $JSCompiler_alias_TRUE$$))
};
$DvtStatusMeterGaugeRenderer$$.$_renderTitle$ = function $$DvtStatusMeterGaugeRenderer$$$$_renderTitle$$($gauge$$40$$, $container$$106$$, $bounds$$63$$) {
  var $isRTL$$23$$ = dvt.$Agent$.$isRightToLeft$($gauge$$40$$.$getCtx$()), $options$$157$$ = $gauge$$40$$.$getOptions$(), $isVert$$9$$ = "vertical" == $options$$157$$.orientation, $titleSpace$$4$$ = new dvt.$Rectangle$($bounds$$63$$.x, $bounds$$63$$.y, $isVert$$9$$ ? $bounds$$63$$.$w$ : $bounds$$63$$.$w$ - $bounds$$63$$.$h$, $isVert$$9$$ ? $bounds$$63$$.$h$ - $bounds$$63$$.$w$ : $bounds$$63$$.$h$), $title$$12_titleString$$1$$ = $options$$157$$.title.text;
  if(!$DvtStatusMeterGaugeRenderer$$.$_hasMetricLabelOutsidePlotArea$($options$$157$$) && "on" == $options$$157$$.metricLabel.rendered) {
    var $fontStyle$$1_labelString$$4$$ = $DvtGaugeRenderer$$.$getFormattedMetricLabel$($options$$157$$.value, $gauge$$40$$), $title$$12_titleString$$1$$ = dvt.$Bundle$.$getTranslatedString$(dvt.$Bundle$.$UTIL_PREFIX$, "COLON_SEP_LIST", [$title$$12_titleString$$1$$, $fontStyle$$1_labelString$$4$$])
  }
  var $titleStyle$$1$$ = $options$$157$$.title.style, $fontStyle$$1_labelString$$4$$ = $titleStyle$$1$$.$clone$(), $size$$23_tempTitle$$1$$ = $titleStyle$$1$$.$getStyle$("font-size");
  $size$$23_tempTitle$$1$$ || ($size$$23_tempTitle$$1$$ = new dvt.$OutputText$($gauge$$40$$.$getCtx$(), $title$$12_titleString$$1$$, 0, 0), $size$$23_tempTitle$$1$$.$setCSSStyle$($titleStyle$$1$$), $size$$23_tempTitle$$1$$.$setTextString$($title$$12_titleString$$1$$), $size$$23_tempTitle$$1$$ = $isVert$$9$$ ? $size$$23_tempTitle$$1$$.$getOptimalFontSize$(new dvt.$Rectangle$($titleSpace$$4$$.x, $titleSpace$$4$$.y, $titleSpace$$4$$.$w$, Number.MAX_VALUE)) : $size$$23_tempTitle$$1$$.$getOptimalFontSize$(new dvt.$Rectangle$($titleSpace$$4$$.x, 
  $titleSpace$$4$$.y, Number.MAX_VALUE, $titleSpace$$4$$.$h$)));
  $title$$12_titleString$$1$$ = new dvt.$MultilineText$($gauge$$40$$.$getCtx$(), $title$$12_titleString$$1$$);
  $fontStyle$$1_labelString$$4$$.$setFontSize$("font-size", $size$$23_tempTitle$$1$$.toString());
  $title$$12_titleString$$1$$.$setCSSStyle$($fontStyle$$1_labelString$$4$$);
  dvt.$TextUtils$.$fitText$($title$$12_titleString$$1$$, $titleSpace$$4$$.$w$, $titleSpace$$4$$.$h$, $gauge$$40$$);
  "center" == $options$$157$$.title.position || "auto" == $options$$157$$.title.position && $isVert$$9$$ ? (dvt.$TextUtils$.$centerTextVertically$($title$$12_titleString$$1$$, $bounds$$63$$.y + $bounds$$63$$.$h$ / 2), $title$$12_titleString$$1$$.$setX$($bounds$$63$$.x + $bounds$$63$$.$w$ / 2), $title$$12_titleString$$1$$.$alignCenter$()) : (dvt.$TextUtils$.$centerTextVertically$($title$$12_titleString$$1$$, $bounds$$63$$.y + $bounds$$63$$.$h$ / 2), !$isVert$$9$$ && $isRTL$$23$$ ? ($title$$12_titleString$$1$$.$setX$($bounds$$63$$.x + 
  $bounds$$63$$.$w$ - $titleSpace$$4$$.$h$ / 2), $title$$12_titleString$$1$$.$alignRight$()) : !$isVert$$9$$ && !$isRTL$$23$$ ? ($title$$12_titleString$$1$$.$setX$($bounds$$63$$.x + $titleSpace$$4$$.$h$ / 2), $title$$12_titleString$$1$$.$alignLeft$()) : $isVert$$9$$ && ($title$$12_titleString$$1$$.$setY$($bounds$$63$$.y + $bounds$$63$$.$h$ - $title$$12_titleString$$1$$.$getDimensions$().$h$ - $titleSpace$$4$$.$w$ / 2), $title$$12_titleString$$1$$.$setX$($bounds$$63$$.x + $bounds$$63$$.$w$ / 2), $title$$12_titleString$$1$$.$alignCenter$()));
  $container$$106$$.$addChild$($title$$12_titleString$$1$$)
};
$DvtStatusMeterGaugeRenderer$$.$_calcPointOnArc$ = function $$DvtStatusMeterGaugeRenderer$$$$_calcPointOnArc$$($bounds$$64$$, $radius$$13$$, $angle$$27$$) {
  return{x:Math.cos($angle$$27$$) * $radius$$13$$ + $bounds$$64$$.$w$ / 2 + $bounds$$64$$.x, y:Math.sin($angle$$27$$) * $radius$$13$$ + $bounds$$64$$.$h$ / 2 + $bounds$$64$$.y}
};
$DvtStatusMeterGaugeRenderer$$.$_drawCircularArc$ = function $$DvtStatusMeterGaugeRenderer$$$$_drawCircularArc$$($borderColor$$24_gauge$$41$$, $container$$107$$, $bounds$$65_shape$$49$$, $startAngle$$7$$, $angleExtent$$6$$, $innerRadius$$2$$, $outerRadius$$1$$, $color$$37$$, $isPlotArea$$, $plotAreaBorderColor$$3$$) {
  var $context$$174$$ = $borderColor$$24_gauge$$41$$.$getCtx$();
  dvt.$Agent$.$isRightToLeft$($borderColor$$24_gauge$$41$$.$getCtx$()) && ($startAngle$$7$$ = Math.PI - $startAngle$$7$$ - $angleExtent$$6$$, $startAngle$$7$$ = 0 < $startAngle$$7$$ ? $startAngle$$7$$ : $startAngle$$7$$ + 2 * Math.PI);
  $isPlotArea$$ ? $bounds$$65_shape$$49$$ = new dvt.$Path$($context$$174$$, $DvtStatusMeterGaugeRenderer$$.$createCircularPathCmd$($bounds$$65_shape$$49$$, $startAngle$$7$$, $angleExtent$$6$$, $innerRadius$$2$$, $outerRadius$$1$$)) : ($bounds$$65_shape$$49$$ = new $DvtStatusMeterGaugeCircularIndicator$$($context$$174$$, $bounds$$65_shape$$49$$, $startAngle$$7$$, $angleExtent$$6$$, $innerRadius$$2$$, $outerRadius$$1$$), $borderColor$$24_gauge$$41$$.$__shapes$.push($bounds$$65_shape$$49$$));
  $bounds$$65_shape$$49$$.$setSolidFill$($color$$37$$);
  ($borderColor$$24_gauge$$41$$ = $DvtGaugeStyleUtils$$.$getBorderColor$($borderColor$$24_gauge$$41$$)) && !$isPlotArea$$ ? $bounds$$65_shape$$49$$.$setSolidStroke$($borderColor$$24_gauge$$41$$) : $isPlotArea$$ && $plotAreaBorderColor$$3$$ && $bounds$$65_shape$$49$$.$setSolidStroke$($plotAreaBorderColor$$3$$);
  $container$$107$$.$addChild$($bounds$$65_shape$$49$$)
};
$DvtStatusMeterGaugeRenderer$$.$_drawCircularReferenceLine$ = function $$DvtStatusMeterGaugeRenderer$$$$_drawCircularReferenceLine$$($gauge$$42_p1$$3$$, $container$$108$$, $bounds$$66_p2$$4$$, $angle$$28$$, $color$$38_stroke$$58$$, $lineWidth$$6$$, $lineStyle$$2$$) {
  var $context$$175_shape$$50$$ = $gauge$$42_p1$$3$$.$getCtx$(), $maxDiameter$$1_outerRadius$$2$$ = Math.min($bounds$$66_p2$$4$$.$w$, $bounds$$66_p2$$4$$.$h$), $innerRadius$$3$$ = 0.275 * $maxDiameter$$1_outerRadius$$2$$, $maxDiameter$$1_outerRadius$$2$$ = 0.5 * $maxDiameter$$1_outerRadius$$2$$;
  dvt.$Agent$.$isRightToLeft$($gauge$$42_p1$$3$$.$getCtx$()) && ($angle$$28$$ = Math.PI - $angle$$28$$, $angle$$28$$ = 0 < $angle$$28$$ ? $angle$$28$$ : $angle$$28$$ + 2 * Math.PI);
  $gauge$$42_p1$$3$$ = $DvtStatusMeterGaugeRenderer$$.$_calcPointOnArc$($bounds$$66_p2$$4$$, $innerRadius$$3$$, $angle$$28$$);
  $bounds$$66_p2$$4$$ = $DvtStatusMeterGaugeRenderer$$.$_calcPointOnArc$($bounds$$66_p2$$4$$, $maxDiameter$$1_outerRadius$$2$$, $angle$$28$$);
  $context$$175_shape$$50$$ = new dvt.$Line$($context$$175_shape$$50$$, $gauge$$42_p1$$3$$.x, $gauge$$42_p1$$3$$.y, $bounds$$66_p2$$4$$.x, $bounds$$66_p2$$4$$.y);
  $color$$38_stroke$$58$$ = new dvt.$SolidStroke$($color$$38_stroke$$58$$, 1, $lineWidth$$6$$);
  $lineStyle$$2$$ && $color$$38_stroke$$58$$.$setStyle$(dvt.$Stroke$.$convertTypeString$($lineStyle$$2$$));
  $context$$175_shape$$50$$.$setStroke$($color$$38_stroke$$58$$);
  $container$$108$$.$addChild$($context$$175_shape$$50$$)
};
$DvtStatusMeterGaugeRenderer$$.$createCircularPathCmd$ = function $$DvtStatusMeterGaugeRenderer$$$$createCircularPathCmd$$($bounds$$67_p4$$, $startAngle$$8$$, $angleExtent$$7$$, $innerRadius$$4$$, $cmd$$8_outerRadius$$3$$) {
  var $p1$$4$$, $p2$$5$$, $p3$$;
  $angleExtent$$7$$ < dvt.$Math$.$TWO_PI$ ? ($p1$$4$$ = $DvtStatusMeterGaugeRenderer$$.$_calcPointOnArc$($bounds$$67_p4$$, $cmd$$8_outerRadius$$3$$, $startAngle$$8$$), $p2$$5$$ = $DvtStatusMeterGaugeRenderer$$.$_calcPointOnArc$($bounds$$67_p4$$, $cmd$$8_outerRadius$$3$$, $startAngle$$8$$ + $angleExtent$$7$$), $p3$$ = $DvtStatusMeterGaugeRenderer$$.$_calcPointOnArc$($bounds$$67_p4$$, $innerRadius$$4$$, $startAngle$$8$$ + $angleExtent$$7$$), $bounds$$67_p4$$ = $DvtStatusMeterGaugeRenderer$$.$_calcPointOnArc$($bounds$$67_p4$$, 
  $innerRadius$$4$$, $startAngle$$8$$), $cmd$$8_outerRadius$$3$$ = dvt.$PathUtils$.moveTo($p1$$4$$.x, $p1$$4$$.y) + dvt.$PathUtils$.arcTo($cmd$$8_outerRadius$$3$$, $cmd$$8_outerRadius$$3$$, $angleExtent$$7$$, 1, $p2$$5$$.x, $p2$$5$$.y) + dvt.$PathUtils$.lineTo($p3$$.x, $p3$$.y) + dvt.$PathUtils$.arcTo($innerRadius$$4$$, $innerRadius$$4$$, $angleExtent$$7$$, 0, $bounds$$67_p4$$.x, $bounds$$67_p4$$.y) + dvt.$PathUtils$.closePath()) : ($p1$$4$$ = $DvtStatusMeterGaugeRenderer$$.$_calcPointOnArc$($bounds$$67_p4$$, 
  $cmd$$8_outerRadius$$3$$, $startAngle$$8$$), $p2$$5$$ = $DvtStatusMeterGaugeRenderer$$.$_calcPointOnArc$($bounds$$67_p4$$, $cmd$$8_outerRadius$$3$$, $startAngle$$8$$ + $angleExtent$$7$$ / 2), $p3$$ = $DvtStatusMeterGaugeRenderer$$.$_calcPointOnArc$($bounds$$67_p4$$, $innerRadius$$4$$, $startAngle$$8$$), $bounds$$67_p4$$ = $DvtStatusMeterGaugeRenderer$$.$_calcPointOnArc$($bounds$$67_p4$$, $innerRadius$$4$$, $startAngle$$8$$ + $angleExtent$$7$$ / 2), $cmd$$8_outerRadius$$3$$ = dvt.$PathUtils$.moveTo($p1$$4$$.x, 
  $p1$$4$$.y) + dvt.$PathUtils$.arcTo($cmd$$8_outerRadius$$3$$, $cmd$$8_outerRadius$$3$$, $angleExtent$$7$$ / 2, 1, $p2$$5$$.x, $p2$$5$$.y) + dvt.$PathUtils$.arcTo($cmd$$8_outerRadius$$3$$, $cmd$$8_outerRadius$$3$$, $angleExtent$$7$$ / 2, 1, $p1$$4$$.x, $p1$$4$$.y), 0 < $innerRadius$$4$$ && ($cmd$$8_outerRadius$$3$$ += dvt.$PathUtils$.moveTo($bounds$$67_p4$$.x, $bounds$$67_p4$$.y) + dvt.$PathUtils$.arcTo($innerRadius$$4$$, $innerRadius$$4$$, $angleExtent$$7$$ / 2, 0, $p3$$.x, $p3$$.y) + dvt.$PathUtils$.arcTo($innerRadius$$4$$, 
  $innerRadius$$4$$, $angleExtent$$7$$ / 2, 0, $bounds$$67_p4$$.x, $bounds$$67_p4$$.y)), $cmd$$8_outerRadius$$3$$ += dvt.$PathUtils$.closePath());
  return $cmd$$8_outerRadius$$3$$
};
$DvtStatusMeterGaugeRenderer$$.$getAngleQuadrant$ = function $$DvtStatusMeterGaugeRenderer$$$$getAngleQuadrant$$($angle$$29$$, $bStart$$1$$) {
  var $quadrant$$ = 1;
  if($bStart$$1$$) {
    $angle$$29$$ >= dvt.$Math$.$HALF_PI$ && $angle$$29$$ < Math.PI ? $quadrant$$ = 2 : $angle$$29$$ >= Math.PI && $angle$$29$$ < 1.5 * Math.PI ? $quadrant$$ = 3 : $angle$$29$$ >= 1.5 * Math.PI && $angle$$29$$ < dvt.$Math$.$TWO_PI$ && ($quadrant$$ = 4)
  }else {
    if($angle$$29$$ > dvt.$Math$.$HALF_PI$ && $angle$$29$$ <= Math.PI) {
      $quadrant$$ = 2
    }else {
      if($angle$$29$$ > Math.PI && $angle$$29$$ <= 1.5 * Math.PI) {
        $quadrant$$ = 3
      }else {
        if($angle$$29$$ > 1.5 * Math.PI && $angle$$29$$ < dvt.$Math$.$TWO_PI$ || 0 == $angle$$29$$) {
          $quadrant$$ = 4
        }
      }
    }
  }
  return $quadrant$$
};
$DvtStatusMeterGaugeRenderer$$.$_hasMetricLabelOutsidePlotArea$ = function $$DvtStatusMeterGaugeRenderer$$$$_hasMetricLabelOutsidePlotArea$$($options$$158$$) {
  var $labelPosition$$8$$ = $options$$158$$.metricLabel.position;
  return"auto" == $labelPosition$$8$$ || "outsidePlotArea" == $labelPosition$$8$$ || "withTitle" == $labelPosition$$8$$ && !$DvtGaugeStyleUtils$$.$hasTitle$($options$$158$$)
};
$DvtStatusMeterGaugeRenderer$$.$_adjustCenterAndBounds$ = function $$DvtStatusMeterGaugeRenderer$$$$_adjustCenterAndBounds$$($gauge$$43$$, $innerRadius$$5_maxInnerDiameter$$1$$, $maxDiameter$$2_startAngleRads$$2$$, $angleExtentRads$$3$$, $endAngle$$4$$, $bounds$$68$$, $isRTL$$25$$) {
  var $labelBounds$$9_labelCenterOffset$$ = $JSCompiler_alias_NULL$$, $startQuadrant$$ = $DvtStatusMeterGaugeRenderer$$.$getAngleQuadrant$($maxDiameter$$2_startAngleRads$$2$$, $JSCompiler_alias_TRUE$$), $endQuadrant$$ = $DvtStatusMeterGaugeRenderer$$.$getAngleQuadrant$($endAngle$$4$$, $JSCompiler_alias_FALSE$$), $width$$56$$ = $bounds$$68$$.$w$, $height$$49$$ = $bounds$$68$$.$h$, $cx$$19$$ = $width$$56$$ / 2, $cy$$20$$ = $height$$49$$ / 2;
  if($startQuadrant$$ == $endQuadrant$$ && $angleExtentRads$$3$$ <= dvt.$Math$.$HALF_PI$) {
    if($maxDiameter$$2_startAngleRads$$2$$ = 2 * Math.min($bounds$$68$$.$w$, $bounds$$68$$.$h$), $bounds$$68$$.$w$ += $maxDiameter$$2_startAngleRads$$2$$ / 2, $bounds$$68$$.$h$ += $maxDiameter$$2_startAngleRads$$2$$ / 2, $innerRadius$$5_maxInnerDiameter$$1$$ *= $maxDiameter$$2_startAngleRads$$2$$, !$isRTL$$25$$ && 1 == $startQuadrant$$ || $isRTL$$25$$ && 2 == $startQuadrant$$) {
      $bounds$$68$$.x -= $maxDiameter$$2_startAngleRads$$2$$ / 2, $bounds$$68$$.y -= $maxDiameter$$2_startAngleRads$$2$$ / 2, $cx$$19$$ = $width$$56$$ / 2 - $maxDiameter$$2_startAngleRads$$2$$ / 4 + 1, $cy$$20$$ = $height$$49$$ / 2 - $maxDiameter$$2_startAngleRads$$2$$ / 4 + 1, $labelBounds$$9_labelCenterOffset$$ = new dvt.$Rectangle$($bounds$$68$$.x + $bounds$$68$$.$w$ / 2 - 1, $bounds$$68$$.y + $bounds$$68$$.$h$ / 2 - 1, $innerRadius$$5_maxInnerDiameter$$1$$ * (3 / 7) - 2, $innerRadius$$5_maxInnerDiameter$$1$$ * 
      (2.5 / 7) - 2)
    }else {
      if(!$isRTL$$25$$ && 2 == $startQuadrant$$ || $isRTL$$25$$ && 1 == $startQuadrant$$) {
        $bounds$$68$$.y -= $maxDiameter$$2_startAngleRads$$2$$ / 2, $cx$$19$$ = $width$$56$$ / 2 + $maxDiameter$$2_startAngleRads$$2$$ / 4 - 1, $cy$$20$$ = $height$$49$$ / 2 - $maxDiameter$$2_startAngleRads$$2$$ / 4 + 1, $labelBounds$$9_labelCenterOffset$$ = new dvt.$Rectangle$($bounds$$68$$.x + $bounds$$68$$.$w$ / 2 - $innerRadius$$5_maxInnerDiameter$$1$$ * (3 / 7) + 1, $bounds$$68$$.y + $bounds$$68$$.$h$ / 2 - 1, $innerRadius$$5_maxInnerDiameter$$1$$ * (3 / 7) - 2, $innerRadius$$5_maxInnerDiameter$$1$$ * 
        (2.5 / 7) - 2)
      }else {
        if(!$isRTL$$25$$ && 3 == $startQuadrant$$ || $isRTL$$25$$ && 4 == $startQuadrant$$) {
          $cx$$19$$ = $width$$56$$ / 2 + $maxDiameter$$2_startAngleRads$$2$$ / 4 - 1, $cy$$20$$ = $height$$49$$ / 2 + $maxDiameter$$2_startAngleRads$$2$$ / 4 - 1, $labelBounds$$9_labelCenterOffset$$ = new dvt.$Rectangle$($bounds$$68$$.x + $bounds$$68$$.$w$ / 2 - $innerRadius$$5_maxInnerDiameter$$1$$ * (3 / 7) + 1, $bounds$$68$$.y + $bounds$$68$$.$h$ / 2 - $innerRadius$$5_maxInnerDiameter$$1$$ * (2.5 / 7) + 1, $innerRadius$$5_maxInnerDiameter$$1$$ * (3 / 7) - 2, $innerRadius$$5_maxInnerDiameter$$1$$ * 
          (2.5 / 7) - 2)
        }else {
          if(!$isRTL$$25$$ && 4 == $startQuadrant$$ || $isRTL$$25$$ && 3 == $startQuadrant$$) {
            $bounds$$68$$.x -= $maxDiameter$$2_startAngleRads$$2$$ / 2, $cx$$19$$ = $width$$56$$ / 2 - $maxDiameter$$2_startAngleRads$$2$$ / 4 + 1, $cy$$20$$ = $height$$49$$ / 2 + $maxDiameter$$2_startAngleRads$$2$$ / 4 - 1, $labelBounds$$9_labelCenterOffset$$ = new dvt.$Rectangle$($bounds$$68$$.x + $bounds$$68$$.$w$ / 2 - 1, $bounds$$68$$.y + $bounds$$68$$.$h$ / 2 - $innerRadius$$5_maxInnerDiameter$$1$$ * (2.5 / 7) + 1, $innerRadius$$5_maxInnerDiameter$$1$$ * (3 / 7) - 2, $innerRadius$$5_maxInnerDiameter$$1$$ * 
            (2.5 / 7) - 2)
          }
        }
      }
    }
  }else {
    $startQuadrant$$ % 4 + 1 == $endQuadrant$$ && $angleExtentRads$$3$$ <= Math.PI ? 1 == $startQuadrant$$ || 3 == $startQuadrant$$ ? ($maxDiameter$$2_startAngleRads$$2$$ = Math.min($bounds$$68$$.$w$, 2 * $bounds$$68$$.$h$), $innerRadius$$5_maxInnerDiameter$$1$$ *= $maxDiameter$$2_startAngleRads$$2$$, $bounds$$68$$.$w$ > $bounds$$68$$.$h$ && ($labelBounds$$9_labelCenterOffset$$ = new dvt.$Rectangle$($bounds$$68$$.x + $bounds$$68$$.$w$ / 2 - $innerRadius$$5_maxInnerDiameter$$1$$ * (3 / 7), $bounds$$68$$.y + 
    $bounds$$68$$.$h$ - ($bounds$$68$$.$h$ - $maxDiameter$$2_startAngleRads$$2$$ / 2) / 2 - $innerRadius$$5_maxInnerDiameter$$1$$ * (2.75 / 7), $innerRadius$$5_maxInnerDiameter$$1$$ * (6 / 7), $innerRadius$$5_maxInnerDiameter$$1$$ * (2.5 / 7)), 1 == $startQuadrant$$ ? ($labelBounds$$9_labelCenterOffset$$.y = $bounds$$68$$.y + ($bounds$$68$$.$h$ - $maxDiameter$$2_startAngleRads$$2$$ / 2) / 2 + $innerRadius$$5_maxInnerDiameter$$1$$ * (0.5 / 7), $bounds$$68$$.y -= $maxDiameter$$2_startAngleRads$$2$$ / 
    2 - ($bounds$$68$$.$h$ - $maxDiameter$$2_startAngleRads$$2$$ / 2) / 2, $cy$$20$$ = $height$$49$$ / 2 - $maxDiameter$$2_startAngleRads$$2$$ / 4 + 1) : ($bounds$$68$$.y += ($bounds$$68$$.$h$ - $maxDiameter$$2_startAngleRads$$2$$ / 2) / 2, $cy$$20$$ = $height$$49$$ / 2 + $maxDiameter$$2_startAngleRads$$2$$ / 4 - 1), $bounds$$68$$.$h$ = $maxDiameter$$2_startAngleRads$$2$$)) : ($maxDiameter$$2_startAngleRads$$2$$ = Math.min(2 * $bounds$$68$$.$w$, $bounds$$68$$.$h$), $innerRadius$$5_maxInnerDiameter$$1$$ *= 
    $maxDiameter$$2_startAngleRads$$2$$, $bounds$$68$$.$w$ < $bounds$$68$$.$h$ && ($labelBounds$$9_labelCenterOffset$$ = new dvt.$Rectangle$($bounds$$68$$.x + $bounds$$68$$.$w$ - ($bounds$$68$$.$w$ - $maxDiameter$$2_startAngleRads$$2$$ / 2) / 2 - $innerRadius$$5_maxInnerDiameter$$1$$ * (3.25 / 7), $bounds$$68$$.y + $bounds$$68$$.$h$ / 2 - $innerRadius$$5_maxInnerDiameter$$1$$ * (2.5 / 7), $innerRadius$$5_maxInnerDiameter$$1$$ * (3 / 7), $innerRadius$$5_maxInnerDiameter$$1$$ * (5 / 7)), !$isRTL$$25$$ && 
    4 == $startQuadrant$$ || $isRTL$$25$$ && 2 == $startQuadrant$$ ? ($labelBounds$$9_labelCenterOffset$$.x = $bounds$$68$$.x + ($bounds$$68$$.$w$ - $maxDiameter$$2_startAngleRads$$2$$ / 2) / 2 + $innerRadius$$5_maxInnerDiameter$$1$$ * (0.25 / 7), $bounds$$68$$.x -= $maxDiameter$$2_startAngleRads$$2$$ / 2 - ($bounds$$68$$.$w$ - $maxDiameter$$2_startAngleRads$$2$$ / 2) / 2, $cx$$19$$ = $width$$56$$ / 2 - $maxDiameter$$2_startAngleRads$$2$$ / 4 + 1) : ($bounds$$68$$.x += ($bounds$$68$$.$w$ - $maxDiameter$$2_startAngleRads$$2$$ / 
    2) / 2, $cx$$19$$ = $width$$56$$ / 2 + $maxDiameter$$2_startAngleRads$$2$$ / 4 - 1), $bounds$$68$$.$w$ = $maxDiameter$$2_startAngleRads$$2$$)) : $endQuadrant$$ % 4 + 1 == $startQuadrant$$ && $angleExtentRads$$3$$ > Math.PI && (1 == $startQuadrant$$ && $bounds$$68$$.$h$ > $bounds$$68$$.$w$ ? ($maxDiameter$$2_startAngleRads$$2$$ = Math.min(2 * ($bounds$$68$$.$w$ / (Math.cos($maxDiameter$$2_startAngleRads$$2$$) + 1)), 2 * ($bounds$$68$$.$w$ / (Math.sin($endAngle$$4$$ - 1.5 * Math.PI) + 1)), $bounds$$68$$.$h$), 
    $innerRadius$$5_maxInnerDiameter$$1$$ *= $maxDiameter$$2_startAngleRads$$2$$, $labelBounds$$9_labelCenterOffset$$ = $innerRadius$$5_maxInnerDiameter$$1$$ * (3 / 7) * (2 * $bounds$$68$$.$w$ / $maxDiameter$$2_startAngleRads$$2$$ - 1), $isRTL$$25$$ ? ($labelBounds$$9_labelCenterOffset$$ = new dvt.$Rectangle$($bounds$$68$$.x + $bounds$$68$$.$w$ - $maxDiameter$$2_startAngleRads$$2$$ / 2 - $labelBounds$$9_labelCenterOffset$$, $bounds$$68$$.y + $bounds$$68$$.$h$ / 2 - $innerRadius$$5_maxInnerDiameter$$1$$ * 
    (2.5 / 7), $innerRadius$$5_maxInnerDiameter$$1$$ * (3 / 7) + $labelBounds$$9_labelCenterOffset$$, $innerRadius$$5_maxInnerDiameter$$1$$ * (5 / 7)), $bounds$$68$$.x -= $maxDiameter$$2_startAngleRads$$2$$ - $bounds$$68$$.$w$, $cx$$19$$ = -$maxDiameter$$2_startAngleRads$$2$$ / 2 + $width$$56$$) : ($labelBounds$$9_labelCenterOffset$$ = new dvt.$Rectangle$($bounds$$68$$.x + $maxDiameter$$2_startAngleRads$$2$$ / 2 - $innerRadius$$5_maxInnerDiameter$$1$$ * (3 / 7), $bounds$$68$$.y + $bounds$$68$$.$h$ / 
    2 - $innerRadius$$5_maxInnerDiameter$$1$$ * (2.5 / 7), $innerRadius$$5_maxInnerDiameter$$1$$ * (3 / 7) * (1 + (2 * $bounds$$68$$.$w$ / $maxDiameter$$2_startAngleRads$$2$$ - 1)), $innerRadius$$5_maxInnerDiameter$$1$$ * (5 / 7)), $cx$$19$$ = $maxDiameter$$2_startAngleRads$$2$$ / 2), $bounds$$68$$.$w$ = $maxDiameter$$2_startAngleRads$$2$$) : 2 == $startQuadrant$$ && $bounds$$68$$.$h$ < $bounds$$68$$.$w$ ? ($maxDiameter$$2_startAngleRads$$2$$ = Math.min(2 * ($bounds$$68$$.$h$ / (Math.cos($maxDiameter$$2_startAngleRads$$2$$ - 
    dvt.$Math$.$HALF_PI$) + 1)), 2 * ($bounds$$68$$.$h$ / (Math.sin($endAngle$$4$$) + 1)), $bounds$$68$$.$w$), $innerRadius$$5_maxInnerDiameter$$1$$ *= $maxDiameter$$2_startAngleRads$$2$$, $labelBounds$$9_labelCenterOffset$$ = new dvt.$Rectangle$($bounds$$68$$.x + $bounds$$68$$.$w$ / 2 - $innerRadius$$5_maxInnerDiameter$$1$$ * (3 / 7), $bounds$$68$$.y + $maxDiameter$$2_startAngleRads$$2$$ / 2 - $innerRadius$$5_maxInnerDiameter$$1$$ * (2.5 / 7), $innerRadius$$5_maxInnerDiameter$$1$$ * (6 / 7), $innerRadius$$5_maxInnerDiameter$$1$$ * 
    (2.5 / 7) * (1 + (2 * $bounds$$68$$.$h$ / $maxDiameter$$2_startAngleRads$$2$$ - 1))), $bounds$$68$$.$h$ = $maxDiameter$$2_startAngleRads$$2$$, $cy$$20$$ = $maxDiameter$$2_startAngleRads$$2$$ / 2) : 3 == $startQuadrant$$ && $bounds$$68$$.$h$ > $bounds$$68$$.$w$ ? ($maxDiameter$$2_startAngleRads$$2$$ = Math.min(2 * ($bounds$$68$$.$w$ / (Math.cos($maxDiameter$$2_startAngleRads$$2$$ - Math.PI) + 1)), 2 * ($bounds$$68$$.$w$ / (Math.sin($endAngle$$4$$ - dvt.$Math$.$HALF_PI$) + 1)), $bounds$$68$$.$h$), 
    $innerRadius$$5_maxInnerDiameter$$1$$ *= $maxDiameter$$2_startAngleRads$$2$$, $labelBounds$$9_labelCenterOffset$$ = $innerRadius$$5_maxInnerDiameter$$1$$ * (3 / 7) * (2 * $bounds$$68$$.$w$ / $maxDiameter$$2_startAngleRads$$2$$ - 1), $isRTL$$25$$ ? ($labelBounds$$9_labelCenterOffset$$ = new dvt.$Rectangle$($bounds$$68$$.x + $maxDiameter$$2_startAngleRads$$2$$ / 2 - $innerRadius$$5_maxInnerDiameter$$1$$ * (3 / 7), $bounds$$68$$.y + $bounds$$68$$.$h$ / 2 - $innerRadius$$5_maxInnerDiameter$$1$$ * 
    (2.5 / 7), $innerRadius$$5_maxInnerDiameter$$1$$ * (3 / 7) * (1 + (2 * $bounds$$68$$.$w$ / $maxDiameter$$2_startAngleRads$$2$$ - 1)), $innerRadius$$5_maxInnerDiameter$$1$$ * (5 / 7)), $cx$$19$$ = $maxDiameter$$2_startAngleRads$$2$$ / 2) : ($labelBounds$$9_labelCenterOffset$$ = new dvt.$Rectangle$($bounds$$68$$.x + $bounds$$68$$.$w$ - $maxDiameter$$2_startAngleRads$$2$$ / 2 - $labelBounds$$9_labelCenterOffset$$, $bounds$$68$$.y + $bounds$$68$$.$h$ / 2 - $innerRadius$$5_maxInnerDiameter$$1$$ * 
    (2.5 / 7), $innerRadius$$5_maxInnerDiameter$$1$$ * (3 / 7) + $labelBounds$$9_labelCenterOffset$$, $innerRadius$$5_maxInnerDiameter$$1$$ * (5 / 7)), $bounds$$68$$.x -= $maxDiameter$$2_startAngleRads$$2$$ - $bounds$$68$$.$w$, $cx$$19$$ = -$maxDiameter$$2_startAngleRads$$2$$ / 2 + $width$$56$$), $bounds$$68$$.$w$ = $maxDiameter$$2_startAngleRads$$2$$) : 4 == $startQuadrant$$ && $bounds$$68$$.$h$ < $bounds$$68$$.$w$ && ($maxDiameter$$2_startAngleRads$$2$$ = Math.min(2 * ($bounds$$68$$.$h$ / (Math.cos($maxDiameter$$2_startAngleRads$$2$$ - 
    1.5 * Math.PI) + 1)), 2 * ($bounds$$68$$.$h$ / (Math.sin(dvt.$Math$.$TWO_PI$ - $endAngle$$4$$) + 1)), $bounds$$68$$.$w$), $innerRadius$$5_maxInnerDiameter$$1$$ *= $maxDiameter$$2_startAngleRads$$2$$, $labelBounds$$9_labelCenterOffset$$ = $innerRadius$$5_maxInnerDiameter$$1$$ * (2.5 / 7) * (2 * $bounds$$68$$.$h$ / $maxDiameter$$2_startAngleRads$$2$$ - 1), $labelBounds$$9_labelCenterOffset$$ = new dvt.$Rectangle$($bounds$$68$$.x + $bounds$$68$$.$w$ / 2 - $innerRadius$$5_maxInnerDiameter$$1$$ * 
    (3 / 7), $bounds$$68$$.y + $bounds$$68$$.$h$ - $maxDiameter$$2_startAngleRads$$2$$ / 2 - $labelBounds$$9_labelCenterOffset$$, $innerRadius$$5_maxInnerDiameter$$1$$ * (6 / 7), $innerRadius$$5_maxInnerDiameter$$1$$ * (2.5 / 7) + $labelBounds$$9_labelCenterOffset$$), $bounds$$68$$.y -= $maxDiameter$$2_startAngleRads$$2$$ - $bounds$$68$$.$h$, $bounds$$68$$.$h$ = $maxDiameter$$2_startAngleRads$$2$$, $cy$$20$$ = -$maxDiameter$$2_startAngleRads$$2$$ / 2 + $height$$49$$))
  }
  $gauge$$43$$.$cx$ = $cx$$19$$;
  $gauge$$43$$.$cy$ = $cy$$20$$;
  return $labelBounds$$9_labelCenterOffset$$
};
$DvtStatusMeterGaugeRenderer$$.$rectangleWithBorderRadius$ = function $$DvtStatusMeterGaugeRenderer$$$$rectangleWithBorderRadius$$($x$$123$$, $y$$102$$, $w$$22$$, $h$$17$$, $horiz_radius$$14_split$$, $multiplier$$1$$, $bottomLeftY_defaultValue$$1$$) {
  var $topLeftX$$1$$ = $bottomLeftY_defaultValue$$1$$, $topLeftY$$ = $bottomLeftY_defaultValue$$1$$, $topRightX$$1$$ = $bottomLeftY_defaultValue$$1$$, $topRightY$$ = $bottomLeftY_defaultValue$$1$$, $bottomRightX$$1$$ = $bottomLeftY_defaultValue$$1$$, $bottomRightY$$ = $bottomLeftY_defaultValue$$1$$, $bottomLeftX$$1$$ = $bottomLeftY_defaultValue$$1$$;
  if($horiz_radius$$14_split$$) {
    if(-1 != $horiz_radius$$14_split$$.indexOf("/")) {
      var $splitHorizVert_vert$$ = $horiz_radius$$14_split$$.split("/");
      $horiz_radius$$14_split$$ = dvt.$StringUtils$.trim($splitHorizVert_vert$$[0]).split(/\s+/);
      $splitHorizVert_vert$$ = dvt.$StringUtils$.trim($splitHorizVert_vert$$[1]).split(/\s+/);
      1 == $horiz_radius$$14_split$$.length ? $topLeftX$$1$$ = $topRightX$$1$$ = $bottomRightX$$1$$ = $bottomLeftX$$1$$ = $horiz_radius$$14_split$$[0] : 2 == $horiz_radius$$14_split$$.length ? ($topLeftX$$1$$ = $bottomRightX$$1$$ = $horiz_radius$$14_split$$[0], $topRightX$$1$$ = $bottomLeftX$$1$$ = $horiz_radius$$14_split$$[1]) : 3 == $horiz_radius$$14_split$$.length ? ($topLeftX$$1$$ = $horiz_radius$$14_split$$[0], $topRightX$$1$$ = $bottomLeftX$$1$$ = $horiz_radius$$14_split$$[1], $bottomRightX$$1$$ = 
      $horiz_radius$$14_split$$[2]) : 4 == $horiz_radius$$14_split$$.length && ($topLeftX$$1$$ = $horiz_radius$$14_split$$[0], $topRightX$$1$$ = $horiz_radius$$14_split$$[1], $bottomRightX$$1$$ = $horiz_radius$$14_split$$[2], $bottomLeftX$$1$$ = $horiz_radius$$14_split$$[3]);
      1 == $splitHorizVert_vert$$.length ? $topLeftY$$ = $topRightY$$ = $bottomRightY$$ = $bottomLeftY_defaultValue$$1$$ = $splitHorizVert_vert$$[0] : 2 == $splitHorizVert_vert$$.length ? ($topLeftY$$ = $bottomRightY$$ = $splitHorizVert_vert$$[0], $topRightY$$ = $bottomLeftY_defaultValue$$1$$ = $splitHorizVert_vert$$[1]) : 3 == $splitHorizVert_vert$$.length ? ($topLeftY$$ = $splitHorizVert_vert$$[0], $topRightY$$ = $bottomLeftY_defaultValue$$1$$ = $splitHorizVert_vert$$[1], $bottomRightY$$ = $splitHorizVert_vert$$[2]) : 
      4 == $splitHorizVert_vert$$.length && ($topLeftY$$ = $splitHorizVert_vert$$[0], $topRightY$$ = $splitHorizVert_vert$$[1], $bottomRightY$$ = $splitHorizVert_vert$$[2], $bottomLeftY_defaultValue$$1$$ = $splitHorizVert_vert$$[3])
    }else {
      "auto" != $horiz_radius$$14_split$$ && ($horiz_radius$$14_split$$ = dvt.$StringUtils$.trim($horiz_radius$$14_split$$).split(/\s+/), 1 == $horiz_radius$$14_split$$.length ? $topLeftX$$1$$ = $topRightX$$1$$ = $bottomRightX$$1$$ = $bottomLeftX$$1$$ = $topLeftY$$ = $topRightY$$ = $bottomRightY$$ = $bottomLeftY_defaultValue$$1$$ = $horiz_radius$$14_split$$[0] : 2 == $horiz_radius$$14_split$$.length ? ($topLeftX$$1$$ = $bottomRightX$$1$$ = $topLeftY$$ = $bottomRightY$$ = $horiz_radius$$14_split$$[0], 
      $topRightX$$1$$ = $bottomLeftX$$1$$ = $topRightY$$ = $bottomLeftY_defaultValue$$1$$ = $horiz_radius$$14_split$$[1]) : 3 == $horiz_radius$$14_split$$.length ? ($topLeftX$$1$$ = $topLeftY$$ = $horiz_radius$$14_split$$[0], $topRightX$$1$$ = $bottomLeftX$$1$$ = $topRightY$$ = $bottomLeftY_defaultValue$$1$$ = $horiz_radius$$14_split$$[1], $bottomRightX$$1$$ = $bottomRightY$$ = $horiz_radius$$14_split$$[2]) : 4 == $horiz_radius$$14_split$$.length && ($topLeftX$$1$$ = $topLeftY$$ = $horiz_radius$$14_split$$[0], 
      $topRightX$$1$$ = $topRightY$$ = $horiz_radius$$14_split$$[1], $bottomRightX$$1$$ = $bottomRightY$$ = $horiz_radius$$14_split$$[2], $bottomLeftX$$1$$ = $bottomLeftY_defaultValue$$1$$ = $horiz_radius$$14_split$$[3]))
    }
  }
  return $DvtStatusMeterGaugeRenderer$$.$_roundedRectangle$($x$$123$$, $y$$102$$, $w$$22$$, $h$$17$$, $DvtStatusMeterGaugeRenderer$$.$_parseBorderRadiusItem$($topLeftX$$1$$, $multiplier$$1$$), $DvtStatusMeterGaugeRenderer$$.$_parseBorderRadiusItem$($topLeftY$$, $multiplier$$1$$), $DvtStatusMeterGaugeRenderer$$.$_parseBorderRadiusItem$($topRightX$$1$$, $multiplier$$1$$), $DvtStatusMeterGaugeRenderer$$.$_parseBorderRadiusItem$($topRightY$$, $multiplier$$1$$), $DvtStatusMeterGaugeRenderer$$.$_parseBorderRadiusItem$($bottomRightX$$1$$, 
  $multiplier$$1$$), $DvtStatusMeterGaugeRenderer$$.$_parseBorderRadiusItem$($bottomRightY$$, $multiplier$$1$$), $DvtStatusMeterGaugeRenderer$$.$_parseBorderRadiusItem$($bottomLeftX$$1$$, $multiplier$$1$$), $DvtStatusMeterGaugeRenderer$$.$_parseBorderRadiusItem$($bottomLeftY_defaultValue$$1$$, $multiplier$$1$$))
};
$DvtStatusMeterGaugeRenderer$$.$_parseBorderRadiusItem$ = function $$DvtStatusMeterGaugeRenderer$$$$_parseBorderRadiusItem$$($item$$19$$, $multiplier$$2$$) {
  var $radius$$15$$ = Math.min(parseFloat($item$$19$$), $multiplier$$2$$ / 2);
  -1 != $item$$19$$.indexOf("%") && ($radius$$15$$ = 0.01 * Math.min(50, parseFloat($item$$19$$)) * $multiplier$$2$$);
  return $radius$$15$$ < $DvtStatusMeterGaugeRenderer$$.$_MIN_CORNER_RADIUS$ ? 0 : $radius$$15$$
};
$DvtStatusMeterGaugeRenderer$$.$_roundedRectangle$ = function $$DvtStatusMeterGaugeRenderer$$$$_roundedRectangle$$($x$$124$$, $y$$103$$, $w$$23$$, $h$$18$$, $tlcrX$$, $tlcrY$$, $trcrX$$, $trcrY$$, $brcrX$$, $brcrY$$, $blcrX$$, $blcrY$$) {
  $tlcrY$$ = Math.min($tlcrY$$, 0.5 * $h$$18$$);
  $trcrY$$ = Math.min($trcrY$$, 0.5 * $h$$18$$);
  $brcrY$$ = Math.min($brcrY$$, 0.5 * $h$$18$$);
  $blcrY$$ = Math.min($blcrY$$, 0.5 * $h$$18$$);
  $tlcrX$$ = Math.min($tlcrX$$, 0.5 * $w$$23$$);
  $trcrX$$ = Math.min($trcrX$$, 0.5 * $w$$23$$);
  $brcrX$$ = Math.min($brcrX$$, 0.5 * $w$$23$$);
  $blcrX$$ = Math.min($blcrX$$, 0.5 * $w$$23$$);
  return dvt.$PathUtils$.moveTo($x$$124$$ + $tlcrX$$, $y$$103$$) + dvt.$PathUtils$.lineTo($x$$124$$ + $w$$23$$ - $trcrX$$, $y$$103$$) + dvt.$PathUtils$.arcTo($trcrX$$, $trcrY$$, Math.PI / 2, 1, $x$$124$$ + $w$$23$$, $y$$103$$ + $trcrY$$) + dvt.$PathUtils$.lineTo($x$$124$$ + $w$$23$$, $y$$103$$ + $h$$18$$ - $brcrY$$) + dvt.$PathUtils$.arcTo($brcrX$$, $brcrY$$, Math.PI / 2, 1, $x$$124$$ + $w$$23$$ - $brcrX$$, $y$$103$$ + $h$$18$$) + dvt.$PathUtils$.lineTo($x$$124$$ + $blcrX$$, $y$$103$$ + $h$$18$$) + 
  dvt.$PathUtils$.arcTo($blcrX$$, $blcrY$$, Math.PI / 2, 1, $x$$124$$, $y$$103$$ + $h$$18$$ - $blcrY$$) + dvt.$PathUtils$.lineTo($x$$124$$, $y$$103$$ + $tlcrY$$) + dvt.$PathUtils$.arcTo($tlcrX$$, $tlcrY$$, Math.PI / 2, 1, $x$$124$$ + $tlcrX$$, $y$$103$$) + dvt.$PathUtils$.closePath()
};
function $DvtStatusMeterGaugeIndicator$$($gauge$$44$$, $context$$176$$, $x1$$26$$, $x2$$24$$, $y1$$19$$, $y2$$18$$) {
  this.Init($gauge$$44$$, $context$$176$$, $x1$$26$$, $x2$$24$$, $y1$$19$$, $y2$$18$$)
}
dvt.$Obj$.$createSubclass$($DvtStatusMeterGaugeIndicator$$, dvt.$Path$);
$DvtStatusMeterGaugeIndicator$$.prototype.Init = function $$DvtStatusMeterGaugeIndicator$$$$Init$($gauge$$45$$, $context$$177$$, $x1$$27$$, $x2$$25$$, $y1$$20$$, $y2$$19$$) {
  $DvtStatusMeterGaugeIndicator$$.$superclass$.Init.call(this, $context$$177$$);
  this.$_gauge$ = $gauge$$45$$;
  this.$setCoords$($x1$$27$$, $x2$$25$$, $y1$$20$$, $y2$$19$$)
};
$DvtStatusMeterGaugeIndicator$$.prototype.$setCoords$ = function $$DvtStatusMeterGaugeIndicator$$$$$setCoords$$($width$$57_x1$$28$$, $multiplier$$3_x2$$26$$, $height$$50_y1$$21$$, $options$$159_y2$$20$$) {
  this.$_x1$ = $width$$57_x1$$28$$;
  this.$_x2$ = $multiplier$$3_x2$$26$$;
  this.$_y1$ = $height$$50_y1$$21$$;
  this.$_y2$ = $options$$159_y2$$20$$;
  var $cmds$$14_x$$125$$ = Math.min($width$$57_x1$$28$$, $multiplier$$3_x2$$26$$), $y$$104$$ = Math.min($height$$50_y1$$21$$, $options$$159_y2$$20$$);
  $width$$57_x1$$28$$ = Math.abs($width$$57_x1$$28$$ - $multiplier$$3_x2$$26$$);
  $height$$50_y1$$21$$ = Math.abs($options$$159_y2$$20$$ - $height$$50_y1$$21$$);
  $options$$159_y2$$20$$ = this.$_gauge$.$getOptions$();
  $multiplier$$3_x2$$26$$ = "vertical" == $options$$159_y2$$20$$.orientation ? $width$$57_x1$$28$$ : $height$$50_y1$$21$$;
  var $defaultValue$$2$$ = $DvtGaugeDefaults$isSkyrosSkin$$(this.$_gauge$) ? "25%" : "15%", $cmds$$14_x$$125$$ = $DvtStatusMeterGaugeRenderer$$.$rectangleWithBorderRadius$($cmds$$14_x$$125$$, $y$$104$$, $width$$57_x1$$28$$, $height$$50_y1$$21$$, $options$$159_y2$$20$$.borderRadius, $multiplier$$3_x2$$26$$, $defaultValue$$2$$);
  this.$setCmds$($cmds$$14_x$$125$$)
};
$DvtStatusMeterGaugeIndicator$$.prototype.$getAnimationParams$ = function $$DvtStatusMeterGaugeIndicator$$$$$getAnimationParams$$() {
  return[this.$_x1$, this.$_x2$, this.$_y1$, this.$_y2$]
};
$DvtStatusMeterGaugeIndicator$$.prototype.$setAnimationParams$ = function $$DvtStatusMeterGaugeIndicator$$$$$setAnimationParams$$($params$$24$$) {
  $params$$24$$ && 4 == $params$$24$$.length && this.$setCoords$($params$$24$$[0], $params$$24$$[1], $params$$24$$[2], $params$$24$$[3])
};
function $DvtStatusMeterGaugeCircularIndicator$$($context$$178$$, $bounds$$69$$, $startAngle$$9$$, $angleExtent$$8$$, $innerRadius$$6$$, $outerRadius$$4$$) {
  this.Init($context$$178$$, $bounds$$69$$, $startAngle$$9$$, $angleExtent$$8$$, $innerRadius$$6$$, $outerRadius$$4$$)
}
dvt.$Obj$.$createSubclass$($DvtStatusMeterGaugeCircularIndicator$$, dvt.$Path$);
$DvtStatusMeterGaugeCircularIndicator$$.prototype.Init = function $$DvtStatusMeterGaugeCircularIndicator$$$$Init$($context$$179$$, $bounds$$70$$, $startAngle$$10$$, $angleExtent$$9$$, $innerRadius$$7$$, $outerRadius$$5$$) {
  $DvtStatusMeterGaugeCircularIndicator$$.$superclass$.Init.call(this, $context$$179$$);
  $JSCompiler_StaticMethods_setPath$$(this, $bounds$$70$$, $startAngle$$10$$, $angleExtent$$9$$, $innerRadius$$7$$, $outerRadius$$5$$)
};
function $JSCompiler_StaticMethods_setPath$$($JSCompiler_StaticMethods_setPath$self$$, $bounds$$71$$, $startAngle$$11$$, $angleExtent$$10$$, $innerRadius$$8$$, $outerRadius$$6$$) {
  $bounds$$71$$ && $bounds$$71$$ instanceof dvt.$Rectangle$ ? $JSCompiler_StaticMethods_setPath$self$$.$_bounds$ = $bounds$$71$$ : $bounds$$71$$ = $JSCompiler_StaticMethods_setPath$self$$.$_bounds$;
  $JSCompiler_StaticMethods_setPath$self$$.$_startAngle$ = $startAngle$$11$$;
  $JSCompiler_StaticMethods_setPath$self$$.$_angleExtent$ = $angleExtent$$10$$;
  $JSCompiler_StaticMethods_setPath$self$$.$_innerRadius$ = $innerRadius$$8$$;
  $JSCompiler_StaticMethods_setPath$self$$.$_outerRadius$ = $outerRadius$$6$$;
  $JSCompiler_StaticMethods_setPath$self$$.$setCmds$($DvtStatusMeterGaugeRenderer$$.$createCircularPathCmd$($bounds$$71$$, $startAngle$$11$$, $angleExtent$$10$$, $innerRadius$$8$$, $outerRadius$$6$$))
}
$DvtStatusMeterGaugeCircularIndicator$$.prototype.$getAnimationParams$ = function $$DvtStatusMeterGaugeCircularIndicator$$$$$getAnimationParams$$() {
  return[this.$_bounds$, this.$_startAngle$, this.$_angleExtent$, this.$_innerRadius$, this.$_outerRadius$]
};
$DvtStatusMeterGaugeCircularIndicator$$.prototype.$setAnimationParams$ = function $$DvtStatusMeterGaugeCircularIndicator$$$$$setAnimationParams$$($params$$25$$) {
  $params$$25$$ && 5 == $params$$25$$.length && $JSCompiler_StaticMethods_setPath$$(this, $params$$25$$[0], $params$$25$$[1], $params$$25$$[2], $params$$25$$[3], $params$$25$$[4])
};
dvt.$DialGauge$ = $JSCompiler_emptyFn$$();
$goog$exportPath_$$("dvt.DialGauge", dvt.$DialGauge$);
dvt.$Obj$.$createSubclass$(dvt.$DialGauge$, $DvtGauge$$);
dvt.$DialGauge$.newInstance = function $dvt$$DialGauge$$newInstance$($context$$180$$, $callback$$74$$, $callbackObj$$44$$) {
  var $gauge$$46$$ = new dvt.$DialGauge$;
  $gauge$$46$$.Init($context$$180$$, $callback$$74$$, $callbackObj$$44$$);
  return $gauge$$46$$
};
dvt.$DialGauge$.newInstance = dvt.$DialGauge$.newInstance;
$JSCompiler_prototypeAlias$$ = dvt.$DialGauge$.prototype;
$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($context$$181$$, $callback$$75$$, $callbackObj$$45$$) {
  dvt.$DialGauge$.$superclass$.Init.call(this, $context$$181$$, $callback$$75$$, $callbackObj$$45$$);
  this.$Defaults$ = new $DvtDialGaugeDefaults$$;
  this.$__anchorPt$ = $JSCompiler_alias_NULL$$
};
$JSCompiler_prototypeAlias$$.$SetOptions$ = function $$JSCompiler_prototypeAlias$$$$SetOptions$$($options$$160$$) {
  var $backgroundType$$1$$ = $options$$160$$.background, $indicatorType$$1$$ = $options$$160$$.indicator;
  "string" === typeof $backgroundType$$1$$ && ($options$$160$$.background = $DvtGaugeStyleUtils$$.$getDialBackground$($backgroundType$$1$$), $options$$160$$.background.images = $options$$160$$._backgroundImages);
  "string" === typeof $indicatorType$$1$$ && ($options$$160$$.indicator = $DvtGaugeStyleUtils$$.$getDialIndicator$($indicatorType$$1$$), $options$$160$$.indicator.images = $options$$160$$._indicatorImages);
  dvt.$DialGauge$.$superclass$.$SetOptions$.call(this, this.$Defaults$.$calcOptions$($options$$160$$))
};
$JSCompiler_prototypeAlias$$.$Render$ = function $$JSCompiler_prototypeAlias$$$$Render$$($container$$109$$, $width$$58$$, $height$$51$$) {
  $DvtDialGaugeRenderer$$.$render$(this, $container$$109$$, $width$$58$$, $height$$51$$)
};
$JSCompiler_prototypeAlias$$.$renderUpdate$ = function $$JSCompiler_prototypeAlias$$$$renderUpdate$$() {
  $DvtDialGaugeRenderer$$.$updateIndicatorAndLabel$(this, this.$_container$, this.$Width$, this.$Height$);
  var $eventManager$$15$$ = this.$getEventManager$();
  $eventManager$$15$$ && $eventManager$$15$$.$associate$(this.$_editingOverlay$, this.$__getLogicalObject$(), $JSCompiler_alias_TRUE$$);
  $JSCompiler_StaticMethods_UpdateAriaLiveValue$$(this, this.$_container$)
};
$JSCompiler_prototypeAlias$$.$CreateAnimationOnDisplay$ = function $$JSCompiler_prototypeAlias$$$$CreateAnimationOnDisplay$$($objs$$9$$, $animatedObjs$$2_animationType$$3$$, $animationDuration$$6$$) {
  $animatedObjs$$2_animationType$$3$$ = [];
  for(var $i$$387$$ = 0;$i$$387$$ < $objs$$9$$.length;$i$$387$$++) {
    var $obj$$131$$ = $objs$$9$$[$i$$387$$], $endState$$15$$ = $obj$$131$$.$getAnimationParams$(), $animation$$2_startAngle$$12$$ = $DvtDialGaugeRenderer$$.$__getStartAngle$(this);
    $obj$$131$$.$setAngle$($animation$$2_startAngle$$12$$);
    $animation$$2_startAngle$$12$$ = new dvt.$CustomAnimation$(this.$getCtx$(), $obj$$131$$, $animationDuration$$6$$);
    $animation$$2_startAngle$$12$$.$_animator$.$addProp$(dvt.$Animator$.$TYPE_NUMBER_ARRAY$, $obj$$131$$, $obj$$131$$.$getAnimationParams$, $obj$$131$$.$setAnimationParams$, $endState$$15$$);
    $animation$$2_startAngle$$12$$.$_animator$.$setEasing$(function($objs$$9$$) {
      return dvt.$Easing$.$backOut$($objs$$9$$, 0.7)
    });
    $animatedObjs$$2_animationType$$3$$.push($animation$$2_startAngle$$12$$)
  }
  return new dvt.$ParallelPlayable$(this.$getCtx$(), $animatedObjs$$2_animationType$$3$$)
};
$JSCompiler_prototypeAlias$$.$GetValueAt$ = function $$JSCompiler_prototypeAlias$$$$GetValueAt$$($x$$126$$, $y$$105$$) {
  var $angle$$30_ratio$$10$$ = dvt.$Math$.$radsToDegrees$(Math.atan2($y$$105$$ - this.$__anchorPt$.y, $x$$126$$ - this.$__anchorPt$.x));
  0 >= $angle$$30_ratio$$10$$ && ($angle$$30_ratio$$10$$ += 360);
  var $isRTL$$26_minValue$$11$$ = dvt.$Agent$.$isRightToLeft$(this.$getCtx$()), $angleExtent$$11_backgroundOptions$$ = this.$getOptions$().background, $startAngle$$13$$ = $isRTL$$26_minValue$$11$$ ? 180 + $angleExtent$$11_backgroundOptions$$.startAngle : 360 - $angleExtent$$11_backgroundOptions$$.startAngle, $angleExtent$$11_backgroundOptions$$ = $angleExtent$$11_backgroundOptions$$.angleExtent, $endAngle$$5$$ = $startAngle$$13$$ + $angleExtent$$11_backgroundOptions$$;
  if($isRTL$$26_minValue$$11$$) {
    $endAngle$$5$$ = $startAngle$$13$$;
    for($startAngle$$13$$ -= $angleExtent$$11_backgroundOptions$$;0 > $startAngle$$13$$;) {
      $startAngle$$13$$ += 360, $endAngle$$5$$ += 360
    }
  }
  $angle$$30_ratio$$10$$ + 360 >= $startAngle$$13$$ && $angle$$30_ratio$$10$$ + 360 <= $endAngle$$5$$ ? $angle$$30_ratio$$10$$ += 360 : $angle$$30_ratio$$10$$ >= $startAngle$$13$$ && $angle$$30_ratio$$10$$ <= $endAngle$$5$$ || ($angle$$30_ratio$$10$$ = $angle$$30_ratio$$10$$ > $endAngle$$5$$ ? $startAngle$$13$$ + 360 - $angle$$30_ratio$$10$$ < $angle$$30_ratio$$10$$ - $endAngle$$5$$ ? $startAngle$$13$$ : $endAngle$$5$$ : $startAngle$$13$$ - $angle$$30_ratio$$10$$ < $angle$$30_ratio$$10$$ + 360 - 
  $endAngle$$5$$ ? $startAngle$$13$$ : $endAngle$$5$$);
  $angle$$30_ratio$$10$$ = ($angle$$30_ratio$$10$$ - $startAngle$$13$$) / $angleExtent$$11_backgroundOptions$$;
  $isRTL$$26_minValue$$11$$ && ($angle$$30_ratio$$10$$ = 1 - $angle$$30_ratio$$10$$);
  $isRTL$$26_minValue$$11$$ = this.$Options$.min;
  return $angle$$30_ratio$$10$$ * (this.$Options$.max - $isRTL$$26_minValue$$11$$) + $isRTL$$26_minValue$$11$$
};
function $DvtDialGaugeDefaults$$() {
  this.Init({skyros:$DvtDialGaugeDefaults$VERSION_1$$, alta:{}})
}
dvt.$Obj$.$createSubclass$($DvtDialGaugeDefaults$$, $DvtGaugeDefaults$$);
var $DvtDialGaugeDefaults$VERSION_1$$ = {background:{startAngle:180, angleExtent:180, indicatorLength:0.7}, metricLabel:{style:new dvt.$CSSStyle$("font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;")}, tickLabel:{scaling:"auto", style:new dvt.$CSSStyle$("font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;")}}, $DvtDialGaugeRenderer$$ = {};
dvt.$Obj$.$createSubclass$($DvtDialGaugeRenderer$$, dvt.$Obj$);
$DvtDialGaugeRenderer$$.$render$ = function $$DvtDialGaugeRenderer$$$$render$$($gauge$$47$$, $container$$110$$, $bounds$$72_width$$59$$, $height$$52$$) {
  $DvtGaugeDataUtils$$.$hasData$($gauge$$47$$) ? ($bounds$$72_width$$59$$ = new dvt.$Rectangle$(0, 0, $bounds$$72_width$$59$$, $height$$52$$), $DvtDialGaugeRenderer$$.$_renderShape$($gauge$$47$$, $container$$110$$, $bounds$$72_width$$59$$), $DvtDialGaugeRenderer$$.$_renderLabel$($gauge$$47$$, $container$$110$$, $bounds$$72_width$$59$$)) : $DvtGaugeRenderer$$.$renderEmptyText$($gauge$$47$$, $container$$110$$, new dvt.$Rectangle$(0, 0, $bounds$$72_width$$59$$, $height$$52$$))
};
$DvtDialGaugeRenderer$$.$updateIndicatorAndLabel$ = function $$DvtDialGaugeRenderer$$$$updateIndicatorAndLabel$$($gauge$$48$$, $container$$111$$, $width$$60$$, $height$$53$$) {
  $gauge$$48$$.$__indicatorContainer$.$setAngle$($DvtDialGaugeRenderer$$.$_getRotation$($gauge$$48$$, $gauge$$48$$.$getOptions$().value));
  $container$$111$$.removeChild($gauge$$48$$.$__label$);
  $DvtDialGaugeRenderer$$.$_renderLabel$($gauge$$48$$, $container$$111$$, new dvt.$Rectangle$(0, 0, $width$$60$$, $height$$53$$))
};
$DvtDialGaugeRenderer$$.$_renderShape$ = function $$DvtDialGaugeRenderer$$$$_renderShape$$($gauge$$49$$, $backgroundAnchor_container$$112$$, $bounds$$73_scale$$14$$) {
  var $angleRads$$5_options$$161$$ = $gauge$$49$$.$getOptions$(), $background$$4_indicator$$8$$ = $DvtDialGaugeRenderer$$.$_createBackground$($gauge$$49$$, $bounds$$73_scale$$14$$);
  $backgroundAnchor_container$$112$$.$addChild$($background$$4_indicator$$8$$);
  $angleRads$$5_options$$161$$.background.majorTickCount && $angleRads$$5_options$$161$$.background.radius && $DvtDialGaugeRenderer$$.$_renderTickLabels$($gauge$$49$$, $backgroundAnchor_container$$112$$, $bounds$$73_scale$$14$$);
  var $background$$4_indicator$$8$$ = $DvtDialGaugeRenderer$$.$_createIndicator$($gauge$$49$$, $bounds$$73_scale$$14$$), $translateContainer$$ = new dvt.$Container$($gauge$$49$$.$getCtx$()), $rotateContainer$$ = new $DvtDialGaugeIndicator$$($gauge$$49$$.$getCtx$());
  $backgroundAnchor_container$$112$$.$addChild$($translateContainer$$);
  $translateContainer$$.$addChild$($rotateContainer$$);
  $rotateContainer$$.$addChild$($background$$4_indicator$$8$$);
  var $indicatorBounds_mat$$17$$ = $background$$4_indicator$$8$$.$getDimensions$(), $angleRads$$5_options$$161$$ = $DvtDialGaugeRenderer$$.$_getRotation$($gauge$$49$$, $angleRads$$5_options$$161$$.value);
  $backgroundAnchor_container$$112$$ = $DvtDialGaugeRenderer$$.$_getBackgroundAnchorPoint$($gauge$$49$$, $bounds$$73_scale$$14$$);
  var $indicatorAnchor$$ = $DvtDialGaugeRenderer$$.$_getIndicatorAnchorPoint$($gauge$$49$$, $indicatorBounds_mat$$17$$);
  $bounds$$73_scale$$14$$ = $DvtDialGaugeRenderer$$.$_getIndicatorScaleFactor$($gauge$$49$$, $bounds$$73_scale$$14$$, $indicatorBounds_mat$$17$$);
  $indicatorBounds_mat$$17$$ = new dvt.$Matrix$;
  $indicatorBounds_mat$$17$$.translate(-$indicatorAnchor$$.x, -$indicatorAnchor$$.y);
  $indicatorBounds_mat$$17$$.scale($bounds$$73_scale$$14$$, $bounds$$73_scale$$14$$);
  $background$$4_indicator$$8$$.$setMatrix$($indicatorBounds_mat$$17$$);
  $rotateContainer$$.$setAngle$($angleRads$$5_options$$161$$);
  $indicatorBounds_mat$$17$$ = new dvt.$Matrix$;
  $indicatorBounds_mat$$17$$.translate($backgroundAnchor_container$$112$$.x, $backgroundAnchor_container$$112$$.y);
  $translateContainer$$.$setMatrix$($indicatorBounds_mat$$17$$);
  $gauge$$49$$.$__shapes$.push($rotateContainer$$);
  $gauge$$49$$.$__indicatorContainer$ = $rotateContainer$$;
  $gauge$$49$$.$__anchorPt$ = $backgroundAnchor_container$$112$$
};
$DvtDialGaugeRenderer$$.$_createBackground$ = function $$DvtDialGaugeRenderer$$$$_createBackground$$($gauge$$50$$, $bounds$$74$$) {
  var $backgroundOptions$$1$$ = $gauge$$50$$.$getOptions$().background, $isRTL$$27_radiusScale$$1$$ = dvt.$Agent$.$isRightToLeft$($gauge$$50$$.$getCtx$()), $isTouchDevice$$2_locImages_metLblBounds_width$$61$$ = dvt.$Agent$.$isTouchDevice$(), $shape$$51_widthRes$$ = $isTouchDevice$$2_locImages_metLblBounds_width$$61$$ ? 2 * $bounds$$74$$.$w$ : $bounds$$74$$.$w$, $heightRes_scale$$15$$ = $isTouchDevice$$2_locImages_metLblBounds_width$$61$$ ? 2 * $bounds$$74$$.$h$ : $bounds$$74$$.$h$, $images$$10_tx$$17$$ = 
  $backgroundOptions$$1$$.images;
  if($images$$10_tx$$17$$ && 0 < $images$$10_tx$$17$$.length) {
    var $i$$388_ty$$18$$, $refWidth$$, $refHeight$$, $isTouchDevice$$2_locImages_metLblBounds_width$$61$$ = [];
    for($i$$388_ty$$18$$ = 0;$i$$388_ty$$18$$ < $images$$10_tx$$17$$.length;$i$$388_ty$$18$$++) {
      var $imageDims$$1_isImageRTL_source$$24$$ = "rtl" == $images$$10_tx$$17$$[$i$$388_ty$$18$$].dir;
      $isRTL$$27_radiusScale$$1$$ && $imageDims$$1_isImageRTL_source$$24$$ ? $isTouchDevice$$2_locImages_metLblBounds_width$$61$$.push($images$$10_tx$$17$$[$i$$388_ty$$18$$]) : !$isRTL$$27_radiusScale$$1$$ && !$imageDims$$1_isImageRTL_source$$24$$ && $isTouchDevice$$2_locImages_metLblBounds_width$$61$$.push($images$$10_tx$$17$$[$i$$388_ty$$18$$])
    }
    $images$$10_tx$$17$$ = 0 < $isTouchDevice$$2_locImages_metLblBounds_width$$61$$.length ? $isTouchDevice$$2_locImages_metLblBounds_width$$61$$ : $images$$10_tx$$17$$;
    for($i$$388_ty$$18$$ = 0;$i$$388_ty$$18$$ < $images$$10_tx$$17$$.length;$i$$388_ty$$18$$++) {
      var $height$$54_image$$8$$ = $images$$10_tx$$17$$[$i$$388_ty$$18$$], $imageDims$$1_isImageRTL_source$$24$$ = $height$$54_image$$8$$.src, $isTouchDevice$$2_locImages_metLblBounds_width$$61$$ = $height$$54_image$$8$$.width, $height$$54_image$$8$$ = $height$$54_image$$8$$.height, $isSvg$$ = $imageDims$$1_isImageRTL_source$$24$$ && -1 < $imageDims$$1_isImageRTL_source$$24$$.search(".svg");
      0 == $i$$388_ty$$18$$ && ($refWidth$$ = $isTouchDevice$$2_locImages_metLblBounds_width$$61$$, $refHeight$$ = $height$$54_image$$8$$);
      if($isSvg$$ || $isTouchDevice$$2_locImages_metLblBounds_width$$61$$ >= $shape$$51_widthRes$$ && $height$$54_image$$8$$ >= $heightRes_scale$$15$$ || $i$$388_ty$$18$$ == $images$$10_tx$$17$$.length - 1) {
        var $shape$$51_widthRes$$ = new dvt.$Image$($gauge$$50$$.$getCtx$(), $imageDims$$1_isImageRTL_source$$24$$, 0, 0, $isTouchDevice$$2_locImages_metLblBounds_width$$61$$, $height$$54_image$$8$$), $matrix$$8$$ = new dvt.$Matrix$, $heightRes_scale$$15$$ = Math.min($bounds$$74$$.$w$ / $isTouchDevice$$2_locImages_metLblBounds_width$$61$$, $bounds$$74$$.$h$ / $height$$54_image$$8$$), $images$$10_tx$$17$$ = ($bounds$$74$$.$w$ - $heightRes_scale$$15$$ * $isTouchDevice$$2_locImages_metLblBounds_width$$61$$) / 
        2;
        $i$$388_ty$$18$$ = ($bounds$$74$$.$h$ - $heightRes_scale$$15$$ * $height$$54_image$$8$$) / 2;
        $matrix$$8$$.scale($heightRes_scale$$15$$, $heightRes_scale$$15$$);
        $matrix$$8$$.translate($images$$10_tx$$17$$, $i$$388_ty$$18$$);
        $shape$$51_widthRes$$.$setMatrix$($matrix$$8$$);
        $isSvg$$ && dvt.$Agent$.$isPlatformWebkit$() && ($imageDims$$1_isImageRTL_source$$24$$ = dvt.$ImageLoader$.$loadImage$($gauge$$50$$.$getCtx$(), $imageDims$$1_isImageRTL_source$$24$$, dvt.$Obj$.$createCallback$($shape$$51_widthRes$$, $shape$$51_widthRes$$.$__setDimensions$))) && $shape$$51_widthRes$$.$__setDimensions$($imageDims$$1_isImageRTL_source$$24$$);
        $bounds$$74$$.x += $images$$10_tx$$17$$;
        $bounds$$74$$.y += $i$$388_ty$$18$$;
        $bounds$$74$$.$w$ = $heightRes_scale$$15$$ * $isTouchDevice$$2_locImages_metLblBounds_width$$61$$;
        $bounds$$74$$.$h$ = $heightRes_scale$$15$$ * $height$$54_image$$8$$;
        !isNaN($backgroundOptions$$1$$.anchorX) && !isNaN($backgroundOptions$$1$$.anchorY) && ($backgroundOptions$$1$$._anchorX = $isRTL$$27_radiusScale$$1$$ ? $bounds$$74$$.x + $bounds$$74$$.$w$ - $bounds$$74$$.$w$ * $backgroundOptions$$1$$.anchorX / $refWidth$$ : $bounds$$74$$.x + $bounds$$74$$.$w$ * $backgroundOptions$$1$$.anchorX / $refWidth$$, $backgroundOptions$$1$$._anchorY = $bounds$$74$$.y + $bounds$$74$$.$h$ * $backgroundOptions$$1$$.anchorY / $refHeight$$);
        $backgroundOptions$$1$$.metricLabelBounds && ($isTouchDevice$$2_locImages_metLblBounds_width$$61$$ = {}, $isTouchDevice$$2_locImages_metLblBounds_width$$61$$.width = $bounds$$74$$.$w$ * $backgroundOptions$$1$$.metricLabelBounds.width / $refWidth$$, $isTouchDevice$$2_locImages_metLblBounds_width$$61$$.height = $bounds$$74$$.$h$ * $backgroundOptions$$1$$.metricLabelBounds.height / $refHeight$$, $isTouchDevice$$2_locImages_metLblBounds_width$$61$$.y = $bounds$$74$$.y + $bounds$$74$$.$h$ * $backgroundOptions$$1$$.metricLabelBounds.y / 
        $refHeight$$, $isTouchDevice$$2_locImages_metLblBounds_width$$61$$.x = $isRTL$$27_radiusScale$$1$$ ? $bounds$$74$$.x + $bounds$$74$$.$w$ - $bounds$$74$$.$w$ * $backgroundOptions$$1$$.metricLabelBounds.x / $refWidth$$ - $isTouchDevice$$2_locImages_metLblBounds_width$$61$$.width : $bounds$$74$$.x + $bounds$$74$$.$w$ * $backgroundOptions$$1$$.metricLabelBounds.x / $refWidth$$, $backgroundOptions$$1$$._metricLabelBounds = $isTouchDevice$$2_locImages_metLblBounds_width$$61$$);
        $isRTL$$27_radiusScale$$1$$ = Math.min($bounds$$74$$.$w$ / $refWidth$$, $bounds$$74$$.$h$ / $refHeight$$);
        $backgroundOptions$$1$$._radius = $backgroundOptions$$1$$.radius * $isRTL$$27_radiusScale$$1$$;
        $backgroundOptions$$1$$._tickLabelHeight = $backgroundOptions$$1$$.tickLabelHeight * $bounds$$74$$.$h$ / $refHeight$$;
        $backgroundOptions$$1$$._tickLabelWidth = $backgroundOptions$$1$$.tickLabelWidth * $bounds$$74$$.$w$ / $refWidth$$;
        return $shape$$51_widthRes$$
      }
    }
  }
  return $JSCompiler_alias_NULL$$
};
$DvtDialGaugeRenderer$$.$_createIndicator$ = function $$DvtDialGaugeRenderer$$$$_createIndicator$$($gauge$$51$$, $bounds$$75$$) {
  var $indicatorOptions$$ = $gauge$$51$$.$getOptions$().indicator, $indicatorLength_source$$25$$ = $DvtDialGaugeRenderer$$.$_getIndicatorLength$($gauge$$51$$, $bounds$$75$$), $heightRes$$1_shape$$52$$ = dvt.$Agent$.$isTouchDevice$() ? 2 * $indicatorLength_source$$25$$ : $indicatorLength_source$$25$$, $refWidth$$1$$, $refHeight$$1$$, $images$$11$$ = $indicatorOptions$$.images;
  if($images$$11$$ && 0 < $images$$11$$.length) {
    for(var $i$$389$$ = 0;$i$$389$$ < $images$$11$$.length;$i$$389$$++) {
      var $height$$55_image$$9$$ = $images$$11$$[$i$$389$$], $indicatorLength_source$$25$$ = $height$$55_image$$9$$.src, $width$$62$$ = $height$$55_image$$9$$.width, $height$$55_image$$9$$ = $height$$55_image$$9$$.height, $isSvg$$1$$ = $indicatorLength_source$$25$$ && -1 < $indicatorLength_source$$25$$.search(".svg");
      0 == $i$$389$$ && ($refWidth$$1$$ = $width$$62$$, $refHeight$$1$$ = $height$$55_image$$9$$);
      if($isSvg$$1$$ || $height$$55_image$$9$$ >= $heightRes$$1_shape$$52$$ || $i$$389$$ == $images$$11$$.length - 1) {
        return $heightRes$$1_shape$$52$$ = new dvt.$Image$($gauge$$51$$.$getCtx$(), $indicatorLength_source$$25$$, 0, 0, $width$$62$$, $height$$55_image$$9$$), $isSvg$$1$$ && dvt.$Agent$.$isPlatformWebkit$() && dvt.$ImageLoader$.$loadImage$($gauge$$51$$.$getCtx$(), $indicatorLength_source$$25$$, dvt.$Obj$.$createCallback$($heightRes$$1_shape$$52$$, $heightRes$$1_shape$$52$$.$__setDimensions$)) && ($heightRes$$1_shape$$52$$.$setWidth$($width$$62$$), $heightRes$$1_shape$$52$$.$setHeight$($height$$55_image$$9$$)), 
        !isNaN($indicatorOptions$$.anchorX) && !isNaN($indicatorOptions$$.anchorY) && ($indicatorOptions$$._anchorX = $indicatorOptions$$.anchorX * $width$$62$$ / $refWidth$$1$$, $indicatorOptions$$._anchorY = $indicatorOptions$$.anchorY * $height$$55_image$$9$$ / $refHeight$$1$$), $heightRes$$1_shape$$52$$
      }
    }
  }
  return $JSCompiler_alias_NULL$$
};
$DvtDialGaugeRenderer$$.$__getStartAngle$ = function $$DvtDialGaugeRenderer$$$$__getStartAngle$$($gauge$$52_startAngle$$14$$) {
  var $backgroundOptions$$2$$ = $gauge$$52_startAngle$$14$$.$getOptions$().background;
  $gauge$$52_startAngle$$14$$ = dvt.$Agent$.$isRightToLeft$($gauge$$52_startAngle$$14$$.$getCtx$()) ? 180 - $backgroundOptions$$2$$.startAngle : $backgroundOptions$$2$$.startAngle;
  return Math.PI * (90 - $gauge$$52_startAngle$$14$$) / 180
};
$DvtDialGaugeRenderer$$.$_getRotation$ = function $$DvtDialGaugeRenderer$$$$_getRotation$$($gauge$$53$$, $value$$140$$) {
  var $isRTL$$29_maxValue$$12_options$$162$$ = $gauge$$53$$.$getOptions$(), $backgroundOptions$$3$$ = $isRTL$$29_maxValue$$12_options$$162$$.background, $minValue$$12_ratio$$11$$ = $isRTL$$29_maxValue$$12_options$$162$$.min, $isRTL$$29_maxValue$$12_options$$162$$ = $isRTL$$29_maxValue$$12_options$$162$$.max;
  $value$$140$$ = Math.max(Math.min($value$$140$$, $isRTL$$29_maxValue$$12_options$$162$$), $minValue$$12_ratio$$11$$);
  $minValue$$12_ratio$$11$$ = ($value$$140$$ - $minValue$$12_ratio$$11$$) / ($isRTL$$29_maxValue$$12_options$$162$$ - $minValue$$12_ratio$$11$$);
  $isRTL$$29_maxValue$$12_options$$162$$ = dvt.$Agent$.$isRightToLeft$($gauge$$53$$.$getCtx$());
  return Math.PI * (90 - (($isRTL$$29_maxValue$$12_options$$162$$ ? 180 - $backgroundOptions$$3$$.startAngle : $backgroundOptions$$3$$.startAngle) - $minValue$$12_ratio$$11$$ * ($isRTL$$29_maxValue$$12_options$$162$$ ? -$backgroundOptions$$3$$.angleExtent : $backgroundOptions$$3$$.angleExtent))) / 180
};
$DvtDialGaugeRenderer$$.$_getBackgroundAnchorPoint$ = function $$DvtDialGaugeRenderer$$$$_getBackgroundAnchorPoint$$($gauge$$54$$, $bounds$$76$$) {
  var $anchorY_backgroundOptions$$4$$ = $gauge$$54$$.$getOptions$().background, $anchorX$$ = $anchorY_backgroundOptions$$4$$._anchorX, $anchorY_backgroundOptions$$4$$ = $anchorY_backgroundOptions$$4$$._anchorY;
  return!isNaN($anchorX$$) && !isNaN($anchorY_backgroundOptions$$4$$) ? new dvt.$Point$($anchorX$$, $anchorY_backgroundOptions$$4$$) : new dvt.$Point$($bounds$$76$$.x + $bounds$$76$$.$w$ / 2, $bounds$$76$$.y + $bounds$$76$$.$h$ / 2)
};
$DvtDialGaugeRenderer$$.$_getIndicatorLength$ = function $$DvtDialGaugeRenderer$$$$_getIndicatorLength$$($gauge$$55$$, $bounds$$77$$) {
  var $radius$$16$$ = Math.min($bounds$$77$$.$w$, $bounds$$77$$.$h$) / 2;
  return $gauge$$55$$.$getOptions$().background.indicatorLength * $radius$$16$$
};
$DvtDialGaugeRenderer$$.$_getIndicatorAnchorPoint$ = function $$DvtDialGaugeRenderer$$$$_getIndicatorAnchorPoint$$($gauge$$56$$, $indicatorBounds$$1$$) {
  var $anchorY$$1_indicatorOptions$$1$$ = $gauge$$56$$.$getOptions$().indicator, $anchorX$$1$$ = $anchorY$$1_indicatorOptions$$1$$._anchorX, $anchorY$$1_indicatorOptions$$1$$ = $anchorY$$1_indicatorOptions$$1$$._anchorY;
  return!isNaN($anchorX$$1$$) && !isNaN($anchorY$$1_indicatorOptions$$1$$) ? new dvt.$Point$($anchorX$$1$$, $anchorY$$1_indicatorOptions$$1$$) : new dvt.$Point$($indicatorBounds$$1$$.x + $indicatorBounds$$1$$.$w$ / 2, $indicatorBounds$$1$$.y + $indicatorBounds$$1$$.$h$)
};
$DvtDialGaugeRenderer$$.$_getIndicatorScaleFactor$ = function $$DvtDialGaugeRenderer$$$$_getIndicatorScaleFactor$$($gauge$$57$$, $bounds$$79$$, $indicatorBounds$$2$$) {
  return $DvtDialGaugeRenderer$$.$_getIndicatorLength$($gauge$$57$$, $bounds$$79$$) / $indicatorBounds$$2$$.$h$
};
$DvtDialGaugeRenderer$$.$_renderLabel$ = function $$DvtDialGaugeRenderer$$$$_renderLabel$$($gauge$$58$$, $container$$113$$, $bounds$$80$$) {
  var $options$$163_size$$24$$ = $gauge$$58$$.$getOptions$();
  if("on" == $options$$163_size$$24$$.metricLabel.rendered) {
    var $labelString$$5$$ = $DvtGaugeRenderer$$.$getFormattedMetricLabel$($options$$163_size$$24$$.value, $gauge$$58$$), $minString$$1$$ = $DvtGaugeRenderer$$.$getFormattedMetricLabel$($options$$163_size$$24$$.min, $gauge$$58$$), $maxString$$1$$ = $DvtGaugeRenderer$$.$getFormattedMetricLabel$($options$$163_size$$24$$.max, $gauge$$58$$), $cx$$20_label$$51$$ = $bounds$$80$$.x + $bounds$$80$$.$w$ / 2, $cy$$21$$ = $bounds$$80$$.y + $bounds$$80$$.$h$ / 2, $labelWidth$$5$$ = $bounds$$80$$.$w$, $labelHeight$$4$$ = 
    $bounds$$80$$.$h$, $metricLabelBounds$$ = $options$$163_size$$24$$.background._metricLabelBounds;
    $metricLabelBounds$$ && ($cx$$20_label$$51$$ = $metricLabelBounds$$.x + $metricLabelBounds$$.width / 2, $cy$$21$$ = $metricLabelBounds$$.y + $metricLabelBounds$$.height / 2, $bounds$$80$$.$w$ = $metricLabelBounds$$.width, $bounds$$80$$.$h$ = $metricLabelBounds$$.height);
    $cx$$20_label$$51$$ = new dvt.$OutputText$($gauge$$58$$.$getCtx$(), $labelString$$5$$, $cx$$20_label$$51$$, $cy$$21$$);
    !$options$$163_size$$24$$.metricLabel.style.$getStyle$("color") && $options$$163_size$$24$$.background._isDark && $options$$163_size$$24$$.metricLabel.style.$setStyle$("color", "#CCCCCC");
    $cx$$20_label$$51$$.$setCSSStyle$($options$$163_size$$24$$.metricLabel.style);
    $options$$163_size$$24$$ = ($options$$163_size$$24$$ = parseInt($options$$163_size$$24$$.metricLabel.style.$getFontSize$())) ? parseInt($options$$163_size$$24$$) : $JSCompiler_alias_NULL$$;
    $options$$163_size$$24$$ || ($options$$163_size$$24$$ = $DvtGaugeRenderer$$.$calcLabelFontSize$([$labelString$$5$$, $minString$$1$$, $maxString$$1$$], $cx$$20_label$$51$$, $bounds$$80$$), $cx$$20_label$$51$$.$setTextString$($labelString$$5$$), $cx$$20_label$$51$$.$setFontSize$($options$$163_size$$24$$));
    $cx$$20_label$$51$$.$alignCenter$();
    $cx$$20_label$$51$$.$alignMiddle$();
    dvt.$TextUtils$.$fitText$($cx$$20_label$$51$$, $labelWidth$$5$$, $labelHeight$$4$$, $container$$113$$) && ($gauge$$58$$.$__label$ = $cx$$20_label$$51$$)
  }
};
$DvtDialGaugeRenderer$$.$_renderTickLabels$ = function $$DvtDialGaugeRenderer$$$$_renderTickLabels$$($gauge$$59$$, $container$$114$$, $bounds$$81$$) {
  var $options$$164$$ = $gauge$$59$$.$getOptions$(), $isRTL$$30$$ = dvt.$Agent$.$isRightToLeft$($gauge$$59$$.$getCtx$());
  if($options$$164$$.background.radius && $options$$164$$.background.majorTickCount) {
    var $radius$$17$$ = $options$$164$$.background._radius, $minValue$$13$$ = $options$$164$$.min, $maxValue$$13$$ = $options$$164$$.max, $majorTickCount$$1$$ = $options$$164$$.background.majorTickCount, $fontSize$$4$$ = 12, $labelBounds$$10$$ = new dvt.$Rectangle$($cx$$21_labelValue$$, $angleRads$$6_cy$$22$$, $bounds$$81$$.$w$, $bounds$$81$$.$h$), $style$$69_x$$127$$ = $options$$164$$.metricLabel.style.$getStyle$("font-size");
    $options$$164$$.background._tickLabelHeight && !$style$$69_x$$127$$ && ($labelBounds$$10$$.$h$ = $options$$164$$.background._tickLabelHeight);
    $options$$164$$.background._tickLabelWidth && !$style$$69_x$$127$$ && ($labelBounds$$10$$.$w$ = $options$$164$$.background._tickLabelWidth);
    if(!$style$$69_x$$127$$) {
      var $label$$52_labelString$$6$$ = new dvt.$OutputText$($gauge$$59$$.$getCtx$(), "", $cx$$21_labelValue$$, $angleRads$$6_cy$$22$$), $fontSize$$4$$ = $DvtGaugeRenderer$$.$calcLabelFontSize$([$DvtGaugeRenderer$$.$formatTickLabelValue$($options$$164$$.max, $gauge$$59$$), $DvtGaugeRenderer$$.$formatTickLabelValue$($options$$164$$.min, $gauge$$59$$)], $label$$52_labelString$$6$$, $labelBounds$$10$$)
    }
    for($style$$69_x$$127$$ = 0;$style$$69_x$$127$$ < $majorTickCount$$1$$;$style$$69_x$$127$$++) {
      var $cx$$21_labelValue$$ = $minValue$$13$$ + Math.abs($maxValue$$13$$ - $minValue$$13$$) * $style$$69_x$$127$$ / ($majorTickCount$$1$$ - 1);
      $isRTL$$30$$ && ($cx$$21_labelValue$$ = $minValue$$13$$ + Math.abs($maxValue$$13$$ - $minValue$$13$$) * ($majorTickCount$$1$$ - 1 - $style$$69_x$$127$$) / ($majorTickCount$$1$$ - 1));
      var $label$$52_labelString$$6$$ = $DvtGaugeRenderer$$.$formatTickLabelValue$($cx$$21_labelValue$$, $gauge$$59$$), $angleRads$$6_cy$$22$$ = $DvtDialGaugeRenderer$$.$_getRotation$($gauge$$59$$, $cx$$21_labelValue$$), $anchor$$5$$ = $DvtDialGaugeRenderer$$.$_getBackgroundAnchorPoint$($gauge$$59$$, $bounds$$81$$), $cx$$21_labelValue$$ = $anchor$$5$$.x + $radius$$17$$ * Math.cos($angleRads$$6_cy$$22$$ - Math.PI / 2), $angleRads$$6_cy$$22$$ = $anchor$$5$$.y + $radius$$17$$ * Math.sin($angleRads$$6_cy$$22$$ - 
      Math.PI / 2), $label$$52_labelString$$6$$ = new dvt.$OutputText$($gauge$$59$$.$getCtx$(), $label$$52_labelString$$6$$, $cx$$21_labelValue$$, $angleRads$$6_cy$$22$$);
      !$options$$164$$.tickLabel.style.$getStyle$("color") && $options$$164$$.background._isDark && $options$$164$$.tickLabel.style.$setStyle$("color", "#CCCCCC");
      $label$$52_labelString$$6$$.$setCSSStyle$($options$$164$$.tickLabel.style);
      $options$$164$$.tickLabel.style.$getStyle$("font-size") || $label$$52_labelString$$6$$.$setFontSize$($fontSize$$4$$);
      $label$$52_labelString$$6$$.$alignCenter$();
      $label$$52_labelString$$6$$.$alignMiddle$();
      dvt.$TextUtils$.$fitText$($label$$52_labelString$$6$$, $labelBounds$$10$$.$w$ + 0.5, $labelBounds$$10$$.$h$ + 0.5, $container$$114$$)
    }
  }
};
function $DvtDialGaugeIndicator$$($context$$182$$) {
  this.Init($context$$182$$)
}
dvt.$Obj$.$createSubclass$($DvtDialGaugeIndicator$$, dvt.$Container$);
$DvtDialGaugeIndicator$$.prototype.$setAngle$ = function $$DvtDialGaugeIndicator$$$$$setAngle$$($angleRads$$7$$) {
  var $mat$$18$$ = new dvt.$Matrix$;
  $mat$$18$$.rotate($angleRads$$7$$);
  this.$setMatrix$($mat$$18$$);
  this.$_angleRads$ = $angleRads$$7$$
};
$DvtDialGaugeIndicator$$.prototype.$getAnimationParams$ = function $$DvtDialGaugeIndicator$$$$$getAnimationParams$$() {
  return[this.$_angleRads$]
};
$DvtDialGaugeIndicator$$.prototype.$setAnimationParams$ = function $$DvtDialGaugeIndicator$$$$$setAnimationParams$$($params$$26$$) {
  $params$$26$$ && 1 == $params$$26$$.length && this.$setAngle$($params$$26$$[0])
};
dvt.$RatingGauge$ = $JSCompiler_emptyFn$$();
$goog$exportPath_$$("dvt.RatingGauge", dvt.$RatingGauge$);
dvt.$Obj$.$createSubclass$(dvt.$RatingGauge$, $DvtGauge$$);
dvt.$RatingGauge$.newInstance = function $dvt$$RatingGauge$$newInstance$($context$$183$$, $callback$$76$$, $callbackObj$$46$$) {
  var $gauge$$60$$ = new dvt.$RatingGauge$;
  $gauge$$60$$.Init($context$$183$$, $callback$$76$$, $callbackObj$$46$$);
  return $gauge$$60$$
};
dvt.$RatingGauge$.newInstance = dvt.$RatingGauge$.newInstance;
$JSCompiler_prototypeAlias$$ = dvt.$RatingGauge$.prototype;
$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($context$$184$$, $callback$$77$$, $callbackObj$$47$$) {
  dvt.$RatingGauge$.$superclass$.Init.call(this, $context$$184$$, $callback$$77$$, $callbackObj$$47$$);
  this.$Defaults$ = new $DvtRatingGaugeDefaults$$
};
$JSCompiler_prototypeAlias$$.$SetOptions$ = function $$JSCompiler_prototypeAlias$$$$SetOptions$$($options$$165$$) {
  dvt.$RatingGauge$.$superclass$.$SetOptions$.call(this, this.$Defaults$.$calcOptions$($options$$165$$))
};
$JSCompiler_prototypeAlias$$.$Render$ = function $$JSCompiler_prototypeAlias$$$$Render$$($container$$115$$, $width$$63$$, $height$$56$$) {
  var $outerGap$$3$$ = this.$Options$.__layout.outerGap, $maxValue$$14$$ = this.$Options$.max, $isVert$$10$$ = "vertical" == this.$Options$.orientation, $preserveAspectRatio$$ = "none" != this.$Options$.preserveAspectRatio;
  this.$Options$.selectedState.source && $preserveAspectRatio$$ ? dvt.$ImageLoader$.$loadImage$(this.$getCtx$(), this.$Options$.selectedState.source, dvt.$Obj$.$createCallback$(this, function($preserveAspectRatio$$) {
    $preserveAspectRatio$$ && ($preserveAspectRatio$$.width && $preserveAspectRatio$$.height) && ($preserveAspectRatio$$ = $preserveAspectRatio$$.width / $preserveAspectRatio$$.height, this.$__shapeWidth$ = $isVert$$10$$ ? Math.min($width$$63$$ - 2 * $outerGap$$3$$, ($height$$56$$ - 2 * $outerGap$$3$$) * $preserveAspectRatio$$ / $maxValue$$14$$) : Math.min(($height$$56$$ - 2 * $outerGap$$3$$) * $preserveAspectRatio$$, ($width$$63$$ - 2 * $outerGap$$3$$) / $maxValue$$14$$), this.$__shapeHeight$ = 
    this.$__shapeWidth$ / $preserveAspectRatio$$, this.$__bounds$ = $isVert$$10$$ ? new dvt.$Rectangle$($outerGap$$3$$, ($height$$56$$ - this.$__shapeHeight$ * $maxValue$$14$$) / 2, $width$$63$$ - 2 * $outerGap$$3$$, this.$__shapeHeight$ * $maxValue$$14$$) : new dvt.$Rectangle$(($width$$63$$ - this.$__shapeWidth$ * $maxValue$$14$$) / 2, $outerGap$$3$$, this.$__shapeWidth$ * $maxValue$$14$$, $height$$56$$ - 2 * $outerGap$$3$$), $DvtRatingGaugeRenderer$$.$render$(this, $container$$115$$, $width$$63$$, 
    $height$$56$$))
  })) : ($preserveAspectRatio$$ ? this.$__shapeHeight$ = this.$__shapeWidth$ = $isVert$$10$$ ? Math.min($width$$63$$ - 2 * $outerGap$$3$$, ($height$$56$$ - 2 * $outerGap$$3$$) / $maxValue$$14$$) : Math.min($height$$56$$ - 2 * $outerGap$$3$$, ($width$$63$$ - 2 * $outerGap$$3$$) / $maxValue$$14$$) : (this.$__shapeWidth$ = $isVert$$10$$ ? $width$$63$$ - 2 * $outerGap$$3$$ : ($width$$63$$ - 2 * $outerGap$$3$$) / $maxValue$$14$$, this.$__shapeHeight$ = $isVert$$10$$ ? ($height$$56$$ - 2 * $outerGap$$3$$) / 
  $maxValue$$14$$ : $height$$56$$ - 2 * $outerGap$$3$$), this.$__bounds$ = $isVert$$10$$ ? new dvt.$Rectangle$($outerGap$$3$$, ($height$$56$$ - this.$__shapeHeight$ * $maxValue$$14$$) / 2, $width$$63$$ - 2 * $outerGap$$3$$, this.$__shapeHeight$ * $maxValue$$14$$) : new dvt.$Rectangle$(($width$$63$$ - this.$__shapeWidth$ * $maxValue$$14$$) / 2, $outerGap$$3$$, this.$__shapeWidth$ * $maxValue$$14$$, $height$$56$$ - 2 * $outerGap$$3$$), $DvtRatingGaugeRenderer$$.$render$(this, $container$$115$$, $width$$63$$, 
  $height$$56$$))
};
$JSCompiler_prototypeAlias$$.$__getLogicalObject$ = function $$JSCompiler_prototypeAlias$$$$__getLogicalObject$$() {
  return new $DvtRatingGaugePeer$$(this)
};
$JSCompiler_prototypeAlias$$.$GetValueAt$ = function $$JSCompiler_prototypeAlias$$$$GetValueAt$$($x$$128$$, $y$$106$$) {
  var $size$$25$$ = "vertical" == this.$Options$.orientation ? this.$__shapeHeight$ : this.$__shapeWidth$;
  if($DvtGaugeDataUtils$$.$hasData$(this)) {
    if("vertical" == this.$Options$.orientation) {
      $y$$106$$ = Math.max(Math.min($y$$106$$, this.$__bounds$.y + this.$__bounds$.$h$), this.$__bounds$.y), $val$$25$$ = Math.max((this.$__bounds$.y + this.$__bounds$.$h$ - $y$$106$$) / $size$$25$$, this.$Options$.min)
    }else {
      $x$$128$$ = Math.max(Math.min($x$$128$$, this.$__bounds$.x + this.$__bounds$.$w$), this.$__bounds$.x);
      var $val$$25$$ = 0, $val$$25$$ = dvt.$Agent$.$isRightToLeft$(this.$getCtx$()) ? Math.max((this.$__bounds$.x + this.$__bounds$.$w$ - $x$$128$$) / $size$$25$$, this.$Options$.min) : Math.max(($x$$128$$ - this.$__bounds$.x) / $size$$25$$, this.$Options$.min)
    }
    return $DvtGaugeRenderer$$.$adjustForStep$(this.$Options$, $val$$25$$)
  }
  return $JSCompiler_alias_NULL$$
};
$JSCompiler_prototypeAlias$$.$__processValueChangeStart$ = function $$JSCompiler_prototypeAlias$$$$__processValueChangeStart$$($x$$130$$, $y$$108$$) {
  this.$__processValueChangeMove$($x$$130$$, $y$$108$$)
};
$JSCompiler_prototypeAlias$$.$__processValueChangeMove$ = function $$JSCompiler_prototypeAlias$$$$__processValueChangeMove$$($x$$131$$, $y$$109$$) {
  var $value$$141$$ = this.$GetValueAt$($x$$131$$, $y$$109$$);
  $JSCompiler_StaticMethods___updateClipRects$$(this, $value$$141$$, "hover");
  this.dispatchEvent(dvt.$EventFactory$.$newValueChangeEvent$(this.$Options$.value, $value$$141$$, $JSCompiler_alias_FALSE$$))
};
$JSCompiler_prototypeAlias$$.$__processValueChangeEnd$ = function $$JSCompiler_prototypeAlias$$$$__processValueChangeEnd$$($x$$132$$, $y$$110$$) {
  var $oldValue$$3$$ = this.$Options$.value;
  this.$Options$.value = this.$GetValueAt$($x$$132$$, $y$$110$$);
  this.$Options$.changed = $JSCompiler_alias_TRUE$$;
  this.$render$();
  this.dispatchEvent(dvt.$EventFactory$.$newValueChangeEvent$($oldValue$$3$$, this.$Options$.value, $JSCompiler_alias_FALSE$$));
  this.dispatchEvent(dvt.$EventFactory$.$newValueChangeEvent$($oldValue$$3$$, this.$Options$.value, $JSCompiler_alias_TRUE$$))
};
function $JSCompiler_StaticMethods___updateClipRects$$($JSCompiler_StaticMethods___updateClipRects$self$$, $value$$142$$, $hoverClip_proc_selContainer_unselContainer$$, $container$$116$$) {
  if($DvtGaugeDataUtils$$.$hasData$($JSCompiler_StaticMethods___updateClipRects$self$$)) {
    $container$$116$$ || ($container$$116$$ = $JSCompiler_StaticMethods___updateClipRects$self$$.$_container$);
    var $isRTL$$31_selClip_unselClip$$ = dvt.$Agent$.$isRightToLeft$($JSCompiler_StaticMethods___updateClipRects$self$$.$getCtx$()), $isVert$$11$$ = "vertical" == $JSCompiler_StaticMethods___updateClipRects$self$$.$Options$.orientation, $size$$26$$ = $isVert$$11$$ ? $JSCompiler_StaticMethods___updateClipRects$self$$.$__shapeHeight$ : $JSCompiler_StaticMethods___updateClipRects$self$$.$__shapeWidth$;
    $value$$142$$ = Math.max(Math.min($value$$142$$, $JSCompiler_StaticMethods___updateClipRects$self$$.$Options$.max), 0);
    var $a$$36_hoverContainer$$ = 0, $b$$14$$ = $value$$142$$ * $size$$26$$, $c$$5$$ = $value$$142$$ * $size$$26$$;
    "render" == $hoverClip_proc_selContainer_unselContainer$$ && ($a$$36_hoverContainer$$ = $value$$142$$ * $size$$26$$, $b$$14$$ = 0);
    $isVert$$11$$ ? ($hoverClip_proc_selContainer_unselContainer$$ = $container$$116$$.$getChildAt$(0), $isRTL$$31_selClip_unselClip$$ = new dvt.$ClipPath$("unsel" + $JSCompiler_StaticMethods___updateClipRects$self$$.getId()), $isRTL$$31_selClip_unselClip$$.$addRect$($JSCompiler_StaticMethods___updateClipRects$self$$.$__bounds$.x, $JSCompiler_StaticMethods___updateClipRects$self$$.$__bounds$.y, $JSCompiler_StaticMethods___updateClipRects$self$$.$__bounds$.$w$, $JSCompiler_StaticMethods___updateClipRects$self$$.$__bounds$.$h$ - 
    $c$$5$$), $hoverClip_proc_selContainer_unselContainer$$.$setClipPath$($isRTL$$31_selClip_unselClip$$), $hoverClip_proc_selContainer_unselContainer$$ = $container$$116$$.$getChildAt$(1), $isRTL$$31_selClip_unselClip$$ = new dvt.$ClipPath$("sel" + $JSCompiler_StaticMethods___updateClipRects$self$$.getId()), $isRTL$$31_selClip_unselClip$$.$addRect$($JSCompiler_StaticMethods___updateClipRects$self$$.$__bounds$.x, $JSCompiler_StaticMethods___updateClipRects$self$$.$__bounds$.y + $JSCompiler_StaticMethods___updateClipRects$self$$.$__bounds$.$h$ - 
    $a$$36_hoverContainer$$, $JSCompiler_StaticMethods___updateClipRects$self$$.$__bounds$.$w$, $a$$36_hoverContainer$$), $hoverClip_proc_selContainer_unselContainer$$.$setClipPath$($isRTL$$31_selClip_unselClip$$), $a$$36_hoverContainer$$ = $container$$116$$.$getChildAt$(2), $hoverClip_proc_selContainer_unselContainer$$ = new dvt.$ClipPath$("hover" + $JSCompiler_StaticMethods___updateClipRects$self$$.getId()), $hoverClip_proc_selContainer_unselContainer$$.$addRect$($JSCompiler_StaticMethods___updateClipRects$self$$.$__bounds$.x, 
    $JSCompiler_StaticMethods___updateClipRects$self$$.$__bounds$.y + $JSCompiler_StaticMethods___updateClipRects$self$$.$__bounds$.$h$ - $b$$14$$, $JSCompiler_StaticMethods___updateClipRects$self$$.$__bounds$.$w$, $b$$14$$)) : $isRTL$$31_selClip_unselClip$$ ? ($hoverClip_proc_selContainer_unselContainer$$ = $container$$116$$.$getChildAt$(0), $isRTL$$31_selClip_unselClip$$ = new dvt.$ClipPath$("unsel" + $JSCompiler_StaticMethods___updateClipRects$self$$.getId()), $isRTL$$31_selClip_unselClip$$.$addRect$($JSCompiler_StaticMethods___updateClipRects$self$$.$__bounds$.x, 
    $JSCompiler_StaticMethods___updateClipRects$self$$.$__bounds$.y, $JSCompiler_StaticMethods___updateClipRects$self$$.$__bounds$.$w$ - $c$$5$$, $JSCompiler_StaticMethods___updateClipRects$self$$.$__bounds$.$h$), $hoverClip_proc_selContainer_unselContainer$$.$setClipPath$($isRTL$$31_selClip_unselClip$$), $hoverClip_proc_selContainer_unselContainer$$ = $container$$116$$.$getChildAt$(1), $isRTL$$31_selClip_unselClip$$ = new dvt.$ClipPath$("sel" + $JSCompiler_StaticMethods___updateClipRects$self$$.getId()), 
    $isRTL$$31_selClip_unselClip$$.$addRect$($JSCompiler_StaticMethods___updateClipRects$self$$.$__bounds$.x + $JSCompiler_StaticMethods___updateClipRects$self$$.$__bounds$.$w$ - $c$$5$$, $JSCompiler_StaticMethods___updateClipRects$self$$.$__bounds$.y, $a$$36_hoverContainer$$, $JSCompiler_StaticMethods___updateClipRects$self$$.$__bounds$.$h$), $hoverClip_proc_selContainer_unselContainer$$.$setClipPath$($isRTL$$31_selClip_unselClip$$), $a$$36_hoverContainer$$ = $container$$116$$.$getChildAt$(2), $hoverClip_proc_selContainer_unselContainer$$ = 
    new dvt.$ClipPath$("hover" + $JSCompiler_StaticMethods___updateClipRects$self$$.getId()), $hoverClip_proc_selContainer_unselContainer$$.$addRect$($JSCompiler_StaticMethods___updateClipRects$self$$.$__bounds$.x + $JSCompiler_StaticMethods___updateClipRects$self$$.$__bounds$.$w$ - $c$$5$$, $JSCompiler_StaticMethods___updateClipRects$self$$.$__bounds$.y, $b$$14$$, $JSCompiler_StaticMethods___updateClipRects$self$$.$__bounds$.$h$)) : ($hoverClip_proc_selContainer_unselContainer$$ = $container$$116$$.$getChildAt$(0), 
    $isRTL$$31_selClip_unselClip$$ = new dvt.$ClipPath$("unsel" + $JSCompiler_StaticMethods___updateClipRects$self$$.getId()), $isRTL$$31_selClip_unselClip$$.$addRect$($JSCompiler_StaticMethods___updateClipRects$self$$.$__bounds$.x + $c$$5$$, $JSCompiler_StaticMethods___updateClipRects$self$$.$__bounds$.y, $JSCompiler_StaticMethods___updateClipRects$self$$.$__bounds$.$w$ - $c$$5$$, $JSCompiler_StaticMethods___updateClipRects$self$$.$__bounds$.$h$), $hoverClip_proc_selContainer_unselContainer$$.$setClipPath$($isRTL$$31_selClip_unselClip$$), 
    $hoverClip_proc_selContainer_unselContainer$$ = $container$$116$$.$getChildAt$(1), $isRTL$$31_selClip_unselClip$$ = new dvt.$ClipPath$("sel" + $JSCompiler_StaticMethods___updateClipRects$self$$.getId()), $isRTL$$31_selClip_unselClip$$.$addRect$($JSCompiler_StaticMethods___updateClipRects$self$$.$__bounds$.x, $JSCompiler_StaticMethods___updateClipRects$self$$.$__bounds$.y, $a$$36_hoverContainer$$, $JSCompiler_StaticMethods___updateClipRects$self$$.$__bounds$.$h$), $hoverClip_proc_selContainer_unselContainer$$.$setClipPath$($isRTL$$31_selClip_unselClip$$), 
    $a$$36_hoverContainer$$ = $container$$116$$.$getChildAt$(2), $hoverClip_proc_selContainer_unselContainer$$ = new dvt.$ClipPath$("hover" + $JSCompiler_StaticMethods___updateClipRects$self$$.getId()), $hoverClip_proc_selContainer_unselContainer$$.$addRect$($JSCompiler_StaticMethods___updateClipRects$self$$.$__bounds$.x, $JSCompiler_StaticMethods___updateClipRects$self$$.$__bounds$.y, $b$$14$$, $JSCompiler_StaticMethods___updateClipRects$self$$.$__bounds$.$h$));
    $a$$36_hoverContainer$$.$setClipPath$($hoverClip_proc_selContainer_unselContainer$$);
    $JSCompiler_StaticMethods_UpdateAriaLiveValue$$($JSCompiler_StaticMethods___updateClipRects$self$$, $container$$116$$, $value$$142$$)
  }
}
$JSCompiler_prototypeAlias$$.$CreateEventManager$ = function $$JSCompiler_prototypeAlias$$$$CreateEventManager$$() {
  return new $DvtRatingGaugeEventManager$$(this)
};
function $DvtRatingGaugeDefaults$$() {
  this.Init({skyros:$DvtRatingGaugeDefaults$VERSION_1$$, alta:$DvtRatingGaugeDefaults$SKIN_ALTA$$})
}
dvt.$Obj$.$createSubclass$($DvtRatingGaugeDefaults$$, $DvtGaugeDefaults$$);
var $DvtRatingGaugeDefaults$SKIN_ALTA$$ = {unselectedState:{shape:"star", color:"#C4CED7", borderColor:$JSCompiler_alias_NULL$$}, selectedState:{shape:"star", color:"#F8C15A", borderColor:$JSCompiler_alias_NULL$$}, hoverState:{shape:"star", color:"#007CC8", borderColor:$JSCompiler_alias_NULL$$}, changedState:{shape:"star", color:"#ED2C02", borderColor:$JSCompiler_alias_NULL$$}}, $DvtRatingGaugeDefaults$VERSION_1$$ = {min:0, max:5, orientation:"horizontal", unselectedState:{shape:"star", color:"#F2F2F2", 
borderColor:"#B6B6B6"}, selectedState:{shape:"star", color:"#F8C15A", borderColor:"#F5A700"}, hoverState:{shape:"star", color:"#66A7DA", borderColor:"#4A86C5"}, changedState:{shape:"star", color:"#F8C15A", borderColor:"#959595"}, preserveAspectRatio:"meet", step:1};
function $DvtRatingGaugePeer$$($gauge$$61$$) {
  this.Init();
  this.$_gauge$ = $gauge$$61$$
}
dvt.$Obj$.$createSubclass$($DvtRatingGaugePeer$$, dvt.$SimpleObjPeer$);
$DvtRatingGaugePeer$$.prototype.$getDatatip$ = function $$DvtRatingGaugePeer$$$$$getDatatip$$($options$$166_target$$61$$, $threshold$$5_thresholdIndex$$5_x$$133$$, $y$$111$$) {
  $options$$166_target$$61$$ = this.$_gauge$.$getOptions$();
  $threshold$$5_thresholdIndex$$5_x$$133$$ = this.$_gauge$.$getEventManager$().$IsMouseEditing$ ? $DvtGaugeDataUtils$$.$getValueThresholdIndex$(this.$_gauge$, this.$_gauge$.$GetValueAt$($threshold$$5_thresholdIndex$$5_x$$133$$, $y$$111$$)) : $DvtGaugeDataUtils$$.$getValueThresholdIndex$(this.$_gauge$);
  return($threshold$$5_thresholdIndex$$5_x$$133$$ = $DvtGaugeDataUtils$$.$getThreshold$(this.$_gauge$, $threshold$$5_thresholdIndex$$5_x$$133$$)) && $threshold$$5_thresholdIndex$$5_x$$133$$.shortDesc ? $threshold$$5_thresholdIndex$$5_x$$133$$.shortDesc : $options$$166_target$$61$$.shortDesc
};
var $DvtRatingGaugeRenderer$$ = {};
dvt.$Obj$.$createSubclass$($DvtRatingGaugeRenderer$$, dvt.$Obj$);
$DvtRatingGaugeRenderer$$.$render$ = function $$DvtRatingGaugeRenderer$$$$render$$($gauge$$62$$, $container$$117$$, $options$$167_width$$64$$, $height$$57_threshold$$6_thresholdIndex$$6_unselectedOptions$$) {
  if($DvtGaugeDataUtils$$.$hasData$($gauge$$62$$)) {
    $options$$167_width$$64$$ = $gauge$$62$$.$getOptions$();
    $height$$57_threshold$$6_thresholdIndex$$6_unselectedOptions$$ = $DvtGaugeDataUtils$$.$getValueThresholdIndex$($gauge$$62$$);
    $height$$57_threshold$$6_thresholdIndex$$6_unselectedOptions$$ = $DvtGaugeDataUtils$$.$getThreshold$($gauge$$62$$, $height$$57_threshold$$6_thresholdIndex$$6_unselectedOptions$$);
    var $selectedColor_selectedOptions$$ = $options$$167_width$$64$$.selectedState.color, $changedColor_changedOptions$$ = $options$$167_width$$64$$.changedState.color, $selectedBorderColor$$ = $options$$167_width$$64$$.selectedState.borderColor, $changedBorderColor_hoverOptions$$ = $options$$167_width$$64$$.changedState.borderColor;
    $height$$57_threshold$$6_thresholdIndex$$6_unselectedOptions$$ && $height$$57_threshold$$6_thresholdIndex$$6_unselectedOptions$$.color && ($changedColor_changedOptions$$ = $selectedColor_selectedOptions$$ = $height$$57_threshold$$6_thresholdIndex$$6_unselectedOptions$$.color);
    $height$$57_threshold$$6_thresholdIndex$$6_unselectedOptions$$ && $height$$57_threshold$$6_thresholdIndex$$6_unselectedOptions$$.borderColor && ($changedBorderColor_hoverOptions$$ = $selectedBorderColor$$ = $height$$57_threshold$$6_thresholdIndex$$6_unselectedOptions$$.borderColor);
    $height$$57_threshold$$6_thresholdIndex$$6_unselectedOptions$$ = {value:0, type:$options$$167_width$$64$$.unselectedState.shape, color:$options$$167_width$$64$$.unselectedState.color, borderColor:$options$$167_width$$64$$.unselectedState.borderColor, visualEffects:$options$$167_width$$64$$.visualEffects, source:$options$$167_width$$64$$.unselectedState.source};
    $selectedColor_selectedOptions$$ = {value:0, type:$options$$167_width$$64$$.selectedState.shape, color:$selectedColor_selectedOptions$$, borderColor:$selectedBorderColor$$, visualEffects:$options$$167_width$$64$$.visualEffects, source:$options$$167_width$$64$$.selectedState.source};
    $changedColor_changedOptions$$ = {value:0, type:$options$$167_width$$64$$.changedState.shape, color:$changedColor_changedOptions$$, borderColor:$changedBorderColor_hoverOptions$$, visualEffects:$options$$167_width$$64$$.visualEffects, source:$options$$167_width$$64$$.changedState.source};
    $changedBorderColor_hoverOptions$$ = {value:0, type:$options$$167_width$$64$$.hoverState.shape, color:$options$$167_width$$64$$.hoverState.color, borderColor:$options$$167_width$$64$$.hoverState.borderColor, visualEffects:$options$$167_width$$64$$.visualEffects, source:$options$$167_width$$64$$.hoverState.source};
    "dot" == $options$$167_width$$64$$.unselectedState.shape && ($height$$57_threshold$$6_thresholdIndex$$6_unselectedOptions$$.type = "circle", $height$$57_threshold$$6_thresholdIndex$$6_unselectedOptions$$.visualEffects = "none", $height$$57_threshold$$6_thresholdIndex$$6_unselectedOptions$$.size = 0.05);
    $DvtRatingGaugeRenderer$$.$_createShapes$($gauge$$62$$, $container$$117$$, $height$$57_threshold$$6_thresholdIndex$$6_unselectedOptions$$);
    $DvtRatingGaugeRenderer$$.$_createShapes$($gauge$$62$$, $container$$117$$, $options$$167_width$$64$$.changed ? $changedColor_changedOptions$$ : $selectedColor_selectedOptions$$);
    $DvtRatingGaugeRenderer$$.$_createShapes$($gauge$$62$$, $container$$117$$, $changedBorderColor_hoverOptions$$);
    $JSCompiler_StaticMethods___updateClipRects$$($gauge$$62$$, $options$$167_width$$64$$.value, "render", $container$$117$$)
  }else {
    $DvtGaugeRenderer$$.$renderEmptyText$($gauge$$62$$, $container$$117$$, new dvt.$Rectangle$(0, 0, $options$$167_width$$64$$, $height$$57_threshold$$6_thresholdIndex$$6_unselectedOptions$$))
  }
};
$DvtRatingGaugeRenderer$$.$_createShapes$ = function $$DvtRatingGaugeRenderer$$$$_createShapes$$($gauge$$63_shapeHeight$$, $container$$118_options$$168$$, $stateOptions$$) {
  var $context$$185$$ = $gauge$$63_shapeHeight$$.$getCtx$(), $shapesContainer$$1$$ = new dvt.$Container$($context$$185$$);
  $container$$118_options$$168$$.$addChild$($shapesContainer$$1$$);
  $container$$118_options$$168$$ = $gauge$$63_shapeHeight$$.$getOptions$();
  var $bounds$$82$$ = $gauge$$63_shapeHeight$$.$__bounds$, $shapeWidth$$ = $gauge$$63_shapeHeight$$.$__shapeWidth$;
  $gauge$$63_shapeHeight$$ = $gauge$$63_shapeHeight$$.$__shapeHeight$;
  for(var $i$$390$$ = 0;$i$$390$$ < $container$$118_options$$168$$.max;$i$$390$$++) {
    var $cx$$22$$, $cy$$23$$;
    "vertical" == $container$$118_options$$168$$.orientation ? ($cx$$22$$ = $bounds$$82$$.x + $bounds$$82$$.$w$ / 2 - $shapeWidth$$ / 2, $cy$$23$$ = $bounds$$82$$.y + $bounds$$82$$.$h$ - ($i$$390$$ + 1) * $gauge$$63_shapeHeight$$) : ($cx$$22$$ = dvt.$Agent$.$isRightToLeft$($context$$185$$) ? $bounds$$82$$.x + $bounds$$82$$.$w$ - ($i$$390$$ + 1) * $shapeWidth$$ : $bounds$$82$$.x + $i$$390$$ * $shapeWidth$$, $cy$$23$$ = $bounds$$82$$.y + $bounds$$82$$.$h$ / 2 - $gauge$$63_shapeHeight$$ / 2);
    var $shape$$53$$;
    $stateOptions$$.source ? $shape$$53$$ = new dvt.$ImageMarker$($context$$185$$, $cx$$22$$ + $shapeWidth$$ / 2, $cy$$23$$ + $gauge$$63_shapeHeight$$ / 2, $shapeWidth$$, $gauge$$63_shapeHeight$$, $stateOptions$$.source) : "none" != $stateOptions$$.type && ($shape$$53$$ = dvt.$LedGauge$.newInstance($context$$185$$, $JSCompiler_alias_NULL$$, $JSCompiler_alias_NULL$$, $JSCompiler_alias_TRUE$$), $shape$$53$$.$setTranslate$($cx$$22$$, $cy$$23$$), $shape$$53$$.$render$($stateOptions$$, $shapeWidth$$, 
    $gauge$$63_shapeHeight$$));
    $shape$$53$$ && $shapesContainer$$1$$.$addChild$($shape$$53$$)
  }
};
function $DvtRatingGaugeEventManager$$($gauge$$64$$) {
  this.Init($gauge$$64$$.$getCtx$(), $gauge$$64$$.dispatchEvent, $gauge$$64$$);
  this.$_gauge$ = $gauge$$64$$
}
dvt.$Obj$.$createSubclass$($DvtRatingGaugeEventManager$$, $DvtGaugeEventManager$$);
$JSCompiler_prototypeAlias$$ = $DvtRatingGaugeEventManager$$.prototype;
$JSCompiler_prototypeAlias$$.$OnMouseOver$ = function $$JSCompiler_prototypeAlias$$$$OnMouseOver$$($event$$254$$) {
  if(this.$_gauge$.$getOptions$().readOnly === $JSCompiler_alias_FALSE$$) {
    var $coords$$29$$ = $JSCompiler_StaticMethods_GetRelativePosition$$(this, $event$$254$$.pageX, $event$$254$$.pageY);
    this.$_gauge$.$__processValueChangeStart$($coords$$29$$.x, $coords$$29$$.y);
    this.$IsMouseEditing$ = $JSCompiler_alias_TRUE$$
  }
  $DvtRatingGaugeEventManager$$.$superclass$.$OnMouseOver$.call(this, $event$$254$$)
};
$JSCompiler_prototypeAlias$$.$OnMouseOut$ = function $$JSCompiler_prototypeAlias$$$$OnMouseOut$$($event$$255$$) {
  if(this.$_gauge$.$getOptions$().readOnly === $JSCompiler_alias_FALSE$$) {
    $JSCompiler_StaticMethods_GetRelativePosition$$(this, $event$$255$$.pageX, $event$$255$$.pageY);
    var $JSCompiler_StaticMethods___processHoverEnd$self$$inline_3425$$ = this.$_gauge$;
    $JSCompiler_StaticMethods___updateClipRects$$($JSCompiler_StaticMethods___processHoverEnd$self$$inline_3425$$, $JSCompiler_StaticMethods___processHoverEnd$self$$inline_3425$$.$Options$.value, "render");
    $JSCompiler_StaticMethods___processHoverEnd$self$$inline_3425$$.dispatchEvent(dvt.$EventFactory$.$newValueChangeEvent$($JSCompiler_StaticMethods___processHoverEnd$self$$inline_3425$$.$Options$.value, $JSCompiler_StaticMethods___processHoverEnd$self$$inline_3425$$.$Options$.value, $JSCompiler_alias_FALSE$$));
    this.$IsMouseEditing$ = $JSCompiler_alias_FALSE$$
  }
  $DvtRatingGaugeEventManager$$.$superclass$.$OnMouseOut$.call(this, $event$$255$$)
};
$JSCompiler_prototypeAlias$$.$OnMouseMove$ = function $$JSCompiler_prototypeAlias$$$$OnMouseMove$$($event$$256$$) {
  var $coords$$31$$ = $JSCompiler_StaticMethods_GetRelativePosition$$(this, $event$$256$$.pageX, $event$$256$$.pageY);
  this.$_gauge$.$getOptions$().readOnly === $JSCompiler_alias_FALSE$$ && (!this.$IsMouseEditing$ && this.$_gauge$.$getOptions$().value != this.$_gauge$.$GetValueAt$($coords$$31$$.x, $coords$$31$$.y)) && (this.$IsMouseEditing$ = $JSCompiler_alias_TRUE$$);
  $DvtRatingGaugeEventManager$$.$superclass$.$OnMouseMove$.call(this, $event$$256$$)
};
$JSCompiler_prototypeAlias$$.$OnMouseDown$ = function $$JSCompiler_prototypeAlias$$$$OnMouseDown$$($event$$257$$) {
  $DvtGaugeEventManager$$.$superclass$.$OnMouseDown$.call(this, $event$$257$$)
};
$JSCompiler_prototypeAlias$$.$ProcessKeyboardEvent$ = function $$JSCompiler_prototypeAlias$$$$ProcessKeyboardEvent$$($event$$258$$) {
  this.$IsMouseEditing$ = $JSCompiler_alias_FALSE$$;
  return $DvtRatingGaugeEventManager$$.$superclass$.$ProcessKeyboardEvent$.call(this, $event$$258$$)
};
$JSCompiler_prototypeAlias$$.$IsShowingTooltipWhileEditing$ = $JSCompiler_returnArg$$($JSCompiler_alias_TRUE$$);

  return dvt;
});

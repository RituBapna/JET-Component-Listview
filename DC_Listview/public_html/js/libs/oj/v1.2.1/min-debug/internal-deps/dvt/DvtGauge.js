/**
 * Copyright (c) 2014, Oracle and/or its affiliates.
 * All rights reserved.
 */
"use strict";
define(['./DvtToolkit', './DvtAxis'], function(dvt) {
  // Internal use only.  All APIs and functionality are subject to change at any time.
  
  // Map the D namespace to dvt, which is used to provide access across partitions.
  var D = dvt;
  
D.$DvtGauge$$ = (0,D.$JSCompiler_emptyFn$$)();
(0,D.$goog$exportPath_$$)("DvtGauge", D.$DvtGauge$$);
D.$DvtObj$$.$createSubclass$(D.$DvtGauge$$, D.$DvtBaseComponent$$, "DvtGauge");
D.$DvtGauge$$.prototype.Init = function $$DvtGauge$$$$Init$($context$$384$$, $callback$$103$$, $callbackObj$$59$$, $bStaticRendering$$) {
  D.$DvtGauge$$.$superclass$.Init.call(this, $context$$384$$, $callback$$103$$, $callbackObj$$59$$);
  this.$_bStaticRendering$ = $bStaticRendering$$;
  this.$_bStaticRendering$ || (this.$_eventManager$ = this.$CreateEventManager$(), this.$_eventManager$.$addListeners$(this), (0,D.$DvtAgent$isTouchDevice$$)() || (0,D.$JSCompiler_StaticMethods_setKeyboardHandler$$)(this.$_eventManager$, this.$CreateKeyboardHandler$(this.$_eventManager$)), this.setId("gauge1000" + window.Math.floor(1E9 * window.Math.random())), this.$_editingOverlay$ = new D.$DvtRect$$($context$$384$$, 0, 0), (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)(this.$_editingOverlay$), 
  this.$addChild$(this.$_editingOverlay$));
  this.$_bEditing$ = D.$JSCompiler_alias_FALSE$$;
  this.$_oldValue$ = D.$JSCompiler_alias_NULL$$
};
D.$DvtGauge$$.prototype.$SetOptions$ = function $$DvtGauge$$$$$SetOptions$$($options$$130$$) {
  this.$Options$ = $options$$130$$;
  (0,D.$DvtAgent$isEnvironmentBrowser$$)() || (this.$Options$.animationOnDisplay = "none", this.$Options$.animationOnDataChange = "none")
};
D.$DvtGauge$$.prototype.$render$ = function $$DvtGauge$$$$$render$$($bBlackBoxUpdate$$inline_6297_options$$131_tooltip$$29$$, $container$$98_width$$88$$, $ariaId_height$$82_oldShapes_value$$167$$) {
  $bBlackBoxUpdate$$inline_6297_options$$131_tooltip$$29$$ ? this.$SetOptions$($bBlackBoxUpdate$$inline_6297_options$$131_tooltip$$29$$) : this.$Options$ || this.$SetOptions$(D.$JSCompiler_alias_NULL$$);
  this.$Options$.thresholds && (this.$Options$.thresholds = this.$Options$.thresholds.sort(D.$DvtGauge$_thresholdComparator$$));
  !(0,window.isNaN)($container$$98_width$$88$$) && !(0,window.isNaN)($ariaId_height$$82_oldShapes_value$$167$$) && (this.$Width$ = $container$$98_width$$88$$, this.$Height$ = $ariaId_height$$82_oldShapes_value$$167$$);
  $ariaId_height$$82_oldShapes_value$$167$$ = this.$__shapes$;
  this.$__shapes$ = [];
  $container$$98_width$$88$$ = new D.$DvtContainer$$(this.$getCtx$());
  this.$addChildAt$($container$$98_width$$88$$, 0);
  this.$Render$($container$$98_width$$88$$, this.$Width$, this.$Height$);
  var $bData$$inline_6293_newObjs$$inline_10916$$ = $bBlackBoxUpdate$$inline_6297_options$$131_tooltip$$29$$ != D.$JSCompiler_alias_NULL$$, $bounds$$inline_6301_newObj$$inline_10920_width$$inline_6295$$ = this.$Width$, $context$$inline_6302_endState$$inline_10922_height$$inline_6296$$ = this.$Height$;
  this.$_animation$ && this.$_animation$.stop();
  $bBlackBoxUpdate$$inline_6297_options$$131_tooltip$$29$$ = D.$JSCompiler_alias_FALSE$$;
  var $animatedObjs$$inline_10918_animationOnDataChange$$inline_6298$$ = this.$_bEditing$ ? "none" : this.$getOptions$().animationOnDataChange, $animationOnDisplay$$inline_6299_i$$inline_10919$$ = this.$_bEditing$ ? "none" : this.$getOptions$().animationOnDisplay, $animationDuration$$inline_6300$$ = (0,D.$DvtStyleUtils$getTimeMilliseconds$$)(this.$getOptions$().animationDuration) / 1E3;
  if($animationOnDisplay$$inline_6299_i$$inline_10919$$ || $animatedObjs$$inline_10918_animationOnDataChange$$inline_6298$$) {
    $bounds$$inline_6301_newObj$$inline_10920_width$$inline_6295$$ = new D.$DvtRectangle$$(0, 0, $bounds$$inline_6301_newObj$$inline_10920_width$$inline_6295$$, $context$$inline_6302_endState$$inline_10922_height$$inline_6296$$);
    $context$$inline_6302_endState$$inline_10922_height$$inline_6296$$ = this.$getCtx$();
    if(!this.$_container$ && "none" !== $animationOnDisplay$$inline_6299_i$$inline_10919$$ && this.$__shapes$[0] != D.$JSCompiler_alias_NULL$$) {
      this.$_animation$ = D.$DvtBlackBoxAnimationHandler$$.$getInAnimation$($context$$inline_6302_endState$$inline_10922_height$$inline_6296$$, $animationOnDisplay$$inline_6299_i$$inline_10919$$, $container$$98_width$$88$$, $bounds$$inline_6301_newObj$$inline_10920_width$$inline_6295$$, $animationDuration$$inline_6300$$), this.$_animation$ || (this.$_animation$ = this.$CreateAnimationOnDisplay$(this.$__shapes$, $animationOnDisplay$$inline_6299_i$$inline_10919$$, $animationDuration$$inline_6300$$))
    }else {
      if(this.$_container$ && "none" != $animatedObjs$$inline_10918_animationOnDataChange$$inline_6298$$ && $bData$$inline_6293_newObjs$$inline_10916$$ && this.$__shapes$[0] != D.$JSCompiler_alias_NULL$$) {
        if(this.$_animation$ = D.$DvtBlackBoxAnimationHandler$$.$getCombinedAnimation$($context$$inline_6302_endState$$inline_10922_height$$inline_6296$$, $animatedObjs$$inline_10918_animationOnDataChange$$inline_6298$$, this.$_container$, $container$$98_width$$88$$, $bounds$$inline_6301_newObj$$inline_10920_width$$inline_6295$$, $animationDuration$$inline_6300$$)) {
          $bBlackBoxUpdate$$inline_6297_options$$131_tooltip$$29$$ = D.$JSCompiler_alias_TRUE$$
        }else {
          $bData$$inline_6293_newObjs$$inline_10916$$ = this.$__shapes$;
          $animatedObjs$$inline_10918_animationOnDataChange$$inline_6298$$ = [];
          for($animationOnDisplay$$inline_6299_i$$inline_10919$$ = 0;$animationOnDisplay$$inline_6299_i$$inline_10919$$ < $ariaId_height$$82_oldShapes_value$$167$$.length;$animationOnDisplay$$inline_6299_i$$inline_10919$$++) {
            var $bounds$$inline_6301_newObj$$inline_10920_width$$inline_6295$$ = $bData$$inline_6293_newObjs$$inline_10916$$[$animationOnDisplay$$inline_6299_i$$inline_10919$$], $animation$$inline_10923_startState$$inline_10921$$ = $ariaId_height$$82_oldShapes_value$$167$$[$animationOnDisplay$$inline_6299_i$$inline_10919$$].$getAnimationParams$(), $context$$inline_6302_endState$$inline_10922_height$$inline_6296$$ = $bounds$$inline_6301_newObj$$inline_10920_width$$inline_6295$$.$getAnimationParams$();
            $bounds$$inline_6301_newObj$$inline_10920_width$$inline_6295$$.$setAnimationParams$($animation$$inline_10923_startState$$inline_10921$$);
            $animation$$inline_10923_startState$$inline_10921$$ = new D.$DvtCustomAnimation$$(this.$getCtx$(), $bounds$$inline_6301_newObj$$inline_10920_width$$inline_6295$$, $animationDuration$$inline_6300$$);
            (0,D.$JSCompiler_StaticMethods_addProp$$)($animation$$inline_10923_startState$$inline_10921$$.$_animator$, "typeNumberArray", $bounds$$inline_6301_newObj$$inline_10920_width$$inline_6295$$, $bounds$$inline_6301_newObj$$inline_10920_width$$inline_6295$$.$getAnimationParams$, $bounds$$inline_6301_newObj$$inline_10920_width$$inline_6295$$.$setAnimationParams$, $context$$inline_6302_endState$$inline_10922_height$$inline_6296$$);
            $animatedObjs$$inline_10918_animationOnDataChange$$inline_6298$$.push($animation$$inline_10923_startState$$inline_10921$$)
          }
          this.$_animation$ = new D.$DvtParallelPlayable$$(this.$getCtx$(), $animatedObjs$$inline_10918_animationOnDataChange$$inline_6298$$)
        }
      }
    }
    $bBlackBoxUpdate$$inline_6297_options$$131_tooltip$$29$$ || this.removeChild(this.$_container$);
    this.$_animation$ && (this.$_animation$.play(), this.$_animation$.$setOnEnd$(this.$_onAnimationEnd$, this));
    $bBlackBoxUpdate$$inline_6297_options$$131_tooltip$$29$$ && (this.$_oldContainer$ = this.$_container$);
    this.$_container$ = $container$$98_width$$88$$
  }
  this.$_editingOverlay$ && (this.$_editingOverlay$.$setWidth$(this.$Width$), this.$_editingOverlay$.$setHeight$(this.$Height$), this.$__getEventManager$().$associate$(this.$_editingOverlay$, this.$__getLogicalObject$(), D.$JSCompiler_alias_TRUE$$));
  !this.$_bStaticRendering$ && !this.$Options$.readOnly && ($container$$98_width$$88$$.$setAriaRole$("slider"), $container$$98_width$$88$$.$setAriaProperty$("valuemin", this.$Options$.min), $container$$98_width$$88$$.$setAriaProperty$("valuemax", this.$Options$.max), $ariaId_height$$82_oldShapes_value$$167$$ = D.$DvtGaugeRenderer$$.$getFormattedMetricLabel$(this.$Options$.value, this), $container$$98_width$$88$$.$setAriaProperty$("valuenow", $ariaId_height$$82_oldShapes_value$$167$$), $bBlackBoxUpdate$$inline_6297_options$$131_tooltip$$29$$ = 
  D.$DvtGaugeRenderer$$.$getTooltipString$(this), (0,D.$DvtAgent$isTouchDevice$$)() && (this.$_container$.$setAriaProperty$("live", "assertive"), $ariaId_height$$82_oldShapes_value$$167$$ != $bBlackBoxUpdate$$inline_6297_options$$131_tooltip$$29$$ && ($bBlackBoxUpdate$$inline_6297_options$$131_tooltip$$29$$ = $ariaId_height$$82_oldShapes_value$$167$$ + (0,D.$DvtBundle$getTranslatedString$$)("DvtUtilBundle", "ARIA_LABEL_DESC_DELIMITER") + $bBlackBoxUpdate$$inline_6297_options$$131_tooltip$$29$$)), 
  $ariaId_height$$82_oldShapes_value$$167$$ != $bBlackBoxUpdate$$inline_6297_options$$131_tooltip$$29$$ && $container$$98_width$$88$$.$setAriaProperty$("label", $bBlackBoxUpdate$$inline_6297_options$$131_tooltip$$29$$), this.$_renderCount$ = this.$_renderCount$ != D.$JSCompiler_alias_NULL$$ ? this.$_renderCount$ + 1 : 0, $ariaId_height$$82_oldShapes_value$$167$$ = this.getId() + "_" + this.$_renderCount$, $container$$98_width$$88$$.setId($ariaId_height$$82_oldShapes_value$$167$$), (0,D.$JSCompiler_StaticMethods_setActiveElement$$)(this.$getCtx$(), 
  $container$$98_width$$88$$));
  this.$Options$._selectingCursor && this.setCursor("pointer");
  this.$UpdateAriaAttributes$()
};
D.$DvtGauge$$.prototype.render = D.$DvtGauge$$.prototype.$render$;
D.$JSCompiler_prototypeAlias$$ = D.$DvtGauge$$.prototype;
D.$JSCompiler_prototypeAlias$$.$__getLogicalObject$ = function $$JSCompiler_prototypeAlias$$$$__getLogicalObject$$() {
  var $tooltip$$30$$ = D.$DvtGaugeRenderer$$.$getTooltipString$(this), $color$$52$$ = D.$DvtGaugeStyleUtils$$.$getColor$(this);
  return new D.$DvtSimpleObjPeer$$(D.$JSCompiler_alias_NULL$$, $tooltip$$30$$, $color$$52$$)
};
D.$JSCompiler_prototypeAlias$$.$Render$ = (0,D.$JSCompiler_emptyFn$$)();
D.$JSCompiler_prototypeAlias$$.$CreateAnimationOnDisplay$ = (0,D.$JSCompiler_returnArg$$)(D.$JSCompiler_alias_NULL$$);
D.$JSCompiler_prototypeAlias$$.$GetValueAt$ = (0,D.$JSCompiler_returnArg$$)(D.$JSCompiler_alias_NULL$$);
D.$JSCompiler_prototypeAlias$$.$renderUpdate$ = function $$JSCompiler_prototypeAlias$$$$renderUpdate$$() {
  this.$render$();
  (0,D.$JSCompiler_StaticMethods_UpdateAriaLiveValue$$)(this, this.$_container$)
};
D.$JSCompiler_StaticMethods_UpdateAriaLiveValue$$ = function $$JSCompiler_StaticMethods_UpdateAriaLiveValue$$$($JSCompiler_StaticMethods_UpdateAriaLiveValue$self$$, $container$$101$$, $value$$168$$) {
  $value$$168$$ = D.$DvtGaugeRenderer$$.$getFormattedMetricLabel$($value$$168$$ ? $value$$168$$ : $JSCompiler_StaticMethods_UpdateAriaLiveValue$self$$.$Options$.value, $JSCompiler_StaticMethods_UpdateAriaLiveValue$self$$);
  $container$$101$$.$setAriaProperty$("valuenow", $value$$168$$);
  (0,D.$DvtAgent$isTouchDevice$$)() && $container$$101$$.$setAriaProperty$("label", $value$$168$$)
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtGauge$$.prototype;
D.$JSCompiler_prototypeAlias$$.$_onAnimationEnd$ = function $$JSCompiler_prototypeAlias$$$$_onAnimationEnd$$() {
  this.$_oldContainer$ && (this.removeChild(this.$_oldContainer$), this.$_oldContainer$ = D.$JSCompiler_alias_NULL$$);
  this.$_animation$ = D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.$__getEventManager$ = (0,D.$JSCompiler_get$$)("$_eventManager$");
D.$JSCompiler_prototypeAlias$$.$__processValueChangeStart$ = function $$JSCompiler_prototypeAlias$$$$__processValueChangeStart$$($x$$202$$, $y$$176$$) {
  this.$_bEditing$ = D.$JSCompiler_alias_TRUE$$;
  this.$_oldValue$ = this.$Options$.value;
  this.$__processValueChangeMove$($x$$202$$, $y$$176$$)
};
D.$JSCompiler_prototypeAlias$$.$__processValueChangeMove$ = function $$JSCompiler_prototypeAlias$$$$__processValueChangeMove$$($x$$203$$, $y$$177$$) {
  this.$_oldValue$ != D.$JSCompiler_alias_NULL$$ && (this.$Options$.value = D.$DvtGaugeRenderer$$.$adjustForStep$(this.$Options$, this.$GetValueAt$($x$$203$$, $y$$177$$)), this.$renderUpdate$(), this.$__dispatchEvent$(new D.$DvtValueChangeEvent$$(this.$_oldValue$, this.$Options$.value, D.$JSCompiler_alias_FALSE$$)))
};
D.$JSCompiler_prototypeAlias$$.$__processValueChangeEnd$ = function $$JSCompiler_prototypeAlias$$$$__processValueChangeEnd$$($x$$204$$, $y$$178$$) {
  this.$__processValueChangeMove$($x$$204$$, $y$$178$$);
  if((0,D.$DvtAgent$isTouchDevice$$)()) {
    var $value$$169$$ = D.$DvtGaugeRenderer$$.$getFormattedMetricLabel$(this.$Options$.value, this), $tooltip$$31$$ = D.$DvtGaugeRenderer$$.$getTooltipString$(this);
    $value$$169$$ != $tooltip$$31$$ && ($tooltip$$31$$ = $value$$169$$ + (0,D.$DvtBundle$getTranslatedString$$)("DvtUtilBundle", "ARIA_LABEL_DESC_DELIMITER") + $tooltip$$31$$, this.$_container$.$setAriaProperty$("label", $tooltip$$31$$))
  }
  this.$__dispatchEvent$(new D.$DvtValueChangeEvent$$(this.$_oldValue$, this.$Options$.value, D.$JSCompiler_alias_TRUE$$));
  this.$_bEditing$ = D.$JSCompiler_alias_FALSE$$;
  this.$_oldValue$ = D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.$CreateEventManager$ = function $$JSCompiler_prototypeAlias$$$$CreateEventManager$$() {
  return new D.$DvtGaugeEventManager$$(this)
};
D.$DvtGauge$_thresholdComparator$$ = function $$DvtGauge$_thresholdComparator$$$($a$$55$$, $b$$40$$) {
  return $a$$55$$.max != D.$JSCompiler_alias_NULL$$ && $b$$40$$.max != D.$JSCompiler_alias_NULL$$ ? $a$$55$$.max - $b$$40$$.max : $a$$55$$.max ? -window.Infinity : window.Infinity
};
D.$DvtGauge$$.prototype.$getAutomation$ = function $$DvtGauge$$$$$getAutomation$$() {
  return new D.$DvtGaugeAutomation$$(this)
};
D.$DvtGauge$$.prototype.getAutomation = D.$DvtGauge$$.prototype.$getAutomation$;
D.$DvtGauge$$.prototype.$CreateKeyboardHandler$ = function $$DvtGauge$$$$$CreateKeyboardHandler$$($manager$$16$$) {
  return new D.$DvtGaugeKeyboardHandler$$($manager$$16$$, this)
};
D.$DvtGauge$$.prototype.$GetComponentDescription$ = function $$DvtGauge$$$$$GetComponentDescription$$() {
  return(0,D.$DvtBundle$getTranslation$$)(this.$getOptions$(), "componentName", "DvtUtilBundle", "GAUGE")
};
D.$DvtGauge$$.prototype.$UpdateAriaAttributes$ = function $$DvtGauge$$$$$UpdateAriaAttributes$$() {
  if(!this.$_bStaticRendering$) {
    var $tooltip$$32$$ = D.$DvtGaugeRenderer$$.$getTooltipString$(this);
    (0,D.$JSCompiler_StaticMethods_IsParentRoot$$)(this) ? this.$Options$.readOnly ? (this.$getCtx$().$setAriaRole$("img"), (0,D.$JSCompiler_StaticMethods_setAriaLabel$$)(this.$getCtx$(), (0,D.$DvtBundle$getTranslatedString$$)("DvtUtilBundle", "COLON_SEP_LIST", [(0,D.$DvtBundle$getTranslatedString$$)("DvtUtilBundle", "DATA_VISUALIZATION"), (0,D.$DvtDisplayable$generateAriaLabel$$)(D.$DvtStringUtils$$.$processAriaLabel$(this.$GetComponentDescription$()), $tooltip$$32$$ ? [$tooltip$$32$$] : D.$JSCompiler_alias_NULL$$)]))) : 
    (this.$getCtx$().$setAriaRole$("application"), (0,D.$JSCompiler_StaticMethods_setAriaLabel$$)(this.$getCtx$(), (0,D.$DvtBundle$getTranslatedString$$)("DvtUtilBundle", "COLON_SEP_LIST", [(0,D.$DvtBundle$getTranslatedString$$)("DvtUtilBundle", "DATA_VISUALIZATION"), D.$DvtStringUtils$$.$processAriaLabel$(this.$GetComponentDescription$())]))) : this.$Options$.readOnly && (this.$setAriaRole$("img"), this.$setAriaProperty$("label", (0,D.$DvtDisplayable$generateAriaLabel$$)(D.$DvtStringUtils$$.$processAriaLabel$(this.$GetComponentDescription$()), 
    $tooltip$$32$$ ? [$tooltip$$32$$] : D.$JSCompiler_alias_NULL$$)))
  }
};
D.$DvtGaugeAutomation$$ = (0,D.$JSCompiler_set$$)("$_gauge$");
(0,D.$goog$exportPath_$$)("DvtGaugeAutomation", D.$DvtGaugeAutomation$$);
D.$DvtObj$$.$createSubclass$(D.$DvtGaugeAutomation$$, D.$DvtAutomation$$, "DvtGaugeAutomation");
D.$DvtGaugeAutomation$$.prototype.$getDomElementForSubId$ = function $$DvtGaugeAutomation$$$$$getDomElementForSubId$$($item$$24_subId$$12$$) {
  if("tooltip" == $item$$24_subId$$12$$) {
    return(0,D.$JSCompiler_StaticMethods_GetTooltipElement$$)(this.$_gauge$)
  }
  if(0 == $item$$24_subId$$12$$.indexOf("item")) {
    var $openParen$$2$$ = $item$$24_subId$$12$$.indexOf("["), $closeParen$$2$$ = $item$$24_subId$$12$$.indexOf("]");
    if(0 < $openParen$$2$$ && 0 < $closeParen$$2$$ && ($item$$24_subId$$12$$ = this.$_gauge$.$_container$.$getChildAt$(0).$getChildAt$($item$$24_subId$$12$$.substring($openParen$$2$$ + 1, $closeParen$$2$$)))) {
      return $item$$24_subId$$12$$.$getElem$()
    }
  }
  return D.$JSCompiler_alias_NULL$$
};
D.$DvtGaugeAutomation$$.prototype.getDomElementForSubId = D.$DvtGaugeAutomation$$.prototype.$getDomElementForSubId$;
D.$DvtGaugeAutomation$$.prototype.getValue = function $$DvtGaugeAutomation$$$$getValue$() {
  return this.$_gauge$.$getOptions$().value
};
D.$DvtGaugeAutomation$$.prototype.getValue = D.$DvtGaugeAutomation$$.prototype.getValue;
D.$DvtGaugeAutomation$$.prototype.$getMetricLabel$ = function $$DvtGaugeAutomation$$$$$getMetricLabel$$() {
  return D.$DvtGaugeRenderer$$.$getFormattedMetricLabel$(this.getValue(), this.$_gauge$)
};
D.$DvtGaugeAutomation$$.prototype.getMetricLabel = D.$DvtGaugeAutomation$$.prototype.$getMetricLabel$;
(0,D.$DvtBundle$addDefaultStrings$$)("DvtGaugeBundle", {});
D.$DvtGaugeDefaults$$ = (0,D.$JSCompiler_emptyFn$$)();
D.$DvtObj$$.$createSubclass$(D.$DvtGaugeDefaults$$, D.$DvtBaseComponentDefaults$$, "DvtGaugeDefaults");
D.$DvtGaugeDefaults$SKIN_ALTA$$ = {skin:"alta", color:"#393737", metricLabel:{style:new D.$DvtCSSStyle$$("font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;")}, _statusMessageStyle:new D.$DvtCSSStyle$$("font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;"), title:{style:new D.$DvtCSSStyle$$("font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;")}, _thresholdColors:["#ed6647", "#fad55c", "#68c182"]};
D.$DvtGaugeDefaults$VERSION_1$$ = {skin:"skyros", min:0, max:100, color:"#313842", borderColor:D.$JSCompiler_alias_NULL$$, visualEffects:"auto", emptyText:D.$JSCompiler_alias_NULL$$, animationOnDataChange:"none", animationOnDisplay:"none", animationDuration:500, readOnly:"true", metricLabel:{rendered:"auto", scaling:"auto", style:new D.$DvtCSSStyle$$("font-family: tahoma, sans-serif;"), textType:"number"}, _statusMessageStyle:new D.$DvtCSSStyle$$("font-family: tahoma, sans-serif;"), title:{style:new D.$DvtCSSStyle$$("font-family: tahoma, sans-serif;"), 
position:"auto"}, _thresholdColors:["#D62800", "#FFCF21", "#84AE31"], __layout:{outerGap:1, labelGap:5}};
D.$DvtGaugeDefaults$$.prototype.Init = function $$DvtGaugeDefaults$$$$Init$($defaultsMap$$1_ret$$88$$) {
  $defaultsMap$$1_ret$$88$$ = {skyros:D.$DvtJSONUtils$$.$merge$($defaultsMap$$1_ret$$88$$.skyros, D.$DvtGaugeDefaults$VERSION_1$$), alta:D.$DvtJSONUtils$$.$merge$($defaultsMap$$1_ret$$88$$.alta, D.$DvtGaugeDefaults$SKIN_ALTA$$)};
  D.$DvtGaugeDefaults$$.$superclass$.Init.call(this, $defaultsMap$$1_ret$$88$$)
};
D.$DvtGaugeDefaults$isSkyrosSkin$$ = function $$DvtGaugeDefaults$isSkyrosSkin$$$($gauge$$18$$) {
  return"skyros" == $gauge$$18$$.$getOptions$().skin
};
D.$DvtGaugeDataUtils$$ = {};
D.$DvtObj$$.$createSubclass$(D.$DvtGaugeDataUtils$$, D.$DvtObj$$, "DvtGaugeDataUtils");
D.$DvtGaugeDataUtils$$.$hasData$ = function $$DvtGaugeDataUtils$$$$hasData$$($gauge$$14_options$$132$$) {
  $gauge$$14_options$$132$$ = $gauge$$14_options$$132$$.$getOptions$();
  return!$gauge$$14_options$$132$$ || (0,window.isNaN)($gauge$$14_options$$132$$.value) || $gauge$$14_options$$132$$.value === D.$JSCompiler_alias_NULL$$ ? D.$JSCompiler_alias_FALSE$$ : D.$JSCompiler_alias_TRUE$$
};
D.$DvtGaugeDataUtils$$.$getValueThresholdIndex$ = function $$DvtGaugeDataUtils$$$$getValueThresholdIndex$$($gauge$$15$$, $value$$170$$) {
  var $options$$133_thresholds$$1$$ = $gauge$$15$$.$getOptions$(), $gaugeValue$$ = $value$$170$$ != D.$JSCompiler_alias_NULL$$ ? $value$$170$$ : $options$$133_thresholds$$1$$.value, $options$$133_thresholds$$1$$ = $options$$133_thresholds$$1$$.thresholds;
  if(!$options$$133_thresholds$$1$$) {
    return-1
  }
  for(var $i$$612$$ = 0;$i$$612$$ < $options$$133_thresholds$$1$$.length;$i$$612$$++) {
    if($gaugeValue$$ <= $options$$133_thresholds$$1$$[$i$$612$$].max) {
      return $i$$612$$
    }
  }
  return $options$$133_thresholds$$1$$.length - 1
};
D.$DvtGaugeDataUtils$$.$getThreshold$ = function $$DvtGaugeDataUtils$$$$getThreshold$$($gauge$$16$$, $index$$205$$) {
  var $thresholds$$2$$ = $gauge$$16$$.$getOptions$().thresholds;
  return $thresholds$$2$$ && 0 <= $index$$205$$ && $index$$205$$ < $thresholds$$2$$.length ? $thresholds$$2$$[$index$$205$$] : D.$JSCompiler_alias_NULL$$
};
D.$DvtGaugeDataUtils$$.$getReferenceObject$ = function $$DvtGaugeDataUtils$$$$getReferenceObject$$($gauge$$17$$, $index$$206$$) {
  var $referenceObjects$$ = $gauge$$17$$.$getOptions$().referenceLines;
  return $referenceObjects$$ && 0 <= $index$$206$$ && $index$$206$$ < $referenceObjects$$.length ? $referenceObjects$$[$index$$206$$] : D.$JSCompiler_alias_NULL$$
};
D.$DvtGaugeEventManager$$ = function $$DvtGaugeEventManager$$$($gauge$$19$$) {
  this.Init($gauge$$19$$.$getCtx$(), $gauge$$19$$.$__dispatchEvent$, $gauge$$19$$);
  this.$_gauge$ = $gauge$$19$$;
  this.$IsMouseEditing$ = D.$JSCompiler_alias_FALSE$$
};
D.$DvtObj$$.$createSubclass$(D.$DvtGaugeEventManager$$, D.$DvtEventManager$$, "DvtGaugeEventManager");
D.$JSCompiler_prototypeAlias$$ = D.$DvtGaugeEventManager$$.prototype;
D.$JSCompiler_prototypeAlias$$.$OnMouseDown$ = function $$JSCompiler_prototypeAlias$$$$OnMouseDown$$($coords$$27_event$$501$$) {
  this.$_gauge$.$getOptions$().readOnly === D.$JSCompiler_alias_FALSE$$ ? (this.$IsMouseEditing$ = D.$JSCompiler_alias_TRUE$$, this.$hideTooltip$(), $coords$$27_event$$501$$ = (0,D.$JSCompiler_StaticMethods_GetRelativePosition$$)(this, $coords$$27_event$$501$$.pageX, $coords$$27_event$$501$$.pageY), this.$_gauge$.$__processValueChangeStart$($coords$$27_event$$501$$.x, $coords$$27_event$$501$$.y)) : D.$DvtGaugeEventManager$$.$superclass$.$OnMouseDown$.call(this, $coords$$27_event$$501$$)
};
D.$JSCompiler_prototypeAlias$$.$OnMouseUp$ = function $$JSCompiler_prototypeAlias$$$$OnMouseUp$$($coords$$28_event$$502$$) {
  this.$IsMouseEditing$ ? (this.$IsMouseEditing$ = D.$JSCompiler_alias_FALSE$$, $coords$$28_event$$502$$ = (0,D.$JSCompiler_StaticMethods_GetRelativePosition$$)(this, $coords$$28_event$$502$$.pageX, $coords$$28_event$$502$$.pageY), this.$_gauge$.$__processValueChangeEnd$($coords$$28_event$$502$$.x, $coords$$28_event$$502$$.y)) : D.$DvtGaugeEventManager$$.$superclass$.$OnMouseUp$.call(this, $coords$$28_event$$502$$)
};
D.$JSCompiler_prototypeAlias$$.$OnMouseMove$ = function $$JSCompiler_prototypeAlias$$$$OnMouseMove$$($event$$503$$) {
  if(this.$IsMouseEditing$) {
    var $coords$$29$$ = (0,D.$JSCompiler_StaticMethods_GetRelativePosition$$)(this, $event$$503$$.pageX, $event$$503$$.pageY);
    this.$_gauge$.$__processValueChangeMove$($coords$$29$$.x, $coords$$29$$.y)
  }
  (this.$IsShowingTooltipWhileEditing$() || !this.$IsMouseEditing$) && D.$DvtGaugeEventManager$$.$superclass$.$OnMouseMove$.call(this, $event$$503$$)
};
D.$JSCompiler_prototypeAlias$$.$IsShowingTooltipWhileEditing$ = (0,D.$JSCompiler_returnArg$$)(D.$JSCompiler_alias_FALSE$$);
D.$JSCompiler_prototypeAlias$$.$PreEventBubble$ = function $$JSCompiler_prototypeAlias$$$$PreEventBubble$$($event$$504$$) {
  if(D.$DvtTouchEvent$$.$TOUCHSTART$ === $event$$504$$.type && this.$_gauge$.$getOptions$().readOnly === D.$JSCompiler_alias_FALSE$$) {
    this.$IsMouseEditing$ = D.$JSCompiler_alias_TRUE$$;
    var $coords$$30$$ = (0,D.$JSCompiler_StaticMethods_GetRelativePosition$$)(this, $event$$504$$.touches[0].pageX, $event$$504$$.touches[0].pageY);
    this.$_gauge$.$__processValueChangeStart$($coords$$30$$.x, $coords$$30$$.y);
    $event$$504$$.preventDefault()
  }else {
    D.$DvtTouchEvent$$.$TOUCHMOVE$ === $event$$504$$.type && this.$IsMouseEditing$ ? ($coords$$30$$ = (0,D.$JSCompiler_StaticMethods_GetRelativePosition$$)(this, $event$$504$$.touches[0].pageX, $event$$504$$.touches[0].pageY), this.$_gauge$.$__processValueChangeMove$($coords$$30$$.x, $coords$$30$$.y), $event$$504$$.preventDefault()) : D.$DvtTouchEvent$$.$TOUCHEND$ === $event$$504$$.type && this.$IsMouseEditing$ && (this.$IsMouseEditing$ = D.$JSCompiler_alias_FALSE$$, $coords$$30$$ = (0,D.$JSCompiler_StaticMethods_GetRelativePosition$$)(this, 
    $event$$504$$.changedTouches[0].pageX, $event$$504$$.changedTouches[0].pageY), this.$_gauge$.$__processValueChangeEnd$($coords$$30$$.x, $coords$$30$$.y), $event$$504$$.preventDefault())
  }
  (!this.$IsMouseEditing$ || this.$IsShowingTooltipWhileEditing$()) && D.$DvtGaugeEventManager$$.$superclass$.$PreEventBubble$.call(this, $event$$504$$)
};
D.$JSCompiler_prototypeAlias$$.$ProcessKeyboardEvent$ = function $$JSCompiler_prototypeAlias$$$$ProcessKeyboardEvent$$($event$$505$$) {
  if(!this.$KeyboardHandler$) {
    return D.$JSCompiler_alias_FALSE$$
  }
  this.$KeyboardHandler$.$processKeyDown$($event$$505$$);
  var $keyCode$$35_pos$$46$$ = $event$$505$$.keyCode;
  if(38 == $keyCode$$35_pos$$46$$ || 37 == $keyCode$$35_pos$$46$$ || 40 == $keyCode$$35_pos$$46$$ || 39 == $keyCode$$35_pos$$46$$ || 9 == $keyCode$$35_pos$$46$$) {
    $keyCode$$35_pos$$46$$ = (0,D.$JSCompiler_StaticMethods_getStageAbsolutePosition$$)(this.$_gauge$.$getCtx$()), (0,D.$JSCompiler_StaticMethods_ProcessObjectTooltip$$)(this, $event$$505$$, $keyCode$$35_pos$$46$$.x, $keyCode$$35_pos$$46$$.y, this.$_gauge$.$__getLogicalObject$(), this.$_gauge$)
  }
  return D.$JSCompiler_alias_FALSE$$
};
D.$JSCompiler_prototypeAlias$$.$OnBlur$ = function $$JSCompiler_prototypeAlias$$$$OnBlur$$($event$$506$$) {
  D.$DvtGaugeEventManager$$.$superclass$.$OnBlur$.call(this, $event$$506$$);
  this.$hideTooltip$()
};
D.$JSCompiler_StaticMethods_GetRelativePosition$$ = function $$JSCompiler_StaticMethods_GetRelativePosition$$$($JSCompiler_StaticMethods_GetRelativePosition$self$$, $pageX$$9_stageCoords$$, $pageY$$9$$) {
  $pageX$$9_stageCoords$$ = (0,D.$JSCompiler_StaticMethods_pageToStageCoords$$)($JSCompiler_StaticMethods_GetRelativePosition$self$$.$getCtx$(), $pageX$$9_stageCoords$$, $pageY$$9$$);
  return $JSCompiler_StaticMethods_GetRelativePosition$self$$.$_gauge$.$stageToLocal$($pageX$$9_stageCoords$$)
};
D.$DvtGaugeEventManager$$.prototype.$UpdateActiveElement$ = (0,D.$JSCompiler_emptyFn$$)();
D.$DvtGaugeKeyboardHandler$$ = function $$DvtGaugeKeyboardHandler$$$($manager$$17$$, $gauge$$20$$) {
  this.Init($manager$$17$$, $gauge$$20$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtGaugeKeyboardHandler$$, D.$DvtKeyboardHandler$$, "DvtGaugeKeyboardHandler");
D.$DvtGaugeKeyboardHandler$$.prototype.Init = function $$DvtGaugeKeyboardHandler$$$$Init$($manager$$18$$, $gauge$$21$$) {
  D.$DvtGaugeKeyboardHandler$$.$superclass$.Init.call(this, $manager$$18$$);
  this.$_gauge$ = $gauge$$21$$
};
D.$DvtGaugeKeyboardHandler$$.prototype.$processKeyDown$ = function $$DvtGaugeKeyboardHandler$$$$$processKeyDown$$($event$$507$$) {
  var $JSCompiler_StaticMethods___decreaseValue$self$$inline_6327_JSCompiler_StaticMethods___increaseValue$self$$inline_6324_keyCode$$36$$ = $event$$507$$.keyCode, $isR2L$$6_oldValue$$inline_6325_oldValue$$inline_6328$$ = (0,D.$DvtAgent$isRightToLeft$$)(this.$_gauge$.$getCtx$());
  if(38 == $JSCompiler_StaticMethods___decreaseValue$self$$inline_6327_JSCompiler_StaticMethods___increaseValue$self$$inline_6324_keyCode$$36$$ || $JSCompiler_StaticMethods___decreaseValue$self$$inline_6327_JSCompiler_StaticMethods___increaseValue$self$$inline_6324_keyCode$$36$$ == ($isR2L$$6_oldValue$$inline_6325_oldValue$$inline_6328$$ ? 37 : 39)) {
    $JSCompiler_StaticMethods___decreaseValue$self$$inline_6327_JSCompiler_StaticMethods___increaseValue$self$$inline_6324_keyCode$$36$$ = this.$_gauge$, $JSCompiler_StaticMethods___decreaseValue$self$$inline_6327_JSCompiler_StaticMethods___increaseValue$self$$inline_6324_keyCode$$36$$.$Options$.readOnly || ($isR2L$$6_oldValue$$inline_6325_oldValue$$inline_6328$$ = $JSCompiler_StaticMethods___decreaseValue$self$$inline_6327_JSCompiler_StaticMethods___increaseValue$self$$inline_6324_keyCode$$36$$.$Options$.value, 
    $JSCompiler_StaticMethods___decreaseValue$self$$inline_6327_JSCompiler_StaticMethods___increaseValue$self$$inline_6324_keyCode$$36$$.$Options$.value = $JSCompiler_StaticMethods___decreaseValue$self$$inline_6327_JSCompiler_StaticMethods___increaseValue$self$$inline_6324_keyCode$$36$$.$Options$.step != D.$JSCompiler_alias_NULL$$ ? D.$DvtGaugeRenderer$$.$adjustForStep$($JSCompiler_StaticMethods___decreaseValue$self$$inline_6327_JSCompiler_StaticMethods___increaseValue$self$$inline_6324_keyCode$$36$$.$Options$, 
    $JSCompiler_StaticMethods___decreaseValue$self$$inline_6327_JSCompiler_StaticMethods___increaseValue$self$$inline_6324_keyCode$$36$$.$Options$.value + $JSCompiler_StaticMethods___decreaseValue$self$$inline_6327_JSCompiler_StaticMethods___increaseValue$self$$inline_6324_keyCode$$36$$.$Options$.step) : window.Math.min(window.Math.max($JSCompiler_StaticMethods___decreaseValue$self$$inline_6327_JSCompiler_StaticMethods___increaseValue$self$$inline_6324_keyCode$$36$$.$Options$.value + ($JSCompiler_StaticMethods___decreaseValue$self$$inline_6327_JSCompiler_StaticMethods___increaseValue$self$$inline_6324_keyCode$$36$$.$Options$.max - 
    $JSCompiler_StaticMethods___decreaseValue$self$$inline_6327_JSCompiler_StaticMethods___increaseValue$self$$inline_6324_keyCode$$36$$.$Options$.min) / 100, $JSCompiler_StaticMethods___decreaseValue$self$$inline_6327_JSCompiler_StaticMethods___increaseValue$self$$inline_6324_keyCode$$36$$.$Options$.min), $JSCompiler_StaticMethods___decreaseValue$self$$inline_6327_JSCompiler_StaticMethods___increaseValue$self$$inline_6324_keyCode$$36$$.$Options$.max), $JSCompiler_StaticMethods___decreaseValue$self$$inline_6327_JSCompiler_StaticMethods___increaseValue$self$$inline_6324_keyCode$$36$$.$render$(), 
    $JSCompiler_StaticMethods___decreaseValue$self$$inline_6327_JSCompiler_StaticMethods___increaseValue$self$$inline_6324_keyCode$$36$$.$__dispatchEvent$(new D.$DvtValueChangeEvent$$($isR2L$$6_oldValue$$inline_6325_oldValue$$inline_6328$$, $JSCompiler_StaticMethods___decreaseValue$self$$inline_6327_JSCompiler_StaticMethods___increaseValue$self$$inline_6324_keyCode$$36$$.$Options$.value, D.$JSCompiler_alias_TRUE$$))), (0,D.$DvtEventManager$consumeEvent$$)($event$$507$$)
  }else {
    if(40 == $JSCompiler_StaticMethods___decreaseValue$self$$inline_6327_JSCompiler_StaticMethods___increaseValue$self$$inline_6324_keyCode$$36$$ || $JSCompiler_StaticMethods___decreaseValue$self$$inline_6327_JSCompiler_StaticMethods___increaseValue$self$$inline_6324_keyCode$$36$$ == ($isR2L$$6_oldValue$$inline_6325_oldValue$$inline_6328$$ ? 39 : 37)) {
      $JSCompiler_StaticMethods___decreaseValue$self$$inline_6327_JSCompiler_StaticMethods___increaseValue$self$$inline_6324_keyCode$$36$$ = this.$_gauge$, $JSCompiler_StaticMethods___decreaseValue$self$$inline_6327_JSCompiler_StaticMethods___increaseValue$self$$inline_6324_keyCode$$36$$.$Options$.readOnly || ($isR2L$$6_oldValue$$inline_6325_oldValue$$inline_6328$$ = $JSCompiler_StaticMethods___decreaseValue$self$$inline_6327_JSCompiler_StaticMethods___increaseValue$self$$inline_6324_keyCode$$36$$.$Options$.value, 
      $JSCompiler_StaticMethods___decreaseValue$self$$inline_6327_JSCompiler_StaticMethods___increaseValue$self$$inline_6324_keyCode$$36$$.$Options$.value = $JSCompiler_StaticMethods___decreaseValue$self$$inline_6327_JSCompiler_StaticMethods___increaseValue$self$$inline_6324_keyCode$$36$$.$Options$.step != D.$JSCompiler_alias_NULL$$ ? D.$DvtGaugeRenderer$$.$adjustForStep$($JSCompiler_StaticMethods___decreaseValue$self$$inline_6327_JSCompiler_StaticMethods___increaseValue$self$$inline_6324_keyCode$$36$$.$Options$, 
      $JSCompiler_StaticMethods___decreaseValue$self$$inline_6327_JSCompiler_StaticMethods___increaseValue$self$$inline_6324_keyCode$$36$$.$Options$.value - $JSCompiler_StaticMethods___decreaseValue$self$$inline_6327_JSCompiler_StaticMethods___increaseValue$self$$inline_6324_keyCode$$36$$.$Options$.step) : window.Math.min(window.Math.max($JSCompiler_StaticMethods___decreaseValue$self$$inline_6327_JSCompiler_StaticMethods___increaseValue$self$$inline_6324_keyCode$$36$$.$Options$.value - ($JSCompiler_StaticMethods___decreaseValue$self$$inline_6327_JSCompiler_StaticMethods___increaseValue$self$$inline_6324_keyCode$$36$$.$Options$.max - 
      $JSCompiler_StaticMethods___decreaseValue$self$$inline_6327_JSCompiler_StaticMethods___increaseValue$self$$inline_6324_keyCode$$36$$.$Options$.min) / 100, $JSCompiler_StaticMethods___decreaseValue$self$$inline_6327_JSCompiler_StaticMethods___increaseValue$self$$inline_6324_keyCode$$36$$.$Options$.min), $JSCompiler_StaticMethods___decreaseValue$self$$inline_6327_JSCompiler_StaticMethods___increaseValue$self$$inline_6324_keyCode$$36$$.$Options$.max), $JSCompiler_StaticMethods___decreaseValue$self$$inline_6327_JSCompiler_StaticMethods___increaseValue$self$$inline_6324_keyCode$$36$$.$render$(), 
      $JSCompiler_StaticMethods___decreaseValue$self$$inline_6327_JSCompiler_StaticMethods___increaseValue$self$$inline_6324_keyCode$$36$$.$__dispatchEvent$(new D.$DvtValueChangeEvent$$($isR2L$$6_oldValue$$inline_6325_oldValue$$inline_6328$$, $JSCompiler_StaticMethods___decreaseValue$self$$inline_6327_JSCompiler_StaticMethods___increaseValue$self$$inline_6324_keyCode$$36$$.$Options$.value, D.$JSCompiler_alias_TRUE$$))), (0,D.$DvtEventManager$consumeEvent$$)($event$$507$$)
    }
  }
};
D.$DvtGaugeStyleUtils$$ = {};
D.$DvtObj$$.$createSubclass$(D.$DvtGaugeStyleUtils$$, D.$DvtObj$$, "DvtGaugeStyleUtils");
D.$DvtGaugeStyleUtils$$.$_THRESHOLD_COLOR_RAMP$ = ["#ed6647", "#fad55c", "#68c182"];
D.$DvtGaugeStyleUtils$$.$_SKYROS_THRESHOLD_COLOR_RAMP$ = ["#D62800", "#FFCF21", "#84AE31"];
D.$DvtGaugeStyleUtils$$.$_SKYROS_THRESHOLD_COLOR_RAMP$ = ["#D62800", "#FFCF21", "#84AE31"];
D.$DvtGaugeStyleUtils$$.$_ALTA_CIRCLE$ = {startAngle:202.5, angleExtent:225, anchorX:100, anchorY:103, metricLabelBounds:{x:80, y:86, width:40, height:34}, indicatorLength:0.85, tickLabelHeight:20, tickLabelWidth:30, radius:60, majorTickCount:6};
D.$DvtGaugeStyleUtils$$.$_ALTA_DOME$ = {startAngle:202.5, angleExtent:225, anchorX:100, anchorY:103, metricLabelBounds:{x:83, y:86, width:34, height:34}, indicatorLength:0.85, tickLabelHeight:20, tickLabelWidth:30, radius:60, majorTickCount:6};
D.$DvtGaugeStyleUtils$$.$_ALTA_RECTANGLE$ = {startAngle:202.5, angleExtent:225, anchorX:100, anchorY:103, metricLabelBounds:{x:83, y:86, width:34, height:34}, indicatorLength:0.85, tickLabelHeight:20, tickLabelWidth:30, radius:60, majorTickCount:6};
D.$DvtGaugeStyleUtils$$.$_ANTIQUE_CIRCLE$ = {startAngle:220.5, angleExtent:261.1, anchorX:100, anchorY:100, metricLabelBounds:{x:82, y:133, width:36, height:34}, indicatorLength:0.85, tickLabelHeight:20, tickLabelWidth:30, radius:61, majorTickCount:6};
D.$DvtGaugeStyleUtils$$.$_ANTIQUE_DOME$ = {startAngle:195.5, angleExtent:210.8, anchorX:100, anchorY:100, metricLabelBounds:{x:84, y:135, width:32, height:35}, indicatorLength:0.98, tickLabelHeight:20, tickLabelWidth:30, radius:63, majorTickCount:6};
D.$DvtGaugeStyleUtils$$.$_ANTIQUE_RECTANGLE$ = {startAngle:207.6, angleExtent:235, anchorX:100, anchorY:95.8, metricLabelBounds:{x:83, y:125, width:34, height:40}, indicatorLength:1.05, tickLabelHeight:20, tickLabelWidth:30, radius:64, majorTickCount:6};
D.$DvtGaugeStyleUtils$$.$_LIGHT_CIRCLE$ = {startAngle:220.5, angleExtent:261.1, anchorX:100, anchorY:100, metricLabelBounds:{x:80, y:82, width:40, height:40}, indicatorLength:0.82, tickLabelHeight:20, tickLabelWidth:30, radius:58, majorTickCount:6};
D.$DvtGaugeStyleUtils$$.$_LIGHT_DOME$ = {startAngle:201, angleExtent:222, anchorX:100.2, anchorY:89, metricLabelBounds:{x:80, y:70, width:41, height:39}, indicatorLength:1.23, tickLabelHeight:20, tickLabelWidth:30, radius:56, majorTickCount:6};
D.$DvtGaugeStyleUtils$$.$_LIGHT_RECTANGLE$ = {startAngle:211, angleExtent:242, anchorX:100, anchorY:91.445, metricLabelBounds:{x:78, y:75, width:44, height:38}, indicatorLength:1.1, tickLabelHeight:20, tickLabelWidth:30, radius:58, majorTickCount:6};
D.$DvtGaugeStyleUtils$$.$_DARK_CIRCLE$ = {startAngle:220.5, angleExtent:261.5, metricLabelBounds:{x:80, y:82, width:40, height:40}, indicatorLength:0.85, tickLabelHeight:20, tickLabelWidth:30, radius:60, majorTickCount:6};
D.$DvtGaugeStyleUtils$$.$_DARK_DOME$ = {startAngle:201, angleExtent:222, anchorX:100.2, anchorY:89, metricLabelBounds:{x:80, y:73, width:40, height:36}, indicatorLength:1.23, tickLabelHeight:20, tickLabelWidth:30, radius:56, majorTickCount:6};
D.$DvtGaugeStyleUtils$$.$_DARK_RECTANGLE$ = {startAngle:201, angleExtent:222, anchorX:100.2, anchorY:99.5, metricLabelBounds:{x:80, y:83, width:41, height:36}, indicatorLength:1.1, tickLabelHeight:20, tickLabelWidth:30, radius:58, majorTickCount:6};
D.$DvtGaugeStyleUtils$$.$_ANTIQUE_INDICATOR$ = {anchorX:42, anchorY:510};
D.$DvtGaugeStyleUtils$$.$_ALTA_INDICATOR$ = {anchorX:187, anchorY:388};
D.$DvtGaugeStyleUtils$$.$_LIGHT_INDICATOR$ = {anchorX:227, anchorY:425};
D.$DvtGaugeStyleUtils$$.$_DARK_INDICATOR$ = {anchorX:227, anchorY:425};
D.$DvtGaugeStyleUtils$$.$getColor$ = function $$DvtGaugeStyleUtils$$$$getColor$$($gauge$$29$$) {
  var $options$$144$$ = $gauge$$29$$.$getOptions$(), $thresholdIndex$$1$$ = D.$DvtGaugeDataUtils$$.$getValueThresholdIndex$($gauge$$29$$), $threshold$$7$$ = D.$DvtGaugeDataUtils$$.$getThreshold$($gauge$$29$$, $thresholdIndex$$1$$);
  return $threshold$$7$$ && (!($gauge$$29$$ instanceof D.$DvtStatusMeterGauge$$) || $gauge$$29$$ instanceof D.$DvtStatusMeterGauge$$ && "onIndicator" == $options$$144$$.thresholdDisplay) ? D.$DvtGaugeStyleUtils$$.$getThresholdColor$($gauge$$29$$, $threshold$$7$$, $thresholdIndex$$1$$) : $options$$144$$.color
};
D.$DvtGaugeStyleUtils$$.$getBorderColor$ = function $$DvtGaugeStyleUtils$$$$getBorderColor$$($gauge$$30$$) {
  var $options$$145$$ = $gauge$$30$$.$getOptions$(), $threshold$$8_thresholdIndex$$2$$ = D.$DvtGaugeDataUtils$$.$getValueThresholdIndex$($gauge$$30$$);
  return($threshold$$8_thresholdIndex$$2$$ = D.$DvtGaugeDataUtils$$.$getThreshold$($gauge$$30$$, $threshold$$8_thresholdIndex$$2$$)) && $threshold$$8_thresholdIndex$$2$$.borderColor && (!($gauge$$30$$ instanceof D.$DvtStatusMeterGauge$$) || $gauge$$30$$ instanceof D.$DvtStatusMeterGauge$$ && "onIndicator" == $options$$145$$.thresholdDisplay) ? $threshold$$8_thresholdIndex$$2$$.borderColor : $options$$145$$.borderColor
};
D.$DvtGaugeStyleUtils$$.$getPlotAreaColor$ = function $$DvtGaugeStyleUtils$$$$getPlotAreaColor$$($gauge$$31$$) {
  var $options$$146$$ = $gauge$$31$$.$getOptions$(), $thresholdIndex$$3$$ = D.$DvtGaugeDataUtils$$.$getValueThresholdIndex$($gauge$$31$$), $threshold$$9$$ = D.$DvtGaugeDataUtils$$.$getThreshold$($gauge$$31$$, $thresholdIndex$$3$$);
  return $threshold$$9$$ && (!($gauge$$31$$ instanceof D.$DvtStatusMeterGauge$$) || $gauge$$31$$ instanceof D.$DvtStatusMeterGauge$$ && "onIndicator" != $options$$146$$.thresholdDisplay) ? D.$DvtGaugeStyleUtils$$.$getThresholdColor$($gauge$$31$$, $threshold$$9$$, $thresholdIndex$$3$$) : $options$$146$$.plotArea.color
};
D.$DvtGaugeStyleUtils$$.$getThresholdColor$ = function $$DvtGaugeStyleUtils$$$$getThresholdColor$$($gauge$$32_options$$147$$, $threshold$$10$$, $thresholdIndex$$4$$) {
  if($threshold$$10$$.color) {
    return $threshold$$10$$.color
  }
  $gauge$$32_options$$147$$ = $gauge$$32_options$$147$$.$getOptions$();
  return $gauge$$32_options$$147$$._thresholdColors[$thresholdIndex$$4$$ % $gauge$$32_options$$147$$._thresholdColors.length]
};
D.$DvtGaugeStyleUtils$$.$getDialBackground$ = function $$DvtGaugeStyleUtils$$$$getDialBackground$$($backgroundType$$1$$) {
  return"rectangleAlta" === $backgroundType$$1$$ ? D.$DvtGaugeStyleUtils$$.$_ALTA_RECTANGLE$ : "domeAlta" === $backgroundType$$1$$ ? D.$DvtGaugeStyleUtils$$.$_ALTA_DOME$ : "circleAntique" === $backgroundType$$1$$ ? D.$DvtGaugeStyleUtils$$.$_ANTIQUE_CIRCLE$ : "rectangleAntique" === $backgroundType$$1$$ ? D.$DvtGaugeStyleUtils$$.$_ANTIQUE_RECTANGLE$ : "domeAntique" === $backgroundType$$1$$ ? D.$DvtGaugeStyleUtils$$.$_ANTIQUE_DOME$ : "circleLight" === $backgroundType$$1$$ ? D.$DvtGaugeStyleUtils$$.$_LIGHT_CIRCLE$ : 
  "rectangleLight" === $backgroundType$$1$$ ? D.$DvtGaugeStyleUtils$$.$_LIGHT_RECTANGLE$ : "domeLight" === $backgroundType$$1$$ ? D.$DvtGaugeStyleUtils$$.$_LIGHT_DOME$ : "circleDark" === $backgroundType$$1$$ ? D.$DvtGaugeStyleUtils$$.$_DARK_CIRCLE$ : "rectangleDark" === $backgroundType$$1$$ ? D.$DvtGaugeStyleUtils$$.$_DARK_RECTANGLE$ : "domeDark" === $backgroundType$$1$$ ? D.$DvtGaugeStyleUtils$$.$_DARK_DOME$ : D.$DvtGaugeStyleUtils$$.$_ALTA_CIRCLE$
};
D.$DvtGaugeStyleUtils$$.$getDialIndicator$ = function $$DvtGaugeStyleUtils$$$$getDialIndicator$$($indicatorType$$1$$) {
  return"needleAntique" === $indicatorType$$1$$ ? D.$DvtGaugeStyleUtils$$.$_ANTIQUE_INDICATOR$ : "needleLight" === $indicatorType$$1$$ ? D.$DvtGaugeStyleUtils$$.$_LIGHT_INDICATOR$ : "needleDark" === $indicatorType$$1$$ ? D.$DvtGaugeStyleUtils$$.$_DARK_INDICATOR$ : D.$DvtGaugeStyleUtils$$.$_ALTA_INDICATOR$
};
D.$DvtGaugeStyleUtils$$.$hasTitle$ = function $$DvtGaugeStyleUtils$$$$hasTitle$$($options$$148$$) {
  return!!$options$$148$$.title.text
};
D.$DvtGaugeRenderer$$ = {};
D.$DvtObj$$.$createSubclass$(D.$DvtGaugeRenderer$$, D.$DvtObj$$, "DvtGaugeRenderer");
D.$DvtGaugeRenderer$$.$renderEmptyText$ = function $$DvtGaugeRenderer$$$$renderEmptyText$$($gauge$$22$$, $container$$102$$, $availSpace$$84$$) {
  var $labelStyle$$14_options$$135$$ = $gauge$$22$$.$getOptions$(), $emptyTextStr$$1$$ = $labelStyle$$14_options$$135$$.emptyText;
  $emptyTextStr$$1$$ || ($emptyTextStr$$1$$ = (0,D.$DvtBundle$getTranslation$$)($labelStyle$$14_options$$135$$, "labelNoData", "DvtUtilBundle", "NO_DATA", D.$JSCompiler_alias_NULL$$));
  $labelStyle$$14_options$$135$$ = $labelStyle$$14_options$$135$$._statusMessageStyle;
  $labelStyle$$14_options$$135$$.$getStyle$("font-size") || $labelStyle$$14_options$$135$$.$setStyle$("font-size", "13px");
  if($gauge$$22$$ instanceof D.$DvtStatusMeterGauge$$) {
    var $labelColor$$1$$ = $labelStyle$$14_options$$135$$.$getStyle$("color");
    $labelStyle$$14_options$$135$$.$setStyle$("color", $labelColor$$1$$ ? $labelColor$$1$$ : "#333333")
  }
  D.$DvtTextUtils$$.$renderEmptyText$($container$$102$$, $emptyTextStr$$1$$, new D.$DvtRectangle$$($availSpace$$84$$.x, $availSpace$$84$$.y, $availSpace$$84$$.$w$, $availSpace$$84$$.$h$), $gauge$$22$$.$__getEventManager$(), $labelStyle$$14_options$$135$$)
};
D.$DvtGaugeRenderer$$.$getFormattedMetricLabel$ = function $$DvtGaugeRenderer$$$$getFormattedMetricLabel$$($value$$171$$, $gauge$$23$$) {
  var $options$$136$$ = $gauge$$23$$.$getOptions$();
  return $options$$136$$.metricLabel.text ? $options$$136$$.metricLabel.text : D.$DvtGaugeRenderer$$.$_formatLabelValue$($value$$171$$, $gauge$$23$$, $options$$136$$.metricLabel.converter, $options$$136$$.metricLabel.scaling, $options$$136$$.metricLabel.autoPrecision ? $options$$136$$.metricLabel.autoPrecision : "on", "percent" == $options$$136$$.metricLabel.textType)
};
D.$DvtGaugeRenderer$$.$formatTickLabelValue$ = function $$DvtGaugeRenderer$$$$formatTickLabelValue$$($value$$172$$, $gauge$$24$$) {
  var $options$$137$$ = $gauge$$24$$.$getOptions$(), $converter$$6$$ = D.$JSCompiler_alias_NULL$$, $isPercent$$1$$ = "percent" == $options$$137$$.tickLabel.textType;
  "on" == $options$$137$$.tickLabel.rendered && $options$$137$$.tickLabel.converter && ($converter$$6$$ = $options$$137$$.tickLabel.converter);
  var $scaling$$2$$ = D.$JSCompiler_alias_NULL$$;
  "on" == $options$$137$$.tickLabel.rendered && $options$$137$$.tickLabel.scaling && ($scaling$$2$$ = $options$$137$$.tickLabel.scaling);
  return D.$DvtGaugeRenderer$$.$_formatLabelValue$($value$$172$$, $gauge$$24$$, $converter$$6$$, $scaling$$2$$, $options$$137$$.tickLabel.autoPrecision ? $options$$137$$.tickLabel.autoPrecision : "on", $isPercent$$1$$)
};
D.$DvtGaugeRenderer$$.$_formatLabelValue$ = function $$DvtGaugeRenderer$$$$_formatLabelValue$$($output_value$$173$$, $formatter$$1_gauge$$25$$, $converter$$7$$, $scaling$$3$$, $autoPrecision$$7$$, $isPercent$$2$$) {
  var $options$$138$$ = $formatter$$1_gauge$$25$$.$getOptions$(), $percentConverter$$1$$ = D.$JSCompiler_alias_NULL$$, $minValue$$12$$ = $options$$138$$.min, $maxValue$$11$$ = $options$$138$$.max, $difference$$ = $maxValue$$11$$ - $minValue$$12$$, $increment$$2$$ = D.$JSCompiler_alias_NULL$$;
  (0,window.isNaN)($difference$$) || ($increment$$2$$ = $difference$$ / (1E3 > $difference$$ ? 100 : 1E3));
  $isPercent$$2$$ && ($output_value$$173$$ = D.$DvtGaugeRenderer$$.$getFillPercentage$($options$$138$$, $options$$138$$.min, $output_value$$173$$, D.$JSCompiler_alias_TRUE$$), $percentConverter$$1$$ = (0,D.$JSCompiler_StaticMethods_getNumberConverter$$)($formatter$$1_gauge$$25$$.$getCtx$(), {style:"percent", maximumFractionDigits:0}));
  $formatter$$1_gauge$$25$$ = new D.$DvtLinearScaleAxisValueFormatter$$($formatter$$1_gauge$$25$$.$getCtx$(), $minValue$$12$$, $maxValue$$11$$, $increment$$2$$, $scaling$$3$$, $autoPrecision$$7$$);
  $output_value$$173$$ = $converter$$7$$ && $converter$$7$$.getAsString ? $formatter$$1_gauge$$25$$.$format$($output_value$$173$$, $converter$$7$$) : $converter$$7$$ && $converter$$7$$.format ? $formatter$$1_gauge$$25$$.$format$($output_value$$173$$, $converter$$7$$) : $percentConverter$$1$$ ? $formatter$$1_gauge$$25$$.$format$($output_value$$173$$, $percentConverter$$1$$) : $isPercent$$2$$ ? $formatter$$1_gauge$$25$$.$format$(100 * $output_value$$173$$) : $formatter$$1_gauge$$25$$.$format$($output_value$$173$$);
  return $isPercent$$2$$ && (!$percentConverter$$1$$ || $converter$$7$$) ? (0,window.String)($output_value$$173$$) + "%" : $output_value$$173$$
};
D.$DvtGaugeRenderer$$.$getFillPercentage$ = function $$DvtGaugeRenderer$$$$getFillPercentage$$($options$$139_percentFill$$, $min$$17$$, $value$$174$$, $unbound$$) {
  $options$$139_percentFill$$ = ($value$$174$$ - $min$$17$$) / ($options$$139_percentFill$$.max - $options$$139_percentFill$$.min);
  return $options$$139_percentFill$$ = $unbound$$ ? $options$$139_percentFill$$ : window.Math.min(window.Math.max(0, $options$$139_percentFill$$), 1)
};
D.$DvtGaugeRenderer$$.$getTooltipString$ = function $$DvtGaugeRenderer$$$$getTooltipString$$($gauge$$26_metricValue$$) {
  var $options$$140$$ = $gauge$$26_metricValue$$.$getOptions$(), $threshold$$6_thresholdIndex$$ = D.$DvtGaugeDataUtils$$.$getValueThresholdIndex$($gauge$$26_metricValue$$), $threshold$$6_thresholdIndex$$ = D.$DvtGaugeDataUtils$$.$getThreshold$($gauge$$26_metricValue$$, $threshold$$6_thresholdIndex$$);
  $gauge$$26_metricValue$$ = D.$DvtGaugeRenderer$$.$getFormattedMetricLabel$($options$$140$$.value, $gauge$$26_metricValue$$);
  return $threshold$$6_thresholdIndex$$ && $threshold$$6_thresholdIndex$$.shortDesc != D.$JSCompiler_alias_NULL$$ ? $threshold$$6_thresholdIndex$$.shortDesc : $options$$140$$.shortDesc != D.$JSCompiler_alias_NULL$$ ? $options$$140$$.shortDesc : $options$$140$$.title.text ? (0,D.$DvtBundle$getTranslatedString$$)("DvtUtilBundle", "COLON_SEP_LIST", [$options$$140$$.title.text, $gauge$$26_metricValue$$]) : $gauge$$26_metricValue$$
};
D.$DvtGaugeRenderer$$.$renderLabel$ = function $$DvtGaugeRenderer$$$$renderLabel$$($gauge$$27_label$$56$$, $container$$103$$, $bounds$$87$$, $color$$53$$, $halign$$5$$, $valign$$2$$, $isRenderedByDefault_labelString$$4$$) {
  var $options$$141_size$$32$$ = $gauge$$27_label$$56$$.$getOptions$(), $minString$$1_rendered$$3$$ = D.$JSCompiler_alias_FALSE$$;
  if("on" == $options$$141_size$$32$$.metricLabel.rendered || $isRenderedByDefault_labelString$$4$$ && "off" != $options$$141_size$$32$$.metricLabel.rendered) {
    $isRenderedByDefault_labelString$$4$$ = D.$DvtGaugeRenderer$$.$getFormattedMetricLabel$($options$$141_size$$32$$.value, $gauge$$27_label$$56$$);
    var $minString$$1_rendered$$3$$ = D.$DvtGaugeRenderer$$.$getFormattedMetricLabel$($options$$141_size$$32$$.min, $gauge$$27_label$$56$$), $maxString$$1$$ = D.$DvtGaugeRenderer$$.$getFormattedMetricLabel$($options$$141_size$$32$$.max, $gauge$$27_label$$56$$);
    $gauge$$27_label$$56$$ = new D.$DvtOutputText$$($gauge$$27_label$$56$$.$getCtx$(), $isRenderedByDefault_labelString$$4$$, $bounds$$87$$.x + $bounds$$87$$.$w$ / 2, $bounds$$87$$.y + $bounds$$87$$.$h$ / 2);
    $gauge$$27_label$$56$$.$setCSSStyle$($options$$141_size$$32$$.metricLabel.style);
    $options$$141_size$$32$$ = ($options$$141_size$$32$$ = $options$$141_size$$32$$.metricLabel.style.$getStyle$("font-size")) ? (0,window.parseInt)($options$$141_size$$32$$) : D.$JSCompiler_alias_NULL$$;
    $options$$141_size$$32$$ || ($options$$141_size$$32$$ = D.$DvtGaugeRenderer$$.$calcLabelFontSize$([$isRenderedByDefault_labelString$$4$$, $minString$$1_rendered$$3$$, $maxString$$1$$], $gauge$$27_label$$56$$, $bounds$$87$$), $gauge$$27_label$$56$$.$setTextString$($isRenderedByDefault_labelString$$4$$), $gauge$$27_label$$56$$.$setFontSize$($options$$141_size$$32$$));
    "top" == $valign$$2$$ ? ($gauge$$27_label$$56$$.$setY$($bounds$$87$$.y), $gauge$$27_label$$56$$.$alignTop$()) : "middle" == $valign$$2$$ ? D.$DvtTextUtils$$.$centerTextVertically$($gauge$$27_label$$56$$, $bounds$$87$$.y + $bounds$$87$$.$h$ / 2) : "bottom" == $valign$$2$$ && ($gauge$$27_label$$56$$.$setY$($bounds$$87$$.y + $bounds$$87$$.$h$), $gauge$$27_label$$56$$.$alignBottom$());
    "center" == $halign$$5$$ ? $gauge$$27_label$$56$$.$alignCenter$() : "left" == $halign$$5$$ ? ($gauge$$27_label$$56$$.$setX$($bounds$$87$$.x), $gauge$$27_label$$56$$.$alignLeft$()) : "right" == $halign$$5$$ && ($gauge$$27_label$$56$$.$setX$($bounds$$87$$.x + $bounds$$87$$.$w$), $gauge$$27_label$$56$$.$alignRight$());
    $color$$53$$ != D.$JSCompiler_alias_NULL$$ && $gauge$$27_label$$56$$.$setSolidFill$($color$$53$$);
    $minString$$1_rendered$$3$$ = D.$DvtTextUtils$$.$fitText$($gauge$$27_label$$56$$, $bounds$$87$$.$w$, $bounds$$87$$.$h$, $container$$103$$)
  }
  return $minString$$1_rendered$$3$$
};
D.$DvtGaugeRenderer$$.$renderTitle$ = function $$DvtGaugeRenderer$$$$renderTitle$$($gauge$$28_textHeight$$2$$, $container$$104$$, $bounds$$88$$, $color$$54$$, $valign$$3$$) {
  var $options$$142_title$$11$$ = $gauge$$28_textHeight$$2$$.$getOptions$(), $rendered$$4_tempTitle_titleString$$ = D.$JSCompiler_alias_FALSE$$;
  if(D.$DvtGaugeStyleUtils$$.$hasTitle$($options$$142_title$$11$$)) {
    var $rendered$$4_tempTitle_titleString$$ = $options$$142_title$$11$$.title.text, $titleStyle$$ = $options$$142_title$$11$$.title.style, $options$$142_title$$11$$ = new D.$DvtMultilineText$$($gauge$$28_textHeight$$2$$.$getCtx$(), $rendered$$4_tempTitle_titleString$$), $fontStyle$$ = $titleStyle$$.$clone$();
    $options$$142_title$$11$$.$setCSSStyle$($titleStyle$$);
    var $size$$33$$ = $titleStyle$$.$getStyle$("font-size"), $size$$33$$ = $size$$33$$ ? (0,window.parseInt)($size$$33$$) : D.$JSCompiler_alias_NULL$$;
    $size$$33$$ || ($rendered$$4_tempTitle_titleString$$ = new D.$DvtOutputText$$($gauge$$28_textHeight$$2$$.$getCtx$(), $rendered$$4_tempTitle_titleString$$, 0, 0), $rendered$$4_tempTitle_titleString$$.$setCSSStyle$($titleStyle$$), $size$$33$$ = $rendered$$4_tempTitle_titleString$$.$getOptimalFontSize$($bounds$$88$$), $fontStyle$$.$setFontSize$("font-size", $size$$33$$.toString()));
    $color$$54$$ != D.$JSCompiler_alias_NULL$$ && $fontStyle$$.$setStyle$("color", $color$$54$$);
    $options$$142_title$$11$$.$setCSSStyle$($fontStyle$$);
    $rendered$$4_tempTitle_titleString$$ = D.$DvtTextUtils$$.$fitText$($options$$142_title$$11$$, $bounds$$88$$.$w$, $bounds$$88$$.$h$, $gauge$$28_textHeight$$2$$);
    $gauge$$28_textHeight$$2$$ = D.$DvtTextUtils$$.$getTextHeight$($options$$142_title$$11$$);
    "top" == $valign$$3$$ ? $options$$142_title$$11$$.$setY$($bounds$$88$$.y) : "bottom" == $valign$$3$$ ? $options$$142_title$$11$$.$setY$($bounds$$88$$.y + $bounds$$88$$.$h$ - $gauge$$28_textHeight$$2$$) : $options$$142_title$$11$$.$setY$($bounds$$88$$.y + $bounds$$88$$.$h$ / 2 - $gauge$$28_textHeight$$2$$ / 2);
    $options$$142_title$$11$$.$setX$($bounds$$88$$.x + $bounds$$88$$.$w$ / 2);
    $options$$142_title$$11$$.$alignCenter$();
    $container$$104$$.$addChild$($options$$142_title$$11$$)
  }
  return $rendered$$4_tempTitle_titleString$$
};
D.$DvtGaugeRenderer$$.$calcLabelFontSize$ = function $$DvtGaugeRenderer$$$$calcLabelFontSize$$($labels$$20$$, $label$$57$$, $bounds$$89$$) {
  for(var $maxWidth$$22$$ = 0, $maxLabel$$ = D.$JSCompiler_alias_NULL$$, $width$$91$$ = 0, $i$$613$$ = 0;$i$$613$$ < $labels$$20$$.length;$i$$613$$++) {
    $label$$57$$.$setTextString$($labels$$20$$[$i$$613$$]), $width$$91$$ = $label$$57$$.$measureDimensions$().$w$, $width$$91$$ > $maxWidth$$22$$ && ($maxLabel$$ = $labels$$20$$[$i$$613$$], $maxWidth$$22$$ = $width$$91$$)
  }
  $label$$57$$.$setTextString$($maxLabel$$);
  return $label$$57$$.$getOptimalFontSize$($bounds$$89$$)
};
D.$DvtGaugeRenderer$$.$adjustForStep$ = function $$DvtGaugeRenderer$$$$adjustForStep$$($options$$143$$, $value$$175$$) {
  var $step$$3$$ = (0,window.Number)($options$$143$$.step);
  if($step$$3$$ && 0 < $step$$3$$) {
    var $stepNum$$ = ($value$$175$$ - $options$$143$$.min) / $step$$3$$;
    return 0.5 < $stepNum$$ ? window.Math.max(window.Math.min($options$$143$$.max, window.Math.round($stepNum$$) * $step$$3$$ + $options$$143$$.min), $options$$143$$.min) : $options$$143$$.min
  }
  return $value$$175$$
};
D.$DvtLedGauge$$ = (0,D.$JSCompiler_emptyFn$$)();
(0,D.$goog$exportPath_$$)("DvtLedGauge", D.$DvtLedGauge$$);
D.$DvtObj$$.$createSubclass$(D.$DvtLedGauge$$, D.$DvtGauge$$, "DvtLedGauge");
D.$DvtLedGauge$newInstance$$ = function $$DvtLedGauge$newInstance$$$($context$$386$$, $callback$$104$$, $callbackObj$$60$$, $bStaticRendering$$1$$) {
  var $gauge$$33$$ = new D.$DvtLedGauge$$;
  $gauge$$33$$.Init($context$$386$$, $callback$$104$$, $callbackObj$$60$$, $bStaticRendering$$1$$);
  return $gauge$$33$$
};
D.$DvtLedGauge$$.newInstance = D.$DvtLedGauge$newInstance$$;
D.$DvtLedGauge$$.prototype.Init = function $$DvtLedGauge$$$$Init$($context$$387$$, $callback$$105$$, $callbackObj$$61$$, $bStaticRendering$$2$$) {
  D.$DvtLedGauge$$.$superclass$.Init.call(this, $context$$387$$, $callback$$105$$, $callbackObj$$61$$, $bStaticRendering$$2$$);
  this.$Defaults$ = new D.$DvtLedGaugeDefaults$$
};
D.$DvtLedGauge$$.prototype.$SetOptions$ = function $$DvtLedGauge$$$$$SetOptions$$($options$$149$$) {
  D.$DvtLedGauge$$.$superclass$.$SetOptions$.call(this, this.$Defaults$.$calcOptions$($options$$149$$));
  "auto" == this.$Options$.animationOnDisplay && (this.$Options$.animationOnDisplay = "zoom");
  "auto" == this.$Options$.animationOnDataChange && (this.$Options$.animationOnDataChange = "alphaFade");
  this.$Options$.readOnly = D.$JSCompiler_alias_TRUE$$
};
D.$DvtLedGauge$$.prototype.$Render$ = function $$DvtLedGauge$$$$$Render$$($container$$105$$, $width$$92$$, $height$$85$$) {
  D.$DvtLedGaugeRenderer$$.$render$(this, $container$$105$$, $width$$92$$, $height$$85$$)
};
D.$DvtLedGaugeDefaults$$ = function $$DvtLedGaugeDefaults$$$() {
  this.Init({skyros:D.$DvtLedGaugeDefaults$VERSION_1$$, alta:{}})
};
D.$DvtObj$$.$createSubclass$(D.$DvtLedGaugeDefaults$$, D.$DvtGaugeDefaults$$, "DvtLedGaugeDefaults");
D.$DvtLedGaugeDefaults$VERSION_1$$ = {type:"circle"};
D.$DvtLedGaugeRenderer$$ = {};
D.$DvtObj$$.$createSubclass$(D.$DvtLedGaugeRenderer$$, D.$DvtObj$$, "DvtLedGaugeRenderer");
D.$DvtLedGaugeRenderer$$.$_SKYROS_SHAPE_TRIANGLE_CMDS$ = "M-42,36.6Q-50,36.6,-46.54,28.6L-4,-43.07Q0,-50,4,-43.07L46.54,28.6Q50,36.6,42,36.6Z";
D.$DvtLedGaugeRenderer$$.$_SHAPE_TRIANGLE_CMDS$ = [-50, 36.6, 0, -50, 50, 36.6];
D.$DvtLedGaugeRenderer$$.$_SKYROS_SHAPE_TRIANGLE_INNER_CMDS$ = [-50, 36.6, 0, -50, 50, 36.6];
D.$DvtLedGaugeRenderer$$.$_SKYROS_SHAPE_STAR_CMDS$ = [-13.05, -12.94, -50, -11.13, -21.06, 11.9, -30.74, 47.6, 0.1, 27.18, 31.06, 47.44, 21.17, 11.79, 50, -11.39, 13.05, -13.01, -0.06, -47.59];
D.$DvtLedGaugeRenderer$$.$_SHAPE_STAR_CMDS$ = [-50, -11.22, -16.69, -17.94, 0, -47.55, 16.69, -17.94, 50, -11.22, 26.69, 13.8, 30.9, 47.56, 0, 33.42, -30.9, 47.56, -26.69, 13.8];
D.$DvtLedGaugeRenderer$$.$_SKYROS_SHAPE_ARROW_CMDS$ = "M0,45L21,45Q24.414,44.414,25,41L25,10L42,10Q48.5,9.1,45,4L2,-38Q0,-39,-2,-38L-45,4Q-48.5,9.1,-42,10L-25,10L-25,41Q-24.414,44.414,-21,45Z";
D.$DvtLedGaugeRenderer$$.$_SHAPE_ARROW_CMDS$ = [25, 48, 25, 8, 47.5, 8, 0, -39, -47.5, 8, -25, 8, -25, 48];
D.$DvtLedGaugeRenderer$$.$_SKYROS_SHAPE_ARROW_INNER_CMDS$ = [25, 48, 25, 8, 47.5, 8, 0, -39, -47.5, 8, -25, 8, -25, 48];
D.$DvtLedGaugeRenderer$$.$_SHAPE_HUMAN_CMDS$ = "M -0.06059525142297417 -50.86842065108466 C -11.4496388584463 -50.86842065108466 -20.708163169810554 -39.024253028220556 -20.708163169810554 -24.413724255650386 C -20.708163169810554 -9.803195483080515 -11.4496388584463 2.040972139783591 -0.06059525142297417 2.040972139783591 C 11.328499974520241 2.040972139783591 20.586972666964613 -9.803195483080515 20.586972666964613 -24.413724255650386 C 20.586972666964613 -39.024253028220556 11.328499974520241 -50.86842065108466 -0.06059525142297417 -50.86842065108466 z M -23.93434565705865 -2.959610715450779 C -30.908061721494278 3.3998402034127153 -42.00096758564793 18.817121073473572 -38.77478509839983 33.65756051481475 C -20.651382358034887 47.30044101688934 14.372054723529814 49.13162219665128 39.298831093003386 32.85101489300273 C 40.26410489318826 16.477493533721187 32.34060070450674 4.7883891459240715 23.167918656763206 -2.959610715450779 C 11.553661702670112 21.074158341552575 -11.029615708066558 16.237465556670102 -23.93434565705865 -2.959610715450779 z ";
D.$DvtLedGaugeRenderer$$.$render$ = function $$DvtLedGaugeRenderer$$$$render$$($gauge$$34$$, $container$$106$$, $labelColor$$2_width$$93$$, $bounds$$90_height$$86_labelBounds$$8$$) {
  if(D.$DvtGaugeDataUtils$$.$hasData$($gauge$$34$$)) {
    var $options$$150$$ = $gauge$$34$$.$getOptions$(), $bTitleRendered_outerGap$$1_titleValign$$ = $options$$150$$.__layout.outerGap, $size$$34_titleBounds_valign$$4$$ = $options$$150$$ && (0 <= $options$$150$$.size || 1 > $options$$150$$.size) ? window.Math.sqrt($options$$150$$.size) : 1;
    $bounds$$90_height$$86_labelBounds$$8$$ = new D.$DvtRectangle$$($bTitleRendered_outerGap$$1_titleValign$$ + ($labelColor$$2_width$$93$$ - 2 * $bTitleRendered_outerGap$$1_titleValign$$) * (1 - $size$$34_titleBounds_valign$$4$$) / 2, $bTitleRendered_outerGap$$1_titleValign$$ + ($bounds$$90_height$$86_labelBounds$$8$$ - 2 * $bTitleRendered_outerGap$$1_titleValign$$) * (1 - $size$$34_titleBounds_valign$$4$$) / 2, ($labelColor$$2_width$$93$$ - 2 * $bTitleRendered_outerGap$$1_titleValign$$) * $size$$34_titleBounds_valign$$4$$, 
    ($bounds$$90_height$$86_labelBounds$$8$$ - 2 * $bTitleRendered_outerGap$$1_titleValign$$) * $size$$34_titleBounds_valign$$4$$);
    D.$DvtLedGaugeRenderer$$.$_renderShape$($gauge$$34$$, $container$$106$$, $bounds$$90_height$$86_labelBounds$$8$$);
    D.$DvtLedGaugeRenderer$$.$_renderVisualEffects$($gauge$$34$$, $container$$106$$, $bounds$$90_height$$86_labelBounds$$8$$);
    $bTitleRendered_outerGap$$1_titleValign$$ = D.$JSCompiler_alias_FALSE$$;
    $labelColor$$2_width$$93$$ = D.$DvtColorUtils$$.$getContrastingTextColor$(D.$DvtGaugeStyleUtils$$.$getColor$($gauge$$34$$));
    D.$DvtGaugeStyleUtils$$.$hasTitle$($options$$150$$) && ($bTitleRendered_outerGap$$1_titleValign$$ = "middle", $size$$34_titleBounds_valign$$4$$ = D.$DvtLedGaugeRenderer$$.$_getLabelBounds$($gauge$$34$$, $bounds$$90_height$$86_labelBounds$$8$$), "on" == $options$$150$$.metricLabel.rendered && ($size$$34_titleBounds_valign$$4$$.y += 0.6 * $size$$34_titleBounds_valign$$4$$.$h$, $size$$34_titleBounds_valign$$4$$.$h$ *= 0.4, $bTitleRendered_outerGap$$1_titleValign$$ = "top"), $bTitleRendered_outerGap$$1_titleValign$$ = 
    D.$DvtAgent$_highContrast$$ !== D.$JSCompiler_alias_TRUE$$ && $options$$150$$.title.style.$getStyle$("color") != D.$JSCompiler_alias_NULL$$ ? D.$DvtGaugeRenderer$$.$renderTitle$($gauge$$34$$, $container$$106$$, $size$$34_titleBounds_valign$$4$$, D.$JSCompiler_alias_NULL$$, $bTitleRendered_outerGap$$1_titleValign$$) : D.$DvtGaugeRenderer$$.$renderTitle$($gauge$$34$$, $container$$106$$, $size$$34_titleBounds_valign$$4$$, $labelColor$$2_width$$93$$, $bTitleRendered_outerGap$$1_titleValign$$));
    "on" == $options$$150$$.metricLabel.rendered && ($bounds$$90_height$$86_labelBounds$$8$$ = D.$DvtLedGaugeRenderer$$.$_getLabelBounds$($gauge$$34$$, $bounds$$90_height$$86_labelBounds$$8$$), $size$$34_titleBounds_valign$$4$$ = "middle", $bTitleRendered_outerGap$$1_titleValign$$ && ($bounds$$90_height$$86_labelBounds$$8$$.$h$ *= 0.55, $size$$34_titleBounds_valign$$4$$ = "bottom"), D.$DvtAgent$_highContrast$$ !== D.$JSCompiler_alias_TRUE$$ && $options$$150$$.metricLabel.style.$getStyle$("color") != 
    D.$JSCompiler_alias_NULL$$ ? D.$DvtGaugeRenderer$$.$renderLabel$($gauge$$34$$, $container$$106$$, $bounds$$90_height$$86_labelBounds$$8$$, D.$JSCompiler_alias_NULL$$, "center", $size$$34_titleBounds_valign$$4$$) : D.$DvtGaugeRenderer$$.$renderLabel$($gauge$$34$$, $container$$106$$, $bounds$$90_height$$86_labelBounds$$8$$, $labelColor$$2_width$$93$$, "center", $size$$34_titleBounds_valign$$4$$))
  }else {
    D.$DvtGaugeRenderer$$.$renderEmptyText$($gauge$$34$$, $container$$106$$, new D.$DvtRectangle$$(0, 0, $labelColor$$2_width$$93$$, $bounds$$90_height$$86_labelBounds$$8$$))
  }
};
D.$DvtLedGaugeRenderer$$.$_renderShape$ = function $$DvtLedGaugeRenderer$$$$_renderShape$$($gauge$$35$$, $container$$107$$, $bounds$$91$$) {
  var $arColors$$21_context$$388$$ = $gauge$$35$$.$getCtx$(), $options$$151$$ = $gauge$$35$$.$getOptions$(), $type$$230$$ = $options$$151$$.type, $color$$55_rotation$$2$$ = D.$DvtGaugeStyleUtils$$.$getColor$($gauge$$35$$), $borderColor$$35$$ = D.$DvtGaugeStyleUtils$$.$getBorderColor$($gauge$$35$$), $cmds$$17_cx$$46_dim$$52_shape$$52$$ = $bounds$$91$$.x + $bounds$$91$$.$w$ / 2, $cy$$47_scaleTo100$$ = $bounds$$91$$.y + $bounds$$91$$.$h$ / 2, $r$$36$$ = window.Math.min($bounds$$91$$.$w$, $bounds$$91$$.$h$) / 
  2, $isSkyros$$ = (0,D.$DvtGaugeDefaults$isSkyrosSkin$$)($gauge$$35$$);
  D.$DvtLedGaugeRenderer$$.$_cache$ || (D.$DvtLedGaugeRenderer$$.$_cache$ = new D.$DvtCache$$(50));
  var $scale$$24$$ = window.Math.min($bounds$$91$$.$w$ / 100, $bounds$$91$$.$h$ / 100);
  "rectangle" == $type$$230$$ ? $cmds$$17_cx$$46_dim$$52_shape$$52$$ = new D.$DvtRect$$($arColors$$21_context$$388$$, $bounds$$91$$.x, $bounds$$91$$.y, $bounds$$91$$.$w$, $bounds$$91$$.$h$) : "diamond" == $type$$230$$ ? $cmds$$17_cx$$46_dim$$52_shape$$52$$ = new D.$DvtPolygon$$($arColors$$21_context$$388$$, [$cmds$$17_cx$$46_dim$$52_shape$$52$$ - $r$$36$$, $cy$$47_scaleTo100$$, $cmds$$17_cx$$46_dim$$52_shape$$52$$, $cy$$47_scaleTo100$$ - $r$$36$$, $cmds$$17_cx$$46_dim$$52_shape$$52$$ + $r$$36$$, 
  $cy$$47_scaleTo100$$, $cmds$$17_cx$$46_dim$$52_shape$$52$$, $cy$$47_scaleTo100$$ + $r$$36$$]) : "circle" == $type$$230$$ ? $cmds$$17_cx$$46_dim$$52_shape$$52$$ = new D.$DvtCircle$$($arColors$$21_context$$388$$, $cmds$$17_cx$$46_dim$$52_shape$$52$$, $cy$$47_scaleTo100$$, $r$$36$$) : ("star" == $type$$230$$ ? $cmds$$17_cx$$46_dim$$52_shape$$52$$ = $isSkyros$$ ? D.$DvtLedGaugeRenderer$$.$_SKYROS_SHAPE_STAR_CMDS$ : D.$DvtLedGaugeRenderer$$.$_SHAPE_STAR_CMDS$ : "triangle" == $type$$230$$ ? $cmds$$17_cx$$46_dim$$52_shape$$52$$ = 
  $isSkyros$$ ? D.$DvtLedGaugeRenderer$$.$_SKYROS_SHAPE_TRIANGLE_CMDS$ : D.$DvtLedGaugeRenderer$$.$_SHAPE_TRIANGLE_CMDS$ : "arrow" == $type$$230$$ ? $cmds$$17_cx$$46_dim$$52_shape$$52$$ = $isSkyros$$ ? D.$DvtLedGaugeRenderer$$.$_SKYROS_SHAPE_ARROW_CMDS$ : D.$DvtLedGaugeRenderer$$.$_SHAPE_ARROW_CMDS$ : "human" == $type$$230$$ ? $cmds$$17_cx$$46_dim$$52_shape$$52$$ = D.$DvtLedGaugeRenderer$$.$_SHAPE_HUMAN_CMDS$ : ($cmds$$17_cx$$46_dim$$52_shape$$52$$ = D.$DvtLedGaugeRenderer$$.$_cache$.get($type$$230$$), 
  $cmds$$17_cx$$46_dim$$52_shape$$52$$ || ($cmds$$17_cx$$46_dim$$52_shape$$52$$ = new D.$DvtPath$$($arColors$$21_context$$388$$, $type$$230$$), $cmds$$17_cx$$46_dim$$52_shape$$52$$ = (0,D.$DvtDisplayableUtils$getDimForced$$)($arColors$$21_context$$388$$, $cmds$$17_cx$$46_dim$$52_shape$$52$$), $cy$$47_scaleTo100$$ = 100 / window.Math.max($cmds$$17_cx$$46_dim$$52_shape$$52$$.$w$, $cmds$$17_cx$$46_dim$$52_shape$$52$$.$h$), $cmds$$17_cx$$46_dim$$52_shape$$52$$ = D.$DvtPathUtils$$.$transformPath$($type$$230$$, 
  -$cy$$47_scaleTo100$$ * ($cmds$$17_cx$$46_dim$$52_shape$$52$$.x + $cmds$$17_cx$$46_dim$$52_shape$$52$$.$w$ / 2), -$cy$$47_scaleTo100$$ * ($cmds$$17_cx$$46_dim$$52_shape$$52$$.y + $cmds$$17_cx$$46_dim$$52_shape$$52$$.$h$ / 2), $cy$$47_scaleTo100$$, $cy$$47_scaleTo100$$), D.$DvtLedGaugeRenderer$$.$_cache$.put($type$$230$$, $cmds$$17_cx$$46_dim$$52_shape$$52$$))), !$isSkyros$$ && ("triangle" == $type$$230$$ || "arrow" == $type$$230$$) || "star" == $type$$230$$ ? ($cmds$$17_cx$$46_dim$$52_shape$$52$$ = 
  D.$DvtPolygonUtils$$.scale($cmds$$17_cx$$46_dim$$52_shape$$52$$, $scale$$24$$, $scale$$24$$), $cmds$$17_cx$$46_dim$$52_shape$$52$$ = D.$DvtPolygonUtils$$.translate($cmds$$17_cx$$46_dim$$52_shape$$52$$, $bounds$$91$$.x + $bounds$$91$$.$w$ / 2, $bounds$$91$$.y + $bounds$$91$$.$h$ / 2), $cmds$$17_cx$$46_dim$$52_shape$$52$$ = new D.$DvtPolygon$$($arColors$$21_context$$388$$, $cmds$$17_cx$$46_dim$$52_shape$$52$$)) : ($cmds$$17_cx$$46_dim$$52_shape$$52$$ = D.$DvtPathUtils$$.$transformPath$($cmds$$17_cx$$46_dim$$52_shape$$52$$, 
  $bounds$$91$$.x + $bounds$$91$$.$w$ / 2, $bounds$$91$$.y + $bounds$$91$$.$h$ / 2, $scale$$24$$, $scale$$24$$), $cmds$$17_cx$$46_dim$$52_shape$$52$$ = new D.$DvtPath$$($arColors$$21_context$$388$$, $cmds$$17_cx$$46_dim$$52_shape$$52$$)));
  $isSkyros$$ || "none" == $options$$151$$.visualEffects ? $cmds$$17_cx$$46_dim$$52_shape$$52$$.$setSolidFill$($color$$55_rotation$$2$$) : ($arColors$$21_context$$388$$ = [D.$DvtColorUtils$$.$adjustHSL$($color$$55_rotation$$2$$, -0.09, 0.04), D.$DvtColorUtils$$.$adjustHSL$($color$$55_rotation$$2$$, -0.04, -0.05)], $color$$55_rotation$$2$$ = $options$$151$$ && 0 == $options$$151$$.rotation % 90 ? $options$$151$$.rotation : 0, $cmds$$17_cx$$46_dim$$52_shape$$52$$.$setFill$(new D.$DvtLinearGradientFill$$("arrow" == 
  $type$$230$$ || "star" == $type$$230$$ || "triangle" == $type$$230$$ ? $color$$55_rotation$$2$$ - 90 : 270, $arColors$$21_context$$388$$, [1, 1], [0, 1])));
  $borderColor$$35$$ && $cmds$$17_cx$$46_dim$$52_shape$$52$$.$setSolidStroke$($borderColor$$35$$);
  if(($color$$55_rotation$$2$$ = $isSkyros$$ ? $options$$151$$.rotation + 90 : $options$$151$$.rotation) && ("arrow" == $type$$230$$ || "triangle" == $type$$230$$ || $cmds$$17_cx$$46_dim$$52_shape$$52$$ instanceof D.$DvtPath$$ && "human" != $type$$230$$)) {
    $cmds$$17_cx$$46_dim$$52_shape$$52$$ = D.$DvtLedGaugeRenderer$$.$_rotate$($gauge$$35$$, $container$$107$$, $cmds$$17_cx$$46_dim$$52_shape$$52$$, $bounds$$91$$)
  }
  $container$$107$$.$addChild$($cmds$$17_cx$$46_dim$$52_shape$$52$$)
};
D.$DvtLedGaugeRenderer$$.$_rotate$ = function $$DvtLedGaugeRenderer$$$$_rotate$$($gauge$$36_translateGroup$$, $container$$108_groupDims_matrix$$16_rotation$$3$$, $shape$$53_tx$$24$$, $bounds$$92_ty$$25$$) {
  var $options$$152_rotationMatrix$$2$$ = $gauge$$36_translateGroup$$.$getOptions$();
  $gauge$$36_translateGroup$$ = new D.$DvtContainer$$($gauge$$36_translateGroup$$.$getCtx$());
  $container$$108_groupDims_matrix$$16_rotation$$3$$.$addChild$($gauge$$36_translateGroup$$);
  $gauge$$36_translateGroup$$.$addChild$($shape$$53_tx$$24$$);
  $container$$108_groupDims_matrix$$16_rotation$$3$$ = $options$$152_rotationMatrix$$2$$ && 0 == $options$$152_rotationMatrix$$2$$.rotation % 90 ? $options$$152_rotationMatrix$$2$$.rotation : 0;
  $options$$152_rotationMatrix$$2$$ = new D.$DvtMatrix$$;
  $options$$152_rotationMatrix$$2$$.rotate(window.Math.PI * $container$$108_groupDims_matrix$$16_rotation$$3$$ / 180);
  $shape$$53_tx$$24$$.$setMatrix$($options$$152_rotationMatrix$$2$$);
  $container$$108_groupDims_matrix$$16_rotation$$3$$ = $gauge$$36_translateGroup$$.$getDimensions$();
  $shape$$53_tx$$24$$ = $bounds$$92_ty$$25$$.x + $bounds$$92_ty$$25$$.$w$ / 2 - ($container$$108_groupDims_matrix$$16_rotation$$3$$.x + $container$$108_groupDims_matrix$$16_rotation$$3$$.$w$ / 2);
  $bounds$$92_ty$$25$$ = $bounds$$92_ty$$25$$.y + $bounds$$92_ty$$25$$.$h$ / 2 - ($container$$108_groupDims_matrix$$16_rotation$$3$$.y + $container$$108_groupDims_matrix$$16_rotation$$3$$.$h$ / 2);
  $container$$108_groupDims_matrix$$16_rotation$$3$$ = new D.$DvtMatrix$$;
  $container$$108_groupDims_matrix$$16_rotation$$3$$.translate($shape$$53_tx$$24$$, $bounds$$92_ty$$25$$);
  $gauge$$36_translateGroup$$.$setMatrix$($container$$108_groupDims_matrix$$16_rotation$$3$$);
  return $gauge$$36_translateGroup$$
};
D.$DvtLedGaugeRenderer$$.$_renderVisualEffects$ = function $$DvtLedGaugeRenderer$$$$_renderVisualEffects$$($gauge$$37$$, $container$$109$$, $bounds$$93$$) {
  var $options$$153$$ = $gauge$$37$$.$getOptions$(), $type$$231$$ = $options$$153$$.type;
  "none" != $options$$153$$.visualEffects && (0,D.$DvtGaugeDefaults$isSkyrosSkin$$)($gauge$$37$$) && ("circle" == $type$$231$$ ? D.$DvtLedGaugeRenderer$$.$_renderOverlayCircle$($gauge$$37$$, $container$$109$$, $bounds$$93$$) : "diamond" == $type$$231$$ ? D.$DvtLedGaugeRenderer$$.$_renderOverlayDiamond$($gauge$$37$$, $container$$109$$, $bounds$$93$$) : "triangle" == $type$$231$$ ? D.$DvtLedGaugeRenderer$$.$_renderOverlayTriangle$($gauge$$37$$, $container$$109$$, $bounds$$93$$) : "arrow" == $type$$231$$ ? 
  D.$DvtLedGaugeRenderer$$.$_renderOverlayArrow$($gauge$$37$$, $container$$109$$, $bounds$$93$$) : D.$DvtLedGaugeRenderer$$.$_renderOverlayRectangle$($gauge$$37$$, $container$$109$$, $bounds$$93$$))
};
D.$DvtLedGaugeRenderer$$.$_renderOverlayRectangle$ = function $$DvtLedGaugeRenderer$$$$_renderOverlayRectangle$$($gauge$$38_overlay$$9$$, $container$$110_gradient$$7$$, $bounds$$94_overlayBounds$$1$$) {
  var $dx$$20$$ = 0.04 * $bounds$$94_overlayBounds$$1$$.$w$, $dy$$23$$ = 0.04 * $bounds$$94_overlayBounds$$1$$.$h$;
  $bounds$$94_overlayBounds$$1$$ = new D.$DvtRectangle$$($bounds$$94_overlayBounds$$1$$.x + $dx$$20$$, $bounds$$94_overlayBounds$$1$$.y + $dy$$23$$, $bounds$$94_overlayBounds$$1$$.$w$ - 2 * $dx$$20$$, $bounds$$94_overlayBounds$$1$$.$h$ - 2 * $dy$$23$$);
  $gauge$$38_overlay$$9$$ = new D.$DvtRect$$($gauge$$38_overlay$$9$$.$getCtx$(), $bounds$$94_overlayBounds$$1$$.x, $bounds$$94_overlayBounds$$1$$.y, $bounds$$94_overlayBounds$$1$$.$w$, $bounds$$94_overlayBounds$$1$$.$h$);
  $gauge$$38_overlay$$9$$.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$);
  $container$$110_gradient$$7$$.$addChild$($gauge$$38_overlay$$9$$);
  $container$$110_gradient$$7$$ = new D.$DvtLinearGradientFill$$(270, "#FFFFFF #FFFFFF #FFFFFF #FFFFFF #FFFFFF #FFFFFF #FFFFFF".split(" "), [0.75, 0.5, 0.15, 0, 0.2, 0.4, 0.2], [0, 0.05, 0.4, 0.6, 0.8, 0.9, 1]);
  $gauge$$38_overlay$$9$$.$setFill$($container$$110_gradient$$7$$)
};
D.$DvtLedGaugeRenderer$$.$_renderOverlayDiamond$ = function $$DvtLedGaugeRenderer$$$$_renderOverlayDiamond$$($gauge$$39_overlay$$10$$, $container$$111_gradient$$8$$, $bounds$$95_cx$$47$$) {
  var $cy$$48_dx$$21$$ = 0.05 * $bounds$$95_cx$$47$$.$w$, $dy$$24_overlayBounds$$2_r$$37$$ = 0.05 * $bounds$$95_cx$$47$$.$h$, $dy$$24_overlayBounds$$2_r$$37$$ = new D.$DvtRectangle$$($bounds$$95_cx$$47$$.x + $cy$$48_dx$$21$$, $bounds$$95_cx$$47$$.y + $dy$$24_overlayBounds$$2_r$$37$$, $bounds$$95_cx$$47$$.$w$ - 2 * $cy$$48_dx$$21$$, $bounds$$95_cx$$47$$.$h$ - 2 * $dy$$24_overlayBounds$$2_r$$37$$);
  $bounds$$95_cx$$47$$ = $dy$$24_overlayBounds$$2_r$$37$$.x + $dy$$24_overlayBounds$$2_r$$37$$.$w$ / 2;
  $cy$$48_dx$$21$$ = $dy$$24_overlayBounds$$2_r$$37$$.y + $dy$$24_overlayBounds$$2_r$$37$$.$h$ / 2;
  $dy$$24_overlayBounds$$2_r$$37$$ = window.Math.min($dy$$24_overlayBounds$$2_r$$37$$.$w$, $dy$$24_overlayBounds$$2_r$$37$$.$h$) / 2;
  $gauge$$39_overlay$$10$$ = new D.$DvtPolygon$$($gauge$$39_overlay$$10$$.$getCtx$(), [$bounds$$95_cx$$47$$ - $dy$$24_overlayBounds$$2_r$$37$$, $cy$$48_dx$$21$$, $bounds$$95_cx$$47$$, $cy$$48_dx$$21$$ - $dy$$24_overlayBounds$$2_r$$37$$, $bounds$$95_cx$$47$$ + $dy$$24_overlayBounds$$2_r$$37$$, $cy$$48_dx$$21$$, $bounds$$95_cx$$47$$, $cy$$48_dx$$21$$ + $dy$$24_overlayBounds$$2_r$$37$$]);
  $gauge$$39_overlay$$10$$.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$);
  $container$$111_gradient$$8$$.$addChild$($gauge$$39_overlay$$10$$);
  $container$$111_gradient$$8$$ = new D.$DvtLinearGradientFill$$(270, "#FFFFFF #FFFFFF #FFFFFF #FFFFFF #FFFFFF #FFFFFF #FFFFFF".split(" "), [0.75, 0.5, 0.15, 0, 0.2, 0.4, 0.2], [0, 0.05, 0.4, 0.6, 0.8, 0.9, 1]);
  $gauge$$39_overlay$$10$$.$setFill$($container$$111_gradient$$8$$)
};
D.$DvtLedGaugeRenderer$$.$_renderOverlayTriangle$ = function $$DvtLedGaugeRenderer$$$$_renderOverlayTriangle$$($gauge$$40$$, $container$$112$$, $bounds$$96_overlay$$11$$) {
  var $dx$$22_overlayBounds$$3$$ = 0.05 * $bounds$$96_overlay$$11$$.$w$, $cmds$$18_dy$$25_options$$154_rotation$$4$$ = 0.05 * $bounds$$96_overlay$$11$$.$h$, $gradient$$9_isSkyros$$1$$ = (0,D.$DvtGaugeDefaults$isSkyrosSkin$$)($gauge$$40$$), $dx$$22_overlayBounds$$3$$ = new D.$DvtRectangle$$($bounds$$96_overlay$$11$$.x + $dx$$22_overlayBounds$$3$$, $bounds$$96_overlay$$11$$.y + $cmds$$18_dy$$25_options$$154_rotation$$4$$, $bounds$$96_overlay$$11$$.$w$ - 2 * $dx$$22_overlayBounds$$3$$, $bounds$$96_overlay$$11$$.$h$ - 
  2 * $cmds$$18_dy$$25_options$$154_rotation$$4$$), $cmds$$18_dy$$25_options$$154_rotation$$4$$ = D.$DvtLedGaugeRenderer$$.$_SKYROS_SHAPE_TRIANGLE_INNER_CMDS$, $scale$$25$$ = window.Math.min($dx$$22_overlayBounds$$3$$.$w$ / 100, $dx$$22_overlayBounds$$3$$.$h$ / 100), $cmds$$18_dy$$25_options$$154_rotation$$4$$ = D.$DvtPolygonUtils$$.scale($cmds$$18_dy$$25_options$$154_rotation$$4$$, $scale$$25$$, $scale$$25$$), $cmds$$18_dy$$25_options$$154_rotation$$4$$ = D.$DvtPolygonUtils$$.translate($cmds$$18_dy$$25_options$$154_rotation$$4$$, 
  $bounds$$96_overlay$$11$$.x + $bounds$$96_overlay$$11$$.$w$ / 2, $bounds$$96_overlay$$11$$.y + $bounds$$96_overlay$$11$$.$h$ / 2);
  $bounds$$96_overlay$$11$$ = new D.$DvtPolygon$$($gauge$$40$$.$getCtx$(), $cmds$$18_dy$$25_options$$154_rotation$$4$$);
  $cmds$$18_dy$$25_options$$154_rotation$$4$$ = ($cmds$$18_dy$$25_options$$154_rotation$$4$$ = $gauge$$40$$.$getOptions$()) && 0 == $cmds$$18_dy$$25_options$$154_rotation$$4$$.rotation % 90 ? $cmds$$18_dy$$25_options$$154_rotation$$4$$.rotation : 0;
  $gradient$$9_isSkyros$$1$$ = new D.$DvtLinearGradientFill$$($gradient$$9_isSkyros$$1$$ ? $cmds$$18_dy$$25_options$$154_rotation$$4$$ - 90 : 360 - $cmds$$18_dy$$25_options$$154_rotation$$4$$, ["#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF"], [0.3, 0.55, 0, 0.25, 0.1], [0, 0.05, 0.4, 0.9, 1]);
  $bounds$$96_overlay$$11$$.$setFill$($gradient$$9_isSkyros$$1$$);
  $bounds$$96_overlay$$11$$ = D.$DvtLedGaugeRenderer$$.$_rotate$($gauge$$40$$, $container$$112$$, $bounds$$96_overlay$$11$$, $dx$$22_overlayBounds$$3$$);
  $bounds$$96_overlay$$11$$.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$);
  $container$$112$$.$addChild$($bounds$$96_overlay$$11$$)
};
D.$DvtLedGaugeRenderer$$.$_renderOverlayArrow$ = function $$DvtLedGaugeRenderer$$$$_renderOverlayArrow$$($gauge$$41$$, $container$$113$$, $bounds$$97_overlay$$12$$) {
  var $dx$$23_overlayBounds$$4$$ = 0.05 * $bounds$$97_overlay$$12$$.$w$, $cmds$$19_dy$$26_options$$155_rotation$$5$$ = 0.05 * $bounds$$97_overlay$$12$$.$h$, $gradient$$10_isSkyros$$2$$ = (0,D.$DvtGaugeDefaults$isSkyrosSkin$$)($gauge$$41$$), $dx$$23_overlayBounds$$4$$ = new D.$DvtRectangle$$($bounds$$97_overlay$$12$$.x + $dx$$23_overlayBounds$$4$$, $bounds$$97_overlay$$12$$.y + $cmds$$19_dy$$26_options$$155_rotation$$5$$, $bounds$$97_overlay$$12$$.$w$ - 2 * $dx$$23_overlayBounds$$4$$, $bounds$$97_overlay$$12$$.$h$ - 
  2 * $cmds$$19_dy$$26_options$$155_rotation$$5$$), $cmds$$19_dy$$26_options$$155_rotation$$5$$ = D.$DvtLedGaugeRenderer$$.$_SKYROS_SHAPE_ARROW_INNER_CMDS$, $scale$$26$$ = window.Math.min($dx$$23_overlayBounds$$4$$.$w$ / 100, $dx$$23_overlayBounds$$4$$.$h$ / 100), $cmds$$19_dy$$26_options$$155_rotation$$5$$ = D.$DvtPolygonUtils$$.scale($cmds$$19_dy$$26_options$$155_rotation$$5$$, $scale$$26$$, $scale$$26$$), $cmds$$19_dy$$26_options$$155_rotation$$5$$ = D.$DvtPolygonUtils$$.translate($cmds$$19_dy$$26_options$$155_rotation$$5$$, 
  $bounds$$97_overlay$$12$$.x + $bounds$$97_overlay$$12$$.$w$ / 2, $bounds$$97_overlay$$12$$.y + $bounds$$97_overlay$$12$$.$h$ / 2);
  $bounds$$97_overlay$$12$$ = new D.$DvtPolygon$$($gauge$$41$$.$getCtx$(), $cmds$$19_dy$$26_options$$155_rotation$$5$$);
  $cmds$$19_dy$$26_options$$155_rotation$$5$$ = ($cmds$$19_dy$$26_options$$155_rotation$$5$$ = $gauge$$41$$.$getOptions$()) && 0 == $cmds$$19_dy$$26_options$$155_rotation$$5$$.rotation % 90 ? $cmds$$19_dy$$26_options$$155_rotation$$5$$.rotation : 0;
  $gradient$$10_isSkyros$$2$$ = new D.$DvtLinearGradientFill$$($gradient$$10_isSkyros$$2$$ ? $cmds$$19_dy$$26_options$$155_rotation$$5$$ - 90 : 360 - $cmds$$19_dy$$26_options$$155_rotation$$5$$, ["#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF"], [0.3, 0.55, 0, 0.25, 0.1], [0, 0.05, 0.4, 0.9, 1]);
  $bounds$$97_overlay$$12$$.$setFill$($gradient$$10_isSkyros$$2$$);
  $bounds$$97_overlay$$12$$ = D.$DvtLedGaugeRenderer$$.$_rotate$($gauge$$41$$, $container$$113$$, $bounds$$97_overlay$$12$$, $dx$$23_overlayBounds$$4$$);
  $bounds$$97_overlay$$12$$.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$);
  $container$$113$$.$addChild$($bounds$$97_overlay$$12$$)
};
D.$DvtLedGaugeRenderer$$.$_renderOverlayCircle$ = function $$DvtLedGaugeRenderer$$$$_renderOverlayCircle$$($gauge$$42_highlight$$, $container$$114_highlightGradient$$, $bounds$$98_gradientBounds$$) {
  var $cx$$48_dx$$24$$ = 0.05 * $bounds$$98_gradientBounds$$.$w$, $cy$$49_dy$$27$$ = 0.05 * $bounds$$98_gradientBounds$$.$h$;
  $bounds$$98_gradientBounds$$ = new D.$DvtRectangle$$($bounds$$98_gradientBounds$$.x + $cx$$48_dx$$24$$, $bounds$$98_gradientBounds$$.y + $cy$$49_dy$$27$$, $bounds$$98_gradientBounds$$.$w$ - 2 * $cx$$48_dx$$24$$, $bounds$$98_gradientBounds$$.$h$ - 2 * $cy$$49_dy$$27$$);
  var $cx$$48_dx$$24$$ = $bounds$$98_gradientBounds$$.x + $bounds$$98_gradientBounds$$.$w$ / 2, $cy$$49_dy$$27$$ = $bounds$$98_gradientBounds$$.y + $bounds$$98_gradientBounds$$.$h$ / 2, $radius$$18_ry$$24$$ = window.Math.min($bounds$$98_gradientBounds$$.$w$, $bounds$$98_gradientBounds$$.$h$) / 2, $overlay$$13_rx$$28$$ = new D.$DvtCircle$$($gauge$$42_highlight$$.$getCtx$(), $cx$$48_dx$$24$$, $cy$$49_dy$$27$$, $radius$$18_ry$$24$$);
  $overlay$$13_rx$$28$$.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$);
  $container$$114_highlightGradient$$.$addChild$($overlay$$13_rx$$28$$);
  var $gradient$$11$$ = new D.$DvtRadialGradientFill$$(["#FFFFFF", "#FFFFFF", "#FFFFFF"], [0, 0.25, 0.5], [0.15, 0.7, 0.95], $cx$$48_dx$$24$$, $cy$$49_dy$$27$$ - 0.6 * $radius$$18_ry$$24$$, 1.5 * $radius$$18_ry$$24$$, [$bounds$$98_gradientBounds$$.x, $bounds$$98_gradientBounds$$.y, $bounds$$98_gradientBounds$$.$w$, $bounds$$98_gradientBounds$$.$h$]);
  $overlay$$13_rx$$28$$.$setFill$($gradient$$11$$);
  $overlay$$13_rx$$28$$ = 0.6 * $radius$$18_ry$$24$$;
  $radius$$18_ry$$24$$ *= 0.4;
  $cy$$49_dy$$27$$ -= 0.3 * $radius$$18_ry$$24$$;
  $gauge$$42_highlight$$ = new D.$DvtOval$$($gauge$$42_highlight$$.$getCtx$(), $cx$$48_dx$$24$$, $cy$$49_dy$$27$$ - $radius$$18_ry$$24$$, $overlay$$13_rx$$28$$, $radius$$18_ry$$24$$);
  $gauge$$42_highlight$$.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$);
  $container$$114_highlightGradient$$.$addChild$($gauge$$42_highlight$$);
  $container$$114_highlightGradient$$ = new D.$DvtRadialGradientFill$$(["#FFFFFF", "#FFFFFF", "#FFFFFF"], [0, 0.2, 0.5], [0.6, 0.8, 1], $cx$$48_dx$$24$$, $cy$$49_dy$$27$$, $overlay$$13_rx$$28$$, [$bounds$$98_gradientBounds$$.x, $bounds$$98_gradientBounds$$.y, $bounds$$98_gradientBounds$$.$w$, $bounds$$98_gradientBounds$$.$h$]);
  $gauge$$42_highlight$$.$setFill$($container$$114_highlightGradient$$)
};
D.$DvtLedGaugeRenderer$$.$_getLabelBounds$ = function $$DvtLedGaugeRenderer$$$$_getLabelBounds$$($gauge$$43$$, $bounds$$99$$) {
  var $options$$156_rotation$$6$$ = $gauge$$43$$.$getOptions$(), $type$$232$$ = $options$$156_rotation$$6$$.type, $options$$156_rotation$$6$$ = 0 == $options$$156_rotation$$6$$.rotation % 90 ? $options$$156_rotation$$6$$.rotation : 0, $minDim$$ = window.Math.min($bounds$$99$$.$w$, $bounds$$99$$.$h$), $newX$$6$$ = $bounds$$99$$.x + $bounds$$99$$.$w$ / 2 - $minDim$$ / 2, $newY$$7$$ = $bounds$$99$$.y + $bounds$$99$$.$h$ / 2 - $minDim$$ / 2, $newWidth$$3$$ = $minDim$$, $newHeight$$2$$ = $minDim$$;
  "triangle" == $type$$232$$ ? 0 == $options$$156_rotation$$6$$ ? ($newX$$6$$ += 0.2 * $minDim$$, $newY$$7$$ += 0.25 * $minDim$$, $newWidth$$3$$ -= 0.4 * $minDim$$, $newHeight$$2$$ -= 0.3 * $minDim$$) : 90 == $options$$156_rotation$$6$$ ? ($newX$$6$$ += 0.05 * $minDim$$, $newY$$7$$ += 0.2 * $minDim$$, $newWidth$$3$$ -= 0.3 * $minDim$$, $newHeight$$2$$ -= 0.4 * $minDim$$) : 180 == $options$$156_rotation$$6$$ ? ($newX$$6$$ += 0.2 * $minDim$$, $newY$$7$$ += 0.05 * $minDim$$, $newWidth$$3$$ -= 0.4 * 
  $minDim$$, $newHeight$$2$$ -= 0.3 * $minDim$$) : 270 == $options$$156_rotation$$6$$ && ($newX$$6$$ += 0.25 * $minDim$$, $newY$$7$$ += 0.2 * $minDim$$, $newWidth$$3$$ -= 0.3 * $minDim$$, $newHeight$$2$$ -= 0.4 * $minDim$$) : "arrow" == $type$$232$$ ? 0 == $options$$156_rotation$$6$$ ? ($newX$$6$$ += 0.2 * $minDim$$, $newY$$7$$ += 0.2 * $minDim$$, $newWidth$$3$$ -= 0.4 * $minDim$$, $newHeight$$2$$ -= 0.4 * $minDim$$) : 90 == $options$$156_rotation$$6$$ ? ($newX$$6$$ += 0.05 * $minDim$$, $newY$$7$$ += 
  0.2 * $minDim$$, $newWidth$$3$$ -= 0.28 * $minDim$$, $newHeight$$2$$ -= 0.4 * $minDim$$) : 180 == $options$$156_rotation$$6$$ ? ($newX$$6$$ += 0.2 * $minDim$$, $newY$$7$$ += 0.2 * $minDim$$, $newWidth$$3$$ -= 0.4 * $minDim$$, $newHeight$$2$$ -= 0.4 * $minDim$$) : 270 == $options$$156_rotation$$6$$ && ($newX$$6$$ += 0.23 * $minDim$$, $newY$$7$$ += 0.2 * $minDim$$, $newWidth$$3$$ -= 0.28 * $minDim$$, $newHeight$$2$$ -= 0.4 * $minDim$$) : "star" == $type$$232$$ ? ($newX$$6$$ += 0.25 * $minDim$$, $newY$$7$$ += 
  0.25 * $minDim$$, $newWidth$$3$$ -= 0.5 * $minDim$$, $newHeight$$2$$ -= 0.4 * $minDim$$) : "diamond" == $type$$232$$ ? ($newX$$6$$ += 0.15 * $minDim$$, $newY$$7$$ += 0.15 * $minDim$$, $newWidth$$3$$ -= 0.3 * $minDim$$, $newHeight$$2$$ -= 0.3 * $minDim$$) : "rectangle" == $type$$232$$ ? ($newX$$6$$ += 0.1 * $minDim$$, $newY$$7$$ += 0.1 * $minDim$$, $newWidth$$3$$ -= 0.2 * $minDim$$, $newHeight$$2$$ -= 0.2 * $minDim$$) : ($newX$$6$$ += 0.15 * $minDim$$, $newY$$7$$ += 0.15 * $minDim$$, $newWidth$$3$$ -= 
  0.3 * $minDim$$, $newHeight$$2$$ -= 0.3 * $minDim$$);
  return new D.$DvtRectangle$$($newX$$6$$, $newY$$7$$, $newWidth$$3$$, $newHeight$$2$$)
};
D.$DvtStatusMeterGauge$$ = (0,D.$JSCompiler_emptyFn$$)();
(0,D.$goog$exportPath_$$)("DvtStatusMeterGauge", D.$DvtStatusMeterGauge$$);
D.$DvtObj$$.$createSubclass$(D.$DvtStatusMeterGauge$$, D.$DvtGauge$$, "DvtStatusMeterGauge");
D.$DvtStatusMeterGauge$$.newInstance = function $$DvtStatusMeterGauge$$$newInstance$($context$$391$$, $callback$$108$$, $callbackObj$$64$$) {
  var $gauge$$48$$ = new D.$DvtStatusMeterGauge$$;
  $gauge$$48$$.Init($context$$391$$, $callback$$108$$, $callbackObj$$64$$);
  return $gauge$$48$$
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtStatusMeterGauge$$.prototype;
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($context$$392$$, $callback$$109$$, $callbackObj$$65$$) {
  D.$DvtStatusMeterGauge$$.$superclass$.Init.call(this, $context$$392$$, $callback$$109$$, $callbackObj$$65$$);
  this.$Defaults$ = new D.$DvtStatusMeterGaugeDefaults$$;
  this.$__axisInfo$ = D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.$SetOptions$ = function $$JSCompiler_prototypeAlias$$$$SetOptions$$($options$$160$$) {
  D.$DvtStatusMeterGauge$$.$superclass$.$SetOptions$.call(this, this.$Defaults$.$calcOptions$($options$$160$$))
};
D.$JSCompiler_prototypeAlias$$.$Render$ = function $$JSCompiler_prototypeAlias$$$$Render$$($container$$119$$, $width$$96$$, $height$$89$$) {
  D.$DvtStatusMeterGaugeRenderer$$.$render$(this, $container$$119$$, $width$$96$$, $height$$89$$)
};
D.$JSCompiler_prototypeAlias$$.$CreateAnimationOnDisplay$ = function $$JSCompiler_prototypeAlias$$$$CreateAnimationOnDisplay$$($objs$$60$$, $animatedObjs$$2_animationType$$3$$, $animationDuration$$7$$) {
  $animatedObjs$$2_animationType$$3$$ = [];
  for(var $i$$615$$ = 0;$i$$615$$ < $objs$$60$$.length;$i$$615$$++) {
    var $obj$$292$$ = $objs$$60$$[$i$$615$$], $endState$$15$$ = $obj$$292$$.$getAnimationParams$();
    "horizontal" == this.$Options$.orientation ? $obj$$292$$.$setAnimationParams$([$endState$$15$$[0], $endState$$15$$[0], $endState$$15$$[2], $endState$$15$$[3]]) : "vertical" == this.$Options$.orientation ? $obj$$292$$.$setAnimationParams$([$endState$$15$$[0], $endState$$15$$[1], $endState$$15$$[3], $endState$$15$$[3]]) : "circular" == this.$Options$.orientation && $obj$$292$$.$setAnimationParams$([$endState$$15$$[0], $endState$$15$$[1], 0, $endState$$15$$[3], $endState$$15$$[4]]);
    var $animation$$3$$ = new D.$DvtCustomAnimation$$(this.$getCtx$(), $obj$$292$$, $animationDuration$$7$$);
    (0,D.$JSCompiler_StaticMethods_addProp$$)($animation$$3$$.$_animator$, "typeNumberArray", $obj$$292$$, $obj$$292$$.$getAnimationParams$, $obj$$292$$.$setAnimationParams$, $endState$$15$$);
    $animation$$3$$.$_animator$.$setEasing$(function($objs$$60$$) {
      return(0,D.$DvtEasing$backOut$$)($objs$$60$$, 0.7)
    });
    $animatedObjs$$2_animationType$$3$$.push($animation$$3$$)
  }
  return new D.$DvtParallelPlayable$$(this.$getCtx$(), $animatedObjs$$2_animationType$$3$$)
};
D.$JSCompiler_prototypeAlias$$.$GetValueAt$ = function $$JSCompiler_prototypeAlias$$$$GetValueAt$$($x$$211$$, $y$$185$$) {
  var $maxValue$$14_options$$161$$ = this.$Options$, $angle$$42_isRTL$$26$$ = (0,D.$DvtAgent$isRightToLeft$$)(this.$getCtx$());
  if("horizontal" == $maxValue$$14_options$$161$$.orientation) {
    return this.$__axisInfo$.$getBoundedValueAt$($x$$211$$)
  }
  if("vertical" == $maxValue$$14_options$$161$$.orientation) {
    return this.$__axisInfo$.$getBoundedValueAt$($y$$185$$)
  }
  if("circular" == $maxValue$$14_options$$161$$.orientation) {
    var $angleExtent$$9$$ = $maxValue$$14_options$$161$$.angleExtent, $angleRads$$11_minValue$$13_value$$178$$ = window.Math.atan2($y$$185$$ - this.$cy$, $x$$211$$ - this.$cx$), $angle$$42_isRTL$$26$$ = $angle$$42_isRTL$$26$$ ? 180 - (D.$DvtMath$$.$radsToDegrees$($angleRads$$11_minValue$$13_value$$178$$) - $maxValue$$14_options$$161$$.startAngle) : D.$DvtMath$$.$radsToDegrees$($angleRads$$11_minValue$$13_value$$178$$) - (360 - $maxValue$$14_options$$161$$.startAngle), $angle$$42_isRTL$$26$$ = ($angle$$42_isRTL$$26$$ + 
    720) % 360, $angleRads$$11_minValue$$13_value$$178$$ = $maxValue$$14_options$$161$$.min, $maxValue$$14_options$$161$$ = $maxValue$$14_options$$161$$.max, $angleRads$$11_minValue$$13_value$$178$$ = $angle$$42_isRTL$$26$$ / $angleExtent$$9$$ * ($maxValue$$14_options$$161$$ - $angleRads$$11_minValue$$13_value$$178$$) + $angleRads$$11_minValue$$13_value$$178$$;
    $angle$$42_isRTL$$26$$ > $angleExtent$$9$$ && ($angleRads$$11_minValue$$13_value$$178$$ = 0.5 < ($angle$$42_isRTL$$26$$ - $angleExtent$$9$$) / (360 - $angleExtent$$9$$) ? 0 : $maxValue$$14_options$$161$$);
    return $angleRads$$11_minValue$$13_value$$178$$
  }
};
D.$DvtStatusMeterGaugeDefaults$$ = function $$DvtStatusMeterGaugeDefaults$$$() {
  this.Init({skyros:D.$DvtStatusMeterGaugeDefaults$VERSION_1$$, alta:D.$DvtStatusMeterGaugeDefaults$SKIN_ALTA$$})
};
D.$DvtObj$$.$createSubclass$(D.$DvtStatusMeterGaugeDefaults$$, D.$DvtGaugeDefaults$$, "DvtStatusMeterGaugeDefaults");
D.$DvtStatusMeterGaugeDefaults$SKIN_ALTA$$ = {color:"#393737", metricLabel:{style:new D.$DvtCSSStyle$$("font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;")}, plotArea:{color:"#E4E8EA", borderColor:"#D6DFE6"}};
D.$DvtStatusMeterGaugeDefaults$VERSION_1$$ = {angleExtent:360, borderRadius:"auto", color:"#313842", indicatorSize:1, innerRadius:0.7, metricLabel:{style:new D.$DvtCSSStyle$$("font-family: tahoma, sans-serif;"), position:"auto"}, orientation:"horizontal", plotArea:{color:"#AAAAAA", borderColor:"#C6C6C6", rendered:"auto", borderRadius:"auto"}, startAngle:90, thresholdDisplay:"onIndicator"};
D.$DvtStatusMeterGaugeRenderer$$ = {};
D.$DvtObj$$.$createSubclass$(D.$DvtStatusMeterGaugeRenderer$$, D.$DvtObj$$, "DvtStatusMeterGaugeRenderer");
D.$DvtStatusMeterGaugeRenderer$$.$_MIN_CORNER_RADIUS$ = 2.5;
D.$DvtStatusMeterGaugeRenderer$$.$render$ = function $$DvtStatusMeterGaugeRenderer$$$$render$$($gauge$$51$$, $container$$120$$, $bounds$$104_width$$98$$, $height$$91$$) {
  if(D.$DvtGaugeDataUtils$$.$hasData$($gauge$$51$$)) {
    var $options$$163$$ = $gauge$$51$$.$getOptions$(), $outerGap$$4$$ = $options$$163$$.__layout.outerGap;
    $bounds$$104_width$$98$$ = new D.$DvtRectangle$$($outerGap$$4$$, $outerGap$$4$$, $bounds$$104_width$$98$$ - 2 * $outerGap$$4$$, $height$$91$$ - 2 * $outerGap$$4$$);
    "horizontal" == $options$$163$$.orientation || "vertical" == $options$$163$$.orientation ? (D.$DvtStatusMeterGaugeRenderer$$.$_hasMetricLabelOutsidePlotArea$($options$$163$$) && D.$DvtStatusMeterGaugeRenderer$$.$_renderLabelOutsidePlotArea$($gauge$$51$$, $container$$120$$, $bounds$$104_width$$98$$), D.$DvtStatusMeterGaugeRenderer$$.$_renderShape$($gauge$$51$$, $container$$120$$, $bounds$$104_width$$98$$)) : "circular" == $options$$163$$.orientation && D.$DvtStatusMeterGaugeRenderer$$.$_renderCircularGauge$($gauge$$51$$, 
    $container$$120$$, $bounds$$104_width$$98$$)
  }else {
    D.$DvtGaugeRenderer$$.$renderEmptyText$($gauge$$51$$, $container$$120$$, new D.$DvtRectangle$$(0, 0, $bounds$$104_width$$98$$, $height$$91$$))
  }
};
D.$DvtStatusMeterGaugeRenderer$$.$_renderCircularGauge$ = function $$DvtStatusMeterGaugeRenderer$$$$_renderCircularGauge$$($gauge$$52$$, $container$$121$$, $bounds$$105$$) {
  var $options$$164$$ = $gauge$$52$$.$getOptions$(), $innerRadiusLength_isRTL$$27_referenceLineWidth$$ = (0,D.$DvtAgent$isRightToLeft$$)($gauge$$52$$.$getCtx$()), $angleExtent$$13_max$$19_percentFill$$1$$ = 0, $labelBounds$$9_maxInnerDiameter_startAngle$$15$$ = D.$JSCompiler_alias_NULL$$, $angle$$43_value$$179$$ = $options$$164$$.value, $innerRadius$$4_referenceObjects$$1_totalWidth$$4$$ = $options$$164$$.innerRadius, $plotAreaColor_referenceLineColor_thresholds$$3$$ = $options$$164$$.thresholds, 
  $i$$616_maxDiameter$$ = D.$JSCompiler_alias_NULL$$, $startAngleRads$$1$$ = D.$DvtMath$$.$TWO_PI$ - D.$DvtMath$$.$degreesToRads$($options$$164$$.startAngle), $angleExtentRads$$2$$ = D.$DvtMath$$.$degreesToRads$($options$$164$$.angleExtent), $endAngle$$3_outerRadius$$3_referenceLineStyle$$ = ($startAngleRads$$1$$ + $angleExtentRads$$2$$) % (2 * window.Math.PI);
  $gauge$$52$$.$cx$ = $bounds$$105$$.$w$ / 2;
  $gauge$$52$$.$cy$ = $bounds$$105$$.$h$ / 2;
  $angleExtentRads$$2$$ != 2 * window.Math.PI && ($labelBounds$$9_maxInnerDiameter_startAngle$$15$$ = D.$DvtStatusMeterGaugeRenderer$$.$_adjustCenterAndBounds$($gauge$$52$$, $innerRadius$$4_referenceObjects$$1_totalWidth$$4$$, $startAngleRads$$1$$, $angleExtentRads$$2$$, $endAngle$$3_outerRadius$$3_referenceLineStyle$$, $bounds$$105$$, $innerRadiusLength_isRTL$$27_referenceLineWidth$$));
  var $i$$616_maxDiameter$$ = $i$$616_maxDiameter$$ ? $i$$616_maxDiameter$$ : window.Math.min($bounds$$105$$.$w$, $bounds$$105$$.$h$), $innerRadiusLength_isRTL$$27_referenceLineWidth$$ = 0.5 * $i$$616_maxDiameter$$ * $innerRadius$$4_referenceObjects$$1_totalWidth$$4$$, $endAngle$$3_outerRadius$$3_referenceLineStyle$$ = 0.5 * $i$$616_maxDiameter$$, $indicatorSize$$ = $options$$164$$.indicatorSize;
  if($indicatorSize$$ && 1 < $indicatorSize$$) {
    var $currentThresholdIndex_labelValign_spaceWidth$$ = (1 - 1 / $indicatorSize$$) / 2 * ($endAngle$$3_outerRadius$$3_referenceLineStyle$$ - $innerRadiusLength_isRTL$$27_referenceLineWidth$$), $innerRadiusLength_isRTL$$27_referenceLineWidth$$ = $innerRadiusLength_isRTL$$27_referenceLineWidth$$ + $currentThresholdIndex_labelValign_spaceWidth$$, $endAngle$$3_outerRadius$$3_referenceLineStyle$$ = $endAngle$$3_outerRadius$$3_referenceLineStyle$$ - $currentThresholdIndex_labelValign_spaceWidth$$
  }
  $currentThresholdIndex_labelValign_spaceWidth$$ = "middle";
  $labelBounds$$9_maxInnerDiameter_startAngle$$15$$ || ($labelBounds$$9_maxInnerDiameter_startAngle$$15$$ = window.Math.min($bounds$$105$$.$w$, $bounds$$105$$.$h$) * $innerRadius$$4_referenceObjects$$1_totalWidth$$4$$, $innerRadius$$4_referenceObjects$$1_totalWidth$$4$$ ? $innerRadius$$4_referenceObjects$$1_totalWidth$$4$$ * window.Math.min($bounds$$105$$.$w$, $bounds$$105$$.$h$) : window.Math.min($bounds$$105$$.$w$, $bounds$$105$$.$h$), $labelBounds$$9_maxInnerDiameter_startAngle$$15$$ = new D.$DvtRectangle$$($bounds$$105$$.x + 
  $bounds$$105$$.$w$ / 2 - $labelBounds$$9_maxInnerDiameter_startAngle$$15$$ * (3 / 7), $bounds$$105$$.y + $bounds$$105$$.$h$ / 2 - $labelBounds$$9_maxInnerDiameter_startAngle$$15$$ * (2.5 / 7), $labelBounds$$9_maxInnerDiameter_startAngle$$15$$ * (6 / 7), $labelBounds$$9_maxInnerDiameter_startAngle$$15$$ * (5 / 7)));
  var $bTitleRendered$$1_thresholdColor_titleValign$$1$$ = D.$JSCompiler_alias_FALSE$$;
  if(D.$DvtGaugeStyleUtils$$.$hasTitle$($options$$164$$)) {
    var $bTitleRendered$$1_thresholdColor_titleValign$$1$$ = "middle", $min$$18_titleSpace$$3$$ = new D.$DvtRectangle$$($labelBounds$$9_maxInnerDiameter_startAngle$$15$$.x, $labelBounds$$9_maxInnerDiameter_startAngle$$15$$.y, $labelBounds$$9_maxInnerDiameter_startAngle$$15$$.$w$, $labelBounds$$9_maxInnerDiameter_startAngle$$15$$.$h$);
    "off" != $options$$164$$.metricLabel.rendered && ($min$$18_titleSpace$$3$$.y += 0.6 * $min$$18_titleSpace$$3$$.$h$, $min$$18_titleSpace$$3$$.$h$ *= 0.4, $bTitleRendered$$1_thresholdColor_titleValign$$1$$ = "top");
    if(($bTitleRendered$$1_thresholdColor_titleValign$$1$$ = D.$DvtGaugeRenderer$$.$renderTitle$($gauge$$52$$, $container$$121$$, $min$$18_titleSpace$$3$$, D.$JSCompiler_alias_NULL$$, $bTitleRendered$$1_thresholdColor_titleValign$$1$$)) && "off" != $options$$164$$.metricLabel.rendered) {
      $labelBounds$$9_maxInnerDiameter_startAngle$$15$$.$h$ *= 0.55, $currentThresholdIndex_labelValign_spaceWidth$$ = "bottom"
    }
  }
  D.$DvtGaugeRenderer$$.$renderLabel$($gauge$$52$$, $container$$121$$, $labelBounds$$9_maxInnerDiameter_startAngle$$15$$, D.$JSCompiler_alias_NULL$$, "center", $currentThresholdIndex_labelValign_spaceWidth$$, D.$JSCompiler_alias_TRUE$$);
  $labelBounds$$9_maxInnerDiameter_startAngle$$15$$ = $startAngleRads$$1$$;
  $angleExtent$$13_max$$19_percentFill$$1$$ *= $angleExtentRads$$2$$;
  if($plotAreaColor_referenceLineColor_thresholds$$3$$ && "off" != $options$$164$$.plotArea.rendered && "all" == $options$$164$$.thresholdDisplay) {
    for($currentThresholdIndex_labelValign_spaceWidth$$ = 0;$currentThresholdIndex_labelValign_spaceWidth$$ < $plotAreaColor_referenceLineColor_thresholds$$3$$.length;$currentThresholdIndex_labelValign_spaceWidth$$++) {
      $bTitleRendered$$1_thresholdColor_titleValign$$1$$ = D.$DvtGaugeStyleUtils$$.$getThresholdColor$($gauge$$52$$, $plotAreaColor_referenceLineColor_thresholds$$3$$[$currentThresholdIndex_labelValign_spaceWidth$$], $currentThresholdIndex_labelValign_spaceWidth$$), $angleExtent$$13_max$$19_percentFill$$1$$ = $plotAreaColor_referenceLineColor_thresholds$$3$$[$currentThresholdIndex_labelValign_spaceWidth$$].max < $options$$164$$.max ? $plotAreaColor_referenceLineColor_thresholds$$3$$[$currentThresholdIndex_labelValign_spaceWidth$$].max : 
      $options$$164$$.max, $min$$18_titleSpace$$3$$ = 0 == $currentThresholdIndex_labelValign_spaceWidth$$ ? $options$$164$$.min : $plotAreaColor_referenceLineColor_thresholds$$3$$[$currentThresholdIndex_labelValign_spaceWidth$$ - 1].max, $labelBounds$$9_maxInnerDiameter_startAngle$$15$$ = $startAngleRads$$1$$ + $angleExtentRads$$2$$ * D.$DvtGaugeRenderer$$.$getFillPercentage$($options$$164$$, $options$$164$$.min, $min$$18_titleSpace$$3$$), $angleExtent$$13_max$$19_percentFill$$1$$ = D.$DvtGaugeRenderer$$.$getFillPercentage$($options$$164$$, 
      $min$$18_titleSpace$$3$$, $angleExtent$$13_max$$19_percentFill$$1$$), $angleExtent$$13_max$$19_percentFill$$1$$ *= $angleExtentRads$$2$$, D.$DvtStatusMeterGaugeRenderer$$.$_drawCircularArc$($gauge$$52$$, $container$$121$$, $bounds$$105$$, $labelBounds$$9_maxInnerDiameter_startAngle$$15$$, $angleExtent$$13_max$$19_percentFill$$1$$, $innerRadiusLength_isRTL$$27_referenceLineWidth$$, $endAngle$$3_outerRadius$$3_referenceLineStyle$$, $bTitleRendered$$1_thresholdColor_titleValign$$1$$, D.$JSCompiler_alias_TRUE$$)
    }
  }else {
    "off" != $options$$164$$.plotArea.rendered && "all" != $options$$164$$.thresholdDisplay && ($plotAreaColor_referenceLineColor_thresholds$$3$$ = D.$DvtGaugeStyleUtils$$.$getPlotAreaColor$($gauge$$52$$), D.$DvtStatusMeterGaugeRenderer$$.$_drawCircularArc$($gauge$$52$$, $container$$121$$, $bounds$$105$$, $startAngleRads$$1$$, $angleExtentRads$$2$$, $innerRadiusLength_isRTL$$27_referenceLineWidth$$, $endAngle$$3_outerRadius$$3_referenceLineStyle$$, $plotAreaColor_referenceLineColor_thresholds$$3$$, 
    D.$JSCompiler_alias_TRUE$$))
  }
  $innerRadiusLength_isRTL$$27_referenceLineWidth$$ = 0.5 * $i$$616_maxDiameter$$ * $innerRadius$$4_referenceObjects$$1_totalWidth$$4$$;
  $endAngle$$3_outerRadius$$3_referenceLineStyle$$ = 0.5 * $i$$616_maxDiameter$$;
  $indicatorSize$$ && 1 > $indicatorSize$$ && ($innerRadius$$4_referenceObjects$$1_totalWidth$$4$$ = (1 - $indicatorSize$$) / 2 * ($endAngle$$3_outerRadius$$3_referenceLineStyle$$ - $innerRadiusLength_isRTL$$27_referenceLineWidth$$), $innerRadiusLength_isRTL$$27_referenceLineWidth$$ += $innerRadius$$4_referenceObjects$$1_totalWidth$$4$$, $endAngle$$3_outerRadius$$3_referenceLineStyle$$ -= $innerRadius$$4_referenceObjects$$1_totalWidth$$4$$);
  $angleExtent$$13_max$$19_percentFill$$1$$ = D.$DvtGaugeRenderer$$.$getFillPercentage$($options$$164$$, $options$$164$$.min, $angle$$43_value$$179$$);
  D.$DvtStatusMeterGaugeRenderer$$.$_drawCircularArc$($gauge$$52$$, $container$$121$$, $bounds$$105$$, $startAngleRads$$1$$, $angleExtent$$13_max$$19_percentFill$$1$$ * $angleExtentRads$$2$$, $innerRadiusLength_isRTL$$27_referenceLineWidth$$, $endAngle$$3_outerRadius$$3_referenceLineStyle$$, D.$DvtGaugeStyleUtils$$.$getColor$($gauge$$52$$), D.$JSCompiler_alias_FALSE$$);
  if($innerRadius$$4_referenceObjects$$1_totalWidth$$4$$ = $options$$164$$.referenceLines) {
    for($i$$616_maxDiameter$$ = 0;$i$$616_maxDiameter$$ < $innerRadius$$4_referenceObjects$$1_totalWidth$$4$$.length;$i$$616_maxDiameter$$++) {
      $plotAreaColor_referenceLineColor_thresholds$$3$$ = $innerRadius$$4_referenceObjects$$1_totalWidth$$4$$[$i$$616_maxDiameter$$].color ? $innerRadius$$4_referenceObjects$$1_totalWidth$$4$$[$i$$616_maxDiameter$$].color : "black", $innerRadiusLength_isRTL$$27_referenceLineWidth$$ = $innerRadius$$4_referenceObjects$$1_totalWidth$$4$$[$i$$616_maxDiameter$$].lineWidth ? $innerRadius$$4_referenceObjects$$1_totalWidth$$4$$[$i$$616_maxDiameter$$].lineWidth : 2, $endAngle$$3_outerRadius$$3_referenceLineStyle$$ = 
      $innerRadius$$4_referenceObjects$$1_totalWidth$$4$$[$i$$616_maxDiameter$$].lineStyle, $angle$$43_value$$179$$ = $innerRadius$$4_referenceObjects$$1_totalWidth$$4$$[$i$$616_maxDiameter$$].value, $angle$$43_value$$179$$ = $startAngleRads$$1$$ + D.$DvtGaugeRenderer$$.$getFillPercentage$($options$$164$$, $options$$164$$.min, $angle$$43_value$$179$$) * $angleExtentRads$$2$$, D.$DvtStatusMeterGaugeRenderer$$.$_drawCircularReferenceLine$($gauge$$52$$, $container$$121$$, $bounds$$105$$, $angle$$43_value$$179$$, 
      $plotAreaColor_referenceLineColor_thresholds$$3$$, $innerRadiusLength_isRTL$$27_referenceLineWidth$$, $endAngle$$3_outerRadius$$3_referenceLineStyle$$)
    }
  }
};
D.$DvtStatusMeterGaugeRenderer$$.$_renderShape$ = function $$DvtStatusMeterGaugeRenderer$$$$_renderShape$$($gauge$$53$$, $container$$122$$, $bounds$$106$$) {
  var $options$$165$$ = $gauge$$53$$.$getOptions$(), $color$$56_isRTL$$28$$ = (0,D.$DvtAgent$isRightToLeft$$)($gauge$$53$$.$getCtx$()), $isVert$$9_labelPosition$$5$$ = "vertical" == $options$$165$$.orientation, $axisInfo$$16_axisOptions$$17$$ = {layout:{}};
  $axisInfo$$16_axisOptions$$17$$.layout.gapRatio = 0;
  $axisInfo$$16_axisOptions$$17$$.timeAxisType = "disabled";
  $axisInfo$$16_axisOptions$$17$$.position = $isVert$$9_labelPosition$$5$$ ? "left" : "bottom";
  $axisInfo$$16_axisOptions$$17$$.min = $options$$165$$.min;
  $axisInfo$$16_axisOptions$$17$$.max = $options$$165$$.max;
  $axisInfo$$16_axisOptions$$17$$.dataMin = $options$$165$$.min;
  $axisInfo$$16_axisOptions$$17$$.dataMax = $options$$165$$.max;
  $axisInfo$$16_axisOptions$$17$$.tickLabel = {rendered:"off"};
  $axisInfo$$16_axisOptions$$17$$ = (0,D.$DvtAxisInfo$newInstance$$)($gauge$$53$$.$getCtx$(), $axisInfo$$16_axisOptions$$17$$, $bounds$$106$$);
  $gauge$$53$$.$__axisInfo$ = $axisInfo$$16_axisOptions$$17$$;
  var $baseline$$12_indicatorX1$$ = 0;
  0 >= $options$$165$$.max ? $baseline$$12_indicatorX1$$ = $options$$165$$.max : 0 <= $options$$165$$.min && ($baseline$$12_indicatorX1$$ = $options$$165$$.min);
  var $baselineCoord$$8_i$$617_overlay$$14_plotAreaColor$$1_shape$$54$$ = $axisInfo$$16_axisOptions$$17$$.$getCoordAt$($baseline$$12_indicatorX1$$);
  "off" != $options$$165$$.plotArea.rendered && !("auto" == $options$$165$$.plotArea.rendered && "onIndicator" == $options$$165$$.thresholdDisplay) && ($baselineCoord$$8_i$$617_overlay$$14_plotAreaColor$$1_shape$$54$$ = $axisInfo$$16_axisOptions$$17$$.$getUnboundedCoordAt$($options$$165$$.min));
  var $endCoord$$8_gradientAngle$$1_referenceObjects$$2$$ = $axisInfo$$16_axisOptions$$17$$.$getUnboundedCoordAt$($options$$165$$.value), $endCoord$$8_gradientAngle$$1_referenceObjects$$2$$ = $isVert$$9_labelPosition$$5$$ ? window.Math.max($bounds$$106$$.y, window.Math.min($bounds$$106$$.y + $bounds$$106$$.$h$, $endCoord$$8_gradientAngle$$1_referenceObjects$$2$$)) : window.Math.max($bounds$$106$$.x, window.Math.min($bounds$$106$$.x + $bounds$$106$$.$w$, $endCoord$$8_gradientAngle$$1_referenceObjects$$2$$)), 
  $bRender_indicatorSize$$1_referenceLine_yCoord$$10$$ = $options$$165$$.indicatorSize, $indicatorX2$$, $indicatorY1$$, $drawnIndicatorSize_indicatorY2$$, $plotX1$$, $plotX2$$, $plotY1$$, $drawnPlotSize_plotY2$$ = 0, $drawnPlotSize_plotY2$$ = 1 > $bRender_indicatorSize$$1_referenceLine_yCoord$$10$$ ? 1 : $bRender_indicatorSize$$1_referenceLine_yCoord$$10$$;
  $drawnIndicatorSize_indicatorY2$$ = 1 < $bRender_indicatorSize$$1_referenceLine_yCoord$$10$$ ? 1 : $bRender_indicatorSize$$1_referenceLine_yCoord$$10$$;
  $isVert$$9_labelPosition$$5$$ ? ($baseline$$12_indicatorX1$$ = $bounds$$106$$.x + (1 - $drawnIndicatorSize_indicatorY2$$) / 2 * $bounds$$106$$.$w$ + 0.5, $indicatorX2$$ = $bounds$$106$$.x + $bounds$$106$$.$w$ * (1 + $drawnIndicatorSize_indicatorY2$$) / 2 - 0.5, $drawnIndicatorSize_indicatorY2$$ = $baselineCoord$$8_i$$617_overlay$$14_plotAreaColor$$1_shape$$54$$ - 0.5, $indicatorY1$$ = $endCoord$$8_gradientAngle$$1_referenceObjects$$2$$ + 0.5, $plotX1$$ = $bounds$$106$$.x + (1 - 1 / $drawnPlotSize_plotY2$$) / 
  2 * $bounds$$106$$.$w$, $plotX2$$ = $bounds$$106$$.x + $bounds$$106$$.$w$ * (1 + 1 / $drawnPlotSize_plotY2$$) / 2, $plotY1$$ = $bounds$$106$$.y, $drawnPlotSize_plotY2$$ = $bounds$$106$$.y + $bounds$$106$$.$h$) : ($baseline$$12_indicatorX1$$ = $color$$56_isRTL$$28$$ ? $baselineCoord$$8_i$$617_overlay$$14_plotAreaColor$$1_shape$$54$$ - 0.5 : $baselineCoord$$8_i$$617_overlay$$14_plotAreaColor$$1_shape$$54$$ + 0.5, $indicatorX2$$ = $color$$56_isRTL$$28$$ ? $endCoord$$8_gradientAngle$$1_referenceObjects$$2$$ + 
  0.5 : $endCoord$$8_gradientAngle$$1_referenceObjects$$2$$ - 0.5, $indicatorY1$$ = $bounds$$106$$.y + (1 - $drawnIndicatorSize_indicatorY2$$) / 2 * $bounds$$106$$.$h$ + 0.5, $drawnIndicatorSize_indicatorY2$$ = $bounds$$106$$.y + $bounds$$106$$.$h$ * (1 + $drawnIndicatorSize_indicatorY2$$) / 2 - 0.5, $plotX1$$ = $bounds$$106$$.x, $plotX2$$ = $bounds$$106$$.x + $bounds$$106$$.$w$, $plotY1$$ = $bounds$$106$$.y + (1 - 1 / $drawnPlotSize_plotY2$$) / 2 * $bounds$$106$$.$h$, $drawnPlotSize_plotY2$$ = $bounds$$106$$.y + 
  $bounds$$106$$.$h$ * (1 + 1 / $drawnPlotSize_plotY2$$) / 2);
  $bRender_indicatorSize$$1_referenceLine_yCoord$$10$$ = D.$JSCompiler_alias_TRUE$$;
  $endCoord$$8_gradientAngle$$1_referenceObjects$$2$$ == $baselineCoord$$8_i$$617_overlay$$14_plotAreaColor$$1_shape$$54$$ && ($isVert$$9_labelPosition$$5$$ ? $indicatorY1$$ = $drawnIndicatorSize_indicatorY2$$ : $baseline$$12_indicatorX1$$ = $indicatorX2$$, $bRender_indicatorSize$$1_referenceLine_yCoord$$10$$ = D.$JSCompiler_alias_FALSE$$);
  var $borderColor$$36_refColor_shadow$$7_stroke$$76$$ = D.$DvtGaugeStyleUtils$$.$getBorderColor$($gauge$$53$$), $arColors$$27_gradient$$12_plotAreaBorderColor_xCoord$$12$$ = $options$$165$$.plotArea.borderColor, $thresholds$$4_value$$180$$ = $options$$165$$.thresholds, $endCoord$$8_gradientAngle$$1_referenceObjects$$2$$ = $isVert$$9_labelPosition$$5$$ ? 0 : 270;
  if($thresholds$$4_value$$180$$ && "off" != $options$$165$$.plotArea.rendered && "all" == $options$$165$$.thresholdDisplay) {
    for($baselineCoord$$8_i$$617_overlay$$14_plotAreaColor$$1_shape$$54$$ = $thresholds$$4_value$$180$$.length - 1;0 <= $baselineCoord$$8_i$$617_overlay$$14_plotAreaColor$$1_shape$$54$$;$baselineCoord$$8_i$$617_overlay$$14_plotAreaColor$$1_shape$$54$$--) {
      var $currentThresholdIndex$$1$$ = $baselineCoord$$8_i$$617_overlay$$14_plotAreaColor$$1_shape$$54$$, $plotArea$$3_referenceLineSize$$ = D.$DvtStatusMeterGaugeRenderer$$.$_createShape$($gauge$$53$$, $gauge$$53$$.$getCtx$(), $plotX1$$, $plotX2$$, $plotY1$$, $drawnPlotSize_plotY2$$), $cp$$4$$ = new D.$DvtClipPath$$("pacp" + $gauge$$53$$.getId());
      $baselineCoord$$8_i$$617_overlay$$14_plotAreaColor$$1_shape$$54$$ == $thresholds$$4_value$$180$$.length - 1 ? !$isVert$$9_labelPosition$$5$$ && $color$$56_isRTL$$28$$ ? (0,D.$JSCompiler_StaticMethods_addRect$$)($cp$$4$$, $axisInfo$$16_axisOptions$$17$$.$getUnboundedCoordAt$($options$$165$$.max), 0, $bounds$$106$$.$w$ + 2, $bounds$$106$$.$h$ + 2, 0, 0) : (0,D.$JSCompiler_StaticMethods_addRect$$)($cp$$4$$, 0, 0, $bounds$$106$$.$w$ + 2, $bounds$$106$$.$h$ + 2, 0, 0) : $isVert$$9_labelPosition$$5$$ ? 
      (0,D.$JSCompiler_StaticMethods_addRect$$)($cp$$4$$, 0, $axisInfo$$16_axisOptions$$17$$.$getUnboundedCoordAt$($options$$165$$.max), $bounds$$106$$.$w$ + 2, 1 * ($options$$165$$.max - $thresholds$$4_value$$180$$[$thresholds$$4_value$$180$$.length - 2 - $currentThresholdIndex$$1$$].max) / window.Math.abs($options$$165$$.min - $options$$165$$.max) * $bounds$$106$$.$h$, 0, 0) : $color$$56_isRTL$$28$$ ? (0,D.$JSCompiler_StaticMethods_addRect$$)($cp$$4$$, 0, 0, 1 * ($options$$165$$.max - ($thresholds$$4_value$$180$$[$thresholds$$4_value$$180$$.length - 
      2 - $currentThresholdIndex$$1$$].max == D.$JSCompiler_alias_NULL$$ ? 100 : $thresholds$$4_value$$180$$[$thresholds$$4_value$$180$$.length - 2 - $currentThresholdIndex$$1$$].max)) / window.Math.abs($options$$165$$.min - $options$$165$$.max) * $bounds$$106$$.$w$, $bounds$$106$$.$h$ + 2, 0, 0) : (0,D.$JSCompiler_StaticMethods_addRect$$)($cp$$4$$, 0, 0, 1 * ($thresholds$$4_value$$180$$[$currentThresholdIndex$$1$$].max - $options$$165$$.min) / window.Math.abs($options$$165$$.min - $options$$165$$.max) * 
      $bounds$$106$$.$w$, $bounds$$106$$.$h$ + 2, 0, 0);
      (0,D.$JSCompiler_StaticMethods_setClipPath$$)($plotArea$$3_referenceLineSize$$, $cp$$4$$);
      if($color$$56_isRTL$$28$$ || $isVert$$9_labelPosition$$5$$) {
        $currentThresholdIndex$$1$$ = $thresholds$$4_value$$180$$.length - 1 - $baselineCoord$$8_i$$617_overlay$$14_plotAreaColor$$1_shape$$54$$
      }
      $plotArea$$3_referenceLineSize$$.$setSolidFill$(D.$DvtGaugeStyleUtils$$.$getThresholdColor$($gauge$$53$$, $thresholds$$4_value$$180$$[$currentThresholdIndex$$1$$], $currentThresholdIndex$$1$$));
      $plotArea$$3_referenceLineSize$$.$setSolidStroke$($arColors$$27_gradient$$12_plotAreaBorderColor_xCoord$$12$$);
      D.$DvtStatusMeterGaugeRenderer$$.$_renderPlotAreaVisualEffects$($gauge$$53$$, $container$$122$$, $plotArea$$3_referenceLineSize$$, D.$DvtGaugeStyleUtils$$.$getThresholdColor$($gauge$$53$$, $thresholds$$4_value$$180$$[$currentThresholdIndex$$1$$], $currentThresholdIndex$$1$$), $endCoord$$8_gradientAngle$$1_referenceObjects$$2$$)
    }
  }else {
    "off" != $options$$165$$.plotArea.rendered && (!("auto" == $options$$165$$.plotArea.rendered && "onIndicator" == $options$$165$$.thresholdDisplay) && "all" != $options$$165$$.thresholdDisplay) && ($plotArea$$3_referenceLineSize$$ = $isVert$$9_labelPosition$$5$$ ? D.$DvtStatusMeterGaugeRenderer$$.$_createShape$($gauge$$53$$, $gauge$$53$$.$getCtx$(), $plotX1$$, $plotX2$$, $axisInfo$$16_axisOptions$$17$$.$getUnboundedCoordAt$($options$$165$$.max), $axisInfo$$16_axisOptions$$17$$.$getUnboundedCoordAt$($options$$165$$.min)) : 
    D.$DvtStatusMeterGaugeRenderer$$.$_createShape$($gauge$$53$$, $gauge$$53$$.$getCtx$(), $axisInfo$$16_axisOptions$$17$$.$getUnboundedCoordAt$($options$$165$$.min), $axisInfo$$16_axisOptions$$17$$.$getUnboundedCoordAt$($options$$165$$.max), $plotY1$$, $drawnPlotSize_plotY2$$), $baselineCoord$$8_i$$617_overlay$$14_plotAreaColor$$1_shape$$54$$ = D.$DvtGaugeStyleUtils$$.$getPlotAreaColor$($gauge$$53$$), $plotArea$$3_referenceLineSize$$.$setSolidFill$($baselineCoord$$8_i$$617_overlay$$14_plotAreaColor$$1_shape$$54$$), 
    $plotArea$$3_referenceLineSize$$.$setSolidStroke$($arColors$$27_gradient$$12_plotAreaBorderColor_xCoord$$12$$), D.$DvtStatusMeterGaugeRenderer$$.$_renderPlotAreaVisualEffects$($gauge$$53$$, $container$$122$$, $plotArea$$3_referenceLineSize$$, $baselineCoord$$8_i$$617_overlay$$14_plotAreaColor$$1_shape$$54$$, $endCoord$$8_gradientAngle$$1_referenceObjects$$2$$))
  }
  $baselineCoord$$8_i$$617_overlay$$14_plotAreaColor$$1_shape$$54$$ = new D.$DvtStatusMeterGaugeIndicator$$($gauge$$53$$, $gauge$$53$$.$getCtx$(), $baseline$$12_indicatorX1$$, $indicatorX2$$, $indicatorY1$$, $drawnIndicatorSize_indicatorY2$$);
  $gauge$$53$$.$__shapes$.push($baselineCoord$$8_i$$617_overlay$$14_plotAreaColor$$1_shape$$54$$);
  $color$$56_isRTL$$28$$ = D.$DvtGaugeStyleUtils$$.$getColor$($gauge$$53$$);
  !(0,D.$DvtGaugeDefaults$isSkyrosSkin$$)($gauge$$53$$) && "none" != $options$$165$$.visualEffects ? ($arColors$$27_gradient$$12_plotAreaBorderColor_xCoord$$12$$ = [D.$DvtColorUtils$$.$adjustHSL$($color$$56_isRTL$$28$$, -0.09, 0.04), D.$DvtColorUtils$$.$adjustHSL$($color$$56_isRTL$$28$$, -0.04, -0.05)], $arColors$$27_gradient$$12_plotAreaBorderColor_xCoord$$12$$ = new D.$DvtLinearGradientFill$$($endCoord$$8_gradientAngle$$1_referenceObjects$$2$$, $arColors$$27_gradient$$12_plotAreaBorderColor_xCoord$$12$$, 
  [1, 1], [0, 1]), $baselineCoord$$8_i$$617_overlay$$14_plotAreaColor$$1_shape$$54$$.$setFill$($arColors$$27_gradient$$12_plotAreaBorderColor_xCoord$$12$$)) : $baselineCoord$$8_i$$617_overlay$$14_plotAreaColor$$1_shape$$54$$.$setSolidFill$($color$$56_isRTL$$28$$);
  $borderColor$$36_refColor_shadow$$7_stroke$$76$$ && $baselineCoord$$8_i$$617_overlay$$14_plotAreaColor$$1_shape$$54$$.$setSolidStroke$($borderColor$$36_refColor_shadow$$7_stroke$$76$$);
  $bRender_indicatorSize$$1_referenceLine_yCoord$$10$$ && $container$$122$$.$addChild$($baselineCoord$$8_i$$617_overlay$$14_plotAreaColor$$1_shape$$54$$);
  $baselineCoord$$8_i$$617_overlay$$14_plotAreaColor$$1_shape$$54$$ = D.$DvtStatusMeterGaugeRenderer$$.$_createShape$($gauge$$53$$, $gauge$$53$$.$getCtx$(), $baseline$$12_indicatorX1$$, $indicatorX2$$, $indicatorY1$$, $drawnIndicatorSize_indicatorY2$$);
  D.$DvtStatusMeterGaugeRenderer$$.$_renderVisualEffects$($gauge$$53$$, $container$$122$$, $baselineCoord$$8_i$$617_overlay$$14_plotAreaColor$$1_shape$$54$$, $bRender_indicatorSize$$1_referenceLine_yCoord$$10$$, $endCoord$$8_gradientAngle$$1_referenceObjects$$2$$);
  if($endCoord$$8_gradientAngle$$1_referenceObjects$$2$$ = $options$$165$$.referenceLines) {
    for($baselineCoord$$8_i$$617_overlay$$14_plotAreaColor$$1_shape$$54$$ = 0;$baselineCoord$$8_i$$617_overlay$$14_plotAreaColor$$1_shape$$54$$ < $endCoord$$8_gradientAngle$$1_referenceObjects$$2$$.length;$baselineCoord$$8_i$$617_overlay$$14_plotAreaColor$$1_shape$$54$$++) {
      $borderColor$$36_refColor_shadow$$7_stroke$$76$$ = $endCoord$$8_gradientAngle$$1_referenceObjects$$2$$[$baselineCoord$$8_i$$617_overlay$$14_plotAreaColor$$1_shape$$54$$].color ? $endCoord$$8_gradientAngle$$1_referenceObjects$$2$$[$baselineCoord$$8_i$$617_overlay$$14_plotAreaColor$$1_shape$$54$$].color : "white", $thresholds$$4_value$$180$$ = $endCoord$$8_gradientAngle$$1_referenceObjects$$2$$[$baselineCoord$$8_i$$617_overlay$$14_plotAreaColor$$1_shape$$54$$].value, $bRender_indicatorSize$$1_referenceLine_yCoord$$10$$ = 
      $options$$165$$.indicatorSize, $isVert$$9_labelPosition$$5$$ ? ($plotArea$$3_referenceLineSize$$ = ((1 - $bRender_indicatorSize$$1_referenceLine_yCoord$$10$$) / 2 + $bRender_indicatorSize$$1_referenceLine_yCoord$$10$$) * $bounds$$106$$.$w$, $arColors$$27_gradient$$12_plotAreaBorderColor_xCoord$$12$$ = $bounds$$106$$.x + (1 - $bRender_indicatorSize$$1_referenceLine_yCoord$$10$$) / 4 * $bounds$$106$$.$w$, $bRender_indicatorSize$$1_referenceLine_yCoord$$10$$ = $axisInfo$$16_axisOptions$$17$$.$getUnboundedCoordAt$($thresholds$$4_value$$180$$), 
      $bRender_indicatorSize$$1_referenceLine_yCoord$$10$$ = new D.$DvtLine$$($gauge$$53$$.$getCtx$(), $arColors$$27_gradient$$12_plotAreaBorderColor_xCoord$$12$$, $bRender_indicatorSize$$1_referenceLine_yCoord$$10$$, $arColors$$27_gradient$$12_plotAreaBorderColor_xCoord$$12$$ + $plotArea$$3_referenceLineSize$$, $bRender_indicatorSize$$1_referenceLine_yCoord$$10$$)) : ($plotArea$$3_referenceLineSize$$ = ((1 - $bRender_indicatorSize$$1_referenceLine_yCoord$$10$$) / 2 + $bRender_indicatorSize$$1_referenceLine_yCoord$$10$$) * 
      $bounds$$106$$.$h$, $arColors$$27_gradient$$12_plotAreaBorderColor_xCoord$$12$$ = $axisInfo$$16_axisOptions$$17$$.$getUnboundedCoordAt$($thresholds$$4_value$$180$$), $bRender_indicatorSize$$1_referenceLine_yCoord$$10$$ = $bounds$$106$$.y + (1 - $bRender_indicatorSize$$1_referenceLine_yCoord$$10$$) / 4 * $bounds$$106$$.$h$, $bRender_indicatorSize$$1_referenceLine_yCoord$$10$$ = new D.$DvtLine$$($gauge$$53$$.$getCtx$(), $arColors$$27_gradient$$12_plotAreaBorderColor_xCoord$$12$$, $bRender_indicatorSize$$1_referenceLine_yCoord$$10$$, 
      $arColors$$27_gradient$$12_plotAreaBorderColor_xCoord$$12$$, $bRender_indicatorSize$$1_referenceLine_yCoord$$10$$ + $plotArea$$3_referenceLineSize$$)), $borderColor$$36_refColor_shadow$$7_stroke$$76$$ = new D.$DvtSolidStroke$$($borderColor$$36_refColor_shadow$$7_stroke$$76$$, 1, $endCoord$$8_gradientAngle$$1_referenceObjects$$2$$[$baselineCoord$$8_i$$617_overlay$$14_plotAreaColor$$1_shape$$54$$].lineWidth ? $endCoord$$8_gradientAngle$$1_referenceObjects$$2$$[$baselineCoord$$8_i$$617_overlay$$14_plotAreaColor$$1_shape$$54$$].lineWidth : 
      2), $endCoord$$8_gradientAngle$$1_referenceObjects$$2$$[$baselineCoord$$8_i$$617_overlay$$14_plotAreaColor$$1_shape$$54$$].lineStyle && $borderColor$$36_refColor_shadow$$7_stroke$$76$$.$setStyle$((0,D.$DvtStroke$convertTypeString$$)($endCoord$$8_gradientAngle$$1_referenceObjects$$2$$[$baselineCoord$$8_i$$617_overlay$$14_plotAreaColor$$1_shape$$54$$].lineStyle)), $bRender_indicatorSize$$1_referenceLine_yCoord$$10$$.$setStroke$($borderColor$$36_refColor_shadow$$7_stroke$$76$$), $container$$122$$.$addChild$($bRender_indicatorSize$$1_referenceLine_yCoord$$10$$), 
      !(0,D.$DvtAgent$isPlatformIE$$)() && "none" != $options$$165$$.visualEffects && ($borderColor$$36_refColor_shadow$$7_stroke$$76$$ = new D.$DvtShadow$$(D.$DvtColorUtils$$.$makeRGBA$(0, 0, 0, 0.8), 0.75, 3, 3, 50, 1, 2, D.$JSCompiler_alias_FALSE$$, D.$JSCompiler_alias_FALSE$$, D.$JSCompiler_alias_FALSE$$), (0,D.$JSCompiler_StaticMethods_addDrawEffect$$)($bRender_indicatorSize$$1_referenceLine_yCoord$$10$$, $borderColor$$36_refColor_shadow$$7_stroke$$76$$))
    }
  }
  $isVert$$9_labelPosition$$5$$ = $options$$165$$.metricLabel.position;
  "on" == $options$$165$$.metricLabel.rendered && !D.$DvtStatusMeterGaugeRenderer$$.$_hasMetricLabelOutsidePlotArea$($options$$165$$) && !D.$DvtGaugeStyleUtils$$.$hasTitle$($options$$165$$) ? D.$DvtStatusMeterGaugeRenderer$$.$_renderLabelInsidePlotArea$($gauge$$53$$, $container$$122$$, $bounds$$106$$, $color$$56_isRTL$$28$$, $isVert$$9_labelPosition$$5$$, {$x1$:$baseline$$12_indicatorX1$$, $x2$:$indicatorX2$$, $y1$:$indicatorY1$$, $y2$:$drawnIndicatorSize_indicatorY2$$}, {$x1$:$plotX1$$, $x2$:$plotX2$$, 
  $y1$:$plotY1$$, $y2$:$drawnPlotSize_plotY2$$}) : D.$DvtGaugeStyleUtils$$.$hasTitle$($options$$165$$) && D.$DvtStatusMeterGaugeRenderer$$.$_renderTitle$($gauge$$53$$, $container$$122$$, $bounds$$106$$, $isVert$$9_labelPosition$$5$$)
};
D.$DvtStatusMeterGaugeRenderer$$.$_createShape$ = function $$DvtStatusMeterGaugeRenderer$$$$_createShape$$($defaultValue$$4_gauge$$54$$, $context$$397$$, $width$$99_x1$$47$$, $multiplier$$1_x2$$43$$, $height$$92_y1$$37$$, $options$$166_y2$$34$$) {
  var $cmds$$21_x$$213$$ = window.Math.min($width$$99_x1$$47$$, $multiplier$$1_x2$$43$$), $y$$187$$ = window.Math.min($height$$92_y1$$37$$, $options$$166_y2$$34$$);
  $width$$99_x1$$47$$ = window.Math.abs($width$$99_x1$$47$$ - $multiplier$$1_x2$$43$$);
  $height$$92_y1$$37$$ = window.Math.abs($options$$166_y2$$34$$ - $height$$92_y1$$37$$);
  $options$$166_y2$$34$$ = $defaultValue$$4_gauge$$54$$.$getOptions$();
  $multiplier$$1_x2$$43$$ = "vertical" == $options$$166_y2$$34$$.orientation ? $width$$99_x1$$47$$ : $height$$92_y1$$37$$;
  $defaultValue$$4_gauge$$54$$ = (0,D.$DvtGaugeDefaults$isSkyrosSkin$$)($defaultValue$$4_gauge$$54$$) ? "25%" : "15%";
  $cmds$$21_x$$213$$ = D.$DvtStatusMeterGaugeRenderer$$.$rectangleWithBorderRadius$($cmds$$21_x$$213$$, $y$$187$$, $width$$99_x1$$47$$, $height$$92_y1$$37$$, "auto" != $options$$166_y2$$34$$.plotArea.borderRadius ? $options$$166_y2$$34$$.plotArea.borderRadius : $options$$166_y2$$34$$.borderRadius, $multiplier$$1_x2$$43$$, $defaultValue$$4_gauge$$54$$);
  return new D.$DvtPath$$($context$$397$$, $cmds$$21_x$$213$$)
};
D.$DvtStatusMeterGaugeRenderer$$.$_renderVisualEffects$ = function $$DvtStatusMeterGaugeRenderer$$$$_renderVisualEffects$$($gauge$$55$$, $container$$123$$, $shape$$55$$, $bRender$$1$$, $gradient$$13_gradientAngle$$2$$) {
  "none" != $gauge$$55$$.$getOptions$().visualEffects && (0,D.$DvtGaugeDefaults$isSkyrosSkin$$)($gauge$$55$$) && ($gradient$$13_gradientAngle$$2$$ = new D.$DvtLinearGradientFill$$($gradient$$13_gradientAngle$$2$$, ["#FFFFFF", "#FFFFFF", "#FFFFFF"], [0.5, 0.3125, 0], [0, 0.3, 1]), $shape$$55$$.$setFill$($gradient$$13_gradientAngle$$2$$), $gauge$$55$$.$__shapes$.push($shape$$55$$), $shape$$55$$.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$), $bRender$$1$$ && $container$$123$$.$addChild$($shape$$55$$))
};
D.$DvtStatusMeterGaugeRenderer$$.$_renderPlotAreaVisualEffects$ = function $$DvtStatusMeterGaugeRenderer$$$$_renderPlotAreaVisualEffects$$($arColors$$29_gauge$$56$$, $container$$124$$, $shape$$56$$, $color$$57$$, $gradient$$14_gradientAngle$$3$$) {
  var $options$$168$$ = $arColors$$29_gauge$$56$$.$getOptions$();
  $shape$$56$$.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$);
  $container$$124$$.$addChild$($shape$$56$$);
  "none" != $options$$168$$.visualEffects && ((0,D.$DvtGaugeDefaults$isSkyrosSkin$$)($arColors$$29_gauge$$56$$) ? ($arColors$$29_gauge$$56$$ = [D.$DvtColorUtils$$.$getDarker$($color$$57$$, 0.9), $color$$57$$, D.$DvtColorUtils$$.$getBrighter$($color$$57$$)], $gradient$$14_gradientAngle$$3$$ = new D.$DvtLinearGradientFill$$($gradient$$14_gradientAngle$$3$$, $arColors$$29_gauge$$56$$, [1, 1, 1], [0, 0.04, 0.73])) : ($arColors$$29_gauge$$56$$ = [D.$DvtColorUtils$$.$adjustHSL$($color$$57$$, -0.04, -0.05), 
  D.$DvtColorUtils$$.$adjustHSL$($color$$57$$, -0.09, 0.04)], $gradient$$14_gradientAngle$$3$$ = new D.$DvtLinearGradientFill$$($gradient$$14_gradientAngle$$3$$, $arColors$$29_gauge$$56$$, [1, 1], [0, 1])), $shape$$56$$.$setFill$($gradient$$14_gradientAngle$$3$$))
};
D.$DvtStatusMeterGaugeRenderer$$.$_renderLabelOutsidePlotArea$ = function $$DvtStatusMeterGaugeRenderer$$$$_renderLabelOutsidePlotArea$$($gauge$$57$$, $container$$125$$, $bounds$$107$$) {
  var $computedLabelBounds_options$$169$$ = $gauge$$57$$.$getOptions$(), $isRTL$$29$$ = (0,D.$DvtAgent$isRightToLeft$$)($gauge$$57$$.$getCtx$()), $isVert$$10_size$$36$$ = "vertical" == $computedLabelBounds_options$$169$$.orientation, $label$$58$$ = new D.$DvtOutputText$$($gauge$$57$$.$getCtx$(), ""), $labelString$$5$$ = D.$DvtGaugeRenderer$$.$getFormattedMetricLabel$($computedLabelBounds_options$$169$$.value, $gauge$$57$$), $labelGap$$ = $computedLabelBounds_options$$169$$.__layout.labelGap, $labelStyle$$15_minLabelDims$$1$$ = 
  $computedLabelBounds_options$$169$$.metricLabel.style, $labelColor$$3_minLabel$$ = $labelStyle$$15_minLabelDims$$1$$.$getStyle$("color"), $labelColor$$3_minLabel$$ = $labelColor$$3_minLabel$$ ? $labelColor$$3_minLabel$$ : "#333333", $maxLabel$$1_maxLabelDims$$1_minValue$$14$$ = D.$JSCompiler_alias_NULL$$;
  $label$$58$$.$setCSSStyle$($labelStyle$$15_minLabelDims$$1$$);
  $label$$58$$.$setSolidFill$($labelColor$$3_minLabel$$);
  if($isVert$$10_size$$36$$ && "on" == $computedLabelBounds_options$$169$$.metricLabel.rendered) {
    var $bound$$8_labelSpace_maxValue$$15$$ = 0 < $computedLabelBounds_options$$169$$.max ? $computedLabelBounds_options$$169$$.max : $computedLabelBounds_options$$169$$.min, $bound$$8_labelSpace_maxValue$$15$$ = D.$DvtGaugeRenderer$$.$getFormattedMetricLabel$($bound$$8_labelSpace_maxValue$$15$$, $gauge$$57$$), $maxLabel$$1_maxLabelDims$$1_minValue$$14$$ = new D.$DvtOutputText$$($gauge$$57$$.$getCtx$(), $bound$$8_labelSpace_maxValue$$15$$);
    $maxLabel$$1_maxLabelDims$$1_minValue$$14$$.$setCSSStyle$($labelStyle$$15_minLabelDims$$1$$);
    $computedLabelBounds_options$$169$$ = new D.$DvtRectangle$$($bounds$$107$$.x, $bounds$$107$$.y + 0.8 * $bounds$$107$$.$h$, $bounds$$107$$.$w$, 0.2 * $bounds$$107$$.$h$);
    $isVert$$10_size$$36$$ = ($isVert$$10_size$$36$$ = $labelStyle$$15_minLabelDims$$1$$.$getStyle$("font-size")) ? (0,window.parseInt)($isVert$$10_size$$36$$) : $maxLabel$$1_maxLabelDims$$1_minValue$$14$$.$getOptimalFontSize$($computedLabelBounds_options$$169$$);
    $maxLabel$$1_maxLabelDims$$1_minValue$$14$$ = $maxLabel$$1_maxLabelDims$$1_minValue$$14$$.$measureDimensions$();
    $bounds$$107$$.$h$ -= $maxLabel$$1_maxLabelDims$$1_minValue$$14$$.$h$;
    $bound$$8_labelSpace_maxValue$$15$$ = $maxLabel$$1_maxLabelDims$$1_minValue$$14$$.$w$;
    $label$$58$$.$setFontSize$($isVert$$10_size$$36$$);
    $label$$58$$.$setTextString$($labelString$$5$$);
    $label$$58$$.$setX$($bounds$$107$$.x + $bounds$$107$$.$w$ / 2);
    $label$$58$$.$setY$($bounds$$107$$.y + $bounds$$107$$.$h$);
    $bounds$$107$$.$h$ -= $labelGap$$;
    $label$$58$$.$alignCenter$();
    D.$DvtTextUtils$$.$fitText$($label$$58$$, $bounds$$107$$.$w$, $bounds$$107$$.$h$, $container$$125$$)
  }else {
    if(!$isVert$$10_size$$36$$ && "on" == $computedLabelBounds_options$$169$$.metricLabel.rendered) {
      $isVert$$10_size$$36$$ = $labelStyle$$15_minLabelDims$$1$$.$getStyle$("font-size");
      $labelColor$$3_minLabel$$ = D.$DvtGaugeRenderer$$.$getFormattedMetricLabel$($computedLabelBounds_options$$169$$.min, $gauge$$57$$);
      $maxLabel$$1_maxLabelDims$$1_minValue$$14$$ = D.$DvtGaugeRenderer$$.$getFormattedMetricLabel$($computedLabelBounds_options$$169$$.max, $gauge$$57$$);
      $isVert$$10_size$$36$$ === D.$JSCompiler_alias_VOID$$ && 18 > $bounds$$107$$.$h$ && ($isVert$$10_size$$36$$ = D.$DvtGaugeRenderer$$.$calcLabelFontSize$([$labelString$$5$$, $labelColor$$3_minLabel$$, $maxLabel$$1_maxLabelDims$$1_minValue$$14$$], $label$$58$$, $bounds$$107$$));
      $isVert$$10_size$$36$$ = $isVert$$10_size$$36$$ ? (0,window.parseInt)($isVert$$10_size$$36$$) : 13;
      $label$$58$$.$setFontSize$($isVert$$10_size$$36$$);
      var $alignCoord$$;
      if(0 < $computedLabelBounds_options$$169$$.max || "off" != $computedLabelBounds_options$$169$$.plotArea.rendered || !("auto" == $computedLabelBounds_options$$169$$.plotArea.rendered && "onIndicator" == $computedLabelBounds_options$$169$$.thresholdDisplay)) {
        $bound$$8_labelSpace_maxValue$$15$$ = 0 < $computedLabelBounds_options$$169$$.max ? $computedLabelBounds_options$$169$$.max : $computedLabelBounds_options$$169$$.min, $bound$$8_labelSpace_maxValue$$15$$ = D.$DvtGaugeRenderer$$.$getFormattedMetricLabel$($bound$$8_labelSpace_maxValue$$15$$, $gauge$$57$$), $maxLabel$$1_maxLabelDims$$1_minValue$$14$$ = new D.$DvtOutputText$$($gauge$$57$$.$getCtx$(), $bound$$8_labelSpace_maxValue$$15$$), $maxLabel$$1_maxLabelDims$$1_minValue$$14$$.$setCSSStyle$($labelStyle$$15_minLabelDims$$1$$), 
        $maxLabel$$1_maxLabelDims$$1_minValue$$14$$.$setFontSize$($isVert$$10_size$$36$$), $maxLabel$$1_maxLabelDims$$1_minValue$$14$$ = $maxLabel$$1_maxLabelDims$$1_minValue$$14$$.$measureDimensions$(), $maxLabel$$1_maxLabelDims$$1_minValue$$14$$.$w$ = window.Math.min($maxLabel$$1_maxLabelDims$$1_minValue$$14$$.$w$, $bounds$$107$$.$w$), $alignCoord$$ = $isRTL$$29$$ ? $bounds$$107$$.x + $maxLabel$$1_maxLabelDims$$1_minValue$$14$$.$w$ : $bounds$$107$$.x + $bounds$$107$$.$w$, $bound$$8_labelSpace_maxValue$$15$$ = 
        $maxLabel$$1_maxLabelDims$$1_minValue$$14$$.$w$, $isRTL$$29$$ && ($bounds$$107$$.x += $maxLabel$$1_maxLabelDims$$1_minValue$$14$$.$w$ + $labelGap$$), $bounds$$107$$.$w$ -= $maxLabel$$1_maxLabelDims$$1_minValue$$14$$.$w$ + $labelGap$$
      }
      if(0 > $computedLabelBounds_options$$169$$.min && "on" != $computedLabelBounds_options$$169$$.plotArea.rendered && !("auto" == $computedLabelBounds_options$$169$$.plotArea.rendered && "onIndicator" == $computedLabelBounds_options$$169$$.thresholdDisplay)) {
        $maxLabel$$1_maxLabelDims$$1_minValue$$14$$ = D.$DvtGaugeRenderer$$.$getFormattedMetricLabel$($computedLabelBounds_options$$169$$.min, $gauge$$57$$);
        $labelColor$$3_minLabel$$ = new D.$DvtOutputText$$($gauge$$57$$.$getCtx$(), $maxLabel$$1_maxLabelDims$$1_minValue$$14$$);
        $labelColor$$3_minLabel$$.$setCSSStyle$($labelStyle$$15_minLabelDims$$1$$);
        $labelColor$$3_minLabel$$.$setFontSize$($isVert$$10_size$$36$$);
        $labelStyle$$15_minLabelDims$$1$$ = $labelColor$$3_minLabel$$.$measureDimensions$();
        if(0 > $computedLabelBounds_options$$169$$.value || 0 >= $computedLabelBounds_options$$169$$.max) {
          $alignCoord$$ = $isRTL$$29$$ ? $bounds$$107$$.x + $bounds$$107$$.$w$ : $bounds$$107$$.x + $labelStyle$$15_minLabelDims$$1$$.$w$, $bound$$8_labelSpace_maxValue$$15$$ = $labelStyle$$15_minLabelDims$$1$$.$w$
        }
        $isRTL$$29$$ || ($bounds$$107$$.x += $labelStyle$$15_minLabelDims$$1$$.$w$ + $labelGap$$);
        $bounds$$107$$.$w$ -= $labelStyle$$15_minLabelDims$$1$$.$w$ + $labelGap$$
      }
      $label$$58$$.$setTextString$($labelString$$5$$);
      $label$$58$$.$setX$($alignCoord$$);
      D.$DvtTextUtils$$.$centerTextVertically$($label$$58$$, $bounds$$107$$.y + $bounds$$107$$.$h$ / 2);
      $label$$58$$.$alignRight$();
      D.$DvtTextUtils$$.$fitText$($label$$58$$, $bound$$8_labelSpace_maxValue$$15$$, $bounds$$107$$.$h$, $container$$125$$)
    }
  }
};
D.$DvtStatusMeterGaugeRenderer$$.$_renderLabelInsidePlotArea$ = function $$DvtStatusMeterGaugeRenderer$$$$_renderLabelInsidePlotArea$$($gauge$$58$$, $container$$126$$, $bounds$$108$$, $color$$58$$, $labelPosition$$6$$, $indicator$$8$$, $plotArea$$4$$, $repeatedTry$$) {
  var $labelColor$$4_options$$170$$ = $gauge$$58$$.$getOptions$(), $isRTL$$30$$ = (0,D.$DvtAgent$isRightToLeft$$)($gauge$$58$$.$getCtx$()), $isVert$$11$$ = "vertical" == $labelColor$$4_options$$170$$.orientation, $plotAreaRendered$$ = "on" == $labelColor$$4_options$$170$$.plotArea.rendered, $hAlignment$$ = "center", $vAlignment$$ = "middle", $labelSpace$$1$$ = new D.$DvtRectangle$$(window.Math.min($indicator$$8$$.$x1$, $indicator$$8$$.$x2$), window.Math.min($indicator$$8$$.$y1$, $indicator$$8$$.$y2$), 
  window.Math.abs($indicator$$8$$.$x2$ - $indicator$$8$$.$x1$), window.Math.abs($indicator$$8$$.$y2$ - $indicator$$8$$.$y1$)), $labelColor$$4_options$$170$$ = $labelColor$$4_options$$170$$.metricLabel.style.$getStyle$("color");
  "center" == $labelPosition$$6$$ ? ($labelColor$$4_options$$170$$ = $labelColor$$4_options$$170$$ ? $labelColor$$4_options$$170$$ : D.$DvtColorUtils$$.$getContrastingTextColor$($color$$58$$), $isVert$$11$$ ? ($labelSpace$$1$$.$h$ -= $labelSpace$$1$$.$w$, $labelSpace$$1$$.y += $labelSpace$$1$$.$w$ / 2) : ($labelSpace$$1$$.$w$ -= $labelSpace$$1$$.$h$, $labelSpace$$1$$.x += $labelSpace$$1$$.$h$ / 2)) : "insideIndicatorEdge" == $labelPosition$$6$$ ? ($labelColor$$4_options$$170$$ = $labelColor$$4_options$$170$$ ? 
  $labelColor$$4_options$$170$$ : D.$DvtColorUtils$$.$getContrastingTextColor$($color$$58$$), $isVert$$11$$ ? ($labelSpace$$1$$.$h$ -= $labelSpace$$1$$.$w$, $labelSpace$$1$$.y += $labelSpace$$1$$.$w$ / 2, $vAlignment$$ = !$plotAreaRendered$$ && $indicator$$8$$.$y1$ > $indicator$$8$$.$y2$ ? "bottom" : "top") : ($labelSpace$$1$$.$w$ -= $labelSpace$$1$$.$h$, $labelSpace$$1$$.x += $labelSpace$$1$$.$h$ / 2, $hAlignment$$ = $isRTL$$30$$ ? !$plotAreaRendered$$ && $indicator$$8$$.$x1$ < $indicator$$8$$.$x2$ ? 
  "right" : "left" : !$plotAreaRendered$$ && $indicator$$8$$.$x1$ > $indicator$$8$$.$x2$ ? "left" : "right")) : "outsideIndicatorEdge" == $labelPosition$$6$$ && ($isVert$$11$$ ? ($labelSpace$$1$$.$h$ = window.Math.abs($plotArea$$4$$.$y1$ - $indicator$$8$$.$y1$) - $labelSpace$$1$$.$w$, $labelSpace$$1$$.y = $plotArea$$4$$.$y1$ + $labelSpace$$1$$.$w$ / 2, $vAlignment$$ = "bottom", !$plotAreaRendered$$ && $indicator$$8$$.$y1$ > $indicator$$8$$.$y2$ && ($labelSpace$$1$$.$h$ = window.Math.abs($plotArea$$4$$.$y1$ - 
  $indicator$$8$$.$y1$) - $labelSpace$$1$$.$w$, $labelSpace$$1$$.y = $indicator$$8$$.$y1$ + $labelSpace$$1$$.$w$ / 2, $vAlignment$$ = "top")) : $isRTL$$30$$ ? !$plotAreaRendered$$ && $indicator$$8$$.$x1$ < $indicator$$8$$.$x2$ ? ($labelSpace$$1$$.$w$ = window.Math.abs($plotArea$$4$$.$x2$ - $indicator$$8$$.$x2$) - $labelSpace$$1$$.$h$, $labelSpace$$1$$.x = $indicator$$8$$.$x2$ + $labelSpace$$1$$.$h$ / 2, $hAlignment$$ = "left") : ($labelSpace$$1$$.$w$ = window.Math.abs($plotArea$$4$$.$x1$ - $indicator$$8$$.$x2$) - 
  $labelSpace$$1$$.$h$, $labelSpace$$1$$.x = $plotArea$$4$$.$x1$ + $labelSpace$$1$$.$h$ / 2, $hAlignment$$ = "right") : !$plotAreaRendered$$ && $indicator$$8$$.$x1$ > $indicator$$8$$.$x2$ ? ($labelSpace$$1$$.$w$ = window.Math.abs($plotArea$$4$$.$x1$ - $indicator$$8$$.$x2$) - $labelSpace$$1$$.$h$, $labelSpace$$1$$.x = $plotArea$$4$$.$x1$ + $labelSpace$$1$$.$h$ / 2, $hAlignment$$ = "right") : ($labelSpace$$1$$.$w$ = window.Math.abs($plotArea$$4$$.$x2$ - $indicator$$8$$.$x2$) - $labelSpace$$1$$.$h$, 
  $labelSpace$$1$$.x = $indicator$$8$$.$x2$ + $labelSpace$$1$$.$h$ / 2, $hAlignment$$ = "left"));
  !D.$DvtGaugeRenderer$$.$renderLabel$($gauge$$58$$, $container$$126$$, $labelSpace$$1$$, $labelColor$$4_options$$170$$, $hAlignment$$, $vAlignment$$) && !$repeatedTry$$ && ("outsideIndicatorEdge" == $labelPosition$$6$$ ? D.$DvtStatusMeterGaugeRenderer$$.$_renderLabelInsidePlotArea$($gauge$$58$$, $container$$126$$, $bounds$$108$$, $color$$58$$, "insideIndicatorEdge", $indicator$$8$$, $plotArea$$4$$, D.$JSCompiler_alias_TRUE$$) : ("insideIndicatorEdge" == $labelPosition$$6$$ || "center" == $labelPosition$$6$$) && 
  D.$DvtStatusMeterGaugeRenderer$$.$_renderLabelInsidePlotArea$($gauge$$58$$, $container$$126$$, $bounds$$108$$, $color$$58$$, "outsideIndicatorEdge", $indicator$$8$$, $plotArea$$4$$, D.$JSCompiler_alias_TRUE$$))
};
D.$DvtStatusMeterGaugeRenderer$$.$_renderTitle$ = function $$DvtStatusMeterGaugeRenderer$$$$_renderTitle$$($gauge$$59$$, $container$$127$$, $bounds$$109$$) {
  var $isRTL$$31$$ = (0,D.$DvtAgent$isRightToLeft$$)($gauge$$59$$.$getCtx$()), $options$$171$$ = $gauge$$59$$.$getOptions$(), $isVert$$12$$ = "vertical" == $options$$171$$.orientation, $titleSpace$$4$$ = new D.$DvtRectangle$$($bounds$$109$$.x, $bounds$$109$$.y, $isVert$$12$$ ? $bounds$$109$$.$w$ : $bounds$$109$$.$w$ - $bounds$$109$$.$h$, $isVert$$12$$ ? $bounds$$109$$.$h$ - $bounds$$109$$.$w$ : $bounds$$109$$.$h$), $title$$12_titleString$$1$$ = $options$$171$$.title.text;
  if(!D.$DvtStatusMeterGaugeRenderer$$.$_hasMetricLabelOutsidePlotArea$($options$$171$$) && "on" == $options$$171$$.metricLabel.rendered) {
    var $fontStyle$$1_labelString$$6$$ = D.$DvtGaugeRenderer$$.$getFormattedMetricLabel$($options$$171$$.value, $gauge$$59$$), $title$$12_titleString$$1$$ = (0,D.$DvtBundle$getTranslatedString$$)("DvtUtilBundle", "COLON_SEP_LIST", [$title$$12_titleString$$1$$, $fontStyle$$1_labelString$$6$$])
  }
  var $titleStyle$$1$$ = $options$$171$$.title.style, $fontStyle$$1_labelString$$6$$ = $titleStyle$$1$$.$clone$(), $size$$37_tempTitle$$1$$ = $titleStyle$$1$$.$getStyle$("font-size");
  $size$$37_tempTitle$$1$$ || ($size$$37_tempTitle$$1$$ = new D.$DvtOutputText$$($gauge$$59$$.$getCtx$(), $title$$12_titleString$$1$$, 0, 0), $size$$37_tempTitle$$1$$.$setCSSStyle$($titleStyle$$1$$), $size$$37_tempTitle$$1$$.$setTextString$($title$$12_titleString$$1$$), $size$$37_tempTitle$$1$$ = $isVert$$12$$ ? $size$$37_tempTitle$$1$$.$getOptimalFontSize$(new D.$DvtRectangle$$($titleSpace$$4$$.x, $titleSpace$$4$$.y, $titleSpace$$4$$.$w$, window.Number.MAX_VALUE)) : $size$$37_tempTitle$$1$$.$getOptimalFontSize$(new D.$DvtRectangle$$($titleSpace$$4$$.x, 
  $titleSpace$$4$$.y, window.Number.MAX_VALUE, $titleSpace$$4$$.$h$)));
  $title$$12_titleString$$1$$ = new D.$DvtMultilineText$$($gauge$$59$$.$getCtx$(), $title$$12_titleString$$1$$);
  $fontStyle$$1_labelString$$6$$.$setFontSize$("font-size", $size$$37_tempTitle$$1$$.toString());
  $title$$12_titleString$$1$$.$setCSSStyle$($fontStyle$$1_labelString$$6$$);
  D.$DvtTextUtils$$.$fitText$($title$$12_titleString$$1$$, $titleSpace$$4$$.$w$, $titleSpace$$4$$.$h$, $gauge$$59$$);
  "center" == $options$$171$$.title.position || "auto" == $options$$171$$.title.position && $isVert$$12$$ ? (D.$DvtTextUtils$$.$centerTextVertically$($title$$12_titleString$$1$$, $bounds$$109$$.y + $bounds$$109$$.$h$ / 2), $title$$12_titleString$$1$$.$setX$($bounds$$109$$.x + $bounds$$109$$.$w$ / 2), $title$$12_titleString$$1$$.$alignCenter$()) : (D.$DvtTextUtils$$.$centerTextVertically$($title$$12_titleString$$1$$, $bounds$$109$$.y + $bounds$$109$$.$h$ / 2), !$isVert$$12$$ && $isRTL$$31$$ ? ($title$$12_titleString$$1$$.$setX$($bounds$$109$$.x + 
  $bounds$$109$$.$w$ - $titleSpace$$4$$.$h$ / 2), $title$$12_titleString$$1$$.$alignRight$()) : !$isVert$$12$$ && !$isRTL$$31$$ ? ($title$$12_titleString$$1$$.$setX$($bounds$$109$$.x + $titleSpace$$4$$.$h$ / 2), $title$$12_titleString$$1$$.$alignLeft$()) : $isVert$$12$$ && ($title$$12_titleString$$1$$.$setY$($bounds$$109$$.y + $bounds$$109$$.$h$ - $title$$12_titleString$$1$$.$getDimensions$().$h$ - $titleSpace$$4$$.$w$ / 2), $title$$12_titleString$$1$$.$setX$($bounds$$109$$.x + $bounds$$109$$.$w$ / 
  2), $title$$12_titleString$$1$$.$alignCenter$()));
  $container$$127$$.$addChild$($title$$12_titleString$$1$$)
};
D.$DvtStatusMeterGaugeRenderer$$.$_calcPointOnArc$ = function $$DvtStatusMeterGaugeRenderer$$$$_calcPointOnArc$$($bounds$$110$$, $radius$$19$$, $angle$$44$$) {
  return{x:window.Math.cos($angle$$44$$) * $radius$$19$$ + $bounds$$110$$.$w$ / 2 + $bounds$$110$$.x, y:window.Math.sin($angle$$44$$) * $radius$$19$$ + $bounds$$110$$.$h$ / 2 + $bounds$$110$$.y}
};
D.$DvtStatusMeterGaugeRenderer$$.$_drawCircularArc$ = function $$DvtStatusMeterGaugeRenderer$$$$_drawCircularArc$$($borderColor$$37_gauge$$60$$, $container$$128$$, $bounds$$111_shape$$57$$, $startAngle$$16$$, $angleExtent$$14$$, $innerRadius$$5$$, $outerRadius$$4$$, $color$$59$$, $isPlotArea$$) {
  var $context$$398$$ = $borderColor$$37_gauge$$60$$.$getCtx$();
  (0,D.$DvtAgent$isRightToLeft$$)($borderColor$$37_gauge$$60$$.$getCtx$()) && ($startAngle$$16$$ = window.Math.PI - $startAngle$$16$$ - $angleExtent$$14$$, $startAngle$$16$$ = 0 < $startAngle$$16$$ ? $startAngle$$16$$ : $startAngle$$16$$ + 2 * window.Math.PI);
  $isPlotArea$$ ? $bounds$$111_shape$$57$$ = new D.$DvtPath$$($context$$398$$, D.$DvtStatusMeterGaugeRenderer$$.$createCircularPathCmd$($bounds$$111_shape$$57$$, $startAngle$$16$$, $angleExtent$$14$$, $innerRadius$$5$$, $outerRadius$$4$$)) : ($bounds$$111_shape$$57$$ = new D.$DvtStatusMeterGaugeCircularIndicator$$($context$$398$$, $bounds$$111_shape$$57$$, $startAngle$$16$$, $angleExtent$$14$$, $innerRadius$$5$$, $outerRadius$$4$$), $borderColor$$37_gauge$$60$$.$__shapes$.push($bounds$$111_shape$$57$$));
  $bounds$$111_shape$$57$$.$setSolidFill$($color$$59$$);
  ($borderColor$$37_gauge$$60$$ = D.$DvtGaugeStyleUtils$$.$getBorderColor$($borderColor$$37_gauge$$60$$)) && !$isPlotArea$$ && $bounds$$111_shape$$57$$.$setSolidStroke$($borderColor$$37_gauge$$60$$);
  $container$$128$$.$addChild$($bounds$$111_shape$$57$$)
};
D.$DvtStatusMeterGaugeRenderer$$.$_drawCircularReferenceLine$ = function $$DvtStatusMeterGaugeRenderer$$$$_drawCircularReferenceLine$$($gauge$$61_p1$$7$$, $container$$129$$, $bounds$$112_p2$$6$$, $angle$$45$$, $color$$60_stroke$$77$$, $lineWidth$$8$$, $lineStyle$$2$$) {
  var $context$$399_shape$$58$$ = $gauge$$61_p1$$7$$.$getCtx$(), $maxDiameter$$1_outerRadius$$5$$ = window.Math.min($bounds$$112_p2$$6$$.$w$, $bounds$$112_p2$$6$$.$h$), $innerRadius$$6$$ = 0.275 * $maxDiameter$$1_outerRadius$$5$$, $maxDiameter$$1_outerRadius$$5$$ = 0.5 * $maxDiameter$$1_outerRadius$$5$$;
  (0,D.$DvtAgent$isRightToLeft$$)($gauge$$61_p1$$7$$.$getCtx$()) && ($angle$$45$$ = window.Math.PI - $angle$$45$$, $angle$$45$$ = 0 < $angle$$45$$ ? $angle$$45$$ : $angle$$45$$ + 2 * window.Math.PI);
  $gauge$$61_p1$$7$$ = D.$DvtStatusMeterGaugeRenderer$$.$_calcPointOnArc$($bounds$$112_p2$$6$$, $innerRadius$$6$$, $angle$$45$$);
  $bounds$$112_p2$$6$$ = D.$DvtStatusMeterGaugeRenderer$$.$_calcPointOnArc$($bounds$$112_p2$$6$$, $maxDiameter$$1_outerRadius$$5$$, $angle$$45$$);
  $context$$399_shape$$58$$ = new D.$DvtLine$$($context$$399_shape$$58$$, $gauge$$61_p1$$7$$.x, $gauge$$61_p1$$7$$.y, $bounds$$112_p2$$6$$.x, $bounds$$112_p2$$6$$.y);
  $color$$60_stroke$$77$$ = new D.$DvtSolidStroke$$($color$$60_stroke$$77$$, 1, $lineWidth$$8$$);
  $lineStyle$$2$$ && $color$$60_stroke$$77$$.$setStyle$((0,D.$DvtStroke$convertTypeString$$)($lineStyle$$2$$));
  $context$$399_shape$$58$$.$setStroke$($color$$60_stroke$$77$$);
  $container$$129$$.$addChild$($context$$399_shape$$58$$)
};
D.$DvtStatusMeterGaugeRenderer$$.$createCircularPathCmd$ = function $$DvtStatusMeterGaugeRenderer$$$$createCircularPathCmd$$($bounds$$113_p4$$2$$, $startAngle$$17$$, $angleExtent$$15$$, $innerRadius$$7$$, $cmd$$15_outerRadius$$6$$) {
  var $p1$$8$$, $p2$$7$$, $p3$$2$$;
  $angleExtent$$15$$ < D.$DvtMath$$.$TWO_PI$ ? ($p1$$8$$ = D.$DvtStatusMeterGaugeRenderer$$.$_calcPointOnArc$($bounds$$113_p4$$2$$, $cmd$$15_outerRadius$$6$$, $startAngle$$17$$), $p2$$7$$ = D.$DvtStatusMeterGaugeRenderer$$.$_calcPointOnArc$($bounds$$113_p4$$2$$, $cmd$$15_outerRadius$$6$$, $startAngle$$17$$ + $angleExtent$$15$$), $p3$$2$$ = D.$DvtStatusMeterGaugeRenderer$$.$_calcPointOnArc$($bounds$$113_p4$$2$$, $innerRadius$$7$$, $startAngle$$17$$ + $angleExtent$$15$$), $bounds$$113_p4$$2$$ = D.$DvtStatusMeterGaugeRenderer$$.$_calcPointOnArc$($bounds$$113_p4$$2$$, 
  $innerRadius$$7$$, $startAngle$$17$$), $cmd$$15_outerRadius$$6$$ = D.$DvtPathUtils$$.moveTo($p1$$8$$.x, $p1$$8$$.y) + D.$DvtPathUtils$$.arcTo($cmd$$15_outerRadius$$6$$, $cmd$$15_outerRadius$$6$$, $angleExtent$$15$$, 1, $p2$$7$$.x, $p2$$7$$.y) + D.$DvtPathUtils$$.lineTo($p3$$2$$.x, $p3$$2$$.y) + D.$DvtPathUtils$$.arcTo($innerRadius$$7$$, $innerRadius$$7$$, $angleExtent$$15$$, 0, $bounds$$113_p4$$2$$.x, $bounds$$113_p4$$2$$.y) + D.$DvtPathUtils$$.closePath()) : ($p1$$8$$ = D.$DvtStatusMeterGaugeRenderer$$.$_calcPointOnArc$($bounds$$113_p4$$2$$, 
  $cmd$$15_outerRadius$$6$$, $startAngle$$17$$), $p2$$7$$ = D.$DvtStatusMeterGaugeRenderer$$.$_calcPointOnArc$($bounds$$113_p4$$2$$, $cmd$$15_outerRadius$$6$$, $startAngle$$17$$ + $angleExtent$$15$$ / 2), $p3$$2$$ = D.$DvtStatusMeterGaugeRenderer$$.$_calcPointOnArc$($bounds$$113_p4$$2$$, $innerRadius$$7$$, $startAngle$$17$$), $bounds$$113_p4$$2$$ = D.$DvtStatusMeterGaugeRenderer$$.$_calcPointOnArc$($bounds$$113_p4$$2$$, $innerRadius$$7$$, $startAngle$$17$$ + $angleExtent$$15$$ / 2), $cmd$$15_outerRadius$$6$$ = 
  D.$DvtPathUtils$$.moveTo($p1$$8$$.x, $p1$$8$$.y) + D.$DvtPathUtils$$.arcTo($cmd$$15_outerRadius$$6$$, $cmd$$15_outerRadius$$6$$, $angleExtent$$15$$ / 2, 1, $p2$$7$$.x, $p2$$7$$.y) + D.$DvtPathUtils$$.arcTo($cmd$$15_outerRadius$$6$$, $cmd$$15_outerRadius$$6$$, $angleExtent$$15$$ / 2, 1, $p1$$8$$.x, $p1$$8$$.y), 0 < $innerRadius$$7$$ && ($cmd$$15_outerRadius$$6$$ += D.$DvtPathUtils$$.moveTo($bounds$$113_p4$$2$$.x, $bounds$$113_p4$$2$$.y) + D.$DvtPathUtils$$.arcTo($innerRadius$$7$$, $innerRadius$$7$$, 
  $angleExtent$$15$$ / 2, 0, $p3$$2$$.x, $p3$$2$$.y) + D.$DvtPathUtils$$.arcTo($innerRadius$$7$$, $innerRadius$$7$$, $angleExtent$$15$$ / 2, 0, $bounds$$113_p4$$2$$.x, $bounds$$113_p4$$2$$.y)), $cmd$$15_outerRadius$$6$$ += D.$DvtPathUtils$$.closePath());
  return $cmd$$15_outerRadius$$6$$
};
D.$DvtStatusMeterGaugeRenderer$$.$getAngleQuadrant$ = function $$DvtStatusMeterGaugeRenderer$$$$getAngleQuadrant$$($angle$$46$$, $bStart$$1$$) {
  var $quadrant$$ = 1;
  if($bStart$$1$$) {
    $angle$$46$$ >= D.$DvtMath$$.$HALF_PI$ && $angle$$46$$ < window.Math.PI ? $quadrant$$ = 2 : $angle$$46$$ >= window.Math.PI && $angle$$46$$ < 1.5 * window.Math.PI ? $quadrant$$ = 3 : $angle$$46$$ >= 1.5 * window.Math.PI && $angle$$46$$ < D.$DvtMath$$.$TWO_PI$ && ($quadrant$$ = 4)
  }else {
    if($angle$$46$$ > D.$DvtMath$$.$HALF_PI$ && $angle$$46$$ <= window.Math.PI) {
      $quadrant$$ = 2
    }else {
      if($angle$$46$$ > window.Math.PI && $angle$$46$$ <= 1.5 * window.Math.PI) {
        $quadrant$$ = 3
      }else {
        if($angle$$46$$ > 1.5 * window.Math.PI && $angle$$46$$ < D.$DvtMath$$.$TWO_PI$ || 0 == $angle$$46$$) {
          $quadrant$$ = 4
        }
      }
    }
  }
  return $quadrant$$
};
D.$DvtStatusMeterGaugeRenderer$$.$_hasMetricLabelOutsidePlotArea$ = function $$DvtStatusMeterGaugeRenderer$$$$_hasMetricLabelOutsidePlotArea$$($options$$172$$) {
  var $labelPosition$$8$$ = $options$$172$$.metricLabel.position;
  return"auto" == $labelPosition$$8$$ || "outsidePlotArea" == $labelPosition$$8$$ || "withTitle" == $labelPosition$$8$$ && !D.$DvtGaugeStyleUtils$$.$hasTitle$($options$$172$$)
};
D.$DvtStatusMeterGaugeRenderer$$.$_adjustCenterAndBounds$ = function $$DvtStatusMeterGaugeRenderer$$$$_adjustCenterAndBounds$$($gauge$$62$$, $innerRadius$$8_maxInnerDiameter$$1$$, $maxDiameter$$2_startAngleRads$$2$$, $angleExtentRads$$3$$, $endAngle$$4$$, $bounds$$114$$, $isRTL$$33$$) {
  var $labelBounds$$10_labelCenterOffset$$ = D.$JSCompiler_alias_NULL$$, $startQuadrant$$ = D.$DvtStatusMeterGaugeRenderer$$.$getAngleQuadrant$($maxDiameter$$2_startAngleRads$$2$$, D.$JSCompiler_alias_TRUE$$), $endQuadrant$$ = D.$DvtStatusMeterGaugeRenderer$$.$getAngleQuadrant$($endAngle$$4$$, D.$JSCompiler_alias_FALSE$$), $width$$100$$ = $bounds$$114$$.$w$, $height$$93$$ = $bounds$$114$$.$h$, $cx$$49$$ = $width$$100$$ / 2, $cy$$50$$ = $height$$93$$ / 2;
  if($startQuadrant$$ == $endQuadrant$$ && $angleExtentRads$$3$$ <= D.$DvtMath$$.$HALF_PI$) {
    if($maxDiameter$$2_startAngleRads$$2$$ = 2 * window.Math.min($bounds$$114$$.$w$, $bounds$$114$$.$h$), $bounds$$114$$.$w$ += $maxDiameter$$2_startAngleRads$$2$$ / 2, $bounds$$114$$.$h$ += $maxDiameter$$2_startAngleRads$$2$$ / 2, $innerRadius$$8_maxInnerDiameter$$1$$ *= $maxDiameter$$2_startAngleRads$$2$$, !$isRTL$$33$$ && 1 == $startQuadrant$$ || $isRTL$$33$$ && 2 == $startQuadrant$$) {
      $bounds$$114$$.x -= $maxDiameter$$2_startAngleRads$$2$$ / 2, $bounds$$114$$.y -= $maxDiameter$$2_startAngleRads$$2$$ / 2, $cx$$49$$ = $width$$100$$ / 2 - $maxDiameter$$2_startAngleRads$$2$$ / 4 + 1, $cy$$50$$ = $height$$93$$ / 2 - $maxDiameter$$2_startAngleRads$$2$$ / 4 + 1, $labelBounds$$10_labelCenterOffset$$ = new D.$DvtRectangle$$($bounds$$114$$.x + $bounds$$114$$.$w$ / 2 - 1, $bounds$$114$$.y + $bounds$$114$$.$h$ / 2 - 1, $innerRadius$$8_maxInnerDiameter$$1$$ * (3 / 7) - 2, $innerRadius$$8_maxInnerDiameter$$1$$ * 
      (2.5 / 7) - 2)
    }else {
      if(!$isRTL$$33$$ && 2 == $startQuadrant$$ || $isRTL$$33$$ && 1 == $startQuadrant$$) {
        $bounds$$114$$.y -= $maxDiameter$$2_startAngleRads$$2$$ / 2, $cx$$49$$ = $width$$100$$ / 2 + $maxDiameter$$2_startAngleRads$$2$$ / 4 - 1, $cy$$50$$ = $height$$93$$ / 2 - $maxDiameter$$2_startAngleRads$$2$$ / 4 + 1, $labelBounds$$10_labelCenterOffset$$ = new D.$DvtRectangle$$($bounds$$114$$.x + $bounds$$114$$.$w$ / 2 - $innerRadius$$8_maxInnerDiameter$$1$$ * (3 / 7) + 1, $bounds$$114$$.y + $bounds$$114$$.$h$ / 2 - 1, $innerRadius$$8_maxInnerDiameter$$1$$ * (3 / 7) - 2, $innerRadius$$8_maxInnerDiameter$$1$$ * 
        (2.5 / 7) - 2)
      }else {
        if(!$isRTL$$33$$ && 3 == $startQuadrant$$ || $isRTL$$33$$ && 4 == $startQuadrant$$) {
          $cx$$49$$ = $width$$100$$ / 2 + $maxDiameter$$2_startAngleRads$$2$$ / 4 - 1, $cy$$50$$ = $height$$93$$ / 2 + $maxDiameter$$2_startAngleRads$$2$$ / 4 - 1, $labelBounds$$10_labelCenterOffset$$ = new D.$DvtRectangle$$($bounds$$114$$.x + $bounds$$114$$.$w$ / 2 - $innerRadius$$8_maxInnerDiameter$$1$$ * (3 / 7) + 1, $bounds$$114$$.y + $bounds$$114$$.$h$ / 2 - $innerRadius$$8_maxInnerDiameter$$1$$ * (2.5 / 7) + 1, $innerRadius$$8_maxInnerDiameter$$1$$ * (3 / 7) - 2, $innerRadius$$8_maxInnerDiameter$$1$$ * 
          (2.5 / 7) - 2)
        }else {
          if(!$isRTL$$33$$ && 4 == $startQuadrant$$ || $isRTL$$33$$ && 3 == $startQuadrant$$) {
            $bounds$$114$$.x -= $maxDiameter$$2_startAngleRads$$2$$ / 2, $cx$$49$$ = $width$$100$$ / 2 - $maxDiameter$$2_startAngleRads$$2$$ / 4 + 1, $cy$$50$$ = $height$$93$$ / 2 + $maxDiameter$$2_startAngleRads$$2$$ / 4 - 1, $labelBounds$$10_labelCenterOffset$$ = new D.$DvtRectangle$$($bounds$$114$$.x + $bounds$$114$$.$w$ / 2 - 1, $bounds$$114$$.y + $bounds$$114$$.$h$ / 2 - $innerRadius$$8_maxInnerDiameter$$1$$ * (2.5 / 7) + 1, $innerRadius$$8_maxInnerDiameter$$1$$ * (3 / 7) - 2, $innerRadius$$8_maxInnerDiameter$$1$$ * 
            (2.5 / 7) - 2)
          }
        }
      }
    }
  }else {
    $startQuadrant$$ % 4 + 1 == $endQuadrant$$ && $angleExtentRads$$3$$ <= window.Math.PI ? 1 == $startQuadrant$$ || 3 == $startQuadrant$$ ? ($maxDiameter$$2_startAngleRads$$2$$ = window.Math.min($bounds$$114$$.$w$, 2 * $bounds$$114$$.$h$), $innerRadius$$8_maxInnerDiameter$$1$$ *= $maxDiameter$$2_startAngleRads$$2$$, $bounds$$114$$.$w$ > $bounds$$114$$.$h$ && ($labelBounds$$10_labelCenterOffset$$ = new D.$DvtRectangle$$($bounds$$114$$.x + $bounds$$114$$.$w$ / 2 - $innerRadius$$8_maxInnerDiameter$$1$$ * 
    (3 / 7), $bounds$$114$$.y + $bounds$$114$$.$h$ - ($bounds$$114$$.$h$ - $maxDiameter$$2_startAngleRads$$2$$ / 2) / 2 - $innerRadius$$8_maxInnerDiameter$$1$$ * (2.75 / 7), $innerRadius$$8_maxInnerDiameter$$1$$ * (6 / 7), $innerRadius$$8_maxInnerDiameter$$1$$ * (2.5 / 7)), 1 == $startQuadrant$$ ? ($labelBounds$$10_labelCenterOffset$$.y = $bounds$$114$$.y + ($bounds$$114$$.$h$ - $maxDiameter$$2_startAngleRads$$2$$ / 2) / 2 + $innerRadius$$8_maxInnerDiameter$$1$$ * (0.5 / 7), $bounds$$114$$.y -= $maxDiameter$$2_startAngleRads$$2$$ / 
    2 - ($bounds$$114$$.$h$ - $maxDiameter$$2_startAngleRads$$2$$ / 2) / 2, $cy$$50$$ = $height$$93$$ / 2 - $maxDiameter$$2_startAngleRads$$2$$ / 4 + 1) : ($bounds$$114$$.y += ($bounds$$114$$.$h$ - $maxDiameter$$2_startAngleRads$$2$$ / 2) / 2, $cy$$50$$ = $height$$93$$ / 2 + $maxDiameter$$2_startAngleRads$$2$$ / 4 - 1), $bounds$$114$$.$h$ = $maxDiameter$$2_startAngleRads$$2$$)) : ($maxDiameter$$2_startAngleRads$$2$$ = window.Math.min(2 * $bounds$$114$$.$w$, $bounds$$114$$.$h$), $innerRadius$$8_maxInnerDiameter$$1$$ *= 
    $maxDiameter$$2_startAngleRads$$2$$, $bounds$$114$$.$w$ < $bounds$$114$$.$h$ && ($labelBounds$$10_labelCenterOffset$$ = new D.$DvtRectangle$$($bounds$$114$$.x + $bounds$$114$$.$w$ - ($bounds$$114$$.$w$ - $maxDiameter$$2_startAngleRads$$2$$ / 2) / 2 - $innerRadius$$8_maxInnerDiameter$$1$$ * (3.25 / 7), $bounds$$114$$.y + $bounds$$114$$.$h$ / 2 - $innerRadius$$8_maxInnerDiameter$$1$$ * (2.5 / 7), $innerRadius$$8_maxInnerDiameter$$1$$ * (3 / 7), $innerRadius$$8_maxInnerDiameter$$1$$ * (5 / 7)), 
    !$isRTL$$33$$ && 4 == $startQuadrant$$ || $isRTL$$33$$ && 2 == $startQuadrant$$ ? ($labelBounds$$10_labelCenterOffset$$.x = $bounds$$114$$.x + ($bounds$$114$$.$w$ - $maxDiameter$$2_startAngleRads$$2$$ / 2) / 2 + $innerRadius$$8_maxInnerDiameter$$1$$ * (0.25 / 7), $bounds$$114$$.x -= $maxDiameter$$2_startAngleRads$$2$$ / 2 - ($bounds$$114$$.$w$ - $maxDiameter$$2_startAngleRads$$2$$ / 2) / 2, $cx$$49$$ = $width$$100$$ / 2 - $maxDiameter$$2_startAngleRads$$2$$ / 4 + 1) : ($bounds$$114$$.x += ($bounds$$114$$.$w$ - 
    $maxDiameter$$2_startAngleRads$$2$$ / 2) / 2, $cx$$49$$ = $width$$100$$ / 2 + $maxDiameter$$2_startAngleRads$$2$$ / 4 - 1), $bounds$$114$$.$w$ = $maxDiameter$$2_startAngleRads$$2$$)) : $endQuadrant$$ % 4 + 1 == $startQuadrant$$ && $angleExtentRads$$3$$ > window.Math.PI && (1 == $startQuadrant$$ && $bounds$$114$$.$h$ > $bounds$$114$$.$w$ ? ($maxDiameter$$2_startAngleRads$$2$$ = window.Math.min(2 * ($bounds$$114$$.$w$ / (window.Math.cos($maxDiameter$$2_startAngleRads$$2$$) + 1)), 2 * ($bounds$$114$$.$w$ / 
    (window.Math.sin($endAngle$$4$$ - 1.5 * window.Math.PI) + 1)), $bounds$$114$$.$h$), $innerRadius$$8_maxInnerDiameter$$1$$ *= $maxDiameter$$2_startAngleRads$$2$$, $labelBounds$$10_labelCenterOffset$$ = $innerRadius$$8_maxInnerDiameter$$1$$ * (3 / 7) * (2 * $bounds$$114$$.$w$ / $maxDiameter$$2_startAngleRads$$2$$ - 1), $isRTL$$33$$ ? ($labelBounds$$10_labelCenterOffset$$ = new D.$DvtRectangle$$($bounds$$114$$.x + $bounds$$114$$.$w$ - $maxDiameter$$2_startAngleRads$$2$$ / 2 - $labelBounds$$10_labelCenterOffset$$, 
    $bounds$$114$$.y + $bounds$$114$$.$h$ / 2 - $innerRadius$$8_maxInnerDiameter$$1$$ * (2.5 / 7), $innerRadius$$8_maxInnerDiameter$$1$$ * (3 / 7) + $labelBounds$$10_labelCenterOffset$$, $innerRadius$$8_maxInnerDiameter$$1$$ * (5 / 7)), $bounds$$114$$.x -= $maxDiameter$$2_startAngleRads$$2$$ - $bounds$$114$$.$w$, $cx$$49$$ = -$maxDiameter$$2_startAngleRads$$2$$ / 2 + $width$$100$$) : ($labelBounds$$10_labelCenterOffset$$ = new D.$DvtRectangle$$($bounds$$114$$.x + $maxDiameter$$2_startAngleRads$$2$$ / 
    2 - $innerRadius$$8_maxInnerDiameter$$1$$ * (3 / 7), $bounds$$114$$.y + $bounds$$114$$.$h$ / 2 - $innerRadius$$8_maxInnerDiameter$$1$$ * (2.5 / 7), $innerRadius$$8_maxInnerDiameter$$1$$ * (3 / 7) * (1 + (2 * $bounds$$114$$.$w$ / $maxDiameter$$2_startAngleRads$$2$$ - 1)), $innerRadius$$8_maxInnerDiameter$$1$$ * (5 / 7)), $cx$$49$$ = $maxDiameter$$2_startAngleRads$$2$$ / 2), $bounds$$114$$.$w$ = $maxDiameter$$2_startAngleRads$$2$$) : 2 == $startQuadrant$$ && $bounds$$114$$.$h$ < $bounds$$114$$.$w$ ? 
    ($maxDiameter$$2_startAngleRads$$2$$ = window.Math.min(2 * ($bounds$$114$$.$h$ / (window.Math.cos($maxDiameter$$2_startAngleRads$$2$$ - D.$DvtMath$$.$HALF_PI$) + 1)), 2 * ($bounds$$114$$.$h$ / (window.Math.sin($endAngle$$4$$) + 1)), $bounds$$114$$.$w$), $innerRadius$$8_maxInnerDiameter$$1$$ *= $maxDiameter$$2_startAngleRads$$2$$, $labelBounds$$10_labelCenterOffset$$ = new D.$DvtRectangle$$($bounds$$114$$.x + $bounds$$114$$.$w$ / 2 - $innerRadius$$8_maxInnerDiameter$$1$$ * (3 / 7), $bounds$$114$$.y + 
    $maxDiameter$$2_startAngleRads$$2$$ / 2 - $innerRadius$$8_maxInnerDiameter$$1$$ * (2.5 / 7), $innerRadius$$8_maxInnerDiameter$$1$$ * (6 / 7), $innerRadius$$8_maxInnerDiameter$$1$$ * (2.5 / 7) * (1 + (2 * $bounds$$114$$.$h$ / $maxDiameter$$2_startAngleRads$$2$$ - 1))), $bounds$$114$$.$h$ = $maxDiameter$$2_startAngleRads$$2$$, $cy$$50$$ = $maxDiameter$$2_startAngleRads$$2$$ / 2) : 3 == $startQuadrant$$ && $bounds$$114$$.$h$ > $bounds$$114$$.$w$ ? ($maxDiameter$$2_startAngleRads$$2$$ = window.Math.min(2 * 
    ($bounds$$114$$.$w$ / (window.Math.cos($maxDiameter$$2_startAngleRads$$2$$ - window.Math.PI) + 1)), 2 * ($bounds$$114$$.$w$ / (window.Math.sin($endAngle$$4$$ - D.$DvtMath$$.$HALF_PI$) + 1)), $bounds$$114$$.$h$), $innerRadius$$8_maxInnerDiameter$$1$$ *= $maxDiameter$$2_startAngleRads$$2$$, $labelBounds$$10_labelCenterOffset$$ = $innerRadius$$8_maxInnerDiameter$$1$$ * (3 / 7) * (2 * $bounds$$114$$.$w$ / $maxDiameter$$2_startAngleRads$$2$$ - 1), $isRTL$$33$$ ? ($labelBounds$$10_labelCenterOffset$$ = 
    new D.$DvtRectangle$$($bounds$$114$$.x + $maxDiameter$$2_startAngleRads$$2$$ / 2 - $innerRadius$$8_maxInnerDiameter$$1$$ * (3 / 7), $bounds$$114$$.y + $bounds$$114$$.$h$ / 2 - $innerRadius$$8_maxInnerDiameter$$1$$ * (2.5 / 7), $innerRadius$$8_maxInnerDiameter$$1$$ * (3 / 7) * (1 + (2 * $bounds$$114$$.$w$ / $maxDiameter$$2_startAngleRads$$2$$ - 1)), $innerRadius$$8_maxInnerDiameter$$1$$ * (5 / 7)), $cx$$49$$ = $maxDiameter$$2_startAngleRads$$2$$ / 2) : ($labelBounds$$10_labelCenterOffset$$ = new D.$DvtRectangle$$($bounds$$114$$.x + 
    $bounds$$114$$.$w$ - $maxDiameter$$2_startAngleRads$$2$$ / 2 - $labelBounds$$10_labelCenterOffset$$, $bounds$$114$$.y + $bounds$$114$$.$h$ / 2 - $innerRadius$$8_maxInnerDiameter$$1$$ * (2.5 / 7), $innerRadius$$8_maxInnerDiameter$$1$$ * (3 / 7) + $labelBounds$$10_labelCenterOffset$$, $innerRadius$$8_maxInnerDiameter$$1$$ * (5 / 7)), $bounds$$114$$.x -= $maxDiameter$$2_startAngleRads$$2$$ - $bounds$$114$$.$w$, $cx$$49$$ = -$maxDiameter$$2_startAngleRads$$2$$ / 2 + $width$$100$$), $bounds$$114$$.$w$ = 
    $maxDiameter$$2_startAngleRads$$2$$) : 4 == $startQuadrant$$ && $bounds$$114$$.$h$ < $bounds$$114$$.$w$ && ($maxDiameter$$2_startAngleRads$$2$$ = window.Math.min(2 * ($bounds$$114$$.$h$ / (window.Math.cos($maxDiameter$$2_startAngleRads$$2$$ - 1.5 * window.Math.PI) + 1)), 2 * ($bounds$$114$$.$h$ / (window.Math.sin(D.$DvtMath$$.$TWO_PI$ - $endAngle$$4$$) + 1)), $bounds$$114$$.$w$), $innerRadius$$8_maxInnerDiameter$$1$$ *= $maxDiameter$$2_startAngleRads$$2$$, $labelBounds$$10_labelCenterOffset$$ = 
    $innerRadius$$8_maxInnerDiameter$$1$$ * (2.5 / 7) * (2 * $bounds$$114$$.$h$ / $maxDiameter$$2_startAngleRads$$2$$ - 1), $labelBounds$$10_labelCenterOffset$$ = new D.$DvtRectangle$$($bounds$$114$$.x + $bounds$$114$$.$w$ / 2 - $innerRadius$$8_maxInnerDiameter$$1$$ * (3 / 7), $bounds$$114$$.y + $bounds$$114$$.$h$ - $maxDiameter$$2_startAngleRads$$2$$ / 2 - $labelBounds$$10_labelCenterOffset$$, $innerRadius$$8_maxInnerDiameter$$1$$ * (6 / 7), $innerRadius$$8_maxInnerDiameter$$1$$ * (2.5 / 7) + $labelBounds$$10_labelCenterOffset$$), 
    $bounds$$114$$.y -= $maxDiameter$$2_startAngleRads$$2$$ - $bounds$$114$$.$h$, $bounds$$114$$.$h$ = $maxDiameter$$2_startAngleRads$$2$$, $cy$$50$$ = -$maxDiameter$$2_startAngleRads$$2$$ / 2 + $height$$93$$))
  }
  $gauge$$62$$.$cx$ = $cx$$49$$;
  $gauge$$62$$.$cy$ = $cy$$50$$;
  return $labelBounds$$10_labelCenterOffset$$
};
D.$DvtStatusMeterGaugeRenderer$$.$rectangleWithBorderRadius$ = function $$DvtStatusMeterGaugeRenderer$$$$rectangleWithBorderRadius$$($x$$215$$, $y$$189$$, $w$$49$$, $h$$46$$, $horiz$$1_radius$$20_split$$1$$, $multiplier$$2$$, $bottomLeftY_defaultValue$$5$$) {
  var $topLeftX$$1$$ = $bottomLeftY_defaultValue$$5$$, $topLeftY$$ = $bottomLeftY_defaultValue$$5$$, $topRightX$$1$$ = $bottomLeftY_defaultValue$$5$$, $topRightY$$ = $bottomLeftY_defaultValue$$5$$, $bottomRightX$$1$$ = $bottomLeftY_defaultValue$$5$$, $bottomRightY$$ = $bottomLeftY_defaultValue$$5$$, $bottomLeftX$$1$$ = $bottomLeftY_defaultValue$$5$$;
  if($horiz$$1_radius$$20_split$$1$$) {
    if(-1 != $horiz$$1_radius$$20_split$$1$$.indexOf("/")) {
      var $splitHorizVert_vert$$1$$ = $horiz$$1_radius$$20_split$$1$$.split("/");
      $horiz$$1_radius$$20_split$$1$$ = $splitHorizVert_vert$$1$$[0].trim().split(/\s+/);
      $splitHorizVert_vert$$1$$ = $splitHorizVert_vert$$1$$[1].trim().split(/\s+/);
      1 == $horiz$$1_radius$$20_split$$1$$.length ? $topLeftX$$1$$ = $topRightX$$1$$ = $bottomRightX$$1$$ = $bottomLeftX$$1$$ = $horiz$$1_radius$$20_split$$1$$[0] : 2 == $horiz$$1_radius$$20_split$$1$$.length ? ($topLeftX$$1$$ = $bottomRightX$$1$$ = $horiz$$1_radius$$20_split$$1$$[0], $topRightX$$1$$ = $bottomLeftX$$1$$ = $horiz$$1_radius$$20_split$$1$$[1]) : 3 == $horiz$$1_radius$$20_split$$1$$.length ? ($topLeftX$$1$$ = $horiz$$1_radius$$20_split$$1$$[0], $topRightX$$1$$ = $bottomLeftX$$1$$ = $horiz$$1_radius$$20_split$$1$$[1], 
      $bottomRightX$$1$$ = $horiz$$1_radius$$20_split$$1$$[2]) : 4 == $horiz$$1_radius$$20_split$$1$$.length && ($topLeftX$$1$$ = $horiz$$1_radius$$20_split$$1$$[0], $topRightX$$1$$ = $horiz$$1_radius$$20_split$$1$$[1], $bottomRightX$$1$$ = $horiz$$1_radius$$20_split$$1$$[2], $bottomLeftX$$1$$ = $horiz$$1_radius$$20_split$$1$$[3]);
      1 == $splitHorizVert_vert$$1$$.length ? $topLeftY$$ = $topRightY$$ = $bottomRightY$$ = $bottomLeftY_defaultValue$$5$$ = $splitHorizVert_vert$$1$$[0] : 2 == $splitHorizVert_vert$$1$$.length ? ($topLeftY$$ = $bottomRightY$$ = $splitHorizVert_vert$$1$$[0], $topRightY$$ = $bottomLeftY_defaultValue$$5$$ = $splitHorizVert_vert$$1$$[1]) : 3 == $splitHorizVert_vert$$1$$.length ? ($topLeftY$$ = $splitHorizVert_vert$$1$$[0], $topRightY$$ = $bottomLeftY_defaultValue$$5$$ = $splitHorizVert_vert$$1$$[1], 
      $bottomRightY$$ = $splitHorizVert_vert$$1$$[2]) : 4 == $splitHorizVert_vert$$1$$.length && ($topLeftY$$ = $splitHorizVert_vert$$1$$[0], $topRightY$$ = $splitHorizVert_vert$$1$$[1], $bottomRightY$$ = $splitHorizVert_vert$$1$$[2], $bottomLeftY_defaultValue$$5$$ = $splitHorizVert_vert$$1$$[3])
    }else {
      "auto" != $horiz$$1_radius$$20_split$$1$$ && ($horiz$$1_radius$$20_split$$1$$ = $horiz$$1_radius$$20_split$$1$$.trim().split(/\s+/), 1 == $horiz$$1_radius$$20_split$$1$$.length ? $topLeftX$$1$$ = $topRightX$$1$$ = $bottomRightX$$1$$ = $bottomLeftX$$1$$ = $topLeftY$$ = $topRightY$$ = $bottomRightY$$ = $bottomLeftY_defaultValue$$5$$ = $horiz$$1_radius$$20_split$$1$$[0] : 2 == $horiz$$1_radius$$20_split$$1$$.length ? ($topLeftX$$1$$ = $bottomRightX$$1$$ = $topLeftY$$ = $bottomRightY$$ = $horiz$$1_radius$$20_split$$1$$[0], 
      $topRightX$$1$$ = $bottomLeftX$$1$$ = $topRightY$$ = $bottomLeftY_defaultValue$$5$$ = $horiz$$1_radius$$20_split$$1$$[1]) : 3 == $horiz$$1_radius$$20_split$$1$$.length ? ($topLeftX$$1$$ = $topLeftY$$ = $horiz$$1_radius$$20_split$$1$$[0], $topRightX$$1$$ = $bottomLeftX$$1$$ = $topRightY$$ = $bottomLeftY_defaultValue$$5$$ = $horiz$$1_radius$$20_split$$1$$[1], $bottomRightX$$1$$ = $bottomRightY$$ = $horiz$$1_radius$$20_split$$1$$[2]) : 4 == $horiz$$1_radius$$20_split$$1$$.length && ($topLeftX$$1$$ = 
      $topLeftY$$ = $horiz$$1_radius$$20_split$$1$$[0], $topRightX$$1$$ = $topRightY$$ = $horiz$$1_radius$$20_split$$1$$[1], $bottomRightX$$1$$ = $bottomRightY$$ = $horiz$$1_radius$$20_split$$1$$[2], $bottomLeftX$$1$$ = $bottomLeftY_defaultValue$$5$$ = $horiz$$1_radius$$20_split$$1$$[3]))
    }
  }
  return D.$DvtStatusMeterGaugeRenderer$$.$_roundedRectangle$($x$$215$$, $y$$189$$, $w$$49$$, $h$$46$$, D.$DvtStatusMeterGaugeRenderer$$.$_parseBorderRadiusItem$($topLeftX$$1$$, $multiplier$$2$$), D.$DvtStatusMeterGaugeRenderer$$.$_parseBorderRadiusItem$($topLeftY$$, $multiplier$$2$$), D.$DvtStatusMeterGaugeRenderer$$.$_parseBorderRadiusItem$($topRightX$$1$$, $multiplier$$2$$), D.$DvtStatusMeterGaugeRenderer$$.$_parseBorderRadiusItem$($topRightY$$, $multiplier$$2$$), D.$DvtStatusMeterGaugeRenderer$$.$_parseBorderRadiusItem$($bottomRightX$$1$$, 
  $multiplier$$2$$), D.$DvtStatusMeterGaugeRenderer$$.$_parseBorderRadiusItem$($bottomRightY$$, $multiplier$$2$$), D.$DvtStatusMeterGaugeRenderer$$.$_parseBorderRadiusItem$($bottomLeftX$$1$$, $multiplier$$2$$), D.$DvtStatusMeterGaugeRenderer$$.$_parseBorderRadiusItem$($bottomLeftY_defaultValue$$5$$, $multiplier$$2$$))
};
D.$DvtStatusMeterGaugeRenderer$$.$_parseBorderRadiusItem$ = function $$DvtStatusMeterGaugeRenderer$$$$_parseBorderRadiusItem$$($item$$25$$, $multiplier$$3$$) {
  var $radius$$21$$ = window.Math.min((0,window.parseFloat)($item$$25$$), $multiplier$$3$$ / 2);
  -1 != $item$$25$$.indexOf("%") && ($radius$$21$$ = 0.01 * window.Math.min(50, (0,window.parseFloat)($item$$25$$)) * $multiplier$$3$$);
  return $radius$$21$$ < D.$DvtStatusMeterGaugeRenderer$$.$_MIN_CORNER_RADIUS$ ? 0 : $radius$$21$$
};
D.$DvtStatusMeterGaugeRenderer$$.$_roundedRectangle$ = function $$DvtStatusMeterGaugeRenderer$$$$_roundedRectangle$$($x$$216$$, $y$$190$$, $w$$50$$, $h$$47$$, $tlcrX$$, $tlcrY$$, $trcrX$$, $trcrY$$, $brcrX$$, $brcrY$$, $blcrX$$, $blcrY$$) {
  $tlcrY$$ = window.Math.min($tlcrY$$, 0.5 * $h$$47$$);
  $trcrY$$ = window.Math.min($trcrY$$, 0.5 * $h$$47$$);
  $brcrY$$ = window.Math.min($brcrY$$, 0.5 * $h$$47$$);
  $blcrY$$ = window.Math.min($blcrY$$, 0.5 * $h$$47$$);
  $tlcrX$$ = window.Math.min($tlcrX$$, 0.5 * $w$$50$$);
  $trcrX$$ = window.Math.min($trcrX$$, 0.5 * $w$$50$$);
  $brcrX$$ = window.Math.min($brcrX$$, 0.5 * $w$$50$$);
  $blcrX$$ = window.Math.min($blcrX$$, 0.5 * $w$$50$$);
  return D.$DvtPathUtils$$.moveTo($x$$216$$ + $tlcrX$$, $y$$190$$) + D.$DvtPathUtils$$.lineTo($x$$216$$ + $w$$50$$ - $trcrX$$, $y$$190$$) + D.$DvtPathUtils$$.arcTo($trcrX$$, $trcrY$$, window.Math.PI / 2, 1, $x$$216$$ + $w$$50$$, $y$$190$$ + $trcrY$$) + D.$DvtPathUtils$$.lineTo($x$$216$$ + $w$$50$$, $y$$190$$ + $h$$47$$ - $brcrY$$) + D.$DvtPathUtils$$.arcTo($brcrX$$, $brcrY$$, window.Math.PI / 2, 1, $x$$216$$ + $w$$50$$ - $brcrX$$, $y$$190$$ + $h$$47$$) + D.$DvtPathUtils$$.lineTo($x$$216$$ + $blcrX$$, 
  $y$$190$$ + $h$$47$$) + D.$DvtPathUtils$$.arcTo($blcrX$$, $blcrY$$, window.Math.PI / 2, 1, $x$$216$$, $y$$190$$ + $h$$47$$ - $blcrY$$) + D.$DvtPathUtils$$.lineTo($x$$216$$, $y$$190$$ + $tlcrY$$) + D.$DvtPathUtils$$.arcTo($tlcrX$$, $tlcrY$$, window.Math.PI / 2, 1, $x$$216$$ + $tlcrX$$, $y$$190$$) + D.$DvtPathUtils$$.closePath()
};
D.$DvtStatusMeterGaugeIndicator$$ = function $$DvtStatusMeterGaugeIndicator$$$($gauge$$49$$, $context$$395$$, $x1$$44$$, $x2$$40$$, $y1$$34$$, $y2$$31$$) {
  this.Init($gauge$$49$$, $context$$395$$, $x1$$44$$, $x2$$40$$, $y1$$34$$, $y2$$31$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtStatusMeterGaugeIndicator$$, D.$DvtPath$$, "DvtStatusMeterGaugeIndicator");
D.$DvtStatusMeterGaugeIndicator$$.prototype.Init = function $$DvtStatusMeterGaugeIndicator$$$$Init$($gauge$$50$$, $context$$396$$, $x1$$45$$, $x2$$41$$, $y1$$35$$, $y2$$32$$) {
  D.$DvtStatusMeterGaugeIndicator$$.$superclass$.Init.call(this, $context$$396$$);
  this.$_gauge$ = $gauge$$50$$;
  this.$setCoords$($x1$$45$$, $x2$$41$$, $y1$$35$$, $y2$$32$$)
};
D.$DvtStatusMeterGaugeIndicator$$.prototype.$setCoords$ = function $$DvtStatusMeterGaugeIndicator$$$$$setCoords$$($width$$97_x1$$46$$, $multiplier_x2$$42$$, $height$$90_y1$$36$$, $options$$162_y2$$33$$) {
  this.$_x1$ = $width$$97_x1$$46$$;
  this.$_x2$ = $multiplier_x2$$42$$;
  this.$_y1$ = $height$$90_y1$$36$$;
  this.$_y2$ = $options$$162_y2$$33$$;
  var $cmds$$20_x$$212$$ = window.Math.min($width$$97_x1$$46$$, $multiplier_x2$$42$$), $y$$186$$ = window.Math.min($height$$90_y1$$36$$, $options$$162_y2$$33$$);
  $width$$97_x1$$46$$ = window.Math.abs($width$$97_x1$$46$$ - $multiplier_x2$$42$$);
  $height$$90_y1$$36$$ = window.Math.abs($options$$162_y2$$33$$ - $height$$90_y1$$36$$);
  $options$$162_y2$$33$$ = this.$_gauge$.$getOptions$();
  $multiplier_x2$$42$$ = "vertical" == $options$$162_y2$$33$$.orientation ? $width$$97_x1$$46$$ : $height$$90_y1$$36$$;
  var $defaultValue$$3$$ = (0,D.$DvtGaugeDefaults$isSkyrosSkin$$)(this.$_gauge$) ? "25%" : "15%", $cmds$$20_x$$212$$ = D.$DvtStatusMeterGaugeRenderer$$.$rectangleWithBorderRadius$($cmds$$20_x$$212$$, $y$$186$$, $width$$97_x1$$46$$, $height$$90_y1$$36$$, $options$$162_y2$$33$$.borderRadius, $multiplier_x2$$42$$, $defaultValue$$3$$);
  this.$setCmds$($cmds$$20_x$$212$$)
};
D.$DvtStatusMeterGaugeIndicator$$.prototype.$getAnimationParams$ = function $$DvtStatusMeterGaugeIndicator$$$$$getAnimationParams$$() {
  return[this.$_x1$, this.$_x2$, this.$_y1$, this.$_y2$]
};
D.$DvtStatusMeterGaugeIndicator$$.prototype.$setAnimationParams$ = function $$DvtStatusMeterGaugeIndicator$$$$$setAnimationParams$$($params$$34$$) {
  $params$$34$$ && 4 == $params$$34$$.length && this.$setCoords$($params$$34$$[0], $params$$34$$[1], $params$$34$$[2], $params$$34$$[3])
};
D.$DvtStatusMeterGaugeCircularIndicator$$ = function $$DvtStatusMeterGaugeCircularIndicator$$$($context$$393$$, $bounds$$101$$, $startAngle$$12$$, $angleExtent$$10$$, $innerRadius$$1$$, $outerRadius$$) {
  this.Init($context$$393$$, $bounds$$101$$, $startAngle$$12$$, $angleExtent$$10$$, $innerRadius$$1$$, $outerRadius$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtStatusMeterGaugeCircularIndicator$$, D.$DvtPath$$, "DvtStatusMeterGaugeCircularIndicator");
D.$DvtStatusMeterGaugeCircularIndicator$$.prototype.Init = function $$DvtStatusMeterGaugeCircularIndicator$$$$Init$($context$$394$$, $bounds$$102$$, $startAngle$$13$$, $angleExtent$$11$$, $innerRadius$$2$$, $outerRadius$$1$$) {
  D.$DvtStatusMeterGaugeCircularIndicator$$.$superclass$.Init.call(this, $context$$394$$);
  (0,D.$JSCompiler_StaticMethods_setPath$$)(this, $bounds$$102$$, $startAngle$$13$$, $angleExtent$$11$$, $innerRadius$$2$$, $outerRadius$$1$$)
};
D.$JSCompiler_StaticMethods_setPath$$ = function $$JSCompiler_StaticMethods_setPath$$$($JSCompiler_StaticMethods_setPath$self$$, $bounds$$103$$, $startAngle$$14$$, $angleExtent$$12$$, $innerRadius$$3$$, $outerRadius$$2$$) {
  $bounds$$103$$ && $bounds$$103$$ instanceof D.$DvtRectangle$$ ? $JSCompiler_StaticMethods_setPath$self$$.$_bounds$ = $bounds$$103$$ : $bounds$$103$$ = $JSCompiler_StaticMethods_setPath$self$$.$_bounds$;
  $JSCompiler_StaticMethods_setPath$self$$.$_startAngle$ = $startAngle$$14$$;
  $JSCompiler_StaticMethods_setPath$self$$.$_angleExtent$ = $angleExtent$$12$$;
  $JSCompiler_StaticMethods_setPath$self$$.$_innerRadius$ = $innerRadius$$3$$;
  $JSCompiler_StaticMethods_setPath$self$$.$_outerRadius$ = $outerRadius$$2$$;
  $JSCompiler_StaticMethods_setPath$self$$.$setCmds$(D.$DvtStatusMeterGaugeRenderer$$.$createCircularPathCmd$($bounds$$103$$, $startAngle$$14$$, $angleExtent$$12$$, $innerRadius$$3$$, $outerRadius$$2$$))
};
D.$DvtStatusMeterGaugeCircularIndicator$$.prototype.$getAnimationParams$ = function $$DvtStatusMeterGaugeCircularIndicator$$$$$getAnimationParams$$() {
  return[this.$_bounds$, this.$_startAngle$, this.$_angleExtent$, this.$_innerRadius$, this.$_outerRadius$]
};
D.$DvtStatusMeterGaugeCircularIndicator$$.prototype.$setAnimationParams$ = function $$DvtStatusMeterGaugeCircularIndicator$$$$$setAnimationParams$$($params$$33$$) {
  $params$$33$$ && 5 == $params$$33$$.length && (0,D.$JSCompiler_StaticMethods_setPath$$)(this, $params$$33$$[0], $params$$33$$[1], $params$$33$$[2], $params$$33$$[3], $params$$33$$[4])
};
D.$DvtDialGauge$$ = (0,D.$JSCompiler_emptyFn$$)();
(0,D.$goog$exportPath_$$)("DvtDialGauge", D.$DvtDialGauge$$);
D.$DvtObj$$.$createSubclass$(D.$DvtDialGauge$$, D.$DvtGauge$$, "DvtDialGauge");
D.$DvtDialGauge$$.newInstance = function $$DvtDialGauge$$$newInstance$($context$$381$$, $callback$$101$$, $callbackObj$$57$$) {
  var $gauge$$ = new D.$DvtDialGauge$$;
  $gauge$$.Init($context$$381$$, $callback$$101$$, $callbackObj$$57$$);
  return $gauge$$
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtDialGauge$$.prototype;
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($context$$382$$, $callback$$102$$, $callbackObj$$58$$) {
  D.$DvtDialGauge$$.$superclass$.Init.call(this, $context$$382$$, $callback$$102$$, $callbackObj$$58$$);
  this.$Defaults$ = new D.$DvtDialGaugeDefaults$$;
  this.$__anchorPt$ = D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.$SetOptions$ = function $$JSCompiler_prototypeAlias$$$$SetOptions$$($options$$125$$) {
  var $backgroundType$$ = $options$$125$$.background, $indicatorType$$ = $options$$125$$.indicator;
  "string" === typeof $backgroundType$$ && ($options$$125$$.background = D.$DvtGaugeStyleUtils$$.$getDialBackground$($backgroundType$$), $options$$125$$.background.images = $options$$125$$._backgroundImages);
  "string" === typeof $indicatorType$$ && ($options$$125$$.indicator = D.$DvtGaugeStyleUtils$$.$getDialIndicator$($indicatorType$$), $options$$125$$.indicator.images = $options$$125$$._indicatorImages);
  D.$DvtDialGauge$$.$superclass$.$SetOptions$.call(this, this.$Defaults$.$calcOptions$($options$$125$$))
};
D.$JSCompiler_prototypeAlias$$.$Render$ = function $$JSCompiler_prototypeAlias$$$$Render$$($container$$92$$, $width$$83$$, $height$$77$$) {
  D.$DvtDialGaugeRenderer$$.$render$(this, $container$$92$$, $width$$83$$, $height$$77$$)
};
D.$JSCompiler_prototypeAlias$$.$renderUpdate$ = function $$JSCompiler_prototypeAlias$$$$renderUpdate$$() {
  D.$DvtDialGaugeRenderer$$.$updateIndicatorAndLabel$(this, this.$_container$, this.$Width$, this.$Height$);
  var $eventManager$$17$$ = this.$__getEventManager$();
  $eventManager$$17$$ && $eventManager$$17$$.$associate$(this.$_editingOverlay$, this.$__getLogicalObject$(), D.$JSCompiler_alias_TRUE$$);
  (0,D.$JSCompiler_StaticMethods_UpdateAriaLiveValue$$)(this, this.$_container$)
};
D.$JSCompiler_prototypeAlias$$.$CreateAnimationOnDisplay$ = function $$JSCompiler_prototypeAlias$$$$CreateAnimationOnDisplay$$($objs$$58$$, $animatedObjs_animationType$$, $animationDuration$$3$$) {
  $animatedObjs_animationType$$ = [];
  for(var $i$$608$$ = 0;$i$$608$$ < $objs$$58$$.length;$i$$608$$++) {
    var $obj$$290$$ = $objs$$58$$[$i$$608$$], $endState$$13$$ = $obj$$290$$.$getAnimationParams$(), $animation$$1_startAngle$$8$$ = D.$DvtDialGaugeRenderer$$.$__getStartAngle$(this);
    $obj$$290$$.$setAngle$($animation$$1_startAngle$$8$$);
    $animation$$1_startAngle$$8$$ = new D.$DvtCustomAnimation$$(this.$getCtx$(), $obj$$290$$, $animationDuration$$3$$);
    (0,D.$JSCompiler_StaticMethods_addProp$$)($animation$$1_startAngle$$8$$.$_animator$, "typeNumberArray", $obj$$290$$, $obj$$290$$.$getAnimationParams$, $obj$$290$$.$setAnimationParams$, $endState$$13$$);
    $animation$$1_startAngle$$8$$.$_animator$.$setEasing$(function($objs$$58$$) {
      return(0,D.$DvtEasing$backOut$$)($objs$$58$$, 0.7)
    });
    $animatedObjs_animationType$$.push($animation$$1_startAngle$$8$$)
  }
  return new D.$DvtParallelPlayable$$(this.$getCtx$(), $animatedObjs_animationType$$)
};
D.$JSCompiler_prototypeAlias$$.$GetValueAt$ = function $$JSCompiler_prototypeAlias$$$$GetValueAt$$($x$$199$$, $y$$174$$) {
  var $angle$$41_ratio$$13$$ = D.$DvtMath$$.$radsToDegrees$(window.Math.atan2($y$$174$$ - this.$__anchorPt$.y, $x$$199$$ - this.$__anchorPt$.x));
  0 >= $angle$$41_ratio$$13$$ && ($angle$$41_ratio$$13$$ += 360);
  var $isRTL$$19_minValue$$9$$ = (0,D.$DvtAgent$isRightToLeft$$)(this.$getCtx$()), $angleExtent$$7_backgroundOptions$$ = this.$getOptions$().background, $startAngle$$9$$ = $isRTL$$19_minValue$$9$$ ? 180 + $angleExtent$$7_backgroundOptions$$.startAngle : 360 - $angleExtent$$7_backgroundOptions$$.startAngle, $angleExtent$$7_backgroundOptions$$ = $angleExtent$$7_backgroundOptions$$.angleExtent, $endAngle$$2$$ = $startAngle$$9$$ + $angleExtent$$7_backgroundOptions$$;
  if($isRTL$$19_minValue$$9$$) {
    $endAngle$$2$$ = $startAngle$$9$$;
    for($startAngle$$9$$ -= $angleExtent$$7_backgroundOptions$$;0 > $startAngle$$9$$;) {
      $startAngle$$9$$ += 360, $endAngle$$2$$ += 360
    }
  }
  $angle$$41_ratio$$13$$ + 360 >= $startAngle$$9$$ && $angle$$41_ratio$$13$$ + 360 <= $endAngle$$2$$ ? $angle$$41_ratio$$13$$ += 360 : $angle$$41_ratio$$13$$ >= $startAngle$$9$$ && $angle$$41_ratio$$13$$ <= $endAngle$$2$$ || ($angle$$41_ratio$$13$$ = $angle$$41_ratio$$13$$ > $endAngle$$2$$ ? $startAngle$$9$$ + 360 - $angle$$41_ratio$$13$$ < $angle$$41_ratio$$13$$ - $endAngle$$2$$ ? $startAngle$$9$$ : $endAngle$$2$$ : $startAngle$$9$$ - $angle$$41_ratio$$13$$ < $angle$$41_ratio$$13$$ + 360 - $endAngle$$2$$ ? 
  $startAngle$$9$$ : $endAngle$$2$$);
  $angle$$41_ratio$$13$$ = ($angle$$41_ratio$$13$$ - $startAngle$$9$$) / $angleExtent$$7_backgroundOptions$$;
  $isRTL$$19_minValue$$9$$ && ($angle$$41_ratio$$13$$ = 1 - $angle$$41_ratio$$13$$);
  $isRTL$$19_minValue$$9$$ = this.$Options$.min;
  return $angle$$41_ratio$$13$$ * (this.$Options$.max - $isRTL$$19_minValue$$9$$) + $isRTL$$19_minValue$$9$$
};
D.$DvtDialGaugeDefaults$$ = function $$DvtDialGaugeDefaults$$$() {
  this.Init({skyros:D.$DvtDialGaugeDefaults$VERSION_1$$, alta:{}})
};
D.$DvtObj$$.$createSubclass$(D.$DvtDialGaugeDefaults$$, D.$DvtGaugeDefaults$$, "DvtDialGaugeDefaults");
D.$DvtDialGaugeDefaults$VERSION_1$$ = {background:{startAngle:180, angleExtent:180, indicatorLength:0.7}, metricLabel:{style:new D.$DvtCSSStyle$$("font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;")}, tickLabel:{scaling:"auto", style:new D.$DvtCSSStyle$$("font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;")}};
D.$DvtDialGaugeRenderer$$ = {};
D.$DvtObj$$.$createSubclass$(D.$DvtDialGaugeRenderer$$, D.$DvtObj$$, "DvtDialGaugeRenderer");
D.$DvtDialGaugeRenderer$$.$render$ = function $$DvtDialGaugeRenderer$$$$render$$($gauge$$1$$, $container$$93$$, $bounds$$76_width$$84$$, $height$$78$$) {
  D.$DvtGaugeDataUtils$$.$hasData$($gauge$$1$$) ? ($bounds$$76_width$$84$$ = new D.$DvtRectangle$$(0, 0, $bounds$$76_width$$84$$, $height$$78$$), D.$DvtDialGaugeRenderer$$.$_renderShape$($gauge$$1$$, $container$$93$$, $bounds$$76_width$$84$$), D.$DvtDialGaugeRenderer$$.$_renderLabel$($gauge$$1$$, $container$$93$$, $bounds$$76_width$$84$$)) : D.$DvtGaugeRenderer$$.$renderEmptyText$($gauge$$1$$, $container$$93$$, new D.$DvtRectangle$$(0, 0, $bounds$$76_width$$84$$, $height$$78$$))
};
D.$DvtDialGaugeRenderer$$.$updateIndicatorAndLabel$ = function $$DvtDialGaugeRenderer$$$$updateIndicatorAndLabel$$($gauge$$2$$, $container$$94$$, $width$$85$$, $height$$79$$) {
  $gauge$$2$$.$__indicatorContainer$.$setAngle$(D.$DvtDialGaugeRenderer$$.$_getRotation$($gauge$$2$$, $gauge$$2$$.$getOptions$().value));
  $container$$94$$.removeChild($gauge$$2$$.$__label$);
  D.$DvtDialGaugeRenderer$$.$_renderLabel$($gauge$$2$$, $container$$94$$, new D.$DvtRectangle$$(0, 0, $width$$85$$, $height$$79$$))
};
D.$DvtDialGaugeRenderer$$.$_renderShape$ = function $$DvtDialGaugeRenderer$$$$_renderShape$$($gauge$$3$$, $backgroundAnchor_container$$95$$, $bounds$$77_scale$$22$$) {
  var $angleRads$$9_options$$126$$ = $gauge$$3$$.$getOptions$(), $background$$5_indicator$$7$$ = D.$DvtDialGaugeRenderer$$.$_createBackground$($gauge$$3$$, $bounds$$77_scale$$22$$);
  $backgroundAnchor_container$$95$$.$addChild$($background$$5_indicator$$7$$);
  $angleRads$$9_options$$126$$.background.majorTickCount && $angleRads$$9_options$$126$$.background.radius && D.$DvtDialGaugeRenderer$$.$_renderTickLabels$($gauge$$3$$, $backgroundAnchor_container$$95$$, $bounds$$77_scale$$22$$);
  var $background$$5_indicator$$7$$ = D.$DvtDialGaugeRenderer$$.$_createIndicator$($gauge$$3$$, $bounds$$77_scale$$22$$), $translateContainer$$ = new D.$DvtContainer$$($gauge$$3$$.$getCtx$()), $rotateContainer$$ = new D.$DvtDialGaugeIndicator$$($gauge$$3$$.$getCtx$());
  $backgroundAnchor_container$$95$$.$addChild$($translateContainer$$);
  $translateContainer$$.$addChild$($rotateContainer$$);
  $rotateContainer$$.$addChild$($background$$5_indicator$$7$$);
  var $indicatorBounds_mat$$43$$ = $background$$5_indicator$$7$$.$getDimensions$(), $angleRads$$9_options$$126$$ = D.$DvtDialGaugeRenderer$$.$_getRotation$($gauge$$3$$, $angleRads$$9_options$$126$$.value);
  $backgroundAnchor_container$$95$$ = D.$DvtDialGaugeRenderer$$.$_getBackgroundAnchorPoint$($gauge$$3$$, $bounds$$77_scale$$22$$);
  var $indicatorAnchor$$ = D.$DvtDialGaugeRenderer$$.$_getIndicatorAnchorPoint$($gauge$$3$$, $indicatorBounds_mat$$43$$);
  $bounds$$77_scale$$22$$ = D.$DvtDialGaugeRenderer$$.$_getIndicatorScaleFactor$($gauge$$3$$, $bounds$$77_scale$$22$$, $indicatorBounds_mat$$43$$);
  $indicatorBounds_mat$$43$$ = new D.$DvtMatrix$$;
  $indicatorBounds_mat$$43$$.translate(-$indicatorAnchor$$.x, -$indicatorAnchor$$.y);
  $indicatorBounds_mat$$43$$.scale($bounds$$77_scale$$22$$, $bounds$$77_scale$$22$$);
  $background$$5_indicator$$7$$.$setMatrix$($indicatorBounds_mat$$43$$);
  $rotateContainer$$.$setAngle$($angleRads$$9_options$$126$$);
  $indicatorBounds_mat$$43$$ = new D.$DvtMatrix$$;
  $indicatorBounds_mat$$43$$.translate($backgroundAnchor_container$$95$$.x, $backgroundAnchor_container$$95$$.y);
  $translateContainer$$.$setMatrix$($indicatorBounds_mat$$43$$);
  $gauge$$3$$.$__shapes$.push($rotateContainer$$);
  $gauge$$3$$.$__indicatorContainer$ = $rotateContainer$$;
  $gauge$$3$$.$__anchorPt$ = $backgroundAnchor_container$$95$$
};
D.$DvtDialGaugeRenderer$$.$_createBackground$ = function $$DvtDialGaugeRenderer$$$$_createBackground$$($gauge$$4$$, $bounds$$78$$) {
  var $backgroundOptions$$1$$ = $gauge$$4$$.$getOptions$().background, $isRTL$$20_radiusScale$$1$$ = (0,D.$DvtAgent$isRightToLeft$$)($gauge$$4$$.$getCtx$()), $isTouchDevice$$3_locImages_metLblBounds_width$$86$$ = (0,D.$DvtAgent$isTouchDevice$$)(), $shape$$50_widthRes$$ = $isTouchDevice$$3_locImages_metLblBounds_width$$86$$ ? 2 * $bounds$$78$$.$w$ : $bounds$$78$$.$w$, $heightRes_scale$$23$$ = $isTouchDevice$$3_locImages_metLblBounds_width$$86$$ ? 2 * $bounds$$78$$.$h$ : $bounds$$78$$.$h$, $images$$10_tx$$23$$ = 
  $backgroundOptions$$1$$.images;
  if($images$$10_tx$$23$$ && 0 < $images$$10_tx$$23$$.length) {
    var $i$$609_ty$$24$$, $refWidth$$, $refHeight$$, $isTouchDevice$$3_locImages_metLblBounds_width$$86$$ = [];
    for($i$$609_ty$$24$$ = 0;$i$$609_ty$$24$$ < $images$$10_tx$$23$$.length;$i$$609_ty$$24$$++) {
      var $imageDims$$1_isImageRTL_source$$29$$ = "rtl" == $images$$10_tx$$23$$[$i$$609_ty$$24$$].dir;
      $isRTL$$20_radiusScale$$1$$ && $imageDims$$1_isImageRTL_source$$29$$ ? $isTouchDevice$$3_locImages_metLblBounds_width$$86$$.push($images$$10_tx$$23$$[$i$$609_ty$$24$$]) : !$isRTL$$20_radiusScale$$1$$ && !$imageDims$$1_isImageRTL_source$$29$$ && $isTouchDevice$$3_locImages_metLblBounds_width$$86$$.push($images$$10_tx$$23$$[$i$$609_ty$$24$$])
    }
    $images$$10_tx$$23$$ = 0 < $isTouchDevice$$3_locImages_metLblBounds_width$$86$$.length ? $isTouchDevice$$3_locImages_metLblBounds_width$$86$$ : $images$$10_tx$$23$$;
    for($i$$609_ty$$24$$ = 0;$i$$609_ty$$24$$ < $images$$10_tx$$23$$.length;$i$$609_ty$$24$$++) {
      var $height$$80_image$$11$$ = $images$$10_tx$$23$$[$i$$609_ty$$24$$], $imageDims$$1_isImageRTL_source$$29$$ = $height$$80_image$$11$$.src, $isTouchDevice$$3_locImages_metLblBounds_width$$86$$ = $height$$80_image$$11$$.width, $height$$80_image$$11$$ = $height$$80_image$$11$$.height, $isSvg$$ = $imageDims$$1_isImageRTL_source$$29$$ && -1 < $imageDims$$1_isImageRTL_source$$29$$.search(".svg");
      0 == $i$$609_ty$$24$$ && ($refWidth$$ = $isTouchDevice$$3_locImages_metLblBounds_width$$86$$, $refHeight$$ = $height$$80_image$$11$$);
      if($isSvg$$ || $isTouchDevice$$3_locImages_metLblBounds_width$$86$$ >= $shape$$50_widthRes$$ && $height$$80_image$$11$$ >= $heightRes_scale$$23$$ || $i$$609_ty$$24$$ == $images$$10_tx$$23$$.length - 1) {
        var $shape$$50_widthRes$$ = new D.$DvtImage$$($gauge$$4$$.$getCtx$(), $imageDims$$1_isImageRTL_source$$29$$, 0, 0, $isTouchDevice$$3_locImages_metLblBounds_width$$86$$, $height$$80_image$$11$$), $matrix$$15$$ = new D.$DvtMatrix$$, $heightRes_scale$$23$$ = window.Math.min($bounds$$78$$.$w$ / $isTouchDevice$$3_locImages_metLblBounds_width$$86$$, $bounds$$78$$.$h$ / $height$$80_image$$11$$), $images$$10_tx$$23$$ = ($bounds$$78$$.$w$ - $heightRes_scale$$23$$ * $isTouchDevice$$3_locImages_metLblBounds_width$$86$$) / 
        2;
        $i$$609_ty$$24$$ = ($bounds$$78$$.$h$ - $heightRes_scale$$23$$ * $height$$80_image$$11$$) / 2;
        $matrix$$15$$.scale($heightRes_scale$$23$$, $heightRes_scale$$23$$);
        $matrix$$15$$.translate($images$$10_tx$$23$$, $i$$609_ty$$24$$);
        $shape$$50_widthRes$$.$setMatrix$($matrix$$15$$);
        $isSvg$$ && (0,D.$DvtAgent$isPlatformWebkit$$)() && ($imageDims$$1_isImageRTL_source$$29$$ = D.$DvtImageLoader$$.$loadImage$($gauge$$4$$.$getCtx$(), $imageDims$$1_isImageRTL_source$$29$$, D.$DvtObj$$.$createCallback$($shape$$50_widthRes$$, $shape$$50_widthRes$$.$__setDimensions$))) && $shape$$50_widthRes$$.$__setDimensions$($imageDims$$1_isImageRTL_source$$29$$);
        $bounds$$78$$.x += $images$$10_tx$$23$$;
        $bounds$$78$$.y += $i$$609_ty$$24$$;
        $bounds$$78$$.$w$ = $heightRes_scale$$23$$ * $isTouchDevice$$3_locImages_metLblBounds_width$$86$$;
        $bounds$$78$$.$h$ = $heightRes_scale$$23$$ * $height$$80_image$$11$$;
        !(0,window.isNaN)($backgroundOptions$$1$$.anchorX) && !(0,window.isNaN)($backgroundOptions$$1$$.anchorY) && ($backgroundOptions$$1$$._anchorX = $isRTL$$20_radiusScale$$1$$ ? $bounds$$78$$.x + $bounds$$78$$.$w$ - $bounds$$78$$.$w$ * $backgroundOptions$$1$$.anchorX / $refWidth$$ : $bounds$$78$$.x + $bounds$$78$$.$w$ * $backgroundOptions$$1$$.anchorX / $refWidth$$, $backgroundOptions$$1$$._anchorY = $bounds$$78$$.y + $bounds$$78$$.$h$ * $backgroundOptions$$1$$.anchorY / $refHeight$$);
        $backgroundOptions$$1$$.metricLabelBounds && ($isTouchDevice$$3_locImages_metLblBounds_width$$86$$ = {}, $isTouchDevice$$3_locImages_metLblBounds_width$$86$$.width = $bounds$$78$$.$w$ * $backgroundOptions$$1$$.metricLabelBounds.width / $refWidth$$, $isTouchDevice$$3_locImages_metLblBounds_width$$86$$.height = $bounds$$78$$.$h$ * $backgroundOptions$$1$$.metricLabelBounds.height / $refHeight$$, $isTouchDevice$$3_locImages_metLblBounds_width$$86$$.y = $bounds$$78$$.y + $bounds$$78$$.$h$ * $backgroundOptions$$1$$.metricLabelBounds.y / 
        $refHeight$$, $isTouchDevice$$3_locImages_metLblBounds_width$$86$$.x = $isRTL$$20_radiusScale$$1$$ ? $bounds$$78$$.x + $bounds$$78$$.$w$ - $bounds$$78$$.$w$ * $backgroundOptions$$1$$.metricLabelBounds.x / $refWidth$$ - $isTouchDevice$$3_locImages_metLblBounds_width$$86$$.width : $bounds$$78$$.x + $bounds$$78$$.$w$ * $backgroundOptions$$1$$.metricLabelBounds.x / $refWidth$$, $backgroundOptions$$1$$._metricLabelBounds = $isTouchDevice$$3_locImages_metLblBounds_width$$86$$);
        $isRTL$$20_radiusScale$$1$$ = window.Math.min($bounds$$78$$.$w$ / $refWidth$$, $bounds$$78$$.$h$ / $refHeight$$);
        $backgroundOptions$$1$$._radius = $backgroundOptions$$1$$.radius * $isRTL$$20_radiusScale$$1$$;
        $backgroundOptions$$1$$._tickLabelHeight = $backgroundOptions$$1$$.tickLabelHeight * $bounds$$78$$.$h$ / $refHeight$$;
        $backgroundOptions$$1$$._tickLabelWidth = $backgroundOptions$$1$$.tickLabelWidth * $bounds$$78$$.$w$ / $refWidth$$;
        return $shape$$50_widthRes$$
      }
    }
  }
  return D.$JSCompiler_alias_NULL$$
};
D.$DvtDialGaugeRenderer$$.$_createIndicator$ = function $$DvtDialGaugeRenderer$$$$_createIndicator$$($gauge$$5$$, $bounds$$79$$) {
  var $indicatorOptions$$ = $gauge$$5$$.$getOptions$().indicator, $indicatorLength_source$$30$$ = D.$DvtDialGaugeRenderer$$.$_getIndicatorLength$($gauge$$5$$, $bounds$$79$$), $heightRes$$1_shape$$51$$ = (0,D.$DvtAgent$isTouchDevice$$)() ? 2 * $indicatorLength_source$$30$$ : $indicatorLength_source$$30$$, $refWidth$$1$$, $refHeight$$1$$, $images$$11$$ = $indicatorOptions$$.images;
  if($images$$11$$ && 0 < $images$$11$$.length) {
    for(var $i$$610$$ = 0;$i$$610$$ < $images$$11$$.length;$i$$610$$++) {
      var $height$$81_image$$12$$ = $images$$11$$[$i$$610$$], $indicatorLength_source$$30$$ = $height$$81_image$$12$$.src, $width$$87$$ = $height$$81_image$$12$$.width, $height$$81_image$$12$$ = $height$$81_image$$12$$.height, $isSvg$$1$$ = $indicatorLength_source$$30$$ && -1 < $indicatorLength_source$$30$$.search(".svg");
      0 == $i$$610$$ && ($refWidth$$1$$ = $width$$87$$, $refHeight$$1$$ = $height$$81_image$$12$$);
      if($isSvg$$1$$ || $height$$81_image$$12$$ >= $heightRes$$1_shape$$51$$ || $i$$610$$ == $images$$11$$.length - 1) {
        return $heightRes$$1_shape$$51$$ = new D.$DvtImage$$($gauge$$5$$.$getCtx$(), $indicatorLength_source$$30$$, 0, 0, $width$$87$$, $height$$81_image$$12$$), $isSvg$$1$$ && (0,D.$DvtAgent$isPlatformWebkit$$)() && D.$DvtImageLoader$$.$loadImage$($gauge$$5$$.$getCtx$(), $indicatorLength_source$$30$$, D.$DvtObj$$.$createCallback$($heightRes$$1_shape$$51$$, $heightRes$$1_shape$$51$$.$__setDimensions$)) && ($heightRes$$1_shape$$51$$.$setWidth$($width$$87$$), $heightRes$$1_shape$$51$$.$setHeight$($height$$81_image$$12$$)), 
        !(0,window.isNaN)($indicatorOptions$$.anchorX) && !(0,window.isNaN)($indicatorOptions$$.anchorY) && ($indicatorOptions$$._anchorX = $indicatorOptions$$.anchorX * $width$$87$$ / $refWidth$$1$$, $indicatorOptions$$._anchorY = $indicatorOptions$$.anchorY * $height$$81_image$$12$$ / $refHeight$$1$$), $heightRes$$1_shape$$51$$
      }
    }
  }
  return D.$JSCompiler_alias_NULL$$
};
D.$DvtDialGaugeRenderer$$.$__getStartAngle$ = function $$DvtDialGaugeRenderer$$$$__getStartAngle$$($gauge$$6_startAngle$$10$$) {
  var $backgroundOptions$$2$$ = $gauge$$6_startAngle$$10$$.$getOptions$().background;
  $gauge$$6_startAngle$$10$$ = (0,D.$DvtAgent$isRightToLeft$$)($gauge$$6_startAngle$$10$$.$getCtx$()) ? 180 - $backgroundOptions$$2$$.startAngle : $backgroundOptions$$2$$.startAngle;
  return window.Math.PI * (90 - $gauge$$6_startAngle$$10$$) / 180
};
D.$DvtDialGaugeRenderer$$.$_getRotation$ = function $$DvtDialGaugeRenderer$$$$_getRotation$$($gauge$$7$$, $value$$166$$) {
  var $isRTL$$22_maxValue$$9_options$$127$$ = $gauge$$7$$.$getOptions$(), $backgroundOptions$$3$$ = $isRTL$$22_maxValue$$9_options$$127$$.background, $minValue$$10_ratio$$14$$ = $isRTL$$22_maxValue$$9_options$$127$$.min, $isRTL$$22_maxValue$$9_options$$127$$ = $isRTL$$22_maxValue$$9_options$$127$$.max;
  $value$$166$$ = window.Math.max(window.Math.min($value$$166$$, $isRTL$$22_maxValue$$9_options$$127$$), $minValue$$10_ratio$$14$$);
  $minValue$$10_ratio$$14$$ = ($value$$166$$ - $minValue$$10_ratio$$14$$) / ($isRTL$$22_maxValue$$9_options$$127$$ - $minValue$$10_ratio$$14$$);
  $isRTL$$22_maxValue$$9_options$$127$$ = (0,D.$DvtAgent$isRightToLeft$$)($gauge$$7$$.$getCtx$());
  return window.Math.PI * (90 - (($isRTL$$22_maxValue$$9_options$$127$$ ? 180 - $backgroundOptions$$3$$.startAngle : $backgroundOptions$$3$$.startAngle) - $minValue$$10_ratio$$14$$ * ($isRTL$$22_maxValue$$9_options$$127$$ ? -$backgroundOptions$$3$$.angleExtent : $backgroundOptions$$3$$.angleExtent))) / 180
};
D.$DvtDialGaugeRenderer$$.$_getBackgroundAnchorPoint$ = function $$DvtDialGaugeRenderer$$$$_getBackgroundAnchorPoint$$($gauge$$8$$, $bounds$$80$$) {
  var $anchorY_backgroundOptions$$4$$ = $gauge$$8$$.$getOptions$().background, $anchorX$$ = $anchorY_backgroundOptions$$4$$._anchorX, $anchorY_backgroundOptions$$4$$ = $anchorY_backgroundOptions$$4$$._anchorY;
  return!(0,window.isNaN)($anchorX$$) && !(0,window.isNaN)($anchorY_backgroundOptions$$4$$) ? new D.$DvtPoint$$($anchorX$$, $anchorY_backgroundOptions$$4$$) : new D.$DvtPoint$$($bounds$$80$$.x + $bounds$$80$$.$w$ / 2, $bounds$$80$$.y + $bounds$$80$$.$h$ / 2)
};
D.$DvtDialGaugeRenderer$$.$_getIndicatorLength$ = function $$DvtDialGaugeRenderer$$$$_getIndicatorLength$$($gauge$$9$$, $bounds$$81$$) {
  var $radius$$16$$ = window.Math.min($bounds$$81$$.$w$, $bounds$$81$$.$h$) / 2;
  return $gauge$$9$$.$getOptions$().background.indicatorLength * $radius$$16$$
};
D.$DvtDialGaugeRenderer$$.$_getIndicatorAnchorPoint$ = function $$DvtDialGaugeRenderer$$$$_getIndicatorAnchorPoint$$($gauge$$10$$, $indicatorBounds$$1$$) {
  var $anchorY$$1_indicatorOptions$$1$$ = $gauge$$10$$.$getOptions$().indicator, $anchorX$$1$$ = $anchorY$$1_indicatorOptions$$1$$._anchorX, $anchorY$$1_indicatorOptions$$1$$ = $anchorY$$1_indicatorOptions$$1$$._anchorY;
  return!(0,window.isNaN)($anchorX$$1$$) && !(0,window.isNaN)($anchorY$$1_indicatorOptions$$1$$) ? new D.$DvtPoint$$($anchorX$$1$$, $anchorY$$1_indicatorOptions$$1$$) : new D.$DvtPoint$$($indicatorBounds$$1$$.x + $indicatorBounds$$1$$.$w$ / 2, $indicatorBounds$$1$$.y + $indicatorBounds$$1$$.$h$)
};
D.$DvtDialGaugeRenderer$$.$_getIndicatorScaleFactor$ = function $$DvtDialGaugeRenderer$$$$_getIndicatorScaleFactor$$($gauge$$11$$, $bounds$$83$$, $indicatorBounds$$2$$) {
  return D.$DvtDialGaugeRenderer$$.$_getIndicatorLength$($gauge$$11$$, $bounds$$83$$) / $indicatorBounds$$2$$.$h$
};
D.$DvtDialGaugeRenderer$$.$_renderLabel$ = function $$DvtDialGaugeRenderer$$$$_renderLabel$$($gauge$$12$$, $container$$96$$, $bounds$$84$$) {
  var $options$$128_size$$31$$ = $gauge$$12$$.$getOptions$();
  if("on" == $options$$128_size$$31$$.metricLabel.rendered) {
    var $labelString$$2$$ = D.$DvtGaugeRenderer$$.$getFormattedMetricLabel$($options$$128_size$$31$$.value, $gauge$$12$$), $minString$$ = D.$DvtGaugeRenderer$$.$getFormattedMetricLabel$($options$$128_size$$31$$.min, $gauge$$12$$), $maxString$$ = D.$DvtGaugeRenderer$$.$getFormattedMetricLabel$($options$$128_size$$31$$.max, $gauge$$12$$), $cx$$44_label$$54$$ = $bounds$$84$$.x + $bounds$$84$$.$w$ / 2, $cy$$45$$ = $bounds$$84$$.y + $bounds$$84$$.$h$ / 2, $labelWidth$$5$$ = $bounds$$84$$.$w$, $labelHeight$$2$$ = 
    $bounds$$84$$.$h$, $metricLabelBounds$$ = $options$$128_size$$31$$.background._metricLabelBounds;
    $metricLabelBounds$$ && ($cx$$44_label$$54$$ = $metricLabelBounds$$.x + $metricLabelBounds$$.width / 2, $cy$$45$$ = $metricLabelBounds$$.y + $metricLabelBounds$$.height / 2, $bounds$$84$$.$w$ = $metricLabelBounds$$.width, $bounds$$84$$.$h$ = $metricLabelBounds$$.height);
    $cx$$44_label$$54$$ = new D.$DvtOutputText$$($gauge$$12$$.$getCtx$(), $labelString$$2$$, $cx$$44_label$$54$$, $cy$$45$$);
    !$options$$128_size$$31$$.metricLabel.style.$getStyle$("color") && $options$$128_size$$31$$.background._isDark && $options$$128_size$$31$$.metricLabel.style.$setStyle$("color", "#CCCCCC");
    $cx$$44_label$$54$$.$setCSSStyle$($options$$128_size$$31$$.metricLabel.style);
    $options$$128_size$$31$$ = ($options$$128_size$$31$$ = (0,window.parseInt)($options$$128_size$$31$$.metricLabel.style.$getFontSize$())) ? (0,window.parseInt)($options$$128_size$$31$$) : D.$JSCompiler_alias_NULL$$;
    $options$$128_size$$31$$ || ($options$$128_size$$31$$ = D.$DvtGaugeRenderer$$.$calcLabelFontSize$([$labelString$$2$$, $minString$$, $maxString$$], $cx$$44_label$$54$$, $bounds$$84$$), $cx$$44_label$$54$$.$setTextString$($labelString$$2$$), $cx$$44_label$$54$$.$setFontSize$($options$$128_size$$31$$));
    $cx$$44_label$$54$$.$alignCenter$();
    $cx$$44_label$$54$$.$alignMiddle$();
    D.$DvtTextUtils$$.$fitText$($cx$$44_label$$54$$, $labelWidth$$5$$, $labelHeight$$2$$, $container$$96$$) && ($gauge$$12$$.$__label$ = $cx$$44_label$$54$$)
  }
};
D.$DvtDialGaugeRenderer$$.$_renderTickLabels$ = function $$DvtDialGaugeRenderer$$$$_renderTickLabels$$($gauge$$13$$, $container$$97$$, $bounds$$85$$) {
  var $options$$129$$ = $gauge$$13$$.$getOptions$(), $isRTL$$23$$ = (0,D.$DvtAgent$isRightToLeft$$)($gauge$$13$$.$getCtx$());
  if($options$$129$$.background.radius && $options$$129$$.background.majorTickCount) {
    var $radius$$17$$ = $options$$129$$.background._radius, $minValue$$11$$ = $options$$129$$.min, $maxValue$$10$$ = $options$$129$$.max, $majorTickCount$$1$$ = $options$$129$$.background.majorTickCount, $fontSize$$11$$ = 12, $labelBounds$$7$$ = new D.$DvtRectangle$$($cx$$45_labelValue$$, $angleRads$$10_cy$$46$$, $bounds$$85$$.$w$, $bounds$$85$$.$h$), $style$$92_x$$200$$ = $options$$129$$.metricLabel.style.$getStyle$("font-size");
    $options$$129$$.background._tickLabelHeight && !$style$$92_x$$200$$ && ($labelBounds$$7$$.$h$ = $options$$129$$.background._tickLabelHeight);
    $options$$129$$.background._tickLabelWidth && !$style$$92_x$$200$$ && ($labelBounds$$7$$.$w$ = $options$$129$$.background._tickLabelWidth);
    if(!$style$$92_x$$200$$) {
      var $label$$55_labelString$$3$$ = new D.$DvtOutputText$$($gauge$$13$$.$getCtx$(), "", $cx$$45_labelValue$$, $angleRads$$10_cy$$46$$), $fontSize$$11$$ = D.$DvtGaugeRenderer$$.$calcLabelFontSize$([D.$DvtGaugeRenderer$$.$formatTickLabelValue$($options$$129$$.max, $gauge$$13$$), D.$DvtGaugeRenderer$$.$formatTickLabelValue$($options$$129$$.min, $gauge$$13$$)], $label$$55_labelString$$3$$, $labelBounds$$7$$)
    }
    for($style$$92_x$$200$$ = 0;$style$$92_x$$200$$ < $majorTickCount$$1$$;$style$$92_x$$200$$++) {
      var $cx$$45_labelValue$$ = $minValue$$11$$ + window.Math.abs($maxValue$$10$$ - $minValue$$11$$) * $style$$92_x$$200$$ / ($majorTickCount$$1$$ - 1);
      $isRTL$$23$$ && ($cx$$45_labelValue$$ = $minValue$$11$$ + window.Math.abs($maxValue$$10$$ - $minValue$$11$$) * ($majorTickCount$$1$$ - 1 - $style$$92_x$$200$$) / ($majorTickCount$$1$$ - 1));
      var $label$$55_labelString$$3$$ = D.$DvtGaugeRenderer$$.$formatTickLabelValue$($cx$$45_labelValue$$, $gauge$$13$$), $angleRads$$10_cy$$46$$ = D.$DvtDialGaugeRenderer$$.$_getRotation$($gauge$$13$$, $cx$$45_labelValue$$), $anchor$$7$$ = D.$DvtDialGaugeRenderer$$.$_getBackgroundAnchorPoint$($gauge$$13$$, $bounds$$85$$), $cx$$45_labelValue$$ = $anchor$$7$$.x + $radius$$17$$ * window.Math.cos($angleRads$$10_cy$$46$$ - window.Math.PI / 2), $angleRads$$10_cy$$46$$ = $anchor$$7$$.y + $radius$$17$$ * 
      window.Math.sin($angleRads$$10_cy$$46$$ - window.Math.PI / 2), $label$$55_labelString$$3$$ = new D.$DvtOutputText$$($gauge$$13$$.$getCtx$(), $label$$55_labelString$$3$$, $cx$$45_labelValue$$, $angleRads$$10_cy$$46$$);
      !$options$$129$$.tickLabel.style.$getStyle$("color") && $options$$129$$.background._isDark && $options$$129$$.tickLabel.style.$setStyle$("color", "#CCCCCC");
      $label$$55_labelString$$3$$.$setCSSStyle$($options$$129$$.tickLabel.style);
      $options$$129$$.tickLabel.style.$getStyle$("font-size") || $label$$55_labelString$$3$$.$setFontSize$($fontSize$$11$$);
      $label$$55_labelString$$3$$.$alignCenter$();
      $label$$55_labelString$$3$$.$alignMiddle$();
      D.$DvtTextUtils$$.$fitText$($label$$55_labelString$$3$$, $labelBounds$$7$$.$w$ + 0.5, $labelBounds$$7$$.$h$ + 0.5, $container$$97$$)
    }
  }
};
D.$DvtDialGaugeIndicator$$ = function $$DvtDialGaugeIndicator$$$($context$$383$$) {
  this.Init($context$$383$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtDialGaugeIndicator$$, D.$DvtContainer$$, "DvtDialGaugeIndicator");
D.$DvtDialGaugeIndicator$$.prototype.$setAngle$ = function $$DvtDialGaugeIndicator$$$$$setAngle$$($angleRads$$8$$) {
  var $mat$$42$$ = new D.$DvtMatrix$$;
  $mat$$42$$.rotate($angleRads$$8$$);
  this.$setMatrix$($mat$$42$$);
  this.$_angleRads$ = $angleRads$$8$$
};
D.$DvtDialGaugeIndicator$$.prototype.$getAnimationParams$ = function $$DvtDialGaugeIndicator$$$$$getAnimationParams$$() {
  return[this.$_angleRads$]
};
D.$DvtDialGaugeIndicator$$.prototype.$setAnimationParams$ = function $$DvtDialGaugeIndicator$$$$$setAnimationParams$$($params$$32$$) {
  $params$$32$$ && 1 == $params$$32$$.length && this.$setAngle$($params$$32$$[0])
};
D.$DvtRatingGauge$$ = (0,D.$JSCompiler_emptyFn$$)();
(0,D.$goog$exportPath_$$)("DvtRatingGauge", D.$DvtRatingGauge$$);
D.$DvtObj$$.$createSubclass$(D.$DvtRatingGauge$$, D.$DvtGauge$$, "DvtRatingGauge");
D.$DvtRatingGauge$$.newInstance = function $$DvtRatingGauge$$$newInstance$($context$$389$$, $callback$$106$$, $callbackObj$$62$$) {
  var $gauge$$44$$ = new D.$DvtRatingGauge$$;
  $gauge$$44$$.Init($context$$389$$, $callback$$106$$, $callbackObj$$62$$);
  return $gauge$$44$$
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtRatingGauge$$.prototype;
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($context$$390$$, $callback$$107$$, $callbackObj$$63$$) {
  D.$DvtRatingGauge$$.$superclass$.Init.call(this, $context$$390$$, $callback$$107$$, $callbackObj$$63$$);
  this.$Defaults$ = new D.$DvtRatingGaugeDefaults$$
};
D.$JSCompiler_prototypeAlias$$.$SetOptions$ = function $$JSCompiler_prototypeAlias$$$$SetOptions$$($options$$157$$) {
  D.$DvtRatingGauge$$.$superclass$.$SetOptions$.call(this, this.$Defaults$.$calcOptions$($options$$157$$))
};
D.$JSCompiler_prototypeAlias$$.$Render$ = function $$JSCompiler_prototypeAlias$$$$Render$$($container$$116$$, $width$$94$$, $height$$87$$) {
  var $outerGap$$2$$ = this.$getOptions$().__layout.outerGap, $maxValue$$12$$ = this.$Options$.max, $isVert$$6$$ = "vertical" == this.$Options$.orientation;
  this.$_size$ = $isVert$$6$$ ? window.Math.min($width$$94$$ - 2 * $outerGap$$2$$, ($height$$87$$ - 2 * $outerGap$$2$$) / $maxValue$$12$$) : window.Math.min($height$$87$$ - 2 * $outerGap$$2$$, ($width$$94$$ - 2 * $outerGap$$2$$) / $maxValue$$12$$);
  this.$_bounds$ = $isVert$$6$$ ? new D.$DvtRectangle$$($outerGap$$2$$, (this.$Height$ - this.$_size$ * $maxValue$$12$$) / 2, this.$Width$ - 2 * $outerGap$$2$$, this.$_size$ * $maxValue$$12$$) : new D.$DvtRectangle$$((this.$Width$ - this.$_size$ * $maxValue$$12$$) / 2, $outerGap$$2$$, this.$_size$ * $maxValue$$12$$, this.$Height$ - 2 * $outerGap$$2$$);
  D.$DvtRatingGaugeRenderer$$.$render$(this, $container$$116$$, $width$$94$$, $height$$87$$)
};
D.$JSCompiler_prototypeAlias$$.$__getLogicalObject$ = function $$JSCompiler_prototypeAlias$$$$__getLogicalObject$$() {
  return new D.$DvtRatingGaugePeer$$(this)
};
D.$JSCompiler_prototypeAlias$$.$GetValueAt$ = function $$JSCompiler_prototypeAlias$$$$GetValueAt$$($x$$205$$, $y$$179$$) {
  if(D.$DvtGaugeDataUtils$$.$hasData$(this)) {
    if("vertical" == this.$Options$.orientation) {
      $y$$179$$ = window.Math.max(window.Math.min($y$$179$$, this.$_bounds$.y + this.$_bounds$.$h$), this.$_bounds$.y), $val$$71$$ = window.Math.max((this.$_bounds$.y + this.$_bounds$.$h$ - $y$$179$$) / this.$_size$, this.$Options$.min)
    }else {
      $x$$205$$ = window.Math.max(window.Math.min($x$$205$$, this.$_bounds$.x + this.$_bounds$.$w$), this.$_bounds$.x);
      var $val$$71$$ = 0, $val$$71$$ = (0,D.$DvtAgent$isRightToLeft$$)(this.$getCtx$()) ? window.Math.max((this.$_bounds$.x + this.$_bounds$.$w$ - $x$$205$$) / this.$_size$, this.$Options$.min) : window.Math.max(($x$$205$$ - this.$_bounds$.x) / this.$_size$, this.$Options$.min)
    }
    return D.$DvtGaugeRenderer$$.$adjustForStep$(this.$Options$, $val$$71$$)
  }
  return D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.$__processValueChangeStart$ = function $$JSCompiler_prototypeAlias$$$$__processValueChangeStart$$($x$$207$$, $y$$181$$) {
  this.$__processValueChangeMove$($x$$207$$, $y$$181$$)
};
D.$JSCompiler_prototypeAlias$$.$__processValueChangeMove$ = function $$JSCompiler_prototypeAlias$$$$__processValueChangeMove$$($x$$208$$, $y$$182$$) {
  var $value$$176$$ = this.$GetValueAt$($x$$208$$, $y$$182$$);
  (0,D.$JSCompiler_StaticMethods___updateClipRects$$)(this, $value$$176$$, "hover");
  this.$__dispatchEvent$(new D.$DvtValueChangeEvent$$(this.$Options$.value, $value$$176$$, D.$JSCompiler_alias_FALSE$$))
};
D.$JSCompiler_prototypeAlias$$.$__processValueChangeEnd$ = function $$JSCompiler_prototypeAlias$$$$__processValueChangeEnd$$($x$$209$$, $y$$183$$) {
  var $oldValue$$5$$ = this.$Options$.value;
  this.$Options$.value = this.$GetValueAt$($x$$209$$, $y$$183$$);
  this.$Options$.changed = D.$JSCompiler_alias_TRUE$$;
  this.$render$();
  this.$__dispatchEvent$(new D.$DvtValueChangeEvent$$($oldValue$$5$$, this.$Options$.value, D.$JSCompiler_alias_FALSE$$));
  this.$__dispatchEvent$(new D.$DvtValueChangeEvent$$($oldValue$$5$$, this.$Options$.value, D.$JSCompiler_alias_TRUE$$))
};
D.$JSCompiler_StaticMethods___updateClipRects$$ = function $$JSCompiler_StaticMethods___updateClipRects$$$($JSCompiler_StaticMethods___updateClipRects$self$$, $value$$177$$, $hoverClip_proc_selContainer_unselContainer$$, $container$$117$$) {
  if(D.$DvtGaugeDataUtils$$.$hasData$($JSCompiler_StaticMethods___updateClipRects$self$$)) {
    $container$$117$$ || ($container$$117$$ = $JSCompiler_StaticMethods___updateClipRects$self$$.$_container$);
    var $isRTL$$24_selClip_unselClip$$ = (0,D.$DvtAgent$isRightToLeft$$)($JSCompiler_StaticMethods___updateClipRects$self$$.$getCtx$()), $isVert$$7$$ = "vertical" == $JSCompiler_StaticMethods___updateClipRects$self$$.$Options$.orientation;
    $value$$177$$ = window.Math.max(window.Math.min($value$$177$$, $JSCompiler_StaticMethods___updateClipRects$self$$.$Options$.max), 0);
    var $a$$56_hoverContainer$$ = 0, $b$$41$$ = $value$$177$$ * $JSCompiler_StaticMethods___updateClipRects$self$$.$_size$, $c$$23$$ = $value$$177$$ * $JSCompiler_StaticMethods___updateClipRects$self$$.$_size$;
    "render" == $hoverClip_proc_selContainer_unselContainer$$ && ($a$$56_hoverContainer$$ = $value$$177$$ * $JSCompiler_StaticMethods___updateClipRects$self$$.$_size$, $b$$41$$ = 0);
    $isVert$$7$$ ? ($hoverClip_proc_selContainer_unselContainer$$ = $container$$117$$.$getChildAt$(0), $isRTL$$24_selClip_unselClip$$ = new D.$DvtClipPath$$("unsel" + $JSCompiler_StaticMethods___updateClipRects$self$$.getId()), (0,D.$JSCompiler_StaticMethods_addRect$$)($isRTL$$24_selClip_unselClip$$, $JSCompiler_StaticMethods___updateClipRects$self$$.$_bounds$.x, $JSCompiler_StaticMethods___updateClipRects$self$$.$_bounds$.y, $JSCompiler_StaticMethods___updateClipRects$self$$.$_bounds$.$w$, $JSCompiler_StaticMethods___updateClipRects$self$$.$_bounds$.$h$ - 
    $c$$23$$), (0,D.$JSCompiler_StaticMethods_setClipPath$$)($hoverClip_proc_selContainer_unselContainer$$, $isRTL$$24_selClip_unselClip$$), $hoverClip_proc_selContainer_unselContainer$$ = $container$$117$$.$getChildAt$(1), $isRTL$$24_selClip_unselClip$$ = new D.$DvtClipPath$$("sel" + $JSCompiler_StaticMethods___updateClipRects$self$$.getId()), (0,D.$JSCompiler_StaticMethods_addRect$$)($isRTL$$24_selClip_unselClip$$, $JSCompiler_StaticMethods___updateClipRects$self$$.$_bounds$.x, $JSCompiler_StaticMethods___updateClipRects$self$$.$_bounds$.y + 
    $JSCompiler_StaticMethods___updateClipRects$self$$.$_bounds$.$h$ - $a$$56_hoverContainer$$, $JSCompiler_StaticMethods___updateClipRects$self$$.$_bounds$.$w$, $a$$56_hoverContainer$$), (0,D.$JSCompiler_StaticMethods_setClipPath$$)($hoverClip_proc_selContainer_unselContainer$$, $isRTL$$24_selClip_unselClip$$), $a$$56_hoverContainer$$ = $container$$117$$.$getChildAt$(2), $hoverClip_proc_selContainer_unselContainer$$ = new D.$DvtClipPath$$("hover" + $JSCompiler_StaticMethods___updateClipRects$self$$.getId()), 
    (0,D.$JSCompiler_StaticMethods_addRect$$)($hoverClip_proc_selContainer_unselContainer$$, $JSCompiler_StaticMethods___updateClipRects$self$$.$_bounds$.x, $JSCompiler_StaticMethods___updateClipRects$self$$.$_bounds$.y + $JSCompiler_StaticMethods___updateClipRects$self$$.$_bounds$.$h$ - $b$$41$$, $JSCompiler_StaticMethods___updateClipRects$self$$.$_bounds$.$w$, $b$$41$$)) : $isRTL$$24_selClip_unselClip$$ ? ($hoverClip_proc_selContainer_unselContainer$$ = $container$$117$$.$getChildAt$(0), $isRTL$$24_selClip_unselClip$$ = 
    new D.$DvtClipPath$$("unsel" + $JSCompiler_StaticMethods___updateClipRects$self$$.getId()), (0,D.$JSCompiler_StaticMethods_addRect$$)($isRTL$$24_selClip_unselClip$$, $JSCompiler_StaticMethods___updateClipRects$self$$.$_bounds$.x, $JSCompiler_StaticMethods___updateClipRects$self$$.$_bounds$.y, $JSCompiler_StaticMethods___updateClipRects$self$$.$_bounds$.$w$ - $c$$23$$, $JSCompiler_StaticMethods___updateClipRects$self$$.$_bounds$.$h$), (0,D.$JSCompiler_StaticMethods_setClipPath$$)($hoverClip_proc_selContainer_unselContainer$$, 
    $isRTL$$24_selClip_unselClip$$), $hoverClip_proc_selContainer_unselContainer$$ = $container$$117$$.$getChildAt$(1), $isRTL$$24_selClip_unselClip$$ = new D.$DvtClipPath$$("sel" + $JSCompiler_StaticMethods___updateClipRects$self$$.getId()), (0,D.$JSCompiler_StaticMethods_addRect$$)($isRTL$$24_selClip_unselClip$$, $JSCompiler_StaticMethods___updateClipRects$self$$.$_bounds$.x + $JSCompiler_StaticMethods___updateClipRects$self$$.$_bounds$.$w$ - $c$$23$$, $JSCompiler_StaticMethods___updateClipRects$self$$.$_bounds$.y, 
    $a$$56_hoverContainer$$, $JSCompiler_StaticMethods___updateClipRects$self$$.$_bounds$.$h$), (0,D.$JSCompiler_StaticMethods_setClipPath$$)($hoverClip_proc_selContainer_unselContainer$$, $isRTL$$24_selClip_unselClip$$), $a$$56_hoverContainer$$ = $container$$117$$.$getChildAt$(2), $hoverClip_proc_selContainer_unselContainer$$ = new D.$DvtClipPath$$("hover" + $JSCompiler_StaticMethods___updateClipRects$self$$.getId()), (0,D.$JSCompiler_StaticMethods_addRect$$)($hoverClip_proc_selContainer_unselContainer$$, 
    $JSCompiler_StaticMethods___updateClipRects$self$$.$_bounds$.x + $JSCompiler_StaticMethods___updateClipRects$self$$.$_bounds$.$w$ - $c$$23$$, $JSCompiler_StaticMethods___updateClipRects$self$$.$_bounds$.y, $b$$41$$, $JSCompiler_StaticMethods___updateClipRects$self$$.$_bounds$.$h$)) : ($hoverClip_proc_selContainer_unselContainer$$ = $container$$117$$.$getChildAt$(0), $isRTL$$24_selClip_unselClip$$ = new D.$DvtClipPath$$("unsel" + $JSCompiler_StaticMethods___updateClipRects$self$$.getId()), (0,D.$JSCompiler_StaticMethods_addRect$$)($isRTL$$24_selClip_unselClip$$, 
    $JSCompiler_StaticMethods___updateClipRects$self$$.$_bounds$.x + $c$$23$$, $JSCompiler_StaticMethods___updateClipRects$self$$.$_bounds$.y, $JSCompiler_StaticMethods___updateClipRects$self$$.$_bounds$.$w$ - $c$$23$$, $JSCompiler_StaticMethods___updateClipRects$self$$.$_bounds$.$h$), (0,D.$JSCompiler_StaticMethods_setClipPath$$)($hoverClip_proc_selContainer_unselContainer$$, $isRTL$$24_selClip_unselClip$$), $hoverClip_proc_selContainer_unselContainer$$ = $container$$117$$.$getChildAt$(1), $isRTL$$24_selClip_unselClip$$ = 
    new D.$DvtClipPath$$("sel" + $JSCompiler_StaticMethods___updateClipRects$self$$.getId()), (0,D.$JSCompiler_StaticMethods_addRect$$)($isRTL$$24_selClip_unselClip$$, $JSCompiler_StaticMethods___updateClipRects$self$$.$_bounds$.x, $JSCompiler_StaticMethods___updateClipRects$self$$.$_bounds$.y, $a$$56_hoverContainer$$, $JSCompiler_StaticMethods___updateClipRects$self$$.$_bounds$.$h$), (0,D.$JSCompiler_StaticMethods_setClipPath$$)($hoverClip_proc_selContainer_unselContainer$$, $isRTL$$24_selClip_unselClip$$), 
    $a$$56_hoverContainer$$ = $container$$117$$.$getChildAt$(2), $hoverClip_proc_selContainer_unselContainer$$ = new D.$DvtClipPath$$("hover" + $JSCompiler_StaticMethods___updateClipRects$self$$.getId()), (0,D.$JSCompiler_StaticMethods_addRect$$)($hoverClip_proc_selContainer_unselContainer$$, $JSCompiler_StaticMethods___updateClipRects$self$$.$_bounds$.x, $JSCompiler_StaticMethods___updateClipRects$self$$.$_bounds$.y, $b$$41$$, $JSCompiler_StaticMethods___updateClipRects$self$$.$_bounds$.$h$));
    (0,D.$JSCompiler_StaticMethods_setClipPath$$)($a$$56_hoverContainer$$, $hoverClip_proc_selContainer_unselContainer$$);
    (0,D.$JSCompiler_StaticMethods_UpdateAriaLiveValue$$)($JSCompiler_StaticMethods___updateClipRects$self$$, $container$$117$$, $value$$177$$)
  }
};
D.$DvtRatingGauge$$.prototype.$CreateEventManager$ = function $$DvtRatingGauge$$$$$CreateEventManager$$() {
  return new D.$DvtRatingGaugeEventManager$$(this)
};
D.$DvtRatingGaugeDefaults$$ = function $$DvtRatingGaugeDefaults$$$() {
  this.Init({skyros:D.$DvtRatingGaugeDefaults$VERSION_1$$, alta:D.$DvtRatingGaugeDefaults$SKIN_ALTA$$})
};
D.$DvtObj$$.$createSubclass$(D.$DvtRatingGaugeDefaults$$, D.$DvtGaugeDefaults$$, "DvtRatingGaugeDefaults");
D.$DvtRatingGaugeDefaults$SKIN_ALTA$$ = {unselectedState:{shape:"star", color:"#C4CED7", borderColor:D.$JSCompiler_alias_NULL$$}, selectedState:{shape:"star", color:"#F8C15A", borderColor:D.$JSCompiler_alias_NULL$$}, hoverState:{shape:"star", color:"#007CC8", borderColor:D.$JSCompiler_alias_NULL$$}, changedState:{shape:"star", color:"#ED2C02", borderColor:D.$JSCompiler_alias_NULL$$}};
D.$DvtRatingGaugeDefaults$VERSION_1$$ = {min:0, max:5, orientation:"horizontal", unselectedState:{shape:"star", color:"#F2F2F2", borderColor:"#B6B6B6"}, selectedState:{shape:"star", color:"#F8C15A", borderColor:"#F5A700"}, hoverState:{shape:"star", color:"#66A7DA", borderColor:"#4A86C5"}, changedState:{shape:"star", color:"#F8C15A", borderColor:"#959595"}, step:1};
D.$DvtRatingGaugePeer$$ = function $$DvtRatingGaugePeer$$$($gauge$$46$$) {
  this.Init();
  this.$_gauge$ = $gauge$$46$$
};
D.$DvtObj$$.$createSubclass$(D.$DvtRatingGaugePeer$$, D.$DvtSimpleObjPeer$$, "DvtRatingGaugePeer");
D.$DvtRatingGaugePeer$$.prototype.$getDatatip$ = function $$DvtRatingGaugePeer$$$$$getDatatip$$($options$$158_target$$117$$, $threshold$$11_thresholdIndex$$5_x$$210$$, $y$$184$$) {
  $options$$158_target$$117$$ = this.$_gauge$.$getOptions$();
  $threshold$$11_thresholdIndex$$5_x$$210$$ = this.$_gauge$.$__getEventManager$().$IsMouseEditing$ ? D.$DvtGaugeDataUtils$$.$getValueThresholdIndex$(this.$_gauge$, this.$_gauge$.$GetValueAt$($threshold$$11_thresholdIndex$$5_x$$210$$, $y$$184$$)) : D.$DvtGaugeDataUtils$$.$getValueThresholdIndex$(this.$_gauge$);
  return($threshold$$11_thresholdIndex$$5_x$$210$$ = D.$DvtGaugeDataUtils$$.$getThreshold$(this.$_gauge$, $threshold$$11_thresholdIndex$$5_x$$210$$)) && $threshold$$11_thresholdIndex$$5_x$$210$$.shortDesc ? $threshold$$11_thresholdIndex$$5_x$$210$$.shortDesc : $options$$158_target$$117$$.shortDesc
};
D.$DvtRatingGaugeRenderer$$ = {};
D.$DvtObj$$.$createSubclass$(D.$DvtRatingGaugeRenderer$$, D.$DvtObj$$, "DvtRatingGaugeRenderer");
D.$DvtRatingGaugeRenderer$$.$render$ = function $$DvtRatingGaugeRenderer$$$$render$$($gauge$$47$$, $container$$118_i$$614$$, $bounds$$100_width$$95$$, $height$$88_threshold$$12_thresholdIndex$$6_unselectedOptions$$) {
  if(D.$DvtGaugeDataUtils$$.$hasData$($gauge$$47$$)) {
    var $options$$159$$ = $gauge$$47$$.$getOptions$(), $isRTL$$25$$ = (0,D.$DvtAgent$isRightToLeft$$)($gauge$$47$$.$getCtx$()), $isVert$$8$$ = "vertical" == $options$$159$$.orientation, $outerGap$$3_selectedColor_selectedOptions$$ = $options$$159$$.__layout.outerGap, $maxValue$$13$$ = $options$$159$$.max, $size$$35$$ = $isVert$$8$$ ? window.Math.min($bounds$$100_width$$95$$ - 2 * $outerGap$$3_selectedColor_selectedOptions$$, ($height$$88_threshold$$12_thresholdIndex$$6_unselectedOptions$$ - 2 * $outerGap$$3_selectedColor_selectedOptions$$) / 
    $maxValue$$13$$) : window.Math.min($height$$88_threshold$$12_thresholdIndex$$6_unselectedOptions$$ - 2 * $outerGap$$3_selectedColor_selectedOptions$$, ($bounds$$100_width$$95$$ - 2 * $outerGap$$3_selectedColor_selectedOptions$$) / $maxValue$$13$$);
    $bounds$$100_width$$95$$ = $isVert$$8$$ ? new D.$DvtRectangle$$($outerGap$$3_selectedColor_selectedOptions$$, ($height$$88_threshold$$12_thresholdIndex$$6_unselectedOptions$$ - $size$$35$$ * $maxValue$$13$$) / 2, $bounds$$100_width$$95$$ - 2 * $outerGap$$3_selectedColor_selectedOptions$$, $size$$35$$ * $maxValue$$13$$) : new D.$DvtRectangle$$(($bounds$$100_width$$95$$ - $size$$35$$ * $maxValue$$13$$) / 2, $outerGap$$3_selectedColor_selectedOptions$$, $size$$35$$ * $maxValue$$13$$, $height$$88_threshold$$12_thresholdIndex$$6_unselectedOptions$$ - 
    2 * $outerGap$$3_selectedColor_selectedOptions$$);
    $height$$88_threshold$$12_thresholdIndex$$6_unselectedOptions$$ = D.$DvtGaugeDataUtils$$.$getValueThresholdIndex$($gauge$$47$$);
    $height$$88_threshold$$12_thresholdIndex$$6_unselectedOptions$$ = D.$DvtGaugeDataUtils$$.$getThreshold$($gauge$$47$$, $height$$88_threshold$$12_thresholdIndex$$6_unselectedOptions$$);
    var $outerGap$$3_selectedColor_selectedOptions$$ = $options$$159$$.selectedState.color, $changedColor_changedOptions$$ = $options$$159$$.changedState.color, $selectedBorderColor_unselContainer$$1$$ = $options$$159$$.selectedState.borderColor, $changedBorderColor_hoverOptions$$ = $options$$159$$.changedState.borderColor;
    $height$$88_threshold$$12_thresholdIndex$$6_unselectedOptions$$ && $height$$88_threshold$$12_thresholdIndex$$6_unselectedOptions$$.color && ($changedColor_changedOptions$$ = $outerGap$$3_selectedColor_selectedOptions$$ = $height$$88_threshold$$12_thresholdIndex$$6_unselectedOptions$$.color);
    $height$$88_threshold$$12_thresholdIndex$$6_unselectedOptions$$ && $height$$88_threshold$$12_thresholdIndex$$6_unselectedOptions$$.borderColor && ($changedBorderColor_hoverOptions$$ = $selectedBorderColor_unselContainer$$1$$ = $height$$88_threshold$$12_thresholdIndex$$6_unselectedOptions$$.borderColor);
    $height$$88_threshold$$12_thresholdIndex$$6_unselectedOptions$$ = {value:0, type:$options$$159$$.unselectedState.shape, color:$options$$159$$.unselectedState.color, borderColor:$options$$159$$.unselectedState.borderColor, visualEffects:$options$$159$$.visualEffects};
    $outerGap$$3_selectedColor_selectedOptions$$ = {value:0, type:$options$$159$$.selectedState.shape, color:$outerGap$$3_selectedColor_selectedOptions$$, borderColor:$selectedBorderColor_unselContainer$$1$$, visualEffects:$options$$159$$.visualEffects};
    $changedColor_changedOptions$$ = {value:0, type:$options$$159$$.changedState.shape, color:$changedColor_changedOptions$$, borderColor:$changedBorderColor_hoverOptions$$, visualEffects:$options$$159$$.visualEffects};
    $changedBorderColor_hoverOptions$$ = {value:0, type:$options$$159$$.hoverState.shape, color:$options$$159$$.hoverState.color, borderColor:$options$$159$$.hoverState.borderColor, visualEffects:$options$$159$$.visualEffects};
    "dot" == $options$$159$$.unselectedState.shape && ($height$$88_threshold$$12_thresholdIndex$$6_unselectedOptions$$.type = "circle", $height$$88_threshold$$12_thresholdIndex$$6_unselectedOptions$$.visualEffects = "none", $height$$88_threshold$$12_thresholdIndex$$6_unselectedOptions$$.size = 0.05);
    $selectedBorderColor_unselContainer$$1$$ = new D.$DvtContainer$$($gauge$$47$$.$getCtx$());
    $container$$118_i$$614$$.$addChild$($selectedBorderColor_unselContainer$$1$$);
    var $selContainer$$1$$ = new D.$DvtContainer$$($gauge$$47$$.$getCtx$());
    $container$$118_i$$614$$.$addChild$($selContainer$$1$$);
    var $hoverContainer$$1$$ = new D.$DvtContainer$$($gauge$$47$$.$getCtx$());
    $container$$118_i$$614$$.$addChild$($hoverContainer$$1$$);
    (0,D.$JSCompiler_StaticMethods___updateClipRects$$)($gauge$$47$$, $options$$159$$.value, "render", $container$$118_i$$614$$);
    for($container$$118_i$$614$$ = 0;$container$$118_i$$614$$ < $maxValue$$13$$;$container$$118_i$$614$$++) {
      if("none" != $options$$159$$.unselectedState.shape) {
        var $changedLED_hoverLED_selectedLED_unselectedLED$$ = (0,D.$DvtLedGauge$newInstance$$)($gauge$$47$$.$getCtx$(), D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_TRUE$$);
        $selectedBorderColor_unselContainer$$1$$.$addChild$($changedLED_hoverLED_selectedLED_unselectedLED$$);
        $isVert$$8$$ ? (0,D.$JSCompiler_StaticMethods_setTranslate$$)($changedLED_hoverLED_selectedLED_unselectedLED$$, $bounds$$100_width$$95$$.x + $bounds$$100_width$$95$$.$w$ / 2 - $size$$35$$ / 2, $bounds$$100_width$$95$$.y + $bounds$$100_width$$95$$.$h$ - ($container$$118_i$$614$$ + 1) * $size$$35$$) : $isRTL$$25$$ ? (0,D.$JSCompiler_StaticMethods_setTranslate$$)($changedLED_hoverLED_selectedLED_unselectedLED$$, $bounds$$100_width$$95$$.x + $bounds$$100_width$$95$$.$w$ - ($container$$118_i$$614$$ + 
        1) * $size$$35$$, $bounds$$100_width$$95$$.y + $bounds$$100_width$$95$$.$h$ / 2 - $size$$35$$ / 2) : (0,D.$JSCompiler_StaticMethods_setTranslate$$)($changedLED_hoverLED_selectedLED_unselectedLED$$, $bounds$$100_width$$95$$.x + $container$$118_i$$614$$ * $size$$35$$, $bounds$$100_width$$95$$.y + $bounds$$100_width$$95$$.$h$ / 2 - $size$$35$$ / 2);
        $changedLED_hoverLED_selectedLED_unselectedLED$$.$render$($height$$88_threshold$$12_thresholdIndex$$6_unselectedOptions$$, $size$$35$$, $size$$35$$)
      }
      $options$$159$$.changed ? ($changedLED_hoverLED_selectedLED_unselectedLED$$ = (0,D.$DvtLedGauge$newInstance$$)($gauge$$47$$.$getCtx$(), D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_TRUE$$), $selContainer$$1$$.$addChild$($changedLED_hoverLED_selectedLED_unselectedLED$$), $isVert$$8$$ ? (0,D.$JSCompiler_StaticMethods_setTranslate$$)($changedLED_hoverLED_selectedLED_unselectedLED$$, $bounds$$100_width$$95$$.x + $bounds$$100_width$$95$$.$w$ / 2 - $size$$35$$ / 2, 
      $bounds$$100_width$$95$$.y + $bounds$$100_width$$95$$.$h$ - ($container$$118_i$$614$$ + 1) * $size$$35$$) : $isRTL$$25$$ ? (0,D.$JSCompiler_StaticMethods_setTranslate$$)($changedLED_hoverLED_selectedLED_unselectedLED$$, $bounds$$100_width$$95$$.x + $bounds$$100_width$$95$$.$w$ - ($container$$118_i$$614$$ + 1) * $size$$35$$, $bounds$$100_width$$95$$.y + $bounds$$100_width$$95$$.$h$ / 2 - $size$$35$$ / 2) : (0,D.$JSCompiler_StaticMethods_setTranslate$$)($changedLED_hoverLED_selectedLED_unselectedLED$$, 
      $bounds$$100_width$$95$$.x + $container$$118_i$$614$$ * $size$$35$$, $bounds$$100_width$$95$$.y + $bounds$$100_width$$95$$.$h$ / 2 - $size$$35$$ / 2), $changedLED_hoverLED_selectedLED_unselectedLED$$.$render$($changedColor_changedOptions$$, $size$$35$$, $size$$35$$)) : ($changedLED_hoverLED_selectedLED_unselectedLED$$ = (0,D.$DvtLedGauge$newInstance$$)($gauge$$47$$.$getCtx$(), D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_TRUE$$), $selContainer$$1$$.$addChild$($changedLED_hoverLED_selectedLED_unselectedLED$$), 
      $isVert$$8$$ ? (0,D.$JSCompiler_StaticMethods_setTranslate$$)($changedLED_hoverLED_selectedLED_unselectedLED$$, $bounds$$100_width$$95$$.x + $bounds$$100_width$$95$$.$w$ / 2 - $size$$35$$ / 2, $bounds$$100_width$$95$$.y + $bounds$$100_width$$95$$.$h$ - ($container$$118_i$$614$$ + 1) * $size$$35$$) : $isRTL$$25$$ ? (0,D.$JSCompiler_StaticMethods_setTranslate$$)($changedLED_hoverLED_selectedLED_unselectedLED$$, $bounds$$100_width$$95$$.x + $bounds$$100_width$$95$$.$w$ - ($container$$118_i$$614$$ + 
      1) * $size$$35$$, $bounds$$100_width$$95$$.y + $bounds$$100_width$$95$$.$h$ / 2 - $size$$35$$ / 2) : (0,D.$JSCompiler_StaticMethods_setTranslate$$)($changedLED_hoverLED_selectedLED_unselectedLED$$, $bounds$$100_width$$95$$.x + $container$$118_i$$614$$ * $size$$35$$, $bounds$$100_width$$95$$.y + $bounds$$100_width$$95$$.$h$ / 2 - $size$$35$$ / 2), $changedLED_hoverLED_selectedLED_unselectedLED$$.$render$($outerGap$$3_selectedColor_selectedOptions$$, $size$$35$$, $size$$35$$));
      $changedLED_hoverLED_selectedLED_unselectedLED$$ = (0,D.$DvtLedGauge$newInstance$$)($gauge$$47$$.$getCtx$(), D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_TRUE$$);
      $hoverContainer$$1$$.$addChild$($changedLED_hoverLED_selectedLED_unselectedLED$$);
      $isVert$$8$$ ? (0,D.$JSCompiler_StaticMethods_setTranslate$$)($changedLED_hoverLED_selectedLED_unselectedLED$$, $bounds$$100_width$$95$$.x + $bounds$$100_width$$95$$.$w$ / 2 - $size$$35$$ / 2, $bounds$$100_width$$95$$.y + $bounds$$100_width$$95$$.$h$ - ($container$$118_i$$614$$ + 1) * $size$$35$$) : $isRTL$$25$$ ? (0,D.$JSCompiler_StaticMethods_setTranslate$$)($changedLED_hoverLED_selectedLED_unselectedLED$$, $bounds$$100_width$$95$$.x + $bounds$$100_width$$95$$.$w$ - ($container$$118_i$$614$$ + 
      1) * $size$$35$$, $bounds$$100_width$$95$$.y + $bounds$$100_width$$95$$.$h$ / 2 - $size$$35$$ / 2) : (0,D.$JSCompiler_StaticMethods_setTranslate$$)($changedLED_hoverLED_selectedLED_unselectedLED$$, $bounds$$100_width$$95$$.x + $container$$118_i$$614$$ * $size$$35$$, $bounds$$100_width$$95$$.y + $bounds$$100_width$$95$$.$h$ / 2 - $size$$35$$ / 2);
      $changedLED_hoverLED_selectedLED_unselectedLED$$.$render$($changedBorderColor_hoverOptions$$, $size$$35$$, $size$$35$$)
    }
  }else {
    D.$DvtGaugeRenderer$$.$renderEmptyText$($gauge$$47$$, $container$$118_i$$614$$, new D.$DvtRectangle$$(0, 0, $bounds$$100_width$$95$$, $height$$88_threshold$$12_thresholdIndex$$6_unselectedOptions$$))
  }
};
D.$DvtRatingGaugeEventManager$$ = function $$DvtRatingGaugeEventManager$$$($gauge$$45$$) {
  this.Init($gauge$$45$$.$getCtx$(), $gauge$$45$$.$__dispatchEvent$, $gauge$$45$$);
  this.$_gauge$ = $gauge$$45$$
};
D.$DvtObj$$.$createSubclass$(D.$DvtRatingGaugeEventManager$$, D.$DvtGaugeEventManager$$, "DvtRatingGaugeEventManager");
D.$JSCompiler_prototypeAlias$$ = D.$DvtRatingGaugeEventManager$$.prototype;
D.$JSCompiler_prototypeAlias$$.$OnMouseOver$ = function $$JSCompiler_prototypeAlias$$$$OnMouseOver$$($event$$508$$) {
  if(this.$_gauge$.$getOptions$().readOnly === D.$JSCompiler_alias_FALSE$$) {
    var $coords$$31$$ = (0,D.$JSCompiler_StaticMethods_GetRelativePosition$$)(this, $event$$508$$.pageX, $event$$508$$.pageY);
    this.$_gauge$.$__processValueChangeStart$($coords$$31$$.x, $coords$$31$$.y);
    this.$IsMouseEditing$ = D.$JSCompiler_alias_TRUE$$
  }
  D.$DvtRatingGaugeEventManager$$.$superclass$.$OnMouseOver$.call(this, $event$$508$$)
};
D.$JSCompiler_prototypeAlias$$.$OnMouseOut$ = function $$JSCompiler_prototypeAlias$$$$OnMouseOut$$($event$$509$$) {
  if(this.$_gauge$.$getOptions$().readOnly === D.$JSCompiler_alias_FALSE$$) {
    (0,D.$JSCompiler_StaticMethods_GetRelativePosition$$)(this, $event$$509$$.pageX, $event$$509$$.pageY);
    var $JSCompiler_StaticMethods___processHoverEnd$self$$inline_6338$$ = this.$_gauge$;
    (0,D.$JSCompiler_StaticMethods___updateClipRects$$)($JSCompiler_StaticMethods___processHoverEnd$self$$inline_6338$$, $JSCompiler_StaticMethods___processHoverEnd$self$$inline_6338$$.$Options$.value, "render");
    $JSCompiler_StaticMethods___processHoverEnd$self$$inline_6338$$.$__dispatchEvent$(new D.$DvtValueChangeEvent$$($JSCompiler_StaticMethods___processHoverEnd$self$$inline_6338$$.$Options$.value, $JSCompiler_StaticMethods___processHoverEnd$self$$inline_6338$$.$Options$.value, D.$JSCompiler_alias_FALSE$$));
    this.$IsMouseEditing$ = D.$JSCompiler_alias_FALSE$$
  }
  D.$DvtRatingGaugeEventManager$$.$superclass$.$OnMouseOut$.call(this, $event$$509$$)
};
D.$JSCompiler_prototypeAlias$$.$OnMouseMove$ = function $$JSCompiler_prototypeAlias$$$$OnMouseMove$$($event$$510$$) {
  var $coords$$33$$ = (0,D.$JSCompiler_StaticMethods_GetRelativePosition$$)(this, $event$$510$$.pageX, $event$$510$$.pageY);
  this.$_gauge$.$getOptions$().readOnly === D.$JSCompiler_alias_FALSE$$ && (!this.$IsMouseEditing$ && this.$_gauge$.$getOptions$().value != this.$_gauge$.$GetValueAt$($coords$$33$$.x, $coords$$33$$.y)) && (this.$IsMouseEditing$ = D.$JSCompiler_alias_TRUE$$);
  D.$DvtRatingGaugeEventManager$$.$superclass$.$OnMouseMove$.call(this, $event$$510$$)
};
D.$JSCompiler_prototypeAlias$$.$OnMouseDown$ = function $$JSCompiler_prototypeAlias$$$$OnMouseDown$$($event$$511$$) {
  D.$DvtGaugeEventManager$$.$superclass$.$OnMouseDown$.call(this, $event$$511$$)
};
D.$JSCompiler_prototypeAlias$$.$ProcessKeyboardEvent$ = function $$JSCompiler_prototypeAlias$$$$ProcessKeyboardEvent$$($event$$512$$) {
  this.$IsMouseEditing$ = D.$JSCompiler_alias_FALSE$$;
  return D.$DvtRatingGaugeEventManager$$.$superclass$.$ProcessKeyboardEvent$.call(this, $event$$512$$)
};
D.$JSCompiler_prototypeAlias$$.$IsShowingTooltipWhileEditing$ = (0,D.$JSCompiler_returnArg$$)(D.$JSCompiler_alias_TRUE$$);

  return D;
});
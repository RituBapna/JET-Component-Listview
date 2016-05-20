/**
 * Copyright (c) 2014, Oracle and/or its affiliates.
 * All rights reserved.
 */
"use strict";
define(['./DvtToolkit'], function(dvt) {
  // Internal use only.  All APIs and functionality are subject to change at any time.
  
  // Map the D namespace to dvt, which is used to provide access across partitions.
  var D = dvt;
  
D.$DvtPictoChart$$ = function $$DvtPictoChart$$$($context$$554$$, $callback$$131$$, $callbackObj$$85$$) {
  this.Init($context$$554$$, $callback$$131$$, $callbackObj$$85$$)
};
(0,D.$goog$exportPath_$$)("DvtPictoChart", D.$DvtPictoChart$$);
D.$DvtObj$$.$createSubclass$(D.$DvtPictoChart$$, D.$DvtBaseComponent$$, "DvtPictoChart");
D.$DvtPictoChart$$.newInstance = function $$DvtPictoChart$$$newInstance$($context$$555$$, $callback$$132$$, $callbackObj$$86$$) {
  return new D.$DvtPictoChart$$($context$$555$$, $callback$$132$$, $callbackObj$$86$$)
};
D.$DvtPictoChart$$.prototype.Init = function $$DvtPictoChart$$$$Init$($context$$556$$, $callback$$133$$, $callbackObj$$87$$) {
  D.$DvtPictoChart$$.$superclass$.Init.call(this, $context$$556$$, $callback$$133$$, $callbackObj$$87$$);
  this.$EventManager$ = new D.$DvtPictoChartEventManager$$(this);
  this.$EventManager$.$addListeners$(this);
  (0,D.$DvtAgent$isTouchDevice$$)() || (0,D.$JSCompiler_StaticMethods_setKeyboardHandler$$)(this.$EventManager$, new D.$DvtPictoChartKeyboardHandler$$(this.$EventManager$));
  this.$Defaults$ = new D.$DvtPictoChartDefaults$$;
  this.$_items$ = []
};
D.$DvtPictoChart$$.prototype.$_getPreferredSize$ = function $$DvtPictoChart$$$$$_getPreferredSize$$($width$$143$$, $height$$131$$) {
  if(!$width$$143$$ || !$height$$131$$) {
    var $info$$18$$ = D.$DvtPictoChartRenderer$$.$getInfo$(this, $width$$143$$, $height$$131$$);
    this.$_info$ = $info$$18$$;
    $width$$143$$ || ($width$$143$$ = $info$$18$$.$items$ ? $info$$18$$.$colCount$ * $info$$18$$.$colWidth$ : 0);
    $height$$131$$ || ($height$$131$$ = $info$$18$$.$items$ ? $info$$18$$.$rowCount$ * $info$$18$$.$rowHeight$ : 0)
  }
  return new D.$DvtDimension$$($width$$143$$, $height$$131$$)
};
D.$DvtPictoChart$$.prototype.$render$ = function $$DvtPictoChart$$$$$render$$($animHandler_context$$inline_7855_options$$230$$, $bounds$$inline_7856_preferredSize$$6_width$$144$$, $height$$132_outerDivSize_playables$$inline_7857$$) {
  this.$_oldContainer$ = this.$_container$;
  var $JSCompiler_inline_result$$208_duration$$inline_7854_oldMarkers$$ = this.$_markers$, $oldWidth$$1$$ = this.$Width$ ? this.$Width$ : 0, $oldHeight$$1$$ = this.$Height$ ? this.$Height$ : 0;
  this.$EventManager$.$hideTooltip$();
  this.$_items$ = [];
  this.$_markers$ = [];
  this.$_info$ = D.$JSCompiler_alias_NULL$$;
  this.$_emptyText$ && (this.$_container$.removeChild(this.$_emptyText$), this.$_emptyText$ = D.$JSCompiler_alias_NULL$$);
  this.$_animation$ && this.$_animation$.stop();
  this.$SetOptions$($animHandler_context$$inline_7855_options$$230$$);
  var $context$$557$$ = this.$getCtx$();
  if(!$bounds$$inline_7856_preferredSize$$6_width$$144$$ && !$height$$132_outerDivSize_playables$$inline_7857$$) {
    if($context$$557$$.$_root$.style.display = "block", $bounds$$inline_7856_preferredSize$$6_width$$144$$ = this.$_getPreferredSize$(), D.$DvtToolkitUtils$$.$setSvgSize$($context$$557$$, $bounds$$inline_7856_preferredSize$$6_width$$144$$.$w$, $bounds$$inline_7856_preferredSize$$6_width$$144$$.$h$), $height$$132_outerDivSize_playables$$inline_7857$$ = D.$DvtToolkitUtils$$.$getOuterDivSize$($context$$557$$), $bounds$$inline_7856_preferredSize$$6_width$$144$$.$w$ == $height$$132_outerDivSize_playables$$inline_7857$$.$w$ && 
    $bounds$$inline_7856_preferredSize$$6_width$$144$$.$h$ != $height$$132_outerDivSize_playables$$inline_7857$$.$h$ ? (this.$Height$ = $height$$132_outerDivSize_playables$$inline_7857$$.$h$, $bounds$$inline_7856_preferredSize$$6_width$$144$$ = this.$_getPreferredSize$(D.$JSCompiler_alias_NULL$$, this.$Height$), D.$DvtToolkitUtils$$.$setSvgSize$($context$$557$$, $bounds$$inline_7856_preferredSize$$6_width$$144$$.$w$, this.$Height$), this.$Width$ = D.$DvtToolkitUtils$$.$getOuterDivSize$($context$$557$$).$w$) : 
    $bounds$$inline_7856_preferredSize$$6_width$$144$$.$w$ != $height$$132_outerDivSize_playables$$inline_7857$$.$w$ && $bounds$$inline_7856_preferredSize$$6_width$$144$$.$h$ == $height$$132_outerDivSize_playables$$inline_7857$$.$h$ ? (this.$Width$ = $height$$132_outerDivSize_playables$$inline_7857$$.$w$, $bounds$$inline_7856_preferredSize$$6_width$$144$$ = this.$_getPreferredSize$(this.$Width$, D.$JSCompiler_alias_NULL$$), D.$DvtToolkitUtils$$.$setSvgSize$($context$$557$$, this.$Width$, $bounds$$inline_7856_preferredSize$$6_width$$144$$.$h$), 
    this.$Height$ = D.$DvtToolkitUtils$$.$getOuterDivSize$($context$$557$$).$h$) : (this.$Width$ = $height$$132_outerDivSize_playables$$inline_7857$$.$w$, this.$Height$ = $height$$132_outerDivSize_playables$$inline_7857$$.$h$), this.$Width$ != $bounds$$inline_7856_preferredSize$$6_width$$144$$.$w$ || this.$Height$ != $bounds$$inline_7856_preferredSize$$6_width$$144$$.$h$) {
      this.$_info$ = D.$JSCompiler_alias_NULL$$
    }
  }else {
    this.$Width$ = $bounds$$inline_7856_preferredSize$$6_width$$144$$, this.$Height$ = $height$$132_outerDivSize_playables$$inline_7857$$
  }
  this.$_container$ = new D.$DvtContainer$$($context$$557$$);
  this.$addChild$(this.$_container$);
  D.$DvtPictoChartRenderer$$.$render$(this, this.$_container$, new D.$DvtRectangle$$(0, 0, this.$Width$, this.$Height$), this.$_info$);
  if(this.$_oldContainer$) {
    "none" != this.$Options$.animationOnDataChange && $animHandler_context$$inline_7855_options$$230$$ && ($animHandler_context$$inline_7855_options$$230$$ = new D.$DvtDataAnimationHandler$$($context$$557$$, D.$JSCompiler_alias_NULL$$), (0,D.$JSCompiler_StaticMethods_constructAnimation$$)($animHandler_context$$inline_7855_options$$230$$, $JSCompiler_inline_result$$208_duration$$inline_7854_oldMarkers$$, this.$_markers$), this.$_animation$ = $animHandler_context$$inline_7855_options$$230$$.$getAnimation$())
  }else {
    var $animOnDisplay$$inline_7853_i$$inline_7858$$ = this.$Options$.animationOnDisplay, $JSCompiler_inline_result$$208_duration$$inline_7854_oldMarkers$$ = this.$getAnimationDuration$();
    $animHandler_context$$inline_7855_options$$230$$ = this.$getCtx$();
    $bounds$$inline_7856_preferredSize$$6_width$$144$$ = new D.$DvtRectangle$$(0, 0, this.$Width$, this.$Height$);
    if(D.$DvtBlackBoxAnimationHandler$$.isSupported($animOnDisplay$$inline_7853_i$$inline_7858$$)) {
      $JSCompiler_inline_result$$208_duration$$inline_7854_oldMarkers$$ = D.$DvtBlackBoxAnimationHandler$$.$getInAnimation$($animHandler_context$$inline_7855_options$$230$$, $animOnDisplay$$inline_7853_i$$inline_7858$$, this.$_container$, $bounds$$inline_7856_preferredSize$$6_width$$144$$, $JSCompiler_inline_result$$208_duration$$inline_7854_oldMarkers$$)
    }else {
      $height$$132_outerDivSize_playables$$inline_7857$$ = [];
      if("popIn" == $animOnDisplay$$inline_7853_i$$inline_7858$$) {
        for($animOnDisplay$$inline_7853_i$$inline_7858$$ = 0;$animOnDisplay$$inline_7853_i$$inline_7858$$ < this.$_markers$.length;$animOnDisplay$$inline_7853_i$$inline_7858$$++) {
          var $marker$$inline_7859$$ = this.$_markers$[$animOnDisplay$$inline_7853_i$$inline_7858$$];
          $height$$132_outerDivSize_playables$$inline_7857$$.push(new D.$DvtAnimPopIn$$($animHandler_context$$inline_7855_options$$230$$, $marker$$inline_7859$$, D.$JSCompiler_alias_TRUE$$, $JSCompiler_inline_result$$208_duration$$inline_7854_oldMarkers$$))
        }
      }else {
        if("none" != $animOnDisplay$$inline_7853_i$$inline_7858$$) {
          for($animOnDisplay$$inline_7853_i$$inline_7858$$ = 0;$animOnDisplay$$inline_7853_i$$inline_7858$$ < this.$_markers$.length;$animOnDisplay$$inline_7853_i$$inline_7858$$++) {
            var $marker$$inline_7859$$ = this.$_markers$[$animOnDisplay$$inline_7853_i$$inline_7858$$], $playable$$inline_7860$$ = new D.$DvtCustomAnimation$$($animHandler_context$$inline_7855_options$$230$$, $marker$$inline_7859$$, $JSCompiler_inline_result$$208_duration$$inline_7854_oldMarkers$$), $startState$$inline_7861$$, $endState$$inline_7862$$;
            D.$DvtPictoChartRenderer$$.$isVertical$(this) ? ($startState$$inline_7861$$ = D.$DvtPictoChartRenderer$$.$isOriginRight$(this) ? this.$Width$ : 0, $endState$$inline_7862$$ = $marker$$inline_7859$$.$getCx$(), $marker$$inline_7859$$.$setCx$($startState$$inline_7861$$), (0,D.$JSCompiler_StaticMethods_addProp$$)($playable$$inline_7860$$.$_animator$, "typeNumber", $marker$$inline_7859$$, $marker$$inline_7859$$.$getCx$, $marker$$inline_7859$$.$setCx$, $endState$$inline_7862$$)) : ($startState$$inline_7861$$ = 
            D.$DvtPictoChartRenderer$$.$isOriginBottom$(this) ? this.$Height$ : 0, $endState$$inline_7862$$ = $marker$$inline_7859$$.$getCy$(), $marker$$inline_7859$$.$setCy$($startState$$inline_7861$$), (0,D.$JSCompiler_StaticMethods_addProp$$)($playable$$inline_7860$$.$_animator$, "typeNumber", $marker$$inline_7859$$, $marker$$inline_7859$$.$getCy$, $marker$$inline_7859$$.$setCy$, $endState$$inline_7862$$));
            $height$$132_outerDivSize_playables$$inline_7857$$.push($playable$$inline_7860$$)
          }
          $height$$132_outerDivSize_playables$$inline_7857$$.push(D.$DvtBlackBoxAnimationHandler$$.$getInAnimation$($animHandler_context$$inline_7855_options$$230$$, D.$DvtBlackBoxAnimationHandler$$.$ALPHA_FADE$, this.$_container$, $bounds$$inline_7856_preferredSize$$6_width$$144$$, $JSCompiler_inline_result$$208_duration$$inline_7854_oldMarkers$$))
        }
      }
      $JSCompiler_inline_result$$208_duration$$inline_7854_oldMarkers$$ = 0 < $height$$132_outerDivSize_playables$$inline_7857$$.length ? new D.$DvtParallelPlayable$$($animHandler_context$$inline_7855_options$$230$$, $height$$132_outerDivSize_playables$$inline_7857$$) : D.$JSCompiler_alias_NULL$$
    }
    this.$_animation$ = $JSCompiler_inline_result$$208_duration$$inline_7854_oldMarkers$$
  }
  this.$_animation$ ? (D.$DvtToolkitUtils$$.$setSvgSize$($context$$557$$, window.Math.max($oldWidth$$1$$, this.$Width$), window.Math.max($oldHeight$$1$$, this.$Height$)), this.$EventManager$.$removeListeners$(this), this.$_emptyText$ && this.$_container$.removeChild(this.$_emptyText$), this.$_animation$.$setOnEnd$(this.$_onRenderEnd$, this), this.$_animation$.play()) : this.$_onRenderEnd$();
  this.$UpdateAriaAttributes$()
};
D.$DvtPictoChart$$.prototype.render = D.$DvtPictoChart$$.prototype.$render$;
D.$JSCompiler_prototypeAlias$$ = D.$DvtPictoChart$$.prototype;
D.$JSCompiler_prototypeAlias$$.$SetOptions$ = function $$JSCompiler_prototypeAlias$$$$SetOptions$$($options$$231_selectionMode$$12$$) {
  $options$$231_selectionMode$$12$$ ? this.$Options$ = this.$Defaults$.$calcOptions$($options$$231_selectionMode$$12$$) : this.$Options$ || (this.$Options$ = (0,D.$JSCompiler_StaticMethods_GetDefaults$$)(this));
  (0,D.$DvtAgent$isEnvironmentBrowser$$)() || (this.$Options$.animationOnDisplay = "none", this.$Options$.animationOnDataChange = "none");
  $options$$231_selectionMode$$12$$ = this.$Options$.selectionMode;
  this.$_selectionHandler$ = "single" == $options$$231_selectionMode$$12$$ ? new D.$DvtSelectionHandler$$("s") : "multiple" == $options$$231_selectionMode$$12$$ ? new D.$DvtSelectionHandler$$("m") : D.$JSCompiler_alias_NULL$$;
  this.$EventManager$.$setSelectionHandler$(this.$_selectionHandler$)
};
D.$JSCompiler_prototypeAlias$$.$_onRenderEnd$ = function $$JSCompiler_prototypeAlias$$$$_onRenderEnd$$() {
  this.$_oldContainer$ && (this.removeChild(this.$_oldContainer$), this.$_oldContainer$.$destroy$(), this.$_oldContainer$ = D.$JSCompiler_alias_NULL$$);
  this.$_animation$ && (this.$_animation$ = D.$JSCompiler_alias_NULL$$, this.$EventManager$.$addListeners$(this), this.$_emptyText$ && this.$_container$.$addChild$(this.$_emptyText$));
  D.$DvtToolkitUtils$$.$setSvgSize$(this.$getCtx$(), this.$Width$, this.$Height$);
  (0,D.$JSCompiler_StaticMethods_setFocusObj$$)(this.$EventManager$, this.$_items$[0]);
  this.$_selectionHandler$ && (0,D.$JSCompiler_StaticMethods_processInitialSelections$$)(this.$_selectionHandler$, this.$Options$.selection, this.$_items$);
  (0,D.$DvtCategoryRolloverHandler$highlight$$)(this.$Options$.highlightedCategories, this.$_items$, "any" == this.$Options$.highlightMatch)
};
D.$JSCompiler_prototypeAlias$$.$getEventManager$ = (0,D.$JSCompiler_get$$)("$EventManager$");
D.$JSCompiler_prototypeAlias$$.$registerItems$ = (0,D.$JSCompiler_set$$)("$_items$");
D.$JSCompiler_prototypeAlias$$.$getItems$ = (0,D.$JSCompiler_get$$)("$_items$");
D.$JSCompiler_prototypeAlias$$.$getAnimationDuration$ = function $$JSCompiler_prototypeAlias$$$$getAnimationDuration$$() {
  return(0,D.$DvtStyleUtils$getTimeMilliseconds$$)(this.$Options$.animationDuration) / 1E3
};
D.$JSCompiler_prototypeAlias$$.$destroy$ = function $$JSCompiler_prototypeAlias$$$$destroy$$() {
  this.$EventManager$ && (this.$EventManager$.$removeListeners$(this), this.$EventManager$.$destroy$(), this.$EventManager$ = D.$JSCompiler_alias_NULL$$);
  D.$DvtPictoChart$$.$superclass$.$destroy$.call(this)
};
D.$DvtPictoChart$$.prototype.destroy = D.$DvtPictoChart$$.prototype.$destroy$;
D.$DvtPictoChart$$.prototype.$highlight$ = function $$DvtPictoChart$$$$$highlight$$($categories$$24$$) {
  var $options$$232$$ = this.$getOptions$();
  $options$$232$$.highlightedCategories = D.$DvtJSONUtils$$.$clone$($categories$$24$$);
  (0,D.$DvtCategoryRolloverHandler$highlight$$)($categories$$24$$, this.$getItems$(), "any" == $options$$232$$.highlightMatch)
};
D.$DvtPictoChart$$.prototype.highlight = D.$DvtPictoChart$$.prototype.$highlight$;
D.$DvtPictoChart$$.prototype.select = function $$DvtPictoChart$$$$select$($selection$$32$$) {
  this.$getOptions$().selection = D.$DvtJSONUtils$$.$clone$($selection$$32$$);
  this.$_selectionHandler$ && (0,D.$JSCompiler_StaticMethods_processInitialSelections$$)(this.$_selectionHandler$, $selection$$32$$, this.$getItems$())
};
D.$DvtPictoChart$$.prototype.select = D.$DvtPictoChart$$.prototype.select;
D.$DvtPictoChart$$.prototype.$GetComponentDescription$ = function $$DvtPictoChart$$$$$GetComponentDescription$$() {
  return(0,D.$DvtBundle$getTranslation$$)(this.$getOptions$(), "componentName", "DvtUtilBundle", "PICTOCHART")
};
D.$DvtPictoChart$$.prototype.$getAutomation$ = function $$DvtPictoChart$$$$$getAutomation$$() {
  this.$_automation$ || (this.$_automation$ = new D.$DvtPictoChartAutomation$$(this));
  return this.$_automation$
};
D.$DvtPictoChart$$.prototype.getAutomation = D.$DvtPictoChart$$.prototype.$getAutomation$;
D.$DvtPictoChartAutomation$$ = (0,D.$JSCompiler_set$$)("$_picto$");
(0,D.$goog$exportPath_$$)("DvtPictoChartAutomation", D.$DvtPictoChartAutomation$$);
D.$DvtObj$$.$createSubclass$(D.$DvtPictoChartAutomation$$, D.$DvtAutomation$$, "DvtPictoChartAutomation");
D.$DvtPictoChartAutomation$$.prototype.$GetSubIdForDomElement$ = function $$DvtPictoChartAutomation$$$$$GetSubIdForDomElement$$($displayable$$78_logicalObj$$16$$) {
  return($displayable$$78_logicalObj$$16$$ = (0,D.$JSCompiler_StaticMethods_GetLogicalObject$$)(this.$_picto$.$getEventManager$(), $displayable$$78_logicalObj$$16$$)) && $displayable$$78_logicalObj$$16$$ instanceof D.$DvtPictoChartItem$$ ? "item[" + this.$_picto$.$getItems$().indexOf($displayable$$78_logicalObj$$16$$) + "]" : D.$JSCompiler_alias_NULL$$
};
D.$DvtPictoChartAutomation$$.prototype.$getDomElementForSubId$ = function $$DvtPictoChartAutomation$$$$$getDomElementForSubId$$($index$$232_item$$47_subId$$24$$) {
  if("tooltip" == $index$$232_item$$47_subId$$24$$) {
    return(0,D.$JSCompiler_StaticMethods_GetTooltipElement$$)(this.$_picto$)
  }
  var $parenIdx$$ = $index$$232_item$$47_subId$$24$$.indexOf("[");
  return 0 < $parenIdx$$ && "item" === $index$$232_item$$47_subId$$24$$.substring(0, $parenIdx$$) && ($index$$232_item$$47_subId$$24$$ = (0,window.parseInt)($index$$232_item$$47_subId$$24$$.substring($parenIdx$$ + 1, $index$$232_item$$47_subId$$24$$.length - 1)), $index$$232_item$$47_subId$$24$$ = this.$_picto$.$getItems$()[$index$$232_item$$47_subId$$24$$]) ? $index$$232_item$$47_subId$$24$$.$getElem$() : D.$JSCompiler_alias_NULL$$
};
D.$DvtPictoChartAutomation$$.prototype.getDomElementForSubId = D.$DvtPictoChartAutomation$$.prototype.$getDomElementForSubId$;
D.$DvtPictoChartAutomation$$.prototype.getItem = function $$DvtPictoChartAutomation$$$$getItem$($index$$233_item$$48$$) {
  if($index$$233_item$$48$$ = this.$_picto$.$getItems$()[$index$$233_item$$48$$]) {
    var $data$$92$$ = {};
    $data$$92$$.color = $index$$233_item$$48$$.$getDatatipColor$();
    $data$$92$$.tooltip = $index$$233_item$$48$$.$getShortDesc$();
    $data$$92$$.id = $index$$233_item$$48$$.getId();
    $data$$92$$.name = $index$$233_item$$48$$.getName();
    $data$$92$$.count = $index$$233_item$$48$$.getCount();
    $data$$92$$.selected = $index$$233_item$$48$$.$isSelected$();
    return $data$$92$$
  }
  return D.$JSCompiler_alias_NULL$$
};
D.$DvtPictoChartAutomation$$.prototype.getItem = D.$DvtPictoChartAutomation$$.prototype.getItem;
D.$DvtPictoChartAutomation$$.prototype.$getItemCount$ = function $$DvtPictoChartAutomation$$$$$getItemCount$$() {
  return this.$_picto$.$getItems$().length
};
D.$DvtPictoChartAutomation$$.prototype.getItemCount = D.$DvtPictoChartAutomation$$.prototype.$getItemCount$;
D.$DvtPictoChartEventManager$$ = function $$DvtPictoChartEventManager$$$($picto$$1$$) {
  this.Init($picto$$1$$.$getCtx$(), $picto$$1$$.$__dispatchEvent$, $picto$$1$$);
  this.$_picto$ = $picto$$1$$
};
D.$DvtObj$$.$createSubclass$(D.$DvtPictoChartEventManager$$, D.$DvtEventManager$$, "DvtPictoChartEventManager");
D.$JSCompiler_prototypeAlias$$ = D.$DvtPictoChartEventManager$$.prototype;
D.$JSCompiler_prototypeAlias$$.$ProcessRolloverEvent$ = function $$JSCompiler_prototypeAlias$$$$ProcessRolloverEvent$$($event$$700_options$$234$$, $categories$$25_hoverBehaviorDelay$$4_obj$$323$$, $bOver$$11_rolloverEvent$$5$$) {
  $event$$700_options$$234$$ = this.$_picto$.$getOptions$();
  "none" != $event$$700_options$$234$$.hoverBehavior && ($categories$$25_hoverBehaviorDelay$$4_obj$$323$$ = $categories$$25_hoverBehaviorDelay$$4_obj$$323$$.$getCategories$ ? $categories$$25_hoverBehaviorDelay$$4_obj$$323$$.$getCategories$() : [], $event$$700_options$$234$$.highlightedCategories = $bOver$$11_rolloverEvent$$5$$ ? $categories$$25_hoverBehaviorDelay$$4_obj$$323$$.slice() : D.$JSCompiler_alias_NULL$$, $bOver$$11_rolloverEvent$$5$$ = new D.$DvtCategoryRolloverEvent$$($bOver$$11_rolloverEvent$$5$$ ? 
  "categoryRollOver" : "categoryRollOut", $event$$700_options$$234$$.highlightedCategories), $categories$$25_hoverBehaviorDelay$$4_obj$$323$$ = (0,D.$DvtStyleUtils$getTimeMilliseconds$$)($event$$700_options$$234$$.hoverBehaviorDelay), this.$RolloverHandler$.$processEvent$($bOver$$11_rolloverEvent$$5$$, this.$_picto$.$getItems$(), $categories$$25_hoverBehaviorDelay$$4_obj$$323$$, "any" == $event$$700_options$$234$$.highlightMatch))
};
D.$JSCompiler_prototypeAlias$$.$OnClickInternal$ = function $$JSCompiler_prototypeAlias$$$$OnClickInternal$$($event$$701_obj$$324$$) {
  ($event$$701_obj$$324$$ = (0,D.$JSCompiler_StaticMethods_GetLogicalObject$$)(this, $event$$701_obj$$324$$.target)) && (!$event$$701_obj$$324$$.$isSelectable$ || !$event$$701_obj$$324$$.$isSelectable$()) && this.$processDrillEvent$($event$$701_obj$$324$$)
};
D.$JSCompiler_prototypeAlias$$.$OnDblClickInternal$ = function $$JSCompiler_prototypeAlias$$$$OnDblClickInternal$$($event$$702_obj$$325$$) {
  ($event$$702_obj$$325$$ = (0,D.$JSCompiler_StaticMethods_GetLogicalObject$$)(this, $event$$702_obj$$325$$.target)) && $event$$702_obj$$325$$.$isSelectable$ && $event$$702_obj$$325$$.$isSelectable$() && this.$processDrillEvent$($event$$702_obj$$325$$)
};
D.$JSCompiler_prototypeAlias$$.$HandleTouchHoverEndInternal$ = function $$JSCompiler_prototypeAlias$$$$HandleTouchHoverEndInternal$$($event$$703_obj$$326$$) {
  ($event$$703_obj$$326$$ = (0,D.$JSCompiler_StaticMethods_GetLogicalObject$$)(this, $event$$703_obj$$326$$.target)) && (!$event$$703_obj$$326$$.$isSelectable$ || !$event$$703_obj$$326$$.$isSelectable$()) && this.$processDrillEvent$($event$$703_obj$$326$$)
};
D.$JSCompiler_prototypeAlias$$.$HandleTouchClickInternal$ = function $$JSCompiler_prototypeAlias$$$$HandleTouchClickInternal$$($event$$704_obj$$327$$) {
  ($event$$704_obj$$327$$ = (0,D.$JSCompiler_StaticMethods_GetLogicalObject$$)(this, $event$$704_obj$$327$$.target)) && (!$event$$704_obj$$327$$.$isSelectable$ || !$event$$704_obj$$327$$.$isSelectable$()) && this.$processDrillEvent$($event$$704_obj$$327$$)
};
D.$JSCompiler_prototypeAlias$$.$HandleTouchDblClickInternal$ = function $$JSCompiler_prototypeAlias$$$$HandleTouchDblClickInternal$$($event$$705_obj$$328$$) {
  ($event$$705_obj$$328$$ = (0,D.$JSCompiler_StaticMethods_GetLogicalObject$$)(this, $event$$705_obj$$328$$.target)) && $event$$705_obj$$328$$.$isSelectable$ && $event$$705_obj$$328$$.$isSelectable$() && this.$processDrillEvent$($event$$705_obj$$328$$)
};
D.$JSCompiler_prototypeAlias$$.$processDrillEvent$ = function $$JSCompiler_prototypeAlias$$$$processDrillEvent$$($obj$$329$$) {
  $obj$$329$$ instanceof D.$DvtPictoChartItem$$ && $obj$$329$$.$isDrillable$() && this.$FireEvent$(new D.$DvtDrillEvent$$($obj$$329$$.getId()))
};
D.$DvtPictoChartDefaults$$ = function $$DvtPictoChartDefaults$$$() {
  this.Init({alta:D.$DvtPictoChartDefaults$VERSION_1$$})
};
D.$DvtObj$$.$createSubclass$(D.$DvtPictoChartDefaults$$, D.$DvtBaseComponentDefaults$$, "DvtPictoChartDefaults");
D.$DvtPictoChartDefaults$VERSION_1$$ = {animationOnDisplay:"none", animationOnDataChange:"none", animationDuration:750, drilling:"off", hiddenCategories:[], highlightedCategories:[], highlightMatch:"all", hoverBehavior:"none", hoverBehaviorDelay:200, layout:"horizontal", layoutOrigin:"topStart", selection:[], selectionMode:"none", _defaultColor:"#a6acb1", _defaultSize:32, _defaultShape:"rectangle", _gapRatio:0.25, _textStyle:new D.$DvtCSSStyle$$("font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 13px; color: #252525;"), 
_statusMessageStyle:new D.$DvtCSSStyle$$("font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 13px; color: #252525;"), _tooltipStyle:new D.$DvtCSSStyle$$("border-collapse: separate; border-spacing: 1px"), _tooltipLabelStyle:new D.$DvtCSSStyle$$("color: #737373; padding: 0px 2px"), _tooltipValueStyle:new D.$DvtCSSStyle$$("color: #333333; padding: 0px 2px")};
D.$DvtPictoChartImageMarker$$ = function $$DvtPictoChartImageMarker$$$($picto$$2$$, $cx$$57$$, $cy$$58$$, $width$$145$$, $height$$133$$, $source$$34$$, $sourceSelected$$3$$, $sourceHover$$3$$, $sourceHoverSelected$$3$$, $id$$256$$) {
  D.$DvtPictoChartImageMarker$$.$superclass$.Init.call(this, $picto$$2$$.$getCtx$(), $cx$$57$$, $cy$$58$$, $width$$145$$, $height$$133$$, $source$$34$$, $sourceSelected$$3$$, $sourceHover$$3$$, $sourceHoverSelected$$3$$, $id$$256$$);
  this.$_picto$ = $picto$$2$$
};
D.$DvtObj$$.$createSubclass$(D.$DvtPictoChartImageMarker$$, D.$DvtImageMarker$$, "DvtPictoChartImageMarker");
D.$JSCompiler_prototypeAlias$$ = D.$DvtPictoChartImageMarker$$.prototype;
D.$JSCompiler_prototypeAlias$$.$animateUpdate$ = function $$JSCompiler_prototypeAlias$$$$animateUpdate$$($handler$$51$$, $oldMarker$$) {
  var $animation$$4$$ = new D.$DvtCustomAnimation$$(this.$getCtx$(), this, 0.75 * this.$_picto$.$getAnimationDuration$()), $animator$$125$$ = $animation$$4$$.$_animator$, $endParams$$1$$ = this.$_getAnimationParams$();
  this.$_setAnimationParams$($oldMarker$$.$_getAnimationParams$());
  (0,D.$JSCompiler_StaticMethods_addProp$$)($animator$$125$$, "typeNumberArray", this, this.$_getAnimationParams$, this.$_setAnimationParams$, $endParams$$1$$);
  $oldMarker$$.$setAlpha$(0);
  $handler$$51$$.add($animation$$4$$, 1)
};
D.$JSCompiler_prototypeAlias$$.$animateDelete$ = function $$JSCompiler_prototypeAlias$$$$animateDelete$$($handler$$52$$) {
  $handler$$52$$.add(new D.$DvtAnimFadeOut$$(this.$getCtx$(), this, 0.5 * this.$_picto$.$getAnimationDuration$()), 0)
};
D.$JSCompiler_prototypeAlias$$.$animateInsert$ = function $$JSCompiler_prototypeAlias$$$$animateInsert$$($handler$$53$$) {
  this.$setAlpha$(0);
  $handler$$53$$.add(new D.$DvtAnimFadeIn$$(this.$getCtx$(), this, 0.5 * this.$_picto$.$getAnimationDuration$()), 2)
};
D.$JSCompiler_prototypeAlias$$.$_getAnimationParams$ = function $$JSCompiler_prototypeAlias$$$$_getAnimationParams$$() {
  return[this.$getCx$(), this.$getCy$(), this.getWidth(), this.getHeight()]
};
D.$JSCompiler_prototypeAlias$$.$_setAnimationParams$ = function $$JSCompiler_prototypeAlias$$$$_setAnimationParams$$($params$$54$$) {
  this.$setCx$($params$$54$$[0]);
  this.$setCy$($params$$54$$[1]);
  this.$setWidth$($params$$54$$[2]);
  this.$setHeight$($params$$54$$[3])
};
D.$DvtPictoChartItem$$ = function $$DvtPictoChartItem$$$($picto$$3$$, $item$$49$$) {
  this.Init($picto$$3$$, $item$$49$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtPictoChartItem$$, D.$DvtContainer$$, "DvtPictoChartItem");
D.$DvtPictoChartItem$_counter$$ = 0;
D.$DvtPictoChartItem$$.prototype.Init = function $$DvtPictoChartItem$$$$Init$($picto$$4$$, $item$$50$$) {
  D.$DvtPictoChartItem$$.$superclass$.Init.call(this, $picto$$4$$.$getCtx$(), D.$JSCompiler_alias_NULL$$, $item$$50$$.id);
  this.$_picto$ = $picto$$4$$;
  this.$_item$ = $item$$50$$;
  this.$_id$ = $item$$50$$.id != D.$JSCompiler_alias_NULL$$ ? $item$$50$$.id : $item$$50$$.name != D.$JSCompiler_alias_NULL$$ ? $item$$50$$.name : "_defaultId" + D.$DvtPictoChartItem$_counter$$;
  D.$DvtPictoChartItem$_counter$$++;
  this.$_isShowingKeyboardFocusEffect$ = this.$_isSelected$ = D.$JSCompiler_alias_FALSE$$;
  this.$_keyboardTooltipLocation$ = new D.$DvtPoint$$(0, 0);
  (this.$isSelectable$() || this.$isDrillable$()) && this.setCursor("pointer");
  $picto$$4$$.$getEventManager$().$associate$(this, this)
};
D.$JSCompiler_StaticMethods_getColSpan$$ = function $$JSCompiler_StaticMethods_getColSpan$$$($JSCompiler_StaticMethods_getColSpan$self_colSpan$$) {
  $JSCompiler_StaticMethods_getColSpan$self_colSpan$$ = $JSCompiler_StaticMethods_getColSpan$self_colSpan$$.$_item$.columnSpan;
  return $JSCompiler_StaticMethods_getColSpan$self_colSpan$$ != D.$JSCompiler_alias_NULL$$ && 0 <= $JSCompiler_StaticMethods_getColSpan$self_colSpan$$ ? $JSCompiler_StaticMethods_getColSpan$self_colSpan$$ : 1
};
D.$JSCompiler_StaticMethods_getRowSpan$$ = function $$JSCompiler_StaticMethods_getRowSpan$$$($JSCompiler_StaticMethods_getRowSpan$self_rowSpan$$) {
  $JSCompiler_StaticMethods_getRowSpan$self_rowSpan$$ = $JSCompiler_StaticMethods_getRowSpan$self_rowSpan$$.$_item$.rowSpan;
  return $JSCompiler_StaticMethods_getRowSpan$self_rowSpan$$ != D.$JSCompiler_alias_NULL$$ && 0 <= $JSCompiler_StaticMethods_getRowSpan$self_rowSpan$$ ? $JSCompiler_StaticMethods_getRowSpan$self_rowSpan$$ : 1
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtPictoChartItem$$.prototype;
D.$JSCompiler_prototypeAlias$$.getCount = function $$JSCompiler_prototypeAlias$$$getCount$() {
  var $count$$24$$ = this.$_item$.count;
  return $count$$24$$ != D.$JSCompiler_alias_NULL$$ ? window.Math.max($count$$24$$, 0) : 1
};
D.$JSCompiler_prototypeAlias$$.$getShape$ = function $$JSCompiler_prototypeAlias$$$$getShape$$() {
  return this.$_item$.shape || this.$_picto$.$getOptions$()._defaultShape
};
D.$JSCompiler_prototypeAlias$$.$getColor$ = function $$JSCompiler_prototypeAlias$$$$getColor$$() {
  return this.$_item$.color || this.$_picto$.$getOptions$()._defaultColor
};
D.$JSCompiler_prototypeAlias$$.$getBorderColor$ = function $$JSCompiler_prototypeAlias$$$$getBorderColor$$() {
  return this.$_item$.borderColor
};
D.$JSCompiler_prototypeAlias$$.$getBorderWidth$ = function $$JSCompiler_prototypeAlias$$$$getBorderWidth$$() {
  return this.$_item$.borderWidth
};
D.$JSCompiler_prototypeAlias$$.$getSource$ = function $$JSCompiler_prototypeAlias$$$$getSource$$() {
  return this.$_item$.source
};
D.$JSCompiler_prototypeAlias$$.$getSourceSelected$ = function $$JSCompiler_prototypeAlias$$$$getSourceSelected$$() {
  return this.$_item$.sourceSelected
};
D.$JSCompiler_prototypeAlias$$.$getSourceHover$ = function $$JSCompiler_prototypeAlias$$$$getSourceHover$$() {
  return this.$_item$.sourceHover
};
D.$JSCompiler_prototypeAlias$$.$getSourceHoverSelected$ = function $$JSCompiler_prototypeAlias$$$$getSourceHoverSelected$$() {
  return this.$_item$.sourceHoverSelected
};
D.$JSCompiler_prototypeAlias$$.getName = function $$JSCompiler_prototypeAlias$$$getName$() {
  return this.$_item$.name
};
D.$JSCompiler_prototypeAlias$$.getId = (0,D.$JSCompiler_get$$)("$_id$");
D.$JSCompiler_prototypeAlias$$.$getShortDesc$ = function $$JSCompiler_prototypeAlias$$$$getShortDesc$$() {
  return this.$_item$.shortDesc
};
D.$JSCompiler_prototypeAlias$$.$isDrillable$ = function $$JSCompiler_prototypeAlias$$$$isDrillable$$() {
  var $drilling$$3$$ = this.$_item$.drilling;
  return $drilling$$3$$ && "inherit" != $drilling$$3$$ ? "on" == $drilling$$3$$ : "on" == this.$_picto$.$getOptions$().drilling
};
D.$JSCompiler_prototypeAlias$$.$isDoubleClickable$ = function $$JSCompiler_prototypeAlias$$$$isDoubleClickable$$() {
  return this.$isSelectable$() && this.$isDrillable$()
};
D.$JSCompiler_prototypeAlias$$.$getDatatip$ = function $$JSCompiler_prototypeAlias$$$$getDatatip$$() {
  var $options$$235_tooltipManager$$11$$ = this.$_picto$.$getOptions$(), $nameTd_tooltipFunc$$8$$ = this.$_picto$.$getOptions$().tooltip;
  if($nameTd_tooltipFunc$$8$$) {
    var $options$$235_tooltipManager$$11$$ = this.$_picto$.$getCtx$().$getTooltipManager$(), $dataContext$$6_isRTL$$39_name$$102$$ = {id:this.getId(), name:this.getName(), count:this.getCount(), color:this.$getColor$()};
    return(0,D.$JSCompiler_StaticMethods_getCustomTooltip$$)($options$$235_tooltipManager$$11$$, $nameTd_tooltipFunc$$8$$, $dataContext$$6_isRTL$$39_name$$102$$)
  }
  if(this.$getShortDesc$() != D.$JSCompiler_alias_NULL$$) {
    return this.$getShortDesc$()
  }
  $nameTd_tooltipFunc$$8$$ = "";
  ($dataContext$$6_isRTL$$39_name$$102$$ = this.getName()) && ($nameTd_tooltipFunc$$8$$ = (0,D.$DvtHtmlTooltipManager$createStartTag$$)("td", $options$$235_tooltipManager$$11$$._tooltipLabelStyle) + $dataContext$$6_isRTL$$39_name$$102$$ + "\x3c/td\x3e");
  $dataContext$$6_isRTL$$39_name$$102$$ = (0,D.$DvtAgent$isRightToLeft$$)(this.$_picto$.$getCtx$());
  $options$$235_tooltipManager$$11$$._tooltipLabelStyle.$setStyle$("text-align", $dataContext$$6_isRTL$$39_name$$102$$ ? "left" : "right");
  $options$$235_tooltipManager$$11$$._tooltipValueStyle.$setStyle$("text-align", $dataContext$$6_isRTL$$39_name$$102$$ ? "right" : "left");
  return(0,D.$DvtHtmlTooltipManager$createStartTag$$)("table", $options$$235_tooltipManager$$11$$._tooltipStyle) + "\x3ctr\x3e" + $nameTd_tooltipFunc$$8$$ + (0,D.$DvtHtmlTooltipManager$createStartTag$$)("td", $options$$235_tooltipManager$$11$$._tooltipValueStyle) + (0,D.$JSCompiler_StaticMethods__getCountString$$)(this) + "\x3c/td\x3e\x3c/tr\x3e\x3c/table\x3e"
};
D.$JSCompiler_prototypeAlias$$.$getDatatipColor$ = function $$JSCompiler_prototypeAlias$$$$getDatatipColor$$() {
  return this.$getColor$()
};
D.$JSCompiler_StaticMethods__getCountString$$ = function $$JSCompiler_StaticMethods__getCountString$$$($JSCompiler_StaticMethods__getCountString$self_JSCompiler_StaticMethods_getTotalCount$self$$inline_7896$$) {
  var $JSCompiler_temp_const$$426$$ = $JSCompiler_StaticMethods__getCountString$self_JSCompiler_StaticMethods_getTotalCount$self$$inline_7896$$.$_picto$.$getOptions$(), $JSCompiler_temp_const$$425$$ = $JSCompiler_StaticMethods__getCountString$self_JSCompiler_StaticMethods_getTotalCount$self$$inline_7896$$.getCount();
  $JSCompiler_StaticMethods__getCountString$self_JSCompiler_StaticMethods_getTotalCount$self$$inline_7896$$ = $JSCompiler_StaticMethods__getCountString$self_JSCompiler_StaticMethods_getTotalCount$self$$inline_7896$$.$_picto$;
  for(var $count$$inline_7897$$ = 0, $i$$inline_7898$$ = 0;$i$$inline_7898$$ < $JSCompiler_StaticMethods__getCountString$self_JSCompiler_StaticMethods_getTotalCount$self$$inline_7896$$.$_items$.length;$i$$inline_7898$$++) {
    $count$$inline_7897$$ += $JSCompiler_StaticMethods__getCountString$self_JSCompiler_StaticMethods_getTotalCount$self$$inline_7896$$.$_items$[$i$$inline_7898$$].getCount()
  }
  return(0,D.$DvtBundle$getTranslation$$)($JSCompiler_temp_const$$426$$, "labelCountWithTotal", "DvtUtilBundle", "COUNT_WITH_TOTAL", [$JSCompiler_temp_const$$425$$, $count$$inline_7897$$])
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtPictoChartItem$$.prototype;
D.$JSCompiler_prototypeAlias$$.$isSelectable$ = function $$JSCompiler_prototypeAlias$$$$isSelectable$$() {
  return"none" != this.$_picto$.$getOptions$().selectionMode
};
D.$JSCompiler_prototypeAlias$$.$isSelected$ = (0,D.$JSCompiler_get$$)("$_isSelected$");
D.$JSCompiler_prototypeAlias$$.$setSelected$ = function $$JSCompiler_prototypeAlias$$$$setSelected$$($bSelected$$3$$) {
  this.$_isSelected$ = $bSelected$$3$$;
  this.$_updateAriaLabel$();
  for(var $i$$756$$ = 0;$i$$756$$ < this.$getNumChildren$();$i$$756$$++) {
    var $child$$74$$ = this.$getChildAt$($i$$756$$);
    ($child$$74$$ instanceof D.$DvtPictoChartShapeMarker$$ || $child$$74$$ instanceof D.$DvtPictoChartImageMarker$$) && $child$$74$$.$setSelected$($bSelected$$3$$)
  }
};
D.$JSCompiler_prototypeAlias$$.$showHoverEffect$ = function $$JSCompiler_prototypeAlias$$$$showHoverEffect$$() {
  for(var $i$$757$$ = 0;$i$$757$$ < this.$getNumChildren$();$i$$757$$++) {
    var $child$$75$$ = this.$getChildAt$($i$$757$$);
    ($child$$75$$ instanceof D.$DvtPictoChartShapeMarker$$ || $child$$75$$ instanceof D.$DvtPictoChartImageMarker$$) && $child$$75$$.$showHoverEffect$()
  }
};
D.$JSCompiler_prototypeAlias$$.$hideHoverEffect$ = function $$JSCompiler_prototypeAlias$$$$hideHoverEffect$$() {
  for(var $i$$758$$ = 0;$i$$758$$ < this.$getNumChildren$();$i$$758$$++) {
    var $child$$76$$ = this.$getChildAt$($i$$758$$);
    ($child$$76$$ instanceof D.$DvtPictoChartShapeMarker$$ || $child$$76$$ instanceof D.$DvtPictoChartImageMarker$$) && $child$$76$$.$hideHoverEffect$()
  }
};
D.$JSCompiler_prototypeAlias$$.$getDisplayables$ = function $$JSCompiler_prototypeAlias$$$$getDisplayables$$() {
  return[this]
};
D.$JSCompiler_prototypeAlias$$.$getAriaLabel$ = function $$JSCompiler_prototypeAlias$$$$getAriaLabel$$() {
  var $states$$14$$ = [], $name$$103_options$$236_shortDesc$$9$$ = this.$_picto$.$getOptions$();
  this.$isSelectable$() && $states$$14$$.push((0,D.$DvtBundle$getTranslation$$)($name$$103_options$$236_shortDesc$$9$$, this.$isSelected$() ? "stateSelected" : "stateUnselected", "DvtUtilBundle", this.$isSelected$() ? "STATE_SELECTED" : "STATE_UNSELECTED"));
  this.$isDrillable$() && $states$$14$$.push((0,D.$DvtBundle$getTranslation$$)($name$$103_options$$236_shortDesc$$9$$, "stateDrillable", "DvtUtilBundle", "STATE_DRILLABLE"));
  $name$$103_options$$236_shortDesc$$9$$ = this.getName();
  $name$$103_options$$236_shortDesc$$9$$ = this.$getShortDesc$() != D.$JSCompiler_alias_NULL$$ ? this.$getShortDesc$() : $name$$103_options$$236_shortDesc$$9$$ == D.$JSCompiler_alias_NULL$$ ? (0,D.$JSCompiler_StaticMethods__getCountString$$)(this) : (0,D.$DvtBundle$getTranslatedString$$)("DvtUtilBundle", "COLON_SEP_LIST", [$name$$103_options$$236_shortDesc$$9$$, (0,D.$JSCompiler_StaticMethods__getCountString$$)(this)]);
  return(0,D.$DvtDisplayable$generateAriaLabel$$)($name$$103_options$$236_shortDesc$$9$$, $states$$14$$)
};
D.$JSCompiler_prototypeAlias$$.$_updateAriaLabel$ = function $$JSCompiler_prototypeAlias$$$$_updateAriaLabel$$() {
  (0,D.$DvtAgent$deferAriaCreation$$)() || this.$setAriaProperty$("label", this.$getAriaLabel$())
};
D.$JSCompiler_prototypeAlias$$.$getCategories$ = function $$JSCompiler_prototypeAlias$$$$getCategories$$() {
  return this.$_item$.categories || [this.getId()]
};
D.$JSCompiler_prototypeAlias$$.$getNextNavigable$ = function $$JSCompiler_prototypeAlias$$$$getNextNavigable$$($JSCompiler_temp$$281_JSCompiler_temp$$282_event$$706_isForward$$inline_7905_nextIdx$$inline_7907$$) {
  var $keyboardHandler$$5_navigableItems$$inline_7906_picto$$inline_7900$$ = this.$_picto$.$getEventManager$().$KeyboardHandler$;
  if($JSCompiler_temp$$281_JSCompiler_temp$$282_event$$706_isForward$$inline_7905_nextIdx$$inline_7907$$.type == D.$DvtMouseEvent$CLICK$$ || $keyboardHandler$$5_navigableItems$$inline_7906_picto$$inline_7900$$.$isMultiSelectEvent$($JSCompiler_temp$$281_JSCompiler_temp$$282_event$$706_isForward$$inline_7905_nextIdx$$inline_7907$$)) {
    $JSCompiler_temp$$281_JSCompiler_temp$$282_event$$706_isForward$$inline_7905_nextIdx$$inline_7907$$ = this
  }else {
    if($keyboardHandler$$5_navigableItems$$inline_7906_picto$$inline_7900$$.$isNavigationEvent$($JSCompiler_temp$$281_JSCompiler_temp$$282_event$$706_isForward$$inline_7905_nextIdx$$inline_7907$$)) {
      var $keyboardHandler$$5_navigableItems$$inline_7906_picto$$inline_7900$$ = this.$_picto$, $isOriginRight$$inline_7903$$ = D.$DvtPictoChartRenderer$$.$isOriginRight$($keyboardHandler$$5_navigableItems$$inline_7906_picto$$inline_7900$$), $isOriginBottom$$inline_7904$$ = D.$DvtPictoChartRenderer$$.$isOriginBottom$($keyboardHandler$$5_navigableItems$$inline_7906_picto$$inline_7900$$);
      $JSCompiler_temp$$281_JSCompiler_temp$$282_event$$706_isForward$$inline_7905_nextIdx$$inline_7907$$ = 37 == $JSCompiler_temp$$281_JSCompiler_temp$$282_event$$706_isForward$$inline_7905_nextIdx$$inline_7907$$.keyCode && $isOriginRight$$inline_7903$$ || 39 == $JSCompiler_temp$$281_JSCompiler_temp$$282_event$$706_isForward$$inline_7905_nextIdx$$inline_7907$$.keyCode && !$isOriginRight$$inline_7903$$ || 38 == $JSCompiler_temp$$281_JSCompiler_temp$$282_event$$706_isForward$$inline_7905_nextIdx$$inline_7907$$.keyCode && 
      $isOriginBottom$$inline_7904$$ || 40 == $JSCompiler_temp$$281_JSCompiler_temp$$282_event$$706_isForward$$inline_7905_nextIdx$$inline_7907$$.keyCode && !$isOriginBottom$$inline_7904$$;
      $keyboardHandler$$5_navigableItems$$inline_7906_picto$$inline_7900$$ = $keyboardHandler$$5_navigableItems$$inline_7906_picto$$inline_7900$$.$getItems$();
      $JSCompiler_temp$$281_JSCompiler_temp$$282_event$$706_isForward$$inline_7905_nextIdx$$inline_7907$$ = $keyboardHandler$$5_navigableItems$$inline_7906_picto$$inline_7900$$.indexOf(this) + ($JSCompiler_temp$$281_JSCompiler_temp$$282_event$$706_isForward$$inline_7905_nextIdx$$inline_7907$$ ? 1 : -1);
      $JSCompiler_temp$$281_JSCompiler_temp$$282_event$$706_isForward$$inline_7905_nextIdx$$inline_7907$$ = $JSCompiler_temp$$281_JSCompiler_temp$$282_event$$706_isForward$$inline_7905_nextIdx$$inline_7907$$ < $keyboardHandler$$5_navigableItems$$inline_7906_picto$$inline_7900$$.length && 0 <= $JSCompiler_temp$$281_JSCompiler_temp$$282_event$$706_isForward$$inline_7905_nextIdx$$inline_7907$$ ? $keyboardHandler$$5_navigableItems$$inline_7906_picto$$inline_7900$$[$JSCompiler_temp$$281_JSCompiler_temp$$282_event$$706_isForward$$inline_7905_nextIdx$$inline_7907$$] : 
      this
    }else {
      $JSCompiler_temp$$281_JSCompiler_temp$$282_event$$706_isForward$$inline_7905_nextIdx$$inline_7907$$ = D.$JSCompiler_alias_NULL$$
    }
  }
  return $JSCompiler_temp$$281_JSCompiler_temp$$282_event$$706_isForward$$inline_7905_nextIdx$$inline_7907$$
};
D.$JSCompiler_prototypeAlias$$.$getKeyboardBoundingBox$ = function $$JSCompiler_prototypeAlias$$$$getKeyboardBoundingBox$$($targetCoordinateSpace$$54$$) {
  return this.$getDimensions$($targetCoordinateSpace$$54$$)
};
D.$JSCompiler_prototypeAlias$$.$getTargetElem$ = function $$JSCompiler_prototypeAlias$$$$getTargetElem$$() {
  return this.$getElem$()
};
D.$JSCompiler_prototypeAlias$$.$showKeyboardFocusEffect$ = function $$JSCompiler_prototypeAlias$$$$showKeyboardFocusEffect$$() {
  this.$_isShowingKeyboardFocusEffect$ = D.$JSCompiler_alias_TRUE$$;
  this.$showHoverEffect$()
};
D.$JSCompiler_prototypeAlias$$.$hideKeyboardFocusEffect$ = function $$JSCompiler_prototypeAlias$$$$hideKeyboardFocusEffect$$() {
  this.$_isShowingKeyboardFocusEffect$ = D.$JSCompiler_alias_FALSE$$;
  this.$hideHoverEffect$()
};
D.$JSCompiler_prototypeAlias$$.$isShowingKeyboardFocusEffect$ = (0,D.$JSCompiler_get$$)("$_isShowingKeyboardFocusEffect$");
D.$JSCompiler_prototypeAlias$$.$getKeyboardTooltipLocation$ = (0,D.$JSCompiler_get$$)("$_keyboardTooltipLocation$");
D.$DvtPictoChartKeyboardHandler$$ = function $$DvtPictoChartKeyboardHandler$$$($eventManager$$31$$) {
  this.Init($eventManager$$31$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtPictoChartKeyboardHandler$$, D.$DvtKeyboardHandler$$, "DvtPictoChartKeyboardHandler");
D.$DvtPictoChartKeyboardHandler$$.prototype.$isSelectionEvent$ = function $$DvtPictoChartKeyboardHandler$$$$$isSelectionEvent$$($event$$707$$) {
  return this.$isNavigationEvent$($event$$707$$) && !$event$$707$$.ctrlKey
};
D.$DvtPictoChartKeyboardHandler$$.prototype.$isMultiSelectEvent$ = function $$DvtPictoChartKeyboardHandler$$$$$isMultiSelectEvent$$($event$$708$$) {
  return 32 == $event$$708$$.keyCode && $event$$708$$.ctrlKey
};
D.$DvtPictoChartKeyboardHandler$$.prototype.$processKeyDown$ = function $$DvtPictoChartKeyboardHandler$$$$$processKeyDown$$($event$$710$$) {
  var $currentNavigable$$15$$ = this.$_eventManager$.$getFocus$();
  return $currentNavigable$$15$$ && 13 == $event$$710$$.keyCode ? (this.$_eventManager$.$processDrillEvent$($currentNavigable$$15$$), (0,D.$DvtEventManager$consumeEvent$$)($event$$710$$), $currentNavigable$$15$$) : D.$DvtPictoChartKeyboardHandler$$.$superclass$.$processKeyDown$.call(this, $event$$710$$)
};
D.$DvtPictoChartShapeMarker$$ = function $$DvtPictoChartShapeMarker$$$($picto$$12$$, $shape$$84$$, $cx$$58$$, $cy$$59$$, $width$$147$$, $height$$135$$, $id$$257$$) {
  D.$DvtPictoChartShapeMarker$$.$superclass$.Init.call(this, $picto$$12$$.$getCtx$(), $shape$$84$$, "alta", $cx$$58$$, $cy$$59$$, $width$$147$$, $height$$135$$, D.$JSCompiler_alias_TRUE$$, $id$$257$$);
  this.$_picto$ = $picto$$12$$
};
D.$DvtObj$$.$createSubclass$(D.$DvtPictoChartShapeMarker$$, D.$DvtSimpleMarker$$, "DvtPictoChartShapeMarker");
D.$JSCompiler_prototypeAlias$$ = D.$DvtPictoChartShapeMarker$$.prototype;
D.$JSCompiler_prototypeAlias$$.$animateUpdate$ = function $$JSCompiler_prototypeAlias$$$$animateUpdate$$($handler$$54$$, $oldMarker$$1$$) {
  var $animation$$5$$ = new D.$DvtCustomAnimation$$(this.$getCtx$(), this, 0.75 * this.$_picto$.$getAnimationDuration$()), $animator$$126$$ = $animation$$5$$.$_animator$, $endFill$$3_endParams$$2$$ = this.$getFill$();
  this.$setFill$($oldMarker$$1$$.$getFill$().$clone$());
  (0,D.$JSCompiler_StaticMethods_addProp$$)($animator$$126$$, "typeFill", this, this.$getFill$, this.$setFill$, $endFill$$3_endParams$$2$$);
  $endFill$$3_endParams$$2$$ = this.$_getAnimationParams$();
  this.$_setAnimationParams$($oldMarker$$1$$.$_getAnimationParams$());
  (0,D.$JSCompiler_StaticMethods_addProp$$)($animator$$126$$, "typeNumberArray", this, this.$_getAnimationParams$, this.$_setAnimationParams$, $endFill$$3_endParams$$2$$);
  $oldMarker$$1$$.$setAlpha$(0);
  $handler$$54$$.add($animation$$5$$, 1)
};
D.$JSCompiler_prototypeAlias$$.$animateDelete$ = function $$JSCompiler_prototypeAlias$$$$animateDelete$$($handler$$55$$) {
  $handler$$55$$.add(new D.$DvtAnimFadeOut$$(this.$getCtx$(), this, 0.5 * this.$_picto$.$getAnimationDuration$()), 0)
};
D.$JSCompiler_prototypeAlias$$.$animateInsert$ = function $$JSCompiler_prototypeAlias$$$$animateInsert$$($handler$$56$$) {
  this.$setAlpha$(0);
  $handler$$56$$.add(new D.$DvtAnimFadeIn$$(this.$getCtx$(), this, 0.5 * this.$_picto$.$getAnimationDuration$()), 2)
};
D.$JSCompiler_prototypeAlias$$.$_getAnimationParams$ = function $$JSCompiler_prototypeAlias$$$$_getAnimationParams$$() {
  return[this.$getCx$(), this.$getCy$(), this.getWidth(), this.getHeight()]
};
D.$JSCompiler_prototypeAlias$$.$_setAnimationParams$ = function $$JSCompiler_prototypeAlias$$$$_setAnimationParams$$($params$$55$$) {
  this.$setCx$($params$$55$$[0]);
  this.$setCy$($params$$55$$[1]);
  this.$setWidth$($params$$55$$[2]);
  this.$setHeight$($params$$55$$[3])
};
D.$DvtPictoChartRenderer$$ = {};
D.$DvtObj$$.$createSubclass$(D.$DvtPictoChartRenderer$$, D.$DvtObj$$, "DvtPictoChartRenderer");
D.$DvtPictoChartRenderer$$.$render$ = function $$DvtPictoChartRenderer$$$$render$$($picto$$6$$, $container$$167$$, $availSpace$$114$$, $info$$19$$) {
  var $context$$559$$ = $picto$$6$$.$getCtx$(), $background$$14_gapRatio$$1$$ = new D.$DvtRect$$($context$$559$$, $availSpace$$114$$.x, $availSpace$$114$$.y, $availSpace$$114$$.$w$, $availSpace$$114$$.$h$);
  (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)($background$$14_gapRatio$$1$$);
  $container$$167$$.$addChild$($background$$14_gapRatio$$1$$);
  $info$$19$$ || ($info$$19$$ = D.$DvtPictoChartRenderer$$.$getInfo$($picto$$6$$, $availSpace$$114$$.$w$, $availSpace$$114$$.$h$));
  if($info$$19$$.$items$) {
    $picto$$6$$.$registerItems$($info$$19$$.$items$);
    for(var $background$$14_gapRatio$$1$$ = $picto$$6$$.$getOptions$()._gapRatio, $isVert$$13$$ = D.$DvtPictoChartRenderer$$.$isVertical$($picto$$6$$), $isOriginBottom$$1$$ = D.$DvtPictoChartRenderer$$.$isOriginBottom$($picto$$6$$), $isOriginRight$$1$$ = D.$DvtPictoChartRenderer$$.$isOriginRight$($picto$$6$$), $cellMap$$1$$ = new D.$DvtMap2D$$, $JSCompiler_StaticMethods_updateAriaAttributes$self$$inline_7915_prevColSpan$$ = 0, $prevRowSpan$$ = 0, $remainder$$ = 0, $i$$759$$ = 0;$i$$759$$ < $info$$19$$.$items$.length;$i$$759$$++) {
      for(var $item$$51$$ = $info$$19$$.$items$[$i$$759$$], $colSpan$$1$$ = (0,D.$JSCompiler_StaticMethods_getColSpan$$)($item$$51$$), $rowSpan$$1$$ = (0,D.$JSCompiler_StaticMethods_getRowSpan$$)($item$$51$$), $w$$63$$ = $colSpan$$1$$ * $info$$19$$.$colWidth$, $h$$61$$ = $rowSpan$$1$$ * $info$$19$$.$rowHeight$, $count$$25$$ = $item$$51$$.getCount(), $index$$234$$ = 0, $isFirstMarker_location$$inline_7910$$ = D.$JSCompiler_alias_TRUE$$, $cell$$56$$;0 < $count$$25$$;) {
        if($colSpan$$1$$ != $JSCompiler_StaticMethods_updateAriaAttributes$self$$inline_7915_prevColSpan$$ || $rowSpan$$1$$ != $prevRowSpan$$) {
          $remainder$$ = 0
        }
        0 == $remainder$$ && ($cell$$56$$ = D.$DvtPictoChartRenderer$$.$_findNextAvailableCell$($cellMap$$1$$, $colSpan$$1$$, $rowSpan$$1$$, $info$$19$$.$colCount$, $info$$19$$.$rowCount$, $isVert$$13$$));
        if($cell$$56$$ == D.$JSCompiler_alias_NULL$$) {
          break
        }
        var $x$$258_xOffset$$5$$ = $cell$$56$$.$col$ * $info$$19$$.$colWidth$ + $w$$63$$ / 2, $fraction$$1_yOffset$$8$$ = $cell$$56$$.$row$ * $info$$19$$.$rowHeight$ + $h$$61$$ / 2, $x$$258_xOffset$$5$$ = $availSpace$$114$$.x + ($isOriginRight$$1$$ ? $availSpace$$114$$.$w$ - $x$$258_xOffset$$5$$ : $x$$258_xOffset$$5$$), $y$$233$$ = $availSpace$$114$$.y + ($isOriginBottom$$1$$ ? $availSpace$$114$$.$h$ - $fraction$$1_yOffset$$8$$ : $fraction$$1_yOffset$$8$$), $fraction$$1_yOffset$$8$$ = window.Math.min(1 - 
        $remainder$$, $count$$25$$), $rectX$$, $rectY$$, $rectW$$1$$, $rectH$$1$$;
        $isVert$$13$$ ? ($rectX$$ = $x$$258_xOffset$$5$$ - $w$$63$$ / 2, $rectY$$ = $isOriginBottom$$1$$ ? $y$$233$$ + $h$$61$$ * (0.5 - $fraction$$1_yOffset$$8$$ - $remainder$$) : $y$$233$$ + $h$$61$$ * ($remainder$$ - 0.5), $rectW$$1$$ = $w$$63$$, $rectH$$1$$ = $h$$61$$ * $fraction$$1_yOffset$$8$$) : ($rectX$$ = $isOriginRight$$1$$ ? $x$$258_xOffset$$5$$ + $w$$63$$ * (0.5 - $fraction$$1_yOffset$$8$$ - $remainder$$) : $x$$258_xOffset$$5$$ + $w$$63$$ * ($remainder$$ - 0.5), $rectY$$ = $y$$233$$ - 
        $h$$61$$ / 2, $rectW$$1$$ = $w$$63$$ * $fraction$$1_yOffset$$8$$, $rectH$$1$$ = $h$$61$$);
        var $marker$$17_markerId$$11$$;
        1 == $fraction$$1_yOffset$$8$$ ? ($marker$$17_markerId$$11$$ = $item$$51$$.getId() + "_" + $index$$234$$, $index$$234$$++) : $marker$$17_markerId$$11$$ = window.Math.random();
        if($item$$51$$.$getSource$()) {
          $marker$$17_markerId$$11$$ = new D.$DvtPictoChartImageMarker$$($picto$$6$$, $x$$258_xOffset$$5$$, $y$$233$$, $w$$63$$, $h$$61$$, $item$$51$$.$getSource$(), $item$$51$$.$getSourceSelected$(), $item$$51$$.$getSourceHover$(), $item$$51$$.$getSourceHoverSelected$(), $marker$$17_markerId$$11$$ + "_I")
        }else {
          var $clipPath$$14_hitArea$$4$$ = new D.$DvtRect$$($context$$559$$, $rectX$$, $rectY$$, $rectW$$1$$, $rectH$$1$$);
          (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)($clipPath$$14_hitArea$$4$$);
          $item$$51$$.$addChild$($clipPath$$14_hitArea$$4$$);
          $marker$$17_markerId$$11$$ = new D.$DvtPictoChartShapeMarker$$($picto$$6$$, $item$$51$$.$getShape$(), $x$$258_xOffset$$5$$, $y$$233$$, $w$$63$$ - $info$$19$$.$colWidth$ * $background$$14_gapRatio$$1$$, $h$$61$$ - $info$$19$$.$rowHeight$ * $background$$14_gapRatio$$1$$, $marker$$17_markerId$$11$$ + "_S");
          $marker$$17_markerId$$11$$.$setSolidFill$($item$$51$$.$getColor$());
          $marker$$17_markerId$$11$$.$setSolidStroke$($item$$51$$.$getBorderColor$(), D.$JSCompiler_alias_NULL$$, $item$$51$$.$getBorderWidth$());
          $marker$$17_markerId$$11$$.$setDataColor$($item$$51$$.$getColor$())
        }
        1 > $fraction$$1_yOffset$$8$$ && ($clipPath$$14_hitArea$$4$$ = new D.$DvtClipPath$$, (0,D.$JSCompiler_StaticMethods_addRect$$)($clipPath$$14_hitArea$$4$$, $rectX$$, $rectY$$, $rectW$$1$$, $rectH$$1$$), (0,D.$JSCompiler_StaticMethods_setClipPath$$)($marker$$17_markerId$$11$$, $clipPath$$14_hitArea$$4$$));
        $isFirstMarker_location$$inline_7910$$ && ($isFirstMarker_location$$inline_7910$$ = new D.$DvtPoint$$($x$$258_xOffset$$5$$, $y$$233$$), $item$$51$$.$_keyboardTooltipLocation$ = $isFirstMarker_location$$inline_7910$$, $isFirstMarker_location$$inline_7910$$ = D.$JSCompiler_alias_FALSE$$);
        $item$$51$$.$addChild$($marker$$17_markerId$$11$$);
        $picto$$6$$.$_markers$.push($marker$$17_markerId$$11$$);
        $count$$25$$ -= $fraction$$1_yOffset$$8$$;
        $remainder$$ = ($remainder$$ + $fraction$$1_yOffset$$8$$) % 1
      }
      $container$$167$$.$addChild$($item$$51$$);
      $JSCompiler_StaticMethods_updateAriaAttributes$self$$inline_7915_prevColSpan$$ = $item$$51$$;
      $JSCompiler_StaticMethods_updateAriaAttributes$self$$inline_7915_prevColSpan$$.$setAriaRole$("img");
      $JSCompiler_StaticMethods_updateAriaAttributes$self$$inline_7915_prevColSpan$$.$_updateAriaLabel$();
      $JSCompiler_StaticMethods_updateAriaAttributes$self$$inline_7915_prevColSpan$$ = $colSpan$$1$$;
      $prevRowSpan$$ = $rowSpan$$1$$
    }
  }else {
    D.$DvtPictoChartRenderer$$.$renderEmptyText$($picto$$6$$, $container$$167$$, $availSpace$$114$$)
  }
};
D.$DvtPictoChartRenderer$$.$getInfo$ = function $$DvtPictoChartRenderer$$$$getInfo$$($isVert$$14_picto$$7$$, $width$$146$$, $height$$134$$) {
  var $options$$238_rowCount$$21$$ = $isVert$$14_picto$$7$$.$getOptions$(), $colWidth$$4_itemObjs$$ = $options$$238_rowCount$$21$$.items;
  if(!$colWidth$$4_itemObjs$$) {
    return{}
  }
  for(var $categoryMap$$1_rowHeight$$11$$ = D.$DvtArrayUtils$$.$createBooleanMap$($options$$238_rowCount$$21$$.hiddenCategories), $items$$30$$ = [], $numCells$$ = 0, $maxColSpan$$ = 1, $maxRowSpan$$ = 1, $colCount$$3_i$$760$$ = 0;$colCount$$3_i$$760$$ < $colWidth$$4_itemObjs$$.length;$colCount$$3_i$$760$$++) {
    if($colWidth$$4_itemObjs$$[$colCount$$3_i$$760$$] != D.$JSCompiler_alias_NULL$$) {
      var $item$$52$$ = new D.$DvtPictoChartItem$$($isVert$$14_picto$$7$$, $colWidth$$4_itemObjs$$[$colCount$$3_i$$760$$]);
      if(!$categoryMap$$1_rowHeight$$11$$ || !D.$DvtArrayUtils$$.$hasAnyMapItem$($categoryMap$$1_rowHeight$$11$$, $item$$52$$.$getCategories$())) {
        var $colSpan$$2$$ = (0,D.$JSCompiler_StaticMethods_getColSpan$$)($item$$52$$), $rowSpan$$2$$ = (0,D.$JSCompiler_StaticMethods_getRowSpan$$)($item$$52$$);
        $colSpan$$2$$ > $maxColSpan$$ && ($maxColSpan$$ = $colSpan$$2$$);
        $rowSpan$$2$$ > $maxRowSpan$$ && ($maxRowSpan$$ = $rowSpan$$2$$);
        $numCells$$ += $colSpan$$2$$ * $rowSpan$$2$$ * $item$$52$$.getCount();
        $items$$30$$.push($item$$52$$)
      }
    }
  }
  if(0 == $numCells$$) {
    return{}
  }
  $colWidth$$4_itemObjs$$ = $options$$238_rowCount$$21$$.columnWidth;
  $categoryMap$$1_rowHeight$$11$$ = $options$$238_rowCount$$21$$.rowHeight;
  if(!$width$$146$$ || !$height$$134$$) {
    $colWidth$$4_itemObjs$$ || ($colWidth$$4_itemObjs$$ = $categoryMap$$1_rowHeight$$11$$ ? $categoryMap$$1_rowHeight$$11$$ : $options$$238_rowCount$$21$$._defaultSize), $categoryMap$$1_rowHeight$$11$$ || ($categoryMap$$1_rowHeight$$11$$ = $colWidth$$4_itemObjs$$)
  }
  $isVert$$14_picto$$7$$ = D.$DvtPictoChartRenderer$$.$isVertical$($isVert$$14_picto$$7$$);
  $colCount$$3_i$$760$$ = $options$$238_rowCount$$21$$.columnCount;
  $options$$238_rowCount$$21$$ = $options$$238_rowCount$$21$$.rowCount;
  !$colCount$$3_i$$760$$ && !$options$$238_rowCount$$21$$ && ($width$$146$$ && $height$$134$$ ? $isVert$$14_picto$$7$$ ? $options$$238_rowCount$$21$$ = D.$DvtPictoChartRenderer$$.$_ceil$(window.Math.sqrt($numCells$$ * $height$$134$$ / $width$$146$$), $maxRowSpan$$) : $colCount$$3_i$$760$$ = D.$DvtPictoChartRenderer$$.$_ceil$(window.Math.sqrt($numCells$$ * $width$$146$$ / $height$$134$$), $maxColSpan$$) : $width$$146$$ ? $colCount$$3_i$$760$$ = window.Math.max(window.Math.floor($width$$146$$ / $colWidth$$4_itemObjs$$), 
  1) : $height$$134$$ ? $options$$238_rowCount$$21$$ = window.Math.max(window.Math.floor($height$$134$$ / $categoryMap$$1_rowHeight$$11$$), 1) : $isVert$$14_picto$$7$$ ? $options$$238_rowCount$$21$$ = D.$DvtPictoChartRenderer$$.$_ceil$(window.Math.sqrt($numCells$$), $maxRowSpan$$) : $colCount$$3_i$$760$$ = D.$DvtPictoChartRenderer$$.$_ceil$(window.Math.sqrt($numCells$$), $maxColSpan$$));
  $colCount$$3_i$$760$$ ? $options$$238_rowCount$$21$$ || ($options$$238_rowCount$$21$$ = D.$DvtPictoChartRenderer$$.$_ceil$($numCells$$ / $colCount$$3_i$$760$$, $maxRowSpan$$)) : $colCount$$3_i$$760$$ = D.$DvtPictoChartRenderer$$.$_ceil$($numCells$$ / $options$$238_rowCount$$21$$, $maxColSpan$$);
  $width$$146$$ && $height$$134$$ && ($colWidth$$4_itemObjs$$ || ($colWidth$$4_itemObjs$$ = $categoryMap$$1_rowHeight$$11$$ ? $categoryMap$$1_rowHeight$$11$$ : window.Math.min($width$$146$$ / $colCount$$3_i$$760$$, $height$$134$$ / $options$$238_rowCount$$21$$)), $categoryMap$$1_rowHeight$$11$$ || ($categoryMap$$1_rowHeight$$11$$ = $colWidth$$4_itemObjs$$));
  return 0 >= $colCount$$3_i$$760$$ || 0 >= $options$$238_rowCount$$21$$ || 0 >= $colWidth$$4_itemObjs$$ || 0 >= $categoryMap$$1_rowHeight$$11$$ ? {} : {$items$:$items$$30$$, $colCount$:$colCount$$3_i$$760$$, $rowCount$:$options$$238_rowCount$$21$$, $colWidth$:$colWidth$$4_itemObjs$$, $rowHeight$:$categoryMap$$1_rowHeight$$11$$}
};
D.$DvtPictoChartRenderer$$.$_ceil$ = function $$DvtPictoChartRenderer$$$$_ceil$$($a$$77$$, $b$$57$$) {
  return window.Math.ceil($a$$77$$ / $b$$57$$) * $b$$57$$
};
D.$DvtPictoChartRenderer$$.$_findNextAvailableCell$ = function $$DvtPictoChartRenderer$$$$_findNextAvailableCell$$($cell$$57_cellMap$$2$$, $colSpan$$3$$, $rowSpan$$3$$, $colCount$$4$$, $rowCount$$22$$, $isVert$$15_r$$87$$) {
  if($isVert$$15_r$$87$$) {
    return($cell$$57_cellMap$$2$$ = D.$DvtPictoChartRenderer$$.$_findNextAvailableCell$($cell$$57_cellMap$$2$$, $rowSpan$$3$$, $colSpan$$3$$, $rowCount$$22$$, $colCount$$4$$, D.$JSCompiler_alias_FALSE$$)) ? {$col$:$cell$$57_cellMap$$2$$.$row$, $row$:$cell$$57_cellMap$$2$$.$col$} : D.$JSCompiler_alias_NULL$$
  }
  for($isVert$$15_r$$87$$ = 0;$isVert$$15_r$$87$$ < $rowCount$$22$$ - $rowSpan$$3$$ + 1;$isVert$$15_r$$87$$++) {
    for(var $c$$45$$ = 0;$c$$45$$ < $colCount$$4$$ - $colSpan$$3$$ + 1;$c$$45$$++) {
      if(D.$DvtPictoChartRenderer$$.$_areCellsAvailable$($cell$$57_cellMap$$2$$, $c$$45$$, $isVert$$15_r$$87$$, $colSpan$$3$$, $rowSpan$$3$$)) {
        return D.$DvtPictoChartRenderer$$.$_occupyCells$($cell$$57_cellMap$$2$$, $c$$45$$, $isVert$$15_r$$87$$, $colSpan$$3$$, $rowSpan$$3$$), {$col$:$c$$45$$, $row$:$isVert$$15_r$$87$$}
      }
    }
  }
  return D.$JSCompiler_alias_NULL$$
};
D.$DvtPictoChartRenderer$$.$_areCellsAvailable$ = function $$DvtPictoChartRenderer$$$$_areCellsAvailable$$($cellMap$$3$$, $col$$5$$, $row$$54$$, $colSpan$$4$$, $rowSpan$$4$$) {
  for(var $r$$88$$ = 0;$r$$88$$ < $rowSpan$$4$$;$r$$88$$++) {
    for(var $c$$46$$ = 0;$c$$46$$ < $colSpan$$4$$;$c$$46$$++) {
      if($cellMap$$3$$.get($col$$5$$ + $c$$46$$, $row$$54$$ + $r$$88$$)) {
        return D.$JSCompiler_alias_FALSE$$
      }
    }
  }
  return D.$JSCompiler_alias_TRUE$$
};
D.$DvtPictoChartRenderer$$.$_occupyCells$ = function $$DvtPictoChartRenderer$$$$_occupyCells$$($cellMap$$4$$, $col$$6$$, $row$$55$$, $colSpan$$5$$, $rowSpan$$5$$) {
  for(var $r$$89$$ = 0;$r$$89$$ < $rowSpan$$5$$;$r$$89$$++) {
    for(var $c$$47$$ = 0;$c$$47$$ < $colSpan$$5$$;$c$$47$$++) {
      $cellMap$$4$$.put($col$$6$$ + $c$$47$$, $row$$55$$ + $r$$89$$, D.$JSCompiler_alias_TRUE$$)
    }
  }
};
D.$DvtPictoChartRenderer$$.$renderEmptyText$ = function $$DvtPictoChartRenderer$$$$renderEmptyText$$($picto$$8$$, $container$$168_emptyText$$4$$, $availSpace$$115$$) {
  var $options$$239$$ = $picto$$8$$.$getOptions$(), $emptyTextStr$$2$$ = (0,D.$DvtBundle$getTranslation$$)($options$$239$$, "labelNoData", "DvtUtilBundle", "NO_DATA");
  $container$$168_emptyText$$4$$ = D.$DvtTextUtils$$.$renderEmptyText$($container$$168_emptyText$$4$$, $emptyTextStr$$2$$, $availSpace$$115$$.$clone$(), $picto$$8$$.$getEventManager$(), $options$$239$$._statusMessageStyle);
  $picto$$8$$.$_emptyText$ = $container$$168_emptyText$$4$$
};
D.$DvtPictoChartRenderer$$.$isVertical$ = function $$DvtPictoChartRenderer$$$$isVertical$$($picto$$9$$) {
  return"vertical" == $picto$$9$$.$getOptions$().layout
};
D.$DvtPictoChartRenderer$$.$isOriginBottom$ = function $$DvtPictoChartRenderer$$$$isOriginBottom$$($origin_picto$$10$$) {
  $origin_picto$$10$$ = $origin_picto$$10$$.$getOptions$().layoutOrigin;
  return"bottomStart" == $origin_picto$$10$$ || "bottomEnd" == $origin_picto$$10$$
};
D.$DvtPictoChartRenderer$$.$isOriginRight$ = function $$DvtPictoChartRenderer$$$$isOriginRight$$($picto$$11$$) {
  var $isEnd$$1_origin$$1$$ = $picto$$11$$.$getOptions$().layoutOrigin, $isEnd$$1_origin$$1$$ = "topEnd" == $isEnd$$1_origin$$1$$ || "bottomEnd" == $isEnd$$1_origin$$1$$;
  return(0,D.$DvtAgent$isRightToLeft$$)($picto$$11$$.$getCtx$()) ? !$isEnd$$1_origin$$1$$ : $isEnd$$1_origin$$1$$
};

  return D;
});
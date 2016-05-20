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
  function $DvtPictoChartShapeMarker$$($DvtPictoChartKeyboardHandler$$, $DvtPictoChartItem$$, $DvtPictoChartImageMarker$$, $DvtPictoChartDefaults$$, $DvtPictoChartEventManager$$, $DvtPictoChartAutomation$$, $DvtPictoChartRenderer$$) {
    $DvtPictoChartShapeMarker$$.$superclass$.Init.call(this, $DvtPictoChartKeyboardHandler$$.$getCtx$(), $DvtPictoChartItem$$, dvt.$CSSStyle$.$SKIN_ALTA$, $DvtPictoChartImageMarker$$, $DvtPictoChartDefaults$$, $DvtPictoChartEventManager$$, $DvtPictoChartAutomation$$, $JSCompiler_alias_TRUE$$, $DvtPictoChartRenderer$$);
    this.$_picto$ = $DvtPictoChartKeyboardHandler$$
  }
  function $DvtPictoChartKeyboardHandler$$($DvtPictoChartShapeMarker$$) {
    this.Init($DvtPictoChartShapeMarker$$)
  }
  function $DvtPictoChartItem$$($DvtPictoChartShapeMarker$$, $DvtPictoChartKeyboardHandler$$) {
    this.Init($DvtPictoChartShapeMarker$$, $DvtPictoChartKeyboardHandler$$)
  }
  function $DvtPictoChartImageMarker$$($DvtPictoChartShapeMarker$$, $DvtPictoChartKeyboardHandler$$, $DvtPictoChartItem$$, $DvtPictoChartDefaults$$, $DvtPictoChartEventManager$$, $DvtPictoChartAutomation$$, $DvtPictoChartRenderer$$, $sourceHover$$, $sourceHoverSelected$$, $id$$153$$) {
    $DvtPictoChartImageMarker$$.$superclass$.Init.call(this, $DvtPictoChartShapeMarker$$.$getCtx$(), $DvtPictoChartKeyboardHandler$$, $DvtPictoChartItem$$, $DvtPictoChartDefaults$$, $DvtPictoChartEventManager$$, $DvtPictoChartAutomation$$, $DvtPictoChartRenderer$$, $sourceHover$$, $sourceHoverSelected$$, $id$$153$$);
    this.$_picto$ = $DvtPictoChartShapeMarker$$
  }
  function $DvtPictoChartDefaults$$() {
    this.Init({alta:$DvtPictoChartDefaults$$.$VERSION_1$})
  }
  function $DvtPictoChartEventManager$$($DvtPictoChartShapeMarker$$) {
    this.Init($DvtPictoChartShapeMarker$$.$getCtx$(), $DvtPictoChartShapeMarker$$.dispatchEvent, $DvtPictoChartShapeMarker$$);
    this.$_picto$ = $DvtPictoChartShapeMarker$$
  }
  function $DvtPictoChartAutomation$$($DvtPictoChartShapeMarker$$) {
    this.$_picto$ = $DvtPictoChartShapeMarker$$
  }
  dvt.$PictoChart$ = function $dvt$$PictoChart$$($DvtPictoChartShapeMarker$$, $DvtPictoChartKeyboardHandler$$, $DvtPictoChartItem$$) {
    this.Init($DvtPictoChartShapeMarker$$, $DvtPictoChartKeyboardHandler$$, $DvtPictoChartItem$$)
  };
  dvt.$Obj$.$createSubclass$(dvt.$PictoChart$, dvt.$BaseComponent$);
  dvt.$PictoChart$.newInstance = function $dvt$$PictoChart$$newInstance$($DvtPictoChartShapeMarker$$, $DvtPictoChartKeyboardHandler$$, $DvtPictoChartItem$$) {
    return new dvt.$PictoChart$($DvtPictoChartShapeMarker$$, $DvtPictoChartKeyboardHandler$$, $DvtPictoChartItem$$)
  };
  dvt.$PictoChart$.prototype.Init = function $dvt$$PictoChart$$$Init$($DvtPictoChartShapeMarker$$, $DvtPictoChartItem$$, $DvtPictoChartImageMarker$$) {
    dvt.$PictoChart$.$superclass$.Init.call(this, $DvtPictoChartShapeMarker$$, $DvtPictoChartItem$$, $DvtPictoChartImageMarker$$);
    this.$EventManager$ = new $DvtPictoChartEventManager$$(this);
    this.$EventManager$.$addListeners$(this);
    dvt.$Agent$.$isTouchDevice$() || this.$EventManager$.$setKeyboardHandler$(new $DvtPictoChartKeyboardHandler$$(this.$EventManager$));
    this.$Defaults$ = new $DvtPictoChartDefaults$$;
    this.$_items$ = []
  };
  dvt.$PictoChart$.prototype.$_getPreferredSize$ = function $dvt$$PictoChart$$$$_getPreferredSize$$($DvtPictoChartShapeMarker$$, $DvtPictoChartKeyboardHandler$$) {
    if(!$DvtPictoChartShapeMarker$$ || !$DvtPictoChartKeyboardHandler$$) {
      var $DvtPictoChartItem$$ = $DvtPictoChartRenderer$$.$getInfo$(this, $DvtPictoChartShapeMarker$$, $DvtPictoChartKeyboardHandler$$);
      this.$_info$ = $DvtPictoChartItem$$;
      $DvtPictoChartShapeMarker$$ || ($DvtPictoChartShapeMarker$$ = $DvtPictoChartItem$$.$items$ ? $DvtPictoChartItem$$.$colCount$ * $DvtPictoChartItem$$.$colWidth$ : 0);
      $DvtPictoChartKeyboardHandler$$ || ($DvtPictoChartKeyboardHandler$$ = $DvtPictoChartItem$$.$items$ ? $DvtPictoChartItem$$.$rowCount$ * $DvtPictoChartItem$$.$rowHeight$ : 0)
    }
    return new dvt.$Dimension$($DvtPictoChartShapeMarker$$, $DvtPictoChartKeyboardHandler$$)
  };
  dvt.$PictoChart$.prototype.$render$ = function $dvt$$PictoChart$$$$render$$($DvtPictoChartShapeMarker$$, $DvtPictoChartKeyboardHandler$$, $DvtPictoChartItem$$) {
    this.$_oldContainer$ = this.$_container$;
    var $DvtPictoChartImageMarker$$ = this.$_markers$, $DvtPictoChartDefaults$$ = this.$Width$ ? this.$Width$ : 0, $DvtPictoChartEventManager$$ = this.$Height$ ? this.$Height$ : 0;
    this.$EventManager$.$hideTooltip$();
    this.$_items$ = [];
    this.$_markers$ = [];
    this.$_info$ = $JSCompiler_alias_NULL$$;
    this.$_emptyText$ && (this.$_container$.removeChild(this.$_emptyText$), this.$_emptyText$ = $JSCompiler_alias_NULL$$);
    this.$_animation$ && (this.$_animationStopped$ = $JSCompiler_alias_TRUE$$, this.$_animation$.stop());
    this.$SetOptions$($DvtPictoChartShapeMarker$$);
    var $DvtPictoChartAutomation$$ = this.$getCtx$();
    if(!$DvtPictoChartKeyboardHandler$$ && !$DvtPictoChartItem$$) {
      if($DvtPictoChartAutomation$$.$_root$.style.display = "block", $DvtPictoChartKeyboardHandler$$ = this.$_getPreferredSize$(), dvt.$ToolkitUtils$.$setSvgSize$($DvtPictoChartAutomation$$, $DvtPictoChartKeyboardHandler$$.$w$, $DvtPictoChartKeyboardHandler$$.$h$), $DvtPictoChartItem$$ = dvt.$ToolkitUtils$.$getOuterDivSize$($DvtPictoChartAutomation$$), $DvtPictoChartKeyboardHandler$$.$w$ == $DvtPictoChartItem$$.$w$ && $DvtPictoChartKeyboardHandler$$.$h$ != $DvtPictoChartItem$$.$h$ ? (this.$Height$ = 
      $DvtPictoChartItem$$.$h$, $DvtPictoChartKeyboardHandler$$ = this.$_getPreferredSize$($JSCompiler_alias_NULL$$, this.$Height$), dvt.$ToolkitUtils$.$setSvgSize$($DvtPictoChartAutomation$$, $DvtPictoChartKeyboardHandler$$.$w$, this.$Height$), this.$Width$ = dvt.$ToolkitUtils$.$getOuterDivSize$($DvtPictoChartAutomation$$).$w$) : $DvtPictoChartKeyboardHandler$$.$w$ != $DvtPictoChartItem$$.$w$ && $DvtPictoChartKeyboardHandler$$.$h$ == $DvtPictoChartItem$$.$h$ ? (this.$Width$ = $DvtPictoChartItem$$.$w$, 
      $DvtPictoChartKeyboardHandler$$ = this.$_getPreferredSize$(this.$Width$, $JSCompiler_alias_NULL$$), dvt.$ToolkitUtils$.$setSvgSize$($DvtPictoChartAutomation$$, this.$Width$, $DvtPictoChartKeyboardHandler$$.$h$), this.$Height$ = dvt.$ToolkitUtils$.$getOuterDivSize$($DvtPictoChartAutomation$$).$h$) : (this.$Width$ = $DvtPictoChartItem$$.$w$, this.$Height$ = $DvtPictoChartItem$$.$h$), this.$Width$ != $DvtPictoChartKeyboardHandler$$.$w$ || this.$Height$ != $DvtPictoChartKeyboardHandler$$.$h$) {
        this.$_info$ = $JSCompiler_alias_NULL$$
      }
    }else {
      this.$Width$ = $DvtPictoChartKeyboardHandler$$, this.$Height$ = $DvtPictoChartItem$$
    }
    this.$_container$ = new dvt.$Container$($DvtPictoChartAutomation$$);
    this.$addChild$(this.$_container$);
    $DvtPictoChartRenderer$$.$render$(this, this.$_container$, new dvt.$Rectangle$(0, 0, this.$Width$, this.$Height$), this.$_info$);
    this.$_oldContainer$ ? "none" != this.$Options$.animationOnDataChange && $DvtPictoChartShapeMarker$$ && ($DvtPictoChartShapeMarker$$ = new dvt.$DataAnimationHandler$($DvtPictoChartAutomation$$, $JSCompiler_alias_NULL$$), $DvtPictoChartShapeMarker$$.$constructAnimation$($DvtPictoChartImageMarker$$, this.$_markers$), this.$_animation$ = $DvtPictoChartShapeMarker$$.$getAnimation$()) : this.$_animation$ = this.$_getAnimationOnDisplay$();
    this.$_animation$ ? (dvt.$ToolkitUtils$.$setSvgSize$($DvtPictoChartAutomation$$, Math.max($DvtPictoChartDefaults$$, this.$Width$), Math.max($DvtPictoChartEventManager$$, this.$Height$)), this.$EventManager$.$removeListeners$(this), this.$_emptyText$ && this.$_container$.removeChild(this.$_emptyText$), this.$_animation$.$setOnEnd$(this.$_onRenderEnd$, this), this.$_animation$.play()) : this.$_onRenderEnd$()
  };
  dvt.$PictoChart$.prototype.$SetOptions$ = function $dvt$$PictoChart$$$$SetOptions$$($DvtPictoChartShapeMarker$$) {
    $DvtPictoChartShapeMarker$$ ? this.$Options$ = this.$Defaults$.$calcOptions$($DvtPictoChartShapeMarker$$) : this.$Options$ || (this.$Options$ = this.$GetDefaults$());
    dvt.$Agent$.$isEnvironmentBrowser$() || (this.$Options$.animationOnDisplay = "none", this.$Options$.animationOnDataChange = "none");
    $DvtPictoChartShapeMarker$$ = this.$Options$.selectionMode;
    this.$_selectionHandler$ = "single" == $DvtPictoChartShapeMarker$$ ? new dvt.$SelectionHandler$(dvt.$SelectionHandler$.$TYPE_SINGLE$) : "multiple" == $DvtPictoChartShapeMarker$$ ? new dvt.$SelectionHandler$(dvt.$SelectionHandler$.$TYPE_MULTIPLE$) : $JSCompiler_alias_NULL$$;
    this.$EventManager$.$setSelectionHandler$(this.$_selectionHandler$)
  };
  dvt.$PictoChart$.prototype.$_onRenderEnd$ = function $dvt$$PictoChart$$$$_onRenderEnd$$() {
    this.$_oldContainer$ && (this.removeChild(this.$_oldContainer$), this.$_oldContainer$.$destroy$(), this.$_oldContainer$ = $JSCompiler_alias_NULL$$);
    this.$_animation$ && (this.$_animation$ = $JSCompiler_alias_NULL$$, this.$EventManager$.$addListeners$(this), this.$_emptyText$ && this.$_container$.$addChild$(this.$_emptyText$));
    dvt.$ToolkitUtils$.$setSvgSize$(this.$getCtx$(), this.$Width$, this.$Height$);
    this.$EventManager$.$setFocusObj$(this.$_items$[0]);
    this.$_selectionHandler$ && this.$_selectionHandler$.$processInitialSelections$(this.$Options$.selection, this.$_items$);
    dvt.$CategoryRolloverHandler$.$highlight$(this.$Options$.highlightedCategories, this.$_items$, "any" == this.$Options$.highlightMatch);
    this.$UpdateAriaAttributes$();
    this.$_animationStopped$ || this.$RenderComplete$();
    this.$_animationStopped$ = $JSCompiler_alias_NULL$$
  };
  dvt.$PictoChart$.prototype.$getEventManager$ = $JSCompiler_get$$("$EventManager$");
  dvt.$PictoChart$.prototype.$registerItems$ = $JSCompiler_set$$("$_items$");
  dvt.$PictoChart$.prototype.$getItems$ = $JSCompiler_get$$("$_items$");
  dvt.$PictoChart$.prototype.$registerMarker$ = function $dvt$$PictoChart$$$$registerMarker$$($DvtPictoChartShapeMarker$$) {
    this.$_markers$.push($DvtPictoChartShapeMarker$$)
  };
  dvt.$PictoChart$.prototype.$registerEmptyText$ = $JSCompiler_set$$("$_emptyText$");
  dvt.$PictoChart$.prototype.$getTotalCount$ = function $dvt$$PictoChart$$$$getTotalCount$$() {
    for(var $DvtPictoChartShapeMarker$$ = 0, $DvtPictoChartKeyboardHandler$$ = 0;$DvtPictoChartKeyboardHandler$$ < this.$_items$.length;$DvtPictoChartKeyboardHandler$$++) {
      $DvtPictoChartShapeMarker$$ += this.$_items$[$DvtPictoChartKeyboardHandler$$].getCount()
    }
    return $DvtPictoChartShapeMarker$$
  };
  dvt.$PictoChart$.prototype.$getAnimationDuration$ = function $dvt$$PictoChart$$$$getAnimationDuration$$() {
    return dvt.$StyleUtils$.$getTimeMilliseconds$(this.$Options$.animationDuration) / 1E3
  };
  dvt.$PictoChart$.prototype.$_getAnimationOnDisplay$ = function $dvt$$PictoChart$$$$_getAnimationOnDisplay$$() {
    var $DvtPictoChartShapeMarker$$ = this.$Options$.animationOnDisplay, $DvtPictoChartKeyboardHandler$$ = this.$getAnimationDuration$(), $DvtPictoChartItem$$ = this.$getCtx$(), $DvtPictoChartImageMarker$$ = new dvt.$Rectangle$(0, 0, this.$Width$, this.$Height$);
    if(dvt.$BlackBoxAnimationHandler$.isSupported($DvtPictoChartShapeMarker$$)) {
      return dvt.$BlackBoxAnimationHandler$.$getInAnimation$($DvtPictoChartItem$$, $DvtPictoChartShapeMarker$$, this.$_container$, $DvtPictoChartImageMarker$$, $DvtPictoChartKeyboardHandler$$)
    }
    var $DvtPictoChartDefaults$$ = [];
    if("popIn" == $DvtPictoChartShapeMarker$$) {
      for($DvtPictoChartShapeMarker$$ = 0;$DvtPictoChartShapeMarker$$ < this.$_markers$.length;$DvtPictoChartShapeMarker$$++) {
        var $DvtPictoChartEventManager$$ = this.$_markers$[$DvtPictoChartShapeMarker$$];
        $DvtPictoChartDefaults$$.push(new dvt.$AnimPopIn$($DvtPictoChartItem$$, $DvtPictoChartEventManager$$, $JSCompiler_alias_TRUE$$, $DvtPictoChartKeyboardHandler$$))
      }
    }else {
      if("none" != $DvtPictoChartShapeMarker$$) {
        for($DvtPictoChartShapeMarker$$ = 0;$DvtPictoChartShapeMarker$$ < this.$_markers$.length;$DvtPictoChartShapeMarker$$++) {
          var $DvtPictoChartEventManager$$ = this.$_markers$[$DvtPictoChartShapeMarker$$], $DvtPictoChartAutomation$$ = new dvt.$CustomAnimation$($DvtPictoChartItem$$, $DvtPictoChartEventManager$$, $DvtPictoChartKeyboardHandler$$), $startState$$7$$, $endState$$16$$;
          $DvtPictoChartRenderer$$.$isVertical$(this) ? ($startState$$7$$ = $DvtPictoChartRenderer$$.$isOriginRight$(this) ? this.$Width$ : 0, $endState$$16$$ = $DvtPictoChartEventManager$$.$getCx$(), $DvtPictoChartEventManager$$.$setCx$($startState$$7$$), $DvtPictoChartAutomation$$.$_animator$.$addProp$(dvt.$Animator$.$TYPE_NUMBER$, $DvtPictoChartEventManager$$, $DvtPictoChartEventManager$$.$getCx$, $DvtPictoChartEventManager$$.$setCx$, $endState$$16$$)) : ($startState$$7$$ = $DvtPictoChartRenderer$$.$isOriginBottom$(this) ? 
          this.$Height$ : 0, $endState$$16$$ = $DvtPictoChartEventManager$$.$getCy$(), $DvtPictoChartEventManager$$.$setCy$($startState$$7$$), $DvtPictoChartAutomation$$.$_animator$.$addProp$(dvt.$Animator$.$TYPE_NUMBER$, $DvtPictoChartEventManager$$, $DvtPictoChartEventManager$$.$getCy$, $DvtPictoChartEventManager$$.$setCy$, $endState$$16$$));
          $DvtPictoChartDefaults$$.push($DvtPictoChartAutomation$$)
        }
        $DvtPictoChartDefaults$$.push(dvt.$BlackBoxAnimationHandler$.$getInAnimation$($DvtPictoChartItem$$, dvt.$BlackBoxAnimationHandler$.$ALPHA_FADE$, this.$_container$, $DvtPictoChartImageMarker$$, $DvtPictoChartKeyboardHandler$$))
      }
    }
    return 0 < $DvtPictoChartDefaults$$.length ? new dvt.$ParallelPlayable$($DvtPictoChartItem$$, $DvtPictoChartDefaults$$) : $JSCompiler_alias_NULL$$
  };
  dvt.$PictoChart$.prototype.$destroy$ = function $dvt$$PictoChart$$$$destroy$$() {
    this.$EventManager$ && (this.$EventManager$.$removeListeners$(this), this.$EventManager$.$destroy$(), this.$EventManager$ = $JSCompiler_alias_NULL$$);
    dvt.$PictoChart$.$superclass$.$destroy$.call(this)
  };
  dvt.$PictoChart$.prototype.$highlight$ = function $dvt$$PictoChart$$$$highlight$$($DvtPictoChartShapeMarker$$) {
    var $DvtPictoChartKeyboardHandler$$ = this.$getOptions$();
    $DvtPictoChartKeyboardHandler$$.highlightedCategories = dvt.$JsonUtils$.$clone$($DvtPictoChartShapeMarker$$);
    dvt.$CategoryRolloverHandler$.$highlight$($DvtPictoChartShapeMarker$$, this.$getItems$(), "any" == $DvtPictoChartKeyboardHandler$$.highlightMatch)
  };
  dvt.$PictoChart$.prototype.select = function $dvt$$PictoChart$$$select$($DvtPictoChartShapeMarker$$) {
    this.$getOptions$().selection = dvt.$JsonUtils$.$clone$($DvtPictoChartShapeMarker$$);
    this.$_selectionHandler$ && this.$_selectionHandler$.$processInitialSelections$($DvtPictoChartShapeMarker$$, this.$getItems$())
  };
  dvt.$PictoChart$.prototype.$GetComponentDescription$ = function $dvt$$PictoChart$$$$GetComponentDescription$$() {
    return dvt.$Bundle$.$getTranslation$(this.$getOptions$(), "componentName", dvt.$Bundle$.$UTIL_PREFIX$, "PICTOCHART")
  };
  dvt.$PictoChart$.prototype.$getAutomation$ = function $dvt$$PictoChart$$$$getAutomation$$() {
    this.$_automation$ || (this.$_automation$ = new $DvtPictoChartAutomation$$(this));
    return this.$_automation$
  };
  dvt.$Obj$.$createSubclass$($DvtPictoChartAutomation$$, dvt.$Automation$);
  $DvtPictoChartAutomation$$.prototype.$GetSubIdForDomElement$ = function $$DvtPictoChartAutomation$$$$$GetSubIdForDomElement$$($DvtPictoChartShapeMarker$$) {
    return($DvtPictoChartShapeMarker$$ = this.$_picto$.$getEventManager$().$GetLogicalObject$($DvtPictoChartShapeMarker$$)) && $DvtPictoChartShapeMarker$$ instanceof $DvtPictoChartItem$$ ? "item[" + this.$_picto$.$getItems$().indexOf($DvtPictoChartShapeMarker$$) + "]" : $JSCompiler_alias_NULL$$
  };
  $DvtPictoChartAutomation$$.prototype.$getDomElementForSubId$ = function $$DvtPictoChartAutomation$$$$$getDomElementForSubId$$($DvtPictoChartShapeMarker$$) {
    if($DvtPictoChartShapeMarker$$ == dvt.$Automation$.$TOOLTIP_SUBID$) {
      return this.$GetTooltipElement$(this.$_picto$)
    }
    var $DvtPictoChartKeyboardHandler$$ = $DvtPictoChartShapeMarker$$.indexOf("[");
    return 0 < $DvtPictoChartKeyboardHandler$$ && "item" === $DvtPictoChartShapeMarker$$.substring(0, $DvtPictoChartKeyboardHandler$$) && ($DvtPictoChartShapeMarker$$ = parseInt($DvtPictoChartShapeMarker$$.substring($DvtPictoChartKeyboardHandler$$ + 1, $DvtPictoChartShapeMarker$$.length - 1)), $DvtPictoChartShapeMarker$$ = this.$_picto$.$getItems$()[$DvtPictoChartShapeMarker$$]) ? $DvtPictoChartShapeMarker$$.$getElem$() : $JSCompiler_alias_NULL$$
  };
  $DvtPictoChartAutomation$$.prototype.getItem = function $$DvtPictoChartAutomation$$$$getItem$($DvtPictoChartShapeMarker$$) {
    if($DvtPictoChartShapeMarker$$ = this.$_picto$.$getItems$()[$DvtPictoChartShapeMarker$$]) {
      var $DvtPictoChartKeyboardHandler$$ = {};
      $DvtPictoChartKeyboardHandler$$.color = $DvtPictoChartShapeMarker$$.$getDatatipColor$();
      $DvtPictoChartKeyboardHandler$$.tooltip = $DvtPictoChartShapeMarker$$.$getShortDesc$();
      $DvtPictoChartKeyboardHandler$$.id = $DvtPictoChartShapeMarker$$.getId();
      $DvtPictoChartKeyboardHandler$$.name = $DvtPictoChartShapeMarker$$.getName();
      $DvtPictoChartKeyboardHandler$$.count = $DvtPictoChartShapeMarker$$.getCount();
      $DvtPictoChartKeyboardHandler$$.selected = $DvtPictoChartShapeMarker$$.$isSelected$();
      return $DvtPictoChartKeyboardHandler$$
    }
    return $JSCompiler_alias_NULL$$
  };
  $DvtPictoChartAutomation$$.prototype.$getItemCount$ = function $$DvtPictoChartAutomation$$$$$getItemCount$$() {
    return this.$_picto$.$getItems$().length
  };
  dvt.$Obj$.$createSubclass$($DvtPictoChartEventManager$$, dvt.$EventManager$);
  $DvtPictoChartEventManager$$.prototype.$ProcessRolloverEvent$ = function $$DvtPictoChartEventManager$$$$$ProcessRolloverEvent$$($DvtPictoChartShapeMarker$$, $DvtPictoChartKeyboardHandler$$, $DvtPictoChartItem$$) {
    $DvtPictoChartShapeMarker$$ = this.$_picto$.$getOptions$();
    "none" != $DvtPictoChartShapeMarker$$.hoverBehavior && ($DvtPictoChartKeyboardHandler$$ = $DvtPictoChartKeyboardHandler$$.$getCategories$ ? $DvtPictoChartKeyboardHandler$$.$getCategories$() : [], $DvtPictoChartShapeMarker$$.highlightedCategories = $DvtPictoChartItem$$ ? $DvtPictoChartKeyboardHandler$$.slice() : $JSCompiler_alias_NULL$$, $DvtPictoChartItem$$ = dvt.$EventFactory$.$newCategoryHighlightEvent$($DvtPictoChartShapeMarker$$.highlightedCategories, $DvtPictoChartItem$$), $DvtPictoChartKeyboardHandler$$ = 
    dvt.$StyleUtils$.$getTimeMilliseconds$($DvtPictoChartShapeMarker$$.hoverBehaviorDelay), this.$RolloverHandler$.$processEvent$($DvtPictoChartItem$$, this.$_picto$.$getItems$(), $DvtPictoChartKeyboardHandler$$, "any" == $DvtPictoChartShapeMarker$$.highlightMatch))
  };
  $DvtPictoChartEventManager$$.prototype.$OnClickInternal$ = function $$DvtPictoChartEventManager$$$$$OnClickInternal$$($DvtPictoChartShapeMarker$$) {
    ($DvtPictoChartShapeMarker$$ = this.$GetLogicalObject$($DvtPictoChartShapeMarker$$.target)) && (!$DvtPictoChartShapeMarker$$.$isSelectable$ || !$DvtPictoChartShapeMarker$$.$isSelectable$()) && this.$processDrillEvent$($DvtPictoChartShapeMarker$$)
  };
  $DvtPictoChartEventManager$$.prototype.$OnDblClickInternal$ = function $$DvtPictoChartEventManager$$$$$OnDblClickInternal$$($DvtPictoChartShapeMarker$$) {
    ($DvtPictoChartShapeMarker$$ = this.$GetLogicalObject$($DvtPictoChartShapeMarker$$.target)) && $DvtPictoChartShapeMarker$$.$isSelectable$ && $DvtPictoChartShapeMarker$$.$isSelectable$() && this.$processDrillEvent$($DvtPictoChartShapeMarker$$)
  };
  $DvtPictoChartEventManager$$.prototype.$HandleTouchHoverEndInternal$ = function $$DvtPictoChartEventManager$$$$$HandleTouchHoverEndInternal$$($DvtPictoChartShapeMarker$$) {
    ($DvtPictoChartShapeMarker$$ = this.$GetLogicalObject$($DvtPictoChartShapeMarker$$.target)) && (!$DvtPictoChartShapeMarker$$.$isSelectable$ || !$DvtPictoChartShapeMarker$$.$isSelectable$()) && this.$processDrillEvent$($DvtPictoChartShapeMarker$$)
  };
  $DvtPictoChartEventManager$$.prototype.$HandleTouchClickInternal$ = function $$DvtPictoChartEventManager$$$$$HandleTouchClickInternal$$($DvtPictoChartShapeMarker$$) {
    ($DvtPictoChartShapeMarker$$ = this.$GetLogicalObject$($DvtPictoChartShapeMarker$$.target)) && (!$DvtPictoChartShapeMarker$$.$isSelectable$ || !$DvtPictoChartShapeMarker$$.$isSelectable$()) && this.$processDrillEvent$($DvtPictoChartShapeMarker$$)
  };
  $DvtPictoChartEventManager$$.prototype.$HandleTouchDblClickInternal$ = function $$DvtPictoChartEventManager$$$$$HandleTouchDblClickInternal$$($DvtPictoChartShapeMarker$$) {
    var $DvtPictoChartKeyboardHandler$$ = this.$GetLogicalObject$($DvtPictoChartShapeMarker$$.target);
    $DvtPictoChartKeyboardHandler$$ && ($DvtPictoChartKeyboardHandler$$.$isSelectable$ && $DvtPictoChartKeyboardHandler$$.$isSelectable$()) && ($DvtPictoChartShapeMarker$$.preventDefault(), $DvtPictoChartShapeMarker$$.stopPropagation(), this.$processDrillEvent$($DvtPictoChartKeyboardHandler$$))
  };
  $DvtPictoChartEventManager$$.prototype.$processDrillEvent$ = function $$DvtPictoChartEventManager$$$$$processDrillEvent$$($DvtPictoChartShapeMarker$$) {
    $DvtPictoChartShapeMarker$$ instanceof $DvtPictoChartItem$$ && $DvtPictoChartShapeMarker$$.$isDrillable$() && this.$FireEvent$(dvt.$EventFactory$.$newDrillEvent$($DvtPictoChartShapeMarker$$.getId()))
  };
  dvt.$Obj$.$createSubclass$($DvtPictoChartDefaults$$, dvt.$BaseComponentDefaults$);
  $DvtPictoChartDefaults$$.$VERSION_1$ = {animationOnDisplay:"none", animationOnDataChange:"none", animationDuration:750, drilling:"off", hiddenCategories:[], highlightedCategories:[], highlightMatch:"all", hoverBehavior:"none", hoverBehaviorDelay:200, layout:"horizontal", layoutOrigin:"topStart", selection:[], selectionMode:"none", _defaultColor:"#a6acb1", _defaultSize:32, _defaultShape:"rectangle", _gapRatio:0.25, _textStyle:new dvt.$CSSStyle$("font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 13px; color: #252525;"), 
  _statusMessageStyle:new dvt.$CSSStyle$("font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 13px; color: #252525;"), _tooltipStyle:new dvt.$CSSStyle$("border-collapse: separate; border-spacing: 1px"), _tooltipLabelStyle:new dvt.$CSSStyle$("color: #737373; padding: 0px 2px"), _tooltipValueStyle:new dvt.$CSSStyle$("color: #333333; padding: 0px 2px")};
  dvt.$Obj$.$createSubclass$($DvtPictoChartImageMarker$$, dvt.$ImageMarker$);
  $DvtPictoChartImageMarker$$.prototype.$animateUpdate$ = function $$DvtPictoChartImageMarker$$$$$animateUpdate$$($DvtPictoChartShapeMarker$$, $DvtPictoChartKeyboardHandler$$) {
    var $DvtPictoChartItem$$ = new dvt.$CustomAnimation$(this.$getCtx$(), this, 0.75 * this.$_picto$.$getAnimationDuration$()), $DvtPictoChartImageMarker$$ = $DvtPictoChartItem$$.$_animator$, $DvtPictoChartDefaults$$ = this.$_getAnimationParams$();
    this.$_setAnimationParams$($DvtPictoChartKeyboardHandler$$.$_getAnimationParams$());
    $DvtPictoChartImageMarker$$.$addProp$(dvt.$Animator$.$TYPE_NUMBER_ARRAY$, this, this.$_getAnimationParams$, this.$_setAnimationParams$, $DvtPictoChartDefaults$$);
    $DvtPictoChartKeyboardHandler$$.$setAlpha$(0);
    $DvtPictoChartShapeMarker$$.add($DvtPictoChartItem$$, 1)
  };
  $DvtPictoChartImageMarker$$.prototype.$animateDelete$ = function $$DvtPictoChartImageMarker$$$$$animateDelete$$($DvtPictoChartShapeMarker$$) {
    $DvtPictoChartShapeMarker$$.add(new dvt.$AnimFadeOut$(this.$getCtx$(), this, 0.5 * this.$_picto$.$getAnimationDuration$()), 0)
  };
  $DvtPictoChartImageMarker$$.prototype.$animateInsert$ = function $$DvtPictoChartImageMarker$$$$$animateInsert$$($DvtPictoChartShapeMarker$$) {
    this.$setAlpha$(0);
    $DvtPictoChartShapeMarker$$.add(new dvt.$AnimFadeIn$(this.$getCtx$(), this, 0.5 * this.$_picto$.$getAnimationDuration$()), 2)
  };
  $DvtPictoChartImageMarker$$.prototype.$_getAnimationParams$ = function $$DvtPictoChartImageMarker$$$$$_getAnimationParams$$() {
    return[this.$getCx$(), this.$getCy$(), this.getWidth(), this.getHeight()]
  };
  $DvtPictoChartImageMarker$$.prototype.$_setAnimationParams$ = function $$DvtPictoChartImageMarker$$$$$_setAnimationParams$$($DvtPictoChartShapeMarker$$) {
    this.$setCx$($DvtPictoChartShapeMarker$$[0]);
    this.$setCy$($DvtPictoChartShapeMarker$$[1]);
    this.$setWidth$($DvtPictoChartShapeMarker$$[2]);
    this.$setHeight$($DvtPictoChartShapeMarker$$[3])
  };
  dvt.$Obj$.$createSubclass$($DvtPictoChartItem$$, dvt.$Container$);
  $DvtPictoChartItem$$.$_counter$ = 0;
  $DvtPictoChartItem$$.prototype.Init = function $$DvtPictoChartItem$$$$Init$($DvtPictoChartShapeMarker$$, $DvtPictoChartKeyboardHandler$$) {
    $DvtPictoChartItem$$.$superclass$.Init.call(this, $DvtPictoChartShapeMarker$$.$getCtx$(), $JSCompiler_alias_NULL$$, $DvtPictoChartKeyboardHandler$$.id);
    this.$_picto$ = $DvtPictoChartShapeMarker$$;
    this.$_item$ = $DvtPictoChartKeyboardHandler$$;
    this.$_id$ = $DvtPictoChartKeyboardHandler$$.id != $JSCompiler_alias_NULL$$ ? $DvtPictoChartKeyboardHandler$$.id : $DvtPictoChartKeyboardHandler$$.name != $JSCompiler_alias_NULL$$ ? $DvtPictoChartKeyboardHandler$$.name : "_defaultId" + $DvtPictoChartItem$$.$_counter$;
    $DvtPictoChartItem$$.$_counter$++;
    this.$_isShowingKeyboardFocusEffect$ = this.$_isSelected$ = $JSCompiler_alias_FALSE$$;
    this.$_keyboardTooltipLocation$ = new dvt.$Point$(0, 0);
    (this.$isSelectable$() || this.$isDrillable$()) && this.setCursor("pointer");
    $DvtPictoChartShapeMarker$$.$getEventManager$().$associate$(this, this)
  };
  $DvtPictoChartItem$$.prototype.$getColSpan$ = function $$DvtPictoChartItem$$$$$getColSpan$$() {
    var $DvtPictoChartShapeMarker$$ = this.$_item$.columnSpan;
    return $DvtPictoChartShapeMarker$$ != $JSCompiler_alias_NULL$$ && 0 <= $DvtPictoChartShapeMarker$$ ? $DvtPictoChartShapeMarker$$ : 1
  };
  $DvtPictoChartItem$$.prototype.$getRowSpan$ = function $$DvtPictoChartItem$$$$$getRowSpan$$() {
    var $DvtPictoChartShapeMarker$$ = this.$_item$.rowSpan;
    return $DvtPictoChartShapeMarker$$ != $JSCompiler_alias_NULL$$ && 0 <= $DvtPictoChartShapeMarker$$ ? $DvtPictoChartShapeMarker$$ : 1
  };
  $DvtPictoChartItem$$.prototype.getCount = function $$DvtPictoChartItem$$$$getCount$() {
    var $DvtPictoChartShapeMarker$$ = this.$_item$.count;
    return $DvtPictoChartShapeMarker$$ != $JSCompiler_alias_NULL$$ ? Math.max($DvtPictoChartShapeMarker$$, 0) : 1
  };
  $DvtPictoChartItem$$.prototype.$getShape$ = function $$DvtPictoChartItem$$$$$getShape$$() {
    return this.$_item$.shape || this.$_picto$.$getOptions$()._defaultShape
  };
  $DvtPictoChartItem$$.prototype.$getColor$ = function $$DvtPictoChartItem$$$$$getColor$$() {
    return this.$_item$.color || this.$_picto$.$getOptions$()._defaultColor
  };
  $DvtPictoChartItem$$.prototype.$getBorderColor$ = function $$DvtPictoChartItem$$$$$getBorderColor$$() {
    return this.$_item$.borderColor
  };
  $DvtPictoChartItem$$.prototype.$getBorderWidth$ = function $$DvtPictoChartItem$$$$$getBorderWidth$$() {
    return this.$_item$.borderWidth
  };
  $DvtPictoChartItem$$.prototype.$getSource$ = function $$DvtPictoChartItem$$$$$getSource$$() {
    return this.$_item$.source
  };
  $DvtPictoChartItem$$.prototype.$getSourceSelected$ = function $$DvtPictoChartItem$$$$$getSourceSelected$$() {
    return this.$_item$.sourceSelected
  };
  $DvtPictoChartItem$$.prototype.$getSourceHover$ = function $$DvtPictoChartItem$$$$$getSourceHover$$() {
    return this.$_item$.sourceHover
  };
  $DvtPictoChartItem$$.prototype.$getSourceHoverSelected$ = function $$DvtPictoChartItem$$$$$getSourceHoverSelected$$() {
    return this.$_item$.sourceHoverSelected
  };
  $DvtPictoChartItem$$.prototype.getName = function $$DvtPictoChartItem$$$$getName$() {
    return this.$_item$.name
  };
  $DvtPictoChartItem$$.prototype.getId = $JSCompiler_get$$("$_id$");
  $DvtPictoChartItem$$.prototype.$getShortDesc$ = function $$DvtPictoChartItem$$$$$getShortDesc$$() {
    return this.$_item$.shortDesc
  };
  $DvtPictoChartItem$$.prototype.$isDrillable$ = function $$DvtPictoChartItem$$$$$isDrillable$$() {
    var $DvtPictoChartShapeMarker$$ = this.$_item$.drilling;
    return $DvtPictoChartShapeMarker$$ && "inherit" != $DvtPictoChartShapeMarker$$ ? "on" == $DvtPictoChartShapeMarker$$ : "on" == this.$_picto$.$getOptions$().drilling
  };
  $DvtPictoChartItem$$.prototype.$isDoubleClickable$ = function $$DvtPictoChartItem$$$$$isDoubleClickable$$() {
    return this.$isSelectable$() && this.$isDrillable$()
  };
  $DvtPictoChartItem$$.prototype.$updateAriaAttributes$ = function $$DvtPictoChartItem$$$$$updateAriaAttributes$$() {
    this.$setAriaRole$("img");
    this.$_updateAriaLabel$()
  };
  $DvtPictoChartItem$$.prototype.$getDatatip$ = function $$DvtPictoChartItem$$$$$getDatatip$$() {
    var $DvtPictoChartShapeMarker$$ = this.$_picto$.$getOptions$(), $DvtPictoChartKeyboardHandler$$ = this.$_picto$.$getOptions$().tooltip;
    if($DvtPictoChartKeyboardHandler$$) {
      var $DvtPictoChartShapeMarker$$ = this.$_picto$.$getCtx$().$getTooltipManager$(), $DvtPictoChartItem$$ = {id:this.getId(), name:this.getName(), count:this.getCount(), color:this.$getColor$()};
      return $DvtPictoChartShapeMarker$$.$getCustomTooltip$($DvtPictoChartKeyboardHandler$$, $DvtPictoChartItem$$)
    }
    if(this.$getShortDesc$() != $JSCompiler_alias_NULL$$) {
      return this.$getShortDesc$()
    }
    $DvtPictoChartKeyboardHandler$$ = "";
    ($DvtPictoChartItem$$ = this.getName()) && ($DvtPictoChartKeyboardHandler$$ = dvt.$HtmlTooltipManager$.$createStartTag$("td", $DvtPictoChartShapeMarker$$._tooltipLabelStyle) + $DvtPictoChartItem$$ + "\x3c/td\x3e");
    $DvtPictoChartItem$$ = dvt.$Agent$.$isRightToLeft$(this.$_picto$.$getCtx$());
    $DvtPictoChartShapeMarker$$._tooltipLabelStyle.$setStyle$(dvt.$CSSStyle$.$TEXT_ALIGN$, $DvtPictoChartItem$$ ? "left" : "right");
    $DvtPictoChartShapeMarker$$._tooltipValueStyle.$setStyle$(dvt.$CSSStyle$.$TEXT_ALIGN$, $DvtPictoChartItem$$ ? "right" : "left");
    return dvt.$HtmlTooltipManager$.$createStartTag$("table", $DvtPictoChartShapeMarker$$._tooltipStyle) + "\x3ctr\x3e" + $DvtPictoChartKeyboardHandler$$ + dvt.$HtmlTooltipManager$.$createStartTag$("td", $DvtPictoChartShapeMarker$$._tooltipValueStyle) + this.$_getCountString$() + "\x3c/td\x3e\x3c/tr\x3e\x3c/table\x3e"
  };
  $DvtPictoChartItem$$.prototype.$getDatatipColor$ = function $$DvtPictoChartItem$$$$$getDatatipColor$$() {
    return this.$getColor$()
  };
  $DvtPictoChartItem$$.prototype.$_getCountString$ = function $$DvtPictoChartItem$$$$$_getCountString$$() {
    return dvt.$Bundle$.$getTranslation$(this.$_picto$.$getOptions$(), "labelCountWithTotal", dvt.$Bundle$.$UTIL_PREFIX$, "COUNT_WITH_TOTAL", [this.getCount(), this.$_picto$.$getTotalCount$()])
  };
  $DvtPictoChartItem$$.prototype.$isSelectable$ = function $$DvtPictoChartItem$$$$$isSelectable$$() {
    return"none" != this.$_picto$.$getOptions$().selectionMode
  };
  $DvtPictoChartItem$$.prototype.$isSelected$ = $JSCompiler_get$$("$_isSelected$");
  $DvtPictoChartItem$$.prototype.$setSelected$ = function $$DvtPictoChartItem$$$$$setSelected$$($DvtPictoChartKeyboardHandler$$) {
    this.$_isSelected$ = $DvtPictoChartKeyboardHandler$$;
    this.$_updateAriaLabel$();
    for(var $DvtPictoChartItem$$ = 0;$DvtPictoChartItem$$ < this.$getNumChildren$();$DvtPictoChartItem$$++) {
      var $DvtPictoChartDefaults$$ = this.$getChildAt$($DvtPictoChartItem$$);
      ($DvtPictoChartDefaults$$ instanceof $DvtPictoChartShapeMarker$$ || $DvtPictoChartDefaults$$ instanceof $DvtPictoChartImageMarker$$) && $DvtPictoChartDefaults$$.$setSelected$($DvtPictoChartKeyboardHandler$$)
    }
  };
  $DvtPictoChartItem$$.prototype.$showHoverEffect$ = function $$DvtPictoChartItem$$$$$showHoverEffect$$() {
    for(var $DvtPictoChartKeyboardHandler$$ = 0;$DvtPictoChartKeyboardHandler$$ < this.$getNumChildren$();$DvtPictoChartKeyboardHandler$$++) {
      var $DvtPictoChartItem$$ = this.$getChildAt$($DvtPictoChartKeyboardHandler$$);
      ($DvtPictoChartItem$$ instanceof $DvtPictoChartShapeMarker$$ || $DvtPictoChartItem$$ instanceof $DvtPictoChartImageMarker$$) && $DvtPictoChartItem$$.$showHoverEffect$()
    }
  };
  $DvtPictoChartItem$$.prototype.$hideHoverEffect$ = function $$DvtPictoChartItem$$$$$hideHoverEffect$$() {
    for(var $DvtPictoChartKeyboardHandler$$ = 0;$DvtPictoChartKeyboardHandler$$ < this.$getNumChildren$();$DvtPictoChartKeyboardHandler$$++) {
      var $DvtPictoChartItem$$ = this.$getChildAt$($DvtPictoChartKeyboardHandler$$);
      ($DvtPictoChartItem$$ instanceof $DvtPictoChartShapeMarker$$ || $DvtPictoChartItem$$ instanceof $DvtPictoChartImageMarker$$) && $DvtPictoChartItem$$.$hideHoverEffect$()
    }
  };
  $DvtPictoChartItem$$.prototype.$getDisplayables$ = function $$DvtPictoChartItem$$$$$getDisplayables$$() {
    return[this]
  };
  $DvtPictoChartItem$$.prototype.$getAriaLabel$ = function $$DvtPictoChartItem$$$$$getAriaLabel$$() {
    var $DvtPictoChartShapeMarker$$ = [], $DvtPictoChartKeyboardHandler$$ = this.$_picto$.$getOptions$();
    this.$isSelectable$() && $DvtPictoChartShapeMarker$$.push(dvt.$Bundle$.$getTranslation$($DvtPictoChartKeyboardHandler$$, this.$isSelected$() ? "stateSelected" : "stateUnselected", dvt.$Bundle$.$UTIL_PREFIX$, this.$isSelected$() ? "STATE_SELECTED" : "STATE_UNSELECTED"));
    this.$isDrillable$() && $DvtPictoChartShapeMarker$$.push(dvt.$Bundle$.$getTranslation$($DvtPictoChartKeyboardHandler$$, "stateDrillable", dvt.$Bundle$.$UTIL_PREFIX$, "STATE_DRILLABLE"));
    $DvtPictoChartKeyboardHandler$$ = this.getName();
    $DvtPictoChartKeyboardHandler$$ = this.$getShortDesc$() != $JSCompiler_alias_NULL$$ ? this.$getShortDesc$() : $DvtPictoChartKeyboardHandler$$ == $JSCompiler_alias_NULL$$ ? this.$_getCountString$() : dvt.$Bundle$.$getTranslatedString$(dvt.$Bundle$.$UTIL_PREFIX$, "COLON_SEP_LIST", [$DvtPictoChartKeyboardHandler$$, this.$_getCountString$()]);
    return dvt.$Displayable$.$generateAriaLabel$($DvtPictoChartKeyboardHandler$$, $DvtPictoChartShapeMarker$$)
  };
  $DvtPictoChartItem$$.prototype.$_updateAriaLabel$ = function $$DvtPictoChartItem$$$$$_updateAriaLabel$$() {
    dvt.$Agent$.$deferAriaCreation$() || this.$setAriaProperty$("label", this.$getAriaLabel$())
  };
  $DvtPictoChartItem$$.prototype.$getCategories$ = function $$DvtPictoChartItem$$$$$getCategories$$() {
    return this.$_item$.categories || [this.getId()]
  };
  $DvtPictoChartItem$$.prototype.$getNextNavigable$ = function $$DvtPictoChartItem$$$$$getNextNavigable$$($DvtPictoChartShapeMarker$$) {
    var $DvtPictoChartItem$$ = this.$_picto$.$getEventManager$().$KeyboardHandler$;
    return $DvtPictoChartShapeMarker$$.type == dvt.$MouseEvent$.$CLICK$ || $DvtPictoChartItem$$.$isMultiSelectEvent$($DvtPictoChartShapeMarker$$) ? this : $DvtPictoChartItem$$.$isNavigationEvent$($DvtPictoChartShapeMarker$$) ? $DvtPictoChartKeyboardHandler$$.$getNextNavigable$(this.$_picto$, this, $DvtPictoChartShapeMarker$$) : $JSCompiler_alias_NULL$$
  };
  $DvtPictoChartItem$$.prototype.$getKeyboardBoundingBox$ = function $$DvtPictoChartItem$$$$$getKeyboardBoundingBox$$($DvtPictoChartShapeMarker$$) {
    return this.$getDimensions$($DvtPictoChartShapeMarker$$)
  };
  $DvtPictoChartItem$$.prototype.$getTargetElem$ = function $$DvtPictoChartItem$$$$$getTargetElem$$() {
    return this.$getElem$()
  };
  $DvtPictoChartItem$$.prototype.$showKeyboardFocusEffect$ = function $$DvtPictoChartItem$$$$$showKeyboardFocusEffect$$() {
    this.$_isShowingKeyboardFocusEffect$ = $JSCompiler_alias_TRUE$$;
    this.$showHoverEffect$()
  };
  $DvtPictoChartItem$$.prototype.$hideKeyboardFocusEffect$ = function $$DvtPictoChartItem$$$$$hideKeyboardFocusEffect$$() {
    this.$_isShowingKeyboardFocusEffect$ = $JSCompiler_alias_FALSE$$;
    this.$hideHoverEffect$()
  };
  $DvtPictoChartItem$$.prototype.$isShowingKeyboardFocusEffect$ = $JSCompiler_get$$("$_isShowingKeyboardFocusEffect$");
  $DvtPictoChartItem$$.prototype.$setKeyboardTooltipLocation$ = $JSCompiler_set$$("$_keyboardTooltipLocation$");
  $DvtPictoChartItem$$.prototype.$getKeyboardTooltipLocation$ = $JSCompiler_get$$("$_keyboardTooltipLocation$");
  dvt.$Obj$.$createSubclass$($DvtPictoChartKeyboardHandler$$, dvt.$KeyboardHandler$);
  $DvtPictoChartKeyboardHandler$$.prototype.$isSelectionEvent$ = function $$DvtPictoChartKeyboardHandler$$$$$isSelectionEvent$$($DvtPictoChartShapeMarker$$) {
    return this.$isNavigationEvent$($DvtPictoChartShapeMarker$$) && !$DvtPictoChartShapeMarker$$.ctrlKey
  };
  $DvtPictoChartKeyboardHandler$$.prototype.$isMultiSelectEvent$ = function $$DvtPictoChartKeyboardHandler$$$$$isMultiSelectEvent$$($DvtPictoChartShapeMarker$$) {
    return $DvtPictoChartShapeMarker$$.keyCode == dvt.$KeyboardEvent$.$SPACE$ && $DvtPictoChartShapeMarker$$.ctrlKey
  };
  $DvtPictoChartKeyboardHandler$$.$getNextNavigable$ = function $$DvtPictoChartKeyboardHandler$$$$getNextNavigable$$($DvtPictoChartShapeMarker$$, $DvtPictoChartKeyboardHandler$$, $DvtPictoChartItem$$) {
    var $DvtPictoChartImageMarker$$ = $DvtPictoChartRenderer$$.$isOriginRight$($DvtPictoChartShapeMarker$$), $DvtPictoChartDefaults$$ = $DvtPictoChartRenderer$$.$isOriginBottom$($DvtPictoChartShapeMarker$$);
    $DvtPictoChartItem$$ = $DvtPictoChartItem$$.keyCode == dvt.$KeyboardEvent$.$LEFT_ARROW$ && $DvtPictoChartImageMarker$$ || $DvtPictoChartItem$$.keyCode == dvt.$KeyboardEvent$.$RIGHT_ARROW$ && !$DvtPictoChartImageMarker$$ || $DvtPictoChartItem$$.keyCode == dvt.$KeyboardEvent$.$UP_ARROW$ && $DvtPictoChartDefaults$$ || $DvtPictoChartItem$$.keyCode == dvt.$KeyboardEvent$.$DOWN_ARROW$ && !$DvtPictoChartDefaults$$;
    $DvtPictoChartShapeMarker$$ = $DvtPictoChartShapeMarker$$.$getItems$();
    $DvtPictoChartItem$$ = dvt.$ArrayUtils$.$getIndex$($DvtPictoChartShapeMarker$$, $DvtPictoChartKeyboardHandler$$) + ($DvtPictoChartItem$$ ? 1 : -1);
    return $DvtPictoChartItem$$ < $DvtPictoChartShapeMarker$$.length && 0 <= $DvtPictoChartItem$$ ? $DvtPictoChartShapeMarker$$[$DvtPictoChartItem$$] : $DvtPictoChartKeyboardHandler$$
  };
  $DvtPictoChartKeyboardHandler$$.prototype.$processKeyDown$ = function $$DvtPictoChartKeyboardHandler$$$$$processKeyDown$$($DvtPictoChartShapeMarker$$) {
    var $DvtPictoChartItem$$ = this.$_eventManager$.$getFocus$();
    return $DvtPictoChartItem$$ && $DvtPictoChartShapeMarker$$.keyCode == dvt.$KeyboardEvent$.$ENTER$ ? (this.$_eventManager$.$processDrillEvent$($DvtPictoChartItem$$), dvt.$EventManager$.$consumeEvent$($DvtPictoChartShapeMarker$$), $DvtPictoChartItem$$) : $DvtPictoChartKeyboardHandler$$.$superclass$.$processKeyDown$.call(this, $DvtPictoChartShapeMarker$$)
  };
  dvt.$Obj$.$createSubclass$($DvtPictoChartShapeMarker$$, dvt.$SimpleMarker$);
  $DvtPictoChartShapeMarker$$.prototype.$animateUpdate$ = function $$DvtPictoChartShapeMarker$$$$$animateUpdate$$($DvtPictoChartShapeMarker$$, $DvtPictoChartKeyboardHandler$$) {
    var $DvtPictoChartItem$$ = new dvt.$CustomAnimation$(this.$getCtx$(), this, 0.75 * this.$_picto$.$getAnimationDuration$()), $DvtPictoChartImageMarker$$ = $DvtPictoChartItem$$.$_animator$, $DvtPictoChartDefaults$$ = this.$getFill$();
    this.$setFill$($DvtPictoChartKeyboardHandler$$.$getFill$().$clone$());
    $DvtPictoChartImageMarker$$.$addProp$(dvt.$Animator$.$TYPE_FILL$, this, this.$getFill$, this.$setFill$, $DvtPictoChartDefaults$$);
    $DvtPictoChartDefaults$$ = this.$_getAnimationParams$();
    this.$_setAnimationParams$($DvtPictoChartKeyboardHandler$$.$_getAnimationParams$());
    $DvtPictoChartImageMarker$$.$addProp$(dvt.$Animator$.$TYPE_NUMBER_ARRAY$, this, this.$_getAnimationParams$, this.$_setAnimationParams$, $DvtPictoChartDefaults$$);
    $DvtPictoChartKeyboardHandler$$.$setAlpha$(0);
    $DvtPictoChartShapeMarker$$.add($DvtPictoChartItem$$, 1)
  };
  $DvtPictoChartShapeMarker$$.prototype.$animateDelete$ = function $$DvtPictoChartShapeMarker$$$$$animateDelete$$($DvtPictoChartShapeMarker$$) {
    $DvtPictoChartShapeMarker$$.add(new dvt.$AnimFadeOut$(this.$getCtx$(), this, 0.5 * this.$_picto$.$getAnimationDuration$()), 0)
  };
  $DvtPictoChartShapeMarker$$.prototype.$animateInsert$ = function $$DvtPictoChartShapeMarker$$$$$animateInsert$$($DvtPictoChartShapeMarker$$) {
    this.$setAlpha$(0);
    $DvtPictoChartShapeMarker$$.add(new dvt.$AnimFadeIn$(this.$getCtx$(), this, 0.5 * this.$_picto$.$getAnimationDuration$()), 2)
  };
  $DvtPictoChartShapeMarker$$.prototype.$_getAnimationParams$ = function $$DvtPictoChartShapeMarker$$$$$_getAnimationParams$$() {
    return[this.$getCx$(), this.$getCy$(), this.getWidth(), this.getHeight()]
  };
  $DvtPictoChartShapeMarker$$.prototype.$_setAnimationParams$ = function $$DvtPictoChartShapeMarker$$$$$_setAnimationParams$$($DvtPictoChartShapeMarker$$) {
    this.$setCx$($DvtPictoChartShapeMarker$$[0]);
    this.$setCy$($DvtPictoChartShapeMarker$$[1]);
    this.$setWidth$($DvtPictoChartShapeMarker$$[2]);
    this.$setHeight$($DvtPictoChartShapeMarker$$[3])
  };
  var $DvtPictoChartRenderer$$ = {};
  dvt.$Obj$.$createSubclass$($DvtPictoChartRenderer$$, dvt.$Obj$);
  $DvtPictoChartRenderer$$.$render$ = function $$DvtPictoChartRenderer$$$$render$$($DvtPictoChartKeyboardHandler$$, $DvtPictoChartItem$$, $DvtPictoChartDefaults$$, $DvtPictoChartEventManager$$) {
    var $DvtPictoChartAutomation$$ = $DvtPictoChartKeyboardHandler$$.$getCtx$(), $background$$13_gapRatio$$1$$ = new dvt.$Rect$($DvtPictoChartAutomation$$, $DvtPictoChartDefaults$$.x, $DvtPictoChartDefaults$$.y, $DvtPictoChartDefaults$$.$w$, $DvtPictoChartDefaults$$.$h$);
    $background$$13_gapRatio$$1$$.$setInvisibleFill$();
    $DvtPictoChartItem$$.$addChild$($background$$13_gapRatio$$1$$);
    $DvtPictoChartEventManager$$ || ($DvtPictoChartEventManager$$ = $DvtPictoChartRenderer$$.$getInfo$($DvtPictoChartKeyboardHandler$$, $DvtPictoChartDefaults$$.$w$, $DvtPictoChartDefaults$$.$h$));
    if($DvtPictoChartEventManager$$.$items$) {
      $DvtPictoChartKeyboardHandler$$.$registerItems$($DvtPictoChartEventManager$$.$items$);
      for(var $background$$13_gapRatio$$1$$ = $DvtPictoChartKeyboardHandler$$.$getOptions$()._gapRatio, $isVert$$12$$ = $DvtPictoChartRenderer$$.$isVertical$($DvtPictoChartKeyboardHandler$$), $isOriginBottom$$1$$ = $DvtPictoChartRenderer$$.$isOriginBottom$($DvtPictoChartKeyboardHandler$$), $isOriginRight$$1$$ = $DvtPictoChartRenderer$$.$isOriginRight$($DvtPictoChartKeyboardHandler$$), $cellMap$$1$$ = new dvt.$Map2D$, $prevColSpan$$ = 0, $prevRowSpan$$ = 0, $remainder$$ = 0, $i$$543$$ = 0;$i$$543$$ < 
      $DvtPictoChartEventManager$$.$items$.length;$i$$543$$++) {
        for(var $item$$45$$ = $DvtPictoChartEventManager$$.$items$[$i$$543$$], $colSpan$$1$$ = $item$$45$$.$getColSpan$(), $rowSpan$$1$$ = $item$$45$$.$getRowSpan$(), $w$$37$$ = $colSpan$$1$$ * $DvtPictoChartEventManager$$.$colWidth$, $h$$33$$ = $rowSpan$$1$$ * $DvtPictoChartEventManager$$.$rowHeight$, $count$$22$$ = $item$$45$$.getCount(), $index$$177$$ = 0, $isFirstMarker$$ = $JSCompiler_alias_TRUE$$, $cell$$27$$;0 < $count$$22$$;) {
          if($colSpan$$1$$ != $prevColSpan$$ || $rowSpan$$1$$ != $prevRowSpan$$) {
            $remainder$$ = 0
          }
          0 == $remainder$$ && ($cell$$27$$ = $DvtPictoChartRenderer$$.$_findNextAvailableCell$($cellMap$$1$$, $colSpan$$1$$, $rowSpan$$1$$, $DvtPictoChartEventManager$$.$colCount$, $DvtPictoChartEventManager$$.$rowCount$, $isVert$$12$$));
          if($cell$$27$$ == $JSCompiler_alias_NULL$$) {
            break
          }
          var $x$$176_xOffset$$3$$ = $cell$$27$$.$col$ * $DvtPictoChartEventManager$$.$colWidth$ + $w$$37$$ / 2, $y$$155_yOffset$$6$$ = $cell$$27$$.$row$ * $DvtPictoChartEventManager$$.$rowHeight$ + $h$$33$$ / 2, $x$$176_xOffset$$3$$ = $DvtPictoChartDefaults$$.x + ($isOriginRight$$1$$ ? $DvtPictoChartDefaults$$.$w$ - $x$$176_xOffset$$3$$ : $x$$176_xOffset$$3$$), $y$$155_yOffset$$6$$ = $DvtPictoChartDefaults$$.y + ($isOriginBottom$$1$$ ? $DvtPictoChartDefaults$$.$h$ - $y$$155_yOffset$$6$$ : $y$$155_yOffset$$6$$), 
          $fraction$$1$$ = Math.min(1 - $remainder$$, $count$$22$$), $rectX$$, $rectY$$, $rectW$$1$$, $rectH$$1$$;
          $isVert$$12$$ ? ($rectX$$ = $x$$176_xOffset$$3$$ - $w$$37$$ / 2, $rectY$$ = $isOriginBottom$$1$$ ? $y$$155_yOffset$$6$$ + $h$$33$$ * (0.5 - $fraction$$1$$ - $remainder$$) : $y$$155_yOffset$$6$$ + $h$$33$$ * ($remainder$$ - 0.5), $rectW$$1$$ = $w$$37$$, $rectH$$1$$ = $h$$33$$ * $fraction$$1$$) : ($rectX$$ = $isOriginRight$$1$$ ? $x$$176_xOffset$$3$$ + $w$$37$$ * (0.5 - $fraction$$1$$ - $remainder$$) : $x$$176_xOffset$$3$$ + $w$$37$$ * ($remainder$$ - 0.5), $rectY$$ = $y$$155_yOffset$$6$$ - 
          $h$$33$$ / 2, $rectW$$1$$ = $w$$37$$ * $fraction$$1$$, $rectH$$1$$ = $h$$33$$);
          var $marker$$12_markerId$$;
          1 == $fraction$$1$$ ? ($marker$$12_markerId$$ = $item$$45$$.getId() + "_" + $index$$177$$, $index$$177$$++) : $marker$$12_markerId$$ = Math.random();
          if($item$$45$$.$getSource$()) {
            $marker$$12_markerId$$ = new $DvtPictoChartImageMarker$$($DvtPictoChartKeyboardHandler$$, $x$$176_xOffset$$3$$, $y$$155_yOffset$$6$$, $w$$37$$, $h$$33$$, $item$$45$$.$getSource$(), $item$$45$$.$getSourceSelected$(), $item$$45$$.$getSourceHover$(), $item$$45$$.$getSourceHoverSelected$(), $marker$$12_markerId$$ + "_I")
          }else {
            var $clipPath$$14_hitArea$$3$$ = new dvt.$Rect$($DvtPictoChartAutomation$$, $rectX$$, $rectY$$, $rectW$$1$$, $rectH$$1$$);
            $clipPath$$14_hitArea$$3$$.$setInvisibleFill$();
            $item$$45$$.$addChild$($clipPath$$14_hitArea$$3$$);
            $marker$$12_markerId$$ = new $DvtPictoChartShapeMarker$$($DvtPictoChartKeyboardHandler$$, $item$$45$$.$getShape$(), $x$$176_xOffset$$3$$, $y$$155_yOffset$$6$$, $w$$37$$ - $DvtPictoChartEventManager$$.$colWidth$ * $background$$13_gapRatio$$1$$, $h$$33$$ - $DvtPictoChartEventManager$$.$rowHeight$ * $background$$13_gapRatio$$1$$, $marker$$12_markerId$$ + "_S");
            $marker$$12_markerId$$.$setSolidFill$($item$$45$$.$getColor$());
            $marker$$12_markerId$$.$setSolidStroke$($item$$45$$.$getBorderColor$(), $JSCompiler_alias_NULL$$, $item$$45$$.$getBorderWidth$());
            $marker$$12_markerId$$.$setDataColor$($item$$45$$.$getColor$())
          }
          1 > $fraction$$1$$ && ($clipPath$$14_hitArea$$3$$ = new dvt.$ClipPath$, $clipPath$$14_hitArea$$3$$.$addRect$($rectX$$, $rectY$$, $rectW$$1$$, $rectH$$1$$), $marker$$12_markerId$$.$setClipPath$($clipPath$$14_hitArea$$3$$));
          $isFirstMarker$$ && ($item$$45$$.$setKeyboardTooltipLocation$(new dvt.$Point$($x$$176_xOffset$$3$$, $y$$155_yOffset$$6$$)), $isFirstMarker$$ = $JSCompiler_alias_FALSE$$);
          $item$$45$$.$addChild$($marker$$12_markerId$$);
          $DvtPictoChartKeyboardHandler$$.$registerMarker$($marker$$12_markerId$$);
          $count$$22$$ -= $fraction$$1$$;
          $remainder$$ = ($remainder$$ + $fraction$$1$$) % 1
        }
        $DvtPictoChartItem$$.$addChild$($item$$45$$);
        $item$$45$$.$updateAriaAttributes$();
        $prevColSpan$$ = $colSpan$$1$$;
        $prevRowSpan$$ = $rowSpan$$1$$
      }
    }else {
      $DvtPictoChartRenderer$$.$renderEmptyText$($DvtPictoChartKeyboardHandler$$, $DvtPictoChartItem$$, $DvtPictoChartDefaults$$)
    }
  };
  $DvtPictoChartRenderer$$.$getInfo$ = function $$DvtPictoChartRenderer$$$$getInfo$$($DvtPictoChartShapeMarker$$, $DvtPictoChartKeyboardHandler$$, $DvtPictoChartImageMarker$$) {
    var $DvtPictoChartDefaults$$ = $DvtPictoChartShapeMarker$$.$getOptions$(), $DvtPictoChartEventManager$$ = $DvtPictoChartDefaults$$.items;
    if(!$DvtPictoChartEventManager$$) {
      return{}
    }
    for(var $DvtPictoChartAutomation$$ = dvt.$ArrayUtils$.$createBooleanMap$($DvtPictoChartDefaults$$.hiddenCategories), $items$$29$$ = [], $numCells$$ = 0, $maxColSpan$$ = 1, $maxRowSpan$$ = 1, $colCount$$1_i$$544$$ = 0;$colCount$$1_i$$544$$ < $DvtPictoChartEventManager$$.length;$colCount$$1_i$$544$$++) {
      if($DvtPictoChartEventManager$$[$colCount$$1_i$$544$$] != $JSCompiler_alias_NULL$$) {
        var $item$$46$$ = new $DvtPictoChartItem$$($DvtPictoChartShapeMarker$$, $DvtPictoChartEventManager$$[$colCount$$1_i$$544$$]);
        if(!$DvtPictoChartAutomation$$ || !dvt.$ArrayUtils$.$hasAnyMapItem$($DvtPictoChartAutomation$$, $item$$46$$.$getCategories$())) {
          var $colSpan$$2$$ = $item$$46$$.$getColSpan$(), $rowSpan$$2$$ = $item$$46$$.$getRowSpan$();
          $colSpan$$2$$ > $maxColSpan$$ && ($maxColSpan$$ = $colSpan$$2$$);
          $rowSpan$$2$$ > $maxRowSpan$$ && ($maxRowSpan$$ = $rowSpan$$2$$);
          $numCells$$ += $colSpan$$2$$ * $rowSpan$$2$$ * $item$$46$$.getCount();
          $items$$29$$.push($item$$46$$)
        }
      }
    }
    if(0 == $numCells$$) {
      return{}
    }
    $DvtPictoChartEventManager$$ = $DvtPictoChartDefaults$$.columnWidth;
    $DvtPictoChartAutomation$$ = $DvtPictoChartDefaults$$.rowHeight;
    if(!$DvtPictoChartKeyboardHandler$$ || !$DvtPictoChartImageMarker$$) {
      $DvtPictoChartEventManager$$ || ($DvtPictoChartEventManager$$ = $DvtPictoChartAutomation$$ ? $DvtPictoChartAutomation$$ : $DvtPictoChartDefaults$$._defaultSize), $DvtPictoChartAutomation$$ || ($DvtPictoChartAutomation$$ = $DvtPictoChartEventManager$$)
    }
    $DvtPictoChartShapeMarker$$ = $DvtPictoChartRenderer$$.$isVertical$($DvtPictoChartShapeMarker$$);
    $colCount$$1_i$$544$$ = $DvtPictoChartDefaults$$.columnCount;
    $DvtPictoChartDefaults$$ = $DvtPictoChartDefaults$$.rowCount;
    !$colCount$$1_i$$544$$ && !$DvtPictoChartDefaults$$ && ($DvtPictoChartKeyboardHandler$$ && $DvtPictoChartImageMarker$$ ? $DvtPictoChartShapeMarker$$ ? $DvtPictoChartDefaults$$ = $DvtPictoChartRenderer$$.$_ceil$(Math.sqrt($numCells$$ * $DvtPictoChartImageMarker$$ / $DvtPictoChartKeyboardHandler$$), $maxRowSpan$$) : $colCount$$1_i$$544$$ = $DvtPictoChartRenderer$$.$_ceil$(Math.sqrt($numCells$$ * $DvtPictoChartKeyboardHandler$$ / $DvtPictoChartImageMarker$$), $maxColSpan$$) : $DvtPictoChartKeyboardHandler$$ ? 
    $colCount$$1_i$$544$$ = Math.max(Math.floor($DvtPictoChartKeyboardHandler$$ / $DvtPictoChartEventManager$$), 1) : $DvtPictoChartImageMarker$$ ? $DvtPictoChartDefaults$$ = Math.max(Math.floor($DvtPictoChartImageMarker$$ / $DvtPictoChartAutomation$$), 1) : $DvtPictoChartShapeMarker$$ ? $DvtPictoChartDefaults$$ = $DvtPictoChartRenderer$$.$_ceil$(Math.sqrt($numCells$$), $maxRowSpan$$) : $colCount$$1_i$$544$$ = $DvtPictoChartRenderer$$.$_ceil$(Math.sqrt($numCells$$), $maxColSpan$$));
    $colCount$$1_i$$544$$ ? $DvtPictoChartDefaults$$ || ($DvtPictoChartDefaults$$ = $DvtPictoChartRenderer$$.$_ceil$($numCells$$ / $colCount$$1_i$$544$$, $maxRowSpan$$)) : $colCount$$1_i$$544$$ = $DvtPictoChartRenderer$$.$_ceil$($numCells$$ / $DvtPictoChartDefaults$$, $maxColSpan$$);
    $DvtPictoChartKeyboardHandler$$ && $DvtPictoChartImageMarker$$ && ($DvtPictoChartEventManager$$ || ($DvtPictoChartEventManager$$ = $DvtPictoChartAutomation$$ ? $DvtPictoChartAutomation$$ : Math.min($DvtPictoChartKeyboardHandler$$ / $colCount$$1_i$$544$$, $DvtPictoChartImageMarker$$ / $DvtPictoChartDefaults$$)), $DvtPictoChartAutomation$$ || ($DvtPictoChartAutomation$$ = $DvtPictoChartEventManager$$));
    return 0 >= $colCount$$1_i$$544$$ || 0 >= $DvtPictoChartDefaults$$ || 0 >= $DvtPictoChartEventManager$$ || 0 >= $DvtPictoChartAutomation$$ ? {} : {$items$:$items$$29$$, $colCount$:$colCount$$1_i$$544$$, $rowCount$:$DvtPictoChartDefaults$$, $colWidth$:$DvtPictoChartEventManager$$, $rowHeight$:$DvtPictoChartAutomation$$}
  };
  $DvtPictoChartRenderer$$.$_ceil$ = function $$DvtPictoChartRenderer$$$$_ceil$$($DvtPictoChartShapeMarker$$, $DvtPictoChartKeyboardHandler$$) {
    return Math.ceil($DvtPictoChartShapeMarker$$ / $DvtPictoChartKeyboardHandler$$) * $DvtPictoChartKeyboardHandler$$
  };
  $DvtPictoChartRenderer$$.$_findNextAvailableCell$ = function $$DvtPictoChartRenderer$$$$_findNextAvailableCell$$($DvtPictoChartShapeMarker$$, $DvtPictoChartKeyboardHandler$$, $DvtPictoChartItem$$, $DvtPictoChartImageMarker$$, $DvtPictoChartDefaults$$, $DvtPictoChartEventManager$$) {
    if($DvtPictoChartEventManager$$) {
      return($DvtPictoChartShapeMarker$$ = $DvtPictoChartRenderer$$.$_findNextAvailableCell$($DvtPictoChartShapeMarker$$, $DvtPictoChartItem$$, $DvtPictoChartKeyboardHandler$$, $DvtPictoChartDefaults$$, $DvtPictoChartImageMarker$$, $JSCompiler_alias_FALSE$$)) ? {$col$:$DvtPictoChartShapeMarker$$.$row$, $row$:$DvtPictoChartShapeMarker$$.$col$} : $JSCompiler_alias_NULL$$
    }
    for($DvtPictoChartEventManager$$ = 0;$DvtPictoChartEventManager$$ < $DvtPictoChartDefaults$$ - $DvtPictoChartItem$$ + 1;$DvtPictoChartEventManager$$++) {
      for(var $DvtPictoChartAutomation$$ = 0;$DvtPictoChartAutomation$$ < $DvtPictoChartImageMarker$$ - $DvtPictoChartKeyboardHandler$$ + 1;$DvtPictoChartAutomation$$++) {
        if($DvtPictoChartRenderer$$.$_areCellsAvailable$($DvtPictoChartShapeMarker$$, $DvtPictoChartAutomation$$, $DvtPictoChartEventManager$$, $DvtPictoChartKeyboardHandler$$, $DvtPictoChartItem$$)) {
          return $DvtPictoChartRenderer$$.$_occupyCells$($DvtPictoChartShapeMarker$$, $DvtPictoChartAutomation$$, $DvtPictoChartEventManager$$, $DvtPictoChartKeyboardHandler$$, $DvtPictoChartItem$$), {$col$:$DvtPictoChartAutomation$$, $row$:$DvtPictoChartEventManager$$}
        }
      }
    }
    return $JSCompiler_alias_NULL$$
  };
  $DvtPictoChartRenderer$$.$_areCellsAvailable$ = function $$DvtPictoChartRenderer$$$$_areCellsAvailable$$($DvtPictoChartShapeMarker$$, $DvtPictoChartKeyboardHandler$$, $DvtPictoChartItem$$, $DvtPictoChartImageMarker$$, $DvtPictoChartDefaults$$) {
    for(var $DvtPictoChartEventManager$$ = 0;$DvtPictoChartEventManager$$ < $DvtPictoChartDefaults$$;$DvtPictoChartEventManager$$++) {
      for(var $DvtPictoChartAutomation$$ = 0;$DvtPictoChartAutomation$$ < $DvtPictoChartImageMarker$$;$DvtPictoChartAutomation$$++) {
        if($DvtPictoChartShapeMarker$$.get($DvtPictoChartKeyboardHandler$$ + $DvtPictoChartAutomation$$, $DvtPictoChartItem$$ + $DvtPictoChartEventManager$$)) {
          return $JSCompiler_alias_FALSE$$
        }
      }
    }
    return $JSCompiler_alias_TRUE$$
  };
  $DvtPictoChartRenderer$$.$_occupyCells$ = function $$DvtPictoChartRenderer$$$$_occupyCells$$($DvtPictoChartShapeMarker$$, $DvtPictoChartKeyboardHandler$$, $DvtPictoChartItem$$, $DvtPictoChartImageMarker$$, $DvtPictoChartDefaults$$) {
    for(var $DvtPictoChartEventManager$$ = 0;$DvtPictoChartEventManager$$ < $DvtPictoChartDefaults$$;$DvtPictoChartEventManager$$++) {
      for(var $DvtPictoChartAutomation$$ = 0;$DvtPictoChartAutomation$$ < $DvtPictoChartImageMarker$$;$DvtPictoChartAutomation$$++) {
        $DvtPictoChartShapeMarker$$.put($DvtPictoChartKeyboardHandler$$ + $DvtPictoChartAutomation$$, $DvtPictoChartItem$$ + $DvtPictoChartEventManager$$, $JSCompiler_alias_TRUE$$)
      }
    }
  };
  $DvtPictoChartRenderer$$.$renderEmptyText$ = function $$DvtPictoChartRenderer$$$$renderEmptyText$$($DvtPictoChartShapeMarker$$, $DvtPictoChartKeyboardHandler$$, $DvtPictoChartItem$$) {
    var $DvtPictoChartImageMarker$$ = $DvtPictoChartShapeMarker$$.$getOptions$(), $DvtPictoChartDefaults$$ = dvt.$Bundle$.$getTranslation$($DvtPictoChartImageMarker$$, "labelNoData", dvt.$Bundle$.$UTIL_PREFIX$, "NO_DATA");
    $DvtPictoChartKeyboardHandler$$ = dvt.$TextUtils$.$renderEmptyText$($DvtPictoChartKeyboardHandler$$, $DvtPictoChartDefaults$$, $DvtPictoChartItem$$.$clone$(), $DvtPictoChartShapeMarker$$.$getEventManager$(), $DvtPictoChartImageMarker$$._statusMessageStyle);
    $DvtPictoChartShapeMarker$$.$registerEmptyText$($DvtPictoChartKeyboardHandler$$)
  };
  $DvtPictoChartRenderer$$.$isVertical$ = function $$DvtPictoChartRenderer$$$$isVertical$$($DvtPictoChartShapeMarker$$) {
    return"vertical" == $DvtPictoChartShapeMarker$$.$getOptions$().layout
  };
  $DvtPictoChartRenderer$$.$isOriginBottom$ = function $$DvtPictoChartRenderer$$$$isOriginBottom$$($DvtPictoChartShapeMarker$$) {
    $DvtPictoChartShapeMarker$$ = $DvtPictoChartShapeMarker$$.$getOptions$().layoutOrigin;
    return"bottomStart" == $DvtPictoChartShapeMarker$$ || "bottomEnd" == $DvtPictoChartShapeMarker$$
  };
  $DvtPictoChartRenderer$$.$isOriginRight$ = function $$DvtPictoChartRenderer$$$$isOriginRight$$($DvtPictoChartShapeMarker$$) {
    var $DvtPictoChartKeyboardHandler$$ = $DvtPictoChartShapeMarker$$.$getOptions$().layoutOrigin, $DvtPictoChartKeyboardHandler$$ = "topEnd" == $DvtPictoChartKeyboardHandler$$ || "bottomEnd" == $DvtPictoChartKeyboardHandler$$;
    return dvt.$Agent$.$isRightToLeft$($DvtPictoChartShapeMarker$$.$getCtx$()) ? !$DvtPictoChartKeyboardHandler$$ : $DvtPictoChartKeyboardHandler$$
  };
  dvt.$exportProperty$(dvt, "PictoChart", dvt.$PictoChart$);
  dvt.$exportProperty$(dvt.$PictoChart$, "newInstance", dvt.$PictoChart$.newInstance);
  dvt.$exportProperty$(dvt.$PictoChart$.prototype, "destroy", dvt.$PictoChart$.prototype.$destroy$);
  dvt.$exportProperty$(dvt.$PictoChart$.prototype, "getAutomation", dvt.$PictoChart$.prototype.$getAutomation$);
  dvt.$exportProperty$(dvt.$PictoChart$.prototype, "highlight", dvt.$PictoChart$.prototype.$highlight$);
  dvt.$exportProperty$(dvt.$PictoChart$.prototype, "render", dvt.$PictoChart$.prototype.$render$);
  dvt.$exportProperty$(dvt.$PictoChart$.prototype, "select", dvt.$PictoChart$.prototype.select);
  dvt.$exportProperty$($DvtPictoChartAutomation$$.prototype, "getDomElementForSubId", $DvtPictoChartAutomation$$.prototype.$getDomElementForSubId$);
  dvt.$exportProperty$($DvtPictoChartAutomation$$.prototype, "getItem", $DvtPictoChartAutomation$$.prototype.getItem);
  dvt.$exportProperty$($DvtPictoChartAutomation$$.prototype, "getItemCount", $DvtPictoChartAutomation$$.prototype.$getItemCount$)
})();

  return dvt;
});

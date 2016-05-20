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
  function $DvtAxisObjPeer$$($DvtAxisObjPeer$$, $DvtAxisKeyboardHandler$$, $DvtAxisEventManager$$, $DvtAxisDefaults$$, $DvtAxisAutomation$$, $DvtAxisConstants$$, $DvtAxisRenderer$$, $params$$7$$) {
    this.Init($DvtAxisObjPeer$$, $DvtAxisKeyboardHandler$$, $DvtAxisEventManager$$, $DvtAxisDefaults$$, $DvtAxisAutomation$$, $DvtAxisConstants$$, $DvtAxisRenderer$$, $params$$7$$)
  }
  function $DvtAxisKeyboardHandler$$($DvtAxisObjPeer$$, $DvtAxisKeyboardHandler$$) {
    this.Init($DvtAxisObjPeer$$, $DvtAxisKeyboardHandler$$)
  }
  function $DvtAxisEventManager$$($DvtAxisObjPeer$$) {
    this.Init($DvtAxisObjPeer$$.$getCtx$(), $DvtAxisObjPeer$$.$processEvent$, $DvtAxisObjPeer$$);
    this.$_axis$ = $DvtAxisObjPeer$$
  }
  function $DvtAxisDefaults$$() {
    this.Init({skyros:$DvtAxisDefaults$$.$VERSION_1$, alta:$DvtAxisDefaults$$.$SKIN_ALTA$, next:$DvtAxisDefaults$$.$SKIN_NEXT$})
  }
  function $DvtAxisAutomation$$($DvtAxisObjPeer$$) {
    this.$_axis$ = $DvtAxisObjPeer$$;
    this.$_options$ = this.$_axis$.$getOptions$();
    this.$_axisInfo$ = this.$_axis$.$getInfo$()
  }
  dvt.$Axis$ = $JSCompiler_emptyFn$$();
  dvt.$Obj$.$createSubclass$(dvt.$Axis$, dvt.$BaseComponent$);
  dvt.$Axis$.newInstance = function $dvt$$Axis$$newInstance$($DvtAxisObjPeer$$, $DvtAxisKeyboardHandler$$, $DvtAxisEventManager$$) {
    var $DvtAxisDefaults$$ = new dvt.$Axis$;
    $DvtAxisDefaults$$.Init($DvtAxisObjPeer$$, $DvtAxisKeyboardHandler$$, $DvtAxisEventManager$$);
    return $DvtAxisDefaults$$
  };
  dvt.$Axis$.$getDefaults$ = function $dvt$$Axis$$$getDefaults$$($DvtAxisObjPeer$$) {
    return(new $DvtAxisDefaults$$).$getDefaults$($DvtAxisObjPeer$$)
  };
  dvt.$Axis$.prototype.Init = function $dvt$$Axis$$$Init$($DvtAxisObjPeer$$, $DvtAxisAutomation$$, $DvtAxisConstants$$) {
    dvt.$Axis$.$superclass$.Init.call(this, $DvtAxisObjPeer$$, $DvtAxisAutomation$$, $DvtAxisConstants$$);
    this.$Defaults$ = new $DvtAxisDefaults$$;
    this.$_eventManager$ = new $DvtAxisEventManager$$(this);
    this.$_eventManager$.$addListeners$(this);
    dvt.$Agent$.$isTouchDevice$() || this.$_eventManager$.$setKeyboardHandler$(new $DvtAxisKeyboardHandler$$(this.$_eventManager$, this));
    this.$_bounds$ = $JSCompiler_alias_NULL$$
  };
  dvt.$Axis$.$MINIMUM_AXIS_BUFFER$ = 10;
  dvt.$Axis$.prototype.$SetOptions$ = function $dvt$$Axis$$$$SetOptions$$($DvtAxisObjPeer$$) {
    $DvtAxisObjPeer$$ ? this.$Options$ = "off" == $DvtAxisObjPeer$$.rendered ? $DvtAxisObjPeer$$ : this.$Defaults$.$calcOptions$($DvtAxisObjPeer$$) : this.$Options$ || (this.$Options$ = this.$GetDefaults$())
  };
  dvt.$Axis$.prototype.$getPreferredSize$ = function $dvt$$Axis$$$$getPreferredSize$$($DvtAxisObjPeer$$, $DvtAxisKeyboardHandler$$, $DvtAxisEventManager$$) {
    this.$SetOptions$($DvtAxisObjPeer$$);
    return $DvtAxisRenderer$$.$getPreferredSize$(this, $DvtAxisKeyboardHandler$$, $DvtAxisEventManager$$)
  };
  dvt.$Axis$.prototype.$render$ = function $dvt$$Axis$$$$render$$($DvtAxisObjPeer$$, $DvtAxisKeyboardHandler$$, $DvtAxisEventManager$$, $DvtAxisDefaults$$, $DvtAxisAutomation$$) {
    this.$SetOptions$($DvtAxisObjPeer$$);
    this.$_navigablePeers$ = [];
    this.$Width$ = $DvtAxisKeyboardHandler$$;
    this.$Height$ = $DvtAxisEventManager$$;
    this.$removeChildren$();
    $DvtAxisDefaults$$ || ($DvtAxisDefaults$$ = 0);
    $DvtAxisAutomation$$ || ($DvtAxisAutomation$$ = 0);
    $DvtAxisRenderer$$.$render$(this, new dvt.$Rectangle$($DvtAxisDefaults$$, $DvtAxisAutomation$$, $DvtAxisKeyboardHandler$$, $DvtAxisEventManager$$))
  };
  dvt.$Axis$.prototype.$__registerObject$ = function $dvt$$Axis$$$$__registerObject$$($DvtAxisObjPeer$$) {
    ($DvtAxisObjPeer$$.$getDatatip$() != $JSCompiler_alias_NULL$$ || $DvtAxisObjPeer$$.$getAction$() != $JSCompiler_alias_NULL$$ || $DvtAxisObjPeer$$.$isDrillable$()) && this.$_navigablePeers$.push($DvtAxisObjPeer$$)
  };
  dvt.$Axis$.prototype.$isNavigable$ = function $dvt$$Axis$$$$isNavigable$$() {
    return 0 < this.$_navigablePeers$.length
  };
  dvt.$Axis$.prototype.$getKeyboardFocus$ = function $dvt$$Axis$$$$getKeyboardFocus$$() {
    return this.$_eventManager$ != $JSCompiler_alias_NULL$$ ? this.$_eventManager$.$getFocus$() : $JSCompiler_alias_NULL$$
  };
  dvt.$Axis$.prototype.$setKeyboardFocus$ = function $dvt$$Axis$$$$setKeyboardFocus$$($DvtAxisObjPeer$$, $DvtAxisKeyboardHandler$$) {
    if(this.$_eventManager$ != $JSCompiler_alias_NULL$$) {
      for(var $DvtAxisEventManager$$ = this.$_navigablePeers$, $DvtAxisDefaults$$ = $DvtAxisObjPeer$$.getId(), $DvtAxisAutomation$$ = $JSCompiler_alias_FALSE$$, $DvtAxisConstants$$ = 0;$DvtAxisConstants$$ < $DvtAxisEventManager$$.length;$DvtAxisConstants$$++) {
        var $DvtAxisRenderer$$ = $DvtAxisEventManager$$[$DvtAxisConstants$$].getId();
        if($DvtAxisDefaults$$ instanceof Array && $DvtAxisRenderer$$ instanceof Array && dvt.$ArrayUtils$.$equals$($DvtAxisDefaults$$, $DvtAxisRenderer$$) || $DvtAxisDefaults$$ === $DvtAxisRenderer$$) {
          this.$_eventManager$.$setFocusObj$($DvtAxisEventManager$$[$DvtAxisConstants$$]);
          $DvtAxisAutomation$$ = $JSCompiler_alias_TRUE$$;
          $DvtAxisKeyboardHandler$$ && $DvtAxisEventManager$$[$DvtAxisConstants$$].$showKeyboardFocusEffect$();
          break
        }
      }
      $DvtAxisAutomation$$ || this.$_eventManager$.$setFocusObj$(this.$_eventManager$.$KeyboardHandler$.$getDefaultNavigable$($DvtAxisEventManager$$));
      if($DvtAxisEventManager$$ = this.$getKeyboardFocus$()) {
        $DvtAxisDefaults$$ = $DvtAxisEventManager$$.$getDisplayable$(), $DvtAxisDefaults$$.$setAriaProperty$("label", $DvtAxisEventManager$$.$getAriaLabel$()), this.$getCtx$().$setActiveElement$($DvtAxisDefaults$$)
      }
    }
  };
  dvt.$Axis$.prototype.$processEvent$ = function $dvt$$Axis$$$$processEvent$$($DvtAxisObjPeer$$, $DvtAxisKeyboardHandler$$) {
    this === $DvtAxisKeyboardHandler$$ && this.dispatchEvent($DvtAxisObjPeer$$)
  };
  dvt.$Axis$.prototype.$getEventManager$ = $JSCompiler_get$$("$_eventManager$");
  dvt.$Axis$.prototype.$getInfo$ = $JSCompiler_get$$("$Info$");
  dvt.$Axis$.prototype.$__setInfo$ = $JSCompiler_set$$("$Info$");
  dvt.$Axis$.prototype.getWidth = $JSCompiler_get$$("$Width$");
  dvt.$Axis$.prototype.getHeight = $JSCompiler_get$$("$Height$");
  dvt.$Axis$.prototype.$destroy$ = function $dvt$$Axis$$$$destroy$$() {
    this.$_eventManager$ && (this.$_eventManager$.$removeListeners$(this), this.$_eventManager$.$destroy$(), this.$_eventManager$ = $JSCompiler_alias_NULL$$);
    dvt.$Axis$.$superclass$.$destroy$.call(this)
  };
  dvt.$Axis$.prototype.$__setBounds$ = $JSCompiler_set$$("$_bounds$");
  dvt.$Axis$.prototype.$getAutomation$ = function $dvt$$Axis$$$$getAutomation$$() {
    return new $DvtAxisAutomation$$(this)
  };
  var $DvtAxisConstants$$ = {};
  dvt.$Obj$.$createSubclass$($DvtAxisConstants$$, dvt.$Obj$);
  $DvtAxisConstants$$.$TICK_LABEL$ = "tickLabel";
  $DvtAxisConstants$$.$TITLE$ = "title";
  dvt.$Obj$.$createSubclass$($DvtAxisAutomation$$, dvt.$Automation$);
  $DvtAxisAutomation$$.prototype.$GetSubIdForDomElement$ = function $$DvtAxisAutomation$$$$$GetSubIdForDomElement$$($DvtAxisObjPeer$$) {
    var $DvtAxisKeyboardHandler$$ = this.$_axis$.$getEventManager$().$GetLogicalObject$($DvtAxisObjPeer$$);
    if($DvtAxisKeyboardHandler$$ && $DvtAxisKeyboardHandler$$ instanceof dvt.$SimpleObjPeer$) {
      if($DvtAxisKeyboardHandler$$.$_params$.type == $DvtAxisConstants$$.$TITLE$) {
        return"title"
      }
      if(this.$_options$.groups) {
        $DvtAxisObjPeer$$ = $DvtAxisKeyboardHandler$$.$_params$.level;
        for(var $DvtAxisKeyboardHandler$$ = this.$_axisInfo$.$getStartIndex$($DvtAxisKeyboardHandler$$.$_params$.index, $DvtAxisObjPeer$$), $DvtAxisEventManager$$ = "", $DvtAxisDefaults$$ = 0;$DvtAxisDefaults$$ <= $DvtAxisObjPeer$$;$DvtAxisDefaults$$++) {
          for(var $DvtAxisAutomation$$ = this.$_axisInfo$.$getLabels$(this.$_axis$.$getCtx$(), $DvtAxisDefaults$$), $DvtAxisRenderer$$ = 0;$DvtAxisRenderer$$ < $DvtAxisAutomation$$.length;$DvtAxisRenderer$$++) {
            var $index$$99$$ = this.$_axisInfo$.$getLabelIndex$($DvtAxisAutomation$$[$DvtAxisRenderer$$]);
            this.$_axisInfo$.$getStartIndex$($index$$99$$, $DvtAxisDefaults$$) <= $DvtAxisKeyboardHandler$$ && this.$_axisInfo$.$getEndIndex$($index$$99$$, $DvtAxisDefaults$$) >= $DvtAxisKeyboardHandler$$ && ($DvtAxisEventManager$$ += "[" + this.$_axisInfo$.$getPosition$($index$$99$$, $DvtAxisDefaults$$) + "]")
          }
        }
        if(0 < $DvtAxisEventManager$$.length) {
          return"item" + $DvtAxisEventManager$$
        }
      }
    }
    return $JSCompiler_alias_NULL$$
  };
  $DvtAxisAutomation$$.prototype.$getDomElementForSubId$ = function $$DvtAxisAutomation$$$$$getDomElementForSubId$$($DvtAxisObjPeer$$) {
    if("title" == $DvtAxisObjPeer$$) {
      if($DvtAxisObjPeer$$ = this.$_axisInfo$.$getTitle$()) {
        return $DvtAxisObjPeer$$.$getElem$()
      }
    }else {
      if(this.$_axisInfo$ instanceof dvt.$GroupAxisInfo$) {
        for(var $DvtAxisKeyboardHandler$$ = $DvtAxisObjPeer$$.split("[").length - 1 - 1, $DvtAxisEventManager$$ = 0, $DvtAxisDefaults$$ = 0, $DvtAxisAutomation$$ = 0;$DvtAxisAutomation$$ <= $DvtAxisKeyboardHandler$$;$DvtAxisAutomation$$++) {
          var $DvtAxisConstants$$ = $DvtAxisObjPeer$$.indexOf("]"), $DvtAxisRenderer$$ = $DvtAxisObjPeer$$.substring($DvtAxisObjPeer$$.indexOf("[") + 1, $DvtAxisConstants$$);
          $DvtAxisObjPeer$$ = $DvtAxisObjPeer$$.substring($DvtAxisConstants$$ + 1);
          for(var $DvtAxisConstants$$ = this.$_axisInfo$.$getLabels$(this.$_axis$.$getCtx$(), $DvtAxisAutomation$$), $index$$100$$, $i$$214_j$$30$$ = 0;$i$$214_j$$30$$ < $DvtAxisConstants$$.length;$i$$214_j$$30$$++) {
            if($index$$100$$ = this.$_axisInfo$.$getLabelIndex$($DvtAxisConstants$$[$i$$214_j$$30$$]), this.$_axisInfo$.$getStartIndex$($index$$100$$, $DvtAxisAutomation$$) == $DvtAxisDefaults$$) {
              $DvtAxisEventManager$$ = $index$$100$$;
              break
            }
          }
          for($i$$214_j$$30$$ = $DvtAxisEventManager$$;$i$$214_j$$30$$ < $DvtAxisConstants$$.length;$i$$214_j$$30$$++) {
            if($index$$100$$ = this.$_axisInfo$.$getLabelIndex$($DvtAxisConstants$$[$i$$214_j$$30$$]), this.$_axisInfo$.$getPosition$($index$$100$$, $DvtAxisAutomation$$) == $DvtAxisRenderer$$) {
              if(0 == $DvtAxisObjPeer$$.length) {
                return $DvtAxisConstants$$[$i$$214_j$$30$$].$getElem$()
              }
              $DvtAxisDefaults$$ = this.$_axisInfo$.$getStartIndex$($index$$100$$, $DvtAxisAutomation$$);
              break
            }
          }
        }
      }
    }
    return $JSCompiler_alias_NULL$$
  };
  dvt.$Obj$.$createSubclass$($DvtAxisDefaults$$, dvt.$BaseComponentDefaults$);
  $DvtAxisDefaults$$.$SKIN_NEXT$ = {skin:dvt.$CSSStyle$.$SKIN_NEXT$, layout:{titleGap:6}};
  $DvtAxisDefaults$$.$SKIN_ALTA$ = {axisLine:{lineColor:"#9E9E9E"}, majorTick:{lineColor:"rgba(196,206,215,0.4)", baselineColor:"auto"}, minorTick:{lineColor:"rgba(196,206,215,0.2)"}, tickLabel:{style:new dvt.$CSSStyle$("font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; white-space:normal;")}, titleStyle:new dvt.$CSSStyle$("font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 12px;")};
  $DvtAxisDefaults$$.$VERSION_1$ = {position:$JSCompiler_alias_NULL$$, baselineScaling:"zero", axisLine:{lineColor:"#8A8DAC", lineWidth:1, rendered:"on"}, majorTick:{lineColor:"rgba(138,141,172,0.4)", lineWidth:1, rendered:"auto", lineStyle:"solid"}, minorTick:{lineColor:"rgba(138,141,172,0.20)", lineWidth:1, rendered:"off", lineStyle:"solid"}, tickLabel:{scaling:"auto", style:new dvt.$CSSStyle$("font-family: tahoma, sans-serif; font-size: 11px; color: #333333;"), rotation:"auto", rendered:"on"}, 
  titleStyle:new dvt.$CSSStyle$("font-family: tahoma, sans-serif; font-size: 11px; color: #737373;"), startGroupOffset:0, endGroupOffset:0, layout:{titleGap:4, radialLabelGap:5, insideLabelGapWidth:4, insideLabelGapHeight:2, hierarchicalLabelGapHeight:8, hierarchicalLabelGapWidth:15}, _locale:"en-us"};
  $DvtAxisDefaults$$.$getGapSize$ = function $$DvtAxisDefaults$$$$getGapSize$$($DvtAxisObjPeer$$, $DvtAxisKeyboardHandler$$, $DvtAxisEventManager$$) {
    $DvtAxisObjPeer$$ = Math.min(dvt.$TextUtils$.$getTextStringHeight$($DvtAxisObjPeer$$, $DvtAxisKeyboardHandler$$.tickLabel.style) / 14, 1);
    return Math.ceil($DvtAxisEventManager$$ * $DvtAxisObjPeer$$)
  };
  dvt.$Obj$.$createSubclass$($DvtAxisEventManager$$, dvt.$EventManager$);
  $DvtAxisEventManager$$.$getUIParams$ = function $$DvtAxisEventManager$$$$getUIParams$$($DvtAxisObjPeer$$, $DvtAxisKeyboardHandler$$, $DvtAxisEventManager$$, $DvtAxisDefaults$$) {
    return{type:$DvtAxisObjPeer$$, id:$DvtAxisKeyboardHandler$$, index:$DvtAxisEventManager$$, level:$DvtAxisDefaults$$}
  };
  $DvtAxisEventManager$$.prototype.$OnClick$ = function $$DvtAxisEventManager$$$$$OnClick$$($DvtAxisObjPeer$$) {
    $DvtAxisEventManager$$.$superclass$.$OnClick$.call(this, $DvtAxisObjPeer$$);
    var $DvtAxisKeyboardHandler$$ = this.$GetLogicalObject$($DvtAxisObjPeer$$.target);
    $DvtAxisKeyboardHandler$$ && this.$processActionEvent$($DvtAxisKeyboardHandler$$) && $DvtAxisObjPeer$$.stopPropagation()
  };
  $DvtAxisEventManager$$.prototype.$HandleTouchClickInternal$ = function $$DvtAxisEventManager$$$$$HandleTouchClickInternal$$($DvtAxisObjPeer$$) {
    var $DvtAxisKeyboardHandler$$ = this.$GetLogicalObject$($DvtAxisObjPeer$$.target);
    $DvtAxisKeyboardHandler$$ && ($DvtAxisObjPeer$$ = $DvtAxisObjPeer$$.$touchEvent$, this.$processActionEvent$($DvtAxisKeyboardHandler$$) && $DvtAxisObjPeer$$ && $DvtAxisObjPeer$$.preventDefault())
  };
  $DvtAxisEventManager$$.prototype.$processActionEvent$ = function $$DvtAxisEventManager$$$$$processActionEvent$$($DvtAxisKeyboardHandler$$) {
    return $DvtAxisKeyboardHandler$$ && $DvtAxisKeyboardHandler$$.$getAction$ && $DvtAxisKeyboardHandler$$.$getAction$() ? (this.$FireEvent$(dvt.$EventFactory$.$newActionEvent$("action", $DvtAxisKeyboardHandler$$.$getAction$(), $DvtAxisKeyboardHandler$$.getId()), this.$_axis$), $JSCompiler_alias_TRUE$$) : $DvtAxisKeyboardHandler$$ instanceof $DvtAxisObjPeer$$ && $DvtAxisKeyboardHandler$$.$isDrillable$() ? (this.$FireEvent$(dvt.$EventFactory$.$newChartDrillEvent$($DvtAxisKeyboardHandler$$.getId(), 
    $JSCompiler_alias_NULL$$, $DvtAxisKeyboardHandler$$.$getGroup$()), this.$_axis$), $JSCompiler_alias_TRUE$$) : $JSCompiler_alias_FALSE$$
  };
  dvt.$Obj$.$createSubclass$($DvtAxisKeyboardHandler$$, dvt.$KeyboardHandler$);
  $DvtAxisKeyboardHandler$$.prototype.Init = function $$DvtAxisKeyboardHandler$$$$Init$($DvtAxisObjPeer$$, $DvtAxisEventManager$$) {
    $DvtAxisKeyboardHandler$$.$superclass$.Init.call(this, $DvtAxisObjPeer$$);
    this.$_axis$ = $DvtAxisEventManager$$
  };
  $DvtAxisKeyboardHandler$$.prototype.$processKeyDown$ = function $$DvtAxisKeyboardHandler$$$$$processKeyDown$$($DvtAxisObjPeer$$) {
    var $DvtAxisEventManager$$ = $DvtAxisObjPeer$$.keyCode, $DvtAxisDefaults$$ = this.$_eventManager$.$getFocus$(), $DvtAxisAutomation$$ = $JSCompiler_alias_NULL$$;
    $DvtAxisEventManager$$ == dvt.$KeyboardEvent$.$TAB$ ? ($DvtAxisDefaults$$ && (dvt.$EventManager$.$consumeEvent$($DvtAxisObjPeer$$), $DvtAxisAutomation$$ = $DvtAxisDefaults$$), $DvtAxisEventManager$$ = this.$_axis$.$_navigablePeers$, 0 < $DvtAxisEventManager$$.length && (dvt.$EventManager$.$consumeEvent$($DvtAxisObjPeer$$), $DvtAxisAutomation$$ = this.$getDefaultNavigable$($DvtAxisEventManager$$))) : $DvtAxisEventManager$$ == dvt.$KeyboardEvent$.$ENTER$ ? $DvtAxisDefaults$$ && (this.$_eventManager$.$processActionEvent$($DvtAxisDefaults$$), 
    dvt.$EventManager$.$consumeEvent$($DvtAxisObjPeer$$)) : $DvtAxisAutomation$$ = $DvtAxisKeyboardHandler$$.$superclass$.$processKeyDown$.call(this, $DvtAxisObjPeer$$);
    return $DvtAxisAutomation$$
  };
  var $DvtAxisRenderer$$ = {};
  dvt.$Obj$.$createSubclass$($DvtAxisRenderer$$, dvt.$Obj$);
  $DvtAxisRenderer$$.$getPreferredSize$ = function $$DvtAxisRenderer$$$$getPreferredSize$$($DvtAxisObjPeer$$, $DvtAxisKeyboardHandler$$, $DvtAxisEventManager$$) {
    var $DvtAxisDefaults$$ = $DvtAxisRenderer$$.$_createAxisInfo$($DvtAxisObjPeer$$, new dvt.$Rectangle$(0, 0, $DvtAxisKeyboardHandler$$, $DvtAxisEventManager$$)), $DvtAxisAutomation$$ = $DvtAxisObjPeer$$.$getCtx$(), $DvtAxisConstants$$ = $DvtAxisObjPeer$$.$getOptions$(), $size$$12$$ = 0, $bHoriz$$ = "top" == $DvtAxisConstants$$.position || "bottom" == $DvtAxisConstants$$.position;
    if("off" == $DvtAxisConstants$$.rendered || 0 >= $DvtAxisKeyboardHandler$$ || 0 >= $DvtAxisEventManager$$) {
      return $bHoriz$$ ? new dvt.$Dimension$($DvtAxisKeyboardHandler$$, 0) : new dvt.$Dimension$(0, $DvtAxisEventManager$$)
    }
    $DvtAxisConstants$$.title && ($size$$12$$ = dvt.$TextUtils$.$getTextStringHeight$($DvtAxisAutomation$$, $DvtAxisConstants$$.titleStyle) + $DvtAxisRenderer$$.$_getTitleGap$($DvtAxisObjPeer$$));
    "on" == $DvtAxisConstants$$.tickLabel.rendered && "inside" != $DvtAxisConstants$$.tickLabel.position && ($bHoriz$$ ? ($DvtAxisConstants$$ = dvt.$TextUtils$.$getTextStringHeight$($DvtAxisAutomation$$, $DvtAxisConstants$$.tickLabel.style), $DvtAxisDefaults$$ instanceof dvt.$DataAxisInfo$ ? $size$$12$$ += $DvtAxisConstants$$ : $DvtAxisDefaults$$ instanceof dvt.$TimeAxisInfo$ ? $size$$12$$ += $DvtAxisDefaults$$.$getLabels$($DvtAxisAutomation$$, 1) != $JSCompiler_alias_NULL$$ ? 2 * $DvtAxisConstants$$ : 
    $DvtAxisConstants$$ : $DvtAxisDefaults$$ instanceof dvt.$GroupAxisInfo$ && ($size$$12$$ = $DvtAxisRenderer$$.$_getGroupAxisPreferredSize$($DvtAxisObjPeer$$, $DvtAxisDefaults$$, $size$$12$$, $DvtAxisEventManager$$, $bHoriz$$))) : $DvtAxisDefaults$$ instanceof dvt.$DataAxisInfo$ ? $size$$12$$ += dvt.$TextUtils$.$getMaxTextDimensions$($DvtAxisDefaults$$.$getLabels$($DvtAxisAutomation$$)).$w$ : $DvtAxisDefaults$$ instanceof dvt.$TimeAxisInfo$ ? ($DvtAxisObjPeer$$ = $DvtAxisDefaults$$.$getLabels$($DvtAxisAutomation$$), 
    $DvtAxisObjPeer$$ = dvt.$TextUtils$.$getMaxTextDimensions$($DvtAxisObjPeer$$).$w$, $DvtAxisDefaults$$ = $DvtAxisDefaults$$.$getLabels$($DvtAxisAutomation$$, 1), $DvtAxisDefaults$$ = $DvtAxisDefaults$$ != $JSCompiler_alias_NULL$$ ? dvt.$TextUtils$.$getMaxTextDimensions$($DvtAxisDefaults$$).$w$ : 0, $size$$12$$ += Math.max($DvtAxisObjPeer$$, $DvtAxisDefaults$$)) : $DvtAxisDefaults$$ instanceof dvt.$GroupAxisInfo$ && ($size$$12$$ = $DvtAxisRenderer$$.$_getGroupAxisPreferredSize$($DvtAxisObjPeer$$, 
    $DvtAxisDefaults$$, $size$$12$$, $DvtAxisKeyboardHandler$$, $bHoriz$$)));
    return $bHoriz$$ ? new dvt.$Dimension$($DvtAxisKeyboardHandler$$, Math.min($size$$12$$, $DvtAxisEventManager$$)) : new dvt.$Dimension$(Math.min($size$$12$$, $DvtAxisKeyboardHandler$$), $DvtAxisEventManager$$)
  };
  $DvtAxisRenderer$$.$render$ = function $$DvtAxisRenderer$$$$render$$($DvtAxisObjPeer$$, $DvtAxisKeyboardHandler$$) {
    var $DvtAxisEventManager$$ = $DvtAxisRenderer$$.$_createAxisInfo$($DvtAxisObjPeer$$, $DvtAxisKeyboardHandler$$);
    "off" != $DvtAxisObjPeer$$.$getOptions$().rendered && ($DvtAxisObjPeer$$.$__setBounds$($DvtAxisKeyboardHandler$$.$clone$()), $DvtAxisRenderer$$.$_renderTitle$($DvtAxisObjPeer$$, $DvtAxisEventManager$$, $DvtAxisKeyboardHandler$$), $DvtAxisRenderer$$.$_renderLabels$($DvtAxisObjPeer$$, $DvtAxisEventManager$$, $DvtAxisKeyboardHandler$$))
  };
  $DvtAxisRenderer$$.$_createAxisInfo$ = function $$DvtAxisRenderer$$$$_createAxisInfo$$($DvtAxisObjPeer$$, $DvtAxisKeyboardHandler$$) {
    var $DvtAxisEventManager$$ = dvt.$AxisInfo$.newInstance($DvtAxisObjPeer$$.$getCtx$(), $DvtAxisObjPeer$$.$getOptions$(), $DvtAxisKeyboardHandler$$);
    $DvtAxisObjPeer$$.$__setInfo$($DvtAxisEventManager$$);
    return $DvtAxisEventManager$$
  };
  $DvtAxisRenderer$$.$_getTitleGap$ = function $$DvtAxisRenderer$$$$_getTitleGap$$($DvtAxisObjPeer$$) {
    var $DvtAxisKeyboardHandler$$ = $DvtAxisObjPeer$$.$getOptions$();
    return $DvtAxisDefaults$$.$getGapSize$($DvtAxisObjPeer$$.$getCtx$(), $DvtAxisKeyboardHandler$$, $DvtAxisKeyboardHandler$$.layout.titleGap)
  };
  $DvtAxisRenderer$$.$_renderTitle$ = function $$DvtAxisRenderer$$$$_renderTitle$$($DvtAxisObjPeer$$, $DvtAxisKeyboardHandler$$, $DvtAxisDefaults$$) {
    var $DvtAxisAutomation$$ = $DvtAxisObjPeer$$.$getOptions$();
    if($DvtAxisAutomation$$.title) {
      var $position$$6$$ = $DvtAxisAutomation$$.position;
      if(!("radial" == $position$$6$$ || "tangential" == $position$$6$$)) {
        var $bHoriz$$1_gap$$2$$ = "top" == $DvtAxisAutomation$$.position || "bottom" == $DvtAxisAutomation$$.position;
        if($DvtAxisAutomation$$ = $DvtAxisRenderer$$.$_createText$($DvtAxisObjPeer$$.$getEventManager$(), $DvtAxisObjPeer$$, $DvtAxisAutomation$$.title, $DvtAxisAutomation$$.titleStyle, $bHoriz$$1_gap$$2$$ ? $DvtAxisDefaults$$.$w$ : $DvtAxisDefaults$$.$h$, $bHoriz$$1_gap$$2$$ ? $DvtAxisDefaults$$.$h$ : $DvtAxisDefaults$$.$w$, $DvtAxisEventManager$$.$getUIParams$($DvtAxisConstants$$.$TITLE$))) {
          var $bHoriz$$1_gap$$2$$ = $DvtAxisRenderer$$.$_getTitleGap$($DvtAxisObjPeer$$), $overflow$$ = ($DvtAxisKeyboardHandler$$.$getStartOverflow$() - $DvtAxisKeyboardHandler$$.$getEndOverflow$()) / 2;
          $DvtAxisObjPeer$$ = dvt.$Agent$.$isRightToLeft$($DvtAxisObjPeer$$.$getCtx$());
          var $titleHeight$$ = dvt.$TextUtils$.$getTextHeight$($DvtAxisAutomation$$);
          $DvtAxisAutomation$$.$alignCenter$();
          "top" == $position$$6$$ ? ($DvtAxisAutomation$$.$setX$($DvtAxisDefaults$$.x + $overflow$$ + $DvtAxisDefaults$$.$w$ / 2), $DvtAxisAutomation$$.$setY$($DvtAxisDefaults$$.y), $DvtAxisDefaults$$.y += $titleHeight$$ + $bHoriz$$1_gap$$2$$, $DvtAxisDefaults$$.$h$ -= $titleHeight$$ + $bHoriz$$1_gap$$2$$) : "bottom" == $position$$6$$ ? ($DvtAxisAutomation$$.$setX$($DvtAxisDefaults$$.x + $overflow$$ + $DvtAxisDefaults$$.$w$ / 2), $DvtAxisAutomation$$.$setY$($DvtAxisDefaults$$.y + $DvtAxisDefaults$$.$h$ - 
          $titleHeight$$), $DvtAxisDefaults$$.$h$ -= $titleHeight$$ + $bHoriz$$1_gap$$2$$) : "left" == $position$$6$$ ? ($DvtAxisAutomation$$.$alignMiddle$(), $DvtAxisAutomation$$.$setRotation$($DvtAxisObjPeer$$ ? Math.PI / 2 : 3 * Math.PI / 2), $DvtAxisAutomation$$.$setTranslate$($DvtAxisDefaults$$.x + $titleHeight$$ / 2, $DvtAxisDefaults$$.y + $DvtAxisDefaults$$.$h$ / 2), $DvtAxisDefaults$$.x += $titleHeight$$ + $bHoriz$$1_gap$$2$$, $DvtAxisDefaults$$.$w$ -= $titleHeight$$ + $bHoriz$$1_gap$$2$$) : 
          "right" == $position$$6$$ && ($DvtAxisAutomation$$.$alignMiddle$(), $DvtAxisAutomation$$.$setRotation$($DvtAxisObjPeer$$ ? Math.PI / 2 : 3 * Math.PI / 2), $DvtAxisAutomation$$.$setTranslate$($DvtAxisDefaults$$.x + $DvtAxisDefaults$$.$w$ - $titleHeight$$ / 2, $DvtAxisDefaults$$.y + $DvtAxisDefaults$$.$h$ / 2), $DvtAxisDefaults$$.$w$ -= $titleHeight$$ + $bHoriz$$1_gap$$2$$);
          $DvtAxisKeyboardHandler$$.$setTitle$($DvtAxisAutomation$$)
        }
      }
    }
  };
  $DvtAxisRenderer$$.$_renderLabels$ = function $$DvtAxisRenderer$$$$_renderLabels$$($DvtAxisObjPeer$$, $DvtAxisKeyboardHandler$$, $DvtAxisEventManager$$) {
    var $DvtAxisDefaults$$ = $DvtAxisObjPeer$$.$getOptions$();
    "on" == $DvtAxisDefaults$$.tickLabel.rendered && ($DvtAxisDefaults$$ = $DvtAxisDefaults$$.position, "top" == $DvtAxisDefaults$$ || "bottom" == $DvtAxisDefaults$$ ? $DvtAxisRenderer$$.$_renderLabelsHoriz$($DvtAxisObjPeer$$, $DvtAxisKeyboardHandler$$, $DvtAxisEventManager$$) : "tangential" == $DvtAxisDefaults$$ ? $DvtAxisRenderer$$.$_renderLabelsTangent$($DvtAxisObjPeer$$, $DvtAxisKeyboardHandler$$, $DvtAxisEventManager$$) : $DvtAxisRenderer$$.$_renderLabelsVert$($DvtAxisObjPeer$$, $DvtAxisKeyboardHandler$$, 
    $DvtAxisEventManager$$), $DvtAxisRenderer$$.$_renderGroupSeparators$($DvtAxisObjPeer$$, $DvtAxisKeyboardHandler$$))
  };
  $DvtAxisRenderer$$.$_renderLabelsHoriz$ = function $$DvtAxisRenderer$$$$_renderLabelsHoriz$$($DvtAxisKeyboardHandler$$, $DvtAxisAutomation$$, $DvtAxisRenderer$$) {
    for(var $context$$78_lv2Labels$$ = $DvtAxisKeyboardHandler$$.$getCtx$(), $offset$$15_options$$16$$ = $DvtAxisKeyboardHandler$$.$getOptions$(), $maxOverflow_position$$8$$ = $offset$$15_options$$16$$.position, $isTickInside_minOverflow$$ = "inside" == $offset$$15_options$$16$$.tickLabel.position, $isRTL$$1$$ = dvt.$Agent$.$isRightToLeft$($context$$78_lv2Labels$$), $isGroupAxis_overflow1_x$$81$$ = $DvtAxisAutomation$$ instanceof dvt.$GroupAxisInfo$, $isHierarchical_overflow2$$ = $isGroupAxis_overflow1_x$$81$$ && 
    1 < $DvtAxisAutomation$$.$getNumLevels$(), $levelIdx$$2$$ = $isHierarchical_overflow2$$ ? 0 : $JSCompiler_alias_NULL$$, $labels$$3$$ = $DvtAxisAutomation$$.$getLabels$($context$$78_lv2Labels$$, $levelIdx$$2$$), $gap$$3$$ = $isHierarchical_overflow2$$ ? $DvtAxisDefaults$$.$getGapSize$($context$$78_lv2Labels$$, $offset$$15_options$$16$$, $offset$$15_options$$16$$.layout.hierarchicalLabelGapHeight) : 0;$labels$$3$$;) {
      for(var $height$$25_index$$102_isMultiline_isRotated$$ = 0, $maxLvlHeight$$ = 0, $i$$215$$ = 0;$i$$215$$ < $labels$$3$$.length;$i$$215$$++) {
        var $label$$20$$ = $labels$$3$$[$i$$215$$];
        if($label$$20$$ != $JSCompiler_alias_NULL$$) {
          $height$$25_index$$102_isMultiline_isRotated$$ = $label$$20$$ instanceof dvt.$MultilineText$ || $label$$20$$ instanceof dvt.$BackgroundMultilineText$;
          if($DvtAxisAutomation$$.$isLabelRotated$($levelIdx$$2$$)) {
            if((!$height$$25_index$$102_isMultiline_isRotated$$ || $height$$25_index$$102_isMultiline_isRotated$$ && !$label$$20$$.$isWrapEnabled$()) && !dvt.$TextUtils$.$fitText$($label$$20$$, $DvtAxisRenderer$$.$h$, $DvtAxisRenderer$$.$w$, $DvtAxisKeyboardHandler$$)) {
              continue
            }
            $isRTL$$1$$ ? $label$$20$$.$alignLeft$() : $label$$20$$.$alignRight$();
            $isHierarchical_overflow2$$ ? ($height$$25_index$$102_isMultiline_isRotated$$ = dvt.$TextUtils$.$getTextWidth$($label$$20$$), $label$$20$$.$setTranslateY$($DvtAxisRenderer$$.$h$ - $height$$25_index$$102_isMultiline_isRotated$$), $maxLvlHeight$$ = Math.max($maxLvlHeight$$, $height$$25_index$$102_isMultiline_isRotated$$)) : $label$$20$$.$setTranslateY$($DvtAxisRenderer$$.y)
          }else {
            if(!$isTickInside_minOverflow$$ && dvt.$TextUtils$.$guessTextDimensions$($label$$20$$).$h$ - 1 > $DvtAxisRenderer$$.$h$) {
              continue
            }
            $isHierarchical_overflow2$$ && "bottom" == $maxOverflow_position$$8$$ ? $label$$20$$.$setY$($DvtAxisRenderer$$.$h$) : "bottom" == $maxOverflow_position$$8$$ ? $label$$20$$.$setY$($DvtAxisRenderer$$.y) : $label$$20$$.$setY$($DvtAxisRenderer$$.y + $DvtAxisRenderer$$.$h$);
            !$isHierarchical_overflow2$$ && ("bottom" == $maxOverflow_position$$8$$ && !$isTickInside_minOverflow$$ || "top" == $maxOverflow_position$$8$$ && $isTickInside_minOverflow$$) ? $label$$20$$.$alignTop$() : $isHierarchical_overflow2$$ && "top" == $maxOverflow_position$$8$$ ? $label$$20$$.$alignTop$() : $label$$20$$.$alignBottom$();
            if($isHierarchical_overflow2$$) {
              $maxLvlHeight$$ = Math.max($maxLvlHeight$$, dvt.$TextUtils$.$guessTextDimensions$($label$$20$$).$h$)
            }else {
              if($isTickInside_minOverflow$$) {
                var $gap$$3$$ = $DvtAxisDefaults$$.$getGapSize$($context$$78_lv2Labels$$, $offset$$15_options$$16$$, $offset$$15_options$$16$$.layout.insideLabelGapWidth);
                $isRTL$$1$$ ? $label$$20$$.$alignRight$() : $label$$20$$.$alignLeft$();
                $label$$20$$.$setX$($label$$20$$.$getX$() + $gap$$3$$ * ($isRTL$$1$$ ? -1 : 1))
              }
            }
          }
          var $height$$25_index$$102_isMultiline_isRotated$$ = $isGroupAxis_overflow1_x$$81$$ ? $DvtAxisAutomation$$.$getLabelIndex$($label$$20$$) : $i$$215$$, $datatip_isOuterLevel$$ = $DvtAxisAutomation$$.$getDatatip$($height$$25_index$$102_isMultiline_isRotated$$, $levelIdx$$2$$), $tooltip$$6$$ = $label$$20$$.$getUntruncatedTextString$(), $action$$9$$ = $DvtAxisAutomation$$.$getAction$($height$$25_index$$102_isMultiline_isRotated$$, $levelIdx$$2$$), $drillable$$ = $DvtAxisAutomation$$.$isDrillable$($height$$25_index$$102_isMultiline_isRotated$$, 
          $levelIdx$$2$$), $group$$6$$ = $DvtAxisAutomation$$.$getGroup$($height$$25_index$$102_isMultiline_isRotated$$, $levelIdx$$2$$);
          $DvtAxisKeyboardHandler$$.$getEventManager$().$associate$($label$$20$$, new $DvtAxisObjPeer$$($DvtAxisKeyboardHandler$$, $label$$20$$, $group$$6$$, $action$$9$$, $drillable$$, $tooltip$$6$$, $datatip_isOuterLevel$$, $DvtAxisEventManager$$.$getUIParams$($DvtAxisConstants$$.$TICK_LABEL$, $label$$20$$.$getTextString$(), $height$$25_index$$102_isMultiline_isRotated$$, $levelIdx$$2$$)));
          $isHierarchical_overflow2$$ ? $DvtAxisAutomation$$.$setLastRenderedLevel$($levelIdx$$2$$) : $maxLvlHeight$$ = Math.max($maxLvlHeight$$, dvt.$TextUtils$.$guessTextDimensions$($label$$20$$).$h$);
          $DvtAxisKeyboardHandler$$.$addChild$($label$$20$$)
        }
      }
      if($isHierarchical_overflow2$$) {
        for($i$$215$$ = 0;$i$$215$$ < $labels$$3$$.length;$i$$215$$++) {
          $label$$20$$ = $labels$$3$$[$i$$215$$], $label$$20$$ != $JSCompiler_alias_NULL$$ && ($height$$25_index$$102_isMultiline_isRotated$$ = $DvtAxisAutomation$$.$isLabelRotated$($levelIdx$$2$$), $datatip_isOuterLevel$$ = $levelIdx$$2$$ < $DvtAxisAutomation$$.$getNumLevels$() - 1, !$height$$25_index$$102_isMultiline_isRotated$$ && $datatip_isOuterLevel$$ ? ($label$$20$$.$setY$($DvtAxisRenderer$$.$h$ - $maxLvlHeight$$ / 2), $label$$20$$.$alignMiddle$()) : $label$$20$$.$setTranslateY$($DvtAxisRenderer$$.$h$ - 
          $maxLvlHeight$$))
        }
        $DvtAxisRenderer$$.y += $maxLvlHeight$$ + $gap$$3$$;
        $DvtAxisRenderer$$.$h$ -= $maxLvlHeight$$ + $gap$$3$$;
        $levelIdx$$2$$++;
        $labels$$3$$ = $DvtAxisAutomation$$.$getLabels$($DvtAxisKeyboardHandler$$.$getCtx$(), $levelIdx$$2$$)
      }else {
        $DvtAxisRenderer$$.y += $maxLvlHeight$$, $DvtAxisRenderer$$.$h$ -= $maxLvlHeight$$, $labels$$3$$ = $JSCompiler_alias_NULL$$
      }
    }
    if($DvtAxisAutomation$$ instanceof dvt.$TimeAxisInfo$ && ($labels$$3$$ = $DvtAxisAutomation$$.$getLabels$($DvtAxisKeyboardHandler$$.$getCtx$()), $context$$78_lv2Labels$$ = $DvtAxisAutomation$$.$getLabels$($DvtAxisKeyboardHandler$$.$getCtx$(), 1), $offset$$15_options$$16$$ = 0, $context$$78_lv2Labels$$ != $JSCompiler_alias_NULL$$)) {
      for($i$$215$$ = 0;$i$$215$$ < $context$$78_lv2Labels$$.length;$i$$215$$++) {
        $label$$20$$ = $context$$78_lv2Labels$$[$i$$215$$], $label$$20$$ != $JSCompiler_alias_NULL$$ && !(dvt.$TextUtils$.$guessTextDimensions$($label$$20$$).$h$ - 1 > $DvtAxisRenderer$$.$h$) && ($DvtAxisKeyboardHandler$$.$getEventManager$().$associate$($label$$20$$, new dvt.$SimpleObjPeer$($JSCompiler_alias_NULL$$, $JSCompiler_alias_NULL$$, $JSCompiler_alias_NULL$$, $DvtAxisEventManager$$.$getUIParams$($DvtAxisConstants$$.$TICK_LABEL$, $label$$20$$.$getTextString$()))), $isHierarchical_overflow2$$ = 
        $isGroupAxis_overflow1_x$$81$$ = 0, $maxOverflow_position$$8$$ = $DvtAxisAutomation$$.$getOptions$()._maxOverflowCoord, $isTickInside_minOverflow$$ = $DvtAxisAutomation$$.$getOptions$()._minOverflowCoord, $labels$$3$$[$i$$215$$] != $JSCompiler_alias_NULL$$ && ($offset$$15_options$$16$$ = $labels$$3$$[$i$$215$$].$measureDimensions$().$w$ / 2, $isGroupAxis_overflow1_x$$81$$ = $DvtAxisAutomation$$.$_level1Overflow$[$i$$215$$], $isHierarchical_overflow2$$ = $DvtAxisAutomation$$.$_level2Overflow$[$i$$215$$]), 
        0 == $isGroupAxis_overflow1_x$$81$$ && 0 == $isHierarchical_overflow2$$ ? ($isGroupAxis_overflow1_x$$81$$ = $label$$20$$.$getX$(), $label$$20$$.$setX$($isRTL$$1$$ ? $isGroupAxis_overflow1_x$$81$$ + $offset$$15_options$$16$$ <= $maxOverflow_position$$8$$ ? $isGroupAxis_overflow1_x$$81$$ + $offset$$15_options$$16$$ : $maxOverflow_position$$8$$ : $isGroupAxis_overflow1_x$$81$$ - $offset$$15_options$$16$$ >= $isTickInside_minOverflow$$ ? $isGroupAxis_overflow1_x$$81$$ - $offset$$15_options$$16$$ : 
        $isTickInside_minOverflow$$)) : 0 > $isGroupAxis_overflow1_x$$81$$ ? $label$$20$$.$setX$($isTickInside_minOverflow$$) : 0 < $isGroupAxis_overflow1_x$$81$$ && $label$$20$$.$setX$($maxOverflow_position$$8$$), $label$$20$$.$alignTop$(), $label$$20$$.$setY$($DvtAxisRenderer$$.y), $DvtAxisKeyboardHandler$$.$addChild$($label$$20$$))
      }
    }
  };
  $DvtAxisRenderer$$.$_renderLabelsVert$ = function $$DvtAxisRenderer$$$$_renderLabelsVert$$($DvtAxisKeyboardHandler$$, $DvtAxisAutomation$$, $DvtAxisRenderer$$) {
    function $formatLabelVert$$($formatLabelVert$$, $gap$$4_lv2Labels$$1$$) {
      var $i$$216$$ = $formatLabelVert$$ instanceof dvt.$MultilineText$ || $formatLabelVert$$ instanceof dvt.$BackgroundMultilineText$, $i$$216$$ = !$i$$216$$ || $i$$216$$ && !$formatLabelVert$$.$isWrapEnabled$();
      if(!($isHierarchical$$1$$ && dvt.$TextUtils$.$getMaxTextDimensions$($labels$$4$$).$w$ - 1 > $DvtAxisRenderer$$.$w$) && ($isHierarchical$$1$$ || $isTickInside$$1$$ || !$i$$216$$ || dvt.$TextUtils$.$fitText$($formatLabelVert$$, $DvtAxisRenderer$$.$w$, $DvtAxisRenderer$$.$h$, $DvtAxisKeyboardHandler$$))) {
        $gap$$4_lv2Labels$$1$$ = $isGroupAxis$$1$$ ? $DvtAxisAutomation$$.$getLabelIndex$($formatLabelVert$$) : $gap$$4_lv2Labels$$1$$;
        var $i$$216$$ = $DvtAxisAutomation$$.$getDatatip$($gap$$4_lv2Labels$$1$$, $levelIdx$$3$$), $label$$21$$ = $formatLabelVert$$.$getUntruncatedTextString$(), $action$$10_bbox$$3_cmd$$1_padding$$11$$ = $DvtAxisAutomation$$.$getAction$($gap$$4_lv2Labels$$1$$, $levelIdx$$3$$), $bgColor$$7_drillable$$1$$ = $DvtAxisAutomation$$.$isDrillable$($gap$$4_lv2Labels$$1$$, $levelIdx$$3$$), $group$$7$$ = $DvtAxisAutomation$$.$getGroup$($gap$$4_lv2Labels$$1$$, $levelIdx$$3$$);
        $DvtAxisKeyboardHandler$$.$getEventManager$().$associate$($formatLabelVert$$, new $DvtAxisObjPeer$$($DvtAxisKeyboardHandler$$, $formatLabelVert$$, $group$$7$$, $action$$10_bbox$$3_cmd$$1_padding$$11$$, $bgColor$$7_drillable$$1$$, $label$$21$$, $i$$216$$, $DvtAxisEventManager$$.$getUIParams$($DvtAxisConstants$$.$TICK_LABEL$, $formatLabelVert$$.$getTextString$(), $gap$$4_lv2Labels$$1$$, $levelIdx$$3$$)));
        $isHierarchical$$1$$ ? ($formatLabelVert$$.$alignRight$(), $formatLabelVert$$.$setX$($isRTL$$2$$ ? $DvtAxisRenderer$$.$w$ : $DvtAxisRenderer$$.x + $maxLvlWidth$$), $DvtAxisAutomation$$.$setLastRenderedLevel$($levelIdx$$3$$)) : ($formatLabelVert$$.$setX$($labelX$$), !$isNumerical$$ && "right" == $position$$9$$ ? $formatLabelVert$$.$alignLeft$() : $formatLabelVert$$.$alignRight$(), $isTickInside$$1$$ && ($formatLabelVert$$.$alignBottom$(), $formatLabelVert$$.$setY$($formatLabelVert$$.$getY$() - 
        $DvtAxisDefaults$$.$getGapSize$($context$$79$$, $options$$17$$, $options$$17$$.layout.insideLabelGapHeight))), "radial" == $position$$9$$ && ($i$$216$$ = $formatLabelVert$$.$getY$(), $formatLabelVert$$.$setY$($DvtAxisRenderer$$.y + $DvtAxisRenderer$$.$h$ / 2 - $i$$216$$), $label$$21$$ = $formatLabelVert$$.$getDimensions$(), $action$$10_bbox$$3_cmd$$1_padding$$11$$ = 0.15 * $label$$21$$.$h$, $action$$10_bbox$$3_cmd$$1_padding$$11$$ = dvt.$PathUtils$.$roundedRectangle$($label$$21$$.x - $action$$10_bbox$$3_cmd$$1_padding$$11$$, 
        $label$$21$$.y, $label$$21$$.$w$ + 2 * $action$$10_bbox$$3_cmd$$1_padding$$11$$, $label$$21$$.$h$, 2, 2, 2, 2), $action$$10_bbox$$3_cmd$$1_padding$$11$$ = new dvt.$Path$($DvtAxisKeyboardHandler$$.$getCtx$(), $action$$10_bbox$$3_cmd$$1_padding$$11$$), $bgColor$$7_drillable$$1$$ = $formatLabelVert$$.$getCSSStyle$().$getStyle$(dvt.$CSSStyle$.$BACKGROUND_COLOR$), $i$$216$$ = $i$$216$$ + $label$$21$$.$h$ / 2 > $DvtAxisAutomation$$.$getEndCoord$() && "circle" == $DvtAxisKeyboardHandler$$.$getOptions$().polarGridShape ? 
        1 : 0.3, $bgColor$$7_drillable$$1$$ ? $action$$10_bbox$$3_cmd$$1_padding$$11$$.$setSolidFill$($bgColor$$7_drillable$$1$$) : $action$$10_bbox$$3_cmd$$1_padding$$11$$.$setSolidFill$("#FFFFFF", $i$$216$$), $DvtAxisKeyboardHandler$$.$addChild$($action$$10_bbox$$3_cmd$$1_padding$$11$$)));
        $DvtAxisKeyboardHandler$$.$addChild$($formatLabelVert$$)
      }
    }
    var $options$$17$$ = $DvtAxisKeyboardHandler$$.$getOptions$(), $position$$9$$ = $options$$17$$.position, $context$$79$$ = $DvtAxisKeyboardHandler$$.$getCtx$(), $isRTL$$2$$ = dvt.$Agent$.$isRightToLeft$($context$$79$$), $isNumerical$$ = $DvtAxisAutomation$$ instanceof dvt.$DataAxisInfo$, $isTickInside$$1$$ = "inside" == $options$$17$$.tickLabel.position, $labels$$4$$, $gap$$4_lv2Labels$$1$$, $maxLvlWidth$$, $isGroupAxis$$1$$ = $DvtAxisAutomation$$ instanceof dvt.$GroupAxisInfo$, $isHierarchical$$1$$ = 
    $isGroupAxis$$1$$ && 1 < $DvtAxisAutomation$$.$getNumLevels$(), $levelIdx$$3$$ = $isHierarchical$$1$$ ? 0 : $JSCompiler_alias_NULL$$;
    $labels$$4$$ = $DvtAxisAutomation$$.$getLabels$($DvtAxisKeyboardHandler$$.$getCtx$(), $levelIdx$$3$$);
    var $labelX$$ = 0;
    $isHierarchical$$1$$ ? ($gap$$4_lv2Labels$$1$$ = $DvtAxisDefaults$$.$getGapSize$($context$$79$$, $options$$17$$, $options$$17$$.layout.hierarchicalLabelGapWidth), $maxLvlWidth$$ = dvt.$TextUtils$.$getMaxTextDimensions$($labels$$4$$).$w$) : "radial" == $position$$9$$ ? ($gap$$4_lv2Labels$$1$$ = $DvtAxisDefaults$$.$getGapSize$($context$$79$$, $options$$17$$, $options$$17$$.layout.radialLabelGap), $labelX$$ = $DvtAxisRenderer$$.x + $DvtAxisRenderer$$.$w$ / 2, $labelX$$ = $isRTL$$2$$ ? $labelX$$ + 
    ($gap$$4_lv2Labels$$1$$ + dvt.$TextUtils$.$getMaxTextDimensions$($labels$$4$$).$w$) : $labelX$$ - $gap$$4_lv2Labels$$1$$) : "left" == $position$$9$$ ? ($labelX$$ = $DvtAxisRenderer$$.x + $DvtAxisRenderer$$.$w$, $isNumerical$$ && $isTickInside$$1$$ && ($labelX$$ += dvt.$TextUtils$.$getMaxTextDimensions$($labels$$4$$).$w$)) : ($labelX$$ = $DvtAxisRenderer$$.x, $isNumerical$$ && !$isTickInside$$1$$ && ($labelX$$ += dvt.$TextUtils$.$getMaxTextDimensions$($labels$$4$$).$w$));
    for(;$labels$$4$$;) {
      for(var $i$$216$$ = 0;$i$$216$$ < $labels$$4$$.length;$i$$216$$++) {
        var $label$$21$$ = $labels$$4$$[$i$$216$$];
        $label$$21$$ != $JSCompiler_alias_NULL$$ && $formatLabelVert$$($label$$21$$, $i$$216$$)
      }
      if($isHierarchical$$1$$) {
        $DvtAxisRenderer$$.x += $maxLvlWidth$$ + $gap$$4_lv2Labels$$1$$, $DvtAxisRenderer$$.$w$ -= $maxLvlWidth$$ + $gap$$4_lv2Labels$$1$$, $levelIdx$$3$$++, $maxLvlWidth$$ = ($labels$$4$$ = $DvtAxisAutomation$$.$getLabels$($DvtAxisKeyboardHandler$$.$getCtx$(), $levelIdx$$3$$)) ? dvt.$TextUtils$.$getMaxTextDimensions$($labels$$4$$).$w$ : $JSCompiler_alias_NULL$$
      }else {
        break
      }
    }
    if($DvtAxisAutomation$$ instanceof dvt.$TimeAxisInfo$ && ($gap$$4_lv2Labels$$1$$ = $DvtAxisAutomation$$.$getLabels$($DvtAxisKeyboardHandler$$.$getCtx$(), 1), $gap$$4_lv2Labels$$1$$ != $JSCompiler_alias_NULL$$)) {
      for($i$$216$$ = 0;$i$$216$$ < $gap$$4_lv2Labels$$1$$.length;$i$$216$$++) {
        $label$$21$$ = $gap$$4_lv2Labels$$1$$[$i$$216$$], $label$$21$$ != $JSCompiler_alias_NULL$$ && $formatLabelVert$$($label$$21$$, $i$$216$$)
      }
    }
  };
  $DvtAxisRenderer$$.$_renderLabelsTangent$ = function $$DvtAxisRenderer$$$$_renderLabelsTangent$$($DvtAxisKeyboardHandler$$, $DvtAxisDefaults$$, $DvtAxisAutomation$$) {
    for(var $DvtAxisRenderer$$ = $DvtAxisDefaults$$.$getLabels$($DvtAxisKeyboardHandler$$.$getCtx$()), $i$$217$$ = 0;$i$$217$$ < $DvtAxisRenderer$$.length;$i$$217$$++) {
      var $label$$23$$ = $DvtAxisRenderer$$[$i$$217$$];
      if($label$$23$$ != $JSCompiler_alias_NULL$$) {
        var $index$$104_maxWidth$$7$$ = $DvtAxisAutomation$$.$w$ / 2 - Math.abs($label$$23$$.$getX$()), $datatip$$2_maxHeight$$4$$ = $DvtAxisAutomation$$.$h$ / 2 - Math.abs($label$$23$$.$getY$());
        if(dvt.$TextUtils$.$fitText$($label$$23$$, $index$$104_maxWidth$$7$$, $datatip$$2_maxHeight$$4$$, $DvtAxisKeyboardHandler$$)) {
          var $index$$104_maxWidth$$7$$ = $DvtAxisDefaults$$ instanceof dvt.$GroupAxisInfo$ ? $DvtAxisDefaults$$.$getLabelIndex$($label$$23$$) : $i$$217$$, $datatip$$2_maxHeight$$4$$ = $DvtAxisDefaults$$.$getDatatip$($index$$104_maxWidth$$7$$), $tooltip$$8$$ = $label$$23$$.$getUntruncatedTextString$(), $action$$11$$ = $DvtAxisDefaults$$.$getAction$($index$$104_maxWidth$$7$$), $drillable$$2$$ = $DvtAxisDefaults$$.$isDrillable$($index$$104_maxWidth$$7$$), $group$$8$$ = $DvtAxisDefaults$$.$getGroup$($index$$104_maxWidth$$7$$);
          $DvtAxisKeyboardHandler$$.$getEventManager$().$associate$($label$$23$$, new $DvtAxisObjPeer$$($DvtAxisKeyboardHandler$$, $label$$23$$, $group$$8$$, $action$$11$$, $drillable$$2$$, $tooltip$$8$$, $datatip$$2_maxHeight$$4$$, $DvtAxisEventManager$$.$getUIParams$($DvtAxisConstants$$.$TICK_LABEL$, $label$$23$$.$getTextString$(), $index$$104_maxWidth$$7$$)));
          $label$$23$$.$setTranslateX$($DvtAxisAutomation$$.x + $DvtAxisAutomation$$.$w$ / 2);
          $label$$23$$.$setTranslateY$($DvtAxisAutomation$$.y + $DvtAxisAutomation$$.$h$ / 2);
          $DvtAxisKeyboardHandler$$.$addChild$($label$$23$$)
        }
      }
    }
  };
  $DvtAxisRenderer$$.$_createText$ = function $$DvtAxisRenderer$$$$_createText$$($DvtAxisObjPeer$$, $DvtAxisKeyboardHandler$$, $DvtAxisEventManager$$, $DvtAxisDefaults$$, $DvtAxisAutomation$$, $DvtAxisConstants$$, $DvtAxisRenderer$$) {
    $DvtAxisEventManager$$ = new dvt.$OutputText$($DvtAxisKeyboardHandler$$.$getCtx$(), $DvtAxisEventManager$$, 0, 0);
    $DvtAxisEventManager$$.$setCSSStyle$($DvtAxisDefaults$$);
    return dvt.$TextUtils$.$fitText$($DvtAxisEventManager$$, $DvtAxisAutomation$$, $DvtAxisConstants$$, $DvtAxisKeyboardHandler$$) ? ($DvtAxisObjPeer$$.$associate$($DvtAxisEventManager$$, new dvt.$SimpleObjPeer$($DvtAxisEventManager$$.$getUntruncatedTextString$(), $JSCompiler_alias_NULL$$, $JSCompiler_alias_NULL$$, $DvtAxisRenderer$$)), $DvtAxisEventManager$$) : $JSCompiler_alias_NULL$$
  };
  $DvtAxisRenderer$$.$_renderGroupSeparators$ = function $$DvtAxisRenderer$$$$_renderGroupSeparators$$($DvtAxisObjPeer$$, $DvtAxisKeyboardHandler$$) {
    if($DvtAxisKeyboardHandler$$ instanceof dvt.$GroupAxisInfo$ && $DvtAxisKeyboardHandler$$.$_areSeparatorsRendered$ && !(1 >= $DvtAxisKeyboardHandler$$.$getNumLevels$() || 0 >= $DvtAxisKeyboardHandler$$.$_lastRenderedLevel$)) {
      for(var $DvtAxisEventManager$$ = $DvtAxisObjPeer$$.$getOptions$(), $DvtAxisAutomation$$ = $DvtAxisEventManager$$.position, $DvtAxisAutomation$$ = "top" == $DvtAxisAutomation$$ || "bottom" == $DvtAxisAutomation$$, $DvtAxisConstants$$ = $DvtAxisObjPeer$$.$getCtx$(), $isRTL$$3$$ = dvt.$Agent$.$isRightToLeft$($DvtAxisConstants$$), $lineStroke$$ = new dvt.$SolidStroke$($DvtAxisKeyboardHandler$$.$_separatorColor$, 1, 1), $prevLevelSize$$ = 0, $DvtAxisConstants$$ = $DvtAxisAutomation$$ ? $DvtAxisDefaults$$.$getGapSize$($DvtAxisConstants$$, 
      $DvtAxisEventManager$$, $DvtAxisEventManager$$.layout.hierarchicalLabelGapHeight) : $DvtAxisDefaults$$.$getGapSize$($DvtAxisConstants$$, $DvtAxisEventManager$$, $DvtAxisEventManager$$.layout.hierarchicalLabelGapWidth), $startOffset$$ = $DvtAxisEventManager$$.startGroupOffset, $DvtAxisEventManager$$ = $DvtAxisEventManager$$.endGroupOffset, $maxDims_x1$$4$$, $x3_y1$$3$$, $x2$$2$$, $y2$$1_yCoord$$, $start$$17_x4$$, $level$$14$$ = $DvtAxisKeyboardHandler$$.$_lastRenderedLevel$;0 <= $level$$14$$;$level$$14$$--) {
        var $labels$$6$$ = $DvtAxisKeyboardHandler$$.$getLabels$($DvtAxisObjPeer$$.$getCtx$(), $level$$14$$);
        $maxDims_x1$$4$$ = dvt.$TextUtils$.$getMaxTextDimensions$($labels$$6$$);
        var $isRotated$$1$$ = $DvtAxisKeyboardHandler$$.$isLabelRotated$($level$$14$$), $levelSize$$ = $isRotated$$1$$ || !$DvtAxisAutomation$$ ? $maxDims_x1$$4$$.$w$ : $maxDims_x1$$4$$.$h$;
        if(0 != $levelSize$$) {
          var $nextLabel_prevLabelRendered$$ = $JSCompiler_alias_FALSE$$, $prevLabelEmpty$$ = $JSCompiler_alias_NULL$$;
          if($level$$14$$ < $DvtAxisKeyboardHandler$$.$_lastRenderedLevel$) {
            for(var $i$$218$$ = 0;$i$$218$$ < $labels$$6$$.length;$i$$218$$++) {
              var $label$$24$$ = $labels$$6$$[$i$$218$$];
              if($label$$24$$ != $JSCompiler_alias_NULL$$) {
                var $index$$105$$ = $DvtAxisKeyboardHandler$$.$getLabelIndex$($label$$24$$), $isEmptyLabel$$ = 0 == $DvtAxisKeyboardHandler$$.$getLabelAt$($index$$105$$, $level$$14$$).length;
                if(!$isEmptyLabel$$) {
                  var $eraseCornerEdge$$ = $isEmptyLabel$$ && 0 == $level$$14$$ && (0 == $index$$105$$ || $index$$105$$ == $labels$$6$$.length - 1), $isFirstLabel$$ = $label$$24$$ && $labels$$6$$[$index$$105$$ - 1] == $JSCompiler_alias_NULL$$, $isLastLabel_spacing$$1$$ = $label$$24$$ && $labels$$6$$[$index$$105$$ + 1] == $JSCompiler_alias_NULL$$;
                  $start$$17_x4$$ = $DvtAxisKeyboardHandler$$.$getStartIndex$($index$$105$$, $level$$14$$);
                  var $drawLeftLine_end$$8$$ = $DvtAxisKeyboardHandler$$.$getEndIndex$($index$$105$$, $level$$14$$);
                  if($DvtAxisAutomation$$) {
                    if($label$$24$$ && ($y2$$1_yCoord$$ = $label$$24$$ instanceof dvt.$MultilineText$ || $label$$24$$ instanceof dvt.$BackgroundMultilineText$ ? $label$$24$$.$getYAlignCoord$() : $label$$24$$.$getY$(), $maxDims_x1$$4$$ = $DvtAxisKeyboardHandler$$.$getCoordAt$($start$$17_x4$$ - $startOffset$$), $x3_y1$$3$$ = !$isRotated$$1$$ ? $y2$$1_yCoord$$ - $levelSize$$ / 2 - 0.5 * $prevLevelSize$$ - $DvtAxisConstants$$ : $y2$$1_yCoord$$ + 0.5 * $prevLevelSize$$, $x2$$2$$ = $DvtAxisKeyboardHandler$$.$getCoordAt$($drawLeftLine_end$$8$$ + 
                    $DvtAxisEventManager$$), $y2$$1_yCoord$$ = !$isRotated$$1$$ ? $y2$$1_yCoord$$ : $y2$$1_yCoord$$ + $levelSize$$ + $prevLevelSize$$ + 2 * $DvtAxisConstants$$, (!$isEmptyLabel$$ || !$eraseCornerEdge$$) && ($nextLabel_prevLabelRendered$$ == $JSCompiler_alias_FALSE$$ && $maxDims_x1$$4$$ != $JSCompiler_alias_NULL$$) && $DvtAxisRenderer$$.$_addSeparatorLine$($DvtAxisObjPeer$$, $lineStroke$$, $maxDims_x1$$4$$, $y2$$1_yCoord$$, $maxDims_x1$$4$$, $x3_y1$$3$$), $x2$$2$$ != $JSCompiler_alias_NULL$$ && 
                    !$eraseCornerEdge$$ && $DvtAxisRenderer$$.$_addSeparatorLine$($DvtAxisObjPeer$$, $lineStroke$$, $x2$$2$$, $y2$$1_yCoord$$, $x2$$2$$, $x3_y1$$3$$)), !$isEmptyLabel$$) {
                      if($label$$24$$) {
                        var $labelWidth$$1$$ = $isRotated$$1$$ ? dvt.$TextUtils$.$getTextHeight$($label$$24$$) : dvt.$TextUtils$.$getTextWidth$($label$$24$$)
                      }
                      $maxDims_x1$$4$$ = $isFirstLabel$$ && $prevLabelEmpty$$ == $JSCompiler_alias_FALSE$$ ? $DvtAxisKeyboardHandler$$.$getStartCoord$() : $DvtAxisKeyboardHandler$$.$getBoundedCoordAt$($start$$17_x4$$ - $startOffset$$);
                      $nextLabel_prevLabelRendered$$ = $DvtAxisKeyboardHandler$$.$getLabelAt$($index$$105$$ + 1, $level$$14$$);
                      $x2$$2$$ = $isLastLabel_spacing$$1$$ && $nextLabel_prevLabelRendered$$ && 0 < $nextLabel_prevLabelRendered$$.length ? $DvtAxisKeyboardHandler$$.$getEndCoord$() : $DvtAxisKeyboardHandler$$.$getBoundedCoordAt$($drawLeftLine_end$$8$$ + $DvtAxisEventManager$$);
                      $x3_y1$$3$$ = $label$$24$$ ? $isRTL$$3$$ ? $label$$24$$.$getX$() + 0.5 * $labelWidth$$1$$ : $label$$24$$.$getX$() - 0.5 * $labelWidth$$1$$ : $DvtAxisKeyboardHandler$$.$getBoundedCoordAt$($drawLeftLine_end$$8$$ + $DvtAxisEventManager$$);
                      $start$$17_x4$$ = $label$$24$$ ? $isRTL$$3$$ ? $label$$24$$.$getX$() - 0.5 * $labelWidth$$1$$ : $label$$24$$.$getX$() + 0.5 * $labelWidth$$1$$ : $DvtAxisKeyboardHandler$$.$getBoundedCoordAt$($start$$17_x4$$ - $startOffset$$);
                      $label$$24$$ && ($isRotated$$1$$ ? $DvtAxisRenderer$$.$_addSeparatorLine$($DvtAxisObjPeer$$, $lineStroke$$, $maxDims_x1$$4$$, $y2$$1_yCoord$$, $x2$$2$$, $y2$$1_yCoord$$) : ($isLastLabel_spacing$$1$$ = $isRTL$$3$$ ? 0.5 * -dvt.$TextUtils$.$getTextHeight$($label$$24$$) : 0.5 * dvt.$TextUtils$.$getTextHeight$($label$$24$$), $drawLeftLine_end$$8$$ = $isRTL$$3$$ ? $start$$17_x4$$ + $isLastLabel_spacing$$1$$ > $x2$$2$$ : $start$$17_x4$$ + $isLastLabel_spacing$$1$$ < $x2$$2$$, ($isRTL$$3$$ ? 
                      $maxDims_x1$$4$$ > $x3_y1$$3$$ - $isLastLabel_spacing$$1$$ : $maxDims_x1$$4$$ < $x3_y1$$3$$ - $isLastLabel_spacing$$1$$) && $DvtAxisRenderer$$.$_addSeparatorLine$($DvtAxisObjPeer$$, $lineStroke$$, $maxDims_x1$$4$$, $y2$$1_yCoord$$, $x3_y1$$3$$ - $isLastLabel_spacing$$1$$, $y2$$1_yCoord$$), $drawLeftLine_end$$8$$ && $DvtAxisRenderer$$.$_addSeparatorLine$($DvtAxisObjPeer$$, $lineStroke$$, $start$$17_x4$$ + $isLastLabel_spacing$$1$$, $y2$$1_yCoord$$, $x2$$2$$, $y2$$1_yCoord$$)))
                    }
                  }else {
                    $label$$24$$ && ($maxDims_x1$$4$$ = !$isRTL$$3$$ ? $label$$24$$.$getX$() + 0.5 * $DvtAxisConstants$$ : $label$$24$$.$getX$() - $levelSize$$ - 0.5 * $DvtAxisConstants$$, $x3_y1$$3$$ = $DvtAxisKeyboardHandler$$.$getCoordAt$($start$$17_x4$$ - $startOffset$$), $x2$$2$$ = !$isRTL$$3$$ ? $label$$24$$.$getX$() - $levelSize$$ - 0.5 * $DvtAxisConstants$$ : $label$$24$$.$getX$() + 0.5 * $DvtAxisConstants$$, $y2$$1_yCoord$$ = $DvtAxisKeyboardHandler$$.$getCoordAt$($drawLeftLine_end$$8$$ + 
                    $DvtAxisEventManager$$), (!$isEmptyLabel$$ && $nextLabel_prevLabelRendered$$ == $JSCompiler_alias_FALSE$$ || 0 == $index$$105$$ && $isEmptyLabel$$ && 0 != $level$$14$$) && $x3_y1$$3$$ != $JSCompiler_alias_NULL$$ && $DvtAxisRenderer$$.$_addSeparatorLine$($DvtAxisObjPeer$$, $lineStroke$$, $maxDims_x1$$4$$, $x3_y1$$3$$, $x2$$2$$, $x3_y1$$3$$), $y2$$1_yCoord$$ != $JSCompiler_alias_NULL$$ && !$eraseCornerEdge$$ && $DvtAxisRenderer$$.$_addSeparatorLine$($DvtAxisObjPeer$$, $lineStroke$$, 
                    $x2$$2$$, $y2$$1_yCoord$$, $maxDims_x1$$4$$, $y2$$1_yCoord$$)), $isEmptyLabel$$ || ($x3_y1$$3$$ = $isFirstLabel$$ && $prevLabelEmpty$$ == $JSCompiler_alias_FALSE$$ ? 0 : $DvtAxisKeyboardHandler$$.$getBoundedCoordAt$($start$$17_x4$$ - $startOffset$$), $nextLabel_prevLabelRendered$$ = $DvtAxisKeyboardHandler$$.$getLabelAt$($index$$105$$ + 1, $level$$14$$), $y2$$1_yCoord$$ = $isLastLabel_spacing$$1$$ && $nextLabel_prevLabelRendered$$ && 0 < $nextLabel_prevLabelRendered$$.length ? 
                    $DvtAxisKeyboardHandler$$.$getEndCoord$() : $DvtAxisKeyboardHandler$$.$getBoundedCoordAt$($drawLeftLine_end$$8$$ + $DvtAxisEventManager$$), $label$$24$$ && $DvtAxisRenderer$$.$_addSeparatorLine$($DvtAxisObjPeer$$, $lineStroke$$, $x2$$2$$, $x3_y1$$3$$, $x2$$2$$, $y2$$1_yCoord$$))
                  }
                  $nextLabel_prevLabelRendered$$ = !$isEmptyLabel$$ && $label$$24$$ != $JSCompiler_alias_NULL$$;
                  $prevLabelEmpty$$ = $label$$24$$ != $JSCompiler_alias_NULL$$ || $label$$24$$ == $JSCompiler_alias_NULL$$ && $isEmptyLabel$$
                }
              }
            }
          }
        }
        $prevLevelSize$$ = $levelSize$$
      }
    }
  };
  $DvtAxisRenderer$$.$_addSeparatorLine$ = function $$DvtAxisRenderer$$$$_addSeparatorLine$$($DvtAxisObjPeer$$, $DvtAxisKeyboardHandler$$, $DvtAxisEventManager$$, $DvtAxisDefaults$$, $DvtAxisAutomation$$, $DvtAxisConstants$$) {
    $DvtAxisEventManager$$ = new dvt.$Line$($DvtAxisObjPeer$$.$getCtx$(), $DvtAxisEventManager$$, $DvtAxisDefaults$$, $DvtAxisAutomation$$, $DvtAxisConstants$$);
    $DvtAxisEventManager$$.$setStroke$($DvtAxisKeyboardHandler$$);
    $DvtAxisEventManager$$.$setPixelHinting$();
    $DvtAxisObjPeer$$.$addChild$($DvtAxisEventManager$$)
  };
  $DvtAxisRenderer$$.$_getGroupAxisPreferredSize$ = function $$DvtAxisRenderer$$$$_getGroupAxisPreferredSize$$($DvtAxisObjPeer$$, $DvtAxisKeyboardHandler$$, $DvtAxisEventManager$$, $DvtAxisAutomation$$, $DvtAxisConstants$$) {
    var $DvtAxisRenderer$$ = $DvtAxisObjPeer$$.$getCtx$(), $gap$$6_options$$19$$ = $DvtAxisObjPeer$$.$getOptions$();
    $DvtAxisObjPeer$$ = $DvtAxisKeyboardHandler$$.$getNumLevels$();
    for(var $gap$$6_options$$19$$ = 1 < $DvtAxisObjPeer$$ ? $DvtAxisDefaults$$.$getGapSize$($DvtAxisRenderer$$, $gap$$6_options$$19$$, $gap$$6_options$$19$$.layout[$DvtAxisConstants$$ ? "hierarchicalLabelGapHeight" : "hierarchicalLabelGapWidth"]) : 0, $level$$15$$ = 0;$level$$15$$ < $DvtAxisObjPeer$$;$level$$15$$++) {
      var $labelSize_labels$$7_maxDims$$1$$ = $DvtAxisKeyboardHandler$$.$getLabels$($DvtAxisRenderer$$, $level$$15$$);
      $DvtAxisConstants$$ ? ($labelSize_labels$$7_maxDims$$1$$ = dvt.$TextUtils$.$getMaxTextDimensions$($labelSize_labels$$7_maxDims$$1$$), $labelSize_labels$$7_maxDims$$1$$ = $DvtAxisKeyboardHandler$$.$isLabelRotated$($level$$15$$) ? $labelSize_labels$$7_maxDims$$1$$.$w$ : $labelSize_labels$$7_maxDims$$1$$.$h$) : $labelSize_labels$$7_maxDims$$1$$ = dvt.$TextUtils$.$getMaxTextDimensions$($labelSize_labels$$7_maxDims$$1$$).$w$;
      if($DvtAxisEventManager$$ + $labelSize_labels$$7_maxDims$$1$$ <= $DvtAxisAutomation$$) {
        $DvtAxisEventManager$$ += $labelSize_labels$$7_maxDims$$1$$ + $gap$$6_options$$19$$
      }else {
        0 == $level$$15$$ && ($DvtAxisEventManager$$ = $DvtAxisAutomation$$);
        break
      }
    }
    0 != $level$$15$$ && ($DvtAxisEventManager$$ -= $gap$$6_options$$19$$);
    return $DvtAxisEventManager$$
  };
  dvt.$AxisInfo$ = $JSCompiler_emptyFn$$();
  dvt.$Obj$.$createSubclass$(dvt.$AxisInfo$, dvt.$Obj$);
  dvt.$AxisInfo$.newInstance = function $dvt$$AxisInfo$$newInstance$($DvtAxisObjPeer$$, $DvtAxisKeyboardHandler$$, $DvtAxisEventManager$$) {
    return $DvtAxisKeyboardHandler$$.timeAxisType && "disabled" != $DvtAxisKeyboardHandler$$.timeAxisType ? new dvt.$TimeAxisInfo$($DvtAxisObjPeer$$, $DvtAxisKeyboardHandler$$, $DvtAxisEventManager$$) : isNaN($DvtAxisKeyboardHandler$$.dataMin) && isNaN($DvtAxisKeyboardHandler$$.dataMax) ? new dvt.$GroupAxisInfo$($DvtAxisObjPeer$$, $DvtAxisKeyboardHandler$$, $DvtAxisEventManager$$) : new dvt.$DataAxisInfo$($DvtAxisObjPeer$$, $DvtAxisKeyboardHandler$$, $DvtAxisEventManager$$)
  };
  dvt.$AxisInfo$.prototype.Init = function $dvt$$AxisInfo$$$Init$($DvtAxisObjPeer$$, $DvtAxisKeyboardHandler$$, $DvtAxisEventManager$$) {
    this.$_context$ = $DvtAxisObjPeer$$;
    this.$Position$ = $DvtAxisKeyboardHandler$$.position;
    this.$_radius$ = $DvtAxisKeyboardHandler$$._radius;
    this.$_title$ = $JSCompiler_alias_NULL$$;
    "top" == this.$Position$ || "bottom" == this.$Position$ ? (this.$StartCoord$ = $DvtAxisEventManager$$.x, this.$EndCoord$ = $DvtAxisEventManager$$.x + $DvtAxisEventManager$$.$w$) : "left" == this.$Position$ || "right" == this.$Position$ ? (this.$StartCoord$ = $DvtAxisEventManager$$.y, this.$EndCoord$ = $DvtAxisEventManager$$.y + $DvtAxisEventManager$$.$h$) : "radial" == this.$Position$ ? (this.$StartCoord$ = 0, this.$EndCoord$ = this.$_radius$) : "tangential" == this.$Position$ && (dvt.$Agent$.$isRightToLeft$($DvtAxisObjPeer$$) ? 
    (this.$StartCoord$ = 2 * Math.PI, this.$EndCoord$ = 0) : (this.$StartCoord$ = 0, this.$EndCoord$ = 2 * Math.PI));
    this.$MinViewportExtent$ = this.$DataMax$ = this.$DataMin$ = this.$GlobalMax$ = this.$GlobalMin$ = this.$MaxValue$ = this.$MinValue$ = $JSCompiler_alias_NULL$$;
    this.$EndOverflow$ = this.$StartOverflow$ = 0;
    $DvtAxisKeyboardHandler$$.leftBuffer == $JSCompiler_alias_NULL$$ && ($DvtAxisKeyboardHandler$$.leftBuffer = Infinity);
    $DvtAxisKeyboardHandler$$.rightBuffer == $JSCompiler_alias_NULL$$ && ($DvtAxisKeyboardHandler$$.rightBuffer = Infinity);
    this.$Options$ = $DvtAxisKeyboardHandler$$
  };
  dvt.$AxisInfo$.prototype.$getCtx$ = $JSCompiler_get$$("$_context$");
  dvt.$AxisInfo$.prototype.$getOptions$ = $JSCompiler_get$$("$Options$");
  dvt.$AxisInfo$.prototype.$getLabels$ = $JSCompiler_returnArg$$($JSCompiler_alias_NULL$$);
  dvt.$AxisInfo$.prototype.$getTitle$ = $JSCompiler_get$$("$_title$");
  dvt.$AxisInfo$.prototype.$setTitle$ = $JSCompiler_set$$("$_title$");
  dvt.$AxisInfo$.prototype.$getMajorTickCoords$ = function $dvt$$AxisInfo$$$$getMajorTickCoords$$() {
    return[]
  };
  dvt.$AxisInfo$.prototype.$getMinorTickCoords$ = function $dvt$$AxisInfo$$$$getMinorTickCoords$$() {
    return[]
  };
  dvt.$AxisInfo$.prototype.$getBaselineCoord$ = $JSCompiler_returnArg$$($JSCompiler_alias_NULL$$);
  dvt.$AxisInfo$.prototype.$getValueAt$ = function $dvt$$AxisInfo$$$$getValueAt$$($DvtAxisObjPeer$$) {
    if($DvtAxisObjPeer$$ == $JSCompiler_alias_NULL$$) {
      return $JSCompiler_alias_NULL$$
    }
    var $DvtAxisKeyboardHandler$$ = Math.min(this.$StartCoord$, this.$EndCoord$), $DvtAxisEventManager$$ = Math.max(this.$StartCoord$, this.$EndCoord$);
    return $DvtAxisObjPeer$$ < $DvtAxisKeyboardHandler$$ || $DvtAxisObjPeer$$ > $DvtAxisEventManager$$ ? $JSCompiler_alias_NULL$$ : this.$getUnboundedValueAt$($DvtAxisObjPeer$$)
  };
  dvt.$AxisInfo$.prototype.$getCoordAt$ = function $dvt$$AxisInfo$$$$getCoordAt$$($DvtAxisObjPeer$$) {
    return $DvtAxisObjPeer$$ == $JSCompiler_alias_NULL$$ ? $JSCompiler_alias_NULL$$ : $DvtAxisObjPeer$$ < this.$MinValue$ || $DvtAxisObjPeer$$ > this.$MaxValue$ ? $JSCompiler_alias_NULL$$ : this.$getUnboundedCoordAt$($DvtAxisObjPeer$$)
  };
  dvt.$AxisInfo$.prototype.$getBoundedValueAt$ = function $dvt$$AxisInfo$$$$getBoundedValueAt$$($DvtAxisObjPeer$$) {
    if($DvtAxisObjPeer$$ == $JSCompiler_alias_NULL$$) {
      return $JSCompiler_alias_NULL$$
    }
    var $DvtAxisKeyboardHandler$$ = Math.min(this.$StartCoord$, this.$EndCoord$), $DvtAxisEventManager$$ = Math.max(this.$StartCoord$, this.$EndCoord$);
    $DvtAxisObjPeer$$ < $DvtAxisKeyboardHandler$$ ? $DvtAxisObjPeer$$ = $DvtAxisKeyboardHandler$$ : $DvtAxisObjPeer$$ > $DvtAxisEventManager$$ && ($DvtAxisObjPeer$$ = $DvtAxisEventManager$$);
    return this.$getUnboundedValueAt$($DvtAxisObjPeer$$)
  };
  dvt.$AxisInfo$.prototype.$getBoundedCoordAt$ = function $dvt$$AxisInfo$$$$getBoundedCoordAt$$($DvtAxisObjPeer$$) {
    if($DvtAxisObjPeer$$ == $JSCompiler_alias_NULL$$) {
      return $JSCompiler_alias_NULL$$
    }
    $DvtAxisObjPeer$$ < this.$MinValue$ ? $DvtAxisObjPeer$$ = this.$MinValue$ : $DvtAxisObjPeer$$ >= this.$MaxValue$ && ($DvtAxisObjPeer$$ = this.$MaxValue$);
    return this.$getUnboundedCoordAt$($DvtAxisObjPeer$$)
  };
  dvt.$AxisInfo$.prototype.$getUnboundedValueAt$ = $JSCompiler_returnArg$$($JSCompiler_alias_NULL$$);
  dvt.$AxisInfo$.prototype.$getUnboundedCoordAt$ = $JSCompiler_returnArg$$($JSCompiler_alias_NULL$$);
  dvt.$AxisInfo$.prototype.$getDatatip$ = $JSCompiler_returnArg$$($JSCompiler_alias_NULL$$);
  dvt.$AxisInfo$.prototype.$getAction$ = $JSCompiler_returnArg$$($JSCompiler_alias_NULL$$);
  dvt.$AxisInfo$.prototype.$isDrillable$ = $JSCompiler_returnArg$$($JSCompiler_alias_NULL$$);
  dvt.$AxisInfo$.prototype.$getBaselineCoord$ = $JSCompiler_returnArg$$($JSCompiler_alias_NULL$$);
  dvt.$AxisInfo$.prototype.$isLabelRotated$ = $JSCompiler_returnArg$$($JSCompiler_alias_FALSE$$);
  dvt.$AxisInfo$.prototype.$CreateLabel$ = function $dvt$$AxisInfo$$$$CreateLabel$$($DvtAxisObjPeer$$, $DvtAxisKeyboardHandler$$, $DvtAxisEventManager$$, $DvtAxisDefaults$$, $DvtAxisAutomation$$) {
    if("tangential" == this.$Position$) {
      $DvtAxisAutomation$$ = 16 / 180 * Math.PI;
      var $DvtAxisConstants$$ = 1 / 180 * Math.PI, $DvtAxisRenderer$$ = 0.5 * this.$getTickLabelHeight$(), $dist_ycoord$$ = this.$_radius$ + $DvtAxisRenderer$$;
      if($DvtAxisEventManager$$ < $DvtAxisConstants$$ || $DvtAxisEventManager$$ > 2 * Math.PI - $DvtAxisConstants$$) {
        $dist_ycoord$$ += $DvtAxisRenderer$$
      }
      $DvtAxisRenderer$$ = Math.round($dist_ycoord$$ * Math.sin($DvtAxisEventManager$$));
      $dist_ycoord$$ = Math.round(-$dist_ycoord$$ * Math.cos($DvtAxisEventManager$$));
      $DvtAxisObjPeer$$ = $DvtAxisDefaults$$ ? new dvt.$BackgroundOutputText$($DvtAxisObjPeer$$, $DvtAxisKeyboardHandler$$, $DvtAxisRenderer$$, $dist_ycoord$$, $DvtAxisDefaults$$) : new dvt.$OutputText$($DvtAxisObjPeer$$, $DvtAxisKeyboardHandler$$, $DvtAxisRenderer$$, $dist_ycoord$$);
      $DvtAxisEventManager$$ < $DvtAxisConstants$$ || Math.abs($DvtAxisEventManager$$ - Math.PI) < $DvtAxisConstants$$ || $DvtAxisEventManager$$ > 2 * Math.PI - $DvtAxisConstants$$ ? $DvtAxisObjPeer$$.$alignCenter$() : $DvtAxisEventManager$$ < Math.PI ? $DvtAxisObjPeer$$.$alignLeft$() : $DvtAxisObjPeer$$.$alignRight$();
      Math.abs($DvtAxisEventManager$$ - Math.PI / 2) < $DvtAxisAutomation$$ || Math.abs($DvtAxisEventManager$$ - 3 * Math.PI / 2) < $DvtAxisAutomation$$ ? $DvtAxisObjPeer$$.$alignMiddle$() : $DvtAxisEventManager$$ < Math.PI / 2 || $DvtAxisEventManager$$ > 3 * Math.PI / 2 ? $DvtAxisObjPeer$$.$alignBottom$() : $DvtAxisObjPeer$$.$alignTop$()
    }else {
      $DvtAxisAutomation$$ ? $DvtAxisObjPeer$$ = $DvtAxisDefaults$$ ? new dvt.$BackgroundMultilineText$($DvtAxisObjPeer$$, $DvtAxisKeyboardHandler$$, $DvtAxisEventManager$$, $DvtAxisEventManager$$, $DvtAxisDefaults$$) : new dvt.$MultilineText$($DvtAxisObjPeer$$, $DvtAxisKeyboardHandler$$, $DvtAxisEventManager$$, $DvtAxisEventManager$$) : ($DvtAxisObjPeer$$ = $DvtAxisDefaults$$ ? new dvt.$BackgroundOutputText$($DvtAxisObjPeer$$, $DvtAxisKeyboardHandler$$, $DvtAxisEventManager$$, $DvtAxisEventManager$$, 
      $DvtAxisDefaults$$) : new dvt.$OutputText$($DvtAxisObjPeer$$, $DvtAxisKeyboardHandler$$, $DvtAxisEventManager$$, $DvtAxisEventManager$$), $DvtAxisObjPeer$$.$alignMiddle$()), $DvtAxisObjPeer$$.$alignCenter$()
    }
    ($DvtAxisObjPeer$$ instanceof dvt.$OutputText$ || $DvtAxisObjPeer$$ instanceof dvt.$MultilineText$) && $DvtAxisObjPeer$$.$setCSSStyle$(this.$Options$.tickLabel.style);
    return $DvtAxisObjPeer$$
  };
  dvt.$AxisInfo$.prototype.$IsOverlapping$ = function $dvt$$AxisInfo$$$$IsOverlapping$$($DvtAxisObjPeer$$, $DvtAxisKeyboardHandler$$) {
    if(!$DvtAxisObjPeer$$ || 0 >= $DvtAxisObjPeer$$.length) {
      return $JSCompiler_alias_FALSE$$
    }
    for(var $DvtAxisEventManager$$ = "left" == this.$Position$ || "right" == this.$Position$ || "radial" == this.$Position$, $DvtAxisDefaults$$ = dvt.$Agent$.$isRightToLeft$(this.$getCtx$()), $DvtAxisAutomation$$ = this.$GetTickLabelGapSize$(), $DvtAxisConstants$$, $DvtAxisRenderer$$, $pointB1$$, $pointB2$$, $j$$31$$ = 0;$j$$31$$ < $DvtAxisObjPeer$$.length;$j$$31$$ += $DvtAxisKeyboardHandler$$ + 1) {
      if($DvtAxisObjPeer$$[$j$$31$$] != $JSCompiler_alias_NULL$$) {
        if($DvtAxisConstants$$ == $JSCompiler_alias_NULL$$ || $DvtAxisRenderer$$ == $JSCompiler_alias_NULL$$) {
          $DvtAxisEventManager$$ ? ($DvtAxisConstants$$ = $DvtAxisObjPeer$$[$j$$31$$].y, $DvtAxisRenderer$$ = $DvtAxisObjPeer$$[$j$$31$$].y + $DvtAxisObjPeer$$[$j$$31$$].$h$) : ($DvtAxisConstants$$ = $DvtAxisObjPeer$$[$j$$31$$].x, $DvtAxisRenderer$$ = $DvtAxisObjPeer$$[$j$$31$$].x + $DvtAxisObjPeer$$[$j$$31$$].$w$)
        }else {
          if($DvtAxisEventManager$$) {
            if($pointB1$$ = $DvtAxisObjPeer$$[$j$$31$$].y, $pointB2$$ = $DvtAxisObjPeer$$[$j$$31$$].y + $DvtAxisObjPeer$$[$j$$31$$].$h$, $pointB1$$ >= $DvtAxisConstants$$ && $pointB1$$ - $DvtAxisAutomation$$ < $DvtAxisRenderer$$ || $pointB1$$ < $DvtAxisConstants$$ && $pointB2$$ + $DvtAxisAutomation$$ > $DvtAxisConstants$$) {
              return $JSCompiler_alias_TRUE$$
            }
          }else {
            if($pointB1$$ = $DvtAxisObjPeer$$[$j$$31$$].x, $pointB2$$ = $DvtAxisObjPeer$$[$j$$31$$].x + $DvtAxisObjPeer$$[$j$$31$$].$w$, !$DvtAxisDefaults$$ && $pointB1$$ - $DvtAxisAutomation$$ < $DvtAxisRenderer$$ || $DvtAxisDefaults$$ && $pointB2$$ + $DvtAxisAutomation$$ > $DvtAxisConstants$$) {
              return $JSCompiler_alias_TRUE$$
            }
          }
          $DvtAxisConstants$$ = $pointB1$$;
          $DvtAxisRenderer$$ = $pointB2$$
        }
      }
    }
    return $JSCompiler_alias_FALSE$$
  };
  dvt.$AxisInfo$.prototype.$IsOverlappingDims$ = function $dvt$$AxisInfo$$$$IsOverlappingDims$$($DvtAxisObjPeer$$, $DvtAxisKeyboardHandler$$) {
    if(!$DvtAxisObjPeer$$ || !$DvtAxisKeyboardHandler$$) {
      return $JSCompiler_alias_FALSE$$
    }
    var $DvtAxisEventManager$$ = $DvtAxisObjPeer$$.y, $DvtAxisDefaults$$ = $DvtAxisObjPeer$$.y + $DvtAxisObjPeer$$.$h$, $DvtAxisAutomation$$ = $DvtAxisObjPeer$$.x, $DvtAxisConstants$$ = $DvtAxisObjPeer$$.x + $DvtAxisObjPeer$$.$w$, $DvtAxisRenderer$$ = $DvtAxisKeyboardHandler$$.y, $pointB2$$1$$ = $DvtAxisKeyboardHandler$$.y + $DvtAxisKeyboardHandler$$.$h$, $pointB3$$ = $DvtAxisKeyboardHandler$$.x, $pointB4$$ = $DvtAxisKeyboardHandler$$.x + $DvtAxisKeyboardHandler$$.$w$;
    return($DvtAxisAutomation$$ <= $pointB3$$ && $pointB3$$ <= $DvtAxisConstants$$ || $DvtAxisAutomation$$ <= $pointB4$$ && $pointB4$$ <= $DvtAxisConstants$$ || $pointB3$$ <= $DvtAxisAutomation$$ && $DvtAxisAutomation$$ <= $pointB4$$ || $pointB3$$ <= $DvtAxisConstants$$ && $DvtAxisConstants$$ <= $pointB4$$) && ($DvtAxisRenderer$$ >= $DvtAxisEventManager$$ && $DvtAxisRenderer$$ < $DvtAxisDefaults$$ || $DvtAxisRenderer$$ <= $DvtAxisEventManager$$ && $pointB2$$1$$ >= $DvtAxisEventManager$$)
  };
  dvt.$AxisInfo$.prototype.$GetTickLabelGapSize$ = function $dvt$$AxisInfo$$$$GetTickLabelGapSize$$() {
    var $DvtAxisObjPeer$$ = this.$getTickLabelHeight$(), $DvtAxisKeyboardHandler$$ = this instanceof dvt.$GroupAxisInfo$ ? 0.24 * $DvtAxisObjPeer$$ : 0.79 * $DvtAxisObjPeer$$, $DvtAxisObjPeer$$ = this instanceof dvt.$GroupAxisInfo$ ? 0.08 * $DvtAxisObjPeer$$ : 0.28 * $DvtAxisObjPeer$$;
    return"left" == this.$Position$ || ("right" == this.$Position$ || "radial" == this.$Position$) || this.$isLabelRotated$() ? $DvtAxisObjPeer$$ : $DvtAxisKeyboardHandler$$
  };
  dvt.$AxisInfo$.prototype.$getTickLabelHeight$ = function $dvt$$AxisInfo$$$$getTickLabelHeight$$() {
    return dvt.$TextUtils$.$getTextStringHeight$(this.$getCtx$(), this.$Options$.tickLabel.style)
  };
  dvt.$AxisInfo$.prototype.$SkipLabels$ = function $dvt$$AxisInfo$$$$SkipLabels$$($DvtAxisObjPeer$$, $DvtAxisKeyboardHandler$$) {
    for(var $DvtAxisEventManager$$ = 0, $DvtAxisDefaults$$ = this.$IsOverlapping$($DvtAxisKeyboardHandler$$, $DvtAxisEventManager$$);$DvtAxisDefaults$$;) {
      $DvtAxisEventManager$$++, $DvtAxisDefaults$$ = this.$IsOverlapping$($DvtAxisKeyboardHandler$$, $DvtAxisEventManager$$)
    }
    if(0 < $DvtAxisEventManager$$) {
      for(var $DvtAxisDefaults$$ = [], $DvtAxisAutomation$$ = 0;$DvtAxisAutomation$$ < $DvtAxisObjPeer$$.length;$DvtAxisAutomation$$ += $DvtAxisEventManager$$ + 1) {
        $DvtAxisDefaults$$.push($DvtAxisObjPeer$$[$DvtAxisAutomation$$])
      }
      return $DvtAxisDefaults$$
    }
    return $DvtAxisObjPeer$$
  };
  dvt.$AxisInfo$.prototype.$SkipTangentialLabels$ = function $dvt$$AxisInfo$$$$SkipTangentialLabels$$($DvtAxisObjPeer$$, $DvtAxisKeyboardHandler$$) {
    var $DvtAxisEventManager$$ = [], $DvtAxisDefaults$$ = $DvtAxisObjPeer$$.length, $DvtAxisAutomation$$ = $JSCompiler_alias_NULL$$;
    if(1 < $DvtAxisDefaults$$) {
      for(var $DvtAxisConstants$$, $DvtAxisRenderer$$ = 0;$DvtAxisRenderer$$ < $DvtAxisDefaults$$;$DvtAxisRenderer$$++) {
        if($DvtAxisKeyboardHandler$$[$DvtAxisRenderer$$] && (!$DvtAxisConstants$$ || $DvtAxisConstants$$ && !this.$IsOverlappingDims$($DvtAxisConstants$$, $DvtAxisKeyboardHandler$$[$DvtAxisRenderer$$]))) {
          $DvtAxisAutomation$$ || ($DvtAxisAutomation$$ = $DvtAxisKeyboardHandler$$[$DvtAxisRenderer$$]), $DvtAxisEventManager$$.push($DvtAxisObjPeer$$[$DvtAxisRenderer$$]), $DvtAxisConstants$$ = $DvtAxisKeyboardHandler$$[$DvtAxisRenderer$$]
        }
      }
      this.$IsOverlappingDims$($DvtAxisConstants$$, $DvtAxisAutomation$$) && $DvtAxisEventManager$$.pop();
      return $DvtAxisEventManager$$
    }
    return $DvtAxisObjPeer$$
  };
  dvt.$AxisInfo$.prototype.$GetLabelDims$ = function $dvt$$AxisInfo$$$$GetLabelDims$$($DvtAxisObjPeer$$, $DvtAxisKeyboardHandler$$) {
    for(var $DvtAxisEventManager$$ = [], $DvtAxisDefaults$$ = 0;$DvtAxisDefaults$$ < $DvtAxisObjPeer$$.length;$DvtAxisDefaults$$++) {
      var $DvtAxisAutomation$$ = $DvtAxisObjPeer$$[$DvtAxisDefaults$$];
      $DvtAxisAutomation$$ == $JSCompiler_alias_NULL$$ ? $DvtAxisEventManager$$.push($JSCompiler_alias_NULL$$) : ($DvtAxisAutomation$$ = $DvtAxisAutomation$$.$measureDimensions$($DvtAxisKeyboardHandler$$), $DvtAxisAutomation$$.$w$ && $DvtAxisAutomation$$.$h$ ? $DvtAxisEventManager$$.push($DvtAxisAutomation$$) : $DvtAxisEventManager$$.push($JSCompiler_alias_NULL$$))
    }
    return $DvtAxisEventManager$$
  };
  dvt.$AxisInfo$.prototype.$GuessLabelDims$ = function $dvt$$AxisInfo$$$$GuessLabelDims$$($DvtAxisObjPeer$$, $DvtAxisKeyboardHandler$$, $DvtAxisEventManager$$, $DvtAxisDefaults$$) {
    var $DvtAxisAutomation$$ = [];
    "undefined" == typeof $DvtAxisEventManager$$ && ($DvtAxisEventManager$$ = 1);
    for(var $DvtAxisConstants$$ = 0;$DvtAxisConstants$$ < $DvtAxisObjPeer$$.length;$DvtAxisConstants$$++) {
      var $DvtAxisRenderer$$ = $DvtAxisObjPeer$$[$DvtAxisConstants$$];
      if($DvtAxisRenderer$$ == $JSCompiler_alias_NULL$$) {
        $DvtAxisAutomation$$.push($JSCompiler_alias_NULL$$)
      }else {
        $DvtAxisKeyboardHandler$$.$addChild$($DvtAxisRenderer$$);
        var $estH_estimatedSize$$ = dvt.$TextUtils$.$guessTextDimensions$($DvtAxisRenderer$$), $estW$$ = $estH_estimatedSize$$.$w$ * $DvtAxisEventManager$$, $estH_estimatedSize$$ = $estH_estimatedSize$$.$h$;
        $DvtAxisKeyboardHandler$$.removeChild($DvtAxisRenderer$$);
        $DvtAxisRenderer$$ = this.$isLabelRotated$($DvtAxisDefaults$$) ? new dvt.$Rectangle$($DvtAxisRenderer$$.$getTranslateX$() - $estH_estimatedSize$$ / 2, $DvtAxisRenderer$$.$getTranslateY$() - $estW$$ / 2, $estH_estimatedSize$$, $estW$$) : new dvt.$Rectangle$($DvtAxisRenderer$$.$getX$() - $estW$$ / 2, $DvtAxisRenderer$$.$getY$() - $estH_estimatedSize$$ / 2, $estW$$, $estH_estimatedSize$$);
        $DvtAxisAutomation$$.push($DvtAxisRenderer$$)
      }
    }
    return $DvtAxisAutomation$$
  };
  dvt.$AxisInfo$.prototype.$getMajorTickCount$ = $JSCompiler_returnArg$$($JSCompiler_alias_NULL$$);
  dvt.$AxisInfo$.prototype.$getMinorTickCount$ = $JSCompiler_returnArg$$($JSCompiler_alias_NULL$$);
  dvt.$AxisInfo$.prototype.$getMajorIncrement$ = $JSCompiler_returnArg$$($JSCompiler_alias_NULL$$);
  dvt.$AxisInfo$.prototype.$getMinimumExtent$ = $JSCompiler_returnArg$$(0);
  dvt.$AxisInfo$.prototype.$getStartCoord$ = $JSCompiler_get$$("$StartCoord$");
  dvt.$AxisInfo$.prototype.$getEndCoord$ = $JSCompiler_get$$("$EndCoord$");
  dvt.$AxisInfo$.prototype.$getStartOverflow$ = $JSCompiler_get$$("$StartOverflow$");
  dvt.$AxisInfo$.prototype.$getEndOverflow$ = $JSCompiler_get$$("$EndOverflow$");
  dvt.$AxisInfo$.prototype.$getGroupWidth$ = $JSCompiler_returnArg$$(0);
  dvt.$AxisInfo$.prototype.$getGroup$ = $JSCompiler_returnArg$$($JSCompiler_alias_NULL$$);
  dvt.$AxisInfo$.prototype.$linearToActual$ = $JSCompiler_identityFn$$();
  dvt.$AxisInfo$.prototype.$actualToLinear$ = $JSCompiler_identityFn$$();
  dvt.$DataAxisInfo$ = function $dvt$$DataAxisInfo$$($DvtAxisObjPeer$$, $DvtAxisKeyboardHandler$$, $DvtAxisEventManager$$) {
    this.Init($DvtAxisObjPeer$$, $DvtAxisKeyboardHandler$$, $DvtAxisEventManager$$)
  };
  dvt.$Obj$.$createSubclass$(dvt.$DataAxisInfo$, dvt.$AxisInfo$);
  dvt.$DataAxisInfo$.$_MAX_NUMBER_OF_GRIDS_AUTO$ = 10;
  dvt.$DataAxisInfo$.$_MINOR_TICK_COUNT$ = 2;
  dvt.$DataAxisInfo$.$_MAX_ZOOM_FACTOR$ = 64;
  dvt.$DataAxisInfo$.prototype.Init = function $dvt$$DataAxisInfo$$$Init$($DvtAxisObjPeer$$, $DvtAxisKeyboardHandler$$, $DvtAxisEventManager$$) {
    dvt.$DataAxisInfo$.$superclass$.Init.call(this, $DvtAxisObjPeer$$, $DvtAxisKeyboardHandler$$, $DvtAxisEventManager$$);
    "top" == this.$Position$ || "bottom" == this.$Position$ ? ("off" != $DvtAxisKeyboardHandler$$.tickLabel.rendered && "off" != $DvtAxisKeyboardHandler$$.rendered && (this.$StartOverflow$ = Math.max(dvt.$Axis$.$MINIMUM_AXIS_BUFFER$ - $DvtAxisKeyboardHandler$$.leftBuffer, 0), this.$EndOverflow$ = Math.max(dvt.$Axis$.$MINIMUM_AXIS_BUFFER$ - $DvtAxisKeyboardHandler$$.rightBuffer, 0)), dvt.$Agent$.$isRightToLeft$($DvtAxisObjPeer$$) ? (this.$_minCoord$ = this.$EndCoord$ - this.$EndOverflow$, this.$_maxCoord$ = 
    this.$StartCoord$ + this.$StartOverflow$) : (this.$_minCoord$ = this.$StartCoord$ + this.$StartOverflow$, this.$_maxCoord$ = this.$EndCoord$ - this.$EndOverflow$)) : "tangential" == this.$Position$ || "radial" == this.$Position$ ? (this.$_minCoord$ = this.$StartCoord$, this.$_maxCoord$ = this.$EndCoord$) : (this.$_minCoord$ = this.$EndCoord$, this.$_maxCoord$ = this.$StartCoord$);
    this.$DataMin$ = $DvtAxisKeyboardHandler$$.dataMin;
    this.$DataMax$ = $DvtAxisKeyboardHandler$$.dataMax;
    this.$_isLog$ = "log" == $DvtAxisKeyboardHandler$$.scale && 0 < this.$DataMin$ && 0 < this.$DataMax$;
    this.$_globalMin$ = this.$actualToLinear$($DvtAxisKeyboardHandler$$.min);
    this.$_globalMax$ = this.$actualToLinear$($DvtAxisKeyboardHandler$$.max);
    this.$_minValue$ = $DvtAxisKeyboardHandler$$.viewportMin == $JSCompiler_alias_NULL$$ ? this.$_globalMin$ : this.$actualToLinear$($DvtAxisKeyboardHandler$$.viewportMin);
    this.$_maxValue$ = $DvtAxisKeyboardHandler$$.viewportMax == $JSCompiler_alias_NULL$$ ? this.$_globalMax$ : this.$actualToLinear$($DvtAxisKeyboardHandler$$.viewportMax);
    this.$_dataMin$ = this.$actualToLinear$(this.$DataMin$);
    this.$_dataMax$ = this.$actualToLinear$(this.$DataMax$);
    this.$_majorIncrement$ = this.$actualToLinear$($DvtAxisKeyboardHandler$$.step);
    this.$_minorIncrement$ = this.$actualToLinear$($DvtAxisKeyboardHandler$$.minorStep);
    this.$_minMajorIncrement$ = this.$actualToLinear$($DvtAxisKeyboardHandler$$.minStep);
    this.$_majorTickCount$ = $DvtAxisKeyboardHandler$$._majorTickCount;
    this.$_minorTickCount$ = $DvtAxisKeyboardHandler$$._minorTickCount;
    this.$_zeroBaseline$ = !this.$_isLog$ && "zero" == $DvtAxisKeyboardHandler$$.baselineScaling;
    this.$_converter$ = $JSCompiler_alias_NULL$$;
    $DvtAxisKeyboardHandler$$.tickLabel != $JSCompiler_alias_NULL$$ && (this.$_converter$ = $DvtAxisKeyboardHandler$$.tickLabel.converter);
    this.$_calcAxisExtents$();
    this.$GlobalMin$ = this.$linearToActual$(this.$_globalMin$);
    this.$GlobalMax$ = this.$linearToActual$(this.$_globalMax$);
    this.$MinValue$ = this.$linearToActual$(this.$_minValue$);
    this.$MaxValue$ = this.$linearToActual$(this.$_maxValue$)
  };
  dvt.$DataAxisInfo$.prototype.$getMinLabel$ = function $dvt$$DataAxisInfo$$$$getMinLabel$$() {
    return this.$_zeroBaseline$ || "on" == this.$Options$._continuousExtent && this.$Options$.min == $JSCompiler_alias_NULL$$ ? Math.ceil(this.$_minValue$ / this.$_majorIncrement$) * this.$_majorIncrement$ : Math.ceil((this.$_minValue$ - this.$_globalMin$) / this.$_majorIncrement$) * this.$_majorIncrement$ + this.$_globalMin$
  };
  dvt.$DataAxisInfo$.prototype.$getLabels$ = function $dvt$$DataAxisInfo$$$$getLabels$$($DvtAxisObjPeer$$, $DvtAxisKeyboardHandler$$) {
    if($DvtAxisKeyboardHandler$$ && 0 < $DvtAxisKeyboardHandler$$) {
      return $JSCompiler_alias_NULL$$
    }
    var $DvtAxisEventManager$$ = [], $DvtAxisDefaults$$ = [], $DvtAxisDefaults$$ = $DvtAxisObjPeer$$.$_stage$;
    if(this.$Options$.tickLabel && this.$Options$.tickLabel.scaling) {
      var $DvtAxisAutomation$$ = this.$Options$.tickLabel.autoPrecision ? this.$Options$.tickLabel.autoPrecision : "on";
      this.$_axisValueFormatter$ = new dvt.$LinearScaleAxisValueFormatter$($DvtAxisObjPeer$$, this.$_minValue$, this.$_maxValue$, this.$_majorIncrement$, this.$Options$.tickLabel.scaling, $DvtAxisAutomation$$)
    }
    for(var $DvtAxisConstants$$ = 0;$DvtAxisConstants$$ <= this.$_majorTickCount$;$DvtAxisConstants$$++) {
      var $DvtAxisRenderer$$ = $DvtAxisConstants$$ * this.$_majorIncrement$ + this.$getMinLabel$();
      if($DvtAxisRenderer$$ > this.$_maxValue$) {
        break
      }
      var $coord$$4_text$$40$$ = this.$_getUnboundedCoordAt$($DvtAxisRenderer$$);
      if(this.$Options$._skipHighestTick) {
        if($DvtAxisRenderer$$ == this.$_maxValue$) {
          continue
        }
        if("tangential" != this.$Position$ && Math.abs($coord$$4_text$$40$$ - this.$_maxCoord$) < this.$getTickLabelHeight$()) {
          continue
        }
      }
      this.$_isLog$ && ($DvtAxisRenderer$$ = this.$linearToActual$($DvtAxisRenderer$$), this.$_axisValueFormatter$ = new dvt.$LinearScaleAxisValueFormatter$($DvtAxisObjPeer$$, $DvtAxisRenderer$$, $DvtAxisRenderer$$, $DvtAxisRenderer$$, this.$Options$.tickLabel.scaling, $DvtAxisAutomation$$));
      $DvtAxisRenderer$$ = this.$_formatValue$($DvtAxisRenderer$$);
      $coord$$4_text$$40$$ = this.$CreateLabel$($DvtAxisObjPeer$$, $DvtAxisRenderer$$, $coord$$4_text$$40$$);
      $DvtAxisEventManager$$.push($coord$$4_text$$40$$)
    }
    "tangential" != this.$Position$ && ($DvtAxisDefaults$$ = this.$GetLabelDims$($DvtAxisEventManager$$, $DvtAxisDefaults$$), $DvtAxisEventManager$$ = this.$SkipLabels$($DvtAxisEventManager$$, $DvtAxisDefaults$$));
    return $DvtAxisEventManager$$
  };
  dvt.$DataAxisInfo$.prototype.$getMajorTickCoords$ = function $dvt$$DataAxisInfo$$$$getMajorTickCoords$$() {
    for(var $DvtAxisObjPeer$$ = [], $DvtAxisKeyboardHandler$$ = 0;$DvtAxisKeyboardHandler$$ <= this.$_majorTickCount$;$DvtAxisKeyboardHandler$$++) {
      var $DvtAxisEventManager$$ = $DvtAxisKeyboardHandler$$ * this.$_majorIncrement$ + this.$getMinLabel$();
      if($DvtAxisEventManager$$ > this.$_maxValue$) {
        break
      }
      this.$Options$._skipHighestTick && $DvtAxisEventManager$$ == this.$_maxValue$ || $DvtAxisObjPeer$$.push(this.$_getUnboundedCoordAt$($DvtAxisEventManager$$))
    }
    return $DvtAxisObjPeer$$
  };
  dvt.$DataAxisInfo$.prototype.$getMinorTickCoords$ = function $dvt$$DataAxisInfo$$$$getMinorTickCoords$$() {
    for(var $DvtAxisObjPeer$$ = [], $DvtAxisKeyboardHandler$$ = -1;$DvtAxisKeyboardHandler$$ <= this.$_majorTickCount$;$DvtAxisKeyboardHandler$$++) {
      var $DvtAxisEventManager$$ = $DvtAxisKeyboardHandler$$ * this.$_majorIncrement$ + this.$getMinLabel$();
      if(this.$_isLog$ && 1 == this.$_majorIncrement$ && 1 == this.$_minorIncrement$) {
        for(var $DvtAxisDefaults$$ = 2;9 >= $DvtAxisDefaults$$;$DvtAxisDefaults$$++) {
          var $DvtAxisAutomation$$ = $DvtAxisEventManager$$ + dvt.$Math$.$log10$($DvtAxisDefaults$$);
          if($DvtAxisAutomation$$ > this.$_maxValue$) {
            break
          }
          $DvtAxisAutomation$$ < this.$_minValue$ || ($DvtAxisAutomation$$ = this.$_getUnboundedCoordAt$($DvtAxisAutomation$$), $DvtAxisObjPeer$$.push($DvtAxisAutomation$$))
        }
      }else {
        for($DvtAxisDefaults$$ = 1;$DvtAxisDefaults$$ < this.$_minorTickCount$;$DvtAxisDefaults$$++) {
          $DvtAxisAutomation$$ = $DvtAxisEventManager$$ + $DvtAxisDefaults$$ * this.$_minorIncrement$;
          if($DvtAxisAutomation$$ > this.$_maxValue$) {
            break
          }
          $DvtAxisAutomation$$ < this.$_minValue$ || ($DvtAxisAutomation$$ = this.$_getUnboundedCoordAt$($DvtAxisAutomation$$), $DvtAxisObjPeer$$.push($DvtAxisAutomation$$))
        }
      }
    }
    return $DvtAxisObjPeer$$
  };
  dvt.$DataAxisInfo$.prototype.$getBaselineCoord$ = function $dvt$$DataAxisInfo$$$$getBaselineCoord$$() {
    return this.$_isLog$ ? this.$_minCoord$ : this.$getBoundedCoordAt$(0)
  };
  dvt.$DataAxisInfo$.prototype.$getUnboundedValueAt$ = function $dvt$$DataAxisInfo$$$$getUnboundedValueAt$$($DvtAxisObjPeer$$) {
    return $DvtAxisObjPeer$$ == $JSCompiler_alias_NULL$$ ? $JSCompiler_alias_NULL$$ : this.$linearToActual$(this.$_minValue$ + ($DvtAxisObjPeer$$ - this.$_minCoord$) / (this.$_maxCoord$ - this.$_minCoord$) * (this.$_maxValue$ - this.$_minValue$))
  };
  dvt.$DataAxisInfo$.prototype.$getUnboundedCoordAt$ = function $dvt$$DataAxisInfo$$$$getUnboundedCoordAt$$($DvtAxisObjPeer$$) {
    return this.$_getUnboundedCoordAt$(this.$actualToLinear$($DvtAxisObjPeer$$))
  };
  dvt.$DataAxisInfo$.prototype.$_getUnboundedCoordAt$ = function $dvt$$DataAxisInfo$$$$_getUnboundedCoordAt$$($DvtAxisObjPeer$$) {
    return $DvtAxisObjPeer$$ == $JSCompiler_alias_NULL$$ ? $JSCompiler_alias_NULL$$ : this.$_minCoord$ + ($DvtAxisObjPeer$$ - this.$_minValue$) / (this.$_maxValue$ - this.$_minValue$) * (this.$_maxCoord$ - this.$_minCoord$)
  };
  dvt.$DataAxisInfo$.prototype.$_formatValue$ = function $dvt$$DataAxisInfo$$$$_formatValue$$($DvtAxisObjPeer$$) {
    if(this.$_converter$ && (this.$_converter$.getAsString || this.$_converter$.format)) {
      if(this.$_axisValueFormatter$) {
        return this.$_axisValueFormatter$.$format$($DvtAxisObjPeer$$, this.$_converter$)
      }
      if(this.$_converter$.getAsString) {
        return this.$_converter$.getAsString($DvtAxisObjPeer$$)
      }
      if(this.$_converter$.format) {
        return this.$_converter$.format($DvtAxisObjPeer$$)
      }
    }else {
      if(this.$_axisValueFormatter$) {
        return this.$_axisValueFormatter$.$format$($DvtAxisObjPeer$$)
      }
      var $DvtAxisKeyboardHandler$$ = dvt.$Math$.$log10$(this.$_majorIncrement$), $DvtAxisKeyboardHandler$$ = Math.max(Math.ceil(-$DvtAxisKeyboardHandler$$), 0);
      return $DvtAxisObjPeer$$.toFixed($DvtAxisKeyboardHandler$$)
    }
  };
  dvt.$DataAxisInfo$.prototype.$_calcMajorMinorIncr$ = function $dvt$$DataAxisInfo$$$$_calcMajorMinorIncr$$($DvtAxisObjPeer$$) {
    this.$_majorIncrement$ || (this.$_majorIncrement$ = this.$_majorTickCount$ ? (this.$_maxValue$ - this.$_minValue$) / this.$_majorTickCount$ : Math.max($DvtAxisObjPeer$$, this.$_minMajorIncrement$));
    this.$_majorTickCount$ || (this.$_majorTickCount$ = (this.$_maxValue$ - this.$_minValue$) / this.$_majorIncrement$);
    this.$_minorTickCount$ || (this.$_minorTickCount$ = this.$_minorIncrement$ ? this.$_majorIncrement$ / this.$_minorIncrement$ : this.$_isLog$ ? this.$_majorIncrement$ : dvt.$DataAxisInfo$.$_MINOR_TICK_COUNT$);
    this.$_minorIncrement$ || (this.$_minorIncrement$ = this.$_majorIncrement$ / this.$_minorTickCount$)
  };
  dvt.$DataAxisInfo$.prototype.$_calcAxisExtents$ = function $dvt$$DataAxisInfo$$$$_calcAxisExtents$$() {
    var $DvtAxisObjPeer$$ = "on" == this.$Options$._continuousExtent;
    this.$_zeroBaseline$ && (this.$_dataMin$ = Math.min(0, this.$_dataMin$), this.$_dataMax$ = Math.max(0, this.$_dataMax$));
    var $DvtAxisKeyboardHandler$$ = this.$_calcAxisScale$(this.$_globalMin$ != $JSCompiler_alias_NULL$$ ? this.$_globalMin$ : this.$_dataMin$, this.$_globalMax$ != $JSCompiler_alias_NULL$$ ? this.$_globalMax$ : this.$_dataMax$);
    this.$_dataMin$ == this.$_dataMax$ && (0 == this.$_dataMin$ ? this.$_dataMax$ += 5 * $DvtAxisKeyboardHandler$$ : (this.$_dataMin$ -= 2 * $DvtAxisKeyboardHandler$$, this.$_dataMax$ += 2 * $DvtAxisKeyboardHandler$$));
    if(this.$_globalMin$ == $JSCompiler_alias_NULL$$) {
      if(this.$_zeroBaseline$ && 0 <= this.$_dataMin$) {
        this.$_globalMin$ = 0
      }else {
        if($DvtAxisObjPeer$$) {
          this.$_globalMin$ = this.$_dataMin$ - 0.1 * (this.$_dataMax$ - this.$_dataMin$)
        }else {
          if(!this.$_zeroBaseline$ && this.$_globalMax$ != $JSCompiler_alias_NULL$$) {
            for(this.$_globalMin$ = this.$_globalMax$;this.$_globalMin$ >= this.$_dataMin$;) {
              this.$_globalMin$ -= $DvtAxisKeyboardHandler$$
            }
          }else {
            this.$_globalMin$ = (Math.ceil(this.$_dataMin$ / $DvtAxisKeyboardHandler$$) - 1) * $DvtAxisKeyboardHandler$$
          }
        }
      }
      0 <= this.$_dataMin$ && (this.$_globalMin$ = Math.max(this.$_globalMin$, 0))
    }
    if(this.$_globalMax$ == $JSCompiler_alias_NULL$$) {
      if(this.$_majorTickCount$) {
        this.$_globalMax$ = this.$_globalMin$ + this.$_majorTickCount$ * $DvtAxisKeyboardHandler$$
      }else {
        if(this.$_zeroBaseline$ && 0 >= this.$_dataMax$) {
          this.$_globalMax$ = 0
        }else {
          if($DvtAxisObjPeer$$) {
            this.$_globalMax$ = this.$_dataMax$ + 0.1 * (this.$_dataMax$ - this.$_dataMin$)
          }else {
            if(this.$_zeroBaseline$) {
              this.$_globalMax$ = (Math.floor(this.$_dataMax$ / $DvtAxisKeyboardHandler$$) + 1) * $DvtAxisKeyboardHandler$$
            }else {
              for(this.$_globalMax$ = this.$_globalMin$;this.$_globalMax$ <= this.$_dataMax$;) {
                this.$_globalMax$ += $DvtAxisKeyboardHandler$$
              }
            }
          }
        }
      }
      0 >= this.$_dataMax$ && (this.$_globalMax$ = Math.min(this.$_globalMax$, 0))
    }
    this.$_globalMax$ == this.$_globalMin$ && (this.$_globalMax$ = 100, this.$_globalMin$ = 0, $DvtAxisKeyboardHandler$$ = (this.$_globalMax$ - this.$_globalMin$) / dvt.$DataAxisInfo$.$_MAX_NUMBER_OF_GRIDS_AUTO$);
    this.$_minValue$ == $JSCompiler_alias_NULL$$ && (this.$_minValue$ = this.$_globalMin$);
    this.$_maxValue$ == $JSCompiler_alias_NULL$$ && (this.$_maxValue$ = this.$_globalMax$);
    if(this.$_minValue$ != this.$_globalMin$ || this.$_maxValue$ != this.$_globalMax$) {
      $DvtAxisKeyboardHandler$$ = this.$_calcAxisScale$(this.$_minValue$, this.$_maxValue$)
    }
    this.$_globalMin$ > this.$_minValue$ && (this.$_globalMin$ = this.$_minValue$);
    this.$_globalMax$ < this.$_maxValue$ && (this.$_globalMax$ = this.$_maxValue$);
    this.$_calcMajorMinorIncr$($DvtAxisKeyboardHandler$$)
  };
  dvt.$DataAxisInfo$.prototype.$_calcAxisScale$ = function $dvt$$DataAxisInfo$$$$_calcAxisScale$$($DvtAxisObjPeer$$, $DvtAxisKeyboardHandler$$) {
    if(this.$_majorIncrement$) {
      return this.$_majorIncrement$
    }
    var $DvtAxisEventManager$$ = $DvtAxisKeyboardHandler$$ - $DvtAxisObjPeer$$;
    if(this.$_isLog$) {
      return Math.floor($DvtAxisEventManager$$ / 8) + 1
    }
    if(0 == $DvtAxisEventManager$$) {
      return 0 == $DvtAxisObjPeer$$ ? 10 : Math.pow(10, Math.floor(dvt.$Math$.$log10$($DvtAxisObjPeer$$)) - 1)
    }
    if(this.$_majorTickCount$) {
      var $DvtAxisEventManager$$ = $DvtAxisEventManager$$ / this.$_majorTickCount$, $DvtAxisDefaults$$ = Math.pow(10, Math.ceil(dvt.$Math$.$log10$($DvtAxisEventManager$$) - 1)), $DvtAxisEventManager$$ = $DvtAxisEventManager$$ / $DvtAxisDefaults$$, $DvtAxisEventManager$$ = 1 < $DvtAxisEventManager$$ && 1.5 >= $DvtAxisEventManager$$ ? 1.5 : 5 < $DvtAxisEventManager$$ ? 10 : Math.ceil($DvtAxisEventManager$$);
      return $DvtAxisEventManager$$ * $DvtAxisDefaults$$
    }
    $DvtAxisDefaults$$ = dvt.$Math$.$log10$($DvtAxisEventManager$$);
    $DvtAxisDefaults$$ = Math.pow(10, Math.ceil($DvtAxisDefaults$$) - 2);
    $DvtAxisEventManager$$ = Math.round($DvtAxisEventManager$$ / $DvtAxisDefaults$$);
    return(10 <= $DvtAxisEventManager$$ && 14 >= $DvtAxisEventManager$$ ? 2 : 15 <= $DvtAxisEventManager$$ && 19 >= $DvtAxisEventManager$$ ? 3 : 20 <= $DvtAxisEventManager$$ && 24 >= $DvtAxisEventManager$$ ? 4 : 25 <= $DvtAxisEventManager$$ && 45 >= $DvtAxisEventManager$$ ? 5 : 46 <= $DvtAxisEventManager$$ && 80 >= $DvtAxisEventManager$$ ? 10 : 20) * $DvtAxisDefaults$$
  };
  dvt.$DataAxisInfo$.prototype.$getMajorTickCount$ = $JSCompiler_get$$("$_majorTickCount$");
  dvt.$DataAxisInfo$.prototype.$getMinorTickCount$ = $JSCompiler_get$$("$_minorTickCount$");
  dvt.$DataAxisInfo$.prototype.$getMajorIncrement$ = function $dvt$$DataAxisInfo$$$$getMajorIncrement$$() {
    return this.$linearToActual$(this.$_majorIncrement$)
  };
  dvt.$DataAxisInfo$.prototype.$getMinimumExtent$ = function $dvt$$DataAxisInfo$$$$getMinimumExtent$$() {
    return(this.$_globalMax$ - this.$_globalMin$) / dvt.$DataAxisInfo$.$_MAX_ZOOM_FACTOR$
  };
  dvt.$DataAxisInfo$.prototype.$getStartOverflow$ = function $dvt$$DataAxisInfo$$$$getStartOverflow$$() {
    return("top" == this.$Position$ || "bottom" == this.$Position$) && dvt.$Agent$.$isRightToLeft$(this.$getCtx$()) ? this.$EndOverflow$ : this.$StartOverflow$
  };
  dvt.$DataAxisInfo$.prototype.$getEndOverflow$ = function $dvt$$DataAxisInfo$$$$getEndOverflow$$() {
    return("top" == this.$Position$ || "bottom" == this.$Position$) && dvt.$Agent$.$isRightToLeft$(this.$getCtx$()) ? this.$StartOverflow$ : this.$EndOverflow$
  };
  dvt.$DataAxisInfo$.prototype.$linearToActual$ = function $dvt$$DataAxisInfo$$$$linearToActual$$($DvtAxisObjPeer$$) {
    return $DvtAxisObjPeer$$ == $JSCompiler_alias_NULL$$ ? $JSCompiler_alias_NULL$$ : this.$_isLog$ ? Math.pow(10, $DvtAxisObjPeer$$) : $DvtAxisObjPeer$$
  };
  dvt.$DataAxisInfo$.prototype.$actualToLinear$ = function $dvt$$DataAxisInfo$$$$actualToLinear$$($DvtAxisObjPeer$$) {
    return $DvtAxisObjPeer$$ == $JSCompiler_alias_NULL$$ ? $JSCompiler_alias_NULL$$ : this.$_isLog$ ? 0 < $DvtAxisObjPeer$$ ? dvt.$Math$.$log10$($DvtAxisObjPeer$$) : $JSCompiler_alias_NULL$$ : $DvtAxisObjPeer$$
  };
  dvt.$GroupAxisInfo$ = function $dvt$$GroupAxisInfo$$($DvtAxisObjPeer$$, $DvtAxisKeyboardHandler$$, $DvtAxisEventManager$$) {
    this.Init($DvtAxisObjPeer$$, $DvtAxisKeyboardHandler$$, $DvtAxisEventManager$$)
  };
  dvt.$Obj$.$createSubclass$(dvt.$GroupAxisInfo$, dvt.$AxisInfo$);
  dvt.$GroupAxisInfo$.$_MAX_LINE_WRAP$ = 3;
  dvt.$GroupAxisInfo$.prototype.Init = function $dvt$$GroupAxisInfo$$$Init$($DvtAxisObjPeer$$, $DvtAxisKeyboardHandler$$, $DvtAxisEventManager$$) {
    dvt.$GroupAxisInfo$.$superclass$.Init.call(this, $DvtAxisObjPeer$$, $DvtAxisKeyboardHandler$$, $DvtAxisEventManager$$);
    var $DvtAxisAutomation$$ = dvt.$Agent$.$isRightToLeft$($DvtAxisObjPeer$$), $DvtAxisConstants$$ = "top" == this.$Position$ || "bottom" == this.$Position$;
    if($DvtAxisConstants$$ && $DvtAxisAutomation$$) {
      var $DvtAxisRenderer$$ = this.$StartCoord$;
      this.$StartCoord$ = this.$EndCoord$;
      this.$EndCoord$ = $DvtAxisRenderer$$
    }
    this.$_levelsArray$ = [];
    this.$_groupCount$ = this.$_generateLevelsArray$($DvtAxisKeyboardHandler$$.groups, 0, this.$_levelsArray$, 0);
    this.$_numLevels$ = this.$_levelsArray$.length;
    this.$_areSeparatorsRendered$ = "on" == $DvtAxisKeyboardHandler$$.groupSeparators.rendered;
    this.$_separatorColor$ = $DvtAxisKeyboardHandler$$.groupSeparators.color;
    this.$_lastRenderedLevel$ = $JSCompiler_alias_NULL$$;
    this.$_drilling$ = $DvtAxisKeyboardHandler$$.drilling;
    var $DvtAxisRenderer$$ = 0 < $DvtAxisKeyboardHandler$$.endGroupOffset ? Number($DvtAxisKeyboardHandler$$.endGroupOffset) : 0, $startOffset$$1$$ = 0 < $DvtAxisKeyboardHandler$$.startGroupOffset ? Number($DvtAxisKeyboardHandler$$.startGroupOffset) : 0;
    this.$DataMin$ = 0;
    this.$DataMax$ = this.$_groupCount$ - 1;
    this.$GlobalMin$ = $DvtAxisKeyboardHandler$$.min == $JSCompiler_alias_NULL$$ ? this.$DataMin$ - $startOffset$$1$$ : $DvtAxisKeyboardHandler$$.min;
    this.$GlobalMax$ = $DvtAxisKeyboardHandler$$.max == $JSCompiler_alias_NULL$$ ? this.$DataMax$ + $DvtAxisRenderer$$ : $DvtAxisKeyboardHandler$$.max;
    var $startIndex$$1$$ = this.$getGroupIndex$($DvtAxisKeyboardHandler$$.viewportStartGroup), $endIndex$$ = this.$getGroupIndex$($DvtAxisKeyboardHandler$$.viewportEndGroup);
    -1 != $startIndex$$1$$ && (this.$MinValue$ = $startIndex$$1$$ - $startOffset$$1$$);
    -1 != $endIndex$$ && (this.$MaxValue$ = $endIndex$$ + $DvtAxisRenderer$$);
    $DvtAxisKeyboardHandler$$.viewportMin != $JSCompiler_alias_NULL$$ && (this.$MinValue$ = $DvtAxisKeyboardHandler$$.viewportMin);
    $DvtAxisKeyboardHandler$$.viewportMax != $JSCompiler_alias_NULL$$ && (this.$MaxValue$ = $DvtAxisKeyboardHandler$$.viewportMax);
    this.$MinValue$ == $JSCompiler_alias_NULL$$ && (this.$MinValue$ = this.$GlobalMin$);
    this.$MaxValue$ == $JSCompiler_alias_NULL$$ && (this.$MaxValue$ = this.$GlobalMax$);
    this.$GlobalMin$ > this.$MinValue$ && (this.$GlobalMin$ = this.$MinValue$);
    this.$GlobalMax$ < this.$MaxValue$ && (this.$GlobalMax$ = this.$MaxValue$);
    this.$_groupWidthRatios$ = $DvtAxisKeyboardHandler$$._groupWidthRatios;
    this.$_processGroupWidthRatios$();
    this.$_startBuffer$ = $DvtAxisAutomation$$ ? $DvtAxisKeyboardHandler$$.rightBuffer : $DvtAxisKeyboardHandler$$.leftBuffer;
    this.$_endBuffer$ = $DvtAxisAutomation$$ ? $DvtAxisKeyboardHandler$$.leftBuffer : $DvtAxisKeyboardHandler$$.rightBuffer;
    this.$_isLabelRotated$ = [];
    for($DvtAxisAutomation$$ = 0;$DvtAxisAutomation$$ < this.$_numLevels$;$DvtAxisAutomation$$++) {
      this.$_isLabelRotated$.push($JSCompiler_alias_FALSE$$)
    }
    this.$_renderGridAtLabels$ = $DvtAxisKeyboardHandler$$._renderGridAtLabels;
    this.$_labels$ = $JSCompiler_alias_NULL$$;
    this.$_maxSpace$ = $DvtAxisConstants$$ ? $DvtAxisEventManager$$.$h$ : $DvtAxisEventManager$$.$w$;
    $DvtAxisKeyboardHandler$$.title && (this.$_maxSpace$ -= dvt.$TextUtils$.$getTextStringHeight$($DvtAxisObjPeer$$, $DvtAxisKeyboardHandler$$.titleStyle) + $DvtAxisDefaults$$.$getGapSize$($DvtAxisObjPeer$$, $DvtAxisKeyboardHandler$$, $DvtAxisKeyboardHandler$$.layout.titleGap));
    this.$_maxLineWrap$ = dvt.$GroupAxisInfo$.$_MAX_LINE_WRAP$
  };
  dvt.$GroupAxisInfo$.prototype.$_processGroupWidthRatios$ = function $dvt$$GroupAxisInfo$$$$_processGroupWidthRatios$$() {
    if(!this.$_groupWidthRatios$ || 2 > this.$_groupWidthRatios$.length) {
      this.$_groupWidthRatios$ = $JSCompiler_alias_NULL$$
    }else {
      for(var $DvtAxisObjPeer$$ = 0, $DvtAxisKeyboardHandler$$, $DvtAxisEventManager$$, $DvtAxisDefaults$$ = 0;$DvtAxisDefaults$$ < this.$_groupCount$;$DvtAxisDefaults$$++) {
        $DvtAxisKeyboardHandler$$ = 0 == $DvtAxisDefaults$$ ? this.$MinValue$ : Math.max($DvtAxisDefaults$$ - 0.5, this.$MinValue$), $DvtAxisEventManager$$ = $DvtAxisDefaults$$ == this.$_groupCount$ - 1 ? this.$MaxValue$ : Math.min($DvtAxisDefaults$$ + 0.5, this.$MaxValue$), $DvtAxisEventManager$$ > $DvtAxisKeyboardHandler$$ && ($DvtAxisObjPeer$$ += ($DvtAxisEventManager$$ - $DvtAxisKeyboardHandler$$) * this.$_groupWidthRatios$[$DvtAxisDefaults$$])
      }
      var $DvtAxisAutomation$$ = this.$EndCoord$ - this.$StartCoord$;
      this.$_groupWidths$ = dvt.$ArrayUtils$.map(this.$_groupWidthRatios$, function($DvtAxisKeyboardHandler$$) {
        return $DvtAxisKeyboardHandler$$ * $DvtAxisAutomation$$ / $DvtAxisObjPeer$$
      });
      this.$_borderValues$ = [];
      for($DvtAxisDefaults$$ = 0;$DvtAxisDefaults$$ < this.$_groupWidthRatios$.length - 1;$DvtAxisDefaults$$++) {
        this.$_borderValues$.push($DvtAxisDefaults$$ + 0.5)
      }
      this.$_borderCoords$ = [];
      $DvtAxisKeyboardHandler$$ = Math.min(Math.max(Math.round(this.$MinValue$), 0), this.$_borderValues$.length - 1);
      this.$_borderCoords$[$DvtAxisKeyboardHandler$$] = this.$StartCoord$ + (this.$_borderValues$[$DvtAxisKeyboardHandler$$] - this.$MinValue$) * this.$_groupWidths$[$DvtAxisKeyboardHandler$$];
      for($DvtAxisDefaults$$ = $DvtAxisKeyboardHandler$$ + 1;$DvtAxisDefaults$$ < this.$_borderValues$.length;$DvtAxisDefaults$$++) {
        this.$_borderCoords$[$DvtAxisDefaults$$] = this.$_borderCoords$[$DvtAxisDefaults$$ - 1] + this.$_groupWidths$[$DvtAxisDefaults$$]
      }
      for($DvtAxisDefaults$$ = $DvtAxisKeyboardHandler$$ - 1;0 <= $DvtAxisDefaults$$;$DvtAxisDefaults$$--) {
        this.$_borderCoords$[$DvtAxisDefaults$$] = this.$_borderCoords$[$DvtAxisDefaults$$ + 1] - this.$_groupWidths$[$DvtAxisDefaults$$ + 1]
      }
    }
  };
  dvt.$GroupAxisInfo$.prototype.$_rotateLabels$ = function $dvt$$GroupAxisInfo$$$$_rotateLabels$$($DvtAxisObjPeer$$, $DvtAxisKeyboardHandler$$, $DvtAxisEventManager$$, $DvtAxisDefaults$$) {
    var $DvtAxisAutomation$$, $DvtAxisConstants$$ = this.$getCtx$(), $DvtAxisRenderer$$ = dvt.$Agent$.$isRightToLeft$($DvtAxisConstants$$), $isHierarchical$$2$$ = 1 < this.$_numLevels$;
    $DvtAxisDefaults$$ == $JSCompiler_alias_NULL$$ && ($DvtAxisDefaults$$ = this.$_numLevels$ - 1);
    this.$_isLabelRotated$[$DvtAxisDefaults$$] = $JSCompiler_alias_TRUE$$;
    $isHierarchical$$2$$ || this.$_setOverflow$($DvtAxisEventManager$$, $DvtAxisEventManager$$, $DvtAxisObjPeer$$);
    for(var $i$$225$$ = 0;$i$$225$$ < $DvtAxisObjPeer$$.length;$i$$225$$++) {
      if($DvtAxisEventManager$$ = $DvtAxisObjPeer$$[$i$$225$$], $DvtAxisEventManager$$ != $JSCompiler_alias_NULL$$) {
        $DvtAxisAutomation$$ = $DvtAxisEventManager$$.$getX$();
        if($DvtAxisEventManager$$ instanceof dvt.$MultilineText$ || $DvtAxisEventManager$$ instanceof dvt.$BackgroundMultilineText$) {
          var $groupSpan$$ = this.$getGroupWidth$() * (this.$getEndIndex$($i$$225$$, $DvtAxisDefaults$$) - this.$getStartIndex$($i$$225$$, $DvtAxisDefaults$$) + 1);
          2 * $DvtAxisEventManager$$.$getLineHeight$() < $groupSpan$$ ? $DvtAxisEventManager$$.$wrapText$(this.$_maxSpace$, $DvtAxisEventManager$$.$getLineHeight$() * dvt.$GroupAxisInfo$.$_MAX_LINE_WRAP$, 1) : $DvtAxisEventManager$$.$setWrapEnabled$($JSCompiler_alias_FALSE$$)
        }
        $DvtAxisEventManager$$.$setX$(0);
        $DvtAxisEventManager$$.$setY$(0);
        $DvtAxisRenderer$$ ? $DvtAxisEventManager$$.$setRotation$(Math.PI / 2) : $DvtAxisEventManager$$.$setRotation$(3 * Math.PI / 2);
        $DvtAxisEventManager$$.$setTranslateX$($DvtAxisAutomation$$)
      }
    }
    $DvtAxisRenderer$$ = this.$GuessLabelDims$($DvtAxisObjPeer$$, $DvtAxisKeyboardHandler$$, $JSCompiler_alias_NULL$$, $DvtAxisDefaults$$);
    "normal" == this.$Options$.tickLabel.style.$getStyle$(dvt.$CSSStyle$.$WHITE_SPACE$) && this.$_sanitizeWrappedText$($DvtAxisConstants$$, $DvtAxisRenderer$$, $DvtAxisObjPeer$$, $JSCompiler_alias_TRUE$$, $isHierarchical$$2$$) && ($DvtAxisRenderer$$ = this.$GuessLabelDims$($DvtAxisObjPeer$$, $DvtAxisKeyboardHandler$$, $JSCompiler_alias_NULL$$, $DvtAxisDefaults$$));
    return this.$SkipLabels$($DvtAxisObjPeer$$, $DvtAxisRenderer$$)
  };
  dvt.$GroupAxisInfo$.prototype.$_sanitizeWrappedText$ = function $dvt$$GroupAxisInfo$$$$_sanitizeWrappedText$$($DvtAxisObjPeer$$, $DvtAxisKeyboardHandler$$, $DvtAxisEventManager$$, $DvtAxisAutomation$$, $DvtAxisConstants$$) {
    $DvtAxisKeyboardHandler$$ = this.$_calculateMaxWrap$($DvtAxisKeyboardHandler$$, $DvtAxisEventManager$$, $DvtAxisAutomation$$);
    for(var $DvtAxisRenderer$$ = 0, $i$$226$$ = 0;$i$$226$$ < $DvtAxisEventManager$$.length;$i$$226$$++) {
      var $text$$42$$ = $DvtAxisEventManager$$[$i$$226$$];
      if($text$$42$$) {
        var $isMultiline$$3$$ = $text$$42$$ instanceof dvt.$MultilineText$ || $text$$42$$ instanceof dvt.$BackgroundMultilineText$;
        $DvtAxisKeyboardHandler$$ && ($isMultiline$$3$$ && $text$$42$$.$isWrapEnabled$()) && $text$$42$$.$wrapText$(this.$_maxSpace$, $text$$42$$.$getLineHeight$() * this.$_maxLineWrap$, 1);
        $DvtAxisConstants$$ && ($DvtAxisRenderer$$ = Math.max($DvtAxisRenderer$$, dvt.$TextUtils$.$getTextWidth$($text$$42$$)));
        $text$$42$$.$alignMiddle$()
      }
    }
    $DvtAxisConstants$$ && (this.$_maxSpace$ -= $DvtAxisRenderer$$ + $DvtAxisDefaults$$.$getGapSize$($DvtAxisObjPeer$$, this.$Options$, $DvtAxisAutomation$$ ? this.$Options$.layout.hierarchicalLabelGapHeight : this.$Options$.layout.hierarchicalLabelGapWidth));
    return $DvtAxisKeyboardHandler$$
  };
  dvt.$GroupAxisInfo$.prototype.$_calculateMaxWrap$ = function $dvt$$GroupAxisInfo$$$$_calculateMaxWrap$$($DvtAxisObjPeer$$, $DvtAxisKeyboardHandler$$, $DvtAxisEventManager$$) {
    for(var $DvtAxisDefaults$$ = $JSCompiler_alias_FALSE$$;this.$IsOverlapping$($DvtAxisObjPeer$$, 0) && 1 < this.$_maxLineWrap$;) {
      for(var $DvtAxisDefaults$$ = $JSCompiler_alias_TRUE$$, $DvtAxisAutomation$$ = 0;$DvtAxisAutomation$$ < $DvtAxisKeyboardHandler$$.length;$DvtAxisAutomation$$++) {
        var $DvtAxisConstants$$ = $DvtAxisKeyboardHandler$$[$DvtAxisAutomation$$];
        if(($DvtAxisConstants$$ instanceof dvt.$MultilineText$ || $DvtAxisConstants$$ instanceof dvt.$BackgroundMultilineText$) && $DvtAxisConstants$$.$getLineCount$() == this.$_maxLineWrap$) {
          $DvtAxisConstants$$ = $DvtAxisConstants$$.$getLineHeight$(), $DvtAxisEventManager$$ ? $DvtAxisObjPeer$$[$DvtAxisAutomation$$].$w$ -= $DvtAxisConstants$$ : ($DvtAxisObjPeer$$[$DvtAxisAutomation$$].y += 0.5 * $DvtAxisConstants$$, $DvtAxisObjPeer$$[$DvtAxisAutomation$$].$h$ -= $DvtAxisConstants$$)
        }
      }
      this.$_maxLineWrap$--
    }
    return $DvtAxisDefaults$$
  };
  dvt.$GroupAxisInfo$.prototype.$isLabelRotated$ = function $dvt$$GroupAxisInfo$$$$isLabelRotated$$($DvtAxisObjPeer$$) {
    $DvtAxisObjPeer$$ == $JSCompiler_alias_NULL$$ && ($DvtAxisObjPeer$$ = this.$_numLevels$ - 1);
    return this.$_isLabelRotated$[$DvtAxisObjPeer$$]
  };
  dvt.$GroupAxisInfo$.prototype.$_setOverflow$ = function $dvt$$GroupAxisInfo$$$$_setOverflow$$($DvtAxisObjPeer$$, $DvtAxisKeyboardHandler$$, $DvtAxisEventManager$$) {
    $DvtAxisObjPeer$$ = Math.max($DvtAxisObjPeer$$ - this.$_startBuffer$, 0);
    $DvtAxisKeyboardHandler$$ = Math.max($DvtAxisKeyboardHandler$$ - this.$_endBuffer$, 0);
    $DvtAxisEventManager$$ = dvt.$Agent$.$isRightToLeft$(this.$getCtx$());
    this.$StartCoord$ += ($DvtAxisObjPeer$$ - this.$StartOverflow$) * ($DvtAxisEventManager$$ ? -1 : 1);
    this.$EndCoord$ -= ($DvtAxisKeyboardHandler$$ - this.$EndOverflow$) * ($DvtAxisEventManager$$ ? -1 : 1);
    this.$_processGroupWidthRatios$();
    for(var $DvtAxisDefaults$$ = 0;$DvtAxisDefaults$$ < this.$_numLevels$;$DvtAxisDefaults$$++) {
      $DvtAxisEventManager$$ = this.$_labels$[$DvtAxisDefaults$$];
      for(var $DvtAxisAutomation$$ = 0;$DvtAxisAutomation$$ < $DvtAxisEventManager$$.length;$DvtAxisAutomation$$++) {
        var $DvtAxisConstants$$ = $DvtAxisEventManager$$[$DvtAxisAutomation$$];
        if($DvtAxisConstants$$) {
          var $DvtAxisRenderer$$ = this.$_getLabelCoord$($DvtAxisDefaults$$, this.$getLabelIndex$($DvtAxisConstants$$));
          $DvtAxisConstants$$.$setX$($DvtAxisRenderer$$)
        }
      }
    }
    this.$StartOverflow$ = $DvtAxisObjPeer$$;
    this.$EndOverflow$ = $DvtAxisKeyboardHandler$$
  };
  dvt.$GroupAxisInfo$.prototype.$getLabels$ = function $dvt$$GroupAxisInfo$$$$getLabels$$($DvtAxisObjPeer$$, $DvtAxisKeyboardHandler$$) {
    $DvtAxisKeyboardHandler$$ == $JSCompiler_alias_NULL$$ && ($DvtAxisKeyboardHandler$$ = this.$_numLevels$ - 1);
    this.$_labels$ || this.$_generateLabels$($DvtAxisObjPeer$$);
    return this.$_labels$[$DvtAxisKeyboardHandler$$]
  };
  dvt.$GroupAxisInfo$.prototype.$_getLabelCoord$ = function $dvt$$GroupAxisInfo$$$$_getLabelCoord$$($DvtAxisObjPeer$$, $DvtAxisKeyboardHandler$$) {
    var $DvtAxisEventManager$$ = this.$getStartIndex$($DvtAxisKeyboardHandler$$, $DvtAxisObjPeer$$), $DvtAxisDefaults$$ = this.$getEndIndex$($DvtAxisKeyboardHandler$$, $DvtAxisObjPeer$$);
    if($DvtAxisEventManager$$ == $JSCompiler_alias_NULL$$ || $DvtAxisDefaults$$ == $JSCompiler_alias_NULL$$) {
      return $JSCompiler_alias_NULL$$
    }
    $DvtAxisEventManager$$ < this.$MinValue$ && $DvtAxisDefaults$$ > this.$MinValue$ && ($DvtAxisEventManager$$ = this.$MinValue$);
    $DvtAxisDefaults$$ > this.$MaxValue$ && $DvtAxisEventManager$$ < this.$MaxValue$ && ($DvtAxisDefaults$$ = this.$MaxValue$);
    return this.$getCoordAt$($DvtAxisDefaults$$ ? $DvtAxisEventManager$$ + ($DvtAxisDefaults$$ - $DvtAxisEventManager$$) / 2 : $DvtAxisEventManager$$)
  };
  dvt.$GroupAxisInfo$.prototype.$_generateLabels$ = function $dvt$$GroupAxisInfo$$$$_generateLabels$$($DvtAxisObjPeer$$) {
    var $DvtAxisKeyboardHandler$$ = [];
    this.$_labels$ = [];
    for(var $DvtAxisEventManager$$ = $DvtAxisObjPeer$$.$_stage$, $DvtAxisAutomation$$ = "top" == this.$Position$ || "bottom" == this.$Position$, $DvtAxisConstants$$ = dvt.$Agent$.$isRightToLeft$($DvtAxisObjPeer$$), $DvtAxisRenderer$$ = 1 < this.$_numLevels$, $groupWidth_labelDims$$10$$ = this.$getGroupWidth$(), $availSize$$1$$ = this.$_maxSpace$, $gap$$9$$ = $DvtAxisRenderer$$ ? $DvtAxisDefaults$$.$getGapSize$($DvtAxisObjPeer$$, this.$Options$, this.$Options$.layout[$DvtAxisAutomation$$ ? "hierarchicalLabelGapHeight" : 
    "hierarchicalLabelGapWidth"]) : 0, $rotationEnabled$$ = "auto" == this.$Options$.tickLabel.rotation && $DvtAxisAutomation$$, $tickLabelStyle_wrapping$$ = this.$Options$.tickLabel.style, $tickLabelStyle_wrapping$$ = "normal" == $tickLabelStyle_wrapping$$.$getStyle$(dvt.$CSSStyle$.$WHITE_SPACE$) && "tangential" != this.$Position$ && $groupWidth_labelDims$$10$$ > dvt.$TextUtils$.$getTextStringHeight$($DvtAxisObjPeer$$, $tickLabelStyle_wrapping$$), $j$$36_label$$28$$, $firstLabel_firstLabelDim$$, 
    $lastLabel_lastLabelDim_maxLabelDims$$, $cssStyle$$26_totalSpace$$1$$, $coord$$9_text$$45$$, $level$$23_startOverflow$$1$$ = 0;$level$$23_startOverflow$$1$$ < this.$_numLevels$;$level$$23_startOverflow$$1$$++) {
      for(var $dims$$29_levels$$1$$ = this.$_levelsArray$[$level$$23_startOverflow$$1$$], $i$$229$$ = 0;$i$$229$$ < $dims$$29_levels$$1$$.length;$i$$229$$++) {
        if($dims$$29_levels$$1$$[$i$$229$$]) {
          if($j$$36_label$$28$$ = this.$getLabelAt$($i$$229$$, $level$$23_startOverflow$$1$$), "" == $j$$36_label$$28$$ || !$j$$36_label$$28$$ && 0 != $j$$36_label$$28$$) {
            $DvtAxisKeyboardHandler$$.push($JSCompiler_alias_NULL$$)
          }else {
            if($coord$$9_text$$45$$ = this.$_getLabelCoord$($level$$23_startOverflow$$1$$, $i$$229$$), $coord$$9_text$$45$$ != $JSCompiler_alias_NULL$$) {
              $cssStyle$$26_totalSpace$$1$$ = this.$getLabelStyleAt$($i$$229$$, $level$$23_startOverflow$$1$$);
              var $bMultiline$$1$$ = $tickLabelStyle_wrapping$$ && isNaN($j$$36_label$$28$$) && 0 <= $j$$36_label$$28$$.indexOf(" ");
              $coord$$9_text$$45$$ = this.$CreateLabel$($DvtAxisObjPeer$$, $j$$36_label$$28$$, $coord$$9_text$$45$$, $cssStyle$$26_totalSpace$$1$$, $bMultiline$$1$$);
              var $groupSpan$$1$$ = $groupWidth_labelDims$$10$$ * (this.$getEndIndex$($i$$229$$, $level$$23_startOverflow$$1$$) - this.$getStartIndex$($i$$229$$, $level$$23_startOverflow$$1$$) + 1);
              $bMultiline$$1$$ && this.$_isTextWrapNeeded$($DvtAxisObjPeer$$, $j$$36_label$$28$$, $cssStyle$$26_totalSpace$$1$$, $rotationEnabled$$, $DvtAxisAutomation$$ ? $groupSpan$$1$$ : $availSize$$1$$) ? $DvtAxisAutomation$$ ? $coord$$9_text$$45$$.$wrapText$($groupSpan$$1$$, $availSize$$1$$, 1, $JSCompiler_alias_TRUE$$) : $coord$$9_text$$45$$.$wrapText$($availSize$$1$$, $coord$$9_text$$45$$.$getLineHeight$() * this.$_maxLineWrap$, 1, $JSCompiler_alias_FALSE$$) : $bMultiline$$1$$ && !$DvtAxisAutomation$$ && 
              $coord$$9_text$$45$$.$setWrapEnabled$($JSCompiler_alias_FALSE$$);
              $coord$$9_text$$45$$.$_index$ = $i$$229$$;
              $DvtAxisKeyboardHandler$$.push($coord$$9_text$$45$$);
              !$firstLabel_firstLabelDim$$ && 0 == $level$$23_startOverflow$$1$$ && ($firstLabel_firstLabelDim$$ = $coord$$9_text$$45$$);
              0 == $level$$23_startOverflow$$1$$ && ($lastLabel_lastLabelDim_maxLabelDims$$ = $coord$$9_text$$45$$)
            }else {
              $DvtAxisKeyboardHandler$$.push($JSCompiler_alias_NULL$$)
            }
          }
        }else {
          $DvtAxisKeyboardHandler$$.push($JSCompiler_alias_NULL$$)
        }
      }
      if($tickLabelStyle_wrapping$$ && $DvtAxisRenderer$$) {
        for($j$$36_label$$28$$ = $cssStyle$$26_totalSpace$$1$$ = 0;$j$$36_label$$28$$ < $DvtAxisKeyboardHandler$$.length;$j$$36_label$$28$$++) {
          $DvtAxisKeyboardHandler$$[$j$$36_label$$28$$] && ($dims$$29_levels$$1$$ = $DvtAxisKeyboardHandler$$[$j$$36_label$$28$$].$measureDimensions$(), $cssStyle$$26_totalSpace$$1$$ = Math.max($cssStyle$$26_totalSpace$$1$$, $DvtAxisAutomation$$ ? $dims$$29_levels$$1$$.$h$ : $dims$$29_levels$$1$$.$w$))
        }
        $availSize$$1$$ -= $cssStyle$$26_totalSpace$$1$$ + $gap$$9$$
      }
      this.$_labels$.push($DvtAxisKeyboardHandler$$);
      $DvtAxisKeyboardHandler$$ = []
    }
    $DvtAxisKeyboardHandler$$ = this.$_labels$[this.$_numLevels$ - 1];
    $groupWidth_labelDims$$10$$ = [];
    if($firstLabel_firstLabelDim$$) {
      if("tangential" == this.$Position$) {
        $groupWidth_labelDims$$10$$ = this.$GetLabelDims$($DvtAxisKeyboardHandler$$, $DvtAxisEventManager$$), this.$_labels$[0] = this.$SkipTangentialLabels$($DvtAxisKeyboardHandler$$, $groupWidth_labelDims$$10$$)
      }else {
        $firstLabel_firstLabelDim$$ = $firstLabel_firstLabelDim$$.$measureDimensions$();
        $DvtAxisAutomation$$ && (this.$Options$._startOverflow != $JSCompiler_alias_NULL$$ && this.$Options$._endOverflow != $JSCompiler_alias_NULL$$ ? ($level$$23_startOverflow$$1$$ = this.$Options$._startOverflow, $DvtAxisConstants$$ = this.$Options$._endOverflow) : ($lastLabel_lastLabelDim_maxLabelDims$$ = $lastLabel_lastLabelDim_maxLabelDims$$.$measureDimensions$(), $level$$23_startOverflow$$1$$ = $DvtAxisConstants$$ ? $firstLabel_firstLabelDim$$.$w$ + $firstLabel_firstLabelDim$$.x - this.$StartCoord$ : 
        this.$StartCoord$ - $firstLabel_firstLabelDim$$.x, $DvtAxisConstants$$ = $DvtAxisConstants$$ ? this.$EndCoord$ - $lastLabel_lastLabelDim_maxLabelDims$$.x : $lastLabel_lastLabelDim_maxLabelDims$$.$w$ + $lastLabel_lastLabelDim_maxLabelDims$$.x - this.$EndCoord$), ($level$$23_startOverflow$$1$$ > this.$_startBuffer$ || $DvtAxisConstants$$ > this.$_endBuffer$) && this.$_setOverflow$($level$$23_startOverflow$$1$$, $DvtAxisConstants$$, $DvtAxisKeyboardHandler$$));
        for($level$$23_startOverflow$$1$$ = 0;$level$$23_startOverflow$$1$$ < this.$_numLevels$;$level$$23_startOverflow$$1$$++) {
          if($DvtAxisKeyboardHandler$$ = this.$_labels$[$level$$23_startOverflow$$1$$], $DvtAxisConstants$$ = this.$GuessLabelDims$($DvtAxisKeyboardHandler$$, $DvtAxisEventManager$$, 0.3, $level$$23_startOverflow$$1$$), $lastLabel_lastLabelDim_maxLabelDims$$ = this.$GuessLabelDims$($DvtAxisKeyboardHandler$$, $DvtAxisEventManager$$, $JSCompiler_alias_NULL$$, $level$$23_startOverflow$$1$$), this.$IsOverlapping$($lastLabel_lastLabelDim_maxLabelDims$$, 0) || (this.$_labels$[$level$$23_startOverflow$$1$$] = 
          $DvtAxisKeyboardHandler$$), $DvtAxisAutomation$$) {
            if($rotationEnabled$$) {
              if(this.$IsOverlapping$($DvtAxisConstants$$, 0)) {
                this.$_labels$[$level$$23_startOverflow$$1$$] = this.$_rotateLabels$($DvtAxisKeyboardHandler$$, $DvtAxisEventManager$$, $firstLabel_firstLabelDim$$.$h$ / 2, $level$$23_startOverflow$$1$$)
              }else {
                if($groupWidth_labelDims$$10$$ = this.$GetLabelDims$($DvtAxisKeyboardHandler$$, $DvtAxisEventManager$$), this.$IsOverlapping$($groupWidth_labelDims$$10$$, 0)) {
                  this.$_labels$[$level$$23_startOverflow$$1$$] = this.$_rotateLabels$($DvtAxisKeyboardHandler$$, $DvtAxisEventManager$$, $firstLabel_firstLabelDim$$.$h$ / 2, $level$$23_startOverflow$$1$$)
                }else {
                  if(this.$_labels$[$level$$23_startOverflow$$1$$] = $DvtAxisKeyboardHandler$$, $DvtAxisRenderer$$) {
                    for($j$$36_label$$28$$ = $DvtAxisKeyboardHandler$$ = 0;$j$$36_label$$28$$ < $groupWidth_labelDims$$10$$.length;$j$$36_label$$28$$++) {
                      $groupWidth_labelDims$$10$$[$j$$36_label$$28$$] && ($DvtAxisKeyboardHandler$$ = Math.max($DvtAxisKeyboardHandler$$, $groupWidth_labelDims$$10$$[$j$$36_label$$28$$].$h$))
                    }
                    this.$_maxSpace$ -= $DvtAxisKeyboardHandler$$ + $gap$$9$$
                  }
                }
              }
            }else {
              $groupWidth_labelDims$$10$$ = this.$GetLabelDims$($DvtAxisKeyboardHandler$$, $DvtAxisEventManager$$), this.$_labels$[$level$$23_startOverflow$$1$$] = this.$SkipLabels$($DvtAxisKeyboardHandler$$, $groupWidth_labelDims$$10$$)
            }
          }else {
            $tickLabelStyle_wrapping$$ && this.$_sanitizeWrappedText$($DvtAxisObjPeer$$, $lastLabel_lastLabelDim_maxLabelDims$$, $DvtAxisKeyboardHandler$$, $JSCompiler_alias_FALSE$$, $DvtAxisRenderer$$) && ($lastLabel_lastLabelDim_maxLabelDims$$ = this.$GuessLabelDims$($DvtAxisKeyboardHandler$$, $DvtAxisEventManager$$, $JSCompiler_alias_NULL$$, $level$$23_startOverflow$$1$$)), this.$_labels$[$level$$23_startOverflow$$1$$] = this.$SkipLabels$($DvtAxisKeyboardHandler$$, $lastLabel_lastLabelDim_maxLabelDims$$)
          }
        }
      }
    }
  };
  dvt.$GroupAxisInfo$.prototype.$getMajorTickCoords$ = function $dvt$$GroupAxisInfo$$$$getMajorTickCoords$$() {
    for(var $DvtAxisObjPeer$$ = [], $DvtAxisKeyboardHandler$$, $DvtAxisEventManager$$ = "tangential" == this.$Position$ ? this.$getGroupCount$() : this.$getGroupCount$() - 1, $DvtAxisDefaults$$ = 0;$DvtAxisDefaults$$ < this.$_levelsArray$[0].length;$DvtAxisDefaults$$++) {
      if(this.$_levelsArray$[0][$DvtAxisDefaults$$]) {
        $DvtAxisKeyboardHandler$$ = this.$getStartIndex$($DvtAxisDefaults$$, 0);
        var $DvtAxisAutomation$$ = this.$getEndIndex$($DvtAxisDefaults$$, 0);
        $DvtAxisKeyboardHandler$$ = this.$_renderGridAtLabels$ ? this.$getCoordAt$($DvtAxisKeyboardHandler$$ + 0.5 * ($DvtAxisAutomation$$ - $DvtAxisKeyboardHandler$$)) : $DvtAxisAutomation$$ + 0.5 < $DvtAxisEventManager$$ ? this.$getCoordAt$($DvtAxisAutomation$$ + 0.5) : $JSCompiler_alias_NULL$$;
        $DvtAxisKeyboardHandler$$ != $JSCompiler_alias_NULL$$ && $DvtAxisObjPeer$$.push($DvtAxisKeyboardHandler$$)
      }
    }
    return $DvtAxisObjPeer$$
  };
  dvt.$GroupAxisInfo$.prototype.$getMinorTickCoords$ = function $dvt$$GroupAxisInfo$$$$getMinorTickCoords$$() {
    var $DvtAxisObjPeer$$ = [], $DvtAxisKeyboardHandler$$;
    if(!this.$_levelsArray$[1]) {
      return $DvtAxisObjPeer$$
    }
    for(var $DvtAxisEventManager$$ = 0;$DvtAxisEventManager$$ < this.$_levelsArray$[1].length;$DvtAxisEventManager$$++) {
      if(this.$_levelsArray$[1][$DvtAxisEventManager$$]) {
        $DvtAxisKeyboardHandler$$ = this.$getStartIndex$($DvtAxisEventManager$$, 1);
        var $DvtAxisDefaults$$ = this.$getEndIndex$($DvtAxisEventManager$$, 1);
        $DvtAxisKeyboardHandler$$ = this.$_renderGridAtLabels$ ? this.$getCoordAt$($DvtAxisKeyboardHandler$$ + 0.5 * ($DvtAxisDefaults$$ - $DvtAxisKeyboardHandler$$)) : $DvtAxisDefaults$$ + 0.5 < this.$getGroupCount$() - 1 ? this.$getCoordAt$($DvtAxisDefaults$$ + 0.5) : $JSCompiler_alias_NULL$$;
        $DvtAxisKeyboardHandler$$ != $JSCompiler_alias_NULL$$ && $DvtAxisObjPeer$$.push($DvtAxisKeyboardHandler$$)
      }
    }
    return $DvtAxisObjPeer$$
  };
  dvt.$GroupAxisInfo$.prototype.$getUnboundedValueAt$ = function $dvt$$GroupAxisInfo$$$$getUnboundedValueAt$$($DvtAxisObjPeer$$) {
    if($DvtAxisObjPeer$$ == $JSCompiler_alias_NULL$$) {
      return $JSCompiler_alias_NULL$$
    }
    if(this.$_groupWidthRatios$) {
      for(var $DvtAxisKeyboardHandler$$ = this.$_borderCoords$.length, $DvtAxisEventManager$$ = 0;$DvtAxisEventManager$$ < this.$_borderCoords$.length;$DvtAxisEventManager$$++) {
        if($DvtAxisObjPeer$$ <= this.$_borderCoords$[$DvtAxisEventManager$$]) {
          $DvtAxisKeyboardHandler$$ = $DvtAxisEventManager$$;
          break
        }
      }
      return 0 == $DvtAxisKeyboardHandler$$ ? this.$_borderValues$[0] - (this.$_borderCoords$[0] - $DvtAxisObjPeer$$) / this.$_groupWidths$[0] : this.$_borderValues$[$DvtAxisKeyboardHandler$$ - 1] + ($DvtAxisObjPeer$$ - this.$_borderCoords$[$DvtAxisKeyboardHandler$$ - 1]) / this.$_groupWidths$[$DvtAxisKeyboardHandler$$]
    }
    return this.$MinValue$ + ($DvtAxisObjPeer$$ - this.$StartCoord$) / ((this.$EndCoord$ - this.$StartCoord$) / (this.$MaxValue$ - this.$MinValue$))
  };
  dvt.$GroupAxisInfo$.prototype.$getUnboundedCoordAt$ = function $dvt$$GroupAxisInfo$$$$getUnboundedCoordAt$$($DvtAxisObjPeer$$) {
    if($DvtAxisObjPeer$$ == $JSCompiler_alias_NULL$$) {
      return $JSCompiler_alias_NULL$$
    }
    if(this.$_groupWidthRatios$) {
      for(var $DvtAxisKeyboardHandler$$ = this.$_borderValues$.length, $DvtAxisEventManager$$ = 0;$DvtAxisEventManager$$ < this.$_borderValues$.length;$DvtAxisEventManager$$++) {
        if($DvtAxisObjPeer$$ <= this.$_borderValues$[$DvtAxisEventManager$$]) {
          $DvtAxisKeyboardHandler$$ = $DvtAxisEventManager$$;
          break
        }
      }
      return 0 == $DvtAxisKeyboardHandler$$ ? this.$_borderCoords$[0] - this.$_groupWidths$[0] * (this.$_borderValues$[0] - $DvtAxisObjPeer$$) : this.$_borderCoords$[$DvtAxisKeyboardHandler$$ - 1] + this.$_groupWidths$[$DvtAxisKeyboardHandler$$] * ($DvtAxisObjPeer$$ - this.$_borderValues$[$DvtAxisKeyboardHandler$$ - 1])
    }
    return this.$StartCoord$ + ($DvtAxisObjPeer$$ - this.$MinValue$) * ((this.$EndCoord$ - this.$StartCoord$) / (this.$MaxValue$ - this.$MinValue$))
  };
  dvt.$GroupAxisInfo$.prototype.$getLabelAt$ = function $dvt$$GroupAxisInfo$$$$getLabelAt$$($DvtAxisObjPeer$$, $DvtAxisKeyboardHandler$$) {
    $DvtAxisKeyboardHandler$$ == $JSCompiler_alias_NULL$$ && ($DvtAxisKeyboardHandler$$ = this.$_numLevels$ - 1);
    $DvtAxisObjPeer$$ = Math.round($DvtAxisObjPeer$$);
    if(0 > $DvtAxisObjPeer$$) {
      return $JSCompiler_alias_NULL$$
    }
    var $DvtAxisEventManager$$ = this.$_levelsArray$[$DvtAxisKeyboardHandler$$] && this.$_levelsArray$[$DvtAxisKeyboardHandler$$][$DvtAxisObjPeer$$] ? this.$_levelsArray$[$DvtAxisKeyboardHandler$$][$DvtAxisObjPeer$$].item : $JSCompiler_alias_NULL$$;
    $DvtAxisEventManager$$ && ($DvtAxisEventManager$$.name ? $DvtAxisEventManager$$ = $DvtAxisEventManager$$.name : $DvtAxisEventManager$$.id != $JSCompiler_alias_NULL$$ && ($DvtAxisEventManager$$ = ""));
    return $DvtAxisEventManager$$
  };
  dvt.$GroupAxisInfo$.prototype.$getGroupAt$ = function $dvt$$GroupAxisInfo$$$$getGroupAt$$($DvtAxisObjPeer$$, $DvtAxisKeyboardHandler$$) {
    $DvtAxisKeyboardHandler$$ == $JSCompiler_alias_NULL$$ && ($DvtAxisKeyboardHandler$$ = this.$_numLevels$ - 1);
    $DvtAxisObjPeer$$ = Math.round($DvtAxisObjPeer$$);
    if(0 > $DvtAxisObjPeer$$) {
      return $JSCompiler_alias_NULL$$
    }
    var $DvtAxisEventManager$$ = this.$_levelsArray$[$DvtAxisKeyboardHandler$$] && this.$_levelsArray$[$DvtAxisKeyboardHandler$$][$DvtAxisObjPeer$$] ? this.$_levelsArray$[$DvtAxisKeyboardHandler$$][$DvtAxisObjPeer$$].item : $JSCompiler_alias_NULL$$;
    if($DvtAxisEventManager$$) {
      if($DvtAxisEventManager$$.id) {
        return $DvtAxisEventManager$$.id
      }
      if($DvtAxisEventManager$$.name || "" == $DvtAxisEventManager$$.name) {
        return $DvtAxisEventManager$$.name
      }
    }
    return $DvtAxisEventManager$$
  };
  dvt.$GroupAxisInfo$.prototype.$getLabelStyleAt$ = function $dvt$$GroupAxisInfo$$$$getLabelStyleAt$$($DvtAxisObjPeer$$, $DvtAxisKeyboardHandler$$) {
    var $DvtAxisEventManager$$ = this.$_getGroupAttribute$($DvtAxisObjPeer$$, $DvtAxisKeyboardHandler$$, "labelStyle");
    return $DvtAxisEventManager$$ ? ($DvtAxisEventManager$$ = new dvt.$CSSStyle$($DvtAxisEventManager$$), $DvtAxisEventManager$$.$getStyle$("font-size") || $DvtAxisEventManager$$.$setStyle$("font-size", this.$Options$.tickLabel.style.$getStyle$("font-size")), $DvtAxisEventManager$$) : $JSCompiler_alias_NULL$$
  };
  dvt.$GroupAxisInfo$.prototype.$getDatatip$ = function $dvt$$GroupAxisInfo$$$$getDatatip$$($DvtAxisObjPeer$$, $DvtAxisKeyboardHandler$$) {
    return this.$_getGroupAttribute$($DvtAxisObjPeer$$, $DvtAxisKeyboardHandler$$, "shortDesc")
  };
  dvt.$GroupAxisInfo$.prototype.$getAction$ = function $dvt$$GroupAxisInfo$$$$getAction$$($DvtAxisObjPeer$$, $DvtAxisKeyboardHandler$$) {
    return this.$_getGroupAttribute$($DvtAxisObjPeer$$, $DvtAxisKeyboardHandler$$, "action")
  };
  dvt.$GroupAxisInfo$.prototype.$isDrillable$ = function $dvt$$GroupAxisInfo$$$$isDrillable$$($DvtAxisObjPeer$$, $DvtAxisKeyboardHandler$$) {
    var $DvtAxisEventManager$$ = this.$_getGroupAttribute$($DvtAxisObjPeer$$, $DvtAxisKeyboardHandler$$, "drilling");
    return"on" == $DvtAxisEventManager$$ ? $JSCompiler_alias_TRUE$$ : "off" == $DvtAxisEventManager$$ ? $JSCompiler_alias_FALSE$$ : "on" == this.$_drilling$ || "groupsOnly" == this.$_drilling$
  };
  dvt.$GroupAxisInfo$.prototype.$getGroup$ = function $dvt$$GroupAxisInfo$$$$getGroup$$($DvtAxisObjPeer$$, $DvtAxisKeyboardHandler$$) {
    if(0 > $DvtAxisObjPeer$$ || $DvtAxisObjPeer$$ > this.$getGroupCount$() - 1) {
      return $JSCompiler_alias_NULL$$
    }
    var $DvtAxisEventManager$$ = [];
    $DvtAxisKeyboardHandler$$ == $JSCompiler_alias_NULL$$ && ($DvtAxisKeyboardHandler$$ = this.$_numLevels$ - 1);
    for(var $DvtAxisDefaults$$ = this.$getStartIndex$($DvtAxisObjPeer$$, $DvtAxisKeyboardHandler$$), $DvtAxisAutomation$$ = 0;$DvtAxisAutomation$$ <= $DvtAxisKeyboardHandler$$;$DvtAxisAutomation$$++) {
      for(var $DvtAxisConstants$$ = this.$_levelsArray$[$DvtAxisAutomation$$], $DvtAxisRenderer$$ = 0;$DvtAxisRenderer$$ < $DvtAxisConstants$$.length;$DvtAxisRenderer$$++) {
        this.$getStartIndex$($DvtAxisRenderer$$, $DvtAxisAutomation$$) <= $DvtAxisDefaults$$ && this.$getEndIndex$($DvtAxisRenderer$$, $DvtAxisAutomation$$) >= $DvtAxisDefaults$$ && $DvtAxisEventManager$$.push(this.$getGroupAt$($DvtAxisRenderer$$, $DvtAxisAutomation$$))
      }
    }
    return 0 < $DvtAxisEventManager$$.length ? 1 == $DvtAxisEventManager$$.length ? $DvtAxisEventManager$$[0] : $DvtAxisEventManager$$ : $JSCompiler_alias_NULL$$
  };
  dvt.$GroupAxisInfo$.prototype.$getGroupIndex$ = function $dvt$$GroupAxisInfo$$$$getGroupIndex$$($DvtAxisObjPeer$$) {
    if($DvtAxisObjPeer$$ == $JSCompiler_alias_NULL$$) {
      return-1
    }
    for(var $DvtAxisKeyboardHandler$$ = -1, $DvtAxisEventManager$$ = 0;$DvtAxisEventManager$$ < this.$_groupCount$;$DvtAxisEventManager$$++) {
      var $DvtAxisDefaults$$ = this.$getGroup$($DvtAxisEventManager$$);
      if($DvtAxisObjPeer$$ instanceof Array && $DvtAxisDefaults$$ instanceof Array ? dvt.$ArrayUtils$.$equals$($DvtAxisObjPeer$$, $DvtAxisDefaults$$) : $DvtAxisObjPeer$$ == $DvtAxisDefaults$$) {
        $DvtAxisKeyboardHandler$$ = $DvtAxisEventManager$$;
        break
      }
    }
    return $DvtAxisKeyboardHandler$$
  };
  dvt.$GroupAxisInfo$.prototype.$getMinimumExtent$ = $JSCompiler_returnArg$$(1);
  dvt.$GroupAxisInfo$.prototype.$getGroupWidth$ = function $dvt$$GroupAxisInfo$$$$getGroupWidth$$() {
    return Math.abs(this.$EndCoord$ - this.$StartCoord$) / Math.abs(this.$MaxValue$ - this.$MinValue$)
  };
  dvt.$GroupAxisInfo$.prototype.$getGroupCount$ = $JSCompiler_get$$("$_groupCount$");
  dvt.$GroupAxisInfo$.prototype.$getNumLevels$ = $JSCompiler_get$$("$_numLevels$");
  dvt.$GroupAxisInfo$.prototype.$_generateLevelsArray$ = function $dvt$$GroupAxisInfo$$$$_generateLevelsArray$$($DvtAxisObjPeer$$, $DvtAxisKeyboardHandler$$, $DvtAxisEventManager$$, $DvtAxisDefaults$$) {
    for(var $DvtAxisAutomation$$ = 0;$DvtAxisAutomation$$ < $DvtAxisObjPeer$$.length;$DvtAxisAutomation$$++) {
      if($DvtAxisEventManager$$[$DvtAxisKeyboardHandler$$] || ($DvtAxisEventManager$$[$DvtAxisKeyboardHandler$$] = []), $DvtAxisEventManager$$[$DvtAxisKeyboardHandler$$].push({item:$DvtAxisObjPeer$$[$DvtAxisAutomation$$], start:$DvtAxisDefaults$$, end:$DvtAxisDefaults$$, position:$DvtAxisAutomation$$}), $DvtAxisObjPeer$$[$DvtAxisAutomation$$] && $DvtAxisObjPeer$$[$DvtAxisAutomation$$].groups) {
        $DvtAxisDefaults$$ = $DvtAxisEventManager$$[$DvtAxisKeyboardHandler$$].length - 1;
        var $DvtAxisConstants$$ = this.$_generateLevelsArray$($DvtAxisObjPeer$$[$DvtAxisAutomation$$].groups, $DvtAxisKeyboardHandler$$ + 1, $DvtAxisEventManager$$, $DvtAxisEventManager$$[$DvtAxisKeyboardHandler$$][$DvtAxisDefaults$$].start);
        $DvtAxisEventManager$$[$DvtAxisKeyboardHandler$$][$DvtAxisDefaults$$].end = $DvtAxisConstants$$ - 1;
        $DvtAxisDefaults$$ = $DvtAxisConstants$$
      }else {
        $DvtAxisDefaults$$++
      }
    }
    return $DvtAxisDefaults$$
  };
  dvt.$GroupAxisInfo$.prototype.$_getGroupAttribute$ = function $dvt$$GroupAxisInfo$$$$_getGroupAttribute$$($DvtAxisObjPeer$$, $DvtAxisKeyboardHandler$$, $DvtAxisEventManager$$) {
    $DvtAxisKeyboardHandler$$ == $JSCompiler_alias_NULL$$ && ($DvtAxisKeyboardHandler$$ = this.$_numLevels$ - 1);
    return($DvtAxisObjPeer$$ = this.$_levelsArray$[$DvtAxisKeyboardHandler$$] && this.$_levelsArray$[$DvtAxisKeyboardHandler$$][$DvtAxisObjPeer$$] ? this.$_levelsArray$[$DvtAxisKeyboardHandler$$][$DvtAxisObjPeer$$].item : $JSCompiler_alias_NULL$$) ? $DvtAxisObjPeer$$[$DvtAxisEventManager$$] : $JSCompiler_alias_NULL$$
  };
  dvt.$GroupAxisInfo$.prototype.$getStartIndex$ = function $dvt$$GroupAxisInfo$$$$getStartIndex$$($DvtAxisObjPeer$$, $DvtAxisKeyboardHandler$$) {
    $DvtAxisKeyboardHandler$$ == $JSCompiler_alias_NULL$$ && ($DvtAxisKeyboardHandler$$ = this.$_numLevels$ - 1);
    return this.$_levelsArray$[$DvtAxisKeyboardHandler$$] && this.$_levelsArray$[$DvtAxisKeyboardHandler$$][$DvtAxisObjPeer$$] ? this.$_levelsArray$[$DvtAxisKeyboardHandler$$][$DvtAxisObjPeer$$].start : $JSCompiler_alias_NULL$$
  };
  dvt.$GroupAxisInfo$.prototype.$getEndIndex$ = function $dvt$$GroupAxisInfo$$$$getEndIndex$$($DvtAxisObjPeer$$, $DvtAxisKeyboardHandler$$) {
    $DvtAxisKeyboardHandler$$ == $JSCompiler_alias_NULL$$ && ($DvtAxisKeyboardHandler$$ = this.$_numLevels$ - 1);
    return this.$_levelsArray$[$DvtAxisKeyboardHandler$$] && this.$_levelsArray$[$DvtAxisKeyboardHandler$$][$DvtAxisObjPeer$$] ? this.$_levelsArray$[$DvtAxisKeyboardHandler$$][$DvtAxisObjPeer$$].end : $JSCompiler_alias_NULL$$
  };
  dvt.$GroupAxisInfo$.prototype.$getPosition$ = function $dvt$$GroupAxisInfo$$$$getPosition$$($DvtAxisObjPeer$$, $DvtAxisKeyboardHandler$$) {
    $DvtAxisKeyboardHandler$$ == $JSCompiler_alias_NULL$$ && ($DvtAxisKeyboardHandler$$ = this.$_numLevels$ - 1);
    return this.$_levelsArray$[$DvtAxisKeyboardHandler$$] && this.$_levelsArray$[$DvtAxisKeyboardHandler$$][$DvtAxisObjPeer$$] ? this.$_levelsArray$[$DvtAxisKeyboardHandler$$][$DvtAxisObjPeer$$].position : $JSCompiler_alias_NULL$$
  };
  dvt.$GroupAxisInfo$.prototype.$setLastRenderedLevel$ = $JSCompiler_set$$("$_lastRenderedLevel$");
  dvt.$GroupAxisInfo$.prototype.$getLabelIndex$ = function $dvt$$GroupAxisInfo$$$$getLabelIndex$$($DvtAxisObjPeer$$) {
    return 0 <= $DvtAxisObjPeer$$.$_index$ ? $DvtAxisObjPeer$$.$_index$ : $JSCompiler_alias_NULL$$
  };
  dvt.$GroupAxisInfo$.prototype.$_isTextWrapNeeded$ = function $dvt$$GroupAxisInfo$$$$_isTextWrapNeeded$$($DvtAxisObjPeer$$, $DvtAxisKeyboardHandler$$, $DvtAxisEventManager$$, $DvtAxisDefaults$$, $DvtAxisAutomation$$) {
    $DvtAxisObjPeer$$ = dvt.$TextUtils$.$getTextStringWidth$($DvtAxisObjPeer$$, $DvtAxisKeyboardHandler$$, $DvtAxisEventManager$$);
    return $DvtAxisObjPeer$$ >= $DvtAxisAutomation$$ && ($DvtAxisObjPeer$$ / this.$_maxLineWrap$ < $DvtAxisAutomation$$ || !$DvtAxisDefaults$$) ? $JSCompiler_alias_TRUE$$ : $JSCompiler_alias_FALSE$$
  };
  dvt.$Obj$.$createSubclass$($DvtAxisObjPeer$$, dvt.$SimpleObjPeer$);
  $DvtAxisObjPeer$$.prototype.Init = function $$DvtAxisObjPeer$$$$Init$($DvtAxisKeyboardHandler$$, $DvtAxisEventManager$$, $DvtAxisDefaults$$, $DvtAxisAutomation$$, $DvtAxisConstants$$, $DvtAxisRenderer$$, $datatip$$4$$, $params$$8$$) {
    $DvtAxisObjPeer$$.$superclass$.Init.call(this, $DvtAxisRenderer$$, $datatip$$4$$, $JSCompiler_alias_NULL$$, $params$$8$$);
    this.$_axis$ = $DvtAxisKeyboardHandler$$;
    this.$_label$ = $DvtAxisEventManager$$;
    this.$_group$ = $DvtAxisDefaults$$;
    this.$_action$ = $DvtAxisAutomation$$;
    this.$_drillable$ = $DvtAxisConstants$$;
    (this.$_action$ || this.$_drillable$) && $DvtAxisEventManager$$.setCursor("pointer");
    $DvtAxisKeyboardHandler$$.$__registerObject$(this)
  };
  $DvtAxisObjPeer$$.prototype.$getLabel$ = $JSCompiler_get$$("$_label$");
  $DvtAxisObjPeer$$.prototype.getId = $JSCompiler_get$$("$_group$");
  $DvtAxisObjPeer$$.prototype.$getAction$ = $JSCompiler_get$$("$_action$");
  $DvtAxisObjPeer$$.prototype.$isDrillable$ = $JSCompiler_get$$("$_drillable$");
  $DvtAxisObjPeer$$.prototype.$getGroup$ = $JSCompiler_get$$("$_group$");
  $DvtAxisObjPeer$$.prototype.$getNextNavigable$ = function $$DvtAxisObjPeer$$$$$getNextNavigable$$($DvtAxisObjPeer$$) {
    return $DvtAxisObjPeer$$.type == dvt.$MouseEvent$.$CLICK$ ? this : dvt.$KeyboardHandler$.$getNextNavigable$(this, $DvtAxisObjPeer$$, this.$_axis$.$_navigablePeers$)
  };
  $DvtAxisObjPeer$$.prototype.$getKeyboardBoundingBox$ = function $$DvtAxisObjPeer$$$$$getKeyboardBoundingBox$$($DvtAxisObjPeer$$) {
    return this.$_label$ ? this.$_label$.$getDimensions$($DvtAxisObjPeer$$) : new dvt.$Rectangle$(0, 0, 0, 0)
  };
  $DvtAxisObjPeer$$.prototype.$getDisplayable$ = $JSCompiler_get$$("$_label$");
  $DvtAxisObjPeer$$.prototype.$getTargetElem$ = function $$DvtAxisObjPeer$$$$$getTargetElem$$() {
    return this.$_label$ ? this.$_label$.$getElem$() : $JSCompiler_alias_NULL$$
  };
  $DvtAxisObjPeer$$.prototype.$showKeyboardFocusEffect$ = function $$DvtAxisObjPeer$$$$$showKeyboardFocusEffect$$() {
    this.$_isShowingKeyboardFocusEffect$ = $JSCompiler_alias_TRUE$$;
    if(this.$_label$) {
      var $DvtAxisObjPeer$$ = this.$getKeyboardBoundingBox$();
      this.$_overlayRect$ = new dvt.$Rect$(this.$_axis$.$getCtx$(), $DvtAxisObjPeer$$.x, $DvtAxisObjPeer$$.y, $DvtAxisObjPeer$$.$w$, $DvtAxisObjPeer$$.$h$);
      this.$_overlayRect$.$setSolidStroke$(dvt.$Agent$.$getFocusColor$());
      this.$_overlayRect$.$setInvisibleFill$();
      this.$_axis$.$addChild$(this.$_overlayRect$)
    }
  };
  $DvtAxisObjPeer$$.prototype.$hideKeyboardFocusEffect$ = function $$DvtAxisObjPeer$$$$$hideKeyboardFocusEffect$$() {
    this.$_isShowingKeyboardFocusEffect$ = $JSCompiler_alias_FALSE$$;
    this.$_label$ && (this.$_axis$.removeChild(this.$_overlayRect$), this.$_overlayRect$ = $JSCompiler_alias_NULL$$)
  };
  $DvtAxisObjPeer$$.prototype.$isShowingKeyboardFocusEffect$ = $JSCompiler_get$$("$_isShowingKeyboardFocusEffect$");
  $DvtAxisObjPeer$$.prototype.$getAriaLabel$ = function $$DvtAxisObjPeer$$$$$getAriaLabel$$() {
    var $DvtAxisObjPeer$$;
    this.$isDrillable$() && ($DvtAxisObjPeer$$ = [dvt.$Bundle$.$getTranslation$(this.$_axis$.$getOptions$(), "stateDrillable", dvt.$Bundle$.$UTIL_PREFIX$, "STATE_DRILLABLE")]);
    if(this.$getDatatip$() != $JSCompiler_alias_NULL$$) {
      return dvt.$Displayable$.$generateAriaLabel$(this.$getDatatip$(), $DvtAxisObjPeer$$)
    }
    if($DvtAxisObjPeer$$ != $JSCompiler_alias_NULL$$) {
      return dvt.$Displayable$.$generateAriaLabel$(this.$getLabel$().$getTextString$(), $DvtAxisObjPeer$$)
    }
  };
  dvt.$LinearScaleAxisValueFormatter$ = function $dvt$$LinearScaleAxisValueFormatter$$($DvtAxisObjPeer$$, $DvtAxisKeyboardHandler$$, $DvtAxisEventManager$$, $DvtAxisDefaults$$, $DvtAxisAutomation$$, $DvtAxisConstants$$) {
    this.Init($DvtAxisObjPeer$$, $DvtAxisKeyboardHandler$$, $DvtAxisEventManager$$, $DvtAxisDefaults$$, $DvtAxisAutomation$$, $DvtAxisConstants$$)
  };
  dvt.$Obj$.$createSubclass$(dvt.$LinearScaleAxisValueFormatter$, dvt.$Obj$);
  dvt.$LinearScaleAxisValueFormatter$.$SCALE_NONE$ = "none";
  dvt.$LinearScaleAxisValueFormatter$.$SCALE_AUTO$ = "auto";
  dvt.$LinearScaleAxisValueFormatter$.$SCALE_THOUSAND$ = "thousand";
  dvt.$LinearScaleAxisValueFormatter$.$SCALE_MILLION$ = "million";
  dvt.$LinearScaleAxisValueFormatter$.$SCALE_BILLION$ = "billion";
  dvt.$LinearScaleAxisValueFormatter$.$SCALE_TRILLION$ = "trillion";
  dvt.$LinearScaleAxisValueFormatter$.$SCALE_QUADRILLION$ = "quadrillion";
  dvt.$LinearScaleAxisValueFormatter$.$SCALING_FACTOR_DIFFERENCE$ = 3;
  dvt.$LinearScaleAxisValueFormatter$.prototype.Init = function $dvt$$LinearScaleAxisValueFormatter$$$Init$($DvtAxisObjPeer$$, $DvtAxisKeyboardHandler$$, $DvtAxisEventManager$$, $DvtAxisDefaults$$, $DvtAxisAutomation$$, $DvtAxisConstants$$) {
    this.$_context$ = $DvtAxisObjPeer$$;
    this.$_scales$ = {};
    this.$_scalesOrder$ = [];
    this.$_factorToScaleMapping$ = {};
    this.$InitScales$();
    this.$InitFormatter$($DvtAxisKeyboardHandler$$, $DvtAxisEventManager$$, $DvtAxisDefaults$$, $DvtAxisAutomation$$, $DvtAxisConstants$$)
  };
  dvt.$LinearScaleAxisValueFormatter$.prototype.$InitScales$ = function $dvt$$LinearScaleAxisValueFormatter$$$$InitScales$$() {
    function $DvtAxisObjPeer$$($DvtAxisKeyboardHandler$$, $DvtAxisEventManager$$, $DvtAxisDefaults$$) {
      var $DvtAxisAutomation$$;
      $DvtAxisDefaults$$ && ($DvtAxisAutomation$$ = dvt.$Bundle$.$getTranslatedString$(dvt.$Bundle$.$UTIL_PREFIX$, $DvtAxisDefaults$$));
      $DvtAxisDefaults$$ = {$scaleFactor$:$DvtAxisEventManager$$, $localizedSuffix$:$DvtAxisAutomation$$};
      this.$_scales$[$DvtAxisKeyboardHandler$$] = $DvtAxisDefaults$$;
      this.$_scalesOrder$.push($DvtAxisDefaults$$);
      this.$_factorToScaleMapping$[$DvtAxisEventManager$$] = $DvtAxisDefaults$$
    }
    var $DvtAxisKeyboardHandler$$ = dvt.$LinearScaleAxisValueFormatter$.$SCALING_FACTOR_DIFFERENCE$;
    $DvtAxisObjPeer$$.call(this, dvt.$LinearScaleAxisValueFormatter$.$SCALE_NONE$, 0 * $DvtAxisKeyboardHandler$$);
    $DvtAxisObjPeer$$.call(this, dvt.$LinearScaleAxisValueFormatter$.$SCALE_THOUSAND$, 1 * $DvtAxisKeyboardHandler$$, "SCALING_SUFFIX_THOUSAND");
    $DvtAxisObjPeer$$.call(this, dvt.$LinearScaleAxisValueFormatter$.$SCALE_MILLION$, 2 * $DvtAxisKeyboardHandler$$, "SCALING_SUFFIX_MILLION");
    $DvtAxisObjPeer$$.call(this, dvt.$LinearScaleAxisValueFormatter$.$SCALE_BILLION$, 3 * $DvtAxisKeyboardHandler$$, "SCALING_SUFFIX_BILLION");
    $DvtAxisObjPeer$$.call(this, dvt.$LinearScaleAxisValueFormatter$.$SCALE_TRILLION$, 4 * $DvtAxisKeyboardHandler$$, "SCALING_SUFFIX_TRILLION");
    $DvtAxisObjPeer$$.call(this, dvt.$LinearScaleAxisValueFormatter$.$SCALE_QUADRILLION$, 5 * $DvtAxisKeyboardHandler$$, "SCALING_SUFFIX_QUADRILLION");
    this.$_scalesOrder$.sort(function($DvtAxisObjPeer$$, $DvtAxisKeyboardHandler$$) {
      return $DvtAxisObjPeer$$.$scaleFactor$ < $DvtAxisKeyboardHandler$$.$scaleFactor$ ? -1 : $DvtAxisObjPeer$$.$scaleFactor$ > $DvtAxisKeyboardHandler$$.$scaleFactor$ ? 1 : 0
    })
  };
  dvt.$LinearScaleAxisValueFormatter$.prototype.$InitFormatter$ = function $dvt$$LinearScaleAxisValueFormatter$$$$InitFormatter$$($DvtAxisObjPeer$$, $DvtAxisKeyboardHandler$$, $DvtAxisEventManager$$, $DvtAxisDefaults$$, $DvtAxisAutomation$$) {
    var $DvtAxisConstants$$ = $JSCompiler_alias_FALSE$$, $DvtAxisRenderer$$, $useAutoPrecision$$ = $JSCompiler_alias_FALSE$$;
    "off" !== $DvtAxisAutomation$$ && ($useAutoPrecision$$ = $JSCompiler_alias_TRUE$$);
    $DvtAxisDefaults$$ = this.$_getScaleFactor$($DvtAxisDefaults$$);
    "number" !== typeof $DvtAxisDefaults$$ && ($DvtAxisConstants$$ = $JSCompiler_alias_TRUE$$);
    $DvtAxisConstants$$ && ($DvtAxisConstants$$ = Math.max(Math.abs($DvtAxisObjPeer$$), Math.abs($DvtAxisKeyboardHandler$$)), $DvtAxisDefaults$$ = this.$_findNearestLEScaleFactor$(this.$_getPowerOfTen$($DvtAxisConstants$$)));
    $useAutoPrecision$$ === $JSCompiler_alias_TRUE$$ && (0 == $DvtAxisEventManager$$ && $DvtAxisObjPeer$$ == $DvtAxisKeyboardHandler$$ ? ($DvtAxisObjPeer$$ = $DvtAxisDefaults$$ - this.$_getPowerOfTen$($DvtAxisKeyboardHandler$$), $DvtAxisRenderer$$ = 0 >= $DvtAxisObjPeer$$ ? Math.max($DvtAxisObjPeer$$ + 3, 0) : Math.max($DvtAxisObjPeer$$, 4)) : $DvtAxisRenderer$$ = Math.max($DvtAxisDefaults$$ - this.$_getPowerOfTen$($DvtAxisEventManager$$), 0));
    this.$_useAutoPrecision$ = $useAutoPrecision$$;
    this.$_scaleFactor$ = $DvtAxisDefaults$$;
    this.$_decimalPlaces$ = $DvtAxisRenderer$$
  };
  dvt.$LinearScaleAxisValueFormatter$.prototype.$_findNearestLEScaleFactor$ = function $dvt$$LinearScaleAxisValueFormatter$$$$_findNearestLEScaleFactor$$($DvtAxisObjPeer$$) {
    var $DvtAxisKeyboardHandler$$ = 0;
    if($DvtAxisObjPeer$$ <= this.$_scalesOrder$[0].$scaleFactor$) {
      $DvtAxisKeyboardHandler$$ = this.$_scalesOrder$[0].$scaleFactor$
    }else {
      if($DvtAxisObjPeer$$ >= this.$_scalesOrder$[this.$_scalesOrder$.length - 1].$scaleFactor$) {
        $DvtAxisKeyboardHandler$$ = this.$_scalesOrder$[this.$_scalesOrder$.length - 1].$scaleFactor$
      }else {
        for(var $DvtAxisEventManager$$ = this.$_scalesOrder$.length - 1;0 <= $DvtAxisEventManager$$;$DvtAxisEventManager$$--) {
          if(this.$_scalesOrder$[$DvtAxisEventManager$$].$scaleFactor$ <= $DvtAxisObjPeer$$) {
            $DvtAxisKeyboardHandler$$ = this.$_scalesOrder$[$DvtAxisEventManager$$].$scaleFactor$;
            break
          }
        }
      }
    }
    return $DvtAxisKeyboardHandler$$
  };
  dvt.$LinearScaleAxisValueFormatter$.prototype.$_getScaleFactor$ = function $dvt$$LinearScaleAxisValueFormatter$$$$_getScaleFactor$$($DvtAxisObjPeer$$) {
    $DvtAxisObjPeer$$ || ($DvtAxisObjPeer$$ = dvt.$LinearScaleAxisValueFormatter$.$SCALE_AUTO$);
    var $DvtAxisKeyboardHandler$$;
    if($DvtAxisObjPeer$$ = this.$_scales$[$DvtAxisObjPeer$$]) {
      $DvtAxisKeyboardHandler$$ = $DvtAxisObjPeer$$.$scaleFactor$
    }
    return $DvtAxisKeyboardHandler$$
  };
  dvt.$LinearScaleAxisValueFormatter$.prototype.$format$ = function $dvt$$LinearScaleAxisValueFormatter$$$$format$$($DvtAxisObjPeer$$, $DvtAxisKeyboardHandler$$) {
    var $DvtAxisEventManager$$ = parseFloat($DvtAxisObjPeer$$);
    if(isNaN($DvtAxisEventManager$$)) {
      return $DvtAxisObjPeer$$
    }
    var $DvtAxisDefaults$$;
    if(0 < this.$_scaleFactor$) {
      for($DvtAxisDefaults$$ = 0;$DvtAxisDefaults$$ < this.$_scaleFactor$;$DvtAxisDefaults$$++) {
        $DvtAxisEventManager$$ /= 10
      }
      $DvtAxisDefaults$$ = this.$_factorToScaleMapping$[this.$_scaleFactor$].$localizedSuffix$
    }
    if($DvtAxisKeyboardHandler$$ && $DvtAxisKeyboardHandler$$.getAsString) {
      $DvtAxisEventManager$$ = $DvtAxisKeyboardHandler$$.getAsString($DvtAxisEventManager$$)
    }else {
      if($DvtAxisKeyboardHandler$$ && $DvtAxisKeyboardHandler$$.format) {
        $DvtAxisEventManager$$ = $DvtAxisKeyboardHandler$$.format($DvtAxisEventManager$$)
      }else {
        var $DvtAxisAutomation$$ = this.$_context$.$getNumberConverter$({minimumFractionDigits:this.$_decimalPlaces$, maximumFractionDigits:this.$_decimalPlaces$});
        $DvtAxisAutomation$$ && $DvtAxisAutomation$$.format ? $DvtAxisEventManager$$ = $DvtAxisAutomation$$.format($DvtAxisEventManager$$) : this.$_useAutoPrecision$ && !isNaN(parseFloat($DvtAxisEventManager$$)) && ($DvtAxisEventManager$$ = parseFloat((new Number($DvtAxisEventManager$$)).toFixed(this.$_decimalPlaces$)), $DvtAxisEventManager$$ = this.$_formatFraction$($DvtAxisEventManager$$))
      }
    }
    "string" === typeof $DvtAxisDefaults$$ && 0 != $DvtAxisObjPeer$$ && ($DvtAxisEventManager$$ += $DvtAxisDefaults$$);
    return $DvtAxisEventManager$$
  };
  dvt.$LinearScaleAxisValueFormatter$.prototype.$_formatFraction$ = function $dvt$$LinearScaleAxisValueFormatter$$$$_formatFraction$$($DvtAxisObjPeer$$) {
    $DvtAxisObjPeer$$ = $DvtAxisObjPeer$$.toString();
    if(-1 != $DvtAxisObjPeer$$.indexOf("e")) {
      return $DvtAxisObjPeer$$
    }
    var $DvtAxisKeyboardHandler$$ = ".", $DvtAxisKeyboardHandler$$ = dvt.$Bundle$.$getTranslatedString$(dvt.$Bundle$.$UTIL_PREFIX$, "NUMBER_FORMAT_DECIMAL_SEPARATOR");
    if(0 < this.$_decimalPlaces$) {
      $DvtAxisObjPeer$$ = -1 == $DvtAxisObjPeer$$.indexOf(".") ? $DvtAxisObjPeer$$ + $DvtAxisKeyboardHandler$$ : $DvtAxisObjPeer$$.replace(".", $DvtAxisKeyboardHandler$$);
      for($DvtAxisKeyboardHandler$$ = $DvtAxisObjPeer$$.substring($DvtAxisObjPeer$$.indexOf($DvtAxisKeyboardHandler$$) + 1).length;$DvtAxisKeyboardHandler$$ < this.$_decimalPlaces$;) {
        $DvtAxisObjPeer$$ += "0", $DvtAxisKeyboardHandler$$++
      }
    }
    return $DvtAxisObjPeer$$
  };
  dvt.$LinearScaleAxisValueFormatter$.prototype.$_getPowerOfTen$ = function $dvt$$LinearScaleAxisValueFormatter$$$$_getPowerOfTen$$($DvtAxisObjPeer$$) {
    $DvtAxisObjPeer$$ = 0 <= $DvtAxisObjPeer$$ ? $DvtAxisObjPeer$$ : -$DvtAxisObjPeer$$;
    var $DvtAxisKeyboardHandler$$ = 0;
    if(1E-15 > $DvtAxisObjPeer$$) {
      return 0
    }
    if(Infinity == $DvtAxisObjPeer$$) {
      return Number.MAX_VALUE
    }
    if(10 <= $DvtAxisObjPeer$$) {
      for(;10 <= $DvtAxisObjPeer$$;) {
        $DvtAxisKeyboardHandler$$ += 1, $DvtAxisObjPeer$$ /= 10
      }
    }else {
      if(1 > $DvtAxisObjPeer$$) {
        for(;1 > $DvtAxisObjPeer$$;) {
          $DvtAxisKeyboardHandler$$ -= 1, $DvtAxisObjPeer$$ *= 10
        }
      }
    }
    return $DvtAxisKeyboardHandler$$
  };
  dvt.$TimeAxisInfo$ = function $dvt$$TimeAxisInfo$$($DvtAxisObjPeer$$, $DvtAxisKeyboardHandler$$, $DvtAxisEventManager$$) {
    this.Init($DvtAxisObjPeer$$, $DvtAxisKeyboardHandler$$, $DvtAxisEventManager$$)
  };
  dvt.$Obj$.$createSubclass$(dvt.$TimeAxisInfo$, dvt.$AxisInfo$);
  dvt.$TimeAxisInfo$.$TIME_SECOND$ = 1E3;
  dvt.$TimeAxisInfo$.$TIME_MINUTE$ = 60 * dvt.$TimeAxisInfo$.$TIME_SECOND$;
  dvt.$TimeAxisInfo$.$TIME_HOUR$ = 60 * dvt.$TimeAxisInfo$.$TIME_MINUTE$;
  dvt.$TimeAxisInfo$.$TIME_DAY$ = 24 * dvt.$TimeAxisInfo$.$TIME_HOUR$;
  dvt.$TimeAxisInfo$.$TIME_MONTH_MIN$ = 28 * dvt.$TimeAxisInfo$.$TIME_DAY$;
  dvt.$TimeAxisInfo$.$TIME_MONTH_MAX$ = 31 * dvt.$TimeAxisInfo$.$TIME_DAY$;
  dvt.$TimeAxisInfo$.$TIME_YEAR_MIN$ = 365 * dvt.$TimeAxisInfo$.$TIME_DAY$;
  dvt.$TimeAxisInfo$.$TIME_YEAR_MAX$ = 366 * dvt.$TimeAxisInfo$.$TIME_DAY$;
  dvt.$TimeAxisInfo$.prototype.Init = function $dvt$$TimeAxisInfo$$$Init$($DvtAxisObjPeer$$, $DvtAxisKeyboardHandler$$, $DvtAxisEventManager$$) {
    dvt.$TimeAxisInfo$.$superclass$.Init.call(this, $DvtAxisObjPeer$$, $DvtAxisKeyboardHandler$$, $DvtAxisEventManager$$);
    "top" == this.$Position$ || "bottom" == this.$Position$ ? (!$DvtAxisKeyboardHandler$$._isOverview && "on" == $DvtAxisKeyboardHandler$$.tickLabel.rendered && (this.$StartOverflow$ = Math.max(dvt.$Axis$.$MINIMUM_AXIS_BUFFER$ - $DvtAxisKeyboardHandler$$.leftBuffer, 0), this.$EndOverflow$ = Math.max(dvt.$Axis$.$MINIMUM_AXIS_BUFFER$ - $DvtAxisKeyboardHandler$$.rightBuffer, 0)), dvt.$Agent$.$isRightToLeft$($DvtAxisObjPeer$$) ? (this.$_startCoord$ = this.$EndCoord$ - this.$EndOverflow$, this.$_endCoord$ = 
    this.$StartCoord$ + this.$StartOverflow$) : (this.$_startCoord$ = this.$StartCoord$ + this.$StartOverflow$, this.$_endCoord$ = this.$EndCoord$ - this.$EndOverflow$)) : (this.$_startCoord$ = this.$StartCoord$, this.$_endCoord$ = this.$EndCoord$);
    this.$_label1Converter$ = ($DvtAxisEventManager$$ = $DvtAxisKeyboardHandler$$.tickLabel != $JSCompiler_alias_NULL$$ ? $DvtAxisKeyboardHandler$$.tickLabel.converter : $JSCompiler_alias_NULL$$) && $DvtAxisEventManager$$[0] ? $DvtAxisEventManager$$[0] : $DvtAxisEventManager$$;
    this.$_label2Converter$ = $DvtAxisEventManager$$ && $DvtAxisEventManager$$[1] ? $DvtAxisEventManager$$[1] : $JSCompiler_alias_NULL$$;
    this.$_dateToIsoConverter$ = $DvtAxisObjPeer$$.$getLocaleHelpers$().dateToIsoConverter;
    this.$_groups$ = $DvtAxisKeyboardHandler$$.groups;
    $DvtAxisObjPeer$$ = $DvtAxisKeyboardHandler$$.timeAxisType;
    this.$_skipGaps$ = "skipGaps" == $DvtAxisObjPeer$$;
    this.$_mixedFrequency$ = "mixedFrequency" == $DvtAxisObjPeer$$;
    this.$DataMin$ = $DvtAxisKeyboardHandler$$.dataMin;
    this.$DataMax$ = $DvtAxisKeyboardHandler$$.dataMax;
    this.$_averageInterval$ = 1 < this.$_groups$.length ? (this.$DataMax$ - this.$DataMin$) / (this.$_groups$.length - 1) : 0 < this.$DataMax$ - this.$DataMin$ ? this.$DataMax$ - this.$DataMin$ : 6 * dvt.$TimeAxisInfo$.$TIME_MINUTE$;
    this.$_step$ = $DvtAxisKeyboardHandler$$.step;
    $DvtAxisObjPeer$$ = 0 < $DvtAxisKeyboardHandler$$.endGroupOffset ? $DvtAxisKeyboardHandler$$.endGroupOffset * this.$_averageInterval$ : 0;
    $DvtAxisEventManager$$ = 0 < $DvtAxisKeyboardHandler$$.startGroupOffset ? $DvtAxisKeyboardHandler$$.startGroupOffset * this.$_averageInterval$ : 0;
    this.$GlobalMin$ = $DvtAxisKeyboardHandler$$.min != $JSCompiler_alias_NULL$$ ? $DvtAxisKeyboardHandler$$.min : this.$DataMin$ - $DvtAxisEventManager$$;
    this.$GlobalMax$ = $DvtAxisKeyboardHandler$$.max != $JSCompiler_alias_NULL$$ ? $DvtAxisKeyboardHandler$$.max : this.$DataMax$ + $DvtAxisObjPeer$$;
    $DvtAxisKeyboardHandler$$.viewportStartGroup != $JSCompiler_alias_NULL$$ && (this.$MinValue$ = $DvtAxisKeyboardHandler$$.viewportStartGroup - $DvtAxisEventManager$$);
    $DvtAxisKeyboardHandler$$.viewportEndGroup != $JSCompiler_alias_NULL$$ && (this.$MaxValue$ = $DvtAxisKeyboardHandler$$.viewportEndGroup + $DvtAxisObjPeer$$);
    $DvtAxisKeyboardHandler$$.viewportMin != $JSCompiler_alias_NULL$$ && (this.$MinValue$ = $DvtAxisKeyboardHandler$$.viewportMin);
    $DvtAxisKeyboardHandler$$.viewportMax != $JSCompiler_alias_NULL$$ && (this.$MaxValue$ = $DvtAxisKeyboardHandler$$.viewportMax);
    this.$MinValue$ == $JSCompiler_alias_NULL$$ && (this.$MinValue$ = this.$GlobalMin$);
    this.$MaxValue$ == $JSCompiler_alias_NULL$$ && (this.$MaxValue$ = this.$GlobalMax$);
    this.$GlobalMin$ > this.$MinValue$ && (this.$GlobalMin$ = this.$MinValue$);
    this.$GlobalMax$ < this.$MaxValue$ && (this.$GlobalMax$ = this.$MaxValue$);
    this.$_timeRange$ = this.$MaxValue$ - this.$MinValue$;
    this.$_level2Coords$ = this.$_level1Coords$ = this.$_level2Labels$ = this.$_level1Labels$ = $JSCompiler_alias_NULL$$;
    this.$_isOneLevel$ = $JSCompiler_alias_TRUE$$;
    this.$_level1Overflow$ = [];
    this.$_level2Overflow$ = [];
    this.$_locale$ = $DvtAxisKeyboardHandler$$._locale.toLowerCase();
    this.$_monthResources$ = [dvt.$Bundle$.$getTranslatedString$(dvt.$Bundle$.$UTIL_PREFIX$, "MONTH_SHORT_JANUARY"), dvt.$Bundle$.$getTranslatedString$(dvt.$Bundle$.$UTIL_PREFIX$, "MONTH_SHORT_FEBRUARY"), dvt.$Bundle$.$getTranslatedString$(dvt.$Bundle$.$UTIL_PREFIX$, "MONTH_SHORT_MARCH"), dvt.$Bundle$.$getTranslatedString$(dvt.$Bundle$.$UTIL_PREFIX$, "MONTH_SHORT_APRIL"), dvt.$Bundle$.$getTranslatedString$(dvt.$Bundle$.$UTIL_PREFIX$, "MONTH_SHORT_MAY"), dvt.$Bundle$.$getTranslatedString$(dvt.$Bundle$.$UTIL_PREFIX$, 
    "MONTH_SHORT_JUNE"), dvt.$Bundle$.$getTranslatedString$(dvt.$Bundle$.$UTIL_PREFIX$, "MONTH_SHORT_JULY"), dvt.$Bundle$.$getTranslatedString$(dvt.$Bundle$.$UTIL_PREFIX$, "MONTH_SHORT_AUGUST"), dvt.$Bundle$.$getTranslatedString$(dvt.$Bundle$.$UTIL_PREFIX$, "MONTH_SHORT_SEPTEMBER"), dvt.$Bundle$.$getTranslatedString$(dvt.$Bundle$.$UTIL_PREFIX$, "MONTH_SHORT_OCTOBER"), dvt.$Bundle$.$getTranslatedString$(dvt.$Bundle$.$UTIL_PREFIX$, "MONTH_SHORT_NOVEMBER"), dvt.$Bundle$.$getTranslatedString$(dvt.$Bundle$.$UTIL_PREFIX$, 
    "MONTH_SHORT_DECEMBER")]
  };
  dvt.$TimeAxisInfo$.$_getAMString$ = function $dvt$$TimeAxisInfo$$$_getAMString$$($DvtAxisObjPeer$$) {
    if("en-au" == $DvtAxisObjPeer$$ || "en-ie" == $DvtAxisObjPeer$$ || "en-ph" == $DvtAxisObjPeer$$) {
      return"am"
    }
    if("en-gb" == $DvtAxisObjPeer$$) {
      return""
    }
    switch($DvtAxisObjPeer$$.substring(0, 2)) {
      case "en":
        return"AM";
      case "ar":
        return"\u0635";
      case "el":
        return"\u03c0\u03bc";
      case "ko":
        return"\uc624\uc804";
      case "zh":
        return"\u4e0a\u5348";
      default:
        return""
    }
  };
  dvt.$TimeAxisInfo$.$_getPMString$ = function $dvt$$TimeAxisInfo$$$_getPMString$$($DvtAxisObjPeer$$) {
    if("en-au" == $DvtAxisObjPeer$$ || "en-ie" == $DvtAxisObjPeer$$ || "en-ph" == $DvtAxisObjPeer$$) {
      return"pm"
    }
    if("en-gb" == $DvtAxisObjPeer$$) {
      return""
    }
    switch($DvtAxisObjPeer$$.substring(0, 2)) {
      case "en":
        return"PM";
      case "ar":
        return"\u0645";
      case "el":
        return"\u03bc\u03bc";
      case "ko":
        return"\uc624\ud6c4";
      case "zh":
        return"\u4e0b\u5348";
      default:
        return""
    }
  };
  dvt.$TimeAxisInfo$.$_getAMPMBefore$ = function $dvt$$TimeAxisInfo$$$_getAMPMBefore$$($DvtAxisObjPeer$$) {
    $DvtAxisObjPeer$$ = $DvtAxisObjPeer$$.substring(0, 2);
    return"ko" == $DvtAxisObjPeer$$ || "zh" == $DvtAxisObjPeer$$ ? $JSCompiler_alias_TRUE$$ : $JSCompiler_alias_FALSE$$
  };
  dvt.$TimeAxisInfo$.$_getDMYOrder$ = function $dvt$$TimeAxisInfo$$$_getDMYOrder$$($DvtAxisObjPeer$$) {
    var $DvtAxisKeyboardHandler$$ = $DvtAxisObjPeer$$.substring(0, 2);
    return"en-us" == $DvtAxisObjPeer$$ || "en-ph" == $DvtAxisObjPeer$$ ? "MDY" : "fa" == $DvtAxisKeyboardHandler$$ || "hu" == $DvtAxisKeyboardHandler$$ || "ja" == $DvtAxisKeyboardHandler$$ || "ko" == $DvtAxisKeyboardHandler$$ || "lt" == $DvtAxisKeyboardHandler$$ || "mn" == $DvtAxisKeyboardHandler$$ || "zh" == $DvtAxisKeyboardHandler$$ ? "YMD" : "DMY"
  };
  dvt.$TimeAxisInfo$.$_getYearTrailingCharacters$ = function $dvt$$TimeAxisInfo$$$_getYearTrailingCharacters$$($DvtAxisObjPeer$$) {
    return 0 == $DvtAxisObjPeer$$.indexOf("ja") || 0 == $DvtAxisObjPeer$$.indexOf("zh") ? "\u5e74" : 0 == $DvtAxisObjPeer$$.indexOf("ko") ? "\ub144" : ""
  };
  dvt.$TimeAxisInfo$.$_getDayTrailingCharacters$ = function $dvt$$TimeAxisInfo$$$_getDayTrailingCharacters$$($DvtAxisObjPeer$$) {
    return 0 == $DvtAxisObjPeer$$.indexOf("ja") || 0 == $DvtAxisObjPeer$$.indexOf("zh") ? "\u65e5" : 0 == $DvtAxisObjPeer$$.indexOf("ko") ? "\uc77c" : ""
  };
  dvt.$TimeAxisInfo$.prototype.$formatLabel$ = function $dvt$$TimeAxisInfo$$$$formatLabel$$($DvtAxisObjPeer$$) {
    $DvtAxisObjPeer$$ = this.$_formatAxisLabel$(new Date($DvtAxisObjPeer$$), $JSCompiler_alias_NULL$$, $JSCompiler_alias_TRUE$$);
    return $DvtAxisObjPeer$$[1] != $JSCompiler_alias_NULL$$ ? "YMD" == dvt.$TimeAxisInfo$.$_getDMYOrder$(this.$_locale$) || this.$_timeRange$ < dvt.$TimeAxisInfo$.$TIME_MONTH_MIN$ && this.$_step$ < dvt.$TimeAxisInfo$.$TIME_DAY$ ? $DvtAxisObjPeer$$[1] + " " + $DvtAxisObjPeer$$[0] : $DvtAxisObjPeer$$[0] + " " + $DvtAxisObjPeer$$[1] : $DvtAxisObjPeer$$[0]
  };
  dvt.$TimeAxisInfo$.prototype.$_formatAxisLabelWithConverter$ = function $dvt$$TimeAxisInfo$$$$_formatAxisLabelWithConverter$$($DvtAxisObjPeer$$, $DvtAxisKeyboardHandler$$, $DvtAxisEventManager$$) {
    if($DvtAxisEventManager$$) {
      var $DvtAxisDefaults$$ = $JSCompiler_alias_NULL$$, $DvtAxisAutomation$$ = $JSCompiler_alias_NULL$$;
      $DvtAxisEventManager$$.getAsString ? ($DvtAxisDefaults$$ = $DvtAxisEventManager$$.getAsString($DvtAxisObjPeer$$), $DvtAxisAutomation$$ = $DvtAxisEventManager$$.getAsString($DvtAxisKeyboardHandler$$)) : $DvtAxisEventManager$$.format && ($DvtAxisDefaults$$ = $DvtAxisEventManager$$.format(this.$_dateToIsoConverter$ ? this.$_dateToIsoConverter$($DvtAxisObjPeer$$) : $DvtAxisObjPeer$$), $DvtAxisAutomation$$ = $DvtAxisEventManager$$.format(this.$_dateToIsoConverter$ ? this.$_dateToIsoConverter$($DvtAxisKeyboardHandler$$) : 
      $DvtAxisKeyboardHandler$$));
      if($DvtAxisAutomation$$ != $DvtAxisDefaults$$) {
        return $DvtAxisDefaults$$
      }
    }
    return $JSCompiler_alias_NULL$$
  };
  dvt.$TimeAxisInfo$.prototype.$_formatAxisLabel$ = function $dvt$$TimeAxisInfo$$$$_formatAxisLabel$$($DvtAxisObjPeer$$, $DvtAxisKeyboardHandler$$, $DvtAxisEventManager$$) {
    var $DvtAxisDefaults$$ = $JSCompiler_alias_NULL$$, $DvtAxisAutomation$$ = $JSCompiler_alias_NULL$$, $DvtAxisConstants$$ = "left" == this.$Position$ || "right" == this.$Position$;
    if(this.$_label1Converter$ || this.$_label2Converter$) {
      return this.$_label1Converter$ && ($DvtAxisDefaults$$ = this.$_formatAxisLabelWithConverter$($DvtAxisObjPeer$$, $DvtAxisKeyboardHandler$$, this.$_label1Converter$)), this.$_label2Converter$ && ($DvtAxisAutomation$$ = this.$_formatAxisLabelWithConverter$($DvtAxisObjPeer$$, $DvtAxisKeyboardHandler$$, this.$_label2Converter$)), [$DvtAxisDefaults$$, $DvtAxisAutomation$$]
    }
    if(this.$_step$ >= dvt.$TimeAxisInfo$.$TIME_YEAR_MIN$ || this.$_timeRange$ >= 6 * dvt.$TimeAxisInfo$.$TIME_YEAR_MIN$) {
      $DvtAxisDefaults$$ = this.$_formatDate$($DvtAxisObjPeer$$, $JSCompiler_alias_FALSE$$, $JSCompiler_alias_FALSE$$, $JSCompiler_alias_TRUE$$)
    }else {
      if(this.$_step$ >= dvt.$TimeAxisInfo$.$TIME_MONTH_MIN$ || this.$_timeRange$ >= 6 * dvt.$TimeAxisInfo$.$TIME_MONTH_MIN$) {
        if($DvtAxisKeyboardHandler$$ == $JSCompiler_alias_NULL$$ || $DvtAxisKeyboardHandler$$.getMonth() != $DvtAxisObjPeer$$.getMonth()) {
          $DvtAxisDefaults$$ = this.$_formatDate$($DvtAxisObjPeer$$, $JSCompiler_alias_FALSE$$, $JSCompiler_alias_TRUE$$, $JSCompiler_alias_FALSE$$)
        }
        if($DvtAxisKeyboardHandler$$ == $JSCompiler_alias_NULL$$ || $DvtAxisKeyboardHandler$$.getYear() != $DvtAxisObjPeer$$.getYear()) {
          $DvtAxisAutomation$$ = this.$_formatDate$($DvtAxisObjPeer$$, $JSCompiler_alias_FALSE$$, $JSCompiler_alias_FALSE$$, $JSCompiler_alias_TRUE$$)
        }
      }else {
        if(this.$_step$ >= dvt.$TimeAxisInfo$.$TIME_DAY$ || this.$_timeRange$ >= 6 * dvt.$TimeAxisInfo$.$TIME_DAY$) {
          if($DvtAxisEventManager$$) {
            $DvtAxisDefaults$$ = this.$_formatDate$($DvtAxisObjPeer$$, $JSCompiler_alias_TRUE$$, $JSCompiler_alias_TRUE$$, $JSCompiler_alias_TRUE$$)
          }else {
            if($DvtAxisKeyboardHandler$$ == $JSCompiler_alias_NULL$$ || $DvtAxisKeyboardHandler$$.getDate() != $DvtAxisObjPeer$$.getDate()) {
              $DvtAxisDefaults$$ = this.$_formatDate$($DvtAxisObjPeer$$, $JSCompiler_alias_TRUE$$, $JSCompiler_alias_FALSE$$, $JSCompiler_alias_FALSE$$)
            }
            $DvtAxisKeyboardHandler$$ == $JSCompiler_alias_NULL$$ || $DvtAxisKeyboardHandler$$.getYear() != $DvtAxisObjPeer$$.getYear() ? $DvtAxisAutomation$$ = this.$_formatDate$($DvtAxisObjPeer$$, $JSCompiler_alias_FALSE$$, $JSCompiler_alias_TRUE$$, $JSCompiler_alias_TRUE$$) : $DvtAxisKeyboardHandler$$.getMonth() != $DvtAxisObjPeer$$.getMonth() && ($DvtAxisAutomation$$ = this.$_formatDate$($DvtAxisObjPeer$$, $JSCompiler_alias_FALSE$$, $JSCompiler_alias_TRUE$$, $JSCompiler_alias_FALSE$$))
          }
        }else {
          if(this.$_step$ >= dvt.$TimeAxisInfo$.$TIME_HOUR$ || this.$_timeRange$ >= 6 * dvt.$TimeAxisInfo$.$TIME_HOUR$) {
            if($DvtAxisKeyboardHandler$$ == $JSCompiler_alias_NULL$$ || $DvtAxisKeyboardHandler$$.getHours() != $DvtAxisObjPeer$$.getHours()) {
              $DvtAxisDefaults$$ = this.$_formatTime$($DvtAxisObjPeer$$, $JSCompiler_alias_FALSE$$, $JSCompiler_alias_FALSE$$)
            }
          }else {
            if(this.$_step$ >= dvt.$TimeAxisInfo$.$TIME_MINUTE$ || this.$_timeRange$ >= 6 * dvt.$TimeAxisInfo$.$TIME_MINUTE$) {
              if($DvtAxisKeyboardHandler$$ == $JSCompiler_alias_NULL$$ || $DvtAxisKeyboardHandler$$.getMinutes() != $DvtAxisObjPeer$$.getMinutes()) {
                $DvtAxisDefaults$$ = this.$_formatTime$($DvtAxisObjPeer$$, $JSCompiler_alias_TRUE$$, $JSCompiler_alias_FALSE$$)
              }
            }else {
              if($DvtAxisKeyboardHandler$$ == $JSCompiler_alias_NULL$$ || $DvtAxisKeyboardHandler$$.getSeconds() != $DvtAxisObjPeer$$.getSeconds()) {
                $DvtAxisDefaults$$ = this.$_formatTime$($DvtAxisObjPeer$$, $JSCompiler_alias_TRUE$$, $JSCompiler_alias_TRUE$$)
              }
            }
          }
          if($DvtAxisConstants$$) {
            if($DvtAxisKeyboardHandler$$ == $JSCompiler_alias_NULL$$ || $DvtAxisKeyboardHandler$$.getDate() != $DvtAxisObjPeer$$.getDate()) {
              $DvtAxisAutomation$$ = this.$_formatDate$($DvtAxisObjPeer$$, $JSCompiler_alias_TRUE$$, $JSCompiler_alias_TRUE$$, $JSCompiler_alias_FALSE$$)
            }
          }else {
            $DvtAxisKeyboardHandler$$ == $JSCompiler_alias_NULL$$ || $DvtAxisKeyboardHandler$$.getYear() != $DvtAxisObjPeer$$.getYear() ? $DvtAxisAutomation$$ = this.$_formatDate$($DvtAxisObjPeer$$, $JSCompiler_alias_TRUE$$, $JSCompiler_alias_TRUE$$, $JSCompiler_alias_TRUE$$) : $DvtAxisKeyboardHandler$$.getMonth() != $DvtAxisObjPeer$$.getMonth() ? $DvtAxisAutomation$$ = this.$_formatDate$($DvtAxisObjPeer$$, $JSCompiler_alias_TRUE$$, $JSCompiler_alias_TRUE$$, $JSCompiler_alias_FALSE$$) : $DvtAxisKeyboardHandler$$.getDate() != 
            $DvtAxisObjPeer$$.getDate() && ($DvtAxisAutomation$$ = this.$_formatDate$($DvtAxisObjPeer$$, $JSCompiler_alias_TRUE$$, $JSCompiler_alias_FALSE$$, $JSCompiler_alias_FALSE$$))
          }
        }
      }
    }
    return[$DvtAxisDefaults$$, $DvtAxisAutomation$$]
  };
  dvt.$TimeAxisInfo$.prototype.$_formatDate$ = function $dvt$$TimeAxisInfo$$$$_formatDate$$($DvtAxisObjPeer$$, $DvtAxisKeyboardHandler$$, $DvtAxisEventManager$$, $DvtAxisDefaults$$) {
    var $DvtAxisAutomation$$ = "th" == this.$_locale$.substring(0, 2) && "jet" != this.$Options$._environment ? $DvtAxisObjPeer$$.getFullYear() + 543 : $DvtAxisObjPeer$$.getFullYear(), $DvtAxisConstants$$;
    $DvtAxisConstants$$ = this.$_monthResources$ && 12 <= this.$_monthResources$.length ? this.$_monthResources$[$DvtAxisObjPeer$$.getMonth()] : $DvtAxisObjPeer$$.toString().split(" ")[1];
    $DvtAxisObjPeer$$ = $DvtAxisObjPeer$$.getDate();
    $DvtAxisAutomation$$ += dvt.$TimeAxisInfo$.$_getYearTrailingCharacters$(this.$_locale$);
    $DvtAxisObjPeer$$ += dvt.$TimeAxisInfo$.$_getDayTrailingCharacters$(this.$_locale$);
    for(var $DvtAxisRenderer$$ = dvt.$TimeAxisInfo$.$_getDMYOrder$(this.$_locale$), $dateStr$$ = "", $i$$237$$ = 0;$i$$237$$ < $DvtAxisRenderer$$.length;$i$$237$$++) {
      $DvtAxisKeyboardHandler$$ && "D" == $DvtAxisRenderer$$[$i$$237$$] ? $dateStr$$ += $DvtAxisObjPeer$$ + " " : $DvtAxisEventManager$$ && "M" == $DvtAxisRenderer$$[$i$$237$$] ? $dateStr$$ += $DvtAxisConstants$$ + " " : $DvtAxisDefaults$$ && "Y" == $DvtAxisRenderer$$[$i$$237$$] && ($dateStr$$ += $DvtAxisAutomation$$ + " ")
    }
    return 0 < $dateStr$$.length ? $dateStr$$.slice(0, $dateStr$$.length - 1) : $dateStr$$
  };
  dvt.$TimeAxisInfo$.prototype.$_formatTime$ = function $dvt$$TimeAxisInfo$$$$_formatTime$$($DvtAxisObjPeer$$, $DvtAxisKeyboardHandler$$, $DvtAxisEventManager$$) {
    var $DvtAxisDefaults$$ = $DvtAxisObjPeer$$.getHours(), $DvtAxisAutomation$$ = $DvtAxisObjPeer$$.getMinutes();
    $DvtAxisObjPeer$$ = $DvtAxisObjPeer$$.getSeconds();
    var $DvtAxisConstants$$ = dvt.$TimeAxisInfo$.$_getAMString$(this.$_locale$), $DvtAxisRenderer$$ = dvt.$TimeAxisInfo$.$_getPMString$(this.$_locale$), $ampmBefore$$ = dvt.$TimeAxisInfo$.$_getAMPMBefore$(this.$_locale$), $b12HFormat$$ = "" != $DvtAxisConstants$$ && "" != $DvtAxisRenderer$$, $ampm$$, $timeLabel$$ = "";
    dvt.$Agent$.$isRightToLeft$(this.$getCtx$()) && ($timeLabel$$ = "\u200f");
    if($b12HFormat$$) {
      if(12 > $DvtAxisDefaults$$ ? ($ampm$$ = $DvtAxisConstants$$, 0 == $DvtAxisDefaults$$ && ($DvtAxisDefaults$$ = 12)) : ($ampm$$ = $DvtAxisRenderer$$, 12 < $DvtAxisDefaults$$ && ($DvtAxisDefaults$$ -= 12)), $timeLabel$$ += $DvtAxisDefaults$$, $DvtAxisKeyboardHandler$$ || 0 != $DvtAxisAutomation$$) {
        $timeLabel$$ += ":" + this.$_doubleDigit$($DvtAxisAutomation$$)
      }
    }else {
      $timeLabel$$ += this.$_doubleDigit$($DvtAxisDefaults$$) + ":" + this.$_doubleDigit$($DvtAxisAutomation$$)
    }
    $DvtAxisEventManager$$ && ($timeLabel$$ += ":" + this.$_doubleDigit$($DvtAxisObjPeer$$));
    return $b12HFormat$$ ? $ampmBefore$$ ? $ampm$$ + " " + $timeLabel$$ : $timeLabel$$ + " " + $ampm$$ : $timeLabel$$
  };
  dvt.$TimeAxisInfo$.prototype.$_doubleDigit$ = function $dvt$$TimeAxisInfo$$$$_doubleDigit$$($DvtAxisObjPeer$$) {
    return 10 > $DvtAxisObjPeer$$ ? "0" + $DvtAxisObjPeer$$ : "" + $DvtAxisObjPeer$$
  };
  dvt.$TimeAxisInfo$.prototype.$_getMixedFrequencyStep$ = function $dvt$$TimeAxisInfo$$$$_getMixedFrequencyStep$$() {
    return this.$_timeRange$ >= 6 * dvt.$TimeAxisInfo$.$TIME_YEAR_MIN$ ? dvt.$TimeAxisInfo$.$TIME_YEAR_MIN$ : this.$_timeRange$ >= 6 * dvt.$TimeAxisInfo$.$TIME_MONTH_MIN$ ? dvt.$TimeAxisInfo$.$TIME_MONTH_MIN$ : this.$_timeRange$ >= 6 * dvt.$TimeAxisInfo$.$TIME_DAY$ ? dvt.$TimeAxisInfo$.$TIME_DAY$ : this.$_timeRange$ >= dvt.$TimeAxisInfo$.$TIME_DAY$ ? 3 * dvt.$TimeAxisInfo$.$TIME_HOUR$ : this.$_timeRange$ >= 6 * dvt.$TimeAxisInfo$.$TIME_HOUR$ ? dvt.$TimeAxisInfo$.$TIME_HOUR$ : this.$_timeRange$ >= 
    dvt.$TimeAxisInfo$.$TIME_HOUR$ ? 15 * dvt.$TimeAxisInfo$.$TIME_MINUTE$ : this.$_timeRange$ >= 30 * dvt.$TimeAxisInfo$.$TIME_MINUTE$ ? 5 * dvt.$TimeAxisInfo$.$TIME_MINUTE$ : this.$_timeRange$ >= 6 * dvt.$TimeAxisInfo$.$TIME_MINUTE$ ? dvt.$TimeAxisInfo$.$TIME_MINUTE$ : this.$_timeRange$ >= dvt.$TimeAxisInfo$.$TIME_MINUTE$ ? 15 * dvt.$TimeAxisInfo$.$TIME_SECOND$ : this.$_timeRange$ >= 30 * dvt.$TimeAxisInfo$.$TIME_SECOND$ ? 5 * dvt.$TimeAxisInfo$.$TIME_SECOND$ : dvt.$TimeAxisInfo$.$TIME_SECOND$
  };
  dvt.$TimeAxisInfo$.$_getLabelPositions$ = function $dvt$$TimeAxisInfo$$$_getLabelPositions$$($DvtAxisObjPeer$$, $DvtAxisKeyboardHandler$$, $DvtAxisEventManager$$) {
    var $DvtAxisDefaults$$ = new Date($DvtAxisObjPeer$$);
    $DvtAxisDefaults$$.setMonth(0, 1);
    $DvtAxisDefaults$$.setHours(0, 0, 0, 0);
    var $DvtAxisDefaults$$ = $DvtAxisDefaults$$.getTime(), $DvtAxisAutomation$$ = [];
    if($DvtAxisEventManager$$ >= dvt.$TimeAxisInfo$.$TIME_YEAR_MIN$ && $DvtAxisEventManager$$ <= dvt.$TimeAxisInfo$.$TIME_YEAR_MAX$) {
      for(;$DvtAxisDefaults$$ < $DvtAxisObjPeer$$;) {
        $DvtAxisDefaults$$ = dvt.$TimeAxisInfo$.$_addOneYear$($DvtAxisDefaults$$)
      }
      for(;$DvtAxisDefaults$$ <= $DvtAxisKeyboardHandler$$;) {
        $DvtAxisAutomation$$.push($DvtAxisDefaults$$), $DvtAxisDefaults$$ = dvt.$TimeAxisInfo$.$_addOneYear$($DvtAxisDefaults$$)
      }
    }else {
      if($DvtAxisEventManager$$ >= dvt.$TimeAxisInfo$.$TIME_MONTH_MIN$ && $DvtAxisEventManager$$ <= dvt.$TimeAxisInfo$.$TIME_MONTH_MAX$) {
        for(;$DvtAxisDefaults$$ < $DvtAxisObjPeer$$;) {
          $DvtAxisDefaults$$ = dvt.$TimeAxisInfo$.$_addOneMonth$($DvtAxisDefaults$$)
        }
        for(;$DvtAxisDefaults$$ <= $DvtAxisKeyboardHandler$$;) {
          $DvtAxisAutomation$$.push($DvtAxisDefaults$$), $DvtAxisDefaults$$ = dvt.$TimeAxisInfo$.$_addOneMonth$($DvtAxisDefaults$$)
        }
      }else {
        for($DvtAxisDefaults$$ += Math.ceil(($DvtAxisObjPeer$$ - $DvtAxisDefaults$$) / $DvtAxisEventManager$$) * $DvtAxisEventManager$$;$DvtAxisDefaults$$ <= $DvtAxisKeyboardHandler$$;) {
          $DvtAxisAutomation$$.push($DvtAxisDefaults$$), $DvtAxisDefaults$$ += $DvtAxisEventManager$$
        }
      }
    }
    return $DvtAxisAutomation$$
  };
  dvt.$TimeAxisInfo$.$_addOneYear$ = function $dvt$$TimeAxisInfo$$$_addOneYear$$($DvtAxisObjPeer$$) {
    $DvtAxisObjPeer$$ = new Date($DvtAxisObjPeer$$);
    $DvtAxisObjPeer$$.setFullYear($DvtAxisObjPeer$$.getFullYear() + 1);
    return $DvtAxisObjPeer$$.getTime()
  };
  dvt.$TimeAxisInfo$.$_addOneMonth$ = function $dvt$$TimeAxisInfo$$$_addOneMonth$$($DvtAxisObjPeer$$) {
    $DvtAxisObjPeer$$ = new Date($DvtAxisObjPeer$$);
    $DvtAxisObjPeer$$.setMonth($DvtAxisObjPeer$$.getMonth() + 1);
    return $DvtAxisObjPeer$$.getTime()
  };
  dvt.$TimeAxisInfo$.prototype.$_generateLabels$ = function $dvt$$TimeAxisInfo$$$$_generateLabels$$($DvtAxisObjPeer$$) {
    var $DvtAxisKeyboardHandler$$ = [], $DvtAxisEventManager$$ = [], $DvtAxisDefaults$$ = [], $DvtAxisAutomation$$ = [], $DvtAxisConstants$$ = [], $DvtAxisRenderer$$ = $JSCompiler_alias_NULL$$, $c1$$ = 0, $c2$$ = 0, $container$$17$$ = $DvtAxisObjPeer$$.$_stage$, $isRTL$$9$$ = dvt.$Agent$.$isRightToLeft$($DvtAxisObjPeer$$), $isVert$$3$$ = "left" == this.$Position$ || "right" == this.$Position$, $scrollable$$ = "off" != this.$Options$.zoomAndScroll, $first$$2$$ = $JSCompiler_alias_TRUE$$, $levelsGap$$ = 
    0;
    $isVert$$3$$ && dvt.$Agent$.$isBrowserChrome$() && ($levelsGap$$ = 0.16 * this.$getTickLabelHeight$());
    var $times$$1$$ = [];
    if(this.$_step$ != $JSCompiler_alias_NULL$$) {
      $times$$1$$ = dvt.$TimeAxisInfo$.$_getLabelPositions$(this.$MinValue$, this.$MaxValue$, this.$_step$)
    }else {
      if(this.$_mixedFrequency$) {
        this.$_step$ = this.$_getMixedFrequencyStep$(), $times$$1$$ = dvt.$TimeAxisInfo$.$_getLabelPositions$(this.$MinValue$, this.$MaxValue$, this.$_step$)
      }else {
        for(var $firstLabel$$1_i$$238$$ = 0;$firstLabel$$1_i$$238$$ < this.$_groups$.length;$firstLabel$$1_i$$238$$++) {
          this.$_groups$[$firstLabel$$1_i$$238$$] >= this.$MinValue$ && this.$_groups$[$firstLabel$$1_i$$238$$] <= this.$MaxValue$ && $times$$1$$.push(this.$_groups$[$firstLabel$$1_i$$238$$])
        }
        this.$_step$ = this.$_averageInterval$;
        if(!this.$_skipGaps$ && ($firstLabel$$1_i$$238$$ = new dvt.$OutputText$($DvtAxisObjPeer$$, this.$_formatAxisLabel$(new Date($times$$1$$[0]))[0], 0, 0), (($isVert$$3$$ ? dvt.$TextUtils$.$guessTextDimensions$($firstLabel$$1_i$$238$$).$h$ : $firstLabel$$1_i$$238$$.$measureDimensions$().$w$) + this.$GetTickLabelGapSize$()) * ($times$$1$$.length - 1) > Math.abs(this.$_endCoord$ - this.$_startCoord$))) {
          this.$_step$ = this.$_getMixedFrequencyStep$(), $times$$1$$ = dvt.$TimeAxisInfo$.$_getLabelPositions$(this.$MinValue$, this.$MaxValue$, this.$_step$)
        }
      }
    }
    0 == $times$$1$$.length && ($times$$1$$ = [this.$MinValue$]);
    for($firstLabel$$1_i$$238$$ = 0;$firstLabel$$1_i$$238$$ < $times$$1$$.length;$firstLabel$$1_i$$238$$++) {
      var $date$$8_time$$3$$ = $times$$1$$[$firstLabel$$1_i$$238$$], $coord$$13$$ = this.$getCoordAt$($date$$8_time$$3$$);
      if($coord$$13$$ != $JSCompiler_alias_NULL$$) {
        var $date$$8_time$$3$$ = new Date($date$$8_time$$3$$), $label2$$1_twoLabels$$1$$ = this.$_formatAxisLabel$($date$$8_time$$3$$, $DvtAxisRenderer$$), $DvtAxisRenderer$$ = $label2$$1_twoLabels$$1$$[0], $label2$$1_twoLabels$$1$$ = $label2$$1_twoLabels$$1$$[1];
        $DvtAxisRenderer$$ != $JSCompiler_alias_NULL$$ ? ($DvtAxisDefaults$$.push({text:$DvtAxisRenderer$$, $coord$:$label2$$1_twoLabels$$1$$ != $JSCompiler_alias_NULL$$ ? $coord$$13$$ + $levelsGap$$ : $coord$$13$$}), $DvtAxisAutomation$$.push($coord$$13$$), $c1$$++) : ($DvtAxisDefaults$$.push($JSCompiler_alias_NULL$$), $DvtAxisAutomation$$.push($JSCompiler_alias_NULL$$));
        $DvtAxisKeyboardHandler$$.push($JSCompiler_alias_NULL$$);
        $scrollable$$ && $first$$2$$ && ($coord$$13$$ = this.$MinValue$ ? this.$getCoordAt$(this.$MinValue$) : $coord$$13$$);
        $first$$2$$ = $JSCompiler_alias_FALSE$$;
        $label2$$1_twoLabels$$1$$ != $JSCompiler_alias_NULL$$ ? ($DvtAxisRenderer$$ = this.$CreateLabel$($DvtAxisObjPeer$$, $label2$$1_twoLabels$$1$$, $label2$$1_twoLabels$$1$$ != $JSCompiler_alias_NULL$$ ? $coord$$13$$ - $levelsGap$$ : $coord$$13$$), $DvtAxisConstants$$.push($coord$$13$$), $isVert$$3$$ || ($isRTL$$9$$ ? $DvtAxisRenderer$$.$alignRight$() : $DvtAxisRenderer$$.$alignLeft$()), $DvtAxisEventManager$$.push($DvtAxisRenderer$$), this.$_isOneLevel$ = $JSCompiler_alias_FALSE$$, $c2$$++) : 
        ($DvtAxisEventManager$$.push($JSCompiler_alias_NULL$$), $DvtAxisConstants$$.push($JSCompiler_alias_NULL$$));
        $DvtAxisRenderer$$ = $date$$8_time$$3$$
      }
    }
    $c1$$ = this.$_skipLabelsUniform$($DvtAxisDefaults$$, $DvtAxisKeyboardHandler$$, $container$$17$$);
    if(!$scrollable$$ && 1 < $c2$$ && $c1$$ < 1.5 * $c2$$) {
      $DvtAxisKeyboardHandler$$ = $DvtAxisEventManager$$;
      $DvtAxisEventManager$$ = $JSCompiler_alias_NULL$$;
      for($DvtAxisObjPeer$$ = 0;$DvtAxisObjPeer$$ < $DvtAxisKeyboardHandler$$.length;$DvtAxisObjPeer$$++) {
        $DvtAxisKeyboardHandler$$[$DvtAxisObjPeer$$] != $JSCompiler_alias_NULL$$ && $DvtAxisKeyboardHandler$$[$DvtAxisObjPeer$$].$alignCenter$()
      }
      this.$_skipLabelsGreedy$($DvtAxisKeyboardHandler$$, this.$GetLabelDims$($DvtAxisKeyboardHandler$$, $container$$17$$), $JSCompiler_alias_FALSE$$, $isRTL$$9$$)
    }else {
      $c2$$ = this.$_skipLabelsGreedy$($DvtAxisEventManager$$, this.$GetLabelDims$($DvtAxisEventManager$$, $container$$17$$), $JSCompiler_alias_TRUE$$, $isRTL$$9$$), 0 == $c2$$ && ($DvtAxisEventManager$$ = $JSCompiler_alias_NULL$$)
    }
    $isVert$$3$$ && $DvtAxisEventManager$$ != $JSCompiler_alias_NULL$$ && this.$_skipVertLabels$($DvtAxisKeyboardHandler$$, $DvtAxisEventManager$$);
    this.$_level1Labels$ = $DvtAxisKeyboardHandler$$;
    this.$_level2Labels$ = $DvtAxisEventManager$$;
    this.$_level1Coords$ = $DvtAxisAutomation$$;
    this.$_level2Coords$ = $DvtAxisConstants$$
  };
  dvt.$TimeAxisInfo$.$_isOverlapping$ = function $dvt$$TimeAxisInfo$$$_isOverlapping$$($DvtAxisObjPeer$$, $DvtAxisKeyboardHandler$$, $DvtAxisEventManager$$, $DvtAxisDefaults$$, $DvtAxisAutomation$$) {
    return $DvtAxisEventManager$$ >= $DvtAxisObjPeer$$ && $DvtAxisEventManager$$ - $DvtAxisAutomation$$ < $DvtAxisKeyboardHandler$$ || $DvtAxisEventManager$$ < $DvtAxisObjPeer$$ && $DvtAxisDefaults$$ + $DvtAxisAutomation$$ > $DvtAxisObjPeer$$ ? $JSCompiler_alias_TRUE$$ : $JSCompiler_alias_FALSE$$
  };
  dvt.$TimeAxisInfo$.prototype.$_getLabelOverflow$ = function $dvt$$TimeAxisInfo$$$$_getLabelOverflow$$($DvtAxisObjPeer$$, $DvtAxisKeyboardHandler$$, $DvtAxisEventManager$$, $DvtAxisDefaults$$) {
    var $DvtAxisAutomation$$ = $DvtAxisObjPeer$$ - ($DvtAxisEventManager$$ ? $DvtAxisDefaults$$ ? $DvtAxisKeyboardHandler$$ : 0 : 0.5 * $DvtAxisKeyboardHandler$$);
    if($DvtAxisAutomation$$ < this.$Options$._minOverflowCoord) {
      return Math.floor($DvtAxisAutomation$$ - this.$Options$._minOverflowCoord)
    }
    $DvtAxisObjPeer$$ += $DvtAxisEventManager$$ ? $DvtAxisDefaults$$ ? 0 : $DvtAxisKeyboardHandler$$ : 0.5 * $DvtAxisKeyboardHandler$$;
    return $DvtAxisObjPeer$$ > this.$Options$._maxOverflowCoord ? Math.ceil($DvtAxisObjPeer$$ - this.$Options$._maxOverflowCoord) : 0
  };
  dvt.$TimeAxisInfo$.prototype.$_skipLabelsGreedy$ = function $dvt$$TimeAxisInfo$$$$_skipLabelsGreedy$$($DvtAxisObjPeer$$, $DvtAxisKeyboardHandler$$, $DvtAxisEventManager$$, $DvtAxisDefaults$$) {
    if(!$DvtAxisKeyboardHandler$$ || 0 >= $DvtAxisKeyboardHandler$$.length) {
      return $JSCompiler_alias_FALSE$$
    }
    for(var $DvtAxisAutomation$$ = "left" == this.$Position$ || "right" == this.$Position$, $DvtAxisConstants$$ = this.$getTickLabelHeight$(), $DvtAxisConstants$$ = $DvtAxisAutomation$$ ? 0.08 * $DvtAxisConstants$$ : 0.24 * $DvtAxisConstants$$, $DvtAxisRenderer$$ = 0, $pointA1$$3$$, $pointA2$$3$$, $label$$37$$, $availWidth$$9$$ = Math.abs(this.$_endCoord$ - this.$_startCoord$), $j$$38$$ = 0;$j$$38$$ < $DvtAxisKeyboardHandler$$.length;$j$$38$$++) {
      if(this.$_level2Overflow$.push(0), $DvtAxisObjPeer$$[$j$$38$$] != $JSCompiler_alias_NULL$$) {
        $label$$37$$ = $DvtAxisObjPeer$$[$j$$38$$];
        var $labelLength$$1_overflow$$2$$ = dvt.$TextUtils$.$getTextWidth$($label$$37$$);
        $DvtAxisKeyboardHandler$$[$j$$38$$].$w$ > $availWidth$$9$$ ? $DvtAxisObjPeer$$[$j$$38$$] = $JSCompiler_alias_NULL$$ : ($labelLength$$1_overflow$$2$$ = this.$_getLabelOverflow$($label$$37$$.$getX$(), $labelLength$$1_overflow$$2$$, $DvtAxisEventManager$$, $DvtAxisDefaults$$), this.$_level2Overflow$[$j$$38$$] = $labelLength$$1_overflow$$2$$, 0 != $labelLength$$1_overflow$$2$$ && ($label$$37$$.$setX$($label$$37$$.$getX$() - $labelLength$$1_overflow$$2$$), $DvtAxisKeyboardHandler$$[$j$$38$$].x -= 
        $labelLength$$1_overflow$$2$$))
      }
    }
    for($j$$38$$ = 0;$j$$38$$ < $DvtAxisKeyboardHandler$$.length;$j$$38$$++) {
      $DvtAxisKeyboardHandler$$[$j$$38$$] != $JSCompiler_alias_NULL$$ && ($DvtAxisAutomation$$ ? ($DvtAxisEventManager$$ = $DvtAxisKeyboardHandler$$[$j$$38$$].y, $DvtAxisDefaults$$ = $DvtAxisKeyboardHandler$$[$j$$38$$].y + $DvtAxisKeyboardHandler$$[$j$$38$$].$h$) : ($DvtAxisEventManager$$ = $DvtAxisKeyboardHandler$$[$j$$38$$].x, $DvtAxisDefaults$$ = $DvtAxisKeyboardHandler$$[$j$$38$$].x + $DvtAxisKeyboardHandler$$[$j$$38$$].$w$), $pointA1$$3$$ != $JSCompiler_alias_NULL$$ && ($pointA2$$3$$ != $JSCompiler_alias_NULL$$ && 
      dvt.$TimeAxisInfo$.$_isOverlapping$($pointA1$$3$$, $pointA2$$3$$, $DvtAxisEventManager$$, $DvtAxisDefaults$$, $DvtAxisConstants$$)) && ($DvtAxisObjPeer$$[$j$$38$$] = $JSCompiler_alias_NULL$$), $DvtAxisObjPeer$$[$j$$38$$] != $JSCompiler_alias_NULL$$ && ($pointA1$$3$$ = $DvtAxisEventManager$$, $pointA2$$3$$ = $DvtAxisDefaults$$, $DvtAxisRenderer$$++))
    }
    return $DvtAxisRenderer$$
  };
  dvt.$TimeAxisInfo$.prototype.$_skipLabelsUniform$ = function $dvt$$TimeAxisInfo$$$$_skipLabelsUniform$$($DvtAxisObjPeer$$, $DvtAxisKeyboardHandler$$, $DvtAxisEventManager$$) {
    function $DvtAxisDefaults$$($DvtAxisObjPeer$$) {
      if($DvtAxisConstants$$[$DvtAxisObjPeer$$] == $JSCompiler_alias_NULL$$) {
        if($DvtAxisAutomation$$[$DvtAxisObjPeer$$].label = $_this$$.$CreateLabel$($DvtAxisEventManager$$.$getCtx$(), $DvtAxisAutomation$$[$DvtAxisObjPeer$$].text, $DvtAxisAutomation$$[$DvtAxisObjPeer$$].$coord$), $DvtAxisConstants$$[$DvtAxisObjPeer$$] = $DvtAxisAutomation$$[$DvtAxisObjPeer$$].label.$measureDimensions$($DvtAxisEventManager$$), $DvtAxisConstants$$[$DvtAxisObjPeer$$].$w$ > $DvtAxisRenderer$$) {
          $DvtAxisAutomation$$[$DvtAxisObjPeer$$].label = $JSCompiler_alias_NULL$$, $DvtAxisConstants$$[$DvtAxisObjPeer$$].$w$ = 0, $DvtAxisConstants$$[$DvtAxisObjPeer$$].$h$ = 0
        }else {
          var $DvtAxisKeyboardHandler$$ = $_this$$.$_getLabelOverflow$($DvtAxisAutomation$$[$DvtAxisObjPeer$$].$coord$, $DvtAxisConstants$$[$DvtAxisObjPeer$$].$w$, $JSCompiler_alias_FALSE$$, $JSCompiler_alias_FALSE$$);
          0 != $DvtAxisKeyboardHandler$$ && ($DvtAxisAutomation$$[$DvtAxisObjPeer$$].$coord$ -= $DvtAxisKeyboardHandler$$, $DvtAxisConstants$$[$DvtAxisObjPeer$$].x -= $DvtAxisKeyboardHandler$$, $DvtAxisAutomation$$[$DvtAxisObjPeer$$].label.$setX$($DvtAxisAutomation$$[$DvtAxisObjPeer$$].label.$getX$() - $DvtAxisKeyboardHandler$$), $_this$$.$_level1Overflow$[$DvtAxisObjPeer$$] = $DvtAxisKeyboardHandler$$)
        }
      }
      return $isVert$$5$$ ? $DvtAxisConstants$$[$DvtAxisObjPeer$$].$h$ : $DvtAxisConstants$$[$DvtAxisObjPeer$$].$w$
    }
    for(var $DvtAxisAutomation$$ = [], $DvtAxisConstants$$ = [], $DvtAxisRenderer$$ = Math.abs(this.$_endCoord$ - this.$_startCoord$), $bOverlaps$$1_j$$39_totalWidth$$2$$ = 0;$bOverlaps$$1_j$$39_totalWidth$$2$$ < $DvtAxisObjPeer$$.length;$bOverlaps$$1_j$$39_totalWidth$$2$$++) {
      $DvtAxisObjPeer$$[$bOverlaps$$1_j$$39_totalWidth$$2$$] != $JSCompiler_alias_NULL$$ && ($DvtAxisAutomation$$.push($DvtAxisObjPeer$$[$bOverlaps$$1_j$$39_totalWidth$$2$$]), $DvtAxisConstants$$.push($JSCompiler_alias_NULL$$), this.$_level1Overflow$.push(0))
    }
    for(var $isVert$$5$$ = "left" == this.$Position$ || "right" == this.$Position$, $_this$$ = this, $bOverlaps$$1_j$$39_totalWidth$$2$$ = ($DvtAxisDefaults$$(0) + this.$GetTickLabelGapSize$()) * ($DvtAxisAutomation$$.length - 1), $count$$11_skip$$ = 0 < $DvtAxisRenderer$$ ? Math.ceil($bOverlaps$$1_j$$39_totalWidth$$2$$ / $DvtAxisRenderer$$) - 1 : 0, $bOverlaps$$1_j$$39_totalWidth$$2$$ = $JSCompiler_alias_TRUE$$;$bOverlaps$$1_j$$39_totalWidth$$2$$;) {
      for($bOverlaps$$1_j$$39_totalWidth$$2$$ = 0;$bOverlaps$$1_j$$39_totalWidth$$2$$ < $DvtAxisAutomation$$.length;$bOverlaps$$1_j$$39_totalWidth$$2$$++) {
        0 == $bOverlaps$$1_j$$39_totalWidth$$2$$ % ($count$$11_skip$$ + 1) ? ($DvtAxisDefaults$$($bOverlaps$$1_j$$39_totalWidth$$2$$), $DvtAxisAutomation$$[$bOverlaps$$1_j$$39_totalWidth$$2$$].$skipped$ = $JSCompiler_alias_FALSE$$) : $DvtAxisAutomation$$[$bOverlaps$$1_j$$39_totalWidth$$2$$].$skipped$ = $JSCompiler_alias_TRUE$$
      }
      $bOverlaps$$1_j$$39_totalWidth$$2$$ = this.$IsOverlapping$($DvtAxisConstants$$, $count$$11_skip$$);
      $count$$11_skip$$++
    }
    for($bOverlaps$$1_j$$39_totalWidth$$2$$ = $count$$11_skip$$ = 0;$bOverlaps$$1_j$$39_totalWidth$$2$$ < $DvtAxisObjPeer$$.length;$bOverlaps$$1_j$$39_totalWidth$$2$$++) {
      $DvtAxisObjPeer$$[$bOverlaps$$1_j$$39_totalWidth$$2$$] != $JSCompiler_alias_NULL$$ && !$DvtAxisObjPeer$$[$bOverlaps$$1_j$$39_totalWidth$$2$$].$skipped$ && ($DvtAxisKeyboardHandler$$[$bOverlaps$$1_j$$39_totalWidth$$2$$] = $DvtAxisObjPeer$$[$bOverlaps$$1_j$$39_totalWidth$$2$$].label, $count$$11_skip$$++)
    }
    return $count$$11_skip$$
  };
  dvt.$TimeAxisInfo$.prototype.$_skipVertLabels$ = function $dvt$$TimeAxisInfo$$$$_skipVertLabels$$($DvtAxisObjPeer$$, $DvtAxisKeyboardHandler$$) {
    function $DvtAxisEventManager$$($DvtAxisObjPeer$$, $DvtAxisKeyboardHandler$$) {
      return dvt.$TimeAxisInfo$.$_isOverlapping$($DvtAxisObjPeer$$.y, $DvtAxisObjPeer$$.y + $DvtAxisObjPeer$$.$h$, $DvtAxisKeyboardHandler$$.y, $DvtAxisKeyboardHandler$$.y + $DvtAxisKeyboardHandler$$.$h$, $DvtAxisDefaults$$)
    }
    for(var $DvtAxisDefaults$$ = 0.08 * this.$getTickLabelHeight$(), $DvtAxisAutomation$$ = $JSCompiler_alias_NULL$$, $DvtAxisConstants$$ = $JSCompiler_alias_FALSE$$, $DvtAxisRenderer$$ = 0;$DvtAxisRenderer$$ < $DvtAxisObjPeer$$.length;$DvtAxisRenderer$$++) {
      if($DvtAxisObjPeer$$[$DvtAxisRenderer$$] && $DvtAxisKeyboardHandler$$[$DvtAxisRenderer$$]) {
        $DvtAxisObjPeer$$[$DvtAxisRenderer$$].$alignTop$();
        $DvtAxisKeyboardHandler$$[$DvtAxisRenderer$$].$alignBottom$();
        if($DvtAxisAutomation$$ && $DvtAxisEventManager$$($DvtAxisAutomation$$, $DvtAxisKeyboardHandler$$[$DvtAxisRenderer$$].$measureDimensions$())) {
          $DvtAxisConstants$$ = $JSCompiler_alias_TRUE$$;
          break
        }
        $DvtAxisAutomation$$ = $DvtAxisObjPeer$$[$DvtAxisRenderer$$].$measureDimensions$()
      }else {
        if($DvtAxisObjPeer$$[$DvtAxisRenderer$$] || $DvtAxisKeyboardHandler$$[$DvtAxisRenderer$$]) {
          var $label$$38_lastLv2Dims$$ = $DvtAxisObjPeer$$[$DvtAxisRenderer$$] ? $DvtAxisObjPeer$$[$DvtAxisRenderer$$] : $DvtAxisKeyboardHandler$$[$DvtAxisRenderer$$];
          if($DvtAxisAutomation$$ && $DvtAxisEventManager$$($DvtAxisAutomation$$, $label$$38_lastLv2Dims$$.$measureDimensions$())) {
            $DvtAxisConstants$$ = $JSCompiler_alias_TRUE$$;
            break
          }
          $DvtAxisAutomation$$ = $label$$38_lastLv2Dims$$.$measureDimensions$()
        }
      }
    }
    if($DvtAxisConstants$$) {
      for(var $label$$38_lastLv2Dims$$ = $DvtAxisConstants$$ = $DvtAxisAutomation$$ = $JSCompiler_alias_NULL$$, $dims$$30$$, $DvtAxisRenderer$$ = 0;$DvtAxisRenderer$$ < $DvtAxisObjPeer$$.length;$DvtAxisRenderer$$++) {
        $DvtAxisKeyboardHandler$$[$DvtAxisRenderer$$] ? ($DvtAxisObjPeer$$[$DvtAxisRenderer$$] = $JSCompiler_alias_NULL$$, $DvtAxisKeyboardHandler$$[$DvtAxisRenderer$$].$alignMiddle$(), $dims$$30$$ = $DvtAxisKeyboardHandler$$[$DvtAxisRenderer$$].$measureDimensions$(), $DvtAxisConstants$$ && $DvtAxisEventManager$$($DvtAxisConstants$$, $dims$$30$$) && ($DvtAxisObjPeer$$[$DvtAxisAutomation$$] = $JSCompiler_alias_NULL$$), $label$$38_lastLv2Dims$$ = $dims$$30$$) : $DvtAxisObjPeer$$[$DvtAxisRenderer$$] && 
        ($dims$$30$$ = $DvtAxisObjPeer$$[$DvtAxisRenderer$$].$measureDimensions$(), $label$$38_lastLv2Dims$$ && $DvtAxisEventManager$$($label$$38_lastLv2Dims$$, $dims$$30$$) ? $DvtAxisObjPeer$$[$DvtAxisRenderer$$] = $JSCompiler_alias_NULL$$ : ($DvtAxisConstants$$ = $dims$$30$$, $DvtAxisAutomation$$ = $DvtAxisRenderer$$))
      }
    }
  };
  dvt.$TimeAxisInfo$.prototype.$getLabels$ = function $dvt$$TimeAxisInfo$$$$getLabels$$($DvtAxisObjPeer$$, $DvtAxisKeyboardHandler$$) {
    if($DvtAxisKeyboardHandler$$ && 1 < $DvtAxisKeyboardHandler$$) {
      return $JSCompiler_alias_NULL$$
    }
    this.$_level1Labels$ || this.$_generateLabels$($DvtAxisObjPeer$$);
    return 1 == $DvtAxisKeyboardHandler$$ ? this.$_level2Labels$ : this.$_level1Labels$
  };
  dvt.$TimeAxisInfo$.prototype.$getMajorTickCoords$ = function $dvt$$TimeAxisInfo$$$$getMajorTickCoords$$() {
    var $DvtAxisObjPeer$$ = [];
    if(this.$_isOneLevel$) {
      for(var $DvtAxisKeyboardHandler$$ = 0;$DvtAxisKeyboardHandler$$ < this.$_level1Coords$.length;$DvtAxisKeyboardHandler$$++) {
        this.$_level1Coords$[$DvtAxisKeyboardHandler$$] != $JSCompiler_alias_NULL$$ && this.$_level1Labels$[$DvtAxisKeyboardHandler$$] != $JSCompiler_alias_NULL$$ && $DvtAxisObjPeer$$.push(this.$_level1Coords$[$DvtAxisKeyboardHandler$$])
      }
    }else {
      for($DvtAxisKeyboardHandler$$ = 1;$DvtAxisKeyboardHandler$$ < this.$_level2Coords$.length;$DvtAxisKeyboardHandler$$++) {
        this.$_level2Coords$[$DvtAxisKeyboardHandler$$] != $JSCompiler_alias_NULL$$ && $DvtAxisObjPeer$$.push(this.$_level2Coords$[$DvtAxisKeyboardHandler$$])
      }
    }
    return $DvtAxisObjPeer$$
  };
  dvt.$TimeAxisInfo$.prototype.$getMinorTickCoords$ = function $dvt$$TimeAxisInfo$$$$getMinorTickCoords$$() {
    if(this.$_isOneLevel$) {
      return[]
    }
    for(var $DvtAxisObjPeer$$ = [], $DvtAxisKeyboardHandler$$ = 0;$DvtAxisKeyboardHandler$$ < this.$_level1Coords$.length;$DvtAxisKeyboardHandler$$++) {
      this.$_level1Coords$[$DvtAxisKeyboardHandler$$] != $JSCompiler_alias_NULL$$ && this.$_level1Labels$[$DvtAxisKeyboardHandler$$] != $JSCompiler_alias_NULL$$ && $DvtAxisObjPeer$$.push(this.$_level1Coords$[$DvtAxisKeyboardHandler$$])
    }
    return $DvtAxisObjPeer$$
  };
  dvt.$TimeAxisInfo$.prototype.$getUnboundedValueAt$ = function $dvt$$TimeAxisInfo$$$$getUnboundedValueAt$$($DvtAxisObjPeer$$) {
    if($DvtAxisObjPeer$$ == $JSCompiler_alias_NULL$$) {
      return $JSCompiler_alias_NULL$$
    }
    $DvtAxisObjPeer$$ = ($DvtAxisObjPeer$$ - this.$_startCoord$) / (this.$_endCoord$ - this.$_startCoord$);
    if(this.$_skipGaps$) {
      var $DvtAxisKeyboardHandler$$ = this.$_timeToIndex$(this.$MinValue$);
      return this.$_indexToTime$($DvtAxisKeyboardHandler$$ + $DvtAxisObjPeer$$ * (this.$_timeToIndex$(this.$MaxValue$) - $DvtAxisKeyboardHandler$$))
    }
    return this.$MinValue$ + $DvtAxisObjPeer$$ * (this.$MaxValue$ - this.$MinValue$)
  };
  dvt.$TimeAxisInfo$.prototype.$getUnboundedCoordAt$ = function $dvt$$TimeAxisInfo$$$$getUnboundedCoordAt$$($DvtAxisObjPeer$$) {
    if($DvtAxisObjPeer$$ == $JSCompiler_alias_NULL$$) {
      return $JSCompiler_alias_NULL$$
    }
    if(this.$_skipGaps$) {
      var $DvtAxisKeyboardHandler$$ = this.$_timeToIndex$(this.$MinValue$);
      $DvtAxisObjPeer$$ = (this.$_timeToIndex$($DvtAxisObjPeer$$) - $DvtAxisKeyboardHandler$$) / (this.$_timeToIndex$(this.$MaxValue$) - $DvtAxisKeyboardHandler$$)
    }else {
      $DvtAxisObjPeer$$ = ($DvtAxisObjPeer$$ - this.$MinValue$) / (this.$MaxValue$ - this.$MinValue$)
    }
    return this.$_startCoord$ + $DvtAxisObjPeer$$ * (this.$_endCoord$ - this.$_startCoord$)
  };
  dvt.$TimeAxisInfo$.prototype.$linearToActual$ = function $dvt$$TimeAxisInfo$$$$linearToActual$$($DvtAxisObjPeer$$) {
    return $DvtAxisObjPeer$$ == $JSCompiler_alias_NULL$$ ? $JSCompiler_alias_NULL$$ : this.$_skipGaps$ ? this.$_indexToTime$($DvtAxisObjPeer$$) : $DvtAxisObjPeer$$
  };
  dvt.$TimeAxisInfo$.prototype.$actualToLinear$ = function $dvt$$TimeAxisInfo$$$$actualToLinear$$($DvtAxisObjPeer$$) {
    return $DvtAxisObjPeer$$ == $JSCompiler_alias_NULL$$ ? $JSCompiler_alias_NULL$$ : this.$_skipGaps$ ? this.$_timeToIndex$($DvtAxisObjPeer$$) : $DvtAxisObjPeer$$
  };
  dvt.$TimeAxisInfo$.prototype.$_timeToIndex$ = function $dvt$$TimeAxisInfo$$$$_timeToIndex$$($DvtAxisObjPeer$$) {
    for(var $DvtAxisKeyboardHandler$$ = this.$_groups$.length, $DvtAxisEventManager$$ = 0;$DvtAxisEventManager$$ < this.$_groups$.length;$DvtAxisEventManager$$++) {
      if($DvtAxisObjPeer$$ <= this.$_groups$[$DvtAxisEventManager$$]) {
        $DvtAxisKeyboardHandler$$ = $DvtAxisEventManager$$;
        break
      }
    }
    var $DvtAxisEventManager$$ = $DvtAxisKeyboardHandler$$ - 1, $DvtAxisDefaults$$ = this.$_groups$[$DvtAxisEventManager$$] !== $JSCompiler_alias_VOID$$ ? this.$_groups$[$DvtAxisEventManager$$] : this.$_groups$[0] - this.$_averageInterval$;
    return $DvtAxisEventManager$$ + ($DvtAxisObjPeer$$ - $DvtAxisDefaults$$) / ((this.$_groups$[$DvtAxisKeyboardHandler$$] !== $JSCompiler_alias_VOID$$ ? this.$_groups$[$DvtAxisKeyboardHandler$$] : this.$_groups$[this.$_groups$.length - 1] + this.$_averageInterval$) - $DvtAxisDefaults$$)
  };
  dvt.$TimeAxisInfo$.prototype.$_indexToTime$ = function $dvt$$TimeAxisInfo$$$$_indexToTime$$($DvtAxisObjPeer$$) {
    var $DvtAxisKeyboardHandler$$ = Math.min(Math.max(Math.ceil($DvtAxisObjPeer$$), 0), this.$_groups$.length), $DvtAxisEventManager$$ = $DvtAxisKeyboardHandler$$ - 1, $DvtAxisDefaults$$ = this.$_groups$[$DvtAxisEventManager$$] !== $JSCompiler_alias_VOID$$ ? this.$_groups$[$DvtAxisEventManager$$] : this.$_groups$[0] - this.$_averageInterval$;
    return $DvtAxisDefaults$$ + ($DvtAxisObjPeer$$ - $DvtAxisEventManager$$) * ((this.$_groups$[$DvtAxisKeyboardHandler$$] !== $JSCompiler_alias_VOID$$ ? this.$_groups$[$DvtAxisKeyboardHandler$$] : this.$_groups$[this.$_groups$.length - 1] + this.$_averageInterval$) - $DvtAxisDefaults$$)
  };
  dvt.$TimeAxisInfo$.prototype.$getGroupWidth$ = function $dvt$$TimeAxisInfo$$$$getGroupWidth$$() {
    return this.$_skipGaps$ ? Math.abs(this.$getUnboundedCoordAt$(this.$_indexToTime$(1)) - this.$getUnboundedCoordAt$(this.$_indexToTime$(0))) : Math.abs(this.$getUnboundedCoordAt$(this.$MinValue$ + this.$_averageInterval$) - this.$getUnboundedCoordAt$(this.$MinValue$))
  };
  dvt.$TimeAxisInfo$.prototype.$getMinimumExtent$ = function $dvt$$TimeAxisInfo$$$$getMinimumExtent$$() {
    return this.$_skipGaps$ ? 1 : this.$_mixedFrequency$ ? Math.min(this.$_timeRange$ / 8, this.$_averageInterval$) : this.$_averageInterval$
  };
  dvt.$TimeAxisInfo$.prototype.$getStartOverflow$ = function $dvt$$TimeAxisInfo$$$$getStartOverflow$$() {
    return("top" == this.$Position$ || "bottom" == this.$Position$) && dvt.$Agent$.$isRightToLeft$(this.$getCtx$()) ? this.$EndOverflow$ : this.$StartOverflow$
  };
  dvt.$TimeAxisInfo$.prototype.$getEndOverflow$ = function $dvt$$TimeAxisInfo$$$$getEndOverflow$$() {
    return("top" == this.$Position$ || "bottom" == this.$Position$) && dvt.$Agent$.$isRightToLeft$(this.$getCtx$()) ? this.$StartOverflow$ : this.$EndOverflow$
  }
})();

  return dvt;
});

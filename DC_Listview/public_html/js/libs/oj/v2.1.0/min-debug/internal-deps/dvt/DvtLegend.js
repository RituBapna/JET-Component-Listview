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
  function $DvtLegendObjPeer$$($DvtLegendObjPeer$$, $DvtLegendKeyboardHandler$$, $DvtLegendEventManager$$, $DvtLegendDefaults$$, $DvtLegendAutomation$$, $DvtLegendRenderer$$) {
    this.Init($DvtLegendObjPeer$$, $DvtLegendKeyboardHandler$$, $DvtLegendEventManager$$, $DvtLegendDefaults$$, $DvtLegendAutomation$$, $DvtLegendRenderer$$)
  }
  function $DvtLegendKeyboardHandler$$($DvtLegendObjPeer$$, $DvtLegendKeyboardHandler$$) {
    this.Init($DvtLegendObjPeer$$, $DvtLegendKeyboardHandler$$)
  }
  function $DvtLegendEventManager$$($DvtLegendObjPeer$$) {
    this.Init($DvtLegendObjPeer$$.$getCtx$(), $DvtLegendObjPeer$$.$processEvent$, $DvtLegendObjPeer$$);
    this.$_legend$ = $DvtLegendObjPeer$$
  }
  function $DvtLegendDefaults$$() {
    this.Init({skyros:$DvtLegendDefaults$$.$VERSION_1$, alta:$DvtLegendDefaults$$.$SKIN_ALTA$, next:$DvtLegendDefaults$$.$SKIN_NEXT$})
  }
  function $DvtLegendAutomation$$($DvtLegendObjPeer$$) {
    this.$_legend$ = $DvtLegendObjPeer$$;
    this.$_options$ = this.$_legend$.$getOptions$()
  }
  dvt.$Legend$ = $JSCompiler_emptyFn$$();
  dvt.$Obj$.$createSubclass$(dvt.$Legend$, dvt.$BaseComponent$);
  dvt.$Legend$.newInstance = function $dvt$$Legend$$newInstance$($DvtLegendObjPeer$$, $DvtLegendKeyboardHandler$$, $DvtLegendEventManager$$) {
    var $DvtLegendDefaults$$ = new dvt.$Legend$;
    $DvtLegendDefaults$$.Init($DvtLegendObjPeer$$, $DvtLegendKeyboardHandler$$, $DvtLegendEventManager$$);
    return $DvtLegendDefaults$$
  };
  dvt.$Legend$.$getDefaults$ = function $dvt$$Legend$$$getDefaults$$($DvtLegendObjPeer$$) {
    return(new $DvtLegendDefaults$$).$getDefaults$($DvtLegendObjPeer$$)
  };
  dvt.$Legend$.prototype.Init = function $dvt$$Legend$$$Init$($DvtLegendObjPeer$$, $DvtLegendKeyboardHandler$$, $DvtLegendAutomation$$) {
    dvt.$Legend$.$superclass$.Init.call(this, $DvtLegendObjPeer$$, $DvtLegendKeyboardHandler$$, $DvtLegendAutomation$$);
    this.setId("legend1000" + Math.floor(1E9 * Math.random()));
    this.$Defaults$ = new $DvtLegendDefaults$$;
    this.$_eventManager$ = new $DvtLegendEventManager$$(this);
    this.$_eventManager$.$addListeners$(this);
    this.$_peers$ = [];
    this.$_navigablePeers$ = [];
    this.$_bounds$ = $JSCompiler_alias_NULL$$;
    this.$_titles$ = []
  };
  dvt.$Legend$.prototype.$SetOptions$ = function $dvt$$Legend$$$$SetOptions$$($DvtLegendObjPeer$$) {
    $DvtLegendObjPeer$$ ? (this.$Options$ = this.$Defaults$.$calcOptions$($DvtLegendObjPeer$$), this.$_transferVisibilityProperties$(this.$Options$.sections)) : this.$Options$ || (this.$Options$ = this.$GetDefaults$())
  };
  dvt.$Legend$.prototype.$getPreferredSize$ = function $dvt$$Legend$$$$getPreferredSize$$($DvtLegendObjPeer$$, $DvtLegendKeyboardHandler$$, $DvtLegendEventManager$$) {
    this.$SetOptions$($DvtLegendObjPeer$$);
    this.$getOptions$().isLayout = $JSCompiler_alias_TRUE$$;
    $DvtLegendObjPeer$$ = $DvtLegendRenderer$$.$render$(this, new dvt.$Rectangle$(0, 0, $DvtLegendKeyboardHandler$$, $DvtLegendEventManager$$));
    this.$getOptions$().isLayout = $JSCompiler_alias_FALSE$$;
    return new dvt.$Dimension$($DvtLegendObjPeer$$.$w$, $DvtLegendObjPeer$$.$h$)
  };
  dvt.$Legend$.prototype.$render$ = function $dvt$$Legend$$$$render$$($DvtLegendObjPeer$$, $DvtLegendEventManager$$, $DvtLegendDefaults$$) {
    this.$SetOptions$($DvtLegendObjPeer$$);
    !isNaN($DvtLegendEventManager$$) && !isNaN($DvtLegendDefaults$$) && (this.$Width$ = $DvtLegendEventManager$$, this.$Height$ = $DvtLegendDefaults$$);
    this.$getOptions$().isLayout = $JSCompiler_alias_FALSE$$;
    this.$removeChildren$();
    this.$_peers$ = [];
    this.$_navigablePeers$ = [];
    this.$_bounds$ = $JSCompiler_alias_NULL$$;
    this.$_titles$ = [];
    dvt.$Agent$.$isTouchDevice$() || this.$_eventManager$.$setKeyboardHandler$(new $DvtLegendKeyboardHandler$$(this.$_eventManager$, this));
    this.$UpdateAriaAttributes$();
    this.$_contentDimensions$ = $DvtLegendRenderer$$.$render$(this, new dvt.$Rectangle$(0, 0, this.$Width$, this.$Height$));
    ($DvtLegendObjPeer$$ = this.$getOptions$().highlightedCategories) && 0 < $DvtLegendObjPeer$$.length && this.$highlight$($DvtLegendObjPeer$$);
    return this.$_contentDimensions$
  };
  dvt.$Legend$.prototype.$highlight$ = function $dvt$$Legend$$$$highlight$$($DvtLegendObjPeer$$) {
    this.$getOptions$().highlightedCategories = $DvtLegendObjPeer$$ && 0 < $DvtLegendObjPeer$$.length ? $DvtLegendObjPeer$$.slice() : $JSCompiler_alias_NULL$$;
    dvt.$CategoryRolloverHandler$.$highlight$($DvtLegendObjPeer$$, this.$_peers$, $JSCompiler_alias_TRUE$$)
  };
  dvt.$Legend$.prototype.$processEvent$ = function $dvt$$Legend$$$$processEvent$$($DvtLegendObjPeer$$, $DvtLegendKeyboardHandler$$) {
    var $DvtLegendEventManager$$ = $DvtLegendObjPeer$$.type;
    if("categoryHighlight" == $DvtLegendEventManager$$ && "dim" == this.$getOptions$().hoverBehavior) {
      var $DvtLegendDefaults$$ = this.$_peers$;
      this != $DvtLegendKeyboardHandler$$ && this.$highlight$($DvtLegendObjPeer$$.categories);
      for(var $DvtLegendAutomation$$ = 0;$DvtLegendAutomation$$ < $DvtLegendDefaults$$.length;$DvtLegendAutomation$$++) {
        if($DvtLegendDefaults$$[$DvtLegendAutomation$$].getId() == $DvtLegendObjPeer$$.categories) {
          this.$container$.scrollIntoView($DvtLegendDefaults$$[$DvtLegendAutomation$$].$getDisplayables$()[0]);
          break
        }
      }
    }
    (this == $DvtLegendKeyboardHandler$$ || "adfShowPopup" == $DvtLegendEventManager$$ || "adfHidePopup" == $DvtLegendEventManager$$) && this.dispatchEvent($DvtLegendObjPeer$$)
  };
  dvt.$Legend$.prototype.$getEventManager$ = $JSCompiler_get$$("$_eventManager$");
  dvt.$Legend$.prototype.$__registerObject$ = function $dvt$$Legend$$$$__registerObject$$($DvtLegendObjPeer$$) {
    if($DvtLegendObjPeer$$.$getDisplayables$()[0] instanceof dvt.$Button$) {
      this.$_navigablePeers$.push($DvtLegendObjPeer$$)
    }else {
      var $DvtLegendKeyboardHandler$$ = this.$getOptions$().hideAndShowBehavior;
      ($DvtLegendObjPeer$$.$getDatatip$() != $JSCompiler_alias_NULL$$ || $DvtLegendObjPeer$$.$getAction$() != $JSCompiler_alias_NULL$$ || $DvtLegendObjPeer$$.$isDrillable$() || "none" != $DvtLegendKeyboardHandler$$ && "off" != $DvtLegendKeyboardHandler$$) && this.$_navigablePeers$.push($DvtLegendObjPeer$$);
      this.$_peers$.push($DvtLegendObjPeer$$)
    }
  };
  dvt.$Legend$.prototype.$destroy$ = function $dvt$$Legend$$$$destroy$$() {
    this.$_eventManager$ && (this.$_eventManager$.$removeListeners$(this), this.$_eventManager$.$destroy$(), this.$_eventManager$ = $JSCompiler_alias_NULL$$);
    dvt.$Legend$.$superclass$.$destroy$.call(this)
  };
  dvt.$Legend$.prototype.$__setBounds$ = $JSCompiler_set$$("$_bounds$");
  dvt.$Legend$.prototype.$__registerTitle$ = function $dvt$$Legend$$$$__registerTitle$$($DvtLegendObjPeer$$) {
    this.$_titles$.push($DvtLegendObjPeer$$)
  };
  dvt.$Legend$.prototype.$getAutomation$ = function $dvt$$Legend$$$$getAutomation$$() {
    return new $DvtLegendAutomation$$(this)
  };
  dvt.$Legend$.prototype.$getKeyboardFocus$ = function $dvt$$Legend$$$$getKeyboardFocus$$() {
    return this.$_eventManager$ != $JSCompiler_alias_NULL$$ ? this.$_eventManager$.$getFocus$() : $JSCompiler_alias_NULL$$
  };
  dvt.$Legend$.prototype.$setKeyboardFocus$ = function $dvt$$Legend$$$$setKeyboardFocus$$($DvtLegendObjPeer$$, $DvtLegendKeyboardHandler$$) {
    if(this.$_eventManager$ != $JSCompiler_alias_NULL$$) {
      for(var $DvtLegendEventManager$$ = this.$_navigablePeers$, $DvtLegendDefaults$$ = 0;$DvtLegendDefaults$$ < $DvtLegendEventManager$$.length;$DvtLegendDefaults$$++) {
        if($DvtLegendEventManager$$[$DvtLegendDefaults$$].getId() == $DvtLegendObjPeer$$.getId()) {
          this.$_eventManager$.$setFocusObj$($DvtLegendEventManager$$[$DvtLegendDefaults$$]);
          $DvtLegendKeyboardHandler$$ && $DvtLegendEventManager$$[$DvtLegendDefaults$$].$showKeyboardFocusEffect$();
          break
        }
      }
      if($DvtLegendEventManager$$ = this.$getKeyboardFocus$()) {
        $DvtLegendDefaults$$ = $DvtLegendEventManager$$.$getDisplayables$()[0], $DvtLegendDefaults$$.$setAriaProperty$("label", $DvtLegendEventManager$$.$getAriaLabel$()), this.$getCtx$().$setActiveElement$($DvtLegendDefaults$$)
      }
    }
  };
  dvt.$Legend$.prototype.$getDimensions$ = function $dvt$$Legend$$$$getDimensions$$($DvtLegendObjPeer$$) {
    var $DvtLegendKeyboardHandler$$ = new dvt.$Rectangle$(0, 0, this.$Width$, this.$Height$);
    return!$DvtLegendObjPeer$$ || $DvtLegendObjPeer$$ === this ? $DvtLegendKeyboardHandler$$ : this.$ConvertCoordSpaceRect$($DvtLegendKeyboardHandler$$, $DvtLegendObjPeer$$)
  };
  dvt.$Legend$.prototype.$getContentDimensions$ = function $dvt$$Legend$$$$getContentDimensions$$($DvtLegendObjPeer$$) {
    return!$DvtLegendObjPeer$$ || $DvtLegendObjPeer$$ === this ? this.$_contentDimensions$ : this.$ConvertCoordSpaceRect$(this.$_contentDimensions$, $DvtLegendObjPeer$$)
  };
  dvt.$Legend$.prototype.$GetComponentDescription$ = function $dvt$$Legend$$$$GetComponentDescription$$() {
    return dvt.$Bundle$.$getTranslatedString$(dvt.$Bundle$.$UTIL_PREFIX$, "LEGEND")
  };
  dvt.$Legend$.prototype.$_transferVisibilityProperties$ = function $dvt$$Legend$$$$_transferVisibilityProperties$$($DvtLegendObjPeer$$) {
    if($DvtLegendObjPeer$$ && !(0 >= $DvtLegendObjPeer$$.length)) {
      for(var $DvtLegendKeyboardHandler$$ = this.$getOptions$().hiddenCategories, $DvtLegendEventManager$$ = 0;$DvtLegendEventManager$$ < $DvtLegendObjPeer$$.length;$DvtLegendEventManager$$++) {
        var $DvtLegendDefaults$$ = $DvtLegendObjPeer$$[$DvtLegendEventManager$$];
        $DvtLegendDefaults$$.sections && ($DvtLegendKeyboardHandler$$ = this.$_transferVisibilityProperties$($DvtLegendDefaults$$.sections));
        if(($DvtLegendDefaults$$ = $DvtLegendDefaults$$.items) && !(0 >= $DvtLegendDefaults$$.length)) {
          for(var $DvtLegendAutomation$$ = 0;$DvtLegendAutomation$$ < $DvtLegendDefaults$$.length;$DvtLegendAutomation$$++) {
            var $item$$20$$ = $DvtLegendDefaults$$[$DvtLegendAutomation$$], $itemCategory$$ = $DvtLegendRenderer$$.$getItemCategory$($item$$20$$);
            "hidden" == $item$$20$$.categoryVisibility && 0 > dvt.$ArrayUtils$.$getIndex$($DvtLegendKeyboardHandler$$, $itemCategory$$) && $DvtLegendKeyboardHandler$$.push($itemCategory$$);
            $item$$20$$.categoryVisibility = $JSCompiler_alias_NULL$$
          }
        }
      }
    }
  };
  dvt.$Legend$.prototype.$UpdateAriaAttributes$ = function $dvt$$Legend$$$$UpdateAriaAttributes$$() {
    if(this.$IsParentRoot$()) {
      var $DvtLegendObjPeer$$ = this.$getOptions$(), $DvtLegendKeyboardHandler$$ = $DvtLegendObjPeer$$.hideAndShowBehavior;
      if("off" != $DvtLegendKeyboardHandler$$ && "none" != $DvtLegendKeyboardHandler$$ || "dim" == $DvtLegendObjPeer$$.hoverBehavior) {
        this.$getCtx$().$setAriaRole$("application"), this.$getCtx$().$setAriaLabel$(dvt.$Bundle$.$getTranslatedString$(dvt.$Bundle$.$UTIL_PREFIX$, "COLON_SEP_LIST", [dvt.$Bundle$.$getTranslatedString$(dvt.$Bundle$.$UTIL_PREFIX$, "DATA_VISUALIZATION"), dvt.$StringUtils$.$processAriaLabel$(this.$GetComponentDescription$())]))
      }
    }
  };
  dvt.$Legend$.prototype.$isNavigable$ = function $dvt$$Legend$$$$isNavigable$$() {
    return 0 < this.$_navigablePeers$.length
  };
  dvt.$Obj$.$createSubclass$($DvtLegendAutomation$$, dvt.$Automation$);
  $DvtLegendAutomation$$.prototype.$GetSubIdForDomElement$ = function $$DvtLegendAutomation$$$$$GetSubIdForDomElement$$($DvtLegendKeyboardHandler$$) {
    if(($DvtLegendKeyboardHandler$$ = this.$_legend$.$getEventManager$().$GetLogicalObject$($DvtLegendKeyboardHandler$$)) && $DvtLegendKeyboardHandler$$ instanceof $DvtLegendObjPeer$$) {
      if($DvtLegendKeyboardHandler$$ = $DvtLegendKeyboardHandler$$.getData(), $DvtLegendKeyboardHandler$$ = this.$_getIndicesFromItem$($DvtLegendKeyboardHandler$$, this.$_options$)) {
        return"section" + $DvtLegendKeyboardHandler$$
      }
    }
    return $JSCompiler_alias_NULL$$
  };
  $DvtLegendAutomation$$.prototype.$_getIndicesFromItem$ = function $$DvtLegendAutomation$$$$$_getIndicesFromItem$$($DvtLegendObjPeer$$, $DvtLegendKeyboardHandler$$) {
    if($DvtLegendKeyboardHandler$$.sections && 0 < $DvtLegendKeyboardHandler$$.sections.length) {
      for(var $DvtLegendEventManager$$ = 0;$DvtLegendEventManager$$ < $DvtLegendKeyboardHandler$$.sections.length;$DvtLegendEventManager$$++) {
        if($DvtLegendKeyboardHandler$$.sections[$DvtLegendEventManager$$] == $DvtLegendObjPeer$$) {
          return"[" + $DvtLegendEventManager$$ + "]"
        }
        var $DvtLegendDefaults$$ = this.$_getIndicesFromItem$($DvtLegendObjPeer$$, $DvtLegendKeyboardHandler$$.sections[$DvtLegendEventManager$$]);
        if($DvtLegendDefaults$$) {
          return"[" + $DvtLegendEventManager$$ + "]" + $DvtLegendDefaults$$
        }
      }
      return $JSCompiler_alias_NULL$$
    }
    if($DvtLegendKeyboardHandler$$.items && 0 < $DvtLegendKeyboardHandler$$.items.length) {
      for($DvtLegendEventManager$$ = 0;$DvtLegendEventManager$$ < $DvtLegendKeyboardHandler$$.items.length;$DvtLegendEventManager$$++) {
        if($DvtLegendKeyboardHandler$$.items[$DvtLegendEventManager$$] == $DvtLegendObjPeer$$) {
          return":item[" + $DvtLegendEventManager$$ + "]"
        }
      }
      return $JSCompiler_alias_NULL$$
    }
  };
  $DvtLegendAutomation$$.prototype.$getIndicesFromSeries$ = function $$DvtLegendAutomation$$$$$getIndicesFromSeries$$($DvtLegendObjPeer$$, $DvtLegendKeyboardHandler$$) {
    if($DvtLegendKeyboardHandler$$.sections && 0 < $DvtLegendKeyboardHandler$$.sections.length) {
      for(var $DvtLegendEventManager$$ = 0;$DvtLegendEventManager$$ < $DvtLegendKeyboardHandler$$.sections.length;$DvtLegendEventManager$$++) {
        var $DvtLegendDefaults$$ = this.$getIndicesFromSeries$($DvtLegendObjPeer$$, $DvtLegendKeyboardHandler$$.sections[$DvtLegendEventManager$$]);
        if($DvtLegendDefaults$$) {
          return"[" + $DvtLegendEventManager$$ + "]" + $DvtLegendDefaults$$
        }
      }
      return $JSCompiler_alias_NULL$$
    }
    if($DvtLegendKeyboardHandler$$.items && 0 < $DvtLegendKeyboardHandler$$.items.length) {
      for($DvtLegendEventManager$$ = 0;$DvtLegendEventManager$$ < $DvtLegendKeyboardHandler$$.items.length;$DvtLegendEventManager$$++) {
        if($DvtLegendKeyboardHandler$$.items[$DvtLegendEventManager$$].text == $DvtLegendObjPeer$$.name) {
          return":item[" + $DvtLegendEventManager$$ + "]"
        }
      }
      return $JSCompiler_alias_NULL$$
    }
  };
  $DvtLegendAutomation$$.prototype.$getLegendItem$ = function $$DvtLegendAutomation$$$$$getLegendItem$$($DvtLegendObjPeer$$, $DvtLegendKeyboardHandler$$) {
    var $DvtLegendEventManager$$ = $DvtLegendKeyboardHandler$$.indexOf("["), $DvtLegendDefaults$$ = $DvtLegendKeyboardHandler$$.indexOf("]");
    if(0 <= $DvtLegendEventManager$$ && 0 <= $DvtLegendDefaults$$) {
      var $DvtLegendEventManager$$ = $DvtLegendKeyboardHandler$$.substring($DvtLegendEventManager$$ + 1, $DvtLegendDefaults$$), $DvtLegendAutomation$$ = $DvtLegendKeyboardHandler$$.indexOf(":");
      $DvtLegendKeyboardHandler$$ = $DvtLegendKeyboardHandler$$.substring($DvtLegendDefaults$$ + 1);
      $DvtLegendDefaults$$ = $DvtLegendKeyboardHandler$$.indexOf("]");
      return 0 <= $DvtLegendKeyboardHandler$$.indexOf("[") && 0 <= $DvtLegendDefaults$$ ? this.$getLegendItem$($DvtLegendObjPeer$$.sections[$DvtLegendEventManager$$], $DvtLegendKeyboardHandler$$) : 0 == $DvtLegendAutomation$$ ? $DvtLegendObjPeer$$.items[$DvtLegendEventManager$$] : $DvtLegendObjPeer$$.sections[$DvtLegendEventManager$$]
    }
  };
  $DvtLegendAutomation$$.prototype.$getDomElementForSubId$ = function $$DvtLegendAutomation$$$$$getDomElementForSubId$$($DvtLegendObjPeer$$) {
    if($DvtLegendObjPeer$$ == dvt.$Automation$.$TOOLTIP_SUBID$) {
      return this.$GetTooltipElement$(this.$_legend$)
    }
    $DvtLegendObjPeer$$ = this.$getLegendItem$(this.$_options$, $DvtLegendObjPeer$$);
    for(var $DvtLegendKeyboardHandler$$ = this.$_legend$.$_peers$, $DvtLegendEventManager$$ = 0;$DvtLegendEventManager$$ < $DvtLegendKeyboardHandler$$.length;$DvtLegendEventManager$$++) {
      var $DvtLegendDefaults$$ = $DvtLegendKeyboardHandler$$[$DvtLegendEventManager$$].getData();
      if($DvtLegendObjPeer$$ == $DvtLegendDefaults$$) {
        return $DvtLegendKeyboardHandler$$[$DvtLegendEventManager$$].$getDisplayables$()[0].$getElem$()
      }
    }
    return $JSCompiler_alias_NULL$$
  };
  $DvtLegendAutomation$$.prototype.$getTitle$ = function $$DvtLegendAutomation$$$$$getTitle$$() {
    return this.$_options$.title
  };
  $DvtLegendAutomation$$.prototype.getItem = function $$DvtLegendAutomation$$$$getItem$($DvtLegendObjPeer$$) {
    for(var $DvtLegendKeyboardHandler$$, $DvtLegendEventManager$$ = $DvtLegendObjPeer$$.shift(), $DvtLegendDefaults$$ = this.$_options$;$DvtLegendEventManager$$ != $JSCompiler_alias_VOID$$;) {
      0 < $DvtLegendObjPeer$$.length ? $DvtLegendDefaults$$ = $DvtLegendDefaults$$.sections[$DvtLegendEventManager$$] : $DvtLegendKeyboardHandler$$ = $DvtLegendDefaults$$.items[$DvtLegendEventManager$$], $DvtLegendEventManager$$ = $DvtLegendObjPeer$$.shift()
    }
    return $DvtLegendKeyboardHandler$$ ? {text:$DvtLegendKeyboardHandler$$.text ? $DvtLegendKeyboardHandler$$.text : $JSCompiler_alias_NULL$$} : $JSCompiler_alias_NULL$$
  };
  $DvtLegendAutomation$$.prototype.$getSection$ = function $$DvtLegendAutomation$$$$$getSection$$($DvtLegendObjPeer$$) {
    for(var $DvtLegendKeyboardHandler$$, $DvtLegendEventManager$$ = $DvtLegendObjPeer$$.shift(), $DvtLegendDefaults$$ = this.$_options$;$DvtLegendEventManager$$ != $JSCompiler_alias_VOID$$;) {
      0 < $DvtLegendObjPeer$$.length ? $DvtLegendDefaults$$ = $DvtLegendDefaults$$.sections[$DvtLegendEventManager$$] : $DvtLegendKeyboardHandler$$ = $DvtLegendDefaults$$.sections[$DvtLegendEventManager$$], $DvtLegendEventManager$$ = $DvtLegendObjPeer$$.shift()
    }
    return{title:$DvtLegendKeyboardHandler$$.title ? $DvtLegendKeyboardHandler$$.title : $JSCompiler_alias_NULL$$, items:$DvtLegendKeyboardHandler$$.items ? this.$_generateItemObjects$($DvtLegendKeyboardHandler$$.items) : $JSCompiler_alias_NULL$$, sections:$DvtLegendKeyboardHandler$$.sections ? this.$_generateSectionObjects$($DvtLegendKeyboardHandler$$.sections) : $JSCompiler_alias_NULL$$}
  };
  $DvtLegendAutomation$$.prototype.$_generateItemObjects$ = function $$DvtLegendAutomation$$$$$_generateItemObjects$$($DvtLegendObjPeer$$) {
    for(var $DvtLegendKeyboardHandler$$ = [], $DvtLegendEventManager$$ = 0;$DvtLegendEventManager$$ < $DvtLegendObjPeer$$.length;$DvtLegendEventManager$$++) {
      $DvtLegendKeyboardHandler$$.push({text:$DvtLegendObjPeer$$[$DvtLegendEventManager$$].text})
    }
    return $DvtLegendKeyboardHandler$$
  };
  $DvtLegendAutomation$$.prototype.$_generateSectionObjects$ = function $$DvtLegendAutomation$$$$$_generateSectionObjects$$($DvtLegendObjPeer$$) {
    for(var $DvtLegendKeyboardHandler$$ = [], $DvtLegendEventManager$$ = 0;$DvtLegendEventManager$$ < $DvtLegendObjPeer$$.length;$DvtLegendEventManager$$++) {
      $DvtLegendKeyboardHandler$$.push({title:$DvtLegendObjPeer$$[$DvtLegendEventManager$$].title ? $DvtLegendObjPeer$$[$DvtLegendEventManager$$].title : $JSCompiler_alias_NULL$$, items:$DvtLegendObjPeer$$[$DvtLegendEventManager$$].items ? this.$_generateItemObjects$($DvtLegendObjPeer$$[$DvtLegendEventManager$$].items) : $JSCompiler_alias_NULL$$, sections:$DvtLegendObjPeer$$[$DvtLegendEventManager$$].sections ? this.$_generateSectionObjects$($DvtLegendObjPeer$$[$DvtLegendEventManager$$].sections) : 
      $JSCompiler_alias_NULL$$})
    }
    return $DvtLegendKeyboardHandler$$
  };
  dvt.$Obj$.$createSubclass$($DvtLegendDefaults$$, dvt.$BaseComponentDefaults$);
  $DvtLegendDefaults$$.$SKIN_NEXT$ = {skin:dvt.$CSSStyle$.$SKIN_NEXT$, titleStyle:new dvt.$CSSStyle$("color: #737373;"), _sectionTitleStyle:new dvt.$CSSStyle$("color: #737373;"), layout:{titleGapWidth:17, titleGapHeight:9, symbolGapWidth:7, symbolGapHeight:4, rowGap:4, columnGap:10, sectionGapHeight:16, sectionGapWidth:24}};
  $DvtLegendDefaults$$.$SKIN_ALTA$ = {skin:dvt.$CSSStyle$.$SKIN_ALTA$, textStyle:new dvt.$CSSStyle$("font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;"), titleStyle:new dvt.$CSSStyle$("font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 11px; color: #333333;"), _sectionTitleStyle:new dvt.$CSSStyle$("font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 11px; color: #333333;")};
  $DvtLegendDefaults$$.$VERSION_1$ = {skin:dvt.$CSSStyle$.$SKIN_SKYROS$, orientation:"vertical", position:$JSCompiler_alias_NULL$$, backgroundColor:$JSCompiler_alias_NULL$$, borderColor:$JSCompiler_alias_NULL$$, textStyle:new dvt.$CSSStyle$("font-family: tahoma, sans-serif; font-size: 11px; color: #333333;"), titleStyle:new dvt.$CSSStyle$("font-family: tahoma, sans-serif; font-size: 12px; color: #003d5b;"), titleHalign:"start", hiddenCategories:[], hideAndShowBehavior:"off", hoverBehavior:"none", 
  hoverBehaviorDelay:200, scrolling:"asNeeded", halign:"start", valign:"top", drilling:"off", _color:"#a6acb1", _markerShape:"square", _lineWidth:3, layout:{outerGapWidth:3, outerGapHeight:3, titleGapWidth:8, titleGapHeight:3, symbolGapWidth:5, symbolGapHeight:4, rowGap:0, columnGap:8, sectionGapHeight:6, sectionGapWidth:15}, isLayout:$JSCompiler_alias_FALSE$$};
  $DvtLegendDefaults$$.$getGapSize$ = function $$DvtLegendDefaults$$$$getGapSize$$($DvtLegendObjPeer$$, $DvtLegendKeyboardHandler$$) {
    var $DvtLegendEventManager$$ = Math.min(dvt.$TextUtils$.$getTextStringHeight$($DvtLegendObjPeer$$.$getCtx$(), $DvtLegendObjPeer$$.$getOptions$().textStyle) / 14, 1);
    return Math.ceil($DvtLegendKeyboardHandler$$ * $DvtLegendEventManager$$)
  };
  dvt.$Obj$.$createSubclass$($DvtLegendEventManager$$, dvt.$EventManager$);
  $DvtLegendEventManager$$.prototype.$OnClick$ = function $$DvtLegendEventManager$$$$$OnClick$$($DvtLegendObjPeer$$) {
    $DvtLegendEventManager$$.$superclass$.$OnClick$.call(this, $DvtLegendObjPeer$$);
    var $DvtLegendKeyboardHandler$$ = this.$GetLogicalObject$($DvtLegendObjPeer$$.target);
    if($DvtLegendKeyboardHandler$$) {
      var $DvtLegendDefaults$$ = this.$processHideShowEvent$($DvtLegendKeyboardHandler$$), $DvtLegendKeyboardHandler$$ = this.$handleClick$($DvtLegendKeyboardHandler$$, $DvtLegendObjPeer$$);
      ($DvtLegendDefaults$$ || $DvtLegendKeyboardHandler$$) && $DvtLegendObjPeer$$.stopPropagation()
    }
  };
  $DvtLegendEventManager$$.prototype.$OnMouseOver$ = function $$DvtLegendEventManager$$$$$OnMouseOver$$($DvtLegendObjPeer$$) {
    $DvtLegendEventManager$$.$superclass$.$OnMouseOver$.call(this, $DvtLegendObjPeer$$);
    if($DvtLegendObjPeer$$ = this.$GetLogicalObject$($DvtLegendObjPeer$$.target)) {
      var $DvtLegendKeyboardHandler$$ = $DvtLegendObjPeer$$ instanceof dvt.$SimpleObjPeer$ ? $DvtLegendObjPeer$$.$_params$ : $JSCompiler_alias_NULL$$;
      $DvtLegendKeyboardHandler$$ && ($DvtLegendKeyboardHandler$$.isCollapsible && $DvtLegendKeyboardHandler$$.button) && $DvtLegendKeyboardHandler$$.button.$drawOverState$();
      this.$UpdateActiveElement$($DvtLegendObjPeer$$)
    }
  };
  $DvtLegendEventManager$$.prototype.$OnMouseOut$ = function $$DvtLegendEventManager$$$$$OnMouseOut$$($DvtLegendObjPeer$$) {
    $DvtLegendEventManager$$.$superclass$.$OnMouseOut$.call(this, $DvtLegendObjPeer$$);
    if($DvtLegendObjPeer$$ = this.$GetLogicalObject$($DvtLegendObjPeer$$.target)) {
      ($DvtLegendObjPeer$$ = $DvtLegendObjPeer$$ instanceof dvt.$SimpleObjPeer$ ? $DvtLegendObjPeer$$.$_params$ : $JSCompiler_alias_NULL$$) && ($DvtLegendObjPeer$$.isCollapsible && $DvtLegendObjPeer$$.button) && $DvtLegendObjPeer$$.button.$drawUpState$()
    }
  };
  $DvtLegendEventManager$$.prototype.$HandleTouchClickInternal$ = function $$DvtLegendEventManager$$$$$HandleTouchClickInternal$$($DvtLegendObjPeer$$) {
    var $DvtLegendKeyboardHandler$$ = this.$GetLogicalObject$($DvtLegendObjPeer$$.target);
    if($DvtLegendKeyboardHandler$$) {
      $DvtLegendObjPeer$$ = $DvtLegendObjPeer$$.$touchEvent$;
      var $DvtLegendEventManager$$ = this.$processHideShowEvent$($DvtLegendKeyboardHandler$$), $DvtLegendKeyboardHandler$$ = this.$handleClick$($DvtLegendKeyboardHandler$$, event);
      ($DvtLegendEventManager$$ || $DvtLegendKeyboardHandler$$) && $DvtLegendObjPeer$$ && $DvtLegendObjPeer$$.preventDefault()
    }
  };
  $DvtLegendEventManager$$.prototype.$processHideShowEvent$ = function $$DvtLegendEventManager$$$$$processHideShowEvent$$($DvtLegendObjPeer$$) {
    var $DvtLegendKeyboardHandler$$ = this.$_legend$.$getOptions$().hideAndShowBehavior;
    if("none" == $DvtLegendKeyboardHandler$$ || "off" == $DvtLegendKeyboardHandler$$) {
      return $JSCompiler_alias_FALSE$$
    }
    var $DvtLegendEventManager$$ = $DvtLegendObjPeer$$.$getCategories$ ? $DvtLegendObjPeer$$.$getCategories$() : $JSCompiler_alias_NULL$$;
    if(!$DvtLegendEventManager$$ || 0 >= $DvtLegendEventManager$$.length) {
      return $JSCompiler_alias_FALSE$$
    }
    for(var $DvtLegendDefaults$$ = $DvtLegendObjPeer$$.$getCategories$()[0], $DvtLegendKeyboardHandler$$ = this.$_legend$.$getOptions$().hiddenCategories || [], $DvtLegendKeyboardHandler$$ = $DvtLegendKeyboardHandler$$.slice(), $DvtLegendAutomation$$ = $DvtLegendObjPeer$$.$getDisplayables$(), $i$$481$$ = 0;$i$$481$$ < $DvtLegendAutomation$$.length;$i$$481$$++) {
      var $displayable$$41$$ = $DvtLegendAutomation$$[$i$$481$$];
      $displayable$$41$$ instanceof dvt.$SimpleMarker$ ? $displayable$$41$$.$setHollow$($DvtLegendObjPeer$$.$getColor$()) : $displayable$$41$$ instanceof dvt.$Rect$ && $DvtLegendObjPeer$$.$updateAriaLabel$()
    }
    $DvtLegendObjPeer$$ = $DvtLegendEventManager$$[0];
    $DvtLegendRenderer$$.$isCategoryHidden$($DvtLegendDefaults$$, this.$_legend$) ? ($DvtLegendKeyboardHandler$$.splice(dvt.$ArrayUtils$.$getIndex$($DvtLegendKeyboardHandler$$, $DvtLegendDefaults$$), 1), $DvtLegendObjPeer$$ = dvt.$EventFactory$.$newCategoryShowEvent$($DvtLegendObjPeer$$, $DvtLegendKeyboardHandler$$)) : ($DvtLegendKeyboardHandler$$.push($DvtLegendDefaults$$), $DvtLegendObjPeer$$ = dvt.$EventFactory$.$newCategoryHideEvent$($DvtLegendObjPeer$$, $DvtLegendKeyboardHandler$$));
    this.$_legend$.$getOptions$().hiddenCategories = $DvtLegendKeyboardHandler$$;
    this.$FireEvent$($DvtLegendObjPeer$$, this.$_legend$);
    return $JSCompiler_alias_TRUE$$
  };
  $DvtLegendEventManager$$.prototype.$handleClick$ = function $$DvtLegendEventManager$$$$$handleClick$$($DvtLegendKeyboardHandler$$, $DvtLegendEventManager$$) {
    if($DvtLegendKeyboardHandler$$ && $DvtLegendKeyboardHandler$$.$getAction$ && $DvtLegendKeyboardHandler$$.$getAction$()) {
      return this.$FireEvent$(dvt.$EventFactory$.$newActionEvent$("action", $DvtLegendKeyboardHandler$$.$getAction$(), $DvtLegendKeyboardHandler$$.getId()), this.$_legend$), $JSCompiler_alias_TRUE$$
    }
    if($DvtLegendKeyboardHandler$$ instanceof $DvtLegendObjPeer$$ && $DvtLegendKeyboardHandler$$.$isDrillable$()) {
      var $DvtLegendDefaults$$ = $DvtLegendKeyboardHandler$$.getId();
      this.$FireEvent$(dvt.$EventFactory$.$newChartDrillEvent$($DvtLegendDefaults$$, $DvtLegendDefaults$$, $JSCompiler_alias_NULL$$), this.$_legend$);
      return $JSCompiler_alias_TRUE$$
    }
    return($DvtLegendDefaults$$ = $DvtLegendKeyboardHandler$$ instanceof dvt.$SimpleObjPeer$ ? $DvtLegendKeyboardHandler$$.$_params$ : $JSCompiler_alias_NULL$$) && $DvtLegendDefaults$$.isCollapsible ? (this.$toggleSectionCollapse$($DvtLegendEventManager$$, $DvtLegendDefaults$$.id), $JSCompiler_alias_TRUE$$) : $JSCompiler_alias_FALSE$$
  };
  $DvtLegendEventManager$$.prototype.$ProcessRolloverEvent$ = function $$DvtLegendEventManager$$$$$ProcessRolloverEvent$$($DvtLegendObjPeer$$, $DvtLegendKeyboardHandler$$, $DvtLegendEventManager$$) {
    $DvtLegendObjPeer$$ = this.$_legend$.$getOptions$();
    "none" == $DvtLegendObjPeer$$.hoverBehavior || $DvtLegendKeyboardHandler$$.$getDisplayables$ && $DvtLegendKeyboardHandler$$.$getDisplayables$()[0] instanceof dvt.$Button$ || ($DvtLegendKeyboardHandler$$ = $DvtLegendKeyboardHandler$$.$getCategories$ ? $DvtLegendKeyboardHandler$$.$getCategories$() : [], $DvtLegendObjPeer$$.highlightedCategories = $DvtLegendEventManager$$ ? $DvtLegendKeyboardHandler$$.slice() : $JSCompiler_alias_NULL$$, $DvtLegendEventManager$$ = dvt.$EventFactory$.$newCategoryHighlightEvent$($DvtLegendObjPeer$$.highlightedCategories, 
    $DvtLegendEventManager$$), $DvtLegendObjPeer$$ = dvt.$StyleUtils$.$getTimeMilliseconds$($DvtLegendObjPeer$$.hoverBehaviorDelay), this.$RolloverHandler$.$processEvent$($DvtLegendEventManager$$, this.$_legend$.$_peers$, $DvtLegendObjPeer$$, $JSCompiler_alias_TRUE$$))
  };
  $DvtLegendEventManager$$.prototype.$onCollapseButtonClick$ = function $$DvtLegendEventManager$$$$$onCollapseButtonClick$$($DvtLegendObjPeer$$, $DvtLegendKeyboardHandler$$) {
    var $DvtLegendEventManager$$ = $DvtLegendKeyboardHandler$$.getId();
    this.$toggleSectionCollapse$($DvtLegendObjPeer$$, $DvtLegendEventManager$$)
  };
  $DvtLegendEventManager$$.prototype.$toggleSectionCollapse$ = function $$DvtLegendEventManager$$$$$toggleSectionCollapse$$($DvtLegendObjPeer$$, $DvtLegendKeyboardHandler$$) {
    for(var $DvtLegendEventManager$$ = this.$_legend$.$getOptions$(), $DvtLegendDefaults$$ = 0;$DvtLegendDefaults$$ < $DvtLegendKeyboardHandler$$.length;$DvtLegendDefaults$$++) {
      $DvtLegendEventManager$$ = $DvtLegendEventManager$$.sections[$DvtLegendKeyboardHandler$$[$DvtLegendDefaults$$]]
    }
    $DvtLegendEventManager$$.expanded = "off" == $DvtLegendEventManager$$.expanded ? "on" : "off";
    $DvtLegendObjPeer$$.type == dvt.$MouseEvent$.$CLICK$ && ($DvtLegendEventManager$$ = this.$GetLogicalObject$(this.$GetCurrentTargetForEvent$($DvtLegendObjPeer$$)), $DvtLegendEventManager$$.$getNextNavigable$ && this.$setFocusObj$($DvtLegendEventManager$$.$getNextNavigable$($DvtLegendObjPeer$$)));
    $DvtLegendDefaults$$ = ($DvtLegendEventManager$$ = this.$_legend$.$getKeyboardFocus$()) ? $DvtLegendEventManager$$.$isShowingKeyboardFocusEffect$() : $JSCompiler_alias_FALSE$$;
    this.$_legend$.$render$();
    $DvtLegendEventManager$$ && this.$_legend$.$setKeyboardFocus$($DvtLegendEventManager$$, $DvtLegendDefaults$$);
    this.$hideTooltip$();
    $DvtLegendEventManager$$ = this.$_legend$.$getContentDimensions$();
    this.$FireEvent$(new dvt.$ResizeEvent$($DvtLegendEventManager$$.$w$, $DvtLegendEventManager$$.$h$, $DvtLegendEventManager$$.x, $DvtLegendEventManager$$.y), this.$_legend$)
  };
  $DvtLegendEventManager$$.prototype.$GetTouchResponse$ = function $$DvtLegendEventManager$$$$$GetTouchResponse$$() {
    return this.$_legend$.$getOptions$()._isScrollingLegend ? dvt.$EventManager$.$TOUCH_RESPONSE_TOUCH_HOLD$ : dvt.$EventManager$.$TOUCH_RESPONSE_TOUCH_START$
  };
  dvt.$Obj$.$createSubclass$($DvtLegendKeyboardHandler$$, dvt.$KeyboardHandler$);
  $DvtLegendKeyboardHandler$$.prototype.Init = function $$DvtLegendKeyboardHandler$$$$Init$($DvtLegendObjPeer$$, $DvtLegendEventManager$$) {
    $DvtLegendKeyboardHandler$$.$superclass$.Init.call(this, $DvtLegendObjPeer$$);
    this.$_legend$ = $DvtLegendEventManager$$
  };
  $DvtLegendKeyboardHandler$$.prototype.$processKeyDown$ = function $$DvtLegendKeyboardHandler$$$$$processKeyDown$$($DvtLegendObjPeer$$) {
    var $DvtLegendEventManager$$ = $DvtLegendObjPeer$$.keyCode, $DvtLegendDefaults$$ = this.$_eventManager$.$getFocus$(), $DvtLegendAutomation$$ = $DvtLegendDefaults$$ && $DvtLegendDefaults$$.$getDisplayables$()[0] instanceof dvt.$Button$, $DvtLegendRenderer$$ = $JSCompiler_alias_NULL$$;
    $DvtLegendDefaults$$ == $JSCompiler_alias_NULL$$ && $DvtLegendEventManager$$ == dvt.$KeyboardEvent$.$TAB$ ? ($DvtLegendEventManager$$ = this.$_legend$.$_navigablePeers$, 0 < $DvtLegendEventManager$$.length && (dvt.$EventManager$.$consumeEvent$($DvtLegendObjPeer$$), $DvtLegendRenderer$$ = this.$getDefaultNavigable$($DvtLegendEventManager$$))) : $DvtLegendDefaults$$ && ($DvtLegendEventManager$$ == dvt.$KeyboardEvent$.$TAB$ ? (dvt.$EventManager$.$consumeEvent$($DvtLegendObjPeer$$), $DvtLegendRenderer$$ = 
    $DvtLegendDefaults$$) : $DvtLegendEventManager$$ == dvt.$KeyboardEvent$.$ENTER$ || $DvtLegendEventManager$$ == dvt.$KeyboardEvent$.$SPACE$ ? ($DvtLegendEventManager$$ == dvt.$KeyboardEvent$.$ENTER$ && this.$_eventManager$.$handleClick$($DvtLegendDefaults$$, $DvtLegendObjPeer$$), $DvtLegendAutomation$$ ? this.$_eventManager$.$onCollapseButtonClick$($DvtLegendObjPeer$$, $DvtLegendDefaults$$.$getDisplayables$()[0]) : this.$_eventManager$.$processHideShowEvent$($DvtLegendDefaults$$), dvt.$EventManager$.$consumeEvent$($DvtLegendObjPeer$$)) : 
    $DvtLegendAutomation$$ && ($DvtLegendEventManager$$ == dvt.$KeyboardEvent$.$LEFT_ARROW$ || $DvtLegendEventManager$$ == dvt.$KeyboardEvent$.$RIGHT_ARROW$) ? (this.$_eventManager$.$onCollapseButtonClick$($DvtLegendObjPeer$$, $DvtLegendDefaults$$.$getDisplayables$()[0]), dvt.$EventManager$.$consumeEvent$($DvtLegendObjPeer$$)) : $DvtLegendRenderer$$ = $DvtLegendKeyboardHandler$$.$superclass$.$processKeyDown$.call(this, $DvtLegendObjPeer$$));
    $DvtLegendRenderer$$ && this.$_legend$.$container$.scrollIntoView($DvtLegendRenderer$$.$getDisplayables$()[0]);
    return $DvtLegendRenderer$$
  };
  dvt.$Obj$.$createSubclass$($DvtLegendObjPeer$$, dvt.$Obj$);
  $DvtLegendObjPeer$$.prototype.Init = function $$DvtLegendObjPeer$$$$Init$($DvtLegendObjPeer$$, $DvtLegendKeyboardHandler$$, $DvtLegendEventManager$$, $DvtLegendDefaults$$, $DvtLegendAutomation$$, $drillable$$6$$) {
    this.$_legend$ = $DvtLegendObjPeer$$;
    this.$_displayables$ = $DvtLegendKeyboardHandler$$;
    this.$_item$ = $DvtLegendEventManager$$;
    this.$_id$ = (this.$_category$ = $DvtLegendRenderer$$.$getItemCategory$(this.$_item$)) ? this.$_category$ : $DvtLegendEventManager$$.title;
    this.$_action$ = $DvtLegendEventManager$$.action;
    this.$_drillable$ = $drillable$$6$$;
    this.$_spb$ = $DvtLegendEventManager$$._spb;
    this.$_tooltip$ = $DvtLegendDefaults$$;
    this.$_datatip$ = $DvtLegendAutomation$$;
    this.$_isShowingKeyboardFocusEffect$ = $JSCompiler_alias_FALSE$$;
    if(this.$_action$ || this.$_drillable$) {
      for($DvtLegendObjPeer$$ = 0;$DvtLegendObjPeer$$ < this.$_displayables$.length;$DvtLegendObjPeer$$++) {
        this.$_displayables$[$DvtLegendObjPeer$$].setCursor("pointer")
      }
    }
  };
  $DvtLegendObjPeer$$.$associate$ = function $$DvtLegendObjPeer$$$$associate$$($DvtLegendKeyboardHandler$$, $DvtLegendEventManager$$, $DvtLegendDefaults$$, $DvtLegendAutomation$$, $DvtLegendRenderer$$, $drillable$$7$$) {
    if(!$DvtLegendKeyboardHandler$$ || !$DvtLegendDefaults$$) {
      return $JSCompiler_alias_NULL$$
    }
    $DvtLegendDefaults$$ = new $DvtLegendObjPeer$$($DvtLegendEventManager$$, $DvtLegendKeyboardHandler$$, $DvtLegendDefaults$$, $DvtLegendAutomation$$, $DvtLegendRenderer$$, $drillable$$7$$);
    $DvtLegendEventManager$$.$__registerObject$($DvtLegendDefaults$$);
    for($DvtLegendAutomation$$ = 0;$DvtLegendAutomation$$ < $DvtLegendKeyboardHandler$$.length;$DvtLegendAutomation$$++) {
      $DvtLegendEventManager$$.$getEventManager$().$associate$($DvtLegendKeyboardHandler$$[$DvtLegendAutomation$$], $DvtLegendDefaults$$)
    }
    return $DvtLegendDefaults$$
  };
  $DvtLegendObjPeer$$.prototype.getData = $JSCompiler_get$$("$_item$");
  $DvtLegendObjPeer$$.prototype.$getColor$ = function $$DvtLegendObjPeer$$$$$getColor$$() {
    return this.$_item$.color
  };
  $DvtLegendObjPeer$$.prototype.getId = $JSCompiler_get$$("$_id$");
  $DvtLegendObjPeer$$.prototype.$getDisplayables$ = $JSCompiler_get$$("$_displayables$");
  $DvtLegendObjPeer$$.prototype.$getCategories$ = function $$DvtLegendObjPeer$$$$$getCategories$$() {
    return this.$_category$ != $JSCompiler_alias_NULL$$ ? [this.$_category$] : $JSCompiler_alias_NULL$$
  };
  $DvtLegendObjPeer$$.prototype.$getAction$ = $JSCompiler_get$$("$_action$");
  $DvtLegendObjPeer$$.prototype.$isDrillable$ = $JSCompiler_get$$("$_drillable$");
  $DvtLegendObjPeer$$.prototype.$getShowPopupBehaviors$ = $JSCompiler_get$$("$_spb$");
  $DvtLegendObjPeer$$.prototype.$getAriaLabel$ = function $$DvtLegendObjPeer$$$$$getAriaLabel$$() {
    var $DvtLegendObjPeer$$ = [], $DvtLegendKeyboardHandler$$ = this.$_legend$.$getOptions$(), $DvtLegendEventManager$$ = this.$_legend$.$getOptions$().hideAndShowBehavior, $DvtLegendDefaults$$ = $DvtLegendRenderer$$.$isCategoryHidden$(this.$_category$, this.$_legend$), $DvtLegendAutomation$$ = this.getData();
    if(this.$_displayables$[0] instanceof dvt.$Button$) {
      return $DvtLegendObjPeer$$.push(dvt.$Bundle$.$getTranslatedString$(dvt.$Bundle$.$UTIL_PREFIX$, "off" == $DvtLegendAutomation$$.expanded ? "STATE_COLLAPSED" : "STATE_EXPANDED")), dvt.$Displayable$.$generateAriaLabel$($DvtLegendAutomation$$.title, $DvtLegendObjPeer$$)
    }
    "off" != $DvtLegendEventManager$$ && "none" != $DvtLegendEventManager$$ && $DvtLegendObjPeer$$.push(dvt.$Bundle$.$getTranslatedString$(dvt.$Bundle$.$UTIL_PREFIX$, $DvtLegendDefaults$$ ? "STATE_HIDDEN" : "STATE_VISIBLE"));
    this.$isDrillable$() && $DvtLegendObjPeer$$.push(dvt.$Bundle$.$getTranslation$($DvtLegendKeyboardHandler$$, "stateDrillable", dvt.$Bundle$.$UTIL_PREFIX$, "STATE_DRILLABLE"));
    return $DvtLegendAutomation$$.shortDesc != $JSCompiler_alias_NULL$$ ? dvt.$Displayable$.$generateAriaLabel$($DvtLegendAutomation$$.shortDesc, $DvtLegendObjPeer$$) : 0 < $DvtLegendObjPeer$$.length ? dvt.$Displayable$.$generateAriaLabel$($DvtLegendAutomation$$.text, $DvtLegendObjPeer$$) : $JSCompiler_alias_NULL$$
  };
  $DvtLegendObjPeer$$.prototype.$updateAriaLabel$ = function $$DvtLegendObjPeer$$$$$updateAriaLabel$$() {
    !dvt.$Agent$.$deferAriaCreation$() && this.$_displayables$[0] && this.$_displayables$[0].$setAriaProperty$("label", this.$getAriaLabel$())
  };
  $DvtLegendObjPeer$$.prototype.$getNextNavigable$ = function $$DvtLegendObjPeer$$$$$getNextNavigable$$($DvtLegendObjPeer$$) {
    return $DvtLegendObjPeer$$.type == dvt.$MouseEvent$.$CLICK$ ? this : dvt.$KeyboardHandler$.$getNextNavigable$(this, $DvtLegendObjPeer$$, this.$_legend$.$_navigablePeers$, $JSCompiler_alias_TRUE$$)
  };
  $DvtLegendObjPeer$$.prototype.$getKeyboardBoundingBox$ = function $$DvtLegendObjPeer$$$$$getKeyboardBoundingBox$$($DvtLegendObjPeer$$) {
    return this.$_displayables$[0] ? this.$_displayables$[0].$getDimensions$($DvtLegendObjPeer$$) : new dvt.$Rectangle$(0, 0, 0, 0)
  };
  $DvtLegendObjPeer$$.prototype.$getTargetElem$ = function $$DvtLegendObjPeer$$$$$getTargetElem$$() {
    return this.$_displayables$[0] ? this.$_displayables$[0].$getElem$() : $JSCompiler_alias_NULL$$
  };
  $DvtLegendObjPeer$$.prototype.$showKeyboardFocusEffect$ = function $$DvtLegendObjPeer$$$$$showKeyboardFocusEffect$$() {
    this.$_isShowingKeyboardFocusEffect$ = $JSCompiler_alias_TRUE$$;
    this.$_displayables$[0] && (this.$_displayables$[0] instanceof dvt.$Button$ ? this.$_displayables$[0].$drawOverState$() : this.$_displayables$[0].$setSolidStroke$(dvt.$Agent$.$getFocusColor$()))
  };
  $DvtLegendObjPeer$$.prototype.$hideKeyboardFocusEffect$ = function $$DvtLegendObjPeer$$$$$hideKeyboardFocusEffect$$() {
    this.$_isShowingKeyboardFocusEffect$ = $JSCompiler_alias_FALSE$$;
    this.$_displayables$[0] && (this.$_displayables$[0] instanceof dvt.$Button$ ? this.$_displayables$[0].$drawUpState$() : this.$_displayables$[0].$setStroke$($JSCompiler_alias_NULL$$))
  };
  $DvtLegendObjPeer$$.prototype.$isShowingKeyboardFocusEffect$ = $JSCompiler_get$$("$_isShowingKeyboardFocusEffect$");
  $DvtLegendObjPeer$$.prototype.$getTooltip$ = $JSCompiler_get$$("$_tooltip$");
  $DvtLegendObjPeer$$.prototype.$getDatatip$ = $JSCompiler_get$$("$_datatip$");
  $DvtLegendObjPeer$$.prototype.$getDatatipColor$ = function $$DvtLegendObjPeer$$$$$getDatatipColor$$() {
    return this.$_item$.color
  };
  var $DvtLegendRenderer$$ = {};
  dvt.$Obj$.$createSubclass$($DvtLegendRenderer$$, dvt.$Obj$);
  $DvtLegendRenderer$$.$_DEFAULT_LINE_WIDTH_WITH_MARKER$ = 2;
  $DvtLegendRenderer$$.$_LINE_MARKER_SIZE_FACTOR$ = 0.6;
  $DvtLegendRenderer$$.$_DEFAULT_SYMBOL_SIZE$ = 10;
  $DvtLegendRenderer$$.$_BUTTON_SIZE$ = 12;
  $DvtLegendRenderer$$.$_FOCUS_GAP$ = 2;
  $DvtLegendRenderer$$.$render$ = function $$DvtLegendRenderer$$$$render$$($DvtLegendObjPeer$$, $DvtLegendKeyboardHandler$$) {
    var $DvtLegendEventManager$$ = $DvtLegendObjPeer$$.$getOptions$(), $DvtLegendAutomation$$ = $DvtLegendObjPeer$$.$getCtx$(), $contentDims_isRTL$$32_valign$$5$$ = dvt.$Agent$.$isRightToLeft$($DvtLegendAutomation$$);
    $DvtLegendEventManager$$.isLayout || $DvtLegendRenderer$$.$_renderBackground$($DvtLegendObjPeer$$, $DvtLegendKeyboardHandler$$);
    var $container$$119_translateX$$ = new dvt.$SimpleScrollableContainer$($DvtLegendAutomation$$, $DvtLegendKeyboardHandler$$.$w$, $DvtLegendKeyboardHandler$$.$h$), $contentContainer$$3_i$$485$$ = new dvt.$Container$($DvtLegendAutomation$$);
    $container$$119_translateX$$.$_container$.$addChild$($contentContainer$$3_i$$485$$);
    $DvtLegendObjPeer$$.$addChild$($container$$119_translateX$$);
    $DvtLegendObjPeer$$.$container$ = $container$$119_translateX$$;
    var $gapWidth$$2$$ = $DvtLegendDefaults$$.$getGapSize$($DvtLegendObjPeer$$, $DvtLegendEventManager$$.layout.outerGapWidth), $gapHeight$$2$$ = $DvtLegendDefaults$$.$getGapSize$($DvtLegendObjPeer$$, $DvtLegendEventManager$$.layout.outerGapHeight);
    $DvtLegendKeyboardHandler$$.x += $gapWidth$$2$$;
    $DvtLegendKeyboardHandler$$.y += $gapHeight$$2$$;
    $DvtLegendKeyboardHandler$$.$w$ -= 2 * $gapWidth$$2$$;
    $DvtLegendKeyboardHandler$$.$h$ -= 2 * $gapHeight$$2$$;
    $DvtLegendObjPeer$$.$__setBounds$($DvtLegendKeyboardHandler$$);
    if(0 >= $DvtLegendKeyboardHandler$$.$w$ || 0 >= $DvtLegendKeyboardHandler$$.$h$) {
      return new dvt.$Dimension$(0, 0)
    }
    $DvtLegendAutomation$$ = $DvtLegendRenderer$$.$_renderContents$($DvtLegendObjPeer$$, $contentContainer$$3_i$$485$$, new dvt.$Rectangle$($DvtLegendKeyboardHandler$$.x, $DvtLegendKeyboardHandler$$.y, $DvtLegendKeyboardHandler$$.$w$, $DvtLegendKeyboardHandler$$.$h$));
    if(0 == $DvtLegendAutomation$$.$w$ || 0 == $DvtLegendAutomation$$.$h$) {
      return new dvt.$Dimension$(0, 0)
    }
    $container$$119_translateX$$.$prepareContentPane$();
    $DvtLegendAutomation$$.$h$ > $DvtLegendKeyboardHandler$$.$h$ ? ($DvtLegendAutomation$$.$h$ = $DvtLegendKeyboardHandler$$.$h$, $DvtLegendEventManager$$._isScrollingLegend = $JSCompiler_alias_TRUE$$) : $DvtLegendEventManager$$._isScrollingLegend = $JSCompiler_alias_FALSE$$;
    var $translateY$$ = $container$$119_translateX$$ = 0, $halign$$6$$ = $DvtLegendEventManager$$.hAlign != $JSCompiler_alias_NULL$$ ? $DvtLegendEventManager$$.hAlign : $DvtLegendEventManager$$.halign;
    "center" == $halign$$6$$ ? $container$$119_translateX$$ = $DvtLegendKeyboardHandler$$.x - $DvtLegendAutomation$$.x + ($DvtLegendKeyboardHandler$$.$w$ - $DvtLegendAutomation$$.$w$) / 2 : "end" == $halign$$6$$ && ($container$$119_translateX$$ = $contentDims_isRTL$$32_valign$$5$$ ? $DvtLegendKeyboardHandler$$.x - $DvtLegendAutomation$$.x : $DvtLegendKeyboardHandler$$.x - $DvtLegendAutomation$$.x + $DvtLegendKeyboardHandler$$.$w$ - $DvtLegendAutomation$$.$w$);
    $contentDims_isRTL$$32_valign$$5$$ = $DvtLegendEventManager$$.vAlign != $JSCompiler_alias_NULL$$ ? $DvtLegendEventManager$$.vAlign : $DvtLegendEventManager$$.valign;
    "middle" == $contentDims_isRTL$$32_valign$$5$$ ? $translateY$$ = $DvtLegendKeyboardHandler$$.y - $DvtLegendAutomation$$.y + ($DvtLegendKeyboardHandler$$.$h$ - $DvtLegendAutomation$$.$h$) / 2 : "bottom" == $contentDims_isRTL$$32_valign$$5$$ && ($translateY$$ = $DvtLegendKeyboardHandler$$.y - $DvtLegendAutomation$$.y + $DvtLegendKeyboardHandler$$.$h$ - $DvtLegendAutomation$$.$h$);
    $contentDims_isRTL$$32_valign$$5$$ = new dvt.$Rectangle$($DvtLegendAutomation$$.x + $container$$119_translateX$$ - $gapWidth$$2$$, $DvtLegendAutomation$$.y + $translateY$$ - $gapHeight$$2$$, $DvtLegendAutomation$$.$w$ + 2 * $gapWidth$$2$$, $DvtLegendAutomation$$.$h$ + 2 * $gapHeight$$2$$);
    if($DvtLegendEventManager$$.isLayout) {
      return $contentDims_isRTL$$32_valign$$5$$
    }
    ($container$$119_translateX$$ || $translateY$$) && $contentContainer$$3_i$$485$$.$setTranslate$($container$$119_translateX$$, $translateY$$);
    $DvtLegendEventManager$$ = $DvtLegendObjPeer$$.$_titles$;
    for($contentContainer$$3_i$$485$$ = 0;$contentContainer$$3_i$$485$$ < $DvtLegendEventManager$$.length;$contentContainer$$3_i$$485$$++) {
      dvt.$LayoutUtils$.align($DvtLegendAutomation$$, $DvtLegendEventManager$$[$contentContainer$$3_i$$485$$].$halign$, $DvtLegendEventManager$$[$contentContainer$$3_i$$485$$].text, $DvtLegendEventManager$$[$contentContainer$$3_i$$485$$].text.$measureDimensions$().$w$)
    }
    return $contentDims_isRTL$$32_valign$$5$$
  };
  $DvtLegendRenderer$$.$_renderContents$ = function $$DvtLegendRenderer$$$$_renderContents$$($DvtLegendObjPeer$$, $DvtLegendKeyboardHandler$$, $DvtLegendEventManager$$) {
    var $DvtLegendAutomation$$ = $DvtLegendObjPeer$$.$getOptions$();
    $DvtLegendEventManager$$ = $DvtLegendEventManager$$.$clone$();
    var $title$$14$$ = $DvtLegendRenderer$$.$_renderTitle$($DvtLegendObjPeer$$, $DvtLegendKeyboardHandler$$, $DvtLegendAutomation$$.title, $DvtLegendEventManager$$, $JSCompiler_alias_NULL$$, $JSCompiler_alias_TRUE$$);
    if($title$$14$$) {
      var $titleDim$$ = $title$$14$$.$measureDimensions$(), $titleGap$$ = $DvtLegendDefaults$$.$getGapSize$($DvtLegendObjPeer$$, $DvtLegendAutomation$$.layout.titleGapHeight);
      $DvtLegendEventManager$$.y += $titleDim$$.$h$ + $titleGap$$;
      $DvtLegendEventManager$$.$h$ -= Math.floor($titleDim$$.$h$ + $titleGap$$)
    }
    $DvtLegendObjPeer$$ = $DvtLegendRenderer$$.$_renderSections$($DvtLegendObjPeer$$, $DvtLegendKeyboardHandler$$, $DvtLegendAutomation$$.sections, $DvtLegendEventManager$$, []);
    return $title$$14$$ ? $titleDim$$.$getUnion$($DvtLegendObjPeer$$) : $DvtLegendObjPeer$$
  };
  $DvtLegendRenderer$$.$_renderBackground$ = function $$DvtLegendRenderer$$$$_renderBackground$$($DvtLegendObjPeer$$, $DvtLegendKeyboardHandler$$) {
    var $DvtLegendEventManager$$ = $DvtLegendObjPeer$$.$getOptions$(), $DvtLegendDefaults$$ = $DvtLegendEventManager$$.backgroundColor, $DvtLegendEventManager$$ = $DvtLegendEventManager$$.borderColor;
    if($DvtLegendDefaults$$ || $DvtLegendEventManager$$) {
      var $DvtLegendAutomation$$ = new dvt.$Rect$($DvtLegendObjPeer$$.$getCtx$(), $DvtLegendKeyboardHandler$$.x, $DvtLegendKeyboardHandler$$.y, $DvtLegendKeyboardHandler$$.$w$, $DvtLegendKeyboardHandler$$.$h$);
      $DvtLegendDefaults$$ ? $DvtLegendAutomation$$.$setSolidFill$($DvtLegendDefaults$$) : $DvtLegendAutomation$$.$setInvisibleFill$();
      $DvtLegendEventManager$$ && ($DvtLegendAutomation$$.$setSolidStroke$($DvtLegendEventManager$$), $DvtLegendAutomation$$.$setPixelHinting$());
      $DvtLegendObjPeer$$.$addChild$($DvtLegendAutomation$$)
    }
  };
  $DvtLegendRenderer$$.$_renderTitle$ = function $$DvtLegendRenderer$$$$_renderTitle$$($DvtLegendObjPeer$$, $DvtLegendKeyboardHandler$$, $DvtLegendEventManager$$, $DvtLegendDefaults$$, $DvtLegendAutomation$$, $DvtLegendRenderer$$, $id$$121$$, $button$$65$$) {
    var $options$$181$$ = $DvtLegendObjPeer$$.$getOptions$(), $context$$242_titleStyle$$2$$ = $DvtLegendKeyboardHandler$$.$getCtx$(), $isRTL$$33$$ = dvt.$Agent$.$isRightToLeft$($context$$242_titleStyle$$2$$);
    if(!$DvtLegendEventManager$$) {
      return $JSCompiler_alias_NULL$$
    }
    $DvtLegendEventManager$$ = new dvt.$OutputText$($context$$242_titleStyle$$2$$, $DvtLegendEventManager$$, $DvtLegendDefaults$$.x, $DvtLegendDefaults$$.y);
    $context$$242_titleStyle$$2$$ = $options$$181$$.titleStyle;
    $DvtLegendAutomation$$ && $DvtLegendAutomation$$.titleStyle ? $context$$242_titleStyle$$2$$ = new dvt.$CSSStyle$($DvtLegendAutomation$$.titleStyle) : $DvtLegendAutomation$$ && $options$$181$$._sectionTitleStyle && ($context$$242_titleStyle$$2$$ = $options$$181$$._sectionTitleStyle);
    $DvtLegendEventManager$$.$setCSSStyle$($context$$242_titleStyle$$2$$);
    return dvt.$TextUtils$.$fitText$($DvtLegendEventManager$$, $DvtLegendDefaults$$.$w$, Infinity, $DvtLegendKeyboardHandler$$) ? ($isRTL$$33$$ && $DvtLegendEventManager$$.$setX$($DvtLegendDefaults$$.x + $DvtLegendDefaults$$.$w$ - $DvtLegendEventManager$$.$measureDimensions$().$w$), $options$$181$$.isLayout ? $DvtLegendKeyboardHandler$$.removeChild($DvtLegendEventManager$$) : ($DvtLegendKeyboardHandler$$ = {id:$id$$121$$, button:$button$$65$$}, $DvtLegendKeyboardHandler$$.isCollapsible = $DvtLegendAutomation$$ && 
    ("on" == $DvtLegendAutomation$$.collapsible || $DvtLegendAutomation$$.collapsible == $JSCompiler_alias_TRUE$$), $DvtLegendObjPeer$$.$getEventManager$().$associate$($DvtLegendEventManager$$, new dvt.$SimpleObjPeer$($DvtLegendEventManager$$.$getUntruncatedTextString$(), $JSCompiler_alias_NULL$$, $JSCompiler_alias_NULL$$, $DvtLegendKeyboardHandler$$)), $DvtLegendRenderer$$ && $DvtLegendObjPeer$$.$__registerTitle$({text:$DvtLegendEventManager$$, $halign$:$DvtLegendAutomation$$ && $DvtLegendAutomation$$.titleHalign ? 
    $DvtLegendAutomation$$.titleHalign : $options$$181$$.titleHalign})), $DvtLegendEventManager$$) : $JSCompiler_alias_NULL$$
  };
  $DvtLegendRenderer$$.$_renderSections$ = function $$DvtLegendRenderer$$$$_renderSections$$($DvtLegendObjPeer$$, $DvtLegendKeyboardHandler$$, $DvtLegendEventManager$$, $DvtLegendAutomation$$, $id$$122$$) {
    var $isHoriz$$14_options$$182$$ = $DvtLegendObjPeer$$.$getOptions$();
    $isHoriz$$14_options$$182$$.symbolWidth == $JSCompiler_alias_NULL$$ && $isHoriz$$14_options$$182$$.symbolHeight == $JSCompiler_alias_NULL$$ ? ($isHoriz$$14_options$$182$$.symbolWidth = $DvtLegendRenderer$$.$_DEFAULT_SYMBOL_SIZE$, $isHoriz$$14_options$$182$$.symbolHeight = $DvtLegendRenderer$$.$_DEFAULT_SYMBOL_SIZE$) : ($isHoriz$$14_options$$182$$.symbolWidth == $JSCompiler_alias_NULL$$ ? $isHoriz$$14_options$$182$$.symbolWidth = $isHoriz$$14_options$$182$$.symbolHeight : $isHoriz$$14_options$$182$$.symbolHeight == 
    $JSCompiler_alias_NULL$$ && ($isHoriz$$14_options$$182$$.symbolHeight = $isHoriz$$14_options$$182$$.symbolWidth), $isHoriz$$14_options$$182$$.symbolWidth = parseInt($isHoriz$$14_options$$182$$.symbolWidth), $isHoriz$$14_options$$182$$.symbolHeight = parseInt($isHoriz$$14_options$$182$$.symbolHeight));
    for(var $sectionGapHeight$$ = $DvtLegendDefaults$$.$getGapSize$($DvtLegendObjPeer$$, $isHoriz$$14_options$$182$$.layout.sectionGapHeight), $titleGapHeight$$ = $DvtLegendDefaults$$.$getGapSize$($DvtLegendObjPeer$$, $isHoriz$$14_options$$182$$.layout.titleGapHeight), $gapWidth$$3$$ = $DvtLegendDefaults$$.$getGapSize$($DvtLegendObjPeer$$, $isHoriz$$14_options$$182$$.layout.sectionGapWidth), $rowHeight$$ = $DvtLegendRenderer$$.$_getRowHeight$($DvtLegendObjPeer$$), $isHoriz$$14_options$$182$$ = "vertical" != 
    $isHoriz$$14_options$$182$$.orientation, $totalDim$$1$$ = $JSCompiler_alias_NULL$$, $horizAvailSpace$$ = $DvtLegendAutomation$$.$clone$(), $sectionDim$$, $i$$486$$ = 0;$i$$486$$ < $DvtLegendEventManager$$.length;$i$$486$$++) {
      var $sectionId$$2$$ = $id$$122$$.concat([$i$$486$$]), $gapHeight$$3$$ = "off" == $DvtLegendEventManager$$[$i$$486$$].expanded || $DvtLegendEventManager$$[$i$$486$$].expanded == $JSCompiler_alias_FALSE$$ ? $titleGapHeight$$ : $sectionGapHeight$$;
      $isHoriz$$14_options$$182$$ ? ($sectionDim$$ = $DvtLegendRenderer$$.$_renderHorizontalSection$($DvtLegendObjPeer$$, $DvtLegendKeyboardHandler$$, $DvtLegendEventManager$$[$i$$486$$], $horizAvailSpace$$, $rowHeight$$), $sectionDim$$.$w$ > $horizAvailSpace$$.$w$ ? ($horizAvailSpace$$.$w$ < $DvtLegendAutomation$$.$w$ && ($DvtLegendAutomation$$.y += $sectionDim$$.$h$ + $gapHeight$$3$$, $DvtLegendAutomation$$.$h$ -= $sectionDim$$.$h$ + $gapHeight$$3$$), $sectionDim$$ = $sectionDim$$.$w$ <= $DvtLegendAutomation$$.$w$ ? 
      $DvtLegendRenderer$$.$_renderHorizontalSection$($DvtLegendObjPeer$$, $DvtLegendKeyboardHandler$$, $DvtLegendEventManager$$[$i$$486$$], $DvtLegendAutomation$$, $rowHeight$$) : $DvtLegendRenderer$$.$_renderVerticalSection$($DvtLegendObjPeer$$, $DvtLegendKeyboardHandler$$, $DvtLegendEventManager$$[$i$$486$$], $DvtLegendAutomation$$, $rowHeight$$, $sectionId$$2$$, $JSCompiler_alias_TRUE$$), $DvtLegendAutomation$$.y += $sectionDim$$.$h$ + $gapHeight$$3$$, $DvtLegendAutomation$$.$h$ -= $sectionDim$$.$h$ + 
      $gapHeight$$3$$, $horizAvailSpace$$ = $DvtLegendAutomation$$.$clone$()) : ($horizAvailSpace$$.$w$ -= $sectionDim$$.$w$ + $gapWidth$$3$$, dvt.$Agent$.$isRightToLeft$($DvtLegendObjPeer$$.$getCtx$()) || ($horizAvailSpace$$.x += $sectionDim$$.$w$ + $gapWidth$$3$$))) : ($sectionDim$$ = $DvtLegendRenderer$$.$_renderVerticalSection$($DvtLegendObjPeer$$, $DvtLegendKeyboardHandler$$, $DvtLegendEventManager$$[$i$$486$$], $DvtLegendAutomation$$, $rowHeight$$, $sectionId$$2$$, $JSCompiler_alias_FALSE$$), 
      $DvtLegendAutomation$$.y += $sectionDim$$.$h$ + $gapHeight$$3$$, $DvtLegendAutomation$$.$h$ -= $sectionDim$$.$h$ + $gapHeight$$3$$);
      $totalDim$$1$$ = $totalDim$$1$$ ? $totalDim$$1$$.$getUnion$($sectionDim$$) : $sectionDim$$
    }
    return $totalDim$$1$$
  };
  $DvtLegendRenderer$$.$_createButton$ = function $$DvtLegendRenderer$$$$_createButton$$($DvtLegendKeyboardHandler$$, $DvtLegendEventManager$$, $DvtLegendDefaults$$, $DvtLegendAutomation$$, $prefix$$3$$, $x$$155$$, $y$$133$$, $tooltip$$21$$, $id$$123$$, $callback$$83$$, $callbackObj$$53$$) {
    var $upState$$12$$ = $DvtLegendRenderer$$.$_createButtonImage$($DvtLegendKeyboardHandler$$, $DvtLegendAutomation$$, $prefix$$3$$ + "Enabled", $x$$155$$, $y$$133$$), $overState$$9$$ = $DvtLegendRenderer$$.$_createButtonImage$($DvtLegendKeyboardHandler$$, $DvtLegendAutomation$$, $prefix$$3$$ + "Over", $x$$155$$, $y$$133$$);
    $DvtLegendAutomation$$ = $DvtLegendRenderer$$.$_createButtonImage$($DvtLegendKeyboardHandler$$, $DvtLegendAutomation$$, $prefix$$3$$ + "Down", $x$$155$$, $y$$133$$);
    $DvtLegendKeyboardHandler$$ = new dvt.$Button$($DvtLegendKeyboardHandler$$, $upState$$12$$, $overState$$9$$, $DvtLegendAutomation$$, $JSCompiler_alias_NULL$$, $id$$123$$, $callback$$83$$, $callbackObj$$53$$);
    $DvtLegendEventManager$$ = $DvtLegendObjPeer$$.$associate$([$DvtLegendKeyboardHandler$$], $DvtLegendEventManager$$, $DvtLegendDefaults$$, $tooltip$$21$$, $JSCompiler_alias_NULL$$, $JSCompiler_alias_FALSE$$);
    $DvtLegendKeyboardHandler$$.$setAriaRole$("button");
    $DvtLegendEventManager$$.$updateAriaLabel$();
    return $DvtLegendKeyboardHandler$$
  };
  $DvtLegendRenderer$$.$_createButtonImage$ = function $$DvtLegendRenderer$$$$_createButtonImage$$($DvtLegendObjPeer$$, $DvtLegendKeyboardHandler$$, $DvtLegendEventManager$$, $DvtLegendDefaults$$, $DvtLegendAutomation$$) {
    var $suffix$$2$$ = dvt.$Agent$.$isRightToLeft$($DvtLegendObjPeer$$) ? "RTL" : "";
    $DvtLegendObjPeer$$ = new dvt.$Image$($DvtLegendObjPeer$$, $DvtLegendKeyboardHandler$$[$DvtLegendEventManager$$ + $suffix$$2$$] ? $DvtLegendKeyboardHandler$$[$DvtLegendEventManager$$ + $suffix$$2$$] : $DvtLegendKeyboardHandler$$[$DvtLegendEventManager$$], $DvtLegendDefaults$$, $DvtLegendAutomation$$, $DvtLegendRenderer$$.$_BUTTON_SIZE$, $DvtLegendRenderer$$.$_BUTTON_SIZE$);
    $DvtLegendObjPeer$$.$setInvisibleFill$();
    return $DvtLegendObjPeer$$
  };
  $DvtLegendRenderer$$.$_renderVerticalSection$ = function $$DvtLegendRenderer$$$$_renderVerticalSection$$($DvtLegendObjPeer$$, $DvtLegendKeyboardHandler$$, $DvtLegendEventManager$$, $DvtLegendAutomation$$, $rowHeight$$1$$, $id$$124_nestedSectionDim_numRows$$, $minimizeNumRows_numCols$$) {
    if($DvtLegendEventManager$$) {
      var $options$$183_textSpace$$ = $DvtLegendObjPeer$$.$getOptions$(), $currRow_symbolGap$$ = $DvtLegendDefaults$$.$getGapSize$($DvtLegendObjPeer$$, $options$$183_textSpace$$.layout.symbolGapWidth), $rowGap$$ = $DvtLegendDefaults$$.$getGapSize$($DvtLegendObjPeer$$, $options$$183_textSpace$$.layout.rowGap), $colGap$$ = $DvtLegendDefaults$$.$getGapSize$($DvtLegendObjPeer$$, $options$$183_textSpace$$.layout.columnGap), $buttonGap_context$$245_sectionDim$$1_title$$16_titleDim$$1$$ = $DvtLegendObjPeer$$.$getCtx$(), 
      $isRTL$$34$$ = dvt.$Agent$.$isRightToLeft$($buttonGap_context$$245_sectionDim$$1_title$$16_titleDim$$1$$);
      $DvtLegendAutomation$$ = $DvtLegendAutomation$$.$clone$();
      "off" != $options$$183_textSpace$$.scrolling && ($DvtLegendAutomation$$.$h$ = Infinity);
      var $buttonDim_buttonX_colInitY$$, $colInfo_colWidth_isCollapsible_titleGap$$1$$ = "on" == $DvtLegendEventManager$$.collapsible || $DvtLegendEventManager$$.collapsible == $JSCompiler_alias_TRUE$$, $button$$67_buttonType_contentHeight$$2_currCol$$;
      if($colInfo_colWidth_isCollapsible_titleGap$$1$$) {
        $buttonDim_buttonX_colInitY$$ = $isRTL$$34$$ ? $DvtLegendAutomation$$.x + $DvtLegendAutomation$$.$w$ - $DvtLegendRenderer$$.$_BUTTON_SIZE$ : $DvtLegendAutomation$$.x;
        if(!$options$$183_textSpace$$.isLayout) {
          var $buttonTooltip_contentWidth$$3_isCollapsed_numItems$$2$$ = "off" == $DvtLegendEventManager$$.expanded || $DvtLegendEventManager$$.expanded == $JSCompiler_alias_FALSE$$;
          $button$$67_buttonType_contentHeight$$2_currCol$$ = $buttonTooltip_contentWidth$$3_isCollapsed_numItems$$2$$ ? "closed" : "open";
          var $buttonTooltip_contentWidth$$3_isCollapsed_numItems$$2$$ = dvt.$Bundle$.$getTranslatedString$(dvt.$Bundle$.$UTIL_PREFIX$, $buttonTooltip_contentWidth$$3_isCollapsed_numItems$$2$$ ? "EXPAND" : "COLLAPSE", $JSCompiler_alias_NULL$$), $em$$4_i$$487$$ = $DvtLegendObjPeer$$.$getEventManager$();
          $button$$67_buttonType_contentHeight$$2_currCol$$ = $DvtLegendRenderer$$.$_createButton$($buttonGap_context$$245_sectionDim$$1_title$$16_titleDim$$1$$, $DvtLegendObjPeer$$, $DvtLegendEventManager$$, $options$$183_textSpace$$._resources, $button$$67_buttonType_contentHeight$$2_currCol$$, $buttonDim_buttonX_colInitY$$, $DvtLegendAutomation$$.y, $buttonTooltip_contentWidth$$3_isCollapsed_numItems$$2$$, $id$$124_nestedSectionDim_numRows$$, $em$$4_i$$487$$.$onCollapseButtonClick$, $em$$4_i$$487$$);
          $DvtLegendKeyboardHandler$$.$addChild$($button$$67_buttonType_contentHeight$$2_currCol$$)
        }
        $buttonDim_buttonX_colInitY$$ = new dvt.$Rectangle$($buttonDim_buttonX_colInitY$$, $DvtLegendAutomation$$.y, $DvtLegendRenderer$$.$_BUTTON_SIZE$, $DvtLegendRenderer$$.$_BUTTON_SIZE$);
        $buttonGap_context$$245_sectionDim$$1_title$$16_titleDim$$1$$ = $DvtLegendDefaults$$.$getGapSize$($DvtLegendObjPeer$$, $options$$183_textSpace$$.layout.symbolGapWidth);
        $isRTL$$34$$ || ($DvtLegendAutomation$$.x += $DvtLegendRenderer$$.$_BUTTON_SIZE$ + $buttonGap_context$$245_sectionDim$$1_title$$16_titleDim$$1$$);
        $DvtLegendAutomation$$.$w$ -= $DvtLegendRenderer$$.$_BUTTON_SIZE$ + $buttonGap_context$$245_sectionDim$$1_title$$16_titleDim$$1$$
      }
      $buttonGap_context$$245_sectionDim$$1_title$$16_titleDim$$1$$ = ($buttonGap_context$$245_sectionDim$$1_title$$16_titleDim$$1$$ = $DvtLegendRenderer$$.$_renderTitle$($DvtLegendObjPeer$$, $DvtLegendKeyboardHandler$$, $DvtLegendEventManager$$.title, $DvtLegendAutomation$$, $DvtLegendEventManager$$, !$colInfo_colWidth_isCollapsible_titleGap$$1$$ && 1 >= $id$$124_nestedSectionDim_numRows$$.length, $id$$124_nestedSectionDim_numRows$$, $button$$67_buttonType_contentHeight$$2_currCol$$)) ? $buttonGap_context$$245_sectionDim$$1_title$$16_titleDim$$1$$.$measureDimensions$() : 
      new dvt.$Rectangle$($isRTL$$34$$ ? $DvtLegendAutomation$$.x + $DvtLegendAutomation$$.$w$ : $DvtLegendAutomation$$.x, $DvtLegendAutomation$$.y, 0, 0);
      $buttonGap_context$$245_sectionDim$$1_title$$16_titleDim$$1$$ = $buttonDim_buttonX_colInitY$$ ? $buttonGap_context$$245_sectionDim$$1_title$$16_titleDim$$1$$.$getUnion$($buttonDim_buttonX_colInitY$$) : $buttonGap_context$$245_sectionDim$$1_title$$16_titleDim$$1$$;
      if(!$DvtLegendEventManager$$.items && !$DvtLegendEventManager$$.sections || "off" == $DvtLegendEventManager$$.expanded || $DvtLegendEventManager$$.expanded == $JSCompiler_alias_FALSE$$) {
        return $buttonGap_context$$245_sectionDim$$1_title$$16_titleDim$$1$$
      }
      0 < $buttonGap_context$$245_sectionDim$$1_title$$16_titleDim$$1$$.$h$ && ($colInfo_colWidth_isCollapsible_titleGap$$1$$ = $DvtLegendDefaults$$.$getGapSize$($DvtLegendObjPeer$$, $options$$183_textSpace$$.layout.titleGapHeight), $DvtLegendAutomation$$.y += $buttonGap_context$$245_sectionDim$$1_title$$16_titleDim$$1$$.$h$ + $colInfo_colWidth_isCollapsible_titleGap$$1$$, $DvtLegendAutomation$$.$h$ -= $buttonGap_context$$245_sectionDim$$1_title$$16_titleDim$$1$$.$h$ + $colInfo_colWidth_isCollapsible_titleGap$$1$$);
      $DvtLegendEventManager$$.sections && ($id$$124_nestedSectionDim_numRows$$ = $DvtLegendRenderer$$.$_renderSections$($DvtLegendObjPeer$$, $DvtLegendKeyboardHandler$$, $DvtLegendEventManager$$.sections, $DvtLegendAutomation$$, $id$$124_nestedSectionDim_numRows$$), $buttonGap_context$$245_sectionDim$$1_title$$16_titleDim$$1$$ = $buttonGap_context$$245_sectionDim$$1_title$$16_titleDim$$1$$.$getUnion$($id$$124_nestedSectionDim_numRows$$));
      if(!$DvtLegendEventManager$$.items) {
        return $buttonGap_context$$245_sectionDim$$1_title$$16_titleDim$$1$$
      }
      $colInfo_colWidth_isCollapsible_titleGap$$1$$ = $DvtLegendRenderer$$.$_calcColumns$($DvtLegendObjPeer$$, $DvtLegendAutomation$$, $rowHeight$$1$$, $DvtLegendEventManager$$.items, $minimizeNumRows_numCols$$);
      $minimizeNumRows_numCols$$ = $colInfo_colWidth_isCollapsible_titleGap$$1$$.numCols;
      $id$$124_nestedSectionDim_numRows$$ = $colInfo_colWidth_isCollapsible_titleGap$$1$$.numRows;
      $colInfo_colWidth_isCollapsible_titleGap$$1$$ = $colInfo_colWidth_isCollapsible_titleGap$$1$$.width;
      $buttonDim_buttonX_colInitY$$ = $DvtLegendAutomation$$.y;
      if(0 == $id$$124_nestedSectionDim_numRows$$ || 0 == $minimizeNumRows_numCols$$) {
        return $buttonGap_context$$245_sectionDim$$1_title$$16_titleDim$$1$$
      }
      $button$$67_buttonType_contentHeight$$2_currCol$$ = $id$$124_nestedSectionDim_numRows$$ * ($rowHeight$$1$$ + $rowGap$$) - $rowGap$$;
      $buttonTooltip_contentWidth$$3_isCollapsed_numItems$$2$$ = Math.min($minimizeNumRows_numCols$$ * ($colInfo_colWidth_isCollapsible_titleGap$$1$$ + $colGap$$) - $colGap$$, $DvtLegendAutomation$$.$w$);
      $buttonGap_context$$245_sectionDim$$1_title$$16_titleDim$$1$$ = $buttonGap_context$$245_sectionDim$$1_title$$16_titleDim$$1$$.$getUnion$(new dvt.$Rectangle$($isRTL$$34$$ ? $DvtLegendAutomation$$.x + $DvtLegendAutomation$$.$w$ - $buttonTooltip_contentWidth$$3_isCollapsed_numItems$$2$$ : $DvtLegendAutomation$$.x, $DvtLegendAutomation$$.y, $buttonTooltip_contentWidth$$3_isCollapsed_numItems$$2$$, $button$$67_buttonType_contentHeight$$2_currCol$$));
      if($options$$183_textSpace$$.isLayout) {
        return $buttonGap_context$$245_sectionDim$$1_title$$16_titleDim$$1$$
      }
      $options$$183_textSpace$$ = $colInfo_colWidth_isCollapsible_titleGap$$1$$ - $options$$183_textSpace$$.symbolWidth - $currRow_symbolGap$$;
      $currRow_symbolGap$$ = 0;
      $button$$67_buttonType_contentHeight$$2_currCol$$ = 1;
      $buttonTooltip_contentWidth$$3_isCollapsed_numItems$$2$$ = $DvtLegendEventManager$$.items.length;
      for($em$$4_i$$487$$ = 0;$em$$4_i$$487$$ < $buttonTooltip_contentWidth$$3_isCollapsed_numItems$$2$$ && !($DvtLegendRenderer$$.$_createLegendItem$($DvtLegendObjPeer$$, $DvtLegendKeyboardHandler$$, $DvtLegendEventManager$$.items[$em$$4_i$$487$$], $DvtLegendAutomation$$, $options$$183_textSpace$$, $rowHeight$$1$$, $em$$4_i$$487$$), $DvtLegendAutomation$$.y += $rowHeight$$1$$ + $rowGap$$, $currRow_symbolGap$$++, $currRow_symbolGap$$ === $id$$124_nestedSectionDim_numRows$$ && $button$$67_buttonType_contentHeight$$2_currCol$$ !== 
      $minimizeNumRows_numCols$$ && ($DvtLegendAutomation$$.y = $buttonDim_buttonX_colInitY$$, $DvtLegendAutomation$$.$w$ -= $colInfo_colWidth_isCollapsible_titleGap$$1$$ + $colGap$$, $isRTL$$34$$ || ($DvtLegendAutomation$$.x += $colInfo_colWidth_isCollapsible_titleGap$$1$$ + $colGap$$), $currRow_symbolGap$$ = 0, $button$$67_buttonType_contentHeight$$2_currCol$$++), $currRow_symbolGap$$ === $id$$124_nestedSectionDim_numRows$$);$em$$4_i$$487$$++) {
      }
      return $buttonGap_context$$245_sectionDim$$1_title$$16_titleDim$$1$$
    }
  };
  $DvtLegendRenderer$$.$_renderHorizontalSection$ = function $$DvtLegendRenderer$$$$_renderHorizontalSection$$($DvtLegendObjPeer$$, $DvtLegendKeyboardHandler$$, $DvtLegendEventManager$$, $DvtLegendAutomation$$, $rowHeight$$2$$) {
    if($DvtLegendEventManager$$) {
      var $options$$184$$ = $DvtLegendObjPeer$$.$getOptions$(), $symbolWidth$$ = $options$$184$$.symbolWidth, $symbolGap$$1$$ = $DvtLegendDefaults$$.$getGapSize$($DvtLegendObjPeer$$, $options$$184$$.layout.symbolGapWidth), $colGap$$1$$ = $DvtLegendDefaults$$.$getGapSize$($DvtLegendObjPeer$$, $options$$184$$.layout.columnGap), $textWidths_titleGap$$2$$ = $DvtLegendDefaults$$.$getGapSize$($DvtLegendObjPeer$$, $options$$184$$.layout.titleGapWidth), $numItems$$3$$ = $DvtLegendEventManager$$.items.length, 
      $isRTL$$35$$ = dvt.$Agent$.$isRightToLeft$($DvtLegendObjPeer$$.$getCtx$()), $sectionSpace$$1$$ = $DvtLegendAutomation$$.$clone$(), $title$$17$$ = $DvtLegendRenderer$$.$_renderTitle$($DvtLegendObjPeer$$, $DvtLegendKeyboardHandler$$, $DvtLegendEventManager$$.title, $DvtLegendAutomation$$, $DvtLegendEventManager$$, $JSCompiler_alias_FALSE$$), $sectionDim$$2_titleDim$$2$$ = $title$$17$$ ? $title$$17$$.$measureDimensions$() : new dvt.$Rectangle$($isRTL$$35$$ ? $DvtLegendAutomation$$.x + $DvtLegendAutomation$$.$w$ : 
      $DvtLegendAutomation$$.x, $DvtLegendAutomation$$.y, 0, 0);
      if($DvtLegendEventManager$$.items) {
        0 < $sectionDim$$2_titleDim$$2$$.$w$ && ($sectionSpace$$1$$.$w$ -= $sectionDim$$2_titleDim$$2$$.$w$ + $textWidths_titleGap$$2$$, $isRTL$$35$$ || ($sectionSpace$$1$$.x += $sectionDim$$2_titleDim$$2$$.$w$ + $textWidths_titleGap$$2$$))
      }else {
        return $sectionDim$$2_titleDim$$2$$
      }
      var $textWidths_titleGap$$2$$ = [], $totalWidth$$5$$ = $DvtLegendAutomation$$.$w$ - $sectionSpace$$1$$.$w$, $item$$29_textWidth$$2$$, $i$$488$$;
      for($i$$488$$ = 0;$i$$488$$ < $numItems$$3$$;$i$$488$$++) {
        $item$$29_textWidth$$2$$ = $DvtLegendEventManager$$.items[$i$$488$$], $item$$29_textWidth$$2$$ = Math.ceil(dvt.$TextUtils$.$getTextStringWidth$($DvtLegendObjPeer$$.$getCtx$(), $item$$29_textWidth$$2$$.text, $options$$184$$.textStyle)), $totalWidth$$5$$ += $item$$29_textWidth$$2$$ + $symbolWidth$$ + $symbolGap$$1$$ + $colGap$$1$$, $textWidths_titleGap$$2$$.push($item$$29_textWidth$$2$$)
      }
      0 < $numItems$$3$$ && ($totalWidth$$5$$ -= $colGap$$1$$);
      $sectionDim$$2_titleDim$$2$$ = new dvt.$Rectangle$($isRTL$$35$$ ? $DvtLegendAutomation$$.x + $DvtLegendAutomation$$.$w$ - $totalWidth$$5$$ : $DvtLegendAutomation$$.x, $DvtLegendAutomation$$.y, $totalWidth$$5$$, Math.max($rowHeight$$2$$, $sectionDim$$2_titleDim$$2$$.$h$));
      if($options$$184$$.isLayout || $totalWidth$$5$$ > $DvtLegendAutomation$$.$w$) {
        return $DvtLegendKeyboardHandler$$.removeChild($title$$17$$), $sectionDim$$2_titleDim$$2$$
      }
      for($i$$488$$ = 0;$i$$488$$ < $numItems$$3$$;$i$$488$$++) {
        $item$$29_textWidth$$2$$ = $DvtLegendEventManager$$.items[$i$$488$$], $DvtLegendRenderer$$.$_createLegendItem$($DvtLegendObjPeer$$, $DvtLegendKeyboardHandler$$, $item$$29_textWidth$$2$$, $sectionSpace$$1$$, $textWidths_titleGap$$2$$[$i$$488$$], $rowHeight$$2$$, $i$$488$$), $DvtLegendAutomation$$ = $textWidths_titleGap$$2$$[$i$$488$$] + $symbolWidth$$ + $symbolGap$$1$$, $sectionSpace$$1$$.$w$ -= $DvtLegendAutomation$$ + $colGap$$1$$, $isRTL$$35$$ || ($sectionSpace$$1$$.x += $DvtLegendAutomation$$ + 
        $colGap$$1$$)
      }
      return $sectionDim$$2_titleDim$$2$$
    }
  };
  $DvtLegendRenderer$$.$_calcColumns$ = function $$DvtLegendRenderer$$$$_calcColumns$$($DvtLegendObjPeer$$, $DvtLegendKeyboardHandler$$, $DvtLegendEventManager$$, $DvtLegendAutomation$$, $DvtLegendRenderer$$) {
    for(var $options$$185$$ = $DvtLegendObjPeer$$.$getOptions$(), $fullColWidth_textWidth$$3$$ = 0, $i$$489_symbolWidth$$1$$ = 0;$i$$489_symbolWidth$$1$$ < $DvtLegendAutomation$$.length;$i$$489_symbolWidth$$1$$++) {
      var $rowGap$$1_tempWidth$$ = dvt.$TextUtils$.$getTextStringWidth$($DvtLegendObjPeer$$.$getCtx$(), $DvtLegendAutomation$$[$i$$489_symbolWidth$$1$$].text, $options$$185$$.textStyle);
      $rowGap$$1_tempWidth$$ > $fullColWidth_textWidth$$3$$ && ($fullColWidth_textWidth$$3$$ = $rowGap$$1_tempWidth$$)
    }
    var $i$$489_symbolWidth$$1$$ = $options$$185$$.symbolWidth, $symbolGap$$2$$ = $DvtLegendDefaults$$.$getGapSize$($DvtLegendObjPeer$$, $options$$185$$.layout.symbolGapWidth), $rowGap$$1_tempWidth$$ = $DvtLegendDefaults$$.$getGapSize$($DvtLegendObjPeer$$, $options$$185$$.layout.rowGap);
    $DvtLegendObjPeer$$ = $DvtLegendDefaults$$.$getGapSize$($DvtLegendObjPeer$$, $options$$185$$.layout.columnGap);
    $fullColWidth_textWidth$$3$$ = Math.ceil($i$$489_symbolWidth$$1$$ + $symbolGap$$2$$ + $fullColWidth_textWidth$$3$$);
    $DvtLegendRenderer$$ ? ($DvtLegendRenderer$$ = Math.min(Math.floor(($DvtLegendKeyboardHandler$$.$w$ + $DvtLegendObjPeer$$) / ($fullColWidth_textWidth$$3$$ + $DvtLegendObjPeer$$)), $DvtLegendAutomation$$.length), $DvtLegendEventManager$$ = Math.min(Math.floor(($DvtLegendKeyboardHandler$$.$h$ + $rowGap$$1_tempWidth$$) / ($DvtLegendEventManager$$ + $rowGap$$1_tempWidth$$)), Math.ceil($DvtLegendAutomation$$.length / $DvtLegendRenderer$$)), $DvtLegendRenderer$$ = Math.ceil($DvtLegendAutomation$$.length / 
    $DvtLegendEventManager$$), $DvtLegendEventManager$$ = Math.ceil($DvtLegendAutomation$$.length / $DvtLegendRenderer$$)) : Infinity == $DvtLegendKeyboardHandler$$.$h$ ? ($DvtLegendRenderer$$ = 1, $DvtLegendEventManager$$ = $DvtLegendAutomation$$.length) : ($DvtLegendEventManager$$ = Math.min(Math.floor(($DvtLegendKeyboardHandler$$.$h$ + $rowGap$$1_tempWidth$$) / ($DvtLegendEventManager$$ + $rowGap$$1_tempWidth$$)), $DvtLegendAutomation$$.length), $DvtLegendRenderer$$ = Math.ceil($DvtLegendAutomation$$.length / 
    $DvtLegendEventManager$$), $DvtLegendEventManager$$ = Math.ceil($DvtLegendAutomation$$.length / $DvtLegendRenderer$$));
    $DvtLegendKeyboardHandler$$ = Math.min($fullColWidth_textWidth$$3$$, ($DvtLegendKeyboardHandler$$.$w$ - $DvtLegendObjPeer$$ * ($DvtLegendRenderer$$ - 1)) / $DvtLegendRenderer$$);
    return $DvtLegendKeyboardHandler$$ < $i$$489_symbolWidth$$1$$ ? {width:0, numCols:0, numRows:0} : {width:$DvtLegendKeyboardHandler$$, numCols:$DvtLegendRenderer$$, numRows:$DvtLegendEventManager$$}
  };
  $DvtLegendRenderer$$.$_getRowHeight$ = function $$DvtLegendRenderer$$$$_getRowHeight$$($DvtLegendObjPeer$$) {
    var $DvtLegendKeyboardHandler$$ = $DvtLegendObjPeer$$.$getOptions$(), $DvtLegendEventManager$$ = new dvt.$OutputText$($DvtLegendObjPeer$$.$getCtx$(), "Test");
    $DvtLegendEventManager$$.$setCSSStyle$($DvtLegendKeyboardHandler$$.textStyle);
    $DvtLegendEventManager$$.$alignMiddle$();
    $DvtLegendEventManager$$ = dvt.$TextUtils$.$guessTextDimensions$($DvtLegendEventManager$$).$h$;
    $DvtLegendObjPeer$$ = $DvtLegendKeyboardHandler$$.symbolHeight + $DvtLegendDefaults$$.$getGapSize$($DvtLegendObjPeer$$, $DvtLegendKeyboardHandler$$.layout.symbolGapHeight);
    return Math.ceil(Math.max($DvtLegendEventManager$$, $DvtLegendObjPeer$$))
  };
  $DvtLegendRenderer$$.$_createLegendItem$ = function $$DvtLegendRenderer$$$$_createLegendItem$$($DvtLegendKeyboardHandler$$, $DvtLegendEventManager$$, $DvtLegendAutomation$$, $availSpace$$94_itemRect$$, $textSpace$$1$$, $rowHeight$$4$$) {
    var $hideAndShow$$4_options$$187$$ = $DvtLegendKeyboardHandler$$.$getOptions$(), $context$$246$$ = $DvtLegendKeyboardHandler$$.$getCtx$(), $isRTL$$36$$ = dvt.$Agent$.$isRightToLeft$($context$$246$$), $symbolWidth$$2$$ = $hideAndShow$$4_options$$187$$.symbolWidth, $symbolGap$$3$$ = $DvtLegendDefaults$$.$getGapSize$($DvtLegendKeyboardHandler$$, $hideAndShow$$4_options$$187$$.layout.symbolGapWidth), $symbolX$$ = $isRTL$$36$$ ? $availSpace$$94_itemRect$$.x + $availSpace$$94_itemRect$$.$w$ - $symbolWidth$$2$$ : 
    $availSpace$$94_itemRect$$.x, $textX$$ = $isRTL$$36$$ ? $availSpace$$94_itemRect$$.x + $availSpace$$94_itemRect$$.$w$ - $symbolWidth$$2$$ - $symbolGap$$3$$ : $availSpace$$94_itemRect$$.x + $symbolWidth$$2$$ + $symbolGap$$3$$, $marker$$8$$ = $DvtLegendRenderer$$.$_createLegendSymbol$($DvtLegendKeyboardHandler$$, $symbolX$$, $availSpace$$94_itemRect$$.y, $rowHeight$$4$$, $DvtLegendAutomation$$), $label$$55$$ = $DvtLegendAutomation$$.text, $peer$$24_text$$63$$;
    if($label$$55$$ && ($peer$$24_text$$63$$ = $DvtLegendRenderer$$.$_createLegendText$($DvtLegendEventManager$$, $textSpace$$1$$, $label$$55$$, $hideAndShow$$4_options$$187$$.textStyle))) {
      $peer$$24_text$$63$$.$setX$($textX$$), dvt.$TextUtils$.$centerTextVertically$($peer$$24_text$$63$$, $availSpace$$94_itemRect$$.y + $rowHeight$$4$$ / 2), $isRTL$$36$$ && $peer$$24_text$$63$$.$alignRight$()
    }
    $DvtLegendEventManager$$.$addChild$($marker$$8$$);
    $availSpace$$94_itemRect$$ = new dvt.$Rect$($context$$246$$, $isRTL$$36$$ ? $textX$$ - $textSpace$$1$$ - $DvtLegendRenderer$$.$_FOCUS_GAP$ : $symbolX$$ - $DvtLegendRenderer$$.$_FOCUS_GAP$, $availSpace$$94_itemRect$$.y - $DvtLegendRenderer$$.$_FOCUS_GAP$, $symbolWidth$$2$$ + $symbolGap$$3$$ + $textSpace$$1$$ + 2 * $DvtLegendRenderer$$.$_FOCUS_GAP$, $rowHeight$$4$$ + 2 * $DvtLegendRenderer$$.$_FOCUS_GAP$);
    $availSpace$$94_itemRect$$.$setInvisibleFill$();
    $hideAndShow$$4_options$$187$$ = $hideAndShow$$4_options$$187$$.hideAndShowBehavior;
    "none" != $hideAndShow$$4_options$$187$$ && "off" != $hideAndShow$$4_options$$187$$ && $availSpace$$94_itemRect$$.setCursor("pointer");
    $DvtLegendEventManager$$.$addChild$($availSpace$$94_itemRect$$);
    $DvtLegendEventManager$$ = [$availSpace$$94_itemRect$$, $marker$$8$$];
    $peer$$24_text$$63$$ != $JSCompiler_alias_NULL$$ && $DvtLegendEventManager$$.push($peer$$24_text$$63$$);
    $peer$$24_text$$63$$ = $DvtLegendObjPeer$$.$associate$($DvtLegendEventManager$$, $DvtLegendKeyboardHandler$$, $DvtLegendAutomation$$, $peer$$24_text$$63$$ != $JSCompiler_alias_NULL$$ ? $peer$$24_text$$63$$.$getUntruncatedTextString$() : $JSCompiler_alias_NULL$$, $DvtLegendAutomation$$.shortDesc, $DvtLegendRenderer$$.$_isItemDrillable$($DvtLegendKeyboardHandler$$, $DvtLegendAutomation$$));
    $DvtLegendRenderer$$.$isCategoryHidden$($DvtLegendRenderer$$.$getItemCategory$($DvtLegendAutomation$$), $DvtLegendKeyboardHandler$$) && $marker$$8$$.$setHollow$($peer$$24_text$$63$$.$getColor$());
    if("none" != $hideAndShow$$4_options$$187$$ && "off" != $hideAndShow$$4_options$$187$$ || $DvtLegendAutomation$$.shortDesc != $JSCompiler_alias_NULL$$) {
      $availSpace$$94_itemRect$$.$setAriaRole$("img"), $peer$$24_text$$63$$.$updateAriaLabel$()
    }
  };
  $DvtLegendRenderer$$.$_isItemDrillable$ = function $$DvtLegendRenderer$$$$_isItemDrillable$$($DvtLegendObjPeer$$, $DvtLegendKeyboardHandler$$) {
    return"on" == $DvtLegendKeyboardHandler$$.drilling ? $JSCompiler_alias_TRUE$$ : "off" == $DvtLegendKeyboardHandler$$.drilling ? $JSCompiler_alias_FALSE$$ : "on" == $DvtLegendObjPeer$$.$getOptions$().drilling
  };
  $DvtLegendRenderer$$.$_createLegendText$ = function $$DvtLegendRenderer$$$$_createLegendText$$($DvtLegendObjPeer$$, $DvtLegendKeyboardHandler$$, $DvtLegendEventManager$$, $DvtLegendDefaults$$) {
    $DvtLegendEventManager$$ = new dvt.$OutputText$($DvtLegendObjPeer$$.$getCtx$(), $DvtLegendEventManager$$);
    $DvtLegendEventManager$$.$setCSSStyle$($DvtLegendDefaults$$);
    return $DvtLegendEventManager$$ = dvt.$TextUtils$.$fitText$($DvtLegendEventManager$$, $DvtLegendKeyboardHandler$$, Infinity, $DvtLegendObjPeer$$) ? $DvtLegendEventManager$$ : $JSCompiler_alias_NULL$$
  };
  $DvtLegendRenderer$$.$_createLegendSymbol$ = function $$DvtLegendRenderer$$$$_createLegendSymbol$$($DvtLegendObjPeer$$, $DvtLegendKeyboardHandler$$, $DvtLegendEventManager$$, $DvtLegendDefaults$$, $DvtLegendAutomation$$) {
    var $legendOptions$$6_symbolHeight$$1$$ = $DvtLegendObjPeer$$.$getOptions$(), $symbolType$$ = $DvtLegendAutomation$$.type != $JSCompiler_alias_NULL$$ ? $DvtLegendAutomation$$.type : $DvtLegendAutomation$$.symbolType;
    $DvtLegendAutomation$$.markerShape || ($DvtLegendAutomation$$.markerShape = $legendOptions$$6_symbolHeight$$1$$._markerShape);
    $DvtLegendAutomation$$.color || ($DvtLegendAutomation$$.color = $legendOptions$$6_symbolHeight$$1$$._color);
    $DvtLegendAutomation$$.lineWidth || ($DvtLegendAutomation$$.lineWidth = "lineWithMarker" == $symbolType$$ ? $DvtLegendRenderer$$.$_DEFAULT_LINE_WIDTH_WITH_MARKER$ : $legendOptions$$6_symbolHeight$$1$$._lineWidth);
    var $symbolWidth$$3$$ = $legendOptions$$6_symbolHeight$$1$$.symbolWidth, $legendOptions$$6_symbolHeight$$1$$ = $legendOptions$$6_symbolHeight$$1$$.symbolHeight, $cy$$27$$ = $DvtLegendEventManager$$ + $DvtLegendDefaults$$ / 2, $cx$$26$$ = $DvtLegendKeyboardHandler$$ + $symbolWidth$$3$$ / 2;
    "line" == $symbolType$$ ? $DvtLegendKeyboardHandler$$ = $DvtLegendRenderer$$.$_createLine$($DvtLegendObjPeer$$.$getCtx$(), $DvtLegendKeyboardHandler$$, $DvtLegendEventManager$$, $symbolWidth$$3$$, $DvtLegendDefaults$$, $DvtLegendAutomation$$) : "lineWithMarker" == $symbolType$$ ? ($DvtLegendKeyboardHandler$$ = $DvtLegendRenderer$$.$_createLine$($DvtLegendObjPeer$$.$getCtx$(), $DvtLegendKeyboardHandler$$, $DvtLegendEventManager$$, $symbolWidth$$3$$, $DvtLegendDefaults$$, $DvtLegendAutomation$$), 
    $DvtLegendRenderer$$.$isCategoryHidden$($DvtLegendRenderer$$.$getItemCategory$($DvtLegendAutomation$$), $DvtLegendObjPeer$$) || $DvtLegendKeyboardHandler$$.$addChild$($DvtLegendRenderer$$.$_createMarker$($DvtLegendObjPeer$$, $cx$$26$$, $cy$$27$$, $symbolWidth$$3$$ * $DvtLegendRenderer$$.$_LINE_MARKER_SIZE_FACTOR$, $legendOptions$$6_symbolHeight$$1$$ * $DvtLegendRenderer$$.$_LINE_MARKER_SIZE_FACTOR$, $DvtLegendAutomation$$))) : $DvtLegendKeyboardHandler$$ = "image" == $symbolType$$ ? $DvtLegendRenderer$$.$_createImage$($DvtLegendObjPeer$$, 
    $DvtLegendKeyboardHandler$$, $DvtLegendEventManager$$, $symbolWidth$$3$$, $legendOptions$$6_symbolHeight$$1$$, $DvtLegendDefaults$$, $DvtLegendAutomation$$) : $DvtLegendRenderer$$.$_createMarker$($DvtLegendObjPeer$$, $cx$$26$$, $cy$$27$$, $symbolWidth$$3$$, $legendOptions$$6_symbolHeight$$1$$, $DvtLegendAutomation$$);
    return $DvtLegendKeyboardHandler$$
  };
  $DvtLegendRenderer$$.$_createImage$ = function $$DvtLegendRenderer$$$$_createImage$$($DvtLegendObjPeer$$, $DvtLegendKeyboardHandler$$, $DvtLegendEventManager$$, $DvtLegendDefaults$$, $DvtLegendAutomation$$, $DvtLegendRenderer$$, $item$$34$$) {
    return new dvt.$Image$($DvtLegendObjPeer$$.$getCtx$(), $item$$34$$.source, $DvtLegendKeyboardHandler$$, $DvtLegendEventManager$$ + ($DvtLegendRenderer$$ - $DvtLegendAutomation$$) / 2, $DvtLegendDefaults$$, $DvtLegendAutomation$$)
  };
  $DvtLegendRenderer$$.$_createMarker$ = function $$DvtLegendRenderer$$$$_createMarker$$($DvtLegendObjPeer$$, $DvtLegendKeyboardHandler$$, $DvtLegendEventManager$$, $DvtLegendDefaults$$, $DvtLegendAutomation$$, $DvtLegendRenderer$$) {
    var $context$$248$$ = $DvtLegendObjPeer$$.$getCtx$(), $legendOptions$$7$$ = $DvtLegendObjPeer$$.$getOptions$();
    $DvtLegendObjPeer$$ = $DvtLegendRenderer$$.markerShape;
    var $color$$43$$ = $DvtLegendRenderer$$.markerColor ? $DvtLegendRenderer$$.markerColor : $DvtLegendRenderer$$.color, $pattern$$6$$ = $DvtLegendRenderer$$.pattern;
    $pattern$$6$$ && "none" != $pattern$$6$$ ? ($DvtLegendDefaults$$ = new dvt.$SimpleMarker$($context$$248$$, $DvtLegendObjPeer$$, $legendOptions$$7$$.skin, 0, 0, $DvtLegendDefaults$$, $DvtLegendAutomation$$), $DvtLegendDefaults$$.$setFill$(new dvt.$PatternFill$($pattern$$6$$, $color$$43$$, "#FFFFFF")), $DvtLegendDefaults$$.$setTranslate$($DvtLegendKeyboardHandler$$, $DvtLegendEventManager$$)) : ($DvtLegendDefaults$$ = new dvt.$SimpleMarker$($context$$248$$, $DvtLegendObjPeer$$, $legendOptions$$7$$.skin, 
    $DvtLegendKeyboardHandler$$, $DvtLegendEventManager$$, $DvtLegendDefaults$$, $DvtLegendAutomation$$), $DvtLegendDefaults$$.$setSolidFill$($color$$43$$));
    $DvtLegendRenderer$$.borderColor && $DvtLegendDefaults$$.$setSolidStroke$($DvtLegendRenderer$$.borderColor, $JSCompiler_alias_NULL$$, $DvtLegendRenderer$$._borderWidth ? $DvtLegendRenderer$$._borderWidth : 1);
    "square" == $DvtLegendObjPeer$$ && $DvtLegendDefaults$$.$setPixelHinting$();
    return $DvtLegendDefaults$$
  };
  $DvtLegendRenderer$$.$_createLine$ = function $$DvtLegendRenderer$$$$_createLine$$($DvtLegendObjPeer$$, $DvtLegendKeyboardHandler$$, $DvtLegendEventManager$$, $DvtLegendDefaults$$, $DvtLegendAutomation$$, $DvtLegendRenderer$$) {
    $DvtLegendEventManager$$ += $DvtLegendAutomation$$ / 2;
    $DvtLegendObjPeer$$ = new dvt.$Line$($DvtLegendObjPeer$$, $DvtLegendKeyboardHandler$$, $DvtLegendEventManager$$, $DvtLegendKeyboardHandler$$ + $DvtLegendDefaults$$, $DvtLegendEventManager$$);
    $DvtLegendKeyboardHandler$$ = new dvt.$SolidStroke$($DvtLegendRenderer$$.color, 1, $DvtLegendRenderer$$.lineWidth);
    $DvtLegendRenderer$$ = $DvtLegendRenderer$$.lineStyle;
    "dashed" == $DvtLegendRenderer$$ ? $DvtLegendKeyboardHandler$$.$setType$(dvt.$Stroke$.$convertTypeString$($DvtLegendRenderer$$), "4,2,4") : "dotted" == $DvtLegendRenderer$$ && $DvtLegendKeyboardHandler$$.$setType$(dvt.$Stroke$.$convertTypeString$($DvtLegendRenderer$$), "2");
    $DvtLegendObjPeer$$.$setStroke$($DvtLegendKeyboardHandler$$);
    $DvtLegendObjPeer$$.$setPixelHinting$();
    return $DvtLegendObjPeer$$
  };
  $DvtLegendRenderer$$.$getItemCategory$ = function $$DvtLegendRenderer$$$$getItemCategory$$($DvtLegendObjPeer$$) {
    var $DvtLegendKeyboardHandler$$ = $JSCompiler_alias_NULL$$;
    return $DvtLegendKeyboardHandler$$ = $DvtLegendObjPeer$$.categories && 0 < $DvtLegendObjPeer$$.categories.length ? $DvtLegendObjPeer$$.categories[0] : $DvtLegendObjPeer$$.id ? $DvtLegendObjPeer$$.id : $DvtLegendObjPeer$$.text
  };
  $DvtLegendRenderer$$.$isCategoryHidden$ = function $$DvtLegendRenderer$$$$isCategoryHidden$$($DvtLegendObjPeer$$, $DvtLegendKeyboardHandler$$) {
    var $DvtLegendEventManager$$ = $DvtLegendKeyboardHandler$$.$getOptions$().hiddenCategories;
    return!$DvtLegendEventManager$$ || 0 >= $DvtLegendEventManager$$.length ? $JSCompiler_alias_FALSE$$ : -1 !== dvt.$ArrayUtils$.$getIndex$($DvtLegendEventManager$$, $DvtLegendObjPeer$$)
  };
  dvt.$exportProperty$(dvt, "Legend", dvt.$Legend$);
  dvt.$exportProperty$(dvt.$Legend$, "newInstance", dvt.$Legend$.newInstance);
  dvt.$exportProperty$(dvt.$Legend$.prototype, "destroy", dvt.$Legend$.prototype.$destroy$);
  dvt.$exportProperty$(dvt.$Legend$.prototype, "getAutomation", dvt.$Legend$.prototype.$getAutomation$);
  dvt.$exportProperty$(dvt.$Legend$.prototype, "getPreferredSize", dvt.$Legend$.prototype.$getPreferredSize$);
  dvt.$exportProperty$(dvt.$Legend$.prototype, "highlight", dvt.$Legend$.prototype.$highlight$);
  dvt.$exportProperty$(dvt.$Legend$.prototype, "render", dvt.$Legend$.prototype.$render$);
  dvt.$exportProperty$($DvtLegendAutomation$$.prototype, "getDomElementForSubId", $DvtLegendAutomation$$.prototype.$getDomElementForSubId$);
  dvt.$exportProperty$($DvtLegendAutomation$$.prototype, "getItem", $DvtLegendAutomation$$.prototype.getItem);
  dvt.$exportProperty$($DvtLegendAutomation$$.prototype, "getSection", $DvtLegendAutomation$$.prototype.$getSection$);
  dvt.$exportProperty$($DvtLegendAutomation$$.prototype, "getTitle", $DvtLegendAutomation$$.prototype.$getTitle$)
})();

  return dvt;
});
